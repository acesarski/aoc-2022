import {readFileSync} from 'node:fs';

export enum Result {win = 'win', loss = 'loss', draw = 'draw'}

export enum Action {rock = 'rock', paper = 'paper', scissors = 'scissors'}

export const getFile = () => readFileSync(__dirname + '/input.txt', 'utf8');

export const mapLetterToPoint = (letter: string) => ({
    X: 1,
    Y: 2,
    Z: 3
}[letter]);

export const mapActionToPoint = (action?: Action) => action === undefined ? 0 : ({
    [Action.rock]: 1,
    [Action.paper]: 2,
    [Action.scissors]: 3
}[action]);

export const normalizeLetters = (letter: string): Action | undefined => ({
    X: Action.rock,
    A: Action.rock,
    Y: Action.paper,
    B: Action.paper,
    Z: Action.scissors,
    C: Action.scissors,
}[letter])

export const mapActionToResult = (opponent?: Action, you?: Action): Result  => {
    if (opponent === you) {
        return Result.draw;
    }

    if (opponent === Action.rock && you === Action.paper) {
        return Result.win;
    }

    if (opponent === Action.paper && you === Action.scissors) {
        return Result.win;
    }

    if (opponent === Action.scissors && you === Action.rock) {
        return Result.win;
    }

    return Result.loss;
}

export const mapActionToAnotherActionBasedOnResult = (action?: Action, result?: Result): Action | undefined => {
    return action === undefined || result === undefined ? undefined : {
        [Result.draw]: action,
        [Result.win]: {
            [Action.rock]: Action.paper,
            [Action.paper]: Action.scissors,
            [Action.scissors]: Action.rock,
        }[action],
        [Result.loss]: {
            [Action.rock]: Action.scissors,
            [Action.paper]: Action.rock,
            [Action.scissors]: Action.paper,
        }[action]
    }[result];
}

export const mapLetterToResult = (letter: string): Result | undefined => ({
    X: Result.loss,
    Y: Result.draw,
    Z: Result.win,
}[letter])

export const mapResultToPoints = (result?: Result) => result === undefined ? 0 : ({
    win: 6,
    loss: 0,
    draw: 3
}[result]);

export const sum = (a: number, b: number) => a + b;