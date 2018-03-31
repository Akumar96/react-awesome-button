!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("prop-types")):"function"==typeof define&&define.amd?define(["react","prop-types"],t):"object"==typeof exports?exports["react-awesome-button"]=t(require("react"),require("prop-types")):e["react-awesome-button"]=t(e.React,e.PropTypes)}("undefined"!=typeof self?self:this,function(e,t){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=4)}([function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(5);Object.defineProperty(t,"AwesomeButton",{enumerable:!0,get:function(){return r(o).default}});var i=n(6);Object.defineProperty(t,"AwesomeButtonSocial",{enumerable:!0,get:function(){return r(i).default}});var c=n(9);Object.defineProperty(t,"AwesomeButtonProgress",{enumerable:!0,get:function(){return r(c).default}})},function(e,t,n){"use strict";function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"&";return Object.entries(e).map(function(e){var t=a(e,2);return t[0]+"="+t[1]}).join(t)}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1];if(!t)return e.join(" ").trim();for(var n=[],r=e.length;r--;)t[e[r]]&&n.push(t[e[r]]);return n.join(" ").trim()}function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments[1];return t?t[e]||e:e}function c(e,t,n){if(!e)return!1;var r=t.charAt(0).toUpperCase()+t.slice(1);return void 0!==e.style["Webkit"+r]?e.addEventListener("webkit"+r+"End",n):void 0!==e.style.OTransition?e.addEventListener("o"+t+"End",n):e.addEventListener(t+"End",n)}function l(e){var t=e.element,n=e.root,r=e.cssModule,i=void 0===r?null:r,c=e.state,l=void 0===c?null:c;if(!t)return!1;if(!l)return t.classList.remove(o([n+"--"+u[0]],i),o([n+"--"+u[1]],i),o([n+"--"+u[2]],i)),!1;for(var s=u.filter(function(e){return e!==l}),a=s.length;a--;)t.classList.remove(o([n+"--"+s[a]],i));return t.classList.add(o([n+"--"+l],i)),!0}function s(e){var t=e.event,n=e.button,r=e.content,o=e.className,i=n.getBoundingClientRect(),l=window.pageYOffset||document.documentElement.scrolltop||0,s=document.createElement("span"),a=i.width<50?3*i.width:2*i.width;s.className=o,s.style.top="-"+(a/2-(t.pageY-i.top-l))+"px",s.style.left="-"+(a/2-(t.pageX-i.left))+"px",s.style.width=a+"px",s.style.height=a+"px",c(s,"animation",function(){window.requestAnimationFrame(function(){r.removeChild(s)})}),window.requestAnimationFrame(function(){r.appendChild(s)})}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var c,l=e[Symbol.iterator]();!(r=(c=l.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&l.return&&l.return()}finally{if(o)throw i}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();t.serialize=r,t.classToModules=o,t.getClassName=i,t.setCssEndEvent=c,t.toggleMoveClasses=l,t.createBubbleEffect=s;var u=["middle","left","right"]},function(e,t,n){e.exports=n(2)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),d=r(u),p=n(1),f=(r(p),n(3)),h="aws-btn",m=function(e){return d.default.createElement("a",e)},v=function(e){return d.default.createElement("button",e)},b=function(e){function t(e){i(this,t);var n=c(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.rootElement=e.rootElement||h,n.animationStage=0,n.extraProps={},n.state={disabled:e.disabled||e.placeholder&&!e.children},n.checkProps(e),n}return l(t,e),a(t,[{key:"componentDidMount",value:function(){this.container=this.button&&this.button.parentNode}},{key:"componentWillReceiveProps",value:function(e){this.checkPlaceholder(e),this.checkProps(e),this.checkActive(e)}},{key:"getRootClassName",value:function(){var e=this.rootElement,t=this.props,n=t.type,r=t.size,i=t.placeholder,c=t.children,l=t.visible,s=t.cssModule,a=this.state,u=a.disabled,d=a.pressPosition,p=[this.rootElement,n&&e+"--"+n,r&&e+"--"+r,l&&e+"--visible",i&&!c&&e+"--placeholder"||null];return!0===u&&p.push(e+"--disabled"),d&&p.push(d),this.props.className&&p.push.apply(p,o(this.props.className.split(" "))),s&&s["aws-btn"]?(0,f.classToModules)(p,s):p.join(" ").trim().replace(/[\s]+/gi," ")}},{key:"checkActive",value:function(e){e.active!==this.props.active&&(!0===e.active?this.setState({pressPosition:this.rootElement+"--active"}):this.clearPress(!0))}},{key:"checkProps",value:function(e){var t=e.to,n=e.href,r=e.target,o=e.element;this.extraProps.to=t||null,this.extraProps.href=n||null,this.extraProps.target=r||null,this.renderComponent=o||(this.props.href?m:v)}},{key:"checkPlaceholder",value:function(e){var t=e.disabled,n=e.placeholder,r=e.children;!0===n?r?this.setState({disabled:!1}):this.setState({disabled:!0}):this.setState({disabled:t})}},{key:"clearPress",value:function(e){(0,f.toggleMoveClasses)({element:this.container,root:this.rootElement,cssModule:this.props.cssModule});var t=this.props.active&&!e?this.rootElement+"--active":null;this.setState({pressPosition:t})}},{key:"action",value:function(){this.props.action&&this.button&&this.props.action(this.container)}},{key:"createBubble",value:function(e){(0,f.createBubbleEffect)({event:e,button:this.button,content:this.content,className:(0,f.getClassName)(this.rootElement+"__bubble",this.props.cssModule)})}},{key:"moveEvents",value:function(){var e=this,t={onMouseLeave:function(){e.clearPress()},onMouseDown:function(t){!0===e.state.disabled||!0===e.props.blocked||t&&1!==t.nativeEvent.which||(e.pressed=(new Date).getTime(),e.setState({pressPosition:e.rootElement+"--active"}))},onMouseUp:function(t){if(!0===e.state.disabled||!0===e.props.blocked)return t.preventDefault(),void t.stopPropagation();e.clearTimer&&clearTimeout(e.clearTimer);var n=(new Date).getTime()-e.pressed;if(!0===e.props.bubbles&&e.createBubble(t),"undefined"!=typeof window&&e.button){var r=new Event("action");e.button.dispatchEvent(r)}e.action(),e.clearTimer=setTimeout(function(){e.clearPress()},100-n)}};return!0===this.props.moveEvents?t.onMouseMove=function(t){if(!0!==e.state.disabled){var n=e.button,r=n.getBoundingClientRect(),o=r.left,i=n.offsetWidth,c=t.pageX<o+.3*i?"left":t.pageX>o+.65*i?"right":"middle";(0,f.toggleMoveClasses)({element:e.container,root:e.rootElement,cssModule:e.props.cssModule,state:c})}}:t.onMouseEnter=function(){e.container.classList.add((0,f.classToModules)([e.rootElement+"--middle"],e.props.cssModule))},t}},{key:"render",value:function(){var e=this,t=this.renderComponent,n=this.props,r=n.title,o=n.style,i=n.cssModule,c=n.children;return d.default.createElement(t,s({style:o,className:this.getRootClassName(),role:"button",title:r},this.extraProps,this.moveEvents()),d.default.createElement("span",{ref:function(t){e.button=t},className:(0,f.getClassName)(this.rootElement+"__wrapper",i)},d.default.createElement("span",{ref:function(t){e.content=t},className:(0,f.getClassName)(this.rootElement+"__content",i)},d.default.createElement("span",{ref:function(t){e.child=t}},c))))}}]),t}(d.default.Component);b.defaultProps={action:null,bubbles:!1,blocked:!1,cssModule:null,children:null,disabled:!1,title:null,element:null,href:null,className:null,moveEvents:!0,placeholder:!1,rootElement:h,size:null,style:{},target:null,to:null,type:"primary",visible:!0,active:!1},t.default=b},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(0),a=r(s),u=n(1),d=(r(u),n(2)),p=n(7),f=r(p),h=n(8),m=r(h),v=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.action=function(){if(null===n.props.href){var e=(0,f.default)({type:n.props.type,height:600,width:575,url:n.getUrl(),message:n.getMessage(),user:n.props.user,phone:n.props.phone});n.window&&window.open(e.url,e.title,e.extra)}},n.window="undefined"!=typeof window,n}return c(t,e),l(t,[{key:"getUrl",value:function(){return this.props.url?this.props.url:this.window?window.location.href:null}},{key:"getMessage",value:function(){if(this.props.message)return this.props.message;if("undefined"!==this.window){var e=document.querySelector("title");if(e)return e.innerHTML}return null}},{key:"getImage",value:function(){if(null!==this.props.image)return this.props.image;if(null!==this.window){var e=document.querySelector('meta[property="og:image"]');if(e)return e.getAttribute("content")}return null}},{key:"render",value:function(){var e=this.props,t=e.cssModule,n=e.children,r=e.type,o=e.icon,i=e.iconWidth,c=e.iconHeight,l=e.href,s=e.size,u=e.target;return a.default.createElement(d.AwesomeButton,{type:r,size:s,target:u,cssModule:t,bubbles:!0,action:this.action,href:l},o&&(0,m.default)({type:r,width:i,height:c})," ",n)}}]),t}(a.default.Component);v.defaultProps={bubbles:!1,children:null,cssModule:null,disabled:!1,element:null,height:null,href:null,icon:!0,iconHeight:23,iconWidth:30,image:null,message:null,moveEvents:!0,phone:null,size:null,style:{},target:null,url:null,user:null,visible:!0,width:null},t.default=v},function(e,t,n){"use strict";function r(e,t){if("undefined"==typeof window)return{top:0,left:0};var n=void 0!==window.screenLeft?window.screenLeft:screen.left,r=void 0!==window.screenTop?window.screenTop:screen.top,o=window.innerWidth?window.innerWidth:document.documentElement.clientWidth?document.documentElement.clientWidth:screen.width;return{top:(window.innerHeight?window.innerHeight:document.documentElement.clientHeight?document.documentElement.clientHeight:screen.height)/2-t/2+r,left:o/2-e/2+n}}function o(e){var t=e.url,n=e.message,o=e.title,l=e.image,s=e.user,a=e.type,u=e.phone,d=e.width,p=e.height,f={},h={};switch(a){case"facebook":h.s=100,h["p[url]"]=t,f.url="https://www.facebook.com/sharer.php?"+(0,c.serialize)(h,"&"),f.title="Facebook Sharer";break;case"twitter":h.text=n,h.url=t,f.height=250,f.url="https://twitter.com/share?"+(0,c.serialize)(h,"&"),f.title="Twitter Sharer";break;case"pinterest":h.url=t,l&&(h.media=l),f.url="https://pinterest.com/pin/create/button/?"+(0,c.serialize)(h,"&"),f.title="Pinterest Sharer";break;case"google":case"gplus":h.url=t,f.url="https://plus.google.com/share?"+(0,c.serialize)(h,"&"),f.title="Google+ Sharer",f.width=400;break;case"linkedin":h.mini=!0,h.url=t,h.title=n||o,f.url="https://www.linkedin.com/shareArticle?"+(0,c.serialize)(h,"&"),f.title="Linkedin Sharer";break;case"reddit":h.url=t,h.title=n||o,f.url="https://www.reddit.com/submit?"+(0,c.serialize)(h,"&"),f.title="",f.width=850;break;case"whatsapp":h.phone=u,h.title=n||o,f.url="https://api.whatsapp.com/send?"+(0,c.serialize)(h,"&"),f.title="Whatsapp Message",f.width=850;break;case"messenger":f.url="https://m.me/"+s,f.title="Messenger Message",f.width=850;break;case"mail":f.url="mailto:"+t,f.title="_self";break;default:return f}return f.extra=(0,c.serialize)(i({width:(f.width||d)+"px",height:(f.height||p)+"px"},r(f.width||d,f.height||p)),","),f}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.default=o;var c=n(3)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.type,n=e.width,r=e.height,o=e.margin;return c.default.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid meet",space:"preserve",viewBox:"0 0 50 50",style:{marginRight:o},width:n,height:r},c.default.createElement("path",{fill:"#FFFFFF",d:s[t]}))}Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),c=r(i),l=n(1),s=(r(l),{facebook:"M31.6,44.5V25.7h8l1.3-8h-9.4v-4c0-2.7,1.3-4,4-4h4V1.5c-1.3,0-4.3,0-6.7,0c-6.7,0-9.4,4-9.4,10.7v5.4h-8v8h8v18.8L31.6,44.5L31.6,44.5z",whatsapp:"M2.5,46.6c0.6-1.9,1.2-3.6,1.8-5.4c0.6-1.7,1.1-3.5,1.8-5.2c0.3-0.9,0.2-1.5-0.2-2.3c-2.4-4.4-3.1-9.1-2.3-14c0.7-4.2,2.5-7.8,5.3-11c4.7-5.1,10.6-7.6,17.5-7.3c5.1,0.2,9.6,2.1,13.4,5.4c3.6,3.1,5.9,7,7,11.6c0.9,3.7,0.8,7.4-0.3,11.1c-1.4,4.6-4,8.5-7.8,11.4c-5.4,4.1-11.4,5.3-18,4c-2-0.4-3.9-1.1-5.6-2c-0.3-0.2-0.5-0.2-0.9-0.1c-3.4,1.1-6.7,2.2-10.1,3.2C3.7,46.2,3.2,46.4,2.5,46.6z M8.3,40.9c0.2,0,0.3-0.1,0.3-0.1c2.1-0.7,4.2-1.3,6.3-2c0.2-0.1,0.5,0,0.7,0.1c0.9,0.5,1.8,1,2.7,1.4c3.9,1.6,7.9,1.9,11.9,0.8c4.8-1.3,8.5-4.2,11-8.6c2.2-3.7,2.9-7.7,2.2-11.9C42.7,15.2,39.9,11,35.4,8c-3.9-2.6-8.3-3.5-12.9-2.7c-4,0.6-7.4,2.5-10.2,5.4c-2.4,2.5-4,5.5-4.7,8.8c-1,4.9-0.3,9.5,2.4,13.7c0.5,0.8,0.5,1.5,0.2,2.3C9.5,37.3,8.9,39.1,8.3,40.9z M36.8,29.8c0,1.7-0.9,3.1-2.5,3.9c-1.6,0.8-3.3,1-5,0.4c-1.5-0.6-3.1-1.2-4.6-1.9c-2-1-3.6-2.4-5-4c-1.6-1.8-3-3.7-4.1-5.9c-0.8-1.5-1.3-3.1-1.1-4.8c0.2-1.8,1-3.3,2.5-4.4c0.3-0.2,0.7-0.3,1.1-0.4c0.5,0,1,0,1.4,0.1c0.4,0,0.6,0.3,0.8,0.6c0.4,0.9,0.7,1.7,1,2.6c0.2,0.6,0.4,1.2,0.7,1.8c0.3,0.7,0.1,1.3-0.3,1.8c-0.4,0.5-0.8,0.9-1.2,1.3C20,21.2,20,21.6,20.2,22c1,1.9,2.3,3.5,4,4.9c1.1,0.9,2.3,1.5,3.6,2.2c0.4,0.2,0.7,0.2,1-0.2c0.6-0.7,1.3-1.4,1.9-2.1c0.4-0.5,0.6-0.6,1.1-0.3c1.5,0.8,3.1,1.6,4.6,2.4C36.8,29,36.9,29.3,36.8,29.8z",messenger:"M27.5,30l-5.4-5.7L11.7,30l11.5-12.2l5.5,5.7L39,17.8L27.5,30z M25.5,3.8c-11.6,0-21.1,8.7-21.1,19.5c0,6.1,3.1,11.6,7.9,15.2v7.4l7.2-3.9c1.9,0.5,3.9,0.8,6,0.8c11.6,0,21.1-8.7,21.1-19.5S37.1,3.8,25.5,3.8z",instagram:"M25,13.3c-5.8,0-10.6,4.7-10.6,10.6S19.1,34.6,25,34.6S35.6,29.8,35.6,24S30.8,13.3,25,13.3z M25,30.7c-3.7,0-6.8-3.1-6.8-6.8s3.1-6.8,6.8-6.8s6.8,3.1,6.8,6.8S28.7,30.7,25,30.7z M36.1,10.6c1.3,0,2.4,1.1,2.4,2.4s-1.1,2.4-2.4,2.4c-1.3,0-2.4-1.1-2.4-2.4S34.7,10.6,36.1,10.6z M42.3,6.8c-2.2-2.2-5.2-3.4-8.7-3.4H16.4c-7.2,0-12,4.8-12,12v17c0,3.6,1.2,6.7,3.5,8.9c2.2,2.2,5.2,3.2,8.6,3.2h17c3.6,0,6.6-1.2,8.7-3.2c2.2-2.2,3.4-5.2,3.4-8.8V15.4C45.6,11.9,44.5,8.9,42.3,6.8z M42,32.6c0,2.6-0.9,4.7-2.4,6.1s-3.6,2.2-6.1,2.2h-17c-2.5,0-4.6-0.7-6.1-2.2s-2.2-3.6-2.2-6.2v-17c0-2.5,0.7-4.6,2.2-6.1C11.8,8,14,7.2,16.5,7.2h17.1c2.5,0,4.6,0.7,6.1,2.2c1.4,1.5,2.2,3.6,2.2,6v17.2H42z",twitter:"M49.3,9.1c-1.8,0.8-3.6,1.3-5.6,1.5c2-1.2,3.6-3.1,4.3-5.4c-1.9,1.1-4,1.9-6.2,2.4c-1.8-1.9-4.3-3.1-7.1-3.1c-5.4,0-9.8,4.4-9.8,9.8c0,0.8,0.1,1.5,0.3,2.2C17,16.1,9.8,12.2,5,6.3c-0.8,1.4-1.3,3.1-1.3,4.9c0,3.4,1.7,6.4,4.3,8.1c-1.6-0.1-3.1-0.5-4.4-1.2v0.1c0,4.7,3.4,8.7,7.8,9.6c-0.8,0.2-1.7,0.3-2.6,0.3c-0.6,0-1.2-0.1-1.8-0.2c1.2,3.9,4.9,6.7,9.1,6.8c-3.3,2.6-7.6,4.2-12.1,4.2c-0.8,0-1.6,0-2.3-0.1c4.3,2.8,9.5,4.4,15,4.4c18,0,27.8-14.9,27.8-27.8c0-0.4,0-0.8,0-1.3C46.4,12.7,48,11,49.3,9.1z",github:"M25,2.5C12.2,2.5,1.9,12.8,1.9,25.6c0,10.2,6.6,18.9,15.8,21.9c1.2,0.2,1.5-0.5,1.5-1.1c0-0.5,0-2.1,0-4c-6.4,1.4-7.8-3-7.8-3c-1-2.7-2.6-3.4-2.6-3.4C6.7,34.6,9,34.6,9,34.6c2.3,0.2,3.5,2.4,3.5,2.4c2.1,3.5,5.4,2.5,6.7,1.9c0.2-1.5,0.8-2.5,1.5-3.1c-5.1-0.6-10.5-2.6-10.5-11.4c0-2.5,0.9-4.6,2.4-6.2c-0.2-0.6-1-2.9,0.2-6.1c0,0,1.9-0.6,6.3,2.4c1.8-0.5,3.8-0.8,5.8-0.8s3.9,0.3,5.8,0.8c4.4-3,6.3-2.4,6.3-2.4c1.3,3.2,0.5,5.5,0.2,6.1c1.5,1.6,2.4,3.7,2.4,6.2c0,8.9-5.4,10.8-10.5,11.4c0.8,0.7,1.6,2.1,1.6,4.3c0,2.9,0,5.6,0,6.4c0,0.6,0.4,1.3,1.5,1.1C41.4,44.5,48,35.9,48,25.7C48.1,12.8,37.8,2.5,25,2.5z",linkedin:"M13.8,41.7H5.4V13.6h8.4C13.8,13.6,13.8,41.7,13.8,41.7z M44.7,41.7h-8.4v-15c0-3.9-1.4-5.9-4.2-5.9c-2.2,0-3.6,1.1-4.3,3.3c0,3.5,0,17.6,0,17.6h-8.4c0,0,0.1-25.3,0-28.1h6.7l0.5,5.6h0.2c1.7-2.8,4.5-4.7,8.3-4.7c2.9,0,5.2,0.8,7,2.8s2.7,4.7,2.7,8.5L44.7,41.7L44.7,41.7z M9.6,2.3C12,2.3,14,4.2,14,6.5s-2,4.2-4.4,4.2S5.2,8.8,5.2,6.5C5.3,4.2,7.2,2.3,9.6,2.3z",gplus:"M29.9,5.2c0,0-9.1,0-12.2,0C12.2,5.2,6.9,9.1,6.9,14c0,5,3.8,8.8,9.5,8.8c0.4,0,0.7-0.1,1.1-0.1c-0.4,0.7-0.7,1.5-0.7,2.3c0,1.4,0.7,2.5,1.7,3.4c-0.7,0-1.4,0-2.1,0c-6.9,0-12.2,4.4-12.2,8.9c0,4.5,5.9,7.4,12.7,7.4c7.9,0,12.2-4.5,12.2-8.9c0-3.6-1-5.8-4.4-8.1c-1.1-0.8-3.3-2.7-3.3-3.9c0-1.3,0.4-2,2.4-3.5c2-1.6,3.5-3.5,3.5-6.1c0-3.2-1.3-7-4-7H28L29.9,5.2z M25.8,35c0.1,0.4,0.2,0.8,0.2,1.3c0,3.6-2.3,6.5-9,6.5c-4.7,0-8.2-3-8.2-6.6c0-3.5,4.3-6.5,9-6.4c1.1,0,2.1,0.2,3.1,0.5C23.5,32,25.3,33,25.8,35z M18.2,21.5c-3.2-0.1-6.2-3.6-6.8-7.8s1.6-7.4,4.8-7.4c3.2,0.1,6.2,3.4,6.8,7.7C23.6,18.2,21.4,21.6,18.2,21.5z M39.8,21v-6h-3.9v6h-6v4h6v6h3.9v-6h6v-3.9L39.8,21L39.8,21z",pinterest:"M7.6,17.7c0,3.3,1.1,6.6,3.3,8.5c0.5,0.4,1.7,1.3,2.6,1.3c0.7,0,0.8-0.8,1-1.4c1-3.3,0.1-1.9-1.1-4.7c-1.3-2.8-0.4-7.3,1.1-9.6c2.9-4.4,6.2-6,11.6-6c3.1,0,5.4,1.1,7.1,2.6c6.1,5.2,1.9,21.8-5.6,20.9c-7.5-0.8-1.4-10-1.4-14c0-6.2-8.5-5.2-8.5,2.7c0,2.7,1.1,3.5,0.9,4.2c-1.1,3.8-1.9,8.2-2.9,12.2c-1.1,4.1-1,7.5-0.6,11.7c0,0.1,0.1,0.2,0.2,0.2c0.1,0.1,0.2,0,0.3-0.1c2.9-2.9,4.8-7.7,5.5-10.5c0.4-1.5,0.9-3.3,1.2-4.8c0.1-0.3,0.7,0.6,1.1,1c3.1,2.8,8.4,2.2,11.8,0.1c6.6-4,9.4-15.4,5.9-22.2c-1-1.9-2-2.8-3.4-4.3C31.8-0.1,19.3,0.2,13.2,6C9.9,9.1,7.6,12.7,7.6,17.7L7.6,17.7z",reddit:"M48.9,18.6L48.9,18.6c0,0.1,0,0.2,0,0.3c0,1.2-0.4,2.4-1,3.3s-1.4,1.7-2.4,2.2c0.1,0.5,0.1,1,0.1,1.4c0,2.6-0.9,5.1-2.4,7.2l0,0l0,0c-2.8,3.8-7.2,6.1-11.6,7.2l0,0l0,0c-2.3,0.6-4.8,0.9-7.2,0.9c-3.6,0-7.2-0.7-10.6-2l0,0l0,0C10.3,37.7,7,35.4,5,32c-1.1-1.8-1.7-3.9-1.7-6.1c0-0.5,0-1,0.1-1.4c-0.9-0.5-1.7-1.3-2.3-2.1c-0.6-1-1-2.1-1.1-3.2l0,0l0,0l0,0c0-1.6,0.7-3.2,1.8-4.4s2.6-1.9,4.2-1.9h0.1c0.2,0,0.3,0,0.5,0c0.8,0,1.6,0.1,2.4,0.4l0,0l0,0c0.7,0.3,1.3,0.6,1.9,1.1c0.2-0.1,0.4-0.2,0.6-0.3c3.5-2.1,7.6-2.9,11.6-3.2c0-2,0.3-4.1,1.2-5.9c0.8-1.5,2.2-2.7,3.9-3.1l0,0l0,0c0.6-0.1,1.3-0.2,1.9-0.2c1.7,0,3.4,0.4,4.9,1c0.7-1.1,1.7-1.9,2.8-2.3l0,0l0,0c0.7-0.2,1.4-0.3,2.1-0.3c0.8,0,1.5,0.1,2.2,0.5l0,0l0,0l0,0c1,0.4,1.9,1.1,2.5,2.1c0.6,0.9,1,2,1,3.2c0,0.2,0,0.4,0,0.6l0,0l0,0c-0.1,1.5-0.9,2.8-1.9,3.7c-1.1,0.9-2.4,1.5-3.8,1.5c-0.2,0-0.4,0-0.7,0c-1.4-0.1-2.7-0.8-3.6-1.8c-1-1-1.6-2.4-1.6-3.8C34,6,34,6,34,5.9c-1.3-0.6-2.7-1.1-4.1-1.1c-0.2,0-0.4,0-0.6,0l0,0c-1,0.1-2,0.8-2.4,1.7l0,0l0,0c-0.7,1.4-0.8,3-0.9,4.6c3.9,0.3,7.9,1.2,11.4,3.2l0,0l0,0c0.1,0,0.2,0.1,0.3,0.2c0.2-0.2,0.5-0.4,0.8-0.6c1.1-0.7,2.3-1.1,3.5-1.1c0.6,0,1.1,0.1,1.6,0.2l0,0l0,0l0,0l0,0c1.3,0.3,2.4,1.1,3.3,2.1C48.2,15.9,48.8,17.2,48.9,18.6L48.9,18.6L48.9,18.6z M42.5,26c0-1.8-0.6-3.6-1.7-5c-2.1-2.9-5.2-4.8-8.5-5.8l0,0c-0.6-0.2-1.3-0.4-1.9-0.5c-1.9-0.4-3.9-0.7-5.9-0.7c-2.7,0-5.3,0.4-7.9,1.2c-3.3,1.1-6.5,2.9-8.5,5.8l0,0c-1,1.4-1.6,3.2-1.6,5c0,0.7,0.1,1.3,0.3,2l0,0c0.4,1.4,1.1,2.7,2,3.8c0.9,1.1,2.1,2.1,3.3,2.9c0.3,0.2,0.5,0.3,0.8,0.5c3.5,2,7.6,2.9,11.6,2.9c0.7,0,1.4,0,2-0.1c4.1-0.3,8.2-1.6,11.5-4l0,0c1.1-0.8,2-1.7,2.8-2.8s1.3-2.3,1.6-3.6l0,0l0,0C42.5,27,42.5,26.5,42.5,26zM37.3,5.5c0,0.1,0,0.1,0,0.2l0,0l0,0c0,0.7,0.3,1.3,0.8,1.8s1.1,0.8,1.8,0.8l0,0l0,0H40c0.7,0,1.3-0.3,1.8-0.8s0.8-1.1,0.9-1.8l0,0l0,0c0-0.1,0-0.1,0-0.2c0-0.7-0.3-1.4-0.9-1.9c-0.5-0.5-1.2-0.8-1.9-0.8c-0.2,0-0.4,0-0.7,0.1l0,0l0,0c-0.6,0.1-1.1,0.5-1.5,1C37.5,4.4,37.3,4.9,37.3,5.5z M8.2,16.2c-0.5-0.2-1.1-0.4-1.6-0.4c-0.1,0-0.2,0-0.3,0l0,0l0,0c-0.8,0-1.6,0.4-2.1,0.9c-0.6,0.5-1,1.3-1,2.1l0,0l0,0c0,0.1,0,0.1,0,0.2c0,0.5,0.2,1,0.4,1.4C3.8,20.7,4,21,4.3,21.3C5.2,19.3,6.6,17.6,8.2,16.2zM45.7,18.9c0-0.4-0.1-0.9-0.3-1.3l0,0l0,0c-0.3-0.6-0.7-1-1.3-1.4c-0.5-0.3-1.2-0.5-1.8-0.5s-1.1,0.1-1.7,0.4c1.6,1.4,3,3.1,3.9,5.1c0.3-0.3,0.5-0.6,0.7-0.9C45.6,19.9,45.7,19.4,45.7,18.9z M32.9,29.2c-0.2-0.1-0.5-0.2-0.8-0.2c-0.2,0-0.5,0.1-0.7,0.2c-2.1,1.1-4.6,1.7-7.1,1.7c-1.9,0-3.7-0.3-5.4-1.1l0,0l0,0c-0.3-0.1-0.5-0.3-0.9-0.5c-0.2-0.1-0.3-0.2-0.5-0.2C17.3,29,17.1,29,16.9,29s-0.4,0-0.6,0.1l0,0l0,0c-0.3,0.1-0.5,0.3-0.7,0.5s-0.2,0.5-0.2,0.7s0.1,0.5,0.2,0.7c0.1,0.2,0.3,0.4,0.6,0.5c2.4,1.4,5.2,2.1,8.1,2.1c2.6,0,5.2-0.5,7.5-1.5l0,0l0,0c0.3-0.2,0.7-0.3,1.1-0.5c0.2-0.1,0.4-0.2,0.5-0.4c0.2-0.2,0.3-0.4,0.4-0.6l0,0c0-0.1,0-0.2,0-0.3c0-0.2-0.1-0.4-0.1-0.5C33.3,29.5,33.1,29.3,32.9,29.2zM16.8,19.8c-1.7,0-3.1,1.4-3.1,3.1s1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1C19.9,21.1,18.5,19.8,16.8,19.8z M32.1,19.8c-1.7,0-3.1,1.4-3.1,3.1s1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1C35.1,21.1,33.8,19.8,32.1,19.8z"});t.default=o},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(0),u=r(a),d=n(1),p=(r(d),n(2)),f=n(3),h="aws-btn",m=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.action=function(){n.startLoading(),n.props.action&&n.props.action(n.container,n.endLoading.bind(n))},n.rootElement=e.rootElement||h,n.animationStage=0,n.loading=!1,n.state={loadingEnd:!1,loadingStart:!1,blocked:!1,active:!1},n}return c(t,e),s(t,[{key:"componentDidMount",value:function(){(0,f.setCssEndEvent)(this.content,"transition",this.clearStagedWrapperAnimation.bind(this))}},{key:"getRootClassName",value:function(){var e=this.rootElement,t=this.state,n=t.loadingStart,r=t.loadingEnd;return[n&&e+"--start"||null,r&&e+"--end"||null,e+"--progress"].join(" ").trim().replace(/[\s]+/gi," ")}},{key:"endLoading",value:function(){this.setState({loadingEnd:!0}),this.animationStage=1}},{key:"startLoading",value:function(){var e=this;this.loading=!0,this.setState({blocked:!0,active:!0},function(){window.requestAnimationFrame(function(){window.requestAnimationFrame(function(){e.setState({loadingStart:!0})})})})}},{key:"clearLoading",value:function(e){this.loading=!1,this.setState({loadingStart:!1,loadingEnd:!1,active:!1},e)}},{key:"clearStagedWrapperAnimation",value:function(){var e=this;if(0!==this.animationStage){if(4===this.animationStage)return this.animationStage=0,void setTimeout(function(){"undefined"!=typeof window&&window.requestAnimationFrame(function(){e.clearLoading(function(){setTimeout(function(){e.setState({blocked:!1})},500)})})},500);this.animationStage+=1}}},{key:"moveEvents",value:function(){var e=this;return{onMouseDown:function(t){!0===e.state.disabled||!0===e.loading||!0===e.state.blocked||t&&1!==t.nativeEvent.which||(e.loading=!0)},onMouseUp:function(t){if(!0===e.state.disabled||!0===e.loading||!0===e.state.blocked)return t.preventDefault(),void t.stopPropagation();e.action()}}}},{key:"render",value:function(){var e=this,t=this.props,n=t.children,r=t.size,o=t.cssModule,i=t.loadingLabel,c=t.resultLabel,s=t.type;return u.default.createElement(p.AwesomeButton,l({size:r,type:s,className:this.getRootClassName(),action:this.action,cssModule:o,active:this.state.active,blocked:this.state.blocked},this.moveEvents()),u.default.createElement("span",{ref:function(t){e.content=t},"data-loading":i||null,"data-status":c||null,className:(0,f.getClassName)(this.rootElement+"__progress",o)},u.default.createElement("span",null,n)))}}]),t}(u.default.Component);m.defaultProps={action:null,rootElement:null,loadingLabel:"Wait..",resultLabel:"Success!",cssModule:null,children:null,size:null,type:null},t.default=m}])});