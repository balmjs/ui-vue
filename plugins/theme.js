!function(t,n){"object"===typeof exports&&"object"===typeof module?module.exports=n():"function"===typeof define&&define.amd?define([],n):"object"===typeof exports?exports.BalmUI_theme=n():t.BalmUI_theme=n()}(window,(function(){return function(t){var n={};function r(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=n,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)r.d(e,o,function(n){return t[n]}.bind(null,o));return e},r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="",r(r.s="Tl1j")}({"+W7g":function(t,n,r){var e=r("39uu"),o=r("/EgQ"),u=r("A2Ma")("match");t.exports=function(t){var n;return e(t)&&(void 0!==(n=t[u])?!!n:"RegExp"==o(t))}},"/EgQ":function(t,n){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},"/JNE":function(t,n,r){"use strict";var e=r("pevS"),o=r("Bvq2"),u=r("YiBS"),c=r("39uu"),i=r("T/97"),a=r("ZyXh"),f=r("bBVJ"),s=r("Q0Rw"),p=r("nJYk"),l=r("A2Ma"),v=r("SqY4"),d=l("isConcatSpreadable"),y=v>=51||!o((function(){var t=[];return t[d]=!1,t.concat()[0]!==t})),h=p("concat"),x=function(t){if(!c(t))return!1;var n=t[d];return void 0!==n?!!n:u(t)};e({target:"Array",proto:!0,forced:!y||!h},{concat:function(t){var n,r,e,o,u,c=i(this),p=s(c,0),l=0;for(n=-1,e=arguments.length;n<e;n++)if(u=-1===n?c:arguments[n],x(u)){if(l+(o=a(u.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(r=0;r<o;r++,l++)r in u&&f(p,l,u[r])}else{if(l>=9007199254740991)throw TypeError("Maximum allowed index exceeded");f(p,l++,u)}return p.length=l,p}})},"1lkh":function(t,n,r){var e=r("cEKj"),o=r("doUz");(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.6.4",mode:e?"pure":"global",copyright:"\xa9 2020 Denis Pushkarev (zloirock.ru)"})},"2kMU":function(t,n,r){r("yB81");var e=r("oWnS");t.exports=e("String").includes},"39uu":function(t,n){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}},A2Ma:function(t,n,r){var e=r("OsYe"),o=r("1lkh"),u=r("eOcF"),c=r("PoCt"),i=r("HmPo"),a=r("YtAO"),f=o("wks"),s=e.Symbol,p=a?s:s&&s.withoutSetter||c;t.exports=function(t){return u(f,t)||(i&&u(s,t)?f[t]=s[t]:f[t]=p("Symbol."+t)),f[t]}},AFTl:function(t,n,r){var e=r("pevS"),o=r("mIMY"),u=r("Bvq2"),c=o("JSON","stringify"),i=/[\uD800-\uDFFF]/g,a=/^[\uD800-\uDBFF]$/,f=/^[\uDC00-\uDFFF]$/,s=function(t,n,r){var e=r.charAt(n-1),o=r.charAt(n+1);return a.test(t)&&!f.test(o)||f.test(t)&&!a.test(e)?"\\u"+t.charCodeAt(0).toString(16):t},p=u((function(){return'"\\udf06\\ud834"'!==c("\udf06\ud834")||'"\\udead"'!==c("\udead")}));c&&e({target:"JSON",stat:!0,forced:p},{stringify:function(t,n,r){var e=c.apply(null,arguments);return"string"==typeof e?e.replace(i,s):e}})},AnMC:function(t,n,r){var e=r("wbIY"),o=r("QYBB"),u=r("LGyv");t.exports=e?function(t,n,r){return o.f(t,n,u(1,r))}:function(t,n,r){return t[n]=r,t}},Bvq2:function(t,n){t.exports=function(t){try{return!!t()}catch(n){return!0}}},DSbf:function(t,n,r){var e=r("qQKe");t.exports=e},FWHo:function(t,n){var r=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:r)(t)}},GHVm:function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on "+t);return t}},Gw1d:function(t,n,r){var e=r("lBI7"),o=r("2kMU"),u=Array.prototype,c=String.prototype;t.exports=function(t){var n=t.includes;return t===u||t instanceof Array&&n===u.includes?e:"string"===typeof t||t===c||t instanceof String&&n===c.includes?o:n}},HmPo:function(t,n,r){var e=r("Bvq2");t.exports=!!Object.getOwnPropertySymbols&&!e((function(){return!String(Symbol())}))},Jqo0:function(t,n,r){r("/JNE");var e=r("oWnS");t.exports=e("Array").concat},LGyv:function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},MCtm:function(t,n,r){var e=r("wbIY"),o=r("Bvq2"),u=r("eOcF"),c=Object.defineProperty,i={},a=function(t){throw t};t.exports=function(t,n){if(u(i,t))return i[t];n||(n={});var r=[][t],f=!!u(n,"ACCESSORS")&&n.ACCESSORS,s=u(n,0)?n[0]:a,p=u(n,1)?n[1]:void 0;return i[t]=!!r&&!o((function(){if(f&&!e)return!0;var t={length:-1};f?c(t,1,{enumerable:!0,get:a}):t[1]=1,r.call(t,s,p)}))}},OsYe:function(t,n,r){(function(n){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n&&n)||Function("return this")()}).call(this,r("yLpj"))},PoCt:function(t,n){var r=0,e=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++r+e).toString(36)}},Q0Rw:function(t,n,r){var e=r("39uu"),o=r("YiBS"),u=r("A2Ma")("species");t.exports=function(t,n){var r;return o(t)&&("function"!=typeof(r=t.constructor)||r!==Array&&!o(r.prototype)?e(r)&&null===(r=r[u])&&(r=void 0):r=void 0),new(void 0===r?Array:r)(0===n?0:n)}},QYBB:function(t,n,r){var e=r("wbIY"),o=r("d7IX"),u=r("b42z"),c=r("cWgI"),i=Object.defineProperty;n.f=e?i:function(t,n,r){if(u(t),n=c(n,!0),u(r),o)try{return i(t,n,r)}catch(e){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(t[n]=r.value),t}},RLqH:function(t,n,r){var e=r("wbIY"),o=r("cEPT"),u=r("LGyv"),c=r("pCEo"),i=r("cWgI"),a=r("eOcF"),f=r("d7IX"),s=Object.getOwnPropertyDescriptor;n.f=e?s:function(t,n){if(t=c(t),n=i(n,!0),f)try{return s(t,n)}catch(r){}if(a(t,n))return u(!o.f.call(t,n),t[n])}},RQhY:function(t,n,r){var e=r("FWHo"),o=Math.max,u=Math.min;t.exports=function(t,n){var r=e(t);return r<0?o(r+n,0):u(r,n)}},SqY4:function(t,n,r){var e,o,u=r("OsYe"),c=r("lxfd"),i=u.process,a=i&&i.versions,f=a&&a.v8;f?o=(e=f.split("."))[0]+e[1]:c&&(!(e=c.match(/Edge\/(\d+)/))||e[1]>=74)&&(e=c.match(/Chrome\/(\d+)/))&&(o=e[1]),t.exports=o&&+o},"T/97":function(t,n,r){var e=r("GHVm");t.exports=function(t){return Object(e(t))}},TBlU:function(t,n,r){var e=r("Jqo0"),o=Array.prototype;t.exports=function(t){var n=t.concat;return t===o||t instanceof Array&&n===o.concat?e:n}},Tl1j:function(t,n,r){"use strict";r.r(n);var e=r("o+MX"),o=r.n(e),u=r("mnMc"),c=r.n(u),i=r("WxoT"),a=r.n(i),f=r("kUbF"),s=["primary","secondary","background","surface","on-primary","on-secondary","on-surface","primary-bg","secondary-bg"],p=["primary","secondary","hint","disabled","icon"],l=["background","light","dark"],v={THEME_STYLE:"Please choose a theme style: "+a()(s),TEXT_STYLE:"Please choose a text style: "+a()(p),THEME_TONE:"Please choose a theme tone: "+a()(l)},d=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n="";return c()(s).call(s,t)?n="mdc-theme--".concat(t):console.warn(v.THEME_STYLE),n},y=function(){var t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"background",e="";c()(p).call(p,n)?c()(l).call(l,r)?e=o()(t="mdc-theme--text-".concat(n,"-on-")).call(t,r):console.warn(v.THEME_TONE):console.warn(v.TEXT_STYLE);return e},h=function(t,n){c()(s).call(s,t)?document.documentElement.style.setProperty("--mdc-theme-".concat(t),n):console.warn(v.THEME_STYLE)},x=function(t,n,r){var e;c()(p).call(p,t)?c()(l).call(l,n)?document.documentElement.style.setProperty(o()(e="--mdc-theme-text-".concat(t,"-on-")).call(e,n),r):console.warn(v.THEME_TONE):console.warn(v.TEXT_STYLE)},m={install:function(t){t.prototype.$themeColor=d,t.prototype.$textColor=y,t.prototype.$setTheme=h,t.prototype.$setTextTheme=x}};Object(f.a)(m),n.default=m},WxoT:function(t,n,r){t.exports=r("DSbf")},Y4Ys:function(t,n,r){var e=r("pCEo"),o=r("ZyXh"),u=r("RQhY"),c=function(t){return function(n,r,c){var i,a=e(n),f=o(a.length),s=u(c,f);if(t&&r!=r){for(;f>s;)if((i=a[s++])!=i)return!0}else for(;f>s;s++)if((t||s in a)&&a[s]===r)return t||s||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},Y4yM:function(t,n,r){var e=r("Bvq2"),o=r("/EgQ"),u="".split;t.exports=e((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?u.call(t,""):Object(t)}:Object},YiBS:function(t,n,r){var e=r("/EgQ");t.exports=Array.isArray||function(t){return"Array"==e(t)}},YtAO:function(t,n,r){var e=r("HmPo");t.exports=e&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},ZBQp:function(t,n,r){var e=r("zJQS");t.exports=function(t,n,r){if(e(t),void 0===n)return t;switch(r){case 0:return function(){return t.call(n)};case 1:return function(r){return t.call(n,r)};case 2:return function(r,e){return t.call(n,r,e)};case 3:return function(r,e,o){return t.call(n,r,e,o)}}return function(){return t.apply(n,arguments)}}},ZyXh:function(t,n,r){var e=r("FWHo"),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}},aFDJ:function(t,n,r){"use strict";var e=r("pevS"),o=r("Y4Ys").includes,u=r("xE4W");e({target:"Array",proto:!0,forced:!r("MCtm")("indexOf",{ACCESSORS:!0,1:0})},{includes:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),u("includes")},b42z:function(t,n,r){var e=r("39uu");t.exports=function(t){if(!e(t))throw TypeError(String(t)+" is not an object");return t}},bBVJ:function(t,n,r){"use strict";var e=r("cWgI"),o=r("QYBB"),u=r("LGyv");t.exports=function(t,n,r){var c=e(n);c in t?o.f(t,c,u(0,r)):t[c]=r}},bF2R:function(t,n,r){var e=r("TBlU");t.exports=e},cEKj:function(t,n){t.exports=!0},cEPT:function(t,n,r){"use strict";var e={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,u=o&&!e.call({1:2},1);n.f=u?function(t){var n=o(this,t);return!!n&&n.enumerable}:e},cWgI:function(t,n,r){var e=r("39uu");t.exports=function(t,n){if(!e(t))return t;var r,o;if(n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!e(o=r.call(t)))return o;if(!n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},d7IX:function(t,n,r){var e=r("wbIY"),o=r("Bvq2"),u=r("ejc7");t.exports=!e&&!o((function(){return 7!=Object.defineProperty(u("div"),"a",{get:function(){return 7}}).a}))},dktu:function(t,n){t.exports={}},doUz:function(t,n,r){var e=r("OsYe"),o=r("j60x"),u=e["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=u},eOcF:function(t,n){var r={}.hasOwnProperty;t.exports=function(t,n){return r.call(t,n)}},ejc7:function(t,n,r){var e=r("OsYe"),o=r("39uu"),u=e.document,c=o(u)&&o(u.createElement);t.exports=function(t){return c?u.createElement(t):{}}},j60x:function(t,n,r){var e=r("OsYe"),o=r("AnMC");t.exports=function(t,n){try{o(e,t,n)}catch(r){e[t]=n}return n}},jFgU:function(t,n,r){var e=r("A2Ma")("match");t.exports=function(t){var n=/./;try{"/./"[t](n)}catch(r){try{return n[e]=!1,"/./"[t](n)}catch(o){}}return!1}},jgZk:function(t,n,r){var e=r("Gw1d");t.exports=e},kUbF:function(t,n,r){"use strict";(function(t){n.a=function(n){var r=null;"undefined"!==typeof window?r=window.Vue:"undefined"!==typeof t&&(r=t.Vue),r&&r.use(n)}}).call(this,r("yLpj"))},lBI7:function(t,n,r){r("aFDJ");var e=r("oWnS");t.exports=e("Array").includes},lxfd:function(t,n,r){var e=r("mIMY");t.exports=e("navigator","userAgent")||""},mIMY:function(t,n,r){var e=r("dktu"),o=r("OsYe"),u=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?u(e[t])||u(o[t]):e[t]&&e[t][n]||o[t]&&o[t][n]}},mnMc:function(t,n,r){t.exports=r("jgZk")},nJYk:function(t,n,r){var e=r("Bvq2"),o=r("A2Ma"),u=r("SqY4"),c=o("species");t.exports=function(t){return u>=51||!e((function(){var n=[];return(n.constructor={})[c]=function(){return{foo:1}},1!==n[t](Boolean).foo}))}},nlFj:function(t,n,r){var e=r("+W7g");t.exports=function(t){if(e(t))throw TypeError("The method doesn't accept regular expressions");return t}},"o+MX":function(t,n,r){t.exports=r("bF2R")},oOVA:function(t,n,r){var e=r("Bvq2"),o=/#|\.prototype\./,u=function(t,n){var r=i[c(t)];return r==f||r!=a&&("function"==typeof n?e(n):!!n)},c=u.normalize=function(t){return String(t).replace(o,".").toLowerCase()},i=u.data={},a=u.NATIVE="N",f=u.POLYFILL="P";t.exports=u},oWnS:function(t,n,r){var e=r("dktu");t.exports=function(t){return e[t+"Prototype"]}},pCEo:function(t,n,r){var e=r("Y4yM"),o=r("GHVm");t.exports=function(t){return e(o(t))}},pevS:function(t,n,r){"use strict";var e=r("OsYe"),o=r("RLqH").f,u=r("oOVA"),c=r("dktu"),i=r("ZBQp"),a=r("AnMC"),f=r("eOcF"),s=function(t){var n=function(n,r,e){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,r)}return new t(n,r,e)}return t.apply(this,arguments)};return n.prototype=t.prototype,n};t.exports=function(t,n){var r,p,l,v,d,y,h,x,m=t.target,g=t.global,b=t.stat,S=t.proto,w=g?e:b?e[m]:(e[m]||{}).prototype,E=g?c:c[m]||(c[m]={}),O=E.prototype;for(l in n)r=!u(g?l:m+(b?".":"#")+l,t.forced)&&w&&f(w,l),d=E[l],r&&(y=t.noTargetGet?(x=o(w,l))&&x.value:w[l]),v=r&&y?y:n[l],r&&typeof d===typeof v||(h=t.bind&&r?i(v,e):t.wrap&&r?s(v):S&&"function"==typeof v?i(Function.call,v):v,(t.sham||v&&v.sham||d&&d.sham)&&a(h,"sham",!0),E[l]=h,S&&(f(c,p=m+"Prototype")||a(c,p,{}),c[p][l]=v,t.real&&O&&!O[l]&&a(O,l,v)))}},qQKe:function(t,n,r){r("AFTl");var e=r("dktu");e.JSON||(e.JSON={stringify:JSON.stringify}),t.exports=function(t,n,r){return e.JSON.stringify.apply(null,arguments)}},wbIY:function(t,n,r){var e=r("Bvq2");t.exports=!e((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},xE4W:function(t,n){t.exports=function(){}},yB81:function(t,n,r){"use strict";var e=r("pevS"),o=r("nlFj"),u=r("GHVm");e({target:"String",proto:!0,forced:!r("jFgU")("includes")},{includes:function(t){return!!~String(u(this)).indexOf(o(t),arguments.length>1?arguments[1]:void 0)}})},yLpj:function(t,n){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(e){"object"===typeof window&&(r=window)}t.exports=r},zJQS:function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}}})}));