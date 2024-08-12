"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[6085],{4137:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,s=r(e,["components","mdxType","originalType","parentName"]),u=d(n),k=i,h=u["".concat(p,".").concat(k)]||u[k]||c[k]||o;return n?a.createElement(h,l(l({ref:t},s),{},{components:n})):a.createElement(h,l({ref:t},s))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=k;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r[u]="string"==typeof e?e:i,l[1]=r;for(var d=2;d<o;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},3967:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var a=n(7462),i=(n(7294),n(4137));const o={title:"Packaging Android App Bundles"},l=void 0,r={unversionedId:"tutorials/platform/android/packaging-android-app-bundles",id:"tutorials/platform/android/packaging-android-app-bundles",title:"Packaging Android App Bundles",description:"This is specific for Google Play Publishing",source:"@site/docs/tutorials/platform/android/packaging-android-app-bundles.md",sourceDirName:"tutorials/platform/android",slug:"/tutorials/platform/android/packaging-android-app-bundles",permalink:"/docs/tutorials/platform/android/packaging-android-app-bundles",draft:!1,editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/tutorials/platform/android/packaging-android-app-bundles.md",tags:[],version:"current",frontMatter:{title:"Packaging Android App Bundles"},sidebar:"mainSidebar",previous:{title:"Handling 1024bit Certificates",permalink:"/docs/tutorials/platform/android/handling-1024bit-certificates"},next:{title:"Packaging an IPA",permalink:"/docs/tutorials/platform/ios/packaging-ipa"}},p={},d=[{value:"Packaging",id:"packaging",level:2},{value:"Installing Android SDK",id:"installing-android-sdk",level:3},{value:"Manual Install",id:"manual-install",level:4},{value:"Specify the Android SDK Path",id:"specify-the-android-sdk-path",level:3},{value:"Using the AIR SDK Manager",id:"using-the-air-sdk-manager",level:4},{value:"Using <code>adt.cfg</code>",id:"using-adtcfg",level:4},{value:"Using an environment variable",id:"using-an-environment-variable",level:4},{value:"Using <code>platformsdk</code>",id:"using-platformsdk",level:4},{value:"Creating the AAB",id:"creating-the-aab",level:3},{value:"Using <code>adt</code>",id:"using-adt",level:4},{value:"IDE&#39;s without AAB option",id:"ides-without-aab-option",level:4},{value:"Specifying Certificates",id:"specifying-certificates",level:3},{value:"Signing and Certificates",id:"signing-and-certificates",level:2},{value:"Converting Existing Certificates",id:"converting-existing-certificates",level:3},{value:"Upload Certificate",id:"upload-certificate",level:3},{value:"To create an upload certificate",id:"to-create-an-upload-certificate",level:4},{value:"What to do if you need to change your upload certificate",id:"what-to-do-if-you-need-to-change-your-upload-certificate",level:4},{value:"Testing",id:"testing",level:2},{value:"Creating a <code>keystore.ks</code>",id:"creating-a-keystoreks",level:3}],s={toc:d},u="wrapper";function c(e){let{components:t,...o}=e;return(0,i.kt)(u,(0,a.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"This is specific for Google Play Publishing")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Important: From August 2021, new apps are required to publish with the Android App Bundle on Google Play. New apps larger than 150 MB are now supported by either Play Feature Delivery or Play Asset Delivery.")),(0,i.kt)("p",null,"An Android App Bundle (AAB) is a publishing format that includes all your app\u2019s compiled code and resources, and defers APK generation and signing to Google Play."),(0,i.kt)("p",null,"Google Play uses your app bundle to generate and serve optimized APKs for each device configuration, so only the code and resources that are needed for a specific device are downloaded to run your app. You no longer have to build, sign, and manage multiple APKs to optimize support for different devices, and users get smaller, more-optimized downloads."),(0,i.kt)("p",null,"More information on Android App Bundles ",(0,i.kt)("a",{parentName:"p",href:"https://developer.android.com/guide/app-bundle"},"here"),"."),(0,i.kt)("h2",{id:"packaging"},"Packaging"),(0,i.kt)("p",null,"AIR supports creation of an App Bundle by creating an Android Studio project and using Gradle to build this. ",(0,i.kt)("strong",{parentName:"p"},"It requires an Android SDK to be installed.")," It also needs to have a JDK present and available via the ",(0,i.kt)("inlineCode",{parentName:"p"},"JAVA_HOME")," environment variable."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The creation of an Android App Bundle involves a few steps and can take significantly longer than creating an APK file. We recommend that APK generation is still used during development and testing, and the AAB output can be used when packaging up an application for upload to the Play Store.")),(0,i.kt)("h3",{id:"installing-android-sdk"},"Installing Android SDK"),(0,i.kt)("p",null,"You must download and install the Android SDK to your development machine. The easiest way to do this is to install Android Studio. ",(0,i.kt)("a",{parentName:"p",href:"https://developer.android.com/studio"},"Download"),"."),(0,i.kt)("h4",{id:"manual-install"},"Manual Install"),(0,i.kt)("p",null,"It is possible to install just the Android SDK if you do not want to install Android Studio. You will need to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Download and extract the command line tools: ",(0,i.kt)("a",{parentName:"li",href:"https://developer.android.com/studio#command-tools"},"https://developer.android.com/studio#command-tools")),(0,i.kt)("li",{parentName:"ul"},"Add the extracted folder to your path"),(0,i.kt)("li",{parentName:"ul"},"Run ",(0,i.kt)("inlineCode",{parentName:"li"},"sdkmanager")," to list and install your Android SDK")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Using ",(0,i.kt)("code",null,"sdkmanager")),(0,i.kt)("p",null,(0,i.kt)("p",null,"To list the available packages :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sdkmanager --list\n")),(0,i.kt)("p",null,"Then to install the required sdk, you will want to install the following packages at least, ",(0,i.kt)("inlineCode",{parentName:"p"},"build-tools;XX.X.X"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"platform-tools"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"platforms;android-XX")," and the ",(0,i.kt)("inlineCode",{parentName:"p"},"emulator"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'sdkmanager --install "build-tools;30.0.3"\n                     "platform-tools"\n                     "platforms;android-30"\n                     "emulator"\n')))),(0,i.kt)("h3",{id:"specify-the-android-sdk-path"},"Specify the Android SDK Path"),(0,i.kt)("p",null,"You need to specify the path to your Android SDK in your AIR SDK configuration. There are several methods available to do this."),(0,i.kt)("h4",{id:"using-the-air-sdk-manager"},"Using the AIR SDK Manager"),(0,i.kt)("p",null,"You can use the AIR SDK Manager to set this configuration option. This is the simplest approach and provides a UI to edit your global ",(0,i.kt)("inlineCode",{parentName:"p"},"adt.cfg")," directly."),(0,i.kt)("h4",{id:"using-adtcfg"},"Using ",(0,i.kt)("inlineCode",{parentName:"h4"},"adt.cfg")),(0,i.kt)("p",null,"You can specify the Android SDK in the ",(0,i.kt)("inlineCode",{parentName:"p"},"adt.cfg")," file located at ",(0,i.kt)("inlineCode",{parentName:"p"},"[AIRSDK]/lib/adt.cfg")," and adding the following line:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"AndroidPlatformSDK=/path/to/android/sdk\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"This will need to be updated in every AIR SDK you use.")),(0,i.kt)("h4",{id:"using-an-environment-variable"},"Using an environment variable"),(0,i.kt)("p",null,"You can set the path to the Android SDK by setting an environment variable named ",(0,i.kt)("inlineCode",{parentName:"p"},"AIR_ANDROID_SDK_HOME")," that points to the Android SDK location."),(0,i.kt)("p",null,"This has the advantage of applying the setting to all installs of the AIR SDK."),(0,i.kt)("h4",{id:"using-platformsdk"},"Using ",(0,i.kt)("inlineCode",{parentName:"h4"},"platformsdk")),(0,i.kt)("p",null,"If you use ",(0,i.kt)("inlineCode",{parentName:"p"},"adt")," to package your application you can supply the path to the Android SDK via the ",(0,i.kt)("inlineCode",{parentName:"p"},"-platformsdk")," option:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"adt ... -platformsdk /path/to/android/sdk\n")),(0,i.kt)("h3",{id:"creating-the-aab"},"Creating the AAB"),(0,i.kt)("h4",{id:"using-adt"},"Using ",(0,i.kt)("inlineCode",{parentName:"h4"},"adt")),(0,i.kt)("p",null,"To package an AAB using ",(0,i.kt)("inlineCode",{parentName:"p"},"adt")," simply change the target from ",(0,i.kt)("inlineCode",{parentName:"p"},"apk")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"aab")," :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"adt -package\n    -target aab\n    <signing options>\n    output.aab\n    <app descriptor and files>\n    [-extdir <folder>]\n    -platformsdk <path_to_android_sdk>\n")),(0,i.kt)("p",null,"You can exclude the ",(0,i.kt)("inlineCode",{parentName:"p"},"platformsdk")," option if you are using one of the other approaches above."),(0,i.kt)("h4",{id:"ides-without-aab-option"},"IDE's without AAB option"),(0,i.kt)("p",null,"If you are using an IDE that currently cannot change the output target to ",(0,i.kt)("inlineCode",{parentName:"p"},"aab")," you can force AIR to output an ",(0,i.kt)("inlineCode",{parentName:"p"},"aab")," from the normal ",(0,i.kt)("inlineCode",{parentName:"p"},"apk")," packaging process. This applies to most IDE's currently, including IntelliJ, Animate and FDT."),(0,i.kt)("p",null,"This is done by setting a configuration option in ",(0,i.kt)("inlineCode",{parentName:"p"},"adt.cfg")," (located at ",(0,i.kt)("inlineCode",{parentName:"p"},"[AIRSDK]/lib/adt.cfg"),"):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"CreateAndroidAppBundle=true\n")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"This will force the output to be in the AAB format, however your IDE may still output a file with the extension of ",(0,i.kt)("inlineCode",{parentName:"p"},"apk"),". If this is the case you will need to rename the output from ",(0,i.kt)("inlineCode",{parentName:"p"},"application.apk")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"application.aab"),".")),(0,i.kt)("h3",{id:"specifying-certificates"},"Specifying Certificates"),(0,i.kt)("p",null,"There is no change to how you specify the certificate used to sign the package whether it is an APK or AAB that you are creating. The method you are currently using for producing an APK is the same with AAB."),(0,i.kt)("p",null,"You can continue to use the same application certificate that you created in the past to sign your application, however you may want to see the notes on the ",(0,i.kt)("a",{parentName:"p",href:"#upload-certificate"},"upload certificate")," in the next section."),(0,i.kt)("h2",{id:"signing-and-certificates"},"Signing and Certificates"),(0,i.kt)("p",null,"In the past you were most likely using ",(0,i.kt)("inlineCode",{parentName:"p"},"adt")," to generate a ",(0,i.kt)("inlineCode",{parentName:"p"},"p12")," certificate that you were using to sign your APK for Google Play."),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Example certificate generation"),(0,i.kt)("p",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'adt -certificate    -cn COMPANYNAME\n                    -o "COMPANY LTD"\n                    -validityPeriod 20\n                    -ou AU 2048-RSA\n                    YOUR_CERTIFICATE.p12\n                    PASSWORD\n')))),(0,i.kt)("p",null,"If you are creating a new application you can still use this approach and the follow the directions below to convert it for uploading to the Play Console."),(0,i.kt)("h3",{id:"converting-existing-certificates"},"Converting Existing Certificates"),(0,i.kt)("p",null,"Play App Signing is required for publishing applications using an Android App Bundle."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Allow Google to protect the app signing key for your app and sign each release so Android devices can trust that updates are from you. This is a requirement to publish with the Android App Bundle.")),(0,i.kt)("p",null,"To convert your existing certificate for use with Play App Signing you can use the tool provided by Google to convert and encrypt your certificate file for uploading."),(0,i.kt)("p",null,"Firstly identify the ",(0,i.kt)("strong",{parentName:"p"},"alias")," of your key in your certificate by using ",(0,i.kt)("inlineCode",{parentName:"p"},"keytool"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"keytool -v -list -keystore YOUR_CERTIFICATE.p12\n")),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("code",null,"keytool")," location"),(0,i.kt)("p",null,(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"keytool")," is a key and certificate management utility. "),(0,i.kt)("p",null,"You will find it in ",(0,i.kt)("inlineCode",{parentName:"p"},"$JAVA_HOME/bin/keytool"),"."))),(0,i.kt)("p",null,"You will need to enter the password and then it should output something like the below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Keystore type: JKS\nKeystore provider: SUN\n\nYour keystore contains 1 entry\n\nAlias name: 1\nCreation date: 03/06/2017\n...\n")),(0,i.kt)("p",null,"Take note of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Alias name: "),', in this case it is "1".'),(0,i.kt)("p",null,'Next, start the process of signing up to "Play App Signing" in the Play console for your applilcation and use the ',(0,i.kt)("strong",{parentName:"p"},"Export and Upload a key from java keystore")," method."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Log into the Play console and find the ",(0,i.kt)("strong",{parentName:"li"},"App Integrity")," page for your application:")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(383).Z,width:"700",height:"620"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Select the "Export and upload a key from Java keystore" option:')),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(7297).Z,width:"938",height:"405"})),(0,i.kt)("p",null,"This will give you the option to download the PEPK tool (",(0,i.kt)("inlineCode",{parentName:"p"},"pepk.jar"),") and show you an encryption key to use in the command."),(0,i.kt)("p",null,"Use this as below, replacing the alias with the alias name you got above:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"java -jar pepk.jar  --keystore=YOUR_CERTIFICATE.p12\n                    --alias=1\n                    --output=encrypted_certificate.zip\n                    --encryptionkey=XXXXXXXXX\n")),(0,i.kt)("p",null,"This will create a ",(0,i.kt)("inlineCode",{parentName:"p"},"encrypted_certificate.zip")," file which you can upload to the Play console."),(0,i.kt)("admonition",{title:"1024bit certificates",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"If you are attempting to convert a legacy 1024bit certificate, this process may fail. Have a look at the documentation on ",(0,i.kt)("a",{parentName:"p",href:"/docs/tutorials/platform/android/handling-1024bit-certificates"},"handling 1024bit certificates"),".")),(0,i.kt)("h3",{id:"upload-certificate"},"Upload Certificate"),(0,i.kt)("admonition",{title:"Optional",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Using the upload certificate is optional but recommended by Google. You can continue to use your application certificate to sign your AAB for uploading to the Play console, and generally that will be the easiest approach. ")),(0,i.kt)("p",null,"The upload certificate is the certificate that you will use to sign your AAB for submission to the Play Store (and likely for debugging locally). Once you have completed the process of signing up for Play app signing, the ",(0,i.kt)("strong",{parentName:"p"},"App integrity"),' section will show you details on the certificate that you uploaded as the "App signing key certificate" and also show you the "Upload key certificate" details. '),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If you don't add a separate upload certificate during the Play App Signing setup process then you should continue to use your existing certificate to sign your AAB for submission to the Play Store. You can confirm this by looking in ",(0,i.kt)("strong",{parentName:"p"},"App integrity")," section and comparing the signatures of the upload and application certificates.  ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If you choose to create a new upload certificate then during the Play App Signing setup process you should upload an additional certificate. ",(0,i.kt)("em",{parentName:"p"},"It is important that you do this as part of the migrating process otherwise you will have to contact Google to upgrade the key (see below).")," "),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},'Select "Upload your upload key certificate" in the Play App Signing page and select the ',(0,i.kt)("inlineCode",{parentName:"li"},"pem")," upload certificate file.")))),(0,i.kt)("h4",{id:"to-create-an-upload-certificate"},"To create an upload certificate"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create a RSA 2048 certificate using ",(0,i.kt)("inlineCode",{parentName:"li"},"adt")," (replace fields as required): ")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'adt -certificate \\\n    -cn "common name" \\\n    -validityPeriod 20 \\\n    2048-RSA \\\n    upload_certificate.p12 \\\n    password\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Convert the ",(0,i.kt)("inlineCode",{parentName:"li"},"p12")," to a ",(0,i.kt)("inlineCode",{parentName:"li"},"pem")," file:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"keytool -export -rfc \\\n        -keystore upload_certificate.p12 \\\n        -alias 1 \\\n        -file upload_certificate.pem\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Upload the ",(0,i.kt)("inlineCode",{parentName:"li"},"upload_certificate.pem")," file as your upload certificate.")),(0,i.kt)("h4",{id:"what-to-do-if-you-need-to-change-your-upload-certificate"},"What to do if you need to change your upload certificate"),(0,i.kt)("p",null,'If you have already setup Play App Signing to change the upload key certificate go to the "App integrity" section for your application and follow the process to "Request key upgrade". '),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Open the "App integrity" section for your application;'),(0,i.kt)("li",{parentName:"ul"},'Select "Request key upgrade";'),(0,i.kt)("li",{parentName:"ul"},'Select "I\'ve lost the upload key which I use to sign each release"; '),(0,i.kt)("li",{parentName:"ul"},"Follow the guide to contact support and provide a new certificate;")),(0,i.kt)("h2",{id:"testing"},"Testing"),(0,i.kt)("p",null,"After you build your Android App Bundle, you should test how Google Play uses it to generate APKs and how those APKs behave when deployed to a device. There are two ways you should consider testing your app bundle: locally using the ",(0,i.kt)("inlineCode",{parentName:"p"},"bundletool")," command line tool and through Google Play by uploading your bundle to the Play Console and using a test track. This section explains how to use ",(0,i.kt)("inlineCode",{parentName:"p"},"bundletool")," to test your app bundle locally."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"If you haven't already done so, install bundletool using brew (",(0,i.kt)("inlineCode",{parentName:"p"},"brew install bundletool"),") or download bundletool from the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/google/bundletool/releases"},"GitHub repository"),"."),(0,i.kt)("p",{parentName:"admonition"},"In all the examples below ",(0,i.kt)("inlineCode",{parentName:"p"},"bundletool")," can be replaced with ",(0,i.kt)("inlineCode",{parentName:"p"},"java -jar bundletool.jar")," if you are using the jar from the repository directly.")),(0,i.kt)("p",null,"The bundletool generates an ",(0,i.kt)("inlineCode",{parentName:"p"},"apks")," from your app bundle, this is a container called an APK set archive, which uses the ",(0,i.kt)("inlineCode",{parentName:"p"},"apks")," file extension. To generate an APK set for all device configurations your app supports from your app bundle, use the bundletool build-apks command, as shown below."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"bundletool build-apks --bundle=my_app.aab --output=my_app.apks\n")),(0,i.kt)("p",null,"If you want to deploy to a device, you need to also include your app\u2019s signing information and add the ",(0,i.kt)("inlineCode",{parentName:"p"},"--connected-device")," option to specify the particular APK to build:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"bundletool build-apks\n    --bundle=my_app.aab\n    --output=my_app.apks\n    --connected-device\n    --ks=YOUR_KEYSTORE.ks\n    --ks-pass=pass:PASSWORD\n    --ks-key-alias=ALIAS\n")),(0,i.kt)("p",null,"(See the section below to ",(0,i.kt)("a",{parentName:"p",href:"#creating-a-keystoreks"},"create a ",(0,i.kt)("inlineCode",{parentName:"a"},"keystore.ks")),")"),(0,i.kt)("p",null,"Then to install the app to the connected device:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"bundletool install-apks --apks=my_app.apks\n")),(0,i.kt)("p",null,"More information on the bundletool can be found ",(0,i.kt)("a",{parentName:"p",href:"https://developer.android.com/studio/command-line/bundletool"},"here")),(0,i.kt)("h3",{id:"creating-a-keystoreks"},"Creating a ",(0,i.kt)("inlineCode",{parentName:"h3"},"keystore.ks")),(0,i.kt)("p",null,"You can create a keystore for use in the bundletool from your existing p12 file using the following command."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"keytool -importkeystore\n        -srckeystore YOUR_CERTIFICATE.p12\n        -srcstoretype pkcs12\n        -srcalias 1\n        -destkeystore YOUR_KEYSTORE.ks\n        -deststoretype jks\n        -destalias ALIAS\n")),(0,i.kt)("p",null,"You will need to set the ",(0,i.kt)("inlineCode",{parentName:"p"},"srcalias")," to match the one from your certificate (see above for getting this information) and then set a new ",(0,i.kt)("inlineCode",{parentName:"p"},"ALIAS")," which you will pass to the bundle tool."),(0,i.kt)("p",null,"This will ask for a password for the new keystore and for the password for your existing certificate."))}c.isMDXComponent=!0},7297:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/playappsigning_export_certificate-84bac8237b5f1fea053392d680867fd8.png"},383:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/playappsigning_setup-253b32881b336d21775cfd5a834c8095.png"}}]);