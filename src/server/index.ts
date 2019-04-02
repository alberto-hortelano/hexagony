import * as express from 'express';
import * as helmet from 'helmet';
import { resolve } from "path";
import { RendererType, getRenderer } from "../renderer";

const app = express();
console.log('RendererType', RendererType);
const renderer = getRenderer(RendererType.react);

app.use(helmet());
app.use('/public', express.static(resolve(__dirname, '../../public')));
app.get('/game/*', renderer);

export default app;