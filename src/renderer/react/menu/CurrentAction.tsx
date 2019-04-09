import * as React from "react";
import { connect } from "react-redux";
import store from "../../../state/store";

export const CurrentAction: React.FC<any> = ({ currentAction }) => {
	console.log("log: currentAction", currentAction);
	return (
		<div className="global-action" onClick={() => console.log('state', store.getState())}>Action: {currentAction ? currentAction.type : 'none'}</div>
	);
};


const mapStateToProps = state => {
	console.log("log: selectedAction", state.selectAction.selectedAction);
	return {
		currentAction: state.selectAction.selectedAction
	}
};

export const CurrentActionCT = connect(
	mapStateToProps
)(CurrentAction);
