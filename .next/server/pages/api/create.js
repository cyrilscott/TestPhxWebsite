(function() {
var exports = {};
exports.id = 5;
exports.ids = [5];
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

/***/ 83:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ handler; }
/* harmony export */ });
const User = __webpack_require__(319);

const mongoose = __webpack_require__(619);

const argon2 = __webpack_require__(193);

try {
  mongoose.connect('mongodb://localhost:27017/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
} catch (error) {
  console.log(error);
}

function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(400).send('Invalid HTTP method');
  }

  (async () => {
    let parsedCredintals = JSON.parse(req.body);
    let hash;

    try {
      hash = await argon2.hash(parsedCredintals.password);
    } catch (err) {
      console.log(err);
    }

    let login = {
      username: parsedCredintals.username,
      password: hash
    };

    try {
      let response = await User.create({
        username: login.username,
        password: login.password
      });
      res.status(200);
      res.json({
        status: login.username
      });
    } catch (error) {
      res.status(404);
      res.json({
        status: error
      });
    }
  })();
}

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(83));
module.exports = __webpack_exports__;

})();