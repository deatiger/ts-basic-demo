(()=>{"use strict";var e={617:function(e,n){var t=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(o,u){function i(e){try{l(r.next(e))}catch(e){u(e)}}function c(e){try{l(r.throw(e))}catch(e){u(e)}}function l(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(i,c)}l((r=r.apply(e,n||[])).next())}))},r=this&&this.__generator||function(e,n){var t,r,o,u,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return u={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function c(c){return function(l){return function(c){if(t)throw new TypeError("Generator is already executing.");for(;u&&(u=0,c[0]&&(i=0)),i;)try{if(t=1,r&&(o=2&c[0]?r.return:c[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,c[1])).done)return o;switch(r=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return i.label++,{value:c[1],done:!1};case 5:i.label++,r=c[1],c=[0];continue;case 7:c=i.ops.pop(),i.trys.pop();continue;default:if(!((o=(o=i.trys).length>0&&o[o.length-1])||6!==c[0]&&2!==c[0])){i=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){i.label=c[1];break}if(6===c[0]&&i.label<o[1]){i.label=o[1],o=c;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(c);break}o[2]&&i.ops.pop(),i.trys.pop();continue}c=n.call(e,i)}catch(e){c=[6,e],r=0}finally{t=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,l])}}};Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(){return t(this,void 0,void 0,(function(){var e,n,o=this;return r(this,(function(u){switch(u.label){case 0:return e=function(){return t(o,void 0,void 0,(function(){var e,n;return r(this,(function(t){switch(t.label){case 0:return[4,fetch("https://api.github.com/users/deatiger").then((function(e){return e})).catch((function(e){return console.error(e),null}))];case 1:return(e=t.sent())?[4,e.json().then((function(e){return console.log("Asynchronous Promise Sample 1:",e),e})).catch((function(e){return console.error(e),null}))]:[2,null];case 2:return(n=t.sent())?[2,n]:[2,null]}}))}))},e().then((function(e){e&&console.log("Asynchronous Promise Sample 2:",e)})),[4,e()];case 1:return(n=u.sent())&&console.log("Asynchronous Promise Sample 3:",n),[2]}}))}))}},607:function(e,n,t){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0}),(0,r(t(617)).default)()}},n={};!function t(r){var o=n[r];if(void 0!==o)return o.exports;var u=n[r]={exports:{}};return e[r].call(u.exports,u,u.exports,t),u.exports}(607)})();