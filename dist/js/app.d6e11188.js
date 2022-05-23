(function(){"use strict";var e={5939:function(e,n,t){var o=t(9242),r=t(3396);function a(e,n){const t=(0,r.up)("router-view");return(0,r.wg)(),(0,r.j4)(t)}var i=t(89);const c={},u=(0,i.Z)(c,[["render",a]]);var s=u,f=t(678);const l=[{path:"/",name:"start",component:()=>Promise.all([t.e(570),t.e(911)]).then(t.bind(t,2911))},{path:"/login",name:"login",component:()=>Promise.all([t.e(570),t.e(911)]).then(t.bind(t,2911))},{path:"/register",name:"register",component:()=>Promise.all([t.e(570),t.e(581)]).then(t.bind(t,5581))},{path:"/otp",name:"otp",component:()=>t.e(929).then(t.bind(t,2929))},{path:"/address",name:"address",component:()=>t.e(796).then(t.bind(t,9796))},{path:"/home",name:"LatestBooks",component:()=>Promise.all([t.e(437),t.e(379)]).then(t.bind(t,8379))},{path:"/book",name:"bookView",component:()=>Promise.all([t.e(437),t.e(309)]).then(t.bind(t,1309))},{path:"/searchResult",name:"searchResult",component:()=>Promise.all([t.e(437),t.e(179)]).then(t.bind(t,6179))},{path:"/cart",name:"cart",component:()=>Promise.all([t.e(437),t.e(845)]).then(t.bind(t,9845))},{path:"/user",name:"userView",component:()=>Promise.all([t.e(437),t.e(33)]).then(t.bind(t,7033))},{path:"/userEdit",name:"userEdit",component:()=>Promise.all([t.e(437),t.e(486)]).then(t.bind(t,1486))},{path:"/orderDetails",name:"orderDetails",component:()=>Promise.all([t.e(437),t.e(374)]).then(t.bind(t,5374))},{path:"/orderHistory",name:"orderHistory",component:()=>Promise.all([t.e(437),t.e(591)]).then(t.bind(t,8591))},{path:"/home",name:"home",component:()=>Promise.all([t.e(437),t.e(379)]).then(t.bind(t,8379))},{path:"/WishList",name:"wishList",component:()=>Promise.all([t.e(437),t.e(831)]).then(t.bind(t,9831))},{path:"/:pathMatch(.*)*",name:"404",component:()=>t.e(210).then(t.bind(t,9964))}],d=(0,f.p7)({history:(0,f.PO)("/"),routes:l});var p=d,m=t(6780);t(2412),t(5871),t(1992),t(8307);const h={apiKey:"AIzaSyAv0O7WKT894QAu6_orvS0kEqeN3x1YJXk",authDomain:"backend-b714b.firebaseapp.com",projectId:"backend-b714b",storageBucket:"backend-b714b.appspot.com",messagingSenderId:"34152661403",appId:"1:34152661403:web:5b704fc64e094c8f62613e",measurementId:"G-8P2RN760ZB"};m.Z.initializeApp(h);const b=m.Z.firestore();try{b.collection("Contacts").get().then((e=>{e.docs.map((e=>{console.log(e.data())}))}))}catch(v){}(0,o.ri)(s).use(p).mount("#app")}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={exports:{}};return e[o](a,a.exports,t),a.exports}t.m=e,function(){var e=[];t.O=function(n,o,r,a){if(!o){var i=1/0;for(f=0;f<e.length;f++){o=e[f][0],r=e[f][1],a=e[f][2];for(var c=!0,u=0;u<o.length;u++)(!1&a||i>=a)&&Object.keys(t.O).every((function(e){return t.O[e](o[u])}))?o.splice(u--,1):(c=!1,a<i&&(i=a));if(c){e.splice(f--,1);var s=r();void 0!==s&&(n=s)}}return n}a=a||0;for(var f=e.length;f>0&&e[f-1][2]>a;f--)e[f]=e[f-1];e[f]=[o,r,a]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,o){return t.f[o](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"."+{33:"7f48ac0a",179:"31cd9a02",210:"2aa1cc1f",309:"56ad8a14",374:"f2e83fbf",379:"39375276",437:"e1ec7a5d",486:"ca50754c",570:"5ead200e",581:"fc1e2ade",591:"4f420f0c",796:"70e2e48b",831:"d30846b5",845:"f51ae0b5",911:"9af76c06",929:"574280de"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+e+"."+{379:"cee73ebf",911:"5c1ca191"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="yogabhyas:";t.l=function(o,r,a,i){if(e[o])e[o].push(r);else{var c,u;if(void 0!==a)for(var s=document.getElementsByTagName("script"),f=0;f<s.length;f++){var l=s[f];if(l.getAttribute("src")==o||l.getAttribute("data-webpack")==n+a){c=l;break}}c||(u=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,t.nc&&c.setAttribute("nonce",t.nc),c.setAttribute("data-webpack",n+a),c.src=o),e[o]=[r];var d=function(n,t){c.onerror=c.onload=null,clearTimeout(p);var r=e[o];if(delete e[o],c.parentNode&&c.parentNode.removeChild(c),r&&r.forEach((function(e){return e(t)})),n)return n(t)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=d.bind(null,c.onerror),c.onload=d.bind(null,c.onload),u&&document.head.appendChild(c)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/"}(),function(){var e=function(e,n,t,o){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var a=function(a){if(r.onerror=r.onload=null,"load"===a.type)t();else{var i=a&&("load"===a.type?"missing":a.type),c=a&&a.target&&a.target.href||n,u=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=i,u.request=c,r.parentNode.removeChild(r),o(u)}};return r.onerror=r.onload=a,r.href=n,document.head.appendChild(r),r},n=function(e,n){for(var t=document.getElementsByTagName("link"),o=0;o<t.length;o++){var r=t[o],a=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(a===e||a===n))return r}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){r=i[o],a=r.getAttribute("data-href");if(a===e||a===n)return r}},o=function(o){return new Promise((function(r,a){var i=t.miniCssF(o),c=t.p+i;if(n(i,c))return r();e(o,c,r,a)}))},r={143:0};t.f.miniCss=function(e,n){var t={379:1,911:1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=o(e).then((function(){r[e]=0}),(function(n){throw delete r[e],n})))}}(),function(){var e={143:0};t.f.j=function(n,o){var r=t.o(e,n)?e[n]:void 0;if(0!==r)if(r)o.push(r[2]);else{var a=new Promise((function(t,o){r=e[n]=[t,o]}));o.push(r[2]=a);var i=t.p+t.u(n),c=new Error,u=function(o){if(t.o(e,n)&&(r=e[n],0!==r&&(e[n]=void 0),r)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;c.message="Loading chunk "+n+" failed.\n("+a+": "+i+")",c.name="ChunkLoadError",c.type=a,c.request=i,r[1](c)}};t.l(i,u,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,o){var r,a,i=o[0],c=o[1],u=o[2],s=0;if(i.some((function(n){return 0!==e[n]}))){for(r in c)t.o(c,r)&&(t.m[r]=c[r]);if(u)var f=u(t)}for(n&&n(o);s<i.length;s++)a=i[s],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(f)},o=self["webpackChunkyogabhyas"]=self["webpackChunkyogabhyas"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(5939)}));o=t.O(o)})();
//# sourceMappingURL=app.d6e11188.js.map