"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const react_router_1 = require("react-router");
const react_redux_1 = require("react-redux");
const react_helmet_1 = require("react-helmet");
const store_1 = require("./store");
const Board_1 = require("./board/Board");
const helmet = react_helmet_1.Helmet.renderStatic();
function reactRenderer(req, res) {
    console.log(req.originalUrl);
    res.setHeader("content-type", "text/html");
    const htmlAttrs = helmet.htmlAttributes.toComponent();
    const bodyAttrs = helmet.bodyAttributes.toComponent();
    let context = {};
    ReactDOMServer.renderToNodeStream(React.createElement("html", Object.assign({}, htmlAttrs),
        React.createElement("head", null,
            React.createElement("link", { rel: "stylesheet", type: "text/css", href: "https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" }),
            React.createElement("link", { rel: "stylesheet", type: "text/css", href: "/public/index.css" }),
            React.createElement("script", { src: "/public/react.bundle.js" }),
            helmet.title.toComponent(),
            helmet.meta.toComponent(),
            helmet.link.toComponent()),
        React.createElement("body", Object.assign({}, bodyAttrs),
            React.createElement("div", { id: "content" },
                React.createElement(react_router_1.StaticRouter, { location: req.url, context: context },
                    React.createElement(react_redux_1.Provider, { store: store_1.default },
                        React.createElement(react_router_1.Route, { path: '/:initialState', render: props => React.createElement(Board_1.BoardCT, Object.assign({}, props, { height: 30, width: 50 })) }))))))).pipe(res);
}
exports.reactRenderer = reactRenderer;
//# sourceMappingURL=index.js.map