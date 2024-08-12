"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[2012],{4137:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),s=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(a),f=r,m=p["".concat(u,".").concat(f)]||p[f]||d[f]||i;return a?n.createElement(m,o(o({ref:t},c),{},{components:a})):n.createElement(m,o({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},451:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=a(7462),r=(a(7294),a(4137)),i=a(3992),o=a(425);const l={title:"Handling 1024bit Certificates"},u=void 0,s={unversionedId:"tutorials/platform/android/handling-1024bit-certificates",id:"tutorials/platform/android/handling-1024bit-certificates",title:"Handling 1024bit Certificates",description:"In the past you may have been using a 1024bit certificate for signing your application. With the latest Java releases 1024bit certificates are no longer supported and as creating Android applications requires a newer version of Java you will need to update to a 2048bit certificate (or better).",source:"@site/docs/tutorials/platform/android/handling-1024bit-certificates.md",sourceDirName:"tutorials/platform/android",slug:"/tutorials/platform/android/handling-1024bit-certificates",permalink:"/docs/tutorials/platform/android/handling-1024bit-certificates",draft:!1,editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/tutorials/platform/android/handling-1024bit-certificates.md",tags:[],version:"current",frontMatter:{title:"Handling 1024bit Certificates"},sidebar:"mainSidebar",previous:{title:"Custom Resources",permalink:"/docs/tutorials/platform/android/custom-resources"},next:{title:"Packaging Android App Bundles",permalink:"/docs/tutorials/platform/android/packaging-android-app-bundles"}},c={},p=[{value:"Play App Signing",id:"play-app-signing",level:2},{value:"Convert existing certificate",id:"convert-existing-certificate",level:3},{value:"Create an upload certificate",id:"create-an-upload-certificate",level:3}],d={toc:p},f="wrapper";function m(e){let{components:t,...l}=e;return(0,r.kt)(f,(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In the past you may have been using a 1024bit certificate for signing your application. With the latest Java releases 1024bit certificates are no longer supported and as creating Android applications requires a newer version of Java you will need to update to a 2048bit certificate (or better)."),(0,r.kt)("p",null,"To generate a new certificate you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"adt")," :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"adt -certificate -cn ORG_NAME -validityPeriod 20 2048-RSA certificate.p12 PASSWORD\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The latest version of Java that supports 1024 bit certificates is 1.8.0_112.")),(0,r.kt)("p",null,"An issue arises however with platforms that don't allow certificate changes, particularly with the Google Play Store. "),(0,r.kt)("p",null,'In this case the easiest approach is to update to Play App Signing and upload the old certificate for Google to automatically sign releases. You will create a new 2048 "upload certificate" which you will use for testing and uploading.'),(0,r.kt)("h2",{id:"play-app-signing"},"Play App Signing"),(0,r.kt)("h3",{id:"convert-existing-certificate"},"Convert existing certificate"),(0,r.kt)("p",null,"Firstly go through the process to ",(0,r.kt)("a",{parentName:"p",href:"packaging-android-app-bundles#converting-existing-certificates"},"convert your existing certificates"),', including setting up "Play App Signing". When you reach the point of having to "Export and upload a key from Java keystore" it will likely fail as you cannot read your existing certificate using the latest Java.'),(0,r.kt)("p",null,"You will need to ensure you have version 1.8.0_112 of the Java development kit installed on your machine, along with the current version you are using for AIR. You can find versions of the JDK ",(0,r.kt)("a",{parentName:"p",href:"https://www.oracle.com/au/java/technologies/javase/javase8-archive-downloads.html"},"here"),"."),(0,r.kt)("p",null,"Download the ",(0,r.kt)("a",{target:"_blank",href:a(8540).Z},(0,r.kt)("code",null,"pepk.jar")," tool")," java application and extract it to a known location. (This is an older version of the Google supplied tool that still supports java 1.8)."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Change Java Environment")),(0,r.kt)("p",null,"You will need to temporarily change your java version to use the version 1.8 you just installed:"),(0,r.kt)(i.Z,{groupId:"operating-system",defaultValue:"macos",values:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"macos",mdxType:"TabItem"},(0,r.kt)("p",null,"Open your terminal application, and set the environment to use Java 1.8:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"export JAVA_HOME=`/usr/libexec/java_home -v1.8.0_112`\nexport JAVACMD=${JAVA_HOME}/bin/java\n"))),(0,r.kt)(o.Z,{value:"windows",mdxType:"TabItem"},(0,r.kt)("p",null,"There are different ways to temporarily change your java version depending on the terminal app you are using but the simplest way is to just change the global JAVA_HOME environment variable and then change it back when you create your upload certificate."))),(0,r.kt)("p",null,"You can confirm by running ",(0,r.kt)("inlineCode",{parentName:"p"},"java -version")," and you should see ",(0,r.kt)("inlineCode",{parentName:"p"},"1.8.0_112"),"."),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Get the certificate alias")),(0,r.kt)("p",null,"Get the alias (generally this value is ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," but you should confirm):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"keytool -v -list -keystore Certificate.p12\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Encrypt for uploading")),(0,r.kt)("p",null,'Then run the tool (the encryption key should be listed on the play store page "Export and upload a key from Java keystore"):'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"java -jar pepk.jar  \\\n  --keystore=Certificate.p12 --alias=1 \\\n  --output=encrypted_certificate.zip \\\n  --encryptionkey=XXXX\n")),(0,r.kt)("p",null,"This will create a ",(0,r.kt)("inlineCode",{parentName:"p"},"encrypted_certificate.zip")," file which you can upload to the Play console."),(0,r.kt)("h3",{id:"create-an-upload-certificate"},"Create an upload certificate"),(0,r.kt)("admonition",{title:"Important",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Do not skip this step when converting an old certificate. It is listed as optional in the documentation for Play App Signing but in this case it is required.")),(0,r.kt)("p",null,"Next you will need to create an upload certificate. This is the certificate you will use to sign your application with AIR for testing and uploading. This should be a newer 2048 bit certificate. "),(0,r.kt)("p",null,"Close the terminal that you temporarily changed the java version in the previous section and open a new terminal window, confirming your java version has returned to the latest. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create a RSA 2048 certificate using ",(0,r.kt)("inlineCode",{parentName:"li"},"adt")," (replace fields as required): ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'adt -certificate \\\n    -cn "common name" \\\n    -validityPeriod 20 \\\n    2048-RSA \\\n    upload_certificate.p12 \\\n    PASSWORD\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Convert the ",(0,r.kt)("inlineCode",{parentName:"li"},"p12")," to a ",(0,r.kt)("inlineCode",{parentName:"li"},"pem")," file:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"keytool -export -rfc \\\n        -keystore upload_certificate.p12 \\\n        -alias 1 \\\n        -file upload_certificate.pem\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Upload the ",(0,r.kt)("inlineCode",{parentName:"li"},"upload_certificate.pem")," file as your upload certificate.")),(0,r.kt)("p",null,"More details on the upload certificate can be found ",(0,r.kt)("a",{parentName:"p",href:"packaging-android-app-bundles#upload-certificate"},"here")," including how to change an upload certificate if you didn't create one when setting up Play App Signing."),(0,r.kt)("admonition",{title:"Debugging Services",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Many Android services are tied to the signature of your application (you may have entered a fingerprint of your certificate when setting up a service). Services such as Firebase and Facebook use this signature to verify the request is coming from the correct application. "),(0,r.kt)("p",{parentName:"admonition"},"When you are testing with the new upload certificate you may find some of the services are failing due to the signature mismatch. This won't affect your live application as Google is signing it with your original certificate, however to aid your testing it is recommended that you add an additional fingerprint for your new upload certificate to your service configuration.")))}m.isMDXComponent=!0},425:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),r=a(6010);const i={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,o),hidden:a},t)}},3992:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(7462),r=a(7294),i=a(6010),o=a(2957),l=a(6550),u=a(5238),s=a(3609),c=a(2560);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function f(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const n=(0,l.k6)(),i=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,u._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(n.location.search);t.set(i,e),n.replace({...n.location,search:t.toString()})}),[i,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,i=d(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[u,s]=m({queryString:a,groupId:n}),[p,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,i]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&i.set(e)}),[a,i])]}({groupId:n}),g=(()=>{const e=u??p;return f({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{g&&l(g)}),[g]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!f({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),s(e),h(e)}),[s,h,i]),tabValues:i}}var g=a(1048);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:a,selectedValue:l,selectValue:u,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),d=e=>{const t=e.currentTarget,a=c.indexOf(t),n=s[a].value;n!==l&&(p(t),u(n))},f=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},t)},s.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:f,onClick:d},o,{className:(0,i.Z)("tabs__item",y.tabItem,o?.className,{"tabs__item--active":l===t})}),a??t)})))}function b(e){let{lazy:t,children:a,selectedValue:n}=e;const i=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function k(e){const t=h(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",y.tabList)},r.createElement(v,(0,n.Z)({},e,t)),r.createElement(b,(0,n.Z)({},e,t)))}function w(e){const t=(0,g.Z)();return r.createElement(k,(0,n.Z)({key:String(t)},e))}},8540:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/pepk.jar-313960c1d1afc1f93eb98fa5144f3fa0.zip"}}]);