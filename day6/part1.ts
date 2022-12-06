import {getFile, hasUniqueValues} from "./lib";

async function resolve(file: string) {
    for (let i = 4; i + 4 <= file.length; i += 1) {
        const group = file.slice(i - 4, i);

        if (hasUniqueValues(group)) {
            return i;
        }
    }
}

resolve(getFile()).then((result) => console.log("result:", result))
