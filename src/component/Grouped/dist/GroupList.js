"use strict";
exports.__esModule = true;
exports.GroupList = void 0;
var react_1 = require("react");
exports.GroupList = function (_a) {
    var grouped = _a.grouped;
    return (react_1["default"].createElement("div", null, Object.keys(grouped).map(function (group) {
        return (
        // <section className="todo" key={group.id}>
        react_1["default"].createElement("div", { className: "todoItemList" },
            react_1["default"].createElement("span", null, group))
        // </section>
        );
    })));
};
