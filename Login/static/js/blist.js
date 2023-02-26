/* perfect-scrollbar v0.6.16 */
!function t(e,n,r){function o(i,s){if(!n[i]){if(!e[i]){var a="function"==typeof require&&require;if(!s&&a)return a(i,!0);if(l)return l(i,!0);var c=new Error("Cannot find module '"+i+"'");throw c.code="MODULE_NOT_FOUND",c}var u=n[i]={exports:{}};e[i][0].call(u.exports,function(t){var n=e[i][1][t];return o(n?n:t)},u,u.exports,t,e,n,r)}return n[i].exports}for(var l="function"==typeof require&&require,i=0;i<r.length;i++)o(r[i]);return o}({1:[function(t,e,n){"use strict";var r=t("../main");"function"==typeof define&&define.amd?define(r):(window.PerfectScrollbar=r,"undefined"==typeof window.Ps&&(window.Ps=r))},{"../main":7}],2:[function(t,e,n){"use strict";function r(t,e){var n=t.className.split(" ");n.indexOf(e)<0&&n.push(e),t.className=n.join(" ")}function o(t,e){var n=t.className.split(" "),r=n.indexOf(e);r>=0&&n.splice(r,1),t.className=n.join(" ")}n.add=function(t,e){t.classList?t.classList.add(e):r(t,e)},n.remove=function(t,e){t.classList?t.classList.remove(e):o(t,e)},n.list=function(t){return t.classList?Array.prototype.slice.apply(t.classList):t.className.split(" ")}},{}],3:[function(t,e,n){"use strict";function r(t,e){return window.getComputedStyle(t)[e]}function o(t,e,n){return"number"==typeof n&&(n=n.toString()+"px"),t.style[e]=n,t}function l(t,e){for(var n in e){var r=e[n];"number"==typeof r&&(r=r.toString()+"px"),t.style[n]=r}return t}var i={};i.e=function(t,e){var n=document.createElement(t);return n.className=e,n},i.appendTo=function(t,e){return e.appendChild(t),t},i.css=function(t,e,n){return"object"==typeof e?l(t,e):"undefined"==typeof n?r(t,e):o(t,e,n)},i.matches=function(t,e){return"undefined"!=typeof t.matches?t.matches(e):"undefined"!=typeof t.matchesSelector?t.matchesSelector(e):"undefined"!=typeof t.webkitMatchesSelector?t.webkitMatchesSelector(e):"undefined"!=typeof t.mozMatchesSelector?t.mozMatchesSelector(e):"undefined"!=typeof t.msMatchesSelector?t.msMatchesSelector(e):void 0},i.remove=function(t){"undefined"!=typeof t.remove?t.remove():t.parentNode&&t.parentNode.removeChild(t)},i.queryChildren=function(t,e){return Array.prototype.filter.call(t.childNodes,function(t){return i.matches(t,e)})},e.exports=i},{}],4:[function(t,e,n){"use strict";var r=function(t){this.element=t,this.events={}};r.prototype.bind=function(t,e){"undefined"==typeof this.events[t]&&(this.events[t]=[]),this.events[t].push(e),this.element.addEventListener(t,e,!1)},r.prototype.unbind=function(t,e){var n="undefined"!=typeof e;this.events[t]=this.events[t].filter(function(r){return!(!n||r===e)||(this.element.removeEventListener(t,r,!1),!1)},this)},r.prototype.unbindAll=function(){for(var t in this.events)this.unbind(t)};var o=function(){this.eventElements=[]};o.prototype.eventElement=function(t){var e=this.eventElements.filter(function(e){return e.element===t})[0];return"undefined"==typeof e&&(e=new r(t),this.eventElements.push(e)),e},o.prototype.bind=function(t,e,n){this.eventElement(t).bind(e,n)},o.prototype.unbind=function(t,e,n){this.eventElement(t).unbind(e,n)},o.prototype.unbindAll=function(){for(var t=0;t<this.eventElements.length;t++)this.eventElements[t].unbindAll()},o.prototype.once=function(t,e,n){var r=this.eventElement(t),o=function(t){r.unbind(e,o),n(t)};r.bind(e,o)},e.exports=o},{}],5:[function(t,e,n){"use strict";e.exports=function(){function t(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return function(){return t()+t()+"-"+t()+"-"+t()+"-"+t()+"-"+t()+t()+t()}}()},{}],6:[function(t,e,n){"use strict";var r=t("./class"),o=t("./dom"),l=n.toInt=function(t){return parseInt(t,10)||0},i=n.clone=function(t){if(t){if(t.constructor===Array)return t.map(i);if("object"==typeof t){var e={};for(var n in t)e[n]=i(t[n]);return e}return t}return null};n.extend=function(t,e){var n=i(t);for(var r in e)n[r]=i(e[r]);return n},n.isEditable=function(t){return o.matches(t,"input,[contenteditable]")||o.matches(t,"select,[contenteditable]")||o.matches(t,"textarea,[contenteditable]")||o.matches(t,"button,[contenteditable]")},n.removePsClasses=function(t){for(var e=r.list(t),n=0;n<e.length;n++){var o=e[n];0===o.indexOf("ps-")&&r.remove(t,o)}},n.outerWidth=function(t){return l(o.css(t,"width"))+l(o.css(t,"paddingLeft"))+l(o.css(t,"paddingRight"))+l(o.css(t,"borderLeftWidth"))+l(o.css(t,"borderRightWidth"))},n.startScrolling=function(t,e){r.add(t,"ps-in-scrolling"),"undefined"!=typeof e?r.add(t,"ps-"+e):(r.add(t,"ps-x"),r.add(t,"ps-y"))},n.stopScrolling=function(t,e){r.remove(t,"ps-in-scrolling"),"undefined"!=typeof e?r.remove(t,"ps-"+e):(r.remove(t,"ps-x"),r.remove(t,"ps-y"))},n.env={isWebKit:"WebkitAppearance"in document.documentElement.style,supportsTouch:"ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch,supportsIePointer:null!==window.navigator.msMaxTouchPoints}},{"./class":2,"./dom":3}],7:[function(t,e,n){"use strict";var r=t("./plugin/destroy"),o=t("./plugin/initialize"),l=t("./plugin/update");e.exports={initialize:o,update:l,destroy:r}},{"./plugin/destroy":9,"./plugin/initialize":17,"./plugin/update":21}],8:[function(t,e,n){"use strict";e.exports={handlers:["click-rail","drag-scrollbar","keyboard","wheel","touch"],maxScrollbarLength:null,minScrollbarLength:null,scrollXMarginOffset:0,scrollYMarginOffset:0,suppressScrollX:!1,suppressScrollY:!1,swipePropagation:!0,useBothWheelAxes:!1,wheelPropagation:!1,wheelSpeed:1,theme:"default"}},{}],9:[function(t,e,n){"use strict";var r=t("../lib/helper"),o=t("../lib/dom"),l=t("./instances");e.exports=function(t){var e=l.get(t);e&&(e.event.unbindAll(),o.remove(e.scrollbarX),o.remove(e.scrollbarY),o.remove(e.scrollbarXRail),o.remove(e.scrollbarYRail),r.removePsClasses(t),l.remove(t))}},{"../lib/dom":3,"../lib/helper":6,"./instances":18}],10:[function(t,e,n){"use strict";function r(t,e){function n(t){return t.getBoundingClientRect()}var r=function(t){t.stopPropagation()};e.event.bind(e.scrollbarY,"click",r),e.event.bind(e.scrollbarYRail,"click",function(r){var o=r.pageY-window.pageYOffset-n(e.scrollbarYRail).top,s=o>e.scrollbarYTop?1:-1;i(t,"top",t.scrollTop+s*e.containerHeight),l(t),r.stopPropagation()}),e.event.bind(e.scrollbarX,"click",r),e.event.bind(e.scrollbarXRail,"click",function(r){var o=r.pageX-window.pageXOffset-n(e.scrollbarXRail).left,s=o>e.scrollbarXLeft?1:-1;i(t,"left",t.scrollLeft+s*e.containerWidth),l(t),r.stopPropagation()})}var o=t("../instances"),l=t("../update-geometry"),i=t("../update-scroll");e.exports=function(t){var e=o.get(t);r(t,e)}},{"../instances":18,"../update-geometry":19,"../update-scroll":20}],11:[function(t,e,n){"use strict";function r(t,e){function n(n){var o=r+n*e.railXRatio,i=Math.max(0,e.scrollbarXRail.getBoundingClientRect().left)+e.railXRatio*(e.railXWidth-e.scrollbarXWidth);o<0?e.scrollbarXLeft=0:o>i?e.scrollbarXLeft=i:e.scrollbarXLeft=o;var s=l.toInt(e.scrollbarXLeft*(e.contentWidth-e.containerWidth)/(e.containerWidth-e.railXRatio*e.scrollbarXWidth))-e.negativeScrollAdjustment;c(t,"left",s)}var r=null,o=null,s=function(e){n(e.pageX-o),a(t),e.stopPropagation(),e.preventDefault()},u=function(){l.stopScrolling(t,"x"),e.event.unbind(e.ownerDocument,"mousemove",s)};e.event.bind(e.scrollbarX,"mousedown",function(n){o=n.pageX,r=l.toInt(i.css(e.scrollbarX,"left"))*e.railXRatio,l.startScrolling(t,"x"),e.event.bind(e.ownerDocument,"mousemove",s),e.event.once(e.ownerDocument,"mouseup",u),n.stopPropagation(),n.preventDefault()})}function o(t,e){function n(n){var o=r+n*e.railYRatio,i=Math.max(0,e.scrollbarYRail.getBoundingClientRect().top)+e.railYRatio*(e.railYHeight-e.scrollbarYHeight);o<0?e.scrollbarYTop=0:o>i?e.scrollbarYTop=i:e.scrollbarYTop=o;var s=l.toInt(e.scrollbarYTop*(e.contentHeight-e.containerHeight)/(e.containerHeight-e.railYRatio*e.scrollbarYHeight));c(t,"top",s)}var r=null,o=null,s=function(e){n(e.pageY-o),a(t),e.stopPropagation(),e.preventDefault()},u=function(){l.stopScrolling(t,"y"),e.event.unbind(e.ownerDocument,"mousemove",s)};e.event.bind(e.scrollbarY,"mousedown",function(n){o=n.pageY,r=l.toInt(i.css(e.scrollbarY,"top"))*e.railYRatio,l.startScrolling(t,"y"),e.event.bind(e.ownerDocument,"mousemove",s),e.event.once(e.ownerDocument,"mouseup",u),n.stopPropagation(),n.preventDefault()})}var l=t("../../lib/helper"),i=t("../../lib/dom"),s=t("../instances"),a=t("../update-geometry"),c=t("../update-scroll");e.exports=function(t){var e=s.get(t);r(t,e),o(t,e)}},{"../../lib/dom":3,"../../lib/helper":6,"../instances":18,"../update-geometry":19,"../update-scroll":20}],12:[function(t,e,n){"use strict";function r(t,e){function n(n,r){var o=t.scrollTop;if(0===n){if(!e.scrollbarYActive)return!1;if(0===o&&r>0||o>=e.contentHeight-e.containerHeight&&r<0)return!e.settings.wheelPropagation}var l=t.scrollLeft;if(0===r){if(!e.scrollbarXActive)return!1;if(0===l&&n<0||l>=e.contentWidth-e.containerWidth&&n>0)return!e.settings.wheelPropagation}return!0}var r=!1;e.event.bind(t,"mouseenter",function(){r=!0}),e.event.bind(t,"mouseleave",function(){r=!1});var i=!1;e.event.bind(e.ownerDocument,"keydown",function(c){if(!(c.isDefaultPrevented&&c.isDefaultPrevented()||c.defaultPrevented)){var u=l.matches(e.scrollbarX,":focus")||l.matches(e.scrollbarY,":focus");if(r||u){var d=document.activeElement?document.activeElement:e.ownerDocument.activeElement;if(d){if("IFRAME"===d.tagName)d=d.contentDocument.activeElement;else for(;d.shadowRoot;)d=d.shadowRoot.activeElement;if(o.isEditable(d))return}var p=0,f=0;switch(c.which){case 37:p=c.metaKey?-e.contentWidth:c.altKey?-e.containerWidth:-30;break;case 38:f=c.metaKey?e.contentHeight:c.altKey?e.containerHeight:30;break;case 39:p=c.metaKey?e.contentWidth:c.altKey?e.containerWidth:30;break;case 40:f=c.metaKey?-e.contentHeight:c.altKey?-e.containerHeight:-30;break;case 33:f=90;break;case 32:f=c.shiftKey?90:-90;break;case 34:f=-90;break;case 35:f=c.ctrlKey?-e.contentHeight:-e.containerHeight;break;case 36:f=c.ctrlKey?t.scrollTop:e.containerHeight;break;default:return}a(t,"top",t.scrollTop-f),a(t,"left",t.scrollLeft+p),s(t),i=n(p,f),i&&c.preventDefault()}}})}var o=t("../../lib/helper"),l=t("../../lib/dom"),i=t("../instances"),s=t("../update-geometry"),a=t("../update-scroll");e.exports=function(t){var e=i.get(t);r(t,e)}},{"../../lib/dom":3,"../../lib/helper":6,"../instances":18,"../update-geometry":19,"../update-scroll":20}],13:[function(t,e,n){"use strict";function r(t,e){function n(n,r){var o=t.scrollTop;if(0===n){if(!e.scrollbarYActive)return!1;if(0===o&&r>0||o>=e.contentHeight-e.containerHeight&&r<0)return!e.settings.wheelPropagation}var l=t.scrollLeft;if(0===r){if(!e.scrollbarXActive)return!1;if(0===l&&n<0||l>=e.contentWidth-e.containerWidth&&n>0)return!e.settings.wheelPropagation}return!0}function r(t){var e=t.deltaX,n=-1*t.deltaY;return"undefined"!=typeof e&&"undefined"!=typeof n||(e=-1*t.wheelDeltaX/6,n=t.wheelDeltaY/6),t.deltaMode&&1===t.deltaMode&&(e*=10,n*=10),e!==e&&n!==n&&(e=0,n=t.wheelDelta),t.shiftKey?[-n,-e]:[e,n]}function o(e,n){var r=t.querySelector("textarea:hover, select[multiple]:hover, .ps-child:hover");if(r){if(!window.getComputedStyle(r).overflow.match(/(scroll|auto)/))return!1;var o=r.scrollHeight-r.clientHeight;if(o>0&&!(0===r.scrollTop&&n>0||r.scrollTop===o&&n<0))return!0;var l=r.scrollLeft-r.clientWidth;if(l>0&&!(0===r.scrollLeft&&e<0||r.scrollLeft===l&&e>0))return!0}return!1}function s(s){var c=r(s),u=c[0],d=c[1];o(u,d)||(a=!1,e.settings.useBothWheelAxes?e.scrollbarYActive&&!e.scrollbarXActive?(d?i(t,"top",t.scrollTop-d*e.settings.wheelSpeed):i(t,"top",t.scrollTop+u*e.settings.wheelSpeed),a=!0):e.scrollbarXActive&&!e.scrollbarYActive&&(u?i(t,"left",t.scrollLeft+u*e.settings.wheelSpeed):i(t,"left",t.scrollLeft-d*e.settings.wheelSpeed),a=!0):(i(t,"top",t.scrollTop-d*e.settings.wheelSpeed),i(t,"left",t.scrollLeft+u*e.settings.wheelSpeed)),l(t),a=a||n(u,d),a&&(s.stopPropagation(),s.preventDefault()))}var a=!1;"undefined"!=typeof window.onwheel?e.event.bind(t,"wheel",s):"undefined"!=typeof window.onmousewheel&&e.event.bind(t,"mousewheel",s)}var o=t("../instances"),l=t("../update-geometry"),i=t("../update-scroll");e.exports=function(t){var e=o.get(t);r(t,e)}},{"../instances":18,"../update-geometry":19,"../update-scroll":20}],14:[function(t,e,n){"use strict";function r(t,e){e.event.bind(t,"scroll",function(){l(t)})}var o=t("../instances"),l=t("../update-geometry");e.exports=function(t){var e=o.get(t);r(t,e)}},{"../instances":18,"../update-geometry":19}],15:[function(t,e,n){"use strict";function r(t,e){function n(){var t=window.getSelection?window.getSelection():document.getSelection?document.getSelection():"";return 0===t.toString().length?null:t.getRangeAt(0).commonAncestorContainer}function r(){c||(c=setInterval(function(){return l.get(t)?(s(t,"top",t.scrollTop+u.top),s(t,"left",t.scrollLeft+u.left),void i(t)):void clearInterval(c)},50))}function a(){c&&(clearInterval(c),c=null),o.stopScrolling(t)}var c=null,u={top:0,left:0},d=!1;e.event.bind(e.ownerDocument,"selectionchange",function(){t.contains(n())?d=!0:(d=!1,a())}),e.event.bind(window,"mouseup",function(){d&&(d=!1,a())}),e.event.bind(window,"keyup",function(){d&&(d=!1,a())}),e.event.bind(window,"mousemove",function(e){if(d){var n={x:e.pageX,y:e.pageY},l={left:t.offsetLeft,right:t.offsetLeft+t.offsetWidth,top:t.offsetTop,bottom:t.offsetTop+t.offsetHeight};n.x<l.left+3?(u.left=-5,o.startScrolling(t,"x")):n.x>l.right-3?(u.left=5,o.startScrolling(t,"x")):u.left=0,n.y<l.top+3?(l.top+3-n.y<5?u.top=-5:u.top=-20,o.startScrolling(t,"y")):n.y>l.bottom-3?(n.y-l.bottom+3<5?u.top=5:u.top=20,o.startScrolling(t,"y")):u.top=0,0===u.top&&0===u.left?a():r()}})}var o=t("../../lib/helper"),l=t("../instances"),i=t("../update-geometry"),s=t("../update-scroll");e.exports=function(t){var e=l.get(t);r(t,e)}},{"../../lib/helper":6,"../instances":18,"../update-geometry":19,"../update-scroll":20}],16:[function(t,e,n){"use strict";function r(t,e,n,r){function o(n,r){var o=t.scrollTop,l=t.scrollLeft,i=Math.abs(n),s=Math.abs(r);if(s>i){if(r<0&&o===e.contentHeight-e.containerHeight||r>0&&0===o)return!e.settings.swipePropagation}else if(i>s&&(n<0&&l===e.contentWidth-e.containerWidth||n>0&&0===l))return!e.settings.swipePropagation;return!0}function a(e,n){s(t,"top",t.scrollTop-n),s(t,"left",t.scrollLeft-e),i(t)}function c(){w=!0}function u(){w=!1}function d(t){return t.targetTouches?t.targetTouches[0]:t}function p(t){return!(!t.targetTouches||1!==t.targetTouches.length)||!(!t.pointerType||"mouse"===t.pointerType||t.pointerType===t.MSPOINTER_TYPE_MOUSE)}function f(t){if(p(t)){Y=!0;var e=d(t);g.pageX=e.pageX,g.pageY=e.pageY,v=(new Date).getTime(),null!==y&&clearInterval(y),t.stopPropagation()}}function h(t){if(!Y&&e.settings.swipePropagation&&f(t),!w&&Y&&p(t)){var n=d(t),r={pageX:n.pageX,pageY:n.pageY},l=r.pageX-g.pageX,i=r.pageY-g.pageY;a(l,i),g=r;var s=(new Date).getTime(),c=s-v;c>0&&(m.x=l/c,m.y=i/c,v=s),o(l,i)&&(t.stopPropagation(),t.preventDefault())}}function b(){!w&&Y&&(Y=!1,clearInterval(y),y=setInterval(function(){return l.get(t)&&(m.x||m.y)?Math.abs(m.x)<.01&&Math.abs(m.y)<.01?void clearInterval(y):(a(30*m.x,30*m.y),m.x*=.8,void(m.y*=.8)):void clearInterval(y)},10))}var g={},v=0,m={},y=null,w=!1,Y=!1;n?(e.event.bind(window,"touchstart",c),e.event.bind(window,"touchend",u),e.event.bind(t,"touchstart",f),e.event.bind(t,"touchmove",h),e.event.bind(t,"touchend",b)):r&&(window.PointerEvent?(e.event.bind(window,"pointerdown",c),e.event.bind(window,"pointerup",u),e.event.bind(t,"pointerdown",f),e.event.bind(t,"pointermove",h),e.event.bind(t,"pointerup",b)):window.MSPointerEvent&&(e.event.bind(window,"MSPointerDown",c),e.event.bind(window,"MSPointerUp",u),e.event.bind(t,"MSPointerDown",f),e.event.bind(t,"MSPointerMove",h),e.event.bind(t,"MSPointerUp",b)))}var o=t("../../lib/helper"),l=t("../instances"),i=t("../update-geometry"),s=t("../update-scroll");e.exports=function(t){if(o.env.supportsTouch||o.env.supportsIePointer){var e=l.get(t);r(t,e,o.env.supportsTouch,o.env.supportsIePointer)}}},{"../../lib/helper":6,"../instances":18,"../update-geometry":19,"../update-scroll":20}],17:[function(t,e,n){"use strict";var r=t("../lib/helper"),o=t("../lib/class"),l=t("./instances"),i=t("./update-geometry"),s={"click-rail":t("./handler/click-rail"),"drag-scrollbar":t("./handler/drag-scrollbar"),keyboard:t("./handler/keyboard"),wheel:t("./handler/mouse-wheel"),touch:t("./handler/touch"),selection:t("./handler/selection")},a=t("./handler/native-scroll");e.exports=function(t,e){e="object"==typeof e?e:{},o.add(t,"ps-container");var n=l.add(t);n.settings=r.extend(n.settings,e),o.add(t,"ps-theme-"+n.settings.theme),n.settings.handlers.forEach(function(e){s[e](t)}),a(t),i(t)}},{"../lib/class":2,"../lib/helper":6,"./handler/click-rail":10,"./handler/drag-scrollbar":11,"./handler/keyboard":12,"./handler/mouse-wheel":13,"./handler/native-scroll":14,"./handler/selection":15,"./handler/touch":16,"./instances":18,"./update-geometry":19}],18:[function(t,e,n){"use strict";function r(t){function e(){a.add(t,"ps-focus")}function n(){a.remove(t,"ps-focus")}var r=this;r.settings=s.clone(c),r.containerWidth=null,r.containerHeight=null,r.contentWidth=null,r.contentHeight=null,r.isRtl="rtl"===u.css(t,"direction"),r.isNegativeScroll=function(){var e=t.scrollLeft,n=null;return t.scrollLeft=-1,n=t.scrollLeft<0,t.scrollLeft=e,n}(),r.negativeScrollAdjustment=r.isNegativeScroll?t.scrollWidth-t.clientWidth:0,r.event=new d,r.ownerDocument=t.ownerDocument||document,r.scrollbarXRail=u.appendTo(u.e("div","ps-scrollbar-x-rail"),t),r.scrollbarX=u.appendTo(u.e("div","ps-scrollbar-x"),r.scrollbarXRail),r.scrollbarX.setAttribute("tabindex",0),r.event.bind(r.scrollbarX,"focus",e),r.event.bind(r.scrollbarX,"blur",n),r.scrollbarXActive=null,r.scrollbarXWidth=null,r.scrollbarXLeft=null,r.scrollbarXBottom=s.toInt(u.css(r.scrollbarXRail,"bottom")),r.isScrollbarXUsingBottom=r.scrollbarXBottom===r.scrollbarXBottom,r.scrollbarXTop=r.isScrollbarXUsingBottom?null:s.toInt(u.css(r.scrollbarXRail,"top")),r.railBorderXWidth=s.toInt(u.css(r.scrollbarXRail,"borderLeftWidth"))+s.toInt(u.css(r.scrollbarXRail,"borderRightWidth")),u.css(r.scrollbarXRail,"display","block"),r.railXMarginWidth=s.toInt(u.css(r.scrollbarXRail,"marginLeft"))+s.toInt(u.css(r.scrollbarXRail,"marginRight")),u.css(r.scrollbarXRail,"display",""),r.railXWidth=null,r.railXRatio=null,r.scrollbarYRail=u.appendTo(u.e("div","ps-scrollbar-y-rail"),t),r.scrollbarY=u.appendTo(u.e("div","ps-scrollbar-y"),r.scrollbarYRail),r.scrollbarY.setAttribute("tabindex",0),r.event.bind(r.scrollbarY,"focus",e),r.event.bind(r.scrollbarY,"blur",n),r.scrollbarYActive=null,r.scrollbarYHeight=null,r.scrollbarYTop=null,r.scrollbarYRight=s.toInt(u.css(r.scrollbarYRail,"right")),r.isScrollbarYUsingRight=r.scrollbarYRight===r.scrollbarYRight,r.scrollbarYLeft=r.isScrollbarYUsingRight?null:s.toInt(u.css(r.scrollbarYRail,"left")),r.scrollbarYOuterWidth=r.isRtl?s.outerWidth(r.scrollbarY):null,r.railBorderYWidth=s.toInt(u.css(r.scrollbarYRail,"borderTopWidth"))+s.toInt(u.css(r.scrollbarYRail,"borderBottomWidth")),u.css(r.scrollbarYRail,"display","block"),r.railYMarginHeight=s.toInt(u.css(r.scrollbarYRail,"marginTop"))+s.toInt(u.css(r.scrollbarYRail,"marginBottom")),u.css(r.scrollbarYRail,"display",""),r.railYHeight=null,r.railYRatio=null}function o(t){return t.getAttribute("data-ps-id")}function l(t,e){t.setAttribute("data-ps-id",e)}function i(t){t.removeAttribute("data-ps-id")}var s=t("../lib/helper"),a=t("../lib/class"),c=t("./default-setting"),u=t("../lib/dom"),d=t("../lib/event-manager"),p=t("../lib/guid"),f={};n.add=function(t){var e=p();return l(t,e),f[e]=new r(t),f[e]},n.remove=function(t){delete f[o(t)],i(t)},n.get=function(t){return f[o(t)]}},{"../lib/class":2,"../lib/dom":3,"../lib/event-manager":4,"../lib/guid":5,"../lib/helper":6,"./default-setting":8}],19:[function(t,e,n){"use strict";function r(t,e){return t.settings.minScrollbarLength&&(e=Math.max(e,t.settings.minScrollbarLength)),t.settings.maxScrollbarLength&&(e=Math.min(e,t.settings.maxScrollbarLength)),e}function o(t,e){var n={width:e.railXWidth};e.isRtl?n.left=e.negativeScrollAdjustment+t.scrollLeft+e.containerWidth-e.contentWidth:n.left=t.scrollLeft,e.isScrollbarXUsingBottom?n.bottom=e.scrollbarXBottom-t.scrollTop:n.top=e.scrollbarXTop+t.scrollTop,s.css(e.scrollbarXRail,n);var r={top:t.scrollTop,height:e.railYHeight};e.isScrollbarYUsingRight?e.isRtl?r.right=e.contentWidth-(e.negativeScrollAdjustment+t.scrollLeft)-e.scrollbarYRight-e.scrollbarYOuterWidth:r.right=e.scrollbarYRight-t.scrollLeft:e.isRtl?r.left=e.negativeScrollAdjustment+t.scrollLeft+2*e.containerWidth-e.contentWidth-e.scrollbarYLeft-e.scrollbarYOuterWidth:r.left=e.scrollbarYLeft+t.scrollLeft,s.css(e.scrollbarYRail,r),s.css(e.scrollbarX,{left:e.scrollbarXLeft,width:e.scrollbarXWidth-e.railBorderXWidth}),s.css(e.scrollbarY,{top:e.scrollbarYTop,height:e.scrollbarYHeight-e.railBorderYWidth})}var l=t("../lib/helper"),i=t("../lib/class"),s=t("../lib/dom"),a=t("./instances"),c=t("./update-scroll");e.exports=function(t){var e=a.get(t);e.containerWidth=t.clientWidth,e.containerHeight=t.clientHeight,e.contentWidth=t.scrollWidth,e.contentHeight=t.scrollHeight;var n;t.contains(e.scrollbarXRail)||(n=s.queryChildren(t,".ps-scrollbar-x-rail"),n.length>0&&n.forEach(function(t){s.remove(t)}),s.appendTo(e.scrollbarXRail,t)),t.contains(e.scrollbarYRail)||(n=s.queryChildren(t,".ps-scrollbar-y-rail"),n.length>0&&n.forEach(function(t){s.remove(t)}),s.appendTo(e.scrollbarYRail,t)),!e.settings.suppressScrollX&&e.containerWidth+e.settings.scrollXMarginOffset<e.contentWidth?(e.scrollbarXActive=!0,e.railXWidth=e.containerWidth-e.railXMarginWidth,e.railXRatio=e.containerWidth/e.railXWidth,e.scrollbarXWidth=r(e,l.toInt(e.railXWidth*e.containerWidth/e.contentWidth)),e.scrollbarXLeft=l.toInt((e.negativeScrollAdjustment+t.scrollLeft)*(e.railXWidth-e.scrollbarXWidth)/(e.contentWidth-e.containerWidth))):e.scrollbarXActive=!1,!e.settings.suppressScrollY&&e.containerHeight+e.settings.scrollYMarginOffset<e.contentHeight?(e.scrollbarYActive=!0,e.railYHeight=e.containerHeight-e.railYMarginHeight,e.railYRatio=e.containerHeight/e.railYHeight,e.scrollbarYHeight=r(e,l.toInt(e.railYHeight*e.containerHeight/e.contentHeight)),e.scrollbarYTop=l.toInt(t.scrollTop*(e.railYHeight-e.scrollbarYHeight)/(e.contentHeight-e.containerHeight))):e.scrollbarYActive=!1,e.scrollbarXLeft>=e.railXWidth-e.scrollbarXWidth&&(e.scrollbarXLeft=e.railXWidth-e.scrollbarXWidth),e.scrollbarYTop>=e.railYHeight-e.scrollbarYHeight&&(e.scrollbarYTop=e.railYHeight-e.scrollbarYHeight),o(t,e),e.scrollbarXActive?i.add(t,"ps-active-x"):(i.remove(t,"ps-active-x"),e.scrollbarXWidth=0,e.scrollbarXLeft=0,c(t,"left",0)),e.scrollbarYActive?i.add(t,"ps-active-y"):(i.remove(t,"ps-active-y"),e.scrollbarYHeight=0,e.scrollbarYTop=0,c(t,"top",0))}},{"../lib/class":2,"../lib/dom":3,"../lib/helper":6,"./instances":18,"./update-scroll":20}],20:[function(t,e,n){"use strict";var r,o,l=t("./instances"),i=function(t){var e=document.createEvent("Event");return e.initEvent(t,!0,!0),e};e.exports=function(t,e,n){if("undefined"==typeof t)throw"You must provide an element to the update-scroll function";if("undefined"==typeof e)throw"You must provide an axis to the update-scroll function";if("undefined"==typeof n)throw"You must provide a value to the update-scroll function";"top"===e&&n<=0&&(t.scrollTop=n=0,t.dispatchEvent(i("ps-y-reach-start"))),"left"===e&&n<=0&&(t.scrollLeft=n=0,t.dispatchEvent(i("ps-x-reach-start")));var s=l.get(t);"top"===e&&n>=s.contentHeight-s.containerHeight&&(n=s.contentHeight-s.containerHeight,n-t.scrollTop<=1?n=t.scrollTop:t.scrollTop=n,t.dispatchEvent(i("ps-y-reach-end"))),"left"===e&&n>=s.contentWidth-s.containerWidth&&(n=s.contentWidth-s.containerWidth,n-t.scrollLeft<=1?n=t.scrollLeft:t.scrollLeft=n,t.dispatchEvent(i("ps-x-reach-end"))),r||(r=t.scrollTop),o||(o=t.scrollLeft),"top"===e&&n<r&&t.dispatchEvent(i("ps-scroll-up")),"top"===e&&n>r&&t.dispatchEvent(i("ps-scroll-down")),"left"===e&&n<o&&t.dispatchEvent(i("ps-scroll-left")),"left"===e&&n>o&&t.dispatchEvent(i("ps-scroll-right")),"top"===e&&(t.scrollTop=r=n,t.dispatchEvent(i("ps-scroll-y"))),"left"===e&&(t.scrollLeft=o=n,t.dispatchEvent(i("ps-scroll-x")))}},{"./instances":18}],21:[function(t,e,n){"use strict";var r=t("../lib/helper"),o=t("../lib/dom"),l=t("./instances"),i=t("./update-geometry"),s=t("./update-scroll");e.exports=function(t){var e=l.get(t);e&&(e.negativeScrollAdjustment=e.isNegativeScroll?t.scrollWidth-t.clientWidth:0,o.css(e.scrollbarXRail,"display","block"),o.css(e.scrollbarYRail,"display","block"),e.railXMarginWidth=r.toInt(o.css(e.scrollbarXRail,"marginLeft"))+r.toInt(o.css(e.scrollbarXRail,"marginRight")),e.railYMarginHeight=r.toInt(o.css(e.scrollbarYRail,"marginTop"))+r.toInt(o.css(e.scrollbarYRail,"marginBottom")),o.css(e.scrollbarXRail,"display","none"),o.css(e.scrollbarYRail,"display","none"),i(t),s(t,"top",t.scrollTop),s(t,"left",t.scrollLeft),o.css(e.scrollbarXRail,"display",""),o.css(e.scrollbarYRail,"display",""))}},{"../lib/dom":3,"../lib/helper":6,"./instances":18,"./update-geometry":19,"./update-scroll":20}]},{},[1]);
/* Copyright (c) 2010-2013 Marcus Westin */
"use strict";(function(e,t){typeof define=="function"&&define.amd?define([],t):typeof exports=="object"?module.exports=t():e.store=t()})(this,function(){function o(){try{return r in t&&t[r]}catch(e){return!1}}var e={},t=window,n=t.document,r="localStorage",i="script",s;e.disabled=!1,e.version="1.3.19",e.set=function(e,t){},e.get=function(e,t){},e.has=function(t){return e.get(t)!==undefined},e.remove=function(e){},e.clear=function(){},e.transact=function(t,n,r){r==null&&(r=n,n=null),n==null&&(n={});var i=e.get(t,n);r(i),e.set(t,i)},e.getAll=function(){},e.forEach=function(){},e.serialize=function(e){return JSON.stringify(e)},e.deserialize=function(e){if(typeof e!="string")return undefined;try{return JSON.parse(e)}catch(t){return e||undefined}};if(o())s=t[r],e.set=function(t,n){return n===undefined?e.remove(t):(s.setItem(t,e.serialize(n)),n)},e.get=function(t,n){var r=e.deserialize(s.getItem(t));return r===undefined?n:r},e.remove=function(e){s.removeItem(e)},e.clear=function(){s.clear()},e.getAll=function(){var t={};return e.forEach(function(e,n){t[e]=n}),t},e.forEach=function(t){for(var n=0;n<s.length;n++){var r=s.key(n);t(r,e.get(r))}};else if(n.documentElement.addBehavior){var u,a;try{a=new ActiveXObject("htmlfile"),a.open(),a.write("<"+i+">document.w=window</"+i+'><iframe src="/favicon.ico"></iframe>'),a.close(),u=a.w.frames[0].document,s=u.createElement("div")}catch(f){s=n.createElement("div"),u=n.body}var l=function(t){return function(){var n=Array.prototype.slice.call(arguments,0);n.unshift(s),u.appendChild(s),s.addBehavior("#default#userData"),s.load(r);var i=t.apply(e,n);return u.removeChild(s),i}},c=new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]","g"),h=function(e){return e.replace(/^d/,"___$&").replace(c,"___")};e.set=l(function(t,n,i){return n=h(n),i===undefined?e.remove(n):(t.setAttribute(n,e.serialize(i)),t.save(r),i)}),e.get=l(function(t,n,r){n=h(n);var i=e.deserialize(t.getAttribute(n));return i===undefined?r:i}),e.remove=l(function(e,t){t=h(t),e.removeAttribute(t),e.save(r)}),e.clear=l(function(e){var t=e.XMLDocument.documentElement.attributes;e.load(r);while(t.length)e.removeAttribute(t[0].name);e.save(r)}),e.getAll=function(t){var n={};return e.forEach(function(e,t){n[e]=t}),n},e.forEach=l(function(t,n){var r=t.XMLDocument.documentElement.attributes;for(var i=0,s;s=r[i];++i)n(s.name,e.deserialize(t.getAttribute(s.name)))})}try{var p="__storejs__";e.set(p,p),e.get(p)!=p&&(e.disabled=!0),e.remove(p)}catch(f){e.disabled=!0}return e.enabled=!e.disabled,e});
(function (global) {

    var apple_phone         = /iPhone/i,
        apple_ipod          = /iPod/i,
        apple_tablet        = /iPad/i,
        android_phone       = /(?=.*\bAndroid\b)(?=.*\bMobile\b)/i, // Match 'Android' AND 'Mobile'
        android_tablet      = /Android/i,
        amazon_phone        = /(?=.*\bAndroid\b)(?=.*\bSD4930UR\b)/i,
        amazon_tablet       = /(?=.*\bAndroid\b)(?=.*\b(?:KFOT|KFTT|KFJWI|KFJWA|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|KFARWI|KFASWI|KFSAWI|KFSAWA)\b)/i,
        windows_phone       = /IEMobile/i,
        windows_tablet      = /(?=.*\bWindows\b)(?=.*\bARM\b)/i, // Match 'Windows' AND 'ARM'
        other_blackberry    = /BlackBerry/i,
        other_blackberry_10 = /BB10/i,
        other_opera         = /Opera Mini/i,
        other_chrome        = /(CriOS|Chrome)(?=.*\bMobile\b)/i,
        other_firefox       = /(?=.*\bFirefox\b)(?=.*\bMobile\b)/i, // Match 'Firefox' AND 'Mobile'
        other_uc            = /UC.*Browser|UCWEB/i,
        vuighe_app          = /VuiGhe|IMAD/i,
        tv_apple            = /AppleTV/i,
        tv_google           = /(GoogleTV|CrKey)/i,
        tv_samsung          = /(SmartTV|SMART-TV|Tizen(.*TV))/i,
        tv_sony             = /(Sony(.*TV)|TV(.*Sony))/i,
        tv_lg               = /(LG(.*NetCast))/i,
        tv_toshiba          = /TSB(.*TV)/i,
        tv_panasonic        = /Viera/i,
        tv_other            = /(HbbTV|Espial|NETTV|TV(.*HDMI))/i,
        seven_inch = new RegExp(
            '(?:' +         // Non-capturing group

            'Nexus 7' +     // Nexus 7

            '|' +           // OR

            'BNTV250' +     // B&N Nook Tablet 7 inch

            '|' +           // OR

            'Kindle Fire' + // Kindle Fire

            '|' +           // OR

            'Silk' +        // Kindle Fire, Silk Accelerated

            '|' +           // OR

            'GT-P1000' +    // Galaxy Tab 7 inch

            ')',            // End non-capturing group

            'i');           // Case-insensitive matching

    var match = function(regex, userAgent) {
        return regex.test(userAgent);
    };

    var IsMobileClass = function(userAgent) {
        var ua = userAgent || navigator.userAgent;
        // Facebook mobile app's integrated browser adds a bunch of strings that
        // match everything. Strip it out if it exists.
        var tmp = ua.split('[FBAN');
        if (typeof tmp[1] !== 'undefined') {
            ua = tmp[0];
        }

        this.apple = {
            phone:  match(apple_phone, ua),
            ipod:   match(apple_ipod, ua),
            tablet: !match(apple_phone, ua) && match(apple_tablet, ua),
            device: match(apple_phone, ua) || match(apple_ipod, ua) || match(apple_tablet, ua)
        };
        this.amazon = {
            phone:  match(amazon_phone, ua),
            tablet: !match(amazon_phone, ua) && match(amazon_tablet, ua),
            device: match(amazon_phone, ua) || match(amazon_tablet, ua)
        };
        this.android = {
            phone:  match(amazon_phone, ua) || match(android_phone, ua),
            tablet: !match(amazon_phone, ua) && !match(android_phone, ua) && (match(amazon_tablet, ua) || match(android_tablet, ua)),
            device: match(amazon_phone, ua) || match(amazon_tablet, ua) || match(android_phone, ua) || match(android_tablet, ua)
        };
        this.windows = {
            phone:  match(windows_phone, ua),
            tablet: match(windows_tablet, ua),
            device: match(windows_phone, ua) || match(windows_tablet, ua)
        };
        this.vuighe = {
            app: match(vuighe_app, ua)
        };
        this.tvu = {
            apple: match(tv_apple, ua),
            google: match(tv_google, ua),
            samsung: match(tv_samsung, ua),
            sony: match(tv_sony, ua),
            lg: match(tv_lg, ua),
            toshiba: match(tv_toshiba, ua),
            panasonic: match(tv_panasonic, ua),
            other: match(tv_other, ua)
        };
        this.other = {
            blackberry:   match(other_blackberry, ua),
            blackberry10: match(other_blackberry_10, ua),
            opera:        match(other_opera, ua),
            firefox:      match(other_firefox, ua),
            chrome:       match(other_chrome, ua),
            uc:           match(other_uc, ua),
            device:       match(other_blackberry, ua) || match(other_blackberry_10, ua) || match(other_opera, ua) || match(other_firefox, ua) || match(other_chrome, ua)
        };
        this.seven_inch = match(seven_inch, ua);
        this.any = this.apple.device || this.android.device || this.windows.device || this.other.device || this.seven_inch;
        // excludes 'other' devices and ipods, targeting touchscreen phones
        this.phone = this.apple.phone || this.android.phone || this.windows.phone;
        // excludes 7 inch devices, classifying as phone or tablet is left to the user
        this.tablet = this.apple.tablet || this.android.tablet || this.windows.tablet;

        this.tv = this.tvu.apple || this.tvu.google || this.tvu.samsung || this.tvu.sony || this.tvu.lg || this.tvu.toshiba || this.tvu.panasonic || this.tvu.other;

        if (typeof window === 'undefined') {
            return this;
        }
    };

    var instantiate = function() {
        var IM = new IsMobileClass();
        IM.Class = IsMobileClass;
        return IM;
    };

    if (typeof module != 'undefined' && module.exports && typeof window === 'undefined') {
        //node
        module.exports = IsMobileClass;
    } else if (typeof module != 'undefined' && module.exports && typeof window !== 'undefined') {
        //browserify
        module.exports = instantiate();
    } else if (typeof define === 'function' && define.amd) {
        //AMD
        define('ismobile', [], global.ismobile = instantiate());
    } else {
        global.ismobile = instantiate();
    }

})(this);

// console.log(isMobile);
!function(){"use strict";function t(){var t={parent:document.body,version:"1.0.11",defaultOkLabel:"Ok",okLabel:"Ok",defaultCancelLabel:"Cancel",cancelLabel:"Cancel",defaultMaxLogItems:2,maxLogItems:2,promptValue:"",promptPlaceholder:"",closeLogOnClick:!1,closeLogOnClickDefault:!1,delay:5e3,defaultDelay:5e3,logContainerClass:"alertify-logs",logContainerDefaultClass:"alertify-logs",dialogs:{buttons:{holder:"<nav>{{buttons}}</nav>",ok:"<button class='ok' tabindex='1'>{{ok}}</button>",cancel:"<button class='cancel' tabindex='2'>{{cancel}}</button>"},input:"<input type='text'>",message:"<p class='msg'>{{message}}</p>",log:"<div class='{{class}}'>{{message}}</div>"},defaultDialogs:{buttons:{holder:"<nav>{{buttons}}</nav>",ok:"<button class='ok' tabindex='1'>{{ok}}</button>",cancel:"<button class='cancel' tabindex='2'>{{cancel}}</button>"},input:"<input type='text'>",message:"<p class='msg'>{{message}}</p>",log:"<div class='{{class}}'>{{message}}</div>"},build:function(t){var e=this.dialogs.buttons.ok,o="<div class='dialog'><div>"+this.dialogs.message.replace("{{message}}",t.message);return"confirm"!==t.type&&"prompt"!==t.type||(e=this.dialogs.buttons.cancel+this.dialogs.buttons.ok),"prompt"===t.type&&(o+=this.dialogs.input),o=(o+this.dialogs.buttons.holder+"</div></div>").replace("{{buttons}}",e).replace("{{ok}}",this.okLabel).replace("{{cancel}}",this.cancelLabel)},setCloseLogOnClick:function(t){this.closeLogOnClick=!!t},close:function(t,e){this.closeLogOnClick&&t.addEventListener("click",function(){o(t)}),e=e&&!isNaN(+e)?+e:this.delay,0>e?o(t):e>0&&setTimeout(function(){o(t)},e)},dialog:function(t,e,o,n){return this.setup({type:e,message:t,onOkay:o,onCancel:n})},log:function(t,e,o){var n=document.querySelectorAll(".alertify-logs > div");if(n){var i=n.length-this.maxLogItems;if(i>=0)for(var a=0,l=i+1;l>a;a++)this.close(n[a],-1)}this.notify(t,e,o)},setLogPosition:function(t){this.logContainerClass="alertify-logs "+t},setupLogContainer:function(){var t=document.querySelector(".alertify-logs"),e=this.logContainerClass;return t||(t=document.createElement("div"),t.className=e,this.parent.appendChild(t)),t.className!==e&&(t.className=e),t},notify:function(e,o,n){var i=this.setupLogContainer(),a=document.createElement("div");a.className=o||"default",t.logTemplateMethod?a.innerHTML=t.logTemplateMethod(e):a.innerHTML=e,"function"==typeof n&&a.addEventListener("click",n),i.appendChild(a),setTimeout(function(){a.className+=" show"},10),this.close(a,this.delay)},setup:function(t){function e(e){"function"!=typeof e&&(e=function(){}),i&&i.addEventListener("click",function(i){t.onOkay&&"function"==typeof t.onOkay&&(l?t.onOkay(l.value,i):t.onOkay(i)),e(l?{buttonClicked:"ok",inputValue:l.value,event:i}:{buttonClicked:"ok",event:i}),o(n)}),a&&a.addEventListener("click",function(i){t.onCancel&&"function"==typeof t.onCancel&&t.onCancel(i),e({buttonClicked:"cancel",event:i}),o(n)}),l&&l.addEventListener("keyup",function(t){13===t.which&&i.click()})}var n=document.createElement("div");n.className="alertify hide",n.innerHTML=this.build(t);var i=n.querySelector(".ok"),a=n.querySelector(".cancel"),l=n.querySelector("input"),s=n.querySelector("label");l&&("string"==typeof this.promptPlaceholder&&(s?s.textContent=this.promptPlaceholder:l.placeholder=this.promptPlaceholder),"string"==typeof this.promptValue&&(l.value=this.promptValue));var r;return"function"==typeof Promise?r=new Promise(e):e(),this.parent.appendChild(n),setTimeout(function(){n.classList.remove("hide"),l&&t.type&&"prompt"===t.type?(l.select(),l.focus()):i&&i.focus()},100),r},okBtn:function(t){return this.okLabel=t,this},setDelay:function(t){return t=t||0,this.delay=isNaN(t)?this.defaultDelay:parseInt(t,10),this},cancelBtn:function(t){return this.cancelLabel=t,this},setMaxLogItems:function(t){this.maxLogItems=parseInt(t||this.defaultMaxLogItems)},theme:function(t){switch(t.toLowerCase()){case"bootstrap":this.dialogs.buttons.ok="<button class='ok btn btn-primary' tabindex='1'>{{ok}}</button>",this.dialogs.buttons.cancel="<button class='cancel btn btn-default' tabindex='2'>{{cancel}}</button>",this.dialogs.input="<input type='text' class='form-control'>";break;case"purecss":this.dialogs.buttons.ok="<button class='ok pure-button' tabindex='1'>{{ok}}</button>",this.dialogs.buttons.cancel="<button class='cancel pure-button' tabindex='2'>{{cancel}}</button>";break;case"mdl":case"material-design-light":this.dialogs.buttons.ok="<button class='ok mdl-button mdl-js-button mdl-js-ripple-effect'  tabindex='1'>{{ok}}</button>",this.dialogs.buttons.cancel="<button class='cancel mdl-button mdl-js-button mdl-js-ripple-effect' tabindex='2'>{{cancel}}</button>",this.dialogs.input="<div class='mdl-textfield mdl-js-textfield'><input class='mdl-textfield__input'><label class='md-textfield__label'></label></div>";break;case"angular-material":this.dialogs.buttons.ok="<button class='ok md-primary md-button' tabindex='1'>{{ok}}</button>",this.dialogs.buttons.cancel="<button class='cancel md-button' tabindex='2'>{{cancel}}</button>",this.dialogs.input="<div layout='column'><md-input-container md-no-float><input type='text'></md-input-container></div>";break;case"default":default:this.dialogs.buttons.ok=this.defaultDialogs.buttons.ok,this.dialogs.buttons.cancel=this.defaultDialogs.buttons.cancel,this.dialogs.input=this.defaultDialogs.input}},reset:function(){this.parent=document.body,this.theme("default"),this.okBtn(this.defaultOkLabel),this.cancelBtn(this.defaultCancelLabel),this.setMaxLogItems(),this.promptValue="",this.promptPlaceholder="",this.delay=this.defaultDelay,this.setCloseLogOnClick(this.closeLogOnClickDefault),this.setLogPosition("bottom left"),this.logTemplateMethod=null},injectCSS:function(){if(!document.querySelector("#alertifyCSS")){var t=document.getElementsByTagName("head")[0],e=document.createElement("style");e.type="text/css",e.id="alertifyCSS",e.innerHTML=".alertify-logs>*{padding:12px 24px;color:#fff;box-shadow:0 2px 5px 0 rgba(0,0,0,.2);border-radius:1px}.alertify-logs>*,.alertify-logs>.default{background:rgba(0,0,0,.8)}.alertify-logs>.error{background:rgba(244,67,54,.8)}.alertify-logs>.success{background:rgba(76,175,80,.9)}.alertify{position:fixed;background-color:rgba(0,0,0,.3);left:0;right:0;top:0;bottom:0;width:100%;height:100%;z-index:1}.alertify.hide{opacity:0;pointer-events:none}.alertify,.alertify.show{box-sizing:border-box;transition:all .33s cubic-bezier(.25,.8,.25,1)}.alertify,.alertify *{box-sizing:border-box}.alertify .dialog{padding:12px}.alertify .alert,.alertify .dialog{width:100%;margin:0 auto;position:relative;top:50%;transform:translateY(-50%)}.alertify .alert>*,.alertify .dialog>*{width:400px;max-width:95%;margin:0 auto;text-align:center;padding:12px;background:#fff;box-shadow:0 2px 4px -1px rgba(0,0,0,.14),0 4px 5px 0 rgba(0,0,0,.098),0 1px 10px 0 rgba(0,0,0,.084)}.alertify .alert .msg,.alertify .dialog .msg{padding:12px;margin-bottom:12px;margin:0;text-align:left}.alertify .alert input:not(.form-control),.alertify .dialog input:not(.form-control){margin-bottom:15px;width:100%;font-size:100%;padding:12px}.alertify .alert input:not(.form-control):focus,.alertify .dialog input:not(.form-control):focus{outline-offset:-2px}.alertify .alert nav,.alertify .dialog nav{text-align:right}.alertify .alert nav button:not(.btn):not(.pure-button):not(.md-button):not(.mdl-button),.alertify .dialog nav button:not(.btn):not(.pure-button):not(.md-button):not(.mdl-button){background:transparent;box-sizing:border-box;color:rgba(0,0,0,.87);position:relative;outline:0;border:0;display:inline-block;-ms-flex-align:center;-ms-grid-row-align:center;align-items:center;padding:0 6px;margin:6px 8px;line-height:36px;min-height:36px;white-space:nowrap;min-width:88px;text-align:center;text-transform:uppercase;font-size:14px;text-decoration:none;cursor:pointer;border:1px solid transparent;border-radius:2px}.alertify .alert nav button:not(.btn):not(.pure-button):not(.md-button):not(.mdl-button):active,.alertify .alert nav button:not(.btn):not(.pure-button):not(.md-button):not(.mdl-button):hover,.alertify .dialog nav button:not(.btn):not(.pure-button):not(.md-button):not(.mdl-button):active,.alertify .dialog nav button:not(.btn):not(.pure-button):not(.md-button):not(.mdl-button):hover{background-color:rgba(0,0,0,.05)}.alertify .alert nav button:not(.btn):not(.pure-button):not(.md-button):not(.mdl-button):focus,.alertify .dialog nav button:not(.btn):not(.pure-button):not(.md-button):not(.mdl-button):focus{border:1px solid rgba(0,0,0,.1)}.alertify .alert nav button.btn,.alertify .dialog nav button.btn{margin:6px 4px}.alertify-logs{position:fixed;z-index:1}.alertify-logs.bottom,.alertify-logs:not(.top){bottom:16px}.alertify-logs.left,.alertify-logs:not(.right){left:16px}.alertify-logs.left>*,.alertify-logs:not(.right)>*{float:left;transform:translateZ(0);height:auto}.alertify-logs.left>.show,.alertify-logs:not(.right)>.show{left:0}.alertify-logs.left>*,.alertify-logs.left>.hide,.alertify-logs:not(.right)>*,.alertify-logs:not(.right)>.hide{left:-110%}.alertify-logs.right{right:16px}.alertify-logs.right>*{float:right;transform:translateZ(0)}.alertify-logs.right>.show{right:0;opacity:1}.alertify-logs.right>*,.alertify-logs.right>.hide{right:-110%;opacity:0}.alertify-logs.top{top:0}.alertify-logs>*{box-sizing:border-box;transition:all .4s cubic-bezier(.25,.8,.25,1);position:relative;clear:both;backface-visibility:hidden;perspective:1000;max-height:0;margin:0;padding:0;overflow:hidden;opacity:0;pointer-events:none}.alertify-logs>.show{margin-top:12px;opacity:1;max-height:1000px;padding:12px;pointer-events:auto}",t.insertBefore(e,t.firstChild)}},removeCSS:function(){var t=document.querySelector("#alertifyCSS");t&&t.parentNode&&t.parentNode.removeChild(t)}};return t.injectCSS(),{_$$alertify:t,parent:function(e){t.parent=e},reset:function(){return t.reset(),this},alert:function(e,o,n){return t.dialog(e,"alert",o,n)||this},confirm:function(e,o,n){return t.dialog(e,"confirm",o,n)||this},prompt:function(e,o,n){return t.dialog(e,"prompt",o,n)||this},log:function(e,o){return t.log(e,"default",o),this},theme:function(e){return t.theme(e),this},success:function(e,o){return t.log(e,"success",o),this},error:function(e,o){return t.log(e,"error",o),this},cancelBtn:function(e){return t.cancelBtn(e),this},okBtn:function(e){return t.okBtn(e),this},delay:function(e){return t.setDelay(e),this},placeholder:function(e){return t.promptPlaceholder=e,this},defaultValue:function(e){return t.promptValue=e,this},maxLogItems:function(e){return t.setMaxLogItems(e),this},closeLogOnClick:function(e){return t.setCloseLogOnClick(!!e),this},logPosition:function(e){return t.setLogPosition(e||""),this},setLogTemplate:function(e){return t.logTemplateMethod=e,this},clearLogs:function(){return t.setupLogContainer().innerHTML="",this},version:t.version}}var e=500,o=function(t){if(t){var o=function(){t&&t.parentNode&&t.parentNode.removeChild(t)};t.classList.remove("show"),t.classList.add("hide"),t.addEventListener("transitionend",o),setTimeout(o,e)}};if("undefined"!=typeof module&&module&&module.exports){module.exports=function(){return new t};var n=new t;for(var i in n)module.exports[i]=n[i]}else"function"==typeof define&&define.amd?define(function(){return new t}):window.alertify=new t}();
/*!***************************************************
* mark.js v9.0.0
* https://markjs.io/
* Copyright (c) 2014–2018, Julian Kühnel
* Released under the MIT license https://git.io/vwTVl
*****************************************************/
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Mark=t()}(this,function(){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var i=
/* */
function(){function e(n){var r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:5e3;t(this,e),this.ctx=n,this.iframes=r,this.exclude=o,this.iframesTimeout=i}return r(e,[{key:"getContexts",value:function(){var e=[];return(void 0!==this.ctx&&this.ctx?NodeList.prototype.isPrototypeOf(this.ctx)?Array.prototype.slice.call(this.ctx):Array.isArray(this.ctx)?this.ctx:"string"==typeof this.ctx?Array.prototype.slice.call(document.querySelectorAll(this.ctx)):[this.ctx]:[]).forEach(function(t){var n=e.filter(function(e){return e.contains(t)}).length>0;-1!==e.indexOf(t)||n||e.push(t)}),e}},{key:"getIframeContents",value:function(e,t){var n,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){};try{var o=e.contentWindow;if(n=o.document,!o||!n)throw new Error("iframe inaccessible")}catch(e){r()}n&&t(n)}},{key:"isIframeBlank",value:function(e){var t="about:blank",n=e.getAttribute("src").trim();return e.contentWindow.location.href===t&&n!==t&&n}},{key:"observeIframeLoad",value:function(e,t,n){var r=this,o=!1,i=null,a=function a(){if(!o){o=!0,clearTimeout(i);try{r.isIframeBlank(e)||(e.removeEventListener("load",a),r.getIframeContents(e,t,n))}catch(e){n()}}};e.addEventListener("load",a),i=setTimeout(a,this.iframesTimeout)}},{key:"onIframeReady",value:function(e,t,n){try{"complete"===e.contentWindow.document.readyState?this.isIframeBlank(e)?this.observeIframeLoad(e,t,n):this.getIframeContents(e,t,n):this.observeIframeLoad(e,t,n)}catch(e){n()}}},{key:"waitForIframes",value:function(e,t){var n=this,r=0;this.forEachIframe(e,function(){return!0},function(e){r++,n.waitForIframes(e.querySelector("html"),function(){--r||t()})},function(e){e||t()})}},{key:"forEachIframe",value:function(t,n,r){var o=this,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(){},a=t.querySelectorAll("iframe"),s=a.length,c=0;a=Array.prototype.slice.call(a);var u=function(){--s<=0&&i(c)};s||u(),a.forEach(function(t){e.matches(t,o.exclude)?u():o.onIframeReady(t,function(e){n(t)&&(c++,r(e)),u()},u)})}},{key:"createIterator",value:function(e,t,n){return document.createNodeIterator(e,t,n,!1)}},{key:"createInstanceOnIframe",value:function(t){return new e(t.querySelector("html"),this.iframes)}},{key:"compareNodeIframe",value:function(e,t,n){if(e.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_PRECEDING){if(null===t)return!0;if(t.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_FOLLOWING)return!0}return!1}},{key:"getIteratorNode",value:function(e){var t=e.previousNode();return{prevNode:t,node:null===t?e.nextNode():e.nextNode()&&e.nextNode()}}},{key:"checkIframeFilter",value:function(e,t,n,r){var o=!1,i=!1;return r.forEach(function(e,t){e.val===n&&(o=t,i=e.handled)}),this.compareNodeIframe(e,t,n)?(!1!==o||i?!1===o||i||(r[o].handled=!0):r.push({val:n,handled:!0}),!0):(!1===o&&r.push({val:n,handled:!1}),!1)}},{key:"handleOpenIframes",value:function(e,t,n,r){var o=this;e.forEach(function(e){e.handled||o.getIframeContents(e.val,function(e){o.createInstanceOnIframe(e).forEachNode(t,n,r)})})}},{key:"iterateThroughNodes",value:function(e,t,n,r,o){for(var i,a,s,c=this,u=this.createIterator(t,e,r),l=[],h=[];s=void 0,s=c.getIteratorNode(u),a=s.prevNode,i=s.node;)this.iframes&&this.forEachIframe(t,function(e){return c.checkIframeFilter(i,a,e,l)},function(t){c.createInstanceOnIframe(t).forEachNode(e,function(e){return h.push(e)},r)}),h.push(i);h.forEach(function(e){n(e)}),this.iframes&&this.handleOpenIframes(l,e,n,r),o()}},{key:"forEachNode",value:function(e,t,n){var r=this,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(){},i=this.getContexts(),a=i.length;a||o(),i.forEach(function(i){var s=function(){r.iterateThroughNodes(e,i,t,n,function(){--a<=0&&o()})};r.iframes?r.waitForIframes(i,s):s()})}}],[{key:"matches",value:function(e,t){var n="string"==typeof t?[t]:t,r=e.matches||e.matchesSelector||e.msMatchesSelector||e.mozMatchesSelector||e.oMatchesSelector||e.webkitMatchesSelector;if(r){var o=!1;return n.every(function(t){return!r.call(e,t)||(o=!0,!1)}),o}return!1}}]),e}(),a=
/* */
function(){function e(n){t(this,e),this.opt=o({},{diacritics:!0,synonyms:{},accuracy:"partially",caseSensitive:!1,ignoreJoiners:!1,ignorePunctuation:[],wildcards:"disabled"},n)}return r(e,[{key:"create",value:function(e){return"disabled"!==this.opt.wildcards&&(e=this.setupWildcardsRegExp(e)),e=this.escapeStr(e),Object.keys(this.opt.synonyms).length&&(e=this.createSynonymsRegExp(e)),(this.opt.ignoreJoiners||this.opt.ignorePunctuation.length)&&(e=this.setupIgnoreJoinersRegExp(e)),this.opt.diacritics&&(e=this.createDiacriticsRegExp(e)),e=this.createMergedBlanksRegExp(e),(this.opt.ignoreJoiners||this.opt.ignorePunctuation.length)&&(e=this.createJoinersRegExp(e)),"disabled"!==this.opt.wildcards&&(e=this.createWildcardsRegExp(e)),e=this.createAccuracyRegExp(e),new RegExp(e,"gm".concat(this.opt.caseSensitive?"":"i"))}},{key:"sortByLength",value:function(e){return e.sort(function(e,t){return e.length===t.length?e>t?1:-1:t.length-e.length})}},{key:"escapeStr",value:function(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}},{key:"createSynonymsRegExp",value:function(e){var t=this,n=this.opt.synonyms,r=this.opt.caseSensitive?"":"i",o=this.opt.ignoreJoiners||this.opt.ignorePunctuation.length?"\0":"";for(var i in n)if(n.hasOwnProperty(i)){var a=Array.isArray(n[i])?n[i]:[n[i]];a.unshift(i),(a=this.sortByLength(a).map(function(e){return"disabled"!==t.opt.wildcards&&(e=t.setupWildcardsRegExp(e)),e=t.escapeStr(e)}).filter(function(e){return""!==e})).length>1&&(e=e.replace(new RegExp("(".concat(a.map(function(e){return t.escapeStr(e)}).join("|"),")"),"gm".concat(r)),o+"(".concat(a.map(function(e){return t.processSynonyms(e)}).join("|"),")")+o))}return e}},{key:"processSynonyms",value:function(e){return(this.opt.ignoreJoiners||this.opt.ignorePunctuation.length)&&(e=this.setupIgnoreJoinersRegExp(e)),e}},{key:"setupWildcardsRegExp",value:function(e){return(e=e.replace(/(?:\\)*\?/g,function(e){return"\\"===e.charAt(0)?"?":""})).replace(/(?:\\)*\*/g,function(e){return"\\"===e.charAt(0)?"*":""})}},{key:"createWildcardsRegExp",value:function(e){var t="withSpaces"===this.opt.wildcards;return e.replace(/\u0001/g,t?"[\\S\\s]?":"\\S?").replace(/\u0002/g,t?"[\\S\\s]*?":"\\S*")}},{key:"setupIgnoreJoinersRegExp",value:function(e){return e.replace(/[^(|)\\]/g,function(e,t,n){var r=n.charAt(t+1);return/[(|)\\]/.test(r)||""===r?e:e+"\0"})}},{key:"createJoinersRegExp",value:function(e){var t=[],n=this.opt.ignorePunctuation;return Array.isArray(n)&&n.length&&t.push(this.escapeStr(n.join(""))),this.opt.ignoreJoiners&&t.push("\\u00ad\\u200b\\u200c\\u200d"),t.length?e.split(/\u0000+/).join("[".concat(t.join(""),"]*")):e}},{key:"createDiacriticsRegExp",value:function(e){var t=this.opt.caseSensitive?"":"i",n=this.opt.caseSensitive?["aàáảãạăằắẳẵặâầấẩẫậäåāą","AÀÁẢÃẠĂẰẮẲẴẶÂẦẤẨẪẬÄÅĀĄ","cçćč","CÇĆČ","dđď","DĐĎ","eèéẻẽẹêềếểễệëěēę","EÈÉẺẼẸÊỀẾỂỄỆËĚĒĘ","iìíỉĩịîïī","IÌÍỈĨỊÎÏĪ","lł","LŁ","nñňń","NÑŇŃ","oòóỏõọôồốổỗộơởỡớờợöøō","OÒÓỎÕỌÔỒỐỔỖỘƠỞỠỚỜỢÖØŌ","rř","RŘ","sšśșş","SŠŚȘŞ","tťțţ","TŤȚŢ","uùúủũụưừứửữựûüůū","UÙÚỦŨỤƯỪỨỬỮỰÛÜŮŪ","yýỳỷỹỵÿ","YÝỲỶỸỴŸ","zžżź","ZŽŻŹ"]:["aàáảãạăằắẳẵặâầấẩẫậäåāąAÀÁẢÃẠĂẰẮẲẴẶÂẦẤẨẪẬÄÅĀĄ","cçćčCÇĆČ","dđďDĐĎ","eèéẻẽẹêềếểễệëěēęEÈÉẺẼẸÊỀẾỂỄỆËĚĒĘ","iìíỉĩịîïīIÌÍỈĨỊÎÏĪ","lłLŁ","nñňńNÑŇŃ","oòóỏõọôồốổỗộơởỡớờợöøōOÒÓỎÕỌÔỒỐỔỖỘƠỞỠỚỜỢÖØŌ","rřRŘ","sšśșşSŠŚȘŞ","tťțţTŤȚŢ","uùúủũụưừứửữựûüůūUÙÚỦŨỤƯỪỨỬỮỰÛÜŮŪ","yýỳỷỹỵÿYÝỲỶỸỴŸ","zžżźZŽŻŹ"],r=[];return e.split("").forEach(function(o){n.every(function(n){if(-1!==n.indexOf(o)){if(r.indexOf(n)>-1)return!1;e=e.replace(new RegExp("[".concat(n,"]"),"gm".concat(t)),"[".concat(n,"]")),r.push(n)}return!0})}),e}},{key:"createMergedBlanksRegExp",value:function(e){return e.replace(/[\s]+/gim,"[\\s]+")}},{key:"createAccuracyRegExp",value:function(e){var t=this,n=this.opt.accuracy,r="string"==typeof n?n:n.value,o="string"==typeof n?[]:n.limiters,i="";switch(o.forEach(function(e){i+="|".concat(t.escapeStr(e))}),r){case"partially":default:return"()(".concat(e,")");case"complementary":return i="\\s"+(i||this.escapeStr("!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~¡¿")),"()([^".concat(i,"]*").concat(e,"[^").concat(i,"]*)");case"exactly":return"(^|\\s".concat(i,")(").concat(e,")(?=$|\\s").concat(i,")")}}}]),e}(),s=
/* */
function(){function n(e){t(this,n),this.ctx=e,this.ie=!1;var r=window.navigator.userAgent;(r.indexOf("MSIE")>-1||r.indexOf("Trident")>-1)&&(this.ie=!0)}return r(n,[{key:"log",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"debug",r=this.opt.log;this.opt.debug&&"object"===e(r)&&"function"==typeof r[n]&&r[n]("mark.js: ".concat(t))}},{key:"getSeparatedKeywords",value:function(e){var t=this,n=[];return e.forEach(function(e){t.opt.separateWordSearch?e.split(" ").forEach(function(e){e.trim()&&-1===n.indexOf(e)&&n.push(e)}):e.trim()&&-1===n.indexOf(e)&&n.push(e)}),{keywords:n.sort(function(e,t){return t.length-e.length}),length:n.length}}},{key:"isNumeric",value:function(e){return Number(parseFloat(e))==e}},{key:"checkRanges",value:function(e){var t=this;if(!Array.isArray(e)||"[object Object]"!==Object.prototype.toString.call(e[0]))return this.log("markRanges() will only accept an array of objects"),this.opt.noMatch(e),[];var n=[],r=0;return e.sort(function(e,t){return e.start-t.start}).forEach(function(e){var o=t.callNoMatchOnInvalidRanges(e,r),i=o.start,a=o.end;o.valid&&(e.start=i,e.length=a-i,n.push(e),r=a)}),n}},{key:"callNoMatchOnInvalidRanges",value:function(e,t){var n,r,o=!1;return e&&void 0!==e.start?(r=(n=parseInt(e.start,10))+parseInt(e.length,10),this.isNumeric(e.start)&&this.isNumeric(e.length)&&r-t>0&&r-n>0?o=!0:(this.log("Ignoring invalid or overlapping range: "+"".concat(JSON.stringify(e))),this.opt.noMatch(e))):(this.log("Ignoring invalid range: ".concat(JSON.stringify(e))),this.opt.noMatch(e)),{start:n,end:r,valid:o}}},{key:"checkWhitespaceRanges",value:function(e,t,n){var r,o=!0,i=n.length,a=t-i,s=parseInt(e.start,10)-a;return(r=(s=s>i?i:s)+parseInt(e.length,10))>i&&(r=i,this.log("End range automatically set to the max value of ".concat(i))),s<0||r-s<0||s>i||r>i?(o=!1,this.log("Invalid range: ".concat(JSON.stringify(e))),this.opt.noMatch(e)):""===n.substring(s,r).replace(/\s+/g,"")&&(o=!1,this.log("Skipping whitespace only range: "+JSON.stringify(e)),this.opt.noMatch(e)),{start:s,end:r,valid:o}}},{key:"getTextNodes",value:function(e){var t=this,n="",r=[];this.iterator.forEachNode(NodeFilter.SHOW_TEXT,function(e){r.push({start:n.length,end:(n+=e.textContent).length,node:e})},function(e){return t.matchesExclude(e.parentNode)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT},function(){e({value:n,nodes:r})})}},{key:"matchesExclude",value:function(e){return i.matches(e,this.opt.exclude.concat(["script","style","title","head","html"]))}},{key:"wrapRangeInTextNode",value:function(e,t,n){var r=this.opt.element?this.opt.element:"mark",o=e.splitText(t),i=o.splitText(n-t),a=document.createElement(r);return a.setAttribute("data-markjs","true"),this.opt.className&&a.setAttribute("class",this.opt.className),a.textContent=o.textContent,o.parentNode.replaceChild(a,o),i}},{key:"wrapRangeInMappedTextNode",value:function(e,t,n,r,o){var i=this;e.nodes.every(function(a,s){var c=e.nodes[s+1];if(void 0===c||c.start>t){if(!r(a.node))return!1;var u=t-a.start,l=(n>a.end?a.end:n)-a.start,h=e.value.substr(0,a.start),f=e.value.substr(l+a.start);if(a.node=i.wrapRangeInTextNode(a.node,u,l),e.value=h+f,e.nodes.forEach(function(t,n){n>=s&&(e.nodes[n].start>0&&n!==s&&(e.nodes[n].start-=l),e.nodes[n].end-=l)}),n-=l,o(a.node.previousSibling,a.start),!(n>a.end))return!1;t=a.end}return!0})}},{key:"wrapGroups",value:function(e,t,n,r){return r((e=this.wrapRangeInTextNode(e,t,t+n)).previousSibling),e}},{key:"separateGroups",value:function(e,t,n,r,o){for(var i=t.length,a=1;a<i;a++){var s=e.textContent.indexOf(t[a]);t[a]&&s>-1&&r(t[a],e)&&(e=this.wrapGroups(e,s,t[a].length,o))}return e}},{key:"wrapMatches",value:function(e,t,n,r,o){var i=this,a=0===t?0:t+1;this.getTextNodes(function(t){t.nodes.forEach(function(t){var o;for(t=t.node;null!==(o=e.exec(t.textContent))&&""!==o[a];){if(i.opt.separateGroups)t=i.separateGroups(t,o,a,n,r);else{if(!n(o[a],t))continue;var s=o.index;if(0!==a)for(var c=1;c<a;c++)s+=o[c].length;t=i.wrapGroups(t,s,o[a].length,r)}e.lastIndex=0}}),o()})}},{key:"wrapMatchesAcrossElements",value:function(e,t,n,r,o){var i=this,a=0===t?0:t+1;this.getTextNodes(function(t){for(var s;null!==(s=e.exec(t.value))&&""!==s[a];){var c=s.index;if(0!==a)for(var u=1;u<a;u++)c+=s[u].length;var l=c+s[a].length;i.wrapRangeInMappedTextNode(t,c,l,function(e){return n(s[a],e)},function(t,n){e.lastIndex=n,r(t)})}o()})}},{key:"wrapRangeFromIndex",value:function(e,t,n,r){var o=this;this.getTextNodes(function(i){var a=i.value.length;e.forEach(function(e,r){var s=o.checkWhitespaceRanges(e,a,i.value),c=s.start,u=s.end;s.valid&&o.wrapRangeInMappedTextNode(i,c,u,function(n){return t(n,e,i.value.substring(c,u),r)},function(t){n(t,e)})}),r()})}},{key:"unwrapMatches",value:function(e){for(var t=e.parentNode,n=document.createDocumentFragment();e.firstChild;)n.appendChild(e.removeChild(e.firstChild));t.replaceChild(n,e),this.ie?this.normalizeTextNode(t):t.normalize()}},{key:"normalizeTextNode",value:function(e){if(e){if(3===e.nodeType)for(;e.nextSibling&&3===e.nextSibling.nodeType;)e.nodeValue+=e.nextSibling.nodeValue,e.parentNode.removeChild(e.nextSibling);else this.normalizeTextNode(e.firstChild);this.normalizeTextNode(e.nextSibling)}}},{key:"markRegExp",value:function(e,t){var n=this;this.opt=t,this.log('Searching with expression "'.concat(e,'"'));var r=0,o="wrapMatches";this.opt.acrossElements&&(o="wrapMatchesAcrossElements"),this[o](e,this.opt.ignoreGroups,function(e,t){return n.opt.filter(t,e,r)},function(e){r++,n.opt.each(e)},function(){0===r&&n.opt.noMatch(e),n.opt.done(r)})}},{key:"mark",value:function(e,t){var n=this;this.opt=t;var r=0,o="wrapMatches",i=this.getSeparatedKeywords("string"==typeof e?[e]:e),s=i.keywords,c=i.length;this.opt.acrossElements&&(o="wrapMatchesAcrossElements"),0===c?this.opt.done(r):function e(t){var i=new a(n.opt).create(t),u=0;n.log('Searching with expression "'.concat(i,'"')),n[o](i,1,function(e,o){return n.opt.filter(o,t,r,u)},function(e){u++,r++,n.opt.each(e)},function(){0===u&&n.opt.noMatch(t),s[c-1]===t?n.opt.done(r):e(s[s.indexOf(t)+1])})}(s[0])}},{key:"markRanges",value:function(e,t){var n=this;this.opt=t;var r=0,o=this.checkRanges(e);o&&o.length?(this.log("Starting to mark with the following ranges: "+JSON.stringify(o)),this.wrapRangeFromIndex(o,function(e,t,r,o){return n.opt.filter(e,t,r,o)},function(e,t){r++,n.opt.each(e,t)},function(){n.opt.done(r)})):this.opt.done(r)}},{key:"unmark",value:function(e){var t=this;this.opt=e;var n=this.opt.element?this.opt.element:"*";n+="[data-markjs]",this.opt.className&&(n+=".".concat(this.opt.className)),this.log('Removal selector "'.concat(n,'"')),this.iterator.forEachNode(NodeFilter.SHOW_ELEMENT,function(e){t.unwrapMatches(e)},function(e){var r=i.matches(e,n),o=t.matchesExclude(e);return!r||o?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT},this.opt.done)}},{key:"opt",set:function(e){this._opt=o({},{element:"",className:"",exclude:[],iframes:!1,iframesTimeout:5e3,separateWordSearch:!0,acrossElements:!1,ignoreGroups:0,each:function(){},noMatch:function(){},filter:function(){return!0},done:function(){},debug:!1,log:window.console},e)},get:function(){return this._opt}},{key:"iterator",get:function(){return new i(this.ctx,this.opt.iframes,this.opt.exclude,this.opt.iframesTimeout)}}]),n}();return function(e){var t=this,n=new s(e);return this.mark=function(e,r){return n.mark(e,r),t},this.markRegExp=function(e,r){return n.markRegExp(e,r),t},this.markRanges=function(e,r){return n.markRanges(e,r),t},this.unmark=function(e){return n.unmark(e),t},this}});
var url = '';
var api = '';
var token = document.querySelector('#token').getAttribute('value');
var isLoggedIn = false;
var isVIP = false;
var userId = null;
var userRole = 10;
var userDate = null;
var realtime = false;

var lockAPI = {}

var blockData = {}

try {
    url = window.location.origin;
} catch(e) {
    try {
        url = window.location.protocol + '//' + window.location.host;
    } catch (e) {
        url = window.location.href.split('/')[0] + '//' + window.location.host;
    }
}

var mangaDomain = '/truyen-tranh';
try {
    mangaDomain = document.querySelector('#manga-url').value;
} catch(e) {}

api = url + '/api/v2';

try {
    userId = document.querySelector('#user-id').value;
    if (userId) {
        isLoggedIn = true;
        try {
            if (document.querySelector('#user-vip').value) {
                isVIP = true;
            }
        } catch(e) {}
        try {
            userRole = parseInt(document.querySelector('#user-role').value);
        } catch(e) {}
        try {
            userDate = document.querySelector('#user-date').value;
        } catch(e) {}
    }
} catch(e) {}

var _GLOBAL = {
    _URL: url,
    _API: api,
    _TOKEN: token,
    _IS_LOGGED_IN: isLoggedIn,
    _IS_VIP: isVIP,
    _USER_ID: userId,
    _USER_ROLE: userRole,
    _USER_DATE: userDate
}

var imad = {
	data: {},
	components: {},
	methods: {}
}

imad.pages = {}

imad.setData = function(name, data) {
	imad.data[name] = data;
}

imad.setComponent = function(name, component) {
	imad.components[name] = component;
}

imad.setPage = function(name, page) {
	imad.pages[name] = page;
}
/**
 * Get element for short write
 * @param  {string} selectors [#id, .class]
 * @return {object} element
 */
imad.getElement = function(selectors) {
	return document.querySelector(selectors);
}

/**
 * Get all elements for short write
 * @param  {string} selectors [#id, .class]
 * @return {object} elements
 */
imad.getAllElements = function(selectors) {

    return document.querySelectorAll(selectors);
}

/**
 * Create element by js to avoid showing data from written html
 * We also control elements easily in array
 * @param  {string} identity       [identity to use as a component]
 * @param  {string} tag        [tag type: div, ul, span, ...]
 * @param  {string} className  [can insert multi class]
 * @param  {object} options    [innerHTML, childrens]
 * @param  {object} properties [insert attributes]
 * @return {object} element
 */
imad.createElement = function(identity, tag, className, options, properties) {

    var element = document.createElement(tag);

    element.className = className;
    element.identity = identity;

    if (!options) {
        options = {}
    }

    if (properties) {

        for (var i = 0; i < properties.length; i++) {
            element.setAttribute(properties[i].identity, properties[i].value);
        }
    }

    if (options.innerHTML) {
        element.innerHTML = options.innerHTML;
    }

    if (options.childrens) {

        for (var i = 0; i < options.childrens.length; i++) {

            var children = imad.createElement(options.childrens[i].identity, options.childrens[i].tag, options.childrens[i].className, options.childrens[i].options, options.childrens[i].properties);

            element.appendChild(children);
            element[options.childrens[i].identity] = children;
        }
    }

    return element;
}

/**
 * Remove an elemnet for short write
 * @param  {object} element [description]
 */
imad.removeElement = function(element) {
    try {
        element.parentNode.removeChild(element);
    } catch(e) {}
}

/**
 * [getAttribute description]
 * @param  {dom} element   [description]
 * @param  {string} attribute [description]
 * @return {dom}           [description]
 */
imad.getAttribute = function(element, attribute) {
    return element.getAttribute(attribute);
}

/**
 * [getAttributes description]
 * @param  {dom} element    [description]
 * @param  {array} attributes [description]
 * @return {array}            [description]
 */
imad.getAttributes = function(element, attributes) {
    var arr = [];
    for (var i = 0; i < attributes.length; i++) {
        var key = imad.camelize(attributes[i]);
        var data = element.getAttribute('data-' + attributes[i]);
        if (parseInt(data) == data) {
            data = parseInt(data);
        }
        arr[key] = data;
    }
    return arr;
}

imad.onElementHeightChange = function(element, callback) {
      var lastHeight = element.clientHeight, newHeight;

      (function run() {
        newHeight = element.clientHeight;
        if (lastHeight != newHeight) {
              callback(newHeight);
        }
        lastHeight = newHeight

        if (element.onElementHeightChangeTimer) {
              clearTimeout(element.onElementHeightChangeTimer);
        }

        element.onElementHeightChangeTimer = setTimeout(run, 200);
      })()
}
/**
 * [sendAjax description]
 * @param  {string} method [GET, POST, PUT, DELETE]
 * @param  {string} url    [description]
 * @param  {object} data   [description]
 * @return {XMLHttp}        [description]
 */
imad.ajax = function(method, url, data) {

    var xhr = new XMLHttpRequest();

    xhr.open(method, url);
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xhr.setRequestHeader('Content-Type', 'application/json');

    if (method != 'GET') {
        xhr.setRequestHeader('X-CSRF-TOKEN', _GLOBAL._TOKEN);
    }

    xhr.withCredentials = true;

    if (!data) {
        xhr.send();
    } else {
        xhr.send(JSON.stringify(data));
    }

    return xhr;
}
/**
 * Active right-bar to show login form
 */
imad.showLoginForm = function() {
    alertify.confirm('Chức năng này chỉ dành cho thành viên đã đăng nhập', function () {
        try {
            activeNavbarRight();
        } catch(e) {}
    });
}
imad.formatDate = function(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [year, month, day].join('-');
}

/**
 * [formatTime description]
 * @param  {[type]} timeString [description]
 * @return {[type]}            [description]
 */
imad.formatTime = function(timeString) {
    return timeString.substr(11, 8) + ' ' + timeString.substr(8, 2) + '/' + timeString.substr(5, 2) + '/' + timeString.substr(2, 2);
}

/**
 * [getTimeAgo description]
 * @param  {[type]} date [description]
 * @return {[type]}      [description]
 */
imad.getTimeAgo = function(date) {

  var dateString = date.substring(0, 10);

  if (!ismobile.apple.device) {
    date = new Date(date).getTime();
  } else {
    date = date.substring(0, 19).replace('T', ' ');
    var iosDate = date.split(/[- :]/);
    date = new Date(iosDate[0], iosDate[1]-1, iosDate[2], iosDate[3], iosDate[4], iosDate[5]);
    date = new Date(date).getTime();
  }

  var now = new Date().getTime();
  var diff = (now - date) / 1000;

  if (diff > 2592000) {
    dateString = dateString.split('-');
    return dateString[2] + '-' + dateString[1] + '-' + dateString[0];
  }
  if (diff > 604800) {
    return Math.floor(diff / 604800) + ' tuần trước';
  }
  if (diff > 86400) {
    return Math.floor(diff / 86400) + ' ngày trước';
  }
  if (diff > 3600) {
    return Math.floor(diff / 3600) + ' giờ trước';
  }
  if (diff > 60) {
    return Math.floor(diff / 60) + ' phút trước';
  }
  return Math.floor(diff) + ' giây trước';
}
/**
 * [getPageYOffset description]
 * @return {[type]} [description]
 */
imad.getPageYOffset = function() {
    try {
        return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    } catch(e) {
        return 0;
    }
}


/**
 * [getScrollPageType description]
 * @return {[type]} [description]
 */
imad.getScrollPageType = function() {
    try {
        if (document.body.scrollTop > 0) {
            return 1;
        } else {
            return 2;
        }
    } catch(e) {}
    return 0;
}

/**
 * [scrollTo description]
 * @param  {[type]} element  [description]
 * @param  {[type]} to       [description]
 * @param  {[type]} duration [description]
 * @return {[type]}          [description]
 */
imad.scrollTo = function(element, to, duration) {

    if (duration <= 0) {
        return;
    }

    var difference = to - element.scrollTop;
    var perTick = difference / duration * 10;

    setTimeout(function() {
        element.scrollTop = element.scrollTop + perTick;
        if (element.scrollTop == to) {
            return;
        }
        imad.scrollTo(element, to, duration - 10);
    }, 10);
}

/**
 * [scrollPageTo description]
 * @param  {[type]} to       [description]
 * @param  {[type]} duration [description]
 * @return {[type]}          [description]
 */
imad.scrollPageTo = function(to, duration) {
    try {
        if (document.body.scrollTop > 0) {
            imad.scrollTo(document.body, to, duration);
        } else {
            imad.scrollTo(document.documentElement, to, duration);
        }
        return;
    } catch(e) {}
    window.scrollTo(0, to);
}
/**
 * [paginate description]
 * @param  {int} totalItems  [description]
 * @param  {int} currentPage [description]
 * @param  {int} pageSize    [total items on page]
 * @param  {int} maxPages    [total pages' items will be displayed]
 * @return {[type]}             [description]
 */
imad.paginate = function(totalItems, currentPage, pageSize, maxPages) {

    // calculate total pages
    var totalPages = Math.ceil(totalItems / pageSize);

    // ensure current page isn't out of range
    if (currentPage < 1) {
        currentPage = 1;
    } else if (currentPage > totalPages) {
        currentPage = totalPages;
    }

    var startPage;
    var endPage;
    if (totalPages <= maxPages) {
        // total pages less than max so show all pages
        startPage = 1;
        endPage = totalPages;
    } else {
        // total pages more than max so calculate start and end pages
        var maxPagesBeforeCurrentPage = Math.floor(maxPages / 2);
        var maxPagesAfterCurrentPage = Math.ceil(maxPages / 2) - 1;
        if (currentPage <= maxPagesBeforeCurrentPage) {
            // current page near the start
            startPage = 1;
            endPage = maxPages;
        } else if (currentPage + maxPagesAfterCurrentPage >= totalPages) {
            // current page near the end
            startPage = totalPages - maxPages + 1;
            endPage = totalPages;
        } else {
            // current page somewhere in the middle
            startPage = currentPage - maxPagesBeforeCurrentPage;
            endPage = currentPage + maxPagesAfterCurrentPage;
        }
    }

    // calculate start and end item indexes
    // var startIndex = (currentPage - 1) * pageSize;
    // var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

    // create an array of pages to ng-repeat in the pager control
    // var pages = Array.from(Array((endPage + 1) - startPage).keys()).map(i => startPage + i);

    // return object with all pager properties required by the view
    return {
        totalItems: totalItems,
        currentPage: currentPage,
        pageSize: pageSize,
        totalPages: totalPages,
        startPage: startPage,
        endPage: endPage
    }
}
/**
 * [encodeString description]
 * @param  {[type]} s [description]
 * @param  {[type]} k [description]
 * @return {[type]}   [description]
 */
imad.encodeString = function(s, k) {
    var enc = "";
    var str = "";
    // make sure that input is string
    str = s.toString();
    for (var i = 0; i < s.length; i++) {
        // create block
        var a = s.charCodeAt(i);
        // bitwise XOR
        var b = a ^ k;
        enc = enc + String.fromCharCode(b);
    }
    return enc;
}

imad.camelize = function(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
        if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
        return index === 0 ? match.toLowerCase() : match.toUpperCase();
    }).replace('-', '');
}
/**
 * [getRandom description]
 * @param  {[type]} min [description]
 * @param  {[type]} max [description]
 * @return {[type]}     [description]
 */
imad.getRandom = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

imad.formatNumber = function(number) {
	return number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}
imad.createEmoji = function(type, data, inputEl) {
    var emojiItem = imad.createElement(type + '-' + data.code.split(':')[1], 'li', 'emoji-item', {
    }, [{
        identity: 'style',
        value: 'background-image: url(https://s199.imacdn.com/emoticon/' + type + '/' + data.value + '); background-size: 100% 100%;'
    }]);
    emojiItem.onclick = function() {
        inputEl.value += ' ' + data.code;
    }
    return emojiItem;
}

imad.clickOnEmojiTab = function(element, emojiTypes, tabName, bodyTab, pickerEl, inputEl) {

    element.onclick = function() {
        var bodyTabs = pickerEl.querySelectorAll('.emoji-list');
        for (var i = bodyTabs.length - 1; i >= 0; i--) {
            bodyTabs[i].classList.add('hidden');
        }
        for (var i = emojiTypes.length - 1; i >= 0; i--) {
            emojiTypes[i].classList.remove('activated');
        }
        element.classList.add('activated');
        bodyTab.classList.remove('hidden');

        if (!bodyTab.querySelector('.emoji-item')) {
            for (var j = 0; j < emoji[tabName].length; j++) {
                bodyTab.appendChild(imad.createEmoji(tabName, emoji[tabName][j], inputEl));
            }
            Ps.initialize(bodyTab, {
                minScrollbarLength: 50,
                maxScrollbarLength: 50
            });
        }
    }
}

imad.createEmojiPicker = function(element, inputEl) {
    var emojiToggle = element.querySelector('.emoji-toggle');
    var emojiPicker = element.querySelector('.emoji-picker');
    var emojiClose = element.querySelector('.emoji-close');
    var emojiTypes = element.querySelectorAll('.emoji-picker-type');

    for (var i = 0; i < emojiTypes.length; i++) {
        var tabName = emojiTypes[i].getAttribute('data-tab');
        var bodyTab = emojiPicker.querySelector('.emoji-list.emoji-' + tabName);
        imad.clickOnEmojiTab(emojiTypes[i], emojiTypes, tabName, bodyTab, emojiPicker, inputEl);
    }

    function handleEmojiToggle(e) {
        if (!emojiPicker.contains(e.target) && !emojiToggle.contains(e.target)) {
            emojiPicker.classList.add('hidden');
        }
    }

    emojiToggle.onclick = function() {

        if (!_GLOBAL._IS_LOGGED_IN) {
            imad.showLoginForm();
            return;
        }

        emojiPicker.classList.toggle('hidden');

        var firstEmojiTab = emojiPicker.querySelector('.emoji-list');
        if (!firstEmojiTab.querySelector('.emoji-item')) {
            var tabName = firstEmojiTab.getAttribute('data-tab');
            for (var j = 0; j < emoji[tabName].length; j++) {
                firstEmojiTab.appendChild(imad.createEmoji(tabName, emoji[tabName][j], inputEl));
            }
            Ps.initialize(firstEmojiTab, {
                minScrollbarLength: 50,
                maxScrollbarLength: 50
            });
        }
    }

    emojiClose.onclick = function() {
        emojiPicker.classList.add('hidden');
    }

    window.addEventListener('click', handleEmojiToggle);
    if (ismobile.apple.device) {
        window.addEventListener('touchstart', function(e) {
            handleEmojiToggle(e);
        });
    }
}

var emoji = {}

emoji.panda = [{code: ':daynay:', value: '1.gif'}, {code: ':choe:', value: '2.gif'}, {code: ':herehere:', value: '3.gif'}, {code: ':uhuh:', value: '4.gif'}, {code: ':oea:', value: '5.gif'}, {code: ':veoma:', value: '6.gif'}, {code: ':chetdi:', value: '7.gif'}, {code: ':quaytay:', value: '8.gif'}, {code: ':longlanh:', value: '9.gif'}, {code: ':oizoi:', value: '10.gif'}, {code: ':run:', value: '11.gif'}, {code: ':nani:', value: '12.gif'}, {code: ':bbb:', value: '13.gif'}, {code: ':hitmui:', value: '14.gif'}, {code: ':quaytaylonglanh:', value: '15.gif'}, {code: ':hihi:', value: '16.gif'}, {code: ':gie:', value: '17.gif'}, {code: ':aaa:', value: '18.gif'}, {code: ':eyelove:', value: '19.gif'}, {code: ':bagia:', value: '20.gif'}, {code: ':huchuc:', value: '21.gif'}, {code: ':anbanh:', value: '22.gif'}, {code: ':tucgian:', value: '23.gif'}, {code: ':tromat:', value: '24.gif'}, {code: ':wtf:', value: '25.gif'}, {code: ':liecliec:', value: '26.gif'}, {code: ':hi:', value: '27.gif'}, {code: ':chew:', value: '28.gif'}, {code: ':keke:', value: '29.gif'}, {code: ':quat:', value: '30.gif'}, {code: ':huhu:', value: '31.gif'}, {code: ':clgt:', value: '32.gif'}, {code: ':what:', value: '33.gif'}, {code: ':xuyxuy:', value: '34.gif'}, {code: ':jjj:', value: '35.gif'}, {code: ':hoho:', value: '36.gif'}, {code: ':...:', value: '37.gif'}, {code: ':laclac:', value: '38.gif'}, {code: ':hi2:', value: '39.gif'}, {code: ':ohyeah:', value: '40.gif'}, {code: ':mmm:', value: '41.gif'}, {code: ':acac:', value: '42.gif'}, {code: ':vayvay:', value: '43.gif'}, {code: ':khocloc:', value: '44.gif'}, {code: ':ngoaymui:', value: '45.gif'}, {code: ':hello:', value: '46.gif'}, {code: ':laclac2:', value: '48.gif'}, {code: ':ancut:', value: '49.gif'}, {code: ':rotrot:', value: '50.gif'}, {code: ':uhuhtay:', value: '51.gif'}, {code: ':huytsao:', value: '52.gif'}, {code: ':bagia2:', value: '53.gif'}, {code: ':xuyt:', value: '54.gif'}, {code: ':laclac3:', value: '55.gif'}, {code: ':longlanh2:', value: '56.gif'}, {code: ':clgt2:', value: '57.gif'}, {code: ':choivoi:', value: '58.gif'}, {code: ':uhuh2:', value: '59.gif'}, {code: ':khongbiet:', value: '60.gif'}, {code: ':tinhtien:', value: '61.gif'}, {code: ':canloi:', value: '62.gif'}, {code: ':byebye:', value: '63.gif'}, {code: ':vvv:', value: '64.gif'}, {code: ':naonao:', value: '65.gif'}, {code: ':xeng:', value: '66.gif'}, {code: ':?:', value: '67.gif'}, {code: ':sieunhan:', value: '68.gif'}, {code: ':victoria:', value: '69.gif'}, {code: ':@@:', value: '70.gif'}, {code: ':linhi:', value: '71.gif'}, {code: ':im:', value: '72.gif'}, {code: ':dao:', value: '73.gif'}, {code: ':angel:', value: '74.gif'}, {code: ':deu:', value: '75.gif'}, {code: ':vayco:', value: '76.gif'}, {code: ':sutmui:', value: '77.gif'}, {code: ':tunghoa:', value: '78.gif'}, {code: ':votay:', value: '79.gif'}, {code: ':oi:', value: '80.gif'}, {code: ':tako:', value: '81.gif'}, {code: ':here:', value: '82.gif'}, {code: ':den:', value: '83.gif'}, {code: ':nono:', value: '84.gif'}, {code: ':le:', value: '85.gif'}, {code: ':uongnuoc:', value: '86.gif'}, {code: ':vuvu:', value: '87.gif'}, {code: ':qqq:', value: '88.gif'}, {code: ':leluoi:', value: '89.gif'}, {code: ':matsao:', value: '90.gif'}, {code: ':hehe:', value: '92.gif'}, {code: ':$:', value: '93.gif'}, {code: ':buot:', value: '94.gif'}, {code: ':hamieng:', value: '95.gif'}];
emoji.onion = [{code: ':nani1:', value: '9.gif'}, {code: ':givay:', value: '13.gif'}, {code: ':xitmau:', value: '16.gif'}, {code: ':vungmau:', value: '18.gif'}, {code: ':xoaybong:', value: '19.gif'}, {code: ':cungchia:', value: '21.gif'}, {code: ':oe:', value: '22.gif'}, {code: ':thenthung1:', value: '23.gif'}, {code: ':samhoi:', value: '24.gif'}, {code: ':lamon:', value: '25.gif'}, {code: ':thenthung:', value: '26.gif'}, {code: ':hehe1:', value: '27.gif'}, {code: ':thedo:', value: '28.gif'}, {code: ':lanh:', value: '29.gif'}, {code: ':dongbang:', value: '30.gif'}, {code: ':ngugat:', value: '31.gif'}, {code: ':sapchet:', value: '32.gif'}, {code: ':good:', value: '33.gif'}, {code: ':noqua:', value: '34.gif'}, {code: ':hetcach:', value: '35.gif'}, {code: ':tungtang:', value: '36.gif'}, {code: ':khoc:', value: '37.gif'}, {code: ':chetdi1:', value: '38.gif'}, {code: ':gomo:', value: '39.gif'}, {code: ':dingu:', value: '40.gif'}, {code: ':soqua2:', value: '41.gif'}, {code: ':nongqua:', value: '42.gif'}, {code: ':eatme:', value: '43.gif'}, {code: ':thoimien:', value: '44.gif'}, {code: ':eatme1:', value: '45.gif'}, {code: ':laclu:', value: '46.gif'}, {code: ':thenthung3:', value: '47.gif'}, {code: ':khongquantam:', value: '48.gif'}, {code: ':cogang:', value: '49.gif'}, {code: ':muidai:', value: '50.gif'}, {code: ':khongchiudau:', value: '51.gif'}, {code: ':bye:', value: '52.gif'}, {code: ':bye1:', value: '53.gif'}, {code: ':covu2:', value: '54.gif'}, {code: ':hi1:', value: '56.gif'}, {code: ':die:', value: '57.gif'}, {code: ':sanara:', value: '58.gif'}, {code: ':ngaytho:', value: '60.gif'}, {code: ':hoho1:', value: '61.gif'}, {code: ':biamo:', value: '62.gif'}, {code: ':khongchiudau1:', value: '63.gif'}, {code: ':cryrun:', value: '65.gif'}, {code: ':cuuvoi:', value: '66.gif'}, {code: ':angel1:', value: '67.gif'}, {code: ':mot:', value: '68.gif'}, {code: ':xd:', value: '70.gif'}, {code: ':tuky:', value: '71.gif'}, {code: ':eyelove1:', value: '72.gif'}, {code: ':tuky1:', value: '73.gif'}, {code: ':ngoaymui1:', value: '74.gif'}, {code: ':loden:', value: '75.gif'}, {code: ':bittai:', value: '76.gif'}, {code: ':aaaa:', value: '77.gif'}, {code: ':hetnoi:', value: '78.gif'}, {code: ':laiday:', value: '79.gif'}, {code: ':phut:', value: '81.gif'}, {code: ':coichungdo:', value: '82.gif'}, {code: ':depzai:', value: '83.gif'}, {code: ':quyenanh:', value: '84.gif'}, {code: ':chongday:', value: '85.gif'}, {code: ':psy:', value: '86.gif'}, {code: ':uong:', value: '87.gif'}, {code: ':robot:', value: '88.gif'}, {code: ':dabong:', value: '89.gif'}, {code: ':soqua:', value: '90.gif'}, {code: ':soqua1:', value: '91.gif'}, {code: ':thatim:', value: '92.gif'}, {code: ':hethon:', value: '93.gif'}, {code: ':soc:', value: '94.gif'}, {code: ':thenthung2:', value: '95.gif'}, {code: ':haizz:', value: '96.gif'}, {code: ':caigie:', value: '97.gif'}, {code: ':cuonchan:', value: '98.gif'}, {code: ':hutthuoc:', value: '99.gif'}, {code: ':xiga:', value: '100.gif'}, {code: ':hammuon:', value: '1.gif'}, {code: ':ngoayngoay:', value: '2.gif'}, {code: ':aha:', value: '3.gif'}, {code: ':angel2:', value: '4.gif'}, {code: ':thoisao:', value: '5.gif'}, {code: ':ma:', value: '6.gif'}, {code: ':chayxe:', value: '10.gif'}, {code: ':hura:', value: '11.gif'}, {code: ':luclac:', value: '12.gif'}, {code: ':dead:', value: '14.gif'}, {code: ':chimbay:', value: '15.gif'}, {code: ':hocmau:', value: '17.gif'}, {code: ':dapmay:', value: '20.gif'}, {code: ':chetcmnr:', value: '7.gif'}];
/**
 * [setNoticeItem description]
 * @param {[type]} data    [description]
 * @param {[type]} options [description]
 */
imad.setNoticeItem = function(data, options) {

    if (!options) {
        options = {}
    }

    var timeAgo = 'vài giây trước';
    var thumbnail = '/assets/img/avatar.png';
    var link = 'javascript:void(0);';
    if (data.created_at) {
        timeAgo = imad.getTimeAgo(data.created_at);
    }
    if (data.thumbnail) {
        thumbnail = data.thumbnail;
    }
    if (data.link) {
        link = data.link + '" target="_blank';
    }

    var noticeArea = getElement('.notification-fixed');

    var element = document.createElement('div');
    element.className = 'notification-fixed-item';
    element.innerHTML = '<a href="' + link + '"><div class="notification-fixed-item-thumbnail"><img src="' + thumbnail + '"></div><div class="notification-fixed-item-body"><div class="notification-fixed-item-title">' + data.content + '</div><div class="notification-fixed-item-time"><i class="icon icon-time"></i>' + timeAgo + '</div></div>';
    element.setAttribute('data-id', data.id);

    var elementClose = document.createElement('div');
    elementClose.className = 'notification-fixed-item-close';
    elementClose.innerHTML = '<i class="icon-close"></i>';
    elementClose.onclick = function() {
        noticeArea.removeChild(element);
    }

    element.appendChild(elementClose);
    noticeArea.appendChild(element);

    if (!data.always) {
        setTimeout(function() {
            try {
                noticeArea.removeChild(element);
            } catch(e) {}
        }, 10000);
    }
}

imad.setNavbarItem = function(data, options) {

    var element = document.createElement('div');
    element.className = 'menu-sub-item';

    var target = '';
    var slug = '';
    var thumbnail = data.thumbnail;
    var name = data.name;

    if (data.url) {
        slug = data.url;
        target = ' target="_blank"';
    }
    if (data.link) {
        slug = data.link;
        target = ' target="_blank"';
    }
    if (!slug && data.slug) {
        slug = '/' + data.slug;
    }
    if (!slug) {
        slug = '/video/' + data.id;
    }
    if (data.origin_thumbnail) {
        thumbnail = data.origin_thumbnail;
    } else if (data.poster) {
        thumbnail = data.poster;
    }
    if (data.title) {
        name = data.title;
    }

    element.innerHTML = '<a href="' + slug + '"' + target + '><img src="' + thumbnail + '"><div><span>' + name + '</span></div></a>';

    return element;
}

/**
 * [setFilmItem description]
 * @param {[type]} data    [description]
 * @param {[type]} options [description]
 */
imad.setFilmItem = function(data, options) {

    if (!options) {
        options = {}
    }

    var element = document.createElement('div');
    element.className = 'tray-item';

    // var genres = '<div class="tray-film-genres">';
    // for (var i = 0; i < data.genres.data.length; i++) {
    //     genres += '<span>' + data.genres.data[i].name + '</span>';
    //     if ((i + 1) < data.genres.data.length) {
    //         genres += ',&nbsp;';
    //     }
    // }
    // genres += '</div>';

    var update = '<div class="tray-film-update">';
    if (data.is_movie || data.upcoming) {
        update += data.time;
    } else {
        try {
            update += data.largest_episode.name + ' / ' + data.time;
        } catch(e) {}
    }
    update += '</div>';

    var upcoming = '';
    if (data.upcoming) {
        upcoming = '<div class="tray-item-upcoming">SẮP CHIẾU</div>';
    }

    // element.innerHTML = '<a href="/' + data.slug + '"><img class="tray-item-thumbnail" src="' + data.thumbnail + '"><div class="tray-item-description"><div class="tray-item-title">' + data.name + '</div><div class="tray-item-meta-info"><div class="tray-film-views">' + data.views.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") + ' lượt xem</div><div class="tray-film-likes">' + data.likes.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") + ' thích</div></div></div>' + genres + update + '<div class="tray-item-play-button"><i class="icon-play"></i></div>' + upcoming + '</a>';
    element.innerHTML = '<a href="/' + data.slug + '"><img class="tray-item-thumbnail" src="' + data.thumbnail + '"><div class="tray-item-description"><div class="tray-item-title">' + data.name + '</div><div class="tray-item-meta-info"><div class="tray-film-views">' + data.views.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") + ' lượt xem</div></div></div>' + update + '<div class="tray-item-play-button"><i class="icon-play"></i></div>' + upcoming + '</a>';

    return element;
}

/**
 * [setCartoonItem description]
 * @param {[type]} data    [description]
 * @param {[type]} options [description]
 */
imad.setCartoonItem = function(data, options) {

    if (!options) {
        options = {}
    }

    var element = document.createElement('div');
    element.className = 'tray-item';

    element.innerHTML = '<a href="https://mehoathinh.com/' + data.slug + '" target="_blank"><img class="tray-item-thumbnail" src="' + data.poster + '"><div class="tray-item-description"><div class="tray-item-title">' + data.name + '</div><div class="tray-item-meta-info"><div class="tray-film-views">' + data.views.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") + ' lượt xem</div></div></div><div class="tray-item-play-button"><i class="icon-play"></i></div></a>';

    return element;
}

/**
 * [setVideoItem description]
 * @param {[type]} data [description]
 */
imad.setVideoItem = function(data) {
    var element = document.createElement('div');
    var minutes = Math.floor(data.duration / 60);
    var seconds = data.duration - minutes * 60;
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    element.className = 'video-item';
    element.innerHTML = '<a href="/video/' + data.id + '"><img class="video-item-thumbnail" src="' + data.thumbnail + '"><div class="video-item-title">' + data.title + '</div><div class="video-item-duration">' + minutes + ':' + seconds + '</div><div class="video-item-play-button"><i class="icon-play"></i></div></a>';
    return element;
}

/**
 * [setNewsItem description]
 * @param {[type]} data [description]
 */
imad.setNewsItem = function(data) {
    var element = document.createElement('div');
    element.className = 'news-item';
    // element.innerHTML = '<a href="' + data.url + '" target="_blank"><img class="news-item-thumbnail" src="' + data.thumbnail + '"></a><div class="news-item-meta"><div class="news-item-genre genre-' + data.site.id + '">' + data.site.name + '</div><a href="' + data.url + '" target="_blank"><div class="news-item-title">' + data.title + '</div></a></div>';
    // element.innerHTML = '<a href="' + data.url + '" target="_blank"><img class="news-item-thumbnail" src="' + data.thumbnail + '"></a><div class="news-item-meta"><a href="' + data.url + '" target="_blank"><div class="news-item-title">' + data.title + '</div></a></div>';
    element.innerHTML = '<a href="' + data.url + '" target="_blank"><img class="news-item-thumbnail" src="' + data.thumbnail + '"><div class="news-item-meta"><div class="news-item-title">' + data.title + '</div></div></a>';
    return element;
}

/**
 * [setMangaItem description]
 * @param {[type]} data [description]
 */
imad.setMangaItem = function(data) {
    var element = document.createElement('div');
    element.className = 'manga-item';
    element.innerHTML = '<a href="' + mangaDomain + '/' + data.slug + '/' + data.chapter_slug + '" target="_blank"><img class="manga-item-thumbnail" src="' + data.thumbnail + '"><div class="manga-item-title">' + data.title + '</div><div class="manga-item-meta-info"><span class="manga-item-label">Chap ' + data.chapter_name + '</span></div></a>';
    return element;
}

/**
 * [setMovieItem description]
 * @param {[type]} data [description]
 */
imad.setMovieItem = function(data) {
    var element = document.createElement('div');
    element.className = 'movie-item';

    var upcoming = '';
    if (data.upcoming) {
        upcoming = '<div class="tray-item-upcoming">SẮP CHIẾU</div>';
    }
    // element.innerHTML = '<a href="' + mangaDomain + '/' + data.slug + '/' + data.chapter_slug + '" target="_blank"><img class="manga-item-thumbnail" src="' + data.thumbnail + '"><div class="manga-item-title">' + data.title + '</div><div class="manga-item-meta-info"><span class="manga-item-label">Chap ' + data.chapter_name + '</span></div></a>';
    element.innerHTML = '<a href="/' + data.slug + '"><img class="tray-item-thumbnail" src="' + data.poster + '"><div class="tray-item-description"><div class="tray-item-title">' + data.name + '</div><div class="tray-item-meta-info"><div class="tray-film-views">' + data.views.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") + ' lượt xem</div></div></div><div class="tray-film-update">' + data.time + '</div><div class="tray-item-play-button"><i class="icon-play"></i></div>' + upcoming + '</a>';
    return element;
}

/**
 * [setRankingItem description]
 * @param {[type]} data     [description]
 * @param {[type]} position [description]
 */
imad.setRankingItem = function(data, position) {
    position += 1;
    var element = document.createElement('div');
    element.className = 'ranking-item l90 background-' + (position * 2);
    // var update = '<div class="ranking-item-update">';
    // if (data.is_movie || data.upcoming) {
    //     update += data.time;
    // } else {
    //     try {
    //         update += data.largest_episode.name + ' / ' + data.time;
    //     } catch(e) {}
    // }
    // update += '</div>';
    element.innerHTML = '<a href="/' + data.slug + '"><div class="ranking-item-thumbnail"><img src="' + data.thumbnail + '"></div><div class="ranking-item-top">' + position + '</div></a><div class="ranking-item-meta"><a href="/' + data.slug + '"><div class="ranking-item-title">' + data.name + '</div></a></div>';
    // element.innerHTML = '<a href="/' + data.slug + '"><div class="ranking-item-thumbnail"><img src="' + data.thumbnail + '"></div><div class="ranking-item-top">' + position + '</div></a><div class="ranking-item-meta"><a href="/' + data.slug + '"><div class="ranking-item-title">' + data.name + '</div></a><span class="ranking-item-views">' + data.views.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") + ' lượt xem</span>' + update + '</div>';
    return element;
}
imad.data.block = [];

/**
 * [getBlockData description]
 * @param  {[type]} block [description]
 * @return {[type]}       [description]
 */
imad.getBlockData = function(block) {
    var type = block.getAttribute('data-block');
    var limit = block.getAttribute('data-limit');

    if (imad.data.block[type]) {
        imad.setHomeBlock(block, type, imad.data.block[type], limit);
        return;
    }

    var xhr = imad.ajax('GET', '/json/' + type + '.json');

    xhr.onload = function () {
        // console.log(xhr.responseText)
        var response = JSON.parse(xhr.responseText);
        if (xhr.status == 200) {
            imad.data.block[type] = response;
            imad.setHomeBlock(block, type, response, limit);
        }
    }
}

/**
 * [setHomeBlock description]
 * @param {[type]} block    [description]
 * @param {[type]} type     [description]
 * @param {[type]} response [description]
 */
imad.setHomeBlock = function(block, type, response, limit) {
    var length = response.length;
    if (limit > 0) {
        length = limit;
    }
    for (var i = 0; i < length; i++) {
        if (ismobile.any && i >= 8) {
            return;
        }
        var item = '';
        if (type == 'ranking') {
            if (i >= 6) {
                return;
            }
            item = imad.setRankingItem(response[i], i);
        } else if (type == 'movie' || type == 'license') {
            item = imad.setMovieItem(response[i]);
        } else if (type == 'film' || type == 'picked') {
            item = imad.setFilmItem(response[i]);
        } else if (type == 'cartoon') {
            item = imad.setCartoonItem(response[i]);
        } else if (type == 'video') {
            item = imad.setVideoItem(response[i]);
        } else if (type == 'manga') {
            if (i >= 6) {
                return;
            }
            item = imad.setMangaItem(response[i]);
        } else if (type == 'news') {
            item = imad.setNewsItem(response[i]);
        } else {
            continue;
        }
        block.querySelector('.tray-content').appendChild(item);
    }
}

imad.setNavbarBlock = function(block, type, response) {
    if (ismobile.any) {
        return;
    }
    response.length = 8;
    for (var i = 0; i < response.length; i++) {
        if (type == 'manga') {
            response[i].url = mangaDomain + '/' + response[i].slug;
        }
        var item = imad.setNavbarItem(response[i]);
        block.appendChild(item);
    }
}
/**
 * set defer image to load page faster
 * @type {[type]}
 */
var imgDefer = document.getElementsByTagName('img');
for (var i=0; i<imgDefer.length; i++) {
    if(imgDefer[i].getAttribute('data-src')) {
        imgDefer[i].setAttribute('src',imgDefer[i].getAttribute('data-src'));
        // imgDefer[i].removeAttribute('data-src');
    }
}
var navbar = {}

navbar.el_ = {};

navbar.el_.root = imad.getElement('nav');
navbar.el_.left = imad.getElement('#navbar-left');
navbar.el_.right = imad.getElement('#navbar-right');
navbar.el_.toggle = imad.getElement('#navbar-toggle');
navbar.el_.menu = imad.getElement('.navbar-menu');
navbar.el_.search = imad.getElement('.navbar-search');
navbar.el_.avatar = imad.getElement('#user-avatar');
navbar.el_.notification = imad.getElement('#user-notification');
navbar.el_.unreadNotification = imad.getElement('#user-notification span');
// navbar.el_.userChat = imad.getElement('#user-chat');
// navbar.el_.unreadChat = imad.getElement('#user-chat span');
// navbar.el_.userFilm = imad.getElement('#user-film');
navbar.el_.theme = imad.getElement('#user-theme');
navbar.el_.tab = imad.getElement('.navbar-user-tab');
navbar.el_.header = imad.getElement('.navbar-user-header');
navbar.el_.user = imad.getElement('.navbar-header-user');
navbar.el_.loading = imad.getElement('#navbar-right .loading');
navbar.el_.alertify = imad.getElement('.alertify');

var floating = {}

floating.el_ = {}

floating.el_.root = imad.getElement('.floating-action');
floating.el_.toggle = imad.getElement('.action-toggle');
floating.el_.home = imad.getElement('.action-home');
floating.el_.menu = imad.getElement('.action-menu');
floating.el_.user = imad.getElement('.action-user');
floating.el_.top = imad.getElement('.action-top');
var cssTheme = document.createElement('link');
cssTheme.id = 'dark-theme';
cssTheme.rel = 'stylesheet';
cssTheme.type = 'text/css';
cssTheme.href = '/css/dark.css?v=' + (new Date().getTime());
navbar.el_.avatar.onclick = function() {
    navbar.activeNavbarRight();
    try {
        imad.getElement('.navbar-tab-information').click();
    } catch(e) {}
}

try {
    navbar.el_.notification.onclick = function() {
        navbar.activeNavbarRight();
        imad.getElement('.navbar-tab-notification').click();
        this.classList.remove('has-item');
        navbar.resetUnreadNotifications();
    }
} catch(e) {}

try {
    navbar.el_.theme.onclick = function() {
        if (lockAPI.theme) {
            alertify.error('Vui lòng không bấm liên tục');
            return;
        }
        lockAPI.theme = true;
        var darkTheme = imad.getElement('#dark-theme');
        var darkSwitch = imad.getElement('.set-darkmode');
        var darkThemeOptions = {}
        if (darkTheme) {
            imad.removeElement(darkTheme);
            darkThemeOptions = {
                theme: null
            }
        } else {
            document.head.appendChild(cssTheme);
            darkThemeOptions = {
                theme: 'dark'
            }
        }
        if (!_GLOBAL._IS_LOGGED_IN) {
            lockAPI.theme = false;
            return;
        }
        var xhr = imad.ajax('PUT', _GLOBAL._API + '/users/self/theme', darkThemeOptions);
        xhr.onload = function() {
            lockAPI.theme = false;
        }
        xhr.onerror = function() {
            lockAPI.theme = false;
        }
    }
} catch(e) {}

try {
    if (navbar.el_.unreadNotification.innerText != 0) {
        navbar.el_.notification.classList.add('has-item');
    }
} catch(e) {}
floating.el_.toggle.onclick = function() {
    if (floating.el_.root.classList.contains('activated')) {
        floating.el_.root.classList.remove('activated');
        this.innerHTML = '<i class="icon-assistive"></i>';
    } else {
        floating.el_.root.classList.add('activated');
        this.innerHTML = '<i class="icon-close"></i>';
    }
}

floating.el_.home.onclick = function() {
    window.location.href = _GLOBAL._URL;
}

floating.el_.menu.onclick = function() {
    navbar.activeNavbarLeft();
}

floating.el_.user.onclick = function() {
    navbar.activeNavbarRight();
}

floating.el_.top.onclick = function() {
    imad.scrollPageTo(0, 600);
}
navbar.clickOnTab = function(element) {
    element.onclick = function() {
        var bodyTabs = imad.getAllElements('.navbar-user-body');
        var tabName = element.getAttribute('data-tab');
        var tabBody = imad.getElement('.tab-' + tabName);
        for (var i = bodyTabs.length - 1; i >= 0; i--) {
            bodyTabs[i].classList.add('hidden');
        }
        for (var i = navbar.el_.tab.children.length - 1; i >= 0; i--) {
            navbar.el_.tab.children[i].classList.remove('activated');
        }
        element.classList.add('activated');
        tabBody.classList.remove('hidden');
        // if (tabName != 'film') {
        // 	userHeader.classList.remove('small-mode');
        // } else {
        // 	userHeader.classList.add('small-mode');
        // }
        if (!ismobile.any) {
            Ps.update(tabBody);
        }
    }
}

navbar.activeNavbarLeft = function() {
    navbar.el_.left.classList.add('activated');
    navbar.el_.right.classList.remove('activated');
    // lockScroll();
    floating.el_.root.classList.remove('activated');
    floating.el_.toggle.innerHTML = '<i class="icon-assistive"></i>';
    navbar.el_.root.style.zIndex = '8888';
}

navbar.activeNavbarRight = function() {
    navbar.el_.right.classList.add('activated');
    navbar.el_.left.classList.remove('activated');
    // lockScroll();
    floating.el_.root.classList.remove('activated');
    floating.el_.toggle.innerHTML = '<i class="icon-assistive"></i>';
    navbar.el_.root.style.zIndex = '8888';
    navbar.el_.right.activated = true;
}

navbar.close = function(e) {

    var count = 0;
    var target = e.target;
    if (target.className == 'ok') {
        return;
    }

    if (!navbar.el_.left.contains(target) && !navbar.el_.toggle.contains(target) && !floating.el_.menu.contains(target)) {
        navbar.el_.left.classList.remove('activated');
        count++;
    }

    if (!navbar.el_.right.contains(target) && !navbar.el_.user.contains(target) && !floating.el_.user.contains(target)) {
        navbar.el_.right.classList.remove('activated');
        navbar.el_.right.activated = false;
        count++;
    }

    if (count > 1) {
        navbar.el_.root.style.zIndex = '';
    }
}

navbar.setMenuHeight = function() {
    if (!ismobile.any) {
        navbar.el_.menu.style = '';
        return;
    }
    var height = window.innerHeight - 120;
    navbar.el_.menu.style.maxHeight = height + 'px';
    navbar.el_.menu.style.overflow = 'auto';
}

navbar.resetUnreadNotifications = function() {
    if (navbar.el_.unreadNotification.innerText == 0) {
        return;
    }
    var xhr = imad.ajax('DELETE', _GLOBAL._API + '/users/self/notifications/unread');
    xhr.onload = function() {
        navbar.el_.unreadNotification.innerText = 0;
    }
    xhr.onerror = function() {}
}

/**
 * [getNavbarBlockData description]
 * @param  {[type]} block [description]
 * @return {[type]}       [description]
 */
navbar.getBlockData = function(block) {
    var type = block.getAttribute('data-block');
    block.innerHTML = '';

    if (imad.data.block[type]) {
        imad.setNavbarBlock(block, type, imad.data.block[type]);
        return;
    }

    var xhr = imad.ajax('GET', '/json/' + type + '.json');

    xhr.onload = function () {
        // console.log(xhr.responseText)
        var response = JSON.parse(xhr.responseText);
        if (xhr.status == 200) {
            imad.data.block[type] = response;
            imad.setNavbarBlock(block, type, response);
        }
    }
}

floating.hide = function() {
    if (window.innerWidth >= 1024) {
        return;
    }
    if (window.innerHeight > window.innerWidth || imad.getPageYOffset() > 100) {
        floating.el_.root.classList.remove('hidden');
        return;
    }
    floating.el_.root.classList.add('hidden');
}

navbar.load = function() {
    navbar.setMenuHeight();
    floating.hide();
}

navbar.el_.toggle.onclick = function() {
    navbar.activeNavbarLeft();
}
for (var i = navbar.el_.tab.children.length - 1; i >= 0; i--) {
    navbar.clickOnTab(navbar.el_.tab.children[i]);
}

var logoImg = imad.getElement('.logo img');
var navbarBrand = imad.getElement('.navbar-brand');
var navbarLeftBrand = document.createElement('div');
navbarLeftBrand.className = navbarBrand.className; //'navbar-brand';
navbarLeftBrand.innerHTML = '<a class="logo" href="/"><img src="' + logoImg.src + '" alt="VuiGhe.Net"></a>';

navbar.el_.left.appendChild(navbarLeftBrand);

navbar.el_.left.querySelector('.navbar-close').onclick = function() {
    navbar.el_.left.classList.remove('activated');
    navbar.el_.root.style.zIndex = '';
}
navbar.el_.right.querySelector('.navbar-close').onclick = function() {
    navbar.el_.right.classList.remove('activated');
    navbar.el_.right.activated = false;
    navbar.el_.root.style.zIndex = '';
}

try {
    if (!ismobile.any) {
        var navbarBlocks = imad.getAllElements('.menu-sub-list');
        for (var i = 0; i < navbarBlocks.length; i++) {
            navbar.getBlockData(navbarBlocks[i]);
        }
    }
} catch(e) {}

window.addEventListener('resize', navbar.load);
window.addEventListener('scroll', floating.hide);
window.addEventListener('load', navbar.load);

imad.setComponent('navbar', navbar);
imad.setComponent('floating', floating);
var search = {}

search.el_ = {}

search.el_.input = imad.getElement('.search-box input');
search.el_.button = imad.getElement('.search-box .icon');
search.el_.result = imad.getElement('.search-result');
search.el_.resultBody = imad.getElement('.result-body');
search.el_.loading = imad.getElement('.search-result .loading');
search.el_.noitem = imad.getElement('.search-result .result-noitem');

var markInstance = new Mark(search.el_.resultBody);
search.data = {
	onKeyTimeout: null,
	oldQuery: '',
	pointer: null,
	slug: null
}
search.el_.input.onkeyup = function(e) {
    clearTimeout(search.data.onKeyTimeout);
    search.data.onKeyTimeout = setTimeout(function() {
        search.searchFilms();
    }, 200);
}
search.el_.input.onkeydown = function(e) {

    clearTimeout(search.data.onKeyTimeout);
    search.el_.result.classList.add('activated');

    var resultItems = imad.getAllElements('.result-item');

    if (ismobile.any || window.innerWidth < 1024) {
        // 70 (navbarSearch offsetTop) + 45 (navbarResult offsetTop)
        search.el_.resultBody.style.height = (window.innerHeight - 115) + 'px';
    }

    if ((e.which >= 48 && e.which <= 90) || e.which == 8 || e.which == 1) {
        search.el_.loading.classList.remove('hidden');
        search.el_.noitem.classList.add('hidden');
    } else if (e.which == 13) {
        search.gotoResultPage(search.data.slug);
        return;
    } else if (e.which == 27) {
        search.el_.result.classList.remove('activated');
        if (search.data.pointer) {
            resultItems[search.data.pointer].classList.remove('activated');
            search.data.pointer = null;
            search.data.slug = null;
            imad.scrollTo(search.el_.resultBody, 0, 100);
        }
    }

    if (!resultItems.length) {
        return;
    }

    if (e.which == 40) {
        if (search.data.pointer == null) {
            search.data.pointer = 0;
            search.data.slug = resultItems[0].getAttribute('data-search.data.slug');
            resultItems[0].classList.add('activated');
            return;
        }
        if ((search.data.pointer + 1) >= resultItems.length) {
            try {
                resultItems[search.data.pointer].classList.remove('activated');
            } catch(e) {}
            search.data.pointer = null;
            search.data.slug = null;
            imad.scrollTo(search.el_.resultBody, 0, 100);
            return;
        }
        if ((search.data.pointer + 1) < resultItems.length) {
            try {
                resultItems[search.data.pointer].classList.remove('activated');
            } catch(e) {}
            search.data.pointer++;
            search.data.slug = resultItems[search.data.pointer].getAttribute('data-search.data.slug');
            resultItems[search.data.pointer].classList.add('activated');
            imad.scrollTo(search.el_.resultBody, resultItems[search.data.pointer].offsetTop, 100);
        }
        return;
    }
    if (e.which == 38) {
        if (search.data.pointer != null && (search.data.pointer - 1) >= 0 && (search.data.pointer - 1) < resultItems.length) {
            resultItems[search.data.pointer].classList.remove('activated');
            search.data.pointer--;
            search.data.slug = resultItems[search.data.pointer].getAttribute('data-search.data.slug');
            resultItems[search.data.pointer].classList.add('activated');
            imad.scrollTo(search.el_.resultBody, resultItems[search.data.pointer].offsetTop, 100);
            return;
        }
        if (search.data.pointer == 0) {
            search.data.pointer = null;
            search.data.slug = resultItems[0].getAttribute('data-search.data.slug');
            resultItems[0].classList.remove('activated');
            return;
        }
        if (search.data.pointer == null) {
            search.data.pointer = resultItems.length - 1;
            search.data.slug = null;
            resultItems[search.data.pointer].classList.add('activated');
            imad.scrollTo(search.el_.resultBody, resultItems[search.data.pointer].offsetTop, 100);
        }
    }
}
search.el_.input.onclick = function(e) {
    search.el_.result.classList.add('activated');
    search.checkResult();
}
search.el_.input.onfocus = function(e) {
    search.el_.result.classList.add('activated');
    search.checkResult();
}
search.el_.button.onclick = function() {
    search.gotoResultPage(null);
}
search.performMark = function() {

    // Read the keyword
    var keyword = search.el_.input.value;
    keyword = keyword.trim().replace(/\s{2,}/g, ' ');
    keyword = keyword.replace(/[&\/\\#,+()$~@$^%.'"*?<>{}]/g, ' ');

    // Determine selected options
    var options = {separateWordSearch:true};


    // Remove previous marked elements and mark
    // the new keyword inside the context
    markInstance.unmark({
        done: function(){
            markInstance.mark(keyword, options);
        }
    });
}

search.checkResult = function() {
	var resultItems = imad.getAllElements('.result-item');
    if (!resultItems.length) {
        search.el_.loading.classList.add('hidden');
        search.el_.noitem.classList.remove('hidden');
        search.el_.noitem.innerHTML = 'Nhập tên anime để tìm kiếm';
    }
}

search.hideResult = function(e) {
    if (!navbar.el_.search.contains(e.target)) {
        search.el_.result.classList.remove('activated');
    }
}

search.searchFilms = function() {

    var query = search.el_.input.value;
    query = query.trim().replace(/\s{2,}/g, ' ');
    query = query.replace(/[&\/\\#,+()$~@$^%.'"*?<>{}]/g, ' ');

    // console.log(query)
    // console.log(search.data.oldQuery)
    if (!query || query == search.data.oldQuery) {
        search.el_.loading.classList.add('hidden');
    	if (!query) {
			search.data.oldQuery = null;
    		search.removeResult();
        	search.el_.result.classList.remove('activated');
        	return;
    	}
        return;
    }

    search.data.oldQuery = query;

    search.el_.loading.classList.remove('hidden');

    var xhr = imad.ajax('GET',  _GLOBAL._API + '/search?q=' + query + '&limit=12');
    xhr.onload = function() {
        if (xhr.status == 200 || xhr.status == 304) {
            var response = JSON.parse(xhr.responseText);
            console.log(response);
            search.removeResult();
            search.setResult(response.data);
            return;
        }
        search.el_.loading.classList.add('hidden');
    }
    xhr.onerror = function() {
        search.el_.loading.classList.add('hidden');
        // alertify.error('')
    }
}

search.removeResult = function() {
    search.el_.resultBody.innerHTML = '';
}

search.setResult = function(data) {

    if (!data.length) {
        search.el_.loading.classList.add('hidden');
        search.el_.noitem.classList.remove('hidden');
        search.el_.noitem.innerHTML = 'Không tìm thấy anime phù hợp';
        return;
    }

    search.el_.noitem.classList.add('hidden');

    for (var i = 0; i < data.length; i++) {
        var item = document.createElement('div');
        item.className = 'result-item';
        item.setAttribute('data-id', data[i].id);
        item.setAttribute('data-slug', data[i].slug);
        item.innerHTML = '<a href="/' + data[i].slug + '"><div class="result-item-thumbnail"><img src="' + data[i].thumbnail + '"></div><div class="result-item-meta"><div class="result-item-title">' + data[i].name + '</div><div class="result-item-time">' + (data[i].is_movie ? '' : (data[i].meta.max_episode_name ? data[i].meta.max_episode_name : 0) + ' / ') + data[i].time + '</div><div class="result-item-views">' + data[i].views.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") + ' lượt xem</div></div></a>';
        search.el_.resultBody.appendChild(item);
    }
    scrollTo(search.el_.resultBody, 0, 100);
    search.el_.loading.classList.add('hidden');
    if (!ismobile.any) {
    	Ps.update(search.el_.resultBody);
    }
    search.performMark();
}

search.setResultHeight = function() {
	if (window.innerWidth >= 1024) {
		search.el_.resultBody.style.height = '';
		return;
	}
	search.el_.resultBody.style.height = (window.innerHeight - 115) + 'px';
}

search.gotoResultPage = function(slug) {
	if (slug) {
		window.location = _GLOBAL._URL + '/' + slug;
		return;
	}
	var query = search.el_.input.value;
    query = query.trim().replace(/\s{2,}/g, ' ');
    query = query.replace(/[&\/\\#,+()$~!@$^%.'"*?<>{}]/g, '');
    // query = query.replace(' ', '-');

    if (query) {
    	window.location = _GLOBAL._URL + '/tim-kiem/' + query;
    }
}

search.load = function() {
    if (!ismobile.any) {
        Ps.initialize(search.el_.resultBody, {
            minScrollbarLength: 50,
            maxScrollbarLength: 50
        });
    } else {
        search.el_.resultBody.style.overflow = 'auto';
    }
    search.setResultHeight();
}

window.addEventListener('click', search.hideResult);
window.addEventListener('resize', search.setResultHeight);
window.addEventListener('load', search.load);


imad.setComponent('search', search);
var user = {}

user.el_ = {}

user.el_.lastLogin = imad.getElement('#user-last-login');
user.el_.loginButton = imad.getElement('#login');
user.el_.logoutButton = imad.getElement('#logout');
user.el_.signupButton = imad.getElement('#signup');
user.el_.loginTab = imad.getElement('.tab-login');
user.el_.signupTab = imad.getElement('.tab-signup');

if (!_GLOBAL._IS_LOGGED_IN) {

	user.el_.loginUsername = imad.getElement('.tab-login input[name="username"]');
	user.el_.loginPassword = imad.getElement('.tab-login input[name="password"]');
	user.el_.signupUsername = imad.getElement('.tab-signup input[name="username"]');
	user.el_.signupPassword = imad.getElement('.tab-signup input[name="password"]');
	user.el_.passwordConfirm = imad.getElement('.tab-signup input[name="password_confirm"]');
	user.el_.fullName = imad.getElement('.tab-signup input[name="full_name"]');
	user.el_.email = imad.getElement('.tab-signup input[name="email"]');
	user.el_.birthDate = imad.getElement('input[name="birthday"]');
	user.el_.birthMonth = imad.getElement('input[name="birthmonth"]');
	user.el_.birthYear = imad.getElement('input[name="birthyear"]');
	user.el_.formGroupBirthday = imad.getElement('.navbar-form-group.birthday');
} else {
	user.el_.informationTab = imad.getElement('.navbar-tab-information');
  	user.el_.notificationTab = imad.getElement('.navbar-tab-notification');
  	// user.el_.informationTab = imad.getElement('.navbar-user-tab-item[data-tab="information"]');
  	// user.el_.notificationTab = imad.getElement('.navbar-user-tab-item[data-tab="notification"]');
  	// user.el_.filmTab = imad.getElement('.navbar-user-tab-item[data-tab="film"]');
  	user.el_.informationBody = imad.getElement('.tab-information');
  	user.el_.notificationBody = imad.getElement('.tab-notification');
  	user.el_.notificationList = imad.getElement('.notification-list');
  	user.el_.notificationMore = imad.getElement('.notification-more');

  	user.el_.avatarFile = imad.getElement('#avatar-upload');
}
user.data = {}

user.data.validated = {
	username: false,
	password: false,
	passwordConfirm: false,
	fullName: false,
	email: false,
	birthday: false
}
user.data.cachedValidate = {
	username: null,
	fullName: null,
	email: null,
	birthday: null
}
user.data.cachedNotifications = {}
/**
 * Validate functions
 * @return {[type]} [description]
 */
user.validateLoginUsername = function() {
	var formGroup = user.el_.loginUsername.parentNode;
	var tip = formGroup.querySelector('.tip');
	if (user.el_.loginUsername.value.length < 5 || user.el_.loginUsername.value.length > 20) {
		tip.innerText = 'từ 6 - 20 kí tự';
		formGroup.classList.add('warning');
		return false;
	}
	tip.innerText = '';
	formGroup.classList.remove('warning');
	return true;
}

user.validateSignupUsername = function() {

	var formGroup = user.el_.signupUsername.parentNode;
	var tip = formGroup.querySelector('.tip');
	if (user.el_.signupUsername.value.length < 6 || user.el_.signupUsername.value.length > 20) {
		user.data.validated.username = false;
		tip.innerText = 'từ 6 - 20 kí tự';
		formGroup.classList.add('warning');
		return;
	}

	if (user.data.validated.username && user.data.cachedValidate.username == user.el_.signupUsername.value) {
		return;
	}

	user.data.validated.username = false;
	tip.innerText = '';

	var xhr = imad.ajax('GET', _GLOBAL._API + '/users/validate?username=' + user.el_.signupUsername.value);
	xhr.onload = function() {
      	if (xhr.status == 200 || xhr.status == 304) {
      		user.data.cachedValidate.username = user.el_.signupUsername.value;
      		formGroup.classList.remove('warning');
      		user.data.validated.username = true;
			return;
      	} else if (xhr.status == 400) {
      		tip.innerText = 'không hợp lệ (bị cấm)';
      	} else if (xhr.status == 409) {
      		tip.innerText = 'đã tồn tại trong hệ thống';
      	}
      	user.data.validated.username = false;
      	user.data.cachedValidate.username = null;
      	formGroup.classList.add('warning');
  	}
}

user.validatePassword = function(tab) {
	var password = tab.querySelector('input[name="password"]');
	var formGroup = password.parentNode;
	var tip = formGroup.querySelector('.tip');
	if (password.value.length < 6 || password.value.length > 30) {
		user.data.validated.password = false;
		tip.innerText = 'từ 6 - 30 kí tự';
		formGroup.classList.add('warning');
		return false;
	}
	user.data.validated.password = true;
	tip.innerText = '';
	formGroup.classList.remove('warning');
	return true;
}

user.validatePasswordConfirm = function() {
	var formGroup = user.el_.passwordConfirm.parentNode;
	var tip = formGroup.querySelector('.tip');
	if (user.el_.signupPassword.value != user.el_.passwordConfirm.value) {
		user.data.validated.passwordConfirm = false;
		tip.innerText = '2 mật khẩu không khớp';
		formGroup.classList.add('warning');
		return;
	}
	user.data.validated.passwordConfirm = true;
	tip.innerText = '';
	formGroup.classList.remove('warning');
}

user.validateFullName = function() {

	var formGroup = user.el_.fullName.parentNode;
	var tip = formGroup.querySelector('.tip');
	if (user.el_.fullName.value.length < 5 || user.el_.fullName.value.length > 40) {
		user.data.validated.fullName = false;
		tip.innerText = 'từ 8 - 40 kí tự';
		formGroup.classList.add('warning');
		return;
	}

	if (user.data.validated.fullName && user.data.cachedValidate.fullName == user.el_.fullName.value) {
		return;
	}

	user.data.validated.fullName = false;
	tip.innerText = '';

	var xhr = imad.ajax('GET', _GLOBAL._API + '/users/validate?full_name=' + user.el_.fullName.value);
	xhr.onload = function() {
		if (xhr.status == 200 || xhr.status == 304) {
			user.data.cachedValidate.fullName = user.el_.fullName.value;
			formGroup.classList.remove('warning');
			user.data.validated.fullName = true;
			return;
		} else if (xhr.status == 400) {
			tip.innerText = 'không hợp lệ (bị cấm)';
		} else {
			tip.innerText = 'hãy thử lại';
		}
		user.data.validated.fullName = false;
		user.data.cachedValidate.fullName = null;
		formGroup.classList.add('warning');
	}
}

user.validateEmail = function() {

	var formGroup = user.el_.email.parentNode;
	var tip = formGroup.querySelector('.tip');
	if (user.el_.email.value.length < 8) {
		user.data.validated.email = false;
		tip.innerText = 'email không hợp lệ';
		formGroup.classList.add('warning');
		return;
	}

	if (user.data.validated.email && user.data.cachedValidate.email == user.el_.email.value) {
		return;
	}

	user.data.validated.email = false;
	tip.innerText = '';

	var xhr = imad.ajax('GET', _GLOBAL._API + '/users/validate?email=' + user.el_.email.value);
  	xhr.onload = function() {
  		if (xhr.status == 200 || xhr.status == 304) {
  			user.data.validated.email = true;
			user.data.cachedValidate.email = user.el_.email.value;
      		formGroup.classList.remove('warning');
			return;
      	} else if (xhr.status == 400) {
      		tip.innerText = 'email không hợp lệ';
      	} else if (xhr.status == 409) {
      		tip.innerText = 'email đã tồn tại';
      	}
      	user.data.validated.email = false;
		user.data.cachedValidate.email = null;
      	formGroup.classList.add('warning');
  	}
}

user.validateBirthDate = function(checked) {
	var tip = user.el_.formGroupBirthday.querySelector('.tip');
	if (user.el_.birthDate.value < 1 || user.el_.birthDate.value > 31) {
		user.data.validated.birthDate = false;
		tip.innerText = 'chọn ngày sinh từ 1 - 31';
		user.el_.formGroupBirthday.classList.add('warning');
		return false;
	}
	user.data.validated.birthDate = true;
	tip.innerText = '';
	user.el_.formGroupBirthday.classList.remove('warning');
	if (!checked && user.data.validated.birthMonth && user.data.validated.birthYear) {
		user.validateBirthday(true);
	}
	return true;
}

user.validateBirthMonth = function(checked) {
	var tip = user.el_.formGroupBirthday.querySelector('.tip');
	if (user.el_.birthMonth.value < 1 || user.el_.birthMonth.value > 12) {
		user.data.validated.birthMonth = false;
		tip.innerText = 'chọn tháng sinh từ 1 - 12';
		user.el_.formGroupBirthday.classList.add('warning');
		return false;
	}
	user.data.validated.birthMonth = true;
	tip.innerText = '';
	user.el_.formGroupBirthday.classList.remove('warning');
	if (!checked && user.data.validated.birthDate && user.data.validated.birthYear) {
		user.validateBirthday(true);
	}
	return true;
}

user.validateBirthYear = function(checked) {
	var tip = user.el_.formGroupBirthday.querySelector('.tip');
	if (user.el_.birthYear.value < 1970 || user.el_.birthYear.value > 2010) {
		user.data.validated.birthYear = false;
		tip.innerText = 'chọn năm sinh từ 1970 - 2010';
		user.el_.formGroupBirthday.classList.add('warning');
		return false;
	}
	user.data.validated.birthYear = true;
	tip.innerText = '';
	user.el_.formGroupBirthday.classList.remove('warning');
	if (!checked && user.data.validated.birthDate && user.data.validated.birthMonth) {
		user.validateBirthday(true);
	}
	return true;
}

user.validateBirthday = function(checked) {

	if (!checked) {
		if (!user.validateBirthDate(true) || !user.validateBirthMonth(true) || !user.validateBirthYear(true)) {
			return;
		}
	}

	var tip = user.el_.formGroupBirthday.querySelector('.tip');
	var birthday = parseInt(user.el_.birthDate.value) + '-' + parseInt(user.el_.birthMonth.value) + '-' + parseInt(user.el_.birthYear.value);
	var jsDate = new Date(user.el_.birthYear.value + '-' + user.el_.birthMonth.value + '-' + user.el_.birthDate.value);

	try {
		if (jsDate.getDate() != parseInt(user.el_.birthDate.value) || (jsDate.getMonth() + 1) != parseInt(user.el_.birthMonth.value) || jsDate.getFullYear() != parseInt(user.el_.birthYear.value)) {
			user.data.validated.birthday = false;
			user.data.cachedValidate.birthday = null;
      		tip.innerText = 'ngày ' + birthday + ' không hợp lệ';
			user.el_.formGroupBirthday.classList.add('warning');
			return;
		}
		user.data.validated.birthday = true;
		user.data.cachedValidate.birthday = birthday;
	} catch(e) {

		if (user.data.validated.birthday && user.data.cachedValidate.birthday == birthday) {
			return;
		}

		tip.innerText = '';
		user.data.validated.birthday = false;

		var xhr = imad.ajax('GET', _GLOBAL._API + '/users/validate?birthday=' + birthday);
		xhr.onload = function() {
			if (xhr.status == 200 || xhr.status == 304) {
				user.data.validated.birthday = true;
				user.data.cachedValidate.birthday = birthday;
				user.el_.formGroupBirthday.classList.remove('warning');
				return;
			} else {
				user.data.validated.birthday = false;
				user.data.cachedValidate.birthday = null;
	      		tip.innerText = 'ngày ' + birthday + ' không hợp lệ';
				user.el_.formGroupBirthday.classList.add('warning');
	      	}
	  	}
  	}

}
/**
 * Login, Signup functions
 * @return {[type]} [description]
 */
user.clearSignupForm = function() {
	var signupInputs = imad.getElement('.navbar-user-body.tab-signup')
	.querySelectorAll('input[type="text"], input[type="password"], input[type="number"]');
	for (var i = signupInputs.length - 1; i >= 0; i--) {
		signupInputs[i].value = '';
	}
	user.data.validated = {}
	user.data.cachedValidate = {}
}

user.signup = function() {

	var warningEl = imad.getElement('#form-signup-warning');
	warningEl.parentNode.classList.add('hidden');
	warningEl.innerHTML = '';

	navbar.el_.loading.classList.remove('hidden');

	user.el_.signupButton.classList.add('disabled');

	user.validateSignupUsername();
	user.validatePassword(user.el_.signupTab);
	user.validatePasswordConfirm();
	user.validateFullName();
	user.validateEmail();
	// user.validateBirthday();

	if (!user.data.validated.username || !user.data.validated.password || !user.data.validated.passwordConfirm || !user.data.validated.fullName || !user.data.validated.email) {
	// || !user.data.validated.birthday) {
		user.el_.signupButton.classList.remove('disabled');
		navbar.el_.loading.classList.add('hidden');
		return;
	}

	var data = {
		username: user.data.cachedValidate.username,
		password: user.el_.signupPassword.value,
		password_confirmation: user.el_.passwordConfirm.value,
		full_name: user.data.cachedValidate.fullName,
		email: user.data.cachedValidate.email,
		// birthday: user.data.cachedValidate.birthday,
		gender: parseInt(imad.getElement('input[name="gender"]:checked').value)
	}

	var xhr = imad.ajax('POST', _GLOBAL._API + '/users', data)
	xhr.onload = function () {
		user.el_.signupButton.classList.remove('disabled');
		if (xhr.status == 201) {
			// alertify.logPosition("top right");
			// alertify.closeLogOnClick(true).success('Bạn đã đăng ký thành công!');
			/**
			 * open modalbox login then set username
			 */
		  	imad.getElement('.navbar-tab-login').click();
		  	user.clearSignupForm();
		  	user.el_.loginUsername.value = data.username;
		  	user.el_.loginPassword.value = data.password;
		  	setTimeout(function() {
		  		user.el_.loginButton.click();
		  	}, 1000);
		  	return;
		}
		// else if (xhr.status == 400) {
			// alertify.error('Đăng ký thất bại, vui lòng thử lại')
			warningEl.innerHTML = '<li>Đăng ký thất bại, vui lòng thử lại</li>';
			warningEl.parentNode.classList.remove('hidden');
		// }
		navbar.el_.loading.classList.add('hidden');
	}
	xhr.onerror = function(e) {
		warningEl.innerHTML = '<li>Lỗi kết nối, vui lòng thử lại</li>';
		warningEl.parentNode.classList.remove('hidden');
      	user.el_.signupButton.classList.remove('disabled');
      	navbar.el_.loading.classList.add('hidden');
	}
}

user.login = function() {

	var warningEl = imad.getElement('#form-login-warning');
	warningEl.parentNode.classList.add('hidden');
	warningEl.innerHTML = '';

	navbar.el_.loading.classList.remove('hidden');

	user.el_.loginButton.classList.add('disabled');

	if (!user.validateLoginUsername() || !user.validatePassword(user.el_.loginTab)) {
		warningEl.innerHTML = '<li>Thông tin đăng nhập không chính xác</li>';
		warningEl.parentNode.classList.remove('hidden');
    	user.el_.loginButton.classList.remove('disabled');
    	navbar.el_.loading.classList.add('hidden');
		return;
	}

	var username = imad.getElement('input[name="username"]').value;
	var password = imad.getElement('input[name="password"]').value;
	var remember = imad.getElement('input[name="remember"]').checked;

	var data = {
		username: username,
		password: password,
		remember: remember
	}

	var xhr = imad.ajax('POST', _GLOBAL._API + '/users/login', data);

    xhr.onload = function() {
    	if (xhr.status == 200) {
    		window.location.reload();
    		return;
    	} else if (xhr.status == 400) {
    		warningEl.innerHTML = '<li>Thông tin đăng nhập không chính xác</li>';
    	} else if (xhr.status == 403) {
    		warningEl.innerHTML = '<li>Hệ thống đang tắt chức năng đăng nhập</li>';
    	}
		warningEl.parentNode.classList.remove('hidden');
    	user.el_.loginButton.classList.remove('disabled');
    	navbar.el_.loading.classList.add('hidden');
    }

    xhr.onerror = function(e) {
      	warningEl.innerHTML = '<li>Lỗi kết nối, vui lòng thử lại</li>';
		warningEl.parentNode.classList.remove('hidden');
      	user.el_.loginButton.classList.remove('disabled');
      	navbar.el_.loading.classList.add('hidden');
    }
}

user.logout = function() {

	var xhr = imad.ajax('POST', _GLOBAL._API + '/users/logout');

	navbar.el_.loading.classList.remove('hidden');

    xhr.onload = function() {
      	if (xhr.status == 200) {
      		try {
      			store.forEach(function(key, value) {
					if (key.substring(0, 7) == 'episode') {
						store.remove(key);
					}
				});
				store.remove('notifications');
      		} catch(e) {}
      		window.location.reload();
      	}
    }

    xhr.onerror = function(e) {
      	// alert(e);
      	navbar.el_.loading.classList.add('hidden');
		// alertify.logPosition("top right");
		// alertify.closeLogOnClick(true).error('Vui lòng thử lại!');
    }
}
user.getNotifications = function(options) {

	var notificationItems = imad.getAllElements('.notification-item');
	var noResponse = imad.getElement('.notification-none');
	var offset = notificationItems.length;

	if (!options) {
		options = {}
		if (offset) {
			return;
		}
	}

	navbar.el_.loading.classList.remove('hidden');

	if (user.data.cachedNotifications.submitted) {
		if (((new Date().getTime()) - user.data.cachedNotifications.submitted) < 300000) {
			noResponse.classList.remove('hidden');
			noResponse.innerText = 'Không có thông báo';
			navbar.el_.loading.classList.add('hidden');
			return;
		}
	} else {
		var storedNotifications = store.get('notifications');
		if (storedNotifications) {
			if (((new Date().getTime()) - storedNotifications.submitted) < 300000) {
				noResponse.classList.remove('hidden');
				noResponse.innerText = 'Không có thông báo';
				navbar.el_.loading.classList.add('hidden');
				return;
			}
		}
	}

	var xhr = imad.ajax('GET', _GLOBAL._API + '/users/self/notifications?offset=' + offset);

	xhr.onload = function() {

		if (xhr.status == 200) {

			var response = JSON.parse(xhr.responseText);

			offset += response.data.length;

			for (var i = 0; i < response.data.length; i++) {
				user.el_.notificationList.appendChild(user.setNotificationItem(response.data[i]));
			}

			if (!offset) {
				// cache point to mark non notification
				// show notice that user has no notification
				noResponse.classList.remove('hidden');
				noResponse.innerText = 'Không có thông báo';
				navbar.el_.loading.classList.add('hidden');
				user.data.cachedNotifications = response;
				user.data.cachedNotifications.submitted = new Date().getTime();
				try {
					store.set('notifications', user.data.cachedNotifications);
				} catch(e) {
					console.log(e);
				}
				return;
			} else {
				noResponse.classList.add('hidden');
				user.data.cachedNotifications = {}
				try {
					store.remove('notifications');
				} catch(e) {}
			}

			if (offset >= response.total) {
				user.el_.notificationMore.classList.add('hidden');
			} else {
				user.el_.notificationMore.classList.remove('hidden');
			}
		}

		navbar.el_.loading.classList.add('hidden');
	}

	xhr.onerror = function() {
		navbar.el_.loading.classList.add('hidden');
	}
}

user.setNotificationItem = function(data) {

	var element = document.createElement('div');
	element.className = 'notification-item';
	element.setAttribute('data-id', data.id);

    var timeAgo = 'vài giây trước';
    var thumbnail = '/assets/img/avatar.png';
    var link = 'javascript:void(0);';
    if (data.created_at) {
        timeAgo = imad.getTimeAgo(data.created_at);
    }
    if (data.thumbnail) {
        thumbnail = data.thumbnail;
    }
    if (data.link) {
        link = data.link + '" target="_blank';
        if (data.link.indexOf('http') == -1) {
        	link = '/' + link;
        }
    }

	element.innerHTML = '<a href="' + link + '"><div class="notification-item-thumbnail"><img src="' + thumbnail + '"></div></a><div class="notification-item-body"><a href="' + link + '"><div class="notification-item-title">' + data.content + '</div></a><div class="notification-item-time"><i class="icon icon-time"></i>' + timeAgo + '</div></div>';

	return element;
}

user.removeNotificationItem = function(id) {
	try {
		user.el_.notificationList.removeChild(imad.getElement('.notification-item[data-id="' + id + '"]'));
	} catch(e) {}
}
user.updateLastLogin = function() {
	if (!_GLOBAL._IS_LOGGED_IN) {
		return;
	}
	// we do not update last login temporary
	var xhr = imad.ajax('PUT', _GLOBAL._API + '/users/self/last-login');
	// xhr.onload = function() {
	// 	if (xhr.status == 200) {
	// 		var response = JSON.parse(xhr.responseText);
	// 		alertify.success('Đăng nhập hàng ngày được tặng 1 vàng và 10 tiền');
	// 	}
	// }
}

user.uploadAvatar = function(file) {

	var formData = new FormData();
	formData.append('avatar', file);

	var xhr = new XMLHttpRequest()

	xhr.open('POST', _GLOBAL._API + '/users/self/avatar');
	xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
	xhr.setRequestHeader('X-CSRF-TOKEN', _GLOBAL._TOKEN);

	xhr.withCredentials = true

	xhr.send(formData);

	xhr.onload = function() {
		if (xhr.status == 200) {
			var response = JSON.parse(xhr.responseText);
			if (response.avatar) {
				// userAvatar.src = response.avatar;
				// getElement('.user-avatar.big-avatar img').src = response.avatar;
				try {
					var avatarEls = imad.getAllElements('.self-avatar');
					for (var i = 0; i < avatarEls.length; i++) {
						avatarEls[i].src = response.avatar;
					}
				} catch(e) {}
				alertify.logPosition('top right');
				alertify.success('Đổi hình đại diện thành công!');
				return;
			}
		}
		if (xhr.status == 400) {
			alertify.error('Hình đại diện quá nhỏ! Hãy chọn hình kích thước lớn hơn 200x200');
			return;
		}
		alertify.logPosition('top right');
		alertify.error('Upload hình đại diện không thành công!');
	}

	xhr.onerror = function() {
		alertify.logPosition('top right');
		alertify.error('Upload hình đại diện không thành công!');
	}
}


user.setLoginTabHeight = function() {
	var height = window.innerHeight - 120;
	user.el_.loginTab.style.maxHeight = height + 'px';
	user.el_.signupTab.style.maxHeight = height + 'px';
	if (ismobile.any) {
		user.el_.loginTab.style.overflow = 'auto';
		user.el_.signupTab.style.overflow = 'auto';
	}
}

user.setInformationTabHeight = function() {
	var height = window.innerHeight - 120;
	user.el_.informationBody.style.maxHeight = height + 'px';
	user.el_.notificationBody.style.maxHeight = height + 'px';
	// if (_GLOBAL._REALTIME) {
	// 	chatBody.style.maxHeight = height + 'px';
	// }
	if (ismobile.any) {
		user.el_.informationBody.style.overflow = 'auto';
		user.el_.notificationBody.style.overflow = 'auto';
		// if (_GLOBAL._REALTIME) {
		// 	chatBody.style.overflow = 'auto';
		// }
	}
}
if (user.el_.lastLogin) {
	try {
		var today = new Date();
		var thisDate = today.getDate();
		var thisMonth = today.getMonth() + 1;
		if (thisDate < 10) {
			thisDate = '0' + thisDate;
		}
		if (thisMonth < 10) {
			thisMonth = '0' + thisMonth;
		}
		if ((today.getFullYear() + '-' + thisMonth + '-' + thisDate) != user.el_.lastLogin.value.substring(0, 10)) {
			user.updateLastLogin();
		}
	} catch(e) {}
}

if (!_GLOBAL._IS_LOGGED_IN) {

  	user.el_.loginButton.onclick = function() {
  		user.login();
  	}

  	user.el_.signupButton.onclick = function() {
  		user.signup();
  	}

  	user.el_.loginUsername.addEventListener('focusout', function() {
		user.validateLoginUsername();
	});
	user.el_.loginPassword.addEventListener('focusout', function() {
		user.validatePassword(user.el_.loginTab);
	});
	user.el_.signupUsername.addEventListener('focusout', function() {
		user.validateSignupUsername();
	});
	user.el_.signupPassword.addEventListener('focusout', function() {
		user.validatePassword(user.el_.signupTab);
	});
	user.el_.passwordConfirm.addEventListener('focusout', function() {
		user.validatePasswordConfirm();
	});
	user.el_.fullName.addEventListener('focusout', function() {
		user.validateFullName();
	});
	user.el_.email.addEventListener('focusout', function() {
		user.validateEmail();
	});
	// user.el_.birthDate.addEventListener('focusout', function() {
	// 	user.validateBirthDate();
	// });
	// user.el_.birthMonth.addEventListener('focusout', function() {
	// 	user.validateBirthMonth();
	// });
	// user.el_.birthYear.addEventListener('focusout', function() {
	// 	user.validateBirthYear();
	// });

	user.el_.loginUsername.addEventListener('keyup', function(e) {
		try {
			if (e.which == 13) {
				user.el_.loginButton.click();
			}
		} catch(e) {}
	});
	user.el_.loginPassword.addEventListener('keyup', function(e) {
		try {
			if (e.which == 13) {
				user.el_.loginButton.click();
			}
		} catch(e) {}
	});


	window.addEventListener('resize', function() {
		user.setLoginTabHeight();
		if (ismobile.any) {
			return;
		}
		Ps.update(user.el_.loginTab);
		Ps.update(user.el_.signupTab);
	});

	window.addEventListener('load', function() {

		user.setLoginTabHeight();

		if (!ismobile.any) {
			Ps.initialize(user.el_.loginTab, {
				minScrollbarLength: 50,
				maxScrollbarLength: 50
			});
			Ps.initialize(user.el_.signupTab, {
				minScrollbarLength: 50,
				maxScrollbarLength: 50
			});
		}
	});
} else {

  	user.el_.logoutButton.onclick = function() {
  		user.logout();
  	}

  	user.el_.avatarFile.onchange = function() {
  		// console.log(avatarFile.files);
  		// userAvatar.src = avatarFile.files[0]
  		try {
  			user.uploadAvatar(user.el_.avatarFile.files[0]);
  		} catch(e) {
  			// alertify.logPosition('top right');
  			// alertify.error('Upload hình đại diện không thành công!');
  		}
  	}

  	user.el_.notificationTab.addEventListener('click', function() {
  		user.getNotifications();
  	});

  	user.el_.notificationMore.onclick = function() {
  		user.getNotifications({more: true});
  	}

	// user.setInformationTabHeight();

	window.addEventListener('resize', function() {
		user.setInformationTabHeight();
		if (ismobile.any) {
			return;
		}
		Ps.update(user.el_.informationBody);
		Ps.update(user.el_.notificationBody);
	});

	window.addEventListener('load', function() {

		user.setInformationTabHeight();

		if (!ismobile.any) {
			Ps.initialize(user.el_.informationBody, {
				minScrollbarLength: 50,
				maxScrollbarLength: 50
			});
			Ps.initialize(user.el_.notificationBody, {
				minScrollbarLength: 50,
				maxScrollbarLength: 50
			});
			// if (_GLOBAL._REALTIME) {
			// 	Ps.initialize(user.el_.chatBody, {
			// 		minScrollbarLength: 50,
			// 		maxScrollbarLength: 50
			// 	});
			// }
		}
	});
}

imad.setComponent('user', user);
var listPage = {}

listPage.el_ = {}

listPage.el_.genreSlug = imad.getElement('#genre-slug');
listPage.el_.moviePage = imad.getElement('#movie-page');
listPage.el_.loading = imad.getElement('.tray .loading');
listPage.el_.more = imad.getElement('.tray .tray-more');
listPage.el_.content = imad.getElement('.tray .tray-content');

listPage.perPage = 24;

try {

	var totalItems = parseInt(imad.getElement('input[name="total-item"]').value);
	var currentPage = parseInt(imad.getElement('input[name="current-page"]').value);

	var perPage = imad.getElement('input[name="perpage"]');
	if (perPage) {
		listPage.perPage = parseInt(perPage.value);
	}

	var pagination = imad.paginate(totalItems, currentPage, listPage.perPage, 5);
	var trayPagination = imad.getElement('.pagination');
	var pathname = 'anime';

	if (location.pathname.split('/')[1]) {
		pathname = location.pathname.split('/')[1];
	}


    function setPagination(number, start, end) {
		var pageItem = document.createElement('div');
		var pageSlug = '';
		var pageLabel = number;
		if (!listPage.el_.genreSlug || !listPage.el_.genreSlug.value) {
			pageSlug = '/' + pathname + '/trang-' + number;
		} else {
			pageSlug = '/' + pathname + '/' + listPage.el_.genreSlug.value + '/trang-' + number;
		}
		// if (number == 1) {
		// 	pageSlug = '/' + pathname;
		// }
		if (start) {
			pageLabel = '<i class="icon-backward"></i>';
			pageSlug = '/' + pathname;
		}
		if (end) {
			pageLabel = '<i class="icon-forward"></i>';
		}
		pageItem.innerHTML = '<a href="' + pageSlug + '">' + pageLabel + '</a>';
		trayPagination.appendChild(pageItem);
		pageItem.className = 'page-item';
		if (number == currentPage) {
			pageItem.classList.add('activated');
		}
    }
    setPagination(1, true, false);
    for (var i = pagination.startPage; i <= pagination.endPage; i++) {
      	setPagination(i, false, false);
    }
    setPagination(pagination.totalPages, false, true);
} catch (e) {
	console.log(e);
}

window.addEventListener('click', function(e) {
	imad.components.navbar.close(e);
});

window.addEventListener('load', function() {

	if (ismobile.apple.device) {
		window.addEventListener('touchstart', function(e) {
			imad.components.navbar.close(e);
		});
	}
});