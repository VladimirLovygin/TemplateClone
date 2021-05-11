/*! For license information please see 17.0b913f0b.chunk.js.LICENSE.txt */
(this["webpackJsonpreact-tamplate"]=this["webpackJsonpreact-tamplate"]||[]).push([[17],{550:function(t,e,i){"use strict";var a=i(1),n=i.n(a),o=i(551),r=i.n(o),h=function(){return(h=Object.assign||function(t){for(var e,i=1,a=arguments.length;i<a;i++)for(var n in e=arguments[i])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}).apply(this,arguments)};function s(t,e){var i={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.indexOf(a)<0&&(i[a]=t[a]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(t);n<a.length;n++)e.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(t,a[n])&&(i[a[n]]=t[a[n]])}return i}var c=n.a.forwardRef((function(t,e){var i=s(t,[]),o=i.dragMode,c=void 0===o?"crop":o,l=i.src,d=i.style,p=i.className,u=i.crossOrigin,m=i.scaleX,g=i.scaleY,f=i.enable,v=i.zoomTo,w=i.rotateTo,b=i.alt,y=void 0===b?"picture":b,x=i.ready,M=i.onInitialized,C=s(i,["dragMode","src","style","className","crossOrigin","scaleX","scaleY","enable","zoomTo","rotateTo","alt","ready","onInitialized"]),D={scaleY:g,scaleX:m,enable:f,zoomTo:v,rotateTo:w},O=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var i=Object(a.useRef)(null);return n.a.useEffect((function(){t.forEach((function(t){t&&("function"===typeof t?t(i.current):t.current=i.current)}))}),[t]),i}(e,Object(a.useRef)(null));return Object(a.useEffect)((function(){if(null!==O.current){var t=new r.a(O.current,h(h({dragMode:c},C),{ready:function(t){null!==t.currentTarget&&function(t,e){void 0===e&&(e={});var i=e.enable,a=void 0===i||i,n=e.scaleX,o=void 0===n?1:n,r=e.scaleY,h=void 0===r?1:r,s=e.zoomTo,c=void 0===s?0:s,l=e.rotateTo,d=void 0===l?0:l;a?t.enable():t.disable(),t.scaleX(o),t.scaleY(h),t.rotateTo(d),c>0&&t.zoomTo(c)}(t.currentTarget.cropper,D),x&&x(t)}}));M&&M(t)}return function(){var t,e;null===(e=null===(t=O.current)||void 0===t?void 0:t.cropper)||void 0===e||e.destroy()}}),[O]),Object(a.useEffect)((function(){var t;(null===(t=O.current)||void 0===t?void 0:t.cropper)&&"undefined"!==typeof l&&O.current.cropper.reset().clear().replace(l)}),[l]),n.a.createElement("div",{style:d,className:p},n.a.createElement("img",{crossOrigin:u,src:l,alt:y,style:{opacity:0,maxWidth:"100%"},ref:O}))}));e.a=c},551:function(t,e,i){t.exports=function(){"use strict";function t(e){return(t="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function a(t,e,a){return e&&i(t.prototype,e),a&&i(t,a),t}function n(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function o(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,a)}return i}function r(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?o(Object(i),!0).forEach((function(e){n(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function h(t){return s(t)||c(t)||l(t)||p()}function s(t){if(Array.isArray(t))return d(t)}function c(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function l(t,e){if(t){if("string"===typeof t)return d(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?d(t,e):void 0}}function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,a=new Array(e);i<e;i++)a[i]=t[i];return a}function p(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var u="undefined"!==typeof window&&"undefined"!==typeof window.document,m=u?window:{},g=!(!u||!m.document.documentElement)&&"ontouchstart"in m.document.documentElement,f=!!u&&"PointerEvent"in m,v="cropper",w="all",b="crop",y="move",x="zoom",M="e",C="w",D="s",O="n",B="ne",T="nw",k="se",E="sw",W="".concat(v,"-crop"),N="".concat(v,"-disabled"),H="".concat(v,"-hidden"),z="".concat(v,"-hide"),Y="".concat(v,"-invisible"),L="".concat(v,"-modal"),X="".concat(v,"-move"),R="".concat(v,"Action"),j="".concat(v,"Preview"),S="crop",A="move",I="none",P="crop",U="cropend",q="cropmove",$="cropstart",Q="dblclick",K=g?"touchstart":"mousedown",Z=g?"touchmove":"mousemove",J=g?"touchend touchcancel":"mouseup",G=f?"pointerdown":K,V=f?"pointermove":Z,F=f?"pointerup pointercancel":J,_="ready",tt="resize",et="wheel",it="zoom",at="image/jpeg",nt=/^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/,ot=/^data:/,rt=/^data:image\/jpeg;base64,/,ht=/^img|canvas$/i,st=200,ct=100,lt={viewMode:0,dragMode:S,initialAspectRatio:NaN,aspectRatio:NaN,data:null,preview:"",responsive:!0,restore:!0,checkCrossOrigin:!0,checkOrientation:!0,modal:!0,guides:!0,center:!0,highlight:!0,background:!0,autoCrop:!0,autoCropArea:.8,movable:!0,rotatable:!0,scalable:!0,zoomable:!0,zoomOnTouch:!0,zoomOnWheel:!0,wheelZoomRatio:.1,cropBoxMovable:!0,cropBoxResizable:!0,toggleDragModeOnDblclick:!0,minCanvasWidth:0,minCanvasHeight:0,minCropBoxWidth:0,minCropBoxHeight:0,minContainerWidth:st,minContainerHeight:ct,ready:null,cropstart:null,cropmove:null,cropend:null,crop:null,zoom:null},dt='<div class="cropper-container" touch-action="none"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-cropper-action="e"></span><span class="cropper-line line-n" data-cropper-action="n"></span><span class="cropper-line line-w" data-cropper-action="w"></span><span class="cropper-line line-s" data-cropper-action="s"></span><span class="cropper-point point-e" data-cropper-action="e"></span><span class="cropper-point point-n" data-cropper-action="n"></span><span class="cropper-point point-w" data-cropper-action="w"></span><span class="cropper-point point-s" data-cropper-action="s"></span><span class="cropper-point point-ne" data-cropper-action="ne"></span><span class="cropper-point point-nw" data-cropper-action="nw"></span><span class="cropper-point point-sw" data-cropper-action="sw"></span><span class="cropper-point point-se" data-cropper-action="se"></span></div></div>',pt=Number.isNaN||m.isNaN;function ut(t){return"number"===typeof t&&!pt(t)}var mt=function(t){return t>0&&t<1/0};function gt(t){return"undefined"===typeof t}function ft(e){return"object"===t(e)&&null!==e}var vt=Object.prototype.hasOwnProperty;function wt(t){if(!ft(t))return!1;try{var e=t.constructor,i=e.prototype;return e&&i&&vt.call(i,"isPrototypeOf")}catch(a){return!1}}function bt(t){return"function"===typeof t}var yt=Array.prototype.slice;function xt(t){return Array.from?Array.from(t):yt.call(t)}function Mt(t,e){return t&&bt(e)&&(Array.isArray(t)||ut(t.length)?xt(t).forEach((function(i,a){e.call(t,i,a,t)})):ft(t)&&Object.keys(t).forEach((function(i){e.call(t,t[i],i,t)}))),t}var Ct=Object.assign||function(t){for(var e=arguments.length,i=new Array(e>1?e-1:0),a=1;a<e;a++)i[a-1]=arguments[a];return ft(t)&&i.length>0&&i.forEach((function(e){ft(e)&&Object.keys(e).forEach((function(i){t[i]=e[i]}))})),t},Dt=/\.\d*(?:0|9){12}\d*$/;function Ot(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e11;return Dt.test(t)?Math.round(t*e)/e:t}var Bt=/^width|height|left|top|marginLeft|marginTop$/;function Tt(t,e){var i=t.style;Mt(e,(function(t,e){Bt.test(e)&&ut(t)&&(t="".concat(t,"px")),i[e]=t}))}function kt(t,e){return t.classList?t.classList.contains(e):t.className.indexOf(e)>-1}function Et(t,e){if(e)if(ut(t.length))Mt(t,(function(t){Et(t,e)}));else if(t.classList)t.classList.add(e);else{var i=t.className.trim();i?i.indexOf(e)<0&&(t.className="".concat(i," ").concat(e)):t.className=e}}function Wt(t,e){e&&(ut(t.length)?Mt(t,(function(t){Wt(t,e)})):t.classList?t.classList.remove(e):t.className.indexOf(e)>=0&&(t.className=t.className.replace(e,"")))}function Nt(t,e,i){e&&(ut(t.length)?Mt(t,(function(t){Nt(t,e,i)})):i?Et(t,e):Wt(t,e))}var Ht=/([a-z\d])([A-Z])/g;function zt(t){return t.replace(Ht,"$1-$2").toLowerCase()}function Yt(t,e){return ft(t[e])?t[e]:t.dataset?t.dataset[e]:t.getAttribute("data-".concat(zt(e)))}function Lt(t,e,i){ft(i)?t[e]=i:t.dataset?t.dataset[e]=i:t.setAttribute("data-".concat(zt(e)),i)}function Xt(t,e){if(ft(t[e]))try{delete t[e]}catch(i){t[e]=void 0}else if(t.dataset)try{delete t.dataset[e]}catch(i){t.dataset[e]=void 0}else t.removeAttribute("data-".concat(zt(e)))}var Rt=/\s\s*/,jt=function(){var t=!1;if(u){var e=!1,i=function(){},a=Object.defineProperty({},"once",{get:function(){return t=!0,e},set:function(t){e=t}});m.addEventListener("test",i,a),m.removeEventListener("test",i,a)}return t}();function St(t,e,i){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},n=i;e.trim().split(Rt).forEach((function(e){if(!jt){var o=t.listeners;o&&o[e]&&o[e][i]&&(n=o[e][i],delete o[e][i],0===Object.keys(o[e]).length&&delete o[e],0===Object.keys(o).length&&delete t.listeners)}t.removeEventListener(e,n,a)}))}function At(t,e,i){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},n=i;e.trim().split(Rt).forEach((function(e){if(a.once&&!jt){var o=t.listeners,r=void 0===o?{}:o;n=function(){delete r[e][i],t.removeEventListener(e,n,a);for(var o=arguments.length,h=new Array(o),s=0;s<o;s++)h[s]=arguments[s];i.apply(t,h)},r[e]||(r[e]={}),r[e][i]&&t.removeEventListener(e,r[e][i],a),r[e][i]=n,t.listeners=r}t.addEventListener(e,n,a)}))}function It(t,e,i){var a;return bt(Event)&&bt(CustomEvent)?a=new CustomEvent(e,{detail:i,bubbles:!0,cancelable:!0}):(a=document.createEvent("CustomEvent")).initCustomEvent(e,!0,!0,i),t.dispatchEvent(a)}function Pt(t){var e=t.getBoundingClientRect();return{left:e.left+(window.pageXOffset-document.documentElement.clientLeft),top:e.top+(window.pageYOffset-document.documentElement.clientTop)}}var Ut=m.location,qt=/^(\w+:)\/\/([^:/?#]*):?(\d*)/i;function $t(t){var e=t.match(qt);return null!==e&&(e[1]!==Ut.protocol||e[2]!==Ut.hostname||e[3]!==Ut.port)}function Qt(t){var e="timestamp=".concat((new Date).getTime());return t+(-1===t.indexOf("?")?"?":"&")+e}function Kt(t){var e=t.rotate,i=t.scaleX,a=t.scaleY,n=t.translateX,o=t.translateY,r=[];ut(n)&&0!==n&&r.push("translateX(".concat(n,"px)")),ut(o)&&0!==o&&r.push("translateY(".concat(o,"px)")),ut(e)&&0!==e&&r.push("rotate(".concat(e,"deg)")),ut(i)&&1!==i&&r.push("scaleX(".concat(i,")")),ut(a)&&1!==a&&r.push("scaleY(".concat(a,")"));var h=r.length?r.join(" "):"none";return{WebkitTransform:h,msTransform:h,transform:h}}function Zt(t){var e=r({},t),i=0;return Mt(t,(function(t,a){delete e[a],Mt(e,(function(e){var a=Math.abs(t.startX-e.startX),n=Math.abs(t.startY-e.startY),o=Math.abs(t.endX-e.endX),r=Math.abs(t.endY-e.endY),h=Math.sqrt(a*a+n*n),s=(Math.sqrt(o*o+r*r)-h)/h;Math.abs(s)>Math.abs(i)&&(i=s)}))})),i}function Jt(t,e){var i=t.pageX,a=t.pageY,n={endX:i,endY:a};return e?n:r({startX:i,startY:a},n)}function Gt(t){var e=0,i=0,a=0;return Mt(t,(function(t){var n=t.startX,o=t.startY;e+=n,i+=o,a+=1})),{pageX:e/=a,pageY:i/=a}}function Vt(t){var e=t.aspectRatio,i=t.height,a=t.width,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"contain",o=mt(a),r=mt(i);if(o&&r){var h=i*e;"contain"===n&&h>a||"cover"===n&&h<a?i=a/e:a=i*e}else o?i=a/e:r&&(a=i*e);return{width:a,height:i}}function Ft(t){var e=t.width,i=t.height,a=t.degree;if(90===(a=Math.abs(a)%180))return{width:i,height:e};var n=a%90*Math.PI/180,o=Math.sin(n),r=Math.cos(n),h=e*r+i*o,s=e*o+i*r;return a>90?{width:s,height:h}:{width:h,height:s}}function _t(t,e,i,a){var n=e.aspectRatio,o=e.naturalWidth,r=e.naturalHeight,s=e.rotate,c=void 0===s?0:s,l=e.scaleX,d=void 0===l?1:l,p=e.scaleY,u=void 0===p?1:p,m=i.aspectRatio,g=i.naturalWidth,f=i.naturalHeight,v=a.fillColor,w=void 0===v?"transparent":v,b=a.imageSmoothingEnabled,y=void 0===b||b,x=a.imageSmoothingQuality,M=void 0===x?"low":x,C=a.maxWidth,D=void 0===C?1/0:C,O=a.maxHeight,B=void 0===O?1/0:O,T=a.minWidth,k=void 0===T?0:T,E=a.minHeight,W=void 0===E?0:E,N=document.createElement("canvas"),H=N.getContext("2d"),z=Vt({aspectRatio:m,width:D,height:B}),Y=Vt({aspectRatio:m,width:k,height:W},"cover"),L=Math.min(z.width,Math.max(Y.width,g)),X=Math.min(z.height,Math.max(Y.height,f)),R=Vt({aspectRatio:n,width:D,height:B}),j=Vt({aspectRatio:n,width:k,height:W},"cover"),S=Math.min(R.width,Math.max(j.width,o)),A=Math.min(R.height,Math.max(j.height,r)),I=[-S/2,-A/2,S,A];return N.width=Ot(L),N.height=Ot(X),H.fillStyle=w,H.fillRect(0,0,L,X),H.save(),H.translate(L/2,X/2),H.rotate(c*Math.PI/180),H.scale(d,u),H.imageSmoothingEnabled=y,H.imageSmoothingQuality=M,H.drawImage.apply(H,[t].concat(h(I.map((function(t){return Math.floor(Ot(t))}))))),H.restore(),N}var te=String.fromCharCode;function ee(t,e,i){var a="";i+=e;for(var n=e;n<i;n+=1)a+=te(t.getUint8(n));return a}var ie=/^data:.*,/;function ae(t){var e=t.replace(ie,""),i=atob(e),a=new ArrayBuffer(i.length),n=new Uint8Array(a);return Mt(n,(function(t,e){n[e]=i.charCodeAt(e)})),a}function ne(t,e){for(var i=[],a=8192,n=new Uint8Array(t);n.length>0;)i.push(te.apply(null,xt(n.subarray(0,a)))),n=n.subarray(a);return"data:".concat(e,";base64,").concat(btoa(i.join("")))}function oe(t){var e,i=new DataView(t);try{var a,n,o;if(255===i.getUint8(0)&&216===i.getUint8(1))for(var r=i.byteLength,h=2;h+1<r;){if(255===i.getUint8(h)&&225===i.getUint8(h+1)){n=h;break}h+=1}if(n){var s=n+10;if("Exif"===ee(i,n+4,4)){var c=i.getUint16(s);if(((a=18761===c)||19789===c)&&42===i.getUint16(s+2,a)){var l=i.getUint32(s+4,a);l>=8&&(o=s+l)}}}if(o){var d,p,u=i.getUint16(o,a);for(p=0;p<u;p+=1)if(d=o+12*p+2,274===i.getUint16(d,a)){d+=8,e=i.getUint16(d,a),i.setUint16(d,1,a);break}}}catch(m){e=1}return e}function re(t){var e=0,i=1,a=1;switch(t){case 2:i=-1;break;case 3:e=-180;break;case 4:a=-1;break;case 5:e=90,a=-1;break;case 6:e=90;break;case 7:e=90,i=-1;break;case 8:e=-90}return{rotate:e,scaleX:i,scaleY:a}}var he={render:function(){this.initContainer(),this.initCanvas(),this.initCropBox(),this.renderCanvas(),this.cropped&&this.renderCropBox()},initContainer:function(){var t=this.element,e=this.options,i=this.container,a=this.cropper,n=Number(e.minContainerWidth),o=Number(e.minContainerHeight);Et(a,H),Wt(t,H);var r={width:Math.max(i.offsetWidth,n>=0?n:st),height:Math.max(i.offsetHeight,o>=0?o:ct)};this.containerData=r,Tt(a,{width:r.width,height:r.height}),Et(t,H),Wt(a,H)},initCanvas:function(){var t=this.containerData,e=this.imageData,i=this.options.viewMode,a=Math.abs(e.rotate)%180===90,n=a?e.naturalHeight:e.naturalWidth,o=a?e.naturalWidth:e.naturalHeight,r=n/o,h=t.width,s=t.height;t.height*r>t.width?3===i?h=t.height*r:s=t.width/r:3===i?s=t.width/r:h=t.height*r;var c={aspectRatio:r,naturalWidth:n,naturalHeight:o,width:h,height:s};this.canvasData=c,this.limited=1===i||2===i,this.limitCanvas(!0,!0),c.width=Math.min(Math.max(c.width,c.minWidth),c.maxWidth),c.height=Math.min(Math.max(c.height,c.minHeight),c.maxHeight),c.left=(t.width-c.width)/2,c.top=(t.height-c.height)/2,c.oldLeft=c.left,c.oldTop=c.top,this.initialCanvasData=Ct({},c)},limitCanvas:function(t,e){var i=this.options,a=this.containerData,n=this.canvasData,o=this.cropBoxData,r=i.viewMode,h=n.aspectRatio,s=this.cropped&&o;if(t){var c=Number(i.minCanvasWidth)||0,l=Number(i.minCanvasHeight)||0;r>1?(c=Math.max(c,a.width),l=Math.max(l,a.height),3===r&&(l*h>c?c=l*h:l=c/h)):r>0&&(c?c=Math.max(c,s?o.width:0):l?l=Math.max(l,s?o.height:0):s&&(c=o.width,(l=o.height)*h>c?c=l*h:l=c/h));var d=Vt({aspectRatio:h,width:c,height:l});c=d.width,l=d.height,n.minWidth=c,n.minHeight=l,n.maxWidth=1/0,n.maxHeight=1/0}if(e)if(r>(s?0:1)){var p=a.width-n.width,u=a.height-n.height;n.minLeft=Math.min(0,p),n.minTop=Math.min(0,u),n.maxLeft=Math.max(0,p),n.maxTop=Math.max(0,u),s&&this.limited&&(n.minLeft=Math.min(o.left,o.left+(o.width-n.width)),n.minTop=Math.min(o.top,o.top+(o.height-n.height)),n.maxLeft=o.left,n.maxTop=o.top,2===r&&(n.width>=a.width&&(n.minLeft=Math.min(0,p),n.maxLeft=Math.max(0,p)),n.height>=a.height&&(n.minTop=Math.min(0,u),n.maxTop=Math.max(0,u))))}else n.minLeft=-n.width,n.minTop=-n.height,n.maxLeft=a.width,n.maxTop=a.height},renderCanvas:function(t,e){var i=this.canvasData,a=this.imageData;if(e){var n=Ft({width:a.naturalWidth*Math.abs(a.scaleX||1),height:a.naturalHeight*Math.abs(a.scaleY||1),degree:a.rotate||0}),o=n.width,r=n.height,h=i.width*(o/i.naturalWidth),s=i.height*(r/i.naturalHeight);i.left-=(h-i.width)/2,i.top-=(s-i.height)/2,i.width=h,i.height=s,i.aspectRatio=o/r,i.naturalWidth=o,i.naturalHeight=r,this.limitCanvas(!0,!1)}(i.width>i.maxWidth||i.width<i.minWidth)&&(i.left=i.oldLeft),(i.height>i.maxHeight||i.height<i.minHeight)&&(i.top=i.oldTop),i.width=Math.min(Math.max(i.width,i.minWidth),i.maxWidth),i.height=Math.min(Math.max(i.height,i.minHeight),i.maxHeight),this.limitCanvas(!1,!0),i.left=Math.min(Math.max(i.left,i.minLeft),i.maxLeft),i.top=Math.min(Math.max(i.top,i.minTop),i.maxTop),i.oldLeft=i.left,i.oldTop=i.top,Tt(this.canvas,Ct({width:i.width,height:i.height},Kt({translateX:i.left,translateY:i.top}))),this.renderImage(t),this.cropped&&this.limited&&this.limitCropBox(!0,!0)},renderImage:function(t){var e=this.canvasData,i=this.imageData,a=i.naturalWidth*(e.width/e.naturalWidth),n=i.naturalHeight*(e.height/e.naturalHeight);Ct(i,{width:a,height:n,left:(e.width-a)/2,top:(e.height-n)/2}),Tt(this.image,Ct({width:i.width,height:i.height},Kt(Ct({translateX:i.left,translateY:i.top},i)))),t&&this.output()},initCropBox:function(){var t=this.options,e=this.canvasData,i=t.aspectRatio||t.initialAspectRatio,a=Number(t.autoCropArea)||.8,n={width:e.width,height:e.height};i&&(e.height*i>e.width?n.height=n.width/i:n.width=n.height*i),this.cropBoxData=n,this.limitCropBox(!0,!0),n.width=Math.min(Math.max(n.width,n.minWidth),n.maxWidth),n.height=Math.min(Math.max(n.height,n.minHeight),n.maxHeight),n.width=Math.max(n.minWidth,n.width*a),n.height=Math.max(n.minHeight,n.height*a),n.left=e.left+(e.width-n.width)/2,n.top=e.top+(e.height-n.height)/2,n.oldLeft=n.left,n.oldTop=n.top,this.initialCropBoxData=Ct({},n)},limitCropBox:function(t,e){var i=this.options,a=this.containerData,n=this.canvasData,o=this.cropBoxData,r=this.limited,h=i.aspectRatio;if(t){var s=Number(i.minCropBoxWidth)||0,c=Number(i.minCropBoxHeight)||0,l=r?Math.min(a.width,n.width,n.width+n.left,a.width-n.left):a.width,d=r?Math.min(a.height,n.height,n.height+n.top,a.height-n.top):a.height;s=Math.min(s,a.width),c=Math.min(c,a.height),h&&(s&&c?c*h>s?c=s/h:s=c*h:s?c=s/h:c&&(s=c*h),d*h>l?d=l/h:l=d*h),o.minWidth=Math.min(s,l),o.minHeight=Math.min(c,d),o.maxWidth=l,o.maxHeight=d}e&&(r?(o.minLeft=Math.max(0,n.left),o.minTop=Math.max(0,n.top),o.maxLeft=Math.min(a.width,n.left+n.width)-o.width,o.maxTop=Math.min(a.height,n.top+n.height)-o.height):(o.minLeft=0,o.minTop=0,o.maxLeft=a.width-o.width,o.maxTop=a.height-o.height))},renderCropBox:function(){var t=this.options,e=this.containerData,i=this.cropBoxData;(i.width>i.maxWidth||i.width<i.minWidth)&&(i.left=i.oldLeft),(i.height>i.maxHeight||i.height<i.minHeight)&&(i.top=i.oldTop),i.width=Math.min(Math.max(i.width,i.minWidth),i.maxWidth),i.height=Math.min(Math.max(i.height,i.minHeight),i.maxHeight),this.limitCropBox(!1,!0),i.left=Math.min(Math.max(i.left,i.minLeft),i.maxLeft),i.top=Math.min(Math.max(i.top,i.minTop),i.maxTop),i.oldLeft=i.left,i.oldTop=i.top,t.movable&&t.cropBoxMovable&&Lt(this.face,R,i.width>=e.width&&i.height>=e.height?y:w),Tt(this.cropBox,Ct({width:i.width,height:i.height},Kt({translateX:i.left,translateY:i.top}))),this.cropped&&this.limited&&this.limitCanvas(!0,!0),this.disabled||this.output()},output:function(){this.preview(),It(this.element,P,this.getData())}},se={initPreview:function(){var t=this.element,e=this.crossOrigin,i=this.options.preview,a=e?this.crossOriginUrl:this.url,n=t.alt||"The image to preview",o=document.createElement("img");if(e&&(o.crossOrigin=e),o.src=a,o.alt=n,this.viewBox.appendChild(o),this.viewBoxImage=o,i){var r=i;"string"===typeof i?r=t.ownerDocument.querySelectorAll(i):i.querySelector&&(r=[i]),this.previews=r,Mt(r,(function(t){var i=document.createElement("img");Lt(t,j,{width:t.offsetWidth,height:t.offsetHeight,html:t.innerHTML}),e&&(i.crossOrigin=e),i.src=a,i.alt=n,i.style.cssText='display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;"',t.innerHTML="",t.appendChild(i)}))}},resetPreview:function(){Mt(this.previews,(function(t){var e=Yt(t,j);Tt(t,{width:e.width,height:e.height}),t.innerHTML=e.html,Xt(t,j)}))},preview:function(){var t=this.imageData,e=this.canvasData,i=this.cropBoxData,a=i.width,n=i.height,o=t.width,r=t.height,h=i.left-e.left-t.left,s=i.top-e.top-t.top;this.cropped&&!this.disabled&&(Tt(this.viewBoxImage,Ct({width:o,height:r},Kt(Ct({translateX:-h,translateY:-s},t)))),Mt(this.previews,(function(e){var i=Yt(e,j),c=i.width,l=i.height,d=c,p=l,u=1;a&&(p=n*(u=c/a)),n&&p>l&&(d=a*(u=l/n),p=l),Tt(e,{width:d,height:p}),Tt(e.getElementsByTagName("img")[0],Ct({width:o*u,height:r*u},Kt(Ct({translateX:-h*u,translateY:-s*u},t))))})))}},ce={bind:function(){var t=this.element,e=this.options,i=this.cropper;bt(e.cropstart)&&At(t,$,e.cropstart),bt(e.cropmove)&&At(t,q,e.cropmove),bt(e.cropend)&&At(t,U,e.cropend),bt(e.crop)&&At(t,P,e.crop),bt(e.zoom)&&At(t,it,e.zoom),At(i,G,this.onCropStart=this.cropStart.bind(this)),e.zoomable&&e.zoomOnWheel&&At(i,et,this.onWheel=this.wheel.bind(this),{passive:!1,capture:!0}),e.toggleDragModeOnDblclick&&At(i,Q,this.onDblclick=this.dblclick.bind(this)),At(t.ownerDocument,V,this.onCropMove=this.cropMove.bind(this)),At(t.ownerDocument,F,this.onCropEnd=this.cropEnd.bind(this)),e.responsive&&At(window,tt,this.onResize=this.resize.bind(this))},unbind:function(){var t=this.element,e=this.options,i=this.cropper;bt(e.cropstart)&&St(t,$,e.cropstart),bt(e.cropmove)&&St(t,q,e.cropmove),bt(e.cropend)&&St(t,U,e.cropend),bt(e.crop)&&St(t,P,e.crop),bt(e.zoom)&&St(t,it,e.zoom),St(i,G,this.onCropStart),e.zoomable&&e.zoomOnWheel&&St(i,et,this.onWheel,{passive:!1,capture:!0}),e.toggleDragModeOnDblclick&&St(i,Q,this.onDblclick),St(t.ownerDocument,V,this.onCropMove),St(t.ownerDocument,F,this.onCropEnd),e.responsive&&St(window,tt,this.onResize)}},le={resize:function(){if(!this.disabled){var t,e,i=this.options,a=this.container,n=this.containerData,o=a.offsetWidth/n.width;1===o&&a.offsetHeight===n.height||(i.restore&&(t=this.getCanvasData(),e=this.getCropBoxData()),this.render(),i.restore&&(this.setCanvasData(Mt(t,(function(e,i){t[i]=e*o}))),this.setCropBoxData(Mt(e,(function(t,i){e[i]=t*o})))))}},dblclick:function(){this.disabled||this.options.dragMode===I||this.setDragMode(kt(this.dragBox,W)?A:S)},wheel:function(t){var e=this,i=Number(this.options.wheelZoomRatio)||.1,a=1;this.disabled||(t.preventDefault(),this.wheeling||(this.wheeling=!0,setTimeout((function(){e.wheeling=!1}),50),t.deltaY?a=t.deltaY>0?1:-1:t.wheelDelta?a=-t.wheelDelta/120:t.detail&&(a=t.detail>0?1:-1),this.zoom(-a*i,t)))},cropStart:function(t){var e=t.buttons,i=t.button;if(!(this.disabled||("mousedown"===t.type||"pointerdown"===t.type&&"mouse"===t.pointerType)&&(ut(e)&&1!==e||ut(i)&&0!==i||t.ctrlKey))){var a,n=this.options,o=this.pointers;t.changedTouches?Mt(t.changedTouches,(function(t){o[t.identifier]=Jt(t)})):o[t.pointerId||0]=Jt(t),a=Object.keys(o).length>1&&n.zoomable&&n.zoomOnTouch?x:Yt(t.target,R),nt.test(a)&&!1!==It(this.element,$,{originalEvent:t,action:a})&&(t.preventDefault(),this.action=a,this.cropping=!1,a===b&&(this.cropping=!0,Et(this.dragBox,L)))}},cropMove:function(t){var e=this.action;if(!this.disabled&&e){var i=this.pointers;t.preventDefault(),!1!==It(this.element,q,{originalEvent:t,action:e})&&(t.changedTouches?Mt(t.changedTouches,(function(t){Ct(i[t.identifier]||{},Jt(t,!0))})):Ct(i[t.pointerId||0]||{},Jt(t,!0)),this.change(t))}},cropEnd:function(t){if(!this.disabled){var e=this.action,i=this.pointers;t.changedTouches?Mt(t.changedTouches,(function(t){delete i[t.identifier]})):delete i[t.pointerId||0],e&&(t.preventDefault(),Object.keys(i).length||(this.action=""),this.cropping&&(this.cropping=!1,Nt(this.dragBox,L,this.cropped&&this.options.modal)),It(this.element,U,{originalEvent:t,action:e}))}}},de={change:function(t){var e,i=this.options,a=this.canvasData,n=this.containerData,o=this.cropBoxData,r=this.pointers,h=this.action,s=i.aspectRatio,c=o.left,l=o.top,d=o.width,p=o.height,u=c+d,m=l+p,g=0,f=0,v=n.width,W=n.height,N=!0;!s&&t.shiftKey&&(s=d&&p?d/p:1),this.limited&&(g=o.minLeft,f=o.minTop,v=g+Math.min(n.width,a.width,a.left+a.width),W=f+Math.min(n.height,a.height,a.top+a.height));var z=r[Object.keys(r)[0]],Y={x:z.endX-z.startX,y:z.endY-z.startY},L=function(t){switch(t){case M:u+Y.x>v&&(Y.x=v-u);break;case C:c+Y.x<g&&(Y.x=g-c);break;case O:l+Y.y<f&&(Y.y=f-l);break;case D:m+Y.y>W&&(Y.y=W-m)}};switch(h){case w:c+=Y.x,l+=Y.y;break;case M:if(Y.x>=0&&(u>=v||s&&(l<=f||m>=W))){N=!1;break}L(M),(d+=Y.x)<0&&(h=C,c-=d=-d),s&&(p=d/s,l+=(o.height-p)/2);break;case O:if(Y.y<=0&&(l<=f||s&&(c<=g||u>=v))){N=!1;break}L(O),p-=Y.y,l+=Y.y,p<0&&(h=D,l-=p=-p),s&&(d=p*s,c+=(o.width-d)/2);break;case C:if(Y.x<=0&&(c<=g||s&&(l<=f||m>=W))){N=!1;break}L(C),d-=Y.x,c+=Y.x,d<0&&(h=M,c-=d=-d),s&&(p=d/s,l+=(o.height-p)/2);break;case D:if(Y.y>=0&&(m>=W||s&&(c<=g||u>=v))){N=!1;break}L(D),(p+=Y.y)<0&&(h=O,l-=p=-p),s&&(d=p*s,c+=(o.width-d)/2);break;case B:if(s){if(Y.y<=0&&(l<=f||u>=v)){N=!1;break}L(O),p-=Y.y,l+=Y.y,d=p*s}else L(O),L(M),Y.x>=0?u<v?d+=Y.x:Y.y<=0&&l<=f&&(N=!1):d+=Y.x,Y.y<=0?l>f&&(p-=Y.y,l+=Y.y):(p-=Y.y,l+=Y.y);d<0&&p<0?(h=E,l-=p=-p,c-=d=-d):d<0?(h=T,c-=d=-d):p<0&&(h=k,l-=p=-p);break;case T:if(s){if(Y.y<=0&&(l<=f||c<=g)){N=!1;break}L(O),p-=Y.y,l+=Y.y,d=p*s,c+=o.width-d}else L(O),L(C),Y.x<=0?c>g?(d-=Y.x,c+=Y.x):Y.y<=0&&l<=f&&(N=!1):(d-=Y.x,c+=Y.x),Y.y<=0?l>f&&(p-=Y.y,l+=Y.y):(p-=Y.y,l+=Y.y);d<0&&p<0?(h=k,l-=p=-p,c-=d=-d):d<0?(h=B,c-=d=-d):p<0&&(h=E,l-=p=-p);break;case E:if(s){if(Y.x<=0&&(c<=g||m>=W)){N=!1;break}L(C),d-=Y.x,c+=Y.x,p=d/s}else L(D),L(C),Y.x<=0?c>g?(d-=Y.x,c+=Y.x):Y.y>=0&&m>=W&&(N=!1):(d-=Y.x,c+=Y.x),Y.y>=0?m<W&&(p+=Y.y):p+=Y.y;d<0&&p<0?(h=B,l-=p=-p,c-=d=-d):d<0?(h=k,c-=d=-d):p<0&&(h=T,l-=p=-p);break;case k:if(s){if(Y.x>=0&&(u>=v||m>=W)){N=!1;break}L(M),p=(d+=Y.x)/s}else L(D),L(M),Y.x>=0?u<v?d+=Y.x:Y.y>=0&&m>=W&&(N=!1):d+=Y.x,Y.y>=0?m<W&&(p+=Y.y):p+=Y.y;d<0&&p<0?(h=T,l-=p=-p,c-=d=-d):d<0?(h=E,c-=d=-d):p<0&&(h=B,l-=p=-p);break;case y:this.move(Y.x,Y.y),N=!1;break;case x:this.zoom(Zt(r),t),N=!1;break;case b:if(!Y.x||!Y.y){N=!1;break}e=Pt(this.cropper),c=z.startX-e.left,l=z.startY-e.top,d=o.minWidth,p=o.minHeight,Y.x>0?h=Y.y>0?k:B:Y.x<0&&(c-=d,h=Y.y>0?E:T),Y.y<0&&(l-=p),this.cropped||(Wt(this.cropBox,H),this.cropped=!0,this.limited&&this.limitCropBox(!0,!0))}N&&(o.width=d,o.height=p,o.left=c,o.top=l,this.action=h,this.renderCropBox()),Mt(r,(function(t){t.startX=t.endX,t.startY=t.endY}))}},pe={crop:function(){return!this.ready||this.cropped||this.disabled||(this.cropped=!0,this.limitCropBox(!0,!0),this.options.modal&&Et(this.dragBox,L),Wt(this.cropBox,H),this.setCropBoxData(this.initialCropBoxData)),this},reset:function(){return this.ready&&!this.disabled&&(this.imageData=Ct({},this.initialImageData),this.canvasData=Ct({},this.initialCanvasData),this.cropBoxData=Ct({},this.initialCropBoxData),this.renderCanvas(),this.cropped&&this.renderCropBox()),this},clear:function(){return this.cropped&&!this.disabled&&(Ct(this.cropBoxData,{left:0,top:0,width:0,height:0}),this.cropped=!1,this.renderCropBox(),this.limitCanvas(!0,!0),this.renderCanvas(),Wt(this.dragBox,L),Et(this.cropBox,H)),this},replace:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return!this.disabled&&t&&(this.isImg&&(this.element.src=t),e?(this.url=t,this.image.src=t,this.ready&&(this.viewBoxImage.src=t,Mt(this.previews,(function(e){e.getElementsByTagName("img")[0].src=t})))):(this.isImg&&(this.replaced=!0),this.options.data=null,this.uncreate(),this.load(t))),this},enable:function(){return this.ready&&this.disabled&&(this.disabled=!1,Wt(this.cropper,N)),this},disable:function(){return this.ready&&!this.disabled&&(this.disabled=!0,Et(this.cropper,N)),this},destroy:function(){var t=this.element;return t[v]?(t[v]=void 0,this.isImg&&this.replaced&&(t.src=this.originalUrl),this.uncreate(),this):this},move:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,i=this.canvasData,a=i.left,n=i.top;return this.moveTo(gt(t)?t:a+Number(t),gt(e)?e:n+Number(e))},moveTo:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,i=this.canvasData,a=!1;return t=Number(t),e=Number(e),this.ready&&!this.disabled&&this.options.movable&&(ut(t)&&(i.left=t,a=!0),ut(e)&&(i.top=e,a=!0),a&&this.renderCanvas(!0)),this},zoom:function(t,e){var i=this.canvasData;return t=(t=Number(t))<0?1/(1-t):1+t,this.zoomTo(i.width*t/i.naturalWidth,null,e)},zoomTo:function(t,e,i){var a=this.options,n=this.canvasData,o=n.width,r=n.height,h=n.naturalWidth,s=n.naturalHeight;if((t=Number(t))>=0&&this.ready&&!this.disabled&&a.zoomable){var c=h*t,l=s*t;if(!1===It(this.element,it,{ratio:t,oldRatio:o/h,originalEvent:i}))return this;if(i){var d=this.pointers,p=Pt(this.cropper),u=d&&Object.keys(d).length?Gt(d):{pageX:i.pageX,pageY:i.pageY};n.left-=(c-o)*((u.pageX-p.left-n.left)/o),n.top-=(l-r)*((u.pageY-p.top-n.top)/r)}else wt(e)&&ut(e.x)&&ut(e.y)?(n.left-=(c-o)*((e.x-n.left)/o),n.top-=(l-r)*((e.y-n.top)/r)):(n.left-=(c-o)/2,n.top-=(l-r)/2);n.width=c,n.height=l,this.renderCanvas(!0)}return this},rotate:function(t){return this.rotateTo((this.imageData.rotate||0)+Number(t))},rotateTo:function(t){return ut(t=Number(t))&&this.ready&&!this.disabled&&this.options.rotatable&&(this.imageData.rotate=t%360,this.renderCanvas(!0,!0)),this},scaleX:function(t){var e=this.imageData.scaleY;return this.scale(t,ut(e)?e:1)},scaleY:function(t){var e=this.imageData.scaleX;return this.scale(ut(e)?e:1,t)},scale:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,i=this.imageData,a=!1;return t=Number(t),e=Number(e),this.ready&&!this.disabled&&this.options.scalable&&(ut(t)&&(i.scaleX=t,a=!0),ut(e)&&(i.scaleY=e,a=!0),a&&this.renderCanvas(!0,!0)),this},getData:function(){var t,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],i=this.options,a=this.imageData,n=this.canvasData,o=this.cropBoxData;if(this.ready&&this.cropped){t={x:o.left-n.left,y:o.top-n.top,width:o.width,height:o.height};var r=a.width/a.naturalWidth;if(Mt(t,(function(e,i){t[i]=e/r})),e){var h=Math.round(t.y+t.height),s=Math.round(t.x+t.width);t.x=Math.round(t.x),t.y=Math.round(t.y),t.width=s-t.x,t.height=h-t.y}}else t={x:0,y:0,width:0,height:0};return i.rotatable&&(t.rotate=a.rotate||0),i.scalable&&(t.scaleX=a.scaleX||1,t.scaleY=a.scaleY||1),t},setData:function(t){var e=this.options,i=this.imageData,a=this.canvasData,n={};if(this.ready&&!this.disabled&&wt(t)){var o=!1;e.rotatable&&ut(t.rotate)&&t.rotate!==i.rotate&&(i.rotate=t.rotate,o=!0),e.scalable&&(ut(t.scaleX)&&t.scaleX!==i.scaleX&&(i.scaleX=t.scaleX,o=!0),ut(t.scaleY)&&t.scaleY!==i.scaleY&&(i.scaleY=t.scaleY,o=!0)),o&&this.renderCanvas(!0,!0);var r=i.width/i.naturalWidth;ut(t.x)&&(n.left=t.x*r+a.left),ut(t.y)&&(n.top=t.y*r+a.top),ut(t.width)&&(n.width=t.width*r),ut(t.height)&&(n.height=t.height*r),this.setCropBoxData(n)}return this},getContainerData:function(){return this.ready?Ct({},this.containerData):{}},getImageData:function(){return this.sized?Ct({},this.imageData):{}},getCanvasData:function(){var t=this.canvasData,e={};return this.ready&&Mt(["left","top","width","height","naturalWidth","naturalHeight"],(function(i){e[i]=t[i]})),e},setCanvasData:function(t){var e=this.canvasData,i=e.aspectRatio;return this.ready&&!this.disabled&&wt(t)&&(ut(t.left)&&(e.left=t.left),ut(t.top)&&(e.top=t.top),ut(t.width)?(e.width=t.width,e.height=t.width/i):ut(t.height)&&(e.height=t.height,e.width=t.height*i),this.renderCanvas(!0)),this},getCropBoxData:function(){var t,e=this.cropBoxData;return this.ready&&this.cropped&&(t={left:e.left,top:e.top,width:e.width,height:e.height}),t||{}},setCropBoxData:function(t){var e,i,a=this.cropBoxData,n=this.options.aspectRatio;return this.ready&&this.cropped&&!this.disabled&&wt(t)&&(ut(t.left)&&(a.left=t.left),ut(t.top)&&(a.top=t.top),ut(t.width)&&t.width!==a.width&&(e=!0,a.width=t.width),ut(t.height)&&t.height!==a.height&&(i=!0,a.height=t.height),n&&(e?a.height=a.width/n:i&&(a.width=a.height*n)),this.renderCropBox()),this},getCroppedCanvas:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!this.ready||!window.HTMLCanvasElement)return null;var e=this.canvasData,i=_t(this.image,this.imageData,e,t);if(!this.cropped)return i;var a=this.getData(),n=a.x,o=a.y,r=a.width,s=a.height,c=i.width/Math.floor(e.naturalWidth);1!==c&&(n*=c,o*=c,r*=c,s*=c);var l=r/s,d=Vt({aspectRatio:l,width:t.maxWidth||1/0,height:t.maxHeight||1/0}),p=Vt({aspectRatio:l,width:t.minWidth||0,height:t.minHeight||0},"cover"),u=Vt({aspectRatio:l,width:t.width||(1!==c?i.width:r),height:t.height||(1!==c?i.height:s)}),m=u.width,g=u.height;m=Math.min(d.width,Math.max(p.width,m)),g=Math.min(d.height,Math.max(p.height,g));var f=document.createElement("canvas"),v=f.getContext("2d");f.width=Ot(m),f.height=Ot(g),v.fillStyle=t.fillColor||"transparent",v.fillRect(0,0,m,g);var w=t.imageSmoothingEnabled,b=void 0===w||w,y=t.imageSmoothingQuality;v.imageSmoothingEnabled=b,y&&(v.imageSmoothingQuality=y);var x,M,C,D,O,B,T=i.width,k=i.height,E=n,W=o;E<=-r||E>T?(E=0,x=0,C=0,O=0):E<=0?(C=-E,E=0,O=x=Math.min(T,r+E)):E<=T&&(C=0,O=x=Math.min(r,T-E)),x<=0||W<=-s||W>k?(W=0,M=0,D=0,B=0):W<=0?(D=-W,W=0,B=M=Math.min(k,s+W)):W<=k&&(D=0,B=M=Math.min(s,k-W));var N=[E,W,x,M];if(O>0&&B>0){var H=m/r;N.push(C*H,D*H,O*H,B*H)}return v.drawImage.apply(v,[i].concat(h(N.map((function(t){return Math.floor(Ot(t))}))))),f},setAspectRatio:function(t){var e=this.options;return this.disabled||gt(t)||(e.aspectRatio=Math.max(0,t)||NaN,this.ready&&(this.initCropBox(),this.cropped&&this.renderCropBox())),this},setDragMode:function(t){var e=this.options,i=this.dragBox,a=this.face;if(this.ready&&!this.disabled){var n=t===S,o=e.movable&&t===A;t=n||o?t:I,e.dragMode=t,Lt(i,R,t),Nt(i,W,n),Nt(i,X,o),e.cropBoxMovable||(Lt(a,R,t),Nt(a,W,n),Nt(a,X,o))}return this}},ue=m.Cropper,me=function(){function t(i){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(e(this,t),!i||!ht.test(i.tagName))throw new Error("The first argument is required and must be an <img> or <canvas> element.");this.element=i,this.options=Ct({},lt,wt(a)&&a),this.cropped=!1,this.disabled=!1,this.pointers={},this.ready=!1,this.reloading=!1,this.replaced=!1,this.sized=!1,this.sizing=!1,this.init()}return a(t,[{key:"init",value:function(){var t,e=this.element,i=e.tagName.toLowerCase();if(!e[v]){if(e[v]=this,"img"===i){if(this.isImg=!0,t=e.getAttribute("src")||"",this.originalUrl=t,!t)return;t=e.src}else"canvas"===i&&window.HTMLCanvasElement&&(t=e.toDataURL());this.load(t)}}},{key:"load",value:function(t){var e=this;if(t){this.url=t,this.imageData={};var i=this.element,a=this.options;if(a.rotatable||a.scalable||(a.checkOrientation=!1),a.checkOrientation&&window.ArrayBuffer)if(ot.test(t))rt.test(t)?this.read(ae(t)):this.clone();else{var n=new XMLHttpRequest,o=this.clone.bind(this);this.reloading=!0,this.xhr=n,n.onabort=o,n.onerror=o,n.ontimeout=o,n.onprogress=function(){n.getResponseHeader("content-type")!==at&&n.abort()},n.onload=function(){e.read(n.response)},n.onloadend=function(){e.reloading=!1,e.xhr=null},a.checkCrossOrigin&&$t(t)&&i.crossOrigin&&(t=Qt(t)),n.open("GET",t,!0),n.responseType="arraybuffer",n.withCredentials="use-credentials"===i.crossOrigin,n.send()}else this.clone()}}},{key:"read",value:function(t){var e=this.options,i=this.imageData,a=oe(t),n=0,o=1,r=1;if(a>1){this.url=ne(t,at);var h=re(a);n=h.rotate,o=h.scaleX,r=h.scaleY}e.rotatable&&(i.rotate=n),e.scalable&&(i.scaleX=o,i.scaleY=r),this.clone()}},{key:"clone",value:function(){var t=this.element,e=this.url,i=t.crossOrigin,a=e;this.options.checkCrossOrigin&&$t(e)&&(i||(i="anonymous"),a=Qt(e)),this.crossOrigin=i,this.crossOriginUrl=a;var n=document.createElement("img");i&&(n.crossOrigin=i),n.src=a||e,n.alt=t.alt||"The image to crop",this.image=n,n.onload=this.start.bind(this),n.onerror=this.stop.bind(this),Et(n,z),t.parentNode.insertBefore(n,t.nextSibling)}},{key:"start",value:function(){var t=this,e=this.image;e.onload=null,e.onerror=null,this.sizing=!0;var i=m.navigator&&/(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(m.navigator.userAgent),a=function(e,i){Ct(t.imageData,{naturalWidth:e,naturalHeight:i,aspectRatio:e/i}),t.initialImageData=Ct({},t.imageData),t.sizing=!1,t.sized=!0,t.build()};if(!e.naturalWidth||i){var n=document.createElement("img"),o=document.body||document.documentElement;this.sizingImage=n,n.onload=function(){a(n.width,n.height),i||o.removeChild(n)},n.src=e.src,i||(n.style.cssText="left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;",o.appendChild(n))}else a(e.naturalWidth,e.naturalHeight)}},{key:"stop",value:function(){var t=this.image;t.onload=null,t.onerror=null,t.parentNode.removeChild(t),this.image=null}},{key:"build",value:function(){if(this.sized&&!this.ready){var t=this.element,e=this.options,i=this.image,a=t.parentNode,n=document.createElement("div");n.innerHTML=dt;var o=n.querySelector(".".concat(v,"-container")),r=o.querySelector(".".concat(v,"-canvas")),h=o.querySelector(".".concat(v,"-drag-box")),s=o.querySelector(".".concat(v,"-crop-box")),c=s.querySelector(".".concat(v,"-face"));this.container=a,this.cropper=o,this.canvas=r,this.dragBox=h,this.cropBox=s,this.viewBox=o.querySelector(".".concat(v,"-view-box")),this.face=c,r.appendChild(i),Et(t,H),a.insertBefore(o,t.nextSibling),this.isImg||Wt(i,z),this.initPreview(),this.bind(),e.initialAspectRatio=Math.max(0,e.initialAspectRatio)||NaN,e.aspectRatio=Math.max(0,e.aspectRatio)||NaN,e.viewMode=Math.max(0,Math.min(3,Math.round(e.viewMode)))||0,Et(s,H),e.guides||Et(s.getElementsByClassName("".concat(v,"-dashed")),H),e.center||Et(s.getElementsByClassName("".concat(v,"-center")),H),e.background&&Et(o,"".concat(v,"-bg")),e.highlight||Et(c,Y),e.cropBoxMovable&&(Et(c,X),Lt(c,R,w)),e.cropBoxResizable||(Et(s.getElementsByClassName("".concat(v,"-line")),H),Et(s.getElementsByClassName("".concat(v,"-point")),H)),this.render(),this.ready=!0,this.setDragMode(e.dragMode),e.autoCrop&&this.crop(),this.setData(e.data),bt(e.ready)&&At(t,_,e.ready,{once:!0}),It(t,_)}}},{key:"unbuild",value:function(){this.ready&&(this.ready=!1,this.unbind(),this.resetPreview(),this.cropper.parentNode.removeChild(this.cropper),Wt(this.element,H))}},{key:"uncreate",value:function(){this.ready?(this.unbuild(),this.ready=!1,this.cropped=!1):this.sizing?(this.sizingImage.onload=null,this.sizing=!1,this.sized=!1):this.reloading?(this.xhr.onabort=null,this.xhr.abort()):this.image&&this.stop()}}],[{key:"noConflict",value:function(){return window.Cropper=ue,t}},{key:"setDefaults",value:function(t){Ct(lt,wt(t)&&t)}}]),t}();return Ct(me.prototype,he,se,ce,le,de,pe),me}()}}]);
//# sourceMappingURL=17.0b913f0b.chunk.js.map