import { readFileSync } from 'node:fs';

export const getFile = () => readFileSync(__dirname + '/input.txt', 'utf8');

export const hasUniqueValues = (group: string) => group.length === [...new Set(group.split(''))].length;