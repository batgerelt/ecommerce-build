"use strict";var precacheConfig=[["/index.html","348b7ebe74e0d3a31cdb3551ea541f0b"],["/static/css/main.66cdcf5c.css","66cdcf5ce233b2cdd2047c5470e83cdb"],["/static/css/main.66cdcf5c.css.gz","c1c55bf514df8e1ea684688a163a0c56"],["/static/js/0.d258e021.chunk.js","93c2bf977743489e15ecf39e9ef90705"],["/static/js/1.ea60b498.chunk.js","bb14be3c1f190652865690943c565cfb"],["/static/js/2.0de7a74f.chunk.js","5487d787b64eac73cf4a0b4d3f4baa9b"],["/static/media/001-search.05c14bba.svg","05c14bba53cb2b5c0459505220d2be24"],["/static/media/002-shopping-cart.deb82563.svg","deb82563b1570a4a59f393f8ca0f3a1a"],["/static/media/003-chat-Copy.d9d05ef9.svg","d9d05ef93957ba30bd147753ce4378d4"],["/static/media/003-chat.5229aa77.svg","5229aa77e40996a53e1c68d827b16ca7"],["/static/media/Lend.f06c3b91.png","f06c3b91407475f3eb30580eb946304f"],["/static/media/Medeelel-12.ca2ea39c.svg","ca2ea39c7a049dec182a7a748b5e7f74"],["/static/media/Medeelel-13.b6a616bd.svg","b6a616bdea47882dfd08b20ede092326"],["/static/media/Medeelel-14.f129d01d.svg","f129d01dd888ed26c8093d88ecea7f9b"],["/static/media/Medeelel-15.8168a984.svg","8168a9840428fc3ff29ba8d971e293df"],["/static/media/Medeelel-16.b57edbda.svg","b57edbda8f46b001721244099689c0f0"],["/static/media/Medeelel-17.ea08bccf.svg","ea08bccfc1d8574290fc360dc7e5b795"],["/static/media/Medeelel-19.f8f82293.svg","f8f822937262008b8b88b4c9c478158d"],["/static/media/Mini kart-01.c53cc82a.svg","c53cc82ab1107f90b7636368464e0a95"],["/static/media/OrderSuccess.d242bde3.png","d242bde36d20f8767864e20aaa8aef49"],["/static/media/QPay.d39d3e84.png","d39d3e843013efc8b4b5ba1a74f00b10"],["/static/media/Success.b5dad3ca.png","b5dad3cabc68742d11e10d4484306f60"],["/static/media/Untitled-1-04.e78cca98.png","e78cca98d791a0d500847efdd09371cf"],["/static/media/Untitled-1-05.7e642e9a.png","7e642e9a60e04eb8bead0db5f0f04578"],["/static/media/Untitled-1-06.53cb457e.png","53cb457eb0441c2f43225d65c0b7fb13"],["/static/media/Untitled-1-07.205d9dd4.png","205d9dd4b3693a7c24752d20b69a251c"],["/static/media/Untitled-1-08.84079178.png","84079178612fbd56b3a304f5c7f43bb4"],["/static/media/candy.22f30731.png","22f30731365907092c9950e7130a308c"],["/static/media/cliplist.a6cdbb52.png","a6cdbb52fe359cd90770c777dae2e4bb"],["/static/media/defaultAvatar.16713bc1.png","16713bc1c166d6ad1763d052b59fa41d"],["/static/media/ebarimt.14a87866.svg","14a878661952a383f0242b4225558c1f"],["/static/media/ebarimt.68d0f96f.PNG","68d0f96f448779755ca9037c3003cfe4"],["/static/media/ebarimt.ccc5ef8b.svg","ccc5ef8bd856330c817438e4556e34c9"],["/static/media/emart-loader.6f76f85c.gif","6f76f85cc995779d1860d957f824ac44"],["/static/media/emart-logo.ec6a1350.png","ec6a1350441832a94056d52e63d1af3e"],["/static/media/emartlogo.542d31b7.png","542d31b743de6efde21013291a1a836e"],["/static/media/emartmall-ormanent.b3add77d.gif","b3add77d31d0fc707cef5b2174aba378"],["/static/media/error pages-02.2562b493.jpg","2562b4931dc34f23af1516f776783789"],["/static/media/error-black.eef66d80.svg","eef66d8017d1ae7922990fdd9ae8c808"],["/static/media/error.d6174862.svg","d6174862dc2ba9b57e131a5fa1b43db5"],["/static/media/facebook.2742dc55.svg","2742dc5544ea300cd47f82eb166cdc27"],["/static/media/google.648fa9fa.svg","648fa9faea73bcefeebcdd3c28c94c38"],["/static/media/list.28afff3a.svg","28afff3a981b0a50bb76de4ebe419435"],["/static/media/loader.310b42ee.svg","310b42ee3273cdaa27c08c1311d50842"],["/static/media/logo.f5cebdcd.png","f5cebdcd26fa56919c893d6a883c44be"],["/static/media/logo.fc6ecce9.jpg","fc6ecce9ad1d77812bbac82d836eec64"],["/static/media/masterCard.1136fd5d.png","1136fd5d5110b99f75639071d8e9e11a"],["/static/media/monpay.87e87998.png","87e87998314242a1223ed5589c24685b"],["/static/media/not-found.f64949b8.jpg","f64949b82f165097070c01693e14c250"],["/static/media/notfound.6d141ac7.jpg","6d141ac7799be19efcaec37103c16d47"],["/static/media/pass.b5d77e79.png","b5d77e79bc847bcdaf0ddfffa255011e"],["/static/media/pay-01.dd670dd8.svg","dd670dd87c16672c66bf7eccde157a97"],["/static/media/pay-02.1dca6a0c.svg","1dca6a0c39a22cfb8fd65197efd85794"],["/static/media/pay-03.c6f426ba.svg","c6f426bac11a56e1345cb7b7ce874e47"],["/static/media/pdf.67b5cdb1.png","67b5cdb1dbae6ffc69a55aa9af76a195"],["/static/media/redPoint.f75fff67.png","f75fff676f701af2cb025d73d22c3137"],["/static/media/redpoint.ea96bd79.png","ea96bd790ae2918fe1f0018cced82036"],["/static/media/ruler (1).9825cc57.png","9825cc577e2bd2f85bd3ac26344b26b6"],["/static/media/searchnotfound.a166e18b.jpg","a166e18b9f07b8f94578ea8af7a47f99"],["/static/media/socialPay.0722162d.png","0722162dd463383c752849b7588cab5c"],["/static/media/sorry-page.22688aa1.jpg","22688aa113e3a1e1dd1d52a330511fa7"],["/static/media/sp_time.7bfbe4b9.png","7bfbe4b9ffd95481c48b1254d32a444b"],["/static/media/sp_time1.ac08b63d.png","ac08b63d2968815ad27dc5a14f0c2692"],["/static/media/step1.a141d43e.PNG","a141d43eda799525831d5615c4f8e59b"],["/static/media/stepbystepmobile.5398886b.PNG","5398886b27d2b492fa248160945bee37"],["/static/media/superUp.fe20cecc.png","fe20ceccacd81e90ca07c111c5e5b278"],["/static/media/superup.d5a107a2.png","d5a107a2180bf4e319f825dd26e75ef1"],["/static/media/tamga.e0cc9ff5.png","e0cc9ff5a091445e08713e44386bdfbb"],["/static/media/uilchilgee.d96197d9.svg","d96197d9e706471d9c09ff349058b198"],["/static/media/urgent.64f5c18a.png","64f5c18a0b0e0766d8de2d8491c21697"],["/static/media/visa.e4c277cb.png","e4c277cb43d5953a15e6a5a5655e617d"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=a),c.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,c,t){var d=new URL(e);return t&&d.pathname.match(t)||(d.search+=(d.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(c)),d.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var c=new URL(a).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,c){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return c.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],c=e[1],t=new URL(a,self.location),d=createCacheKey(t,hashParamName,c,/\.\w{8}\./);return[t.toString(),d]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(t){return setOfCachedUrls(t).then(function(c){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!c.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return t.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var c=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!c.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,c=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),t="index.html";(e=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,t),e=urlsToCacheKeys.has(c));var d="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(c=new URL(d,self.location).toString(),e=urlsToCacheKeys.has(c)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});