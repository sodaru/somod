var _e=Object.create;var P=Object.defineProperty;var de=Object.getOwnPropertyDescriptor;var ve=Object.getOwnPropertyNames;var ye=Object.getPrototypeOf,pe=Object.prototype.hasOwnProperty;var R=a=>P(a,"__esModule",{value:!0});var he=(a,c)=>()=>(c||a((c={exports:{}}).exports,c),c.exports),be=(a,c)=>{for(var s in c)P(a,s,{get:c[s],enumerable:!0})},G=(a,c,s,e)=>{if(c&&typeof c=="object"||typeof c=="function")for(let t of ve(c))!pe.call(a,t)&&(s||t!=="default")&&P(a,t,{get:()=>c[t],enumerable:!(e=de(c,t))||e.enumerable});return a},we=(a,c)=>G(R(P(a!=null?_e(ye(a)):{},"default",!c&&a&&a.__esModule?{get:()=>a.default,enumerable:!0}:{value:a,enumerable:!0})),a),me=(a=>(c,s)=>a&&a.get(c)||(s=G(R({}),c,1),a&&a.set(c,s),s))(typeof WeakMap!="undefined"?new WeakMap:0);var ce=he((Ve,C)=>{var V,B,x,K,H,L,U,q,z,J,W,Q,X,E,D,Y,Z,$,O,k,ee,te,ne,re,ae,ie,oe,ue,T;(function(a){var c=typeof global=="object"?global:typeof self=="object"?self:typeof this=="object"?this:{};typeof define=="function"&&define.amd?define("tslib",["exports"],function(e){a(s(c,s(e)))}):typeof C=="object"&&typeof C.exports=="object"?a(s(c,s(C.exports))):a(s(c));function s(e,t){return e!==c&&(typeof Object.create=="function"?Object.defineProperty(e,"__esModule",{value:!0}):e.__esModule=!0),function(n,r){return e[n]=t?t(n,r):r}}})(function(a){var c=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])};V=function(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");c(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)},B=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},x=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n},K=function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var l=e.length-1;l>=0;l--)(u=e[l])&&(o=(i<3?u(o):i>3?u(t,n,o):u(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o},H=function(e,t){return function(n,r){t(n,r,e)}},L=function(e,t,n,r,i,o){function u(j){if(j!==void 0&&typeof j!="function")throw new TypeError("Function expected");return j}for(var l=r.kind,_=l==="getter"?"get":l==="setter"?"set":"value",f=!t&&e?r.static?e:e.prototype:null,d=t||(f?Object.getOwnPropertyDescriptor(f,r.name):{}),y,v=!1,p=n.length-1;p>=0;p--){var h={};for(var b in r)h[b]=b==="access"?{}:r[b];for(var b in r.access)h.access[b]=r.access[b];h.addInitializer=function(j){if(v)throw new TypeError("Cannot add initializers after decoration has completed");o.push(u(j||null))};var w=(0,n[p])(l==="accessor"?{get:d.get,set:d.set}:d[_],h);if(l==="accessor"){if(w===void 0)continue;if(w===null||typeof w!="object")throw new TypeError("Object expected");(y=u(w.get))&&(d.get=y),(y=u(w.set))&&(d.set=y),(y=u(w.init))&&i.push(y)}else(y=u(w))&&(l==="field"?i.push(y):d[_]=y)}f&&Object.defineProperty(f,r.name,d),v=!0},U=function(e,t,n){for(var r=arguments.length>2,i=0;i<t.length;i++)n=r?t[i].call(e,n):t[i].call(e);return r?n:void 0},q=function(e){return typeof e=="symbol"?e:"".concat(e)},z=function(e,t,n){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:n?"".concat(n," ",t):t})},J=function(e,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,t)},W=function(e,t,n,r){function i(o){return o instanceof n?o:new n(function(u){u(o)})}return new(n||(n=Promise))(function(o,u){function l(d){try{f(r.next(d))}catch(y){u(y)}}function _(d){try{f(r.throw(d))}catch(y){u(y)}}function f(d){d.done?o(d.value):i(d.value).then(l,_)}f((r=r.apply(e,t||[])).next())})},Q=function(e,t){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,u;return u={next:l(0),throw:l(1),return:l(2)},typeof Symbol=="function"&&(u[Symbol.iterator]=function(){return this}),u;function l(f){return function(d){return _([f,d])}}function _(f){if(r)throw new TypeError("Generator is already executing.");for(;u&&(u=0,f[0]&&(n=0)),n;)try{if(r=1,i&&(o=f[0]&2?i.return:f[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,f[1])).done)return o;switch(i=0,o&&(f=[f[0]&2,o.value]),f[0]){case 0:case 1:o=f;break;case 4:return n.label++,{value:f[1],done:!1};case 5:n.label++,i=f[1],f=[0];continue;case 7:f=n.ops.pop(),n.trys.pop();continue;default:if(o=n.trys,!(o=o.length>0&&o[o.length-1])&&(f[0]===6||f[0]===2)){n=0;continue}if(f[0]===3&&(!o||f[1]>o[0]&&f[1]<o[3])){n.label=f[1];break}if(f[0]===6&&n.label<o[1]){n.label=o[1],o=f;break}if(o&&n.label<o[2]){n.label=o[2],n.ops.push(f);break}o[2]&&n.ops.pop(),n.trys.pop();continue}f=t.call(e,n)}catch(d){f=[6,d],i=0}finally{r=o=0}if(f[0]&5)throw f[1];return{value:f[0]?f[1]:void 0,done:!0}}},X=function(e,t){for(var n in e)n!=="default"&&!Object.prototype.hasOwnProperty.call(t,n)&&T(t,e,n)},T=Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]},E=function(e){var t=typeof Symbol=="function"&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")},D=function(e,t){var n=typeof Symbol=="function"&&e[Symbol.iterator];if(!n)return e;var r=n.call(e),i,o=[],u;try{for(;(t===void 0||t-- >0)&&!(i=r.next()).done;)o.push(i.value)}catch(l){u={error:l}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(u)throw u.error}}return o},Y=function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(D(arguments[t]));return e},Z=function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;for(var r=Array(e),i=0,t=0;t<n;t++)for(var o=arguments[t],u=0,l=o.length;u<l;u++,i++)r[i]=o[u];return r},$=function(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))},O=function(e){return this instanceof O?(this.v=e,this):new O(e)},k=function(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=n.apply(e,t||[]),i,o=[];return i={},u("next"),u("throw"),u("return"),i[Symbol.asyncIterator]=function(){return this},i;function u(v){r[v]&&(i[v]=function(p){return new Promise(function(h,b){o.push([v,p,h,b])>1||l(v,p)})})}function l(v,p){try{_(r[v](p))}catch(h){y(o[0][3],h)}}function _(v){v.value instanceof O?Promise.resolve(v.value.v).then(f,d):y(o[0][2],v)}function f(v){l("next",v)}function d(v){l("throw",v)}function y(v,p){v(p),o.shift(),o.length&&l(o[0][0],o[0][1])}},ee=function(e){var t,n;return t={},r("next"),r("throw",function(i){throw i}),r("return"),t[Symbol.iterator]=function(){return this},t;function r(i,o){t[i]=e[i]?function(u){return(n=!n)?{value:O(e[i](u)),done:!1}:o?o(u):u}:o}},te=function(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t=e[Symbol.asyncIterator],n;return t?t.call(e):(e=typeof E=="function"?E(e):e[Symbol.iterator](),n={},r("next"),r("throw"),r("return"),n[Symbol.asyncIterator]=function(){return this},n);function r(o){n[o]=e[o]&&function(u){return new Promise(function(l,_){u=e[o](u),i(l,_,u.done,u.value)})}}function i(o,u,l,_){Promise.resolve(_).then(function(f){o({value:f,done:l})},u)}},ne=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e};var s=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t};re=function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)&&T(t,e,n);return s(t,e),t},ae=function(e){return e&&e.__esModule?e:{default:e}},ie=function(e,t,n,r){if(n==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?e!==t||!r:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return n==="m"?r:n==="a"?r.call(e):r?r.value:t.get(e)},oe=function(e,t,n,r,i){if(r==="m")throw new TypeError("Private method is not writable");if(r==="a"&&!i)throw new TypeError("Private accessor was defined without a setter");if(typeof t=="function"?e!==t||!i:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return r==="a"?i.call(e,n):i?i.value=n:t.set(e,n),n},ue=function(e,t){if(t===null||typeof t!="object"&&typeof t!="function")throw new TypeError("Cannot use 'in' operator on non-object");return typeof e=="function"?t===e:e.has(t)},a("__extends",V),a("__assign",B),a("__rest",x),a("__decorate",K),a("__param",H),a("__esDecorate",L),a("__runInitializers",U),a("__propKey",q),a("__setFunctionName",z),a("__metadata",J),a("__awaiter",W),a("__generator",Q),a("__exportStar",X),a("__createBinding",T),a("__values",E),a("__read",D),a("__spread",Y),a("__spreadArrays",Z),a("__spreadArray",$),a("__await",O),a("__asyncGenerator",k),a("__asyncDelegator",ee),a("__asyncValues",te),a("__makeTemplateObject",ne),a("__importStar",re),a("__importDefault",ae),a("__classPrivateFieldGet",ie),a("__classPrivateFieldSet",oe),a("__classPrivateFieldIn",ue)})});var Me={};be(Me,{default:()=>Ae});var I=function(){return I=Object.assign||function(a){for(var c,s=1,e=arguments.length;s<e;s++){c=arguments[s];for(var t in c)Object.prototype.hasOwnProperty.call(c,t)&&(a[t]=c[t])}return a},I.apply(this,arguments)},N=function(a,c,s,e){function t(n){return n instanceof s?n:new s(function(r){r(n)})}return new(s||(s=Promise))(function(n,r){function i(l){try{u(e.next(l))}catch(_){r(_)}}function o(l){try{u(e.throw(l))}catch(_){r(_)}}function u(l){l.done?n(l.value):t(l.value).then(i,o)}u((e=e.apply(a,c||[])).next())})},A=function(a,c){var s={label:0,sent:function(){if(n[0]&1)throw n[1];return n[1]},trys:[],ops:[]},e,t,n,r;return r={next:i(0),throw:i(1),return:i(2)},typeof Symbol=="function"&&(r[Symbol.iterator]=function(){return this}),r;function i(u){return function(l){return o([u,l])}}function o(u){if(e)throw new TypeError("Generator is already executing.");for(;r&&(r=0,u[0]&&(s=0)),s;)try{if(e=1,t&&(n=u[0]&2?t.return:u[0]?t.throw||((n=t.return)&&n.call(t),0):t.next)&&!(n=n.call(t,u[1])).done)return n;switch(t=0,n&&(u=[u[0]&2,n.value]),u[0]){case 0:case 1:n=u;break;case 4:return s.label++,{value:u[1],done:!1};case 5:s.label++,t=u[1],u=[0];continue;case 7:u=s.ops.pop(),s.trys.pop();continue;default:if(n=s.trys,!(n=n.length>0&&n[n.length-1])&&(u[0]===6||u[0]===2)){s=0;continue}if(u[0]===3&&(!n||u[1]>n[0]&&u[1]<n[3])){s.label=u[1];break}if(u[0]===6&&s.label<n[1]){s.label=n[1],n=u;break}if(n&&s.label<n[2]){s.label=n[2],s.ops.push(u);break}n[2]&&s.ops.pop(),s.trys.pop();continue}u=c.call(a,s)}catch(l){u=[6,l],t=0}finally{e=n=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}},ge=function(){function a(){var c=this.constructor;this.context={},Object.setPrototypeOf(this,c.prototype)}return a.prototype.set=function(c,s){this.context[c]=s},a.prototype.get=function(c){return this.context[c]},a}();var Oe=function(a,c,s,e){return N(void 0,void 0,void 0,function(){var t;return A(this,function(n){switch(n.label){case 0:t=a(c,s,e),n.label=1;case 1:return typeof t.then!="function"?[3,3]:[4,t];case 2:return t=n.sent(),[3,1];case 3:return[2,t]}})})},M=function(a,c){return function(s,e,t){return N(void 0,void 0,void 0,function(){var n,r,i;return A(this,function(o){switch(o.label){case 0:return n=I(I({},s),{somodMiddlewareContext:new ge}),r=c.length,i=function(){return N(void 0,void 0,void 0,function(){var u,l,_;return A(this,function(f){switch(f.label){case 0:return r>0?(u=c[--r],[4,u(i,n,e)]):[3,2];case 1:return l=f.sent(),[2,l];case 2:return[4,Oe(a,n,e,t)];case 3:return _=f.sent(),[2,_]}})})},[4,i()];case 1:return[2,o.sent()]}})})}};var se=we(ce(),1),{__extends:Be,__assign:xe,__rest:Ke,__decorate:He,__param:Le,__esDecorate:Ue,__runInitializers:qe,__propKey:ze,__setFunctionName:Je,__metadata:We,__awaiter:m,__generator:g,__exportStar:Qe,__createBinding:Xe,__values:Ye,__read:Ze,__spread:$e,__spreadArrays:ke,__spreadArray:et,__await:tt,__asyncGenerator:nt,__asyncDelegator:rt,__asyncValues:at,__makeTemplateObject:it,__importStar:ot,__importDefault:ut,__classPrivateFieldGet:ct,__classPrivateFieldSet:st,__classPrivateFieldIn:lt}=se.default;var S=require("aws-sdk"),le=new S.DynamoDB.DocumentClient({apiVersion:"2012-08-10",region:process.env.AWS_REGION}),F={},je=function(a){return F[a]===void 0&&(F[a]=new S.ApiGatewayManagementApi({apiVersion:"2018-11-29",endpoint:a})),F[a]},Se=function(a){return m(void 0,void 0,void 0,function(){var c,s;return g(this,function(e){switch(e.label){case 0:return[4,le.query({TableName:process.env.USERS_TABLE_NAME,IndexName:"byGroupId",KeyConditionExpression:"groupId = :groupId",ExpressionAttributeValues:{":groupId":a}}).promise()];case 1:return c=e.sent(),[2,(s=c.Items||[])===null||s===void 0?void 0:s.map(function(t){return t.userId})]}})})},Pe=function(){return m(void 0,void 0,void 0,function(){var a,c;return g(this,function(s){switch(s.label){case 0:return[4,le.scan({TableName:process.env.CONNECTIONS_TABLE_NAME}).promise()];case 1:return a=s.sent(),[2,(c=a.Items||[])===null||c===void 0?void 0:c.map(function(e){return{connectionId:e.connectionId,userId:e.userId}})]}})})},Ie=function(a,c){var s=Object.fromEntries(c.map(function(e){return[e,!0]}));return a.filter(function(e){return s[e.userId]})},Ee=function(a,c){return m(void 0,void 0,void 0,function(){var s,e;return g(this,function(t){switch(t.label){case 0:return s=je(process.env.CONNECTIONS_ENDPOINT),e=typeof c=="string"?c:JSON.stringify(c),[4,s.postToConnection({ConnectionId:a,Data:e}).promise()];case 1:return t.sent(),[2]}})})},Te=function(a){return m(void 0,void 0,void 0,function(){var c,s,e,t,n,r,i,o,u;return g(this,function(l){switch(l.label){case 0:return c=S.DynamoDB.Converter.unmarshall(((u=a.dynamodb)===null||u===void 0?void 0:u.NewImage)||{}),s=[],c.audience.userId?(s.push(c.audience.userId),[3,3]):[3,1];case 1:return c.audience.groupId?(t=(e=s.push).apply,n=[s],[4,Se(c.audience.groupId)]):[3,3];case 2:t.apply(e,n.concat([l.sent()])),l.label=3;case 3:return[4,Pe()];case 4:return r=l.sent(),i=Ie(r,s),[4,Promise.allSettled(i.map(function(_){return m(void 0,void 0,void 0,function(){return g(this,function(f){switch(f.label){case 0:return[4,Ee(_.connectionId,c.message)];case 1:return f.sent(),[2]}})})}))];case 5:return o=l.sent(),console.log(JSON.stringify({messageId:c.messageId,audience:c.audience,noOfEligibleUsers:s.length,noOfEligibleConnections:i.length,noOfFailedConnections:o.filter(function(_){return _.status=="rejected"}).length})),[2]}})})},Ce=function(a){return m(void 0,void 0,void 0,function(){var c,s,e;return g(this,function(t){switch(t.label){case 0:c=0,s=a.Records,t.label=1;case 1:return c<s.length?(e=s[c],e.eventName!="INSERT"?[3,3]:[4,Te(e)]):[3,4];case 2:t.sent(),t.label=3;case 3:return c++,[3,1];case 4:return[2]}})})},fe=Ce;var Ne=M(fe,[]),Ae=Ne;module.exports=me(Me);0&&(module.exports={});
