!function t(e, n, o) {
    function i(a, l) {
        if (!n[a]) {
            if (!e[a]) {
                var s = "function" == typeof require && require;
                if (!l && s)
                    return s(a, !0);
                if (r)
                    return r(a, !0);
                var c = new Error("Cannot find module '" + a + "'");
                throw c.code = "MODULE_NOT_FOUND",
                c
            }
            var d = n[a] = {
                exports: {}
            };
            e[a][0].call(d.exports, (function(t) {
                var n = e[a][1][t];
                return i(n || t)
            }
            ), d, d.exports, t, e, n, o)
        }
        return n[a].exports
    }
    for (var r = "function" == typeof require && require, a = 0; a < o.length; a++)
        i(o[a]);
    return i
}({
    1: [function(t, e, n) {
        "use strict";
        var o = t("../main");
        "function" == typeof define && define.amd ? define(o) : (window.PerfectScrollbar = o,
        void 0 === window.Ps && (window.Ps = o))
    }
    , {
        "../main": 7
    }],
    2: [function(t, e, n) {
        "use strict";
        n.add = function(t, e) {
            t.classList ? t.classList.add(e) : function(t, e) {
                var n = t.className.split(" ");
                n.indexOf(e) < 0 && n.push(e),
                t.className = n.join(" ")
            }(t, e)
        }
        ,
        n.remove = function(t, e) {
            t.classList ? t.classList.remove(e) : function(t, e) {
                var n = t.className.split(" ")
                  , o = n.indexOf(e);
                o >= 0 && n.splice(o, 1),
                t.className = n.join(" ")
            }(t, e)
        }
        ,
        n.list = function(t) {
            return t.classList ? Array.prototype.slice.apply(t.classList) : t.className.split(" ")
        }
    }
    , {}],
    3: [function(t, e, n) {
        "use strict";
        var o = {
            e: function(t, e) {
                var n = document.createElement(t);
                return n.className = e,
                n
            },
            appendTo: function(t, e) {
                return e.appendChild(t),
                t
            }
        };
        o.css = function(t, e, n) {
            return "object" == typeof e ? function(t, e) {
                for (var n in e) {
                    var o = e[n];
                    "number" == typeof o && (o = o.toString() + "px"),
                    t.style[n] = o
                }
                return t
            }(t, e) : void 0 === n ? function(t, e) {
                return window.getComputedStyle(t)[e]
            }(t, e) : function(t, e, n) {
                return "number" == typeof n && (n = n.toString() + "px"),
                t.style[e] = n,
                t
            }(t, e, n)
        }
        ,
        o.matches = function(t, e) {
            return void 0 !== t.matches ? t.matches(e) : void 0 !== t.matchesSelector ? t.matchesSelector(e) : void 0 !== t.webkitMatchesSelector ? t.webkitMatchesSelector(e) : void 0 !== t.mozMatchesSelector ? t.mozMatchesSelector(e) : void 0 !== t.msMatchesSelector ? t.msMatchesSelector(e) : void 0
        }
        ,
        o.remove = function(t) {
            void 0 !== t.remove ? t.remove() : t.parentNode && t.parentNode.removeChild(t)
        }
        ,
        o.queryChildren = function(t, e) {
            return Array.prototype.filter.call(t.childNodes, (function(t) {
                return o.matches(t, e)
            }
            ))
        }
        ,
        e.exports = o
    }
    , {}],
    4: [function(t, e, n) {
        "use strict";
        var o = function(t) {
            this.element = t,
            this.events = {}
        };
        o.prototype.bind = function(t, e) {
            void 0 === this.events[t] && (this.events[t] = []),
            this.events[t].push(e),
            this.element.addEventListener(t, e, !1)
        }
        ,
        o.prototype.unbind = function(t, e) {
            var n = void 0 !== e;
            this.events[t] = this.events[t].filter((function(o) {
                return !(!n || o === e) || (this.element.removeEventListener(t, o, !1),
                !1)
            }
            ), this)
        }
        ,
        o.prototype.unbindAll = function() {
            for (var t in this.events)
                this.unbind(t)
        }
        ;
        var i = function() {
            this.eventElements = []
        };
        i.prototype.eventElement = function(t) {
            var e = this.eventElements.filter((function(e) {
                return e.element === t
            }
            ))[0];
            return void 0 === e && (e = new o(t),
            this.eventElements.push(e)),
            e
        }
        ,
        i.prototype.bind = function(t, e, n) {
            this.eventElement(t).bind(e, n)
        }
        ,
        i.prototype.unbind = function(t, e, n) {
            this.eventElement(t).unbind(e, n)
        }
        ,
        i.prototype.unbindAll = function() {
            for (var t = 0; t < this.eventElements.length; t++)
                this.eventElements[t].unbindAll()
        }
        ,
        i.prototype.once = function(t, e, n) {
            var o = this.eventElement(t)
              , i = function(t) {
                o.unbind(e, i),
                n(t)
            };
            o.bind(e, i)
        }
        ,
        e.exports = i
    }
    , {}],
    5: [function(t, e, n) {
        "use strict";
        e.exports = function() {
            function t() {
                return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
            }
            return function() {
                return t() + t() + "-" + t() + "-" + t() + "-" + t() + "-" + t() + t() + t()
            }
        }()
    }
    , {}],
    6: [function(t, e, n) {
        "use strict";
        var o = t("./class")
          , i = t("./dom")
          , r = n.toInt = function(t) {
            return parseInt(t, 10) || 0
        }
          , a = n.clone = function(t) {
            if (t) {
                if (t.constructor === Array)
                    return t.map(a);
                if ("object" == typeof t) {
                    var e = {};
                    for (var n in t)
                        e[n] = a(t[n]);
                    return e
                }
                return t
            }
            return null
        }
        ;
        n.extend = function(t, e) {
            var n = a(t);
            for (var o in e)
                n[o] = a(e[o]);
            return n
        }
        ,
        n.isEditable = function(t) {
            return i.matches(t, "input,[contenteditable]") || i.matches(t, "select,[contenteditable]") || i.matches(t, "textarea,[contenteditable]") || i.matches(t, "button,[contenteditable]")
        }
        ,
        n.removePsClasses = function(t) {
            for (var e = o.list(t), n = 0; n < e.length; n++) {
                var i = e[n];
                0 === i.indexOf("ps-") && o.remove(t, i)
            }
        }
        ,
        n.outerWidth = function(t) {
            return r(i.css(t, "width")) + r(i.css(t, "paddingLeft")) + r(i.css(t, "paddingRight")) + r(i.css(t, "borderLeftWidth")) + r(i.css(t, "borderRightWidth"))
        }
        ,
        n.startScrolling = function(t, e) {
            o.add(t, "ps-in-scrolling"),
            void 0 !== e ? o.add(t, "ps-" + e) : (o.add(t, "ps-x"),
            o.add(t, "ps-y"))
        }
        ,
        n.stopScrolling = function(t, e) {
            o.remove(t, "ps-in-scrolling"),
            void 0 !== e ? o.remove(t, "ps-" + e) : (o.remove(t, "ps-x"),
            o.remove(t, "ps-y"))
        }
        ,
        n.env = {
            isWebKit: "WebkitAppearance"in document.documentElement.style,
            supportsTouch: "ontouchstart"in window || window.DocumentTouch && document instanceof window.DocumentTouch,
            supportsIePointer: null !== window.navigator.msMaxTouchPoints
        }
    }
    , {
        "./class": 2,
        "./dom": 3
    }],
    7: [function(t, e, n) {
        "use strict";
        var o = t("./plugin/destroy")
          , i = t("./plugin/initialize")
          , r = t("./plugin/update");
        e.exports = {
            initialize: i,
            update: r,
            destroy: o
        }
    }
    , {
        "./plugin/destroy": 9,
        "./plugin/initialize": 17,
        "./plugin/update": 21
    }],
    8: [function(t, e, n) {
        "use strict";
        e.exports = {
            handlers: ["click-rail", "drag-scrollbar", "keyboard", "wheel", "touch"],
            maxScrollbarLength: null,
            minScrollbarLength: null,
            scrollXMarginOffset: 0,
            scrollYMarginOffset: 0,
            suppressScrollX: !1,
            suppressScrollY: !1,
            swipePropagation: !0,
            useBothWheelAxes: !1,
            wheelPropagation: !1,
            wheelSpeed: 1,
            theme: "default"
        }
    }
    , {}],
    9: [function(t, e, n) {
        "use strict";
        var o = t("../lib/helper")
          , i = t("../lib/dom")
          , r = t("./instances");
        e.exports = function(t) {
            var e = r.get(t);
            e && (e.event.unbindAll(),
            i.remove(e.scrollbarX),
            i.remove(e.scrollbarY),
            i.remove(e.scrollbarXRail),
            i.remove(e.scrollbarYRail),
            o.removePsClasses(t),
            r.remove(t))
        }
    }
    , {
        "../lib/dom": 3,
        "../lib/helper": 6,
        "./instances": 18
    }],
    10: [function(t, e, n) {
        "use strict";
        var o = t("../instances")
          , i = t("../update-geometry")
          , r = t("../update-scroll");
        e.exports = function(t) {
            !function(t, e) {
                function n(t) {
                    return t.getBoundingClientRect()
                }
                var o = function(t) {
                    t.stopPropagation()
                };
                e.event.bind(e.scrollbarY, "click", o),
                e.event.bind(e.scrollbarYRail, "click", (function(o) {
                    var a = o.pageY - window.pageYOffset - n(e.scrollbarYRail).top > e.scrollbarYTop ? 1 : -1;
                    r(t, "top", t.scrollTop + a * e.containerHeight),
                    i(t),
                    o.stopPropagation()
                }
                )),
                e.event.bind(e.scrollbarX, "click", o),
                e.event.bind(e.scrollbarXRail, "click", (function(o) {
                    var a = o.pageX - window.pageXOffset - n(e.scrollbarXRail).left > e.scrollbarXLeft ? 1 : -1;
                    r(t, "left", t.scrollLeft + a * e.containerWidth),
                    i(t),
                    o.stopPropagation()
                }
                ))
            }(t, o.get(t))
        }
    }
    , {
        "../instances": 18,
        "../update-geometry": 19,
        "../update-scroll": 20
    }],
    11: [function(t, e, n) {
        "use strict";
        var o = t("../../lib/helper")
          , i = t("../../lib/dom")
          , r = t("../instances")
          , a = t("../update-geometry")
          , l = t("../update-scroll");
        e.exports = function(t) {
            var e = r.get(t);
            (function(t, e) {
                function n(n) {
                    var i = r + n * e.railXRatio
                      , a = Math.max(0, e.scrollbarXRail.getBoundingClientRect().left) + e.railXRatio * (e.railXWidth - e.scrollbarXWidth);
                    e.scrollbarXLeft = i < 0 ? 0 : i > a ? a : i;
                    var s = o.toInt(e.scrollbarXLeft * (e.contentWidth - e.containerWidth) / (e.containerWidth - e.railXRatio * e.scrollbarXWidth)) - e.negativeScrollAdjustment;
                    l(t, "left", s)
                }
                var r = null
                  , s = null
                  , c = function(e) {
                    n(e.pageX - s),
                    a(t),
                    e.stopPropagation(),
                    e.preventDefault()
                }
                  , d = function() {
                    o.stopScrolling(t, "x"),
                    e.event.unbind(e.ownerDocument, "mousemove", c)
                };
                e.event.bind(e.scrollbarX, "mousedown", (function(n) {
                    s = n.pageX,
                    r = o.toInt(i.css(e.scrollbarX, "left")) * e.railXRatio,
                    o.startScrolling(t, "x"),
                    e.event.bind(e.ownerDocument, "mousemove", c),
                    e.event.once(e.ownerDocument, "mouseup", d),
                    n.stopPropagation(),
                    n.preventDefault()
                }
                ))
            }
            )(t, e),
            function(t, e) {
                function n(n) {
                    var i = r + n * e.railYRatio
                      , a = Math.max(0, e.scrollbarYRail.getBoundingClientRect().top) + e.railYRatio * (e.railYHeight - e.scrollbarYHeight);
                    e.scrollbarYTop = i < 0 ? 0 : i > a ? a : i;
                    var s = o.toInt(e.scrollbarYTop * (e.contentHeight - e.containerHeight) / (e.containerHeight - e.railYRatio * e.scrollbarYHeight));
                    l(t, "top", s)
                }
                var r = null
                  , s = null
                  , c = function(e) {
                    n(e.pageY - s),
                    a(t),
                    e.stopPropagation(),
                    e.preventDefault()
                }
                  , d = function() {
                    o.stopScrolling(t, "y"),
                    e.event.unbind(e.ownerDocument, "mousemove", c)
                };
                e.event.bind(e.scrollbarY, "mousedown", (function(n) {
                    s = n.pageY,
                    r = o.toInt(i.css(e.scrollbarY, "top")) * e.railYRatio,
                    o.startScrolling(t, "y"),
                    e.event.bind(e.ownerDocument, "mousemove", c),
                    e.event.once(e.ownerDocument, "mouseup", d),
                    n.stopPropagation(),
                    n.preventDefault()
                }
                ))
            }(t, e)
        }
    }
    , {
        "../../lib/dom": 3,
        "../../lib/helper": 6,
        "../instances": 18,
        "../update-geometry": 19,
        "../update-scroll": 20
    }],
    12: [function(t, e, n) {
        "use strict";
        function o(t, e) {
            var n = !1;
            e.event.bind(t, "mouseenter", (function() {
                n = !0
            }
            )),
            e.event.bind(t, "mouseleave", (function() {
                n = !1
            }
            ));
            var o = !1;
            e.event.bind(e.ownerDocument, "keydown", (function(a) {
                if (!(a.isDefaultPrevented && a.isDefaultPrevented() || a.defaultPrevented)) {
                    var c = r.matches(e.scrollbarX, ":focus") || r.matches(e.scrollbarY, ":focus");
                    if (n || c) {
                        var d = document.activeElement ? document.activeElement : e.ownerDocument.activeElement;
                        if (d) {
                            if ("IFRAME" === d.tagName)
                                d = d.contentDocument.activeElement;
                            else
                                for (; d.shadowRoot; )
                                    d = d.shadowRoot.activeElement;
                            if (i.isEditable(d))
                                return
                        }
                        var u = 0
                          , p = 0;
                        switch (a.which) {
                        case 37:
                            u = a.metaKey ? -e.contentWidth : a.altKey ? -e.containerWidth : -30;
                            break;
                        case 38:
                            p = a.metaKey ? e.contentHeight : a.altKey ? e.containerHeight : 30;
                            break;
                        case 39:
                            u = a.metaKey ? e.contentWidth : a.altKey ? e.containerWidth : 30;
                            break;
                        case 40:
                            p = a.metaKey ? -e.contentHeight : a.altKey ? -e.containerHeight : -30;
                            break;
                        case 33:
                            p = 90;
                            break;
                        case 32:
                            p = a.shiftKey ? 90 : -90;
                            break;
                        case 34:
                            p = -90;
                            break;
                        case 35:
                            p = a.ctrlKey ? -e.contentHeight : -e.containerHeight;
                            break;
                        case 36:
                            p = a.ctrlKey ? t.scrollTop : e.containerHeight;
                            break;
                        default:
                            return
                        }
                        s(t, "top", t.scrollTop - p),
                        s(t, "left", t.scrollLeft + u),
                        l(t),
                        o = function(n, o) {
                            var i = t.scrollTop;
                            if (0 === n) {
                                if (!e.scrollbarYActive)
                                    return !1;
                                if (0 === i && o > 0 || i >= e.contentHeight - e.containerHeight && o < 0)
                                    return !e.settings.wheelPropagation
                            }
                            var r = t.scrollLeft;
                            if (0 === o) {
                                if (!e.scrollbarXActive)
                                    return !1;
                                if (0 === r && n < 0 || r >= e.contentWidth - e.containerWidth && n > 0)
                                    return !e.settings.wheelPropagation
                            }
                            return !0
                        }(u, p),
                        o && a.preventDefault()
                    }
                }
            }
            ))
        }
        var i = t("../../lib/helper")
          , r = t("../../lib/dom")
          , a = t("../instances")
          , l = t("../update-geometry")
          , s = t("../update-scroll");
        e.exports = function(t) {
            o(t, a.get(t))
        }
    }
    , {
        "../../lib/dom": 3,
        "../../lib/helper": 6,
        "../instances": 18,
        "../update-geometry": 19,
        "../update-scroll": 20
    }],
    13: [function(t, e, n) {
        "use strict";
        function o(t, e) {
            function n(n) {
                var i = function(t) {
                    var e = t.deltaX
                      , n = -1 * t.deltaY;
                    return void 0 !== e && void 0 !== n || (e = -1 * t.wheelDeltaX / 6,
                    n = t.wheelDeltaY / 6),
                    t.deltaMode && 1 === t.deltaMode && (e *= 10,
                    n *= 10),
                    e != e && n != n && (e = 0,
                    n = t.wheelDelta),
                    t.shiftKey ? [-n, -e] : [e, n]
                }(n)
                  , l = i[0]
                  , s = i[1];
                (function(e, n) {
                    var o = t.querySelector("textarea:hover, select[multiple]:hover, .ps-child:hover");
                    if (o) {
                        if (!window.getComputedStyle(o).overflow.match(/(scroll|auto)/))
                            return !1;
                        var i = o.scrollHeight - o.clientHeight;
                        if (i > 0 && !(0 === o.scrollTop && n > 0 || o.scrollTop === i && n < 0))
                            return !0;
                        var r = o.scrollLeft - o.clientWidth;
                        if (r > 0 && !(0 === o.scrollLeft && e < 0 || o.scrollLeft === r && e > 0))
                            return !0
                    }
                    return !1
                }
                )(l, s) || (o = !1,
                e.settings.useBothWheelAxes ? e.scrollbarYActive && !e.scrollbarXActive ? (a(t, "top", s ? t.scrollTop - s * e.settings.wheelSpeed : t.scrollTop + l * e.settings.wheelSpeed),
                o = !0) : e.scrollbarXActive && !e.scrollbarYActive && (a(t, "left", l ? t.scrollLeft + l * e.settings.wheelSpeed : t.scrollLeft - s * e.settings.wheelSpeed),
                o = !0) : (a(t, "top", t.scrollTop - s * e.settings.wheelSpeed),
                a(t, "left", t.scrollLeft + l * e.settings.wheelSpeed)),
                r(t),
                o = o || function(n, o) {
                    var i = t.scrollTop;
                    if (0 === n) {
                        if (!e.scrollbarYActive)
                            return !1;
                        if (0 === i && o > 0 || i >= e.contentHeight - e.containerHeight && o < 0)
                            return !e.settings.wheelPropagation
                    }
                    var r = t.scrollLeft;
                    if (0 === o) {
                        if (!e.scrollbarXActive)
                            return !1;
                        if (0 === r && n < 0 || r >= e.contentWidth - e.containerWidth && n > 0)
                            return !e.settings.wheelPropagation
                    }
                    return !0
                }(l, s),
                o && (n.stopPropagation(),
                n.preventDefault()))
            }
            var o = !1;
            void 0 !== window.onwheel ? e.event.bind(t, "wheel", n) : void 0 !== window.onmousewheel && e.event.bind(t, "mousewheel", n)
        }
        var i = t("../instances")
          , r = t("../update-geometry")
          , a = t("../update-scroll");
        e.exports = function(t) {
            o(t, i.get(t))
        }
    }
    , {
        "../instances": 18,
        "../update-geometry": 19,
        "../update-scroll": 20
    }],
    14: [function(t, e, n) {
        "use strict";
        var o = t("../instances")
          , i = t("../update-geometry");
        e.exports = function(t) {
            !function(t, e) {
                e.event.bind(t, "scroll", (function() {
                    i(t)
                }
                ))
            }(t, o.get(t))
        }
    }
    , {
        "../instances": 18,
        "../update-geometry": 19
    }],
    15: [function(t, e, n) {
        "use strict";
        function o(t, e) {
            function n() {
                s || (s = setInterval((function() {
                    return r.get(t) ? (l(t, "top", t.scrollTop + c.top),
                    l(t, "left", t.scrollLeft + c.left),
                    void a(t)) : void clearInterval(s)
                }
                ), 50))
            }
            function o() {
                s && (clearInterval(s),
                s = null),
                i.stopScrolling(t)
            }
            var s = null
              , c = {
                top: 0,
                left: 0
            }
              , d = !1;
            e.event.bind(e.ownerDocument, "selectionchange", (function() {
                t.contains(function() {
                    var t = window.getSelection ? window.getSelection() : document.getSelection ? document.getSelection() : "";
                    return 0 === t.toString().length ? null : t.getRangeAt(0).commonAncestorContainer
                }()) ? d = !0 : (d = !1,
                o())
            }
            )),
            e.event.bind(window, "mouseup", (function() {
                d && (d = !1,
                o())
            }
            )),
            e.event.bind(window, "keyup", (function() {
                d && (d = !1,
                o())
            }
            )),
            e.event.bind(window, "mousemove", (function(e) {
                if (d) {
                    var r = {
                        x: e.pageX,
                        y: e.pageY
                    }
                      , a = {
                        left: t.offsetLeft,
                        right: t.offsetLeft + t.offsetWidth,
                        top: t.offsetTop,
                        bottom: t.offsetTop + t.offsetHeight
                    };
                    r.x < a.left + 3 ? (c.left = -5,
                    i.startScrolling(t, "x")) : r.x > a.right - 3 ? (c.left = 5,
                    i.startScrolling(t, "x")) : c.left = 0,
                    r.y < a.top + 3 ? (c.top = a.top + 3 - r.y < 5 ? -5 : -20,
                    i.startScrolling(t, "y")) : r.y > a.bottom - 3 ? (c.top = r.y - a.bottom + 3 < 5 ? 5 : 20,
                    i.startScrolling(t, "y")) : c.top = 0,
                    0 === c.top && 0 === c.left ? o() : n()
                }
            }
            ))
        }
        var i = t("../../lib/helper")
          , r = t("../instances")
          , a = t("../update-geometry")
          , l = t("../update-scroll");
        e.exports = function(t) {
            o(t, r.get(t))
        }
    }
    , {
        "../../lib/helper": 6,
        "../instances": 18,
        "../update-geometry": 19,
        "../update-scroll": 20
    }],
    16: [function(t, e, n) {
        "use strict";
        var o = t("../../lib/helper")
          , i = t("../instances")
          , r = t("../update-geometry")
          , a = t("../update-scroll");
        e.exports = function(t) {
            (o.env.supportsTouch || o.env.supportsIePointer) && function(t, e, n, o) {
                function l(n, o) {
                    var i = t.scrollTop
                      , r = t.scrollLeft
                      , a = Math.abs(n)
                      , l = Math.abs(o);
                    if (l > a) {
                        if (o < 0 && i === e.contentHeight - e.containerHeight || o > 0 && 0 === i)
                            return !e.settings.swipePropagation
                    } else if (a > l && (n < 0 && r === e.contentWidth - e.containerWidth || n > 0 && 0 === r))
                        return !e.settings.swipePropagation;
                    return !0
                }
                function s(e, n) {
                    a(t, "top", t.scrollTop - n),
                    a(t, "left", t.scrollLeft - e),
                    r(t)
                }
                function c() {
                    w = !0
                }
                function d() {
                    w = !1
                }
                function u(t) {
                    return t.targetTouches ? t.targetTouches[0] : t
                }
                function p(t) {
                    return !(!t.targetTouches || 1 !== t.targetTouches.length) || !(!t.pointerType || "mouse" === t.pointerType || t.pointerType === t.MSPOINTER_TYPE_MOUSE)
                }
                function f(t) {
                    if (p(t)) {
                        L = !0;
                        var e = u(t);
                        m.pageX = e.pageX,
                        m.pageY = e.pageY,
                        b = (new Date).getTime(),
                        null !== y && clearInterval(y),
                        t.stopPropagation()
                    }
                }
                function h(t) {
                    if (!L && e.settings.swipePropagation && f(t),
                    !w && L && p(t)) {
                        var n = u(t)
                          , o = {
                            pageX: n.pageX,
                            pageY: n.pageY
                        }
                          , i = o.pageX - m.pageX
                          , r = o.pageY - m.pageY;
                        s(i, r),
                        m = o;
                        var a = (new Date).getTime()
                          , c = a - b;
                        c > 0 && (v.x = i / c,
                        v.y = r / c,
                        b = a),
                        l(i, r) && (t.stopPropagation(),
                        t.preventDefault())
                    }
                }
                function g() {
                    !w && L && (L = !1,
                    clearInterval(y),
                    y = setInterval((function() {
                        return i.get(t) && (v.x || v.y) ? Math.abs(v.x) < .01 && Math.abs(v.y) < .01 ? void clearInterval(y) : (s(30 * v.x, 30 * v.y),
                        v.x *= .8,
                        void (v.y *= .8)) : void clearInterval(y)
                    }
                    ), 10))
                }
                var m = {}
                  , b = 0
                  , v = {}
                  , y = null
                  , w = !1
                  , L = !1;
                n ? (e.event.bind(window, "touchstart", c),
                e.event.bind(window, "touchend", d),
                e.event.bind(t, "touchstart", f),
                e.event.bind(t, "touchmove", h),
                e.event.bind(t, "touchend", g)) : o && (window.PointerEvent ? (e.event.bind(window, "pointerdown", c),
                e.event.bind(window, "pointerup", d),
                e.event.bind(t, "pointerdown", f),
                e.event.bind(t, "pointermove", h),
                e.event.bind(t, "pointerup", g)) : window.MSPointerEvent && (e.event.bind(window, "MSPointerDown", c),
                e.event.bind(window, "MSPointerUp", d),
                e.event.bind(t, "MSPointerDown", f),
                e.event.bind(t, "MSPointerMove", h),
                e.event.bind(t, "MSPointerUp", g)))
            }(t, i.get(t), o.env.supportsTouch, o.env.supportsIePointer)
        }
    }
    , {
        "../../lib/helper": 6,
        "../instances": 18,
        "../update-geometry": 19,
        "../update-scroll": 20
    }],
    17: [function(t, e, n) {
        "use strict";
        var o = t("../lib/helper")
          , i = t("../lib/class")
          , r = t("./instances")
          , a = t("./update-geometry")
          , l = {
            "click-rail": t("./handler/click-rail"),
            "drag-scrollbar": t("./handler/drag-scrollbar"),
            keyboard: t("./handler/keyboard"),
            wheel: t("./handler/mouse-wheel"),
            touch: t("./handler/touch"),
            selection: t("./handler/selection")
        }
          , s = t("./handler/native-scroll");
        e.exports = function(t, e) {
            e = "object" == typeof e ? e : {},
            i.add(t, "ps-container");
            var n = r.add(t);
            n.settings = o.extend(n.settings, e),
            i.add(t, "ps-theme-" + n.settings.theme),
            n.settings.handlers.forEach((function(e) {
                l[e](t)
            }
            )),
            s(t),
            a(t)
        }
    }
    , {
        "../lib/class": 2,
        "../lib/helper": 6,
        "./handler/click-rail": 10,
        "./handler/drag-scrollbar": 11,
        "./handler/keyboard": 12,
        "./handler/mouse-wheel": 13,
        "./handler/native-scroll": 14,
        "./handler/selection": 15,
        "./handler/touch": 16,
        "./instances": 18,
        "./update-geometry": 19
    }],
    18: [function(t, e, n) {
        "use strict";
        function o(t) {
            function e() {
                a.add(t, "ps-focus")
            }
            function n() {
                a.remove(t, "ps-focus")
            }
            var o = this;
            o.settings = r.clone(l),
            o.containerWidth = null,
            o.containerHeight = null,
            o.contentWidth = null,
            o.contentHeight = null,
            o.isRtl = "rtl" === s.css(t, "direction"),
            o.isNegativeScroll = function() {
                var e, n = t.scrollLeft;
                return t.scrollLeft = -1,
                e = t.scrollLeft < 0,
                t.scrollLeft = n,
                e
            }(),
            o.negativeScrollAdjustment = o.isNegativeScroll ? t.scrollWidth - t.clientWidth : 0,
            o.event = new c,
            o.ownerDocument = t.ownerDocument || document,
            o.scrollbarXRail = s.appendTo(s.e("div", "ps-scrollbar-x-rail"), t),
            o.scrollbarX = s.appendTo(s.e("div", "ps-scrollbar-x"), o.scrollbarXRail),
            o.scrollbarX.setAttribute("tabindex", 0),
            o.event.bind(o.scrollbarX, "focus", e),
            o.event.bind(o.scrollbarX, "blur", n),
            o.scrollbarXActive = null,
            o.scrollbarXWidth = null,
            o.scrollbarXLeft = null,
            o.scrollbarXBottom = r.toInt(s.css(o.scrollbarXRail, "bottom")),
            o.isScrollbarXUsingBottom = o.scrollbarXBottom == o.scrollbarXBottom,
            o.scrollbarXTop = o.isScrollbarXUsingBottom ? null : r.toInt(s.css(o.scrollbarXRail, "top")),
            o.railBorderXWidth = r.toInt(s.css(o.scrollbarXRail, "borderLeftWidth")) + r.toInt(s.css(o.scrollbarXRail, "borderRightWidth")),
            s.css(o.scrollbarXRail, "display", "block"),
            o.railXMarginWidth = r.toInt(s.css(o.scrollbarXRail, "marginLeft")) + r.toInt(s.css(o.scrollbarXRail, "marginRight")),
            s.css(o.scrollbarXRail, "display", ""),
            o.railXWidth = null,
            o.railXRatio = null,
            o.scrollbarYRail = s.appendTo(s.e("div", "ps-scrollbar-y-rail"), t),
            o.scrollbarY = s.appendTo(s.e("div", "ps-scrollbar-y"), o.scrollbarYRail),
            o.scrollbarY.setAttribute("tabindex", 0),
            o.event.bind(o.scrollbarY, "focus", e),
            o.event.bind(o.scrollbarY, "blur", n),
            o.scrollbarYActive = null,
            o.scrollbarYHeight = null,
            o.scrollbarYTop = null,
            o.scrollbarYRight = r.toInt(s.css(o.scrollbarYRail, "right")),
            o.isScrollbarYUsingRight = o.scrollbarYRight == o.scrollbarYRight,
            o.scrollbarYLeft = o.isScrollbarYUsingRight ? null : r.toInt(s.css(o.scrollbarYRail, "left")),
            o.scrollbarYOuterWidth = o.isRtl ? r.outerWidth(o.scrollbarY) : null,
            o.railBorderYWidth = r.toInt(s.css(o.scrollbarYRail, "borderTopWidth")) + r.toInt(s.css(o.scrollbarYRail, "borderBottomWidth")),
            s.css(o.scrollbarYRail, "display", "block"),
            o.railYMarginHeight = r.toInt(s.css(o.scrollbarYRail, "marginTop")) + r.toInt(s.css(o.scrollbarYRail, "marginBottom")),
            s.css(o.scrollbarYRail, "display", ""),
            o.railYHeight = null,
            o.railYRatio = null
        }
        function i(t) {
            return t.getAttribute("data-ps-id")
        }
        var r = t("../lib/helper")
          , a = t("../lib/class")
          , l = t("./default-setting")
          , s = t("../lib/dom")
          , c = t("../lib/event-manager")
          , d = t("../lib/guid")
          , u = {};
        n.add = function(t) {
            var e = d();
            return function(t, e) {
                t.setAttribute("data-ps-id", e)
            }(t, e),
            u[e] = new o(t),
            u[e]
        }
        ,
        n.remove = function(t) {
            delete u[i(t)],
            function(t) {
                t.removeAttribute("data-ps-id")
            }(t)
        }
        ,
        n.get = function(t) {
            return u[i(t)]
        }
    }
    , {
        "../lib/class": 2,
        "../lib/dom": 3,
        "../lib/event-manager": 4,
        "../lib/guid": 5,
        "../lib/helper": 6,
        "./default-setting": 8
    }],
    19: [function(t, e, n) {
        "use strict";
        function o(t, e) {
            return t.settings.minScrollbarLength && (e = Math.max(e, t.settings.minScrollbarLength)),
            t.settings.maxScrollbarLength && (e = Math.min(e, t.settings.maxScrollbarLength)),
            e
        }
        var i = t("../lib/helper")
          , r = t("../lib/class")
          , a = t("../lib/dom")
          , l = t("./instances")
          , s = t("./update-scroll");
        e.exports = function(t) {
            var e, n = l.get(t);
            n.containerWidth = t.clientWidth,
            n.containerHeight = t.clientHeight,
            n.contentWidth = t.scrollWidth,
            n.contentHeight = t.scrollHeight,
            t.contains(n.scrollbarXRail) || ((e = a.queryChildren(t, ".ps-scrollbar-x-rail")).length > 0 && e.forEach((function(t) {
                a.remove(t)
            }
            )),
            a.appendTo(n.scrollbarXRail, t)),
            t.contains(n.scrollbarYRail) || ((e = a.queryChildren(t, ".ps-scrollbar-y-rail")).length > 0 && e.forEach((function(t) {
                a.remove(t)
            }
            )),
            a.appendTo(n.scrollbarYRail, t)),
            !n.settings.suppressScrollX && n.containerWidth + n.settings.scrollXMarginOffset < n.contentWidth ? (n.scrollbarXActive = !0,
            n.railXWidth = n.containerWidth - n.railXMarginWidth,
            n.railXRatio = n.containerWidth / n.railXWidth,
            n.scrollbarXWidth = o(n, i.toInt(n.railXWidth * n.containerWidth / n.contentWidth)),
            n.scrollbarXLeft = i.toInt((n.negativeScrollAdjustment + t.scrollLeft) * (n.railXWidth - n.scrollbarXWidth) / (n.contentWidth - n.containerWidth))) : n.scrollbarXActive = !1,
            !n.settings.suppressScrollY && n.containerHeight + n.settings.scrollYMarginOffset < n.contentHeight ? (n.scrollbarYActive = !0,
            n.railYHeight = n.containerHeight - n.railYMarginHeight,
            n.railYRatio = n.containerHeight / n.railYHeight,
            n.scrollbarYHeight = o(n, i.toInt(n.railYHeight * n.containerHeight / n.contentHeight)),
            n.scrollbarYTop = i.toInt(t.scrollTop * (n.railYHeight - n.scrollbarYHeight) / (n.contentHeight - n.containerHeight))) : n.scrollbarYActive = !1,
            n.scrollbarXLeft >= n.railXWidth - n.scrollbarXWidth && (n.scrollbarXLeft = n.railXWidth - n.scrollbarXWidth),
            n.scrollbarYTop >= n.railYHeight - n.scrollbarYHeight && (n.scrollbarYTop = n.railYHeight - n.scrollbarYHeight),
            function(t, e) {
                var n = {
                    width: e.railXWidth
                };
                e.isRtl ? n.left = e.negativeScrollAdjustment + t.scrollLeft + e.containerWidth - e.contentWidth : n.left = t.scrollLeft,
                e.isScrollbarXUsingBottom ? n.bottom = e.scrollbarXBottom - t.scrollTop : n.top = e.scrollbarXTop + t.scrollTop,
                a.css(e.scrollbarXRail, n);
                var o = {
                    top: t.scrollTop,
                    height: e.railYHeight
                };
                e.isScrollbarYUsingRight ? e.isRtl ? o.right = e.contentWidth - (e.negativeScrollAdjustment + t.scrollLeft) - e.scrollbarYRight - e.scrollbarYOuterWidth : o.right = e.scrollbarYRight - t.scrollLeft : e.isRtl ? o.left = e.negativeScrollAdjustment + t.scrollLeft + 2 * e.containerWidth - e.contentWidth - e.scrollbarYLeft - e.scrollbarYOuterWidth : o.left = e.scrollbarYLeft + t.scrollLeft,
                a.css(e.scrollbarYRail, o),
                a.css(e.scrollbarX, {
                    left: e.scrollbarXLeft,
                    width: e.scrollbarXWidth - e.railBorderXWidth
                }),
                a.css(e.scrollbarY, {
                    top: e.scrollbarYTop,
                    height: e.scrollbarYHeight - e.railBorderYWidth
                })
            }(t, n),
            n.scrollbarXActive ? r.add(t, "ps-active-x") : (r.remove(t, "ps-active-x"),
            n.scrollbarXWidth = 0,
            n.scrollbarXLeft = 0,
            s(t, "left", 0)),
            n.scrollbarYActive ? r.add(t, "ps-active-y") : (r.remove(t, "ps-active-y"),
            n.scrollbarYHeight = 0,
            n.scrollbarYTop = 0,
            s(t, "top", 0))
        }
    }
    , {
        "../lib/class": 2,
        "../lib/dom": 3,
        "../lib/helper": 6,
        "./instances": 18,
        "./update-scroll": 20
    }],
    20: [function(t, e, n) {
        "use strict";
        var o, i, r = t("./instances"), a = function(t) {
            var e = document.createEvent("Event");
            return e.initEvent(t, !0, !0),
            e
        };
        e.exports = function(t, e, n) {
            if (void 0 === t)
                throw "You must provide an element to the update-scroll function";
            if (void 0 === e)
                throw "You must provide an axis to the update-scroll function";
            if (void 0 === n)
                throw "You must provide a value to the update-scroll function";
            "top" === e && n <= 0 && (t.scrollTop = n = 0,
            t.dispatchEvent(a("ps-y-reach-start"))),
            "left" === e && n <= 0 && (t.scrollLeft = n = 0,
            t.dispatchEvent(a("ps-x-reach-start")));
            var l = r.get(t);
            "top" === e && n >= l.contentHeight - l.containerHeight && ((n = l.contentHeight - l.containerHeight) - t.scrollTop <= 1 ? n = t.scrollTop : t.scrollTop = n,
            t.dispatchEvent(a("ps-y-reach-end"))),
            "left" === e && n >= l.contentWidth - l.containerWidth && ((n = l.contentWidth - l.containerWidth) - t.scrollLeft <= 1 ? n = t.scrollLeft : t.scrollLeft = n,
            t.dispatchEvent(a("ps-x-reach-end"))),
            o || (o = t.scrollTop),
            i || (i = t.scrollLeft),
            "top" === e && n < o && t.dispatchEvent(a("ps-scroll-up")),
            "top" === e && n > o && t.dispatchEvent(a("ps-scroll-down")),
            "left" === e && n < i && t.dispatchEvent(a("ps-scroll-left")),
            "left" === e && n > i && t.dispatchEvent(a("ps-scroll-right")),
            "top" === e && (t.scrollTop = o = n,
            t.dispatchEvent(a("ps-scroll-y"))),
            "left" === e && (t.scrollLeft = i = n,
            t.dispatchEvent(a("ps-scroll-x")))
        }
    }
    , {
        "./instances": 18
    }],
    21: [function(t, e, n) {
        "use strict";
        var o = t("../lib/helper")
          , i = t("../lib/dom")
          , r = t("./instances")
          , a = t("./update-geometry")
          , l = t("./update-scroll");
        e.exports = function(t) {
            var e = r.get(t);
            e && (e.negativeScrollAdjustment = e.isNegativeScroll ? t.scrollWidth - t.clientWidth : 0,
            i.css(e.scrollbarXRail, "display", "block"),
            i.css(e.scrollbarYRail, "display", "block"),
            e.railXMarginWidth = o.toInt(i.css(e.scrollbarXRail, "marginLeft")) + o.toInt(i.css(e.scrollbarXRail, "marginRight")),
            e.railYMarginHeight = o.toInt(i.css(e.scrollbarYRail, "marginTop")) + o.toInt(i.css(e.scrollbarYRail, "marginBottom")),
            i.css(e.scrollbarXRail, "display", "none"),
            i.css(e.scrollbarYRail, "display", "none"),
            a(t),
            l(t, "top", t.scrollTop),
            l(t, "left", t.scrollLeft),
            i.css(e.scrollbarXRail, "display", ""),
            i.css(e.scrollbarYRail, "display", ""))
        }
    }
    , {
        "../lib/dom": 3,
        "../lib/helper": 6,
        "./instances": 18,
        "./update-geometry": 19,
        "./update-scroll": 20
    }]
}, {}, [1]),
function(t, e) {
    "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? module.exports = e() : t.store = e()
}(this, (function() {
    var t, e = {}, n = window, o = n.document, i = "localStorage", r = "script";
    if (e.disabled = !1,
    e.version = "1.3.19",
    e.set = function(t, e) {}
    ,
    e.get = function(t, e) {}
    ,
    e.has = function(t) {
        return void 0 !== e.get(t)
    }
    ,
    e.remove = function(t) {}
    ,
    e.clear = function() {}
    ,
    e.transact = function(t, n, o) {
        null == o && (o = n,
        n = null),
        null == n && (n = {});
        var i = e.get(t, n);
        o(i),
        e.set(t, i)
    }
    ,
    e.getAll = function() {}
    ,
    e.forEach = function() {}
    ,
    e.serialize = function(t) {
        return JSON.stringify(t)
    }
    ,
    e.deserialize = function(t) {
        if ("string" == typeof t)
            try {
                return JSON.parse(t)
            } catch (e) {
                return t || void 0
            }
    }
    ,
    function() {
        try {
            return i in n && n[i]
        } catch (t) {
            return !1
        }
    }())
        t = n[i],
        e.set = function(n, o) {
            return void 0 === o ? e.remove(n) : (t.setItem(n, e.serialize(o)),
            o)
        }
        ,
        e.get = function(n, o) {
            var i = e.deserialize(t.getItem(n));
            return void 0 === i ? o : i
        }
        ,
        e.remove = function(e) {
            t.removeItem(e)
        }
        ,
        e.clear = function() {
            t.clear()
        }
        ,
        e.getAll = function() {
            var t = {};
            return e.forEach((function(e, n) {
                t[e] = n
            }
            )),
            t
        }
        ,
        e.forEach = function(n) {
            for (var o = 0; o < t.length; o++) {
                var i = t.key(o);
                n(i, e.get(i))
            }
        }
        ;
    else if (o.documentElement.addBehavior) {
        var a, l;
        try {
            (l = new ActiveXObject("htmlfile")).open(),
            l.write("<" + r + ">document.w=window</" + r + '><iframe src="/favicon.ico"></iframe>'),
            l.close(),
            a = l.w.frames[0].document,
            t = a.createElement("div")
        } catch (e) {
            t = o.createElement("div"),
            a = o.body
        }
        var s = function(n) {
            return function() {
                var o = Array.prototype.slice.call(arguments, 0);
                o.unshift(t),
                a.appendChild(t),
                t.addBehavior("#default#userData"),
                t.load(i);
                var r = n.apply(e, o);
                return a.removeChild(t),
                r
            }
        }
          , c = new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]","g")
          , d = function(t) {
            return t.replace(/^d/, "___$&").replace(c, "___")
        };
        e.set = s((function(t, n, o) {
            return n = d(n),
            void 0 === o ? e.remove(n) : (t.setAttribute(n, e.serialize(o)),
            t.save(i),
            o)
        }
        )),
        e.get = s((function(t, n, o) {
            n = d(n);
            var i = e.deserialize(t.getAttribute(n));
            return void 0 === i ? o : i
        }
        )),
        e.remove = s((function(t, e) {
            e = d(e),
            t.removeAttribute(e),
            t.save(i)
        }
        )),
        e.clear = s((function(t) {
            var e = t.XMLDocument.documentElement.attributes;
            for (t.load(i); e.length; )
                t.removeAttribute(e[0].name);
            t.save(i)
        }
        )),
        e.getAll = function(t) {
            var n = {};
            return e.forEach((function(t, e) {
                n[t] = e
            }
            )),
            n
        }
        ,
        e.forEach = s((function(t, n) {
            for (var o, i = t.XMLDocument.documentElement.attributes, r = 0; o = i[r]; ++r)
                n(o.name, e.deserialize(t.getAttribute(o.name)))
        }
        ))
    }
    try {
        var u = "__storejs__";
        e.set(u, u),
        e.get(u) != u && (e.disabled = !0),
        e.remove(u)
    } catch (t) {
        e.disabled = !0
    }
    return e.enabled = !e.disabled,
    e
}
)),
function(t) {
    var e = /iPhone/i
      , n = /iPod/i
      , o = /iPad/i
      , i = /(?=.*\bAndroid\b)(?=.*\bMobile\b)/i
      , r = /Android/i
      , a = /(?=.*\bAndroid\b)(?=.*\bSD4930UR\b)/i
      , l = /(?=.*\bAndroid\b)(?=.*\b(?:KFOT|KFTT|KFJWI|KFJWA|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|KFARWI|KFASWI|KFSAWI|KFSAWA)\b)/i
      , s = /IEMobile/i
      , c = /(?=.*\bWindows\b)(?=.*\bARM\b)/i
      , d = /BlackBerry/i
      , u = /BB10/i
      , p = /Opera Mini/i
      , f = /(CriOS|Chrome)(?=.*\bMobile\b)/i
      , h = /(?=.*\bFirefox\b)(?=.*\bMobile\b)/i
      , g = /UC.*Browser|UCWEB/i
      , m = /AppleTV/i
      , b = /(GoogleTV|CrKey)/i
      , v = /(SmartTV|SMART-TV|Tizen(.*TV))/i
      , y = /(Sony(.*TV)|TV(.*Sony))/i
      , w = /(LG(.*NetCast))/i
      , L = /TSB(.*TV)/i
      , x = /Viera/i
      , T = /(HbbTV|Espial|NETTV|TV(.*HDMI))/i
      , S = new RegExp("(?:Nexus 7|BNTV250|Kindle Fire|Silk|GT-P1000)","i")
      , k = function(t, e) {
        return t.test(e)
    }
      , E = function(t) {
        var E = t || navigator.userAgent
          , A = E.split("[FBAN");
        if (void 0 !== A[1] && (E = A[0]),
        this.apple = {
            phone: k(e, E),
            ipod: k(n, E),
            tablet: !k(e, E) && k(o, E),
            device: k(e, E) || k(n, E) || k(o, E)
        },
        this.amazon = {
            phone: k(a, E),
            tablet: !k(a, E) && k(l, E),
            device: k(a, E) || k(l, E)
        },
        this.android = {
            phone: k(a, E) || k(i, E),
            tablet: !k(a, E) && !k(i, E) && (k(l, E) || k(r, E)),
            device: k(a, E) || k(l, E) || k(i, E) || k(r, E)
        },
        this.windows = {
            phone: k(s, E),
            tablet: k(c, E),
            device: k(s, E) || k(c, E)
        },
        this.tvu = {
            apple: k(m, E),
            google: k(b, E),
            samsung: k(v, E),
            sony: k(y, E),
            lg: k(w, E),
            toshiba: k(L, E),
            panasonic: k(x, E),
            other: k(T, E)
        },
        this.other = {
            blackberry: k(d, E),
            blackberry10: k(u, E),
            opera: k(p, E),
            firefox: k(h, E),
            chrome: k(f, E),
            uc: k(g, E),
            device: k(d, E) || k(u, E) || k(p, E) || k(h, E) || k(f, E)
        },
        this.seven_inch = k(S, E),
        this.any = this.apple.device || this.android.device || this.windows.device || this.other.device || this.seven_inch,
        this.phone = this.apple.phone || this.android.phone || this.windows.phone,
        this.tablet = this.apple.tablet || this.android.tablet || this.windows.tablet,
        this.tv = this.tvu.apple || this.tvu.google || this.tvu.samsung || this.tvu.sony || this.tvu.lg || this.tvu.toshiba || this.tvu.panasonic || this.tvu.other,
        "undefined" == typeof window)
            return this
    }
      , A = function() {
        var t = new E;
        return t.Class = E,
        t
    };
    "undefined" != typeof module && module.exports && "undefined" == typeof window ? module.exports = E : "undefined" != typeof module && module.exports && "undefined" != typeof window ? module.exports = A() : "function" == typeof define && define.amd ? define("ismobile", [], t.ismobile = A()) : t.ismobile = A()
}(this),
function() {
    "use strict";
    function t() {
        var t = {
            parent: document.body,
            version: "1.0.11",
            defaultOkLabel: "Ok",
            okLabel: "Ok",
            defaultCancelLabel: "Cancel",
            cancelLabel: "Cancel",
            defaultMaxLogItems: 2,
            maxLogItems: 2,
            promptValue: "",
            promptPlaceholder: "",
            closeLogOnClick: !1,
            closeLogOnClickDefault: !1,
            delay: 5e3,
            defaultDelay: 5e3,
            logContainerClass: "alertify-logs",
            logContainerDefaultClass: "alertify-logs",
            dialogs: {
                buttons: {
                    holder: "<nav>{{buttons}}</nav>",
                    ok: "<button class='ok' tabindex='1'>{{ok}}</button>",
                    cancel: "<button class='cancel' tabindex='2'>{{cancel}}</button>"
                },
                input: "<input type='text'>",
                message: "<p class='msg'>{{message}}</p>",
                log: "<div class='{{class}}'>{{message}}</div>"
            },
            defaultDialogs: {
                buttons: {
                    holder: "<nav>{{buttons}}</nav>",
                    ok: "<button class='ok' tabindex='1'>{{ok}}</button>",
                    cancel: "<button class='cancel' tabindex='2'>{{cancel}}</button>"
                },
                input: "<input type='text'>",
                message: "<p class='msg'>{{message}}</p>",
                log: "<div class='{{class}}'>{{message}}</div>"
            },
            build: function(t) {
                var e = this.dialogs.buttons.ok
                  , n = "<div class='dialog'><div>" + this.dialogs.message.replace("{{message}}", t.message);
                return "confirm" !== t.type && "prompt" !== t.type || (e = this.dialogs.buttons.cancel + this.dialogs.buttons.ok),
                "prompt" === t.type && (n += this.dialogs.input),
                (n + this.dialogs.buttons.holder + "</div></div>").replace("{{buttons}}", e).replace("{{ok}}", this.okLabel).replace("{{cancel}}", this.cancelLabel)
            },
            setCloseLogOnClick: function(t) {
                this.closeLogOnClick = !!t
            },
            close: function(t, n) {
                this.closeLogOnClick && t.addEventListener("click", (function() {
                    e(t)
                }
                )),
                0 > (n = n && !isNaN(+n) ? +n : this.delay) ? e(t) : n > 0 && setTimeout((function() {
                    e(t)
                }
                ), n)
            },
            dialog: function(t, e, n, o) {
                return this.setup({
                    type: e,
                    message: t,
                    onOkay: n,
                    onCancel: o
                })
            },
            log: function(t, e, n) {
                var o = document.querySelectorAll(".alertify-logs > div");
                if (o) {
                    var i = o.length - this.maxLogItems;
                    if (i >= 0)
                        for (var r = 0, a = i + 1; a > r; r++)
                            this.close(o[r], -1)
                }
                this.notify(t, e, n)
            },
            setLogPosition: function(t) {
                this.logContainerClass = "alertify-logs " + t
            },
            setupLogContainer: function() {
                var t = document.querySelector(".alertify-logs")
                  , e = this.logContainerClass;
                return t || ((t = document.createElement("div")).className = e,
                this.parent.appendChild(t)),
                t.className !== e && (t.className = e),
                t
            },
            notify: function(e, n, o) {
                var i = this.setupLogContainer()
                  , r = document.createElement("div");
                r.className = n || "default",
                t.logTemplateMethod ? r.innerHTML = t.logTemplateMethod(e) : r.innerHTML = e,
                "function" == typeof o && r.addEventListener("click", o),
                i.appendChild(r),
                setTimeout((function() {
                    r.className += " show"
                }
                ), 10),
                this.close(r, this.delay)
            },
            setup: function(t) {
                function n(n) {
                    "function" != typeof n && (n = function() {}
                    ),
                    r && r.addEventListener("click", (function(i) {
                        t.onOkay && "function" == typeof t.onOkay && (l ? t.onOkay(l.value, i) : t.onOkay(i)),
                        n(l ? {
                            buttonClicked: "ok",
                            inputValue: l.value,
                            event: i
                        } : {
                            buttonClicked: "ok",
                            event: i
                        }),
                        e(o)
                    }
                    )),
                    a && a.addEventListener("click", (function(i) {
                        t.onCancel && "function" == typeof t.onCancel && t.onCancel(i),
                        n({
                            buttonClicked: "cancel",
                            event: i
                        }),
                        e(o)
                    }
                    )),
                    l && l.addEventListener("keyup", (function(t) {
                        13 === t.which && r.click()
                    }
                    ))
                }
                var o = document.createElement("div");
                o.className = "alertify hide",
                o.innerHTML = this.build(t);
                var i, r = o.querySelector(".ok"), a = o.querySelector(".cancel"), l = o.querySelector("input"), s = o.querySelector("label");
                return l && ("string" == typeof this.promptPlaceholder && (s ? s.textContent = this.promptPlaceholder : l.placeholder = this.promptPlaceholder),
                "string" == typeof this.promptValue && (l.value = this.promptValue)),
                "function" == typeof Promise ? i = new Promise(n) : n(),
                this.parent.appendChild(o),
                setTimeout((function() {
                    o.classList.remove("hide"),
                    l && t.type && "prompt" === t.type ? (l.select(),
                    l.focus()) : r && r.focus()
                }
                ), 100),
                i
            },
            okBtn: function(t) {
                return this.okLabel = t,
                this
            },
            setDelay: function(t) {
                return t = t || 0,
                this.delay = isNaN(t) ? this.defaultDelay : parseInt(t, 10),
                this
            },
            cancelBtn: function(t) {
                return this.cancelLabel = t,
                this
            },
            setMaxLogItems: function(t) {
                this.maxLogItems = parseInt(t || this.defaultMaxLogItems)
            },
            theme: function(t) {
                switch (t.toLowerCase()) {
                case "bootstrap":
                    this.dialogs.buttons.ok = "<button class='ok btn btn-primary' tabindex='1'>{{ok}}</button>",
                    this.dialogs.buttons.cancel = "<button class='cancel btn btn-default' tabindex='2'>{{cancel}}</button>",
                    this.dialogs.input = "<input type='text' class='form-control'>";
                    break;
                case "purecss":
                    this.dialogs.buttons.ok = "<button class='ok pure-button' tabindex='1'>{{ok}}</button>",
                    this.dialogs.buttons.cancel = "<button class='cancel pure-button' tabindex='2'>{{cancel}}</button>";
                    break;
                case "mdl":
                case "material-design-light":
                    this.dialogs.buttons.ok = "<button class='ok mdl-button mdl-js-button mdl-js-ripple-effect'  tabindex='1'>{{ok}}</button>",
                    this.dialogs.buttons.cancel = "<button class='cancel mdl-button mdl-js-button mdl-js-ripple-effect' tabindex='2'>{{cancel}}</button>",
                    this.dialogs.input = "<div class='mdl-textfield mdl-js-textfield'><input class='mdl-textfield__input'><label class='md-textfield__label'></label></div>";
                    break;
                case "angular-material":
                    this.dialogs.buttons.ok = "<button class='ok md-primary md-button' tabindex='1'>{{ok}}</button>",
                    this.dialogs.buttons.cancel = "<button class='cancel md-button' tabindex='2'>{{cancel}}</button>",
                    this.dialogs.input = "<div layout='column'><md-input-container md-no-float><input type='text'></md-input-container></div>";
                    break;
                default:
                    this.dialogs.buttons.ok = this.defaultDialogs.buttons.ok,
                    this.dialogs.buttons.cancel = this.defaultDialogs.buttons.cancel,
                    this.dialogs.input = this.defaultDialogs.input
                }
            },
            reset: function() {
                this.parent = document.body,
                this.theme("default"),
                this.okBtn(this.defaultOkLabel),
                this.cancelBtn(this.defaultCancelLabel),
                this.setMaxLogItems(),
                this.promptValue = "",
                this.promptPlaceholder = "",
                this.delay = this.defaultDelay,
                this.setCloseLogOnClick(this.closeLogOnClickDefault),
                this.setLogPosition("bottom left"),
                this.logTemplateMethod = null
            },
            injectCSS: function() {
                if (!document.querySelector("#alertifyCSS")) {
                    var t = document.getElementsByTagName("head")[0]
                      , e = document.createElement("style");
                    e.type = "text/css",
                    e.id = "alertifyCSS",
                    e.innerHTML = ".alertify-logs>*{padding:12px 24px;color:#fff;box-shadow:0 2px 5px 0 rgba(0,0,0,.2);border-radius:1px}.alertify-logs>*,.alertify-logs>.default{background:rgba(0,0,0,.8)}.alertify-logs>.error{background:rgba(244,67,54,.8)}.alertify-logs>.success{background:rgba(76,175,80,.9)}.alertify{position:fixed;background-color:rgba(0,0,0,.3);left:0;right:0;top:0;bottom:0;width:100%;height:100%;z-index:1}.alertify.hide{opacity:0;pointer-events:none}.alertify,.alertify.show{box-sizing:border-box;transition:all .33s cubic-bezier(.25,.8,.25,1)}.alertify,.alertify *{box-sizing:border-box}.alertify .dialog{padding:12px}.alertify .alert,.alertify .dialog{width:100%;margin:0 auto;position:relative;top:50%;transform:translateY(-50%)}.alertify .alert>*,.alertify .dialog>*{width:400px;max-width:95%;margin:0 auto;text-align:center;padding:12px;background:#fff;box-shadow:0 2px 4px -1px rgba(0,0,0,.14),0 4px 5px 0 rgba(0,0,0,.098),0 1px 10px 0 rgba(0,0,0,.084)}.alertify .alert .msg,.alertify .dialog .msg{padding:12px;margin-bottom:12px;margin:0;text-align:left}.alertify .alert input:not(.form-control),.alertify .dialog input:not(.form-control){margin-bottom:15px;width:100%;font-size:100%;padding:12px}.alertify .alert input:not(.form-control):focus,.alertify .dialog input:not(.form-control):focus{outline-offset:-2px}.alertify .alert nav,.alertify .dialog nav{text-align:right}.alertify .alert nav button:not(.btn):not(.pure-button):not(.md-button):not(.mdl-button),.alertify .dialog nav button:not(.btn):not(.pure-button):not(.md-button):not(.mdl-button){background:transparent;box-sizing:border-box;color:rgba(0,0,0,.87);position:relative;outline:0;border:0;display:inline-block;-ms-flex-align:center;-ms-grid-row-align:center;align-items:center;padding:0 6px;margin:6px 8px;line-height:36px;min-height:36px;white-space:nowrap;min-width:88px;text-align:center;text-transform:uppercase;font-size:14px;text-decoration:none;cursor:pointer;border:1px solid transparent;border-radius:2px}.alertify .alert nav button:not(.btn):not(.pure-button):not(.md-button):not(.mdl-button):active,.alertify .alert nav button:not(.btn):not(.pure-button):not(.md-button):not(.mdl-button):hover,.alertify .dialog nav button:not(.btn):not(.pure-button):not(.md-button):not(.mdl-button):active,.alertify .dialog nav button:not(.btn):not(.pure-button):not(.md-button):not(.mdl-button):hover{background-color:rgba(0,0,0,.05)}.alertify .alert nav button:not(.btn):not(.pure-button):not(.md-button):not(.mdl-button):focus,.alertify .dialog nav button:not(.btn):not(.pure-button):not(.md-button):not(.mdl-button):focus{border:1px solid rgba(0,0,0,.1)}.alertify .alert nav button.btn,.alertify .dialog nav button.btn{margin:6px 4px}.alertify-logs{position:fixed;z-index:1}.alertify-logs.bottom,.alertify-logs:not(.top){bottom:16px}.alertify-logs.left,.alertify-logs:not(.right){left:16px}.alertify-logs.left>*,.alertify-logs:not(.right)>*{float:left;transform:translateZ(0);height:auto}.alertify-logs.left>.show,.alertify-logs:not(.right)>.show{left:0}.alertify-logs.left>*,.alertify-logs.left>.hide,.alertify-logs:not(.right)>*,.alertify-logs:not(.right)>.hide{left:-110%}.alertify-logs.right{right:16px}.alertify-logs.right>*{float:right;transform:translateZ(0)}.alertify-logs.right>.show{right:0;opacity:1}.alertify-logs.right>*,.alertify-logs.right>.hide{right:-110%;opacity:0}.alertify-logs.top{top:0}.alertify-logs>*{box-sizing:border-box;transition:all .4s cubic-bezier(.25,.8,.25,1);position:relative;clear:both;backface-visibility:hidden;perspective:1000;max-height:0;margin:0;padding:0;overflow:hidden;opacity:0;pointer-events:none}.alertify-logs>.show{margin-top:12px;opacity:1;max-height:1000px;padding:12px;pointer-events:auto}",
                    t.insertBefore(e, t.firstChild)
                }
            },
            removeCSS: function() {
                var t = document.querySelector("#alertifyCSS");
                t && t.parentNode && t.parentNode.removeChild(t)
            }
        };
        return t.injectCSS(),
        {
            _$$alertify: t,
            parent: function(e) {
                t.parent = e
            },
            reset: function() {
                return t.reset(),
                this
            },
            alert: function(e, n, o) {
                return t.dialog(e, "alert", n, o) || this
            },
            confirm: function(e, n, o) {
                return t.dialog(e, "confirm", n, o) || this
            },
            prompt: function(e, n, o) {
                return t.dialog(e, "prompt", n, o) || this
            },
            log: function(e, n) {
                return t.log(e, "default", n),
                this
            },
            theme: function(e) {
                return t.theme(e),
                this
            },
            success: function(e, n) {
                return t.log(e, "success", n),
                this
            },
            error: function(e, n) {
                return t.log(e, "error", n),
                this
            },
            cancelBtn: function(e) {
                return t.cancelBtn(e),
                this
            },
            okBtn: function(e) {
                return t.okBtn(e),
                this
            },
            delay: function(e) {
                return t.setDelay(e),
                this
            },
            placeholder: function(e) {
                return t.promptPlaceholder = e,
                this
            },
            defaultValue: function(e) {
                return t.promptValue = e,
                this
            },
            maxLogItems: function(e) {
                return t.setMaxLogItems(e),
                this
            },
            closeLogOnClick: function(e) {
                return t.setCloseLogOnClick(!!e),
                this
            },
            logPosition: function(e) {
                return t.setLogPosition(e || ""),
                this
            },
            setLogTemplate: function(e) {
                return t.logTemplateMethod = e,
                this
            },
            clearLogs: function() {
                return t.setupLogContainer().innerHTML = "",
                this
            },
            version: t.version
        }
    }
    var e = function(t) {
        if (t) {
            var e = function() {
                t && t.parentNode && t.parentNode.removeChild(t)
            };
            t.classList.remove("show"),
            t.classList.add("hide"),
            t.addEventListener("transitionend", e),
            setTimeout(e, 500)
        }
    };
    if ("undefined" != typeof module && module && module.exports) {
        module.exports = function() {
            return new t
        }
        ;
        var n = new t;
        for (var o in n)
            module.exports[o] = n[o]
    } else
        "function" == typeof define && define.amd ? define((function() {
            return new t
        }
        )) : window.alertify = new t
}();
var url = ""
  , api = ""
  , token = document.querySelector("#token").getAttribute("value")
  , isLoggedIn = !1
  , isVIP = !1
  , userId = !1
  , lockAPI = {};
