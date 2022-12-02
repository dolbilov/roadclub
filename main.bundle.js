/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/BikesManager.js":
/*!****************************************!*\
  !*** ./src/components/BikesManager.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ BikesManager)\n/* harmony export */ });\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/constants */ \"./src/utils/constants.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar BikesManager = /*#__PURE__*/function () {\n  function BikesManager() {\n    _classCallCheck(this, BikesManager);\n  }\n  _createClass(BikesManager, [{\n    key: \"_showCards\",\n    value: function _showCards(cardsToShow) {\n      for (var i = 0; i < cardsToShow.length; i++) {\n        var card = _utils_constants__WEBPACK_IMPORTED_MODULE_0__.bikesCards[i];\n        var cardImage = card.querySelector(_utils_constants__WEBPACK_IMPORTED_MODULE_0__.bikesCardImageSelector);\n        var cardName = card.querySelector(_utils_constants__WEBPACK_IMPORTED_MODULE_0__.bikesCardNameSelector);\n        cardName.textContent = cardsToShow[i].name;\n        cardImage.src = cardsToShow[i].image;\n        cardImage.alt = cardsToShow[i].name;\n      }\n    }\n  }, {\n    key: \"_setActiveElement\",\n    value: function _setActiveElement(newActiveElement) {\n      // remove temp active class\n      var activeElement = _utils_constants__WEBPACK_IMPORTED_MODULE_0__.bikesMenu.querySelector(\".\".concat(_utils_constants__WEBPACK_IMPORTED_MODULE_0__.activeBikesMenuElementClass));\n      activeElement.classList.remove(_utils_constants__WEBPACK_IMPORTED_MODULE_0__.activeBikesMenuElementClass);\n\n      // set active class to the new active element\n      newActiveElement.classList.add(_utils_constants__WEBPACK_IMPORTED_MODULE_0__.activeBikesMenuElementClass);\n    }\n  }, {\n    key: \"setEventListeners\",\n    value: function setEventListeners() {\n      var _this = this;\n      var _loop = function _loop(i) {\n        _utils_constants__WEBPACK_IMPORTED_MODULE_0__.bikesMenuItems[i].addEventListener(\"click\", function () {\n          _this._setActiveElement(_utils_constants__WEBPACK_IMPORTED_MODULE_0__.bikesMenuItems[i]);\n          _this._showCards(BikesManager.cards[i]);\n        });\n      };\n      for (var i = 0; i < _utils_constants__WEBPACK_IMPORTED_MODULE_0__.bikesMenuItems.length; i++) {\n        _loop(i);\n      }\n    }\n  }]);\n  return BikesManager;\n}();\n_defineProperty(BikesManager, \"cards\", [[{\n  image: new URL(/* asset import */ __webpack_require__(/*! ../images/bikes/cervelo-caledonia-5.jpg */ \"./src/images/bikes/cervelo-caledonia-5.jpg\"), __webpack_require__.b),\n  name: 'Cervelo Caledonia-5'\n}, {\n  image: new URL(/* asset import */ __webpack_require__(/*! ../images/bikes/cannondale-systemsix-himod.jpg */ \"./src/images/bikes/cannondale-systemsix-himod.jpg\"), __webpack_require__.b),\n  name: 'Cannondale Systemsix Himod'\n}, {\n  image: new URL(/* asset import */ __webpack_require__(/*! ../images/bikes/trek-domane-sl-7.jpg */ \"./src/images/bikes/trek-domane-sl-7.jpg\"), __webpack_require__.b),\n  name: 'Trek Domane SL-7'\n}], [{\n  image: new URL(/* asset import */ __webpack_require__(/*! ../images/bikes/cervelo-aspero-grx-810.jpg */ \"./src/images/bikes/cervelo-aspero-grx-810.jpg\"), __webpack_require__.b),\n  name: 'Cervelo Aspero GRX 810'\n}, {\n  image: new URL(/* asset import */ __webpack_require__(/*! ../images/bikes/specialized-s-works-diverge.jpg */ \"./src/images/bikes/specialized-s-works-diverge.jpg\"), __webpack_require__.b),\n  name: 'Specialized S-Works Diverge'\n}, {\n  image: new URL(/* asset import */ __webpack_require__(/*! ../images/bikes/cannondale-topstone-lefty-3.jpg */ \"./src/images/bikes/cannondale-topstone-lefty-3.jpg\"), __webpack_require__.b),\n  name: 'Cannondale Topstone Lefty 3'\n}], [{\n  image: new URL(/* asset import */ __webpack_require__(/*! ../images/bikes/specialized-s-works-shiv.jpg */ \"./src/images/bikes/specialized-s-works-shiv.jpg\"), __webpack_require__.b),\n  name: 'Specialized S-Works Shiv'\n}, {\n  image: new URL(/* asset import */ __webpack_require__(/*! ../images/bikes/bmc-timemachine-01.jpg */ \"./src/images/bikes/bmc-timemachine-01.jpg\"), __webpack_require__.b),\n  name: 'BMC Timemachine 01 ONE'\n}, {\n  image: new URL(/* asset import */ __webpack_require__(/*! ../images/bikes/cervelo-caledonia-5.jpg */ \"./src/images/bikes/cervelo-caledonia-5.jpg\"), __webpack_require__.b),\n  name: 'Cervelo P-Series'\n}]]);\n\n\n//# sourceURL=webpack://roadclub/./src/components/BikesManager.js?");

