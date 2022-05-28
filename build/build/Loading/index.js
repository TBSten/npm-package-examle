var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
                if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, CircularProgress, Dialog, DialogContent } from "@mui/material";
import { useState } from "react";
var Loading = function (props) {
    return (_jsx(Box, __assign({ width: "100%", display: "flex", justifyContent: "center", my: 3 }, { children: _jsx(CircularProgress, __assign({}, props)) })));
};
export default Loading;
export var Loadable = function (Comp) {
    var Component = function (props) {
        var _a = useState(false), loading = _a[0], setLoading = _a[1];
        var startLoad = function () { setLoading(true); };
        var endLoad = function () { setLoading(false); };
        return (_jsxs(_Fragment, { children: [_jsx(Comp, __assign({ loading: loading, startLoad: startLoad, endLoad: endLoad }, props)), _jsx(Dialog, __assign({ open: loading }, { children: _jsx(DialogContent, { children: _jsx(Box, __assign({ display: "flex", justifyContent: "center", alignItems: "center" }, { children: _jsx(CircularProgress, {}) })) }) }))] }));
    };
    return Component;
};
