(function() {
var exports = {};
exports.id = 459;
exports.ids = [459];
exports.modules = {

/***/ 2721:
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
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3186);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(799);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_fontawesome_free_solid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7059);
/* harmony import */ var _fortawesome_fontawesome_free_solid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_solid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2268);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6481);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5777);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1664);













function Login({
  textData,
  jsonData
}) {
  const {
    0: username,
    1: setUsername
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('');
  const {
    0: password,
    1: setPassword
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('');

  const handleSubmit = async e => {
    e.preventDefault();
    let userDetails = {
      username: username.split(' ').join(''),
      password: password.split(' ').join('')
    };
    let userRequest = JSON.stringify(userDetails);
    const status = await fetch("../api/login", {
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
      }, `Correct! Welcome, ${responseText.status}! Redirecting...`);
      react_dom__WEBPACK_IMPORTED_MODULE_5___default().render(correctComponent, document.getElementById('statusOutput'));
      setTimeout(() => {
        window.location.replace('../profile');
      }, 500);
    } else {
      const incorrectComponent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("p", {
        style: {
          color: 'red'
        }
      }, "Incorrect");
      react_dom__WEBPACK_IMPORTED_MODULE_5___default().render(incorrectComponent, document.getElementById('statusOutput'));
    }
  };

  const checkSession = async () => {
    if (textData === '{}') {
      class LoginTag extends (react__WEBPACK_IMPORTED_MODULE_4___default().Component) {
        render() {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
            href: "./login",
            className: "nav-link active",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
              icon: _fortawesome_fontawesome_free_solid__WEBPACK_IMPORTED_MODULE_3__.faHome
            }), " Login"]
          });
        }

      }

      react_dom__WEBPACK_IMPORTED_MODULE_5___default().render( /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LoginTag, {
        toWhat: "Login"
      }), document.getElementById('username'));
    } else if (textData !== '{}') {
      window.location.assign('../profile');
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
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_9__.default, {
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
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_9__.default, {
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
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_9__.default, {
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
      className: "jsx-1876354582" + " " + ((_styles_module_css__WEBPACK_IMPORTED_MODULE_10___default().maindiv) || ""),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
        acceptCharset: "utf8",
        onSubmit: handleSubmit,
        className: "jsx-1876354582",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          id: "statusOutput",
          className: "jsx-1876354582"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: "jsx-1876354582" + " " + ((_styles_module_css__WEBPACK_IMPORTED_MODULE_10___default().loginForm) || ""),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ol", {
            className: "jsx-1876354582",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
              className: "jsx-1876354582",
              children: "Sign in to start your session:"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
              className: "jsx-1876354582",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                placeholder: "Username",
                type: "text",
                id: "username",
                name: "username",
                required: true,
                onChange: e => setUsername(e.target.value),
                value: username,
                className: "jsx-1876354582"
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
              className: "jsx-1876354582",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                placeholder: "Password",
                type: "password",
                id: "password",
                name: "password",
                required: true,
                style: {
                  secureEntryText: 'true'
                },
                onChange: e => setPassword(e.target.value),
                value: password,
                className: "jsx-1876354582"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
              className: "jsx-1876354582",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8___default()), {
                style: {
                  marginTop: 10,
                  marginLeft: 4
                },
                type: "submit",
                variant: "primary",
                children: "Submit"
              }), ' ', /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8___default()), {
                size: "sm",
                style: {
                  marginTop: 10
                },
                variant: "link",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                  href: "../create",
                  className: "jsx-1876354582",
                  children: "Don't have an account?"
                })
              })]
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

/***/ 6731:
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

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

/***/ 6481:
/***/ (function(module) {

"use strict";
module.exports = require("react-helmet");;

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
var __webpack_exports__ = __webpack_require__.X(0, [664], function() { return __webpack_exec__(2721); });
module.exports = __webpack_exports__;

})();