/***/ }),

/***/ "./src/components/Toggle.js":
/*!**********************************!*\
  !*** ./src/components/Toggle.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Toggle)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nvar Toggle = /*#__PURE__*/function () {\n  function Toggle(toggle) {\n    _classCallCheck(this, Toggle);\n    this._toggle = toggle;\n  }\n  _createClass(Toggle, [{\n    key: \"setPreferTheme\",\n    value: function setPreferTheme() {\n      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {\n        document.documentElement.setAttribute('data-theme', 'dark');\n        this._toggle.checked = true;\n      } else {\n        document.documentElement.setAttribute('data-theme', 'light');\n        this._toggle.checked = false;\n      }\n    }\n  }, {\n    key: \"_changeTheme\",\n    value: function _changeTheme(evt) {\n      var nextTheme = evt.target.checked ? 'dark' : 'light';\n      document.documentElement.setAttribute('data-theme', nextTheme);\n    }\n  }, {\n    key: \"setEventListeners\",\n    value: function setEventListeners() {\n      this._toggle.addEventListener('change', this._changeTheme);\n    }\n  }]);\n  return Toggle;\n}();\n\n\n//# sourceURL=webpack://roadclub/./src/components/Toggle.js?");

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ \"./src/pages/index.scss\");\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index.html */ \"./src/index.html\");\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/constants */ \"./src/utils/constants.js\");\n/* harmony import */ var _components_Toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Toggle */ \"./src/components/Toggle.js\");\n/* harmony import */ var _components_BikesManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/BikesManager */ \"./src/components/BikesManager.js\");\n\n\n\n\n\nvar toggle = new _components_Toggle__WEBPACK_IMPORTED_MODULE_3__[\"default\"](_utils_constants__WEBPACK_IMPORTED_MODULE_2__.footerThemeToggle);\ntoggle.setPreferTheme();\ntoggle.setEventListeners();\nvar bikesManager = new _components_BikesManager__WEBPACK_IMPORTED_MODULE_4__[\"default\"]();\nbikesManager.setEventListeners();\n\n//# sourceURL=webpack://roadclub/./src/pages/index.js?");

/***/ }),

