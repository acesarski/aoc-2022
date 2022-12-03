import {getFile, getMax, splitChunksToNumbers, sumChunkNumbers} from "./lib";

async function calorieCounter(file: string) {
    return file.split('\n\n')
        .map(splitChunksToNumbers)
        .map(sumChunkNumbers)
        .reduce(getMax, 0)
}

calorieCounter(getFile()).then((result) => console.log("most calories:", result))
