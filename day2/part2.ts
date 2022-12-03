import {
    getFile, mapActionToAnotherActionBasedOnResult, mapActionToPoint,
    mapLetterToResult,
    mapResultToPoints,
    normalizeLetters,
    sum
} from "./lib";

async function scoreAnalyser(file: string) {
    return file.split('\n')
        .map((line) => line.split(' '))
        .map(([opponent, result]) => [
            mapActionToPoint(
                mapActionToAnotherActionBasedOnResult(
                    normalizeLetters(opponent),
                    mapLetterToResult(result))
            ) ?? 0,
            mapResultToPoints(
                mapLetterToResult(result)
            ) ?? 0
        ]).map(points => points.reduce(sum, 0))
        .reduce(sum, 0);
}

scoreAnalyser(getFile()).then((result) => console.log("total score:", result))
