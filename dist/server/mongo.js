"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
const url = "mongodb://mongodb:27017/hexagony";
mongodb_1.MongoClient.connect(url, function (err, db) {
    if (err)
        throw err;
    console.log("Database created!");
    db.close();
});
//# sourceMappingURL=mongo.js.map