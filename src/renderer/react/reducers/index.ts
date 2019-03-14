import { initialState } from "./initialState";
import { AnyAction } from "redux";

export function selectCell(state = initialState, action: AnyAction) {
	console.log("selectCell", state, action);
	return state;
}
