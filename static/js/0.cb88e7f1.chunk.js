webpackJsonp([0],{3415:function(e,n,t){"use strict";function a(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}Object.defineProperty(n,"__esModule",{value:!0});var r=t(0),i=t.n(r),c=t(9),s=t(51),l=t(21),o=t(87),m=t.n(o),d=t(6),u=t(66),p=a(["\n  margin: 0px 0px 0px 0px;\n  padding-top: 1rem;\n"],["\n  margin: 0px 0px 0px 0px;\n  padding-top: 1rem;\n"]),g=a(['\n  text-align: center;\n  font-size: 1rem;\n  padding: 0px;\n  margin: 0px;\n  font-weight: 500;\n  font-family: "roboto" sans-serif;\n  text-transform: none;\n  color: #63666a;\n'],['\n  text-align: center;\n  font-size: 1rem;\n  padding: 0px;\n  margin: 0px;\n  font-weight: 500;\n  font-family: "roboto" sans-serif;\n  text-transform: none;\n  color: #63666a;\n']),f=s.a.section(p),b=(s.a.p(g),function(e){var n=Object(r.useRef)(!0);if(n.current){var t="savedProducts"===e.component?"wishlist":"viewlist";null!==localStorage.getItem("auth")?!1!==e.dynamic["list_"+t]&&e.getWishView(t):!1===e.dynamic["list_"+t]&&e.removeWishView(t),n.current=!1}var a={slidesPerView:window.innerWidth<576?2:e.slidesperview||5,spaceBetween:0,autoplay:{delay:1e3*(e.delay||3),disableOnInteraction:!1},pagination:{type:"bullets",clickable:!0}};try{var c="savedProducts"===e.component?"wishlist":"viewlist";return null!==localStorage.getItem("auth")?i.a.createElement(i.a.Fragment,null,e.dynamic[c]&&e.dynamic[c].length>0&&e.images.length>0&&i.a.createElement(u.a,e),e.dynamic[c]&&e.dynamic[c].length>0&&i.a.createElement(w,Object.assign({},e,{skus:e.dynamic[c],config:Object.assign({loop:window.innerWidth<576?!(e.dynamic[c]&&e.dynamic[c].length<3):!(e.dynamic[c]&&e.dynamic[c].length<6)},a)}))):null}catch(e){return console.log(e)}}),w=function(e){return i.a.createElement(f,null,i.a.createElement(u.d,e),i.a.createElement("div",{className:"container pad10 pt-2"},i.a.createElement("div",{className:"row row10"},i.a.createElement("div",{className:"container pad10"},i.a.createElement("div",{className:"row row10"},i.a.createElement(m.a,Object.assign({},e.config,{containerClass:"swiper-container pt-2",shouldSwiperUpdate:!0,rebuildOnUpdate:!0,renderNextButton:function(){return i.a.createElement(i.a.Fragment,null)},renderPrevButton:function(){return i.a.createElement(i.a.Fragment,null)}}),e.skus&&e.skus.map(function(n){return i.a.createElement("div",null,i.a.createElement(d.k,Object.assign({issave:"savedProducts"===e.component,elastic:!0,isVisible:!0,key:n.skucd,shape:1,item:Object.assign({},n),tags:e.search.tags},e)))}))))),e.btntxt&&i.a.createElement(c.b,{to:e.link||"#",className:"d-flex justify-content-center pb-3"},i.a.createElement(l.a,{className:"border px-5 bg-white"},e.btntxt))))};n.default=b}});