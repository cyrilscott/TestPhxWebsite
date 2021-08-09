(function() {
var exports = {};
exports.id = 994;
exports.ids = [994];
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

/***/ 241:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_iron_session__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(834);
/* harmony import */ var next_iron_session__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_iron_session__WEBPACK_IMPORTED_MODULE_0__);
const User = __webpack_require__(319);

const mongoose = __webpack_require__(619);

const argon2 = __webpack_require__(193);

const passport = __webpack_require__(922);



try {
  //connecting to the db
  mongoose.connect('mongodb://localhost:27017/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
} catch (error) {
  console.log(error);
}

async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(400).send('Invalid HTTP method'); // if its not a POST return a 404 page
  }

  let parsedReq = JSON.parse(req.body);
  let passHash; //declare variable outside of the scope

  try {
    passHash = await argon2.hash(parsedReq.password); // try to hash the password
  } catch (err) {
    //catch error
    console.log(err);
  }

  const response = await User.findOne({
    username: parsedReq.username
  }); //check if there is a valid username in the DB

  if (response != null) {
    //if there is then verify the hash, and return the username
    try {
      if (await argon2.verify(response.password, parsedReq.password)) {
        req.session.set('user', {
          username: parsedReq.username,
          id: response.id,
          admin: true
        });
        await req.session.save();
        res.status(200);
        res.json({
          status: response.username.toString()
        });
      }
    } catch (err) {
      console.log(err);
    }
  } else {
    //if not return incorrect
    res.status(403);
    res.json({
      status: 'incorrect'
    });
  }
}

/* harmony default export */ __webpack_exports__["default"] = ((0,next_iron_session__WEBPACK_IMPORTED_MODULE_0__.withIronSession)(handler, {
  password: "KWE2VFVVCH9b1HpwBgghRzuEoinCHy2sN5RR0GiV",
  cookieName: "PHXSession",
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
var __webpack_exports__ = (__webpack_exec__(241));
module.exports = __webpack_exports__;

})();