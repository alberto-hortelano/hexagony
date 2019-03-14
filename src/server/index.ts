import * as express from 'express';
import * as helmet from 'helmet';
import { resolve } from "path";
import { RendererType, getRenderer } from "../renderer";
// import selectedRenderer from "../../config";
import './mongo';

const app = express();
console.log('SERVER');
console.log('RendererType', RendererType);
// console.log('selectedRenderer', selectedRenderer);
const renderer = getRenderer(RendererType.react);

app.use(helmet());
app.use('/public', express.static(resolve(__dirname, '../../public')));
app.get('/game/:id', renderer);

export default app;