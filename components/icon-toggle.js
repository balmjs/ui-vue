!function(t,e){"object"===typeof exports&&"object"===typeof module?module.exports=e():"function"===typeof define&&define.amd?define([],e):"object"===typeof exports?exports.BalmUI=e():t.BalmUI=e()}(window,function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var a=e[i]={i:i,l:!1,exports:{}};return t[i].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(i,a,function(e){return t[e]}.bind(null,a));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s="9O0+")}({"7W2i":function(t,e,n){var i=n("SksO");t.exports=function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&i(t,e)}},"9O0+":function(t,e,n){"use strict";n.r(e);var i=n("iri3"),a=function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",{class:t.className,attrs:{role:"button",tabindex:t.currentTabindex,"aria-pressed":t.model,"aria-disabled":t.disabled,"data-icon-inner-selector":t.iconInnerSelector,"data-toggle-on":t.toggleOnState,"data-toggle-off":t.toggleOffState}},[t._t("default")],2)};a._withStripped=!0;var r=n("lwsE"),o=n.n(r),s=n("a1gu"),u=n.n(s),c=n("Nsbk"),d=n.n(c),l=n("iWIM"),f=n.n(l),p=n("W8MJ"),_=n.n(p),h=n("7W2i"),v=n.n(h),g=n("SBAC"),y=n("oLRI"),m={ROOT:"mdc-icon-toggle",DISABLED:"mdc-icon-toggle--disabled"},b={DATA_TOGGLE_ON:"data-toggle-on",DATA_TOGGLE_OFF:"data-toggle-off",ARIA_PRESSED:"aria-pressed",ARIA_DISABLED:"aria-disabled",ARIA_LABEL:"aria-label",CHANGE_EVENT:"MDCIconToggle:change"},A=function(t){function e(t){var n;return o()(this,e),(n=u()(this,d()(e).call(this,Object.assign(e.defaultAdapter,t)))).on_=!1,n.disabled_=!1,n.savedTabIndex_=-1,n.toggleOnData_=null,n.toggleOffData_=null,n.clickHandler_=function(){return n.toggleFromEvt_()},n.isHandlingKeydown_=!1,n.keydownHandler_=function(t){if(S(t))return n.isHandlingKeydown_=!0,t.preventDefault()},n.keyupHandler_=function(t){S(t)&&(n.isHandlingKeydown_=!1,n.toggleFromEvt_())},n}return v()(e,t),_()(e,null,[{key:"cssClasses",get:function(){return m}},{key:"strings",get:function(){return b}},{key:"defaultAdapter",get:function(){return{addClass:function(){},removeClass:function(){},registerInteractionHandler:function(){},deregisterInteractionHandler:function(){},setText:function(){},getTabIndex:function(){return 0},setTabIndex:function(){},getAttr:function(){return""},setAttr:function(){},rmAttr:function(){},notifyChange:function(){}}}}]),_()(e,[{key:"init",value:function(){this.refreshToggleData(),this.savedTabIndex_=this.adapter_.getTabIndex(),this.adapter_.registerInteractionHandler("click",this.clickHandler_),this.adapter_.registerInteractionHandler("keydown",this.keydownHandler_),this.adapter_.registerInteractionHandler("keyup",this.keyupHandler_)}},{key:"refreshToggleData",value:function(){var t=e.strings,n=t.DATA_TOGGLE_ON,i=t.DATA_TOGGLE_OFF;this.toggleOnData_=this.parseJsonDataAttr_(n),this.toggleOffData_=this.parseJsonDataAttr_(i)}},{key:"destroy",value:function(){this.adapter_.deregisterInteractionHandler("click",this.clickHandler_),this.adapter_.deregisterInteractionHandler("keydown",this.keydownHandler_),this.adapter_.deregisterInteractionHandler("keyup",this.keyupHandler_)}},{key:"toggleFromEvt_",value:function(){this.toggle();var t=this.on_;this.adapter_.notifyChange({isOn:t})}},{key:"isOn",value:function(){return this.on_}},{key:"toggle",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:!this.on_;this.on_=t;var n=e.strings,i=n.ARIA_LABEL,a=n.ARIA_PRESSED;this.on_?this.adapter_.setAttr(a,"true"):this.adapter_.setAttr(a,"false");var r=(this.on_?this.toggleOffData_:this.toggleOnData_).cssClass;r&&this.adapter_.removeClass(r);var o=this.on_?this.toggleOnData_:this.toggleOffData_,s=o.content,u=o.label,c=o.cssClass;c&&this.adapter_.addClass(c),s&&this.adapter_.setText(s),u&&this.adapter_.setAttr(i,u)}},{key:"parseJsonDataAttr_",value:function(t){var e=this.adapter_.getAttr(t);return e?JSON.parse(e):{}}},{key:"isDisabled",value:function(){return this.disabled_}},{key:"setDisabled",value:function(t){this.disabled_=t;var n=e.cssClasses.DISABLED,i=e.strings.ARIA_DISABLED;this.disabled_?(this.savedTabIndex_=this.adapter_.getTabIndex(),this.adapter_.setTabIndex(-1),this.adapter_.setAttr(i,"true"),this.adapter_.addClass(n)):(this.adapter_.setTabIndex(this.savedTabIndex_),this.adapter_.rmAttr(i),this.adapter_.removeClass(n))}},{key:"isKeyboardActivated",value:function(){return this.isHandlingKeydown_}}]),e}(y.a);function S(t){return"Space"===t.key||32===t.keyCode}var T=function t(){o()(this,t)};T.prototype.label,T.prototype.content,T.prototype.cssClass;var E=A,C=n("zsl9"),O=function(t){function e(){var t,n;o()(this,e);for(var i=arguments.length,a=new Array(i),r=0;r<i;r++)a[r]=arguments[r];return(n=u()(this,(t=d()(e)).call.apply(t,[this].concat(a)))).ripple_=n.initRipple_(),n}return v()(e,t),_()(e,null,[{key:"attachTo",value:function(t){return new e(t)}}]),_()(e,[{key:"initRipple_",value:function(){var t=this,e=Object.assign(C.a.createAdapter(this),{isUnbounded:function(){return!0},isSurfaceActive:function(){return t.foundation_.isKeyboardActivated()}}),n=new C.b(e);return new C.a(this.root_,n)}},{key:"destroy",value:function(){this.ripple_.destroy(),f()(d()(e.prototype),"destroy",this).call(this)}},{key:"getDefaultFoundation",value:function(){var t=this;return new E({addClass:function(e){return t.iconEl_.classList.add(e)},removeClass:function(e){return t.iconEl_.classList.remove(e)},registerInteractionHandler:function(e,n){return t.root_.addEventListener(e,n)},deregisterInteractionHandler:function(e,n){return t.root_.removeEventListener(e,n)},setText:function(e){return t.iconEl_.textContent=e},getTabIndex:function(){return t.root_.tabIndex},setTabIndex:function(e){return t.root_.tabIndex=e},getAttr:function(e,n){return t.root_.getAttribute(e,n)},setAttr:function(e,n){return t.root_.setAttribute(e,n)},rmAttr:function(e){return t.root_.removeAttribute(e)},notifyChange:function(e){return t.emit(E.strings.CHANGE_EVENT,e)}})}},{key:"initialSyncWithDOM",value:function(){this.on="true"===this.root_.getAttribute(E.strings.ARIA_PRESSED),this.disabled="true"===this.root_.getAttribute(E.strings.ARIA_DISABLED)}},{key:"refreshToggleData",value:function(){this.foundation_.refreshToggleData()}},{key:"iconEl_",get:function(){var t=this.root_.dataset.iconInnerSelector;return t?this.root_.querySelector(t):this.root_}},{key:"ripple",get:function(){return this.ripple_}},{key:"on",get:function(){return this.foundation_.isOn()},set:function(t){this.foundation_.toggle(t)}},{key:"disabled",get:function(){return this.foundation_.isDisabled()},set:function(t){this.foundation_.setDisabled(t)}}]),e}(g.a),k=n("QnW2"),I={DATA_STATES:["label","content","cssClass"],STATUS:{ON:"on",DISABLED:"disabled"},EVENT:{CHANGE:"change"}},D={name:"ui-icon-toggle",model:{prop:"model",event:I.EVENT.CHANGE},props:{model:{type:Boolean,default:!1},on:Object,off:Object,tabindex:{type:[Number,String],default:0},disabled:{type:Boolean,default:!1},icon:String,cardIcon:{type:Boolean,default:!1}},data:function(){return{$iconToggle:null,canRendering:!1}},computed:{className:function(){return{"material-icons":!this.icon,"mdc-icon-toggle":!0,"mdc-icon-toggle--disabled":this.disabled,"mdc-card__action":this.cardIcon,"mdc-card__action--icon":this.cardIcon}},currentTabindex:function(){return this.disabled?-1:this.tabindex},iconInnerSelector:function(){return!!this.icon&&".".concat(this.icon)},toggleOnState:function(){return this.getToggleState(this.on)},toggleOffState:function(){return this.getToggleState(this.off)}},watch:{model:function(t){this.updateStatus(I.STATUS.ON,t)},disabled:function(t){this.updateStatus(I.STATUS.DISABLED,t)}},created:function(){this.isValidToggleState(this.on)&&this.isValidToggleState(this.off)?this.canRendering=!0:console.warn('You must be configuring the icon toggle states by `on` and `off` props: `{ label: "Some label", content: "Some content", cssClass: "Some css class" }`')},mounted:function(){var t=this;this.canRendering&&(this.$iconToggle=new O(this.$el),this.$iconToggle.listen("MDCIconToggle:".concat(I.EVENT.CHANGE),function(e){var n=e.detail;t.$emit(I.EVENT.CHANGE,n.isOn)}),this.updateStatus(I.STATUS.ON,this.model),this.updateStatus(I.STATUS.DISABLED,this.disabled))},methods:{isValidToggleState:function(t){return!!t&&Object.keys(t).some(function(t){return I.DATA_STATES.includes(t)})},getToggleState:function(t){return"object"===Object(k.a)(t)?JSON.stringify(t):{}},updateStatus:function(t,e){this.$iconToggle&&(this.$iconToggle[t]=e)}}},w=n("KHd+"),R=Object(w.a)(D,a,[],!1,null,null,null);R.options.__file="src/scripts/components/button/icon-toggle.vue";var H=R.exports;e.default=Object(i.a)(H)},Aqzh:function(t,e,n){t.exports=function(){"use strict";var t=function(t){return function(t){return!!t&&"object"===typeof t}(t)&&!function(t){var n=Object.prototype.toString.call(t);return"[object RegExp]"===n||"[object Date]"===n||function(t){return t.$$typeof===e}(t)}(t)},e="function"===typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function n(t,e){return!1!==e.clone&&e.isMergeableObject(t)?a((n=t,Array.isArray(n)?[]:{}),t,e):t;var n}function i(t,e,i){return t.concat(e).map(function(t){return n(t,i)})}function a(e,r,o){(o=o||{}).arrayMerge=o.arrayMerge||i,o.isMergeableObject=o.isMergeableObject||t;var s=Array.isArray(r),u=Array.isArray(e),c=s===u;return c?s?o.arrayMerge(e,r,o):function(t,e,i){var r={};return i.isMergeableObject(t)&&Object.keys(t).forEach(function(e){r[e]=n(t[e],i)}),Object.keys(e).forEach(function(o){i.isMergeableObject(e[o])&&t[o]?r[o]=a(t[o],e[o],i):r[o]=n(e[o],i)}),r}(e,r,o):n(r,o)}return a.all=function(t,e){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(t,n){return a(t,n,e)},{})},a}()},"KHd+":function(t,e,n){"use strict";function i(t,e,n,i,a,r,o,s){var u,c="function"===typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),i&&(c.functional=!0),r&&(c._scopeId="data-v-"+r),o?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},c._ssrRegister=u):a&&(u=s?function(){a.call(this,this.$root.$options.shadowRoot)}:a),u)if(c.functional){c._injectStyles=u;var d=c.render;c.render=function(t,e){return u.call(e),d(t,e)}}else{var l=c.beforeCreate;c.beforeCreate=l?[].concat(l,u):[u]}return{exports:t,options:c}}n.d(e,"a",function(){return i})},MuGO:function(t,e,n){"use strict";var i,a;function r(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=i;if("boolean"===typeof i&&!e)return n;if(t.CSS&&"function"===typeof t.CSS.supports){var a=t.CSS.supports("--css-vars","yes"),r=t.CSS.supports("(--css-vars: yes)")&&t.CSS.supports("color","#00000000");return n=!(!a&&!r)&&!function(t){var e=t.document,n=e.createElement("div");n.className="mdc-ripple-surface--test-edge-var-bug",e.body.appendChild(n);var i=t.getComputedStyle(n),a=null!==i&&"solid"===i.borderTopStyle;return n.remove(),a}(t),e||(i=n),n}}function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window,e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(void 0===a||e){var n=!1;try{t.document.addEventListener("test",null,{get passive(){n=!0}})}catch(t){}a=n}return!!a&&{passive:!0}}function s(t){return["webkitMatchesSelector","msMatchesSelector","matches"].filter(function(e){return e in t}).pop()}function u(t,e,n){var i,a,r=e.x,o=e.y,s=r+n.left,u=o+n.top;return"touchstart"===t.type?(i=t.changedTouches[0].pageX-s,a=t.changedTouches[0].pageY-u):(i=t.pageX-s,a=t.pageY-u),{x:i,y:a}}n.d(e,"d",function(){return r}),n.d(e,"a",function(){return o}),n.d(e,"b",function(){return s}),n.d(e,"c",function(){return u})},Nsbk:function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(e)}t.exports=n},PJYZ:function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},QnW2:function(t,e,n){"use strict";var i=/(?:^\[object\s(.*?)\]$)/;e.a=function(t){return Object.prototype.toString.call(t).replace(i,"$1").toLowerCase()}},SBAC:function(t,e,n){"use strict";var i=n("lwsE"),a=n.n(i),r=n("W8MJ"),o=n.n(r),s=n("oLRI"),u=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;a()(this,t),this.root_=e;for(var i=arguments.length,r=new Array(i>2?i-2:0),o=2;o<i;o++)r[o-2]=arguments[o];this.initialize.apply(this,r),this.foundation_=void 0===n?this.getDefaultFoundation():n,this.foundation_.init(),this.initialSyncWithDOM()}return o()(t,null,[{key:"attachTo",value:function(e){return new t(e,new s.a)}}]),o()(t,[{key:"initialize",value:function(){}},{key:"getDefaultFoundation",value:function(){throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class")}},{key:"initialSyncWithDOM",value:function(){}},{key:"destroy",value:function(){this.foundation_.destroy()}},{key:"listen",value:function(t,e){this.root_.addEventListener(t,e)}},{key:"unlisten",value:function(t,e){this.root_.removeEventListener(t,e)}},{key:"emit",value:function(t,e){var n,i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];"function"===typeof CustomEvent?n=new CustomEvent(t,{detail:e,bubbles:i}):(n=document.createEvent("CustomEvent")).initCustomEvent(t,i,!1,e),this.root_.dispatchEvent(n)}}]),t}();e.a=u},SksO:function(t,e){function n(e,i){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,i)}t.exports=n},W8MJ:function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}t.exports=function(t,e,i){return e&&n(t.prototype,e),i&&n(t,i),t}},a1gu:function(t,e,n){var i=n("cDf5"),a=n("PJYZ");t.exports=function(t,e){return!e||"object"!==i(e)&&"function"!==typeof e?a(t):e}},cDf5:function(t,e){function n(t){return(n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(e){return"function"===typeof Symbol&&"symbol"===n(Symbol.iterator)?t.exports=i=function(t){return n(t)}:t.exports=i=function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":n(t)},i(e)}t.exports=i},gVot:function(t,e,n){"use strict";var i=n("Aqzh"),a=n.n(i),r=n("QnW2"),o=function(t){var e=t.componentProps,n=t.propName,i=t.props,o=e[n].default,s=i[n];"object"!==Object(r.a)(o)?e[n].default=s:e[n].default=a()(o,s)},s=function(t){var e=t.componentMixins,n=t.propName,i=t.props;if(e.length)for(var a=e.length;a--;)if(void 0!==e[a].props[n]){o({componentProps:e[a].props,propName:n,props:i});break}};e.a=function(t,e){Object.keys(e).forEach(function(n){t.props?void 0===t.props[n]?s({componentMixins:t.mixins,propName:n,props:e}):o({componentProps:t.props,propName:n,props:e}):s({componentMixins:t.mixins,propName:n,props:e})})}},iWIM:function(t,e,n){n("Nsbk");var i=n("n3AX");function a(e,n,r){return"undefined"!==typeof Reflect&&Reflect.get?t.exports=a=Reflect.get:t.exports=a=function(t,e,n){var a=i(t,e);if(a){var r=Object.getOwnPropertyDescriptor(a,e);return r.get?r.get.call(n):r.value}},a(e,n,r||e)}t.exports=a},iri3:function(t,e,n){"use strict";var i=n("kUbF"),a=n("gVot");e.a=function(t){var e={install:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Object(a.a)(t,n),e.component(t.name,t)}};return Object(i.a)(e),e}},kUbF:function(t,e,n){"use strict";(function(t){e.a=function(e){var n=null;"undefined"!==typeof window?n=window.Vue:"undefined"!==typeof t&&(n=t.Vue),n&&n.use(e)}}).call(this,n("yLpj"))},lwsE:function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},n3AX:function(t,e,n){var i=n("Nsbk");t.exports=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=i(t)););return t}},oLRI:function(t,e,n){"use strict";var i=n("lwsE"),a=n.n(i),r=n("W8MJ"),o=n.n(r),s=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};a()(this,t),this.adapter_=e}return o()(t,null,[{key:"cssClasses",get:function(){return{}}},{key:"strings",get:function(){return{}}},{key:"numbers",get:function(){return{}}},{key:"defaultAdapter",get:function(){return{}}}]),o()(t,[{key:"init",value:function(){}},{key:"destroy",value:function(){}}]),t}();e.a=s},yLpj:function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"===typeof window&&(n=window)}t.exports=n},zsl9:function(t,e,n){"use strict";var i=n("lwsE"),a=n.n(i),r=n("W8MJ"),o=n.n(r),s=n("a1gu"),u=n.n(s),c=n("Nsbk"),d=n.n(c),l=n("7W2i"),f=n.n(l),p=n("SBAC"),_=n("oLRI"),h={ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded",BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation"},v={VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end"},g={PADDING:10,INITIAL_ORIGIN_SCALE:.6,DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,TAP_DELAY_MS:300},y=n("MuGO"),m=["touchstart","pointerdown","mousedown","keydown"],b=["touchend","pointerup","mouseup"],A=[],S=function(t){function e(t){var n;return a()(this,e),(n=u()(this,d()(e).call(this,Object.assign(e.defaultAdapter,t)))).layoutFrame_=0,n.frame_={width:0,height:0},n.activationState_=n.defaultActivationState_(),n.initialSize_=0,n.maxRadius_=0,n.activateHandler_=function(t){return n.activate_(t)},n.deactivateHandler_=function(t){return n.deactivate_(t)},n.focusHandler_=function(){return n.handleFocus()},n.blurHandler_=function(){return n.handleBlur()},n.resizeHandler_=function(){return n.layout()},n.unboundedCoords_={left:0,top:0},n.fgScale_=0,n.activationTimer_=0,n.fgDeactivationRemovalTimer_=0,n.activationAnimationHasEnded_=!1,n.activationTimerCallback_=function(){n.activationAnimationHasEnded_=!0,n.runDeactivationUXLogicIfReady_()},n.previousActivationEvent_=null,n}return f()(e,t),o()(e,null,[{key:"cssClasses",get:function(){return h}},{key:"strings",get:function(){return v}},{key:"numbers",get:function(){return g}},{key:"defaultAdapter",get:function(){return{browserSupportsCssVars:function(){},isUnbounded:function(){},isSurfaceActive:function(){},isSurfaceDisabled:function(){},addClass:function(){},removeClass:function(){},containsEventTarget:function(){},registerInteractionHandler:function(){},deregisterInteractionHandler:function(){},registerDocumentInteractionHandler:function(){},deregisterDocumentInteractionHandler:function(){},registerResizeHandler:function(){},deregisterResizeHandler:function(){},updateCssVariable:function(){},computeBoundingRect:function(){},getWindowPageOffset:function(){}}}}]),o()(e,[{key:"supportsPressRipple_",value:function(){return this.adapter_.browserSupportsCssVars()}},{key:"defaultActivationState_",value:function(){return{isActivated:!1,hasDeactivationUXRun:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1,activationEvent:null,isProgrammatic:!1}}},{key:"init",value:function(){var t=this,n=this.supportsPressRipple_();if(this.registerRootHandlers_(n),n){var i=e.cssClasses,a=i.ROOT,r=i.UNBOUNDED;requestAnimationFrame(function(){t.adapter_.addClass(a),t.adapter_.isUnbounded()&&(t.adapter_.addClass(r),t.layoutInternal_())})}}},{key:"destroy",value:function(){var t=this;if(this.supportsPressRipple_()){this.activationTimer_&&(clearTimeout(this.activationTimer_),this.activationTimer_=0,this.adapter_.removeClass(e.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer_&&(clearTimeout(this.fgDeactivationRemovalTimer_),this.fgDeactivationRemovalTimer_=0,this.adapter_.removeClass(e.cssClasses.FG_DEACTIVATION));var n=e.cssClasses,i=n.ROOT,a=n.UNBOUNDED;requestAnimationFrame(function(){t.adapter_.removeClass(i),t.adapter_.removeClass(a),t.removeCssVars_()})}this.deregisterRootHandlers_(),this.deregisterDeactivationHandlers_()}},{key:"registerRootHandlers_",value:function(t){var e=this;t&&(m.forEach(function(t){e.adapter_.registerInteractionHandler(t,e.activateHandler_)}),this.adapter_.isUnbounded()&&this.adapter_.registerResizeHandler(this.resizeHandler_)),this.adapter_.registerInteractionHandler("focus",this.focusHandler_),this.adapter_.registerInteractionHandler("blur",this.blurHandler_)}},{key:"registerDeactivationHandlers_",value:function(t){var e=this;"keydown"===t.type?this.adapter_.registerInteractionHandler("keyup",this.deactivateHandler_):b.forEach(function(t){e.adapter_.registerDocumentInteractionHandler(t,e.deactivateHandler_)})}},{key:"deregisterRootHandlers_",value:function(){var t=this;m.forEach(function(e){t.adapter_.deregisterInteractionHandler(e,t.activateHandler_)}),this.adapter_.deregisterInteractionHandler("focus",this.focusHandler_),this.adapter_.deregisterInteractionHandler("blur",this.blurHandler_),this.adapter_.isUnbounded()&&this.adapter_.deregisterResizeHandler(this.resizeHandler_)}},{key:"deregisterDeactivationHandlers_",value:function(){var t=this;this.adapter_.deregisterInteractionHandler("keyup",this.deactivateHandler_),b.forEach(function(e){t.adapter_.deregisterDocumentInteractionHandler(e,t.deactivateHandler_)})}},{key:"removeCssVars_",value:function(){var t=this,n=e.strings;Object.keys(n).forEach(function(e){0===e.indexOf("VAR_")&&t.adapter_.updateCssVariable(n[e],null)})}},{key:"activate_",value:function(t){var e=this;if(!this.adapter_.isSurfaceDisabled()){var n=this.activationState_;if(!n.isActivated){var i=this.previousActivationEvent_;if(!(i&&t&&i.type!==t.type))n.isActivated=!0,n.isProgrammatic=null===t,n.activationEvent=t,n.wasActivatedByPointer=!n.isProgrammatic&&("mousedown"===t.type||"touchstart"===t.type||"pointerdown"===t.type),t&&A.length>0&&A.some(function(t){return e.adapter_.containsEventTarget(t)})?this.resetActivationState_():(t&&(A.push(t.target),this.registerDeactivationHandlers_(t)),n.wasElementMadeActive=this.checkElementMadeActive_(t),n.wasElementMadeActive&&this.animateActivation_(),requestAnimationFrame(function(){A=[],n.wasElementMadeActive||" "!==t.key&&32!==t.keyCode||(n.wasElementMadeActive=e.checkElementMadeActive_(t),n.wasElementMadeActive&&e.animateActivation_()),n.wasElementMadeActive||(e.activationState_=e.defaultActivationState_())}))}}}},{key:"checkElementMadeActive_",value:function(t){return!t||"keydown"!==t.type||this.adapter_.isSurfaceActive()}},{key:"activate",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.activate_(t)}},{key:"animateActivation_",value:function(){var t=this,n=e.strings,i=n.VAR_FG_TRANSLATE_START,a=n.VAR_FG_TRANSLATE_END,r=e.cssClasses,o=r.FG_DEACTIVATION,s=r.FG_ACTIVATION,u=e.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal_();var c="",d="";if(!this.adapter_.isUnbounded()){var l=this.getFgTranslationCoordinates_(),f=l.startPoint,p=l.endPoint;c="".concat(f.x,"px, ").concat(f.y,"px"),d="".concat(p.x,"px, ").concat(p.y,"px")}this.adapter_.updateCssVariable(i,c),this.adapter_.updateCssVariable(a,d),clearTimeout(this.activationTimer_),clearTimeout(this.fgDeactivationRemovalTimer_),this.rmBoundedActivationClasses_(),this.adapter_.removeClass(o),this.adapter_.computeBoundingRect(),this.adapter_.addClass(s),this.activationTimer_=setTimeout(function(){return t.activationTimerCallback_()},u)}},{key:"getFgTranslationCoordinates_",value:function(){var t,e=this.activationState_,n=e.activationEvent;return{startPoint:t={x:(t=e.wasActivatedByPointer?Object(y.c)(n,this.adapter_.getWindowPageOffset(),this.adapter_.computeBoundingRect()):{x:this.frame_.width/2,y:this.frame_.height/2}).x-this.initialSize_/2,y:t.y-this.initialSize_/2},endPoint:{x:this.frame_.width/2-this.initialSize_/2,y:this.frame_.height/2-this.initialSize_/2}}}},{key:"runDeactivationUXLogicIfReady_",value:function(){var t=this,n=e.cssClasses.FG_DEACTIVATION,i=this.activationState_,a=i.hasDeactivationUXRun,r=i.isActivated;(a||!r)&&this.activationAnimationHasEnded_&&(this.rmBoundedActivationClasses_(),this.adapter_.addClass(n),this.fgDeactivationRemovalTimer_=setTimeout(function(){t.adapter_.removeClass(n)},g.FG_DEACTIVATION_MS))}},{key:"rmBoundedActivationClasses_",value:function(){var t=e.cssClasses.FG_ACTIVATION;this.adapter_.removeClass(t),this.activationAnimationHasEnded_=!1,this.adapter_.computeBoundingRect()}},{key:"resetActivationState_",value:function(){var t=this;this.previousActivationEvent_=this.activationState_.activationEvent,this.activationState_=this.defaultActivationState_(),setTimeout(function(){return t.previousActivationEvent_=null},e.numbers.TAP_DELAY_MS)}},{key:"deactivate_",value:function(t){var e=this,n=this.activationState_;if(n.isActivated){var i=Object.assign({},n);if(n.isProgrammatic){requestAnimationFrame(function(){return e.animateDeactivation_(null,i)}),this.resetActivationState_()}else this.deregisterDeactivationHandlers_(),requestAnimationFrame(function(){e.activationState_.hasDeactivationUXRun=!0,e.animateDeactivation_(t,i),e.resetActivationState_()})}}},{key:"deactivate",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.deactivate_(t)}},{key:"animateDeactivation_",value:function(t,e){var n=e.wasActivatedByPointer,i=e.wasElementMadeActive;(n||i)&&this.runDeactivationUXLogicIfReady_()}},{key:"layout",value:function(){var t=this;this.layoutFrame_&&cancelAnimationFrame(this.layoutFrame_),this.layoutFrame_=requestAnimationFrame(function(){t.layoutInternal_(),t.layoutFrame_=0})}},{key:"layoutInternal_",value:function(){var t=this;this.frame_=this.adapter_.computeBoundingRect();var n=Math.max(this.frame_.height,this.frame_.width);this.maxRadius_=this.adapter_.isUnbounded()?n:Math.sqrt(Math.pow(t.frame_.width,2)+Math.pow(t.frame_.height,2))+e.numbers.PADDING,this.initialSize_=n*e.numbers.INITIAL_ORIGIN_SCALE,this.fgScale_=this.maxRadius_/this.initialSize_,this.updateLayoutCssVars_()}},{key:"updateLayoutCssVars_",value:function(){var t=e.strings,n=t.VAR_FG_SIZE,i=t.VAR_LEFT,a=t.VAR_TOP,r=t.VAR_FG_SCALE;this.adapter_.updateCssVariable(n,"".concat(this.initialSize_,"px")),this.adapter_.updateCssVariable(r,this.fgScale_),this.adapter_.isUnbounded()&&(this.unboundedCoords_={left:Math.round(this.frame_.width/2-this.initialSize_/2),top:Math.round(this.frame_.height/2-this.initialSize_/2)},this.adapter_.updateCssVariable(i,"".concat(this.unboundedCoords_.left,"px")),this.adapter_.updateCssVariable(a,"".concat(this.unboundedCoords_.top,"px")))}},{key:"setUnbounded",value:function(t){var n=e.cssClasses.UNBOUNDED;t?this.adapter_.addClass(n):this.adapter_.removeClass(n)}},{key:"handleFocus",value:function(){var t=this;requestAnimationFrame(function(){return t.adapter_.addClass(e.cssClasses.BG_FOCUSED)})}},{key:"handleBlur",value:function(){var t=this;requestAnimationFrame(function(){return t.adapter_.removeClass(e.cssClasses.BG_FOCUSED)})}}]),e}(_.a);n.d(e,"a",function(){return T}),n.d(e,"b",function(){return S});var T=function(t){function e(){var t,n;a()(this,e);for(var i=arguments.length,r=new Array(i),o=0;o<i;o++)r[o]=arguments[o];return(n=u()(this,(t=d()(e)).call.apply(t,[this].concat(r)))).disabled=!1,n.unbounded_,n}return f()(e,t),o()(e,[{key:"setUnbounded_",value:function(){this.foundation_.setUnbounded(this.unbounded_)}},{key:"activate",value:function(){this.foundation_.activate()}},{key:"deactivate",value:function(){this.foundation_.deactivate()}},{key:"layout",value:function(){this.foundation_.layout()}},{key:"getDefaultFoundation",value:function(){return new S(e.createAdapter(this))}},{key:"initialSyncWithDOM",value:function(){this.unbounded="mdcRippleIsUnbounded"in this.root_.dataset}},{key:"unbounded",get:function(){return this.unbounded_},set:function(t){this.unbounded_=Boolean(t),this.setUnbounded_()}}],[{key:"attachTo",value:function(t){var n=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).isUnbounded,i=void 0===n?void 0:n,a=new e(t);return void 0!==i&&(a.unbounded=i),a}},{key:"createAdapter",value:function(t){var e=y.b(HTMLElement.prototype);return{browserSupportsCssVars:function(){return y.d(window)},isUnbounded:function(){return t.unbounded},isSurfaceActive:function(){return t.root_[e](":active")},isSurfaceDisabled:function(){return t.disabled},addClass:function(e){return t.root_.classList.add(e)},removeClass:function(e){return t.root_.classList.remove(e)},containsEventTarget:function(e){return t.root_.contains(e)},registerInteractionHandler:function(e,n){return t.root_.addEventListener(e,n,y.a())},deregisterInteractionHandler:function(e,n){return t.root_.removeEventListener(e,n,y.a())},registerDocumentInteractionHandler:function(t,e){return document.documentElement.addEventListener(t,e,y.a())},deregisterDocumentInteractionHandler:function(t,e){return document.documentElement.removeEventListener(t,e,y.a())},registerResizeHandler:function(t){return window.addEventListener("resize",t)},deregisterResizeHandler:function(t){return window.removeEventListener("resize",t)},updateCssVariable:function(e,n){return t.root_.style.setProperty(e,n)},computeBoundingRect:function(){return t.root_.getBoundingClientRect()},getWindowPageOffset:function(){return{x:window.pageXOffset,y:window.pageYOffset}}}}}]),e}(p.a),E=function t(){a()(this,t)};E.prototype.root_,E.prototype.unbounded,E.prototype.disabled}})});