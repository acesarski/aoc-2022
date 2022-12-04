import {getFile, isOneRangeSubsetOfAnother, splitIntoRanges,} from "./lib";

async function calorieCounter(file: string) {
    return file.split('\n')
        .map(splitIntoRanges)
        .filter(isOneRangeSubsetOfAnother)
        .length
}

calorieCounter(getFile()).then((result) => console.log("result:", result))
