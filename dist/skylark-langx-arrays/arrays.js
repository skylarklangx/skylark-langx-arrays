/**
 * skylark-langx-arrays - The skylark JavaScript language extension library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx-ns","skylark-langx-types","skylark-langx-objects"],function(r,n,t){var e=Array.prototype.filter,u=Array.prototype.find,f=n.isArrayLike;function a(r,n,t,e){for(var u=r.length,f=t+(e?1:-1);e?f--:++f<u;)if(n(r[f],f,r))return f;return-1}function i(r){return r!=r}function l(r){if(f(r)){for(var n=[],t=0;t<r.length;t++){var e=r[t];if(f(e))for(var u=0;u<e.length;u++)n.push(e[u]);else n.push(e)}return n}return r}function o(r,n,t){return f(r)?(t||[]).concat(Array.prototype.slice.call(r,n||0)):[r]}return r.attach("langx.arrays",{baseFindIndex:a,baseIndexOf:function(r,n,t){if(n!=n)return a(r,i,t);for(var e=t-1,u=r.length;++e<u;)if(r[e]===n)return e;return-1},compact:function(r){return e.call(r,function(r){return null!=r})},first:function(r,n){return n?r.slice(0,n):r[0]},filter:function(r,n){return e.call(r,n)},find:function(r,n){return u.call(r,n)},flatten:l,grep:function(r,n){var e=[];return t.each(r,function(r,t){n(t,r)&&e.push(t)}),e},inArray:function(r,n){if(!n)return-1;var t;if(n.indexOf)return n.indexOf(r);for(t=n.length;t--;)if(n[t]===r)return t;return-1},makeArray:o,toArray:o,merge:function(r,n){var t=n.length,e=r.length,u=0;if("number"==typeof t)for(;u<t;u++)r[e++]=n[u];else for(;void 0!==n[u];)r[e++]=n[u++];return r.length=e,r},forEach:function(r,n){if(r.forEach)return r.forEach(n);for(var t=0;t<r.length;t++)n(r[t],t)},map:function(r,n){var t,e,u,a=[];if(f(r))for(e=0;e<r.length;e++)null!=(t=n.call(r[e],r[e],e))&&a.push(t);else for(u in r)null!=(t=n.call(r[u],r[u],u))&&a.push(t);return l(a)},reduce:function(r,n,t){return Array.prototype.reduce.call(r,n,t)},uniq:function(r){return e.call(r,function(n,t){return r.indexOf(n)==t})}})});
//# sourceMappingURL=sourcemaps/arrays.js.map
