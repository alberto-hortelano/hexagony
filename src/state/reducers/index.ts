import { combineReducers } from "redux";
import { selectAction } from "./selectAction";
import { selectCell } from "./selectCell";

export const rootReducer = combineReducers({
	selectAction,
	selectCell,
});

export type AppState = ReturnType<typeof rootReducer>
