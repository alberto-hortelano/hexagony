let globalAction: Action<any>;

export function setGlobalAction(action: Action<any>) {
	globalAction = action;
}

export function getGlobalAction() {
	return globalAction;
}
