(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{303:function(e,t,n){"use strict";n(166),n(168);var u=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var r=n(92),o=u(n(307)),s=u(n(308)),c=function(e,t,n){r.onMounted((function(){var u,o=function(e){t.value&&t.value(e)};(u=e?document.querySelector(e):window.document)&&u&&u.addEventListener&&u.addEventListener(n,o),r.onUnmounted((function(){u&&u.removeEventListener&&u.removeEventListener(n,o)}))}))};t.default=function(e){var t=o.default(),n=t[0],u=t[1],r=o.default(),i=r[0],a=r[1],f=o.default(),l=f[0],d=f[1],v=o.default(),_=v[0],p=v[1],m=o.default(),M=m[0],h=m[1],X=o.default(),Y=X[0],w=X[1],b=o.default(),y=b[0],O=b[1];return e&&"string"!=typeof e?s.default("mouse event selector must be a string value"):(c(e,n,"mousedown"),c(e,i,"mouseenter"),c(e,l,"mouseleave"),c(e,_,"mousemove"),c(e,M,"mouseout"),c(e,Y,"mouseover"),c(e,y,"mouseup"),Object.freeze({onMouseDown:u,onMouseEnter:a,onMouseLeave:d,onMouseMove:p,onMouseOut:h,onMouseOver:w,onMouseUp:O}))}},305:function(e,t,n){"use strict";n(166);var u=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var r=u(n(303)),o=n(92);t.default=function(e){var t=o.reactive({clientX:0,clientY:0,screenX:0,screenY:0});return(0,r.default(e).onMouseMove)((function(e){var n=function(e){return{clientX:e.clientX,clientY:e.clientY,screenX:e.screenX,screenY:e.screenY}}(e);t.clientX=n.clientX,t.clientY=n.clientY,t.screenX=n.screenX,t.screenY=n.screenY})),{clientX:o.computed((function(){return t.clientX})),clientY:o.computed((function(){return t.clientY})),screenX:o.computed((function(){return t.screenX})),screenY:o.computed((function(){return t.screenY}))}}},306:function(e,t,n){"use strict";n(166),Object.defineProperty(t,"__esModule",{value:!0});var u=n(303);t.useMouseEvents=u.default;var r=n(305);t.useMouseState=r.default;var o=n(309);t.useMouse=o.default},307:function(e,t,n){"use strict";n(166),Object.defineProperty(t,"__esModule",{value:!0});var u=n(92);t.default=function(e){var t=u.ref(e);t.value=e;return[t,function(e){if("function"!=typeof e)throw new Error("the argument supplied to the 'setHandler' function should be of type function");t.value=e}]}},308:function(e,t,n){"use strict";n(45),n(93),n(166),Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e){return new Proxy(Object.create(null),{get:function(t,n){return n&&"string"==typeof n&&"on"===n.slice(0,2)?function(){throw new Error(e)}:{error:e}}})}},309:function(e,t,n){"use strict";n(166);var u=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var r=u(n(303)),o=u(n(305));t.default=function(e){return[o.default(e),r.default(e)]}},326:function(e,t,n){},362:function(e,t,n){"use strict";var u=n(326);n.n(u).a},372:function(e,t,n){"use strict";n.r(t);var u=n(306),r={setup:function(){var e=Object(u.useMouseState)();return{screenX:e.screenX,screenY:e.screenY}}},o=(n(362),n(43)),s=Object(o.a)(r,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"home-demo"}},[t("div",{attrs:{id:"demo-area"}},[this._v("\n    Coordinate：("+this._s(this.screenX)+", "+this._s(this.screenY)+")\n  ")])])}),[],!1,null,"180d8783",null);t.default=s.exports}}]);