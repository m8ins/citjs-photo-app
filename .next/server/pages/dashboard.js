"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/dashboard";
exports.ids = ["pages/dashboard"];
exports.modules = {

/***/ "./pages/dashboard.tsx":
/*!*****************************!*\
  !*** ./pages/dashboard.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ DashboardPage)\n/* harmony export */ });\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swr */ \"swr\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/martinschmitz/Documents/Projects/courses/citjs-photo-app/pages/dashboard.tsx\";\n\n\n\nfunction DashboardPage() {\n  const {\n    data: galleries,\n    isValidating: dashboardIsLoading,\n    error: dashboardFetchError\n  } = swr__WEBPACK_IMPORTED_MODULE_0___default()(`/api/galleries`);\n\n  if (dashboardIsLoading) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h1\", {\n      children: \"Loading dashboard...\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 12\n    }, this);\n  }\n\n  if (dashboardFetchError) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h1\", {\n      children: \"Error loading the dashboard\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 12\n    }, this);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {\n    m: \"0 auto\",\n    p: 5,\n    maxWidth: {\n      sm: '100%',\n      md: '100%',\n      lg: '40em',\n      xl: '50em',\n      '2xl': '74em'\n    },\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {\n      size: \"xl\",\n      mb: 3,\n      children: \"Dashboard page\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.VStack, {\n      spacing: 5,\n      children: galleries === null || galleries === void 0 ? void 0 : galleries.map(g => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {\n        width: \"100%\",\n        direction: \"row\",\n        radius: 10,\n        boxShadow: \"base\",\n        p: 3,\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {\n          size: \"md\",\n          children: g.name\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 13\n        }, this)\n      }, g.id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 11\n      }, this))\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 20,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9kYXNoYm9hcmQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFZSxTQUFTSyxhQUFULEdBQXlCO0FBQ3RDLFFBQU07QUFDSkMsSUFBQUEsSUFBSSxFQUFFQyxTQURGO0FBRUpDLElBQUFBLFlBQVksRUFBRUMsa0JBRlY7QUFHSkMsSUFBQUEsS0FBSyxFQUFFQztBQUhILE1BSUZYLDBDQUFNLENBQUUsZ0JBQUYsQ0FKVjs7QUFNQSxNQUFJUyxrQkFBSixFQUF3QjtBQUN0Qix3QkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFQO0FBQ0Q7O0FBRUQsTUFBSUUsbUJBQUosRUFBeUI7QUFDdkIsd0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBUDtBQUNEOztBQUVELHNCQUNFLDhEQUFDLGlEQUFEO0FBQ0UsS0FBQyxFQUFDLFFBREo7QUFFRSxLQUFDLEVBQUUsQ0FGTDtBQUdFLFlBQVEsRUFBRTtBQUNSQyxNQUFBQSxFQUFFLEVBQUUsTUFESTtBQUVSQyxNQUFBQSxFQUFFLEVBQUUsTUFGSTtBQUdSQyxNQUFBQSxFQUFFLEVBQUUsTUFISTtBQUlSQyxNQUFBQSxFQUFFLEVBQUUsTUFKSTtBQUtSLGFBQU87QUFMQyxLQUhaO0FBQUEsNEJBV0UsOERBQUMscURBQUQ7QUFBUyxVQUFJLEVBQUMsSUFBZDtBQUFtQixRQUFFLEVBQUUsQ0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFYRixlQWNFLDhEQUFDLG9EQUFEO0FBQVEsYUFBTyxFQUFFLENBQWpCO0FBQUEsZ0JBQ0dSLFNBREgsYUFDR0EsU0FESCx1QkFDR0EsU0FBUyxDQUFFUyxHQUFYLENBQWdCQyxDQUFELGlCQUNkLDhEQUFDLGtEQUFEO0FBQ0UsYUFBSyxFQUFDLE1BRFI7QUFFRSxpQkFBUyxFQUFDLEtBRlo7QUFJRSxjQUFNLEVBQUUsRUFKVjtBQUtFLGlCQUFTLEVBQUMsTUFMWjtBQU1FLFNBQUMsRUFBRSxDQU5MO0FBQUEsK0JBUUUsOERBQUMscURBQUQ7QUFBUyxjQUFJLEVBQUMsSUFBZDtBQUFBLG9CQUFvQkEsQ0FBQyxDQUFDQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUkYsU0FHT0QsQ0FBQyxDQUFDRSxFQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFkRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQStCRCIsInNvdXJjZXMiOlsid2VicGFjazovL2NpdGpzLXBob3RvLWFwcC8uL3BhZ2VzL2Rhc2hib2FyZC50c3g/NDY0YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlU1dSIGZyb20gJ3N3cic7XG5pbXBvcnQgeyBGbGV4LCBIZWFkaW5nLCBCb3gsIFZTdGFjayB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEYXNoYm9hcmRQYWdlKCkge1xuICBjb25zdCB7XG4gICAgZGF0YTogZ2FsbGVyaWVzLFxuICAgIGlzVmFsaWRhdGluZzogZGFzaGJvYXJkSXNMb2FkaW5nLFxuICAgIGVycm9yOiBkYXNoYm9hcmRGZXRjaEVycm9yLFxuICB9ID0gdXNlU1dSKGAvYXBpL2dhbGxlcmllc2ApO1xuXG4gIGlmIChkYXNoYm9hcmRJc0xvYWRpbmcpIHtcbiAgICByZXR1cm4gPGgxPkxvYWRpbmcgZGFzaGJvYXJkLi4uPC9oMT47XG4gIH1cblxuICBpZiAoZGFzaGJvYXJkRmV0Y2hFcnJvcikge1xuICAgIHJldHVybiA8aDE+RXJyb3IgbG9hZGluZyB0aGUgZGFzaGJvYXJkPC9oMT47XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgIG09XCIwIGF1dG9cIlxuICAgICAgcD17NX1cbiAgICAgIG1heFdpZHRoPXt7XG4gICAgICAgIHNtOiAnMTAwJScsXG4gICAgICAgIG1kOiAnMTAwJScsXG4gICAgICAgIGxnOiAnNDBlbScsXG4gICAgICAgIHhsOiAnNTBlbScsXG4gICAgICAgICcyeGwnOiAnNzRlbScsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxIZWFkaW5nIHNpemU9XCJ4bFwiIG1iPXszfT5cbiAgICAgICAgRGFzaGJvYXJkIHBhZ2VcbiAgICAgIDwvSGVhZGluZz5cbiAgICAgIDxWU3RhY2sgc3BhY2luZz17NX0+XG4gICAgICAgIHtnYWxsZXJpZXM/Lm1hcCgoZykgPT4gKFxuICAgICAgICAgIDxGbGV4XG4gICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgICAgZGlyZWN0aW9uPVwicm93XCJcbiAgICAgICAgICAgIGtleT17Zy5pZH1cbiAgICAgICAgICAgIHJhZGl1cz17MTB9XG4gICAgICAgICAgICBib3hTaGFkb3c9XCJiYXNlXCJcbiAgICAgICAgICAgIHA9ezN9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEhlYWRpbmcgc2l6ZT1cIm1kXCI+e2cubmFtZX08L0hlYWRpbmc+XG4gICAgICAgICAgPC9GbGV4PlxuICAgICAgICApKX1cbiAgICAgIDwvVlN0YWNrPlxuICAgIDwvQm94PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVNXUiIsIkZsZXgiLCJIZWFkaW5nIiwiQm94IiwiVlN0YWNrIiwiRGFzaGJvYXJkUGFnZSIsImRhdGEiLCJnYWxsZXJpZXMiLCJpc1ZhbGlkYXRpbmciLCJkYXNoYm9hcmRJc0xvYWRpbmciLCJlcnJvciIsImRhc2hib2FyZEZldGNoRXJyb3IiLCJzbSIsIm1kIiwibGciLCJ4bCIsIm1hcCIsImciLCJuYW1lIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/dashboard.tsx\n");

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("swr");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/dashboard.tsx"));
module.exports = __webpack_exports__;

})();