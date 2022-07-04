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
exports.id = "pages/api/products/get";
exports.ids = ["pages/api/products/get"];
exports.modules = {

/***/ "ky":
/*!*********************!*\
  !*** external "ky" ***!
  \*********************/
/***/ ((module) => {

module.exports = import("ky");;

/***/ }),

/***/ "(api)/./pages/api/products/get.tsx":
/*!************************************!*\
  !*** ./pages/api/products/get.tsx ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var ky__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ky */ \"ky\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([ky__WEBPACK_IMPORTED_MODULE_0__]);\nky__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nasync function handler(req, res) {\n    if (req.method == \"GET\") {\n        try {\n            const productsjson = await ky__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"http://localhost:9000\").json();\n            res.status(200).json(productsjson);\n        // console.log(productsjson, \"products\");\n        } catch (error) {\n            // console.log(error, \"error\");\n            res.status(500).json({\n                message: \"Something went wrong\"\n            });\n        }\n    } else {\n        res.status(405).end(`Method ${req.method} Not Allowed`);\n    }\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcHJvZHVjdHMvZ2V0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUVvQjtBQU9MLGVBQWVDLE9BQU8sQ0FDbkNDLEdBQW1CLEVBQ25CQyxHQUFvQixFQUNwQjtJQUNFLElBQUlELEdBQUcsQ0FBQ0UsTUFBTSxJQUFJLEtBQUssRUFBRTtRQUN2QixJQUFJO1lBQ0YsTUFBTUMsWUFBWSxHQUFHLE1BQU1MLDhDQUFNLENBQUMsdUJBQXVCLENBQUMsQ0FBQ08sSUFBSSxFQUFFO1lBQ2pFSixHQUFHLENBQUNLLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0QsSUFBSSxDQUFDRixZQUFZLENBQUMsQ0FBQztRQUNuQyx5Q0FBeUM7U0FDMUMsQ0FBQyxPQUFPSSxLQUFLLEVBQUU7WUFDZCwrQkFBK0I7WUFDL0JOLEdBQUcsQ0FBQ0ssTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDRCxJQUFJLENBQUM7Z0JBQUVHLE9BQU8sRUFBRSxzQkFBc0I7YUFBRSxDQUFDLENBQUM7U0FDM0Q7S0FDRixNQUFNO1FBQ0xQLEdBQUcsQ0FBQ0ssTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDRyxHQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUVULEdBQUcsQ0FBQ0UsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7S0FDekQ7Q0FDSiIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vcGFnZXMvYXBpL3Byb2R1Y3RzL2dldC50c3g/MmFmMyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOZXh0LmpzIEFQSSByb3V0ZSBzdXBwb3J0OiBodHRwczovL25leHRqcy5vcmcvZG9jcy9hcGktcm91dGVzL2ludHJvZHVjdGlvblxuaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCBreSBmcm9tIFwia3lcIjtcblxudHlwZSBEYXRhID0ge1xuICBuYW1lOiBzdHJpbmc7XG4gIHByb2R1Y3RzanNvbjogYW55O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2Vcbikge1xuICAgIGlmIChyZXEubWV0aG9kID09IFwiR0VUXCIpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHByb2R1Y3RzanNvbiA9IGF3YWl0IGt5LmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6OTAwMFwiKS5qc29uKCk7XG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHByb2R1Y3RzanNvbik7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHByb2R1Y3RzanNvbiwgXCJwcm9kdWN0c1wiKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGVycm9yLCBcImVycm9yXCIpO1xuICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6IFwiU29tZXRoaW5nIHdlbnQgd3JvbmdcIiB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmVzLnN0YXR1cyg0MDUpLmVuZChgTWV0aG9kICR7cmVxLm1ldGhvZH0gTm90IEFsbG93ZWRgKTtcbiAgICB9XG59XG4iXSwibmFtZXMiOlsia3kiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwicHJvZHVjdHNqc29uIiwiZ2V0IiwianNvbiIsInN0YXR1cyIsImVycm9yIiwibWVzc2FnZSIsImVuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/products/get.tsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/products/get.tsx"));
module.exports = __webpack_exports__;

})();