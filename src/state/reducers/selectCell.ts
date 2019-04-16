import { actions } from "./actions";

const initialState = {
	selectedCell: null
};

export function selectCell(state = initialState, action: Action<any>) {
	console.log("selectCell");
	switch (action.type) {
		case actions.none:
		default:
			return state;
	}
}
