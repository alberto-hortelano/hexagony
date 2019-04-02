import { readFileSync } from "fs";
import { createServer } from "https";
import { resolve } from "path";
import { Collection } from "mongodb";
import { add, substract } from "./assembly";
import { initializeCollections } from "./state/db/mongo";
import { getApp } from "./server";
import { RendererType } from "./constants";
import { portNumber, mongoUrl } from "./config";

console.log('add 2 + 3:', add(2, 3));
console.log('substract 3 - 1:', substract(3, 1));

const options = {
	key: readFileSync(resolve(__dirname, '../secret/localhost.key'), 'utf8'),
	cert: readFileSync(resolve(__dirname, '../secret/localhost.crt'), 'utf8')
};

let collections: { [key: string]: Collection<any> };

/**
 * Ensure collections is initialized before any call to getCollection is done
 * @param port 
 */
async function startServer(port: number) {
	try {
		collections = await initializeCollections(mongoUrl);
	} catch (error) {
		console.error(error);
		return;
	}
	const app = getApp(RendererType.react);
	const server = createServer(options, app);
	server.listen(port);
}

/**
 * Get collections or throw an error if not initailized yet
 * @returns collections
 */
export function getCollection(name: string) {
	if (!collections) {
		throw new Error('collections not initialized yet, it should have been initialized at startServer');
	}
	if (!collections[name]) {
		throw new Error(`collection "${name}" does not exists`);
	}
	return collections[name];
}

startServer(portNumber);
