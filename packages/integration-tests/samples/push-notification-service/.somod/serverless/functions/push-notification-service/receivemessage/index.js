var ft=Object.create;var j=Object.defineProperty;var ot=Object.getOwnPropertyDescriptor;var lt=Object.getOwnPropertyNames;var ct=Object.getPrototypeOf,st=Object.prototype.hasOwnProperty;var oe=e=>j(e,"__esModule",{value:!0});var y=(e,u)=>()=>(u||e((u={exports:{}}).exports,u),u.exports),dt=(e,u)=>{for(var l in u)j(e,l,{get:u[l],enumerable:!0})},le=(e,u,l,r)=>{if(u&&typeof u=="object"||typeof u=="function")for(let t of lt(u))!st.call(e,t)&&(l||t!=="default")&&j(e,t,{get:()=>u[t],enumerable:!(r=ot(u,t))||r.enumerable});return e},ce=(e,u)=>le(oe(j(e!=null?ft(ct(e)):{},"default",!u&&e&&e.__esModule?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e),_t=(e=>(u,l)=>e&&e.get(u)||(l=le(oe({}),u,1),e&&e.set(u,l),l))(typeof WeakMap!="undefined"?new WeakMap:0);var Ce=y((Cr,U)=>{var se,de,_e,ve,ye,pe,he,ge,me,we,be,Oe,Pe,R,Z,xe,Se,qe,q,Me,De,Ie,Te,je,Ee,Re,Ae,Ue,A;(function(e){var u=typeof global=="object"?global:typeof self=="object"?self:typeof this=="object"?this:{};typeof define=="function"&&define.amd?define("tslib",["exports"],function(r){e(l(u,l(r)))}):typeof U=="object"&&typeof U.exports=="object"?e(l(u,l(U.exports))):e(l(u));function l(r,t){return r!==u&&(typeof Object.create=="function"?Object.defineProperty(r,"__esModule",{value:!0}):r.__esModule=!0),function(n,a){return r[n]=t?t(n,a):a}}})(function(e){var u=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,t){r.__proto__=t}||function(r,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n])};se=function(r,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");u(r,t);function n(){this.constructor=r}r.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)},de=Object.assign||function(r){for(var t,n=1,a=arguments.length;n<a;n++){t=arguments[n];for(var f in t)Object.prototype.hasOwnProperty.call(t,f)&&(r[f]=t[f])}return r},_e=function(r,t){var n={};for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&t.indexOf(a)<0&&(n[a]=r[a]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var f=0,a=Object.getOwnPropertySymbols(r);f<a.length;f++)t.indexOf(a[f])<0&&Object.prototype.propertyIsEnumerable.call(r,a[f])&&(n[a[f]]=r[a[f]]);return n},ve=function(r,t,n,a){var f=arguments.length,o=f<3?t:a===null?a=Object.getOwnPropertyDescriptor(t,n):a,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(r,t,n,a);else for(var s=r.length-1;s>=0;s--)(i=r[s])&&(o=(f<3?i(o):f>3?i(t,n,o):i(t,n))||o);return f>3&&o&&Object.defineProperty(t,n,o),o},ye=function(r,t){return function(n,a){t(n,a,r)}},pe=function(r,t,n,a,f,o){function i(M){if(M!==void 0&&typeof M!="function")throw new TypeError("Function expected");return M}for(var s=a.kind,d=s==="getter"?"get":s==="setter"?"set":"value",c=!t&&r?a.static?r:r.prototype:null,_=t||(c?Object.getOwnPropertyDescriptor(c,a.name):{}),h,v=!1,m=n.length-1;m>=0;m--){var O={};for(var P in a)O[P]=P==="access"?{}:a[P];for(var P in a.access)O.access[P]=a.access[P];O.addInitializer=function(M){if(v)throw new TypeError("Cannot add initializers after decoration has completed");o.push(i(M||null))};var x=(0,n[m])(s==="accessor"?{get:_.get,set:_.set}:_[d],O);if(s==="accessor"){if(x===void 0)continue;if(x===null||typeof x!="object")throw new TypeError("Object expected");(h=i(x.get))&&(_.get=h),(h=i(x.set))&&(_.set=h),(h=i(x.init))&&f.push(h)}else(h=i(x))&&(s==="field"?f.push(h):_[d]=h)}c&&Object.defineProperty(c,a.name,_),v=!0},he=function(r,t,n){for(var a=arguments.length>2,f=0;f<t.length;f++)n=a?t[f].call(r,n):t[f].call(r);return a?n:void 0},ge=function(r){return typeof r=="symbol"?r:"".concat(r)},me=function(r,t,n){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(r,"name",{configurable:!0,value:n?"".concat(n," ",t):t})},we=function(r,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,t)},be=function(r,t,n,a){function f(o){return o instanceof n?o:new n(function(i){i(o)})}return new(n||(n=Promise))(function(o,i){function s(_){try{c(a.next(_))}catch(h){i(h)}}function d(_){try{c(a.throw(_))}catch(h){i(h)}}function c(_){_.done?o(_.value):f(_.value).then(s,d)}c((a=a.apply(r,t||[])).next())})},Oe=function(r,t){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},a,f,o,i;return i={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(i[Symbol.iterator]=function(){return this}),i;function s(c){return function(_){return d([c,_])}}function d(c){if(a)throw new TypeError("Generator is already executing.");for(;i&&(i=0,c[0]&&(n=0)),n;)try{if(a=1,f&&(o=c[0]&2?f.return:c[0]?f.throw||((o=f.return)&&o.call(f),0):f.next)&&!(o=o.call(f,c[1])).done)return o;switch(f=0,o&&(c=[c[0]&2,o.value]),c[0]){case 0:case 1:o=c;break;case 4:return n.label++,{value:c[1],done:!1};case 5:n.label++,f=c[1],c=[0];continue;case 7:c=n.ops.pop(),n.trys.pop();continue;default:if(o=n.trys,!(o=o.length>0&&o[o.length-1])&&(c[0]===6||c[0]===2)){n=0;continue}if(c[0]===3&&(!o||c[1]>o[0]&&c[1]<o[3])){n.label=c[1];break}if(c[0]===6&&n.label<o[1]){n.label=o[1],o=c;break}if(o&&n.label<o[2]){n.label=o[2],n.ops.push(c);break}o[2]&&n.ops.pop(),n.trys.pop();continue}c=t.call(r,n)}catch(_){c=[6,_],f=0}finally{a=o=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}},Pe=function(r,t){for(var n in r)n!=="default"&&!Object.prototype.hasOwnProperty.call(t,n)&&A(t,r,n)},A=Object.create?function(r,t,n,a){a===void 0&&(a=n);var f=Object.getOwnPropertyDescriptor(t,n);(!f||("get"in f?!t.__esModule:f.writable||f.configurable))&&(f={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(r,a,f)}:function(r,t,n,a){a===void 0&&(a=n),r[a]=t[n]},R=function(r){var t=typeof Symbol=="function"&&Symbol.iterator,n=t&&r[t],a=0;if(n)return n.call(r);if(r&&typeof r.length=="number")return{next:function(){return r&&a>=r.length&&(r=void 0),{value:r&&r[a++],done:!r}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")},Z=function(r,t){var n=typeof Symbol=="function"&&r[Symbol.iterator];if(!n)return r;var a=n.call(r),f,o=[],i;try{for(;(t===void 0||t-- >0)&&!(f=a.next()).done;)o.push(f.value)}catch(s){i={error:s}}finally{try{f&&!f.done&&(n=a.return)&&n.call(a)}finally{if(i)throw i.error}}return o},xe=function(){for(var r=[],t=0;t<arguments.length;t++)r=r.concat(Z(arguments[t]));return r},Se=function(){for(var r=0,t=0,n=arguments.length;t<n;t++)r+=arguments[t].length;for(var a=Array(r),f=0,t=0;t<n;t++)for(var o=arguments[t],i=0,s=o.length;i<s;i++,f++)a[f]=o[i];return a},qe=function(r,t,n){if(n||arguments.length===2)for(var a=0,f=t.length,o;a<f;a++)(o||!(a in t))&&(o||(o=Array.prototype.slice.call(t,0,a)),o[a]=t[a]);return r.concat(o||Array.prototype.slice.call(t))},q=function(r){return this instanceof q?(this.v=r,this):new q(r)},Me=function(r,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var a=n.apply(r,t||[]),f,o=[];return f={},i("next"),i("throw"),i("return"),f[Symbol.asyncIterator]=function(){return this},f;function i(v){a[v]&&(f[v]=function(m){return new Promise(function(O,P){o.push([v,m,O,P])>1||s(v,m)})})}function s(v,m){try{d(a[v](m))}catch(O){h(o[0][3],O)}}function d(v){v.value instanceof q?Promise.resolve(v.value.v).then(c,_):h(o[0][2],v)}function c(v){s("next",v)}function _(v){s("throw",v)}function h(v,m){v(m),o.shift(),o.length&&s(o[0][0],o[0][1])}},De=function(r){var t,n;return t={},a("next"),a("throw",function(f){throw f}),a("return"),t[Symbol.iterator]=function(){return this},t;function a(f,o){t[f]=r[f]?function(i){return(n=!n)?{value:q(r[f](i)),done:!1}:o?o(i):i}:o}},Ie=function(r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t=r[Symbol.asyncIterator],n;return t?t.call(r):(r=typeof R=="function"?R(r):r[Symbol.iterator](),n={},a("next"),a("throw"),a("return"),n[Symbol.asyncIterator]=function(){return this},n);function a(o){n[o]=r[o]&&function(i){return new Promise(function(s,d){i=r[o](i),f(s,d,i.done,i.value)})}}function f(o,i,s,d){Promise.resolve(d).then(function(c){o({value:c,done:s})},i)}},Te=function(r,t){return Object.defineProperty?Object.defineProperty(r,"raw",{value:t}):r.raw=t,r};var l=Object.create?function(r,t){Object.defineProperty(r,"default",{enumerable:!0,value:t})}:function(r,t){r.default=t};je=function(r){if(r&&r.__esModule)return r;var t={};if(r!=null)for(var n in r)n!=="default"&&Object.prototype.hasOwnProperty.call(r,n)&&A(t,r,n);return l(t,r),t},Ee=function(r){return r&&r.__esModule?r:{default:r}},Re=function(r,t,n,a){if(n==="a"&&!a)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?r!==t||!a:!t.has(r))throw new TypeError("Cannot read private member from an object whose class did not declare it");return n==="m"?a:n==="a"?a.call(r):a?a.value:t.get(r)},Ae=function(r,t,n,a,f){if(a==="m")throw new TypeError("Private method is not writable");if(a==="a"&&!f)throw new TypeError("Private accessor was defined without a setter");if(typeof t=="function"?r!==t||!f:!t.has(r))throw new TypeError("Cannot write private member to an object whose class did not declare it");return a==="a"?f.call(r,n):f?f.value=n:t.set(r,n),n},Ue=function(r,t){if(t===null||typeof t!="object"&&typeof t!="function")throw new TypeError("Cannot use 'in' operator on non-object");return typeof r=="function"?t===r:r.has(t)},e("__extends",se),e("__assign",de),e("__rest",_e),e("__decorate",ve),e("__param",ye),e("__esDecorate",pe),e("__runInitializers",he),e("__propKey",ge),e("__setFunctionName",me),e("__metadata",we),e("__awaiter",be),e("__generator",Oe),e("__exportStar",Pe),e("__createBinding",A),e("__values",R),e("__read",Z),e("__spread",xe),e("__spreadArrays",Se),e("__spreadArray",qe),e("__await",q),e("__asyncGenerator",Me),e("__asyncDelegator",De),e("__asyncValues",Ie),e("__makeTemplateObject",Te),e("__importStar",je),e("__importDefault",Ee),e("__classPrivateFieldGet",Re),e("__classPrivateFieldSet",Ae),e("__classPrivateFieldIn",Ue)})});var te=y(ee=>{"use strict";Object.defineProperty(ee,"__esModule",{value:!0});ee.default=gt;var pt=ht(require("crypto"));function ht(e){return e&&e.__esModule?e:{default:e}}var N=new Uint8Array(256),C=N.length;function gt(){return C>N.length-16&&(pt.default.randomFillSync(N),C=0),N.slice(C,C+=16)}});var Le=y(F=>{"use strict";Object.defineProperty(F,"__esModule",{value:!0});F.default=void 0;var mt=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;F.default=mt});var D=y(B=>{"use strict";Object.defineProperty(B,"__esModule",{value:!0});B.default=void 0;var wt=bt(Le());function bt(e){return e&&e.__esModule?e:{default:e}}function Ot(e){return typeof e=="string"&&wt.default.test(e)}var Pt=Ot;B.default=Pt});var T=y(I=>{"use strict";Object.defineProperty(I,"__esModule",{value:!0});I.default=void 0;I.unsafeStringify=Ge;var xt=St(D());function St(e){return e&&e.__esModule?e:{default:e}}var p=[];for(let e=0;e<256;++e)p.push((e+256).toString(16).slice(1));function Ge(e,u=0){return(p[e[u+0]]+p[e[u+1]]+p[e[u+2]]+p[e[u+3]]+"-"+p[e[u+4]]+p[e[u+5]]+"-"+p[e[u+6]]+p[e[u+7]]+"-"+p[e[u+8]]+p[e[u+9]]+"-"+p[e[u+10]]+p[e[u+11]]+p[e[u+12]]+p[e[u+13]]+p[e[u+14]]+p[e[u+15]]).toLowerCase()}function qt(e,u=0){let l=Ge(e,u);if(!(0,xt.default)(l))throw TypeError("Stringified UUID is invalid");return l}var Mt=qt;I.default=Mt});var Ke=y(L=>{"use strict";Object.defineProperty(L,"__esModule",{value:!0});L.default=void 0;var Dt=Tt(te()),It=T();function Tt(e){return e&&e.__esModule?e:{default:e}}var He,re,ne=0,ae=0;function jt(e,u,l){let r=u&&l||0,t=u||new Array(16);e=e||{};let n=e.node||He,a=e.clockseq!==void 0?e.clockseq:re;if(n==null||a==null){let c=e.random||(e.rng||Dt.default)();n==null&&(n=He=[c[0]|1,c[1],c[2],c[3],c[4],c[5]]),a==null&&(a=re=(c[6]<<8|c[7])&16383)}let f=e.msecs!==void 0?e.msecs:Date.now(),o=e.nsecs!==void 0?e.nsecs:ae+1,i=f-ne+(o-ae)/1e4;if(i<0&&e.clockseq===void 0&&(a=a+1&16383),(i<0||f>ne)&&e.nsecs===void 0&&(o=0),o>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");ne=f,ae=o,re=a,f+=122192928e5;let s=((f&268435455)*1e4+o)%4294967296;t[r++]=s>>>24&255,t[r++]=s>>>16&255,t[r++]=s>>>8&255,t[r++]=s&255;let d=f/4294967296*1e4&268435455;t[r++]=d>>>8&255,t[r++]=d&255,t[r++]=d>>>24&15|16,t[r++]=d>>>16&255,t[r++]=a>>>8|128,t[r++]=a&255;for(let c=0;c<6;++c)t[r+c]=n[c];return u||(0,It.unsafeStringify)(t)}var Et=jt;L.default=Et});var ue=y(G=>{"use strict";Object.defineProperty(G,"__esModule",{value:!0});G.default=void 0;var Rt=At(D());function At(e){return e&&e.__esModule?e:{default:e}}function Ut(e){if(!(0,Rt.default)(e))throw TypeError("Invalid UUID");let u,l=new Uint8Array(16);return l[0]=(u=parseInt(e.slice(0,8),16))>>>24,l[1]=u>>>16&255,l[2]=u>>>8&255,l[3]=u&255,l[4]=(u=parseInt(e.slice(9,13),16))>>>8,l[5]=u&255,l[6]=(u=parseInt(e.slice(14,18),16))>>>8,l[7]=u&255,l[8]=(u=parseInt(e.slice(19,23),16))>>>8,l[9]=u&255,l[10]=(u=parseInt(e.slice(24,36),16))/1099511627776&255,l[11]=u/4294967296&255,l[12]=u>>>24&255,l[13]=u>>>16&255,l[14]=u>>>8&255,l[15]=u&255,l}var Ct=Ut;G.default=Ct});var ie=y(S=>{"use strict";Object.defineProperty(S,"__esModule",{value:!0});S.URL=S.DNS=void 0;S.default=Gt;var Nt=T(),Ft=Bt(ue());function Bt(e){return e&&e.__esModule?e:{default:e}}function Lt(e){e=unescape(encodeURIComponent(e));let u=[];for(let l=0;l<e.length;++l)u.push(e.charCodeAt(l));return u}var Ve="6ba7b810-9dad-11d1-80b4-00c04fd430c8";S.DNS=Ve;var Je="6ba7b811-9dad-11d1-80b4-00c04fd430c8";S.URL=Je;function Gt(e,u,l){function r(t,n,a,f){var o;if(typeof t=="string"&&(t=Lt(t)),typeof n=="string"&&(n=(0,Ft.default)(n)),((o=n)===null||o===void 0?void 0:o.length)!==16)throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");let i=new Uint8Array(16+t.length);if(i.set(n),i.set(t,n.length),i=l(i),i[6]=i[6]&15|u,i[8]=i[8]&63|128,a){f=f||0;for(let s=0;s<16;++s)a[f+s]=i[s];return a}return(0,Nt.unsafeStringify)(i)}try{r.name=e}catch{}return r.DNS=Ve,r.URL=Je,r}});var ze=y(H=>{"use strict";Object.defineProperty(H,"__esModule",{value:!0});H.default=void 0;var Ht=Kt(require("crypto"));function Kt(e){return e&&e.__esModule?e:{default:e}}function Vt(e){return Array.isArray(e)?e=Buffer.from(e):typeof e=="string"&&(e=Buffer.from(e,"utf8")),Ht.default.createHash("md5").update(e).digest()}var Jt=Vt;H.default=Jt});var Ye=y(K=>{"use strict";Object.defineProperty(K,"__esModule",{value:!0});K.default=void 0;var zt=We(ie()),Wt=We(ze());function We(e){return e&&e.__esModule?e:{default:e}}var Yt=(0,zt.default)("v3",48,Wt.default),$t=Yt;K.default=$t});var $e=y(V=>{"use strict";Object.defineProperty(V,"__esModule",{value:!0});V.default=void 0;var kt=Qt(require("crypto"));function Qt(e){return e&&e.__esModule?e:{default:e}}var Xt={randomUUID:kt.default.randomUUID};V.default=Xt});var Xe=y(J=>{"use strict";Object.defineProperty(J,"__esModule",{value:!0});J.default=void 0;var ke=Qe($e()),Zt=Qe(te()),er=T();function Qe(e){return e&&e.__esModule?e:{default:e}}function tr(e,u,l){if(ke.default.randomUUID&&!u&&!e)return ke.default.randomUUID();e=e||{};let r=e.random||(e.rng||Zt.default)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,u){l=l||0;for(let t=0;t<16;++t)u[l+t]=r[t];return u}return(0,er.unsafeStringify)(r)}var rr=tr;J.default=rr});var Ze=y(z=>{"use strict";Object.defineProperty(z,"__esModule",{value:!0});z.default=void 0;var nr=ar(require("crypto"));function ar(e){return e&&e.__esModule?e:{default:e}}function ur(e){return Array.isArray(e)?e=Buffer.from(e):typeof e=="string"&&(e=Buffer.from(e,"utf8")),nr.default.createHash("sha1").update(e).digest()}var ir=ur;z.default=ir});var tt=y(W=>{"use strict";Object.defineProperty(W,"__esModule",{value:!0});W.default=void 0;var fr=et(ie()),or=et(Ze());function et(e){return e&&e.__esModule?e:{default:e}}var lr=(0,fr.default)("v5",80,or.default),cr=lr;W.default=cr});var rt=y(Y=>{"use strict";Object.defineProperty(Y,"__esModule",{value:!0});Y.default=void 0;var sr="00000000-0000-0000-0000-000000000000";Y.default=sr});var nt=y($=>{"use strict";Object.defineProperty($,"__esModule",{value:!0});$.default=void 0;var dr=_r(D());function _r(e){return e&&e.__esModule?e:{default:e}}function vr(e){if(!(0,dr.default)(e))throw TypeError("Invalid UUID");return parseInt(e.slice(14,15),16)}var yr=vr;$.default=yr});var at=y(g=>{"use strict";Object.defineProperty(g,"__esModule",{value:!0});Object.defineProperty(g,"NIL",{enumerable:!0,get:function(){return wr.default}});Object.defineProperty(g,"parse",{enumerable:!0,get:function(){return xr.default}});Object.defineProperty(g,"stringify",{enumerable:!0,get:function(){return Pr.default}});Object.defineProperty(g,"v1",{enumerable:!0,get:function(){return pr.default}});Object.defineProperty(g,"v3",{enumerable:!0,get:function(){return hr.default}});Object.defineProperty(g,"v4",{enumerable:!0,get:function(){return gr.default}});Object.defineProperty(g,"v5",{enumerable:!0,get:function(){return mr.default}});Object.defineProperty(g,"validate",{enumerable:!0,get:function(){return Or.default}});Object.defineProperty(g,"version",{enumerable:!0,get:function(){return br.default}});var pr=b(Ke()),hr=b(Ye()),gr=b(Xe()),mr=b(tt()),wr=b(rt()),br=b(nt()),Or=b(D()),Pr=b(T()),xr=b(ue());function b(e){return e&&e.__esModule?e:{default:e}}});var jr={};dt(jr,{default:()=>Tr});var E=function(){return E=Object.assign||function(e){for(var u,l=1,r=arguments.length;l<r;l++){u=arguments[l];for(var t in u)Object.prototype.hasOwnProperty.call(u,t)&&(e[t]=u[t])}return e},E.apply(this,arguments)},k=function(e,u,l,r){function t(n){return n instanceof l?n:new l(function(a){a(n)})}return new(l||(l=Promise))(function(n,a){function f(s){try{i(r.next(s))}catch(d){a(d)}}function o(s){try{i(r.throw(s))}catch(d){a(d)}}function i(s){s.done?n(s.value):t(s.value).then(f,o)}i((r=r.apply(e,u||[])).next())})},Q=function(e,u){var l={label:0,sent:function(){if(n[0]&1)throw n[1];return n[1]},trys:[],ops:[]},r,t,n,a;return a={next:f(0),throw:f(1),return:f(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function f(i){return function(s){return o([i,s])}}function o(i){if(r)throw new TypeError("Generator is already executing.");for(;a&&(a=0,i[0]&&(l=0)),l;)try{if(r=1,t&&(n=i[0]&2?t.return:i[0]?t.throw||((n=t.return)&&n.call(t),0):t.next)&&!(n=n.call(t,i[1])).done)return n;switch(t=0,n&&(i=[i[0]&2,n.value]),i[0]){case 0:case 1:n=i;break;case 4:return l.label++,{value:i[1],done:!1};case 5:l.label++,t=i[1],i=[0];continue;case 7:i=l.ops.pop(),l.trys.pop();continue;default:if(n=l.trys,!(n=n.length>0&&n[n.length-1])&&(i[0]===6||i[0]===2)){l=0;continue}if(i[0]===3&&(!n||i[1]>n[0]&&i[1]<n[3])){l.label=i[1];break}if(i[0]===6&&l.label<n[1]){l.label=n[1],n=i;break}if(n&&l.label<n[2]){l.label=n[2],l.ops.push(i);break}n[2]&&l.ops.pop(),l.trys.pop();continue}i=u.call(e,l)}catch(s){i=[6,s],t=0}finally{r=n=0}if(i[0]&5)throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}},vt=function(){function e(){var u=this.constructor;this.context={},Object.setPrototypeOf(this,u.prototype)}return e.prototype.set=function(u,l){this.context[u]=l},e.prototype.get=function(u){return this.context[u]},e}();var yt=function(e,u,l,r){return k(void 0,void 0,void 0,function(){var t;return Q(this,function(n){switch(n.label){case 0:t=e(u,l,r),n.label=1;case 1:return typeof t.then!="function"?[3,3]:[4,t];case 2:return t=n.sent(),[3,1];case 3:return[2,t]}})})},X=function(e,u){return function(l,r,t){return k(void 0,void 0,void 0,function(){var n,a,f;return Q(this,function(o){switch(o.label){case 0:return n=E(E({},l),{somodMiddlewareContext:new vt}),a=u.length,f=function(){return k(void 0,void 0,void 0,function(){var i,s,d;return Q(this,function(c){switch(c.label){case 0:return a>0?(i=u[--a],[4,i(f,n,r)]):[3,2];case 1:return s=c.sent(),[2,s];case 2:return[4,yt(e,n,r,t)];case 3:return d=c.sent(),[2,d]}})})},[4,f()];case 1:return[2,o.sent()]}})})}};var Ne=ce(Ce(),1),{__extends:Nr,__assign:Fr,__rest:Br,__decorate:Lr,__param:Gr,__esDecorate:Hr,__runInitializers:Kr,__propKey:Vr,__setFunctionName:Jr,__metadata:zr,__awaiter:Fe,__generator:Be,__exportStar:Wr,__createBinding:Yr,__values:$r,__read:kr,__spread:Qr,__spreadArrays:Xr,__spreadArray:Zr,__await:en,__asyncGenerator:tn,__asyncDelegator:rn,__asyncValues:nn,__makeTemplateObject:an,__importStar:un,__importDefault:fn,__classPrivateFieldGet:on,__classPrivateFieldSet:ln,__classPrivateFieldIn:cn}=Ne.default;var fe=require("aws-sdk");var w=ce(at(),1),ut=w.default.v1,Dn=w.default.v3,In=w.default.v4,Tn=w.default.v5,jn=w.default.NIL,En=w.default.version,Rn=w.default.validate,An=w.default.stringify,Un=w.default.parse;var Sr=new fe.DynamoDB({apiVersion:"2012-08-10",region:process.env.AWS_REGION}),qr=process.env.TABLE_NAME,Mr=process.env.API_KEY,Dr=function(e){return Fe(void 0,void 0,void 0,function(){var u,l,r,t;return Be(this,function(n){switch(n.label){case 0:return e.headers.authorization!==Mr?[2,{statusCode:401}]:(u=JSON.parse(e.body||"{}"),(u==null?void 0:u.message)===void 0||(u==null?void 0:u.audience)===void 0?[2,{statusCode:400,body:JSON.stringify({error:"must have 'message' and 'audience' properties in the body"}),headers:{"Content-Type":"application/json"}}]:((r=u.audience)===null||r===void 0?void 0:r.userId)===void 0&&((t=u.audience)===null||t===void 0?void 0:t.groupId)===void 0?[2,{statusCode:400,body:JSON.stringify({error:"audience property must have 'userId' or 'groupId'"}),headers:{"Content-Type":"application/json"}}]:(l=ut(),[4,Sr.putItem({TableName:qr,Item:fe.DynamoDB.Converter.marshall({messageId:l,message:u.message,audience:u.audience})}).promise()]));case 1:return n.sent(),[2,{statusCode:200,body:JSON.stringify({messageId:l}),headers:{"Content-Type":"application/json"}}]}})})},it=Dr;var Ir=X(it,[]),Tr=Ir;module.exports=_t(jr);0&&(module.exports={});
