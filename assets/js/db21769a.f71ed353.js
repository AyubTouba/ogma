"use strict";(self.webpackChunkogma=self.webpackChunkogma||[]).push([[896],{9848:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7689);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(f,s(s({ref:t},c),{},{components:n})):r.createElement(f,s({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4706:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>i,contentTitle:()=>l,metadata:()=>p,toc:()=>c,default:()=>u});var r=n(9985),a=n(1755),o=(n(7689),n(9848)),s=["components"],i={id:"nats",title:"Platform Nats"},l="@ogma/platform-nats",p={unversionedId:"nestjs/rpc/nats",id:"nestjs/rpc/nats",isDocsHomePage:!1,title:"Platform Nats",description:"The NatsParser parser for the OgmaInterceptor. This plugin class parses NATS request and response object to be able to successfully log the data about the request. For more information, check out the @ogma/nestjs-module documentation.",source:"@site/docs/nestjs/rpc/nats.md",sourceDirName:"nestjs/rpc",slug:"/nestjs/rpc/nats",permalink:"/ogma/docs/nestjs/rpc/nats",editUrl:"https://github.com/jmcdo29/ogma/edit/main/apps/docs/docs/nestjs/rpc/nats.md",tags:[],version:"current",frontMatter:{id:"nats",title:"Platform Nats"},sidebar:"mySidebar",previous:{title:"Platform MQTT",permalink:"/ogma/docs/nestjs/rpc/mqtt"},next:{title:"Platform RabbitMQ",permalink:"/ogma/docs/nestjs/rpc/rabbitmq"}},c=[{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[]}],m={toc:c};function u(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ogmaplatform-nats"},"@ogma/platform-nats"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"NatsParser")," parser for the ",(0,o.kt)("inlineCode",{parentName:"p"},"OgmaInterceptor"),". This plugin class parses NATS request and response object to be able to successfully log the data about the request. For more information, check out the ",(0,o.kt)("a",{parentName:"p",href:"../module"},"@ogma/nestjs-module")," documentation."),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"Nothing special, standard ",(0,o.kt)("inlineCode",{parentName:"p"},"npm i @ogma/platform-nats")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn add @ogma/platform-nats")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"This plugin is to be used in the ",(0,o.kt)("inlineCode",{parentName:"p"},"OgmaInterceptorOptions")," portion of the ",(0,o.kt)("inlineCode",{parentName:"p"},"OgmaModule")," during ",(0,o.kt)("inlineCode",{parentName:"p"},"forRoot")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"forRootAsync")," registration. It can be used like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"@Module(\n  OgmaModule.forRoot({\n    interceptor: {\n      rpc: NatsParser\n    }\n  })\n)\nexport class AppModule {}\n")))}u.isMDXComponent=!0}}]);