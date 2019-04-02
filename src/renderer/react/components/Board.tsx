import * as React from "react";
import { connect } from "react-redux";

import Row from "./Row";

export type BoardProps = { width: number; height: number };

export const Board: React.FC<BoardProps> = props => {
	const { width, height } = props;

	const renderRows = () => {
		let rows = [];
		let n = height;

		while (n--) {
			rows.push(<Row key={n} cellsNumber={width} />);
		}
		return rows;
	};

	return (
		<div className="board">
			{renderRows()}
		</div>
	);
};
const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onClick: (e, index, history) => {
			console.log("onClick mapDispatchToProps index, history, ownProps", index, history, ownProps);
			const state = dispatch({ type: "CLICK", value: { index, history } });
			console.log("onClick mapDispatchToProps state", state);
		}
	};
};

const mapState2Props = (state): { state: BoardProps } => {
	return {
		state: {
			width: state.width,
			height: state.height
		}
	}
};

export const BoardCT = connect(
	mapState2Props,
	mapDispatchToProps
)(Board);