/***/ "./src/utils/constants.js":
/*!********************************!*\
  !*** ./src/utils/constants.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"activeBikesMenuElementClass\": () => (/* binding */ activeBikesMenuElementClass),\n/* harmony export */   \"bikesCardImageSelector\": () => (/* binding */ bikesCardImageSelector),\n/* harmony export */   \"bikesCardNameSelector\": () => (/* binding */ bikesCardNameSelector),\n/* harmony export */   \"bikesCards\": () => (/* binding */ bikesCards),\n/* harmony export */   \"bikesCardsList\": () => (/* binding */ bikesCardsList),\n/* harmony export */   \"bikesMenu\": () => (/* binding */ bikesMenu),\n/* harmony export */   \"bikesMenuItems\": () => (/* binding */ bikesMenuItems),\n/* harmony export */   \"footerThemeToggle\": () => (/* binding */ footerThemeToggle)\n/* harmony export */ });\nvar footerThemeToggle = document.querySelector('.footer').querySelector('.toggle__invisible-checkbox');\nvar bikesSection = document.querySelector(\".bikes\");\nvar bikesMenu = bikesSection.querySelector(\".bikes__menu\");\nvar bikesMenuItems = bikesMenu.querySelectorAll(\".bikes__menu-item\");\nvar activeBikesMenuElementClass = \"bikes__menu-item_active\";\nvar bikesCardsList = bikesSection.querySelector(\".bikes__list\");\nvar bikesCards = bikesCardsList.querySelectorAll('li');\nvar bikesCardImageSelector = \".bikes__image\";\nvar bikesCardNameSelector = \".bikes__name\";\n\n//# sourceURL=webpack://roadclub/./src/utils/constants.js?");

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ \"./node_modules/html-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/favicons/apple-touch-icon.png */ \"./src/images/favicons/apple-touch-icon.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/favicons/favicon-32x32.png */ \"./src/images/favicons/favicon-32x32.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./images/favicons/favicon.ico */ \"./src/images/favicons/favicon.ico\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./images/photos/forest-road.jpg */ \"./src/images/photos/forest-road.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./images/photos/highway2.jpg */ \"./src/images/photos/highway2.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./images/bikes/cervelo-caledonia-5.jpg */ \"./src/images/bikes/cervelo-caledonia-5.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./images/bikes/cannondale-systemsix-himod.jpg */ \"./src/images/bikes/cannondale-systemsix-himod.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./images/bikes/trek-domane-sl-7.jpg */ \"./src/images/bikes/trek-domane-sl-7.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ./images/photos/highway3.jpg */ \"./src/images/photos/highway3.jpg\"), __webpack_require__.b);\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);\nvar ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);\nvar ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);\nvar ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);\nvar ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);\nvar ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);\nvar ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);\nvar ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);\nvar ___HTML_LOADER_REPLACEMENT_8___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_8___);\nvar code = \"<!DOCTYPE html>\\n<html lang=\\\"ru\\\">\\n<head>\\n  <meta charset=\\\"UTF-8\\\"/>\\n  <meta content=\\\"IE=edge\\\" http-equiv=\\\"X-UA-Compatible\\\"/>\\n  <meta content=\\\"width=device-width, initial-scale=1.0\\\" name=\\\"viewport\\\"/>\\n  <title>Roadclub</title>\\n\\n  <link href=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\" rel=\\\"apple-touch-icon\\\" sizes=\\\"180x180\\\"/>\\n  <link href=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\" rel=\\\"apple-touch-icon\\\"/>\\n  <link href=\\\"\" + ___HTML_LOADER_REPLACEMENT_1___ + \"\\\" rel=\\\"icon\\\" sizes=\\\"32x32\\\" type=\\\"image/png\\\"/>\\n  <link href=\\\"\" + ___HTML_LOADER_REPLACEMENT_2___ + \"\\\" rel=\\\"shortcut icon\\\"/>\\n</head>\\n<body>\\n<main>\\n  <nav class=\\\"menu\\\">\\n    <div class=\\\"content\\\">\\n      <ul class=\\\"menu__items\\\">\\n        <li><a class=\\\"menu__item\\\" href=\\\"#bikes\\\">Велосипеды</a></li>\\n        <li><a class=\\\"menu__item\\\" href=\\\"#training\\\">Тренировки</a></li>\\n      </ul>\\n      <!-- /.menu__list -->\\n    </div>\\n    <!-- /.content -->\\n  </nav>\\n  <!-- /.menu -->\\n\\n  <section class=\\\"promo\\\">\\n    <div class=\\\"content promo__content\\\">\\n      <div class=\\\"promo__text\\\">\\n        <h1 class=\\\"section-heading\\\">Шоссе, ТТ и&nbsp;Грэвел</h1>\\n        <p class=\\\"promo__description\\\">Триатлонные старты, горные серпантины или грейвел заезды по живописным маршрутам –\\n          нужно только определиться с выбором велосипеда и отправиться в путь.</p>\\n        <a class=\\\"promo__link\\\" href=\\\"#\\\">Подробнее</a>\\n      </div>\\n      <!-- /.promo__text -->\\n      <img alt=\\\"Дорога в лесу.\\\" class=\\\"promo__road-image\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_3___ + \"\\\">\\n      <p class=\\\"promo__bike-name\\\">Cannondale Systemsix</p>\\n    </div>\\n    <!-- /.content -->\\n  </section>\\n  <!-- /.promo -->\\n\\n  <section aria-label=\\\"Цитата.\\\" class=\\\"quote\\\">\\n    <div class=\\\"content quote__content\\\">\\n      <img alt=\\\"Велогонщик на дороге в предгорье.\\\" class=\\\"quote__image\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_4___ + \"\\\"/>\\n      <figure class=\\\"quote__figure\\\">\\n        <blockquote class=\\\"quote__text\\\">\\n          «Катайся много или мало, долго или коротко, как хочешь - но катайся»\\n        </blockquote>\\n        <figcaption class=\\\"quote__figcaption\\\">\\n          <p class=\\\"quote__author-name\\\">Эдди Меркс</p>\\n          <p class=\\\"quote__author-job\\\">Велогонщик</p>\\n        </figcaption>\\n      </figure>\\n    </div>\\n    <!-- /.content -->\\n  </section>\\n  <!-- /.quote -->\\n\\n  <section class=\\\"bikes\\\" id=\\\"bikes\\\">\\n    <div class=\\\"content\\\">\\n      <div class=\\\"bikes__text\\\">\\n        <h2 class=\\\"section-heading\\\">Велосипеды</h2>\\n        <nav>\\n          <ul class=\\\"bikes__menu\\\">\\n            <li class=\\\"bikes__menu-item bikes__menu-item_active\\\">Шоссе</li>\\n            <li class=\\\"bikes__menu-item\\\">Грэвел</li>\\n            <li class=\\\"bikes__menu-item\\\">ТТ</li>\\n          </ul>\\n        </nav>\\n      </div>\\n      <!-- /.bikes__text -->\\n\\n      <ul class=\\\"bikes__list\\\">\\n        <li>\\n          <img alt=\\\"Cervelo Caledonia-5.\\\" class=\\\"bikes__image\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_5___ + \"\\\">\\n          <p class=\\\"bikes__name\\\">Cervelo Caledonia-5</p>\\n        </li>\\n\\n        <li>\\n          <img alt=\\\"Cannondale Systemsix Himod.\\\" class=\\\"bikes__image\\\"\\n               src=\\\"\" + ___HTML_LOADER_REPLACEMENT_6___ + \"\\\">\\n          <p class=\\\"bikes__name\\\">Cannondale Systemsix Himod</p>\\n        </li>\\n\\n        <li>\\n          <img alt=\\\"Trek Domane SL-7.\\\" class=\\\"bikes__image\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_7___ + \"\\\">\\n          <p class=\\\"bikes__name\\\">Trek Domane SL-7</p>\\n        </li>\\n      </ul>\\n      <!-- /.bikes__list -->\\n    </div>\\n    <!-- /.content -->\\n  </section>\\n  <!-- /.bicycles -->\\n\\n  <section class=\\\"training\\\" id=\\\"training\\\">\\n    <div class=\\\"content training__content\\\">\\n      <h2 class=\\\"section-heading\\\">Тренировки</h2>\\n\\n      <img alt=\\\"Дорога в лесу.\\\" class=\\\"training__image\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_8___ + \"\\\">\\n\\n      <p class=\\\"training__text\\\">Чтобы найти маршрут для тренировки можно воспользоваться сервисом Komoot, а записать эти\\n        тренировки поможет приложение Strava, а также это приложение позволит построить тренировочный план.</p>\\n\\n      <ul class=\\\"training__apps\\\">\\n        <li><a class=\\\"training__app-link\\\" href=\\\"https://www.strava.com\\\" rel=\\\"noreferrer noopener\\\"\\n               target=\\\"_blank\\\">Strava</a></li>\\n        <li><a class=\\\"training__app-link\\\" href=\\\" https://www.komoot.com\\\" rel=\\\"noreferrer noopener\\\"\\n               target=\\\"_blank\\\">Komoot</a>\\n        </li>\\n      </ul>\\n    </div>\\n    <!-- /.content training__content -->\\n  </section>\\n  <!-- /.training -->\\n</main>\\n\\n<footer class=\\\"footer\\\">\\n  <div class=\\\"content\\\">\\n    <p class=\\\"footer__mail-text\\\">Подпишитесь на рассылку —</p>\\n    <form>\\n      <input class=\\\"footer__input\\\" id=\\\"email\\\" name=\\\"email\\\" placeholder=\\\"Ваш e-mail\\\" type=\\\"email\\\">\\n    </form>\\n    <div class=\\\"footer__bottom\\\">\\n      <span class=\\\"footer__copyright\\\">&copy; Road Club 2021</span>\\n      <span class=\\\"toggle\\\">\\n        <!-- Sun icon -->\\n        <svg class=\\\"toggle__sun-icon\\\" fill=\\\"none\\\" height=\\\"28\\\" viewBox=\\\"0 0 28 28\\\" width=\\\"28\\\"\\n             xmlns=\\\"http://www.w3.org/2000/svg\\\">\\n            <path clip-rule=\\\"evenodd\\\"\\n                  d=\\\"M14 0C14.3713 0 14.7274 0.147499 14.99 0.41005C15.2525 0.672601 15.4 1.0287 15.4 1.4V2.8C15.4 3.1713 15.2525 3.5274 14.99 3.78995C14.7274 4.0525 14.3713 4.2 14 4.2C13.6287 4.2 13.2726 4.0525 13.0101 3.78995C12.7475 3.5274 12.6 3.1713 12.6 2.8V1.4C12.6 1.21615 12.6362 1.0341 12.7066 0.864243C12.7769 0.694387 12.88 0.540052 13.0101 0.41005C13.1401 0.280048 13.2944 0.176925 13.4642 0.106569C13.6341 0.036212 13.8161 0 14 0ZM4.1 4.1C4.23 3.96998 4.38435 3.86685 4.55421 3.79648C4.72408 3.72612 4.90614 3.6899 5.09 3.6899C5.27386 3.6899 5.45592 3.72612 5.62579 3.79648C5.79565 3.86685 5.95 3.96998 6.08 4.1L7.07 5.09C7.20001 5.22001 7.30314 5.37435 7.3735 5.54422C7.44386 5.71408 7.48007 5.89614 7.48007 6.08C7.48007 6.26386 7.44386 6.44592 7.3735 6.61578C7.30314 6.78565 7.20001 6.93999 7.07 7.07C6.93999 7.20001 6.78565 7.30314 6.61578 7.3735C6.44592 7.44386 6.26386 7.48007 6.08 7.48007C5.89614 7.48007 5.71408 7.44386 5.54422 7.3735C5.37435 7.30314 5.22001 7.20001 5.09 7.07L4.1 6.08C3.96998 5.95 3.86685 5.79565 3.79648 5.62579C3.72612 5.45592 3.6899 5.27386 3.6899 5.09C3.6899 4.90614 3.72612 4.72408 3.79648 4.55421C3.86685 4.38435 3.96998 4.23 4.1 4.1ZM23.9 4.1C24.03 4.23 24.1332 4.38435 24.2035 4.55421C24.2739 4.72408 24.3101 4.90614 24.3101 5.09C24.3101 5.27386 24.2739 5.45592 24.2035 5.62579C24.1332 5.79565 24.03 5.95 23.9 6.08L22.91 7.07C22.6474 7.33256 22.2913 7.48007 21.92 7.48007C21.5487 7.48007 21.1926 7.33256 20.93 7.07C20.6674 6.80744 20.5199 6.45132 20.5199 6.08C20.5199 5.70868 20.6674 5.35256 20.93 5.09L21.92 4.1C22.05 3.96998 22.2043 3.86685 22.3742 3.79648C22.5441 3.72612 22.7261 3.6899 22.91 3.6899C23.0939 3.6899 23.2759 3.72612 23.4458 3.79648C23.6157 3.86685 23.77 3.96998 23.9 4.1ZM7 14C7 12.1435 7.7375 10.363 9.05025 9.05025C10.363 7.7375 12.1435 7 14 7C15.8565 7 17.637 7.7375 18.9497 9.05025C20.2625 10.363 21 12.1435 21 14C21 15.8565 20.2625 17.637 18.9497 18.9497C17.637 20.2625 15.8565 21 14 21C12.1435 21 10.363 20.2625 9.05025 18.9497C7.7375 17.637 7 15.8565 7 14ZM0 14C0 13.6287 0.147499 13.2726 0.41005 13.0101C0.672601 12.7475 1.0287 12.6 1.4 12.6H2.8C2.98385 12.6 3.1659 12.6362 3.33576 12.7066C3.50561 12.7769 3.65995 12.88 3.78995 13.0101C3.91995 13.1401 4.02308 13.2944 4.09343 13.4642C4.16379 13.6341 4.2 13.8161 4.2 14C4.2 14.1839 4.16379 14.3659 4.09343 14.5358C4.02308 14.7056 3.91995 14.8599 3.78995 14.99C3.65995 15.12 3.50561 15.2231 3.33576 15.2934C3.1659 15.3638 2.98385 15.4 2.8 15.4H1.4C1.0287 15.4 0.672601 15.2525 0.41005 14.99C0.147499 14.7274 0 14.3713 0 14ZM23.8 14C23.8 13.6287 23.9475 13.2726 24.2101 13.0101C24.4726 12.7475 24.8287 12.6 25.2 12.6H26.6C26.7839 12.6 26.9659 12.6362 27.1358 12.7066C27.3056 12.7769 27.4599 12.88 27.5899 13.0101C27.72 13.1401 27.8231 13.2944 27.8934 13.4642C27.9638 13.6341 28 13.8161 28 14C28 14.1839 27.9638 14.3659 27.8934 14.5358C27.8231 14.7056 27.72 14.8599 27.5899 14.99C27.4599 15.12 27.3056 15.2231 27.1358 15.2934C26.9659 15.3638 26.7839 15.4 26.6 15.4H25.2C24.8287 15.4 24.4726 15.2525 24.2101 14.99C23.9475 14.7274 23.8 14.3713 23.8 14ZM20.93 20.93C21.06 20.8 21.2143 20.6968 21.3842 20.6265C21.5541 20.5561 21.7361 20.5199 21.92 20.5199C22.1039 20.5199 22.2859 20.5561 22.4558 20.6265C22.6257 20.6968 22.78 20.8 22.91 20.93L23.9 21.92C24.03 22.05 24.1331 22.2044 24.2035 22.3742C24.2739 22.5441 24.3101 22.7261 24.3101 22.91C24.3101 23.0939 24.2739 23.2759 24.2035 23.4458C24.1331 23.6156 24.03 23.77 23.9 23.9C23.77 24.03 23.6156 24.1331 23.4458 24.2035C23.2759 24.2739 23.0939 24.3101 22.91 24.3101C22.7261 24.3101 22.5441 24.2739 22.3742 24.2035C22.2044 24.1331 22.05 24.03 21.92 23.9L20.93 22.91C20.8 22.78 20.6968 22.6257 20.6265 22.4558C20.5561 22.2859 20.5199 22.1039 20.5199 21.92C20.5199 21.7361 20.5561 21.5541 20.6265 21.3842C20.6968 21.2143 20.8 21.06 20.93 20.93ZM5.09 20.93C5.35256 20.6674 5.70868 20.5199 6.08 20.5199C6.45132 20.5199 6.80744 20.6674 7.07 20.93C7.33256 21.1926 7.48007 21.5487 7.48007 21.92C7.48007 22.2913 7.33256 22.6474 7.07 22.91L6.08 23.9C5.94999 24.03 5.79565 24.1331 5.62578 24.2035C5.45592 24.2739 5.27386 24.3101 5.09 24.3101C4.90614 24.3101 4.72408 24.2739 4.55422 24.2035C4.38435 24.1331 4.23001 24.03 4.1 23.9C3.96999 23.77 3.86686 23.6156 3.7965 23.4458C3.72614 23.2759 3.68993 23.0939 3.68993 22.91C3.68993 22.7261 3.72614 22.5441 3.7965 22.3742C3.86686 22.2044 3.96999 22.05 4.1 21.92L5.09 20.93ZM14 23.8C14.3713 23.8 14.7274 23.9475 14.99 24.2101C15.2525 24.4726 15.4 24.8287 15.4 25.2V26.6C15.4 26.9713 15.2525 27.3274 14.99 27.5899C14.7274 27.8525 14.3713 28 14 28C13.6287 28 13.2726 27.8525 13.0101 27.5899C12.7475 27.3274 12.6 26.9713 12.6 26.6V25.2C12.6 24.8287 12.7475 24.4726 13.0101 24.2101C13.2726 23.9475 13.6287 23.8 14 23.8Z\\\"\\n                  fill=\\\"currentColor\\\"\\n                  fill-rule=\\\"evenodd\\\"/>\\n          </svg>\\n\\n            <label class=\\\"toggle__label\\\" for=\\\"theme\\\">\\n              <input class=\\\"toggle__invisible-checkbox\\\" id=\\\"theme\\\" name=\\\"theme\\\" type=\\\"checkbox\\\"/>\\n              <span class=\\\"toggle__visible-checkbox\\\"></span>\\n            </label>\\n\\n        <!-- Moon icon -->\\n            <svg class=\\\"toggle__moon-icon\\\" fill=\\\"none\\\" height=\\\"20\\\" viewBox=\\\"0 0 20 20\\\" width=\\\"20\\\"\\n                 xmlns=\\\"http://www.w3.org/2000/svg\\\">\\n              <path clip-rule=\\\"evenodd\\\"\\n                    d=\\\"M7.353 0.938854C7.49145 1.07752 7.58611 1.2538 7.62522 1.44581C7.66433 1.63781 7.64618 1.83708 7.573 2.01885C6.98754 3.4739 6.8427 5.06895 7.15649 6.60565C7.47028 8.14236 8.22885 9.55293 9.33789 10.662C10.4469 11.771 11.8575 12.5296 13.3942 12.8434C14.9309 13.1572 16.526 13.0123 17.981 12.4269C18.1628 12.3538 18.362 12.3358 18.5539 12.375C18.7459 12.4142 18.9221 12.5089 19.0606 12.6474C19.1992 12.7859 19.2941 12.962 19.3334 13.1539C19.3728 13.3458 19.3549 13.545 19.282 13.7269C18.5375 15.5794 17.2557 17.1667 15.6016 18.2847C13.9474 19.4026 11.9965 19.9999 10 19.9999C4.477 19.9999 0 15.5229 0 9.99985C0 5.79285 2.598 2.19485 6.273 0.717854C6.45477 0.644679 6.65404 0.626519 6.84605 0.665632C7.03805 0.704744 7.21434 0.799404 7.353 0.937854V0.938854Z\\\"\\n                    fill=\\\"currentColor\\\"\\n                    fill-rule=\\\"evenodd\\\"/>\\n            </svg>\\n          </span>\\n      <!-- /.toggle -->\\n      <!-- /.footer__copyright -->\\n    </div>\\n    <!-- /.footer__bottom -->\\n  </div>\\n  <!-- /.content -->\\n</footer>\\n</body>\\n</html>\\n\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://roadclub/./src/index.html?");

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = String(url.__esModule ? url.default : url);\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  }\n\n  if (options.maybeNeedQuotes && /[\\t\\n\\f\\r \"'=<>`]/.test(url)) {\n    return \"\\\"\".concat(url, \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://roadclub/./node_modules/html-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./src/pages/index.scss":
/*!******************************!*\
  !*** ./src/pages/index.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://roadclub/./src/pages/index.scss?");

/***/ }),

