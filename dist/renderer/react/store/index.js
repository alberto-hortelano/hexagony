"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const reducers_1 = require("../reducers");
const store = redux_1.createStore(redux_1.combineReducers({ selectCell: reducers_1.selectCell }));
exports.default = store;
//# sourceMappingURL=index.js.map