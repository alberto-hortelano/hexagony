import * as express from 'express';
import * as helmet from 'helmet';
import { resolve } from "path";
import { RendererType, CollectionNames } from '../constants';
import { getRenderer } from '../renderer';
import { getCollection } from '../index';

export function getApp(rendererType: RendererType) {
	const app = express();
	const renderer = getRenderer(rendererType);
	// const gamesCollection = getCollection(CollectionNames.Games);
	// console.log(gamesCollection);

	app.use(helmet());
	app.use('/public', express.static(resolve(__dirname, '../../public')));
	app.get('/game/*', renderer);

	return app;
}