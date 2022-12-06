import {getFile, hasUniqueValues} from "./lib";

async function resolve(file: string) {
    for (let i = 14; i + 14 <= file.length; i += 1) {
        const group = file.slice(i - 14, i);

        if (hasUniqueValues(group)) {
            return i;
        }
    }
}

resolve(getFile()).then((result) => console.log("result:", result))
