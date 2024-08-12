"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[5468],{4137:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=i.createContext({}),p=function(e){var t=i.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(o.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),u=r,m=c["".concat(o,".").concat(u)]||c[u]||h[u]||a;return n?i.createElement(m,s(s({ref:t},d),{},{components:n})):i.createElement(m,s({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[c]="string"==typeof e?e:r,s[1]=l;for(var p=2;p<a;p++)s[p]=n[p];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1006:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var i=n(7462),r=(n(7294),n(4137));const a={title:"Drawing shapes using built-in methods",sidebar_position:5},s=void 0,l={unversionedId:"development/display/using-the-drawing-api/drawing-shapes-using-built-in-methods",id:"development/display/using-the-drawing-api/drawing-shapes-using-built-in-methods",title:"Drawing shapes using built-in methods",description:"For convenience when drawing common shapes such as circles, ellipses, rectangles, and rectangles with rounded corners, ActionScript 3.0 has methods that draw these common shapes for you. These are the drawCircle() , drawEllipse() , drawRect() , and drawRoundRect() methods of the Graphics class. These methods may be used in place of the lineTo() and curveTo() methods. Note, however, that you must still specify line and fill styles before calling these methods.",source:"@site/docs/development/display/using-the-drawing-api/drawing-shapes-using-built-in-methods.md",sourceDirName:"development/display/using-the-drawing-api",slug:"/development/display/using-the-drawing-api/drawing-shapes-using-built-in-methods",permalink:"/docs/development/display/using-the-drawing-api/drawing-shapes-using-built-in-methods",draft:!1,editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/development/display/using-the-drawing-api/drawing-shapes-using-built-in-methods.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Drawing shapes using built-in methods",sidebar_position:5},sidebar:"mainSidebar",previous:{title:"Drawing lines and curves",permalink:"/docs/development/display/using-the-drawing-api/drawing-lines-and-curves"},next:{title:"Creating gradient lines and fills",permalink:"/docs/development/display/using-the-drawing-api/creating-gradient-lines-and-fills"}},o={},p=[],d={toc:p},c="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"For convenience when drawing common shapes such as circles, ellipses, rectangles, and rectangles with rounded corners, ActionScript 3.0 has methods that draw these common shapes for you. These are the ",(0,r.kt)("inlineCode",{parentName:"p"},"drawCircle()")," , ",(0,r.kt)("inlineCode",{parentName:"p"},"drawEllipse()")," , ",(0,r.kt)("inlineCode",{parentName:"p"},"drawRect()")," , and ",(0,r.kt)("inlineCode",{parentName:"p"},"drawRoundRect()")," methods of the Graphics class. These methods may be used in place of the ",(0,r.kt)("inlineCode",{parentName:"p"},"lineTo()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"curveTo()")," methods. Note, however, that you must still specify line and fill styles before calling these methods."),(0,r.kt)("p",null,"The following example recreates the example of drawing red, green, and blue squares with width and height of 100 pixels. This code uses the drawRect() method, and additionally specifies that the fill color has an alpha of 50% (0.5):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-actionscript"},"var squareSize:uint = 100;\nvar square:Shape = new Shape();\nsquare.graphics.beginFill(0xFF0000, 0.5);\nsquare.graphics.drawRect(0, 0, squareSize, squareSize);\nsquare.graphics.beginFill(0x00FF00, 0.5);\nsquare.graphics.drawRect(200, 0, squareSize, squareSize);\nsquare.graphics.beginFill(0x0000FF, 0.5);\nsquare.graphics.drawRect(400, 0, squareSize, squareSize);\nsquare.graphics.endFill();\nthis.addChild(square);\n")),(0,r.kt)("p",null,"In a Sprite or MovieClip object, the drawing content created with the graphics property always appears behind all child display objects that are contained by the object. Also, the ",(0,r.kt)("inlineCode",{parentName:"p"},"graphics")," property content is not a separate display object so it does not appear in the list of a Sprite or MovieClip object\u2019s children. For example, the following Sprite object has a circle drawn with its graphics property, and it has a TextField object in its list of child display objects:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-actionscript"},'var mySprite:Sprite = new Sprite();\nmySprite.graphics.beginFill(0xFFCC00);\nmySprite.graphics.drawCircle(30, 30, 30);\nvar label:TextField = new TextField();\nlabel.width = 200;\nlabel.text = "They call me mellow yellow...";\nlabel.x = 20;\nlabel.y = 20;\nmySprite.addChild(label);\nthis.addChild(mySprite);\n')),(0,r.kt)("p",null,"Note that the TextField appears on top of the circle drawn with the graphics object."))}h.isMDXComponent=!0}}]);