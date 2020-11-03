"use strict";
exports.__esModule = true;
exports.EntryFiled = void 0;
var react_1 = require("react");
exports.EntryFiled = function (props) {
    var _a = react_1.useState(""), title = _a[0], setTitle = _a[1];
    var changeHandler = function (event) {
        setTitle(event.target.value);
    };
    var fetchPressHandler = function (event) {
        if (title === '') {
            console.error('error');
        }
        else {
            fetch("https://api.giphy.com/v1/gifs/random?api_key=gTJAO48YcpmrADUyo4opy4ES4g7iDBxx&tag=" + title)
                .then(function (res) { return res.json(); })
                .then(function (res) { return props.onAdd(res); });
        }
    };
    return (react_1["default"].createElement("nav", null,
        react_1["default"].createElement("input", { onChange: changeHandler, value: title, type: "text" }),
        react_1["default"].createElement("input", { type: "button", onClick: fetchPressHandler, value: "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C" })));
};
