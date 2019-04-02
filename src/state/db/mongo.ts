import { MongoClient } from 'mongodb';
const url = "mongodb://mongodb:27017/hexagony";

export const getMongoClient = async () => new Promise(resolve => {
	MongoClient.connect(url, (err, client) => {
		if (err) throw err;
		resolve(client.db('hexagony').collection('stateV1'));
	});
});
