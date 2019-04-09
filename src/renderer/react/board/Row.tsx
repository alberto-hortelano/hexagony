import * as React from "react";
import Cell from "./Cell";

export const Row: React.FC<{ width: number; }> = ({ width }) => {

	const renderCells = () => {
		let cells: JSX.Element[] = [];
		let n = width;

		while (n--) {
			cells.push(<Cell key={n} classList={["square"]} />);
		}
		return cells;
	};

	return (
		<ul className="comp-row">{renderCells()}</ul>
	);
};
