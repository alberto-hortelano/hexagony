"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const https_1 = require("https");
const path_1 = require("path");
const assembly_1 = require("./assembly");
const server_1 = require("./server");
console.log('add 2 + 3:', assembly_1.add(2, 3));
console.log('substract 3 - 1:', assembly_1.substract(3, 1));
const options = {
    key: fs_1.readFileSync(path_1.resolve(__dirname, '../secret/localhost.key'), 'utf8'),
    cert: fs_1.readFileSync(path_1.resolve(__dirname, '../secret/localhost.crt'), 'utf8')
};
const server = https_1.createServer(options, server_1.default);
server.listen(8802);
//# sourceMappingURL=index.js.map