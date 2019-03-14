"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const initialState_1 = require("./initialState");
function selectCell(state = initialState_1.initialState, action) {
    console.log("selectCell", state, action);
    return state;
}
exports.selectCell = selectCell;
//# sourceMappingURL=index.js.map