/***/ "./src/images/bikes/bmc-timemachine-01.jpg":
/*!*************************************************!*\
  !*** ./src/images/bikes/bmc-timemachine-01.jpg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d5d2d8da255a442354fa.jpg\";\n\n//# sourceURL=webpack://roadclub/./src/images/bikes/bmc-timemachine-01.jpg?");

/***/ }),

/***/ "./src/images/bikes/cannondale-systemsix-himod.jpg":
/*!*********************************************************!*\
  !*** ./src/images/bikes/cannondale-systemsix-himod.jpg ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"508a715c15e3ca3bc3db.jpg\";\n\n//# sourceURL=webpack://roadclub/./src/images/bikes/cannondale-systemsix-himod.jpg?");

/***/ }),

/***/ "./src/images/bikes/cannondale-topstone-lefty-3.jpg":
/*!**********************************************************!*\
  !*** ./src/images/bikes/cannondale-topstone-lefty-3.jpg ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"eab3745c2156f6b7a7b3.jpg\";\n\n//# sourceURL=webpack://roadclub/./src/images/bikes/cannondale-topstone-lefty-3.jpg?");

/***/ }),

/***/ "./src/images/bikes/cervelo-aspero-grx-810.jpg":
/*!*****************************************************!*\
  !*** ./src/images/bikes/cervelo-aspero-grx-810.jpg ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0462341c8cf1d6162d0d.jpg\";\n\n//# sourceURL=webpack://roadclub/./src/images/bikes/cervelo-aspero-grx-810.jpg?");

/***/ }),

