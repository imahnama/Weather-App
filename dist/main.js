!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var r=()=>{const e=document.createElement("div");e.setAttribute("id","main-section");const t=document.createElement("div");t.setAttribute("id","input"),e.appendChild(t);const n=document.createElement("input");t.appendChild(n),n.type="text",n.setAttribute("placeholder","Search City"),n.setAttribute("class","inputValue");const r=document.createElement("i");t.appendChild(r),r.type="submit",r.setAttribute("class","fas fa-search p-2 ml-2 border city-search");const i=document.createElement("div");i.setAttribute("class","main-content mt-5"),e.appendChild(i);const c=document.createElement("h1");c.setAttribute("class","heading"),i.appendChild(c);const a=document.createElement("p");a.setAttribute("class","content-desc"),i.appendChild(a);const o=document.createElement("p");o.setAttribute("class","city-temp"),i.appendChild(o);const u=document.createElement("p");u.setAttribute("class","min-temp"),i.appendChild(u);const p=document.createElement("p");return p.setAttribute("class","max-temp"),i.appendChild(p),r.addEventListener("click",(function(){fetch("https://api.openweathermap.org/data/2.5/weather?q="+n.value+"&appid=b4798b30d3b96afc9bb209e0110b6378").then(e=>e.json()).then(e=>{const t=e.name,n=e.main.temp,r=e.weather[0].description,i=e.main.temp_min,d=e.main.temp_max;c.innerHTML=t,a.innerHTML="Desc: "+r,o.innerHTML="Temp: "+n,u.innerHTML="Min-Temp: "+i,p.innerHTML="Max-Temp: "+d})})),e};n(1);document.querySelector(".content").appendChild(r())},function(e,t){}]);