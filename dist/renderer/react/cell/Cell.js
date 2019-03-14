"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class Cell extends React.Component {
    constructor(props) {
        super(props);
        this.baseClassName = "comp-cell";
        this.state = {
            blocked: props.blocked,
            background: props.background,
            classList: props.classList
        };
    }
    renderClass() {
        return this.baseClassName + " " + this.state.classList.join(" ");
    }
    render() {
        return React.createElement("li", { className: this.renderClass() });
    }
}
exports.default = Cell;
//# sourceMappingURL=Cell.js.map