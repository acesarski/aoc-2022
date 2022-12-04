import {getFile, hasCommonRange, splitIntoRanges,} from "./lib";

async function calorieCounter(file: string) {
    return file.split('\n')
        .map(splitIntoRanges)
        .filter(hasCommonRange)
        .length
}

calorieCounter(getFile()).then((result) => console.log("result:", result))