/***/ "./src/images/bikes/cervelo-caledonia-5.jpg":
/*!**************************************************!*\
  !*** ./src/images/bikes/cervelo-caledonia-5.jpg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"df48a0a1baffe82df5e5.jpg\";\n\n//# sourceURL=webpack://roadclub/./src/images/bikes/cervelo-caledonia-5.jpg?");

/***/ }),

/***/ "./src/images/bikes/specialized-s-works-diverge.jpg":
/*!**********************************************************!*\
  !*** ./src/images/bikes/specialized-s-works-diverge.jpg ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ebcdba74b500de1ef542.jpg\";\n\n//# sourceURL=webpack://roadclub/./src/images/bikes/specialized-s-works-diverge.jpg?");

/***/ }),

/***/ "./src/images/bikes/specialized-s-works-shiv.jpg":
/*!*******************************************************!*\
  !*** ./src/images/bikes/specialized-s-works-shiv.jpg ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9d376b46c8c1d95ff4f7.jpg\";\n\n//# sourceURL=webpack://roadclub/./src/images/bikes/specialized-s-works-shiv.jpg?");

/***/ }),

/***/ "./src/images/bikes/trek-domane-sl-7.jpg":
/*!***********************************************!*\
  !*** ./src/images/bikes/trek-domane-sl-7.jpg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d258d939a37b4382521b.jpg\";\n\n//# sourceURL=webpack://roadclub/./src/images/bikes/trek-domane-sl-7.jpg?");

/***/ }),

