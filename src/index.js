#! /usr/bin/env node
const fs = require('fs');
const path = require('path');

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

function ensureDirectoryExistence(filePath) {
  const dirname = path.dirname(filePath);
  if (fs.existsSync(dirname)) {
    return true;
  }
  ensureDirectoryExistence(dirname);
  fs.mkdirSync(dirname);
}

function writeLocaleToFile(argv, locale) {
  const localeString = JSON.stringify(locale, null, 2);
  ensureDirectoryExistence(argv.output);
  fs.writeFileSync(argv.output, localeString, argv.encoding);
}

function executeApp() {
  const argv = getParsedArguments();
  const locale = getLocaleFromArguments(argv);
  const transformedLocale = processLocale(locale);
  writeLocaleToFile(argv, transformedLocale);
}

executeApp();