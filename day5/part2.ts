import {execute, getFile, parseCrates, parseInstructions} from "./lib";

async function resolve(file: string) {
  const [stateString, instructionsString] = file.split('\n\n');

  const instructions = parseInstructions(instructionsString);
  const state = parseCrates(stateString)

  return execute(state, instructions, false)
    .map(crate => crate[crate.length - 1])
    .map((crate) => crate.split('')[1])
    .join('');
}

resolve(getFile()).then((result) => console.log("result:", result))
