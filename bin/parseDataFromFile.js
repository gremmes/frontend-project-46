import { readFileSync } from 'node:fs';
import { cwd } from 'node:process';
import { resolve } from 'node:path';

const parseDataFromFile = (filepath) => {
  const currentDirectory = cwd();
  const normolizedFilePath = resolve(currentDirectory, filepath);
  const fileContent = readFileSync(normolizedFilePath, 'utf-8');
  return JSON.parse(fileContent);
}

export default parseDataFromFile;