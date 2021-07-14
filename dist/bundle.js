(()=>{var e={991:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(645),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,"*{margin:0;top:0;padding:0}body{height:100%;overflow-x:none}body .information,body .btn{display:inline-block}body .points{margin:0 auto;display:grid;grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;grid-template-rows:1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;height:40rem;width:40rem}body .points .point{display:flex;align-items:center;justify-content:center;border:1px solid #000}body .points .point p{pointer-events:none}.hidden{display:none}.noClick{pointer-events:none}",""]);const i=o},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(o[s]=!0)}for(var a=0;a<e.length;a++){var c=[].concat(e[a]);r&&o[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},695:e=>{"use strict";var t={};e.exports=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}},379:e=>{"use strict";var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},s=[],a=0;a<e.length;a++){var c=e[a],l=r.base?c[0]+r.base:c[0],d=i[l]||0,u="".concat(l," ").concat(d);i[l]=d+1;var p=n(u),f={css:c[1],media:c[2],sourceMap:c[3]};-1!==p?(t[p].references++,t[p].updater(f)):t.push({identifier:u,updater:o(f,r),references:1}),s.push(u)}return s}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var s=0;s<i.length;s++){var a=n(i[s]);t[a].references--}for(var c=r(e,o),l=0;l<i.length;l++){var d=n(i[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}i=c}}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t),t}},795:e=>{"use strict";e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},274:e=>{e.exports=class{constructor(e){this.player=e,this.points=[[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]],this.target=(e,t)=>{let n=0;return 1!==this.points[e][t]&&(0!==this.points[e][t]&&(n=this.points[e][t]),this.points[e][t]=1,n)},this.place=(e,t,n,r)=>{const{length:o}=r,i=[];if(console.log(e,t,n,r.name),console.log(`length: ${o}`,o+t),"h"===n){if(t+o>9)return console.log("horizontal won't fit"),!1;for(let n=0;n<o;n++)i.push(this.points[e][t+n]);if(i.every((e=>0===e))){for(let n=0;n<o;n++)this.points[e][t+n]=r.id+n.toString();return!0}return console.log("horiz overlap"),console.log(i),!1}if(e+o>9)return console.log("vertical won't fit"),!1;for(let n=0;n<o;n++)i.push(this.points[e+n][t]);if(i.every((e=>0===e))){for(let n=0;n<o;n++)this.points[e+n][t]=r.id+n.toString();return!0}return console.log("vert overlap"),!1}}}},179:e=>{e.exports=class{constructor(e,t,n){this.name=e,this.length=t,this.points=new Array(t).fill(0),this.id=n,this.hit=e=>{this.points[e]=1},this.isSunk=()=>!!this.points.every((e=>1===e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var r={};(()=>{"use strict";n.d(r,{UD:()=>k,fw:()=>B,zY:()=>g,g8:()=>b,gp:()=>A,Xh:()=>T,W7:()=>w});var e=n(379),t=n.n(e),o=n(795),i=n.n(o),s=n(695),a=n.n(s),c=n(216),l=n.n(c),d=n(991),u={styleTagTransform:function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}},setAttributes:function(e){var t=n.nc;t&&e.setAttribute("nonce",t)},insert:function(e){var t=a()("head");if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}};u.domAPI=i(),u.insertStyleElement=l(),t()(d.Z,u),d.Z&&d.Z.locals&&d.Z.locals;var p=n(274),f=n.n(p),h=n(179),m=n.n(h);const v=e=>{const t=document.createElement("div");t.className="points",t.id=e.player,e.points.forEach(((n,r)=>{n.forEach(((n,o)=>{const i=document.createElement("div");i.className="point",i.dataset.status=n,i.dataset.coord=[r,o];const s=document.createElement("p");s.textContent=i.dataset.status,i.appendChild(s),"computer"===e.player?i.addEventListener("click",(()=>B(e,i.dataset.coord[0],i.dataset.coord[2]))):i.addEventListener("click",(()=>{console.log(i.dataset.coord),g.place(parseInt(i.dataset.coord[0]),parseInt(i.dataset.coord[2]),w.dataset.orientation,T[A])&&A<5&&A++})),t.appendChild(i)}))})),"computer"===e.player?k.appendChild(t):b.appendChild(t)},g=new(f())("human"),y=new(f())("computer"),b=document.getElementById("humBoard-container"),k=document.getElementById("comBoard-container"),C=document.getElementById("information"),w=document.getElementById("orientation-toggle"),E=new(m())("battleship",4,"b"),x=new(m())("submarine",3,"s"),S=new(m())("cruiser",3,"c"),I=new(m())("destroyer",2,"d"),M=new(m())("aircraft carrier",5,"a");let A=0;const T=[M,E,x,S,I,{name:""}],B=(e,t,n)=>{let r=!1;if(console.log(e.player,t,n),1===e.points[t][n])return!1;if(r=e.target(t,n),0!==r){let e=r.split("")[0],t=r.split("")[1];switch(console.log(e,t),e){case"a":M.hit(t),M.isSunk()&&console.log("Aircraft Carrier sunk!");break;case"b":E.hit(t),E.isSunk()&&console.log("Battleship sunk!");break;case"c":S.hit(t),S.isSunk()&&console.log("Cruiser sunk!");break;case"d":I.hit(t),I.isSunk()&&console.log("Destroyer sunk!");break;case"s":x.hit(t),x.isSunk()&&console.log("Submarine sunk!");break;default:console.log("Some kind of error.")}}return!0},L=()=>{document.getElementById("computer").addEventListener("click",(()=>{k.removeChild(k.firstChild),v(y),B(g,Math.floor(8*Math.random()),Math.floor(8*Math.random())),b.removeChild(b.firstChild),v(g),L()}))};w.addEventListener("click",(()=>{"h"===w.dataset.orientation?w.dataset.orientation="v":w.dataset.orientation="h"})),v(g),C.textContent=`Place ${T[A].name}`,b.addEventListener("click",(()=>{5===A?(C.style.display="none",w.style.display="none",b.style.pointerEvents="none",v(y),L()):C.textContent=`Place ${T[A].name}`,b.removeChild(b.firstChild),v(g)}))})()})();