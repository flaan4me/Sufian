"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[748],{4137:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(a),m=i,u=d["".concat(l,".").concat(m)]||d[m]||h[m]||r;return a?n.createElement(u,o(o({ref:t},c),{},{components:a})):n.createElement(u,o({ref:t},c))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4671:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var n=a(7462),i=(a(7294),a(4137));const r={title:"Manipulating size and scaling objects",sidebar_position:4},o=void 0,s={unversionedId:"development/display/display-programming/manipulating-display-objects/manipulating-size-and-scaling-objects",id:"development/display/display-programming/manipulating-display-objects/manipulating-size-and-scaling-objects",title:"Manipulating size and scaling objects",description:"You can measure and manipulate the size of a display object in two ways, using either the dimension properties ( width and height ) or the scale properties ( scaleX and scaleY ).",source:"@site/docs/development/display/display-programming/manipulating-display-objects/manipulating-size-and-scaling-objects.md",sourceDirName:"development/display/display-programming/manipulating-display-objects",slug:"/development/display/display-programming/manipulating-display-objects/manipulating-size-and-scaling-objects",permalink:"/docs/development/display/display-programming/manipulating-display-objects/manipulating-size-and-scaling-objects",draft:!1,editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/development/display/display-programming/manipulating-display-objects/manipulating-size-and-scaling-objects.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Manipulating size and scaling objects",sidebar_position:4},sidebar:"mainSidebar",previous:{title:"Panning and scrolling display objects",permalink:"/docs/development/display/display-programming/manipulating-display-objects/panning-and-scrolling-display-objects"},next:{title:"Controlling distortion when scaling",permalink:"/docs/development/display/display-programming/manipulating-display-objects/controlling-distortion-when-scaling"}},l={},p=[],c={toc:p},d="wrapper";function h(e){let{components:t,...a}=e;return(0,i.kt)(d,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"You can measure and manipulate the size of a display object in two ways, using either the dimension properties ( ",(0,i.kt)("inlineCode",{parentName:"p"},"width")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"height")," ) or the scale properties ( ",(0,i.kt)("inlineCode",{parentName:"p"},"scaleX")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"scaleY")," )."),(0,i.kt)("p",null,"Every display object has a ",(0,i.kt)("inlineCode",{parentName:"p"},"width")," property and a ",(0,i.kt)("inlineCode",{parentName:"p"},"height")," property, which are initially set to the size of the object in pixels. You can read the values of those properties to measure the size of the display object. You can also specify new values to change the size of the object, as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-actionscript"},"// Resize a display object.\nsquare.width = 420;\nsquare.height = 420;\n\n// Determine the radius of a circle display object.\nvar radius:Number = circle.width / 2;\n")),(0,i.kt)("p",null,"Changing the ",(0,i.kt)("inlineCode",{parentName:"p"},"height")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"width")," of a display object causes the object to scale, meaning its contents stretch or squeeze to fit in the new area. If the display object contains only vector shapes, those shapes will be redrawn at the new scale, with no loss in quality. Any bitmap graphic elements in the display object will be scaled rather than redrawn. So, for example, a digital photo whose width and height are increased beyond the actual dimensions of the pixel information in the image will be pixelated, making it look jagged."),(0,i.kt)("p",null,"When you change the ",(0,i.kt)("inlineCode",{parentName:"p"},"width")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"height")," properties of a display object, Flash Player and AIR update the ",(0,i.kt)("inlineCode",{parentName:"p"},"scaleX")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"scaleY")," properties of the object as well."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"TextField objects are an exception to this scaling behavior. Text fields need to resize themselves to accommodate text wrapping and font sizes, so they reset their scaleX or scaleY values to 1 after resizing. However, if you adjust the scaleX or scaleY values of a TextField object, the width and height values change to accommodate the scaling values you provide.")),(0,i.kt)("p",null,"These properties represent the relative size of the display object compared to its original size. The scaleX and scaleY properties use fraction (decimal) values to represent percentage. For example, if a display object\u2019s ",(0,i.kt)("inlineCode",{parentName:"p"},"width")," has been changed so that it\u2019s half as wide as its original size, the object\u2019s ",(0,i.kt)("inlineCode",{parentName:"p"},"scaleX")," property will have the value ",(0,i.kt)("inlineCode",{parentName:"p"},".5")," , meaning 50 percent. If its height has been doubled, its ",(0,i.kt)("inlineCode",{parentName:"p"},"scaleY")," property will have the value ",(0,i.kt)("inlineCode",{parentName:"p"},"2")," , meaning 200 percent."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-actionscript"},"// circle is a display object whose width and height are 150 pixels.\n// At original size, scaleX and scaleY are 1 (100%).\ntrace(circle.scaleX); // output: 1\ntrace(circle.scaleY); // output: 1\n\n// When you change the width and height properties,\n// Flash Player changes the scaleX and scaleY properties accordingly.\ncircle.width = 100;\ncircle.height = 75;\ntrace(circle.scaleX); // output: 0.6622516556291391\ntrace(circle.scaleY); // output: 0.4966887417218543\n")),(0,i.kt)("p",null,"Size changes are not proportional. In other words, if you change the height of a square but not its width , its proportions will no longer be the same, and it will be a rectangle instead of a square. If you want to make relative changes to the size of a display object, you can set the values of the ",(0,i.kt)("inlineCode",{parentName:"p"},"scaleX")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"scaleY")," properties to resize the object, as an alternative to setting the ",(0,i.kt)("inlineCode",{parentName:"p"},"width")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"height")," properties. For example, this code changes the width of the display object named square , and then alters the vertical scale ( ",(0,i.kt)("inlineCode",{parentName:"p"},"scaleY")," ) to match the horizontal scale, so that the size of the square stays proportional."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-actionscript"},"// Change the width directly.\nsquare.width = 150;\n\n// Change the vertical scale to match the horizontal scale,\n// to keep the size proportional.\nsquare.scaleY = square.scaleX;\n")))}h.isMDXComponent=!0}}]);