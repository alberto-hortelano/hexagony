import { MongoClient } from 'mongodb';
const url = "mongodb://mongodb:27017/hexagony";

MongoClient.connect(url, function (err, db) {
	if (err) throw err;
	console.log("Database created!");
	db.close();
});
