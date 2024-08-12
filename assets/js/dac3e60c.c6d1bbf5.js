"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[4255],{4137:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=i.createContext({}),d=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=d(e.components);return i.createElement(s.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(t),m=r,g=c["".concat(s,".").concat(m)]||c[m]||u[m]||o;return t?i.createElement(g,a(a({ref:n},p),{},{components:t})):i.createElement(g,a({ref:n},p))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:r,a[1]=l;for(var d=2;d<o;d++)a[d]=t[d];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5571:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var i=t(7462),r=(t(7294),t(4137));const o={title:"ADT -sign",sidebar_label:"sign",sidebar_position:3},a=void 0,l={unversionedId:"building/air-developer-tool/commands/sign",id:"building/air-developer-tool/commands/sign",title:"ADT -sign",description:"The -sign command signs AIRI and ANE files.",source:"@site/docs/building/air-developer-tool/commands/sign.md",sourceDirName:"building/air-developer-tool/commands",slug:"/building/air-developer-tool/commands/sign",permalink:"/docs/building/air-developer-tool/commands/sign",draft:!1,editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/building/air-developer-tool/commands/sign.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"ADT -sign",sidebar_label:"sign",sidebar_position:3},sidebar:"mainSidebar",previous:{title:"prepare",permalink:"/docs/building/air-developer-tool/commands/prepare"},next:{title:"migrate",permalink:"/docs/building/air-developer-tool/commands/migrate"}},s={},d=[{value:"<code>AIR_SIGNING_OPTIONS</code>",id:"air_signing_options",level:3},{value:"<code>input</code>",id:"input",level:3},{value:"<code>output</code>",id:"output",level:3}],p={toc:d},c="wrapper";function u(e){let{components:n,...t}=e;return(0,r.kt)(c,(0,i.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"-sign")," command signs AIRI and ANE files."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"-sign")," command uses the following syntax:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"adt -sign AIR_SIGNING_OPTIONS input output\n")),(0,r.kt)("h3",{id:"air_signing_options"},(0,r.kt)("inlineCode",{parentName:"h3"},"AIR_SIGNING_OPTIONS")),(0,r.kt)("p",null,"The AIR signing options identify the certificate used to sign a package file. The signing options are fully described in ",(0,r.kt)("a",{parentName:"p",href:"/docs/building/air-developer-tool/option-sets/code-signing-options"},"ADT code signing options"),"."),(0,r.kt)("h3",{id:"input"},(0,r.kt)("inlineCode",{parentName:"h3"},"input")),(0,r.kt)("p",null,"The name of the AIRI or ANE file to sign."),(0,r.kt)("h3",{id:"output"},(0,r.kt)("inlineCode",{parentName:"h3"},"output")),(0,r.kt)("p",null,"The name of the signed package to create."),(0,r.kt)("p",null,"If an ANE file is already signed, the old signature is discarded. (AIR files cannot be resigned \u2014 to use a new signature for an application update, use the ",(0,r.kt)("a",{parentName:"p",href:"/docs/building/air-developer-tool/commands/migrate"},(0,r.kt)("inlineCode",{parentName:"a"},"-migrate"))," command.)"))}u.isMDXComponent=!0}}]);