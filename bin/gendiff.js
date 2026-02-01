#!/usr/bin/env node
import { program } from 'commander';
import { readFileSync } from 'node:fs';
import { cwd } from 'node:process';
import { resolve } from 'node:path';
import parseFromFile from './parseFromFile.js';

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .option('-f, --format [type]', 'output format')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2) => {
    const currentDirectory = cwd();

    const normolizedFilePath1 = resolve(currentDirectory, filepath1);
    const fileContent1 = readFileSync(normolizedFilePath1, 'utf-8');
    console.log(parseFromFile(fileContent1));

    const normolizedFilePath2 = resolve(currentDirectory, filepath2);
    const fileContent2 = readFileSync(normolizedFilePath2, 'utf-8');
    console.log(parseFromFile(fileContent2));
  })

program.parse(process.argv);