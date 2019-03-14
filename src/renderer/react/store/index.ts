import { createStore, combineReducers } from "redux";

import { selectCell } from "../reducers";

const store = createStore(combineReducers({ selectCell }));

export default store;
