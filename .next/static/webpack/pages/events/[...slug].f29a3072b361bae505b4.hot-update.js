webpackHotUpdate_N_E("pages/events/[...slug]",{

/***/ "./pages/events/[...slug].js":
/*!***********************************!*\
  !*** ./pages/events/[...slug].js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _dummy_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../dummy-data */ \"./dummy-data.js\");\n/* harmony import */ var _components_events_event_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/events/event-list */ \"./components/events/event-list.js\");\n/* harmony import */ var _components_events_results_title__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/events/results-title */ \"./components/events/results-title.js\");\n/* harmony import */ var _components_UI_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/UI/button */ \"./components/UI/button.js\");\n\n\nvar _jsxFileName = \"/Users/christianmarginet/Documents/next-routing-project/pages/events/[...slug].js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction FilteredEventsPage() {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n  var filterData = router.query.slug;\n\n  if (!filterData) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      className: \"center\",\n      children: \"Loading ...\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 10\n    }, this);\n  }\n\n  var filteredYear = filterData[0];\n  var filteredMonth = filterData[1];\n  var numYear = +filteredYear;\n  var numMonth = +filteredMonth;\n\n  if (isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numYear < 2021 || numMonth < 1 || numMonth > 12) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"center\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          children: \"Invalid filter. Please adjust your values\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 29\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_UI_button__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n          link: \"/events\",\n          children: \"Show All Events\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 6\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 5\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 4\n    }, this);\n  }\n\n  var filteredEvents = Object(_dummy_data__WEBPACK_IMPORTED_MODULE_3__[\"getFilteredEvents\"])({\n    year: numYear,\n    month: numMonth\n  });\n\n  if (!filteredEvents || filteredEvents.length === 0) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: \"No events found for the chosen filter!\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"center\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_UI_button__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n          link: \"/events\",\n          children: \"Show All Events\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 6\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 5\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 4\n    }, this);\n  }\n\n  var date = new Date(numYear, numMonth - 1);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_events_results_title__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      date: date\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 4\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_events_event_list__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      items: filteredEvents\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 4\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 59,\n    columnNumber: 3\n  }, this);\n}\n\n_s(FilteredEventsPage, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"]];\n});\n\n_c = FilteredEventsPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FilteredEventsPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"FilteredEventsPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZXZlbnRzL1suLi5zbHVnXS5qcz85ZGRmIl0sIm5hbWVzIjpbIkZpbHRlcmVkRXZlbnRzUGFnZSIsInJvdXRlciIsInVzZVJvdXRlciIsImZpbHRlckRhdGEiLCJxdWVyeSIsInNsdWciLCJmaWx0ZXJlZFllYXIiLCJmaWx0ZXJlZE1vbnRoIiwibnVtWWVhciIsIm51bU1vbnRoIiwiaXNOYU4iLCJmaWx0ZXJlZEV2ZW50cyIsImdldEZpbHRlcmVkRXZlbnRzIiwieWVhciIsIm1vbnRoIiwibGVuZ3RoIiwiZGF0ZSIsIkRhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0Esa0JBQVQsR0FBOEI7QUFBQTs7QUFDN0IsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLE1BQU1DLFVBQVUsR0FBR0YsTUFBTSxDQUFDRyxLQUFQLENBQWFDLElBQWhDOztBQUVBLE1BQUksQ0FBQ0YsVUFBTCxFQUFpQjtBQUNoQix3QkFBTztBQUFHLGVBQVMsRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQVA7QUFDQTs7QUFFRCxNQUFNRyxZQUFZLEdBQUdILFVBQVUsQ0FBQyxDQUFELENBQS9CO0FBQ0EsTUFBTUksYUFBYSxHQUFHSixVQUFVLENBQUMsQ0FBRCxDQUFoQztBQUVBLE1BQU1LLE9BQU8sR0FBRyxDQUFDRixZQUFqQjtBQUNBLE1BQU1HLFFBQVEsR0FBRyxDQUFDRixhQUFsQjs7QUFFQSxNQUNDRyxLQUFLLENBQUNGLE9BQUQsQ0FBTCxJQUNBRSxLQUFLLENBQUNELFFBQUQsQ0FETCxJQUVBRCxPQUFPLEdBQUcsSUFGVixJQUdBQSxPQUFPLEdBQUcsSUFIVixJQUlBQyxRQUFRLEdBQUcsQ0FKWCxJQUtBQSxRQUFRLEdBQUcsRUFOWixFQU9FO0FBQ0Qsd0JBQ0MscUVBQUMsOENBQUQ7QUFBQSw2QkFDQztBQUFLLGlCQUFTLEVBQUMsUUFBZjtBQUFBLGdDQUF3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBeEIsZUFDQyxxRUFBQyw2REFBRDtBQUFRLGNBQUksRUFBQyxTQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERDtBQVFBOztBQUVELE1BQU1FLGNBQWMsR0FBR0MscUVBQWlCLENBQUM7QUFDeENDLFFBQUksRUFBRUwsT0FEa0M7QUFFeENNLFNBQUssRUFBRUw7QUFGaUMsR0FBRCxDQUF4Qzs7QUFLQSxNQUFJLENBQUNFLGNBQUQsSUFBbUJBLGNBQWMsQ0FBQ0ksTUFBZixLQUEwQixDQUFqRCxFQUFvRDtBQUNuRCx3QkFDQyxxRUFBQyw4Q0FBRDtBQUFBLDhCQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREQsZUFFQztBQUFLLGlCQUFTLEVBQUMsUUFBZjtBQUFBLCtCQUNDLHFFQUFDLDZEQUFEO0FBQVEsY0FBSSxFQUFDLFNBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQ7QUFRQTs7QUFFRCxNQUFNQyxJQUFJLEdBQUcsSUFBSUMsSUFBSixDQUFTVCxPQUFULEVBQWtCQyxRQUFRLEdBQUcsQ0FBN0IsQ0FBYjtBQUVBLHNCQUNDLHFFQUFDLDhDQUFEO0FBQUEsNEJBQ0MscUVBQUMsd0VBQUQ7QUFBYyxVQUFJLEVBQUVPO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERCxlQUVDLHFFQUFDLHFFQUFEO0FBQVcsV0FBSyxFQUFFTDtBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUFNQTs7R0F4RFFYLGtCO1VBQ09FLHFEOzs7S0FEUEYsa0I7QUEwRE1BLGlGQUFmIiwiZmlsZSI6Ii4vcGFnZXMvZXZlbnRzL1suLi5zbHVnXS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgZ2V0RmlsdGVyZWRFdmVudHMgfSBmcm9tICcuLi8uLi9kdW1teS1kYXRhJztcbmltcG9ydCBFdmVudExpc3QgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9ldmVudHMvZXZlbnQtbGlzdCc7XG5pbXBvcnQgUmVzdWx0c1RpdGxlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZXZlbnRzL3Jlc3VsdHMtdGl0bGUnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL1VJL2J1dHRvbic7XG5cbmZ1bmN0aW9uIEZpbHRlcmVkRXZlbnRzUGFnZSgpIHtcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cdGNvbnN0IGZpbHRlckRhdGEgPSByb3V0ZXIucXVlcnkuc2x1ZztcblxuXHRpZiAoIWZpbHRlckRhdGEpIHtcblx0XHRyZXR1cm4gPHAgY2xhc3NOYW1lPVwiY2VudGVyXCI+TG9hZGluZyAuLi48L3A+O1xuXHR9XG5cblx0Y29uc3QgZmlsdGVyZWRZZWFyID0gZmlsdGVyRGF0YVswXTtcblx0Y29uc3QgZmlsdGVyZWRNb250aCA9IGZpbHRlckRhdGFbMV07XG5cblx0Y29uc3QgbnVtWWVhciA9ICtmaWx0ZXJlZFllYXI7XG5cdGNvbnN0IG51bU1vbnRoID0gK2ZpbHRlcmVkTW9udGg7XG5cblx0aWYgKFxuXHRcdGlzTmFOKG51bVllYXIpIHx8XG5cdFx0aXNOYU4obnVtTW9udGgpIHx8XG5cdFx0bnVtWWVhciA+IDIwMzAgfHxcblx0XHRudW1ZZWFyIDwgMjAyMSB8fFxuXHRcdG51bU1vbnRoIDwgMSB8fFxuXHRcdG51bU1vbnRoID4gMTJcblx0KSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxGcmFnbWVudD5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjZW50ZXJcIj48cD5JbnZhbGlkIGZpbHRlci4gUGxlYXNlIGFkanVzdCB5b3VyIHZhbHVlczwvcD5cblx0XHRcdFx0XHQ8QnV0dG9uIGxpbms9XCIvZXZlbnRzXCI+U2hvdyBBbGwgRXZlbnRzPC9CdXR0b24+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcblx0XHRcdDwvRnJhZ21lbnQ+XG5cdFx0KTtcblx0fVxuXG5cdGNvbnN0IGZpbHRlcmVkRXZlbnRzID0gZ2V0RmlsdGVyZWRFdmVudHMoe1xuXHRcdHllYXI6IG51bVllYXIsXG5cdFx0bW9udGg6IG51bU1vbnRoLFxuXHR9KTtcblxuXHRpZiAoIWZpbHRlcmVkRXZlbnRzIHx8IGZpbHRlcmVkRXZlbnRzLmxlbmd0aCA9PT0gMCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8RnJhZ21lbnQ+XG5cdFx0XHRcdDxwPk5vIGV2ZW50cyBmb3VuZCBmb3IgdGhlIGNob3NlbiBmaWx0ZXIhPC9wPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNlbnRlclwiPlxuXHRcdFx0XHRcdDxCdXR0b24gbGluaz1cIi9ldmVudHNcIj5TaG93IEFsbCBFdmVudHM8L0J1dHRvbj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L0ZyYWdtZW50PlxuXHRcdCk7XG5cdH1cblxuXHRjb25zdCBkYXRlID0gbmV3IERhdGUobnVtWWVhciwgbnVtTW9udGggLSAxKTtcblxuXHRyZXR1cm4gKFxuXHRcdDxGcmFnbWVudD5cblx0XHRcdDxSZXN1bHRzVGl0bGUgZGF0ZT17ZGF0ZX0gLz5cblx0XHRcdDxFdmVudExpc3QgaXRlbXM9e2ZpbHRlcmVkRXZlbnRzfSAvPlxuXHRcdDwvRnJhZ21lbnQ+XG5cdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZpbHRlcmVkRXZlbnRzUGFnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/events/[...slug].js\n");

/***/ })

})