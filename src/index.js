const fs = require('fs');
const { pseudoTranslate } = require('icu-pseudo-translate');
const argv = require('yargs')
  .usage('Usage: $0 <command> [options]')
  .command('create', 'Creates a pseudo-localized file')
  .example('$0 create -f en-us.json', 'creates a pseudo-localized file from \'en-us.json\'')
  .alias('f', 'file')
  .nargs('f', 1)
  .describe('f', 'Input file')
  .demandOption(['f'])
  .alias('e', 'encoding')
  .nargs('e', 1)
  .describe('e', 'File encoding')
  .default('e', 'utf8')
  .alias('o', 'output')
  .nargs('o', 1)
  .describe('o', 'Output file')
  .default('o', 'pseudo.locale.json')
  .help('h')
  .alias('h', 'help')
  .alias('v', 'version')
  .epilog('copyright 2018 Cesar Zapata')
  .argv;

const locale = JSON.parse(fs.readFileSync(argv.file, argv.encoding));

function transform_tree(node) {
  if (typeof node === 'string') {
    return pseudoTranslate(node);
  } else if (Array.isArray(node)){
    return node.reduce((accumulator, currentValue) => {
      return [...accumulator, transform_tree(currentValue)];
    }, []);
  } else if (typeof node === 'object' && node !== null) {
    return Object.keys(node).reduce((accumulator, currentValue) => {
      return { ...accumulator, [currentValue]: transform_tree(node[currentValue]) };
    }, {});
  } else {
    return node;
  }
}

console.log(JSON.stringify(transform_tree(locale), null, 4));