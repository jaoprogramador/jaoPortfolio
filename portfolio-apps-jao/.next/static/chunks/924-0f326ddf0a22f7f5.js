"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[924],{81353:function(e,t,n){n.d(t,{E:function(){return s}});var r=n(10990),l=n(25317);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}var s=function(e,t,n){return r.ZP.fromTo(e,c({opacity:0},t),c({opacity:1},n,{stagger:.2,ease:l.Aq.easeOut}))}},77462:function(e,t,n){var r=n(34051),l=n.n(r),a=n(85893),c=n(67294),s=n(25542),i=n(9198),o=n.n(i),u=n(93463),d=n(82010);n(95828);function f(e,t,n,r,l,a,c){try{var s=e[a](c),i=s.value}catch(o){return void n(o)}s.done?t(i):Promise.resolve(i).then(r,l)}function x(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){x(e,t,n[t])}))}return e}t.Z=function(e){var t=e.post,n=e.close,r=(e.refresh,(0,d.F)().theme),i=(0,c.useState)("BLOGDETAILS"),x=i[0],p=i[1],h=(0,c.useState)(t.content),b=h[0],v=h[1],j=(0,c.useState)({date:t.date,title:t.title,tagline:t.tagline,preview:t.preview,image:t.image}),g=j[0],y=j[1],w=function(){var e,t=(e=l().mark((function e(){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.next=5;break;case 3:e.next=6;break;case 5:alert("This thing only works in development mode.");case 6:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,l){var a=e.apply(t,n);function c(e){f(a,r,l,c,s,"next",e)}function s(e){f(a,r,l,c,s,"throw",e)}c(void 0)}))});return function(){return t.apply(this,arguments)}}();return(0,a.jsx)("div",{className:"fixed z-10 w-screen h-screen overflow-auto top-0 flex flex-col items-center ".concat("dark"===r?"bg-black":"bg-white"),children:(0,a.jsxs)("div",{className:"container my-20",children:[(0,a.jsx)("div",{className:"mt-10",children:(0,a.jsxs)("div",{className:"z-10 sticky top-12",children:[(0,a.jsxs)("div",{className:"flex items-center justify-between",children:[(0,a.jsx)("h1",{className:"text-4xl",children:g.title}),(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)(s.Z,{onClick:w,type:"primary",children:"Save"}),(0,a.jsx)(s.Z,{onClick:n,children:"Close"})]})]}),(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)(s.Z,{onClick:function(){return p("BLOGDETAILS")},type:"BLOGDETAILS"===x&&"primary",children:"Blog Details"}),(0,a.jsx)(s.Z,{onClick:function(){return p("CONTENT")},type:"CONTENT"===x&&"primary",children:"Content"})]})]})}),"BLOGDETAILS"===x&&(0,a.jsxs)("div",{className:"mt-10",children:[(0,a.jsxs)("div",{className:"mt-5 flex flex-col items-center",children:[(0,a.jsx)("label",{className:"w-full text-sx opacity-50",children:"Date"}),(0,a.jsx)(o(),{selected:new Date(g.date),className:"w-full mt-2 p-4 hover:border-blue-400 rounded-md shadow-lg border-2",onChange:function(e){y(m({},g,{date:e.toISOString()}))}})]}),(0,a.jsxs)("div",{className:"mt-5 flex flex-col items-center",children:[(0,a.jsx)("label",{className:"w-full text-sx opacity-50",children:"Title"}),(0,a.jsx)("input",{value:g.title,onChange:function(e){return y(m({},g,{title:e.target.value}))},className:"w-full mt-2 p-4 hover:border-blue-400 rounded-md shadow-lg border-2",type:"text"})]}),(0,a.jsxs)("div",{className:"mt-5 flex flex-col items-center",children:[(0,a.jsx)("label",{className:"w-full text-sx opacity-50",children:"Tagline"}),(0,a.jsx)("input",{value:g.tagline,onChange:function(e){return y(m({},g,{tagline:e.target.value}))},className:"w-full mt-2 p-4 hover:border-blue-400 rounded-md shadow-lg border-2",type:"text"})]}),(0,a.jsxs)("div",{className:"mt-5 flex flex-col items-center",children:[(0,a.jsx)("label",{className:"w-full text-sx opacity-50",children:"preview (SEO)"}),(0,a.jsx)("textarea",{value:g.preview,onChange:function(e){return y(m({},g,{preview:e.target.value}))},className:"w-full mt-2 p-4 hover:border-blue-400 rounded-md shadow-lg border-2",type:"text"})]}),(0,a.jsxs)("div",{className:"mt-5 flex flex-col items-center",children:[(0,a.jsx)("label",{className:"w-full text-sx opacity-50",children:"Image"}),(0,a.jsx)("input",{value:g.image,onChange:function(e){return y(m({},g,{image:e.target.value}))},className:"w-full mt-2 p-4 hover:border-blue-400 rounded-md shadow-lg border-2",type:"text"})]})]}),"CONTENT"===x&&(0,a.jsx)("div",{className:"mt-10",children:(0,a.jsxs)("div",{className:"flex flex-col items-center",children:[(0,a.jsx)("label",{className:"w-full text-sx opacity-50",children:"Content"}),(0,a.jsx)(u.Z,{className:"w-full h-auto mt-5 p-4 border hover:border-blue-400 rounded-xl shadow-xl",value:b,onChange:function(e){return v(e.target.value)}})]})})]})})}},89183:function(e,t,n){var r=n(85893),l=(n(67294),n(31758)),a=n(77205),c=n(84283);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){s(e,t,n[t])}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u={code:function(e){e.node;var t=e.inline,n=e.className,l=e.children,s=o(e,["node","inline","className","children"]),u=/language-(\w+)/.exec(n||"");return!t&&u?(0,r.jsx)(a.Z,i({style:c.cL,language:u[1],PreTag:"div"},s,{children:String(l).replace(/\n$/,"")})):(0,r.jsx)("code",i({className:n},s,{children:l}))}};t.Z=function(e){var t=e.content;return(0,r.jsx)(l.D,{components:u,className:"markdown-class",children:t})}},90003:function(e,t,n){var r=n(85893),l=(n(67294),n(96420)),a=n(41664),c=n.n(a),s=n(25542);t.Z=function(e){e=null!==e?e:function(e){throw e}(new TypeError("Cannot destructure undefined"));return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"mt-5 laptop:mt-40 p-2 laptop:p-0",children:(0,r.jsxs)("div",{children:[(0,r.jsx)("h1",{className:"text-2xl text-bold",children:"Contact."}),(0,r.jsxs)("div",{className:"mt-10",children:[(0,r.jsx)("h1",{className:"text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold",children:"LET'S WORK"}),(0,r.jsx)("h1",{className:"text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold",children:"TOGETHER"}),(0,r.jsx)(s.Z,{type:"primary",children:"Schedule a call"}),(0,r.jsx)("div",{className:"mt-10",children:(0,r.jsx)(l.Z,{})})]})]})}),(0,r.jsxs)("h1",{className:"text-sm text-bold mt-2 laptop:mt-10 p-2 laptop:p-0",children:["Made With \u2764 by"," ",(0,r.jsx)(c(),{href:"https://jaoportfolio.onrender.com/",children:(0,r.jsx)("a",{className:"underline underline-offset-1",children:"Juan Arana Olalde"})})]})]})}},96420:function(e,t,n){var r=n(85893),l=(n(67294),n(25542)),a=n(69954);t.Z=function(e){var t=e.className;return(0,r.jsx)("div",{className:"".concat(t," flex flex-wrap mob:flex-nowrap link"),children:a.socials.map((function(e,t){return(0,r.jsx)(l.Z,{onClick:function(){return window.open(e.link)},children:e.title},t)}))})}},20558:function(e,t,n){n.d(t,{KO:function(){return l},LI:function(){return r}});var r=n(67294).useLayoutEffect;function l(e){if(e){var t=new Date(e);return t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate()}}}}]);