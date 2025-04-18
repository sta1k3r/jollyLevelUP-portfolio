!function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    }
    : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    "use strict";
    var n = []
      , i = e.document
      , o = Object.getPrototypeOf
      , r = n.slice
      , s = n.concat
      , a = n.push
      , l = n.indexOf
      , c = {}
      , u = c.toString
      , d = c.hasOwnProperty
      , p = d.toString
      , f = p.call(Object)
      , h = {}
      , v = function(e) {
        return "function" == typeof e && "number" != typeof e.nodeType
    }
      , m = function(e) {
        return null != e && e === e.window
    }
      , g = {
        type: !0,
        src: !0,
        noModule: !0
    };
    function y(e, t, n) {
        var o, r = (t = t || i).createElement("script");
        if (r.text = e,
        n)
            for (o in g)
                n[o] && (r[o] = n[o]);
        t.head.appendChild(r).parentNode.removeChild(r)
    }
    function b(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? c[u.call(e)] || "object" : typeof e
    }
    var w = function(e, t) {
        return new w.fn.init(e,t)
    }
      , x = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    function T(e) {
        var t = !!e && "length"in e && e.length
          , n = b(e);
        return !v(e) && !m(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    w.fn = w.prototype = {
        jquery: "3.3.1",
        constructor: w,
        length: 0,
        toArray: function() {
            return r.call(this)
        },
        get: function(e) {
            return null == e ? r.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = w.merge(this.constructor(), e);
            return t.prevObject = this,
            t
        },
        each: function(e) {
            return w.each(this, e)
        },
        map: function(e) {
            return this.pushStack(w.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(r.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length
              , n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: a,
        sort: n.sort,
        splice: n.splice
    },
    w.extend = w.fn.extend = function() {
        var e, t, n, i, o, r, s = arguments[0] || {}, a = 1, l = arguments.length, c = !1;
        for ("boolean" == typeof s && (c = s,
        s = arguments[a] || {},
        a++),
        "object" == typeof s || v(s) || (s = {}),
        a === l && (s = this,
        a--); a < l; a++)
            if (null != (e = arguments[a]))
                for (t in e)
                    n = s[t],
                    s !== (i = e[t]) && (c && i && (w.isPlainObject(i) || (o = Array.isArray(i))) ? (o ? (o = !1,
                    r = n && Array.isArray(n) ? n : []) : r = n && w.isPlainObject(n) ? n : {},
                    s[t] = w.extend(c, r, i)) : void 0 !== i && (s[t] = i));
        return s
    }
    ,
    w.extend({
        expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== u.call(e) || (t = o(e)) && ("function" != typeof (n = d.call(t, "constructor") && t.constructor) || p.call(n) !== f))
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },
        globalEval: function(e) {
            y(e)
        },
        each: function(e, t) {
            var n, i = 0;
            if (T(e))
                for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++)
                    ;
            else
                for (i in e)
                    if (!1 === t.call(e[i], i, e[i]))
                        break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(x, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (T(Object(e)) ? w.merge(n, "string" == typeof e ? [e] : e) : a.call(n, e)),
            n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : l.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, i = 0, o = e.length; i < n; i++)
                e[o++] = t[i];
            return e.length = o,
            e
        },
        grep: function(e, t, n) {
            for (var i = [], o = 0, r = e.length, s = !n; o < r; o++)
                !t(e[o], o) !== s && i.push(e[o]);
            return i
        },
        map: function(e, t, n) {
            var i, o, r = 0, a = [];
            if (T(e))
                for (i = e.length; r < i; r++)
                    null != (o = t(e[r], r, n)) && a.push(o);
            else
                for (r in e)
                    null != (o = t(e[r], r, n)) && a.push(o);
            return s.apply([], a)
        },
        guid: 1,
        support: h
    }),
    "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]),
    w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        c["[object " + t + "]"] = t.toLowerCase()
    });
    var k = function(e) {
        var t, n, i, o, r, s, a, l, c, u, d, p, f, h, v, m, g, y, b, w = "sizzle" + 1 * new Date, x = e.document, T = 0, k = 0, S = se(), $ = se(), C = se(), j = function(e, t) {
            return e === t && (d = !0),
            0
        }, A = {}.hasOwnProperty, E = [], P = E.pop, D = E.push, O = E.push, L = E.slice, N = function(e, t) {
            for (var n = 0, i = e.length; n < i; n++)
                if (e[n] === t)
                    return n;
            return -1
        }, H = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", M = "[\\x20\\t\\r\\n\\f]", q = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", I = "\\[" + M + "*(" + q + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + q + "))|)" + M + "*\\]", z = ":(" + q + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + I + ")*)|.*)\\)|)", F = new RegExp(M + "+","g"), W = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$","g"), R = new RegExp("^" + M + "*," + M + "*"), B = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"), X = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]","g"), _ = new RegExp(z), U = new RegExp("^" + q + "$"), Y = {
            ID: new RegExp("^#(" + q + ")"),
            CLASS: new RegExp("^\\.(" + q + ")"),
            TAG: new RegExp("^(" + q + "|[*])"),
            ATTR: new RegExp("^" + I),
            PSEUDO: new RegExp("^" + z),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)","i"),
            bool: new RegExp("^(?:" + H + ")$","i"),
            needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)","i")
        }, V = /^(?:input|select|textarea|button)$/i, G = /^h\d$/i, Q = /^[^{]+\{\s*\[native \w/, K = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, J = /[+~]/, Z = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)","ig"), ee = function(e, t, n) {
            var i = "0x" + t - 65536;
            return i != i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
        }, te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ne = function(e, t) {
            return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
        }, ie = function() {
            p()
        }, oe = ye(function(e) {
            return !0 === e.disabled && ("form"in e || "label"in e)
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            O.apply(E = L.call(x.childNodes), x.childNodes),
            E[x.childNodes.length].nodeType
        } catch (e) {
            O = {
                apply: E.length ? function(e, t) {
                    D.apply(e, L.call(t))
                }
                : function(e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++]; )
                        ;
                    e.length = n - 1
                }
            }
        }
        function re(e, t, i, o) {
            var r, a, c, u, d, h, g, y = t && t.ownerDocument, T = t ? t.nodeType : 9;
            if (i = i || [],
            "string" != typeof e || !e || 1 !== T && 9 !== T && 11 !== T)
                return i;
            if (!o && ((t ? t.ownerDocument || t : x) !== f && p(t),
            t = t || f,
            v)) {
                if (11 !== T && (d = K.exec(e)))
                    if (r = d[1]) {
                        if (9 === T) {
                            if (!(c = t.getElementById(r)))
                                return i;
                            if (c.id === r)
                                return i.push(c),
                                i
                        } else if (y && (c = y.getElementById(r)) && b(t, c) && c.id === r)
                            return i.push(c),
                            i
                    } else {
                        if (d[2])
                            return O.apply(i, t.getElementsByTagName(e)),
                            i;
                        if ((r = d[3]) && n.getElementsByClassName && t.getElementsByClassName)
                            return O.apply(i, t.getElementsByClassName(r)),
                            i
                    }
                if (n.qsa && !C[e + " "] && (!m || !m.test(e))) {
                    if (1 !== T)
                        y = t,
                        g = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((u = t.getAttribute("id")) ? u = u.replace(te, ne) : t.setAttribute("id", u = w),
                        a = (h = s(e)).length; a--; )
                            h[a] = "#" + u + " " + ge(h[a]);
                        g = h.join(","),
                        y = J.test(e) && ve(t.parentNode) || t
                    }
                    if (g)
                        try {
                            return O.apply(i, y.querySelectorAll(g)),
                            i
                        } catch (e) {} finally {
                            u === w && t.removeAttribute("id")
                        }
                }
            }
            return l(e.replace(W, "$1"), t, i, o)
        }
        function se() {
            var e = [];
            return function t(n, o) {
                return e.push(n + " ") > i.cacheLength && delete t[e.shift()],
                t[n + " "] = o
            }
        }
        function ae(e) {
            return e[w] = !0,
            e
        }
        function le(e) {
            var t = f.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function ce(e, t) {
            for (var n = e.split("|"), o = n.length; o--; )
                i.attrHandle[n[o]] = t
        }
        function ue(e, t) {
            var n = t && e
              , i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (i)
                return i;
            if (n)
                for (; n = n.nextSibling; )
                    if (n === t)
                        return -1;
            return e ? 1 : -1
        }
        function de(e) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }
        function pe(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }
        function fe(e) {
            return function(t) {
                return "form"in t ? t.parentNode && !1 === t.disabled ? "label"in t ? "label"in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && oe(t) === e : t.disabled === e : "label"in t && t.disabled === e
            }
        }
        function he(e) {
            return ae(function(t) {
                return t = +t,
                ae(function(n, i) {
                    for (var o, r = e([], n.length, t), s = r.length; s--; )
                        n[o = r[s]] && (n[o] = !(i[o] = n[o]))
                })
            })
        }
        function ve(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        for (t in n = re.support = {},
        r = re.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }
        ,
        p = re.setDocument = function(e) {
            var t, o, s = e ? e.ownerDocument || e : x;
            return s !== f && 9 === s.nodeType && s.documentElement ? (h = (f = s).documentElement,
            v = !r(f),
            x !== f && (o = f.defaultView) && o.top !== o && (o.addEventListener ? o.addEventListener("unload", ie, !1) : o.attachEvent && o.attachEvent("onunload", ie)),
            n.attributes = le(function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }),
            n.getElementsByTagName = le(function(e) {
                return e.appendChild(f.createComment("")),
                !e.getElementsByTagName("*").length
            }),
            n.getElementsByClassName = Q.test(f.getElementsByClassName),
            n.getById = le(function(e) {
                return h.appendChild(e).id = w,
                !f.getElementsByName || !f.getElementsByName(w).length
            }),
            n.getById ? (i.filter.ID = function(e) {
                var t = e.replace(Z, ee);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }
            ,
            i.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && v) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }
            ) : (i.filter.ID = function(e) {
                var t = e.replace(Z, ee);
                return function(e) {
                    var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }
            ,
            i.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && v) {
                    var n, i, o, r = t.getElementById(e);
                    if (r) {
                        if ((n = r.getAttributeNode("id")) && n.value === e)
                            return [r];
                        for (o = t.getElementsByName(e),
                        i = 0; r = o[i++]; )
                            if ((n = r.getAttributeNode("id")) && n.value === e)
                                return [r]
                    }
                    return []
                }
            }
            ),
            i.find.TAG = n.getElementsByTagName ? function(e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
            }
            : function(e, t) {
                var n, i = [], o = 0, r = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = r[o++]; )
                        1 === n.nodeType && i.push(n);
                    return i
                }
                return r
            }
            ,
            i.find.CLASS = n.getElementsByClassName && function(e, t) {
                if (void 0 !== t.getElementsByClassName && v)
                    return t.getElementsByClassName(e)
            }
            ,
            g = [],
            m = [],
            (n.qsa = Q.test(f.querySelectorAll)) && (le(function(e) {
                h.appendChild(e).innerHTML = "<a id='" + w + "'></a><select id='" + w + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + M + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length || m.push("\\[" + M + "*(?:value|" + H + ")"),
                e.querySelectorAll("[id~=" + w + "-]").length || m.push("~="),
                e.querySelectorAll(":checked").length || m.push(":checked"),
                e.querySelectorAll("a#" + w + "+*").length || m.push(".#.+[+~]")
            }),
            le(function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = f.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length && m.push("name" + M + "*[*^$|!~]?="),
                2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"),
                h.appendChild(e).disabled = !0,
                2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                m.push(",.*:")
            })),
            (n.matchesSelector = Q.test(y = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && le(function(e) {
                n.disconnectedMatch = y.call(e, "*"),
                y.call(e, "[s!='']:x"),
                g.push("!=", z)
            }),
            m = m.length && new RegExp(m.join("|")),
            g = g.length && new RegExp(g.join("|")),
            t = Q.test(h.compareDocumentPosition),
            b = t || Q.test(h.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e
                  , i = t && t.parentNode;
                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
            }
            : function(e, t) {
                if (t)
                    for (; t = t.parentNode; )
                        if (t === e)
                            return !0;
                return !1
            }
            ,
            j = t ? function(e, t) {
                if (e === t)
                    return d = !0,
                    0;
                var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return i || (1 & (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === i ? e === f || e.ownerDocument === x && b(x, e) ? -1 : t === f || t.ownerDocument === x && b(x, t) ? 1 : u ? N(u, e) - N(u, t) : 0 : 4 & i ? -1 : 1)
            }
            : function(e, t) {
                if (e === t)
                    return d = !0,
                    0;
                var n, i = 0, o = e.parentNode, r = t.parentNode, s = [e], a = [t];
                if (!o || !r)
                    return e === f ? -1 : t === f ? 1 : o ? -1 : r ? 1 : u ? N(u, e) - N(u, t) : 0;
                if (o === r)
                    return ue(e, t);
                for (n = e; n = n.parentNode; )
                    s.unshift(n);
                for (n = t; n = n.parentNode; )
                    a.unshift(n);
                for (; s[i] === a[i]; )
                    i++;
                return i ? ue(s[i], a[i]) : s[i] === x ? -1 : a[i] === x ? 1 : 0
            }
            ,
            f) : f
        }
        ,
        re.matches = function(e, t) {
            return re(e, null, null, t)
        }
        ,
        re.matchesSelector = function(e, t) {
            if ((e.ownerDocument || e) !== f && p(e),
            t = t.replace(X, "='$1']"),
            n.matchesSelector && v && !C[t + " "] && (!g || !g.test(t)) && (!m || !m.test(t)))
                try {
                    var i = y.call(e, t);
                    if (i || n.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return i
                } catch (e) {}
            return re(t, f, null, [e]).length > 0
        }
        ,
        re.contains = function(e, t) {
            return (e.ownerDocument || e) !== f && p(e),
            b(e, t)
        }
        ,
        re.attr = function(e, t) {
            (e.ownerDocument || e) !== f && p(e);
            var o = i.attrHandle[t.toLowerCase()]
              , r = o && A.call(i.attrHandle, t.toLowerCase()) ? o(e, t, !v) : void 0;
            return void 0 !== r ? r : n.attributes || !v ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }
        ,
        re.escape = function(e) {
            return (e + "").replace(te, ne)
        }
        ,
        re.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }
        ,
        re.uniqueSort = function(e) {
            var t, i = [], o = 0, r = 0;
            if (d = !n.detectDuplicates,
            u = !n.sortStable && e.slice(0),
            e.sort(j),
            d) {
                for (; t = e[r++]; )
                    t === e[r] && (o = i.push(r));
                for (; o--; )
                    e.splice(i[o], 1)
            }
            return u = null,
            e
        }
        ,
        o = re.getText = function(e) {
            var t, n = "", i = 0, r = e.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        n += o(e)
                } else if (3 === r || 4 === r)
                    return e.nodeValue
            } else
                for (; t = e[i++]; )
                    n += o(t);
            return n
        }
        ,
        (i = re.selectors = {
            cacheLength: 50,
            createPseudo: ae,
            match: Y,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(Z, ee),
                    e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || re.error(e[0]),
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                    e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && re.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return Y.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && _.test(n) && (t = s(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                    e[2] = n.slice(0, t)),
                    e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(Z, ee).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    }
                    : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = S[e + " "];
                    return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && S(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, t, n) {
                    return function(i) {
                        var o = re.attr(i, e);
                        return null == o ? "!=" === t : !t || (o += "",
                        "=" === t ? o === n : "!=" === t ? o !== n : "^=" === t ? n && 0 === o.indexOf(n) : "*=" === t ? n && o.indexOf(n) > -1 : "$=" === t ? n && o.slice(-n.length) === n : "~=" === t ? (" " + o.replace(F, " ") + " ").indexOf(n) > -1 : "|=" === t && (o === n || o.slice(0, n.length + 1) === n + "-"))
                    }
                },
                CHILD: function(e, t, n, i, o) {
                    var r = "nth" !== e.slice(0, 3)
                      , s = "last" !== e.slice(-4)
                      , a = "of-type" === t;
                    return 1 === i && 0 === o ? function(e) {
                        return !!e.parentNode
                    }
                    : function(t, n, l) {
                        var c, u, d, p, f, h, v = r !== s ? "nextSibling" : "previousSibling", m = t.parentNode, g = a && t.nodeName.toLowerCase(), y = !l && !a, b = !1;
                        if (m) {
                            if (r) {
                                for (; v; ) {
                                    for (p = t; p = p[v]; )
                                        if (a ? p.nodeName.toLowerCase() === g : 1 === p.nodeType)
                                            return !1;
                                    h = v = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [s ? m.firstChild : m.lastChild],
                            s && y) {
                                for (b = (f = (c = (u = (d = (p = m)[w] || (p[w] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[e] || [])[0] === T && c[1]) && c[2],
                                p = f && m.childNodes[f]; p = ++f && p && p[v] || (b = f = 0) || h.pop(); )
                                    if (1 === p.nodeType && ++b && p === t) {
                                        u[e] = [T, f, b];
                                        break
                                    }
                            } else if (y && (b = f = (c = (u = (d = (p = t)[w] || (p[w] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[e] || [])[0] === T && c[1]),
                            !1 === b)
                                for (; (p = ++f && p && p[v] || (b = f = 0) || h.pop()) && ((a ? p.nodeName.toLowerCase() !== g : 1 !== p.nodeType) || !++b || (y && ((u = (d = p[w] || (p[w] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[e] = [T, b]),
                                p !== t)); )
                                    ;
                            return (b -= o) === i || b % i == 0 && b / i >= 0
                        }
                    }
                },
                PSEUDO: function(e, t) {
                    var n, o = i.pseudos[e] || i.setFilters[e.toLowerCase()] || re.error("unsupported pseudo: " + e);
                    return o[w] ? o(t) : o.length > 1 ? (n = [e, e, "", t],
                    i.setFilters.hasOwnProperty(e.toLowerCase()) ? ae(function(e, n) {
                        for (var i, r = o(e, t), s = r.length; s--; )
                            e[i = N(e, r[s])] = !(n[i] = r[s])
                    }) : function(e) {
                        return o(e, 0, n)
                    }
                    ) : o
                }
            },
            pseudos: {
                not: ae(function(e) {
                    var t = []
                      , n = []
                      , i = a(e.replace(W, "$1"));
                    return i[w] ? ae(function(e, t, n, o) {
                        for (var r, s = i(e, null, o, []), a = e.length; a--; )
                            (r = s[a]) && (e[a] = !(t[a] = r))
                    }) : function(e, o, r) {
                        return t[0] = e,
                        i(t, null, r, n),
                        t[0] = null,
                        !n.pop()
                    }
                }),
                has: ae(function(e) {
                    return function(t) {
                        return re(e, t).length > 0
                    }
                }),
                contains: ae(function(e) {
                    return e = e.replace(Z, ee),
                    function(t) {
                        return (t.textContent || t.innerText || o(t)).indexOf(e) > -1
                    }
                }),
                lang: ae(function(e) {
                    return U.test(e || "") || re.error("unsupported lang: " + e),
                    e = e.replace(Z, ee).toLowerCase(),
                    function(t) {
                        var n;
                        do {
                            if (n = v ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                        } while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === h
                },
                focus: function(e) {
                    return e === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: fe(!1),
                disabled: fe(!0),
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    !0 === e.selected
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(e) {
                    return !i.pseudos.empty(e)
                },
                header: function(e) {
                    return G.test(e.nodeName)
                },
                input: function(e) {
                    return V.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: he(function() {
                    return [0]
                }),
                last: he(function(e, t) {
                    return [t - 1]
                }),
                eq: he(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: he(function(e, t) {
                    for (var n = 0; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                odd: he(function(e, t) {
                    for (var n = 1; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                lt: he(function(e, t, n) {
                    for (var i = n < 0 ? n + t : n; --i >= 0; )
                        e.push(i);
                    return e
                }),
                gt: he(function(e, t, n) {
                    for (var i = n < 0 ? n + t : n; ++i < t; )
                        e.push(i);
                    return e
                })
            }
        }).pseudos.nth = i.pseudos.eq,
        {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            i.pseudos[t] = de(t);
        for (t in {
            submit: !0,
            reset: !0
        })
            i.pseudos[t] = pe(t);
        function me() {}
        function ge(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++)
                i += e[t].value;
            return i
        }
        function ye(e, t, n) {
            var i = t.dir
              , o = t.next
              , r = o || i
              , s = n && "parentNode" === r
              , a = k++;
            return t.first ? function(t, n, o) {
                for (; t = t[i]; )
                    if (1 === t.nodeType || s)
                        return e(t, n, o);
                return !1
            }
            : function(t, n, l) {
                var c, u, d, p = [T, a];
                if (l) {
                    for (; t = t[i]; )
                        if ((1 === t.nodeType || s) && e(t, n, l))
                            return !0
                } else
                    for (; t = t[i]; )
                        if (1 === t.nodeType || s)
                            if (u = (d = t[w] || (t[w] = {}))[t.uniqueID] || (d[t.uniqueID] = {}),
                            o && o === t.nodeName.toLowerCase())
                                t = t[i] || t;
                            else {
                                if ((c = u[r]) && c[0] === T && c[1] === a)
                                    return p[2] = c[2];
                                if (u[r] = p,
                                p[2] = e(t, n, l))
                                    return !0
                            }
                return !1
            }
        }
        function be(e) {
            return e.length > 1 ? function(t, n, i) {
                for (var o = e.length; o--; )
                    if (!e[o](t, n, i))
                        return !1;
                return !0
            }
            : e[0]
        }
        function we(e, t, n, i, o) {
            for (var r, s = [], a = 0, l = e.length, c = null != t; a < l; a++)
                (r = e[a]) && (n && !n(r, i, o) || (s.push(r),
                c && t.push(a)));
            return s
        }
        function xe(e, t, n, i, o, r) {
            return i && !i[w] && (i = xe(i)),
            o && !o[w] && (o = xe(o, r)),
            ae(function(r, s, a, l) {
                var c, u, d, p = [], f = [], h = s.length, v = r || function(e, t, n) {
                    for (var i = 0, o = t.length; i < o; i++)
                        re(e, t[i], n);
                    return n
                }(t || "*", a.nodeType ? [a] : a, []), m = !e || !r && t ? v : we(v, p, e, a, l), g = n ? o || (r ? e : h || i) ? [] : s : m;
                if (n && n(m, g, a, l),
                i)
                    for (c = we(g, f),
                    i(c, [], a, l),
                    u = c.length; u--; )
                        (d = c[u]) && (g[f[u]] = !(m[f[u]] = d));
                if (r) {
                    if (o || e) {
                        if (o) {
                            for (c = [],
                            u = g.length; u--; )
                                (d = g[u]) && c.push(m[u] = d);
                            o(null, g = [], c, l)
                        }
                        for (u = g.length; u--; )
                            (d = g[u]) && (c = o ? N(r, d) : p[u]) > -1 && (r[c] = !(s[c] = d))
                    }
                } else
                    g = we(g === s ? g.splice(h, g.length) : g),
                    o ? o(null, s, g, l) : O.apply(s, g)
            })
        }
        function Te(e) {
            for (var t, n, o, r = e.length, s = i.relative[e[0].type], a = s || i.relative[" "], l = s ? 1 : 0, u = ye(function(e) {
                return e === t
            }, a, !0), d = ye(function(e) {
                return N(t, e) > -1
            }, a, !0), p = [function(e, n, i) {
                var o = !s && (i || n !== c) || ((t = n).nodeType ? u(e, n, i) : d(e, n, i));
                return t = null,
                o
            }
            ]; l < r; l++)
                if (n = i.relative[e[l].type])
                    p = [ye(be(p), n)];
                else {
                    if ((n = i.filter[e[l].type].apply(null, e[l].matches))[w]) {
                        for (o = ++l; o < r && !i.relative[e[o].type]; o++)
                            ;
                        return xe(l > 1 && be(p), l > 1 && ge(e.slice(0, l - 1).concat({
                            value: " " === e[l - 2].type ? "*" : ""
                        })).replace(W, "$1"), n, l < o && Te(e.slice(l, o)), o < r && Te(e = e.slice(o)), o < r && ge(e))
                    }
                    p.push(n)
                }
            return be(p)
        }
        function ke(e, t) {
            var n = t.length > 0
              , o = e.length > 0
              , r = function(r, s, a, l, u) {
                var d, h, m, g = 0, y = "0", b = r && [], w = [], x = c, k = r || o && i.find.TAG("*", u), S = T += null == x ? 1 : Math.random() || .1, $ = k.length;
                for (u && (c = s === f || s || u); y !== $ && null != (d = k[y]); y++) {
                    if (o && d) {
                        for (h = 0,
                        s || d.ownerDocument === f || (p(d),
                        a = !v); m = e[h++]; )
                            if (m(d, s || f, a)) {
                                l.push(d);
                                break
                            }
                        u && (T = S)
                    }
                    n && ((d = !m && d) && g--,
                    r && b.push(d))
                }
                if (g += y,
                n && y !== g) {
                    for (h = 0; m = t[h++]; )
                        m(b, w, s, a);
                    if (r) {
                        if (g > 0)
                            for (; y--; )
                                b[y] || w[y] || (w[y] = P.call(l));
                        w = we(w)
                    }
                    O.apply(l, w),
                    u && !r && w.length > 0 && g + t.length > 1 && re.uniqueSort(l)
                }
                return u && (T = S,
                c = x),
                b
            };
            return n ? ae(r) : r
        }
        return me.prototype = i.filters = i.pseudos,
        i.setFilters = new me,
        s = re.tokenize = function(e, t) {
            var n, o, r, s, a, l, c, u = $[e + " "];
            if (u)
                return t ? 0 : u.slice(0);
            for (a = e,
            l = [],
            c = i.preFilter; a; ) {
                for (s in n && !(o = R.exec(a)) || (o && (a = a.slice(o[0].length) || a),
                l.push(r = [])),
                n = !1,
                (o = B.exec(a)) && (n = o.shift(),
                r.push({
                    value: n,
                    type: o[0].replace(W, " ")
                }),
                a = a.slice(n.length)),
                i.filter)
                    !(o = Y[s].exec(a)) || c[s] && !(o = c[s](o)) || (n = o.shift(),
                    r.push({
                        value: n,
                        type: s,
                        matches: o
                    }),
                    a = a.slice(n.length));
                if (!n)
                    break
            }
            return t ? a.length : a ? re.error(e) : $(e, l).slice(0)
        }
        ,
        a = re.compile = function(e, t) {
            var n, i = [], o = [], r = C[e + " "];
            if (!r) {
                for (t || (t = s(e)),
                n = t.length; n--; )
                    (r = Te(t[n]))[w] ? i.push(r) : o.push(r);
                (r = C(e, ke(o, i))).selector = e
            }
            return r
        }
        ,
        l = re.select = function(e, t, n, o) {
            var r, l, c, u, d, p = "function" == typeof e && e, f = !o && s(e = p.selector || e);
            if (n = n || [],
            1 === f.length) {
                if ((l = f[0] = f[0].slice(0)).length > 2 && "ID" === (c = l[0]).type && 9 === t.nodeType && v && i.relative[l[1].type]) {
                    if (!(t = (i.find.ID(c.matches[0].replace(Z, ee), t) || [])[0]))
                        return n;
                    p && (t = t.parentNode),
                    e = e.slice(l.shift().value.length)
                }
                for (r = Y.needsContext.test(e) ? 0 : l.length; r-- && (c = l[r],
                !i.relative[u = c.type]); )
                    if ((d = i.find[u]) && (o = d(c.matches[0].replace(Z, ee), J.test(l[0].type) && ve(t.parentNode) || t))) {
                        if (l.splice(r, 1),
                        !(e = o.length && ge(l)))
                            return O.apply(n, o),
                            n;
                        break
                    }
            }
            return (p || a(e, f))(o, t, !v, n, !t || J.test(e) && ve(t.parentNode) || t),
            n
        }
        ,
        n.sortStable = w.split("").sort(j).join("") === w,
        n.detectDuplicates = !!d,
        p(),
        n.sortDetached = le(function(e) {
            return 1 & e.compareDocumentPosition(f.createElement("fieldset"))
        }),
        le(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }) || ce("type|href|height|width", function(e, t, n) {
            if (!n)
                return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }),
        n.attributes && le(function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }) || ce("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase())
                return e.defaultValue
        }),
        le(function(e) {
            return null == e.getAttribute("disabled")
        }) || ce(H, function(e, t, n) {
            var i;
            if (!n)
                return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }),
        re
    }(e);
    w.find = k,
    w.expr = k.selectors,
    w.expr[":"] = w.expr.pseudos,
    w.uniqueSort = w.unique = k.uniqueSort,
    w.text = k.getText,
    w.isXMLDoc = k.isXML,
    w.contains = k.contains,
    w.escapeSelector = k.escape;
    var S = function(e, t, n) {
        for (var i = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
            if (1 === e.nodeType) {
                if (o && w(e).is(n))
                    break;
                i.push(e)
            }
        return i
    }
      , $ = function(e, t) {
        for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
        return n
    }
      , C = w.expr.match.needsContext;
    function j(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function E(e, t, n) {
        return v(t) ? w.grep(e, function(e, i) {
            return !!t.call(e, i, e) !== n
        }) : t.nodeType ? w.grep(e, function(e) {
            return e === t !== n
        }) : "string" != typeof t ? w.grep(e, function(e) {
            return l.call(t, e) > -1 !== n
        }) : w.filter(t, e, n)
    }
    w.filter = function(e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === i.nodeType ? w.find.matchesSelector(i, e) ? [i] : [] : w.find.matches(e, w.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }
    ,
    w.fn.extend({
        find: function(e) {
            var t, n, i = this.length, o = this;
            if ("string" != typeof e)
                return this.pushStack(w(e).filter(function() {
                    for (t = 0; t < i; t++)
                        if (w.contains(o[t], this))
                            return !0
                }));
            for (n = this.pushStack([]),
            t = 0; t < i; t++)
                w.find(e, o[t], n);
            return i > 1 ? w.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(E(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(E(this, e || [], !0))
        },
        is: function(e) {
            return !!E(this, "string" == typeof e && C.test(e) ? w(e) : e || [], !1).length
        }
    });
    var P, D = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (w.fn.init = function(e, t, n) {
        var o, r;
        if (!e)
            return this;
        if (n = n || P,
        "string" == typeof e) {
            if (!(o = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : D.exec(e)) || !o[1] && t)
                return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (o[1]) {
                if (t = t instanceof w ? t[0] : t,
                w.merge(this, w.parseHTML(o[1], t && t.nodeType ? t.ownerDocument || t : i, !0)),
                A.test(o[1]) && w.isPlainObject(t))
                    for (o in t)
                        v(this[o]) ? this[o](t[o]) : this.attr(o, t[o]);
                return this
            }
            return (r = i.getElementById(o[2])) && (this[0] = r,
            this.length = 1),
            this
        }
        return e.nodeType ? (this[0] = e,
        this.length = 1,
        this) : v(e) ? void 0 !== n.ready ? n.ready(e) : e(w) : w.makeArray(e, this)
    }
    ).prototype = w.fn,
    P = w(i);
    var O = /^(?:parents|prev(?:Until|All))/
      , L = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    function N(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; )
            ;
        return e
    }
    w.fn.extend({
        has: function(e) {
            var t = w(e, this)
              , n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (w.contains(this, t[e]))
                        return !0
            })
        },
        closest: function(e, t) {
            var n, i = 0, o = this.length, r = [], s = "string" != typeof e && w(e);
            if (!C.test(e))
                for (; i < o; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && w.find.matchesSelector(n, e))) {
                            r.push(n);
                            break
                        }
            return this.pushStack(r.length > 1 ? w.uniqueSort(r) : r)
        },
        index: function(e) {
            return e ? "string" == typeof e ? l.call(w(e), this[0]) : l.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
    w.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return S(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return S(e, "parentNode", n)
        },
        next: function(e) {
            return N(e, "nextSibling")
        },
        prev: function(e) {
            return N(e, "previousSibling")
        },
        nextAll: function(e) {
            return S(e, "nextSibling")
        },
        prevAll: function(e) {
            return S(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return S(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return S(e, "previousSibling", n)
        },
        siblings: function(e) {
            return $((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return $(e.firstChild)
        },
        contents: function(e) {
            return j(e, "iframe") ? e.contentDocument : (j(e, "template") && (e = e.content || e),
            w.merge([], e.childNodes))
        }
    }, function(e, t) {
        w.fn[e] = function(n, i) {
            var o = w.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n),
            i && "string" == typeof i && (o = w.filter(i, o)),
            this.length > 1 && (L[e] || w.uniqueSort(o),
            O.test(e) && o.reverse()),
            this.pushStack(o)
        }
    });
    var H = /[^\x20\t\r\n\f]+/g;
    function M(e) {
        return e
    }
    function q(e) {
        throw e
    }
    function I(e, t, n, i) {
        var o;
        try {
            e && v(o = e.promise) ? o.call(e).done(t).fail(n) : e && v(o = e.then) ? o.call(e, t, n) : t.apply(void 0, [e].slice(i))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    w.Callbacks = function(e) {
        e = "string" == typeof e ? function(e) {
            var t = {};
            return w.each(e.match(H) || [], function(e, n) {
                t[n] = !0
            }),
            t
        }(e) : w.extend({}, e);
        var t, n, i, o, r = [], s = [], a = -1, l = function() {
            for (o = o || e.once,
            i = t = !0; s.length; a = -1)
                for (n = s.shift(); ++a < r.length; )
                    !1 === r[a].apply(n[0], n[1]) && e.stopOnFalse && (a = r.length,
                    n = !1);
            e.memory || (n = !1),
            t = !1,
            o && (r = n ? [] : "")
        }, c = {
            add: function() {
                return r && (n && !t && (a = r.length - 1,
                s.push(n)),
                function t(n) {
                    w.each(n, function(n, i) {
                        v(i) ? e.unique && c.has(i) || r.push(i) : i && i.length && "string" !== b(i) && t(i)
                    })
                }(arguments),
                n && !t && l()),
                this
            },
            remove: function() {
                return w.each(arguments, function(e, t) {
                    for (var n; (n = w.inArray(t, r, n)) > -1; )
                        r.splice(n, 1),
                        n <= a && a--
                }),
                this
            },
            has: function(e) {
                return e ? w.inArray(e, r) > -1 : r.length > 0
            },
            empty: function() {
                return r && (r = []),
                this
            },
            disable: function() {
                return o = s = [],
                r = n = "",
                this
            },
            disabled: function() {
                return !r
            },
            lock: function() {
                return o = s = [],
                n || t || (r = n = ""),
                this
            },
            locked: function() {
                return !!o
            },
            fireWith: function(e, n) {
                return o || (n = [e, (n = n || []).slice ? n.slice() : n],
                s.push(n),
                t || l()),
                this
            },
            fire: function() {
                return c.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!i
            }
        };
        return c
    }
    ,
    w.extend({
        Deferred: function(t) {
            var n = [["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2], ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"]]
              , i = "pending"
              , o = {
                state: function() {
                    return i
                },
                always: function() {
                    return r.done(arguments).fail(arguments),
                    this
                },
                catch: function(e) {
                    return o.then(null, e)
                },
                pipe: function() {
                    var e = arguments;
                    return w.Deferred(function(t) {
                        w.each(n, function(n, i) {
                            var o = v(e[i[4]]) && e[i[4]];
                            r[i[1]](function() {
                                var e = o && o.apply(this, arguments);
                                e && v(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[i[0] + "With"](this, o ? [e] : arguments)
                            })
                        }),
                        e = null
                    }).promise()
                },
                then: function(t, i, o) {
                    var r = 0;
                    function s(t, n, i, o) {
                        return function() {
                            var a = this
                              , l = arguments
                              , c = function() {
                                var e, c;
                                if (!(t < r)) {
                                    if ((e = i.apply(a, l)) === n.promise())
                                        throw new TypeError("Thenable self-resolution");
                                    c = e && ("object" == typeof e || "function" == typeof e) && e.then,
                                    v(c) ? o ? c.call(e, s(r, n, M, o), s(r, n, q, o)) : (r++,
                                    c.call(e, s(r, n, M, o), s(r, n, q, o), s(r, n, M, n.notifyWith))) : (i !== M && (a = void 0,
                                    l = [e]),
                                    (o || n.resolveWith)(a, l))
                                }
                            }
                              , u = o ? c : function() {
                                try {
                                    c()
                                } catch (e) {
                                    w.Deferred.exceptionHook && w.Deferred.exceptionHook(e, u.stackTrace),
                                    t + 1 >= r && (i !== q && (a = void 0,
                                    l = [e]),
                                    n.rejectWith(a, l))
                                }
                            }
                            ;
                            t ? u() : (w.Deferred.getStackHook && (u.stackTrace = w.Deferred.getStackHook()),
                            e.setTimeout(u))
                        }
                    }
                    return w.Deferred(function(e) {
                        n[0][3].add(s(0, e, v(o) ? o : M, e.notifyWith)),
                        n[1][3].add(s(0, e, v(t) ? t : M)),
                        n[2][3].add(s(0, e, v(i) ? i : q))
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? w.extend(e, o) : o
                }
            }
              , r = {};
            return w.each(n, function(e, t) {
                var s = t[2]
                  , a = t[5];
                o[t[1]] = s.add,
                a && s.add(function() {
                    i = a
                }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock),
                s.add(t[3].fire),
                r[t[0]] = function() {
                    return r[t[0] + "With"](this === r ? void 0 : this, arguments),
                    this
                }
                ,
                r[t[0] + "With"] = s.fireWith
            }),
            o.promise(r),
            t && t.call(r, r),
            r
        },
        when: function(e) {
            var t = arguments.length
              , n = t
              , i = Array(n)
              , o = r.call(arguments)
              , s = w.Deferred()
              , a = function(e) {
                return function(n) {
                    i[e] = this,
                    o[e] = arguments.length > 1 ? r.call(arguments) : n,
                    --t || s.resolveWith(i, o)
                }
            };
            if (t <= 1 && (I(e, s.done(a(n)).resolve, s.reject, !t),
            "pending" === s.state() || v(o[n] && o[n].then)))
                return s.then();
            for (; n--; )
                I(o[n], a(n), s.reject);
            return s.promise()
        }
    });
    var z = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    w.Deferred.exceptionHook = function(t, n) {
        e.console && e.console.warn && t && z.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }
    ,
    w.readyException = function(t) {
        e.setTimeout(function() {
            throw t
        })
    }
    ;
    var F = w.Deferred();
    function W() {
        i.removeEventListener("DOMContentLoaded", W),
        e.removeEventListener("load", W),
        w.ready()
    }
    w.fn.ready = function(e) {
        return F.then(e).catch(function(e) {
            w.readyException(e)
        }),
        this
    }
    ,
    w.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --w.readyWait : w.isReady) || (w.isReady = !0,
            !0 !== e && --w.readyWait > 0 || F.resolveWith(i, [w]))
        }
    }),
    w.ready.then = F.then,
    "complete" === i.readyState || "loading" !== i.readyState && !i.documentElement.doScroll ? e.setTimeout(w.ready) : (i.addEventListener("DOMContentLoaded", W),
    e.addEventListener("load", W));
    var R = function(e, t, n, i, o, r, s) {
        var a = 0
          , l = e.length
          , c = null == n;
        if ("object" === b(n))
            for (a in o = !0,
            n)
                R(e, t, a, n[a], !0, r, s);
        else if (void 0 !== i && (o = !0,
        v(i) || (s = !0),
        c && (s ? (t.call(e, i),
        t = null) : (c = t,
        t = function(e, t, n) {
            return c.call(w(e), n)
        }
        )),
        t))
            for (; a < l; a++)
                t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
        return o ? e : c ? t.call(e) : l ? t(e[0], n) : r
    }
      , B = /^-ms-/
      , X = /-([a-z])/g;
    function _(e, t) {
        return t.toUpperCase()
    }
    function U(e) {
        return e.replace(B, "ms-").replace(X, _)
    }
    var Y = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };
    function V() {
        this.expando = w.expando + V.uid++
    }
    V.uid = 1,
    V.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {},
            Y(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))),
            t
        },
        set: function(e, t, n) {
            var i, o = this.cache(e);
            if ("string" == typeof t)
                o[U(t)] = n;
            else
                for (i in t)
                    o[U(i)] = t[i];
            return o
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][U(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n),
            void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, i = e[this.expando];
            if (void 0 !== i) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(U) : (t = U(t))in i ? [t] : t.match(H) || []).length;
                    for (; n--; )
                        delete i[t[n]]
                }
                (void 0 === t || w.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !w.isEmptyObject(t)
        }
    };
    var G = new V
      , Q = new V
      , K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , J = /[A-Z]/g;
    function Z(e, t, n) {
        var i;
        if (void 0 === n && 1 === e.nodeType)
            if (i = "data-" + t.replace(J, "-$&").toLowerCase(),
            "string" == typeof (n = e.getAttribute(i))) {
                try {
                    n = function(e) {
                        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : K.test(e) ? JSON.parse(e) : e)
                    }(n)
                } catch (e) {}
                Q.set(e, t, n)
            } else
                n = void 0;
        return n
    }
    w.extend({
        hasData: function(e) {
            return Q.hasData(e) || G.hasData(e)
        },
        data: function(e, t, n) {
            return Q.access(e, t, n)
        },
        removeData: function(e, t) {
            Q.remove(e, t)
        },
        _data: function(e, t, n) {
            return G.access(e, t, n)
        },
        _removeData: function(e, t) {
            G.remove(e, t)
        }
    }),
    w.fn.extend({
        data: function(e, t) {
            var n, i, o, r = this[0], s = r && r.attributes;
            if (void 0 === e) {
                if (this.length && (o = Q.get(r),
                1 === r.nodeType && !G.get(r, "hasDataAttrs"))) {
                    for (n = s.length; n--; )
                        s[n] && 0 === (i = s[n].name).indexOf("data-") && (i = U(i.slice(5)),
                        Z(r, i, o[i]));
                    G.set(r, "hasDataAttrs", !0)
                }
                return o
            }
            return "object" == typeof e ? this.each(function() {
                Q.set(this, e)
            }) : R(this, function(t) {
                var n;
                if (r && void 0 === t) {
                    if (void 0 !== (n = Q.get(r, e)))
                        return n;
                    if (void 0 !== (n = Z(r, e)))
                        return n
                } else
                    this.each(function() {
                        Q.set(this, e, t)
                    })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                Q.remove(this, e)
            })
        }
    }),
    w.extend({
        queue: function(e, t, n) {
            var i;
            if (e)
                return t = (t || "fx") + "queue",
                i = G.get(e, t),
                n && (!i || Array.isArray(n) ? i = G.access(e, t, w.makeArray(n)) : i.push(n)),
                i || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = w.queue(e, t)
              , i = n.length
              , o = n.shift()
              , r = w._queueHooks(e, t);
            "inprogress" === o && (o = n.shift(),
            i--),
            o && ("fx" === t && n.unshift("inprogress"),
            delete r.stop,
            o.call(e, function() {
                w.dequeue(e, t)
            }, r)),
            !i && r && r.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return G.get(e, n) || G.access(e, n, {
                empty: w.Callbacks("once memory").add(function() {
                    G.remove(e, [t + "queue", n])
                })
            })
        }
    }),
    w.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e,
            e = "fx",
            n--),
            arguments.length < n ? w.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = w.queue(this, e, t);
                w._queueHooks(this, e),
                "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                w.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, i = 1, o = w.Deferred(), r = this, s = this.length, a = function() {
                --i || o.resolveWith(r, [r])
            };
            for ("string" != typeof e && (t = e,
            e = void 0),
            e = e || "fx"; s--; )
                (n = G.get(r[s], e + "queueHooks")) && n.empty && (i++,
                n.empty.add(a));
            return a(),
            o.promise(t)
        }
    });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$","i")
      , ne = ["Top", "Right", "Bottom", "Left"]
      , ie = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && w.contains(e.ownerDocument, e) && "none" === w.css(e, "display")
    }
      , oe = function(e, t, n, i) {
        var o, r, s = {};
        for (r in t)
            s[r] = e.style[r],
            e.style[r] = t[r];
        for (r in o = n.apply(e, i || []),
        t)
            e.style[r] = s[r];
        return o
    };
    function re(e, t, n, i) {
        var o, r, s = 20, a = i ? function() {
            return i.cur()
        }
        : function() {
            return w.css(e, t, "")
        }
        , l = a(), c = n && n[3] || (w.cssNumber[t] ? "" : "px"), u = (w.cssNumber[t] || "px" !== c && +l) && te.exec(w.css(e, t));
        if (u && u[3] !== c) {
            for (l /= 2,
            c = c || u[3],
            u = +l || 1; s--; )
                w.style(e, t, u + c),
                (1 - r) * (1 - (r = a() / l || .5)) <= 0 && (s = 0),
                u /= r;
            u *= 2,
            w.style(e, t, u + c),
            n = n || []
        }
        return n && (u = +u || +l || 0,
        o = n[1] ? u + (n[1] + 1) * n[2] : +n[2],
        i && (i.unit = c,
        i.start = u,
        i.end = o)),
        o
    }
    var se = {};
    function ae(e) {
        var t, n = e.ownerDocument, i = e.nodeName, o = se[i];
        return o || (t = n.body.appendChild(n.createElement(i)),
        o = w.css(t, "display"),
        t.parentNode.removeChild(t),
        "none" === o && (o = "block"),
        se[i] = o,
        o)
    }
    function le(e, t) {
        for (var n, i, o = [], r = 0, s = e.length; r < s; r++)
            (i = e[r]).style && (n = i.style.display,
            t ? ("none" === n && (o[r] = G.get(i, "display") || null,
            o[r] || (i.style.display = "")),
            "" === i.style.display && ie(i) && (o[r] = ae(i))) : "none" !== n && (o[r] = "none",
            G.set(i, "display", n)));
        for (r = 0; r < s; r++)
            null != o[r] && (e[r].style.display = o[r]);
        return e
    }
    w.fn.extend({
        show: function() {
            return le(this, !0)
        },
        hide: function() {
            return le(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                ie(this) ? w(this).show() : w(this).hide()
            })
        }
    });
    var ce = /^(?:checkbox|radio)$/i
      , ue = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i
      , de = /^$|^module$|\/(?:java|ecma)script/i
      , pe = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    function fe(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [],
        void 0 === t || t && j(e, t) ? w.merge([e], n) : n
    }
    function he(e, t) {
        for (var n = 0, i = e.length; n < i; n++)
            G.set(e[n], "globalEval", !t || G.get(t[n], "globalEval"))
    }
    pe.optgroup = pe.option,
    pe.tbody = pe.tfoot = pe.colgroup = pe.caption = pe.thead,
    pe.th = pe.td;
    var ve = /<|&#?\w+;/;
    function me(e, t, n, i, o) {
        for (var r, s, a, l, c, u, d = t.createDocumentFragment(), p = [], f = 0, h = e.length; f < h; f++)
            if ((r = e[f]) || 0 === r)
                if ("object" === b(r))
                    w.merge(p, r.nodeType ? [r] : r);
                else if (ve.test(r)) {
                    for (s = s || d.appendChild(t.createElement("div")),
                    a = (ue.exec(r) || ["", ""])[1].toLowerCase(),
                    l = pe[a] || pe._default,
                    s.innerHTML = l[1] + w.htmlPrefilter(r) + l[2],
                    u = l[0]; u--; )
                        s = s.lastChild;
                    w.merge(p, s.childNodes),
                    (s = d.firstChild).textContent = ""
                } else
                    p.push(t.createTextNode(r));
        for (d.textContent = "",
        f = 0; r = p[f++]; )
            if (i && w.inArray(r, i) > -1)
                o && o.push(r);
            else if (c = w.contains(r.ownerDocument, r),
            s = fe(d.appendChild(r), "script"),
            c && he(s),
            n)
                for (u = 0; r = s[u++]; )
                    de.test(r.type || "") && n.push(r);
        return d
    }
    !function() {
        var e = i.createDocumentFragment().appendChild(i.createElement("div"))
          , t = i.createElement("input");
        t.setAttribute("type", "radio"),
        t.setAttribute("checked", "checked"),
        t.setAttribute("name", "t"),
        e.appendChild(t),
        h.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked,
        e.innerHTML = "<textarea>x</textarea>",
        h.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
    }();
    var ge = i.documentElement
      , ye = /^key/
      , be = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
      , we = /^([^.]*)(?:\.(.+)|)/;
    function xe() {
        return !0
    }
    function Te() {
        return !1
    }
    function ke() {
        try {
            return i.activeElement
        } catch (e) {}
    }
    function Se(e, t, n, i, o, r) {
        var s, a;
        if ("object" == typeof t) {
            for (a in "string" != typeof n && (i = i || n,
            n = void 0),
            t)
                Se(e, a, n, i, t[a], r);
            return e
        }
        if (null == i && null == o ? (o = n,
        i = n = void 0) : null == o && ("string" == typeof n ? (o = i,
        i = void 0) : (o = i,
        i = n,
        n = void 0)),
        !1 === o)
            o = Te;
        else if (!o)
            return e;
        return 1 === r && (s = o,
        (o = function(e) {
            return w().off(e),
            s.apply(this, arguments)
        }
        ).guid = s.guid || (s.guid = w.guid++)),
        e.each(function() {
            w.event.add(this, t, o, i, n)
        })
    }
    w.event = {
        global: {},
        add: function(e, t, n, i, o) {
            var r, s, a, l, c, u, d, p, f, h, v, m = G.get(e);
            if (m)
                for (n.handler && (n = (r = n).handler,
                o = r.selector),
                o && w.find.matchesSelector(ge, o),
                n.guid || (n.guid = w.guid++),
                (l = m.events) || (l = m.events = {}),
                (s = m.handle) || (s = m.handle = function(t) {
                    return void 0 !== w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0
                }
                ),
                c = (t = (t || "").match(H) || [""]).length; c--; )
                    f = v = (a = we.exec(t[c]) || [])[1],
                    h = (a[2] || "").split(".").sort(),
                    f && (d = w.event.special[f] || {},
                    f = (o ? d.delegateType : d.bindType) || f,
                    d = w.event.special[f] || {},
                    u = w.extend({
                        type: f,
                        origType: v,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: o,
                        needsContext: o && w.expr.match.needsContext.test(o),
                        namespace: h.join(".")
                    }, r),
                    (p = l[f]) || ((p = l[f] = []).delegateCount = 0,
                    d.setup && !1 !== d.setup.call(e, i, h, s) || e.addEventListener && e.addEventListener(f, s)),
                    d.add && (d.add.call(e, u),
                    u.handler.guid || (u.handler.guid = n.guid)),
                    o ? p.splice(p.delegateCount++, 0, u) : p.push(u),
                    w.event.global[f] = !0)
        },
        remove: function(e, t, n, i, o) {
            var r, s, a, l, c, u, d, p, f, h, v, m = G.hasData(e) && G.get(e);
            if (m && (l = m.events)) {
                for (c = (t = (t || "").match(H) || [""]).length; c--; )
                    if (f = v = (a = we.exec(t[c]) || [])[1],
                    h = (a[2] || "").split(".").sort(),
                    f) {
                        for (d = w.event.special[f] || {},
                        p = l[f = (i ? d.delegateType : d.bindType) || f] || [],
                        a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        s = r = p.length; r--; )
                            u = p[r],
                            !o && v !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (p.splice(r, 1),
                            u.selector && p.delegateCount--,
                            d.remove && d.remove.call(e, u));
                        s && !p.length && (d.teardown && !1 !== d.teardown.call(e, h, m.handle) || w.removeEvent(e, f, m.handle),
                        delete l[f])
                    } else
                        for (f in l)
                            w.event.remove(e, f + t[c], n, i, !0);
                w.isEmptyObject(l) && G.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, i, o, r, s, a = w.event.fix(e), l = new Array(arguments.length), c = (G.get(this, "events") || {})[a.type] || [], u = w.event.special[a.type] || {};
            for (l[0] = a,
            t = 1; t < arguments.length; t++)
                l[t] = arguments[t];
            if (a.delegateTarget = this,
            !u.preDispatch || !1 !== u.preDispatch.call(this, a)) {
                for (s = w.event.handlers.call(this, a, c),
                t = 0; (o = s[t++]) && !a.isPropagationStopped(); )
                    for (a.currentTarget = o.elem,
                    n = 0; (r = o.handlers[n++]) && !a.isImmediatePropagationStopped(); )
                        a.rnamespace && !a.rnamespace.test(r.namespace) || (a.handleObj = r,
                        a.data = r.data,
                        void 0 !== (i = ((w.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, l)) && !1 === (a.result = i) && (a.preventDefault(),
                        a.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, a),
                a.result
            }
        },
        handlers: function(e, t) {
            var n, i, o, r, s, a = [], l = t.delegateCount, c = e.target;
            if (l && c.nodeType && !("click" === e.type && e.button >= 1))
                for (; c !== this; c = c.parentNode || this)
                    if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                        for (r = [],
                        s = {},
                        n = 0; n < l; n++)
                            void 0 === s[o = (i = t[n]).selector + " "] && (s[o] = i.needsContext ? w(o, this).index(c) > -1 : w.find(o, this, null, [c]).length),
                            s[o] && r.push(i);
                        r.length && a.push({
                            elem: c,
                            handlers: r
                        })
                    }
            return c = this,
            l < t.length && a.push({
                elem: c,
                handlers: t.slice(l)
            }),
            a
        },
        addProp: function(e, t) {
            Object.defineProperty(w.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: v(t) ? function() {
                    if (this.originalEvent)
                        return t(this.originalEvent)
                }
                : function() {
                    if (this.originalEvent)
                        return this.originalEvent[e]
                }
                ,
                set: function(t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function(e) {
            return e[w.expando] ? e : new w.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== ke() && this.focus)
                        return this.focus(),
                        !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === ke() && this.blur)
                        return this.blur(),
                        !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && j(this, "input"))
                        return this.click(),
                        !1
                },
                _default: function(e) {
                    return j(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    },
    w.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }
    ,
    w.Event = function(e, t) {
        if (!(this instanceof w.Event))
            return new w.Event(e,t);
        e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? xe : Te,
        this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
        this.currentTarget = e.currentTarget,
        this.relatedTarget = e.relatedTarget) : this.type = e,
        t && w.extend(this, t),
        this.timeStamp = e && e.timeStamp || Date.now(),
        this[w.expando] = !0
    }
    ,
    w.Event.prototype = {
        constructor: w.Event,
        isDefaultPrevented: Te,
        isPropagationStopped: Te,
        isImmediatePropagationStopped: Te,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = xe,
            e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = xe,
            e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = xe,
            e && !this.isSimulated && e.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    w.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var t = e.button;
            return null == e.which && ye.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && be.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, w.event.addProp),
    w.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        w.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, i = e.relatedTarget, o = e.handleObj;
                return i && (i === this || w.contains(this, i)) || (e.type = o.origType,
                n = o.handler.apply(this, arguments),
                e.type = t),
                n
            }
        }
    }),
    w.fn.extend({
        on: function(e, t, n, i) {
            return Se(this, e, t, n, i)
        },
        one: function(e, t, n, i) {
            return Se(this, e, t, n, i, 1)
        },
        off: function(e, t, n) {
            var i, o;
            if (e && e.preventDefault && e.handleObj)
                return i = e.handleObj,
                w(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler),
                this;
            if ("object" == typeof e) {
                for (o in e)
                    this.off(o, t, e[o]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t,
            t = void 0),
            !1 === n && (n = Te),
            this.each(function() {
                w.event.remove(this, e, n, t)
            })
        }
    });
    var $e = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi
      , Ce = /<script|<style|<link/i
      , je = /checked\s*(?:[^=]|=\s*.checked.)/i
      , Ae = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function Ee(e, t) {
        return j(e, "table") && j(11 !== t.nodeType ? t : t.firstChild, "tr") && w(e).children("tbody")[0] || e
    }
    function Pe(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
        e
    }
    function De(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"),
        e
    }
    function Oe(e, t) {
        var n, i, o, r, s, a, l, c;
        if (1 === t.nodeType) {
            if (G.hasData(e) && (r = G.access(e),
            s = G.set(t, r),
            c = r.events))
                for (o in delete s.handle,
                s.events = {},
                c)
                    for (n = 0,
                    i = c[o].length; n < i; n++)
                        w.event.add(t, o, c[o][n]);
            Q.hasData(e) && (a = Q.access(e),
            l = w.extend({}, a),
            Q.set(t, l))
        }
    }
    function Le(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && ce.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }
    function Ne(e, t, n, i) {
        t = s.apply([], t);
        var o, r, a, l, c, u, d = 0, p = e.length, f = p - 1, m = t[0], g = v(m);
        if (g || p > 1 && "string" == typeof m && !h.checkClone && je.test(m))
            return e.each(function(o) {
                var r = e.eq(o);
                g && (t[0] = m.call(this, o, r.html())),
                Ne(r, t, n, i)
            });
        if (p && (r = (o = me(t, e[0].ownerDocument, !1, e, i)).firstChild,
        1 === o.childNodes.length && (o = r),
        r || i)) {
            for (l = (a = w.map(fe(o, "script"), Pe)).length; d < p; d++)
                c = o,
                d !== f && (c = w.clone(c, !0, !0),
                l && w.merge(a, fe(c, "script"))),
                n.call(e[d], c, d);
            if (l)
                for (u = a[a.length - 1].ownerDocument,
                w.map(a, De),
                d = 0; d < l; d++)
                    c = a[d],
                    de.test(c.type || "") && !G.access(c, "globalEval") && w.contains(u, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? w._evalUrl && w._evalUrl(c.src) : y(c.textContent.replace(Ae, ""), u, c))
        }
        return e
    }
    function He(e, t, n) {
        for (var i, o = t ? w.filter(t, e) : e, r = 0; null != (i = o[r]); r++)
            n || 1 !== i.nodeType || w.cleanData(fe(i)),
            i.parentNode && (n && w.contains(i.ownerDocument, i) && he(fe(i, "script")),
            i.parentNode.removeChild(i));
        return e
    }
    w.extend({
        htmlPrefilter: function(e) {
            return e.replace($e, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var i, o, r, s, a = e.cloneNode(!0), l = w.contains(e.ownerDocument, e);
            if (!(h.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || w.isXMLDoc(e)))
                for (s = fe(a),
                i = 0,
                o = (r = fe(e)).length; i < o; i++)
                    Le(r[i], s[i]);
            if (t)
                if (n)
                    for (r = r || fe(e),
                    s = s || fe(a),
                    i = 0,
                    o = r.length; i < o; i++)
                        Oe(r[i], s[i]);
                else
                    Oe(e, a);
            return (s = fe(a, "script")).length > 0 && he(s, !l && fe(e, "script")),
            a
        },
        cleanData: function(e) {
            for (var t, n, i, o = w.event.special, r = 0; void 0 !== (n = e[r]); r++)
                if (Y(n)) {
                    if (t = n[G.expando]) {
                        if (t.events)
                            for (i in t.events)
                                o[i] ? w.event.remove(n, i) : w.removeEvent(n, i, t.handle);
                        n[G.expando] = void 0
                    }
                    n[Q.expando] && (n[Q.expando] = void 0)
                }
        }
    }),
    w.fn.extend({
        detach: function(e) {
            return He(this, e, !0)
        },
        remove: function(e) {
            return He(this, e)
        },
        text: function(e) {
            return R(this, function(e) {
                return void 0 === e ? w.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return Ne(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Ee(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return Ne(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Ee(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return Ne(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return Ne(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++)
                1 === e.nodeType && (w.cleanData(fe(e, !1)),
                e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e,
            t = null == t ? e : t,
            this.map(function() {
                return w.clone(this, e, t)
            })
        },
        html: function(e) {
            return R(this, function(e) {
                var t = this[0] || {}
                  , n = 0
                  , i = this.length;
                if (void 0 === e && 1 === t.nodeType)
                    return t.innerHTML;
                if ("string" == typeof e && !Ce.test(e) && !pe[(ue.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = w.htmlPrefilter(e);
                    try {
                        for (; n < i; n++)
                            1 === (t = this[n] || {}).nodeType && (w.cleanData(fe(t, !1)),
                            t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return Ne(this, arguments, function(t) {
                var n = this.parentNode;
                w.inArray(this, e) < 0 && (w.cleanData(fe(this)),
                n && n.replaceChild(t, this))
            }, e)
        }
    }),
    w.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        w.fn[e] = function(e) {
            for (var n, i = [], o = w(e), r = o.length - 1, s = 0; s <= r; s++)
                n = s === r ? this : this.clone(!0),
                w(o[s])[t](n),
                a.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var Me = new RegExp("^(" + ee + ")(?!px)[a-z%]+$","i")
      , qe = function(t) {
        var n = t.ownerDocument.defaultView;
        return n && n.opener || (n = e),
        n.getComputedStyle(t)
    }
      , Ie = new RegExp(ne.join("|"),"i");
    function ze(e, t, n) {
        var i, o, r, s, a = e.style;
        return (n = n || qe(e)) && ("" !== (s = n.getPropertyValue(t) || n[t]) || w.contains(e.ownerDocument, e) || (s = w.style(e, t)),
        !h.pixelBoxStyles() && Me.test(s) && Ie.test(t) && (i = a.width,
        o = a.minWidth,
        r = a.maxWidth,
        a.minWidth = a.maxWidth = a.width = s,
        s = n.width,
        a.width = i,
        a.minWidth = o,
        a.maxWidth = r)),
        void 0 !== s ? s + "" : s
    }
    function Fe(e, t) {
        return {
            get: function() {
                if (!e())
                    return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }
    !function() {
        function t() {
            if (u) {
                c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
                u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
                ge.appendChild(c).appendChild(u);
                var t = e.getComputedStyle(u);
                o = "1%" !== t.top,
                l = 12 === n(t.marginLeft),
                u.style.right = "60%",
                a = 36 === n(t.right),
                r = 36 === n(t.width),
                u.style.position = "absolute",
                s = 36 === u.offsetWidth || "absolute",
                ge.removeChild(c),
                u = null
            }
        }
        function n(e) {
            return Math.round(parseFloat(e))
        }
        var o, r, s, a, l, c = i.createElement("div"), u = i.createElement("div");
        u.style && (u.style.backgroundClip = "content-box",
        u.cloneNode(!0).style.backgroundClip = "",
        h.clearCloneStyle = "content-box" === u.style.backgroundClip,
        w.extend(h, {
            boxSizingReliable: function() {
                return t(),
                r
            },
            pixelBoxStyles: function() {
                return t(),
                a
            },
            pixelPosition: function() {
                return t(),
                o
            },
            reliableMarginLeft: function() {
                return t(),
                l
            },
            scrollboxSize: function() {
                return t(),
                s
            }
        }))
    }();
    var We = /^(none|table(?!-c[ea]).+)/
      , Re = /^--/
      , Be = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , Xe = {
        letterSpacing: "0",
        fontWeight: "400"
    }
      , _e = ["Webkit", "Moz", "ms"]
      , Ue = i.createElement("div").style;
    function Ye(e) {
        var t = w.cssProps[e];
        return t || (t = w.cssProps[e] = function(e) {
            if (e in Ue)
                return e;
            for (var t = e[0].toUpperCase() + e.slice(1), n = _e.length; n--; )
                if ((e = _e[n] + t)in Ue)
                    return e
        }(e) || e),
        t
    }
    function Ve(e, t, n) {
        var i = te.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
    }
    function Ge(e, t, n, i, o, r) {
        var s = "width" === t ? 1 : 0
          , a = 0
          , l = 0;
        if (n === (i ? "border" : "content"))
            return 0;
        for (; s < 4; s += 2)
            "margin" === n && (l += w.css(e, n + ne[s], !0, o)),
            i ? ("content" === n && (l -= w.css(e, "padding" + ne[s], !0, o)),
            "margin" !== n && (l -= w.css(e, "border" + ne[s] + "Width", !0, o))) : (l += w.css(e, "padding" + ne[s], !0, o),
            "padding" !== n ? l += w.css(e, "border" + ne[s] + "Width", !0, o) : a += w.css(e, "border" + ne[s] + "Width", !0, o));
        return !i && r >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - r - l - a - .5))),
        l
    }
    function Qe(e, t, n) {
        var i = qe(e)
          , o = ze(e, t, i)
          , r = "border-box" === w.css(e, "boxSizing", !1, i)
          , s = r;
        if (Me.test(o)) {
            if (!n)
                return o;
            o = "auto"
        }
        return s = s && (h.boxSizingReliable() || o === e.style[t]),
        ("auto" === o || !parseFloat(o) && "inline" === w.css(e, "display", !1, i)) && (o = e["offset" + t[0].toUpperCase() + t.slice(1)],
        s = !0),
        (o = parseFloat(o) || 0) + Ge(e, t, n || (r ? "border" : "content"), s, i, o) + "px"
    }
    function Ke(e, t, n, i, o) {
        return new Ke.prototype.init(e,t,n,i,o)
    }
    w.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = ze(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, r, s, a = U(t), l = Re.test(t), c = e.style;
                if (l || (t = Ye(a)),
                s = w.cssHooks[t] || w.cssHooks[a],
                void 0 === n)
                    return s && "get"in s && void 0 !== (o = s.get(e, !1, i)) ? o : c[t];
                "string" == (r = typeof n) && (o = te.exec(n)) && o[1] && (n = re(e, t, o),
                r = "number"),
                null != n && n == n && ("number" === r && (n += o && o[3] || (w.cssNumber[a] ? "" : "px")),
                h.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"),
                s && "set"in s && void 0 === (n = s.set(e, n, i)) || (l ? c.setProperty(t, n) : c[t] = n))
            }
        },
        css: function(e, t, n, i) {
            var o, r, s, a = U(t);
            return Re.test(t) || (t = Ye(a)),
            (s = w.cssHooks[t] || w.cssHooks[a]) && "get"in s && (o = s.get(e, !0, n)),
            void 0 === o && (o = ze(e, t, i)),
            "normal" === o && t in Xe && (o = Xe[t]),
            "" === n || n ? (r = parseFloat(o),
            !0 === n || isFinite(r) ? r || 0 : o) : o
        }
    }),
    w.each(["height", "width"], function(e, t) {
        w.cssHooks[t] = {
            get: function(e, n, i) {
                if (n)
                    return !We.test(w.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Qe(e, t, i) : oe(e, Be, function() {
                        return Qe(e, t, i)
                    })
            },
            set: function(e, n, i) {
                var o, r = qe(e), s = "border-box" === w.css(e, "boxSizing", !1, r), a = i && Ge(e, t, i, s, r);
                return s && h.scrollboxSize() === r.position && (a -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(r[t]) - Ge(e, t, "border", !1, r) - .5)),
                a && (o = te.exec(n)) && "px" !== (o[3] || "px") && (e.style[t] = n,
                n = w.css(e, t)),
                Ve(0, n, a)
            }
        }
    }),
    w.cssHooks.marginLeft = Fe(h.reliableMarginLeft, function(e, t) {
        if (t)
            return (parseFloat(ze(e, "marginLeft")) || e.getBoundingClientRect().left - oe(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            })) + "px"
    }),
    w.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        w.cssHooks[e + t] = {
            expand: function(n) {
                for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++)
                    o[e + ne[i] + t] = r[i] || r[i - 2] || r[0];
                return o
            }
        },
        "margin" !== e && (w.cssHooks[e + t].set = Ve)
    }),
    w.fn.extend({
        css: function(e, t) {
            return R(this, function(e, t, n) {
                var i, o, r = {}, s = 0;
                if (Array.isArray(t)) {
                    for (i = qe(e),
                    o = t.length; s < o; s++)
                        r[t[s]] = w.css(e, t[s], !1, i);
                    return r
                }
                return void 0 !== n ? w.style(e, t, n) : w.css(e, t)
            }, e, t, arguments.length > 1)
        }
    }),
    w.Tween = Ke,
    Ke.prototype = {
        constructor: Ke,
        init: function(e, t, n, i, o, r) {
            this.elem = e,
            this.prop = n,
            this.easing = o || w.easing._default,
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = i,
            this.unit = r || (w.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = Ke.propHooks[this.prop];
            return e && e.get ? e.get(this) : Ke.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = Ke.propHooks[this.prop];
            return this.options.duration ? this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : Ke.propHooks._default.set(this),
            this
        }
    },
    Ke.prototype.init.prototype = Ke.prototype,
    Ke.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = w.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                w.fx.step[e.prop] ? w.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[w.cssProps[e.prop]] && !w.cssHooks[e.prop] ? e.elem[e.prop] = e.now : w.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    },
    Ke.propHooks.scrollTop = Ke.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    w.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    },
    w.fx = Ke.prototype.init,
    w.fx.step = {};
    var Je, Ze, et = /^(?:toggle|show|hide)$/, tt = /queueHooks$/;
    function nt() {
        Ze && (!1 === i.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(nt) : e.setTimeout(nt, w.fx.interval),
        w.fx.tick())
    }
    function it() {
        return e.setTimeout(function() {
            Je = void 0
        }),
        Je = Date.now()
    }
    function ot(e, t) {
        var n, i = 0, o = {
            height: e
        };
        for (t = t ? 1 : 0; i < 4; i += 2 - t)
            o["margin" + (n = ne[i])] = o["padding" + n] = e;
        return t && (o.opacity = o.width = e),
        o
    }
    function rt(e, t, n) {
        for (var i, o = (st.tweeners[t] || []).concat(st.tweeners["*"]), r = 0, s = o.length; r < s; r++)
            if (i = o[r].call(n, t, e))
                return i
    }
    function st(e, t, n) {
        var i, o, r = 0, s = st.prefilters.length, a = w.Deferred().always(function() {
            delete l.elem
        }), l = function() {
            if (o)
                return !1;
            for (var t = Je || it(), n = Math.max(0, c.startTime + c.duration - t), i = 1 - (n / c.duration || 0), r = 0, s = c.tweens.length; r < s; r++)
                c.tweens[r].run(i);
            return a.notifyWith(e, [c, i, n]),
            i < 1 && s ? n : (s || a.notifyWith(e, [c, 1, 0]),
            a.resolveWith(e, [c]),
            !1)
        }, c = a.promise({
            elem: e,
            props: w.extend({}, t),
            opts: w.extend(!0, {
                specialEasing: {},
                easing: w.easing._default
            }, n),
            originalProperties: t,
            originalOptions: n,
            startTime: Je || it(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n) {
                var i = w.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                return c.tweens.push(i),
                i
            },
            stop: function(t) {
                var n = 0
                  , i = t ? c.tweens.length : 0;
                if (o)
                    return this;
                for (o = !0; n < i; n++)
                    c.tweens[n].run(1);
                return t ? (a.notifyWith(e, [c, 1, 0]),
                a.resolveWith(e, [c, t])) : a.rejectWith(e, [c, t]),
                this
            }
        }), u = c.props;
        for (function(e, t) {
            var n, i, o, r, s;
            for (n in e)
                if (o = t[i = U(n)],
                r = e[n],
                Array.isArray(r) && (o = r[1],
                r = e[n] = r[0]),
                n !== i && (e[i] = r,
                delete e[n]),
                (s = w.cssHooks[i]) && "expand"in s)
                    for (n in r = s.expand(r),
                    delete e[i],
                    r)
                        n in e || (e[n] = r[n],
                        t[n] = o);
                else
                    t[i] = o
        }(u, c.opts.specialEasing); r < s; r++)
            if (i = st.prefilters[r].call(c, e, u, c.opts))
                return v(i.stop) && (w._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)),
                i;
        return w.map(u, rt, c),
        v(c.opts.start) && c.opts.start.call(e, c),
        c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always),
        w.fx.timer(w.extend(l, {
            elem: e,
            anim: c,
            queue: c.opts.queue
        })),
        c
    }
    w.Animation = w.extend(st, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return re(n.elem, e, te.exec(t), n),
                n
            }
            ]
        },
        tweener: function(e, t) {
            v(e) ? (t = e,
            e = ["*"]) : e = e.match(H);
            for (var n, i = 0, o = e.length; i < o; i++)
                n = e[i],
                st.tweeners[n] = st.tweeners[n] || [],
                st.tweeners[n].unshift(t)
        },
        prefilters: [function(e, t, n) {
            var i, o, r, s, a, l, c, u, d = "width"in t || "height"in t, p = this, f = {}, h = e.style, v = e.nodeType && ie(e), m = G.get(e, "fxshow");
            for (i in n.queue || (null == (s = w._queueHooks(e, "fx")).unqueued && (s.unqueued = 0,
            a = s.empty.fire,
            s.empty.fire = function() {
                s.unqueued || a()
            }
            ),
            s.unqueued++,
            p.always(function() {
                p.always(function() {
                    s.unqueued--,
                    w.queue(e, "fx").length || s.empty.fire()
                })
            })),
            t)
                if (o = t[i],
                et.test(o)) {
                    if (delete t[i],
                    r = r || "toggle" === o,
                    o === (v ? "hide" : "show")) {
                        if ("show" !== o || !m || void 0 === m[i])
                            continue;
                        v = !0
                    }
                    f[i] = m && m[i] || w.style(e, i)
                }
            if ((l = !w.isEmptyObject(t)) || !w.isEmptyObject(f))
                for (i in d && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY],
                null == (c = m && m.display) && (c = G.get(e, "display")),
                "none" === (u = w.css(e, "display")) && (c ? u = c : (le([e], !0),
                c = e.style.display || c,
                u = w.css(e, "display"),
                le([e]))),
                ("inline" === u || "inline-block" === u && null != c) && "none" === w.css(e, "float") && (l || (p.done(function() {
                    h.display = c
                }),
                null == c && (u = h.display,
                c = "none" === u ? "" : u)),
                h.display = "inline-block")),
                n.overflow && (h.overflow = "hidden",
                p.always(function() {
                    h.overflow = n.overflow[0],
                    h.overflowX = n.overflow[1],
                    h.overflowY = n.overflow[2]
                })),
                l = !1,
                f)
                    l || (m ? "hidden"in m && (v = m.hidden) : m = G.access(e, "fxshow", {
                        display: c
                    }),
                    r && (m.hidden = !v),
                    v && le([e], !0),
                    p.done(function() {
                        for (i in v || le([e]),
                        G.remove(e, "fxshow"),
                        f)
                            w.style(e, i, f[i])
                    })),
                    l = rt(v ? m[i] : 0, i, p),
                    i in m || (m[i] = l.start,
                    v && (l.end = l.start,
                    l.start = 0))
        }
        ],
        prefilter: function(e, t) {
            t ? st.prefilters.unshift(e) : st.prefilters.push(e)
        }
    }),
    w.speed = function(e, t, n) {
        var i = e && "object" == typeof e ? w.extend({}, e) : {
            complete: n || !n && t || v(e) && e,
            duration: e,
            easing: n && t || t && !v(t) && t
        };
        return w.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in w.fx.speeds ? i.duration = w.fx.speeds[i.duration] : i.duration = w.fx.speeds._default),
        null != i.queue && !0 !== i.queue || (i.queue = "fx"),
        i.old = i.complete,
        i.complete = function() {
            v(i.old) && i.old.call(this),
            i.queue && w.dequeue(this, i.queue)
        }
        ,
        i
    }
    ,
    w.fn.extend({
        fadeTo: function(e, t, n, i) {
            return this.filter(ie).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, i)
        },
        animate: function(e, t, n, i) {
            var o = w.isEmptyObject(e)
              , r = w.speed(t, n, i)
              , s = function() {
                var t = st(this, w.extend({}, e), r);
                (o || G.get(this, "finish")) && t.stop(!0)
            };
            return s.finish = s,
            o || !1 === r.queue ? this.each(s) : this.queue(r.queue, s)
        },
        stop: function(e, t, n) {
            var i = function(e) {
                var t = e.stop;
                delete e.stop,
                t(n)
            };
            return "string" != typeof e && (n = t,
            t = e,
            e = void 0),
            t && !1 !== e && this.queue(e || "fx", []),
            this.each(function() {
                var t = !0
                  , o = null != e && e + "queueHooks"
                  , r = w.timers
                  , s = G.get(this);
                if (o)
                    s[o] && s[o].stop && i(s[o]);
                else
                    for (o in s)
                        s[o] && s[o].stop && tt.test(o) && i(s[o]);
                for (o = r.length; o--; )
                    r[o].elem !== this || null != e && r[o].queue !== e || (r[o].anim.stop(n),
                    t = !1,
                    r.splice(o, 1));
                !t && n || w.dequeue(this, e)
            })
        },
        finish: function(e) {
            return !1 !== e && (e = e || "fx"),
            this.each(function() {
                var t, n = G.get(this), i = n[e + "queue"], o = n[e + "queueHooks"], r = w.timers, s = i ? i.length : 0;
                for (n.finish = !0,
                w.queue(this, e, []),
                o && o.stop && o.stop.call(this, !0),
                t = r.length; t--; )
                    r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0),
                    r.splice(t, 1));
                for (t = 0; t < s; t++)
                    i[t] && i[t].finish && i[t].finish.call(this);
                delete n.finish
            })
        }
    }),
    w.each(["toggle", "show", "hide"], function(e, t) {
        var n = w.fn[t];
        w.fn[t] = function(e, i, o) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ot(t, !0), e, i, o)
        }
    }),
    w.each({
        slideDown: ot("show"),
        slideUp: ot("hide"),
        slideToggle: ot("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        w.fn[e] = function(e, n, i) {
            return this.animate(t, e, n, i)
        }
    }),
    w.timers = [],
    w.fx.tick = function() {
        var e, t = 0, n = w.timers;
        for (Je = Date.now(); t < n.length; t++)
            (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || w.fx.stop(),
        Je = void 0
    }
    ,
    w.fx.timer = function(e) {
        w.timers.push(e),
        w.fx.start()
    }
    ,
    w.fx.interval = 13,
    w.fx.start = function() {
        Ze || (Ze = !0,
        nt())
    }
    ,
    w.fx.stop = function() {
        Ze = null
    }
    ,
    w.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    w.fn.delay = function(t, n) {
        return t = w.fx && w.fx.speeds[t] || t,
        n = n || "fx",
        this.queue(n, function(n, i) {
            var o = e.setTimeout(n, t);
            i.stop = function() {
                e.clearTimeout(o)
            }
        })
    }
    ,
    function() {
        var e = i.createElement("input")
          , t = i.createElement("select").appendChild(i.createElement("option"));
        e.type = "checkbox",
        h.checkOn = "" !== e.value,
        h.optSelected = t.selected,
        (e = i.createElement("input")).value = "t",
        e.type = "radio",
        h.radioValue = "t" === e.value
    }();
    var at, lt = w.expr.attrHandle;
    w.fn.extend({
        attr: function(e, t) {
            return R(this, w.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                w.removeAttr(this, e)
            })
        }
    }),
    w.extend({
        attr: function(e, t, n) {
            var i, o, r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r)
                return void 0 === e.getAttribute ? w.prop(e, t, n) : (1 === r && w.isXMLDoc(e) || (o = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? at : void 0)),
                void 0 !== n ? null === n ? void w.removeAttr(e, t) : o && "set"in o && void 0 !== (i = o.set(e, n, t)) ? i : (e.setAttribute(t, n + ""),
                n) : o && "get"in o && null !== (i = o.get(e, t)) ? i : null == (i = w.find.attr(e, t)) ? void 0 : i)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!h.radioValue && "radio" === t && j(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, i = 0, o = t && t.match(H);
            if (o && 1 === e.nodeType)
                for (; n = o[i++]; )
                    e.removeAttribute(n)
        }
    }),
    at = {
        set: function(e, t, n) {
            return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n),
            n
        }
    },
    w.each(w.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = lt[t] || w.find.attr;
        lt[t] = function(e, t, i) {
            var o, r, s = t.toLowerCase();
            return i || (r = lt[s],
            lt[s] = o,
            o = null != n(e, t, i) ? s : null,
            lt[s] = r),
            o
        }
    });
    var ct = /^(?:input|select|textarea|button)$/i
      , ut = /^(?:a|area)$/i;
    function dt(e) {
        return (e.match(H) || []).join(" ")
    }
    function pt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    function ft(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(H) || []
    }
    w.fn.extend({
        prop: function(e, t) {
            return R(this, w.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[w.propFix[e] || e]
            })
        }
    }),
    w.extend({
        prop: function(e, t, n) {
            var i, o, r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r)
                return 1 === r && w.isXMLDoc(e) || (t = w.propFix[t] || t,
                o = w.propHooks[t]),
                void 0 !== n ? o && "set"in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get"in o && null !== (i = o.get(e, t)) ? i : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = w.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : ct.test(e.nodeName) || ut.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }),
    h.optSelected || (w.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex,
            null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex)
        }
    }),
    w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        w.propFix[this.toLowerCase()] = this
    }),
    w.fn.extend({
        addClass: function(e) {
            var t, n, i, o, r, s, a, l = 0;
            if (v(e))
                return this.each(function(t) {
                    w(this).addClass(e.call(this, t, pt(this)))
                });
            if ((t = ft(e)).length)
                for (; n = this[l++]; )
                    if (o = pt(n),
                    i = 1 === n.nodeType && " " + dt(o) + " ") {
                        for (s = 0; r = t[s++]; )
                            i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                        o !== (a = dt(i)) && n.setAttribute("class", a)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, i, o, r, s, a, l = 0;
            if (v(e))
                return this.each(function(t) {
                    w(this).removeClass(e.call(this, t, pt(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ((t = ft(e)).length)
                for (; n = this[l++]; )
                    if (o = pt(n),
                    i = 1 === n.nodeType && " " + dt(o) + " ") {
                        for (s = 0; r = t[s++]; )
                            for (; i.indexOf(" " + r + " ") > -1; )
                                i = i.replace(" " + r + " ", " ");
                        o !== (a = dt(i)) && n.setAttribute("class", a)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e
              , i = "string" === n || Array.isArray(e);
            return "boolean" == typeof t && i ? t ? this.addClass(e) : this.removeClass(e) : v(e) ? this.each(function(n) {
                w(this).toggleClass(e.call(this, n, pt(this), t), t)
            }) : this.each(function() {
                var t, o, r, s;
                if (i)
                    for (o = 0,
                    r = w(this),
                    s = ft(e); t = s[o++]; )
                        r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                else
                    void 0 !== e && "boolean" !== n || ((t = pt(this)) && G.set(this, "__className__", t),
                    this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : G.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, i = 0;
            for (t = " " + e + " "; n = this[i++]; )
                if (1 === n.nodeType && (" " + dt(pt(n)) + " ").indexOf(t) > -1)
                    return !0;
            return !1
        }
    });
    var ht = /\r/g;
    w.fn.extend({
        val: function(e) {
            var t, n, i, o = this[0];
            return arguments.length ? (i = v(e),
            this.each(function(n) {
                var o;
                1 === this.nodeType && (null == (o = i ? e.call(this, n, w(this).val()) : e) ? o = "" : "number" == typeof o ? o += "" : Array.isArray(o) && (o = w.map(o, function(e) {
                    return null == e ? "" : e + ""
                })),
                (t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set"in t && void 0 !== t.set(this, o, "value") || (this.value = o))
            })) : o ? (t = w.valHooks[o.type] || w.valHooks[o.nodeName.toLowerCase()]) && "get"in t && void 0 !== (n = t.get(o, "value")) ? n : "string" == typeof (n = o.value) ? n.replace(ht, "") : null == n ? "" : n : void 0
        }
    }),
    w.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = w.find.attr(e, "value");
                    return null != t ? t : dt(w.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, i, o = e.options, r = e.selectedIndex, s = "select-one" === e.type, a = s ? null : [], l = s ? r + 1 : o.length;
                    for (i = r < 0 ? l : s ? r : 0; i < l; i++)
                        if (((n = o[i]).selected || i === r) && !n.disabled && (!n.parentNode.disabled || !j(n.parentNode, "optgroup"))) {
                            if (t = w(n).val(),
                            s)
                                return t;
                            a.push(t)
                        }
                    return a
                },
                set: function(e, t) {
                    for (var n, i, o = e.options, r = w.makeArray(t), s = o.length; s--; )
                        ((i = o[s]).selected = w.inArray(w.valHooks.option.get(i), r) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1),
                    r
                }
            }
        }
    }),
    w.each(["radio", "checkbox"], function() {
        w.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t))
                    return e.checked = w.inArray(w(e).val(), t) > -1
            }
        },
        h.checkOn || (w.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        }
        )
    }),
    h.focusin = "onfocusin"in e;
    var vt = /^(?:focusinfocus|focusoutblur)$/
      , mt = function(e) {
        e.stopPropagation()
    };
    w.extend(w.event, {
        trigger: function(t, n, o, r) {
            var s, a, l, c, u, p, f, h, g = [o || i], y = d.call(t, "type") ? t.type : t, b = d.call(t, "namespace") ? t.namespace.split(".") : [];
            if (a = h = l = o = o || i,
            3 !== o.nodeType && 8 !== o.nodeType && !vt.test(y + w.event.triggered) && (y.indexOf(".") > -1 && (y = (b = y.split(".")).shift(),
            b.sort()),
            u = y.indexOf(":") < 0 && "on" + y,
            (t = t[w.expando] ? t : new w.Event(y,"object" == typeof t && t)).isTrigger = r ? 2 : 3,
            t.namespace = b.join("."),
            t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            t.result = void 0,
            t.target || (t.target = o),
            n = null == n ? [t] : w.makeArray(n, [t]),
            f = w.event.special[y] || {},
            r || !f.trigger || !1 !== f.trigger.apply(o, n))) {
                if (!r && !f.noBubble && !m(o)) {
                    for (c = f.delegateType || y,
                    vt.test(c + y) || (a = a.parentNode); a; a = a.parentNode)
                        g.push(a),
                        l = a;
                    l === (o.ownerDocument || i) && g.push(l.defaultView || l.parentWindow || e)
                }
                for (s = 0; (a = g[s++]) && !t.isPropagationStopped(); )
                    h = a,
                    t.type = s > 1 ? c : f.bindType || y,
                    (p = (G.get(a, "events") || {})[t.type] && G.get(a, "handle")) && p.apply(a, n),
                    (p = u && a[u]) && p.apply && Y(a) && (t.result = p.apply(a, n),
                    !1 === t.result && t.preventDefault());
                return t.type = y,
                r || t.isDefaultPrevented() || f._default && !1 !== f._default.apply(g.pop(), n) || !Y(o) || u && v(o[y]) && !m(o) && ((l = o[u]) && (o[u] = null),
                w.event.triggered = y,
                t.isPropagationStopped() && h.addEventListener(y, mt),
                o[y](),
                t.isPropagationStopped() && h.removeEventListener(y, mt),
                w.event.triggered = void 0,
                l && (o[u] = l)),
                t.result
            }
        },
        simulate: function(e, t, n) {
            var i = w.extend(new w.Event, n, {
                type: e,
                isSimulated: !0
            });
            w.event.trigger(i, null, t)
        }
    }),
    w.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                w.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n)
                return w.event.trigger(e, t, n, !0)
        }
    }),
    h.focusin || w.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            w.event.simulate(t, e.target, w.event.fix(e))
        };
        w.event.special[t] = {
            setup: function() {
                var i = this.ownerDocument || this
                  , o = G.access(i, t);
                o || i.addEventListener(e, n, !0),
                G.access(i, t, (o || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this
                  , o = G.access(i, t) - 1;
                o ? G.access(i, t, o) : (i.removeEventListener(e, n, !0),
                G.remove(i, t))
            }
        }
    });
    var gt = e.location
      , yt = Date.now()
      , bt = /\?/;
    w.parseXML = function(t) {
        var n;
        if (!t || "string" != typeof t)
            return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (e) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || w.error("Invalid XML: " + t),
        n
    }
    ;
    var wt = /\[\]$/
      , xt = /\r?\n/g
      , Tt = /^(?:submit|button|image|reset|file)$/i
      , kt = /^(?:input|select|textarea|keygen)/i;
    function St(e, t, n, i) {
        var o;
        if (Array.isArray(t))
            w.each(t, function(t, o) {
                n || wt.test(e) ? i(e, o) : St(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, n, i)
            });
        else if (n || "object" !== b(t))
            i(e, t);
        else
            for (o in t)
                St(e + "[" + o + "]", t[o], n, i)
    }
    w.param = function(e, t) {
        var n, i = [], o = function(e, t) {
            var n = v(t) ? t() : t;
            i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
        };
        if (Array.isArray(e) || e.jquery && !w.isPlainObject(e))
            w.each(e, function() {
                o(this.name, this.value)
            });
        else
            for (n in e)
                St(n, e[n], t, o);
        return i.join("&")
    }
    ,
    w.fn.extend({
        serialize: function() {
            return w.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = w.prop(this, "elements");
                return e ? w.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !w(this).is(":disabled") && kt.test(this.nodeName) && !Tt.test(e) && (this.checked || !ce.test(e))
            }).map(function(e, t) {
                var n = w(this).val();
                return null == n ? null : Array.isArray(n) ? w.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(xt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(xt, "\r\n")
                }
            }).get()
        }
    });
    var $t = /%20/g
      , Ct = /#.*$/
      , jt = /([?&])_=[^&]*/
      , At = /^(.*?):[ \t]*([^\r\n]*)$/gm
      , Et = /^(?:GET|HEAD)$/
      , Pt = /^\/\//
      , Dt = {}
      , Ot = {}
      , Lt = "*/".concat("*")
      , Nt = i.createElement("a");
    function Ht(e) {
        return function(t, n) {
            "string" != typeof t && (n = t,
            t = "*");
            var i, o = 0, r = t.toLowerCase().match(H) || [];
            if (v(n))
                for (; i = r[o++]; )
                    "+" === i[0] ? (i = i.slice(1) || "*",
                    (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
        }
    }
    function Mt(e, t, n, i) {
        var o = {}
          , r = e === Ot;
        function s(a) {
            var l;
            return o[a] = !0,
            w.each(e[a] || [], function(e, a) {
                var c = a(t, n, i);
                return "string" != typeof c || r || o[c] ? r ? !(l = c) : void 0 : (t.dataTypes.unshift(c),
                s(c),
                !1)
            }),
            l
        }
        return s(t.dataTypes[0]) || !o["*"] && s("*")
    }
    function qt(e, t) {
        var n, i, o = w.ajaxSettings.flatOptions || {};
        for (n in t)
            void 0 !== t[n] && ((o[n] ? e : i || (i = {}))[n] = t[n]);
        return i && w.extend(!0, e, i),
        e
    }
    Nt.href = gt.href,
    w.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: gt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(gt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Lt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": w.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? qt(qt(e, w.ajaxSettings), t) : qt(w.ajaxSettings, e)
        },
        ajaxPrefilter: Ht(Dt),
        ajaxTransport: Ht(Ot),
        ajax: function(t, n) {
            "object" == typeof t && (n = t,
            t = void 0),
            n = n || {};
            var o, r, s, a, l, c, u, d, p, f, h = w.ajaxSetup({}, n), v = h.context || h, m = h.context && (v.nodeType || v.jquery) ? w(v) : w.event, g = w.Deferred(), y = w.Callbacks("once memory"), b = h.statusCode || {}, x = {}, T = {}, k = "canceled", S = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (u) {
                        if (!a)
                            for (a = {}; t = At.exec(s); )
                                a[t[1].toLowerCase()] = t[2];
                        t = a[e.toLowerCase()]
                    }
                    return null == t ? null : t
                },
                getAllResponseHeaders: function() {
                    return u ? s : null
                },
                setRequestHeader: function(e, t) {
                    return null == u && (e = T[e.toLowerCase()] = T[e.toLowerCase()] || e,
                    x[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return null == u && (h.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e)
                        if (u)
                            S.always(e[S.status]);
                        else
                            for (t in e)
                                b[t] = [b[t], e[t]];
                    return this
                },
                abort: function(e) {
                    var t = e || k;
                    return o && o.abort(t),
                    $(0, t),
                    this
                }
            };
            if (g.promise(S),
            h.url = ((t || h.url || gt.href) + "").replace(Pt, gt.protocol + "//"),
            h.type = n.method || n.type || h.method || h.type,
            h.dataTypes = (h.dataType || "*").toLowerCase().match(H) || [""],
            null == h.crossDomain) {
                c = i.createElement("a");
                try {
                    c.href = h.url,
                    c.href = c.href,
                    h.crossDomain = Nt.protocol + "//" + Nt.host != c.protocol + "//" + c.host
                } catch (e) {
                    h.crossDomain = !0
                }
            }
            if (h.data && h.processData && "string" != typeof h.data && (h.data = w.param(h.data, h.traditional)),
            Mt(Dt, h, n, S),
            u)
                return S;
            for (p in (d = w.event && h.global) && 0 == w.active++ && w.event.trigger("ajaxStart"),
            h.type = h.type.toUpperCase(),
            h.hasContent = !Et.test(h.type),
            r = h.url.replace(Ct, ""),
            h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace($t, "+")) : (f = h.url.slice(r.length),
            h.data && (h.processData || "string" == typeof h.data) && (r += (bt.test(r) ? "&" : "?") + h.data,
            delete h.data),
            !1 === h.cache && (r = r.replace(jt, "$1"),
            f = (bt.test(r) ? "&" : "?") + "_=" + yt++ + f),
            h.url = r + f),
            h.ifModified && (w.lastModified[r] && S.setRequestHeader("If-Modified-Since", w.lastModified[r]),
            w.etag[r] && S.setRequestHeader("If-None-Match", w.etag[r])),
            (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && S.setRequestHeader("Content-Type", h.contentType),
            S.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Lt + "; q=0.01" : "") : h.accepts["*"]),
            h.headers)
                S.setRequestHeader(p, h.headers[p]);
            if (h.beforeSend && (!1 === h.beforeSend.call(v, S, h) || u))
                return S.abort();
            if (k = "abort",
            y.add(h.complete),
            S.done(h.success),
            S.fail(h.error),
            o = Mt(Ot, h, n, S)) {
                if (S.readyState = 1,
                d && m.trigger("ajaxSend", [S, h]),
                u)
                    return S;
                h.async && h.timeout > 0 && (l = e.setTimeout(function() {
                    S.abort("timeout")
                }, h.timeout));
                try {
                    u = !1,
                    o.send(x, $)
                } catch (e) {
                    if (u)
                        throw e;
                    $(-1, e)
                }
            } else
                $(-1, "No Transport");
            function $(t, n, i, a) {
                var c, p, f, x, T, k = n;
                u || (u = !0,
                l && e.clearTimeout(l),
                o = void 0,
                s = a || "",
                S.readyState = t > 0 ? 4 : 0,
                c = t >= 200 && t < 300 || 304 === t,
                i && (x = function(e, t, n) {
                    for (var i, o, r, s, a = e.contents, l = e.dataTypes; "*" === l[0]; )
                        l.shift(),
                        void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (i)
                        for (o in a)
                            if (a[o] && a[o].test(i)) {
                                l.unshift(o);
                                break
                            }
                    if (l[0]in n)
                        r = l[0];
                    else {
                        for (o in n) {
                            if (!l[0] || e.converters[o + " " + l[0]]) {
                                r = o;
                                break
                            }
                            s || (s = o)
                        }
                        r = r || s
                    }
                    if (r)
                        return r !== l[0] && l.unshift(r),
                        n[r]
                }(h, S, i)),
                x = function(e, t, n, i) {
                    var o, r, s, a, l, c = {}, u = e.dataTypes.slice();
                    if (u[1])
                        for (s in e.converters)
                            c[s.toLowerCase()] = e.converters[s];
                    for (r = u.shift(); r; )
                        if (e.responseFields[r] && (n[e.responseFields[r]] = t),
                        !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                        l = r,
                        r = u.shift())
                            if ("*" === r)
                                r = l;
                            else if ("*" !== l && l !== r) {
                                if (!(s = c[l + " " + r] || c["* " + r]))
                                    for (o in c)
                                        if ((a = o.split(" "))[1] === r && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                                            !0 === s ? s = c[o] : !0 !== c[o] && (r = a[0],
                                            u.unshift(a[1]));
                                            break
                                        }
                                if (!0 !== s)
                                    if (s && e.throws)
                                        t = s(t);
                                    else
                                        try {
                                            t = s(t)
                                        } catch (e) {
                                            return {
                                                state: "parsererror",
                                                error: s ? e : "No conversion from " + l + " to " + r
                                            }
                                        }
                            }
                    return {
                        state: "success",
                        data: t
                    }
                }(h, x, S, c),
                c ? (h.ifModified && ((T = S.getResponseHeader("Last-Modified")) && (w.lastModified[r] = T),
                (T = S.getResponseHeader("etag")) && (w.etag[r] = T)),
                204 === t || "HEAD" === h.type ? k = "nocontent" : 304 === t ? k = "notmodified" : (k = x.state,
                p = x.data,
                c = !(f = x.error))) : (f = k,
                !t && k || (k = "error",
                t < 0 && (t = 0))),
                S.status = t,
                S.statusText = (n || k) + "",
                c ? g.resolveWith(v, [p, k, S]) : g.rejectWith(v, [S, k, f]),
                S.statusCode(b),
                b = void 0,
                d && m.trigger(c ? "ajaxSuccess" : "ajaxError", [S, h, c ? p : f]),
                y.fireWith(v, [S, k]),
                d && (m.trigger("ajaxComplete", [S, h]),
                --w.active || w.event.trigger("ajaxStop")))
            }
            return S
        },
        getJSON: function(e, t, n) {
            return w.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return w.get(e, void 0, t, "script")
        }
    }),
    w.each(["get", "post"], function(e, t) {
        w[t] = function(e, n, i, o) {
            return v(n) && (o = o || i,
            i = n,
            n = void 0),
            w.ajax(w.extend({
                url: e,
                type: t,
                dataType: o,
                data: n,
                success: i
            }, w.isPlainObject(e) && e))
        }
    }),
    w._evalUrl = function(e) {
        return w.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        })
    }
    ,
    w.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (v(e) && (e = e.call(this[0])),
            t = w(e, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && t.insertBefore(this[0]),
            t.map(function() {
                for (var e = this; e.firstElementChild; )
                    e = e.firstElementChild;
                return e
            }).append(this)),
            this
        },
        wrapInner: function(e) {
            return v(e) ? this.each(function(t) {
                w(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = w(this)
                  , n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = v(e);
            return this.each(function(n) {
                w(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                w(this).replaceWith(this.childNodes)
            }),
            this
        }
    }),
    w.expr.pseudos.hidden = function(e) {
        return !w.expr.pseudos.visible(e)
    }
    ,
    w.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }
    ,
    w.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    }
    ;
    var It = {
        0: 200,
        1223: 204
    }
      , zt = w.ajaxSettings.xhr();
    h.cors = !!zt && "withCredentials"in zt,
    h.ajax = zt = !!zt,
    w.ajaxTransport(function(t) {
        var n, i;
        if (h.cors || zt && !t.crossDomain)
            return {
                send: function(o, r) {
                    var s, a = t.xhr();
                    if (a.open(t.type, t.url, t.async, t.username, t.password),
                    t.xhrFields)
                        for (s in t.xhrFields)
                            a[s] = t.xhrFields[s];
                    for (s in t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType),
                    t.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest"),
                    o)
                        a.setRequestHeader(s, o[s]);
                    n = function(e) {
                        return function() {
                            n && (n = i = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null,
                            "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? r(0, "error") : r(a.status, a.statusText) : r(It[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                                binary: a.response
                            } : {
                                text: a.responseText
                            }, a.getAllResponseHeaders()))
                        }
                    }
                    ,
                    a.onload = n(),
                    i = a.onerror = a.ontimeout = n("error"),
                    void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function() {
                        4 === a.readyState && e.setTimeout(function() {
                            n && i()
                        })
                    }
                    ,
                    n = n("abort");
                    try {
                        a.send(t.hasContent && t.data || null)
                    } catch (e) {
                        if (n)
                            throw e
                    }
                },
                abort: function() {
                    n && n()
                }
            }
    }),
    w.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }),
    w.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return w.globalEval(e),
                e
            }
        }
    }),
    w.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1),
        e.crossDomain && (e.type = "GET")
    }),
    w.ajaxTransport("script", function(e) {
        var t, n;
        if (e.crossDomain)
            return {
                send: function(o, r) {
                    t = w("<script>").prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(),
                        n = null,
                        e && r("error" === e.type ? 404 : 200, e.type)
                    }
                    ),
                    i.head.appendChild(t[0])
                },
                abort: function() {
                    n && n()
                }
            }
    });
    var Ft = []
      , Wt = /(=)\?(?=&|$)|\?\?/;
    w.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Ft.pop() || w.expando + "_" + yt++;
            return this[e] = !0,
            e
        }
    }),
    w.ajaxPrefilter("json jsonp", function(t, n, i) {
        var o, r, s, a = !1 !== t.jsonp && (Wt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Wt.test(t.data) && "data");
        if (a || "jsonp" === t.dataTypes[0])
            return o = t.jsonpCallback = v(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
            a ? t[a] = t[a].replace(Wt, "$1" + o) : !1 !== t.jsonp && (t.url += (bt.test(t.url) ? "&" : "?") + t.jsonp + "=" + o),
            t.converters["script json"] = function() {
                return s || w.error(o + " was not called"),
                s[0]
            }
            ,
            t.dataTypes[0] = "json",
            r = e[o],
            e[o] = function() {
                s = arguments
            }
            ,
            i.always(function() {
                void 0 === r ? w(e).removeProp(o) : e[o] = r,
                t[o] && (t.jsonpCallback = n.jsonpCallback,
                Ft.push(o)),
                s && v(r) && r(s[0]),
                s = r = void 0
            }),
            "script"
    }),
    h.createHTMLDocument = function() {
        var e = i.implementation.createHTMLDocument("").body;
        return e.innerHTML = "<form></form><form></form>",
        2 === e.childNodes.length
    }(),
    w.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t,
        t = !1),
        t || (h.createHTMLDocument ? ((o = (t = i.implementation.createHTMLDocument("")).createElement("base")).href = i.location.href,
        t.head.appendChild(o)) : t = i),
        s = !n && [],
        (r = A.exec(e)) ? [t.createElement(r[1])] : (r = me([e], t, s),
        s && s.length && w(s).remove(),
        w.merge([], r.childNodes)));
        var o, r, s
    }
    ,
    w.fn.load = function(e, t, n) {
        var i, o, r, s = this, a = e.indexOf(" ");
        return a > -1 && (i = dt(e.slice(a)),
        e = e.slice(0, a)),
        v(t) ? (n = t,
        t = void 0) : t && "object" == typeof t && (o = "POST"),
        s.length > 0 && w.ajax({
            url: e,
            type: o || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            r = arguments,
            s.html(i ? w("<div>").append(w.parseHTML(e)).find(i) : e)
        }).always(n && function(e, t) {
            s.each(function() {
                n.apply(this, r || [e.responseText, t, e])
            })
        }
        ),
        this
    }
    ,
    w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        w.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    w.expr.pseudos.animated = function(e) {
        return w.grep(w.timers, function(t) {
            return e === t.elem
        }).length
    }
    ,
    w.offset = {
        setOffset: function(e, t, n) {
            var i, o, r, s, a, l, c = w.css(e, "position"), u = w(e), d = {};
            "static" === c && (e.style.position = "relative"),
            a = u.offset(),
            r = w.css(e, "top"),
            l = w.css(e, "left"),
            ("absolute" === c || "fixed" === c) && (r + l).indexOf("auto") > -1 ? (s = (i = u.position()).top,
            o = i.left) : (s = parseFloat(r) || 0,
            o = parseFloat(l) || 0),
            v(t) && (t = t.call(e, n, w.extend({}, a))),
            null != t.top && (d.top = t.top - a.top + s),
            null != t.left && (d.left = t.left - a.left + o),
            "using"in t ? t.using.call(e, d) : u.css(d)
        }
    },
    w.fn.extend({
        offset: function(e) {
            if (arguments.length)
                return void 0 === e ? this : this.each(function(t) {
                    w.offset.setOffset(this, e, t)
                });
            var t, n, i = this[0];
            return i ? i.getClientRects().length ? (t = i.getBoundingClientRect(),
            n = i.ownerDocument.defaultView,
            {
                top: t.top + n.pageYOffset,
                left: t.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, i = this[0], o = {
                    top: 0,
                    left: 0
                };
                if ("fixed" === w.css(i, "position"))
                    t = i.getBoundingClientRect();
                else {
                    for (t = this.offset(),
                    n = i.ownerDocument,
                    e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === w.css(e, "position"); )
                        e = e.parentNode;
                    e && e !== i && 1 === e.nodeType && ((o = w(e).offset()).top += w.css(e, "borderTopWidth", !0),
                    o.left += w.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - o.top - w.css(i, "marginTop", !0),
                    left: t.left - o.left - w.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === w.css(e, "position"); )
                    e = e.offsetParent;
                return e || ge
            })
        }
    }),
    w.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = "pageYOffset" === t;
        w.fn[e] = function(i) {
            return R(this, function(e, i, o) {
                var r;
                if (m(e) ? r = e : 9 === e.nodeType && (r = e.defaultView),
                void 0 === o)
                    return r ? r[t] : e[i];
                r ? r.scrollTo(n ? r.pageXOffset : o, n ? o : r.pageYOffset) : e[i] = o
            }, e, i, arguments.length)
        }
    }),
    w.each(["top", "left"], function(e, t) {
        w.cssHooks[t] = Fe(h.pixelPosition, function(e, n) {
            if (n)
                return n = ze(e, t),
                Me.test(n) ? w(e).position()[t] + "px" : n
        })
    }),
    w.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        w.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, i) {
            w.fn[i] = function(o, r) {
                var s = arguments.length && (n || "boolean" != typeof o)
                  , a = n || (!0 === o || !0 === r ? "margin" : "border");
                return R(this, function(t, n, o) {
                    var r;
                    return m(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement,
                    Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === o ? w.css(t, n, a) : w.style(t, n, o, a)
                }, t, s ? o : void 0, s)
            }
        })
    }),
    w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
        w.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }),
    w.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }),
    w.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }),
    w.proxy = function(e, t) {
        var n, i, o;
        if ("string" == typeof t && (n = e[t],
        t = e,
        e = n),
        v(e))
            return i = r.call(arguments, 2),
            (o = function() {
                return e.apply(t || this, i.concat(r.call(arguments)))
            }
            ).guid = e.guid = e.guid || w.guid++,
            o
    }
    ,
    w.holdReady = function(e) {
        e ? w.readyWait++ : w.ready(!0)
    }
    ,
    w.isArray = Array.isArray,
    w.parseJSON = JSON.parse,
    w.nodeName = j,
    w.isFunction = v,
    w.isWindow = m,
    w.camelCase = U,
    w.type = b,
    w.now = Date.now,
    w.isNumeric = function(e) {
        var t = w.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }
    ,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return w
    });
    var Rt = e.jQuery
      , Bt = e.$;
    return w.noConflict = function(t) {
        return e.$ === w && (e.$ = Bt),
        t && e.jQuery === w && (e.jQuery = Rt),
        w
    }
    ,
    t || (e.jQuery = e.$ = w),
    w
}),
function(e, t) {
    "use strict";
    "initCustomEvent"in t.createEvent("CustomEvent") && (e.CustomEvent = function(e, n) {
        n = n || {
            bubbles: !1,
            cancelable: !1,
            detail: void 0
        };
        var i = t.createEvent("CustomEvent");
        return i.initCustomEvent(e, n.bubbles, n.cancelable, n.detail),
        i
    }
    ,
    e.CustomEvent.prototype = e.Event.prototype),
    t.addEventListener("touchstart", function(e) {
        "true" !== e.target.getAttribute("data-swipe-ignore") && (a = e.target,
        s = Date.now(),
        n = e.touches[0].clientX,
        i = e.touches[0].clientY,
        o = 0,
        r = 0)
    }, !1),
    t.addEventListener("touchmove", function(e) {
        if (n && i) {
            var t = e.touches[0].clientX
              , s = e.touches[0].clientY;
            o = n - t,
            r = i - s
        }
    }, !1),
    t.addEventListener("touchend", function(e) {
        if (a === e.target) {
            var t = parseInt(a.getAttribute("data-swipe-threshold") || "20", 10)
              , l = parseInt(a.getAttribute("data-swipe-timeout") || "500", 10)
              , c = Date.now() - s
              , u = "";
            Math.abs(o) > Math.abs(r) ? Math.abs(o) > t && c < l && (u = o > 0 ? "swiped-left" : "swiped-right") : Math.abs(r) > t && c < l && (u = r > 0 ? "swiped-up" : "swiped-down"),
            "" !== u && a.dispatchEvent(new CustomEvent(u,{
                bubbles: !0,
                cancelable: !0
            })),
            n = null,
            i = null,
            s = null
        }
    }, !1);
    var n = null
      , i = null
      , o = null
      , r = null
      , s = null
      , a = null
}(window, document),
function(e, t, n) {
    "use strict";
    function i(n) {
        if (o = t.documentElement,
        r = t.body,
        R(),
        ie = this,
        le = (n = n || {}).constants || {},
        n.easing)
            for (var i in n.easing)
                _[i] = n.easing[i];
        ve = n.edgeStrategy || "set",
        se = {
            beforerender: n.beforerender,
            render: n.render,
            keyframe: n.keyframe
        },
        (ae = !1 !== n.forceHeight) && (Oe = n.scale || 1),
        ce = n.mobileDeceleration || k,
        de = !1 !== n.smoothScrolling,
        pe = n.smoothScrollingDuration || $,
        fe = {
            targetTop: ie.getScrollTop()
        },
        (Fe = (n.mobileCheck || function() {
            return /Android|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent || navigator.vendor || e.opera)
        }
        )()) ? ((re = t.getElementById(n.skrollrBody || S)) && ne(),
        U(),
        Ce(o, [y, x], [b])) : Ce(o, [y, w], [b]),
        ie.refresh(),
        ye(e, "resize orientationchange", function() {
            var e = o.clientWidth
              , t = o.clientHeight;
            (t !== qe || e !== Me) && (qe = t,
            Me = e,
            Ie = !0)
        });
        var s = B();
        return function e() {
            V(),
            ge = s(e)
        }(),
        ie
    }
    var o, r, s = {
        get: function() {
            return ie
        },
        init: function(e) {
            return ie || new i(e)
        },
        VERSION: "0.6.30"
    }, a = Object.prototype.hasOwnProperty, l = e.Math, c = e.getComputedStyle, u = "touchstart", d = "touchmove", p = "touchcancel", f = "touchend", h = "skrollable", v = h + "-before", m = h + "-between", g = h + "-after", y = "skrollr", b = "no-" + y, w = y + "-desktop", x = y + "-mobile", T = "linear", k = .004, S = "skrollr-body", $ = 200, C = "center", j = "bottom", A = "___skrollable_id", E = /^(?:input|textarea|button|select)$/i, P = /^\s+|\s+$/g, D = /^data(?:-(_\w+))?(?:-?(-?\d*\.?\d+p?))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/, O = /\s*(@?[\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi, L = /^(@?[a-z\-]+)\[(\w+)\]$/, N = /-([a-z0-9_])/g, H = function(e, t) {
        return t.toUpperCase()
    }, M = /[\-+]?[\d]*\.?[\d]+/g, q = /\{\?\}/g, I = /rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g, z = /[a-z\-]+-gradient/g, F = "", W = "", R = function() {
        var e = /^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;
        if (c) {
            var t = c(r, null);
            for (var n in t)
                if (F = n.match(e) || +n == n && t[n].match(e))
                    break;
            if (!F)
                return void (F = W = "");
            "-" === (F = F[0]).slice(0, 1) ? (W = F,
            F = {
                "-webkit-": "webkit",
                "-moz-": "Moz",
                "-ms-": "ms",
                "-o-": "O"
            }[F]) : W = "-" + F.toLowerCase() + "-"
        }
    }, B = function() {
        var t = e.requestAnimationFrame || e[F.toLowerCase() + "RequestAnimationFrame"]
          , n = Ee();
        return (Fe || !t) && (t = function(t) {
            var i = Ee() - n
              , o = l.max(0, 1e3 / 60 - i);
            return e.setTimeout(function() {
                n = Ee(),
                t()
            }, o)
        }
        ),
        t
    }, X = function() {
        var t = e.cancelAnimationFrame || e[F.toLowerCase() + "CancelAnimationFrame"];
        return (Fe || !t) && (t = function(t) {
            return e.clearTimeout(t)
        }
        ),
        t
    }, _ = {
        begin: function() {
            return 0
        },
        end: function() {
            return 1
        },
        linear: function(e) {
            return e
        },
        quadratic: function(e) {
            return e * e
        },
        cubic: function(e) {
            return e * e * e
        },
        swing: function(e) {
            return -l.cos(e * l.PI) / 2 + .5
        },
        sqrt: function(e) {
            return l.sqrt(e)
        },
        outCubic: function(e) {
            return l.pow(e - 1, 3) + 1
        },
        bounce: function(e) {
            var t;
            if (.5083 >= e)
                t = 3;
            else if (.8489 >= e)
                t = 9;
            else if (.96208 >= e)
                t = 27;
            else {
                if (!(.99981 >= e))
                    return 1;
                t = 91
            }
            return 1 - l.abs(3 * l.cos(e * t * 1.028) / t)
        }
    };
    i.prototype.refresh = function(e) {
        var i, o, r = !1;
        for (e === n ? (r = !0,
        oe = [],
        ze = 0,
        e = t.getElementsByTagName("*")) : e.length === n && (e = [e]),
        i = 0,
        o = e.length; o > i; i++) {
            var s = e[i]
              , a = s
              , l = []
              , c = de
              , u = ve
              , d = !1;
            if (r && A in s && delete s[A],
            s.attributes) {
                for (var p = 0, f = s.attributes.length; f > p; p++) {
                    var v = s.attributes[p];
                    if ("data-anchor-target" !== v.name)
                        if ("data-smooth-scrolling" !== v.name)
                            if ("data-edge-strategy" !== v.name)
                                if ("data-emit-events" !== v.name) {
                                    var m = v.name.match(D);
                                    if (null !== m) {
                                        var g = {
                                            props: v.value,
                                            element: s,
                                            eventType: v.name.replace(N, H)
                                        };
                                        l.push(g);
                                        var y = m[1];
                                        y && (g.constant = y.substr(1));
                                        var b = m[2];
                                        /p$/.test(b) ? (g.isPercentage = !0,
                                        g.offset = (0 | b.slice(0, -1)) / 100) : g.offset = 0 | b;
                                        var w = m[3]
                                          , x = m[4] || w;
                                        w && "start" !== w && "end" !== w ? (g.mode = "relative",
                                        g.anchors = [w, x]) : (g.mode = "absolute",
                                        "end" === w ? g.isEnd = !0 : g.isPercentage || (g.offset = g.offset * Oe))
                                    }
                                } else
                                    d = !0;
                            else
                                u = v.value;
                        else
                            c = "off" !== v.value;
                    else if (null === (a = t.querySelector(v.value)))
                        throw 'Unable to find anchor target "' + v.value + '"'
                }
                var T, k, S;
                if (l.length)
                    !r && A in s ? (S = s[A],
                    T = oe[S].styleAttr,
                    k = oe[S].classAttr) : (S = s[A] = ze++,
                    T = s.style.cssText,
                    k = $e(s)),
                    oe[S] = {
                        element: s,
                        styleAttr: T,
                        classAttr: k,
                        anchorTarget: a,
                        keyFrames: l,
                        smoothScrolling: c,
                        edgeStrategy: u,
                        emitEvents: d,
                        lastFrameIndex: -1
                    },
                    Ce(s, [h], [])
            }
        }
        for (Te(),
        i = 0,
        o = e.length; o > i; i++) {
            var $ = oe[e[i][A]];
            $ !== n && (G($),
            K($))
        }
        return ie
    }
    ,
    i.prototype.relativeToAbsolute = function(e, t, n) {
        var i = o.clientHeight
          , r = e.getBoundingClientRect()
          , s = r.top
          , a = r.bottom - r.top;
        return t === j ? s -= i : t === C && (s -= i / 2),
        n === j ? s += a : n === C && (s += a / 2),
        (s += ie.getScrollTop()) + .5 | 0
    }
    ,
    i.prototype.animateTo = function(e, t) {
        t = t || {};
        var i = Ee()
          , o = ie.getScrollTop()
          , r = t.duration === n ? 1e3 : t.duration;
        return (ue = {
            startTop: o,
            topDiff: e - o,
            targetTop: e,
            duration: r,
            startTime: i,
            endTime: i + r,
            easing: _[t.easing || T],
            done: t.done
        }).topDiff || (ue.done && ue.done.call(ie, !1),
        ue = n),
        ie
    }
    ,
    i.prototype.stopAnimateTo = function() {
        ue && ue.done && ue.done.call(ie, !0),
        ue = n
    }
    ,
    i.prototype.isAnimatingTo = function() {
        return !!ue
    }
    ,
    i.prototype.isMobile = function() {
        return Fe
    }
    ,
    i.prototype.setScrollTop = function(t, n) {
        return he = !0 === n,
        Fe ? We = l.min(l.max(t, 0), De) : e.scrollTo(0, t),
        ie
    }
    ,
    i.prototype.getScrollTop = function() {
        return Fe ? We : e.pageYOffset || o.scrollTop || r.scrollTop || 0
    }
    ,
    i.prototype.getMaxScrollTop = function() {
        return De
    }
    ,
    i.prototype.on = function(e, t) {
        return se[e] = t,
        ie
    }
    ,
    i.prototype.off = function(e) {
        return delete se[e],
        ie
    }
    ,
    i.prototype.destroy = function() {
        X()(ge),
        we(),
        Ce(o, [b], [y, w, x]);
        for (var e = 0, t = oe.length; t > e; e++)
            te(oe[e].element);
        o.style.overflow = r.style.overflow = "",
        o.style.height = r.style.height = "",
        re && s.setStyle(re, "transform", "none"),
        ie = n,
        re = n,
        se = n,
        ae = n,
        De = 0,
        Oe = 1,
        le = n,
        ce = n,
        Le = "down",
        Ne = -1,
        Me = 0,
        qe = 0,
        Ie = !1,
        ue = n,
        de = n,
        pe = n,
        fe = n,
        he = n,
        ze = 0,
        ve = n,
        Fe = !1,
        We = 0,
        me = n
    }
    ;
    var U = function() {
        var i, s, a, c, h, v, m, g, y, b, w;
        ye(o, [u, d, p, f].join(" "), function(e) {
            var o = e.changedTouches[0];
            for (c = e.target; 3 === c.nodeType; )
                c = c.parentNode;
            switch (h = o.clientY,
            v = o.clientX,
            y = e.timeStamp,
            E.test(c.tagName) || e.preventDefault(),
            e.type) {
            case u:
                i && i.blur(),
                ie.stopAnimateTo(),
                i = c,
                s = m = h,
                a = v,
                y;
                break;
            case d:
                E.test(c.tagName) && t.activeElement !== c && e.preventDefault(),
                g = h - m,
                w = y - b,
                ie.setScrollTop(We - g, !0),
                m = h,
                b = y;
                break;
            default:
            case p:
            case f:
                var r = s - h
                  , x = a - v;
                if (49 > x * x + r * r) {
                    if (!E.test(i.tagName)) {
                        i.focus();
                        var T = t.createEvent("MouseEvents");
                        T.initMouseEvent("click", !0, !0, e.view, 1, o.screenX, o.screenY, o.clientX, o.clientY, e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, 0, null),
                        i.dispatchEvent(T)
                    }
                    return
                }
                i = n;
                var k = g / w;
                k = l.max(l.min(k, 3), -3);
                var S = l.abs(k / ce)
                  , $ = k * S + .5 * ce * S * S
                  , C = ie.getScrollTop() - $
                  , j = 0;
                C > De ? (j = (De - C) / $,
                C = De) : 0 > C && (j = -C / $,
                C = 0),
                S *= 1 - j,
                ie.animateTo(C + .5 | 0, {
                    easing: "outCubic",
                    duration: S
                })
            }
        }),
        e.scrollTo(0, 0),
        o.style.overflow = r.style.overflow = "hidden"
    }
      , Y = function(e, t) {
        for (var n = 0, i = oe.length; i > n; n++) {
            var o, r, l = oe[n], c = l.element, u = l.smoothScrolling ? e : t, d = l.keyFrames, p = d.length, f = d[0], y = d[d.length - 1], b = u < f.frame, w = u > y.frame, x = b ? f : y, T = l.emitEvents, k = l.lastFrameIndex;
            if (b || w) {
                if (b && -1 === l.edge || w && 1 === l.edge)
                    continue;
                switch (b ? (Ce(c, [v], [g, m]),
                T && k > -1 && (xe(c, f.eventType, Le),
                l.lastFrameIndex = -1)) : (Ce(c, [g], [v, m]),
                T && p > k && (xe(c, y.eventType, Le),
                l.lastFrameIndex = p)),
                l.edge = b ? -1 : 1,
                l.edgeStrategy) {
                case "reset":
                    te(c);
                    continue;
                case "ease":
                    u = x.frame;
                    break;
                default:
                case "set":
                    var S = x.props;
                    for (o in S)
                        a.call(S, o) && (r = ee(S[o].value),
                        0 === o.indexOf("@") ? c.setAttribute(o.substr(1), r) : s.setStyle(c, o, r));
                    continue
                }
            } else
                0 !== l.edge && (Ce(c, [h, m], [v, g]),
                l.edge = 0);
            for (var $ = 0; p - 1 > $; $++)
                if (u >= d[$].frame && u <= d[$ + 1].frame) {
                    var C = d[$]
                      , j = d[$ + 1];
                    for (o in C.props)
                        if (a.call(C.props, o)) {
                            var A = (u - C.frame) / (j.frame - C.frame);
                            A = C.props[o].easing(A),
                            r = Z(C.props[o].value, j.props[o].value, A),
                            r = ee(r),
                            0 === o.indexOf("@") ? c.setAttribute(o.substr(1), r) : s.setStyle(c, o, r)
                        }
                    T && k !== $ && (xe(c, "down" === Le ? C.eventType : j.eventType, Le),
                    l.lastFrameIndex = $);
                    break
                }
        }
    }
      , V = function() {
        Ie && (Ie = !1,
        Te());
        var e, t, i = ie.getScrollTop(), o = Ee();
        if (ue)
            o >= ue.endTime ? (i = ue.targetTop,
            e = ue.done,
            ue = n) : (t = ue.easing((o - ue.startTime) / ue.duration),
            i = ue.startTop + t * ue.topDiff | 0),
            ie.setScrollTop(i, !0);
        else if (!he) {
            fe.targetTop - i && (fe = {
                startTop: Ne,
                topDiff: i - Ne,
                targetTop: i,
                startTime: He,
                endTime: He + pe
            }),
            o <= fe.endTime && (t = _.sqrt((o - fe.startTime) / pe),
            i = fe.startTop + t * fe.topDiff | 0)
        }
        if (he || Ne !== i) {
            he = !1;
            var r = {
                curTop: i,
                lastTop: Ne,
                maxTop: De,
                direction: Le = i > Ne ? "down" : Ne > i ? "up" : Le
            };
            !1 !== (se.beforerender && se.beforerender.call(ie, r)) && (Y(i, ie.getScrollTop()),
            Fe && re && s.setStyle(re, "transform", "translate(0, " + -We + "px) " + me),
            Ne = i,
            se.render && se.render.call(ie, r)),
            e && e.call(ie, !1)
        }
        He = o
    }
      , G = function(e) {
        for (var t = 0, n = e.keyFrames.length; n > t; t++) {
            for (var i, o, r, s, a = e.keyFrames[t], l = {}; null !== (s = O.exec(a.props)); )
                r = s[1],
                o = s[2],
                null !== (i = r.match(L)) ? (r = i[1],
                i = i[2]) : i = T,
                o = o.indexOf("!") ? Q(o) : [o.slice(1)],
                l[r] = {
                    value: o,
                    easing: _[i]
                };
            a.props = l
        }
    }
      , Q = function(e) {
        var t = [];
        return I.lastIndex = 0,
        e = e.replace(I, function(e) {
            return e.replace(M, function(e) {
                return e / 255 * 100 + "%"
            })
        }),
        W && (z.lastIndex = 0,
        e = e.replace(z, function(e) {
            return W + e
        })),
        e = e.replace(M, function(e) {
            return t.push(+e),
            "{?}"
        }),
        t.unshift(e),
        t
    }
      , K = function(e) {
        var t, n, i = {};
        for (t = 0,
        n = e.keyFrames.length; n > t; t++)
            J(e.keyFrames[t], i);
        for (i = {},
        t = e.keyFrames.length - 1; t >= 0; t--)
            J(e.keyFrames[t], i)
    }
      , J = function(e, t) {
        var n;
        for (n in t)
            a.call(e.props, n) || (e.props[n] = t[n]);
        for (n in e.props)
            t[n] = e.props[n]
    }
      , Z = function(e, t, n) {
        var i, o = e.length;
        if (o !== t.length)
            throw "Can't interpolate between \"" + e[0] + '" and "' + t[0] + '"';
        var r = [e[0]];
        for (i = 1; o > i; i++)
            r[i] = e[i] + (t[i] - e[i]) * n;
        return r
    }
      , ee = function(e) {
        var t = 1;
        return q.lastIndex = 0,
        e[0].replace(q, function() {
            return e[t++]
        })
    }
      , te = function(e, t) {
        for (var n, i, o = 0, r = (e = [].concat(e)).length; r > o; o++)
            i = e[o],
            (n = oe[i[A]]) && (t ? (i.style.cssText = n.dirtyStyleAttr,
            Ce(i, n.dirtyClassAttr)) : (n.dirtyStyleAttr = i.style.cssText,
            n.dirtyClassAttr = $e(i),
            i.style.cssText = n.styleAttr,
            Ce(i, n.classAttr)))
    }
      , ne = function() {
        me = "translateZ(0)",
        s.setStyle(re, "transform", me);
        var e = c(re)
          , t = e.getPropertyValue("transform")
          , n = e.getPropertyValue(W + "transform");
        t && "none" !== t || n && "none" !== n || (me = "")
    };
    s.setStyle = function(e, t, n) {
        var i = e.style;
        if ("zIndex" === (t = t.replace(N, H).replace("-", "")))
            isNaN(n) ? i[t] = n : i[t] = "" + (0 | n);
        else if ("float" === t)
            i.styleFloat = i.cssFloat = n;
        else
            try {
                F && (i[F + t.slice(0, 1).toUpperCase() + t.slice(1)] = n),
                i[t] = n
            } catch (e) {}
    }
    ;
    var ie, oe, re, se, ae, le, ce, ue, de, pe, fe, he, ve, me, ge, ye = s.addEvent = function(t, n, i) {
        for (var o, r = function(t) {
            return (t = t || e.event).target || (t.target = t.srcElement),
            t.preventDefault || (t.preventDefault = function() {
                t.returnValue = !1,
                t.defaultPrevented = !0
            }
            ),
            i.call(this, t)
        }, s = 0, a = (n = n.split(" ")).length; a > s; s++)
            o = n[s],
            t.addEventListener ? t.addEventListener(o, i, !1) : t.attachEvent("on" + o, r),
            Re.push({
                element: t,
                name: o,
                listener: i
            })
    }
    , be = s.removeEvent = function(e, t, n) {
        for (var i = 0, o = (t = t.split(" ")).length; o > i; i++)
            e.removeEventListener ? e.removeEventListener(t[i], n, !1) : e.detachEvent("on" + t[i], n)
    }
    , we = function() {
        for (var e, t = 0, n = Re.length; n > t; t++)
            e = Re[t],
            be(e.element, e.name, e.listener);
        Re = []
    }, xe = function(e, t, n) {
        se.keyframe && se.keyframe.call(ie, e, t, n)
    }, Te = function() {
        var e = ie.getScrollTop();
        De = 0,
        ae && !Fe && (r.style.height = ""),
        function() {
            var e, t, n, i, r, s, a, c, u, d, p, f = o.clientHeight, h = ke();
            for (c = 0,
            u = oe.length; u > c; c++)
                for (t = (e = oe[c]).element,
                n = e.anchorTarget,
                r = 0,
                s = (i = e.keyFrames).length; s > r; r++)
                    d = (a = i[r]).offset,
                    p = h[a.constant] || 0,
                    a.frame = d,
                    a.isPercentage && (d *= f,
                    a.frame = d),
                    "relative" === a.mode && (te(t),
                    a.frame = ie.relativeToAbsolute(n, a.anchors[0], a.anchors[1]) - d,
                    te(t, !0)),
                    a.frame += p,
                    ae && !a.isEnd && a.frame > De && (De = a.frame);
            for (De = l.max(De, Se()),
            c = 0,
            u = oe.length; u > c; c++) {
                for (r = 0,
                s = (i = (e = oe[c]).keyFrames).length; s > r; r++)
                    p = h[(a = i[r]).constant] || 0,
                    a.isEnd && (a.frame = De - a.offset + p);
                e.keyFrames.sort(Pe)
            }
        }(),
        ae && !Fe && (r.style.height = De + o.clientHeight + "px"),
        Fe ? ie.setScrollTop(l.min(ie.getScrollTop(), De)) : ie.setScrollTop(e, !0),
        he = !0
    }, ke = function() {
        var e, t, n = o.clientHeight, i = {};
        for (e in le)
            "function" == typeof (t = le[e]) ? t = t.call(ie) : /p$/.test(t) && (t = t.slice(0, -1) / 100 * n),
            i[e] = t;
        return i
    }, Se = function() {
        var e = 0;
        return re && (e = l.max(re.offsetHeight, re.scrollHeight)),
        l.max(e, r.scrollHeight, r.offsetHeight, o.scrollHeight, o.offsetHeight, o.clientHeight) - o.clientHeight
    }, $e = function(t) {
        var n = "className";
        return e.SVGElement && t instanceof e.SVGElement && (t = t[n],
        n = "baseVal"),
        t[n]
    }, Ce = function(t, i, o) {
        var r = "className";
        if (e.SVGElement && t instanceof e.SVGElement && (t = t[r],
        r = "baseVal"),
        o !== n) {
            for (var s = t[r], a = 0, l = o.length; l > a; a++)
                s = Ae(s).replace(Ae(o[a]), " ");
            s = je(s);
            for (var c = 0, u = i.length; u > c; c++)
                -1 === Ae(s).indexOf(Ae(i[c])) && (s += " " + i[c]);
            t[r] = je(s)
        } else
            t[r] = i
    }, je = function(e) {
        return e.replace(P, "")
    }, Ae = function(e) {
        return " " + e + " "
    }, Ee = Date.now || function() {
        return +new Date
    }
    , Pe = function(e, t) {
        return e.frame - t.frame
    }, De = 0, Oe = 1, Le = "down", Ne = -1, He = Ee(), Me = 0, qe = 0, Ie = !1, ze = 0, Fe = !1, We = 0, Re = [];
    "function" == typeof define && define.amd ? define([], function() {
        return s
    }) : "undefined" != typeof module && module.exports ? module.exports = s : e.skrollr = s
}(window, document),
function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(e) {
    "use strict";
    var t = window.Slick || {};
    (t = function() {
        var t = 0;
        return function(n, i) {
            var o, r = this;
            r.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: e(n),
                appendDots: e(n),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function(t, n) {
                    return e('<button type="button" />').text(n + 1)
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                focusOnChange: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            },
            r.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                scrolling: !1,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                swiping: !1,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            },
            e.extend(r, r.initials),
            r.activeBreakpoint = null,
            r.animType = null,
            r.animProp = null,
            r.breakpoints = [],
            r.breakpointSettings = [],
            r.cssTransitions = !1,
            r.focussed = !1,
            r.interrupted = !1,
            r.hidden = "hidden",
            r.paused = !0,
            r.positionProp = null,
            r.respondTo = null,
            r.rowCount = 1,
            r.shouldClick = !0,
            r.$slider = e(n),
            r.$slidesCache = null,
            r.transformType = null,
            r.transitionType = null,
            r.visibilityChange = "visibilitychange",
            r.windowWidth = 0,
            r.windowTimer = null,
            o = e(n).data("slick") || {},
            r.options = e.extend({}, r.defaults, i, o),
            r.currentSlide = r.options.initialSlide,
            r.originalSettings = r.options,
            void 0 !== document.mozHidden ? (r.hidden = "mozHidden",
            r.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (r.hidden = "webkitHidden",
            r.visibilityChange = "webkitvisibilitychange"),
            r.autoPlay = e.proxy(r.autoPlay, r),
            r.autoPlayClear = e.proxy(r.autoPlayClear, r),
            r.autoPlayIterator = e.proxy(r.autoPlayIterator, r),
            r.changeSlide = e.proxy(r.changeSlide, r),
            r.clickHandler = e.proxy(r.clickHandler, r),
            r.selectHandler = e.proxy(r.selectHandler, r),
            r.setPosition = e.proxy(r.setPosition, r),
            r.swipeHandler = e.proxy(r.swipeHandler, r),
            r.dragHandler = e.proxy(r.dragHandler, r),
            r.keyHandler = e.proxy(r.keyHandler, r),
            r.instanceUid = t++,
            r.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/,
            r.registerBreakpoints(),
            r.init(!0)
        }
    }()).prototype.activateADA = function() {
        this.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false"
        }).find("a, input, button, select").attr({
            tabindex: "0"
        })
    }
    ,
    t.prototype.addSlide = t.prototype.slickAdd = function(t, n, i) {
        var o = this;
        if ("boolean" == typeof n)
            i = n,
            n = null;
        else if (n < 0 || n >= o.slideCount)
            return !1;
        o.unload(),
        "number" == typeof n ? 0 === n && 0 === o.$slides.length ? e(t).appendTo(o.$slideTrack) : i ? e(t).insertBefore(o.$slides.eq(n)) : e(t).insertAfter(o.$slides.eq(n)) : !0 === i ? e(t).prependTo(o.$slideTrack) : e(t).appendTo(o.$slideTrack),
        o.$slides = o.$slideTrack.children(this.options.slide),
        o.$slideTrack.children(this.options.slide).detach(),
        o.$slideTrack.append(o.$slides),
        o.$slides.each(function(t, n) {
            e(n).attr("data-slick-index", t)
        }),
        o.$slidesCache = o.$slides,
        o.reinit()
    }
    ,
    t.prototype.animateHeight = function() {
        var e = this;
        if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
            var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
            e.$list.animate({
                height: t
            }, e.options.speed)
        }
    }
    ,
    t.prototype.animateSlide = function(t, n) {
        var i = {}
          , o = this;
        o.animateHeight(),
        !0 === o.options.rtl && !1 === o.options.vertical && (t = -t),
        !1 === o.transformsEnabled ? !1 === o.options.vertical ? o.$slideTrack.animate({
            left: t
        }, o.options.speed, o.options.easing, n) : o.$slideTrack.animate({
            top: t
        }, o.options.speed, o.options.easing, n) : !1 === o.cssTransitions ? (!0 === o.options.rtl && (o.currentLeft = -o.currentLeft),
        e({
            animStart: o.currentLeft
        }).animate({
            animStart: t
        }, {
            duration: o.options.speed,
            easing: o.options.easing,
            step: function(e) {
                e = Math.ceil(e),
                !1 === o.options.vertical ? (i[o.animType] = "translate(" + e + "px, 0px)",
                o.$slideTrack.css(i)) : (i[o.animType] = "translate(0px," + e + "px)",
                o.$slideTrack.css(i))
            },
            complete: function() {
                n && n.call()
            }
        })) : (o.applyTransition(),
        t = Math.ceil(t),
        !1 === o.options.vertical ? i[o.animType] = "translate3d(" + t + "px, 0px, 0px)" : i[o.animType] = "translate3d(0px," + t + "px, 0px)",
        o.$slideTrack.css(i),
        n && setTimeout(function() {
            o.disableTransition(),
            n.call()
        }, o.options.speed))
    }
    ,
    t.prototype.getNavTarget = function() {
        var t = this.options.asNavFor;
        return t && null !== t && (t = e(t).not(this.$slider)),
        t
    }
    ,
    t.prototype.asNavFor = function(t) {
        var n = this.getNavTarget();
        null !== n && "object" == typeof n && n.each(function() {
            var n = e(this).slick("getSlick");
            n.unslicked || n.slideHandler(t, !0)
        })
    }
    ,
    t.prototype.applyTransition = function(e) {
        var t = this
          , n = {};
        !1 === t.options.fade ? n[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : n[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase,
        !1 === t.options.fade ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n)
    }
    ,
    t.prototype.autoPlay = function() {
        var e = this;
        e.autoPlayClear(),
        e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed))
    }
    ,
    t.prototype.autoPlayClear = function() {
        this.autoPlayTimer && clearInterval(this.autoPlayTimer)
    }
    ,
    t.prototype.autoPlayIterator = function() {
        var e = this
          , t = e.currentSlide + e.options.slidesToScroll;
        e.paused || e.interrupted || e.focussed || (!1 === e.options.infinite && (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1 ? e.direction = 0 : 0 === e.direction && (t = e.currentSlide - e.options.slidesToScroll,
        e.currentSlide - 1 == 0 && (e.direction = 1))),
        e.slideHandler(t))
    }
    ,
    t.prototype.buildArrows = function() {
        var t = this;
        !0 === t.options.arrows && (t.$prevArrow = e(t.options.prevArrow).addClass("slick-arrow"),
        t.$nextArrow = e(t.options.nextArrow).addClass("slick-arrow"),
        t.slideCount > t.options.slidesToShow ? (t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
        t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
        t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows),
        t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows),
        !0 !== t.options.infinite && t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }
    ,
    t.prototype.buildDots = function() {
        var t, n, i = this;
        if (!0 === i.options.dots && i.slideCount > i.options.slidesToShow) {
            for (i.$slider.addClass("slick-dotted"),
            n = e("<ul />").addClass(i.options.dotsClass),
            t = 0; t <= i.getDotCount(); t += 1)
                n.append(e("<li />").append(i.options.customPaging.call(this, i, t)));
            i.$dots = n.appendTo(i.options.appendDots),
            i.$dots.find("li").first().addClass("slick-active")
        }
    }
    ,
    t.prototype.buildOut = function() {
        var t = this;
        t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide"),
        t.slideCount = t.$slides.length,
        t.$slides.each(function(t, n) {
            e(n).attr("data-slick-index", t).data("originalStyling", e(n).attr("style") || "")
        }),
        t.$slider.addClass("slick-slider"),
        t.$slideTrack = 0 === t.slideCount ? e('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent(),
        t.$list = t.$slideTrack.wrap('<div class="slick-list"/>').parent(),
        t.$slideTrack.css("opacity", 0),
        !0 !== t.options.centerMode && !0 !== t.options.swipeToSlide || (t.options.slidesToScroll = 1),
        e("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"),
        t.setupInfinite(),
        t.buildArrows(),
        t.buildDots(),
        t.updateDots(),
        t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0),
        !0 === t.options.draggable && t.$list.addClass("draggable")
    }
    ,
    t.prototype.buildRows = function() {
        var e, t, n, i, o, r, s, a = this;
        if (i = document.createDocumentFragment(),
        r = a.$slider.children(),
        a.options.rows > 0) {
            for (s = a.options.slidesPerRow * a.options.rows,
            o = Math.ceil(r.length / s),
            e = 0; e < o; e++) {
                var l = document.createElement("div");
                for (t = 0; t < a.options.rows; t++) {
                    var c = document.createElement("div");
                    for (n = 0; n < a.options.slidesPerRow; n++) {
                        var u = e * s + (t * a.options.slidesPerRow + n);
                        r.get(u) && c.appendChild(r.get(u))
                    }
                    l.appendChild(c)
                }
                i.appendChild(l)
            }
            a.$slider.empty().append(i),
            a.$slider.children().children().children().css({
                width: 100 / a.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }
    ,
    t.prototype.checkResponsive = function(t, n) {
        var i, o, r, s = this, a = !1, l = s.$slider.width(), c = window.innerWidth || e(window).width();
        if ("window" === s.respondTo ? r = c : "slider" === s.respondTo ? r = l : "min" === s.respondTo && (r = Math.min(c, l)),
        s.options.responsive && s.options.responsive.length && null !== s.options.responsive) {
            for (i in o = null,
            s.breakpoints)
                s.breakpoints.hasOwnProperty(i) && (!1 === s.originalSettings.mobileFirst ? r < s.breakpoints[i] && (o = s.breakpoints[i]) : r > s.breakpoints[i] && (o = s.breakpoints[i]));
            null !== o ? null !== s.activeBreakpoint ? (o !== s.activeBreakpoint || n) && (s.activeBreakpoint = o,
            "unslick" === s.breakpointSettings[o] ? s.unslick(o) : (s.options = e.extend({}, s.originalSettings, s.breakpointSettings[o]),
            !0 === t && (s.currentSlide = s.options.initialSlide),
            s.refresh(t)),
            a = o) : (s.activeBreakpoint = o,
            "unslick" === s.breakpointSettings[o] ? s.unslick(o) : (s.options = e.extend({}, s.originalSettings, s.breakpointSettings[o]),
            !0 === t && (s.currentSlide = s.options.initialSlide),
            s.refresh(t)),
            a = o) : null !== s.activeBreakpoint && (s.activeBreakpoint = null,
            s.options = s.originalSettings,
            !0 === t && (s.currentSlide = s.options.initialSlide),
            s.refresh(t),
            a = o),
            t || !1 === a || s.$slider.trigger("breakpoint", [s, a])
        }
    }
    ,
    t.prototype.changeSlide = function(t, n) {
        var i, o, r = this, s = e(t.currentTarget);
        switch (s.is("a") && t.preventDefault(),
        s.is("li") || (s = s.closest("li")),
        i = r.slideCount % r.options.slidesToScroll != 0 ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll,
        t.data.message) {
        case "previous":
            o = 0 === i ? r.options.slidesToScroll : r.options.slidesToShow - i,
            r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - o, !1, n);
            break;
        case "next":
            o = 0 === i ? r.options.slidesToScroll : i,
            r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + o, !1, n);
            break;
        case "index":
            var a = 0 === t.data.index ? 0 : t.data.index || s.index() * r.options.slidesToScroll;
            r.slideHandler(r.checkNavigable(a), !1, n),
            s.children().trigger("focus");
            break;
        default:
            return
        }
    }
    ,
    t.prototype.checkNavigable = function(e) {
        var t, n;
        if (n = 0,
        e > (t = this.getNavigableIndexes())[t.length - 1])
            e = t[t.length - 1];
        else
            for (var i in t) {
                if (e < t[i]) {
                    e = n;
                    break
                }
                n = t[i]
            }
        return e
    }
    ,
    t.prototype.cleanUpEvents = function() {
        var t = this;
        t.options.dots && null !== t.$dots && (e("li", t.$dots).off("click.slick", t.changeSlide).off("mouseenter.slick", e.proxy(t.interrupt, t, !0)).off("mouseleave.slick", e.proxy(t.interrupt, t, !1)),
        !0 === t.options.accessibility && t.$dots.off("keydown.slick", t.keyHandler)),
        t.$slider.off("focus.slick blur.slick"),
        !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide),
        t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide),
        !0 === t.options.accessibility && (t.$prevArrow && t.$prevArrow.off("keydown.slick", t.keyHandler),
        t.$nextArrow && t.$nextArrow.off("keydown.slick", t.keyHandler))),
        t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler),
        t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler),
        t.$list.off("touchend.slick mouseup.slick", t.swipeHandler),
        t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler),
        t.$list.off("click.slick", t.clickHandler),
        e(document).off(t.visibilityChange, t.visibility),
        t.cleanUpSlideEvents(),
        !0 === t.options.accessibility && t.$list.off("keydown.slick", t.keyHandler),
        !0 === t.options.focusOnSelect && e(t.$slideTrack).children().off("click.slick", t.selectHandler),
        e(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange),
        e(window).off("resize.slick.slick-" + t.instanceUid, t.resize),
        e("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault),
        e(window).off("load.slick.slick-" + t.instanceUid, t.setPosition)
    }
    ,
    t.prototype.cleanUpSlideEvents = function() {
        var t = this;
        t.$list.off("mouseenter.slick", e.proxy(t.interrupt, t, !0)),
        t.$list.off("mouseleave.slick", e.proxy(t.interrupt, t, !1))
    }
    ,
    t.prototype.cleanUpRows = function() {
        var e, t = this;
        t.options.rows > 0 && ((e = t.$slides.children().children()).removeAttr("style"),
        t.$slider.empty().append(e))
    }
    ,
    t.prototype.clickHandler = function(e) {
        !1 === this.shouldClick && (e.stopImmediatePropagation(),
        e.stopPropagation(),
        e.preventDefault())
    }
    ,
    t.prototype.destroy = function(t) {
        var n = this;
        n.autoPlayClear(),
        n.touchObject = {},
        n.cleanUpEvents(),
        e(".slick-cloned", n.$slider).detach(),
        n.$dots && n.$dots.remove(),
        n.$prevArrow && n.$prevArrow.length && (n.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""),
        n.htmlExpr.test(n.options.prevArrow) && n.$prevArrow.remove()),
        n.$nextArrow && n.$nextArrow.length && (n.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""),
        n.htmlExpr.test(n.options.nextArrow) && n.$nextArrow.remove()),
        n.$slides && (n.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
            e(this).attr("style", e(this).data("originalStyling"))
        }),
        n.$slideTrack.children(this.options.slide).detach(),
        n.$slideTrack.detach(),
        n.$list.detach(),
        n.$slider.append(n.$slides)),
        n.cleanUpRows(),
        n.$slider.removeClass("slick-slider"),
        n.$slider.removeClass("slick-initialized"),
        n.$slider.removeClass("slick-dotted"),
        n.unslicked = !0,
        t || n.$slider.trigger("destroy", [n])
    }
    ,
    t.prototype.disableTransition = function(e) {
        var t = this
          , n = {};
        n[t.transitionType] = "",
        !1 === t.options.fade ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n)
    }
    ,
    t.prototype.fadeSlide = function(e, t) {
        var n = this;
        !1 === n.cssTransitions ? (n.$slides.eq(e).css({
            zIndex: n.options.zIndex
        }),
        n.$slides.eq(e).animate({
            opacity: 1
        }, n.options.speed, n.options.easing, t)) : (n.applyTransition(e),
        n.$slides.eq(e).css({
            opacity: 1,
            zIndex: n.options.zIndex
        }),
        t && setTimeout(function() {
            n.disableTransition(e),
            t.call()
        }, n.options.speed))
    }
    ,
    t.prototype.fadeSlideOut = function(e) {
        var t = this;
        !1 === t.cssTransitions ? t.$slides.eq(e).animate({
            opacity: 0,
            zIndex: t.options.zIndex - 2
        }, t.options.speed, t.options.easing) : (t.applyTransition(e),
        t.$slides.eq(e).css({
            opacity: 0,
            zIndex: t.options.zIndex - 2
        }))
    }
    ,
    t.prototype.filterSlides = t.prototype.slickFilter = function(e) {
        var t = this;
        null !== e && (t.$slidesCache = t.$slides,
        t.unload(),
        t.$slideTrack.children(this.options.slide).detach(),
        t.$slidesCache.filter(e).appendTo(t.$slideTrack),
        t.reinit())
    }
    ,
    t.prototype.focusHandler = function() {
        var t = this;
        t.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function(n) {
            n.stopImmediatePropagation();
            var i = e(this);
            setTimeout(function() {
                t.options.pauseOnFocus && (t.focussed = i.is(":focus"),
                t.autoPlay())
            }, 0)
        })
    }
    ,
    t.prototype.getCurrent = t.prototype.slickCurrentSlide = function() {
        return this.currentSlide
    }
    ,
    t.prototype.getDotCount = function() {
        var e = this
          , t = 0
          , n = 0
          , i = 0;
        if (!0 === e.options.infinite)
            if (e.slideCount <= e.options.slidesToShow)
                ++i;
            else
                for (; t < e.slideCount; )
                    ++i,
                    t = n + e.options.slidesToScroll,
                    n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        else if (!0 === e.options.centerMode)
            i = e.slideCount;
        else if (e.options.asNavFor)
            for (; t < e.slideCount; )
                ++i,
                t = n + e.options.slidesToScroll,
                n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        else
            i = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
        return i - 1
    }
    ,
    t.prototype.getLeft = function(e) {
        var t, n, i, o, r = this, s = 0;
        return r.slideOffset = 0,
        n = r.$slides.first().outerHeight(!0),
        !0 === r.options.infinite ? (r.slideCount > r.options.slidesToShow && (r.slideOffset = r.slideWidth * r.options.slidesToShow * -1,
        o = -1,
        !0 === r.options.vertical && !0 === r.options.centerMode && (2 === r.options.slidesToShow ? o = -1.5 : 1 === r.options.slidesToShow && (o = -2)),
        s = n * r.options.slidesToShow * o),
        r.slideCount % r.options.slidesToScroll != 0 && e + r.options.slidesToScroll > r.slideCount && r.slideCount > r.options.slidesToShow && (e > r.slideCount ? (r.slideOffset = (r.options.slidesToShow - (e - r.slideCount)) * r.slideWidth * -1,
        s = (r.options.slidesToShow - (e - r.slideCount)) * n * -1) : (r.slideOffset = r.slideCount % r.options.slidesToScroll * r.slideWidth * -1,
        s = r.slideCount % r.options.slidesToScroll * n * -1))) : e + r.options.slidesToShow > r.slideCount && (r.slideOffset = (e + r.options.slidesToShow - r.slideCount) * r.slideWidth,
        s = (e + r.options.slidesToShow - r.slideCount) * n),
        r.slideCount <= r.options.slidesToShow && (r.slideOffset = 0,
        s = 0),
        !0 === r.options.centerMode && r.slideCount <= r.options.slidesToShow ? r.slideOffset = r.slideWidth * Math.floor(r.options.slidesToShow) / 2 - r.slideWidth * r.slideCount / 2 : !0 === r.options.centerMode && !0 === r.options.infinite ? r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2) - r.slideWidth : !0 === r.options.centerMode && (r.slideOffset = 0,
        r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2)),
        t = !1 === r.options.vertical ? e * r.slideWidth * -1 + r.slideOffset : e * n * -1 + s,
        !0 === r.options.variableWidth && (i = r.slideCount <= r.options.slidesToShow || !1 === r.options.infinite ? r.$slideTrack.children(".slick-slide").eq(e) : r.$slideTrack.children(".slick-slide").eq(e + r.options.slidesToShow),
        t = !0 === r.options.rtl ? i[0] ? -1 * (r.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0,
        !0 === r.options.centerMode && (i = r.slideCount <= r.options.slidesToShow || !1 === r.options.infinite ? r.$slideTrack.children(".slick-slide").eq(e) : r.$slideTrack.children(".slick-slide").eq(e + r.options.slidesToShow + 1),
        t = !0 === r.options.rtl ? i[0] ? -1 * (r.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0,
        t += (r.$list.width() - i.outerWidth()) / 2)),
        t
    }
    ,
    t.prototype.getOption = t.prototype.slickGetOption = function(e) {
        return this.options[e]
    }
    ,
    t.prototype.getNavigableIndexes = function() {
        var e, t = this, n = 0, i = 0, o = [];
        for (!1 === t.options.infinite ? e = t.slideCount : (n = -1 * t.options.slidesToScroll,
        i = -1 * t.options.slidesToScroll,
        e = 2 * t.slideCount); n < e; )
            o.push(n),
            n = i + t.options.slidesToScroll,
            i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
        return o
    }
    ,
    t.prototype.getSlick = function() {
        return this
    }
    ,
    t.prototype.getSlideCount = function() {
        var t, n, i = this;
        return n = !0 === i.options.centerMode ? i.slideWidth * Math.floor(i.options.slidesToShow / 2) : 0,
        !0 === i.options.swipeToSlide ? (i.$slideTrack.find(".slick-slide").each(function(o, r) {
            if (r.offsetLeft - n + e(r).outerWidth() / 2 > -1 * i.swipeLeft)
                return t = r,
                !1
        }),
        Math.abs(e(t).attr("data-slick-index") - i.currentSlide) || 1) : i.options.slidesToScroll
    }
    ,
    t.prototype.goTo = t.prototype.slickGoTo = function(e, t) {
        this.changeSlide({
            data: {
                message: "index",
                index: parseInt(e)
            }
        }, t)
    }
    ,
    t.prototype.init = function(t) {
        var n = this;
        e(n.$slider).hasClass("slick-initialized") || (e(n.$slider).addClass("slick-initialized"),
        n.buildRows(),
        n.buildOut(),
        n.setProps(),
        n.startLoad(),
        n.loadSlider(),
        n.initializeEvents(),
        n.updateArrows(),
        n.updateDots(),
        n.checkResponsive(!0),
        n.focusHandler()),
        t && n.$slider.trigger("init", [n]),
        !0 === n.options.accessibility && n.initADA(),
        n.options.autoplay && (n.paused = !1,
        n.autoPlay())
    }
    ,
    t.prototype.initADA = function() {
        var t = this
          , n = Math.ceil(t.slideCount / t.options.slidesToShow)
          , i = t.getNavigableIndexes().filter(function(e) {
            return e >= 0 && e < t.slideCount
        });
        t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({
            tabindex: "-1"
        }),
        null !== t.$dots && (t.$slides.not(t.$slideTrack.find(".slick-cloned")).each(function(n) {
            var o = i.indexOf(n);
            if (e(this).attr({
                role: "tabpanel",
                id: "slick-slide" + t.instanceUid + n,
                tabindex: -1
            }),
            -1 !== o) {
                var r = "slick-slide-control" + t.instanceUid + o;
                e("#" + r).length && e(this).attr({
                    "aria-describedby": r
                })
            }
        }),
        t.$dots.attr("role", "tablist").find("li").each(function(o) {
            var r = i[o];
            e(this).attr({
                role: "presentation"
            }),
            e(this).find("button").first().attr({
                role: "tab",
                id: "slick-slide-control" + t.instanceUid + o,
                "aria-controls": "slick-slide" + t.instanceUid + r,
                "aria-label": o + 1 + " of " + n,
                "aria-selected": null,
                tabindex: "-1"
            })
        }).eq(t.currentSlide).find("button").attr({
            "aria-selected": "true",
            tabindex: "0"
        }).end());
        for (var o = t.currentSlide, r = o + t.options.slidesToShow; o < r; o++)
            t.options.focusOnChange ? t.$slides.eq(o).attr({
                tabindex: "0"
            }) : t.$slides.eq(o).removeAttr("tabindex");
        t.activateADA()
    }
    ,
    t.prototype.initArrowEvents = function() {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.off("click.slick").on("click.slick", {
            message: "previous"
        }, e.changeSlide),
        e.$nextArrow.off("click.slick").on("click.slick", {
            message: "next"
        }, e.changeSlide),
        !0 === e.options.accessibility && (e.$prevArrow.on("keydown.slick", e.keyHandler),
        e.$nextArrow.on("keydown.slick", e.keyHandler)))
    }
    ,
    t.prototype.initDotEvents = function() {
        var t = this;
        !0 === t.options.dots && t.slideCount > t.options.slidesToShow && (e("li", t.$dots).on("click.slick", {
            message: "index"
        }, t.changeSlide),
        !0 === t.options.accessibility && t.$dots.on("keydown.slick", t.keyHandler)),
        !0 === t.options.dots && !0 === t.options.pauseOnDotsHover && t.slideCount > t.options.slidesToShow && e("li", t.$dots).on("mouseenter.slick", e.proxy(t.interrupt, t, !0)).on("mouseleave.slick", e.proxy(t.interrupt, t, !1))
    }
    ,
    t.prototype.initSlideEvents = function() {
        var t = this;
        t.options.pauseOnHover && (t.$list.on("mouseenter.slick", e.proxy(t.interrupt, t, !0)),
        t.$list.on("mouseleave.slick", e.proxy(t.interrupt, t, !1)))
    }
    ,
    t.prototype.initializeEvents = function() {
        var t = this;
        t.initArrowEvents(),
        t.initDotEvents(),
        t.initSlideEvents(),
        t.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, t.swipeHandler),
        t.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, t.swipeHandler),
        t.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, t.swipeHandler),
        t.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, t.swipeHandler),
        t.$list.on("click.slick", t.clickHandler),
        e(document).on(t.visibilityChange, e.proxy(t.visibility, t)),
        !0 === t.options.accessibility && t.$list.on("keydown.slick", t.keyHandler),
        !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler),
        e(window).on("orientationchange.slick.slick-" + t.instanceUid, e.proxy(t.orientationChange, t)),
        e(window).on("resize.slick.slick-" + t.instanceUid, e.proxy(t.resize, t)),
        e("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault),
        e(window).on("load.slick.slick-" + t.instanceUid, t.setPosition),
        e(t.setPosition)
    }
    ,
    t.prototype.initUI = function() {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(),
        e.$nextArrow.show()),
        !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.show()
    }
    ,
    t.prototype.keyHandler = function(e) {
        var t = this;
        e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && !0 === t.options.accessibility ? t.changeSlide({
            data: {
                message: !0 === t.options.rtl ? "next" : "previous"
            }
        }) : 39 === e.keyCode && !0 === t.options.accessibility && t.changeSlide({
            data: {
                message: !0 === t.options.rtl ? "previous" : "next"
            }
        }))
    }
    ,
    t.prototype.lazyLoad = function() {
        var t, n, i, o = this;
        function r(t) {
            e("img[data-lazy]", t).each(function() {
                var t = e(this)
                  , n = e(this).attr("data-lazy")
                  , i = e(this).attr("data-srcset")
                  , r = e(this).attr("data-sizes") || o.$slider.attr("data-sizes")
                  , s = document.createElement("img");
                s.onload = function() {
                    t.animate({
                        opacity: 0
                    }, 100, function() {
                        i && (t.attr("srcset", i),
                        r && t.attr("sizes", r)),
                        t.attr("src", n).animate({
                            opacity: 1
                        }, 200, function() {
                            t.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                        }),
                        o.$slider.trigger("lazyLoaded", [o, t, n])
                    })
                }
                ,
                s.onerror = function() {
                    t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),
                    o.$slider.trigger("lazyLoadError", [o, t, n])
                }
                ,
                s.src = n
            })
        }
        if (!0 === o.options.centerMode ? !0 === o.options.infinite ? i = (n = o.currentSlide + (o.options.slidesToShow / 2 + 1)) + o.options.slidesToShow + 2 : (n = Math.max(0, o.currentSlide - (o.options.slidesToShow / 2 + 1)),
        i = o.options.slidesToShow / 2 + 1 + 2 + o.currentSlide) : (n = o.options.infinite ? o.options.slidesToShow + o.currentSlide : o.currentSlide,
        i = Math.ceil(n + o.options.slidesToShow),
        !0 === o.options.fade && (n > 0 && n--,
        i <= o.slideCount && i++)),
        t = o.$slider.find(".slick-slide").slice(n, i),
        "anticipated" === o.options.lazyLoad)
            for (var s = n - 1, a = i, l = o.$slider.find(".slick-slide"), c = 0; c < o.options.slidesToScroll; c++)
                s < 0 && (s = o.slideCount - 1),
                t = (t = t.add(l.eq(s))).add(l.eq(a)),
                s--,
                a++;
        r(t),
        o.slideCount <= o.options.slidesToShow ? r(o.$slider.find(".slick-slide")) : o.currentSlide >= o.slideCount - o.options.slidesToShow ? r(o.$slider.find(".slick-cloned").slice(0, o.options.slidesToShow)) : 0 === o.currentSlide && r(o.$slider.find(".slick-cloned").slice(-1 * o.options.slidesToShow))
    }
    ,
    t.prototype.loadSlider = function() {
        var e = this;
        e.setPosition(),
        e.$slideTrack.css({
            opacity: 1
        }),
        e.$slider.removeClass("slick-loading"),
        e.initUI(),
        "progressive" === e.options.lazyLoad && e.progressiveLazyLoad()
    }
    ,
    t.prototype.next = t.prototype.slickNext = function() {
        this.changeSlide({
            data: {
                message: "next"
            }
        })
    }
    ,
    t.prototype.orientationChange = function() {
        this.checkResponsive(),
        this.setPosition()
    }
    ,
    t.prototype.pause = t.prototype.slickPause = function() {
        this.autoPlayClear(),
        this.paused = !0
    }
    ,
    t.prototype.play = t.prototype.slickPlay = function() {
        var e = this;
        e.autoPlay(),
        e.options.autoplay = !0,
        e.paused = !1,
        e.focussed = !1,
        e.interrupted = !1
    }
    ,
    t.prototype.postSlide = function(t) {
        var n = this;
        n.unslicked || (n.$slider.trigger("afterChange", [n, t]),
        n.animating = !1,
        n.slideCount > n.options.slidesToShow && n.setPosition(),
        n.swipeLeft = null,
        n.options.autoplay && n.autoPlay(),
        !0 === n.options.accessibility && (n.initADA(),
        n.options.focusOnChange && e(n.$slides.get(n.currentSlide)).attr("tabindex", 0).focus()))
    }
    ,
    t.prototype.prev = t.prototype.slickPrev = function() {
        this.changeSlide({
            data: {
                message: "previous"
            }
        })
    }
    ,
    t.prototype.preventDefault = function(e) {
        e.preventDefault()
    }
    ,
    t.prototype.progressiveLazyLoad = function(t) {
        t = t || 1;
        var n, i, o, r, s, a = this, l = e("img[data-lazy]", a.$slider);
        l.length ? (n = l.first(),
        i = n.attr("data-lazy"),
        o = n.attr("data-srcset"),
        r = n.attr("data-sizes") || a.$slider.attr("data-sizes"),
        (s = document.createElement("img")).onload = function() {
            o && (n.attr("srcset", o),
            r && n.attr("sizes", r)),
            n.attr("src", i).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),
            !0 === a.options.adaptiveHeight && a.setPosition(),
            a.$slider.trigger("lazyLoaded", [a, n, i]),
            a.progressiveLazyLoad()
        }
        ,
        s.onerror = function() {
            t < 3 ? setTimeout(function() {
                a.progressiveLazyLoad(t + 1)
            }, 500) : (n.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),
            a.$slider.trigger("lazyLoadError", [a, n, i]),
            a.progressiveLazyLoad())
        }
        ,
        s.src = i) : a.$slider.trigger("allImagesLoaded", [a])
    }
    ,
    t.prototype.refresh = function(t) {
        var n, i, o = this;
        i = o.slideCount - o.options.slidesToShow,
        !o.options.infinite && o.currentSlide > i && (o.currentSlide = i),
        o.slideCount <= o.options.slidesToShow && (o.currentSlide = 0),
        n = o.currentSlide,
        o.destroy(!0),
        e.extend(o, o.initials, {
            currentSlide: n
        }),
        o.init(),
        t || o.changeSlide({
            data: {
                message: "index",
                index: n
            }
        }, !1)
    }
    ,
    t.prototype.registerBreakpoints = function() {
        var t, n, i, o = this, r = o.options.responsive || null;
        if ("array" === e.type(r) && r.length) {
            for (t in o.respondTo = o.options.respondTo || "window",
            r)
                if (i = o.breakpoints.length - 1,
                r.hasOwnProperty(t)) {
                    for (n = r[t].breakpoint; i >= 0; )
                        o.breakpoints[i] && o.breakpoints[i] === n && o.breakpoints.splice(i, 1),
                        i--;
                    o.breakpoints.push(n),
                    o.breakpointSettings[n] = r[t].settings
                }
            o.breakpoints.sort(function(e, t) {
                return o.options.mobileFirst ? e - t : t - e
            })
        }
    }
    ,
    t.prototype.reinit = function() {
        var t = this;
        t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide"),
        t.slideCount = t.$slides.length,
        t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll),
        t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0),
        t.registerBreakpoints(),
        t.setProps(),
        t.setupInfinite(),
        t.buildArrows(),
        t.updateArrows(),
        t.initArrowEvents(),
        t.buildDots(),
        t.updateDots(),
        t.initDotEvents(),
        t.cleanUpSlideEvents(),
        t.initSlideEvents(),
        t.checkResponsive(!1, !0),
        !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler),
        t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0),
        t.setPosition(),
        t.focusHandler(),
        t.paused = !t.options.autoplay,
        t.autoPlay(),
        t.$slider.trigger("reInit", [t])
    }
    ,
    t.prototype.resize = function() {
        var t = this;
        e(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay),
        t.windowDelay = window.setTimeout(function() {
            t.windowWidth = e(window).width(),
            t.checkResponsive(),
            t.unslicked || t.setPosition()
        }, 50))
    }
    ,
    t.prototype.removeSlide = t.prototype.slickRemove = function(e, t, n) {
        var i = this;
        if (e = "boolean" == typeof e ? !0 === (t = e) ? 0 : i.slideCount - 1 : !0 === t ? --e : e,
        i.slideCount < 1 || e < 0 || e > i.slideCount - 1)
            return !1;
        i.unload(),
        !0 === n ? i.$slideTrack.children().remove() : i.$slideTrack.children(this.options.slide).eq(e).remove(),
        i.$slides = i.$slideTrack.children(this.options.slide),
        i.$slideTrack.children(this.options.slide).detach(),
        i.$slideTrack.append(i.$slides),
        i.$slidesCache = i.$slides,
        i.reinit()
    }
    ,
    t.prototype.setCSS = function(e) {
        var t, n, i = this, o = {};
        !0 === i.options.rtl && (e = -e),
        t = "left" == i.positionProp ? Math.ceil(e) + "px" : "0px",
        n = "top" == i.positionProp ? Math.ceil(e) + "px" : "0px",
        o[i.positionProp] = e,
        !1 === i.transformsEnabled ? i.$slideTrack.css(o) : (o = {},
        !1 === i.cssTransitions ? (o[i.animType] = "translate(" + t + ", " + n + ")",
        i.$slideTrack.css(o)) : (o[i.animType] = "translate3d(" + t + ", " + n + ", 0px)",
        i.$slideTrack.css(o)))
    }
    ,
    t.prototype.setDimensions = function() {
        var e = this;
        !1 === e.options.vertical ? !0 === e.options.centerMode && e.$list.css({
            padding: "0px " + e.options.centerPadding
        }) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow),
        !0 === e.options.centerMode && e.$list.css({
            padding: e.options.centerPadding + " 0px"
        })),
        e.listWidth = e.$list.width(),
        e.listHeight = e.$list.height(),
        !1 === e.options.vertical && !1 === e.options.variableWidth ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow),
        e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : !0 === e.options.variableWidth ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth),
        e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
        var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
        !1 === e.options.variableWidth && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t)
    }
    ,
    t.prototype.setFade = function() {
        var t, n = this;
        n.$slides.each(function(i, o) {
            t = n.slideWidth * i * -1,
            !0 === n.options.rtl ? e(o).css({
                position: "relative",
                right: t,
                top: 0,
                zIndex: n.options.zIndex - 2,
                opacity: 0
            }) : e(o).css({
                position: "relative",
                left: t,
                top: 0,
                zIndex: n.options.zIndex - 2,
                opacity: 0
            })
        }),
        n.$slides.eq(n.currentSlide).css({
            zIndex: n.options.zIndex - 1,
            opacity: 1
        })
    }
    ,
    t.prototype.setHeight = function() {
        var e = this;
        if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
            var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
            e.$list.css("height", t)
        }
    }
    ,
    t.prototype.setOption = t.prototype.slickSetOption = function() {
        var t, n, i, o, r, s = this, a = !1;
        if ("object" === e.type(arguments[0]) ? (i = arguments[0],
        a = arguments[1],
        r = "multiple") : "string" === e.type(arguments[0]) && (i = arguments[0],
        o = arguments[1],
        a = arguments[2],
        "responsive" === arguments[0] && "array" === e.type(arguments[1]) ? r = "responsive" : void 0 !== arguments[1] && (r = "single")),
        "single" === r)
            s.options[i] = o;
        else if ("multiple" === r)
            e.each(i, function(e, t) {
                s.options[e] = t
            });
        else if ("responsive" === r)
            for (n in o)
                if ("array" !== e.type(s.options.responsive))
                    s.options.responsive = [o[n]];
                else {
                    for (t = s.options.responsive.length - 1; t >= 0; )
                        s.options.responsive[t].breakpoint === o[n].breakpoint && s.options.responsive.splice(t, 1),
                        t--;
                    s.options.responsive.push(o[n])
                }
        a && (s.unload(),
        s.reinit())
    }
    ,
    t.prototype.setPosition = function() {
        var e = this;
        e.setDimensions(),
        e.setHeight(),
        !1 === e.options.fade ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(),
        e.$slider.trigger("setPosition", [e])
    }
    ,
    t.prototype.setProps = function() {
        var e = this
          , t = document.body.style;
        e.positionProp = !0 === e.options.vertical ? "top" : "left",
        "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"),
        void 0 === t.WebkitTransition && void 0 === t.MozTransition && void 0 === t.msTransition || !0 === e.options.useCSS && (e.cssTransitions = !0),
        e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex),
        void 0 !== t.OTransform && (e.animType = "OTransform",
        e.transformType = "-o-transform",
        e.transitionType = "OTransition",
        void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)),
        void 0 !== t.MozTransform && (e.animType = "MozTransform",
        e.transformType = "-moz-transform",
        e.transitionType = "MozTransition",
        void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)),
        void 0 !== t.webkitTransform && (e.animType = "webkitTransform",
        e.transformType = "-webkit-transform",
        e.transitionType = "webkitTransition",
        void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)),
        void 0 !== t.msTransform && (e.animType = "msTransform",
        e.transformType = "-ms-transform",
        e.transitionType = "msTransition",
        void 0 === t.msTransform && (e.animType = !1)),
        void 0 !== t.transform && !1 !== e.animType && (e.animType = "transform",
        e.transformType = "transform",
        e.transitionType = "transition"),
        e.transformsEnabled = e.options.useTransform && null !== e.animType && !1 !== e.animType
    }
    ,
    t.prototype.setSlideClasses = function(e) {
        var t, n, i, o, r = this;
        if (n = r.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"),
        r.$slides.eq(e).addClass("slick-current"),
        !0 === r.options.centerMode) {
            var s = r.options.slidesToShow % 2 == 0 ? 1 : 0;
            t = Math.floor(r.options.slidesToShow / 2),
            !0 === r.options.infinite && (e >= t && e <= r.slideCount - 1 - t ? r.$slides.slice(e - t + s, e + t + 1).addClass("slick-active").attr("aria-hidden", "false") : (i = r.options.slidesToShow + e,
            n.slice(i - t + 1 + s, i + t + 2).addClass("slick-active").attr("aria-hidden", "false")),
            0 === e ? (console.log(n.length - 1 - r.options.slidesToShow - (r.slideCount - 1 - r.options.slidesToShow)),
            n.eq(n.length - 1 - r.options.slidesToShow - (r.slideCount - 1 - r.options.slidesToShow)).addClass("slick-center")) : e === r.slideCount - 1 && n.eq(r.options.slidesToShow).addClass("slick-center")),
            r.$slides.eq(e).addClass("slick-center")
        } else
            e >= 0 && e <= r.slideCount - r.options.slidesToShow ? r.$slides.slice(e, e + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : n.length <= r.options.slidesToShow ? n.addClass("slick-active").attr("aria-hidden", "false") : (o = r.slideCount % r.options.slidesToShow,
            i = !0 === r.options.infinite ? r.options.slidesToShow + e : e,
            r.options.slidesToShow == r.options.slidesToScroll && r.slideCount - e < r.options.slidesToShow ? n.slice(i - (r.options.slidesToShow - o), i + o).addClass("slick-active").attr("aria-hidden", "false") : n.slice(i, i + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
        "ondemand" !== r.options.lazyLoad && "anticipated" !== r.options.lazyLoad || r.lazyLoad()
    }
    ,
    t.prototype.setupInfinite = function() {
        var t, n, i, o = this;
        if (!0 === o.options.fade && (o.options.centerMode = !1),
        !0 === o.options.infinite && !1 === o.options.fade && (n = null,
        o.slideCount > o.options.slidesToShow)) {
            for (i = !0 === o.options.centerMode ? o.options.slidesToShow + 1 : o.options.slidesToShow,
            t = o.slideCount; t > o.slideCount - i; t -= 1)
                n = t - 1,
                e(o.$slides[n]).clone(!0).attr("id", "").attr("data-slick-index", n - o.slideCount).prependTo(o.$slideTrack).addClass("slick-cloned");
            for (t = 0; t < i + o.slideCount; t += 1)
                n = t,
                e(o.$slides[n]).clone(!0).attr("id", "").attr("data-slick-index", n + o.slideCount).appendTo(o.$slideTrack).addClass("slick-cloned");
            o.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                e(this).attr("id", "")
            })
        }
    }
    ,
    t.prototype.interrupt = function(e) {
        e || this.autoPlay(),
        this.interrupted = e
    }
    ,
    t.prototype.selectHandler = function(t) {
        var n = this
          , i = e(t.target).is(".slick-slide") ? e(t.target) : e(t.target).parents(".slick-slide")
          , o = parseInt(i.attr("data-slick-index"));
        o || (o = 0),
        n.slideCount <= n.options.slidesToShow ? n.slideHandler(o, !1, !0) : n.slideHandler(o)
    }
    ,
    t.prototype.slideHandler = function(e, t, n) {
        var i, o, r, s, a, l, c = this;
        if (t = t || !1,
        !(!0 === c.animating && !0 === c.options.waitForAnimate || !0 === c.options.fade && c.currentSlide === e))
            if (!1 === t && c.asNavFor(e),
            i = e,
            a = c.getLeft(i),
            s = c.getLeft(c.currentSlide),
            c.currentLeft = null === c.swipeLeft ? s : c.swipeLeft,
            !1 === c.options.infinite && !1 === c.options.centerMode && (e < 0 || e > c.getDotCount() * c.options.slidesToScroll))
                !1 === c.options.fade && (i = c.currentSlide,
                !0 !== n && c.slideCount > c.options.slidesToShow ? c.animateSlide(s, function() {
                    c.postSlide(i)
                }) : c.postSlide(i));
            else if (!1 === c.options.infinite && !0 === c.options.centerMode && (e < 0 || e > c.slideCount - c.options.slidesToScroll))
                !1 === c.options.fade && (i = c.currentSlide,
                !0 !== n && c.slideCount > c.options.slidesToShow ? c.animateSlide(s, function() {
                    c.postSlide(i)
                }) : c.postSlide(i));
            else {
                if (c.options.autoplay && clearInterval(c.autoPlayTimer),
                o = i < 0 ? c.slideCount % c.options.slidesToScroll != 0 ? c.slideCount - c.slideCount % c.options.slidesToScroll : c.slideCount + i : i >= c.slideCount ? c.slideCount % c.options.slidesToScroll != 0 ? 0 : i - c.slideCount : i,
                c.animating = !0,
                c.$slider.trigger("beforeChange", [c, c.currentSlide, o]),
                r = c.currentSlide,
                c.currentSlide = o,
                c.setSlideClasses(c.currentSlide),
                c.options.asNavFor && (l = (l = c.getNavTarget()).slick("getSlick")).slideCount <= l.options.slidesToShow && l.setSlideClasses(c.currentSlide),
                c.updateDots(),
                c.updateArrows(),
                !0 === c.options.fade)
                    return !0 !== n ? (c.fadeSlideOut(r),
                    c.fadeSlide(o, function() {
                        c.postSlide(o)
                    })) : c.postSlide(o),
                    void c.animateHeight();
                !0 !== n && c.slideCount > c.options.slidesToShow ? c.animateSlide(a, function() {
                    c.postSlide(o)
                }) : c.postSlide(o)
            }
    }
    ,
    t.prototype.startLoad = function() {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(),
        e.$nextArrow.hide()),
        !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.hide(),
        e.$slider.addClass("slick-loading")
    }
    ,
    t.prototype.swipeDirection = function() {
        var e, t, n, i, o = this;
        return e = o.touchObject.startX - o.touchObject.curX,
        t = o.touchObject.startY - o.touchObject.curY,
        n = Math.atan2(t, e),
        (i = Math.round(180 * n / Math.PI)) < 0 && (i = 360 - Math.abs(i)),
        i <= 45 && i >= 0 ? !1 === o.options.rtl ? "left" : "right" : i <= 360 && i >= 315 ? !1 === o.options.rtl ? "left" : "right" : i >= 135 && i <= 225 ? !1 === o.options.rtl ? "right" : "left" : !0 === o.options.verticalSwiping ? i >= 35 && i <= 135 ? "down" : "up" : "vertical"
    }
    ,
    t.prototype.swipeEnd = function(e) {
        var t, n, i = this;
        if (i.dragging = !1,
        i.swiping = !1,
        i.scrolling)
            return i.scrolling = !1,
            !1;
        if (i.interrupted = !1,
        i.shouldClick = !(i.touchObject.swipeLength > 10),
        void 0 === i.touchObject.curX)
            return !1;
        if (!0 === i.touchObject.edgeHit && i.$slider.trigger("edge", [i, i.swipeDirection()]),
        i.touchObject.swipeLength >= i.touchObject.minSwipe) {
            switch (n = i.swipeDirection()) {
            case "left":
            case "down":
                t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide + i.getSlideCount()) : i.currentSlide + i.getSlideCount(),
                i.currentDirection = 0;
                break;
            case "right":
            case "up":
                t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide - i.getSlideCount()) : i.currentSlide - i.getSlideCount(),
                i.currentDirection = 1
            }
            "vertical" != n && (i.slideHandler(t),
            i.touchObject = {},
            i.$slider.trigger("swipe", [i, n]))
        } else
            i.touchObject.startX !== i.touchObject.curX && (i.slideHandler(i.currentSlide),
            i.touchObject = {})
    }
    ,
    t.prototype.swipeHandler = function(e) {
        var t = this;
        if (!(!1 === t.options.swipe || "ontouchend"in document && !1 === t.options.swipe || !1 === t.options.draggable && -1 !== e.type.indexOf("mouse")))
            switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1,
            t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold,
            !0 === t.options.verticalSwiping && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold),
            e.data.action) {
            case "start":
                t.swipeStart(e);
                break;
            case "move":
                t.swipeMove(e);
                break;
            case "end":
                t.swipeEnd(e)
            }
    }
    ,
    t.prototype.swipeMove = function(e) {
        var t, n, i, o, r, s, a = this;
        return r = void 0 !== e.originalEvent ? e.originalEvent.touches : null,
        !(!a.dragging || a.scrolling || r && 1 !== r.length) && (t = a.getLeft(a.currentSlide),
        a.touchObject.curX = void 0 !== r ? r[0].pageX : e.clientX,
        a.touchObject.curY = void 0 !== r ? r[0].pageY : e.clientY,
        a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))),
        s = Math.round(Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2))),
        !a.options.verticalSwiping && !a.swiping && s > 4 ? (a.scrolling = !0,
        !1) : (!0 === a.options.verticalSwiping && (a.touchObject.swipeLength = s),
        n = a.swipeDirection(),
        void 0 !== e.originalEvent && a.touchObject.swipeLength > 4 && (a.swiping = !0,
        e.preventDefault()),
        o = (!1 === a.options.rtl ? 1 : -1) * (a.touchObject.curX > a.touchObject.startX ? 1 : -1),
        !0 === a.options.verticalSwiping && (o = a.touchObject.curY > a.touchObject.startY ? 1 : -1),
        i = a.touchObject.swipeLength,
        a.touchObject.edgeHit = !1,
        !1 === a.options.infinite && (0 === a.currentSlide && "right" === n || a.currentSlide >= a.getDotCount() && "left" === n) && (i = a.touchObject.swipeLength * a.options.edgeFriction,
        a.touchObject.edgeHit = !0),
        !1 === a.options.vertical ? a.swipeLeft = t + i * o : a.swipeLeft = t + i * (a.$list.height() / a.listWidth) * o,
        !0 === a.options.verticalSwiping && (a.swipeLeft = t + i * o),
        !0 !== a.options.fade && !1 !== a.options.touchMove && (!0 === a.animating ? (a.swipeLeft = null,
        !1) : void a.setCSS(a.swipeLeft))))
    }
    ,
    t.prototype.swipeStart = function(e) {
        var t, n = this;
        if (n.interrupted = !0,
        1 !== n.touchObject.fingerCount || n.slideCount <= n.options.slidesToShow)
            return n.touchObject = {},
            !1;
        void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]),
        n.touchObject.startX = n.touchObject.curX = void 0 !== t ? t.pageX : e.clientX,
        n.touchObject.startY = n.touchObject.curY = void 0 !== t ? t.pageY : e.clientY,
        n.dragging = !0
    }
    ,
    t.prototype.unfilterSlides = t.prototype.slickUnfilter = function() {
        var e = this;
        null !== e.$slidesCache && (e.unload(),
        e.$slideTrack.children(this.options.slide).detach(),
        e.$slidesCache.appendTo(e.$slideTrack),
        e.reinit())
    }
    ,
    t.prototype.unload = function() {
        var t = this;
        e(".slick-cloned", t.$slider).remove(),
        t.$dots && t.$dots.remove(),
        t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove(),
        t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove(),
        t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }
    ,
    t.prototype.unslick = function(e) {
        var t = this;
        t.$slider.trigger("unslick", [t, e]),
        t.destroy()
    }
    ,
    t.prototype.updateArrows = function() {
        var e = this;
        Math.floor(e.options.slidesToShow / 2),
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
        e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
        0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
        e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - e.options.slidesToShow && !1 === e.options.centerMode ? (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
        e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - 1 && !0 === e.options.centerMode && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
        e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }
    ,
    t.prototype.updateDots = function() {
        var e = this;
        null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").end(),
        e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active"))
    }
    ,
    t.prototype.visibility = function() {
        var e = this;
        e.options.autoplay && (document[e.hidden] ? e.interrupted = !0 : e.interrupted = !1)
    }
    ,
    e.fn.slick = function() {
        var e, n, i = this, o = arguments[0], r = Array.prototype.slice.call(arguments, 1), s = i.length;
        for (e = 0; e < s; e++)
            if ("object" == typeof o || void 0 === o ? i[e].slick = new t(i[e],o) : n = i[e].slick[o].apply(i[e].slick, r),
            void 0 !== n)
                return n;
        return i
    }
});
var $jscomp = {
    scope: {}
};
$jscomp.defineProperty = "function" == typeof Object.defineProperties ? Object.defineProperty : function(e, t, n) {
    if (n.get || n.set)
        throw new TypeError("ES3 does not support getters and setters.");
    e != Array.prototype && e != Object.prototype && (e[t] = n.value)
}
,
$jscomp.getGlobal = function(e) {
    return "undefined" != typeof window && window === e ? e : "undefined" != typeof global && null != global ? global : e
}
,
$jscomp.global = $jscomp.getGlobal(this),
$jscomp.SYMBOL_PREFIX = "jscomp_symbol_",
$jscomp.initSymbol = function() {
    $jscomp.initSymbol = function() {}
    ,
    $jscomp.global.Symbol || ($jscomp.global.Symbol = $jscomp.Symbol)
}
,
$jscomp.symbolCounter_ = 0,
$jscomp.Symbol = function(e) {
    return $jscomp.SYMBOL_PREFIX + (e || "") + $jscomp.symbolCounter_++
}
,
$jscomp.initSymbolIterator = function() {
    $jscomp.initSymbol();
    var e = $jscomp.global.Symbol.iterator;
    e || (e = $jscomp.global.Symbol.iterator = $jscomp.global.Symbol("iterator")),
    "function" != typeof Array.prototype[e] && $jscomp.defineProperty(Array.prototype, e, {
        configurable: !0,
        writable: !0,
        value: function() {
            return $jscomp.arrayIterator(this)
        }
    }),
    $jscomp.initSymbolIterator = function() {}
}
,
$jscomp.arrayIterator = function(e) {
    var t = 0;
    return $jscomp.iteratorPrototype(function() {
        return t < e.length ? {
            done: !1,
            value: e[t++]
        } : {
            done: !0
        }
    })
}
,
$jscomp.iteratorPrototype = function(e) {
    return $jscomp.initSymbolIterator(),
    (e = {
        next: e
    })[$jscomp.global.Symbol.iterator] = function() {
        return this
    }
    ,
    e
}
,
$jscomp.array = $jscomp.array || {},
$jscomp.iteratorFromArray = function(e, t) {
    $jscomp.initSymbolIterator(),
    e instanceof String && (e += "");
    var n = 0
      , i = {
        next: function() {
            if (n < e.length) {
                var o = n++;
                return {
                    value: t(o, e[o]),
                    done: !1
                }
            }
            return i.next = function() {
                return {
                    done: !0,
                    value: void 0
                }
            }
            ,
            i.next()
        }
    };
    return i[Symbol.iterator] = function() {
        return i
    }
    ,
    i
}
,
$jscomp.polyfill = function(e, t, n, i) {
    if (t) {
        for (n = $jscomp.global,
        e = e.split("."),
        i = 0; i < e.length - 1; i++) {
            var o = e[i];
            o in n || (n[o] = {}),
            n = n[o]
        }
        (t = t(i = n[e = e[e.length - 1]])) != i && null != t && $jscomp.defineProperty(n, e, {
            configurable: !0,
            writable: !0,
            value: t
        })
    }
}
,
$jscomp.polyfill("Array.prototype.keys", function(e) {
    return e || function() {
        return $jscomp.iteratorFromArray(this, function(e) {
            return e
        })
    }
}, "es6-impl", "es3");
var $jscomp$this = this;
!function(e, t) {
    "function" == typeof define && define.amd ? define([], t) : "object" == typeof module && module.exports ? module.exports = t() : e.anime = t()
}(this, function() {
    function e(e) {
        if (!E.col(e))
            try {
                return document.querySelectorAll(e)
            } catch (e) {}
    }
    function t(e, t) {
        for (var n = e.length, i = 2 <= arguments.length ? arguments[1] : void 0, o = [], r = 0; r < n; r++)
            if (r in e) {
                var s = e[r];
                t.call(i, s, r, e) && o.push(s)
            }
        return o
    }
    function n(e) {
        return e.reduce(function(e, t) {
            return e.concat(E.arr(t) ? n(t) : t)
        }, [])
    }
    function i(t) {
        return E.arr(t) ? t : (E.str(t) && (t = e(t) || t),
        t instanceof NodeList || t instanceof HTMLCollection ? [].slice.call(t) : [t])
    }
    function o(e, t) {
        return e.some(function(e) {
            return e === t
        })
    }
    function r(e) {
        var t, n = {};
        for (t in e)
            n[t] = e[t];
        return n
    }
    function s(e, t) {
        var n, i = r(e);
        for (n in e)
            i[n] = t.hasOwnProperty(n) ? t[n] : e[n];
        return i
    }
    function a(e, t) {
        var n, i = r(e);
        for (n in t)
            i[n] = E.und(e[n]) ? t[n] : e[n];
        return i
    }
    function l(e) {
        if (e = /([\+\-]?[0-9#\.]+)(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(e))
            return e[2]
    }
    function c(e, t) {
        return E.fnc(e) ? e(t.target, t.id, t.total) : e
    }
    function u(e, t) {
        if (t in e.style)
            return getComputedStyle(e).getPropertyValue(t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()) || "0"
    }
    function d(e, t) {
        return E.dom(e) && o(A, t) ? "transform" : E.dom(e) && (e.getAttribute(t) || E.svg(e) && e[t]) ? "attribute" : E.dom(e) && "transform" !== t && u(e, t) ? "css" : null != e[t] ? "object" : void 0
    }
    function p(e, n) {
        switch (d(e, n)) {
        case "transform":
            return function(e, n) {
                var i = function(e) {
                    return -1 < e.indexOf("translate") || "perspective" === e ? "px" : -1 < e.indexOf("rotate") || -1 < e.indexOf("skew") ? "deg" : void 0
                }(n);
                if (i = -1 < n.indexOf("scale") ? 1 : 0 + i,
                !(e = e.style.transform))
                    return i;
                for (var o = [], r = [], s = [], a = /(\w+)\((.+?)\)/g; o = a.exec(e); )
                    r.push(o[1]),
                    s.push(o[2]);
                return (e = t(s, function(e, t) {
                    return r[t] === n
                })).length ? e[0] : i
            }(e, n);
        case "css":
            return u(e, n);
        case "attribute":
            return e.getAttribute(n)
        }
        return e[n] || 0
    }
    function f(e, t) {
        var n = /^(\*=|\+=|-=)/.exec(e);
        if (!n)
            return e;
        var i = l(e) || 0;
        switch (t = parseFloat(t),
        e = parseFloat(e.replace(n[0], "")),
        n[0][0]) {
        case "+":
            return t + e + i;
        case "-":
            return t - e + i;
        case "*":
            return t * e + i
        }
    }
    function h(e, t) {
        return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2))
    }
    function v(e) {
        e = e.points;
        for (var t, n = 0, i = 0; i < e.numberOfItems; i++) {
            var o = e.getItem(i);
            0 < i && (n += h(t, o)),
            t = o
        }
        return n
    }
    function m(e) {
        if (e.getTotalLength)
            return e.getTotalLength();
        switch (e.tagName.toLowerCase()) {
        case "circle":
            return 2 * Math.PI * e.getAttribute("r");
        case "rect":
            return 2 * e.getAttribute("width") + 2 * e.getAttribute("height");
        case "line":
            return h({
                x: e.getAttribute("x1"),
                y: e.getAttribute("y1")
            }, {
                x: e.getAttribute("x2"),
                y: e.getAttribute("y2")
            });
        case "polyline":
            return v(e);
        case "polygon":
            var t = e.points;
            return v(e) + h(t.getItem(t.numberOfItems - 1), t.getItem(0))
        }
    }
    function g(e, t) {
        function n(n) {
            return n = void 0 === n ? 0 : n,
            e.el.getPointAtLength(1 <= t + n ? t + n : 0)
        }
        var i = n()
          , o = n(-1)
          , r = n(1);
        switch (e.property) {
        case "x":
            return i.x;
        case "y":
            return i.y;
        case "angle":
            return 180 * Math.atan2(r.y - o.y, r.x - o.x) / Math.PI
        }
    }
    function y(e, t) {
        var n, i = /-?\d*\.?\d+/g;
        if (n = E.pth(e) ? e.totalLength : e,
        E.col(n))
            if (E.rgb(n)) {
                var o = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(n);
                n = o ? "rgba(" + o[1] + ",1)" : n
            } else
                n = E.hex(n) ? function(e) {
                    e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(e, t, n, i) {
                        return t + t + n + n + i + i
                    });
                    var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
                    return "rgba(" + (e = parseInt(t[1], 16)) + "," + parseInt(t[2], 16) + "," + (t = parseInt(t[3], 16)) + ",1)"
                }(n) : E.hsl(n) ? function(e) {
                    function t(e, t, n) {
                        return 0 > n && (n += 1),
                        1 < n && --n,
                        n < 1 / 6 ? e + 6 * (t - e) * n : .5 > n ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
                    }
                    var n = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(e);
                    e = parseInt(n[1]) / 360;
                    var i = parseInt(n[2]) / 100
                      , o = parseInt(n[3]) / 100;
                    if (n = n[4] || 1,
                    0 == i)
                        o = i = e = o;
                    else {
                        var r = .5 > o ? o * (1 + i) : o + i - o * i
                          , s = 2 * o - r;
                        o = t(s, r, e + 1 / 3),
                        i = t(s, r, e),
                        e = t(s, r, e - 1 / 3)
                    }
                    return "rgba(" + 255 * o + "," + 255 * i + "," + 255 * e + "," + n + ")"
                }(n) : void 0;
        else
            o = (o = l(n)) ? n.substr(0, n.length - o.length) : n,
            n = t && !/\s/g.test(n) ? o + t : o;
        return {
            original: n += "",
            numbers: n.match(i) ? n.match(i).map(Number) : [0],
            strings: E.str(e) || t ? n.split(i) : []
        }
    }
    function b(e) {
        return t(e = e ? n(E.arr(e) ? e.map(i) : i(e)) : [], function(e, t, n) {
            return n.indexOf(e) === t
        })
    }
    function w(e, t) {
        var n = r(t);
        if (E.arr(e)) {
            var o = e.length;
            2 !== o || E.obj(e[0]) ? E.fnc(t.duration) || (n.duration = t.duration / o) : e = {
                value: e
            }
        }
        return i(e).map(function(e, n) {
            return n = n ? 0 : t.delay,
            e = E.obj(e) && !E.pth(e) ? e : {
                value: e
            },
            E.und(e.delay) && (e.delay = n),
            e
        }).map(function(e) {
            return a(e, n)
        })
    }
    function x(e, t) {
        var n;
        return e.tweens.map(function(i) {
            var o = (i = function(e, t) {
                var n, i = {};
                for (n in e) {
                    var o = c(e[n], t);
                    E.arr(o) && 1 === (o = o.map(function(e) {
                        return c(e, t)
                    })).length && (o = o[0]),
                    i[n] = o
                }
                return i.duration = parseFloat(i.duration),
                i.delay = parseFloat(i.delay),
                i
            }(i, t)).value
              , r = p(t.target, e.name)
              , s = n ? n.to.original : r
              , a = (s = E.arr(o) ? o[0] : s,
            f(E.arr(o) ? o[1] : o, s));
            r = l(a) || l(s) || l(r);
            return i.from = y(s, r),
            i.to = y(a, r),
            i.start = n ? n.end : e.offset,
            i.end = i.start + i.delay + i.duration,
            i.easing = function(e) {
                return E.arr(e) ? P.apply(this, e) : D[e]
            }(i.easing),
            i.elasticity = (1e3 - Math.min(Math.max(i.elasticity, 1), 999)) / 1e3,
            i.isPath = E.pth(o),
            i.isColor = E.col(i.from.original),
            i.isColor && (i.round = 1),
            n = i
        })
    }
    function T(e, t, n, i) {
        var o = "delay" === e;
        return t.length ? (o ? Math.min : Math.max).apply(Math, t.map(function(t) {
            return t[e]
        })) : o ? i.delay : n.offset + i.delay + i.duration
    }
    function k(e) {
        var i, o = s(C, e), r = s(j, e), l = function(e) {
            var t = b(e);
            return t.map(function(e, n) {
                return {
                    target: e,
                    id: n,
                    total: t.length
                }
            })
        }(e.targets), c = [], u = a(o, r);
        for (i in e)
            u.hasOwnProperty(i) || "targets" === i || c.push({
                name: i,
                offset: u.offset,
                tweens: w(e[i], r)
            });
        return e = function(e, i) {
            return t(n(e.map(function(e) {
                return i.map(function(t) {
                    var n = d(e.target, t.name);
                    if (n) {
                        var i = x(t, e);
                        t = {
                            type: n,
                            property: t.name,
                            animatable: e,
                            tweens: i,
                            duration: i[i.length - 1].end,
                            delay: i[0].delay
                        }
                    } else
                        t = void 0;
                    return t
                })
            })), function(e) {
                return !E.und(e)
            })
        }(l, c),
        a(o, {
            children: [],
            animatables: l,
            animations: e,
            duration: T("duration", e, o, r),
            delay: T("delay", e, o, r)
        })
    }
    function S(e) {
        function n() {
            return window.Promise && new Promise(function(e) {
                return p = e
            }
            )
        }
        function i(e) {
            return h.reversed ? h.duration - e : e
        }
        function o(e) {
            for (var n = 0, i = {}, o = h.animations, r = o.length; n < r; ) {
                var s = o[n]
                  , a = s.animatable
                  , l = (c = s.tweens)[f = c.length - 1];
                f && (l = t(c, function(t) {
                    return e < t.end
                })[0] || l);
                for (var c = Math.min(Math.max(e - l.start - l.delay, 0), l.duration) / l.duration, d = isNaN(c) ? 1 : l.easing(c, l.elasticity), p = (c = l.to.strings,
                l.round), f = [], v = void 0, m = (v = l.to.numbers.length,
                0); m < v; m++) {
                    var y = void 0
                      , b = (y = l.to.numbers[m],
                    l.from.numbers[m]);
                    y = l.isPath ? g(l.value, d * y) : b + d * (y - b);
                    p && (l.isColor && 2 < m || (y = Math.round(y * p) / p)),
                    f.push(y)
                }
                if (l = c.length)
                    for (v = c[0],
                    d = 0; d < l; d++)
                        p = c[d + 1],
                        m = f[d],
                        isNaN(m) || (v = p ? v + (m + p) : v + (m + " "));
                else
                    v = f[0];
                O[s.type](a.target, s.property, v, i, a.id),
                s.currentValue = v,
                n++
            }
            if (n = Object.keys(i).length)
                for (o = 0; o < n; o++)
                    $ || ($ = u(document.body, "transform") ? "transform" : "-webkit-transform"),
                    h.animatables[o].target.style[$] = i[o].join(" ");
            h.currentTime = e,
            h.progress = e / h.duration * 100
        }
        function r(e) {
            h[e] && h[e](h)
        }
        function s() {
            h.remaining && !0 !== h.remaining && h.remaining--
        }
        function a(e) {
            var t = h.duration
              , a = h.offset
              , u = a + h.delay
              , v = h.currentTime
              , m = h.reversed
              , g = i(e);
            if (h.children.length) {
                var y = h.children
                  , b = y.length;
                if (g >= h.currentTime)
                    for (var w = 0; w < b; w++)
                        y[w].seek(g);
                else
                    for (; b--; )
                        y[b].seek(g)
            }
            (g >= u || !t) && (h.began || (h.began = !0,
            r("begin")),
            r("run")),
            g > a && g < t ? o(g) : (g <= a && 0 !== v && (o(0),
            m && s()),
            (g >= t && v !== t || !t) && (o(t),
            m || s())),
            r("update"),
            e >= t && (h.remaining ? (c = l,
            "alternate" === h.direction && (h.reversed = !h.reversed)) : (h.pause(),
            h.completed || (h.completed = !0,
            r("complete"),
            "Promise"in window && (p(),
            f = n()))),
            d = 0)
        }
        e = void 0 === e ? {} : e;
        var l, c, d = 0, p = null, f = n(), h = k(e);
        return h.reset = function() {
            var e = h.direction
              , t = h.loop;
            for (h.currentTime = 0,
            h.progress = 0,
            h.paused = !0,
            h.began = !1,
            h.completed = !1,
            h.reversed = "reverse" === e,
            h.remaining = "alternate" === e && 1 === t ? 2 : t,
            o(0),
            e = h.children.length; e--; )
                h.children[e].reset()
        }
        ,
        h.tick = function(e) {
            l = e,
            c || (c = l),
            a((d + l - c) * S.speed)
        }
        ,
        h.seek = function(e) {
            a(i(e))
        }
        ,
        h.pause = function() {
            var e = L.indexOf(h);
            -1 < e && L.splice(e, 1),
            h.paused = !0
        }
        ,
        h.play = function() {
            h.paused && (h.paused = !1,
            c = 0,
            d = i(h.currentTime),
            L.push(h),
            N || H())
        }
        ,
        h.reverse = function() {
            h.reversed = !h.reversed,
            c = 0,
            d = i(h.currentTime)
        }
        ,
        h.restart = function() {
            h.pause(),
            h.reset(),
            h.play()
        }
        ,
        h.finished = f,
        h.reset(),
        h.autoplay && h.play(),
        h
    }
    var $, C = {
        update: void 0,
        begin: void 0,
        run: void 0,
        complete: void 0,
        loop: 1,
        direction: "normal",
        autoplay: !0,
        offset: 0
    }, j = {
        duration: 1e3,
        delay: 0,
        easing: "easeOutElastic",
        elasticity: 500,
        round: 0
    }, A = "translateX translateY translateZ rotate rotateX rotateY rotateZ scale scaleX scaleY scaleZ skewX skewY perspective".split(" "), E = {
        arr: function(e) {
            return Array.isArray(e)
        },
        obj: function(e) {
            return -1 < Object.prototype.toString.call(e).indexOf("Object")
        },
        pth: function(e) {
            return E.obj(e) && e.hasOwnProperty("totalLength")
        },
        svg: function(e) {
            return e instanceof SVGElement
        },
        dom: function(e) {
            return e.nodeType || E.svg(e)
        },
        str: function(e) {
            return "string" == typeof e
        },
        fnc: function(e) {
            return "function" == typeof e
        },
        und: function(e) {
            return void 0 === e
        },
        hex: function(e) {
            return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e)
        },
        rgb: function(e) {
            return /^rgb/.test(e)
        },
        hsl: function(e) {
            return /^hsl/.test(e)
        },
        col: function(e) {
            return E.hex(e) || E.rgb(e) || E.hsl(e)
        }
    }, P = function() {
        function e(e, t, n) {
            return (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e
        }
        return function(t, n, i, o) {
            if (0 <= t && 1 >= t && 0 <= i && 1 >= i) {
                var r = new Float32Array(11);
                if (t !== n || i !== o)
                    for (var s = 0; 11 > s; ++s)
                        r[s] = e(.1 * s, t, i);
                return function(s) {
                    if (t === n && i === o)
                        return s;
                    if (0 === s)
                        return 0;
                    if (1 === s)
                        return 1;
                    for (var a = 0, l = 1; 10 !== l && r[l] <= s; ++l)
                        a += .1;
                    l = a + (s - r[--l]) / (r[l + 1] - r[l]) * .1;
                    var c = 3 * (1 - 3 * i + 3 * t) * l * l + 2 * (3 * i - 6 * t) * l + 3 * t;
                    if (.001 <= c) {
                        for (a = 0; 4 > a && 0 !== (c = 3 * (1 - 3 * i + 3 * t) * l * l + 2 * (3 * i - 6 * t) * l + 3 * t); ++a) {
                            var u = e(l, t, i) - s;
                            l = l - u / c
                        }
                        s = l
                    } else if (0 === c)
                        s = l;
                    else {
                        l = a,
                        a = a + .1;
                        var d = 0;
                        do {
                            0 < (c = e(u = l + (a - l) / 2, t, i) - s) ? a = u : l = u
                        } while (1e-7 < Math.abs(c) && 10 > ++d);
                        s = u
                    }
                    return e(s, n, o)
                }
            }
        }
    }(), D = function() {
        function e(e, t) {
            return 0 === e || 1 === e ? e : -Math.pow(2, 10 * (e - 1)) * Math.sin(2 * (e - 1 - t / (2 * Math.PI) * Math.asin(1)) * Math.PI / t)
        }
        var t, n = "Quad Cubic Quart Quint Sine Expo Circ Back Elastic".split(" "), i = {
            In: [[.55, .085, .68, .53], [.55, .055, .675, .19], [.895, .03, .685, .22], [.755, .05, .855, .06], [.47, 0, .745, .715], [.95, .05, .795, .035], [.6, .04, .98, .335], [.6, -.28, .735, .045], e],
            Out: [[.25, .46, .45, .94], [.215, .61, .355, 1], [.165, .84, .44, 1], [.23, 1, .32, 1], [.39, .575, .565, 1], [.19, 1, .22, 1], [.075, .82, .165, 1], [.175, .885, .32, 1.275], function(t, n) {
                return 1 - e(1 - t, n)
            }
            ],
            InOut: [[.455, .03, .515, .955], [.645, .045, .355, 1], [.77, 0, .175, 1], [.86, 0, .07, 1], [.445, .05, .55, .95], [1, 0, 0, 1], [.785, .135, .15, .86], [.68, -.55, .265, 1.55], function(t, n) {
                return .5 > t ? e(2 * t, n) / 2 : 1 - e(-2 * t + 2, n) / 2
            }
            ]
        }, o = {
            linear: P(.25, .25, .75, .75)
        }, r = {};
        for (t in i)
            r.type = t,
            i[r.type].forEach(function(e) {
                return function(t, i) {
                    o["ease" + e.type + n[i]] = E.fnc(t) ? t : P.apply($jscomp$this, t)
                }
            }(r)),
            r = {
                type: r.type
            };
        return o
    }(), O = {
        css: function(e, t, n) {
            return e.style[t] = n
        },
        attribute: function(e, t, n) {
            return e.setAttribute(t, n)
        },
        object: function(e, t, n) {
            return e[t] = n
        },
        transform: function(e, t, n, i, o) {
            i[o] || (i[o] = []),
            i[o].push(t + "(" + n + ")")
        }
    }, L = [], N = 0, H = function() {
        function e() {
            N = requestAnimationFrame(t)
        }
        function t(t) {
            var n = L.length;
            if (n) {
                for (var i = 0; i < n; )
                    L[i] && L[i].tick(t),
                    i++;
                e()
            } else
                cancelAnimationFrame(N),
                N = 0
        }
        return e
    }();
    return S.version = "2.2.0",
    S.speed = 1,
    S.running = L,
    S.remove = function(e) {
        e = b(e);
        for (var t = L.length; t--; )
            for (var n = L[t], i = n.animations, r = i.length; r--; )
                o(e, i[r].animatable.target) && (i.splice(r, 1),
                i.length || n.pause())
    }
    ,
    S.getValue = p,
    S.path = function(t, n) {
        var i = E.str(t) ? e(t)[0] : t
          , o = n || 100;
        return function(e) {
            return {
                el: i,
                property: e,
                totalLength: m(i) * (o / 100)
            }
        }
    }
    ,
    S.setDashoffset = function(e) {
        var t = m(e);
        return e.setAttribute("stroke-dasharray", t),
        t
    }
    ,
    S.bezier = P,
    S.easings = D,
    S.timeline = function(e) {
        var t = S(e);
        return t.pause(),
        t.duration = 0,
        t.add = function(n) {
            return t.children.forEach(function(e) {
                e.began = !0,
                e.completed = !0
            }),
            i(n).forEach(function(n) {
                var i = a(n, s(j, e || {}));
                i.targets = i.targets || e.targets,
                n = t.duration;
                var o = i.offset;
                i.autoplay = !1,
                i.direction = t.direction,
                i.offset = E.und(o) ? n : f(o, n),
                t.began = !0,
                t.completed = !0,
                t.seek(i.offset),
                (i = S(i)).began = !0,
                i.completed = !0,
                i.duration > n && (t.duration = i.duration),
                t.children.push(i)
            }),
            t.seek(0),
            t.reset(),
            t.autoplay && t.restart(),
            t
        }
        ,
        t
    }
    ,
    S.random = function(e, t) {
        return Math.floor(Math.random() * (t - e + 1)) + e
    }
    ,
    S
}),
$(window).on("beforeunload", function() {
    $(window).scrollTop(0)
}),
window.onload = function(e) {
    $body = $("body"),
    $bodyElement = $body[0],
    $cursor = $(".cursor"),
    $menuHi = $(".menu-hi"),
    $menuWork = $(".menu-work"),
    $menuProfile = $(".menu-profile"),
    $menuContact = $(".menu-contact"),
    $backTop = $("#back-top"),
    $slider = $("#slider"),
    $menuOpen = $(".menu-open"),
    $menuFull = $(".menu-full"),
    $backgroundTransition = $(".background-transition"),
    scroll = 0,
    isAnimating = !1,
    isOpening = !1,
    step = 0,
    project = 0,
    profile = 0,
    stepTotal = 3,
    projectTotal = 4,
    profileTotal = 4,
    isProject = !1,
    projectTable = ["jollylevelup", "arcanegears", "ai", "dev", "tender"],
    $("body").removeClass("preload"),
    location.hash && (currentPage = location.hash.substring(1));
    let t = .01 * window.innerHeight;
    function n(e=1100) {
        isAnimating = !0,
        setTimeout(function() {
            isAnimating = !1
        }, e)
    }
    function i() {
        0 == isAnimating && (1 == step && project < projectTotal ? project++ : 2 == step && profile < 4 ? profile++ : (0 == step || project == projectTotal && step < 3 || 4 == profile && step < 3) && (step < 3 && step++,
        s()),
        r(step, project, profile))
    }
    function o() {
        0 == isAnimating && (1 == step && project > 0 ? project-- : 2 == step && profile > 0 ? profile-- : step > 0 && (step--,
        s()),
        r(step, project, profile))
    }
    function r(e=number, t=number, i=number) {
        console.log(t),
        n(),
        0 == isProject ? $bodyElement.className = "step-" + e + " project-" + t + " profile-" + i : $bodyElement.className = "step-" + e + " project-" + t + " profile-" + i + " is-project ov-visible",
        console.log(t)
    }
    function s() {
        0 == step && $menuHi.addClass("active").siblings().removeClass("active"),
        1 == step && $menuWork.addClass("active").siblings().removeClass("active"),
        2 == step && $menuProfile.addClass("active").siblings().removeClass("active"),
        3 == step && $menuContact.addClass("active").siblings().removeClass("active")
    }
    function a(e, t=!0) {
        window.location.href = "#" + projectTable[project],
        $cursor.removeClass("active"),
        $(".project-details-content").removeClass("is-loaded"),
        $(".project-description").load("project_" + projectTable[project] + ".html?fepe .project-description", function() {
            setTimeout(function() {
                $(".project-details-content").addClass("is-loaded")
            }, e)
        }),
        $(".project-casestudy").load("project_" + projectTable[project] + ".html?fepe .casestudy-content"),
        $bodyElement.className = "step-" + step + " project-" + project + " profile-" + profile + " is-project",
        setTimeout(function() {
            $bodyElement.className = "step-" + step + " project-" + project + " profile-" + profile + " is-project ov-visible",
            skrollr.get() && h.refresh(),
            $(".casestudy-nav[data-project=" + project + "]").addClass("active").siblings().removeClass("active")
        }, 2e3),
        isProject = !0,
        $slider.slick("slickGoTo", project, t)
    }
    function l() {
        isProject = !1,
        n(2100),
        $(".project-details-content").removeClass("is-loaded"),
        $bodyElement.className = "step-" + step + " project-" + project + " profile-" + profile + " ov-visible",
        $("html, body").animate({
            scrollTop: 0
        }, 500),
        $(".project-details-content").addClass("exit-anim"),
        setTimeout(function() {
            $bodyElement.className = "step-" + step + " project-" + project + " profile-" + profile,
            $(".project-details-content").removeClass("exit-anim")
        }, 1e3),
        s()
    }
    function c() {
        0 == project ? project = projectTotal : project--,
        $slider.slick("slickPrev")
    }
    function u() {
        project < projectTotal ? project++ : project = 0,
        $slider.slick("slickNext")
    }
    function d() {
        r(step, project, profile),
        s(),
        a(10, !1),
        setTimeout(function() {
            $(".project-details-content").removeClass("exit-anim")
        }, 1e3)
    }
    document.documentElement.style.setProperty("--vh", `${t}px`),
    window.addEventListener("resize", () => {
        let e = .01 * window.innerHeight;
        document.documentElement.style.setProperty("--vh", `${e}px`)
    }
    ),
    $(document).mousemove(function(e) {
        $cursor.eq(0).css({
            left: e.pageX,
            top: e.pageY
        })
    }),
    $(document).on("mousemove", function(e) {
        mouseX = e.pageX,
        mouseY = e.pageY
    }),
    document.addEventListener("swiped-up", function(e) {
        0 == isProject && i()
    }),
    document.addEventListener("swiped-down", function(e) {
        0 == isProject && o()
    }),
    window.addEventListener("wheel", e => {
        var t = e.deltaY;
        return 0 == $body.hasClass("is-project") && 0 == $menuFull.hasClass("visible") ? (t > 0 ? i() : o(),
        !1) : 1 == $body.hasClass("is-project") && 0 == $menuFull.hasClass("visible")
    }
    ),
    $(".interaction").on("mouseenter", function() {
        $cursor.addClass("active")
    }),
    $(".interaction").on("mouseleave", function() {
        $cursor.removeClass("active")
    }),
    $(".interaction").on("click", function() {
        $cursor.removeClass("active")
    }),
    $backTop.click(function() {
        step = 0,
        project = 0,
        profile = 0,
        r(step, project, profile),
        s()
    }),
    $("header .menu-work").click(function() {
        step = 1,
        project = 0,
        profile = 0,
        r(step, project, profile),
        s()
    }),
    $("header .menu-profile").click(function() {
        step = 2,
        project = projectTotal,
        profile = 0,
        r(step, project, profile),
        s()
    }),
    $("header .menu-contact").click(function() {
        step = 3,
        project = projectTotal,
        profile = profileTotal,
        r(step, project, profile),
        s()
    }),
    $(".client-list .interaction").click(function() {
        step = 1,
        project = $(this).data("project"),
        profile = 0,
        r(step, project, profile),
        s()
    }),
    $menuOpen.click(function() {
        $menuFull.toggleClass("visible"),
        $(this).toggleClass("open")
    }),
    $(".menu-full .interaction").hover(function() {
        $(".menu-full .interaction").removeClass("active"),
        $(this).addClass("active")
    }),
    $(".menu-full .interaction").click(function() {
        $this = $(this),
        $this.hasClass("menu-work") ? window.matchMedia("(max-width: 979px)").matches ? (step = 1,
        project = 0,
        profile = 0,
        r(step, project, profile),
        s(),
        n(),
        setTimeout(function() {
            $menuFull.removeClass("visible"),
            $menuOpen.removeClass("open")
        }, 300)) : $this.hasClass("menu-work") && (step = 1,
        profile = 0) : (1 == isProject && l(),
        $this.hasClass("menu-hi") && (step = 0,
        project = 0,
        profile = 0),
        $this.hasClass("menu-profile") && (step = 2,
        project = projectTotal,
        profile = 0),
        $this.hasClass("menu-contact") && (step = 3,
        project = projectTotal,
        profile = 0),
        r(step, project, profile),
        s(),
        n(),
        setTimeout(function() {
            $menuFull.removeClass("visible"),
            $menuOpen.removeClass("open")
        }, 300))
    }),
    $(".menu-preview-project").click(function() {
        n(2500),
        $(window).scrollTop(0),
        $backgroundTransition.addClass("visible"),
        $backgroundTransition.css("left", $(this).offset().left),
        project = $(this).data("project"),
        step = 1,
        profile = 0,
        console.log(project),
        s(),
        a(0),
        $menuOpen.addClass("hidden"),
        setTimeout(function() {
            $menuFull.removeClass("visible")
        }, 600),
        setTimeout(function() {
            $menuOpen.removeClass("hidden open")
        }, 1500),
        setTimeout(function() {
            $backgroundTransition.removeClass("visible")
        }, 1600)
    }),
    $(".casestudy-nav").click(function() {
        $this = $(this),
        n(3500),
        $("html, body").animate({
            scrollTop: 0
        }, 500),
        project = $this.data("project"),
        $bodyElement.classList.remove("ov-visible"),
        setTimeout(function() {
            $(".project-details-content").addClass("exit-anim"),
            r(step, project, profile),
            a(0, !1),
            $this.siblings().removeClass("active"),
            $this.addClass("active")
        }, 800),
        setTimeout(function() {
            $(".project-details-content").removeClass("exit-anim")
        }, 2e3)
    }),
    $(".menu-preview-home").click(function() {
        n(),
        step = $(this).data("step"),
        0 == step && (project = 0),
        step > 1 && (project = projectTotal),
        1 == isProject && l(),
        $(this).data("slide") && (profile = $(this).data("slide") - 1),
        r(step, project, profile),
        s(),
        setTimeout(function() {
            $menuFull.removeClass("visible"),
            $menuOpen.removeClass("open")
        }, 300)
    }),
    $(".open-project").click(function() {
        n(2500),
        $(window).scrollTop(0),
        a(10)
    }),
    $(".logo").click(function() {
        1 == isProject ? (n(3200),
        $("html, body").animate({
            scrollTop: 0
        }, 500),
        setTimeout(function() {
            step = 0,
            profile = 0,
            isProject = !1,
            r(step, project, profile),
            $(".project-details-content").addClass("exit-anim"),
            s()
        }, 500),
        setTimeout(function() {
            $(".project-details-content").removeClass("exit-anim"),
            project = 0,
            $bodyElement.className = "step-" + step + " project-" + project + " profile-" + profile,
            window.location.href = "#"
        }, 2e3)) : (step = 0,
        project = 0,
        profile = 0,
        r(step, project, profile),
        s())
    }),
    $slider.on("swipe", function(e, t, n) {
        $(".project-details-content").addClass("exit-anim"),
        "left" == n && u(),
        "right" == n && c(),
        d()
    }),
    $(".slide-arrow").click(function() {
        $(".project-details-content").addClass("exit-anim"),
        $(this).hasClass("slide-next") && u(),
        $(this).hasClass("slide-previous") && c(),
        d()
    }),
    $slider.slick({
        centerMode: !0,
        centerPadding: "0",
        infinite: !0,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: !1,
        dots: !1,
        speed: 2e3,
        cssEase: "cubic-bezier(0.770, 0.000, 0.175, 1.000)"
    }),
    location.hash && ("jollylevelup" == currentPage && (project = 0),
    "cic" == currentPage && (project = 1),
    "cgi" == currentPage && (project = 2),
    "artspire" == currentPage && (project = 3),
    "tokkun" == currentPage && (project = 4),
    step = 1,
    n(2500),
    a(0)),
    $(".button").each(function() {
        $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"))
    }),
    $(".project-name span").each(function() {
        $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"))
    });
    var p = navigator.userAgent.toLowerCase();
    const f = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(p);
    if (window.matchMedia("(min-width: 1100px)").matches && 0 == f)
        var h = skrollr.init({
            forceHeight: !1,
            edgeStrategy: "set",
            easing: {
                WTF: Math.random,
                inverted: e => 1 - e
            }
        })
}
;
