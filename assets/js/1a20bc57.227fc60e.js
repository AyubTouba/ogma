"use strict";(self.webpackChunkogma=self.webpackChunkogma||[]).push([[468],{9848:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7689);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),m=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=m(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=m(n),d=a,g=u["".concat(c,".").concat(d)]||u[d]||s[d]||o;return n?r.createElement(g,l(l({ref:t},p),{},{components:n})):r.createElement(g,l({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var m=2;m<o;m++)l[m]=n[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6251:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>i,contentTitle:()=>c,metadata:()=>m,toc:()=>p,default:()=>u});var r=n(9985),a=n(1755),o=(n(7689),n(9848)),l=["components"],i={id:"cli",title:"CLI"},c="@ogma/cli",m={unversionedId:"cli",id:"cli",isDocsHomePage:!1,title:"CLI",description:"Rehydration of Ogma JSON logs without a problem.",source:"@site/docs/cli.md",sourceDirName:".",slug:"/cli",permalink:"/ogma/docs/cli",editUrl:"https://github.com/jmcdo29/ogma/edit/main/apps/docs/docs/cli.md",tags:[],version:"current",frontMatter:{id:"cli",title:"CLI"},sidebar:"mySidebar",previous:{title:"Custom Parsers",permalink:"/ogma/docs/nestjs/custom"},next:{title:"Styler",permalink:"/ogma/docs/styler"}},p=[{value:"Example",id:"example",children:[]},{value:"Demo",id:"demo",children:[]}],s={toc:p};function u(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ogmacli"},"@ogma/cli"),(0,o.kt)("p",null,"Rehydration of Ogma JSON logs without a problem."),(0,o.kt)("p",null,"Ogma comes with a command line function to rehydrate your json formatted logs back into the human readable format that can be installed with ",(0,o.kt)("inlineCode",{parentName:"p"},"@ogma/cli"),". The command takes one to two arguments, a log file relative to where the command is run from, and an optional flag to force the cli to print out with color. Find the table below to learn more about the arguments."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"argument"),(0,o.kt)("th",{parentName:"tr",align:null},"required"),(0,o.kt)("th",{parentName:"tr",align:null},"default"),(0,o.kt)("th",{parentName:"tr",align:null},"description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"file"),(0,o.kt)("td",{parentName:"tr",align:null},"yes"),(0,o.kt)("td",{parentName:"tr",align:null},"none"),(0,o.kt)("td",{parentName:"tr",align:null},'The log file to be "hydrated". This file should contain newline separated Ogma formatted JSON logs.')),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"--color"),(0,o.kt)("td",{parentName:"tr",align:null},"no"),(0,o.kt)("td",{parentName:"tr",align:null},"terminal's TTY argument"),(0,o.kt)("td",{parentName:"tr",align:null},"you can pass ",(0,o.kt)("inlineCode",{parentName:"td"},"--color")," or ",(0,o.kt)("inlineCode",{parentName:"td"},"--color=true")," to force colors to be used. ",(0,o.kt)("inlineCode",{parentName:"td"},"--color=false")," will force the command to not print the logs back out in color. Depending on the terminal you are using, colors may not be used by default.")))),(0,o.kt)("p",null,"The arguments can be passed in any order for ease of use."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"An example of the command's usage could be like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"ogma production.log --color\n")),(0,o.kt)("p",null,"or if you have a TTY enabled command prompt"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"ogma production.log\n")),(0,o.kt)("p",null,"As this prints out to ",(0,o.kt)("inlineCode",{parentName:"p"},"process.stdout")," it is possible to pipe this output to another file using the ",(0,o.kt)("inlineCode",{parentName:"p"},">")," operator. Like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"ogma production.log > production.hydrated.log\n")),(0,o.kt)("h2",{id:"demo"},"Demo"),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{src:"https://ogma-docs-images.s3-us-west-2.amazonaws.com/ogma-cli.gif",alt:"Ogma CLI gif",width:"1200"})))}u.isMDXComponent=!0}}]);