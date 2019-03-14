import { readFileSync } from "fs";
import { resolve } from "path";

const source = readFileSync(resolve(__dirname, "./wasm/untouched.wasm"));
const compiled = new WebAssembly.Module(source);
const imports = {};

export const { add, substract } = new WebAssembly.Instance(compiled, imports).exports;
