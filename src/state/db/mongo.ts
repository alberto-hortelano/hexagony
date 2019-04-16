import { MongoClient, Collection } from 'mongodb';
import { CollectionNames } from '../../constants';

type InitializeCollections = { [key: string]: Collection<any> };

/**
 * There are several collections:
 * - games: initial state of games, to wich to apply actions
 * - actions: collection of actions performed in a game
 * - maps
 * - users
 * 
 * @param url 
 */
export async function initializeCollections(url: string): Promise<InitializeCollections> {
	return new Promise(resolveConnect => {
		MongoClient.connect(url, { useNewUrlParser: true }, async (err, client) => {
			if (err) throw err;
			const db = client.db('hexagony');
			const collectionNames = Object.keys(CollectionNames);
			// Create all collections
			await Promise.all(
				collectionNames.map(
					collectionName => db.createCollection(collectionName)
				)
			);
			// Get all collections into an array
			const collections = await Promise.all(
				collectionNames.map(
					collectionName => new Promise(
						resolve => db.collection(
							collectionName, (err, collection) => {
								if (err) throw err;
								resolve(collection);
							}
						)
					)
				)
			);
			/**
			 * Turn collections into an object like:
			 * { colectionName: collection }
			 * to export it
			 */
			const exportCollections = collections.reduce<InitializeCollections>((result, collection: Collection<any>, key) => {
				result[collectionNames[key]] = collection;
				return result;
			}, {});
			resolveConnect(exportCollections);
		});
	});
}
