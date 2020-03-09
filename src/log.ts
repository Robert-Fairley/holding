import { PROMPT } from "./constants";

export const log = <T>(msg?: T) => {
    process.stdout.write(`${PROMPT} ${msg ?? 'NO DATA'}\n`);
    return void 0;
}