try {
    url = window.location.origin
} catch (t) {
    try {
        url = window.location.protocol + "//" + window.location.host
    } catch (t) {
        url = window.location.href.split("/")[0] + "//" + window.location.host
    }
}
api = url + "/api/";
try {
    if (userId = document.querySelector("#user-id").value) {
        isLoggedIn = !0;
        try {
            document.querySelector("#user-vip").value && (isVIP = !0)
        } catch (t) {}
    }
} catch (t) {}
for (var _GLOBAL = {
    _URL: url,
    _API: api,
    _IS_VIP: isVIP,
    _IS_LOGGED_IN: isLoggedIn,
    _USER_ID: userId,
    _TOKEN: token
}, imgDefer = document.getElementsByTagName("img"), i = 0; i < imgDefer.length; i++)
    loadImage(imgDefer[i]);
function loadImage(t) {
    if (t.getAttribute("data-src")) {
        if (t.setAttribute("src", t.getAttribute("data-src")),
        t.getAttribute("data-id"))
            return;
        t.onload = function() {
            t.classList.add("loaded")
        }
    }
}
function sendAjax(t, e, n) {
    var o = new XMLHttpRequest;
    return o.open(t, e),
    o.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
    o.setRequestHeader("Content-Type", "application/json"),
    "GET" != t && o.setRequestHeader("X-CSRF-TOKEN", _GLOBAL._TOKEN),
    o.withCredentials = !0,
    n ? o.send(JSON.stringify(n)) : o.send(),
    o
}
function uploadFiles(t, e, n) {
    var o = new XMLHttpRequest;
    return o.upload.addEventListener("progress", (function(t) {
        console.log(t.loaded),
        console.log(t.total)
    }
    )),
    o.open(t, e),
    o.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
    o.setRequestHeader("X-CSRF-TOKEN", _GLOBAL._TOKEN),
    o.withCredentials = !0,
    o.send(n),
    o
}
function getElement(t) {
    return document.querySelector(t)
}
function getAllElements(t) {
    return document.querySelectorAll(t)
}
function createElement(t, e, n, o, i) {
    var r = document.createElement(e);
    if (r.className = n,
    r.identity = t,
    o || (o = {}),
    i)
        for (var a = 0; a < i.length; a++)
            r.setAttribute(i[a].identity, i[a].value);
    if (o.innerHTML && (r.innerHTML = o.innerHTML),
    o.children)
        for (a = 0; a < o.children.length; a++) {
            var l = createElement(o.children[a].identity, o.children[a].tag, o.children[a].className, o.children[a].options, o.children[a].properties);
            r.appendChild(l),
            r[o.children[a].identity] = l
        }
    return r
}
function createElementByJs(t, e, n, o, i) {
    var r = document.createElement(e);
    if (r.className = n,
    r.identity = t,
    o || (o = {}),
    i)
        for (var a = 0; a < i.length; a++)
            r.setAttribute(i[a].identity, i[a].value);
    if (o.innerHTML && (r.innerHTML = o.innerHTML),
    o.children)
        for (a = 0; a < o.children.length; a++) {
            var l = createElementByJs(o.children[a].identity, o.children[a].tag, o.children[a].className, o.children[a].options, o.children[a].properties);
            r.appendChild(l),
            r[o.children[a].identity] = l
        }
    return r
}
function removeElement(t) {
    try {
        t.parentNode.removeChild(t)
    } catch (t) {}
}
function formatNumber(t) {
    return t.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
}
function getTimeAgo(t) {
    var e = t.substring(0, 10);
    if (ismobile.apple.device) {
        var n = (t = t.substring(0, 19).replace("T", " ")).split(/[- :]/);
        t = new Date(n[0],n[1] - 1,n[2],n[3],n[4],n[5]),
        t = new Date(t).getTime()
    } else
        t = new Date(t).getTime();
    var o = ((new Date).getTime() - t) / 1e3;
    return o > 2592e3 ? (e = e.split("-"))[2] + "-" + e[1] + "-" + e[0] : o > 604800 ? Math.floor(o / 604800) + " tuần trước" : o > 86400 ? Math.floor(o / 86400) + " ngày trước" : o > 3600 ? Math.floor(o / 3600) + " giờ trước" : o > 60 ? Math.floor(o / 60) + " phút trước" : Math.floor(o) + " giây trước"
}
function getPageYOffset() {
    try {
        return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
    } catch (t) {
        return 0
    }
}
function getScrollPageType() {
    try {
        return document.body.scrollTop > 0 ? 1 : 2
    } catch (t) {}
    return 0
}
function scrollTo(t, e, n) {
    if (!(n <= 0)) {
        var o = (e - t.scrollTop) / n * 10;
        setTimeout((function() {
            t.scrollTop = t.scrollTop + o,
            t.scrollTop != e && scrollTo(t, e, n - 10)
        }
        ), 10)
    }
}
function scrollPageTo(t, e) {
    try {
        return void (document.body.scrollTop > 0 ? scrollTo(document.body, t, e) : scrollTo(document.documentElement, t, e))
    } catch (t) {}
    window.scrollTo(0, t)
}
function redirect(t) {
    window.location.href = t
}
function validURL(t) {
    t = t.replace(" ", "%20");
    return !!/^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/.test(t)
}
function encodeString(t, e) {
    var n = "";
    t.toString();
    for (var o = 0; o < t.length; o++) {
        var i = t.charCodeAt(o) ^ e;
        n += String.fromCharCode(i)
    }
    return n
}
function getSponsor(t, e) {
    if (t.length && !ismobile.tv)
        for (var n = 0; n < t.length; n++)
            t[n].status && setSponsor(t[n], e)
}
function setSponsor(t, e) {
    t.status && ("img" != t.type ? "file" != t.type ? "iframe" != t.type ? "ins" != t.type ? setSponsorCode(t, e) : setSponsorIns(t, e) : setSponsorIframe(t, e) : setSponsorFile(t, e) : setSponsorImg(t, e))
}
function setSponsorImg(t, e) {
    var n = document.createElement("div");
    if (n.className = "ff-banner banner-" + e,
    t.class && (n.className += " " + t.class),
    n.innerHTML = '<a href="' + t.link + '" target="_blank"><img src="' + t.img + '"></a>',
    t.margin && (n.style.margin = t.margin),
    t.width && (n.style.width = t.width),
    t.height && (n.style.height = t.height),
    t.button) {
        var o = document.createElement("div");
        o.className = "banner-close banner-" + e + "-close",
        o.innerHTML += '<i class="icon-close fa fa-times"></i>',
        o.onclick = function() {
            n.classList.add("hidden")
        }
        ,
        n.appendChild(o)
    }
    if (appendSponsor(n, e),
    "catfish" == e) {
        var i = getAllElements(".banner-catfish");
        i.length > 1 && (i[0].style.bottom = "50px")
    }
}
function setSponsorFile(t, e) {
    var n = document.createElement("script");
    n.setAttribute("src", t.link),
    t.id && n.setAttribute("id", t.id),
    t.async && n.setAttribute("async", ""),
    appendSponsor(n, e)
}
function setSponsorIns(t, e) {
    var n = document.createElement("div");
    n.className = "ff-banner banner-" + e,
    t.class && (n.className += " " + t.class);
    var o = document.createElement("ins");
    n.appendChild(o),
    t.id && o.setAttribute("data-revive-id", t.id),
    t.zoneid && o.setAttribute("data-revive-zoneid", t.zoneid);
    var i = document.createElement("script");
    if (i.setAttribute("src", t.link),
    t.async && i.setAttribute("async", ""),
    t.width && (n.style.width = t.width,
    n.style.height = t.height),
    t.button) {
        var r = document.createElement("div");
        r.className = "banner-close banner-" + e + "-close",
        r.innerHTML += '<i class="icon-close fa fa-times"></i>',
        r.onclick = function() {
            n.classList.add("hidden")
        }
        ,
        n.appendChild(r)
    }
    appendSponsor(n, e),
    n.appendChild(i)
}
function setSponsorIframe(t, e) {
    var n = document.createElement("div");
    n.className = "ff-banner banner-" + e,
    t.class && (n.className += " " + t.class);
    var o = document.createElement("iframe");
    if (o.setAttribute("src", t.link),
    o.scrolling = "no",
    o.frameBorder = 0,
    o.allow = "autoplay",
    o.style = "overflow: hidden; border:none; outline:none;",
    n.appendChild(o),
    t.width && (n.style.width = t.width,
    n.style.height = t.height,
    o.style.width = t.width,
    o.style.height = t.height),
    t.id && n.setAttribute("id", t.id),
    t.margin && (n.style.margin = t.margin),
    t.button) {
        var i = document.createElement("div");
        i.className = "banner-close banner-" + e + "-close",
        i.innerHTML += '<i class="icon-close fa fa-times"></i>',
        i.onclick = function() {
            n.classList.add("hidden")
        }
        ,
        n.appendChild(i)
    }
    appendSponsor(n, e)
}
function setSponsorCode(t, e) {
    var n = document.createElement("div");
    n.className = "ff-banner banner-" + e,
    t.class && (n.className += " " + t.class);
    var o = document.createElement("iframe");
    o.scrolling = "no",
    o.frameBorder = 0,
    o.allow = "autoplay",
    o.style = "overflow: hidden; border:none; outline:none;";
    var i = "<!DOCTYPE html>";
    if (i += "<html>",
    i += '<head><base target="_top"><meta charset="UTF-8"></head>',
    i += '<body border="0" margin="0" style="margin: 0;padding: 0;">',
    i += t.code,
    i += "<body>",
    i += "</html>",
    o.onload = function() {
        if ("srcdoc"in o)
            o.srcdoc = i;
        else {
            var t = o.contentDocument || o.contentWindow.document;
            t.open(),
            t.write(i),
            t.close()
        }
    }
    ,
    n.appendChild(o),
    t.width && (n.style.width = t.width,
    n.style.height = t.height,
    o.style.width = t.width,
    o.style.height = t.height),
    t.id && n.setAttribute("id", t.id),
    t.margin && (n.style.margin = t.margin),
    t.button) {
        var r = document.createElement("div");
        r.className = "banner-close banner-" + e + "-close",
        r.innerHTML += '<i class="icon-close fa fa-times"></i>',
        r.onclick = function() {
            n.classList.add("hidden")
        }
        ,
        n.appendChild(r)
    }
    appendSponsor(n, e)
}
function appendSponsor(t, e) {
    var n = getElement("#sponsor-" + e);
    n.appendChild(t),
    n.classList.remove("hidden")
}
"dark" === localStorage.theme || !("theme"in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark");
var searchInput = document.querySelector("#search-box")
  , searchIcon = document.querySelector(".navbar-search svg");
function search() {
    searchInput.value.length && (window.location.href = "/tim-kiem/" + slugify(searchInput.value))
}
function slugify(t) {
    return t.toString().toLowerCase().replace(/\s+/g, "-").replace(/\-\-+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
}
searchInput.onkeydown = function(t) {
    13 == t.which && search()
}
,
searchIcon.onclick = function() {
    search()
}
;
var navbar = getElement(".navbar")
  , navbarLeft = getElement(".navbar-left")
  , navbarMenu = getElement(".navbar-menu")
  , navbarToggle = getElement(".navbar-toggle")
  , navbarClose = getElement(".navbar-close")
  , navbarAvatar = getElement(".navbar-avatar")
  , userAction = getElement(".navbar-user-action")
  , userTheme = getElement(".user-theme")
  , logo = getElement("#logo")
  , floatingAction = getElement(".floating-action")
  , actionToggle = getElement(".action-toggle")
  , actionHome = getElement(".action-home")
  , actionMenu = getElement(".action-menu")
  , actionUser = getElement(".action-user")
  , actionTop = getElement(".action-top")
  , lastScrollTop = 0;
function hideFloatingAction() {
    window.innerWidth >= 1024 || (window.innerHeight > window.innerWidth || getPageYOffset() > 100 ? floatingAction.classList.remove("hidden") : floatingAction.classList.add("hidden"))
}
function activeUserAction() {
    navbar.classList.remove("active-menu"),
    navbar.classList.add("active-user-menu")
}
function activeMenu() {
    navbar.classList.add("active-menu"),
    navbar.classList.remove("active-user-menu")
}
navbarAvatar.onclick = function() {
    activeUserAction(),
    userAction.classList.toggle("hidden")
}
,
userTheme.onclick = function() {
    document.documentElement.classList.contains("dark") ? (document.documentElement.classList.remove("dark"),
    localStorage.theme = "light") : (document.documentElement.classList.add("dark"),
    localStorage.theme = "dark")
}
,
navbarToggle.onclick = function() {
    if (navbarLeft.classList.contains("h-full"))
        return navbarLeft.classList.remove("h-full"),
        void navbarLeft.classList.add("shadow-none");
    navbarLeft.classList.add("h-full"),
    navbarLeft.classList.remove("shadow-none")
}
,
window.addEventListener("click", (function(t) {
    navbarAvatar.contains(t.target) || userAction.contains(t.target) || (userAction.classList.add("hidden"),
    navbar.classList.remove("active-user-menu"))
}
)),
window.addEventListener("click", (function(t) {
    navbarToggle.contains(t.target) || navbarMenu.contains(t.target) || (navbar.classList.remove("active-menu"),
    navbarLeft.classList.remove("h-full"),
    navbarLeft.classList.add("shadow-none"))
}
));
var container = getElement("#container")
  , chapterList = getElement(".chapter-list")
  , mangaLike = getElement(".manga-like")
  , mangaFollow = getElement(".manga-follow")
  , chapterMore = getElement(".chapter-more")
  , chapterItems = getAllElements(".chapter-item")
  , manga = {
    id: container.getAttribute("data-id"),
    name: container.getAttribute("data-name"),
    slug: container.getAttribute("data-slug"),
    total: container.getAttribute("data-total")
}
  , lock = {
    chapters: !1
};
function increaseViews() {
    sendAjax("POST", "/api/mangas/" + manga.id + "/views")
}
function addHistory() {
    if (_GLOBAL._IS_LOGGED_IN)
        sendAjax("POST", "/api/mangas/" + manga.id + "/histories")
}
function loadMore() {
    if (manga.total && !lock.chapters)
        if (lock.chapters = !0,
        chapterItems = getAllElements(".chapter-item"),
        manga.total <= chapterItems.length)
            chapterMore.classList.add("hidden");
        else {
            var t = sendAjax("GET", "/api/mangas/" + manga.id + "/chapters?offset=" + chapterItems.length + "&limit=100");
            t.onload = function() {
                if (200 == t.status) {
                    for (var e = JSON.parse(t.responseText), n = 0; n < e.chapters.length; n++) {
                        var o = e.chapters[n].title ? e.chapters[n].title : ""
                          , i = createElement("item" + e.chapters[n].id, "div", "w-full flex gap-2 justify-between border-b dark:border-slate-600 mb-2 pb-2 chapter-item", {
                            children: [{
                                identity: "itemName",
                                tag: "span",
                                className: "grow min-w-[120px] chapter-name",
                                options: {
                                    innerHTML: '<a href="/' + manga.slug + "/" + e.chapters[n].slug + '">Chapter ' + e.chapters[n].name + " " + o + "</a>"
                                }
                            }, {
                                identity: "itemUpdate",
                                tag: "span",
                                className: "shrink text-right chapter-udpate",
                                options: {
                                    innerHTML: getTimeAgo(e.chapters[n].created_at)
                                }
                            }, {
                                identity: "itemViews",
                                tag: "span",
                                className: "min-w-[80px] shrink-0 text-right chapter-views",
                                options: {
                                    innerHTML: formatNumber(e.chapters[n].views)
                                }
                            }]
                        });
                        chapterList.appendChild(i)
                    }
                    return chapterList.scrollTop = chapterItems[chapterItems.length - 1].offsetTop,
                    (chapterItems = getAllElements(".chapter-item")).length >= e.total && chapterMore.classList.add("hidden"),
                    e.chapters.length && !ismobile.any && Ps.update(chapterList),
                    void (lock.chapters = !1)
                }
                lock.chapters = !1,
                alertify.error("Bị lỗi, vui lòng thử lại")
            }
            ,
            t.onerror = function() {
                lock.chapters = !1,
                alertify.error("Bị lỗi, vui lòng thử lại")
            }
        }
}
mangaLike.onclick = function() {
    if (_GLOBAL._IS_LOGGED_IN) {
        var t = sendAjax("POST", "/api/mangas/" + manga.id + "/likers");
        t.onload = function() {
            if (200 != t.status)
                alertify.error("Lỗi!");
            else {
                var e = JSON.parse(t.responseText);
                mangaLike.querySelector("span").innerText = e.total
            }
        }
        ,
        t.onerror = function() {
            alertify.error("Lỗi!")
        }
    } else
        alertify.confirm("Chức năng này cần đăng nhập", (function() {
            window.location.href = "/dang-nhap"
        }
        ))
}
,
mangaFollow.onclick = function() {
    if (_GLOBAL._IS_LOGGED_IN) {
        var t = sendAjax("POST", "/api/mangas/" + manga.id + "/followers");
        t.onload = function() {
            if (200 != t.status)
                alertify.error("Lỗi!");
            else {
                var e = JSON.parse(t.responseText);
                mangaFollow.querySelector("span").innerText = e.total
            }
        }
        ,
        t.onerror = function() {
            alertify.error("Lỗi!")
        }
    } else
        alertify.confirm("Chức năng này cần đăng nhập", (function() {
            window.location.href = "/dang-nhap"
        }
        ))
}
,
chapterMore && (chapterMore.onclick = function() {
    loadMore()
}
),
increaseViews(),
addHistory(),
manga.total > chapterItems.length && chapterMore.classList.remove("hidden"),
chapterList && !ismobile.any && Ps.initialize(chapterList, {
    minScrollbarLength: 50,
    maxScrollbarLength: 50
}),
window.addEventListener("resize", (function() {
    chapterList && !ismobile.any && (Ps.destroy(chapterList),
    Ps.initialize(chapterList, {
        minScrollbarLength: 50,
        maxScrollbarLength: 50
    }))
}
));
