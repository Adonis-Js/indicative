!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t.indicative=t.indicative||{},t.indicative.validations={}))}(this,function(t){"use strict";function e(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function n(t,e){return e={exports:{}},t(e,e.exports),e.exports}function r(t,e,n){e=e||0,n=n||0;var r=new Date(0);r.setUTCFullYear(t,0,4);var u=7*e+n+1-(r.getUTCDay()||7);return r.setUTCDate(r.getUTCDate()+u),r}function u(t,e){e=e||"";var n=t>0?"-":"+",r=Math.abs(t),u=r%60;return n+o(Math.floor(r/60),2)+e+o(u,2)}function o(t,e){for(var n=Math.abs(t).toString();n.length<e;)n="0"+n;return n}var i=function(t){return new Promise(function(e,n){var r=t();if(r)return n(r);e("validation passed")})},a=!1,f=function(t){return"string"==typeof t?t.trim().length>0:null!==t&&void 0!==t},c=function(t){return a?void 0===t:!f(t)},s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l=function(){return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var n=[],r=!0,u=!1,o=void 0;try{for(var i,a=t[Symbol.iterator]();!(r=(i=a.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(t){u=!0,o=t}finally{try{!r&&a.return&&a.return()}finally{if(u)throw o}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),d=/^[a-z]+$/i,v=/^[a-z0-9]+$/i,m=n(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){if(!("string"==typeof t||t instanceof String))throw new TypeError("This library (validator.js) validates strings only")},t.exports=e.default});e(m);var g=n(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments[1];for(var n in e)void 0===t[n]&&(t[n]=e[n]);return t},t.exports=e.default});e(g);var h=n(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.default=function(t,e){(0,r.default)(t);var u=void 0,o=void 0;"object"===(void 0===e?"undefined":n(e))?(u=e.min||0,o=e.max):(u=arguments[1],o=arguments[2]);var i=encodeURI(t).split(/%..|./).length-1;return i>=u&&(void 0===o||i<=o)};var r=function(t){return t&&t.__esModule?t:{default:t}}(m);t.exports=e.default});e(h);var p=n(function(t,e){function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){(0,r.default)(t),(e=(0,u.default)(e,o)).allow_trailing_dot&&"."===t[t.length-1]&&(t=t.substring(0,t.length-1));var n=t.split(".");if(e.require_tld){var i=n.pop();if(!n.length||!/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(i))return!1;if(/[\s\u2002-\u200B\u202F\u205F\u3000\uFEFF\uDB40\uDC20]/.test(i))return!1}for(var a,f=0;f<n.length;f++){if(a=n[f],e.allow_underscores&&(a=a.replace(/_/g,"")),!/^[a-z\u00a1-\uffff0-9-]+$/i.test(a))return!1;if(/[\uff01-\uff5e]/.test(a))return!1;if("-"===a[0]||"-"===a[a.length-1])return!1}return!0};var r=n(m),u=n(g),o={require_tld:!0,allow_underscores:!1,allow_trailing_dot:!1};t.exports=e.default});e(p);var y=e(n(function(t,e){function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){if((0,r.default)(t),(e=(0,u.default)(e,a)).require_display_name||e.allow_display_name){var n=t.match(f);if(n)t=n[1];else if(e.require_display_name)return!1}var v=t.split("@"),m=v.pop(),g=v.join("@"),h=m.toLowerCase();if("gmail.com"!==h&&"googlemail.com"!==h||(g=g.replace(/\./g,"").toLowerCase()),!(0,o.default)(g,{max:64})||!(0,o.default)(m,{max:254}))return!1;if(!(0,i.default)(m,{require_tld:e.require_tld}))return!1;if('"'===g[0])return g=g.slice(1,g.length-1),e.allow_utf8_local_part?d.test(g):s.test(g);for(var p=e.allow_utf8_local_part?l:c,y=g.split("."),D=0;D<y.length;D++)if(!p.test(y[D]))return!1;return!0};var r=n(m),u=n(g),o=n(h),i=n(p),a={allow_display_name:!1,require_display_name:!1,allow_utf8_local_part:!0,require_tld:!0},f=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\,\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF\s]*<(.+)>$/i,c=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i,s=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i,l=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i,d=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i;t.exports=e.default})),D=function(t,e){return"function"==typeof e.indexOf&&e.indexOf(t)>-1},x=/^(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])(?:\.(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])){3}$/,b=function(t){return x.test(t)},F=/^(?:(?:[0-9a-fA-F:]){1,4}(?:(?::(?:[0-9a-fA-F]){1,4}|:)){2,7})+$/,w=function(t){return F.test(t)},S=function(t){return!f(t)||!(t instanceof Date)&&("object"===(void 0===t?"undefined":s(t))&&0===Object.keys(t).length)},M=/https?:\/\/(www\.)?([-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}|localhost)\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/i,_=function(t){return t instanceof Date},T=36e5,Y=6e4,O=2,E=/[T ]/,$=/:/,A=/^(\d{2})$/,H=[/^([+-]\d{2})$/,/^([+-]\d{3})$/,/^([+-]\d{4})$/],I=/^(\d{4})/,k=[/^([+-]\d{4})/,/^([+-]\d{5})/,/^([+-]\d{6})/],z=/^-(\d{2})$/,N=/^-?(\d{3})$/,W=/^-?(\d{2})-?(\d{2})$/,q=/^-?W(\d{2})$/,j=/^-?W(\d{2})-?(\d{1})$/,C=/^(\d{2}([.,]\d*)?)$/,G=/^(\d{2}):?(\d{2}([.,]\d*)?)$/,Z=/^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,P=/([Z+-].*)$/,U=/^(Z)$/,X=/^([+-])(\d{2})$/,R=/^([+-])(\d{2}):?(\d{2})$/,J=function(t,e){if(_(t))return new Date(t.getTime());if("string"!=typeof t)return new Date(t);var n=(e||{}).additionalDigits;n=null==n?O:Number(n);var u=function(t){var e,n={},r=t.split(E);if($.test(r[0])?(n.date=null,e=r[0]):(n.date=r[0],e=r[1]),e){var u=P.exec(e);u?(n.time=e.replace(u[1],""),n.timezone=u[1]):n.time=e}return n}(t),o=function(t,e){var n,r=H[e],u=k[e];if(n=I.exec(t)||u.exec(t)){var o=n[1];return{year:parseInt(o,10),restDateString:t.slice(o.length)}}if(n=A.exec(t)||r.exec(t)){var i=n[1];return{year:100*parseInt(i,10),restDateString:t.slice(i.length)}}return{year:null}}(u.date,n),i=o.year,a=function(t,e){if(null===e)return null;var n,u,o,i;if(0===t.length)return(u=new Date(0)).setUTCFullYear(e),u;if(n=z.exec(t))return u=new Date(0),o=parseInt(n[1],10)-1,u.setUTCFullYear(e,o),u;if(n=N.exec(t)){u=new Date(0);var a=parseInt(n[1],10);return u.setUTCFullYear(e,0,a),u}if(n=W.exec(t)){u=new Date(0),o=parseInt(n[1],10)-1;var f=parseInt(n[2],10);return u.setUTCFullYear(e,o,f),u}if(n=q.exec(t))return i=parseInt(n[1],10)-1,r(e,i);if(n=j.exec(t)){i=parseInt(n[1],10)-1;var c=parseInt(n[2],10)-1;return r(e,i,c)}return null}(o.restDateString,i);if(a){var f,c=a.getTime(),s=0;return u.time&&(s=function(t){var e,n,r;if(e=C.exec(t))return(n=parseFloat(e[1].replace(",",".")))%24*T;if(e=G.exec(t))return n=parseInt(e[1],10),r=parseFloat(e[2].replace(",",".")),n%24*T+r*Y;if(e=Z.exec(t)){n=parseInt(e[1],10),r=parseInt(e[2],10);var u=parseFloat(e[3].replace(",","."));return n%24*T+r*Y+1e3*u}return null}(u.time)),u.timezone?f=function(t){var e,n;return(e=U.exec(t))?0:(e=X.exec(t))?(n=60*parseInt(e[2],10),"+"===e[1]?-n:n):(e=R.exec(t))?(n=60*parseInt(e[2],10)+parseInt(e[3],10),"+"===e[1]?-n:n):0}(u.timezone):(f=new Date(c+s).getTimezoneOffset(),f=new Date(c+s+f*Y).getTimezoneOffset()),new Date(c+s+f*Y)}return new Date(t)},Q=function(t,e){var n=J(t),r=J(e);return n.getTime()>r.getTime()},B=function(t,e){var n=J(t),r=J(e);return n.getTime()<r.getTime()},L=function(t){var e=J(t),n=new Date(0);return n.setFullYear(e.getFullYear(),0,1),n.setHours(0,0,0,0),n},V=function(t){var e=J(t);return e.setHours(0,0,0,0),e},K=6e4,tt=864e5,et=function(t,e){var n=V(t),r=V(e),u=n.getTime()-n.getTimezoneOffset()*K,o=r.getTime()-r.getTimezoneOffset()*K;return Math.round((u-o)/tt)},nt=function(t){var e=J(t);return et(e,L(e))+1},rt=function(t,e){var n=e?Number(e.weekStartsOn)||0:0,r=J(t),u=r.getDay(),o=(u<n?7:0)+u-n;return r.setDate(r.getDate()-o),r.setHours(0,0,0,0),r},ut=function(t){return rt(t,{weekStartsOn:1})},ot=function(t){var e=J(t),n=e.getFullYear(),r=new Date(0);r.setFullYear(n+1,0,4),r.setHours(0,0,0,0);var u=ut(r),o=new Date(0);o.setFullYear(n,0,4),o.setHours(0,0,0,0);var i=ut(o);return e.getTime()>=u.getTime()?n+1:e.getTime()>=i.getTime()?n:n-1},it=function(t){var e=ot(t),n=new Date(0);return n.setFullYear(e,0,4),n.setHours(0,0,0,0),ut(n)},at=6048e5,ft=function(t){var e=J(t),n=ut(e).getTime()-it(e).getTime();return Math.round(n/at)+1},ct=function(t){if(_(t))return!isNaN(t);throw new TypeError(toString.call(t)+" is not an instance of Date")},st=["M","MM","Q","D","DD","DDD","DDDD","d","E","W","WW","YY","YYYY","GG","GGGG","H","HH","h","hh","m","mm","s","ss","S","SS","SSS","Z","ZZ","X","x"],lt=function(t){var e=[];for(var n in t)t.hasOwnProperty(n)&&e.push(n);var r=st.concat(e).sort().reverse();return new RegExp("(\\[[^\\[]*\\])|(\\\\)?("+r.join("|")+"|.)","g")},dt=function(){var t=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],e=["January","February","March","April","May","June","July","August","September","October","November","December"],n=["Su","Mo","Tu","We","Th","Fr","Sa"],r=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],u=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],o=["AM","PM"],i=["am","pm"],a=["a.m.","p.m."],f={MMM:function(e){return t[e.getMonth()]},MMMM:function(t){return e[t.getMonth()]},dd:function(t){return n[t.getDay()]},ddd:function(t){return r[t.getDay()]},dddd:function(t){return u[t.getDay()]},A:function(t){return t.getHours()/12>=1?o[1]:o[0]},a:function(t){return t.getHours()/12>=1?i[1]:i[0]},aa:function(t){return t.getHours()/12>=1?a[1]:a[0]}};return["M","D","DDD","d","Q","W"].forEach(function(t){f[t+"o"]=function(e,n){return function(t){var e=t%100;if(e>20||e<10)switch(e%10){case 1:return t+"st";case 2:return t+"nd";case 3:return t+"rd"}return t+"th"}(n[t](e))}}),{formatters:f,formattingTokensRegExp:lt(f)}},vt={distanceInWords:function(){var t={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};return{localize:function(e,n,r){r=r||{};var u;return u="string"==typeof t[e]?t[e]:1===n?t[e].one:t[e].other.replace("{{count}}",n),r.addSuffix?r.comparison>0?"in "+u:u+" ago":u}}}(),format:dt()},mt={M:function(t){return t.getMonth()+1},MM:function(t){return o(t.getMonth()+1,2)},Q:function(t){return Math.ceil((t.getMonth()+1)/3)},D:function(t){return t.getDate()},DD:function(t){return o(t.getDate(),2)},DDD:function(t){return nt(t)},DDDD:function(t){return o(nt(t),3)},d:function(t){return t.getDay()},E:function(t){return t.getDay()||7},W:function(t){return ft(t)},WW:function(t){return o(ft(t),2)},YY:function(t){return o(t.getFullYear(),4).substr(2)},YYYY:function(t){return o(t.getFullYear(),4)},GG:function(t){return String(ot(t)).substr(2)},GGGG:function(t){return ot(t)},H:function(t){return t.getHours()},HH:function(t){return o(t.getHours(),2)},h:function(t){var e=t.getHours();return 0===e?12:e>12?e%12:e},hh:function(t){return o(mt.h(t),2)},m:function(t){return t.getMinutes()},mm:function(t){return o(t.getMinutes(),2)},s:function(t){return t.getSeconds()},ss:function(t){return o(t.getSeconds(),2)},S:function(t){return Math.floor(t.getMilliseconds()/100)},SS:function(t){return o(Math.floor(t.getMilliseconds()/10),2)},SSS:function(t){return o(t.getMilliseconds(),3)},Z:function(t){return u(t.getTimezoneOffset(),":")},ZZ:function(t){return u(t.getTimezoneOffset())},X:function(t){return Math.floor(t.getTime()/1e3)},x:function(t){return t.getTime()}},gt=function(t,e,n){var r=e?String(e):"YYYY-MM-DDTHH:mm:ss.SSSZ",u=(n||{}).locale,o=vt.format.formatters,i=vt.format.formattingTokensRegExp;u&&u.format&&u.format.formatters&&(o=u.format.formatters,u.format.formattingTokensRegExp&&(i=u.format.formattingTokensRegExp));var a=J(t);return ct(a)?function(t,e,n){var r,u,o=t.match(n),i=o.length;for(r=0;r<i;r++)u=e[o[r]]||mt[o[r]],o[r]=u||function(t){return t.match(/\[[\s\S]/)?t.replace(/^\[|]$/g,""):t.replace(/\\/g,"")}(o[r]);return function(t){for(var e="",n=0;n<i;n++)o[n]instanceof Function?e+=o[n](t,mt):e+=o[n];return e}}(r,o,i)(a):"Invalid Date"},ht=function(t){var e=J(t),n=e.getFullYear(),r=e.getMonth(),u=new Date(0);return u.setFullYear(n,r+1,0),u.setHours(0,0,0,0),u.getDate()},pt=function(t,e){var n=J(t),r=Number(e),u=n.getMonth()+r,o=new Date(0);o.setFullYear(n.getFullYear(),u,1),o.setHours(0,0,0,0);var i=ht(o);return n.setMonth(u,Math.min(i,n.getDate())),n},yt=function(t,e){var n=J(t),r=Number(e);return n.setDate(n.getDate()+r),n},Dt=function(t,e){var n=J(t).getTime(),r=Number(e);return new Date(n+r)},xt=function(t,e,n){var r={years:function(t){return 12*t},quarters:function(t){return 3*t},months:function(t){return t}},u={weeks:function(t){return 7*t},days:function(t){return t}},o={hours:function(t){return 36e5*t},minutes:function(t){return 6e4*t},seconds:function(t){return 1e3*t},milliseconds:function(t){return t}};return t=Number(t),r[e]?pt(new Date,"-"===n?-r[e](t):r[e](t)):u[e]?yt(new Date,"-"===n?-u[e](t):u[e](t)):o[e]?Dt(new Date,"-"===n?-o[e](t):o[e](t)):void 0};t.above=function(t,e,n,r,u){var o=l(r,1)[0];return i(function(){if(!o)return new Error("above:make sure to define minValue");var r=u(t,e);return c(r)||function(t,e){return Number(t)>Number(e)}(r,o)?void 0:n})},t.accepted=function(t,e,n,r,u){return i(function(){var r=u(t,e);if(!c(r)&&!function(t){return f(t)&&!1!==t&&0!==t}(r))return n})},t.alpha=function(t,e,n,r,u){return i(function(){var r=u(t,e);if(!c(r)&&!function(t){return d.test(t)}(r))return n})},t.alphaNumeric=function(t,e,n,r,u){return i(function(){var r=u(t,e);if(!c(r)&&!function(t){return v.test(t)}(r))return n})},t.array=function(t,e,n,r,u){return i(function(){var r=u(t,e);if(!c(r)&&!Array.isArray(r))return n})},t.boolean=function(t,e,n,r,u){return i(function(){var r=u(t,e);if(!c(r)&&!function(t){var e=[!0,!1,0,1];return arguments.length>1&&void 0!==arguments[1]&&!arguments[1]?e.map(function(t){return String(t)}).indexOf(String(t))>-1:e.indexOf(t)>-1}(r,!1))return n})},t.confirmed=function(t,e,n,r,u){return i(function(){var r=u(t,e);if(!c(r)&&!function(t,e){return t===e}(r,u(t,e+"_confirmation")))return n})},t.different=function(t,e,n,r,u){var o=l(r,1)[0];return i(function(){if(!o)throw new Error("different:make sure to define target field for comparison");var r=u(t,e),i=u(t,o);if(!c(r)&&i&&i===r)return n})},t.email=function(t,e,n,r,u){return i(function(){var r=u(t,e);if(!c(r)&&!function(t,e){return y(String(t),e)}(r))return n})},t.endsWith=function(t,e,n,r,u){var o=l(r,1)[0];return i(function(){if(!o)throw new Error("endsWith:make sure to define the matching substring");var r=u(t,e);if(!c(r)&&String(r).trim().substr(-o.length)!==String(o))return n})},t.equals=function(t,e,n,r,u){var o=r[0];return i(function(){var r=u(t,e);if(!c(r)&&o!=r)return n})},t.in=function(t,e,n,r,u){return i(function(){var o=u(t,e);if(!c(o)&&!D(o,r))return n})},t.includes=function(t,e,n,r,u){var o=l(r,1)[0];return i(function(){var r=u(t,e);if(!c(r)&&-1===String(r).indexOf(o))return n})},t.integer=function(t,e,n,r,u){return i(function(){var r=u(t,e);if(!c(r)&&!Number.isInteger(r))return n})},t.ip=function(t,e,n,r,u){return i(function(){var r=u(t,e);if(!c(r)&&!function(t){return b(t)||w(t)}(r))return n})},t.ipv4=function(t,e,n,r,u){return i(function(){var r=u(t,e);if(!c(r)&&!b(r))return n})},t.ipv6=function(t,e,n,r,u){return i(function(){var r=u(t,e);if(!c(r)&&!w(r))return n})},t.json=function(t,e,n,r,u){return i(function(){var r=u(t,e);if(!c(r)&&!function(t){try{return JSON.parse(t),!0}catch(t){return!1}}(r))return n})},t.max=function(t,e,n,r,u){var o=l(r,1)[0];return i(function(){if(!o)throw new Error("max:make sure to define max length");var r=u(t,e);if(!c(r)&&String(r).length>o)return n})},t.min=function(t,e,n,r,u){var o=l(r,1)[0];return i(function(){if(!o)throw new Error("min:make sure to define min length");var r=u(t,e);if(!c(r)&&String(r).length<o)return n})},t.notEquals=function(t,e,n,r,u){var o=l(r,1)[0];return i(function(){var r=u(t,e);if(!c(r)&&o==r)return n})},t.notIn=function(t,e,n,r,u){return i(function(){var o=u(t,e);if(!c(o)&&D(o,r))return n})},t.number=function(t,e,n,r,u){return i(function(){var r=u(t,e);if(!c(r)&&!function(t){return"number"==typeof t&&!isNaN(t)}(r))return n})},t.object=function(t,e,n,r,u){return i(function(){var r=u(t,e);if(!c(r)&&!function(t){return t instanceof Object&&!Array.isArray(t)}(r))return n})},t.range=function(t,e,n,r,u){var o=l(r,2),a=o[0],f=o[1];return i(function(){if(!a||!f)return new Error("range:min and max values are required for range validation");var r=u(t,e);return c(r)||function(t,e,n){return(t=Number(t))>Number(e)&&t<Number(n)}(r,a,f)?void 0:n})},t.regex=function(t,e,n,r,u){var o=l(r,2),a=o[0],f=o[1];return i(function(){var r=u(t,e),o=a instanceof RegExp?a:new RegExp(a,f);if(!c(r)&&!o.test(r))return n})},t.required=function(t,e,n,r,u){return i(function(){if(S(u(t,e)))return n})},t.requiredIf=function(t,e,n,r,u){var o=l(r,1)[0];return i(function(){if(f(u(t,o))&&S(u(t,e)))return n})},t.requiredWhen=function(t,e,n,r,u){var o=l(r,2),a=o[0],f=o[1];return i(function(){var r=u(t,a);if(String(f)===String(r)&&S(u(t,e)))return n})},t.requiredWithAll=function(t,e,n,r,u){return i(function(){if(!r.some(function(e){return!f(u(t,e))})&&S(u(t,e)))return n})},t.requiredWithAny=function(t,e,n,r,u){return i(function(){if(r.some(function(e){return f(u(t,e))})&&S(u(t,e)))return n})},t.requiredWithoutAll=function(t,e,n,r,u){return i(function(){if(!r.some(function(e){return f(u(t,e))})&&S(u(t,e)))return n})},t.requiredWithoutAny=function(t,e,n,r,u){return i(function(){if(r.some(function(e){return!f(u(t,e))})&&S(u(t,e)))return n})},t.same=function(t,e,n,r,u){var o=l(r,1)[0];return i(function(){var r=u(t,e),i=u(t,o);if(!c(r)&&f(i)&&i!==r)return n})},t.startsWith=function(t,e,n,r,u){var o=l(r,1)[0];return i(function(){if(!o)throw new Error("startsWith:make sure to define the matching substring");var r=u(t,e);if(!c(r)&&String(r).trim().substr(0,o.length)!==String(o))return n})},t.string=function(t,e,n,r,u){return i(function(){var r=u(t,e);if(!c(r)&&!function(t){return"string"==typeof t}(r))return n})},t.under=function(t,e,n,r,u){var o=l(r,1)[0];return i(function(){if(!o)throw new Error("under:make sure to pass the max value");var r=u(t,e);if(!c(r)&&Number(r)>=Number(o))return n})},t.url=function(t,e,n,r,u){return i(function(){var r=u(t,e);if(!c(r)&&!function(t){return M.test(t)}(r))return n})},t.after=function(t,e,n,r,u){var o=l(r,1)[0];return i(function(){if(!o)return new Error("after:make sure to define the after date");var r=u(t,e);return c(r)||Q(r,o)?void 0:n})},t.before=function(t,e,n,r,u){var o=l(r,1)[0];return i(function(){if(!o)return new Error("before:make sure to define the before date");var r=u(t,e);return c(r)||B(r,o)?void 0:n})},t.date=function(t,e,n,r,u){return i(function(){var r=u(t,e);if(!c(r)&&!function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t instanceof Date==1||!e&&"Invalid Date"!==new Date(t).toString()}(r,!1))return n})},t.dateFormat=function(t,e,n,r,u){return i(function(){if(0===r.length)throw new Error("dateFormat:make sure to define atleast one date format");var o=u(t,e);if(!c(o)&&!function(t,e){return(Array.isArray(e)?e:[e]).some(function(e){var n=gt(t,e);return"Invalid Date"!==n&&n===t})}(o,r))return n})},t.beforeOffsetOf=function(t,e,n,r,u){var o=l(r,2),a=o[0],f=o[1];return i(function(){if(!a||!f)return new Error("beforeOffsetOf:make sure to define offset unit and key");var r=u(t,e);return c(r)||function(t,e,n){var r=xt(e,n,"-");return!!r&&B(t,r)}(r,a,f)?void 0:n})},t.afterOffsetOf=function(t,e,n,r,u){var o=l(r,2),a=o[0],f=o[1];return i(function(){if(!a||!f)return new Error("afterOffsetOf:make sure to define offset unit and key");var r=u(t,e);return c(r)||function(t,e,n){var r=xt(e,n,"+");return!!r&&Q(t,r)}(r,a,f)?void 0:n})},Object.defineProperty(t,"__esModule",{value:!0})});
