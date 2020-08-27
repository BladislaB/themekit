(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{65:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return m}));var a=n(2),r=n(6),o=(n(0),n(90)),l=n(96),c=n(97),i={id:"token",title:"Token",sidebar_label:"Token"},s={unversionedId:"token",id:"token",isDocsHomePage:!1,title:"Token",description:"Design token is an entity that allows you to capture low-level values and then use them to create styles for your product with cross-platform support, since the token is not tied to a specific language or platform.",source:"@site/docs/token.mdx",permalink:"/themekit/docs/token",editUrl:"https://github.com/yarastqt/themekit/edit/master/website/docs/token.mdx",sidebar_label:"Token",sidebar:"sidebar",previous:{title:"Installation",permalink:"/themekit/docs/"},next:{title:"Theme",permalink:"/themekit/docs/theme"}},u=[{value:"Aliases",id:"aliases",children:[]},{value:"Meta",id:"meta",children:[]},{value:"Nesting",id:"nesting",children:[]},{value:"Interface",id:"interface",children:[]}],b={rightToc:u};function m(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Design token")," is an entity that allows you to capture low-level values and then use them to create styles for your product with cross-platform support, since the token is not tied to a specific language or platform."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"A themekit supports write tokens in ",Object(o.b)("strong",{parentName:"p"},"json")," or ",Object(o.b)("strong",{parentName:"p"},"yaml")," format."))),Object(o.b)("h2",{id:"aliases"},"Aliases"),Object(o.b)("p",null,"Token supports aliases for values, it's helpful for using primitives in composed tokens."),Object(o.b)(l.a,{defaultValue:"yml",values:[{label:"yaml",value:"yml"},{label:"json",value:"json"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"yml",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),'colorPrimary:\n  value: "#000"\n\nbuttonColor:\n  value: "{color.primary.value}"\n'))),Object(o.b)(c.a,{value:"json",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "colorPrimary": {\n    "value": "#000"\n  },\n  "buttonColor": {\n    "value": "{color.primary.value}"\n  }\n}\n')))),Object(o.b)("h2",{id:"meta"},"Meta"),Object(o.b)("p",null,"Token can have meta props, like comment for documentation or group for using in filter."),Object(o.b)(l.a,{defaultValue:"yml",values:[{label:"yaml",value:"yml"},{label:"json",value:"json"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"yml",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),'colorPrimary:\n  value: "#000"\n  comment: "Project primary color"\n\nbuttonColor:\n  value: "{color.primary.value}"\n  group: "components"\n'))),Object(o.b)(c.a,{value:"json",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "colorPrimary": {\n    "value": "#000",\n    "comment": "Project primary color"\n  },\n  "buttonColor": {\n    "value": "{color.primary.value}",\n    "group": "components"\n  }\n}\n')))),Object(o.b)("h2",{id:"nesting"},"Nesting"),Object(o.b)("p",null,"Token can be nested for creating hierarchical structure."),Object(o.b)(l.a,{defaultValue:"yml",values:[{label:"yaml",value:"yml"},{label:"json",value:"json"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"yml",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),'color:\n  primary:\n    value: "#000"\n\nbutton:\n  color:\n    value: "{color.primary.value}"\n'))),Object(o.b)(c.a,{value:"json",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "color": {\n    "primary": {\n      "value": "#000"\n    }\n  },\n  "button": {\n    "color": {\n      "value": "{color.primary.value}"\n    }\n  }\n}\n')))),Object(o.b)("h2",{id:"interface"},"Interface"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"{\n  /**\n   * Token value\n   */\n  value: string\n  /**\n   * Token comment\n   */\n  comment?: string\n}\n")))}m.isMDXComponent=!0},90:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),b=u(n),p=a,d=b["".concat(l,".").concat(p)]||b[p]||m[p]||o;return n?r.a.createElement(d,c(c({ref:t},s),{},{components:n})):r.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=p;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var s=2;s<o;s++)l[s]=n[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},91:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},93:function(e,t,n){"use strict";var a=n(0);const r=Object(a.createContext)(void 0);t.a=r},94:function(e,t,n){"use strict";var a=n(0),r=n(93);t.a=function(){const e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},96:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(94),l=n(91),c=n(47),i=n.n(c);const s=37,u=39;t.a=function(e){const{block:t,children:n,defaultValue:c,values:b,groupId:m}=e,{tabGroupChoices:p,setTabGroupChoices:d}=Object(o.a)(),[f,v]=Object(a.useState)(c),[y,j]=Object(a.useState)(!1);if(null!=m){const e=p[m];null!=e&&e!==f&&b.some(t=>t.value===e)&&v(e)}const O=e=>{v(e),null!=m&&d(m,e)},g=[],h=e=>{e.metaKey||e.altKey||e.ctrlKey||j(!0)},w=()=>{j(!1)};return Object(a.useEffect)(()=>{window.addEventListener("keydown",h),window.addEventListener("mousedown",w)},[]),r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":t})},b.map(({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":f===e,className:Object(l.a)("tabs__item",i.a.tabItem,{"tabs__item--active":f===e}),style:y?{}:{outline:"none"},key:e,ref:e=>g.push(e),onKeyDown:e=>{((e,t,n)=>{switch(n.keyCode){case u:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case s:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(g,e.target,e),h(e)},onFocus:()=>O(e),onClick:()=>{O(e),j(!1)},onPointerDown:()=>j(!1)},t))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter(e=>e.props.value===f)[0]))}},97:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("div",null,e.children)}}}]);