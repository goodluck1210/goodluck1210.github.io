(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{"2qAQ":function(e,t,s){e.exports={wrapper:"Reviews_wrapper__K_v8w",title:"Reviews_title__2rGgF",subtitle:"Reviews_subtitle__1b7SH",carouselWrap:"Reviews_carouselWrap__2AcdG",carouselItem:"Reviews_carouselItem__2OGPb",carouselControls:"Reviews_carouselControls__3ht_e",head:"Reviews_head__U2-dC",imgWrap:"Reviews_imgWrap__3kC0f",infoWrap:"Reviews_infoWrap__3MxCH",name:"Reviews_name__1mBh_",company:"Reviews_company__fHC6c",workPlace:"Reviews_workPlace__3eVrn",review:"Reviews_review__3MXxy",linkWrap:"Reviews_linkWrap__1hR4N",linkText:"Reviews_linkText__1H0wO",link:"Reviews_link__2LO6W",referencesWrap:"Reviews_referencesWrap__13XWQ",moreReference:"Reviews_moreReference__12YQT",iconsWrap:"Reviews_iconsWrap__2f-G9",reference:"Reviews_reference__14Xz7",clutch:"Reviews_clutch__vEbeW",upwork:"Reviews_upwork__3y85R",goodfirms:"Reviews_goodfirms__5vJ9J",stars:"Reviews_stars__3By0x",rightEmptyBlock:"Reviews_rightEmptyBlock__3l5Y5",bottom:"Reviews_bottom__3R1bu",iconsWrapper:"Reviews_iconsWrapper__2dqBn"}},"6FTQ":function(e,t,s){"use strict";function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var s=0,a=new Array(t);s<t;s++)a[s]=e[s];return a}s.d(t,"a",(function(){return a}))},"7bSg":function(e,t,s){"use strict";var a=s("qTjs"),o=s("wJ4g"),r=s("2qAQ"),n=s.n(r),i=s("pqM0"),l=s("YFqc"),c=s.n(l),p=s("Aiso"),m=s.n(p),u=s("nKUr"),d=function(e){var t,s=e.item,o=Object(a.useTranslation)().t,r=(null===(t=s.description)||void 0===t?void 0:t.length)>350?"".concat(s.description.slice(0,350),"..."):s.description;return Object(u.jsxs)("div",{className:n.a.carouselItem,children:[Object(u.jsxs)("div",{className:n.a.head,children:[Object(u.jsx)("div",{className:n.a.imgWrap,children:Object(u.jsx)(m.a,{layout:"fill",src:s.avatar,className:n.a.img,alt:"carousel-img"})}),Object(u.jsxs)("div",{className:n.a.infoWrap,children:[Object(u.jsx)("p",{className:n.a.name,children:s.name}),Object(u.jsx)("p",{className:n.a.company,children:s.company}),Object(u.jsx)("p",{className:n.a.workPlace,children:s.workPlace})]})]}),Object(u.jsx)("p",{className:n.a.review,dangerouslySetInnerHTML:{__html:r}}),Object(u.jsx)("div",{className:n.a.linkWrap,children:Object(u.jsx)(c.a,{href:s.link,children:Object(u.jsxs)("a",{className:n.a.link,target:"_blank",children:[Object(u.jsx)("p",{className:n.a.linkText,children:o("viewFull")}),Object(u.jsx)("img",{alt:"arrow",src:"/images/elements/reviewArrow.svg"})]})})})]})};t.a=function(e){var t=e.data,s=e.title,r=e.id,l=void 0===r?null:r,c=e.width,p=Object(a.useTranslation)().t;s||(s=p("reviewsMainTitle"));var m=t.map((function(e,t){return Object(u.jsx)(d,{item:e},t)}));return Object(u.jsxs)("div",{className:n.a.wrapper,id:l,children:[Object(u.jsx)("h2",{className:n.a.title,children:s}),Object(u.jsx)("h3",{className:n.a.subtitle,children:p("reviewaSubtitle")}),Object(u.jsx)(i.a,{data:t,config:{superLargeDesktop:{breakpoint:{max:4e3,min:3e3},items:2},desktop:{breakpoint:{max:3e3,min:1199},items:2},tablet:{breakpoint:{max:1199,min:768},items:2},mobile:{breakpoint:{max:767,min:0},items:1}},containerClass:n.a.carouselWrap,doubledItems:c>=768,slides:m,carouselControlsClass:n.a.carouselControls,className:n.a.carousel,isControls:!(t.length<=2&&c<1200&&c>=768)}),Object(u.jsxs)("div",{className:n.a.bottom,children:[Object(u.jsxs)("div",{className:n.a.referencesWrap,children:[Object(u.jsx)("p",{className:n.a.moreReference,children:p("readMoreOn")}),Object(u.jsxs)("div",{className:n.a.iconsWrap,children:[Object(u.jsx)("div",{className:n.a.reference,children:Object(u.jsxs)("a",{href:o.c,target:"_blank",children:[Object(u.jsx)("img",{className:n.a.clutch,src:"/images/socialNetwork/clutch.svg",alt:"img"}),Object(u.jsx)("img",{loading:"lazy",className:n.a.stars,src:"/images/socialNetwork/stars.svg",alt:"img"})]})}),Object(u.jsx)("div",{className:n.a.reference,children:Object(u.jsxs)("a",{href:o.q,target:"_blank",children:[Object(u.jsx)("img",{loading:"lazy",className:n.a.upwork,src:"/images/socialNetwork/upwork.svg",alt:"img"}),Object(u.jsx)("p",{children:"TOP RATED PLUS"})]})}),Object(u.jsx)("div",{className:n.a.reference,children:Object(u.jsxs)("a",{href:o.l,target:"_blank",children:[Object(u.jsx)("img",{className:n.a.goodfirms,loading:"lazy",src:"/images/socialNetwork/goodfirms.svg",alt:"img"}),Object(u.jsx)("img",{loading:"lazy",className:n.a.stars,src:"/images/socialNetwork/stars.svg",alt:"img"})]})})]})]}),Object(u.jsx)("div",{className:n.a.rightEmptyBlock})]})]})}},"8rE2":function(e,t,s){"use strict";s.d(t,"a",(function(){return o}));var a=s("6FTQ");function o(e,t){if(e){if("string"===typeof e)return Object(a.a)(e,t);var s=Object.prototype.toString.call(e).slice(8,-1);return"Object"===s&&e.constructor&&(s=e.constructor.name),"Map"===s||"Set"===s?Array.from(e):"Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)?Object(a.a)(e,t):void 0}}},"9T3l":function(e,t,s){e.exports={wrapper:"CTA_wrapper__1fMXi",mainTitle:"CTA_mainTitle__3NwWb",formWrapper:"CTA_formWrapper__2t5UV",photosWrapper:"CTA_photosWrapper__1j35_",ceoWrapper:"CTA_ceoWrapper__uDaOR",messageWrapper:"CTA_messageWrapper__3w7TG"}},D6mf:function(e,t,s){e.exports={wrapper:"CarouselControls_wrapper__1eIEu",leftArrow:"CarouselControls_leftArrow__1Oq4O",dashWrapper:"CarouselControls_dashWrapper__1rU_O",dash:"CarouselControls_dash__kCrEc",activeDash:"CarouselControls_activeDash__HbPnT"}},E0DC:function(e,t,s){"use strict";s.r(t);var a=s("cpVT"),o=s("q1tI"),r=s("Aiso"),n=s.n(r),i=s("qTjs"),l=s("9T3l"),c=s.n(l),p=s("vnZR"),m=s("lwWn"),u=s("TSYQ"),d=s.n(u),v=s("wJ4g"),b=s("d6iV"),h=s("hYHy"),f=s.n(h),j=s("0KOP"),T=s("nKUr");function g(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,a)}return s}function w(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?g(Object(s),!0).forEach((function(t){Object(a.a)(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):g(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}t.default=function(e){var t=e.CTATitle,s=e.topTitle,r=e.inputClass,l=e.wrapperClass,u=Object(i.useTranslation)().t,h=u("CTAForm"),g=u("submitForm"),_=u("getInTouchModalText"),O=Object(o.useState)(!1),y=O[0],S=O[1],x=Object(o.useState)({name:"",email:"",message:"",formName:v.k.PAGES_FORM}),W=x[0],C=x[1],k=Object(o.useState)(""),D=k[0],N=k[1];Object(o.useEffect)((function(){N("")}),[W.email]);var A=Object(o.useCallback)((function(e){var t=e.target;C(w(w({},W),{},Object(a.a)({},t.name,t.value)))}),[C,W]);return Object(T.jsxs)("div",{className:d()(c.a.wrapper,l),children:[s&&Object(T.jsx)("div",{className:c.a.mainTitle,children:Object(T.jsx)("span",{dangerouslySetInnerHTML:{__html:s}})}),Object(T.jsxs)("div",{className:c.a.photosWrapper,children:[Object(T.jsx)("div",{className:c.a.ceoWrapper,children:Object(T.jsx)(n.a,{layout:"fill",src:Object(j.a)({mb:"/images/CTA/ceoMob.png",tabl:"/images/CTA/ceoTabl.png",desk:"/images/CTA/ceoDesk.png"}),alt:"img",quality:20})}),Object(T.jsxs)("div",{className:c.a.messageWrapper,children:[Object(T.jsx)(n.a,{layout:"fill",src:Object(j.a)({mb:"/images/CTA/cloudMob.png",tabl:"/images/CTA/cloudTabl.png",desk:"/images/CTA/cloudDesk.png"}),alt:"img",quality:75}),Object(T.jsxs)("p",{children:[Object(T.jsx)("span",{children:u("CTAMessage.name")}),Object(T.jsx)("br",{}),Object(T.jsx)("span",{children:u("CTAMessage.position")}),Object(T.jsx)("br",{}),Object(T.jsx)("span",{children:u("CTAMessage.message")})]})]})]}),Object(T.jsxs)("div",{className:c.a.formWrapper,children:[Object(T.jsx)("h3",{children:t}),Object(T.jsx)(p.a,{data:h,btnTitle:g,values:W,formClassName:r,handleChange:A,handleSubmit:function(e){e.preventDefault(),f.a.validate(W.email)?(b.a.send(W),C({name:"",email:"",message:"",formName:v.k.PAGES_FORM}),S(!y)):N("Invalid email address!")},errors:{email:D}}),y&&Object(T.jsx)(m.a,{toggle:function(){return S(!y)},modal:y,bodyText:_})]})]})}},KSbk:function(e,t,s){e.exports={form:"Form_form__2ZGkc",recaptcha:"Form_recaptcha__3CHcl"}},MRCQ:function(e,t,s){"use strict";s.d(t,"a",(function(){return a}));var a={homePageTitle:"Software Development Company and Service Provider | WTT Solutions",homePageDescription:"WTT Solutions is a reliable software development company - we provide a range of web development services, design, and custom software development solutions",contactTitle:"Tell us about your project vision - get in touch on WTT Solutions",contactDescription:"If you have any project in mind - contact WTT Solutions and tell us what you are looking for in terms of software services \u2705 Free estimates and confidentiality",aboutUsTitle:"About Us | WTT Solutions",aboutUsDescription:"About Us on WTT Solutions",martechTitle:"New Marketing technologies and MarTech software | WTT Solutions",martechDescription:"WTT Solutions helps improve your MarTech experience with new marketing technologies \u2705 We will help you develop MarTech software to get information from data",martechKeywords:"MarTech developers, custom software solutions, MarTech solutions, MarTech Software Development, MarTech development services, Development services for MarTech, MarTech developers, Marketing Technology Development",mobileDevelopmentTitle:"Custom Mobile ( APP) Development Company | WTT Solutions",mobileDevelopmentDescription:"WTT Solutions is a custom mobile development company \u2705 We can help you create an MVP and scale your business with the latest technology using a mobile SDK",mobileDevelopmentKeywords:"mobile app development company, cross platform, solution, iOS, Android, Mobile application development solutions, mobile development services, mobile software development services, mobile application development solutions, mobile app development services, application development for mobile, mobile app as a service, mobile software development services, application development for mobile",ourWorkTitle:"Our work experience - Software Company Portfolio | WTT Solutions",ourWorkDescription:"Work experience of WTT Solutions \u2705 Information about our technology stack, industries we work with and the projects we created for enterprises and startups",enterpriseTitle:"Enterprise Software Development Company | WTT Solutions",enterpriseDescription:"Custom enterprise software development company that offers software engineering services \u2705 Enjoy software solutions tailored to your specific needs and plans",platformDevelopmentTitle:"Digital Platform Development Services | WTT Solutions",platformDevelopmentDescription:"Digital platform development for your business - WTT Solutions \u2705 We can build cross platform app, cloud-based apps and customize ready-made solutions for your business",developmentForStartupsTitle:"Software Development for Startups | WTT Solutions",developmentForStartupsDescription:"We provide startup development services, covering all aspects of performance, scalability, and security \u2705 Web development and app for startups | WTT Solutions",edtechTitle:"Ed-tech Software Development Services | WTT Solutions",edtechDescription:"WTT Solutions is an eLearning software development company.\u2714\ufe0f We build a custom development solution for your business.",hrTechTitle:"HR technologies - Development HR( HRM) Software | WTT Solutions",hrTechDescription:"Improve your recruiting process and HR analytics with HRTech solutions \u2705 WTT Solutions provides human resources software that helps to manage employees",frontendTitle:"Custom Front-end Development Services | WTT Solutions",frontendDescription:"WTT Solutions is a front-end development company \u2705 We apply our cross-industry expertise and custom front-end services to create scalable and secure projects ",backendDevelopmentTitle:"Custom Back-end Development Services | WTT Solutions",backendDevelopmentDescription:"WTT Solutions is a back-end development company \u2705 We apply our cross-industry expertise and custom back-end services to create scalable and secure projects",blogDescription:"On the WTT Solutions blog you can find news and trends on how to boost your business growth with custom software development solutions",reactTitle:"React JS Development Company and Consultancy - WTT Solutions",reactDescription:"See how WTT Solutions react development company provides its services and read real life testimonials and case studies.",angularTitle:"Angular Development Company and Consultancy - WTT Solutions",angularDescription:"See how WTT Solutions angular development company provides its services and read real-life testimonials and case studies.",nodeTitle:"Node JS Development Company and Consultancy - WTT Solutions",nodeDescription:"See how WTT Solutions NodeJS development company provides its services and read real-life testimonials and case studies",netTitle:".NET Development Company and Consultancy - WTT Solutions",netDescription:"See how WTT Solutions .NET the development company provides its services and reads real-life testimonials and case studies.",vueTitle:"Vue.JS Development Company and Consultancy - WTT Solutions",vueDescription:"See how WTT Solutions Vue.JS development company provides its services and read real-life testimonials and case studies.",flutterTitle:"Flutter Development Company and Consultancy - WTT Solutions",flutterDescription:"See how WTT Solutions Flutter development company provides its services and read real life testimonials and case studies.",blockchainTitle:"Blockchain development (AMP) and consulting | WTT Solutions",blockchainDescription:"WTT Solutions is a full-stack blockchain development company that produces custom products for different audiences \u2705 Free blockchain consulting and quotes",aiServicesTitle:"Artificial Intelligence (AI) development company | WTT Solutions",aiServicesDescription:"Automate business processes with the help of machine learning and Artificial Intelligence development \u2705 Uncover hidden potential of your data - WTT Solutions"}},lwWn:function(e,t,s){"use strict";var a,o=s("xTWq"),r=s.n(o),n=s("DCcX"),i=s("q1tI");function l(){return(l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a])}return e}).apply(this,arguments)}var c=function(e){return i.createElement("svg",l({width:20,height:20,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),a||(a=i.createElement("path",{d:"M19.334 2.553L17.447.667 10 8.113 2.554.667.667 2.553 8.114 10 .667 17.447l1.887 1.886L10 11.887l7.447 7.446 1.887-1.886L11.887 10l7.447-7.447z",fill:"#CCD1DA"})))},p=s("nKUr");t.a=function(e){var t=e.toggle,s=e.modal,a=e.bodyText;return Object(p.jsxs)(n.a,{isOpen:s,toggle:t,className:r.a.modal,children:[Object(p.jsx)(c,{onClick:function(){return t()}}),Object(p.jsx)("img",{alt:"icon",src:"/images/get-started/modalIcon.svg"}),Object(p.jsx)("p",{children:a})]})}},pqM0:function(e,t,s){"use strict";var a=s("TSYQ"),o=s.n(a),r=s("40+L"),n=s.n(r),i=s("dhJC"),l=s("D6mf"),c=s.n(l),p=s("MhZx"),m=s("nKUr"),u=["data","activeIndex","next","previous","className","doubledItems","isShowDash","tripleItems"],d=function(e){var t,s=e.data,a=e.activeIndex,r=e.next,n=e.previous,l=e.className,d=e.doubledItems,v=void 0!==d&&d,b=e.isShowDash,h=void 0===b||b,f=e.tripleItems,j=void 0!==f&&f,T=Object(i.a)(e,u);Object(p.a)().width;a=null===(t=T.carouselState)||void 0===t?void 0:t.currentSlide;var g=function(e){var t=e.target;null===T||void 0===T||T.goToSlide(Number(t.id))};return Object(m.jsxs)("div",{className:o()(c.a.wrapper,l,"carouselControls"),children:[Object(m.jsx)("button",{onClick:function(){n()},disabled:0===a,children:Object(m.jsx)("img",{src:"/images/elements/carouselArrow.svg",alt:"img",className:c.a.leftArrow})}),h&&Object(m.jsx)("div",{className:c.a.dashWrapper,children:s.map((function(e,t){if(!(v&&t>=s.length-1)&&!(j&&t>=s.length-2))return Object(m.jsx)("div",{id:t,onClick:g,className:o()(c.a.dash,t===a&&c.a.activeDash)},t)}))}),Object(m.jsx)("button",{onClick:function(){r()},disabled:v?a===s.length-2:j?a===s.length-3:a===s.length-1,children:Object(m.jsx)("img",{src:"/images/elements/carouselArrow.svg",alt:"img",className:c.a.rightArrow})})]})};t.a=function(e){var t=e.data,s=e.slides,a=e.config,r=e.containerClass,i=e.className,l=e.carouselControlsClass,c=e.doubledItems,p=e.isShowDash,u=e.tripleItems,v=e.isControls,b=void 0===v||v;return Object(m.jsx)(n.a,{swipeable:!0,draggable:!1,arrows:!1,infinite:!1,responsive:a,containerClass:r,renderButtonGroupOutside:!0,ssr:!0,customButtonGroup:b?Object(m.jsx)(d,{data:t,className:o()(l),doubledItems:c,isShowDash:p,tripleItems:u}):null,className:i,centerMode:!1,children:s})}},vnZR:function(e,t,s){"use strict";var a=s("q1tI"),o=s("KSbk"),r=s.n(o),n=s("TSYQ"),i=s.n(n),l=s("LjSu"),c=s("f++f"),p=s("nKUr");t.a=function(e){var t=e.handleChange,s=e.btnTitle,o=e.handleButtonClick,n=e.data,m=e.handleSubmit,u=e.values,d=e.id,v=e.formClassName,b=e.inputClassName,h=e.errors;return Object(p.jsxs)("form",{onSubmit:m,id:d,className:i()(r.a.form,v),children:[n.map((function(e,s){var o=e.name,r=e.type,n=e.placeholder,i=e.required,c=e.label;return Object(p.jsx)(a.Fragment,{children:Object(p.jsx)(l.a,{labelText:c,name:o,placeholder:n,required:i,type:r,className:b,onChange:t,value:u[o],error:h&&h[o]},s)},s)})),Object(p.jsx)(c.a,{title:s,onClick:o,btnType:"submit"})]})}},xTWq:function(e,t,s){e.exports={modal:"modal_modal__2c4cG"}},xvhg:function(e,t,s){"use strict";s.d(t,"a",(function(){return o}));var a=s("8rE2");function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var s=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=s){var a,o,r=[],n=!0,i=!1;try{for(s=s.call(e);!(n=(a=s.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(l){i=!0,o=l}finally{try{n||null==s.return||s.return()}finally{if(i)throw o}}return r}}(e,t)||Object(a.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);