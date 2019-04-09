import * as React from "react";
import { Request, Response } from "express";
import * as ReactDOMServer from "react-dom/server";
import { StaticRouter } from 'react-router-dom';
import { Helmet } from "react-helmet";
import { Routes } from './Routes';

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
				<link rel="stylesheet" type="text/css" href="/public/reboot.min.css" />
				<link rel="stylesheet" type="text/css" href="/public/index.css" />
				{helmet.title.toComponent()}
				{helmet.meta.toComponent()}
				{helmet.link.toComponent()}
			</head>
			<body {...bodyAttrs}>
				<div id="content">
					<StaticRouter location={req.url} context={context} >
						<Routes />
					</StaticRouter>
				</div>
				<script async src="/public/react.bundle.js"></script>
			</body>
		</html>
	).pipe(res);
}
