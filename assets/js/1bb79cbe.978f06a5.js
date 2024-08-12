"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[1298],{4137:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=d(r),m=o,f=c["".concat(l,".").concat(m)]||c[m]||u[m]||a;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[c]="string"==typeof e?e:o,i[1]=p;for(var d=2;d<a;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4884:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>d});var n=r(7462),o=(r(7294),r(4137));const a={title:"Android TV Support"},i=void 0,p={unversionedId:"tutorials/platform/android/android-tv-support",id:"tutorials/platform/android/android-tv-support",title:"Android TV Support",description:"With AIR 28, Android TV support for AIR Android applications comes with more stability and improvements.",source:"@site/docs/tutorials/platform/android/android-tv-support.md",sourceDirName:"tutorials/platform/android",slug:"/tutorials/platform/android/android-tv-support",permalink:"/docs/tutorials/platform/android/android-tv-support",draft:!1,editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/tutorials/platform/android/android-tv-support.md",tags:[],version:"current",frontMatter:{title:"Android TV Support"},sidebar:"mainSidebar",previous:{title:"Overview",permalink:"/docs/tutorials/platform/android/"},next:{title:"Custom Resources",permalink:"/docs/tutorials/platform/android/custom-resources"}},l={},d=[{value:"Example Application Descriptor",id:"example-application-descriptor",level:3}],s={toc:d},c="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"With AIR 28, Android TV support for AIR Android applications comes with more stability and improvements."),(0,o.kt)("p",null,"Developers can develop captive runtime applications that are also compatible with Android TV. Use ",(0,o.kt)("inlineCode",{parentName:"p"},"swf-version")," 31 or greater and namespace 20.0 or greater to access this feature. The two tags mentioned below need to be added to the ",(0,o.kt)("inlineCode",{parentName:"p"},"app.xml")," file to support Android TV applications."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"<supportsAndroidTV></supportsAndroidTV>")),(0,o.kt)("p",{parentName:"li"},"Value for the ",(0,o.kt)("inlineCode",{parentName:"p"},"<supportsAndroidTV>"),' tag can be either "true" or "false". If this tag is not added, then the default value will be "false".'),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<supportsAndroidTV>true</supportsAndroidTV>"),": Application is supported on Android TV and it will reflect on the home screen of Android TV after the installation."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<supportsAndroidTV>false</supportsAndroidTV>"),": Application is not supported on Android TV and it will not be shown on the home screen of the Android TV. However, it will be reflected in the downloaded apps inside Settings of the device."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"<banner></banner>")),(0,o.kt)("p",{parentName:"li"},"This is the tag where the user can give the banner image path. Application Banners represent your app or game on the home screens of TV devices and serve as a way for users to launch the app. The specific requirements for a banner image are 320 x 180 px PNG (xhdpiresource)."),(0,o.kt)("p",{parentName:"li"},"In case the developer does not provide the banner image but enables ",(0,o.kt)("inlineCode",{parentName:"p"},"supportsAndroidTV"),", a default banner image will reflect on the home screen of Android TV."))),(0,o.kt)("p",null,"In order to access new APIs for TV devices, you must create a project or modify an existing project that targets Android 5.0 (API level 21) or higher."),(0,o.kt)("p",null,"Applications can only be packaged with apk captive runtime target for Android TV."),(0,o.kt)("p",null,"Android TV support is available from AIR SDK 20.0 or higher, and so the namespace needs to be added accordingly in ",(0,o.kt)("inlineCode",{parentName:"p"},"app.xml")," file."),(0,o.kt)("h3",{id:"example-application-descriptor"},"Example Application Descriptor"),(0,o.kt)("p",null,"Make the below changes in your application descriptor file parallel to ",(0,o.kt)("inlineCode",{parentName:"p"},"<manifestAdditions>")," tag:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="app.xml"',title:'"app.xml"'},'<android>\n\n    <manifestAdditions><![CDATA[\n    <manifest android:installLocation="auto">\n\n\n    ...\n\n    </manifest>\n    ]]></manifestAdditions>\n\n    <supportsAndroidTV>true</supportsAndroidTV>\n\n    <banner>/path/to/bannerimage_320x180.png</banner>\n\n</android>\n')))}u.isMDXComponent=!0}}]);