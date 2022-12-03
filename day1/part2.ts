import {getFile, getMax, splitChunksToNumbers, sum, sumChunkNumbers} from "./lib";

async function calorieCounter(file: string) {
    return file.split('\n\n')
        .map(splitChunksToNumbers)
        .map(sumChunkNumbers)
        .sort((a, b) => b - a)
        .slice(0, 3)
        .reduce(sum, 0)
}

calorieCounter(getFile()).then((result) => console.log("most calories:", result))
