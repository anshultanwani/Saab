(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[6],{354:function(e,t,r){var n=r(382);e.exports=function(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}},382:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}},466:function(e,t,r){},467:function(e,t,r){},468:function(e,t,r){"use strict";var n=r(469),a=r(470),o=r(474),i=r(475),c=r(479),s=r(480),u=r(481),l=r(482),d=Symbol("encodeFragmentIdentifier");function f(e){if("string"!==typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function p(e,t){return t.encode?t.strict?c(e):encodeURIComponent(e):e}function m(e,t){return t.decode?s(e):e}function h(e){return Array.isArray(e)?e.sort():"object"===typeof e?h(Object.keys(e)).sort((function(e,t){return Number(e)-Number(t)})).map((function(t){return e[t]})):e}function b(e){var t=e.indexOf("#");return-1!==t&&(e=e.slice(0,t)),e}function v(e){var t=(e=b(e)).indexOf("?");return-1===t?"":e.slice(t+1)}function y(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"===typeof e&&""!==e.trim()?e=Number(e):!t.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function j(e,t){f((t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},t)).arrayFormatSeparator);var r=function(e){var t;switch(e.arrayFormat){case"index":return function(e,r,n){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===n[e]&&(n[e]={}),n[e][t[1]]=r):n[e]=r};case"bracket":return function(e,r,n){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==n[e]?n[e]=[].concat(n[e],r):n[e]=[r]:n[e]=r};case"colon-list-separator":return function(e,r,n){t=/(:list)$/.exec(e),e=e.replace(/:list$/,""),t?void 0!==n[e]?n[e]=[].concat(n[e],r):n[e]=[r]:n[e]=r};case"comma":case"separator":return function(t,r,n){var a="string"===typeof r&&r.includes(e.arrayFormatSeparator),o="string"===typeof r&&!a&&m(r,e).includes(e.arrayFormatSeparator);r=o?m(r,e):r;var i=a||o?r.split(e.arrayFormatSeparator).map((function(t){return m(t,e)})):null===r?r:m(r,e);n[t]=i};case"bracket-separator":return function(t,r,n){var a=/(\[\])$/.test(t);if(t=t.replace(/\[\]$/,""),a){var o=null===r?[]:r.split(e.arrayFormatSeparator).map((function(t){return m(t,e)}));void 0!==n[t]?n[t]=[].concat(n[t],o):n[t]=o}else n[t]=r?m(r,e):r};default:return function(e,t,r){void 0!==r[e]?r[e]=[].concat(r[e],t):r[e]=t}}}(t),n=Object.create(null);if("string"!==typeof e)return n;if(!(e=e.trim().replace(/^[?#&]/,"")))return n;var i,c=o(e.split("&"));try{for(c.s();!(i=c.n()).done;){var s=i.value;if(""!==s){var l=u(t.decode?s.replace(/\+/g," "):s,"="),d=a(l,2),p=d[0],b=d[1];b=void 0===b?null:["comma","separator","bracket-separator"].includes(t.arrayFormat)?b:m(b,t),r(m(p,t),b,n)}}}catch(w){c.e(w)}finally{c.f()}for(var v=0,j=Object.keys(n);v<j.length;v++){var g=j[v],O=n[g];if("object"===typeof O&&null!==O)for(var x=0,k=Object.keys(O);x<k.length;x++){var N=k[x];O[N]=y(O[N],t)}else n[g]=y(O,t)}return!1===t.sort?n:(!0===t.sort?Object.keys(n).sort():Object.keys(n).sort(t.sort)).reduce((function(e,t){var r=n[t];return Boolean(r)&&"object"===typeof r&&!Array.isArray(r)?e[t]=h(r):e[t]=r,e}),Object.create(null))}t.extract=v,t.parse=j,t.stringify=function(e,t){if(!e)return"";f((t=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},t)).arrayFormatSeparator);for(var r=function(r){return t.skipNull&&(null===(n=e[r])||void 0===n)||t.skipEmptyString&&""===e[r];var n},n=function(e){switch(e.arrayFormat){case"index":return function(t){return function(r,n){var a=r.length;return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:[].concat(i(r),null===n?[[p(t,e),"[",a,"]"].join("")]:[[p(t,e),"[",p(a,e),"]=",p(n,e)].join("")])}};case"bracket":return function(t){return function(r,n){return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:[].concat(i(r),null===n?[[p(t,e),"[]"].join("")]:[[p(t,e),"[]=",p(n,e)].join("")])}};case"colon-list-separator":return function(t){return function(r,n){return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:[].concat(i(r),null===n?[[p(t,e),":list="].join("")]:[[p(t,e),":list=",p(n,e)].join("")])}};case"comma":case"separator":case"bracket-separator":var t="bracket-separator"===e.arrayFormat?"[]=":"=";return function(r){return function(n,a){return void 0===a||e.skipNull&&null===a||e.skipEmptyString&&""===a?n:(a=null===a?"":a,0===n.length?[[p(r,e),t,p(a,e)].join("")]:[[n,p(a,e)].join(e.arrayFormatSeparator)])}};default:return function(t){return function(r,n){return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:[].concat(i(r),null===n?[p(t,e)]:[[p(t,e),"=",p(n,e)].join("")])}}}}(t),a={},o=0,c=Object.keys(e);o<c.length;o++){var s=c[o];r(s)||(a[s]=e[s])}var u=Object.keys(a);return!1!==t.sort&&u.sort(t.sort),u.map((function(r){var a=e[r];return void 0===a?"":null===a?p(r,t):Array.isArray(a)?0===a.length&&"bracket-separator"===t.arrayFormat?p(r,t)+"[]":a.reduce(n(r),[]).join("&"):p(r,t)+"="+p(a,t)})).filter((function(e){return e.length>0})).join("&")},t.parseUrl=function(e,t){t=Object.assign({decode:!0},t);var r=u(e,"#"),n=a(r,2),o=n[0],i=n[1];return Object.assign({url:o.split("?")[0]||"",query:j(v(e),t)},t&&t.parseFragmentIdentifier&&i?{fragmentIdentifier:m(i,t)}:{})},t.stringifyUrl=function(e,r){r=Object.assign(n({encode:!0,strict:!0},d,!0),r);var a=b(e.url).split("?")[0]||"",o=t.extract(e.url),i=t.parse(o,{sort:!1}),c=Object.assign(i,e.query),s=t.stringify(c,r);s&&(s="?".concat(s));var u=function(e){var t="",r=e.indexOf("#");return-1!==r&&(t=e.slice(r)),t}(e.url);return e.fragmentIdentifier&&(u="#".concat(r[d]?p(e.fragmentIdentifier,r):e.fragmentIdentifier)),"".concat(a).concat(s).concat(u)},t.pick=function(e,r,a){a=Object.assign(n({parseFragmentIdentifier:!0},d,!1),a);var o=t.parseUrl(e,a),i=o.url,c=o.query,s=o.fragmentIdentifier;return t.stringifyUrl({url:i,query:l(c,r),fragmentIdentifier:s},a)},t.exclude=function(e,r,n){var a=Array.isArray(r)?function(e){return!r.includes(e)}:function(e,t){return!r(e,t)};return t.pick(e,a,n)}},469:function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},470:function(e,t,r){var n=r(471),a=r(472),o=r(354),i=r(473);e.exports=function(e,t){return n(e)||a(e,t)||o(e,t)||i()}},471:function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},472:function(e,t){e.exports=function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(s){a=!0,o=s}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return r}}},473:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},474:function(e,t,r){var n=r(354);e.exports=function(e,t){var r;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=n(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var a=0,o=function(){};return{s:o,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,s=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return c=e.done,e},e:function(e){s=!0,i=e},f:function(){try{c||null==r.return||r.return()}finally{if(s)throw i}}}}},475:function(e,t,r){var n=r(476),a=r(477),o=r(354),i=r(478);e.exports=function(e){return n(e)||a(e)||o(e)||i()}},476:function(e,t,r){var n=r(382);e.exports=function(e){if(Array.isArray(e))return n(e)}},477:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},478:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},479:function(e,t,r){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%".concat(e.charCodeAt(0).toString(16).toUpperCase())}))}},480:function(e,t,r){"use strict";var n="%[a-f0-9]{2}",a=new RegExp(n,"gi"),o=new RegExp("("+n+")+","gi");function i(e,t){try{return decodeURIComponent(e.join(""))}catch(a){}if(1===e.length)return e;t=t||1;var r=e.slice(0,t),n=e.slice(t);return Array.prototype.concat.call([],i(r),i(n))}function c(e){try{return decodeURIComponent(e)}catch(n){for(var t=e.match(a),r=1;r<t.length;r++)t=(e=i(t,r).join("")).match(a);return e}}e.exports=function(e){if("string"!==typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var r={"%FE%FF":"\ufffd\ufffd","%FF%FE":"\ufffd\ufffd"},n=o.exec(e);n;){try{r[n[0]]=decodeURIComponent(n[0])}catch(t){var a=c(n[0]);a!==n[0]&&(r[n[0]]=a)}n=o.exec(e)}r["%C2"]="\ufffd";for(var i=Object.keys(r),s=0;s<i.length;s++){var u=i[s];e=e.replace(new RegExp(u,"g"),r[u])}return e}(e)}}},481:function(e,t,r){"use strict";e.exports=function(e,t){if("string"!==typeof e||"string"!==typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===t)return[e];var r=e.indexOf(t);return-1===r?[e]:[e.slice(0,r),e.slice(r+t.length)]}},482:function(e,t,r){"use strict";e.exports=function(e,t){for(var r={},n=Object.keys(e),a=Array.isArray(t),o=0;o<n.length;o++){var i=n[o],c=e[i];(a?-1!==t.indexOf(i):t(i,c,e))&&(r[i]=c)}return r}},698:function(e,t,r){"use strict";r.r(t);var n,a=r(14),o=r(10),i=r(0),c=r(218),s=r(224),u=(r(466),r(18)),l=(r(467),["title","titleId"]);function d(){return d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},d.apply(this,arguments)}function f(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function p(e,t){var r=e.title,a=e.titleId,o=f(e,l);return i.createElement("svg",d({width:6,height:7,viewBox:"0 0 6 7",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":a},o),r?i.createElement("title",{id:a},r):null,n||(n=i.createElement("path",{d:"M3.70612 3.49997L5.85335 0.995896H5.85341C5.97974 0.848509 6.02912 0.633712 5.98286 0.43238C5.9366 0.231115 5.80173 0.0738442 5.62915 0.019888C5.45651 -0.0340564 5.27232 0.023532 5.14594 0.170854L2.9987 2.67509L0.851471 0.173852C0.722744 0.0453369 0.546985 0.00153908 0.384499 0.0576341C0.222014 0.113661 0.0949114 0.261898 0.0468587 0.451386C-0.00123978 0.640873 0.0363129 0.845854 0.146515 0.995961L2.29132 3.50003L0.146515 6.0041C0.0201312 6.15149 -0.0291971 6.36629 0.017063 6.56762C0.0633202 6.76888 0.198132 6.92616 0.370773 6.98011C0.543415 7.03406 0.727598 6.97647 0.853986 6.82915L2.99879 4.32491L5.14602 6.82898V6.82904C5.27241 6.97637 5.45659 7.03396 5.62924 6.98001C5.80182 6.92607 5.93668 6.76878 5.98295 6.56752C6.0292 6.36619 5.97982 6.15139 5.85349 6.004L3.70612 3.49997Z",fill:"#545C63"})))}var m=i.forwardRef(p),h=(r.p,r(1)),b=[{name:"Andaman and Nicobar Islands"},{name:"Andhra Pradesh"},{name:"Arunachal Pradesh"},{name:"Assam"},{name:"Bengal"},{name:"Bihar"},{name:"Chandigarh"},{name:"Chhattisgarh"},{name:"Dadra and Nagar Haveli"},{name:"Daman and Diu"},{name:"Delhi"},{name:"Goa"},{name:"Gujarat"},{name:"Haryana"},{name:"Himachal Pradesh"},{name:"Jammu and Kashmir"},{name:"Jharkhand"},{name:"Karnataka"},{name:"Kerala"},{name:"Ladakh"},{name:"Lakshadweep"},{name:"Madhya Pradesh"},{name:"Maharashtra/Malwani"},{name:"Manipur"},{name:"Meghalaya"},{name:"Mizoram"},{name:"Nagaland"},{name:"Odisha"},{name:"Puducherry"},{name:"Punjab"},{name:"Rajasthan"},{name:"Sikkim"},{name:"Sindhi"},{name:"Tamil Nadu"},{name:"Telangana"},{name:"Tripura"},{name:"Uttar Pradesh"},{name:"Uttarakhand"},{name:"All"}],v=function(e){var t=Object(i.useState)(e.selected||[]),r=Object(o.a)(t,2),n=r[0],a=r[1],s=Object(i.useState)([]),l=Object(o.a)(s,2),d=l[0],f=l[1],p=Object(i.useState)(""),v=Object(o.a)(p,2),y=v[0],j=v[1],g=function(e){var t=[];e&&e.length>1&&(t=b.filter((function(t){return t.name.toLowerCase().startsWith(e.toLowerCase())}))),f(t),j(e)},O=function(t){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=arguments.length>2?arguments[2]:void 0,i=Object(u.a)(n);r?i.splice(o,1):i.includes(t)||i.push(t),g(""),a(i),e.updateList(i)};return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:"suggestion-inp",children:[Object(h.jsx)(c.a,{type:"search",value:y,onChange:function(e){return g(e.target.value)},className:"input-search",placeholder:"Search here...",sx:{width:1}}),d.length?Object(h.jsx)("div",{className:"auto-suggest",children:d.map((function(e,t){return Object(h.jsx)("div",{className:"option",onClick:function(){O(e.name)},children:e.name},t)}))}):null,n.length?Object(h.jsx)("div",{className:"tag-holder",children:n.map((function(e,t){return Object(h.jsxs)("div",{className:"tags",children:[e,Object(h.jsx)(m,{className:"cross-icon",onClick:function(){return O(e,!0,t)}})]},t)}))}):null]})})},y=r(100),j=r(61),g=r.n(j),O=r(17),x=r(468),k=r.n(x),N=r(46),w=r(19),S=r(20);t.default=Object(w.b)((function(e){return{session:e.session}}),{setSession:S.b})((function(e){var t=Object(O.g)().search,r=Object(O.f)(),n=k.a.parse(t).phone,u=k.a.parse(t).userType,l=Object(i.useState)({cook:!1,maid:!1}),d=Object(o.a)(l,2),f=d[0],p=d[1],m=Object(i.useState)({name:"",email:"",phone:"",address:{houseNo:"",floor:"",society:"",locality:"",pin:560008,regionality:[]},services:{cook:{existing:1,name:"",phone:"",specialities:[]},maid:{existing:1,name:"",phone:"",specialities:[]}}}),b=Object(o.a)(m,2),j=b[0],x=b[1],w=function e(t,r,n,a){for(var o in t)"object"!==typeof t[o]||Array.isArray(t[o])||o!=n.split(".")[0]?o!=a||n||(t[o]=r):e(t[o],r,n.split(".").length>1?n.split(".")[1]:"",a)},S=function(e,t,r){var n=Object(a.a)({},j);"phone"!=r&&"houseNo"!=r||(t=isNaN(Number(t))?n[e][r]:Number(t)),w(n,t,e,r),x(n)},C=function(e){var t=e.isCook,r=void 0===t||t;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:"label-div",children:(r?"Cook's":"Helper's")+"Details"}),Object(h.jsx)(c.a,{className:"reg-field",sx:{width:1},placeholder:(r?"Cook":"Helper")+" Name",inputProps:{value:r?j.services.cook.name:j.services.maid.name,onChange:function(e){return S("services."+(r?"cook":"maid"),e.target.value,"name")}}}),Object(h.jsx)(c.a,{className:"reg-field",sx:{width:1},placeholder:"Contact Number",inputProps:{value:r?j.services.cook.phone||"":j.services.maid.phone||"",onChange:function(e){e.target.value.length>10||S("services."+(r?"cook":"maid"),e.target.value,"phone")}}}),Object(h.jsx)("div",{className:"label-div",children:(r?"Cook's":"Helper's")+" Speciality"}),Object(h.jsx)(v,{selected:j.services[r?"cook":"maid"].specialities,updateList:function(e){return S("services."+(r?"cook":"maid"),e,"specialities")}})]})};return Object(h.jsxs)("div",{className:"login-home signup",children:[Object(h.jsx)("div",{className:"upper-sec",children:Object(h.jsx)("div",{className:"title",children:"Sign Up"})}),Object(h.jsx)("div",{className:"lower-sec",children:Object(h.jsxs)("div",{className:"data-holder",children:[Object(h.jsx)("div",{className:"label-div",children:"Your Details"}),Object(h.jsxs)("div",{children:[Object(h.jsx)(c.a,{className:"reg-field",sx:{width:1},placeholder:"Your Name",inputProps:{value:j.name,onChange:function(e){return S("",e.target.value,"name")}}}),Object(h.jsxs)("div",{className:"field-holder",children:[Object(h.jsx)(c.a,{className:"reg-half-field",sx:{width:1/2.09},placeholder:"House/Flat/Block No.",inputProps:{value:j.address.houseNo||"",onChange:function(e){return S("address",e.target.value,"houseNo")}}}),Object(h.jsx)(c.a,{className:"reg-half-field",sx:{width:1/2.09},placeholder:"Apartment/Road/Area",inputProps:{value:j.address.society,onChange:function(e){return S("address",e.target.value,"society")}}})]})]}),Object(h.jsxs)("div",{className:"reasonality-srchbar",children:[Object(h.jsx)("div",{className:"label-div",children:"Regionality"}),Object(h.jsx)(v,{updateList:function(e){return S("address",e,"regionality")}})]}),Object(h.jsx)("div",{className:"selected-regin"}),Object(h.jsx)(y.a,{label:"Do you have a Cook?",status:f.cook,updateStatus:function(e){return p(Object(a.a)(Object(a.a)({},f),{},{cook:e}))},children:f.cook?C({}):null}),Object(h.jsx)("div",{className:"have-cook",children:Object(h.jsx)(y.a,{label:"Do you have Helper?",status:f.maid,updateStatus:function(e){return p(Object(a.a)(Object(a.a)({},f),{},{maid:e}))},children:f.maid?C({isCook:!1}):null})}),Object(h.jsx)("div",{className:"btn-holder",children:Object(h.jsx)(s.a,{variant:"contained",children:"SIGN UP",onClick:function(){g()({method:"post",url:window.apiDomain+"/v1/users/register",data:Object(a.a)(Object(a.a)({},j),{},{phone:Number(n),onboarded:1,SubscriptionType:null,userType:u})}).then((function(t){"200"==t.status&&(e.setSession(Object(a.a)(Object(a.a)({},e.session),t.data.data)),Object(N.b)("isLoggedIn",!0,30),Object(N.b)("userId",t.data.data._id,30),r.replace("/home"))})).catch((function(e){console.log(e)}))}})})]})})]})}))}}]);
//# sourceMappingURL=6.3fb38e5a.chunk.js.map