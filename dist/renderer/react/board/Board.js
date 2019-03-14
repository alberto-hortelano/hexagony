"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_redux_1 = require("react-redux");
const Row_1 = require("../row/Row");
exports.Board = props => {
    const { width, height } = props;
    console.log('props', props);
    const renderRows = () => {
        let rows = [];
        let n = height;
        while (n--) {
            rows.push(React.createElement(Row_1.default, { key: n, cellsNumber: width }));
        }
        console.log('renderRows', rows);
        return rows;
    };
    return (React.createElement("div", { className: "board" }, renderRows()));
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
const mapState2Props = (state) => {
    return {
        state: {
            width: state.width,
            height: state.height
        }
    };
};
exports.BoardCT = react_redux_1.connect(mapState2Props, mapDispatchToProps)(exports.Board);
//# sourceMappingURL=Board.js.map