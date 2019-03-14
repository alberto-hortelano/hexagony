"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Cell_1 = require("../cell/Cell");
class Row extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cellsNumber: props.cellsNumber
        };
    }
    renderCells() {
        let cells = [];
        let n = this.state.cellsNumber;
        while (n--) {
            cells.push(React.createElement(Cell_1.default, { key: n, classList: ["square"] }));
        }
        return cells;
    }
    render() {
        return React.createElement("ul", { className: "comp-row" }, this.renderCells());
    }
}
exports.default = Row;
//# sourceMappingURL=Row.js.map