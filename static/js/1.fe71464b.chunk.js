webpackJsonp([1],{7357:function(e,n,t){"use strict";function a(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}Object.defineProperty(n,"__esModule",{value:!0});var r=t(0),i=t.n(r),s=t(9),c=t(566),o=t(27),l=t(6),p=a(["\n  margin: 0px 0px 0px 0px;\n  padding-top: 1rem;\n"],["\n  margin: 0px 0px 0px 0px;\n  padding-top: 1rem;\n"]),m=a(['\n  text-align: center;\n  font-size: 1rem;\n  padding: 0px;\n  margin: 0px;\n  font-weight: 500;\n  font-family: "roboto" sans-serif;\n  text-transform: none;\n  color: #63666a;\n'],['\n  text-align: center;\n  font-size: 1rem;\n  padding: 0px;\n  margin: 0px;\n  font-weight: 500;\n  font-family: "roboto" sans-serif;\n  text-transform: none;\n  color: #63666a;\n']),f=c.a.section(p),d=c.a.p(m),g=function(e){var n=3===e.cart?2:1,t=5===e.cart?window.innerWidth<=767?4:window.innerWidth<=1200?8:10:window.innerWidth<=767?2:6;try{return i.a.createElement(i.a.Fragment,null,i.a.createElement(f,{className:"container"},e.title&&i.a.createElement("h1",{className:"title m-0"},i.a.createElement("span",{className:"uppercase"},e.title),e.description&&i.a.createElement(d,null,e.icon&&i.a.createElement("i",{className:"text-danger fa "+e.icon+" mr-1",style:{fontSize:"20px"}}),e.description)),i.a.createElement("div",{className:"pt-2 row"},e.skus&&e.skus.slice(0,t<=e.skus.length?t:e.skus.length).map(function(t){return i.a.createElement(l.b,Object.assign({elastic:!0,key:t.skucd,shape:n,item:Object.assign({},t,{tags:e.tags})},e))})),e.btntxt&&i.a.createElement(s.b,{to:e.link||"#",className:"d-flex justify-content-center pb-3"},i.a.createElement(o.a,{className:"border px-5 bg-white"},e.btntxt))))}catch(e){return console.log("%c 🥃 error: ","font-size:20px;background-color: #42b983;color:#fff;",e)}};n.default=g}});