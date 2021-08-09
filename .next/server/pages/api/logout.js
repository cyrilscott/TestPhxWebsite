(function() {
var exports = {};
exports.id = 30;
exports.ids = [30];
exports.modules = {

/***/ 180:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_iron_session__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(834);
/* harmony import */ var next_iron_session__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_iron_session__WEBPACK_IMPORTED_MODULE_0__);


async function handler(req, res, session) {
  try {
    req.session.destroy();
    res.json({
      status: 'ok'
    });
  } catch (err) {
    res.json({
      status: err
    });
  }
}

/* harmony default export */ __webpack_exports__["default"] = ((0,next_iron_session__WEBPACK_IMPORTED_MODULE_0__.withIronSession)(handler, {
  password: "KWE2VFVVCH9b1HpwBgghRzuEoinCHy2sN5RR0GiV",
  cookieName: "PHXSession",
  // if your localhost is served on http:// then disable the secure flag
  cookieOptions: {
    secure: true
  }
}));

/***/ }),

/***/ 834:
/***/ (function(module) {

"use strict";
module.exports = require("next-iron-session");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(180));
module.exports = __webpack_exports__;

})();