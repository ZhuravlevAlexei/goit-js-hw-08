!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",r=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,l=/^0o[0-7]+$/i,f=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),m=Object.prototype.toString,v=Math.max,g=Math.min,y=function(){return d.Date.now()};function p(e,t,n){var o,r,a,u,l,f,c=0,s=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError(i);function p(t){var n=o,i=r;return o=r=void 0,c=t,u=e.apply(i,n)}function j(e){return c=e,l=setTimeout(O,t),s?p(e):u}function h(e){var n=e-f;return void 0===f||n>=t||n<0||d&&e-c>=a}function O(){var e=y();if(h(e))return w(e);l=setTimeout(O,function(e){var n=t-(e-f);return d?g(n,a-(e-c)):n}(e))}function w(e){return l=void 0,m&&o?p(e):(o=r=void 0,u)}function T(){var e=y(),n=h(e);if(o=arguments,r=this,f=e,n){if(void 0===l)return j(f);if(d)return l=setTimeout(O,t),p(f)}return void 0===l&&(l=setTimeout(O,t)),u}return t=S(t)||0,b(n)&&(s=!!n.leading,a=(d="maxWait"in n)?v(S(n.maxWait)||0,t):a,m="trailing"in n?!!n.trailing:m),T.cancel=function(){void 0!==l&&clearTimeout(l),c=0,o=f=r=l=void 0},T.flush=function(){return void 0===l?u:w(y())},T}function b(t){var n=void 0===t?"undefined":e(o)(t);return!!t&&("object"==n||"function"==n)}function S(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(o)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var i=u.test(t);return i||l.test(t)?f(t.slice(2),i?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError(i);return b(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),p(e,t,{leading:o,maxWait:t,trailing:r})};var j=document.querySelector(".feedback-form"),h=document.querySelector("[name = email]"),O=document.querySelector("[name = message]"),w=(document.querySelector("[type=submit]"),"feedback-form-state"),T={email:"",message:""};function x(){localStorage.setItem(w,JSON.stringify(T))}var N=e(t)(x,500);j.addEventListener("input",(function(e){"email"===e.target.name&&(T.email=e.target.value),"message"===e.target.name&&(T.message=e.target.value),N()})),j.addEventListener("submit",(function(e){console.log(O.value),console.log(h.value),O.value&&h.value?(e.preventDefault(),h.value="",O.value="",console.log(T),T.email="",T.message="",x(),localStorage.removeItem(w)):alert("Заповніть всі поля форми!")}));try{T=JSON.parse(localStorage.getItem(w)),h.value=T.email,O.value=T.message}catch(e){T={email:"",message:""},h.value="",O.value=""}}();
//# sourceMappingURL=03-feedback.af27e440.js.map
