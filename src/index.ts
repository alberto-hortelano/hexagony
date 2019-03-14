import { readFileSync } from "fs";
import { createServer } from "https";
import { resolve } from "path";
import { add, substract } from "./assembly";
import app from "./server";

console.log('add 2 + 3:', add(2, 3));
console.log('substract 3 - 1:', substract(3, 1));

const options = {
	key: readFileSync(resolve(__dirname, '../secret/localhost.key'), 'utf8'),
	cert: readFileSync(resolve(__dirname, '../secret/localhost.crt'), 'utf8')
};

const server = createServer(options, app);

server.listen(8802);
