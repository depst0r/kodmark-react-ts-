"use strict";
exports.__esModule = true;
exports.Todo = void 0;
var react_1 = require("react");
exports.Todo = function (_a) {
    var grouped = _a.grouped;
    var _b = react_1.useState(false), isGroupped = _b[0], setIsGroupped = _b[1];
    return react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("input", { type: "checkbox", checked: isGroupped }),
        isGroupped && grouped.map(function (res) {
            console.log(res.tag);
            return (react_1["default"].createElement("div", null,
                react_1["default"].createElement("h1", null, res.tag),
                react_1["default"].createElement("img", { src: res.image_original_url, alt: res.tag })));
        }));
};
