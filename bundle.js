(function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={i:d,l:!1,exports:{}};return a[d].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var c={};return b.m=a,b.c=c,b.d=function(a,c,d){b.o(a,c)||Object.defineProperty(a,c,{configurable:!1,enumerable:!0,get:d})},b.n=function(a){var c=a&&a.__esModule?function(){return a['default']}:function(){return a};return b.d(c,'a',c),c},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p='',b(b.s=0)})([function(a,b,c){c(1),a.exports=c(3)},function(a,b,c){'use strict';var d=c(2);(0,d.app)({apiRes:[],msg:'\u30DC\u30BF\u30F3\u3092\u62BC\u3057\u3066\u30C7\u30FC\u30BF\u53D6\u5F97\u958B\u59CB',isFeching:!1},{getData:function(){return async function(a,b){a.isFeching||(b.setFetching(!0),b.setMsg('\u30C7\u30FC\u30BF\u53D6\u5F97\u4E2D\u2026'),b.setResult((await fetch('https://script.google.com/macros/s/AKfycbyC1gQm1b6wGO8eIIO5BKGA5n6ePawqOJQ5CC-wtRm7TnIwWKw/exec').then(function(a){return a.json()}))),b.setMsg('\u30C7\u30FC\u30BF\u53D6\u5F97\u5B8C\u4E86\uFF01'),b.setFetching(!1))}},setResult:function(a){return function(){return{apiRes:a}}},setMsg:function(a){return function(){return{msg:a}}},setFetching:function(a){return function(){return{isFeching:a}}}},function(a,b){return(0,d.h)('div',{class:'container'},(0,d.h)('h1',{class:'center title'},'PPP WebAPI'),(0,d.h)('div',{class:'row'},(0,d.h)('button',{class:'center column',onclick:function(){return b.getData()},disabled:a.isFeching},'\u30C7\u30FC\u30BF\u53D6\u5F97'),(0,d.h)('p',{class:'column center'},a.msg)),(0,d.h)('table',null,(0,d.h)('tr',null,(0,d.h)('th',null,'no'),(0,d.h)('th',null,'name'),(0,d.h)('th',null,'animal')),a.apiRes.map(function(a){return(0,d.h)('tr',null,(0,d.h)('td',null,a.no),(0,d.h)('td',null,a.name),(0,d.h)('td',null,a.animal))})))},document.body)},function(a,b){'use strict';Object.defineProperty(b,'__esModule',{value:!0}),b.h=function(a,b){for(var c,d=[],e=[],f=arguments.length;2<f--;)d.push(arguments[f]);for(;d.length;)if((c=d.pop())&&c.pop)for(f=c.length;f--;)d.push(c[f]);else null!=c&&!0!==c&&!1!==c&&e.push(c);return'function'==typeof a?a(b||{},e):{nodeName:a,attributes:b||{},children:e,key:b&&b.key}},b.app=function(a,b,c,d){function e(a,b){return{nodeName:a.nodeName.toLowerCase(),attributes:{},children:b.call(a.childNodes,function(a){return 3===a.nodeType?a.nodeValue:e(a,b)})}}function f(){s=!s;var a=c(w,x);for(d&&!s&&(u=r(d,u,v,v=a));a=t.pop();)a()}function g(){s||(s=!s,setTimeout(f))}function h(a,b){var c={};for(var d in a)c[d]=a[d];for(var d in b)c[d]=b[d];return c}function i(a,b,c){var d={};return a.length?(d[a[0]]=1<a.length?i(a.slice(1),b,c[a[0]]):b,h(c,d)):b}function j(a,b){for(var c=0;c<a.length;c++)b=b[a[c]];return b}function k(a,b,c){for(var d in c)'function'==typeof c[d]?function(d,e){c[d]=function(d){return'function'==typeof(d=e(d))&&(d=d(j(a,w),c)),d&&d!==(b=j(a,w))&&!d.then&&g(w=i(a,h(b,d),w)),d}}(d,c[d]):k(a.concat(d),b[d]=b[d]||{},c[d]=h(c[d]))}function l(a){return a?a.key:null}function m(a,b,c,d,e){if('key'===b);else if('style'===b)for(var f in h(e,c))a[b][f]=null==c||null==c[f]?'':c[f];else'function'==typeof c||b in a&&!d?a[b]=null==c?'':c:null!=c&&!1!==c&&a.setAttribute(b,c),(null==c||!1===c)&&a.removeAttribute(b)}function n(a,b){var c='string'==typeof a||'number'==typeof a?document.createTextNode(a):(b=b||'svg'===a.nodeName)?document.createElementNS('http://www.w3.org/2000/svg',a.nodeName):document.createElement(a.nodeName);if(a.attributes){a.attributes.oncreate&&t.push(function(){a.attributes.oncreate(c)});for(var d=0;d<a.children.length;d++)c.appendChild(n(a.children[d],b));for(var e in a.attributes)m(c,e,a.attributes[e],b)}return c}function o(a,b,c,d){for(var e in h(b,c))c[e]!==('value'==e||'checked'==e?a[e]:b[e])&&m(a,e,c[e],d,b[e]);c.onupdate&&t.push(function(){c.onupdate(a,b)})}function p(a,b,c){if(c=b.attributes){for(var d=0;d<b.children.length;d++)p(a.childNodes[d],b.children[d]);c.ondestroy&&c.ondestroy(a)}return a}function q(a,b,c,d){function e(){a.removeChild(p(b,c))}c.attributes&&(d=c.attributes.onremove)?d(b,e):e()}function r(a,b,c,d,e,f){if(d===c);else if(null==c)b=a.insertBefore(n(d,e),b);else if(d.nodeName&&d.nodeName===c.nodeName){o(b,c.attributes,d.attributes,e=e||'svg'===d.nodeName);for(var g=[],h={},k={},m=0;m<c.children.length;m++){g[m]=b.childNodes[m];var i=c.children[m],p=l(i);null!=p&&(h[p]=[g[m],i])}for(var m=0,s=0;s<d.children.length;){var i=c.children[m],j=d.children[s],p=l(i),t=l(j);if(k[p]){m++;continue}if(null==t)null==p&&(r(b,g[m],i,j,e),s++),m++;else{var u=h[t]||[];p===t?(r(b,u[0],u[1],j,e),m++):u[0]?r(b,b.insertBefore(u[0],g[m]),u[1],j,e):r(b,g[m],null,j,e),s++,k[t]=j}}for(;m<c.children.length;){var i=c.children[m];null==l(i)&&q(b,g[m],i),m++}for(var m in h)k[h[m][1].key]||q(b,h[m][0],h[m][1])}else d.nodeName===c.nodeName?b.nodeValue=d:(b=a.insertBefore(n(d,e),f=b),q(a,f,c));return b}var s,t=[],u=d&&d.children[0]||null,v=u&&e(u,[].map),w=h(a),x=h(b);return g(k([],w,x)),x}},function(){}]);