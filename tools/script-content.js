const fs = require('fs');
const path = require('path');
const Ajv2020 = require('ajv/dist/2020');
const schema = require('../extensions/script-content/1.0.0/script-content-schema.json');
const validate = new Ajv2020({ allErrors: true, strict: false }).compile(schema);

function referenceErrors(payload, document = {}) {
    const errors = [], ids = new Set();
    function ordered(items) {
        let previous = 0;
        for (const item of items) {
            if (ids.has(item.id)) errors.push(`Duplicate ID: ${item.id}`);
            ids.add(item.id);
            if (item.order <= previous) errors.push(`Order must increase: ${item.id}`);
            previous = item.order;
        }
    }
    ordered(payload.scenes);
    for (const scene of payload.scenes) {
        ordered(scene.blocks);
        for (const block of scene.blocks) {
            if (block.type !== 'dual_dialogue') continue;
            for (const side of [block.left, block.right]) {
                ordered(side);
                if (side[0].type !== 'character' || !side.some(b => b.type === 'dialogue')) errors.push('Dual dialogue needs a character and dialogue on both sides.');
                if (side.slice(1).some(b => !['dialogue', 'parenthetical'].includes(b.type))) errors.push('Dual dialogue contains a non-speech block.');
            }
        }
    }
    for (const moment of document.storytelling_moments || []) {
        for (const ref of moment.references || []) {
            if (ref.system === 'ncp-script-content:' && !ref.uri && !ids.has(ref.value)) errors.push(`Unknown script content reference: ${ref.value}`);
        }
    }
    return errors;
}

function scriptContentErrors(document) {
    const declarations = (document.extensions || []).filter(d => d.namespace === 'ncp-script-content:');
    const payload = document.payloads?.['ncp-script-content:'];
    if (!declarations.length && payload === undefined) return [];
    if (declarations.length !== 1 || declarations[0].version !== '1.0.0' || declarations[0].schema !== schema.$id) return ['Script Content requires one supported version and schema declaration.'];
    if (!validate(payload)) return validate.errors.map(e => `${e.instancePath || '/'} ${e.message}`);
    return referenceErrors(payload, document);
}

function fountain(payload) {
    function textBlock(b) {
        const t = b.text;
        switch (b.type) {
            case 'scene_heading': return t;
            case 'character': return t;
            case 'action': return t;
            case 'parenthetical': return t.startsWith('(') && t.endsWith(')') ? t : `(${t})`;
            case 'transition': return t;
            case 'lyrics': return t.split('\n').map(line => '~' + line).join('\n');
            case 'section': return '# ' + t;
            case 'synopsis': return '= ' + t;
            case 'note': return '[[' + t + ']]';
            case 'boneyard': return '/*\n' + t + '\n*/';
            default: return t;
        }
    }
    function sequence(blocks) {
        let out = '', previous;
        for (const b of blocks) {
            const speech = ['dialogue', 'parenthetical'].includes(b.type) && ['character', 'dialogue', 'parenthetical'].includes(previous);
            let text;
            if (b.type === 'dual_dialogue') {
                const right = sequence(b.right).replace(/^([^\n]+)/, '$1 ^');
                text = sequence(b.left) + '\n\n' + right;
            } else text = textBlock(b);
            out += (out ? (speech ? '\n' : '\n\n') : '') + text;
            previous = b.type;
        }
        return out;
    }
    return payload.scenes.map(s => sequence(s.blocks)).join('\n\n') + '\n';
}

module.exports = { fountain, scriptContentErrors };
if (require.main === module) {
    try {
        const [input, output] = process.argv.slice(2);
        if (!input || !output) throw new Error('Usage: node tools/script-content.js INPUT.ncp.json OUTPUT.fountain');
        const document = JSON.parse(fs.readFileSync(input, 'utf8'));
        if (!document.payloads?.['ncp-script-content:']) throw new Error('Script Content payload is missing.');
        const errors = scriptContentErrors(document);
        if (errors.length) throw new Error(errors.join('; '));
        fs.writeFileSync(output, fountain(document.payloads['ncp-script-content:']), { flag: 'wx' });
        console.log(output);
    } catch (error) { console.error(error.message); process.exitCode = 1; }
}
