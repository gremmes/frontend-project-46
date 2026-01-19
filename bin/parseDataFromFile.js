import { readFileSync } from 'node:fs';

const parseDataFromFile = (filepath) => {
  const fileContent = readFileSync(filepath, 'utf-8');
  return JSON.parse(fileContent);
}

export default parseDataFromFile;