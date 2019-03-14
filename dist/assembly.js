"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = require("path");
const source = fs_1.readFileSync(path_1.resolve(__dirname, "./wasm/untouched.wasm"));
const compiled = new WebAssembly.Module(source);
const imports = {};
_a = new WebAssembly.Instance(compiled, imports).exports, exports.add = _a.add, exports.substract = _a.substract;
//# sourceMappingURL=assembly.js.map