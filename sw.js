if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let n={};const f=e=>a(e,r),t={module:{uri:r},exports:n,require:f};s[r]=Promise.all(i.map((e=>t[e]||f(e)))).then((e=>(c(...e),n)))}}define(["./workbox-b3f8ee23"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"aca.html",revision:"b78a8bcd22586d3fd4b663f4d1e0411e"},{url:"assets/favicon.ico",revision:"556f31acd686989b1afcf382c05846aa"},{url:"assets/imagenes/aca.png",revision:"467eee83ab92ba77abee26593a127721"},{url:"assets/imagenes/acapulco.jpg",revision:"c641e0fbe7a4be9020934357b05d428b"},{url:"assets/imagenes/cab.png",revision:"1e12d66b1492b795a921aaf90d2f8924"},{url:"assets/imagenes/can.png",revision:"e29929116cc6cebe61223e0ad016b015"},{url:"assets/imagenes/cancun.jpg",revision:"e2c152cc3def1c4db83f07dacd17890a"},{url:"assets/imagenes/huat.png",revision:"5d5c7a77f6497561bbedfe7ef3733839"},{url:"assets/imagenes/huatulco.jpg",revision:"26e01fda4b42b320d3e332fc5f39839d"},{url:"assets/imagenes/los cabos.jpg",revision:"fd07deb188cb9256093417a6aea3a6d6"},{url:"assets/imagenes/maza.png",revision:"5f972656c4d5a14e95bb3245f2f05a74"},{url:"assets/imagenes/mazatlan.jpg",revision:"df08d0c4c0d0607605439aee81ae21ac"},{url:"assets/imagenes/mex.png",revision:"1e8be7a971e7ff67f27b97dc06aa1787"},{url:"assets/imagenes/mexico.jpg",revision:"a84b3f03989e11155bbb939acfa04793"},{url:"assets/imagenes/puerto.png",revision:"2fd5c30cca4745e3f3d0e2bdf69879ca"},{url:"assets/imagenes/tolu.png",revision:"316cb9bc6d8cccc1c434a7ff89238ac7"},{url:"assets/imagenes/toluca.jpg",revision:"66c5ffe667c828bfb6feb14e5ba3ab5a"},{url:"assets/imagenes/vallarta.jpg",revision:"521d177c4c7f0fca31a9862fb29c04ae"},{url:"cabos.html",revision:"25013dcca1f3728dca9baeebd9d0ff18"},{url:"can.html",revision:"fbea960f9a325104d87f064f74c68407"},{url:"css/styles.css",revision:"e7332bdba25982a235486878fa7e90ee"},{url:"huat.html",revision:"1638303d6d5b50b9b9242212b8b94b2d"},{url:"index.html",revision:"725d51853726b1a8e23875135352be27"},{url:"js/scripts.js",revision:"4518f82ff2a57cb4ac64d651c199de12"},{url:"maza.html",revision:"4e9cf7a9cc1ec47f05c57c4a8fba1268"},{url:"mex.html",revision:"cc858a91fda1961f19db0816fa9361ac"},{url:"puerto.html",revision:"6edd646cc2d4fe5919ddab92b9d24253"},{url:"tolu.html",revision:"0e7a5f7458ada03753d0e9fb9834b47f"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
