! function(t) {
    function e(r) { if (n[r]) return n[r].exports; var i = n[r] = { i: r, l: !1, exports: {} }; return t[r].call(i.exports, i, i.exports, e), i.l = !0, i.exports }
    var n = {};
    e.m = t, e.c = n, e.i = function(t) { return t }, e.d = function(t, n, r) { e.o(t, n) || Object.defineProperty(t, n, { configurable: !1, enumerable: !0, get: r }) }, e.n = function(t) { var n = t && t.__esModule ? function() { return t.default } : function() { return t }; return e.d(n, "a", n), n }, e.o = function(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, e.p = "", e(e.s = 11)
}([function(t, e, n) {
    "use strict";
    var r = function(t) { var e = document.createElement("a"); return e.className = "header-link", e.href = "#" + t, e.innerHTML = '  <svg class="fill-current hover-accent-color-light" height="22px" viewBox="0 0 24 24" width="22px" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"/><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/></svg>', e },
        i = function(t, e) {
            for (var n = e.getElementsByTagName("h" + t), i = 0; i < n.length; i++) {
                var o = n[i];
                void 0 !== o.id && "" !== o.id && o.appendChild(r(o.id))
            }
        };
    document.onreadystatechange = function() { if ("complete" === this.readyState) { var t = document.getElementsByClassName("prose")[0]; if (!t) return; for (var e = 2; e <= 4; e++) i(e, t) } }
}, function(t, e, n) {
    "use strict";

    function r(t, e) { t.setAttribute("class", "copied bg-primary-color-dark f6 absolute top-0 right-0 lh-solid hover-bg-primary-color-dark bn white ph3 pv2"), t.setAttribute("aria-label", e) }

    function i(t, e) { var n = "cut" === e ? "X" : "C"; return isMac ? "Press ⌘-" + n : "Press Ctrl-" + n }
    new(n(12))(".copy", { target: function(t) { return t.classList.contains("copy-toggle") ? t.previousElementSibling : t.nextElementSibling } }).on("success", function(t) { r(t.trigger, "Copied!"), t.clearSelection() }).on("error", function(t) { r(t.trigger, i(t.action)) })
}, function(t, e, n) {
    "use strict";
    var r = function() {
            function t(t, e) {
                var n = [],
                    r = !0,
                    i = !1,
                    o = void 0;
                try { for (var s, a = t[Symbol.iterator](); !(r = (s = a.next()).done) && (n.push(s.value), !e || n.length !== e); r = !0); } catch (t) { i = !0, o = t } finally { try {!r && a.return && a.return() } finally { if (i) throw o } }
                return n
            }
            return function(e, n) { if (Array.isArray(e)) return e; if (Symbol.iterator in Object(e)) return t(e, n); throw new TypeError("Invalid attempt to destructure non-iterable instance") }
        }(),
        i = document.getElementById("prose");
    if (i) {
        var o = i.getElementsByTagName("code"),
            s = !0,
            a = !1,
            u = void 0;
        try {
            for (var c, l = Object.entries(o)[Symbol.iterator](); !(s = (c = l.next()).done); s = !0) {
                var h = c.value,
                    f = r(h, 2),
                    p = (f[0], f[1]);
                p.scrollWidth - p.clientWidth > 0 && p.parentNode.classList.add("expand")
            }
        } catch (t) { a = !0, u = t } finally { try {!s && l.return && l.return() } finally { if (a) throw u } }
    }
}, function(t, e, n) {
    "use strict";
    n(13)({ apiKey: "167e7998590aebda7f9fedcf86bc4a55", indexName: "hugodocs", inputSelector: "#search-input", debug: !0 })
}, function(t, e, n) {
    "use strict";
    n(14), n(15)
}, function(t, e, n) {
    "use strict";

    function r() {
        for (var t = this.dataset.target.split(" "), e = document.querySelector(".mobilemenu:not(.dn)"), n = document.querySelector(".desktopmenu:not(.dn)"), r = document.querySelector(".desktopmenu:not(.dn)"), i = 0; i < t.length; i++) {
            var o = document.querySelectorAll(t[i]);
            [].forEach.call(o, function(t) { return t.classList.contains("dn") ? t.classList.remove("dn") : t.classList.add("dn"), !1 }), e && e.classList.add("dn"), n && n.classList.add("dn"), r && r.classList.remove("db")
        }
    }
    for (var i = document.getElementsByClassName("js-toggle"), o = 0; o < i.length; o++) i[o].addEventListener("click", r, !1)
}, function(t, e, n) {
    "use strict";
    document.documentElement.className = document.documentElement.className.replace(/\bno-js\b/, "js")
}, function(t, e, n) {
    "use strict";
    n(16)
}, function(t, e, n) {
    "use strict";
    ! function() {
        if ("querySelector" in document && "addEventListener" in window && Array.prototype.forEach) {
            var t = function(t, e) {
                    var n, r = window.pageYOffset,
                        i = t.offsetTop,
                        o = i - r,
                        s = o / (e / 16),
                        a = function() { window.scrollBy(0, s), n() };
                    n = s >= 0 ? function() {
                        var t = window.pageYOffset;
                        (t >= i - s || window.innerHeight + t >= document.body.offsetHeight) && clearInterval(u)
                    } : function() { window.pageYOffset <= (i || 0) && clearInterval(u) };
                    var u = setInterval(a, 16)
                },
                e = document.querySelectorAll("#TableOfContents ul li a");
            [].forEach.call(e, function(e) {
                e.addEventListener("click", function(n) {
                    n.preventDefault();
                    var r = e.getAttribute("href"),
                        i = document.querySelector(r),
                        o = e.getAttribute("data-speed");
                    i && t(i, o || 500)
                }, !1)
            })
        }
    }()
}, function(t, e, n) {
    "use strict";

    function r(t) {
        if (t.target) {
            t.preventDefault();
            var e = t.currentTarget,
                n = e.getAttribute("data-toggle-tab")
        } else var n = t;
        window.localStorage && window.localStorage.setItem("configLangPref", n);
        for (var r = document.querySelectorAll("[data-toggle-tab='" + n + "']"), i = document.querySelectorAll("[data-pane='" + n + "']"), a = 0; a < o.length; a++) o[a].classList.remove("active"), s[a].classList.remove("active");
        for (var a = 0; a < r.length; a++) r[a].classList.add("active"), i[a].classList.add("active")
    }
    var i, o = document.querySelectorAll("[data-toggle-tab]"),
        s = document.querySelectorAll("[data-pane]");
    for (i = 0; i < o.length; i++) o[i].addEventListener("click", r);
    window.localStorage.getItem("configLangPref") && r(window.localStorage.getItem("configLangPref"))
}, function(t, e) {}, function(t, e, n) {
    "use strict";
    var r = n(10);
    ! function(t) { t && t.__esModule }(r);
    n(0), n(1), n(2), n(3), n(4), n(5), n(7), n(8), n(9), n(6)
}, function(t, e, n) {
    var r, r;
    /*!
     * clipboard.js v1.7.1
     * https://zenorocha.github.io/clipboard.js
     *
     * Licensed MIT © Zeno Rocha
     */
    ! function(e) { t.exports = e() }(function() {
        var t;
        return function t(e, n, i) {
            function o(a, u) {
                if (!n[a]) {
                    if (!e[a]) { var c = "function" == typeof r && r; if (!u && c) return r(a, !0); if (s) return s(a, !0); var l = new Error("Cannot find module '" + a + "'"); throw l.code = "MODULE_NOT_FOUND", l }
                    var h = n[a] = { exports: {} };
                    e[a][0].call(h.exports, function(t) { var n = e[a][1][t]; return o(n || t) }, h, h.exports, t, e, n, i)
                }
                return n[a].exports
            }
            for (var s = "function" == typeof r && r, a = 0; a < i.length; a++) o(i[a]);
            return o
        }({
            1: [function(t, e, n) {
                function r(t, e) {
                    for (; t && t.nodeType !== i;) {
                        if ("function" == typeof t.matches && t.matches(e)) return t;
                        t = t.parentNode
                    }
                }
                var i = 9;
                if ("undefined" != typeof Element && !Element.prototype.matches) {
                    var o = Element.prototype;
                    o.matches = o.matchesSelector || o.mozMatchesSelector || o.msMatchesSelector || o.oMatchesSelector || o.webkitMatchesSelector
                }
                e.exports = r
            }, {}],
            2: [function(t, e, n) {
                function r(t, e, n, r, o) { var s = i.apply(this, arguments); return t.addEventListener(n, s, o), { destroy: function() { t.removeEventListener(n, s, o) } } }

                function i(t, e, n, r) { return function(n) { n.delegateTarget = o(n.target, e), n.delegateTarget && r.call(t, n) } }
                var o = t("./closest");
                e.exports = r
            }, { "./closest": 1 }],
            3: [function(t, e, n) { n.node = function(t) { return void 0 !== t && t instanceof HTMLElement && 1 === t.nodeType }, n.nodeList = function(t) { var e = Object.prototype.toString.call(t); return void 0 !== t && ("[object NodeList]" === e || "[object HTMLCollection]" === e) && "length" in t && (0 === t.length || n.node(t[0])) }, n.string = function(t) { return "string" == typeof t || t instanceof String }, n.fn = function(t) { return "[object Function]" === Object.prototype.toString.call(t) } }, {}],
            4: [function(t, e, n) {
                function r(t, e, n) { if (!t && !e && !n) throw new Error("Missing required arguments"); if (!a.string(e)) throw new TypeError("Second argument must be a String"); if (!a.fn(n)) throw new TypeError("Third argument must be a Function"); if (a.node(t)) return i(t, e, n); if (a.nodeList(t)) return o(t, e, n); if (a.string(t)) return s(t, e, n); throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList") }

                function i(t, e, n) { return t.addEventListener(e, n), { destroy: function() { t.removeEventListener(e, n) } } }

                function o(t, e, n) { return Array.prototype.forEach.call(t, function(t) { t.addEventListener(e, n) }), { destroy: function() { Array.prototype.forEach.call(t, function(t) { t.removeEventListener(e, n) }) } } }

                function s(t, e, n) { return u(document.body, t, e, n) }
                var a = t("./is"),
                    u = t("delegate");
                e.exports = r
            }, { "./is": 3, delegate: 2 }],
            5: [function(t, e, n) {
                function r(t) {
                    var e;
                    if ("SELECT" === t.nodeName) t.focus(), e = t.value;
                    else if ("INPUT" === t.nodeName || "TEXTAREA" === t.nodeName) {
                        var n = t.hasAttribute("readonly");
                        n || t.setAttribute("readonly", ""), t.select(), t.setSelectionRange(0, t.value.length), n || t.removeAttribute("readonly"), e = t.value
                    } else {
                        t.hasAttribute("contenteditable") && t.focus();
                        var r = window.getSelection(),
                            i = document.createRange();
                        i.selectNodeContents(t), r.removeAllRanges(), r.addRange(i), e = r.toString()
                    }
                    return e
                }
                e.exports = r
            }, {}],
            6: [function(t, e, n) {
                function r() {}
                r.prototype = {
                    on: function(t, e, n) { var r = this.e || (this.e = {}); return (r[t] || (r[t] = [])).push({ fn: e, ctx: n }), this },
                    once: function(t, e, n) {
                        function r() { i.off(t, r), e.apply(n, arguments) }
                        var i = this;
                        return r._ = e, this.on(t, r, n)
                    },
                    emit: function(t) {
                        var e = [].slice.call(arguments, 1),
                            n = ((this.e || (this.e = {}))[t] || []).slice(),
                            r = 0,
                            i = n.length;
                        for (r; r < i; r++) n[r].fn.apply(n[r].ctx, e);
                        return this
                    },
                    off: function(t, e) {
                        var n = this.e || (this.e = {}),
                            r = n[t],
                            i = [];
                        if (r && e)
                            for (var o = 0, s = r.length; o < s; o++) r[o].fn !== e && r[o].fn._ !== e && i.push(r[o]);
                        return i.length ? n[t] = i : delete n[t], this
                    }
                }, e.exports = r
            }, {}],
            7: [function(e, n, r) {
                ! function(i, o) {
                    if ("function" == typeof t && t.amd) t(["module", "select"], o);
                    else if (void 0 !== r) o(n, e("select"));
                    else {
                        var s = { exports: {} };
                        o(s, i.select), i.clipboardAction = s.exports
                    }
                }(this, function(t, e) {
                    "use strict";

                    function n(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }
                    var r = function(t) { return t && t.__esModule ? t : { default: t } }(e),
                        i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t },
                        o = function() {
                            function t(t, e) {
                                for (var n = 0; n < e.length; n++) {
                                    var r = e[n];
                                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                                }
                            }
                            return function(e, n, r) { return n && t(e.prototype, n), r && t(e, r), e }
                        }(),
                        s = function() {
                            function t(e) { n(this, t), this.resolveOptions(e), this.initSelection() }
                            return o(t, [{
                                key: "resolveOptions",
                                value: function() {
                                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                    this.action = t.action, this.container = t.container, this.emitter = t.emitter, this.target = t.target, this.text = t.text, this.trigger = t.trigger, this.selectedText = ""
                                }
                            }, { key: "initSelection", value: function() { this.text ? this.selectFake() : this.target && this.selectTarget() } }, {
                                key: "selectFake",
                                value: function() {
                                    var t = this,
                                        e = "rtl" == document.documentElement.getAttribute("dir");
                                    this.removeFake(), this.fakeHandlerCallback = function() { return t.removeFake() }, this.fakeHandler = this.container.addEventListener("click", this.fakeHandlerCallback) || !0, this.fakeElem = document.createElement("textarea"), this.fakeElem.style.fontSize = "12pt", this.fakeElem.style.border = "0", this.fakeElem.style.padding = "0", this.fakeElem.style.margin = "0", this.fakeElem.style.position = "absolute", this.fakeElem.style[e ? "right" : "left"] = "-9999px";
                                    var n = window.pageYOffset || document.documentElement.scrollTop;
                                    this.fakeElem.style.top = n + "px", this.fakeElem.setAttribute("readonly", ""), this.fakeElem.value = this.text, this.container.appendChild(this.fakeElem), this.selectedText = (0, r.default)(this.fakeElem), this.copyText()
                                }
                            }, { key: "removeFake", value: function() { this.fakeHandler && (this.container.removeEventListener("click", this.fakeHandlerCallback), this.fakeHandler = null, this.fakeHandlerCallback = null), this.fakeElem && (this.container.removeChild(this.fakeElem), this.fakeElem = null) } }, { key: "selectTarget", value: function() { this.selectedText = (0, r.default)(this.target), this.copyText() } }, {
                                key: "copyText",
                                value: function() {
                                    var t = void 0;
                                    try { t = document.execCommand(this.action) } catch (e) { t = !1 }
                                    this.handleResult(t)
                                }
                            }, { key: "handleResult", value: function(t) { this.emitter.emit(t ? "success" : "error", { action: this.action, text: this.selectedText, trigger: this.trigger, clearSelection: this.clearSelection.bind(this) }) } }, { key: "clearSelection", value: function() { this.trigger && this.trigger.focus(), window.getSelection().removeAllRanges() } }, { key: "destroy", value: function() { this.removeFake() } }, { key: "action", set: function() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "copy"; if (this._action = t, "copy" !== this._action && "cut" !== this._action) throw new Error('Invalid "action" value, use either "copy" or "cut"') }, get: function() { return this._action } }, {
                                key: "target",
                                set: function(t) {
                                    if (void 0 !== t) {
                                        if (!t || "object" !== (void 0 === t ? "undefined" : i(t)) || 1 !== t.nodeType) throw new Error('Invalid "target" value, use a valid Element');
                                        if ("copy" === this.action && t.hasAttribute("disabled")) throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                                        if ("cut" === this.action && (t.hasAttribute("readonly") || t.hasAttribute("disabled"))) throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                                        this._target = t
                                    }
                                },
                                get: function() { return this._target }
                            }]), t
                        }();
                    t.exports = s
                })
            }, { select: 5 }],
            8: [function(e, n, r) {
                ! function(i, o) {
                    if ("function" == typeof t && t.amd) t(["module", "./clipboard-action", "tiny-emitter", "good-listener"], o);
                    else if (void 0 !== r) o(n, e("./clipboard-action"), e("tiny-emitter"), e("good-listener"));
                    else {
                        var s = { exports: {} };
                        o(s, i.clipboardAction, i.tinyEmitter, i.goodListener), i.clipboard = s.exports
                    }
                }(this, function(t, e, n, r) {
                    "use strict";

                    function i(t) { return t && t.__esModule ? t : { default: t } }

                    function o(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

                    function s(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }

                    function a(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                        t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    }

                    function u(t, e) { var n = "data-clipboard-" + t; if (e.hasAttribute(n)) return e.getAttribute(n) }
                    var c = i(e),
                        l = i(n),
                        h = i(r),
                        f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t },
                        p = function() {
                            function t(t, e) {
                                for (var n = 0; n < e.length; n++) {
                                    var r = e[n];
                                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                                }
                            }
                            return function(e, n, r) { return n && t(e.prototype, n), r && t(e, r), e }
                        }(),
                        d = function(t) {
                            function e(t, n) { o(this, e); var r = s(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this)); return r.resolveOptions(n), r.listenClick(t), r }
                            return a(e, t), p(e, [{
                                key: "resolveOptions",
                                value: function() {
                                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                    this.action = "function" == typeof t.action ? t.action : this.defaultAction, this.target = "function" == typeof t.target ? t.target : this.defaultTarget, this.text = "function" == typeof t.text ? t.text : this.defaultText, this.container = "object" === f(t.container) ? t.container : document.body
                                }
                            }, {
                                key: "listenClick",
                                value: function(t) {
                                    var e = this;
                                    this.listener = (0, h.default)(t, "click", function(t) { return e.onClick(t) })
                                }
                            }, {
                                key: "onClick",
                                value: function(t) {
                                    var e = t.delegateTarget || t.currentTarget;
                                    this.clipboardAction && (this.clipboardAction = null), this.clipboardAction = new c.default({ action: this.action(e), target: this.target(e), text: this.text(e), container: this.container, trigger: e, emitter: this })
                                }
                            }, { key: "defaultAction", value: function(t) { return u("action", t) } }, { key: "defaultTarget", value: function(t) { var e = u("target", t); if (e) return document.querySelector(e) } }, { key: "defaultText", value: function(t) { return u("text", t) } }, { key: "destroy", value: function() { this.listener.destroy(), this.clipboardAction && (this.clipboardAction.destroy(), this.clipboardAction = null) } }], [{
                                key: "isSupported",
                                value: function() {
                                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ["copy", "cut"],
                                        e = "string" == typeof t ? [t] : t,
                                        n = !!document.queryCommandSupported;
                                    return e.forEach(function(t) { n = n && !!document.queryCommandSupported(t) }), n
                                }
                            }]), e
                        }(l.default);
                    t.exports = d
                })
            }, { "./clipboard-action": 7, "good-listener": 4, "tiny-emitter": 6 }]
        }, {}, [8])(8)
    })
}, function(t, e, n) { /*! docsearch 2.4.1 | © Algolia | github.com/algolia/docsearch */
    ! function(e, n) { t.exports = n() }(0, function() {
        return function(t) {
            function e(r) { if (n[r]) return n[r].exports; var i = n[r] = { i: r, l: !1, exports: {} }; return t[r].call(i.exports, i, i.exports, e), i.l = !0, i.exports }
            var n = {};
            return e.m = t, e.c = n, e.i = function(t) { return t }, e.d = function(t, n, r) { e.o(t, n) || Object.defineProperty(t, n, { configurable: !1, enumerable: !0, get: r }) }, e.n = function(t) { var n = t && t.__esModule ? function() { return t.default } : function() { return t }; return e.d(n, "a", n), n }, e.o = function(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, e.p = "", e(e.s = 46)
        }([function(t, e, n) {
            "use strict";

            function r(t) { return t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&") }
            var i = n(1);
            t.exports = {
                isArray: null,
                isFunction: null,
                isObject: null,
                bind: null,
                each: null,
                map: null,
                mixin: null,
                isMsie: function() { return !!/(msie|trident)/i.test(navigator.userAgent) && navigator.userAgent.match(/(msie |rv:)(\d+(.\d+)?)/i)[2] },
                escapeRegExChars: function(t) { return t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&") },
                isNumber: function(t) { return "number" == typeof t },
                toStr: function(t) { return void 0 === t || null === t ? "" : t + "" },
                cloneDeep: function(t) {
                    var e = this.mixin({}, t),
                        n = this;
                    return this.each(e, function(t, r) { t && (n.isArray(t) ? e[r] = [].concat(t) : n.isObject(t) && (e[r] = n.cloneDeep(t))) }), e
                },
                error: function(t) { throw new Error(t) },
                every: function(t, e) { var n = !0; return t ? (this.each(t, function(r, i) { if (!(n = e.call(null, r, i, t))) return !1 }), !!n) : n },
                any: function(t, e) { var n = !1; return t ? (this.each(t, function(r, i) { if (e.call(null, r, i, t)) return n = !0, !1 }), n) : n },
                getUniqueId: function() { var t = 0; return function() { return t++ } }(),
                templatify: function(t) { if (this.isFunction(t)) return t; var e = i.element(t); return "SCRIPT" === e.prop("tagName") ? function() { return e.text() } : function() { return String(t) } },
                defer: function(t) { setTimeout(t, 0) },
                noop: function() {},
                formatPrefix: function(t, e) { return e ? "" : t + "-" },
                className: function(t, e, n) { return (n ? "" : ".") + t + e },
                escapeHighlightedString: function(t, e, n) {
                    e = e || "<em>";
                    var i = document.createElement("div");
                    i.appendChild(document.createTextNode(e)), n = n || "</em>";
                    var o = document.createElement("div");
                    o.appendChild(document.createTextNode(n));
                    var s = document.createElement("div");
                    return s.appendChild(document.createTextNode(t)), s.innerHTML.replace(RegExp(r(i.innerHTML), "g"), e).replace(RegExp(r(o.innerHTML), "g"), n)
                }
            }
        }, function(t, e, n) {
            "use strict";
            t.exports = { element: null }
        }, function(t, e) {
            var n = Object.prototype.hasOwnProperty,
                r = Object.prototype.toString;
            t.exports = function(t, e, i) {
                if ("[object Function]" !== r.call(e)) throw new TypeError("iterator must be a function");
                var o = t.length;
                if (o === +o)
                    for (var s = 0; s < o; s++) e.call(i, t[s], s, t);
                else
                    for (var a in t) n.call(t, a) && e.call(i, t[a], a, t)
            }
        }, function(t, e) {
            var n;
            n = function() { return this }();
            try { n = n || Function("return this")() || (0, eval)("this") } catch (t) { "object" == typeof window && (n = window) }
            t.exports = n
        }, function(t, e) { t.exports = function(t) { return JSON.parse(JSON.stringify(t)) } }, function(t, e, n) {
            "use strict";

            function r(t, e) {
                var r = n(2),
                    i = this;
                "function" == typeof Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : i.stack = (new Error).stack || "Cannot get a stacktrace, browser is too old", this.name = "AlgoliaSearchError", this.message = t || "Unknown error", e && r(e, function(t, e) { i[e] = t })
            }

            function i(t, e) {
                function n() { var n = Array.prototype.slice.call(arguments, 0); "string" != typeof n[0] && n.unshift(e), r.apply(this, n), this.name = "AlgoliaSearch" + t + "Error" }
                return o(n, r), n
            }
            var o = n(20);
            o(r, Error), t.exports = { AlgoliaSearchError: r, UnparsableJSON: i("UnparsableJSON", "Could not parse the incoming response as JSON, see err.more for details"), RequestTimeout: i("RequestTimeout", "Request timedout before getting a response"), Network: i("Network", "Network issue, see err.more for details"), JSONPScriptFail: i("JSONPScriptFail", "<script> was loaded but did not call our provided callback"), JSONPScriptError: i("JSONPScriptError", "<script> unable to load due to an `error` event on it"), Unknown: i("Unknown", "Unknown error occured") }
        }, function(t, e, n) {
            (function(r) {
                function i() { return "undefined" != typeof document && "WebkitAppearance" in document.documentElement.style || window.console && (console.firebug || console.exception && console.table) || navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 }

                function o() {
                    var t = arguments,
                        n = this.useColors;
                    if (t[0] = (n ? "%c" : "") + this.namespace + (n ? " %c" : " ") + t[0] + (n ? "%c " : " ") + "+" + e.humanize(this.diff), !n) return t;
                    var r = "color: " + this.color;
                    t = [t[0], r, "color: inherit"].concat(Array.prototype.slice.call(t, 1));
                    var i = 0,
                        o = 0;
                    return t[0].replace(/%[a-z%]/g, function(t) { "%%" !== t && (i++, "%c" === t && (o = i)) }), t.splice(o, 0, r), t
                }

                function s() { return "object" == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments) }

                function a(t) { try { null == t ? e.storage.removeItem("debug") : e.storage.debug = t } catch (t) {} }

                function u() { try { return e.storage.debug } catch (t) {} if (void 0 !== r && "env" in r) return n.i({ NODE_ENV: "production" }).DEBUG }
                e = t.exports = n(50), e.log = s, e.formatArgs = o, e.save = a, e.load = u, e.useColors = i, e.storage = "undefined" != typeof chrome && void 0 !== chrome.storage ? chrome.storage.local : function() { try { return window.localStorage } catch (t) {} }(), e.colors = ["lightseagreen", "forestgreen", "goldenrod", "dodgerblue", "darkorchid", "crimson"], e.formatters.j = function(t) { try { return JSON.stringify(t) } catch (t) { return "[UnexpectedJSONParseError]: " + t.message } }, e.enable(u())
            }).call(e, n(11))
        }, function(t, e, n) {
            var r = n(2);
            t.exports = function(t, e) { var n = []; return r(t, function(r, i) { n.push(e(r, i, t)) }), n }
        }, function(t, e, n) {
            "use strict";
            var r = n(0),
                i = { wrapper: { position: "relative", display: "inline-block" }, hint: { position: "absolute", top: "0", left: "0", borderColor: "transparent", boxShadow: "none", opacity: "1" }, input: { position: "relative", verticalAlign: "top", backgroundColor: "transparent" }, inputWithNoHint: { position: "relative", verticalAlign: "top" }, dropdown: { position: "absolute", top: "100%", left: "0", zIndex: "100", display: "none" }, suggestions: { display: "block" }, suggestion: { whiteSpace: "nowrap", cursor: "pointer" }, suggestionChild: { whiteSpace: "normal" }, ltr: { left: "0", right: "auto" }, rtl: { left: "auto", right: "0" }, defaultClasses: { root: "algolia-autocomplete", prefix: "aa", noPrefix: !1, dropdownMenu: "dropdown-menu", input: "input", hint: "hint", suggestions: "suggestions", suggestion: "suggestion", cursor: "cursor", dataset: "dataset", empty: "empty" }, appendTo: { wrapper: { position: "absolute", zIndex: "100", display: "none" }, input: {}, inputWithNoHint: {}, dropdown: { display: "block" } } };
            r.isMsie() && r.mixin(i.input, { backgroundImage: "url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)" }), r.isMsie() && r.isMsie() <= 7 && r.mixin(i.input, { marginTop: "-1px" }), t.exports = i
        }, function(t, e, n) {
            "use strict";

            function r(t, e, n, r) { var i; if (!n) return this; for (e = e.split(h), n = r ? c(n, r) : n, this._callbacks = this._callbacks || {}; i = e.shift();) this._callbacks[i] = this._callbacks[i] || { sync: [], async: [] }, this._callbacks[i][t].push(n); return this }

            function i(t, e, n) { return r.call(this, "async", t, e, n) }

            function o(t, e, n) { return r.call(this, "sync", t, e, n) }

            function s(t) { var e; if (!this._callbacks) return this; for (t = t.split(h); e = t.shift();) delete this._callbacks[e]; return this }

            function a(t) {
                var e, n, r, i, o;
                if (!this._callbacks) return this;
                for (t = t.split(h), r = [].slice.call(arguments, 1);
                    (e = t.shift()) && (n = this._callbacks[e]);) i = u(n.sync, this, [e].concat(r)), o = u(n.async, this, [e].concat(r)), i() && l(o);
                return this
            }

            function u(t, e, n) {
                function r() { for (var r, i = 0, o = t.length; !r && i < o; i += 1) r = !1 === t[i].apply(e, n); return !r }
                return r
            }

            function c(t, e) { return t.bind ? t.bind(e) : function() { t.apply(e, [].slice.call(arguments, 0)) } }
            var l = n(56),
                h = /\s+/;
            t.exports = { onSync: o, onAsync: i, off: s, trigger: a }
        }, function(t, e) {
            var n = {}.toString;
            t.exports = Array.isArray || function(t) { return "[object Array]" == n.call(t) }
        }, function(t, e) {
            function n() { throw new Error("setTimeout has not been defined") }

            function r() { throw new Error("clearTimeout has not been defined") }

            function i(t) { if (l === setTimeout) return setTimeout(t, 0); if ((l === n || !l) && setTimeout) return l = setTimeout, setTimeout(t, 0); try { return l(t, 0) } catch (e) { try { return l.call(null, t, 0) } catch (e) { return l.call(this, t, 0) } } }

            function o(t) { if (h === clearTimeout) return clearTimeout(t); if ((h === r || !h) && clearTimeout) return h = clearTimeout, clearTimeout(t); try { return h(t) } catch (e) { try { return h.call(null, t) } catch (e) { return h.call(this, t) } } }

            function s() { g && p && (g = !1, p.length ? d = p.concat(d) : m = -1, d.length && a()) }

            function a() {
                if (!g) {
                    var t = i(s);
                    g = !0;
                    for (var e = d.length; e;) {
                        for (p = d, d = []; ++m < e;) p && p[m].run();
                        m = -1, e = d.length
                    }
                    p = null, g = !1, o(t)
                }
            }

            function u(t, e) { this.fun = t, this.array = e }

            function c() {}
            var l, h, f = t.exports = {};
            ! function() { try { l = "function" == typeof setTimeout ? setTimeout : n } catch (t) { l = n } try { h = "function" == typeof clearTimeout ? clearTimeout : r } catch (t) { h = r } }();
            var p, d = [],
                g = !1,
                m = -1;
            f.nextTick = function(t) {
                var e = new Array(arguments.length - 1);
                if (arguments.length > 1)
                    for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                d.push(new u(t, e)), 1 !== d.length || g || i(a)
            }, u.prototype.run = function() { this.fun.apply(null, this.array) }, f.title = "browser", f.browser = !0, f.env = {}, f.argv = [], f.version = "", f.versions = {}, f.on = c, f.addListener = c, f.once = c, f.off = c, f.removeListener = c, f.removeAllListeners = c, f.emit = c, f.binding = function(t) { throw new Error("process.binding is not supported") }, f.cwd = function() { return "/" }, f.chdir = function(t) { throw new Error("process.chdir is not supported") }, f.umask = function() { return 0 }
        }, function(t, e, n) {
            function r(t, e) {
                return function(n, r, o) {
                    if ("function" == typeof n && "object" == typeof r || "object" == typeof o) throw new i.AlgoliaSearchError("index.search usage is index.search(query, params, cb)");
                    0 === arguments.length || "function" == typeof n ? (o = n, n = "") : 1 !== arguments.length && "function" != typeof r || (o = r, r = void 0), "object" == typeof n && null !== n ? (r = n, n = void 0) : void 0 !== n && null !== n || (n = "");
                    var s = "";
                    void 0 !== n && (s += t + "=" + encodeURIComponent(n));
                    var a;
                    return void 0 !== r && (r.additionalUA && (a = r.additionalUA, delete r.additionalUA), s = this.as._getSearchParams(r, s)), this._search(s, e, o, a)
                }
            }
            t.exports = r;
            var i = n(5)
        }, function(t, e, n) {
            "use strict";

            function r(t) { t && t.el || i.error("EventBus initialized without el"), this.$el = o.element(t.el) }
            var i = n(0),
                o = n(1);
            i.mixin(r.prototype, {
                trigger: function(t) {
                    var e = [].slice.call(arguments, 1),
                        n = i.Event("autocomplete:" + t);
                    return this.$el.trigger(n, e), n
                }
            }), t.exports = r
        }, function(t, e, n) {
            "use strict";
            t.exports = { wrapper: '<span class="%ROOT%"></span>', dropdown: '<span class="%PREFIX%%DROPDOWN_MENU%"></span>', dataset: '<div class="%PREFIX%%DATASET%-%CLASS%"></div>', suggestions: '<span class="%PREFIX%%SUGGESTIONS%"></span>', suggestion: '<div class="%PREFIX%%SUGGESTION%"></div>' }
        }, function(t, e, n) {
            "use strict";
            t.exports = function(t) { var e = t.match(/Algolia for vanilla JavaScript (\d+\.)(\d+\.)(\d+)/); if (e) return [e[1], e[2], e[3]] }
        }, function(t, e) { t.exports = "0.28.0" }, function(t, e) {
            ! function(e, n) {
                t.exports = function(t) {
                    var e = function() {
                        function e(t) { return null == t ? String(t) : X[Q.call(t)] || "object" }

                        function n(t) { return "function" == e(t) }

                        function r(t) { return null != t && t == t.window }

                        function i(t) { return null != t && t.nodeType == t.DOCUMENT_NODE }

                        function o(t) { return "object" == e(t) }

                        function s(t) { return o(t) && !r(t) && Object.getPrototypeOf(t) == Object.prototype }

                        function a(t) {
                            var e = !!t && "length" in t && t.length,
                                n = A.type(t);
                            return "function" != n && !r(t) && ("array" == n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
                        }

                        function u(t) { return I.call(t, function(t) { return null != t }) }

                        function c(t) { return t.length > 0 ? A.fn.concat.apply([], t) : t }

                        function l(t) { return t.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase() }

                        function h(t) { return t in R ? R[t] : R[t] = new RegExp("(^|\\s)" + t + "(\\s|$)") }

                        function f(t, e) { return "number" != typeof e || D[l(t)] ? e : e + "px" }

                        function p(t) { var e, n; return P[t] || (e = L.createElement(t), L.body.appendChild(e), n = getComputedStyle(e, "").getPropertyValue("display"), e.parentNode.removeChild(e), "none" == n && (n = "block"), P[t] = n), P[t] }

                        function d(t) { return "children" in t ? j.call(t.children) : A.map(t.childNodes, function(t) { if (1 == t.nodeType) return t }) }

                        function g(t, e) {
                            var n, r = t ? t.length : 0;
                            for (n = 0; n < r; n++) this[n] = t[n];
                            this.length = r, this.selector = e || ""
                        }

                        function m(t, e, n) { for (C in e) n && (s(e[C]) || tt(e[C])) ? (s(e[C]) && !s(t[C]) && (t[C] = {}), tt(e[C]) && !tt(t[C]) && (t[C] = []), m(t[C], e[C], n)) : e[C] !== S && (t[C] = e[C]) }

                        function v(t, e) { return null == e ? A(t) : A(t).filter(e) }

                        function y(t, e, r, i) { return n(e) ? e.call(t, r, i) : e }

                        function b(t, e, n) { null == n ? t.removeAttribute(e) : t.setAttribute(e, n) }

                        function w(t, e) {
                            var n = t.className || "",
                                r = n && n.baseVal !== S;
                            if (e === S) return r ? n.baseVal : n;
                            r ? n.baseVal = e : t.className = e
                        }

                        function _(t) { try { return t ? "true" == t || "false" != t && ("null" == t ? null : +t + "" == t ? +t : /^[\[\{]/.test(t) ? A.parseJSON(t) : t) : t } catch (e) { return t } }

                        function x(t, e) { e(t); for (var n = 0, r = t.childNodes.length; n < r; n++) x(t.childNodes[n], e) }
                        var S, C, A, E, T, k, O = [],
                            N = O.concat,
                            I = O.filter,
                            j = O.slice,
                            L = t.document,
                            P = {},
                            R = {},
                            D = { "column-count": 1, columns: 1, "font-weight": 1, "line-height": 1, opacity: 1, "z-index": 1, zoom: 1 },
                            $ = /^\s*<(\w+|!)[^>]*>/,
                            M = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
                            q = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
                            H = /^(?:body|html)$/i,
                            F = /([A-Z])/g,
                            z = ["val", "css", "html", "text", "data", "width", "height", "offset"],
                            B = ["after", "prepend", "before", "append"],
                            U = L.createElement("table"),
                            V = L.createElement("tr"),
                            K = { tr: L.createElement("tbody"), tbody: U, thead: U, tfoot: U, td: V, th: V, "*": L.createElement("div") },
                            J = /complete|loaded|interactive/,
                            W = /^[\w-]*$/,
                            X = {},
                            Q = X.toString,
                            G = {},
                            Y = L.createElement("div"),
                            Z = { tabindex: "tabIndex", readonly: "readOnly", for: "htmlFor", class: "className", maxlength: "maxLength", cellspacing: "cellSpacing", cellpadding: "cellPadding", rowspan: "rowSpan", colspan: "colSpan", usemap: "useMap", frameborder: "frameBorder", contenteditable: "contentEditable" },
                            tt = Array.isArray || function(t) { return t instanceof Array };
                        return G.matches = function(t, e) {
                            if (!e || !t || 1 !== t.nodeType) return !1;
                            var n = t.matches || t.webkitMatchesSelector || t.mozMatchesSelector || t.oMatchesSelector || t.matchesSelector;
                            if (n) return n.call(t, e);
                            var r, i = t.parentNode,
                                o = !i;
                            return o && (i = Y).appendChild(t), r = ~G.qsa(i, e).indexOf(t), o && Y.removeChild(t), r
                        }, T = function(t) { return t.replace(/-+(.)?/g, function(t, e) { return e ? e.toUpperCase() : "" }) }, k = function(t) { return I.call(t, function(e, n) { return t.indexOf(e) == n }) }, G.fragment = function(t, e, n) { var r, i, o; return M.test(t) && (r = A(L.createElement(RegExp.$1))), r || (t.replace && (t = t.replace(q, "<$1></$2>")), e === S && (e = $.test(t) && RegExp.$1), e in K || (e = "*"), o = K[e], o.innerHTML = "" + t, r = A.each(j.call(o.childNodes), function() { o.removeChild(this) })), s(n) && (i = A(r), A.each(n, function(t, e) { z.indexOf(t) > -1 ? i[t](e) : i.attr(t, e) })), r }, G.Z = function(t, e) { return new g(t, e) }, G.isZ = function(t) { return t instanceof G.Z }, G.init = function(t, e) {
                            var r;
                            if (!t) return G.Z();
                            if ("string" == typeof t)
                                if (t = t.trim(), "<" == t[0] && $.test(t)) r = G.fragment(t, RegExp.$1, e), t = null;
                                else {
                                    if (e !== S) return A(e).find(t);
                                    r = G.qsa(L, t)
                                }
                            else {
                                if (n(t)) return A(L).ready(t);
                                if (G.isZ(t)) return t;
                                if (tt(t)) r = u(t);
                                else if (o(t)) r = [t], t = null;
                                else if ($.test(t)) r = G.fragment(t.trim(), RegExp.$1, e), t = null;
                                else {
                                    if (e !== S) return A(e).find(t);
                                    r = G.qsa(L, t)
                                }
                            }
                            return G.Z(r, t)
                        }, A = function(t, e) { return G.init(t, e) }, A.extend = function(t) { var e, n = j.call(arguments, 1); return "boolean" == typeof t && (e = t, t = n.shift()), n.forEach(function(n) { m(t, n, e) }), t }, G.qsa = function(t, e) {
                            var n, r = "#" == e[0],
                                i = !r && "." == e[0],
                                o = r || i ? e.slice(1) : e,
                                s = W.test(o);
                            return t.getElementById && s && r ? (n = t.getElementById(o)) ? [n] : [] : 1 !== t.nodeType && 9 !== t.nodeType && 11 !== t.nodeType ? [] : j.call(s && !r && t.getElementsByClassName ? i ? t.getElementsByClassName(o) : t.getElementsByTagName(e) : t.querySelectorAll(e))
                        }, A.contains = L.documentElement.contains ? function(t, e) { return t !== e && t.contains(e) } : function(t, e) {
                            for (; e && (e = e.parentNode);)
                                if (e === t) return !0;
                            return !1
                        }, A.type = e, A.isFunction = n, A.isWindow = r, A.isArray = tt, A.isPlainObject = s, A.isEmptyObject = function(t) { var e; for (e in t) return !1; return !0 }, A.isNumeric = function(t) {
                            var e = Number(t),
                                n = typeof t;
                            return null != t && "boolean" != n && ("string" != n || t.length) && !isNaN(e) && isFinite(e) || !1
                        }, A.inArray = function(t, e, n) { return O.indexOf.call(e, t, n) }, A.camelCase = T, A.trim = function(t) { return null == t ? "" : String.prototype.trim.call(t) }, A.uuid = 0, A.support = {}, A.expr = {}, A.noop = function() {}, A.map = function(t, e) {
                            var n, r, i, o = [];
                            if (a(t))
                                for (r = 0; r < t.length; r++) null != (n = e(t[r], r)) && o.push(n);
                            else
                                for (i in t) null != (n = e(t[i], i)) && o.push(n);
                            return c(o)
                        }, A.each = function(t, e) {
                            var n, r;
                            if (a(t)) {
                                for (n = 0; n < t.length; n++)
                                    if (!1 === e.call(t[n], n, t[n])) return t
                            } else
                                for (r in t)
                                    if (!1 === e.call(t[r], r, t[r])) return t; return t
                        }, A.grep = function(t, e) { return I.call(t, e) }, t.JSON && (A.parseJSON = JSON.parse), A.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) { X["[object " + e + "]"] = e.toLowerCase() }), A.fn = {
                            constructor: G.Z,
                            length: 0,
                            forEach: O.forEach,
                            reduce: O.reduce,
                            push: O.push,
                            sort: O.sort,
                            splice: O.splice,
                            indexOf: O.indexOf,
                            concat: function() { var t, e, n = []; for (t = 0; t < arguments.length; t++) e = arguments[t], n[t] = G.isZ(e) ? e.toArray() : e; return N.apply(G.isZ(this) ? this.toArray() : this, n) },
                            map: function(t) { return A(A.map(this, function(e, n) { return t.call(e, n, e) })) },
                            slice: function() { return A(j.apply(this, arguments)) },
                            ready: function(t) { return J.test(L.readyState) && L.body ? t(A) : L.addEventListener("DOMContentLoaded", function() { t(A) }, !1), this },
                            get: function(t) { return t === S ? j.call(this) : this[t >= 0 ? t : t + this.length] },
                            toArray: function() { return this.get() },
                            size: function() { return this.length },
                            remove: function() { return this.each(function() { null != this.parentNode && this.parentNode.removeChild(this) }) },
                            each: function(t) { return O.every.call(this, function(e, n) { return !1 !== t.call(e, n, e) }), this },
                            filter: function(t) { return n(t) ? this.not(this.not(t)) : A(I.call(this, function(e) { return G.matches(e, t) })) },
                            add: function(t, e) { return A(k(this.concat(A(t, e)))) },
                            is: function(t) { return this.length > 0 && G.matches(this[0], t) },
                            not: function(t) {
                                var e = [];
                                if (n(t) && t.call !== S) this.each(function(n) { t.call(this, n) || e.push(this) });
                                else {
                                    var r = "string" == typeof t ? this.filter(t) : a(t) && n(t.item) ? j.call(t) : A(t);
                                    this.forEach(function(t) { r.indexOf(t) < 0 && e.push(t) })
                                }
                                return A(e)
                            },
                            has: function(t) { return this.filter(function() { return o(t) ? A.contains(this, t) : A(this).find(t).size() }) },
                            eq: function(t) { return -1 === t ? this.slice(t) : this.slice(t, +t + 1) },
                            first: function() { var t = this[0]; return t && !o(t) ? t : A(t) },
                            last: function() { var t = this[this.length - 1]; return t && !o(t) ? t : A(t) },
                            find: function(t) { var e = this; return t ? "object" == typeof t ? A(t).filter(function() { var t = this; return O.some.call(e, function(e) { return A.contains(e, t) }) }) : 1 == this.length ? A(G.qsa(this[0], t)) : this.map(function() { return G.qsa(this, t) }) : A() },
                            closest: function(t, e) {
                                var n = [],
                                    r = "object" == typeof t && A(t);
                                return this.each(function(o, s) {
                                    for (; s && !(r ? r.indexOf(s) >= 0 : G.matches(s, t));) s = s !== e && !i(s) && s.parentNode;
                                    s && n.indexOf(s) < 0 && n.push(s)
                                }), A(n)
                            },
                            parents: function(t) { for (var e = [], n = this; n.length > 0;) n = A.map(n, function(t) { if ((t = t.parentNode) && !i(t) && e.indexOf(t) < 0) return e.push(t), t }); return v(e, t) },
                            parent: function(t) { return v(k(this.pluck("parentNode")), t) },
                            children: function(t) { return v(this.map(function() { return d(this) }), t) },
                            contents: function() { return this.map(function() { return this.contentDocument || j.call(this.childNodes) }) },
                            siblings: function(t) { return v(this.map(function(t, e) { return I.call(d(e.parentNode), function(t) { return t !== e }) }), t) },
                            empty: function() { return this.each(function() { this.innerHTML = "" }) },
                            pluck: function(t) { return A.map(this, function(e) { return e[t] }) },
                            show: function() { return this.each(function() { "none" == this.style.display && (this.style.display = ""), "none" == getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = p(this.nodeName)) }) },
                            replaceWith: function(t) { return this.before(t).remove() },
                            wrap: function(t) {
                                var e = n(t);
                                if (this[0] && !e) var r = A(t).get(0),
                                    i = r.parentNode || this.length > 1;
                                return this.each(function(n) { A(this).wrapAll(e ? t.call(this, n) : i ? r.cloneNode(!0) : r) })
                            },
                            wrapAll: function(t) {
                                if (this[0]) {
                                    A(this[0]).before(t = A(t));
                                    for (var e;
                                        (e = t.children()).length;) t = e.first();
                                    A(t).append(this)
                                }
                                return this
                            },
                            wrapInner: function(t) {
                                var e = n(t);
                                return this.each(function(n) {
                                    var r = A(this),
                                        i = r.contents(),
                                        o = e ? t.call(this, n) : t;
                                    i.length ? i.wrapAll(o) : r.append(o)
                                })
                            },
                            unwrap: function() { return this.parent().each(function() { A(this).replaceWith(A(this).children()) }), this },
                            clone: function() { return this.map(function() { return this.cloneNode(!0) }) },
                            hide: function() { return this.css("display", "none") },
                            toggle: function(t) {
                                return this.each(function() {
                                    var e = A(this);
                                    (t === S ? "none" == e.css("display") : t) ? e.show(): e.hide()
                                })
                            },
                            prev: function(t) { return A(this.pluck("previousElementSibling")).filter(t || "*") },
                            next: function(t) { return A(this.pluck("nextElementSibling")).filter(t || "*") },
                            html: function(t) {
                                return 0 in arguments ? this.each(function(e) {
                                    var n = this.innerHTML;
                                    A(this).empty().append(y(this, t, e, n))
                                }) : 0 in this ? this[0].innerHTML : null
                            },
                            text: function(t) {
                                return 0 in arguments ? this.each(function(e) {
                                    var n = y(this, t, e, this.textContent);
                                    this.textContent = null == n ? "" : "" + n
                                }) : 0 in this ? this.pluck("textContent").join("") : null
                            },
                            attr: function(t, e) {
                                var n;
                                return "string" != typeof t || 1 in arguments ? this.each(function(n) {
                                    if (1 === this.nodeType)
                                        if (o(t))
                                            for (C in t) b(this, C, t[C]);
                                        else b(this, t, y(this, e, n, this.getAttribute(t)))
                                }) : 0 in this && 1 == this[0].nodeType && null != (n = this[0].getAttribute(t)) ? n : S
                            },
                            removeAttr: function(t) { return this.each(function() { 1 === this.nodeType && t.split(" ").forEach(function(t) { b(this, t) }, this) }) },
                            prop: function(t, e) { return t = Z[t] || t, 1 in arguments ? this.each(function(n) { this[t] = y(this, e, n, this[t]) }) : this[0] && this[0][t] },
                            removeProp: function(t) { return t = Z[t] || t, this.each(function() { delete this[t] }) },
                            data: function(t, e) {
                                var n = "data-" + t.replace(F, "-$1").toLowerCase(),
                                    r = 1 in arguments ? this.attr(n, e) : this.attr(n);
                                return null !== r ? _(r) : S
                            },
                            val: function(t) { return 0 in arguments ? (null == t && (t = ""), this.each(function(e) { this.value = y(this, t, e, this.value) })) : this[0] && (this[0].multiple ? A(this[0]).find("option").filter(function() { return this.selected }).pluck("value") : this[0].value) },
                            offset: function(e) {
                                if (e) return this.each(function(t) {
                                    var n = A(this),
                                        r = y(this, e, t, n.offset()),
                                        i = n.offsetParent().offset(),
                                        o = { top: r.top - i.top, left: r.left - i.left };
                                    "static" == n.css("position") && (o.position = "relative"), n.css(o)
                                });
                                if (!this.length) return null;
                                if (L.documentElement !== this[0] && !A.contains(L.documentElement, this[0])) return { top: 0, left: 0 };
                                var n = this[0].getBoundingClientRect();
                                return { left: n.left + t.pageXOffset, top: n.top + t.pageYOffset, width: Math.round(n.width), height: Math.round(n.height) }
                            },
                            css: function(t, n) {
                                if (arguments.length < 2) {
                                    var r = this[0];
                                    if ("string" == typeof t) { if (!r) return; return r.style[T(t)] || getComputedStyle(r, "").getPropertyValue(t) }
                                    if (tt(t)) {
                                        if (!r) return;
                                        var i = {},
                                            o = getComputedStyle(r, "");
                                        return A.each(t, function(t, e) { i[e] = r.style[T(e)] || o.getPropertyValue(e) }), i
                                    }
                                }
                                var s = "";
                                if ("string" == e(t)) n || 0 === n ? s = l(t) + ":" + f(t, n) : this.each(function() { this.style.removeProperty(l(t)) });
                                else
                                    for (C in t) t[C] || 0 === t[C] ? s += l(C) + ":" + f(C, t[C]) + ";" : this.each(function() { this.style.removeProperty(l(C)) });
                                return this.each(function() { this.style.cssText += ";" + s })
                            },
                            index: function(t) { return t ? this.indexOf(A(t)[0]) : this.parent().children().indexOf(this[0]) },
                            hasClass: function(t) { return !!t && O.some.call(this, function(t) { return this.test(w(t)) }, h(t)) },
                            addClass: function(t) {
                                return t ? this.each(function(e) {
                                    if ("className" in this) {
                                        E = [];
                                        var n = w(this);
                                        y(this, t, e, n).split(/\s+/g).forEach(function(t) { A(this).hasClass(t) || E.push(t) }, this), E.length && w(this, n + (n ? " " : "") + E.join(" "))
                                    }
                                }) : this
                            },
                            removeClass: function(t) {
                                return this.each(function(e) {
                                    if ("className" in this) {
                                        if (t === S) return w(this, "");
                                        E = w(this), y(this, t, e, E).split(/\s+/g).forEach(function(t) { E = E.replace(h(t), " ") }), w(this, E.trim())
                                    }
                                })
                            },
                            toggleClass: function(t, e) {
                                return t ? this.each(function(n) {
                                    var r = A(this);
                                    y(this, t, n, w(this)).split(/\s+/g).forEach(function(t) {
                                        (e === S ? !r.hasClass(t) : e) ? r.addClass(t): r.removeClass(t)
                                    })
                                }) : this
                            },
                            scrollTop: function(t) { if (this.length) { var e = "scrollTop" in this[0]; return t === S ? e ? this[0].scrollTop : this[0].pageYOffset : this.each(e ? function() { this.scrollTop = t } : function() { this.scrollTo(this.scrollX, t) }) } },
                            scrollLeft: function(t) { if (this.length) { var e = "scrollLeft" in this[0]; return t === S ? e ? this[0].scrollLeft : this[0].pageXOffset : this.each(e ? function() { this.scrollLeft = t } : function() { this.scrollTo(t, this.scrollY) }) } },
                            position: function() {
                                if (this.length) {
                                    var t = this[0],
                                        e = this.offsetParent(),
                                        n = this.offset(),
                                        r = H.test(e[0].nodeName) ? { top: 0, left: 0 } : e.offset();
                                    return n.top -= parseFloat(A(t).css("margin-top")) || 0, n.left -= parseFloat(A(t).css("margin-left")) || 0, r.top += parseFloat(A(e[0]).css("border-top-width")) || 0, r.left += parseFloat(A(e[0]).css("border-left-width")) || 0, { top: n.top - r.top, left: n.left - r.left }
                                }
                            },
                            offsetParent: function() { return this.map(function() { for (var t = this.offsetParent || L.body; t && !H.test(t.nodeName) && "static" == A(t).css("position");) t = t.offsetParent; return t }) }
                        }, A.fn.detach = A.fn.remove, ["width", "height"].forEach(function(t) {
                            var e = t.replace(/./, function(t) { return t[0].toUpperCase() });
                            A.fn[t] = function(n) { var o, s = this[0]; return n === S ? r(s) ? s["inner" + e] : i(s) ? s.documentElement["scroll" + e] : (o = this.offset()) && o[t] : this.each(function(e) { s = A(this), s.css(t, y(this, n, e, s[t]())) }) }
                        }), B.forEach(function(n, r) {
                            var i = r % 2;
                            A.fn[n] = function() {
                                var n, o, s = A.map(arguments, function(t) { var r = []; return n = e(t), "array" == n ? (t.forEach(function(t) { return t.nodeType !== S ? r.push(t) : A.zepto.isZ(t) ? r = r.concat(t.get()) : void(r = r.concat(G.fragment(t))) }), r) : "object" == n || null == t ? t : G.fragment(t) }),
                                    a = this.length > 1;
                                return s.length < 1 ? this : this.each(function(e, n) {
                                    o = i ? n : n.parentNode, n = 0 == r ? n.nextSibling : 1 == r ? n.firstChild : 2 == r ? n : null;
                                    var u = A.contains(L.documentElement, o);
                                    s.forEach(function(e) {
                                        if (a) e = e.cloneNode(!0);
                                        else if (!o) return A(e).remove();
                                        o.insertBefore(e, n), u && x(e, function(e) {
                                            if (!(null == e.nodeName || "SCRIPT" !== e.nodeName.toUpperCase() || e.type && "text/javascript" !== e.type || e.src)) {
                                                var n = e.ownerDocument ? e.ownerDocument.defaultView : t;
                                                n.eval.call(n, e.innerHTML)
                                            }
                                        })
                                    })
                                })
                            }, A.fn[i ? n + "To" : "insert" + (r ? "Before" : "After")] = function(t) { return A(t)[n](this), this }
                        }), G.Z.prototype = g.prototype = A.fn, G.uniq = k, G.deserializeValue = _, A.zepto = G, A
                    }();
                    return function(e) {
                            function n(t) { return t._zid || (t._zid = p++) }

                            function r(t, e, r, s) { if (e = i(e), e.ns) var a = o(e.ns); return (v[n(t)] || []).filter(function(t) { return t && (!e.e || t.e == e.e) && (!e.ns || a.test(t.ns)) && (!r || n(t.fn) === n(r)) && (!s || t.sel == s) }) }

                            function i(t) { var e = ("" + t).split("."); return { e: e[0], ns: e.slice(1).sort().join(" ") } }

                            function o(t) { return new RegExp("(?:^| )" + t.replace(" ", " .* ?") + "(?: |$)") }

                            function s(t, e) { return t.del && !b && t.e in w || !!e }

                            function a(t) { return _[t] || b && w[t] || t }

                            function u(t, r, o, u, c, h, p) {
                                var d = n(t),
                                    g = v[d] || (v[d] = []);
                                r.split(/\s/).forEach(function(n) {
                                    if ("ready" == n) return e(document).ready(o);
                                    var r = i(n);
                                    r.fn = o, r.sel = c, r.e in _ && (o = function(t) { var n = t.relatedTarget; if (!n || n !== this && !e.contains(this, n)) return r.fn.apply(this, arguments) }), r.del = h;
                                    var d = h || o;
                                    r.proxy = function(e) { if (e = l(e), !e.isImmediatePropagationStopped()) { e.data = u; var n = d.apply(t, e._args == f ? [e] : [e].concat(e._args)); return !1 === n && (e.preventDefault(), e.stopPropagation()), n } }, r.i = g.length, g.push(r), "addEventListener" in t && t.addEventListener(a(r.e), r.proxy, s(r, p))
                                })
                            }

                            function c(t, e, i, o, u) {
                                var c = n(t);
                                (e || "").split(/\s/).forEach(function(e) { r(t, e, i, o).forEach(function(e) { delete v[c][e.i], "removeEventListener" in t && t.removeEventListener(a(e.e), e.proxy, s(e, u)) }) })
                            }

                            function l(t, n) {
                                return !n && t.isDefaultPrevented || (n || (n = t), e.each(A, function(e, r) {
                                    var i = n[e];
                                    t[e] = function() { return this[r] = x, i && i.apply(n, arguments) }, t[r] = S
                                }), t.timeStamp || (t.timeStamp = Date.now()), (n.defaultPrevented !== f ? n.defaultPrevented : "returnValue" in n ? !1 === n.returnValue : n.getPreventDefault && n.getPreventDefault()) && (t.isDefaultPrevented = x)), t
                            }

                            function h(t) { var e, n = { originalEvent: t }; for (e in t) C.test(e) || t[e] === f || (n[e] = t[e]); return l(n, t) }
                            var f, p = 1,
                                d = Array.prototype.slice,
                                g = e.isFunction,
                                m = function(t) { return "string" == typeof t },
                                v = {},
                                y = {},
                                b = "onfocusin" in t,
                                w = { focus: "focusin", blur: "focusout" },
                                _ = { mouseenter: "mouseover", mouseleave: "mouseout" };
                            y.click = y.mousedown = y.mouseup = y.mousemove = "MouseEvents", e.event = { add: u, remove: c }, e.proxy = function(t, r) { var i = 2 in arguments && d.call(arguments, 2); if (g(t)) { var o = function() { return t.apply(r, i ? i.concat(d.call(arguments)) : arguments) }; return o._zid = n(t), o } if (m(r)) return i ? (i.unshift(t[r], t), e.proxy.apply(null, i)) : e.proxy(t[r], t); throw new TypeError("expected function") }, e.fn.bind = function(t, e, n) { return this.on(t, e, n) }, e.fn.unbind = function(t, e) { return this.off(t, e) }, e.fn.one = function(t, e, n, r) { return this.on(t, e, n, r, 1) };
                            var x = function() { return !0 },
                                S = function() { return !1 },
                                C = /^([A-Z]|returnValue$|layer[XY]$|webkitMovement[XY]$)/,
                                A = { preventDefault: "isDefaultPrevented", stopImmediatePropagation: "isImmediatePropagationStopped", stopPropagation: "isPropagationStopped" };
                            e.fn.delegate = function(t, e, n) { return this.on(e, t, n) }, e.fn.undelegate = function(t, e, n) { return this.off(e, t, n) }, e.fn.live = function(t, n) { return e(document.body).delegate(this.selector, t, n), this }, e.fn.die = function(t, n) { return e(document.body).undelegate(this.selector, t, n), this }, e.fn.on = function(t, n, r, i, o) { var s, a, l = this; return t && !m(t) ? (e.each(t, function(t, e) { l.on(t, n, r, e, o) }), l) : (m(n) || g(i) || !1 === i || (i = r, r = n, n = f), i !== f && !1 !== r || (i = r, r = f), !1 === i && (i = S), l.each(function(l, f) { o && (s = function(t) { return c(f, t.type, i), i.apply(this, arguments) }), n && (a = function(t) { var r, o = e(t.target).closest(n, f).get(0); if (o && o !== f) return r = e.extend(h(t), { currentTarget: o, liveFired: f }), (s || i).apply(o, [r].concat(d.call(arguments, 1))) }), u(f, t, i, r, n, a || s) })) }, e.fn.off = function(t, n, r) { var i = this; return t && !m(t) ? (e.each(t, function(t, e) { i.off(t, n, e) }), i) : (m(n) || g(r) || !1 === r || (r = n, n = f), !1 === r && (r = S), i.each(function() { c(this, t, r, n) })) }, e.fn.trigger = function(t, n) { return t = m(t) || e.isPlainObject(t) ? e.Event(t) : l(t), t._args = n, this.each(function() { t.type in w && "function" == typeof this[t.type] ? this[t.type]() : "dispatchEvent" in this ? this.dispatchEvent(t) : e(this).triggerHandler(t, n) }) }, e.fn.triggerHandler = function(t, n) { var i, o; return this.each(function(s, a) { i = h(m(t) ? e.Event(t) : t), i._args = n, i.target = a, e.each(r(a, t.type || t), function(t, e) { if (o = e.proxy(i), i.isImmediatePropagationStopped()) return !1 }) }), o }, "focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(t) { e.fn[t] = function(e) { return 0 in arguments ? this.bind(t, e) : this.trigger(t) } }), e.Event = function(t, e) {
                                m(t) || (e = t, t = e.type);
                                var n = document.createEvent(y[t] || "Events"),
                                    r = !0;
                                if (e)
                                    for (var i in e) "bubbles" == i ? r = !!e[i] : n[i] = e[i];
                                return n.initEvent(t, r, !0), l(n)
                            }
                        }(e),
                        function(t) {
                            var e, n = [];
                            t.fn.remove = function() { return this.each(function() { this.parentNode && ("IMG" === this.tagName && (n.push(this), this.src = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=", e && clearTimeout(e), e = setTimeout(function() { n = [] }, 6e4)), this.parentNode.removeChild(this)) }) }
                        }(e),
                        function(t) {
                            function e(e, r) {
                                var u = e[a],
                                    c = u && i[u];
                                if (void 0 === r) return c || n(e);
                                if (c) { if (r in c) return c[r]; var l = s(r); if (l in c) return c[l] }
                                return o.call(t(e), r)
                            }

                            function n(e, n, o) {
                                var u = e[a] || (e[a] = ++t.uuid),
                                    c = i[u] || (i[u] = r(e));
                                return void 0 !== n && (c[s(n)] = o), c
                            }

                            function r(e) { var n = {}; return t.each(e.attributes || u, function(e, r) { 0 == r.name.indexOf("data-") && (n[s(r.name.replace("data-", ""))] = t.zepto.deserializeValue(r.value)) }), n }
                            var i = {},
                                o = t.fn.data,
                                s = t.camelCase,
                                a = t.expando = "Zepto" + +new Date,
                                u = [];
                            t.fn.data = function(r, i) { return void 0 === i ? t.isPlainObject(r) ? this.each(function(e, i) { t.each(r, function(t, e) { n(i, t, e) }) }) : 0 in this ? e(this[0], r) : void 0 : this.each(function() { n(this, r, i) }) }, t.data = function(e, n, r) { return t(e).data(n, r) }, t.hasData = function(e) {
                                var n = e[a],
                                    r = n && i[n];
                                return !!r && !t.isEmptyObject(r)
                            }, t.fn.removeData = function(e) {
                                return "string" == typeof e && (e = e.split(/\s+/)), this.each(function() {
                                    var n = this[a],
                                        r = n && i[n];
                                    r && t.each(e || r, function(t) { delete r[e ? s(this) : t] })
                                })
                            }, ["remove", "empty"].forEach(function(e) {
                                var n = t.fn[e];
                                t.fn[e] = function() { var t = this.find("*"); return "remove" === e && (t = t.add(this)), t.removeData(), n.call(this) }
                            })
                        }(e), e
                }(e)
            }(window)
        }, function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }), e.default = "2.4.1"
        }, function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 });
            var r = n(17),
                i = function(t) { return t && t.__esModule ? t : { default: t } }(r);
            e.default = i.default
        }, function(t, e) {
            "function" == typeof Object.create ? t.exports = function(t, e) { t.super_ = e, t.prototype = Object.create(e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }) } : t.exports = function(t, e) {
                t.super_ = e;
                var n = function() {};
                n.prototype = e.prototype, t.prototype = new n, t.prototype.constructor = t
            }
        }, function(t, e, n) {
            "use strict";

            function r(t) { return t && t.__esModule ? t : { default: t } }
            Object.defineProperty(e, "__esModule", { value: !0 });
            var i = n(66),
                o = r(i),
                s = n(47),
                a = r(s),
                u = n(18),
                c = r(u),
                l = (0, o.default)(a.default);
            l.version = c.default, e.default = l
        }, function(t, e, n) {
            function r(t, e, r) {
                var o = n(6)("algoliasearch"),
                    s = n(4),
                    a = n(10),
                    c = n(7),
                    l = "Usage: algoliasearch(applicationID, apiKey, opts)";
                if (!0 !== r._allowEmptyCredentials && !t) throw new u.AlgoliaSearchError("Please provide an application ID. " + l);
                if (!0 !== r._allowEmptyCredentials && !e) throw new u.AlgoliaSearchError("Please provide an API key. " + l);
                this.applicationID = t, this.apiKey = e, this.hosts = { read: [], write: [] }, r = r || {};
                var h = r.protocol || "https:";
                if (this._timeouts = r.timeouts || { connect: 1e3, read: 2e3, write: 3e4 }, r.timeout && (this._timeouts.connect = this._timeouts.read = this._timeouts.write = r.timeout), /:$/.test(h) || (h += ":"), "http:" !== r.protocol && "https:" !== r.protocol) throw new u.AlgoliaSearchError("protocol must be `http:` or `https:` (was `" + r.protocol + "`)");
                if (this._checkAppIdData(), r.hosts) a(r.hosts) ? (this.hosts.read = s(r.hosts), this.hosts.write = s(r.hosts)) : (this.hosts.read = s(r.hosts.read), this.hosts.write = s(r.hosts.write));
                else {
                    var f = c(this._shuffleResult, function(e) { return t + "-" + e + ".algolianet.com" });
                    this.hosts.read = [this.applicationID + "-dsn.algolia.net"].concat(f), this.hosts.write = [this.applicationID + ".algolia.net"].concat(f)
                }
                this.hosts.read = c(this.hosts.read, i(h)), this.hosts.write = c(this.hosts.write, i(h)), this.extraHeaders = [], this.cache = r._cache || {}, this._ua = r._ua, this._useCache = !(void 0 !== r._useCache && !r._cache) || r._useCache, this._useFallback = void 0 === r.useFallback || r.useFallback, this._setTimeout = r._setTimeout, o("init done, %j", this)
            }

            function i(t) { return function(e) { return t + "//" + e.toLowerCase() } }

            function o(t) {
                if (void 0 === Array.prototype.toJSON) return JSON.stringify(t);
                var e = Array.prototype.toJSON;
                delete Array.prototype.toJSON;
                var n = JSON.stringify(t);
                return Array.prototype.toJSON = e, n
            }

            function s(t) { for (var e, n, r = t.length; 0 !== r;) n = Math.floor(Math.random() * r), r -= 1, e = t[r], t[r] = t[n], t[n] = e; return t }

            function a(t) {
                var e = {};
                for (var n in t)
                    if (Object.prototype.hasOwnProperty.call(t, n)) {
                        var r;
                        r = "x-algolia-api-key" === n || "x-algolia-application-id" === n ? "**hidden for security purposes**" : t[n], e[n] = r
                    }
                return e
            }
            t.exports = r;
            var u = n(5),
                c = n(31),
                l = n(23),
                h = n(35),
                f = n.i({ NODE_ENV: "production" }).RESET_APP_DATA_TIMER && parseInt(n.i({ NODE_ENV: "production" }).RESET_APP_DATA_TIMER, 10) || 12e4;
            r.prototype.initIndex = function(t) { return new l(this, t) }, r.prototype.setExtraHeader = function(t, e) { this.extraHeaders.push({ name: t.toLowerCase(), value: e }) }, r.prototype.addAlgoliaAgent = function(t) {-1 === this._ua.indexOf(";" + t) && (this._ua += ";" + t) }, r.prototype._jsonRequest = function(t) {
                function e(n, c) {
                    function v(t) {
                        var e = t && t.body && t.body.message && t.body.status || t.statusCode || t && t.body && 200;
                        s("received response: statusCode: %s, computed statusCode: %d, headers: %j", t.statusCode, e, t.headers);
                        var n = 2 === Math.floor(e / 100),
                            o = new Date;
                        if (m.push({ currentHost: S, headers: a(i), content: r || null, contentLength: void 0 !== r ? r.length : null, method: c.method, timeouts: c.timeouts, url: c.url, startTime: x, endTime: o, duration: o - x, statusCode: e }), n) return f._useCache && h && (h[_] = t.responseText), t.body;
                        if (4 !== Math.floor(e / 100)) return p += 1, b();
                        s("unrecoverable error");
                        var l = new u.AlgoliaSearchError(t.body && t.body.message, { debugData: m, statusCode: e });
                        return f._promise.reject(l)
                    }

                    function y(e) { s("error: %s, stack: %s", e.message, e.stack); var n = new Date; return m.push({ currentHost: S, headers: a(i), content: r || null, contentLength: void 0 !== r ? r.length : null, method: c.method, timeouts: c.timeouts, url: c.url, startTime: x, endTime: n, duration: n - x }), e instanceof u.AlgoliaSearchError || (e = new u.Unknown(e && e.message, e)), p += 1, e instanceof u.Unknown || e instanceof u.UnparsableJSON || p >= f.hosts[t.hostType].length && (d || !g) ? (e.debugData = m, f._promise.reject(e)) : e instanceof u.RequestTimeout ? w() : b() }

                    function b() { return s("retrying request"), f._incrementHostIndex(t.hostType), e(n, c) }

                    function w() { return s("retrying request with higher timeout"), f._incrementHostIndex(t.hostType), f._incrementTimeoutMultipler(), c.timeouts = f._getTimeoutsForRequest(t.hostType), e(n, c) }
                    f._checkAppIdData();
                    var _, x = new Date;
                    if (f._useCache && (_ = t.url), f._useCache && r && (_ += "_body_" + c.body), f._useCache && h && void 0 !== h[_]) return s("serving response from cache"), f._promise.resolve(JSON.parse(h[_]));
                    if (p >= f.hosts[t.hostType].length) return !g || d ? (s("could not get any response"), f._promise.reject(new u.AlgoliaSearchError("Cannot connect to the AlgoliaSearch API. Send an email to support@algolia.com to report and resolve the issue. Application id was: " + f.applicationID, { debugData: m }))) : (s("switching to fallback"), p = 0, c.method = t.fallback.method, c.url = t.fallback.url, c.jsonBody = t.fallback.body, c.jsonBody && (c.body = o(c.jsonBody)), i = f._computeRequestHeaders(l), c.timeouts = f._getTimeoutsForRequest(t.hostType), f._setHostIndexByType(0, t.hostType), d = !0, e(f._request.fallback, c));
                    var S = f._getHostByType(t.hostType),
                        C = S + c.url,
                        A = { body: c.body, jsonBody: c.jsonBody, method: c.method, headers: i, timeouts: c.timeouts, debug: s };
                    return s("method: %s, url: %s, headers: %j, timeouts: %d", A.method, C, A.headers, A.timeouts), n === f._request.fallback && s("using fallback"), n.call(f, C, A).then(v, y)
                }
                this._checkAppIdData();
                var r, i, s = n(6)("algoliasearch:" + t.url),
                    l = t.additionalUA || "",
                    h = t.cache,
                    f = this,
                    p = 0,
                    d = !1,
                    g = f._useFallback && f._request.fallback && t.fallback;
                this.apiKey.length > 500 && void 0 !== t.body && (void 0 !== t.body.params || void 0 !== t.body.requests) ? (t.body.apiKey = this.apiKey, i = this._computeRequestHeaders(l, !1)) : i = this._computeRequestHeaders(l), void 0 !== t.body && (r = o(t.body)), s("request start");
                var m = [],
                    v = e(f._request, { url: t.url, method: t.method, body: r, jsonBody: t.body, timeouts: f._getTimeoutsForRequest(t.hostType) });
                if (!t.callback) return v;
                v.then(function(e) { c(function() { t.callback(null, e) }, f._setTimeout || setTimeout) }, function(e) { c(function() { t.callback(e) }, f._setTimeout || setTimeout) })
            }, r.prototype._getSearchParams = function(t, e) { if (void 0 === t || null === t) return e; for (var n in t) null !== n && void 0 !== t[n] && t.hasOwnProperty(n) && (e += "" === e ? "" : "&", e += n + "=" + encodeURIComponent("[object Array]" === Object.prototype.toString.call(t[n]) ? o(t[n]) : t[n])); return e }, r.prototype._computeRequestHeaders = function(t, e) {
                var r = n(2),
                    i = t ? this._ua + ";" + t : this._ua,
                    o = { "x-algolia-agent": i, "x-algolia-application-id": this.applicationID };
                return !1 !== e && (o["x-algolia-api-key"] = this.apiKey), this.userToken && (o["x-algolia-usertoken"] = this.userToken), this.securityTags && (o["x-algolia-tagfilters"] = this.securityTags), this.extraHeaders && r(this.extraHeaders, function(t) { o[t.name] = t.value }), o
            }, r.prototype.search = function(t, e, r) {
                var i = n(10),
                    o = n(7);
                if (!i(t)) throw new Error("Usage: client.search(arrayOfQueries[, callback])");
                "function" == typeof e ? (r = e, e = {}) : void 0 === e && (e = {});
                var s = this,
                    a = { requests: o(t, function(t) { var e = ""; return void 0 !== t.query && (e += "query=" + encodeURIComponent(t.query)), { indexName: t.indexName, params: s._getSearchParams(t.params, e) } }) },
                    u = o(a.requests, function(t, e) { return e + "=" + encodeURIComponent("/1/indexes/" + encodeURIComponent(t.indexName) + "?" + t.params) }).join("&"),
                    c = "/1/indexes/*/queries";
                return void 0 !== e.strategy && (c += "?strategy=" + e.strategy), this._jsonRequest({ cache: this.cache, method: "POST", url: c, body: a, hostType: "read", fallback: { method: "GET", url: "/1/indexes/*", body: { params: u } }, callback: r })
            }, r.prototype.setSecurityTags = function(t) {
                if ("[object Array]" === Object.prototype.toString.call(t)) {
                    for (var e = [], n = 0; n < t.length; ++n)
                        if ("[object Array]" === Object.prototype.toString.call(t[n])) {
                            for (var r = [], i = 0; i < t[n].length; ++i) r.push(t[n][i]);
                            e.push("(" + r.join(",") + ")")
                        } else e.push(t[n]);
                    t = e.join(",")
                }
                this.securityTags = t
            }, r.prototype.setUserToken = function(t) { this.userToken = t }, r.prototype.clearCache = function() { this.cache = {} }, r.prototype.setRequestTimeout = function(t) { t && (this._timeouts.connect = this._timeouts.read = this._timeouts.write = t) }, r.prototype.setTimeouts = function(t) { this._timeouts = t }, r.prototype.getTimeouts = function() { return this._timeouts }, r.prototype._getAppIdData = function() { var t = h.get(this.applicationID); return null !== t && this._cacheAppIdData(t), t }, r.prototype._setAppIdData = function(t) { return t.lastChange = (new Date).getTime(), this._cacheAppIdData(t), h.set(this.applicationID, t) }, r.prototype._checkAppIdData = function() {
                var t = this._getAppIdData(),
                    e = (new Date).getTime();
                return null === t || e - t.lastChange > f ? this._resetInitialAppIdData(t) : t
            }, r.prototype._resetInitialAppIdData = function(t) { var e = t || {}; return e.hostIndexes = { read: 0, write: 0 }, e.timeoutMultiplier = 1, e.shuffleResult = e.shuffleResult || s([1, 2, 3]), this._setAppIdData(e) }, r.prototype._cacheAppIdData = function(t) { this._hostIndexes = t.hostIndexes, this._timeoutMultiplier = t.timeoutMultiplier, this._shuffleResult = t.shuffleResult }, r.prototype._partialAppIdDataUpdate = function(t) {
                var e = n(2),
                    r = this._getAppIdData();
                return e(t, function(t, e) { r[e] = t }), this._setAppIdData(r)
            }, r.prototype._getHostByType = function(t) { return this.hosts[t][this._getHostIndexByType(t)] }, r.prototype._getTimeoutMultiplier = function() { return this._timeoutMultiplier }, r.prototype._getHostIndexByType = function(t) { return this._hostIndexes[t] }, r.prototype._setHostIndexByType = function(t, e) {
                var r = n(4),
                    i = r(this._hostIndexes);
                return i[e] = t, this._partialAppIdDataUpdate({ hostIndexes: i }), t
            }, r.prototype._incrementHostIndex = function(t) { return this._setHostIndexByType((this._getHostIndexByType(t) + 1) % this.hosts[t].length, t) }, r.prototype._incrementTimeoutMultipler = function() { var t = Math.max(this._timeoutMultiplier + 1, 4); return this._partialAppIdDataUpdate({ timeoutMultiplier: t }) }, r.prototype._getTimeoutsForRequest = function(t) { return { connect: this._timeouts.connect * this._timeoutMultiplier, complete: this._timeouts[t] * this._timeoutMultiplier } }
        }, function(t, e, n) {
            function r(t, e) { this.indexName = e, this.as = t, this.typeAheadArgs = null, this.typeAheadValueOption = null, this.cache = {} }
            var i = n(12),
                o = n(29),
                s = n(30);
            t.exports = r, r.prototype.clearCache = function() { this.cache = {} }, r.prototype.search = i("query"), r.prototype.similarSearch = i("similarQuery"), r.prototype.browse = function(t, e, r) {
                var i, o, s = n(32),
                    a = this;
                0 === arguments.length || 1 === arguments.length && "function" == typeof arguments[0] ? (i = 0, r = arguments[0], t = void 0) : "number" == typeof arguments[0] ? (i = arguments[0], "number" == typeof arguments[1] ? o = arguments[1] : "function" == typeof arguments[1] && (r = arguments[1], o = void 0), t = void 0, e = void 0) : "object" == typeof arguments[0] ? ("function" == typeof arguments[1] && (r = arguments[1]), e = arguments[0], t = void 0) : "string" == typeof arguments[0] && "function" == typeof arguments[1] && (r = arguments[1], e = void 0), e = s({}, e || {}, { page: i, hitsPerPage: o, query: t });
                var u = this.as._getSearchParams(e, "");
                return this.as._jsonRequest({ method: "POST", url: "/1/indexes/" + encodeURIComponent(a.indexName) + "/browse", body: { params: u }, hostType: "read", callback: r })
            }, r.prototype.browseFrom = function(t, e) { return this.as._jsonRequest({ method: "POST", url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/browse", body: { cursor: t }, hostType: "read", callback: e }) }, r.prototype.searchForFacetValues = function(t, e) {
                var r = n(4),
                    i = n(33);
                if (void 0 === t.facetName || void 0 === t.facetQuery) throw new Error("Usage: index.searchForFacetValues({facetName, facetQuery, ...params}[, callback])");
                var o = t.facetName,
                    s = i(r(t), function(t) { return "facetName" === t }),
                    a = this.as._getSearchParams(s, "");
                return this.as._jsonRequest({ method: "POST", url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/facets/" + encodeURIComponent(o) + "/query", hostType: "read", body: { params: a }, callback: e })
            }, r.prototype.searchFacet = o(function(t, e) { return this.searchForFacetValues(t, e) }, s("index.searchFacet(params[, callback])", "index.searchForFacetValues(params[, callback])")), r.prototype._search = function(t, e, n, r) { return this.as._jsonRequest({ cache: this.cache, method: "POST", url: e || "/1/indexes/" + encodeURIComponent(this.indexName) + "/query", body: { params: t }, hostType: "read", fallback: { method: "GET", url: "/1/indexes/" + encodeURIComponent(this.indexName), body: { params: t } }, callback: n, additionalUA: r }) }, r.prototype.getObject = function(t, e, n) {
                var r = this;
                1 !== arguments.length && "function" != typeof e || (n = e, e = void 0);
                var i = "";
                if (void 0 !== e) { i = "?attributes="; for (var o = 0; o < e.length; ++o) 0 !== o && (i += ","), i += e[o] }
                return this.as._jsonRequest({ method: "GET", url: "/1/indexes/" + encodeURIComponent(r.indexName) + "/" + encodeURIComponent(t) + i, hostType: "read", callback: n })
            }, r.prototype.getObjects = function(t, e, r) {
                var i = n(10),
                    o = n(7);
                if (!i(t)) throw new Error("Usage: index.getObjects(arrayOfObjectIDs[, callback])");
                var s = this;
                1 !== arguments.length && "function" != typeof e || (r = e, e = void 0);
                var a = { requests: o(t, function(t) { var n = { indexName: s.indexName, objectID: t }; return e && (n.attributesToRetrieve = e.join(",")), n }) };
                return this.as._jsonRequest({ method: "POST", url: "/1/indexes/*/objects", hostType: "read", body: a, callback: r })
            }, r.prototype.as = null, r.prototype.indexName = null, r.prototype.typeAheadArgs = null, r.prototype.typeAheadValueOption = null
        }, function(t, e, n) {
            "use strict";
            var r = n(22),
                i = n(25);
            t.exports = i(r, "(lite) ")
        }, function(t, e, n) {
            "use strict";
            var r = n(52),
                i = r.Promise || n(51).Promise;
            t.exports = function(t, e) {
                function o(t, e, r) {
                    var i = n(4),
                        a = n(26);
                    return r = i(r || {}), void 0 === r.protocol && (r.protocol = a()), r._ua = r._ua || o.ua, new s(t, e, r)
                }

                function s() { t.apply(this, arguments) }
                var a = n(20),
                    u = n(5),
                    c = n(27),
                    l = n(28),
                    h = n(34);
                e = e || "", o.version = n(36), o.ua = "Algolia for vanilla JavaScript " + e + o.version, o.initPlaces = h(o), r.__algolia = { debug: n(6), algoliasearch: o };
                var f = { hasXMLHttpRequest: "XMLHttpRequest" in r, hasXDomainRequest: "XDomainRequest" in r };
                return f.hasXMLHttpRequest && (f.cors = "withCredentials" in new XMLHttpRequest), a(s, t), s.prototype._request = function(t, e) {
                    return new i(function(n, r) {
                        function i() {
                            if (!d) {
                                clearTimeout(p);
                                var t;
                                try { t = { body: JSON.parse(m.responseText), responseText: m.responseText, statusCode: m.status, headers: m.getAllResponseHeaders && m.getAllResponseHeaders() || {} } } catch (e) { t = new u.UnparsableJSON({ more: m.responseText }) }
                                t instanceof u.UnparsableJSON ? r(t) : n(t)
                            }
                        }

                        function o(t) { d || (clearTimeout(p), r(new u.Network({ more: t }))) }

                        function s() { d = !0, m.abort(), r(new u.RequestTimeout) }

                        function a() { v = !0, clearTimeout(p), p = setTimeout(s, e.timeouts.complete) }

                        function l() { v || a() }

                        function h() {!v && m.readyState > 1 && a() }
                        if (!f.cors && !f.hasXDomainRequest) return void r(new u.Network("CORS not supported"));
                        t = c(t, e.headers);
                        var p, d, g = e.body,
                            m = f.cors ? new XMLHttpRequest : new XDomainRequest,
                            v = !1;
                        p = setTimeout(s, e.timeouts.connect), m.onprogress = l, "onreadystatechange" in m && (m.onreadystatechange = h), m.onload = i, m.onerror = o, m instanceof XMLHttpRequest ? m.open(e.method, t, !0) : m.open(e.method, t), f.cors && (g && ("POST" === e.method ? m.setRequestHeader("content-type", "application/x-www-form-urlencoded") : m.setRequestHeader("content-type", "application/json")), m.setRequestHeader("accept", "application/json")), m.send(g)
                    })
                }, s.prototype._request.fallback = function(t, e) {
                    return t = c(t, e.headers), new i(function(n, r) {
                        l(t, e, function(t, e) {
                            if (t) return void r(t);
                            n(e)
                        })
                    })
                }, s.prototype._promise = { reject: function(t) { return i.reject(t) }, resolve: function(t) { return i.resolve(t) }, delay: function(t) { return new i(function(e) { setTimeout(e, t) }) } }, o
            }
        }, function(t, e, n) {
            "use strict";

            function r() { var t = window.document.location.protocol; return "http:" !== t && "https:" !== t && (t = "http:"), t }
            t.exports = r
        }, function(t, e, n) {
            "use strict";

            function r(t, e) { return /\?/.test(t) ? t += "&" : t += "?", t + i(e) }
            t.exports = r;
            var i = n(65)
        }, function(t, e, n) {
            "use strict";

            function r(t, e, n) {
                function r() { e.debug("JSONP: success"), m || f || (m = !0, h || (e.debug("JSONP: Fail. Script loaded but did not call the callback"), a(), n(new i.JSONPScriptFail))) }

                function s() { "loaded" !== this.readyState && "complete" !== this.readyState || r() }

                function a() { clearTimeout(v), d.onload = null, d.onreadystatechange = null, d.onerror = null, p.removeChild(d) }

                function u() { try { delete window[g], delete window[g + "_loaded"] } catch (t) { window[g] = window[g + "_loaded"] = void 0 } }

                function c() { e.debug("JSONP: Script timeout"), f = !0, a(), n(new i.RequestTimeout) }

                function l() { e.debug("JSONP: Script error"), m || f || (a(), n(new i.JSONPScriptError)) }
                if ("GET" !== e.method) return void n(new Error("Method " + e.method + " " + t + " is not supported by JSONP."));
                e.debug("JSONP: start");
                var h = !1,
                    f = !1;
                o += 1;
                var p = document.getElementsByTagName("head")[0],
                    d = document.createElement("script"),
                    g = "algoliaJSONP_" + o,
                    m = !1;
                window[g] = function(t) {
                    if (u(), f) return void e.debug("JSONP: Late answer, ignoring");
                    h = !0, a(), n(null, { body: t })
                }, t += "&callback=" + g, e.jsonBody && e.jsonBody.params && (t += "&" + e.jsonBody.params);
                var v = setTimeout(c, e.timeouts.complete);
                d.onreadystatechange = s, d.onload = r, d.onerror = l, d.async = !0, d.defer = !0, d.src = t, p.appendChild(d)
            }
            t.exports = r;
            var i = n(5),
                o = 0
        }, function(t, e) {
            t.exports = function(t, e) {
                function n() { return r || (console.log(e), r = !0), t.apply(this, arguments) }
                var r = !1;
                return n
            }
        }, function(t, e) { t.exports = function(t, e) { return "algoliasearch: `" + t + "` was replaced by `" + e + "`. Please see https://github.com/algolia/algoliasearch-client-js/wiki/Deprecated#" + t.toLowerCase().replace(".", "").replace("()", "") } }, function(t, e) { t.exports = function(t, e) { e(t, 0) } }, function(t, e, n) {
            var r = n(2);
            t.exports = function t(e) { var n = Array.prototype.slice.call(arguments); return r(n, function(n) { for (var r in n) n.hasOwnProperty(r) && ("object" == typeof e[r] && "object" == typeof n[r] ? e[r] = t({}, e[r], n[r]) : void 0 !== n[r] && (e[r] = n[r])) }), e }
        }, function(t, e, n) {
            t.exports = function(t, e) {
                var r = n(63),
                    i = n(2),
                    o = {};
                return i(r(t), function(n) {!0 !== e(n) && (o[n] = t[n]) }), o
            }
        }, function(t, e, n) {
            function r(t) {
                return function(e, r, o) {
                    var s = n(4);
                    o = o && s(o) || {}, o.hosts = o.hosts || ["places-dsn.algolia.net", "places-1.algolianet.com", "places-2.algolianet.com", "places-3.algolianet.com"], 0 !== arguments.length && "object" != typeof e && void 0 !== e || (e = "", r = "", o._allowEmptyCredentials = !0);
                    var a = t(e, r, o),
                        u = a.initIndex("places");
                    return u.search = i("query", "/1/places/query"), u
                }
            }
            t.exports = r;
            var i = n(12)
        }, function(t, e, n) {
            (function(e) {
                function r(t, e) { return u("localStorage failed with", e), s(), a = l, a.get(t) }

                function i(t, e) { return 1 === arguments.length ? a.get(t) : a.set(t, e) }

                function o() { try { return "localStorage" in e && null !== e.localStorage && (e.localStorage[c] || e.localStorage.setItem(c, JSON.stringify({})), !0) } catch (t) { return !1 } }

                function s() { try { e.localStorage.removeItem(c) } catch (t) {} }
                var a, u = n(6)("algoliasearch:src/hostIndexState.js"),
                    c = "algoliasearch-client-js",
                    l = { state: {}, set: function(t, e) { return this.state[t] = e, this.state[t] }, get: function(t) { return this.state[t] || null } },
                    h = { set: function(t, n) { l.set(t, n); try { var i = JSON.parse(e.localStorage[c]); return i[t] = n, e.localStorage[c] = JSON.stringify(i), i[t] } catch (e) { return r(t, e) } }, get: function(t) { try { return JSON.parse(e.localStorage[c])[t] || null } catch (e) { return r(t, e) } } };
                a = o() ? h : l, t.exports = { get: i, set: i, supportsLocalStorage: o }
            }).call(e, n(3))
        }, function(t, e, n) {
            "use strict";
            t.exports = "3.22.1"
        }, function(t, e, n) {
            "use strict";
            t.exports = n(45)
        }, function(t, e, n) {
            "use strict";

            function r(t) {
                t = t || {}, t.templates = t.templates || {}, t.source || l.error("missing source"), t.name && !s(t.name) && l.error("invalid dataset name: " + t.name), this.query = null, this._isEmpty = !0, this.highlight = !!t.highlight, this.name = void 0 === t.name || null === t.name ? l.getUniqueId() : t.name, this.source = t.source, this.displayFn = i(t.display || t.displayKey), this.templates = o(t.templates, this.displayFn), this.css = l.mixin({}, p, t.appendTo ? p.appendTo : {}), this.cssClasses = t.cssClasses = l.mixin({}, p.defaultClasses, t.cssClasses || {}), this.cssClasses.prefix = t.cssClasses.formattedPrefix || l.formatPrefix(this.cssClasses.prefix, this.cssClasses.noPrefix);
                var e = l.className(this.cssClasses.prefix, this.cssClasses.dataset);
                this.$el = t.$menu && t.$menu.find(e + "-" + this.name).length > 0 ? h.element(t.$menu.find(e + "-" + this.name)[0]) : h.element(f.dataset.replace("%CLASS%", this.name).replace("%PREFIX%", this.cssClasses.prefix).replace("%DATASET%", this.cssClasses.dataset)), this.$menu = t.$menu
            }

            function i(t) {
                function e(e) { return e[t] }
                return t = t || "value", l.isFunction(t) ? t : e
            }

            function o(t, e) {
                function n(t) { return "<p>" + e(t) + "</p>" }
                return { empty: t.empty && l.templatify(t.empty), header: t.header && l.templatify(t.header), footer: t.footer && l.templatify(t.footer), suggestion: t.suggestion || n }
            }

            function s(t) { return /^[_a-zA-Z0-9-]+$/.test(t) }
            var a = "aaDataset",
                u = "aaValue",
                c = "aaDatum",
                l = n(0),
                h = n(1),
                f = n(14),
                p = n(8),
                d = n(9);
            r.extractDatasetName = function(t) { return h.element(t).data(a) }, r.extractValue = function(t) { return h.element(t).data(u) }, r.extractDatum = function(t) { var e = h.element(t).data(c); return "string" == typeof e && (e = JSON.parse(e)), e }, l.mixin(r.prototype, d, {
                _render: function(t, e) {
                    function n() { var e = [].slice.call(arguments, 0); return e = [{ query: t, isEmpty: !0 }].concat(e), p.templates.empty.apply(this, e) }

                    function r() {
                        function t(t) { var e, n = f.suggestion.replace("%PREFIX%", o.cssClasses.prefix).replace("%SUGGESTION%", o.cssClasses.suggestion); return e = h.element(n).attr({ role: "option", id: ["option", Math.floor(1e8 * Math.random())].join("-") }).append(p.templates.suggestion.apply(this, [t].concat(i))), e.data(a, p.name), e.data(u, p.displayFn(t) || void 0), e.data(c, JSON.stringify(t)), e.children().each(function() { h.element(this).css(o.css.suggestionChild) }), e }
                        var n, r, i = [].slice.call(arguments, 0),
                            o = this,
                            s = f.suggestions.replace("%PREFIX%", this.cssClasses.prefix).replace("%SUGGESTIONS%", this.cssClasses.suggestions);
                        return n = h.element(s).css(this.css.suggestions), r = l.map(e, t), n.append.apply(n, r), n
                    }

                    function i() { var e = [].slice.call(arguments, 0); return e = [{ query: t, isEmpty: !s }].concat(e), p.templates.header.apply(this, e) }

                    function o() { var e = [].slice.call(arguments, 0); return e = [{ query: t, isEmpty: !s }].concat(e), p.templates.footer.apply(this, e) }
                    if (this.$el) {
                        var s, p = this,
                            d = [].slice.call(arguments, 2);
                        this.$el.empty(), s = e && e.length, this._isEmpty = !s, !s && this.templates.empty ? this.$el.html(n.apply(this, d)).prepend(p.templates.header ? i.apply(this, d) : null).append(p.templates.footer ? o.apply(this, d) : null) : s && this.$el.html(r.apply(this, d)).prepend(p.templates.header ? i.apply(this, d) : null).append(p.templates.footer ? o.apply(this, d) : null), this.$menu && this.$menu.addClass(this.cssClasses.prefix + (s ? "with" : "without") + "-" + this.name).removeClass(this.cssClasses.prefix + (s ? "without" : "with") + "-" + this.name), this.trigger("rendered", t)
                    }
                },
                getRoot: function() { return this.$el },
                update: function(t) {
                    function e(e) {
                        if (!n.canceled && t === n.query) {
                            var r = [].slice.call(arguments, 1);
                            r = [t, e].concat(r), n._render.apply(n, r)
                        }
                    }
                    var n = this;
                    this.query = t, this.canceled = !1, this.source(t, e)
                },
                cancel: function() { this.canceled = !0 },
                clear: function() { this.cancel(), this.$el.empty(), this.trigger("rendered", "") },
                isEmpty: function() { return this._isEmpty },
                destroy: function() { this.$el = null }
            }), t.exports = r
        }, function(t, e, n) {
            "use strict";

            function r(t) {
                var e, n, r, a = this;
                t = t || {}, t.menu || o.error("menu is required"), o.isArray(t.datasets) || o.isObject(t.datasets) || o.error("1 or more datasets required"), t.datasets || o.error("datasets is required"), this.isOpen = !1, this.isEmpty = !0, this.minLength = t.minLength || 0, this.templates = {}, this.appendTo = t.appendTo || !1, this.css = o.mixin({}, c, t.appendTo ? c.appendTo : {}), this.cssClasses = t.cssClasses = o.mixin({}, c.defaultClasses, t.cssClasses || {}), this.cssClasses.prefix = t.cssClasses.formattedPrefix || o.formatPrefix(this.cssClasses.prefix, this.cssClasses.noPrefix), e = o.bind(this._onSuggestionClick, this), n = o.bind(this._onSuggestionMouseEnter, this), r = o.bind(this._onSuggestionMouseLeave, this);
                var u = o.className(this.cssClasses.prefix, this.cssClasses.suggestion);
                this.$menu = s.element(t.menu).on("click.aa", u, e).on("mouseenter.aa", u, n).on("mouseleave.aa", u, r), this.$container = t.appendTo ? t.wrapper : this.$menu, t.templates && t.templates.header && (this.templates.header = o.templatify(t.templates.header), this.$menu.prepend(this.templates.header())), t.templates && t.templates.empty && (this.templates.empty = o.templatify(t.templates.empty), this.$empty = s.element('<div class="' + o.className(this.cssClasses.prefix, this.cssClasses.empty, !0) + '"></div>'), this.$menu.append(this.$empty)), this.datasets = o.map(t.datasets, function(e) { return i(a.$menu, e, t.cssClasses) }), o.each(this.datasets, function(t) {
                    var e = t.getRoot();
                    e && 0 === e.parent().length && a.$menu.append(e), t.onSync("rendered", a._onRendered, a)
                }), t.templates && t.templates.footer && (this.templates.footer = o.templatify(t.templates.footer), this.$menu.append(this.templates.footer()));
                var l = this;
                s.element(window).resize(function() { l._redraw() })
            }

            function i(t, e, n) { return new r.Dataset(o.mixin({ $menu: t, cssClasses: n }, e)) }
            var o = n(0),
                s = n(1),
                a = n(9),
                u = n(38),
                c = n(8);
            o.mixin(r.prototype, a, {
                _onSuggestionClick: function(t) { this.trigger("suggestionClicked", s.element(t.currentTarget)) },
                _onSuggestionMouseEnter: function(t) {
                    var e = s.element(t.currentTarget);
                    e.hasClass(o.className(this.cssClasses.prefix, this.cssClasses.cursor, !0)) || (this._removeCursor(), this._setCursor(e, !1))
                },
                _onSuggestionMouseLeave: function(t) {
                    if (t.relatedTarget) { if (s.element(t.relatedTarget).closest("." + o.className(this.cssClasses.prefix, this.cssClasses.cursor, !0)).length > 0) return }
                    this._removeCursor(), this.trigger("cursorRemoved")
                },
                _onRendered: function(t, e) {
                    function n(t) { return t.isEmpty() }

                    function r(t) { return t.templates && t.templates.empty }
                    if (this.isEmpty = o.every(this.datasets, n), this.isEmpty)
                        if (e.length >= this.minLength && this.trigger("empty"), this.$empty)
                            if (e.length < this.minLength) this._hide();
                            else {
                                var i = this.templates.empty({ query: this.datasets[0] && this.datasets[0].query });
                                this.$empty.html(i), this._show()
                            }
                    else o.any(this.datasets, r) ? e.length < this.minLength ? this._hide() : this._show() : this._hide();
                    else this.isOpen && (this.$empty && this.$empty.empty(), e.length >= this.minLength ? this._show() : this._hide());
                    this.trigger("datasetRendered")
                },
                _hide: function() { this.$container.hide() },
                _show: function() { this.$container.css("display", "block"), this._redraw(), this.trigger("shown") },
                _redraw: function() { this.isOpen && this.appendTo && this.trigger("redrawn") },
                _getSuggestions: function() { return this.$menu.find(o.className(this.cssClasses.prefix, this.cssClasses.suggestion)) },
                _getCursor: function() { return this.$menu.find(o.className(this.cssClasses.prefix, this.cssClasses.cursor)).first() },
                _setCursor: function(t, e) { t.first().addClass(o.className(this.cssClasses.prefix, this.cssClasses.cursor, !0)).attr("aria-selected", "true"), this.trigger("cursorMoved", e) },
                _removeCursor: function() { this._getCursor().removeClass(o.className(this.cssClasses.prefix, this.cssClasses.cursor, !0)).removeAttr("aria-selected") },
                _moveCursor: function(t) {
                    var e, n, r, i;
                    if (this.isOpen) {
                        if (n = this._getCursor(), e = this._getSuggestions(), this._removeCursor(), r = e.index(n) + t, -1 === (r = (r + 1) % (e.length + 1) - 1)) return void this.trigger("cursorRemoved");
                        r < -1 && (r = e.length - 1), this._setCursor(i = e.eq(r), !0), this._ensureVisible(i)
                    }
                },
                _ensureVisible: function(t) {
                    var e, n, r, i;
                    e = t.position().top, n = e + t.height() + parseInt(t.css("margin-top"), 10) + parseInt(t.css("margin-bottom"), 10), r = this.$menu.scrollTop(), i = this.$menu.height() + parseInt(this.$menu.css("paddingTop"), 10) + parseInt(this.$menu.css("paddingBottom"), 10), e < 0 ? this.$menu.scrollTop(r + e) : i < n && this.$menu.scrollTop(r + (n - i))
                },
                close: function() { this.isOpen && (this.isOpen = !1, this._removeCursor(), this._hide(), this.trigger("closed")) },
                open: function() { this.isOpen || (this.isOpen = !0, this.isEmpty || this._show(), this.trigger("opened")) },
                setLanguageDirection: function(t) { this.$menu.css("ltr" === t ? this.css.ltr : this.css.rtl) },
                moveCursorUp: function() { this._moveCursor(-1) },
                moveCursorDown: function() { this._moveCursor(1) },
                getDatumForSuggestion: function(t) { var e = null; return t.length && (e = { raw: u.extractDatum(t), value: u.extractValue(t), datasetName: u.extractDatasetName(t) }), e },
                getCurrentCursor: function() { return this._getCursor().first() },
                getDatumForCursor: function() { return this.getDatumForSuggestion(this._getCursor().first()) },
                getDatumForTopSuggestion: function() { return this.getDatumForSuggestion(this._getSuggestions().first()) },
                cursorTopSuggestion: function() { this._setCursor(this._getSuggestions().first(), !1) },
                update: function(t) {
                    function e(e) { e.update(t) }
                    o.each(this.datasets, e)
                },
                empty: function() {
                    function t(t) { t.clear() }
                    o.each(this.datasets, t), this.isEmpty = !0
                },
                isVisible: function() { return this.isOpen && !this.isEmpty },
                destroy: function() {
                    function t(t) { t.destroy() }
                    this.$menu.off(".aa"), this.$menu = null, o.each(this.datasets, t)
                }
            }), r.Dataset = u, t.exports = r
        }, function(t, e, n) {
            "use strict";

            function r(t) {
                var e, n, r, o, s = this;
                t = t || {}, t.input || u.error("input is missing"), e = u.bind(this._onBlur, this), n = u.bind(this._onFocus, this), r = u.bind(this._onKeydown, this), o = u.bind(this._onInput, this), this.$hint = c.element(t.hint), this.$input = c.element(t.input).on("blur.aa", e).on("focus.aa", n).on("keydown.aa", r), 0 === this.$hint.length && (this.setHint = this.getHint = this.clearHint = this.clearHintIfInvalid = u.noop), u.isMsie() ? this.$input.on("keydown.aa keypress.aa cut.aa paste.aa", function(t) { a[t.which || t.keyCode] || u.defer(u.bind(s._onInput, s, t)) }) : this.$input.on("input.aa", o), this.query = this.$input.val(), this.$overflowHelper = i(this.$input)
            }

            function i(t) { return c.element('<pre aria-hidden="true"></pre>').css({ position: "absolute", visibility: "hidden", whiteSpace: "pre", fontFamily: t.css("font-family"), fontSize: t.css("font-size"), fontStyle: t.css("font-style"), fontVariant: t.css("font-variant"), fontWeight: t.css("font-weight"), wordSpacing: t.css("word-spacing"), letterSpacing: t.css("letter-spacing"), textIndent: t.css("text-indent"), textRendering: t.css("text-rendering"), textTransform: t.css("text-transform") }).insertAfter(t) }

            function o(t, e) { return r.normalizeQuery(t) === r.normalizeQuery(e) }

            function s(t) { return t.altKey || t.ctrlKey || t.metaKey || t.shiftKey }
            var a;
            a = { 9: "tab", 27: "esc", 37: "left", 39: "right", 13: "enter", 38: "up", 40: "down" };
            var u = n(0),
                c = n(1),
                l = n(9);
            r.normalizeQuery = function(t) { return (t || "").replace(/^\s*/g, "").replace(/\s{2,}/g, " ") }, u.mixin(r.prototype, l, {
                _onBlur: function() { this.resetInputValue(), this.$input.removeAttr("aria-activedescendant"), this.trigger("blurred") },
                _onFocus: function() { this.trigger("focused") },
                _onKeydown: function(t) {
                    var e = a[t.which || t.keyCode];
                    this._managePreventDefault(e, t), e && this._shouldTrigger(e, t) && this.trigger(e + "Keyed", t)
                },
                _onInput: function() { this._checkInputValue() },
                _managePreventDefault: function(t, e) {
                    var n, r, i;
                    switch (t) {
                        case "tab":
                            r = this.getHint(), i = this.getInputValue(), n = r && r !== i && !s(e);
                            break;
                        case "up":
                        case "down":
                            n = !s(e);
                            break;
                        default:
                            n = !1
                    }
                    n && e.preventDefault()
                },
                _shouldTrigger: function(t, e) {
                    var n;
                    switch (t) {
                        case "tab":
                            n = !s(e);
                            break;
                        default:
                            n = !0
                    }
                    return n
                },
                _checkInputValue: function() {
                    var t, e, n;
                    t = this.getInputValue(), e = o(t, this.query), n = !(!e || !this.query) && this.query.length !== t.length, this.query = t, e ? n && this.trigger("whitespaceChanged", this.query) : this.trigger("queryChanged", this.query)
                },
                focus: function() { this.$input.focus() },
                blur: function() { this.$input.blur() },
                getQuery: function() { return this.query },
                setQuery: function(t) { this.query = t },
                getInputValue: function() { return this.$input.val() },
                setInputValue: function(t, e) { void 0 === t && (t = this.query), this.$input.val(t), e ? this.clearHint() : this._checkInputValue() },
                expand: function() { this.$input.attr("aria-expanded", "true") },
                collapse: function() { this.$input.attr("aria-expanded", "false") },
                setActiveDescendant: function(t) { this.$input.attr("aria-activedescendant", t) },
                removeActiveDescendant: function() { this.$input.removeAttr("aria-activedescendant") },
                resetInputValue: function() { this.setInputValue(this.query, !0) },
                getHint: function() { return this.$hint.val() },
                setHint: function(t) { this.$hint.val(t) },
                clearHint: function() { this.setHint("") },
                clearHintIfInvalid: function() {
                    var t, e, n, r;
                    t = this.getInputValue(), e = this.getHint(), n = t !== e && 0 === e.indexOf(t), (r = "" !== t && n && !this.hasOverflow()) || this.clearHint()
                },
                getLanguageDirection: function() { return (this.$input.css("direction") || "ltr").toLowerCase() },
                hasOverflow: function() { var t = this.$input.width() - 2; return this.$overflowHelper.text(this.getInputValue()), this.$overflowHelper.width() >= t },
                isCursorAtEnd: function() { var t, e, n; return t = this.$input.val().length, e = this.$input[0].selectionStart, u.isNumber(e) ? e === t : !document.selection || (n = document.selection.createRange(), n.moveStart("character", -t), t === n.text.length) },
                destroy: function() { this.$hint.off(".aa"), this.$input.off(".aa"), this.$hint = this.$input = this.$overflowHelper = null }
            }), t.exports = r
        }, function(t, e, n) {
            "use strict";

            function r(t) {
                var e, n;
                if (t = t || {}, t.input || u.error("missing input"), this.isActivated = !1, this.debug = !!t.debug, this.autoselect = !!t.autoselect, this.autoselectOnBlur = !!t.autoselectOnBlur, this.openOnFocus = !!t.openOnFocus, this.minLength = u.isNumber(t.minLength) ? t.minLength : 1, this.autoWidth = void 0 === t.autoWidth || !!t.autoWidth, t.hint = !!t.hint, t.hint && t.appendTo) throw new Error("[autocomplete.js] hint and appendTo options can't be used at the same time");
                this.css = t.css = u.mixin({}, d, t.appendTo ? d.appendTo : {}), this.cssClasses = t.cssClasses = u.mixin({}, d.defaultClasses, t.cssClasses || {}), this.cssClasses.prefix = t.cssClasses.formattedPrefix = u.formatPrefix(this.cssClasses.prefix, this.cssClasses.noPrefix), this.listboxId = t.listboxId = [this.cssClasses.root, "listbox", u.getUniqueId()].join("-");
                var o = i(t);
                this.$node = o.wrapper;
                var s = this.$input = o.input;
                e = o.menu, n = o.hint, t.dropdownMenuContainer && c.element(t.dropdownMenuContainer).css("position", "relative").append(e.css("top", "0")), s.on("blur.aa", function(t) {
                    var n = document.activeElement;
                    u.isMsie() && (e[0] === n || e[0].contains(n)) && (t.preventDefault(), t.stopImmediatePropagation(), u.defer(function() { s.focus() }))
                }), e.on("mousedown.aa", function(t) { t.preventDefault() }), this.eventBus = t.eventBus || new l({ el: s }), this.dropdown = new r.Dropdown({ appendTo: t.appendTo, wrapper: this.$node, menu: e, datasets: t.datasets, templates: t.templates, cssClasses: t.cssClasses, minLength: this.minLength }).onSync("suggestionClicked", this._onSuggestionClicked, this).onSync("cursorMoved", this._onCursorMoved, this).onSync("cursorRemoved", this._onCursorRemoved, this).onSync("opened", this._onOpened, this).onSync("closed", this._onClosed, this).onSync("shown", this._onShown, this).onSync("empty", this._onEmpty, this).onSync("redrawn", this._onRedrawn, this).onAsync("datasetRendered", this._onDatasetRendered, this), this.input = new r.Input({ input: s, hint: n }).onSync("focused", this._onFocused, this).onSync("blurred", this._onBlurred, this).onSync("enterKeyed", this._onEnterKeyed, this).onSync("tabKeyed", this._onTabKeyed, this).onSync("escKeyed", this._onEscKeyed, this).onSync("upKeyed", this._onUpKeyed, this).onSync("downKeyed", this._onDownKeyed, this).onSync("leftKeyed", this._onLeftKeyed, this).onSync("rightKeyed", this._onRightKeyed, this).onSync("queryChanged", this._onQueryChanged, this).onSync("whitespaceChanged", this._onWhitespaceChanged, this), this._bindKeyboardShortcuts(t), this._setLanguageDirection()
            }

            function i(t) {
                var e, n, r, i;
                e = c.element(t.input), n = c.element(p.wrapper.replace("%ROOT%", t.cssClasses.root)).css(t.css.wrapper), t.appendTo || "block" !== e.css("display") || "table" !== e.parent().css("display") || n.css("display", "table-cell");
                var s = p.dropdown.replace("%PREFIX%", t.cssClasses.prefix).replace("%DROPDOWN_MENU%", t.cssClasses.dropdownMenu);
                r = c.element(s).css(t.css.dropdown).attr({ role: "listbox", id: t.listboxId }), t.templates && t.templates.dropdownMenu && r.html(u.templatify(t.templates.dropdownMenu)()), i = e.clone().css(t.css.hint).css(o(e)), i.val("").addClass(u.className(t.cssClasses.prefix, t.cssClasses.hint, !0)).removeAttr("id name placeholder required").prop("readonly", !0).attr({ "aria-hidden": "true", autocomplete: "off", spellcheck: "false", tabindex: -1 }), i.removeData && i.removeData(), e.data(a, { "aria-autocomplete": e.attr("aria-autocomplete"), "aria-expanded": e.attr("aria-expanded"), "aria-owns": e.attr("aria-owns"), autocomplete: e.attr("autocomplete"), dir: e.attr("dir"), role: e.attr("role"), spellcheck: e.attr("spellcheck"), style: e.attr("style"), type: e.attr("type") }), e.addClass(u.className(t.cssClasses.prefix, t.cssClasses.input, !0)).attr({ autocomplete: "off", spellcheck: !1, role: "combobox", "aria-autocomplete": t.datasets && t.datasets[0] && t.datasets[0].displayKey ? "both" : "list", "aria-expanded": "false", "aria-labelledby": e.attr("placeholder") ? e.attr("id") : null, "aria-owns": t.listboxId }).css(t.hint ? t.css.input : t.css.inputWithNoHint);
                try { e.attr("dir") || e.attr("dir", "auto") } catch (t) {}
                return n = t.appendTo ? n.appendTo(c.element(t.appendTo).eq(0)).eq(0) : e.wrap(n).parent(), n.prepend(t.hint ? i : null).append(r), { wrapper: n, input: e, hint: i, menu: r }
            }

            function o(t) { return { backgroundAttachment: t.css("background-attachment"), backgroundClip: t.css("background-clip"), backgroundColor: t.css("background-color"), backgroundImage: t.css("background-image"), backgroundOrigin: t.css("background-origin"), backgroundPosition: t.css("background-position"), backgroundRepeat: t.css("background-repeat"), backgroundSize: t.css("background-size") } }

            function s(t, e) {
                var n = t.find(u.className(e.prefix, e.input));
                u.each(n.data(a), function(t, e) { void 0 === t ? n.removeAttr(e) : n.attr(e, t) }), n.detach().removeClass(u.className(e.prefix, e.input, !0)).insertAfter(t), n.removeData && n.removeData(a), t.remove()
            }
            var a = "aaAttrs",
                u = n(0),
                c = n(1),
                l = n(13),
                h = n(40),
                f = n(39),
                p = n(14),
                d = n(8);
            u.mixin(r.prototype, {
                _bindKeyboardShortcuts: function(t) {
                    if (t.keyboardShortcuts) {
                        var e = this.$input,
                            n = [];
                        u.each(t.keyboardShortcuts, function(t) { "string" == typeof t && (t = t.toUpperCase().charCodeAt(0)), n.push(t) }), c.element(document).keydown(function(t) {
                            var r = t.target || t.srcElement,
                                i = r.tagName;
                            if (!r.isContentEditable && "INPUT" !== i && "SELECT" !== i && "TEXTAREA" !== i) { var o = t.which || t.keyCode; - 1 !== n.indexOf(o) && (e.focus(), t.stopPropagation(), t.preventDefault()) }
                        })
                    }
                },
                _onSuggestionClicked: function(t, e) {
                    var n;
                    (n = this.dropdown.getDatumForSuggestion(e)) && this._select(n)
                },
                _onCursorMoved: function(t, e) {
                    var n = this.dropdown.getDatumForCursor(),
                        r = this.dropdown.getCurrentCursor().attr("id");
                    this.input.setActiveDescendant(r), n && (e && this.input.setInputValue(n.value, !0), this.eventBus.trigger("cursorchanged", n.raw, n.datasetName))
                },
                _onCursorRemoved: function() { this.input.resetInputValue(), this._updateHint(), this.eventBus.trigger("cursorremoved") },
                _onDatasetRendered: function() { this._updateHint(), this.eventBus.trigger("updated") },
                _onOpened: function() { this._updateHint(), this.input.expand(), this.eventBus.trigger("opened") },
                _onEmpty: function() { this.eventBus.trigger("empty") },
                _onRedrawn: function() {
                    this.$node.css("top", "0px"), this.$node.css("left", "0px");
                    var t = this.$input[0].getBoundingClientRect();
                    this.autoWidth && this.$node.css("width", t.width + "px");
                    var e = this.$node[0].getBoundingClientRect(),
                        n = t.bottom - e.top;
                    this.$node.css("top", n + "px");
                    var r = t.left - e.left;
                    this.$node.css("left", r + "px"), this.eventBus.trigger("redrawn")
                },
                _onShown: function() { this.eventBus.trigger("shown"), this.autoselect && this.dropdown.cursorTopSuggestion() },
                _onClosed: function() { this.input.clearHint(), this.input.removeActiveDescendant(), this.input.collapse(), this.eventBus.trigger("closed") },
                _onFocused: function() {
                    if (this.isActivated = !0, this.openOnFocus) {
                        var t = this.input.getQuery();
                        t.length >= this.minLength ? this.dropdown.update(t) : this.dropdown.empty(), this.dropdown.open()
                    }
                },
                _onBlurred: function() {
                    var t, e;
                    t = this.dropdown.getDatumForCursor(), e = this.dropdown.getDatumForTopSuggestion(), this.debug || (this.autoselectOnBlur && t ? this._select(t) : this.autoselectOnBlur && e ? this._select(e) : (this.isActivated = !1, this.dropdown.empty(), this.dropdown.close()))
                },
                _onEnterKeyed: function(t, e) {
                    var n, r;
                    n = this.dropdown.getDatumForCursor(), r = this.dropdown.getDatumForTopSuggestion(), n ? (this._select(n), e.preventDefault()) : this.autoselect && r && (this._select(r), e.preventDefault())
                },
                _onTabKeyed: function(t, e) {
                    var n;
                    (n = this.dropdown.getDatumForCursor()) ? (this._select(n), e.preventDefault()) : this._autocomplete(!0)
                },
                _onEscKeyed: function() { this.dropdown.close(), this.input.resetInputValue() },
                _onUpKeyed: function() {
                    var t = this.input.getQuery();
                    this.dropdown.isEmpty && t.length >= this.minLength ? this.dropdown.update(t) : this.dropdown.moveCursorUp(), this.dropdown.open()
                },
                _onDownKeyed: function() {
                    var t = this.input.getQuery();
                    this.dropdown.isEmpty && t.length >= this.minLength ? this.dropdown.update(t) : this.dropdown.moveCursorDown(), this.dropdown.open()
                },
                _onLeftKeyed: function() { "rtl" === this.dir && this._autocomplete() },
                _onRightKeyed: function() { "ltr" === this.dir && this._autocomplete() },
                _onQueryChanged: function(t, e) { this.input.clearHintIfInvalid(), e.length >= this.minLength ? this.dropdown.update(e) : this.dropdown.empty(), this.dropdown.open(), this._setLanguageDirection() },
                _onWhitespaceChanged: function() { this._updateHint(), this.dropdown.open() },
                _setLanguageDirection: function() {
                    var t = this.input.getLanguageDirection();
                    this.dir !== t && (this.dir = t, this.$node.css("direction", t), this.dropdown.setLanguageDirection(t))
                },
                _updateHint: function() {
                    var t, e, n, r, i, o;
                    t = this.dropdown.getDatumForTopSuggestion(), t && this.dropdown.isVisible() && !this.input.hasOverflow() ? (e = this.input.getInputValue(), n = h.normalizeQuery(e), r = u.escapeRegExChars(n), i = new RegExp("^(?:" + r + ")(.+$)", "i"), o = i.exec(t.value), o ? this.input.setHint(e + o[1]) : this.input.clearHint()) : this.input.clearHint()
                },
                _autocomplete: function(t) {
                    var e, n, r, i;
                    e = this.input.getHint(), n = this.input.getQuery(), r = t || this.input.isCursorAtEnd(), e && n !== e && r && (i = this.dropdown.getDatumForTopSuggestion(), i && this.input.setInputValue(i.value), this.eventBus.trigger("autocompleted", i.raw, i.datasetName))
                },
                _select: function(t) { void 0 !== t.value && this.input.setQuery(t.value), this.input.setInputValue(t.value, !0), this._setLanguageDirection(), !1 === this.eventBus.trigger("selected", t.raw, t.datasetName).isDefaultPrevented() && (this.dropdown.close(), u.defer(u.bind(this.dropdown.empty, this.dropdown))) },
                open: function() {
                    if (!this.isActivated) {
                        var t = this.input.getInputValue();
                        t.length >= this.minLength ? this.dropdown.update(t) : this.dropdown.empty()
                    }
                    this.dropdown.open()
                },
                close: function() { this.dropdown.close() },
                setVal: function(t) { t = u.toStr(t), this.isActivated ? this.input.setInputValue(t) : (this.input.setQuery(t), this.input.setInputValue(t, !0)), this._setLanguageDirection() },
                getVal: function() { return this.input.getQuery() },
                destroy: function() { this.input.destroy(), this.dropdown.destroy(), s(this.$node, this.cssClasses), this.$node = null },
                getWrapper: function() { return this.dropdown.$container[0] }
            }), r.Dropdown = f, r.Input = h, r.sources = n(43), t.exports = r
        }, function(t, e, n) {
            "use strict";
            var r = n(0),
                i = n(16),
                o = n(15);
            t.exports = function(t, e) {
                function n(n, i) {
                    t.search(n, e, function(t, e) {
                        if (t) return void r.error(t.message);
                        i(e.hits, e)
                    })
                }
                var s = o(t.as._ua);
                return s && s[0] >= 3 && s[1] > 20 && (e = e || {}, e.additionalUA = "autocomplete.js " + i), n
            }
        }, function(t, e, n) {
            "use strict";
            t.exports = { hits: n(42), popularIn: n(44) }
        }, function(t, e, n) {
            "use strict";
            var r = n(0),
                i = n(16),
                o = n(15);
            t.exports = function(t, e, n, s) {
                function a(a, u) {
                    t.search(a, e, function(t, a) {
                        if (t) return void r.error(t.message);
                        if (a.hits.length > 0) {
                            var h = a.hits[0],
                                f = r.mixin({ hitsPerPage: 0 }, n);
                            delete f.source, delete f.index;
                            var p = o(l.as._ua);
                            return p && p[0] >= 3 && p[1] > 20 && (e.additionalUA = "autocomplete.js " + i), void l.search(c(h), f, function(t, e) {
                                if (t) return void r.error(t.message);
                                var n = [];
                                if (s.includeAll) {
                                    var i = s.allTitle || "All departments";
                                    n.push(r.mixin({ facet: { value: i, count: e.nbHits } }, r.cloneDeep(h)))
                                }
                                r.each(e.facets, function(t, e) { r.each(t, function(t, i) { n.push(r.mixin({ facet: { facet: e, value: i, count: t } }, r.cloneDeep(h))) }) });
                                for (var o = 1; o < a.hits.length; ++o) n.push(a.hits[o]);
                                u(n, a)
                            })
                        }
                        u([])
                    })
                }
                var u = o(t.as._ua);
                if (u && u[0] >= 3 && u[1] > 20 && (e = e || {}, e.additionalUA = "autocomplete.js " + i), !n.source) return r.error("Missing 'source' key");
                var c = r.isFunction(n.source) ? n.source : function(t) { return t[n.source] };
                if (!n.index) return r.error("Missing 'index' key");
                var l = n.index;
                return s = s || {}, a
            }
        }, function(t, e, n) {
            "use strict";

            function r(t, e, n, r) {
                n = o.isArray(n) ? n : [].slice.call(arguments, 2);
                var c = i(t).each(function(t, o) {
                    var c = i(o),
                        l = new u({ el: c }),
                        h = r || new a({ input: c, eventBus: l, dropdownMenuContainer: e.dropdownMenuContainer, hint: void 0 === e.hint || !!e.hint, minLength: e.minLength, autoselect: e.autoselect, autoselectOnBlur: e.autoselectOnBlur, openOnFocus: e.openOnFocus, templates: e.templates, debug: e.debug, cssClasses: e.cssClasses, datasets: n, keyboardShortcuts: e.keyboardShortcuts, appendTo: e.appendTo, autoWidth: e.autoWidth });
                    c.data(s, h)
                });
                return c.autocomplete = {}, o.each(["open", "close", "getVal", "setVal", "destroy", "getWrapper"], function(t) {
                    c.autocomplete[t] = function() {
                        var e, n = arguments;
                        return c.each(function(r, o) {
                            var a = i(o).data(s);
                            e = a[t].apply(a, n)
                        }), e
                    }
                }), c
            }
            var i = n(17);
            n(1).element = i;
            var o = n(0);
            o.isArray = i.isArray, o.isFunction = i.isFunction, o.isObject = i.isPlainObject, o.bind = i.proxy, o.each = function(t, e) {
                function n(t, n) { return e(n, t) }
                i.each(t, n)
            }, o.map = i.map, o.mixin = i.extend, o.Event = i.Event;
            var s = "aaAutocomplete",
                a = n(41),
                u = n(13);
            r.sources = a.sources, r.escapeHighlightedString = o.escapeHighlightedString;
            var c = "autocomplete" in window,
                l = window.autocomplete;
            r.noConflict = function() { return c ? window.autocomplete = l : delete window.autocomplete, r }, t.exports = r
        }, function(t, e, n) {
            "use strict";
            var r = n(21),
                i = function(t) { return t && t.__esModule ? t : { default: t } }(r);
            t.exports = i.default
        }, function(t, e, n) {
            "use strict";

            function r(t) { return t && t.__esModule ? t : { default: t } }

            function i(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }
            Object.defineProperty(e, "__esModule", { value: !0 });
            var o = Object.assign || function(t) { for (var e = 1; e < arguments.length; e++) { var n = arguments[e]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]) } return t },
                s = function() {
                    function t(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }
                    return function(e, n, r) { return n && t(e.prototype, n), r && t(e, r), e }
                }(),
                a = n(54),
                u = r(a),
                c = n(24),
                l = r(c),
                h = n(37),
                f = r(h),
                p = n(48),
                d = r(p),
                g = n(49),
                m = r(g),
                v = n(18),
                y = r(v),
                b = n(19),
                w = r(b),
                _ = function() {
                    function t(e) {
                        var n = e.apiKey,
                            r = e.indexName,
                            s = e.inputSelector,
                            a = e.appId,
                            u = void 0 === a ? "BH4D9OD16A" : a,
                            c = e.debug,
                            h = void 0 !== c && c,
                            p = e.algoliaOptions,
                            g = void 0 === p ? {} : p,
                            m = e.autocompleteOptions,
                            v = void 0 === m ? { debug: !1, hint: !1, autoselect: !0 } : m,
                            b = e.transformData,
                            w = void 0 !== b && b,
                            _ = e.queryHook,
                            x = void 0 !== _ && _,
                            S = e.handleSelected,
                            C = void 0 !== S && S,
                            A = e.enhancedSearchInput,
                            E = void 0 !== A && A,
                            T = e.layout,
                            k = void 0 === T ? "collumns" : T;
                        i(this, t), t.checkArguments({ apiKey: n, indexName: r, inputSelector: s, debug: h, algoliaOptions: g, autocompleteOptions: v, transformData: w, queryHook: x, handleSelected: C, enhancedSearchInput: E, layout: k }), this.apiKey = n, this.appId = u, this.indexName = r, this.input = t.getInputFromSelector(s), this.algoliaOptions = o({ hitsPerPage: 5 }, g);
                        var O = !(!v || !v.debug) && v.debug;
                        v.debug = h || O, this.autocompleteOptions = v, this.autocompleteOptions.cssClasses = { prefix: "ds" }, C = C || this.handleSelected, this.isSimpleLayout = "simple" === k, this.client = (0, l.default)(this.appId, this.apiKey), this.client.addAlgoliaAgent("docsearch.js " + y.default), E && (this.input = t.injectSearchBox(this.input)), this.autocomplete = (0, f.default)(this.input, v, [{ source: this.getAutocompleteSource(w, x), templates: { suggestion: t.getSuggestionTemplate(this.isSimpleLayout), footer: d.default.footer, empty: t.getEmptyTemplate() } }]), this.autocomplete.on("autocomplete:selected", C.bind(null, this.autocomplete.autocomplete)), this.autocomplete.on("autocomplete:shown", this.handleShown.bind(null, this.input)), E && t.bindSearchBoxEvent()
                    }
                    return s(t, [{
                        key: "getAutocompleteSource",
                        value: function(e, n) {
                            var r = this;
                            return function(i, o) {
                                n && (i = n(i) || i), r.client.search([{ indexName: r.indexName, query: i, params: r.algoliaOptions }]).then(function(n) {
                                    var r = n.results[0].hits;
                                    e && (r = e(r) || r), o(t.formatHits(r))
                                })
                            }
                        }
                    }, { key: "handleSelected", value: function(t, e, n) { t.setVal(""), window.location.href = n.url } }, {
                        key: "handleShown",
                        value: function(t) {
                            var e = t.offset().left + t.width() / 2,
                                n = (0, w.default)(document).width() / 2;
                            isNaN(n) && (n = 900);
                            var r = e - n >= 0 ? "algolia-autocomplete-right" : "algolia-autocomplete-left",
                                i = e - n < 0 ? "algolia-autocomplete-right" : "algolia-autocomplete-left",
                                o = (0, w.default)(".algolia-autocomplete");
                            o.hasClass(r) || o.addClass(r), o.hasClass(i) && o.removeClass(i)
                        }
                    }], [{ key: "checkArguments", value: function(e) { if (!e.apiKey || !e.indexName) throw new Error("Usage:\n  documentationSearch({\n  apiKey,\n  indexName,\n  inputSelector,\n  [ appId ],\n  [ algoliaOptions.{hitsPerPage} ]\n  [ autocompleteOptions.{hint,debug} ]\n})"); if (!t.getInputFromSelector(e.inputSelector)) throw new Error("Error: No input element in the page matches " + e.inputSelector) } }, { key: "injectSearchBox", value: function(t) { t.before(d.default.searchBox); var e = t.prev().prev().find("input"); return t.remove(), e } }, {
                        key: "bindSearchBoxEvent",
                        value: function() {
                            (0, w.default)('.searchbox [type="reset"]').on("click", function() {
                                (0, w.default)("input#docsearch").focus(), (0, w.default)(this).addClass("hide"), f.default.autocomplete.setVal("")
                            }), (0, w.default)("input#docsearch").on("keyup", function() {
                                var t = document.querySelector("input#docsearch"),
                                    e = document.querySelector('.searchbox [type="reset"]');
                                e.className = "searchbox__reset", 0 === t.value.length && (e.className += " hide")
                            })
                        }
                    }, { key: "getInputFromSelector", value: function(t) { var e = (0, w.default)(t).filter("input"); return e.length ? (0, w.default)(e[0]) : null } }, {
                        key: "formatHits",
                        value: function(e) {
                            var n = m.default.deepClone(e),
                                r = n.map(function(t) { return t._highlightResult && (t._highlightResult = m.default.mergeKeyWithParent(t._highlightResult, "hierarchy")), m.default.mergeKeyWithParent(t, "hierarchy") }),
                                i = m.default.groupBy(r, "lvl0");
                            return w.default.each(i, function(t, e) {
                                var n = m.default.groupBy(e, "lvl1"),
                                    r = m.default.flattenAndFlagFirst(n, "isSubCategoryHeader");
                                i[t] = r
                            }), i = m.default.flattenAndFlagFirst(i, "isCategoryHeader"), i.map(function(e) {
                                var n = t.formatURL(e),
                                    r = m.default.getHighlightedValue(e, "lvl0"),
                                    i = m.default.getHighlightedValue(e, "lvl1") || r,
                                    o = m.default.compact([m.default.getHighlightedValue(e, "lvl2") || i, m.default.getHighlightedValue(e, "lvl3"), m.default.getHighlightedValue(e, "lvl4"), m.default.getHighlightedValue(e, "lvl5"), m.default.getHighlightedValue(e, "lvl6")]).join('<span class="aa-suggestion-title-separator" aria-hidden="true"> › </span>'),
                                    s = m.default.getSnippetedValue(e, "content"),
                                    a = i && "" !== i || o && "" !== o,
                                    u = !i || "" === i || i === r,
                                    c = o && "" !== o && o !== i,
                                    l = !c && i && "" !== i && i !== r;
                                return { isLvl0: !l && !c, isLvl1: l, isLvl2: c, isLvl1EmptyOrDuplicate: u, isCategoryHeader: e.isCategoryHeader, isSubCategoryHeader: e.isSubCategoryHeader, isTextOrSubcatoryNonEmpty: a, category: r, subcategory: i, title: o, text: s, url: n }
                            })
                        }
                    }, {
                        key: "formatURL",
                        value: function(t) {
                            var e = t.url,
                                n = t.anchor;
                            if (e) { return -1 !== e.indexOf("#") ? e : n ? t.url + "#" + t.anchor : e }
                            return n ? "#" + t.anchor : (console.warn("no anchor nor url for : ", JSON.stringify(t)), null)
                        }
                    }, { key: "getEmptyTemplate", value: function() { return function(t) { return u.default.compile(d.default.empty).render(t) } } }, {
                        key: "getSuggestionTemplate",
                        value: function(t) {
                            var e = t ? d.default.suggestionSimple : d.default.suggestion,
                                n = u.default.compile(e);
                            return function(t) { return n.render(t) }
                        }
                    }]), t
                }();
            e.default = _
        }, function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 });
            var r = "algolia-docsearch-suggestion",
                i = { suggestion: '\n  <div class="' + r + "\n    {{#isCategoryHeader}}" + r + "__main{{/isCategoryHeader}}\n    {{#isSubCategoryHeader}}" + r + '__secondary{{/isSubCategoryHeader}}\n  ">\n    <div class="' + r + '--category-header">\n        <span class="' + r + '--category-header-lvl0">{{{category}}}</span>\n    </div>\n    <div class="' + r + '--wrapper">\n      <div class="' + r + '--subcategory-column">\n        <span class="' + r + '--subcategory-column-text">{{{subcategory}}}</span>\n      </div>\n      {{#isTextOrSubcatoryNonEmpty}}\n      <div class="' + r + '--content">\n        <div class="' + r + '--subcategory-inline">{{{subcategory}}}</div>\n        <div class="' + r + '--title">{{{title}}}</div>\n        {{#text}}<div class="' + r + '--text">{{{text}}}</div>{{/text}}\n      </div>\n      {{/isTextOrSubcatoryNonEmpty}}\n    </div>\n  </div>\n  ', suggestionSimple: '\n  <div class="' + r + "\n    {{#isCategoryHeader}}" + r + "__main{{/isCategoryHeader}}\n    {{#isSubCategoryHeader}}" + r + '__secondary{{/isSubCategoryHeader}}\n    suggestion-layout-simple\n  ">\n    <div class="' + r + '--category-header">\n        {{^isLvl0}}\n        <span class="' + r + "--category-header-lvl0 " + r + '--category-header-item">{{{category}}}</span>\n          {{^isLvl1}}\n          {{^isLvl1EmptyOrDuplicate}}\n          <span class="' + r + "--category-header-lvl1 " + r + '--category-header-item">\n              {{{subcategory}}}\n          </span>\n          {{/isLvl1EmptyOrDuplicate}}\n          {{/isLvl1}}\n        {{/isLvl0}}\n        <div class="' + r + "--title " + r + '--category-header-item">\n            {{#isLvl2}}\n                {{{title}}}\n            {{/isLvl2}}\n            {{#isLvl1}}\n                {{{subcategory}}}\n            {{/isLvl1}}\n            {{#isLvl0}}\n                {{{category}}}\n            {{/isLvl0}}\n        </div>\n    </div>\n    <div class="' + r + '--wrapper">\n      {{#text}}\n      <div class="' + r + '--content">\n        <div class="' + r + '--text">{{{text}}}</div>\n      </div>\n      {{/text}}\n    </div>\n  </div>\n  ', footer: '\n    <div class="algolia-docsearch-footer">\n      Search by <a class="algolia-docsearch-footer--logo" href="https://www.algolia.com/docsearch">Algolia</a>\n    </div>\n  ', empty: '\n  <div class="' + r + '">\n    <div class="' + r + '--wrapper">\n        <div class="' + r + "--content " + r + '--no-results">\n            <div class="' + r + '--title">\n                <div class="' + r + '--text">\n                    没找到 <b>"{{query}}"</b>\n                </div>\n            </div>\n        </div>\n    </div>\n  </div>\n  ', searchBox: '\n  <form novalidate="novalidate" onsubmit="return false;" class="searchbox">\n    <div role="search" class="searchbox__wrapper">\n      <input id="docsearch" type="search" name="search" placeholder="Search the docs" autocomplete="off" required="required" class="searchbox__input"/>\n      <button type="submit" title="Submit your search query." class="searchbox__submit" >\n        <svg width=12 height=12 role="img" aria-label="Search">\n          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#sbx-icon-search-13"></use>\n        </svg>\n      </button>\n      <button type="reset" title="Clear the search query." class="searchbox__reset hide">\n        <svg width=12 height=12 role="img" aria-label="Reset">\n          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#sbx-icon-clear-3"></use>\n        </svg>\n      </button>\n    </div>\n</form>\n\n<div class="svg-icons" style="height: 0; width: 0; position: absolute; visibility: hidden">\n  <svg xmlns="http://www.w3.org/2000/svg">\n    <symbol id="sbx-icon-clear-3" viewBox="0 0 40 40"><path d="M16.228 20L1.886 5.657 0 3.772 3.772 0l1.885 1.886L20 16.228 34.343 1.886 36.228 0 40 3.772l-1.886 1.885L23.772 20l14.342 14.343L40 36.228 36.228 40l-1.885-1.886L20 23.772 5.657 38.114 3.772 40 0 36.228l1.886-1.885L16.228 20z" fill-rule="evenodd"></symbol>\n    <symbol id="sbx-icon-search-13" viewBox="0 0 40 40"><path d="M26.806 29.012a16.312 16.312 0 0 1-10.427 3.746C7.332 32.758 0 25.425 0 16.378 0 7.334 7.333 0 16.38 0c9.045 0 16.378 7.333 16.378 16.38 0 3.96-1.406 7.593-3.746 10.426L39.547 37.34c.607.608.61 1.59-.004 2.203a1.56 1.56 0 0 1-2.202.004L26.807 29.012zm-10.427.627c7.322 0 13.26-5.938 13.26-13.26 0-7.324-5.938-13.26-13.26-13.26-7.324 0-13.26 5.936-13.26 13.26 0 7.322 5.936 13.26 13.26 13.26z" fill-rule="evenodd"></symbol>\n  </svg>\n</div>\n  ' };
            e.default = i
        }, function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 });
            var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t },
                i = n(19),
                o = function(t) { return t && t.__esModule ? t : { default: t } }(i),
                s = {
                    mergeKeyWithParent: function(t, e) { if (void 0 === t[e]) return t; if ("object" !== r(t[e])) return t; var n = o.default.extend({}, t, t[e]); return delete n[e], n },
                    groupBy: function(t, e) { var n = {}; return o.default.each(t, function(t, r) { if (void 0 === r[e]) throw new Error("[groupBy]: Object has no key " + e); var i = r[e]; "string" == typeof i && (i = i.toLowerCase()), Object.prototype.hasOwnProperty.call(n, i) || (n[i] = []), n[i].push(r) }), n },
                    values: function(t) { return Object.keys(t).map(function(e) { return t[e] }) },
                    flatten: function(t) {
                        var e = [];
                        return t.forEach(function(t) {
                            if (!Array.isArray(t)) return void e.push(t);
                            t.forEach(function(t) { e.push(t) })
                        }), e
                    },
                    flattenAndFlagFirst: function(t, e) { var n = this.values(t).map(function(t) { return t.map(function(t, n) { return t[e] = 0 === n, t }) }); return this.flatten(n) },
                    compact: function(t) { var e = []; return t.forEach(function(t) { t && e.push(t) }), e },
                    getHighlightedValue: function(t, e) { return t._highlightResult && t._highlightResult.hierarchy_camel && t._highlightResult.hierarchy_camel[e] && t._highlightResult.hierarchy_camel[e].matchLevel && "none" !== t._highlightResult.hierarchy_camel[e].matchLevel && t._highlightResult.hierarchy_camel[e].value ? t._highlightResult.hierarchy_camel[e].value : t._highlightResult && t._highlightResult && t._highlightResult[e] && t._highlightResult[e].value ? t._highlightResult[e].value : t[e] },
                    getSnippetedValue: function(t, e) { if (!t._snippetResult || !t._snippetResult[e] || !t._snippetResult[e].value) return t[e]; var n = t._snippetResult[e].value; return n[0] !== n[0].toUpperCase() && (n = "…" + n), -1 === [".", "!", "?"].indexOf(n[n.length - 1]) && (n += "…"), n },
                    deepClone: function(t) { return JSON.parse(JSON.stringify(t)) }
                };
            e.default = s
        }, function(t, e, n) {
            function r() { return e.colors[l++ % e.colors.length] }

            function i(t) {
                function n() {}

                function i() {
                    var t = i,
                        n = +new Date,
                        o = n - (c || n);
                    t.diff = o, t.prev = c, t.curr = n, c = n, null == t.useColors && (t.useColors = e.useColors()), null == t.color && t.useColors && (t.color = r());
                    for (var s = new Array(arguments.length), a = 0; a < s.length; a++) s[a] = arguments[a];
                    s[0] = e.coerce(s[0]), "string" != typeof s[0] && (s = ["%o"].concat(s));
                    var u = 0;
                    s[0] = s[0].replace(/%([a-z%])/g, function(n, r) {
                        if ("%%" === n) return n;
                        u++;
                        var i = e.formatters[r];
                        if ("function" == typeof i) {
                            var o = s[u];
                            n = i.call(t, o), s.splice(u, 1), u--
                        }
                        return n
                    }), s = e.formatArgs.apply(t, s), (i.log || e.log || console.log.bind(console)).apply(t, s)
                }
                n.enabled = !1, i.enabled = !0;
                var o = e.enabled(t) ? i : n;
                return o.namespace = t, o
            }

            function o(t) { e.save(t); for (var n = (t || "").split(/[\s,]+/), r = n.length, i = 0; i < r; i++) n[i] && (t = n[i].replace(/[\\^$+?.()|[\]{}]/g, "\\$&").replace(/\*/g, ".*?"), "-" === t[0] ? e.skips.push(new RegExp("^" + t.substr(1) + "$")) : e.names.push(new RegExp("^" + t + "$"))) }

            function s() { e.enable("") }

            function a(t) {
                var n, r;
                for (n = 0, r = e.skips.length; n < r; n++)
                    if (e.skips[n].test(t)) return !1;
                for (n = 0, r = e.names.length; n < r; n++)
                    if (e.names[n].test(t)) return !0;
                return !1
            }

            function u(t) { return t instanceof Error ? t.stack || t.message : t }
            e = t.exports = i.debug = i, e.coerce = u, e.disable = s, e.enable = o, e.enabled = a, e.humanize = n(62), e.names = [], e.skips = [], e.formatters = {};
            var c, l = 0
        }, function(t, e, n) {
            (function(e, r) {
                /*!
                 * @overview es6-promise - a tiny implementation of Promises/A+.
                 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
                 * @license   Licensed under MIT license
                 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
                 * @version   4.0.5
                 */
                ! function(e, n) { t.exports = n() }(0, function() {
                    "use strict";

                    function t(t) { return "function" == typeof t || "object" == typeof t && null !== t }

                    function i(t) { return "function" == typeof t }

                    function o(t) { V = t }

                    function s(t) { K = t }

                    function a() { return void 0 !== U ? function() { U(c) } : u() }

                    function u() { var t = setTimeout; return function() { return t(c, 1) } }

                    function c() {
                        for (var t = 0; t < B; t += 2) {
                            (0, Y[t])(Y[t + 1]), Y[t] = void 0, Y[t + 1] = void 0
                        }
                        B = 0
                    }

                    function l(t, e) {
                        var n = arguments,
                            r = this,
                            i = new this.constructor(f);
                        void 0 === i[tt] && I(i);
                        var o = r._state;
                        return o ? function() {
                            var t = n[o - 1];
                            K(function() { return k(o, i, t, r._result) })
                        }() : C(r, i, t, e), i
                    }

                    function h(t) { var e = this; if (t && "object" == typeof t && t.constructor === e) return t; var n = new e(f); return w(n, t), n }

                    function f() {}

                    function p() { return new TypeError("You cannot resolve a promise with itself") }

                    function d() { return new TypeError("A promises callback cannot return that same promise.") }

                    function g(t) { try { return t.then } catch (t) { return it.error = t, it } }

                    function m(t, e, n, r) { try { t.call(e, n, r) } catch (t) { return t } }

                    function v(t, e, n) {
                        K(function(t) {
                            var r = !1,
                                i = m(n, e, function(n) { r || (r = !0, e !== n ? w(t, n) : x(t, n)) }, function(e) { r || (r = !0, S(t, e)) }, "Settle: " + (t._label || " unknown promise"));
                            !r && i && (r = !0, S(t, i))
                        }, t)
                    }

                    function y(t, e) { e._state === nt ? x(t, e._result) : e._state === rt ? S(t, e._result) : C(e, void 0, function(e) { return w(t, e) }, function(e) { return S(t, e) }) }

                    function b(t, e, n) { e.constructor === t.constructor && n === l && e.constructor.resolve === h ? y(t, e) : n === it ? S(t, it.error) : void 0 === n ? x(t, e) : i(n) ? v(t, e, n) : x(t, e) }

                    function w(e, n) { e === n ? S(e, p()) : t(n) ? b(e, n, g(n)) : x(e, n) }

                    function _(t) { t._onerror && t._onerror(t._result), A(t) }

                    function x(t, e) { t._state === et && (t._result = e, t._state = nt, 0 !== t._subscribers.length && K(A, t)) }

                    function S(t, e) { t._state === et && (t._state = rt, t._result = e, K(_, t)) }

                    function C(t, e, n, r) {
                        var i = t._subscribers,
                            o = i.length;
                        t._onerror = null, i[o] = e, i[o + nt] = n, i[o + rt] = r, 0 === o && t._state && K(A, t)
                    }

                    function A(t) {
                        var e = t._subscribers,
                            n = t._state;
                        if (0 !== e.length) {
                            for (var r = void 0, i = void 0, o = t._result, s = 0; s < e.length; s += 3) r = e[s], i = e[s + n], r ? k(n, r, i, o) : i(o);
                            t._subscribers.length = 0
                        }
                    }

                    function E() { this.error = null }

                    function T(t, e) { try { return t(e) } catch (t) { return ot.error = t, ot } }

                    function k(t, e, n, r) {
                        var o = i(n),
                            s = void 0,
                            a = void 0,
                            u = void 0,
                            c = void 0;
                        if (o) { if (s = T(n, r), s === ot ? (c = !0, a = s.error, s = null) : u = !0, e === s) return void S(e, d()) } else s = r, u = !0;
                        e._state !== et || (o && u ? w(e, s) : c ? S(e, a) : t === nt ? x(e, s) : t === rt && S(e, s))
                    }

                    function O(t, e) { try { e(function(e) { w(t, e) }, function(e) { S(t, e) }) } catch (e) { S(t, e) } }

                    function N() { return st++ }

                    function I(t) { t[tt] = st++, t._state = void 0, t._result = void 0, t._subscribers = [] }

                    function j(t, e) { this._instanceConstructor = t, this.promise = new t(f), this.promise[tt] || I(this.promise), z(e) ? (this._input = e, this.length = e.length, this._remaining = e.length, this._result = new Array(this.length), 0 === this.length ? x(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(), 0 === this._remaining && x(this.promise, this._result))) : S(this.promise, L()) }

                    function L() { return new Error("Array Methods must be provided an Array") }

                    function P(t) { return new j(this, t).promise }

                    function R(t) { var e = this; return new e(z(t) ? function(n, r) { for (var i = t.length, o = 0; o < i; o++) e.resolve(t[o]).then(n, r) } : function(t, e) { return e(new TypeError("You must pass an array to race.")) }) }

                    function D(t) {
                        var e = this,
                            n = new e(f);
                        return S(n, t), n
                    }

                    function $() { throw new TypeError("You must pass a resolver function as the first argument to the promise constructor") }

                    function M() { throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.") }

                    function q(t) { this[tt] = N(), this._result = this._state = void 0, this._subscribers = [], f !== t && ("function" != typeof t && $(), this instanceof q ? O(this, t) : M()) }

                    function H() {
                        var t = void 0;
                        if (void 0 !== r) t = r;
                        else if ("undefined" != typeof self) t = self;
                        else try { t = Function("return this")() } catch (t) { throw new Error("polyfill failed because global object is unavailable in this environment") }
                        var e = t.Promise;
                        if (e) { var n = null; try { n = Object.prototype.toString.call(e.resolve()) } catch (t) {} if ("[object Promise]" === n && !e.cast) return }
                        t.Promise = q
                    }
                    var F = void 0;
                    F = Array.isArray ? Array.isArray : function(t) { return "[object Array]" === Object.prototype.toString.call(t) };
                    var z = F,
                        B = 0,
                        U = void 0,
                        V = void 0,
                        K = function(t, e) { Y[B] = t, Y[B + 1] = e, 2 === (B += 2) && (V ? V(c) : Z()) },
                        J = "undefined" != typeof window ? window : void 0,
                        W = J || {},
                        X = W.MutationObserver || W.WebKitMutationObserver,
                        Q = "undefined" == typeof self && void 0 !== e && "[object process]" === {}.toString.call(e),
                        G = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel,
                        Y = new Array(1e3),
                        Z = void 0;
                    Z = Q ? function() { return function() { return e.nextTick(c) } }() : X ? function() {
                        var t = 0,
                            e = new X(c),
                            n = document.createTextNode("");
                        return e.observe(n, { characterData: !0 }),
                            function() { n.data = t = ++t % 2 }
                    }() : G ? function() {
                        var t = new MessageChannel;
                        return t.port1.onmessage = c,
                            function() { return t.port2.postMessage(0) }
                    }() : void 0 === J ? function() { try { var t = n(67); return U = t.runOnLoop || t.runOnContext, a() } catch (t) { return u() } }() : u();
                    var tt = Math.random().toString(36).substring(16),
                        et = void 0,
                        nt = 1,
                        rt = 2,
                        it = new E,
                        ot = new E,
                        st = 0;
                    return j.prototype._enumerate = function() { for (var t = this.length, e = this._input, n = 0; this._state === et && n < t; n++) this._eachEntry(e[n], n) }, j.prototype._eachEntry = function(t, e) {
                        var n = this._instanceConstructor,
                            r = n.resolve;
                        if (r === h) {
                            var i = g(t);
                            if (i === l && t._state !== et) this._settledAt(t._state, e, t._result);
                            else if ("function" != typeof i) this._remaining--, this._result[e] = t;
                            else if (n === q) {
                                var o = new n(f);
                                b(o, t, i), this._willSettleAt(o, e)
                            } else this._willSettleAt(new n(function(e) { return e(t) }), e)
                        } else this._willSettleAt(r(t), e)
                    }, j.prototype._settledAt = function(t, e, n) {
                        var r = this.promise;
                        r._state === et && (this._remaining--, t === rt ? S(r, n) : this._result[e] = n), 0 === this._remaining && x(r, this._result)
                    }, j.prototype._willSettleAt = function(t, e) {
                        var n = this;
                        C(t, void 0, function(t) { return n._settledAt(nt, e, t) }, function(t) { return n._settledAt(rt, e, t) })
                    }, q.all = P, q.race = R, q.resolve = h, q.reject = D, q._setScheduler = o, q._setAsap = s, q._asap = K, q.prototype = { constructor: q, then: l, catch: function(t) { return this.then(null, t) } }, q.polyfill = H, q.Promise = q, q
                })
            }).call(e, n(11), n(3))
        }, function(t, e, n) {
            (function(e) { "undefined" != typeof window ? t.exports = window : void 0 !== e ? t.exports = e : "undefined" != typeof self ? t.exports = self : t.exports = {} }).call(e, n(3))
        }, function(t, e, n) {
            ! function(t) {
                function e(t) { "}" === t.n.substr(t.n.length - 1) && (t.n = t.n.substring(0, t.n.length - 1)) }

                function n(t) { return t.trim ? t.trim() : t.replace(/^\s*|\s*$/g, "") }

                function r(t, e, n) {
                    if (e.charAt(n) != t.charAt(0)) return !1;
                    for (var r = 1, i = t.length; r < i; r++)
                        if (e.charAt(n + r) != t.charAt(r)) return !1;
                    return !0
                }

                function i(e, n, r, a) {
                    var u = [],
                        c = null,
                        l = null,
                        h = null;
                    for (l = r[r.length - 1]; e.length > 0;) {
                        if (h = e.shift(), l && "<" == l.tag && !(h.tag in _)) throw new Error("Illegal content in < super tag.");
                        if (t.tags[h.tag] <= t.tags.$ || o(h, a)) r.push(h), h.nodes = i(e, h.tag, r, a);
                        else { if ("/" == h.tag) { if (0 === r.length) throw new Error("Closing tag without opener: /" + h.n); if (c = r.pop(), h.n != c.n && !s(h.n, c.n, a)) throw new Error("Nesting error: " + c.n + " vs. " + h.n); return c.end = h.i, u } "\n" == h.tag && (h.last = 0 == e.length || "\n" == e[0].tag) }
                        u.push(h)
                    }
                    if (r.length > 0) throw new Error("missing closing tag: " + r.pop().n);
                    return u
                }

                function o(t, e) {
                    for (var n = 0, r = e.length; n < r; n++)
                        if (e[n].o == t.n) return t.tag = "#", !0
                }

                function s(t, e, n) {
                    for (var r = 0, i = n.length; r < i; r++)
                        if (n[r].c == t && n[r].o == e) return !0
                }

                function a(t) { var e = []; for (var n in t) e.push('"' + c(n) + '": function(c,p,t,i) {' + t[n] + "}"); return "{ " + e.join(",") + " }" }

                function u(t) { var e = []; for (var n in t.partials) e.push('"' + c(n) + '":{name:"' + c(t.partials[n].name) + '", ' + u(t.partials[n]) + "}"); return "partials: {" + e.join(",") + "}, subs: " + a(t.subs) }

                function c(t) { return t.replace(y, "\\\\").replace(g, '\\"').replace(m, "\\n").replace(v, "\\r").replace(b, "\\u2028").replace(w, "\\u2029") }

                function l(t) { return ~t.indexOf(".") ? "d" : "f" }

                function h(t, e) {
                    var n = "<" + (e.prefix || ""),
                        r = n + t.n + x++;
                    return e.partials[r] = { name: t.n, partials: {} }, e.code += 't.b(t.rp("' + c(r) + '",c,p,"' + (t.indent || "") + '"));', r
                }

                function f(t, e) { e.code += "t.b(t.t(t." + l(t.n) + '("' + c(t.n) + '",c,p,0)));' }

                function p(t) { return "t.b(" + t + ");" }
                var d = /\S/,
                    g = /\"/g,
                    m = /\n/g,
                    v = /\r/g,
                    y = /\\/g,
                    b = /\u2028/,
                    w = /\u2029/;
                t.tags = { "#": 1, "^": 2, "<": 3, $: 4, "/": 5, "!": 6, ">": 7, "=": 8, _v: 9, "{": 10, "&": 11, _t: 12 }, t.scan = function(i, o) {
                    function s() { p.length > 0 && (g.push({ tag: "_t", text: new String(p) }), p = "") }

                    function a() {
                        for (var e = !0, n = y; n < g.length; n++)
                            if (!(e = t.tags[g[n].tag] < t.tags._v || "_t" == g[n].tag && null === g[n].text.match(d))) return !1;
                        return e
                    }

                    function u(t, e) {
                        if (s(), t && a())
                            for (var n, r = y; r < g.length; r++) g[r].text && ((n = g[r + 1]) && ">" == n.tag && (n.indent = g[r].text.toString()), g.splice(r, 1));
                        else e || g.push({ tag: "\n" });
                        m = !1, y = g.length
                    }
                    var c = i.length,
                        l = 0,
                        h = null,
                        f = null,
                        p = "",
                        g = [],
                        m = !1,
                        v = 0,
                        y = 0,
                        b = "{{",
                        w = "}}";
                    for (o && (o = o.split(" "), b = o[0], w = o[1]), v = 0; v < c; v++) 0 == l ? r(b, i, v) ? (--v, s(), l = 1) : "\n" == i.charAt(v) ? u(m) : p += i.charAt(v) : 1 == l ? (v += b.length - 1, f = t.tags[i.charAt(v + 1)], h = f ? i.charAt(v + 1) : "_v", "=" == h ? (v = function(t, e) {
                        var r = "=" + w,
                            i = t.indexOf(r, e),
                            o = n(t.substring(t.indexOf("=", e) + 1, i)).split(" ");
                        return b = o[0], w = o[o.length - 1], i + r.length - 1
                    }(i, v), l = 0) : (f && v++, l = 2), m = v) : r(w, i, v) ? (g.push({ tag: h, n: n(p), otag: b, ctag: w, i: "/" == h ? m - b.length : v + w.length }), p = "", v += w.length - 1, l = 0, "{" == h && ("}}" == w ? v++ : e(g[g.length - 1]))) : p += i.charAt(v);
                    return u(m, !0), g
                };
                var _ = { _t: !0, "\n": !0, $: !0, "/": !0 };
                t.stringify = function(e, n, r) { return "{code: function (c,p,i) { " + t.wrapMain(e.code) + " }," + u(e) + "}" };
                var x = 0;
                t.generate = function(e, n, r) { x = 0; var i = { code: "", subs: {}, partials: {} }; return t.walk(e, i), r.asString ? this.stringify(i, n, r) : this.makeTemplate(i, n, r) }, t.wrapMain = function(t) { return 'var t=this;t.b(i=i||"");' + t + "return t.fl();" }, t.template = t.Template, t.makeTemplate = function(t, e, n) { var r = this.makePartials(t); return r.code = new Function("c", "p", "i", this.wrapMain(t.code)), new this.template(r, e, this, n) }, t.makePartials = function(t) { var e, n = { subs: {}, partials: t.partials, name: t.name }; for (e in n.partials) n.partials[e] = this.makePartials(n.partials[e]); for (e in t.subs) n.subs[e] = new Function("c", "p", "t", "i", t.subs[e]); return n }, t.codegen = {
                    "#": function(e, n) { n.code += "if(t.s(t." + l(e.n) + '("' + c(e.n) + '",c,p,1),c,p,0,' + e.i + "," + e.end + ',"' + e.otag + " " + e.ctag + '")){t.rs(c,p,function(c,p,t){', t.walk(e.nodes, n), n.code += "});c.pop();}" },
                    "^": function(e, n) { n.code += "if(!t.s(t." + l(e.n) + '("' + c(e.n) + '",c,p,1),c,p,1,0,0,"")){', t.walk(e.nodes, n), n.code += "};" },
                    ">": h,
                    "<": function(e, n) {
                        var r = { partials: {}, code: "", subs: {}, inPartial: !0 };
                        t.walk(e.nodes, r);
                        var i = n.partials[h(e, n)];
                        i.subs = r.subs, i.partials = r.partials
                    },
                    $: function(e, n) {
                        var r = { subs: {}, code: "", partials: n.partials, prefix: e.n };
                        t.walk(e.nodes, r), n.subs[e.n] = r.code, n.inPartial || (n.code += 't.sub("' + c(e.n) + '",c,p,i);')
                    },
                    "\n": function(t, e) { e.code += p('"\\n"' + (t.last ? "" : " + i")) },
                    _v: function(t, e) { e.code += "t.b(t.v(t." + l(t.n) + '("' + c(t.n) + '",c,p,0)));' },
                    _t: function(t, e) { e.code += p('"' + c(t.text) + '"') },
                    "{": f,
                    "&": f
                }, t.walk = function(e, n) { for (var r, i = 0, o = e.length; i < o; i++)(r = t.codegen[e[i].tag]) && r(e[i], n); return n }, t.parse = function(t, e, n) { return n = n || {}, i(t, "", [], n.sectionTags || []) }, t.cache = {}, t.cacheKey = function(t, e) { return [t, !!e.asString, !!e.disableLambda, e.delimiters, !!e.modelGet].join("||") }, t.compile = function(e, n) {
                    n = n || {};
                    var r = t.cacheKey(e, n),
                        i = this.cache[r];
                    if (i) { var o = i.partials; for (var s in o) delete o[s].instance; return i }
                    return i = this.generate(this.parse(this.scan(e, n.delimiters), e, n), e, n), this.cache[r] = i
                }
            }(e)
        }, function(t, e, n) {
            var r = n(53);
            r.Template = n(55).Template, r.template = r.Template, t.exports = r
        }, function(t, e, n) {
            ! function(t) {
                function e(t, e, n) { var r; return e && "object" == typeof e && (void 0 !== e[t] ? r = e[t] : n && e.get && "function" == typeof e.get && (r = e.get(t))), r }

                function n(t, e, n, r, i, o) {
                    function s() {}

                    function a() {}
                    s.prototype = t, a.prototype = t.subs;
                    var u, c = new s;
                    c.subs = new a, c.subsText = {}, c.buf = "", r = r || {}, c.stackSubs = r, c.subsText = o;
                    for (u in e) r[u] || (r[u] = e[u]);
                    for (u in r) c.subs[u] = r[u];
                    i = i || {}, c.stackPartials = i;
                    for (u in n) i[u] || (i[u] = n[u]);
                    for (u in i) c.partials[u] = i[u];
                    return c
                }

                function r(t) { return String(null === t || void 0 === t ? "" : t) }

                function i(t) { return t = r(t), l.test(t) ? t.replace(o, "&amp;").replace(s, "&lt;").replace(a, "&gt;").replace(u, "&#39;").replace(c, "&quot;") : t }
                t.Template = function(t, e, n, r) { t = t || {}, this.r = t.code || this.r, this.c = n, this.options = r || {}, this.text = e || "", this.partials = t.partials || {}, this.subs = t.subs || {}, this.buf = "" }, t.Template.prototype = {
                    r: function(t, e, n) { return "" },
                    v: i,
                    t: r,
                    render: function(t, e, n) { return this.ri([t], e || {}, n) },
                    ri: function(t, e, n) { return this.r(t, e, n) },
                    ep: function(t, e) {
                        var r = this.partials[t],
                            i = e[r.name];
                        if (r.instance && r.base == i) return r.instance;
                        if ("string" == typeof i) {
                            if (!this.c) throw new Error("No compiler available.");
                            i = this.c.compile(i, this.options)
                        }
                        if (!i) return null;
                        if (this.partials[t].base = i, r.subs) {
                            e.stackText || (e.stackText = {});
                            for (key in r.subs) e.stackText[key] || (e.stackText[key] = void 0 !== this.activeSub && e.stackText[this.activeSub] ? e.stackText[this.activeSub] : this.text);
                            i = n(i, r.subs, r.partials, this.stackSubs, this.stackPartials, e.stackText)
                        }
                        return this.partials[t].instance = i, i
                    },
                    rp: function(t, e, n, r) { var i = this.ep(t, n); return i ? i.ri(e, n, r) : "" },
                    rs: function(t, e, n) { var r = t[t.length - 1]; if (!h(r)) return void n(t, e, this); for (var i = 0; i < r.length; i++) t.push(r[i]), n(t, e, this), t.pop() },
                    s: function(t, e, n, r, i, o, s) { var a; return (!h(t) || 0 !== t.length) && ("function" == typeof t && (t = this.ms(t, e, n, r, i, o, s)), a = !!t, !r && a && e && e.push("object" == typeof t ? t : e[e.length - 1]), a) },
                    d: function(t, n, r, i) {
                        var o, s = t.split("."),
                            a = this.f(s[0], n, r, i),
                            u = this.options.modelGet,
                            c = null;
                        if ("." === t && h(n[n.length - 2])) a = n[n.length - 1];
                        else
                            for (var l = 1; l < s.length; l++) o = e(s[l], a, u), void 0 !== o ? (c = a, a = o) : a = "";
                        return !(i && !a) && (i || "function" != typeof a || (n.push(c), a = this.mv(a, n, r), n.pop()), a)
                    },
                    f: function(t, n, r, i) {
                        for (var o = !1, s = null, a = !1, u = this.options.modelGet, c = n.length - 1; c >= 0; c--)
                            if (s = n[c], void 0 !== (o = e(t, s, u))) { a = !0; break }
                        return a ? (i || "function" != typeof o || (o = this.mv(o, n, r)), o) : !i && ""
                    },
                    ls: function(t, e, n, i, o) { var s = this.options.delimiters; return this.options.delimiters = o, this.b(this.ct(r(t.call(e, i)), e, n)), this.options.delimiters = s, !1 },
                    ct: function(t, e, n) { if (this.options.disableLambda) throw new Error("Lambda features disabled."); return this.c.compile(t, this.options).render(e, n) },
                    b: function(t) { this.buf += t },
                    fl: function() { var t = this.buf; return this.buf = "", t },
                    ms: function(t, e, n, r, i, o, s) {
                        var a, u = e[e.length - 1],
                            c = t.call(u);
                        return "function" == typeof c ? !!r || (a = this.activeSub && this.subsText && this.subsText[this.activeSub] ? this.subsText[this.activeSub] : this.text, this.ls(c, u, n, a.substring(i, o), s)) : c
                    },
                    mv: function(t, e, n) {
                        var i = e[e.length - 1],
                            o = t.call(i);
                        return "function" == typeof o ? this.ct(r(o.call(i)), i, n) : o
                    },
                    sub: function(t, e, n, r) {
                        var i = this.subs[t];
                        i && (this.activeSub = t, i(e, n, this, r), this.activeSub = !1)
                    }
                };
                var o = /&/g,
                    s = /</g,
                    a = />/g,
                    u = /\'/g,
                    c = /\"/g,
                    l = /[&<>\"\']/,
                    h = Array.isArray || function(t) { return "[object Array]" === Object.prototype.toString.call(t) }
            }(e)
        }, function(t, e, n) {
            "use strict";

            function r() { a && u && (a = !1, u.length ? f = u.concat(f) : h = -1, f.length && i()) }

            function i() {
                if (!a) {
                    p = !1, a = !0;
                    for (var t = f.length, e = setTimeout(r); t;) {
                        for (u = f, f = []; u && ++h < t;) u[h].run();
                        h = -1, t = f.length
                    }
                    u = null, h = -1, a = !1, clearTimeout(e)
                }
            }

            function o(t, e) { this.fun = t, this.array = e }

            function s(t) {
                var e = new Array(arguments.length - 1);
                if (arguments.length > 1)
                    for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                f.push(new o(t, e)), p || a || (p = !0, c())
            }
            for (var a, u, c, l = [n(59), n(58), n(57), n(60), n(61)], h = -1, f = [], p = !1, d = -1, g = l.length; ++d < g;)
                if (l[d] && l[d].test && l[d].test()) { c = l[d].install(i); break }
            o.prototype.run = function() {
                var t = this.fun,
                    e = this.array;
                switch (e.length) {
                    case 0:
                        return t();
                    case 1:
                        return t(e[0]);
                    case 2:
                        return t(e[0], e[1]);
                    case 3:
                        return t(e[0], e[1], e[2]);
                    default:
                        return t.apply(null, e)
                }
            }, t.exports = s
        }, function(t, e, n) {
            "use strict";
            (function(t) {
                e.test = function() { return !t.setImmediate && void 0 !== t.MessageChannel }, e.install = function(e) {
                    var n = new t.MessageChannel;
                    return n.port1.onmessage = e,
                        function() { n.port2.postMessage(0) }
                }
            }).call(e, n(3))
        }, function(t, e, n) {
            "use strict";
            (function(t) {
                var n = t.MutationObserver || t.WebKitMutationObserver;
                e.test = function() { return n }, e.install = function(e) {
                    var r = 0,
                        i = new n(e),
                        o = t.document.createTextNode("");
                    return i.observe(o, { characterData: !0 }),
                        function() { o.data = r = ++r % 2 }
                }
            }).call(e, n(3))
        }, function(t, e, n) {
            "use strict";
            (function(t) { e.test = function() { return void 0 !== t && !t.browser }, e.install = function(e) { return function() { t.nextTick(e) } } }).call(e, n(11))
        }, function(t, e, n) {
            "use strict";
            (function(t) { e.test = function() { return "document" in t && "onreadystatechange" in t.document.createElement("script") }, e.install = function(e) { return function() { var n = t.document.createElement("script"); return n.onreadystatechange = function() { e(), n.onreadystatechange = null, n.parentNode.removeChild(n), n = null }, t.document.documentElement.appendChild(n), e } } }).call(e, n(3))
        }, function(t, e, n) {
            "use strict";
            e.test = function() { return !0 }, e.install = function(t) { return function() { setTimeout(t, 0) } }
        }, function(t, e) {
            function n(t) {
                if (t = String(t), !(t.length > 1e4)) {
                    var e = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(t);
                    if (e) {
                        var n = parseFloat(e[1]);
                        switch ((e[2] || "ms").toLowerCase()) {
                            case "years":
                            case "year":
                            case "yrs":
                            case "yr":
                            case "y":
                                return n * l;
                            case "days":
                            case "day":
                            case "d":
                                return n * c;
                            case "hours":
                            case "hour":
                            case "hrs":
                            case "hr":
                            case "h":
                                return n * u;
                            case "minutes":
                            case "minute":
                            case "mins":
                            case "min":
                            case "m":
                                return n * a;
                            case "seconds":
                            case "second":
                            case "secs":
                            case "sec":
                            case "s":
                                return n * s;
                            case "milliseconds":
                            case "millisecond":
                            case "msecs":
                            case "msec":
                            case "ms":
                                return n;
                            default:
                                return
                        }
                    }
                }
            }

            function r(t) { return t >= c ? Math.round(t / c) + "d" : t >= u ? Math.round(t / u) + "h" : t >= a ? Math.round(t / a) + "m" : t >= s ? Math.round(t / s) + "s" : t + "ms" }

            function i(t) { return o(t, c, "day") || o(t, u, "hour") || o(t, a, "minute") || o(t, s, "second") || t + " ms" }

            function o(t, e, n) { if (!(t < e)) return t < 1.5 * e ? Math.floor(t / e) + " " + n : Math.ceil(t / e) + " " + n + "s" }
            var s = 1e3,
                a = 60 * s,
                u = 60 * a,
                c = 24 * u,
                l = 365.25 * c;
            t.exports = function(t, e) { e = e || {}; var o = typeof t; if ("string" === o && t.length > 0) return n(t); if ("number" === o && !1 === isNaN(t)) return e.long ? i(t) : r(t); throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(t)) }
        }, function(t, e, n) {
            "use strict";
            var r = Object.prototype.hasOwnProperty,
                i = Object.prototype.toString,
                o = Array.prototype.slice,
                s = n(64),
                a = Object.prototype.propertyIsEnumerable,
                u = !a.call({ toString: null }, "toString"),
                c = a.call(function() {}, "prototype"),
                l = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
                h = function(t) { var e = t.constructor; return e && e.prototype === t },
                f = { $console: !0, $external: !0, $frame: !0, $frameElement: !0, $frames: !0, $innerHeight: !0, $innerWidth: !0, $outerHeight: !0, $outerWidth: !0, $pageXOffset: !0, $pageYOffset: !0, $parent: !0, $scrollLeft: !0, $scrollTop: !0, $scrollX: !0, $scrollY: !0, $self: !0, $webkitIndexedDB: !0, $webkitStorageInfo: !0, $window: !0 },
                p = function() {
                    if ("undefined" == typeof window) return !1;
                    for (var t in window) try { if (!f["$" + t] && r.call(window, t) && null !== window[t] && "object" == typeof window[t]) try { h(window[t]) } catch (t) { return !0 } } catch (t) { return !0 }
                    return !1
                }(),
                d = function(t) { if ("undefined" == typeof window || !p) return h(t); try { return h(t) } catch (t) { return !1 } },
                g = function(t) {
                    var e = null !== t && "object" == typeof t,
                        n = "[object Function]" === i.call(t),
                        o = s(t),
                        a = e && "[object String]" === i.call(t),
                        h = [];
                    if (!e && !n && !o) throw new TypeError("Object.keys called on a non-object");
                    var f = c && n;
                    if (a && t.length > 0 && !r.call(t, 0))
                        for (var p = 0; p < t.length; ++p) h.push(String(p));
                    if (o && t.length > 0)
                        for (var g = 0; g < t.length; ++g) h.push(String(g));
                    else
                        for (var m in t) f && "prototype" === m || !r.call(t, m) || h.push(String(m));
                    if (u)
                        for (var v = d(t), y = 0; y < l.length; ++y) v && "constructor" === l[y] || !r.call(t, l[y]) || h.push(l[y]);
                    return h
                };
            g.shim = function() {
                if (Object.keys) {
                    if (! function() { return 2 === (Object.keys(arguments) || "").length }(1, 2)) {
                        var t = Object.keys;
                        Object.keys = function(e) { return t(s(e) ? o.call(e) : e) }
                    }
                } else Object.keys = g;
                return Object.keys || g
            }, t.exports = g
        }, function(t, e, n) {
            "use strict";
            var r = Object.prototype.toString;
            t.exports = function(t) {
                var e = r.call(t),
                    n = "[object Arguments]" === e;
                return n || (n = "[object Array]" !== e && null !== t && "object" == typeof t && "number" == typeof t.length && t.length >= 0 && "[object Function]" === r.call(t.callee)), n
            }
        }, function(t, e, n) {
            "use strict";

            function r(t, e) { if (t.map) return t.map(e); for (var n = [], r = 0; r < t.length; r++) n.push(e(t[r], r)); return n }
            var i = function(t) {
                switch (typeof t) {
                    case "string":
                        return t;
                    case "boolean":
                        return t ? "true" : "false";
                    case "number":
                        return isFinite(t) ? t : "";
                    default:
                        return ""
                }
            };
            t.exports = function(t, e, n, a) { return e = e || "&", n = n || "=", null === t && (t = void 0), "object" == typeof t ? r(s(t), function(s) { var a = encodeURIComponent(i(s)) + n; return o(t[s]) ? r(t[s], function(t) { return a + encodeURIComponent(i(t)) }).join(e) : a + encodeURIComponent(i(t[s])) }).join(e) : a ? encodeURIComponent(i(a)) + n + encodeURIComponent(i(t)) : "" };
            var o = Array.isArray || function(t) { return "[object Array]" === Object.prototype.toString.call(t) },
                s = Object.keys || function(t) { var e = []; for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.push(n); return e }
        }, function(t, e, n) {
            "use strict";

            function r(t) { var e = function() { for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r]; return new(i.apply(t, [null].concat(n))) }; return e.__proto__ = t, e.prototype = t.prototype, e }
            var i = Function.prototype.bind;
            t.exports = r
        }, function(t, e) {}])
    })
}, function(t, e) {
    ! function(e, n) {
        var r = function(t, e) {
            "use strict";
            if (e.getElementsByClassName) {
                var n, r = e.documentElement,
                    i = t.Date,
                    o = t.HTMLPictureElement,
                    s = t.addEventListener,
                    a = t.setTimeout,
                    u = t.requestAnimationFrame || a,
                    c = t.requestIdleCallback,
                    l = /^picture$/i,
                    h = ["load", "error", "lazyincluded", "_lazyloaded"],
                    f = {},
                    p = Array.prototype.forEach,
                    d = function(t, e) { return f[e] || (f[e] = new RegExp("(\\s|^)" + e + "(\\s|$)")), f[e].test(t.getAttribute("class") || "") && f[e] },
                    g = function(t, e) { d(t, e) || t.setAttribute("class", (t.getAttribute("class") || "").trim() + " " + e) },
                    m = function(t, e) {
                        var n;
                        (n = d(t, e)) && t.setAttribute("class", (t.getAttribute("class") || "").replace(n, " "))
                    },
                    v = function(t, e, n) {
                        var r = n ? "addEventListener" : "removeEventListener";
                        n && v(t, e), h.forEach(function(n) { t[r](n, e) })
                    },
                    y = function(t, n, r, i, o) { var s = e.createEvent("CustomEvent"); return s.initCustomEvent(n, !i, !o, r || {}), t.dispatchEvent(s), s },
                    b = function(e, r) { var i;!o && (i = t.picturefill || n.pf) ? i({ reevaluate: !0, elements: [e] }) : r && r.src && (e.src = r.src) },
                    w = function(t, e) { return (getComputedStyle(t, null) || {})[e] },
                    _ = function(t, e, r) { for (r = r || t.offsetWidth; r < n.minSize && e && !t._lazysizesWidth;) r = e.offsetWidth, e = e.parentNode; return r },
                    x = function() {
                        var t, n, r = [],
                            i = [],
                            o = r,
                            s = function() {
                                var e = o;
                                for (o = r.length ? i : r, t = !0, n = !1; e.length;) e.shift()();
                                t = !1
                            },
                            c = function(r, i) { t && !i ? r.apply(this, arguments) : (o.push(r), n || (n = !0, (e.hidden ? a : u)(s))) };
                        return c._lsFlush = s, c
                    }(),
                    S = function(t, e) {
                        return e ? function() { x(t) } : function() {
                            var e = this,
                                n = arguments;
                            x(function() { t.apply(e, n) })
                        }
                    },
                    C = function(t) {
                        var e, n = 0,
                            r = 666,
                            o = function() { e = !1, n = i.now(), t() },
                            s = c ? function() { c(o, { timeout: r }), 666 !== r && (r = 666) } : S(function() { a(o) }, !0);
                        return function(t) {
                            var o;
                            (t = !0 === t) && (r = 44), e || (e = !0, o = 125 - (i.now() - n), o < 0 && (o = 0), t || o < 9 && c ? s() : a(s, o))
                        }
                    },
                    A = function(t) {
                        var e, n, r = function() { e = null, t() },
                            o = function() {
                                var t = i.now() - n;
                                t < 99 ? a(o, 99 - t) : (c || r)(r)
                            };
                        return function() { n = i.now(), e || (e = a(o, 99)) }
                    },
                    E = function() {
                        var o, u, c, h, f, _, E, k, O, N, I, j, L, P, R, D = /^img$/i,
                            $ = /^iframe$/i,
                            M = "onscroll" in t && !/glebot/.test(navigator.userAgent),
                            q = 0,
                            H = 0,
                            F = -1,
                            z = function(t) { H--, t && t.target && v(t.target, z), (!t || H < 0 || !t.target) && (H = 0) },
                            B = function(t, n) {
                                var i, o = t,
                                    s = "hidden" == w(e.body, "visibility") || "hidden" != w(t, "visibility");
                                for (O -= n, j += n, N -= n, I += n; s && (o = o.offsetParent) && o != e.body && o != r;)(s = (w(o, "opacity") || 1) > 0) && "visible" != w(o, "overflow") && (i = o.getBoundingClientRect(), s = I > i.left && N < i.right && j > i.top - 1 && O < i.bottom + 1);
                                return s
                            },
                            U = function() {
                                var t, i, s, a, l, h, p, d, g;
                                if ((f = n.loadMode) && H < 8 && (t = o.length)) {
                                    i = 0, F++, null == P && ("expand" in n || (n.expand = r.clientHeight > 500 && r.clientWidth > 500 ? 500 : 370), L = n.expand, P = L * n.expFactor), q < P && H < 1 && F > 2 && f > 2 && !e.hidden ? (q = P, F = 0) : q = f > 1 && F > 1 && H < 6 ? L : 0;
                                    for (; i < t; i++)
                                        if (o[i] && !o[i]._lazyRace)
                                            if (M)
                                                if ((d = o[i].getAttribute("data-expand")) && (h = 1 * d) || (h = q), g !== h && (E = innerWidth + h * R, k = innerHeight + h, p = -1 * h, g = h), s = o[i].getBoundingClientRect(), (j = s.bottom) >= p && (O = s.top) <= k && (I = s.right) >= p * R && (N = s.left) <= E && (j || I || N || O) && (c && H < 3 && !d && (f < 3 || F < 4) || B(o[i], h))) { if (Y(o[i]), l = !0, H > 9) break } else !l && c && !a && H < 4 && F < 4 && f > 2 && (u[0] || n.preloadAfterLoad) && (u[0] || !d && (j || I || N || O || "auto" != o[i].getAttribute(n.sizesAttr))) && (a = u[0] || o[i]);
                                    else Y(o[i]);
                                    a && !l && Y(a)
                                }
                            },
                            V = C(U),
                            K = function(t) { g(t.target, n.loadedClass), m(t.target, n.loadingClass), v(t.target, W) },
                            J = S(K),
                            W = function(t) { J({ target: t.target }) },
                            X = function(t, e) { try { t.contentWindow.location.replace(e) } catch (n) { t.src = e } },
                            Q = function(t) {
                                var e, r, i = t.getAttribute(n.srcsetAttr);
                                (e = n.customMedia[t.getAttribute("data-media") || t.getAttribute("media")]) && t.setAttribute("media", e), i && t.setAttribute("srcset", i), e && (r = t.parentNode, r.insertBefore(t.cloneNode(), t), r.removeChild(t))
                            },
                            G = S(function(t, e, r, i, o) {
                                var s, u, c, f, d, w;
                                (d = y(t, "lazybeforeunveil", e)).defaultPrevented || (i && (r ? g(t, n.autosizesClass) : t.setAttribute("sizes", i)), u = t.getAttribute(n.srcsetAttr), s = t.getAttribute(n.srcAttr), o && (c = t.parentNode, f = c && l.test(c.nodeName || "")), w = e.firesLoad || "src" in t && (u || s || f), d = { target: t }, w && (v(t, z, !0), clearTimeout(h), h = a(z, 2500), g(t, n.loadingClass), v(t, W, !0)), f && p.call(c.getElementsByTagName("source"), Q), u ? t.setAttribute("srcset", u) : s && !f && ($.test(t.nodeName) ? X(t, s) : t.src = s), (u || f) && b(t, { src: s })), t._lazyRace && delete t._lazyRace, m(t, n.lazyClass), x(function() {
                                    (!w || t.complete && t.naturalWidth > 1) && (w ? z(d) : H--, K(d))
                                }, !0)
                            }),
                            Y = function(t) {
                                var e, r = D.test(t.nodeName),
                                    i = r && (t.getAttribute(n.sizesAttr) || t.getAttribute("sizes")),
                                    o = "auto" == i;
                                (!o && c || !r || !t.src && !t.srcset || t.complete || d(t, n.errorClass)) && (e = y(t, "lazyunveilread").detail, o && T.updateElem(t, !0, t.offsetWidth), t._lazyRace = !0, H++, G(t, e, o, i, r))
                            },
                            Z = function() {
                                if (!c) {
                                    if (i.now() - _ < 999) return void a(Z, 999);
                                    var t = A(function() { n.loadMode = 3, V() });
                                    c = !0, n.loadMode = 3, V(), s("scroll", function() { 3 == n.loadMode && (n.loadMode = 2), t() }, !0)
                                }
                            };
                        return { _: function() { _ = i.now(), o = e.getElementsByClassName(n.lazyClass), u = e.getElementsByClassName(n.lazyClass + " " + n.preloadClass), R = n.hFac, s("scroll", V, !0), s("resize", V, !0), t.MutationObserver ? new MutationObserver(V).observe(r, { childList: !0, subtree: !0, attributes: !0 }) : (r.addEventListener("DOMNodeInserted", V, !0), r.addEventListener("DOMAttrModified", V, !0), setInterval(V, 999)), s("hashchange", V, !0), ["focus", "mouseover", "click", "load", "transitionend", "animationend", "webkitAnimationEnd"].forEach(function(t) { e.addEventListener(t, V, !0) }), /d$|^c/.test(e.readyState) ? Z() : (s("load", Z), e.addEventListener("DOMContentLoaded", V), a(Z, 2e4)), o.length ? (U(), x._lsFlush()) : V() }, checkElems: V, unveil: Y }
                    }(),
                    T = function() {
                        var t, r = S(function(t, e, n, r) {
                                var i, o, s;
                                if (t._lazysizesWidth = r, r += "px", t.setAttribute("sizes", r), l.test(e.nodeName || ""))
                                    for (i = e.getElementsByTagName("source"), o = 0, s = i.length; o < s; o++) i[o].setAttribute("sizes", r);
                                n.detail.dataAttr || b(t, n.detail)
                            }),
                            i = function(t, e, n) {
                                var i, o = t.parentNode;
                                o && (n = _(t, o, n), i = y(t, "lazybeforesizes", { width: n, dataAttr: !!e }), i.defaultPrevented || (n = i.detail.width) && n !== t._lazysizesWidth && r(t, o, i, n))
                            },
                            o = function() {
                                var e, n = t.length;
                                if (n)
                                    for (e = 0; e < n; e++) i(t[e])
                            },
                            a = A(o);
                        return { _: function() { t = e.getElementsByClassName(n.autosizesClass), s("resize", a) }, checkElems: a, updateElem: i }
                    }(),
                    k = function() { k.i || (k.i = !0, T._(), E._()) };
                return function() {
                    var e, r = { lazyClass: "lazyload", loadedClass: "lazyloaded", loadingClass: "lazyloading", preloadClass: "lazypreload", errorClass: "lazyerror", autosizesClass: "lazyautosizes", srcAttr: "data-src", srcsetAttr: "data-srcset", sizesAttr: "data-sizes", minSize: 40, customMedia: {}, init: !0, expFactor: 1.5, hFac: .8, loadMode: 2 };
                    n = t.lazySizesConfig || t.lazysizesConfig || {};
                    for (e in r) e in n || (n[e] = r[e]);
                    t.lazySizesConfig = n, a(function() { n.init && k() })
                }(), { cfg: n, autoSizer: T, loader: E, init: k, uP: b, aC: g, rC: m, hC: d, fire: y, gW: _, rAF: x }
            }
        }(e, e.document);
        e.lazySizes = r, "object" == typeof t && t.exports && (t.exports = r)
    }(window)
}, function(t, e) {
    ! function(t, e) {
        "use strict";

        function n(t, n) {
            if (!o[t]) {
                var r = e.createElement(n ? "link" : "script"),
                    i = e.getElementsByTagName("script")[0];
                n ? (r.rel = "stylesheet", r.href = t) : r.src = t, o[t] = !0, o[r.src || r.href] = !0, i.parentNode.insertBefore(r, i)
            }
        }
        var r, i, o = {};
        e.addEventListener && (i = /\(|\)|\s|'/, r = function(t, n) {
            var r = e.createElement("img");
            r.onload = function() { r.onload = null, r.onerror = null, r = null, n() }, r.onerror = r.onload, r.src = t, r && r.complete && r.onload && r.onload()
        }, addEventListener("lazybeforeunveil", function(t) {
            var e, o, s, a;
            t.defaultPrevented || ("none" == t.target.preload && (t.target.preload = "auto"), e = t.target.getAttribute("data-link"), e && n(e, !0), e = t.target.getAttribute("data-script"), e && n(e), e = t.target.getAttribute("data-require"), e && (lazySizes.cfg.requireJs ? lazySizes.cfg.requireJs([e]) : n(e)), s = t.target.getAttribute("data-bg"), s && (t.detail.firesLoad = !0, o = function() { t.target.style.backgroundImage = "url(" + (i.test(s) ? JSON.stringify(s) : s) + ")", t.detail.firesLoad = !1, lazySizes.fire(t.target, "_lazyloaded", {}, !0, !0) }, r(s, o)), (a = t.target.getAttribute("data-poster")) && (t.detail.firesLoad = !0, o = function() { t.target.poster = a, t.detail.firesLoad = !1, lazySizes.fire(t.target, "_lazyloaded", {}, !0, !0) }, r(a, o)))
        }, !1))
    }(window, document)
}, function(t, e, n) {
    /**
     * scrolldir - Vertical scroll direction in CSS
     * @version v1.2.17
     * @link https://github.com/dollarshaveclub/scrolldir.git
     * @author Patrick Fisher <patrick@pwfisher.com>
     * @license MIT
     **/
    ! function(t, e) { e() }(0, function() {
        "use strict";

        function t() {
            var t = i.scrollY || i.pageYOffset,
                e = f.timeStamp,
                n = "down" === s ? Math.max : Math.min,
                g = a.offsetHeight - i.innerHeight;
            if (t = Math.max(0, t), t = Math.min(g, t), h.unshift({ y: t, t: e }), h.pop(), t === n(p, t)) return d = e, void(p = t);
            var m = e - c;
            if (m > d) { p = t; for (var v = 0; v < u && h[v] && !(h[v].t < m); v += 1) p = n(p, h[v].y) }
            Math.abs(t - p) > l && (p = t, d = e, s = "down" === s ? "up" : "down", r.setAttribute(o, s))
        }

        function e(e) { return f = e, i.requestAnimationFrame(t) }
        var n = { el: document.documentElement, win: window, attribute: "data-scrolldir", dir: "down" },
            r = void 0,
            i = void 0,
            o = void 0,
            s = void 0,
            a = document.body,
            u = 32,
            c = 512,
            l = 64,
            h = Array(u),
            f = void 0,
            p = void 0,
            d = 0;
        ! function(t) { r = n.el, i = n.win, o = n.attribute, s = n.dir, p = i.scrollY || i.pageYOffset, r.setAttribute(o, s), i.addEventListener("scroll", e) }()
    })
}]);