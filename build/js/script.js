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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/module/addToPage.js":
/*!************************************!*\
  !*** ./src/js/module/addToPage.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _createElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement.js */ \"./src/js/module/createElement.js\");\n/* harmony import */ var _bookCardTemplate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bookCardTemplate.js */ \"./src/js/module/bookCardTemplate.js\");\n\n\n\nfunction addToPage(dataArray, template) {\n  // const booksArr = obj.books;\n  var wrap = document.querySelector(_bookCardTemplate_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].wrap);\n  dataArray.forEach(function (book) {\n    var card = Object(_createElement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(book, template);\n    wrap.appendChild(card);\n  });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (addToPage);\n\n//# sourceURL=webpack:///./src/js/module/addToPage.js?");

/***/ }),

/***/ "./src/js/module/bookCardTemplate.js":
/*!*******************************************!*\
  !*** ./src/js/module/bookCardTemplate.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar bookCardTemplate = {\n  wrap: '.j-catalog-list',\n  tag: 'div',\n  tagClass: 'member-card',\n  setContent: function setContent(data) {\n    console.log(data);\n    return \"<h2 class=\\\"product-card-mini__title\\\">\\n\\t\\t\\t  <a href=\\\"\".concat(data.link, \"\\\">\").concat(data.name, \"</a>\\n\\t\\t\\t</h2>\\n\\t\\t\\t<a href=\\\"\").concat(data.link, \"\\\" class=\\\"product-card-mini__img-wrap\\\">\\n\\t\\t\\t  <img src=\\\"/img/book-store/books_all/\").concat(data.uri, \".png\\\" alt=\\\"\\u041E\\u0431\\u043B\\u043E\\u0436\\u043A\\u0430 \\u043A\\u043D\\u0438\\u0433\\u0438\\\" class=\\\"product-card-mini__img\\\">\\n\\t\\t\\t</a>\\n\\t\\t\\t<p class=\\\"product-card-mini__descr\\\">\").concat(data.desc, \"</p>\\n\\t\\t\\t<span class=\\\"product-card-mini__price\\\">\").concat(data.price, \" &#8381;</span>\");\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (bookCardTemplate);\n\n//# sourceURL=webpack:///./src/js/module/bookCardTemplate.js?");

/***/ }),

/***/ "./src/js/module/createElement.js":
/*!****************************************!*\
  !*** ./src/js/module/createElement.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction createElement(book, template) {\n  var nodeElement = document.createElement(template.tag);\n  nodeElement.classList.add(template.tagClass);\n\n  if (template.href) {\n    nodeElement.setAttribute('href', template.href);\n  }\n\n  nodeElement.innerHTML = template.setContent(book);\n  return nodeElement;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (createElement);\n\n//# sourceURL=webpack:///./src/js/module/createElement.js?");

/***/ }),

/***/ "./src/js/module/sendRequest.js":
/*!**************************************!*\
  !*** ./src/js/module/sendRequest.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction sendRequest(data, onSuccess) {\n  var xhr = new XMLHttpRequest();\n  xhr.open('GET', data);\n  xhr.send();\n\n  xhr.onreadystatechange = function () {\n    if (xhr.readyState === 4 && xhr.status === 200) {\n      var responseObj = JSON.parse(xhr.responseText);\n      onSuccess(responseObj);\n    } else {\n      console.log(\"\\u0416\\u0434\\u0443 \\u0437\\u0430\\u0433\\u0440\\u0443\\u0437\\u043A\\u0438: + \".concat(xhr.readyState));\n    }\n  };\n}\n\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (sendRequest);\n\n//# sourceURL=webpack:///./src/js/module/sendRequest.js?");

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _module_addToPage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/addToPage.js */ \"./src/js/module/addToPage.js\");\n/* harmony import */ var _module_bookCardTemplate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/bookCardTemplate.js */ \"./src/js/module/bookCardTemplate.js\");\n/* harmony import */ var _module_sendRequest_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module/sendRequest.js */ \"./src/js/module/sendRequest.js\");\n\n\n // Объект данных для запроса\n\nvar data = {\n  page: 1,\n  perpage: 8,\n  type: ''\n};\nvar wrap = document.querySelector(_module_bookCardTemplate_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].wrap);\n\nif (wrap) {\n  var dataAjax = createDataAjax();\n  Object(_module_sendRequest_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(dataAjax, function (responseObj) {\n    if (wrap.children) {\n      wrap.innerHTML = '';\n    }\n\n    Object(_module_addToPage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(responseObj.items, _module_bookCardTemplate_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n  });\n} // Слушатель на табы\n\n\nvar tabsWrap = document.querySelector('.j-tabs');\nvar tabsArray = Array.from(tabsWrap.children);\ntabsArray.forEach(function (tab) {\n  var link = tab.firstElementChild;\n  link.addEventListener('click', function (event) {\n    event.preventDefault();\n    data.type = event.target.dataset.type;\n    var dataAjax = createDataAjax();\n    Object(_module_sendRequest_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(dataAjax, function (responseObj) {\n      if (wrap.children) {\n        wrap.innerHTML = '';\n      }\n\n      Object(_module_addToPage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(responseObj.items, _module_bookCardTemplate_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n    });\n  });\n}); // Функция подготовки url для GET запроса\n\nfunction createDataAjax() {\n  if (window.matchMedia(\"(min-width: 768px)\").matches) {\n    data.perPage = 8;\n  } else {\n    data.perPage = 3;\n  }\n\n  return \"https://api.do-epixx.ru/htmlpro/bookstore/books/get/\".concat(data.page, \"/\").concat(data.perPage, \"/\").concat(data.type);\n}\n\n;\n\n//# sourceURL=webpack:///./src/js/script.js?");

/***/ })

/******/ });