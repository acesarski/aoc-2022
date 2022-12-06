import {readFileSync} from "node:fs";

export const getFile = () => readFileSync(__dirname + '/input.txt', 'utf8');

const pipe = (...fns: Function[]) => (x: any) => fns.reduce((v, f) => f(v), x);

export const parseCrates = (str: string): string[][] => {
  const state = str.split('')
    .map((char, index) => index % 4 === 0 ? str.slice(index, index + 3) : '')
    .filter(Boolean)
    .filter(pipe(
      v => v.trim(),
      parseInt,
      Number.isNaN
    ))

  const boxes: Record<string, string[]> = {
    '1': [],
    '2': [],
    '3': [],
    '4': [],
    '5': [],
    '6': [],
    '7': [],
    '8': [],
    '9': [],
  }

  const preparedBoxes = state.reduce((acc, curr, currentIndex) => {
    if (curr === '   ') {
      return acc
    }

    return { ...acc, [`${(currentIndex % 9) + 1}`]: [...acc[`${(currentIndex % 9) + 1}`], curr] }
  }, boxes)

  return Object.values(Object.keys(preparedBoxes).reduce((prev, key) => ({ ...prev, [key]: preparedBoxes[key].reverse() }), {}))
}

export const parseInstructions = (str: string) => str.split('\n')
  .map((instruction) => instruction.split(' '))
  .map(([moveLabel, quantity, fromLabel, from, toLabel, to]) =>
    ({ quantity: parseInt(quantity), from: parseInt(from), to: parseInt(to) })
  );


export const execute = (state: string[][], instructions: { quantity: number, from: number, to: number }[], reversed = true) => {
  const move = (quantity: number, from: number, to: number) => {
    console.log(state)
    console.log('---')
    console.log(quantity, from, to)
    const fromCrate = state[from - 1];
    const toCrate = state[to - 1];

    const moved = fromCrate.splice(fromCrate.length - quantity, quantity);

    state[to - 1] = [...toCrate, ...(reversed ? moved.reverse() : moved)];
  }

  instructions.forEach(({ quantity, from, to }) => move(quantity, from, to));

  console.log(state)
  return state;
}