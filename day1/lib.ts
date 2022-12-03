import { readFileSync } from 'node:fs';

export const getFile = () => readFileSync(__dirname + '/input.txt', 'utf8');

export const parseDecimal = (str: string) => parseInt(str, 10);

export const splitChunksToNumbers = (str: string) => str.split('\n').map(parseDecimal);

export const sum = (a: number, b: number) => a + b;

export const sumChunkNumbers = (arr: number[]) => arr.reduce(sum, 0);

export const getMax = (a: number, b: number) => Math.max(a, b);
