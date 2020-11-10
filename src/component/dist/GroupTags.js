"use strict";
exports.__esModule = true;
exports.GroupTags = void 0;
var react_1 = require("react");
var GetGroupped_1 = require("../component/Selectors/GetGroupped");
exports.GroupTags = function (_a) {
    var todos = _a.todos;
    var _b = react_1.useState('Группировать'), change = _b[0], setChange = _b[1];
    var _c = react_1.useState(), grouped = _c[0], setGrouped = _c[1];
    var groupTag = function (event) {
        if (change === 'Группировать') {
            var arrayGroup = todos.reduce(function (array, arg) {
                array[arg.tag] = array[arg.tag] || [];
                array[arg.tag].push(arg);
                return array;
            }, {});
            if (grouped === undefined) {
                console.log('error');
            }
            else {
                // console.log(Object.values(grouped))
                console.log(grouped);
            }
            setGrouped(arrayGroup);
            setChange('Разгруппировать');
        }
        else {
            setChange('Группировать');
            console.log(todos);
            return todos;
        }
    };
    return react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(GetGroupped_1.GetGroupped, { grouped: grouped }),
        react_1["default"].createElement("input", { type: "button", onClick: groupTag, value: change }));
};
