webpackJsonp([2],{1817:function(e,t,n){"use strict";function a(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=n.n(r),i=n(8),c=n(49),s=n(20),l=n(5),m=n(66),d=a(["\n  margin: 0px 0px 0px 0px;\n  padding-top: 1rem;\n"],["\n  margin: 0px 0px 0px 0px;\n  padding-top: 1rem;\n"]),u=a(['\n  text-align: center;\n  font-size: 1rem;\n  padding: 0px;\n  margin: 0px;\n  font-weight: 500;\n  font-family: "roboto" sans-serif;\n  text-transform: none;\n  color: #63666a;\n'],['\n  text-align: center;\n  font-size: 1rem;\n  padding: 0px;\n  margin: 0px;\n  font-weight: 500;\n  font-family: "roboto" sans-serif;\n  text-transform: none;\n  color: #63666a;\n']),g=c.a.section(d),p=(c.a.p(u),{catId:0,custId:0,value:"",attribute:"",color:"",brand:"",promotion:"",minPrice:0,maxPrice:0,rowCount:10,posMenu:"",startsWith:0,orderColumn:"SCORE_DESC",highlight:!1,module:"",CustomerId:0}),f=function(e){var t=Object(r.useRef)(!0),n=e.dynamic["RESPONSE_DYNAMIC_CONTENT_"+e.contentid],a=e.dynamic["REQUEST_DYNAMIC_CONTENT_"+e.contentid];e.dynamic["RESPONSE_DYNAMIC_CONTENT_"+e.contentid+"_TOTAL"];if(t.current){if((void 0===a||!a)&&void 0===n){p.CustomerId=null!==localStorage.getItem("auth")?e.auth.data.info.customerInfo.id:0,e.getWidgetContent({params:{contentid:e.contentid,body:Object.assign({},p,{rowCount:10}),url:"/search/elastic",method:"POST"}})}t.current=!1}var c=3===e.cart?2:1;return void 0===n||0===n.length?o.a.createElement(o.a.Fragment,null):o.a.createElement(o.a.Fragment,null,e.images&&e.images.length>0&&o.a.createElement(m.a,e),o.a.createElement(g,null,o.a.createElement(m.c,e),o.a.createElement("div",{className:"container pad10 pt-2"},o.a.createElement("div",{className:"row row10"},o.a.createElement("div",{className:"container pad10"},o.a.createElement("div",{className:"row row10"},n&&n.map(function(t,n){return o.a.createElement(l.b,Object.assign({elastic:!0,key:n,shape:c,item:Object.assign({},t,{tags:e.search.tags}),tags:e.search.tags},e))})))),o.a.createElement(i.b,{to:"/bg?orderColumn=SCORE_DESC&isfashion=1&CustomerId="+(null!==localStorage.getItem("auth")?e.auth.data.info.customerInfo.id:0),className:"d-flex justify-content-center pb-3"},o.a.createElement(s.a,{className:"border px-5 bg-white"},e.btntxt||"Цааш үзэх")))))};t.default=Object(i.f)(f)}});