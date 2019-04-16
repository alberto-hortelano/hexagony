import { createStore } from "redux";
import { rootReducer } from "../reducers";

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

export const store = createStore(rootReducer);
