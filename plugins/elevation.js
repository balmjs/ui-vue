!function(e,t){"object"===typeof exports&&"object"===typeof module?module.exports=t():"function"===typeof define&&define.amd?define([],t):"object"===typeof exports?exports.BalmUI=t():e.BalmUI=t()}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s="DAm3")}({DAm3:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e,o=t?["mdc-elevation-transition"]:[];return n>=0&&n<=24?o.push("mdc-elevation--z"+n):console.warn('The elevation values are mapped out in a "z-space" and range from 0 to 24.'),o.join(" ")},r={install:function(e){e.prototype.$shadow=o}};"undefined"!==typeof window&&window.Vue&&window.Vue.use(r),t.default=r}})});