/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/paragraph.js":
/*!*********************************!*\
  !*** ./components/paragraph.js ***!
  \*********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports signature on update so we can compare the boundary
                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)
                module.hot.dispose(function (data) {
                    data.prevSignature =
                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevSignature !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevSignature !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _components_paragraph__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/paragraph */ \"./components/paragraph.js\");\n/* harmony import */ var _components_paragraph__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_paragraph__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/section */ \"./components/section.js\");\n\n\n\n\nconst Home = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Container, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                borderRadius: \"lg\",\n                bg: \"#313134\",\n                color: \"#929293\",\n                p: 3,\n                mb: 6,\n                align: \"center\",\n                children: \"Hello, I'm indie app developer based in Canada.\"\n            }, void 0, false, {\n                fileName: \"/Users/ginosuarez/GitHub/portfolio/pages/index.js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_section__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                delay: 0.1,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Heading, {\n                        as: \"h3\",\n                        variant: \"section-title\",\n                        children: \"Work\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ginosuarez/GitHub/portfolio/pages/index.js\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_components_paragraph__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        children: [\n                            \"Takuya is a freelance and a full-stack developer based in Osaka with a passion for building digital services/stuff he wants. He has a knack for all things launching products, from planning and designing all the way to solving real-life problems with code. When not online, he loves hanging out with his camera. Currently, he is living off of his own product called\",\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Link, {\n                                as: NextLink,\n                                href: \"/works/inkdrop\",\n                                passHref: true,\n                                scroll: false,\n                                children: \"Inkdrop\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ginosuarez/GitHub/portfolio/pages/index.js\",\n                                lineNumber: 40,\n                                columnNumber: 11\n                            }, undefined),\n                            '. He publishes content for marketing his products and his YouTube channel called \"',\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Link, {\n                                as: NextLink,\n                                href: \"https://www.youtube.com/devaslife\",\n                                passHref: true,\n                                target: \"_blank\",\n                                children: \"Dev as Life\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ginosuarez/GitHub/portfolio/pages/index.js\",\n                                lineNumber: 45,\n                                columnNumber: 11\n                            }, undefined),\n                            '\" has more than 100k subscribers.'\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ginosuarez/GitHub/portfolio/pages/index.js\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ginosuarez/GitHub/portfolio/pages/index.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ginosuarez/GitHub/portfolio/pages/index.js\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQVUwQjtBQUNzQjtBQUNKO0FBRTVDLE1BQU1XLE9BQU87SUFDWCxxQkFDRSw4REFBQ1YsdURBQVNBOzswQkFDUiw4REFBQ0UsaURBQUdBO2dCQUNGUyxjQUFhO2dCQUNiQyxJQUFHO2dCQUNIQyxPQUFNO2dCQUNOQyxHQUFHO2dCQUNIQyxJQUFJO2dCQUNKQyxPQUFNOzBCQUNQOzs7Ozs7MEJBSUQsOERBQUNQLDJEQUFPQTtnQkFBQ1EsT0FBTzs7a0NBQ2QsOERBQUNoQixxREFBT0E7d0JBQUNpQixJQUFHO3dCQUFLQyxTQUFRO2tDQUFnQjs7Ozs7O2tDQUd6Qyw4REFBQ1gsOERBQVNBOzs0QkFBQzs0QkFNTTswQ0FDZiw4REFBQ1Qsa0RBQUlBO2dDQUFDbUIsSUFBSUU7Z0NBQVVDLE1BQUs7Z0NBQWlCQyxRQUFRO2dDQUFDQyxRQUFROzBDQUFPOzs7Ozs7NEJBRTNEOzBDQUdQLDhEQUFDeEIsa0RBQUlBO2dDQUNIbUIsSUFBSUU7Z0NBQ0pDLE1BQUs7Z0NBQ0xDLFFBQVE7Z0NBQ1JFLFFBQU87MENBQ1I7Ozs7Ozs0QkFFTTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1qQjtLQTNDTWQ7QUE0Q04sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBMaW5rLFxuICBDb250YWluZXIsXG4gIEhlYWRpbmcsXG4gIEJveCxcbiAgU2ltcGxlR3JpZCxcbiAgQnV0dG9uLFxuICBMaXN0LFxuICBMaXN0SXRlbSxcbiAgdXNlQ29sb3JNb2RlVmFsdWUsXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgUGFyYWdyYXBoIGZyb20gXCIuLi9jb21wb25lbnRzL3BhcmFncmFwaFwiO1xuaW1wb3J0IFNlY3Rpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvc2VjdGlvblwiO1xuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICA8Qm94XG4gICAgICAgIGJvcmRlclJhZGl1cz1cImxnXCJcbiAgICAgICAgYmc9XCIjMzEzMTM0XCJcbiAgICAgICAgY29sb3I9XCIjOTI5MjkzXCJcbiAgICAgICAgcD17M31cbiAgICAgICAgbWI9ezZ9XG4gICAgICAgIGFsaWduPVwiY2VudGVyXCJcbiAgICAgID5cbiAgICAgICAgSGVsbG8sIEkmYXBvczttIGluZGllIGFwcCBkZXZlbG9wZXIgYmFzZWQgaW4gQ2FuYWRhLlxuICAgICAgPC9Cb3g+XG5cbiAgICAgIDxTZWN0aW9uIGRlbGF5PXswLjF9PlxuICAgICAgICA8SGVhZGluZyBhcz1cImgzXCIgdmFyaWFudD1cInNlY3Rpb24tdGl0bGVcIj5cbiAgICAgICAgICBXb3JrXG4gICAgICAgIDwvSGVhZGluZz5cbiAgICAgICAgPFBhcmFncmFwaD5cbiAgICAgICAgICBUYWt1eWEgaXMgYSBmcmVlbGFuY2UgYW5kIGEgZnVsbC1zdGFjayBkZXZlbG9wZXIgYmFzZWQgaW4gT3Nha2Egd2l0aCBhXG4gICAgICAgICAgcGFzc2lvbiBmb3IgYnVpbGRpbmcgZGlnaXRhbCBzZXJ2aWNlcy9zdHVmZiBoZSB3YW50cy4gSGUgaGFzIGEga25hY2tcbiAgICAgICAgICBmb3IgYWxsIHRoaW5ncyBsYXVuY2hpbmcgcHJvZHVjdHMsIGZyb20gcGxhbm5pbmcgYW5kIGRlc2lnbmluZyBhbGwgdGhlXG4gICAgICAgICAgd2F5IHRvIHNvbHZpbmcgcmVhbC1saWZlIHByb2JsZW1zIHdpdGggY29kZS4gV2hlbiBub3Qgb25saW5lLCBoZSBsb3Zlc1xuICAgICAgICAgIGhhbmdpbmcgb3V0IHdpdGggaGlzIGNhbWVyYS4gQ3VycmVudGx5LCBoZSBpcyBsaXZpbmcgb2ZmIG9mIGhpcyBvd25cbiAgICAgICAgICBwcm9kdWN0IGNhbGxlZHtcIiBcIn1cbiAgICAgICAgICA8TGluayBhcz17TmV4dExpbmt9IGhyZWY9XCIvd29ya3MvaW5rZHJvcFwiIHBhc3NIcmVmIHNjcm9sbD17ZmFsc2V9PlxuICAgICAgICAgICAgSW5rZHJvcFxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAuIEhlIHB1Ymxpc2hlcyBjb250ZW50IGZvciBtYXJrZXRpbmcgaGlzIHByb2R1Y3RzIGFuZCBoaXMgWW91VHViZVxuICAgICAgICAgIGNoYW5uZWwgY2FsbGVkICZxdW90O1xuICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICBhcz17TmV4dExpbmt9XG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZGV2YXNsaWZlXCJcbiAgICAgICAgICAgIHBhc3NIcmVmXG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIERldiBhcyBMaWZlXG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICZxdW90OyBoYXMgbW9yZSB0aGFuIDEwMGsgc3Vic2NyaWJlcnMuXG4gICAgICAgIDwvUGFyYWdyYXBoPlxuICAgICAgPC9TZWN0aW9uPlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwibmFtZXMiOlsiTGluayIsIkNvbnRhaW5lciIsIkhlYWRpbmciLCJCb3giLCJTaW1wbGVHcmlkIiwiQnV0dG9uIiwiTGlzdCIsIkxpc3RJdGVtIiwidXNlQ29sb3JNb2RlVmFsdWUiLCJQYXJhZ3JhcGgiLCJTZWN0aW9uIiwiSG9tZSIsImJvcmRlclJhZGl1cyIsImJnIiwiY29sb3IiLCJwIiwibWIiLCJhbGlnbiIsImRlbGF5IiwiYXMiLCJ2YXJpYW50IiwiTmV4dExpbmsiLCJocmVmIiwicGFzc0hyZWYiLCJzY3JvbGwiLCJ0YXJnZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});