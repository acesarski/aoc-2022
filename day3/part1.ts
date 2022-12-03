import {getCommonItem, getFile, getItemPriority, normalize, splitIntoChunks, sum} from "./lib";

async function prioritySum(file: string) {
    return file.split('\n')
        .map(splitIntoChunks)
        .map(getCommonItem)
        .map(normalize)
        .map(getItemPriority)
        .reduce(sum, 0);
}

prioritySum(getFile()).then((result) => console.log("result:", result))
