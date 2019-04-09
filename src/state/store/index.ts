import { createStore, combineReducers } from "redux";
import rootReducer from "../reducers";
import { initialState } from "../reducers/initialState";

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

const store = createStore(rootReducer, initialState);

export default store;
