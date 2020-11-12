"use strict";
exports.__esModule = true;
exports.GroupList = void 0;
var react_1 = require("react");
require("../style/style.css");
exports.GroupList = function (_a) {
    var grouped = _a.grouped;
    return (react_1["default"].createElement("div", { className: 'group-list' }, Object.keys(grouped).map(function (tag) {
        return (react_1["default"].createElement("div", { key: tag },
            react_1["default"].createElement("h3", null, tag),
            grouped[tag].map(function (image) {
                return (react_1["default"].createElement("div", { key: image.id },
                    react_1["default"].createElement("img", { className: "img", src: image.image_original_url, alt: image.tag })));
            })));
    })));
};
