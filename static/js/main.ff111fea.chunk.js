(this["webpackJsonpvivid-covid"]=this["webpackJsonpvivid-covid"]||[]).push([[0],{19:function(e,t,a){e.exports=a.p+"static/media/locate.8fe3dbf2.png"},22:function(e,t,a){},23:function(e,t,a){e.exports=a.p+"static/media/logo.90f98b6e.png"},24:function(e,t,a){e.exports=a.p+"static/media/chart.f12357eb.png"},31:function(e,t,a){e.exports=a(50)},36:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){e.exports=a.p+"static/media/hover.7148e7f5.png"},41:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(13),o=a.n(c),l=(a(36),a(8)),s=a.n(l),i=a(11),u=a(4),m=(a(38),a(39),a(23)),d=a.n(m),p=a(24),v=a.n(p),f=(a(40),function(e){return r.a.createElement("div",{className:"nav-wrapper"},r.a.createElement("div",{className:"logo"},r.a.createElement("img",{src:d.a,alt:"logo"})),r.a.createElement("div",{className:"tabs"},r.a.createElement("span",{className:"tab-span"},r.a.createElement("a",{onClick:e.recoverSelect},"RECOVERY")),r.a.createElement("span",{className:"img-span"},r.a.createElement("img",{src:v.a,alt:"chart logo",className:"chart-logo"}))))}),E=(a(41),a(42),function(e){return r.a.createElement("div",{className:"stat-wrapper"},r.a.createElement("div",{className:"infected"},r.a.createElement("div",{className:"title"}," Confirmed : "),r.a.createElement("div",{className:"numbers"},e.confirm),r.a.createElement("div",{className:"date"},"Recent updated: ",e.date)),r.a.createElement("div",{className:"recovered"},r.a.createElement("div",{className:"title"}," Recovered : "),r.a.createElement("div",{className:"numbers"},e.recover),r.a.createElement("div",{className:"date"},"Recent updated: ",e.date)))}),h=(a(22),a(66)),b=a(65),g=a(14),N=a(19),O=a.n(N),w=function(e){var t=Object(n.useState)({latitude:36,longitude:16,zoom:1.5}),a=Object(u.a)(t,2),c=a[0],o=a[1],l=Object(n.useState)([]),m=Object(u.a)(l,2),d=m[0],p=m[1],v=Object(n.useState)(null),f=Object(u.a)(v,2),E=f[0],h=f[1],b=function(){var e=Object(i.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://covid19.mathdro.id/api/recovered");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,p(a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){b()}),[]);return r.a.createElement("div",null,r.a.createElement(g.c,{style:{width:"100%",height:"88vh"},mapStyle:"mapbox://styles/mapbox/light-v9",accessToken:"pk.eyJ1Ijoic2hyZWV0cyIsImEiOiJjazlqa240NjIwOTY5M2hwOGNmbTE2YTc1In0.oF-rBv3-aKL90FnHJPDHSQ",latitude:c.latitude,longitude:c.longitude,zoom:c.zoom,onViewportChange:o},d.map((function(e){return r.a.createElement(g.a,{key:e.combinedKey,latitude:e.lat,longitude:e.long},r.a.createElement("div",null,r.a.createElement("img",{className:"pin",src:O.a,onMouseOver:function(t){t.preventDefault(),h(e)},onMouseOut:function(e){e.preventDefault(),h(null)}})))})),E?r.a.createElement(g.b,{latitude:E.lat,longitude:E.long,onClose:function(){return h(null)}},r.a.createElement("div",{className:"pin-info"},r.a.createElement("span",{className:"pin-name"},E.combinedKey),r.a.createElement("br",null),r.a.createElement("span",{className:"pin-confirm"},"Confirmed : ",E.confirmed),r.a.createElement("br",null),r.a.createElement("span",{className:"pin-recover"},"Recovered : ",E.recovered))):null))},j=function(e){return r.a.createElement("div",{className:"map-wrapper"},r.a.createElement("div",{className:"frame"},r.a.createElement(w,{location:e.location})),r.a.createElement("div",{className:"search"},r.a.createElement(h.a,{className:"form__input"},r.a.createElement(b.a,{defaultValue:"",onChange:e.select},r.a.createElement("option",null,"-- Search by Country --"),e.countryOption.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)}))))))},y=(a(49),function(e){var t=Object(n.useState)(!1),a=Object(u.a)(t,2),c=a[0],o=a[1],l=r.a.createElement("div",{className:"dialogBackdrop"},r.a.createElement("div",{className:"dialogContainer"},r.a.createElement("div",null," ","At times like this when all you see and hear of is how the COVID-19 virus is spreading faster than wild fire, I felt like I would rather prefer turning up to a source which would only give me the Good News , i.e of patient recoveries.",r.a.createElement("br",null),r.a.createElement("span",null,"**This is a Test version. Further updates will be made soon.")," "),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){o(!1)}},"Close"))));return r.a.createElement("div",{className:"foot-wrapper"},r.a.createElement("div",{className:"created"},"Created by"," ",r.a.createElement("a",{href:"https://github.com/Shreets?tab=repositories",target:"_blank"}," ","Shreeti Upreti"," ")),r.a.createElement("div",{className:"info"},r.a.createElement("a",{onClick:function(){return o(!0)}},"ABOUT")),c&&l)});var k=function(){var e="https://covid19.mathdro.id/api",t=Object(n.useState)(),a=Object(u.a)(t,2),c=a[0],o=a[1],l=Object(n.useState)([]),m=Object(u.a)(l,2),d=m[0],p=m[1],v=Object(n.useState)(),h=Object(u.a)(v,2),b=h[0],g=h[1],N=Object(n.useState)(),O=Object(u.a)(N,2),w=O[0],k=O[1],x=Object(n.useState)(),S=Object(u.a)(x,2),C=S[0],I=S[1],J=new Date(C),D=J.getDate()+" "+["January","February","March","April","May","June","July","August","September","October","November","December"][J.getMonth()]+" "+J.getFullYear(),M=function(){var t=Object(i.a)(s.a.mark((function t(){var a,n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(e);case 3:return a=t.sent,t.next=6,a.json();case 6:n=t.sent,g(n.confirmed.value),k(n.recovered.value),I(n.lastUpdate),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),console.log(t.t0);case 15:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(){return t.apply(this,arguments)}}(),T=function(){var e=Object(i.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://covid19.mathdro.id/api/countries/".concat(c));case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,g(a.confirmed.value),k(a.recovered.value),I(a.lastUpdate),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}(),R=function(){var t=Object(i.a)(s.a.mark((function t(){var a,n,r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(e,"/countries"));case 2:return a=t.sent,t.next=5,a.json();case 5:n=t.sent,r=n.countries.map((function(e){return e.name})),p(r);case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(n.useEffect)((function(){void 0===c?M():T()}),[c]),Object(n.useEffect)((function(){R()}),[]),r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"nav"},r.a.createElement(f,{recoverSelect:function(){M()}})),r.a.createElement("div",{className:"stats"},r.a.createElement(E,{confirm:b,recover:w,date:D})),r.a.createElement("div",{className:"map"},r.a.createElement(j,{url:e,countryOption:d,select:function(e){o(e.target.value)},country:c})),r.a.createElement("div",{className:"footer"},r.a.createElement("footer",null,r.a.createElement(y,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.ff111fea.chunk.js.map