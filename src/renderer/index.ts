import { Request, Response, NextFunction } from 'express';
import { reactRenderer } from "./react";

export enum RendererType {
	default,
	react,
	vue
};

const renderers: { (req: Request, res: Response): void }[] = [
	defaultRenderer,
	reactRenderer
];

function defaultRenderer(req: Request, res: Response) {
	res.send(
		'Hello world!'
	);
}

export const getRenderer = (rendererType: RendererType = RendererType.default) => renderers[rendererType];