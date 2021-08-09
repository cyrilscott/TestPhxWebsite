(function() {
var exports = {};
exports.id = 417;
exports.ids = [417];
exports.modules = {

/***/ 6076:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": function() { return /* binding */ getServerSideProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3289);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3186);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(799);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_fontawesome_free_solid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7059);
/* harmony import */ var _fortawesome_fontawesome_free_solid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_solid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2268);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5777);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1664);











function Login({
  textData,
  jsonData
}) {
  const checkSession = async () => {
    if (textData === '{}') {
      class LoginTag extends (react__WEBPACK_IMPORTED_MODULE_4___default().Component) {
        render() {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
            href: "./login",
            className: "nav-link",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
              icon: _fortawesome_fontawesome_free_solid__WEBPACK_IMPORTED_MODULE_3__.faUser
            }), " Login"]
          });
        }

      }

      react_dom__WEBPACK_IMPORTED_MODULE_5___default().render( /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LoginTag, {}), document.getElementById('username'));
    } else if (textData !== '{}') {
      const Username = jsonData.user.username;

      class LoginTag extends (react__WEBPACK_IMPORTED_MODULE_4___default().Component) {
        render() {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
            href: "./profile",
            className: "nav-link",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
              icon: _fortawesome_fontawesome_free_solid__WEBPACK_IMPORTED_MODULE_3__.faUser
            }), " ", this.props.toWhat]
          });
        }

      }

      react_dom__WEBPACK_IMPORTED_MODULE_5___default().render( /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LoginTag, {
        toWhat: Username
      }), document.getElementById('username'));
    }
  };

  const {
    0: username,
    1: setUsername
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('');
  const {
    0: password,
    1: setPassword
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('');
  const {
    0: email,
    1: setEmail
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('');
  const {
    0: rePassword,
    1: setRePassword
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('');
  let userDetails = {
    username: username.split(' ').join(''),
    password: password.split(' ').join(''),
    email: email.split(' ').join('')
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (password == rePassword) {
      let userRequest = JSON.stringify(userDetails);
      const status = await fetch("../api/create", {
        method: "POST",
        body: userRequest
      });
      const responseStatus = await status.status;

      if (responseStatus == 200) {
        const responseText = await status.json();
        const correctComponent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("p", {
          style: {
            color: 'green'
          }
        }, `Success, your username is: ${responseText.status}`);
        react_dom__WEBPACK_IMPORTED_MODULE_5___default().render(correctComponent, document.getElementById('statusOutput'));
      } else {
        const responseText = await status.json();
        const incorrectComponent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("p", {
          style: {
            color: 'red'
          }
        }, `Something went wrong: ${responseText.status}`);
        react_dom__WEBPACK_IMPORTED_MODULE_5___default().render(incorrectComponent, document.getElementById('statusOutput'));
      }
    } else if (password !== rePassword) {
      const correctComponent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("p", {
        style: {
          color: 'red'
        }
      }, `Please make sure your passwords match!`);
      react_dom__WEBPACK_IMPORTED_MODULE_5___default().render(correctComponent, document.getElementById('statusOutput'));
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => checkSession());
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: "jsx-1876354582",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
      id: "1876354582",
      children: ["body{background:#303030;}"]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
      className: "jsx-1876354582",
      children: "Phoenix Servers Minecraft"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
      className: "jsx-1876354582" + " " + "navbar navbar-expand-md navbar-dark bg-dark",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "jsx-1876354582" + " " + "navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
          className: "jsx-1876354582" + " " + "navbar-nav mr-auto",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
            className: "jsx-1876354582" + " " + "nav-item",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_7__.default, {
              href: "./",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                className: "jsx-1876354582" + " " + "nav-link",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
                  icon: _fortawesome_fontawesome_free_solid__WEBPACK_IMPORTED_MODULE_3__.faHome
                }), " Home"]
              })
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
            className: "jsx-1876354582" + " " + "nav-item",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_7__.default, {
              href: "./contact",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                className: "jsx-1876354582" + " " + "nav-link",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
                  icon: _fortawesome_fontawesome_free_solid__WEBPACK_IMPORTED_MODULE_3__.faEnvelope
                }), " Contact"]
              })
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
            className: "jsx-1876354582" + " " + "nav-item",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_7__.default, {
              href: "./maps",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                className: "jsx-1876354582" + " " + "nav-link",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
                  icon: _fortawesome_fontawesome_free_solid__WEBPACK_IMPORTED_MODULE_3__.faMap
                }), " Minecraft Maps"]
              })
            })
          })]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "jsx-1876354582" + " " + "navbar-collapse collapse w-100 order-3 dual-collapse2",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
          className: "jsx-1876354582" + " " + "navbar-nav ml-auto",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
            className: "jsx-1876354582" + " " + "nav-item",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
              id: "username",
              className: "jsx-1876354582"
            })
          })
        })
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: "jsx-1876354582" + " " + ((_styles_module_css__WEBPACK_IMPORTED_MODULE_8___default().maindiv) || ""),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
        action: "",
        acceptCharset: "utf8",
        onSubmit: handleSubmit,
        className: "jsx-1876354582",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          id: "statusOutput",
          className: "jsx-1876354582"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: "jsx-1876354582" + " " + ((_styles_module_css__WEBPACK_IMPORTED_MODULE_8___default().loginForm) || ""),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ol", {
            className: "jsx-1876354582",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
              className: "jsx-1876354582",
              children: "Sign up:"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
              className: "jsx-1876354582",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                placeholder: "Username",
                type: "username",
                id: "username",
                name: "username",
                maxLength: "20",
                required: true,
                onChange: e => setUsername(e.target.value),
                value: username,
                className: "jsx-1876354582"
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
              className: "jsx-1876354582",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                placeholder: "Email",
                type: "email",
                id: "email",
                name: "email",
                minLength: "5",
                maxLength: "32",
                required: true,
                onChange: e => setEmail(e.target.value),
                value: email,
                className: "jsx-1876354582"
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
              className: "jsx-1876354582",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                placeholder: "Password",
                type: "password",
                id: "password",
                name: "password",
                minLength: "5",
                required: true,
                maxLength: "32",
                onChange: e => setPassword(e.target.value),
                value: password,
                className: "jsx-1876354582"
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
              className: "jsx-1876354582",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                placeholder: "Re-Enter Password",
                type: "password",
                id: "password",
                name: "password",
                minLength: "5",
                required: true,
                maxLength: "32",
                onChange: e => setRePassword(e.target.value),
                value: rePassword,
                className: "jsx-1876354582"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
              className: "jsx-1876354582",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6___default()), {
                style: {
                  marginTop: 10,
                  marginLeft: 4
                },
                type: "submit",
                variant: "primary",
                children: "Submit"
              }), ' ']
            })]
          })
        })]
      })
    })]
  });
}

