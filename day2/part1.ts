import {getFile, mapActionToResult, mapLetterToPoint, mapResultToPoints, normalizeLetters, sum} from "./lib";

async function scoreAnalyser(file: string) {
    return file.split('\n')
        .map((line) => line.split(' '))
        .map(([opponent, you]) => [
            mapLetterToPoint(you) ?? 0,
            mapResultToPoints(
                mapActionToResult(
                    normalizeLetters(opponent),
                    normalizeLetters(you)
                )
            ) ?? 0
        ]).map(points => points.reduce(sum, 0))
        .reduce(sum, 0);
}

scoreAnalyser(getFile()).then((result) => console.log("total score:", result))
