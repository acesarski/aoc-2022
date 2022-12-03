import { readFileSync } from 'node:fs';

export const getFile = () => readFileSync(__dirname + '/input.txt', 'utf8');
export const sum = (a: number, b: number) => a + b;

export const splitIntoChunks = (line: string) => [line.slice(0, line.length / 2), line.slice(line.length / 2)]

export const getCommonItem = (elements: string[]) =>
    elements[0].split('')
        .filter((item) => elements.every(el => el.includes(item)))
        .join('')

export const normalize = (line: string) => {
    return line.split('')[0]
};

export const isLowerCase = (item: string) => item === item.toLowerCase();

export const getItemPriority = (item: string) => {
    return isLowerCase(item) ? item.charCodeAt(0) - 96 : item.charCodeAt(0) - 64 + 26;
}

export const splitIntoGroups = (arr: string[]) => arr.reduce((acc, cur, index) => {
    if (index % 3 === 0) {
        acc.push([]);
    }

    acc[acc.length - 1].push(cur);

    return acc;
}, [] as string[][]);