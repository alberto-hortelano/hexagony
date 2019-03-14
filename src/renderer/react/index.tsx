import * as React from "react";
import { Request, Response, NextFunction } from "express";
import * as ReactDOMServer from "react-dom/server";
import { Route, StaticRouter } from "react-router";
import { Provider } from "react-redux";
import { Helmet } from "react-helmet";
import store from "./store";
import { BoardCT } from "./board/Board";

const helmet = Helmet.renderStatic();

export function reactRenderer(req: Request, res: Response) {
	console.log(req.originalUrl);
	res.setHeader("content-type", "text/html");
	const htmlAttrs = helmet.htmlAttributes.toComponent();
	const bodyAttrs = helmet.bodyAttributes.toComponent();
	let context = {};
	ReactDOMServer.renderToNodeStream(
		<html {...htmlAttrs}>
			<head>
				<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" />
				<link rel="stylesheet" type="text/css" href="/public/index.css" />
				<script src="/public/react.bundle.js"></script>
				{helmet.title.toComponent()}
				{helmet.meta.toComponent()}
				{helmet.link.toComponent()}
			</head>
			<body {...bodyAttrs}>
				<div id="content">
					<StaticRouter location={req.url} context={context} >
						<Provider store={store}>
							<Route path='/:initialState' render={props => <BoardCT {...props} height={30} width={50} />} />
						</Provider>
					</StaticRouter>
				</div>
			</body>
		</html>
	).pipe(res);
}
