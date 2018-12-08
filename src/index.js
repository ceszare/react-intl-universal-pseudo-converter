const fs = require('fs');

function getParsedArguments() {
  return require('./argsParser');
}

function getLocaleFromArguments(argv) {
  return JSON.parse(fs.readFileSync(argv.file, argv.encoding));
}

function processLocale(locale) {
  const transform_tree = require('./transformer');
  return transform_tree(locale);
}

function writeLocaleToFile(argv, locale) {
  const localeString = JSON.stringify(locale, null, 2);
  fs.writeFileSync(argv.output, localeString, argv.encoding);
}

function executeApp() {
  const argv = getParsedArguments();
  const locale = getLocaleFromArguments(argv);
  const transformedLocale = processLocale(locale);
  writeLocaleToFile(argv, transformedLocale);
}

executeApp();