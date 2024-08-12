"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[7535],{4137:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),d=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=d(e.components);return o.createElement(p.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=d(n),m=r,h=s["".concat(p,".").concat(m)]||s[m]||u[m]||i;return n?o.createElement(h,a(a({ref:t},c),{},{components:n})):o.createElement(h,a({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:r,a[1]=l;for(var d=2;d<i;d++)a[d]=n[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5151:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var o=n(7462),r=(n(7294),n(4137));const i={title:"ADT -launchApp",sidebar_label:"launchApp",sidebar_position:9},a=void 0,l={unversionedId:"building/air-developer-tool/commands/launchApp",id:"building/air-developer-tool/commands/launchApp",title:"ADT -launchApp",description:"The -launchApp command runs an installed app on a device or emulator. The command uses the following syntax:",source:"@site/docs/building/air-developer-tool/commands/launchApp.md",sourceDirName:"building/air-developer-tool/commands",slug:"/building/air-developer-tool/commands/launchApp",permalink:"/docs/building/air-developer-tool/commands/launchApp",draft:!1,editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/building/air-developer-tool/commands/launchApp.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"ADT -launchApp",sidebar_label:"launchApp",sidebar_position:9},sidebar:"mainSidebar",previous:{title:"appVersion",permalink:"/docs/building/air-developer-tool/commands/appVersion"},next:{title:"uninstallApp",permalink:"/docs/building/air-developer-tool/commands/uninstallApp"}},p={},d=[{value:"<code>-platformsdk</code>",id:"-platformsdk",level:3},{value:"<code>-device</code>",id:"-device",level:3},{value:"<code>-appid</code>",id:"-appid",level:3}],c={toc:d},s="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(s,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"-launchApp")," command runs an installed app on a device or emulator. The command uses the following syntax:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"adt -launchApp -platform platformName -platformsdk path_to_sdk -device deviceID -appid applicationID\n-platform The name of the platform of the device. Specify ios or android.\n")),(0,r.kt)("h3",{id:"-platformsdk"},(0,r.kt)("inlineCode",{parentName:"h3"},"-platformsdk")),(0,r.kt)("p",null,"The path to the platform SDK for the target device:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Android - The AIR 2.6+ SDK includes the tools from the Android SDK needed to implement the relevant ADT commands. Only set this value to use a different version of the Android SDK. Also, the platform SDK path does not need to be supplied on the command line if the ",(0,r.kt)("inlineCode",{parentName:"p"},"AIR_ANDROID_SDK_HOME")," environment variable is already set. (If both are set, then the path provided on the command line is used.)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"iOS - The AIR SDK ships with a captive iOS SDK. The ",(0,r.kt)("inlineCode",{parentName:"p"},"-platformsdk")," option lets you package applications with an external SDK so that you are not restricted to using the captive iOS SDK. For example, if you have built an extension with the latest iOS SDK, you can specify that SDK when packaging your application. Additionally, when using ADT with the iOS Simulator, you must always include the ",(0,r.kt)("inlineCode",{parentName:"p"},"-platformsdk")," option, specifying the path to the iOS Simulator SDK."))),(0,r.kt)("h3",{id:"-device"},(0,r.kt)("inlineCode",{parentName:"h3"},"-device")),(0,r.kt)("p",null,"Specify ",(0,r.kt)("inlineCode",{parentName:"p"},"ios_simulator")," or the serial number of the device. The device only needs to be specified when more than one Android device or emulator is attached to your computer and running. If the specified device is not connected, ADT returns exit code 14: Device error. If more than one device or emulator is connected and a device is not specified, ADT returns exit code 2: Usage error."),(0,r.kt)("p",null,"On Android, use the Android ADB tool to list the serial numbers of attached devices and running emulators:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"adb devices\n")),(0,r.kt)("h3",{id:"-appid"},(0,r.kt)("inlineCode",{parentName:"h3"},"-appid")),(0,r.kt)("p",null,"The AIR application ID of the installed application. If no application with the specified ID is installed on the device, then ADT returns exit code 14: Device error."))}u.isMDXComponent=!0}}]);