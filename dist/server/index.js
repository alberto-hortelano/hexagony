"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const helmet = require("helmet");
const path_1 = require("path");
const renderer_1 = require("../renderer");
// import selectedRenderer from "../../config";
require("./mongo");
const app = express();
console.log('SERVER');
console.log('RendererType', renderer_1.RendererType);
// console.log('selectedRenderer', selectedRenderer);
const renderer = renderer_1.getRenderer(renderer_1.RendererType.react);
app.use(helmet());
app.use('/public', express.static(path_1.resolve(__dirname, '../../public')));
app.get('/game/:id', renderer);
exports.default = app;
//# sourceMappingURL=index.js.map