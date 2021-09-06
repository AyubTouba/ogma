"use strict";(self.webpackChunkogma=self.webpackChunkogma||[]).push([[814],{9848:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var a=n(7689);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),g=p(n),c=o,u=g["".concat(s,".").concat(c)]||g[c]||m[c]||i;return n?a.createElement(u,l(l({ref:t},d),{},{components:n})):a.createElement(u,l({ref:t},d))}));function c(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=g;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:o,l[1]=r;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},3893:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>r,contentTitle:()=>s,metadata:()=>p,toc:()=>d,default:()=>g});var a=n(9985),o=n(1755),i=(n(7689),n(9848)),l=["components"],r={id:"logger",title:"Logger"},s="@ogma/logger",p={unversionedId:"logger",id:"logger",isDocsHomePage:!1,title:"Logger",description:"Logging",source:"@site/docs/logger.md",sourceDirName:".",slug:"/logger",permalink:"/ogma/docs/logger",editUrl:"https://github.com/jmcdo29/ogma/edit/main/apps/docs/docs/logger.md",tags:[],version:"current",frontMatter:{id:"logger",title:"Logger"},sidebar:"mySidebar",previous:{title:"Introduction",permalink:"/ogma/docs/"},next:{title:"NestJS Module",permalink:"/ogma/docs/nestjs/module"}},d=[{value:"Logging",id:"logging",children:[{value:"printError",id:"printerror",children:[]}]},{value:"Adding Context and Application Name",id:"adding-context-and-application-name",children:[]},{value:"Ogma Options",id:"ogma-options",children:[{value:"Using Files instead of a console",id:"using-files-instead-of-a-console",children:[]},{value:"JSON Logging",id:"json-logging",children:[]},{value:"Applying color to Text",id:"applying-color-to-text",children:[]}]},{value:"Example of what the logs look like",id:"example-of-what-the-logs-look-like",children:[]}],m={toc:d};function g(e){var t=e.components,n=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"ogmalogger"},"@ogma/logger"),(0,i.kt)("h2",{id:"logging"},"Logging"),(0,i.kt)("p",null,"To use Ogma, first you'll need to instantiate an instance of the Ogma class. You can pass in options to override the default if you would like as well. (options defined below). Ogma has eight different logging levels:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"OFF: No logs are displayed through Ogma. ",(0,i.kt)("inlineCode",{parentName:"li"},"console.log")," will still work"),(0,i.kt)("li",{parentName:"ul"},"SILLY: For when you just want to type fun stuff but don't really want people to see it (usually). Colored with Magenta"),(0,i.kt)("li",{parentName:"ul"},"VERBOSE: great for long strings of errors and things going on. Colored with Green"),(0,i.kt)("li",{parentName:"ul"},"DEBUG: Just like the name implies, debugging! Colored with Blue"),(0,i.kt)("li",{parentName:"ul"},"INFO: For normal logging, nothing special here. Colored with Cyan."),(0,i.kt)("li",{parentName:"ul"},"WARN: For errors about things that ",(0,i.kt)("em",{parentName:"li"},"may")," be a problem. Colored with Yellow."),(0,i.kt)("li",{parentName:"ul"},"ERROR: For errors about things that ",(0,i.kt)("em",{parentName:"li"},"are")," a problem. Colored with Red."),(0,i.kt)("li",{parentName:"ul"},"FATAL: Yeah, you should call someone at 3AM if this log ever shows up. Colored with Red.")),(0,i.kt)("p",null,"When discussing log levels, Ogma will print at the level provided and anything under the level as shown above, so if 'SILLY' is set, all logs will be shown; if 'WARN' is set as the logLevel, only 'WARN', 'ERROR', and 'FATAL' logs will be shown. The only exclusion to this rule is 'OFF', which prints nothing through Ogma."),(0,i.kt)("p",null,"When colors are enabled, the color mentioned above will be the color the level string is printed in."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"INFO is also aliased as LOG so ",(0,i.kt)("inlineCode",{parentName:"p"},"ogma.log()")," works just like ",(0,i.kt)("inlineCode",{parentName:"p"},"ogma.info()"),', but the log level will stay as "INFO" in both cases. The same goes for "VERBOSE" and "FINE" with "FINE" being the log level printed (for the sake of being concise). Lastly, \'ALL\' can be used for all logs. This is the same as setting ',(0,i.kt)("inlineCode",{parentName:"p"},"logLevel")," to 'SILLY'."))),(0,i.kt)("h3",{id:"printerror"},"printError"),(0,i.kt)("p",null,"There is also the ",(0,i.kt)("inlineCode",{parentName:"p"},"printError")," method on the ",(0,i.kt)("inlineCode",{parentName:"p"},"Ogma")," class that takes care of printing the error's name under the ",(0,i.kt)("inlineCode",{parentName:"p"},"ERROR")," level, the message under the ",(0,i.kt)("inlineCode",{parentName:"p"},"WARN")," level, and the stack trace under the ",(0,i.kt)("inlineCode",{parentName:"p"},"VERBOSE")," level."),(0,i.kt)("h2",{id:"adding-context-and-application-name"},"Adding Context and Application Name"),(0,i.kt)("p",null,"If for tracing purposes you'd like to add a context to the log, or an application name, you can pass the context to the method related to the logLevel (such as ",(0,i.kt)("inlineCode",{parentName:"p"},"ogma.debug('debug message, { context: SomeClass.name, application: 'NestJS' })")," and Ogma will print"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"[2019-12-19T23:01:23.900Z] [DEBUG] [hostname] [NestJS] 34760 [SomeClass] debug message\n")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If colors are enabled, hostname will print in magenta application will print in Yellow and context will print in Cyan."))),(0,i.kt)("p",null,"When application and context are both present, Ogma will print your logs in a form as follows"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"[ISOString Date] [logLevel] [hostname] [Application] PID [Context] message\n")),(0,i.kt)("p",null,"Examples can be seen below. The JSON structure follows the same form with log level and message being the last two properties."),(0,i.kt)("h2",{id:"ogma-options"},"Ogma Options"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"name"),(0,i.kt)("th",{parentName:"tr",align:null},"type"),(0,i.kt)("th",{parentName:"tr",align:null},"use"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"logLevel"),(0,i.kt)("td",{parentName:"tr",align:null},"one of the above log levels (default: INFO)"),(0,i.kt)("td",{parentName:"tr",align:null},"for determining this instance of Ogma's log level")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"color"),(0,i.kt)("td",{parentName:"tr",align:null},"boolean (default: true)"),(0,i.kt)("td",{parentName:"tr",align:null},"determine if color should attempt to be used. NOTE: Ogma only does not use color if there is an explicit ",(0,i.kt)("inlineCode",{parentName:"td"},"getColorDepth")," of 1 or ",(0,i.kt)("inlineCode",{parentName:"td"},"NO_COLOR")," or ",(0,i.kt)("inlineCode",{parentName:"td"},"NODE_DISABLE_COLOR")," is set")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"stream"),(0,i.kt)("td",{parentName:"tr",align:null},"{ write: (message: any) => void, getColorDepth?: () => number }"),(0,i.kt)("td",{parentName:"tr",align:null},"the output mechanism used to know how to write logs")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"json"),(0,i.kt)("td",{parentName:"tr",align:null},"boolean (default: false)"),(0,i.kt)("td",{parentName:"tr",align:null},"print the logs in a JSON format")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"context"),(0,i.kt)("td",{parentName:"tr",align:null},"string optional"),(0,i.kt)("td",{parentName:"tr",align:null},"a context for the Ogma class to work with.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"application"),(0,i.kt)("td",{parentName:"tr",align:null},"string optional"),(0,i.kt)("td",{parentName:"tr",align:null},"an application name for Ogma to print")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"levelMap"),(0,i.kt)("td",{parentName:"tr",align:null},"an object with the above levels as the keys and strings as the vales"),(0,i.kt)("td",{parentName:"tr",align:null},"a way to provide custom log levels in the event that there are mappings the developer wants to support")))),(0,i.kt)("h3",{id:"using-files-instead-of-a-console"},"Using Files instead of a console"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Ogma will try to use colors if they are available, and by default will do so. If the current ",(0,i.kt)("inlineCode",{parentName:"p"},"stream")," has a ",(0,i.kt)("inlineCode",{parentName:"p"},"getColorDepth")," method, that will be used to determine the color's possible outputs. If you want to override this, to force colors you can use the ",(0,i.kt)("a",{parentName:"p",href:"https://nodejs.org/api/tty.html#tty_writestream_getcolordepth_env"},(0,i.kt)("inlineCode",{parentName:"a"},"FORCE_COLOR")," env variable (0,1,2,3)")," or to disable them you can use the ",(0,i.kt)("a",{parentName:"p",href:"https://nodejs.org/api/tty.html#tty_writestream_getcolordepth_env"},(0,i.kt)("inlineCode",{parentName:"a"},"NO_COLOR")," or ",(0,i.kt)("inlineCode",{parentName:"a"},"NODE_DISABLE_COLOR")," env variable"),"."))),(0,i.kt)("p",null,"If you want to use a file to hold your logs instead of a console/terminal/bash you can pass in a stream of your own to the options like so:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { createWriteStream } from 'fs';\nimport { Ogma } from '@ogma/logger';\n\nconst fileWriter = new Ogma({\n  stream: createWriteStream('./server.log')\n  }\n});\n\nfileWriter.log('Logging to File');\n")),(0,i.kt)("h3",{id:"json-logging"},"JSON Logging"),(0,i.kt)("p",null,"If the ",(0,i.kt)("inlineCode",{parentName:"p"},"json")," option is passed as ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," then regardless of ",(0,i.kt)("inlineCode",{parentName:"p"},"color")," Ogma will print your message along with system information in a single line JSON object (i.e. no newline characters). View the sample below to get a better idea of Ogma's output. Ogma will add an ",(0,i.kt)("inlineCode",{parentName:"p"},"ool")," property to the JSON logs or ",(0,i.kt)("inlineCode",{parentName:"p"},"Ogma Original Level"),". This is in case there is a custom levelMap passed and allows the CLI to still transform the output back into Ogma's standard format."),(0,i.kt)("h3",{id:"applying-color-to-text"},"Applying color to Text"),(0,i.kt)("p",null,"As of version 2, it is suggested to use the separate ",(0,i.kt)("a",{parentName:"p",href:"./styler"},(0,i.kt)("inlineCode",{parentName:"a"},"@ogma/styler"))," package. This package is what Ogma uses under the hood to do the basic coloring, and will provide a cleaner and more verbose API."),(0,i.kt)("p",null,"Using the non-JSON mode, color is attempted to be applied by default. This is determined by checking the current environment (if there is a global ",(0,i.kt)("inlineCode",{parentName:"p"},"process")," variable) and if there is, what ",(0,i.kt)("inlineCode",{parentName:"p"},"stdout.getColorDepth()")," returns. If a custom stream is passed instead, a ",(0,i.kt)("inlineCode",{parentName:"p"},"getColorDepth")," method can be added to the stream object which should return a 1, 4, 8, or 24. If no ",(0,i.kt)("inlineCode",{parentName:"p"},"getColorDepth()")," is present, but the ",(0,i.kt)("inlineCode",{parentName:"p"},"color")," option is true, Ogma will set the method to return ",(0,i.kt)("inlineCode",{parentName:"p"},"4")," for you. If you want to disable colors completely, you can either set ",(0,i.kt)("inlineCode",{parentName:"p"},"color")," to be ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," or you can set the ",(0,i.kt)("inlineCode",{parentName:"p"},"NO_COLOR")," environment variable."),(0,i.kt)("h2",{id:"example-of-what-the-logs-look-like"},"Example of what the logs look like"),(0,i.kt)("p",null,"I said the logs were beautiful, and to me they absolutely are. Each log is matched with a timestamp in ISO format, the log level, a pipe character, and then the message, for easier searching if needed. If a JSON is passed to Ogma, a new line will separate the JSON and the original log line, but the timestamp and level will not be duplicated. Ogma also will print ",(0,i.kt)("inlineCode",{parentName:"p"},"'[Function]'")," if a function is found or ",(0,i.kt)("inlineCode",{parentName:"p"},"'[Circular]'")," is a circular reference is found."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'# ogma.log(\'hello\')\n[2019-12-11T22:54:58.462Z] [INFO]  [hostname] 34760 hello\n\n# ogma.log({a: () => \'hello\', b: {c: \'nested\'}, d: this});\n[2019-12-11T22:56:02.502Z] [INFO]  [hostname] 34760\n{\n  "a": "[Function]",\n  "b": {\n    "c": "nested"\n  },\n  "d": {\n    "global": "[Circular]",\n    "clearInterval": "[Function]",\n    "clearTimeout": "[Function]",\n    "setInterval": "[Function]",\n    "setTimeout": "[Function]",\n    "queueMicrotask": "[Function]",\n    "clearImmediate": "[Function]",\n    "setImmediate": "[Function]",\n    "__extends": "[Function]",\n    "__assign": "[Function]",\n    "__rest": "[Function]",\n    "__decorate": "[Function]",\n    "__param": "[Function]",\n    "__metadata": "[Function]",\n    "__awaiter": "[Function]",\n    "__generator": "[Function]",\n    "__exportStar": "[Function]",\n    "__values": "[Function]",\n    "__read": "[Function]",\n    "__spread": "[Function]",\n    "__spreadArrays": "[Function]",\n    "__await": "[Function]",\n    "__asyncGenerator": "[Function]",\n    "__asyncDelegator": "[Function]",\n    "__asyncValues": "[Function]",\n    "__makeTemplateObject": "[Function]",\n    "__importStar": "[Function]",\n    "__importDefault": "[Function]"\n  }\n}\n')),(0,i.kt)("h4",{id:"standard-string-logging"},"Standard String Logging"),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{src:"https://ogma-docs-images.s3-us-west-2.amazonaws.com/ogma-demo.gif",alt:"Ogma String Logging",width:"1200"})),(0,i.kt)("h4",{id:"json-logging-1"},"JSON Logging"),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{src:"https://ogma-docs-images.s3-us-west-2.amazonaws.com/ogma-json-demo.gif",alt:"Ogma JSON Logging",width:"1200"})))}g.isMDXComponent=!0}}]);