import { initialState } from "./initialState";
import { AnyAction, combineReducers } from "redux";

export function selectCell(state = initialState, action: AnyAction) {
	console.log("selectCell");
	switch (action.type) {
		case 'NOPE':
		default:
			return state;
	}
}

export function selectAction(state = initialState, action: Action<any>) {
	console.log("selectAction");
	switch (action.type) {
		case 'SELECT_MAP_TERRAIN':
			console.log("log: selectAction -> SELECT_MAP_TERRAIN", state, action);
			return {
				...state,
				selectedAction: action
			};
		default:
			return state;
	}
}
export default combineReducers({
	selectCell,
	selectAction
});

