!function(t,e){"object"===typeof exports&&"object"===typeof module?module.exports=e():"function"===typeof define&&define.amd?define([],e):"object"===typeof exports?exports.BalmUI=e():t.BalmUI=e()}(window,function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s="VhPC")}({"7W2i":function(t,e,n){var i=n("SksO");t.exports=function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&i(t,e)}},Aqzh:function(t,e,n){t.exports=function(){"use strict";var t=function(t){return function(t){return!!t&&"object"===typeof t}(t)&&!function(t){var n=Object.prototype.toString.call(t);return"[object RegExp]"===n||"[object Date]"===n||function(t){return t.$$typeof===e}(t)}(t)},e="function"===typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function n(t,e){return!1!==e.clone&&e.isMergeableObject(t)?r((n=t,Array.isArray(n)?[]:{}),t,e):t;var n}function i(t,e,i){return t.concat(e).map(function(t){return n(t,i)})}function r(e,a,o){(o=o||{}).arrayMerge=o.arrayMerge||i,o.isMergeableObject=o.isMergeableObject||t;var s=Array.isArray(a),u=Array.isArray(e),c=s===u;return c?s?o.arrayMerge(e,a,o):function(t,e,i){var a={};return i.isMergeableObject(t)&&Object.keys(t).forEach(function(e){a[e]=n(t[e],i)}),Object.keys(e).forEach(function(o){i.isMergeableObject(e[o])&&t[o]?a[o]=r(t[o],e[o],i):a[o]=n(e[o],i)}),a}(e,a,o):n(a,o)}return r.all=function(t,e){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(t,n){return r(t,n,e)},{})},r}()},"KHd+":function(t,e,n){"use strict";function i(t,e,n,i,r,a,o,s){var u,c="function"===typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),i&&(c.functional=!0),a&&(c._scopeId="data-v-"+a),o?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},c._ssrRegister=u):r&&(u=s?function(){r.call(this,this.$root.$options.shadowRoot)}:r),u)if(c.functional){c._injectStyles=u;var l=c.render;c.render=function(t,e){return u.call(e),l(t,e)}}else{var d=c.beforeCreate;c.beforeCreate=d?[].concat(d,u):[u]}return{exports:t,options:c}}n.d(e,"a",function(){return i})},MuGO:function(t,e,n){"use strict";var i,r;function a(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=i;if("boolean"===typeof i&&!e)return n;if(t.CSS&&"function"===typeof t.CSS.supports){var r=t.CSS.supports("--css-vars","yes"),a=t.CSS.supports("(--css-vars: yes)")&&t.CSS.supports("color","#00000000");return n=!(!r&&!a)&&!function(t){var e=t.document,n=e.createElement("div");n.className="mdc-ripple-surface--test-edge-var-bug",e.body.appendChild(n);var i=t.getComputedStyle(n),r=null!==i&&"solid"===i.borderTopStyle;return n.remove(),r}(t),e||(i=n),n}}function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window,e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(void 0===r||e){var n=!1;try{t.document.addEventListener("test",null,{get passive(){n=!0}})}catch(t){}r=n}return!!r&&{passive:!0}}function s(t){return["webkitMatchesSelector","msMatchesSelector","matches"].filter(function(e){return e in t}).pop()}function u(t,e,n){var i,r,a=e.x,o=e.y,s=a+n.left,u=o+n.top;return"touchstart"===t.type?(i=t.changedTouches[0].pageX-s,r=t.changedTouches[0].pageY-u):(i=t.pageX-s,r=t.pageY-u),{x:i,y:r}}n.d(e,"d",function(){return a}),n.d(e,"a",function(){return o}),n.d(e,"b",function(){return s}),n.d(e,"c",function(){return u})},Nsbk:function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(e)}t.exports=n},PJYZ:function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},QIRk:function(t,e,n){"use strict";n("lwsE"),n("W8MJ"),n("zsl9")},QnW2:function(t,e,n){"use strict";var i=/(?:^\[object\s(.*?)\]$)/;e.a=function(t){return Object.prototype.toString.call(t).replace(i,"$1").toLowerCase()}},SBAC:function(t,e,n){"use strict";var i=n("lwsE"),r=n.n(i),a=n("W8MJ"),o=n.n(a),s=n("oLRI"),u=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;r()(this,t),this.root_=e;for(var i=arguments.length,a=new Array(i>2?i-2:0),o=2;o<i;o++)a[o-2]=arguments[o];this.initialize.apply(this,a),this.foundation_=void 0===n?this.getDefaultFoundation():n,this.foundation_.init(),this.initialSyncWithDOM()}return o()(t,null,[{key:"attachTo",value:function(e){return new t(e,new s.a)}}]),o()(t,[{key:"initialize",value:function(){}},{key:"getDefaultFoundation",value:function(){throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class")}},{key:"initialSyncWithDOM",value:function(){}},{key:"destroy",value:function(){this.foundation_.destroy()}},{key:"listen",value:function(t,e){this.root_.addEventListener(t,e)}},{key:"unlisten",value:function(t,e){this.root_.removeEventListener(t,e)}},{key:"emit",value:function(t,e){var n,i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];"function"===typeof CustomEvent?n=new CustomEvent(t,{detail:e,bubbles:i}):(n=document.createEvent("CustomEvent")).initCustomEvent(t,i,!1,e),this.root_.dispatchEvent(n)}}]),t}();e.a=u},SksO:function(t,e){function n(e,i){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,i)}t.exports=n},VhPC:function(t,e,n){"use strict";n.r(e);var i=n("iri3"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ui-form-field",{attrs:{block:t.block,alignEnd:t.alignEnd}},[t._t("before"),t._v(" "),n("div",{ref:"radio",class:t.className},[n("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.checkedValue,expression:"checkedValue"}],staticClass:"mdc-radio__native-control",attrs:{id:t.id,type:"radio",name:t.name,disabled:t.disabled},domProps:{value:t.value,checked:t._q(t.checkedValue,t.value)},on:{change:[function(e){t.checkedValue=t.value},t.handleChange]}},"input",t.attrs,!1)),t._v(" "),n("div",{staticClass:"mdc-radio__background"},[n("div",{staticClass:"mdc-radio__outer-circle"}),t._v(" "),n("div",{staticClass:"mdc-radio__inner-circle"})])]),t._v(" "),n("label",{attrs:{for:t.id}},[t._t("default",[t._v(t._s(t.label))])],2),t._v(" "),t._t("after")],2)};r._withStripped=!0;var a=n("zHPH"),o=n("lwsE"),s=n.n(o),u=n("a1gu"),c=n.n(u),l=n("Nsbk"),d=n.n(l),f=n("iWIM"),p=n.n(f),v=n("W8MJ"),_=n.n(v),h=n("7W2i"),m=n.n(h),y=n("SBAC"),g=(n("QIRk"),n("oLRI")),b={NATIVE_CONTROL_SELECTOR:".mdc-radio__native-control"},A={ROOT:"mdc-radio",DISABLED:"mdc-radio--disabled"},C=function(t){function e(){return s()(this,e),c()(this,d()(e).apply(this,arguments))}return m()(e,t),_()(e,[{key:"isChecked",value:function(){return this.getNativeControl_().checked}},{key:"setChecked",value:function(t){this.getNativeControl_().checked=t}},{key:"isDisabled",value:function(){return this.getNativeControl_().disabled}},{key:"setDisabled",value:function(t){var n=e.cssClasses.DISABLED;this.getNativeControl_().disabled=t,t?this.adapter_.addClass(n):this.adapter_.removeClass(n)}},{key:"getValue",value:function(){return this.getNativeControl_().value}},{key:"setValue",value:function(t){this.getNativeControl_().value=t}},{key:"getNativeControl_",value:function(){return this.adapter_.getNativeControl()||{checked:!1,disabled:!1,value:null}}}],[{key:"cssClasses",get:function(){return A}},{key:"strings",get:function(){return b}},{key:"defaultAdapter",get:function(){return{addClass:function(){},removeClass:function(){},getNativeControl:function(){}}}}]),e}(g.a),k=n("zsl9"),E=function(t){function e(){var t,n;s()(this,e);for(var i=arguments.length,r=new Array(i),a=0;a<i;a++)r[a]=arguments[a];return(n=c()(this,(t=d()(e)).call.apply(t,[this].concat(r)))).ripple_=n.initRipple_(),n}return m()(e,t),_()(e,[{key:"checked",get:function(){return this.foundation_.isChecked()},set:function(t){this.foundation_.setChecked(t)}},{key:"disabled",get:function(){return this.foundation_.isDisabled()},set:function(t){this.foundation_.setDisabled(t)}},{key:"value",get:function(){return this.foundation_.getValue()},set:function(t){this.foundation_.setValue(t)}},{key:"ripple",get:function(){return this.ripple_}}],[{key:"attachTo",value:function(t){return new e(t)}}]),_()(e,[{key:"initRipple_",value:function(){var t=this,e=Object.assign(k.a.createAdapter(this),{isUnbounded:function(){return!0},isSurfaceActive:function(){return!1},registerInteractionHandler:function(e,n){return t.nativeControl_.addEventListener(e,n)},deregisterInteractionHandler:function(e,n){return t.nativeControl_.removeEventListener(e,n)}}),n=new k.b(e);return new k.a(this.root_,n)}},{key:"destroy",value:function(){this.ripple_.destroy(),p()(d()(e.prototype),"destroy",this).call(this)}},{key:"getDefaultFoundation",value:function(){var t=this;return new C({addClass:function(e){return t.root_.classList.add(e)},removeClass:function(e){return t.root_.classList.remove(e)},getNativeControl:function(){return t.root_.querySelector(C.strings.NATIVE_CONTROL_SELECTOR)}})}},{key:"nativeControl_",get:function(){var t=C.strings.NATIVE_CONTROL_SELECTOR;return this.root_.querySelector(t)}}]),e}(y.a),S=n("ttWf"),O=n("y/Mp"),T=n("kX8e"),w={CHANGE:"change"},I={name:"ui-radio",components:{UiFormField:S.a},mixins:[O.a,T.a],model:{prop:"model",event:w.CHANGE},props:{model:[String,Number],disabled:{type:Boolean,default:!1},id:String,name:String,value:[String,Number],cssOnly:{type:Boolean,default:!1},label:String},data:function(){return{$radio:null,checkedValue:this.model}},computed:{className:function(){return{"mdc-radio":!0,"mdc-radio--disabled":this.disabled}}},watch:{model:function(t){this.checkedValue=t}},mounted:function(){if(!this.cssOnly){var t=new a.a(this.$el);this.$radio=new E(this.$refs.radio),t.input=this.$radio,this.$radio.checked=this.checkedValue==this.value}},methods:{handleChange:function(){this.$emit(w.CHANGE,this.checkedValue)}}},R=n("KHd+"),D=Object(R.a)(I,r,[],!1,null,null,null);D.options.__file="src/scripts/components/input-controls/radio.vue";var H=D.exports;e.default=Object(i.a)(H)},W8MJ:function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}t.exports=function(t,e,i){return e&&n(t.prototype,e),i&&n(t,i),t}},a1gu:function(t,e,n){var i=n("cDf5"),r=n("PJYZ");t.exports=function(t,e){return!e||"object"!==i(e)&&"function"!==typeof e?r(t):e}},cDf5:function(t,e){function n(t){return(n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(e){return"function"===typeof Symbol&&"symbol"===n(Symbol.iterator)?t.exports=i=function(t){return n(t)}:t.exports=i=function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":n(t)},i(e)}t.exports=i},gVot:function(t,e,n){"use strict";var i=n("Aqzh"),r=n.n(i),a=n("QnW2"),o=function(t){var e=t.componentProps,n=t.propName,i=t.props,o=e[n].default,s=i[n];"object"!==Object(a.a)(o)?e[n].default=s:e[n].default=r()(o,s)},s=function(t){var e=t.componentMixins,n=t.propName,i=t.props;if(e.length)for(var r=e.length;r--;)if(void 0!==e[r].props[n]){o({componentProps:e[r].props,propName:n,props:i});break}};e.a=function(t,e){Object.keys(e).forEach(function(n){t.props?void 0===t.props[n]?s({componentMixins:t.mixins,propName:n,props:e}):o({componentProps:t.props,propName:n,props:e}):s({componentMixins:t.mixins,propName:n,props:e})})}},iWIM:function(t,e,n){n("Nsbk");var i=n("n3AX");function r(e,n,a){return"undefined"!==typeof Reflect&&Reflect.get?t.exports=r=Reflect.get:t.exports=r=function(t,e,n){var r=i(t,e);if(r){var a=Object.getOwnPropertyDescriptor(r,e);return a.get?a.get.call(n):a.value}},r(e,n,a||e)}t.exports=r},iri3:function(t,e,n){"use strict";var i=n("kUbF"),r=n("gVot");e.a=function(t){var e={install:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Object(r.a)(t,n),e.component(t.name,t)}};return Object(i.a)(e),e}},kUbF:function(t,e,n){"use strict";(function(t){e.a=function(e){var n=null;"undefined"!==typeof window?n=window.Vue:"undefined"!==typeof t&&(n=t.Vue),n&&n.use(e)}}).call(this,n("yLpj"))},kX8e:function(t,e,n){"use strict";e.a={props:{attrs:Object}}},lwsE:function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},n3AX:function(t,e,n){var i=n("Nsbk");t.exports=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=i(t)););return t}},oLRI:function(t,e,n){"use strict";var i=n("lwsE"),r=n.n(i),a=n("W8MJ"),o=n.n(a),s=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};r()(this,t),this.adapter_=e}return o()(t,null,[{key:"cssClasses",get:function(){return{}}},{key:"strings",get:function(){return{}}},{key:"numbers",get:function(){return{}}},{key:"defaultAdapter",get:function(){return{}}}]),o()(t,[{key:"init",value:function(){}},{key:"destroy",value:function(){}}]),t}();e.a=s},ttWf:function(t,e,n){"use strict";var i=function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.className},[this._t("default")],2)};i._withStripped=!0;var r={name:"ui-form-field",mixins:[n("y/Mp").a],computed:{className:function(){return{"mdc-form-field":!this.noWrap,"mdc-form-field--block":this.block,"mdc-form-field--align-end":this.alignEnd}}}},a=n("KHd+"),o=Object(a.a)(r,i,[],!1,null,null,null);o.options.__file="src/scripts/components/input-controls/form-field.vue";e.a=o.exports},"y/Mp":function(t,e,n){"use strict";e.a={props:{noWrap:{type:Boolean,default:!1},block:{type:Boolean,default:!1},alignEnd:{type:Boolean,default:!1}}}},yLpj:function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"===typeof window&&(n=window)}t.exports=n},zHPH:function(t,e,n){"use strict";var i=n("lwsE"),r=n.n(i),a=n("a1gu"),o=n.n(a),s=n("Nsbk"),u=n.n(s),c=n("W8MJ"),l=n.n(c),d=n("7W2i"),f=n.n(d),p=n("SBAC"),v=n("oLRI"),_={ROOT:"mdc-form-field"},h={LABEL_SELECTOR:".mdc-form-field > label"},m=function(t){function e(t){var n;return r()(this,e),(n=o()(this,u()(e).call(this,Object.assign(e.defaultAdapter,t)))).clickHandler_=function(){return n.handleClick_()},n}return f()(e,t),l()(e,null,[{key:"cssClasses",get:function(){return _}},{key:"strings",get:function(){return h}},{key:"defaultAdapter",get:function(){return{registerInteractionHandler:function(){},deregisterInteractionHandler:function(){},activateInputRipple:function(){},deactivateInputRipple:function(){}}}}]),l()(e,[{key:"init",value:function(){this.adapter_.registerInteractionHandler("click",this.clickHandler_)}},{key:"destroy",value:function(){this.adapter_.deregisterInteractionHandler("click",this.clickHandler_)}},{key:"handleClick_",value:function(){var t=this;this.adapter_.activateInputRipple(),requestAnimationFrame(function(){return t.adapter_.deactivateInputRipple()})}}]),e}(v.a);n("QIRk");n.d(e,"a",function(){return y});var y=function(t){function e(){var t,n;r()(this,e);for(var i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];return(n=o()(this,(t=u()(e)).call.apply(t,[this].concat(a)))).input_,n}return f()(e,t),l()(e,[{key:"input",set:function(t){this.input_=t},get:function(){return this.input_}}],[{key:"attachTo",value:function(t){return new e(t)}}]),l()(e,[{key:"getDefaultFoundation",value:function(){var t=this;return new m({registerInteractionHandler:function(e,n){return t.label_.addEventListener(e,n)},deregisterInteractionHandler:function(e,n){return t.label_.removeEventListener(e,n)},activateInputRipple:function(){t.input_&&t.input_.ripple&&t.input_.ripple.activate()},deactivateInputRipple:function(){t.input_&&t.input_.ripple&&t.input_.ripple.deactivate()}})}},{key:"label_",get:function(){var t=m.strings.LABEL_SELECTOR;return this.root_.querySelector(t)}}]),e}(p.a)},zsl9:function(t,e,n){"use strict";var i=n("lwsE"),r=n.n(i),a=n("W8MJ"),o=n.n(a),s=n("a1gu"),u=n.n(s),c=n("Nsbk"),l=n.n(c),d=n("7W2i"),f=n.n(d),p=n("SBAC"),v=n("oLRI"),_={ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded",BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation"},h={VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end"},m={PADDING:10,INITIAL_ORIGIN_SCALE:.6,DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,TAP_DELAY_MS:300},y=n("MuGO"),g=["touchstart","pointerdown","mousedown","keydown"],b=["touchend","pointerup","mouseup"],A=[],C=function(t){function e(t){var n;return r()(this,e),(n=u()(this,l()(e).call(this,Object.assign(e.defaultAdapter,t)))).layoutFrame_=0,n.frame_={width:0,height:0},n.activationState_=n.defaultActivationState_(),n.initialSize_=0,n.maxRadius_=0,n.activateHandler_=function(t){return n.activate_(t)},n.deactivateHandler_=function(t){return n.deactivate_(t)},n.focusHandler_=function(){return n.handleFocus()},n.blurHandler_=function(){return n.handleBlur()},n.resizeHandler_=function(){return n.layout()},n.unboundedCoords_={left:0,top:0},n.fgScale_=0,n.activationTimer_=0,n.fgDeactivationRemovalTimer_=0,n.activationAnimationHasEnded_=!1,n.activationTimerCallback_=function(){n.activationAnimationHasEnded_=!0,n.runDeactivationUXLogicIfReady_()},n.previousActivationEvent_=null,n}return f()(e,t),o()(e,null,[{key:"cssClasses",get:function(){return _}},{key:"strings",get:function(){return h}},{key:"numbers",get:function(){return m}},{key:"defaultAdapter",get:function(){return{browserSupportsCssVars:function(){},isUnbounded:function(){},isSurfaceActive:function(){},isSurfaceDisabled:function(){},addClass:function(){},removeClass:function(){},containsEventTarget:function(){},registerInteractionHandler:function(){},deregisterInteractionHandler:function(){},registerDocumentInteractionHandler:function(){},deregisterDocumentInteractionHandler:function(){},registerResizeHandler:function(){},deregisterResizeHandler:function(){},updateCssVariable:function(){},computeBoundingRect:function(){},getWindowPageOffset:function(){}}}}]),o()(e,[{key:"supportsPressRipple_",value:function(){return this.adapter_.browserSupportsCssVars()}},{key:"defaultActivationState_",value:function(){return{isActivated:!1,hasDeactivationUXRun:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1,activationEvent:null,isProgrammatic:!1}}},{key:"init",value:function(){var t=this,n=this.supportsPressRipple_();if(this.registerRootHandlers_(n),n){var i=e.cssClasses,r=i.ROOT,a=i.UNBOUNDED;requestAnimationFrame(function(){t.adapter_.addClass(r),t.adapter_.isUnbounded()&&(t.adapter_.addClass(a),t.layoutInternal_())})}}},{key:"destroy",value:function(){var t=this;if(this.supportsPressRipple_()){this.activationTimer_&&(clearTimeout(this.activationTimer_),this.activationTimer_=0,this.adapter_.removeClass(e.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer_&&(clearTimeout(this.fgDeactivationRemovalTimer_),this.fgDeactivationRemovalTimer_=0,this.adapter_.removeClass(e.cssClasses.FG_DEACTIVATION));var n=e.cssClasses,i=n.ROOT,r=n.UNBOUNDED;requestAnimationFrame(function(){t.adapter_.removeClass(i),t.adapter_.removeClass(r),t.removeCssVars_()})}this.deregisterRootHandlers_(),this.deregisterDeactivationHandlers_()}},{key:"registerRootHandlers_",value:function(t){var e=this;t&&(g.forEach(function(t){e.adapter_.registerInteractionHandler(t,e.activateHandler_)}),this.adapter_.isUnbounded()&&this.adapter_.registerResizeHandler(this.resizeHandler_)),this.adapter_.registerInteractionHandler("focus",this.focusHandler_),this.adapter_.registerInteractionHandler("blur",this.blurHandler_)}},{key:"registerDeactivationHandlers_",value:function(t){var e=this;"keydown"===t.type?this.adapter_.registerInteractionHandler("keyup",this.deactivateHandler_):b.forEach(function(t){e.adapter_.registerDocumentInteractionHandler(t,e.deactivateHandler_)})}},{key:"deregisterRootHandlers_",value:function(){var t=this;g.forEach(function(e){t.adapter_.deregisterInteractionHandler(e,t.activateHandler_)}),this.adapter_.deregisterInteractionHandler("focus",this.focusHandler_),this.adapter_.deregisterInteractionHandler("blur",this.blurHandler_),this.adapter_.isUnbounded()&&this.adapter_.deregisterResizeHandler(this.resizeHandler_)}},{key:"deregisterDeactivationHandlers_",value:function(){var t=this;this.adapter_.deregisterInteractionHandler("keyup",this.deactivateHandler_),b.forEach(function(e){t.adapter_.deregisterDocumentInteractionHandler(e,t.deactivateHandler_)})}},{key:"removeCssVars_",value:function(){var t=this,n=e.strings;Object.keys(n).forEach(function(e){0===e.indexOf("VAR_")&&t.adapter_.updateCssVariable(n[e],null)})}},{key:"activate_",value:function(t){var e=this;if(!this.adapter_.isSurfaceDisabled()){var n=this.activationState_;if(!n.isActivated){var i=this.previousActivationEvent_;if(!(i&&t&&i.type!==t.type))n.isActivated=!0,n.isProgrammatic=null===t,n.activationEvent=t,n.wasActivatedByPointer=!n.isProgrammatic&&("mousedown"===t.type||"touchstart"===t.type||"pointerdown"===t.type),t&&A.length>0&&A.some(function(t){return e.adapter_.containsEventTarget(t)})?this.resetActivationState_():(t&&(A.push(t.target),this.registerDeactivationHandlers_(t)),n.wasElementMadeActive=this.checkElementMadeActive_(t),n.wasElementMadeActive&&this.animateActivation_(),requestAnimationFrame(function(){A=[],n.wasElementMadeActive||" "!==t.key&&32!==t.keyCode||(n.wasElementMadeActive=e.checkElementMadeActive_(t),n.wasElementMadeActive&&e.animateActivation_()),n.wasElementMadeActive||(e.activationState_=e.defaultActivationState_())}))}}}},{key:"checkElementMadeActive_",value:function(t){return!t||"keydown"!==t.type||this.adapter_.isSurfaceActive()}},{key:"activate",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.activate_(t)}},{key:"animateActivation_",value:function(){var t=this,n=e.strings,i=n.VAR_FG_TRANSLATE_START,r=n.VAR_FG_TRANSLATE_END,a=e.cssClasses,o=a.FG_DEACTIVATION,s=a.FG_ACTIVATION,u=e.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal_();var c="",l="";if(!this.adapter_.isUnbounded()){var d=this.getFgTranslationCoordinates_(),f=d.startPoint,p=d.endPoint;c="".concat(f.x,"px, ").concat(f.y,"px"),l="".concat(p.x,"px, ").concat(p.y,"px")}this.adapter_.updateCssVariable(i,c),this.adapter_.updateCssVariable(r,l),clearTimeout(this.activationTimer_),clearTimeout(this.fgDeactivationRemovalTimer_),this.rmBoundedActivationClasses_(),this.adapter_.removeClass(o),this.adapter_.computeBoundingRect(),this.adapter_.addClass(s),this.activationTimer_=setTimeout(function(){return t.activationTimerCallback_()},u)}},{key:"getFgTranslationCoordinates_",value:function(){var t,e=this.activationState_,n=e.activationEvent;return{startPoint:t={x:(t=e.wasActivatedByPointer?Object(y.c)(n,this.adapter_.getWindowPageOffset(),this.adapter_.computeBoundingRect()):{x:this.frame_.width/2,y:this.frame_.height/2}).x-this.initialSize_/2,y:t.y-this.initialSize_/2},endPoint:{x:this.frame_.width/2-this.initialSize_/2,y:this.frame_.height/2-this.initialSize_/2}}}},{key:"runDeactivationUXLogicIfReady_",value:function(){var t=this,n=e.cssClasses.FG_DEACTIVATION,i=this.activationState_,r=i.hasDeactivationUXRun,a=i.isActivated;(r||!a)&&this.activationAnimationHasEnded_&&(this.rmBoundedActivationClasses_(),this.adapter_.addClass(n),this.fgDeactivationRemovalTimer_=setTimeout(function(){t.adapter_.removeClass(n)},m.FG_DEACTIVATION_MS))}},{key:"rmBoundedActivationClasses_",value:function(){var t=e.cssClasses.FG_ACTIVATION;this.adapter_.removeClass(t),this.activationAnimationHasEnded_=!1,this.adapter_.computeBoundingRect()}},{key:"resetActivationState_",value:function(){var t=this;this.previousActivationEvent_=this.activationState_.activationEvent,this.activationState_=this.defaultActivationState_(),setTimeout(function(){return t.previousActivationEvent_=null},e.numbers.TAP_DELAY_MS)}},{key:"deactivate_",value:function(t){var e=this,n=this.activationState_;if(n.isActivated){var i=Object.assign({},n);if(n.isProgrammatic){requestAnimationFrame(function(){return e.animateDeactivation_(null,i)}),this.resetActivationState_()}else this.deregisterDeactivationHandlers_(),requestAnimationFrame(function(){e.activationState_.hasDeactivationUXRun=!0,e.animateDeactivation_(t,i),e.resetActivationState_()})}}},{key:"deactivate",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.deactivate_(t)}},{key:"animateDeactivation_",value:function(t,e){var n=e.wasActivatedByPointer,i=e.wasElementMadeActive;(n||i)&&this.runDeactivationUXLogicIfReady_()}},{key:"layout",value:function(){var t=this;this.layoutFrame_&&cancelAnimationFrame(this.layoutFrame_),this.layoutFrame_=requestAnimationFrame(function(){t.layoutInternal_(),t.layoutFrame_=0})}},{key:"layoutInternal_",value:function(){var t=this;this.frame_=this.adapter_.computeBoundingRect();var n=Math.max(this.frame_.height,this.frame_.width);this.maxRadius_=this.adapter_.isUnbounded()?n:Math.sqrt(Math.pow(t.frame_.width,2)+Math.pow(t.frame_.height,2))+e.numbers.PADDING,this.initialSize_=n*e.numbers.INITIAL_ORIGIN_SCALE,this.fgScale_=this.maxRadius_/this.initialSize_,this.updateLayoutCssVars_()}},{key:"updateLayoutCssVars_",value:function(){var t=e.strings,n=t.VAR_FG_SIZE,i=t.VAR_LEFT,r=t.VAR_TOP,a=t.VAR_FG_SCALE;this.adapter_.updateCssVariable(n,"".concat(this.initialSize_,"px")),this.adapter_.updateCssVariable(a,this.fgScale_),this.adapter_.isUnbounded()&&(this.unboundedCoords_={left:Math.round(this.frame_.width/2-this.initialSize_/2),top:Math.round(this.frame_.height/2-this.initialSize_/2)},this.adapter_.updateCssVariable(i,"".concat(this.unboundedCoords_.left,"px")),this.adapter_.updateCssVariable(r,"".concat(this.unboundedCoords_.top,"px")))}},{key:"setUnbounded",value:function(t){var n=e.cssClasses.UNBOUNDED;t?this.adapter_.addClass(n):this.adapter_.removeClass(n)}},{key:"handleFocus",value:function(){var t=this;requestAnimationFrame(function(){return t.adapter_.addClass(e.cssClasses.BG_FOCUSED)})}},{key:"handleBlur",value:function(){var t=this;requestAnimationFrame(function(){return t.adapter_.removeClass(e.cssClasses.BG_FOCUSED)})}}]),e}(v.a);n.d(e,"a",function(){return k}),n.d(e,"b",function(){return C});var k=function(t){function e(){var t,n;r()(this,e);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return(n=u()(this,(t=l()(e)).call.apply(t,[this].concat(a)))).disabled=!1,n.unbounded_,n}return f()(e,t),o()(e,[{key:"setUnbounded_",value:function(){this.foundation_.setUnbounded(this.unbounded_)}},{key:"activate",value:function(){this.foundation_.activate()}},{key:"deactivate",value:function(){this.foundation_.deactivate()}},{key:"layout",value:function(){this.foundation_.layout()}},{key:"getDefaultFoundation",value:function(){return new C(e.createAdapter(this))}},{key:"initialSyncWithDOM",value:function(){this.unbounded="mdcRippleIsUnbounded"in this.root_.dataset}},{key:"unbounded",get:function(){return this.unbounded_},set:function(t){this.unbounded_=Boolean(t),this.setUnbounded_()}}],[{key:"attachTo",value:function(t){var n=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).isUnbounded,i=void 0===n?void 0:n,r=new e(t);return void 0!==i&&(r.unbounded=i),r}},{key:"createAdapter",value:function(t){var e=y.b(HTMLElement.prototype);return{browserSupportsCssVars:function(){return y.d(window)},isUnbounded:function(){return t.unbounded},isSurfaceActive:function(){return t.root_[e](":active")},isSurfaceDisabled:function(){return t.disabled},addClass:function(e){return t.root_.classList.add(e)},removeClass:function(e){return t.root_.classList.remove(e)},containsEventTarget:function(e){return t.root_.contains(e)},registerInteractionHandler:function(e,n){return t.root_.addEventListener(e,n,y.a())},deregisterInteractionHandler:function(e,n){return t.root_.removeEventListener(e,n,y.a())},registerDocumentInteractionHandler:function(t,e){return document.documentElement.addEventListener(t,e,y.a())},deregisterDocumentInteractionHandler:function(t,e){return document.documentElement.removeEventListener(t,e,y.a())},registerResizeHandler:function(t){return window.addEventListener("resize",t)},deregisterResizeHandler:function(t){return window.removeEventListener("resize",t)},updateCssVariable:function(e,n){return t.root_.style.setProperty(e,n)},computeBoundingRect:function(){return t.root_.getBoundingClientRect()},getWindowPageOffset:function(){return{x:window.pageXOffset,y:window.pageYOffset}}}}}]),e}(p.a),E=function t(){r()(this,t)};E.prototype.root_,E.prototype.unbounded,E.prototype.disabled}})});