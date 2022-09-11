(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [56865], {
        48042: function(e, t, n) {
            var i = n(27061),
                o = n(30816).Buffer;
            e.exports = function() {
                "use strict";

                function e(t) {
                    return e = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    }, e(t)
                }

                function t(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }

                function r(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }

                function s(e, t, n) {
                    return t && r(e.prototype, t), n && r(e, n), e
                }

                function a(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }

                function u(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            i = Object.keys(n);
                        "function" === typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        })))), i.forEach((function(t) {
                            a(e, t, n[t])
                        }))
                    }
                    return e
                }

                function c(e) {
                    return p(e) || l(e) || d()
                }

                function p(e) {
                    if (Array.isArray(e)) {
                        for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                        return n
                    }
                }

                function l(e) {
                    if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
                }

                function d() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance")
                }
                var h, f, v, g;

                function y() {
                    var e;
                    return "object" === typeof i && void 0 !== (null === (e = null === i || void 0 === i ? void 0 : i.versions) || void 0 === e ? void 0 : e.node)
                }

                function _() {
                    return "object" === typeof window && void 0 !== (null === window || void 0 === window ? void 0 : window.document)
                }(function(e) {
                    e.IDENTIFY = "$identify"
                })(h || (h = {})),
                function(e) {
                    e.SET = "$set", e.SET_ONCE = "$setOnce", e.ADD = "$add", e.APPEND = "$append", e.PREPEND = "$prepend", e.REMOVE = "$remove", e.PREINSERT = "$preinsert", e.POSTINSERT = "$postinsert", e.UNSET = "$unset", e.CLEAR_ALL = "$clearAll"
                }(f || (f = {})),
                function(e) {
                    e[e.None = 0] = "None", e[e.Error = 1] = "Error", e[e.Warn = 2] = "Warn", e[e.Verbose = 3] = "Verbose"
                }(v || (v = {})),
                function(e) {
                    e.Unknown = "unknown", e.Skipped = "skipped", e.Success = "success", e.RateLimit = "rate_limit", e.PayloadTooLarge = "payload_too_large", e.Invalid = "invalid", e.Failed = "failed"
                }(g || (g = {})),
                function(e) {
                    function t(t) {
                        return t >= 200 && t < 300 ? e.Success : 429 === t ? e.RateLimit : 413 === t ? e.PayloadTooLarge : t >= 400 && t < 500 ? e.Invalid : t >= 500 ? e.Failed : e.Unknown
                    }
                    e.fromHttpCode = t
                }(g || (g = {})), g.Skipped;
                var m = {},
                    b = function() {
                        return y() ? n.g : "undefined" !== typeof window ? window : "undefined" !== typeof self ? self : m
                    },
                    E = function() {
                        var e = b();
                        return e.__AMPLITUDE__ = e.__AMPLITUDE__ || {}, e.__AMPLITUDE__
                    },
                    w = function() {
                        var e;
                        if (_()) {
                            var t = window,
                                n = Array;
                            if (void 0 !== t.Prototype && void 0 !== (null === (e = n.prototype) || void 0 === e ? void 0 : e.toJSON)) return delete n.prototype.toJSON, !0
                        }
                        return !1
                    },
                    I = E(),
                    S = "Amplitude Logger ",
                    N = function() {
                        function e() {
                            this._logLevel = 0
                        }
                        return e.prototype.disable = function() {
                            this._logLevel = 0
                        }, e.prototype.enable = function(e) {
                            void 0 === e && (e = v.Warn), this._logLevel = e
                        }, e.prototype.log = function() {
                            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                            this._logLevel < v.Verbose || n.g.console.log(S + "[Log]: " + e.join(" "))
                        }, e.prototype.warn = function() {
                            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                            this._logLevel < v.Warn || n.g.console.warn(S + "[Warn]: " + e.join(" "))
                        }, e.prototype.error = function() {
                            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                            this._logLevel < v.Error || n.g.console.error(S + "[Error]: " + e.join(" "))
                        }, e
                    }(),
                    O = (I.logger || (I.logger = new N), {
                        DEFAULT_INSTANCE: "$default_instance",
                        API_VERSION: 2,
                        MAX_STRING_LENGTH: 4096,
                        MAX_PROPERTY_KEYS: 1e3,
                        IDENTIFY_EVENT: "$identify",
                        GROUP_IDENTIFY_EVENT: "$groupidentify",
                        EVENT_LOG_URL: "api.amplitude.com",
                        EVENT_LOG_EU_URL: "api.eu.amplitude.com",
                        DYNAMIC_CONFIG_URL: "regionconfig.amplitude.com",
                        DYNAMIC_CONFIG_EU_URL: "regionconfig.eu.amplitude.com",
                        LAST_EVENT_ID: "amplitude_lastEventId",
                        LAST_EVENT_TIME: "amplitude_lastEventTime",
                        LAST_IDENTIFY_ID: "amplitude_lastIdentifyId",
                        LAST_SEQUENCE_NUMBER: "amplitude_lastSequenceNumber",
                        SESSION_ID: "amplitude_sessionId",
                        DEVICE_ID: "amplitude_deviceId",
                        OPT_OUT: "amplitude_optOut",
                        USER_ID: "amplitude_userId",
                        DEVICE_ID_INDEX: 0,
                        USER_ID_INDEX: 1,
                        OPT_OUT_INDEX: 2,
                        SESSION_ID_INDEX: 3,
                        LAST_EVENT_TIME_INDEX: 4,
                        EVENT_ID_INDEX: 5,
                        IDENTIFY_ID_INDEX: 6,
                        SEQUENCE_NUMBER_INDEX: 7,
                        COOKIE_TEST_PREFIX: "amp_cookie_test",
                        COOKIE_PREFIX: "amp",
                        STORAGE_DEFAULT: "",
                        STORAGE_COOKIES: "cookies",
                        STORAGE_NONE: "none",
                        STORAGE_LOCAL: "localStorage",
                        STORAGE_SESSION: "sessionStorage",
                        REVENUE_EVENT: "revenue_amount",
                        REVENUE_PRODUCT_ID: "$productId",
                        REVENUE_QUANTITY: "$quantity",
                        REVENUE_PRICE: "$price",
                        REVENUE_REVENUE_TYPE: "$revenueType",
                        AMP_DEVICE_ID_PARAM: "amp_device_id",
                        REFERRER: "referrer",
                        UTM_SOURCE: "utm_source",
                        UTM_MEDIUM: "utm_medium",
                        UTM_CAMPAIGN: "utm_campaign",
                        UTM_TERM: "utm_term",
                        UTM_CONTENT: "utm_content",
                        ATTRIBUTION_EVENT: "[Amplitude] Attribution Captured",
                        TRANSPORT_HTTP: "http",
                        TRANSPORT_BEACON: "beacon"
                    }),
                    T = {
                        encode: function(e) {
                            for (var t = "", n = 0; n < e.length; n++) {
                                var i = e.charCodeAt(n);
                                i < 128 ? t += String.fromCharCode(i) : i > 127 && i < 2048 ? (t += String.fromCharCode(i >> 6 | 192), t += String.fromCharCode(63 & i | 128)) : (t += String.fromCharCode(i >> 12 | 224), t += String.fromCharCode(i >> 6 & 63 | 128), t += String.fromCharCode(63 & i | 128))
                            }
                            return t
                        },
                        decode: function(e) {
                            for (var t = "", n = 0, i = 0, o = 0, r = 0; n < e.length;)(i = e.charCodeAt(n)) < 128 ? (t += String.fromCharCode(i), n++) : i > 191 && i < 224 ? (o = e.charCodeAt(n + 1), t += String.fromCharCode((31 & i) << 6 | 63 & o), n += 2) : (o = e.charCodeAt(n + 1), r = e.charCodeAt(n + 2), t += String.fromCharCode((15 & i) << 12 | (63 & o) << 6 | 63 & r), n += 3);
                            return t
                        }
                    },
                    k = {
                        _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                        encode: function(e) {
                            try {
                                if (window.btoa && window.atob) return window.btoa(unescape(encodeURIComponent(e)))
                            } catch (t) {}
                            return k._encode(e)
                        },
                        _encode: function(e) {
                            var t, n, i, o, r, s, a, u = "",
                                c = 0;
                            for (e = T.encode(e); c < e.length;) o = (t = e.charCodeAt(c++)) >> 2, r = (3 & t) << 4 | (n = e.charCodeAt(c++)) >> 4, s = (15 & n) << 2 | (i = e.charCodeAt(c++)) >> 6, a = 63 & i, isNaN(n) ? s = a = 64 : isNaN(i) && (a = 64), u = u + k._keyStr.charAt(o) + k._keyStr.charAt(r) + k._keyStr.charAt(s) + k._keyStr.charAt(a);
                            return u
                        },
                        decode: function(e) {
                            try {
                                if (window.btoa && window.atob) return decodeURIComponent(escape(window.atob(e)))
                            } catch (t) {}
                            return k._decode(e)
                        },
                        _decode: function(e) {
                            var t, n, i, o, r, s, a = "",
                                u = 0;
                            for (e = e.replace(/[^A-Za-z0-9+/=]/g, ""); u < e.length;) t = k._keyStr.indexOf(e.charAt(u++)) << 2 | (o = k._keyStr.indexOf(e.charAt(u++))) >> 4, n = (15 & o) << 4 | (r = k._keyStr.indexOf(e.charAt(u++))) >> 2, i = (3 & r) << 6 | (s = k._keyStr.indexOf(e.charAt(u++))), a += String.fromCharCode(t), 64 !== r && (a += String.fromCharCode(n)), 64 !== s && (a += String.fromCharCode(i));
                            return a = T.decode(a)
                        }
                    },
                    A = Object.prototype.toString;

                function R(t) {
                    switch (A.call(t)) {
                        case "[object Date]":
                            return "date";
                        case "[object RegExp]":
                            return "regexp";
                        case "[object Arguments]":
                            return "arguments";
                        case "[object Array]":
                            return "array";
                        case "[object Error]":
                            return "error"
                    }
                    return null === t ? "null" : void 0 === t ? "undefined" : t !== t ? "nan" : t && 1 === t.nodeType ? "element" : "undefined" !== typeof o && "function" === typeof o.isBuffer && o.isBuffer(t) ? "buffer" : e(t = t.valueOf ? t.valueOf() : Object.prototype.valueOf.apply(t))
                }
                var C, x = {
                        DISABLE: 0,
                        ERROR: 1,
                        WARN: 2,
                        INFO: 3
                    },
                    U = x.WARN,
                    P = {
                        error: function(e) {
                            U >= x.ERROR && D(e)
                        },
                        warn: function(e) {
                            U >= x.WARN && D(e)
                        },
                        info: function(e) {
                            U >= x.INFO && D(e)
                        }
                    },
                    D = function(e) {
                        try {
                            console.log("[Amplitude] " + e)
                        } catch (t) {}
                    },
                    j = function e(t) {
                        if ("array" === R(t))
                            for (var n = 0; n < t.length; n++) t[n] = e(t[n]);
                        else if ("object" === R(t))
                            for (var i in t) i in t && (t[i] = e(t[i]));
                        else t = q(t);
                        return t
                    },
                    q = function(e) {
                        return "string" === R(e) && e.length > O.MAX_STRING_LENGTH ? e.substring(0, O.MAX_STRING_LENGTH) : e
                    },
                    L = function(e, t, n) {
                        return R(e) === n || (P.error("Invalid " + t + " input type. Expected " + n + " but received " + R(e)), !1)
                    },
                    M = function(e) {
                        return !!L(e, "deviceId", "string") && (!e.includes(".") || (P.error("Device IDs may not contain '.' characters. Value will be ignored: \"".concat(e, '"')), !1))
                    },
                    G = function(e) {
                        return !!L(e, "transport", "string") && (e !== O.TRANSPORT_HTTP && e !== O.TRANSPORT_BEACON ? (P.error("transport value must be one of '".concat(O.TRANSPORT_BEACON, "' or '").concat(O.TRANSPORT_HTTP, "'")), !1) : !(e !== O.TRANSPORT_HTTP && !navigator.sendBeacon) || (P.error("browser does not support sendBeacon, so transport must be HTTP"), !1))
                    },
                    V = function(e) {
                        var t = R(e);
                        if ("object" !== t) return P.error("Error: invalid properties format. Expecting Javascript object, received " + t + ", ignoring"), {};
                        if (Object.keys(e).length > O.MAX_PROPERTY_KEYS) return P.error("Error: too many properties (more than 1000), ignoring"), {};
                        var n = {};
                        for (var i in e)
                            if (Object.prototype.hasOwnProperty.call(e, i)) {
                                var o = i,
                                    r = R(o);
                                "string" !== r && (o = String(o), P.warn("WARNING: Non-string property key, received type " + r + ', coercing to string "' + o + '"'));
                                var s = K(o, e[i]);
                                null !== s && (n[o] = s)
                            }
                        return n
                    },
                    F = ["nan", "function", "arguments", "regexp", "element"],
                    K = function e(t, n) {
                        var i = R(n);
                        if (-1 !== F.indexOf(i)) P.warn('WARNING: Property key "' + t + '" with invalid value type ' + i + ", ignoring"), n = null;
                        else if ("undefined" === i) n = null;
                        else if ("error" === i) n = String(n), P.warn('WARNING: Property key "' + t + '" with value type error, coercing to ' + n);
                        else if ("array" === i) {
                            for (var o = [], r = 0; r < n.length; r++) {
                                var s = n[r],
                                    a = R(s);
                                "array" !== a ? "object" === a ? o.push(V(s)) : o.push(e(t, s)) : P.warn("WARNING: Cannot have " + a + " nested in an array property value, skipping")
                            }
                            n = o
                        } else "object" === i && (n = V(n));
                        return n
                    },
                    z = function(e) {
                        var t = R(e);
                        if ("object" !== t) return P.error("Error: invalid groups format. Expecting Javascript object, received " + t + ", ignoring"), {};
                        var n = {};
                        for (var i in e)
                            if (Object.prototype.hasOwnProperty.call(e, i)) {
                                var o = i,
                                    r = R(o);
                                "string" !== r && (o = String(o), P.warn("WARNING: Non-string groupType, received type " + r + ', coercing to string "' + o + '"'));
                                var s = B(o, e[i]);
                                null !== s && (n[o] = s)
                            }
                        return n
                    },
                    B = function(e, t) {
                        var n = R(t);
                        if ("string" === n) return t;
                        if ("date" === n || "number" === n || "boolean" === n) return t = String(t), P.warn("WARNING: Non-string groupName, received type " + n + ', coercing to string "' + t + '"'), t;
                        if ("array" === n) {
                            for (var i = [], o = 0; o < t.length; o++) {
                                var r = t[o],
                                    s = R(r);
                                "array" !== s && "object" !== s ? "string" === s ? i.push(r) : "date" !== s && "number" !== s && "boolean" !== s || (r = String(r), P.warn("WARNING: Non-string groupName, received type " + s + ', coercing to string "' + r + '"'), i.push(r)) : P.warn("WARNING: Skipping nested " + s + " in array groupName")
                            }
                            return i
                        }
                        P.warn("WARNING: Non-string groupName, received type " + n + ". Please use strings or array of strings for groupName")
                    },
                    X = {
                        setLogLevel: function(e) {
                            Object.prototype.hasOwnProperty.call(x, e) && (U = x[e])
                        },
                        getLogLevel: function() {
                            return U
                        },
                        logLevels: x,
                        log: P,
                        isEmptyString: function(e) {
                            return !e || 0 === e.length
                        },
                        getQueryParam: function(e, t) {
                            e = e.replace(/[[]/, "\\[").replace(/[\]]/, "\\]");
                            var n = new RegExp("[\\?&]" + e + "=([^&#]*)").exec(t);
                            return null === n ? void 0 : decodeURIComponent(n[1].replace(/\+/g, " "))
                        },
                        sessionStorageEnabled: function() {
                            try {
                                if (window.sessionStorage) return !0
                            } catch (e) {}
                            return !1
                        },
                        truncate: j,
                        validateGroups: z,
                        validateInput: L,
                        validateProperties: V,
                        validateDeviceId: M,
                        validateTransport: G
                    },
                    $ = function() {
                        return window.location
                    },
                    W = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
                    Y = function() {
                        for (var e = "", t = 0; t < 22; ++t) e += W.charAt(Math.floor(64 * Math.random()));
                        return e
                    },
                    H = function(e) {
                        try {
                            for (var t = document.cookie.split(";"), n = null, i = 0; i < t.length; i++) {
                                for (var o = t[i];
                                    " " === o.charAt(0);) o = o.substring(1, o.length);
                                if (0 === o.indexOf(e)) {
                                    n = o.substring(e.length, o.length);
                                    break
                                }
                            }
                            return n
                        } catch (r) {
                            return null
                        }
                    },
                    Q = function(e, t, n) {
                        var i = null !== t ? n.expirationDays : -1;
                        if (i) {
                            var o = new Date;
                            o.setTime(o.getTime() + 24 * i * 60 * 60 * 1e3), i = o
                        }
                        var r = e + "=" + t;
                        i && (r += "; expires=" + i.toUTCString()), r += "; path=/", n.domain && (r += "; domain=" + n.domain), n.secure && (r += "; Secure"), n.sameSite && (r += "; SameSite=" + n.sameSite), document.cookie = r
                    },
                    J = function() {
                        var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                            n = t.split(".")[O.LAST_EVENT_TIME_INDEX];
                        return n && (e = parseInt(n, 32)), e || (X.log.warn("unable to parse malformed cookie: ".concat(t)), 0)
                    },
                    Z = function(e) {
                        return c(e).sort((function(e, t) {
                            var n = J(e);
                            return J(t) - n
                        }))
                    },
                    ee = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = O.COOKIE_TEST_PREFIX + Y(),
                            n = !1;
                        try {
                            var i = String(new Date);
                            Q(t, i, e), X.log.info("Testing if cookies available"), n = H(t + "=") === i
                        } catch (o) {
                            X.log.warn('Error thrown when checking for cookies. Reason: "'.concat(o, '"'))
                        } finally {
                            X.log.info("Cleaning up cookies availability test"), Q(t, null, e)
                        }
                        return n
                    },
                    te = {
                        set: Q,
                        get: H,
                        getAll: function(e) {
                            try {
                                var t = document.cookie.split(";").map((function(e) {
                                        return e.trimStart()
                                    })),
                                    n = [],
                                    i = !0,
                                    o = !1,
                                    r = void 0;
                                try {
                                    for (var s, a = t[Symbol.iterator](); !(i = (s = a.next()).done); i = !0) {
                                        for (var u = s.value;
                                            " " === u.charAt(0);) u = u.substring(1);
                                        0 === u.indexOf(e) && n.push(u.substring(e.length))
                                    }
                                } catch (c) {
                                    o = !0, r = c
                                } finally {
                                    try {
                                        i || null == a.return || a.return()
                                    } finally {
                                        if (o) throw r
                                    }
                                }
                                return n
                            } catch (p) {
                                return []
                            }
                        },
                        getLastEventTime: J,
                        sortByEventTime: Z,
                        areCookiesEnabled: ee
                    },
                    ne = function(e) {
                        var t = document.createElement("a");
                        return t.href = e, t.hostname || location.hostname
                    },
                    ie = function(e) {
                        for (var t = ne(e).split("."), n = [], i = "_tldtest_" + Y(), o = t.length - 2; o >= 0; --o) n.push(t.slice(o).join("."));
                        for (var r = 0; r < n.length; ++r) {
                            var s = n[r],
                                a = {
                                    domain: "." + s
                                };
                            if (te.set(i, 1, a), te.get(i)) return te.set(i, null, a), s
                        }
                        return ""
                    },
                    oe = {
                        expirationDays: void 0,
                        domain: void 0
                    },
                    re = function(e) {
                        if (0 === arguments.length) return oe;
                        e = e || {}, oe.expirationDays = e.expirationDays, oe.secure = e.secure, oe.sameSite = e.sameSite;
                        var t = X.isEmptyString(e.domain) ? "." + ie($().href) : e.domain,
                            n = Math.random();
                        oe.domain = t, ue("amplitude_test", n);
                        var i = ae("amplitude_test");
                        return i && i === n || (t = null), ce("amplitude_test"), oe.domain = t, oe
                    },
                    se = function(e) {
                        var t = "";
                        return oe.domain && (t = "." === oe.domain.charAt(0) ? oe.domain.substring(1) : oe.domain), e + t
                    },
                    ae = function(e) {
                        var t = se(e) + "=",
                            n = te.get(t);
                        try {
                            if (n) return JSON.parse(k.decode(n))
                        } catch (i) {
                            return null
                        }
                        return null
                    },
                    ue = function(e, t) {
                        try {
                            return te.set(se(e), k.encode(JSON.stringify(t)), oe), !0
                        } catch (n) {
                            return !1
                        }
                    },
                    ce = function(e) {
                        try {
                            return te.set(se(e), null, oe), !0
                        } catch (t) {
                            return !1
                        }
                    },
                    pe = {
                        reset: function() {
                            oe = {
                                expirationDays: void 0,
                                domain: void 0
                            }
                        },
                        options: re,
                        get: ae,
                        set: ue,
                        remove: ce,
                        setRaw: function(e, t) {
                            try {
                                return te.set(se(e), t, oe), !0
                            } catch (n) {
                                return !1
                            }
                        },
                        getRaw: function(e) {
                            var t = se(e) + "=";
                            return te.get(t)
                        }
                    };
                if (function() {
                        var e, t = new Date;
                        try {
                            return window.localStorage.setItem(t, t), e = window.localStorage.getItem(t) === String(t), window.localStorage.removeItem(t), e
                        } catch (n) {}
                        return !1
                    }()) C = window.localStorage;
                else if ("undefined" !== typeof window && window.globalStorage) try {
                    C = window.globalStorage[window.location.hostname]
                } catch (Ct) {} else if ("undefined" !== typeof document) {
                    var le = document.createElement("div"),
                        de = "localStorage";
                    le.style.display = "none", document.getElementsByTagName("head")[0].appendChild(le), le.addBehavior && (le.addBehavior("#default#userdata"), C = {
                        length: 0,
                        setItem: function(e, t) {
                            le.load(de), le.getAttribute(e) || this.length++, le.setAttribute(e, t), le.save(de)
                        },
                        getItem: function(e) {
                            return le.load(de), le.getAttribute(e)
                        },
                        removeItem: function(e) {
                            le.load(de), le.getAttribute(e) && this.length--, le.removeAttribute(e), le.save(de)
                        },
                        clear: function() {
                            le.load(de);
                            for (var e, t = 0; e = le.XMLDocument.documentElement.attributes[t++];) le.removeAttribute(e.name);
                            le.save(de), this.length = 0
                        },
                        key: function(e) {
                            return le.load(de), le.XMLDocument.documentElement.attributes[e]
                        }
                    }, le.load(de), C.length = le.XMLDocument.documentElement.attributes.length)
                }
                C || (C = {
                    length: 0,
                    setItem: function(e, t) {},
                    getItem: function(e) {},
                    removeItem: function(e) {},
                    clear: function() {},
                    key: function(e) {}
                });
                var he, fe = C,
                    ve = function() {
                        this.storage = null
                    };
                ve.prototype.getStorage = function() {
                    if (null !== this.storage) return this.storage;
                    if (te.areCookiesEnabled()) this.storage = pe;
                    else {
                        var e = "amp_cookiestore_";
                        this.storage = {
                            _options: {
                                expirationDays: void 0,
                                domain: void 0,
                                secure: !1
                            },
                            reset: function() {
                                this._options = {
                                    expirationDays: void 0,
                                    domain: void 0,
                                    secure: !1
                                }
                            },
                            options: function(e) {
                                return 0 === arguments.length ? this._options : (e = e || {}, this._options.expirationDays = e.expirationDays || this._options.expirationDays, this._options.domain = e.domain || this._options.domain || window && window.location && window.location.hostname, this._options.secure = e.secure || !1)
                            },
                            get: function(t) {
                                try {
                                    return JSON.parse(fe.getItem(e + t))
                                } catch (Ct) {}
                                return null
                            },
                            set: function(t, n) {
                                try {
                                    return fe.setItem(e + t, JSON.stringify(n)), !0
                                } catch (Ct) {}
                                return !1
                            },
                            remove: function(t) {
                                try {
                                    fe.removeItem(e + t)
                                } catch (Ct) {
                                    return !1
                                }
                            }
                        }
                    }
                    return this.storage
                };
                var ge = (a(he = {}, O.STORAGE_COOKIES, !0), a(he, O.STORAGE_NONE, !0), a(he, O.STORAGE_LOCAL, !0), a(he, O.STORAGE_SESSION, !0), he),
                    ye = function() {
                        function e(n) {
                            var i = n.storageKey,
                                o = n.disableCookies,
                                r = n.domain,
                                s = n.secure,
                                a = n.sameSite,
                                u = n.expirationDays,
                                c = n.storage;
                            t(this, e), this.storageKey = i, this.domain = r, this.secure = s, this.sameSite = a, this.expirationDays = u, this.cookieDomain = "";
                            var p = ie($().href);
                            if (this.cookieDomain = r || (p ? "." + p : null), ge[c]) this.storage = c;
                            else {
                                var l = o || !te.areCookiesEnabled({
                                    domain: this.cookieDomain,
                                    secure: this.secure,
                                    sameSite: this.sameSite,
                                    expirationDays: this.expirationDays
                                });
                                this.storage = l ? O.STORAGE_LOCAL : O.STORAGE_COOKIES
                            }
                        }
                        return s(e, [{
                            key: "getCookieStorageKey",
                            value: function() {
                                if (!this.domain) return this.storageKey;
                                var e = "." === this.domain.charAt(0) ? this.domain.substring(1) : this.domain;
                                return "".concat(this.storageKey).concat(e ? "_".concat(e) : "")
                            }
                        }, {
                            key: "save",
                            value: function(e) {
                                var t = e.deviceId,
                                    n = e.userId,
                                    i = e.optOut,
                                    o = e.sessionId,
                                    r = e.lastEventTime,
                                    s = e.eventId,
                                    a = e.identifyId,
                                    u = e.sequenceNumber;
                                if (this.storage !== O.STORAGE_NONE) {
                                    var c = [t, k.encode(n || ""), i ? "1" : "", o ? o.toString(32) : "0", r ? r.toString(32) : "0", s ? s.toString(32) : "0", a ? a.toString(32) : "0", u ? u.toString(32) : "0"].join(".");
                                    switch (this.storage) {
                                        case O.STORAGE_SESSION:
                                            window.sessionStorage && window.sessionStorage.setItem(this.storageKey, c);
                                            break;
                                        case O.STORAGE_LOCAL:
                                            fe.setItem(this.storageKey, c);
                                            break;
                                        case O.STORAGE_COOKIES:
                                            this.saveCookie(c)
                                    }
                                }
                            }
                        }, {
                            key: "saveCookie",
                            value: function(e) {
                                te.set(this.getCookieStorageKey(), e, {
                                    domain: this.cookieDomain,
                                    secure: this.secure,
                                    sameSite: this.sameSite,
                                    expirationDays: this.expirationDays
                                })
                            }
                        }, {
                            key: "load",
                            value: function() {
                                var e, t = this;
                                if (this.storage === O.STORAGE_COOKIES) {
                                    var n = this.getCookieStorageKey() + "=",
                                        i = te.getAll(n);
                                    if (0 === i.length || 1 === i.length) e = i[0];
                                    else {
                                        var o = te.sortByEventTime(i)[0];
                                        i.forEach((function() {
                                            return te.set(t.getCookieStorageKey(), null, {})
                                        })), this.saveCookie(o), e = te.get(n)
                                    }
                                }
                                if (e || (e = fe.getItem(this.storageKey)), !e) try {
                                    e = window.sessionStorage && window.sessionStorage.getItem(this.storageKey)
                                } catch (Ct) {
                                    X.log.info('window.sessionStorage unavailable. Reason: "'.concat(Ct, '"'))
                                }
                                if (!e) return null;
                                var r = e.split("."),
                                    s = null;
                                if (r[O.USER_ID_INDEX]) try {
                                    s = k.decode(r[O.USER_ID_INDEX])
                                } catch (Ct) {
                                    s = null
                                }
                                return {
                                    deviceId: r[O.DEVICE_ID_INDEX],
                                    userId: s,
                                    optOut: "1" === r[O.OPT_OUT_INDEX],
                                    sessionId: parseInt(r[O.SESSION_ID_INDEX], 32),
                                    lastEventTime: parseInt(r[O.LAST_EVENT_TIME_INDEX], 32),
                                    eventId: parseInt(r[O.EVENT_ID_INDEX], 32),
                                    identifyId: parseInt(r[O.IDENTIFY_ID_INDEX], 32),
                                    sequenceNumber: parseInt(r[O.SEQUENCE_NUMBER_INDEX], 32)
                                }
                            }
                        }, {
                            key: "clear",
                            value: function() {
                                var e;
                                if (this.storage === O.STORAGE_COOKIES && (e = te.get(this.getCookieStorageKey() + "="), te.set(this.getCookieStorageKey(), null, {
                                        domain: this.cookieDomain,
                                        secure: this.secure,
                                        sameSite: this.sameSite,
                                        expirationDays: 0
                                    })), e || (e = fe.getItem(this.storageKey), fe.clear()), !e) try {
                                    e = window.sessionStorage && window.sessionStorage.getItem(this.storageKey), window.sessionStorage.clear()
                                } catch (Ct) {
                                    X.log.info('window.sessionStorage unavailable. Reason: "'.concat(Ct, '"'))
                                }
                                return !!e
                            }
                        }]), e
                    }(),
                    _e = function(e, t) {
                        var n = e ? "?" + e.split(".").slice(-1)[0].replace(/\|/g, "&") : "",
                            i = function(e, t, n, i) {
                                return X.getQueryParam(e, t) || X.getQueryParam(n, i)
                            },
                            o = i(O.UTM_SOURCE, t, "utmcsr", n),
                            r = i(O.UTM_MEDIUM, t, "utmcmd", n),
                            s = i(O.UTM_CAMPAIGN, t, "utmccn", n),
                            a = i(O.UTM_TERM, t, "utmctr", n),
                            u = i(O.UTM_CONTENT, t, "utmcct", n),
                            c = {},
                            p = function(e, t) {
                                X.isEmptyString(t) || (c[e] = t)
                            };
                        return p(O.UTM_SOURCE, o), p(O.UTM_MEDIUM, r), p(O.UTM_CAMPAIGN, s), p(O.UTM_TERM, a), p(O.UTM_CONTENT, u), c
                    },
                    me = "$add",
                    be = "$append",
                    Ee = "$clearAll",
                    we = "$prepend",
                    Ie = "$set",
                    Se = "$setOnce",
                    Ne = "$unset",
                    Oe = "$preInsert",
                    Te = "$postInsert",
                    ke = "$remove",
                    Ae = function() {
                        this.userPropertiesOperations = {}, this.properties = []
                    };
                Ae.prototype.add = function(e, t) {
                    return "number" === R(t) || "string" === R(t) ? this._addOperation(me, e, t) : X.log.error("Unsupported type for value: " + R(t) + ", expecting number or string"), this
                }, Ae.prototype.append = function(e, t) {
                    return this._addOperation(be, e, t), this
                }, Ae.prototype.clearAll = function() {
                    return Object.keys(this.userPropertiesOperations).length > 0 ? (Object.prototype.hasOwnProperty.call(this.userPropertiesOperations, Ee) || X.log.error("Need to send $clearAll on its own Identify object without any other operations, skipping $clearAll"), this) : (this.userPropertiesOperations[Ee] = "-", this)
                }, Ae.prototype.prepend = function(e, t) {
                    return this._addOperation(we, e, t), this
                }, Ae.prototype.set = function(e, t) {
                    return this._addOperation(Ie, e, t), this
                }, Ae.prototype.setOnce = function(e, t) {
                    return this._addOperation(Se, e, t), this
                }, Ae.prototype.unset = function(e) {
                    return this._addOperation(Ne, e, "-"), this
                }, Ae.prototype.preInsert = function(e, t) {
                    return this._addOperation(Oe, e, t), this
                }, Ae.prototype.postInsert = function(e, t) {
                    return this._addOperation(Te, e, t), this
                }, Ae.prototype.remove = function(e, t) {
                    return this._addOperation(ke, e, t), this
                }, Ae.prototype._addOperation = function(e, t, n) {
                    Object.prototype.hasOwnProperty.call(this.userPropertiesOperations, Ee) ? X.log.error("This identify already contains a $clearAll operation, skipping operation " + e) : -1 === this.properties.indexOf(t) ? (Object.prototype.hasOwnProperty.call(this.userPropertiesOperations, e) || (this.userPropertiesOperations[e] = {}), this.userPropertiesOperations[e][t] = n, this.properties.push(t)) : X.log.error('User property "' + t + '" already used in this identify, skipping operation ' + e)
                };
                var Re = "undefined" !== typeof window ? window : "undefined" !== typeof n.g ? n.g : "undefined" !== typeof self ? self : {};

                function Ce(e, t) {
                    return e(t = {
                        exports: {}
                    }, t.exports), t.exports
                }
                var xe = Ce((function(e) {
                        ! function(t) {
                            function n(e, t) {
                                var n = (65535 & e) + (65535 & t);
                                return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n
                            }

                            function i(e, t) {
                                return e << t | e >>> 32 - t
                            }

                            function o(e, t, o, r, s, a) {
                                return n(i(n(n(t, e), n(r, a)), s), o)
                            }

                            function r(e, t, n, i, r, s, a) {
                                return o(t & n | ~t & i, e, t, r, s, a)
                            }

                            function s(e, t, n, i, r, s, a) {
                                return o(t & i | n & ~i, e, t, r, s, a)
                            }

                            function a(e, t, n, i, r, s, a) {
                                return o(t ^ n ^ i, e, t, r, s, a)
                            }

                            function u(e, t, n, i, r, s, a) {
                                return o(n ^ (t | ~i), e, t, r, s, a)
                            }

                            function c(e, t) {
                                var i, o, c, p, l;
                                e[t >> 5] |= 128 << t % 32, e[14 + (t + 64 >>> 9 << 4)] = t;
                                var d = 1732584193,
                                    h = -271733879,
                                    f = -1732584194,
                                    v = 271733878;
                                for (i = 0; i < e.length; i += 16) o = d, c = h, p = f, l = v, d = r(d, h, f, v, e[i], 7, -680876936), v = r(v, d, h, f, e[i + 1], 12, -389564586), f = r(f, v, d, h, e[i + 2], 17, 606105819), h = r(h, f, v, d, e[i + 3], 22, -1044525330), d = r(d, h, f, v, e[i + 4], 7, -176418897), v = r(v, d, h, f, e[i + 5], 12, 1200080426), f = r(f, v, d, h, e[i + 6], 17, -1473231341), h = r(h, f, v, d, e[i + 7], 22, -45705983), d = r(d, h, f, v, e[i + 8], 7, 1770035416), v = r(v, d, h, f, e[i + 9], 12, -1958414417), f = r(f, v, d, h, e[i + 10], 17, -42063), h = r(h, f, v, d, e[i + 11], 22, -1990404162), d = r(d, h, f, v, e[i + 12], 7, 1804603682), v = r(v, d, h, f, e[i + 13], 12, -40341101), f = r(f, v, d, h, e[i + 14], 17, -1502002290), d = s(d, h = r(h, f, v, d, e[i + 15], 22, 1236535329), f, v, e[i + 1], 5, -165796510), v = s(v, d, h, f, e[i + 6], 9, -1069501632), f = s(f, v, d, h, e[i + 11], 14, 643717713), h = s(h, f, v, d, e[i], 20, -373897302), d = s(d, h, f, v, e[i + 5], 5, -701558691), v = s(v, d, h, f, e[i + 10], 9, 38016083), f = s(f, v, d, h, e[i + 15], 14, -660478335), h = s(h, f, v, d, e[i + 4], 20, -405537848), d = s(d, h, f, v, e[i + 9], 5, 568446438), v = s(v, d, h, f, e[i + 14], 9, -1019803690), f = s(f, v, d, h, e[i + 3], 14, -187363961), h = s(h, f, v, d, e[i + 8], 20, 1163531501), d = s(d, h, f, v, e[i + 13], 5, -1444681467), v = s(v, d, h, f, e[i + 2], 9, -51403784), f = s(f, v, d, h, e[i + 7], 14, 1735328473), d = a(d, h = s(h, f, v, d, e[i + 12], 20, -1926607734), f, v, e[i + 5], 4, -378558), v = a(v, d, h, f, e[i + 8], 11, -2022574463), f = a(f, v, d, h, e[i + 11], 16, 1839030562), h = a(h, f, v, d, e[i + 14], 23, -35309556), d = a(d, h, f, v, e[i + 1], 4, -1530992060), v = a(v, d, h, f, e[i + 4], 11, 1272893353), f = a(f, v, d, h, e[i + 7], 16, -155497632), h = a(h, f, v, d, e[i + 10], 23, -1094730640), d = a(d, h, f, v, e[i + 13], 4, 681279174), v = a(v, d, h, f, e[i], 11, -358537222), f = a(f, v, d, h, e[i + 3], 16, -722521979), h = a(h, f, v, d, e[i + 6], 23, 76029189), d = a(d, h, f, v, e[i + 9], 4, -640364487), v = a(v, d, h, f, e[i + 12], 11, -421815835), f = a(f, v, d, h, e[i + 15], 16, 530742520), d = u(d, h = a(h, f, v, d, e[i + 2], 23, -995338651), f, v, e[i], 6, -198630844), v = u(v, d, h, f, e[i + 7], 10, 1126891415), f = u(f, v, d, h, e[i + 14], 15, -1416354905), h = u(h, f, v, d, e[i + 5], 21, -57434055), d = u(d, h, f, v, e[i + 12], 6, 1700485571), v = u(v, d, h, f, e[i + 3], 10, -1894986606), f = u(f, v, d, h, e[i + 10], 15, -1051523), h = u(h, f, v, d, e[i + 1], 21, -2054922799), d = u(d, h, f, v, e[i + 8], 6, 1873313359), v = u(v, d, h, f, e[i + 15], 10, -30611744), f = u(f, v, d, h, e[i + 6], 15, -1560198380), h = u(h, f, v, d, e[i + 13], 21, 1309151649), d = u(d, h, f, v, e[i + 4], 6, -145523070), v = u(v, d, h, f, e[i + 11], 10, -1120210379), f = u(f, v, d, h, e[i + 2], 15, 718787259), h = u(h, f, v, d, e[i + 9], 21, -343485551), d = n(d, o), h = n(h, c), f = n(f, p), v = n(v, l);
                                return [d, h, f, v]
                            }

                            function p(e) {
                                var t, n = "",
                                    i = 32 * e.length;
                                for (t = 0; t < i; t += 8) n += String.fromCharCode(e[t >> 5] >>> t % 32 & 255);
                                return n
                            }

                            function l(e) {
                                var t, n = [];
                                for (n[(e.length >> 2) - 1] = void 0, t = 0; t < n.length; t += 1) n[t] = 0;
                                var i = 8 * e.length;
                                for (t = 0; t < i; t += 8) n[t >> 5] |= (255 & e.charCodeAt(t / 8)) << t % 32;
                                return n
                            }

                            function d(e) {
                                return p(c(l(e), 8 * e.length))
                            }

                            function h(e, t) {
                                var n, i, o = l(e),
                                    r = [],
                                    s = [];
                                for (r[15] = s[15] = void 0, o.length > 16 && (o = c(o, 8 * e.length)), n = 0; n < 16; n += 1) r[n] = 909522486 ^ o[n], s[n] = 1549556828 ^ o[n];
                                return i = c(r.concat(l(t)), 512 + 8 * t.length), p(c(s.concat(i), 640))
                            }

                            function f(e) {
                                var t, n, i = "0123456789abcdef",
                                    o = "";
                                for (n = 0; n < e.length; n += 1) t = e.charCodeAt(n), o += i.charAt(t >>> 4 & 15) + i.charAt(15 & t);
                                return o
                            }

                            function v(e) {
                                return unescape(encodeURIComponent(e))
                            }

                            function g(e) {
                                return d(v(e))
                            }

                            function y(e) {
                                return f(g(e))
                            }

                            function _(e, t) {
                                return h(v(e), v(t))
                            }

                            function m(e, t) {
                                return f(_(e, t))
                            }

                            function b(e, t, n) {
                                return t ? n ? _(t, e) : m(t, e) : n ? g(e) : y(e)
                            }
                            e.exports ? e.exports = b : t.md5 = b
                        }(Re)
                    })),
                    Ue = function(e) {
                        return encodeURIComponent(e).replace(/[!'()*]/g, (function(e) {
                            return "%" + e.charCodeAt(0).toString(16).toUpperCase()
                        }))
                    },
                    Pe = Object.getOwnPropertySymbols,
                    De = Object.prototype.hasOwnProperty,
                    je = Object.prototype.propertyIsEnumerable;

                function qe(e) {
                    if (null === e || void 0 === e) throw new TypeError("Object.assign cannot be called with null or undefined");
                    return Object(e)
                }

                function Le() {
                    try {
                        if (!Object.assign) return !1;
                        var e = new String("abc");
                        if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
                        for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
                        if ("0123456789" !== Object.getOwnPropertyNames(t).map((function(e) {
                                return t[e]
                            })).join("")) return !1;
                        var i = {};
                        return "abcdefghijklmnopqrst".split("").forEach((function(e) {
                            i[e] = e
                        })), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, i)).join("")
                    } catch (o) {
                        return !1
                    }
                }
                var Me = Le() ? Object.assign : function(e, t) {
                        for (var n, i, o = qe(e), r = 1; r < arguments.length; r++) {
                            for (var s in n = Object(arguments[r])) De.call(n, s) && (o[s] = n[s]);
                            if (Pe) {
                                i = Pe(n);
                                for (var a = 0; a < i.length; a++) je.call(n, i[a]) && (o[i[a]] = n[i[a]])
                            }
                        }
                        return o
                    },
                    Ge = "%[a-f0-9]{2}",
                    Ve = new RegExp(Ge, "gi"),
                    Fe = new RegExp("(" + Ge + ")+", "gi");

                function Ke(e, t) {
                    try {
                        return decodeURIComponent(e.join(""))
                    } catch (o) {}
                    if (1 === e.length) return e;
                    t = t || 1;
                    var n = e.slice(0, t),
                        i = e.slice(t);
                    return Array.prototype.concat.call([], Ke(n), Ke(i))
                }

                function ze(e) {
                    try {
                        return decodeURIComponent(e)
                    } catch (i) {
                        for (var t = e.match(Ve), n = 1; n < t.length; n++) t = (e = Ke(t, n).join("")).match(Ve);
                        return e
                    }
                }

                function Be(e) {
                    for (var t = {
                            "%FE%FF": "\ufffd\ufffd",
                            "%FF%FE": "\ufffd\ufffd"
                        }, n = Fe.exec(e); n;) {
                        try {
                            t[n[0]] = decodeURIComponent(n[0])
                        } catch (a) {
                            var i = ze(n[0]);
                            i !== n[0] && (t[n[0]] = i)
                        }
                        n = Fe.exec(e)
                    }
                    t["%C2"] = "\ufffd";
                    for (var o = Object.keys(t), r = 0; r < o.length; r++) {
                        var s = o[r];
                        e = e.replace(new RegExp(s, "g"), t[s])
                    }
                    return e
                }
                var Xe = function(e) {
                    if ("string" !== typeof e) throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof e + "`");
                    try {
                        return e = e.replace(/\+/g, " "), decodeURIComponent(e)
                    } catch (t) {
                        return Be(e)
                    }
                };

                function $e(e) {
                    switch (e.arrayFormat) {
                        case "index":
                            return function(t, n, i) {
                                return null === n ? [Ye(t, e), "[", i, "]"].join("") : [Ye(t, e), "[", Ye(i, e), "]=", Ye(n, e)].join("")
                            };
                        case "bracket":
                            return function(t, n) {
                                return null === n ? Ye(t, e) : [Ye(t, e), "[]=", Ye(n, e)].join("")
                            };
                        default:
                            return function(t, n) {
                                return null === n ? Ye(t, e) : [Ye(t, e), "=", Ye(n, e)].join("")
                            }
                    }
                }

                function We(e) {
                    var t;
                    switch (e.arrayFormat) {
                        case "index":
                            return function(e, n, i) {
                                t = /\[(\d*)\]$/.exec(e), e = e.replace(/\[\d*\]$/, ""), t ? (void 0 === i[e] && (i[e] = {}), i[e][t[1]] = n) : i[e] = n
                            };
                        case "bracket":
                            return function(e, n, i) {
                                t = /(\[\])$/.exec(e), e = e.replace(/\[\]$/, ""), t ? void 0 !== i[e] ? i[e] = [].concat(i[e], n) : i[e] = [n] : i[e] = n
                            };
                        default:
                            return function(e, t, n) {
                                void 0 !== n[e] ? n[e] = [].concat(n[e], t) : n[e] = t
                            }
                    }
                }

                function Ye(e, t) {
                    return t.encode ? t.strict ? Ue(e) : encodeURIComponent(e) : e
                }

                function He(e) {
                    return Array.isArray(e) ? e.sort() : "object" === typeof e ? He(Object.keys(e)).sort((function(e, t) {
                        return Number(e) - Number(t)
                    })).map((function(t) {
                        return e[t]
                    })) : e
                }

                function Qe(e) {
                    var t = e.indexOf("?");
                    return -1 === t ? "" : e.slice(t + 1)
                }

                function Je(e, t) {
                    var n = We(t = Me({
                            arrayFormat: "none"
                        }, t)),
                        i = Object.create(null);
                    return "string" !== typeof e ? i : (e = e.trim().replace(/^[?#&]/, "")) ? (e.split("&").forEach((function(e) {
                        var t = e.replace(/\+/g, " ").split("="),
                            o = t.shift(),
                            r = t.length > 0 ? t.join("=") : void 0;
                        r = void 0 === r ? null : Xe(r), n(Xe(o), r, i)
                    })), Object.keys(i).sort().reduce((function(e, t) {
                        var n = i[t];
                        return Boolean(n) && "object" === typeof n && !Array.isArray(n) ? e[t] = He(n) : e[t] = n, e
                    }), Object.create(null))) : i
                }
                var Ze = {
                        extract: Qe,
                        parse: Je,
                        stringify: function(e, t) {
                            !1 === (t = Me({
                                encode: !0,
                                strict: !0,
                                arrayFormat: "none"
                            }, t)).sort && (t.sort = function() {});
                            var n = $e(t);
                            return e ? Object.keys(e).sort(t.sort).map((function(i) {
                                var o = e[i];
                                if (void 0 === o) return "";
                                if (null === o) return Ye(i, t);
                                if (Array.isArray(o)) {
                                    var r = [];
                                    return o.slice().forEach((function(e) {
                                        void 0 !== e && r.push(n(i, e, r.length))
                                    })), r.join("&")
                                }
                                return Ye(i, t) + "=" + Ye(o, t)
                            })).filter((function(e) {
                                return e.length > 0
                            })).join("&") : ""
                        },
                        parseUrl: function(e, t) {
                            return {
                                url: e.split("?")[0] || "",
                                query: Je(Qe(e), t)
                            }
                        }
                    },
                    et = function(e, t, n) {
                        this.url = e, this.data = t || {}, this.headers = n
                    };

                function tt(e, t) {
                    for (var n in t) e.setRequestHeader(n, t[n])
                }
                et.prototype.send = function(e) {
                    if (window.XDomainRequest) {
                        var t = new window.XDomainRequest;
                        t.open("POST", this.url, !0), t.onload = function() {
                            e(200, t.responseText)
                        }, t.onerror = function() {
                            "Request Entity Too Large" === t.responseText ? e(413, t.responseText) : e(500, t.responseText)
                        }, t.ontimeout = function() {}, t.onprogress = function() {}, t.send(Ze.stringify(this.data))
                    } else {
                        var n = new XMLHttpRequest;
                        n.open("POST", this.url, !0), n.onreadystatechange = function() {
                            4 === n.readyState && e(n.status, n.responseText)
                        }, tt(n, this.headers), n.send(Ze.stringify(this.data))
                    }
                };
                var nt = function() {
                    this._price = null, this._productId = null, this._quantity = 1, this._revenueType = null, this._properties = null
                };
                nt.prototype.setProductId = function(e) {
                    return "string" !== R(e) ? X.log.error("Unsupported type for productId: " + R(e) + ", expecting string") : X.isEmptyString(e) ? X.log.error("Invalid empty productId") : this._productId = e, this
                }, nt.prototype.setQuantity = function(e) {
                    return "number" !== R(e) ? X.log.error("Unsupported type for quantity: " + R(e) + ", expecting number") : this._quantity = parseInt(e), this
                }, nt.prototype.setPrice = function(e) {
                    return "number" !== R(e) ? X.log.error("Unsupported type for price: " + R(e) + ", expecting number") : this._price = e, this
                }, nt.prototype.setRevenueType = function(e) {
                    return "string" !== R(e) ? X.log.error("Unsupported type for revenueType: " + R(e) + ", expecting string") : this._revenueType = e, this
                }, nt.prototype.setEventProperties = function(e) {
                    return "object" !== R(e) ? X.log.error("Unsupported type for eventProperties: " + R(e) + ", expecting object") : this._properties = X.validateProperties(e), this
                }, nt.prototype._isValidRevenue = function() {
                    return "number" === R(this._price) || (X.log.error("Invalid revenue, need to set price field"), !1)
                }, nt.prototype._toJSONObject = function() {
                    var e = "object" === R(this._properties) ? this._properties : {};
                    return null !== this._productId && (e[O.REVENUE_PRODUCT_ID] = this._productId), null !== this._quantity && (e[O.REVENUE_QUANTITY] = this._quantity), null !== this._price && (e[O.REVENUE_PRICE] = this._price), null !== this._revenueType && (e[O.REVENUE_REVENUE_TYPE] = this._revenueType), e
                };
                var it = Ce((function(e, t) {
                        ! function(n, i) {
                            var o = "0.7.28",
                                r = "",
                                s = "?",
                                a = "function",
                                u = "undefined",
                                c = "object",
                                p = "string",
                                l = "major",
                                d = "model",
                                h = "name",
                                f = "type",
                                v = "vendor",
                                g = "version",
                                y = "architecture",
                                _ = "console",
                                m = "mobile",
                                b = "tablet",
                                E = "smarttv",
                                w = "wearable",
                                I = "embedded",
                                S = 255,
                                N = "Amazon",
                                O = "Apple",
                                T = "ASUS",
                                k = "BlackBerry",
                                A = "Browser",
                                R = "Chrome",
                                C = "Firefox",
                                x = "Google",
                                U = "Huawei",
                                P = "LG",
                                D = "Microsoft",
                                j = "Motorola",
                                q = "Opera",
                                L = "Samsung",
                                M = "Sony",
                                G = "Xiaomi",
                                V = "Zebra",
                                F = function(e, t) {
                                    var n = {};
                                    for (var i in e) t[i] && t[i].length % 2 === 0 ? n[i] = t[i].concat(e[i]) : n[i] = e[i];
                                    return n
                                },
                                K = function(e) {
                                    var t = {};
                                    for (var n in e) t[e[n].toUpperCase()] = e[n];
                                    return t
                                },
                                z = function(e, t) {
                                    return typeof e === p && -1 !== B(t).indexOf(B(e))
                                },
                                B = function(e) {
                                    return e.toLowerCase()
                                },
                                X = function(e) {
                                    return typeof e === p ? e.replace(/[^\d\.]/g, r).split(".")[0] : i
                                },
                                $ = function(e, t) {
                                    if (typeof e === p) return e = e.replace(/^\s+|\s+$/g, r), typeof t === u ? e : e.substring(0, S)
                                },
                                W = function(e, t) {
                                    for (var n, o, r, s, u, p, l = 0; l < t.length && !u;) {
                                        var d = t[l],
                                            h = t[l + 1];
                                        for (n = o = 0; n < d.length && !u;)
                                            if (u = d[n++].exec(e))
                                                for (r = 0; r < h.length; r++) p = u[++o], typeof(s = h[r]) === c && s.length > 0 ? 2 == s.length ? typeof s[1] == a ? this[s[0]] = s[1].call(this, p) : this[s[0]] = s[1] : 3 == s.length ? typeof s[1] !== a || s[1].exec && s[1].test ? this[s[0]] = p ? p.replace(s[1], s[2]) : i : this[s[0]] = p ? s[1].call(this, p, s[2]) : i : 4 == s.length && (this[s[0]] = p ? s[3].call(this, p.replace(s[1], s[2])) : i) : this[s] = p || i;
                                        l += 2
                                    }
                                },
                                Y = function(e, t) {
                                    for (var n in t)
                                        if (typeof t[n] === c && t[n].length > 0) {
                                            for (var o = 0; o < t[n].length; o++)
                                                if (z(t[n][o], e)) return n === s ? i : n
                                        } else if (z(t[n], e)) return n === s ? i : n;
                                    return e
                                },
                                H = {
                                    ME: "4.90",
                                    "NT 3.11": "NT3.51",
                                    "NT 4.0": "NT4.0",
                                    2e3: "NT 5.0",
                                    XP: ["NT 5.1", "NT 5.2"],
                                    Vista: "NT 6.0",
                                    7: "NT 6.1",
                                    8: "NT 6.2",
                                    8.1: "NT 6.3",
                                    10: ["NT 6.4", "NT 10.0"],
                                    RT: "ARM"
                                },
                                Q = {
                                    browser: [
                                        [/\b(?:crmo|crios)\/([\w\.]+)/i],
                                        [g, [h, "Chrome"]],
                                        [/edg(?:e|ios|a)?\/([\w\.]+)/i],
                                        [g, [h, "Edge"]],
                                        [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
                                        [h, g],
                                        [/opios[\/ ]+([\w\.]+)/i],
                                        [g, [h, q + " Mini"]],
                                        [/\bopr\/([\w\.]+)/i],
                                        [g, [h, q]],
                                        [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i, /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i, /(ba?idubrowser)[\/ ]?([\w\.]+)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([-\w\.]+)/i, /(weibo)__([\d\.]+)/i],
                                        [h, g],
                                        [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
                                        [g, [h, "UC" + A]],
                                        [/\bqbcore\/([\w\.]+)/i],
                                        [g, [h, "WeChat(Win) Desktop"]],
                                        [/micromessenger\/([\w\.]+)/i],
                                        [g, [h, "WeChat"]],
                                        [/konqueror\/([\w\.]+)/i],
                                        [g, [h, "Konqueror"]],
                                        [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
                                        [g, [h, "IE"]],
                                        [/yabrowser\/([\w\.]+)/i],
                                        [g, [h, "Yandex"]],
                                        [/(avast|avg)\/([\w\.]+)/i],
                                        [
                                            [h, /(.+)/, "$1 Secure " + A], g
                                        ],
                                        [/\bfocus\/([\w\.]+)/i],
                                        [g, [h, C + " Focus"]],
                                        [/\bopt\/([\w\.]+)/i],
                                        [g, [h, q + " Touch"]],
                                        [/coc_coc\w+\/([\w\.]+)/i],
                                        [g, [h, "Coc Coc"]],
                                        [/dolfin\/([\w\.]+)/i],
                                        [g, [h, "Dolphin"]],
                                        [/coast\/([\w\.]+)/i],
                                        [g, [h, q + " Coast"]],
                                        [/miuibrowser\/([\w\.]+)/i],
                                        [g, [h, "MIUI " + A]],
                                        [/fxios\/([-\w\.]+)/i],
                                        [g, [h, C]],
                                        [/\bqihu|(qi?ho?o?|360)browser/i],
                                        [
                                            [h, "360 " + A]
                                        ],
                                        [/(oculus|samsung|sailfish)browser\/([\w\.]+)/i],
                                        [
                                            [h, /(.+)/, "$1 " + A], g
                                        ],
                                        [/(comodo_dragon)\/([\w\.]+)/i],
                                        [
                                            [h, /_/g, " "], g
                                        ],
                                        [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],
                                        [h, g],
                                        [/(metasr)[\/ ]?([\w\.]+)/i, /(lbbrowser)/i],
                                        [h],
                                        [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
                                        [
                                            [h, "Facebook"], g
                                        ],
                                        [/safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(chromium|instagram)[\/ ]([-\w\.]+)/i],
                                        [h, g],
                                        [/\bgsa\/([\w\.]+) .*safari\//i],
                                        [g, [h, "GSA"]],
                                        [/headlesschrome(?:\/([\w\.]+)| )/i],
                                        [g, [h, R + " Headless"]],
                                        [/ wv\).+(chrome)\/([\w\.]+)/i],
                                        [
                                            [h, R + " WebView"], g
                                        ],
                                        [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
                                        [g, [h, "Android " + A]],
                                        [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
                                        [h, g],
                                        [/version\/([\w\.]+) .*mobile\/\w+ (safari)/i],
                                        [g, [h, "Mobile Safari"]],
                                        [/version\/([\w\.]+) .*(mobile ?safari|safari)/i],
                                        [g, h],
                                        [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
                                        [h, [g, Y, {
                                            "1.0": "/8",
                                            1.2: "/1",
                                            1.3: "/3",
                                            "2.0": "/412",
                                            "2.0.2": "/416",
                                            "2.0.3": "/417",
                                            "2.0.4": "/419",
                                            "?": "/"
                                        }]],
                                        [/(webkit|khtml)\/([\w\.]+)/i],
                                        [h, g],
                                        [/(navigator|netscape\d?)\/([-\w\.]+)/i],
                                        [
                                            [h, "Netscape"], g
                                        ],
                                        [/mobile vr; rv:([\w\.]+)\).+firefox/i],
                                        [g, [h, C + " Reality"]],
                                        [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i],
                                        [h, g]
                                    ],
                                    cpu: [
                                        [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
                                        [
                                            [y, "amd64"]
                                        ],
                                        [/(ia32(?=;))/i],
                                        [
                                            [y, B]
                                        ],
                                        [/((?:i[346]|x)86)[;\)]/i],
                                        [
                                            [y, "ia32"]
                                        ],
                                        [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
                                        [
                                            [y, "arm64"]
                                        ],
                                        [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
                                        [
                                            [y, "armhf"]
                                        ],
                                        [/windows (ce|mobile); ppc;/i],
                                        [
                                            [y, "arm"]
                                        ],
                                        [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
                                        [
                                            [y, /ower/, r, B]
                                        ],
                                        [/(sun4\w)[;\)]/i],
                                        [
                                            [y, "sparc"]
                                        ],
                                        [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],
                                        [
                                            [y, B]
                                        ]
                                    ],
                                    device: [
                                        [/\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
                                        [d, [v, L],
                                            [f, b]
                                        ],
                                        [/\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i],
                                        [d, [v, L],
                                            [f, m]
                                        ],
                                        [/((ipod|iphone)\d+,\d+)/i],
                                        [d, [v, O],
                                            [f, m]
                                        ],
                                        [/(ipad\d+,\d+)/i],
                                        [d, [v, O],
                                            [f, b]
                                        ],
                                        [/\((ip(?:hone|od)[\w ]*);/i],
                                        [d, [v, O],
                                            [f, m]
                                        ],
                                        [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
                                        [d, [v, O],
                                            [f, b]
                                        ],
                                        [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
                                        [d, [v, U],
                                            [f, b]
                                        ],
                                        [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}-[atu]?[ln][01259x][012359][an]?)\b(?!.+d\/s)/i],
                                        [d, [v, U],
                                            [f, m]
                                        ],
                                        [/\b(poco[\w ]+)(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],
                                        [
                                            [d, /_/g, " "],
                                            [v, G],
                                            [f, m]
                                        ],
                                        [/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
                                        [
                                            [d, /_/g, " "],
                                            [v, G],
                                            [f, b]
                                        ],
                                        [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007)\b/i],
                                        [d, [v, "OPPO"],
                                            [f, m]
                                        ],
                                        [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
                                        [d, [v, "Vivo"],
                                            [f, m]
                                        ],
                                        [/\b(rmx[12]\d{3})(?: bui|;|\))/i],
                                        [d, [v, "Realme"],
                                            [f, m]
                                        ],
                                        [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
                                        [d, [v, j],
                                            [f, m]
                                        ],
                                        [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
                                        [d, [v, j],
                                            [f, b]
                                        ],
                                        [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
                                        [d, [v, P],
                                            [f, b]
                                        ],
                                        [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i],
                                        [d, [v, P],
                                            [f, m]
                                        ],
                                        [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],
                                        [d, [v, "Lenovo"],
                                            [f, b]
                                        ],
                                        [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
                                        [
                                            [d, /_/g, " "],
                                            [v, "Nokia"],
                                            [f, m]
                                        ],
                                        [/(pixel c)\b/i],
                                        [d, [v, x],
                                            [f, b]
                                        ],
                                        [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
                                        [d, [v, x],
                                            [f, m]
                                        ],
                                        [/droid.+ ([c-g]\d{4}|so[-l]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
                                        [d, [v, M],
                                            [f, m]
                                        ],
                                        [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
                                        [
                                            [d, "Xperia Tablet"],
                                            [v, M],
                                            [f, b]
                                        ],
                                        [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
                                        [d, [v, "OnePlus"],
                                            [f, m]
                                        ],
                                        [/(alexa)webm/i, /(kf[a-z]{2}wi)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
                                        [d, [v, N],
                                            [f, b]
                                        ],
                                        [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
                                        [
                                            [d, /(.+)/g, "Fire Phone $1"],
                                            [v, N],
                                            [f, m]
                                        ],
                                        [/(playbook);[-\w\),; ]+(rim)/i],
                                        [d, v, [f, b]],
                                        [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
                                        [d, [v, k],
                                            [f, m]
                                        ],
                                        [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
                                        [d, [v, T],
                                            [f, b]
                                        ],
                                        [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
                                        [d, [v, T],
                                            [f, m]
                                        ],
                                        [/(nexus 9)/i],
                                        [d, [v, "HTC"],
                                            [f, b]
                                        ],
                                        [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic|sony)[-_ ]?([-\w]*)/i],
                                        [v, [d, /_/g, " "],
                                            [f, m]
                                        ],
                                        [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
                                        [d, [v, "Acer"],
                                            [f, b]
                                        ],
                                        [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
                                        [d, [v, "Meizu"],
                                            [f, m]
                                        ],
                                        [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
                                        [d, [v, "Sharp"],
                                            [f, m]
                                        ],
                                        [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i],
                                        [v, d, [f, m]],
                                        [/(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
                                        [v, d, [f, b]],
                                        [/(surface duo)/i],
                                        [d, [v, D],
                                            [f, b]
                                        ],
                                        [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
                                        [d, [v, "Fairphone"],
                                            [f, m]
                                        ],
                                        [/(u304aa)/i],
                                        [d, [v, "AT&T"],
                                            [f, m]
                                        ],
                                        [/\bsie-(\w*)/i],
                                        [d, [v, "Siemens"],
                                            [f, m]
                                        ],
                                        [/\b(rct\w+) b/i],
                                        [d, [v, "RCA"],
                                            [f, b]
                                        ],
                                        [/\b(venue[\d ]{2,7}) b/i],
                                        [d, [v, "Dell"],
                                            [f, b]
                                        ],
                                        [/\b(q(?:mv|ta)\w+) b/i],
                                        [d, [v, "Verizon"],
                                            [f, b]
                                        ],
                                        [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
                                        [d, [v, "Barnes & Noble"],
                                            [f, b]
                                        ],
                                        [/\b(tm\d{3}\w+) b/i],
                                        [d, [v, "NuVision"],
                                            [f, b]
                                        ],
                                        [/\b(k88) b/i],
                                        [d, [v, "ZTE"],
                                            [f, b]
                                        ],
                                        [/\b(nx\d{3}j) b/i],
                                        [d, [v, "ZTE"],
                                            [f, m]
                                        ],
                                        [/\b(gen\d{3}) b.+49h/i],
                                        [d, [v, "Swiss"],
                                            [f, m]
                                        ],
                                        [/\b(zur\d{3}) b/i],
                                        [d, [v, "Swiss"],
                                            [f, b]
                                        ],
                                        [/\b((zeki)?tb.*\b) b/i],
                                        [d, [v, "Zeki"],
                                            [f, b]
                                        ],
                                        [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
                                        [
                                            [v, "Dragon Touch"], d, [f, b]
                                        ],
                                        [/\b(ns-?\w{0,9}) b/i],
                                        [d, [v, "Insignia"],
                                            [f, b]
                                        ],
                                        [/\b((nxa|next)-?\w{0,9}) b/i],
                                        [d, [v, "NextBook"],
                                            [f, b]
                                        ],
                                        [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
                                        [
                                            [v, "Voice"], d, [f, m]
                                        ],
                                        [/\b(lvtel\-)?(v1[12]) b/i],
                                        [
                                            [v, "LvTel"], d, [f, m]
                                        ],
                                        [/\b(ph-1) /i],
                                        [d, [v, "Essential"],
                                            [f, m]
                                        ],
                                        [/\b(v(100md|700na|7011|917g).*\b) b/i],
                                        [d, [v, "Envizen"],
                                            [f, b]
                                        ],
                                        [/\b(trio[-\w\. ]+) b/i],
                                        [d, [v, "MachSpeed"],
                                            [f, b]
                                        ],
                                        [/\btu_(1491) b/i],
                                        [d, [v, "Rotor"],
                                            [f, b]
                                        ],
                                        [/(shield[\w ]+) b/i],
                                        [d, [v, "Nvidia"],
                                            [f, b]
                                        ],
                                        [/(sprint) (\w+)/i],
                                        [v, d, [f, m]],
                                        [/(kin\.[onetw]{3})/i],
                                        [
                                            [d, /\./g, " "],
                                            [v, D],
                                            [f, m]
                                        ],
                                        [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
                                        [d, [v, V],
                                            [f, b]
                                        ],
                                        [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
                                        [d, [v, V],
                                            [f, m]
                                        ],
                                        [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
                                        [v, d, [f, _]],
                                        [/droid.+; (shield) bui/i],
                                        [d, [v, "Nvidia"],
                                            [f, _]
                                        ],
                                        [/(playstation [345portablevi]+)/i],
                                        [d, [v, M],
                                            [f, _]
                                        ],
                                        [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
                                        [d, [v, D],
                                            [f, _]
                                        ],
                                        [/smart-tv.+(samsung)/i],
                                        [v, [f, E]],
                                        [/hbbtv.+maple;(\d+)/i],
                                        [
                                            [d, /^/, "SmartTV"],
                                            [v, L],
                                            [f, E]
                                        ],
                                        [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
                                        [
                                            [v, P],
                                            [f, E]
                                        ],
                                        [/(apple) ?tv/i],
                                        [v, [d, O + " TV"],
                                            [f, E]
                                        ],
                                        [/crkey/i],
                                        [
                                            [d, R + "cast"],
                                            [v, x],
                                            [f, E]
                                        ],
                                        [/droid.+aft(\w)( bui|\))/i],
                                        [d, [v, N],
                                            [f, E]
                                        ],
                                        [/\(dtv[\);].+(aquos)/i],
                                        [d, [v, "Sharp"],
                                            [f, E]
                                        ],
                                        [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i],
                                        [
                                            [v, $],
                                            [d, $],
                                            [f, E]
                                        ],
                                        [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
                                        [
                                            [f, E]
                                        ],
                                        [/((pebble))app/i],
                                        [v, d, [f, w]],
                                        [/droid.+; (glass) \d/i],
                                        [d, [v, x],
                                            [f, w]
                                        ],
                                        [/droid.+; (wt63?0{2,3})\)/i],
                                        [d, [v, V],
                                            [f, w]
                                        ],
                                        [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
                                        [v, [f, I]],
                                        [/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],
                                        [d, [f, m]],
                                        [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
                                        [d, [f, b]],
                                        [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
                                        [
                                            [f, b]
                                        ],
                                        [/(phone|mobile(?:[;\/]| safari)|pda(?=.+windows ce))/i],
                                        [
                                            [f, m]
                                        ],
                                        [/(android[-\w\. ]{0,9});.+buil/i],
                                        [d, [v, "Generic"]]
                                    ],
                                    engine: [
                                        [/windows.+ edge\/([\w\.]+)/i],
                                        [g, [h, "EdgeHTML"]],
                                        [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
                                        [g, [h, "Blink"]],
                                        [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i],
                                        [h, g],
                                        [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
                                        [g, h]
                                    ],
                                    os: [
                                        [/microsoft (windows) (vista|xp)/i],
                                        [h, g],
                                        [/(windows) nt 6\.2; (arm)/i, /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i, /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],
                                        [h, [g, Y, H]],
                                        [/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
                                        [
                                            [h, "Windows"],
                                            [g, Y, H]
                                        ],
                                        [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /cfnetwork\/.+darwin/i],
                                        [
                                            [g, /_/g, "."],
                                            [h, "iOS"]
                                        ],
                                        [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
                                        [
                                            [h, "Mac OS"],
                                            [g, /_/g, "."]
                                        ],
                                        [/droid ([\w\.]+)\b.+(android[- ]x86)/i],
                                        [g, h],
                                        [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i],
                                        [h, g],
                                        [/\(bb(10);/i],
                                        [g, [h, k]],
                                        [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
                                        [g, [h, "Symbian"]],
                                        [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
                                        [g, [h, C + " OS"]],
                                        [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
                                        [g, [h, "webOS"]],
                                        [/crkey\/([\d\.]+)/i],
                                        [g, [h, R + "cast"]],
                                        [/(cros) [\w]+ ([\w\.]+\w)/i],
                                        [
                                            [h, "Chromium OS"], g
                                        ],
                                        [/(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
                                        [h, g],
                                        [/(sunos) ?([\w\.\d]*)/i],
                                        [
                                            [h, "Solaris"], g
                                        ],
                                        [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i, /(unix) ?([\w\.]*)/i],
                                        [h, g]
                                    ]
                                },
                                J = function(e, t) {
                                    if (typeof e === c && (t = e, e = i), !(this instanceof J)) return new J(e, t).getResult();
                                    var o = e || (typeof n !== u && n.navigator && n.navigator.userAgent ? n.navigator.userAgent : r),
                                        s = t ? F(Q, t) : Q;
                                    return this.getBrowser = function() {
                                        var e = {};
                                        return e[h] = i, e[g] = i, W.call(e, o, s.browser), e.major = X(e.version), e
                                    }, this.getCPU = function() {
                                        var e = {};
                                        return e[y] = i, W.call(e, o, s.cpu), e
                                    }, this.getDevice = function() {
                                        var e = {};
                                        return e[v] = i, e[d] = i, e[f] = i, W.call(e, o, s.device), e
                                    }, this.getEngine = function() {
                                        var e = {};
                                        return e[h] = i, e[g] = i, W.call(e, o, s.engine), e
                                    }, this.getOS = function() {
                                        var e = {};
                                        return e[h] = i, e[g] = i, W.call(e, o, s.os), e
                                    }, this.getResult = function() {
                                        return {
                                            ua: this.getUA(),
                                            browser: this.getBrowser(),
                                            engine: this.getEngine(),
                                            os: this.getOS(),
                                            device: this.getDevice(),
                                            cpu: this.getCPU()
                                        }
                                    }, this.getUA = function() {
                                        return o
                                    }, this.setUA = function(e) {
                                        return o = typeof e === p && e.length > S ? $(e, S) : e, this
                                    }, this.setUA(o), this
                                };
                            J.VERSION = o, J.BROWSER = K([h, g, l]), J.CPU = K([y]), J.DEVICE = K([d, v, f, _, m, E, b, w, I]), J.ENGINE = J.OS = K([h, g]), e.exports && (t = e.exports = J), t.UAParser = J;
                            var Z = typeof n !== u && (n.jQuery || n.Zepto);
                            if (Z && !Z.ua) {
                                var ee = new J;
                                Z.ua = ee.getResult(), Z.ua.get = function() {
                                    return ee.getUA()
                                }, Z.ua.set = function(e) {
                                    ee.setUA(e);
                                    var t = ee.getResult();
                                    for (var n in t) Z.ua[n] = t[n]
                                }
                            }
                        }("object" === typeof window ? window : Re)
                    })),
                    ot = (it.UAParser, function e(t) {
                        return t ? (t ^ 16 * Math.random() >> t / 4).toString(16) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, e)
                    }),
                    rt = {
                        getLanguage: function() {
                            return "undefined" !== typeof navigator && (navigator.languages && navigator.languages[0] || navigator.language || navigator.userLanguage) || ""
                        }
                    },
                    st = {
                        US: "US",
                        EU: "EU"
                    },
                    at = function(e) {
                        var t = O.EVENT_LOG_URL;
                        switch (e) {
                            case st.EU:
                                t = O.EVENT_LOG_EU_URL;
                                break;
                            case st.US:
                                t = O.EVENT_LOG_URL
                        }
                        return t
                    },
                    ut = function(e) {
                        var t = O.DYNAMIC_CONFIG_URL;
                        switch (e) {
                            case st.EU:
                                t = O.DYNAMIC_CONFIG_EU_URL;
                                break;
                            case st.US:
                                t = O.DYNAMIC_CONFIG_URL
                        }
                        return t
                    },
                    ct = "8.10.0",
                    pt = {
                        apiEndpoint: O.EVENT_LOG_URL,
                        batchEvents: !1,
                        cookieExpiration: 365,
                        cookieName: "amplitude_id",
                        sameSiteCookie: "Lax",
                        cookieForceUpgrade: !1,
                        deferInitialization: !1,
                        disableCookies: !1,
                        deviceIdFromUrlParam: !1,
                        domain: "",
                        eventUploadPeriodMillis: 3e4,
                        eventUploadThreshold: 30,
                        forceHttps: !0,
                        includeFbclid: !1,
                        includeGclid: !1,
                        includeReferrer: !1,
                        includeUtm: !1,
                        language: rt.getLanguage(),
                        library: {
                            name: "amplitude-js",
                            version: ct
                        },
                        logLevel: "WARN",
                        logAttributionCapturedEvent: !1,
                        optOut: !1,
                        onError: function() {},
                        onExitPage: function() {},
                        plan: {
                            branch: "",
                            source: "",
                            version: ""
                        },
                        platform: "Web",
                        savedMaxCount: 1e3,
                        saveEvents: !0,
                        saveParamsReferrerOncePerSession: !0,
                        secureCookie: !1,
                        sessionTimeout: 18e5,
                        storage: O.STORAGE_DEFAULT,
                        trackingOptions: {
                            city: !0,
                            country: !0,
                            carrier: !0,
                            device_manufacturer: !0,
                            device_model: !0,
                            dma: !0,
                            ip_address: !0,
                            language: !0,
                            os_name: !0,
                            os_version: !0,
                            platform: !0,
                            region: !0,
                            version_name: !0
                        },
                        transport: O.TRANSPORT_HTTP,
                        unsetParamsReferrerOnNewSession: !1,
                        unsentKey: "amplitude_unsent",
                        unsentIdentifyKey: "amplitude_unsent_identify",
                        uploadBatchSize: 100,
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                            "Cross-Origin-Resource-Policy": "cross-origin"
                        },
                        serverZone: st.US,
                        useDynamicConfig: !1,
                        serverZoneBasedApi: !1
                    },
                    lt = new(function() {
                        function e() {
                            return t(this, e), e.instance || (this.ingestionEndpoint = O.EVENT_LOG_URL, e.instance = this), e.instance
                        }
                        return s(e, [{
                            key: "refresh",
                            value: function(e, t, n) {
                                var i = "https";
                                t || "https:" === window.location.protocol || (i = "http");
                                var o = i + "://" + ut(e),
                                    r = this;
                                if (window.XDomainRequest) {
                                    var s = new window.XDomainRequest;
                                    s.open("GET", o, !0), s.onload = function() {
                                        var e = JSON.parse(s.responseText);
                                        r.ingestionEndpoint = e.ingestionEndpoint, n && n()
                                    }, s.onerror = function() {}, s.ontimeout = function() {}, s.onprogress = function() {}, s.send()
                                } else {
                                    var a = new XMLHttpRequest;
                                    a.open("GET", o, !0), a.onreadystatechange = function() {
                                        if (4 === a.readyState && 200 === a.status) {
                                            var e = JSON.parse(a.responseText);
                                            r.ingestionEndpoint = e.ingestionEndpoint, n && n()
                                        }
                                    }, a.send()
                                }
                            }
                        }]), e
                    }()),
                    dt = function(e) {
                        _() || X.log.warn("amplitude-js will not work in a non-browser environment. If you are planning to add Amplitude to a node environment, please use @amplitude/node"), this._instanceName = X.isEmptyString(e) ? O.DEFAULT_INSTANCE : e.toLowerCase(), this._unsentEvents = [], this._unsentIdentifys = [], this._ua = new it(navigator.userAgent).getResult(), this.options = u({}, pt, {
                            trackingOptions: u({}, pt.trackingOptions)
                        }), this.cookieStorage = (new ve).getStorage(), this._q = [], this._sending = !1, this._updateScheduled = !1, this._onInit = [], this._eventId = 0, this._identifyId = 0, this._lastEventTime = null, this._newSession = !1, this._sequenceNumber = 0, this._sessionId = null, this._isInitialized = !1, this._userAgent = navigator && navigator.userAgent || null
                    };
                dt.prototype.Identify = Ae, dt.prototype.Revenue = nt, dt.prototype.init = function(e, t, n, i) {
                    var o = this;
                    if ("string" !== R(e) || X.isEmptyString(e)) X.log.error("Invalid apiKey. Please re-initialize with a valid apiKey");
                    else try {
                        ft(this.options, n), _() && void 0 !== window.Prototype && Array.prototype.toJSON && (w(), X.log.warn("Prototype.js injected Array.prototype.toJSON. Deleting Array.prototype.toJSON to prevent double-stringify")), this.options.cookieName !== pt.cookieName && X.log.warn("The cookieName option is deprecated. We will be ignoring it for newer cookies"), this.options.serverZoneBasedApi && (this.options.apiEndpoint = at(this.options.serverZone)), this._refreshDynamicConfig(), this.options.apiKey = e, this._storageSuffix = "_" + e + (this._instanceName === O.DEFAULT_INSTANCE ? "" : "_" + this._instanceName), this._storageSuffixV5 = e.slice(0, 6), this._oldCookiename = this.options.cookieName + this._storageSuffix, this._unsentKey = this.options.unsentKey + this._storageSuffix, this._unsentIdentifyKey = this.options.unsentIdentifyKey + this._storageSuffix, this._cookieName = O.COOKIE_PREFIX + "_" + this._storageSuffixV5, this.cookieStorage.options({
                            expirationDays: this.options.cookieExpiration,
                            domain: this.options.domain,
                            secure: this.options.secureCookie,
                            sameSite: this.options.sameSiteCookie
                        }), this._metadataStorage = new ye({
                            storageKey: this._cookieName,
                            disableCookies: this.options.disableCookies,
                            expirationDays: this.options.cookieExpiration,
                            domain: this.options.domain,
                            secure: this.options.secureCookie,
                            sameSite: this.options.sameSiteCookie,
                            storage: this.options.storage
                        });
                        var r = !!this.cookieStorage.get(this._oldCookiename),
                            s = !!this._metadataStorage.load();
                        this._useOldCookie = !s && r && !this.options.cookieForceUpgrade;
                        var a = s || r;
                        if (this.options.domain = this.cookieStorage.options().domain, this.options.deferInitialization && !a) return void this._deferInitialization(e, t, n, i);
                        "string" === R(this.options.logLevel) && X.setLogLevel(this.options.logLevel);
                        var u = It(this);
                        this._apiPropertiesTrackingOptions = Object.keys(u).length > 0 ? {
                            tracking_options: u
                        } : {}, this.options.cookieForceUpgrade && r && (s || gt(this), this.cookieStorage.remove(this._oldCookiename)), vt(this), this._pendingReadStorage = !0;
                        var c = function(e) {
                            n && n.deviceId && !X.validateDeviceId(n.deviceId) && (X.log.error('Invalid device ID rejected. Randomly generated UUID will be used instead of "'.concat(n.deviceId, '"')), delete n.deviceId), o.options.deviceId = o._getInitialDeviceId(n && n.deviceId, e), o.options.userId = "string" === R(t) && !X.isEmptyString(t) && t || "number" === R(t) && t.toString() || o.options.userId || null;
                            var i = (new Date).getTime();
                            (!o._sessionId || !o._lastEventTime || i - o._lastEventTime > o.options.sessionTimeout) && (o.options.unsetParamsReferrerOnNewSession && o._unsetUTMParams(), o._newSession = !0, o._sessionId = i, o.options.saveParamsReferrerOncePerSession && o._trackParamsAndReferrer()), o.options.saveParamsReferrerOncePerSession || o._trackParamsAndReferrer(), o.options.saveEvents && (ht(o._unsentEvents), ht(o._unsentIdentifys)), o._lastEventTime = i, _t(o), o._pendingReadStorage = !1, o._sendEventsIfReady();
                            for (var r = 0; r < o._onInit.length; r++) o._onInit[r](o);
                            o._onInit = [], o._isInitialized = !0
                        };
                        this.options.saveEvents && (this._unsentEvents = this._loadSavedUnsentEvents(this.options.unsentKey).map((function(e) {
                            return {
                                event: e
                            }
                        })).concat(this._unsentEvents), this._unsentIdentifys = this._loadSavedUnsentEvents(this.options.unsentIdentifyKey).map((function(e) {
                            return {
                                event: e
                            }
                        })).concat(this._unsentIdentifys)), c(), this.runQueuedFunctions(), "function" === R(i) && i(this);
                        var p = this.options.onExitPage;
                        if ("function" === R(p) && !this.pageHandlersAdded) {
                            this.pageHandlersAdded = !0;
                            var l = function() {
                                var e = o.options.transport;
                                o.setTransport(O.TRANSPORT_BEACON), p(), o.setTransport(e)
                            };
                            window.addEventListener("pagehide", (function() {
                                l()
                            }), !1)
                        }
                    } catch (d) {
                        X.log.error(d), "function" === R(n.onError) && n.onError(d)
                    }
                }, dt.prototype.deleteLowerLevelDomainCookies = function() {
                    var e = ne(),
                        t = this.options.domain && "." === this.options.domain[0] ? this.options.domain.slice(1) : this.options.domain;
                    if (t && e !== t && new RegExp(t + "$").test(e)) {
                        for (var n = e.split("."), i = t.split("."), o = n.length; o > i.length; --o) {
                            var r = n.slice(n.length - o).join(".");
                            te.set(this._cookieName, null, {
                                domain: "." + r
                            })
                        }
                        te.set(this._cookieName, null, {})
                    }
                }, dt.prototype._getInitialDeviceId = function(e, t) {
                    if (e) return e;
                    if (this.options.deviceIdFromUrlParam) {
                        var n = this._getDeviceIdFromUrlParam(this._getUrlParams());
                        if (n) return n
                    }
                    return this.options.deviceId ? this.options.deviceId : t || Y()
                };
                var ht = function(e) {
                    for (var t = 0; t < e.length; t++) {
                        var n = e[t].event.user_properties,
                            i = e[t].event.event_properties,
                            o = e[t].event.groups;
                        e[t].event.user_properties = X.validateProperties(n), e[t].event.event_properties = X.validateProperties(i), e[t].event.groups = X.validateGroups(o)
                    }
                };
                dt.prototype._trackParamsAndReferrer = function() {
                    var e, t, n, i;
                    if (this.options.includeUtm && (e = this._initUtmData()), this.options.includeReferrer && (t = this._saveReferrer(this._getReferrer())), this.options.includeGclid && (n = this._saveGclid(this._getUrlParams())), this.options.includeFbclid && (i = this._saveFbclid(this._getUrlParams())), this.options.logAttributionCapturedEvent) {
                        var o = u({}, e, t, n, i);
                        Object.keys(o).length > 0 && this.logEvent(O.ATTRIBUTION_EVENT, o)
                    }
                };
                var ft = function e(t, n) {
                    if ("object" === R(n)) {
                        var i = new Set(["headers"]),
                            o = function(i) {
                                if (Object.prototype.hasOwnProperty.call(t, i)) {
                                    var o = n[i],
                                        r = R(t[i]);
                                    ("transport" !== i || X.validateTransport(o)) && X.validateInput(o, i + " option", r) && ("boolean" === r ? t[i] = !!o : "string" === r && !X.isEmptyString(o) || "number" === r && o > 0 || "function" === r ? t[i] = o : "object" === r && e(t[i], o))
                                }
                            };
                        for (var r in n) i.has(r) ? t[r] = u({}, t[r], n[r]) : Object.prototype.hasOwnProperty.call(n, r) && o(r)
                    }
                };
                dt.prototype.runQueuedFunctions = function() {
                    var e = this._q;
                    this._q = [];
                    for (var t = 0; t < e.length; t++) {
                        var n = this[e[t][0]];
                        "function" === R(n) && n.apply(this, e[t].slice(1))
                    }
                }, dt.prototype._apiKeySet = function(e) {
                    return !X.isEmptyString(this.options.apiKey) || (X.log.error("Invalid apiKey. Please set a valid apiKey with init() before calling " + e), !1)
                }, dt.prototype._loadSavedUnsentEvents = function(e) {
                    var t = this._getFromStorage(fe, e),
                        n = this._parseSavedUnsentEventsString(t, e);
                    return this._setInStorage(fe, e, JSON.stringify(n)), n
                }, dt.prototype._parseSavedUnsentEventsString = function(e, t) {
                    if (X.isEmptyString(e)) return [];
                    if ("string" === R(e)) try {
                        var n = JSON.parse(e);
                        if ("array" === R(n)) return n
                    } catch (Ct) {}
                    return X.log.error("Unable to load " + t + " events. Restart with a new empty queue."), []
                }, dt.prototype.isNewSession = function() {
                    return this._newSession
                }, dt.prototype.onInit = function(e) {
                    this._isInitialized ? e(this) : this._onInit.push(e)
                }, dt.prototype.getSessionId = function() {
                    return this._sessionId
                }, dt.prototype.nextEventId = function() {
                    return this._eventId++, this._eventId
                }, dt.prototype.nextIdentifyId = function() {
                    return this._identifyId++, this._identifyId
                }, dt.prototype.nextSequenceNumber = function() {
                    return this._sequenceNumber++, this._sequenceNumber
                }, dt.prototype._unsentCount = function() {
                    return this._unsentEvents.length + this._unsentIdentifys.length
                }, dt.prototype._sendEventsIfReady = function() {
                    return 0 !== this._unsentCount() && (this.options.batchEvents ? this._unsentCount() >= this.options.eventUploadThreshold || this.options.transport === O.TRANSPORT_BEACON ? (this.sendEvents(), !0) : (this._updateScheduled || (this._updateScheduled = !0, setTimeout(function() {
                        this._updateScheduled = !1, this.sendEvents()
                    }.bind(this), this.options.eventUploadPeriodMillis)), !1) : (this.sendEvents(), !0))
                }, dt.prototype.clearStorage = function() {
                    return this._metadataStorage.clear()
                }, dt.prototype._getFromStorage = function(e, t) {
                    return e.getItem(t + this._storageSuffix)
                }, dt.prototype._setInStorage = function(e, t, n) {
                    e.setItem(t + this._storageSuffix, n)
                };
                var vt = function(e) {
                        if (e._useOldCookie) {
                            var t = e.cookieStorage.get(e._oldCookiename);
                            "object" !== R(t) || yt(e, t)
                        } else {
                            var n = e._metadataStorage.load();
                            "object" === R(n) && yt(e, n)
                        }
                    },
                    gt = function(e) {
                        var t = e.cookieStorage.get(e._oldCookiename);
                        "object" === R(t) && (yt(e, t), _t(e))
                    },
                    yt = function(e, t) {
                        t.deviceId && (e.options.deviceId = t.deviceId), t.userId && (e.options.userId = t.userId), null !== t.optOut && void 0 !== t.optOut && !1 !== t.optOut && (e.options.optOut = t.optOut), t.sessionId && (e._sessionId = parseInt(t.sessionId, 10)), t.lastEventTime && (e._lastEventTime = parseInt(t.lastEventTime, 10)), t.eventId && (e._eventId = parseInt(t.eventId, 10)), t.identifyId && (e._identifyId = parseInt(t.identifyId, 10)), t.sequenceNumber && (e._sequenceNumber = parseInt(t.sequenceNumber, 10))
                    },
                    _t = function(e) {
                        var t = {
                            deviceId: e.options.deviceId,
                            userId: e.options.userId,
                            optOut: e.options.optOut,
                            sessionId: e._sessionId,
                            lastEventTime: e._lastEventTime,
                            eventId: e._eventId,
                            identifyId: e._identifyId,
                            sequenceNumber: e._sequenceNumber
                        };
                        e._useOldCookie ? e.cookieStorage.set(e.options.cookieName + e._storageSuffix, t) : e._metadataStorage.save(t)
                    };
                dt.prototype._initUtmData = function(e, t) {
                    e = e || this._getUrlParams(), t = t || this.cookieStorage.get("__utmz");
                    var n = _e(t, e);
                    return mt(this, n), n
                }, dt.prototype._unsetUTMParams = function() {
                    var e = new Ae;
                    e.unset(O.REFERRER), e.unset(O.UTM_SOURCE), e.unset(O.UTM_MEDIUM), e.unset(O.UTM_CAMPAIGN), e.unset(O.UTM_TERM), e.unset(O.UTM_CONTENT), this.identify(e)
                };
                var mt = function(e, t) {
                    if ("object" === R(t) && 0 !== Object.keys(t).length) {
                        var n = new Ae;
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (n.setOnce("initial_" + i, t[i]), n.set(i, t[i]));
                        e.identify(n)
                    }
                };
                dt.prototype._getReferrer = function() {
                    return document.referrer
                }, dt.prototype._getUrlParams = function() {
                    return location.search
                }, dt.prototype._saveGclid = function(e) {
                    var t = X.getQueryParam("gclid", e);
                    if (!X.isEmptyString(t)) {
                        var n = {
                            gclid: t
                        };
                        return mt(this, n), n
                    }
                }, dt.prototype._saveFbclid = function(e) {
                    var t = X.getQueryParam("fbclid", e);
                    if (!X.isEmptyString(t)) {
                        var n = {
                            fbclid: t
                        };
                        return mt(this, n), n
                    }
                }, dt.prototype._getDeviceIdFromUrlParam = function(e) {
                    return X.getQueryParam(O.AMP_DEVICE_ID_PARAM, e)
                }, dt.prototype._getReferringDomain = function(e) {
                    if (X.isEmptyString(e)) return null;
                    var t = e.split("/");
                    return t.length >= 3 ? t[2] : null
                }, dt.prototype._saveReferrer = function(e) {
                    if (!X.isEmptyString(e)) {
                        var t = {
                            referrer: e,
                            referring_domain: this._getReferringDomain(e)
                        };
                        return mt(this, t), t
                    }
                }, dt.prototype.saveEvents = function() {
                    try {
                        var e = JSON.stringify(this._unsentEvents.map((function(e) {
                            return e.event
                        })));
                        this._setInStorage(fe, this.options.unsentKey, e)
                    } catch (Ct) {}
                    try {
                        var t = JSON.stringify(this._unsentIdentifys.map((function(e) {
                            return e.event
                        })));
                        this._setInStorage(fe, this.options.unsentIdentifyKey, t)
                    } catch (Ct) {}
                }, dt.prototype.setDomain = function(e) {
                    if (this._shouldDeferCall()) return this._q.push(["setDomain"].concat(Array.prototype.slice.call(arguments, 0)));
                    if (X.validateInput(e, "domain", "string")) try {
                        this.cookieStorage.options({
                            expirationDays: this.options.cookieExpiration,
                            secure: this.options.secureCookie,
                            domain: e,
                            sameSite: this.options.sameSiteCookie
                        }), this.options.domain = this.cookieStorage.options().domain, vt(this), _t(this)
                    } catch (Ct) {
                        X.log.error(Ct)
                    }
                }, dt.prototype.setUserId = function(e) {
                    if (this._shouldDeferCall()) return this._q.push(["setUserId"].concat(Array.prototype.slice.call(arguments, 0)));
                    try {
                        this.options.userId = void 0 !== e && null !== e && "" + e || null, _t(this)
                    } catch (Ct) {
                        X.log.error(Ct)
                    }
                }, dt.prototype.setGroup = function(e, t) {
                    if (this._shouldDeferCall()) return this._q.push(["setGroup"].concat(Array.prototype.slice.call(arguments, 0)));
                    if (this._apiKeySet("setGroup()") && X.validateInput(e, "groupType", "string") && !X.isEmptyString(e)) {
                        var n = {};
                        n[e] = t;
                        var i = (new Ae).set(e, t);
                        this._logEvent(O.IDENTIFY_EVENT, null, null, i.userPropertiesOperations, n, null, null, null)
                    }
                }, dt.prototype.setOptOut = function(e) {
                    if (this._shouldDeferCall()) return this._q.push(["setOptOut"].concat(Array.prototype.slice.call(arguments, 0)));
                    if (X.validateInput(e, "enable", "boolean")) try {
                        this.options.optOut = e, _t(this)
                    } catch (Ct) {
                        X.log.error(Ct)
                    }
                }, dt.prototype.setSessionId = function(e) {
                    if (X.validateInput(e, "sessionId", "number")) try {
                        this._sessionId = e, _t(this)
                    } catch (Ct) {
                        X.log.error(Ct)
                    }
                }, dt.prototype.resetSessionId = function() {
                    this.setSessionId((new Date).getTime())
                }, dt.prototype.regenerateDeviceId = function() {
                    if (this._shouldDeferCall()) return this._q.push(["regenerateDeviceId"].concat(Array.prototype.slice.call(arguments, 0)));
                    this.setDeviceId(Y())
                }, dt.prototype.setDeviceId = function(e) {
                    if (this._shouldDeferCall()) return this._q.push(["setDeviceId"].concat(Array.prototype.slice.call(arguments, 0)));
                    if (X.validateDeviceId(e)) try {
                        X.isEmptyString(e) || (this.options.deviceId = "" + e, _t(this))
                    } catch (Ct) {
                        X.log.error(Ct)
                    }
                }, dt.prototype.setTransport = function(e) {
                    if (this._shouldDeferCall()) return this._q.push(["setTransport"].concat(Array.prototype.slice.call(arguments, 0)));
                    X.validateTransport(e) && (this.options.transport = e)
                }, dt.prototype.setUserProperties = function(e) {
                    if (this._shouldDeferCall()) return this._q.push(["setUserProperties"].concat(Array.prototype.slice.call(arguments, 0)));
                    if (this._apiKeySet("setUserProperties()") && X.validateInput(e, "userProperties", "object")) {
                        var t = X.truncate(X.validateProperties(e));
                        if (0 !== Object.keys(t).length) {
                            var n = new Ae;
                            for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && n.set(i, t[i]);
                            this.identify(n)
                        }
                    }
                }, dt.prototype.clearUserProperties = function() {
                    if (this._shouldDeferCall()) return this._q.push(["clearUserProperties"].concat(Array.prototype.slice.call(arguments, 0)));
                    if (this._apiKeySet("clearUserProperties()")) {
                        var e = new Ae;
                        e.clearAll(), this.identify(e)
                    }
                };
                var bt = function(e, t) {
                    for (var n = 0; n < t._q.length; n++) {
                        var i = e[t._q[n][0]];
                        "function" === R(i) && i.apply(e, t._q[n].slice(1))
                    }
                    return e
                };
                dt.prototype.identify = function(e, t, n) {
                    if (this._shouldDeferCall()) return this._q.push(["identify"].concat(Array.prototype.slice.call(arguments, 0)));
                    if (this._apiKeySet("identify()"))
                        if ("object" === R(e) && Object.prototype.hasOwnProperty.call(e, "_q") && (e = bt(new Ae, e)), e instanceof Ae) {
                            if (Object.keys(e.userPropertiesOperations).length > 0) return this._logEvent(O.IDENTIFY_EVENT, null, null, e.userPropertiesOperations, null, null, null, t, n);
                            Nt(t, n, 0, "No request sent", {
                                reason: "No user property operations"
                            })
                        } else X.log.error("Invalid identify input type. Expected Identify object but saw " + R(e)), Nt(t, n, 0, "No request sent", {
                            reason: "Invalid identify input type"
                        });
                    else Nt(t, n, 0, "No request sent", {
                        reason: "API key is not set"
                    })
                }, dt.prototype.groupIdentify = function(e, t, n, i, o) {
                    if (this._shouldDeferCall()) return this._q.push(["groupIdentify"].concat(Array.prototype.slice.call(arguments, 0)));
                    if (this._apiKeySet("groupIdentify()"))
                        if (X.validateInput(e, "group_type", "string") && !X.isEmptyString(e))
                            if (null !== t && void 0 !== t)
                                if ("object" === R(n) && Object.prototype.hasOwnProperty.call(n, "_q") && (n = bt(new Ae, n)), n instanceof Ae) {
                                    if (Object.keys(n.userPropertiesOperations).length > 0) return this._logEvent(O.GROUP_IDENTIFY_EVENT, null, null, null, a({}, e, t), n.userPropertiesOperations, null, i, o);
                                    Nt(i, o, 0, "No request sent", {
                                        reason: "No group property operations"
                                    })
                                } else X.log.error("Invalid identify input type. Expected Identify object but saw " + R(n)), Nt(i, o, 0, "No request sent", {
                                    reason: "Invalid identify input type"
                                });
                    else Nt(i, o, 0, "No request sent", {
                        reason: "Invalid group name"
                    });
                    else Nt(i, o, 0, "No request sent", {
                        reason: "Invalid group type"
                    });
                    else Nt(i, o, 0, "No request sent", {
                        reason: "API key is not set"
                    })
                }, dt.prototype.setVersionName = function(e) {
                    if (this._shouldDeferCall()) return this._q.push(["setVersionName"].concat(Array.prototype.slice.call(arguments, 0)));
                    X.validateInput(e, "versionName", "string") && (this.options.versionName = e)
                }, dt.prototype._logEvent = function(e, t, n, i, o, r, s, a, c) {
                    if (vt(this), e)
                        if (this.options.optOut) Nt(a, c, 0, "No request sent", {
                            reason: "optOut is set to true"
                        });
                        else try {
                            var p;
                            p = e === O.IDENTIFY_EVENT || e === O.GROUP_IDENTIFY_EVENT ? this.nextIdentifyId() : this.nextEventId();
                            var l = this.nextSequenceNumber(),
                                d = "number" === R(s) ? s : (new Date).getTime();
                            (!this._sessionId || !this._lastEventTime || d - this._lastEventTime > this.options.sessionTimeout) && (this._sessionId = d), this._lastEventTime = d, _t(this);
                            var h = this._ua.browser.name,
                                f = this._ua.browser.major,
                                v = this._ua.device.model || this._ua.os.name,
                                g = this._ua.device.vendor;
                            i = i || {};
                            var y = u({}, this._apiPropertiesTrackingOptions);
                            n = u({}, n || {}, y), t = t || {}, o = o || {}, r = r || {};
                            var _ = {
                                device_id: this.options.deviceId,
                                user_id: this.options.userId,
                                timestamp: d,
                                event_id: p,
                                session_id: this._sessionId || -1,
                                event_type: e,
                                version_name: this.options.versionName || null,
                                platform: wt(this, "platform") ? this.options.platform : null,
                                os_name: wt(this, "os_name") && h || null,
                                os_version: wt(this, "os_version") && f || null,
                                device_model: wt(this, "device_model") && v || null,
                                device_manufacturer: wt(this, "device_manufacturer") && g || null,
                                language: wt(this, "language") ? this.options.language : null,
                                api_properties: n,
                                event_properties: X.truncate(X.validateProperties(t)),
                                user_properties: X.truncate(X.validateProperties(i)),
                                uuid: ot(),
                                library: this.options.library,
                                sequence_number: l,
                                groups: X.truncate(X.validateGroups(o)),
                                group_properties: X.truncate(X.validateProperties(r)),
                                user_agent: this._userAgent
                            };
                            return Et(this) && (_.plan = {
                                branch: this.options.plan.branch || void 0,
                                source: this.options.plan.source || void 0,
                                version: this.options.plan.version || void 0
                            }), e === O.IDENTIFY_EVENT || e === O.GROUP_IDENTIFY_EVENT ? (this._unsentIdentifys.push({
                                event: _,
                                callback: a,
                                errorCallback: c
                            }), this._limitEventsQueued(this._unsentIdentifys)) : (this._unsentEvents.push({
                                event: _,
                                callback: a,
                                errorCallback: c
                            }), this._limitEventsQueued(this._unsentEvents)), this.options.saveEvents && this.saveEvents(), this._sendEventsIfReady(), p
                        } catch (Ct) {
                            X.log.error(Ct)
                        } else Nt(a, c, 0, "No request sent", {
                            reason: "Missing eventType"
                        })
                };
                var Et = function(e) {
                        return e.options.plan && (e.options.plan.source || e.options.plan.branch || e.options.plan.version)
                    },
                    wt = function(e, t) {
                        return !!e.options.trackingOptions[t]
                    },
                    It = function(e) {
                        for (var t = ["city", "country", "dma", "ip_address", "region"], n = {}, i = 0; i < t.length; i++) {
                            var o = t[i];
                            wt(e, o) || (n[o] = !1)
                        }
                        return n
                    };
                dt.prototype._limitEventsQueued = function(e) {
                    e.length > this.options.savedMaxCount && e.splice(0, e.length - this.options.savedMaxCount).forEach((function(e) {
                        Nt(e.callback, e.errorCallback, 0, "No request sent", {
                            reason: "Event dropped because options.savedMaxCount exceeded. User may be offline or have a content blocker"
                        })
                    }))
                }, dt.prototype.logEvent = function(e, t, n, i) {
                    return this._shouldDeferCall() ? this._q.push(["logEvent"].concat(Array.prototype.slice.call(arguments, 0))) : this.logEventWithTimestamp(e, t, null, n, i)
                }, dt.prototype.logEventWithTimestamp = function(e, t, n, i, o) {
                    return this._shouldDeferCall() ? this._q.push(["logEventWithTimestamp"].concat(Array.prototype.slice.call(arguments, 0))) : this._apiKeySet("logEvent()") ? X.validateInput(e, "eventType", "string") ? X.isEmptyString(e) ? (Nt(i, o, 0, "No request sent", {
                        reason: "Missing eventType"
                    }), -1) : this._logEvent(e, t, null, null, null, null, n, i, o) : (Nt(i, o, 0, "No request sent", {
                        reason: "Invalid type for eventType"
                    }), -1) : (Nt(i, o, 0, "No request sent", {
                        reason: "API key not set"
                    }), -1)
                }, dt.prototype.logEventWithGroups = function(e, t, n, i, o) {
                    return this._shouldDeferCall() ? this._q.push(["logEventWithGroups"].concat(Array.prototype.slice.call(arguments, 0))) : this._apiKeySet("logEventWithGroups()") ? X.validateInput(e, "eventType", "string") ? this._logEvent(e, t, null, null, n, null, null, i, o) : (Nt(event.callback, event.errorCallback, 0, "No request sent", {
                        reason: "Invalid type for eventType"
                    }), -1) : (Nt(event.callback, event.errorCallback, 0, "No request sent", {
                        reason: "API key not set"
                    }), -1)
                };
                var St = function(e) {
                        return !isNaN(parseFloat(e)) && isFinite(e)
                    },
                    Nt = function(e, t, n, i, o) {
                        "function" === R(e) && e(n, i, o), "function" === R(t) && t(n, i, o)
                    };
                dt.prototype.logRevenueV2 = function(e) {
                    if (this._shouldDeferCall()) return this._q.push(["logRevenueV2"].concat(Array.prototype.slice.call(arguments, 0)));
                    if (this._apiKeySet("logRevenueV2()"))
                        if ("object" === R(e) && Object.prototype.hasOwnProperty.call(e, "_q") && (e = bt(new nt, e)), e instanceof nt) {
                            if (e && e._isValidRevenue()) return this.logEvent(O.REVENUE_EVENT, e._toJSONObject())
                        } else X.log.error("Invalid revenue input type. Expected Revenue object but saw " + R(e))
                }, dt.prototype.logRevenue = function(e, t, n) {
                    return this._shouldDeferCall() ? this._q.push(["logRevenue"].concat(Array.prototype.slice.call(arguments, 0))) : this._apiKeySet("logRevenue()") && St(e) && (void 0 === t || St(t)) ? this._logEvent(O.REVENUE_EVENT, {}, {
                        productId: n,
                        special: "revenue_amount",
                        quantity: t || 1,
                        price: e
                    }, null, null, null, null, null) : -1
                }, dt.prototype._logErrorsOnEvents = function(e, t, n, i) {
                    for (var o = ["_unsentEvents", "_unsentIdentifys"], r = 0; r < o.length; r++)
                        for (var s = o[r], a = "_unsentEvents" === s ? e : t, u = 0; u < this[s].length; u++) {
                            var c = this[s][u];
                            c.event.event_id <= a && c.errorCallback && c.errorCallback(n, i)
                        }
                }, dt.prototype.removeEvents = function(e, t, n, i) {
                    Ot(this, "_unsentEvents", e, n, i), Ot(this, "_unsentIdentifys", t, n, i)
                };
                var Ot = function(e, t, n, i, o) {
                    if (!(n < 0)) {
                        for (var r = [], s = 0; s < e[t].length; s++) {
                            var a = e[t][s];
                            a.event.event_id > n ? r.push(a) : a.callback && a.callback(i, o)
                        }
                        e[t] = r
                    }
                };
                dt.prototype.sendEvents = function() {
                    if (this._apiKeySet("sendEvents()")) {
                        if (this.options.optOut) this.removeEvents(1 / 0, 1 / 0, 0, "No request sent", {
                            reason: "Opt out is set to true"
                        });
                        else if (0 !== this._unsentCount()) {
                            if (this.options.transport !== O.TRANSPORT_BEACON) {
                                if (this._sending) return;
                                this._sending = !0
                            }
                            var e = (this.options.forceHttps || "https:" === window.location.protocol ? "https" : "http") + "://" + this.options.apiEndpoint,
                                t = Math.min(this._unsentCount(), this.options.uploadBatchSize),
                                n = this._mergeEventsAndIdentifys(t),
                                i = n.maxEventId,
                                o = n.maxIdentifyId,
                                r = JSON.stringify(n.eventsToSend.map((function(e) {
                                    return e.event
                                }))),
                                s = (new Date).getTime(),
                                a = {
                                    client: this.options.apiKey,
                                    e: r,
                                    v: O.API_VERSION,
                                    upload_time: s,
                                    checksum: xe(O.API_VERSION + this.options.apiKey + r + s)
                                };
                            if (this.options.transport !== O.TRANSPORT_BEACON) {
                                var u = this;
                                new et(e, a, this.options.headers).send((function(e, n) {
                                    u._sending = !1;
                                    try {
                                        200 === e && "success" === n ? (u.removeEvents(i, o, e, n), u.options.saveEvents && u.saveEvents(), u._sendEventsIfReady()) : (u._logErrorsOnEvents(i, o, e, n), 413 === e && (1 === u.options.uploadBatchSize && u.removeEvents(i, o, e, n), u.options.uploadBatchSize = Math.ceil(t / 2), u.sendEvents()))
                                    } catch (Ct) {}
                                }))
                            } else navigator.sendBeacon(e, new URLSearchParams(a)) ? (this.removeEvents(i, o, 200, "success"), this.options.saveEvents && this.saveEvents()) : this._logErrorsOnEvents(i, o, 0, "")
                        }
                    } else this.removeEvents(1 / 0, 1 / 0, 0, "No request sent", {
                        reason: "API key not set"
                    })
                }, dt.prototype._mergeEventsAndIdentifys = function(e) {
                    for (var t = [], n = 0, i = -1, o = 0, r = -1; t.length < e;) {
                        var s = void 0,
                            a = o >= this._unsentIdentifys.length,
                            u = n >= this._unsentEvents.length;
                        if (u && a) {
                            X.log.error("Merging Events and Identifys, less events and identifys than expected");
                            break
                        }
                        a ? i = (s = this._unsentEvents[n++]).event.event_id : u ? r = (s = this._unsentIdentifys[o++]).event.event_id : !("sequence_number" in this._unsentEvents[n].event) || this._unsentEvents[n].event.sequence_number < this._unsentIdentifys[o].event.sequence_number ? i = (s = this._unsentEvents[n++]).event.event_id : r = (s = this._unsentIdentifys[o++]).event.event_id, t.push(s)
                    }
                    return {
                        eventsToSend: t,
                        maxEventId: i,
                        maxIdentifyId: r
                    }
                }, dt.prototype.setGlobalUserProperties = function(e) {
                    this.setUserProperties(e)
                }, dt.prototype.__VERSION__ = function() {
                    return this.options.library.version
                }, dt.prototype.setLibrary = function(e, t) {
                    this.options.library = {
                        name: e,
                        version: t
                    }
                }, dt.prototype._shouldDeferCall = function() {
                    return this._pendingReadStorage || this._initializationDeferred
                }, dt.prototype._deferInitialization = function() {
                    this._initializationDeferred = !0, this._q.push(["init"].concat(Array.prototype.slice.call(arguments, 0)))
                }, dt.prototype.enableTracking = function() {
                    this._initializationDeferred = !1, _t(this), this.runQueuedFunctions()
                }, dt.prototype._refreshDynamicConfig = function() {
                    this.options.useDynamicConfig && lt.refresh(this.options.serverZone, this.options.forceHttps, function() {
                        this.options.apiEndpoint = lt.ingestionEndpoint
                    }.bind(this))
                };
                var Tt = function() {
                    this.options = u({}, pt), this._q = [], this._instances = {}
                };
                Tt.prototype.Identify = Ae, Tt.prototype.Revenue = nt, Tt.prototype.getInstance = function(e) {
                    e = X.isEmptyString(e) ? O.DEFAULT_INSTANCE : e.toLowerCase();
                    var t = this._instances[e];
                    return void 0 === t && (t = new dt(e), this._instances[e] = t), t
                }, Tt.prototype.runQueuedFunctions = function() {
                    for (var e = 0; e < this._q.length; e++) {
                        var t = this[this._q[e][0]];
                        "function" === R(t) && t.apply(this, this._q[e].slice(1))
                    }
                    for (var n in this._q = [], this._instances) Object.prototype.hasOwnProperty.call(this._instances, n) && this._instances[n].runQueuedFunctions()
                }, Tt.prototype.init = function(e, t, n, i) {
                    this.getInstance().init(e, t, n, function(e) {
                        this.options = e.options, "function" === R(i) && i(e)
                    }.bind(this))
                }, Tt.prototype.isNewSession = function() {
                    return this.getInstance().isNewSession()
                }, Tt.prototype.getSessionId = function() {
                    return this.getInstance().getSessionId()
                }, Tt.prototype.nextEventId = function() {
                    return this.getInstance().nextEventId()
                }, Tt.prototype.nextIdentifyId = function() {
                    return this.getInstance().nextIdentifyId()
                }, Tt.prototype.nextSequenceNumber = function() {
                    return this.getInstance().nextSequenceNumber()
                }, Tt.prototype.saveEvents = function() {
                    this.getInstance().saveEvents()
                }, Tt.prototype.setDomain = function(e) {
                    this.getInstance().setDomain(e)
                }, Tt.prototype.setUserId = function(e) {
                    this.getInstance().setUserId(e)
                }, Tt.prototype.setGroup = function(e, t) {
                    this.getInstance().setGroup(e, t)
                }, Tt.prototype.setOptOut = function(e) {
                    this.getInstance().setOptOut(e)
                }, Tt.prototype.regenerateDeviceId = function() {
                    this.getInstance().regenerateDeviceId()
                }, Tt.prototype.setDeviceId = function(e) {
                    this.getInstance().setDeviceId(e)
                }, Tt.prototype.setUserProperties = function(e) {
                    this.getInstance().setUserProperties(e)
                }, Tt.prototype.clearUserProperties = function() {
                    this.getInstance().clearUserProperties()
                }, Tt.prototype.identify = function(e, t) {
                    this.getInstance().identify(e, t)
                }, Tt.prototype.setVersionName = function(e) {
                    this.getInstance().setVersionName(e)
                }, Tt.prototype.logEvent = function(e, t, n) {
                    return this.getInstance().logEvent(e, t, n)
                }, Tt.prototype.logEventWithGroups = function(e, t, n, i) {
                    return this.getInstance().logEventWithGroups(e, t, n, i)
                }, Tt.prototype.logRevenueV2 = function(e) {
                    return this.getInstance().logRevenueV2(e)
                }, Tt.prototype.logRevenue = function(e, t, n) {
                    return this.getInstance().logRevenue(e, t, n)
                }, Tt.prototype.removeEvents = function(e, t) {
                    this.getInstance().removeEvents(e, t)
                }, Tt.prototype.sendEvents = function(e) {
                    this.getInstance().sendEvents(e)
                }, Tt.prototype.setGlobalUserProperties = function(e) {
                    this.getInstance().setUserProperties(e)
                }, Tt.prototype.__VERSION__ = ct;
                var kt = "undefined" !== typeof window && window.amplitude || {},
                    At = new Tt;
                for (var Rt in At._q = kt._q || [], kt._iq) Object.prototype.hasOwnProperty.call(kt._iq, Rt) && (At.getInstance(Rt)._q = kt._iq[Rt]._q || []);
                return At.runQueuedFunctions(), At
            }()
        }
    }
]);
//# sourceMappingURL=3b0fba1b.a3926085bb2737c1.js.map