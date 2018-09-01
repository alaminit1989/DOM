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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/scripts/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/scripts/helps.js":
/*!******************************!*\
  !*** ./src/scripts/helps.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.getId = getId;\nexports.qryS = qryS;\nexports.qrySAll = qrySAll;\nexports.crElement = crElement;\nfunction getId(id) {\n    try {\n        return document.getElementById(id);\n    } catch (error) {\n        console.log(error);\n    }\n}\n\nfunction qryS(qs) {\n    try {\n        return document.querySelector(qs);\n    } catch (error) {\n        console.log(error);\n    }\n}\n\nfunction qrySAll(qsa) {\n    try {\n        return document.querySelectorAll(qsa);\n    } catch (error) {\n        console.log(error);\n    }\n}\n\nfunction crElement(ce) {\n    try {\n        return document.createElement(ce);\n    } catch (error) {\n        console.log(error);\n    }\n}\n\n//# sourceURL=webpack:///./src/scripts/helps.js?");

/***/ }),

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _helps = __webpack_require__(/*! ./helps */ \"./src/scripts/helps.js\");\n\nvar title = (0, _helps.getId)('title');\nvar jumbotron = (0, _helps.qryS)('.jumbotron');\n\nvar para = (0, _helps.getId)('pt');\nvar input = (0, _helps.getId)('INPUT');\ninput.setAttribute('id', 'txtbox1');\ninput.setAttribute;\ninput.className = 'form-control';\n\nvar flag = true;\n\nsetInterval(function () {\n\n    if (flag) {\n        title.innerHTML = 'Twincle Cats';\n        jumbotron.style.background = 'red';\n        flag = false;\n    } else {\n        title.innerHTML = 'Hasan Mahmud Nayem';\n        jumbotron.style.background = 'blue';\n        flag = true;\n    }\n}, 2000);\n\npara.addEventListener('click', function () {\n    para.hidden = true;\n    input.hidden = false;\n    h1.appendChild(input);\n});\n\ninput.addEventListener('change', function () {\n    para.innerHTML = $('txtbox1').value.toUpperCase();\n    $('txtbox1').value = \"\";\n    input.hidden = true;\n    para.hidden = false;\n});\n\n/*===================================================== */\n\n/*\r\nlet para = document.getElementById('para')\r\n\r\n\r\npara.onclick = function(e) {\r\n    let paraText = document.getElementById('para').innerHTML\r\n    let inputText = document.createElement(\"INPUT\")\r\n    let hr = document.getElementById('hr')\r\n    inputText.value = paraText\r\n  \r\n    paraOnClick(e, inputText, hr) \r\n}\r\n  \r\n  function paraOnClick (e, inputText, hr) {\r\n    \r\n    jumbotron.insertBefore(inputText,hr)\r\n    jumbotron.removeChild(para)\r\n    inputText.classList.add(\"form-control\")\r\n\r\n    inputText.onkeypress = function (e) {    \r\n      keyPressFunc(e, inputText)\r\n  }\r\n}\r\n    \r\nfunction keyPressFunc(e, inputText){\r\n  let newParaText = inputText.value\r\n  let para = document.createElement(\"P\")\r\n    para.setAttribute(\"id\", \"para\")\r\n    para.setAttribute(\"class\", \"lead\")\r\n    para.innerHTML = newParaText\r\n  let key = e.keyCode || e.which;\r\n    if (key == 13){      \r\n     jumbotron.insertBefore(para,hr)\r\n     jumbotron.removeChild(inputText)\r\n      }  \r\n}\r\n*/\n\n//# sourceURL=webpack:///./src/scripts/index.js?");

/***/ })

/******/ });