/***/ "./src/images/favicons/apple-touch-icon.png":
/*!**************************************************!*\
  !*** ./src/images/favicons/apple-touch-icon.png ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e36beba5007edfa08072.png\";\n\n//# sourceURL=webpack://roadclub/./src/images/favicons/apple-touch-icon.png?");

/***/ }),

/***/ "./src/images/favicons/favicon-32x32.png":
/*!***********************************************!*\
  !*** ./src/images/favicons/favicon-32x32.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"bd2a267c494f47f83709.png\";\n\n//# sourceURL=webpack://roadclub/./src/images/favicons/favicon-32x32.png?");

/***/ }),

/***/ "./src/images/favicons/favicon.ico":
/*!*****************************************!*\
  !*** ./src/images/favicons/favicon.ico ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c031be9a14b03935cf21.ico\";\n\n//# sourceURL=webpack://roadclub/./src/images/favicons/favicon.ico?");

/***/ }),

/***/ "./src/images/photos/forest-road.jpg":
/*!*******************************************!*\
  !*** ./src/images/photos/forest-road.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"55ed68b750c997f092de.jpg\";\n\n//# sourceURL=webpack://roadclub/./src/images/photos/forest-road.jpg?");

/***/ }),

/***/ "./src/images/photos/highway2.jpg":
/*!****************************************!*\
  !*** ./src/images/photos/highway2.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0efae6da9fc7bb7ab9a2.jpg\";\n\n//# sourceURL=webpack://roadclub/./src/images/photos/highway2.jpg?");

/***/ }),

/***/ "./src/images/photos/highway3.jpg":
/*!****************************************!*\
  !*** ./src/images/photos/highway3.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3955989841921146c32d.jpg\";\n\n//# sourceURL=webpack://roadclub/./src/images/photos/highway3.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/pages/index.js");
/******/ 	
/******/ })()
;