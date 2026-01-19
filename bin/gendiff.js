#!/usr/bin/env node
import { program } from 'commander';
import parseDataFromFile from './parser.js';

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .option('-f, --format [type]', 'output format')
  .arguments('<filepath1> <filepath2>')
  .action((file1, file2) => {
    console.log(parseDataFromFile(file1));
    console.log(parseDataFromFile(file2));
  })

program.parse(process.argv);