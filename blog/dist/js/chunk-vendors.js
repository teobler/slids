/*! For license information please see chunk-vendors.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-vendors"],{b9d2:function(e,t,s){},c80e:function(e,t,s){},e648:function(e,t,s){"use strict";s.r(t);const i=window.CustomEvent;var n=function(){try{const e=new i("t",{detail:{a:"b"}});return"t"===e.type&&"b"===e.detail.a}catch(e){}return!1}()?i:function(e,t){const s=document.createEvent("CustomEvent");return t?s.initCustomEvent(e,t.bubbles,t.cancelable,t.detail):s.initCustomEvent(e,!1,!1,void 0),s};let o="",l="";class a{static createNode(e,t="",s=""){const i=document.createElement(e);return t&&(i.id=t),s&&(i.textContent=s),i}static once(e,t,s){const i=n=>{n.target===e&&(e.removeEventListener(t,i),s(n))};e.addEventListener(t,i,!1)}static getTransitionEvent(e){if(o&&!e)return o;o="";const t=e||document.createElement("ws"),s={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},i=Object.keys(s);for(let e=0,n=i.length;e<n&&!o;e++){const n=i[e];void 0!==t.style[n]&&(o=s[n])}return o}static getAnimationEvent(e){if(l&&!e)return l;l="animationend";const t=e||document.createElement("ws"),s={animation:"animationend",OAnimation:"oAnimationEnd",MozAnimation:"animationend",WebkitAnimation:"webkitAnimationEnd"},i=Object.keys(s);for(let e=0,n=i.length;e<n;e++){const n=i[e];if(void 0!==t.style[n]){l=s[n];break}}return l}static hide(e){e.style.display="none"}static show(e){e.style.display=""}static isVisible(e){return null!==e.offsetParent}static fireEvent(e,t,s={}){const i=new n(t,{detail:s});e.dispatchEvent(i)}static toArray(e){return[].slice.call(e)}static isFocusableElement(){let e=!1;if(document.activeElement){const t="inherit"!==document.activeElement.contentEditable&&void 0!==document.activeElement.contentEditable;e=["INPUT","SELECT","OPTION","TEXTAREA"].indexOf(document.activeElement.tagName)>-1||t}return e}static parseSize(e){return Number(e.replace(/[^\d\.]/g,""))}static wrap(e,t){const s=document.createElement(t);return e.parentElement.insertBefore(s,e),s.appendChild(e),s}static after(e,t){const s=t.parentNode;s.lastChild===t?s.appendChild(e):s.insertBefore(e,t.nextSibling)}}const r=["INPUT","SELECT","OPTION","BUTTON","A","TEXTAREA"];var d={ENTER:13,SPACE:32,RE_PAGE:33,AV_PAGE:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,PLUS:[107,171,187],MINUS:[109,173,189],ESCAPE:27,F:70};const h=/#slide=(\d+)/;class c{constructor(e){this.ws_=e,e.el.addEventListener("ws:slide-change",c.onSlideChange_),window.addEventListener("hashchange",this.onHashChange_.bind(this),!1)}onHashChange_(){const e=c.getSlideNumber();null!==e&&this.ws_.goToSlide(e)}static onSlideChange_(e){c.setSlideNumber(e.detail.currentSlide)}static getSlideNumber(){const e=document.location.hash.match(h);let t=0;return Array.isArray(e)&&(t=parseInt(e[1],10)),"number"!=typeof t||t<0||!Array.isArray(e)?t=null:t--,t}static setSlideNumber(e){c.getSlideNumber()!==e-1&&history.pushState({slideI:e-1},`Slide ${e}`,`#slide=${e}`)}}const u="next",_="previous",m="counter",w={VERTICAL:{NEXT:"↓",PREV:"↑"},HORIZONTAL:{NEXT:"→",PREV:"←"}};class p{constructor(e){const t=e.isVertical?w.VERTICAL:w.HORIZONTAL;this.el=a.createNode("div","navigation"),this.next=p.createArrow(u,t.NEXT),this.prev=p.createArrow(_,t.PREV),this.counter=p.createCounter(m,e),this.ws_=e,this.el.appendChild(this.next),this.el.appendChild(this.prev),this.el.appendChild(this.counter),this.ws_.el.appendChild(this.el),this.bindEvents_()}bindEvents_(){this.ws_.el.addEventListener("ws:slide-change",this.onSlideChanged_.bind(this)),this.next.addEventListener("click",this.onButtonClicked_.bind(this)),this.prev.addEventListener("click",this.onButtonClicked_.bind(this)),this.counter.addEventListener("click",this.onButtonClicked_.bind(this))}updateCounter(e,t){this.ws_.options.showIndex?this.counter.childNodes[0].textContent=`${e} / ${t}`:this.counter.textContent=`${e} / ${t}`}static createArrow(e,t){const s=a.createNode("a",e,t);return s.href="#",s.title="Arrow Keys",s}static createCounter(e,t){const s=a.createNode("span",e);if(t.options.showIndex){const e=document.createElement("a");e.href="#",e.title="View all slides",s.appendChild(e)}return s}onSlideChanged_(e){this.updateCounter(e.detail.currentSlide,e.detail.slides)}onButtonClicked_(e){e.preventDefault(),e.target===this.next?this.ws_.goNext():e.target===this.prev?this.ws_.goPrev():this.ws_.toggleZoom()}}const g=window.navigator.userAgent;class b{static isAndroid(){return!!g.match(/Android/i)}static isBlackBerry(){return!!g.match(/BlackBerry/i)}static isiOS(){return!!g.match(/iPad|iPhone|iPod/i)}static isOpera(){return!!g.match(/Opera Mini/i)}static isWindows(){return!!g.match(/IEMobile/i)}static isWindowsPhone(){return!!g.match(/Windows Phone/i)}static isAny(){return b.isAndroid()||b.isBlackBerry()||b.isiOS()||b.isOpera()||b.isWindows()||b.isWindowsPhone()}}const v={START:"touchstart",MOVE:"touchmove",END:"touchend"},y={START:"pointerdown",MOVE:"pointermove",END:"pointerup"};class E{constructor(e){let t;this.ws_=e,this.startX_=0,this.startY_=0,this.endX_=0,this.endY_=0,this.isEnabled=!1,this.isGesture=!1,this.startTouches=[],this.endTouches=[],b.isAny()&&(t=window.PointerEvent&&(b.isWindows()||b.isWindowsPhone())?y:v,this.isEnabled=!0,document.addEventListener(t.START,this.onStart_.bind(this),!1),document.addEventListener(t.MOVE,this.onMove_.bind(this),!1),document.addEventListener(t.END,this.onStop_.bind(this),!1))}onStart_(e){if(this.ws_.isDisabled())return;const t=E.normalizeEventInfo(e);1===e.touches.length?(this.startX_=t.x,this.startY_=t.y,this.endX_=t.x,this.endY_=t.y):e.touches.length>1&&(this.startTouches=E.getTouchCoordinates(e),this.endTouches=this.startTouches,this.isGesture=!0)}onMove_(e){if(this.ws_.isDisabled())return;const t=E.normalizeEventInfo(e);this.isGesture?this.endTouches=E.getTouchCoordinates(e):(this.endX_=t.x,this.endY_=t.y)}onStop_(){if(!this.ws_.isDisabled())if(this.isGesture){Math.sqrt(Math.pow(this.startTouches[0].x-this.startTouches[1].x,2)+Math.pow(this.startTouches[0].y-this.startTouches[1].y,2))>Math.sqrt(Math.pow(this.endTouches[0].x-this.endTouches[1].x,2)+Math.pow(this.endTouches[0].y-this.endTouches[1].y,2))&&this.ws_.toggleZoom(),this.isGesture=!1}else{const e=this.startX_-this.endX_,t=this.startY_-this.endY_;Math.abs(e)>Math.abs(t)&&(e<-this.ws_.options.slideOffset?this.ws_.goPrev():e>this.ws_.options.slideOffset&&this.ws_.goNext())}}static getTouchCoordinates(e){return[{x:e.touches[0].clientX,y:e.touches[0].clientY},{x:e.touches[1].clientX,y:e.touches[1].clientY}]}static normalizeEventInfo(e){let t={pageX:0,pageY:0};return void 0!==e.changedTouches?t=e.changedTouches[0]:void 0!==e.originalEvent&&void 0!==e.originalEvent.changedTouches&&(t=e.originalEvent.changedTouches[0]),{x:e.offsetX||e.layerX||t.pageX,y:e.offsetY||e.layerY||t.pageY}}}const S="slide",f="current",A="dom:enter",T="dom:leave",N="slide:enable",L="slide:disable";class C{constructor(e,t){this.el=e,this.parent=e.parentNode,this.i=t,this.el.id=`section-${t+1}`,this.el.classList.add(S),this.hide()}hide(){a.hide(this.el),this.el.classList.remove(f)}show(){a.show(this.el),this.el.classList.add(f)}moveAfterLast(){const e=this.parent.childNodes[this.parent.childElementCount-1];this.fire_(T),this.parent.insertBefore(this.el,e.nextSibling),this.fire_(A)}moveBeforeFirst(){const e=this.parent.childNodes[0];this.fire_(T),this.parent.insertBefore(this.el,e),this.fire_(A)}enable(){this.fire_(N)}disable(){this.fire_(L)}fire_(e){a.fireEvent(this.el,e,{slide:this})}static isCandidate(e){return 1===e.nodeType&&"SECTION"===e.tagName}static getSectionFromEl(e){let t=e,s=null,i=null;for(;t.parentElement&&!t.classList.contains(S);)t=t.parentElement;return t.classList.contains(S)&&(s=t,i=parseInt(s.id.replace("section-",""),10)),{section:s,i:i}}}class k{constructor(e){this.ws_=e;const t=a.toArray(this.ws_.el.querySelectorAll("video"));t.length&&t.forEach(t=>{if(!t.hasAttribute("autoplay"))return;t.removeAttribute("autoplay"),t.pause(),t.currentTime=0;const{i:s}=C.getSectionFromEl(t),i=e.slides[s-1];i.video=t,i.el.addEventListener(N,k.onSectionEnabled),i.el.addEventListener(L,k.onSectionDisabled)})}static onSectionEnabled(e){e.detail.slide.video.play()}static onSectionDisabled(e){e.detail.slide.video.pause()}}class P{constructor(e){this.ready=!1,this.onReadyCb=null,this.slide=C.getSectionFromEl(e).section,this.autoplay=void 0!==e.dataset.autoplay,this.isMuted=void 0!==e.dataset.mute,this.options={videoId:e.dataset.youtubeId,playerVars:this.getPlayerVars(e),events:{onReady:this.onPlayerReady.bind(this)}},this.el=e,this.timeout=null,this.create()}destroy(){this.currentTime=this.player.getCurrentTime(),this.player.destroy(),this.player=null,this.el=this.slide.querySelector("[data-youtube]"),this.ready=!1}create(){this.player=new YT.Player(this.el,this.options),this.el=this.player.getIframe()}onPlayerReady(){this.ready=!0,this.currentTime&&(this.player.seekTo(this.currentTime,!0),this.player.pauseVideo(),this.currentTime=null),this.timeout&&1!==this.player.getPlayerState()&&this.play(),this.onReadyCb&&(this.onReadyCb(),this.onReadyCb=null)}play(){this.ready?(this.timeout=setTimeout(()=>{this.timeout=null},1e3),this.isMuted?this.player.mute():this.player.unMute(),this.player.playVideo()):this.onReadyCb=this.play}pause(){this.player&&this.player.pauseVideo&&1===this.player.getPlayerState()&&this.player.pauseVideo()}getPlayerVars(e){const t={modestbranding:1,rel:0,origin:window.location.origin};return this.slide.classList.contains("fullscreen")&&(t.disablekb=1),void 0!==e.dataset.noControls&&(t.controls=0,t.showinfo=0),void 0!==e.dataset.loop&&(t.loop=1,t.playlist=e.dataset.youtubeId),t}}class x{constructor(e){this.ws_=e,this.videos=a.toArray(this.ws_.el.querySelectorAll("[data-youtube]")),this.videos.length&&this.inject()}onYTReady(){this.videos.forEach(e=>{const t=new P(e);if(void 0!==e.dataset.autoplay){const{i:e}=C.getSectionFromEl(t.el),s=this.ws_.slides[e-1];s.player=t,s.el.addEventListener(N,x.onSlideEvent),s.el.addEventListener(L,x.onSlideEvent),s.el.addEventListener(A,x.onSlideEvent),s.el.addEventListener(T,x.onSlideEvent),this.ws_.currentSlide_===s&&x.onSectionEnabled(s)}})}inject(){window.onYouTubeIframeAPIReady=this.onYTReady.bind(this);const e=document.createElement("script");e.src="https://www.youtube.com/iframe_api";const t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}static onSlideEvent(e){const t=e.detail.slide;switch(e.type){case N:x.onSectionEnabled(t);break;case L:x.onSectionDisabled(t);break;case T:t.player.destroy();break;case A:t.player.create()}}static onSectionEnabled(e){e.player.autoplay&&e.player.play()}static onSectionDisabled(e){e.player.pause()}}var I={swing:function(e){return.5-Math.cos(e*Math.PI)/2}};let O=document.getElementById("webslides");function z(e,t=500,s=(()=>{}),i=null){O=i||document.getElementById("webslides");const n=e-O.scrollTop,o=O.scrollTop;if(!t)return O.scrollTop=e,void s();const l=i=>{i+=16;const a=Math.min(1,i/t),r=I.swing(a,i*a,e,n,t);O.scrollTop=Math.floor(o+r*n),i<t?setTimeout(()=>l(i),16):s()};l(0)}const M="grid",V="column",D="wrap-zoom",R="wrap",B="current",F="ws-ready-zoom";var K={AutoSlide:class{constructor(e){this.ws_=e,this.interval_=null,this.time=this.ws_.options.autoslide,this.time&&(a.once(e.el,"ws:init",this.play.bind(this)),document.body.addEventListener("focus",this.onFocus.bind(this)))}onFocus(){a.isFocusableElement()?this.stop():null===this.interval_&&this.play()}play(e){"number"!=typeof e&&(e=this.time),this.time=e,!this.interval_&&"number"==typeof e&&e>0&&(this.interval_=setInterval(this.ws_.goNext.bind(this.ws_),e))}stop(){this.interval_&&(clearInterval(this.interval_),this.interval_=null)}},ClickNav:class{constructor(e){this.ws_=e,e.options.changeOnClick&&this.ws_.el.addEventListener("click",this.onClick_.bind(this))}onClick_(e){r.indexOf(e.target.tagName)<0&&void 0===e.target.dataset.preventNav&&this.ws_.goNext()}},Grid:class{constructor(e){this.ws_=e;const t="body.baseline {\n                  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYAgMAAACdGdVrAAAACVBMVEUAAAAtXsUtXcPDDPUWAAAAA3RSTlMAZmHzZFkxAAAAFklEQVQI12MAA9bBR3ExhAJB1iooBQBGwgVEs/QtuAAAAABJRU5ErkJggg==) left top .8rem/.8rem;\n                }",s=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",i.styleSheet?i.styleSheet.cssText=t:i.appendChild(document.createTextNode(t)),s.appendChild(i),document.addEventListener("keydown",this.onKeyPress_.bind(this),!1)}onKeyPress_(e){e.which===d.ENTER&&document.body.classList.toggle("baseline")}},Hash:c,Keyboard:class{constructor(e){this.ws_=e,document.addEventListener("keydown",this.onKeyPress_.bind(this),!1)}onKeyPress_(e){let t,s;if(!a.isFocusableElement()&&!this.ws_.isDisabled()){switch(e.which){case d.AV_PAGE:t=this.ws_.goNext;break;case d.SPACE:t=e.shiftKey?this.ws_.goPrev:this.ws_.goNext;break;case d.RE_PAGE:t=this.ws_.goPrev;break;case d.HOME:t=this.ws_.goToSlide,s=0;break;case d.END:t=this.ws_.goToSlide,s=this.ws_.maxSlide_-1;break;case d.DOWN:t=this.ws_.isVertical?this.ws_.goNext:null;break;case d.UP:t=this.ws_.isVertical?this.ws_.goPrev:null;break;case d.LEFT:t=this.ws_.isVertical?null:this.ws_.goPrev;break;case d.RIGHT:t=this.ws_.isVertical?null:this.ws_.goNext;break;case d.F:e.metaKey||e.ctrlKey||(t=this.ws_.fullscreen)}t&&(t.call(this.ws_,s),e.preventDefault())}}},Navigation:p,Scroll:class{constructor(e){this.ws_=e,this.scrollContainer_=e.el,this.isGoingUp_=!1,this.isGoingLeft_=!1,this.timeout_=null,this.ws_.options.navigateOnScroll&&(b.isAny()||(this.scrollContainer_.addEventListener("wheel",this.onMouseWheel_.bind(this)),e.isVertical||e.el.addEventListener("ws:slide-change",this.onSlideChange_.bind(this))))}onSlideChange_(){this.timeout_=setTimeout(()=>{this.timeout_=null},this.ws_.options.scrollWait)}onMouseWheel_(e){if(this.ws_.isDisabled())return;if(this.ws_.isMoving||this.timeout_)return void e.preventDefault();const t=e.deltaMode*this.ws_.options.minWheelDelta,{deltaY:s,deltaX:i}=e,n=this.ws_.isVertical,o=Math.abs(i)>Math.abs(s);if(this.isGoingUp_=s<0,this.isGoingLeft_=i<0,o){if(n)return;e.preventDefault()}(Math.abs(s+t)>=this.ws_.options.minWheelDelta||Math.abs(i+t)>=this.ws_.options.minWheelDelta)&&(o&&this.isGoingLeft_||!o&&this.isGoingUp_?this.ws_.goPrev():this.ws_.goNext(),e.preventDefault())}},Touch:E,Video:k,YouTube:x,Zoom:class{constructor(e){this.ws_=e,this.zws_={},this.isZoomed_=!1,this.preBuildZoom_(),document.body.addEventListener("keydown",this.onKeyDown.bind(this))}onKeyDown(e){!this.isZoomed_&&d.MINUS.some(t=>t===e.which)?this.zoomIn():this.isZoomed_&&(d.PLUS.some(t=>t===e.which)||e.which===d.ESCAPE)&&this.zoomOut()}preBuildZoom_(){this.zws_.el=this.ws_.el.cloneNode(),this.zws_.el.id="webslides-zoomed",this.zws_.wrap=a.createNode("div"),this.zws_.wrap.className=R,this.zws_.el.appendChild(this.zws_.wrap),this.zws_.grid=a.createNode("div"),this.zws_.grid.className=M,this.zws_.wrap.appendChild(this.zws_.grid),this.zws_.el.addEventListener("click",()=>this.toggleZoom()),this.zws_.slides=[].map.call(this.ws_.slides,(e,t)=>{const s=e.el.cloneNode(!0);return this.zws_.grid.appendChild(s),new C(s,t)}),this.disable(),a.after(this.zws_.el,this.ws_.el),this.zws_.slides.forEach(e=>this.createSlideBlock_(e))}createSlideBlock_(e){const t=a.wrap(e.el,"div");t.className=D,t.setAttribute("id",`zoomed-${e.el.getAttribute("id")}`);const s=a.wrap(t,"div");s.className=V;const i=a.createNode("div");i.className="zoom-layer",i.addEventListener("click",t=>{t.stopPropagation(),this.zoomOut(),this.ws_.goToSlide(e.i)}),t.appendChild(i);const n=a.createNode("p","",`${e.i+1}`);n.className="text-slide-number",s.appendChild(n)}toggleZoom(){this.isZoomed_?this.zoomOut():this.zoomIn()}zoomIn(){if(!this.ws_.options.showIndex)return;this.enable();const e=this.ws_.currentSlide_.el.id,t=this.zws_.el.querySelector(`.${D}.${B}`);t&&t.classList.remove(B);const s=this.zws_.el.querySelector(`#zoomed-${e}`);s.classList.add(B),this.isZoomed_=!0,document.documentElement.classList.add(F),setTimeout(()=>{this.ws_.disable(),this.zws_.el.classList.add("in");const e=window.getComputedStyle(this.zws_.grid),t=document.body;z(s.parentNode.offsetTop+a.parseSize(e.paddingTop),50,()=>{},t)},50)}zoomOut(){this.ws_.options.showIndex&&(this.zws_.el.classList.remove("in"),setTimeout(()=>{this.ws_.enable(),this.disable(),this.isZoomed_=!1,document.documentElement.classList.remove(F)},400))}disable(){this.zws_.el.classList.add("disabled")}enable(){this.zws_.el.classList.remove("disabled")}}};const W="vertical",G="ws-ready",q="disabled",X={autoslide:K.AutoSlide,clickNav:K.ClickNav,grid:K.Grid,hash:K.Hash,keyboard:K.Keyboard,nav:K.Navigation,scroll:K.Scroll,touch:K.Touch,video:K.Video,youtube:K.YouTube,zoom:K.Zoom};class Y{constructor({autoslide:e=!1,changeOnClick:t=!1,loop:s=!0,minWheelDelta:i=40,navigateOnScroll:n=!0,scrollWait:o=450,slideOffset:l=50,showIndex:a=!0}={}){if(this.el=document.getElementById("webslides"),!this.el)throw new Error("Couldn't find the webslides container!");this.isMoving=!1,this.slides=null,this.currentSlideI_=-1,this.currentSlide_=null,this.maxSlide_=0,this.isVertical=this.el.classList.contains(W),this.plugins={},this.options={autoslide:e,changeOnClick:t,loop:s,minWheelDelta:i,navigateOnScroll:n,scrollWait:o,slideOffset:l,showIndex:a},this.initialised=!1,this.removeChildren_(),this.grabSlides_(),this.createPlugins_(),this.initSlides_(),this.onInit_()}removeChildren_(){const e=this.el.childNodes;let t=e.length;for(;t--;){const s=e[t];C.isCandidate(s)||this.el.removeChild(s)}}createPlugins_(){Object.keys(X).forEach(e=>{const t=X[e];this.plugins[e]=new t(this)})}onInit_(){this.initialised=!0,a.fireEvent(this.el,"ws:init"),document.documentElement.classList.add(G)}grabSlides_(){this.slides=a.toArray(this.el.childNodes).map((e,t)=>new C(e,t)),this.maxSlide_=this.slides.length}goToSlide(e,t=null){if(this.isValidIndexSlide_(e)&&!this.isMoving&&this.currentSlideI_!==e){this.isMoving=!0;let s=!1;null!==t?s=t:this.currentSlideI_>=0&&(s=e>this.currentSlideI_);const i=this.slides[e];null===this.currentSlide_||!this.isVertical||this.plugins.touch&&this.plugins.touch.isEnabled?this.transitionToSlide_(s,i,this.onSlideChange_):this.scrollTransitionToSlide_(s,i,this.onSlideChange_)}}scrollTransitionToSlide_(e,t,s){this.el.style.overflow="hidden",e?t.show():(t.moveBeforeFirst(),t.show(),z(this.currentSlide_.el.offsetTop,0)),z(t.el.offsetTop,500,()=>{this.currentSlide_.hide(),e&&this.currentSlide_.moveAfterLast(),this.el.style.overflow="auto",setTimeout(()=>{s.call(this,t)},150)})}transitionToSlide_(e,t,s){z(0,0);let i="slideInRight";e||(t.moveBeforeFirst(),i="slideInLeft"),this.currentSlide_&&(e&&this.currentSlide_.moveAfterLast(),this.currentSlide_.hide()),t.show(),this.initialised&&this.plugins.touch&&this.plugins.touch.isEnabled?(a.once(t.el,a.getAnimationEvent(),()=>{t.el.classList.remove(i),s.call(this,t)}),t.el.classList.add(i)):s.call(this,t)}onSlideChange_(e){this.currentSlide_&&this.currentSlide_.disable(),this.currentSlide_=e,this.currentSlideI_=e.i,this.currentSlide_.enable(),this.isMoving=!1,a.fireEvent(this.el,"ws:slide-change",{slides:this.maxSlide_,currentSlide0:this.currentSlideI_,currentSlide:this.currentSlideI_+1})}goNext(){let e=this.currentSlideI_+1;if(e>=this.maxSlide_){if(!this.options.loop)return;e=0}this.goToSlide(e,!0)}goPrev(){let e=this.currentSlideI_-1;if(e<0){if(!this.options.loop)return;e=this.maxSlide_-1}this.goToSlide(e,!1)}isValidIndexSlide_(e){return"number"==typeof e&&e>=0&&e<this.maxSlide_}initSlides_(){let e=this.plugins.hash.constructor.getSlideNumber();if((null===e||e>=this.maxSlide_)&&(e=0),0!==e){let t=0;for(;t<e;)this.slides[t].moveAfterLast(),t++}this.goToSlide(e)}toggleZoom(){this.options.showIndex&&this.plugins.zoom.toggleZoom()}disable(){this.el.classList.add(q),this.plugins.autoslide&&!1!==this.plugins.autoslide.time&&this.plugins.autoslide.stop()}enable(){this.el.classList.remove(q),this.plugins.autoslide&&!1!==this.plugins.autoslide.time&&this.plugins.autoslide.play()}isDisabled(){return this.el.classList.contains(q)}fullscreen(){const e=document.documentElement;if(document.fullscreen||document.webkitIsFullScreen||document.mozFullScreen||document.msFullScreenElement){(document.exitFullScreen||document.webkitCancelFullScreen||document.mozCancelFullScreen||document.msExitFullscreen).call(document)}else{(e.requestFullscreen||e.webkitRequestFullScreen||e.mozRequestFullScreen||e.msRequestFullscreen).call(e)}}static registerPlugin(e,t){X[e]=t}}s("c80e"),s("e8c3"),s("b9d2");const Z=[];function U(e){return Z.slice.call(e)}class H{constructor(e){this.ws_=e,this.isSpeakerMode_=this.ws_.el.classList.contains("with-note");const t=a.toArray(this.ws_.el.querySelectorAll(".speaker-note"));t.length&&t.forEach((t,s)=>{const{i:i}=C.getSectionFromEl(t),n=e.slides[i-1];n.noteNode=t,this.isSpeakerMode_||(n.el.addEventListener(N,H.onSectionEnter),n.el.addEventListener(L,H.onSectionDisabled))})}static toggleNote(e){110!==e.which||e.metaKey||e.ctrlKey||e.shiftKey||this.classList.toggle("show")}static onSectionDisabled(e){const t=e.detail.slide;document.removeEventListener("keypress",H.toggleNote.bind(t.noteNode))}static onSectionEnter(e){const t=e.detail.slide;document.addEventListener("keypress",H.toggleNote.bind(t.noteNode))}}class ${constructor(e){this.ws_=e;const t=a.toArray(this.ws_.el.querySelectorAll(".echarts")),s=a.toArray(this.ws_.el.querySelectorAll(".echarts-data"));t.length&&t.forEach((t,i)=>{const{i:n}=C.getSectionFromEl(t),o=e.slides[n-1];o.echartsInit=!1,o.echartsNode=t,o.echartsData=s[i],o.el.addEventListener(N,$.onSectionEnter)})}static onSectionEnter(e){const t=e.detail.slide||{},{echartsNode:s,echartsInit:i,echartsData:n}=t;i||setTimeout(()=>{const e=window.pluginsOptions&&window.pluginsOptions.echarts?window.pluginsOptions.echarts.theme:void 0,i=echarts.init(s,e);try{const e=JSON.parse(n.innerHTML.trim());i.setOption(e),t.echartsInit=!0}catch(e){}},800)}}class j{constructor(e){this.ws_=e;const t=a.toArray(this.ws_.el.querySelectorAll(".lang-mermaid"));t.length&&t.forEach((t,s)=>{const{i:i}=C.getSectionFromEl(t),n=e.slides[i-1];n.mermaidInit=!1,n.mermaidNode=t,n.el.addEventListener(N,j.onSectionEnter)})}static onSectionEnter(e){const t=e.detail.slide||{},{mermaidNode:s,mermaidInit:i}=t;!i&&window.mermaid&&setTimeout(()=>{const e=window.pluginsOptions&&window.pluginsOptions.mermaid?window.pluginsOptions.mermaid.theme:void 0;mermaid.initialize({theme:e||"default"}),s.style.visibility="visible",mermaid.init(void 0,s),t.mermaidInit=!0},800)}}Y.registerPlugin("echarts",$),Y.registerPlugin("mermaid",j),Y.registerPlugin("keyboard",class{constructor(e){this.ws_=e,this.enable_=!1,this.init_(),this.bindEvent_()}bindEvent_(){this.ws_.el.addEventListener("ws:slide-change",this.slideBuild_.bind(this),!1),document.addEventListener("keydown",this.onKeyPress_.bind(this),!1),document.addEventListener("control:keydown",this.onKeyPress_.bind(this),!1)}init_(){const e=U(this.ws_.el.querySelectorAll(".build>*"));e.length&&e.forEach(e=>{e.classList.add("tobuild")})}onKeyPress_(e){let t,s;if(!a.isFocusableElement()&&!this.ws_.isDisabled()){switch(e.which){case d.AV_PAGE:t=this.enable_?this.goNext:this.ws_.goNext;break;case d.SPACE:t=e.shiftKey?this.enable_?this.goPrev:this.ws_.goPrev:this.enable_?this.goNext:this.ws_.goNext;break;case d.RE_PAGE:t=this.enable_?this.goPrev:this.ws_.goPrev;break;case d.HOME:t=this.ws_.goToSlide,s=0;break;case d.END:t=this.ws_.goToSlide,s=this.ws_.maxSlide_-1;break;case d.DOWN:t=this.ws_.isVertical?this.enable_?this.goNext:this.ws_.goNext:null;break;case d.UP:t=this.ws_.isVertical?this.enable_?this.goPrev:this.ws_.goPrev:null;break;case d.RIGHT:t=this.ws_.isVertical?null:this.enable_?this.goNext:this.ws_.goNext;break;case d.LEFT:t=this.ws_.isVertical?null:this.enable_?this.goPrev:this.ws_.goPrev;break;case d.F:e.metaKey||e.ctrlKey||(t=this.ws_.fullscreen)}t&&(t.call(this.enable_?this:this.ws_,s),e.preventDefault())}}goNext(){const e=this.curSlide_.el,t=U(e.querySelectorAll(".building"));let s;if(t.length)for(;s=t.shift();)s=s.classList,s.remove("building"),s.add("builded");const i=U(e.querySelectorAll(".tobuild"));return i.length?(s=i[0].classList,s.remove("tobuild"),s.add("building"),!0):(this.enable_=!1,this.ws_.goNext(),!1)}goPrev(){const e=this.curSlide_.el,t=U(e.querySelectorAll(".building"));let s,i,n=t.length;if(n)for(;s=t.shift();){let e=s.classList;e.remove("building"),e.add("tobuild"),i=s}const o=U(e.querySelectorAll(".builded"));if(!o.length&&!n)return this.enable_=!1,this.ws_.goPrev(),!1;let l=o.pop();return l&&(i||(i=l),s=l.classList,s.remove("builded"),0===n?(s.add("tobuild"),l=o.pop(),l&&(l.classList.remove("builded"),l.classList.add("building"))):s.add("building")),!0}slideBuild_(e){if(e&&e.detail){const t=e.detail.currentSlide0,s=this.ws_.slides[t];if(this.curSlide_=s,U(s.el.querySelectorAll(".tobuild,.builded")).length)return void(this.enable_=!0)}this.enable_=!1}}),Y.registerPlugin("speakermode",class{constructor(e){this.ws_=e,this.init_()}bindEvent_(){window.addEventListener("message",this.evtHandler_,!1),document.addEventListener("keydown",this.onKeyPress_.bind(this),!1)}onKeyPress_(e){e.detail&&e.detail.salt||!this.listener_||this.listener_.postMessage({which:e.which,shiftKey:e.shiftKey},"*")}evtHandler_(e){const t=e.data,{which:s,shiftKey:i}=t,n=new CustomEvent("control:keydown",{detail:{salt:!0}});n.which=s,n.shiftKey=i,document.dispatchEvent(n)}init_(){const e=function(e){let t={};return(e||location.search.substring(1)).split("&").forEach(e=>{e=e.split("="),t[e[0].toLowerCase()]=e[1]}),t}();if("speaker"===e.mode){this.ws_.el.classList.add("with-note");const e=location.href.replace("mode=speaker","mode=audience"),t=screen.width,s=.8*t,i=`height=${.8*screen.height},width=${s},top=10,left=${(t-s)/2}`+",toolbar=no,menubar=no,location=yes,resizable=yes,scrollbars=no,status=no";this.listener_=this.popup_=window.open(e,"ppt",i),window.addEventListener("beforeunload",this.closeClient_.bind(this),!1),this.bindEvent_()}else"audience"===e.mode&&(this.listener_=window.opener,this.bindEvent_())}closeClient_(){this.popup_&&this.popup_.close&&this.popup_.close()}}),Y.registerPlugin("speakernote",H);var J=Y;"object"==typeof window&&Array.isArray(window.WSPlugins_)&&WSPlugins_.forEach(({id:e,apply:t})=>{J.registerPlugin(e,t)}),window.WebSlides=J},e8c3:function(e,t,s){}}]);