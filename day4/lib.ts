import { readFileSync } from 'node:fs';

type Range = {
    min: number;
    max: number;
}

export const getFile = () => readFileSync(__dirname + '/input.txt', 'utf8');

export const splitIntoRanges = (line: string) => {
    const [rangeA, rangeB] = line.split(',');
    const [minA, maxA] = rangeA.split('-').map(Number);
    const [minB, maxB] = rangeB.split('-').map(Number);

    return { rangeA: { min: minA, max: maxA }, rangeB: { min: minB, max: maxB } };
}

export const isOneRangeSubsetOfAnother = (ranges: { rangeA: Range, rangeB: Range }) => {
    const { rangeA, rangeB } = ranges;
    return (rangeA.min >= rangeB.min && rangeA.max <= rangeB.max) || (rangeB.min >= rangeA.min && rangeB.max <= rangeA.max);
}

export const hasCommonRange = (ranges: { rangeA: Range, rangeB: Range }) => {
    const { rangeA, rangeB } = ranges;

    // has common range
    return (rangeA.min <= rangeB.min && rangeA.max >= rangeB.min) || (rangeB.min <= rangeA.min && rangeB.max >= rangeA.min);
}