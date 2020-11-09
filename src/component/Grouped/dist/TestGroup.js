"use strict";
exports.__esModule = true;
exports.TestGroup = void 0;
var react_1 = require("react");
exports.TestGroup = function (_a) {
    var grouped = _a.grouped;
    return react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", null, grouped.map(function (res) {
            react_1["default"].createElement("span", null, res.tag);
        })));
};
