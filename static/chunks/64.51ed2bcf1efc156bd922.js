(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[64],{"0WwY":function(e,t,a){e.exports={wrapper:"Header_wrapper__3sxUj",absluteCeo:"Header_absluteCeo__1fe31",relativeCeo:"Header_relativeCeo__2JUCf",mainTextBlock:"Header_mainTextBlock__1nL4U",home01Title:"Header_home01Title__3eQye",subtitle:"Header_subtitle__31_zX",button:"Header_button__3G0UE",descriptionBlock:"Header_descriptionBlock__2Z6Tm",linksWrapper:"Header_linksWrapper__2Rvx1",socialNetworks:"Header_socialNetworks__2Im0j",clutch:"Header_clutch__3ECjc",upwork:"Header_upwork__3hCxC",goodfirms:"Header_goodfirms__1eOoQ",subtitle2:"Header_subtitle2__2zpEj",man:"Header_man__1FFIY"}},"6FTQ":function(e,t,a){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}a.d(t,"a",(function(){return r}))},"8rE2":function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var r=a("6FTQ");function n(e,t){if(e){if("string"===typeof e)return Object(r.a)(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?Object(r.a)(e,t):void 0}}},"D+jC":function(e,t,a){e.exports={Btn:"customBtn_Btn__2EnyG",customBtn:"customBtn_customBtn__2-tN-",disabledBtn:"customBtn_disabledBtn__31wjV",outlineBtn:"customBtn_outlineBtn__30MPl",largeBtn:"customBtn_largeBtn__3_bCl",smallBtn:"customBtn_smallBtn__2AH_h"}},EZkr:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var r=function(){return window.navigator.userAgent}},PssJ:function(e,t,a){e.exports={wrapper:"ArrowWithText_wrapper__2mvlZ",text:"ArrowWithText_text__2Wrtz",img:"ArrowWithText_img__1tQM3"}},"f++f":function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var r=a("wJ4g"),n=a("D+jC"),s=a.n(n),c=a("TSYQ"),i=a.n(c),l=a("nKUr");function o(e){var t=r.x.PRIMARY,a=r.x.OUTLINE,n=r.x.LARGE,c=r.x.SMALL,o=e.type,u=void 0===o?t:o,m=e.btnType,d=e.size,b=void 0===d?n:d,j=e.title,_=e.onClick,h=e.buttonStyle,g=e.disabled,p=void 0!==g&&g,x=e.classes,f=e.link,O=e.targetBlank,v=void 0!==O&&O,k=function(){switch(u){case t:return s.a.customBtn;case a:return s.a.outlineBtn}},w=function(){switch(b){case n:return s.a.largeBtn;case c:return s.a.smallBtn}};return Object(l.jsx)(l.Fragment,{children:f?Object(l.jsx)("a",{href:f,onClick:_,target:v?"_blank":"_self",className:i()(s.a.Btn,x,k(),w()),children:j}):Object(l.jsx)("button",{onClick:_,type:m,style:h,className:i()(s.a.Btn,x,k(),w(),p&&s.a.disabledBtn),disabled:p,children:j})})}},pbeF:function(e,t,a){"use strict";t.a=function(e,t){if(e&&t<1200){var a=document.getElementById(e);a&&a.scrollIntoView({block:"start",behavior:"smooth"})}}},slPS:function(e,t,a){"use strict";var r=a("YFqc"),n=a.n(r),s=a("PssJ"),c=a.n(s),i=a("TSYQ"),l=a.n(i),o=a("nKUr");t.a=function(e){var t=e.text,a=e.link,r=e.className,s=e.onClick,i=e.id,u=void 0===i?null:i;return Object(o.jsx)(o.Fragment,{children:a?Object(o.jsx)(n.a,{href:a,children:Object(o.jsxs)("div",{id:u,className:l()(c.a.wrapper,r),onClick:s,children:[Object(o.jsx)("p",{className:c.a.text,children:t}),Object(o.jsx)("img",{className:c.a.img,src:"/images/elements/linkArrow.svg",alt:"icon"})]})}):Object(o.jsxs)("div",{id:u,className:l()(c.a.wrapper,r),onClick:s,children:[Object(o.jsx)("p",{className:c.a.text,onClick:s,children:t}),Object(o.jsx)("img",{className:c.a.img,src:"/images/elements/linkArrow.svg",alt:"icon",onClick:s})]})})}},v9K6:function(e,t,a){"use strict";a.r(t);var r=a("xvhg"),n=a("YFqc"),s=a.n(n),c=a("Aiso"),i=a.n(c),l=a("qTjs"),o=a("0WwY"),u=a.n(o),m=a("f++f"),d=a("slPS"),b=(a("EZkr"),a("TTxv")),j=a("0KOP"),_=a("pbeF"),h=a("wJ4g"),g=a("nKUr");t.default=function(e){var t=e.width,a=Object(l.useTranslation)().t,n=Object(l.useLanguageQuery)(),c=Object(r.a)(n,1)[0];return Object(g.jsxs)("div",{className:u.a.wrapper,children:[Object(g.jsx)(i.a,{layout:"fill",src:Object(j.a)({mb:"/images/home/bgMob.png",tabl:"/images/home/bgTabl.png",desk:"/images/home/bgDesk.png"}),alt:"img",priority:!0,quality:60}),Object(g.jsx)("div",{className:u.a.absluteCeo,children:Object(g.jsx)("div",{className:u.a.relativeCeo,children:Object(g.jsx)(i.a,{layout:"fill",src:Object(j.a)({mb:"/images/home/manMob.png",tabl:"/images/home/manTabl.png",desk:"/images/home/manDesk.png"}),alt:"ceo",priority:!0,quality:50})})}),Object(g.jsxs)("div",{className:u.a.mainTextBlock,children:[Object(g.jsxs)("h1",{className:u.a.home01Title,children:[a("makeYour"),t<768&&Object(g.jsx)("br",{})," ",Object(g.jsx)("a",{href:"",className:"typewrite","data-period":"3000","data-type":'["MarTech", "EdTech", "HRTech"]',children:Object(g.jsx)("span",{className:"wrap"})}),t>=768&&Object(g.jsx)("br",{}),t<768&&" ",t>768&&t<1200&&" ",a("company")," ",t<768&&Object(g.jsx)("br",{}),a("companies")]}),Object(g.jsx)(s.a,{href:{pathname:Object(b.a)().getStarted,query:c},children:Object(g.jsx)("div",{className:u.a.button,children:Object(g.jsx)(m.a,{title:a("getStarted")})})})]}),Object(g.jsxs)("div",{className:u.a.descriptionBlock,children:[Object(g.jsx)("p",{className:u.a.subtitle,children:a("homeDescription")}),Object(g.jsxs)("div",{className:u.a.linksWrapper,children:[Object(g.jsx)(d.a,{link:{pathname:Object(b.a)().ourWork,query:c},text:a("ourCases")}),Object(g.jsx)(d.a,{text:a("clientsAboutUs"),id:h.v.home.buttonScrollID,onClick:function(){return Object(_.a)(h.v.home.reviewComponentID,t)}})]})]}),Object(g.jsxs)("div",{className:u.a.socialNetworks,children:[Object(g.jsx)("a",{href:h.c,target:"_blank",children:Object(g.jsxs)("div",{children:[Object(g.jsx)("img",{src:"/images/socialNetwork/stars.svg",alt:"img"}),Object(g.jsx)("img",{className:u.a.clutch,src:"/images/socialNetwork/clutch.svg",alt:"img"})]})}),Object(g.jsx)("a",{href:h.q,target:"_blank",children:Object(g.jsxs)("div",{children:[Object(g.jsx)("p",{children:"TOP RATED PLUS"}),Object(g.jsx)("img",{className:u.a.upwork,src:"/images/socialNetwork/upwork.svg",alt:"img"})]})}),Object(g.jsx)("a",{href:h.l,target:"_blank",children:Object(g.jsxs)("div",{children:[Object(g.jsx)("img",{src:"/images/socialNetwork/stars.svg",alt:"img"}),Object(g.jsx)("img",{className:u.a.goodfirms,src:"/images/socialNetwork/goodfirms.svg",alt:"img"})]})})]})]})}},xvhg:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var r=a("8rE2");function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var r,n,s=[],c=!0,i=!1;try{for(a=a.call(e);!(c=(r=a.next()).done)&&(s.push(r.value),!t||s.length!==t);c=!0);}catch(l){i=!0,n=l}finally{try{c||null==a.return||a.return()}finally{if(i)throw n}}return s}}(e,t)||Object(r.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);