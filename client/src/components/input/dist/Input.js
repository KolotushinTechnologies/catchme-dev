"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
function Input(props) {
    return React.createElement("input", __assign({}, props, { className: "bg-alto-200 h-11 border border-alto-500 rounded-full outline-none px-4 text-sm w-64 max-w-full" + (props.className ? " " + props.className : "") }));
}
exports["default"] = Input;