async function getServerSideProps(context) {
  const options = {
    headers: {
      cookie: context.req.headers.cookie
    }
  };
  const status = await fetch("http://localhost/api/user", options);
  const jsonData = await status.json();
  const textData = JSON.stringify(jsonData);
  return {
    props: {
      jsonData,
      textData
    }
  };
}
/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ }),

/***/ 3186:
/***/ (function(module) {

// Exports
module.exports = {
	"body": "styles_body__3OcG7",
	"maindiv": "styles_maindiv__2g6PR",
	"topnav": "styles_topnav__3L7wb",
	"active": "styles_active__1m9dw",
	"loginForm": "styles_loginForm__dRD_R",
	"btn": "styles_btn__157TB",
	"title": "styles_title__n-z5m",
	"sub": "styles_sub__34ydS"
};


/***/ }),

/***/ 7059:
/***/ (function(module) {

"use strict";
module.exports = require("@fortawesome/fontawesome-free-solid");;

/***/ }),

/***/ 799:
/***/ (function(module) {

"use strict";
module.exports = require("@fortawesome/react-fontawesome");;

/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 5777:
/***/ (function(module) {

"use strict";
module.exports = require("react-bootstrap/Button");;

/***/ }),

/***/ 2268:
/***/ (function(module) {

"use strict";
module.exports = require("react-dom");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ }),

/***/ 3289:
/***/ (function(module) {

"use strict";
module.exports = require("styled-jsx/style");;

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [664], function() { return __webpack_exec__(6076); });
module.exports = __webpack_exports__;

})();