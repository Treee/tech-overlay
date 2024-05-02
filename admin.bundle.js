(self["webpackChunktech_overlay"] = self["webpackChunktech_overlay"] || []).push([["admin"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/IronstrikeSemiBold.otf */ "./src/assets/fonts/IronstrikeSemiBold.otf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/images/ingame_diplomacy-menu_bg_full.png */ "./src/assets/images/ingame_diplomacy-menu_bg_full.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./components/civ-tech-overlay/images/paper.png */ "./src/components/civ-tech-overlay/images/paper.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./components/civ-images/misc/veto.png */ "./src/components/civ-images/misc/veto.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: "Memb-Font";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}
html {
  font-family: Memb-Font;
  height: 100%;
  display: inline-flex;
  flex-direction: column;
  overflow: hidden;
}

.admin-body {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
  background-size: cover;
  background-repeat: no-repeat;
  align-items: center;
}
.client-body {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background-size: cover;
  background-repeat: no-repeat;
  align-items: center;
}

.body-content {
  width: 100%;
}

.my-header {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 20%;
  border-top: 0px;
  border-left: 0px;
  border-right: 0px;
  border-bottom: 1px;
  border-color: black;
  border-style: solid;
  padding-top: 2rem;
}
.my-footer {
  color: blanchedalmond;
  text-shadow: none;
  text-align: center;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
}
.my-footer a {
  background-color: beige;
}

.admin-page {
  display: flex;
  flex-direction: column;
}

.left-column {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.input-number {
  width: 3rem;
}

.tech-header {
  font-size: x-large;
  width: 100%;
  text-align: center;
  margin: 0.25rem;
}
.tech-settings {
  display: inline-flex;
  flex-direction: column;
}

.tech-civ-list {
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 0.5rem;
}

.setting-container {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.action-buttons {
  display: inline-flex;
  width: 100%;
  justify-content: space-evenly;
}
.action-settings {
  display: flex;
  gap: 0.5rem;
  justify-content: center;
}
.setting-button {
  border-radius: 1rem;
  color: white;
  padding: 1rem 16rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: xx-large;
  cursor: pointer;
}

.admin-civ-icon {
  border-radius: 1rem;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 1px 1px 5px 1px black;
}
.admin-civ-icon:hover {
  background-color: bisque;
}
.admin-civ-icon span {
  pointer-events: none;
}
.admin-civ-icon img {
  width: 5rem;
  height: 5rem;
  pointer-events: none;
}

.client-page {
  width: 100%;
  height: 100%;
  display: inline-flex;
  justify-content: space-between;
}

.civ-tech-overlay-container {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
  background-repeat: round;
  height: 100%;
  padding-top: 1.5rem;
  width: 25%;
}
.civ-tech-overlay-container .civ-name-container {
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  z-index: 2;
}
.civ-tech-overlay-container .civ-name {
  display: inline-flex;
  align-items: center;
  font-size: xx-large;
  margin-left: 1rem;
  margin-right: 1rem;
  text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;
}
.civ-tech-overlay-container .civ-icon {
  height: 5rem;
  border-radius: 1rem;
  filter: drop-shadow(0.75rem 0.75rem 0.5rem rgba(0, 0, 0, 0.5));
}
.civ-tech-overlay-container .civ-unique-unit-icon {
  height: 5rem;
  border-radius: 1rem;
  box-shadow: 0.75rem 0.75rem 0.5rem rgba(0, 0, 0, 0.5);
  border: silver solid 1px;
}
.civ-tech-overlay-container .civ-description {
  text-align: center;
  padding-top: 1rem;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  font-size: x-large;
  text-shadow: -1px 0 khaki, 0 1px khaki, 1px 0 khaki, 0 -1px khaki;
  z-index: 2;
}
.civ-tech-overlay-container .civ-emblem {
  opacity: 0.7;
  flex-grow: 1;
  position: absolute;
  z-index: 0;
  top: 45%;
}

.civ-upgrade-overlay-container {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  width: 100%;
  height: 100%;
  padding-bottom: 2.5rem;
  z-index: 2;
}
.civ-upgrade-overlay-container .civ-upgrade-container {
  display: inline-flex;
  flex-wrap: wrap;
  width: 95%;
  justify-content: space-evenly;
  padding-bottom: 0.75rem;
}
.civ-upgrade-overlay-container .civ-upgrade-container .upgrade-icon-container {
  display: inline-flex;
  position: relative;
  flex-direction: column;
}
.civ-upgrade-overlay-container .upgrade-icon-container .upgrade-tier-container {
  width: inherit;
  height: 25%;
  display: inline-flex;
  flex-direction: row;
  background-color: black;
  border-radius: 0.3rem;
  justify-content: space-evenly;
  margin-top: 0.1rem;
  box-shadow: 0.75rem 0.75rem 0.5rem rgba(0, 0, 0, 0.5);
  border: yellow solid 1px;
}
.civ-upgrade-overlay-container .upgrade-icon-container .upgrade-tier-container .enabled-1 {
  background-color: green;
  height: 0.75rem;
  width: 85%;
  border-radius: 0.2rem;
  margin-top: 0.2rem;
  margin-bottom: 0.2rem;
  border: yellow solid 1px;
}
.civ-upgrade-overlay-container .upgrade-icon-container .upgrade-tier-container .disabled-1 {
  background-color: red;
  height: 0.75rem;
  width: 85%;
  border-radius: 0.2rem;
  margin-top: 0.2rem;
  margin-bottom: 0.2rem;
  border: yellow solid 1px;
}
.civ-upgrade-overlay-container .upgrade-icon-container .upgrade-tier-container .enabled-3 {
  background-color: green;
  height: 0.75rem;
  width: 1.2rem;
  border-radius: 0.2rem;
  margin-top: 0.2rem;
  margin-bottom: 0.2rem;
  border: yellow solid 1px;
}
.civ-upgrade-overlay-container .upgrade-icon-container .upgrade-tier-container .disabled-3 {
  background-color: red;
  height: 0.75rem;
  width: 1.2rem;
  border-radius: 0.2rem;
  margin-top: 0.2rem;
  margin-bottom: 0.2rem;
  border: yellow solid 1px;
}
.civ-upgrade-overlay-container .upgrade-icon {
  border-radius: 1rem;
  box-shadow: 0.75rem 0.75rem 0.5rem rgba(0, 0, 0, 0.5);
  border: yellow solid 1px;
  height: 5rem;
}
.civ-upgrade-overlay-container .disable-icon-meso {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
  background-size: cover;
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 5rem;
}
.civ-upgrade-overlay-container .civ-eco-upgrade-container {
  display: inline-flex;
  flex-wrap: wrap;
  width: 95%;
  justify-content: space-evenly;
  padding: 0.75rem;
}
.civ-upgrade-overlay-container .civ-eco-upgrade-container .upgrade-icon-container {
  display: inline-flex;
  position: relative;
  flex-direction: column;
}

.button-blue {
  background-color: #008cba;
}
.button-red {
  background-color: red;
}

.switch {
  display: inline-block;
  position: relative;
  height: 2.1rem;
  width: 4rem;
}
.switch input {
  display: none;
}
.slider {
  background-color: #ccc;
  bottom: 0;
  cursor: pointer;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: 0.4s;
}
.slider:before {
  background-color: #fff;
  bottom: 4px;
  content: "";
  height: 26px;
  left: 4px;
  position: absolute;
  transition: 0.4s;
  width: 26px;
}
input:checked + .slider {
  background-color: #66bb6a;
}
input:checked + .slider:before {
  transform: translateX(26px);
}
.slider.round {
  border-radius: 1rem;
}
.slider.round:before {
  border-radius: 50%;
}

.mask-img-vertical {
  -webkit-mask-image: linear-gradient(to top, transparent 33.3%, hsla(0, 0%, 100%, 0) 33.4%, hsla(0, 0%, 100%, 0.9) 66.6%, hsla(0, 0%, 100%, 0.9) 100%);
  -webkit-mask-size: 100% 300%;
  -webkit-mask-position: 0 200%;
  -webkit-mask-repeat: no-repeat;

  mask-image: linear-gradient(to top, transparent 33.3%, hsla(0, 0%, 100%, 0) 33.4%, hsla(0, 0%, 100%, 0.9) 66.6%, hsla(0, 0%, 100%, 0.9) 100%);
  mask-size: 100% 300%;
  mask-position: 0 200%;
  mask-repeat: no-repeat;
}

.civ-tech-animation-enter-active {
  -webkit-mask-image: linear-gradient(to top, transparent 33.3%, hsla(0, 0%, 100%, 0) 33.4%, hsla(0, 0%, 100%, 0.9) 66.6%, hsla(0, 0%, 100%, 0.9) 100%);
  -webkit-mask-size: 100% 300%;
  -webkit-mask-position: 0 200%;
  -webkit-mask-repeat: no-repeat;

  mask-image: linear-gradient(to top, transparent 33.3%, hsla(0, 0%, 100%, 0) 33.4%, hsla(0, 0%, 100%, 0.9) 66.6%, hsla(0, 0%, 100%, 0.9) 100%);
  mask-size: 100% 300%;
  mask-position: 0 200%;
  mask-repeat: no-repeat;
  animation: mask-move-in 2s ease-in forwards;
}
.civ-tech-animation-leave-active {
  -webkit-mask-image: linear-gradient(to top, transparent 33.3%, hsla(0, 0%, 100%, 0) 33.4%, hsla(0, 0%, 100%, 0.9) 66.6%, hsla(0, 0%, 100%, 0.9) 100%);
  -webkit-mask-size: 100% 300%;
  -webkit-mask-position: 0 200%;
  -webkit-mask-repeat: no-repeat;

  mask-image: linear-gradient(to top, transparent 33.3%, hsla(0, 0%, 100%, 0) 33.4%, hsla(0, 0%, 100%, 0.9) 66.6%, hsla(0, 0%, 100%, 0.9) 100%);
  mask-size: 100% 300%;
  mask-position: 0 200%;
  mask-repeat: no-repeat;
  animation: mask-move-out 2s ease-out forwards;
}

@keyframes mask-move-in {
  from {
    -webkit-mask-position: 0 100%;
    mask-position: 0 100%;
  }
  to {
    -webkit-mask-position: 0 0%;
    mask-position: 0 0%;
  }
}

@keyframes mask-move-out {
  from {
    -webkit-mask-position: 0 0%;
    mask-position: 0 0%;
  }
  to {
    -webkit-mask-position: 0 100%;
    mask-position: 0 100%;
  }
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,wBAAwB;EACxB,4CAAiD;AACnD;AACA;EACE,sBAAsB;EACtB,YAAY;EACZ,oBAAoB;EACpB,sBAAsB;EACtB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,YAAY;EACZ,yDAA0E;EAC1E,sBAAsB;EACtB,4BAA4B;EAC5B,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,YAAY;EACZ,sBAAsB;EACtB,4BAA4B;EAC5B,mBAAmB;AACrB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,oBAAoB;EACpB,uBAAuB;EACvB,mBAAmB;EACnB,QAAQ;EACR,eAAe;EACf,gBAAgB;EAChB,iBAAiB;EACjB,kBAAkB;EAClB,mBAAmB;EACnB,mBAAmB;EACnB,iBAAiB;AACnB;AACA;EACE,qBAAqB;EACrB,iBAAiB;EACjB,kBAAkB;EAClB,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,cAAc;AAChB;AACA;EACE,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,WAAW;AACb;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,kBAAkB;EAClB,eAAe;AACjB;AACA;EACE,oBAAoB;EACpB,sBAAsB;AACxB;;AAEA;EACE,oBAAoB;EACpB,eAAe;EACf,6BAA6B;EAC7B,WAAW;AACb;;AAEA;EACE,oBAAoB;EACpB,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;AACzB;AACA;EACE,oBAAoB;EACpB,WAAW;EACX,6BAA6B;AAC/B;AACA;EACE,aAAa;EACb,WAAW;EACX,uBAAuB;AACzB;AACA;EACE,mBAAmB;EACnB,YAAY;EACZ,mBAAmB;EACnB,kBAAkB;EAClB,qBAAqB;EACrB,qBAAqB;EACrB,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,mBAAmB;EACnB,oBAAoB;EACpB,sBAAsB;EACtB,mBAAmB;EACnB,iCAAiC;AACnC;AACA;EACE,wBAAwB;AAC1B;AACA;EACE,oBAAoB;AACtB;AACA;EACE,WAAW;EACX,YAAY;EACZ,oBAAoB;AACtB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,oBAAoB;EACpB,8BAA8B;AAChC;;AAEA;EACE,oBAAoB;EACpB,sBAAsB;EACtB,mBAAmB;EACnB,8BAA8B;EAC9B,yDAAuE;EACvE,wBAAwB;EACxB,YAAY;EACZ,mBAAmB;EACnB,UAAU;AACZ;AACA;EACE,oBAAoB;EACpB,mBAAmB;EACnB,mBAAmB;EACnB,UAAU;AACZ;AACA;EACE,oBAAoB;EACpB,mBAAmB;EACnB,mBAAmB;EACnB,iBAAiB;EACjB,kBAAkB;EAClB,iEAAiE;AACnE;AACA;EACE,YAAY;EACZ,mBAAmB;EACnB,8DAA8D;AAChE;AACA;EACE,YAAY;EACZ,mBAAmB;EACnB,qDAAqD;EACrD,wBAAwB;AAC1B;AACA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,mBAAmB;EACnB,oBAAoB;EACpB,kBAAkB;EAClB,iEAAiE;EACjE,UAAU;AACZ;AACA;EACE,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,UAAU;EACV,QAAQ;AACV;;AAEA;EACE,oBAAoB;EACpB,sBAAsB;EACtB,mBAAmB;EACnB,oBAAoB;EACpB,WAAW;EACX,YAAY;EACZ,sBAAsB;EACtB,UAAU;AACZ;AACA;EACE,oBAAoB;EACpB,eAAe;EACf,UAAU;EACV,6BAA6B;EAC7B,uBAAuB;AACzB;AACA;EACE,oBAAoB;EACpB,kBAAkB;EAClB,sBAAsB;AACxB;AACA;EACE,cAAc;EACd,WAAW;EACX,oBAAoB;EACpB,mBAAmB;EACnB,uBAAuB;EACvB,qBAAqB;EACrB,6BAA6B;EAC7B,kBAAkB;EAClB,qDAAqD;EACrD,wBAAwB;AAC1B;AACA;EACE,uBAAuB;EACvB,eAAe;EACf,UAAU;EACV,qBAAqB;EACrB,kBAAkB;EAClB,qBAAqB;EACrB,wBAAwB;AAC1B;AACA;EACE,qBAAqB;EACrB,eAAe;EACf,UAAU;EACV,qBAAqB;EACrB,kBAAkB;EAClB,qBAAqB;EACrB,wBAAwB;AAC1B;AACA;EACE,uBAAuB;EACvB,eAAe;EACf,aAAa;EACb,qBAAqB;EACrB,kBAAkB;EAClB,qBAAqB;EACrB,wBAAwB;AAC1B;AACA;EACE,qBAAqB;EACrB,eAAe;EACf,aAAa;EACb,qBAAqB;EACrB,kBAAkB;EAClB,qBAAqB;EACrB,wBAAwB;AAC1B;AACA;EACE,mBAAmB;EACnB,qDAAqD;EACrD,wBAAwB;EACxB,YAAY;AACd;AACA;EACE,yDAA8D;EAC9D,sBAAsB;EACtB,kBAAkB;EAClB,UAAU;EACV,WAAW;EACX,YAAY;AACd;AACA;EACE,oBAAoB;EACpB,eAAe;EACf,UAAU;EACV,6BAA6B;EAC7B,gBAAgB;AAClB;AACA;EACE,oBAAoB;EACpB,kBAAkB;EAClB,sBAAsB;AACxB;;AAEA;EACE,yBAAyB;AAC3B;AACA;EACE,qBAAqB;AACvB;;AAEA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,cAAc;EACd,WAAW;AACb;AACA;EACE,aAAa;AACf;AACA;EACE,sBAAsB;EACtB,SAAS;EACT,eAAe;EACf,OAAO;EACP,kBAAkB;EAClB,QAAQ;EACR,MAAM;EACN,gBAAgB;AAClB;AACA;EACE,sBAAsB;EACtB,WAAW;EACX,WAAW;EACX,YAAY;EACZ,SAAS;EACT,kBAAkB;EAClB,gBAAgB;EAChB,WAAW;AACb;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,2BAA2B;AAC7B;AACA;EACE,mBAAmB;AACrB;AACA;EACE,kBAAkB;AACpB;;AAEA;EACE,qJAAqJ;EACrJ,4BAA4B;EAC5B,6BAA6B;EAC7B,8BAA8B;;EAE9B,6IAA6I;EAC7I,oBAAoB;EACpB,qBAAqB;EACrB,sBAAsB;AACxB;;AAEA;EACE,qJAAqJ;EACrJ,4BAA4B;EAC5B,6BAA6B;EAC7B,8BAA8B;;EAE9B,6IAA6I;EAC7I,oBAAoB;EACpB,qBAAqB;EACrB,sBAAsB;EACtB,2CAA2C;AAC7C;AACA;EACE,qJAAqJ;EACrJ,4BAA4B;EAC5B,6BAA6B;EAC7B,8BAA8B;;EAE9B,6IAA6I;EAC7I,oBAAoB;EACpB,qBAAqB;EACrB,sBAAsB;EACtB,6CAA6C;AAC/C;;AAEA;EACE;IACE,6BAA6B;IAC7B,qBAAqB;EACvB;EACA;IACE,2BAA2B;IAC3B,mBAAmB;EACrB;AACF;;AAEA;EACE;IACE,2BAA2B;IAC3B,mBAAmB;EACrB;EACA;IACE,6BAA6B;IAC7B,qBAAqB;EACvB;AACF","sourcesContent":["@font-face {\r\n  font-family: \"Memb-Font\";\r\n  src: url(\"./assets/fonts/IronstrikeSemiBold.otf\");\r\n}\r\nhtml {\r\n  font-family: Memb-Font;\r\n  height: 100%;\r\n  display: inline-flex;\r\n  flex-direction: column;\r\n  overflow: hidden;\r\n}\r\n\r\n.admin-body {\r\n  display: flex;\r\n  flex-direction: column;\r\n  flex-grow: 1;\r\n  background-image: url(\"./assets/images/ingame_diplomacy-menu_bg_full.png\");\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  align-items: center;\r\n}\r\n.client-body {\r\n  display: flex;\r\n  flex-direction: column;\r\n  flex-grow: 1;\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  align-items: center;\r\n}\r\n\r\n.body-content {\r\n  width: 100%;\r\n}\r\n\r\n.my-header {\r\n  display: inline-flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 20%;\r\n  border-top: 0px;\r\n  border-left: 0px;\r\n  border-right: 0px;\r\n  border-bottom: 1px;\r\n  border-color: black;\r\n  border-style: solid;\r\n  padding-top: 2rem;\r\n}\r\n.my-footer {\r\n  color: blanchedalmond;\r\n  text-shadow: none;\r\n  text-align: center;\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  flex-shrink: 0;\r\n}\r\n.my-footer a {\r\n  background-color: beige;\r\n}\r\n\r\n.admin-page {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.left-column {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 0.5rem;\r\n}\r\n\r\n.input-number {\r\n  width: 3rem;\r\n}\r\n\r\n.tech-header {\r\n  font-size: x-large;\r\n  width: 100%;\r\n  text-align: center;\r\n  margin: 0.25rem;\r\n}\r\n.tech-settings {\r\n  display: inline-flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.tech-civ-list {\r\n  display: inline-flex;\r\n  flex-wrap: wrap;\r\n  justify-content: space-evenly;\r\n  gap: 0.5rem;\r\n}\r\n\r\n.setting-container {\r\n  display: inline-flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n.action-buttons {\r\n  display: inline-flex;\r\n  width: 100%;\r\n  justify-content: space-evenly;\r\n}\r\n.action-settings {\r\n  display: flex;\r\n  gap: 0.5rem;\r\n  justify-content: center;\r\n}\r\n.setting-button {\r\n  border-radius: 1rem;\r\n  color: white;\r\n  padding: 1rem 16rem;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: xx-large;\r\n  cursor: pointer;\r\n}\r\n\r\n.admin-civ-icon {\r\n  border-radius: 1rem;\r\n  display: inline-flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  box-shadow: 1px 1px 5px 1px black;\r\n}\r\n.admin-civ-icon:hover {\r\n  background-color: bisque;\r\n}\r\n.admin-civ-icon span {\r\n  pointer-events: none;\r\n}\r\n.admin-civ-icon img {\r\n  width: 5rem;\r\n  height: 5rem;\r\n  pointer-events: none;\r\n}\r\n\r\n.client-page {\r\n  width: 100%;\r\n  height: 100%;\r\n  display: inline-flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.civ-tech-overlay-container {\r\n  display: inline-flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  background-image: url(\"./components/civ-tech-overlay/images/paper.png\");\r\n  background-repeat: round;\r\n  height: 100%;\r\n  padding-top: 1.5rem;\r\n  width: 25%;\r\n}\r\n.civ-tech-overlay-container .civ-name-container {\r\n  display: inline-flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  z-index: 2;\r\n}\r\n.civ-tech-overlay-container .civ-name {\r\n  display: inline-flex;\r\n  align-items: center;\r\n  font-size: xx-large;\r\n  margin-left: 1rem;\r\n  margin-right: 1rem;\r\n  text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;\r\n}\r\n.civ-tech-overlay-container .civ-icon {\r\n  height: 5rem;\r\n  border-radius: 1rem;\r\n  filter: drop-shadow(0.75rem 0.75rem 0.5rem rgba(0, 0, 0, 0.5));\r\n}\r\n.civ-tech-overlay-container .civ-unique-unit-icon {\r\n  height: 5rem;\r\n  border-radius: 1rem;\r\n  box-shadow: 0.75rem 0.75rem 0.5rem rgba(0, 0, 0, 0.5);\r\n  border: silver solid 1px;\r\n}\r\n.civ-tech-overlay-container .civ-description {\r\n  text-align: center;\r\n  padding-top: 1rem;\r\n  margin-left: 0.5rem;\r\n  margin-right: 0.5rem;\r\n  font-size: x-large;\r\n  text-shadow: -1px 0 khaki, 0 1px khaki, 1px 0 khaki, 0 -1px khaki;\r\n  z-index: 2;\r\n}\r\n.civ-tech-overlay-container .civ-emblem {\r\n  opacity: 0.7;\r\n  flex-grow: 1;\r\n  position: absolute;\r\n  z-index: 0;\r\n  top: 45%;\r\n}\r\n\r\n.civ-upgrade-overlay-container {\r\n  display: inline-flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: end;\r\n  width: 100%;\r\n  height: 100%;\r\n  padding-bottom: 2.5rem;\r\n  z-index: 2;\r\n}\r\n.civ-upgrade-overlay-container .civ-upgrade-container {\r\n  display: inline-flex;\r\n  flex-wrap: wrap;\r\n  width: 95%;\r\n  justify-content: space-evenly;\r\n  padding-bottom: 0.75rem;\r\n}\r\n.civ-upgrade-overlay-container .civ-upgrade-container .upgrade-icon-container {\r\n  display: inline-flex;\r\n  position: relative;\r\n  flex-direction: column;\r\n}\r\n.civ-upgrade-overlay-container .upgrade-icon-container .upgrade-tier-container {\r\n  width: inherit;\r\n  height: 25%;\r\n  display: inline-flex;\r\n  flex-direction: row;\r\n  background-color: black;\r\n  border-radius: 0.3rem;\r\n  justify-content: space-evenly;\r\n  margin-top: 0.1rem;\r\n  box-shadow: 0.75rem 0.75rem 0.5rem rgba(0, 0, 0, 0.5);\r\n  border: yellow solid 1px;\r\n}\r\n.civ-upgrade-overlay-container .upgrade-icon-container .upgrade-tier-container .enabled-1 {\r\n  background-color: green;\r\n  height: 0.75rem;\r\n  width: 85%;\r\n  border-radius: 0.2rem;\r\n  margin-top: 0.2rem;\r\n  margin-bottom: 0.2rem;\r\n  border: yellow solid 1px;\r\n}\r\n.civ-upgrade-overlay-container .upgrade-icon-container .upgrade-tier-container .disabled-1 {\r\n  background-color: red;\r\n  height: 0.75rem;\r\n  width: 85%;\r\n  border-radius: 0.2rem;\r\n  margin-top: 0.2rem;\r\n  margin-bottom: 0.2rem;\r\n  border: yellow solid 1px;\r\n}\r\n.civ-upgrade-overlay-container .upgrade-icon-container .upgrade-tier-container .enabled-3 {\r\n  background-color: green;\r\n  height: 0.75rem;\r\n  width: 1.2rem;\r\n  border-radius: 0.2rem;\r\n  margin-top: 0.2rem;\r\n  margin-bottom: 0.2rem;\r\n  border: yellow solid 1px;\r\n}\r\n.civ-upgrade-overlay-container .upgrade-icon-container .upgrade-tier-container .disabled-3 {\r\n  background-color: red;\r\n  height: 0.75rem;\r\n  width: 1.2rem;\r\n  border-radius: 0.2rem;\r\n  margin-top: 0.2rem;\r\n  margin-bottom: 0.2rem;\r\n  border: yellow solid 1px;\r\n}\r\n.civ-upgrade-overlay-container .upgrade-icon {\r\n  border-radius: 1rem;\r\n  box-shadow: 0.75rem 0.75rem 0.5rem rgba(0, 0, 0, 0.5);\r\n  border: yellow solid 1px;\r\n  height: 5rem;\r\n}\r\n.civ-upgrade-overlay-container .disable-icon-meso {\r\n  background-image: url(\"./components/civ-images/misc/veto.png\");\r\n  background-size: cover;\r\n  position: absolute;\r\n  z-index: 1;\r\n  width: 100%;\r\n  height: 5rem;\r\n}\r\n.civ-upgrade-overlay-container .civ-eco-upgrade-container {\r\n  display: inline-flex;\r\n  flex-wrap: wrap;\r\n  width: 95%;\r\n  justify-content: space-evenly;\r\n  padding: 0.75rem;\r\n}\r\n.civ-upgrade-overlay-container .civ-eco-upgrade-container .upgrade-icon-container {\r\n  display: inline-flex;\r\n  position: relative;\r\n  flex-direction: column;\r\n}\r\n\r\n.button-blue {\r\n  background-color: #008cba;\r\n}\r\n.button-red {\r\n  background-color: red;\r\n}\r\n\r\n.switch {\r\n  display: inline-block;\r\n  position: relative;\r\n  height: 2.1rem;\r\n  width: 4rem;\r\n}\r\n.switch input {\r\n  display: none;\r\n}\r\n.slider {\r\n  background-color: #ccc;\r\n  bottom: 0;\r\n  cursor: pointer;\r\n  left: 0;\r\n  position: absolute;\r\n  right: 0;\r\n  top: 0;\r\n  transition: 0.4s;\r\n}\r\n.slider:before {\r\n  background-color: #fff;\r\n  bottom: 4px;\r\n  content: \"\";\r\n  height: 26px;\r\n  left: 4px;\r\n  position: absolute;\r\n  transition: 0.4s;\r\n  width: 26px;\r\n}\r\ninput:checked + .slider {\r\n  background-color: #66bb6a;\r\n}\r\ninput:checked + .slider:before {\r\n  transform: translateX(26px);\r\n}\r\n.slider.round {\r\n  border-radius: 1rem;\r\n}\r\n.slider.round:before {\r\n  border-radius: 50%;\r\n}\r\n\r\n.mask-img-vertical {\r\n  -webkit-mask-image: linear-gradient(to top, transparent 33.3%, hsla(0, 0%, 100%, 0) 33.4%, hsla(0, 0%, 100%, 0.9) 66.6%, hsla(0, 0%, 100%, 0.9) 100%);\r\n  -webkit-mask-size: 100% 300%;\r\n  -webkit-mask-position: 0 200%;\r\n  -webkit-mask-repeat: no-repeat;\r\n\r\n  mask-image: linear-gradient(to top, transparent 33.3%, hsla(0, 0%, 100%, 0) 33.4%, hsla(0, 0%, 100%, 0.9) 66.6%, hsla(0, 0%, 100%, 0.9) 100%);\r\n  mask-size: 100% 300%;\r\n  mask-position: 0 200%;\r\n  mask-repeat: no-repeat;\r\n}\r\n\r\n.civ-tech-animation-enter-active {\r\n  -webkit-mask-image: linear-gradient(to top, transparent 33.3%, hsla(0, 0%, 100%, 0) 33.4%, hsla(0, 0%, 100%, 0.9) 66.6%, hsla(0, 0%, 100%, 0.9) 100%);\r\n  -webkit-mask-size: 100% 300%;\r\n  -webkit-mask-position: 0 200%;\r\n  -webkit-mask-repeat: no-repeat;\r\n\r\n  mask-image: linear-gradient(to top, transparent 33.3%, hsla(0, 0%, 100%, 0) 33.4%, hsla(0, 0%, 100%, 0.9) 66.6%, hsla(0, 0%, 100%, 0.9) 100%);\r\n  mask-size: 100% 300%;\r\n  mask-position: 0 200%;\r\n  mask-repeat: no-repeat;\r\n  animation: mask-move-in 2s ease-in forwards;\r\n}\r\n.civ-tech-animation-leave-active {\r\n  -webkit-mask-image: linear-gradient(to top, transparent 33.3%, hsla(0, 0%, 100%, 0) 33.4%, hsla(0, 0%, 100%, 0.9) 66.6%, hsla(0, 0%, 100%, 0.9) 100%);\r\n  -webkit-mask-size: 100% 300%;\r\n  -webkit-mask-position: 0 200%;\r\n  -webkit-mask-repeat: no-repeat;\r\n\r\n  mask-image: linear-gradient(to top, transparent 33.3%, hsla(0, 0%, 100%, 0) 33.4%, hsla(0, 0%, 100%, 0.9) 66.6%, hsla(0, 0%, 100%, 0.9) 100%);\r\n  mask-size: 100% 300%;\r\n  mask-position: 0 200%;\r\n  mask-repeat: no-repeat;\r\n  animation: mask-move-out 2s ease-out forwards;\r\n}\r\n\r\n@keyframes mask-move-in {\r\n  from {\r\n    -webkit-mask-position: 0 100%;\r\n    mask-position: 0 100%;\r\n  }\r\n  to {\r\n    -webkit-mask-position: 0 0%;\r\n    mask-position: 0 0%;\r\n  }\r\n}\r\n\r\n@keyframes mask-move-out {\r\n  from {\r\n    -webkit-mask-position: 0 0%;\r\n    mask-position: 0 0%;\r\n  }\r\n  to {\r\n    -webkit-mask-position: 0 100%;\r\n    mask-position: 0 100%;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/client-websocket.js":
/*!*********************************!*\
  !*** ./src/client-websocket.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MyWebSocketClient: () => (/* binding */ MyWebSocketClient)
/* harmony export */ });
/* harmony import */ var _common_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common-data */ "./src/common-data.js");


class MyWebSocketClient {
  _clientId;
  _clientSocket;
  _pingInterval;
  constructor() {}

  formatDataForWebsocket(dataType, rawData) {
    console.log(`Formatting Data for websocket.\nDataType: ${dataType} / ClientId: ${this._clientId} / RawData:`, JSON.stringify(rawData));
    return JSON.stringify({ type: dataType, data: rawData, toClientId: this._clientId });
  }
  sendMessage(dataType, rawData) {
    this._clientSocket.send(this.formatDataForWebsocket(dataType, rawData));
  }
  startClient(clientId, isLocal) {
    this._clientId = clientId;

    const url = "wss://itsatreee.com:8443/echo";
    this._clientSocket = new WebSocket(url);
    this._clientSocket.onopen = this.onOpen.bind(this);
    this._clientSocket.onmessage = this.onMessage.bind(this);
    this._clientSocket.onclose = this.onClose.bind(this);
    this._clientSocket.onerror = this.onError.bind(this);
  }
  onOpen() {
    console.log("[open] Connection established");
    this.sendMessage(_common_data__WEBPACK_IMPORTED_MODULE_0__.SocketEnums.ClientRegister, this._clientId);
    this._pingInterval = setInterval(() => {
      this.sendMessage(_common_data__WEBPACK_IMPORTED_MODULE_0__.SocketEnums.PING, this._clientId);
    }, 45 * 1000); // ping the server on startup every 45 seconds to keep the connection alive
  }
  onMessage(event) {
    // console.log(`DataType: ${event.type} / RawData: ${JSON.stringify(event.data)}`);
    var newEvent = new CustomEvent("aoe-websocket-event", { detail: event });
    document.dispatchEvent(newEvent);
  }
  onClose(event) {
    if (event.wasClean) {
      console.log(`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`);
    } else {
      // e.g. server process killed or network down
      // event.code is usually 1006 in this case
      console.log("[close] Connection died");
    }
    this.sendMessage(_common_data__WEBPACK_IMPORTED_MODULE_0__.SocketEnums.ClientUnRegister, this._clientId);
    clearInterval(this._pingInterval);
  }
  onError(event) {
    console.log(`[error] ${event.message}`);
  }
}




/***/ }),

/***/ "./src/common-data.js":
/*!****************************!*\
  !*** ./src/common-data.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SocketEnums: () => (/* binding */ SocketEnums)
/* harmony export */ });
const SocketEnums = {
  ClientRegister: "ClientRegister",
  ClientUnRegister: "ClientUnRegister",
  PING: "PING",
  TEST: "TEST",
  AGEOVERLAYPUSH: "AGEOVERLAYPUSH",
};




/***/ }),

/***/ "./src/components/civ-icons/civ-icon-list.js":
/*!***************************************************!*\
  !*** ./src/components/civ-icons/civ-icon-list.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CivIconList: () => (/* binding */ CivIconList)
/* harmony export */ });
/* harmony import */ var _civ_images_image_helper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../civ-images/image-helper.js */ "./src/components/civ-images/image-helper.js");
/* harmony import */ var _civ_icon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./civ-icon.js */ "./src/components/civ-icons/civ-icon.js");



class CivIconList {
  _civIconClickCounter = 0;

  buildElement(includeLabel) {
    const element = document.createElement("div");
    const iconBuilder = new _civ_icon_js__WEBPACK_IMPORTED_MODULE_1__.CivIconBuilder();

    _civ_images_image_helper_js__WEBPACK_IMPORTED_MODULE_0__.civIconsMap.forEach((civIconUrl, civName) => {
      const iconDiv = document.createElement("div");
      iconDiv.classList.add("admin-civ-icon");

      const iconElement = iconBuilder.buildElement(civIconUrl);
      if (includeLabel) {
        const iconLabel = document.createElement("span");
        iconLabel.innerHTML = this.sanitizeDisplayValue(civName);
        iconDiv.appendChild(iconLabel);
      }
      iconDiv.appendChild(iconElement);

      iconDiv.addEventListener("click", (event) => {
        event.stopImmediatePropagation();
        event.stopPropagation();
        this.handleCivIconClick(event);
        return false;
      });

      element.appendChild(iconDiv);
    });

    return element;
  }
  handleCivIconClick(event) {
    // console.log(`clicked ${this._civIconClickCounter}`, event.target.innerText);
    const currentPlayerClass = `player-${this._civIconClickCounter}`;

    let numberOfPlayersOnCiv = 0;
    let playerCssString = "";
    event.target.classList.forEach((cssClass) => {
      if (cssClass.indexOf("player-") > -1) {
        playerCssString = playerCssString.concat(`${cssClass}:`);
        numberOfPlayersOnCiv++;
      }
    });

    document.querySelectorAll(`.${currentPlayerClass}`).forEach((e) => {
      e.classList.remove(currentPlayerClass);
      let localPlayerCssString = "";
      e.classList.forEach((cssClass) => {
        if (cssClass.indexOf("player-") > -1) {
          localPlayerCssString = localPlayerCssString.concat(`${cssClass}:`);
        }
      });

      if (localPlayerCssString !== "") {
        e.style.backgroundImage = `conic-gradient(${this.mapAllPlayerNumbersToColorString(localPlayerCssString, -1)})`;
      } else {
        e.style.backgroundImage = "";
      }
    });
    event.target.classList.add(`player-${this._civIconClickCounter}`);

    if (numberOfPlayersOnCiv > 0) {
      event.target.style.backgroundImage = `conic-gradient(${this.mapAllPlayerNumbersToColorString(playerCssString, this._civIconClickCounter)})`;
    } else {
      event.target.style.backgroundImage = `linear-gradient(rgba(0,0,0,0), ${this.mapPlayerNumberToColor(this._civIconClickCounter)})`;
    }
    let numPlayers = 2;

    if (document.getElementById("_numPlayersInMatch")) {
      numPlayers = document.getElementById("_numPlayersInMatch").value;
    }
    this._civIconClickCounter = (this._civIconClickCounter + 1) % numPlayers;
  }
  mapAllPlayerNumbersToColorString(otherPlayers, playerNumber) {
    let mappedColors = "";
    otherPlayers.split(":").forEach((player) => {
      if (player !== "") mappedColors = mappedColors.concat(this.mapPlayerNumberToColor(player.split("-")[1])).concat(",");
    });
    if (playerNumber !== -1) mappedColors = mappedColors.concat(this.mapPlayerNumberToColor(playerNumber));
    if (mappedColors.substring(mappedColors.length - 1) === ",") {
      mappedColors = mappedColors.slice(0, mappedColors.length - 1);
    }
    return mappedColors;
  }
  mapPlayerNumberToColor(playerNumber) {
    if (typeof playerNumber === "string" || playerNumber instanceof String) {
      playerNumber = parseInt(playerNumber);
    }

    switch (playerNumber) {
      case 0: {
        return "blue";
      }
      case 1: {
        return "red";
      }
      case 2: {
        return "green";
      }
      case 3: {
        return "yellow";
      }
      case 4: {
        return "cyan";
      }
      case 5: {
        return "purple";
      }
      case 6: {
        return "grey";
      }
      case 7: {
        return "orange";
      }
    }
    return "";
  }
  resetState() {
    this._civIconClickCounter = 0;
    document.querySelectorAll(".admin-civ-icon").forEach((e) => {
      e.className = "";
      e.classList.add("admin-civ-icon");
      e.style.backgroundImage = "";
    });
  }
  getListOfCivsClicked() {
    let numPlayers = 2;
    if (document.getElementById("_numPlayersInMatch")) {
      numPlayers = document.getElementById("_numPlayersInMatch").value;
    }
    const clickedCivs = [];
    for (let i = 0; i < numPlayers; i++) {
      const playerElement = document.getElementsByClassName(`player-${i}`);
      if (playerElement.length > 0) {
        clickedCivs.push(playerElement[0].getElementsByTagName("span")[0].innerText);
      }
    }
    return clickedCivs;
  }
  sanitizeDisplayValue(value) {
    // console.log(value);
    value = `${value[0].toUpperCase()}${value.substring(1, value.length)}`;
    return value;
  }
}



/***/ }),

/***/ "./src/components/civ-icons/civ-icon.js":
/*!**********************************************!*\
  !*** ./src/components/civ-icons/civ-icon.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CivIconBuilder: () => (/* binding */ CivIconBuilder)
/* harmony export */ });
class CivIconBuilder {
  buildElement(imgPath) {
    const civIcon = new Image();
    civIcon.src = imgPath;

    return civIcon;
  }
}




/***/ }),

/***/ "./src/components/civ-images/civ-data/data-helper.js":
/*!***********************************************************!*\
  !*** ./src/components/civ-images/civ-data/data-helper.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   filterLowestUpgradesFromCategories: () => (/* binding */ filterLowestUpgradesFromCategories),
/* harmony export */   getAgeTierLevel: () => (/* binding */ getAgeTierLevel),
/* harmony export */   getCivNames: () => (/* binding */ getCivNames),
/* harmony export */   getCivTechnologyDescription: () => (/* binding */ getCivTechnologyDescription),
/* harmony export */   getCivTechnologyUpgrades: () => (/* binding */ getCivTechnologyUpgrades)
/* harmony export */ });
/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.json */ "./src/components/civ-images/civ-data/data.json");
/* harmony import */ var _strings_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./strings.json */ "./src/components/civ-images/civ-data/strings.json");



const techRelationshipMapping = {
  blacksmith: [
    {
      isChainUpgrade: true,
      data: ["Forging", "Iron Casting", "Blast Furnace"],
    },
    {
      isChainUpgrade: true,
      data: ["Scale Mail Armor", "Chain Mail Armor", "Plate Mail Armor"],
    },
    {
      isChainUpgrade: true,
      data: ["Scale Barding Armor", "Chain Barding Armor", "Plate Barding Armor"],
    },
    {
      isChainUpgrade: true,
      data: ["Fletching", "Bodkin Arrow", "Bracer"],
    },
    {
      isChainUpgrade: true,
      data: ["Padded Archer Armor", "Leather Archer Armor", "Ring Archer Armor"],
    },
  ],
  "lumber camp": [{ isChainUpgrade: true, data: ["Double-Bit Axe", "Bow Saw", "Two-Man Saw"] }],
  mill: [{ isChainUpgrade: true, data: ["Horse Collar", "Heavy Plow", "Crop Rotation"] }],
  // towncenter: ["Wheelbarrow", "Hand Cart"],
  university: [{ isChainUpgrade: false, data: ["Ballistics", "Siege Engineers"] }],
  stable: [{ isChainUpgrade: false, data: ["Bloodlines", "Husbandry"] }],
  "archery range": [{ isChainUpgrade: false, data: ["Thumb Ring"] }],
  monastery: [{ isChainUpgrade: false, data: ["Redemption", "Atonement", "Herbal Medicine", "Heresy", "Sanctity", "Fervor", "Faith", "Illumination", "Block Printing", "Theocracy"] }],
};

function formatRawCivNameToKey(civName) {
  if (civName === undefined) return "";
  civName = `${civName.substring(0, 1).toUpperCase()}${civName.slice(1)}`;
  return civName;
}
function getCivNames() {
  return Object.keys(_data_json__WEBPACK_IMPORTED_MODULE_0__.civ_names);
}
function getCivTechnologyDescription(civName) {
  civName = formatRawCivNameToKey(civName);

  const helpTextKey = _data_json__WEBPACK_IMPORTED_MODULE_0__.civ_helptexts[civName];
  const civDescription = _strings_json__WEBPACK_IMPORTED_MODULE_1__[helpTextKey];

  return civDescription;
}
function getCivTechnologyUpgrades(civName) {
  civName = formatRawCivNameToKey(civName);

  const civTechsAll = _data_json__WEBPACK_IMPORTED_MODULE_0__.techtrees[civName];
  const upgradeNames = [];
  civTechsAll.techs.forEach((techId) => {
    const upgrade = _data_json__WEBPACK_IMPORTED_MODULE_0__.data.techs[techId];
    // civStringData[upgrade.LanguageHelpId]; // for description
    const payload = {
      id: techId,
      rawName: _strings_json__WEBPACK_IMPORTED_MODULE_1__[upgrade.LanguageNameId],
    };
    upgradeNames.push(payload);
  });
  return upgradeNames;
}
function getAgeTierLevel(upgradeName) {
  let foundIndex = -1;
  for (let key in techRelationshipMapping) {
    if (foundIndex > -1) break; // short circuit found results
    if (!techRelationshipMapping.hasOwnProperty(key)) {
      // ignored keys
      continue;
    }
    // look at everything and return the index of array (loose representation of age level)
    techRelationshipMapping[key].forEach((upgrade) => {
      if (foundIndex > -1) return; // short circuit found results
      if (upgrade.isChainUpgrade) {
        foundIndex = upgrade.data.indexOf(upgradeName);
      } else {
        foundIndex = -1;
      }
    });
  }
  return foundIndex;
}
function filterLowestUpgradesFromCategories(upgradeCategories, upgradeList) {
  const modifiedUpgradeList = [];
  upgradeCategories.forEach((upgradeCategory) => {
    const upgradeArrayMap = techRelationshipMapping[upgradeCategory];
    upgradeArrayMap.forEach((upgradeArray) => {
      if (upgradeArray.isChainUpgrade) {
        // this upgrade array is in the age chain, determine what is the highest tech available
        let foundHigherTier = false;
        for (let i = upgradeArray.data.length - 1; i > -1; i--) {
          // find the highest indexed value in upgradeList
          const upgrade = upgradeList.find((upgrade) => {
            return upgrade.rawName === upgradeArray.data[i];
          });
          if (upgrade !== undefined && !foundHigherTier) {
            foundHigherTier = true;
            modifiedUpgradeList.push(upgrade);
          }
          // this is for civs that dont have the upgrade
          if (i === 0 && !foundHigherTier) {
            modifiedUpgradeList.push({ rawName: upgradeArray.data[i], id: -1 });
          }
        }
      } else {
        upgradeArray.data.forEach((upgradeArr) => {
          const foundTech = upgradeList.find((upgrade) => {
            return upgrade.rawName === upgradeArr;
          });
          if (foundTech) {
            modifiedUpgradeList.push({ rawName: upgradeArr, id: 0 });
          } else {
            modifiedUpgradeList.push({ rawName: upgradeArr, id: -1 });
          }
        });
      }
    });
  });
  return modifiedUpgradeList;
}



/***/ }),

/***/ "./src/components/civ-images/civ-emblems sync recursive \\.(png)$":
/*!**************************************************************!*\
  !*** ./src/components/civ-images/civ-emblems/ sync \.(png)$ ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./aztecs.png": "./src/components/civ-images/civ-emblems/aztecs.png",
	"./bengalis.png": "./src/components/civ-images/civ-emblems/bengalis.png",
	"./berbers.png": "./src/components/civ-images/civ-emblems/berbers.png",
	"./bohemians.png": "./src/components/civ-images/civ-emblems/bohemians.png",
	"./britons.png": "./src/components/civ-images/civ-emblems/britons.png",
	"./bulgarians.png": "./src/components/civ-images/civ-emblems/bulgarians.png",
	"./burgundians.png": "./src/components/civ-images/civ-emblems/burgundians.png",
	"./burmese.png": "./src/components/civ-images/civ-emblems/burmese.png",
	"./byzantines.png": "./src/components/civ-images/civ-emblems/byzantines.png",
	"./celts.png": "./src/components/civ-images/civ-emblems/celts.png",
	"./chinese.png": "./src/components/civ-images/civ-emblems/chinese.png",
	"./cumans.png": "./src/components/civ-images/civ-emblems/cumans.png",
	"./dravidians.png": "./src/components/civ-images/civ-emblems/dravidians.png",
	"./ethiopians.png": "./src/components/civ-images/civ-emblems/ethiopians.png",
	"./franks.png": "./src/components/civ-images/civ-emblems/franks.png",
	"./goths.png": "./src/components/civ-images/civ-emblems/goths.png",
	"./gurjaras.png": "./src/components/civ-images/civ-emblems/gurjaras.png",
	"./hindustanis.png": "./src/components/civ-images/civ-emblems/hindustanis.png",
	"./huns.png": "./src/components/civ-images/civ-emblems/huns.png",
	"./incas.png": "./src/components/civ-images/civ-emblems/incas.png",
	"./italians.png": "./src/components/civ-images/civ-emblems/italians.png",
	"./japanese.png": "./src/components/civ-images/civ-emblems/japanese.png",
	"./khmer.png": "./src/components/civ-images/civ-emblems/khmer.png",
	"./koreans.png": "./src/components/civ-images/civ-emblems/koreans.png",
	"./lithuanians.png": "./src/components/civ-images/civ-emblems/lithuanians.png",
	"./magyars.png": "./src/components/civ-images/civ-emblems/magyars.png",
	"./malay.png": "./src/components/civ-images/civ-emblems/malay.png",
	"./malians.png": "./src/components/civ-images/civ-emblems/malians.png",
	"./mayans.png": "./src/components/civ-images/civ-emblems/mayans.png",
	"./mongols.png": "./src/components/civ-images/civ-emblems/mongols.png",
	"./persians.png": "./src/components/civ-images/civ-emblems/persians.png",
	"./poles.png": "./src/components/civ-images/civ-emblems/poles.png",
	"./portuguese.png": "./src/components/civ-images/civ-emblems/portuguese.png",
	"./romans.png": "./src/components/civ-images/civ-emblems/romans.png",
	"./saracens.png": "./src/components/civ-images/civ-emblems/saracens.png",
	"./sicilians.png": "./src/components/civ-images/civ-emblems/sicilians.png",
	"./slavs.png": "./src/components/civ-images/civ-emblems/slavs.png",
	"./spanish.png": "./src/components/civ-images/civ-emblems/spanish.png",
	"./tatars.png": "./src/components/civ-images/civ-emblems/tatars.png",
	"./teutons.png": "./src/components/civ-images/civ-emblems/teutons.png",
	"./turks.png": "./src/components/civ-images/civ-emblems/turks.png",
	"./vietnamese.png": "./src/components/civ-images/civ-emblems/vietnamese.png",
	"./vikings.png": "./src/components/civ-images/civ-emblems/vikings.png"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/components/civ-images/civ-emblems sync recursive \\.(png)$";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units sync recursive \\.(png)$":
/*!*******************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/ sync \.(png)$ ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./aztecs.png": "./src/components/civ-images/civ-unique-units/aztecs.png",
	"./aztecs.tp.png": "./src/components/civ-images/civ-unique-units/aztecs.tp.png",
	"./bengalis.png": "./src/components/civ-images/civ-unique-units/bengalis.png",
	"./bengalis.tp.png": "./src/components/civ-images/civ-unique-units/bengalis.tp.png",
	"./berbers.png": "./src/components/civ-images/civ-unique-units/berbers.png",
	"./berbers.tp.png": "./src/components/civ-images/civ-unique-units/berbers.tp.png",
	"./bohemians.png": "./src/components/civ-images/civ-unique-units/bohemians.png",
	"./bohemians.tp.png": "./src/components/civ-images/civ-unique-units/bohemians.tp.png",
	"./britons.png": "./src/components/civ-images/civ-unique-units/britons.png",
	"./britons.tp.png": "./src/components/civ-images/civ-unique-units/britons.tp.png",
	"./bulgarians.png": "./src/components/civ-images/civ-unique-units/bulgarians.png",
	"./bulgarians.tp.png": "./src/components/civ-images/civ-unique-units/bulgarians.tp.png",
	"./burgundians.png": "./src/components/civ-images/civ-unique-units/burgundians.png",
	"./burgundians.tp.png": "./src/components/civ-images/civ-unique-units/burgundians.tp.png",
	"./burmese.png": "./src/components/civ-images/civ-unique-units/burmese.png",
	"./burmese.tp.png": "./src/components/civ-images/civ-unique-units/burmese.tp.png",
	"./byzantines.png": "./src/components/civ-images/civ-unique-units/byzantines.png",
	"./byzantines.tp.png": "./src/components/civ-images/civ-unique-units/byzantines.tp.png",
	"./celts.png": "./src/components/civ-images/civ-unique-units/celts.png",
	"./celts.tp.png": "./src/components/civ-images/civ-unique-units/celts.tp.png",
	"./chinese.png": "./src/components/civ-images/civ-unique-units/chinese.png",
	"./chinese.tp.png": "./src/components/civ-images/civ-unique-units/chinese.tp.png",
	"./cumans.png": "./src/components/civ-images/civ-unique-units/cumans.png",
	"./cumans.tp.png": "./src/components/civ-images/civ-unique-units/cumans.tp.png",
	"./dravidians.png": "./src/components/civ-images/civ-unique-units/dravidians.png",
	"./dravidians.tp.png": "./src/components/civ-images/civ-unique-units/dravidians.tp.png",
	"./ethiopians.png": "./src/components/civ-images/civ-unique-units/ethiopians.png",
	"./ethiopians.tp.png": "./src/components/civ-images/civ-unique-units/ethiopians.tp.png",
	"./franks.png": "./src/components/civ-images/civ-unique-units/franks.png",
	"./franks.tp.png": "./src/components/civ-images/civ-unique-units/franks.tp.png",
	"./goths.png": "./src/components/civ-images/civ-unique-units/goths.png",
	"./goths.tp.png": "./src/components/civ-images/civ-unique-units/goths.tp.png",
	"./gurjaras.png": "./src/components/civ-images/civ-unique-units/gurjaras.png",
	"./gurjaras.tp.png": "./src/components/civ-images/civ-unique-units/gurjaras.tp.png",
	"./hindustanis.png": "./src/components/civ-images/civ-unique-units/hindustanis.png",
	"./hindustanis.tp.png": "./src/components/civ-images/civ-unique-units/hindustanis.tp.png",
	"./huns.png": "./src/components/civ-images/civ-unique-units/huns.png",
	"./huns.tp.png": "./src/components/civ-images/civ-unique-units/huns.tp.png",
	"./incas.png": "./src/components/civ-images/civ-unique-units/incas.png",
	"./incas.tp.png": "./src/components/civ-images/civ-unique-units/incas.tp.png",
	"./indians.png": "./src/components/civ-images/civ-unique-units/indians.png",
	"./indians.tp.png": "./src/components/civ-images/civ-unique-units/indians.tp.png",
	"./italians.png": "./src/components/civ-images/civ-unique-units/italians.png",
	"./italians.tp.png": "./src/components/civ-images/civ-unique-units/italians.tp.png",
	"./japanese.png": "./src/components/civ-images/civ-unique-units/japanese.png",
	"./japanese.tp.png": "./src/components/civ-images/civ-unique-units/japanese.tp.png",
	"./khmer.png": "./src/components/civ-images/civ-unique-units/khmer.png",
	"./khmer.tp.png": "./src/components/civ-images/civ-unique-units/khmer.tp.png",
	"./koreans.png": "./src/components/civ-images/civ-unique-units/koreans.png",
	"./koreans.tp.png": "./src/components/civ-images/civ-unique-units/koreans.tp.png",
	"./lithuanians.png": "./src/components/civ-images/civ-unique-units/lithuanians.png",
	"./lithuanians.tp.png": "./src/components/civ-images/civ-unique-units/lithuanians.tp.png",
	"./magyars.png": "./src/components/civ-images/civ-unique-units/magyars.png",
	"./magyars.tp.png": "./src/components/civ-images/civ-unique-units/magyars.tp.png",
	"./malay.png": "./src/components/civ-images/civ-unique-units/malay.png",
	"./malay.tp.png": "./src/components/civ-images/civ-unique-units/malay.tp.png",
	"./malians.png": "./src/components/civ-images/civ-unique-units/malians.png",
	"./malians.tp.png": "./src/components/civ-images/civ-unique-units/malians.tp.png",
	"./mayans.png": "./src/components/civ-images/civ-unique-units/mayans.png",
	"./mayans.tp.png": "./src/components/civ-images/civ-unique-units/mayans.tp.png",
	"./mongols.png": "./src/components/civ-images/civ-unique-units/mongols.png",
	"./mongols.tp.png": "./src/components/civ-images/civ-unique-units/mongols.tp.png",
	"./persians.png": "./src/components/civ-images/civ-unique-units/persians.png",
	"./persians.tp.png": "./src/components/civ-images/civ-unique-units/persians.tp.png",
	"./poles.png": "./src/components/civ-images/civ-unique-units/poles.png",
	"./poles.tp.png": "./src/components/civ-images/civ-unique-units/poles.tp.png",
	"./portuguese.png": "./src/components/civ-images/civ-unique-units/portuguese.png",
	"./portuguese.tp.png": "./src/components/civ-images/civ-unique-units/portuguese.tp.png",
	"./romans.png": "./src/components/civ-images/civ-unique-units/romans.png",
	"./romans.tp.png": "./src/components/civ-images/civ-unique-units/romans.tp.png",
	"./saracens.png": "./src/components/civ-images/civ-unique-units/saracens.png",
	"./saracens.tp.png": "./src/components/civ-images/civ-unique-units/saracens.tp.png",
	"./sicilians.png": "./src/components/civ-images/civ-unique-units/sicilians.png",
	"./sicilians.tp.png": "./src/components/civ-images/civ-unique-units/sicilians.tp.png",
	"./slavs.png": "./src/components/civ-images/civ-unique-units/slavs.png",
	"./slavs.tp.png": "./src/components/civ-images/civ-unique-units/slavs.tp.png",
	"./spanish.png": "./src/components/civ-images/civ-unique-units/spanish.png",
	"./spanish.tp.png": "./src/components/civ-images/civ-unique-units/spanish.tp.png",
	"./tatars.png": "./src/components/civ-images/civ-unique-units/tatars.png",
	"./tatars.tp.png": "./src/components/civ-images/civ-unique-units/tatars.tp.png",
	"./teutons.png": "./src/components/civ-images/civ-unique-units/teutons.png",
	"./teutons.tp.png": "./src/components/civ-images/civ-unique-units/teutons.tp.png",
	"./turks.png": "./src/components/civ-images/civ-unique-units/turks.png",
	"./turks.tp.png": "./src/components/civ-images/civ-unique-units/turks.tp.png",
	"./vietnamese.png": "./src/components/civ-images/civ-unique-units/vietnamese.png",
	"./vietnamese.tp.png": "./src/components/civ-images/civ-unique-units/vietnamese.tp.png",
	"./vikings.png": "./src/components/civ-images/civ-unique-units/vikings.png",
	"./vikings.tp.png": "./src/components/civ-images/civ-unique-units/vikings.tp.png"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/components/civ-images/civ-unique-units sync recursive \\.(png)$";

/***/ }),

/***/ "./src/components/civ-images/icons sync recursive \\.(png)$":
/*!********************************************************!*\
  !*** ./src/components/civ-images/icons/ sync \.(png)$ ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./aztecs.png": "./src/components/civ-images/icons/aztecs.png",
	"./bengalis.png": "./src/components/civ-images/icons/bengalis.png",
	"./berbers.png": "./src/components/civ-images/icons/berbers.png",
	"./bohemians.png": "./src/components/civ-images/icons/bohemians.png",
	"./britons.png": "./src/components/civ-images/icons/britons.png",
	"./bulgarians.png": "./src/components/civ-images/icons/bulgarians.png",
	"./burgundians.png": "./src/components/civ-images/icons/burgundians.png",
	"./burmese.png": "./src/components/civ-images/icons/burmese.png",
	"./byzantines.png": "./src/components/civ-images/icons/byzantines.png",
	"./celts.png": "./src/components/civ-images/icons/celts.png",
	"./chinese.png": "./src/components/civ-images/icons/chinese.png",
	"./cumans.png": "./src/components/civ-images/icons/cumans.png",
	"./dravidians.png": "./src/components/civ-images/icons/dravidians.png",
	"./ethiopians.png": "./src/components/civ-images/icons/ethiopians.png",
	"./franks.png": "./src/components/civ-images/icons/franks.png",
	"./goths.png": "./src/components/civ-images/icons/goths.png",
	"./gurjaras.png": "./src/components/civ-images/icons/gurjaras.png",
	"./hindustanis.png": "./src/components/civ-images/icons/hindustanis.png",
	"./huns.png": "./src/components/civ-images/icons/huns.png",
	"./incas.png": "./src/components/civ-images/icons/incas.png",
	"./italians.png": "./src/components/civ-images/icons/italians.png",
	"./japanese.png": "./src/components/civ-images/icons/japanese.png",
	"./khmer.png": "./src/components/civ-images/icons/khmer.png",
	"./koreans.png": "./src/components/civ-images/icons/koreans.png",
	"./lithuanians.png": "./src/components/civ-images/icons/lithuanians.png",
	"./magyars.png": "./src/components/civ-images/icons/magyars.png",
	"./malay.png": "./src/components/civ-images/icons/malay.png",
	"./malians.png": "./src/components/civ-images/icons/malians.png",
	"./mayans.png": "./src/components/civ-images/icons/mayans.png",
	"./mongols.png": "./src/components/civ-images/icons/mongols.png",
	"./persians.png": "./src/components/civ-images/icons/persians.png",
	"./poles.png": "./src/components/civ-images/icons/poles.png",
	"./portuguese.png": "./src/components/civ-images/icons/portuguese.png",
	"./romans.png": "./src/components/civ-images/icons/romans.png",
	"./saracens.png": "./src/components/civ-images/icons/saracens.png",
	"./sicilians.png": "./src/components/civ-images/icons/sicilians.png",
	"./slavs.png": "./src/components/civ-images/icons/slavs.png",
	"./spanish.png": "./src/components/civ-images/icons/spanish.png",
	"./tatars.png": "./src/components/civ-images/icons/tatars.png",
	"./teutons.png": "./src/components/civ-images/icons/teutons.png",
	"./turks.png": "./src/components/civ-images/icons/turks.png",
	"./vietnamese.png": "./src/components/civ-images/icons/vietnamese.png",
	"./vikings.png": "./src/components/civ-images/icons/vikings.png"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/components/civ-images/icons sync recursive \\.(png)$";

/***/ }),

/***/ "./src/components/civ-images/image-helper.js":
/*!***************************************************!*\
  !*** ./src/components/civ-images/image-helper.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   civEmblemImageMap: () => (/* binding */ civEmblemImageMap),
/* harmony export */   civIconsMap: () => (/* binding */ civIconsMap),
/* harmony export */   civUniqueUnitIconsMap: () => (/* binding */ civUniqueUnitIconsMap),
/* harmony export */   civUpgradeIconMap: () => (/* binding */ civUpgradeIconMap)
/* harmony export */ });
function importAll(r) {
  return r.keys().map(r);
}
function importAllIntoMap(r, relativeImagePath) {
  const myMap = new Map();
  r.keys()
    .map(r)
    .forEach((relativeUrl) => {
      const civKey = relativeUrl.replace(relativeImagePath, "").replace(".png", "").split(".")[0];
      if (myMap.has(civKey)) {
        const civKeyParts = relativeUrl.replace(relativeImagePath, "").replace(".png", "").split(".");
        const civKey2 = `${civKeyParts[0]}.${civKeyParts[1]}`;
        myMap.set(civKey2, relativeUrl);
      } else {
        myMap.set(civKey, relativeUrl);
      }
    });
  return myMap;
}
const civIconsMap = importAllIntoMap(__webpack_require__("./src/components/civ-images/icons sync recursive \\.(png)$"), "components/civ-images/icons/");
const civUniqueUnitIconsMap = importAllIntoMap(__webpack_require__("./src/components/civ-images/civ-unique-units sync recursive \\.(png)$"), "components/civ-images/civ-unique-units/");
const civEmblemImageMap = importAllIntoMap(__webpack_require__("./src/components/civ-images/civ-emblems sync recursive \\.(png)$"), "components/civ-images/civ-emblems/");
const civUpgradeIconMap = importAllIntoMap(__webpack_require__("./src/components/civ-images/upgrade-icons sync recursive \\.(png)$"), "components/civ-images/upgrade-icons/");




/***/ }),

/***/ "./src/components/civ-images/upgrade-icons sync recursive \\.(png)$":
/*!****************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/ sync \.(png)$ ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./arbalester.png": "./src/components/civ-images/upgrade-icons/arbalester.png",
	"./architecture.png": "./src/components/civ-images/upgrade-icons/architecture.png",
	"./arrowslits.png": "./src/components/civ-images/upgrade-icons/arrowslits.png",
	"./arson.png": "./src/components/civ-images/upgrade-icons/arson.png",
	"./atonement.png": "./src/components/civ-images/upgrade-icons/atonement.png",
	"./ballistics.png": "./src/components/civ-images/upgrade-icons/ballistics.png",
	"./blast furnace.png": "./src/components/civ-images/upgrade-icons/blast furnace.png",
	"./block printing.png": "./src/components/civ-images/upgrade-icons/block printing.png",
	"./bloodlines.png": "./src/components/civ-images/upgrade-icons/bloodlines.png",
	"./bodkin arrow.png": "./src/components/civ-images/upgrade-icons/bodkin arrow.png",
	"./bombard tower.png": "./src/components/civ-images/upgrade-icons/bombard tower.png",
	"./bow saw.png": "./src/components/civ-images/upgrade-icons/bow saw.png",
	"./bracer.png": "./src/components/civ-images/upgrade-icons/bracer.png",
	"./cannon galleon.png": "./src/components/civ-images/upgrade-icons/cannon galleon.png",
	"./capped ram.png": "./src/components/civ-images/upgrade-icons/capped ram.png",
	"./careening.png": "./src/components/civ-images/upgrade-icons/careening.png",
	"./castle.png": "./src/components/civ-images/upgrade-icons/castle.png",
	"./castle.tp.png": "./src/components/civ-images/upgrade-icons/castle.tp.png",
	"./cavalier.png": "./src/components/civ-images/upgrade-icons/cavalier.png",
	"./chain barding armor.png": "./src/components/civ-images/upgrade-icons/chain barding armor.png",
	"./chain mail armor.png": "./src/components/civ-images/upgrade-icons/chain mail armor.png",
	"./champion.png": "./src/components/civ-images/upgrade-icons/champion.png",
	"./chemistry.png": "./src/components/civ-images/upgrade-icons/chemistry.png",
	"./crop rotation.png": "./src/components/civ-images/upgrade-icons/crop rotation.png",
	"./crossbowman.png": "./src/components/civ-images/upgrade-icons/crossbowman.png",
	"./dark.png": "./src/components/civ-images/upgrade-icons/dark.png",
	"./dark.tp.png": "./src/components/civ-images/upgrade-icons/dark.tp.png",
	"./double-bit axe.png": "./src/components/civ-images/upgrade-icons/double-bit axe.png",
	"./dry dock.png": "./src/components/civ-images/upgrade-icons/dry dock.png",
	"./eagle warrior.png": "./src/components/civ-images/upgrade-icons/eagle warrior.png",
	"./elite battle elephant.png": "./src/components/civ-images/upgrade-icons/elite battle elephant.png",
	"./elite cannon galleon.png": "./src/components/civ-images/upgrade-icons/elite cannon galleon.png",
	"./elite eagle warrior.png": "./src/components/civ-images/upgrade-icons/elite eagle warrior.png",
	"./elite skirmisher.png": "./src/components/civ-images/upgrade-icons/elite skirmisher.png",
	"./elite steppe lancer.png": "./src/components/civ-images/upgrade-icons/elite steppe lancer.png",
	"./elite unique unit.png": "./src/components/civ-images/upgrade-icons/elite unique unit.png",
	"./faith.png": "./src/components/civ-images/upgrade-icons/faith.png",
	"./fast fire ship.png": "./src/components/civ-images/upgrade-icons/fast fire ship.png",
	"./fervor.png": "./src/components/civ-images/upgrade-icons/fervor.png",
	"./feudal.png": "./src/components/civ-images/upgrade-icons/feudal.png",
	"./feudal.tp.png": "./src/components/civ-images/upgrade-icons/feudal.tp.png",
	"./fletching.png": "./src/components/civ-images/upgrade-icons/fletching.png",
	"./forging.png": "./src/components/civ-images/upgrade-icons/forging.png",
	"./fortified wall.png": "./src/components/civ-images/upgrade-icons/fortified wall.png",
	"./galleon.png": "./src/components/civ-images/upgrade-icons/galleon.png",
	"./gillnets.png": "./src/components/civ-images/upgrade-icons/gillnets.png",
	"./gold mining.png": "./src/components/civ-images/upgrade-icons/gold mining.png",
	"./gold shaft mining.png": "./src/components/civ-images/upgrade-icons/gold shaft mining.png",
	"./guard tower.png": "./src/components/civ-images/upgrade-icons/guard tower.png",
	"./halberdier.png": "./src/components/civ-images/upgrade-icons/halberdier.png",
	"./hand cart.png": "./src/components/civ-images/upgrade-icons/hand cart.png",
	"./heated shot.png": "./src/components/civ-images/upgrade-icons/heated shot.png",
	"./heavy camel.png": "./src/components/civ-images/upgrade-icons/heavy camel.png",
	"./heavy cav archer.png": "./src/components/civ-images/upgrade-icons/heavy cav archer.png",
	"./heavy demo ship.png": "./src/components/civ-images/upgrade-icons/heavy demo ship.png",
	"./heavy plow.png": "./src/components/civ-images/upgrade-icons/heavy plow.png",
	"./heavy scorpion.png": "./src/components/civ-images/upgrade-icons/heavy scorpion.png",
	"./herbal medicine.png": "./src/components/civ-images/upgrade-icons/herbal medicine.png",
	"./heresy.png": "./src/components/civ-images/upgrade-icons/heresy.png",
	"./horse collar.png": "./src/components/civ-images/upgrade-icons/horse collar.png",
	"./husbandry.png": "./src/components/civ-images/upgrade-icons/husbandry.png",
	"./hussar.png": "./src/components/civ-images/upgrade-icons/hussar.png",
	"./illumination.png": "./src/components/civ-images/upgrade-icons/illumination.png",
	"./imperial camel.png": "./src/components/civ-images/upgrade-icons/imperial camel.png",
	"./imperial skirmisher.png": "./src/components/civ-images/upgrade-icons/imperial skirmisher.png",
	"./imperial.png": "./src/components/civ-images/upgrade-icons/imperial.png",
	"./imperial.tp.png": "./src/components/civ-images/upgrade-icons/imperial.tp.png",
	"./iron casting.png": "./src/components/civ-images/upgrade-icons/iron casting.png",
	"./keep.png": "./src/components/civ-images/upgrade-icons/keep.png",
	"./leather archer armor.png": "./src/components/civ-images/upgrade-icons/leather archer armor.png",
	"./light cavalry.png": "./src/components/civ-images/upgrade-icons/light cavalry.png",
	"./long swordsman.png": "./src/components/civ-images/upgrade-icons/long swordsman.png",
	"./man-at-arms.png": "./src/components/civ-images/upgrade-icons/man-at-arms.png",
	"./masonry.png": "./src/components/civ-images/upgrade-icons/masonry.png",
	"./murder holes.png": "./src/components/civ-images/upgrade-icons/murder holes.png",
	"./onager.png": "./src/components/civ-images/upgrade-icons/onager.png",
	"./padded archer armor.png": "./src/components/civ-images/upgrade-icons/padded archer armor.png",
	"./paladin.png": "./src/components/civ-images/upgrade-icons/paladin.png",
	"./parthian tactics.png": "./src/components/civ-images/upgrade-icons/parthian tactics.png",
	"./pikeman.png": "./src/components/civ-images/upgrade-icons/pikeman.png",
	"./plate barding armor.png": "./src/components/civ-images/upgrade-icons/plate barding armor.png",
	"./plate mail armor.png": "./src/components/civ-images/upgrade-icons/plate mail armor.png",
	"./redemption.png": "./src/components/civ-images/upgrade-icons/redemption.png",
	"./ring archer armor.png": "./src/components/civ-images/upgrade-icons/ring archer armor.png",
	"./sanctity.png": "./src/components/civ-images/upgrade-icons/sanctity.png",
	"./scale barding armor.png": "./src/components/civ-images/upgrade-icons/scale barding armor.png",
	"./scale mail armor.png": "./src/components/civ-images/upgrade-icons/scale mail armor.png",
	"./shipwright.png": "./src/components/civ-images/upgrade-icons/shipwright.png",
	"./siege engineers.png": "./src/components/civ-images/upgrade-icons/siege engineers.png",
	"./siege onager.png": "./src/components/civ-images/upgrade-icons/siege onager.png",
	"./siege ram.png": "./src/components/civ-images/upgrade-icons/siege ram.png",
	"./squires.png": "./src/components/civ-images/upgrade-icons/squires.png",
	"./stone mining.png": "./src/components/civ-images/upgrade-icons/stone mining.png",
	"./stone shaft mining.png": "./src/components/civ-images/upgrade-icons/stone shaft mining.png",
	"./supplies.png": "./src/components/civ-images/upgrade-icons/supplies.png",
	"./theocracy.png": "./src/components/civ-images/upgrade-icons/theocracy.png",
	"./thumb ring.png": "./src/components/civ-images/upgrade-icons/thumb ring.png",
	"./tracking.png": "./src/components/civ-images/upgrade-icons/tracking.png",
	"./treadmill crane.png": "./src/components/civ-images/upgrade-icons/treadmill crane.png",
	"./two-handed swordsman.png": "./src/components/civ-images/upgrade-icons/two-handed swordsman.png",
	"./two-man saw.png": "./src/components/civ-images/upgrade-icons/two-man saw.png",
	"./unique tech castle.png": "./src/components/civ-images/upgrade-icons/unique tech castle.png",
	"./unique tech imperial.png": "./src/components/civ-images/upgrade-icons/unique tech imperial.png",
	"./war galley.png": "./src/components/civ-images/upgrade-icons/war galley.png",
	"./wheelbarrow.png": "./src/components/civ-images/upgrade-icons/wheelbarrow.png"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/components/civ-images/upgrade-icons sync recursive \\.(png)$";

/***/ }),

/***/ "./src/components/civ-sounds/sound-helper.js":
/*!***************************************************!*\
  !*** ./src/components/civ-sounds/sound-helper.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildAudioElement: () => (/* binding */ buildAudioElement),
/* harmony export */   getAudioSource: () => (/* binding */ getAudioSource)
/* harmony export */ });
function importAllIntoMap(r, relativeImagePath) {
  const myMap = new Map();
  r.keys()
    .map(r)
    .forEach((relativeUrl) => {
      const civKey = relativeUrl.replace(relativeImagePath, "").replace(".mp3", "").split(".")[0];
      if (myMap.has(civKey)) {
        const civKeyParts = relativeUrl.replace(relativeImagePath, "").replace(".mp3", "").split(".");
        const civKey2 = `${civKeyParts[0]}.${civKeyParts[1]}`;
        myMap.set(civKey2, relativeUrl);
      } else {
        myMap.set(civKey, relativeUrl);
      }
    });
  return myMap;
}

const civSoundMap = importAllIntoMap(__webpack_require__("./src/components/civ-sounds/sounds sync recursive \\.(mp3)$"), "components/civ-sounds/sounds/");

function buildAudioElement(civName) {
  const audioElement = new Audio(`./${civSoundMap.get(civName.toLowerCase())}`);
  return audioElement;
}
function getAudioSource(civName) {
  return civSoundMap.get(civName.toLowerCase());
}




/***/ }),

/***/ "./src/components/civ-sounds/sounds sync recursive \\.(mp3)$":
/*!*********************************************************!*\
  !*** ./src/components/civ-sounds/sounds/ sync \.(mp3)$ ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./aztecs.mp3": "./src/components/civ-sounds/sounds/aztecs.mp3",
	"./bengalis.mp3": "./src/components/civ-sounds/sounds/bengalis.mp3",
	"./berbers.mp3": "./src/components/civ-sounds/sounds/berbers.mp3",
	"./bohemians.mp3": "./src/components/civ-sounds/sounds/bohemians.mp3",
	"./britons.mp3": "./src/components/civ-sounds/sounds/britons.mp3",
	"./bulgarians.mp3": "./src/components/civ-sounds/sounds/bulgarians.mp3",
	"./burgundians.mp3": "./src/components/civ-sounds/sounds/burgundians.mp3",
	"./burmese.mp3": "./src/components/civ-sounds/sounds/burmese.mp3",
	"./byzantines.mp3": "./src/components/civ-sounds/sounds/byzantines.mp3",
	"./celts.mp3": "./src/components/civ-sounds/sounds/celts.mp3",
	"./chinese.mp3": "./src/components/civ-sounds/sounds/chinese.mp3",
	"./cumans.mp3": "./src/components/civ-sounds/sounds/cumans.mp3",
	"./dravidians.mp3": "./src/components/civ-sounds/sounds/dravidians.mp3",
	"./ethiopians.mp3": "./src/components/civ-sounds/sounds/ethiopians.mp3",
	"./franks.mp3": "./src/components/civ-sounds/sounds/franks.mp3",
	"./goths.mp3": "./src/components/civ-sounds/sounds/goths.mp3",
	"./gurjaras.mp3": "./src/components/civ-sounds/sounds/gurjaras.mp3",
	"./hindustanis.mp3": "./src/components/civ-sounds/sounds/hindustanis.mp3",
	"./huns.mp3": "./src/components/civ-sounds/sounds/huns.mp3",
	"./incas.mp3": "./src/components/civ-sounds/sounds/incas.mp3",
	"./italians.mp3": "./src/components/civ-sounds/sounds/italians.mp3",
	"./japanese.mp3": "./src/components/civ-sounds/sounds/japanese.mp3",
	"./khmer.mp3": "./src/components/civ-sounds/sounds/khmer.mp3",
	"./koreans.mp3": "./src/components/civ-sounds/sounds/koreans.mp3",
	"./lithuanians.mp3": "./src/components/civ-sounds/sounds/lithuanians.mp3",
	"./magyars.mp3": "./src/components/civ-sounds/sounds/magyars.mp3",
	"./malay.mp3": "./src/components/civ-sounds/sounds/malay.mp3",
	"./malians.mp3": "./src/components/civ-sounds/sounds/malians.mp3",
	"./mayans.mp3": "./src/components/civ-sounds/sounds/mayans.mp3",
	"./mongols.mp3": "./src/components/civ-sounds/sounds/mongols.mp3",
	"./persians.mp3": "./src/components/civ-sounds/sounds/persians.mp3",
	"./poles.mp3": "./src/components/civ-sounds/sounds/poles.mp3",
	"./portuguese.mp3": "./src/components/civ-sounds/sounds/portuguese.mp3",
	"./romans.mp3": "./src/components/civ-sounds/sounds/romans.mp3",
	"./saracens.mp3": "./src/components/civ-sounds/sounds/saracens.mp3",
	"./sicilians.mp3": "./src/components/civ-sounds/sounds/sicilians.mp3",
	"./slavs.mp3": "./src/components/civ-sounds/sounds/slavs.mp3",
	"./spanish.mp3": "./src/components/civ-sounds/sounds/spanish.mp3",
	"./tatars.mp3": "./src/components/civ-sounds/sounds/tatars.mp3",
	"./teutons.mp3": "./src/components/civ-sounds/sounds/teutons.mp3",
	"./turks.mp3": "./src/components/civ-sounds/sounds/turks.mp3",
	"./vietnamese.mp3": "./src/components/civ-sounds/sounds/vietnamese.mp3",
	"./vikings.mp3": "./src/components/civ-sounds/sounds/vikings.mp3"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/components/civ-sounds/sounds sync recursive \\.(mp3)$";

/***/ }),

/***/ "./src/components/civ-tech-overlay/civ-tech-overlay.js":
/*!*************************************************************!*\
  !*** ./src/components/civ-tech-overlay/civ-tech-overlay.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CivTechOverlay: () => (/* binding */ CivTechOverlay)
/* harmony export */ });
/* harmony import */ var _civ_images_image_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../civ-images/image-helper */ "./src/components/civ-images/image-helper.js");
/* harmony import */ var _civ_images_civ_data_data_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../civ-images/civ-data/data-helper */ "./src/components/civ-images/civ-data/data-helper.js");
/* harmony import */ var _civ_sounds_sound_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../civ-sounds/sound-helper */ "./src/components/civ-sounds/sound-helper.js");
/* harmony import */ var _civ_upgrade_overlay_civ_upgrade_overlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../civ-upgrade-overlay/civ-upgrade-overlay */ "./src/components/civ-upgrade-overlay/civ-upgrade-overlay.js");






class CivTechOverlay {
  _soundsToPlay;
  _soundIndex;
  constructor() {
    this._soundIndex = 0;
    this._soundsToPlay = [];
  }
  buildElement(civName, techOptions, autoHideDelay) {
    this._soundsToPlay.push(civName.toLowerCase());
    const mainDiv = this.buildMainDivContainer(autoHideDelay);

    const nameContainerDiv = document.createElement("div");
    nameContainerDiv.classList.add("civ-name-container");
    nameContainerDiv.appendChild(this.buildCivIconElement(civName));
    nameContainerDiv.appendChild(this.buildNameElement(civName));
    nameContainerDiv.appendChild(this.buildCivUniqueUnit(civName));
    mainDiv.appendChild(nameContainerDiv);
    mainDiv.appendChild(this.buildCivDescription(civName));

    const civUpgrades = new _civ_upgrade_overlay_civ_upgrade_overlay__WEBPACK_IMPORTED_MODULE_3__.CivUpgradeOverlay();
    mainDiv.appendChild(civUpgrades.buildElement(civName, techOptions));

    mainDiv.appendChild(this.buildCivEmblem(civName));
    return mainDiv;
  }
  buildSounds() {
    const soundElement = (0,_civ_sounds_sound_helper__WEBPACK_IMPORTED_MODULE_2__.buildAudioElement)(this._soundsToPlay[this._soundIndex].toLowerCase());
    soundElement.onended = () => {
      this._soundIndex++;
      if (typeof this._soundsToPlay[this._soundIndex] !== "undefined") {
        // play next sound
        soundElement.src = (0,_civ_sounds_sound_helper__WEBPACK_IMPORTED_MODULE_2__.getAudioSource)(this._soundsToPlay[this._soundIndex]);
        soundElement.play();
      }
    };
    return soundElement;
  }
  buildMainDivContainer(autoHideDelay) {
    const divContainer = document.createElement("div");

    divContainer.classList.add("civ-tech-overlay-container");
    divContainer.classList.add("mask-img-vertical");
    setTimeout(() => {
      divContainer.classList.remove("civ-tech-animation-leave-active");
      divContainer.classList.add("civ-tech-animation-enter-active");
      if (autoHideDelay > -1) {
        setTimeout(() => {
          divContainer.classList.remove("civ-tech-animation-enter-active");
          divContainer.classList.add("civ-tech-animation-leave-active");
        }, autoHideDelay);
      }
    }, 1000);
    return divContainer;
  }
  buildNameElement(civName) {
    const nameElementDiv = document.createElement("div");
    nameElementDiv.classList.add("civ-name");

    const civNameText = `${civName.substring(0, 1).toUpperCase()}${civName.slice(1)}`;
    nameElementDiv.innerText = civNameText;
    return nameElementDiv;
  }
  buildCivIconElement(civName) {
    const civIcon = new Image();
    civIcon.classList.add("civ-icon");
    civIcon.src = `./${_civ_images_image_helper__WEBPACK_IMPORTED_MODULE_0__.civIconsMap.get(civName)}`;
    return civIcon;
  }
  buildCivDescription(civName) {
    const descriptionDiv = document.createElement("div");
    descriptionDiv.classList.add("civ-description");
    descriptionDiv.innerHTML = (0,_civ_images_civ_data_data_helper__WEBPACK_IMPORTED_MODULE_1__.getCivTechnologyDescription)(civName);
    return descriptionDiv;
  }
  buildCivUniqueUnit(civName) {
    const civIcon = new Image();
    civIcon.classList.add("civ-unique-unit-icon");
    civIcon.src = `./${_civ_images_image_helper__WEBPACK_IMPORTED_MODULE_0__.civUniqueUnitIconsMap.get(civName)}`;
    return civIcon;
  }
  buildCivEmblem(civName) {
    const civIcon = new Image();
    civIcon.classList.add("civ-emblem");
    civIcon.src = `./${_civ_images_image_helper__WEBPACK_IMPORTED_MODULE_0__.civEmblemImageMap.get(civName)}`;
    return civIcon;
  }
  clearCivDivs() {
    Array.from(document.getElementsByClassName("civ-tech-overlay-container")).forEach((element) => {
      element.remove();
    });
  }
}




/***/ }),

/***/ "./src/components/civ-upgrade-overlay/civ-upgrade-overlay.js":
/*!*******************************************************************!*\
  !*** ./src/components/civ-upgrade-overlay/civ-upgrade-overlay.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CivUpgradeOverlay: () => (/* binding */ CivUpgradeOverlay)
/* harmony export */ });
/* harmony import */ var _civ_images_image_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../civ-images/image-helper */ "./src/components/civ-images/image-helper.js");
/* harmony import */ var _civ_images_civ_data_data_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../civ-images/civ-data/data-helper */ "./src/components/civ-images/civ-data/data-helper.js");


class CivUpgradeOverlay {
  constructor() {}
  _techOptions;
  buildElement(civName, techOptions) {
    this._techOptions = techOptions;
    const mainDiv = this.buildUpgradeContainer(civName);
    return mainDiv;
  }
  buildUpgradeContainer(civName) {
    const mainDiv = document.createElement("div");
    mainDiv.classList.add("civ-upgrade-overlay-container");

    const allTechs = (0,_civ_images_civ_data_data_helper__WEBPACK_IMPORTED_MODULE_1__.getCivTechnologyUpgrades)(civName);
    // console.log("tech options: ", this._techOptions);
    if (this._techOptions._showBlacksmithTech) {
      const reducedBsTechs = (0,_civ_images_civ_data_data_helper__WEBPACK_IMPORTED_MODULE_1__.filterLowestUpgradesFromCategories)(["blacksmith", "archery range"], allTechs);
      mainDiv.appendChild(this.buildIconContainer(reducedBsTechs));
    }
    if (this._techOptions._showMonastaryTech) {
      const reducedEcoTechs = (0,_civ_images_civ_data_data_helper__WEBPACK_IMPORTED_MODULE_1__.filterLowestUpgradesFromCategories)(["lumber camp", "mill", "university", "stable"], allTechs);
      mainDiv.appendChild(this.buildIconContainer(reducedEcoTechs));
    }
    if (this._techOptions._showUniversityTech) {
      const reducedMonkTechs = (0,_civ_images_civ_data_data_helper__WEBPACK_IMPORTED_MODULE_1__.filterLowestUpgradesFromCategories)(["monastery"], allTechs);
      mainDiv.appendChild(this.buildIconContainer(reducedMonkTechs.slice(0, 5)));
      mainDiv.appendChild(this.buildIconContainer(reducedMonkTechs.slice(5, reducedMonkTechs.length)));
    }
    return mainDiv;
  }
  buildIconContainer(arrayOfUpgrades) {
    const divContainer = document.createElement("div");
    divContainer.classList.add("civ-upgrade-container");

    arrayOfUpgrades.forEach((upgrade) => {
      const imagePath = `./${_civ_images_image_helper__WEBPACK_IMPORTED_MODULE_0__.civUpgradeIconMap.get(upgrade.rawName.toLowerCase())}`;
      const iconElement = this.buildIcon(imagePath, upgrade.id === -1);

      const numTiers = (0,_civ_images_civ_data_data_helper__WEBPACK_IMPORTED_MODULE_1__.getAgeTierLevel)(upgrade.rawName);
      const tierContainer = this.buildTierContainer(numTiers, upgrade.id === -1);
      iconElement.appendChild(tierContainer);

      divContainer.appendChild(iconElement);
    });
    return divContainer;
  }
  buildIcon(imagePath, disableIcon) {
    const upgradeIconContainer = document.createElement("div");
    upgradeIconContainer.classList.add("upgrade-icon-container");

    const upgradeIcon = new Image();
    upgradeIcon.src = imagePath;
    upgradeIcon.classList.add("upgrade-icon");
    upgradeIconContainer.appendChild(upgradeIcon);

    if (disableIcon) {
      const mesoDisable = document.createElement("div");
      mesoDisable.classList.add("disable-icon-meso");
      upgradeIconContainer.appendChild(mesoDisable);
      upgradeIconContainer.appendChild(upgradeIcon);
    }
    return upgradeIconContainer;
  }
  buildTierContainer(tierLevels, fullDisabled) {
    const tierContainer = document.createElement("div");
    tierContainer.classList.add("upgrade-tier-container");

    const tier = document.createElement("div");
    if (fullDisabled) {
      tier.classList.add(`disabled-1`);
      tierContainer.appendChild(tier);
    } else if (tierLevels === -1 && !fullDisabled) {
      tier.classList.add(`enabled-1`);
      tierContainer.appendChild(tier);
    } else if (tierLevels > -1) {
      //+1 for 0 offset
      const offsetTiers = tierLevels + 1;
      for (let i = 0; i < offsetTiers; i++) {
        const multiTier = document.createElement("div");
        multiTier.classList.add(`enabled-3`);
        tierContainer.appendChild(multiTier);
      }
      if (tierLevels === 0) {
        const disableTier = document.createElement("div");
        disableTier.classList.add(`disabled-3`);
        const disableTier1 = document.createElement("div");
        disableTier1.classList.add(`disabled-3`);
        tierContainer.appendChild(disableTier);
        tierContainer.appendChild(disableTier1);
      }
      if (tierLevels === 1) {
        const disableTier = document.createElement("div");
        disableTier.classList.add(`disabled-3`);
        tierContainer.appendChild(disableTier);
      }
    }
    return tierContainer;
  }
}




/***/ }),

/***/ "./src/components/tech-overlay-control/tech-overlay-control.js":
/*!*********************************************************************!*\
  !*** ./src/components/tech-overlay-control/tech-overlay-control.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TechOverlayControl: () => (/* binding */ TechOverlayControl)
/* harmony export */ });
/* harmony import */ var _common_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common-data */ "./src/common-data.js");

class TechOverlayControl {
  _dataStore;
  _civList;
  _clientWebsocket;
  constructor(dataStore, civList, clientWebsocket) {
    this._dataStore = dataStore;
    this._civList = civList;
    this._clientWebsocket = clientWebsocket;
  }
  buildElement() {
    const element = document.createElement("div");
    element.classList.add("left-column");
    // controls
    const controlsElement = this.buildTechSettingsPanel();

    // list of civs
    const civListElement = this._civList.buildElement(true);
    civListElement.classList.add("tech-civ-list");

    element.appendChild(controlsElement);
    element.appendChild(civListElement);

    //when the dom loads the civ list, update it with our settings
    setTimeout(() => {
      this.modifyCivCountCSS();
    }, 50);
    return element;
  }

  buildTechSettingsPanel() {
    const element = document.createElement("div");
    element.classList.add("tech-settings");

    //header
    const headerElement = document.createElement("div");
    headerElement.classList.add("tech-header");
    headerElement.innerHTML = "Technology Overlay";
    element.appendChild(headerElement);

    const buttonsElement = document.createElement("div");
    buttonsElement.classList.add("action-buttons");
    buttonsElement.appendChild(this.buildButton("Clear", "button-red", this.onClearClicked.bind(this)));
    buttonsElement.appendChild(this.buildButton("Show", "button-blue", this.onShowClicked.bind(this)));
    element.appendChild(buttonsElement);

    const settingsElement = document.createElement("div");
    settingsElement.classList.add("action-settings");
    Object.keys(this._dataStore._techOverlayStore).forEach((key, index) => {
      // console.log(`key ${key} :: ${this._dataStore._techOverlayStore[key]}`);
      if (key === "_label_userId") {
        return;
      }
      if (typeof this._dataStore._techOverlayStore[key] === "boolean") {
        settingsElement.appendChild(this.buildCheckBox(key, this._dataStore._techOverlayStore[key]));
      } else if (typeof this._dataStore._techOverlayStore[key]) {
        settingsElement.appendChild(this.buildInputBox(key, this._dataStore._techOverlayStore[key]));
      }
    });
    element.appendChild(settingsElement);

    return element;
  }
  buildCheckBox(label, value) {
    const container = document.createElement("div");
    container.classList.add("setting-container");

    const element = document.createElement("label");
    element.classList.add("switch");
    element.setAttribute("for", label);

    const spanLabel = document.createElement("span");
    spanLabel.innerHTML = this.sanitizeDisplayValue(label);

    const inputCheckbox = document.createElement("input");
    inputCheckbox.type = "checkbox";
    inputCheckbox.id = label;
    inputCheckbox.checked = value;
    inputCheckbox.addEventListener("change", (event) => {
      this.saveData(event);
    });

    const spanCheckbox = document.createElement("span");
    spanCheckbox.classList.add("slider");
    spanCheckbox.classList.add("round");

    container.appendChild(spanLabel);
    container.appendChild(element);

    element.appendChild(inputCheckbox);
    element.appendChild(spanCheckbox);

    return container;
  }
  buildInputBox(label, value) {
    const element = document.createElement("div");
    element.classList.add("setting-container");

    const elementLabel = document.createElement("label");
    elementLabel.setAttribute("for", label);

    const spanLabel = document.createElement("span");
    spanLabel.innerHTML = this.sanitizeDisplayValue(label);

    const inputNumber = document.createElement("input");
    inputNumber.classList.add("input-number");
    inputNumber.type = "number";
    inputNumber.id = label;
    inputNumber.value = value;
    inputNumber.addEventListener("change", (event) => {
      this.saveData(event);
      if (event.target.id === "_numCivsPerRow") {
        this.modifyCivCountCSS();
      }
    });

    element.appendChild(elementLabel);
    element.appendChild(spanLabel);
    element.appendChild(inputNumber);

    return element;
  }
  buildButton(label, buttonClass, callback) {
    const element = document.createElement("div");
    element.classList.add("setting-container");

    const button = document.createElement("button");
    button.classList.add("setting-button", buttonClass);
    button.id = label;
    button.innerHTML = label;
    button.addEventListener("click", callback, false);
    element.appendChild(button);
    return element;
  }

  onClearClicked(event) {
    this._clientWebsocket.sendMessage(_common_data__WEBPACK_IMPORTED_MODULE_0__.SocketEnums.AGEOVERLAYPUSH, this.buildPayload(false));
    this._civList.resetState();
  }
  onShowClicked(event) {
    this._clientWebsocket.sendMessage(_common_data__WEBPACK_IMPORTED_MODULE_0__.SocketEnums.AGEOVERLAYPUSH, this.buildPayload(true));
  }

  buildPayload(show) {
    const payload = Object.assign({}, this._dataStore._techOverlayStore, { showOverlay: show, pickedCivs: this._civList.getListOfCivsClicked() });
    return payload;
  }

  saveData() {
    Object.keys(this._dataStore._techOverlayStore).forEach((key, index) => {
      let storedValue;
      if (key === "_label_userId") {
        storedValue = this._dataStore._techOverlayStore[key];
      } else if (document.getElementById(key).value === "on") {
        storedValue = document.getElementById(key).checked;
      } else {
        storedValue = document.getElementById(key).value;
      }
      this._dataStore._techOverlayStore[key] = storedValue;
    });
    this._dataStore.saveData();
  }
  modifyCivCountCSS() {
    const widthPercent = 100 / this._dataStore._techOverlayStore._numCivsPerRow;
    document.querySelectorAll(".admin-civ-icon").forEach((e) => {
      e.style.flex = `1 0 ${widthPercent}%`;
    });
  }

  sanitizeDisplayValue(value) {
    return value.replace("_show", "").replace("_use", "").replace("_", "").replace("Tech", "");
  }
}




/***/ }),

/***/ "./src/datastore.js":
/*!**************************!*\
  !*** ./src/datastore.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LocalSavedData: () => (/* binding */ LocalSavedData)
/* harmony export */ });
class TechnologyOverlayStore {
  _useSound = false;
  _autoHide = true;
  _showTechOverlay = true;
  _showBlacksmithTech = false;
  _showUniversityTech = false;
  _showMonastaryTech = false;
  _showDockTech = false;
  _showBarracksTech = false;
  _showArcheryTech = false;
  _showStableTech = false;
  _showSiegeWorkshopTech = false;
  _autoHideDelay = 12;
  _numCivsPerRow = 7;
  _numPlayersInMatch = 2;
  _label_userId = "";
}
class UISettingsOverlayStore {
  _fontSize = 22;
  _techBackgroundOpacity = 0.8;
}

class LocalSavedData {
  _techOverlayStore;
  _uiSettingsOverlayStore;

  constructor() {
    this._techOverlayStore = new TechnologyOverlayStore();
    this._uiSettingsOverlayStore = new UISettingsOverlayStore();
  }

  saveData() {
    // console.log(`Saving ${this._techOverlayStore}`);
    localStorage.setItem("techOverlayStore", JSON.stringify(this._techOverlayStore));
    // console.log(`Saving ${this._uiSettingsOverlayStore}`);
    localStorage.setItem("uiSettingsOverlayStore", JSON.stringify(this._uiSettingsOverlayStore));
  }

  loadData() {
    const techData = JSON.parse(localStorage.getItem("techOverlayStore"));
    if (techData) {
      Object.assign(this._techOverlayStore, techData);
      // console.log(this._techOverlayStore._label_userId);
      if (!this._techOverlayStore._label_userId) {
        this._techOverlayStore._label_userId = crypto.randomUUID();
      }
      // this._techOverlayStore = techData;
    }
    const uiData = JSON.parse(localStorage.getItem("uiSettingsOverlayStore"));
    if (uiData) {
      Object.assign(this._uiSettingsOverlayStore, uiData);
      // this._uiSettingsOverlayStore = uiData;
    }
  }

  deleteData(key) {
    localStorage.removeItem(key);
  }
}




/***/ }),

/***/ "./src/html-pages/admin-page.js":
/*!**************************************!*\
  !*** ./src/html-pages/admin-page.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminPage: () => (/* binding */ AdminPage)
/* harmony export */ });
/* harmony import */ var _components_tech_overlay_control_tech_overlay_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/tech-overlay-control/tech-overlay-control */ "./src/components/tech-overlay-control/tech-overlay-control.js");
/* harmony import */ var _components_civ_icons_civ_icon_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/civ-icons/civ-icon-list */ "./src/components/civ-icons/civ-icon-list.js");



class AdminPage {
  _dataStore;
  _clientWebsocket;
  constructor(dataStore, clientWebsocket) {
    this._dataStore = dataStore;
    this._clientWebsocket = clientWebsocket;
  }
  buildHtml() {
    document.body.classList.add("admin-body");
    const bodyContent = document.getElementById("dynamic-content");

    const adminPage = document.createElement("div");
    adminPage.classList.add("admin-page");

    const civIconList = new _components_civ_icons_civ_icon_list__WEBPACK_IMPORTED_MODULE_1__.CivIconList();
    const techOverlayControl = new _components_tech_overlay_control_tech_overlay_control__WEBPACK_IMPORTED_MODULE_0__.TechOverlayControl(this._dataStore, civIconList, this._clientWebsocket);
    adminPage.appendChild(techOverlayControl.buildElement());

    bodyContent.appendChild(adminPage);
  }
}




/***/ }),

/***/ "./src/html-pages/client-page.js":
/*!***************************************!*\
  !*** ./src/html-pages/client-page.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClientPage: () => (/* binding */ ClientPage)
/* harmony export */ });
/* harmony import */ var _common_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common-data */ "./src/common-data.js");
/* harmony import */ var _components_civ_images_civ_data_data_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/civ-images/civ-data/data-helper */ "./src/components/civ-images/civ-data/data-helper.js");
/* harmony import */ var _components_civ_tech_overlay_civ_tech_overlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/civ-tech-overlay/civ-tech-overlay */ "./src/components/civ-tech-overlay/civ-tech-overlay.js");



class ClientPage {
  _dataStore;
  _clientWebsocket;
  _techOverlay;
  constructor(dataStore, clientWebsocket) {
    this._dataStore = dataStore;
    this._clientWebsocket = clientWebsocket;
    this._techOverlay = new _components_civ_tech_overlay_civ_tech_overlay__WEBPACK_IMPORTED_MODULE_2__.CivTechOverlay();
    document.addEventListener("aoe-websocket-event", this.digestWebsocketMessage.bind(this));
  }
  buildHtml() {
    const bodyContent = document.getElementById("dynamic-content");

    const clientPageDOM = document.createElement("div");
    clientPageDOM.classList.add("client-page");
    clientPageDOM.id = "client-page";
    bodyContent.appendChild(clientPageDOM);
  }

  digestWebsocketMessage(event) {
    if (event) {
      const rawData = JSON.parse(event.detail.data);
      if (rawData.type === _common_data__WEBPACK_IMPORTED_MODULE_0__.SocketEnums.AGEOVERLAYPUSH) {
        const clientPage = document.getElementById("client-page");
        this._techOverlay.clearCivDivs();
        if (rawData.data.showOverlay) {
          const additionalOptions = (({ _showBlacksmithTech, _showUniversityTech, _showMonastaryTech }) => ({ _showBlacksmithTech, _showUniversityTech, _showMonastaryTech }))(rawData.data);
          rawData.data.pickedCivs.forEach((pickedCiv) => {
            if (rawData.data._autoHide) {
              clientPage.appendChild(this._techOverlay.buildElement(pickedCiv.toLowerCase(), additionalOptions, parseInt(rawData.data._autoHideDelay) * 1000));
            } else {
              clientPage.appendChild(this._techOverlay.buildElement(pickedCiv.toLowerCase(), additionalOptions, -1));
            }
          });

          if (rawData.data.pickedCivs.length > 0) {
            if (rawData.data._useSound) {
              const soundElement = this._techOverlay.buildSounds();
              clientPage.appendChild(soundElement);
              setTimeout(() => {
                soundElement.play();
              }, 1000);
            }
          }
        }
      }
    }
  }
  getRandomCiv() {
    const civNames = (0,_components_civ_images_civ_data_data_helper__WEBPACK_IMPORTED_MODULE_1__.getCivNames)();
    return civNames[this.randomIntFromInterval(0, civNames.length - 1)].toLowerCase();
  }
  randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}




/***/ }),

/***/ "./src/html-pages/default-elements.js":
/*!********************************************!*\
  !*** ./src/html-pages/default-elements.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DefaultHTMLPageElements: () => (/* binding */ DefaultHTMLPageElements)
/* harmony export */ });
class DefaultHTMLPageElements {
  _dataStore;
  constructor(dataStore) {
    this._dataStore = dataStore;
  }
  buildFooter() {
    const element = document.createElement("footer");
    element.id = "footer";
    element.classList.add("my-footer");

    const textSpanElement1 = document.createElement("span");
    textSpanElement1.innerHTML = "Created by ";

    const treeTwitchAnchor = document.createElement("a");
    treeTwitchAnchor.setAttribute("href", "https://www.twitch.tv/itsatreee");
    treeTwitchAnchor.innerHTML = "ItsATreee";

    const textSpanElement2 = document.createElement("span");
    textSpanElement2.innerHTML = ` (2019-${new Date().getFullYear()}) - `;

    const treeGithubAnchor = document.createElement("a");
    treeGithubAnchor.setAttribute("href", "https://github.com/Treee/tech-widget-overlay");
    treeGithubAnchor.innerHTML = "GitHub";
    const createdByElement = document.createElement("div");
    createdByElement.appendChild(textSpanElement1);
    createdByElement.appendChild(treeTwitchAnchor);
    createdByElement.appendChild(textSpanElement2);
    createdByElement.appendChild(treeGithubAnchor);

    const textSpanElement3 = document.createElement("span");
    textSpanElement3.innerHTML = `Age of Empires II © Microsoft Corporation. <b>AoE Tech/Map Overlay for Age of Empires II</b> was created under Microsoft's "`;

    const microsoftAnchor = document.createElement("a");
    microsoftAnchor.setAttribute("href", "https://www.xbox.com/en-us/developers/rules");
    microsoftAnchor.innerHTML = "Game Content Usage Rules";

    const textSpanElement4 = document.createElement("span");
    textSpanElement4.innerHTML = `" using assets from Age of Empires II, and it is not endorsed by or affiliated with Microsoft.`;
    const nonEndorsementElement = document.createElement("div");
    nonEndorsementElement.appendChild(textSpanElement3);
    nonEndorsementElement.appendChild(microsoftAnchor);
    nonEndorsementElement.appendChild(textSpanElement4);

    element.appendChild(createdByElement);
    element.appendChild(nonEndorsementElement);
    return element;
  }
  buildHeader() {
    const element = document.createElement("div");
    element.id = "header";
    element.classList.add("my-header");

    const adminPageRoute = document.createElement("div");
    adminPageRoute.innerHTML = "| ADMIN |";
    adminPageRoute.addEventListener("click", (event) => {
      navigator.clipboard.writeText(this._dataStore._techOverlayStore._label_userId);
      // alert(`Copied id to clipboard: ${this._dataStore._techOverlayStore._label_userId}`);
      window.location.href = `#admin/${this._dataStore._techOverlayStore._label_userId}`;
    });

    const roundManager = document.createElement("div");
    roundManager.innerHTML = "| ROUNDS |";
    roundManager.addEventListener("click", (event) => {
      //   window.location.href = "#matchset";
      alert("Not yet implemented");
    });

    const settingsPageRoute = document.createElement("div");
    settingsPageRoute.innerHTML = "| CLIENT |";
    settingsPageRoute.addEventListener("click", (event) => {
      //   window.open(`#client/${this._dataStore._techOverlayStore._label_userId}`, "_blank");
      // window.location.href = `#client/${this._dataStore._techOverlayStore._label_userId}`;
      window.open(`/client/${this._dataStore._techOverlayStore._label_userId}`, "_blank");
    });

    element.appendChild(adminPageRoute);
    element.appendChild(roundManager);
    element.appendChild(settingsPageRoute);

    return element;
  }
  buildFavIcon() {
    const element = document.createElement("link");
    element.type = "shortcut icon";
    element.href = "favicon.gif";
    return element;
  }
  initDefaultElements(hideHeader, hideFooter) {
    document.head.appendChild(this.buildFavIcon());
    if (!hideHeader) {
      document.body.before(this.buildHeader());
    }
    if (!hideFooter) {
      document.body.after(this.buildFooter());
    }
  }
}




/***/ }),

/***/ "./src/html-pages/invalid-page.js":
/*!****************************************!*\
  !*** ./src/html-pages/invalid-page.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InvalidPage: () => (/* binding */ InvalidPage)
/* harmony export */ });
class InvalidPage {
  _dataStore;
  constructor(dataStore) {
    this._dataStore = dataStore;
  }
  buildHtml() {
    const bodyContent = document.getElementById("dynamic-content");

    const invalidPage = document.createElement("div");
    invalidPage.classList.add("invalid-page");

    invalidPage.innerText = "404 Not Error Not Found";

    bodyContent.appendChild(invalidPage);
  }
}




/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _datastore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./datastore */ "./src/datastore.js");
/* harmony import */ var _myrouter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./myrouter */ "./src/myrouter.js");
/* harmony import */ var _html_pages_default_elements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./html-pages/default-elements */ "./src/html-pages/default-elements.js");
/* harmony import */ var _html_pages_invalid_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./html-pages/invalid-page */ "./src/html-pages/invalid-page.js");
/* harmony import */ var _html_pages_admin_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./html-pages/admin-page */ "./src/html-pages/admin-page.js");
/* harmony import */ var _html_pages_client_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./html-pages/client-page */ "./src/html-pages/client-page.js");
/* harmony import */ var _client_websocket_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./client-websocket.js */ "./src/client-websocket.js");










const savedData = new _datastore__WEBPACK_IMPORTED_MODULE_1__.LocalSavedData();
savedData.loadData();
savedData.saveData();

const dynamicContentDiv = document.createElement("div");
dynamicContentDiv.id = "dynamic-content";
dynamicContentDiv.classList.add("body-content");

document.body.appendChild(dynamicContentDiv);

const defaultElements = new _html_pages_default_elements__WEBPACK_IMPORTED_MODULE_3__.DefaultHTMLPageElements(savedData);
defaultElements.initDefaultElements();

const router = new _myrouter__WEBPACK_IMPORTED_MODULE_2__.MyRouter();
// router.addRoute("404", "", () => {
//   new InvalidPage(savedData).buildHtml();
// });
router.addRoute("admin", `admin/${savedData._techOverlayStore._label_userId}`, () => {
  new _html_pages_admin_page__WEBPACK_IMPORTED_MODULE_5__.AdminPage(savedData, clientWebsocket).buildHtml();
});
router.addRoute("matchset", "matchset", () => {
  new _html_pages_invalid_page__WEBPACK_IMPORTED_MODULE_4__.InvalidPage(savedData).buildHtml();
});
// router.addRoute("client", `client/${savedData._techOverlayStore._label_userId}`, () => {
//   new ClientPage(savedData, clientWebsocket).buildHtml();
// });

//Start router when content is loaded
document.addEventListener("DOMContentLoaded", function () {
  router.init();
});

const isLocal = false;
const clientWebsocket = new _client_websocket_js__WEBPACK_IMPORTED_MODULE_7__.MyWebSocketClient();
clientWebsocket.startClient(savedData._techOverlayStore._label_userId, isLocal);


/***/ }),

/***/ "./src/myrouter.js":
/*!*************************!*\
  !*** ./src/myrouter.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MyRouter: () => (/* binding */ MyRouter)
/* harmony export */ });
class MyRouter {
  _routes;
  _destroyTasks;
  _windowListener;
  constructor() {
    this._routes = [];
    this._destroyTasks = [];
    this._windowListener = null;
  }

  init() {
    // remove previous event listener if it exists
    if (this._windowListener !== null) {
      window.removeEventListener("popstate", this._windowListener);
      this._windowListener = null;
    }
    // set the new listener for pop state
    this._windowListener = window.addEventListener(
      "popstate",
      function () {
        // callback we provide being set up
        this.pickRoute.call(this);
      }.bind(this)
    );
    // call the routing when the thread is available
    setTimeout(
      function () {
        this.pickRoute.call(this);
      }.bind(this)
    );
  }
  addRoute(name, url, cb) {
    const localRoute = this._routes.find((route) => {
      return route.name === name;
    });
    url = url.replace(/\//gi, "/");
    if (localRoute === undefined) {
      this._routes.push({
        callback: cb,
        name: name.toString().toLowerCase(),
        url: url,
      });
    } else {
      localRoute.callback = cb;
      localRoute.url = url;
    }
  }
  addRoutes(routes) {
    if (routes === undefined) {
      routes = [];
    }
    routes.forEach((route) => {
      this._routes.addRoute(route.name, route.url, route.callback);
    });
  }
  removeRoute(name) {
    name = name.toString().toLowerCase();
    this._routes = this._routes.filter((route) => {
      return route.name != name;
    });
  }
  pickRoute() {
    // debug this
    const hash = window.location.hash.substring(1).replace(/\//gi, "/");
    let route = this._routes.find((route) => {
      return route.url === hash;
    });
    // always default to 0
    if (route === undefined) {
      if (this._routes[0] === undefined) {
        console.error("empty routes list. add a route");
      } else {
        route = this._routes[0];
      }
    }
    this._destroyTasks.forEach((task) => {
      task();
    });
    document.getElementById("dynamic-content").innerHTML = "";
    this._destroyTasks = [];
    if (route !== undefined) {
      route.callback.call(window);
    }
  }
  onScopeDestroy(cb) {
    this._destroyTasks.push(cb);
  }
}



/***/ }),

/***/ "./src/assets/fonts/IronstrikeSemiBold.otf":
/*!*************************************************!*\
  !*** ./src/assets/fonts/IronstrikeSemiBold.otf ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/fonts/IronstrikeSemiBold.f4eb33b653a191dd07a5.otf";

/***/ }),

/***/ "./src/assets/images/ingame_diplomacy-menu_bg_full.png":
/*!*************************************************************!*\
  !*** ./src/assets/images/ingame_diplomacy-menu_bg_full.png ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/ingame_diplomacy-menu_bg_full.35e71a34d7b98dff78d0.png";

/***/ }),

/***/ "./src/components/civ-images/civ-emblems/aztecs.png":
/*!**********************************************************!*\
  !*** ./src/components/civ-images/civ-emblems/aztecs.png ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-emblems/aztecs.9732764efc6759e33254.png";

/***/ }),

/***/ "./src/components/civ-images/civ-emblems/bengalis.png":
/*!************************************************************!*\
  !*** ./src/components/civ-images/civ-emblems/bengalis.png ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-emblems/bengalis.66beb8fe864e59a47525.png";

/***/ }),

/***/ "./src/components/civ-images/civ-emblems/berbers.png":
/*!***********************************************************!*\
  !*** ./src/components/civ-images/civ-emblems/berbers.png ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-emblems/berbers.bd9b97f5c9b200911533.png";

/***/ }),

/***/ "./src/components/civ-images/civ-emblems/bohemians.png":
/*!*************************************************************!*\
  !*** ./src/components/civ-images/civ-emblems/bohemians.png ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-emblems/bohemians.68eb99994902782c0c2b.png";

/***/ }),

/***/ "./src/components/civ-images/civ-emblems/britons.png":
/*!***********************************************************!*\
  !*** ./src/components/civ-images/civ-emblems/britons.png ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-emblems/britons.3601134221cd6bb9a7e3.png";

/***/ }),

/***/ "./src/components/civ-images/civ-emblems/bulgarians.png":
/*!**************************************************************!*\
  !*** ./src/components/civ-images/civ-emblems/bulgarians.png ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-emblems/bulgarians.8fe37efbd99da12e6b20.png";

/***/ }),

/***/ "./src/components/civ-images/civ-emblems/burgundians.png":
/*!***************************************************************!*\
  !*** ./src/components/civ-images/civ-emblems/burgundians.png ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-emblems/burgundians.f250e51294a2adde3102.png";

/***/ }),

/***/ "./src/components/civ-images/civ-emblems/burmese.png":
/*!***********************************************************!*\
  !*** ./src/components/civ-images/civ-emblems/burmese.png ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-emblems/burmese.86faaf6dfab47a71844f.png";

/***/ }),

/***/ "./src/components/civ-images/civ-emblems/byzantines.png":
/*!**************************************************************!*\
  !*** ./src/components/civ-images/civ-emblems/byzantines.png ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-emblems/byzantines.02cd01ab405bee58df03.png";

/***/ }),

/***/ "./src/components/civ-images/civ-emblems/celts.png":
/*!*********************************************************!*\
  !*** ./src/components/civ-images/civ-emblems/celts.png ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-emblems/celts.cf88e4a0e218c0037494.png";

/***/ }),

/***/ "./src/components/civ-images/civ-emblems/chinese.png":
/*!***********************************************************!*\
  !*** ./src/components/civ-images/civ-emblems/chinese.png ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-emblems/chinese.795488409501fa75360a.png";

/***/ }),

/***/ "./src/components/civ-images/civ-emblems/cumans.png":
/*!**********************************************************!*\
  !*** ./src/components/civ-images/civ-emblems/cumans.png ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-emblems/cumans.d68c263efc2de9475917.png";

/***/ }),

/***/ "./src/components/civ-images/civ-emblems/dravidians.png":
/*!**************************************************************!*\
  !*** ./src/components/civ-images/civ-emblems/dravidians.png ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-emblems/dravidians.166328558b581b328ed4.png";

/***/ }),

/***/ "./src/components/civ-images/civ-emblems/ethiopians.png":
/*!**************************************************************!*\
  !*** ./src/components/civ-images/civ-emblems/ethiopians.png ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-emblems/ethiopians.0bc7cf88ce949d2332a8.png";

/***/ }),

/***/ "./src/components/civ-images/civ-emblems/franks.png":
/*!**********************************************************!*\
  !*** ./src/components/civ-images/civ-emblems/franks.png ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-emblems/franks.d121064c25917a6a1426.png";

/***/ }),

/***/ "./src/components/civ-images/civ-emblems/goths.png":
/*!*********************************************************!*\
  !*** ./src/components/civ-images/civ-emblems/goths.png ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-emblems/goths.82ac29aa9c374c8c6ba1.png";

/***/ }),

/***/ "./src/components/civ-images/civ-emblems/gurjaras.png":
/*!************************************************************!*\
  !*** ./src/components/civ-images/civ-emblems/gurjaras.png ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-emblems/gurjaras.18b565578abb5f967511.png";

/***/ }),

/***/ "./src/components/civ-images/civ-emblems/hindustanis.png":
/*!***************************************************************!*\
  !*** ./src/components/civ-images/civ-emblems/hindustanis.png ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-emblems/hindustanis.599b3cffc5d928cff8ec.png";

/***/ }),

/***/ "./src/components/civ-images/civ-emblems/huns.png":
/*!********************************************************!*\
  !*** ./src/components/civ-images/civ-emblems/huns.png ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-emblems/huns.5415c7e969d50d2193ee.png";

/***/ }),

/***/ "./src/components/civ-images/civ-emblems/incas.png":
/*!*********************************************************!*\
  !*** ./src/components/civ-images/civ-emblems/incas.png ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-emblems/incas.b8fc1c289a670a42f16c.png";

/***/ }),

/***/ "./src/components/civ-images/civ-emblems/italians.png":
/*!************************************************************!*\
  !*** ./src/components/civ-images/civ-emblems/italians.png ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-emblems/italians.125f3556916a51dd121e.png";

/***/ }),

/***/ "./src/components/civ-images/civ-emblems/japanese.png":
/*!************************************************************!*\
  !*** ./src/components/civ-images/civ-emblems/japanese.png ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-emblems/japanese.f1d7a512a7ba5d6644cf.png";

/***/ }),

/***/ "./src/components/civ-images/civ-emblems/khmer.png":
/*!*********************************************************!*\
  !*** ./src/components/civ-images/civ-emblems/khmer.png ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-emblems/khmer.a383038ef14a6d9eb83a.png";

/***/ }),

/***/ "./src/components/civ-images/civ-emblems/koreans.png":
/*!***********************************************************!*\
  !*** ./src/components/civ-images/civ-emblems/koreans.png ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-emblems/koreans.1a1c490e85eb37ee31eb.png";

/***/ }),

/***/ "./src/components/civ-images/civ-emblems/lithuanians.png":
/*!***************************************************************!*\
  !*** ./src/components/civ-images/civ-emblems/lithuanians.png ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-emblems/lithuanians.25866767f1c30256f0fb.png";

/***/ }),

/***/ "./src/components/civ-images/civ-emblems/magyars.png":
/*!***********************************************************!*\
  !*** ./src/components/civ-images/civ-emblems/magyars.png ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-emblems/magyars.7f03c45a1db51b0415fc.png";

/***/ }),

/***/ "./src/components/civ-images/civ-emblems/malay.png":
/*!*********************************************************!*\
  !*** ./src/components/civ-images/civ-emblems/malay.png ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-emblems/malay.1a46470f0cbe09bd2f4d.png";

/***/ }),

/***/ "./src/components/civ-images/civ-emblems/malians.png":
/*!***********************************************************!*\
  !*** ./src/components/civ-images/civ-emblems/malians.png ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-emblems/malians.138594a51045038d98f5.png";

/***/ }),

/***/ "./src/components/civ-images/civ-emblems/mayans.png":
/*!**********************************************************!*\
  !*** ./src/components/civ-images/civ-emblems/mayans.png ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-emblems/mayans.131666549e9fa72aa517.png";

/***/ }),

/***/ "./src/components/civ-images/civ-emblems/mongols.png":
/*!***********************************************************!*\
  !*** ./src/components/civ-images/civ-emblems/mongols.png ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-emblems/mongols.acc36d2714e43f823714.png";

/***/ }),

/***/ "./src/components/civ-images/civ-emblems/persians.png":
/*!************************************************************!*\
  !*** ./src/components/civ-images/civ-emblems/persians.png ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-emblems/persians.315c6c87f6d0fed2cd56.png";

/***/ }),

/***/ "./src/components/civ-images/civ-emblems/poles.png":
/*!*********************************************************!*\
  !*** ./src/components/civ-images/civ-emblems/poles.png ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-emblems/poles.a9c1d483698fd976896c.png";

/***/ }),

/***/ "./src/components/civ-images/civ-emblems/portuguese.png":
/*!**************************************************************!*\
  !*** ./src/components/civ-images/civ-emblems/portuguese.png ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-emblems/portuguese.4c74a0859100b943ab65.png";

/***/ }),

/***/ "./src/components/civ-images/civ-emblems/romans.png":
/*!**********************************************************!*\
  !*** ./src/components/civ-images/civ-emblems/romans.png ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-emblems/romans.7e1cb3c3eff2e448943d.png";

/***/ }),

/***/ "./src/components/civ-images/civ-emblems/saracens.png":
/*!************************************************************!*\
  !*** ./src/components/civ-images/civ-emblems/saracens.png ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-emblems/saracens.9c69cb64f64b06dde481.png";

/***/ }),

/***/ "./src/components/civ-images/civ-emblems/sicilians.png":
/*!*************************************************************!*\
  !*** ./src/components/civ-images/civ-emblems/sicilians.png ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-emblems/sicilians.bd496568cc1ec1fb6812.png";

/***/ }),

/***/ "./src/components/civ-images/civ-emblems/slavs.png":
/*!*********************************************************!*\
  !*** ./src/components/civ-images/civ-emblems/slavs.png ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-emblems/slavs.3bd9ae0cffc819427378.png";

/***/ }),

/***/ "./src/components/civ-images/civ-emblems/spanish.png":
/*!***********************************************************!*\
  !*** ./src/components/civ-images/civ-emblems/spanish.png ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-emblems/spanish.9787df2a20b41ffe5f60.png";

/***/ }),

/***/ "./src/components/civ-images/civ-emblems/tatars.png":
/*!**********************************************************!*\
  !*** ./src/components/civ-images/civ-emblems/tatars.png ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-emblems/tatars.b6224d14b56bd7bdb4d7.png";

/***/ }),

/***/ "./src/components/civ-images/civ-emblems/teutons.png":
/*!***********************************************************!*\
  !*** ./src/components/civ-images/civ-emblems/teutons.png ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-emblems/teutons.01115c8e02967246b5aa.png";

/***/ }),

/***/ "./src/components/civ-images/civ-emblems/turks.png":
/*!*********************************************************!*\
  !*** ./src/components/civ-images/civ-emblems/turks.png ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-emblems/turks.5f23f032e81c22c850a1.png";

/***/ }),

/***/ "./src/components/civ-images/civ-emblems/vietnamese.png":
/*!**************************************************************!*\
  !*** ./src/components/civ-images/civ-emblems/vietnamese.png ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-emblems/vietnamese.c9b5c620046b35554f88.png";

/***/ }),

/***/ "./src/components/civ-images/civ-emblems/vikings.png":
/*!***********************************************************!*\
  !*** ./src/components/civ-images/civ-emblems/vikings.png ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-emblems/vikings.35758fdeb744d7f8095e.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/aztecs.png":
/*!***************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/aztecs.png ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/aztecs.4dfeb8b4670df00539cf.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/aztecs.tp.png":
/*!******************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/aztecs.tp.png ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/aztecs.tp.03ac8826c9d1528be13b.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/bengalis.png":
/*!*****************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/bengalis.png ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/bengalis.c3a407af0174cad10551.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/bengalis.tp.png":
/*!********************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/bengalis.tp.png ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/bengalis.tp.3255b30d1dc98a9e0318.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/berbers.png":
/*!****************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/berbers.png ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/berbers.019fed284e8ec9fc49ca.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/berbers.tp.png":
/*!*******************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/berbers.tp.png ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/berbers.tp.e9d75540030cd757d547.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/bohemians.png":
/*!******************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/bohemians.png ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/bohemians.2b6661a0573dc5668c58.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/bohemians.tp.png":
/*!*********************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/bohemians.tp.png ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/bohemians.tp.3ec06d0f4fc063ee51f5.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/britons.png":
/*!****************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/britons.png ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/britons.87ba17a8c8dd8aa49e17.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/britons.tp.png":
/*!*******************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/britons.tp.png ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/britons.tp.dc6ecf7a6feadc920339.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/bulgarians.png":
/*!*******************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/bulgarians.png ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/bulgarians.3e71677121597b7a3d69.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/bulgarians.tp.png":
/*!**********************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/bulgarians.tp.png ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/bulgarians.tp.0aca1fc0434cba89a64f.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/burgundians.png":
/*!********************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/burgundians.png ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/burgundians.e04e5455e16b3d2c3bb5.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/burgundians.tp.png":
/*!***********************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/burgundians.tp.png ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/burgundians.tp.0397f7294a76834a730e.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/burmese.png":
/*!****************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/burmese.png ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/burmese.f82d50396e5c47cfabf0.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/burmese.tp.png":
/*!*******************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/burmese.tp.png ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/burmese.tp.e8a48f30b7cdb11a8dff.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/byzantines.png":
/*!*******************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/byzantines.png ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/byzantines.7ee2f1b41525b99be4e0.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/byzantines.tp.png":
/*!**********************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/byzantines.tp.png ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/byzantines.tp.55d7968a9874065b7e27.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/celts.png":
/*!**************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/celts.png ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/celts.c253d13d70271703ec0d.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/celts.tp.png":
/*!*****************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/celts.tp.png ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/celts.tp.4e8fa4f331c94e11890d.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/chinese.png":
/*!****************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/chinese.png ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/chinese.2d2f00061b040c2de09c.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/chinese.tp.png":
/*!*******************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/chinese.tp.png ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/chinese.tp.84501b1499c45c32f416.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/cumans.png":
/*!***************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/cumans.png ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/cumans.54d0aa80000e1ac0d406.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/cumans.tp.png":
/*!******************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/cumans.tp.png ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/cumans.tp.f7f2a96507d58665a960.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/dravidians.png":
/*!*******************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/dravidians.png ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/dravidians.0325136986c7ff6fa9c8.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/dravidians.tp.png":
/*!**********************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/dravidians.tp.png ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/dravidians.tp.b4e6b9f1beb3dbe3a604.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/ethiopians.png":
/*!*******************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/ethiopians.png ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/ethiopians.604e09200e529873cca9.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/ethiopians.tp.png":
/*!**********************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/ethiopians.tp.png ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/ethiopians.tp.ed81ad17b308c59af207.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/franks.png":
/*!***************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/franks.png ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/franks.90291a47b830373e6821.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/franks.tp.png":
/*!******************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/franks.tp.png ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/franks.tp.05a513362c3cca542ab5.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/goths.png":
/*!**************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/goths.png ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/goths.91470ea50f72e184ac53.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/goths.tp.png":
/*!*****************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/goths.tp.png ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/goths.tp.9097b9db07579e874b19.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/gurjaras.png":
/*!*****************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/gurjaras.png ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/gurjaras.3ea61497d6585c277a8c.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/gurjaras.tp.png":
/*!********************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/gurjaras.tp.png ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/gurjaras.tp.bff7e4f38f55b55bd850.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/hindustanis.png":
/*!********************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/hindustanis.png ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/hindustanis.01db84d9e9300394e18c.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/hindustanis.tp.png":
/*!***********************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/hindustanis.tp.png ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/hindustanis.tp.a74d5c37aa19c06717cf.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/huns.png":
/*!*************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/huns.png ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/huns.2d1011adfa486bbf6df3.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/huns.tp.png":
/*!****************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/huns.tp.png ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/huns.tp.1fda850f925f25d852ce.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/incas.png":
/*!**************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/incas.png ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/incas.a38e13016ac65147d895.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/incas.tp.png":
/*!*****************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/incas.tp.png ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/incas.tp.20bff38a6f3c48ec9b1a.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/indians.png":
/*!****************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/indians.png ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/indians.5dc534ba5696e7d09860.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/indians.tp.png":
/*!*******************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/indians.tp.png ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/indians.tp.e02619d82ed7abed914c.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/italians.png":
/*!*****************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/italians.png ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/italians.3c7413f16a17fa1ed358.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/italians.tp.png":
/*!********************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/italians.tp.png ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/italians.tp.c7d711d4363cf01d8dc6.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/japanese.png":
/*!*****************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/japanese.png ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/japanese.c469c6a292eb93a37c8e.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/japanese.tp.png":
/*!********************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/japanese.tp.png ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/japanese.tp.bdadf124b677d9e84123.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/khmer.png":
/*!**************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/khmer.png ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/khmer.73be83026f0c0af56a04.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/khmer.tp.png":
/*!*****************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/khmer.tp.png ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/khmer.tp.72a6f784a8cb13268167.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/koreans.png":
/*!****************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/koreans.png ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/koreans.f3dbd9fd2c6070e45ab7.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/koreans.tp.png":
/*!*******************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/koreans.tp.png ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/koreans.tp.b913364a71edc64a43f5.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/lithuanians.png":
/*!********************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/lithuanians.png ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/lithuanians.354d9e5266ba93b30980.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/lithuanians.tp.png":
/*!***********************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/lithuanians.tp.png ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/lithuanians.tp.2a897b497e4fe355de41.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/magyars.png":
/*!****************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/magyars.png ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/magyars.dc4583004faa77cf1e8c.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/magyars.tp.png":
/*!*******************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/magyars.tp.png ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/magyars.tp.6d0a433ecce4210defc7.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/malay.png":
/*!**************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/malay.png ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/malay.c80aa06560fe47fe6b2d.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/malay.tp.png":
/*!*****************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/malay.tp.png ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/malay.tp.94254d5590249e21b40d.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/malians.png":
/*!****************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/malians.png ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/malians.c928e7c143bfaae607b8.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/malians.tp.png":
/*!*******************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/malians.tp.png ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/malians.tp.71cb8fa04107ceaf83e5.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/mayans.png":
/*!***************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/mayans.png ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/mayans.1f52f6bdd129dc88ea95.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/mayans.tp.png":
/*!******************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/mayans.tp.png ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/mayans.tp.63edee04e30531f729f6.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/mongols.png":
/*!****************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/mongols.png ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/mongols.47520fcd60a3af3db974.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/mongols.tp.png":
/*!*******************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/mongols.tp.png ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/mongols.tp.a49cc408d24ce906e983.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/persians.png":
/*!*****************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/persians.png ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/persians.1b6f0ac263d6f87852b2.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/persians.tp.png":
/*!********************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/persians.tp.png ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/persians.tp.a3cf9b711cd8d789a681.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/poles.png":
/*!**************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/poles.png ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/poles.f202da4b4d9f2b0b0e14.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/poles.tp.png":
/*!*****************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/poles.tp.png ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/poles.tp.a10da2a07fdf14f5acb6.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/portuguese.png":
/*!*******************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/portuguese.png ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/portuguese.278226df426c2ac48dce.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/portuguese.tp.png":
/*!**********************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/portuguese.tp.png ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/portuguese.tp.db3f5ac56b445f6dabe4.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/romans.png":
/*!***************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/romans.png ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/romans.565cc16f8d2f505b4455.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/romans.tp.png":
/*!******************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/romans.tp.png ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/romans.tp.ce19a75475db88a8102e.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/saracens.png":
/*!*****************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/saracens.png ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/saracens.3b5391330965d9a36c08.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/saracens.tp.png":
/*!********************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/saracens.tp.png ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/saracens.tp.281574744222893b614e.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/sicilians.png":
/*!******************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/sicilians.png ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/sicilians.05479eb5f88bb3d3fe07.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/sicilians.tp.png":
/*!*********************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/sicilians.tp.png ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/sicilians.tp.cb87ee247b81f9f4952a.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/slavs.png":
/*!**************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/slavs.png ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/slavs.36be54f28c4bff15a8fe.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/slavs.tp.png":
/*!*****************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/slavs.tp.png ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/slavs.tp.a3e8463cec4de61e4836.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/spanish.png":
/*!****************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/spanish.png ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/spanish.86ed4328c15269f1ab73.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/spanish.tp.png":
/*!*******************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/spanish.tp.png ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/spanish.tp.814d47c42faed4a4514e.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/tatars.png":
/*!***************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/tatars.png ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/tatars.d46a9529e03cdc0c4f5a.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/tatars.tp.png":
/*!******************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/tatars.tp.png ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/tatars.tp.25529e47647046b5dea5.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/teutons.png":
/*!****************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/teutons.png ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/teutons.bc9963c5eb4de61a0c46.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/teutons.tp.png":
/*!*******************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/teutons.tp.png ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/teutons.tp.59ac683eb819b24c58f5.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/turks.png":
/*!**************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/turks.png ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/turks.4b2694e655b7ca1a90f3.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/turks.tp.png":
/*!*****************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/turks.tp.png ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/turks.tp.0245f589b0e309093278.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/vietnamese.png":
/*!*******************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/vietnamese.png ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/vietnamese.7174e205fb8b8783ee2b.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/vietnamese.tp.png":
/*!**********************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/vietnamese.tp.png ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/vietnamese.tp.b92f46c65d7f54c67d85.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/vikings.png":
/*!****************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/vikings.png ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/vikings.fe83a5c1655e701da45e.png";

/***/ }),

/***/ "./src/components/civ-images/civ-unique-units/vikings.tp.png":
/*!*******************************************************************!*\
  !*** ./src/components/civ-images/civ-unique-units/vikings.tp.png ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/civ-unique-units/vikings.tp.1634a6554348ebb6e26c.png";

/***/ }),

/***/ "./src/components/civ-images/icons/aztecs.png":
/*!****************************************************!*\
  !*** ./src/components/civ-images/icons/aztecs.png ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/icons/aztecs.260fe25c924f8d9b9ca1.png";

/***/ }),

/***/ "./src/components/civ-images/icons/bengalis.png":
/*!******************************************************!*\
  !*** ./src/components/civ-images/icons/bengalis.png ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/icons/bengalis.f0e8b9eb93b6e74a7eb6.png";

/***/ }),

/***/ "./src/components/civ-images/icons/berbers.png":
/*!*****************************************************!*\
  !*** ./src/components/civ-images/icons/berbers.png ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/icons/berbers.e3660465328a6670b06b.png";

/***/ }),

/***/ "./src/components/civ-images/icons/bohemians.png":
/*!*******************************************************!*\
  !*** ./src/components/civ-images/icons/bohemians.png ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/icons/bohemians.8e0ec595b57db00e9ad5.png";

/***/ }),

/***/ "./src/components/civ-images/icons/britons.png":
/*!*****************************************************!*\
  !*** ./src/components/civ-images/icons/britons.png ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/icons/britons.493a8372f974df940629.png";

/***/ }),

/***/ "./src/components/civ-images/icons/bulgarians.png":
/*!********************************************************!*\
  !*** ./src/components/civ-images/icons/bulgarians.png ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/icons/bulgarians.26c485acecdf84f358ea.png";

/***/ }),

/***/ "./src/components/civ-images/icons/burgundians.png":
/*!*********************************************************!*\
  !*** ./src/components/civ-images/icons/burgundians.png ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/icons/burgundians.499f624fc5530752f602.png";

/***/ }),

/***/ "./src/components/civ-images/icons/burmese.png":
/*!*****************************************************!*\
  !*** ./src/components/civ-images/icons/burmese.png ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/icons/burmese.9dc8ae6d6306a365ed07.png";

/***/ }),

/***/ "./src/components/civ-images/icons/byzantines.png":
/*!********************************************************!*\
  !*** ./src/components/civ-images/icons/byzantines.png ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/icons/byzantines.77661876a69f2e9d8be5.png";

/***/ }),

/***/ "./src/components/civ-images/icons/celts.png":
/*!***************************************************!*\
  !*** ./src/components/civ-images/icons/celts.png ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/icons/celts.7c3dba45dfe659a39381.png";

/***/ }),

/***/ "./src/components/civ-images/icons/chinese.png":
/*!*****************************************************!*\
  !*** ./src/components/civ-images/icons/chinese.png ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/icons/chinese.feaee73a189404920a17.png";

/***/ }),

/***/ "./src/components/civ-images/icons/cumans.png":
/*!****************************************************!*\
  !*** ./src/components/civ-images/icons/cumans.png ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/icons/cumans.1535bafe9d078d3ba5f0.png";

/***/ }),

/***/ "./src/components/civ-images/icons/dravidians.png":
/*!********************************************************!*\
  !*** ./src/components/civ-images/icons/dravidians.png ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/icons/dravidians.2f12158e2d797638d8ce.png";

/***/ }),

/***/ "./src/components/civ-images/icons/ethiopians.png":
/*!********************************************************!*\
  !*** ./src/components/civ-images/icons/ethiopians.png ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/icons/ethiopians.1f191d5c9e29e23ca1d7.png";

/***/ }),

/***/ "./src/components/civ-images/icons/franks.png":
/*!****************************************************!*\
  !*** ./src/components/civ-images/icons/franks.png ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/icons/franks.36557b7b31d51e01af00.png";

/***/ }),

/***/ "./src/components/civ-images/icons/goths.png":
/*!***************************************************!*\
  !*** ./src/components/civ-images/icons/goths.png ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/icons/goths.dfaa7b8cab48e90c7874.png";

/***/ }),

/***/ "./src/components/civ-images/icons/gurjaras.png":
/*!******************************************************!*\
  !*** ./src/components/civ-images/icons/gurjaras.png ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/icons/gurjaras.68a45f5fbbcd689c5586.png";

/***/ }),

/***/ "./src/components/civ-images/icons/hindustanis.png":
/*!*********************************************************!*\
  !*** ./src/components/civ-images/icons/hindustanis.png ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/icons/hindustanis.5d5779d3bcb4c51cc5ec.png";

/***/ }),

/***/ "./src/components/civ-images/icons/huns.png":
/*!**************************************************!*\
  !*** ./src/components/civ-images/icons/huns.png ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/icons/huns.a0d30162979372cffc42.png";

/***/ }),

/***/ "./src/components/civ-images/icons/incas.png":
/*!***************************************************!*\
  !*** ./src/components/civ-images/icons/incas.png ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/icons/incas.a4cba3247a7824ae28c9.png";

/***/ }),

/***/ "./src/components/civ-images/icons/italians.png":
/*!******************************************************!*\
  !*** ./src/components/civ-images/icons/italians.png ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/icons/italians.cfabbdff777972c931fa.png";

/***/ }),

/***/ "./src/components/civ-images/icons/japanese.png":
/*!******************************************************!*\
  !*** ./src/components/civ-images/icons/japanese.png ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/icons/japanese.ae860f727bc0b01fcc0b.png";

/***/ }),

/***/ "./src/components/civ-images/icons/khmer.png":
/*!***************************************************!*\
  !*** ./src/components/civ-images/icons/khmer.png ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/icons/khmer.124dde1af3eae7d9ec37.png";

/***/ }),

/***/ "./src/components/civ-images/icons/koreans.png":
/*!*****************************************************!*\
  !*** ./src/components/civ-images/icons/koreans.png ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/icons/koreans.ab0bf2760e21dd1e42a1.png";

/***/ }),

/***/ "./src/components/civ-images/icons/lithuanians.png":
/*!*********************************************************!*\
  !*** ./src/components/civ-images/icons/lithuanians.png ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/icons/lithuanians.adabee2b25f1578dafe3.png";

/***/ }),

/***/ "./src/components/civ-images/icons/magyars.png":
/*!*****************************************************!*\
  !*** ./src/components/civ-images/icons/magyars.png ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/icons/magyars.ded7dc5bb0eedbe6749e.png";

/***/ }),

/***/ "./src/components/civ-images/icons/malay.png":
/*!***************************************************!*\
  !*** ./src/components/civ-images/icons/malay.png ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/icons/malay.e27b42ba26f6ad53c0ba.png";

/***/ }),

/***/ "./src/components/civ-images/icons/malians.png":
/*!*****************************************************!*\
  !*** ./src/components/civ-images/icons/malians.png ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/icons/malians.f95dff6e1da180e8eedc.png";

/***/ }),

/***/ "./src/components/civ-images/icons/mayans.png":
/*!****************************************************!*\
  !*** ./src/components/civ-images/icons/mayans.png ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/icons/mayans.7ef56629fc2d27cee7a5.png";

/***/ }),

/***/ "./src/components/civ-images/icons/mongols.png":
/*!*****************************************************!*\
  !*** ./src/components/civ-images/icons/mongols.png ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/icons/mongols.0db40b5bb3e62369ab25.png";

/***/ }),

/***/ "./src/components/civ-images/icons/persians.png":
/*!******************************************************!*\
  !*** ./src/components/civ-images/icons/persians.png ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/icons/persians.0dd804e5be1c4502d8f5.png";

/***/ }),

/***/ "./src/components/civ-images/icons/poles.png":
/*!***************************************************!*\
  !*** ./src/components/civ-images/icons/poles.png ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/icons/poles.4299de69666d2151b385.png";

/***/ }),

/***/ "./src/components/civ-images/icons/portuguese.png":
/*!********************************************************!*\
  !*** ./src/components/civ-images/icons/portuguese.png ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/icons/portuguese.c9605ca0aede4443bafd.png";

/***/ }),

/***/ "./src/components/civ-images/icons/romans.png":
/*!****************************************************!*\
  !*** ./src/components/civ-images/icons/romans.png ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/icons/romans.d36c52464b5009b7b121.png";

/***/ }),

/***/ "./src/components/civ-images/icons/saracens.png":
/*!******************************************************!*\
  !*** ./src/components/civ-images/icons/saracens.png ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/icons/saracens.011c595876226133f87b.png";

/***/ }),

/***/ "./src/components/civ-images/icons/sicilians.png":
/*!*******************************************************!*\
  !*** ./src/components/civ-images/icons/sicilians.png ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/icons/sicilians.0cea8a2c133c16c2a897.png";

/***/ }),

/***/ "./src/components/civ-images/icons/slavs.png":
/*!***************************************************!*\
  !*** ./src/components/civ-images/icons/slavs.png ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/icons/slavs.9d071d0d219d131e43a9.png";

/***/ }),

/***/ "./src/components/civ-images/icons/spanish.png":
/*!*****************************************************!*\
  !*** ./src/components/civ-images/icons/spanish.png ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/icons/spanish.3a71e399a83bc8e48f93.png";

/***/ }),

/***/ "./src/components/civ-images/icons/tatars.png":
/*!****************************************************!*\
  !*** ./src/components/civ-images/icons/tatars.png ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/icons/tatars.0f0dfe10175791135efc.png";

/***/ }),

/***/ "./src/components/civ-images/icons/teutons.png":
/*!*****************************************************!*\
  !*** ./src/components/civ-images/icons/teutons.png ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/icons/teutons.7796320dc217c93f7f11.png";

/***/ }),

/***/ "./src/components/civ-images/icons/turks.png":
/*!***************************************************!*\
  !*** ./src/components/civ-images/icons/turks.png ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/icons/turks.5580b3d06ebce613167c.png";

/***/ }),

/***/ "./src/components/civ-images/icons/vietnamese.png":
/*!********************************************************!*\
  !*** ./src/components/civ-images/icons/vietnamese.png ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/icons/vietnamese.6f981cc2e0d03491ad8d.png";

/***/ }),

/***/ "./src/components/civ-images/icons/vikings.png":
/*!*****************************************************!*\
  !*** ./src/components/civ-images/icons/vikings.png ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/icons/vikings.b04825623a2ec73552a7.png";

/***/ }),

/***/ "./src/components/civ-images/misc/veto.png":
/*!*************************************************!*\
  !*** ./src/components/civ-images/misc/veto.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/misc/veto.c781290f5c22243ff027.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/arbalester.png":
/*!****************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/arbalester.png ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/arbalester.88b7299e05a27698d944.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/architecture.png":
/*!******************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/architecture.png ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/architecture.0bf65e88d4826ff90bda.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/arrowslits.png":
/*!****************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/arrowslits.png ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/arrowslits.dbe3eb14e55d43b8751d.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/arson.png":
/*!***********************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/arson.png ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/arson.be97f5d5f162129ea733.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/atonement.png":
/*!***************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/atonement.png ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/atonement.4423a48124c2ba66a9e7.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/ballistics.png":
/*!****************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/ballistics.png ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/ballistics.a8b9547e078b04ebf12b.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/blast furnace.png":
/*!*******************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/blast furnace.png ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/blast furnace.240fba3f710e7bd8a6ad.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/block printing.png":
/*!********************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/block printing.png ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/block printing.134f4f03e2e1c2ba1cfb.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/bloodlines.png":
/*!****************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/bloodlines.png ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/bloodlines.1aedcf05b25ce758e4cf.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/bodkin arrow.png":
/*!******************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/bodkin arrow.png ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/bodkin arrow.814b45805a1851544599.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/bombard tower.png":
/*!*******************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/bombard tower.png ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/bombard tower.5bd7b24afcbc5e145c18.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/bow saw.png":
/*!*************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/bow saw.png ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/bow saw.820f19703b6cc2578a2e.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/bracer.png":
/*!************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/bracer.png ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/bracer.135e545aa6e429b1411d.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/cannon galleon.png":
/*!********************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/cannon galleon.png ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/cannon galleon.b9f339198d6ceb91205c.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/capped ram.png":
/*!****************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/capped ram.png ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/capped ram.72e362b809570a16b491.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/careening.png":
/*!***************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/careening.png ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/careening.dc9ddd1075527ad106fb.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/castle.png":
/*!************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/castle.png ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/castle.ad050d2bb4d29bfc33b9.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/castle.tp.png":
/*!***************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/castle.tp.png ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/castle.tp.fc6588af10fd6d44bfcb.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/cavalier.png":
/*!**************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/cavalier.png ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/cavalier.0c90f42af1b625a59158.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/chain barding armor.png":
/*!*************************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/chain barding armor.png ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/chain barding armor.b2f69bac849df2c20663.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/chain mail armor.png":
/*!**********************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/chain mail armor.png ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/chain mail armor.f48ac5990e39cfad1258.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/champion.png":
/*!**************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/champion.png ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/champion.cc29c7d78ac1b0235052.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/chemistry.png":
/*!***************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/chemistry.png ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/chemistry.b59b4564a9e12f059e96.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/crop rotation.png":
/*!*******************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/crop rotation.png ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/crop rotation.9dbd271799c4ea4c09b2.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/crossbowman.png":
/*!*****************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/crossbowman.png ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/crossbowman.a1d2502c9396f207d20d.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/dark.png":
/*!**********************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/dark.png ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/dark.0f2de22c32a171ea3846.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/dark.tp.png":
/*!*************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/dark.tp.png ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/dark.tp.f0eb19d38e1b57f51934.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/double-bit axe.png":
/*!********************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/double-bit axe.png ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/double-bit axe.3e0d774d7521ad6dae8f.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/dry dock.png":
/*!**************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/dry dock.png ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/dry dock.45ad4edc4ff3c17b3a54.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/eagle warrior.png":
/*!*******************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/eagle warrior.png ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/eagle warrior.41ca167028502b1731b8.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/elite battle elephant.png":
/*!***************************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/elite battle elephant.png ***!
  \***************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/elite battle elephant.73efd5d3c4853209b454.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/elite cannon galleon.png":
/*!**************************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/elite cannon galleon.png ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/elite cannon galleon.9e319c0d4d8893335818.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/elite eagle warrior.png":
/*!*************************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/elite eagle warrior.png ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/elite eagle warrior.cb0767c5a9edce499afe.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/elite skirmisher.png":
/*!**********************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/elite skirmisher.png ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/elite skirmisher.87431f28e149a81bae79.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/elite steppe lancer.png":
/*!*************************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/elite steppe lancer.png ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/elite steppe lancer.bedf1b6035a81fd5185b.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/elite unique unit.png":
/*!***********************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/elite unique unit.png ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/elite unique unit.70fd78b945770f48b2aa.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/faith.png":
/*!***********************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/faith.png ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/faith.20e77f223c4316757c7e.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/fast fire ship.png":
/*!********************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/fast fire ship.png ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/fast fire ship.0c643d43f500d4a6a9b8.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/fervor.png":
/*!************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/fervor.png ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/fervor.d1eb7a23b61a58bcb36d.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/feudal.png":
/*!************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/feudal.png ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/feudal.c204290755f60e8863a9.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/feudal.tp.png":
/*!***************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/feudal.tp.png ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/feudal.tp.45a4f0a4784969fa0171.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/fletching.png":
/*!***************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/fletching.png ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/fletching.b7df2abc285c55f5222c.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/forging.png":
/*!*************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/forging.png ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/forging.65a1cda14f4aa43f1a19.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/fortified wall.png":
/*!********************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/fortified wall.png ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/fortified wall.119c26558dfe9ff25129.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/galleon.png":
/*!*************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/galleon.png ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/galleon.85589cf340c21597e162.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/gillnets.png":
/*!**************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/gillnets.png ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/gillnets.1ac2fea01de3922972d3.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/gold mining.png":
/*!*****************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/gold mining.png ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/gold mining.7143053ba5e39c24426e.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/gold shaft mining.png":
/*!***********************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/gold shaft mining.png ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/gold shaft mining.b5a8839253603300536c.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/guard tower.png":
/*!*****************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/guard tower.png ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/guard tower.08c476d41917cb43b7ac.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/halberdier.png":
/*!****************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/halberdier.png ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/halberdier.d19e5771fa0f12e55b8a.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/hand cart.png":
/*!***************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/hand cart.png ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/hand cart.14149a4497982b35dc0d.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/heated shot.png":
/*!*****************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/heated shot.png ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/heated shot.8ddb539c866c20fdb888.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/heavy camel.png":
/*!*****************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/heavy camel.png ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/heavy camel.0cceca8375641a65fc2e.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/heavy cav archer.png":
/*!**********************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/heavy cav archer.png ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/heavy cav archer.b1dcc50c5e8815789cae.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/heavy demo ship.png":
/*!*********************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/heavy demo ship.png ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/heavy demo ship.db26f3381e44d25afc36.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/heavy plow.png":
/*!****************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/heavy plow.png ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/heavy plow.d0cbcc697e74fe000ad4.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/heavy scorpion.png":
/*!********************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/heavy scorpion.png ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/heavy scorpion.a94f15029dd90e7d96bd.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/herbal medicine.png":
/*!*********************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/herbal medicine.png ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/herbal medicine.6f96326b66ac91ee7ab7.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/heresy.png":
/*!************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/heresy.png ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/heresy.241d6082cac00c643ad0.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/horse collar.png":
/*!******************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/horse collar.png ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/horse collar.2f0368f51b3290050187.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/husbandry.png":
/*!***************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/husbandry.png ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/husbandry.47637489becfc46b92dc.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/hussar.png":
/*!************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/hussar.png ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/hussar.aab497f859c325cf709f.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/illumination.png":
/*!******************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/illumination.png ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/illumination.0e931b6f2d166a1553fd.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/imperial camel.png":
/*!********************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/imperial camel.png ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/imperial camel.4256e020086104f09891.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/imperial skirmisher.png":
/*!*************************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/imperial skirmisher.png ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/imperial skirmisher.4f601c6ce9b48869761b.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/imperial.png":
/*!**************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/imperial.png ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/imperial.b21a5c3d35215d9602ad.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/imperial.tp.png":
/*!*****************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/imperial.tp.png ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/imperial.tp.06ffc7098ea741ea4fd9.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/iron casting.png":
/*!******************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/iron casting.png ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/iron casting.056d1eeda94409ab37a5.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/keep.png":
/*!**********************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/keep.png ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/keep.9e115c8320cef284ef06.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/leather archer armor.png":
/*!**************************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/leather archer armor.png ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/leather archer armor.99f642630150911a442a.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/light cavalry.png":
/*!*******************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/light cavalry.png ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/light cavalry.a12aebaf7675be6c968b.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/long swordsman.png":
/*!********************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/long swordsman.png ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/long swordsman.941f450f86d42a893200.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/man-at-arms.png":
/*!*****************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/man-at-arms.png ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/man-at-arms.bb2a888f78d10643d16e.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/masonry.png":
/*!*************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/masonry.png ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/masonry.a0298bf40b76771a3736.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/murder holes.png":
/*!******************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/murder holes.png ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/murder holes.88ac499d0643d1452113.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/onager.png":
/*!************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/onager.png ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/onager.3d1d0295d4552b7b508c.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/padded archer armor.png":
/*!*************************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/padded archer armor.png ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/padded archer armor.41882387356356c0ae9d.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/paladin.png":
/*!*************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/paladin.png ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/paladin.df13458c6a09ee6d262d.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/parthian tactics.png":
/*!**********************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/parthian tactics.png ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/parthian tactics.47ba986ba007d0482ed5.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/pikeman.png":
/*!*************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/pikeman.png ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/pikeman.dd8c3549234a236d1f30.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/plate barding armor.png":
/*!*************************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/plate barding armor.png ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/plate barding armor.af72c75df01ce86f3866.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/plate mail armor.png":
/*!**********************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/plate mail armor.png ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/plate mail armor.3c9b873b2f3cc8b2caf4.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/redemption.png":
/*!****************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/redemption.png ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/redemption.a1c09cf514a0610ad50f.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/ring archer armor.png":
/*!***********************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/ring archer armor.png ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/ring archer armor.646c55e9e8cb52c970a1.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/sanctity.png":
/*!**************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/sanctity.png ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/sanctity.894f4f2873c51c8f7bfa.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/scale barding armor.png":
/*!*************************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/scale barding armor.png ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/scale barding armor.7f643a78cc43718a67b1.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/scale mail armor.png":
/*!**********************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/scale mail armor.png ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/scale mail armor.61a8afd506b1d620ff81.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/shipwright.png":
/*!****************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/shipwright.png ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/shipwright.2b39ba1da4aeab2cc947.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/siege engineers.png":
/*!*********************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/siege engineers.png ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/siege engineers.24b2b76a83de849191e1.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/siege onager.png":
/*!******************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/siege onager.png ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/siege onager.daaab0da05a74fa6ef8c.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/siege ram.png":
/*!***************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/siege ram.png ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/siege ram.aa42c4186f13802234ba.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/squires.png":
/*!*************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/squires.png ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/squires.f617a1816da8b67b011a.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/stone mining.png":
/*!******************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/stone mining.png ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/stone mining.3358e148963630543917.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/stone shaft mining.png":
/*!************************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/stone shaft mining.png ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/stone shaft mining.8b3fc3334d7ba457c116.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/supplies.png":
/*!**************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/supplies.png ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/supplies.42ed09618a27cfdf8c3c.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/theocracy.png":
/*!***************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/theocracy.png ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/theocracy.8b817750371c09f75ba2.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/thumb ring.png":
/*!****************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/thumb ring.png ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/thumb ring.2eb23ad1e360a4bf18f2.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/tracking.png":
/*!**************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/tracking.png ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/tracking.088abf33aa5a4216510c.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/treadmill crane.png":
/*!*********************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/treadmill crane.png ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/treadmill crane.1168d1e26d151c7f225a.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/two-handed swordsman.png":
/*!**************************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/two-handed swordsman.png ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/two-handed swordsman.d1ab1b2d9b6e600217ef.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/two-man saw.png":
/*!*****************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/two-man saw.png ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/two-man saw.03fb02f29eda0b4481c6.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/unique tech castle.png":
/*!************************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/unique tech castle.png ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/unique tech castle.cbf113e02d17ad98688a.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/unique tech imperial.png":
/*!**************************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/unique tech imperial.png ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/unique tech imperial.333c2d75dd5cf637bdd7.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/war galley.png":
/*!****************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/war galley.png ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/war galley.33f94ca2a7f3585b52b8.png";

/***/ }),

/***/ "./src/components/civ-images/upgrade-icons/wheelbarrow.png":
/*!*****************************************************************!*\
  !*** ./src/components/civ-images/upgrade-icons/wheelbarrow.png ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-images/upgrade-icons/wheelbarrow.0e7f4de3c9eb543cf5c4.png";

/***/ }),

/***/ "./src/components/civ-sounds/sounds/aztecs.mp3":
/*!*****************************************************!*\
  !*** ./src/components/civ-sounds/sounds/aztecs.mp3 ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-sounds/sounds/aztecs.82e5d549dc2a8d2664f8.mp3";

/***/ }),

/***/ "./src/components/civ-sounds/sounds/bengalis.mp3":
/*!*******************************************************!*\
  !*** ./src/components/civ-sounds/sounds/bengalis.mp3 ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-sounds/sounds/bengalis.aee4981e1446c4d03096.mp3";

/***/ }),

/***/ "./src/components/civ-sounds/sounds/berbers.mp3":
/*!******************************************************!*\
  !*** ./src/components/civ-sounds/sounds/berbers.mp3 ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-sounds/sounds/berbers.67b264a2cf6659622f40.mp3";

/***/ }),

/***/ "./src/components/civ-sounds/sounds/bohemians.mp3":
/*!********************************************************!*\
  !*** ./src/components/civ-sounds/sounds/bohemians.mp3 ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-sounds/sounds/bohemians.769efca6cf46a420a829.mp3";

/***/ }),

/***/ "./src/components/civ-sounds/sounds/britons.mp3":
/*!******************************************************!*\
  !*** ./src/components/civ-sounds/sounds/britons.mp3 ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-sounds/sounds/britons.a0d8b197fff993f95854.mp3";

/***/ }),

/***/ "./src/components/civ-sounds/sounds/bulgarians.mp3":
/*!*********************************************************!*\
  !*** ./src/components/civ-sounds/sounds/bulgarians.mp3 ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-sounds/sounds/bulgarians.d08915e33dafec4d2d51.mp3";

/***/ }),

/***/ "./src/components/civ-sounds/sounds/burgundians.mp3":
/*!**********************************************************!*\
  !*** ./src/components/civ-sounds/sounds/burgundians.mp3 ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-sounds/sounds/burgundians.f4b14ac244d9aadb3a86.mp3";

/***/ }),

/***/ "./src/components/civ-sounds/sounds/burmese.mp3":
/*!******************************************************!*\
  !*** ./src/components/civ-sounds/sounds/burmese.mp3 ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-sounds/sounds/burmese.ce52fe0701777425840e.mp3";

/***/ }),

/***/ "./src/components/civ-sounds/sounds/byzantines.mp3":
/*!*********************************************************!*\
  !*** ./src/components/civ-sounds/sounds/byzantines.mp3 ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-sounds/sounds/byzantines.419d6cc495af2529aabe.mp3";

/***/ }),

/***/ "./src/components/civ-sounds/sounds/celts.mp3":
/*!****************************************************!*\
  !*** ./src/components/civ-sounds/sounds/celts.mp3 ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-sounds/sounds/celts.30bb68b11fbb5b268d16.mp3";

/***/ }),

/***/ "./src/components/civ-sounds/sounds/chinese.mp3":
/*!******************************************************!*\
  !*** ./src/components/civ-sounds/sounds/chinese.mp3 ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-sounds/sounds/chinese.4b1a0d7bb803d0286618.mp3";

/***/ }),

/***/ "./src/components/civ-sounds/sounds/cumans.mp3":
/*!*****************************************************!*\
  !*** ./src/components/civ-sounds/sounds/cumans.mp3 ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-sounds/sounds/cumans.26bfde7ec9f7d757f217.mp3";

/***/ }),

/***/ "./src/components/civ-sounds/sounds/dravidians.mp3":
/*!*********************************************************!*\
  !*** ./src/components/civ-sounds/sounds/dravidians.mp3 ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-sounds/sounds/dravidians.433473dcc214750a3e06.mp3";

/***/ }),

/***/ "./src/components/civ-sounds/sounds/ethiopians.mp3":
/*!*********************************************************!*\
  !*** ./src/components/civ-sounds/sounds/ethiopians.mp3 ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-sounds/sounds/ethiopians.8b75bfd1d0eeef60c431.mp3";

/***/ }),

/***/ "./src/components/civ-sounds/sounds/franks.mp3":
/*!*****************************************************!*\
  !*** ./src/components/civ-sounds/sounds/franks.mp3 ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-sounds/sounds/franks.3ad1bee4ef2c028dba4d.mp3";

/***/ }),

/***/ "./src/components/civ-sounds/sounds/goths.mp3":
/*!****************************************************!*\
  !*** ./src/components/civ-sounds/sounds/goths.mp3 ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-sounds/sounds/goths.0f6e10c68c7286bae6a7.mp3";

/***/ }),

/***/ "./src/components/civ-sounds/sounds/gurjaras.mp3":
/*!*******************************************************!*\
  !*** ./src/components/civ-sounds/sounds/gurjaras.mp3 ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-sounds/sounds/gurjaras.e52ee58df9ef08a4c94c.mp3";

/***/ }),

/***/ "./src/components/civ-sounds/sounds/hindustanis.mp3":
/*!**********************************************************!*\
  !*** ./src/components/civ-sounds/sounds/hindustanis.mp3 ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-sounds/sounds/hindustanis.e4f92498343d57bae000.mp3";

/***/ }),

/***/ "./src/components/civ-sounds/sounds/huns.mp3":
/*!***************************************************!*\
  !*** ./src/components/civ-sounds/sounds/huns.mp3 ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-sounds/sounds/huns.83137caa970fdae37870.mp3";

/***/ }),

/***/ "./src/components/civ-sounds/sounds/incas.mp3":
/*!****************************************************!*\
  !*** ./src/components/civ-sounds/sounds/incas.mp3 ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-sounds/sounds/incas.291d95a991c618214904.mp3";

/***/ }),

/***/ "./src/components/civ-sounds/sounds/italians.mp3":
/*!*******************************************************!*\
  !*** ./src/components/civ-sounds/sounds/italians.mp3 ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-sounds/sounds/italians.3bc94b864a63b1ae5ab3.mp3";

/***/ }),

/***/ "./src/components/civ-sounds/sounds/japanese.mp3":
/*!*******************************************************!*\
  !*** ./src/components/civ-sounds/sounds/japanese.mp3 ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-sounds/sounds/japanese.1e380310bac2376a1a49.mp3";

/***/ }),

/***/ "./src/components/civ-sounds/sounds/khmer.mp3":
/*!****************************************************!*\
  !*** ./src/components/civ-sounds/sounds/khmer.mp3 ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-sounds/sounds/khmer.a7ca56d013803596992a.mp3";

/***/ }),

/***/ "./src/components/civ-sounds/sounds/koreans.mp3":
/*!******************************************************!*\
  !*** ./src/components/civ-sounds/sounds/koreans.mp3 ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-sounds/sounds/koreans.a094d5f51e7707090aa6.mp3";

/***/ }),

/***/ "./src/components/civ-sounds/sounds/lithuanians.mp3":
/*!**********************************************************!*\
  !*** ./src/components/civ-sounds/sounds/lithuanians.mp3 ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-sounds/sounds/lithuanians.d0318c0c912ea22bd8c7.mp3";

/***/ }),

/***/ "./src/components/civ-sounds/sounds/magyars.mp3":
/*!******************************************************!*\
  !*** ./src/components/civ-sounds/sounds/magyars.mp3 ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-sounds/sounds/magyars.f340a5fb315bbe5feb0a.mp3";

/***/ }),

/***/ "./src/components/civ-sounds/sounds/malay.mp3":
/*!****************************************************!*\
  !*** ./src/components/civ-sounds/sounds/malay.mp3 ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-sounds/sounds/malay.b492bdd02fd6ec614a56.mp3";

/***/ }),

/***/ "./src/components/civ-sounds/sounds/malians.mp3":
/*!******************************************************!*\
  !*** ./src/components/civ-sounds/sounds/malians.mp3 ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-sounds/sounds/malians.bba8eed47db2883bc50f.mp3";

/***/ }),

/***/ "./src/components/civ-sounds/sounds/mayans.mp3":
/*!*****************************************************!*\
  !*** ./src/components/civ-sounds/sounds/mayans.mp3 ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-sounds/sounds/mayans.5cbaef8ed50beb5a01ed.mp3";

/***/ }),

/***/ "./src/components/civ-sounds/sounds/mongols.mp3":
/*!******************************************************!*\
  !*** ./src/components/civ-sounds/sounds/mongols.mp3 ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-sounds/sounds/mongols.fe42dcdd14359fa3906e.mp3";

/***/ }),

/***/ "./src/components/civ-sounds/sounds/persians.mp3":
/*!*******************************************************!*\
  !*** ./src/components/civ-sounds/sounds/persians.mp3 ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-sounds/sounds/persians.ec053310db4d968d8b2f.mp3";

/***/ }),

/***/ "./src/components/civ-sounds/sounds/poles.mp3":
/*!****************************************************!*\
  !*** ./src/components/civ-sounds/sounds/poles.mp3 ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-sounds/sounds/poles.deef6055dd382097aaa1.mp3";

/***/ }),

/***/ "./src/components/civ-sounds/sounds/portuguese.mp3":
/*!*********************************************************!*\
  !*** ./src/components/civ-sounds/sounds/portuguese.mp3 ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-sounds/sounds/portuguese.d8f81ad93b20f7dc0708.mp3";

/***/ }),

/***/ "./src/components/civ-sounds/sounds/romans.mp3":
/*!*****************************************************!*\
  !*** ./src/components/civ-sounds/sounds/romans.mp3 ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-sounds/sounds/romans.02558870fbc69bb0120e.mp3";

/***/ }),

/***/ "./src/components/civ-sounds/sounds/saracens.mp3":
/*!*******************************************************!*\
  !*** ./src/components/civ-sounds/sounds/saracens.mp3 ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-sounds/sounds/saracens.d3001b6b4ecc1f79a938.mp3";

/***/ }),

/***/ "./src/components/civ-sounds/sounds/sicilians.mp3":
/*!********************************************************!*\
  !*** ./src/components/civ-sounds/sounds/sicilians.mp3 ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-sounds/sounds/sicilians.89581727e3d7c7ebf18c.mp3";

/***/ }),

/***/ "./src/components/civ-sounds/sounds/slavs.mp3":
/*!****************************************************!*\
  !*** ./src/components/civ-sounds/sounds/slavs.mp3 ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-sounds/sounds/slavs.67b374302ea9b2b05d22.mp3";

/***/ }),

/***/ "./src/components/civ-sounds/sounds/spanish.mp3":
/*!******************************************************!*\
  !*** ./src/components/civ-sounds/sounds/spanish.mp3 ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-sounds/sounds/spanish.7ab22c2773324d128a07.mp3";

/***/ }),

/***/ "./src/components/civ-sounds/sounds/tatars.mp3":
/*!*****************************************************!*\
  !*** ./src/components/civ-sounds/sounds/tatars.mp3 ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-sounds/sounds/tatars.32e8be53ca4d2898f1f2.mp3";

/***/ }),

/***/ "./src/components/civ-sounds/sounds/teutons.mp3":
/*!******************************************************!*\
  !*** ./src/components/civ-sounds/sounds/teutons.mp3 ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-sounds/sounds/teutons.dda96f414a66634a429b.mp3";

/***/ }),

/***/ "./src/components/civ-sounds/sounds/turks.mp3":
/*!****************************************************!*\
  !*** ./src/components/civ-sounds/sounds/turks.mp3 ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-sounds/sounds/turks.41143215027b4921bc70.mp3";

/***/ }),

/***/ "./src/components/civ-sounds/sounds/vietnamese.mp3":
/*!*********************************************************!*\
  !*** ./src/components/civ-sounds/sounds/vietnamese.mp3 ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-sounds/sounds/vietnamese.dd993a08d24f7a8f4113.mp3";

/***/ }),

/***/ "./src/components/civ-sounds/sounds/vikings.mp3":
/*!******************************************************!*\
  !*** ./src/components/civ-sounds/sounds/vikings.mp3 ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-sounds/sounds/vikings.9b746d7dbd61392adae8.mp3";

/***/ }),

/***/ "./src/components/civ-tech-overlay/images/paper.png":
/*!**********************************************************!*\
  !*** ./src/components/civ-tech-overlay/images/paper.png ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "components/civ-tech-overlay/images/paper.d06046c4b206e0d17be3.png";

/***/ }),

/***/ "./src/components/civ-images/civ-data/data.json":
/*!******************************************************!*\
  !*** ./src/components/civ-images/civ-data/data.json ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"age_names":{"Castle Age":"4203","Dark Age":"4201","Feudal Age":"4202","Imperial Age":"4204"},"civ_helptexts":{"Aztecs":"120164","Bengalis":"120190","Berbers":"120176","Bohemians":"120188","Britons":"120150","Bulgarians":"120181","Burgundians":"120185","Burmese":"120179","Byzantines":"120156","Celts":"120162","Chinese":"120155","Cumans":"120183","Dravidians":"120189","Ethiopians":"120174","Franks":"120151","Goths":"120152","Gurjaras":"120191","Hindustanis":"120169","Huns":"120166","Incas":"120170","Italians":"120168","Japanese":"120154","Khmer":"120177","Koreans":"120167","Lithuanians":"120184","Magyars":"120171","Malay":"120178","Malians":"120175","Mayans":"120165","Mongols":"120161","Persians":"120157","Poles":"120187","Portuguese":"120173","Romans":"120192","Saracens":"120158","Sicilians":"120186","Slavs":"120172","Spanish":"120163","Tatars":"120182","Teutons":"120153","Turks":"120159","Vietnamese":"120180","Vikings":"120160"},"civ_names":{"Aztecs":"10285","Bengalis":"10311","Berbers":"10297","Bohemians":"10309","Britons":"10271","Bulgarians":"10302","Burgundians":"10306","Burmese":"10300","Byzantines":"10277","Celts":"10283","Chinese":"10276","Cumans":"10304","Dravidians":"10310","Ethiopians":"10295","Franks":"10272","Goths":"10273","Gurjaras":"10312","Hindustanis":"10290","Huns":"10287","Incas":"10291","Italians":"10289","Japanese":"10275","Khmer":"10298","Koreans":"10288","Lithuanians":"10305","Magyars":"10292","Malay":"10299","Malians":"10296","Mayans":"10286","Mongols":"10282","Persians":"10278","Poles":"10308","Portuguese":"10294","Romans":"10313","Saracens":"10279","Sicilians":"10307","Slavs":"10293","Spanish":"10284","Tatars":"10303","Teutons":"10274","Turks":"10280","Vietnamese":"10301","Vikings":"10281"},"data":{"buildings":{"12":{"AccuracyPercent":0,"Armours":[{"Amount":0,"Class":21},{"Amount":0,"Class":11},{"Amount":0,"Class":4},{"Amount":7,"Class":3},{"Amount":0,"Class":31}],"Attack":0,"Attacks":[],"Cost":{"Wood":175},"GarrisonCapacity":10,"HP":1200,"ID":12,"LanguageHelpId":26135,"LanguageNameId":5135,"LineOfSight":6,"MeleeArmor":0,"MinRange":0,"PierceArmor":7,"Range":0,"ReloadTime":0,"TrainTime":50,"internal_name":"Barracks Age1"},"45":{"AccuracyPercent":0,"Armours":[{"Amount":0,"Class":21},{"Amount":0,"Class":11},{"Amount":0,"Class":4},{"Amount":7,"Class":3},{"Amount":0,"Class":31}],"Attack":0,"Attacks":[],"Cost":{"Wood":150},"GarrisonCapacity":10,"HP":1800,"ID":45,"LanguageHelpId":26144,"LanguageNameId":5144,"LineOfSight":6,"MeleeArmor":0,"MinRange":2,"PierceArmor":7,"Range":0,"ReloadTime":0,"TrainTime":35,"internal_name":"DOCK"},"49":{"AccuracyPercent":0,"Armours":[{"Amount":0,"Class":21},{"Amount":0,"Class":11},{"Amount":1,"Class":4},{"Amount":8,"Class":3},{"Amount":1,"Class":31}],"Attack":0,"Attacks":[],"Cost":{"Wood":200},"GarrisonCapacity":10,"HP":1500,"ID":49,"LanguageHelpId":26169,"LanguageNameId":5169,"LineOfSight":6,"MeleeArmor":1,"MinRange":0,"PierceArmor":8,"Range":0,"ReloadTime":0,"TrainTime":40,"internal_name":"SIWS"},"50":{"AccuracyPercent":0,"Armours":[{"Amount":0,"Class":21},{"Amount":0,"Class":11},{"Amount":0,"Class":4},{"Amount":0,"Class":3},{"Amount":0,"Class":31}],"Attack":0,"Attacks":[],"Cost":{"Wood":60},"GarrisonCapacity":0,"HP":480,"ID":50,"LanguageHelpId":26149,"LanguageNameId":5149,"LineOfSight":1,"MeleeArmor":0,"MinRange":0,"PierceArmor":0,"Range":0,"ReloadTime":0,"TrainTime":15,"internal_name":"FARM"},"68":{"AccuracyPercent":0,"Armours":[{"Amount":0,"Class":21},{"Amount":0,"Class":11},{"Amount":0,"Class":4},{"Amount":7,"Class":3},{"Amount":0,"Class":31}],"Attack":0,"Attacks":[],"Cost":{"Wood":100},"GarrisonCapacity":0,"HP":600,"ID":68,"LanguageHelpId":26157,"LanguageNameId":5157,"LineOfSight":6,"MeleeArmor":0,"MinRange":0,"PierceArmor":7,"Range":0,"ReloadTime":0,"TrainTime":35,"internal_name":"MILL"},"70":{"AccuracyPercent":0,"Armours":[{"Amount":0,"Class":21},{"Amount":0,"Class":11},{"Amount":-2,"Class":4},{"Amount":7,"Class":3},{"Amount":-2,"Class":31}],"Attack":0,"Attacks":[],"Cost":{"Wood":25},"GarrisonCapacity":0,"HP":550,"ID":70,"LanguageHelpId":26344,"LanguageNameId":5344,"LineOfSight":2,"MeleeArmor":-2,"MinRange":0,"PierceArmor":7,"Range":0,"ReloadTime":0,"TrainTime":25,"internal_name":"HOUS"},"71":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":21},{"Amount":0,"Class":11},{"Amount":4,"Class":4},{"Amount":6,"Class":3},{"Amount":4,"Class":31}],"Attack":5,"Attacks":[{"Amount":5,"Class":3}],"Cost":{"Stone":100,"Wood":275},"GarrisonCapacity":15,"HP":2400,"ID":71,"LanguageHelpId":26164,"LanguageNameId":5164,"LineOfSight":8,"MeleeArmor":4,"MinRange":0,"PierceArmor":6,"Range":6,"ReloadTime":2,"TrainTime":100,"internal_name":"RTWC2"},"72":{"AccuracyPercent":0,"Armours":[{"Amount":0,"Class":21},{"Amount":0,"Class":11},{"Amount":2,"Class":4},{"Amount":5,"Class":3},{"Amount":0,"Class":22},{"Amount":2,"Class":31}],"Attack":0,"Attacks":[],"Cost":{"Wood":3},"GarrisonCapacity":0,"HP":150,"ID":72,"LanguageHelpId":26202,"LanguageNameId":5202,"LineOfSight":2,"MeleeArmor":2,"MinRange":0,"PierceArmor":5,"Range":0,"ReloadTime":0,"TrainTime":7,"internal_name":"WALL"},"79":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":21},{"Amount":0,"Class":11},{"Amount":1,"Class":4},{"Amount":7,"Class":3},{"Amount":0,"Class":13},{"Amount":1,"Class":31}],"Attack":5,"Attacks":[{"Amount":2,"Class":27},{"Amount":0,"Class":11},{"Amount":7,"Class":16},{"Amount":5,"Class":3},{"Amount":1,"Class":30},{"Amount":7,"Class":34}],"Cost":{"Stone":125,"Wood":50},"GarrisonCapacity":5,"HP":850,"ID":79,"LanguageHelpId":26178,"LanguageNameId":5178,"LineOfSight":10,"MeleeArmor":1,"MinRange":1,"PierceArmor":7,"Range":8,"ReloadTime":2,"TrainTime":80,"internal_name":"WCTW"},"82":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":26},{"Amount":0,"Class":21},{"Amount":8,"Class":11},{"Amount":8,"Class":4},{"Amount":11,"Class":3},{"Amount":8,"Class":31}],"Attack":11,"Attacks":[{"Amount":2,"Class":27},{"Amount":0,"Class":16},{"Amount":11,"Class":3},{"Amount":0,"Class":17},{"Amount":0,"Class":30},{"Amount":0,"Class":34}],"Cost":{"Stone":650,"Wood":0},"GarrisonCapacity":20,"HP":4800,"ID":82,"LanguageHelpId":26142,"LanguageNameId":5142,"LineOfSight":11,"MeleeArmor":8,"MinRange":1,"PierceArmor":11,"Range":8,"ReloadTime":2,"TrainTime":200,"internal_name":"CSTL"},"84":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":21},{"Amount":0,"Class":11},{"Amount":1,"Class":4},{"Amount":8,"Class":3},{"Amount":1,"Class":31}],"Attack":0,"Attacks":[],"Cost":{"Wood":175},"GarrisonCapacity":10,"HP":1800,"ID":84,"LanguageHelpId":26161,"LanguageNameId":5161,"LineOfSight":6,"MeleeArmor":1,"MinRange":0,"PierceArmor":8,"Range":0,"ReloadTime":2.5,"TrainTime":60,"internal_name":"MRKT"},"87":{"AccuracyPercent":0,"Armours":[{"Amount":0,"Class":21},{"Amount":0,"Class":11},{"Amount":1,"Class":4},{"Amount":8,"Class":3},{"Amount":1,"Class":31}],"Attack":0,"Attacks":[],"Cost":{"Wood":175},"GarrisonCapacity":10,"HP":1500,"ID":87,"LanguageHelpId":26128,"LanguageNameId":5128,"LineOfSight":6,"MeleeArmor":1,"MinRange":0,"PierceArmor":8,"Range":0,"ReloadTime":0,"TrainTime":50,"internal_name":"ARRG"},"101":{"AccuracyPercent":0,"Armours":[{"Amount":0,"Class":21},{"Amount":0,"Class":11},{"Amount":1,"Class":4},{"Amount":8,"Class":3},{"Amount":1,"Class":31}],"Attack":0,"Attacks":[],"Cost":{"Wood":175},"GarrisonCapacity":10,"HP":1500,"ID":101,"LanguageHelpId":26171,"LanguageNameId":5171,"LineOfSight":6,"MeleeArmor":1,"MinRange":0,"PierceArmor":8,"Range":0,"ReloadTime":0,"TrainTime":50,"internal_name":"STBL"},"103":{"AccuracyPercent":0,"Armours":[{"Amount":0,"Class":21},{"Amount":0,"Class":11},{"Amount":0,"Class":4},{"Amount":7,"Class":3},{"Amount":0,"Class":31}],"Attack":0,"Attacks":[],"Cost":{"Wood":150},"GarrisonCapacity":0,"HP":1800,"ID":103,"LanguageHelpId":26131,"LanguageNameId":5131,"LineOfSight":6,"MeleeArmor":0,"MinRange":0,"PierceArmor":7,"Range":0,"ReloadTime":0,"TrainTime":40,"internal_name":"BLAC"},"104":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":21},{"Amount":0,"Class":11},{"Amount":0,"Class":4},{"Amount":7,"Class":3},{"Amount":0,"Class":31}],"Attack":0,"Attacks":[],"Cost":{"Wood":175},"GarrisonCapacity":10,"HP":2100,"ID":104,"LanguageHelpId":26138,"LanguageNameId":5138,"LineOfSight":6,"MeleeArmor":0,"MinRange":0,"PierceArmor":7,"Range":0,"ReloadTime":2.5,"TrainTime":40,"internal_name":"CRCH"},"109":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":21},{"Amount":0,"Class":11},{"Amount":3,"Class":4},{"Amount":5,"Class":3},{"Amount":3,"Class":31}],"Attack":5,"Attacks":[{"Amount":5,"Class":3}],"Cost":{"Stone":100,"Wood":275},"GarrisonCapacity":15,"HP":2400,"ID":109,"LanguageHelpId":26164,"LanguageNameId":5164,"LineOfSight":8,"MeleeArmor":3,"MinRange":0,"PierceArmor":5,"Range":6,"ReloadTime":2,"TrainTime":100,"internal_name":"RTWC"},"117":{"AccuracyPercent":0,"Armours":[{"Amount":0,"Class":21},{"Amount":16,"Class":11},{"Amount":8,"Class":4},{"Amount":10,"Class":3},{"Amount":0,"Class":13},{"Amount":0,"Class":22},{"Amount":8,"Class":31}],"Attack":0,"Attacks":[],"Cost":{"Stone":5},"GarrisonCapacity":0,"HP":1080,"ID":117,"LanguageHelpId":26203,"LanguageNameId":5203,"LineOfSight":2,"MeleeArmor":8,"MinRange":0,"PierceArmor":10,"Range":0,"ReloadTime":0,"TrainTime":10,"internal_name":"WALL2"},"155":{"AccuracyPercent":0,"Armours":[{"Amount":0,"Class":21},{"Amount":24,"Class":11},{"Amount":12,"Class":4},{"Amount":12,"Class":3},{"Amount":0,"Class":13},{"Amount":0,"Class":22},{"Amount":12,"Class":31}],"Attack":0,"Attacks":[],"Cost":{"Stone":5},"GarrisonCapacity":0,"HP":3000,"ID":155,"LanguageHelpId":26204,"LanguageNameId":5204,"LineOfSight":2,"MeleeArmor":12,"MinRange":0,"PierceArmor":12,"Range":0,"ReloadTime":0,"TrainTime":10,"internal_name":"WALL3"},"199":{"AccuracyPercent":0,"Armours":[{"Amount":0,"Class":4},{"Amount":0,"Class":3},{"Amount":10,"Class":11},{"Amount":0,"Class":21},{"Amount":0,"Class":31}],"Attack":0,"Attacks":[],"Cost":{"Wood":100},"GarrisonCapacity":0,"HP":50,"ID":199,"LanguageHelpId":26495,"LanguageNameId":5495,"LineOfSight":1,"MeleeArmor":0,"MinRange":0,"PierceArmor":0,"Range":0,"ReloadTime":0,"TrainTime":40,"internal_name":"FTRAP"},"209":{"AccuracyPercent":0,"Armours":[{"Amount":0,"Class":21},{"Amount":0,"Class":11},{"Amount":2,"Class":4},{"Amount":9,"Class":3},{"Amount":2,"Class":31}],"Attack":0,"Attacks":[],"Cost":{"Wood":200},"GarrisonCapacity":0,"HP":2100,"ID":209,"LanguageHelpId":26176,"LanguageNameId":5176,"LineOfSight":6,"MeleeArmor":2,"MinRange":0,"PierceArmor":9,"Range":0,"ReloadTime":0,"TrainTime":60,"internal_name":"UNIV"},"234":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":21},{"Amount":0,"Class":11},{"Amount":2,"Class":4},{"Amount":8,"Class":3},{"Amount":0,"Class":13},{"Amount":2,"Class":31}],"Attack":7,"Attacks":[{"Amount":2,"Class":27},{"Amount":0,"Class":11},{"Amount":9,"Class":16},{"Amount":7,"Class":3},{"Amount":1,"Class":30},{"Amount":9,"Class":34}],"Cost":{"Stone":125,"Wood":50},"GarrisonCapacity":5,"HP":1500,"ID":234,"LanguageHelpId":26154,"LanguageNameId":5154,"LineOfSight":10,"MeleeArmor":2,"MinRange":1,"PierceArmor":8,"Range":8,"ReloadTime":2,"TrainTime":80,"internal_name":"WCTW2"},"235":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":21},{"Amount":0,"Class":11},{"Amount":3,"Class":4},{"Amount":9,"Class":3},{"Amount":0,"Class":13},{"Amount":3,"Class":31}],"Attack":8,"Attacks":[{"Amount":2,"Class":27},{"Amount":0,"Class":11},{"Amount":10,"Class":16},{"Amount":8,"Class":3},{"Amount":1,"Class":30},{"Amount":10,"Class":34}],"Cost":{"Stone":125,"Wood":50},"GarrisonCapacity":5,"HP":2250,"ID":235,"LanguageHelpId":26155,"LanguageNameId":5155,"LineOfSight":10,"MeleeArmor":3,"MinRange":1,"PierceArmor":9,"Range":8,"ReloadTime":2,"TrainTime":80,"internal_name":"WCTW3"},"236":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":21},{"Amount":0,"Class":11},{"Amount":3,"Class":4},{"Amount":9,"Class":3},{"Amount":0,"Class":13},{"Amount":0,"Class":23},{"Amount":3,"Class":31}],"Attack":120,"Attacks":[{"Amount":40,"Class":16},{"Amount":120,"Class":3},{"Amount":1,"Class":30},{"Amount":40,"Class":34}],"Cost":{"Gold":100,"Stone":125,"Wood":0},"GarrisonCapacity":5,"HP":2220,"ID":236,"LanguageHelpId":26156,"LanguageNameId":5156,"LineOfSight":10,"MeleeArmor":3,"MinRange":1,"PierceArmor":9,"Range":8,"ReloadTime":6,"TrainTime":80,"internal_name":"WCTW4"},"276":{"AccuracyPercent":0,"Armours":[{"Amount":0,"Class":0},{"Amount":0,"Class":11},{"Amount":3,"Class":4},{"Amount":10,"Class":3},{"Amount":3,"Class":31}],"Attack":0,"Attacks":[],"Cost":{"Gold":1000,"Stone":1000,"Wood":1000},"GarrisonCapacity":0,"HP":4800,"ID":276,"LanguageHelpId":26182,"LanguageNameId":5182,"LineOfSight":8,"MeleeArmor":3,"MinRange":0,"PierceArmor":10,"Range":0,"ReloadTime":0,"TrainTime":3500,"internal_name":"WNDR"},"487":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":21},{"Amount":20,"Class":11},{"Amount":0,"Class":4},{"Amount":0,"Class":3},{"Amount":0,"Class":13},{"Amount":0,"Class":22},{"Amount":0,"Class":31}],"Attack":0,"Attacks":[],"Cost":{"Stone":30},"GarrisonCapacity":0,"HP":1650,"ID":487,"LanguageHelpId":26185,"LanguageNameId":5185,"LineOfSight":6,"MeleeArmor":6,"MinRange":0,"PierceArmor":6,"Range":0,"ReloadTime":2.5,"TrainTime":70,"internal_name":"GTAX2"},"562":{"AccuracyPercent":0,"Armours":[{"Amount":0,"Class":21},{"Amount":0,"Class":11},{"Amount":0,"Class":4},{"Amount":7,"Class":3},{"Amount":0,"Class":31}],"Attack":0,"Attacks":[],"Cost":{"Wood":100},"GarrisonCapacity":0,"HP":600,"ID":562,"LanguageHelpId":26464,"LanguageNameId":5464,"LineOfSight":6,"MeleeArmor":0,"MinRange":0,"PierceArmor":7,"Range":0,"ReloadTime":0,"TrainTime":35,"internal_name":"SMIL"},"584":{"AccuracyPercent":0,"Armours":[{"Amount":0,"Class":21},{"Amount":0,"Class":11},{"Amount":0,"Class":4},{"Amount":7,"Class":3},{"Amount":0,"Class":31}],"Attack":0,"Attacks":[],"Cost":{"Wood":100},"GarrisonCapacity":0,"HP":600,"ID":584,"LanguageHelpId":26487,"LanguageNameId":5487,"LineOfSight":6,"MeleeArmor":0,"MinRange":0,"PierceArmor":7,"Range":0,"ReloadTime":0,"TrainTime":35,"internal_name":"MINE"},"598":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":21},{"Amount":0,"Class":11},{"Amount":0,"Class":4},{"Amount":0,"Class":3},{"Amount":0,"Class":31}],"Attack":0,"Attacks":[],"Cost":{"Stone":5,"Wood":25},"GarrisonCapacity":0,"HP":500,"ID":598,"LanguageHelpId":26504,"LanguageNameId":5504,"LineOfSight":6,"MeleeArmor":0,"MinRange":0,"PierceArmor":0,"Range":0,"ReloadTime":2.5,"TrainTime":15,"internal_name":"WCTWX"},"621":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":21},{"Amount":0,"Class":11},{"Amount":0,"Class":4},{"Amount":7,"Class":3},{"Amount":0,"Class":31}],"Attack":0,"Attacks":[],"Cost":{"Stone":100,"Wood":275},"GarrisonCapacity":0,"HP":2400,"ID":621,"LanguageHelpId":26164,"LanguageNameId":5164,"LineOfSight":8,"MeleeArmor":0,"MinRange":0,"PierceArmor":7,"Range":6,"ReloadTime":2,"TrainTime":150,"internal_name":"RTWC1X"},"792":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":21},{"Amount":0,"Class":11},{"Amount":0,"Class":4},{"Amount":0,"Class":3},{"Amount":0,"Class":22},{"Amount":0,"Class":31}],"Attack":0,"Attacks":[],"Cost":{"Wood":30},"GarrisonCapacity":0,"HP":240,"ID":792,"LanguageHelpId":26186,"LanguageNameId":5186,"LineOfSight":6,"MeleeArmor":2,"MinRange":0,"PierceArmor":2,"Range":0,"ReloadTime":2.5,"TrainTime":30,"internal_name":"PGTAX"},"1021":{"AccuracyPercent":0,"Armours":[{"Amount":10,"Class":3},{"Amount":3,"Class":4},{"Amount":0,"Class":21},{"Amount":0,"Class":11},{"Amount":3,"Class":31}],"Attack":0,"Attacks":[],"Cost":{"Gold":350,"Stone":300},"GarrisonCapacity":0,"HP":2700,"ID":1021,"LanguageHelpId":26159,"LanguageNameId":5159,"LineOfSight":6,"MeleeArmor":3,"MinRange":0,"PierceArmor":10,"Range":0,"ReloadTime":0,"TrainTime":120,"internal_name":"FEITO"},"1189":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":21},{"Amount":0,"Class":11},{"Amount":3,"Class":4},{"Amount":10,"Class":3},{"Amount":0,"Class":13},{"Amount":3,"Class":31}],"Attack":3,"Attacks":[{"Amount":10,"Class":16},{"Amount":3,"Class":3},{"Amount":10,"Class":34}],"Cost":{"Wood":150},"GarrisonCapacity":10,"HP":2000,"ID":1189,"LanguageHelpId":26249,"LanguageNameId":5249,"LineOfSight":10,"MeleeArmor":3,"MinRange":1,"PierceArmor":10,"Range":7,"ReloadTime":3,"TrainTime":35,"internal_name":"HARBOR"},"1251":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":26},{"Amount":0,"Class":21},{"Amount":8,"Class":11},{"Amount":8,"Class":4},{"Amount":11,"Class":3},{"Amount":8,"Class":31}],"Attack":10,"Attacks":[{"Amount":2,"Class":27},{"Amount":0,"Class":16},{"Amount":10,"Class":3},{"Amount":0,"Class":17},{"Amount":0,"Class":30},{"Amount":0,"Class":34}],"Cost":{"Stone":350},"GarrisonCapacity":20,"HP":2600,"ID":1251,"LanguageHelpId":26349,"LanguageNameId":5349,"LineOfSight":10,"MeleeArmor":8,"MinRange":1,"PierceArmor":11,"Range":7,"ReloadTime":2,"TrainTime":150,"internal_name":"KREPOST"},"1665":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":21},{"Amount":0,"Class":11},{"Amount":1,"Class":4},{"Amount":7,"Class":3},{"Amount":0,"Class":13},{"Amount":1,"Class":31}],"Attack":5,"Attacks":[{"Amount":2,"Class":27},{"Amount":0,"Class":11},{"Amount":7,"Class":16},{"Amount":5,"Class":3},{"Amount":1,"Class":30},{"Amount":7,"Class":34}],"Cost":{"Stone":175,"Wood":75},"GarrisonCapacity":10,"HP":1250,"ID":1665,"LanguageHelpId":26544,"LanguageNameId":5544,"LineOfSight":10,"MeleeArmor":1,"MinRange":1,"PierceArmor":7,"Range":8,"ReloadTime":2,"TrainTime":90,"internal_name":"DONJON"},"1734":{"AccuracyPercent":0,"Armours":[{"Amount":0,"Class":21},{"Amount":0,"Class":11},{"Amount":0,"Class":4},{"Amount":7,"Class":3},{"Amount":0,"Class":31}],"Attack":0,"Attacks":[],"Cost":{"Wood":125},"GarrisonCapacity":0,"HP":1000,"ID":1734,"LanguageHelpId":26581,"LanguageNameId":5581,"LineOfSight":6,"MeleeArmor":0,"MinRange":0,"PierceArmor":7,"Range":0,"ReloadTime":0,"TrainTime":40,"internal_name":"FOLWARK1"},"1754":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":21},{"Amount":0,"Class":11},{"Amount":3,"Class":4},{"Amount":10,"Class":3},{"Amount":3,"Class":31}],"Attack":0,"Attacks":[],"Cost":{"Stone":50,"Wood":175},"GarrisonCapacity":0,"HP":2700,"ID":1754,"LanguageHelpId":26440,"LanguageNameId":5440,"LineOfSight":6,"MeleeArmor":3,"MinRange":0,"PierceArmor":10,"Range":0,"ReloadTime":2.5,"TrainTime":60,"internal_name":"CARAVANSERAI"}},"techs":{"3":{"Cost":{"Gold":450,"Wood":750},"ID":3,"LanguageHelpId":28419,"LanguageNameId":7419,"Repeatable":true,"ResearchTime":60,"internal_name":"British Yeoman"},"4":{"Cost":{"Food":750,"Gold":450},"ID":4,"LanguageHelpId":28420,"LanguageNameId":7420,"Repeatable":true,"ResearchTime":70,"internal_name":"Mayan El Dorado"},"5":{"Cost":{"Food":750,"Gold":450},"ID":5,"LanguageHelpId":28421,"LanguageNameId":7421,"Repeatable":true,"ResearchTime":50,"internal_name":"Celtic Furor Celtica"},"6":{"Cost":{"Gold":450,"Wood":500},"ID":6,"LanguageHelpId":28422,"LanguageNameId":7422,"Repeatable":true,"ResearchTime":60,"internal_name":"Mongol Siege Drill"},"7":{"Cost":{"Food":300,"Gold":300},"ID":7,"LanguageHelpId":28423,"LanguageNameId":7423,"Repeatable":true,"ResearchTime":50,"internal_name":"Persian Mahouts"},"8":{"Cost":{"Food":75},"ID":8,"LanguageHelpId":28008,"LanguageNameId":7008,"Repeatable":false,"ResearchTime":25,"internal_name":"Town Watch"},"9":{"Cost":{"Food":400,"Gold":400},"ID":9,"LanguageHelpId":28424,"LanguageNameId":7424,"Repeatable":true,"ResearchTime":50,"internal_name":"Saracen Zealotry"},"10":{"Cost":{"Food":600,"Gold":650},"ID":10,"LanguageHelpId":28425,"LanguageNameId":7425,"Repeatable":true,"ResearchTime":40,"internal_name":"Turkish Artillery"},"11":{"Cost":{"Food":600,"Stone":400},"ID":11,"LanguageHelpId":28426,"LanguageNameId":7426,"Repeatable":true,"ResearchTime":60,"internal_name":"Teuton Crenellations"},"12":{"Cost":{"Food":250,"Wood":250},"ID":12,"LanguageHelpId":28012,"LanguageNameId":7012,"Repeatable":true,"ResearchTime":70,"internal_name":"Crop rotation"},"13":{"Cost":{"Food":125,"Wood":125},"ID":13,"LanguageHelpId":28013,"LanguageNameId":7013,"Repeatable":true,"ResearchTime":40,"internal_name":"Heavy plow"},"14":{"Cost":{"Food":75,"Wood":75},"ID":14,"LanguageHelpId":28014,"LanguageNameId":7014,"Repeatable":true,"ResearchTime":20,"internal_name":"Horse collar"},"15":{"Cost":{"Food":300,"Gold":200},"ID":15,"LanguageHelpId":28015,"LanguageNameId":7015,"Repeatable":false,"ResearchTime":50,"internal_name":"Guilds"},"16":{"Cost":{"Food":450,"Gold":250},"ID":16,"LanguageHelpId":28427,"LanguageNameId":7427,"Repeatable":false,"ResearchTime":40,"internal_name":"Gothic Anarchy"},"17":{"Cost":{"Food":300,"Gold":200},"ID":17,"LanguageHelpId":28017,"LanguageNameId":7017,"Repeatable":false,"ResearchTime":70,"internal_name":"Banking"},"19":{"Cost":{"Food":0,"Gold":0},"ID":19,"LanguageHelpId":28019,"LanguageNameId":7019,"Repeatable":true,"ResearchTime":1,"internal_name":"Cartography"},"21":{"Cost":{"Food":500,"Wood":300},"ID":21,"LanguageHelpId":28428,"LanguageNameId":7428,"Repeatable":true,"ResearchTime":60,"internal_name":"Hun Atheism"},"22":{"Cost":{"Gold":50},"ID":22,"LanguageHelpId":28022,"LanguageNameId":7022,"Repeatable":true,"ResearchTime":25,"internal_name":"Loom"},"23":{"Cost":{"Food":200,"Gold":100},"ID":23,"LanguageHelpId":28023,"LanguageNameId":7023,"Repeatable":false,"ResearchTime":70,"internal_name":"Coinage"},"24":{"Cost":{"Food":450,"Gold":750},"ID":24,"LanguageHelpId":28429,"LanguageNameId":7429,"Repeatable":true,"ResearchTime":60,"internal_name":"Aztec Garland Wars"},"39":{"Cost":{"Food":150},"ID":39,"LanguageHelpId":28039,"LanguageNameId":7039,"Repeatable":true,"ResearchTime":40,"internal_name":"Husbandry"},"45":{"Cost":{"Food":750,"Gold":1000},"ID":45,"LanguageHelpId":28045,"LanguageNameId":7045,"Repeatable":true,"ResearchTime":60,"internal_name":"Faith"},"47":{"Cost":{"Food":300,"Gold":200},"ID":47,"LanguageHelpId":28047,"LanguageNameId":7047,"Repeatable":true,"ResearchTime":100,"internal_name":"Chemistry"},"48":{"Cost":{"Food":200,"Gold":200},"ID":48,"LanguageHelpId":28410,"LanguageNameId":7410,"Repeatable":true,"ResearchTime":40,"internal_name":"Caravan"},"49":{"Cost":{"Food":650,"Gold":500},"ID":49,"LanguageHelpId":28431,"LanguageNameId":7431,"Repeatable":true,"ResearchTime":40,"internal_name":"Bogsveigar"},"50":{"Cost":{"Food":150,"Wood":175},"ID":50,"LanguageHelpId":28050,"LanguageNameId":7050,"Repeatable":true,"ResearchTime":50,"internal_name":"Masonry"},"51":{"Cost":{"Food":300,"Wood":200},"ID":51,"LanguageHelpId":28051,"LanguageNameId":7051,"Repeatable":true,"ResearchTime":70,"internal_name":"Architecture"},"52":{"Cost":{"Gold":750,"Wood":750},"ID":52,"LanguageHelpId":28432,"LanguageNameId":7432,"Repeatable":true,"ResearchTime":60,"internal_name":"Chinese Rocketry"},"54":{"Cost":{"Food":300,"Wood":200},"ID":54,"LanguageHelpId":28054,"LanguageNameId":7054,"Repeatable":true,"ResearchTime":50,"internal_name":"Stone cutting"},"55":{"Cost":{"Food":100,"Wood":75},"ID":55,"LanguageHelpId":28055,"LanguageNameId":7055,"Repeatable":true,"ResearchTime":30,"internal_name":"Gold Mining"},"59":{"Cost":{"Gold":300,"Wood":550},"ID":59,"LanguageHelpId":28059,"LanguageNameId":7059,"Repeatable":true,"ResearchTime":60,"internal_name":"Japanese Kataparuto"},"61":{"Cost":{"Food":800,"Gold":600},"ID":61,"LanguageHelpId":28318,"LanguageNameId":7318,"Repeatable":true,"ResearchTime":50,"internal_name":"Byzantine Logistica"},"63":{"Cost":{"Food":500,"Wood":350},"ID":63,"LanguageHelpId":28063,"LanguageNameId":7063,"Repeatable":true,"ResearchTime":75,"internal_name":"Keep"},"64":{"Cost":{"Food":800,"Wood":400},"ID":64,"LanguageHelpId":28320,"LanguageNameId":7320,"Repeatable":false,"ResearchTime":60,"internal_name":"Bombard Tower"},"65":{"Cost":{"Food":150,"Wood":200},"ID":65,"LanguageHelpId":28314,"LanguageNameId":7314,"Repeatable":true,"ResearchTime":45,"internal_name":"Gillnets"},"67":{"Cost":{"Food":150},"ID":67,"LanguageHelpId":28067,"LanguageNameId":7067,"Repeatable":true,"ResearchTime":50,"internal_name":"Forging"},"68":{"Cost":{"Food":220,"Gold":120},"ID":68,"LanguageHelpId":28068,"LanguageNameId":7068,"Repeatable":true,"ResearchTime":75,"internal_name":"Iron casting"},"74":{"Cost":{"Food":100},"ID":74,"LanguageHelpId":28074,"LanguageNameId":7074,"Repeatable":true,"ResearchTime":40,"internal_name":"Scale Mail Armor"},"75":{"Cost":{"Food":275,"Gold":225},"ID":75,"LanguageHelpId":28075,"LanguageNameId":7075,"Repeatable":true,"ResearchTime":100,"internal_name":"Blast Furnace"},"76":{"Cost":{"Food":200,"Gold":100},"ID":76,"LanguageHelpId":28076,"LanguageNameId":7076,"Repeatable":true,"ResearchTime":55,"internal_name":"Chain Mail Armor"},"77":{"Cost":{"Food":300,"Gold":150},"ID":77,"LanguageHelpId":28077,"LanguageNameId":7077,"Repeatable":true,"ResearchTime":70,"internal_name":"Plate Mail Armor"},"80":{"Cost":{"Food":350,"Gold":200},"ID":80,"LanguageHelpId":28080,"LanguageNameId":7080,"Repeatable":true,"ResearchTime":75,"internal_name":"Plate Barding Armor"},"81":{"Cost":{"Food":150},"ID":81,"LanguageHelpId":28081,"LanguageNameId":7081,"Repeatable":true,"ResearchTime":45,"internal_name":"Scale Barding Armor"},"82":{"Cost":{"Food":250,"Gold":150},"ID":82,"LanguageHelpId":28082,"LanguageNameId":7082,"Repeatable":true,"ResearchTime":60,"internal_name":"Chain Barding Armor"},"83":{"Cost":{"Food":300,"Gold":300},"ID":83,"LanguageHelpId":28324,"LanguageNameId":7324,"Repeatable":true,"ResearchTime":60,"internal_name":"Frankish Bearded Axe"},"90":{"Cost":{},"ID":90,"LanguageHelpId":28090,"LanguageNameId":7090,"Repeatable":true,"ResearchTime":0,"internal_name":"Tracking"},"93":{"Cost":{"Gold":175,"Wood":300},"ID":93,"LanguageHelpId":28093,"LanguageNameId":7093,"Repeatable":false,"ResearchTime":60,"internal_name":"Ballistics"},"101":{"Cost":{"Food":500},"ID":101,"LanguageHelpId":28101,"LanguageNameId":7101,"Repeatable":false,"ResearchTime":130,"internal_name":"Middle Age"},"102":{"Cost":{"Food":800,"Gold":200},"ID":102,"LanguageHelpId":28102,"LanguageNameId":7102,"Repeatable":false,"ResearchTime":160,"internal_name":"Feudal Age"},"103":{"Cost":{"Food":1000,"Gold":800},"ID":103,"LanguageHelpId":28103,"LanguageNameId":7103,"Repeatable":false,"ResearchTime":190,"internal_name":"Imperial Age"},"140":{"Cost":{"Food":100,"Wood":250},"ID":140,"LanguageHelpId":28186,"LanguageNameId":7186,"Repeatable":true,"ResearchTime":30,"internal_name":"Guard Tower"},"182":{"Cost":{"Food":175,"Wood":75},"ID":182,"LanguageHelpId":28180,"LanguageNameId":7180,"Repeatable":true,"ResearchTime":75,"internal_name":"Gold Shaft Mining"},"194":{"Cost":{"Food":200,"Wood":100},"ID":194,"LanguageHelpId":28163,"LanguageNameId":7163,"Repeatable":true,"ResearchTime":50,"internal_name":"Fortified Wall"},"199":{"Cost":{"Food":100,"Gold":50},"ID":199,"LanguageHelpId":28172,"LanguageNameId":7172,"Repeatable":true,"ResearchTime":30,"internal_name":"Fletching"},"200":{"Cost":{"Food":200,"Gold":100},"ID":200,"LanguageHelpId":28150,"LanguageNameId":7150,"Repeatable":true,"ResearchTime":35,"internal_name":"Bodkin Arrow"},"201":{"Cost":{"Food":300,"Gold":200},"ID":201,"LanguageHelpId":28151,"LanguageNameId":7151,"Repeatable":true,"ResearchTime":40,"internal_name":"Bracer"},"202":{"Cost":{"Food":100,"Wood":50},"ID":202,"LanguageHelpId":28189,"LanguageNameId":7189,"Repeatable":true,"ResearchTime":25,"internal_name":"Double Bit Axe"},"203":{"Cost":{"Food":150,"Wood":100},"ID":203,"LanguageHelpId":28190,"LanguageNameId":7190,"Repeatable":true,"ResearchTime":50,"internal_name":"Bow Saw"},"211":{"Cost":{"Food":100},"ID":211,"LanguageHelpId":28208,"LanguageNameId":7208,"Repeatable":true,"ResearchTime":40,"internal_name":"Padded Archer Armor"},"212":{"Cost":{"Food":150,"Gold":150},"ID":212,"LanguageHelpId":28209,"LanguageNameId":7209,"Repeatable":true,"ResearchTime":55,"internal_name":"Leather Archer Armor"},"213":{"Cost":{"Food":175,"Wood":50},"ID":213,"LanguageHelpId":28211,"LanguageNameId":7211,"Repeatable":true,"ResearchTime":75,"internal_name":"Wheel Barrow"},"215":{"Cost":{"Food":100},"ID":215,"LanguageHelpId":28210,"LanguageNameId":7210,"Repeatable":true,"ResearchTime":40,"internal_name":"Squires"},"219":{"Cost":{"Food":250,"Gold":250},"ID":219,"LanguageHelpId":28216,"LanguageNameId":7216,"Repeatable":true,"ResearchTime":70,"internal_name":"Ring Archer Armor"},"221":{"Cost":{"Food":300,"Wood":200},"ID":221,"LanguageHelpId":28231,"LanguageNameId":7231,"Repeatable":true,"ResearchTime":100,"internal_name":"Two Man Saw"},"230":{"Cost":{"Food":0,"Gold":200},"ID":230,"LanguageHelpId":28222,"LanguageNameId":7222,"Repeatable":true,"ResearchTime":55,"internal_name":"Block Printing"},"231":{"Cost":{"Food":0,"Gold":175},"ID":231,"LanguageHelpId":28221,"LanguageNameId":7221,"Repeatable":true,"ResearchTime":60,"internal_name":"Sanctity"},"233":{"Cost":{"Food":0,"Gold":120},"ID":233,"LanguageHelpId":28220,"LanguageNameId":7220,"Repeatable":true,"ResearchTime":65,"internal_name":"Illumination"},"249":{"Cost":{"Food":300,"Wood":200},"ID":249,"LanguageHelpId":28246,"LanguageNameId":7246,"Repeatable":true,"ResearchTime":55,"internal_name":"Hand Cart"},"252":{"Cost":{"Food":0,"Gold":140},"ID":252,"LanguageHelpId":28249,"LanguageNameId":7249,"Repeatable":true,"ResearchTime":50,"internal_name":"Fervor"},"278":{"Cost":{"Food":100,"Wood":75},"ID":278,"LanguageHelpId":28276,"LanguageNameId":7276,"Repeatable":true,"ResearchTime":30,"internal_name":"Stone Mining"},"279":{"Cost":{"Food":175,"Wood":75},"ID":279,"LanguageHelpId":28277,"LanguageNameId":7277,"Repeatable":true,"ResearchTime":75,"internal_name":"Stone Shaft Mining"},"280":{"Cost":{"Food":300,"Gold":100},"ID":280,"LanguageHelpId":28282,"LanguageNameId":7282,"Repeatable":false,"ResearchTime":40,"internal_name":"Town Patrol"},"315":{"Cost":{"Food":150,"Gold":150},"ID":315,"LanguageHelpId":28319,"LanguageNameId":7319,"Repeatable":true,"ResearchTime":60,"internal_name":"Conscription"},"316":{"Cost":{"Food":0,"Gold":475},"ID":316,"LanguageHelpId":28315,"LanguageNameId":7315,"Repeatable":false,"ResearchTime":50,"internal_name":"Redemption"},"319":{"Cost":{"Food":0,"Gold":325},"ID":319,"LanguageHelpId":28316,"LanguageNameId":7316,"Repeatable":false,"ResearchTime":40,"internal_name":"Atonement"},"321":{"Cost":{"Food":400,"Wood":200},"ID":321,"LanguageHelpId":28322,"LanguageNameId":7322,"Repeatable":true,"ResearchTime":10,"internal_name":"Sappers"},"322":{"Cost":{"Food":200,"Stone":100},"ID":322,"LanguageHelpId":28321,"LanguageNameId":7321,"Repeatable":false,"ResearchTime":35,"internal_name":"Murder Holes"},"373":{"Cost":{"Food":1000,"Gold":300},"ID":373,"LanguageHelpId":28377,"LanguageNameId":7377,"Repeatable":true,"ResearchTime":60,"internal_name":"Shipwright"},"374":{"Cost":{"Food":250,"Gold":150},"ID":374,"LanguageHelpId":28372,"LanguageNameId":7372,"Repeatable":true,"ResearchTime":50,"internal_name":"Careening"},"375":{"Cost":{"Food":600,"Gold":400},"ID":375,"LanguageHelpId":28373,"LanguageNameId":7373,"Repeatable":true,"ResearchTime":60,"internal_name":"Dry Dock"},"377":{"Cost":{"Food":500,"Wood":600},"ID":377,"LanguageHelpId":28378,"LanguageNameId":7378,"Repeatable":true,"ResearchTime":45,"internal_name":"Siege Engineers"},"379":{"Cost":{"Food":400,"Wood":400},"ID":379,"LanguageHelpId":28376,"LanguageNameId":7376,"Repeatable":true,"ResearchTime":75,"internal_name":"Hoardings"},"380":{"Cost":{"Food":350,"Gold":100},"ID":380,"LanguageHelpId":28374,"LanguageNameId":7374,"Repeatable":true,"ResearchTime":30,"internal_name":"Heated Shot"},"408":{"Cost":{"Gold":200},"ID":408,"LanguageHelpId":28408,"LanguageNameId":7408,"Repeatable":false,"ResearchTime":1,"internal_name":"Spy Technology"},"435":{"Cost":{"Food":150,"Gold":100},"ID":435,"LanguageHelpId":28409,"LanguageNameId":7409,"Repeatable":true,"ResearchTime":50,"internal_name":"Bloodlines"},"436":{"Cost":{"Food":200,"Gold":250},"ID":436,"LanguageHelpId":28415,"LanguageNameId":7415,"Repeatable":true,"ResearchTime":65,"internal_name":"Parthian Tactics"},"437":{"Cost":{"Food":300,"Wood":250},"ID":437,"LanguageHelpId":28411,"LanguageNameId":7411,"Repeatable":true,"ResearchTime":45,"internal_name":"Thumb Ring"},"438":{"Cost":{"Food":0,"Gold":200},"ID":438,"LanguageHelpId":28416,"LanguageNameId":7416,"Repeatable":false,"ResearchTime":75,"internal_name":"Theocracy"},"439":{"Cost":{"Food":0,"Gold":1000},"ID":439,"LanguageHelpId":28412,"LanguageNameId":7412,"Repeatable":false,"ResearchTime":60,"internal_name":"Heresy"},"440":{"Cost":{"Food":400,"Gold":250},"ID":440,"LanguageHelpId":28325,"LanguageNameId":7325,"Repeatable":true,"ResearchTime":60,"internal_name":"Spanish Supremacy"},"441":{"Cost":{"Food":0,"Gold":200},"ID":441,"LanguageHelpId":28435,"LanguageNameId":7435,"Repeatable":true,"ResearchTime":35,"internal_name":"Herbal Medicine"},"445":{"Cost":{"Gold":500,"Wood":800},"ID":445,"LanguageHelpId":28438,"LanguageNameId":7438,"Repeatable":true,"ResearchTime":60,"internal_name":"Korean catapults"},"454":{"Cost":{"Food":650,"Gold":500},"ID":454,"LanguageHelpId":28447,"LanguageNameId":7447,"Repeatable":true,"ResearchTime":50,"internal_name":"Counterweights"},"455":{"Cost":{"Gold":200,"Wood":400},"ID":455,"LanguageHelpId":28448,"LanguageNameId":7448,"Repeatable":false,"ResearchTime":40,"internal_name":"Detinets"},"457":{"Cost":{"Gold":600,"Wood":400},"ID":457,"LanguageHelpId":28439,"LanguageNameId":7439,"Repeatable":true,"ResearchTime":40,"internal_name":"Gothic Perfusion"},"460":{"Cost":{"Food":400,"Gold":350},"ID":460,"LanguageHelpId":28326,"LanguageNameId":7326,"Repeatable":true,"ResearchTime":40,"internal_name":"Aztec Sacrifice"},"461":{"Cost":{"Gold":400,"Wood":800},"ID":461,"LanguageHelpId":28327,"LanguageNameId":7327,"Repeatable":true,"ResearchTime":40,"internal_name":"Britons City Rights"},"462":{"Cost":{"Stone":200,"Wood":400},"ID":462,"LanguageHelpId":28368,"LanguageNameId":7368,"Repeatable":true,"ResearchTime":40,"internal_name":"Chinese Great Wall"},"463":{"Cost":{"Food":600,"Gold":450},"ID":463,"LanguageHelpId":28312,"LanguageNameId":7312,"Repeatable":true,"ResearchTime":40,"internal_name":"Viking Chieftains"},"464":{"Cost":{"Food":250,"Gold":300},"ID":464,"LanguageHelpId":28313,"LanguageNameId":7313,"Repeatable":true,"ResearchTime":40,"internal_name":"Byzantines Greek Fire"},"482":{"Cost":{"Food":250,"Gold":200},"ID":482,"LanguageHelpId":28369,"LanguageNameId":7369,"Repeatable":true,"ResearchTime":30,"internal_name":"Stronghold"},"483":{"Cost":{"Gold":200,"Wood":300},"ID":483,"LanguageHelpId":28370,"LanguageNameId":7370,"Repeatable":false,"ResearchTime":40,"internal_name":"Huns UT"},"484":{"Cost":{"Food":300,"Wood":300},"ID":484,"LanguageHelpId":28371,"LanguageNameId":7371,"Repeatable":true,"ResearchTime":40,"internal_name":"Japanese UT"},"485":{"Cost":{"Food":300,"Gold":300},"ID":485,"LanguageHelpId":28379,"LanguageNameId":7379,"Repeatable":true,"ResearchTime":40,"internal_name":"Mayans UT"},"486":{"Cost":{"Food":300,"Wood":300},"ID":486,"LanguageHelpId":28380,"LanguageNameId":7380,"Repeatable":true,"ResearchTime":40,"internal_name":"Koreans UT"},"487":{"Cost":{"Gold":150,"Wood":300},"ID":487,"LanguageHelpId":28280,"LanguageNameId":7280,"Repeatable":false,"ResearchTime":40,"internal_name":"Mongols UT"},"488":{"Cost":{"Food":400,"Gold":300},"ID":488,"LanguageHelpId":28281,"LanguageNameId":7281,"Repeatable":false,"ResearchTime":40,"internal_name":"Persians UT"},"489":{"Cost":{"Gold":350,"Wood":400},"ID":489,"LanguageHelpId":28283,"LanguageNameId":7283,"Repeatable":true,"ResearchTime":60,"internal_name":"Teutons UT"},"491":{"Cost":{"Food":350,"Gold":150},"ID":491,"LanguageHelpId":28285,"LanguageNameId":7285,"Repeatable":true,"ResearchTime":60,"internal_name":"Sipahi"},"492":{"Cost":{"Food":100,"Gold":300},"ID":492,"LanguageHelpId":28286,"LanguageNameId":7286,"Repeatable":true,"ResearchTime":40,"internal_name":"Spanish UT"},"493":{"Cost":{"Gold":500,"Wood":600},"ID":493,"LanguageHelpId":28287,"LanguageNameId":7287,"Repeatable":true,"ResearchTime":40,"internal_name":"Franks UT"},"494":{"Cost":{"Gold":150,"Wood":200},"ID":494,"LanguageHelpId":28272,"LanguageNameId":7272,"Repeatable":true,"ResearchTime":40,"internal_name":"Pavise"},"499":{"Cost":{"Food":500,"Gold":250},"ID":499,"LanguageHelpId":28273,"LanguageNameId":7273,"Repeatable":true,"ResearchTime":60,"internal_name":"Silk Route"},"506":{"Cost":{"Food":250,"Wood":200},"ID":506,"LanguageHelpId":28270,"LanguageNameId":7270,"Repeatable":true,"ResearchTime":40,"internal_name":"Indians UT"},"507":{"Cost":{"Food":500,"Gold":300},"ID":507,"LanguageHelpId":28271,"LanguageNameId":7271,"Repeatable":true,"ResearchTime":40,"internal_name":"Indians UT2"},"513":{"Cost":{"Food":900,"Gold":500},"ID":513,"LanguageHelpId":28269,"LanguageNameId":7269,"Repeatable":true,"ResearchTime":40,"internal_name":"Slavs UT"},"514":{"Cost":{"Food":200,"Gold":300},"ID":514,"LanguageHelpId":28275,"LanguageNameId":7275,"Repeatable":false,"ResearchTime":40,"internal_name":"Magyars UT"},"515":{"Cost":{"Gold":400,"Wood":600},"ID":515,"LanguageHelpId":28274,"LanguageNameId":7274,"Repeatable":true,"ResearchTime":40,"internal_name":"Indians UT"},"516":{"Cost":{"Food":200,"Gold":300},"ID":516,"LanguageHelpId":28266,"LanguageNameId":7266,"Repeatable":false,"ResearchTime":40,"internal_name":"Incas UT"},"517":{"Cost":{"Food":600,"Gold":600},"ID":517,"LanguageHelpId":28267,"LanguageNameId":7267,"Repeatable":true,"ResearchTime":40,"internal_name":"Indians UT"},"572":{"Cost":{"Gold":300,"Wood":200},"ID":572,"LanguageHelpId":28250,"LanguageNameId":7250,"Repeatable":true,"ResearchTime":40,"internal_name":"Portuguese UT"},"573":{"Cost":{"Food":700,"Gold":400},"ID":573,"LanguageHelpId":28251,"LanguageNameId":7251,"Repeatable":true,"ResearchTime":40,"internal_name":"Portuguese UT"},"574":{"Cost":{"Food":300,"Gold":300},"ID":574,"LanguageHelpId":28252,"LanguageNameId":7252,"Repeatable":false,"ResearchTime":40,"internal_name":"Ethiopian UT"},"575":{"Cost":{"Food":1000,"Gold":600},"ID":575,"LanguageHelpId":28253,"LanguageNameId":7253,"Repeatable":true,"ResearchTime":40,"internal_name":"Ethiopian UT"},"576":{"Cost":{"Food":200,"Wood":300},"ID":576,"LanguageHelpId":28254,"LanguageNameId":7254,"Repeatable":true,"ResearchTime":40,"internal_name":"Malian UT"},"577":{"Cost":{"Food":650,"Gold":400},"ID":577,"LanguageHelpId":28255,"LanguageNameId":7255,"Repeatable":true,"ResearchTime":40,"internal_name":"Malian UT"},"578":{"Cost":{"Food":250,"Gold":250},"ID":578,"LanguageHelpId":28256,"LanguageNameId":7256,"Repeatable":true,"ResearchTime":40,"internal_name":"Berber UT"},"579":{"Cost":{"Food":700,"Gold":300},"ID":579,"LanguageHelpId":28257,"LanguageNameId":7257,"Repeatable":true,"ResearchTime":40,"internal_name":"Berber UT"},"602":{"Cost":{"Food":150,"Gold":50},"ID":602,"LanguageHelpId":28258,"LanguageNameId":7258,"Repeatable":true,"ResearchTime":25,"internal_name":"Arson"},"608":{"Cost":{"Food":250,"Wood":250},"ID":608,"LanguageHelpId":28278,"LanguageNameId":7278,"Repeatable":true,"ResearchTime":25,"internal_name":"Arrowslits"},"622":{"Cost":{"Gold":450,"Wood":300},"ID":622,"LanguageHelpId":28291,"LanguageNameId":7291,"Repeatable":true,"ResearchTime":40,"internal_name":"Khmer UT"},"623":{"Cost":{"Food":700,"Gold":400},"ID":623,"LanguageHelpId":28292,"LanguageNameId":7292,"Repeatable":true,"ResearchTime":40,"internal_name":"Khmer UT"},"624":{"Cost":{"Food":300,"Gold":300},"ID":624,"LanguageHelpId":28293,"LanguageNameId":7293,"Repeatable":false,"ResearchTime":40,"internal_name":"Malay UT"},"625":{"Cost":{"Food":850,"Gold":500},"ID":625,"LanguageHelpId":28294,"LanguageNameId":7294,"Repeatable":false,"ResearchTime":40,"internal_name":"Malay UT"},"626":{"Cost":{"Food":400,"Wood":300},"ID":626,"LanguageHelpId":28295,"LanguageNameId":7295,"Repeatable":true,"ResearchTime":40,"internal_name":"Burmese UT"},"627":{"Cost":{"Food":300,"Gold":300},"ID":627,"LanguageHelpId":28296,"LanguageNameId":7296,"Repeatable":true,"ResearchTime":40,"internal_name":"Burmese UT"},"628":{"Cost":{"Food":250,"Gold":250},"ID":628,"LanguageHelpId":28297,"LanguageNameId":7297,"Repeatable":true,"ResearchTime":40,"internal_name":"Vietnamese UT"},"629":{"Cost":{"Food":550,"Wood":200},"ID":629,"LanguageHelpId":28298,"LanguageNameId":7298,"Repeatable":true,"ResearchTime":60,"internal_name":"Vietnamese UT"},"685":{"Cost":{"Food":400,"Gold":200},"ID":685,"LanguageHelpId":28307,"LanguageNameId":7307,"Repeatable":true,"ResearchTime":35,"internal_name":"Khmer UT"},"686":{"Cost":{"Food":900,"Gold":450},"ID":686,"LanguageHelpId":28308,"LanguageNameId":7308,"Repeatable":true,"ResearchTime":40,"internal_name":"Khmer UT"},"687":{"Cost":{"Gold":300,"Wood":400},"ID":687,"LanguageHelpId":28309,"LanguageNameId":7309,"Repeatable":true,"ResearchTime":40,"internal_name":"Malay UT"},"688":{"Cost":{"Gold":400,"Wood":500},"ID":688,"LanguageHelpId":28310,"LanguageNameId":7310,"Repeatable":false,"ResearchTime":50,"internal_name":"Malay UT"},"689":{"Cost":{"Food":200,"Wood":300},"ID":689,"LanguageHelpId":28311,"LanguageNameId":7311,"Repeatable":true,"ResearchTime":40,"internal_name":"Burmese UT"},"690":{"Cost":{"Food":650,"Gold":400},"ID":690,"LanguageHelpId":28398,"LanguageNameId":7398,"Repeatable":true,"ResearchTime":40,"internal_name":"Burmese UT"},"691":{"Cost":{"Food":250,"Gold":250},"ID":691,"LanguageHelpId":28399,"LanguageNameId":7399,"Repeatable":true,"ResearchTime":40,"internal_name":"Vietnamese UT"},"692":{"Cost":{"Food":500,"Gold":200},"ID":692,"LanguageHelpId":28400,"LanguageNameId":7400,"Repeatable":true,"ResearchTime":40,"internal_name":"Vietnamese UT"},"716":{"Cost":{"Food":75,"Gold":75},"ID":716,"LanguageHelpId":28403,"LanguageNameId":7403,"Repeatable":false,"ResearchTime":20,"internal_name":"Supplies"},"754":{"Cost":{"Food":400,"Gold":300},"ID":754,"LanguageHelpId":28342,"LanguageNameId":7342,"Repeatable":true,"ResearchTime":45,"internal_name":"Burgundian Vineyards"},"755":{"Cost":{"Food":200,"Gold":150},"ID":755,"LanguageHelpId":28343,"LanguageNameId":7343,"Repeatable":true,"ResearchTime":10,"internal_name":"Flemish Revolution"},"756":{"Cost":{"Food":400,"Gold":300},"ID":756,"LanguageHelpId":28344,"LanguageNameId":7344,"Repeatable":false,"ResearchTime":60,"internal_name":"First Crusade"},"757":{"Cost":{"Food":700,"Gold":600},"ID":757,"LanguageHelpId":28345,"LanguageNameId":7345,"Repeatable":true,"ResearchTime":45,"internal_name":"Hauberk"},"782":{"Cost":{"Food":500,"Gold":300},"ID":782,"LanguageHelpId":28348,"LanguageNameId":7348,"Repeatable":true,"ResearchTime":45,"internal_name":"Szlachta Privileges"},"783":{"Cost":{"Food":750,"Gold":550},"ID":783,"LanguageHelpId":28349,"LanguageNameId":7349,"Repeatable":true,"ResearchTime":60,"internal_name":"Lechitic Legacy"},"784":{"Cost":{"Food":300,"Gold":300},"ID":784,"LanguageHelpId":28350,"LanguageNameId":7350,"Repeatable":true,"ResearchTime":45,"internal_name":"Wagenburg Tactics"},"785":{"Cost":{"Food":500,"Gold":450},"ID":785,"LanguageHelpId":28351,"LanguageNameId":7351,"Repeatable":false,"ResearchTime":45,"internal_name":"Hussite Reforms"},"831":{"Cost":{"Food":300,"Gold":200},"ID":831,"LanguageHelpId":28357,"LanguageNameId":7357,"Repeatable":true,"ResearchTime":45,"internal_name":"Medical Corps"},"832":{"Cost":{"Food":750,"Gold":600},"ID":832,"LanguageHelpId":28358,"LanguageNameId":7358,"Repeatable":true,"ResearchTime":60,"internal_name":"Wootz Steel"},"833":{"Cost":{"Gold":275,"Wood":375},"ID":833,"LanguageHelpId":28359,"LanguageNameId":7359,"Repeatable":true,"ResearchTime":45,"internal_name":"Paiks"},"834":{"Cost":{"Gold":650,"Wood":800},"ID":834,"LanguageHelpId":28360,"LanguageNameId":7360,"Repeatable":true,"ResearchTime":60,"internal_name":"Mahayana"},"835":{"Cost":{"Food":500,"Gold":450},"ID":835,"LanguageHelpId":28361,"LanguageNameId":7361,"Repeatable":true,"ResearchTime":45,"internal_name":"Kshatriyas"},"836":{"Cost":{"Food":800,"Gold":700},"ID":836,"LanguageHelpId":28362,"LanguageNameId":7362,"Repeatable":true,"ResearchTime":60,"internal_name":"Frontier Guards"},"875":{"Cost":{"Food":100,"Gold":100},"ID":875,"LanguageHelpId":28450,"LanguageNameId":7450,"Repeatable":false,"ResearchTime":25,"internal_name":"Gambesons"},"883":{"Cost":{"Gold":300,"Wood":400},"ID":883,"LanguageHelpId":28444,"LanguageNameId":7444,"Repeatable":false,"ResearchTime":45,"internal_name":"Ballistas"},"884":{"Cost":{"Food":700,"Gold":800},"ID":884,"LanguageHelpId":28445,"LanguageNameId":7445,"Repeatable":true,"ResearchTime":60,"internal_name":"Comitatenses"}},"unit_upgrades":{"6":{"Cost":{"Gold":130,"Wood":230},"ID":901,"ResearchTime":50,"internal_name":"Elite Skirmisher"},"21":{"Cost":{"Food":230,"Gold":100},"ID":901,"ResearchTime":50,"internal_name":"War Galley"},"24":{"Cost":{"Food":175,"Gold":125},"ID":901,"ResearchTime":35,"internal_name":"Crossbow"},"75":{"Cost":{"Food":100,"Gold":40},"ID":901,"ResearchTime":40,"internal_name":"Man-At-Arms"},"77":{"Cost":{"Food":150,"Gold":65},"ID":901,"ResearchTime":40,"internal_name":"Long Swordsman"},"207":{"Cost":{"Food":1000,"Gold":500},"ID":901,"ResearchTime":125,"internal_name":"Heavy Camel"},"283":{"Cost":{"Food":300,"Gold":300},"ID":901,"ResearchTime":100,"internal_name":"Cavalier"},"330":{"Cost":{"Food":325,"Gold":360},"ID":901,"ResearchTime":105,"internal_name":"Heavy Camel"},"358":{"Cost":{"Food":160,"Gold":90},"ID":901,"ResearchTime":35,"internal_name":"Pikeman"},"359":{"Cost":{"Food":300,"Gold":600},"ID":901,"ResearchTime":50,"internal_name":"Halberdier"},"420":{"Cost":{},"ID":901,"ResearchTime":0,"internal_name":"Cannon Galleon"},"422":{"Cost":{"Food":300},"ID":901,"ResearchTime":50,"internal_name":"Capped Ram"},"441":{"Cost":{"Food":500,"Gold":600},"ID":901,"ResearchTime":50,"internal_name":"Hussar"},"442":{"Cost":{"Food":400,"Wood":315},"ID":901,"ResearchTime":65,"internal_name":"Galleon"},"473":{"Cost":{"Food":300,"Gold":100},"ID":901,"ResearchTime":60,"internal_name":"Two-Handed Swordsman"},"474":{"Cost":{"Food":900,"Gold":500},"ID":901,"ResearchTime":50,"internal_name":"Heavy Cavalry Archer"},"492":{"Cost":{"Food":450,"Gold":400},"ID":901,"ResearchTime":50,"internal_name":"Arbalest"},"527":{"Cost":{"Food":230,"Gold":100},"ID":901,"ResearchTime":50,"internal_name":"War Galley"},"528":{"Cost":{"Gold":300,"Wood":200},"ID":901,"ResearchTime":50,"internal_name":"Heavy Demolition"},"529":{"Cost":{"Food":230,"Gold":100},"ID":901,"ResearchTime":50,"internal_name":"War Galley"},"530":{"Cost":{"Food":850,"Gold":850},"ID":901,"ResearchTime":60,"internal_name":"Elite Longbow"},"531":{"Cost":{"Food":1000,"Gold":750},"ID":901,"ResearchTime":45,"internal_name":"Elite Throwing Axemen"},"532":{"Cost":{"Gold":250,"Wood":280},"ID":901,"ResearchTime":50,"internal_name":"Fast Fire Ship"},"533":{"Cost":{"Food":750,"Gold":475},"ID":901,"ResearchTime":60,"internal_name":"Unique Heroic Viking LBT"},"534":{"Cost":{"Food":1000,"Gold":800},"ID":901,"ResearchTime":45,"internal_name":"Elite Woad Raider"},"542":{"Cost":{"Food":800,"Wood":900},"ID":901,"ResearchTime":50,"internal_name":"Heavy Scorpion"},"546":{"Cost":{"Food":150,"Gold":50},"ID":901,"ResearchTime":45,"internal_name":"Light Cavalry"},"548":{"Cost":{"Food":1000},"ID":901,"ResearchTime":75,"internal_name":"Siege Ram"},"550":{"Cost":{"Food":800,"Gold":500},"ID":901,"ResearchTime":75,"internal_name":"Onager"},"553":{"Cost":{"Food":1200,"Gold":800},"ID":901,"ResearchTime":50,"internal_name":"Elite Cataphract"},"554":{"Cost":{"Food":950,"Gold":500},"ID":901,"ResearchTime":50,"internal_name":"Elite Teutonic Knight"},"555":{"Cost":{"Food":1200,"Gold":550},"ID":901,"ResearchTime":40,"internal_name":"Elite Huskarl"},"556":{"Cost":{"Food":600,"Gold":500},"ID":901,"ResearchTime":50,"internal_name":"Elite Mameluke"},"557":{"Cost":{"Food":850,"Gold":750},"ID":901,"ResearchTime":55,"internal_name":"Elite Jannisary"},"558":{"Cost":{"Food":1600,"Gold":1200},"ID":901,"ResearchTime":75,"internal_name":"Elite War Elephant"},"559":{"Cost":{"Food":950,"Gold":950},"ID":901,"ResearchTime":50,"internal_name":"Elite Chu Ko Nu"},"560":{"Cost":{"Food":750,"Gold":650},"ID":901,"ResearchTime":60,"internal_name":"Elite Samurai"},"561":{"Cost":{"Food":1100,"Gold":675},"ID":901,"ResearchTime":50,"internal_name":"Elite Mangudai"},"567":{"Cost":{"Food":750,"Gold":350},"ID":901,"ResearchTime":85,"internal_name":"Champion"},"569":{"Cost":{"Food":1300,"Gold":750},"ID":901,"ResearchTime":170,"internal_name":"Paladin"},"588":{"Cost":{"Food":1450,"Gold":1000},"ID":901,"ResearchTime":150,"internal_name":"Siege Onager"},"691":{"Cost":{"Gold":500,"Wood":525},"ID":901,"ResearchTime":30,"internal_name":"Elite Cannon Galley"},"694":{"Cost":{"Food":1075,"Gold":475},"ID":901,"ResearchTime":45,"internal_name":"Elite Berserk"},"726":{"Cost":{"Food":1000,"Gold":500},"ID":901,"ResearchTime":45,"internal_name":"Elite Jaguar Man"},"752":{"Cost":{"Food":800,"Gold":500},"ID":901,"ResearchTime":50,"internal_name":"Elite Eagle Warrior"},"753":{"Cost":{"Food":200,"Gold":200},"ID":901,"ResearchTime":50,"internal_name":"Heavy Eagle Warrior"},"757":{"Cost":{"Food":1000,"Gold":500},"ID":901,"ResearchTime":45,"internal_name":"Elite Tarkan"},"761":{"Cost":{"Food":1200,"Gold":550},"ID":901,"ResearchTime":40,"internal_name":"Elite Huskarl"},"765":{"Cost":{"Food":700,"Wood":1000},"ID":901,"ResearchTime":45,"internal_name":"Elite Plumed Archer"},"773":{"Cost":{"Food":1200,"Gold":600},"ID":901,"ResearchTime":60,"internal_name":"Elite Conquistador"},"829":{"Cost":{"Gold":800,"Wood":1000},"ID":901,"ResearchTime":75,"internal_name":"Elite War Wagon"},"832":{"Cost":{"Food":1000,"Gold":800},"ID":901,"ResearchTime":65,"internal_name":"Elite Turtle Ship"},"868":{"Cost":{"Food":900,"Gold":750},"ID":901,"ResearchTime":60,"internal_name":"Elite Genoese Bow"},"871":{"Cost":{"Food":800,"Gold":600},"ID":901,"ResearchTime":60,"internal_name":"Elite Magyar Huszar"},"875":{"Cost":{"Food":900,"Gold":500},"ID":901,"ResearchTime":80,"internal_name":"Elite Elephant Archer"},"878":{"Cost":{"Food":1000,"Gold":600},"ID":901,"ResearchTime":60,"internal_name":"Elite Siege Tower"},"881":{"Cost":{"Food":900,"Gold":500},"ID":901,"ResearchTime":45,"internal_name":"Elite Kamayuk"},"887":{"Cost":{"Food":1000,"Gold":500},"ID":901,"ResearchTime":45,"internal_name":"Elite Tarkan"},"1003":{"Cost":{"Food":1200,"Gold":500},"ID":901,"ResearchTime":45,"internal_name":"Elite Organ Gun"},"1006":{"Cost":{"Food":700,"Gold":525},"ID":901,"ResearchTime":60,"internal_name":"Elite Caravel"},"1009":{"Cost":{"Gold":500,"Wood":1000},"ID":901,"ResearchTime":45,"internal_name":"Elite Camel Archer"},"1012":{"Cost":{"Food":500,"Wood":450},"ID":901,"ResearchTime":60,"internal_name":"Elite Genitour"},"1015":{"Cost":{"Food":900,"Gold":600},"ID":901,"ResearchTime":45,"internal_name":"Elite Mali Unit"},"1018":{"Cost":{"Food":900,"Gold":450},"ID":901,"ResearchTime":45,"internal_name":"Elite Ethiopia Unit"},"1122":{"Cost":{"Food":1000,"Gold":500},"ID":901,"ResearchTime":70,"internal_name":"Elite Ballista Elephant"},"1125":{"Cost":{"Food":900,"Gold":600},"ID":901,"ResearchTime":40,"internal_name":"Elite Karambit Warrior"},"1128":{"Cost":{"Food":1000,"Gold":750},"ID":901,"ResearchTime":65,"internal_name":"Elite Arambai"},"1131":{"Cost":{"Food":1000,"Gold":750},"ID":901,"ResearchTime":45,"internal_name":"Elite Rattan Archer"},"1132":{"Cost":{},"ID":901,"ResearchTime":0,"internal_name":"Battle Elephant (make avail)"},"1134":{"Cost":{"Food":1100,"Gold":700},"ID":901,"ResearchTime":100,"internal_name":"Elite Battle Elephant"},"1155":{"Cost":{"Gold":300,"Wood":300},"ID":901,"ResearchTime":50,"internal_name":"Imperial Skirmisher"},"1227":{"Cost":{"Food":1000,"Gold":750},"ID":901,"ResearchTime":70,"internal_name":"Elite Konnik"},"1230":{"Cost":{"Food":700,"Gold":900},"ID":901,"ResearchTime":40,"internal_name":"Elite Keshik"},"1233":{"Cost":{"Food":1100,"Wood":1000},"ID":901,"ResearchTime":65,"internal_name":"Elite Kipchak"},"1236":{"Cost":{"Food":750,"Gold":750},"ID":901,"ResearchTime":45,"internal_name":"Elite Leitis"},"1255":{"Cost":{"Food":1000,"Gold":750},"ID":901,"ResearchTime":70,"internal_name":"Elite Konnik"},"1372":{"Cost":{"Food":900,"Gold":550},"ID":901,"ResearchTime":55,"internal_name":"Elite Steppe Lancer"},"1657":{"Cost":{"Food":1000,"Gold":800},"ID":901,"ResearchTime":45,"internal_name":"Elite Coustillier"},"1659":{"Cost":{"Food":800,"Gold":675},"ID":901,"ResearchTime":45,"internal_name":"Elite Serjeant"},"1661":{"Cost":{"Food":800,"Gold":675},"ID":901,"ResearchTime":45,"internal_name":"Elite Serjeant"},"1703":{"Cost":{"Food":800,"Gold":600},"ID":901,"ResearchTime":45,"internal_name":"Elite Obuch"},"1706":{"Cost":{"Gold":600,"Wood":800},"ID":901,"ResearchTime":45,"internal_name":"Elite Hussite Wagon"},"1707":{"Cost":{"Food":600,"Gold":800},"ID":901,"ResearchTime":60,"internal_name":"Winged Hussar"},"1709":{"Cost":{"Food":1100,"Gold":800},"ID":901,"ResearchTime":140,"internal_name":"Houfnice"},"1737":{"Cost":{"Food":900,"Gold":450},"ID":901,"ResearchTime":45,"internal_name":"Elite Urumi Swordsman"},"1743":{"Cost":{"Food":1000,"Gold":650},"ID":901,"ResearchTime":45,"internal_name":"Elite Chakram Thrower"},"1746":{"Cost":{"Food":850},"ID":901,"ResearchTime":60,"internal_name":"Elite Armored Elephant"},"1749":{"Cost":{"Food":950,"Gold":575},"ID":901,"ResearchTime":45,"internal_name":"Elite Ghulam"},"1753":{"Cost":{"Food":850,"Gold":500},"ID":901,"ResearchTime":45,"internal_name":"Elite Shrivamsha Rider"},"1761":{"Cost":{"Food":800,"Wood":800},"ID":901,"ResearchTime":45,"internal_name":"Elite Ratha"},"1787":{"Cost":{"Food":160,"Gold":90},"ID":901,"ResearchTime":35,"internal_name":"Pikeman"},"1788":{"Cost":{"Food":300,"Gold":600},"ID":901,"ResearchTime":50,"internal_name":"Halberdier"},"1792":{"Cost":{"Food":1100,"Gold":900},"ID":901,"ResearchTime":60,"internal_name":"Elite Centurion"},"1793":{"Cost":{"Food":800,"Gold":400},"ID":901,"ResearchTime":100,"internal_name":"Legionary"}},"units":{"4":{"AccuracyPercent":80,"Armours":[{"Amount":0,"Class":4},{"Amount":0,"Class":15},{"Amount":0,"Class":3},{"Amount":0,"Class":31}],"Attack":4,"AttackDelaySeconds":0.35,"Attacks":[{"Amount":3,"Class":27},{"Amount":0,"Class":21},{"Amount":4,"Class":3},{"Amount":0,"Class":17},{"Amount":0,"Class":13}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":45,"Wood":25},"FrameDelay":15,"GarrisonCapacity":0,"HP":30,"ID":4,"LanguageHelpId":26083,"LanguageNameId":5083,"LineOfSight":6,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":0,"Range":4,"RechargeRate":0,"ReloadTime":2,"Speed":0.96,"TrainTime":35,"Trait":0,"TraitPiece":0,"internal_name":"ARCHR"},"5":{"AccuracyPercent":75,"Armours":[{"Amount":1,"Class":4},{"Amount":0,"Class":15},{"Amount":0,"Class":3},{"Amount":0,"Class":23},{"Amount":0,"Class":31}],"Attack":17,"AttackDelaySeconds":0.35,"Attacks":[{"Amount":1,"Class":27},{"Amount":0,"Class":11},{"Amount":10,"Class":1},{"Amount":17,"Class":3},{"Amount":2,"Class":17}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":45,"Gold":50},"FrameDelay":15,"GarrisonCapacity":0,"HP":40,"ID":5,"LanguageHelpId":26086,"LanguageNameId":5086,"LineOfSight":9,"MaxCharge":0,"MeleeArmor":1,"MinRange":0,"PierceArmor":0,"Range":7,"RechargeRate":0,"ReloadTime":3.45,"Speed":0.96,"TrainTime":34,"Trait":0,"TraitPiece":0,"internal_name":"HCANR"},"6":{"AccuracyPercent":90,"Armours":[{"Amount":0,"Class":4},{"Amount":0,"Class":15},{"Amount":4,"Class":3},{"Amount":0,"Class":31},{"Amount":0,"Class":38}],"Attack":3,"AttackDelaySeconds":0.5066666666666667,"Attacks":[{"Amount":2,"Class":28},{"Amount":3,"Class":27},{"Amount":0,"Class":21},{"Amount":4,"Class":15},{"Amount":3,"Class":3},{"Amount":0,"Class":17}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":25,"Wood":35},"FrameDelay":19,"GarrisonCapacity":0,"HP":35,"ID":6,"LanguageHelpId":26087,"LanguageNameId":5087,"LineOfSight":7,"MaxCharge":0,"MeleeArmor":0,"MinRange":1,"PierceArmor":4,"Range":5,"RechargeRate":0,"ReloadTime":3,"Speed":0.96,"TrainTime":22,"Trait":0,"TraitPiece":0,"internal_name":"HXBOW"},"7":{"AccuracyPercent":90,"Armours":[{"Amount":0,"Class":4},{"Amount":0,"Class":15},{"Amount":3,"Class":3},{"Amount":0,"Class":31},{"Amount":0,"Class":38}],"Attack":2,"AttackDelaySeconds":0.5066666666666667,"Attacks":[{"Amount":0,"Class":28},{"Amount":3,"Class":27},{"Amount":0,"Class":21},{"Amount":3,"Class":15},{"Amount":2,"Class":3},{"Amount":0,"Class":17}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":25,"Wood":35},"FrameDelay":19,"GarrisonCapacity":0,"HP":30,"ID":7,"LanguageHelpId":26088,"LanguageNameId":5088,"LineOfSight":6,"MaxCharge":0,"MeleeArmor":0,"MinRange":1,"PierceArmor":3,"Range":4,"RechargeRate":0,"ReloadTime":3,"Speed":0.96,"TrainTime":22,"Trait":0,"TraitPiece":0,"internal_name":"XBOWM"},"8":{"AccuracyPercent":70,"Armours":[{"Amount":0,"Class":4},{"Amount":0,"Class":15},{"Amount":0,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":6,"AttackDelaySeconds":0.5,"Attacks":[{"Amount":2,"Class":27},{"Amount":0,"Class":21},{"Amount":6,"Class":3},{"Amount":0,"Class":17}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":40,"Wood":35},"FrameDelay":10,"GarrisonCapacity":0,"HP":35,"ID":8,"LanguageHelpId":26107,"LanguageNameId":5107,"LineOfSight":7,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":0,"Range":5,"RechargeRate":0,"ReloadTime":2,"Speed":0.96,"TrainTime":18,"Trait":0,"TraitPiece":0,"internal_name":"LNGBW"},"11":{"AccuracyPercent":95,"Armours":[{"Amount":0,"Class":28},{"Amount":0,"Class":4},{"Amount":0,"Class":15},{"Amount":0,"Class":8},{"Amount":0,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":6,"AttackDelaySeconds":0.49833333333333335,"Attacks":[{"Amount":1,"Class":27},{"Amount":0,"Class":21},{"Amount":6,"Class":3},{"Amount":0,"Class":17},{"Amount":3,"Class":20},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":65,"Wood":55},"FrameDelay":23,"GarrisonCapacity":0,"HP":60,"ID":11,"LanguageHelpId":26108,"LanguageNameId":5108,"LineOfSight":6,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":0,"Range":4,"RechargeRate":0,"ReloadTime":2.1,"Speed":1.4,"TrainTime":26,"Trait":0,"TraitPiece":0,"internal_name":"MOSUN"},"13":{"AccuracyPercent":0,"Armours":[{"Amount":0,"Class":34},{"Amount":0,"Class":4},{"Amount":4,"Class":3},{"Amount":0,"Class":31}],"Attack":0,"AttackDelaySeconds":0,"Attacks":[],"ChargeEvent":0,"ChargeType":0,"Cost":{"Wood":75},"FrameDelay":0,"GarrisonCapacity":0,"HP":60,"ID":13,"LanguageHelpId":26090,"LanguageNameId":5090,"LineOfSight":5,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":4,"Range":0,"RechargeRate":0,"ReloadTime":0,"Speed":1.26,"TrainTime":40,"Trait":2,"TraitPiece":0,"internal_name":"FSHSP"},"17":{"AccuracyPercent":0,"Armours":[{"Amount":0,"Class":16},{"Amount":0,"Class":4},{"Amount":6,"Class":3},{"Amount":0,"Class":31}],"Attack":0,"AttackDelaySeconds":0,"Attacks":[],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":50,"Wood":100},"FrameDelay":0,"GarrisonCapacity":0,"HP":80,"ID":17,"LanguageHelpId":26089,"LanguageNameId":5089,"LineOfSight":6,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":6,"Range":0,"RechargeRate":0,"ReloadTime":0,"Speed":1.32,"TrainTime":36,"Trait":2,"TraitPiece":0,"internal_name":"COGXX"},"21":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":16},{"Amount":0,"Class":4},{"Amount":6,"Class":3},{"Amount":0,"Class":31}],"Attack":7,"AttackDelaySeconds":0,"Attacks":[{"Amount":7,"Class":11},{"Amount":9,"Class":16},{"Amount":7,"Class":3},{"Amount":4,"Class":17},{"Amount":9,"Class":34}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":30,"Wood":90},"FrameDelay":0,"GarrisonCapacity":0,"HP":135,"ID":21,"LanguageHelpId":26091,"LanguageNameId":5091,"LineOfSight":8,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":6,"Range":6,"RechargeRate":0,"ReloadTime":3,"Speed":1.43,"TrainTime":36,"Trait":2,"TraitPiece":0,"internal_name":"GALLY"},"24":{"AccuracyPercent":85,"Armours":[{"Amount":0,"Class":4},{"Amount":0,"Class":15},{"Amount":0,"Class":3},{"Amount":0,"Class":31}],"Attack":5,"AttackDelaySeconds":0.35,"Attacks":[{"Amount":3,"Class":27},{"Amount":0,"Class":21},{"Amount":5,"Class":3},{"Amount":0,"Class":17},{"Amount":0,"Class":13}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":45,"Wood":25},"FrameDelay":15,"GarrisonCapacity":0,"HP":35,"ID":24,"LanguageHelpId":26084,"LanguageNameId":5084,"LineOfSight":7,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":0,"Range":5,"RechargeRate":0,"ReloadTime":2,"Speed":0.96,"TrainTime":27,"Trait":0,"TraitPiece":0,"internal_name":"CARCH"},"25":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":1},{"Amount":7,"Class":4},{"Amount":2,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":14,"AttackDelaySeconds":0,"Attacks":[{"Amount":4,"Class":29},{"Amount":4,"Class":21},{"Amount":14,"Class":4},{"Amount":0,"Class":8},{"Amount":0,"Class":30}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":85,"Gold":30},"FrameDelay":0,"GarrisonCapacity":0,"HP":80,"ID":25,"LanguageHelpId":26112,"LanguageNameId":5112,"LineOfSight":3,"MaxCharge":0,"MeleeArmor":7,"MinRange":0,"PierceArmor":2,"Range":0,"RechargeRate":0,"ReloadTime":2,"Speed":0.8,"TrainTime":12,"Trait":0,"TraitPiece":0,"internal_name":"TKNIT"},"36":{"AccuracyPercent":100,"Armours":[{"Amount":2,"Class":4},{"Amount":5,"Class":3},{"Amount":0,"Class":20},{"Amount":0,"Class":23},{"Amount":0,"Class":31}],"Attack":40,"AttackDelaySeconds":0.21,"Attacks":[{"Amount":200,"Class":11},{"Amount":40,"Class":16},{"Amount":40,"Class":4},{"Amount":20,"Class":20},{"Amount":40,"Class":13},{"Amount":40,"Class":34},{"Amount":40,"Class":37}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":225,"Wood":225},"FrameDelay":7,"GarrisonCapacity":0,"HP":80,"ID":36,"LanguageHelpId":26093,"LanguageNameId":5093,"LineOfSight":14,"MaxCharge":0,"MeleeArmor":2,"MinRange":5,"PierceArmor":5,"Range":12,"RechargeRate":0,"ReloadTime":6.5,"Speed":0.7,"TrainTime":56,"Trait":0,"TraitPiece":0,"internal_name":"BCANN"},"38":{"AccuracyPercent":100,"Armours":[{"Amount":2,"Class":4},{"Amount":0,"Class":8},{"Amount":2,"Class":3},{"Amount":0,"Class":31}],"Attack":10,"AttackDelaySeconds":0,"Attacks":[{"Amount":10,"Class":4},{"Amount":0,"Class":15},{"Amount":0,"Class":11},{"Amount":0,"Class":21},{"Amount":0,"Class":38},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":60,"Gold":75},"FrameDelay":0,"GarrisonCapacity":0,"HP":100,"ID":38,"LanguageHelpId":26068,"LanguageNameId":5068,"LineOfSight":4,"MaxCharge":0,"MeleeArmor":2,"MinRange":0,"PierceArmor":2,"Range":0,"RechargeRate":0,"ReloadTime":1.8,"Speed":1.35,"TrainTime":30,"Trait":0,"TraitPiece":0,"internal_name":"KNGHT"},"39":{"AccuracyPercent":50,"Armours":[{"Amount":0,"Class":28},{"Amount":0,"Class":4},{"Amount":0,"Class":15},{"Amount":0,"Class":8},{"Amount":0,"Class":3},{"Amount":0,"Class":31}],"Attack":6,"AttackDelaySeconds":0.9099999999999999,"Attacks":[{"Amount":2,"Class":27},{"Amount":0,"Class":21},{"Amount":6,"Class":3},{"Amount":0,"Class":17},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":60,"Wood":40},"FrameDelay":35,"GarrisonCapacity":0,"HP":50,"ID":39,"LanguageHelpId":26085,"LanguageNameId":5085,"LineOfSight":5,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":0,"Range":4,"RechargeRate":0,"ReloadTime":2,"Speed":1.4,"TrainTime":34,"Trait":0,"TraitPiece":0,"internal_name":"CVRCH"},"40":{"AccuracyPercent":100,"Armours":[{"Amount":2,"Class":4},{"Amount":12,"Class":8},{"Amount":1,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":9,"AttackDelaySeconds":0,"Attacks":[{"Amount":9,"Class":1},{"Amount":9,"Class":4},{"Amount":0,"Class":15},{"Amount":0,"Class":11},{"Amount":0,"Class":21},{"Amount":9,"Class":32},{"Amount":0,"Class":38},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":70,"Gold":75},"FrameDelay":0,"GarrisonCapacity":0,"HP":110,"ID":40,"LanguageHelpId":26101,"LanguageNameId":5101,"LineOfSight":4,"MaxCharge":0,"MeleeArmor":2,"MinRange":0,"PierceArmor":1,"Range":0,"RechargeRate":0,"ReloadTime":1.8,"Speed":1.35,"TrainTime":20,"Trait":0,"TraitPiece":0,"internal_name":"CATAP"},"41":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":1},{"Amount":0,"Class":4},{"Amount":6,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":10,"AttackDelaySeconds":0,"Attacks":[{"Amount":2,"Class":29},{"Amount":2,"Class":21},{"Amount":10,"Class":4},{"Amount":6,"Class":15},{"Amount":0,"Class":8},{"Amount":0,"Class":30}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":80,"Gold":40},"FrameDelay":0,"GarrisonCapacity":0,"HP":60,"ID":41,"LanguageHelpId":26104,"LanguageNameId":5104,"LineOfSight":3,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":6,"Range":0,"RechargeRate":0,"ReloadTime":2,"Speed":1.05,"TrainTime":16,"Trait":0,"TraitPiece":0,"internal_name":"GBRSK"},"42":{"AccuracyPercent":15,"Armours":[{"Amount":1,"Class":4},{"Amount":150,"Class":3},{"Amount":0,"Class":17},{"Amount":0,"Class":20},{"Amount":0,"Class":31}],"Attack":200,"AttackDelaySeconds":0.8800000000000001,"Attacks":[{"Amount":250,"Class":11},{"Amount":200,"Class":3}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":200,"Wood":200},"FrameDelay":24,"GarrisonCapacity":0,"HP":150,"ID":42,"LanguageHelpId":26097,"LanguageNameId":5097,"LineOfSight":19,"MaxCharge":0,"MeleeArmor":1,"MinRange":4,"PierceArmor":150,"Range":16,"RechargeRate":0,"ReloadTime":10,"Speed":0,"TrainTime":50,"Trait":0,"TraitPiece":0,"internal_name":"TREBU"},"46":{"AccuracyPercent":50,"Armours":[{"Amount":1,"Class":4},{"Amount":0,"Class":15},{"Amount":0,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":23},{"Amount":0,"Class":31}],"Attack":17,"AttackDelaySeconds":0.4,"Attacks":[{"Amount":0,"Class":11},{"Amount":17,"Class":3},{"Amount":2,"Class":17}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":60,"Gold":55},"FrameDelay":12,"GarrisonCapacity":0,"HP":35,"ID":46,"LanguageHelpId":26105,"LanguageNameId":5105,"LineOfSight":10,"MaxCharge":0,"MeleeArmor":1,"MinRange":0,"PierceArmor":0,"Range":7,"RechargeRate":0,"ReloadTime":3.45,"Speed":0.96,"TrainTime":21,"Trait":0,"TraitPiece":0,"internal_name":"JANNI"},"73":{"AccuracyPercent":85,"Armours":[{"Amount":0,"Class":4},{"Amount":0,"Class":15},{"Amount":0,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":8,"AttackDelaySeconds":0.22166666666666665,"Attacks":[{"Amount":2,"Class":27},{"Amount":0,"Class":21},{"Amount":0,"Class":4},{"Amount":0,"Class":8},{"Amount":8,"Class":3},{"Amount":0,"Class":17}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":35,"Wood":40},"FrameDelay":19,"GarrisonCapacity":0,"HP":45,"ID":73,"LanguageHelpId":26102,"LanguageNameId":5102,"LineOfSight":6,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":0,"Range":4,"RechargeRate":0,"ReloadTime":3,"Speed":0.96,"TrainTime":16,"Trait":0,"TraitPiece":0,"internal_name":"CHUKN"},"74":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":1},{"Amount":0,"Class":4},{"Amount":1,"Class":3},{"Amount":0,"Class":31}],"Attack":4,"AttackDelaySeconds":0,"Attacks":[{"Amount":0,"Class":29},{"Amount":0,"Class":21},{"Amount":4,"Class":4},{"Amount":0,"Class":8},{"Amount":0,"Class":30}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":60,"Gold":20},"FrameDelay":0,"GarrisonCapacity":0,"HP":40,"ID":74,"LanguageHelpId":26079,"LanguageNameId":5079,"LineOfSight":4,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":1,"Range":0,"RechargeRate":0,"ReloadTime":2,"Speed":0.9,"TrainTime":21,"Trait":0,"TraitPiece":0,"internal_name":"SPRMN"},"75":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":1},{"Amount":0,"Class":4},{"Amount":1,"Class":3},{"Amount":0,"Class":31}],"Attack":6,"AttackDelaySeconds":0,"Attacks":[{"Amount":2,"Class":29},{"Amount":2,"Class":21},{"Amount":6,"Class":4},{"Amount":0,"Class":8},{"Amount":0,"Class":30}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":60,"Gold":20},"FrameDelay":0,"GarrisonCapacity":0,"HP":45,"ID":75,"LanguageHelpId":26080,"LanguageNameId":5080,"LineOfSight":4,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":1,"Range":0,"RechargeRate":0,"ReloadTime":2,"Speed":0.9,"TrainTime":21,"Trait":0,"TraitPiece":0,"internal_name":"SWDMN"},"77":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":1},{"Amount":1,"Class":4},{"Amount":1,"Class":3},{"Amount":0,"Class":31}],"Attack":9,"AttackDelaySeconds":0,"Attacks":[{"Amount":6,"Class":29},{"Amount":3,"Class":21},{"Amount":9,"Class":4},{"Amount":0,"Class":8},{"Amount":0,"Class":30}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":60,"Gold":20},"FrameDelay":0,"GarrisonCapacity":0,"HP":60,"ID":77,"LanguageHelpId":26081,"LanguageNameId":5081,"LineOfSight":4,"MaxCharge":0,"MeleeArmor":1,"MinRange":0,"PierceArmor":1,"Range":0,"RechargeRate":0,"ReloadTime":2,"Speed":0.9,"TrainTime":21,"Trait":0,"TraitPiece":0,"internal_name":"THSWD"},"83":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":4},{"Amount":0,"Class":3},{"Amount":0,"Class":31}],"Attack":3,"AttackDelaySeconds":0,"Attacks":[{"Amount":3,"Class":11},{"Amount":3,"Class":4},{"Amount":6,"Class":13},{"Amount":0,"Class":14},{"Amount":0,"Class":17},{"Amount":6,"Class":37}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":50},"FrameDelay":0,"GarrisonCapacity":0,"HP":25,"ID":83,"LanguageHelpId":26121,"LanguageNameId":5606,"LineOfSight":4,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":0,"Range":0,"RechargeRate":0,"ReloadTime":2,"Speed":0.8,"TrainTime":25,"Trait":0,"TraitPiece":0,"internal_name":"VMBAS"},"93":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":27},{"Amount":0,"Class":1},{"Amount":0,"Class":4},{"Amount":0,"Class":3},{"Amount":0,"Class":31}],"Attack":3,"AttackDelaySeconds":0,"Attacks":[{"Amount":1,"Class":29},{"Amount":1,"Class":21},{"Amount":15,"Class":5},{"Amount":3,"Class":4},{"Amount":15,"Class":8},{"Amount":9,"Class":16},{"Amount":12,"Class":30},{"Amount":4,"Class":35},{"Amount":9,"Class":34}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":35,"Wood":25},"FrameDelay":0,"GarrisonCapacity":0,"HP":45,"ID":93,"LanguageHelpId":26078,"LanguageNameId":5078,"LineOfSight":4,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":0,"Range":0,"RechargeRate":0,"ReloadTime":3,"Speed":1,"TrainTime":22,"Trait":0,"TraitPiece":0,"internal_name":"PKEMN"},"125":{"AccuracyPercent":25,"Armours":[{"Amount":0,"Class":25},{"Amount":0,"Class":4},{"Amount":0,"Class":3},{"Amount":0,"Class":31}],"Attack":0,"AttackDelaySeconds":0,"Attacks":[],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":0,"Gold":100},"FrameDelay":0,"GarrisonCapacity":0,"HP":30,"ID":125,"LanguageHelpId":26099,"LanguageNameId":5099,"LineOfSight":11,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":0,"Range":9,"RechargeRate":0,"ReloadTime":1,"Speed":0.7,"TrainTime":51,"Trait":0,"TraitPiece":0,"internal_name":"MONKX"},"128":{"AccuracyPercent":0,"Armours":[{"Amount":0,"Class":4},{"Amount":0,"Class":3},{"Amount":0,"Class":31}],"Attack":0,"AttackDelaySeconds":0,"Attacks":[],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":50,"Wood":100},"FrameDelay":0,"GarrisonCapacity":0,"HP":70,"ID":128,"LanguageHelpId":26100,"LanguageNameId":19052,"LineOfSight":7,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":0,"Range":0,"RechargeRate":0,"ReloadTime":0,"Speed":1,"TrainTime":51,"Trait":0,"TraitPiece":0,"internal_name":"TCART"},"185":{"AccuracyPercent":90,"Armours":[{"Amount":0,"Class":4},{"Amount":0,"Class":15},{"Amount":0,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":4,"AttackDelaySeconds":0.795872,"Attacks":[{"Amount":1,"Class":27},{"Amount":0,"Class":21},{"Amount":4,"Class":3},{"Amount":3,"Class":17},{"Amount":10,"Class":1},{"Amount":10,"Class":32}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":40,"Gold":40},"FrameDelay":14,"GarrisonCapacity":0,"HP":40,"ID":185,"LanguageHelpId":26690,"LanguageNameId":5690,"LineOfSight":7,"MaxCharge":0,"MeleeArmor":0,"MinRange":1,"PierceArmor":0,"Range":5,"RechargeRate":0,"ReloadTime":2,"Speed":0.96,"TrainTime":25,"Trait":0,"TraitPiece":0,"internal_name":"SLINGR"},"207":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":4},{"Amount":0,"Class":3},{"Amount":0,"Class":30},{"Amount":0,"Class":31},{"Amount":-3,"Class":39}],"Attack":8,"AttackDelaySeconds":0,"Attacks":[{"Amount":8,"Class":4},{"Amount":18,"Class":8},{"Amount":9,"Class":16},{"Amount":0,"Class":11},{"Amount":9,"Class":30},{"Amount":0,"Class":21},{"Amount":7,"Class":35},{"Amount":9,"Class":34},{"Amount":0,"Class":38},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":55,"Gold":60},"FrameDelay":0,"GarrisonCapacity":1,"HP":140,"ID":207,"LanguageHelpId":26419,"LanguageNameId":5419,"LineOfSight":5,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":0,"Range":0,"RechargeRate":0,"ReloadTime":2,"Speed":1.45,"TrainTime":20,"Trait":0,"TraitPiece":0,"internal_name":"SHCLRY"},"232":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":1},{"Amount":0,"Class":4},{"Amount":1,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":11,"AttackDelaySeconds":0,"Attacks":[{"Amount":2,"Class":29},{"Amount":2,"Class":21},{"Amount":11,"Class":4},{"Amount":0,"Class":8},{"Amount":0,"Class":30}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":65,"Gold":25},"FrameDelay":0,"GarrisonCapacity":0,"HP":70,"ID":232,"LanguageHelpId":26113,"LanguageNameId":5113,"LineOfSight":3,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":1,"Range":0,"RechargeRate":0,"ReloadTime":2,"Speed":1.2,"TrainTime":10,"Trait":0,"TraitPiece":0,"internal_name":"WBRSK"},"239":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":5},{"Amount":1,"Class":4},{"Amount":0,"Class":8},{"Amount":2,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":15,"AttackDelaySeconds":0,"Attacks":[{"Amount":7,"Class":11},{"Amount":15,"Class":4},{"Amount":7,"Class":13},{"Amount":0,"Class":15},{"Amount":0,"Class":21},{"Amount":0,"Class":38},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":170,"Gold":85},"FrameDelay":0,"GarrisonCapacity":0,"HP":450,"ID":239,"LanguageHelpId":26109,"LanguageNameId":5109,"LineOfSight":7,"MaxCharge":0,"MeleeArmor":1,"MinRange":0,"PierceArmor":2,"Range":0,"RechargeRate":0,"ReloadTime":2,"Speed":0.6,"TrainTime":25,"Trait":0,"TraitPiece":0,"internal_name":"MPCAV"},"250":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":16},{"Amount":0,"Class":4},{"Amount":6,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":7,"AttackDelaySeconds":0,"Attacks":[{"Amount":7,"Class":11},{"Amount":9,"Class":16},{"Amount":7,"Class":3},{"Amount":4,"Class":17},{"Amount":9,"Class":34}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":50,"Wood":100},"FrameDelay":0,"GarrisonCapacity":0,"HP":130,"ID":250,"LanguageHelpId":26106,"LanguageNameId":5106,"LineOfSight":8,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":6,"Range":6,"RechargeRate":0,"ReloadTime":3,"Speed":1.54,"TrainTime":25,"Trait":2,"TraitPiece":0,"internal_name":"LNGBT"},"279":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":4},{"Amount":7,"Class":3},{"Amount":0,"Class":20},{"Amount":0,"Class":31}],"Attack":12,"AttackDelaySeconds":0.21,"Attacks":[{"Amount":2,"Class":11},{"Amount":6,"Class":5},{"Amount":0,"Class":4},{"Amount":12,"Class":3},{"Amount":1,"Class":17}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":75,"Wood":75},"FrameDelay":42,"GarrisonCapacity":0,"HP":40,"ID":279,"LanguageHelpId":26096,"LanguageNameId":5096,"LineOfSight":9,"MaxCharge":0,"MeleeArmor":0,"MinRange":2,"PierceArmor":7,"Range":7,"RechargeRate":0,"ReloadTime":3.6,"Speed":0.65,"TrainTime":30,"Trait":0,"TraitPiece":0,"internal_name":"SCBAL"},"280":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":4},{"Amount":6,"Class":3},{"Amount":0,"Class":20},{"Amount":0,"Class":31}],"Attack":40,"AttackDelaySeconds":0,"Attacks":[{"Amount":35,"Class":11},{"Amount":40,"Class":4},{"Amount":12,"Class":20},{"Amount":40,"Class":37}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":135,"Wood":160},"FrameDelay":0,"GarrisonCapacity":0,"HP":50,"ID":280,"LanguageHelpId":26095,"LanguageNameId":5095,"LineOfSight":9,"MaxCharge":0,"MeleeArmor":0,"MinRange":3,"PierceArmor":6,"Range":7,"RechargeRate":0,"ReloadTime":6,"Speed":0.6,"TrainTime":46,"Trait":0,"TraitPiece":0,"internal_name":"MANGO"},"281":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":1},{"Amount":0,"Class":4},{"Amount":0,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":7,"AttackDelaySeconds":0.9955555555555556,"Attacks":[{"Amount":1,"Class":29},{"Amount":1,"Class":21},{"Amount":7,"Class":4},{"Amount":0,"Class":15},{"Amount":0,"Class":8},{"Amount":0,"Class":30}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":55,"Gold":25},"FrameDelay":28,"GarrisonCapacity":0,"HP":60,"ID":281,"LanguageHelpId":26111,"LanguageNameId":5111,"LineOfSight":5,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":0,"Range":3,"RechargeRate":0,"ReloadTime":2,"Speed":1,"TrainTime":17,"Trait":0,"TraitPiece":0,"internal_name":"TAXEM"},"282":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":4},{"Amount":0,"Class":35},{"Amount":0,"Class":3},{"Amount":0,"Class":30},{"Amount":0,"Class":19},{"Amount":0,"Class":31},{"Amount":-3,"Class":39}],"Attack":8,"AttackDelaySeconds":0.4,"Attacks":[{"Amount":0,"Class":11},{"Amount":8,"Class":4},{"Amount":9,"Class":8},{"Amount":0,"Class":21},{"Amount":0,"Class":38},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":55,"Gold":85},"FrameDelay":24,"GarrisonCapacity":0,"HP":65,"ID":282,"LanguageHelpId":26103,"LanguageNameId":5103,"LineOfSight":5,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":0,"Range":3,"RechargeRate":0,"ReloadTime":2,"Speed":1.4,"TrainTime":23,"Trait":0,"TraitPiece":0,"internal_name":"DERVI"},"283":{"AccuracyPercent":100,"Armours":[{"Amount":2,"Class":4},{"Amount":0,"Class":8},{"Amount":2,"Class":3},{"Amount":0,"Class":31}],"Attack":12,"AttackDelaySeconds":0,"Attacks":[{"Amount":12,"Class":4},{"Amount":0,"Class":15},{"Amount":0,"Class":11},{"Amount":0,"Class":21},{"Amount":0,"Class":38},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":60,"Gold":75},"FrameDelay":0,"GarrisonCapacity":0,"HP":120,"ID":283,"LanguageHelpId":26070,"LanguageNameId":5070,"LineOfSight":4,"MaxCharge":0,"MeleeArmor":2,"MinRange":0,"PierceArmor":2,"Range":0,"RechargeRate":0,"ReloadTime":1.8,"Speed":1.35,"TrainTime":30,"Trait":0,"TraitPiece":0,"internal_name":"PALDN"},"291":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":1},{"Amount":1,"Class":4},{"Amount":1,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":10,"AttackDelaySeconds":0,"Attacks":[{"Amount":2,"Class":29},{"Amount":2,"Class":21},{"Amount":10,"Class":4},{"Amount":10,"Class":19},{"Amount":0,"Class":8},{"Amount":0,"Class":30}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":50,"Gold":30},"FrameDelay":0,"GarrisonCapacity":0,"HP":70,"ID":291,"LanguageHelpId":26110,"LanguageNameId":5110,"LineOfSight":4,"MaxCharge":0,"MeleeArmor":1,"MinRange":0,"PierceArmor":1,"Range":0,"RechargeRate":0,"ReloadTime":1.9,"Speed":1,"TrainTime":9,"Trait":0,"TraitPiece":0,"internal_name":"SMURI"},"329":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":4},{"Amount":0,"Class":3},{"Amount":0,"Class":30},{"Amount":0,"Class":31},{"Amount":-3,"Class":39}],"Attack":6,"AttackDelaySeconds":0,"Attacks":[{"Amount":6,"Class":4},{"Amount":9,"Class":8},{"Amount":5,"Class":16},{"Amount":0,"Class":11},{"Amount":5,"Class":30},{"Amount":0,"Class":21},{"Amount":5,"Class":34},{"Amount":0,"Class":38},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":55,"Gold":60},"FrameDelay":0,"GarrisonCapacity":1,"HP":100,"ID":329,"LanguageHelpId":26416,"LanguageNameId":5416,"LineOfSight":5,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":0,"Range":0,"RechargeRate":0,"ReloadTime":2,"Speed":1.45,"TrainTime":22,"Trait":0,"TraitPiece":0,"internal_name":"CVLRY"},"330":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":4},{"Amount":0,"Class":3},{"Amount":0,"Class":30},{"Amount":0,"Class":31},{"Amount":-3,"Class":39}],"Attack":7,"AttackDelaySeconds":0,"Attacks":[{"Amount":7,"Class":4},{"Amount":18,"Class":8},{"Amount":9,"Class":16},{"Amount":0,"Class":11},{"Amount":9,"Class":30},{"Amount":0,"Class":21},{"Amount":7,"Class":35},{"Amount":9,"Class":34},{"Amount":0,"Class":38},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":55,"Gold":60},"FrameDelay":0,"GarrisonCapacity":1,"HP":120,"ID":330,"LanguageHelpId":26417,"LanguageNameId":5417,"LineOfSight":5,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":0,"Range":0,"RechargeRate":0,"ReloadTime":2,"Speed":1.45,"TrainTime":22,"Trait":0,"TraitPiece":0,"internal_name":"HCLRY"},"331":{"AccuracyPercent":92,"Armours":[{"Amount":2,"Class":4},{"Amount":8,"Class":3},{"Amount":0,"Class":20},{"Amount":0,"Class":31}],"Attack":200,"AttackDelaySeconds":0,"Attacks":[{"Amount":250,"Class":11},{"Amount":200,"Class":3}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":200,"Wood":200},"FrameDelay":0,"GarrisonCapacity":0,"HP":150,"ID":331,"LanguageHelpId":26381,"LanguageNameId":5097,"LineOfSight":19,"MaxCharge":0,"MeleeArmor":2,"MinRange":4,"PierceArmor":8,"Range":16,"RechargeRate":0,"ReloadTime":10,"Speed":0.8,"TrainTime":50,"Trait":0,"TraitPiece":0,"internal_name":"PTREB"},"358":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":27},{"Amount":0,"Class":1},{"Amount":0,"Class":4},{"Amount":0,"Class":3},{"Amount":0,"Class":31}],"Attack":4,"AttackDelaySeconds":0,"Attacks":[{"Amount":1,"Class":29},{"Amount":1,"Class":21},{"Amount":25,"Class":5},{"Amount":4,"Class":4},{"Amount":22,"Class":8},{"Amount":16,"Class":16},{"Amount":18,"Class":30},{"Amount":11,"Class":35},{"Amount":16,"Class":34}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":35,"Wood":25},"FrameDelay":0,"GarrisonCapacity":0,"HP":55,"ID":358,"LanguageHelpId":26408,"LanguageNameId":5408,"LineOfSight":4,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":0,"Range":0,"RechargeRate":0,"ReloadTime":3,"Speed":1,"TrainTime":22,"Trait":0,"TraitPiece":0,"internal_name":"ISPKM"},"359":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":27},{"Amount":0,"Class":1},{"Amount":0,"Class":4},{"Amount":0,"Class":3},{"Amount":0,"Class":31}],"Attack":6,"AttackDelaySeconds":0,"Attacks":[{"Amount":1,"Class":29},{"Amount":1,"Class":21},{"Amount":28,"Class":5},{"Amount":6,"Class":4},{"Amount":32,"Class":8},{"Amount":17,"Class":16},{"Amount":26,"Class":30},{"Amount":11,"Class":35},{"Amount":17,"Class":34}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":35,"Wood":25},"FrameDelay":0,"GarrisonCapacity":0,"HP":60,"ID":359,"LanguageHelpId":26409,"LanguageNameId":5409,"LineOfSight":4,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":0,"Range":0,"RechargeRate":0,"ReloadTime":3,"Speed":1,"TrainTime":22,"Trait":0,"TraitPiece":0,"internal_name":"HLBDM"},"420":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":16},{"Amount":0,"Class":4},{"Amount":6,"Class":3},{"Amount":0,"Class":23},{"Amount":0,"Class":31}],"Attack":50,"AttackDelaySeconds":0,"Attacks":[{"Amount":200,"Class":11},{"Amount":50,"Class":4},{"Amount":25,"Class":20}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":150,"Wood":200},"FrameDelay":0,"GarrisonCapacity":0,"HP":120,"ID":420,"LanguageHelpId":26287,"LanguageNameId":5287,"LineOfSight":15,"MaxCharge":0,"MeleeArmor":0,"MinRange":3,"PierceArmor":6,"Range":13,"RechargeRate":0,"ReloadTime":10,"Speed":1.1,"TrainTime":46,"Trait":2,"TraitPiece":0,"internal_name":"CANGA"},"422":{"AccuracyPercent":100,"Armours":[{"Amount":-3,"Class":4},{"Amount":190,"Class":3},{"Amount":1,"Class":17},{"Amount":0,"Class":20},{"Amount":0,"Class":31}],"Attack":3,"AttackDelaySeconds":0,"Attacks":[{"Amount":150,"Class":11},{"Amount":3,"Class":4},{"Amount":50,"Class":20}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":75,"Wood":160},"FrameDelay":0,"GarrisonCapacity":6,"HP":200,"ID":422,"LanguageHelpId":26289,"LanguageNameId":5289,"LineOfSight":3,"MaxCharge":0,"MeleeArmor":-3,"MinRange":0,"PierceArmor":190,"Range":0,"RechargeRate":0,"ReloadTime":5,"Speed":0.6,"TrainTime":36,"Trait":1,"TraitPiece":0,"internal_name":"CBATR"},"440":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":4},{"Amount":2,"Class":3},{"Amount":0,"Class":31}],"Attack":25,"AttackDelaySeconds":0,"Attacks":[{"Amount":100,"Class":26},{"Amount":500,"Class":11},{"Amount":25,"Class":4},{"Amount":60,"Class":20},{"Amount":900,"Class":22}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":65,"Gold":20},"FrameDelay":0,"GarrisonCapacity":0,"HP":50,"ID":440,"LanguageHelpId":26660,"LanguageNameId":5660,"LineOfSight":4,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":2,"Range":0,"RechargeRate":0,"ReloadTime":5,"Speed":0.8,"TrainTime":25,"Trait":0,"TraitPiece":0,"internal_name":"PETARD"},"441":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":4},{"Amount":0,"Class":8},{"Amount":2,"Class":3},{"Amount":0,"Class":31}],"Attack":7,"AttackDelaySeconds":0,"Attacks":[{"Amount":12,"Class":25},{"Amount":7,"Class":4},{"Amount":0,"Class":11},{"Amount":0,"Class":21},{"Amount":0,"Class":15},{"Amount":0,"Class":38},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":80},"FrameDelay":0,"GarrisonCapacity":0,"HP":75,"ID":441,"LanguageHelpId":26661,"LanguageNameId":5661,"LineOfSight":4,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":2,"Range":0,"RechargeRate":0,"ReloadTime":1.9,"Speed":1.5,"TrainTime":30,"Trait":16,"TraitPiece":0,"internal_name":"HUSSAR"},"442":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":16},{"Amount":0,"Class":4},{"Amount":8,"Class":3},{"Amount":0,"Class":31}],"Attack":8,"AttackDelaySeconds":0,"Attacks":[{"Amount":8,"Class":11},{"Amount":11,"Class":16},{"Amount":8,"Class":3},{"Amount":4,"Class":17},{"Amount":11,"Class":34}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":30,"Wood":90},"FrameDelay":0,"GarrisonCapacity":0,"HP":165,"ID":442,"LanguageHelpId":26309,"LanguageNameId":5309,"LineOfSight":9,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":8,"Range":7,"RechargeRate":0,"ReloadTime":3,"Speed":1.43,"TrainTime":36,"Trait":2,"TraitPiece":0,"internal_name":"WARGA"},"448":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":4},{"Amount":0,"Class":8},{"Amount":2,"Class":3},{"Amount":0,"Class":31}],"Attack":3,"AttackDelaySeconds":0,"Attacks":[{"Amount":6,"Class":25},{"Amount":3,"Class":4},{"Amount":0,"Class":11},{"Amount":0,"Class":21},{"Amount":0,"Class":15},{"Amount":0,"Class":38},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":80},"FrameDelay":0,"GarrisonCapacity":0,"HP":45,"ID":448,"LanguageHelpId":26326,"LanguageNameId":5326,"LineOfSight":4,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":2,"Range":0,"RechargeRate":0,"ReloadTime":2,"Speed":1.2,"TrainTime":30,"Trait":16,"TraitPiece":0,"internal_name":"SCOUT"},"473":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":1},{"Amount":1,"Class":4},{"Amount":1,"Class":3},{"Amount":0,"Class":31}],"Attack":12,"AttackDelaySeconds":0,"Attacks":[{"Amount":8,"Class":29},{"Amount":4,"Class":21},{"Amount":12,"Class":4},{"Amount":0,"Class":8},{"Amount":0,"Class":30}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":60,"Gold":20},"FrameDelay":0,"GarrisonCapacity":0,"HP":60,"ID":473,"LanguageHelpId":26411,"LanguageNameId":5411,"LineOfSight":5,"MaxCharge":0,"MeleeArmor":1,"MinRange":0,"PierceArmor":1,"Range":0,"RechargeRate":0,"ReloadTime":2,"Speed":0.9,"TrainTime":21,"Trait":0,"TraitPiece":0,"internal_name":"HTHSW"},"474":{"AccuracyPercent":80,"Armours":[{"Amount":0,"Class":28},{"Amount":1,"Class":4},{"Amount":0,"Class":15},{"Amount":0,"Class":8},{"Amount":0,"Class":3},{"Amount":0,"Class":31}],"Attack":7,"AttackDelaySeconds":0.8969999999999999,"Attacks":[{"Amount":4,"Class":27},{"Amount":0,"Class":21},{"Amount":7,"Class":3},{"Amount":0,"Class":17},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":60,"Wood":40},"FrameDelay":46,"GarrisonCapacity":0,"HP":60,"ID":474,"LanguageHelpId":26412,"LanguageNameId":5412,"LineOfSight":6,"MaxCharge":0,"MeleeArmor":1,"MinRange":0,"PierceArmor":0,"Range":4,"RechargeRate":0,"ReloadTime":2,"Speed":1.4,"TrainTime":27,"Trait":0,"TraitPiece":0,"internal_name":"HCVAR"},"492":{"AccuracyPercent":90,"Armours":[{"Amount":0,"Class":4},{"Amount":0,"Class":15},{"Amount":0,"Class":3},{"Amount":0,"Class":31}],"Attack":6,"AttackDelaySeconds":0.3422222222222222,"Attacks":[{"Amount":3,"Class":27},{"Amount":0,"Class":21},{"Amount":6,"Class":3},{"Amount":0,"Class":17},{"Amount":0,"Class":13}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":45,"Wood":25},"FrameDelay":20,"GarrisonCapacity":0,"HP":40,"ID":492,"LanguageHelpId":26418,"LanguageNameId":5418,"LineOfSight":7,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":0,"Range":5,"RechargeRate":0,"ReloadTime":2,"Speed":0.96,"TrainTime":27,"Trait":0,"TraitPiece":0,"internal_name":"ACOAR"},"527":{"AccuracyPercent":100,"Armours":[{"Amount":3,"Class":16},{"Amount":0,"Class":4},{"Amount":3,"Class":3},{"Amount":0,"Class":31}],"Attack":110,"AttackDelaySeconds":0,"Attacks":[{"Amount":220,"Class":11},{"Amount":110,"Class":4}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":50,"Wood":70},"FrameDelay":0,"GarrisonCapacity":0,"HP":60,"ID":527,"LanguageHelpId":26424,"LanguageNameId":5424,"LineOfSight":6,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":3,"Range":0,"RechargeRate":0,"ReloadTime":5,"Speed":1.6,"TrainTime":31,"Trait":2,"TraitPiece":0,"internal_name":"RMSHP"},"528":{"AccuracyPercent":100,"Armours":[{"Amount":5,"Class":16},{"Amount":0,"Class":4},{"Amount":5,"Class":3},{"Amount":0,"Class":31}],"Attack":140,"AttackDelaySeconds":0,"Attacks":[{"Amount":280,"Class":11},{"Amount":140,"Class":4}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":50,"Wood":70},"FrameDelay":0,"GarrisonCapacity":0,"HP":70,"ID":528,"LanguageHelpId":26425,"LanguageNameId":5425,"LineOfSight":6,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":5,"Range":0,"RechargeRate":0,"ReloadTime":5,"Speed":1.6,"TrainTime":31,"Trait":2,"TraitPiece":0,"internal_name":"CRMSH"},"529":{"AccuracyPercent":0,"Armours":[{"Amount":6,"Class":16},{"Amount":0,"Class":4},{"Amount":6,"Class":3},{"Amount":0,"Class":31}],"Attack":2,"AttackDelaySeconds":0,"Attacks":[{"Amount":2,"Class":11},{"Amount":3,"Class":16},{"Amount":2,"Class":2},{"Amount":1,"Class":4},{"Amount":2,"Class":3},{"Amount":3,"Class":34}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":45,"Wood":75},"FrameDelay":0,"GarrisonCapacity":0,"HP":120,"ID":529,"LanguageHelpId":26426,"LanguageNameId":5426,"LineOfSight":5,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":6,"Range":2.49,"RechargeRate":0,"ReloadTime":0.25,"Speed":1.35,"TrainTime":36,"Trait":2,"TraitPiece":0,"internal_name":"FRGAL"},"530":{"AccuracyPercent":80,"Armours":[{"Amount":0,"Class":4},{"Amount":0,"Class":15},{"Amount":1,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":7,"AttackDelaySeconds":0.5,"Attacks":[{"Amount":2,"Class":27},{"Amount":0,"Class":21},{"Amount":7,"Class":3},{"Amount":0,"Class":17}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":40,"Wood":35},"FrameDelay":10,"GarrisonCapacity":0,"HP":40,"ID":530,"LanguageHelpId":26456,"LanguageNameId":5456,"LineOfSight":8,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":1,"Range":6,"RechargeRate":0,"ReloadTime":2,"Speed":0.96,"TrainTime":18,"Trait":0,"TraitPiece":0,"internal_name":"ULGBW"},"531":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":1},{"Amount":1,"Class":4},{"Amount":0,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":8,"AttackDelaySeconds":0.8177777777777778,"Attacks":[{"Amount":2,"Class":29},{"Amount":2,"Class":21},{"Amount":8,"Class":4},{"Amount":0,"Class":15},{"Amount":0,"Class":8},{"Amount":0,"Class":30}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":55,"Gold":25},"FrameDelay":23,"GarrisonCapacity":0,"HP":70,"ID":531,"LanguageHelpId":26461,"LanguageNameId":5461,"LineOfSight":6,"MaxCharge":0,"MeleeArmor":1,"MinRange":0,"PierceArmor":0,"Range":4,"RechargeRate":0,"ReloadTime":2,"Speed":1,"TrainTime":17,"Trait":0,"TraitPiece":0,"internal_name":"UTAXE"},"532":{"AccuracyPercent":0,"Armours":[{"Amount":9,"Class":16},{"Amount":0,"Class":4},{"Amount":8,"Class":3},{"Amount":0,"Class":31}],"Attack":3,"AttackDelaySeconds":0,"Attacks":[{"Amount":3,"Class":11},{"Amount":4,"Class":16},{"Amount":3,"Class":2},{"Amount":1,"Class":4},{"Amount":3,"Class":3},{"Amount":4,"Class":34}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":45,"Wood":75},"FrameDelay":0,"GarrisonCapacity":0,"HP":140,"ID":532,"LanguageHelpId":26429,"LanguageNameId":5429,"LineOfSight":6,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":8,"Range":2.49,"RechargeRate":0,"ReloadTime":0.25,"Speed":1.43,"TrainTime":36,"Trait":2,"TraitPiece":0,"internal_name":"HFGAL"},"533":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":16},{"Amount":0,"Class":4},{"Amount":8,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":8,"AttackDelaySeconds":0,"Attacks":[{"Amount":7,"Class":11},{"Amount":10,"Class":16},{"Amount":8,"Class":3},{"Amount":4,"Class":17},{"Amount":10,"Class":34}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":50,"Wood":100},"FrameDelay":0,"GarrisonCapacity":0,"HP":160,"ID":533,"LanguageHelpId":26457,"LanguageNameId":5457,"LineOfSight":9,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":8,"Range":7,"RechargeRate":0,"ReloadTime":3,"Speed":1.54,"TrainTime":25,"Trait":2,"TraitPiece":0,"internal_name":"ULNGB"},"534":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":1},{"Amount":0,"Class":4},{"Amount":1,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":14,"AttackDelaySeconds":0,"Attacks":[{"Amount":3,"Class":29},{"Amount":3,"Class":21},{"Amount":14,"Class":4},{"Amount":0,"Class":8},{"Amount":0,"Class":30}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":65,"Gold":25},"FrameDelay":0,"GarrisonCapacity":0,"HP":85,"ID":534,"LanguageHelpId":26463,"LanguageNameId":5463,"LineOfSight":5,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":1,"Range":0,"RechargeRate":0,"ReloadTime":2,"Speed":1.2,"TrainTime":10,"Trait":0,"TraitPiece":0,"internal_name":"UWBRS"},"539":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":16},{"Amount":0,"Class":4},{"Amount":6,"Class":3},{"Amount":0,"Class":31}],"Attack":6,"AttackDelaySeconds":0,"Attacks":[{"Amount":6,"Class":11},{"Amount":8,"Class":16},{"Amount":6,"Class":3},{"Amount":3,"Class":17},{"Amount":8,"Class":34}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":30,"Wood":90},"FrameDelay":0,"GarrisonCapacity":0,"HP":120,"ID":539,"LanguageHelpId":26436,"LanguageNameId":5436,"LineOfSight":7,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":6,"Range":5,"RechargeRate":0,"ReloadTime":3,"Speed":1.43,"TrainTime":60,"Trait":2,"TraitPiece":0,"internal_name":"SGALY"},"542":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":4},{"Amount":8,"Class":3},{"Amount":0,"Class":20},{"Amount":0,"Class":31}],"Attack":16,"AttackDelaySeconds":0.20800000000000002,"Attacks":[{"Amount":4,"Class":11},{"Amount":8,"Class":5},{"Amount":0,"Class":4},{"Amount":16,"Class":3},{"Amount":2,"Class":17}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":75,"Wood":75},"FrameDelay":26,"GarrisonCapacity":0,"HP":55,"ID":542,"LanguageHelpId":26439,"LanguageNameId":5439,"LineOfSight":9,"MaxCharge":0,"MeleeArmor":0,"MinRange":2,"PierceArmor":8,"Range":7,"RechargeRate":0,"ReloadTime":3.6,"Speed":0.65,"TrainTime":30,"Trait":0,"TraitPiece":0,"internal_name":"HWBAL"},"545":{"AccuracyPercent":0,"Armours":[{"Amount":0,"Class":16},{"Amount":4,"Class":4},{"Amount":8,"Class":3},{"Amount":0,"Class":31}],"Attack":0,"AttackDelaySeconds":0,"Attacks":[],"ChargeEvent":0,"ChargeType":0,"Cost":{"Wood":125},"FrameDelay":0,"GarrisonCapacity":5,"HP":100,"ID":545,"LanguageHelpId":26443,"LanguageNameId":5443,"LineOfSight":5,"MaxCharge":0,"MeleeArmor":4,"MinRange":0,"PierceArmor":8,"Range":0,"RechargeRate":0,"ReloadTime":0,"Speed":1.45,"TrainTime":46,"Trait":3,"TraitPiece":0,"internal_name":"XPORT"},"546":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":4},{"Amount":0,"Class":8},{"Amount":2,"Class":3},{"Amount":0,"Class":31}],"Attack":7,"AttackDelaySeconds":0,"Attacks":[{"Amount":10,"Class":25},{"Amount":7,"Class":4},{"Amount":0,"Class":11},{"Amount":0,"Class":21},{"Amount":0,"Class":15},{"Amount":0,"Class":38},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":80},"FrameDelay":0,"GarrisonCapacity":0,"HP":60,"ID":546,"LanguageHelpId":26444,"LanguageNameId":5444,"LineOfSight":4,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":2,"Range":0,"RechargeRate":0,"ReloadTime":2,"Speed":1.5,"TrainTime":30,"Trait":16,"TraitPiece":0,"internal_name":"LTCAV"},"548":{"AccuracyPercent":100,"Armours":[{"Amount":-3,"Class":4},{"Amount":195,"Class":3},{"Amount":2,"Class":17},{"Amount":0,"Class":20},{"Amount":0,"Class":31}],"Attack":4,"AttackDelaySeconds":0,"Attacks":[{"Amount":200,"Class":11},{"Amount":4,"Class":4},{"Amount":65,"Class":20}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":75,"Wood":160},"FrameDelay":0,"GarrisonCapacity":6,"HP":270,"ID":548,"LanguageHelpId":26446,"LanguageNameId":5446,"LineOfSight":3,"MaxCharge":0,"MeleeArmor":-3,"MinRange":0,"PierceArmor":195,"Range":0,"RechargeRate":0,"ReloadTime":5,"Speed":0.6,"TrainTime":36,"Trait":1,"TraitPiece":0,"internal_name":"SGRAM"},"550":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":4},{"Amount":7,"Class":3},{"Amount":0,"Class":20},{"Amount":0,"Class":31}],"Attack":50,"AttackDelaySeconds":0,"Attacks":[{"Amount":45,"Class":11},{"Amount":50,"Class":4},{"Amount":12,"Class":20},{"Amount":50,"Class":37}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":135,"Wood":160},"FrameDelay":0,"GarrisonCapacity":0,"HP":60,"ID":550,"LanguageHelpId":26448,"LanguageNameId":5448,"LineOfSight":10,"MaxCharge":0,"MeleeArmor":0,"MinRange":3,"PierceArmor":7,"Range":8,"RechargeRate":0,"ReloadTime":6,"Speed":0.6,"TrainTime":46,"Trait":0,"TraitPiece":0,"internal_name":"ONAGR"},"553":{"AccuracyPercent":100,"Armours":[{"Amount":2,"Class":4},{"Amount":16,"Class":8},{"Amount":1,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":12,"AttackDelaySeconds":0,"Attacks":[{"Amount":12,"Class":1},{"Amount":12,"Class":4},{"Amount":0,"Class":15},{"Amount":0,"Class":11},{"Amount":0,"Class":21},{"Amount":10,"Class":32},{"Amount":0,"Class":38},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":70,"Gold":75},"FrameDelay":0,"GarrisonCapacity":0,"HP":150,"ID":553,"LanguageHelpId":26451,"LanguageNameId":5451,"LineOfSight":5,"MaxCharge":0,"MeleeArmor":2,"MinRange":0,"PierceArmor":1,"Range":0,"RechargeRate":0,"ReloadTime":1.7,"Speed":1.35,"TrainTime":20,"Trait":0,"TraitPiece":0,"internal_name":"UCATA"},"554":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":1},{"Amount":10,"Class":4},{"Amount":2,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":17,"AttackDelaySeconds":0,"Attacks":[{"Amount":4,"Class":29},{"Amount":4,"Class":21},{"Amount":17,"Class":4},{"Amount":0,"Class":8},{"Amount":0,"Class":30}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":85,"Gold":30},"FrameDelay":0,"GarrisonCapacity":0,"HP":100,"ID":554,"LanguageHelpId":26462,"LanguageNameId":5462,"LineOfSight":5,"MaxCharge":0,"MeleeArmor":10,"MinRange":0,"PierceArmor":2,"Range":0,"RechargeRate":0,"ReloadTime":2,"Speed":0.8,"TrainTime":12,"Trait":0,"TraitPiece":0,"internal_name":"UTKNI"},"555":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":1},{"Amount":0,"Class":4},{"Amount":8,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":12,"AttackDelaySeconds":0,"Attacks":[{"Amount":3,"Class":29},{"Amount":3,"Class":21},{"Amount":12,"Class":4},{"Amount":10,"Class":15},{"Amount":0,"Class":8},{"Amount":0,"Class":30}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":80,"Gold":40},"FrameDelay":0,"GarrisonCapacity":0,"HP":70,"ID":555,"LanguageHelpId":26454,"LanguageNameId":5454,"LineOfSight":5,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":8,"Range":0,"RechargeRate":0,"ReloadTime":2,"Speed":1.05,"TrainTime":16,"Trait":0,"TraitPiece":0,"internal_name":"UGBRS"},"556":{"AccuracyPercent":100,"Armours":[{"Amount":1,"Class":4},{"Amount":0,"Class":35},{"Amount":0,"Class":3},{"Amount":0,"Class":30},{"Amount":0,"Class":19},{"Amount":0,"Class":31},{"Amount":-3,"Class":39}],"Attack":10,"AttackDelaySeconds":0.2,"Attacks":[{"Amount":0,"Class":11},{"Amount":10,"Class":4},{"Amount":12,"Class":8},{"Amount":0,"Class":21},{"Amount":1,"Class":35},{"Amount":0,"Class":38},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":55,"Gold":85},"FrameDelay":12,"GarrisonCapacity":0,"HP":80,"ID":556,"LanguageHelpId":26453,"LanguageNameId":5453,"LineOfSight":5,"MaxCharge":0,"MeleeArmor":1,"MinRange":0,"PierceArmor":0,"Range":3,"RechargeRate":0,"ReloadTime":2,"Speed":1.4,"TrainTime":23,"Trait":0,"TraitPiece":0,"internal_name":"UDERV"},"557":{"AccuracyPercent":65,"Armours":[{"Amount":2,"Class":4},{"Amount":0,"Class":15},{"Amount":0,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":23},{"Amount":0,"Class":31}],"Attack":22,"AttackDelaySeconds":0,"Attacks":[{"Amount":0,"Class":11},{"Amount":22,"Class":3},{"Amount":3,"Class":17}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":60,"Gold":55},"FrameDelay":0,"GarrisonCapacity":0,"HP":40,"ID":557,"LanguageHelpId":26455,"LanguageNameId":5455,"LineOfSight":10,"MaxCharge":0,"MeleeArmor":2,"MinRange":0,"PierceArmor":0,"Range":8,"RechargeRate":0,"ReloadTime":3.45,"Speed":0.96,"TrainTime":21,"Trait":0,"TraitPiece":0,"internal_name":"UJANI"},"558":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":5},{"Amount":1,"Class":4},{"Amount":0,"Class":8},{"Amount":3,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":20,"AttackDelaySeconds":0,"Attacks":[{"Amount":10,"Class":11},{"Amount":20,"Class":4},{"Amount":10,"Class":13},{"Amount":0,"Class":15},{"Amount":0,"Class":21},{"Amount":0,"Class":38},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":170,"Gold":85},"FrameDelay":0,"GarrisonCapacity":0,"HP":600,"ID":558,"LanguageHelpId":26459,"LanguageNameId":5459,"LineOfSight":8,"MaxCharge":0,"MeleeArmor":1,"MinRange":0,"PierceArmor":3,"Range":0,"RechargeRate":0,"ReloadTime":2,"Speed":0.6,"TrainTime":25,"Trait":0,"TraitPiece":0,"internal_name":"UMPCAV"},"559":{"AccuracyPercent":85,"Armours":[{"Amount":0,"Class":4},{"Amount":0,"Class":15},{"Amount":0,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":8,"AttackDelaySeconds":0.22166666666666665,"Attacks":[{"Amount":2,"Class":27},{"Amount":0,"Class":21},{"Amount":0,"Class":4},{"Amount":0,"Class":8},{"Amount":8,"Class":3},{"Amount":0,"Class":17}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":35,"Wood":40},"FrameDelay":19,"GarrisonCapacity":0,"HP":50,"ID":559,"LanguageHelpId":26452,"LanguageNameId":5452,"LineOfSight":6,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":0,"Range":4,"RechargeRate":0,"ReloadTime":3,"Speed":0.96,"TrainTime":13,"Trait":0,"TraitPiece":0,"internal_name":"UCHUK"},"560":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":1},{"Amount":1,"Class":4},{"Amount":1,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":12,"AttackDelaySeconds":0,"Attacks":[{"Amount":3,"Class":29},{"Amount":3,"Class":21},{"Amount":12,"Class":4},{"Amount":12,"Class":19},{"Amount":0,"Class":8},{"Amount":0,"Class":30}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":50,"Gold":30},"FrameDelay":0,"GarrisonCapacity":0,"HP":80,"ID":560,"LanguageHelpId":26460,"LanguageNameId":5460,"LineOfSight":5,"MaxCharge":0,"MeleeArmor":1,"MinRange":0,"PierceArmor":1,"Range":0,"RechargeRate":0,"ReloadTime":1.9,"Speed":1,"TrainTime":9,"Trait":0,"TraitPiece":0,"internal_name":"USMUR"},"561":{"AccuracyPercent":95,"Armours":[{"Amount":0,"Class":28},{"Amount":1,"Class":4},{"Amount":0,"Class":15},{"Amount":0,"Class":8},{"Amount":0,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":8,"AttackDelaySeconds":0.49833333333333335,"Attacks":[{"Amount":1,"Class":27},{"Amount":0,"Class":21},{"Amount":8,"Class":3},{"Amount":0,"Class":17},{"Amount":5,"Class":20},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":65,"Wood":55},"FrameDelay":23,"GarrisonCapacity":0,"HP":60,"ID":561,"LanguageHelpId":26458,"LanguageNameId":5458,"LineOfSight":6,"MaxCharge":0,"MeleeArmor":1,"MinRange":0,"PierceArmor":0,"Range":4,"RechargeRate":0,"ReloadTime":2.1,"Speed":1.4,"TrainTime":26,"Trait":0,"TraitPiece":0,"internal_name":"UMOSU"},"567":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":1},{"Amount":1,"Class":4},{"Amount":1,"Class":3},{"Amount":0,"Class":31}],"Attack":13,"AttackDelaySeconds":0,"Attacks":[{"Amount":8,"Class":29},{"Amount":4,"Class":21},{"Amount":13,"Class":4},{"Amount":0,"Class":8},{"Amount":0,"Class":30}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":60,"Gold":20},"FrameDelay":0,"GarrisonCapacity":0,"HP":70,"ID":567,"LanguageHelpId":26469,"LanguageNameId":5469,"LineOfSight":5,"MaxCharge":0,"MeleeArmor":1,"MinRange":0,"PierceArmor":1,"Range":0,"RechargeRate":0,"ReloadTime":2,"Speed":0.9,"TrainTime":21,"Trait":0,"TraitPiece":0,"internal_name":"HEROI"},"569":{"AccuracyPercent":100,"Armours":[{"Amount":2,"Class":4},{"Amount":0,"Class":8},{"Amount":3,"Class":3},{"Amount":0,"Class":31}],"Attack":14,"AttackDelaySeconds":0,"Attacks":[{"Amount":14,"Class":4},{"Amount":0,"Class":15},{"Amount":0,"Class":11},{"Amount":0,"Class":21},{"Amount":0,"Class":38},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":60,"Gold":75},"FrameDelay":0,"GarrisonCapacity":0,"HP":160,"ID":569,"LanguageHelpId":26471,"LanguageNameId":5471,"LineOfSight":5,"MaxCharge":0,"MeleeArmor":2,"MinRange":0,"PierceArmor":3,"Range":0,"RechargeRate":0,"ReloadTime":1.9,"Speed":1.35,"TrainTime":30,"Trait":0,"TraitPiece":0,"internal_name":"HEROC"},"588":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":4},{"Amount":8,"Class":3},{"Amount":0,"Class":20},{"Amount":0,"Class":31}],"Attack":75,"AttackDelaySeconds":0,"Attacks":[{"Amount":60,"Class":11},{"Amount":75,"Class":4},{"Amount":12,"Class":20},{"Amount":50,"Class":37}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":135,"Wood":160},"FrameDelay":0,"GarrisonCapacity":0,"HP":70,"ID":588,"LanguageHelpId":26493,"LanguageNameId":5493,"LineOfSight":10,"MaxCharge":0,"MeleeArmor":0,"MinRange":3,"PierceArmor":8,"Range":8,"RechargeRate":0,"ReloadTime":6,"Speed":0.6,"TrainTime":46,"Trait":0,"TraitPiece":0,"internal_name":"SNAGR"},"691":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":16},{"Amount":0,"Class":4},{"Amount":8,"Class":3},{"Amount":0,"Class":23},{"Amount":0,"Class":31}],"Attack":60,"AttackDelaySeconds":0,"Attacks":[{"Amount":275,"Class":11},{"Amount":60,"Class":4},{"Amount":25,"Class":20}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":150,"Wood":200},"FrameDelay":0,"GarrisonCapacity":0,"HP":150,"ID":691,"LanguageHelpId":26573,"LanguageNameId":5573,"LineOfSight":17,"MaxCharge":0,"MeleeArmor":0,"MinRange":3,"PierceArmor":8,"Range":15,"RechargeRate":0,"ReloadTime":10,"Speed":1.1,"TrainTime":46,"Trait":2,"TraitPiece":0,"internal_name":"CNGAU"},"692":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":1},{"Amount":1,"Class":4},{"Amount":1,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":12,"AttackDelaySeconds":0,"Attacks":[{"Amount":2,"Class":29},{"Amount":2,"Class":21},{"Amount":12,"Class":4},{"Amount":0,"Class":8},{"Amount":0,"Class":30}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":65,"Gold":25},"FrameDelay":0,"GarrisonCapacity":0,"HP":54,"ID":692,"LanguageHelpId":26574,"LanguageNameId":5574,"LineOfSight":3,"MaxCharge":0,"MeleeArmor":1,"MinRange":0,"PierceArmor":1,"Range":0,"RechargeRate":0,"ReloadTime":2,"Speed":1.05,"TrainTime":14,"Trait":0,"TraitPiece":0,"internal_name":"VBRSK"},"694":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":1},{"Amount":2,"Class":4},{"Amount":1,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":14,"AttackDelaySeconds":0,"Attacks":[{"Amount":3,"Class":29},{"Amount":3,"Class":21},{"Amount":14,"Class":4},{"Amount":0,"Class":8},{"Amount":0,"Class":30}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":65,"Gold":25},"FrameDelay":0,"GarrisonCapacity":0,"HP":62,"ID":694,"LanguageHelpId":26576,"LanguageNameId":5576,"LineOfSight":5,"MaxCharge":0,"MeleeArmor":2,"MinRange":0,"PierceArmor":1,"Range":0,"RechargeRate":0,"ReloadTime":2,"Speed":1.05,"TrainTime":12,"Trait":0,"TraitPiece":0,"internal_name":"UVBRK"},"725":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":1},{"Amount":1,"Class":4},{"Amount":2,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":10,"AttackDelaySeconds":0,"Attacks":[{"Amount":2,"Class":29},{"Amount":2,"Class":21},{"Amount":10,"Class":1},{"Amount":10,"Class":4},{"Amount":0,"Class":8},{"Amount":10,"Class":32},{"Amount":0,"Class":30}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":60,"Gold":30},"FrameDelay":0,"GarrisonCapacity":0,"HP":65,"ID":725,"LanguageHelpId":26667,"LanguageNameId":5667,"LineOfSight":3,"MaxCharge":0,"MeleeArmor":1,"MinRange":0,"PierceArmor":2,"Range":0,"RechargeRate":0,"ReloadTime":2,"Speed":1,"TrainTime":12,"Trait":0,"TraitPiece":0,"internal_name":"JAGUAR"},"726":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":1},{"Amount":2,"Class":4},{"Amount":2,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":12,"AttackDelaySeconds":0,"Attacks":[{"Amount":2,"Class":29},{"Amount":2,"Class":21},{"Amount":11,"Class":1},{"Amount":12,"Class":4},{"Amount":0,"Class":8},{"Amount":10,"Class":32},{"Amount":0,"Class":30}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":60,"Gold":30},"FrameDelay":0,"GarrisonCapacity":0,"HP":75,"ID":726,"LanguageHelpId":26669,"LanguageNameId":5669,"LineOfSight":5,"MaxCharge":0,"MeleeArmor":2,"MinRange":0,"PierceArmor":2,"Range":0,"RechargeRate":0,"ReloadTime":2,"Speed":1,"TrainTime":12,"Trait":0,"TraitPiece":0,"internal_name":"JAGUARX"},"751":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":29},{"Amount":0,"Class":1},{"Amount":0,"Class":4},{"Amount":2,"Class":3},{"Amount":0,"Class":31}],"Attack":4,"AttackDelaySeconds":0,"Attacks":[{"Amount":8,"Class":25},{"Amount":4,"Class":4},{"Amount":0,"Class":8},{"Amount":3,"Class":20},{"Amount":0,"Class":21},{"Amount":0,"Class":16},{"Amount":0,"Class":30},{"Amount":0,"Class":34}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":25,"Gold":50},"FrameDelay":0,"GarrisonCapacity":0,"HP":50,"ID":751,"LanguageHelpId":26672,"LanguageNameId":5672,"LineOfSight":5,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":2,"Range":0,"RechargeRate":0,"ReloadTime":2,"Speed":1.1,"TrainTime":60,"Trait":16,"TraitPiece":0,"internal_name":"EAGLE"},"752":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":29},{"Amount":0,"Class":1},{"Amount":0,"Class":4},{"Amount":4,"Class":3},{"Amount":0,"Class":31}],"Attack":9,"AttackDelaySeconds":0,"Attacks":[{"Amount":10,"Class":25},{"Amount":9,"Class":4},{"Amount":4,"Class":8},{"Amount":2,"Class":16},{"Amount":5,"Class":20},{"Amount":0,"Class":21},{"Amount":3,"Class":30},{"Amount":2,"Class":34}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":25,"Gold":50},"FrameDelay":0,"GarrisonCapacity":0,"HP":60,"ID":752,"LanguageHelpId":26673,"LanguageNameId":5673,"LineOfSight":6,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":4,"Range":0,"RechargeRate":0,"ReloadTime":2,"Speed":1.3,"TrainTime":20,"Trait":16,"TraitPiece":0,"internal_name":"EAGLEX"},"753":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":29},{"Amount":0,"Class":1},{"Amount":0,"Class":4},{"Amount":3,"Class":3},{"Amount":0,"Class":31}],"Attack":7,"AttackDelaySeconds":0,"Attacks":[{"Amount":8,"Class":25},{"Amount":7,"Class":4},{"Amount":3,"Class":8},{"Amount":3,"Class":20},{"Amount":1,"Class":16},{"Amount":0,"Class":21},{"Amount":2,"Class":30},{"Amount":1,"Class":34}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":25,"Gold":50},"FrameDelay":0,"GarrisonCapacity":0,"HP":55,"ID":753,"LanguageHelpId":26671,"LanguageNameId":5671,"LineOfSight":6,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":3,"Range":0,"RechargeRate":0,"ReloadTime":2,"Speed":1.15,"TrainTime":35,"Trait":16,"TraitPiece":0,"internal_name":"EAGLEH"},"755":{"AccuracyPercent":100,"Armours":[{"Amount":1,"Class":4},{"Amount":0,"Class":8},{"Amount":3,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":8,"AttackDelaySeconds":0,"Attacks":[{"Amount":10,"Class":26},{"Amount":8,"Class":11},{"Amount":8,"Class":4},{"Amount":0,"Class":15},{"Amount":12,"Class":13},{"Amount":8,"Class":22},{"Amount":0,"Class":21},{"Amount":0,"Class":38},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":60,"Gold":60},"FrameDelay":0,"GarrisonCapacity":0,"HP":100,"ID":755,"LanguageHelpId":26675,"LanguageNameId":5675,"LineOfSight":5,"MaxCharge":0,"MeleeArmor":1,"MinRange":0,"PierceArmor":3,"Range":0,"RechargeRate":0,"ReloadTime":2.1,"Speed":1.35,"TrainTime":14,"Trait":0,"TraitPiece":0,"internal_name":"TARKAN"},"757":{"AccuracyPercent":100,"Armours":[{"Amount":1,"Class":4},{"Amount":0,"Class":8},{"Amount":4,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":11,"AttackDelaySeconds":0,"Attacks":[{"Amount":10,"Class":26},{"Amount":10,"Class":11},{"Amount":11,"Class":4},{"Amount":0,"Class":15},{"Amount":12,"Class":13},{"Amount":10,"Class":22},{"Amount":0,"Class":21},{"Amount":0,"Class":38},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":60,"Gold":60},"FrameDelay":0,"GarrisonCapacity":0,"HP":150,"ID":757,"LanguageHelpId":26677,"LanguageNameId":5677,"LineOfSight":7,"MaxCharge":0,"MeleeArmor":1,"MinRange":0,"PierceArmor":4,"Range":0,"RechargeRate":0,"ReloadTime":2.1,"Speed":1.35,"TrainTime":14,"Trait":0,"TraitPiece":0,"internal_name":"UTARK"},"763":{"AccuracyPercent":80,"Armours":[{"Amount":0,"Class":4},{"Amount":0,"Class":15},{"Amount":1,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":5,"AttackDelaySeconds":0.5,"Attacks":[{"Amount":2,"Class":27},{"Amount":0,"Class":21},{"Amount":1,"Class":1},{"Amount":5,"Class":3},{"Amount":0,"Class":17},{"Amount":1,"Class":32}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":55,"Wood":55},"FrameDelay":15,"GarrisonCapacity":0,"HP":50,"ID":763,"LanguageHelpId":26683,"LanguageNameId":5683,"LineOfSight":6,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":1,"Range":4,"RechargeRate":0,"ReloadTime":1.9,"Speed":1.2,"TrainTime":16,"Trait":0,"TraitPiece":0,"internal_name":"PLUME"},"765":{"AccuracyPercent":90,"Armours":[{"Amount":0,"Class":4},{"Amount":0,"Class":15},{"Amount":2,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":5,"AttackDelaySeconds":0.5,"Attacks":[{"Amount":2,"Class":27},{"Amount":0,"Class":21},{"Amount":2,"Class":1},{"Amount":5,"Class":3},{"Amount":0,"Class":17},{"Amount":2,"Class":32}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":55,"Wood":55},"FrameDelay":15,"GarrisonCapacity":0,"HP":65,"ID":765,"LanguageHelpId":26685,"LanguageNameId":5685,"LineOfSight":6,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":2,"Range":5,"RechargeRate":0,"ReloadTime":1.9,"Speed":1.2,"TrainTime":16,"Trait":0,"TraitPiece":0,"internal_name":"UPLUM"},"771":{"AccuracyPercent":65,"Armours":[{"Amount":2,"Class":4},{"Amount":0,"Class":15},{"Amount":0,"Class":8},{"Amount":1,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":23},{"Amount":0,"Class":28},{"Amount":0,"Class":31}],"Attack":16,"AttackDelaySeconds":0.40444444444444444,"Attacks":[{"Amount":0,"Class":11},{"Amount":16,"Class":3},{"Amount":4,"Class":17},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":60,"Gold":70},"FrameDelay":13,"GarrisonCapacity":0,"HP":55,"ID":771,"LanguageHelpId":26687,"LanguageNameId":5687,"LineOfSight":8,"MaxCharge":0,"MeleeArmor":2,"MinRange":0,"PierceArmor":1,"Range":6,"RechargeRate":0,"ReloadTime":2.9,"Speed":1.3,"TrainTime":24,"Trait":0,"TraitPiece":0,"internal_name":"CONQI"},"773":{"AccuracyPercent":70,"Armours":[{"Amount":2,"Class":4},{"Amount":0,"Class":15},{"Amount":0,"Class":8},{"Amount":2,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":23},{"Amount":0,"Class":28},{"Amount":0,"Class":31}],"Attack":18,"AttackDelaySeconds":0.40444444444444444,"Attacks":[{"Amount":2,"Class":11},{"Amount":18,"Class":3},{"Amount":6,"Class":17},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":60,"Gold":70},"FrameDelay":13,"GarrisonCapacity":0,"HP":70,"ID":773,"LanguageHelpId":26689,"LanguageNameId":5689,"LineOfSight":9,"MaxCharge":0,"MeleeArmor":2,"MinRange":0,"PierceArmor":2,"Range":6,"RechargeRate":0,"ReloadTime":2.9,"Speed":1.3,"TrainTime":24,"Trait":0,"TraitPiece":0,"internal_name":"UCONQ"},"775":{"AccuracyPercent":25,"Armours":[{"Amount":0,"Class":25},{"Amount":0,"Class":4},{"Amount":0,"Class":8},{"Amount":0,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":0,"AttackDelaySeconds":0,"Attacks":[],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":100},"FrameDelay":0,"GarrisonCapacity":0,"HP":30,"ID":775,"LanguageHelpId":26691,"LanguageNameId":5691,"LineOfSight":9,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":0,"Range":7,"RechargeRate":0,"ReloadTime":1,"Speed":1.1,"TrainTime":51,"Trait":0,"TraitPiece":0,"internal_name":"MONKY"},"827":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":4},{"Amount":0,"Class":15},{"Amount":0,"Class":8},{"Amount":3,"Class":3},{"Amount":0,"Class":19},{"Amount":-1,"Class":28},{"Amount":0,"Class":31}],"Attack":9,"AttackDelaySeconds":0.9955555555555555,"Attacks":[{"Amount":5,"Class":21},{"Amount":9,"Class":3},{"Amount":0,"Class":27},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":60,"Wood":200},"FrameDelay":32,"GarrisonCapacity":0,"HP":150,"ID":827,"LanguageHelpId":26727,"LanguageNameId":5727,"LineOfSight":7,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":3,"Range":4,"RechargeRate":0,"ReloadTime":2.5,"Speed":1.2,"TrainTime":21,"Trait":0,"TraitPiece":0,"internal_name":"WAGON"},"829":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":4},{"Amount":0,"Class":15},{"Amount":0,"Class":8},{"Amount":4,"Class":3},{"Amount":0,"Class":19},{"Amount":-1,"Class":28},{"Amount":0,"Class":31}],"Attack":9,"AttackDelaySeconds":0.9955555555555555,"Attacks":[{"Amount":5,"Class":21},{"Amount":9,"Class":3},{"Amount":0,"Class":27},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":60,"Wood":200},"FrameDelay":32,"GarrisonCapacity":0,"HP":200,"ID":829,"LanguageHelpId":26729,"LanguageNameId":5729,"LineOfSight":8,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":4,"Range":5,"RechargeRate":0,"ReloadTime":2.5,"Speed":1.2,"TrainTime":21,"Trait":0,"TraitPiece":0,"internal_name":"UWAGO"},"831":{"AccuracyPercent":100,"Armours":[{"Amount":8,"Class":16},{"Amount":0,"Class":2},{"Amount":6,"Class":4},{"Amount":5,"Class":3},{"Amount":0,"Class":23},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":50,"AttackDelaySeconds":0,"Attacks":[{"Amount":50,"Class":4}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":180,"Wood":190},"FrameDelay":0,"GarrisonCapacity":0,"HP":200,"ID":831,"LanguageHelpId":26731,"LanguageNameId":5731,"LineOfSight":8,"MaxCharge":0,"MeleeArmor":6,"MinRange":0,"PierceArmor":5,"Range":6,"RechargeRate":0,"ReloadTime":6,"Speed":0.9,"TrainTime":50,"Trait":2,"TraitPiece":0,"internal_name":"TURTL"},"832":{"AccuracyPercent":100,"Armours":[{"Amount":11,"Class":16},{"Amount":1,"Class":2},{"Amount":8,"Class":4},{"Amount":6,"Class":3},{"Amount":0,"Class":23},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":50,"AttackDelaySeconds":0,"Attacks":[{"Amount":50,"Class":4}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":180,"Wood":190},"FrameDelay":0,"GarrisonCapacity":0,"HP":300,"ID":832,"LanguageHelpId":26732,"LanguageNameId":5732,"LineOfSight":9,"MaxCharge":0,"MeleeArmor":8,"MinRange":0,"PierceArmor":6,"Range":7,"RechargeRate":0,"ReloadTime":6,"Speed":1.035,"TrainTime":50,"Trait":2,"TraitPiece":0,"internal_name":"UTURT"},"866":{"AccuracyPercent":100,"Armours":[{"Amount":1,"Class":4},{"Amount":0,"Class":3},{"Amount":0,"Class":15},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":6,"AttackDelaySeconds":0.5,"Attacks":[{"Amount":6,"Class":3},{"Amount":5,"Class":8},{"Amount":4,"Class":16},{"Amount":5,"Class":5},{"Amount":0,"Class":21},{"Amount":4,"Class":30},{"Amount":4,"Class":34}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":40,"Wood":45},"FrameDelay":15,"GarrisonCapacity":0,"HP":45,"ID":866,"LanguageHelpId":26723,"LanguageNameId":5723,"LineOfSight":8,"MaxCharge":0,"MeleeArmor":1,"MinRange":0,"PierceArmor":0,"Range":4,"RechargeRate":0,"ReloadTime":2,"Speed":0.96,"TrainTime":18,"Trait":0,"TraitPiece":0,"internal_name":"GENOE"},"868":{"AccuracyPercent":100,"Armours":[{"Amount":1,"Class":4},{"Amount":0,"Class":3},{"Amount":0,"Class":15},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":6,"AttackDelaySeconds":0.5,"Attacks":[{"Amount":6,"Class":3},{"Amount":7,"Class":8},{"Amount":5,"Class":16},{"Amount":7,"Class":5},{"Amount":0,"Class":21},{"Amount":6,"Class":30},{"Amount":5,"Class":34}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":40,"Wood":45},"FrameDelay":15,"GarrisonCapacity":0,"HP":50,"ID":868,"LanguageHelpId":26725,"LanguageNameId":5725,"LineOfSight":8,"MaxCharge":0,"MeleeArmor":1,"MinRange":0,"PierceArmor":0,"Range":4,"RechargeRate":0,"ReloadTime":2,"Speed":0.96,"TrainTime":14,"Trait":0,"TraitPiece":0,"internal_name":"GENOE_E"},"869":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":4},{"Amount":2,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":8},{"Amount":0,"Class":31}],"Attack":9,"AttackDelaySeconds":0,"Attacks":[{"Amount":9,"Class":4},{"Amount":1,"Class":17},{"Amount":5,"Class":20},{"Amount":0,"Class":11},{"Amount":0,"Class":21},{"Amount":0,"Class":38},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":80,"Gold":10},"FrameDelay":0,"GarrisonCapacity":0,"HP":70,"ID":869,"LanguageHelpId":26728,"LanguageNameId":5728,"LineOfSight":5,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":2,"Range":0,"RechargeRate":0,"ReloadTime":1.8,"Speed":1.5,"TrainTime":16,"Trait":0,"TraitPiece":0,"internal_name":"UMAGYX"},"871":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":4},{"Amount":2,"Class":3},{"Amount":0,"Class":8},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":10,"AttackDelaySeconds":0,"Attacks":[{"Amount":10,"Class":4},{"Amount":2,"Class":17},{"Amount":8,"Class":20},{"Amount":0,"Class":11},{"Amount":0,"Class":21},{"Amount":0,"Class":38},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":80,"Gold":10},"FrameDelay":0,"GarrisonCapacity":0,"HP":85,"ID":871,"LanguageHelpId":26730,"LanguageNameId":5730,"LineOfSight":6,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":2,"Range":0,"RechargeRate":0,"ReloadTime":1.8,"Speed":1.5,"TrainTime":16,"Trait":0,"TraitPiece":0,"internal_name":"UMAGYX"},"873":{"AccuracyPercent":70,"Armours":[{"Amount":0,"Class":4},{"Amount":0,"Class":15},{"Amount":0,"Class":8},{"Amount":2,"Class":3},{"Amount":0,"Class":5},{"Amount":-4,"Class":28},{"Amount":0,"Class":31}],"Attack":6,"AttackDelaySeconds":0.394,"Attacks":[{"Amount":0,"Class":21},{"Amount":6,"Class":3},{"Amount":0,"Class":27},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":80,"Gold":70},"FrameDelay":12,"GarrisonCapacity":0,"HP":230,"ID":873,"LanguageHelpId":26682,"LanguageNameId":5682,"LineOfSight":7,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":2,"Range":4,"RechargeRate":0,"ReloadTime":2,"Speed":0.9,"TrainTime":32,"Trait":0,"TraitPiece":0,"internal_name":"ELEAR"},"875":{"AccuracyPercent":85,"Armours":[{"Amount":0,"Class":4},{"Amount":0,"Class":15},{"Amount":0,"Class":8},{"Amount":2,"Class":3},{"Amount":0,"Class":5},{"Amount":-4,"Class":28},{"Amount":0,"Class":31}],"Attack":7,"AttackDelaySeconds":0.394,"Attacks":[{"Amount":0,"Class":21},{"Amount":7,"Class":3},{"Amount":0,"Class":27},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":80,"Gold":70},"FrameDelay":24,"GarrisonCapacity":0,"HP":280,"ID":875,"LanguageHelpId":26684,"LanguageNameId":5684,"LineOfSight":7,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":2,"Range":4,"RechargeRate":0,"ReloadTime":2,"Speed":0.9,"TrainTime":32,"Trait":0,"TraitPiece":0,"internal_name":"UELEA"},"876":{"AccuracyPercent":100,"Armours":[{"Amount":4,"Class":4},{"Amount":0,"Class":8},{"Amount":2,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":12,"AttackDelaySeconds":0,"Attacks":[{"Amount":12,"Class":4},{"Amount":0,"Class":15},{"Amount":0,"Class":11},{"Amount":0,"Class":21},{"Amount":0,"Class":38},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":60,"Gold":70},"FrameDelay":0,"GarrisonCapacity":0,"HP":100,"ID":876,"LanguageHelpId":26447,"LanguageNameId":5447,"LineOfSight":5,"MaxCharge":0,"MeleeArmor":4,"MinRange":0,"PierceArmor":2,"Range":0,"RechargeRate":0,"ReloadTime":1.9,"Speed":1.3,"TrainTime":15,"Trait":0,"TraitPiece":0,"internal_name":"BOYAR"},"878":{"AccuracyPercent":100,"Armours":[{"Amount":8,"Class":4},{"Amount":0,"Class":8},{"Amount":3,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":14,"AttackDelaySeconds":0,"Attacks":[{"Amount":14,"Class":4},{"Amount":0,"Class":15},{"Amount":0,"Class":11},{"Amount":0,"Class":21},{"Amount":0,"Class":38},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":60,"Gold":70},"FrameDelay":0,"GarrisonCapacity":0,"HP":130,"ID":878,"LanguageHelpId":26449,"LanguageNameId":5449,"LineOfSight":5,"MaxCharge":0,"MeleeArmor":8,"MinRange":0,"PierceArmor":3,"Range":0,"RechargeRate":0,"ReloadTime":1.9,"Speed":1.3,"TrainTime":15,"Trait":0,"TraitPiece":0,"internal_name":"EBOYA"},"879":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":1},{"Amount":1,"Class":4},{"Amount":0,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":7,"AttackDelaySeconds":0,"Attacks":[{"Amount":7,"Class":4},{"Amount":8,"Class":8},{"Amount":0,"Class":21},{"Amount":6,"Class":30},{"Amount":20,"Class":5}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":65,"Gold":30},"FrameDelay":0,"GarrisonCapacity":0,"HP":70,"ID":879,"LanguageHelpId":26686,"LanguageNameId":5686,"LineOfSight":4,"MaxCharge":0,"MeleeArmor":1,"MinRange":0,"PierceArmor":0,"Range":1,"RechargeRate":0,"ReloadTime":2,"Speed":1,"TrainTime":10,"Trait":0,"TraitPiece":0,"internal_name":"KAMAY"},"881":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":1},{"Amount":1,"Class":4},{"Amount":0,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":8,"AttackDelaySeconds":0,"Attacks":[{"Amount":8,"Class":4},{"Amount":12,"Class":8},{"Amount":0,"Class":21},{"Amount":10,"Class":30},{"Amount":20,"Class":5},{"Amount":1,"Class":35}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":65,"Gold":30},"FrameDelay":0,"GarrisonCapacity":0,"HP":80,"ID":881,"LanguageHelpId":26688,"LanguageNameId":5688,"LineOfSight":5,"MaxCharge":0,"MeleeArmor":1,"MinRange":0,"PierceArmor":0,"Range":1,"RechargeRate":0,"ReloadTime":2,"Speed":1,"TrainTime":10,"Trait":0,"TraitPiece":0,"internal_name":"EKAMA"},"882":{"AccuracyPercent":100,"Armours":[{"Amount":10,"Class":1},{"Amount":1,"Class":4},{"Amount":0,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31},{"Amount":0,"Class":32}],"Attack":10,"AttackDelaySeconds":0,"Attacks":[{"Amount":2,"Class":21},{"Amount":10,"Class":4},{"Amount":10,"Class":23},{"Amount":0,"Class":30},{"Amount":0,"Class":8}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":50,"Gold":35},"FrameDelay":0,"GarrisonCapacity":0,"HP":80,"ID":882,"LanguageHelpId":26114,"LanguageNameId":5114,"LineOfSight":6,"MaxCharge":0,"MeleeArmor":1,"MinRange":0,"PierceArmor":0,"Range":0,"RechargeRate":0,"ReloadTime":1.9,"Speed":1.2,"TrainTime":18,"Trait":0,"TraitPiece":0,"internal_name":"CONDO"},"1001":{"AccuracyPercent":0,"Armours":[{"Amount":2,"Class":4},{"Amount":0,"Class":20},{"Amount":4,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":23},{"Amount":0,"Class":31}],"Attack":7,"AttackDelaySeconds":0.6,"Attacks":[{"Amount":1,"Class":1},{"Amount":0,"Class":11},{"Amount":7,"Class":3},{"Amount":1,"Class":17},{"Amount":1,"Class":38}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":70,"Wood":80},"FrameDelay":12,"GarrisonCapacity":0,"HP":60,"ID":1001,"LanguageHelpId":26129,"LanguageNameId":5129,"LineOfSight":9,"MaxCharge":0,"MeleeArmor":2,"MinRange":1,"PierceArmor":4,"Range":7,"RechargeRate":0,"ReloadTime":3.45,"Speed":0.85,"TrainTime":21,"Trait":0,"TraitPiece":0,"internal_name":"ORGAN"},"1003":{"AccuracyPercent":0,"Armours":[{"Amount":2,"Class":4},{"Amount":0,"Class":20},{"Amount":6,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":23},{"Amount":0,"Class":31}],"Attack":9,"AttackDelaySeconds":0.6,"Attacks":[{"Amount":1,"Class":1},{"Amount":1,"Class":11},{"Amount":9,"Class":3},{"Amount":1,"Class":17},{"Amount":1,"Class":38}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":70,"Wood":80},"FrameDelay":12,"GarrisonCapacity":0,"HP":70,"ID":1003,"LanguageHelpId":26130,"LanguageNameId":5130,"LineOfSight":9,"MaxCharge":0,"MeleeArmor":2,"MinRange":1,"PierceArmor":6,"Range":7,"RechargeRate":0,"ReloadTime":3.45,"Speed":0.85,"TrainTime":21,"Trait":0,"TraitPiece":0,"internal_name":"EORGAN"},"1004":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":16},{"Amount":0,"Class":4},{"Amount":8,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":6,"AttackDelaySeconds":0,"Attacks":[{"Amount":8,"Class":11},{"Amount":6,"Class":16},{"Amount":6,"Class":3},{"Amount":4,"Class":17},{"Amount":6,"Class":34}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":43,"Wood":90},"FrameDelay":0,"GarrisonCapacity":0,"HP":130,"ID":1004,"LanguageHelpId":26132,"LanguageNameId":5132,"LineOfSight":9,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":8,"Range":6,"RechargeRate":0,"ReloadTime":3,"Speed":1.43,"TrainTime":36,"Trait":2,"TraitPiece":0,"internal_name":"CARAV"},"1006":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":16},{"Amount":0,"Class":4},{"Amount":8,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":8,"AttackDelaySeconds":0,"Attacks":[{"Amount":9,"Class":11},{"Amount":7,"Class":16},{"Amount":8,"Class":3},{"Amount":4,"Class":17},{"Amount":7,"Class":34}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":43,"Wood":90},"FrameDelay":0,"GarrisonCapacity":0,"HP":150,"ID":1006,"LanguageHelpId":26133,"LanguageNameId":5133,"LineOfSight":9,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":8,"Range":7,"RechargeRate":0,"ReloadTime":3,"Speed":1.43,"TrainTime":36,"Trait":2,"TraitPiece":0,"internal_name":"CARAV"},"1007":{"AccuracyPercent":95,"Armours":[{"Amount":0,"Class":4},{"Amount":1,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":28},{"Amount":0,"Class":30},{"Amount":0,"Class":15},{"Amount":0,"Class":31},{"Amount":-3,"Class":39}],"Attack":7,"AttackDelaySeconds":0.625,"Attacks":[{"Amount":0,"Class":21},{"Amount":7,"Class":3},{"Amount":0,"Class":17},{"Amount":0,"Class":1},{"Amount":4,"Class":28},{"Amount":0,"Class":27},{"Amount":0,"Class":11},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":60,"Wood":50},"FrameDelay":15,"GarrisonCapacity":0,"HP":55,"ID":1007,"LanguageHelpId":26134,"LanguageNameId":5134,"LineOfSight":5,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":1,"Range":4,"RechargeRate":0,"ReloadTime":2,"Speed":1.4,"TrainTime":25,"Trait":0,"TraitPiece":0,"internal_name":"CAMAR"},"1009":{"AccuracyPercent":95,"Armours":[{"Amount":1,"Class":4},{"Amount":1,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":28},{"Amount":0,"Class":30},{"Amount":0,"Class":15},{"Amount":0,"Class":31},{"Amount":-3,"Class":39}],"Attack":8,"AttackDelaySeconds":0.625,"Attacks":[{"Amount":0,"Class":21},{"Amount":8,"Class":3},{"Amount":0,"Class":17},{"Amount":0,"Class":1},{"Amount":6,"Class":28},{"Amount":0,"Class":27},{"Amount":0,"Class":11},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":60,"Wood":50},"FrameDelay":15,"GarrisonCapacity":0,"HP":60,"ID":1009,"LanguageHelpId":26136,"LanguageNameId":5136,"LineOfSight":5,"MaxCharge":0,"MeleeArmor":1,"MinRange":0,"PierceArmor":1,"Range":4,"RechargeRate":0,"ReloadTime":2,"Speed":1.4,"TrainTime":25,"Trait":0,"TraitPiece":0,"internal_name":"ECAMAR"},"1010":{"AccuracyPercent":90,"Armours":[{"Amount":0,"Class":4},{"Amount":0,"Class":15},{"Amount":0,"Class":8},{"Amount":4,"Class":3},{"Amount":0,"Class":28},{"Amount":0,"Class":19},{"Amount":0,"Class":31},{"Amount":0,"Class":38}],"Attack":3,"AttackDelaySeconds":0.5,"Attacks":[{"Amount":0,"Class":21},{"Amount":3,"Class":3},{"Amount":0,"Class":17},{"Amount":4,"Class":15},{"Amount":0,"Class":28},{"Amount":2,"Class":27},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":40,"Wood":35},"FrameDelay":12,"GarrisonCapacity":0,"HP":50,"ID":1010,"LanguageHelpId":26137,"LanguageNameId":5137,"LineOfSight":5,"MaxCharge":0,"MeleeArmor":0,"MinRange":1,"PierceArmor":4,"Range":4,"RechargeRate":0,"ReloadTime":3,"Speed":1.35,"TrainTime":25,"Trait":0,"TraitPiece":0,"internal_name":"GENITO"},"1012":{"AccuracyPercent":90,"Armours":[{"Amount":0,"Class":4},{"Amount":0,"Class":15},{"Amount":0,"Class":8},{"Amount":4,"Class":3},{"Amount":1,"Class":28},{"Amount":0,"Class":19},{"Amount":0,"Class":31},{"Amount":0,"Class":38}],"Attack":4,"AttackDelaySeconds":0.5,"Attacks":[{"Amount":0,"Class":21},{"Amount":4,"Class":3},{"Amount":0,"Class":17},{"Amount":5,"Class":15},{"Amount":2,"Class":28},{"Amount":2,"Class":27},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":40,"Wood":35},"FrameDelay":12,"GarrisonCapacity":0,"HP":55,"ID":1012,"LanguageHelpId":26139,"LanguageNameId":5139,"LineOfSight":6,"MaxCharge":0,"MeleeArmor":0,"MinRange":1,"PierceArmor":4,"Range":4,"RechargeRate":0,"ReloadTime":3,"Speed":1.35,"TrainTime":23,"Trait":0,"TraitPiece":0,"internal_name":"EGENITO"},"1013":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":1},{"Amount":0,"Class":4},{"Amount":0,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":10,"AttackDelaySeconds":1,"Attacks":[{"Amount":1,"Class":29},{"Amount":0,"Class":21},{"Amount":10,"Class":4},{"Amount":0,"Class":15},{"Amount":0,"Class":8},{"Amount":0,"Class":30}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":50,"Gold":40},"FrameDelay":30,"GarrisonCapacity":0,"HP":40,"ID":1013,"LanguageHelpId":26140,"LanguageNameId":5140,"LineOfSight":6,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":0,"Range":5,"RechargeRate":0,"ReloadTime":2,"Speed":1.25,"TrainTime":17,"Trait":0,"TraitPiece":0,"internal_name":"GBETO"},"1015":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":1},{"Amount":0,"Class":4},{"Amount":0,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":13,"AttackDelaySeconds":1,"Attacks":[{"Amount":1,"Class":29},{"Amount":0,"Class":21},{"Amount":13,"Class":4},{"Amount":0,"Class":15},{"Amount":0,"Class":8},{"Amount":0,"Class":30}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":50,"Gold":40},"FrameDelay":30,"GarrisonCapacity":0,"HP":50,"ID":1015,"LanguageHelpId":26141,"LanguageNameId":5141,"LineOfSight":7,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":0,"Range":6,"RechargeRate":0,"ReloadTime":2,"Speed":1.25,"TrainTime":17,"Trait":0,"TraitPiece":0,"internal_name":"EGBETO"},"1016":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":1},{"Amount":0,"Class":4},{"Amount":0,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31},{"Amount":-3,"Class":39}],"Attack":16,"AttackDelaySeconds":0,"Attacks":[{"Amount":2,"Class":29},{"Amount":0,"Class":21},{"Amount":16,"Class":4},{"Amount":0,"Class":8},{"Amount":0,"Class":30}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":50,"Gold":30},"FrameDelay":0,"GarrisonCapacity":0,"HP":45,"ID":1016,"LanguageHelpId":26143,"LanguageNameId":5143,"LineOfSight":3,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":0,"Range":0,"RechargeRate":0,"ReloadTime":2,"Speed":1.2,"TrainTime":8,"Trait":0,"TraitPiece":0,"internal_name":"SHOTEL"},"1018":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":1},{"Amount":0,"Class":4},{"Amount":1,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31},{"Amount":-3,"Class":39}],"Attack":18,"AttackDelaySeconds":0,"Attacks":[{"Amount":2,"Class":29},{"Amount":1,"Class":21},{"Amount":18,"Class":4},{"Amount":0,"Class":8},{"Amount":0,"Class":30}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":50,"Gold":30},"FrameDelay":0,"GarrisonCapacity":0,"HP":50,"ID":1018,"LanguageHelpId":26145,"LanguageNameId":5145,"LineOfSight":3,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":1,"Range":0,"RechargeRate":0,"ReloadTime":2,"Speed":1.2,"TrainTime":4,"Trait":0,"TraitPiece":0,"internal_name":"ESHOTEL"},"1103":{"AccuracyPercent":0,"Armours":[{"Amount":6,"Class":16},{"Amount":0,"Class":4},{"Amount":4,"Class":3},{"Amount":0,"Class":31}],"Attack":1,"AttackDelaySeconds":0,"Attacks":[{"Amount":1,"Class":11},{"Amount":3,"Class":16},{"Amount":1,"Class":2},{"Amount":0,"Class":4},{"Amount":1,"Class":3},{"Amount":1,"Class":34}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":45,"Wood":75},"FrameDelay":0,"GarrisonCapacity":0,"HP":100,"ID":1103,"LanguageHelpId":26160,"LanguageNameId":5160,"LineOfSight":5,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":4,"Range":2.49,"RechargeRate":0,"ReloadTime":0.25,"Speed":1.3,"TrainTime":65,"Trait":2,"TraitPiece":0,"internal_name":"SFRGAL"},"1104":{"AccuracyPercent":100,"Armours":[{"Amount":1,"Class":16},{"Amount":0,"Class":4},{"Amount":2,"Class":3},{"Amount":0,"Class":31}],"Attack":90,"AttackDelaySeconds":0,"Attacks":[{"Amount":180,"Class":11},{"Amount":90,"Class":4}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":50,"Wood":70},"FrameDelay":0,"GarrisonCapacity":0,"HP":45,"ID":1104,"LanguageHelpId":26162,"LanguageNameId":5162,"LineOfSight":6,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":2,"Range":0,"RechargeRate":0,"ReloadTime":5,"Speed":1.5,"TrainTime":45,"Trait":2,"TraitPiece":0,"internal_name":"SDGAL"},"1105":{"AccuracyPercent":0,"Armours":[{"Amount":-2,"Class":4},{"Amount":100,"Class":3},{"Amount":0,"Class":17},{"Amount":0,"Class":20},{"Amount":0,"Class":31}],"Attack":0,"AttackDelaySeconds":0,"Attacks":[],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":160,"Wood":200},"FrameDelay":0,"GarrisonCapacity":10,"HP":220,"ID":1105,"LanguageHelpId":26445,"LanguageNameId":5445,"LineOfSight":8,"MaxCharge":0,"MeleeArmor":-2,"MinRange":0,"PierceArmor":100,"Range":0,"RechargeRate":0,"ReloadTime":0,"Speed":0.8,"TrainTime":36,"Trait":1,"TraitPiece":0,"internal_name":"SIEGTWR"},"1120":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":4},{"Amount":0,"Class":8},{"Amount":3,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":5},{"Amount":0,"Class":20},{"Amount":0,"Class":31},{"Amount":20,"Class":37}],"Attack":10,"AttackDelaySeconds":0.394,"Attacks":[{"Amount":3,"Class":21},{"Amount":10,"Class":3},{"Amount":3,"Class":13},{"Amount":0,"Class":27},{"Amount":100,"Class":18},{"Amount":2,"Class":11},{"Amount":8,"Class":16},{"Amount":8,"Class":34},{"Amount":0,"Class":38},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":100,"Gold":80},"FrameDelay":12,"GarrisonCapacity":0,"HP":250,"ID":1120,"LanguageHelpId":26146,"LanguageNameId":5146,"LineOfSight":7,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":3,"Range":5,"RechargeRate":0,"ReloadTime":2.5,"Speed":0.8,"TrainTime":25,"Trait":0,"TraitPiece":0,"internal_name":"ELEBALI"},"1122":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":4},{"Amount":0,"Class":8},{"Amount":3,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":5},{"Amount":0,"Class":20},{"Amount":0,"Class":31},{"Amount":20,"Class":37}],"Attack":11,"AttackDelaySeconds":0.394,"Attacks":[{"Amount":4,"Class":21},{"Amount":11,"Class":3},{"Amount":4,"Class":13},{"Amount":0,"Class":27},{"Amount":100,"Class":18},{"Amount":4,"Class":11},{"Amount":8,"Class":16},{"Amount":8,"Class":34},{"Amount":0,"Class":38},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":100,"Gold":80},"FrameDelay":12,"GarrisonCapacity":0,"HP":290,"ID":1122,"LanguageHelpId":26147,"LanguageNameId":5147,"LineOfSight":7,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":3,"Range":5,"RechargeRate":0,"ReloadTime":2.5,"Speed":0.8,"TrainTime":25,"Trait":0,"TraitPiece":0,"internal_name":"EELEBALI"},"1123":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":1},{"Amount":0,"Class":4},{"Amount":1,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":7,"AttackDelaySeconds":0,"Attacks":[{"Amount":2,"Class":29},{"Amount":0,"Class":21},{"Amount":7,"Class":4},{"Amount":0,"Class":8},{"Amount":0,"Class":30}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":25,"Gold":15},"FrameDelay":0,"GarrisonCapacity":0,"HP":30,"ID":1123,"LanguageHelpId":26148,"LanguageNameId":5148,"LineOfSight":3,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":1,"Range":0,"RechargeRate":0,"ReloadTime":2,"Speed":1.2,"TrainTime":6,"Trait":0,"TraitPiece":0,"internal_name":"KARAM"},"1125":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":1},{"Amount":1,"Class":4},{"Amount":1,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":8,"AttackDelaySeconds":0,"Attacks":[{"Amount":2,"Class":29},{"Amount":1,"Class":21},{"Amount":8,"Class":4},{"Amount":0,"Class":8},{"Amount":0,"Class":30}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":25,"Gold":15},"FrameDelay":0,"GarrisonCapacity":0,"HP":40,"ID":1125,"LanguageHelpId":26150,"LanguageNameId":5150,"LineOfSight":3,"MaxCharge":0,"MeleeArmor":1,"MinRange":0,"PierceArmor":1,"Range":0,"RechargeRate":0,"ReloadTime":2,"Speed":1.2,"TrainTime":6,"Trait":0,"TraitPiece":0,"internal_name":"EKARAM"},"1126":{"AccuracyPercent":20,"Armours":[{"Amount":0,"Class":4},{"Amount":1,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":28},{"Amount":0,"Class":15},{"Amount":0,"Class":8},{"Amount":0,"Class":31}],"Attack":12,"AttackDelaySeconds":0.6,"Attacks":[{"Amount":0,"Class":11},{"Amount":12,"Class":3},{"Amount":2,"Class":17},{"Amount":0,"Class":1},{"Amount":0,"Class":27},{"Amount":0,"Class":21},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":60,"Wood":75},"FrameDelay":15,"GarrisonCapacity":0,"HP":60,"ID":1126,"LanguageHelpId":26151,"LanguageNameId":5151,"LineOfSight":7,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":1,"Range":5,"RechargeRate":0,"ReloadTime":2,"Speed":1.3,"TrainTime":18,"Trait":0,"TraitPiece":0,"internal_name":"ARAMBAI"},"1128":{"AccuracyPercent":30,"Armours":[{"Amount":0,"Class":4},{"Amount":2,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":28},{"Amount":0,"Class":15},{"Amount":0,"Class":8},{"Amount":0,"Class":31}],"Attack":14,"AttackDelaySeconds":0.6,"Attacks":[{"Amount":0,"Class":11},{"Amount":14,"Class":3},{"Amount":2,"Class":17},{"Amount":0,"Class":1},{"Amount":0,"Class":27},{"Amount":0,"Class":21},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":60,"Wood":75},"FrameDelay":15,"GarrisonCapacity":0,"HP":65,"ID":1128,"LanguageHelpId":26152,"LanguageNameId":5152,"LineOfSight":7,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":2,"Range":5,"RechargeRate":0,"ReloadTime":2,"Speed":1.3,"TrainTime":18,"Trait":0,"TraitPiece":0,"internal_name":"EARAMBAI"},"1129":{"AccuracyPercent":80,"Armours":[{"Amount":0,"Class":4},{"Amount":0,"Class":15},{"Amount":4,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":6,"AttackDelaySeconds":0.6900000000000001,"Attacks":[{"Amount":2,"Class":27},{"Amount":0,"Class":21},{"Amount":6,"Class":3},{"Amount":0,"Class":17},{"Amount":0,"Class":1}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":45,"Wood":50},"FrameDelay":23,"GarrisonCapacity":0,"HP":40,"ID":1129,"LanguageHelpId":26165,"LanguageNameId":5165,"LineOfSight":6,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":4,"Range":4,"RechargeRate":0,"ReloadTime":2,"Speed":1.1,"TrainTime":16,"Trait":0,"TraitPiece":0,"internal_name":"RATAN"},"1131":{"AccuracyPercent":90,"Armours":[{"Amount":0,"Class":4},{"Amount":0,"Class":15},{"Amount":6,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":7,"AttackDelaySeconds":0.6900000000000001,"Attacks":[{"Amount":2,"Class":27},{"Amount":0,"Class":21},{"Amount":0,"Class":1},{"Amount":7,"Class":3},{"Amount":0,"Class":17}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":45,"Wood":50},"FrameDelay":23,"GarrisonCapacity":0,"HP":45,"ID":1131,"LanguageHelpId":26166,"LanguageNameId":5166,"LineOfSight":6,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":6,"Range":5,"RechargeRate":0,"ReloadTime":2,"Speed":1.1,"TrainTime":16,"Trait":0,"TraitPiece":0,"internal_name":"ERATAN"},"1132":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":5},{"Amount":1,"Class":4},{"Amount":0,"Class":8},{"Amount":2,"Class":3},{"Amount":0,"Class":31}],"Attack":12,"AttackDelaySeconds":0,"Attacks":[{"Amount":4,"Class":11},{"Amount":12,"Class":4},{"Amount":4,"Class":13},{"Amount":0,"Class":15},{"Amount":0,"Class":21},{"Amount":0,"Class":38},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":110,"Gold":70},"FrameDelay":0,"GarrisonCapacity":0,"HP":250,"ID":1132,"LanguageHelpId":26167,"LanguageNameId":5167,"LineOfSight":7,"MaxCharge":0,"MeleeArmor":1,"MinRange":0,"PierceArmor":2,"Range":0,"RechargeRate":0,"ReloadTime":2,"Speed":0.85,"TrainTime":24,"Trait":0,"TraitPiece":0,"internal_name":"BATELE"},"1134":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":5},{"Amount":1,"Class":4},{"Amount":0,"Class":8},{"Amount":3,"Class":3},{"Amount":0,"Class":31}],"Attack":14,"AttackDelaySeconds":0,"Attacks":[{"Amount":7,"Class":11},{"Amount":14,"Class":4},{"Amount":7,"Class":13},{"Amount":0,"Class":15},{"Amount":0,"Class":21},{"Amount":0,"Class":38},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":110,"Gold":70},"FrameDelay":0,"GarrisonCapacity":0,"HP":300,"ID":1134,"LanguageHelpId":26168,"LanguageNameId":5168,"LineOfSight":8,"MaxCharge":0,"MeleeArmor":1,"MinRange":0,"PierceArmor":3,"Range":0,"RechargeRate":0,"ReloadTime":2,"Speed":0.85,"TrainTime":24,"Trait":0,"TraitPiece":0,"internal_name":"EBATELE"},"1155":{"AccuracyPercent":95,"Armours":[{"Amount":0,"Class":4},{"Amount":0,"Class":15},{"Amount":5,"Class":3},{"Amount":0,"Class":31},{"Amount":0,"Class":38}],"Attack":4,"AttackDelaySeconds":0.5066666666666667,"Attacks":[{"Amount":3,"Class":28},{"Amount":3,"Class":27},{"Amount":0,"Class":21},{"Amount":5,"Class":15},{"Amount":4,"Class":3},{"Amount":0,"Class":17}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":25,"Wood":35},"FrameDelay":19,"GarrisonCapacity":0,"HP":35,"ID":1155,"LanguageHelpId":26190,"LanguageNameId":5190,"LineOfSight":7,"MaxCharge":0,"MeleeArmor":0,"MinRange":1,"PierceArmor":5,"Range":5,"RechargeRate":0,"ReloadTime":3,"Speed":0.96,"TrainTime":22,"Trait":0,"TraitPiece":0,"internal_name":"IHXBOW"},"1225":{"AccuracyPercent":100,"Armours":[{"Amount":2,"Class":4},{"Amount":0,"Class":8},{"Amount":1,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":12,"AttackDelaySeconds":0,"Attacks":[{"Amount":12,"Class":4},{"Amount":0,"Class":15},{"Amount":0,"Class":11},{"Amount":0,"Class":21},{"Amount":0,"Class":38},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":60,"Gold":70},"FrameDelay":0,"GarrisonCapacity":0,"HP":100,"ID":1225,"LanguageHelpId":26288,"LanguageNameId":5288,"LineOfSight":5,"MaxCharge":0,"MeleeArmor":2,"MinRange":0,"PierceArmor":1,"Range":0,"RechargeRate":0,"ReloadTime":2.4,"Speed":1.35,"TrainTime":19,"Trait":0,"TraitPiece":0,"internal_name":"KONNIK"},"1227":{"AccuracyPercent":100,"Armours":[{"Amount":2,"Class":4},{"Amount":0,"Class":8},{"Amount":2,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":14,"AttackDelaySeconds":0,"Attacks":[{"Amount":14,"Class":4},{"Amount":0,"Class":15},{"Amount":0,"Class":11},{"Amount":0,"Class":21},{"Amount":0,"Class":38},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":60,"Gold":70},"FrameDelay":0,"GarrisonCapacity":0,"HP":120,"ID":1227,"LanguageHelpId":26290,"LanguageNameId":5290,"LineOfSight":5,"MaxCharge":0,"MeleeArmor":2,"MinRange":0,"PierceArmor":2,"Range":0,"RechargeRate":0,"ReloadTime":2.4,"Speed":1.35,"TrainTime":19,"Trait":0,"TraitPiece":0,"internal_name":"EKONNIK"},"1228":{"AccuracyPercent":100,"Armours":[{"Amount":1,"Class":4},{"Amount":0,"Class":8},{"Amount":2,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":9,"AttackDelaySeconds":0,"Attacks":[{"Amount":9,"Class":4},{"Amount":0,"Class":15},{"Amount":0,"Class":11},{"Amount":0,"Class":21},{"Amount":0,"Class":38},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":60,"Gold":40},"FrameDelay":0,"GarrisonCapacity":0,"HP":110,"ID":1228,"LanguageHelpId":26313,"LanguageNameId":5313,"LineOfSight":5,"MaxCharge":0,"MeleeArmor":1,"MinRange":0,"PierceArmor":2,"Range":0,"RechargeRate":0,"ReloadTime":1.9,"Speed":1.4,"TrainTime":17,"Trait":0,"TraitPiece":0,"internal_name":"KESHIK"},"1230":{"AccuracyPercent":100,"Armours":[{"Amount":1,"Class":4},{"Amount":0,"Class":8},{"Amount":3,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":11,"AttackDelaySeconds":0,"Attacks":[{"Amount":11,"Class":4},{"Amount":0,"Class":15},{"Amount":0,"Class":11},{"Amount":0,"Class":21},{"Amount":0,"Class":38},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":60,"Gold":40},"FrameDelay":0,"GarrisonCapacity":0,"HP":140,"ID":1230,"LanguageHelpId":26314,"LanguageNameId":5314,"LineOfSight":5,"MaxCharge":0,"MeleeArmor":1,"MinRange":0,"PierceArmor":3,"Range":0,"RechargeRate":0,"ReloadTime":1.9,"Speed":1.4,"TrainTime":15,"Trait":0,"TraitPiece":0,"internal_name":"EKESHIK"},"1231":{"AccuracyPercent":90,"Armours":[{"Amount":0,"Class":28},{"Amount":0,"Class":4},{"Amount":0,"Class":15},{"Amount":0,"Class":8},{"Amount":0,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":4,"AttackDelaySeconds":0.49,"Attacks":[{"Amount":1,"Class":27},{"Amount":0,"Class":21},{"Amount":4,"Class":3},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":35,"Wood":60},"FrameDelay":21,"GarrisonCapacity":0,"HP":40,"ID":1231,"LanguageHelpId":26315,"LanguageNameId":5315,"LineOfSight":6,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":0,"Range":4,"RechargeRate":0,"ReloadTime":2.2,"Speed":1.4,"TrainTime":20,"Trait":0,"TraitPiece":0,"internal_name":"KIPCHAK"},"1233":{"AccuracyPercent":90,"Armours":[{"Amount":0,"Class":28},{"Amount":0,"Class":4},{"Amount":0,"Class":15},{"Amount":0,"Class":8},{"Amount":0,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":5,"AttackDelaySeconds":0.49,"Attacks":[{"Amount":1,"Class":27},{"Amount":0,"Class":21},{"Amount":5,"Class":3},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":35,"Wood":60},"FrameDelay":21,"GarrisonCapacity":0,"HP":45,"ID":1233,"LanguageHelpId":26327,"LanguageNameId":5327,"LineOfSight":6,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":0,"Range":4,"RechargeRate":0,"ReloadTime":2.2,"Speed":1.4,"TrainTime":20,"Trait":0,"TraitPiece":0,"internal_name":"EKIPCHAK"},"1234":{"AccuracyPercent":100,"Armours":[{"Amount":1,"Class":4},{"Amount":0,"Class":8},{"Amount":1,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":13,"AttackDelaySeconds":0,"Attacks":[{"Amount":0,"Class":15},{"Amount":0,"Class":11},{"Amount":0,"Class":21},{"Amount":13,"Class":4},{"Amount":0,"Class":38},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":70,"Gold":50},"FrameDelay":0,"GarrisonCapacity":0,"HP":100,"ID":1234,"LanguageHelpId":26328,"LanguageNameId":5328,"LineOfSight":5,"MaxCharge":0,"MeleeArmor":1,"MinRange":0,"PierceArmor":1,"Range":0,"RechargeRate":0,"ReloadTime":1.9,"Speed":1.4,"TrainTime":20,"Trait":0,"TraitPiece":0,"internal_name":"LEITIS"},"1236":{"AccuracyPercent":100,"Armours":[{"Amount":2,"Class":4},{"Amount":0,"Class":8},{"Amount":1,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":16,"AttackDelaySeconds":0,"Attacks":[{"Amount":0,"Class":15},{"Amount":0,"Class":11},{"Amount":0,"Class":21},{"Amount":16,"Class":4},{"Amount":0,"Class":38},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":70,"Gold":50},"FrameDelay":0,"GarrisonCapacity":0,"HP":130,"ID":1236,"LanguageHelpId":26329,"LanguageNameId":5329,"LineOfSight":5,"MaxCharge":0,"MeleeArmor":2,"MinRange":0,"PierceArmor":1,"Range":0,"RechargeRate":0,"ReloadTime":1.9,"Speed":1.4,"TrainTime":18,"Trait":0,"TraitPiece":0,"internal_name":"ELEITIS"},"1252":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":1},{"Amount":2,"Class":4},{"Amount":1,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":12,"AttackDelaySeconds":0,"Attacks":[{"Amount":0,"Class":29},{"Amount":4,"Class":21},{"Amount":12,"Class":4},{"Amount":0,"Class":8},{"Amount":0,"Class":30}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":0,"Gold":0},"FrameDelay":0,"GarrisonCapacity":0,"HP":45,"ID":1252,"LanguageHelpId":42057,"LanguageNameId":21057,"LineOfSight":3,"MaxCharge":0,"MeleeArmor":2,"MinRange":0,"PierceArmor":1,"Range":0,"RechargeRate":0,"ReloadTime":2.4,"Speed":0.9,"TrainTime":19,"Trait":0,"TraitPiece":0,"internal_name":"KONNIK_INF"},"1253":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":1},{"Amount":2,"Class":4},{"Amount":2,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":13,"AttackDelaySeconds":0,"Attacks":[{"Amount":0,"Class":29},{"Amount":4,"Class":21},{"Amount":13,"Class":4},{"Amount":0,"Class":8},{"Amount":0,"Class":30}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":0,"Gold":0},"FrameDelay":0,"GarrisonCapacity":0,"HP":50,"ID":1253,"LanguageHelpId":42058,"LanguageNameId":21058,"LineOfSight":3,"MaxCharge":0,"MeleeArmor":2,"MinRange":0,"PierceArmor":2,"Range":0,"RechargeRate":0,"ReloadTime":2.4,"Speed":0.9,"TrainTime":19,"Trait":0,"TraitPiece":0,"internal_name":"EKONNIK_INF"},"1254":{"AccuracyPercent":100,"Armours":[{"Amount":2,"Class":4},{"Amount":0,"Class":8},{"Amount":1,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":12,"AttackDelaySeconds":0,"Attacks":[{"Amount":12,"Class":4},{"Amount":0,"Class":15},{"Amount":0,"Class":11},{"Amount":0,"Class":21},{"Amount":0,"Class":38},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":60,"Gold":70},"FrameDelay":0,"GarrisonCapacity":0,"HP":100,"ID":1254,"LanguageHelpId":26288,"LanguageNameId":5288,"LineOfSight":5,"MaxCharge":0,"MeleeArmor":2,"MinRange":0,"PierceArmor":1,"Range":0,"RechargeRate":0,"ReloadTime":2.4,"Speed":1.35,"TrainTime":19,"Trait":0,"TraitPiece":0,"internal_name":"KONNIK"},"1255":{"AccuracyPercent":100,"Armours":[{"Amount":2,"Class":4},{"Amount":0,"Class":8},{"Amount":2,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":14,"AttackDelaySeconds":0,"Attacks":[{"Amount":14,"Class":4},{"Amount":0,"Class":15},{"Amount":0,"Class":11},{"Amount":0,"Class":21},{"Amount":0,"Class":38},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":60,"Gold":70},"FrameDelay":0,"GarrisonCapacity":0,"HP":120,"ID":1255,"LanguageHelpId":26290,"LanguageNameId":5290,"LineOfSight":5,"MaxCharge":0,"MeleeArmor":2,"MinRange":0,"PierceArmor":2,"Range":0,"RechargeRate":0,"ReloadTime":2.4,"Speed":1.35,"TrainTime":19,"Trait":0,"TraitPiece":0,"internal_name":"EKONNIK"},"1258":{"AccuracyPercent":100,"Armours":[{"Amount":-3,"Class":4},{"Amount":180,"Class":3},{"Amount":0,"Class":17},{"Amount":0,"Class":20},{"Amount":0,"Class":31}],"Attack":2,"AttackDelaySeconds":0,"Attacks":[{"Amount":125,"Class":11},{"Amount":2,"Class":4},{"Amount":40,"Class":20}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":75,"Wood":160},"FrameDelay":0,"GarrisonCapacity":6,"HP":175,"ID":1258,"LanguageHelpId":26094,"LanguageNameId":5094,"LineOfSight":3,"MaxCharge":0,"MeleeArmor":-3,"MinRange":0,"PierceArmor":180,"Range":0,"RechargeRate":0,"ReloadTime":5,"Speed":0.6,"TrainTime":36,"Trait":1,"TraitPiece":0,"internal_name":"BTRAM"},"1263":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":4},{"Amount":0,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":30},{"Amount":0,"Class":31},{"Amount":-3,"Class":39}],"Attack":20,"AttackDelaySeconds":0,"Attacks":[{"Amount":200,"Class":11},{"Amount":20,"Class":4},{"Amount":50,"Class":8},{"Amount":50,"Class":30},{"Amount":130,"Class":5},{"Amount":25,"Class":20},{"Amount":0,"Class":21}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":75,"Gold":30},"FrameDelay":0,"GarrisonCapacity":0,"HP":55,"ID":1263,"LanguageHelpId":26375,"LanguageNameId":5375,"LineOfSight":4,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":0,"Range":0,"RechargeRate":0,"ReloadTime":5,"Speed":1.3,"TrainTime":20,"Trait":0,"TraitPiece":0,"internal_name":"FCAMEL"},"1370":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":4},{"Amount":1,"Class":3},{"Amount":0,"Class":8},{"Amount":0,"Class":31}],"Attack":9,"AttackDelaySeconds":0,"Attacks":[{"Amount":9,"Class":4},{"Amount":0,"Class":20},{"Amount":0,"Class":11},{"Amount":0,"Class":21},{"Amount":0,"Class":38},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":70,"Gold":40},"FrameDelay":0,"GarrisonCapacity":0,"HP":60,"ID":1370,"LanguageHelpId":26009,"LanguageNameId":5009,"LineOfSight":5,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":1,"Range":1,"RechargeRate":0,"ReloadTime":2,"Speed":1.45,"TrainTime":24,"Trait":0,"TraitPiece":0,"internal_name":"SLANCER"},"1372":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":4},{"Amount":2,"Class":3},{"Amount":0,"Class":8},{"Amount":0,"Class":31}],"Attack":11,"AttackDelaySeconds":0,"Attacks":[{"Amount":11,"Class":4},{"Amount":0,"Class":20},{"Amount":0,"Class":11},{"Amount":0,"Class":21},{"Amount":0,"Class":38},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":70,"Gold":40},"FrameDelay":0,"GarrisonCapacity":0,"HP":80,"ID":1372,"LanguageHelpId":26010,"LanguageNameId":5010,"LineOfSight":5,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":2,"Range":1,"RechargeRate":0,"ReloadTime":2,"Speed":1.45,"TrainTime":20,"Trait":0,"TraitPiece":0,"internal_name":"ESLANCER"},"1570":{"AccuracyPercent":100,"Armours":[{"Amount":2,"Class":4},{"Amount":0,"Class":8},{"Amount":2,"Class":3},{"Amount":0,"Class":31}],"Attack":10,"AttackDelaySeconds":0,"Attacks":[{"Amount":10,"Class":4},{"Amount":0,"Class":15},{"Amount":0,"Class":11},{"Amount":0,"Class":21},{"Amount":0,"Class":38},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":60,"Gold":75},"FrameDelay":0,"GarrisonCapacity":0,"HP":100,"ID":1570,"LanguageHelpId":26040,"LanguageNameId":5040,"LineOfSight":4,"MaxCharge":0,"MeleeArmor":2,"MinRange":0,"PierceArmor":2,"Range":0,"RechargeRate":0,"ReloadTime":1.8,"Speed":1.35,"TrainTime":30,"Trait":0,"TraitPiece":0,"internal_name":"AZTRAIDER"},"1655":{"AccuracyPercent":100,"Armours":[{"Amount":2,"Class":4},{"Amount":0,"Class":8},{"Amount":2,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":8,"AttackDelaySeconds":0,"Attacks":[{"Amount":0,"Class":15},{"Amount":0,"Class":11},{"Amount":0,"Class":21},{"Amount":8,"Class":4},{"Amount":0,"Class":38},{"Amount":-3,"Class":39}],"ChargeEvent":1,"ChargeType":1,"Cost":{"Food":55,"Gold":55},"FrameDelay":0,"GarrisonCapacity":0,"HP":115,"ID":1655,"LanguageHelpId":26534,"LanguageNameId":5534,"LineOfSight":5,"MaxCharge":20,"MeleeArmor":2,"MinRange":0,"PierceArmor":2,"Range":0,"RechargeDuration":40,"RechargeRate":0.5,"ReloadTime":1.9,"Speed":1.35,"TrainTime":15,"Trait":0,"TraitPiece":0,"internal_name":"COUSTILLIER"},"1657":{"AccuracyPercent":100,"Armours":[{"Amount":2,"Class":4},{"Amount":0,"Class":8},{"Amount":2,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":11,"AttackDelaySeconds":0,"Attacks":[{"Amount":0,"Class":15},{"Amount":0,"Class":11},{"Amount":0,"Class":21},{"Amount":11,"Class":4},{"Amount":0,"Class":38},{"Amount":-3,"Class":39}],"ChargeEvent":1,"ChargeType":1,"Cost":{"Food":55,"Gold":55},"FrameDelay":0,"GarrisonCapacity":0,"HP":145,"ID":1657,"LanguageHelpId":26536,"LanguageNameId":5536,"LineOfSight":5,"MaxCharge":25,"MeleeArmor":2,"MinRange":0,"PierceArmor":2,"Range":0,"RechargeDuration":40,"RechargeRate":0.625,"ReloadTime":1.9,"Speed":1.35,"TrainTime":14,"Trait":0,"TraitPiece":0,"internal_name":"ECOUSTILLIER"},"1658":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":1},{"Amount":2,"Class":4},{"Amount":2,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":5,"AttackDelaySeconds":0,"Attacks":[{"Amount":2,"Class":29},{"Amount":2,"Class":21},{"Amount":5,"Class":4},{"Amount":0,"Class":8},{"Amount":0,"Class":30}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":50,"Gold":35},"FrameDelay":0,"GarrisonCapacity":0,"HP":50,"ID":1658,"LanguageHelpId":26538,"LanguageNameId":5538,"LineOfSight":3,"MaxCharge":0,"MeleeArmor":2,"MinRange":0,"PierceArmor":2,"Range":0,"RechargeRate":0,"ReloadTime":2,"Speed":0.9,"TrainTime":12,"Trait":4,"TraitPiece":1665,"internal_name":"SERJEANT"},"1659":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":1},{"Amount":4,"Class":4},{"Amount":4,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":11,"AttackDelaySeconds":0,"Attacks":[{"Amount":3,"Class":29},{"Amount":3,"Class":21},{"Amount":11,"Class":4},{"Amount":0,"Class":8},{"Amount":0,"Class":30}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":50,"Gold":35},"FrameDelay":0,"GarrisonCapacity":0,"HP":85,"ID":1659,"LanguageHelpId":26540,"LanguageNameId":5540,"LineOfSight":5,"MaxCharge":0,"MeleeArmor":4,"MinRange":0,"PierceArmor":4,"Range":0,"RechargeRate":0,"ReloadTime":2,"Speed":0.9,"TrainTime":12,"Trait":4,"TraitPiece":1665,"internal_name":"ESERJEANT"},"1660":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":1},{"Amount":2,"Class":4},{"Amount":2,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":5,"AttackDelaySeconds":0,"Attacks":[{"Amount":2,"Class":29},{"Amount":2,"Class":21},{"Amount":5,"Class":4},{"Amount":0,"Class":8},{"Amount":0,"Class":30}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":50,"Gold":35},"FrameDelay":0,"GarrisonCapacity":0,"HP":50,"ID":1660,"LanguageHelpId":26538,"LanguageNameId":5538,"LineOfSight":3,"MaxCharge":0,"MeleeArmor":2,"MinRange":0,"PierceArmor":2,"Range":0,"RechargeRate":0,"ReloadTime":2,"Speed":0.9,"TrainTime":16,"Trait":4,"TraitPiece":1665,"internal_name":"DSERJEANT"},"1661":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":1},{"Amount":4,"Class":4},{"Amount":4,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":11,"AttackDelaySeconds":0,"Attacks":[{"Amount":3,"Class":29},{"Amount":3,"Class":21},{"Amount":11,"Class":4},{"Amount":0,"Class":8},{"Amount":0,"Class":30}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":50,"Gold":35},"FrameDelay":0,"GarrisonCapacity":0,"HP":85,"ID":1661,"LanguageHelpId":26540,"LanguageNameId":5540,"LineOfSight":5,"MaxCharge":0,"MeleeArmor":4,"MinRange":0,"PierceArmor":4,"Range":0,"RechargeRate":0,"ReloadTime":2,"Speed":0.9,"TrainTime":12,"Trait":4,"TraitPiece":1665,"internal_name":"EDSERJEANT"},"1699":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":1},{"Amount":1,"Class":4},{"Amount":0,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":11,"AttackDelaySeconds":0,"Attacks":[{"Amount":2,"Class":29},{"Amount":0,"Class":21},{"Amount":11,"Class":4},{"Amount":8,"Class":8},{"Amount":6,"Class":16},{"Amount":6,"Class":30},{"Amount":8,"Class":5},{"Amount":6,"Class":34}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":50,"Gold":15},"FrameDelay":0,"GarrisonCapacity":0,"HP":60,"ID":1699,"LanguageHelpId":26542,"LanguageNameId":5542,"LineOfSight":5,"MaxCharge":0,"MeleeArmor":1,"MinRange":0,"PierceArmor":0,"Range":0,"RechargeRate":0,"ReloadTime":2,"Speed":0.9,"TrainTime":14,"Trait":0,"TraitPiece":0,"internal_name":"FLEMISHPIKEMAN2"},"1701":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":1},{"Amount":2,"Class":4},{"Amount":2,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":8,"AttackDelaySeconds":0,"Attacks":[{"Amount":2,"Class":29},{"Amount":4,"Class":21},{"Amount":8,"Class":4},{"Amount":0,"Class":8},{"Amount":0,"Class":30}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":55,"Gold":20},"FrameDelay":0,"GarrisonCapacity":0,"HP":80,"ID":1701,"LanguageHelpId":26558,"LanguageNameId":5558,"LineOfSight":3,"MaxCharge":0,"MeleeArmor":2,"MinRange":0,"PierceArmor":2,"Range":0,"RechargeRate":0,"ReloadTime":2,"Speed":0.9,"TrainTime":12,"Trait":0,"TraitPiece":0,"internal_name":"OBUCH"},"1703":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":1},{"Amount":2,"Class":4},{"Amount":2,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":10,"AttackDelaySeconds":0,"Attacks":[{"Amount":3,"Class":29},{"Amount":6,"Class":21},{"Amount":10,"Class":4},{"Amount":0,"Class":8},{"Amount":0,"Class":30}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":55,"Gold":20},"FrameDelay":0,"GarrisonCapacity":0,"HP":95,"ID":1703,"LanguageHelpId":26559,"LanguageNameId":5559,"LineOfSight":3,"MaxCharge":0,"MeleeArmor":2,"MinRange":0,"PierceArmor":2,"Range":0,"RechargeRate":0,"ReloadTime":2,"Speed":0.9,"TrainTime":12,"Trait":0,"TraitPiece":0,"internal_name":"EOBUCH"},"1704":{"AccuracyPercent":85,"Armours":[{"Amount":0,"Class":4},{"Amount":0,"Class":20},{"Amount":7,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":23},{"Amount":0,"Class":31},{"Amount":0,"Class":37}],"Attack":11,"AttackDelaySeconds":0.6222222222222222,"Attacks":[{"Amount":1,"Class":11},{"Amount":11,"Class":3},{"Amount":3,"Class":17}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":70,"Wood":110},"FrameDelay":20,"GarrisonCapacity":0,"HP":180,"ID":1704,"LanguageHelpId":26561,"LanguageNameId":5561,"LineOfSight":8,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":7,"Range":6,"RechargeRate":0,"ReloadTime":3.45,"Speed":0.8,"TrainTime":21,"Trait":0,"TraitPiece":0,"internal_name":"HUSSITEWAGON"},"1706":{"AccuracyPercent":90,"Armours":[{"Amount":1,"Class":4},{"Amount":0,"Class":20},{"Amount":10,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":23},{"Amount":0,"Class":31},{"Amount":0,"Class":37}],"Attack":13,"AttackDelaySeconds":0.6222222222222222,"Attacks":[{"Amount":2,"Class":11},{"Amount":13,"Class":3},{"Amount":3,"Class":17}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":70,"Wood":110},"FrameDelay":20,"GarrisonCapacity":0,"HP":230,"ID":1706,"LanguageHelpId":26563,"LanguageNameId":5563,"LineOfSight":8,"MaxCharge":0,"MeleeArmor":1,"MinRange":0,"PierceArmor":10,"Range":6,"RechargeRate":0,"ReloadTime":3.45,"Speed":0.8,"TrainTime":21,"Trait":0,"TraitPiece":0,"internal_name":"EHUSSITEWAGON"},"1707":{"AccuracyPercent":100,"Armours":[{"Amount":1,"Class":4},{"Amount":0,"Class":8},{"Amount":2,"Class":3},{"Amount":0,"Class":31}],"Attack":9,"AttackDelaySeconds":0,"Attacks":[{"Amount":14,"Class":25},{"Amount":9,"Class":4},{"Amount":0,"Class":11},{"Amount":0,"Class":21},{"Amount":0,"Class":15},{"Amount":4,"Class":23},{"Amount":0,"Class":38},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":80},"FrameDelay":0,"GarrisonCapacity":0,"HP":80,"ID":1707,"LanguageHelpId":26577,"LanguageNameId":5577,"LineOfSight":4,"MaxCharge":0,"MeleeArmor":1,"MinRange":0,"PierceArmor":2,"Range":0,"RechargeRate":0,"ReloadTime":1.9,"Speed":1.5,"TrainTime":30,"Trait":16,"TraitPiece":0,"internal_name":"WINGEDHUSSAR"},"1709":{"AccuracyPercent":100,"Armours":[{"Amount":2,"Class":4},{"Amount":6,"Class":3},{"Amount":0,"Class":20},{"Amount":0,"Class":23},{"Amount":0,"Class":31}],"Attack":50,"AttackDelaySeconds":0.21,"Attacks":[{"Amount":250,"Class":11},{"Amount":50,"Class":16},{"Amount":50,"Class":4},{"Amount":20,"Class":20},{"Amount":50,"Class":13},{"Amount":50,"Class":34},{"Amount":50,"Class":37}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":225,"Wood":225},"FrameDelay":7,"GarrisonCapacity":0,"HP":90,"ID":1709,"LanguageHelpId":26579,"LanguageNameId":5579,"LineOfSight":14,"MaxCharge":0,"MeleeArmor":2,"MinRange":5,"PierceArmor":6,"Range":12,"RechargeRate":0,"ReloadTime":6.5,"Speed":0.7,"TrainTime":56,"Trait":0,"TraitPiece":0,"internal_name":"HOUFNICE"},"1735":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":1},{"Amount":1,"Class":4},{"Amount":0,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":8,"AttackDelaySeconds":0,"Attacks":[{"Amount":8,"Class":4},{"Amount":2,"Class":29},{"Amount":1,"Class":21},{"Amount":0,"Class":8},{"Amount":0,"Class":30}],"ChargeEvent":1,"ChargeType":3,"Cost":{"Food":65,"Gold":20},"FrameDelay":0,"GarrisonCapacity":0,"HP":55,"ID":1735,"LanguageHelpId":26403,"LanguageNameId":5403,"LineOfSight":3,"MaxCharge":12,"MeleeArmor":1,"MinRange":0,"PierceArmor":0,"Range":0,"RechargeDuration":24,"RechargeRate":0.5,"ReloadTime":2,"Speed":1.05,"TrainTime":9,"Trait":0,"TraitPiece":0,"internal_name":"URUMI"},"1737":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":1},{"Amount":1,"Class":4},{"Amount":0,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":10,"AttackDelaySeconds":0,"Attacks":[{"Amount":10,"Class":4},{"Amount":3,"Class":29},{"Amount":2,"Class":21},{"Amount":0,"Class":8},{"Amount":0,"Class":30}],"ChargeEvent":1,"ChargeType":3,"Cost":{"Food":65,"Gold":20},"FrameDelay":0,"GarrisonCapacity":0,"HP":65,"ID":1737,"LanguageHelpId":26413,"LanguageNameId":5413,"LineOfSight":3,"MaxCharge":15,"MeleeArmor":1,"MinRange":0,"PierceArmor":0,"Range":0,"RechargeDuration":20,"RechargeRate":0.75,"ReloadTime":2,"Speed":1.05,"TrainTime":9,"Trait":0,"TraitPiece":0,"internal_name":"EURUMI"},"1738":{"AccuracyPercent":100,"Armours":[{"Amount":2,"Class":4},{"Amount":0,"Class":8},{"Amount":1,"Class":3},{"Amount":0,"Class":15},{"Amount":0,"Class":19},{"Amount":0,"Class":28},{"Amount":0,"Class":31}],"Attack":10,"AttackDelaySeconds":0,"Attacks":[{"Amount":10,"Class":4},{"Amount":0,"Class":15},{"Amount":0,"Class":11},{"Amount":0,"Class":21},{"Amount":0,"Class":27},{"Amount":0,"Class":38},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":60,"Wood":60},"FrameDelay":0,"GarrisonCapacity":0,"HP":105,"ID":1738,"LanguageHelpId":42096,"LanguageNameId":21096,"LineOfSight":6,"MaxCharge":0,"MeleeArmor":2,"MinRange":0,"PierceArmor":1,"Range":0,"RechargeRate":0,"ReloadTime":2,"Speed":1.3,"TrainTime":18,"Trait":8,"TraitPiece":1759,"internal_name":"RATHA"},"1740":{"AccuracyPercent":100,"Armours":[{"Amount":2,"Class":4},{"Amount":0,"Class":8},{"Amount":1,"Class":3},{"Amount":0,"Class":15},{"Amount":0,"Class":19},{"Amount":0,"Class":28},{"Amount":0,"Class":31}],"Attack":12,"AttackDelaySeconds":0,"Attacks":[{"Amount":12,"Class":4},{"Amount":0,"Class":15},{"Amount":0,"Class":11},{"Amount":0,"Class":21},{"Amount":0,"Class":27},{"Amount":0,"Class":38},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":60,"Wood":60},"FrameDelay":0,"GarrisonCapacity":0,"HP":115,"ID":1740,"LanguageHelpId":42097,"LanguageNameId":21097,"LineOfSight":6,"MaxCharge":0,"MeleeArmor":2,"MinRange":0,"PierceArmor":1,"Range":0,"RechargeRate":0,"ReloadTime":2,"Speed":1.3,"TrainTime":18,"Trait":8,"TraitPiece":1761,"internal_name":"ERATHA"},"1741":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":1},{"Amount":1,"Class":4},{"Amount":0,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":3,"AttackDelaySeconds":0.8,"Attacks":[{"Amount":1,"Class":29},{"Amount":1,"Class":21},{"Amount":3,"Class":4},{"Amount":0,"Class":1},{"Amount":0,"Class":32},{"Amount":0,"Class":8},{"Amount":0,"Class":30}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":65,"Gold":30},"FrameDelay":15,"GarrisonCapacity":0,"HP":40,"ID":1741,"LanguageHelpId":26421,"LanguageNameId":5421,"LineOfSight":7,"MaxCharge":0,"MeleeArmor":1,"MinRange":0,"PierceArmor":0,"Range":5,"RechargeRate":0,"ReloadTime":2,"Speed":1.15,"TrainTime":15,"Trait":0,"TraitPiece":0,"internal_name":"CHAKRAM"},"1743":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":1},{"Amount":1,"Class":4},{"Amount":0,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":4,"AttackDelaySeconds":0.8,"Attacks":[{"Amount":2,"Class":29},{"Amount":2,"Class":21},{"Amount":4,"Class":4},{"Amount":1,"Class":1},{"Amount":1,"Class":32},{"Amount":0,"Class":8},{"Amount":0,"Class":30}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":65,"Gold":30},"FrameDelay":15,"GarrisonCapacity":0,"HP":50,"ID":1743,"LanguageHelpId":26427,"LanguageNameId":5427,"LineOfSight":8,"MaxCharge":0,"MeleeArmor":1,"MinRange":0,"PierceArmor":0,"Range":6,"RechargeRate":0,"ReloadTime":2,"Speed":1.15,"TrainTime":15,"Trait":0,"TraitPiece":0,"internal_name":"ECHAKRAM"},"1744":{"AccuracyPercent":100,"Armours":[{"Amount":17,"Class":5},{"Amount":-2,"Class":4},{"Amount":7,"Class":8},{"Amount":0,"Class":20},{"Amount":0,"Class":17},{"Amount":140,"Class":3},{"Amount":0,"Class":31}],"Attack":4,"AttackDelaySeconds":0,"Attacks":[{"Amount":75,"Class":11},{"Amount":4,"Class":4},{"Amount":25,"Class":20},{"Amount":0,"Class":21},{"Amount":0,"Class":38},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":120,"Gold":95},"FrameDelay":0,"GarrisonCapacity":0,"HP":180,"ID":1744,"LanguageHelpId":26428,"LanguageNameId":5428,"LineOfSight":4,"MaxCharge":0,"MeleeArmor":-2,"MinRange":0,"PierceArmor":140,"Range":0,"RechargeRate":0,"ReloadTime":3,"Speed":0.6,"TrainTime":36,"Trait":0,"TraitPiece":0,"internal_name":"ARELE"},"1746":{"AccuracyPercent":100,"Armours":[{"Amount":20,"Class":5},{"Amount":-2,"Class":4},{"Amount":10,"Class":8},{"Amount":0,"Class":20},{"Amount":0,"Class":17},{"Amount":150,"Class":3},{"Amount":0,"Class":31}],"Attack":4,"AttackDelaySeconds":0,"Attacks":[{"Amount":105,"Class":11},{"Amount":4,"Class":4},{"Amount":35,"Class":20},{"Amount":0,"Class":21},{"Amount":0,"Class":38},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":120,"Gold":95},"FrameDelay":0,"GarrisonCapacity":0,"HP":220,"ID":1746,"LanguageHelpId":26430,"LanguageNameId":5430,"LineOfSight":4,"MaxCharge":0,"MeleeArmor":-2,"MinRange":0,"PierceArmor":150,"Range":0,"RechargeRate":0,"ReloadTime":3,"Speed":0.6,"TrainTime":36,"Trait":0,"TraitPiece":0,"internal_name":"EARELE"},"1747":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":1},{"Amount":0,"Class":4},{"Amount":3,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":9,"AttackDelaySeconds":0,"Attacks":[{"Amount":9,"Class":4},{"Amount":5,"Class":15},{"Amount":2,"Class":21},{"Amount":2,"Class":29},{"Amount":0,"Class":8},{"Amount":0,"Class":30}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":30,"Gold":45},"FrameDelay":0,"GarrisonCapacity":0,"HP":60,"ID":1747,"LanguageHelpId":26431,"LanguageNameId":5431,"LineOfSight":6,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":3,"Range":0,"RechargeRate":0,"ReloadTime":2,"Speed":1.15,"TrainTime":12,"Trait":0,"TraitPiece":0,"internal_name":"GHULAM"},"1749":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":1},{"Amount":0,"Class":4},{"Amount":6,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":11,"AttackDelaySeconds":0,"Attacks":[{"Amount":11,"Class":4},{"Amount":6,"Class":15},{"Amount":2,"Class":21},{"Amount":2,"Class":29},{"Amount":0,"Class":8},{"Amount":0,"Class":30}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":30,"Gold":45},"FrameDelay":0,"GarrisonCapacity":0,"HP":70,"ID":1749,"LanguageHelpId":26432,"LanguageNameId":5432,"LineOfSight":6,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":6,"Range":0,"RechargeRate":0,"ReloadTime":2,"Speed":1.2,"TrainTime":12,"Trait":0,"TraitPiece":0,"internal_name":"EGHULAM"},"1750":{"AccuracyPercent":100,"Armours":[{"Amount":8,"Class":16},{"Amount":0,"Class":2},{"Amount":2,"Class":4},{"Amount":10,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":9,"AttackDelaySeconds":0,"Attacks":[{"Amount":9,"Class":11},{"Amount":9,"Class":16},{"Amount":9,"Class":3},{"Amount":4,"Class":17},{"Amount":9,"Class":34}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":60,"Wood":180},"FrameDelay":0,"GarrisonCapacity":0,"HP":250,"ID":1750,"LanguageHelpId":26435,"LanguageNameId":5435,"LineOfSight":8,"MaxCharge":0,"MeleeArmor":2,"MinRange":0,"PierceArmor":10,"Range":6,"RechargeRate":0,"ReloadTime":3.45,"Speed":1.3,"TrainTime":40,"Trait":2,"TraitPiece":0,"internal_name":"THIRISADAI"},"1751":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":4},{"Amount":1,"Class":3},{"Amount":0,"Class":8},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":8,"AttackDelaySeconds":0,"Attacks":[{"Amount":8,"Class":4},{"Amount":0,"Class":15},{"Amount":0,"Class":11},{"Amount":0,"Class":21},{"Amount":0,"Class":38},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":4,"Cost":{"Food":70,"Gold":30},"FrameDelay":0,"GarrisonCapacity":0,"HP":55,"ID":1751,"LanguageHelpId":26437,"LanguageNameId":5437,"LineOfSight":5,"MaxCharge":5,"MeleeArmor":0,"MinRange":0,"PierceArmor":1,"Range":0,"RechargeDuration":20,"RechargeRate":0.25,"ReloadTime":2,"Speed":1.6,"TrainTime":20,"Trait":0,"TraitPiece":0,"internal_name":"SHRIVAMSHA"},"1753":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":4},{"Amount":1,"Class":3},{"Amount":0,"Class":8},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":11,"AttackDelaySeconds":0,"Attacks":[{"Amount":11,"Class":4},{"Amount":0,"Class":15},{"Amount":0,"Class":11},{"Amount":0,"Class":21},{"Amount":0,"Class":38},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":4,"Cost":{"Food":70,"Gold":30},"FrameDelay":0,"GarrisonCapacity":0,"HP":70,"ID":1753,"LanguageHelpId":26438,"LanguageNameId":5438,"LineOfSight":6,"MaxCharge":7,"MeleeArmor":0,"MinRange":0,"PierceArmor":1,"Range":0,"RechargeDuration":20,"RechargeRate":0.35,"ReloadTime":1.9,"Speed":1.6,"TrainTime":20,"Trait":0,"TraitPiece":0,"internal_name":"ESHRIVAMSHA"},"1755":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":4},{"Amount":0,"Class":3},{"Amount":0,"Class":30},{"Amount":0,"Class":31},{"Amount":-3,"Class":39}],"Attack":2,"AttackDelaySeconds":0,"Attacks":[{"Amount":2,"Class":4},{"Amount":0,"Class":8},{"Amount":0,"Class":16},{"Amount":0,"Class":11},{"Amount":0,"Class":30},{"Amount":0,"Class":21},{"Amount":0,"Class":34},{"Amount":0,"Class":38},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":55,"Gold":60},"FrameDelay":0,"GarrisonCapacity":1,"HP":70,"ID":1755,"LanguageHelpId":26441,"LanguageNameId":5441,"LineOfSight":4,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":0,"Range":0,"RechargeRate":0,"ReloadTime":2,"Speed":1.2,"TrainTime":48,"Trait":0,"TraitPiece":0,"internal_name":"CAMELSC"},"1759":{"AccuracyPercent":80,"Armours":[{"Amount":2,"Class":4},{"Amount":0,"Class":8},{"Amount":1,"Class":3},{"Amount":0,"Class":15},{"Amount":0,"Class":19},{"Amount":0,"Class":28},{"Amount":0,"Class":31}],"Attack":5,"AttackDelaySeconds":0.6206666666666667,"Attacks":[{"Amount":5,"Class":3},{"Amount":0,"Class":15},{"Amount":0,"Class":11},{"Amount":0,"Class":21},{"Amount":0,"Class":27},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":60,"Wood":60},"FrameDelay":14,"GarrisonCapacity":0,"HP":105,"ID":1759,"LanguageHelpId":42104,"LanguageNameId":21104,"LineOfSight":6,"MaxCharge":0,"MeleeArmor":2,"MinRange":0,"PierceArmor":1,"Range":4,"RechargeRate":0,"ReloadTime":2,"Speed":1.3,"TrainTime":18,"Trait":8,"TraitPiece":1738,"internal_name":"RATHA2"},"1761":{"AccuracyPercent":90,"Armours":[{"Amount":2,"Class":4},{"Amount":0,"Class":8},{"Amount":1,"Class":3},{"Amount":0,"Class":15},{"Amount":0,"Class":19},{"Amount":0,"Class":28},{"Amount":0,"Class":31}],"Attack":6,"AttackDelaySeconds":0.6206666666666667,"Attacks":[{"Amount":6,"Class":3},{"Amount":0,"Class":15},{"Amount":0,"Class":11},{"Amount":0,"Class":21},{"Amount":0,"Class":27},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":60,"Wood":60},"FrameDelay":14,"GarrisonCapacity":0,"HP":115,"ID":1761,"LanguageHelpId":42105,"LanguageNameId":21105,"LineOfSight":6,"MaxCharge":0,"MeleeArmor":2,"MinRange":0,"PierceArmor":1,"Range":4,"RechargeRate":0,"ReloadTime":2,"Speed":1.3,"TrainTime":18,"Trait":8,"TraitPiece":1740,"internal_name":"ERATHA2"},"1786":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":27},{"Amount":0,"Class":1},{"Amount":0,"Class":4},{"Amount":0,"Class":3},{"Amount":0,"Class":31}],"Attack":3,"AttackDelaySeconds":0,"Attacks":[{"Amount":1,"Class":29},{"Amount":1,"Class":21},{"Amount":15,"Class":5},{"Amount":3,"Class":4},{"Amount":15,"Class":8},{"Amount":9,"Class":16},{"Amount":12,"Class":30},{"Amount":4,"Class":35},{"Amount":9,"Class":34}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":35,"Wood":25},"FrameDelay":0,"GarrisonCapacity":0,"HP":45,"ID":1786,"LanguageHelpId":26078,"LanguageNameId":5078,"LineOfSight":4,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":0,"Range":0,"RechargeRate":0,"ReloadTime":3,"Speed":1,"TrainTime":22,"Trait":0,"TraitPiece":0,"internal_name":"DPKEMN"},"1787":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":27},{"Amount":0,"Class":1},{"Amount":0,"Class":4},{"Amount":0,"Class":3},{"Amount":0,"Class":31}],"Attack":4,"AttackDelaySeconds":0,"Attacks":[{"Amount":1,"Class":29},{"Amount":1,"Class":21},{"Amount":25,"Class":5},{"Amount":4,"Class":4},{"Amount":22,"Class":8},{"Amount":16,"Class":16},{"Amount":18,"Class":30},{"Amount":11,"Class":35},{"Amount":16,"Class":34}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":35,"Wood":25},"FrameDelay":0,"GarrisonCapacity":0,"HP":55,"ID":1787,"LanguageHelpId":26408,"LanguageNameId":5408,"LineOfSight":4,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":0,"Range":0,"RechargeRate":0,"ReloadTime":3,"Speed":1,"TrainTime":22,"Trait":0,"TraitPiece":0,"internal_name":"DISPKM"},"1788":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":27},{"Amount":0,"Class":1},{"Amount":0,"Class":4},{"Amount":0,"Class":3},{"Amount":0,"Class":31}],"Attack":6,"AttackDelaySeconds":0,"Attacks":[{"Amount":1,"Class":29},{"Amount":1,"Class":21},{"Amount":28,"Class":5},{"Amount":6,"Class":4},{"Amount":32,"Class":8},{"Amount":17,"Class":16},{"Amount":26,"Class":30},{"Amount":11,"Class":35},{"Amount":17,"Class":34}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":35,"Wood":25},"FrameDelay":0,"GarrisonCapacity":0,"HP":60,"ID":1788,"LanguageHelpId":26409,"LanguageNameId":5409,"LineOfSight":4,"MaxCharge":0,"MeleeArmor":0,"MinRange":0,"PierceArmor":0,"Range":0,"RechargeRate":0,"ReloadTime":3,"Speed":1,"TrainTime":22,"Trait":0,"TraitPiece":0,"internal_name":"DHLBDM"},"1790":{"AccuracyPercent":100,"Armours":[{"Amount":2,"Class":4},{"Amount":0,"Class":8},{"Amount":3,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":13,"AttackDelaySeconds":0,"Attacks":[{"Amount":13,"Class":4},{"Amount":0,"Class":15},{"Amount":0,"Class":11},{"Amount":0,"Class":38},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":75,"Gold":85},"FrameDelay":0,"GarrisonCapacity":0,"HP":110,"ID":1790,"LanguageHelpId":26052,"LanguageNameId":5052,"LineOfSight":4,"MaxCharge":0,"MeleeArmor":2,"MinRange":0,"PierceArmor":3,"Range":0,"RechargeRate":0,"ReloadTime":1.9,"Speed":1.35,"TrainTime":24,"Trait":0,"TraitPiece":0,"internal_name":"CENTURION"},"1792":{"AccuracyPercent":100,"Armours":[{"Amount":3,"Class":4},{"Amount":0,"Class":8},{"Amount":3,"Class":3},{"Amount":0,"Class":19},{"Amount":0,"Class":31}],"Attack":15,"AttackDelaySeconds":0,"Attacks":[{"Amount":15,"Class":4},{"Amount":0,"Class":15},{"Amount":0,"Class":11},{"Amount":0,"Class":38},{"Amount":-3,"Class":39}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":75,"Gold":85},"FrameDelay":0,"GarrisonCapacity":0,"HP":155,"ID":1792,"LanguageHelpId":26053,"LanguageNameId":5053,"LineOfSight":5,"MaxCharge":0,"MeleeArmor":3,"MinRange":0,"PierceArmor":3,"Range":0,"RechargeRate":0,"ReloadTime":1.9,"Speed":1.35,"TrainTime":24,"Trait":0,"TraitPiece":0,"internal_name":"ECENTURION"},"1793":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":1},{"Amount":2,"Class":4},{"Amount":2,"Class":3},{"Amount":0,"Class":31}],"Attack":12,"AttackDelaySeconds":0,"Attacks":[{"Amount":8,"Class":29},{"Amount":4,"Class":21},{"Amount":4,"Class":1},{"Amount":12,"Class":4},{"Amount":0,"Class":8},{"Amount":0,"Class":30},{"Amount":4,"Class":32}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Food":60,"Gold":20},"FrameDelay":0,"GarrisonCapacity":0,"HP":75,"ID":1793,"LanguageHelpId":26054,"LanguageNameId":5054,"LineOfSight":5,"MaxCharge":0,"MeleeArmor":2,"MinRange":0,"PierceArmor":2,"Range":0,"RechargeRate":0,"ReloadTime":2,"Speed":0.9,"TrainTime":21,"Trait":0,"TraitPiece":0,"internal_name":"LEGIONARY"},"1795":{"AccuracyPercent":100,"Armours":[{"Amount":0,"Class":16},{"Amount":1,"Class":4},{"Amount":6,"Class":3},{"Amount":0,"Class":31}],"Attack":50,"AttackDelaySeconds":0,"Attacks":[{"Amount":50,"Class":4},{"Amount":135,"Class":11},{"Amount":30,"Class":20}],"ChargeEvent":0,"ChargeType":0,"Cost":{"Gold":150,"Wood":175},"FrameDelay":0,"GarrisonCapacity":0,"HP":125,"ID":1795,"LanguageHelpId":26055,"LanguageNameId":5055,"LineOfSight":14,"MaxCharge":0,"MeleeArmor":1,"MinRange":3,"PierceArmor":6,"Range":12,"RechargeRate":0,"ReloadTime":8,"Speed":1.2,"TrainTime":50,"Trait":2,"TraitPiece":0,"internal_name":"DROMON"}}},"tech_tree_strings":{"Age of Empires II":"1001","Building":"300084","Civilization":"9681","Key":"300081","Technology":"300085","Technology Tree":"9799","Unique Unit":"300082","Unit":"300083","mode":"1"},"techtrees":{"Aztecs":{"buildings":[12,45,49,50,68,70,72,79,82,84,87,103,104,109,117,155,199,209,234,276,487,562,584,598,621,792],"monkPrefix":"meso_","techs":[8,12,13,14,17,22,23,45,47,48,54,55,65,67,68,74,75,76,77,93,101,102,103,140,182,194,199,200,201,202,203,211,212,213,215,230,231,233,249,252,278,279,280,315,316,319,321,322,373,374,375,377,380,408,438,439,441,602,608,716,875],"unique":{"castleAgeUniqueTech":460,"castleAgeUniqueUnit":725,"imperialAgeUniqueTech":24,"imperialAgeUniqueUnit":726},"units":[4,6,7,13,17,21,24,74,75,77,83,93,125,128,279,280,331,358,422,440,473,492,527,529,532,539,545,548,550,567,588,751,752,753,1103,1104,1105,1258,1570]},"Bengalis":{"buildings":[12,45,49,50,68,70,72,79,82,84,87,101,103,104,109,117,155,199,209,234,235,276,487,562,584,598,621,792],"monkPrefix":"","techs":[8,12,13,14,15,17,22,23,39,45,47,48,50,51,54,55,63,65,67,68,74,75,76,80,81,82,93,101,102,103,140,182,194,199,200,201,202,203,211,212,213,215,219,221,230,231,233,249,252,278,280,315,316,319,322,373,374,375,377,380,408,435,436,438,441,602,608,716,875],"unique":{"castleAgeUniqueTech":833,"castleAgeUniqueUnit":1759,"imperialAgeUniqueTech":834,"imperialAgeUniqueUnit":1761},"units":[4,6,7,13,17,21,24,74,75,77,83,93,125,128,279,280,331,358,359,420,440,442,448,473,492,527,529,532,539,542,545,546,550,567,691,873,875,1103,1104,1105,1132,1134,1744,1746]},"Berbers":{"buildings":[12,45,49,50,68,70,72,79,82,84,87,101,103,104,109,117,155,199,209,234,276,487,562,584,598,621,792],"monkPrefix":"","techs":[8,12,13,14,15,17,22,23,39,45,47,48,50,54,55,65,67,68,74,75,76,77,80,81,82,93,101,102,103,140,182,194,199,200,201,202,203,211,212,213,215,219,233,249,252,278,279,280,315,316,319,322,374,375,377,379,380,408,435,437,438,439,441,602,608,716],"unique":{"castleAgeUniqueTech":578,"castleAgeUniqueUnit":1007,"imperialAgeUniqueTech":579,"imperialAgeUniqueUnit":1009},"units":[4,5,6,7,13,17,21,24,36,38,39,74,75,77,83,93,125,128,279,280,283,329,330,331,358,420,422,440,441,442,448,473,474,527,528,529,532,539,542,545,546,550,567,691,1010,1012,1103,1104,1105,1258]},"Bohemians":{"buildings":[12,45,49,50,68,70,72,79,82,84,87,101,103,104,109,117,155,199,209,234,235,236,276,487,562,584,598,621,792],"monkPrefix":"","techs":[8,13,14,15,17,22,23,39,45,47,48,50,51,54,55,63,64,65,67,68,74,75,76,77,81,82,93,101,102,103,140,182,194,199,200,201,202,203,211,212,213,215,219,221,230,231,233,249,252,278,279,280,315,316,319,321,322,374,377,408,438,439,441,602,608,716],"unique":{"castleAgeUniqueTech":784,"castleAgeUniqueUnit":1704,"imperialAgeUniqueTech":785,"imperialAgeUniqueUnit":1706},"units":[4,5,6,7,13,17,21,24,36,38,74,75,77,83,93,125,128,279,280,283,331,358,359,420,422,440,442,448,473,492,527,529,539,542,545,546,550,567,691,1103,1104,1105,1258,1709]},"Britons":{"buildings":[12,45,49,50,68,70,72,79,82,84,87,101,103,104,109,117,155,199,209,234,235,276,487,562,584,598,621,792],"monkPrefix":"","techs":[8,13,14,15,17,22,23,39,45,47,48,50,51,54,55,63,65,67,68,74,75,76,77,80,81,82,93,101,102,103,140,182,194,199,200,201,202,203,211,212,213,215,219,221,230,231,233,249,252,278,280,315,321,322,373,374,375,377,379,380,408,438,441,602,608,716,875],"unique":{"castleAgeUniqueTech":3,"castleAgeUniqueUnit":8,"imperialAgeUniqueTech":461,"imperialAgeUniqueUnit":530},"units":[4,6,7,13,17,21,24,38,39,74,75,77,83,93,125,128,279,280,283,331,358,359,420,422,440,442,448,473,474,492,527,528,529,532,539,542,545,546,550,567,1103,1104,1105,1258]},"Bulgarians":{"buildings":[12,45,49,50,68,70,72,79,82,84,87,101,103,104,109,117,199,209,234,235,276,487,562,584,598,621,792,1251],"monkPrefix":"","techs":[8,12,13,14,17,22,23,39,47,48,50,51,55,63,65,67,68,74,75,76,77,80,81,82,93,101,102,103,140,182,199,200,201,202,203,211,212,213,215,233,249,252,278,279,280,315,316,322,374,377,380,408,435,436,437,438,439,441,602,716,875],"unique":{"castleAgeUniqueTech":685,"castleAgeUniqueUnit":1225,"imperialAgeUniqueTech":686,"imperialAgeUniqueUnit":1227},"units":[4,6,7,13,17,21,38,39,74,75,77,83,93,125,128,279,280,283,331,358,359,420,422,440,441,442,448,473,474,527,529,539,542,545,546,548,550,588,1103,1104,1105,1254,1255,1258]},"Burgundians":{"buildings":[12,45,49,50,68,70,72,79,82,84,87,101,103,104,109,117,155,199,209,234,235,236,276,487,562,584,598,621,792],"monkPrefix":"","techs":[8,12,13,14,15,17,22,23,39,45,47,48,50,51,54,55,63,64,65,67,68,74,75,76,77,80,81,82,93,101,102,103,140,182,194,199,200,201,202,203,211,212,213,215,221,230,231,233,249,252,278,279,280,315,316,319,321,322,374,379,408,441,602,608],"unique":{"castleAgeUniqueTech":754,"castleAgeUniqueUnit":1655,"imperialAgeUniqueTech":755,"imperialAgeUniqueUnit":1657},"units":[4,5,6,7,13,17,21,24,36,38,39,74,75,77,83,93,125,128,279,280,283,331,358,359,420,422,440,441,442,448,473,527,529,532,539,545,546,550,567,569,691,1103,1104,1105,1258,1699]},"Burmese":{"buildings":[12,45,49,50,68,70,72,79,82,84,87,101,103,104,109,117,155,199,209,234,235,276,487,562,584,598,621,792],"monkPrefix":"","techs":[8,12,13,14,15,17,22,23,39,45,47,48,50,51,54,55,63,65,67,68,74,75,76,77,80,81,82,93,101,102,103,140,182,194,199,200,201,202,203,211,213,215,221,230,231,233,249,252,278,280,315,316,319,322,374,375,377,380,408,435,436,438,441,602,716,875],"unique":{"castleAgeUniqueTech":627,"castleAgeUniqueUnit":1126,"imperialAgeUniqueTech":626,"imperialAgeUniqueUnit":1128},"units":[4,6,7,13,17,21,24,36,38,39,74,75,77,83,93,125,128,279,280,283,331,358,359,420,422,440,441,442,448,473,474,527,529,539,542,545,546,550,567,691,1103,1104,1105,1132,1134,1258]},"Byzantines":{"buildings":[12,45,49,50,68,70,72,79,82,84,87,101,103,104,109,117,155,199,209,234,235,236,276,487,562,584,598,621,792],"monkPrefix":"","techs":[8,12,13,14,15,17,22,23,39,45,47,48,54,55,63,64,65,67,68,74,76,77,80,81,82,93,101,102,103,140,182,194,199,200,201,202,203,211,212,213,215,219,221,230,231,233,249,252,278,279,280,315,316,319,322,373,374,375,379,408,437,438,439,602,608,716,875],"unique":{"castleAgeUniqueTech":464,"castleAgeUniqueUnit":40,"imperialAgeUniqueTech":61,"imperialAgeUniqueUnit":553},"units":[4,5,6,7,13,17,21,24,36,38,39,74,75,77,83,93,125,128,279,280,283,329,330,331,358,359,422,440,441,442,448,473,474,492,527,528,529,532,539,545,546,548,550,567,569,1103,1104,1105,1258,1795]},"Celts":{"buildings":[12,45,49,50,68,70,72,79,82,84,87,101,103,104,109,117,155,199,209,234,235,276,487,562,584,598,621,792],"monkPrefix":"","techs":[8,13,14,15,17,22,23,39,45,47,48,50,54,55,63,65,67,68,74,75,76,77,81,82,93,101,102,103,140,182,194,199,200,202,203,211,212,213,231,249,252,278,279,280,315,321,322,373,374,375,377,379,380,408,439,441,602,608,716,875],"unique":{"castleAgeUniqueTech":482,"castleAgeUniqueUnit":232,"imperialAgeUniqueTech":5,"imperialAgeUniqueUnit":534},"units":[4,6,7,13,17,21,24,38,39,74,75,77,83,93,125,128,279,280,283,331,358,359,420,422,440,441,442,448,473,474,527,528,529,539,542,545,546,548,550,567,569,588,1103,1104,1105,1258]},"Chinese":{"buildings":[12,45,49,50,68,70,72,79,82,84,87,101,103,104,109,117,155,199,209,234,235,236,276,487,562,584,598,621,792],"monkPrefix":"","techs":[8,13,14,17,22,23,39,45,47,48,50,51,55,63,64,65,67,68,74,75,76,77,80,81,82,93,101,102,103,140,182,194,199,200,201,202,203,211,212,213,215,219,221,230,231,233,249,252,278,279,280,315,319,321,322,373,374,375,380,408,435,437,438,441,602,608],"unique":{"castleAgeUniqueTech":462,"castleAgeUniqueUnit":73,"imperialAgeUniqueTech":52,"imperialAgeUniqueUnit":559},"units":[4,6,7,13,17,21,24,38,39,74,75,77,83,93,125,128,279,280,283,329,330,331,358,359,420,422,440,442,448,473,474,492,527,528,529,539,542,545,546,548,550,567,1103,1104,1105,1258]},"Cumans":{"buildings":[12,45,49,50,68,70,72,79,82,84,87,101,103,104,109,199,209,276,562,584,598,621,792],"monkPrefix":"","techs":[8,12,13,14,15,17,22,23,45,47,48,50,55,65,67,68,74,75,76,77,80,81,82,93,101,102,103,182,199,200,202,203,211,212,213,215,219,221,231,249,252,278,280,315,319,321,322,374,379,380,408,435,436,437,439,441,602],"unique":{"castleAgeUniqueTech":689,"castleAgeUniqueUnit":1231,"imperialAgeUniqueTech":690,"imperialAgeUniqueUnit":1233},"units":[4,6,7,13,17,21,24,38,39,74,75,77,83,93,125,128,279,280,283,329,331,358,359,422,440,441,442,448,473,474,527,529,532,539,545,546,548,550,567,569,588,1103,1104,1105,1258,1370,1372]},"Dravidians":{"buildings":[12,45,49,50,68,70,72,79,82,84,87,101,103,104,109,117,155,199,209,234,235,236,276,487,562,584,598,621,792],"monkPrefix":"","techs":[8,13,14,15,17,22,23,45,47,48,50,55,63,64,65,67,68,74,75,76,77,81,82,93,101,102,103,140,194,199,200,201,202,203,211,212,213,215,219,221,230,231,249,278,280,315,319,322,373,374,375,379,380,408,437,438,441,602,608,716,875],"unique":{"castleAgeUniqueTech":831,"castleAgeUniqueUnit":1735,"imperialAgeUniqueTech":832,"imperialAgeUniqueUnit":1737},"units":[4,5,6,7,13,17,21,24,36,74,75,77,83,93,125,128,279,280,331,358,359,420,440,442,448,473,492,527,528,529,532,539,542,545,546,550,567,588,691,873,875,1103,1104,1105,1132,1744,1746,1750]},"Ethiopians":{"buildings":[12,45,49,50,68,70,72,79,82,84,87,101,103,104,109,117,155,199,209,234,235,276,487,562,584,598,621,792],"monkPrefix":"","techs":[8,13,14,15,17,22,23,39,45,47,48,50,51,55,63,65,67,68,74,75,76,77,81,82,93,101,102,103,140,182,194,199,200,201,202,203,211,212,213,215,219,221,231,233,249,252,278,279,280,315,319,321,322,373,374,375,377,380,408,437,438,439,441,602,716],"unique":{"castleAgeUniqueTech":574,"castleAgeUniqueUnit":1016,"imperialAgeUniqueTech":575,"imperialAgeUniqueUnit":1018},"units":[4,6,7,13,17,21,24,36,38,39,74,75,77,83,93,125,128,279,280,283,329,330,331,358,359,420,422,440,441,442,448,473,474,492,527,529,539,542,545,546,548,550,588,1103,1104,1105,1258]},"Franks":{"buildings":[12,45,49,50,68,70,72,79,82,84,87,101,103,104,109,117,155,199,209,234,276,487,562,584,598,621,792],"monkPrefix":"","techs":[8,12,13,14,17,22,23,39,45,47,48,50,51,55,65,67,68,74,75,76,77,80,81,82,93,101,102,103,140,182,194,199,200,202,203,211,212,213,215,230,231,233,249,252,278,280,315,322,374,375,377,379,408,438,439,441,602,608,716,875],"unique":{"castleAgeUniqueTech":83,"castleAgeUniqueUnit":281,"imperialAgeUniqueTech":493,"imperialAgeUniqueUnit":531},"units":[4,5,6,7,13,17,21,24,36,38,39,74,75,77,83,93,125,128,279,280,283,331,358,359,420,422,440,442,448,473,474,527,528,529,532,539,542,545,546,550,567,569,1103,1104,1105,1258]},"Goths":{"buildings":[12,45,49,50,68,70,72,79,82,84,87,101,103,104,109,199,209,276,562,584,598,621,792],"monkPrefix":"","techs":[8,12,13,14,15,17,22,23,39,45,47,48,50,51,55,65,67,68,74,75,76,81,82,93,101,102,103,199,200,201,202,203,211,212,213,215,219,221,231,233,249,252,278,279,280,315,321,322,373,374,380,408,435,438,441],"unique":{"castleAgeUniqueTech":16,"castleAgeUniqueUnit":41,"imperialAgeUniqueTech":457,"imperialAgeUniqueUnit":555},"units":[4,5,6,7,13,17,21,24,36,38,39,74,75,77,83,93,125,128,279,280,283,331,358,359,422,440,441,442,448,473,474,527,528,529,532,539,542,545,546,550,567,1103,1104,1105,1258,1795]},"Gurjaras":{"buildings":[12,45,49,50,68,70,72,79,82,84,87,101,103,104,109,117,155,199,209,234,235,276,487,562,584,598,621,792],"monkPrefix":"","techs":[8,12,13,14,17,22,23,39,47,48,50,51,54,55,63,65,67,68,74,76,77,80,81,82,93,101,102,103,140,182,194,199,200,201,202,203,211,212,213,231,233,249,252,278,279,280,315,316,319,321,322,373,374,379,380,408,435,437,438,439,441,602,716],"unique":{"castleAgeUniqueTech":835,"castleAgeUniqueUnit":1741,"imperialAgeUniqueTech":836,"imperialAgeUniqueUnit":1743},"units":[4,5,6,7,13,17,21,24,36,74,75,77,83,93,125,128,279,280,329,330,331,420,440,441,442,448,473,527,528,529,539,542,545,546,550,873,875,1103,1104,1105,1744,1746,1751,1753,1755]},"Hindustanis":{"buildings":[12,45,49,50,68,70,72,79,82,84,87,101,103,104,109,117,155,199,209,234,276,487,562,584,598,621,792,1754],"monkPrefix":"","techs":[8,13,14,17,22,23,39,45,47,48,50,55,65,67,68,74,75,76,80,81,82,93,101,102,103,140,182,194,199,200,201,202,203,211,212,213,215,219,221,230,231,233,249,252,278,279,280,315,316,322,374,377,379,408,435,437,438,441,602,716],"unique":{"castleAgeUniqueTech":506,"castleAgeUniqueUnit":1747,"imperialAgeUniqueTech":507,"imperialAgeUniqueUnit":1749},"units":[4,5,6,7,13,17,21,24,36,39,74,75,77,83,93,125,128,207,279,280,329,330,331,358,420,440,441,442,448,473,474,527,529,539,545,546,550,567,691,1103,1104,1105,1744,1746]},"Huns":{"buildings":[12,45,49,50,68,72,79,82,84,87,101,103,104,109,117,199,209,276,487,562,584,598,621,792],"monkPrefix":"","techs":[8,13,14,15,17,22,23,39,45,47,48,50,55,65,67,68,74,75,76,80,81,82,93,101,102,103,182,199,200,201,202,203,211,212,213,215,221,231,233,249,252,278,280,315,319,321,322,374,375,408,435,436,437,439,602],"unique":{"castleAgeUniqueTech":483,"castleAgeUniqueUnit":755,"imperialAgeUniqueTech":21,"imperialAgeUniqueUnit":757},"units":[4,6,7,13,17,21,24,38,39,74,75,77,83,93,125,128,279,280,283,331,358,359,422,440,441,442,448,473,474,527,528,529,539,545,546,548,569,1103,1104,1105,1258,1795]},"Incas":{"buildings":[12,45,49,50,68,70,72,79,82,84,87,103,104,109,117,155,199,209,234,235,276,487,562,584,598,621,792],"monkPrefix":"meso_","techs":[8,12,13,14,15,17,22,23,45,47,48,50,54,55,63,65,67,68,74,75,76,77,93,101,102,103,140,182,194,199,200,201,202,203,211,212,213,215,219,230,231,233,249,278,279,280,315,316,321,322,373,374,375,377,379,380,408,437,438,439,441,602,608],"unique":{"castleAgeUniqueTech":516,"castleAgeUniqueUnit":879,"imperialAgeUniqueTech":517,"imperialAgeUniqueUnit":881},"units":[4,6,7,13,17,21,24,74,75,77,83,93,125,128,185,279,280,331,358,359,422,440,442,473,492,527,529,532,539,542,545,548,550,567,751,752,753,1103,1104,1105,1258,1570]},"Italians":{"buildings":[12,45,49,50,68,70,72,79,82,84,87,101,103,104,109,117,155,199,209,234,235,236,276,487,562,584,598,621,792],"monkPrefix":"","techs":[8,12,13,14,15,17,22,23,39,45,47,48,50,51,54,55,63,64,65,67,68,74,75,76,77,80,81,82,93,101,102,103,140,194,199,200,201,202,203,211,212,213,215,219,221,230,231,233,249,252,278,279,280,315,316,319,322,373,374,375,379,380,408,435,437,438,441,602,608,716],"unique":{"castleAgeUniqueTech":494,"castleAgeUniqueUnit":866,"imperialAgeUniqueTech":499,"imperialAgeUniqueUnit":868},"units":[4,5,6,7,13,17,21,24,36,38,39,74,75,77,83,93,125,128,279,280,283,331,358,420,422,440,441,442,448,473,492,527,529,532,539,545,546,550,567,691,882,1103,1104,1105,1258]},"Japanese":{"buildings":[12,45,49,50,68,70,72,79,82,84,87,101,103,104,109,117,155,199,209,234,235,276,487,562,584,598,621,792],"monkPrefix":"","techs":[8,13,14,17,22,23,39,45,47,48,50,54,55,63,65,67,68,74,75,76,77,81,82,93,101,102,103,140,182,194,199,200,201,202,203,211,212,213,215,219,221,230,231,233,249,252,278,280,315,316,319,322,373,374,375,377,379,408,435,436,437,438,441,602,608,716,875],"unique":{"castleAgeUniqueTech":484,"castleAgeUniqueUnit":291,"imperialAgeUniqueTech":59,"imperialAgeUniqueUnit":560},"units":[4,5,6,7,13,17,21,24,38,39,74,75,77,83,93,125,128,279,280,283,331,358,359,420,422,440,442,448,473,474,492,527,529,532,539,542,545,546,550,567,691,1103,1104,1105,1258]},"Khmer":{"buildings":[12,45,49,50,68,70,72,79,82,84,87,101,103,104,109,117,155,199,209,234,235,276,487,562,584,598,621,792],"monkPrefix":"","techs":[8,12,13,14,17,22,23,39,45,47,48,50,51,55,63,65,67,68,74,75,76,80,81,82,93,101,102,103,140,182,194,199,200,201,202,203,211,212,213,219,231,233,249,252,278,279,280,315,316,321,322,374,375,377,379,380,408,435,436,438,441,602],"unique":{"castleAgeUniqueTech":622,"castleAgeUniqueUnit":1120,"imperialAgeUniqueTech":623,"imperialAgeUniqueUnit":1122},"units":[4,5,6,7,13,17,21,24,38,39,74,75,77,83,93,125,128,279,280,283,331,358,359,420,422,440,441,442,448,473,474,492,527,529,532,539,542,545,546,548,550,691,1103,1104,1105,1132,1134,1258]},"Koreans":{"buildings":[12,45,49,50,68,70,72,79,82,84,87,101,103,104,109,117,155,199,209,234,235,236,276,487,562,584,598,621,792],"monkPrefix":"","techs":[8,13,14,15,17,22,23,39,45,47,48,50,51,54,55,63,64,65,67,68,74,76,77,81,82,93,101,102,103,140,182,194,199,200,201,202,203,211,212,213,215,219,221,230,231,249,252,278,279,280,315,322,373,374,375,377,380,408,437,438,441,602,608,716,875],"unique":{"castleAgeUniqueTech":486,"castleAgeUniqueUnit":827,"imperialAgeUniqueTech":445,"imperialAgeUniqueUnit":829},"units":[4,5,6,7,13,17,21,24,36,38,39,74,75,77,83,93,125,128,279,280,283,331,358,359,420,422,440,441,442,448,473,474,492,529,532,539,545,546,550,567,588,691,831,832,1103,1105,1258]},"Lithuanians":{"buildings":[12,45,49,50,68,70,72,79,82,84,87,101,103,104,109,117,155,199,209,234,235,236,276,487,562,584,598,621,792],"monkPrefix":"","techs":[8,12,13,14,15,17,22,23,39,45,47,48,50,51,54,55,63,64,65,67,68,74,76,80,81,82,93,101,102,103,140,194,199,200,201,202,203,211,212,213,215,219,221,230,231,233,249,252,278,279,280,315,316,319,322,374,375,379,380,408,435,437,438,439,441,602],"unique":{"castleAgeUniqueTech":691,"castleAgeUniqueUnit":1234,"imperialAgeUniqueTech":692,"imperialAgeUniqueUnit":1236},"units":[4,5,6,7,13,17,21,24,36,38,39,74,75,77,83,93,125,128,279,280,283,331,358,359,420,422,440,442,448,473,474,527,529,532,539,545,546,550,567,569,691,1103,1104,1105,1258,1707]},"Magyars":{"buildings":[12,45,49,50,68,70,72,79,82,84,87,101,103,104,109,117,199,209,234,276,487,562,584,598,621,792],"monkPrefix":"","techs":[8,12,13,14,17,22,23,39,47,48,50,54,55,65,67,68,74,75,76,80,81,82,93,101,102,103,140,182,199,200,201,202,203,211,212,213,219,221,230,231,233,249,252,278,280,315,321,322,373,374,375,377,379,380,408,435,436,437,438,439,441,602,716],"unique":{"castleAgeUniqueTech":514,"castleAgeUniqueUnit":869,"imperialAgeUniqueTech":515,"imperialAgeUniqueUnit":871},"units":[4,6,7,13,17,21,24,38,39,74,75,77,83,93,125,128,279,280,283,331,358,359,420,422,440,441,442,448,473,474,492,527,529,532,539,542,545,546,550,567,569,1103,1104,1105,1258]},"Malay":{"buildings":[12,45,49,50,68,70,72,79,82,84,87,101,103,104,109,117,199,209,234,235,236,276,487,562,584,598,621,792,1189],"monkPrefix":"","techs":[8,12,13,14,15,17,22,23,39,45,47,48,50,54,55,63,64,65,67,68,74,75,76,77,81,93,101,102,103,140,182,199,200,201,202,203,211,212,213,215,219,230,231,233,249,278,279,280,315,316,319,321,322,373,374,375,377,380,408,437,439,441,602,716],"unique":{"castleAgeUniqueTech":624,"castleAgeUniqueUnit":1123,"imperialAgeUniqueTech":625,"imperialAgeUniqueUnit":1125},"units":[4,6,7,13,17,21,24,36,38,39,74,75,77,83,93,125,128,279,280,283,331,358,359,420,422,440,442,448,473,492,527,529,532,539,542,545,546,550,691,1103,1104,1105,1132,1134,1258]},"Malians":{"buildings":[12,45,49,50,68,70,72,79,82,84,87,101,103,104,109,117,155,199,209,234,235,276,487,562,584,598,621,792],"monkPrefix":"","techs":[8,12,13,14,15,17,22,23,39,45,47,48,50,51,54,55,63,65,67,68,74,76,77,80,81,82,93,101,102,103,140,182,194,199,200,202,203,211,212,213,215,219,230,231,249,252,278,279,280,315,316,319,321,322,374,375,379,380,408,435,437,438,439,441,602,716],"unique":{"castleAgeUniqueTech":576,"castleAgeUniqueUnit":1013,"imperialAgeUniqueTech":577,"imperialAgeUniqueUnit":1015},"units":[4,5,6,7,13,17,21,24,36,38,39,74,75,77,83,93,125,128,279,280,283,329,330,331,358,420,422,440,448,473,474,492,527,528,529,532,539,545,546,550,567,588,1103,1104,1105,1258]},"Mayans":{"buildings":[12,45,49,50,68,70,72,79,82,84,87,103,104,109,117,155,199,209,234,235,276,487,562,584,598,621,792],"monkPrefix":"meso_","techs":[8,12,13,14,15,17,22,23,45,47,48,50,51,54,55,63,65,67,68,74,75,76,77,93,101,102,103,140,194,199,200,201,202,203,211,212,213,215,219,221,230,231,249,252,278,279,280,315,319,321,322,373,374,375,379,380,408,437,438,439,441,602],"unique":{"castleAgeUniqueTech":485,"castleAgeUniqueUnit":763,"imperialAgeUniqueTech":4,"imperialAgeUniqueUnit":765},"units":[4,6,7,13,17,21,24,74,75,77,83,93,125,128,279,280,331,358,359,422,440,442,473,492,527,528,529,532,539,542,545,548,550,751,752,753,1103,1104,1105,1258,1570]},"Mongols":{"buildings":[12,45,49,50,68,70,72,79,82,84,87,101,103,104,109,117,155,199,209,234,276,487,562,584,598,621,792],"monkPrefix":"","techs":[8,13,14,17,22,23,39,45,47,48,50,55,65,67,68,74,75,76,77,81,82,93,101,102,103,140,182,194,199,200,201,202,203,211,212,213,215,249,252,278,279,280,315,319,321,322,373,374,377,379,408,435,436,437,439,441,602],"unique":{"castleAgeUniqueTech":487,"castleAgeUniqueUnit":11,"imperialAgeUniqueTech":6,"imperialAgeUniqueUnit":561},"units":[4,6,7,13,17,21,24,38,39,74,75,77,83,93,125,128,279,280,283,329,330,331,358,420,422,440,441,442,448,473,474,492,527,528,529,532,539,542,545,546,548,550,567,588,1103,1104,1105,1258,1370,1372]},"Persians":{"buildings":[12,45,49,50,68,70,72,79,82,84,87,101,103,104,109,117,199,209,234,276,487,562,584,598,621,792],"monkPrefix":"","techs":[8,12,13,14,15,17,22,23,39,45,47,48,50,51,55,65,67,68,74,75,76,77,80,81,82,93,101,102,103,140,182,199,200,202,203,211,212,213,215,219,221,230,249,252,278,279,280,315,321,322,374,375,379,380,408,435,436,437,438,441,602,716,875],"unique":{"castleAgeUniqueTech":488,"castleAgeUniqueUnit":239,"imperialAgeUniqueTech":7,"imperialAgeUniqueUnit":558},"units":[4,5,6,7,13,17,21,24,36,38,39,74,75,77,83,93,125,128,279,280,283,329,330,331,358,359,420,422,440,441,442,448,474,527,528,529,532,539,542,545,546,548,550,569,691,1103,1104,1105,1258]},"Poles":{"buildings":[12,45,49,50,70,72,79,82,84,87,101,103,104,109,117,155,199,209,234,235,236,276,487,562,584,598,621,792,1734],"monkPrefix":"","techs":[8,12,13,14,15,17,22,23,39,45,47,48,50,54,55,63,64,65,67,68,74,75,76,77,81,82,93,101,102,103,140,194,199,200,201,202,203,211,212,213,215,230,231,249,252,278,279,280,315,316,321,322,374,377,379,408,435,437,438,441,602,608,716],"unique":{"castleAgeUniqueTech":782,"castleAgeUniqueUnit":1701,"imperialAgeUniqueTech":783,"imperialAgeUniqueUnit":1703},"units":[4,6,7,13,17,21,24,36,38,39,74,75,77,83,93,125,128,279,280,283,331,358,420,422,440,442,448,473,474,492,527,529,532,539,545,546,548,550,567,1103,1104,1105,1258,1707]},"Portuguese":{"buildings":[12,45,49,50,68,70,72,79,82,84,87,101,103,104,109,117,155,199,209,234,235,236,276,487,562,584,598,621,792,1021],"monkPrefix":"","techs":[8,12,13,14,15,17,22,23,39,45,47,48,50,51,54,55,63,64,65,67,68,74,75,76,77,80,81,82,93,101,102,103,140,194,199,200,201,202,203,211,212,213,219,221,230,231,249,252,278,279,280,315,316,319,321,322,374,375,377,380,408,435,437,438,439,441,602,716,875],"unique":{"castleAgeUniqueTech":572,"castleAgeUniqueUnit":1001,"imperialAgeUniqueTech":573,"imperialAgeUniqueUnit":1003},"units":[4,5,6,7,13,17,21,24,36,38,39,74,75,77,83,93,125,128,279,280,283,331,358,359,420,422,440,442,448,473,492,527,528,529,539,545,546,550,567,691,1004,1006,1103,1104,1105,1258]},"Romans":{"buildings":[12,45,49,50,68,70,72,79,82,84,87,101,103,104,109,117,155,199,209,234,235,276,487,562,584,598,621,792],"monkPrefix":"","techs":[8,12,13,14,15,17,22,23,39,45,47,48,50,51,55,63,65,67,68,74,75,76,80,81,82,93,101,102,103,140,182,194,199,200,202,203,211,212,213,215,219,230,233,249,252,278,280,315,316,319,321,322,373,374,377,408,435,441,602],"unique":{"castleAgeUniqueTech":883,"castleAgeUniqueUnit":1790,"imperialAgeUniqueTech":884,"imperialAgeUniqueUnit":1792},"units":[4,6,7,13,17,21,24,38,39,74,75,77,83,93,125,128,279,280,283,331,358,359,422,440,442,448,474,529,532,539,542,545,546,548,550,1103,1105,1258,1793,1795]},"Saracens":{"buildings":[12,45,49,50,68,70,72,79,82,84,87,101,103,104,109,117,155,199,209,234,235,276,487,562,584,598,621,792],"monkPrefix":"","techs":[8,13,14,17,22,23,39,45,47,48,50,54,55,63,65,67,68,74,75,76,77,80,81,82,93,101,102,103,140,182,194,199,200,201,202,203,211,212,213,215,219,221,230,231,233,249,252,278,280,315,316,319,322,374,375,377,379,408,435,436,437,438,439,441,602,608,716,875],"unique":{"castleAgeUniqueTech":9,"castleAgeUniqueUnit":282,"imperialAgeUniqueTech":454,"imperialAgeUniqueUnit":556},"units":[4,5,6,7,13,17,21,24,36,38,39,74,75,77,83,93,125,128,279,280,329,330,331,358,420,422,440,441,442,448,473,474,492,527,528,529,539,545,546,548,550,567,588,691,1103,1104,1105,1258]},"Sicilians":{"buildings":[12,45,49,50,68,70,72,82,84,87,101,103,104,109,117,199,209,276,487,562,584,598,621,792,1665],"monkPrefix":"","techs":[8,12,13,14,15,17,22,23,39,45,47,48,50,55,65,67,68,74,75,76,77,80,81,82,93,101,102,103,182,199,200,201,202,203,211,212,213,215,231,233,249,252,278,279,280,315,321,322,373,374,375,377,379,380,408,435,441,602,608,716,875],"unique":{"castleAgeUniqueTech":756,"castleAgeUniqueUnit":1658,"imperialAgeUniqueTech":757,"imperialAgeUniqueUnit":1659},"units":[4,6,7,13,17,21,24,38,39,74,75,77,83,93,125,128,279,280,283,331,358,359,420,422,440,442,448,473,492,527,528,529,532,539,542,545,546,548,550,567,588,1103,1104,1105,1258,1660,1661,1786,1787,1788]},"Slavs":{"buildings":[12,45,49,50,68,70,72,79,82,84,87,101,103,104,109,117,155,199,209,234,276,487,562,584,598,621,792],"monkPrefix":"","techs":[8,12,13,14,17,22,23,39,45,47,48,50,55,65,67,68,74,75,76,77,80,81,82,93,101,102,103,140,182,194,199,200,202,203,211,212,213,215,219,221,230,231,233,249,278,280,315,316,319,321,322,374,375,377,379,408,435,438,441,602,716,875],"unique":{"castleAgeUniqueTech":455,"castleAgeUniqueUnit":876,"imperialAgeUniqueTech":513,"imperialAgeUniqueUnit":878},"units":[4,6,7,13,17,21,24,38,39,74,75,77,83,93,125,128,279,280,283,331,358,359,420,422,440,441,442,448,473,474,527,529,532,539,542,545,546,548,550,567,588,1103,1104,1105,1258]},"Spanish":{"buildings":[12,45,49,50,68,70,72,79,82,84,87,101,103,104,109,117,155,199,209,234,235,236,276,487,562,584,598,621,792],"monkPrefix":"","techs":[8,13,14,15,17,22,23,39,45,47,48,50,51,55,63,64,65,67,68,74,75,76,77,80,81,82,93,101,102,103,140,194,199,200,201,202,203,211,212,213,215,219,221,230,231,233,249,252,278,279,280,315,316,319,321,322,373,374,375,379,408,435,437,438,439,441,602,608,716,875],"unique":{"castleAgeUniqueTech":492,"castleAgeUniqueUnit":771,"imperialAgeUniqueTech":440,"imperialAgeUniqueUnit":773},"units":[4,5,6,7,13,17,21,36,38,39,74,75,77,83,93,125,128,279,280,283,331,358,359,420,422,440,441,442,448,473,474,527,528,529,532,539,545,546,548,550,567,569,691,775,1103,1104,1105,1258]},"Tatars":{"buildings":[12,45,49,50,68,70,72,79,82,84,87,101,103,104,109,117,155,199,209,234,236,276,487,562,584,598,621,792],"monkPrefix":"","techs":[8,12,13,14,15,17,22,23,39,47,48,50,54,55,64,65,67,68,74,75,80,81,82,93,101,102,103,140,182,194,199,200,201,202,203,211,212,213,215,219,230,233,249,252,278,280,315,319,321,322,374,375,377,380,408,435,436,437,441,602],"unique":{"castleAgeUniqueTech":687,"castleAgeUniqueUnit":1228,"imperialAgeUniqueTech":688,"imperialAgeUniqueUnit":1230},"units":[4,5,6,7,13,17,21,24,38,39,74,75,77,83,93,125,128,279,280,283,329,330,331,358,359,420,422,440,441,442,448,473,474,527,529,532,539,542,545,546,548,550,691,1103,1104,1105,1258,1263,1370,1372]},"Teutons":{"buildings":[12,45,49,50,68,70,72,79,82,84,87,101,103,104,109,117,155,199,209,234,235,236,276,487,562,584,598,621,792],"monkPrefix":"","techs":[8,12,13,14,15,17,22,23,45,47,48,50,55,63,64,65,67,68,74,75,76,77,80,81,82,93,101,102,103,140,194,199,200,202,203,211,212,213,215,219,221,230,231,233,249,252,278,279,280,315,316,319,321,322,374,377,379,380,408,435,438,439,441,602,608,716,875],"unique":{"castleAgeUniqueTech":489,"castleAgeUniqueUnit":25,"imperialAgeUniqueTech":11,"imperialAgeUniqueUnit":554},"units":[4,5,6,7,13,17,21,24,36,38,39,74,75,77,83,93,125,128,279,280,283,331,358,359,420,422,440,442,448,473,527,528,529,532,539,542,545,550,567,569,588,1103,1104,1105,1258]},"Turks":{"buildings":[12,45,49,50,68,70,72,79,82,84,87,101,103,104,109,117,155,199,209,234,235,236,276,487,562,584,598,621,792],"monkPrefix":"","techs":[8,13,14,15,17,22,23,39,45,47,48,50,51,54,55,63,64,65,67,68,74,75,76,77,80,81,82,93,101,102,103,140,182,194,199,200,201,202,203,211,212,213,215,219,221,231,249,252,278,280,315,316,319,321,322,373,374,375,379,380,408,435,436,437,438,439,602,608,716],"unique":{"castleAgeUniqueTech":491,"castleAgeUniqueUnit":46,"imperialAgeUniqueTech":10,"imperialAgeUniqueUnit":557},"units":[4,5,7,13,17,21,24,36,38,39,74,75,77,83,93,125,128,279,280,283,329,330,331,420,422,440,441,442,448,473,474,527,528,529,539,542,545,546,548,567,691,1103,1104,1105,1258]},"Vietnamese":{"buildings":[12,45,49,50,68,70,72,79,82,84,87,101,103,104,109,117,155,199,209,234,235,236,276,487,562,584,598,621,792],"monkPrefix":"","techs":[8,12,13,14,15,17,22,23,39,45,47,48,54,55,63,64,65,67,68,74,76,77,80,81,82,93,101,102,103,140,194,199,200,201,202,203,211,212,213,215,219,221,230,231,233,249,278,279,280,315,319,321,322,374,375,377,379,380,408,435,437,438,441,602,608,716],"unique":{"castleAgeUniqueTech":628,"castleAgeUniqueUnit":1129,"imperialAgeUniqueTech":629,"imperialAgeUniqueUnit":1131},"units":[4,6,7,13,17,21,24,36,38,39,74,75,77,83,93,125,128,279,280,283,331,358,359,420,422,440,442,448,473,474,492,527,528,529,539,545,546,550,567,691,1103,1104,1105,1132,1134,1155,1258]},"Vikings":{"buildings":[12,45,49,50,68,70,72,79,82,84,87,101,103,104,109,117,155,199,209,234,276,487,562,584,598,621,792],"monkPrefix":"","techs":[8,12,13,14,17,22,23,45,47,48,50,51,54,55,65,67,68,74,75,76,77,81,82,93,101,102,103,140,182,194,199,200,201,202,203,211,212,213,215,219,221,230,249,252,278,280,315,319,321,322,374,375,377,379,380,408,439,602,608,716,875],"unique":{"castleAgeUniqueTech":463,"castleAgeUniqueUnit":692,"imperialAgeUniqueTech":49,"imperialAgeUniqueUnit":694},"units":[4,6,7,13,17,21,24,38,39,74,75,77,83,93,125,128,250,279,280,283,331,358,420,422,440,442,448,473,492,527,528,533,539,542,545,546,548,550,567,691,1104,1105,1258]}}}');

/***/ }),

/***/ "./src/components/civ-images/civ-data/strings.json":
/*!*********************************************************!*\
  !*** ./src/components/civ-images/civ-data/strings.json ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"1":"Return of Rome","1001":"Age of Empires II","4201":"Dark Age","4202":"Feudal Age","4203":"Castle Age","4204":"Imperial Age","5009":"Steppe Lancer","5010":"Elite Steppe Lancer","5040":"Xolotl Warrior","5052":"Centurion","5053":"Elite Centurion","5054":"Legionary","5055":"Dromon","5068":"Knight","5070":"Cavalier","5078":"Spearman","5079":"Militia","5080":"Man-at-Arms","5081":"Long Swordsman","5083":"Archer","5084":"Crossbowman","5085":"Cavalry Archer","5086":"Hand Cannoneer","5087":"Elite Skirmisher","5088":"Skirmisher","5089":"Trade Cog","5090":"Fishing Ship","5091":"War Galley","5093":"Bombard Cannon","5094":"Battering Ram","5095":"Mangonel","5096":"Scorpion","5097":"Trebuchet","5099":"Monk","5101":"Cataphract","5102":"Chu Ko Nu","5103":"Mameluke","5104":"Huskarl","5105":"Janissary","5106":"Longboat","5107":"Longbowman","5108":"Mangudai","5109":"War Elephant","5110":"Samurai","5111":"Throwing Axeman","5112":"Teutonic Knight","5113":"Woad Raider","5114":"Condottiero","5128":"Archery Range","5129":"Organ Gun","5130":"Elite Organ Gun","5131":"Blacksmith","5132":"Caravel","5133":"Elite Caravel","5134":"Camel Archer","5135":"Barracks","5136":"Elite Camel Archer","5137":"Genitour","5138":"Monastery","5139":"Elite Genitour","5140":"Gbeto","5141":"Elite Gbeto","5142":"Castle","5143":"Shotel Warrior","5144":"Dock","5145":"Elite Shotel Warrior","5146":"Ballista Elephant","5147":"Elite Ballista Elephant","5148":"Karambit Warrior","5149":"Farm","5150":"Elite Karambit Warrior","5151":"Arambai","5152":"Elite Arambai","5154":"Guard Tower","5155":"Keep","5156":"Bombard Tower","5157":"Mill","5159":"Feitoria","5160":"Fire Galley","5161":"Market","5162":"Demolition Raft","5164":"Town Center","5165":"Rattan Archer","5166":"Elite Rattan Archer","5167":"Battle Elephant","5168":"Elite Battle Elephant","5169":"Siege Workshop","5171":"Stable","5176":"University","5178":"Watch Tower","5182":"Wonder","5185":"Gate","5186":"Palisade Gate","5190":"Imperial Skirmisher","5202":"Palisade Wall","5203":"Stone Wall","5204":"Fortified Wall","5249":"Harbor","5287":"Cannon Galleon","5288":"Konnik","5289":"Capped Ram","5290":"Elite Konnik","5309":"Galleon","5313":"Keshik","5314":"Elite Keshik","5315":"Kipchak","5326":"Scout Cavalry","5327":"Elite Kipchak","5328":"Leitis","5329":"Elite Leitis","5344":"House","5349":"Krepost","5375":"Flaming Camel","5403":"Urumi Swordsman","5408":"Pikeman","5409":"Halberdier","5411":"Two-Handed Swordsman","5412":"Heavy Cavalry Archer","5413":"Elite Urumi Swordsman","5416":"Camel Rider","5417":"Heavy Camel Rider","5418":"Arbalester","5419":"Imperial Camel Rider","5421":"Chakram Thrower","5424":"Demolition Ship","5425":"Heavy Demolition Ship","5426":"Fire Ship","5427":"Elite Chakram Thrower","5428":"Armored Elephant","5429":"Fast Fire Ship","5430":"Siege Elephant","5431":"Ghulam","5432":"Elite Ghulam","5435":"Thirisadai","5436":"Galley","5437":"Shrivamsha Rider","5438":"Elite Shrivamsha Rider","5439":"Heavy Scorpion","5440":"Caravanserai","5441":"Camel Scout","5443":"Transport Ship","5444":"Light Cavalry","5445":"Siege Tower","5446":"Siege Ram","5447":"Boyar","5448":"Onager","5449":"Elite Boyar","5451":"Elite Cataphract","5452":"Elite Chu Ko Nu","5453":"Elite Mameluke","5454":"Elite Huskarl","5455":"Elite Janissary","5456":"Elite Longbowman","5457":"Elite Longboat","5458":"Elite Mangudai","5459":"Elite War Elephant","5460":"Elite Samurai","5461":"Elite Throwing Axeman","5462":"Elite Teutonic Knight","5463":"Elite Woad Raider","5464":"Lumber Camp","5469":"Champion","5471":"Paladin","5487":"Mining Camp","5493":"Siege Onager","5495":"Fish Trap","5504":"Outpost","5534":"Coustillier","5536":"Elite Coustillier","5538":"Serjeant","5540":"Elite Serjeant","5542":"Flemish Militia","5544":"Donjon","5558":"Obuch","5559":"Elite Obuch","5561":"Hussite Wagon","5563":"Elite Hussite Wagon","5573":"Elite Cannon Galleon","5574":"Berserk","5576":"Elite Berserk","5577":"Winged Hussar","5579":"Houfnice","5581":"Folwark","5606":"Villager","5660":"Petard","5661":"Hussar","5667":"Jaguar Warrior","5669":"Elite Jaguar Warrior","5671":"Eagle Warrior","5672":"Eagle Scout","5673":"Elite Eagle Warrior","5675":"Tarkan","5677":"Elite Tarkan","5682":"Elephant Archer","5683":"Plumed Archer","5684":"Elite Elephant Archer","5685":"Elite Plumed Archer","5686":"Kamayuk","5687":"Conquistador","5688":"Elite Kamayuk","5689":"Elite Conquistador","5690":"Slinger","5691":"Missionary","5723":"Genoese Crossbowman","5725":"Elite Genoese Crossbowman","5727":"War Wagon","5728":"Magyar Huszar","5729":"Elite War Wagon","5730":"Elite Magyar Huszar","5731":"Turtle Ship","5732":"Elite Turtle Ship","7008":"Town Watch","7012":"Crop Rotation","7013":"Heavy Plow","7014":"Horse Collar","7015":"Guilds","7017":"Banking","7019":"Cartography","7022":"Loom","7023":"Coinage","7039":"Husbandry","7045":"Faith","7047":"Chemistry","7050":"Masonry","7051":"Architecture","7054":"Treadmill Crane","7055":"Gold Mining","7059":"Kataparuto","7063":"Keep","7067":"Forging","7068":"Iron Casting","7074":"Scale Mail Armor","7075":"Blast Furnace","7076":"Chain Mail Armor","7077":"Plate Mail Armor","7080":"Plate Barding Armor","7081":"Scale Barding Armor","7082":"Chain Barding Armor","7090":"Tracking","7093":"Ballistics","7101":"Feudal Age","7102":"Castle Age","7103":"Imperial Age","7150":"Bodkin Arrow","7151":"Bracer","7163":"Fortified Wall","7172":"Fletching","7180":"Gold Shaft Mining","7186":"Guard Tower","7189":"Double-Bit Axe","7190":"Bow Saw","7208":"Padded Archer Armor","7209":"Leather Archer Armor","7210":"Squires","7211":"Wheelbarrow","7216":"Ring Archer Armor","7220":"Illumination","7221":"Sanctity","7222":"Block Printing","7231":"Two-Man Saw","7246":"Hand Cart","7249":"Fervor","7250":"Carrack","7251":"Arquebus","7252":"Royal Heirs","7253":"Torsion Engines","7254":"Tigui","7255":"Farimba","7256":"Kasbah","7257":"Maghrebi Camels","7258":"Arson","7266":"Andean Sling","7267":"Fabric Shields","7269":"Druzhina","7270":"Grand Trunk Road","7271":"Shatagni","7272":"Pavise","7273":"Silk Road","7274":"Recurve Bow","7275":"Corvinian Army","7276":"Stone Mining","7277":"Stone Shaft Mining","7278":"Arrowslits","7280":"Nomads","7281":"Kamandaran","7282":"Town Patrol","7283":"Ironclad","7285":"Sipahi","7286":"Inquisition","7287":"Chivalry","7291":"Tusk Swords","7292":"Double Crossbow","7293":"Thalassocracy","7294":"Forced Levy","7295":"Howdah","7296":"Manipur Cavalry","7297":"Chatras","7298":"Paper Money","7307":"Stirrups","7308":"Bagains","7309":"Silk Armor","7310":"Timurid Siegecraft","7311":"Steppe Husbandry","7312":"Chieftains","7313":"Greek Fire","7314":"Gillnets","7315":"Redemption","7316":"Atonement","7318":"Logistica","7319":"Conscription","7320":"Bombard Tower","7321":"Murder Holes","7322":"Sappers","7324":"Bearded Axe","7325":"Supremacy","7326":"Atlatl","7327":"Warwolf","7342":"Burgundian Vineyards","7343":"Flemish Revolution","7344":"First Crusade","7345":"Hauberk","7348":"Szlachta Privileges","7349":"Lechitic Legacy","7350":"Wagenburg Tactics","7351":"Hussite Reforms","7357":"Medical Corps","7358":"Wootz Steel","7359":"Paiks","7360":"Mahayana","7361":"Kshatriyas","7362":"Frontier Guards","7368":"Great Wall","7369":"Stronghold","7370":"Marauders","7371":"Yasama","7372":"Careening","7373":"Dry Dock","7374":"Heated Shot","7376":"Hoardings","7377":"Shipwright","7378":"Siege Engineers","7379":"Hul\'che Javelineers","7380":"Eupseong","7398":"Cuman Mercenaries","7399":"Hill Forts","7400":"Tower Shields","7403":"Supplies","7408":"Spies/Treason","7409":"Bloodlines","7410":"Caravan","7411":"Thumb Ring","7412":"Heresy","7415":"Parthian Tactics","7416":"Theocracy","7419":"Yeomen","7420":"El Dorado","7421":"Furor Celtica","7422":"Drill","7423":"Mahouts","7424":"Zealotry","7425":"Artillery","7426":"Crenellations","7427":"Anarchy","7428":"Atheism","7429":"Garland Wars","7431":"Bogsveigar","7432":"Rocketry","7435":"Herbal Medicine","7438":"Shinkichon","7439":"Perfusion","7444":"Ballistas","7445":"Comitatenses","7447":"Counterweights","7448":"Detinets","7450":"Gambesons","9681":"Civilization","9799":"Technology Tree","10271":"Britons","10272":"Franks","10273":"Goths","10274":"Teutons","10275":"Japanese","10276":"Chinese","10277":"Byzantines","10278":"Persians","10279":"Saracens","10280":"Turks","10281":"Vikings","10282":"Mongols","10283":"Celts","10284":"Spanish","10285":"Aztecs","10286":"Mayans","10287":"Huns","10288":"Koreans","10289":"Italians","10290":"Hindustanis","10291":"Incas","10292":"Magyars","10293":"Slavs","10294":"Portuguese","10295":"Ethiopians","10296":"Malians","10297":"Berbers","10298":"Khmer","10299":"Malay","10300":"Burmese","10301":"Vietnamese","10302":"Bulgarians","10303":"Tatars","10304":"Cumans","10305":"Lithuanians","10306":"Burgundians","10307":"Sicilians","10308":"Poles","10309":"Bohemians","10310":"Dravidians","10311":"Bengalis","10312":"Gurjaras","10313":"Romans","19052":"Trade Cart","21057":"Konnik (Dismounted)","21058":"Elite Konnik (Dismounted)","21096":"Ratha (Melee)","21097":"Elite Ratha (Melee)","21104":"Ratha","21105":"Elite Ratha","26009":"Create <b>Steppe Lancer</b> (‹cost›)<br>\\nLight cavalry unit with increased attack range. Strong in groups. Weak vs. Camel Riders and archers.<i> Upgrades: attack, armor (Blacksmith); speed, hit points (Stable); creation speed, to Elite Steppe Lancer 900F, 550G (Stable); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26010":"Create <b>Elite Steppe Lancer</b> (‹cost›)<br>\\nLight cavalry unit with increased attack range. Strong in groups. Weak vs. Camel Riders and archers.<i> Upgrades: attack, armor (Blacksmith); speed, hit points (Stable); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26040":"Create <b>Xolotl Warrior</b> (‹cost›)<br>\\nMesoamerican cavalry unit. Strong vs. infantry and siege. Weak vs. Pikemen and Camel Riders. <i> Upgrades: attack (Blacksmith); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26052":"Create <b>Centurion</b> (‹cost›)<br>\\nRoman unique cavalry unit. Increases movement and attack speed of nearby Militia-line units. Strong vs. infantry. Weak vs. Pikemen and Camel Riders. <i> Upgrades: attack, armor (Blacksmith); speed, hit points (Stable); creation speed, to Elite Centurion 1100F, 900G (Castle); more resistant to Monks.</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26053":"Create <b>Elite Centurion</b> (‹cost›)<br>\\nRoman unique cavalry unit. Increases movement and attack speed of nearby Militia-line units. Strong vs. infantry. Weak vs. Pikemen and Camel Riders.<i> Upgrades: attack, armor (Blacksmith); speed, hit points (Stable); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26054":"Create <b>Legionary</b> (‹cost›)<br>\\nRoman unique infantry unit. Strong vs. buildings and infantry. Weak vs. archers at long range.<i> Upgrades: attack, armor (Blacksmith); cost, speed (Barracks); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26055":"Build <b>Dromon</b> (‹cost›)<br>\\nAnti-building siege warship with long range and area of effect attack, but cannot attack enemies at close range. Strong vs. buildings. Weak vs. other units.<i> Upgrades: armor, cost, speed (Dock); attack, range (University); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26068":"Create <b>Knight</b> (‹cost›)<br>\\nPowerful all-purpose cavalry. Strong vs. infantry and archers. Weak vs. Pikemen, Camel Riders, and Monks.<i> Upgrades: attack, armor (Blacksmith); speed, hit points, to Cavalier 300F, 300G (Stable); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26070":"Create <b>Cavalier</b> (‹cost›)<br>\\nPowerful all-purpose cavalry. Strong vs. infantry and archers. Weak vs. Pikemen, Camel Riders, and Monks.<i> Upgrades: attack, armor (Blacksmith); speed, hit points, to Paladin 1300F, 750G (Stable); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26078":"Create <b>Spearman</b> (‹cost›)<br>\\nAnti-cavalry infantry unit. Strong vs. mounted units, especially elephants. Weak vs. archers and infantry.<i> Upgrades: attack, armor (Blacksmith); speed, to Pikeman 160F, 90G (Barracks); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26079":"Create <b>Militia</b> (‹cost›)<br>\\nAll-purpose infantry unit. Strong vs. buildings and infantry. Weak vs. archers at long range.<i> Upgrades: attack, armor (Blacksmith); cost, speed, to Man-at-Arms 100F, 40G (Barracks); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26080":"Create <b>Man-at-Arms</b> (‹cost›)<br>\\nAll-purpose infantry unit. Strong vs. buildings and infantry. Weak vs. archers at long range.<i> Upgrades: attack, armor (Blacksmith); cost, speed, to Long Swordsman 150F, 65G (Barracks); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26081":"Create <b>Long Swordsman</b> (‹cost›)<br>\\nAll-purpose infantry unit. Strong vs. buildings and infantry. Weak vs. archers at long range.<i> Upgrades: attack, armor (Blacksmith); cost, speed, to Two-Handed Swordsman 300F, 100G or Legionary 800F, 400G (Barracks); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26083":"Create <b>Archer</b> (‹cost›)<br>\\nRanged unit. Strong vs. units at long range. Weak vs. Skirmishers and units at close range.<i> Upgrades: attack, range, armor (Blacksmith); attack, accuracy (University); accuracy, to Crossbowman 175F, 125G (Archery Range); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26084":"Create <b>Crossbowman</b> (‹cost›)<br>\\nRanged unit. Strong vs. units at long range. Weak vs. Elite Skirmishers, Mangonels, and units at close range.<i> Upgrades: attack, range, armor (Blacksmith); attack, accuracy (University); accuracy, to Arbalester 450F, 400G (Archery Range); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26085":"Create <b>Cavalry Archer</b> (‹cost›)<br>\\nMounted archer. Strong vs. slow units at long range. Weak vs. Elite Skirmishers and units at close range.<i> Upgrades: speed, hit points (Stable); attack, range, armor (Blacksmith); attack, accuracy (University); accuracy, armor, to Heavy Cavalry Archer 900F, 500G (Archery Range); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26086":"Create <b>Hand Cannoneer</b> (‹cost›)<br>\\nGunpowder unit with powerful attack, but inaccurate at long range. Strong vs. infantry. Weak vs. Elite Skirmishers and archers.<i> Upgrades: armor (Blacksmith); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26087":"Create <b>Elite Skirmisher</b> (‹cost›)<br>\\nRanged anti-archer unit that cannot attack at close range. Strong vs. archers. Weak vs. units at close range.<i> Upgrades: attack, range, armor (Blacksmith); attack, accuracy (University); accuracy, to Imperial Skirmisher 300W, 300G (Archery Range); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26088":"Create <b>Skirmisher</b> (‹cost›)<br>\\nRanged anti-archer unit that cannot attack at close range. Strong vs. archers. Weak vs. units at close range.<i> Upgrades: attack, range, armor (Blacksmith); attack, accuracy (University); accuracy, to Elite Skirmisher 230W, 130G (Archery Range); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26089":"Build <b>Trade Cog</b> (‹cost›)<br>\\nTrade unit used for generating gold at another player\'s Dock. To trade, click the Trade Cog then right-click another player\'s Dock. Will return with gold to your Dock.<i> Upgrades: generate more gold (Market); armor, cost (Dock); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26090":"Build <b>Fishing Ship</b> (‹cost›)<br>\\nGathers food from fish and Fish Traps. Builds Fish Traps.<i> Upgrades: armor, cost, speed, efficiency (Dock); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26091":"Build <b>War Galley</b> (‹cost›)<br>\\nAll-purpose warship with ranged attack. Weak vs. Fire Ships.<i> Upgrades: armor, cost, speed, to Galleon 400F, 315W (Dock); attack, range (Blacksmith); attack, accuracy (University); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26093":"Build <b>Bombard Cannon</b> (‹cost›)<br>\\nSiege weapon with long range. Strong vs. buildings and siege weapons. Weak vs. melee units.<i> Upgrades: attack, range (University); to Houfnice 1100F, 800G (Siege Workshop); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26094":"Build <b>Battering Ram</b> (‹cost›)<br>\\nAnti-building siege weapon. Resistant to most ranged attacks. Garrisoned infantry increase speed and attack.<i> Upgrades: attack (University); to Capped Ram 300F (Siege Workshop); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range› ‹garrison›","26095":"Build <b>Mangonel</b> (‹cost›)<br>\\nRanged siege weapon with area of effect attack, but cannot attack enemies at close range. Strong vs. tight groups of units. Can attack ground.<i> Upgrades: attack, range (University); to Onager 800F, 500G (Siege Workshop); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26096":"Build <b>Scorpion</b> (‹cost›)<br>\\nAnti-unit siege weapon. Fires bolts that pierce multiple units. Strong vs. large groups of units. Weak vs. cavalry and siege weapons.<i> Upgrades: range, attack (University); to Heavy Scorpion 800F, 900W (Siege Workshop); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26097":"Build <b>Trebuchet</b> (‹cost›)<br>\\nPowerful anti-building siege weapon with long range. Must be packed to move, unpacked to attack. Cannot attack enemies at close range. Strong vs. buildings. Can attack ground and destroy trees.<i> Upgrades: attack, range (University); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26099":"Create <b>Monk</b> (‹cost›)<br>\\nConverts enemy units to your civilization. Heals friendly units (except ships and siege weapons). Strong vs. slow and non-ranged units. Weak vs. Light Cavalry and ranged units. Can collect Relics and bring them to Monasteries.<i> Upgrades: at Monastery.</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26100":"Build <b>Trade Cart</b> (‹cost›)<br>\\nTrade unit used for generating gold at another player\'s Market. To trade, click the Trade Cart then right-click another player\'s Market. Will return with gold to your Market.<i> Upgrades: generate more gold (Market); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26101":"Create <b>Cataphract</b> (‹cost›)<br>\\nByzantine unique cavalry unit. Strong vs. infantry. Weak vs. archers. <i> Upgrades: attack, armor (Blacksmith); speed, hit points (Stable); creation speed, to Elite Cataphract 1200F, 800G (Castle); more resistant to Monks.</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26102":"Create <b>Chu Ko Nu</b> (‹cost›)<br>\\nChinese unique archer with rapid-fire attack. Strong vs. infantry. Weak vs. archers and siege weapons. <i> Upgrades: attack, range (Blacksmith); accuracy (Archery Range); attack, accuracy (University); creation speed, to Elite Chu Ko Nu 760F, 760G (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26103":"Create <b>Mameluke</b> (‹cost›)<br>\\nSaracen unique camel unit with ranged melee attack. Strong vs. cavalry. Weak vs. archers and Pikemen. <i> Upgrades: attack, armor (Blacksmith); speed, hit points  (Stable); creation speed, to Elite Mameluke 600F, 500G (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26104":"Create <b>Huskarl</b> (‹cost›)<br>\\nGothic unique infantry unit with high pierce armor. Strong vs. archers and buildings. Weak vs. cavalry. <i> Upgrades: attack, armor (Blacksmith); speed (Barracks); creation speed, to Elite Huskarl 1200F, 550G (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26105":"Create <b>Janissary</b> (‹cost›)<br>\\nTurkish unique hand cannoneer with longer range and no minimum range. Strong vs. infantry. Weak vs. archers.<i> Upgrades: armor (Blacksmith); creation speed, to Elite Janissary 850F, 750G (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26106":"Build <b>Longboat</b> (‹cost›)<br>\\nViking unique ship that fires multiple arrows. Strong vs. War Galleys, land units, and buildings. <i> Upgrades: armor, cost, speed, to Elite Longboat 750F, 475G (Dock); attack, range (Blacksmith); attack, accuracy (University); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26107":"Create <b>Longbowman</b> (‹cost›)<br>\\nBritish unique archer with very long range. Strong vs. infantry. Weak vs. cavalry and Skirmishers. <i> Upgrades: attack, range, armor (Blacksmith); attack, accuracy (University); creation speed, to Elite Longbowman 850F, 850G (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26108":"Create <b>Mangudai</b> (‹cost›)<br>\\nMongol unique cavalry archer with fast-firing attack. Strong vs. siege weapons and infantry. Weak vs. Skirmishers, Pikemen, and Camel Riders. <i> Upgrades: attack, range, armor (Blacksmith); speed, hit points (Stable); accuracy, armor (Archery Range); attack, accuracy (University); creation speed, to Elite Mangudai 1100F, 675G (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26109":"Create <b>War Elephant</b> (‹cost›)<br>\\nPersian unique unit. Slow and powerful cavalry. Strong vs. buildings and units at close range. Weak vs. Monks. <i> Upgrades: attack, armor (Blacksmith); speed, hit points  (Stable); creation speed, to Elite War Elephant 1600F, 1200G (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26110":"Create <b>Samurai</b> (‹cost›)<br>\\nJapanese unique infantry unit with fast attack. Strong vs. unique units and infantry. Weak vs. archers. <i> Upgrades: attack, armor (Blacksmith); speed (Barracks); creation speed, to Elite Samurai 750F, 650G (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26111":"Create <b>Throwing Axeman</b> (‹cost›)<br>\\nFrankish unique infantry unit with ranged melee attack. Strong vs. infantry. Weak vs. archers and siege weapons. <i> Upgrades: attack, armor (Blacksmith); speed (Barracks); creation speed, to Elite Throwing Axeman 1000F, 750G (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26112":"Create <b>Teutonic Knight</b> (‹cost›)<br>\\nTeutonic unique infantry unit. Slow and powerful. Strong vs. melee units. Weak vs. archers and Scorpions. <i> Upgrades: attack, armor (Blacksmith); speed (Barracks); creation speed, to Elite Teutonic Knight 950F, 500G (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26113":"Create <b>Woad Raider</b> (‹cost›)<br>\\nCeltic unique infantry unit. Fast-moving. Strong vs. infantry and siege weapons. Weak vs. archers and cavalry. <i> Upgrades: attack, armor (Blacksmith); speed (Barracks); creation speed, to Elite Woad Raider 1000F, 800G (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26114":"Create <b>Condottiero</b> (‹cost›)<br>\\nFast anti-gunpowder infantry. Strong vs. gunpowder units. Weak vs. cavalry and archers. Trainable by Italians and their allies.<i> Upgrades: attack, armor (Blacksmith); speed (Barracks); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26121":"Create <b>Villager</b> (‹cost›)<br>\\nGathers resources. Builds and repairs buildings. Also repairs ships and siege weapons.<i> Upgrades: hit points, armor, efficiency (Town Center); wood resource-gathering (Lumber Camp); stone, gold resource-gathering (Mining Camp); build speed (University); attack (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26128":"Build <b>Archery Range</b> (‹cost›)<br>\\nUsed to train and upgrade archer units. <i> Upgrades: production speed (Castle); line of sight (Town Center); hit points, armor (University); more resistant to Monks (Monastery).</i> <br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range› ‹garrison›","26129":"Create <b>Organ Gun</b> (‹cost›)<br>\\nPortuguese unique siege unit. Fires a volley of bullets. Strong vs. large groups of units. Weak vs. cavalry and Mangonels.<i> Upgrades: attack, range (University); creation speed, to Elite Organ Gun 1200F, 500G (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26130":"Create <b>Elite Organ Gun</b> (‹cost›)<br>\\nPortuguese unique siege unit. Fires a volley of bullets. Strong vs. large groups of units. Weak vs. cavalry and Mangonels.<i> Upgrades: attack, range (University); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26131":"Build <b>Blacksmith</b> (‹cost›)<br>\\nUsed to research technologies to improve armor and attack of units.<b><i> Required for Siege Workshop.</b></i> <i> Upgrades: line of sight (Town Center); hit points, armor (University); more resistant to Monks (Monastery).</i> <br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26132":"Create <b>Caravel</b> (‹cost›)<br>\\nPortuguese unique ship that fires bolts that pierce multiple units. Strong vs. large groups of ships. Weak vs. Fire Ships.<i> Upgrades: armor, cost, speed, to Elite Caravel 700F, 525G (Dock); attack, range (Blacksmith); attack, accuracy (University); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26133":"Create <b>Elite Caravel</b> (‹cost›)<br>\\nPortuguese unique ship that fires bolts that pierce multiple units. Strong vs. large groups of ships. Weak vs. Fire Ships.<i> Upgrades: armor, speed, cost (Dock); attack, range (Blacksmith); attack, accuracy (University); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26134":"Create <b>Camel Archer</b> (‹cost›)<br>\\nBerber unique mounted archer. Strong vs. Cavalry Archers and infantry. Weak vs. Pikemen, Skirmishers, and Camel Riders.<i> Upgrades: attack, range, armor (Blacksmith); speed, hit points (Stable); accuracy, armor (Archery Range); attack, accuracy (University); creation speed, to Elite Camel Archer 1000W, 500G (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26135":"Build <b>Barracks</b> (‹cost›)<br>\\nUsed to train and upgrade infantry units.<b><i> Required for Archery Range, Stable.</b></i> <i> Upgrades: production speed (Castle); line of sight (Town Center); hit points, armor (University); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range› ‹garrison›","26136":"Create <b>Elite Camel Archer</b> (‹cost›)<br>\\nBerber unique mounted archer. Strong vs. Cavalry Archers and infantry. Weak vs. Pikemen, Skirmishers, and Camel Riders.<i> Upgrades: attack, armor (Blacksmith); speed, hit points (Stable); accuracy, armor (Archery Range); attack, accuracy (University); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26137":"Create <b>Genitour</b> (‹cost›)<br>\\nMounted skirmisher. Strong vs. archers. Weak vs. units at close range. Trainable by Berbers and their allies.<i> Upgrades: speed, hit points (Stable); attack, range, armor (Blacksmith); attack, accuracy (University); accuracy, to Elite Genitour 500F, 450W (Archery Range); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26138":"Build <b>Monastery</b> (‹cost›)<br>\\nUsed to train and upgrade Monks. Garrison relics to generate gold. Cannot be converted by enemy Monks.<i> Upgrades: line of sight (Town Center); hit points, armor (University).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range› ‹garrison›","26139":"Create <b>Elite Genitour</b> (‹cost›)<br>\\nMounted skirmisher. Strong vs. archers. Weak vs. units at close range. Trainable by Berbers and their allies.<i> Upgrades: speed, hit points (Stable); attack, range, armor (Blacksmith); attack, accuracy (University); accuracy (Archery Range); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26140":"Create <b>Gbeto</b> (‹cost›)<br>\\nMalian unique infantry unit with ranged melee attack. Fast-moving. Strong vs. infantry. Weak vs. archers and siege weapons.<i> Upgrades: armor (Blacksmith); creation speed, to Elite Gbeto 900F, 600G (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26141":"Create <b>Elite Gbeto</b> (‹cost›)<br>\\nMalian unique infantry unit with ranged melee attack. Fast-moving. Strong vs. infantry. Weak vs. archers and siege weapons.<i> Upgrades: armor (Blacksmith); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26142":"Build <b>Castle</b> (‹cost›)<br>\\nUsed to train and upgrade your unique unit, build Trebuchets, and research technologies. Automatically attacks enemies within range. Units can garrison inside for protection. Ranged Units and Villagers provide additional projectiles. Provides 20 population. Cannot be converted by enemy Monks.<i> Upgrades: production speed (Castle); line of sight (Town Center); hit points, armor, accuracy (University); attack, range (Blacksmith); attack, range (Castle).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range› ‹garrison›","26143":"Create <b>Shotel Warrior</b> (‹cost›)<br>\\nEthiopian unique infantry with high attack and fast training speed. Fast-moving. Strong vs. infantry. Weak vs. archers.<i> Upgrades: attack, armor (Blacksmith); speed (Barracks); creation speed, to Elite Shotel Warrior 900F, 450G (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26144":"Build <b>Dock</b> (‹cost›)<br>\\nUsed to build and upgrade ships, deposit food from Fishing Ships, and trade with other players by sea.<i> Upgrades: line of sight (Town Center); hit points, armor (University); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range› ‹garrison›","26145":"Create <b>Elite Shotel Warrior</b> (‹cost›)<br>\\nEthiopian unique infantry with high attack and fast training speed. Fast-moving. Strong vs. infantry. Weak vs. archers.<i> Upgrades: attack, armor (Blacksmith); speed (Barracks); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26146":"Create <b>Ballista Elephant</b> (‹cost›)<br>\\nKhmer unique elephant equipped with a Scorpion. Can destroy trees. Strong vs. infantry and archers. Weak vs. cavalry and siege weapons.<i> Upgrades: armor (Blacksmith); speed, hit points (Stable); attack, range (University); creation speed, to Elite Ballista Elephant 1000F, 500G (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26147":"Create <b>Elite Ballista Elephant</b> (‹cost›)<br>\\nKhmer unique elephant equipped with a Scorpion. Can destroy trees. Strong vs. infantry and archers. Weak vs. cavalry and siege weapons.<i> Upgrades: armor (Blacksmith); speed, hit points (Stable); attack, range (University); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26148":"Create <b>Karambit Warrior</b> (‹cost›)<br>\\nMalay unique infantry unit. Cheap and only takes half a population unit. Strong in high numbers. Weak vs. cavalry and archers.<i> Upgrades: attack, armor (Blacksmith); speed (Barracks); creation speed, to Elite Karambit Warrior 900F, 600G (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26149":"Build <b>Farm</b> (‹cost›)<br>\\nRenewable food source. Provides a limited amount of food before it goes fallow and must be rebuilt. Only one Villager may work a Farm at a time. You can farm abandoned enemy Farms. Cannot be converted by enemy Monks.<i> Upgrades: food (Mill); hit points (University).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26150":"Create <b>Elite Karambit Warrior</b> (‹cost›)<br>\\nMalay unique infantry unit. Cheap and only takes half a population unit. Strong in high numbers. Weak vs. cavalry and archers.<i> Upgrades: attack, armor (Blacksmith); speed (Barracks); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26151":"Create <b>Arambai</b> (‹cost›)<br>\\nBurmese unique cavalry archer with a powerful but inaccurate dart attack. Strong vs. infantry and cavalry. Weak vs. archers.<i> Upgrades: armor (Blacksmith); speed, hit points (Stable); armor (Archery Range); attack, accuracy (University); creation speed, to Elite Arambai 1000F, 750G (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26152":"Create <b>Elite Arambai</b> (‹cost›)<br>\\nBurmese unique cavalry archer with a powerful but inaccurate dart attack. Strong vs. infantry and cavalry. Weak vs. archers.<i> Upgrades: armor (Blacksmith); speed, hit points (Stable); armor (Archery Range); accuracy (University); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26154":"Build <b>Guard Tower</b> (‹cost›)<br>\\nTower with a ranged attack. Units can garrison inside for protection. Ranged Units and Villagers shoot additional projectiles. Strong vs. archers. Weak vs.units at close range, especially Rams.<i> Upgrades: line of sight (Town Center); attack, range (Blacksmith); attack, hit points, armor, ship attack; to Keep 500F, 350W (University).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range› ‹garrison›","26155":"Build <b>Keep</b> (‹cost›)<br>\\nTower with a ranged attack. Units can garrison inside for protection. Ranged Units and Villagers shoot additional projectiles. Strong vs. archers. Weak vs.units at close range, especially Rams.<i> Upgrades: line of sight (Town Center); attack, range (Blacksmith); attack, hit points, armor, ship attack (University).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range› ‹garrison›","26156":"Build <b>Bombard Tower</b> (‹cost›)<br>\\nGunpowder tower with a powerful ranged attack. Units can garrison inside for protection. Strong vs. ships.<i> Upgrades: line of sight (Town Center); attack, range (Blacksmith); hit points, armor, ship attack (University).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range› ‹garrison›","26157":"Build <b>Mill</b> (‹cost›)<br>\\nUsed to deposit food and research farming technologies. Build near forage bushes or other source of food to gather food faster. <b><i> Required for Farm, Market.</b></i> <i> Upgrades: line of sight (Town Center); hit points, armor (University); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range› ‹garrison›","26159":"Build <b>Feitoria</b> (‹cost›)<br>\\nEconomic building. Generates resources without the need for villagers. Unique building of the Portuguese. Requires 20 population.<i> Upgrades: line of sight (Town Center); hit points, armor (University).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range› ‹garrison›","26160":"Build <b>Fire Galley</b> (‹cost›)<br>\\nWarship that spews fire at close range. Strong vs. Galleys. Weak vs. Demolition Rafts.<i> Upgrades: armor, speed, cost, to Fire Ship 230F, 100G (Dock); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26161":"Build <b>Market</b> (‹cost›)<br>\\nUsed to buy and sell resources, trade with other players by land, and research trade technologies. Required to send resources to other players. Enables you to see the line of sight of your allies.<i> Upgrades: line of sight (Town Center); hit points, armor (University); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range› ‹garrison›","26162":"Build <b>Demolition Raft</b> (‹cost›)<br>\\nDemolition ship armed with explosives. Strong vs. Fire Galleys and buildings. Self-destructs when used.<i> Upgrades: armor, speed, cost, to Demolition Ship 230F, 100G (Dock); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26164":"Build <b>Town Center</b> (‹cost›)<br>\\nUsed to train Villagers, deposit resources, advance to the next Age, and research technologies. Units can garrison inside for protection. Ranged Units and Villagers provide additional projectiles. Provides 5 population. Cannot be converted by enemy Monks.<i> Upgrades: line of sight (Town Center); hit points, armor, accuracy (University); attack (Blacksmith).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range› ‹garrison›","26165":"Create <b>Rattan Archer</b> (‹cost›)<br>\\nVietnamese unique archer with high pierce armor. Strong vs. archers and infantry. Weak vs. cavalry and Skirmishers.<i> Upgrades: attack, range, armor (Blacksmith); accuracy, armor (Archery Range); attack, accuracy (University); creation speed, to Elite Rattan Archer 1000F, 750G (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26166":"Create <b>Elite Rattan Archer</b> (‹cost›)<br>\\nVietnamese unique archer with high pierce armor. Strong vs. archers and infantry. Weak vs. cavalry and Skirmishers.<i> Upgrades: attack, range, armor (Blacksmith); accuracy, armor (Archery Range); attack, accuracy (University); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26167":"Create <b>Battle Elephant</b> (‹cost›)<br>\\nSlow and heavy cavalry. Strong vs. cavalry, infantry, and archers. Weak vs. Monks and Pikemen.<i> Upgrades: attack, armor (Blacksmith); speed, hit points, to Elite Battle Elephant 1100F, 700G (Stable); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26168":"Create <b>Elite Battle Elephant</b> (‹cost›)<br>\\nSlow and heavy cavalry. Strong vs. cavalry, infantry, and archers. Weak vs. Monks and Pikemen.<i> Upgrades: attack, armor (Blacksmith); speed, hit points (Stable); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26169":"Build <b>Siege Workshop</b> (‹cost›)<br>\\nUsed to build and upgrade siege weapons.<i> Upgrades: line of sight (Town Center); hit points, armor (University); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range› ‹garrison›","26171":"Build <b>Stable</b> (‹cost›)<br>\\nUsed to train and upgrade cavalry units.<i> Upgrades: production speed (Castle); line of sight (Town Center); hit points, armor (University); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range› ‹garrison›","26176":"Build <b>University</b> (‹cost›)<br>\\nUsed to research technologies to improve units and buildings.<i> Upgrades: line of sight (Town Center); hit points, armor (University); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26178":"Build <b>Watch Tower</b> (‹cost›)<br>\\nTower with a ranged attack. Units can garrison inside for protection. Ranged Units and Villagers shoot additional projectiles. Strong vs. archers. Weak vs.units at close range, especially Rams.<i> Upgrades: line of sight (Town Center); attack, range (Blacksmith); attack, hit points, armor, ship attack; to Guard Tower 100F, 250W (University).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range› ‹garrison›","26182":"Build <b>Wonder</b> (‹cost›)<br>\\nA Wonder of the World that demonstrates the superiority of your civilization. Constructing a Wonder that stands for a certain period of time is one way to win the game. Cannot be converted by enemy Monks.<br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26185":"Build <b>Gate</b> (‹cost›)<br>\\nCan be built into existing walls to allow movement of friendly units. Can be locked and unlocked. Cannot be converted by enemy Monks.<i> Upgrades: line of sight (Town Center); hit points, armor. Researching Fortified Wall (University) increases gate hit points.</i><br>\\n‹hp›","26186":"Build <b>Palisade Gate</b> (‹cost›)<br>\\nCan be built into existing walls to allow movement of friendly units. Can be locked and unlocked. Cannot be converted by enemy Monks.<i> Upgrades: line of sight (Town Center); hit points, armor (university).</i><br>\\n‹hp›","26190":"Create <b>Imperial Skirmisher</b> (‹cost›)<br>\\nRanged anti-archer unit that cannot attack at close range. Strong vs. archers. Weak vs. units at close range. Trainable by Vietnamese and their allies.<i> Upgrades: attack, range, armor (Blacksmith); attack, accuracy (University); accuracy (Archery Range); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26202":"Build <b>Palisade Wall</b> (‹cost›)<br>\\nWooden wall that is cheap and easy to build. Slows down your enemies and warns you of their approach. Cannot be converted by enemy Monks.<i> Upgrades: line of sight (Town Center); hit points, armor (University).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26203":"Build <b>Stone Wall</b> (‹cost›)<br>\\nStone wall that is difficult to breach without siege weapons. Slows down your enemies and warns you of their approach. Cannot be converted by enemy Monks.<i> Upgrades: line of sight (Town Center); hit points, armor, to Fortified Wall 200F, 100W (University).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26204":"Build <b>Fortified Wall</b> (‹cost›)<br>\\nStone wall that is difficult to breach without siege weapons. Slows down your enemies and warns you of their approach. Cannot be converted by enemy Monks.<i> Upgrades: line of sight (Town Center); hit points, armor (University).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26249":"Build <b>Harbor</b> (‹cost›)<br>\\nUsed to build and upgrade ships, deposit food from Fishing Ships, and trade with other players by sea. Unique building of the Malay. Automatically attacks enemies within range.<i> Upgrades: attack, range (Blacksmith); line of sight (Town Center); attack, accuracy, hit points, armor (University); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range› ‹garrison›","26287":"Build <b>Cannon Galleon</b> (‹cost›)<br>\\nAnti-building siege warship with long range, but cannot attack enemies at close range. Strong vs. buildings. Weak vs. other units.<i> Upgrades: armor, cost, speed, to Elite Cannon Galleon 525W, 500G (Dock); attack, range (University); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26288":"Create <b>Konnik</b> (‹cost›)<br>\\nBulgarian unique cavalry unit that fights on as infantry when felled. Strong vs. infantry and archers. Weak vs. Camel Riders and Monks.<i> Upgrades: attack, armor (Blacksmith); speed, hit points (Stable); creation speed, to Elite Konnik 1000F, 750G (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26289":"Build <b>Capped Ram</b> (‹cost›)<br>\\nAnti-building siege weapon. Resistant to most ranged attacks. Garrisoned infantry increase speed and attack.<i> Upgrades: attack (University); to Siege Ram 1000F (Siege Workshop); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range› ‹garrison›","26290":"Create <b>Elite Konnik</b> (‹cost›)<br>\\nBulgarian unique cavalry unit that fights on as infantry when felled. Strong vs. infantry and archers. Weak vs. Camel Riders and Monks.<i> Upgrades: attack, armor (Blacksmith); speed, hit points (Stable); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26309":"Build <b>Galleon</b> (‹cost›)<br>\\nAll-purpose warship with ranged attack. Weak vs. Fire Ships.<i> Upgrades: armor, cost, speed (Dock); attack, range (Blacksmith); attack, accuracy (University); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26313":"Create <b>Keshik</b> (‹cost›)<br>\\nTatar unique cavalry unit that generates gold when fighting other units.<i> Upgrades: attack, armor (Blacksmith); speed, hit points (Stable); creation speed, to Elite Keshik 700F, 900G (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26314":"Create <b>Elite Keshik</b> (‹cost›)<br>\\nTatar unique cavalry unit that generates gold when fighting other units.<i> Upgrades: attack, armor (Blacksmith); speed, hit points (Stable); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26315":"Create <b>Kipchak</b> (‹cost›)<br>\\nCuman unique cavalry archer with rapid-fire attack. Strong vs. infantry. Weak vs. Skirmishers.<i> Upgrades: attack, range, armor (Blacksmith); speed, hit points (Stable); accuracy, armor (Archery Range); attack, accuracy (University); creation speed, to Elite Kipchak 1100F, 1000W (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26326":"Create <b>Scout Cavalry</b> (‹cost›)<br>\\nFast cavalry for scouting and raiding. Resistant to conversion. Strong vs. Monks. Weak vs. Pikemen and Camel Riders.<i> Upgrades: attack, armor (Blacksmith); speed, hit points, to Light Cavalry 150F, 50G (Stable); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26327":"Create <b>Elite Kipchak</b> (‹cost›)<br>\\nCuman unique cavalry archer with rapid-fire attack. Strong vs. infantry. Weak vs. Skirmishers.<i> Upgrades: attack, range, armor (Blacksmith); speed, hit points (Stable); accuracy, armor (Archery Range); attack, accuracy (University); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26328":"Create <b>Leitis</b> (‹cost›)<br>\\nLithuanian unique cavalry unit with attack that ignores armor. Strong vs. armored units.<i> Upgrades: attack, armor (Blacksmith); speed, hit points (Stable); creation speed, to Elite Leitis 750F, 750G (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26329":"Create <b>Elite Leitis</b> (‹cost›)<br>\\nLithuanian unique cavalry unit with attack that ignores armor. Strong vs. armored units.<i> Upgrades: attack, armor (Blacksmith); speed, hit points (Stable); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26344":"Build <b>House</b> (‹cost›)<br>\\nProvides 5 population each. Your current/supportable population is shown at the top of the screen.<i> Upgrades: line of sight (Town Center); hit points, armor (University); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range› ‹garrison›","26349":"Build <b>Krepost</b> (‹cost›)<br>\\nFortification used to train your unique unit. Unique building of the Bulgarians. Units can garrison inside for protection. Ranged Units and Villagers shoot additional projectiles. Provides 20 population. Cannot be converted by enemy Monks.<i> Upgrades: production speed (Castle); line of sight (Town Center); hit points, armor, accuracy (University); attack, range (Blacksmith).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range› ‹garrison›","26375":"Create <b>Flaming Camel</b> (‹cost›)<br>\\nIncendiary camel loaded with flammable hay and brush. Strong vs. mounted units, especially elephants. Weak vs. archers and infantry. Self-destructs when used.<i> Upgrades: attack (University); speed, hit points (Stable); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26381":"Build <b>Trebuchet</b> (‹cost›)<br>\\nPowerful anti-building siege weapon with long range. Must be packed to move, unpacked to attack. Cannot attack enemies at close range. Strong vs. buildings. Can attack ground and destroy trees.<i> Upgrades: attack, range (University); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26403":"Create <b>Urumi Swordsman</b> (‹cost›)<br>\\nDravidian unique infantry unit which can charge its attack. Strong vs. buildings and infantry. Weak vs. archers at long range.<i> Upgrades: attack, armor (Blacksmith); speed (Barracks); creation speed, to Elite Urumi Swordsman 900F, 450G (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26408":"Create <b>Pikeman</b> (‹cost›)<br>\\nAnti-cavalry infantry unit. Strong vs. mounted units, especially elephants. Weak vs. archers and infantry.<i> Upgrades: attack, armor (Blacksmith); speed, to Halberdier 300F, 600G (Barracks); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26409":"Create <b>Halberdier</b> (‹cost›)<br>\\nAnti-cavalry infantry unit. Strong vs. mounted units, especially elephants. Weak vs. archers and infantry.<i> Upgrades: attack, armor (Blacksmith); speed (Barracks); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26411":"Create <b>Two-Handed Swordsman</b> (‹cost›)<br>\\nAll-purpose infantry unit. Strong vs. buildings and infantry. Weak vs. archers at long range.<i> Upgrades: attack, armor (Blacksmith); cost, speed, to Champion 750F, 350G (Barracks); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26412":"Create <b>Heavy Cavalry Archer</b> (‹cost›)<br>\\nMounted archer. Strong vs. slow units at long range. Weak vs. Elite Skirmishers and units at close range.<i> Upgrades: attack, range, armor (Blacksmith); accuracy, armor (Archery Range); attack, accuracy (University); speed, hit points (Stable); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26413":"Create <b>Elite Urumi Swordsman</b> (‹cost›)<br>\\nDravidian unique infantry unit which can charge its attack. Strong vs. buildings and infantry. Weak vs. archers at long range.<i> Upgrades: attack, armor (Blacksmith); speed (Barracks); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26416":"Create <b>Camel Rider</b> (‹cost›)<br>\\nFast anti-cavalry unit. Strong vs. cavalry. Weak vs. Spearmen, Monks, and archers.<i> Upgrades: attack, armor (Blacksmith); speed, to Heavy Camel Rider 325F, 360G (Stable); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26417":"Create <b>Heavy Camel Rider</b> (‹cost›)<br>\\nFast anti-cavalry unit. Strong vs. cavalry. Weak vs. Pikemen, Monks, and archers.<i> Upgrades: attack, armor (Blacksmith); speed, hit points, to Imperial Camel Rider 1000F, 500G  (Stable); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26418":"Create <b>Arbalester</b> (‹cost›)<br>\\nRanged unit. Strong vs. units at long range. Weak vs. Elite Skirmishers, Onagers, and units at close range.<i> Upgrades: attack, range, armor (Blacksmith); accuracy (Archery Range); attack, accuracy (University); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26419":"Create <b>Imperial Camel Rider</b> (‹cost›)<br>\\nHindustani unique anti-cavalry unit. Fast-moving. Strong vs. cavalry. Weak vs. Pikemen, Monks, and archers.<i> Upgrades: attack, armor (Blacksmith); speed, hit points (Stable); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26421":"Create <b>Chakram Thrower</b> (‹cost›)<br>\\nGurjara unique infantry unit with ranged melee attack. Strong vs. infantry. Weak vs. archers and siege weapons. <i> Upgrades: attack, armor (Blacksmith); speed (Barracks); creation speed, to Elite Chakram Thrower 1000F, 650G (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26424":"Build <b>Demolition Ship</b> (‹cost›)<br>\\nDemolition ship armed with explosives. Strong vs. Fire Ships and buildings. Self-destructs when used.<i> Upgrades: armor, speed, cost, to Heavy Demolition Ship 200W, 300G (Dock); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26425":"Build <b>Heavy Demolition Ship</b> (‹cost›)<br>\\nDemolition ship armed with explosives. Strong vs. Fire Ships and buildings. Self-destructs when used.<i> Upgrades: armor, speed, cost (Dock); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26426":"Build <b>Fire Ship</b> (‹cost›)<br>\\nWarship that spews fire at close range. Strong vs. War Galleys. Weak vs. Demolition Ships.<i> Upgrades: armor, speed, cost, to Fast Fire Ship 280W, 250G (Dock); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26427":"Create <b>Elite Chakram Thrower</b> (‹cost›)<br>\\nGurjara unique infantry unit with ranged melee attack. Strong vs. infantry. Weak vs. archers and siege weapons. <i> Upgrades: attack, armor (Blacksmith); speed (Barracks); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26428":"Create <b>Armored Elephant</b> (‹cost›)<br>\\nAnti-building cavalry unit. Resistant to most ranged attacks. Weak vs. melee units. Cannot be converted by enemy Monks from distance.<i> Upgrades: attack, armor (Blacksmith); attack (University); speed, hit points (Stable); to Siege Elephant 850F (Siege Workshop); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26429":"Build <b>Fast Fire Ship</b> (‹cost›)<br>\\nWarship that spews fire at close range. Strong vs. War Galleys. Weak vs. Demolition Ships.<i> Upgrades: armor, speed, cost (Dock); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26430":"Create <b>Siege Elephant</b> (‹cost›)<br>\\nAnti-building cavalry unit. Resistant to most ranged attacks. Weak vs. melee units. Cannot be converted by enemy Monks from distance.<i> Upgrades: attack, armor (Blacksmith); attack (University); speed, hit points (Stable); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26431":"Create <b>Ghulam</b> (‹cost›)<br>\\nHindustani unique infantry unit that thrusts its spear through multiple targets. Strong vs. archers. Weak vs. cavalry. <i> Upgrades: attack, armor (Blacksmith); speed (Barracks); creation speed, to Elite Ghulam 950F, 575G (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26432":"Create <b>Elite Ghulam</b> (‹cost›)<br>\\nHindustani unique infantry unit that thrusts its spear through multiple targets. Strong vs. archers. Weak vs. cavalry. <i> Upgrades: attack, armor (Blacksmith); speed (Barracks); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26435":"Build <b>Thirisadai</b> (‹cost›)<br>\\nDravidian unique warship that fires multiple projectiles. Strong vs. warships.<i> Upgrades: armor, speed, cost (Dock); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26436":"Build <b>Galley</b> (‹cost›)<br>\\nAll-purpose warship with ranged attack. Weak vs. Fire Galleys.<i> Upgrades: armor, speed, cost, to War Galley 230F, 100G (Dock); attack, range (Blacksmith); attack, accuracy (University); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26437":"Create <b>Shrivamsha Rider</b> (‹cost›)<br>\\nGurjara unique light cavalry unit which can dodge projectiles. Strong vs. archers. Weak vs. Pikemen and Camel Riders.<i> Upgrades: attack, armor (Blacksmith); speed, hit points, to Elite Shrivamsha Rider 850F, 500G (Stable); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26438":"Create <b>Elite Shrivamsha Rider</b> (‹cost›)<br>\\nGurjara unique light cavalry unit which can dodge projectiles. Strong vs. archers. Weak vs. Pikemen and Camel Riders.<i> Upgrades: attack, armor (Blacksmith); speed, hit points (Stable); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26439":"Build <b>Heavy Scorpion</b> (‹cost›)<br>\\nAnti-unit siege weapon. Fires bolts that pierce multiple units. Strong vs. large groups of units. Weak vs. cavalry and siege weapons.<i> Upgrades: attack, range (University); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26440":"Build <b>Caravanserai</b> (‹cost›)<br>\\nEconomic building. Heals and increases speed of Trade Carts in a 10 tile radius. Unique building of the Hindustanis.<i> Upgrades: line of sight (Town Center); hit points, armor (University).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range› ‹garrison›","26441":"Create <b>Camel Scout</b> (‹cost›)<br>\\nGurjara unique scout unit. Strong vs. cavalry. Weak vs. Pikemen, Monks, and archers.<i> Upgrades: attack, armor (Blacksmith); speed, hit points (Stable); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26443":"Build <b>Transport Ship</b> (‹cost›)<br>\\nUsed to move units across water. Select the units you want to transport, then right-click on the Transport Ship to board them. Use the Unload button to unload units on the shore.<i> Upgrades: armor, speed, cost, capacity (Dock); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26444":"Create <b>Light Cavalry</b> (‹cost›)<br>\\nFast cavalry for scouting and raiding. Resistant to conversion. Strong vs. Monks. Weak vs. Pikemen and Camel Riders.<i> Upgrades: attack, armor (Blacksmith); speed, hit points, to Hussar 500F, 600G or Winged Hussar 600F, 800G (Stable); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26445":"Build <b>Siege Tower</b> (‹cost›)<br>\\nQuick land transport used to unload units over enemy walls. Resistant to archer attack. Cannot be used by mounted units.<i> Upgrades: more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range› ‹garrison›","26446":"Build <b>Siege Ram</b> (‹cost›)<br>\\nAnti-building siege weapon. Resistant to most ranged attacks. Garrisoned infantry increase speed and attack.<i> Upgrades: attack (University); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range› ‹garrison›","26447":"Create <b>Boyar</b> (‹cost›)<br>\\nSlavic unique cavalry unit. Resistant to melee attack.<i> Upgrades: attack, armor (Blacksmith); speed, hit points (Stable); creation speed, to Elite Boyar 1000F, 600G (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range› ","26448":"Build <b>Onager</b> (‹cost›)<br>\\nRanged siege weapon with area of effect attack, but cannot attack enemies at close range. Strong vs. tight groups of units. Can attack ground and destroy trees.<i> Upgrades: attack, range (University); to Siege Onager 1450F, 1000G (Siege Workshop); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26449":"Create <b>Elite Boyar</b> (‹cost›)<br>\\nSlavic unique cavalry unit. Resistant to melee attack.<i> Upgrades: attack, armor (Blacksmith); speed, hit points (Stable); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26451":"Create <b>Elite Cataphract</b> (‹cost›)<br>\\nByzantine unique cavalry unit. Strong vs. infantry. Weak vs. archers.<i> Upgrades: attack, armor (Blacksmith); speed, hit points (Stable); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26452":"Create <b>Elite Chu Ko Nu</b> (‹cost›)<br>\\nChinese unique archer with rapid-fire attack. Strong vs. infantry. Weak vs. archers and siege weapons.<i> Upgrades: attack, range, armor (Blacksmith); accuracy (Archery Range); attack, accuracy (University); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26453":"Create <b>Elite Mameluke</b> (‹cost›)<br>\\nSaracen unique camel unit with ranged melee attack. Strong vs. cavalry. Weak vs. archers.<i> Upgrades: attack, armor (Blacksmith); speed, hit points (Stable); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26454":"Create <b>Elite Huskarl</b> (‹cost›)<br>\\nGothic unique infantry unit with high pierce armor. Strong vs. archers and buildings. Weak vs. cavalry.<i> Upgrades: attack, armor (Blacksmith); speed (Barracks); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26455":"Create <b>Elite Janissary</b> (‹cost›)<br>\\nTurkish unique hand cannoneer with longer range and no minimum range. Strong vs. infantry. Weak vs. archers.<i> Upgrades: armor (Blacksmith); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26456":"Create <b>Elite Longbowman</b> (‹cost›)<br>\\nBritish unique archer with very long range. Strong vs. infantry. Weak vs. cavalry and Skirmishers.<i> Upgrades: attack, range, armor (Blacksmith); attack, accuracy (University); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26457":"Build <b>Elite Longboat</b> (‹cost›)<br>\\nViking unique ship that fires multiple arrows. Strong vs. War Galleys, land units, and buildings.<i> Upgrades: armor, speed, cost (Dock); attack, range (Blacksmith); attack, accuracy (University); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26458":"Create <b>Elite Mangudai</b> (‹cost›)<br>\\nMongol unique cavalry archer with fast-firing attack. Strong vs. siege weapons and infantry. Weak vs. Skirmishers, Pikemen, and Camel Riders.<i> Upgrades: attack, armor (Blacksmith); speed, hit points (Stable); accuracy, armor (Archery Range); attack, accuracy (University); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26459":"Create <b>Elite War Elephant</b> (‹cost›)<br>\\nPersian unique unit. Slow and powerful cavalry. Strong vs. buildings and units at close range. Weak vs. Monks.<i> Upgrades: attack, armor (Blacksmith); speed, hit points (Stable); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26460":"Create <b>Elite Samurai</b> (‹cost›)<br>\\nJapanese unique infantry unit with fast attack. Strong vs. unique units and infantry. Weak vs. archers.<i> Upgrades: attack, armor (Blacksmith); speed (Barracks); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26461":"Create <b>Elite Throwing Axeman</b> (‹cost›)<br>\\nFrankish unique infantry unit with ranged melee attack. Strong vs. infantry. Weak vs. archers and siege weapons.<i> Upgrades: attack, armor (Blacksmith); speed (Barracks); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26462":"Create <b>Elite Teutonic Knight</b> (‹cost›)<br>\\nTeutonic unique infantry unit. Slow and powerful. Strong vs. melee units. Weak vs. archers and Scorpions.<i> Upgrades: attack, armor (Blacksmith); speed (Barracks); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26463":"Create <b>Elite Woad Raider</b> (‹cost›)<br>\\nCeltic unique infantry unit. Fast-moving. Strong vs. infantry and siege weapons. Weak vs. archers and cavalry.<i> Upgrades: attack, armor (Blacksmith); speed (Barracks); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26464":"Build <b>Lumber Camp</b> (‹cost›)<br>\\nUsed to deposit wood and research wood-gathering technologies. Build near forests to gather wood faster. <i> Upgrades: line of sight (Town Center); hit points, armor (University); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26469":"Create <b>Champion</b> (‹cost›)<br>\\nAll-purpose infantry unit. Strong vs. buildings and infantry. Weak vs. archers at long range.<i> Upgrades: attack, armor (Blacksmith); cost, speed (Barracks); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26471":"Create <b>Paladin</b> (‹cost›)<br>\\nPowerful all-purpose cavalry. Strong vs. infantry and archers. Weak vs. Halberdiers, Heavy Camel Riders, and Monks.<i> Upgrades: attack, armor (Blacksmith); speed, hit points (Stable); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26487":"Build <b>Mining Camp</b> (‹cost›)<br>\\nUsed to deposit stone and gold and research mining technologies. Build near stone or gold mines to gather these resources faster.<i> Upgrades: line of sight (Town Center); hit points, armor (University); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26493":"Build <b>Siege Onager</b> (‹cost›)<br>\\nRanged siege weapon with area of effect attack, but cannot attack enemies at close range. Strong vs. tight groups of units. Can attack ground and destroy trees.<i> Upgrades: attack, range (University); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26495":"Build <b>Fish Trap</b> (‹cost›)<br>\\nRenewable food source, similar to a farm but built by Fishing Ships. Provides a limited amount of food before it collapses and must be rebuilt. Cannot be converted by enemy Monks.<i> Upgrades: line of sight (Town Center); hit points (University).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26504":"Build <b>Outpost</b> (‹cost›)<br>\\nWatch tower with great line-of-sight to discover nearby enemy activity. Does not attack and cannot garrison units inside.<i> Upgrades: line of sight (Town Center); hit points, armor (University); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26534":"Create <b>Coustillier</b> (‹cost›)<br>\\nBurgundian unique cavalry unit which can charge its attack. Strong vs. infantry and archers. Weak vs. Camel Riders and Monks.<i> Upgrades: attack, armor (Blacksmith); speed, hit points (Stable); creation speed, to Elite Coustillier 1000F, 800G (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26536":"Create <b>Elite Coustillier</b> (‹cost›)<br>\\nBurgundian unique cavalry unit which can charge its attack. Strong vs. infantry and archers. Weak vs. Camel Riders and Monks.<i> Upgrades: attack, armor (Blacksmith); speed, hit points (Stable); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26538":"Create <b>Serjeant</b> (‹cost›)<br>\\nSicilian unique infantry unit which can construct Donjons.<i> Upgrades: attack, armor (Blacksmith); speed (Barracks); creation speed, to Elite Serjeant 800F, 675G (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26540":"Create <b>Elite Serjeant</b> (‹cost›)<br>\\nSicilian unique infantry unit which can construct Donjons.<i> Upgrades: attack, armor (Blacksmith); speed (Barracks); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26542":"Create <b>Flemish Militia</b> (‹cost›)<br>\\nBurgundian unique infantry unit. Strong vs. cavalry. Weak vs. archers.<i> Upgrades: attack, armor (Blacksmith); speed (Barracks); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26544":"Build <b>Donjon</b> (‹cost›)<br>\\nFortification used to train your unique unit and Spearman-line. Unique building of the Sicilians. Units can garrison inside for protection. Ranged Units and Villagers shoot additional projectiles.<i> Upgrades: hit points, production speed (Castle); line of sight (Town Center); hit points, armor, accuracy (University); attack, range (Blacksmith).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range› ‹garrison›","26558":"Create <b>Obuch</b> (‹cost›)<br>\\nPolish unique infantry unit which can damage the armor of units it is fighting. Strong vs. buildings and infantry. Weak vs. archers at long range.<i> Upgrades: attack, armor (Blacksmith); speed (Barracks); creation speed, to Elite Obuch 800F, 600G (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26559":"Create <b>Elite Obuch</b> (‹cost›)<br>\\nPolish unique infantry unit which can damage the armor of units it is fighting. Strong vs. buildings and infantry. Weak vs. archers at long range.<i> Upgrades: attack, armor (Blacksmith); speed (Barracks); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26561":"Build <b>Hussite Wagon</b> (‹cost›)<br>\\nBohemian unique siege unit. Units behind it receive 50% less damage from incoming projectiles. Strong vs. archers. Weak vs. siege weapons.<i> Upgrades: attack, range (University); creation speed, to Elite Hussite Wagon 800W, 600G (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26563":"Build <b>Elite Hussite Wagon</b> (‹cost›)<br>\\nBohemian unique siege unit. Units behind it receive 50% less damage from incoming projectiles. Strong vs. archers. Weak vs. siege weapons.<i> Upgrades: attack, range (University); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26573":"Build <b>Elite Cannon Galleon</b> (‹cost›)<br>\\nAnti-building siege warship with long range, but cannot attack enemies at close range. Strong vs. buildings. Weak vs. other units.<i> Upgrades: armor, speed, cost (Dock); attack, range (University); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26574":"Create <b>Berserk</b> (‹cost›)<br>\\nViking unique infantry unit that slowly heals itself. Strong vs. infantry and siege weapons. Weak vs. archers.<i> Upgrades: attack, armor (Blacksmith); speed (Barracks); creation speed, to Elite Berserk 1075F, 475G (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26576":"Create <b>Elite Berserk</b> (‹cost›) Viking unique infantry unit that slowly heals itself. Strong vs. infantry and siege weapons. Weak vs. archers.<i> Upgrades: attack, armor (Blacksmith); speed (Barracks); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26577":"Create <b>Winged Hussar</b> (‹cost›)<br>\\nUnique to Poles and Lithuanians. Fast cavalry for scouting and raiding. Resistant to conversion. Strong vs. Monks and gunpowder units. Weak vs. Pikemen and Camel Riders.<i> Upgrades: attack, armor (Blacksmith); speed, hit points (Stable); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26579":"Build <b>Houfnice</b> (‹cost›)<br>\\nBohemian unique siege unit. Siege weapon with long range. Strong vs. buildings and siege weapons. Weak vs. melee units.<i> Upgrades: attack, range (University); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26581":"Build <b>Folwark</b> (‹cost›)<br>\\nUnique building of the Poles. Used to deposit food and research farming technologies. Immediately collects 8% of food from nearby newly constructed farms. Provides 5 population. Build near forage bushes or other source of food to gather food faster.<i> Upgrades: line of sight (Town Center); hit points, armor (University); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range› ‹garrison›","26660":"Create <b>Petard</b> (‹cost›)<br>\\nDemolition siege unit armed with explosives. Strong vs. buildings. Weak vs. other units. Self-destructs when used.<i> Upgrades: attack (University); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26661":"Create <b>Hussar</b> (‹cost›)<br>\\nFast cavalry for scouting and raiding. Resistant to conversion. Strong vs. Monks. Weak vs. Pikemen and Camel Riders.<i> Upgrades: attack, armor (Blacksmith); speed, hit points (Stable); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26667":"Create <b>Jaguar Warrior</b> (‹cost›)<br>\\nAztec unique infantry unit. Strong vs. infantry. Weak vs. cavalry and archers.<i> Upgrades: attack, armor (Blacksmith); speed (Barracks); creation speed, to Elite Jaguar Warrior 1000F, 500G (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26669":"Create <b>Elite Jaguar Warrior</b> (‹cost›)<br>\\nAztec unique infantry unit. Strong vs. infantry. Weak vs. cavalry and archers.<i> Upgrades: attack, armor (Blacksmith); speed (Barracks); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26671":"Create <b>Eagle Warrior</b> (‹cost›)<br>\\nFast infantry for scouting and raiding. Resistant to conversion. Strong vs. Monks and archers. Weak vs. Long Swordsmen and cavalry.<i> Upgrades: attack, armor (Blacksmith); speed, to Elite Eagle Warrior 800F, 500G (Barracks); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26672":"Create <b>Eagle Scout</b> (‹cost›)<br>\\nFast infantry for scouting and raiding. Resistant to conversion. Strong vs. Monks and archers. Weak vs. Men-at-Arms and cavalry.<i> Upgrades: attack, armor (Blacksmith); speed, to Eagle Warrior 200F, 200G (Barracks); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26673":"Create <b>Elite Eagle Warrior</b> (‹cost›)<br>\\nFast infantry for scouting and raiding. Resistant to conversion. Strong vs. Monks and archers. Weak vs. Long Swordsmen and cavalry.<i> Upgrades: attack, armor (Blacksmith); speed (Barracks); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26675":"Create <b>Tarkan</b> (‹cost›)<br>\\nHunnic unique cavalry unit with attack bonus vs. buildings. Strong vs. buildings and archers. Weak vs. Pikemen and Camel Riders.<i> Upgrades: attack, armor (Blacksmith); speed, hit points (Stable); creation speed, to Elite Tarkan 1000F, 500G (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26677":"Create <b>Elite Tarkan</b> (‹cost›)<br>\\nHunnic unique cavalry unit with attack bonus vs. buildings. Strong vs. buildings and archers. Weak vs. Pikemen and Camel Riders.<i> Upgrades: attack, armor (Blacksmith); speed, hit points (Stable); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26682":"Create <b>Elephant Archer</b> (‹cost›)<br>\\nSlow and heavy mounted archer. Strong vs. archers and infantry. Weak vs. Pikemen, Skirmishers, and Camel Riders.<i> Upgrades: attack, range, armor (Blacksmith); speed, hit points (Stable); accuracy, to Elite Elephant Archer 900F, 500G (Archery Range); attack, accuracy (University); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26683":"Create <b>Plumed Archer</b> (‹cost›)<br>\\nMayan unique fast-moving archer. Strong vs. archers and infantry. Weak vs. cavalry.<i> Upgrades: attack, range, armor (Blacksmith); accuracy (Archery Range); attack, accuracy (University); creation speed, to Elite Plumed Archer 700F, 1000W (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26684":"Create <b>Elite Elephant Archer</b> (‹cost›)<br>\\nSlow and heavy mounted archer. Strong vs. archers and infantry. Weak vs. Pikemen, Skirmishers, and Camel Riders.<i> Upgrades: attack, range, armor (Blacksmith); speed, hit points (Stable); accuracy (Archery Range); attack, accuracy (University); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26685":"Create <b>Elite Plumed Archer</b> (‹cost›)<br>\\nMayan unique fast-moving archer. Strong vs. archers and infantry. Weak vs. cavalry.<i> Upgrades: attack, range, armor (Blacksmith); accuracy (Archery Range); attack, accuracy (University); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26686":"Create <b>Kamayuk</b> (‹cost›)<br>\\nInca unique spearman with increased attack range. Strong vs. cavalry and infantry. Weak vs. archers.<i> Upgrades: attack, armor (Blacksmith); speed (Barracks); creation speed, to Elite Kamayuk 900F, 500G  (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26687":"Create <b>Conquistador</b> (‹cost›)<br>\\nSpanish unique mounted hand cannoneer. Strong vs. infantry. Weak vs. Pikemen, Skirmishers, and Monks.<i> Upgrades: armor (Blacksmith); speed, hit points (Stable); creation speed, to Elite Conquistador 1200F, 600G (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26688":"Create <b>Elite Kamayuk</b> (‹cost›)<br>\\nInca unique spearman with increased attack range. Strong vs. cavalry and infantry. Weak vs. archers.<i> Upgrades: attack, armor (Blacksmith); speed (Barracks); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26689":"Create <b>Elite Conquistador</b> (‹cost›)<br>\\nSpanish unique mounted hand cannoneer. Strong vs. infantry. Weak vs. Pikemen, Skirmishers, and Monks.<i> Upgrades: armor (Blacksmith); speed, hit points (Stable); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26690":"Create <b>Slinger</b> (‹cost›)<br>\\nInca unique unit. Ranged anti-infantry unit that cannot attack at close range. Strong vs. infantry. Weak vs. archers and cavalry.<i> Upgrades: attack, range, armor (Blacksmith); accuracy (Archery Range); attack, accuracy (University); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26691":"Create <b>Missionary</b> (‹cost›)<br>\\nSpanish unique mounted monk. Converts enemy units and heals friendly units. Faster than Monk but with less sight and range. Strong vs. slow, non-ranged units. Weak vs. Light Cavalry and ranged units. Cannot collect Relics.<i> Upgrades: at Monastery; speed, hit points (Stable).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26723":"Create <b>Genoese Crossbowman</b> (‹cost›)<br>\\nItalian unique archer. Strong vs. cavalry and infantry. Weak vs. archers and siege weapons.<i> Upgrades: attack, range, armor (Blacksmith); accuracy (Archery Range); attack, accuracy (University); creation speed, to Elite Genoese Crossbowman 900F, 750G (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26725":"Create <b>Elite Genoese Crossbowman</b> (‹cost›)<br>\\nItalian unique archer. Strong vs. cavalry and infantry. Weak vs. archers and siege weapons.<i> Upgrades: attack, range, armor (Blacksmith); accuracy (Archery Range); attack, accuracy (University); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26727":"Create <b>War Wagon</b> (‹cost›)<br>\\nKorean unique cavalry archer unit. Strong vs. infantry and archers. Weak vs. Pikemen, Skirmishers, and Camel Riders.<i> Upgrades: attack, range, armor (Blacksmith); speed (Stable); accuracy (Archery Range); attack, accuracy (University); creation speed, to Elite War Wagon 1000W, 800G (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26728":"Create <b>Magyar Huszar</b> (‹cost›)<br>\\nMagyar unique light cavalry unit. Strong vs. siege weapons. Weak vs. Pikemen and Camel Riders.<i> Upgrades: attack, armor (Blacksmith); speed, hit points (Stable); creation speed, to Elite Magyar Huszar 800F, 600G (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26729":"Create <b>Elite War Wagon</b> (‹cost›)<br>\\nKorean unique cavalry archer unit. Strong vs. infantry and archers. Weak vs. Pikemen, Skirmishers, and Camel Riders.<i> Upgrades: attack, range, armor (Blacksmith); speed (Stable); accuracy (Archery Range); attack, accuracy (University); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26730":"Create <b>Elite Magyar Huszar</b> (‹cost›)<br>\\nMagyar unique light cavalry unit. Strong vs. siege weapons. Weak vs. Pikemen and Camel Riders.<i> Upgrades: attack, armor (Blacksmith); speed, hit points (Stable); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26731":"Build <b>Turtle Ship</b> (‹cost›)<br>\\nKorean unique ship. Slow and ironclad. Strong vs. warships and buildings.<i> Upgrades: armor, speed, cost, to Elite Turtle Ship 1000F, 800G (Dock); range (University); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","26732":"Build <b>Elite Turtle Ship</b> (‹cost›)<br>\\nKorean unique ship. Slow and ironclad. Strong vs. warships and buildings.<i> Upgrades: armor, speed, cost (Dock); range (University); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","28008":"Research <b>Town Watch</b> (‹cost›)<br>\\nIncreases the line of sight of all buildings by +4 so they see enemies from a longer distance.","28012":"Research <b>Crop Rotation</b> (‹cost›)<br>\\nFarms produce +175 food so they last longer before you must rebuild them.","28013":"Research <b>Heavy Plow</b> (‹cost›)<br>\\nFarms produce +125 food so they last longer before you must rebuild them. Farmers carry +1 food each trip.","28014":"Research <b>Horse Collar</b> (‹cost›)<br>\\nFarms produce +75 food so they last longer before you must rebuild them.","28015":"Research <b>Guilds</b> (‹cost›)<br>\\nReduces the commodity trading fee to 15%.","28017":"Research <b>Banking</b> (‹cost›)<br>\\nTributes are free.","28019":"Research <b>Cartography</b> (‹cost›)<br>\\nYou and your allies share the same line of sight (you see what they see).","28022":"Research <b>Loom</b> (‹cost›)<br>\\nMakes your villagers harder to kill by providing +15 hit points and +1 normal/+2 pierce armor.","28023":"Research <b>Coinage</b> (‹cost›)<br>\\nReduces fee for tributes to 20%.","28039":"Research <b>Husbandry</b> (‹cost›)<br>\\nCavalry move 10% faster.","28045":"Research <b>Faith</b> (‹cost›)<br>\\nUnits are 50% harder for enemy Monks to convert.","28047":"Research <b>Chemistry</b> (‹cost›)<br>\\nMissile units (except gunpowder units) have +1 attack strength.<b><i> Required for<br>\\ngunpowder units (Hand Cannoneer, Cannon Galleon, Bombard Cannon,<br>\\nBombard Tower).</b></i>","28050":"Research <b>Masonry</b> (‹cost›)<br>\\nStrengthens all buildings by providing 10% more hit points, +1 normal/+1 pierce armor, and +3 building armor.","28051":"Research <b>Architecture</b> (‹cost›)<br>\\nStrengthens all buildings by providing 10% more hit points, +1 normal/+1 pierce armor, and +3 building armor.","28054":"Research <b>Treadmill Crane</b> (‹cost›)<br>\\nVillagers construct buildings 20% faster.","28055":"Research <b>Gold Mining</b> (‹cost›)<br>\\nVillagers mine gold 15% faster.","28059":"Research <b>Kataparuto</b> (‹cost›)<br>\\nTrebuchets fire 33% faster and pack/unpack 4X faster.","28063":"Upgrade to <b>Keep</b> (‹cost›)<br>\\nUpgrades Guard Towers and lets you build Keeps, which are stronger and have more attack strength.","28067":"Research <b>Forging</b> (‹cost›)<br>\\nInfantry and cavalry have +1 attack.","28068":"Research <b>Iron Casting</b> (‹cost›)<br>\\nInfantry and cavalry have +1 attack.","28074":"Research <b>Scale Mail Armor</b> (‹cost›)<br>\\nInfantry have +1 normal/+1 pierce armor.","28075":"Research <b>Blast Furnace</b> (‹cost›)<br>\\nInfantry and cavalry have +2 attack.","28076":"Research <b>Chain Mail Armor</b> (‹cost›)<br>\\nInfantry have +1 normal/+1 pierce armor.","28077":"Research <b>Plate Mail Armor</b> (‹cost›)<br>\\nInfantry have +1 normal/+2 pierce armor.","28080":"Research <b>Plate Barding Armor</b> (‹cost›)<br>\\nCavalry have +1 normal/+2 pierce armor.","28081":"Research <b>Scale Barding Armor</b> (‹cost›)<br>\\nCavalry have +1 normal/+1 pierce armor.","28082":"Research <b>Chain Barding Armor</b> (‹cost›)<br>\\nCavalry have +1 normal/+1 pierce armor.","28090":"Research <b>Tracking</b> (‹cost›)<br>\\nInfantry have +2 line of sight so they see enemy units from a longer distance.","28093":"Research <b>Ballistics</b> (‹cost›)<br>\\nArchers, Town Centers, Castles, Galleys, Unique Naval Units, and Mounted Archers fire more accurately at moving targets.","28101":"Advance to <b>Feudal Age</b> (‹cost›; two Dark Age buildings)<br>\\nImproves your civilization. Gives you access to different buildings, more powerful military units, and stronger technologies. Before you can advance, you must have any two Dark Age buildings: Lumber Camp, Mining Camp, Mill, Dock, or Barracks.","28102":"Advance to <b>Castle Age</b> (‹cost›; two Feudal Age buildings)<br>\\nImproves your civilization. Gives you access to different buildings, more powerful military units, and stronger technologies. Before you can advance, you must have any two Feudal Age buildings: Archery Range, Stable, Blacksmith, or Market.","28103":"Advance to <b>Imperial Age</b> (‹cost›; two Castle Age buildings or a Castle/Krepost)<br>\\nImproves your civilization. Gives you access to different buildings, more powerful military units, and stronger technologies. Before you can advance, you must have a Castle/Krepost or any two Castle Age buildings: University, Siege Workshop, or Monastery.","28150":"Research <b>Bodkin Arrow</b> (‹cost›)<br>\\nArchers, cavalry archers, galleys, Castles, and towers have +1 attack and +1 range. Town Centers have +1 attack.","28151":"Research <b>Bracer</b> (‹cost›)<br>\\nArchers, cavalry archers, galleys, Castles, and towers have +1 attack and +1 range. Town Centers have +1 attack.","28163":"Upgrade to <b>Fortified Wall</b> (‹cost›)<br>\\nUpgrades your Stone Walls and lets you build Fortified Walls, which are stronger and harder to breach. Also increases the hit points of your Gates, which makes them harder to destroy.","28172":"Research <b>Fletching</b> (‹cost›)<br>\\nArchers, cavalry archers, galleys, Castles, and towers have +1 attack and +1 range. Town Centers have +1 attack.","28180":"Research <b>Gold Shaft Mining</b> (‹cost›)<br>\\nVillagers mine gold 15% faster.","28186":"Upgrade to <b>Guard Tower</b> (‹cost›)<br>\\nUpgrades your Watch Towers and lets you build Guard Towers, which are stronger and have more attack strength.","28189":"Research <b>Double-Bit Axe</b> (‹cost›)<br>\\nVillagers chop wood 20% faster.","28190":"Research <b>Bow Saw</b> (‹cost›)<br>\\nVillagers chop wood 20% faster.","28208":"Research <b>Padded Archer Armor</b> (‹cost›)<br>\\nArchers and cavalry archers have +1 normal/+1 pierce armor.","28209":"Research <b>Leather Archer Armor</b> (‹cost›)<br>\\nArchers and cavalry archers have +1 normal/+1 pierce armor.","28210":"Research <b>Squires</b> (‹cost›)<br>\\nInfantry move 10% faster.","28211":"Research <b>Wheelbarrow</b> (‹cost›)<br>\\nVillagers work more efficiently by moving 10% faster and carrying 25% more resources.","28216":"Research <b>Ring Archer Armor</b> (‹cost›)<br>\\nArchers and cavalry archers have +1 normal/+2 pierce armor.","28220":"Research <b>Illumination</b> (‹cost›)<br>\\nMonks regain their faith 50% faster after a successful conversion.","28221":"Research <b>Sanctity</b> (‹cost›)<br>\\nMonks have +15 hit points so they are harder to kill.","28222":"Research <b>Block Printing</b> (‹cost›)<br>\\nMonks have +3 conversion range.","28231":"Research <b>Two-Man Saw</b> (‹cost›)<br>\\nVillagers chop wood 10% faster.","28246":"Research <b>Hand Cart</b> (‹cost›)<br>\\nVillagers work more efficiently by moving 10% faster and carrying 50% more resources.","28249":"Research <b>Fervor</b> (‹cost›)<br>\\nMonks move 15% faster.","28250":"Research <b>Carrack</b> (‹cost›)<br>\\nShips receive +1 normal/+1 pierce armor.","28251":"Research <b>Arquebus</b> (‹cost›)<br>\\nBallistics for gunpowder units.","28252":"Research <b>Royal Heirs</b> (‹cost›)<br>\\nShotel Warriors and Camel units receive -3 damage from mounted units.","28253":"Research <b>Torsion Engines</b> (‹cost›)<br>\\nSiege workshop units blast radius increased.","28254":"Research <b>Tigui</b> (‹cost›)<br>\\nTown Centers fire arrows.","28255":"Research <b>Farimba</b> (‹cost›)<br>\\nCavalry +5 attack.","28256":"Research <b>Kasbah</b> (‹cost›)<br>\\nTeam castles work 25% faster.","28257":"Research <b>Maghrebi Camels</b> (‹cost›)<br>\\nCamel units regenerate.","28258":"Research <b>Arson</b> (‹cost›)<br>\\nInfantry do more damage vs. buildings.","28266":"Research <b>Andean Sling</b> (‹cost›)<br>\\nUpgrades your skirmishers and slingers by removing their minimum range; Slingers receive +1 attack.","28267":"Research <b>Fabric Shields</b> (‹cost›)<br>\\nKamayuks, Slingers, Eagles have +1 armor/+2 pierce armor.","28269":"Research <b>Druzhina</b> (‹cost›)<br>\\nInfantry damage adjacent units.","28270":"Research <b>Grand Trunk Road</b> (‹cost›)<br>\\nAll gold income 10% faster (Trade, mines, relics); reduces the commodity trading fee to 10%.","28271":"Research <b>Shatagni</b> (‹cost›)<br>\\nHand cannoneers have +2 range.","28272":"Research <b>Pavise</b> (‹cost›)<br>\\nFoot Archers and Condottieri have +1 armor/+1 pierce armor.","28273":"Research <b>Silk Road</b> (‹cost›)<br>\\nTrade units cost -50%.","28274":"Research <b>Recurve Bow</b> (‹cost›)<br>\\nCavalry archers have +1 range, +1 attack.","28275":"Research <b>Corvinian Army</b> (‹cost›)<br>\\nMagyar Huszars cost no gold.","28276":"Research <b>Stone Mining</b> (‹cost›)<br>\\nVillagers mine stone 15% faster.","28277":"Research <b>Stone Shaft Mining</b> (‹cost›)<br>\\nVillagers mine stone 15% faster.","28278":"Research <b>Arrowslits</b> (‹cost›)<br>\\nIncreases the attack of towers and Donjons.","28280":"Research <b>Nomads</b> (‹cost›)<br>\\nHouses don\'t lose their population room when they are destroyed.","28281":"Research <b>Kamandaran</b> (‹cost›)<br>\\nArcher-line gold cost is replaced by additional wood cost.","28282":"Research <b>Town Patrol</b> (‹cost›)<br>\\nIncreases the line of sight of all buildings by +4 so they see enemies from a longer distance.","28283":"Research <b>Ironclad</b> (‹cost›)<br>\\nIncreases the armor of all siege weapons so they\'re more resistant to melee attack.","28285":"Research <b>Sipahi</b> (‹cost›)<br>\\nCavalry archers have +20 hit points.","28286":"Research <b>Inquisition</b> (‹cost›)<br>\\nIncreases monk conversion rate; Missionaries receive +1 range.","28287":"Research <b>Chivalry</b> (‹cost›)<br>\\nIncreases the production speed of stables by +40%.","28291":"Research <b>Tusk Swords</b> (‹cost›)<br>\\nBattle Elephants receive +3 attack","28292":"Research <b>Double Crossbows</b> (‹cost›)<br>\\nBallista Elephants and Scorpions fire two projectiles.","28293":"Research <b>Thalassocracy</b> (‹cost›)<br>\\nUpgrades your Docks to Harbors, which fire arrows.","28294":"Research <b>Forced Levy</b> (‹cost›)<br>\\nMilitia-line gold cost is replaced by additional food cost.","28295":"Research <b>Howdah</b> (‹cost›)<br>\\nBattle Elephants receive +1 normal/+1 pierce armor.","28296":"Research <b>Manipur Cavalry</b> (‹cost›)<br>\\nCavalry deals +4 bonus attack vs. archers.","28297":"Research <b>Chatras</b> (‹cost›)<br>\\nBattle Elephants receive +100 HP.","28298":"Research <b>Paper Money</b> (‹cost›)<br>\\nLumberjacks slowly generate gold in addition to wood.","28307":"Research <b>Stirrups</b> (‹cost›)<br>\\nCavalry attack 33% faster.","28308":"Research <b>Bagains</b> (‹cost›)<br>\\nMilitia-line receives +5 melee armor.","28309":"Research <b>Silk Armor</b> (‹cost›)<br>\\nLight Cavalry, Steppe Lancers and Cavalry Archers receive +1 normal/+1 pierce armor.","28310":"Research <b>Timurid Siegecraft</b> (‹cost›)<br>\\nTrebuchets receive +2 range. Enables Flaming Camels.","28311":"Research <b>Steppe Husbandry</b> (‹cost›)<br>\\nLight Cavalry, Steppe Lancers and Cavalry Archers trained 100% faster.","28312":"Research <b>Chieftains</b> (‹cost›)<br>\\nInfantry get attack bonus vs. cavalry and generate gold when killing villagers (5 gold), trade units (20 gold), and monks (20 gold).","28313":"Research <b>Greek Fire</b> (‹cost›)<br>\\nFire Ships have +1 range; Dromons and Bombard Towers receive extra blast radius.","28314":"Research <b>Gillnets</b> (‹cost›)<br>\\nFishing Ships gather 20% faster.","28315":"Research <b>Redemption</b> (‹cost›)<br>\\nMonks can convert enemy buildings (except Town Centers, Castles, Monasteries, Farms, Fish Traps, walls, Gates, and Wonders) and siege weapons. Monks can convert most enemy units from a distance, but they must stand adjacent to buildings, rams, and Trebuchets to convert them.","28316":"Research <b>Atonement</b> (‹cost›)<br>\\nMonks can convert enemy Monks.","28318":"Research <b>Logistica</b> (‹cost›)<br>\\nCataphracts cause trample damage.","28319":"Research <b>Conscription</b> (‹cost›)<br>\\nMilitary buildings (except Siege Workshops) work 33% faster.","28320":"Research <b>Bombard Tower</b> (‹cost›)<br>\\nLets you build Bombard Towers, which are powerful and have extensive line of sight.","28321":"Research <b>Murder Holes</b> (‹cost›)<br>\\nEliminates the minimum range of all towers, Castles and Harbors so they can fire at enemies attacking their base.","28322":"Research <b>Sappers</b> (‹cost›)<br>\\nVillagers cause +15 damage when attacking buildings and +3 damage when attacking rams.","28324":"Research <b>Bearded Axe</b> (‹cost›)<br>\\nThrowing Axemen have +1 range.","28325":"Research <b>Supremacy</b> (‹cost›)<br>\\nVillagers have exceptional combat abilities.","28326":"Research <b>Atlatl</b> (‹cost›)<br>\\nSkirmishers have +1 attack, +1 range.","28327":"Research <b>Warwolf</b> (‹cost›)<br>\\nImproves your Trebuchets by giving them blast damage.","28342":"Research <b>Burgundian Vineyards</b> (‹cost›)<br>\\nFarmers slowly generate gold in addition to food.","28343":"Research <b>Flemish Revolution</b> (‹cost›)<br>\\nUpgrades all existing Villagers to Flemish Militia and allows Flemish Militia to be created at the Barracks. The total cost is 200F, 150G and +10F, +5G per each villager.","28344":"Research <b>First Crusade</b> (‹cost›)<br>\\nEach Town Center (maximum 5) spawns a one-time batch of 5 Serjeants. Units more resistant to conversion.","28345":"Research <b>Hauberk</b> (‹cost›)<br>\\nKnights receive +1 normal/+2 pierce armor.","28348":"Research <b>Szlachta Privileges</b> (‹cost›)<br>\\nKnights cost -60% gold.","28349":"Research <b>Lechitic Legacy</b> (‹cost›)<br>\\nLight Cavalry deals trample damage.","28350":"Research <b>Wagenburg Tactics</b> (‹cost›)<br>\\nGunpowder units move 15% faster.","28351":"Research <b>Hussite Reforms</b> (‹cost›)<br>\\nMonks and Monastery technologies have their gold cost replaced by food.","28357":"Research <b>Medical Corps</b> (‹cost›)<br>\\nElephant units regenerate 30 HP per minute.","28358":"Research <b>Wootz Steel</b> (‹cost›)<br>\\nInfantry and cavalry attacks ignore armor.","28359":"Research <b>Paiks</b> (‹cost›)<br>\\nRathas and elephant units attack 20% faster.","28360":"Research <b>Mahayana</b> (‹cost›)<br>\\nVillagers and Monks take 10% less population space.","28361":"Research <b>Kshatriyas</b> (‹cost›)<br>\\nMilitary units cost -25% food.","28362":"Research <b>Frontier Guards</b> (‹cost›)<br>\\nCamel Riders and Elephant Archers receive +4 melee armor.","28368":"Research <b>Great Wall</b> (‹cost›)<br>\\nMakes your walls and towers stronger by giving them +30% hit points.","28369":"Research <b>Stronghold</b> (‹cost›)<br>\\nMakes your castles and towers stronger by making them fire 33% faster; Castles heal allied infantry in a 7 tile radius.","28370":"Research <b>Marauders</b> (‹cost›)<br>\\nEnables you to create Tarkans at Stables.","28371":"Research <b>Yasama</b> (‹cost›)<br>\\nMakes your towers stronger by making them shoot extra arrows.","28372":"Research <b>Careening</b> (‹cost›)<br>\\nMakes ships less vulnerable to missile attack with +1 pierce armor. Transport Ships carry +5 units.","28373":"Research <b>Dry Dock</b> (‹cost›)<br>\\nShips move 15% faster. Transport Ships carry +10 units.","28374":"Research <b>Heated Shot</b> (‹cost›)<br>\\nTowers cause 125% more damage to ships; Castles cause 25% more damage to ships.","28376":"Research <b>Hoardings</b> (‹cost›)<br>\\nStrengthens Castles and Donjons by providing +20% hit points.","28377":"Research <b>Shipwright</b> (‹cost›)<br>\\nShips cost 20% less wood; build 35% faster.","28378":"Research <b>Siege Engineers</b> (‹cost›)<br>\\nRanged siege weapons and siege warships have +1 range and cause 20% more damage to buildings (40% more for Petards and Flaming Camels).","28379":"Research <b>Hul\'che Javelineers</b> (‹cost›)<br>\\nImproves your Skirmishers by making them throw a second projectile.","28380":"Research <b>Eupseong</b> (‹cost›)<br>\\nWatch Towers, Guard Towers and Keeps have +2 range.","28398":"Research <b>Cuman Mercenaries</b> (‹cost›)<br>\\nTeam members can create 5 free Elite Kipchaks per Castle.","28399":"Research <b>Hill Forts</b> (‹cost›)<br>\\nTown Centers receive +3 range.","28400":"Research <b>Tower Shields</b> (‹cost›)<br>\\nPikemen and Skirmishers receive +2 pierce armor.","28403":"Research <b>Supplies</b> (‹cost›)<br>\\nMilitia-line costs -15 food.","28408":"Research <b>Spies/Treason</b> (Cost: ‹static_cost=Gold,200› per enemy villager for Spies/‹static_cost=Gold,400› per use for Treason)<br>\\nSpies (Random Map games) reveals all enemy units and buildings by showing you their line of sight. The total cost is 200 gold per each villager from other players; allied villagers are excluded when teams are locked.<br>\\n<br>\\nTreason (Regicide games) reveals the position of all enemy Kings to your team for a few seconds. The Kings appear on the mini-map as a flashing X. Each time you choose Treason, 400 gold is immediately deducted from your stockpile.","28409":"Research <b>Bloodlines</b> (‹cost›)<br>\\nMounted units have +20 hit points.","28410":"Research <b>Caravan</b> (‹cost›)<br>\\nTrade Carts and Trade Cogs move 50% faster (so gold accumulates faster).","28411":"Research <b>Thumb Ring</b> (‹cost›)<br>\\nArchers fire faster and with 100% accuracy.","28412":"Research <b>Heresy</b> (‹cost›)<br>\\nUnits converted by an enemy Monk (or Missionary) die instead of changing to the enemy\'s color.","28415":"Research <b>Parthian Tactics</b> (‹cost›)<br>\\nMounted Archers have +1 normal/+2 pierce armor and +2 attack vs. pikemen.","28416":"Research <b>Theocracy</b> (‹cost›)<br>\\nIf a group of Monks converts an enemy unit, only one of the Monks must rest afterward.","28419":"Research <b>Yeomen</b> (‹cost›)<br>\\nFoot archers have +1 range; towers have +2 attack.","28420":"Research <b>El Dorado</b> (‹cost›)<br>\\nEagle Warriors have +40 hit points.","28421":"Research <b>Furor Celtica</b> (‹cost›)<br>\\nSiege Workshop units have +40% hit points.","28422":"Research <b>Drill</b> (‹cost›)<br>\\nSiege Workshop units move 50% faster.","28423":"Research <b>Mahouts</b> (‹cost›)<br>\\nWar Elephants move 30% faster.","28424":"Research <b>Zealotry</b> (‹cost›)<br>\\nCamel units have +20 hit points.","28425":"Research <b>Artillery</b> (‹cost›)<br>\\nBombard Towers, Bombard Cannons, and Cannon Galleons have +2 range.","28426":"Research <b>Crenellations</b> (‹cost›)<br>\\nCastles have +3 range; garrisoned infantry fire arrows.","28427":"Research <b>Anarchy</b> (‹cost›)<br>\\nAllows Huskarls to be created at the Barracks.","28428":"Research <b>Atheism</b> (‹cost›)<br>\\nRelic and Wonder victories take +100 years to complete; enemy relics generate -50% resources.","28429":"Research <b>Garland Wars</b> (‹cost›)<br>\\nInfantry have +4 attack.","28431":"Research <b>Bogsveigar</b> (‹cost›)<br>\\nArcher-line and Longboats receive +1 attack.","28432":"Research <b>Rocketry</b> (‹cost›)<br>\\nChu Ko Nu have +2 piercing attack; scorpions have +4 piercing attack.","28435":"Research <b>Herbal Medicine</b> (‹cost›)<br>\\nUnits garrisoned in buildings heal 6X faster.","28438":"Research <b>Shinkichon</b> (‹cost›)<br>\\nMangonels, Onagers, and Siege Onagers have +1 range.","28439":"Research <b>Perfusion</b> (‹cost›)<br>\\nBarracks units are created 100% faster.","28444":"Research <b>Ballistas</b> (‹cost›)<br>\\nScorpions fire 33% faster; Galley-line +2 attack.","28445":"Research <b>Comitatenses</b> (‹cost›)<br>\\nMilitia-line, Knight-line, and Centurions train 50% faster and receive a charge attack.","28447":"Research <b>Counterweights</b> (‹cost›)<br>\\nTrebuchets and Mangonel-line +15% attack.","28448":"Research <b>Detinets</b> (‹cost›)<br>\\nReplaces 40% of Castles\' and Towers\' stone cost with wood.","28450":"Research <b>Gambesons</b> (‹cost›)<br>\\nMilitia-line receive +1 pierce armor.","42057":"Create <b>Konnik</b> (‹cost›)<br>\\nBulgarian unique cavalry unit that fights on as infantry when felled. Strong vs. infantry and archers. Weak vs. Camel Riders and Monks.<i> Upgrades: attack, armor (Blacksmith); speed, hit points (Stable); creation speed, to Elite Konnik 1000F, 750G (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","42058":"Create <b>Elite Konnik</b> (‹cost›)<br>\\nBulgarian unique cavalry unit that fights on as infantry when felled. Strong vs. infantry and archers. Weak vs. Camel Riders and Monks.<i> Upgrades: attack, armor (Blacksmith); speed, hit points (Stable); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","42096":"Create <b>Ratha</b> (‹cost›)<br>\\nBengali unique chariot that can switch between melee and ranged attacks. Strong vs. infantry. Weak vs. Skirmishers and Camel Riders.<i> Upgrades: attack, armor (Blacksmith); speed, hit points (Stable); creation speed, to Elite Ratha 800F, 800W (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","42097":"Create <b>Elite Ratha</b> (‹cost›)<br>\\nBengali unique chariot that can switch between melee and ranged attacks. Strong vs. infantry. Weak vs. Skirmishers and Camel Riders.<i> Upgrades: attack, armor (Blacksmith); speed, hit points (Stable); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","42104":"Create <b>Ratha</b> (‹cost›)<br>\\nBengali unique chariot that can switch between melee and ranged attacks. Strong vs. infantry. Weak vs. Skirmishers and Camel Riders.<i> Upgrades: attack, armor (Blacksmith); speed, hit points (Stable); creation speed, to Elite Ratha 800F, 800W (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","42105":"Create <b>Elite Ratha</b> (‹cost›)<br>\\nBengali unique chariot that can switch between melee and ranged attacks. Strong vs. infantry. Weak vs. Skirmishers and Camel Riders.<i> Upgrades: attack, armor (Blacksmith); speed, hit points (Stable); creation speed (Castle); more resistant to Monks (Monastery).</i><br>\\n‹hp› ‹attack› ‹armor› ‹piercearmor› ‹range›","120150":"Foot Archer civilization<br>\\n<br>\\n• Town Centers cost -50% wood starting in the Castle Age<br>\\n• Foot archers (except skirmishers) +1 range in Castle and Imperial Age (+2 total)<br>\\n• Shepherds work 25% faster<br>\\n<br>\\n<b>Unique Unit:</b> <br>\\nLongbowman (archer)<br>\\n<br>\\n<b>Unique Techs:</b> <br>\\n• Yeomen (+1 foot archer range<br>\\n+2 tower attack)<br>\\n• Warwolf (Trebuchets do blast damage)<br>\\n<br>\\n<b>Team Bonus:</b> <br>\\nArchery Ranges work 10% faster","120151":"Cavalry civilization<br>\\n<br>\\n• Castles cost -15% in Castle, -25% in Imperial Age<br>\\n• Cavalry +20% hit points starting in Feudal Age<br>\\n• Mill technologies free<br>\\n• Foragers work 15% faster<br>\\n<br>\\n<b>Unique Unit:</b> <br>\\nThrowing Axeman (infantry)<br>\\n<br>\\n<b>Unique Techs:</b> <br>\\n• Bearded Axe (+1 Throwing Axemen range)<br>\\n• Chivalry (Stables work 40% faster)<br>\\n<br>\\n<b>Team Bonus:</b> <br>\\nKnights +2 line of sight","120152":"Infantry civilization<br>\\n<br>\\n• Infantry cost -20% in Dark, -25% in Feudal, -30% in Castle, -35% in Imperial Age<br>\\n• Infantry +1 attack vs. buildings per age (starting from Feudal Age)<br>\\n• Villagers +5 attack vs. wild boar; hunters carry +15 meat; hunt lasts 20% longer<br>\\n• Loom can be researched instantly<br>\\n• +10 population in Imperial Age<br>\\n<br>\\n<b>Unique Unit:</b> <br>\\nHuskarl (infantry)<br>\\n<br>\\n<b>Unique Techs:</b> <br>\\n• Anarchy (create Huskarls at Barracks)<br>\\n• Perfusion (Barracks work 100% faster)<br>\\n<br>\\n<b>Team Bonus:</b> <br>\\nBarracks work 20% faster","120153":"Infantry civilization<br>\\n<br>\\n• Monks healing range 2x<br>\\n• Towers garrison 2x units<br>\\n• Murder Holes, Herbal Medicine free<br>\\n• Farms cost -40%<br>\\n• Town Center garrison +10<br>\\n• Barracks and Stable units +1 armor in Castle and Imperial Age (+2 total)<br>\\n<br>\\n<b>Unique Unit:</b> <br>\\nTeutonic Knight (infantry)<br>\\n<br>\\n<b>Unique Techs:</b> <br>\\n• Ironclad (siege weapons extra melee armor)<br>\\n• Crenellations (+3 range Castles<br>\\ngarrisoned infantry fire arrows)<br>\\n<br>\\n<b>Team Bonus:</b> <br>\\nUnits resist conversion","120154":"Infantry civilization<br>\\n<br>\\n• Fishing Ships 2x hit points; +2P armor; work rate +5% Dark, +10% Feudal, +15% Castle, +20% Imperial Age<br>\\n• Mill, Lumber/Mining Camps cost -50%<br>\\n• Infantry attack 33% faster starting in Feudal Age<br>\\n<br>\\n<b>Unique Unit:</b> <br>\\nSamurai (infantry)<br>\\n<br>\\n<b>Unique Techs:</b> <br>\\n• Yasama (Towers shoot extra arrows)<br>\\n• Kataparuto (Trebuchets fire, pack faster)<br>\\n<br>\\n<b>Team Bonus:</b> <br>\\nGalleys +50% line of sight","120155":"Archer civilization<br>\\n<br>\\n• Start with +3 villagers, -50 wood, -200 food<br>\\n• Technologies cost -5% Feudal, <br>\\n-10% Castle, -15% Imperial Age<br>\\n• Town Centers support 10 population and +5 LOS<br>\\n• Demolition ships +50% hit points<br>\\n<br>\\n<b>Unique Unit:</b> <br>\\nChu Ko Nu (archer)<br>\\n<br>\\n<b>Unique Techs:</b> <br>\\n• Great Wall (Walls and towers +30% HP)<br>\\n• Rocketry (Chu Ko Nu +2, scorpions +4 attack)<br>\\n<br>\\n<b>Team Bonus:</b> <br>\\nFarms +10% food","120156":"Defensive civilization<br>\\n<br>\\n• Buildings +10% HP Dark, +20% Feudal, +30% Castle, +40% Imperial Age<br>\\n• Camel Riders, Skirmishers, Pikemen, Halberdiers cost -25%<br>\\n• Fire Ships and Dromons attack 25% faster<br>\\n• Advance to Imperial Age costs -33%<br>\\n• Town Watch, Town Patrol free<br>\\n<br>\\n<b>Unique Unit:</b> <br>\\nCataphract (cavalry)<br>\\n<br>\\n<b>Unique Techs:</b> <br>\\n• Greek Fire (Fire Ships +1 range; Dromon and Bombard Tower blast radius increased)<br>\\n• Logistica (Cataphracts cause trample damage)<br>\\n<br>\\n<b>Team Bonus:</b> <br>\\nMonks +100% heal speed","120157":"Cavalry civilization<br>\\n<br>\\n• Start with +50 wood, food<br>\\n• Town Center, Dock 2x hit points; work rate +10% Feudal, +15% Castle, +20% Imperial Age<br>\\n<br>\\n<b>Unique Unit:</b> <br>\\nWar Elephant (cavalry)<br>\\n<br>\\n<b>Unique Techs:</b> <br>\\n• Kamandaran (Archer-line gold cost is replaced by additional wood cost)<br>\\n• Mahouts (War Elephants 30% faster)<br>\\n<br>\\n<b>Team Bonus:</b> <br>\\nKnights +2 attack vs. Archers","120158":"Camel and Naval civilization<br>\\n<br>\\n• Market trade cost only 5%<br>\\n• Markets cost -100 wood<br>\\n• Transport Ships 2x hit points, <br>\\n2x carry capacity<br>\\n• Galleys attack 25% faster<br>\\n• Camel units +10 hit points<br>\\n<br>\\n<b>Unique Unit:</b> <br>\\nMameluke (camel rider)<br>\\n<br>\\n<b>Unique Techs:</b> <br>\\n• Zealotry (Camel units +20 hit points)<br>\\n• Counterweights (Trebuchets and Mangonel-line +15% attack)<br>\\n<br>\\n<b>Team Bonus:</b> <br>\\nFoot archers +2 attack vs. buildings","120159":"Gunpowder civilization<br>\\n<br>\\n• Gunpowder units +25% hit points; researching gunpowder technologies costs -50%; Chemistry free<br>\\n• Gold miners work 20% faster<br>\\n• Scout Cavalry, Light Cavalry, Hussar +1P armor<br>\\n• Light Cavalry and Hussar upgrades free<br>\\n<br>\\n<b>Unique Unit:</b> <br>\\nJanissary (hand cannoneer)<br>\\n<br>\\n<b>Unique Techs:</b> <br>\\n• Sipahi (Cavalry Archers +20 HP)<br>\\n• Artillery (+2 range Bombard Towers, Bombard Cannons, Cannon Galleons)<br>\\n<br>\\n<b>Team Bonus:</b> <br>\\nGunpowder units created 25% faster","120160":"Infantry and Naval civilization<br>\\n<br>\\n• Warships cost -15% Feudal Age, -15% Castle Age, -20% Imperial Age<br>\\n• Infantry +20% hit points starting in Feudal Age<br>\\n• Wheelbarrow, Hand Cart free<br>\\n<br>\\n<b>Unique Units:</b> <br>\\nBerserk (infantry), Longboat (warship)<br>\\n<br>\\n<b>Unique Techs:</b> <br>\\n• Chieftains (infantry deal bonus damage to cavalry, generate gold when killing villagers, trade units, and monks)<br>\\n• Bogsveigar (Archer-line and Longboats +1 attack)<br>\\n<br>\\n<b>Team Bonus:</b> <br>\\nDocks cost -15%","120161":"Cavalry Archer civilization<br>\\n<br>\\n• Cavalry archers fire 25% faster<br>\\n• Light Cavalry, Hussars, Steppe Lancers +30% hit points<br>\\n• Hunters work 40% faster<br>\\n<br>\\n<b>Unique Unit:</b> <br>\\nMangudai (cavalry archer)<br>\\n<br>\\n<b>Unique Techs:</b> <br>\\n• Nomads (lost houses do not decrease population headroom)<br>\\n• Drill (Siege Workshop units move 50% faster)<br>\\n<br>\\n<b>Team Bonus:</b> <br>\\nScout Cavalry, Light Cavalry, Hussar +2 line of sight","120162":"Infantry and Siege civilization<br>\\n<br>\\n• Infantry move 15% faster (starting in the Feudal Age)<br>\\n• Lumberjacks work 15% faster<br>\\n• Siege weapons fire 25% faster<br>\\n• Can steal sheep, and sheep within one Celt unit\'s LoS cannot be stolen<br>\\n<br>\\n<b>Unique Unit:</b> <br>\\nWoad Raider (infantry)<br>\\n<br>\\n<b>Unique Techs:</b> <br>\\n• Stronghold (Castles and towers fire 33% faster; Castles heal allied infantry in a 7 tile radius)<br>\\n• Furor Celtica (Siege Workshop units +40% HP)<br>\\n<br>\\n<b>Team Bonus:</b> <br>\\nSiege Workshops work 20% faster","120163":"Gunpowder and Monk civilization<br>\\n<br>\\n• Builders work 30% faster<br>\\n• Blacksmith upgrades don\'t cost gold<br>\\n• Cannon Galleons benefit from Ballistics (fire faster, more accurately)<br>\\n• Gunpowder units fire 18% faster<br>\\n• Receive +20 gold for each technology researched<br>\\n<br>\\n<b>Unique Units:</b> <br>\\nConquistador (mounted hand cannoneer), Missionary (mounted Monk)<br>\\n<br>\\n<b>Unique Techs:</b> <br>\\n• Inquisition (Monks convert faster; Missionaries +1 range)<br>\\n• Supremacy (Villagers stronger in combat)<br>\\n<br>\\n<b>Team Bonus:</b> <br>\\nTrade units generate +25% gold","120164":"Infantry and Monk civilization<br>\\n<br>\\n• Villagers carry +3<br>\\n• Military units created 11% faster<br>\\n• +5 Monk hit points for each Monastery technology<br>\\n• Start with +50 gold<br>\\n<br>\\n<b>Unique Unit:</b> <br>\\nJaguar Warrior (infantry)<br>\\n<br>\\n<b>Unique Techs:</b> <br>\\n• Atlatl (Skirmishers +1 attack, +1 range)<br>\\n• Garland Wars (+4 infantry attack)<br>\\n<br>\\n<b>Team Bonus:</b> <br>\\nRelics generate +33% gold","120165":"Archer civilization<br>\\n<br>\\n• Start with +1 villager, but -50 food<br>\\n• Resources last 15% longer<br>\\n• Archers cost -10% Feudal, -20% Castle, -30% Imperial Age<br>\\n<br>\\n<b>Unique Unit:</b> <br>\\nPlumed Archer (archer)<br>\\n<br>\\n<b>Unique Techs:</b> <br>\\n• Hul\'che Javelineers (Skirmishers throw a second projectile)<br>\\n• El Dorado (Eagle Warriors have +40 hit points)<br>\\n<br>\\n<b>Team Bonus:</b> <br>\\nWalls cost -50%","120166":"Cavalry civilization<br>\\n<br>\\n• Do not need houses, but start with -100 wood<br>\\n• Cavalry Archers cost -10% Castle, -20% Imperial Age<br>\\n• Trebuchets +30% accuracy<br>\\n<br>\\n<b>Unique Unit:</b> <br>\\nTarkan (cavalry)<br>\\n<br>\\n<b>Unique Techs:</b> <br>\\n• Marauders (Create Tarkans at stables)<br>\\n• Atheism (+100 years Relic, Wonder victories; enemy relics generate -50% resources)<br>\\n<br>\\n<b>Team Bonus:</b> <br>\\nStables work 20% faster","120167":"Defensive and Naval civilization<br>\\n<br>\\n• Villagers +3 line of sight<br>\\n• Stone miners work 20% faster<br>\\n• Archer Armor and Tower upgrades free (Bombard Tower requires Chemistry)<br>\\n• Archers and Infantry cost -50% wood<br>\\n• Warships cost -20% wood<br>\\n<br>\\n<b>Unique Units:</b> <br>\\nWar Wagon (cavalry archer), Turtle Ship (war ship)<br>\\n<br>\\n<b>Unique Techs:</b> <br>\\n• Eupseong (Watch Towers, Guard Towers and Keeps +2 range)<br>\\n• Shinkichon (Mangonel-line +1 range)<br>\\n<br>\\n<b>Team Bonus:</b> <br>\\nMangonel-line minimum range reduced","120168":"Archer and Naval civilization<br>\\n<br>\\n• Advancing to the next age costs -15%<br>\\n• Dock and University technologies cost -33%<br>\\n• Fishing Ships cost -15%<br>\\n• Gunpowder units cost -20%<br>\\n<br>\\n<b>Unique Units:</b> <br>\\nGenoese Crossbowman (archer), Condottiero (infantry)<br>\\n<br>\\n<b>Unique Techs:</b> <br>\\n• Pavise (foot archers and Condottieri +1 armor/+1 pierce armor)<br>\\n• Silk Road (trade units cost -50%)<br>\\n<br>\\n<b>Team Bonus:</b> <br>\\nCondottiero available in the Barracks in Imperial Age","120169":"Camel and Gunpowder civilization<br>\\n<br>\\n• Villagers cost -5% Dark, -10% Feudal, -15% Castle, -20% Imperial Age<br>\\n• Camel Riders attack 20% faster<br>\\n• Gunpowder units +1/+1P armor<br>\\n• Can build Caravanserai in Imperial Age<br>\\n<br>\\n<b>Unique Units:</b> <br>\\nGhulam (infantry), Imperial Camel Rider (camel rider)<br>\\n<br>\\n<b>Unique Techs:</b> <br>\\n• Grand Trunk Road (All gold income 10% faster; trading fee reduced to 10%)<br>\\n• Shatagni (Hand Cannoneers +2 range)<br>\\n<br>\\n<b>Team Bonus:</b> <br>\\nCamel and light cavalry units +2 attack vs. buildings","120170":"Infantry civilization<br>\\n<br>\\n• Military units food cost -15% Dark, -20% Feudal, -25% Castle, -30% Imperial Age<br>\\n• Villagers affected by Blacksmith upgrades starting in the Castle Age<br>\\n• Houses support 10 population<br>\\n• Buildings cost -15% stone<br>\\n<br>\\n<b>Unique Units:</b> <br>\\nKamayuk (infantry), Slinger (archer)<br>\\n<br>\\n<b>Unique Techs:</b> <br>\\n• Andean Sling (Skirmishers and Slingers no minimum range; Slingers +1 attack)<br>\\n• Fabric Shields (Kamayuks, Slingers, Eagles +1/+2P armor)<br>\\n<br>\\n<b>Team Bonus:</b> <br>\\nStart with a free Llama","120171":"Cavalry civilization<br>\\n<br>\\n• Villagers kill wolves with 1 strike<br>\\n• Forging, Iron Casting, Blast Furnace free<br>\\n• Scout Cavalry, Light Cavalry, Hussar cost -15%<br>\\n<br>\\n<b>Unique Unit:</b> <br>\\nMagyar Huszar (cavalry)<br>\\n<br>\\n<b>Unique Techs:</b> <br>\\n• Corvinian Army (Magyar Huszars cost no gold)<br>\\n• Recurve Bow (Cavalry archers +1 range, +1 attack)<br>\\n<br>\\n<b>Team Bonus:</b> <br>\\nCavalry Archers created 25% faster","120172":"Infantry and Siege civilization<br>\\n<br>\\n• Farmers work 10% faster<br>\\n• Supplies, Gambesons free<br>\\n• Siege Workshop units 15% cheaper<br>\\n• Monks move 20% faster<br>\\n<br>\\n<b>Unique Unit:</b> <br>\\nBoyar (cavalry)<br>\\n<br>\\n<b>Unique Techs:</b> <br>\\n• Detinets (Replaces 40% of Castles\' and Towers\' stone cost with wood)<br>\\n• Druzhina (Infantry damage adjacent units)<br>\\n<br>\\n<b>Team Bonus:</b> <br>\\nMilitary buildings provide +5 population room","120173":"Naval and Gunpowder civilization<br>\\n<br>\\n• All units cost -20% gold<br>\\n• Foragers generate wood in addition to food<br>\\n• Ships +10% HP<br>\\n• Can build Feitoria in Imperial Age<br>\\n<br>\\n<b>Unique Units:</b> <br>\\nOrgan Gun (siege), Caravel (war ship)<br>\\n<br>\\n<b>Unique Techs:</b> <br>\\n• Carrack (Ships +1/+1 armor)<br>\\n• Arquebus (gunpowder units more accurate)<br>\\n<br>\\n<b>Team Bonus:</b> <br>\\nTechnologies researched 25% faster","120174":"Archer civilization<br>\\n<br>\\n• Archers fire 18% faster<br>\\n• Receive +100 gold, +100 food when advancing to the next age<br>\\n• Pikeman upgrade free<br>\\n<br>\\n<b>Unique Unit:</b> <br>\\nShotel Warrior (infantry)<br>\\n<br>\\n<b>Unique Techs:</b> <br>\\n• Royal Heirs (Shotel Warriors and Camel units receive -3 damage from mounted units)<br>\\n• Torsion Engines (increases blast radius of Siege Workshop units)<br>\\n<br>\\n<b>Team Bonus:</b> <br>\\nOutposts +3 line of sight and cost no stone","120175":"Infantry civilization<br>\\n<br>\\n• Buildings cost -15% wood<br>\\n• Barracks units +1P armor per age (starting from Feudal Age)<br>\\n• Villagers drop off 10% more gold<br>\\n<br>\\n<b>Unique Unit:</b> <br>\\nGbeto (infantry)<br>\\n<br>\\n<b>Unique Techs:</b> <br>\\n• Tigui (Town Centers fire arrows when ungarrisoned)<br>\\n• Farimba (Cavalry +5 attack)<br>\\n<br>\\n<b>Team Bonus:</b> <br>\\nUniversities work 80% faster","120176":"Cavalry and Naval civilization<br>\\n<br>\\n• Villagers move 5% faster in Dark Age, 10% starting in Feudal Age<br>\\n• Stable units cost -15% in Castle, -20% in Imperial Age<br>\\n• Ships move 10% faster<br>\\n<br>\\n<b>Unique Units:</b> <br>\\nCamel Archer (cavalry archer), Genitour (mounted skirmisher)<br>\\n<br>\\n<b>Unique Techs:</b> <br>\\n• Kasbah (team castles work 25% faster)<br>\\n• Maghrebi Camels (Camel units regenerate)<br>\\n<br>\\n<b>Team Bonus:</b> <br>\\nGenitour available in the Archery Range starting in the Castle Age","120177":"Siege and Elephant civilization<br>\\n<br>\\n• No buildings required to advance to the next age or to unlock other buildings<br>\\n• Farmers don\'t require Mills/Town Centers to drop off food<br>\\n• Battle Elephants move 10% faster<br>\\n• Villagers can garrison in Houses<br>\\n<br>\\n<b>Unique Unit:</b><br>\\nBallista Elephant (mounted scorpion)<br>\\n<br>\\n<b>Unique Techs:</b><br>\\n• Tusk Swords (Battle Elephants +3 attack)<br>\\n• Double Crossbow (Ballista Elephants and Scorpions fire two projectiles)<br>\\n<br>\\n<b>Team Bonus:</b><br>\\nScorpions +1 range","120178":"Naval civilization<br>\\n<br>\\n• Advancing to the next age 66% faster<br>\\n• Fish Traps cost -33% and provide 3X food<br>\\n• Battle Elephants cost -30% in Castle, -40% in Imperial Age<br>\\n• Infantry armor upgrades free<br>\\n<br>\\n<b>Unique Unit:</b><br>\\nKarambit Warrior (infantry)<br>\\n<br>\\n<b>Unique Techs:</b><br>\\n• Thalassocracy (upgrades Docks to Harbors, which fire arrows)<br>\\n• Forced Levy (Militia-line gold cost is replaced by additional food cost)<br>\\n<br>\\n<b>Team Bonus:</b><br>\\nDocks +100% line of sight","120179":"Monk and Elephant civilization<br>\\n<br>\\n• Lumber Camp technologies free<br>\\n• Infantry +1 attack per age (starting in the Feudal Age)<br>\\n• Battle Elephants +1/+1P armor<br>\\n• Monastery technologies cost -50%<br>\\n<br>\\n<b>Unique Unit:</b><br>\\nArambai (ranged cavalry)<br>\\n<br>\\n<b>Unique Techs:</b><br>\\n• Manipur Cavalry (Cavalry +4 attack vs. archers)<br>\\n• Howdah (Battle Elephants +1/+1P armor)<br>\\n<br>\\n<b>Team Bonus:</b><br>\\nRelics visible on the map at the start of the game","120180":"Archer civilization<br>\\n<br>\\n• Enemy positions are revealed at the start of the game<br>\\n• Economic upgrades cost no wood and research 100% faster<br>\\n• Archery Range units +20% HP<br>\\n• Conscription free<br>\\n<br>\\n<b>Unique Units:</b><br>\\nRattan Archer (archer), Imperial Skirmisher (skirmisher)<br>\\n<br>\\n<b>Unique Techs:</b><br>\\n• Chatras (Battle Elephants +100 HP)<br>\\n• Paper Money (Lumberjacks slowly generate gold in addition to wood)<br>\\n<br>\\n<b>Team Bonus:</b><br>\\nImperial Skirmisher upgrade available in the Imperial Age","120181":"Infantry and Cavalry civilization<br>\\n<br>\\n• Militia-line upgrades free<br>\\n• Town Centers cost -50% stone<br>\\n• Blacksmith and Siege Workshop technologies cost -50% food<br>\\n• Can build Krepost<br>\\n<br>\\n<b>Unique Unit:</b><br>\\nKonnik (cavalry)<br>\\n<br>\\n<b>Unique Techs:</b><br>\\n• Stirrups (Cavalry attack 33% faster)<br>\\n• Bagains (Militia-line gains +5 armor)<br>\\n<br>\\n<b>Team Bonus:</b><br>\\nBlacksmiths work 80% faster","120182":"Cavalry Archer civilization<br>\\n<br>\\n• Villagers gather +50% food from herdables<br>\\n• New Town Centers spawn 2 Sheep starting in the Castle Age<br>\\n• Units deal +25% damage when fighting from higher elevation<br>\\n• Thumb Ring, Parthian Tactics free<br>\\n<br>\\n<b>Unique Units:</b><br>\\nKeshik (raiding cavalry), Flaming Camel (petard)<br>\\n<br>\\n<b>Unique Techs:</b><br>\\n• Silk Armor (Light Cavalry, Steppe Lancers and Cavalry Archers receive +1/+1P armor)<br>\\n• Timurid Siegecraft (Trebuchets +2 range, enables Flaming Camels)<br>\\n<br>\\n<b>Team Bonus:</b><br>\\nCavalry Archers +2 line of sight","120183":"Cavalry civilization<br>\\n<br>\\n• Additional Town Center can be built in the Feudal Age<br>\\n• Siege Workshop and Battering Ram available in the Feudal Age; Capped Ram upgrade available in Castle Age<br>\\n• Archery Ranges and Stables cost -75 wood<br>\\n• Cavalry 5% faster each age (starting in Feudal Age)<br>\\n<br>\\n<b>Unique Unit:</b><br>\\nKipchak (cavalry archer)<br>\\n<br>\\n<b>Unique Techs:</b><br>\\n• Steppe Husbandry (Light Cavalry, Steppe Lancers and Cavalry Archers trained 100% faster)<br>\\n• Cuman Mercenaries (team members can create 5 free Elite Kipchaks per Castle)<br>\\n<br>\\n<b>Team Bonus:</b><br>\\nPalisade Walls +33% HP","120184":"Cavalry and Monk civilization<br>\\n<br>\\n• Each Town Center provides 100 food<br>\\n• Spearman-line and Skirmishers move 10% faster<br>\\n• Each garrisoned relic gives +1 attack to Knights and Leitis (maximum +4)<br>\\n<br>\\n<b>Unique Units:</b><br>\\nLeitis (cavalry), Winged Hussar (cavalry)<br>\\n<br>\\n<b>Unique Techs:</b><br>\\n• Hill Forts (Town Centers +3 range)<br>\\n• Tower Shields (Spearman-line and Skirmishers +2P armor)<br>\\n<br>\\n<b>Team Bonus:</b><br>\\nMonasteries work 20% faster","120185":"Cavalry civilization<br>\\n<br>\\n• Economic upgrades available one age earlier and cost -33% food<br>\\n• Stable technologies cost -50%<br>\\n• Cavalier upgrade available in Castle Age<br>\\n• Gunpowder units +25% attack<br>\\n<br>\\n<b>Unique Units:</b><br>\\nCoustillier (cavalry), Flemish Militia (infantry)<br>\\n<br>\\n<b>Unique Techs:</b><br>\\n• Burgundian Vineyards (Farmers slowly generate gold in addition to food)<br>\\n• Flemish Revolution (Upgrades all existing Villagers to Flemish Militia; create Flemish Militia at Barracks)<br>\\n<br>\\n<b>Team Bonus:</b><br>\\nRelics generate both Gold & Food","120186":"Infantry and Cavalry civilization<br>\\n<br>\\n• Start with +100 stone<br>\\n• Castles built 50%, Town Centers built 100% faster<br>\\n• Land military units (except siege weapons) receive 33% less bonus damage<br>\\n• Farm upgrades provide +125% additional food<br>\\n• Donjon replaces Watch Tower-line<br>\\n<br>\\n<b>Unique Unit:</b><br>\\nSerjeant (infantry)<br>\\n<br>\\n<b>Unique Techs:</b><br>\\n• First Crusade (Each Town Center (maximum 5) spawns a one-time batch of 5 Serjeants; units more resistant to conversion)<br>\\n• Hauberk (Knights +1/+2P armor)<br>\\n<br>\\n<b>Team Bonus:</b><br>\\nTransport Ships +5 line of sight and cost -50%","120187":"Cavalry civilization<br>\\n<br>\\n• Villagers regenerate 10 HP per minute in Feudal, 15 in Castle, 20 in Imperial Age<br>\\n• Folwark replaces Mill<br>\\n• Stone Miners generate gold in addition to stone<br>\\n<br>\\n<b>Unique Units:</b><br>\\nObuch (infantry), Winged Hussar (cavalry)<br>\\n<br>\\n<b>Unique Techs:</b><br>\\n• Szlachta Privileges (Knights cost -60% gold)<br>\\n• Lechitic Legacy (Light Cavalry deals trample damage)<br>\\n<br>\\n<b>Team Bonus:</b><br>\\nScout Cavalry, Light Cavalry, Hussar +1 attack vs. Archers","120188":"Gunpowder and Monk civilization<br>\\n<br>\\n• Blacksmiths and Universities cost -100 wood<br>\\n• Chemistry and Hand Cannoneer available in Castle Age<br>\\n• Spearman-line deals +25% bonus damage<br>\\n• Fervor and Sanctity affect Villagers<br>\\n• Mining Camp technologies free<br>\\n<br>\\n<b>Unique Units:</b><br>\\nHussite Wagon (siege weapon), Houfnice (bombard cannon)<br>\\n<br>\\n<b>Unique Techs:</b><br>\\n• Wagenburg Tactics (Gunpowder units move 15% faster)<br>\\n• Hussite Reforms (Monks and Monastery technologies have their gold cost replaced by food)<br>\\n<br>\\n<b>Team Bonus:</b><br>\\nMarkets work 80% faster","120189":"Infantry and Naval civilization<br>\\n<br>\\n• Receive +200 wood when advancing to the next age<br>\\n• Fishermen and Fishing Ships carry +15<br>\\n• Barracks technologies cost -50%<br>\\n• Siege weapons cost -33% wood<br>\\n• Skirmishers and Elephant Archers attack 25% faster<br>\\n<br>\\n<b>Unique Units:</b><br>\\nUrumi Swordsman (infantry), Thirisadai (warship)<br>\\n<br>\\n<b>Unique Techs:</b><br>\\n• Medical Corps (Elephant units regenerate 30 HP per minute)<br>\\n• Wootz Steel (Infantry and cavalry attacks ignore armor)<br>\\n<br>\\n<b>Team Bonus:</b><br>\\nDocks provide +5 population room","120190":"Elephant and Naval civilization<br>\\n<br>\\n• Elephant units receive 25% less bonus damage and are more resistant to conversion<br>\\n• Town Centers spawn 2 Villagers when the next Age is reached<br>\\n• Cavalry +2 attack vs. Skirmishers<br>\\n• Ships regenerate 15 HP per minute<br>\\n• Monks +3/+3P armor<br>\\n<br>\\n<b>Unique Unit:</b><br>\\nRatha (cavalry archer/cavalry)<br>\\n<br>\\n<b>Unique Techs:</b><br>\\n• Paiks (Rathas and elephant units attack 20% faster)<br>\\n• Mahayana (Villagers and Monks take 10% less population space)<br>\\n<br>\\n<b>Team Bonus:</b><br>\\nTrade units yield 10% food in addition to gold","120191":"Cavalry and Camel civilization<br>\\n<br>\\n• Start with 2 Forage Bushes<br>\\n• Can garrison Mills with livestock to produce food<br>\\n• Mounted units deal +20% bonus damage Feudal, +30% Castle, +40% Imperial Age<br>\\n• Can garrison Docks with Fishing Ships<br>\\n<br>\\n<b>Unique Units:</b><br>\\nChakram Thrower (infantry), Shrivamsha Rider (cavalry), Camel Scout (camel rider)<br>\\n<br>\\n<b>Unique Techs:</b><br>\\n• Kshatriyas (Military units cost -25% food)<br>\\n• Frontier Guards (Camel Riders and Elephant Archers +4 melee armor)<br>\\n<br>\\n<b>Team Bonus:</b><br>\\nCamel and elephant units created 25% faster","120192":"Infantry civilization<br>\\n<br>\\n• Villagers gather, build, and repair 5% faster<br>\\n• Galley-line and Dromons +1/+1P armor<br>\\n• Infantry receives double effect from Blacksmith armor upgrades <br>\\n• Scorpions cost -60% gold and benefit from Ballistics research<br>\\n<br>\\n<b>Unique Unit:</b><br>\\nCenturion (cavalry), Legionary (infantry)<br>\\n<br>\\n<b>Unique Techs:</b><br>\\n• Ballistas (Scorpions fire 33% faster; Galley-line +2 attack)<br>\\n• Comitatenses (Militia-line, Knight-line, and Centurions train 50% faster and receive a charge attack)<br>\\n<br>\\n<b>Team Bonus:</b><br>\\nScorpion-line minimum range reduced","300081":"Key","300082":"Unique Unit","300083":"Unit","300084":"Building","300085":"Technology"}');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRtaW4uYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUNPO0FBQ2hHLDRDQUE0Qyx1SkFBd0Q7QUFDcEcsNENBQTRDLCtLQUFvRTtBQUNoSCw0Q0FBNEMseUtBQWlFO0FBQzdHLDRDQUE0Qyx1SkFBd0Q7QUFDcEcsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixtQ0FBbUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLEtBQUssS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGNBQWMsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsY0FBYyxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGNBQWMsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sTUFBTSxLQUFLLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxxQ0FBcUMsaUNBQWlDLDBEQUEwRCxLQUFLLFVBQVUsNkJBQTZCLG1CQUFtQiwyQkFBMkIsNkJBQTZCLHVCQUF1QixLQUFLLHFCQUFxQixvQkFBb0IsNkJBQTZCLG1CQUFtQixtRkFBbUYsNkJBQTZCLG1DQUFtQywwQkFBMEIsS0FBSyxrQkFBa0Isb0JBQW9CLDZCQUE2QixtQkFBbUIsNkJBQTZCLG1DQUFtQywwQkFBMEIsS0FBSyx1QkFBdUIsa0JBQWtCLEtBQUssb0JBQW9CLDJCQUEyQiw4QkFBOEIsMEJBQTBCLGVBQWUsc0JBQXNCLHVCQUF1Qix3QkFBd0IseUJBQXlCLDBCQUEwQiwwQkFBMEIsd0JBQXdCLEtBQUssZ0JBQWdCLDRCQUE0Qix3QkFBd0IseUJBQXlCLGtCQUFrQixvQkFBb0IsNkJBQTZCLHFCQUFxQixLQUFLLGtCQUFrQiw4QkFBOEIsS0FBSyxxQkFBcUIsb0JBQW9CLDZCQUE2QixLQUFLLHNCQUFzQixvQkFBb0IsNkJBQTZCLGtCQUFrQixLQUFLLHVCQUF1QixrQkFBa0IsS0FBSyxzQkFBc0IseUJBQXlCLGtCQUFrQix5QkFBeUIsc0JBQXNCLEtBQUssb0JBQW9CLDJCQUEyQiw2QkFBNkIsS0FBSyx3QkFBd0IsMkJBQTJCLHNCQUFzQixvQ0FBb0Msa0JBQWtCLEtBQUssNEJBQTRCLDJCQUEyQiw2QkFBNkIsMEJBQTBCLDhCQUE4QixLQUFLLHFCQUFxQiwyQkFBMkIsa0JBQWtCLG9DQUFvQyxLQUFLLHNCQUFzQixvQkFBb0Isa0JBQWtCLDhCQUE4QixLQUFLLHFCQUFxQiwwQkFBMEIsbUJBQW1CLDBCQUEwQix5QkFBeUIsNEJBQTRCLDRCQUE0QiwwQkFBMEIsc0JBQXNCLEtBQUsseUJBQXlCLDBCQUEwQiwyQkFBMkIsNkJBQTZCLDBCQUEwQix3Q0FBd0MsS0FBSywyQkFBMkIsK0JBQStCLEtBQUssMEJBQTBCLDJCQUEyQixLQUFLLHlCQUF5QixrQkFBa0IsbUJBQW1CLDJCQUEyQixLQUFLLHNCQUFzQixrQkFBa0IsbUJBQW1CLDJCQUEyQixxQ0FBcUMsS0FBSyxxQ0FBcUMsMkJBQTJCLDZCQUE2QiwwQkFBMEIscUNBQXFDLGdGQUFnRiwrQkFBK0IsbUJBQW1CLDBCQUEwQixpQkFBaUIsS0FBSyxxREFBcUQsMkJBQTJCLDBCQUEwQiwwQkFBMEIsaUJBQWlCLEtBQUssMkNBQTJDLDJCQUEyQiwwQkFBMEIsMEJBQTBCLHdCQUF3Qix5QkFBeUIsd0VBQXdFLEtBQUssMkNBQTJDLG1CQUFtQiwwQkFBMEIscUVBQXFFLEtBQUssdURBQXVELG1CQUFtQiwwQkFBMEIsNERBQTRELCtCQUErQixLQUFLLGtEQUFrRCx5QkFBeUIsd0JBQXdCLDBCQUEwQiwyQkFBMkIseUJBQXlCLHdFQUF3RSxpQkFBaUIsS0FBSyw2Q0FBNkMsbUJBQW1CLG1CQUFtQix5QkFBeUIsaUJBQWlCLGVBQWUsS0FBSyx3Q0FBd0MsMkJBQTJCLDZCQUE2QiwwQkFBMEIsMkJBQTJCLGtCQUFrQixtQkFBbUIsNkJBQTZCLGlCQUFpQixLQUFLLDJEQUEyRCwyQkFBMkIsc0JBQXNCLGlCQUFpQixvQ0FBb0MsOEJBQThCLEtBQUssbUZBQW1GLDJCQUEyQix5QkFBeUIsNkJBQTZCLEtBQUssb0ZBQW9GLHFCQUFxQixrQkFBa0IsMkJBQTJCLDBCQUEwQiw4QkFBOEIsNEJBQTRCLG9DQUFvQyx5QkFBeUIsNERBQTRELCtCQUErQixLQUFLLCtGQUErRiw4QkFBOEIsc0JBQXNCLGlCQUFpQiw0QkFBNEIseUJBQXlCLDRCQUE0QiwrQkFBK0IsS0FBSyxnR0FBZ0csNEJBQTRCLHNCQUFzQixpQkFBaUIsNEJBQTRCLHlCQUF5Qiw0QkFBNEIsK0JBQStCLEtBQUssK0ZBQStGLDhCQUE4QixzQkFBc0Isb0JBQW9CLDRCQUE0Qix5QkFBeUIsNEJBQTRCLCtCQUErQixLQUFLLGdHQUFnRyw0QkFBNEIsc0JBQXNCLG9CQUFvQiw0QkFBNEIseUJBQXlCLDRCQUE0QiwrQkFBK0IsS0FBSyxrREFBa0QsMEJBQTBCLDREQUE0RCwrQkFBK0IsbUJBQW1CLEtBQUssdURBQXVELHVFQUF1RSw2QkFBNkIseUJBQXlCLGlCQUFpQixrQkFBa0IsbUJBQW1CLEtBQUssK0RBQStELDJCQUEyQixzQkFBc0IsaUJBQWlCLG9DQUFvQyx1QkFBdUIsS0FBSyx1RkFBdUYsMkJBQTJCLHlCQUF5Qiw2QkFBNkIsS0FBSyxzQkFBc0IsZ0NBQWdDLEtBQUssaUJBQWlCLDRCQUE0QixLQUFLLGlCQUFpQiw0QkFBNEIseUJBQXlCLHFCQUFxQixrQkFBa0IsS0FBSyxtQkFBbUIsb0JBQW9CLEtBQUssYUFBYSw2QkFBNkIsZ0JBQWdCLHNCQUFzQixjQUFjLHlCQUF5QixlQUFlLGFBQWEsdUJBQXVCLEtBQUssb0JBQW9CLDZCQUE2QixrQkFBa0Isb0JBQW9CLG1CQUFtQixnQkFBZ0IseUJBQXlCLHVCQUF1QixrQkFBa0IsS0FBSyw2QkFBNkIsZ0NBQWdDLEtBQUssb0NBQW9DLGtDQUFrQyxLQUFLLG1CQUFtQiwwQkFBMEIsS0FBSywwQkFBMEIseUJBQXlCLEtBQUssNEJBQTRCLDRKQUE0SixtQ0FBbUMsb0NBQW9DLHFDQUFxQyx3SkFBd0osMkJBQTJCLDRCQUE0Qiw2QkFBNkIsS0FBSywwQ0FBMEMsNEpBQTRKLG1DQUFtQyxvQ0FBb0MscUNBQXFDLHdKQUF3SiwyQkFBMkIsNEJBQTRCLDZCQUE2QixrREFBa0QsS0FBSyxzQ0FBc0MsNEpBQTRKLG1DQUFtQyxvQ0FBb0MscUNBQXFDLHdKQUF3SiwyQkFBMkIsNEJBQTRCLDZCQUE2QixvREFBb0QsS0FBSyxpQ0FBaUMsWUFBWSxzQ0FBc0MsOEJBQThCLE9BQU8sVUFBVSxvQ0FBb0MsNEJBQTRCLE9BQU8sS0FBSyxrQ0FBa0MsWUFBWSxvQ0FBb0MsNEJBQTRCLE9BQU8sVUFBVSxzQ0FBc0MsOEJBQThCLE9BQU8sS0FBSyx1QkFBdUI7QUFDajhiO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7OztBQ25hMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUN6QmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksc0ZBQU8sVUFBVSxzRkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNuRmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2I0QztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkRBQTZELFVBQVUsY0FBYyxnQkFBZ0I7QUFDckcsNEJBQTRCLDJEQUEyRDtBQUN2RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxREFBVztBQUNoQztBQUNBLHVCQUF1QixxREFBVztBQUNsQyxLQUFLLGNBQWM7QUFDbkI7QUFDQTtBQUNBLGdDQUFnQyxZQUFZLGFBQWEsMkJBQTJCO0FBQ3BGLDREQUE0RCxlQUFlO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkRBQTZELFlBQVksU0FBUyxhQUFhO0FBQy9GLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxREFBVztBQUNoQztBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsY0FBYztBQUN6QztBQUNBO0FBQ0E7QUFDNkI7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyRDdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDdUI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JxQztBQUNiO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qix3REFBYztBQUMxQztBQUNBLElBQUksb0VBQVc7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLDBCQUEwQjtBQUN4RCx5Q0FBeUMsMEJBQTBCO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0QsU0FBUztBQUM3RDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0Esa0NBQWtDLG1CQUFtQjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdFQUFnRSxTQUFTO0FBQ3pFO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxvREFBb0QsZ0VBQWdFO0FBQ3BILFFBQVE7QUFDUjtBQUNBO0FBQ0EsS0FBSztBQUNMLHlDQUF5QywwQkFBMEI7QUFDbkU7QUFDQTtBQUNBLDZEQUE2RCxrRkFBa0Y7QUFDL0ksTUFBTTtBQUNOLDZFQUE2RSx1REFBdUQ7QUFDcEk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixnQkFBZ0I7QUFDcEMsc0VBQXNFLEVBQUU7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsdUJBQXVCLEVBQUUsaUNBQWlDO0FBQ3pFO0FBQ0E7QUFDQTtBQUN1Qjs7Ozs7Ozs7Ozs7Ozs7OztBQ3BKdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzBCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVFc7QUFDTTtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0Esb0JBQW9CLDBFQUEwRTtBQUM5RixXQUFXLDZFQUE2RTtBQUN4RjtBQUNBLGlCQUFpQixnRUFBZ0U7QUFDakYsYUFBYSwwREFBMEQ7QUFDdkUsc0JBQXNCLDZDQUE2QztBQUNuRSxnQkFBZ0IscUtBQXFLO0FBQ3JMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxzQ0FBc0MsRUFBRSxpQkFBaUI7QUFDeEU7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGlEQUFvQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixxREFBd0I7QUFDOUMseUJBQXlCLDBDQUFhO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpREFBb0I7QUFDMUM7QUFDQTtBQUNBLG9CQUFvQixrREFBcUI7QUFDekMsOENBQThDO0FBQzlDO0FBQ0E7QUFDQSxlQUFlLDBDQUFhO0FBQzVCO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsUUFBUTtBQUMzRDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLHVDQUF1QztBQUM5RTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLHVDQUF1Qyw0QkFBNEI7QUFDbkUsWUFBWTtBQUNaLHVDQUF1Qyw2QkFBNkI7QUFDcEU7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDbUk7Ozs7Ozs7Ozs7O0FDN0huSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2hFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzdHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsZUFBZSxHQUFHLGVBQWU7QUFDNUQ7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EscUNBQXFDLGlGQUE2QztBQUNsRiwrQ0FBK0MsNEZBQXdEO0FBQ3ZHLDJDQUEyQyx1RkFBbUQ7QUFDOUYsMkNBQTJDLHlGQUFxRDtBQUNoRztBQUNvRjs7Ozs7Ozs7Ozs7QUN4QnBGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzlIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGVBQWUsR0FBRyxlQUFlO0FBQzVEO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLGtGQUE4QztBQUNuRjtBQUNBO0FBQ0Esc0NBQXNDLHVDQUF1QztBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDNkM7Ozs7Ozs7Ozs7O0FDM0I3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hFbUc7QUFDbEI7QUFDRjtBQUMvRTtBQUMrRTtBQUMvRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLHVGQUFpQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsMkVBQWlCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLHdFQUFjO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLHNDQUFzQyxFQUFFLGlCQUFpQjtBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsaUVBQVcsY0FBYztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLDZGQUEyQjtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDJFQUFxQixjQUFjO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsdUVBQWlCLGNBQWM7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDMEI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25HcUM7QUFDb0U7QUFDbkk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDBGQUF3QjtBQUM3QztBQUNBO0FBQ0EsNkJBQTZCLG9HQUFrQztBQUMvRDtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsb0dBQWtDO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixvR0FBa0M7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsdUVBQWlCLG9DQUFvQztBQUNsRjtBQUNBO0FBQ0EsdUJBQXVCLGlGQUFlO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzZCOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JHbUI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsS0FBSyxLQUFLLHVDQUF1QztBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MscURBQVc7QUFDakQ7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLHFEQUFXO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyx1Q0FBdUMscUVBQXFFO0FBQ2hKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsYUFBYTtBQUN6QyxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDOEI7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5SzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsdUJBQXVCO0FBQ3BEO0FBQ0EsNkJBQTZCLDZCQUE2QjtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUMwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNURtRTtBQUN6QjtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsNEVBQVc7QUFDdkMsbUNBQW1DLHFHQUFrQjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDcUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QndCO0FBQytCO0FBQ0s7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIseUZBQWM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixxREFBVztBQUN0QztBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsOERBQThELFFBQVEsOERBQThEO0FBQzVLO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHdGQUFXO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDc0I7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3RHRCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyx5QkFBeUI7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsZ0RBQWdEO0FBQzFGLHVDQUF1QyxnREFBZ0Q7QUFDdkYsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxnREFBZ0Q7QUFDbEYsMkNBQTJDLGdEQUFnRDtBQUMzRiw2QkFBNkIsZ0RBQWdEO0FBQzdFLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDbUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsR25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDdUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCRjtBQUNyQjtBQUM2QztBQUNQO0FBQ2tDO0FBQ2hCO0FBQ0o7QUFDRTtBQUNJO0FBQzFEO0FBQ0Esc0JBQXNCLHNEQUFjO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixpRkFBdUI7QUFDbkQ7QUFDQTtBQUNBLG1CQUFtQiwrQ0FBUTtBQUMzQjtBQUNBO0FBQ0EsSUFBSTtBQUNKLGtDQUFrQywwQ0FBMEM7QUFDNUUsTUFBTSw2REFBUztBQUNmLENBQUM7QUFDRDtBQUNBLE1BQU0saUVBQVc7QUFDakIsQ0FBQztBQUNELHVDQUF1QywwQ0FBMEM7QUFDakY7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLDRCQUE0QixtRUFBaUI7QUFDN0M7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNvQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RlY2gtb3ZlcmxheS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdGVjaC1vdmVybGF5Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90ZWNoLW92ZXJsYXkvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RlY2gtb3ZlcmxheS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RlY2gtb3ZlcmxheS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90ZWNoLW92ZXJsYXkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdGVjaC1vdmVybGF5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90ZWNoLW92ZXJsYXkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdGVjaC1vdmVybGF5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RlY2gtb3ZlcmxheS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RlY2gtb3ZlcmxheS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RlY2gtb3ZlcmxheS8uL3NyYy9jbGllbnQtd2Vic29ja2V0LmpzIiwid2VicGFjazovL3RlY2gtb3ZlcmxheS8uL3NyYy9jb21tb24tZGF0YS5qcyIsIndlYnBhY2s6Ly90ZWNoLW92ZXJsYXkvLi9zcmMvY29tcG9uZW50cy9jaXYtaWNvbnMvY2l2LWljb24tbGlzdC5qcyIsIndlYnBhY2s6Ly90ZWNoLW92ZXJsYXkvLi9zcmMvY29tcG9uZW50cy9jaXYtaWNvbnMvY2l2LWljb24uanMiLCJ3ZWJwYWNrOi8vdGVjaC1vdmVybGF5Ly4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtZGF0YS9kYXRhLWhlbHBlci5qcyIsIndlYnBhY2s6Ly90ZWNoLW92ZXJsYXkvLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi1lbWJsZW1zLyBzeW5jIFxcLihwbmcpJCIsIndlYnBhY2s6Ly90ZWNoLW92ZXJsYXkvLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi11bmlxdWUtdW5pdHMvIHN5bmMgXFwuKHBuZykkIiwid2VicGFjazovL3RlY2gtb3ZlcmxheS8uL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvaWNvbnMvIHN5bmMgXFwuKHBuZykkIiwid2VicGFjazovL3RlY2gtb3ZlcmxheS8uL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvaW1hZ2UtaGVscGVyLmpzIiwid2VicGFjazovL3RlY2gtb3ZlcmxheS8uL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy8gc3luYyBcXC4ocG5nKSQiLCJ3ZWJwYWNrOi8vdGVjaC1vdmVybGF5Ly4vc3JjL2NvbXBvbmVudHMvY2l2LXNvdW5kcy9zb3VuZC1oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vdGVjaC1vdmVybGF5Ly4vc3JjL2NvbXBvbmVudHMvY2l2LXNvdW5kcy9zb3VuZHMvIHN5bmMgXFwuKG1wMykkIiwid2VicGFjazovL3RlY2gtb3ZlcmxheS8uL3NyYy9jb21wb25lbnRzL2Npdi10ZWNoLW92ZXJsYXkvY2l2LXRlY2gtb3ZlcmxheS5qcyIsIndlYnBhY2s6Ly90ZWNoLW92ZXJsYXkvLi9zcmMvY29tcG9uZW50cy9jaXYtdXBncmFkZS1vdmVybGF5L2Npdi11cGdyYWRlLW92ZXJsYXkuanMiLCJ3ZWJwYWNrOi8vdGVjaC1vdmVybGF5Ly4vc3JjL2NvbXBvbmVudHMvdGVjaC1vdmVybGF5LWNvbnRyb2wvdGVjaC1vdmVybGF5LWNvbnRyb2wuanMiLCJ3ZWJwYWNrOi8vdGVjaC1vdmVybGF5Ly4vc3JjL2RhdGFzdG9yZS5qcyIsIndlYnBhY2s6Ly90ZWNoLW92ZXJsYXkvLi9zcmMvaHRtbC1wYWdlcy9hZG1pbi1wYWdlLmpzIiwid2VicGFjazovL3RlY2gtb3ZlcmxheS8uL3NyYy9odG1sLXBhZ2VzL2NsaWVudC1wYWdlLmpzIiwid2VicGFjazovL3RlY2gtb3ZlcmxheS8uL3NyYy9odG1sLXBhZ2VzL2RlZmF1bHQtZWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vdGVjaC1vdmVybGF5Ly4vc3JjL2h0bWwtcGFnZXMvaW52YWxpZC1wYWdlLmpzIiwid2VicGFjazovL3RlY2gtb3ZlcmxheS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90ZWNoLW92ZXJsYXkvLi9zcmMvbXlyb3V0ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ZvbnRzL0lyb25zdHJpa2VTZW1pQm9sZC5vdGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9pbWFnZXMvaW5nYW1lX2RpcGxvbWFjeS1tZW51X2JnX2Z1bGwucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9jb21wb25lbnRzL2Npdi10ZWNoLW92ZXJsYXkvaW1hZ2VzL3BhcGVyLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4vY29tcG9uZW50cy9jaXYtaW1hZ2VzL21pc2MvdmV0by5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1lbWItRm9udFwiO1xyXG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xyXG59XHJcbmh0bWwge1xyXG4gIGZvbnQtZmFtaWx5OiBNZW1iLUZvbnQ7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmFkbWluLWJvZHkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5jbGllbnQtYm9keSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmJvZHktY29udGVudCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5teS1oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAyMCU7XHJcbiAgYm9yZGVyLXRvcDogMHB4O1xyXG4gIGJvcmRlci1sZWZ0OiAwcHg7XHJcbiAgYm9yZGVyLXJpZ2h0OiAwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4O1xyXG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBwYWRkaW5nLXRvcDogMnJlbTtcclxufVxyXG4ubXktZm9vdGVyIHtcclxuICBjb2xvcjogYmxhbmNoZWRhbG1vbmQ7XHJcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBmbGV4LXNocmluazogMDtcclxufVxyXG4ubXktZm9vdGVyIGEge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJlaWdlO1xyXG59XHJcblxyXG4uYWRtaW4tcGFnZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4ubGVmdC1jb2x1bW4ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDAuNXJlbTtcclxufVxyXG5cclxuLmlucHV0LW51bWJlciB7XHJcbiAgd2lkdGg6IDNyZW07XHJcbn1cclxuXHJcbi50ZWNoLWhlYWRlciB7XHJcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW46IDAuMjVyZW07XHJcbn1cclxuLnRlY2gtc2V0dGluZ3Mge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi50ZWNoLWNpdi1saXN0IHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgZ2FwOiAwLjVyZW07XHJcbn1cclxuXHJcbi5zZXR0aW5nLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5hY3Rpb24tYnV0dG9ucyB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbn1cclxuLmFjdGlvbi1zZXR0aW5ncyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDAuNXJlbTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4uc2V0dGluZy1idXR0b24ge1xyXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDFyZW0gMTZyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiB4eC1sYXJnZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5hZG1pbi1jaXYtaWNvbiB7XHJcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggMXB4IGJsYWNrO1xyXG59XHJcbi5hZG1pbi1jaXYtaWNvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmlzcXVlO1xyXG59XHJcbi5hZG1pbi1jaXYtaWNvbiBzcGFuIHtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG4uYWRtaW4tY2l2LWljb24gaW1nIHtcclxuICB3aWR0aDogNXJlbTtcclxuICBoZWlnaHQ6IDVyZW07XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuXHJcbi5jbGllbnQtcGFnZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLmNpdi10ZWNoLW92ZXJsYXktY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogcm91bmQ7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBhZGRpbmctdG9wOiAxLjVyZW07XHJcbiAgd2lkdGg6IDI1JTtcclxufVxyXG4uY2l2LXRlY2gtb3ZlcmxheS1jb250YWluZXIgLmNpdi1uYW1lLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuLmNpdi10ZWNoLW92ZXJsYXktY29udGFpbmVyIC5jaXYtbmFtZSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmb250LXNpemU6IHh4LWxhcmdlO1xyXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcclxuICB0ZXh0LXNoYWRvdzogLTFweCAwIHdoaXRlLCAwIDFweCB3aGl0ZSwgMXB4IDAgd2hpdGUsIDAgLTFweCB3aGl0ZTtcclxufVxyXG4uY2l2LXRlY2gtb3ZlcmxheS1jb250YWluZXIgLmNpdi1pY29uIHtcclxuICBoZWlnaHQ6IDVyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAuNzVyZW0gMC43NXJlbSAwLjVyZW0gcmdiYSgwLCAwLCAwLCAwLjUpKTtcclxufVxyXG4uY2l2LXRlY2gtb3ZlcmxheS1jb250YWluZXIgLmNpdi11bmlxdWUtdW5pdC1pY29uIHtcclxuICBoZWlnaHQ6IDVyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICBib3gtc2hhZG93OiAwLjc1cmVtIDAuNzVyZW0gMC41cmVtIHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICBib3JkZXI6IHNpbHZlciBzb2xpZCAxcHg7XHJcbn1cclxuLmNpdi10ZWNoLW92ZXJsYXktY29udGFpbmVyIC5jaXYtZGVzY3JpcHRpb24ge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nLXRvcDogMXJlbTtcclxuICBtYXJnaW4tbGVmdDogMC41cmVtO1xyXG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xyXG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxuICB0ZXh0LXNoYWRvdzogLTFweCAwIGtoYWtpLCAwIDFweCBraGFraSwgMXB4IDAga2hha2ksIDAgLTFweCBraGFraTtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcbi5jaXYtdGVjaC1vdmVybGF5LWNvbnRhaW5lciAuY2l2LWVtYmxlbSB7XHJcbiAgb3BhY2l0eTogMC43O1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogMDtcclxuICB0b3A6IDQ1JTtcclxufVxyXG5cclxuLmNpdi11cGdyYWRlLW92ZXJsYXktY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBhZGRpbmctYm90dG9tOiAyLjVyZW07XHJcbiAgei1pbmRleDogMjtcclxufVxyXG4uY2l2LXVwZ3JhZGUtb3ZlcmxheS1jb250YWluZXIgLmNpdi11cGdyYWRlLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIHdpZHRoOiA5NSU7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgcGFkZGluZy1ib3R0b206IDAuNzVyZW07XHJcbn1cclxuLmNpdi11cGdyYWRlLW92ZXJsYXktY29udGFpbmVyIC5jaXYtdXBncmFkZS1jb250YWluZXIgLnVwZ3JhZGUtaWNvbi1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcbi5jaXYtdXBncmFkZS1vdmVybGF5LWNvbnRhaW5lciAudXBncmFkZS1pY29uLWNvbnRhaW5lciAudXBncmFkZS10aWVyLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IGluaGVyaXQ7XHJcbiAgaGVpZ2h0OiAyNSU7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICBib3JkZXItcmFkaXVzOiAwLjNyZW07XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgbWFyZ2luLXRvcDogMC4xcmVtO1xyXG4gIGJveC1zaGFkb3c6IDAuNzVyZW0gMC43NXJlbSAwLjVyZW0gcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gIGJvcmRlcjogeWVsbG93IHNvbGlkIDFweDtcclxufVxyXG4uY2l2LXVwZ3JhZGUtb3ZlcmxheS1jb250YWluZXIgLnVwZ3JhZGUtaWNvbi1jb250YWluZXIgLnVwZ3JhZGUtdGllci1jb250YWluZXIgLmVuYWJsZWQtMSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbiAgaGVpZ2h0OiAwLjc1cmVtO1xyXG4gIHdpZHRoOiA4NSU7XHJcbiAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xyXG4gIG1hcmdpbi10b3A6IDAuMnJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAwLjJyZW07XHJcbiAgYm9yZGVyOiB5ZWxsb3cgc29saWQgMXB4O1xyXG59XHJcbi5jaXYtdXBncmFkZS1vdmVybGF5LWNvbnRhaW5lciAudXBncmFkZS1pY29uLWNvbnRhaW5lciAudXBncmFkZS10aWVyLWNvbnRhaW5lciAuZGlzYWJsZWQtMSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gIGhlaWdodDogMC43NXJlbTtcclxuICB3aWR0aDogODUlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcclxuICBtYXJnaW4tdG9wOiAwLjJyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMC4ycmVtO1xyXG4gIGJvcmRlcjogeWVsbG93IHNvbGlkIDFweDtcclxufVxyXG4uY2l2LXVwZ3JhZGUtb3ZlcmxheS1jb250YWluZXIgLnVwZ3JhZGUtaWNvbi1jb250YWluZXIgLnVwZ3JhZGUtdGllci1jb250YWluZXIgLmVuYWJsZWQtMyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbiAgaGVpZ2h0OiAwLjc1cmVtO1xyXG4gIHdpZHRoOiAxLjJyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xyXG4gIG1hcmdpbi10b3A6IDAuMnJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAwLjJyZW07XHJcbiAgYm9yZGVyOiB5ZWxsb3cgc29saWQgMXB4O1xyXG59XHJcbi5jaXYtdXBncmFkZS1vdmVybGF5LWNvbnRhaW5lciAudXBncmFkZS1pY29uLWNvbnRhaW5lciAudXBncmFkZS10aWVyLWNvbnRhaW5lciAuZGlzYWJsZWQtMyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gIGhlaWdodDogMC43NXJlbTtcclxuICB3aWR0aDogMS4ycmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcclxuICBtYXJnaW4tdG9wOiAwLjJyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMC4ycmVtO1xyXG4gIGJvcmRlcjogeWVsbG93IHNvbGlkIDFweDtcclxufVxyXG4uY2l2LXVwZ3JhZGUtb3ZlcmxheS1jb250YWluZXIgLnVwZ3JhZGUtaWNvbiB7XHJcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICBib3gtc2hhZG93OiAwLjc1cmVtIDAuNzVyZW0gMC41cmVtIHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICBib3JkZXI6IHllbGxvdyBzb2xpZCAxcHg7XHJcbiAgaGVpZ2h0OiA1cmVtO1xyXG59XHJcbi5jaXYtdXBncmFkZS1vdmVybGF5LWNvbnRhaW5lciAuZGlzYWJsZS1pY29uLW1lc28ge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX199KTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAxO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNXJlbTtcclxufVxyXG4uY2l2LXVwZ3JhZGUtb3ZlcmxheS1jb250YWluZXIgLmNpdi1lY28tdXBncmFkZS1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICB3aWR0aDogOTUlO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gIHBhZGRpbmc6IDAuNzVyZW07XHJcbn1cclxuLmNpdi11cGdyYWRlLW92ZXJsYXktY29udGFpbmVyIC5jaXYtZWNvLXVwZ3JhZGUtY29udGFpbmVyIC51cGdyYWRlLWljb24tY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmJ1dHRvbi1ibHVlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4Y2JhO1xyXG59XHJcbi5idXR0b24tcmVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5zd2l0Y2gge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiAyLjFyZW07XHJcbiAgd2lkdGg6IDRyZW07XHJcbn1cclxuLnN3aXRjaCBpbnB1dCB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4uc2xpZGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xyXG4gIGJvdHRvbTogMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgbGVmdDogMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIHRyYW5zaXRpb246IDAuNHM7XHJcbn1cclxuLnNsaWRlcjpiZWZvcmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYm90dG9tOiA0cHg7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBoZWlnaHQ6IDI2cHg7XHJcbiAgbGVmdDogNHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0cmFuc2l0aW9uOiAwLjRzO1xyXG4gIHdpZHRoOiAyNnB4O1xyXG59XHJcbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjZiYjZhO1xyXG59XHJcbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xyXG59XHJcbi5zbGlkZXIucm91bmQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbn1cclxuLnNsaWRlci5yb3VuZDpiZWZvcmUge1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLm1hc2staW1nLXZlcnRpY2FsIHtcclxuICAtd2Via2l0LW1hc2staW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIHRyYW5zcGFyZW50IDMzLjMlLCBoc2xhKDAsIDAlLCAxMDAlLCAwKSAzMy40JSwgaHNsYSgwLCAwJSwgMTAwJSwgMC45KSA2Ni42JSwgaHNsYSgwLCAwJSwgMTAwJSwgMC45KSAxMDAlKTtcclxuICAtd2Via2l0LW1hc2stc2l6ZTogMTAwJSAzMDAlO1xyXG4gIC13ZWJraXQtbWFzay1wb3NpdGlvbjogMCAyMDAlO1xyXG4gIC13ZWJraXQtbWFzay1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuXHJcbiAgbWFzay1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgdHJhbnNwYXJlbnQgMzMuMyUsIGhzbGEoMCwgMCUsIDEwMCUsIDApIDMzLjQlLCBoc2xhKDAsIDAlLCAxMDAlLCAwLjkpIDY2LjYlLCBoc2xhKDAsIDAlLCAxMDAlLCAwLjkpIDEwMCUpO1xyXG4gIG1hc2stc2l6ZTogMTAwJSAzMDAlO1xyXG4gIG1hc2stcG9zaXRpb246IDAgMjAwJTtcclxuICBtYXNrLXJlcGVhdDogbm8tcmVwZWF0O1xyXG59XHJcblxyXG4uY2l2LXRlY2gtYW5pbWF0aW9uLWVudGVyLWFjdGl2ZSB7XHJcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCB0cmFuc3BhcmVudCAzMy4zJSwgaHNsYSgwLCAwJSwgMTAwJSwgMCkgMzMuNCUsIGhzbGEoMCwgMCUsIDEwMCUsIDAuOSkgNjYuNiUsIGhzbGEoMCwgMCUsIDEwMCUsIDAuOSkgMTAwJSk7XHJcbiAgLXdlYmtpdC1tYXNrLXNpemU6IDEwMCUgMzAwJTtcclxuICAtd2Via2l0LW1hc2stcG9zaXRpb246IDAgMjAwJTtcclxuICAtd2Via2l0LW1hc2stcmVwZWF0OiBuby1yZXBlYXQ7XHJcblxyXG4gIG1hc2staW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIHRyYW5zcGFyZW50IDMzLjMlLCBoc2xhKDAsIDAlLCAxMDAlLCAwKSAzMy40JSwgaHNsYSgwLCAwJSwgMTAwJSwgMC45KSA2Ni42JSwgaHNsYSgwLCAwJSwgMTAwJSwgMC45KSAxMDAlKTtcclxuICBtYXNrLXNpemU6IDEwMCUgMzAwJTtcclxuICBtYXNrLXBvc2l0aW9uOiAwIDIwMCU7XHJcbiAgbWFzay1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBhbmltYXRpb246IG1hc2stbW92ZS1pbiAycyBlYXNlLWluIGZvcndhcmRzO1xyXG59XHJcbi5jaXYtdGVjaC1hbmltYXRpb24tbGVhdmUtYWN0aXZlIHtcclxuICAtd2Via2l0LW1hc2staW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIHRyYW5zcGFyZW50IDMzLjMlLCBoc2xhKDAsIDAlLCAxMDAlLCAwKSAzMy40JSwgaHNsYSgwLCAwJSwgMTAwJSwgMC45KSA2Ni42JSwgaHNsYSgwLCAwJSwgMTAwJSwgMC45KSAxMDAlKTtcclxuICAtd2Via2l0LW1hc2stc2l6ZTogMTAwJSAzMDAlO1xyXG4gIC13ZWJraXQtbWFzay1wb3NpdGlvbjogMCAyMDAlO1xyXG4gIC13ZWJraXQtbWFzay1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuXHJcbiAgbWFzay1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgdHJhbnNwYXJlbnQgMzMuMyUsIGhzbGEoMCwgMCUsIDEwMCUsIDApIDMzLjQlLCBoc2xhKDAsIDAlLCAxMDAlLCAwLjkpIDY2LjYlLCBoc2xhKDAsIDAlLCAxMDAlLCAwLjkpIDEwMCUpO1xyXG4gIG1hc2stc2l6ZTogMTAwJSAzMDAlO1xyXG4gIG1hc2stcG9zaXRpb246IDAgMjAwJTtcclxuICBtYXNrLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGFuaW1hdGlvbjogbWFzay1tb3ZlLW91dCAycyBlYXNlLW91dCBmb3J3YXJkcztcclxufVxyXG5cclxuQGtleWZyYW1lcyBtYXNrLW1vdmUtaW4ge1xyXG4gIGZyb20ge1xyXG4gICAgLXdlYmtpdC1tYXNrLXBvc2l0aW9uOiAwIDEwMCU7XHJcbiAgICBtYXNrLXBvc2l0aW9uOiAwIDEwMCU7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIC13ZWJraXQtbWFzay1wb3NpdGlvbjogMCAwJTtcclxuICAgIG1hc2stcG9zaXRpb246IDAgMCU7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIG1hc2stbW92ZS1vdXQge1xyXG4gIGZyb20ge1xyXG4gICAgLXdlYmtpdC1tYXNrLXBvc2l0aW9uOiAwIDAlO1xyXG4gICAgbWFzay1wb3NpdGlvbjogMCAwJTtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgLXdlYmtpdC1tYXNrLXBvc2l0aW9uOiAwIDEwMCU7XHJcbiAgICBtYXNrLXBvc2l0aW9uOiAwIDEwMCU7XHJcbiAgfVxyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHdCQUF3QjtFQUN4Qiw0Q0FBaUQ7QUFDbkQ7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLHNCQUFzQjtFQUN0QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWix5REFBMEU7RUFDMUUsc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsUUFBUTtFQUNSLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsY0FBYztBQUNoQjtBQUNBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0Usb0JBQW9CO0VBQ3BCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0Usb0JBQW9CO0VBQ3BCLFdBQVc7RUFDWCw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixpQ0FBaUM7QUFDbkM7QUFDQTtFQUNFLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0Usb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5Qix5REFBdUU7RUFDdkUsd0JBQXdCO0VBQ3hCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsVUFBVTtBQUNaO0FBQ0E7RUFDRSxvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixVQUFVO0FBQ1o7QUFDQTtFQUNFLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsaUVBQWlFO0FBQ25FO0FBQ0E7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLDhEQUE4RDtBQUNoRTtBQUNBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixxREFBcUQ7RUFDckQsd0JBQXdCO0FBQzFCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGlFQUFpRTtFQUNqRSxVQUFVO0FBQ1o7QUFDQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsV0FBVztFQUNYLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsVUFBVTtBQUNaO0FBQ0E7RUFDRSxvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLFVBQVU7RUFDViw2QkFBNkI7RUFDN0IsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckIsNkJBQTZCO0VBQzdCLGtCQUFrQjtFQUNsQixxREFBcUQ7RUFDckQsd0JBQXdCO0FBQzFCO0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLFVBQVU7RUFDVixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQix3QkFBd0I7QUFDMUI7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsVUFBVTtFQUNWLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsd0JBQXdCO0FBQzFCO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQix3QkFBd0I7QUFDMUI7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixxREFBcUQ7RUFDckQsd0JBQXdCO0VBQ3hCLFlBQVk7QUFDZDtBQUNBO0VBQ0UseURBQThEO0VBQzlELHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFDQTtFQUNFLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsVUFBVTtFQUNWLDZCQUE2QjtFQUM3QixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxXQUFXO0FBQ2I7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxlQUFlO0VBQ2YsT0FBTztFQUNQLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsTUFBTTtFQUNOLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBWTtFQUNaLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSwyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UscUpBQXFKO0VBQ3JKLDRCQUE0QjtFQUM1Qiw2QkFBNkI7RUFDN0IsOEJBQThCOztFQUU5Qiw2SUFBNkk7RUFDN0ksb0JBQW9CO0VBQ3BCLHFCQUFxQjtFQUNyQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxxSkFBcUo7RUFDckosNEJBQTRCO0VBQzVCLDZCQUE2QjtFQUM3Qiw4QkFBOEI7O0VBRTlCLDZJQUE2STtFQUM3SSxvQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QiwyQ0FBMkM7QUFDN0M7QUFDQTtFQUNFLHFKQUFxSjtFQUNySiw0QkFBNEI7RUFDNUIsNkJBQTZCO0VBQzdCLDhCQUE4Qjs7RUFFOUIsNklBQTZJO0VBQzdJLG9CQUFvQjtFQUNwQixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLDZDQUE2QztBQUMvQzs7QUFFQTtFQUNFO0lBQ0UsNkJBQTZCO0lBQzdCLHFCQUFxQjtFQUN2QjtFQUNBO0lBQ0UsMkJBQTJCO0lBQzNCLG1CQUFtQjtFQUNyQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSwyQkFBMkI7SUFDM0IsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSw2QkFBNkI7SUFDN0IscUJBQXFCO0VBQ3ZCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIk1lbWItRm9udFxcXCI7XFxyXFxuICBzcmM6IHVybChcXFwiLi9hc3NldHMvZm9udHMvSXJvbnN0cmlrZVNlbWlCb2xkLm90ZlxcXCIpO1xcclxcbn1cXHJcXG5odG1sIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBNZW1iLUZvbnQ7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRtaW4tYm9keSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGZsZXgtZ3JvdzogMTtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi9hc3NldHMvaW1hZ2VzL2luZ2FtZV9kaXBsb21hY3ktbWVudV9iZ19mdWxsLnBuZ1xcXCIpO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4uY2xpZW50LWJvZHkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBmbGV4LWdyb3c6IDE7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5ib2R5LWNvbnRlbnQge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5teS1oZWFkZXIge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDIwJTtcXHJcXG4gIGJvcmRlci10b3A6IDBweDtcXHJcXG4gIGJvcmRlci1sZWZ0OiAwcHg7XFxyXFxuICBib3JkZXItcmlnaHQ6IDBweDtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweDtcXHJcXG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XFxyXFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcclxcbiAgcGFkZGluZy10b3A6IDJyZW07XFxyXFxufVxcclxcbi5teS1mb290ZXIge1xcclxcbiAgY29sb3I6IGJsYW5jaGVkYWxtb25kO1xcclxcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZmxleC1zaHJpbms6IDA7XFxyXFxufVxcclxcbi5teS1mb290ZXIgYSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBiZWlnZTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkbWluLXBhZ2Uge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5sZWZ0LWNvbHVtbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXQtbnVtYmVyIHtcXHJcXG4gIHdpZHRoOiAzcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGVjaC1oZWFkZXIge1xcclxcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDAuMjVyZW07XFxyXFxufVxcclxcbi50ZWNoLXNldHRpbmdzIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLnRlY2gtY2l2LWxpc3Qge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gIGdhcDogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc2V0dGluZy1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG4uYWN0aW9uLWJ1dHRvbnMge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbn1cXHJcXG4uYWN0aW9uLXNldHRpbmdzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDAuNXJlbTtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG4uc2V0dGluZy1idXR0b24ge1xcclxcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHBhZGRpbmc6IDFyZW0gMTZyZW07XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICBmb250LXNpemU6IHh4LWxhcmdlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRtaW4tY2l2LWljb24ge1xcclxcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBib3gtc2hhZG93OiAxcHggMXB4IDVweCAxcHggYmxhY2s7XFxyXFxufVxcclxcbi5hZG1pbi1jaXYtaWNvbjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBiaXNxdWU7XFxyXFxufVxcclxcbi5hZG1pbi1jaXYtaWNvbiBzcGFuIHtcXHJcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbn1cXHJcXG4uYWRtaW4tY2l2LWljb24gaW1nIHtcXHJcXG4gIHdpZHRoOiA1cmVtO1xcclxcbiAgaGVpZ2h0OiA1cmVtO1xcclxcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5jbGllbnQtcGFnZSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4uY2l2LXRlY2gtb3ZlcmxheS1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi9jb21wb25lbnRzL2Npdi10ZWNoLW92ZXJsYXkvaW1hZ2VzL3BhcGVyLnBuZ1xcXCIpO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJvdW5kO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgcGFkZGluZy10b3A6IDEuNXJlbTtcXHJcXG4gIHdpZHRoOiAyNSU7XFxyXFxufVxcclxcbi5jaXYtdGVjaC1vdmVybGF5LWNvbnRhaW5lciAuY2l2LW5hbWUtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB6LWluZGV4OiAyO1xcclxcbn1cXHJcXG4uY2l2LXRlY2gtb3ZlcmxheS1jb250YWluZXIgLmNpdi1uYW1lIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XFxyXFxuICBtYXJnaW4tbGVmdDogMXJlbTtcXHJcXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcXHJcXG4gIHRleHQtc2hhZG93OiAtMXB4IDAgd2hpdGUsIDAgMXB4IHdoaXRlLCAxcHggMCB3aGl0ZSwgMCAtMXB4IHdoaXRlO1xcclxcbn1cXHJcXG4uY2l2LXRlY2gtb3ZlcmxheS1jb250YWluZXIgLmNpdi1pY29uIHtcXHJcXG4gIGhlaWdodDogNXJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAuNzVyZW0gMC43NXJlbSAwLjVyZW0gcmdiYSgwLCAwLCAwLCAwLjUpKTtcXHJcXG59XFxyXFxuLmNpdi10ZWNoLW92ZXJsYXktY29udGFpbmVyIC5jaXYtdW5pcXVlLXVuaXQtaWNvbiB7XFxyXFxuICBoZWlnaHQ6IDVyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbiAgYm94LXNoYWRvdzogMC43NXJlbSAwLjc1cmVtIDAuNXJlbSByZ2JhKDAsIDAsIDAsIDAuNSk7XFxyXFxuICBib3JkZXI6IHNpbHZlciBzb2xpZCAxcHg7XFxyXFxufVxcclxcbi5jaXYtdGVjaC1vdmVybGF5LWNvbnRhaW5lciAuY2l2LWRlc2NyaXB0aW9uIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmctdG9wOiAxcmVtO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcXHJcXG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xcclxcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xcclxcbiAgdGV4dC1zaGFkb3c6IC0xcHggMCBraGFraSwgMCAxcHgga2hha2ksIDFweCAwIGtoYWtpLCAwIC0xcHgga2hha2k7XFxyXFxuICB6LWluZGV4OiAyO1xcclxcbn1cXHJcXG4uY2l2LXRlY2gtb3ZlcmxheS1jb250YWluZXIgLmNpdi1lbWJsZW0ge1xcclxcbiAgb3BhY2l0eTogMC43O1xcclxcbiAgZmxleC1ncm93OiAxO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgei1pbmRleDogMDtcXHJcXG4gIHRvcDogNDUlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2l2LXVwZ3JhZGUtb3ZlcmxheS1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMi41cmVtO1xcclxcbiAgei1pbmRleDogMjtcXHJcXG59XFxyXFxuLmNpdi11cGdyYWRlLW92ZXJsYXktY29udGFpbmVyIC5jaXYtdXBncmFkZS1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICB3aWR0aDogOTUlO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMC43NXJlbTtcXHJcXG59XFxyXFxuLmNpdi11cGdyYWRlLW92ZXJsYXktY29udGFpbmVyIC5jaXYtdXBncmFkZS1jb250YWluZXIgLnVwZ3JhZGUtaWNvbi1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG4uY2l2LXVwZ3JhZGUtb3ZlcmxheS1jb250YWluZXIgLnVwZ3JhZGUtaWNvbi1jb250YWluZXIgLnVwZ3JhZGUtdGllci1jb250YWluZXIge1xcclxcbiAgd2lkdGg6IGluaGVyaXQ7XFxyXFxuICBoZWlnaHQ6IDI1JTtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICBtYXJnaW4tdG9wOiAwLjFyZW07XFxyXFxuICBib3gtc2hhZG93OiAwLjc1cmVtIDAuNzVyZW0gMC41cmVtIHJnYmEoMCwgMCwgMCwgMC41KTtcXHJcXG4gIGJvcmRlcjogeWVsbG93IHNvbGlkIDFweDtcXHJcXG59XFxyXFxuLmNpdi11cGdyYWRlLW92ZXJsYXktY29udGFpbmVyIC51cGdyYWRlLWljb24tY29udGFpbmVyIC51cGdyYWRlLXRpZXItY29udGFpbmVyIC5lbmFibGVkLTEge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxyXFxuICBoZWlnaHQ6IDAuNzVyZW07XFxyXFxuICB3aWR0aDogODUlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xcclxcbiAgbWFyZ2luLXRvcDogMC4ycmVtO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMC4ycmVtO1xcclxcbiAgYm9yZGVyOiB5ZWxsb3cgc29saWQgMXB4O1xcclxcbn1cXHJcXG4uY2l2LXVwZ3JhZGUtb3ZlcmxheS1jb250YWluZXIgLnVwZ3JhZGUtaWNvbi1jb250YWluZXIgLnVwZ3JhZGUtdGllci1jb250YWluZXIgLmRpc2FibGVkLTEge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbiAgaGVpZ2h0OiAwLjc1cmVtO1xcclxcbiAgd2lkdGg6IDg1JTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcXHJcXG4gIG1hcmdpbi10b3A6IDAuMnJlbTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDAuMnJlbTtcXHJcXG4gIGJvcmRlcjogeWVsbG93IHNvbGlkIDFweDtcXHJcXG59XFxyXFxuLmNpdi11cGdyYWRlLW92ZXJsYXktY29udGFpbmVyIC51cGdyYWRlLWljb24tY29udGFpbmVyIC51cGdyYWRlLXRpZXItY29udGFpbmVyIC5lbmFibGVkLTMge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxyXFxuICBoZWlnaHQ6IDAuNzVyZW07XFxyXFxuICB3aWR0aDogMS4ycmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xcclxcbiAgbWFyZ2luLXRvcDogMC4ycmVtO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMC4ycmVtO1xcclxcbiAgYm9yZGVyOiB5ZWxsb3cgc29saWQgMXB4O1xcclxcbn1cXHJcXG4uY2l2LXVwZ3JhZGUtb3ZlcmxheS1jb250YWluZXIgLnVwZ3JhZGUtaWNvbi1jb250YWluZXIgLnVwZ3JhZGUtdGllci1jb250YWluZXIgLmRpc2FibGVkLTMge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbiAgaGVpZ2h0OiAwLjc1cmVtO1xcclxcbiAgd2lkdGg6IDEuMnJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcXHJcXG4gIG1hcmdpbi10b3A6IDAuMnJlbTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDAuMnJlbTtcXHJcXG4gIGJvcmRlcjogeWVsbG93IHNvbGlkIDFweDtcXHJcXG59XFxyXFxuLmNpdi11cGdyYWRlLW92ZXJsYXktY29udGFpbmVyIC51cGdyYWRlLWljb24ge1xcclxcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG4gIGJveC1zaGFkb3c6IDAuNzVyZW0gMC43NXJlbSAwLjVyZW0gcmdiYSgwLCAwLCAwLCAwLjUpO1xcclxcbiAgYm9yZGVyOiB5ZWxsb3cgc29saWQgMXB4O1xcclxcbiAgaGVpZ2h0OiA1cmVtO1xcclxcbn1cXHJcXG4uY2l2LXVwZ3JhZGUtb3ZlcmxheS1jb250YWluZXIgLmRpc2FibGUtaWNvbi1tZXNvIHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi9jb21wb25lbnRzL2Npdi1pbWFnZXMvbWlzYy92ZXRvLnBuZ1xcXCIpO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogNXJlbTtcXHJcXG59XFxyXFxuLmNpdi11cGdyYWRlLW92ZXJsYXktY29udGFpbmVyIC5jaXYtZWNvLXVwZ3JhZGUtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgd2lkdGg6IDk1JTtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgcGFkZGluZzogMC43NXJlbTtcXHJcXG59XFxyXFxuLmNpdi11cGdyYWRlLW92ZXJsYXktY29udGFpbmVyIC5jaXYtZWNvLXVwZ3JhZGUtY29udGFpbmVyIC51cGdyYWRlLWljb24tY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbi1ibHVlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDhjYmE7XFxyXFxufVxcclxcbi5idXR0b24tcmVkIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuLnN3aXRjaCB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBoZWlnaHQ6IDIuMXJlbTtcXHJcXG4gIHdpZHRoOiA0cmVtO1xcclxcbn1cXHJcXG4uc3dpdGNoIGlucHV0IHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcbi5zbGlkZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIHRyYW5zaXRpb246IDAuNHM7XFxyXFxufVxcclxcbi5zbGlkZXI6YmVmb3JlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICBib3R0b206IDRweDtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgaGVpZ2h0OiAyNnB4O1xcclxcbiAgbGVmdDogNHB4O1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdHJhbnNpdGlvbjogMC40cztcXHJcXG4gIHdpZHRoOiAyNnB4O1xcclxcbn1cXHJcXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjZiYjZhO1xcclxcbn1cXHJcXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xcclxcbn1cXHJcXG4uc2xpZGVyLnJvdW5kIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxufVxcclxcbi5zbGlkZXIucm91bmQ6YmVmb3JlIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuLm1hc2staW1nLXZlcnRpY2FsIHtcXHJcXG4gIC13ZWJraXQtbWFzay1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgdHJhbnNwYXJlbnQgMzMuMyUsIGhzbGEoMCwgMCUsIDEwMCUsIDApIDMzLjQlLCBoc2xhKDAsIDAlLCAxMDAlLCAwLjkpIDY2LjYlLCBoc2xhKDAsIDAlLCAxMDAlLCAwLjkpIDEwMCUpO1xcclxcbiAgLXdlYmtpdC1tYXNrLXNpemU6IDEwMCUgMzAwJTtcXHJcXG4gIC13ZWJraXQtbWFzay1wb3NpdGlvbjogMCAyMDAlO1xcclxcbiAgLXdlYmtpdC1tYXNrLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcblxcclxcbiAgbWFzay1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgdHJhbnNwYXJlbnQgMzMuMyUsIGhzbGEoMCwgMCUsIDEwMCUsIDApIDMzLjQlLCBoc2xhKDAsIDAlLCAxMDAlLCAwLjkpIDY2LjYlLCBoc2xhKDAsIDAlLCAxMDAlLCAwLjkpIDEwMCUpO1xcclxcbiAgbWFzay1zaXplOiAxMDAlIDMwMCU7XFxyXFxuICBtYXNrLXBvc2l0aW9uOiAwIDIwMCU7XFxyXFxuICBtYXNrLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbn1cXHJcXG5cXHJcXG4uY2l2LXRlY2gtYW5pbWF0aW9uLWVudGVyLWFjdGl2ZSB7XFxyXFxuICAtd2Via2l0LW1hc2staW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIHRyYW5zcGFyZW50IDMzLjMlLCBoc2xhKDAsIDAlLCAxMDAlLCAwKSAzMy40JSwgaHNsYSgwLCAwJSwgMTAwJSwgMC45KSA2Ni42JSwgaHNsYSgwLCAwJSwgMTAwJSwgMC45KSAxMDAlKTtcXHJcXG4gIC13ZWJraXQtbWFzay1zaXplOiAxMDAlIDMwMCU7XFxyXFxuICAtd2Via2l0LW1hc2stcG9zaXRpb246IDAgMjAwJTtcXHJcXG4gIC13ZWJraXQtbWFzay1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG5cXHJcXG4gIG1hc2staW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIHRyYW5zcGFyZW50IDMzLjMlLCBoc2xhKDAsIDAlLCAxMDAlLCAwKSAzMy40JSwgaHNsYSgwLCAwJSwgMTAwJSwgMC45KSA2Ni42JSwgaHNsYSgwLCAwJSwgMTAwJSwgMC45KSAxMDAlKTtcXHJcXG4gIG1hc2stc2l6ZTogMTAwJSAzMDAlO1xcclxcbiAgbWFzay1wb3NpdGlvbjogMCAyMDAlO1xcclxcbiAgbWFzay1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGFuaW1hdGlvbjogbWFzay1tb3ZlLWluIDJzIGVhc2UtaW4gZm9yd2FyZHM7XFxyXFxufVxcclxcbi5jaXYtdGVjaC1hbmltYXRpb24tbGVhdmUtYWN0aXZlIHtcXHJcXG4gIC13ZWJraXQtbWFzay1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgdHJhbnNwYXJlbnQgMzMuMyUsIGhzbGEoMCwgMCUsIDEwMCUsIDApIDMzLjQlLCBoc2xhKDAsIDAlLCAxMDAlLCAwLjkpIDY2LjYlLCBoc2xhKDAsIDAlLCAxMDAlLCAwLjkpIDEwMCUpO1xcclxcbiAgLXdlYmtpdC1tYXNrLXNpemU6IDEwMCUgMzAwJTtcXHJcXG4gIC13ZWJraXQtbWFzay1wb3NpdGlvbjogMCAyMDAlO1xcclxcbiAgLXdlYmtpdC1tYXNrLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcblxcclxcbiAgbWFzay1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgdHJhbnNwYXJlbnQgMzMuMyUsIGhzbGEoMCwgMCUsIDEwMCUsIDApIDMzLjQlLCBoc2xhKDAsIDAlLCAxMDAlLCAwLjkpIDY2LjYlLCBoc2xhKDAsIDAlLCAxMDAlLCAwLjkpIDEwMCUpO1xcclxcbiAgbWFzay1zaXplOiAxMDAlIDMwMCU7XFxyXFxuICBtYXNrLXBvc2l0aW9uOiAwIDIwMCU7XFxyXFxuICBtYXNrLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgYW5pbWF0aW9uOiBtYXNrLW1vdmUtb3V0IDJzIGVhc2Utb3V0IGZvcndhcmRzO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIG1hc2stbW92ZS1pbiB7XFxyXFxuICBmcm9tIHtcXHJcXG4gICAgLXdlYmtpdC1tYXNrLXBvc2l0aW9uOiAwIDEwMCU7XFxyXFxuICAgIG1hc2stcG9zaXRpb246IDAgMTAwJTtcXHJcXG4gIH1cXHJcXG4gIHRvIHtcXHJcXG4gICAgLXdlYmtpdC1tYXNrLXBvc2l0aW9uOiAwIDAlO1xcclxcbiAgICBtYXNrLXBvc2l0aW9uOiAwIDAlO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIG1hc2stbW92ZS1vdXQge1xcclxcbiAgZnJvbSB7XFxyXFxuICAgIC13ZWJraXQtbWFzay1wb3NpdGlvbjogMCAwJTtcXHJcXG4gICAgbWFzay1wb3NpdGlvbjogMCAwJTtcXHJcXG4gIH1cXHJcXG4gIHRvIHtcXHJcXG4gICAgLXdlYmtpdC1tYXNrLXBvc2l0aW9uOiAwIDEwMCU7XFxyXFxuICAgIG1hc2stcG9zaXRpb246IDAgMTAwJTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBTb2NrZXRFbnVtcyB9IGZyb20gXCIuL2NvbW1vbi1kYXRhXCI7XHJcblxyXG5jbGFzcyBNeVdlYlNvY2tldENsaWVudCB7XHJcbiAgX2NsaWVudElkO1xyXG4gIF9jbGllbnRTb2NrZXQ7XHJcbiAgX3BpbmdJbnRlcnZhbDtcclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIGZvcm1hdERhdGFGb3JXZWJzb2NrZXQoZGF0YVR5cGUsIHJhd0RhdGEpIHtcclxuICAgIGNvbnNvbGUubG9nKGBGb3JtYXR0aW5nIERhdGEgZm9yIHdlYnNvY2tldC5cXG5EYXRhVHlwZTogJHtkYXRhVHlwZX0gLyBDbGllbnRJZDogJHt0aGlzLl9jbGllbnRJZH0gLyBSYXdEYXRhOmAsIEpTT04uc3RyaW5naWZ5KHJhd0RhdGEpKTtcclxuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh7IHR5cGU6IGRhdGFUeXBlLCBkYXRhOiByYXdEYXRhLCB0b0NsaWVudElkOiB0aGlzLl9jbGllbnRJZCB9KTtcclxuICB9XHJcbiAgc2VuZE1lc3NhZ2UoZGF0YVR5cGUsIHJhd0RhdGEpIHtcclxuICAgIHRoaXMuX2NsaWVudFNvY2tldC5zZW5kKHRoaXMuZm9ybWF0RGF0YUZvcldlYnNvY2tldChkYXRhVHlwZSwgcmF3RGF0YSkpO1xyXG4gIH1cclxuICBzdGFydENsaWVudChjbGllbnRJZCwgaXNMb2NhbCkge1xyXG4gICAgdGhpcy5fY2xpZW50SWQgPSBjbGllbnRJZDtcclxuXHJcbiAgICBjb25zdCB1cmwgPSBcIndzczovL2l0c2F0cmVlZS5jb206ODQ0My9lY2hvXCI7XHJcbiAgICB0aGlzLl9jbGllbnRTb2NrZXQgPSBuZXcgV2ViU29ja2V0KHVybCk7XHJcbiAgICB0aGlzLl9jbGllbnRTb2NrZXQub25vcGVuID0gdGhpcy5vbk9wZW4uYmluZCh0aGlzKTtcclxuICAgIHRoaXMuX2NsaWVudFNvY2tldC5vbm1lc3NhZ2UgPSB0aGlzLm9uTWVzc2FnZS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5fY2xpZW50U29ja2V0Lm9uY2xvc2UgPSB0aGlzLm9uQ2xvc2UuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuX2NsaWVudFNvY2tldC5vbmVycm9yID0gdGhpcy5vbkVycm9yLmJpbmQodGhpcyk7XHJcbiAgfVxyXG4gIG9uT3BlbigpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiW29wZW5dIENvbm5lY3Rpb24gZXN0YWJsaXNoZWRcIik7XHJcbiAgICB0aGlzLnNlbmRNZXNzYWdlKFNvY2tldEVudW1zLkNsaWVudFJlZ2lzdGVyLCB0aGlzLl9jbGllbnRJZCk7XHJcbiAgICB0aGlzLl9waW5nSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuc2VuZE1lc3NhZ2UoU29ja2V0RW51bXMuUElORywgdGhpcy5fY2xpZW50SWQpO1xyXG4gICAgfSwgNDUgKiAxMDAwKTsgLy8gcGluZyB0aGUgc2VydmVyIG9uIHN0YXJ0dXAgZXZlcnkgNDUgc2Vjb25kcyB0byBrZWVwIHRoZSBjb25uZWN0aW9uIGFsaXZlXHJcbiAgfVxyXG4gIG9uTWVzc2FnZShldmVudCkge1xyXG4gICAgLy8gY29uc29sZS5sb2coYERhdGFUeXBlOiAke2V2ZW50LnR5cGV9IC8gUmF3RGF0YTogJHtKU09OLnN0cmluZ2lmeShldmVudC5kYXRhKX1gKTtcclxuICAgIHZhciBuZXdFdmVudCA9IG5ldyBDdXN0b21FdmVudChcImFvZS13ZWJzb2NrZXQtZXZlbnRcIiwgeyBkZXRhaWw6IGV2ZW50IH0pO1xyXG4gICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChuZXdFdmVudCk7XHJcbiAgfVxyXG4gIG9uQ2xvc2UoZXZlbnQpIHtcclxuICAgIGlmIChldmVudC53YXNDbGVhbikge1xyXG4gICAgICBjb25zb2xlLmxvZyhgW2Nsb3NlXSBDb25uZWN0aW9uIGNsb3NlZCBjbGVhbmx5LCBjb2RlPSR7ZXZlbnQuY29kZX0gcmVhc29uPSR7ZXZlbnQucmVhc29ufWApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gZS5nLiBzZXJ2ZXIgcHJvY2VzcyBraWxsZWQgb3IgbmV0d29yayBkb3duXHJcbiAgICAgIC8vIGV2ZW50LmNvZGUgaXMgdXN1YWxseSAxMDA2IGluIHRoaXMgY2FzZVxyXG4gICAgICBjb25zb2xlLmxvZyhcIltjbG9zZV0gQ29ubmVjdGlvbiBkaWVkXCIpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZW5kTWVzc2FnZShTb2NrZXRFbnVtcy5DbGllbnRVblJlZ2lzdGVyLCB0aGlzLl9jbGllbnRJZCk7XHJcbiAgICBjbGVhckludGVydmFsKHRoaXMuX3BpbmdJbnRlcnZhbCk7XHJcbiAgfVxyXG4gIG9uRXJyb3IoZXZlbnQpIHtcclxuICAgIGNvbnNvbGUubG9nKGBbZXJyb3JdICR7ZXZlbnQubWVzc2FnZX1gKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IE15V2ViU29ja2V0Q2xpZW50IH07XHJcbiIsImNvbnN0IFNvY2tldEVudW1zID0ge1xyXG4gIENsaWVudFJlZ2lzdGVyOiBcIkNsaWVudFJlZ2lzdGVyXCIsXHJcbiAgQ2xpZW50VW5SZWdpc3RlcjogXCJDbGllbnRVblJlZ2lzdGVyXCIsXHJcbiAgUElORzogXCJQSU5HXCIsXHJcbiAgVEVTVDogXCJURVNUXCIsXHJcbiAgQUdFT1ZFUkxBWVBVU0g6IFwiQUdFT1ZFUkxBWVBVU0hcIixcclxufTtcclxuXHJcbmV4cG9ydCB7IFNvY2tldEVudW1zIH07XHJcbiIsImltcG9ydCB7IGNpdkljb25zTWFwIH0gZnJvbSBcIi4uL2Npdi1pbWFnZXMvaW1hZ2UtaGVscGVyLmpzXCI7XHJcbmltcG9ydCB7IENpdkljb25CdWlsZGVyIH0gZnJvbSBcIi4vY2l2LWljb24uanNcIjtcclxuXHJcbmNsYXNzIENpdkljb25MaXN0IHtcclxuICBfY2l2SWNvbkNsaWNrQ291bnRlciA9IDA7XHJcblxyXG4gIGJ1aWxkRWxlbWVudChpbmNsdWRlTGFiZWwpIHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29uc3QgaWNvbkJ1aWxkZXIgPSBuZXcgQ2l2SWNvbkJ1aWxkZXIoKTtcclxuXHJcbiAgICBjaXZJY29uc01hcC5mb3JFYWNoKChjaXZJY29uVXJsLCBjaXZOYW1lKSA9PiB7XHJcbiAgICAgIGNvbnN0IGljb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICBpY29uRGl2LmNsYXNzTGlzdC5hZGQoXCJhZG1pbi1jaXYtaWNvblwiKTtcclxuXHJcbiAgICAgIGNvbnN0IGljb25FbGVtZW50ID0gaWNvbkJ1aWxkZXIuYnVpbGRFbGVtZW50KGNpdkljb25VcmwpO1xyXG4gICAgICBpZiAoaW5jbHVkZUxhYmVsKSB7XHJcbiAgICAgICAgY29uc3QgaWNvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgICAgaWNvbkxhYmVsLmlubmVySFRNTCA9IHRoaXMuc2FuaXRpemVEaXNwbGF5VmFsdWUoY2l2TmFtZSk7XHJcbiAgICAgICAgaWNvbkRpdi5hcHBlbmRDaGlsZChpY29uTGFiZWwpO1xyXG4gICAgICB9XHJcbiAgICAgIGljb25EaXYuYXBwZW5kQ2hpbGQoaWNvbkVsZW1lbnQpO1xyXG5cclxuICAgICAgaWNvbkRpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVDaXZJY29uQ2xpY2soZXZlbnQpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGljb25EaXYpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgfVxyXG4gIGhhbmRsZUNpdkljb25DbGljayhldmVudCkge1xyXG4gICAgLy8gY29uc29sZS5sb2coYGNsaWNrZWQgJHt0aGlzLl9jaXZJY29uQ2xpY2tDb3VudGVyfWAsIGV2ZW50LnRhcmdldC5pbm5lclRleHQpO1xyXG4gICAgY29uc3QgY3VycmVudFBsYXllckNsYXNzID0gYHBsYXllci0ke3RoaXMuX2Npdkljb25DbGlja0NvdW50ZXJ9YDtcclxuXHJcbiAgICBsZXQgbnVtYmVyT2ZQbGF5ZXJzT25DaXYgPSAwO1xyXG4gICAgbGV0IHBsYXllckNzc1N0cmluZyA9IFwiXCI7XHJcbiAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LmZvckVhY2goKGNzc0NsYXNzKSA9PiB7XHJcbiAgICAgIGlmIChjc3NDbGFzcy5pbmRleE9mKFwicGxheWVyLVwiKSA+IC0xKSB7XHJcbiAgICAgICAgcGxheWVyQ3NzU3RyaW5nID0gcGxheWVyQ3NzU3RyaW5nLmNvbmNhdChgJHtjc3NDbGFzc306YCk7XHJcbiAgICAgICAgbnVtYmVyT2ZQbGF5ZXJzT25DaXYrKztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLiR7Y3VycmVudFBsYXllckNsYXNzfWApLmZvckVhY2goKGUpID0+IHtcclxuICAgICAgZS5jbGFzc0xpc3QucmVtb3ZlKGN1cnJlbnRQbGF5ZXJDbGFzcyk7XHJcbiAgICAgIGxldCBsb2NhbFBsYXllckNzc1N0cmluZyA9IFwiXCI7XHJcbiAgICAgIGUuY2xhc3NMaXN0LmZvckVhY2goKGNzc0NsYXNzKSA9PiB7XHJcbiAgICAgICAgaWYgKGNzc0NsYXNzLmluZGV4T2YoXCJwbGF5ZXItXCIpID4gLTEpIHtcclxuICAgICAgICAgIGxvY2FsUGxheWVyQ3NzU3RyaW5nID0gbG9jYWxQbGF5ZXJDc3NTdHJpbmcuY29uY2F0KGAke2Nzc0NsYXNzfTpgKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKGxvY2FsUGxheWVyQ3NzU3RyaW5nICE9PSBcIlwiKSB7XHJcbiAgICAgICAgZS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgY29uaWMtZ3JhZGllbnQoJHt0aGlzLm1hcEFsbFBsYXllck51bWJlcnNUb0NvbG9yU3RyaW5nKGxvY2FsUGxheWVyQ3NzU3RyaW5nLCAtMSl9KWA7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcIlwiO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuYWRkKGBwbGF5ZXItJHt0aGlzLl9jaXZJY29uQ2xpY2tDb3VudGVyfWApO1xyXG5cclxuICAgIGlmIChudW1iZXJPZlBsYXllcnNPbkNpdiA+IDApIHtcclxuICAgICAgZXZlbnQudGFyZ2V0LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGBjb25pYy1ncmFkaWVudCgke3RoaXMubWFwQWxsUGxheWVyTnVtYmVyc1RvQ29sb3JTdHJpbmcocGxheWVyQ3NzU3RyaW5nLCB0aGlzLl9jaXZJY29uQ2xpY2tDb3VudGVyKX0pYDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGV2ZW50LnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgbGluZWFyLWdyYWRpZW50KHJnYmEoMCwwLDAsMCksICR7dGhpcy5tYXBQbGF5ZXJOdW1iZXJUb0NvbG9yKHRoaXMuX2Npdkljb25DbGlja0NvdW50ZXIpfSlgO1xyXG4gICAgfVxyXG4gICAgbGV0IG51bVBsYXllcnMgPSAyO1xyXG5cclxuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIl9udW1QbGF5ZXJzSW5NYXRjaFwiKSkge1xyXG4gICAgICBudW1QbGF5ZXJzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJfbnVtUGxheWVyc0luTWF0Y2hcIikudmFsdWU7XHJcbiAgICB9XHJcbiAgICB0aGlzLl9jaXZJY29uQ2xpY2tDb3VudGVyID0gKHRoaXMuX2Npdkljb25DbGlja0NvdW50ZXIgKyAxKSAlIG51bVBsYXllcnM7XHJcbiAgfVxyXG4gIG1hcEFsbFBsYXllck51bWJlcnNUb0NvbG9yU3RyaW5nKG90aGVyUGxheWVycywgcGxheWVyTnVtYmVyKSB7XHJcbiAgICBsZXQgbWFwcGVkQ29sb3JzID0gXCJcIjtcclxuICAgIG90aGVyUGxheWVycy5zcGxpdChcIjpcIikuZm9yRWFjaCgocGxheWVyKSA9PiB7XHJcbiAgICAgIGlmIChwbGF5ZXIgIT09IFwiXCIpIG1hcHBlZENvbG9ycyA9IG1hcHBlZENvbG9ycy5jb25jYXQodGhpcy5tYXBQbGF5ZXJOdW1iZXJUb0NvbG9yKHBsYXllci5zcGxpdChcIi1cIilbMV0pKS5jb25jYXQoXCIsXCIpO1xyXG4gICAgfSk7XHJcbiAgICBpZiAocGxheWVyTnVtYmVyICE9PSAtMSkgbWFwcGVkQ29sb3JzID0gbWFwcGVkQ29sb3JzLmNvbmNhdCh0aGlzLm1hcFBsYXllck51bWJlclRvQ29sb3IocGxheWVyTnVtYmVyKSk7XHJcbiAgICBpZiAobWFwcGVkQ29sb3JzLnN1YnN0cmluZyhtYXBwZWRDb2xvcnMubGVuZ3RoIC0gMSkgPT09IFwiLFwiKSB7XHJcbiAgICAgIG1hcHBlZENvbG9ycyA9IG1hcHBlZENvbG9ycy5zbGljZSgwLCBtYXBwZWRDb2xvcnMubGVuZ3RoIC0gMSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbWFwcGVkQ29sb3JzO1xyXG4gIH1cclxuICBtYXBQbGF5ZXJOdW1iZXJUb0NvbG9yKHBsYXllck51bWJlcikge1xyXG4gICAgaWYgKHR5cGVvZiBwbGF5ZXJOdW1iZXIgPT09IFwic3RyaW5nXCIgfHwgcGxheWVyTnVtYmVyIGluc3RhbmNlb2YgU3RyaW5nKSB7XHJcbiAgICAgIHBsYXllck51bWJlciA9IHBhcnNlSW50KHBsYXllck51bWJlcik7XHJcbiAgICB9XHJcblxyXG4gICAgc3dpdGNoIChwbGF5ZXJOdW1iZXIpIHtcclxuICAgICAgY2FzZSAwOiB7XHJcbiAgICAgICAgcmV0dXJuIFwiYmx1ZVwiO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMToge1xyXG4gICAgICAgIHJldHVybiBcInJlZFwiO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMjoge1xyXG4gICAgICAgIHJldHVybiBcImdyZWVuXCI7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAzOiB7XHJcbiAgICAgICAgcmV0dXJuIFwieWVsbG93XCI7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSA0OiB7XHJcbiAgICAgICAgcmV0dXJuIFwiY3lhblwiO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgNToge1xyXG4gICAgICAgIHJldHVybiBcInB1cnBsZVwiO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgNjoge1xyXG4gICAgICAgIHJldHVybiBcImdyZXlcIjtcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDc6IHtcclxuICAgICAgICByZXR1cm4gXCJvcmFuZ2VcIjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIFwiXCI7XHJcbiAgfVxyXG4gIHJlc2V0U3RhdGUoKSB7XHJcbiAgICB0aGlzLl9jaXZJY29uQ2xpY2tDb3VudGVyID0gMDtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYWRtaW4tY2l2LWljb25cIikuZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICBlLmNsYXNzTmFtZSA9IFwiXCI7XHJcbiAgICAgIGUuY2xhc3NMaXN0LmFkZChcImFkbWluLWNpdi1pY29uXCIpO1xyXG4gICAgICBlLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwiXCI7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgZ2V0TGlzdE9mQ2l2c0NsaWNrZWQoKSB7XHJcbiAgICBsZXQgbnVtUGxheWVycyA9IDI7XHJcbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJfbnVtUGxheWVyc0luTWF0Y2hcIikpIHtcclxuICAgICAgbnVtUGxheWVycyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiX251bVBsYXllcnNJbk1hdGNoXCIpLnZhbHVlO1xyXG4gICAgfVxyXG4gICAgY29uc3QgY2xpY2tlZENpdnMgPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtUGxheWVyczsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IHBsYXllckVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGBwbGF5ZXItJHtpfWApO1xyXG4gICAgICBpZiAocGxheWVyRWxlbWVudC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgY2xpY2tlZENpdnMucHVzaChwbGF5ZXJFbGVtZW50WzBdLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic3BhblwiKVswXS5pbm5lclRleHQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY2xpY2tlZENpdnM7XHJcbiAgfVxyXG4gIHNhbml0aXplRGlzcGxheVZhbHVlKHZhbHVlKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh2YWx1ZSk7XHJcbiAgICB2YWx1ZSA9IGAke3ZhbHVlWzBdLnRvVXBwZXJDYXNlKCl9JHt2YWx1ZS5zdWJzdHJpbmcoMSwgdmFsdWUubGVuZ3RoKX1gO1xyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG4gIH1cclxufVxyXG5leHBvcnQgeyBDaXZJY29uTGlzdCB9O1xyXG4iLCJjbGFzcyBDaXZJY29uQnVpbGRlciB7XHJcbiAgYnVpbGRFbGVtZW50KGltZ1BhdGgpIHtcclxuICAgIGNvbnN0IGNpdkljb24gPSBuZXcgSW1hZ2UoKTtcclxuICAgIGNpdkljb24uc3JjID0gaW1nUGF0aDtcclxuXHJcbiAgICByZXR1cm4gY2l2SWNvbjtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IENpdkljb25CdWlsZGVyIH07XHJcbiIsImltcG9ydCBjaXZEYXRhUmF3IGZyb20gXCIuL2RhdGEuanNvblwiO1xyXG5pbXBvcnQgY2l2U3RyaW5nRGF0YSBmcm9tIFwiLi9zdHJpbmdzLmpzb25cIjtcclxuXHJcbmNvbnN0IHRlY2hSZWxhdGlvbnNoaXBNYXBwaW5nID0ge1xyXG4gIGJsYWNrc21pdGg6IFtcclxuICAgIHtcclxuICAgICAgaXNDaGFpblVwZ3JhZGU6IHRydWUsXHJcbiAgICAgIGRhdGE6IFtcIkZvcmdpbmdcIiwgXCJJcm9uIENhc3RpbmdcIiwgXCJCbGFzdCBGdXJuYWNlXCJdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaXNDaGFpblVwZ3JhZGU6IHRydWUsXHJcbiAgICAgIGRhdGE6IFtcIlNjYWxlIE1haWwgQXJtb3JcIiwgXCJDaGFpbiBNYWlsIEFybW9yXCIsIFwiUGxhdGUgTWFpbCBBcm1vclwiXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlzQ2hhaW5VcGdyYWRlOiB0cnVlLFxyXG4gICAgICBkYXRhOiBbXCJTY2FsZSBCYXJkaW5nIEFybW9yXCIsIFwiQ2hhaW4gQmFyZGluZyBBcm1vclwiLCBcIlBsYXRlIEJhcmRpbmcgQXJtb3JcIl0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpc0NoYWluVXBncmFkZTogdHJ1ZSxcclxuICAgICAgZGF0YTogW1wiRmxldGNoaW5nXCIsIFwiQm9ka2luIEFycm93XCIsIFwiQnJhY2VyXCJdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaXNDaGFpblVwZ3JhZGU6IHRydWUsXHJcbiAgICAgIGRhdGE6IFtcIlBhZGRlZCBBcmNoZXIgQXJtb3JcIiwgXCJMZWF0aGVyIEFyY2hlciBBcm1vclwiLCBcIlJpbmcgQXJjaGVyIEFybW9yXCJdLFxyXG4gICAgfSxcclxuICBdLFxyXG4gIFwibHVtYmVyIGNhbXBcIjogW3sgaXNDaGFpblVwZ3JhZGU6IHRydWUsIGRhdGE6IFtcIkRvdWJsZS1CaXQgQXhlXCIsIFwiQm93IFNhd1wiLCBcIlR3by1NYW4gU2F3XCJdIH1dLFxyXG4gIG1pbGw6IFt7IGlzQ2hhaW5VcGdyYWRlOiB0cnVlLCBkYXRhOiBbXCJIb3JzZSBDb2xsYXJcIiwgXCJIZWF2eSBQbG93XCIsIFwiQ3JvcCBSb3RhdGlvblwiXSB9XSxcclxuICAvLyB0b3duY2VudGVyOiBbXCJXaGVlbGJhcnJvd1wiLCBcIkhhbmQgQ2FydFwiXSxcclxuICB1bml2ZXJzaXR5OiBbeyBpc0NoYWluVXBncmFkZTogZmFsc2UsIGRhdGE6IFtcIkJhbGxpc3RpY3NcIiwgXCJTaWVnZSBFbmdpbmVlcnNcIl0gfV0sXHJcbiAgc3RhYmxlOiBbeyBpc0NoYWluVXBncmFkZTogZmFsc2UsIGRhdGE6IFtcIkJsb29kbGluZXNcIiwgXCJIdXNiYW5kcnlcIl0gfV0sXHJcbiAgXCJhcmNoZXJ5IHJhbmdlXCI6IFt7IGlzQ2hhaW5VcGdyYWRlOiBmYWxzZSwgZGF0YTogW1wiVGh1bWIgUmluZ1wiXSB9XSxcclxuICBtb25hc3Rlcnk6IFt7IGlzQ2hhaW5VcGdyYWRlOiBmYWxzZSwgZGF0YTogW1wiUmVkZW1wdGlvblwiLCBcIkF0b25lbWVudFwiLCBcIkhlcmJhbCBNZWRpY2luZVwiLCBcIkhlcmVzeVwiLCBcIlNhbmN0aXR5XCIsIFwiRmVydm9yXCIsIFwiRmFpdGhcIiwgXCJJbGx1bWluYXRpb25cIiwgXCJCbG9jayBQcmludGluZ1wiLCBcIlRoZW9jcmFjeVwiXSB9XSxcclxufTtcclxuXHJcbmZ1bmN0aW9uIGZvcm1hdFJhd0Npdk5hbWVUb0tleShjaXZOYW1lKSB7XHJcbiAgaWYgKGNpdk5hbWUgPT09IHVuZGVmaW5lZCkgcmV0dXJuIFwiXCI7XHJcbiAgY2l2TmFtZSA9IGAke2Npdk5hbWUuc3Vic3RyaW5nKDAsIDEpLnRvVXBwZXJDYXNlKCl9JHtjaXZOYW1lLnNsaWNlKDEpfWA7XHJcbiAgcmV0dXJuIGNpdk5hbWU7XHJcbn1cclxuZnVuY3Rpb24gZ2V0Q2l2TmFtZXMoKSB7XHJcbiAgcmV0dXJuIE9iamVjdC5rZXlzKGNpdkRhdGFSYXcuY2l2X25hbWVzKTtcclxufVxyXG5mdW5jdGlvbiBnZXRDaXZUZWNobm9sb2d5RGVzY3JpcHRpb24oY2l2TmFtZSkge1xyXG4gIGNpdk5hbWUgPSBmb3JtYXRSYXdDaXZOYW1lVG9LZXkoY2l2TmFtZSk7XHJcblxyXG4gIGNvbnN0IGhlbHBUZXh0S2V5ID0gY2l2RGF0YVJhdy5jaXZfaGVscHRleHRzW2Npdk5hbWVdO1xyXG4gIGNvbnN0IGNpdkRlc2NyaXB0aW9uID0gY2l2U3RyaW5nRGF0YVtoZWxwVGV4dEtleV07XHJcblxyXG4gIHJldHVybiBjaXZEZXNjcmlwdGlvbjtcclxufVxyXG5mdW5jdGlvbiBnZXRDaXZUZWNobm9sb2d5VXBncmFkZXMoY2l2TmFtZSkge1xyXG4gIGNpdk5hbWUgPSBmb3JtYXRSYXdDaXZOYW1lVG9LZXkoY2l2TmFtZSk7XHJcblxyXG4gIGNvbnN0IGNpdlRlY2hzQWxsID0gY2l2RGF0YVJhdy50ZWNodHJlZXNbY2l2TmFtZV07XHJcbiAgY29uc3QgdXBncmFkZU5hbWVzID0gW107XHJcbiAgY2l2VGVjaHNBbGwudGVjaHMuZm9yRWFjaCgodGVjaElkKSA9PiB7XHJcbiAgICBjb25zdCB1cGdyYWRlID0gY2l2RGF0YVJhdy5kYXRhLnRlY2hzW3RlY2hJZF07XHJcbiAgICAvLyBjaXZTdHJpbmdEYXRhW3VwZ3JhZGUuTGFuZ3VhZ2VIZWxwSWRdOyAvLyBmb3IgZGVzY3JpcHRpb25cclxuICAgIGNvbnN0IHBheWxvYWQgPSB7XHJcbiAgICAgIGlkOiB0ZWNoSWQsXHJcbiAgICAgIHJhd05hbWU6IGNpdlN0cmluZ0RhdGFbdXBncmFkZS5MYW5ndWFnZU5hbWVJZF0sXHJcbiAgICB9O1xyXG4gICAgdXBncmFkZU5hbWVzLnB1c2gocGF5bG9hZCk7XHJcbiAgfSk7XHJcbiAgcmV0dXJuIHVwZ3JhZGVOYW1lcztcclxufVxyXG5mdW5jdGlvbiBnZXRBZ2VUaWVyTGV2ZWwodXBncmFkZU5hbWUpIHtcclxuICBsZXQgZm91bmRJbmRleCA9IC0xO1xyXG4gIGZvciAobGV0IGtleSBpbiB0ZWNoUmVsYXRpb25zaGlwTWFwcGluZykge1xyXG4gICAgaWYgKGZvdW5kSW5kZXggPiAtMSkgYnJlYWs7IC8vIHNob3J0IGNpcmN1aXQgZm91bmQgcmVzdWx0c1xyXG4gICAgaWYgKCF0ZWNoUmVsYXRpb25zaGlwTWFwcGluZy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgIC8vIGlnbm9yZWQga2V5c1xyXG4gICAgICBjb250aW51ZTtcclxuICAgIH1cclxuICAgIC8vIGxvb2sgYXQgZXZlcnl0aGluZyBhbmQgcmV0dXJuIHRoZSBpbmRleCBvZiBhcnJheSAobG9vc2UgcmVwcmVzZW50YXRpb24gb2YgYWdlIGxldmVsKVxyXG4gICAgdGVjaFJlbGF0aW9uc2hpcE1hcHBpbmdba2V5XS5mb3JFYWNoKCh1cGdyYWRlKSA9PiB7XHJcbiAgICAgIGlmIChmb3VuZEluZGV4ID4gLTEpIHJldHVybjsgLy8gc2hvcnQgY2lyY3VpdCBmb3VuZCByZXN1bHRzXHJcbiAgICAgIGlmICh1cGdyYWRlLmlzQ2hhaW5VcGdyYWRlKSB7XHJcbiAgICAgICAgZm91bmRJbmRleCA9IHVwZ3JhZGUuZGF0YS5pbmRleE9mKHVwZ3JhZGVOYW1lKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBmb3VuZEluZGV4ID0gLTE7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuICByZXR1cm4gZm91bmRJbmRleDtcclxufVxyXG5mdW5jdGlvbiBmaWx0ZXJMb3dlc3RVcGdyYWRlc0Zyb21DYXRlZ29yaWVzKHVwZ3JhZGVDYXRlZ29yaWVzLCB1cGdyYWRlTGlzdCkge1xyXG4gIGNvbnN0IG1vZGlmaWVkVXBncmFkZUxpc3QgPSBbXTtcclxuICB1cGdyYWRlQ2F0ZWdvcmllcy5mb3JFYWNoKCh1cGdyYWRlQ2F0ZWdvcnkpID0+IHtcclxuICAgIGNvbnN0IHVwZ3JhZGVBcnJheU1hcCA9IHRlY2hSZWxhdGlvbnNoaXBNYXBwaW5nW3VwZ3JhZGVDYXRlZ29yeV07XHJcbiAgICB1cGdyYWRlQXJyYXlNYXAuZm9yRWFjaCgodXBncmFkZUFycmF5KSA9PiB7XHJcbiAgICAgIGlmICh1cGdyYWRlQXJyYXkuaXNDaGFpblVwZ3JhZGUpIHtcclxuICAgICAgICAvLyB0aGlzIHVwZ3JhZGUgYXJyYXkgaXMgaW4gdGhlIGFnZSBjaGFpbiwgZGV0ZXJtaW5lIHdoYXQgaXMgdGhlIGhpZ2hlc3QgdGVjaCBhdmFpbGFibGVcclxuICAgICAgICBsZXQgZm91bmRIaWdoZXJUaWVyID0gZmFsc2U7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IHVwZ3JhZGVBcnJheS5kYXRhLmxlbmd0aCAtIDE7IGkgPiAtMTsgaS0tKSB7XHJcbiAgICAgICAgICAvLyBmaW5kIHRoZSBoaWdoZXN0IGluZGV4ZWQgdmFsdWUgaW4gdXBncmFkZUxpc3RcclxuICAgICAgICAgIGNvbnN0IHVwZ3JhZGUgPSB1cGdyYWRlTGlzdC5maW5kKCh1cGdyYWRlKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB1cGdyYWRlLnJhd05hbWUgPT09IHVwZ3JhZGVBcnJheS5kYXRhW2ldO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBpZiAodXBncmFkZSAhPT0gdW5kZWZpbmVkICYmICFmb3VuZEhpZ2hlclRpZXIpIHtcclxuICAgICAgICAgICAgZm91bmRIaWdoZXJUaWVyID0gdHJ1ZTtcclxuICAgICAgICAgICAgbW9kaWZpZWRVcGdyYWRlTGlzdC5wdXNoKHVwZ3JhZGUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLy8gdGhpcyBpcyBmb3IgY2l2cyB0aGF0IGRvbnQgaGF2ZSB0aGUgdXBncmFkZVxyXG4gICAgICAgICAgaWYgKGkgPT09IDAgJiYgIWZvdW5kSGlnaGVyVGllcikge1xyXG4gICAgICAgICAgICBtb2RpZmllZFVwZ3JhZGVMaXN0LnB1c2goeyByYXdOYW1lOiB1cGdyYWRlQXJyYXkuZGF0YVtpXSwgaWQ6IC0xIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB1cGdyYWRlQXJyYXkuZGF0YS5mb3JFYWNoKCh1cGdyYWRlQXJyKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBmb3VuZFRlY2ggPSB1cGdyYWRlTGlzdC5maW5kKCh1cGdyYWRlKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB1cGdyYWRlLnJhd05hbWUgPT09IHVwZ3JhZGVBcnI7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGlmIChmb3VuZFRlY2gpIHtcclxuICAgICAgICAgICAgbW9kaWZpZWRVcGdyYWRlTGlzdC5wdXNoKHsgcmF3TmFtZTogdXBncmFkZUFyciwgaWQ6IDAgfSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBtb2RpZmllZFVwZ3JhZGVMaXN0LnB1c2goeyByYXdOYW1lOiB1cGdyYWRlQXJyLCBpZDogLTEgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0pO1xyXG4gIHJldHVybiBtb2RpZmllZFVwZ3JhZGVMaXN0O1xyXG59XHJcbmV4cG9ydCB7IGdldENpdk5hbWVzLCBnZXRDaXZUZWNobm9sb2d5RGVzY3JpcHRpb24sIGdldENpdlRlY2hub2xvZ3lVcGdyYWRlcywgZ2V0QWdlVGllckxldmVsLCBmaWx0ZXJMb3dlc3RVcGdyYWRlc0Zyb21DYXRlZ29yaWVzIH07XHJcbiIsInZhciBtYXAgPSB7XG5cdFwiLi9henRlY3MucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi1lbWJsZW1zL2F6dGVjcy5wbmdcIixcblx0XCIuL2JlbmdhbGlzLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtZW1ibGVtcy9iZW5nYWxpcy5wbmdcIixcblx0XCIuL2JlcmJlcnMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi1lbWJsZW1zL2JlcmJlcnMucG5nXCIsXG5cdFwiLi9ib2hlbWlhbnMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi1lbWJsZW1zL2JvaGVtaWFucy5wbmdcIixcblx0XCIuL2JyaXRvbnMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi1lbWJsZW1zL2JyaXRvbnMucG5nXCIsXG5cdFwiLi9idWxnYXJpYW5zLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtZW1ibGVtcy9idWxnYXJpYW5zLnBuZ1wiLFxuXHRcIi4vYnVyZ3VuZGlhbnMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi1lbWJsZW1zL2J1cmd1bmRpYW5zLnBuZ1wiLFxuXHRcIi4vYnVybWVzZS5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LWVtYmxlbXMvYnVybWVzZS5wbmdcIixcblx0XCIuL2J5emFudGluZXMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi1lbWJsZW1zL2J5emFudGluZXMucG5nXCIsXG5cdFwiLi9jZWx0cy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LWVtYmxlbXMvY2VsdHMucG5nXCIsXG5cdFwiLi9jaGluZXNlLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtZW1ibGVtcy9jaGluZXNlLnBuZ1wiLFxuXHRcIi4vY3VtYW5zLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtZW1ibGVtcy9jdW1hbnMucG5nXCIsXG5cdFwiLi9kcmF2aWRpYW5zLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtZW1ibGVtcy9kcmF2aWRpYW5zLnBuZ1wiLFxuXHRcIi4vZXRoaW9waWFucy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LWVtYmxlbXMvZXRoaW9waWFucy5wbmdcIixcblx0XCIuL2ZyYW5rcy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LWVtYmxlbXMvZnJhbmtzLnBuZ1wiLFxuXHRcIi4vZ290aHMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi1lbWJsZW1zL2dvdGhzLnBuZ1wiLFxuXHRcIi4vZ3VyamFyYXMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi1lbWJsZW1zL2d1cmphcmFzLnBuZ1wiLFxuXHRcIi4vaGluZHVzdGFuaXMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi1lbWJsZW1zL2hpbmR1c3RhbmlzLnBuZ1wiLFxuXHRcIi4vaHVucy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LWVtYmxlbXMvaHVucy5wbmdcIixcblx0XCIuL2luY2FzLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtZW1ibGVtcy9pbmNhcy5wbmdcIixcblx0XCIuL2l0YWxpYW5zLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtZW1ibGVtcy9pdGFsaWFucy5wbmdcIixcblx0XCIuL2phcGFuZXNlLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtZW1ibGVtcy9qYXBhbmVzZS5wbmdcIixcblx0XCIuL2tobWVyLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtZW1ibGVtcy9raG1lci5wbmdcIixcblx0XCIuL2tvcmVhbnMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi1lbWJsZW1zL2tvcmVhbnMucG5nXCIsXG5cdFwiLi9saXRodWFuaWFucy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LWVtYmxlbXMvbGl0aHVhbmlhbnMucG5nXCIsXG5cdFwiLi9tYWd5YXJzLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtZW1ibGVtcy9tYWd5YXJzLnBuZ1wiLFxuXHRcIi4vbWFsYXkucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi1lbWJsZW1zL21hbGF5LnBuZ1wiLFxuXHRcIi4vbWFsaWFucy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LWVtYmxlbXMvbWFsaWFucy5wbmdcIixcblx0XCIuL21heWFucy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LWVtYmxlbXMvbWF5YW5zLnBuZ1wiLFxuXHRcIi4vbW9uZ29scy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LWVtYmxlbXMvbW9uZ29scy5wbmdcIixcblx0XCIuL3BlcnNpYW5zLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtZW1ibGVtcy9wZXJzaWFucy5wbmdcIixcblx0XCIuL3BvbGVzLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtZW1ibGVtcy9wb2xlcy5wbmdcIixcblx0XCIuL3BvcnR1Z3Vlc2UucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi1lbWJsZW1zL3BvcnR1Z3Vlc2UucG5nXCIsXG5cdFwiLi9yb21hbnMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi1lbWJsZW1zL3JvbWFucy5wbmdcIixcblx0XCIuL3NhcmFjZW5zLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtZW1ibGVtcy9zYXJhY2Vucy5wbmdcIixcblx0XCIuL3NpY2lsaWFucy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LWVtYmxlbXMvc2ljaWxpYW5zLnBuZ1wiLFxuXHRcIi4vc2xhdnMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi1lbWJsZW1zL3NsYXZzLnBuZ1wiLFxuXHRcIi4vc3BhbmlzaC5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LWVtYmxlbXMvc3BhbmlzaC5wbmdcIixcblx0XCIuL3RhdGFycy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LWVtYmxlbXMvdGF0YXJzLnBuZ1wiLFxuXHRcIi4vdGV1dG9ucy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LWVtYmxlbXMvdGV1dG9ucy5wbmdcIixcblx0XCIuL3R1cmtzLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtZW1ibGVtcy90dXJrcy5wbmdcIixcblx0XCIuL3ZpZXRuYW1lc2UucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi1lbWJsZW1zL3ZpZXRuYW1lc2UucG5nXCIsXG5cdFwiLi92aWtpbmdzLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtZW1ibGVtcy92aWtpbmdzLnBuZ1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LWVtYmxlbXMgc3luYyByZWN1cnNpdmUgXFxcXC4ocG5nKSRcIjsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vYXp0ZWNzLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtdW5pcXVlLXVuaXRzL2F6dGVjcy5wbmdcIixcblx0XCIuL2F6dGVjcy50cC5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy9henRlY3MudHAucG5nXCIsXG5cdFwiLi9iZW5nYWxpcy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy9iZW5nYWxpcy5wbmdcIixcblx0XCIuL2JlbmdhbGlzLnRwLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtdW5pcXVlLXVuaXRzL2JlbmdhbGlzLnRwLnBuZ1wiLFxuXHRcIi4vYmVyYmVycy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy9iZXJiZXJzLnBuZ1wiLFxuXHRcIi4vYmVyYmVycy50cC5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy9iZXJiZXJzLnRwLnBuZ1wiLFxuXHRcIi4vYm9oZW1pYW5zLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtdW5pcXVlLXVuaXRzL2JvaGVtaWFucy5wbmdcIixcblx0XCIuL2JvaGVtaWFucy50cC5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy9ib2hlbWlhbnMudHAucG5nXCIsXG5cdFwiLi9icml0b25zLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtdW5pcXVlLXVuaXRzL2JyaXRvbnMucG5nXCIsXG5cdFwiLi9icml0b25zLnRwLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtdW5pcXVlLXVuaXRzL2JyaXRvbnMudHAucG5nXCIsXG5cdFwiLi9idWxnYXJpYW5zLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtdW5pcXVlLXVuaXRzL2J1bGdhcmlhbnMucG5nXCIsXG5cdFwiLi9idWxnYXJpYW5zLnRwLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtdW5pcXVlLXVuaXRzL2J1bGdhcmlhbnMudHAucG5nXCIsXG5cdFwiLi9idXJndW5kaWFucy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy9idXJndW5kaWFucy5wbmdcIixcblx0XCIuL2J1cmd1bmRpYW5zLnRwLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtdW5pcXVlLXVuaXRzL2J1cmd1bmRpYW5zLnRwLnBuZ1wiLFxuXHRcIi4vYnVybWVzZS5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy9idXJtZXNlLnBuZ1wiLFxuXHRcIi4vYnVybWVzZS50cC5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy9idXJtZXNlLnRwLnBuZ1wiLFxuXHRcIi4vYnl6YW50aW5lcy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy9ieXphbnRpbmVzLnBuZ1wiLFxuXHRcIi4vYnl6YW50aW5lcy50cC5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy9ieXphbnRpbmVzLnRwLnBuZ1wiLFxuXHRcIi4vY2VsdHMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi11bmlxdWUtdW5pdHMvY2VsdHMucG5nXCIsXG5cdFwiLi9jZWx0cy50cC5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy9jZWx0cy50cC5wbmdcIixcblx0XCIuL2NoaW5lc2UucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi11bmlxdWUtdW5pdHMvY2hpbmVzZS5wbmdcIixcblx0XCIuL2NoaW5lc2UudHAucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi11bmlxdWUtdW5pdHMvY2hpbmVzZS50cC5wbmdcIixcblx0XCIuL2N1bWFucy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy9jdW1hbnMucG5nXCIsXG5cdFwiLi9jdW1hbnMudHAucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi11bmlxdWUtdW5pdHMvY3VtYW5zLnRwLnBuZ1wiLFxuXHRcIi4vZHJhdmlkaWFucy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy9kcmF2aWRpYW5zLnBuZ1wiLFxuXHRcIi4vZHJhdmlkaWFucy50cC5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy9kcmF2aWRpYW5zLnRwLnBuZ1wiLFxuXHRcIi4vZXRoaW9waWFucy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy9ldGhpb3BpYW5zLnBuZ1wiLFxuXHRcIi4vZXRoaW9waWFucy50cC5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy9ldGhpb3BpYW5zLnRwLnBuZ1wiLFxuXHRcIi4vZnJhbmtzLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtdW5pcXVlLXVuaXRzL2ZyYW5rcy5wbmdcIixcblx0XCIuL2ZyYW5rcy50cC5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy9mcmFua3MudHAucG5nXCIsXG5cdFwiLi9nb3Rocy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy9nb3Rocy5wbmdcIixcblx0XCIuL2dvdGhzLnRwLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtdW5pcXVlLXVuaXRzL2dvdGhzLnRwLnBuZ1wiLFxuXHRcIi4vZ3VyamFyYXMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi11bmlxdWUtdW5pdHMvZ3VyamFyYXMucG5nXCIsXG5cdFwiLi9ndXJqYXJhcy50cC5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy9ndXJqYXJhcy50cC5wbmdcIixcblx0XCIuL2hpbmR1c3RhbmlzLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtdW5pcXVlLXVuaXRzL2hpbmR1c3RhbmlzLnBuZ1wiLFxuXHRcIi4vaGluZHVzdGFuaXMudHAucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi11bmlxdWUtdW5pdHMvaGluZHVzdGFuaXMudHAucG5nXCIsXG5cdFwiLi9odW5zLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtdW5pcXVlLXVuaXRzL2h1bnMucG5nXCIsXG5cdFwiLi9odW5zLnRwLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtdW5pcXVlLXVuaXRzL2h1bnMudHAucG5nXCIsXG5cdFwiLi9pbmNhcy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy9pbmNhcy5wbmdcIixcblx0XCIuL2luY2FzLnRwLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtdW5pcXVlLXVuaXRzL2luY2FzLnRwLnBuZ1wiLFxuXHRcIi4vaW5kaWFucy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy9pbmRpYW5zLnBuZ1wiLFxuXHRcIi4vaW5kaWFucy50cC5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy9pbmRpYW5zLnRwLnBuZ1wiLFxuXHRcIi4vaXRhbGlhbnMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi11bmlxdWUtdW5pdHMvaXRhbGlhbnMucG5nXCIsXG5cdFwiLi9pdGFsaWFucy50cC5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy9pdGFsaWFucy50cC5wbmdcIixcblx0XCIuL2phcGFuZXNlLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtdW5pcXVlLXVuaXRzL2phcGFuZXNlLnBuZ1wiLFxuXHRcIi4vamFwYW5lc2UudHAucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi11bmlxdWUtdW5pdHMvamFwYW5lc2UudHAucG5nXCIsXG5cdFwiLi9raG1lci5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy9raG1lci5wbmdcIixcblx0XCIuL2tobWVyLnRwLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtdW5pcXVlLXVuaXRzL2tobWVyLnRwLnBuZ1wiLFxuXHRcIi4va29yZWFucy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy9rb3JlYW5zLnBuZ1wiLFxuXHRcIi4va29yZWFucy50cC5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy9rb3JlYW5zLnRwLnBuZ1wiLFxuXHRcIi4vbGl0aHVhbmlhbnMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi11bmlxdWUtdW5pdHMvbGl0aHVhbmlhbnMucG5nXCIsXG5cdFwiLi9saXRodWFuaWFucy50cC5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy9saXRodWFuaWFucy50cC5wbmdcIixcblx0XCIuL21hZ3lhcnMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi11bmlxdWUtdW5pdHMvbWFneWFycy5wbmdcIixcblx0XCIuL21hZ3lhcnMudHAucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi11bmlxdWUtdW5pdHMvbWFneWFycy50cC5wbmdcIixcblx0XCIuL21hbGF5LnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtdW5pcXVlLXVuaXRzL21hbGF5LnBuZ1wiLFxuXHRcIi4vbWFsYXkudHAucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi11bmlxdWUtdW5pdHMvbWFsYXkudHAucG5nXCIsXG5cdFwiLi9tYWxpYW5zLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtdW5pcXVlLXVuaXRzL21hbGlhbnMucG5nXCIsXG5cdFwiLi9tYWxpYW5zLnRwLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtdW5pcXVlLXVuaXRzL21hbGlhbnMudHAucG5nXCIsXG5cdFwiLi9tYXlhbnMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi11bmlxdWUtdW5pdHMvbWF5YW5zLnBuZ1wiLFxuXHRcIi4vbWF5YW5zLnRwLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtdW5pcXVlLXVuaXRzL21heWFucy50cC5wbmdcIixcblx0XCIuL21vbmdvbHMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi11bmlxdWUtdW5pdHMvbW9uZ29scy5wbmdcIixcblx0XCIuL21vbmdvbHMudHAucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi11bmlxdWUtdW5pdHMvbW9uZ29scy50cC5wbmdcIixcblx0XCIuL3BlcnNpYW5zLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtdW5pcXVlLXVuaXRzL3BlcnNpYW5zLnBuZ1wiLFxuXHRcIi4vcGVyc2lhbnMudHAucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi11bmlxdWUtdW5pdHMvcGVyc2lhbnMudHAucG5nXCIsXG5cdFwiLi9wb2xlcy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy9wb2xlcy5wbmdcIixcblx0XCIuL3BvbGVzLnRwLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtdW5pcXVlLXVuaXRzL3BvbGVzLnRwLnBuZ1wiLFxuXHRcIi4vcG9ydHVndWVzZS5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy9wb3J0dWd1ZXNlLnBuZ1wiLFxuXHRcIi4vcG9ydHVndWVzZS50cC5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy9wb3J0dWd1ZXNlLnRwLnBuZ1wiLFxuXHRcIi4vcm9tYW5zLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtdW5pcXVlLXVuaXRzL3JvbWFucy5wbmdcIixcblx0XCIuL3JvbWFucy50cC5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy9yb21hbnMudHAucG5nXCIsXG5cdFwiLi9zYXJhY2Vucy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy9zYXJhY2Vucy5wbmdcIixcblx0XCIuL3NhcmFjZW5zLnRwLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtdW5pcXVlLXVuaXRzL3NhcmFjZW5zLnRwLnBuZ1wiLFxuXHRcIi4vc2ljaWxpYW5zLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtdW5pcXVlLXVuaXRzL3NpY2lsaWFucy5wbmdcIixcblx0XCIuL3NpY2lsaWFucy50cC5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy9zaWNpbGlhbnMudHAucG5nXCIsXG5cdFwiLi9zbGF2cy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy9zbGF2cy5wbmdcIixcblx0XCIuL3NsYXZzLnRwLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtdW5pcXVlLXVuaXRzL3NsYXZzLnRwLnBuZ1wiLFxuXHRcIi4vc3BhbmlzaC5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy9zcGFuaXNoLnBuZ1wiLFxuXHRcIi4vc3BhbmlzaC50cC5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy9zcGFuaXNoLnRwLnBuZ1wiLFxuXHRcIi4vdGF0YXJzLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtdW5pcXVlLXVuaXRzL3RhdGFycy5wbmdcIixcblx0XCIuL3RhdGFycy50cC5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy90YXRhcnMudHAucG5nXCIsXG5cdFwiLi90ZXV0b25zLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtdW5pcXVlLXVuaXRzL3RldXRvbnMucG5nXCIsXG5cdFwiLi90ZXV0b25zLnRwLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtdW5pcXVlLXVuaXRzL3RldXRvbnMudHAucG5nXCIsXG5cdFwiLi90dXJrcy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy90dXJrcy5wbmdcIixcblx0XCIuL3R1cmtzLnRwLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtdW5pcXVlLXVuaXRzL3R1cmtzLnRwLnBuZ1wiLFxuXHRcIi4vdmlldG5hbWVzZS5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy92aWV0bmFtZXNlLnBuZ1wiLFxuXHRcIi4vdmlldG5hbWVzZS50cC5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy92aWV0bmFtZXNlLnRwLnBuZ1wiLFxuXHRcIi4vdmlraW5ncy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy92aWtpbmdzLnBuZ1wiLFxuXHRcIi4vdmlraW5ncy50cC5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy92aWtpbmdzLnRwLnBuZ1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cyBzeW5jIHJlY3Vyc2l2ZSBcXFxcLihwbmcpJFwiOyIsInZhciBtYXAgPSB7XG5cdFwiLi9henRlY3MucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2ljb25zL2F6dGVjcy5wbmdcIixcblx0XCIuL2JlbmdhbGlzLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9pY29ucy9iZW5nYWxpcy5wbmdcIixcblx0XCIuL2JlcmJlcnMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2ljb25zL2JlcmJlcnMucG5nXCIsXG5cdFwiLi9ib2hlbWlhbnMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2ljb25zL2JvaGVtaWFucy5wbmdcIixcblx0XCIuL2JyaXRvbnMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2ljb25zL2JyaXRvbnMucG5nXCIsXG5cdFwiLi9idWxnYXJpYW5zLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9pY29ucy9idWxnYXJpYW5zLnBuZ1wiLFxuXHRcIi4vYnVyZ3VuZGlhbnMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2ljb25zL2J1cmd1bmRpYW5zLnBuZ1wiLFxuXHRcIi4vYnVybWVzZS5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvaWNvbnMvYnVybWVzZS5wbmdcIixcblx0XCIuL2J5emFudGluZXMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2ljb25zL2J5emFudGluZXMucG5nXCIsXG5cdFwiLi9jZWx0cy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvaWNvbnMvY2VsdHMucG5nXCIsXG5cdFwiLi9jaGluZXNlLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9pY29ucy9jaGluZXNlLnBuZ1wiLFxuXHRcIi4vY3VtYW5zLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9pY29ucy9jdW1hbnMucG5nXCIsXG5cdFwiLi9kcmF2aWRpYW5zLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9pY29ucy9kcmF2aWRpYW5zLnBuZ1wiLFxuXHRcIi4vZXRoaW9waWFucy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvaWNvbnMvZXRoaW9waWFucy5wbmdcIixcblx0XCIuL2ZyYW5rcy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvaWNvbnMvZnJhbmtzLnBuZ1wiLFxuXHRcIi4vZ290aHMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2ljb25zL2dvdGhzLnBuZ1wiLFxuXHRcIi4vZ3VyamFyYXMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2ljb25zL2d1cmphcmFzLnBuZ1wiLFxuXHRcIi4vaGluZHVzdGFuaXMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2ljb25zL2hpbmR1c3RhbmlzLnBuZ1wiLFxuXHRcIi4vaHVucy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvaWNvbnMvaHVucy5wbmdcIixcblx0XCIuL2luY2FzLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9pY29ucy9pbmNhcy5wbmdcIixcblx0XCIuL2l0YWxpYW5zLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9pY29ucy9pdGFsaWFucy5wbmdcIixcblx0XCIuL2phcGFuZXNlLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9pY29ucy9qYXBhbmVzZS5wbmdcIixcblx0XCIuL2tobWVyLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9pY29ucy9raG1lci5wbmdcIixcblx0XCIuL2tvcmVhbnMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2ljb25zL2tvcmVhbnMucG5nXCIsXG5cdFwiLi9saXRodWFuaWFucy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvaWNvbnMvbGl0aHVhbmlhbnMucG5nXCIsXG5cdFwiLi9tYWd5YXJzLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9pY29ucy9tYWd5YXJzLnBuZ1wiLFxuXHRcIi4vbWFsYXkucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2ljb25zL21hbGF5LnBuZ1wiLFxuXHRcIi4vbWFsaWFucy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvaWNvbnMvbWFsaWFucy5wbmdcIixcblx0XCIuL21heWFucy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvaWNvbnMvbWF5YW5zLnBuZ1wiLFxuXHRcIi4vbW9uZ29scy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvaWNvbnMvbW9uZ29scy5wbmdcIixcblx0XCIuL3BlcnNpYW5zLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9pY29ucy9wZXJzaWFucy5wbmdcIixcblx0XCIuL3BvbGVzLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9pY29ucy9wb2xlcy5wbmdcIixcblx0XCIuL3BvcnR1Z3Vlc2UucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2ljb25zL3BvcnR1Z3Vlc2UucG5nXCIsXG5cdFwiLi9yb21hbnMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2ljb25zL3JvbWFucy5wbmdcIixcblx0XCIuL3NhcmFjZW5zLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9pY29ucy9zYXJhY2Vucy5wbmdcIixcblx0XCIuL3NpY2lsaWFucy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvaWNvbnMvc2ljaWxpYW5zLnBuZ1wiLFxuXHRcIi4vc2xhdnMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2ljb25zL3NsYXZzLnBuZ1wiLFxuXHRcIi4vc3BhbmlzaC5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvaWNvbnMvc3BhbmlzaC5wbmdcIixcblx0XCIuL3RhdGFycy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvaWNvbnMvdGF0YXJzLnBuZ1wiLFxuXHRcIi4vdGV1dG9ucy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvaWNvbnMvdGV1dG9ucy5wbmdcIixcblx0XCIuL3R1cmtzLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9pY29ucy90dXJrcy5wbmdcIixcblx0XCIuL3ZpZXRuYW1lc2UucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL2ljb25zL3ZpZXRuYW1lc2UucG5nXCIsXG5cdFwiLi92aWtpbmdzLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy9pY29ucy92aWtpbmdzLnBuZ1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvaWNvbnMgc3luYyByZWN1cnNpdmUgXFxcXC4ocG5nKSRcIjsiLCJmdW5jdGlvbiBpbXBvcnRBbGwocikge1xyXG4gIHJldHVybiByLmtleXMoKS5tYXAocik7XHJcbn1cclxuZnVuY3Rpb24gaW1wb3J0QWxsSW50b01hcChyLCByZWxhdGl2ZUltYWdlUGF0aCkge1xyXG4gIGNvbnN0IG15TWFwID0gbmV3IE1hcCgpO1xyXG4gIHIua2V5cygpXHJcbiAgICAubWFwKHIpXHJcbiAgICAuZm9yRWFjaCgocmVsYXRpdmVVcmwpID0+IHtcclxuICAgICAgY29uc3QgY2l2S2V5ID0gcmVsYXRpdmVVcmwucmVwbGFjZShyZWxhdGl2ZUltYWdlUGF0aCwgXCJcIikucmVwbGFjZShcIi5wbmdcIiwgXCJcIikuc3BsaXQoXCIuXCIpWzBdO1xyXG4gICAgICBpZiAobXlNYXAuaGFzKGNpdktleSkpIHtcclxuICAgICAgICBjb25zdCBjaXZLZXlQYXJ0cyA9IHJlbGF0aXZlVXJsLnJlcGxhY2UocmVsYXRpdmVJbWFnZVBhdGgsIFwiXCIpLnJlcGxhY2UoXCIucG5nXCIsIFwiXCIpLnNwbGl0KFwiLlwiKTtcclxuICAgICAgICBjb25zdCBjaXZLZXkyID0gYCR7Y2l2S2V5UGFydHNbMF19LiR7Y2l2S2V5UGFydHNbMV19YDtcclxuICAgICAgICBteU1hcC5zZXQoY2l2S2V5MiwgcmVsYXRpdmVVcmwpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG15TWFwLnNldChjaXZLZXksIHJlbGF0aXZlVXJsKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgcmV0dXJuIG15TWFwO1xyXG59XHJcbmNvbnN0IGNpdkljb25zTWFwID0gaW1wb3J0QWxsSW50b01hcChyZXF1aXJlLmNvbnRleHQoXCIuL2ljb25zL1wiLCB0cnVlLCAvXFwuKHBuZykkLyksIFwiY29tcG9uZW50cy9jaXYtaW1hZ2VzL2ljb25zL1wiKTtcclxuY29uc3QgY2l2VW5pcXVlVW5pdEljb25zTWFwID0gaW1wb3J0QWxsSW50b01hcChyZXF1aXJlLmNvbnRleHQoXCIuL2Npdi11bmlxdWUtdW5pdHMvXCIsIHRydWUsIC9cXC4ocG5nKSQvKSwgXCJjb21wb25lbnRzL2Npdi1pbWFnZXMvY2l2LXVuaXF1ZS11bml0cy9cIik7XHJcbmNvbnN0IGNpdkVtYmxlbUltYWdlTWFwID0gaW1wb3J0QWxsSW50b01hcChyZXF1aXJlLmNvbnRleHQoXCIuL2Npdi1lbWJsZW1zL1wiLCB0cnVlLCAvXFwuKHBuZykkLyksIFwiY29tcG9uZW50cy9jaXYtaW1hZ2VzL2Npdi1lbWJsZW1zL1wiKTtcclxuY29uc3QgY2l2VXBncmFkZUljb25NYXAgPSBpbXBvcnRBbGxJbnRvTWFwKHJlcXVpcmUuY29udGV4dChcIi4vdXBncmFkZS1pY29ucy9cIiwgdHJ1ZSwgL1xcLihwbmcpJC8pLCBcImNvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL1wiKTtcclxuXHJcbmV4cG9ydCB7IGNpdkljb25zTWFwLCBjaXZVbmlxdWVVbml0SWNvbnNNYXAsIGNpdkVtYmxlbUltYWdlTWFwLCBjaXZVcGdyYWRlSWNvbk1hcCB9O1xyXG4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vYXJiYWxlc3Rlci5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy9hcmJhbGVzdGVyLnBuZ1wiLFxuXHRcIi4vYXJjaGl0ZWN0dXJlLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL2FyY2hpdGVjdHVyZS5wbmdcIixcblx0XCIuL2Fycm93c2xpdHMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvYXJyb3dzbGl0cy5wbmdcIixcblx0XCIuL2Fyc29uLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL2Fyc29uLnBuZ1wiLFxuXHRcIi4vYXRvbmVtZW50LnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL2F0b25lbWVudC5wbmdcIixcblx0XCIuL2JhbGxpc3RpY3MucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvYmFsbGlzdGljcy5wbmdcIixcblx0XCIuL2JsYXN0IGZ1cm5hY2UucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvYmxhc3QgZnVybmFjZS5wbmdcIixcblx0XCIuL2Jsb2NrIHByaW50aW5nLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL2Jsb2NrIHByaW50aW5nLnBuZ1wiLFxuXHRcIi4vYmxvb2RsaW5lcy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy9ibG9vZGxpbmVzLnBuZ1wiLFxuXHRcIi4vYm9ka2luIGFycm93LnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL2JvZGtpbiBhcnJvdy5wbmdcIixcblx0XCIuL2JvbWJhcmQgdG93ZXIucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvYm9tYmFyZCB0b3dlci5wbmdcIixcblx0XCIuL2JvdyBzYXcucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvYm93IHNhdy5wbmdcIixcblx0XCIuL2JyYWNlci5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy9icmFjZXIucG5nXCIsXG5cdFwiLi9jYW5ub24gZ2FsbGVvbi5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy9jYW5ub24gZ2FsbGVvbi5wbmdcIixcblx0XCIuL2NhcHBlZCByYW0ucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvY2FwcGVkIHJhbS5wbmdcIixcblx0XCIuL2NhcmVlbmluZy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy9jYXJlZW5pbmcucG5nXCIsXG5cdFwiLi9jYXN0bGUucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvY2FzdGxlLnBuZ1wiLFxuXHRcIi4vY2FzdGxlLnRwLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL2Nhc3RsZS50cC5wbmdcIixcblx0XCIuL2NhdmFsaWVyLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL2NhdmFsaWVyLnBuZ1wiLFxuXHRcIi4vY2hhaW4gYmFyZGluZyBhcm1vci5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy9jaGFpbiBiYXJkaW5nIGFybW9yLnBuZ1wiLFxuXHRcIi4vY2hhaW4gbWFpbCBhcm1vci5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy9jaGFpbiBtYWlsIGFybW9yLnBuZ1wiLFxuXHRcIi4vY2hhbXBpb24ucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvY2hhbXBpb24ucG5nXCIsXG5cdFwiLi9jaGVtaXN0cnkucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvY2hlbWlzdHJ5LnBuZ1wiLFxuXHRcIi4vY3JvcCByb3RhdGlvbi5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy9jcm9wIHJvdGF0aW9uLnBuZ1wiLFxuXHRcIi4vY3Jvc3Nib3dtYW4ucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvY3Jvc3Nib3dtYW4ucG5nXCIsXG5cdFwiLi9kYXJrLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL2RhcmsucG5nXCIsXG5cdFwiLi9kYXJrLnRwLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL2RhcmsudHAucG5nXCIsXG5cdFwiLi9kb3VibGUtYml0IGF4ZS5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy9kb3VibGUtYml0IGF4ZS5wbmdcIixcblx0XCIuL2RyeSBkb2NrLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL2RyeSBkb2NrLnBuZ1wiLFxuXHRcIi4vZWFnbGUgd2Fycmlvci5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy9lYWdsZSB3YXJyaW9yLnBuZ1wiLFxuXHRcIi4vZWxpdGUgYmF0dGxlIGVsZXBoYW50LnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL2VsaXRlIGJhdHRsZSBlbGVwaGFudC5wbmdcIixcblx0XCIuL2VsaXRlIGNhbm5vbiBnYWxsZW9uLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL2VsaXRlIGNhbm5vbiBnYWxsZW9uLnBuZ1wiLFxuXHRcIi4vZWxpdGUgZWFnbGUgd2Fycmlvci5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy9lbGl0ZSBlYWdsZSB3YXJyaW9yLnBuZ1wiLFxuXHRcIi4vZWxpdGUgc2tpcm1pc2hlci5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy9lbGl0ZSBza2lybWlzaGVyLnBuZ1wiLFxuXHRcIi4vZWxpdGUgc3RlcHBlIGxhbmNlci5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy9lbGl0ZSBzdGVwcGUgbGFuY2VyLnBuZ1wiLFxuXHRcIi4vZWxpdGUgdW5pcXVlIHVuaXQucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvZWxpdGUgdW5pcXVlIHVuaXQucG5nXCIsXG5cdFwiLi9mYWl0aC5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy9mYWl0aC5wbmdcIixcblx0XCIuL2Zhc3QgZmlyZSBzaGlwLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL2Zhc3QgZmlyZSBzaGlwLnBuZ1wiLFxuXHRcIi4vZmVydm9yLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL2ZlcnZvci5wbmdcIixcblx0XCIuL2ZldWRhbC5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy9mZXVkYWwucG5nXCIsXG5cdFwiLi9mZXVkYWwudHAucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvZmV1ZGFsLnRwLnBuZ1wiLFxuXHRcIi4vZmxldGNoaW5nLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL2ZsZXRjaGluZy5wbmdcIixcblx0XCIuL2ZvcmdpbmcucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvZm9yZ2luZy5wbmdcIixcblx0XCIuL2ZvcnRpZmllZCB3YWxsLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL2ZvcnRpZmllZCB3YWxsLnBuZ1wiLFxuXHRcIi4vZ2FsbGVvbi5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy9nYWxsZW9uLnBuZ1wiLFxuXHRcIi4vZ2lsbG5ldHMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvZ2lsbG5ldHMucG5nXCIsXG5cdFwiLi9nb2xkIG1pbmluZy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy9nb2xkIG1pbmluZy5wbmdcIixcblx0XCIuL2dvbGQgc2hhZnQgbWluaW5nLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL2dvbGQgc2hhZnQgbWluaW5nLnBuZ1wiLFxuXHRcIi4vZ3VhcmQgdG93ZXIucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvZ3VhcmQgdG93ZXIucG5nXCIsXG5cdFwiLi9oYWxiZXJkaWVyLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL2hhbGJlcmRpZXIucG5nXCIsXG5cdFwiLi9oYW5kIGNhcnQucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvaGFuZCBjYXJ0LnBuZ1wiLFxuXHRcIi4vaGVhdGVkIHNob3QucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvaGVhdGVkIHNob3QucG5nXCIsXG5cdFwiLi9oZWF2eSBjYW1lbC5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy9oZWF2eSBjYW1lbC5wbmdcIixcblx0XCIuL2hlYXZ5IGNhdiBhcmNoZXIucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvaGVhdnkgY2F2IGFyY2hlci5wbmdcIixcblx0XCIuL2hlYXZ5IGRlbW8gc2hpcC5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy9oZWF2eSBkZW1vIHNoaXAucG5nXCIsXG5cdFwiLi9oZWF2eSBwbG93LnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL2hlYXZ5IHBsb3cucG5nXCIsXG5cdFwiLi9oZWF2eSBzY29ycGlvbi5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy9oZWF2eSBzY29ycGlvbi5wbmdcIixcblx0XCIuL2hlcmJhbCBtZWRpY2luZS5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy9oZXJiYWwgbWVkaWNpbmUucG5nXCIsXG5cdFwiLi9oZXJlc3kucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvaGVyZXN5LnBuZ1wiLFxuXHRcIi4vaG9yc2UgY29sbGFyLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL2hvcnNlIGNvbGxhci5wbmdcIixcblx0XCIuL2h1c2JhbmRyeS5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy9odXNiYW5kcnkucG5nXCIsXG5cdFwiLi9odXNzYXIucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvaHVzc2FyLnBuZ1wiLFxuXHRcIi4vaWxsdW1pbmF0aW9uLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL2lsbHVtaW5hdGlvbi5wbmdcIixcblx0XCIuL2ltcGVyaWFsIGNhbWVsLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL2ltcGVyaWFsIGNhbWVsLnBuZ1wiLFxuXHRcIi4vaW1wZXJpYWwgc2tpcm1pc2hlci5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy9pbXBlcmlhbCBza2lybWlzaGVyLnBuZ1wiLFxuXHRcIi4vaW1wZXJpYWwucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvaW1wZXJpYWwucG5nXCIsXG5cdFwiLi9pbXBlcmlhbC50cC5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy9pbXBlcmlhbC50cC5wbmdcIixcblx0XCIuL2lyb24gY2FzdGluZy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy9pcm9uIGNhc3RpbmcucG5nXCIsXG5cdFwiLi9rZWVwLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL2tlZXAucG5nXCIsXG5cdFwiLi9sZWF0aGVyIGFyY2hlciBhcm1vci5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy9sZWF0aGVyIGFyY2hlciBhcm1vci5wbmdcIixcblx0XCIuL2xpZ2h0IGNhdmFscnkucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvbGlnaHQgY2F2YWxyeS5wbmdcIixcblx0XCIuL2xvbmcgc3dvcmRzbWFuLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL2xvbmcgc3dvcmRzbWFuLnBuZ1wiLFxuXHRcIi4vbWFuLWF0LWFybXMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvbWFuLWF0LWFybXMucG5nXCIsXG5cdFwiLi9tYXNvbnJ5LnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL21hc29ucnkucG5nXCIsXG5cdFwiLi9tdXJkZXIgaG9sZXMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvbXVyZGVyIGhvbGVzLnBuZ1wiLFxuXHRcIi4vb25hZ2VyLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL29uYWdlci5wbmdcIixcblx0XCIuL3BhZGRlZCBhcmNoZXIgYXJtb3IucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvcGFkZGVkIGFyY2hlciBhcm1vci5wbmdcIixcblx0XCIuL3BhbGFkaW4ucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvcGFsYWRpbi5wbmdcIixcblx0XCIuL3BhcnRoaWFuIHRhY3RpY3MucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvcGFydGhpYW4gdGFjdGljcy5wbmdcIixcblx0XCIuL3Bpa2VtYW4ucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvcGlrZW1hbi5wbmdcIixcblx0XCIuL3BsYXRlIGJhcmRpbmcgYXJtb3IucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvcGxhdGUgYmFyZGluZyBhcm1vci5wbmdcIixcblx0XCIuL3BsYXRlIG1haWwgYXJtb3IucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvcGxhdGUgbWFpbCBhcm1vci5wbmdcIixcblx0XCIuL3JlZGVtcHRpb24ucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvcmVkZW1wdGlvbi5wbmdcIixcblx0XCIuL3JpbmcgYXJjaGVyIGFybW9yLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL3JpbmcgYXJjaGVyIGFybW9yLnBuZ1wiLFxuXHRcIi4vc2FuY3RpdHkucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvc2FuY3RpdHkucG5nXCIsXG5cdFwiLi9zY2FsZSBiYXJkaW5nIGFybW9yLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL3NjYWxlIGJhcmRpbmcgYXJtb3IucG5nXCIsXG5cdFwiLi9zY2FsZSBtYWlsIGFybW9yLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL3NjYWxlIG1haWwgYXJtb3IucG5nXCIsXG5cdFwiLi9zaGlwd3JpZ2h0LnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL3NoaXB3cmlnaHQucG5nXCIsXG5cdFwiLi9zaWVnZSBlbmdpbmVlcnMucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvc2llZ2UgZW5naW5lZXJzLnBuZ1wiLFxuXHRcIi4vc2llZ2Ugb25hZ2VyLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL3NpZWdlIG9uYWdlci5wbmdcIixcblx0XCIuL3NpZWdlIHJhbS5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy9zaWVnZSByYW0ucG5nXCIsXG5cdFwiLi9zcXVpcmVzLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL3NxdWlyZXMucG5nXCIsXG5cdFwiLi9zdG9uZSBtaW5pbmcucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvc3RvbmUgbWluaW5nLnBuZ1wiLFxuXHRcIi4vc3RvbmUgc2hhZnQgbWluaW5nLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL3N0b25lIHNoYWZ0IG1pbmluZy5wbmdcIixcblx0XCIuL3N1cHBsaWVzLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL3N1cHBsaWVzLnBuZ1wiLFxuXHRcIi4vdGhlb2NyYWN5LnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL3RoZW9jcmFjeS5wbmdcIixcblx0XCIuL3RodW1iIHJpbmcucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvdGh1bWIgcmluZy5wbmdcIixcblx0XCIuL3RyYWNraW5nLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL3RyYWNraW5nLnBuZ1wiLFxuXHRcIi4vdHJlYWRtaWxsIGNyYW5lLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL3RyZWFkbWlsbCBjcmFuZS5wbmdcIixcblx0XCIuL3R3by1oYW5kZWQgc3dvcmRzbWFuLnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL3R3by1oYW5kZWQgc3dvcmRzbWFuLnBuZ1wiLFxuXHRcIi4vdHdvLW1hbiBzYXcucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvdHdvLW1hbiBzYXcucG5nXCIsXG5cdFwiLi91bmlxdWUgdGVjaCBjYXN0bGUucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvdW5pcXVlIHRlY2ggY2FzdGxlLnBuZ1wiLFxuXHRcIi4vdW5pcXVlIHRlY2ggaW1wZXJpYWwucG5nXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMvdW5pcXVlIHRlY2ggaW1wZXJpYWwucG5nXCIsXG5cdFwiLi93YXIgZ2FsbGV5LnBuZ1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LWltYWdlcy91cGdyYWRlLWljb25zL3dhciBnYWxsZXkucG5nXCIsXG5cdFwiLi93aGVlbGJhcnJvdy5wbmdcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1pbWFnZXMvdXBncmFkZS1pY29ucy93aGVlbGJhcnJvdy5wbmdcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtaW1hZ2VzL3VwZ3JhZGUtaWNvbnMgc3luYyByZWN1cnNpdmUgXFxcXC4ocG5nKSRcIjsiLCJmdW5jdGlvbiBpbXBvcnRBbGxJbnRvTWFwKHIsIHJlbGF0aXZlSW1hZ2VQYXRoKSB7XHJcbiAgY29uc3QgbXlNYXAgPSBuZXcgTWFwKCk7XHJcbiAgci5rZXlzKClcclxuICAgIC5tYXAocilcclxuICAgIC5mb3JFYWNoKChyZWxhdGl2ZVVybCkgPT4ge1xyXG4gICAgICBjb25zdCBjaXZLZXkgPSByZWxhdGl2ZVVybC5yZXBsYWNlKHJlbGF0aXZlSW1hZ2VQYXRoLCBcIlwiKS5yZXBsYWNlKFwiLm1wM1wiLCBcIlwiKS5zcGxpdChcIi5cIilbMF07XHJcbiAgICAgIGlmIChteU1hcC5oYXMoY2l2S2V5KSkge1xyXG4gICAgICAgIGNvbnN0IGNpdktleVBhcnRzID0gcmVsYXRpdmVVcmwucmVwbGFjZShyZWxhdGl2ZUltYWdlUGF0aCwgXCJcIikucmVwbGFjZShcIi5tcDNcIiwgXCJcIikuc3BsaXQoXCIuXCIpO1xyXG4gICAgICAgIGNvbnN0IGNpdktleTIgPSBgJHtjaXZLZXlQYXJ0c1swXX0uJHtjaXZLZXlQYXJ0c1sxXX1gO1xyXG4gICAgICAgIG15TWFwLnNldChjaXZLZXkyLCByZWxhdGl2ZVVybCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbXlNYXAuc2V0KGNpdktleSwgcmVsYXRpdmVVcmwpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICByZXR1cm4gbXlNYXA7XHJcbn1cclxuXHJcbmNvbnN0IGNpdlNvdW5kTWFwID0gaW1wb3J0QWxsSW50b01hcChyZXF1aXJlLmNvbnRleHQoXCIuL3NvdW5kcy9cIiwgdHJ1ZSwgL1xcLihtcDMpJC8pLCBcImNvbXBvbmVudHMvY2l2LXNvdW5kcy9zb3VuZHMvXCIpO1xyXG5cclxuZnVuY3Rpb24gYnVpbGRBdWRpb0VsZW1lbnQoY2l2TmFtZSkge1xyXG4gIGNvbnN0IGF1ZGlvRWxlbWVudCA9IG5ldyBBdWRpbyhgLi8ke2NpdlNvdW5kTWFwLmdldChjaXZOYW1lLnRvTG93ZXJDYXNlKCkpfWApO1xyXG4gIHJldHVybiBhdWRpb0VsZW1lbnQ7XHJcbn1cclxuZnVuY3Rpb24gZ2V0QXVkaW9Tb3VyY2UoY2l2TmFtZSkge1xyXG4gIHJldHVybiBjaXZTb3VuZE1hcC5nZXQoY2l2TmFtZS50b0xvd2VyQ2FzZSgpKTtcclxufVxyXG5cclxuZXhwb3J0IHsgYnVpbGRBdWRpb0VsZW1lbnQsIGdldEF1ZGlvU291cmNlIH07XHJcbiIsInZhciBtYXAgPSB7XG5cdFwiLi9henRlY3MubXAzXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtc291bmRzL3NvdW5kcy9henRlY3MubXAzXCIsXG5cdFwiLi9iZW5nYWxpcy5tcDNcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1zb3VuZHMvc291bmRzL2JlbmdhbGlzLm1wM1wiLFxuXHRcIi4vYmVyYmVycy5tcDNcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1zb3VuZHMvc291bmRzL2JlcmJlcnMubXAzXCIsXG5cdFwiLi9ib2hlbWlhbnMubXAzXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtc291bmRzL3NvdW5kcy9ib2hlbWlhbnMubXAzXCIsXG5cdFwiLi9icml0b25zLm1wM1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LXNvdW5kcy9zb3VuZHMvYnJpdG9ucy5tcDNcIixcblx0XCIuL2J1bGdhcmlhbnMubXAzXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtc291bmRzL3NvdW5kcy9idWxnYXJpYW5zLm1wM1wiLFxuXHRcIi4vYnVyZ3VuZGlhbnMubXAzXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtc291bmRzL3NvdW5kcy9idXJndW5kaWFucy5tcDNcIixcblx0XCIuL2J1cm1lc2UubXAzXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtc291bmRzL3NvdW5kcy9idXJtZXNlLm1wM1wiLFxuXHRcIi4vYnl6YW50aW5lcy5tcDNcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1zb3VuZHMvc291bmRzL2J5emFudGluZXMubXAzXCIsXG5cdFwiLi9jZWx0cy5tcDNcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1zb3VuZHMvc291bmRzL2NlbHRzLm1wM1wiLFxuXHRcIi4vY2hpbmVzZS5tcDNcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1zb3VuZHMvc291bmRzL2NoaW5lc2UubXAzXCIsXG5cdFwiLi9jdW1hbnMubXAzXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtc291bmRzL3NvdW5kcy9jdW1hbnMubXAzXCIsXG5cdFwiLi9kcmF2aWRpYW5zLm1wM1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LXNvdW5kcy9zb3VuZHMvZHJhdmlkaWFucy5tcDNcIixcblx0XCIuL2V0aGlvcGlhbnMubXAzXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtc291bmRzL3NvdW5kcy9ldGhpb3BpYW5zLm1wM1wiLFxuXHRcIi4vZnJhbmtzLm1wM1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LXNvdW5kcy9zb3VuZHMvZnJhbmtzLm1wM1wiLFxuXHRcIi4vZ290aHMubXAzXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtc291bmRzL3NvdW5kcy9nb3Rocy5tcDNcIixcblx0XCIuL2d1cmphcmFzLm1wM1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LXNvdW5kcy9zb3VuZHMvZ3VyamFyYXMubXAzXCIsXG5cdFwiLi9oaW5kdXN0YW5pcy5tcDNcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1zb3VuZHMvc291bmRzL2hpbmR1c3RhbmlzLm1wM1wiLFxuXHRcIi4vaHVucy5tcDNcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1zb3VuZHMvc291bmRzL2h1bnMubXAzXCIsXG5cdFwiLi9pbmNhcy5tcDNcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1zb3VuZHMvc291bmRzL2luY2FzLm1wM1wiLFxuXHRcIi4vaXRhbGlhbnMubXAzXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtc291bmRzL3NvdW5kcy9pdGFsaWFucy5tcDNcIixcblx0XCIuL2phcGFuZXNlLm1wM1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LXNvdW5kcy9zb3VuZHMvamFwYW5lc2UubXAzXCIsXG5cdFwiLi9raG1lci5tcDNcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1zb3VuZHMvc291bmRzL2tobWVyLm1wM1wiLFxuXHRcIi4va29yZWFucy5tcDNcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1zb3VuZHMvc291bmRzL2tvcmVhbnMubXAzXCIsXG5cdFwiLi9saXRodWFuaWFucy5tcDNcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1zb3VuZHMvc291bmRzL2xpdGh1YW5pYW5zLm1wM1wiLFxuXHRcIi4vbWFneWFycy5tcDNcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1zb3VuZHMvc291bmRzL21hZ3lhcnMubXAzXCIsXG5cdFwiLi9tYWxheS5tcDNcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1zb3VuZHMvc291bmRzL21hbGF5Lm1wM1wiLFxuXHRcIi4vbWFsaWFucy5tcDNcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1zb3VuZHMvc291bmRzL21hbGlhbnMubXAzXCIsXG5cdFwiLi9tYXlhbnMubXAzXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtc291bmRzL3NvdW5kcy9tYXlhbnMubXAzXCIsXG5cdFwiLi9tb25nb2xzLm1wM1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LXNvdW5kcy9zb3VuZHMvbW9uZ29scy5tcDNcIixcblx0XCIuL3BlcnNpYW5zLm1wM1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LXNvdW5kcy9zb3VuZHMvcGVyc2lhbnMubXAzXCIsXG5cdFwiLi9wb2xlcy5tcDNcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1zb3VuZHMvc291bmRzL3BvbGVzLm1wM1wiLFxuXHRcIi4vcG9ydHVndWVzZS5tcDNcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1zb3VuZHMvc291bmRzL3BvcnR1Z3Vlc2UubXAzXCIsXG5cdFwiLi9yb21hbnMubXAzXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtc291bmRzL3NvdW5kcy9yb21hbnMubXAzXCIsXG5cdFwiLi9zYXJhY2Vucy5tcDNcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1zb3VuZHMvc291bmRzL3NhcmFjZW5zLm1wM1wiLFxuXHRcIi4vc2ljaWxpYW5zLm1wM1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LXNvdW5kcy9zb3VuZHMvc2ljaWxpYW5zLm1wM1wiLFxuXHRcIi4vc2xhdnMubXAzXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtc291bmRzL3NvdW5kcy9zbGF2cy5tcDNcIixcblx0XCIuL3NwYW5pc2gubXAzXCI6IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtc291bmRzL3NvdW5kcy9zcGFuaXNoLm1wM1wiLFxuXHRcIi4vdGF0YXJzLm1wM1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LXNvdW5kcy9zb3VuZHMvdGF0YXJzLm1wM1wiLFxuXHRcIi4vdGV1dG9ucy5tcDNcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1zb3VuZHMvc291bmRzL3RldXRvbnMubXAzXCIsXG5cdFwiLi90dXJrcy5tcDNcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1zb3VuZHMvc291bmRzL3R1cmtzLm1wM1wiLFxuXHRcIi4vdmlldG5hbWVzZS5tcDNcIjogXCIuL3NyYy9jb21wb25lbnRzL2Npdi1zb3VuZHMvc291bmRzL3ZpZXRuYW1lc2UubXAzXCIsXG5cdFwiLi92aWtpbmdzLm1wM1wiOiBcIi4vc3JjL2NvbXBvbmVudHMvY2l2LXNvdW5kcy9zb3VuZHMvdmlraW5ncy5tcDNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvY29tcG9uZW50cy9jaXYtc291bmRzL3NvdW5kcyBzeW5jIHJlY3Vyc2l2ZSBcXFxcLihtcDMpJFwiOyIsImltcG9ydCB7IGNpdkljb25zTWFwLCBjaXZVbmlxdWVVbml0SWNvbnNNYXAsIGNpdkVtYmxlbUltYWdlTWFwIH0gZnJvbSBcIi4uL2Npdi1pbWFnZXMvaW1hZ2UtaGVscGVyXCI7XHJcbmltcG9ydCB7IGdldENpdlRlY2hub2xvZ3lEZXNjcmlwdGlvbiB9IGZyb20gXCIuLi9jaXYtaW1hZ2VzL2Npdi1kYXRhL2RhdGEtaGVscGVyXCI7XHJcbmltcG9ydCB7IGJ1aWxkQXVkaW9FbGVtZW50LCBnZXRBdWRpb1NvdXJjZSB9IGZyb20gXCIuLi9jaXYtc291bmRzL3NvdW5kLWhlbHBlclwiO1xyXG5cclxuaW1wb3J0IHsgQ2l2VXBncmFkZU92ZXJsYXkgfSBmcm9tIFwiLi4vY2l2LXVwZ3JhZGUtb3ZlcmxheS9jaXYtdXBncmFkZS1vdmVybGF5XCI7XHJcblxyXG5jbGFzcyBDaXZUZWNoT3ZlcmxheSB7XHJcbiAgX3NvdW5kc1RvUGxheTtcclxuICBfc291bmRJbmRleDtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuX3NvdW5kSW5kZXggPSAwO1xyXG4gICAgdGhpcy5fc291bmRzVG9QbGF5ID0gW107XHJcbiAgfVxyXG4gIGJ1aWxkRWxlbWVudChjaXZOYW1lLCB0ZWNoT3B0aW9ucywgYXV0b0hpZGVEZWxheSkge1xyXG4gICAgdGhpcy5fc291bmRzVG9QbGF5LnB1c2goY2l2TmFtZS50b0xvd2VyQ2FzZSgpKTtcclxuICAgIGNvbnN0IG1haW5EaXYgPSB0aGlzLmJ1aWxkTWFpbkRpdkNvbnRhaW5lcihhdXRvSGlkZURlbGF5KTtcclxuXHJcbiAgICBjb25zdCBuYW1lQ29udGFpbmVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG5hbWVDb250YWluZXJEaXYuY2xhc3NMaXN0LmFkZChcImNpdi1uYW1lLWNvbnRhaW5lclwiKTtcclxuICAgIG5hbWVDb250YWluZXJEaXYuYXBwZW5kQ2hpbGQodGhpcy5idWlsZENpdkljb25FbGVtZW50KGNpdk5hbWUpKTtcclxuICAgIG5hbWVDb250YWluZXJEaXYuYXBwZW5kQ2hpbGQodGhpcy5idWlsZE5hbWVFbGVtZW50KGNpdk5hbWUpKTtcclxuICAgIG5hbWVDb250YWluZXJEaXYuYXBwZW5kQ2hpbGQodGhpcy5idWlsZENpdlVuaXF1ZVVuaXQoY2l2TmFtZSkpO1xyXG4gICAgbWFpbkRpdi5hcHBlbmRDaGlsZChuYW1lQ29udGFpbmVyRGl2KTtcclxuICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQodGhpcy5idWlsZENpdkRlc2NyaXB0aW9uKGNpdk5hbWUpKTtcclxuXHJcbiAgICBjb25zdCBjaXZVcGdyYWRlcyA9IG5ldyBDaXZVcGdyYWRlT3ZlcmxheSgpO1xyXG4gICAgbWFpbkRpdi5hcHBlbmRDaGlsZChjaXZVcGdyYWRlcy5idWlsZEVsZW1lbnQoY2l2TmFtZSwgdGVjaE9wdGlvbnMpKTtcclxuXHJcbiAgICBtYWluRGl2LmFwcGVuZENoaWxkKHRoaXMuYnVpbGRDaXZFbWJsZW0oY2l2TmFtZSkpO1xyXG4gICAgcmV0dXJuIG1haW5EaXY7XHJcbiAgfVxyXG4gIGJ1aWxkU291bmRzKCkge1xyXG4gICAgY29uc3Qgc291bmRFbGVtZW50ID0gYnVpbGRBdWRpb0VsZW1lbnQodGhpcy5fc291bmRzVG9QbGF5W3RoaXMuX3NvdW5kSW5kZXhdLnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgc291bmRFbGVtZW50Lm9uZW5kZWQgPSAoKSA9PiB7XHJcbiAgICAgIHRoaXMuX3NvdW5kSW5kZXgrKztcclxuICAgICAgaWYgKHR5cGVvZiB0aGlzLl9zb3VuZHNUb1BsYXlbdGhpcy5fc291bmRJbmRleF0gIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAvLyBwbGF5IG5leHQgc291bmRcclxuICAgICAgICBzb3VuZEVsZW1lbnQuc3JjID0gZ2V0QXVkaW9Tb3VyY2UodGhpcy5fc291bmRzVG9QbGF5W3RoaXMuX3NvdW5kSW5kZXhdKTtcclxuICAgICAgICBzb3VuZEVsZW1lbnQucGxheSgpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIHNvdW5kRWxlbWVudDtcclxuICB9XHJcbiAgYnVpbGRNYWluRGl2Q29udGFpbmVyKGF1dG9IaWRlRGVsYXkpIHtcclxuICAgIGNvbnN0IGRpdkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblxyXG4gICAgZGl2Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjaXYtdGVjaC1vdmVybGF5LWNvbnRhaW5lclwiKTtcclxuICAgIGRpdkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibWFzay1pbWctdmVydGljYWxcIik7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgZGl2Q29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJjaXYtdGVjaC1hbmltYXRpb24tbGVhdmUtYWN0aXZlXCIpO1xyXG4gICAgICBkaXZDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNpdi10ZWNoLWFuaW1hdGlvbi1lbnRlci1hY3RpdmVcIik7XHJcbiAgICAgIGlmIChhdXRvSGlkZURlbGF5ID4gLTEpIHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIGRpdkNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwiY2l2LXRlY2gtYW5pbWF0aW9uLWVudGVyLWFjdGl2ZVwiKTtcclxuICAgICAgICAgIGRpdkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY2l2LXRlY2gtYW5pbWF0aW9uLWxlYXZlLWFjdGl2ZVwiKTtcclxuICAgICAgICB9LCBhdXRvSGlkZURlbGF5KTtcclxuICAgICAgfVxyXG4gICAgfSwgMTAwMCk7XHJcbiAgICByZXR1cm4gZGl2Q29udGFpbmVyO1xyXG4gIH1cclxuICBidWlsZE5hbWVFbGVtZW50KGNpdk5hbWUpIHtcclxuICAgIGNvbnN0IG5hbWVFbGVtZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG5hbWVFbGVtZW50RGl2LmNsYXNzTGlzdC5hZGQoXCJjaXYtbmFtZVwiKTtcclxuXHJcbiAgICBjb25zdCBjaXZOYW1lVGV4dCA9IGAke2Npdk5hbWUuc3Vic3RyaW5nKDAsIDEpLnRvVXBwZXJDYXNlKCl9JHtjaXZOYW1lLnNsaWNlKDEpfWA7XHJcbiAgICBuYW1lRWxlbWVudERpdi5pbm5lclRleHQgPSBjaXZOYW1lVGV4dDtcclxuICAgIHJldHVybiBuYW1lRWxlbWVudERpdjtcclxuICB9XHJcbiAgYnVpbGRDaXZJY29uRWxlbWVudChjaXZOYW1lKSB7XHJcbiAgICBjb25zdCBjaXZJY29uID0gbmV3IEltYWdlKCk7XHJcbiAgICBjaXZJY29uLmNsYXNzTGlzdC5hZGQoXCJjaXYtaWNvblwiKTtcclxuICAgIGNpdkljb24uc3JjID0gYC4vJHtjaXZJY29uc01hcC5nZXQoY2l2TmFtZSl9YDtcclxuICAgIHJldHVybiBjaXZJY29uO1xyXG4gIH1cclxuICBidWlsZENpdkRlc2NyaXB0aW9uKGNpdk5hbWUpIHtcclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGRlc2NyaXB0aW9uRGl2LmNsYXNzTGlzdC5hZGQoXCJjaXYtZGVzY3JpcHRpb25cIik7XHJcbiAgICBkZXNjcmlwdGlvbkRpdi5pbm5lckhUTUwgPSBnZXRDaXZUZWNobm9sb2d5RGVzY3JpcHRpb24oY2l2TmFtZSk7XHJcbiAgICByZXR1cm4gZGVzY3JpcHRpb25EaXY7XHJcbiAgfVxyXG4gIGJ1aWxkQ2l2VW5pcXVlVW5pdChjaXZOYW1lKSB7XHJcbiAgICBjb25zdCBjaXZJY29uID0gbmV3IEltYWdlKCk7XHJcbiAgICBjaXZJY29uLmNsYXNzTGlzdC5hZGQoXCJjaXYtdW5pcXVlLXVuaXQtaWNvblwiKTtcclxuICAgIGNpdkljb24uc3JjID0gYC4vJHtjaXZVbmlxdWVVbml0SWNvbnNNYXAuZ2V0KGNpdk5hbWUpfWA7XHJcbiAgICByZXR1cm4gY2l2SWNvbjtcclxuICB9XHJcbiAgYnVpbGRDaXZFbWJsZW0oY2l2TmFtZSkge1xyXG4gICAgY29uc3QgY2l2SWNvbiA9IG5ldyBJbWFnZSgpO1xyXG4gICAgY2l2SWNvbi5jbGFzc0xpc3QuYWRkKFwiY2l2LWVtYmxlbVwiKTtcclxuICAgIGNpdkljb24uc3JjID0gYC4vJHtjaXZFbWJsZW1JbWFnZU1hcC5nZXQoY2l2TmFtZSl9YDtcclxuICAgIHJldHVybiBjaXZJY29uO1xyXG4gIH1cclxuICBjbGVhckNpdkRpdnMoKSB7XHJcbiAgICBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjaXYtdGVjaC1vdmVybGF5LWNvbnRhaW5lclwiKSkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICBlbGVtZW50LnJlbW92ZSgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBDaXZUZWNoT3ZlcmxheSB9O1xyXG4iLCJpbXBvcnQgeyBjaXZVcGdyYWRlSWNvbk1hcCB9IGZyb20gXCIuLi9jaXYtaW1hZ2VzL2ltYWdlLWhlbHBlclwiO1xyXG5pbXBvcnQgeyBnZXRDaXZUZWNobm9sb2d5VXBncmFkZXMsIGdldEFnZVRpZXJMZXZlbCwgZmlsdGVyTG93ZXN0VXBncmFkZXNGcm9tQ2F0ZWdvcmllcyB9IGZyb20gXCIuLi9jaXYtaW1hZ2VzL2Npdi1kYXRhL2RhdGEtaGVscGVyXCI7XHJcbmNsYXNzIENpdlVwZ3JhZGVPdmVybGF5IHtcclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcbiAgX3RlY2hPcHRpb25zO1xyXG4gIGJ1aWxkRWxlbWVudChjaXZOYW1lLCB0ZWNoT3B0aW9ucykge1xyXG4gICAgdGhpcy5fdGVjaE9wdGlvbnMgPSB0ZWNoT3B0aW9ucztcclxuICAgIGNvbnN0IG1haW5EaXYgPSB0aGlzLmJ1aWxkVXBncmFkZUNvbnRhaW5lcihjaXZOYW1lKTtcclxuICAgIHJldHVybiBtYWluRGl2O1xyXG4gIH1cclxuICBidWlsZFVwZ3JhZGVDb250YWluZXIoY2l2TmFtZSkge1xyXG4gICAgY29uc3QgbWFpbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBtYWluRGl2LmNsYXNzTGlzdC5hZGQoXCJjaXYtdXBncmFkZS1vdmVybGF5LWNvbnRhaW5lclwiKTtcclxuXHJcbiAgICBjb25zdCBhbGxUZWNocyA9IGdldENpdlRlY2hub2xvZ3lVcGdyYWRlcyhjaXZOYW1lKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwidGVjaCBvcHRpb25zOiBcIiwgdGhpcy5fdGVjaE9wdGlvbnMpO1xyXG4gICAgaWYgKHRoaXMuX3RlY2hPcHRpb25zLl9zaG93QmxhY2tzbWl0aFRlY2gpIHtcclxuICAgICAgY29uc3QgcmVkdWNlZEJzVGVjaHMgPSBmaWx0ZXJMb3dlc3RVcGdyYWRlc0Zyb21DYXRlZ29yaWVzKFtcImJsYWNrc21pdGhcIiwgXCJhcmNoZXJ5IHJhbmdlXCJdLCBhbGxUZWNocyk7XHJcbiAgICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQodGhpcy5idWlsZEljb25Db250YWluZXIocmVkdWNlZEJzVGVjaHMpKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLl90ZWNoT3B0aW9ucy5fc2hvd01vbmFzdGFyeVRlY2gpIHtcclxuICAgICAgY29uc3QgcmVkdWNlZEVjb1RlY2hzID0gZmlsdGVyTG93ZXN0VXBncmFkZXNGcm9tQ2F0ZWdvcmllcyhbXCJsdW1iZXIgY2FtcFwiLCBcIm1pbGxcIiwgXCJ1bml2ZXJzaXR5XCIsIFwic3RhYmxlXCJdLCBhbGxUZWNocyk7XHJcbiAgICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQodGhpcy5idWlsZEljb25Db250YWluZXIocmVkdWNlZEVjb1RlY2hzKSk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5fdGVjaE9wdGlvbnMuX3Nob3dVbml2ZXJzaXR5VGVjaCkge1xyXG4gICAgICBjb25zdCByZWR1Y2VkTW9ua1RlY2hzID0gZmlsdGVyTG93ZXN0VXBncmFkZXNGcm9tQ2F0ZWdvcmllcyhbXCJtb25hc3RlcnlcIl0sIGFsbFRlY2hzKTtcclxuICAgICAgbWFpbkRpdi5hcHBlbmRDaGlsZCh0aGlzLmJ1aWxkSWNvbkNvbnRhaW5lcihyZWR1Y2VkTW9ua1RlY2hzLnNsaWNlKDAsIDUpKSk7XHJcbiAgICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQodGhpcy5idWlsZEljb25Db250YWluZXIocmVkdWNlZE1vbmtUZWNocy5zbGljZSg1LCByZWR1Y2VkTW9ua1RlY2hzLmxlbmd0aCkpKTtcclxuICAgIH1cclxuICAgIHJldHVybiBtYWluRGl2O1xyXG4gIH1cclxuICBidWlsZEljb25Db250YWluZXIoYXJyYXlPZlVwZ3JhZGVzKSB7XHJcbiAgICBjb25zdCBkaXZDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZGl2Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjaXYtdXBncmFkZS1jb250YWluZXJcIik7XHJcblxyXG4gICAgYXJyYXlPZlVwZ3JhZGVzLmZvckVhY2goKHVwZ3JhZGUpID0+IHtcclxuICAgICAgY29uc3QgaW1hZ2VQYXRoID0gYC4vJHtjaXZVcGdyYWRlSWNvbk1hcC5nZXQodXBncmFkZS5yYXdOYW1lLnRvTG93ZXJDYXNlKCkpfWA7XHJcbiAgICAgIGNvbnN0IGljb25FbGVtZW50ID0gdGhpcy5idWlsZEljb24oaW1hZ2VQYXRoLCB1cGdyYWRlLmlkID09PSAtMSk7XHJcblxyXG4gICAgICBjb25zdCBudW1UaWVycyA9IGdldEFnZVRpZXJMZXZlbCh1cGdyYWRlLnJhd05hbWUpO1xyXG4gICAgICBjb25zdCB0aWVyQ29udGFpbmVyID0gdGhpcy5idWlsZFRpZXJDb250YWluZXIobnVtVGllcnMsIHVwZ3JhZGUuaWQgPT09IC0xKTtcclxuICAgICAgaWNvbkVsZW1lbnQuYXBwZW5kQ2hpbGQodGllckNvbnRhaW5lcik7XHJcblxyXG4gICAgICBkaXZDb250YWluZXIuYXBwZW5kQ2hpbGQoaWNvbkVsZW1lbnQpO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gZGl2Q29udGFpbmVyO1xyXG4gIH1cclxuICBidWlsZEljb24oaW1hZ2VQYXRoLCBkaXNhYmxlSWNvbikge1xyXG4gICAgY29uc3QgdXBncmFkZUljb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgdXBncmFkZUljb25Db250YWluZXIuY2xhc3NMaXN0LmFkZChcInVwZ3JhZGUtaWNvbi1jb250YWluZXJcIik7XHJcblxyXG4gICAgY29uc3QgdXBncmFkZUljb24gPSBuZXcgSW1hZ2UoKTtcclxuICAgIHVwZ3JhZGVJY29uLnNyYyA9IGltYWdlUGF0aDtcclxuICAgIHVwZ3JhZGVJY29uLmNsYXNzTGlzdC5hZGQoXCJ1cGdyYWRlLWljb25cIik7XHJcbiAgICB1cGdyYWRlSWNvbkNvbnRhaW5lci5hcHBlbmRDaGlsZCh1cGdyYWRlSWNvbik7XHJcblxyXG4gICAgaWYgKGRpc2FibGVJY29uKSB7XHJcbiAgICAgIGNvbnN0IG1lc29EaXNhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgbWVzb0Rpc2FibGUuY2xhc3NMaXN0LmFkZChcImRpc2FibGUtaWNvbi1tZXNvXCIpO1xyXG4gICAgICB1cGdyYWRlSWNvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChtZXNvRGlzYWJsZSk7XHJcbiAgICAgIHVwZ3JhZGVJY29uQ29udGFpbmVyLmFwcGVuZENoaWxkKHVwZ3JhZGVJY29uKTtcclxuICAgIH1cclxuICAgIHJldHVybiB1cGdyYWRlSWNvbkNvbnRhaW5lcjtcclxuICB9XHJcbiAgYnVpbGRUaWVyQ29udGFpbmVyKHRpZXJMZXZlbHMsIGZ1bGxEaXNhYmxlZCkge1xyXG4gICAgY29uc3QgdGllckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0aWVyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ1cGdyYWRlLXRpZXItY29udGFpbmVyXCIpO1xyXG5cclxuICAgIGNvbnN0IHRpZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgaWYgKGZ1bGxEaXNhYmxlZCkge1xyXG4gICAgICB0aWVyLmNsYXNzTGlzdC5hZGQoYGRpc2FibGVkLTFgKTtcclxuICAgICAgdGllckNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aWVyKTtcclxuICAgIH0gZWxzZSBpZiAodGllckxldmVscyA9PT0gLTEgJiYgIWZ1bGxEaXNhYmxlZCkge1xyXG4gICAgICB0aWVyLmNsYXNzTGlzdC5hZGQoYGVuYWJsZWQtMWApO1xyXG4gICAgICB0aWVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpZXIpO1xyXG4gICAgfSBlbHNlIGlmICh0aWVyTGV2ZWxzID4gLTEpIHtcclxuICAgICAgLy8rMSBmb3IgMCBvZmZzZXRcclxuICAgICAgY29uc3Qgb2Zmc2V0VGllcnMgPSB0aWVyTGV2ZWxzICsgMTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvZmZzZXRUaWVyczsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgbXVsdGlUaWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBtdWx0aVRpZXIuY2xhc3NMaXN0LmFkZChgZW5hYmxlZC0zYCk7XHJcbiAgICAgICAgdGllckNvbnRhaW5lci5hcHBlbmRDaGlsZChtdWx0aVRpZXIpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aWVyTGV2ZWxzID09PSAwKSB7XHJcbiAgICAgICAgY29uc3QgZGlzYWJsZVRpZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGRpc2FibGVUaWVyLmNsYXNzTGlzdC5hZGQoYGRpc2FibGVkLTNgKTtcclxuICAgICAgICBjb25zdCBkaXNhYmxlVGllcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGRpc2FibGVUaWVyMS5jbGFzc0xpc3QuYWRkKGBkaXNhYmxlZC0zYCk7XHJcbiAgICAgICAgdGllckNvbnRhaW5lci5hcHBlbmRDaGlsZChkaXNhYmxlVGllcik7XHJcbiAgICAgICAgdGllckNvbnRhaW5lci5hcHBlbmRDaGlsZChkaXNhYmxlVGllcjEpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aWVyTGV2ZWxzID09PSAxKSB7XHJcbiAgICAgICAgY29uc3QgZGlzYWJsZVRpZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGRpc2FibGVUaWVyLmNsYXNzTGlzdC5hZGQoYGRpc2FibGVkLTNgKTtcclxuICAgICAgICB0aWVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGRpc2FibGVUaWVyKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRpZXJDb250YWluZXI7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBDaXZVcGdyYWRlT3ZlcmxheSB9O1xyXG4iLCJpbXBvcnQgeyBTb2NrZXRFbnVtcyB9IGZyb20gXCIuLi8uLi9jb21tb24tZGF0YVwiO1xyXG5jbGFzcyBUZWNoT3ZlcmxheUNvbnRyb2wge1xyXG4gIF9kYXRhU3RvcmU7XHJcbiAgX2Npdkxpc3Q7XHJcbiAgX2NsaWVudFdlYnNvY2tldDtcclxuICBjb25zdHJ1Y3RvcihkYXRhU3RvcmUsIGNpdkxpc3QsIGNsaWVudFdlYnNvY2tldCkge1xyXG4gICAgdGhpcy5fZGF0YVN0b3JlID0gZGF0YVN0b3JlO1xyXG4gICAgdGhpcy5fY2l2TGlzdCA9IGNpdkxpc3Q7XHJcbiAgICB0aGlzLl9jbGllbnRXZWJzb2NrZXQgPSBjbGllbnRXZWJzb2NrZXQ7XHJcbiAgfVxyXG4gIGJ1aWxkRWxlbWVudCgpIHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibGVmdC1jb2x1bW5cIik7XHJcbiAgICAvLyBjb250cm9sc1xyXG4gICAgY29uc3QgY29udHJvbHNFbGVtZW50ID0gdGhpcy5idWlsZFRlY2hTZXR0aW5nc1BhbmVsKCk7XHJcblxyXG4gICAgLy8gbGlzdCBvZiBjaXZzXHJcbiAgICBjb25zdCBjaXZMaXN0RWxlbWVudCA9IHRoaXMuX2Npdkxpc3QuYnVpbGRFbGVtZW50KHRydWUpO1xyXG4gICAgY2l2TGlzdEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInRlY2gtY2l2LWxpc3RcIik7XHJcblxyXG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChjb250cm9sc0VsZW1lbnQpO1xyXG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChjaXZMaXN0RWxlbWVudCk7XHJcblxyXG4gICAgLy93aGVuIHRoZSBkb20gbG9hZHMgdGhlIGNpdiBsaXN0LCB1cGRhdGUgaXQgd2l0aCBvdXIgc2V0dGluZ3NcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLm1vZGlmeUNpdkNvdW50Q1NTKCk7XHJcbiAgICB9LCA1MCk7XHJcbiAgICByZXR1cm4gZWxlbWVudDtcclxuICB9XHJcblxyXG4gIGJ1aWxkVGVjaFNldHRpbmdzUGFuZWwoKSB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInRlY2gtc2V0dGluZ3NcIik7XHJcblxyXG4gICAgLy9oZWFkZXJcclxuICAgIGNvbnN0IGhlYWRlckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgaGVhZGVyRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwidGVjaC1oZWFkZXJcIik7XHJcbiAgICBoZWFkZXJFbGVtZW50LmlubmVySFRNTCA9IFwiVGVjaG5vbG9neSBPdmVybGF5XCI7XHJcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGhlYWRlckVsZW1lbnQpO1xyXG5cclxuICAgIGNvbnN0IGJ1dHRvbnNFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGJ1dHRvbnNFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJhY3Rpb24tYnV0dG9uc1wiKTtcclxuICAgIGJ1dHRvbnNFbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuYnVpbGRCdXR0b24oXCJDbGVhclwiLCBcImJ1dHRvbi1yZWRcIiwgdGhpcy5vbkNsZWFyQ2xpY2tlZC5iaW5kKHRoaXMpKSk7XHJcbiAgICBidXR0b25zRWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmJ1aWxkQnV0dG9uKFwiU2hvd1wiLCBcImJ1dHRvbi1ibHVlXCIsIHRoaXMub25TaG93Q2xpY2tlZC5iaW5kKHRoaXMpKSk7XHJcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGJ1dHRvbnNFbGVtZW50KTtcclxuXHJcbiAgICBjb25zdCBzZXR0aW5nc0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgc2V0dGluZ3NFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJhY3Rpb24tc2V0dGluZ3NcIik7XHJcbiAgICBPYmplY3Qua2V5cyh0aGlzLl9kYXRhU3RvcmUuX3RlY2hPdmVybGF5U3RvcmUpLmZvckVhY2goKGtleSwgaW5kZXgpID0+IHtcclxuICAgICAgLy8gY29uc29sZS5sb2coYGtleSAke2tleX0gOjogJHt0aGlzLl9kYXRhU3RvcmUuX3RlY2hPdmVybGF5U3RvcmVba2V5XX1gKTtcclxuICAgICAgaWYgKGtleSA9PT0gXCJfbGFiZWxfdXNlcklkXCIpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHR5cGVvZiB0aGlzLl9kYXRhU3RvcmUuX3RlY2hPdmVybGF5U3RvcmVba2V5XSA9PT0gXCJib29sZWFuXCIpIHtcclxuICAgICAgICBzZXR0aW5nc0VsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5idWlsZENoZWNrQm94KGtleSwgdGhpcy5fZGF0YVN0b3JlLl90ZWNoT3ZlcmxheVN0b3JlW2tleV0pKTtcclxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdGhpcy5fZGF0YVN0b3JlLl90ZWNoT3ZlcmxheVN0b3JlW2tleV0pIHtcclxuICAgICAgICBzZXR0aW5nc0VsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5idWlsZElucHV0Qm94KGtleSwgdGhpcy5fZGF0YVN0b3JlLl90ZWNoT3ZlcmxheVN0b3JlW2tleV0pKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKHNldHRpbmdzRWxlbWVudCk7XHJcblxyXG4gICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgfVxyXG4gIGJ1aWxkQ2hlY2tCb3gobGFiZWwsIHZhbHVlKSB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJzZXR0aW5nLWNvbnRhaW5lclwiKTtcclxuXHJcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwic3dpdGNoXCIpO1xyXG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgbGFiZWwpO1xyXG5cclxuICAgIGNvbnN0IHNwYW5MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgc3BhbkxhYmVsLmlubmVySFRNTCA9IHRoaXMuc2FuaXRpemVEaXNwbGF5VmFsdWUobGFiZWwpO1xyXG5cclxuICAgIGNvbnN0IGlucHV0Q2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICBpbnB1dENoZWNrYm94LnR5cGUgPSBcImNoZWNrYm94XCI7XHJcbiAgICBpbnB1dENoZWNrYm94LmlkID0gbGFiZWw7XHJcbiAgICBpbnB1dENoZWNrYm94LmNoZWNrZWQgPSB2YWx1ZTtcclxuICAgIGlucHV0Q2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZXZlbnQpID0+IHtcclxuICAgICAgdGhpcy5zYXZlRGF0YShldmVudCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBzcGFuQ2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgIHNwYW5DaGVja2JveC5jbGFzc0xpc3QuYWRkKFwic2xpZGVyXCIpO1xyXG4gICAgc3BhbkNoZWNrYm94LmNsYXNzTGlzdC5hZGQoXCJyb3VuZFwiKTtcclxuXHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc3BhbkxhYmVsKTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChlbGVtZW50KTtcclxuXHJcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGlucHV0Q2hlY2tib3gpO1xyXG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChzcGFuQ2hlY2tib3gpO1xyXG5cclxuICAgIHJldHVybiBjb250YWluZXI7XHJcbiAgfVxyXG4gIGJ1aWxkSW5wdXRCb3gobGFiZWwsIHZhbHVlKSB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInNldHRpbmctY29udGFpbmVyXCIpO1xyXG5cclxuICAgIGNvbnN0IGVsZW1lbnRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgIGVsZW1lbnRMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgbGFiZWwpO1xyXG5cclxuICAgIGNvbnN0IHNwYW5MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgc3BhbkxhYmVsLmlubmVySFRNTCA9IHRoaXMuc2FuaXRpemVEaXNwbGF5VmFsdWUobGFiZWwpO1xyXG5cclxuICAgIGNvbnN0IGlucHV0TnVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgaW5wdXROdW1iZXIuY2xhc3NMaXN0LmFkZChcImlucHV0LW51bWJlclwiKTtcclxuICAgIGlucHV0TnVtYmVyLnR5cGUgPSBcIm51bWJlclwiO1xyXG4gICAgaW5wdXROdW1iZXIuaWQgPSBsYWJlbDtcclxuICAgIGlucHV0TnVtYmVyLnZhbHVlID0gdmFsdWU7XHJcbiAgICBpbnB1dE51bWJlci5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIChldmVudCkgPT4ge1xyXG4gICAgICB0aGlzLnNhdmVEYXRhKGV2ZW50KTtcclxuICAgICAgaWYgKGV2ZW50LnRhcmdldC5pZCA9PT0gXCJfbnVtQ2l2c1BlclJvd1wiKSB7XHJcbiAgICAgICAgdGhpcy5tb2RpZnlDaXZDb3VudENTUygpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGVsZW1lbnRMYWJlbCk7XHJcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKHNwYW5MYWJlbCk7XHJcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGlucHV0TnVtYmVyKTtcclxuXHJcbiAgICByZXR1cm4gZWxlbWVudDtcclxuICB9XHJcbiAgYnVpbGRCdXR0b24obGFiZWwsIGJ1dHRvbkNsYXNzLCBjYWxsYmFjaykge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJzZXR0aW5nLWNvbnRhaW5lclwiKTtcclxuXHJcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJzZXR0aW5nLWJ1dHRvblwiLCBidXR0b25DbGFzcyk7XHJcbiAgICBidXR0b24uaWQgPSBsYWJlbDtcclxuICAgIGJ1dHRvbi5pbm5lckhUTUwgPSBsYWJlbDtcclxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2FsbGJhY2ssIGZhbHNlKTtcclxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcclxuICAgIHJldHVybiBlbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgb25DbGVhckNsaWNrZWQoZXZlbnQpIHtcclxuICAgIHRoaXMuX2NsaWVudFdlYnNvY2tldC5zZW5kTWVzc2FnZShTb2NrZXRFbnVtcy5BR0VPVkVSTEFZUFVTSCwgdGhpcy5idWlsZFBheWxvYWQoZmFsc2UpKTtcclxuICAgIHRoaXMuX2Npdkxpc3QucmVzZXRTdGF0ZSgpO1xyXG4gIH1cclxuICBvblNob3dDbGlja2VkKGV2ZW50KSB7XHJcbiAgICB0aGlzLl9jbGllbnRXZWJzb2NrZXQuc2VuZE1lc3NhZ2UoU29ja2V0RW51bXMuQUdFT1ZFUkxBWVBVU0gsIHRoaXMuYnVpbGRQYXlsb2FkKHRydWUpKTtcclxuICB9XHJcblxyXG4gIGJ1aWxkUGF5bG9hZChzaG93KSB7XHJcbiAgICBjb25zdCBwYXlsb2FkID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5fZGF0YVN0b3JlLl90ZWNoT3ZlcmxheVN0b3JlLCB7IHNob3dPdmVybGF5OiBzaG93LCBwaWNrZWRDaXZzOiB0aGlzLl9jaXZMaXN0LmdldExpc3RPZkNpdnNDbGlja2VkKCkgfSk7XHJcbiAgICByZXR1cm4gcGF5bG9hZDtcclxuICB9XHJcblxyXG4gIHNhdmVEYXRhKCkge1xyXG4gICAgT2JqZWN0LmtleXModGhpcy5fZGF0YVN0b3JlLl90ZWNoT3ZlcmxheVN0b3JlKS5mb3JFYWNoKChrZXksIGluZGV4KSA9PiB7XHJcbiAgICAgIGxldCBzdG9yZWRWYWx1ZTtcclxuICAgICAgaWYgKGtleSA9PT0gXCJfbGFiZWxfdXNlcklkXCIpIHtcclxuICAgICAgICBzdG9yZWRWYWx1ZSA9IHRoaXMuX2RhdGFTdG9yZS5fdGVjaE92ZXJsYXlTdG9yZVtrZXldO1xyXG4gICAgICB9IGVsc2UgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGtleSkudmFsdWUgPT09IFwib25cIikge1xyXG4gICAgICAgIHN0b3JlZFZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoa2V5KS5jaGVja2VkO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHN0b3JlZFZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoa2V5KS52YWx1ZTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLl9kYXRhU3RvcmUuX3RlY2hPdmVybGF5U3RvcmVba2V5XSA9IHN0b3JlZFZhbHVlO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLl9kYXRhU3RvcmUuc2F2ZURhdGEoKTtcclxuICB9XHJcbiAgbW9kaWZ5Q2l2Q291bnRDU1MoKSB7XHJcbiAgICBjb25zdCB3aWR0aFBlcmNlbnQgPSAxMDAgLyB0aGlzLl9kYXRhU3RvcmUuX3RlY2hPdmVybGF5U3RvcmUuX251bUNpdnNQZXJSb3c7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmFkbWluLWNpdi1pY29uXCIpLmZvckVhY2goKGUpID0+IHtcclxuICAgICAgZS5zdHlsZS5mbGV4ID0gYDEgMCAke3dpZHRoUGVyY2VudH0lYDtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2FuaXRpemVEaXNwbGF5VmFsdWUodmFsdWUpIHtcclxuICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKFwiX3Nob3dcIiwgXCJcIikucmVwbGFjZShcIl91c2VcIiwgXCJcIikucmVwbGFjZShcIl9cIiwgXCJcIikucmVwbGFjZShcIlRlY2hcIiwgXCJcIik7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBUZWNoT3ZlcmxheUNvbnRyb2wgfTtcclxuIiwiY2xhc3MgVGVjaG5vbG9neU92ZXJsYXlTdG9yZSB7XHJcbiAgX3VzZVNvdW5kID0gZmFsc2U7XHJcbiAgX2F1dG9IaWRlID0gdHJ1ZTtcclxuICBfc2hvd1RlY2hPdmVybGF5ID0gdHJ1ZTtcclxuICBfc2hvd0JsYWNrc21pdGhUZWNoID0gZmFsc2U7XHJcbiAgX3Nob3dVbml2ZXJzaXR5VGVjaCA9IGZhbHNlO1xyXG4gIF9zaG93TW9uYXN0YXJ5VGVjaCA9IGZhbHNlO1xyXG4gIF9zaG93RG9ja1RlY2ggPSBmYWxzZTtcclxuICBfc2hvd0JhcnJhY2tzVGVjaCA9IGZhbHNlO1xyXG4gIF9zaG93QXJjaGVyeVRlY2ggPSBmYWxzZTtcclxuICBfc2hvd1N0YWJsZVRlY2ggPSBmYWxzZTtcclxuICBfc2hvd1NpZWdlV29ya3Nob3BUZWNoID0gZmFsc2U7XHJcbiAgX2F1dG9IaWRlRGVsYXkgPSAxMjtcclxuICBfbnVtQ2l2c1BlclJvdyA9IDc7XHJcbiAgX251bVBsYXllcnNJbk1hdGNoID0gMjtcclxuICBfbGFiZWxfdXNlcklkID0gXCJcIjtcclxufVxyXG5jbGFzcyBVSVNldHRpbmdzT3ZlcmxheVN0b3JlIHtcclxuICBfZm9udFNpemUgPSAyMjtcclxuICBfdGVjaEJhY2tncm91bmRPcGFjaXR5ID0gMC44O1xyXG59XHJcblxyXG5jbGFzcyBMb2NhbFNhdmVkRGF0YSB7XHJcbiAgX3RlY2hPdmVybGF5U3RvcmU7XHJcbiAgX3VpU2V0dGluZ3NPdmVybGF5U3RvcmU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5fdGVjaE92ZXJsYXlTdG9yZSA9IG5ldyBUZWNobm9sb2d5T3ZlcmxheVN0b3JlKCk7XHJcbiAgICB0aGlzLl91aVNldHRpbmdzT3ZlcmxheVN0b3JlID0gbmV3IFVJU2V0dGluZ3NPdmVybGF5U3RvcmUoKTtcclxuICB9XHJcblxyXG4gIHNhdmVEYXRhKCkge1xyXG4gICAgLy8gY29uc29sZS5sb2coYFNhdmluZyAke3RoaXMuX3RlY2hPdmVybGF5U3RvcmV9YCk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRlY2hPdmVybGF5U3RvcmVcIiwgSlNPTi5zdHJpbmdpZnkodGhpcy5fdGVjaE92ZXJsYXlTdG9yZSkpO1xyXG4gICAgLy8gY29uc29sZS5sb2coYFNhdmluZyAke3RoaXMuX3VpU2V0dGluZ3NPdmVybGF5U3RvcmV9YCk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVpU2V0dGluZ3NPdmVybGF5U3RvcmVcIiwgSlNPTi5zdHJpbmdpZnkodGhpcy5fdWlTZXR0aW5nc092ZXJsYXlTdG9yZSkpO1xyXG4gIH1cclxuXHJcbiAgbG9hZERhdGEoKSB7XHJcbiAgICBjb25zdCB0ZWNoRGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0ZWNoT3ZlcmxheVN0b3JlXCIpKTtcclxuICAgIGlmICh0ZWNoRGF0YSkge1xyXG4gICAgICBPYmplY3QuYXNzaWduKHRoaXMuX3RlY2hPdmVybGF5U3RvcmUsIHRlY2hEYXRhKTtcclxuICAgICAgLy8gY29uc29sZS5sb2codGhpcy5fdGVjaE92ZXJsYXlTdG9yZS5fbGFiZWxfdXNlcklkKTtcclxuICAgICAgaWYgKCF0aGlzLl90ZWNoT3ZlcmxheVN0b3JlLl9sYWJlbF91c2VySWQpIHtcclxuICAgICAgICB0aGlzLl90ZWNoT3ZlcmxheVN0b3JlLl9sYWJlbF91c2VySWQgPSBjcnlwdG8ucmFuZG9tVVVJRCgpO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIHRoaXMuX3RlY2hPdmVybGF5U3RvcmUgPSB0ZWNoRGF0YTtcclxuICAgIH1cclxuICAgIGNvbnN0IHVpRGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1aVNldHRpbmdzT3ZlcmxheVN0b3JlXCIpKTtcclxuICAgIGlmICh1aURhdGEpIHtcclxuICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLl91aVNldHRpbmdzT3ZlcmxheVN0b3JlLCB1aURhdGEpO1xyXG4gICAgICAvLyB0aGlzLl91aVNldHRpbmdzT3ZlcmxheVN0b3JlID0gdWlEYXRhO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZGVsZXRlRGF0YShrZXkpIHtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBMb2NhbFNhdmVkRGF0YSB9O1xyXG4iLCJpbXBvcnQgeyBUZWNoT3ZlcmxheUNvbnRyb2wgfSBmcm9tIFwiLi4vY29tcG9uZW50cy90ZWNoLW92ZXJsYXktY29udHJvbC90ZWNoLW92ZXJsYXktY29udHJvbFwiO1xyXG5pbXBvcnQgeyBDaXZJY29uTGlzdCB9IGZyb20gXCIuLi9jb21wb25lbnRzL2Npdi1pY29ucy9jaXYtaWNvbi1saXN0XCI7XHJcblxyXG5jbGFzcyBBZG1pblBhZ2Uge1xyXG4gIF9kYXRhU3RvcmU7XHJcbiAgX2NsaWVudFdlYnNvY2tldDtcclxuICBjb25zdHJ1Y3RvcihkYXRhU3RvcmUsIGNsaWVudFdlYnNvY2tldCkge1xyXG4gICAgdGhpcy5fZGF0YVN0b3JlID0gZGF0YVN0b3JlO1xyXG4gICAgdGhpcy5fY2xpZW50V2Vic29ja2V0ID0gY2xpZW50V2Vic29ja2V0O1xyXG4gIH1cclxuICBidWlsZEh0bWwoKSB7XHJcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJhZG1pbi1ib2R5XCIpO1xyXG4gICAgY29uc3QgYm9keUNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImR5bmFtaWMtY29udGVudFwiKTtcclxuXHJcbiAgICBjb25zdCBhZG1pblBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgYWRtaW5QYWdlLmNsYXNzTGlzdC5hZGQoXCJhZG1pbi1wYWdlXCIpO1xyXG5cclxuICAgIGNvbnN0IGNpdkljb25MaXN0ID0gbmV3IENpdkljb25MaXN0KCk7XHJcbiAgICBjb25zdCB0ZWNoT3ZlcmxheUNvbnRyb2wgPSBuZXcgVGVjaE92ZXJsYXlDb250cm9sKHRoaXMuX2RhdGFTdG9yZSwgY2l2SWNvbkxpc3QsIHRoaXMuX2NsaWVudFdlYnNvY2tldCk7XHJcbiAgICBhZG1pblBhZ2UuYXBwZW5kQ2hpbGQodGVjaE92ZXJsYXlDb250cm9sLmJ1aWxkRWxlbWVudCgpKTtcclxuXHJcbiAgICBib2R5Q29udGVudC5hcHBlbmRDaGlsZChhZG1pblBhZ2UpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHsgQWRtaW5QYWdlIH07XHJcbiIsImltcG9ydCB7IFNvY2tldEVudW1zIH0gZnJvbSBcIi4uL2NvbW1vbi1kYXRhXCI7XHJcbmltcG9ydCB7IGdldENpdk5hbWVzIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvY2l2LWltYWdlcy9jaXYtZGF0YS9kYXRhLWhlbHBlclwiO1xyXG5pbXBvcnQgeyBDaXZUZWNoT3ZlcmxheSB9IGZyb20gXCIuLi9jb21wb25lbnRzL2Npdi10ZWNoLW92ZXJsYXkvY2l2LXRlY2gtb3ZlcmxheVwiO1xyXG5jbGFzcyBDbGllbnRQYWdlIHtcclxuICBfZGF0YVN0b3JlO1xyXG4gIF9jbGllbnRXZWJzb2NrZXQ7XHJcbiAgX3RlY2hPdmVybGF5O1xyXG4gIGNvbnN0cnVjdG9yKGRhdGFTdG9yZSwgY2xpZW50V2Vic29ja2V0KSB7XHJcbiAgICB0aGlzLl9kYXRhU3RvcmUgPSBkYXRhU3RvcmU7XHJcbiAgICB0aGlzLl9jbGllbnRXZWJzb2NrZXQgPSBjbGllbnRXZWJzb2NrZXQ7XHJcbiAgICB0aGlzLl90ZWNoT3ZlcmxheSA9IG5ldyBDaXZUZWNoT3ZlcmxheSgpO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImFvZS13ZWJzb2NrZXQtZXZlbnRcIiwgdGhpcy5kaWdlc3RXZWJzb2NrZXRNZXNzYWdlLmJpbmQodGhpcykpO1xyXG4gIH1cclxuICBidWlsZEh0bWwoKSB7XHJcbiAgICBjb25zdCBib2R5Q29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHluYW1pYy1jb250ZW50XCIpO1xyXG5cclxuICAgIGNvbnN0IGNsaWVudFBhZ2VET00gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY2xpZW50UGFnZURPTS5jbGFzc0xpc3QuYWRkKFwiY2xpZW50LXBhZ2VcIik7XHJcbiAgICBjbGllbnRQYWdlRE9NLmlkID0gXCJjbGllbnQtcGFnZVwiO1xyXG4gICAgYm9keUNvbnRlbnQuYXBwZW5kQ2hpbGQoY2xpZW50UGFnZURPTSk7XHJcbiAgfVxyXG5cclxuICBkaWdlc3RXZWJzb2NrZXRNZXNzYWdlKGV2ZW50KSB7XHJcbiAgICBpZiAoZXZlbnQpIHtcclxuICAgICAgY29uc3QgcmF3RGF0YSA9IEpTT04ucGFyc2UoZXZlbnQuZGV0YWlsLmRhdGEpO1xyXG4gICAgICBpZiAocmF3RGF0YS50eXBlID09PSBTb2NrZXRFbnVtcy5BR0VPVkVSTEFZUFVTSCkge1xyXG4gICAgICAgIGNvbnN0IGNsaWVudFBhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsaWVudC1wYWdlXCIpO1xyXG4gICAgICAgIHRoaXMuX3RlY2hPdmVybGF5LmNsZWFyQ2l2RGl2cygpO1xyXG4gICAgICAgIGlmIChyYXdEYXRhLmRhdGEuc2hvd092ZXJsYXkpIHtcclxuICAgICAgICAgIGNvbnN0IGFkZGl0aW9uYWxPcHRpb25zID0gKCh7IF9zaG93QmxhY2tzbWl0aFRlY2gsIF9zaG93VW5pdmVyc2l0eVRlY2gsIF9zaG93TW9uYXN0YXJ5VGVjaCB9KSA9PiAoeyBfc2hvd0JsYWNrc21pdGhUZWNoLCBfc2hvd1VuaXZlcnNpdHlUZWNoLCBfc2hvd01vbmFzdGFyeVRlY2ggfSkpKHJhd0RhdGEuZGF0YSk7XHJcbiAgICAgICAgICByYXdEYXRhLmRhdGEucGlja2VkQ2l2cy5mb3JFYWNoKChwaWNrZWRDaXYpID0+IHtcclxuICAgICAgICAgICAgaWYgKHJhd0RhdGEuZGF0YS5fYXV0b0hpZGUpIHtcclxuICAgICAgICAgICAgICBjbGllbnRQYWdlLmFwcGVuZENoaWxkKHRoaXMuX3RlY2hPdmVybGF5LmJ1aWxkRWxlbWVudChwaWNrZWRDaXYudG9Mb3dlckNhc2UoKSwgYWRkaXRpb25hbE9wdGlvbnMsIHBhcnNlSW50KHJhd0RhdGEuZGF0YS5fYXV0b0hpZGVEZWxheSkgKiAxMDAwKSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgY2xpZW50UGFnZS5hcHBlbmRDaGlsZCh0aGlzLl90ZWNoT3ZlcmxheS5idWlsZEVsZW1lbnQocGlja2VkQ2l2LnRvTG93ZXJDYXNlKCksIGFkZGl0aW9uYWxPcHRpb25zLCAtMSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICBpZiAocmF3RGF0YS5kYXRhLnBpY2tlZENpdnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBpZiAocmF3RGF0YS5kYXRhLl91c2VTb3VuZCkge1xyXG4gICAgICAgICAgICAgIGNvbnN0IHNvdW5kRWxlbWVudCA9IHRoaXMuX3RlY2hPdmVybGF5LmJ1aWxkU291bmRzKCk7XHJcbiAgICAgICAgICAgICAgY2xpZW50UGFnZS5hcHBlbmRDaGlsZChzb3VuZEVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc291bmRFbGVtZW50LnBsYXkoKTtcclxuICAgICAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBnZXRSYW5kb21DaXYoKSB7XHJcbiAgICBjb25zdCBjaXZOYW1lcyA9IGdldENpdk5hbWVzKCk7XHJcbiAgICByZXR1cm4gY2l2TmFtZXNbdGhpcy5yYW5kb21JbnRGcm9tSW50ZXJ2YWwoMCwgY2l2TmFtZXMubGVuZ3RoIC0gMSldLnRvTG93ZXJDYXNlKCk7XHJcbiAgfVxyXG4gIHJhbmRvbUludEZyb21JbnRlcnZhbChtaW4sIG1heCkge1xyXG4gICAgLy8gbWluIGFuZCBtYXggaW5jbHVkZWRcclxuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkgKyBtaW4pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHsgQ2xpZW50UGFnZSB9O1xyXG4iLCJjbGFzcyBEZWZhdWx0SFRNTFBhZ2VFbGVtZW50cyB7XHJcbiAgX2RhdGFTdG9yZTtcclxuICBjb25zdHJ1Y3RvcihkYXRhU3RvcmUpIHtcclxuICAgIHRoaXMuX2RhdGFTdG9yZSA9IGRhdGFTdG9yZTtcclxuICB9XHJcbiAgYnVpbGRGb290ZXIoKSB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcclxuICAgIGVsZW1lbnQuaWQgPSBcImZvb3RlclwiO1xyXG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibXktZm9vdGVyXCIpO1xyXG5cclxuICAgIGNvbnN0IHRleHRTcGFuRWxlbWVudDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgIHRleHRTcGFuRWxlbWVudDEuaW5uZXJIVE1MID0gXCJDcmVhdGVkIGJ5IFwiO1xyXG5cclxuICAgIGNvbnN0IHRyZWVUd2l0Y2hBbmNob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgIHRyZWVUd2l0Y2hBbmNob3Iuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcImh0dHBzOi8vd3d3LnR3aXRjaC50di9pdHNhdHJlZWVcIik7XHJcbiAgICB0cmVlVHdpdGNoQW5jaG9yLmlubmVySFRNTCA9IFwiSXRzQVRyZWVlXCI7XHJcblxyXG4gICAgY29uc3QgdGV4dFNwYW5FbGVtZW50MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgdGV4dFNwYW5FbGVtZW50Mi5pbm5lckhUTUwgPSBgICgyMDE5LSR7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfSkgLSBgO1xyXG5cclxuICAgIGNvbnN0IHRyZWVHaXRodWJBbmNob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgIHRyZWVHaXRodWJBbmNob3Iuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcImh0dHBzOi8vZ2l0aHViLmNvbS9UcmVlZS90ZWNoLXdpZGdldC1vdmVybGF5XCIpO1xyXG4gICAgdHJlZUdpdGh1YkFuY2hvci5pbm5lckhUTUwgPSBcIkdpdEh1YlwiO1xyXG4gICAgY29uc3QgY3JlYXRlZEJ5RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjcmVhdGVkQnlFbGVtZW50LmFwcGVuZENoaWxkKHRleHRTcGFuRWxlbWVudDEpO1xyXG4gICAgY3JlYXRlZEJ5RWxlbWVudC5hcHBlbmRDaGlsZCh0cmVlVHdpdGNoQW5jaG9yKTtcclxuICAgIGNyZWF0ZWRCeUVsZW1lbnQuYXBwZW5kQ2hpbGQodGV4dFNwYW5FbGVtZW50Mik7XHJcbiAgICBjcmVhdGVkQnlFbGVtZW50LmFwcGVuZENoaWxkKHRyZWVHaXRodWJBbmNob3IpO1xyXG5cclxuICAgIGNvbnN0IHRleHRTcGFuRWxlbWVudDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgIHRleHRTcGFuRWxlbWVudDMuaW5uZXJIVE1MID0gYEFnZSBvZiBFbXBpcmVzIElJIMKpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gPGI+QW9FIFRlY2gvTWFwIE92ZXJsYXkgZm9yIEFnZSBvZiBFbXBpcmVzIElJPC9iPiB3YXMgY3JlYXRlZCB1bmRlciBNaWNyb3NvZnQncyBcImA7XHJcblxyXG4gICAgY29uc3QgbWljcm9zb2Z0QW5jaG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICBtaWNyb3NvZnRBbmNob3Iuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcImh0dHBzOi8vd3d3Lnhib3guY29tL2VuLXVzL2RldmVsb3BlcnMvcnVsZXNcIik7XHJcbiAgICBtaWNyb3NvZnRBbmNob3IuaW5uZXJIVE1MID0gXCJHYW1lIENvbnRlbnQgVXNhZ2UgUnVsZXNcIjtcclxuXHJcbiAgICBjb25zdCB0ZXh0U3BhbkVsZW1lbnQ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICB0ZXh0U3BhbkVsZW1lbnQ0LmlubmVySFRNTCA9IGBcIiB1c2luZyBhc3NldHMgZnJvbSBBZ2Ugb2YgRW1waXJlcyBJSSwgYW5kIGl0IGlzIG5vdCBlbmRvcnNlZCBieSBvciBhZmZpbGlhdGVkIHdpdGggTWljcm9zb2Z0LmA7XHJcbiAgICBjb25zdCBub25FbmRvcnNlbWVudEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbm9uRW5kb3JzZW1lbnRFbGVtZW50LmFwcGVuZENoaWxkKHRleHRTcGFuRWxlbWVudDMpO1xyXG4gICAgbm9uRW5kb3JzZW1lbnRFbGVtZW50LmFwcGVuZENoaWxkKG1pY3Jvc29mdEFuY2hvcik7XHJcbiAgICBub25FbmRvcnNlbWVudEVsZW1lbnQuYXBwZW5kQ2hpbGQodGV4dFNwYW5FbGVtZW50NCk7XHJcblxyXG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChjcmVhdGVkQnlFbGVtZW50KTtcclxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQobm9uRW5kb3JzZW1lbnRFbGVtZW50KTtcclxuICAgIHJldHVybiBlbGVtZW50O1xyXG4gIH1cclxuICBidWlsZEhlYWRlcigpIHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZWxlbWVudC5pZCA9IFwiaGVhZGVyXCI7XHJcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJteS1oZWFkZXJcIik7XHJcblxyXG4gICAgY29uc3QgYWRtaW5QYWdlUm91dGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgYWRtaW5QYWdlUm91dGUuaW5uZXJIVE1MID0gXCJ8IEFETUlOIHxcIjtcclxuICAgIGFkbWluUGFnZVJvdXRlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcclxuICAgICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQodGhpcy5fZGF0YVN0b3JlLl90ZWNoT3ZlcmxheVN0b3JlLl9sYWJlbF91c2VySWQpO1xyXG4gICAgICAvLyBhbGVydChgQ29waWVkIGlkIHRvIGNsaXBib2FyZDogJHt0aGlzLl9kYXRhU3RvcmUuX3RlY2hPdmVybGF5U3RvcmUuX2xhYmVsX3VzZXJJZH1gKTtcclxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgI2FkbWluLyR7dGhpcy5fZGF0YVN0b3JlLl90ZWNoT3ZlcmxheVN0b3JlLl9sYWJlbF91c2VySWR9YDtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHJvdW5kTWFuYWdlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICByb3VuZE1hbmFnZXIuaW5uZXJIVE1MID0gXCJ8IFJPVU5EUyB8XCI7XHJcbiAgICByb3VuZE1hbmFnZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAvLyAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIjbWF0Y2hzZXRcIjtcclxuICAgICAgYWxlcnQoXCJOb3QgeWV0IGltcGxlbWVudGVkXCIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3Qgc2V0dGluZ3NQYWdlUm91dGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgc2V0dGluZ3NQYWdlUm91dGUuaW5uZXJIVE1MID0gXCJ8IENMSUVOVCB8XCI7XHJcbiAgICBzZXR0aW5nc1BhZ2VSb3V0ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgIC8vICAgd2luZG93Lm9wZW4oYCNjbGllbnQvJHt0aGlzLl9kYXRhU3RvcmUuX3RlY2hPdmVybGF5U3RvcmUuX2xhYmVsX3VzZXJJZH1gLCBcIl9ibGFua1wiKTtcclxuICAgICAgLy8gd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgI2NsaWVudC8ke3RoaXMuX2RhdGFTdG9yZS5fdGVjaE92ZXJsYXlTdG9yZS5fbGFiZWxfdXNlcklkfWA7XHJcbiAgICAgIHdpbmRvdy5vcGVuKGAvY2xpZW50LyR7dGhpcy5fZGF0YVN0b3JlLl90ZWNoT3ZlcmxheVN0b3JlLl9sYWJlbF91c2VySWR9YCwgXCJfYmxhbmtcIik7XHJcbiAgICB9KTtcclxuXHJcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGFkbWluUGFnZVJvdXRlKTtcclxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQocm91bmRNYW5hZ2VyKTtcclxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoc2V0dGluZ3NQYWdlUm91dGUpO1xyXG5cclxuICAgIHJldHVybiBlbGVtZW50O1xyXG4gIH1cclxuICBidWlsZEZhdkljb24oKSB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XHJcbiAgICBlbGVtZW50LnR5cGUgPSBcInNob3J0Y3V0IGljb25cIjtcclxuICAgIGVsZW1lbnQuaHJlZiA9IFwiZmF2aWNvbi5naWZcIjtcclxuICAgIHJldHVybiBlbGVtZW50O1xyXG4gIH1cclxuICBpbml0RGVmYXVsdEVsZW1lbnRzKGhpZGVIZWFkZXIsIGhpZGVGb290ZXIpIHtcclxuICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQodGhpcy5idWlsZEZhdkljb24oKSk7XHJcbiAgICBpZiAoIWhpZGVIZWFkZXIpIHtcclxuICAgICAgZG9jdW1lbnQuYm9keS5iZWZvcmUodGhpcy5idWlsZEhlYWRlcigpKTtcclxuICAgIH1cclxuICAgIGlmICghaGlkZUZvb3Rlcikge1xyXG4gICAgICBkb2N1bWVudC5ib2R5LmFmdGVyKHRoaXMuYnVpbGRGb290ZXIoKSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBEZWZhdWx0SFRNTFBhZ2VFbGVtZW50cyB9O1xyXG4iLCJjbGFzcyBJbnZhbGlkUGFnZSB7XHJcbiAgX2RhdGFTdG9yZTtcclxuICBjb25zdHJ1Y3RvcihkYXRhU3RvcmUpIHtcclxuICAgIHRoaXMuX2RhdGFTdG9yZSA9IGRhdGFTdG9yZTtcclxuICB9XHJcbiAgYnVpbGRIdG1sKCkge1xyXG4gICAgY29uc3QgYm9keUNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImR5bmFtaWMtY29udGVudFwiKTtcclxuXHJcbiAgICBjb25zdCBpbnZhbGlkUGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBpbnZhbGlkUGFnZS5jbGFzc0xpc3QuYWRkKFwiaW52YWxpZC1wYWdlXCIpO1xyXG5cclxuICAgIGludmFsaWRQYWdlLmlubmVyVGV4dCA9IFwiNDA0IE5vdCBFcnJvciBOb3QgRm91bmRcIjtcclxuXHJcbiAgICBib2R5Q29udGVudC5hcHBlbmRDaGlsZChpbnZhbGlkUGFnZSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBJbnZhbGlkUGFnZSB9O1xyXG4iLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xyXG5cclxuaW1wb3J0IHsgTG9jYWxTYXZlZERhdGEgfSBmcm9tIFwiLi9kYXRhc3RvcmVcIjtcclxuaW1wb3J0IHsgTXlSb3V0ZXIgfSBmcm9tIFwiLi9teXJvdXRlclwiO1xyXG5pbXBvcnQgeyBEZWZhdWx0SFRNTFBhZ2VFbGVtZW50cyB9IGZyb20gXCIuL2h0bWwtcGFnZXMvZGVmYXVsdC1lbGVtZW50c1wiO1xyXG5pbXBvcnQgeyBJbnZhbGlkUGFnZSB9IGZyb20gXCIuL2h0bWwtcGFnZXMvaW52YWxpZC1wYWdlXCI7XHJcbmltcG9ydCB7IEFkbWluUGFnZSB9IGZyb20gXCIuL2h0bWwtcGFnZXMvYWRtaW4tcGFnZVwiO1xyXG5pbXBvcnQgeyBDbGllbnRQYWdlIH0gZnJvbSBcIi4vaHRtbC1wYWdlcy9jbGllbnQtcGFnZVwiO1xyXG5pbXBvcnQgeyBNeVdlYlNvY2tldENsaWVudCB9IGZyb20gXCIuL2NsaWVudC13ZWJzb2NrZXQuanNcIjtcclxuXHJcbmNvbnN0IHNhdmVkRGF0YSA9IG5ldyBMb2NhbFNhdmVkRGF0YSgpO1xyXG5zYXZlZERhdGEubG9hZERhdGEoKTtcclxuc2F2ZWREYXRhLnNhdmVEYXRhKCk7XHJcblxyXG5jb25zdCBkeW5hbWljQ29udGVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbmR5bmFtaWNDb250ZW50RGl2LmlkID0gXCJkeW5hbWljLWNvbnRlbnRcIjtcclxuZHluYW1pY0NvbnRlbnREaXYuY2xhc3NMaXN0LmFkZChcImJvZHktY29udGVudFwiKTtcclxuXHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZHluYW1pY0NvbnRlbnREaXYpO1xyXG5cclxuY29uc3QgZGVmYXVsdEVsZW1lbnRzID0gbmV3IERlZmF1bHRIVE1MUGFnZUVsZW1lbnRzKHNhdmVkRGF0YSk7XHJcbmRlZmF1bHRFbGVtZW50cy5pbml0RGVmYXVsdEVsZW1lbnRzKCk7XHJcblxyXG5jb25zdCByb3V0ZXIgPSBuZXcgTXlSb3V0ZXIoKTtcclxuLy8gcm91dGVyLmFkZFJvdXRlKFwiNDA0XCIsIFwiXCIsICgpID0+IHtcclxuLy8gICBuZXcgSW52YWxpZFBhZ2Uoc2F2ZWREYXRhKS5idWlsZEh0bWwoKTtcclxuLy8gfSk7XHJcbnJvdXRlci5hZGRSb3V0ZShcImFkbWluXCIsIGBhZG1pbi8ke3NhdmVkRGF0YS5fdGVjaE92ZXJsYXlTdG9yZS5fbGFiZWxfdXNlcklkfWAsICgpID0+IHtcclxuICBuZXcgQWRtaW5QYWdlKHNhdmVkRGF0YSwgY2xpZW50V2Vic29ja2V0KS5idWlsZEh0bWwoKTtcclxufSk7XHJcbnJvdXRlci5hZGRSb3V0ZShcIm1hdGNoc2V0XCIsIFwibWF0Y2hzZXRcIiwgKCkgPT4ge1xyXG4gIG5ldyBJbnZhbGlkUGFnZShzYXZlZERhdGEpLmJ1aWxkSHRtbCgpO1xyXG59KTtcclxuLy8gcm91dGVyLmFkZFJvdXRlKFwiY2xpZW50XCIsIGBjbGllbnQvJHtzYXZlZERhdGEuX3RlY2hPdmVybGF5U3RvcmUuX2xhYmVsX3VzZXJJZH1gLCAoKSA9PiB7XHJcbi8vICAgbmV3IENsaWVudFBhZ2Uoc2F2ZWREYXRhLCBjbGllbnRXZWJzb2NrZXQpLmJ1aWxkSHRtbCgpO1xyXG4vLyB9KTtcclxuXHJcbi8vU3RhcnQgcm91dGVyIHdoZW4gY29udGVudCBpcyBsb2FkZWRcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xyXG4gIHJvdXRlci5pbml0KCk7XHJcbn0pO1xyXG5cclxuY29uc3QgaXNMb2NhbCA9IGZhbHNlO1xyXG5jb25zdCBjbGllbnRXZWJzb2NrZXQgPSBuZXcgTXlXZWJTb2NrZXRDbGllbnQoKTtcclxuY2xpZW50V2Vic29ja2V0LnN0YXJ0Q2xpZW50KHNhdmVkRGF0YS5fdGVjaE92ZXJsYXlTdG9yZS5fbGFiZWxfdXNlcklkLCBpc0xvY2FsKTtcclxuIiwiY2xhc3MgTXlSb3V0ZXIge1xyXG4gIF9yb3V0ZXM7XHJcbiAgX2Rlc3Ryb3lUYXNrcztcclxuICBfd2luZG93TGlzdGVuZXI7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLl9yb3V0ZXMgPSBbXTtcclxuICAgIHRoaXMuX2Rlc3Ryb3lUYXNrcyA9IFtdO1xyXG4gICAgdGhpcy5fd2luZG93TGlzdGVuZXIgPSBudWxsO1xyXG4gIH1cclxuXHJcbiAgaW5pdCgpIHtcclxuICAgIC8vIHJlbW92ZSBwcmV2aW91cyBldmVudCBsaXN0ZW5lciBpZiBpdCBleGlzdHNcclxuICAgIGlmICh0aGlzLl93aW5kb3dMaXN0ZW5lciAhPT0gbnVsbCkge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvcHN0YXRlXCIsIHRoaXMuX3dpbmRvd0xpc3RlbmVyKTtcclxuICAgICAgdGhpcy5fd2luZG93TGlzdGVuZXIgPSBudWxsO1xyXG4gICAgfVxyXG4gICAgLy8gc2V0IHRoZSBuZXcgbGlzdGVuZXIgZm9yIHBvcCBzdGF0ZVxyXG4gICAgdGhpcy5fd2luZG93TGlzdGVuZXIgPSB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgXCJwb3BzdGF0ZVwiLFxyXG4gICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gY2FsbGJhY2sgd2UgcHJvdmlkZSBiZWluZyBzZXQgdXBcclxuICAgICAgICB0aGlzLnBpY2tSb3V0ZS5jYWxsKHRoaXMpO1xyXG4gICAgICB9LmJpbmQodGhpcylcclxuICAgICk7XHJcbiAgICAvLyBjYWxsIHRoZSByb3V0aW5nIHdoZW4gdGhlIHRocmVhZCBpcyBhdmFpbGFibGVcclxuICAgIHNldFRpbWVvdXQoXHJcbiAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnBpY2tSb3V0ZS5jYWxsKHRoaXMpO1xyXG4gICAgICB9LmJpbmQodGhpcylcclxuICAgICk7XHJcbiAgfVxyXG4gIGFkZFJvdXRlKG5hbWUsIHVybCwgY2IpIHtcclxuICAgIGNvbnN0IGxvY2FsUm91dGUgPSB0aGlzLl9yb3V0ZXMuZmluZCgocm91dGUpID0+IHtcclxuICAgICAgcmV0dXJuIHJvdXRlLm5hbWUgPT09IG5hbWU7XHJcbiAgICB9KTtcclxuICAgIHVybCA9IHVybC5yZXBsYWNlKC9cXC8vZ2ksIFwiL1wiKTtcclxuICAgIGlmIChsb2NhbFJvdXRlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5fcm91dGVzLnB1c2goe1xyXG4gICAgICAgIGNhbGxiYWNrOiBjYixcclxuICAgICAgICBuYW1lOiBuYW1lLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSxcclxuICAgICAgICB1cmw6IHVybCxcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBsb2NhbFJvdXRlLmNhbGxiYWNrID0gY2I7XHJcbiAgICAgIGxvY2FsUm91dGUudXJsID0gdXJsO1xyXG4gICAgfVxyXG4gIH1cclxuICBhZGRSb3V0ZXMocm91dGVzKSB7XHJcbiAgICBpZiAocm91dGVzID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgcm91dGVzID0gW107XHJcbiAgICB9XHJcbiAgICByb3V0ZXMuZm9yRWFjaCgocm91dGUpID0+IHtcclxuICAgICAgdGhpcy5fcm91dGVzLmFkZFJvdXRlKHJvdXRlLm5hbWUsIHJvdXRlLnVybCwgcm91dGUuY2FsbGJhY2spO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHJlbW92ZVJvdXRlKG5hbWUpIHtcclxuICAgIG5hbWUgPSBuYW1lLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKTtcclxuICAgIHRoaXMuX3JvdXRlcyA9IHRoaXMuX3JvdXRlcy5maWx0ZXIoKHJvdXRlKSA9PiB7XHJcbiAgICAgIHJldHVybiByb3V0ZS5uYW1lICE9IG5hbWU7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgcGlja1JvdXRlKCkge1xyXG4gICAgLy8gZGVidWcgdGhpc1xyXG4gICAgY29uc3QgaGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnN1YnN0cmluZygxKS5yZXBsYWNlKC9cXC8vZ2ksIFwiL1wiKTtcclxuICAgIGxldCByb3V0ZSA9IHRoaXMuX3JvdXRlcy5maW5kKChyb3V0ZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcm91dGUudXJsID09PSBoYXNoO1xyXG4gICAgfSk7XHJcbiAgICAvLyBhbHdheXMgZGVmYXVsdCB0byAwXHJcbiAgICBpZiAocm91dGUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBpZiAodGhpcy5fcm91dGVzWzBdID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiZW1wdHkgcm91dGVzIGxpc3QuIGFkZCBhIHJvdXRlXCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJvdXRlID0gdGhpcy5fcm91dGVzWzBdO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLl9kZXN0cm95VGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xyXG4gICAgICB0YXNrKCk7XHJcbiAgICB9KTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHluYW1pYy1jb250ZW50XCIpLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICB0aGlzLl9kZXN0cm95VGFza3MgPSBbXTtcclxuICAgIGlmIChyb3V0ZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHJvdXRlLmNhbGxiYWNrLmNhbGwod2luZG93KTtcclxuICAgIH1cclxuICB9XHJcbiAgb25TY29wZURlc3Ryb3koY2IpIHtcclxuICAgIHRoaXMuX2Rlc3Ryb3lUYXNrcy5wdXNoKGNiKTtcclxuICB9XHJcbn1cclxuZXhwb3J0IHsgTXlSb3V0ZXIgfTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9