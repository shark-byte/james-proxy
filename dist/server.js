/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(2);
module.exports = __webpack_require__(3);


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var express = __webpack_require__(4);
var React = __webpack_require__(0);
// const { renderToString } = require('react-dom/server');
var App = __webpack_require__(5);
var Html = __webpack_require__(7);
// const { ServerStyleSheet } = require('styled-components'); // <-- importing ServerStyleSheet

var request = __webpack_require__(8);

var port = 3000;
var server = express();

// server.get('/', (req, res) => {
//   const sheet = new ServerStyleSheet(); // <-- creating out stylesheet

//   const body = renderToString(sheet.collectStyles(<App />)); // <-- collecting styles
//   const styles = sheet.getStyleTags(); // <-- getting all the tags from the sheet
//   const title = 'Server side Rendering with Styled Components';

//   res.send(
//     Html({
//       body,
//       styles, // <-- passing the styles to our Html template
//       title
//     })
//   );
// });

// Creating a single index route to server our React application from.
server.get('/restaurants/:id', function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var id, galleryHtml, nearbyHtml, sidebarHtml, overviewHtml, services;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id = req.params.id;
            galleryHtml = void 0;
            nearbyHtml = void 0;
            sidebarHtml = void 0;
            overviewHtml = void 0;
            services = {
              'sidebar': 'http://localhost:3003/restaurants/' + id
              // var components = {};
              // const services = {
              //   'gallery': `http://localhost:3001/restaurant/${id}`,
              //   'nearby': `http://localhost:8000/restaurant/${id}`,
              //   'sidebar': `http://localhost:3003/restaurant/${id}`,
              //   'overview': '',
              // }

              // request(services['gallery'], (error, response, body) => {
              //   if (error) {
              //     throw error;
              //   } else {
              //     galleryHtml = body;
              //   }
              // });

              // request(services['nearby'], (error, response, body) => {
              //   if (error) {
              //     throw error;
              //   } else {
              //     nearbyHtml = body;
              //   }
              // });

            };
            _context.next = 8;
            return request(services['sidebar'], function (error, response, body) {
              if (error) {
                throw error;
              } else {
                // sidebarHtml = body;;
                // console.log(body);
                sidebarHtml = body;
              }
            });

          case 8:

            // let components = {
            //   gallery: galleryHtml,
            //   nearby: nearbyHtml,
            //   sidebar: sidebarHtml,
            //   overview: overviewHtml
            // }
            // let components = {
            //   sidebar: sidebarHtml
            // }
            // const sheet = new ServerStyleSheet(); // <-- creating out stylesheet
            // console.log('components', components);
            // const body = renderToString(sheet.collectStyles(<App components={components}/>)); // <-- collecting styles
            // const styles = sheet.getStyleTags(); // <-- getting all the tags from the sheet
            console.log('sidebarHtml', sidebarHtml);
            res.send(Html({
              sidebarHtml: sidebarHtml
            }));

          case 10:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());

server.listen(port);
console.log('Serving at http://localhost:' + port);

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  #midsection {\n    margin: 40px 0;\n    padding: 0 40px;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n  }\n  #overview-wrapper {\n    margin: 0 40px 0 0;\n  }\n'], ['\n  #midsection {\n    margin: 40px 0;\n    padding: 0 40px;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n  }\n  #overview-wrapper {\n    margin: 0 40px 0 0;\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(6);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// Our single Styled Component definition
var AppContainer = _styledComponents2.default.div(_templateObject);

var App = function App(props) {
  return _react2.default.createElement(
    AppContainer,
    null,
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'div',
        { id: 'midsection' },
        props.components.sidebar
      )
    )
  );
};

exports.default = App;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var Html = function Html(_ref) {
  var sidebarHtml = _ref.sidebarHtml;
  return "\n  <!DOCTYPE html>\n  <html>\n    <head>\n        <meta charset=\"utf-8\">\n        <link rel=\"stylesheet\" type=\"text/css\" href=\"styles.css\">\n        <link href=\"https://fonts.googleapis.com/css?family=Raleway:400,700|Roboto:400,700\" rel=\"stylesheet\">\n        <link rel=\"shortcut icon\" href=\"http://res.cloudinary.com/madlicorice/image/upload/v1520448614/WeGot-favicon.ico\">\n        <title>Shark Byte</title>\n        <style>\n          #midsection {\n            margin: 40px 0;\n            padding: 0 40px;\n            display: flex;\n            flex-direction: row;\n            justify-content: center;\n          }\n          #overview-wrapper {\n            margin: 0 40px 0 0;\n          }\n        </style>\n    </head>\n    <body>\n      " + sidebarHtml + "\n    </body>\n  </html>\n";
};

exports.default = Html;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("request-promise-native");

/***/ })
/******/ ]);