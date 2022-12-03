import {getCommonItem, getFile, getItemPriority, normalize, splitIntoChunks, splitIntoGroups, sum} from "./lib";

async function prioritySum(file: string) {
    const lines = file.split('\n')

    return splitIntoGroups(lines)
        .map(getCommonItem)
        .map(normalize)
        .map(getItemPriority)
        .reduce(sum, 0);
}

prioritySum(getFile()).then((result) => console.log("result:", result))
