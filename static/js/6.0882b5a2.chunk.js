webpackJsonp([6],{1936:function(e,n,t){"use strict";function a(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}Object.defineProperty(n,"__esModule",{value:!0});var r=t(127),s=(t.n(r),t(128)),i=t.n(s),c=t(0),o=t.n(c),l=t(9),m=t(593),p=t(27),d=t(7),u=a(["\n  margin: 0px 0px 0px 0px;\n  padding-top: 1rem;\n"],["\n  margin: 0px 0px 0px 0px;\n  padding-top: 1rem;\n"]),f=a(['\n  text-align: center;\n  font-size: 1rem;\n  padding: 0px;\n  margin: 0px;\n  font-weight: 500;\n  font-family: "roboto" sans-serif;\n  text-transform: none;\n  color: #63666a;\n'],['\n  text-align: center;\n  font-size: 1rem;\n  padding: 0px;\n  margin: 0px;\n  font-weight: 500;\n  font-family: "roboto" sans-serif;\n  text-transform: none;\n  color: #63666a;\n']),g=m.a.section(u),x=m.a.p(f),w=function(e){var n=3===e.cart?2:1,t=5===e.cart?window.innerWidth<=767?4:window.innerWidth<=1200?8:10:window.innerWidth<=767?2:6,a=(Object(c.useRef)(!0),Date.now()+0+1e3*e.timercountdown);try{return e.skus&&0!==e.skus.length&&o.a.createElement(o.a.Fragment,null,o.a.createElement(g,null,e.title&&o.a.createElement("h1",{className:"title m-0"},o.a.createElement("span",{className:"uppercase"},e.title),e.description&&o.a.createElement(x,null,e.icon&&o.a.createElement("i",{className:"text-danger fa "+e.icon+" mr-1",style:{fontSize:"20px"}}),e.description),o.a.createElement(i.a.Countdown,{precision:1e4,value:a,format:"HH:mm:ss"})),o.a.createElement("div",{className:"container pad10 pt-2"},o.a.createElement("div",{className:"row row10"},o.a.createElement("div",{className:"container pad10"},o.a.createElement("div",{className:"row row10"},e.skus&&e.skus.slice(0,t<=e.skus.length?t:e.skus.length).map(function(t){return o.a.createElement(d.b,Object.assign({elastic:!0,key:t.skucd,shape:n,item:Object.assign({},t,{tags:e.tags})},e))}))))),e.btntxt&&o.a.createElement(l.b,{to:e.link||"#",className:"d-flex justify-content-center pb-3"},o.a.createElement(p.a,{className:"border px-5 bg-white"},e.btntxt))))}catch(e){return console.log("%c 🥃 error: ",e)}};n.default=w}});