/*! For license information please see 57971bbc.894ac751.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{171:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return m}));var i=a(1),n=a(9),r=(a(0),a(209)),o=a(214),c=a(213),l={title:"Getting Started with the Web Applications SDK",sidebar_label:"Getting Started"},s={id:"workflow/getting-started-web",title:"Getting Started with the Web Applications SDK",description:'import UseCaseContainer from "../../src/components/UseCaseContainer";',source:"@site/docs/workflow/getting-started-web.mdx",permalink:"/dev-center/docs/workflow/getting-started-web",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/workflow/getting-started-web.mdx",sidebar_label:"Getting Started",sidebar:"workflow",previous:{title:"SDK Overview",permalink:"/dev-center/docs/workflow/sdk-overview"},next:{title:"Integrating the Esri API",permalink:"/dev-center/docs/workflow/integrating-the-esri-api-web"}},b=[{value:"Download",id:"download",children:[]},{value:"Requirements",id:"requirements",children:[]},{value:"Setup",id:"setup",children:[]},{value:"Building",id:"building",children:[]},{value:"Deployment",id:"deployment",children:[{value:"Host the Activity Pack",id:"host-the-activity-pack",children:[]},{value:"Register the Activity Pack",id:"register-the-activity-pack",children:[]},{value:"Sharing the Activity Pack",id:"sharing-the-activity-pack",children:[]}]},{value:"Next Steps",id:"next-steps",children:[]}],p={rightToc:b};function m(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The Geocortex Workflow for Web Applications SDK consists of a TypeScript project that eases development of workflow activities and custom form elements. It produces a ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"/dev-center/docs/workflow/concepts-key-concepts#activity-packs"}),"workflow activity pack")," that can be consumed by web applications that use workflow."),Object(r.b)("h2",{id:"download"},"Download"),Object(r.b)("p",null,"You can download the Workflow Activity SDK for TypeScript ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://apps.geocortex.com/workflow/latest/activity-sdk.zip"}),"here.")),Object(r.b)("h2",{id:"requirements"},"Requirements"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://nodejs.org/en/"}),"Node.js")," version 6.11.0 or newer.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Run ",Object(r.b)("inlineCode",{parentName:"li"},"node -v")," in the terminal to confirm the version."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://www.npmjs.com/get-npm"}),"NPM")," version 3.10.10 or newer.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Run ",Object(r.b)("inlineCode",{parentName:"li"},"npm -v")," in the terminal to confirm the version."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://code.visualstudio.com/"}),"Visual Studio Code")," version 1.15 or newer.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Note: This document assumes that Visual Studio Code is the development environment; however, it is possible to develop workflow activities with Visual Studio or other command line tools.")))),Object(r.b)("h2",{id:"setup"},"Setup"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Start Visual Studio Code."),Object(r.b)("li",{parentName:"ol"},"Select ",Object(r.b)("inlineCode",{parentName:"li"},"Open Folder...")," and choose the ",Object(r.b)("inlineCode",{parentName:"li"},"activity-sdk")," folder."),Object(r.b)("li",{parentName:"ol"},"Open the integrated terminal using ",Object(r.b)("inlineCode",{parentName:"li"},"CTRL+`"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Or from the ",Object(r.b)("strong",{parentName:"li"},"View")," > ",Object(r.b)("strong",{parentName:"li"},"Integrated Terminal")," menu."))),Object(r.b)("li",{parentName:"ol"},"Run ",Object(r.b)("inlineCode",{parentName:"li"},"npm install")," in the terminal to install the project's dependencies.")),Object(r.b)("h2",{id:"building"},"Building"),Object(r.b)("p",null,"Run ",Object(r.b)("inlineCode",{parentName:"p"},"npm run build")," in the terminal to compile the TypeScript project."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The ",Object(r.b)("inlineCode",{parentName:"li"},"dist")," folder will contain the compiled activity pack output.")),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("div",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(i.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Check out ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"/dev-center/docs/workflow/implement-custom-activity-web"}),"Implement Custom Activities for Web Applications")," to learn how to make activities for your activity pack"))),Object(r.b)("h2",{id:"deployment"},"Deployment"),Object(r.b)("p",null,"Deploying workflow activities consists of two steps:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Hosting the workflow activity pack on a server accessible to the Geocortex Workflow Designer"),Object(r.b)("li",{parentName:"ol"},"Making the workflow activity pack known to Geocortex Workflow Designer and Workflow Applications by registering it.")),Object(r.b)("h3",{id:"host-the-activity-pack"},"Host the Activity Pack"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Deploying with third party libraries - ryan said it breaks down if your deps have deps.")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"dist")," folder produced by running ",Object(r.b)("inlineCode",{parentName:"p"},"npm run build")," can be directly hosted with the webserver technology that is most appropiate for your use case, such as ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://www.iis.net/"}),"IIS"),".\nActivity packs must be hosted by a web server that supports SSL and CORS."),Object(r.b)("h4",{id:"server-requirements"},"Server Requirements"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The server must have a valid SSL certificate."),Object(r.b)("li",{parentName:"ul"},"The server must support ",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Cross-origin_resource_sharing"}),"Cross-Origin Resource Sharing (CORS)")," and allow CORS requests from the ",Object(r.b)("inlineCode",{parentName:"li"},"https://apps.geocortex.com")," origin.")),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("div",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(i.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"If you sign in to Workflow Designer using Portal for ArcGIS your server will need to allow CORS requests from your custom origin. For example, ",Object(r.b)("inlineCode",{parentName:"p"},"https://acme.apps.geocortex.com"),"."))),Object(r.b)("p",null,"Hosting workflow activity packs in this manner allows Workflow Designer to read the list of custom activities and their metadata from the source .ts files (or source maps)."),Object(r.b)("h4",{id:"development-web-server"},"Development Web Server"),Object(r.b)("p",null,"For ease of development, this project includes an ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://www.npmjs.com/package/express"}),"Express")," web server that supports SSL and is suitable for most development purposes."),Object(r.b)("p",null,"To start the development web server and enable a compile-on-save watch task:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Run ",Object(r.b)("inlineCode",{parentName:"li"},"npm start")," in the terminal to start the build and the development web server.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Note: You can press ",Object(r.b)("inlineCode",{parentName:"li"},"CTRL+C")," in the terminal to stop the watch and the development web server.")))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The development web server is only available while the ",Object(r.b)("inlineCode",{parentName:"li"},"start")," task is running."),Object(r.b)("li",{parentName:"ul"},"The development web server is available at ",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://localhost:57999/"}),"https://localhost:57999/")," by default.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"You can change the port by modifying ",Object(r.b)("inlineCode",{parentName:"li"},".build/tsc.js"),". Edit the first line:",Object(r.b)("br",{parentName:"li"}),Object(r.b)("inlineCode",{parentName:"li"},"var PORT = 57999;")))),Object(r.b)("li",{parentName:"ul"},"The development web server serves the content of the ",Object(r.b)("inlineCode",{parentName:"li"},"dist")," directory."),Object(r.b)("li",{parentName:"ul"},"The SSL certificate of the development web server is not valid. To work around this, do one of the following:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Open ",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://localhost:57999/"}),"https://localhost:57999/")," in a web browser and allow the invalid certificate as an exception."),Object(r.b)("li",{parentName:"ul"},"Trust the ",Object(r.b)("inlineCode",{parentName:"li"},".build/ca.crt")," file (add it to your Trusted Root Authority store)."),Object(r.b)("li",{parentName:"ul"},"Replace the ",Object(r.b)("inlineCode",{parentName:"li"},".build/localhost.crt")," and ",Object(r.b)("inlineCode",{parentName:"li"},".build/localhost.key")," files with a known valid certificate."))),Object(r.b)("li",{parentName:"ul"},"The development web server supports CORS requests from any origin by default.")),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("div",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(i.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"As localhost is only accessible to your host machine, activity packs hosted in this manner will not be accesible to any other users."))),Object(r.b)("h3",{id:"register-the-activity-pack"},"Register the Activity Pack"),Object(r.b)("p",null,"To make an activity pack available to workflow authors in Workflow Designer you must create a special item in ArcGIS Online or Portal for ArcGIS that references it."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Sign in to ArcGIS Online or Portal for ArcGIS."),Object(r.b)("li",{parentName:"ol"},"Go to ",Object(r.b)("strong",{parentName:"li"},"My Content"),"."),Object(r.b)("li",{parentName:"ol"},"Select ",Object(r.b)("strong",{parentName:"li"},"Add Item")," > ",Object(r.b)("strong",{parentName:"li"},"An application"),".",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("inlineCode",{parentName:"li"},"Web Mapping"),"."),Object(r.b)("li",{parentName:"ul"},"Purpose: ",Object(r.b)("inlineCode",{parentName:"li"},"Ready To Use"),"."),Object(r.b)("li",{parentName:"ul"},"API: ",Object(r.b)("inlineCode",{parentName:"li"},"JavaScript"),"."),Object(r.b)("li",{parentName:"ul"},"URL: The URL to your activity pack.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Use ",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://localhost:57999/"}),"https://localhost:57999/")," for the development server."))),Object(r.b)("li",{parentName:"ul"},"Title: Your desired title."),Object(r.b)("li",{parentName:"ul"},"Tags: Must include ",Object(r.b)("inlineCode",{parentName:"li"},"geocortex-workflow-activity-pack"),".")))),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("div",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(i.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"The activity pack will ",Object(r.b)("strong",{parentName:"p"},"not")," be registered unless it includes the tag ",Object(r.b)("inlineCode",{parentName:"p"},"geocortex-workflow-activity-pack"),"."))),Object(r.b)("h3",{id:"sharing-the-activity-pack"},"Sharing the Activity Pack"),Object(r.b)("p",null,"As a workflow author, you will see custom activities in Workflow Designer from the activity packs you have registered. You will also see activity packs that have been shared with you via groups you are a member of."),Object(r.b)("p",null,"To share an activity pack with other workflow authors in your organization share the ArcGIS item that represents the activity pack with a group that contains the target users."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("div",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(i.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"You do not need to share activity packs with the end users of your applications that run workflows containing custom activities."))),Object(r.b)("h2",{id:"next-steps"},"Next Steps"),Object(r.b)(o.a,{mdxType:"UseCaseContainer"},Object(r.b)(c.a,{title:"Implement a Custom Activity",description:"Implement a custom activity for web applications",link:"implement-custom-activity-web.mdx",mdxType:"UseCaseCard"}),Object(r.b)(c.a,{title:"Implement a Custom Form Element",description:"Implement a custom form element for web applications",link:"implement-custom-form-elements-web.mdx",mdxType:"UseCaseCard"}),Object(r.b)(c.a,{title:"Reference a Third Party Library",description:"Reference a third party library in web applications",link:"reference-third-party-library-web.mdx",mdxType:"UseCaseCard"}),Object(r.b)(c.a,{title:"Integrate the Esri API into custom activities",description:"Integrate the Esri API into custom code",link:"integrating-the-esri-api-web.mdx",mdxType:"UseCaseCard"})))}m.isMDXComponent=!0},209:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return u}));var i=a(0),n=a.n(i);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=n.a.createContext({}),b=function(e){var t=n.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c({},t,{},e)),a},p=function(e){var t=b(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=Object(i.forwardRef)((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(a),d=i,u=p["".concat(o,".").concat(d)]||p[d]||m[d]||r;return a?n.a.createElement(u,c({ref:t},s,{components:a})):n.a.createElement(u,c({ref:t},s))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<r;s++)o[s]=a[s];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},210:function(e,t,a){var i;!function(){"use strict";var a={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var i=arguments[t];if(i){var r=typeof i;if("string"===r||"number"===r)e.push(i);else if(Array.isArray(i)&&i.length){var o=n.apply(null,i);o&&e.push(o)}else if("object"===r)for(var c in i)a.call(i,c)&&i[c]&&e.push(c)}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(i=function(){return n}.apply(t,[]))||(e.exports=i)}()},211:function(e,t,a){"use strict";a(212)("link",(function(e){return function(t){return e(this,"a","href",t)}}))},212:function(e,t,a){var i=a(17),n=a(18),r=a(23),o=/"/g,c=function(e,t,a,i){var n=String(r(e)),c="<"+t;return""!==a&&(c+=" "+a+'="'+String(i).replace(o,"&quot;")+'"'),c+">"+n+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(c),i(i.P+i.F*n((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},213:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));a(211);var i=a(0),n=a.n(i),r=a(210),o=a.n(r),c=a(127),l=a.n(c);function s(e){var t=e.title,a=e.description,i=e.link;return n.a.createElement("div",{className:o()("card-demo",l.a.root)},n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card__header"},n.a.createElement("h3",null,t)),n.a.createElement("div",{className:"card__body"},n.a.createElement("p",null,a)),n.a.createElement("div",{className:"card__footer"},n.a.createElement("a",{className:"button button--secondary button--block",href:i},"Get Started"))))}},214:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var i=a(0),n=a.n(i),r=a(210),o=a.n(r),c=a(128),l=a.n(c);function s(e){var t=e.children;return n.a.createElement("div",{className:o()(l.a.root)},t)}}}]);