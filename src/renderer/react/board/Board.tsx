import * as React from "react";
import { connect } from "react-redux";

import { Row } from "./Row";

export type BoardProps = { width: number; height: number };
/**
 * Board: A cell's matrix of size (width * height)
 * @param BoardProps 
 */
export const Board: React.FC<BoardProps> = ({ width, height }) => {

	const renderRows = () => {
		let rows: JSX.Element[] = [];
		let n = height;

		while (n--) {
			rows.push(<Row key={n} width={width} />);
		}
		return rows;
	};

	return (
		<div className="board">
			{renderRows()}
		</div>
	);
};

const mapStateToProps = (state: BoardProps, ownProps: BoardProps): BoardProps => {
	return {
		width: ownProps.width,
		height: ownProps.height
	}
};

const mapDispatchToProps = dispatch => {
	return {
		handleClick: action => {
			dispatch({
				type: 'SELECT_MAP_TERRAIN',
				payload: action
			})
		}
	}
}
export const BoardCT = connect(
	mapStateToProps,
	mapDispatchToProps
)(Board);
