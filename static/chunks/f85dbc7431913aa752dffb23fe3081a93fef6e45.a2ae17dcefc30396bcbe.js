(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[13],{"/yi9":function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSP",(function(){return Ne}));var r=n("q1tI"),i=n("g4pe"),s=n.n(i),a=n("20a2");function o(e){return Array.isArray?Array.isArray(e):"[object Array]"===m(e)}function c(e){return"string"===typeof e}function l(e){return"number"===typeof e}function h(e){return!0===e||!1===e||function(e){return u(e)&&null!==e}(e)&&"[object Boolean]"==m(e)}function u(e){return"object"===typeof e}function d(e){return void 0!==e&&null!==e}function p(e){return!e.trim().length}function m(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}const f=Object.prototype.hasOwnProperty;class g{constructor(e){this._keys=[],this._keyMap={};let t=0;e.forEach((e=>{let n=b(e);t+=n.weight,this._keys.push(n),this._keyMap[n.id]=n,t+=n.weight})),this._keys.forEach((e=>{e.weight/=t}))}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function b(e){let t=null,n=null,r=null,i=1,s=null;if(c(e)||o(e))r=e,t=v(e),n=j(e);else{if(!f.call(e,"name"))throw new Error((e=>`Missing ${e} property in key`)("name"));const a=e.name;if(r=a,f.call(e,"weight")&&(i=e.weight,i<=0))throw new Error((e=>`Property 'weight' in key '${e}' must be a positive integer`)(a));t=v(a),n=j(a),s=e.getFn}return{path:t,id:n,weight:i,src:r,getFn:s}}function v(e){return o(e)?e:e.split(".")}function j(e){return o(e)?e.join("."):e}var x={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(e,t)=>e.score===t.score?e.idx<t.idx?-1:1:e.score<t.score?-1:1,includeMatches:!1,findAllMatches:!1,minMatchCharLength:1,location:0,threshold:.6,distance:100,...{useExtendedSearch:!1,getFn:function(e,t){let n=[],r=!1;const i=(e,t,s)=>{if(d(e))if(t[s]){const a=e[t[s]];if(!d(a))return;if(s===t.length-1&&(c(a)||l(a)||h(a)))n.push(function(e){return null==e?"":function(e){if("string"==typeof e)return e;let t=e+"";return"0"==t&&1/e==-1/0?"-0":t}(e)}(a));else if(o(a)){r=!0;for(let e=0,n=a.length;e<n;e+=1)i(a[e],t,s+1)}else t.length&&i(a,t,s+1)}else n.push(e)};return i(e,c(t)?t.split("."):t,0),r?n:n[0]},ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1}};const y=/[^ ]+/g;class O{constructor({getFn:e=x.getFn,fieldNormWeight:t=x.fieldNormWeight}={}){this.norm=function(e=1,t=3){const n=new Map,r=Math.pow(10,t);return{get(t){const i=t.match(y).length;if(n.has(i))return n.get(i);const s=1/Math.pow(i,.5*e),a=parseFloat(Math.round(s*r)/r);return n.set(i,a),a},clear(){n.clear()}}}(t,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach(((e,t)=>{this._keysMap[e.id]=t}))}create(){!this.isCreated&&this.docs.length&&(this.isCreated=!0,c(this.docs[0])?this.docs.forEach(((e,t)=>{this._addString(e,t)})):this.docs.forEach(((e,t)=>{this._addObject(e,t)})),this.norm.clear())}add(e){const t=this.size();c(e)?this._addString(e,t):this._addObject(e,t)}removeAt(e){this.records.splice(e,1);for(let t=e,n=this.size();t<n;t+=1)this.records[t].i-=1}getValueForItemAtKeyId(e,t){return e[this._keysMap[t]]}size(){return this.records.length}_addString(e,t){if(!d(e)||p(e))return;let n={v:e,i:t,n:this.norm.get(e)};this.records.push(n)}_addObject(e,t){let n={i:t,$:{}};this.keys.forEach(((t,r)=>{let i=t.getFn?t.getFn(e):this.getFn(e,t.path);if(d(i))if(o(i)){let e=[];const t=[{nestedArrIndex:-1,value:i}];for(;t.length;){const{nestedArrIndex:n,value:r}=t.pop();if(d(r))if(c(r)&&!p(r)){let t={v:r,i:n,n:this.norm.get(r)};e.push(t)}else o(r)&&r.forEach(((e,n)=>{t.push({nestedArrIndex:n,value:e})}))}n.$[r]=e}else if(c(i)&&!p(i)){let e={v:i,n:this.norm.get(i)};n.$[r]=e}})),this.records.push(n)}toJSON(){return{keys:this.keys,records:this.records}}}function w(e,t,{getFn:n=x.getFn,fieldNormWeight:r=x.fieldNormWeight}={}){const i=new O({getFn:n,fieldNormWeight:r});return i.setKeys(e.map(b)),i.setSources(t),i.create(),i}function _(e,{errors:t=0,currentLocation:n=0,expectedLocation:r=0,distance:i=x.distance,ignoreLocation:s=x.ignoreLocation}={}){const a=t/e.length;if(s)return a;const o=Math.abs(r-n);return i?a+o/i:o?1:a}const T=32;function S(e,t,n,{location:r=x.location,distance:i=x.distance,threshold:s=x.threshold,findAllMatches:a=x.findAllMatches,minMatchCharLength:o=x.minMatchCharLength,includeMatches:c=x.includeMatches,ignoreLocation:l=x.ignoreLocation}={}){if(t.length>T)throw new Error(`Pattern length exceeds max of ${T}.`);const h=t.length,u=e.length,d=Math.max(0,Math.min(r,u));let p=s,m=d;const f=o>1||c,g=f?Array(u):[];let b;for(;(b=e.indexOf(t,m))>-1;){let e=_(t,{currentLocation:b,expectedLocation:d,distance:i,ignoreLocation:l});if(p=Math.min(e,p),m=b+h,f){let e=0;for(;e<h;)g[b+e]=1,e+=1}}m=-1;let v=[],j=1,y=h+u;const O=1<<h-1;for(let x=0;x<h;x+=1){let r=0,s=y;for(;r<s;){_(t,{errors:x,currentLocation:d+s,expectedLocation:d,distance:i,ignoreLocation:l})<=p?r=s:y=s,s=Math.floor((y-r)/2+r)}y=s;let o=Math.max(1,d-s+1),c=a?u:Math.min(d+s,u)+h,b=Array(c+2);b[c+1]=(1<<x)-1;for(let a=c;a>=o;a-=1){let r=a-1,s=n[e.charAt(r)];if(f&&(g[r]=+!!s),b[a]=(b[a+1]<<1|1)&s,x&&(b[a]|=(v[a+1]|v[a])<<1|1|v[a+1]),b[a]&O&&(j=_(t,{errors:x,currentLocation:r,expectedLocation:d,distance:i,ignoreLocation:l}),j<=p)){if(p=j,m=r,m<=d)break;o=Math.max(1,2*d-m)}}if(_(t,{errors:x+1,currentLocation:d,expectedLocation:d,distance:i,ignoreLocation:l})>p)break;v=b}const w={isMatch:m>=0,score:Math.max(.001,j)};if(f){const e=function(e=[],t=x.minMatchCharLength){let n=[],r=-1,i=-1,s=0;for(let a=e.length;s<a;s+=1){let a=e[s];a&&-1===r?r=s:a||-1===r||(i=s-1,i-r+1>=t&&n.push([r,i]),r=-1)}return e[s-1]&&s-r>=t&&n.push([r,s-1]),n}(g,o);e.length?c&&(w.indices=e):w.isMatch=!1}return w}function M(e){let t={};for(let n=0,r=e.length;n<r;n+=1){const i=e.charAt(n);t[i]=(t[i]||0)|1<<r-n-1}return t}class C{constructor(e,{location:t=x.location,threshold:n=x.threshold,distance:r=x.distance,includeMatches:i=x.includeMatches,findAllMatches:s=x.findAllMatches,minMatchCharLength:a=x.minMatchCharLength,isCaseSensitive:o=x.isCaseSensitive,ignoreLocation:c=x.ignoreLocation}={}){if(this.options={location:t,threshold:n,distance:r,includeMatches:i,findAllMatches:s,minMatchCharLength:a,isCaseSensitive:o,ignoreLocation:c},this.pattern=o?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;const l=(e,t)=>{this.chunks.push({pattern:e,alphabet:M(e),startIndex:t})},h=this.pattern.length;if(h>T){let e=0;const t=h%T,n=h-t;for(;e<n;)l(this.pattern.substr(e,T),e),e+=T;if(t){const e=h-T;l(this.pattern.substr(e),e)}}else l(this.pattern,0)}searchIn(e){const{isCaseSensitive:t,includeMatches:n}=this.options;if(t||(e=e.toLowerCase()),this.pattern===e){let t={isMatch:!0,score:0};return n&&(t.indices=[[0,e.length-1]]),t}const{location:r,distance:i,threshold:s,findAllMatches:a,minMatchCharLength:o,ignoreLocation:c}=this.options;let l=[],h=0,u=!1;this.chunks.forEach((({pattern:t,alphabet:d,startIndex:p})=>{const{isMatch:m,score:f,indices:g}=S(e,t,d,{location:r+p,distance:i,threshold:s,findAllMatches:a,minMatchCharLength:o,includeMatches:n,ignoreLocation:c});m&&(u=!0),h+=f,m&&g&&(l=[...l,...g])}));let d={isMatch:u,score:u?h/this.chunks.length:1};return u&&n&&(d.indices=l),d}}class k{constructor(e){this.pattern=e}static isMultiMatch(e){return A(e,this.multiRegex)}static isSingleMatch(e){return A(e,this.singleRegex)}search(){}}function A(e,t){const n=e.match(t);return n?n[1]:null}class W extends k{constructor(e,{location:t=x.location,threshold:n=x.threshold,distance:r=x.distance,includeMatches:i=x.includeMatches,findAllMatches:s=x.findAllMatches,minMatchCharLength:a=x.minMatchCharLength,isCaseSensitive:o=x.isCaseSensitive,ignoreLocation:c=x.ignoreLocation}={}){super(e),this._bitapSearch=new C(e,{location:t,threshold:n,distance:r,includeMatches:i,findAllMatches:s,minMatchCharLength:a,isCaseSensitive:o,ignoreLocation:c})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class D extends k{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let t,n=0;const r=[],i=this.pattern.length;for(;(t=e.indexOf(this.pattern,n))>-1;)n=t+i,r.push([t,n-1]);const s=!!r.length;return{isMatch:s,score:s?0:1,indices:r}}}const N=[class extends k{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const t=e===this.pattern;return{isMatch:t,score:t?0:1,indices:[0,this.pattern.length-1]}}},D,class extends k{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const t=e.startsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,this.pattern.length-1]}}},class extends k{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const t=!e.startsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,e.length-1]}}},class extends k{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const t=!e.endsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,e.length-1]}}},class extends k{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const t=e.endsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[e.length-this.pattern.length,e.length-1]}}},class extends k{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const t=-1===e.indexOf(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,e.length-1]}}},W],L=N.length,F=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/;const I=new Set([W.type,D.type]);class E{constructor(e,{isCaseSensitive:t=x.isCaseSensitive,includeMatches:n=x.includeMatches,minMatchCharLength:r=x.minMatchCharLength,ignoreLocation:i=x.ignoreLocation,findAllMatches:s=x.findAllMatches,location:a=x.location,threshold:o=x.threshold,distance:c=x.distance}={}){this.query=null,this.options={isCaseSensitive:t,includeMatches:n,minMatchCharLength:r,findAllMatches:s,ignoreLocation:i,location:a,threshold:o,distance:c},this.pattern=t?e:e.toLowerCase(),this.query=function(e,t={}){return e.split("|").map((e=>{let n=e.trim().split(F).filter((e=>e&&!!e.trim())),r=[];for(let i=0,s=n.length;i<s;i+=1){const e=n[i];let s=!1,a=-1;for(;!s&&++a<L;){const n=N[a];let i=n.isMultiMatch(e);i&&(r.push(new n(i,t)),s=!0)}if(!s)for(a=-1;++a<L;){const n=N[a];let i=n.isSingleMatch(e);if(i){r.push(new n(i,t));break}}}return r}))}(this.pattern,this.options)}static condition(e,t){return t.useExtendedSearch}searchIn(e){const t=this.query;if(!t)return{isMatch:!1,score:1};const{includeMatches:n,isCaseSensitive:r}=this.options;e=r?e:e.toLowerCase();let i=0,s=[],a=0;for(let o=0,c=t.length;o<c;o+=1){const r=t[o];s.length=0,i=0;for(let t=0,o=r.length;t<o;t+=1){const o=r[t],{isMatch:c,indices:l,score:h}=o.search(e);if(!c){a=0,i=0,s.length=0;break}if(i+=1,a+=h,n){const e=o.constructor.type;I.has(e)?s=[...s,...l]:s.push(l)}}if(i){let e={isMatch:!0,score:a/i};return n&&(e.indices=s),e}}return{isMatch:!1,score:1}}}const P=[];function R(e,t){for(let n=0,r=P.length;n<r;n+=1){let r=P[n];if(r.condition(e,t))return new r(e,t)}return new C(e,t)}const $="$and",H="$or",q="$path",z="$val",J=e=>!(!e[$]&&!e[H]),K=e=>({[$]:Object.keys(e).map((t=>({[t]:e[t]})))});function U(e,t,{auto:n=!0}={}){const r=e=>{let i=Object.keys(e);const s=(e=>!!e[q])(e);if(!s&&i.length>1&&!J(e))return r(K(e));if((e=>!o(e)&&u(e)&&!J(e))(e)){const r=s?e[q]:i[0],a=s?e[z]:e[r];if(!c(a))throw new Error((e=>`Invalid value for key ${e}`)(r));const o={keyId:j(r),pattern:a};return n&&(o.searcher=R(a,t)),o}let a={children:[],operator:i[0]};return i.forEach((t=>{const n=e[t];o(n)&&n.forEach((e=>{a.children.push(r(e))}))})),a};return J(e)||(e=K(e)),r(e)}function V(e,t){const n=e.matches;t.matches=[],d(n)&&n.forEach((e=>{if(!d(e.indices)||!e.indices.length)return;const{indices:n,value:r}=e;let i={indices:n,value:r};e.key&&(i.key=e.key.src),e.idx>-1&&(i.refIndex=e.idx),t.matches.push(i)}))}function Q(e,t){t.score=e.score}class B{constructor(e,t={},n){this.options={...x,...t},this.options.useExtendedSearch,this._keyStore=new g(this.options.keys),this.setCollection(e,n)}setCollection(e,t){if(this._docs=e,t&&!(t instanceof O))throw new Error("Incorrect 'index' type");this._myIndex=t||w(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){d(e)&&(this._docs.push(e),this._myIndex.add(e))}remove(e=(()=>!1)){const t=[];for(let n=0,r=this._docs.length;n<r;n+=1){const i=this._docs[n];e(i,n)&&(this.removeAt(n),n-=1,r-=1,t.push(i))}return t}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:t=-1}={}){const{includeMatches:n,includeScore:r,shouldSort:i,sortFn:s,ignoreFieldNorm:a}=this.options;let o=c(e)?c(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return function(e,{ignoreFieldNorm:t=x.ignoreFieldNorm}){e.forEach((e=>{let n=1;e.matches.forEach((({key:e,norm:r,score:i})=>{const s=e?e.weight:null;n*=Math.pow(0===i&&s?Number.EPSILON:i,(s||1)*(t?1:r))})),e.score=n}))}(o,{ignoreFieldNorm:a}),i&&o.sort(s),l(t)&&t>-1&&(o=o.slice(0,t)),function(e,t,{includeMatches:n=x.includeMatches,includeScore:r=x.includeScore}={}){const i=[];return n&&i.push(V),r&&i.push(Q),e.map((e=>{const{idx:n}=e,r={item:t[n],refIndex:n};return i.length&&i.forEach((t=>{t(e,r)})),r}))}(o,this._docs,{includeMatches:n,includeScore:r})}_searchStringList(e){const t=R(e,this.options),{records:n}=this._myIndex,r=[];return n.forEach((({v:e,i:n,n:i})=>{if(!d(e))return;const{isMatch:s,score:a,indices:o}=t.searchIn(e);s&&r.push({item:e,idx:n,matches:[{score:a,value:e,norm:i,indices:o}]})})),r}_searchLogical(e){const t=U(e,this.options),n=(e,t,r)=>{if(!e.children){const{keyId:n,searcher:i}=e,s=this._findMatches({key:this._keyStore.get(n),value:this._myIndex.getValueForItemAtKeyId(t,n),searcher:i});return s&&s.length?[{idx:r,item:t,matches:s}]:[]}const i=[];for(let s=0,a=e.children.length;s<a;s+=1){const a=e.children[s],o=n(a,t,r);if(o.length)i.push(...o);else if(e.operator===$)return[]}return i},r=this._myIndex.records,i={},s=[];return r.forEach((({$:e,i:r})=>{if(d(e)){let a=n(t,e,r);a.length&&(i[r]||(i[r]={idx:r,item:e,matches:[]},s.push(i[r])),a.forEach((({matches:e})=>{i[r].matches.push(...e)})))}})),s}_searchObjectList(e){const t=R(e,this.options),{keys:n,records:r}=this._myIndex,i=[];return r.forEach((({$:e,i:r})=>{if(!d(e))return;let s=[];n.forEach(((n,r)=>{s.push(...this._findMatches({key:n,value:e[r],searcher:t}))})),s.length&&i.push({idx:r,item:e,matches:s})})),i}_findMatches({key:e,value:t,searcher:n}){if(!d(t))return[];let r=[];if(o(t))t.forEach((({v:t,i:i,n:s})=>{if(!d(t))return;const{isMatch:a,score:o,indices:c}=n.searchIn(t);a&&r.push({score:o,key:e,value:t,idx:i,norm:s,indices:c})}));else{const{v:i,n:s}=t,{isMatch:a,score:o,indices:c}=n.searchIn(i);a&&r.push({score:o,key:e,value:i,norm:s,indices:c})}return r}}B.version="6.6.2",B.createIndex=w,B.parseIndex=function(e,{getFn:t=x.getFn,fieldNormWeight:n=x.fieldNormWeight}={}){const{keys:r,records:i}=e,s=new O({getFn:t,fieldNormWeight:n});return s.setKeys(r),s.setIndexRecords(i),s},B.config=x,B.parseQuery=U,function(...e){P.push(...e)}(E);var Y,G=n("saLn"),Z=n("hYHy"),X=n.n(Z),ee=n("QM50"),te=n("Mdix"),ne=n("PDuF"),re=n("YFqc"),ie=n.n(re),se=n("wJ4g"),ae=n("MhZx"),oe=n("ygR4");function ce(){return(ce=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var le,he=function(e){return r.createElement("svg",ce({width:21,height:20,fill:"#CCD1DA",xmlns:"http://www.w3.org/2000/svg"},e),Y||(Y=r.createElement("path",{d:"M20.378 19.289l-6.085-6.086a7.876 7.876 0 002.04-5.286C16.333 3.55 12.782 0 8.417 0 4.05 0 .5 3.551.5 7.917c0 4.365 3.551 7.916 7.917 7.916a7.876 7.876 0 005.286-2.04l6.086 6.085a.416.416 0 00.589 0 .417.417 0 000-.59zM8.417 15a7.092 7.092 0 01-7.084-7.083A7.092 7.092 0 018.417.833 7.092 7.092 0 0115.5 7.917C15.5 11.822 12.322 15 8.417 15z"})))};function ue(){return(ue=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var de=function(e){return r.createElement("svg",ue({width:13,height:12,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),le||(le=r.createElement("path",{d:"M12.334 1.346l-1.18-1.18L6.5 4.822 1.846.167.667 1.346 5.321 6 .667 10.654l1.18 1.18L6.5 7.178l4.655 4.654 1.179-1.179L7.679 6l4.655-4.654z",fill:"#CCD1DA"})))},pe=n("LjSu"),me=n("Mpui"),fe=n.n(me),ge=n("TSYQ"),be=n.n(ge),ve=n("TTxv"),je=n("nKUr"),xe=function(e){var t=e.handleChange,n=e.setSearchValue,i=e.searchValue,s=Object(r.useState)(null),o=s[0],c=s[1],l=Object(a.useRouter)(),h=Object(ae.a)().width,u=l.pathname===Object(ve.a)().blog?se.t[0].name:l.pathname.replace("".concat(Object(ve.a)().blog,"/"),""),d=Object(r.useState)(!1),p=d[0],m=d[1],f=Object(r.useState)(!1),g=f[0],b=f[1],v=Object(r.useRef)(null),j=Object(r.useMemo)((function(){return function(e,t){var n=[];return e.map((function(e){return e.category.map((function(e){return n.push(e)}))})),t.filter((function(e){return n.every((function(t){return t!==e.name&&"all"!==e.name}))?void 0:e}))}(oe,se.t)}),[oe]);Object(r.useEffect)((function(){p&&o&&o.focus()}),[p,o]);var x=Object(r.useCallback)((function(e){c(e)}),[o,c]);return Object(je.jsxs)(je.Fragment,{children:[Object(je.jsxs)("div",{className:be()(fe.a.filters,p&&fe.a.hide),children:[h<=1200?Object(je.jsxs)("div",{className:fe.a.dropdown,children:[Object(je.jsx)("div",{children:Object(je.jsxs)("a",{onClick:function(){var e=(v||{}).current;if(b(!g),e){if(""===e.style.transform||"rotate(180deg)"===e.style.transform)return void(e.style.transform="rotate(0deg)");e.style.transform="rotate(180deg)"}},children:[u,Object(je.jsx)("img",{height:7,width:42,src:"/navigateDown.svg",ref:v,alt:"icon"})]})}),Object(je.jsx)("div",{className:be()(fe.a.dropdownItemWrapper,"dropdown",g&&fe.a.changeZIndex),children:j.map((function(e,t){var n=e.name,r=e.link;return Object(je.jsx)("div",{className:fe.a.dropdownItem,children:Object(je.jsx)(ie.a,{href:r,children:Object(je.jsx)("a",{id:n,children:n})})},t)}))})]}):Object(je.jsx)("div",{className:fe.a.deskDropdown,children:j.map((function(e,t){var n=e.name,r=e.link;return Object(je.jsx)(ie.a,{href:r,children:Object(je.jsx)("div",{className:be()(fe.a.deskDropdownItem,u===n&&fe.a.selected),children:n})},t)}))}),Object(je.jsx)("div",{className:fe.a.search,onClick:function(){return m(!0)},children:Object(je.jsx)(he,{})})]}),Object(je.jsxs)("div",{className:be()(fe.a.inputWrapper,!p&&fe.a.hide),children:[Object(je.jsx)(pe.a,{forwardRef:x,placeholder:"Search",type:"text",className:fe.a.input,onChange:t,name:"search",value:i}),Object(je.jsx)(de,{className:fe.a.cross,onClick:function(){m(!1),n("")}}),Object(je.jsx)(he,{className:fe.a.search})]})]})},ye=n("6FTQ");var Oe=n("8rE2");function we(e){return function(e){if(Array.isArray(e))return Object(ye.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||Object(Oe.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var _e=n("NEQR"),Te=n.n(_e),Se=function(e){var t=e.totalPages,n=e.pathname,r=e.pageNumber,i=we(Array(t).keys()).map((function(e){return e+1}));return Object(je.jsxs)("div",{className:Te.a.pagination,children:[Object(je.jsx)("button",{disabled:1===r,children:Object(je.jsx)(ie.a,{href:1===r||2===i.length?n:"".concat(n,"?page=").concat(r-1),children:Object(je.jsx)("img",{height:21,width:13,alt:"icon",src:"/images/blog/elements/paginationArrow.svg"})})}),i.map((function(e){return Object(je.jsx)(ie.a,{href:1===e?n:"".concat(n,"?page=").concat(e),children:Object(je.jsx)("a",{className:r===e?Te.a.paginationActiveItem:void 0,children:e})},e)})),Object(je.jsx)("button",{disabled:r===i[i.length-1],children:Object(je.jsx)(ie.a,{href:"".concat(n,"?page=").concat(r+1),children:Object(je.jsx)("img",{height:21,width:13,alt:"icon",src:"/images/blog/elements/paginationArrow.svg",style:{transform:"rotate(180deg)"}})})})]})},Me=n("E0DC"),Ce=n("ar21"),ke=n("MRCQ"),Ae=n("4rMk"),We=n("wmCF"),De=n.n(We);var Ne=!0;t.default=function(e){var t=e.blogArticles,n=e.canonicalLink,i=Ce.a.blog,o=Ce.a.receiveNotifications,c=Ce.a.subscribe,l=[],h=Object(r.useState)(""),u=h[0],d=h[1],p=Object(r.useState)(""),m=p[0],f=p[1],g=Object(r.useState)(""),b=g[0],v=g[1],j=Object(r.useState)(""),x=j[0],y=j[1],O=Object(r.useState)(!1),w=O[0],_=O[1],T=Object(a.useRouter)(),S=T.query,M=T.pathname,C=T.asPath,k=S.page?Number(S.page):1,A=12,W=Object(r.useState)(0),D=W[0],N=W[1],L=Object(r.useState)(A),F=L[0],I=L[1];Object(r.useEffect)((function(){(k>Math.ceil(l.length/A)||C.includes("page=1"))&&T.replace(M)}),[]),Object(r.useEffect)((function(){N(k*A-A),I(k*A)}),[k]);var E=T.pathname===Object(ve.a)().blog?se.t[0].name:T.pathname.replace("".concat(Object(ve.a)().blog,"/"),""),P="".concat(E[0].toUpperCase()).concat(E.slice(1)),R=se.t.find((function(e){return e.name===E}));t.filter((function(e){if(E===se.t[0].name&&l.push(e),e.category.some((function(e){return e.toLowerCase()===E}))&&l.push(e),""===m)return t;if(b){var n=new B(l,se.z);return l=n.search(b).map((function(e){return e.item}))}return l}));var $=Object(G.a)((function(e){v(e)}),400);return Object(r.useEffect)((function(){X.a.validate(u)&&y("")}),[u]),Object(je.jsxs)(ee.a,{children:[Object(je.jsxs)(s.a,{children:[Object(je.jsxs)("title",{children:[R.metaTitle||"Software Development Company Blog ".concat(P)," ","- Page ",k," | WTT Solutions"]}),Object(je.jsx)("meta",{name:"description",content:"".concat(ke.a.blogDescription," ").concat("All"===P?"":"- ".concat(P)," | Page ").concat(k)}),Object(je.jsx)("link",{rel:"canonical",href:n||"https://wtt-solutions.com/blog"})]}),Object(je.jsxs)("div",{className:De.a.headerWrapper,children:[Object(je.jsxs)("h1",{className:De.a.blog,children:[i," ","All"!==P?P:""," ",("All"===P||"Insights"===P)&&"page ".concat(k)]}),Object(je.jsx)(xe,{handleChange:function(e){return t=e.target.value,f(t),void $.callback(t);var t},setSearchValue:f,searchValue:m})]}),Object(je.jsxs)("div",{className:De.a.contentWrapper,children:[Object(je.jsx)("div",{className:De.a.middleLine}),Object(je.jsxs)("div",{className:De.a.deskLines,children:[Object(je.jsx)("div",{}),Object(je.jsx)("div",{})]}),Object(je.jsx)(te.b,{data:l.slice(D,F),searchValue:b,activeFilter:E}),l.length>A&&Object(je.jsx)(Se,{pathname:M,totalPages:Math.ceil(l.length/A),pageNumber:k}),Object(je.jsx)(ne.a,{error:x,emailValue:u,handleChange:function(e){var t=e.target;x&&y(""),d(t.value)},handleSubmit:function(){X.a.validate(u)?Ae.a.subscribe(u,_,d,y):y("Invalid email address!")},title:o,btnTitle:c,isConfirmed:w})]}),Object(je.jsx)(Me.default,{CTATitle:Ce.a.CTATitle})]})}},"6FTQ":function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,"a",(function(){return r}))},"8rE2":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("6FTQ");function i(e,t){if(e){if("string"===typeof e)return Object(r.a)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r.a)(e,t):void 0}}},"9T3l":function(e,t,n){e.exports={wrapper:"CTA_wrapper__1fMXi",mainTitle:"CTA_mainTitle__3NwWb",formWrapper:"CTA_formWrapper__2t5UV",photosWrapper:"CTA_photosWrapper__1j35_",ceoWrapper:"CTA_ceoWrapper__uDaOR",messageWrapper:"CTA_messageWrapper__3w7TG"}},E0DC:function(e,t,n){"use strict";n.r(t);var r=n("cpVT"),i=n("q1tI"),s=n("Aiso"),a=n.n(s),o=n("qTjs"),c=n("9T3l"),l=n.n(c),h=n("vnZR"),u=n("lwWn"),d=n("TSYQ"),p=n.n(d),m=n("wJ4g"),f=n("d6iV"),g=n("hYHy"),b=n.n(g),v=n("0KOP"),j=n("nKUr");function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.default=function(e){var t=e.CTATitle,n=e.topTitle,s=e.inputClass,c=e.wrapperClass,d=Object(o.useTranslation)().t,g=d("CTAForm"),x=d("submitForm"),O=d("getInTouchModalText"),w=Object(i.useState)(!1),_=w[0],T=w[1],S=Object(i.useState)({name:"",email:"",message:"",formName:m.k.PAGES_FORM}),M=S[0],C=S[1],k=Object(i.useState)(""),A=k[0],W=k[1];Object(i.useEffect)((function(){W("")}),[M.email]);var D=Object(i.useCallback)((function(e){var t=e.target;C(y(y({},M),{},Object(r.a)({},t.name,t.value)))}),[C,M]);return Object(j.jsxs)("div",{className:p()(l.a.wrapper,c),children:[n&&Object(j.jsx)("div",{className:l.a.mainTitle,children:Object(j.jsx)("span",{dangerouslySetInnerHTML:{__html:n}})}),Object(j.jsxs)("div",{className:l.a.photosWrapper,children:[Object(j.jsx)("div",{className:l.a.ceoWrapper,children:Object(j.jsx)(a.a,{layout:"fill",src:Object(v.a)({mb:"/images/CTA/ceoMob.png",tabl:"/images/CTA/ceoTabl.png",desk:"/images/CTA/ceoDesk.png"}),alt:"img",quality:20})}),Object(j.jsxs)("div",{className:l.a.messageWrapper,children:[Object(j.jsx)(a.a,{layout:"fill",src:Object(v.a)({mb:"/images/CTA/cloudMob.png",tabl:"/images/CTA/cloudTabl.png",desk:"/images/CTA/cloudDesk.png"}),alt:"img",quality:75}),Object(j.jsxs)("p",{children:[Object(j.jsx)("span",{children:d("CTAMessage.name")}),Object(j.jsx)("br",{}),Object(j.jsx)("span",{children:d("CTAMessage.position")}),Object(j.jsx)("br",{}),Object(j.jsx)("span",{children:d("CTAMessage.message")})]})]})]}),Object(j.jsxs)("div",{className:l.a.formWrapper,children:[Object(j.jsx)("h3",{children:t}),Object(j.jsx)(h.a,{data:g,btnTitle:x,values:M,formClassName:s,handleChange:D,handleSubmit:function(e){e.preventDefault(),b.a.validate(M.email)?(f.a.send(M),C({name:"",email:"",message:"",formName:m.k.PAGES_FORM}),T(!_)):W("Invalid email address!")},errors:{email:A}}),_&&Object(j.jsx)(u.a,{toggle:function(){return T(!_)},modal:_,bodyText:O})]})]})}},Gqb2:function(e,t,n){e.exports={wrapper:"NotFound_wrapper__2zdSM"}},HXZE:function(e,t,n){"use strict";var r,i,s=n("q1tI");function a(){return(a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}t.a=function(e){return s.createElement("svg",a({width:15,height:15,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),r||(r=s.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.5 1.5a6 6 0 100 12 6 6 0 000-12zm-7.333 6a7.333 7.333 0 1114.667 0 7.333 7.333 0 01-14.667 0z",fill:"#CCD1DA"})),i||(i=s.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.5 2.833c.369 0 .667.299.667.667v3.588l2.298 1.149A.667.667 0 119.87 9.43L7.202 8.096a.667.667 0 01-.368-.596v-4c0-.368.298-.667.666-.667z",fill:"#CCD1DA"})))}},KSbk:function(e,t,n){e.exports={form:"Form_form__2ZGkc",recaptcha:"Form_recaptcha__3CHcl"}},MRCQ:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r={homePageTitle:"Software Development Company and Service Provider | WTT Solutions",homePageDescription:"WTT Solutions is a reliable software development company - we provide a range of web development services, design, and custom software development solutions",contactTitle:"Tell us about your project vision - get in touch on WTT Solutions",contactDescription:"If you have any project in mind - contact WTT Solutions and tell us what you are looking for in terms of software services \u2705 Free estimates and confidentiality",aboutUsTitle:"About Us | WTT Solutions",aboutUsDescription:"About Us on WTT Solutions",martechTitle:"New Marketing technologies and MarTech software | WTT Solutions",martechDescription:"WTT Solutions helps improve your MarTech experience with new marketing technologies \u2705 We will help you develop MarTech software to get information from data",martechKeywords:"MarTech developers, custom software solutions, MarTech solutions, MarTech Software Development, MarTech development services, Development services for MarTech, MarTech developers, Marketing Technology Development",mobileDevelopmentTitle:"Custom Mobile ( APP) Development Company | WTT Solutions",mobileDevelopmentDescription:"WTT Solutions is a custom mobile development company \u2705 We can help you create an MVP and scale your business with the latest technology using a mobile SDK",mobileDevelopmentKeywords:"mobile app development company, cross platform, solution, iOS, Android, Mobile application development solutions, mobile development services, mobile software development services, mobile application development solutions, mobile app development services, application development for mobile, mobile app as a service, mobile software development services, application development for mobile",ourWorkTitle:"Our work experience - Software Company Portfolio | WTT Solutions",ourWorkDescription:"Work experience of WTT Solutions \u2705 Information about our technology stack, industries we work with and the projects we created for enterprises and startups",enterpriseTitle:"Enterprise Software Development Company | WTT Solutions",enterpriseDescription:"Custom enterprise software development company that offers software engineering services \u2705 Enjoy software solutions tailored to your specific needs and plans",platformDevelopmentTitle:"Digital Platform Development Services | WTT Solutions",platformDevelopmentDescription:"Digital platform development for your business - WTT Solutions \u2705 We can build cross platform app, cloud-based apps and customize ready-made solutions for your business",developmentForStartupsTitle:"Software Development for Startups | WTT Solutions",developmentForStartupsDescription:"We provide startup development services, covering all aspects of performance, scalability, and security \u2705 Web development and app for startups | WTT Solutions",edtechTitle:"Ed-tech Software Development Services | WTT Solutions",edtechDescription:"WTT Solutions is an eLearning software development company.\u2714\ufe0f We build a custom development solution for your business.",hrTechTitle:"HR technologies - Development HR( HRM) Software | WTT Solutions",hrTechDescription:"Improve your recruiting process and HR analytics with HRTech solutions \u2705 WTT Solutions provides human resources software that helps to manage employees",frontendTitle:"Custom Front-end Development Services | WTT Solutions",frontendDescription:"WTT Solutions is a front-end development company \u2705 We apply our cross-industry expertise and custom front-end services to create scalable and secure projects ",backendDevelopmentTitle:"Custom Back-end Development Services | WTT Solutions",backendDevelopmentDescription:"WTT Solutions is a back-end development company \u2705 We apply our cross-industry expertise and custom back-end services to create scalable and secure projects",blogDescription:"On the WTT Solutions blog you can find news and trends on how to boost your business growth with custom software development solutions",reactTitle:"React JS Development Company and Consultancy - WTT Solutions",reactDescription:"See how WTT Solutions react development company provides its services and read real life testimonials and case studies.",angularTitle:"Angular Development Company and Consultancy - WTT Solutions",angularDescription:"See how WTT Solutions angular development company provides its services and read real-life testimonials and case studies.",nodeTitle:"Node JS Development Company and Consultancy - WTT Solutions",nodeDescription:"See how WTT Solutions NodeJS development company provides its services and read real-life testimonials and case studies",netTitle:".NET Development Company and Consultancy - WTT Solutions",netDescription:"See how WTT Solutions .NET the development company provides its services and reads real-life testimonials and case studies.",vueTitle:"Vue.JS Development Company and Consultancy - WTT Solutions",vueDescription:"See how WTT Solutions Vue.JS development company provides its services and read real-life testimonials and case studies.",flutterTitle:"Flutter Development Company and Consultancy - WTT Solutions",flutterDescription:"See how WTT Solutions Flutter development company provides its services and read real life testimonials and case studies.",blockchainTitle:"Blockchain development (AMP) and consulting | WTT Solutions",blockchainDescription:"WTT Solutions is a full-stack blockchain development company that produces custom products for different audiences \u2705 Free blockchain consulting and quotes",aiServicesTitle:"Artificial Intelligence (AI) development company | WTT Solutions",aiServicesDescription:"Automate business processes with the help of machine learning and Artificial Intelligence development \u2705 Uncover hidden potential of your data - WTT Solutions"}},Mdix:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var r=n("Aiso"),i=n.n(r),s=n("YFqc"),a=n.n(s),o=n("ar21"),c=n("wJ4g"),l=n("TTxv"),h=n("u/Nj"),u=n.n(h),d=n("TSYQ"),p=n.n(d),m=n("HXZE"),f=n("Gqb2"),g=n.n(f),b=n("nKUr"),v=function(e){var t=e.search,n=e.activeFilter,r=o.a.tryAgain,i=o.a.couldntFind,s=o.a.topicsBelow,a=o.a.orMaybe,c=t||n;return Object(b.jsxs)("div",{className:g.a.wrapper,children:[Object(b.jsx)("img",{src:"/images/blog/elements/notFound.svg",alt:"icon"}),Object(b.jsx)("h2",{children:"".concat(i,'  "').concat(c[0].toUpperCase()).concat(c.slice(1),'"')}),t?Object(b.jsxs)("h3",{children:[r," ",Object(b.jsx)("br",{}),a]}):Object(b.jsx)("h3",{children:s})]})},j=function(e){var t=e.data,n=o.a.wrtittenBy,r=t.backgrounds,s=t.title,h=t.date,d=t.author,f=t.id,g=t.metaDescription.replace(/\u2714\ufe0f/,"").replace(/\u2705/,"").replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,""),v=c.s.find((function(e){return e.name===d})).link;return Object(b.jsxs)("div",{className:p()(u.a.item),children:[Object(b.jsxs)("div",{children:[Object(b.jsx)(a.a,{href:Object(l.a)(f).article,children:Object(b.jsx)("a",{children:Object(b.jsx)("div",{className:u.a.imgWrapper,children:Object(b.jsx)(i.a,{layout:"fill",src:r.preview,alt:"img",quality:10})})})}),Object(b.jsxs)("div",{className:u.a.info,children:[Object(b.jsxs)("p",{className:u.a.date,children:[Object(b.jsx)(m.a,{})," ",h]}),Object(b.jsxs)("p",{className:u.a.author,children:[n,v?Object(b.jsx)(a.a,{href:v,children:Object(b.jsx)("a",{children:d})}):d]})]}),Object(b.jsx)("div",{className:u.a.titleWrapper,children:Object(b.jsx)(a.a,{href:Object(l.a)(f).article,children:Object(b.jsx)("a",{className:u.a.title,children:s})})}),Object(b.jsx)("hr",{}),Object(b.jsx)("p",{className:u.a.text,children:g})]}),Object(b.jsx)("div",{className:u.a.linkWrapp,children:Object(b.jsx)(a.a,{href:Object(l.a)(f).article,children:Object(b.jsxs)("a",{className:u.a.link,children:[Object(b.jsx)("p",{className:u.a.linkText,children:o.a.learnMore}),Object(b.jsx)("img",{src:"/images/blog/elements/blogArrow.svg",className:u.a.arrow,alt:"icon"})]})})})]},f)};t.b=function(e){var t=e.data,n=e.title,r=e.searchValue,i=e.activeFilter;return Object(b.jsx)(b.Fragment,{children:t?Object(b.jsxs)("div",{className:p()(u.a.wrapper,n&&u.a.withTitle),children:[n&&Object(b.jsx)("h3",{className:u.a.mainTitle,children:n}),t.map((function(e,t){return Object(b.jsx)(j,{data:e},t)}))]}):Object(b.jsx)(v,{search:r,activeFilter:i})})}},Mpui:function(e,t,n){e.exports={hide:"Header_hide__bzfRt",filters:"Header_filters__3olnB",inputWrapper:"Header_inputWrapper__2iARp",cross:"Header_cross__3R4uT",search:"Header_search__1bhD0",input:"Header_input__16aCh",dropdown:"Header_dropdown__yQFhy",changeZIndex:"Header_changeZIndex__1rBc7",dropdownItemWrapper:"Header_dropdownItemWrapper__3Gn_q",dropdownItem:"Header_dropdownItem__pg9xJ",deskDropdown:"Header_deskDropdown__b7NK6",deskDropdownItem:"Header_deskDropdownItem__2LzkA",selected:"Header_selected__1qeFC"}},NEQR:function(e,t,n){e.exports={pagination:"Pagination_pagination__3zJ7S",paginationActiveItem:"Pagination_paginationActiveItem__2Qi0H"}},lwWn:function(e,t,n){"use strict";var r,i=n("xTWq"),s=n.n(i),a=n("DCcX"),o=n("q1tI");function c(){return(c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var l=function(e){return o.createElement("svg",c({width:20,height:20,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),r||(r=o.createElement("path",{d:"M19.334 2.553L17.447.667 10 8.113 2.554.667.667 2.553 8.114 10 .667 17.447l1.887 1.886L10 11.887l7.447 7.446 1.887-1.886L11.887 10l7.447-7.447z",fill:"#CCD1DA"})))},h=n("nKUr");t.a=function(e){var t=e.toggle,n=e.modal,r=e.bodyText;return Object(h.jsxs)(a.a,{isOpen:n,toggle:t,className:s.a.modal,children:[Object(h.jsx)(l,{onClick:function(){return t()}}),Object(h.jsx)("img",{alt:"icon",src:"/images/get-started/modalIcon.svg"}),Object(h.jsx)("p",{children:r})]})}},"u/Nj":function(e,t,n){e.exports={wrapper:"ArticlePreview_wrapper__1Myeb",mainTitle:"ArticlePreview_mainTitle__3RgfS",imgWrapper:"ArticlePreview_imgWrapper__2FnSo",info:"ArticlePreview_info__1dOHJ",author:"ArticlePreview_author__2ejit",item:"ArticlePreview_item__2AaAq",titleWrapper:"ArticlePreview_titleWrapper__YbFyo",title:"ArticlePreview_title__3xz0z",text:"ArticlePreview_text___an6t",linkWrapp:"ArticlePreview_linkWrapp__23EUH",linkText:"ArticlePreview_linkText__2NDtS",arrow:"ArticlePreview_arrow__2VMAJ",readAllLink:"ArticlePreview_readAllLink__12rT4",withTitle:"ArticlePreview_withTitle__4j7Bq",middleLine:"ArticlePreview_middleLine__w--SR"}},vnZR:function(e,t,n){"use strict";var r=n("q1tI"),i=n("KSbk"),s=n.n(i),a=n("TSYQ"),o=n.n(a),c=n("LjSu"),l=n("f++f"),h=n("nKUr");t.a=function(e){var t=e.handleChange,n=e.btnTitle,i=e.handleButtonClick,a=e.data,u=e.handleSubmit,d=e.values,p=e.id,m=e.formClassName,f=e.inputClassName,g=e.errors;return Object(h.jsxs)("form",{onSubmit:u,id:p,className:o()(s.a.form,m),children:[a.map((function(e,n){var i=e.name,s=e.type,a=e.placeholder,o=e.required,l=e.label;return Object(h.jsx)(r.Fragment,{children:Object(h.jsx)(c.a,{labelText:l,name:i,placeholder:a,required:o,type:s,className:f,onChange:t,value:d[i],error:g&&g[i]},n)},n)})),Object(h.jsx)(l.a,{title:n,onClick:i,btnType:"submit"})]})}},wmCF:function(e,t,n){e.exports={contentWrapper:"blog_contentWrapper__o_ITG",headerWrapper:"blog_headerWrapper__15faI",topMargin:"blog_topMargin__1Yet2",deskLines:"blog_deskLines__2YHtU",middleLine:"blog_middleLine__lx9pC"}},xTWq:function(e,t,n){e.exports={modal:"modal_modal__2c4cG"}}}]);