(()=>{"use strict";var n={430:(n,e,t)=>{t.d(e,{A:()=>d});var r=t(601),o=t.n(r),i=t(314),a=t.n(i)()(o());a.push([n.id,"/*\n  1. Use a more-intuitive box-sizing model.\n*/\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n/*\n    2. Remove default margin\n  */\n* {\n  margin: 0;\n}\n/*\n    Typographic tweaks!\n    3. Add accessible line-height\n    4. Improve text rendering\n  */\nbody {\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n}\n/*\n    5. Improve media defaults\n  */\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\n/*\n    6. Remove built-in form typography styles\n  */\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n/*\n    7. Avoid text overflows\n  */\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n}\n/*\n    8. Create a root stacking context\n  */\n#root,\n#__next {\n  isolation: isolate;\n}\n",""]);const d=a},997:(n,e,t)=>{t.d(e,{A:()=>g});var r=t(601),o=t.n(r),i=t(314),a=t.n(i),d=t(417),s=t.n(d),c=new URL(t(122),t.b),l=new URL(t(539),t.b),p=a()(o()),u=s()(c),m=s()(l);p.push([n.id,`/* helper border */\n/* .carousel-wrapper {\n  border: 1px solid red;\n}\n\n.prev,\n.img-container,\n.next,\n.pagination {\n  border: 2px solid green;\n} */\n\n/* start */\n.carousel-wrapper {\n  width: 48rem;\n\n  display: grid;\n  grid-template-columns: auto 1fr auto;\n  grid-template-rows: 240px auto;\n\n  align-items: center;\n  justify-content: center;\n}\n\n.prev,\n.next {\n  width: 32px;\n  height: 32px;\n  border-radius: 100%;\n\n  transition: transform 0.3s ease;\n}\n\n.carousel-wrapper button:active {\n  transform: scale(0.9);\n}\n\n.carousel-wrapper button:hover {\n  cursor: pointer;\n}\n\n.prev {\n  background-image: url(${u});\n  margin-right: 0.5rem;\n}\n\n.next {\n  background-image: url(${m});\n  margin-left: 0.5rem;\n}\n\n.img-container {\n  width: 100%;\n  height: 240px;\n\n  background-size: cover;\n  border-radius: 6px;\n}\n\n.pagination {\n  grid-column: 2;\n  height: 24px;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.pagination-circle {\n  width: 8px;\n  height: 8px;\n  border-radius: 100%;\n  background-color: black;\n  opacity: 0.2;\n}\n\n.pagination-circle:hover {\n  cursor: pointer;\n}\n\n.pagination-circle.active {\n  opacity: 1;\n}\n`,""]);const g=p},552:(n,e,t)=>{t.d(e,{A:()=>d});var r=t(601),o=t.n(r),i=t(314),a=t.n(i)()(o());a.push([n.id,'/* helper borders */\n/* #header,\n#content {\n  border: 1px solid red;\n}\n\n.dropdown-wrapper {\n  border: 3px solid green;\n}\n\n.dropdown,\n.dropdown-content {\n  border: 1px solid blue;\n}\n\n.dropdown-item {\n  border: 1px solid purple;\n} */\n\n/* start */\n* {\n  scrollbar-width: thin; /* "auto" or "thin"  */\n  scrollbar-color: #88888826 transparent; /* thumb and track color */\n}\n\nbody {\n  width: 100%;\n  height: 100vh;\n\n  display: grid;\n  grid-template-rows: 4rem 1fr;\n}\n\n#content {\n  padding: 1rem;\n}\n\n.dropdown-wrapper {\n  width: 14rem;\n\n  display: flex;\n  flex-direction: column;\n  position: relative;\n}\n\n.dropdown {\n  height: 2rem;\n  border: 1px solid black;\n  display: grid;\n  grid-template-columns: 10fr 1fr;\n  align-items: center;\n  cursor: pointer;\n}\n\n.dropdown-content {\n  position: absolute;\n  z-index: 1;\n  top: 2rem;\n  background-color: white;\n  width: 100%;\n\n  text-align: center;\n  margin-top: 0.5rem;\n  border: 1px solid black;\n\n  min-height: auto;\n  max-height: 9rem;\n\n  overflow: auto;\n}\n\n.dropdown-item {\n  border-bottom: 1px solid black;\n  padding: 0.5rem;\n}\n\n.dropdown-item:last-child {\n  border-bottom: none;\n}\n\n.dropdown-item {\n  cursor: pointer;\n}\n\n.dropdown-item:hover,\n.dropdown:hover {\n  background-color: #f9f9f9;\n}\n',""]);const d=a},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var d=0;d<this.length;d++){var s=this[d][0];null!=s&&(a[s]=!0)}for(var c=0;c<n.length;c++){var l=[].concat(n[c]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],d=0;d<n.length;d++){var s=n[d],c=r.base?s[0]+r.base:s[0],l=i[c]||0,p="".concat(c," ").concat(l);i[c]=l+1;var u=t(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var g=o(m,r);r.byIndex=d,e.splice(d,0,{identifier:p,updater:g,references:1})}a.push(p)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var d=t(i[a]);e[d].references--}for(var s=r(n,o),c=0;c<i.length;c++){var l=t(i[c]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=s}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},122:(n,e,t)=>{n.exports=t.p+"2bf69ef6b1d2feb48abb.svg"},539:(n,e,t)=>{n.exports=t.p+"9781af49933833fd995c.svg"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!n||!/^http(s?):/.test(n));)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(72),e=t.n(n),r=t(825),o=t.n(r),i=t(659),a=t.n(i),d=t(56),s=t.n(d),c=t(540),l=t.n(c),p=t(113),u=t.n(p),m=t(430),g={};g.styleTagTransform=u(),g.setAttributes=s(),g.insert=a().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=l(),e()(m.A,g),m.A&&m.A.locals&&m.A.locals;var f=t(552),h={};h.styleTagTransform=u(),h.setAttributes=s(),h.insert=a().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=l(),e()(f.A,h),f.A&&f.A.locals&&f.A.locals;var v=t(997),b={};b.styleTagTransform=u(),b.setAttributes=s(),b.insert=a().bind(null,"head"),b.domAPI=o(),b.insertStyleElement=l(),e()(v.A,b),v.A&&v.A.locals&&v.A.locals;const y=t.p+"4f51654c1cd6f5a8c87b.png",x=t.p+"18426adb388e491fd4e7.png",w=t.p+"b9f269c524466951def8.png",S=(t.p,t.p,[y,x,w]);document.querySelector("#content").appendChild((n=>{const e=(n=>{const e={slides:n,numSlides:n.length,curSlide:0};return{getSlides:()=>e.slides,getNumSlides:()=>e.numSlides,getCurSlide:()=>e.curSlide,nextSlide:()=>{e.curSlide=++e.curSlide%e.numSlides},prevSlide:()=>{e.curSlide=--e.curSlide,-1===e.curSlide&&(e.curSlide=e.numSlides-1)},navSlide:n=>{e.curSlide=n},removeSlide:n=>{e.slides.splice(n,1),e.numSlides--},addSlide:(n,t)=>{e.slides.splice(t,0,n),e.numSlides++}}})(n),t=(()=>{const n=document.createElement("div");n.classList.add("carousel-wrapper");const e=document.createElement("button"),t=document.createElement("button");e.classList.add("prev"),t.classList.add("next");const r=document.createElement("div");r.classList.add("img-container");const o=document.createElement("div");return o.classList.add("pagination"),n.appendChild(e),n.appendChild(r),n.appendChild(t),n.appendChild(o),n})();return((n,e)=>{const t=e.querySelector(".img-container"),r=e.querySelector(".prev"),o=e.querySelector(".next"),i=e.querySelector(".pagination"),a=n.getSlides(),d=n.getNumSlides();t.style.backgroundImage=`url(${a[n.getCurSlide()]})`;for(let e=0;e<d;e++){const r=document.createElement("div");r.classList.add("pagination-circle"),e===n.getCurSlide()&&r.classList.add("active"),i.appendChild(r),r.addEventListener("click",(()=>{i.childNodes[n.getCurSlide()].classList.remove("active"),n.navSlide(e),t.style.backgroundImage=`url(${a[n.getCurSlide()]})`,i.childNodes[n.getCurSlide()].classList.add("active")}))}[r,o].forEach(((e,r)=>{e.addEventListener("click",(()=>{i.childNodes[n.getCurSlide()].classList.remove("active"),0===r?n.prevSlide():n.nextSlide(),t.style.backgroundImage=`url(${a[n.getCurSlide()]})`,i.childNodes[n.getCurSlide()].classList.add("active")}))}))})(e,t),t})(S))})()})();