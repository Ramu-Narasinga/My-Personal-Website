(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[195],{7801:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return r(3190)}])},9749:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){let t,r;var i,{src:a,sizes:m,unoptimized:v=!1,priority:b=!1,loading:j,className:w,quality:y,width:_,height:E,fill:N,style:S,onLoad:C,onLoadingComplete:z,placeholder:k="empty",blurDataURL:P,layout:O,objectFit:I,objectPosition:R,lazyBoundary:L,lazyRoot:A}=e,D=s(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let M=o.useContext(u.ImageConfigContext),B=o.useMemo(()=>{let e=h||M||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return n({},e,{allSizes:t,deviceSizes:r})},[M]),T=D,W=T.loader||f.default;if(delete T.loader,"__next_img_default"in W){if("custom"===B.loader)throw Error('Image with src "'.concat(a,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let F=W;W=e=>{let{config:t}=e,r=s(e,["config"]);return F(r)}}if(O){"fill"===O&&(N=!0);let G={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[O];G&&(S=n({},S,G));let q={responsive:"100vw",fill:"100vw"}[O];q&&!m&&(m=q)}let V="",U=g(_),Z=g(E);if("object"==typeof(i=a)&&(p(i)||void 0!==i.src)){let J=p(a)?a.default:a;if(!J.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(J)));if(!J.height||!J.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(J)));if(t=J.blurWidth,r=J.blurHeight,P=P||J.blurDataURL,V=J.src,!N){if(U||Z){if(U&&!Z){let X=U/J.width;Z=Math.round(J.height*X)}else if(!U&&Z){let H=Z/J.height;U=Math.round(J.width*H)}}else U=J.width,Z=J.height}}let $=!b&&("lazy"===j||void 0===j);((a="string"==typeof a?a:V).startsWith("data:")||a.startsWith("blob:"))&&(v=!0,$=!1),B.unoptimized&&(v=!0);let[K,Q]=o.useState(!1),[Y,ee]=o.useState(!1),et=g(y),er=Object.assign(N?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:I,objectPosition:R}:{},Y?{}:{color:"transparent"},S),en="blur"===k&&P&&!K?{backgroundSize:er.objectFit||"cover",backgroundPosition:er.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(c.getImageBlurSvg({widthInt:U,heightInt:Z,blurWidth:t,blurHeight:r,blurDataURL:P}),'")')}:{},ei=function(e){let{config:t,src:r,unoptimized:n,width:i,quality:a,sizes:s,loader:o}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:l,kind:c}=function(e,t,r){let{deviceSizes:n,allSizes:i}=e;if(r){let a=/(^|\s)(1?\d?\d)vw/g,s=[];for(let o;o=a.exec(r);o)s.push(parseInt(o[2]));if(s.length){let l=.01*Math.min(...s);return{widths:i.filter(e=>e>=n[0]*l),kind:"w"}}return{widths:i,kind:"w"}}if("number"!=typeof t)return{widths:n,kind:"w"};let c=[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))];return{widths:c,kind:"x"}}(t,i,s),d=l.length-1;return{sizes:s||"w"!==c?s:"100vw",srcSet:l.map((e,n)=>"".concat(o({config:t,src:r,quality:a,width:e})," ").concat("w"===c?e:n+1).concat(c)).join(", "),src:o({config:t,src:r,quality:a,width:l[d]})}}({config:B,src:a,unoptimized:v,width:U,quality:et,sizes:m,loader:W}),ea=a,es={imageSrcSet:ei.srcSet,imageSizes:ei.sizes,crossOrigin:T.crossOrigin},eo=o.useRef(C);o.useEffect(()=>{eo.current=C},[C]);let el=o.useRef(z);o.useEffect(()=>{el.current=z},[z]);let ec=n({isLazy:$,imgAttributes:ei,heightInt:Z,widthInt:U,qualityInt:et,className:w,imgStyle:er,blurStyle:en,loading:j,config:B,fill:N,unoptimized:v,placeholder:k,loader:W,srcString:ea,onLoadRef:eo,onLoadingCompleteRef:el,setBlurComplete:Q,setShowAltText:ee},T);return o.default.createElement(o.default.Fragment,null,o.default.createElement(x,Object.assign({},ec)),b?o.default.createElement(l.default,null,o.default.createElement("link",Object.assign({key:"__nimg-"+ei.src+ei.srcSet+ei.sizes,rel:"preload",as:"image",href:ei.srcSet?void 0:ei.src},es))):null)};var n=r(6495).Z,i=r(2648).Z,a=r(1598).Z,s=r(7273).Z,o=a(r(7294)),l=i(r(3121)),c=r(2675),d=r(139),u=r(8730);r(7238);var f=i(r(9824));let h={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function p(e){return void 0!==e.default}function g(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function m(e,t,r,i,a,s,o){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let l="decode"in e?e.decode():Promise.resolve();l.catch(()=>{}).then(()=>{if(e.parentNode){if("blur"===r&&s(!0),null==i?void 0:i.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let o=!1,l=!1;i.current(n({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>o,isPropagationStopped:()=>l,persist(){},preventDefault(){o=!0,t.preventDefault()},stopPropagation(){l=!0,t.stopPropagation()}}))}(null==a?void 0:a.current)&&a.current(e)}})}let x=e=>{var{imgAttributes:t,heightInt:r,widthInt:i,qualityInt:a,className:l,imgStyle:c,blurStyle:d,isLazy:u,fill:f,placeholder:h,loading:p,srcString:g,config:x,unoptimized:v,loader:b,onLoadRef:j,onLoadingCompleteRef:w,setBlurComplete:y,setShowAltText:_,onLoad:E,onError:N}=e,S=s(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return p=u?"lazy":p,o.default.createElement(o.default.Fragment,null,o.default.createElement("img",Object.assign({},S,t,{width:i,height:r,decoding:"async","data-nimg":f?"fill":"1",className:l,loading:p,style:n({},c,d),ref:o.useCallback(e=>{e&&(N&&(e.src=e.src),e.complete&&m(e,g,h,j,w,y,v))},[g,h,j,w,y,N,v]),onLoad(e){let t=e.currentTarget;m(t,g,h,j,w,y,v)},onError(e){_(!0),"blur"===h&&y(!0),N&&N(e)}})))};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2675:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:i,blurDataURL:a}=e,s=n||t,o=i||r,l=a.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return s&&o?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(s," ").concat(o,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(n&&i?"1":"20","'/%3E").concat(l,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(a,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(a,"'/%3E%3C/svg%3E")}},9824:function(e,t){"use strict";function r(e){let{config:t,src:r,width:n,quality:i}=e;return r.endsWith(".svg")&&!t.dangerouslyAllowSVG?r:"".concat(t.path,"?url=").concat(encodeURIComponent(r),"&w=").concat(n,"&q=").concat(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r.__next_img_default=!0,t.default=r},3190:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return d}});var n=r(5893),i=r(9008),a=r.n(i),s=r(5675),o=r.n(s),l=r(7160),c=r.n(l);function d(){return(0,n.jsxs)("div",{className:c().container,children:[(0,n.jsxs)(a(),{children:[(0,n.jsx)("title",{children:"Create Next App"}),(0,n.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,n.jsxs)("main",{className:c().main,children:[(0,n.jsxs)("h1",{className:c().title,children:["Welcome to ",(0,n.jsx)("a",{href:"https://nextjs.org",children:"Next.js!"})]}),(0,n.jsxs)("p",{className:c().description,children:["Get started by editing"," ",(0,n.jsx)("code",{className:c().code,children:"pages/index.tsx"})]}),(0,n.jsxs)("div",{className:c().grid,children:[(0,n.jsxs)("a",{href:"https://nextjs.org/docs",className:c().card,children:[(0,n.jsx)("h2",{children:"Documentation →"}),(0,n.jsx)("p",{children:"Find in-depth information about Next.js features and API."})]}),(0,n.jsxs)("a",{href:"https://nextjs.org/learn",className:c().card,children:[(0,n.jsx)("h2",{children:"Learn →"}),(0,n.jsx)("p",{children:"Learn about Next.js in an interactive course with quizzes!"})]}),(0,n.jsxs)("a",{href:"https://github.com/vercel/next.js/tree/canary/examples",className:c().card,children:[(0,n.jsx)("h2",{children:"Examples →"}),(0,n.jsx)("p",{children:"Discover and deploy boilerplate example Next.js projects."})]}),(0,n.jsxs)("a",{href:"https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",target:"_blank",rel:"noopener noreferrer",className:c().card,children:[(0,n.jsx)("h2",{children:"Deploy →"}),(0,n.jsx)("p",{children:"Instantly deploy your Next.js site to a public URL with Vercel."})]})]})]}),(0,n.jsx)("footer",{className:c().footer,children:(0,n.jsxs)("a",{href:"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",target:"_blank",rel:"noopener noreferrer",children:["Powered by"," ",(0,n.jsx)("span",{className:c().logo,children:(0,n.jsx)(o(),{src:"/vercel.svg",alt:"Vercel Logo",width:72,height:16})})]})})]})}},7160:function(){},9008:function(e,t,r){e.exports=r(3121)},5675:function(e,t,r){e.exports=r(9749)}},function(e){e.O(0,[638,774,888,179],function(){return e(e.s=7801)}),_N_E=e.O()}]);