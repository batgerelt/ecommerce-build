webpackJsonp([7],{1945:function(e,t,n){"use strict";function a(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=n.n(r),c=n(326),l=n(9),i=n(183),s=n.n(i),m=n(26),p=a(["\n  margin: 0px 0px 0px 0px;\n  padding-top: 1rem;\n"],["\n  margin: 0px 0px 0px 0px;\n  padding-top: 1rem;\n"]),u=a(['\n  text-align: center;\n  font-size: 1rem;\n  padding: 0px;\n  margin: 0px;\n  font-weight: 500;\n  font-family: "roboto" sans-serif;\n  text-transform: none;\n  color: #63666a;\n'],['\n  text-align: center;\n  font-size: 1rem;\n  padding: 0px;\n  margin: 0px;\n  font-weight: 500;\n  font-family: "roboto" sans-serif;\n  text-transform: none;\n  color: #63666a;\n']),f=c.a.section(p),d=c.a.p(u),g={slidesPerView:3,spaceBetween:10,loop:!1,autoplay:{delay:1500,disableOnInteraction:!1},pagination:{type:"bullets",clickable:!0}},x=function(e){console.log("%c 🥠 props: ","font-size:20px;background-color: #7F2B82;color:#fff;",e);var t=e.intl.locale;try{return o.a.createElement(f,{className:"category-list"},e.title&&o.a.createElement("h1",{className:"title m-0"},o.a.createElement("span",{className:"uppercase"},e.title),e.description&&o.a.createElement(d,null,e.icon&&o.a.createElement("i",{className:"text-danger fa "+e.icon+" mr-1",style:{fontSize:"20px"}}),e.description)),o.a.createElement("div",{className:"row d-flex justify-content-center m-0 mt-2 isdesktop"},e.categoryRootMenu&&e.categoryRootMenu.map(function(n){return o.a.createElement("div",{className:"col-4 col-sm-3 col-md-1-5 py-3 hover",key:n.id},o.a.createElement("div",{className:"d-flex justify-content-center pt-2 pointer",onClick:function(){return e.history.push(n.route)}},o.a.createElement("img",{alt:".",src:"https://cdn.emartmall.mn/"+n.icon,width:70,className:"cat-img"})),o.a.createElement("p",{className:"text-center m-0 mt-3"},"mn"===t?n.name:n.name_en))})),o.a.createElement(s.a,Object.assign({},g,{shouldSwiperUpdate:!0,rebuildOnUpdate:!0,renderNextButton:function(){return o.a.createElement(o.a.Fragment,null)},renderPrevButton:function(){return o.a.createElement(o.a.Fragment,null)},containerClass:"swiper-container ismobile mt-2"}),e.categoryRootMenu&&e.categoryRootMenu.map(function(n){return o.a.createElement("div",{onClick:function(){return e.history.push(n.route)}},o.a.createElement("div",{className:"d-flex justify-content-center"},o.a.createElement("img",{alt:".",src:"https://cdn.emartmall.mn/"+n.icon,width:70})),o.a.createElement("p",{className:"text-center m-0 mt-3"},"en"===t?n.name_en:n.name))})),e.btntxt&&o.a.createElement(l.b,{to:e.link||"#",className:"d-flex justify-content-center pb-3"},o.a.createElement(m.a,{className:"border px-5 bg-white"},e.btntxt)))}catch(e){return console.log("%c 🥪 error: ","font-size:20px;background-color: #93C0A4;color:#fff;",e),o.a.createElement(o.a.Fragment,null)}};t.default=x}});