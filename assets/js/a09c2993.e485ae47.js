"use strict";(self.webpackChunkogma=self.webpackChunkogma||[]).push([[128],{9848:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>g});var a=n(7689);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),m=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=m(t.components);return a.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,s=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),c=m(n),g=r,u=c["".concat(s,".").concat(g)]||c[g]||p[g]||o;return n?a.createElement(u,i(i({ref:e},d),{},{components:n})):a.createElement(u,i({ref:e},d))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:r,i[1]=l;for(var m=2;m<o;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4411:(t,e,n)=>{n.r(e),n.d(e,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>m,toc:()=>d,default:()=>c});var a=n(9985),r=n(1755),o=(n(7689),n(9848)),i=["components"],l={id:"introduction",title:"Introduction",slug:"/"},s=void 0,m={unversionedId:"introduction",id:"introduction",isDocsHomePage:!1,title:"Introduction",description:"Motivation",source:"@site/docs/introduction.md",sourceDirName:".",slug:"/",permalink:"/ogma/docs/",editUrl:"https://github.com/jmcdo29/ogma/edit/main/apps/docs/docs/introduction.md",tags:[],version:"current",frontMatter:{id:"introduction",title:"Introduction",slug:"/"},sidebar:"mySidebar",next:{title:"Logger",permalink:"/ogma/docs/logger"}},d=[{value:"Motivation",id:"motivation",children:[]},{value:"Installation",id:"installation",children:[]},{value:"Benchmarks",id:"benchmarks",children:[]}],p={toc:d};function c(t){var e=t.components,n=(0,r.Z)(t,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"motivation"},"Motivation"),(0,o.kt)("p",null,"The first question you'll probably ask yourself is \"Why is there another logger library?\", and it's a great question to ask! Honesty, this started off as a sided project for me to learn more about Node's streams and how loggers work, so I could be better informed when it came to using a logger. However, in the process of learning and making something for academic purposes, I ended up creating a logger that had better statistics than Winston or Bunyan, close stats to Pino, and a very simple API."),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"Installation is pretty simple, choose your favorite package manager and install ",(0,o.kt)("a",{parentName:"p",href:"./logger"},(0,o.kt)("inlineCode",{parentName:"a"},"@ogma/logger")),". If you're working with ",(0,o.kt)("a",{parentName:"p",href:"https://docs.nestjs.com"},"NestJS")," you can install ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:3000/ogma/docs/nestjs/module"},(0,o.kt)("inlineCode",{parentName:"a"},"@ogma/nestjs-module"))," instead and ",(0,o.kt)("inlineCode",{parentName:"p"},"@ogma/logger")," will be installed for you."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Ogma is the name of the Celtic god of Wisdom and Eloquence. As I think these logs both look pretty and tell good information, I figured I would go with it."))),(0,o.kt)("h2",{id:"benchmarks"},"Benchmarks"),(0,o.kt)("p",null,"So it was mentioned that Ogma beats out Winston and Bunyan and comes very close to Pino if not beating it in a few catagories. The below are the current benchmarks, but feel free to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/jmcdo29/ogma"},"run them yourself")),(0,o.kt)("p",null,"Benchmarks were made by testing the logging capabilities of several loggers against each other. All loggers are writing to a writeStream of ",(0,o.kt)("inlineCode",{parentName:"p"},"/dev/null"),". Each logger writes 100000 logs of each log type. Simple is a small string. JSON is a simple json, one key one value. Long is a 2000 random byte string. Deep is a deep JSON, including using the ",(0,o.kt)("inlineCode",{parentName:"p"},"globalThis"),". All timings were made by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"perf_hooks")," module."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Logger"),(0,o.kt)("th",{parentName:"tr",align:null},"Simple"),(0,o.kt)("th",{parentName:"tr",align:null},"Long"),(0,o.kt)("th",{parentName:"tr",align:null},"JSON"),(0,o.kt)("th",{parentName:"tr",align:null},"Deep"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Bunyan"),(0,o.kt)("td",{parentName:"tr",align:null},"355.005893ms"),(0,o.kt)("td",{parentName:"tr",align:null},"4099.797733ms"),(0,o.kt)("td",{parentName:"tr",align:null},"410.885866ms"),(0,o.kt)("td",{parentName:"tr",align:null},"2266.010139ms")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Ogma"),(0,o.kt)("td",{parentName:"tr",align:null},"172.904867ms"),(0,o.kt)("td",{parentName:"tr",align:null},"1847.369098ms"),(0,o.kt)("td",{parentName:"tr",align:null},"310.955876ms"),(0,o.kt)("td",{parentName:"tr",align:null},"445.961304ms")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Pino"),(0,o.kt)("td",{parentName:"tr",align:null},"116.647594ms"),(0,o.kt)("td",{parentName:"tr",align:null},"4287.163808ms"),(0,o.kt)("td",{parentName:"tr",align:null},"141.358471ms"),(0,o.kt)("td",{parentName:"tr",align:null},"1355.486535ms")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Winston"),(0,o.kt)("td",{parentName:"tr",align:null},"380.9764ms"),(0,o.kt)("td",{parentName:"tr",align:null},"5127.20654ms"),(0,o.kt)("td",{parentName:"tr",align:null},"353.4015ms"),(0,o.kt)("td",{parentName:"tr",align:null},"457.380278ms")))),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Benchmarks generated on Linux/linux x64 5.11.0-7614-generic ~Intel(R) Core(TM) i7-10750H CPU @ 2.60GHz (cores/threads): 12"))))}c.isMDXComponent=!0}}]);