import { actions } from "./actions";

const initialState = {
	selectedAction: actions.none
};

export function selectAction(state = initialState, action: Action<any>) {
	console.log("selectAction");
	switch (action.type) {
		case actions.selectMapTerrain:
			console.log("log: selectAction", actions.selectMapTerrain, state, action);
			return {
				selectedAction: action
			};
		default:
			return state;
	}
}
