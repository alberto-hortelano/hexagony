"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("./react");
var RendererType;
(function (RendererType) {
    RendererType[RendererType["default"] = 0] = "default";
    RendererType[RendererType["react"] = 1] = "react";
    RendererType[RendererType["vue"] = 2] = "vue";
})(RendererType = exports.RendererType || (exports.RendererType = {}));
;
const renderers = [
    defaultRenderer,
    react_1.reactRenderer
];
function defaultRenderer(req, res) {
    res.send('Hello world!');
}
exports.getRenderer = (rendererType = RendererType.default) => renderers[rendererType];
//# sourceMappingURL=index.js.map