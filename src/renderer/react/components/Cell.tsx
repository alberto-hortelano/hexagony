import * as React from "react";

export interface CellState {
	blocked?: boolean;
	background?: string;
	classList?: string[];
}

export interface CellProps extends CellState { }

export default class Cell extends React.Component<CellProps, CellState> {
	baseClassName: string = "comp-cell";

	renderClass() {
		return this.baseClassName + " " + this.state.classList.join(" ");
	}

	constructor(props: CellProps) {
		super(props);

		this.state = {
			blocked: props.blocked,
			background: props.background,
			classList: props.classList
		};
	}

	public render() {
		return <li className={this.renderClass()} ><div className="hexagon"></div></li>;
	}
}
