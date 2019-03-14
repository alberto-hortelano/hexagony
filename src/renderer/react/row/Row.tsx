import * as React from "react";
import Cell from "../cell/Cell";

export interface RowState {
	cellsNumber: number;
}

export interface RowProps extends RowState { }

export default class Row extends React.Component<RowProps, RowState> {
	constructor(props: RowProps) {
		super(props);

		this.state = {
			cellsNumber: props.cellsNumber
		};
	}

	renderCells() {
		let cells = [];
		let n = this.state.cellsNumber;

		while (n--) {
			cells.push(<Cell key={n} classList={["square"]} />);
		}
		return cells;
	}

	public render() {
		return <ul className="comp-row">{this.renderCells()}</ul>;
	}
}
