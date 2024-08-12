"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[4118],{4137:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>u});var n=i(7294);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,o=function(e,t){if(null==e)return{};var i,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var d=n.createContext({}),s=function(e){var t=n.useContext(d),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},p=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var i=e.components,o=e.mdxType,r=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(i),h=o,u=c["".concat(d,".").concat(h)]||c[h]||f[h]||r;return i?n.createElement(u,a(a({ref:t},p),{},{components:i})):n.createElement(u,a({ref:t},p))}));function u(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=i.length,a=new Array(r);a[0]=h;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[c]="string"==typeof e?e:o,a[1]=l;for(var s=2;s<r;s++)a[s]=i[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,i)}h.displayName="MDXCreateElement"},6290:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>f,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var n=i(7462),o=(i(7294),i(4137));const r={title:"ADT File and Path options",sidebar_label:"File and path",sidebar_position:2},a=void 0,l={unversionedId:"building/air-developer-tool/option-sets/file-and-path-options",id:"building/air-developer-tool/option-sets/file-and-path-options",title:"ADT File and Path options",description:"The file and path options specify all the files that are included in the package. The file and path options use the following syntax:",source:"@site/docs/building/air-developer-tool/option-sets/file-and-path-options.md",sourceDirName:"building/air-developer-tool/option-sets",slug:"/building/air-developer-tool/option-sets/file-and-path-options",permalink:"/docs/building/air-developer-tool/option-sets/file-and-path-options",draft:!1,editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/building/air-developer-tool/option-sets/file-and-path-options.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"ADT File and Path options",sidebar_label:"File and path",sidebar_position:2},sidebar:"mainSidebar",previous:{title:"Code signing",permalink:"/docs/building/air-developer-tool/option-sets/code-signing-options"},next:{title:"Debugger connection",permalink:"/docs/building/air-developer-tool/option-sets/debugger-connection-options"}},d={},s=[{value:"<code>files_and_dirs</code>",id:"files_and_dirs",level:3},{value:"<code>-C dir files_and_dirs</code>",id:"-c-dir-files_and_dirs",level:3},{value:"<code>-e file_or_dir dir</code>",id:"-e-file_or_dir-dir",level:3},{value:"<code>-extdir dir</code>",id:"-extdir-dir",level:3}],p={toc:s},c="wrapper";function f(e){let{components:t,...i}=e;return(0,o.kt)(c,(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The file and path options specify all the files that are included in the package. The file and path options use the following syntax:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"files_and_dirs -C dir files_and_dirs -e file_or_dir dir -extdir dir\n")),(0,o.kt)("h3",{id:"files_and_dirs"},(0,o.kt)("inlineCode",{parentName:"h3"},"files_and_dirs")),(0,o.kt)("p",null,"The files and directories to package in the AIR file. Any number of files and directories can be specified, delimited by whitespace. If you list a directory, all files and subdirectories within, except hidden files, are added to the package. (In addition, if the application descriptor file is specified, either directly, or through wildcard or directory expansion, it is ignored and not added to the package a second time.) Files and directories specified must be in the current directory or one of its subdirectories. Use the -C option to change the current directory."),(0,o.kt)("admonition",{title:"Important",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Wild cards cannot be used in the ",(0,o.kt)("inlineCode",{parentName:"p"},"file_or_dir")," arguments following the ",(0,o.kt)("inlineCode",{parentName:"p"},"\u2013C"),' option. (Command shells expand the wildcards before passing the arguments to ADT, which causes ADT to look for files in the wrong location.) You can, however, still use the dot character, ".", to stand for the current directory. For example: ',(0,o.kt)("inlineCode",{parentName:"p"},"-C assets .")," copies everything in the ",(0,o.kt)("inlineCode",{parentName:"p"},"assets")," directory, including any subdirectories, to the root level of the application package.")),(0,o.kt)("h3",{id:"-c-dir-files_and_dirs"},(0,o.kt)("inlineCode",{parentName:"h3"},"-C dir files_and_dirs")),(0,o.kt)("p",null,"Changes the working directory to the value of ",(0,o.kt)("inlineCode",{parentName:"p"},"dir")," before processing subsequent files and directories added to the application package (specified in ",(0,o.kt)("inlineCode",{parentName:"p"},"files_and_dirs"),"). The files or directories are added to the root of the application package. The ",(0,o.kt)("inlineCode",{parentName:"p"},"\u2013C")," option can be used any number of times to include files from multiple points in the file system. If a relative path is specified for ",(0,o.kt)("inlineCode",{parentName:"p"},"dir"),", the path is always resolved from the original working directory."),(0,o.kt)("p",null,"As ADT processes the files and directories included in the package, the relative paths between the current directory and the target files are stored. These paths are expanded into the application directory structure when the package is installed. Therefore, specifying ",(0,o.kt)("inlineCode",{parentName:"p"},"-C release/bin lib/feature.swf")," places the file ",(0,o.kt)("inlineCode",{parentName:"p"},"release/bin/lib/feature.swf")," in the lib subdirectory of the root application folder."),(0,o.kt)("h3",{id:"-e-file_or_dir-dir"},(0,o.kt)("inlineCode",{parentName:"h3"},"-e file_or_dir dir")),(0,o.kt)("p",null,"Places the file or directory into the specified package directory. This option cannot be used when packaging an ANE file."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"<content>")," element of the application descriptor file must specify the final location of the main application file within the application package directory tree.")),(0,o.kt)("h3",{id:"-extdir-dir"},(0,o.kt)("inlineCode",{parentName:"h3"},"-extdir dir")),(0,o.kt)("p",null,"The value of ",(0,o.kt)("inlineCode",{parentName:"p"},"dir")," is the name of a directory to search for native extensions (ANE files). Specify either an absolute path, or a path relative to the current directory. You can specify the ",(0,o.kt)("inlineCode",{parentName:"p"},"-extdir")," option multiple times."),(0,o.kt)("p",null,"The specified directory contains ANE files for native extensions that the application uses. Each ANE file in this directory has the ",(0,o.kt)("inlineCode",{parentName:"p"},".ane")," filename extension. However, the filename before the ",(0,o.kt)("inlineCode",{parentName:"p"},".ane")," filename extension does not have to match the value of the ",(0,o.kt)("inlineCode",{parentName:"p"},"extensionID")," element of the application descriptor file."),(0,o.kt)("p",null,"For example, if you use ",(0,o.kt)("inlineCode",{parentName:"p"},"-extdir ./extensions"),", the directory extensions can look like the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"extensions/\nextension1.ane\nextension2.ane\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The use of the ",(0,o.kt)("inlineCode",{parentName:"p"},"-extdir")," option is different for the ADT tool and the ADL tool. In ADL, the option specifies a directory that contains subdirectories, each containing an unpackaged ANE file. In ADT, the options specifies a directory that contains ANE files.")))}f.isMDXComponent=!0}}]);