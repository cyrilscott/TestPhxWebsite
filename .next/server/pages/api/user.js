(function() {
var exports = {};
exports.id = 541;
exports.ids = [541];
exports.modules = {

/***/ 319:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

const mongoose = __webpack_require__(619);

const User = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});
mongoose.models = {};
module.exports = mongoose.model('UserModel', User);

/***/ }),

/***/ 107:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_iron_session__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(834);
/* harmony import */ var next_iron_session__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_iron_session__WEBPACK_IMPORTED_MODULE_0__);
const User = __webpack_require__(319);

const mongoose = __webpack_require__(619);

const argon2 = __webpack_require__(193);

const passport = __webpack_require__(922);



async function handler(req, res, session) {
  const user = req.session.get("user");
  res.send({
    user
  });
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

/***/ 193:
/***/ (function(module) {

"use strict";
module.exports = require("argon2");;

/***/ }),

/***/ 619:
/***/ (function(module) {

"use strict";
module.exports = require("mongoose");;

/***/ }),

/***/ 834:
/***/ (function(module) {

"use strict";
module.exports = require("next-iron-session");;

/***/ }),

/***/ 922:
/***/ (function(module) {

"use strict";
module.exports = require("passport");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(107));
module.exports = __webpack_exports__;

})();