#!/usr/bin/env node
import { program } from 'commander';
import { readFileSync } from 'node:fs';

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .option('-f, --format [type]', 'output format')
  .arguments('<filepath1> <filepath2>')
  .action((file1, file2) => {
    console.log('file1:' + readFileSync(file1));
    console.log('file2:' + readFileSync(file2));
  })

program.parse(process.argv);