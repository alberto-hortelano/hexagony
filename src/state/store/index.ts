import { createStore, combineReducers } from "redux";
import { selectCell } from "../reducers";

interface Cell {
	x: number,
	y: number
}

interface MapState {
	width: number,
	height: number,
	selectedCell: Cell
}

interface GameState {
	map: MapState
}

const store = createStore(combineReducers({ selectCell }));

export default store;
