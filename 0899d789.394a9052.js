/*! For license information please see 0899d789.394a9052.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{149:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return d})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return f}));var a=n(1),o=n(9),i=(n(0),n(209)),r=n(216),c=n(217),s=n(218),l=n(227),p=n(213),m=n(214),u={title:"Commands and Operations",description:"Geocortex Mobile - Learn about commands and operations"},d={id:"mobile/concepts-commands-operations",title:"Commands and Operations",description:"Geocortex Mobile - Learn about commands and operations",source:"@site/docs/mobile/concepts-commands-operations.mdx",permalink:"/dev-center/docs/mobile/concepts-commands-operations",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/mobile/concepts-commands-operations.mdx",sidebar:"mobile",previous:{title:"App Config",permalink:"/dev-center/docs/mobile/concepts-app-config"},next:{title:"Events",permalink:"/dev-center/docs/mobile/concepts-events"}},b=[{value:"Argument Passing",id:"argument-passing",children:[]},{value:"Passing Named Arguments",id:"passing-named-arguments",children:[]},{value:"Example",id:"example",children:[]}],h={rightToc:b};function f(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},h,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("div",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Before learning about commands and operations...")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Check out the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/dev-center/docs/mobile/concepts-key-concepts"}),"Key Concepts"),"."))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Commands and operations")," are runnable, independant units of work within Geocortex Mobile. Using the Geocortex Mobile SDK, it's possible to define custom commands and operations for use throughout the application. Commands are units of work which may take an input but do not produce an output, and operations differ because they produce output. Commands and Operations are grouped by namespace, for example;"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"auth.sign-in\nauth.sign-out\nedit.add-feature\nedit.delete-features\n")),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/dev-center/docs/mobile/concepts-components-services"}),"Components or Services")," are usually responsible for registering a command or operation with Geocortex Mobile. Once a command or operation has been registered, it can be used from anywhere in the application. ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/dev-center/docs/mobile/implement-command-operation"}),"Custom Commands and Operations")," are registered with ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/dev-center/docs/mobile/implement-service"}),"Custom Services")," or ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/dev-center/docs/mobile/implement-component-with-ui"}),"Custom Components")," in this manner."),Object(i.b)("h3",{id:"argument-passing"},"Argument Passing"),Object(i.b)("p",null,"Commands and Operations are most commonly used to configure the behaviour of components. For example, here's configuration for the various behaviours of a Feature Details component."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "$type": "feature-details",\n    "id": "feature-details",\n    "featureActions": "item://menu/feature-actions",\n    "onFeatureShow": "highlights.add-focus",\n    "onFeatureHide": "highlights.remove-focus",\n    "onFeatureDelete": [\n        "highlights.remove-focus",\n        "highlights.remove",\n        "edit.delete-features",\n        "results.hide-details",\n        "results.remove"\n    ]\n}\n')),Object(i.b)("p",null,"App config properties that accept a command or operation can take a single operation (such as with ",Object(i.b)("inlineCode",{parentName:"p"},"onFeatureHide"),") or they can take a ",Object(i.b)("strong",{parentName:"p"},"command chain")," (such as with ",Object(i.b)("inlineCode",{parentName:"p"},"onFeatureDelete"),")."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("div",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Command chains are arrays of commands and operations which are executed sequentially. The output of previous operations is passed along the chain to future operations, allowing for complex input dependent behaviour."))),Object(i.b)("p",null,"In this example, when a feature is deleted,"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The focus and highlights are removed,"),Object(i.b)("li",{parentName:"ul"},"The feature is deleted from the layer,"),Object(i.b)("li",{parentName:"ul"},"The results details are hidden,"),Object(i.b)("li",{parentName:"ul"},"The feature is removed from the results list.")),Object(i.b)("p",null,"Since these commands and operations are running from the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.geocortex.com/webviewer/latest/admin-help/Default.htm#gwv/add-a-workflow-to-an-app.htm#use-the-menu-context-as-a-workflow-input"}),"context")," of a Feature Details component, the first command or operation will receive the relevant feature as it's input. If the property is a command chain, the next behaviour in line will receive one of two possible inputs."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"If the previous behaviour was a command (which doesn't produce output), then the original input is passed on to the next behaviour."),Object(i.b)("li",{parentName:"ol"},"If the previous behaviour was an operation (which produces an output), then the output of that operation is passed onto the next behaviour.")),Object(i.b)("p",null,"In this way, you can run multiple commands in a row that receive a feature as input, as seen in the ",Object(i.b)("inlineCode",{parentName:"p"},"onFeatureDelete")," command chain in the example."),Object(i.b)("h3",{id:"passing-named-arguments"},"Passing Named Arguments"),Object(i.b)("p",null,"If you choose, you can overide the default arguments passed into a command or operation by provide an ",Object(i.b)("inlineCode",{parentName:"p"},"arguments")," property."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "$type": "menu",\n    "id": "iwtm",\n    "items": [\n        {\n            "title": "Rotate by 45 Degrees",\n            "isEnabled": true,\n            "iconId": "sync",\n            "action": {\n                "name": "map.rotate-by",\n                "arguments": {\n                    "rotation": 45\n                }\n            }\n        }\n    ]\n}\n')),Object(i.b)("p",null,"This will override the default arugment passing behaviour for that command or operation. Each command has typed arguments that can will have ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/dev-center/docs/mobile/concepts-advanced-config#autocomplete-properties"}),"autocomplete linting in the app.json"),". For example, ",Object(i.b)("inlineCode",{parentName:"p"},"map.rotate-by")," takes a object of type ",Object(i.b)("inlineCode",{parentName:"p"},"MapRotateArgs"),", which has the property ",Object(i.b)("inlineCode",{parentName:"p"},"Rotation")," of type ",Object(i.b)("inlineCode",{parentName:"p"},"double"),". In the app config, the ",Object(i.b)("inlineCode",{parentName:"p"},"Rotation")," property can be camelCase'd instead of PascalCased."),Object(i.b)("h3",{id:"example"},"Example"),Object(i.b)(c.a,{defaultValue:"app",values:[{label:"app.json",value:"app"},{label:"layout.xml",value:"layout"},{label:"User Interface",value:"ui"}],mdxType:"Tabs"},Object(i.b)(s.a,{value:"app",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "$schema": "..\\\\..\\\\ViewerFramework\\\\app-config\\\\mobile\\\\mobile-app-config.schema.json",\n    "schemaVersion": "1.0",\n    "items": [\n        {\n            "$type": "layout",\n            "id": "desktop-layout",\n            "url": "resource://layout-large.xml",\n            "tags": ["mobile", "large"]\n        },\n        {\n            "$type": "map-extension",\n            "id": "demoMap",\n            "webMap": "448e4e75180441709a3df35aea2bca5b",\n            "onClick": ["tasks.identify", "highlights.add-focus", "highlights.pulse"]\n        },\n        {\n            "$type": "menu",\n            "id": "iwtm",\n            "items": [\n                {\n                    "title": "Return to Default Map View",\n                    "isEnabled": true,\n                    "iconId": "zoom_initial",\n                    "action": [\n                        {\n                            "name": "map.zoom-to-initial-viewpoint",\n                            "arguments": {\n                                "maps": "item://map-extension/demoMap"\n                            }\n                        }\n                    ]\n                }\n            ]\n        }\n    ]\n}\n'))),Object(i.b)(s.a,{value:"layout",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),'<?xml version="1.0" encoding="utf-8" ?>\n<layout\n  xmlns="https://geocortex.com/layout/v1"\n  xmlns:gxm="https://geocortex.com/layout/mobile/v1"\n  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n  xsi:schemaLocation="https://geocortex.com/layout/v1 ../../ViewerFramework/layout/layout-mobile.xsd">\n  <gxm:taskbar id="taskbar" orientation="vertical">\n    <map config="demoMap" slot="main">\n    <stack margin="0.8" slot="top-right">\n      <iwtm config="iwtm" />\n    </stack>\n    </map>\n  </gxm:taskbar>\n</layout>\n'))),Object(i.b)(s.a,{value:"ui",mdxType:"TabItem"},Object(i.b)(l.a,{src:Object(r.a)("video/commands-operations-demo.webm"),mdxType:"DemoVideo"}))),Object(i.b)("p",null,"This example demonstrates two different types of argument passing behaviour. The first action in the app config is a command chain defined on the ",Object(i.b)("inlineCode",{parentName:"p"},"onClick")," property of a map. This chain consists of three operations and commands:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"task.identify"),","),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"highlights.add-focus")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"highlights.pulse"))),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"tasks.identify")," does not have any named arguments defined, so it will take arguments passed into it from it's current ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.geocortex.com/webviewer/latest/admin-help/Default.htm#gwv/add-a-workflow-to-an-app.htm#use-the-menu-context-as-a-workflow-input"}),"context"),". Since this chain is run on a map click, the context argument passed in has the shape"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "geometry": "Esri.Point(<map-click-location>)",\n  ... <other props>\n}\n')),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"tasks.identify")," receives this argument, and since it is an operation, produces an output. Looking at the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/dev-center/docs/mobile/api-commands-operations"}),"Commands and Operations Documentation"),", ",Object(i.b)("inlineCode",{parentName:"p"},"tasks.identify")," has output with the shape"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "features": [<feature1>, <feature2>, ...],\n  "results": [<Result(feature1)>, <Result(feature2)>, ...],\n  ... <other props>\n}\n')),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"highlights.add-focus")," and ",Object(i.b)("inlineCode",{parentName:"p"},"highlights.pulse"),' both take an input object with a "features" property, so the output of ',Object(i.b)("inlineCode",{parentName:"p"},"tasks.identify")," will work nicely. ",Object(i.b)("inlineCode",{parentName:"p"},"highlights.add-focus")," is immediately after ",Object(i.b)("inlineCode",{parentName:"p"},"tasks.identify"),", so it receives the output of identify. Since ",Object(i.b)("inlineCode",{parentName:"p"},"highlights.add-focus")," is a command, it does not produce any output. ",Object(i.b)("inlineCode",{parentName:"p"},"highlights.pulse")," will receive the output of the last operation (or the original input if no operations have run), so it will also receive the output of ",Object(i.b)("inlineCode",{parentName:"p"},"tasks.identify"),". In this way, you can pass the output of an operation to multiple commands."),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("div",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Check out ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/dev-center/docs/mobile/change-default-behaviour"}),"Change Default Behaviour")," for more ways to override default behaviour like a Map's on click event.  "))),Object(i.b)("p",null,"The second command/operation in this application is a ",Object(i.b)("inlineCode",{parentName:"p"},"map.zoom-to-initial-viewpoint")," command on the I Want To Menu. This command takes a ","[MapExtensionArgs]","(API Link), which is provided as a named argument. The ",Object(i.b)("inlineCode",{parentName:"p"},"maps")," property in the argument references the demoMap in the config through an ",Object(i.b)("strong",{parentName:"p"},"Item Uri"),". Item URI's are a way of referencing other items within the app config. See ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/dev-center/docs/mobile/concepts-advanced-config#item-uris-and-resource-uris"}),"Item URI's")," for more details."),Object(i.b)("p",null,"Mobile has a large array of built in command and operations that you can chain to power custom behaviour. Custom commands and operations can also be implemented with the SDK."),Object(i.b)(m.a,{mdxType:"UseCaseContainer"},Object(i.b)(p.a,{title:"Commands and Operations Schema",description:"Check out the available commands and operations",link:"api-commands-operations",mdxType:"UseCaseCard"}),Object(i.b)(p.a,{title:"Configure Commands and Operations",description:"Change built in behaviour or add new behaviour using app config and layout",link:"change-default-behaviour",mdxType:"UseCaseCard"}),Object(i.b)(p.a,{title:"Build your own Commands and Operations",description:"Use the SDK to implement custom commands and operations",link:"custom-command-operation",mdxType:"UseCaseCard"}),Object(i.b)(p.a,{title:"Learn about Events built into Geocortex Mobile",description:"Learn about the global event infrastructure in Geocortex Mobile",link:"concepts-events",mdxType:"UseCaseCard"})))}f.isMDXComponent=!0},209:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return b}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},m=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,b=m["".concat(r,".").concat(d)]||m[d]||u[d]||i;return n?o.a.createElement(b,c({ref:t},l,{components:n})):o.a.createElement(b,c({ref:t},l))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var l=2;l<i;l++)r[l]=n[l];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},210:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var i=typeof a;if("string"===i||"number"===i)e.push(a);else if(Array.isArray(a)&&a.length){var r=o.apply(null,a);r&&e.push(r)}else if("object"===i)for(var c in a)n.call(a,c)&&a[c]&&e.push(c)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(a=function(){return o}.apply(t,[]))||(e.exports=a)}()},211:function(e,t,n){"use strict";n(212)("link",(function(e){return function(t){return e(this,"a","href",t)}}))},212:function(e,t,n){var a=n(17),o=n(18),i=n(23),r=/"/g,c=function(e,t,n,a){var o=String(i(e)),c="<"+t;return""!==n&&(c+=" "+n+'="'+String(a).replace(r,"&quot;")+'"'),c+">"+o+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(c),a(a.P+a.F*o((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",n)}},213:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));n(211);var a=n(0),o=n.n(a),i=n(210),r=n.n(i),c=n(127),s=n.n(c);function l(e){var t=e.title,n=e.description,a=e.link;return o.a.createElement("div",{className:r()("card-demo",s.a.root)},o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card__header"},o.a.createElement("h3",null,t)),o.a.createElement("div",{className:"card__body"},o.a.createElement("p",null,n)),o.a.createElement("div",{className:"card__footer"},o.a.createElement("a",{className:"button button--secondary button--block",href:a},"Get Started"))))}},214:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(0),o=n.n(a),i=n(210),r=n.n(i),c=n(128),s=n.n(c);function l(e){var t=e.children;return o.a.createElement("div",{className:r()(s.a.root)},t)}},215:function(e,t,n){"use strict";var a=n(0),o=n(50);t.a=function(){return Object(a.useContext)(o.a)}},216:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n(219);var a=n(215);function o(e){var t=(Object(a.a)().siteConfig||{}).baseUrl,n=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}},217:function(e,t,n){"use strict";n(24),n(19),n(20);var a=n(0),o=n.n(a),i=n(210),r=n.n(i),c=n(130),s=n.n(c),l=37,p=39;t.a=function(e){var t=e.block,n=e.children,i=e.defaultValue,c=e.values,m=Object(a.useState)(i),u=m[0],d=m[1],b=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:r()("tabs",{"tabs--block":t})},c.map((function(e){var t=e.value,n=e.label;return o.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":u===t,className:r()("tab-item",s.a.tabItem,{"tab-item--active":u===t}),key:t,ref:function(e){return b.push(e)},onKeyDown:function(e){return function(e,t,n){switch(n.keyCode){case p:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(b,e.target,e)},onFocus:function(){return d(t)},onClick:function(){return d(t)}},n)}))),o.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===u}))[0]))}},218:function(e,t,n){"use strict";var a=n(0),o=n.n(a);t.a=function(e){return o.a.createElement("div",null,e.children)}},219:function(e,t,n){"use strict";var a=n(17),o=n(36),i=n(220),r="".startsWith;a(a.P+a.F*n(221)("startsWith"),"String",{startsWith:function(e){var t=i(this,e,"startsWith"),n=o(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),a=String(e);return r?r.call(t,a,n):t.slice(n,n+a.length)===a}})},220:function(e,t,n){var a=n(69),o=n(23);e.exports=function(e,t,n){if(a(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(o(e))}},221:function(e,t,n){var a=n(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[a]=!1,!"/./"[e](t)}catch(o){}}return!0}},227:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(0),o=n.n(a);function i(e){var t=e.src;return o.a.createElement("video",{autoPlay:!0,loop:!0,muted:!0},o.a.createElement("source",{src:t,type:"video/webm"}),"Your browser does not support the video tag.")}}}]);