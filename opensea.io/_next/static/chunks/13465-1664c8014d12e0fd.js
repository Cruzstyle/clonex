"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [13465], {
        44072: function(n, e, l) {
            l.d(e, {
                Z: function() {
                    return r
                }
            });
            var a = l(32825),
                t = l(81683),
                i = l(85902);

            function r(n, e) {
                var l, r;
                (0, i.Z)(1, arguments);
                var s = (0, a.Z)(n);
                if (isNaN(s.getTime())) throw new RangeError("Invalid time value");
                var o = String(null !== (l = null === e || void 0 === e ? void 0 : e.format) && void 0 !== l ? l : "extended"),
                    u = String(null !== (r = null === e || void 0 === e ? void 0 : e.representation) && void 0 !== r ? r : "complete");
                if ("extended" !== o && "basic" !== o) throw new RangeError("format must be 'extended' or 'basic'");
                if ("date" !== u && "time" !== u && "complete" !== u) throw new RangeError("representation must be 'date', 'time', or 'complete'");
                var c = "",
                    d = "",
                    g = "extended" === o ? "-" : "",
                    m = "extended" === o ? ":" : "";
                if ("time" !== u) {
                    var y = (0, t.Z)(s.getDate(), 2),
                        p = (0, t.Z)(s.getMonth() + 1, 2),
                        h = (0, t.Z)(s.getFullYear(), 4);
                    c = "".concat(h).concat(g).concat(p).concat(g).concat(y)
                }
                if ("date" !== u) {
                    var f = s.getTimezoneOffset();
                    if (0 !== f) {
                        var k = Math.abs(f),
                            v = (0, t.Z)(Math.floor(k / 60), 2),
                            x = (0, t.Z)(k % 60, 2),
                            S = f < 0 ? "+" : "-";
                        d = "".concat(S).concat(v, ":").concat(x)
                    } else d = "Z";
                    var b = (0, t.Z)(s.getHours(), 2),
                        F = (0, t.Z)(s.getMinutes(), 2),
                        T = (0, t.Z)(s.getSeconds(), 2),
                        C = "" === c ? "" : "T",
                        K = [b, F, T].join(m);
                    c = "".concat(c).concat(C).concat(K).concat(d)
                }
                return c
            }
        },
        46764: function(n, e, l) {
            l.d(e, {
                p: function() {
                    return y
                }
            });
            var a = l(85034),
                t = l(70169),
                i = l(31373),
                r = l(24246),
                s = (l(27378), l(4402)),
                o = l(7920),
                u = l(510),
                c = l(47803),
                d = l(3405),
                g = l(96150),
                m = l(70884),
                y = function(n) {
                    var e = n.value,
                        y = n.textVariant,
                        p = n.logo,
                        h = (0, i.Z)(n, ["value", "textVariant", "logo"]),
                        f = (0, s.useFragment)(l(78293), null !== p && void 0 !== p ? p : null),
                        k = !(void 0 === e || "0" === e);
                    return (0, r.jsxs)(g.k, {
                        alignItems: "center",
                        children: [k && (0, r.jsx)(g.k, {
                            alignItems: "center",
                            display: "inline-flex",
                            height: "22px",
                            marginRight: "4px",
                            children: f ? (0, r.jsx)(c.j, {
                                data: f,
                                size: 14
                            }) : (0, r.jsx)(o.U, {
                                size: 14
                            })
                        }), (0, r.jsx)(d.mn.StatText, (0, t.Z)((0, a.Z)({
                            as: "span",
                            variant: null !== y && void 0 !== y ? y : "small"
                        }, h), {
                            children: (0, r.jsx)(u.n, {
                                children: k ? e : m.Zx
                            })
                        }))]
                    })
                }
        },
        7920: function(n, e, l) {
            l.d(e, {
                U: function() {
                    return g
                }
            });
            var a = l(19989),
                t = l(24246),
                i = (l(27378), l(47892)),
                r = l(32969),
                s = l(377),
                o = l(65175),
                u = l(90761),
                c = l(70884);

            function d() {
                var n = (0, a.Z)(["\n  ", "\n"]);
                return d = function() {
                    return n
                }, n
            }
            var g = function(n) {
                    var e = n.size,
                        l = void 0 === e ? 14 : e;
                    return (0, t.jsx)(o.u, {
                        content: "ETH",
                        children: (0, t.jsx)(s._, {
                            cursor: "pointer",
                            tabIndex: 0,
                            children: (0, t.jsx)(m, {
                                alt: "Ether symbol",
                                size: l
                            })
                        })
                    })
                },
                m = (0, i.ZP)(r.qE).withConfig({
                    componentId: "sc-c8d1adf2-0"
                })(d(), (0, u.Um)({
                    variants: {
                        dark: {
                            filter: "brightness(3)"
                        }
                    }
                }));
            m.defaultProps = {
                src: c.Zn
            }
        },
        47803: function(n, e, l) {
            l.d(e, {
                j: function() {
                    return u
                }
            });
            var a = l(24246),
                t = (l(27378), l(4402)),
                i = (l(2417), l(32969)),
                r = l(65175),
                s = l(48599),
                o = l(24426),
                u = function(n) {
                    var e, u = n.size,
                        c = n.data,
                        d = (0, t.useFragment)(l(68911), c),
                        g = d.symbol,
                        m = d.chain,
                        y = d.asset,
                        p = (0, o.ip)(g, m.identifier);
                    return (0, a.jsx)(r.u, {
                        content: p,
                        children: (0, a.jsx)(s.k, {
                            "aria-label": "".concat(g, " logo"),
                            children: (0, a.jsx)(i.qE, {
                                size: u,
                                src: null !== (e = y.imageUrl) && void 0 !== e ? e : void 0
                            })
                        })
                    })
                }
        },
        13951: function(n, e, l) {
            l.d(e, {
                h: function() {
                    return v
                }
            });
            var a = l(85034),
                t = l(70169),
                i = l(31373),
                r = l(19989),
                s = l(24246),
                o = l(27378),
                u = l(47892),
                c = l(56656),
                d = l(96150);

            function g() {
                var n = (0, r.Z)(['\n  border-radius: 0;\n\n  &&:not(:first-child) {\n    margin-left: -2px; // Makes the border between buttons "overlap" so the border hover state can be present\n  }\n  :first-child {\n    border-top-left-radius: ', ";\n    border-bottom-left-radius: ", ";\n  }\n\n  :last-child {\n    border-top-right-radius: ", ";\n    border-bottom-right-radius: ", ";\n  }\n\n  :hover {\n    /* This fixes a case where the hover styles get hidden by the neighboring elements */\n    z-index: 1;\n  }\n"]);
                return g = function() {
                    return n
                }, n
            }

            function m() {
                var n = (0, r.Z)(["\n  width: fit-content;\n"]);
                return m = function() {
                    return n
                }, n
            }
            var y = (0, o.createContext)({
                    variant: c.RN.primary,
                    size: c.iY.medium
                }),
                p = (0, o.forwardRef)((function(n, e) {
                    var l = n.variant,
                        r = void 0 === l ? c.RN.primary : l,
                        u = n.size,
                        d = void 0 === u ? c.iY.medium : u,
                        g = (0, i.Z)(n, ["variant", "size"]),
                        m = (0, o.useMemo)((function() {
                            return {
                                variant: r,
                                size: d
                            }
                        }), [r, d]);
                    return (0, s.jsx)(y.Provider, {
                        value: m,
                        children: (0, s.jsx)(k, (0, t.Z)((0, a.Z)({}, g), {
                            ref: e
                        }))
                    })
                })),
                h = (0, u.ZP)(c.zx).withConfig({
                    componentId: "sc-541c989e-0"
                })(g(), (function(n) {
                    return n.theme.borderRadius.default
                }), (function(n) {
                    return n.theme.borderRadius.default
                }), (function(n) {
                    return n.theme.borderRadius.default
                }), (function(n) {
                    return n.theme.borderRadius.default
                })),
                f = (0, o.forwardRef)((function(n, e) {
                    var l = (0, o.useContext)(y),
                        i = l.variant,
                        r = l.size;
                    return (0, s.jsx)(h, (0, t.Z)((0, a.Z)({}, n), {
                        ref: e,
                        size: r,
                        variant: i
                    }))
                })),
                k = (0, u.ZP)(d.k).withConfig({
                    componentId: "sc-541c989e-1"
                })(m()),
                v = Object.assign(p, {
                    Button: f
                })
        },
        15012: function(n, e, l) {
            l.d(e, {
                Z: function() {
                    return S
                }
            });
            var a = l(23842),
                t = l(85034),
                i = l(31373),
                r = l(35230),
                s = l.n(r),
                o = l(24246),
                u = l(27378),
                c = l(70169),
                d = l(48257),
                g = l(20225),
                m = l(88747),
                y = l(46992),
                p = l(53585),
                h = l(96150),
                f = l(9476),
                k = l(48599),
                v = function(n) {
                    var e = n.direction,
                        l = n.loading,
                        a = (0, g.Fg)().theme,
                        t = "asc" === e ? "arrow_drop_up" : "arrow_drop_down",
                        i = "asc" === e ? "expand_less" : "expand_more";
                    return (0, m.kS)() ? l ? (0, o.jsx)(f.aN, {
                        size: "small"
                    }) : void 0 === e ? (0, o.jsx)(d.J, {
                        color: "gray",
                        cursor: "pointer",
                        size: 16,
                        value: "unfold_more"
                    }) : (0, o.jsx)(d.J, {
                        color: "light" === a ? "charcoal" : "white",
                        cursor: "pointer",
                        size: 20,
                        value: i
                    }) : l || void 0 === e ? (0, o.jsx)(f.aN, {
                        size: "small"
                    }) : (0, o.jsx)(d.J, {
                        color: "gray",
                        cursor: "pointer",
                        value: t
                    })
                },
                x = function(n) {
                    var e = n.buttonProps,
                        l = n.clearable,
                        i = n.header,
                        r = n.initialSortDirection,
                        d = n.sort,
                        g = n.sortDirection,
                        f = n.sortIndicatorHideMode,
                        x = void 0 === f ? "hide" : f,
                        S = n.showSelectedHeader,
                        b = void 0 !== S && S,
                        F = (0, m.kS)(),
                        T = (0, u.useState)(!1),
                        C = T[0],
                        K = T[1],
                        P = function(n) {
                            return "desc" === n ? "asc" : "desc"
                        };
                    if (d) {
                        var V = l && g && g === P(r) ? void 0 : P(g),
                            j = function() {
                                var n = (0, a.Z)(s().mark((function n() {
                                    return s().wrap((function(n) {
                                        for (;;) switch (n.prev = n.next) {
                                            case 0:
                                                return K(!0), n.prev = 1, n.next = 4, d(V);
                                            case 4:
                                                n.next = 9;
                                                break;
                                            case 6:
                                                n.prev = 6, n.t0 = n.catch(1), (0, y.Fo)(n.t0);
                                            case 9:
                                                return n.prev = 9, K(!1), n.finish(9);
                                            case 12:
                                            case "end":
                                                return n.stop()
                                        }
                                    }), n, null, [
                                        [1, 6, 9, 12]
                                    ])
                                })));
                                return function() {
                                    return n.apply(this, arguments)
                                }
                            }();
                        return (0, o.jsxs)(k.k, (0, c.Z)((0, t.Z)({}, e), {
                            onClick: j,
                            children: [b ? (0, o.jsx)(p.g, {
                                color: "hide" === x || void 0 !== g ? "text.heading" : "text.subtle",
                                children: i
                            }) : i, F ? ("remove" === x || void 0 !== g) && (0, o.jsx)(h.k, {
                                children: (0, o.jsx)(v, {
                                    direction: g,
                                    loading: C
                                })
                            }) : ("hide" === x || void 0 !== g) && (0, o.jsx)(h.k, {
                                visibility: void 0 === g ? "hidden" : "visible",
                                children: (0, o.jsx)(v, {
                                    direction: g,
                                    loading: C
                                })
                            })]
                        }))
                    }
                    return (0, o.jsx)(o.Fragment, {
                        children: i
                    })
                },
                S = function(n, e) {
                    var l = (0, u.useState)(e),
                        r = l[0],
                        c = l[1],
                        d = (0, u.useMemo)((function() {
                            return n.map((function(n, l) {
                                var u = n.sort,
                                    d = (0, i.Z)(n, ["sort"]),
                                    g = u ? function() {
                                        var n = (0, a.Z)(s().mark((function n(e) {
                                            return s().wrap((function(n) {
                                                for (;;) switch (n.prev = n.next) {
                                                    case 0:
                                                        return c({
                                                            index: l,
                                                            direction: e
                                                        }), n.next = 3, u(e);
                                                    case 3:
                                                    case "end":
                                                        return n.stop()
                                                }
                                            }), n)
                                        })));
                                        return function(e) {
                                            return n.apply(this, arguments)
                                        }
                                    }() : void 0;
                                return (0, o.jsx)(x, (0, t.Z)({
                                    initialSortDirection: null === e || void 0 === e ? void 0 : e.direction,
                                    sort: g,
                                    sortDirection: (null === r || void 0 === r ? void 0 : r.index) === l ? r.direction : void 0
                                }, d), l)
                            }))
                        }), [null === r || void 0 === r ? void 0 : r.direction, null === r || void 0 === r ? void 0 : r.index, n, null === e || void 0 === e ? void 0 : e.direction]);
                    return d
                }
        },
        97653: function(n, e, l) {
            l.d(e, {
                t: function() {
                    return k
                }
            });
            var a = l(85034),
                t = l(70169),
                i = l(31373),
                r = l(19989),
                s = l(24246),
                o = l(27378),
                u = l(47892),
                c = l(90761),
                d = l(13951);

            function g() {
                var n = (0, r.Z)(["\n  /* This amount of specificity is needed to ensure that this takes precedence over ToggleButtonGroup styling */\n  &&& {\n    color: ", ";\n    opacity: 1;\n\n    ", "\n  }\n"]);
                return g = function() {
                    return n
                }, n
            }

            function m() {
                var n = (0, r.Z)(["\n  ", ";\n"]);
                return m = function() {
                    return n
                }, n
            }
            var y = (0, o.forwardRef)((function(n, e) {
                    return (0, s.jsx)(d.h, (0, t.Z)((0, a.Z)({
                        variant: "tertiary"
                    }, n), {
                        ref: e
                    }))
                })),
                p = (0, u.iv)(g(), (function(n) {
                    return n.theme.colors.text.heading
                }), (function(n) {
                    var e = n.theme;
                    return (0, c.Um)({
                        variants: {
                            dark: {
                                backgroundColor: e.colors.onyx,
                                borderColor: "cloud",
                                borderLeft: "2px solid",
                                "&:not(:first-child)": {
                                    marginLeft: "-2px",
                                    zIndex: 1
                                }
                            },
                            light: {
                                backgroundColor: e.colors.lightMarina
                            }
                        }
                    })
                })),
                h = (0, u.ZP)(d.h.Button).withConfig({
                    componentId: "sc-d3fb1e85-0"
                })(m(), (function(n) {
                    return n.$selected && p
                })),
                f = (0, o.forwardRef)((function(n, e) {
                    var l = n.selected,
                        r = n.disabled,
                        o = n.flexDirection,
                        u = void 0 === o ? "column" : o,
                        c = (0, i.Z)(n, ["selected", "disabled", "flexDirection"]);
                    return (0, s.jsx)(h, (0, t.Z)((0, a.Z)({}, c), {
                        $selected: l,
                        "aria-pressed": l,
                        disabled: r || l,
                        flexDirection: u,
                        ref: e
                    }))
                })),
                k = Object.assign(y, {
                    Button: f
                })
        },
        28828: function(n, e, l) {
            l.d(e, {
                C8: function() {
                    return a
                },
                Wb: function() {
                    return t
                },
                eg: function() {
                    return i
                },
                jh: function() {
                    return o
                },
                oZ: function() {
                    return s
                },
                ti: function() {
                    return r
                }
            });
            var a = 66,
                t = 48,
                i = 168,
                r = "cubic-bezier(0.45, 0, 0.55, 1)",
                s = .4,
                o = "main-search-results"
        },
        68283: function(n, e, l) {
            l.d(e, {
                P: function() {
                    return o
                },
                d: function() {
                    return u
                }
            });
            var a = l(24246),
                t = l(27378),
                i = l(88747),
                r = l(10485),
                s = l(28828),
                o = (0, t.createContext)({
                    sidebarOpen: !0,
                    isMobileFilterDrawerOpen: !1,
                    setIsMobileFilterDrawerOpen: function() {
                        return null
                    },
                    toggleSidebar: function() {
                        return null
                    },
                    hasScrolledPastFilter: !1,
                    setHasScrolledPastFilter: function() {
                        return null
                    },
                    hasStickyElement: !1,
                    setHasStickyElement: function() {
                        return null
                    },
                    headerTopOffset: r.E,
                    filterTopOffset: r.E,
                    contentTopOffset: r.E,
                    isAssetsCssGridEnabled: !1
                });

            function u(n) {
                var e = n.initialSidebarOpen,
                    l = void 0 === e || e,
                    u = n.initialMobileFilterDrawerOpen,
                    c = void 0 !== u && u,
                    d = n.children,
                    g = (0, t.useState)(l),
                    m = g[0],
                    y = g[1],
                    p = (0, t.useState)(c),
                    h = p[0],
                    f = p[1],
                    k = (0, t.useState)(!1),
                    v = k[0],
                    x = k[1],
                    S = (0, t.useState)(!1),
                    b = S[0],
                    F = S[1],
                    T = r.E,
                    C = s.C8 + r.E,
                    K = (0, i.P5)("is_assets_css_grid_enabled"),
                    P = (0, t.useMemo)((function() {
                        return {
                            sidebarOpen: m,
                            isMobileFilterDrawerOpen: h,
                            setIsMobileFilterDrawerOpen: f,
                            toggleSidebar: y,
                            headerTopOffset: r.E,
                            filterTopOffset: T,
                            hasScrolledPastFilter: b,
                            setHasScrolledPastFilter: F,
                            hasStickyElement: v,
                            setHasStickyElement: x,
                            contentTopOffset: C,
                            isAssetsCssGridEnabled: K
                        }
                    }), [m, h, b, v, T, C, K]);
                return (0, a.jsx)(o.Provider, {
                    value: P,
                    children: d
                })
            }
        },
        86933: function(n, e, l) {
            l.d(e, {
                C: function() {
                    return ve
                },
                P: function() {
                    return ke
                }
            });
            var a = l(23842),
                t = l(85034),
                i = l(70169),
                r = l(31373),
                s = l(52050),
                o = l(19989),
                u = l(3204),
                c = l(35230),
                d = l.n(c),
                g = l(24246),
                m = l(27378),
                y = l(98784),
                p = l(86192),
                h = l(74387),
                f = l(47892),
                k = l(81480),
                v = l(86677),
                x = l(48257),
                S = l(56656),
                b = l(96150),
                F = l(88747),
                T = function(n) {
                    var e = n.className,
                        l = n.currentPage,
                        t = n.setCurrentPage,
                        i = n.hasMore,
                        r = n.loadNext,
                        s = n.pageSize,
                        o = n.limit,
                        u = (0, v.useRouter)(),
                        c = (0, m.useState)(l),
                        y = c[0],
                        h = c[1],
                        f = (0, F.kS)();
                    (0, p.Z)((function() {
                        h(0)
                    }), [u.query]);
                    var k = function() {
                            var n = (0, a.Z)(d().mark((function n() {
                                return d().wrap((function(n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            if (!(l + 1 > y)) {
                                                n.next = 6;
                                                break
                                            }
                                            if (h(l + 1), void 0 === r) {
                                                n.next = 6;
                                                break
                                            }
                                            return n.next = 6, r();
                                        case 6:
                                            t(l + 1);
                                        case 7:
                                        case "end":
                                            return n.stop()
                                    }
                                }), n)
                            })));
                            return function() {
                                return n.apply(this, arguments)
                            }
                        }(),
                        T = (l || 1) * s,
                        C = "".concat(((l || 1) - 1) * s + 1, " - ").concat(T),
                        K = (l + 1) * s + 1,
                        P = (l + 2) * s,
                        V = "".concat(K, " - ").concat(P),
                        j = !o || K < o;
                    return (0, g.jsxs)(b.k, {
                        backgroundColor: "background",
                        bottom: 0,
                        boxShadow: {
                            _: "default",
                            xl: "none"
                        },
                        className: e,
                        justifyContent: "center",
                        left: 0,
                        paddingBottom: {
                            _: "10px",
                            xl: "40px"
                        },
                        paddingTop: {
                            _: "10px",
                            xl: "20px"
                        },
                        position: f ? "initial" : {
                            _: "fixed",
                            xl: "initial"
                        },
                        width: "100%",
                        children: [(0, g.jsxs)(S.zx, {
                            disabled: 0 === l,
                            marginRight: "10px",
                            variant: "tertiary",
                            onClick: function() {
                                return t(l - 1)
                            },
                            children: [(0, g.jsx)(x.J, {
                                size: 16,
                                value: "arrow_back_ios_new"
                            }), "\xa0", C]
                        }), i && j && (0, g.jsxs)(S.zx, {
                            marginLeft: "10px",
                            variant: "tertiary",
                            onClick: k,
                            children: [V, "\xa0", (0, g.jsx)(x.J, {
                                size: 16,
                                value: "arrow_forward_ios"
                            })]
                        })]
                    })
                },
                C = l(53585),
                K = l(3405),
                P = l(72363),
                V = l(99525),
                j = l(15012),
                L = l(316),
                w = (l(4402), l(74154)),
                A = l(47788),
                D = l(87481),
                _ = l(47748),
                I = l(59809),
                Z = l(23176),
                R = l(72686);

            function B() {
                var n = (0, o.Z)(["\n      display: flex;\n    "]);
                return B = function() {
                    return n
                }, n
            }

            function N() {
                var n = (0, o.Z)(["\n  display: none;\n  ", "\n"]);
                return N = function() {
                    return n
                }, n
            }
            var O = m.memo((function(n) {
                    var e = n.displayRankIndex,
                        l = n.isWatchlistEnabled;
                    return (0, g.jsxs)(g.Fragment, {
                        children: [(0, g.jsx)(K.mn.Cell, {
                            height: "64px",
                            width: "492px",
                            children: (0, g.jsx)(R.O, {
                                height: "auto",
                                justifyContent: "center",
                                children: (0, g.jsxs)(b.k, {
                                    alignItems: "center",
                                    justifyContent: "start",
                                    children: [(0, g.jsx)(b.k, {
                                        marginLeft: e ? "52px" : "0px",
                                        marginRight: "24px",
                                        children: (0, g.jsx)(R.O.Block, {
                                            borderRadius: "10px",
                                            height: "62px",
                                            width: "62px"
                                        })
                                    }), (0, g.jsx)(R.O.Line, {
                                        height: "22px",
                                        width: "80%"
                                    })]
                                })
                            })
                        }), (0, g.jsx)(K.mn.Cell, {
                            children: (0, g.jsx)(R.O, {
                                height: "auto",
                                justifyContent: "center",
                                children: (0, g.jsx)(R.O.Row, {
                                    justifyContent: "end !important",
                                    children: (0, g.jsx)(R.O.Line, {
                                        height: "22px",
                                        width: "80%"
                                    })
                                })
                            })
                        }), (0, g.jsx)(K.mn.Cell, {
                            children: (0, g.jsx)(R.O, {
                                height: "auto",
                                justifyContent: "center",
                                children: (0, g.jsx)(R.O.Row, {
                                    justifyContent: "end !important",
                                    children: (0, g.jsx)(R.O.Line, {
                                        height: "22px",
                                        width: "80%"
                                    })
                                })
                            })
                        }), (0, g.jsx)(K.mn.Cell, {
                            children: (0, g.jsx)(R.O, {
                                height: "auto",
                                justifyContent: "center",
                                children: (0, g.jsx)(R.O.Row, {
                                    justifyContent: "end !important",
                                    children: (0, g.jsx)(R.O.Line, {
                                        height: "22px",
                                        width: "80%"
                                    })
                                })
                            })
                        }), (0, g.jsx)(K.mn.Cell, {
                            width: "88px",
                            children: (0, g.jsx)(R.O, {
                                height: "auto",
                                justifyContent: "center",
                                children: (0, g.jsx)(R.O.Row, {
                                    justifyContent: "end !important",
                                    children: (0, g.jsx)(R.O.Line, {
                                        height: "22px",
                                        width: "80%"
                                    })
                                })
                            })
                        }), (0, g.jsx)(W, {
                            children: (0, g.jsx)(R.O, {
                                height: "auto",
                                justifyContent: "center",
                                children: (0, g.jsx)(R.O.Row, {
                                    justifyContent: "end !important",
                                    children: (0, g.jsx)(R.O.Line, {
                                        height: "22px",
                                        width: "80%"
                                    })
                                })
                            })
                        }), (0, g.jsx)(W, {
                            children: (0, g.jsx)(R.O, {
                                height: "auto",
                                justifyContent: "center",
                                children: (0, g.jsx)(R.O.Row, {
                                    justifyContent: "end !important",
                                    children: (0, g.jsx)(R.O.Line, {
                                        height: "22px",
                                        width: "80%"
                                    })
                                })
                            })
                        }), l && (0, g.jsx)(b.k, {
                            alignItems: "center",
                            padding: "0 16px 0px 32px",
                            children: (0, g.jsx)(R.O, {
                                height: "auto",
                                justifyContent: "center",
                                children: (0, g.jsx)(R.O.Row, {
                                    justifyContent: "end !important",
                                    children: (0, g.jsx)(R.O.Line, {
                                        height: "22px",
                                        width: "22px"
                                    })
                                })
                            })
                        })]
                    })
                })),
                W = (0, f.ZP)(K.mn.Cell).withConfig({
                    componentId: "sc-a7a99187-0"
                })(N(), (0, P.BC)({
                    xxl: (0, f.iv)(B())
                })),
                $ = l(57554);

            function E() {
                var n = (0, o.Z)(["\n      display: flex;\n    "]);
                return E = function() {
                    return n
                }, n
            }

            function z() {
                var n = (0, o.Z)(["\n  align-items: center;\n  padding: 0 16px 0px 32px;\n\n  display: none;\n  ", "\n"]);
                return z = function() {
                    return n
                }, n
            }
            var Q = m.memo((function(n) {
                    var e = n.isWatchlistEnabled;
                    return (0, g.jsxs)(g.Fragment, {
                        children: [(0, g.jsxs)(V.i, {
                            alignItems: "center",
                            height: "64px",
                            width: "100%",
                            children: [(0, g.jsx)(b.k, {
                                marginRight: "16px",
                                children: (0, g.jsx)(R.O.Block, {
                                    borderRadius: "10px",
                                    height: "46px",
                                    width: "46px"
                                })
                            }), (0, g.jsxs)($.a.Content, {
                                children: [(0, g.jsx)($.a.Title, {}), (0, g.jsx)($.a.Description, {})]
                            }), (0, g.jsxs)($.a.Side, {
                                children: [(0, g.jsx)($.a.Title, {}), (0, g.jsx)($.a.Description, {})]
                            })]
                        }), e && (0, g.jsx)(U, {
                            children: (0, g.jsx)(R.O, {
                                height: "auto",
                                justifyContent: "center",
                                children: (0, g.jsx)(R.O.Row, {
                                    justifyContent: "end !important",
                                    children: (0, g.jsx)(R.O.Line, {
                                        height: "22px",
                                        width: "22px"
                                    })
                                })
                            })
                        })]
                    })
                })),
                U = (0, f.ZP)(b.k).withConfig({
                    componentId: "sc-3bc865e8-0"
                })(z(), (0, P.BC)({
                    sm: (0, f.iv)(E())
                })),
                q = l(96053),
                H = l(7740),
                M = l(6300),
                G = l(10485);

            function J() {
                var n = (0, o.Z)(["\n      display: flex;\n    "]);
                return J = function() {
                    return n
                }, n
            }

            function X() {
                var n = (0, o.Z)(["\n  ", "\n  ", "\n"]);
                return X = function() {
                    return n
                }, n
            }

            function Y() {
                var n = (0, o.Z)(["\n      display: flex;\n    "]);
                return Y = function() {
                    return n
                }, n
            }

            function nn() {
                var n = (0, o.Z)(["\n  display: none;\n  ", "\n"]);
                return nn = function() {
                    return n
                }, n
            }

            function en() {
                var n = (0, o.Z)(["\n      display: none;\n    "]);
                return en = function() {
                    return n
                }, n
            }

            function ln() {
                var n = (0, o.Z)(["\n  ", "\n"]);
                return ln = function() {
                    return n
                }, n
            }

            function an() {
                var n = (0, o.Z)(["\n  display: flex;\n  align-items: center;\n  height: 100%;\n  position: sticky;\n  top: ", ";\n  z-index: ", ";\n  border: 0px none transparent;\n  overflow: hidden;\n"]);
                return an = function() {
                    return n
                }, n
            }

            function tn() {
                var n = (0, o.Z)(["\n  padding-top: 0;\n  padding-bottom: 0;\n  padding-left: 16px;\n  padding-right: 16px;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  border: 0px none transparent;\n"]);
                return tn = function() {
                    return n
                }, n
            }

            function rn() {
                var n = (0, o.Z)(["\n  align-items: center;\n  padding: 0px 16px 0px 32px;\n"]);
                return rn = function() {
                    return n
                }, n
            }
            var sn, on, un = function(n) {
                    var e = n.displayRankIndex,
                        l = void 0 === e || e,
                        a = n.filters,
                        t = n.sortableHeaders,
                        i = (0, F.k6)(),
                        r = (0, M.q)("statsV2");
                    return (0, g.jsxs)(g.Fragment, {
                        children: [(0, g.jsx)(C.g, {
                            paddingBottom: {
                                _: "20px",
                                lg: "0"
                            },
                            paddingTop: {
                                _: "6px",
                                lg: "0"
                            },
                            children: a
                        }), (0, g.jsx)(dn, {
                            fullWidth: !1,
                            height: 38,
                            stickyFromBreakpoint: "xs",
                            children: (0, g.jsxs)(mn, {
                                padding: {
                                    _: "12px",
                                    xl: "0px"
                                },
                                top: G.y,
                                children: [t.map((function(n, e) {
                                    return (0, g.jsx)(cn, {
                                        color: 0 === e ? "text.subtle" : void 0,
                                        hideAtXXLBreakpoint: e > 4,
                                        justifyContent: 0 === e ? "flex-start" : "flex-end",
                                        paddingLeft: 0 === e ? l ? {
                                            _: "52px",
                                            xl: "64px"
                                        } : {
                                            _: "0px",
                                            xl: "12px"
                                        } : "0px",
                                        width: 0 === e ? {
                                            _: "462px",
                                            xl: "510px"
                                        } : 4 === e ? "88px" : void 0,
                                        children: n
                                    }, e)
                                })), i && (0, g.jsx)(pn, {
                                    children: (0, g.jsx)(C.g, {
                                        width: "24px"
                                    })
                                })]
                            })
                        }), (0, g.jsx)(gn, {
                            fullWidth: !1,
                            height: 24,
                            stickyFromBreakpoint: "xs",
                            children: (0, g.jsxs)(yn, {
                                children: [(0, g.jsx)(K.mn.Cell, {
                                    justifyContent: "flex-start",
                                    paddingLeft: l ? "24px" : "0px",
                                    children: (0, g.jsx)(L.xv.Body, {
                                        color: "text.subtle",
                                        size: "tiny",
                                        weight: "semibold",
                                        children: r("stats.columnHeader.collection", "COLLECTION")
                                    })
                                }), (0, g.jsx)(K.mn.Cell, {
                                    justifyContent: "flex-end",
                                    paddingRight: {
                                        _: "4px",
                                        sm: i ? "76px" : "4px"
                                    },
                                    children: (0, g.jsx)(L.xv.Body, {
                                        color: "text.subtle",
                                        size: "tiny",
                                        weight: "semibold",
                                        children: r("stats.columnHeader.volume", "VOLUME")
                                    })
                                })]
                            })
                        })]
                    })
                },
                cn = (0, f.ZP)(K.mn.Cell).withConfig({
                    componentId: "sc-edf18dfa-0"
                })(X(), (function(n) {
                    return n.hideAtXXLBreakpoint && "\n    display: none;\n  "
                }), (0, P.BC)({
                    xxl: (0, f.iv)(J())
                })),
                dn = (0, f.ZP)(H.P).withConfig({
                    componentId: "sc-edf18dfa-1"
                })(nn(), (0, P.BC)({
                    lg: (0, f.iv)(Y())
                })),
                gn = (0, f.ZP)(H.P).withConfig({
                    componentId: "sc-edf18dfa-2"
                })(ln(), (0, P.BC)({
                    lg: (0, f.iv)(en())
                })),
                mn = (0, f.ZP)(V.i).withConfig({
                    componentId: "sc-edf18dfa-3"
                })(an(), (function(n) {
                    return null !== (sn = n.top) && void 0 !== sn ? sn : 0
                }), (function(n) {
                    return null !== (on = n.zIndex) && void 0 !== on ? on : 1
                })),
                yn = (0, f.ZP)(K.mn.HeaderContainer).withConfig({
                    componentId: "sc-edf18dfa-4"
                })(tn()),
                pn = (0, f.ZP)(b.k).withConfig({
                    componentId: "sc-edf18dfa-5"
                })(rn()),
                hn = l(510),
                fn = l(83989),
                kn = l(25796),
                vn = l(11652),
                xn = l(70884),
                Sn = l(9572),
                bn = l(94982),
                Fn = l(17041);

            function Tn() {
                var n = (0, o.Z)(["\n      display: flex;\n    "]);
                return Tn = function() {
                    return n
                }, n
            }

            function Cn() {
                var n = (0, o.Z)(["\n      display: none;\n    "]);
                return Cn = function() {
                    return n
                }, n
            }

            function Kn() {
                var n = (0, o.Z)(["\n  display: none;\n  ", "\n"]);
                return Kn = function() {
                    return n
                }, n
            }
            var Pn = function(n) {
                    var e, l = n.data,
                        a = n.sortBy,
                        t = n.displayRankIndex,
                        i = void 0 === t || t,
                        r = n.watchlistData,
                        s = n.isWatchlistEnabled,
                        o = n.isWatchlistTab,
                        u = n.useAssetLogo,
                        c = (0, M.q)("statsV2"),
                        d = l.statsV2,
                        m = l.relayId,
                        y = l.slug,
                        p = (0, kn.ef)(a, l, !0),
                        h = (0, vn.bn)((0, kn.KO)(a, l)),
                        f = (0, kn.Al)(h.times(100)),
                        k = h.isGreaterThan(0),
                        v = l.index + 1,
                        x = v < 101 ? "24px" : v < 901 ? "28px" : "30px",
                        S = (null === (e = d.floorPrice) || void 0 === e ? void 0 : e.unit) ? (0, kn.rM)(d.floorPrice.unit) : void 0,
                        F = !(void 0 === S || "0" === S),
                        T = (0, g.jsxs)(b.k, {
                            alignItems: "center",
                            display: "block",
                            children: [(0, g.jsx)(L.xv.Body, {
                                color: "text.subtle",
                                paddingRight: "3px",
                                size: "small",
                                children: (0, g.jsx)(hn.n, {
                                    lines: 1,
                                    children: F ? c("stats.floorPrice", "Floor price:") : c("stats.noFloorPrice", "No floor price")
                                })
                            }), F && (0, g.jsx)(bn.P, {
                                logo: l.nativePaymentAsset,
                                size: "small",
                                subtleText: !0,
                                useAssetLogo: u,
                                value: S
                            })]
                        }),
                        K = (0, g.jsxs)(b.k, {
                            alignItems: "center",
                            paddingRight: "8px",
                            width: "100%",
                            children: [i && (0, g.jsx)(C.g, {
                                minWidth: x,
                                children: (0, g.jsx)(L.xv.Body, {
                                    color: "text.subtle",
                                    size: "tiny",
                                    weight: "semibold",
                                    children: (0, g.jsx)(hn.n, {
                                        children: v
                                    })
                                })
                            }), (0, g.jsx)(Sn.W, {
                                collection: l,
                                subtitle: T
                            })]
                        }),
                        P = (0, g.jsx)(bn.P, {
                            logo: l.nativePaymentAsset,
                            size: "small",
                            useAssetLogo: u,
                            value: p
                        }),
                        V = h.isEqualTo(0) ? (0, g.jsx)(L.xv.Body, {
                            color: "text.heading",
                            size: "small",
                            weight: "semibold",
                            children: xn.eJ
                        }) : (0, g.jsx)(L.xv.Body, {
                            color: k ? "seaGrass" : "darkCoral",
                            size: "small",
                            weight: "semibold",
                            children: "".concat(k ? "+" : "").concat(f, "%")
                        }),
                        j = (0, g.jsxs)(fn.t, {
                            alignItems: "flex-end",
                            alignSelf: "center",
                            paddingRight: "6px",
                            width: "auto",
                            children: [(0, g.jsx)(b.k, {
                                textAlign: "right",
                                children: P
                            }), (0, g.jsx)(b.k, {
                                textAlign: "right",
                                children: V
                            })]
                        }),
                        w = (0, g.jsx)(Vn, {
                            alignItems: "center",
                            padding: "0 16px 0px 32px",
                            children: (0, g.jsx)(Fn.x, {
                                collectionId: m,
                                data: r,
                                hideCollections: o,
                                slug: y
                            })
                        });
                    return (0, g.jsxs)(g.Fragment, {
                        children: [K, j, s && w]
                    })
                },
                Vn = (0, f.ZP)(b.k).withConfig({
                    componentId: "sc-8ebd035-0"
                })(Kn(), (0, P.BC)({
                    sm: (0, f.iv)(Tn()),
                    lg: (0, f.iv)(Cn())
                })),
                jn = m.memo((function(n) {
                    var e, a, r, o = n.displayRankIndex,
                        u = void 0 === o || o,
                        c = n.isLoading,
                        d = n.filters,
                        y = n.sortableHeaders,
                        p = n.sortBy,
                        h = n.rows,
                        f = n.tableKey,
                        k = n.isWatchlistTab,
                        v = null !== (r = null === (e = (0, D.b)().wallet.getActiveAccountKey()) || void 0 === e ? void 0 : e.address) && void 0 !== r ? r : null,
                        x = (0, F.k6)(),
                        S = (0, s.Z)((0, _.i)(l(5005), {
                            identity: null !== v && void 0 !== v ? v : "",
                            count: 100
                        }, {
                            skip: !v || !x
                        }), 1)[0],
                        b = (0, m.useCallback)((function(n) {
                            var e = n.data;
                            return e.slug ? (0, Z.vg)(e) : void 0
                        }), []),
                        T = (0, m.useMemo)((function() {
                            return (0, g.jsx)(un, {
                                displayRankIndex: u,
                                filters: d,
                                sortableHeaders: y
                            })
                        }), [u, d, y]),
                        C = S && v && x,
                        P = (0, m.useCallback)((function(n) {
                            var e;
                            return c ? (0, g.jsx)(O, {
                                displayRankIndex: u,
                                isWatchlistEnabled: x
                            }) : (0, g.jsx)(q.lG, (0, i.Z)((0, t.Z)({}, n), {
                                displayRankIndex: u,
                                isWatchlistEnabled: x,
                                isWatchlistTab: k,
                                sortBy: p,
                                useAssetLogo: !x,
                                watchlistData: C && (0, I.v$)(null === (e = S.getAccount.user) || void 0 === e ? void 0 : e.collectionWatchlist).find((function(e) {
                                    return e.slug === n.data.slug
                                })) || null
                            }))
                        }), [u, c, x, k, p, C, S]),
                        V = (0, m.useCallback)((function(n) {
                            var e;
                            return c ? (0, g.jsx)(Q, {
                                isWatchlistEnabled: x
                            }) : (0, g.jsx)(Pn, (0, i.Z)((0, t.Z)({}, n), {
                                displayRankIndex: u,
                                isWatchlistEnabled: x,
                                isWatchlistTab: k,
                                sortBy: p,
                                useAssetLogo: !x,
                                watchlistData: C && (0, I.v$)(null === (e = S.getAccount.user) || void 0 === e ? void 0 : e.collectionWatchlist).find((function(e) {
                                    return e.slug === n.data.slug
                                })) || null
                            }))
                        }), [u, c, p, x, C, k, null === (a = null === S || void 0 === S ? void 0 : S.getAccount.user) || void 0 === a ? void 0 : a.collectionWatchlist]);
                    return (0, g.jsx)(K.mn, {
                        fullRowMinBreakpoint: "lg",
                        getHref: b,
                        header: T,
                        itemHeightEstimate: 90,
                        items: c ? w.z5 : h,
                        renderFullRow: P,
                        renderMore: A.E,
                        renderPrimary: V,
                        showBorder: !1,
                        showInteractiveStyles: !0
                    }, f)
                })),
                Ln = l(36332),
                wn = l(86676),
                An = l(60387),
                Dn = (0, An.V6)("Rankings page sorting selected"),
                _n = (0, An.V6)("Rankings page category filter selected"),
                In = (0, An.V6)("Rankings page chain filter selected"),
                Zn = (0, An.V6)("Rankings page time window filter selected"),
                Rn = l(76449),
                Bn = l(2385),
                Nn = l(97653),
                On = l(33303),
                Wn = l(90761);

            function $n() {
                var n = (0, o.Z)(["\n        height: 48px;\n        font-size: 16px;\n      "]);
                return $n = function() {
                    return n
                }, n
            }

            function En() {
                var n = (0, o.Z)(["\n        color: ", ";\n      "]);
                return En = function() {
                    return n
                }, n
            }

            function zn() {
                var n = (0, o.Z)(["\n  &&& {\n    border-color: ", ";\n    height: 36px;\n    font-size: 14px;\n    ", "\n\n    :not(:first-child):not(:last-child) {\n      border-right: none;\n      border-left: none;\n    }\n    :last-child {\n      border-left: none;\n    }\n    :first-child {\n      border-right: none;\n    }\n    color: ", ";\n    ", "\n    ", "\n    ", ";\n  }\n"]);
                return zn = function() {
                    return n
                }, n
            }
            var Qn = function(n) {
                    var e = n.className,
                        l = n.options,
                        a = n.value,
                        t = n.setValue,
                        i = n.testId,
                        r = n.appendTo,
                        s = n.timeVariant,
                        o = (0, F.kS)(),
                        u = (0, g.jsxs)(On.B, {
                            marginLeft: "-4px",
                            paddingTop: "5px",
                            children: [(0, g.jsx)(P.pU, {
                                lessThan: "lg",
                                children: (0, g.jsx)(x.J, {
                                    "aria-label": "Show more",
                                    color: "gray",
                                    cursor: "pointer",
                                    size: 20,
                                    value: "keyboard_arrow_down"
                                })
                            }), (0, g.jsx)(P.pU, {
                                greaterThanOrEqual: "lg",
                                children: (0, g.jsx)(x.J, {
                                    "aria-label": "Show more",
                                    color: "gray",
                                    cursor: "pointer",
                                    size: 24,
                                    value: "keyboard_arrow_down"
                                })
                            })]
                        });
                    return (0, g.jsx)(C.g, {
                        className: e,
                        "data-testid": i,
                        display: "inline-block",
                        edge: "both",
                        margin: {
                            _: "0 4px",
                            lg: "6px 0px 10px 12px"
                        },
                        whiteSpace: "nowrap",
                        width: s ? {} : {
                            sm: "100%",
                            xl: o ? "100%" : "240px"
                        },
                        children: s ? (0, g.jsxs)(g.Fragment, {
                            children: [(0, g.jsx)(P.pU, {
                                lessThan: "lg",
                                children: (0, g.jsx)(Bn.P, {
                                    clearable: !1,
                                    endEnhancer: u,
                                    maxHeight: "370px",
                                    options: l,
                                    overrides: {
                                        Dropdown: {
                                            props: {
                                                appendTo: r,
                                                popperOptions: {
                                                    strategy: "fixed"
                                                }
                                            }
                                        },
                                        ContentItem: {
                                            props: {
                                                height: {
                                                    _: "36px",
                                                    lg: "48px"
                                                },
                                                style: {
                                                    padding: "8px 12px"
                                                },
                                                borderRadius: {
                                                    _: "8px !important",
                                                    lg: "12px !important"
                                                }
                                            }
                                        }
                                    },
                                    readOnly: !0,
                                    value: a.value,
                                    variant: "item",
                                    onSelect: function(n) {
                                        n && n !== a && t(n)
                                    }
                                })
                            }), (0, g.jsx)(P.pU, {
                                greaterThanOrEqual: "lg",
                                children: (0, g.jsx)(Nn.t, {
                                    children: l.map((function(n, e) {
                                        return (0, g.jsx)(Un, {
                                            selected: n.value === a.value,
                                            size: "small",
                                            style: {
                                                padding: "8px 12px",
                                                width: "48px",
                                                margin: 0
                                            },
                                            onClick: function() {
                                                var e;
                                                (e = n) && e !== a && t(e)
                                            },
                                            children: n.label
                                        }, e)
                                    }))
                                })
                            })]
                        }) : o ? (0, g.jsx)(g.Fragment, {
                            children: (0, g.jsx)(Bn.P, {
                                clearable: !1,
                                endEnhancer: u,
                                maxHeight: "370px",
                                options: l,
                                overrides: {
                                    Dropdown: {
                                        props: {
                                            appendTo: r,
                                            popperOptions: {
                                                strategy: "fixed"
                                            }
                                        }
                                    },
                                    ContentItem: {
                                        props: {
                                            height: {
                                                _: "36px",
                                                lg: "48px"
                                            },
                                            style: {
                                                padding: "8px 12px"
                                            },
                                            borderRadius: {
                                                _: "8px !important",
                                                lg: "12px !important"
                                            }
                                        }
                                    }
                                },
                                readOnly: !0,
                                style: {
                                    fontSize: "30px !important"
                                },
                                value: a.value,
                                variant: "item",
                                onSelect: function(n) {
                                    n && n !== a && t(n)
                                }
                            })
                        }) : (0, g.jsx)(Bn.P, {
                            clearable: !1,
                            maxHeight: "370px",
                            options: l,
                            overrides: {
                                Dropdown: {
                                    props: {
                                        appendTo: r,
                                        popperOptions: {
                                            strategy: "fixed"
                                        }
                                    }
                                },
                                ContentItem: {
                                    props: {
                                        height: {
                                            _: "50px",
                                            lg: "revert"
                                        }
                                    }
                                }
                            },
                            readOnly: !0,
                            value: a.value,
                            variant: "item",
                            onSelect: function(n) {
                                n && n !== a && t(n)
                            }
                        })
                    })
                },
                Un = (0, f.ZP)(Nn.t.Button).withConfig({
                    componentId: "sc-d9682925-0"
                })(zn(), (function(n) {
                    return n.theme.colors.border
                }), (0, P.BC)({
                    lg: (0, f.iv)($n())
                }), (function(n) {
                    return n.theme.colors.text.subtle
                }), (function(n) {
                    return (0, Wn.Um)({
                        variants: {
                            dark: {
                                borderColor: n.theme.colors.ash
                            }
                        }
                    })
                }), (function(n) {
                    return n.selected && (0, f.iv)(En(), n.theme.colors.text.heading)
                }), (function(n) {
                    return n.selected ? (0, Wn.Um)({
                        variants: {
                            light: {
                                backgroundColor: "".concat((0, Rn.m4)(n.theme.colors.fog, .5)),
                                boxShadow: "none"
                            },
                            dark: {
                                background: "".concat(n.theme.colors.oil),
                                borderColor: n.theme.colors.ash
                            }
                        }
                    }) : (0, Wn.Um)({
                        variants: {
                            dark: {
                                ":hover": {
                                    background: "".concat(n.theme.colors.ash)
                                }
                            }
                        }
                    })
                })),
                qn = l(377),
                Hn = l(16611),
                Mn = function(n) {
                    var e = n.message;
                    return (0, g.jsx)(qn._, {
                        paddingX: "20px",
                        paddingY: "40px",
                        children: "string" === typeof e ? (0, g.jsx)(Hn.WX, {
                            fontSize: {
                                _: "20px",
                                lg: "26px"
                            },
                            children: e
                        }) : e
                    })
                },
                Gn = l(58578),
                Jn = l(15876),
                Xn = l(24426),
                Yn = function() {
                    var n = (0, Xn.C$)(),
                        e = n.chains,
                        l = n.getChainName,
                        a = n.getChainLogo;
                    return (0, m.useMemo)((function() {
                        return [{
                            label: "All chains",
                            value: "all",
                            avatar: (0, i.Z)((0, t.Z)({}, Gn.wq), {
                                backgroundColor: "inherit",
                                icon: "link"
                            })
                        }].concat((0, u.Z)(e.map((function(n) {
                            return {
                                label: l(n),
                                value: xn.H4[n],
                                avatar: (0, i.Z)((0, t.Z)({}, Gn.wq), {
                                    src: a(n),
                                    backgroundColor: "inherit"
                                })
                            }
                        }))))
                    }), [e, l, a])
                },
                ne = function(n, e) {
                    var l = e.defaultValue,
                        a = e.serializer,
                        t = void 0 === a ? JSON.stringify : a,
                        i = e.deserializer,
                        r = (0, v.useRouter)(),
                        s = null === i || void 0 === i ? void 0 : i(r.query[n]),
                        o = (0, m.useState)(null !== s && void 0 !== s ? s : l),
                        u = o[0],
                        c = o[1];
                    return (0, p.Z)((function() {
                        if (s !== u) {
                            var e = t(u);
                            void 0 === e ? delete r.query[n] : r.query[n] = e, r.push({
                                query: r.query
                            })
                        }
                    }), [u]), [u, c]
                };

            function ee() {
                var n = (0, o.Z)(["\n      display: none;\n    "]);
                return ee = function() {
                    return n
                }, n
            }

            function le() {
                var n = (0, o.Z)(["\n  ::-webkit-scrollbar {\n    display: none;\n  }\n\n  ", "\n"]);
                return le = function() {
                    return n
                }, n
            }

            function ae() {
                var n = (0, o.Z)(["\n      display: block;\n    "]);
                return ae = function() {
                    return n
                }, n
            }

            function te() {
                var n = (0, o.Z)(["\n  display: none;\n  ", "\n"]);
                return te = function() {
                    return n
                }, n
            }

            function ie() {
                var n = (0, o.Z)(["\n  color: inherit;\n  white-space: nowrap;\n"]);
                return ie = function() {
                    return n
                }, n
            }

            function re() {
                var n = (0, o.Z)(["\n  color: inherit;\n  white-space: nowrap;\n\n  :hover {\n    color: ", " !important;\n  }\n"]);
                return re = function() {
                    return n
                }, n
            }

            function se() {
                var n = (0, o.Z)(["\n  -ms-overflow-style: none; /* Internet Explorer 10+ */\n  scrollbar-width: none; /* Firefox */\n\n  ::-webkit-scrollbar {\n    display: none; /* Safari and Chrome */\n  }\n"]);
                return se = function() {
                    return n
                }, n
            }

            function oe() {
                var n = (0, o.Z)(["\n  border: 0px none transparent !important;\n  width: 100%;\n  padding: 0px;\n"]);
                return oe = function() {
                    return n
                }, n
            }

            function ue() {
                var n = (0, o.Z)(["\n      display: none;\n    "]);
                return ue = function() {
                    return n
                }, n
            }

            function ce() {
                var n = (0, o.Z)(["\n  ", "\n"]);
                return ce = function() {
                    return n
                }, n
            }
            var de = ["All chains", "Ethereum", "Solana", "Polygon", "Klaytn"],
                ge = function(n, e) {
                    var l = de.indexOf(n.label),
                        a = de.indexOf(e.label);
                    return -1 === l && -1 === a ? -1 : l - a
                },
                me = Gn.Lm.map((function(n) {
                    n.avatar;
                    return (0, r.Z)(n, ["avatar"])
                })),
                ye = me.map((function(n) {
                    return n
                })),
                pe = (0, f.ZP)(C.g).withConfig({
                    componentId: "sc-620f2098-0"
                })(le(), (0, P.BC)({
                    md: (0, f.iv)(ee())
                })),
                he = (0, f.ZP)(C.g).withConfig({
                    componentId: "sc-620f2098-1"
                })(te(), (0, P.BC)({
                    md: (0, f.iv)(ae())
                })),
                fe = {
                    watchlist: [],
                    setWatchlist: y.noop,
                    hiddenCollections: [],
                    setHiddenCollections: y.noop
                },
                ke = (0, m.createContext)(fe),
                ve = function(n) {
                    var e = n.currentTab,
                        l = n.emptyView,
                        r = n.paginateViaLoadNext,
                        o = n.rankingsPaginationFragment,
                        c = n.rankings,
                        y = n.displayRankIndex,
                        f = void 0 === y || y,
                        v = n.showCategoryAndChainFilters,
                        x = void 0 === v || v,
                        S = n.showMobileSort,
                        K = void 0 !== S && S,
                        L = (0, M.q)("rankings"),
                        w = o.data,
                        A = o.hasNext,
                        D = o.loadNext,
                        _ = o.isLoadingNext,
                        Z = (0, Gn.Ys)(),
                        R = 0 === (null === c || void 0 === c ? void 0 : c.edges.length),
                        B = function(n) {
                            var e = (0, F.kS)(),
                                l = Yn(),
                                a = (0, kn.XQ)({
                                    isStatsV2Enabled: e
                                }),
                                t = (0, Gn.Ys)(),
                                i = (0, s.Z)(ne("sortBy", {
                                    serializer: kn.JZ,
                                    defaultValue: t[0],
                                    deserializer: function(n) {
                                        return (0, kn.Iv)(n, t, t[0])
                                    }
                                }), 2),
                                r = i[0],
                                o = i[1],
                                u = (0, s.Z)(ne("category", {
                                    serializer: function(n) {
                                        return "allnfts" === n.value ? void 0 : (0, kn.JZ)(n)
                                    },
                                    defaultValue: a[0],
                                    deserializer: function(n) {
                                        return (0, kn.Iv)(n, a, a[0])
                                    }
                                }), 2),
                                c = u[0],
                                d = u[1],
                                g = (0, s.Z)(ne("chain", {
                                    serializer: function(n) {
                                        return "all" === n.value ? void 0 : (0, kn.JZ)(n)
                                    },
                                    defaultValue: l[0],
                                    deserializer: function(n) {
                                        return (0, kn.Iv)(n, l, l[0])
                                    }
                                }), 2),
                                y = g[0],
                                p = g[1],
                                h = (0, m.useState)(n.isLoadingNewFilter),
                                f = h[0],
                                k = h[1],
                                v = (0, m.useCallback)((function(n) {
                                    o(n), k(!0)
                                }), [o, k]),
                                x = (0, m.useCallback)((function(n) {
                                    d(n), k(!0)
                                }), [d, k]),
                                S = (0, m.useCallback)((function(n) {
                                    p(n), k(!0)
                                }), [p, k]);
                            return {
                                sortBy: r,
                                setSortBy: v,
                                category: c,
                                setCategory: x,
                                chain: y,
                                setChain: S,
                                isLoadingNewFilter: f,
                                setIsLoadingNewFilter: k
                            }
                        }({
                            isLoadingNewFilter: !w
                        }),
                        N = B.sortBy,
                        O = B.setSortBy,
                        W = B.category,
                        $ = B.setCategory,
                        E = B.chain,
                        z = B.setChain,
                        Q = B.isLoadingNewFilter,
                        U = B.setIsLoadingNewFilter,
                        q = (0, m.useState)([]),
                        H = q[0],
                        J = q[1],
                        X = (0, m.useState)([]),
                        Y = X[0],
                        nn = X[1],
                        en = (0, m.useState)("top" === e ? "VOLUME" : "DEFAULT"),
                        ln = en[0],
                        an = en[1],
                        tn = (0, m.useState)(!1),
                        rn = tn[0],
                        sn = tn[1],
                        on = (0, m.useState)(0),
                        un = on[0],
                        cn = on[1],
                        dn = Yn().sort(ge);
                    (0, p.Z)((function() {
                        J([]), nn([])
                    }), [e]), (0, m.useEffect)((function() {
                        (0, wn.AQ)({
                            category: W.value,
                            chain: E.value,
                            sortBy: "trending" === e ? null : N.value,
                            columnSort: ln,
                            sortAscending: rn,
                            currentTab: e,
                            currentPage: "trending" === e ? null : un
                        })
                    }), [e, un, W.value, E.value, N.value, rn, ln]);
                    var gn = (0, m.useMemo)((function() {
                            return function(n) {
                                return n.map((function(n) {
                                    return (0, i.Z)((0, t.Z)({}, n), {
                                        avatar: void 0
                                    })
                                }))
                            }(dn)
                        }), [dn]),
                        mn = (0, m.useRef)(null),
                        yn = (0, m.useRef)(null),
                        pn = (0, h.Z)((0, k.ip)((0, P.As)("xl"))),
                        hn = (0, m.useCallback)((function() {
                            var n, e;
                            if (pn) {
                                var l, a, t = (null !== (a = null === (l = yn.current) || void 0 === l ? void 0 : l.offsetTop) && void 0 !== a ? a : 232) - G.E;
                                window.scrollY > t && window.scrollTo(0, t)
                            } else {
                                var i, r, s = (null !== (i = null === (n = mn.current) || void 0 === n ? void 0 : n.offsetTop) && void 0 !== i ? i : 246) - (null !== (r = null === (e = yn.current) || void 0 === e ? void 0 : e.clientHeight) && void 0 !== r ? r : 67);
                                window.scrollY > s && window.scrollTo(0, s)
                            }
                        }), [pn]),
                        fn = function(n) {
                            cn(n), hn()
                        },
                        vn = (0, m.useMemo)((function() {
                            return w && c ? (U(!1), (0, kn.fN)(c, ln, rn, un, N).filter((function(n) {
                                return !Y.includes(n.slug)
                            }))) : (U(!0), [])
                        }), [w, c, U, ln, rn, un, N, Y]);
                    (0, p.Z)((function() {
                        cn(0)
                    }), [E, W, N, ln]);
                    var xn = "top" === e ? 1 : void 0,
                        Sn = (0, m.useMemo)((function() {
                            return 0 === vn.length && "watchlist" === e
                        }), [vn, e]),
                        bn = (0, kn.ZK)(W.value, E.value),
                        Fn = R || bn || Sn,
                        Tn = bn ? L("unsupportedFilter.message", "Stats for these collections are coming soon") : L("noItems.message", "No items found for this search"),
                        Cn = !!c && ((0, I.v$)(c).length > Gn.IV || (0, I.v$)(c).length === Gn.IV && A),
                        Kn = "trending" === e || Fn || !Cn && "watchlist" === e,
                        Pn = R && "watchlist" === e || "trending" === e || Sn,
                        Vn = (0, m.useCallback)((function(n, l) {
                            an(n), sn(l), Dn({
                                category: W.value,
                                chain: E.value,
                                sortBy: "trending" === e ? null : N.value,
                                columnSort: n,
                                sortAscending: l,
                                currentTab: e,
                                currentPage: "trending" === e ? null : un
                            })
                        }), [W.value, E.value, N.value, e, un]),
                        An = (0, m.useCallback)((function(n, e) {
                            Vn(n, e), hn()
                        }), [Vn, hn]),
                        Rn = (0, j.Z)((0, m.useMemo)((function() {
                            return [{
                                header: (0, g.jsx)(xe, {
                                    children: "COLLECTION"
                                })
                            }].concat((0, u.Z)(Gn.Gz.map((function(n) {
                                var e = Gn.$S[n];
                                return {
                                    header: (0, g.jsx)(Se, {
                                        children: e.desktopLabel
                                    }),
                                    sortIndicatorHideMode: "remove",
                                    sort: function(e) {
                                        return An(n, "asc" === e)
                                    },
                                    showSelectedHeader: !0
                                }
                            }))))
                        }), [An]), {
                            index: xn,
                            direction: "desc"
                        }),
                        Bn = (0, m.useCallback)((function(n, l) {
                            return function(a) {
                                n(a);
                                var t = {
                                    path: window.location.pathname,
                                    category: W.value,
                                    chain: E.value,
                                    sortBy: "trending" === e ? null : N.value,
                                    columnSort: ln,
                                    sortAscending: rn,
                                    currentTab: e,
                                    currentPage: "trending" === e ? null : un,
                                    newValue: a.value
                                };
                                l(t)
                            }
                        }), [W.value, E.value, e, N.value, ln, rn, un]),
                        Nn = (0, m.useMemo)((function() {
                            return Object.entries(Gn.$S).reduce((function(n, e) {
                                var l = (0, s.Z)(e, 2),
                                    a = l[0],
                                    t = l[1];
                                if (t.mobile.allowSortDescend) {
                                    var i = [!1, !0].map((function(n) {
                                        return {
                                            sortAscending: n,
                                            label: "".concat(n ? "Lowest" : "Highest", " ").concat(t.mobile.label),
                                            sortKey: a,
                                            show: t.mobile.show
                                        }
                                    }));
                                    return (0, u.Z)(n).concat((0, u.Z)(i))
                                }
                                var r = {
                                    label: t.mobile.label,
                                    sortAscending: !1,
                                    sortKey: a,
                                    show: t.mobile.show
                                };
                                return (0, u.Z)(n).concat([r])
                            }), [])
                        }), []),
                        On = (0, m.useMemo)((function() {
                            var n, e = Nn.findIndex((function(n) {
                                    return n.sortAscending === rn && n.sortKey === ln
                                })),
                                l = Nn[e];
                            return (0, g.jsx)(Te, {
                                appendTo: null !== (n = mn.current) && void 0 !== n ? n : void 0,
                                options: Nn.filter((function(n) {
                                    return n.show
                                })).map((function(n, e) {
                                    return {
                                        value: e.toString(),
                                        label: n.label
                                    }
                                })),
                                setValue: function(n) {
                                    var e = Nn[parseInt(n.value)];
                                    An(e.sortKey, e.sortAscending)
                                },
                                testId: "Rankings--column-sort-small",
                                value: {
                                    value: e.toString(),
                                    label: l.label
                                }
                            })
                        }), [rn, ln, Nn, An]),
                        Wn = (0, m.useMemo)((function() {
                            var n, e, l, a, t, i;
                            return (0, g.jsxs)(g.Fragment, {
                                children: [(0, g.jsx)(pe, {
                                    width: "100%",
                                    children: (0, g.jsxs)(be, {
                                        overflowX: "auto",
                                        padding: {
                                            _: "0 16px",
                                            xl: "initial"
                                        },
                                        width: "100%",
                                        children: [(0, g.jsxs)(b.k, {
                                            paddingRight: "4px",
                                            children: [x && (0, g.jsxs)(g.Fragment, {
                                                children: [(0, g.jsx)(Qn, {
                                                    appendTo: null !== (n = mn.current) && void 0 !== n ? n : void 0,
                                                    options: ye,
                                                    setValue: Bn($, _n),
                                                    testId: "Rankings--category-dropdown-small",
                                                    value: W
                                                }), (0, g.jsx)(Qn, {
                                                    appendTo: null !== (e = mn.current) && void 0 !== e ? e : void 0,
                                                    options: gn,
                                                    setValue: Bn(z, In),
                                                    testId: "Rankings--chain-dropdown-small",
                                                    value: E
                                                })]
                                            }), !Fn && K && On]
                                        }), !Pn && (0, g.jsx)(Qn, {
                                            appendTo: null !== (l = mn.current) && void 0 !== l ? l : void 0,
                                            options: Z,
                                            setValue: Bn(O, Zn),
                                            testId: "Rankings--sortBy-dropdown-small",
                                            timeVariant: !0,
                                            value: N
                                        })]
                                    })
                                }), (0, g.jsx)(he, {
                                    width: "100%",
                                    children: (0, g.jsxs)(V.i, {
                                        overflowX: "auto",
                                        padding: {
                                            _: "0 16px",
                                            xl: "initial"
                                        },
                                        width: "100%",
                                        children: [(0, g.jsxs)(b.k, {
                                            children: [x && (0, g.jsxs)(g.Fragment, {
                                                children: [(0, g.jsx)(Qn, {
                                                    appendTo: null !== (a = mn.current) && void 0 !== a ? a : void 0,
                                                    options: me,
                                                    setValue: Bn($, _n),
                                                    testId: "Rankings--category-dropdown",
                                                    value: W
                                                }), (0, g.jsx)(Qn, {
                                                    appendTo: null !== (t = mn.current) && void 0 !== t ? t : void 0,
                                                    options: gn,
                                                    setValue: Bn(z, In),
                                                    testId: "Rankings--chain-dropdown",
                                                    value: E
                                                })]
                                            }), !Fn && K && On]
                                        }), !Pn && (0, g.jsx)(Qn, {
                                            appendTo: null !== (i = mn.current) && void 0 !== i ? i : void 0,
                                            options: Z,
                                            setValue: Bn(O, Zn),
                                            testId: "Rankings--sortBy-dropdown",
                                            timeVariant: !0,
                                            value: N
                                        })]
                                    })
                                })]
                            })
                        }), [W, E, $, z, O, N, gn, Bn, x, Z, Pn, On, K, Fn]),
                        $n = {
                            top: G.y,
                            overflowX: "auto",
                            overflowY: "visible",
                            padding: {
                                _: "8px",
                                xl: "16px"
                            },
                            border: "0px none transparent !important"
                        },
                        En = (0, g.jsx)(g.Fragment, {
                            children: Fn ? (0, g.jsxs)(g.Fragment, {
                                children: [(0, g.jsx)(Fe, (0, i.Z)((0, t.Z)({
                                    ref: yn
                                }, $n), {
                                    children: Wn
                                })), (0, g.jsx)(Mn, {
                                    message: null !== l && void 0 !== l ? l : Tn
                                })]
                            }) : (0, g.jsx)(C.g, {
                                margin: {
                                    _: "0 -16px",
                                    xl: "initial"
                                },
                                children: (0, g.jsx)(jn, {
                                    displayRankIndex: f,
                                    filters: Wn,
                                    isLoading: Q || _,
                                    isWatchlistTab: "watchlist" === e,
                                    rows: vn,
                                    sortBy: N,
                                    sortableHeaders: Rn
                                })
                            })
                        }),
                        zn = "All chains" !== E.label ? "".concat(E.label, " ") : "";
                    return (0, g.jsx)(Ln.nx, {
                        eventParams: {
                            chain: E.value,
                            category: W.value,
                            sortBy: N.value,
                            columnSort: ln,
                            sortAscending: rn,
                            currentTab: e,
                            currentPage: un
                        },
                        eventSource: Gn.jf,
                        children: (0, g.jsx)(ke.Provider, {
                            value: {
                                watchlist: H,
                                setWatchlist: J,
                                hiddenCollections: Y,
                                setHiddenCollections: nn
                            },
                            children: (0, g.jsx)(Jn.l, {
                                chainLabel: zn,
                                chainValue: E.value,
                                currentTab: e,
                                pagination: !Kn && (r ? (0, g.jsx)(T, {
                                    currentPage: un,
                                    hasMore: A || !!c && (0, I.v$)(c).length > (un + 1) * Gn.IV,
                                    limit: void 0,
                                    loadNext: (0, a.Z)(d().mark((function n() {
                                        return d().wrap((function(n) {
                                            for (;;) switch (n.prev = n.next) {
                                                case 0:
                                                    return n.next = 2, D(Gn.IV);
                                                case 2:
                                                    return n.abrupt("return", n.sent);
                                                case 3:
                                                case "end":
                                                    return n.stop()
                                            }
                                        }), n)
                                    }))),
                                    pageSize: Gn.IV,
                                    setCurrentPage: fn
                                }) : (0, g.jsx)(T, {
                                    currentPage: un,
                                    hasMore: !0,
                                    limit: c ? (0, I.v$)(c).length : Gn.IV,
                                    pageSize: Gn.IV,
                                    setCurrentPage: fn
                                })),
                                tableContent: En
                            })
                        })
                    })
                },
                xe = (0, f.ZP)(L.xv).attrs({
                    size: "tiny",
                    weight: "semibold"
                }).withConfig({
                    componentId: "sc-620f2098-2"
                })(ie()),
                Se = (0, f.ZP)(L.xv).attrs({
                    size: "tiny",
                    weight: "semibold"
                }).withConfig({
                    componentId: "sc-620f2098-3"
                })(re(), (function(n) {
                    return n.theme.colors.text.heading
                })),
                be = (0, f.ZP)(V.i).withConfig({
                    componentId: "sc-620f2098-4"
                })(se()),
                Fe = (0, f.ZP)(K.mn.HeaderContainer).withConfig({
                    componentId: "sc-620f2098-5"
                })(oe()),
                Te = (0, f.ZP)(Qn).withConfig({
                    componentId: "sc-620f2098-6"
                })(ce(), (0, P.BC)({
                    lg: (0, f.iv)(ue())
                }))
        },
        15876: function(n, e, l) {
            l.d(e, {
                l: function() {
                    return b
                }
            });
            var a = l(19989),
                t = l(3204),
                i = l(24246),
                r = l(27378),
                s = l(47892),
                o = l(40325),
                u = l(53585),
                c = l(38996),
                d = l(96150),
                g = l(72363),
                m = l(316),
                y = l(68283),
                p = l(84762),
                h = l(59533),
                f = l(88747),
                k = l(6300);

            function v() {
                var n = (0, a.Z)(["\n  max-width: 1920px;\n"]);
                return v = function() {
                    return n
                }, n
            }
            var x = [{
                    id: "top",
                    label: "Top",
                    path: ""
                }, {
                    id: "trending",
                    label: "Trending",
                    path: "trending"
                }],
                S = (0, t.Z)(x).concat([{
                    id: "watchlist",
                    label: "Watchlist",
                    path: "watchlist"
                }]),
                b = function(n) {
                    var e = n.currentTab,
                        l = n.tableContent,
                        a = n.pagination,
                        s = n.chainLabel,
                        c = n.chainValue,
                        v = (0, k.q)("rankings"),
                        b = (0, f.k6)(),
                        T = (0, r.useRef)(null),
                        C = (0, i.jsxs)(d.k, {
                            paddingBottom: "48px",
                            paddingTop: "64px",
                            children: [(0, i.jsx)(g.pU, {
                                greaterThanOrEqual: "lg",
                                children: (0, i.jsx)(m.xv.Display, {
                                    size: "large",
                                    children: v("header.title", "Collection stats")
                                })
                            }), (0, i.jsx)(g.pU, {
                                lessThan: "lg",
                                children: (0, i.jsx)(m.xv.Display, {
                                    size: "medium",
                                    children: v("header.title", "Collection stats")
                                })
                            })]
                        }),
                        K = (0, i.jsxs)(i.Fragment, {
                            children: [C, (0, i.jsx)(u.g, {
                                margin: {
                                    _: "0 -16px",
                                    xl: 0
                                },
                                paddingBottom: "10px",
                                children: (0, i.jsx)(p.n, {
                                    baseUrl: "/rankings/",
                                    currentTab: e,
                                    isLoading: !1,
                                    padding: {
                                        _: "0 16px",
                                        xl: 0
                                    },
                                    tabs: (0, t.Z)(b ? S : x)
                                })
                            }), l]
                        }),
                        P = v("rankings.head.description", "Browse through the top {{chainLabel}}NFT collections ranked by volume, floor price and other statistics.", {
                            chainLabel: s
                        }, {
                            forceString: !0
                        }),
                        V = v("rankings.head.title", "Top {{chainLabel}}NFTs", {
                            chainLabel: s
                        }, {
                            forceString: !0
                        });
                    return (0, i.jsx)(y.d, {
                        children: (0, i.jsxs)(o.v, {
                            className: "Rankings",
                            hideFooter: !0,
                            children: [(0, i.jsx)(h.k, {
                                description: P,
                                title: (0, h.t)(V),
                                url: "https://opensea.io/rankings?chain=".concat(c)
                            }), (0, i.jsx)(F, {
                                marginBottom: a ? 0 : {
                                    _: "32px",
                                    xl: "64px"
                                },
                                ref: T,
                                children: K
                            }), a]
                        })
                    })
                },
                F = (0, s.ZP)(c.W).withConfig({
                    componentId: "sc-dd63c93c-0"
                })(v())
        },
        74154: function(n, e, l) {
            l.d(e, {
                z5: function() {
                    return u.z5
                },
                Eh: function() {
                    return g
                },
                Uj: function() {
                    return m
                },
                $p: function() {
                    return O
                }
            });
            var a = l(24246),
                t = l(27378),
                i = l(44072),
                r = l(8604),
                s = l(4402),
                o = (l(2417), l(13309)),
                u = l(58578),
                c = l(86933),
                d = l(25796),
                g = function(n) {
                    var e, t = n.data,
                        i = (0, s.usePaginationFragment)(l(94776), t);
                    return (0, a.jsx)(c.C, {
                        currentTab: "top",
                        rankings: (null === (e = i.data) || void 0 === e ? void 0 : e.rankings) || null,
                        rankingsPaginationFragment: i
                    })
                };
            g.query = l(71875), g.cachePolicy = {
                maxAge: 30,
                revalidate: 60
            }, g.getInitialProps = o.Z.nextParser({
                category: o.Z.Optional(o.Z.CategorySlug),
                chain: o.Z.Optional(o.Z.ChainIdentifier),
                sortBy: o.Z.Optional(o.Z.string)
            }, (function(n) {
                var e, l = n.category,
                    a = n.chain,
                    t = n.sortBy,
                    s = null === (e = (0, d.XQ)({
                        isStatsV2Enabled: !1
                    }).find((function(n) {
                        return n.value === l && "new" !== l
                    }))) || void 0 === e ? void 0 : e.value;
                return {
                    categorySlug: l,
                    variables: {
                        chain: a ? [a] : void 0,
                        count: (0, d.vc)(l, a),
                        createdAfter: "new" === l ? (0, i.Z)((0, r.Z)(new Date, u.Uq)) : void 0,
                        sortBy: u.G2.get(t || "one_day_volume"),
                        parents: s ? [s] : void 0
                    }
                }
            }));
            var m = function(n) {
                var e, t = n.data,
                    i = (0, s.usePaginationFragment)(l(84951), t);
                return (0, a.jsx)(c.C, {
                    currentTab: "trending",
                    rankings: (null === (e = i.data) || void 0 === e ? void 0 : e.trendingCollections) || null,
                    rankingsPaginationFragment: i
                })
            };
            m.query = l(45810), m.cachePolicy = {
                maxAge: 30,
                revalidate: 60
            }, m.getInitialProps = o.Z.nextParser({
                category: o.Z.Optional(o.Z.CategorySlug),
                chain: o.Z.Optional(o.Z.ChainIdentifier),
                sortBy: o.Z.Optional(o.Z.string)
            }, (function(n) {
                var e = n.category,
                    l = n.chain;
                return {
                    variables: {
                        chain: l ? [l] : void 0,
                        count: d.AQ,
                        categories: e ? [e] : [],
                        eligibleCount: d.md
                    }
                }
            }));
            var y = l(98784),
                p = l(87481),
                h = l(36332),
                f = l(86676),
                k = l(34636),
                v = l(6300),
                x = l(85034),
                S = l(70169),
                b = l(19989),
                F = l(47892),
                T = l(56656),
                C = l(377),
                K = l(72363),
                P = l(316);

            function V() {
                var n = (0, b.Z)(["\n      display: none;\n    "]);
                return V = function() {
                    return n
                }, n
            }

            function j() {
                var n = (0, b.Z)(["\n  ", "\n"]);
                return j = function() {
                    return n
                }, n
            }

            function L() {
                var n = (0, b.Z)(["\n      display: flex;\n    "]);
                return L = function() {
                    return n
                }, n
            }

            function w() {
                var n = (0, b.Z)(["\n  display: none;\n  ", "\n"]);
                return w = function() {
                    return n
                }, n
            }
            var A = (0, F.ZP)(C._).withConfig({
                    componentId: "sc-103e993a-0"
                })(j(), (0, K.BC)({
                    sm: (0, F.iv)(V())
                })),
                D = (0, F.ZP)(C._).withConfig({
                    componentId: "sc-103e993a-1"
                })(w(), (0, K.BC)({
                    sm: (0, F.iv)(L())
                })),
                _ = function(n) {
                    var e = n.text,
                        l = n.buttonText,
                        t = n.buttonProps;
                    return (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsxs)(A, {
                            padding: "64px 0",
                            children: [(0, a.jsx)(P.xv.Body, {
                                color: "text.subtle",
                                paddingBottom: "24px",
                                size: "medium",
                                textAlign: "center",
                                weight: "semibold",
                                children: e
                            }), (0, a.jsx)(T.zx, (0, S.Z)((0, x.Z)({}, t), {
                                size: "xsmall",
                                children: l
                            }))]
                        }), (0, a.jsxs)(D, {
                            padding: "64px 0",
                            children: [(0, a.jsx)(P.xv.Heading, {
                                color: "text.subtle",
                                paddingBottom: "24px",
                                size: "small",
                                textAlign: "center",
                                children: e
                            }), (0, a.jsx)(T.zx, (0, S.Z)((0, x.Z)({}, t), {
                                size: "small",
                                children: l
                            }))]
                        })]
                    })
                },
                I = function() {
                    var n = (0, v.q)("rankings"),
                        e = n("connectWallet.text", "Connect your wallet to view your watchlist."),
                        l = n("connectWallet.buttonCTA", "Connect wallet"),
                        t = (0, p.b)().updateContext;
                    return (0, a.jsx)(_, {
                        buttonProps: {
                            onClick: function() {
                                return t({
                                    isWalletSidebarOpen: !0
                                })
                            }
                        },
                        buttonText: l,
                        text: e
                    })
                },
                Z = function() {
                    var n = (0, v.q)("rankings"),
                        e = n("emptyWatchlist.text", "Collections you add to your watchlist will appear here."),
                        l = n("emptyWatchlist.buttonCTA", "Explore collections");
                    return (0, a.jsx)(_, {
                        buttonProps: {
                            href: "/rankings"
                        },
                        buttonText: l,
                        text: e
                    })
                },
                R = l(15876),
                B = function(n) {
                    var e, t, i = n.data,
                        r = n.identity,
                        o = (0, s.usePaginationFragment)(l(46991), i);
                    return (0, a.jsx)(c.C, {
                        currentTab: "watchlist",
                        displayRankIndex: !1,
                        emptyView: (0, a.jsx)(Z, {}),
                        paginateViaLoadNext: !0,
                        rankings: r && (null === (t = null === (e = o.data) || void 0 === e ? void 0 : e.getAccount.user) || void 0 === t ? void 0 : t.collectionWatchlist) || null,
                        rankingsPaginationFragment: o,
                        showCategoryAndChainFilters: !1,
                        showMobileSort: !0
                    })
                },
                N = function() {
                    return (0, t.useEffect)((function() {
                        (0, f.AQ)({
                            category: "allnfts",
                            chain: "all",
                            currentTab: "watchlist",
                            sortBy: null,
                            columnSort: "Volume",
                            sortAscending: !1,
                            currentPage: null
                        })
                    }), []), (0, a.jsx)(h.nx, {
                        eventParams: {
                            currentTab: "watchlist"
                        },
                        eventSource: u.jf,
                        children: (0, a.jsx)(R.l, {
                            chainLabel: "",
                            chainValue: "all",
                            currentTab: "watchlist",
                            pagination: (0, a.jsx)(a.Fragment, {}),
                            tableContent: (0, a.jsx)(I, {})
                        })
                    })
                },
                O = function(n) {
                    var e, l = n.data,
                        t = null === (e = (0, p.b)().wallet.getActiveAccountKey()) || void 0 === e ? void 0 : e.address,
                        i = (0, y.isEmpty)(l) ? null : l;
                    return t ? (0, a.jsx)(B, {
                        data: i,
                        identity: t
                    }) : (0, a.jsx)(N, {})
                };
            O.query = l(2327), O.getInitialProps = function(n) {
                var e, l = null === (e = k.Z.fromContext(n).getActiveAccountKey()) || void 0 === e ? void 0 : e.address;
                return {
                    identity: l,
                    variables: {
                        count: (0, d.vc)(void 0, void 0, !0),
                        identity: l,
                        noIdentity: !l
                    }
                }
            }
        },
        25796: function(n, e, l) {
            l.d(e, {
                AQ: function() {
                    return g
                },
                Al: function() {
                    return F
                },
                HZ: function() {
                    return b
                },
                Iv: function() {
                    return k
                },
                JZ: function() {
                    return v
                },
                KO: function() {
                    return j
                },
                XQ: function() {
                    return V
                },
                ZK: function() {
                    return x
                },
                ef: function() {
                    return P
                },
                fN: function() {
                    return h
                },
                fU: function() {
                    return w
                },
                g5: function() {
                    return T
                },
                i1: function() {
                    return L
                },
                md: function() {
                    return d
                },
                rM: function() {
                    return C
                },
                vc: function() {
                    return S
                }
            });
            var a = l(85034),
                t = l(70169),
                i = l(51318),
                r = l(59809),
                s = l(10412),
                o = l(11652),
                u = l(70884),
                c = l(58578),
                d = 500,
                g = 100,
                m = 1e-5,
                y = ["oneDayChange", "sevenDayChange", "thirtyDayChange"],
                p = ["percentUniqueOwners", "percentListed"],
                h = function(n, e, l, i, s) {
                    var u = (0, r.v$)(n).length,
                        d = (0, r.v$)(n).map((function(n, e) {
                            return (0, t.Z)((0, a.Z)({}, n), {
                                index: e
                            })
                        })).slice(0, u),
                        g = f(e, s);
                    return g && d.sort((function(n, e) {
                        return function(n, e, a) {
                            var t, i, r = l ? -1 : 1,
                                s = l ? 1 : -1;
                            if ("percentUniqueOwners" === a) t = n.statsV2.numOwners / parseFloat(n.statsV2.totalQuantity), i = e.statsV2.numOwners / parseFloat(e.statsV2.totalQuantity);
                            else if ("percentListed" === a) {
                                if (t = n.statsV2.totalListed / n.statsV2.totalSupply, i = e.statsV2.totalListed / e.statsV2.totalSupply, n.statsV2.totalSupply !== parseFloat(n.statsV2.totalQuantity)) return r;
                                if (e.statsV2.totalSupply !== parseFloat(e.statsV2.totalQuantity)) return s
                            } else if ("floorPrice" === a) {
                                var o, u, c, d;
                                if (t = parseFloat(null !== (c = null === (o = n.statsV2.floorPrice) || void 0 === o ? void 0 : o.eth) && void 0 !== c ? c : "0"), i = parseFloat(null !== (d = null === (u = e.statsV2.floorPrice) || void 0 === u ? void 0 : u.eth) && void 0 !== d ? d : "0"), 0 === t || 0 === n.statsV2.totalListed) return r;
                                if (0 === i || 0 === e.statsV2.totalListed) return s
                            } else t = n.statsV2[a], i = e.statsV2[a];
                            if (p.includes(a)) {
                                if (t > 1 || t < m) return r;
                                if (i > 1 || i < m) return s
                            }
                            if (y.includes(a)) {
                                if (0 === t) return r;
                                if (0 === i) return s
                            }
                            return t && i ? t > i ? -1 : i > t ? 1 : 0 : t ? -1 : 1
                        }(n, e, g)
                    })), "VOLUME" === e && d.sort((function(n, e) {
                        return function(n, e, l) {
                            var a = K(n.statsV2, l).eth,
                                t = K(e.statsV2, l).eth;
                            return (0, o.bn)(a).isGreaterThan(t) ? -1 : (0, o.bn)(t).isGreaterThan(a) ? 1 : 0
                        }(n, e, s)
                    })), (l ? d.reverse() : d).slice(i * c.IV, (i + 1) * c.IV)
                },
                f = function(n, e) {
                    if ("FLOOR PRICE" === n) return "floorPrice";
                    if ("% CHANGE" === n && e) {
                        if ("one_day_volume" === e.value) return "oneDayChange";
                        if ("seven_day_volume" === e.value) return "sevenDayChange";
                        if ("thirty_day_volume" === e.value) return "thirtyDayChange"
                    }
                    if ("SALES" === n && e) {
                        if ("one_day_volume" === e.value) return "oneDaySales";
                        if ("seven_day_volume" === e.value) return "sevenDaySales";
                        if ("thirty_day_volume" === e.value) return "thirtyDaySales";
                        if ("total_volume" === e.value) return "totalSales"
                    }
                    return "% UNIQUE OWNERS" === n ? "percentUniqueOwners" : "% ITEMS LISTED" === n && "percentListed"
                },
                k = function(n, e, l) {
                    return n && null !== (a = e.find((function(e) {
                        return e.value === n
                    }))) && void 0 !== a ? a : l;
                    var a
                },
                v = function(n) {
                    return n.value
                },
                x = function(n, e) {
                    return !i.d && "art" === n && ("matic" === e || "klaytn" === e)
                },
                S = function(n, e, l) {
                    if (l) return 100;
                    if (!i.d) {
                        if ("art" === n) return 500;
                        if (void 0 === e || (0, s.$F)(e) || (0, s.mc)(e)) return 1e3
                    }
                    return 100
                },
                b = function(n) {
                    return "".concat(n.absoluteValue().isLessThan(1) ? n.toFixed(2) : n.absoluteValue().isLessThan(1e4) ? Number(n.toFixed(0)).toLocaleString() : (0, o.nZ)(n, {
                        digits: 0,
                        threshold: 1e4
                    }))
                },
                F = function(n) {
                    return "".concat(n.absoluteValue().isLessThan(1) ? n.toFixed(2) : Math.min(Number(n.toFixed(0)), 999999999).toLocaleString())
                },
                T = function(n) {
                    return "".concat(n.absoluteValue().isLessThan(1e4) ? Number(n.toFixed(0)).toLocaleString() : (0, o.nZ)(n, {
                        digits: 0,
                        threshold: 1e4
                    }))
                },
                C = function(n) {
                    var e = (0, o.bn)(n);
                    if (e.isZero()) return "0";
                    var l = (0, o.bn)(.01);
                    return e.isGreaterThan(l) ? e.isInteger() ? Number(e).toLocaleString() : "".concat(e.toFixed(2)) : "< ".concat(l.toFixed(2))
                },
                K = function(n, e) {
                    var l = null === e || void 0 === e ? void 0 : e.value;
                    return "one_day_volume" === l ? n.oneDayVolume : "seven_day_volume" === l ? n.sevenDayVolume : "thirty_day_volume" === l ? n.thirtyDayVolume : n.totalVolume
                },
                P = function(n, e) {
                    var l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        a = K(e.statsV2, n).unit;
                    return l ? b((0, o.bn)(a)) : (0, o.SG)(a, 2)
                },
                V = function(n) {
                    var e = n.isStatsV2Enabled;
                    return [{
                        slug: "allnfts",
                        name: "All categories"
                    }, {
                        slug: "new",
                        name: "New"
                    }].concat(u.aA).map((function(n) {
                        return {
                            label: n.name,
                            value: n.slug,
                            avatar: e ? void 0 : (0, t.Z)((0, a.Z)({}, c.wq), {
                                src: "/static/images/icons/".concat(n.slug, "-light.svg"),
                                alt: n.name
                            })
                        }
                    }))
                },
                j = function(n, e) {
                    var l = e.statsV2;
                    return "one_day_volume" === n.value ? l.oneDayChange : "seven_day_volume" === n.value ? l.sevenDayChange : "thirty_day_volume" === n.value ? l.thirtyDayChange : 0
                },
                L = function(n, e) {
                    var l = e.statsV2;
                    return "one_day_volume" === n.value ? l.oneDaySales : "seven_day_volume" === n.value ? l.sevenDaySales : "thirty_day_volume" === n.value ? l.thirtyDaySales : l.totalSales
                },
                w = function(n) {
                    return n.isLessThan(1) ? n.dp(2).toLocaleString() : n.toFixed(0).toLocaleString()
                }
        },
        47788: function(n, e, l) {
            l.d(e, {
                E: function() {
                    return g
                }
            });
            var a = l(24246),
                t = (l(27378), l(46764)),
                i = l(510),
                r = l(3405),
                s = l(6300),
                o = l(11652),
                u = l(65175),
                c = l(70884),
                d = function(n) {
                    var e = n.value;
                    return (0, a.jsx)(u.u, {
                        content: (0, o.zh)(e),
                        children: (0, a.jsx)(r.mn.StatText, {
                            children: e ? (0, o.nZ)(e) : c.Zx
                        })
                    })
                },
                g = function(n) {
                    var e, l = n.data,
                        u = (0, s.q)("rankings"),
                        c = l.statsV2,
                        g = l.nativePaymentAsset,
                        m = (0, o.bn)(c.sevenDayChange),
                        y = (null === (e = c.floorPrice) || void 0 === e ? void 0 : e.unit) ? (0, o.Yy)(c.floorPrice.unit) : void 0,
                        p = m.times(100).toFixed(2).toLocaleString(),
                        h = m.isGreaterThan(0);
                    return (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsxs)(r.mn.StatContainer, {
                            children: [(0, a.jsx)(r.mn.StatHeader, {
                                children: u("stats.header.sevenDayChange", "7d %")
                            }), m.isEqualTo(0) ? (0, a.jsx)(r.mn.StatText, {
                                children: "---"
                            }) : (0, a.jsx)(r.mn.StatText, {
                                as: "span",
                                color: h ? "seaGrass" : "coral",
                                children: (0, a.jsx)(i.n, {
                                    children: "".concat(h ? "+" : "").concat(p, "%")
                                })
                            })]
                        }), (0, a.jsxs)(r.mn.StatContainer, {
                            children: [(0, a.jsx)(r.mn.StatHeader, {
                                children: u("stats.header.floorPrice", "Floor Price")
                            }), (0, a.jsx)(t.p, {
                                logo: g,
                                value: y
                            })]
                        }), (0, a.jsxs)(r.mn.StatContainer, {
                            children: [(0, a.jsx)(r.mn.StatHeader, {
                                children: u("stats.header.owners", "Owners")
                            }), (0, a.jsx)(d, {
                                value: c.numOwners
                            })]
                        }), (0, a.jsxs)(r.mn.StatContainer, {
                            children: [(0, a.jsx)(r.mn.StatHeader, {
                                children: u("stats.header.items", "Items")
                            }), (0, a.jsx)(d, {
                                value: c.totalSupply
                            })]
                        })]
                    })
                }
        },
        9572: function(n, e, l) {
            l.d(e, {
                W: function() {
                    return b
                }
            });
            var a = l(19989),
                t = l(24246),
                i = (l(27378), l(38579)),
                r = l.n(i),
                s = l(76449),
                o = l(4402),
                u = l(47892),
                c = l(48028),
                d = l(510),
                g = l(53585),
                m = l(96150),
                y = l(83989),
                p = l(316),
                h = l(6300),
                f = (l(59809), l(90761)),
                k = l(70884);

            function v() {
                var n = (0, a.Z)(["\n  color: inherit;\n\n  :hover {\n    color: inherit;\n  }\n"]);
                return v = function() {
                    return n
                }, n
            }

            function x() {
                var n = (0, a.Z)(["\n  flex: none;\n  overflow: hidden;\n  position: relative;\n\n  border-width: 1px;\n  border-style: solid;\n  border-radius: ", ";\n\n  ", "\n"]);
                return x = function() {
                    return n
                }, n
            }

            function S() {
                var n = (0, a.Z)(["\n  gap: 4px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n"]);
                return S = function() {
                    return n
                }, n
            }
            var b = function(n) {
                    var e = n.collection,
                        a = n.subtitle,
                        i = (0, h.q)("statsV2"),
                        s = (0, o.useFragment)(l(74368), e);
                    if (!s) return null;
                    var u = void 0 !== a,
                        m = u ? "small" : "medium",
                        f = u ? "tiny" : "small",
                        v = s.name,
                        x = s.isVerified,
                        S = u ? 48 : 64,
                        b = (0, t.jsx)(g.g, {
                            display: "inline-flex",
                            marginBottom: "3px",
                            verticalAlign: "middle",
                            children: (0, t.jsx)(c.o, {
                                showTooltip: !1,
                                size: f,
                                verificationStatus: "VERIFIED"
                            })
                        }),
                        K = (0, t.jsx)(C, {
                            alignItems: "center",
                            alignSelf: "left",
                            children: (0, t.jsx)(p.xv.Body, {
                                color: "text.heading",
                                margin: "0px",
                                size: m,
                                weight: "semibold",
                                width: "100%",
                                children: (0, t.jsxs)(d.n, {
                                    lines: 1,
                                    children: [v, x && b]
                                })
                            })
                        });
                    return (0, t.jsxs)(F, {
                        alignItems: "center",
                        justifyContent: "center",
                        children: [(0, t.jsx)(T, {
                            style: {
                                height: S,
                                width: S
                            },
                            children: (0, t.jsx)(r(), {
                                alt: i("stats.collectionImage", "Collection Image"),
                                layout: "fill",
                                objectFit: "cover",
                                src: s.imageUrl || k.WF,
                                unoptimized: !0
                            })
                        }), (0, t.jsxs)(y.t, {
                            alignItems: "flex-start",
                            alignSelf: "center",
                            paddingLeft: u ? "10px" : "24px",
                            children: [K, u && a]
                        })]
                    })
                },
                F = (0, u.ZP)(m.k).withConfig({
                    componentId: "sc-a8965588-0"
                })(v()),
                T = u.ZP.div.withConfig({
                    componentId: "sc-a8965588-1"
                })(x(), (function(n) {
                    return n.theme.borderRadius.default
                }), (0, f.Um)({
                    variants: {
                        light: {
                            borderColor: (0, s.m4)(0, 0, 0, .1)
                        },
                        dark: {
                            borderColor: (0, s.m4)(255, 255, 255, .1)
                        }
                    }
                })),
                C = (0, u.ZP)(m.k).withConfig({
                    componentId: "sc-a8965588-2"
                })(S())
        },
        96053: function(n, e, l) {
            l.d(e, {
                lG: function() {
                    return V
                },
                _5: function() {
                    return j
                },
                Hd: function() {
                    return L
                }
            });
            var a = l(19989),
                t = l(24246),
                i = (l(27378), l(47892)),
                r = l(510),
                s = l(53585),
                o = l(3405),
                u = l(96150),
                c = l(83989),
                d = l(72363),
                g = l(316),
                m = l(65175),
                y = l(25796),
                p = l(6300),
                h = l(20889),
                f = l(11652),
                k = l(70884),
                v = l(9572),
                x = l(94982),
                S = l(17041);

            function b() {
                var n = (0, a.Z)([""]);
                return b = function() {
                    return n
                }, n
            }

            function F() {
                var n = (0, a.Z)([""]);
                return F = function() {
                    return n
                }, n
            }

            function T() {
                var n = (0, a.Z)(["\n      display: flex;\n    "]);
                return T = function() {
                    return n
                }, n
            }

            function C() {
                var n = (0, a.Z)(["\n  display: none;\n  ", "\n"]);
                return C = function() {
                    return n
                }, n
            }

            function K() {
                var n = (0, a.Z)(["\n      display: flex;\n    "]);
                return K = function() {
                    return n
                }, n
            }

            function P() {
                var n = (0, a.Z)(["\n  display: none;\n  ", "\n"]);
                return P = function() {
                    return n
                }, n
            }
            var V = function(n) {
                    var e, l = n.data,
                        a = n.sortBy,
                        i = n.displayRankIndex,
                        c = void 0 === i || i,
                        d = n.watchlistData,
                        b = n.isWatchlistEnabled,
                        F = n.isWatchlistTab,
                        T = n.useAssetLogo,
                        C = (0, p.q)("statsV2"),
                        K = l.createdDate,
                        P = l.statsV2,
                        V = l.slug,
                        D = l.relayId,
                        _ = (0, h.Pg)(new Date(K)),
                        I = parseFloat(P.totalQuantity),
                        Z = (null === (e = P.floorPrice) || void 0 === e ? void 0 : e.unit) ? (0, y.rM)(P.floorPrice.unit) : void 0,
                        R = (0, y.ef)(a, l, !0),
                        B = (0, f.bn)((0, y.KO)(a, l)),
                        N = (0, y.Al)(B.times(100)),
                        O = B.isGreaterThan(0),
                        W = (0, y.i1)(a, l),
                        $ = (0, y.g5)((0, f.bn)(W)),
                        E = (0, f.bn)(P.numOwners / I).times(100),
                        z = (0, y.fU)(E),
                        Q = P.numOwners.toLocaleString(),
                        U = (0, f.bn)(P.totalListed / P.totalSupply).times(100),
                        q = (0, y.fU)(U),
                        H = P.totalSupply.toLocaleString(),
                        M = P.totalListed.toLocaleString(),
                        G = I != P.totalSupply || U.isGreaterThan(100) || 0 === I,
                        J = (0, t.jsxs)(o.mn.Cell, {
                            justifyContent: "flex-start",
                            width: {
                                _: "492px",
                                lg: "460px",
                                xl: "492px"
                            },
                            children: [c && (0, t.jsx)(s.g, {
                                minWidth: "52px",
                                paddingX: "12px",
                                children: (0, t.jsx)(L, {
                                    children: (0, t.jsx)(r.n, {
                                        children: l.index + 1
                                    })
                                })
                            }), (0, t.jsx)(v.W, {
                                collection: l
                            })]
                        }),
                        X = (0, t.jsx)(o.mn.Cell, {
                            justifyContent: "flex-end",
                            children: (0, t.jsx)(x.P, {
                                logo: l.nativePaymentAsset,
                                useAssetLogo: T,
                                value: R
                            })
                        }),
                        Y = (0, t.jsx)(o.mn.Cell, {
                            justifyContent: "flex-end",
                            children: B.isEqualTo(0) ? (0, t.jsx)(j, {
                                children: k.eJ
                            }) : (0, t.jsx)(g.xv.Body, {
                                color: O ? "seaGrass" : "darkCoral",
                                size: "medium",
                                weight: "semibold",
                                children: (0, t.jsx)(r.n, {
                                    children: "".concat(O ? "+" : "").concat(N, "%")
                                })
                            })
                        });
                    _ && B.isEqualTo(0) && (Y = (0, t.jsx)(m.u, {
                        content: C("stats.tooltip.new", "New"),
                        offset: [0, 10],
                        placement: m.E.RIGHT,
                        children: Y
                    }));
                    var nn = (0, t.jsx)(o.mn.Cell, {
                            justifyContent: "flex-end",
                            children: (0, t.jsx)(x.P, {
                                logo: l.nativePaymentAsset,
                                useAssetLogo: T,
                                value: Z
                            })
                        }),
                        en = (0, t.jsx)(o.mn.Cell, {
                            justifyContent: "flex-end",
                            width: "88px",
                            children: (0, t.jsx)(j, {
                                children: (0, t.jsx)(r.n, {
                                    children: $
                                })
                            })
                        }),
                        ln = (0, t.jsx)(o.mn.Cell, {
                            justifyContent: "flex-end",
                            children: E.isGreaterThan(100) || 0 === I ? (0, t.jsx)(j, {
                                children: k.eJ
                            }) : (0, t.jsx)(j, {
                                children: (0, t.jsx)(r.n, {
                                    children: "".concat(z, "%")
                                })
                            })
                        }),
                        an = (0, t.jsx)(o.mn.Cell, {
                            justifyContent: "flex-end",
                            children: (0, t.jsx)(L, {
                                children: C("stats.numOwners", "{{numOwnersString}} owners", {
                                    numOwnersString: Q
                                })
                            })
                        }),
                        tn = (0, t.jsxs)(A, {
                            alignItems: "flex-end",
                            alignSelf: "center",
                            children: [(0, t.jsx)(u.k, {
                                textAlign: "right",
                                children: ln
                            }), (0, t.jsx)(u.k, {
                                textAlign: "right",
                                children: an
                            })]
                        }),
                        rn = (0, t.jsx)(o.mn.Cell, {
                            justifyContent: "flex-end",
                            children: (0, t.jsx)(j, {
                                children: (0, t.jsx)(r.n, {
                                    children: "".concat(q, "%")
                                })
                            })
                        }),
                        sn = (0, t.jsx)(o.mn.Cell, {
                            justifyContent: "flex-end",
                            children: (0, t.jsx)(L, {
                                children: C("stats.numberListed", "{{numListedString}} of {{numItemsString}}", {
                                    numListedString: M,
                                    numItemsString: H
                                })
                            })
                        }),
                        on = G ? (0, t.jsx)(w, {
                            justifyContent: "flex-end",
                            children: (0, t.jsx)(j, {
                                children: k.eJ
                            })
                        }) : (0, t.jsxs)(A, {
                            alignItems: "flex-end",
                            alignSelf: "center",
                            children: [(0, t.jsx)(u.k, {
                                textAlign: "right",
                                children: rn
                            }), (0, t.jsx)(u.k, {
                                textAlign: "right",
                                children: sn
                            })]
                        }),
                        un = (0, t.jsx)(u.k, {
                            alignItems: "center",
                            padding: "0 16px 0px 32px",
                            children: (0, t.jsx)(S.x, {
                                collectionId: D,
                                data: d,
                                hideCollections: F,
                                slug: V
                            })
                        });
                    return (0, t.jsxs)(t.Fragment, {
                        children: [J, X, Y, nn, en, tn, on, b && un]
                    })
                },
                j = (0, i.ZP)(g.xv).attrs({
                    size: "medium",
                    weight: "semibold",
                    color: "text.heading"
                }).withConfig({
                    componentId: "sc-e4b417b6-0"
                })(b()),
                L = (0, i.ZP)(g.xv).attrs({
                    size: "small",
                    weight: "semibold",
                    color: "text.subtle"
                }).withConfig({
                    componentId: "sc-e4b417b6-1"
                })(F()),
                w = (0, i.ZP)(o.mn.Cell).withConfig({
                    componentId: "sc-e4b417b6-2"
                })(C(), (0, d.BC)({
                    xxl: (0, i.iv)(T())
                })),
                A = (0, i.ZP)(c.t).withConfig({
                    componentId: "sc-e4b417b6-3"
                })(P(), (0, d.BC)({
                    xxl: (0, i.iv)(K())
                }))
        },
        94982: function(n, e, l) {
            l.d(e, {
                P: function() {
                    return g
                }
            });
            var a = l(24246),
                t = (l(27378), l(4402)),
                i = l(7920),
                r = l(510),
                s = l(47803),
                o = l(96150),
                u = l(316),
                c = l(70884),
                d = l(96053),
                g = function(n) {
                    var e, g = n.value,
                        m = n.logo,
                        y = n.subtleText,
                        p = void 0 !== y && y,
                        h = n.size,
                        f = void 0 === h ? "medium" : h,
                        k = n.useAssetLogo,
                        v = (0, t.useFragment)(l(53458), null !== m && void 0 !== m ? m : null),
                        x = "small" === f ? 12 : 14,
                        S = !(void 0 === g || "0" === g),
                        b = S && k,
                        F = null !== (e = null === v || void 0 === v ? void 0 : v.symbol) && void 0 !== e ? e : "ETH",
                        T = S ? k ? g : g + " ".concat(F) : c.eJ;
                    return (0, a.jsxs)(o.k, {
                        alignItems: "center",
                        children: [b && (0, a.jsx)(o.k, {
                            alignItems: "center",
                            display: "inline-flex",
                            height: "small" === f ? "20px" : "22px",
                            marginRight: "small" === f ? "2px" : "4px",
                            children: v ? (0, a.jsx)(s.j, {
                                data: v,
                                size: x
                            }) : (0, a.jsx)(i.U, {
                                size: x
                            })
                        }), p ? (0, a.jsx)(d.Hd, {
                            children: (0, a.jsx)(r.n, {
                                children: T
                            })
                        }) : (0, a.jsx)(u.xv.Body, {
                            color: "text.heading",
                            size: f,
                            weight: "semibold",
                            children: (0, a.jsx)(r.n, {
                                children: T
                            })
                        })]
                    })
                }
        },
        17041: function(n, e, l) {
            l.d(e, {
                x: function() {
                    return K
                }
            });
            var a = l(23842),
                t = l(19989),
                i = l(35230),
                r = l.n(i),
                s = l(24246),
                o = l(27378),
                u = l(4402),
                c = l(2417),
                d = l(47892),
                g = l(1569),
                m = l(66843),
                y = l(53585),
                p = l(96150),
                h = l(81399),
                f = l(65175),
                k = l(86933),
                v = l(87481),
                x = l(79790),
                S = l(6300),
                b = l(24071),
                F = (l(59809), l(90761));

            function T() {
                var n = (0, t.Z)(["\n  background-color: transparent;\n  width: 24px;\n  height: 24px;\n  padding: 0px;\n\n  :hover:not([disabled]),\n  :active:not([disabled]):active:not([disabled]),\n  :focus:not([disabled]):focus:not([disabled]) {\n    border: none;\n    background-color: transparent;\n    box-shadow: none;\n  }\n"]);
                return T = function() {
                    return n
                }, n
            }

            function C() {
                var n = (0, t.Z)(["\n  width: 24px;\n  height: 24px;\n  transition: color 0.25s ease-in-out;\n  color: ", ";\n\n  :hover {\n    color: ", ";\n  }\n\n  :active {\n    ", "\n  }\n"]);
                return C = function() {
                    return n
                }, n
            }
            var K = function(n) {
                    var e = n.data,
                        t = n.slug,
                        i = n.collectionId,
                        d = n.hideCollections,
                        m = void 0 !== d && d,
                        h = (0, S.q)("statsV2"),
                        F = (0, o.useContext)(k.P),
                        T = F.setWatchlist,
                        C = F.watchlist,
                        K = F.setHiddenCollections,
                        j = F.hiddenCollections,
                        L = (0, u.useFragment)(l(20655), e);
                    (0, o.useEffect)((function() {
                        D(!!(null === L || void 0 === L ? void 0 : L.isWatching) || C.includes(t))
                    }), [null === L || void 0 === L ? void 0 : L.isWatching, C, t]);
                    var w = (0, o.useState)(C.includes(t)),
                        A = w[0],
                        D = w[1],
                        _ = (0, v.b)(),
                        I = _.wallet,
                        Z = _.mutate,
                        R = _.updateContext,
                        B = (0, x.e)(),
                        N = B.attempt,
                        O = B.showSuccessMessage,
                        W = I.getActiveAccountKey(),
                        $ = function() {
                            var n = (0, a.Z)(r().mark((function n(e) {
                                return r().wrap((function(n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            if (e.preventDefault(), e.stopPropagation(), W) {
                                                n.next = 6;
                                                break
                                            }
                                            return (0, b.yb)({
                                                collectionSlug: t,
                                                isStatsPage: !0
                                            }), R({
                                                isWalletSidebarOpen: !0
                                            }), n.abrupt("return");
                                        case 6:
                                            return n.next = 8, N((0, a.Z)(r().mark((function n() {
                                                return r().wrap((function(n) {
                                                    for (;;) switch (n.prev = n.next) {
                                                        case 0:
                                                            return n.next = 2, Z(l(12395), {
                                                                collectionId: i,
                                                                isWatching: !A
                                                            }, {
                                                                shouldAuthenticate: !0,
                                                                updater: function(n) {
                                                                    var e;
                                                                    if ((null === (e = I.activeAccount) || void 0 === e ? void 0 : e.user) && "" !== i) {
                                                                        A ? (m && K(j.concat(t)), T(C.filter((function(n) {
                                                                            return n !== t
                                                                        })))) : T(C.concat(t));
                                                                        var l = n.get(i),
                                                                            a = c.ConnectionHandler.getConnectionID(I.activeAccount.user.relayId, "StatsV2Table_collectionWatchlist"),
                                                                            r = n.get(a);
                                                                        if (r && l)
                                                                            if (l.setValue(!A, "isWatching"), A) c.ConnectionHandler.deleteNode(r, i);
                                                                            else {
                                                                                var s = c.ConnectionHandler.createEdge(n, r, l, "CollectionTypeEdge");
                                                                                c.ConnectionHandler.insertEdgeAfter(r, s)
                                                                            }
                                                                    }
                                                                }
                                                            });
                                                        case 2:
                                                            n.sent.collections.updateWatchlist && (A ? (0, b.gM)({
                                                                collectionSlug: t,
                                                                isStatsPage: !0
                                                            }) : (0, b.wd)({
                                                                collectionSlug: t,
                                                                isStatsPage: !0
                                                            }), O((0, s.jsxs)(p.k, {
                                                                children: [A ? h("watchlist.success.status.removed", "Removed from watchlist") : h("watchlist.success.status.added", "Added to watchlist"), !m && (0, s.jsx)(y.g, {
                                                                    marginLeft: "8px",
                                                                    children: (0, s.jsx)(g.r, {
                                                                        href: "/rankings/watchlist",
                                                                        children: h("watchlist.success.viewCTA", "View")
                                                                    })
                                                                })]
                                                            })), D(!A));
                                                        case 4:
                                                        case "end":
                                                            return n.stop()
                                                    }
                                                }), n)
                                            }))));
                                        case 8:
                                        case "end":
                                            return n.stop()
                                    }
                                }), n)
                            })));
                            return function(e) {
                                return n.apply(this, arguments)
                            }
                        }();
                    return (0, s.jsx)(f.u, {
                        content: A ? h("watchlist.tooltip.watching", "Watching") : h("watchlist.tooltip.notWatching", "Add to watchlist"),
                        hideOnClick: !0,
                        children: (0, s.jsx)(P, {
                            "aria-label": A ? h("watchlist.button.watching", "Watching") : h("watchlist.button.notWatching", "Add to watchlist"),
                            "data-testid": "rankings-watchlist-button",
                            onClick: $,
                            children: (0, s.jsx)(V, {
                                active: A
                            })
                        })
                    })
                },
                P = (0, d.ZP)(h.h).withConfig({
                    componentId: "sc-36615c0a-0"
                })(T()),
                V = (0, d.ZP)(m.r).withConfig({
                    componentId: "sc-36615c0a-1"
                })(C(), (function(n) {
                    return n.theme.colors.text.heading
                }), (function(n) {
                    return n.theme.colors.text.subtle
                }), (function(n) {
                    return (0, F.Um)({
                        variants: {
                            dark: {
                                color: n.theme.colors.darkGray
                            },
                            light: {
                                color: n.theme.colors.gray
                            }
                        }
                    })
                }))
        },
        78293: function(n, e, l) {
            l.r(e);
            var a = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "CollectionDataTablePrice_logo",
                selections: [{
                    args: null,
                    kind: "FragmentSpread",
                    name: "PaymentAssetLogo_data"
                }],
                type: "PaymentAssetType",
                abstractKey: null,
                hash: "4377b1d779d589a058a5933cfde48a3c"
            };
            e.default = a
        },
        68911: function(n, e, l) {
            l.r(e);
            var a = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "PaymentAssetLogo_data",
                selections: [{
                    alias: null,
                    args: null,
                    concreteType: "ChainType",
                    kind: "LinkedField",
                    name: "chain",
                    plural: !1,
                    selections: [{
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "identifier",
                        storageKey: null
                    }],
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "symbol",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    concreteType: "AssetType",
                    kind: "LinkedField",
                    name: "asset",
                    plural: !1,
                    selections: [{
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "imageUrl",
                        storageKey: null
                    }],
                    storageKey: null
                }],
                type: "PaymentAssetType",
                abstractKey: null,
                hash: "79f1388b9327590a9b7afe48d15b3d68"
            };
            e.default = a
        },
        82485: function(n, e, l) {
            l.r(e);
            var a = function() {
                var n = [{
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "chain"
                    }, {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "count"
                    }, {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "createdAfter"
                    }, {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "cursor"
                    }, {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "parents"
                    }, {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "sortBy"
                    }],
                    e = [{
                        kind: "Variable",
                        name: "after",
                        variableName: "cursor"
                    }, {
                        kind: "Variable",
                        name: "chains",
                        variableName: "chain"
                    }, {
                        kind: "Variable",
                        name: "createdAfter",
                        variableName: "createdAfter"
                    }, {
                        kind: "Variable",
                        name: "first",
                        variableName: "count"
                    }, {
                        kind: "Variable",
                        name: "parents",
                        variableName: "parents"
                    }, {
                        kind: "Variable",
                        name: "sortBy",
                        variableName: "sortBy"
                    }],
                    l = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "imageUrl",
                        storageKey: null
                    },
                    a = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "symbol",
                        storageKey: null
                    },
                    t = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "id",
                        storageKey: null
                    },
                    i = [{
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "unit",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "eth",
                        storageKey: null
                    }];
                return {
                    fragment: {
                        argumentDefinitions: n,
                        kind: "Fragment",
                        metadata: null,
                        name: "RankingsPageTopPaginationQuery",
                        selections: [{
                            args: null,
                            kind: "FragmentSpread",
                            name: "RankingsPageTop_data"
                        }],
                        type: "Query",
                        abstractKey: null
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: n,
                        kind: "Operation",
                        name: "RankingsPageTopPaginationQuery",
                        selections: [{
                            alias: null,
                            args: e,
                            concreteType: "CollectionTypeConnection",
                            kind: "LinkedField",
                            name: "rankings",
                            plural: !1,
                            selections: [{
                                alias: null,
                                args: null,
                                concreteType: "CollectionTypeEdge",
                                kind: "LinkedField",
                                name: "edges",
                                plural: !0,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    concreteType: "CollectionType",
                                    kind: "LinkedField",
                                    name: "node",
                                    plural: !1,
                                    selections: [{
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "createdDate",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "name",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "slug",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "logo",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "isVerified",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "relayId",
                                        storageKey: null
                                    }, l, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "isCategory",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        concreteType: "PaymentAssetType",
                                        kind: "LinkedField",
                                        name: "nativePaymentAsset",
                                        plural: !1,
                                        selections: [{
                                            alias: null,
                                            args: null,
                                            concreteType: "ChainType",
                                            kind: "LinkedField",
                                            name: "chain",
                                            plural: !1,
                                            selections: [{
                                                alias: null,
                                                args: null,
                                                kind: "ScalarField",
                                                name: "identifier",
                                                storageKey: null
                                            }],
                                            storageKey: null
                                        }, a, {
                                            alias: null,
                                            args: null,
                                            concreteType: "AssetType",
                                            kind: "LinkedField",
                                            name: "asset",
                                            plural: !1,
                                            selections: [l, t, a],
                                            storageKey: null
                                        }, t],
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        concreteType: "CollectionStatsV2Type",
                                        kind: "LinkedField",
                                        name: "statsV2",
                                        plural: !1,
                                        selections: [{
                                            alias: null,
                                            args: null,
                                            concreteType: "PriceType",
                                            kind: "LinkedField",
                                            name: "floorPrice",
                                            plural: !1,
                                            selections: i,
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "numOwners",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "totalSupply",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "totalQuantity",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "totalListed",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "totalSales",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "sevenDaySales",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "sevenDayChange",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            concreteType: "PriceType",
                                            kind: "LinkedField",
                                            name: "sevenDayVolume",
                                            plural: !1,
                                            selections: i,
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "oneDaySales",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "oneDayChange",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            concreteType: "PriceType",
                                            kind: "LinkedField",
                                            name: "oneDayVolume",
                                            plural: !1,
                                            selections: i,
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "thirtyDaySales",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "thirtyDayChange",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            concreteType: "PriceType",
                                            kind: "LinkedField",
                                            name: "thirtyDayVolume",
                                            plural: !1,
                                            selections: i,
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            concreteType: "PriceType",
                                            kind: "LinkedField",
                                            name: "totalVolume",
                                            plural: !1,
                                            selections: i,
                                            storageKey: null
                                        }],
                                        storageKey: null
                                    }, t, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "__typename",
                                        storageKey: null
                                    }],
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "cursor",
                                    storageKey: null
                                }],
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                concreteType: "PageInfo",
                                kind: "LinkedField",
                                name: "pageInfo",
                                plural: !1,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "endCursor",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "hasNextPage",
                                    storageKey: null
                                }],
                                storageKey: null
                            }],
                            storageKey: null
                        }, {
                            alias: null,
                            args: e,
                            filters: ["chains", "sortBy", "parents", "createdAfter"],
                            handle: "connection",
                            key: "RankingsPageTop_rankings",
                            kind: "LinkedHandle",
                            name: "rankings"
                        }]
                    },
                    params: {
                        cacheID: "92c6e8bb4bd3206a492519fa1d9fe3b7",
                        id: null,
                        metadata: {},
                        name: "RankingsPageTopPaginationQuery",
                        operationKind: "query",
                        text: "query RankingsPageTopPaginationQuery(\n  $chain: [ChainScalar!]\n  $count: Int\n  $createdAfter: DateTime\n  $cursor: String\n  $parents: [CollectionSlug!]\n  $sortBy: CollectionSort\n) {\n  ...RankingsPageTop_data\n}\n\nfragment CollectionDataTablePrice_logo on PaymentAssetType {\n  ...PaymentAssetLogo_data\n}\n\nfragment PaymentAssetLogo_data on PaymentAssetType {\n  chain {\n    identifier\n  }\n  symbol\n  asset {\n    imageUrl\n    id\n  }\n}\n\nfragment RankingsPageTop_data on Query {\n  rankings(after: $cursor, chains: $chain, first: $count, sortBy: $sortBy, parents: $parents, createdAfter: $createdAfter) {\n    edges {\n      node {\n        createdDate\n        name\n        slug\n        logo\n        isVerified\n        relayId\n        ...StatsV2CollectionCell_collection\n        ...collection_url\n        nativePaymentAsset {\n          ...CollectionDataTablePrice_logo\n          ...StatsV2TablePrice_logo\n          asset {\n            symbol\n            id\n          }\n          id\n        }\n        statsV2 {\n          floorPrice {\n            unit\n            eth\n          }\n          numOwners\n          totalSupply\n          totalQuantity\n          totalListed\n          totalSales\n          sevenDaySales\n          sevenDayChange\n          sevenDayVolume {\n            unit\n            eth\n          }\n          oneDaySales\n          oneDayChange\n          oneDayVolume {\n            unit\n            eth\n          }\n          thirtyDaySales\n          thirtyDayChange\n          thirtyDayVolume {\n            unit\n            eth\n          }\n          totalVolume {\n            unit\n            eth\n          }\n        }\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment StatsV2CollectionCell_collection on CollectionType {\n  name\n  imageUrl\n  isVerified\n}\n\nfragment StatsV2TablePrice_logo on PaymentAssetType {\n  symbol\n  ...PaymentAssetLogo_data\n}\n\nfragment collection_url on CollectionType {\n  slug\n  isCategory\n}\n"
                    }
                }
            }();
            a.hash = "9ace6f624757ad7ec0eecd2e09e3ec7a", e.default = a
        },
        71875: function(n, e, l) {
            l.r(e);
            var a = function() {
                var n = {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "chain"
                    },
                    e = {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "count"
                    },
                    l = {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "createdAfter"
                    },
                    a = {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "cursor"
                    },
                    t = {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "parents"
                    },
                    i = {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "sortBy"
                    },
                    r = [{
                        kind: "Variable",
                        name: "after",
                        variableName: "cursor"
                    }, {
                        kind: "Variable",
                        name: "chains",
                        variableName: "chain"
                    }, {
                        kind: "Variable",
                        name: "createdAfter",
                        variableName: "createdAfter"
                    }, {
                        kind: "Variable",
                        name: "first",
                        variableName: "count"
                    }, {
                        kind: "Variable",
                        name: "parents",
                        variableName: "parents"
                    }, {
                        kind: "Variable",
                        name: "sortBy",
                        variableName: "sortBy"
                    }],
                    s = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "imageUrl",
                        storageKey: null
                    },
                    o = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "symbol",
                        storageKey: null
                    },
                    u = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "id",
                        storageKey: null
                    },
                    c = [{
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "unit",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "eth",
                        storageKey: null
                    }];
                return {
                    fragment: {
                        argumentDefinitions: [n, e, l, a, t, i],
                        kind: "Fragment",
                        metadata: null,
                        name: "RankingsPageTopQuery",
                        selections: [{
                            args: null,
                            kind: "FragmentSpread",
                            name: "RankingsPageTop_data"
                        }],
                        type: "Query",
                        abstractKey: null
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: [n, e, a, i, t, l],
                        kind: "Operation",
                        name: "RankingsPageTopQuery",
                        selections: [{
                            alias: null,
                            args: r,
                            concreteType: "CollectionTypeConnection",
                            kind: "LinkedField",
                            name: "rankings",
                            plural: !1,
                            selections: [{
                                alias: null,
                                args: null,
                                concreteType: "CollectionTypeEdge",
                                kind: "LinkedField",
                                name: "edges",
                                plural: !0,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    concreteType: "CollectionType",
                                    kind: "LinkedField",
                                    name: "node",
                                    plural: !1,
                                    selections: [{
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "createdDate",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "name",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "slug",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "logo",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "isVerified",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "relayId",
                                        storageKey: null
                                    }, s, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "isCategory",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        concreteType: "PaymentAssetType",
                                        kind: "LinkedField",
                                        name: "nativePaymentAsset",
                                        plural: !1,
                                        selections: [{
                                            alias: null,
                                            args: null,
                                            concreteType: "ChainType",
                                            kind: "LinkedField",
                                            name: "chain",
                                            plural: !1,
                                            selections: [{
                                                alias: null,
                                                args: null,
                                                kind: "ScalarField",
                                                name: "identifier",
                                                storageKey: null
                                            }],
                                            storageKey: null
                                        }, o, {
                                            alias: null,
                                            args: null,
                                            concreteType: "AssetType",
                                            kind: "LinkedField",
                                            name: "asset",
                                            plural: !1,
                                            selections: [s, u, o],
                                            storageKey: null
                                        }, u],
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        concreteType: "CollectionStatsV2Type",
                                        kind: "LinkedField",
                                        name: "statsV2",
                                        plural: !1,
                                        selections: [{
                                            alias: null,
                                            args: null,
                                            concreteType: "PriceType",
                                            kind: "LinkedField",
                                            name: "floorPrice",
                                            plural: !1,
                                            selections: c,
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "numOwners",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "totalSupply",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "totalQuantity",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "totalListed",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "totalSales",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "sevenDaySales",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "sevenDayChange",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            concreteType: "PriceType",
                                            kind: "LinkedField",
                                            name: "sevenDayVolume",
                                            plural: !1,
                                            selections: c,
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "oneDaySales",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "oneDayChange",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            concreteType: "PriceType",
                                            kind: "LinkedField",
                                            name: "oneDayVolume",
                                            plural: !1,
                                            selections: c,
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "thirtyDaySales",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "thirtyDayChange",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            concreteType: "PriceType",
                                            kind: "LinkedField",
                                            name: "thirtyDayVolume",
                                            plural: !1,
                                            selections: c,
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            concreteType: "PriceType",
                                            kind: "LinkedField",
                                            name: "totalVolume",
                                            plural: !1,
                                            selections: c,
                                            storageKey: null
                                        }],
                                        storageKey: null
                                    }, u, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "__typename",
                                        storageKey: null
                                    }],
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "cursor",
                                    storageKey: null
                                }],
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                concreteType: "PageInfo",
                                kind: "LinkedField",
                                name: "pageInfo",
                                plural: !1,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "endCursor",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "hasNextPage",
                                    storageKey: null
                                }],
                                storageKey: null
                            }],
                            storageKey: null
                        }, {
                            alias: null,
                            args: r,
                            filters: ["chains", "sortBy", "parents", "createdAfter"],
                            handle: "connection",
                            key: "RankingsPageTop_rankings",
                            kind: "LinkedHandle",
                            name: "rankings"
                        }]
                    },
                    params: {
                        cacheID: "843d2a1452ab7598f3910d981b9ffc21",
                        id: null,
                        metadata: {},
                        name: "RankingsPageTopQuery",
                        operationKind: "query",
                        text: "query RankingsPageTopQuery(\n  $chain: [ChainScalar!]\n  $count: Int!\n  $cursor: String\n  $sortBy: CollectionSort\n  $parents: [CollectionSlug!]\n  $createdAfter: DateTime\n) {\n  ...RankingsPageTop_data\n}\n\nfragment CollectionDataTablePrice_logo on PaymentAssetType {\n  ...PaymentAssetLogo_data\n}\n\nfragment PaymentAssetLogo_data on PaymentAssetType {\n  chain {\n    identifier\n  }\n  symbol\n  asset {\n    imageUrl\n    id\n  }\n}\n\nfragment RankingsPageTop_data on Query {\n  rankings(after: $cursor, chains: $chain, first: $count, sortBy: $sortBy, parents: $parents, createdAfter: $createdAfter) {\n    edges {\n      node {\n        createdDate\n        name\n        slug\n        logo\n        isVerified\n        relayId\n        ...StatsV2CollectionCell_collection\n        ...collection_url\n        nativePaymentAsset {\n          ...CollectionDataTablePrice_logo\n          ...StatsV2TablePrice_logo\n          asset {\n            symbol\n            id\n          }\n          id\n        }\n        statsV2 {\n          floorPrice {\n            unit\n            eth\n          }\n          numOwners\n          totalSupply\n          totalQuantity\n          totalListed\n          totalSales\n          sevenDaySales\n          sevenDayChange\n          sevenDayVolume {\n            unit\n            eth\n          }\n          oneDaySales\n          oneDayChange\n          oneDayVolume {\n            unit\n            eth\n          }\n          thirtyDaySales\n          thirtyDayChange\n          thirtyDayVolume {\n            unit\n            eth\n          }\n          totalVolume {\n            unit\n            eth\n          }\n        }\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment StatsV2CollectionCell_collection on CollectionType {\n  name\n  imageUrl\n  isVerified\n}\n\nfragment StatsV2TablePrice_logo on PaymentAssetType {\n  symbol\n  ...PaymentAssetLogo_data\n}\n\nfragment collection_url on CollectionType {\n  slug\n  isCategory\n}\n"
                    }
                }
            }();
            a.hash = "16b7505d147e48b4fd0e455bab17dac0", e.default = a
        },
        94776: function(n, e, l) {
            l.r(e);
            var a = function() {
                var n = ["rankings"],
                    e = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "slug",
                        storageKey: null
                    },
                    a = [{
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "unit",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "eth",
                        storageKey: null
                    }];
                return {
                    argumentDefinitions: [{
                        kind: "RootArgument",
                        name: "chain"
                    }, {
                        kind: "RootArgument",
                        name: "count"
                    }, {
                        kind: "RootArgument",
                        name: "createdAfter"
                    }, {
                        kind: "RootArgument",
                        name: "cursor"
                    }, {
                        kind: "RootArgument",
                        name: "parents"
                    }, {
                        kind: "RootArgument",
                        name: "sortBy"
                    }],
                    kind: "Fragment",
                    metadata: {
                        connection: [{
                            count: "count",
                            cursor: "cursor",
                            direction: "forward",
                            path: n
                        }],
                        refetch: {
                            connection: {
                                forward: {
                                    count: "count",
                                    cursor: "cursor"
                                },
                                backward: null,
                                path: n
                            },
                            fragmentPathInResult: [],
                            operation: l(82485)
                        }
                    },
                    name: "RankingsPageTop_data",
                    selections: [{
                        alias: "rankings",
                        args: [{
                            kind: "Variable",
                            name: "chains",
                            variableName: "chain"
                        }, {
                            kind: "Variable",
                            name: "createdAfter",
                            variableName: "createdAfter"
                        }, {
                            kind: "Variable",
                            name: "parents",
                            variableName: "parents"
                        }, {
                            kind: "Variable",
                            name: "sortBy",
                            variableName: "sortBy"
                        }],
                        concreteType: "CollectionTypeConnection",
                        kind: "LinkedField",
                        name: "__RankingsPageTop_rankings_connection",
                        plural: !1,
                        selections: [{
                            alias: null,
                            args: null,
                            concreteType: "CollectionTypeEdge",
                            kind: "LinkedField",
                            name: "edges",
                            plural: !0,
                            selections: [{
                                alias: null,
                                args: null,
                                concreteType: "CollectionType",
                                kind: "LinkedField",
                                name: "node",
                                plural: !1,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "createdDate",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "name",
                                    storageKey: null
                                }, e, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "logo",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "isVerified",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "relayId",
                                    storageKey: null
                                }, {
                                    args: null,
                                    kind: "FragmentSpread",
                                    name: "StatsV2CollectionCell_collection"
                                }, {
                                    kind: "InlineDataFragmentSpread",
                                    name: "collection_url",
                                    selections: [e, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "isCategory",
                                        storageKey: null
                                    }],
                                    args: null,
                                    argumentDefinitions: []
                                }, {
                                    alias: null,
                                    args: null,
                                    concreteType: "PaymentAssetType",
                                    kind: "LinkedField",
                                    name: "nativePaymentAsset",
                                    plural: !1,
                                    selections: [{
                                        args: null,
                                        kind: "FragmentSpread",
                                        name: "CollectionDataTablePrice_logo"
                                    }, {
                                        args: null,
                                        kind: "FragmentSpread",
                                        name: "StatsV2TablePrice_logo"
                                    }, {
                                        alias: null,
                                        args: null,
                                        concreteType: "AssetType",
                                        kind: "LinkedField",
                                        name: "asset",
                                        plural: !1,
                                        selections: [{
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "symbol",
                                            storageKey: null
                                        }],
                                        storageKey: null
                                    }],
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    concreteType: "CollectionStatsV2Type",
                                    kind: "LinkedField",
                                    name: "statsV2",
                                    plural: !1,
                                    selections: [{
                                        alias: null,
                                        args: null,
                                        concreteType: "PriceType",
                                        kind: "LinkedField",
                                        name: "floorPrice",
                                        plural: !1,
                                        selections: a,
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "numOwners",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "totalSupply",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "totalQuantity",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "totalListed",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "totalSales",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "sevenDaySales",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "sevenDayChange",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        concreteType: "PriceType",
                                        kind: "LinkedField",
                                        name: "sevenDayVolume",
                                        plural: !1,
                                        selections: a,
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "oneDaySales",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "oneDayChange",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        concreteType: "PriceType",
                                        kind: "LinkedField",
                                        name: "oneDayVolume",
                                        plural: !1,
                                        selections: a,
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "thirtyDaySales",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "thirtyDayChange",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        concreteType: "PriceType",
                                        kind: "LinkedField",
                                        name: "thirtyDayVolume",
                                        plural: !1,
                                        selections: a,
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        concreteType: "PriceType",
                                        kind: "LinkedField",
                                        name: "totalVolume",
                                        plural: !1,
                                        selections: a,
                                        storageKey: null
                                    }],
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "__typename",
                                    storageKey: null
                                }],
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "cursor",
                                storageKey: null
                            }],
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            concreteType: "PageInfo",
                            kind: "LinkedField",
                            name: "pageInfo",
                            plural: !1,
                            selections: [{
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "endCursor",
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "hasNextPage",
                                storageKey: null
                            }],
                            storageKey: null
                        }],
                        storageKey: null
                    }],
                    type: "Query",
                    abstractKey: null
                }
            }();
            a.hash = "9ace6f624757ad7ec0eecd2e09e3ec7a", e.default = a
        },
        80604: function(n, e, l) {
            l.r(e);
            var a = function() {
                var n = [{
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "categories"
                    }, {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "chain"
                    }, {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "count"
                    }, {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "cursor"
                    }, {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "eligibleCount"
                    }],
                    e = [{
                        kind: "Variable",
                        name: "after",
                        variableName: "cursor"
                    }, {
                        kind: "Variable",
                        name: "categories",
                        variableName: "categories"
                    }, {
                        kind: "Variable",
                        name: "chains",
                        variableName: "chain"
                    }, {
                        kind: "Variable",
                        name: "first",
                        variableName: "count"
                    }, {
                        kind: "Variable",
                        name: "topCollectionLimit",
                        variableName: "eligibleCount"
                    }],
                    l = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "imageUrl",
                        storageKey: null
                    },
                    a = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "symbol",
                        storageKey: null
                    },
                    t = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "id",
                        storageKey: null
                    },
                    i = [{
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "unit",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "eth",
                        storageKey: null
                    }];
                return {
                    fragment: {
                        argumentDefinitions: n,
                        kind: "Fragment",
                        metadata: null,
                        name: "RankingsPageTrendingPaginationQuery",
                        selections: [{
                            args: null,
                            kind: "FragmentSpread",
                            name: "RankingsPageTrending_data"
                        }],
                        type: "Query",
                        abstractKey: null
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: n,
                        kind: "Operation",
                        name: "RankingsPageTrendingPaginationQuery",
                        selections: [{
                            alias: null,
                            args: e,
                            concreteType: "CollectionTypeConnection",
                            kind: "LinkedField",
                            name: "trendingCollections",
                            plural: !1,
                            selections: [{
                                alias: null,
                                args: null,
                                concreteType: "CollectionTypeEdge",
                                kind: "LinkedField",
                                name: "edges",
                                plural: !0,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    concreteType: "CollectionType",
                                    kind: "LinkedField",
                                    name: "node",
                                    plural: !1,
                                    selections: [{
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "createdDate",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "name",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "slug",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "logo",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "isVerified",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "relayId",
                                        storageKey: null
                                    }, l, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "isCategory",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        concreteType: "PaymentAssetType",
                                        kind: "LinkedField",
                                        name: "nativePaymentAsset",
                                        plural: !1,
                                        selections: [{
                                            alias: null,
                                            args: null,
                                            concreteType: "ChainType",
                                            kind: "LinkedField",
                                            name: "chain",
                                            plural: !1,
                                            selections: [{
                                                alias: null,
                                                args: null,
                                                kind: "ScalarField",
                                                name: "identifier",
                                                storageKey: null
                                            }],
                                            storageKey: null
                                        }, a, {
                                            alias: null,
                                            args: null,
                                            concreteType: "AssetType",
                                            kind: "LinkedField",
                                            name: "asset",
                                            plural: !1,
                                            selections: [l, t, a],
                                            storageKey: null
                                        }, t],
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        concreteType: "CollectionStatsV2Type",
                                        kind: "LinkedField",
                                        name: "statsV2",
                                        plural: !1,
                                        selections: [{
                                            alias: null,
                                            args: null,
                                            concreteType: "PriceType",
                                            kind: "LinkedField",
                                            name: "floorPrice",
                                            plural: !1,
                                            selections: i,
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "numOwners",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "totalSupply",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "totalQuantity",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "totalListed",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "totalSales",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "sevenDaySales",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "sevenDayChange",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            concreteType: "PriceType",
                                            kind: "LinkedField",
                                            name: "sevenDayVolume",
                                            plural: !1,
                                            selections: i,
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "oneDaySales",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "oneDayChange",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            concreteType: "PriceType",
                                            kind: "LinkedField",
                                            name: "oneDayVolume",
                                            plural: !1,
                                            selections: i,
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "thirtyDaySales",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "thirtyDayChange",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            concreteType: "PriceType",
                                            kind: "LinkedField",
                                            name: "thirtyDayVolume",
                                            plural: !1,
                                            selections: i,
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            concreteType: "PriceType",
                                            kind: "LinkedField",
                                            name: "totalVolume",
                                            plural: !1,
                                            selections: i,
                                            storageKey: null
                                        }],
                                        storageKey: null
                                    }, t, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "__typename",
                                        storageKey: null
                                    }],
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "cursor",
                                    storageKey: null
                                }],
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                concreteType: "PageInfo",
                                kind: "LinkedField",
                                name: "pageInfo",
                                plural: !1,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "endCursor",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "hasNextPage",
                                    storageKey: null
                                }],
                                storageKey: null
                            }],
                            storageKey: null
                        }, {
                            alias: null,
                            args: e,
                            filters: ["chains", "categories", "topCollectionLimit"],
                            handle: "connection",
                            key: "RankingsPageTrending_trendingCollections",
                            kind: "LinkedHandle",
                            name: "trendingCollections"
                        }]
                    },
                    params: {
                        cacheID: "8b25e7b80daa37a6fdc5cc2d59e09ac6",
                        id: null,
                        metadata: {},
                        name: "RankingsPageTrendingPaginationQuery",
                        operationKind: "query",
                        text: "query RankingsPageTrendingPaginationQuery(\n  $categories: [CategorySlug!]\n  $chain: [ChainScalar!]\n  $count: Int\n  $cursor: String\n  $eligibleCount: Int\n) {\n  ...RankingsPageTrending_data\n}\n\nfragment CollectionDataTablePrice_logo on PaymentAssetType {\n  ...PaymentAssetLogo_data\n}\n\nfragment PaymentAssetLogo_data on PaymentAssetType {\n  chain {\n    identifier\n  }\n  symbol\n  asset {\n    imageUrl\n    id\n  }\n}\n\nfragment RankingsPageTrending_data on Query {\n  trendingCollections(after: $cursor, chains: $chain, first: $count, categories: $categories, topCollectionLimit: $eligibleCount) {\n    edges {\n      node {\n        createdDate\n        name\n        slug\n        logo\n        isVerified\n        relayId\n        ...StatsV2CollectionCell_collection\n        ...collection_url\n        nativePaymentAsset {\n          ...CollectionDataTablePrice_logo\n          ...StatsV2TablePrice_logo\n          asset {\n            symbol\n            id\n          }\n          id\n        }\n        statsV2 {\n          floorPrice {\n            unit\n            eth\n          }\n          numOwners\n          totalSupply\n          totalQuantity\n          totalListed\n          totalSales\n          sevenDaySales\n          sevenDayChange\n          sevenDayVolume {\n            unit\n            eth\n          }\n          oneDaySales\n          oneDayChange\n          oneDayVolume {\n            unit\n            eth\n          }\n          thirtyDaySales\n          thirtyDayChange\n          thirtyDayVolume {\n            unit\n            eth\n          }\n          totalVolume {\n            unit\n            eth\n          }\n        }\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment StatsV2CollectionCell_collection on CollectionType {\n  name\n  imageUrl\n  isVerified\n}\n\nfragment StatsV2TablePrice_logo on PaymentAssetType {\n  symbol\n  ...PaymentAssetLogo_data\n}\n\nfragment collection_url on CollectionType {\n  slug\n  isCategory\n}\n"
                    }
                }
            }();
            a.hash = "ed66d23f444ce51b613cc9c636ddb337", e.default = a
        },
        45810: function(n, e, l) {
            l.r(e);
            var a = function() {
                var n = {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "categories"
                    },
                    e = {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "chain"
                    },
                    l = {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "count"
                    },
                    a = {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "cursor"
                    },
                    t = {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "eligibleCount"
                    },
                    i = [{
                        kind: "Variable",
                        name: "after",
                        variableName: "cursor"
                    }, {
                        kind: "Variable",
                        name: "categories",
                        variableName: "categories"
                    }, {
                        kind: "Variable",
                        name: "chains",
                        variableName: "chain"
                    }, {
                        kind: "Variable",
                        name: "first",
                        variableName: "count"
                    }, {
                        kind: "Variable",
                        name: "topCollectionLimit",
                        variableName: "eligibleCount"
                    }],
                    r = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "imageUrl",
                        storageKey: null
                    },
                    s = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "symbol",
                        storageKey: null
                    },
                    o = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "id",
                        storageKey: null
                    },
                    u = [{
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "unit",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "eth",
                        storageKey: null
                    }];
                return {
                    fragment: {
                        argumentDefinitions: [n, e, l, a, t],
                        kind: "Fragment",
                        metadata: null,
                        name: "RankingsPageTrendingQuery",
                        selections: [{
                            args: null,
                            kind: "FragmentSpread",
                            name: "RankingsPageTrending_data"
                        }],
                        type: "Query",
                        abstractKey: null
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: [e, l, a, n, t],
                        kind: "Operation",
                        name: "RankingsPageTrendingQuery",
                        selections: [{
                            alias: null,
                            args: i,
                            concreteType: "CollectionTypeConnection",
                            kind: "LinkedField",
                            name: "trendingCollections",
                            plural: !1,
                            selections: [{
                                alias: null,
                                args: null,
                                concreteType: "CollectionTypeEdge",
                                kind: "LinkedField",
                                name: "edges",
                                plural: !0,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    concreteType: "CollectionType",
                                    kind: "LinkedField",
                                    name: "node",
                                    plural: !1,
                                    selections: [{
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "createdDate",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "name",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "slug",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "logo",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "isVerified",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "relayId",
                                        storageKey: null
                                    }, r, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "isCategory",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        concreteType: "PaymentAssetType",
                                        kind: "LinkedField",
                                        name: "nativePaymentAsset",
                                        plural: !1,
                                        selections: [{
                                            alias: null,
                                            args: null,
                                            concreteType: "ChainType",
                                            kind: "LinkedField",
                                            name: "chain",
                                            plural: !1,
                                            selections: [{
                                                alias: null,
                                                args: null,
                                                kind: "ScalarField",
                                                name: "identifier",
                                                storageKey: null
                                            }],
                                            storageKey: null
                                        }, s, {
                                            alias: null,
                                            args: null,
                                            concreteType: "AssetType",
                                            kind: "LinkedField",
                                            name: "asset",
                                            plural: !1,
                                            selections: [r, o, s],
                                            storageKey: null
                                        }, o],
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        concreteType: "CollectionStatsV2Type",
                                        kind: "LinkedField",
                                        name: "statsV2",
                                        plural: !1,
                                        selections: [{
                                            alias: null,
                                            args: null,
                                            concreteType: "PriceType",
                                            kind: "LinkedField",
                                            name: "floorPrice",
                                            plural: !1,
                                            selections: u,
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "numOwners",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "totalSupply",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "totalQuantity",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "totalListed",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "totalSales",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "sevenDaySales",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "sevenDayChange",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            concreteType: "PriceType",
                                            kind: "LinkedField",
                                            name: "sevenDayVolume",
                                            plural: !1,
                                            selections: u,
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "oneDaySales",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "oneDayChange",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            concreteType: "PriceType",
                                            kind: "LinkedField",
                                            name: "oneDayVolume",
                                            plural: !1,
                                            selections: u,
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "thirtyDaySales",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "thirtyDayChange",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            concreteType: "PriceType",
                                            kind: "LinkedField",
                                            name: "thirtyDayVolume",
                                            plural: !1,
                                            selections: u,
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            concreteType: "PriceType",
                                            kind: "LinkedField",
                                            name: "totalVolume",
                                            plural: !1,
                                            selections: u,
                                            storageKey: null
                                        }],
                                        storageKey: null
                                    }, o, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "__typename",
                                        storageKey: null
                                    }],
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "cursor",
                                    storageKey: null
                                }],
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                concreteType: "PageInfo",
                                kind: "LinkedField",
                                name: "pageInfo",
                                plural: !1,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "endCursor",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "hasNextPage",
                                    storageKey: null
                                }],
                                storageKey: null
                            }],
                            storageKey: null
                        }, {
                            alias: null,
                            args: i,
                            filters: ["chains", "categories", "topCollectionLimit"],
                            handle: "connection",
                            key: "RankingsPageTrending_trendingCollections",
                            kind: "LinkedHandle",
                            name: "trendingCollections"
                        }]
                    },
                    params: {
                        cacheID: "c052688df2e944a14334ca7972c8ebb5",
                        id: null,
                        metadata: {},
                        name: "RankingsPageTrendingQuery",
                        operationKind: "query",
                        text: "query RankingsPageTrendingQuery(\n  $chain: [ChainScalar!]\n  $count: Int!\n  $cursor: String\n  $categories: [CategorySlug!]\n  $eligibleCount: Int!\n) {\n  ...RankingsPageTrending_data\n}\n\nfragment CollectionDataTablePrice_logo on PaymentAssetType {\n  ...PaymentAssetLogo_data\n}\n\nfragment PaymentAssetLogo_data on PaymentAssetType {\n  chain {\n    identifier\n  }\n  symbol\n  asset {\n    imageUrl\n    id\n  }\n}\n\nfragment RankingsPageTrending_data on Query {\n  trendingCollections(after: $cursor, chains: $chain, first: $count, categories: $categories, topCollectionLimit: $eligibleCount) {\n    edges {\n      node {\n        createdDate\n        name\n        slug\n        logo\n        isVerified\n        relayId\n        ...StatsV2CollectionCell_collection\n        ...collection_url\n        nativePaymentAsset {\n          ...CollectionDataTablePrice_logo\n          ...StatsV2TablePrice_logo\n          asset {\n            symbol\n            id\n          }\n          id\n        }\n        statsV2 {\n          floorPrice {\n            unit\n            eth\n          }\n          numOwners\n          totalSupply\n          totalQuantity\n          totalListed\n          totalSales\n          sevenDaySales\n          sevenDayChange\n          sevenDayVolume {\n            unit\n            eth\n          }\n          oneDaySales\n          oneDayChange\n          oneDayVolume {\n            unit\n            eth\n          }\n          thirtyDaySales\n          thirtyDayChange\n          thirtyDayVolume {\n            unit\n            eth\n          }\n          totalVolume {\n            unit\n            eth\n          }\n        }\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment StatsV2CollectionCell_collection on CollectionType {\n  name\n  imageUrl\n  isVerified\n}\n\nfragment StatsV2TablePrice_logo on PaymentAssetType {\n  symbol\n  ...PaymentAssetLogo_data\n}\n\nfragment collection_url on CollectionType {\n  slug\n  isCategory\n}\n"
                    }
                }
            }();
            a.hash = "6fa70d9e90626d826278bfb84d1e36dc", e.default = a
        },
        84951: function(n, e, l) {
            l.r(e);
            var a = function() {
                var n = ["trendingCollections"],
                    e = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "slug",
                        storageKey: null
                    },
                    a = [{
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "unit",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "eth",
                        storageKey: null
                    }];
                return {
                    argumentDefinitions: [{
                        kind: "RootArgument",
                        name: "categories"
                    }, {
                        kind: "RootArgument",
                        name: "chain"
                    }, {
                        kind: "RootArgument",
                        name: "count"
                    }, {
                        kind: "RootArgument",
                        name: "cursor"
                    }, {
                        kind: "RootArgument",
                        name: "eligibleCount"
                    }],
                    kind: "Fragment",
                    metadata: {
                        connection: [{
                            count: "count",
                            cursor: "cursor",
                            direction: "forward",
                            path: n
                        }],
                        refetch: {
                            connection: {
                                forward: {
                                    count: "count",
                                    cursor: "cursor"
                                },
                                backward: null,
                                path: n
                            },
                            fragmentPathInResult: [],
                            operation: l(80604)
                        }
                    },
                    name: "RankingsPageTrending_data",
                    selections: [{
                        alias: "trendingCollections",
                        args: [{
                            kind: "Variable",
                            name: "categories",
                            variableName: "categories"
                        }, {
                            kind: "Variable",
                            name: "chains",
                            variableName: "chain"
                        }, {
                            kind: "Variable",
                            name: "topCollectionLimit",
                            variableName: "eligibleCount"
                        }],
                        concreteType: "CollectionTypeConnection",
                        kind: "LinkedField",
                        name: "__RankingsPageTrending_trendingCollections_connection",
                        plural: !1,
                        selections: [{
                            alias: null,
                            args: null,
                            concreteType: "CollectionTypeEdge",
                            kind: "LinkedField",
                            name: "edges",
                            plural: !0,
                            selections: [{
                                alias: null,
                                args: null,
                                concreteType: "CollectionType",
                                kind: "LinkedField",
                                name: "node",
                                plural: !1,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "createdDate",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "name",
                                    storageKey: null
                                }, e, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "logo",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "isVerified",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "relayId",
                                    storageKey: null
                                }, {
                                    args: null,
                                    kind: "FragmentSpread",
                                    name: "StatsV2CollectionCell_collection"
                                }, {
                                    kind: "InlineDataFragmentSpread",
                                    name: "collection_url",
                                    selections: [e, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "isCategory",
                                        storageKey: null
                                    }],
                                    args: null,
                                    argumentDefinitions: []
                                }, {
                                    alias: null,
                                    args: null,
                                    concreteType: "PaymentAssetType",
                                    kind: "LinkedField",
                                    name: "nativePaymentAsset",
                                    plural: !1,
                                    selections: [{
                                        args: null,
                                        kind: "FragmentSpread",
                                        name: "CollectionDataTablePrice_logo"
                                    }, {
                                        args: null,
                                        kind: "FragmentSpread",
                                        name: "StatsV2TablePrice_logo"
                                    }, {
                                        alias: null,
                                        args: null,
                                        concreteType: "AssetType",
                                        kind: "LinkedField",
                                        name: "asset",
                                        plural: !1,
                                        selections: [{
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "symbol",
                                            storageKey: null
                                        }],
                                        storageKey: null
                                    }],
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    concreteType: "CollectionStatsV2Type",
                                    kind: "LinkedField",
                                    name: "statsV2",
                                    plural: !1,
                                    selections: [{
                                        alias: null,
                                        args: null,
                                        concreteType: "PriceType",
                                        kind: "LinkedField",
                                        name: "floorPrice",
                                        plural: !1,
                                        selections: a,
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "numOwners",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "totalSupply",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "totalQuantity",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "totalListed",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "totalSales",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "sevenDaySales",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "sevenDayChange",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        concreteType: "PriceType",
                                        kind: "LinkedField",
                                        name: "sevenDayVolume",
                                        plural: !1,
                                        selections: a,
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "oneDaySales",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "oneDayChange",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        concreteType: "PriceType",
                                        kind: "LinkedField",
                                        name: "oneDayVolume",
                                        plural: !1,
                                        selections: a,
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "thirtyDaySales",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "thirtyDayChange",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        concreteType: "PriceType",
                                        kind: "LinkedField",
                                        name: "thirtyDayVolume",
                                        plural: !1,
                                        selections: a,
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        concreteType: "PriceType",
                                        kind: "LinkedField",
                                        name: "totalVolume",
                                        plural: !1,
                                        selections: a,
                                        storageKey: null
                                    }],
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "__typename",
                                    storageKey: null
                                }],
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "cursor",
                                storageKey: null
                            }],
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            concreteType: "PageInfo",
                            kind: "LinkedField",
                            name: "pageInfo",
                            plural: !1,
                            selections: [{
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "endCursor",
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "hasNextPage",
                                storageKey: null
                            }],
                            storageKey: null
                        }],
                        storageKey: null
                    }],
                    type: "Query",
                    abstractKey: null
                }
            }();
            a.hash = "ed66d23f444ce51b613cc9c636ddb337", e.default = a
        },
        40637: function(n, e, l) {
            l.r(e);
            var a = function() {
                var n = [{
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "count"
                    }, {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "cursor"
                    }, {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "identity"
                    }, {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "sortAscending"
                    }, {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "sortBy"
                    }],
                    e = {
                        kind: "Variable",
                        name: "sortAscending",
                        variableName: "sortAscending"
                    },
                    l = {
                        kind: "Variable",
                        name: "sortBy",
                        variableName: "sortBy"
                    },
                    a = [{
                        kind: "Variable",
                        name: "after",
                        variableName: "cursor"
                    }, {
                        kind: "Variable",
                        name: "first",
                        variableName: "count"
                    }, e, l],
                    t = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "imageUrl",
                        storageKey: null
                    },
                    i = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "symbol",
                        storageKey: null
                    },
                    r = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "id",
                        storageKey: null
                    },
                    s = [{
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "unit",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "eth",
                        storageKey: null
                    }];
                return {
                    fragment: {
                        argumentDefinitions: n,
                        kind: "Fragment",
                        metadata: null,
                        name: "RankingsPageWatchlistPaginationQuery",
                        selections: [{
                            args: [{
                                kind: "Variable",
                                name: "count",
                                variableName: "count"
                            }, {
                                kind: "Variable",
                                name: "cursor",
                                variableName: "cursor"
                            }, {
                                kind: "Variable",
                                name: "identity",
                                variableName: "identity"
                            }, e, l],
                            kind: "FragmentSpread",
                            name: "RankingsPageWatchlist_data"
                        }],
                        type: "Query",
                        abstractKey: null
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: n,
                        kind: "Operation",
                        name: "RankingsPageWatchlistPaginationQuery",
                        selections: [{
                            alias: null,
                            args: [{
                                kind: "Variable",
                                name: "address",
                                variableName: "identity"
                            }],
                            concreteType: "AccountType",
                            kind: "LinkedField",
                            name: "getAccount",
                            plural: !1,
                            selections: [{
                                alias: null,
                                args: null,
                                concreteType: "UserType",
                                kind: "LinkedField",
                                name: "user",
                                plural: !1,
                                selections: [{
                                    alias: null,
                                    args: a,
                                    concreteType: "CollectionTypeConnection",
                                    kind: "LinkedField",
                                    name: "collectionWatchlist",
                                    plural: !1,
                                    selections: [{
                                        alias: null,
                                        args: null,
                                        concreteType: "CollectionTypeEdge",
                                        kind: "LinkedField",
                                        name: "edges",
                                        plural: !0,
                                        selections: [{
                                            alias: null,
                                            args: null,
                                            concreteType: "CollectionType",
                                            kind: "LinkedField",
                                            name: "node",
                                            plural: !1,
                                            selections: [{
                                                alias: null,
                                                args: null,
                                                kind: "ScalarField",
                                                name: "createdDate",
                                                storageKey: null
                                            }, {
                                                alias: null,
                                                args: null,
                                                kind: "ScalarField",
                                                name: "name",
                                                storageKey: null
                                            }, {
                                                alias: null,
                                                args: null,
                                                kind: "ScalarField",
                                                name: "slug",
                                                storageKey: null
                                            }, {
                                                alias: null,
                                                args: null,
                                                kind: "ScalarField",
                                                name: "logo",
                                                storageKey: null
                                            }, {
                                                alias: null,
                                                args: null,
                                                kind: "ScalarField",
                                                name: "isVerified",
                                                storageKey: null
                                            }, {
                                                alias: null,
                                                args: null,
                                                kind: "ScalarField",
                                                name: "relayId",
                                                storageKey: null
                                            }, t, {
                                                alias: null,
                                                args: null,
                                                kind: "ScalarField",
                                                name: "isCategory",
                                                storageKey: null
                                            }, {
                                                alias: null,
                                                args: null,
                                                concreteType: "PaymentAssetType",
                                                kind: "LinkedField",
                                                name: "nativePaymentAsset",
                                                plural: !1,
                                                selections: [{
                                                    alias: null,
                                                    args: null,
                                                    concreteType: "ChainType",
                                                    kind: "LinkedField",
                                                    name: "chain",
                                                    plural: !1,
                                                    selections: [{
                                                        alias: null,
                                                        args: null,
                                                        kind: "ScalarField",
                                                        name: "identifier",
                                                        storageKey: null
                                                    }],
                                                    storageKey: null
                                                }, i, {
                                                    alias: null,
                                                    args: null,
                                                    concreteType: "AssetType",
                                                    kind: "LinkedField",
                                                    name: "asset",
                                                    plural: !1,
                                                    selections: [t, r, i],
                                                    storageKey: null
                                                }, r],
                                                storageKey: null
                                            }, {
                                                alias: null,
                                                args: null,
                                                concreteType: "CollectionStatsV2Type",
                                                kind: "LinkedField",
                                                name: "statsV2",
                                                plural: !1,
                                                selections: [{
                                                    alias: null,
                                                    args: null,
                                                    concreteType: "PriceType",
                                                    kind: "LinkedField",
                                                    name: "floorPrice",
                                                    plural: !1,
                                                    selections: s,
                                                    storageKey: null
                                                }, {
                                                    alias: null,
                                                    args: null,
                                                    kind: "ScalarField",
                                                    name: "numOwners",
                                                    storageKey: null
                                                }, {
                                                    alias: null,
                                                    args: null,
                                                    kind: "ScalarField",
                                                    name: "totalSupply",
                                                    storageKey: null
                                                }, {
                                                    alias: null,
                                                    args: null,
                                                    kind: "ScalarField",
                                                    name: "totalQuantity",
                                                    storageKey: null
                                                }, {
                                                    alias: null,
                                                    args: null,
                                                    kind: "ScalarField",
                                                    name: "totalListed",
                                                    storageKey: null
                                                }, {
                                                    alias: null,
                                                    args: null,
                                                    kind: "ScalarField",
                                                    name: "totalSales",
                                                    storageKey: null
                                                }, {
                                                    alias: null,
                                                    args: null,
                                                    kind: "ScalarField",
                                                    name: "sevenDaySales",
                                                    storageKey: null
                                                }, {
                                                    alias: null,
                                                    args: null,
                                                    kind: "ScalarField",
                                                    name: "sevenDayChange",
                                                    storageKey: null
                                                }, {
                                                    alias: null,
                                                    args: null,
                                                    concreteType: "PriceType",
                                                    kind: "LinkedField",
                                                    name: "sevenDayVolume",
                                                    plural: !1,
                                                    selections: s,
                                                    storageKey: null
                                                }, {
                                                    alias: null,
                                                    args: null,
                                                    kind: "ScalarField",
                                                    name: "oneDaySales",
                                                    storageKey: null
                                                }, {
                                                    alias: null,
                                                    args: null,
                                                    kind: "ScalarField",
                                                    name: "oneDayChange",
                                                    storageKey: null
                                                }, {
                                                    alias: null,
                                                    args: null,
                                                    concreteType: "PriceType",
                                                    kind: "LinkedField",
                                                    name: "oneDayVolume",
                                                    plural: !1,
                                                    selections: s,
                                                    storageKey: null
                                                }, {
                                                    alias: null,
                                                    args: null,
                                                    kind: "ScalarField",
                                                    name: "thirtyDaySales",
                                                    storageKey: null
                                                }, {
                                                    alias: null,
                                                    args: null,
                                                    kind: "ScalarField",
                                                    name: "thirtyDayChange",
                                                    storageKey: null
                                                }, {
                                                    alias: null,
                                                    args: null,
                                                    concreteType: "PriceType",
                                                    kind: "LinkedField",
                                                    name: "thirtyDayVolume",
                                                    plural: !1,
                                                    selections: s,
                                                    storageKey: null
                                                }, {
                                                    alias: null,
                                                    args: null,
                                                    concreteType: "PriceType",
                                                    kind: "LinkedField",
                                                    name: "totalVolume",
                                                    plural: !1,
                                                    selections: s,
                                                    storageKey: null
                                                }],
                                                storageKey: null
                                            }, r, {
                                                alias: null,
                                                args: null,
                                                kind: "ScalarField",
                                                name: "__typename",
                                                storageKey: null
                                            }],
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "cursor",
                                            storageKey: null
                                        }],
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        concreteType: "PageInfo",
                                        kind: "LinkedField",
                                        name: "pageInfo",
                                        plural: !1,
                                        selections: [{
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "endCursor",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "hasNextPage",
                                            storageKey: null
                                        }],
                                        storageKey: null
                                    }],
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: a,
                                    filters: ["sortBy", "sortAscending"],
                                    handle: "connection",
                                    key: "RankingsPageWatchlist_collectionWatchlist",
                                    kind: "LinkedHandle",
                                    name: "collectionWatchlist"
                                }, r],
                                storageKey: null
                            }, r],
                            storageKey: null
                        }]
                    },
                    params: {
                        cacheID: "1a6a2237b2689c3e7366eb90e93c76ac",
                        id: null,
                        metadata: {},
                        name: "RankingsPageWatchlistPaginationQuery",
                        operationKind: "query",
                        text: "query RankingsPageWatchlistPaginationQuery(\n  $count: Int!\n  $cursor: String\n  $identity: AddressScalar!\n  $sortAscending: Boolean\n  $sortBy: CollectionWatchlistSort\n) {\n  ...RankingsPageWatchlist_data_2NhXcF\n}\n\nfragment CollectionDataTablePrice_logo on PaymentAssetType {\n  ...PaymentAssetLogo_data\n}\n\nfragment PaymentAssetLogo_data on PaymentAssetType {\n  chain {\n    identifier\n  }\n  symbol\n  asset {\n    imageUrl\n    id\n  }\n}\n\nfragment RankingsPageWatchlist_data_2NhXcF on Query {\n  getAccount(address: $identity) {\n    user {\n      collectionWatchlist(after: $cursor, first: $count, sortBy: $sortBy, sortAscending: $sortAscending) {\n        edges {\n          node {\n            createdDate\n            name\n            slug\n            logo\n            isVerified\n            relayId\n            ...StatsV2CollectionCell_collection\n            ...collection_url\n            nativePaymentAsset {\n              ...CollectionDataTablePrice_logo\n              ...StatsV2TablePrice_logo\n              asset {\n                symbol\n                id\n              }\n              id\n            }\n            statsV2 {\n              floorPrice {\n                unit\n                eth\n              }\n              numOwners\n              totalSupply\n              totalQuantity\n              totalListed\n              totalSales\n              sevenDaySales\n              sevenDayChange\n              sevenDayVolume {\n                unit\n                eth\n              }\n              oneDaySales\n              oneDayChange\n              oneDayVolume {\n                unit\n                eth\n              }\n              thirtyDaySales\n              thirtyDayChange\n              thirtyDayVolume {\n                unit\n                eth\n              }\n              totalVolume {\n                unit\n                eth\n              }\n            }\n            id\n            __typename\n          }\n          cursor\n        }\n        pageInfo {\n          endCursor\n          hasNextPage\n        }\n      }\n      id\n    }\n    id\n  }\n}\n\nfragment StatsV2CollectionCell_collection on CollectionType {\n  name\n  imageUrl\n  isVerified\n}\n\nfragment StatsV2TablePrice_logo on PaymentAssetType {\n  symbol\n  ...PaymentAssetLogo_data\n}\n\nfragment collection_url on CollectionType {\n  slug\n  isCategory\n}\n"
                    }
                }
            }();
            a.hash = "5edf7c858907f009dbfd047b8fa37be0", e.default = a
        },
        2327: function(n, e, l) {
            l.r(e);
            var a = function() {
                var n = {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "count"
                    },
                    e = {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "cursor"
                    },
                    l = {
                        defaultValue: "0x0000000000000000000000000000000000000000",
                        kind: "LocalArgument",
                        name: "identity"
                    },
                    a = {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "noIdentity"
                    },
                    t = {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "sortAscending"
                    },
                    i = {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "sortBy"
                    },
                    r = {
                        kind: "Variable",
                        name: "sortAscending",
                        variableName: "sortAscending"
                    },
                    s = {
                        kind: "Variable",
                        name: "sortBy",
                        variableName: "sortBy"
                    },
                    o = [{
                        kind: "Variable",
                        name: "after",
                        variableName: "cursor"
                    }, {
                        kind: "Variable",
                        name: "first",
                        variableName: "count"
                    }, r, s],
                    u = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "imageUrl",
                        storageKey: null
                    },
                    c = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "symbol",
                        storageKey: null
                    },
                    d = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "id",
                        storageKey: null
                    },
                    g = [{
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "unit",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "eth",
                        storageKey: null
                    }];
                return {
                    fragment: {
                        argumentDefinitions: [n, e, l, a, t, i],
                        kind: "Fragment",
                        metadata: null,
                        name: "RankingsPageWatchlistQuery",
                        selections: [{
                            condition: "noIdentity",
                            kind: "Condition",
                            passingValue: !1,
                            selections: [{
                                args: [{
                                    kind: "Variable",
                                    name: "count",
                                    variableName: "count"
                                }, {
                                    kind: "Variable",
                                    name: "cursor",
                                    variableName: "cursor"
                                }, {
                                    kind: "Variable",
                                    name: "identity",
                                    variableName: "identity"
                                }, r, s],
                                kind: "FragmentSpread",
                                name: "RankingsPageWatchlist_data"
                            }]
                        }],
                        type: "Query",
                        abstractKey: null
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: [n, e, i, t, l, a],
                        kind: "Operation",
                        name: "RankingsPageWatchlistQuery",
                        selections: [{
                            condition: "noIdentity",
                            kind: "Condition",
                            passingValue: !1,
                            selections: [{
                                alias: null,
                                args: [{
                                    kind: "Variable",
                                    name: "address",
                                    variableName: "identity"
                                }],
                                concreteType: "AccountType",
                                kind: "LinkedField",
                                name: "getAccount",
                                plural: !1,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    concreteType: "UserType",
                                    kind: "LinkedField",
                                    name: "user",
                                    plural: !1,
                                    selections: [{
                                        alias: null,
                                        args: o,
                                        concreteType: "CollectionTypeConnection",
                                        kind: "LinkedField",
                                        name: "collectionWatchlist",
                                        plural: !1,
                                        selections: [{
                                            alias: null,
                                            args: null,
                                            concreteType: "CollectionTypeEdge",
                                            kind: "LinkedField",
                                            name: "edges",
                                            plural: !0,
                                            selections: [{
                                                alias: null,
                                                args: null,
                                                concreteType: "CollectionType",
                                                kind: "LinkedField",
                                                name: "node",
                                                plural: !1,
                                                selections: [{
                                                    alias: null,
                                                    args: null,
                                                    kind: "ScalarField",
                                                    name: "createdDate",
                                                    storageKey: null
                                                }, {
                                                    alias: null,
                                                    args: null,
                                                    kind: "ScalarField",
                                                    name: "name",
                                                    storageKey: null
                                                }, {
                                                    alias: null,
                                                    args: null,
                                                    kind: "ScalarField",
                                                    name: "slug",
                                                    storageKey: null
                                                }, {
                                                    alias: null,
                                                    args: null,
                                                    kind: "ScalarField",
                                                    name: "logo",
                                                    storageKey: null
                                                }, {
                                                    alias: null,
                                                    args: null,
                                                    kind: "ScalarField",
                                                    name: "isVerified",
                                                    storageKey: null
                                                }, {
                                                    alias: null,
                                                    args: null,
                                                    kind: "ScalarField",
                                                    name: "relayId",
                                                    storageKey: null
                                                }, u, {
                                                    alias: null,
                                                    args: null,
                                                    kind: "ScalarField",
                                                    name: "isCategory",
                                                    storageKey: null
                                                }, {
                                                    alias: null,
                                                    args: null,
                                                    concreteType: "PaymentAssetType",
                                                    kind: "LinkedField",
                                                    name: "nativePaymentAsset",
                                                    plural: !1,
                                                    selections: [{
                                                        alias: null,
                                                        args: null,
                                                        concreteType: "ChainType",
                                                        kind: "LinkedField",
                                                        name: "chain",
                                                        plural: !1,
                                                        selections: [{
                                                            alias: null,
                                                            args: null,
                                                            kind: "ScalarField",
                                                            name: "identifier",
                                                            storageKey: null
                                                        }],
                                                        storageKey: null
                                                    }, c, {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: "AssetType",
                                                        kind: "LinkedField",
                                                        name: "asset",
                                                        plural: !1,
                                                        selections: [u, d, c],
                                                        storageKey: null
                                                    }, d],
                                                    storageKey: null
                                                }, {
                                                    alias: null,
                                                    args: null,
                                                    concreteType: "CollectionStatsV2Type",
                                                    kind: "LinkedField",
                                                    name: "statsV2",
                                                    plural: !1,
                                                    selections: [{
                                                        alias: null,
                                                        args: null,
                                                        concreteType: "PriceType",
                                                        kind: "LinkedField",
                                                        name: "floorPrice",
                                                        plural: !1,
                                                        selections: g,
                                                        storageKey: null
                                                    }, {
                                                        alias: null,
                                                        args: null,
                                                        kind: "ScalarField",
                                                        name: "numOwners",
                                                        storageKey: null
                                                    }, {
                                                        alias: null,
                                                        args: null,
                                                        kind: "ScalarField",
                                                        name: "totalSupply",
                                                        storageKey: null
                                                    }, {
                                                        alias: null,
                                                        args: null,
                                                        kind: "ScalarField",
                                                        name: "totalQuantity",
                                                        storageKey: null
                                                    }, {
                                                        alias: null,
                                                        args: null,
                                                        kind: "ScalarField",
                                                        name: "totalListed",
                                                        storageKey: null
                                                    }, {
                                                        alias: null,
                                                        args: null,
                                                        kind: "ScalarField",
                                                        name: "totalSales",
                                                        storageKey: null
                                                    }, {
                                                        alias: null,
                                                        args: null,
                                                        kind: "ScalarField",
                                                        name: "sevenDaySales",
                                                        storageKey: null
                                                    }, {
                                                        alias: null,
                                                        args: null,
                                                        kind: "ScalarField",
                                                        name: "sevenDayChange",
                                                        storageKey: null
                                                    }, {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: "PriceType",
                                                        kind: "LinkedField",
                                                        name: "sevenDayVolume",
                                                        plural: !1,
                                                        selections: g,
                                                        storageKey: null
                                                    }, {
                                                        alias: null,
                                                        args: null,
                                                        kind: "ScalarField",
                                                        name: "oneDaySales",
                                                        storageKey: null
                                                    }, {
                                                        alias: null,
                                                        args: null,
                                                        kind: "ScalarField",
                                                        name: "oneDayChange",
                                                        storageKey: null
                                                    }, {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: "PriceType",
                                                        kind: "LinkedField",
                                                        name: "oneDayVolume",
                                                        plural: !1,
                                                        selections: g,
                                                        storageKey: null
                                                    }, {
                                                        alias: null,
                                                        args: null,
                                                        kind: "ScalarField",
                                                        name: "thirtyDaySales",
                                                        storageKey: null
                                                    }, {
                                                        alias: null,
                                                        args: null,
                                                        kind: "ScalarField",
                                                        name: "thirtyDayChange",
                                                        storageKey: null
                                                    }, {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: "PriceType",
                                                        kind: "LinkedField",
                                                        name: "thirtyDayVolume",
                                                        plural: !1,
                                                        selections: g,
                                                        storageKey: null
                                                    }, {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: "PriceType",
                                                        kind: "LinkedField",
                                                        name: "totalVolume",
                                                        plural: !1,
                                                        selections: g,
                                                        storageKey: null
                                                    }],
                                                    storageKey: null
                                                }, d, {
                                                    alias: null,
                                                    args: null,
                                                    kind: "ScalarField",
                                                    name: "__typename",
                                                    storageKey: null
                                                }],
                                                storageKey: null
                                            }, {
                                                alias: null,
                                                args: null,
                                                kind: "ScalarField",
                                                name: "cursor",
                                                storageKey: null
                                            }],
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            concreteType: "PageInfo",
                                            kind: "LinkedField",
                                            name: "pageInfo",
                                            plural: !1,
                                            selections: [{
                                                alias: null,
                                                args: null,
                                                kind: "ScalarField",
                                                name: "endCursor",
                                                storageKey: null
                                            }, {
                                                alias: null,
                                                args: null,
                                                kind: "ScalarField",
                                                name: "hasNextPage",
                                                storageKey: null
                                            }],
                                            storageKey: null
                                        }],
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: o,
                                        filters: ["sortBy", "sortAscending"],
                                        handle: "connection",
                                        key: "RankingsPageWatchlist_collectionWatchlist",
                                        kind: "LinkedHandle",
                                        name: "collectionWatchlist"
                                    }, d],
                                    storageKey: null
                                }, d],
                                storageKey: null
                            }]
                        }]
                    },
                    params: {
                        cacheID: "6706bca231dfb7d8f5d2fff6c45068cf",
                        id: null,
                        metadata: {},
                        name: "RankingsPageWatchlistQuery",
                        operationKind: "query",
                        text: 'query RankingsPageWatchlistQuery(\n  $count: Int!\n  $cursor: String\n  $sortBy: CollectionWatchlistSort\n  $sortAscending: Boolean\n  $identity: AddressScalar = "0x0000000000000000000000000000000000000000"\n  $noIdentity: Boolean!\n) {\n  ...RankingsPageWatchlist_data_2NhXcF @skip(if: $noIdentity)\n}\n\nfragment CollectionDataTablePrice_logo on PaymentAssetType {\n  ...PaymentAssetLogo_data\n}\n\nfragment PaymentAssetLogo_data on PaymentAssetType {\n  chain {\n    identifier\n  }\n  symbol\n  asset {\n    imageUrl\n    id\n  }\n}\n\nfragment RankingsPageWatchlist_data_2NhXcF on Query {\n  getAccount(address: $identity) {\n    user {\n      collectionWatchlist(after: $cursor, first: $count, sortBy: $sortBy, sortAscending: $sortAscending) {\n        edges {\n          node {\n            createdDate\n            name\n            slug\n            logo\n            isVerified\n            relayId\n            ...StatsV2CollectionCell_collection\n            ...collection_url\n            nativePaymentAsset {\n              ...CollectionDataTablePrice_logo\n              ...StatsV2TablePrice_logo\n              asset {\n                symbol\n                id\n              }\n              id\n            }\n            statsV2 {\n              floorPrice {\n                unit\n                eth\n              }\n              numOwners\n              totalSupply\n              totalQuantity\n              totalListed\n              totalSales\n              sevenDaySales\n              sevenDayChange\n              sevenDayVolume {\n                unit\n                eth\n              }\n              oneDaySales\n              oneDayChange\n              oneDayVolume {\n                unit\n                eth\n              }\n              thirtyDaySales\n              thirtyDayChange\n              thirtyDayVolume {\n                unit\n                eth\n              }\n              totalVolume {\n                unit\n                eth\n              }\n            }\n            id\n            __typename\n          }\n          cursor\n        }\n        pageInfo {\n          endCursor\n          hasNextPage\n        }\n      }\n      id\n    }\n    id\n  }\n}\n\nfragment StatsV2CollectionCell_collection on CollectionType {\n  name\n  imageUrl\n  isVerified\n}\n\nfragment StatsV2TablePrice_logo on PaymentAssetType {\n  symbol\n  ...PaymentAssetLogo_data\n}\n\nfragment collection_url on CollectionType {\n  slug\n  isCategory\n}\n'
                    }
                }
            }();
            a.hash = "c1998e549eaafbc4666bb7101b78b657", e.default = a
        },
        46991: function(n, e, l) {
            l.r(e);
            var a = function() {
                var n = ["getAccount", "user", "collectionWatchlist"],
                    e = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "slug",
                        storageKey: null
                    },
                    a = [{
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "unit",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "eth",
                        storageKey: null
                    }];
                return {
                    argumentDefinitions: [{
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "count"
                    }, {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "cursor"
                    }, {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "identity"
                    }, {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "sortAscending"
                    }, {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "sortBy"
                    }],
                    kind: "Fragment",
                    metadata: {
                        connection: [{
                            count: "count",
                            cursor: "cursor",
                            direction: "forward",
                            path: n
                        }],
                        refetch: {
                            connection: {
                                forward: {
                                    count: "count",
                                    cursor: "cursor"
                                },
                                backward: null,
                                path: n
                            },
                            fragmentPathInResult: [],
                            operation: l(40637)
                        }
                    },
                    name: "RankingsPageWatchlist_data",
                    selections: [{
                        alias: null,
                        args: [{
                            kind: "Variable",
                            name: "address",
                            variableName: "identity"
                        }],
                        concreteType: "AccountType",
                        kind: "LinkedField",
                        name: "getAccount",
                        plural: !1,
                        selections: [{
                            alias: null,
                            args: null,
                            concreteType: "UserType",
                            kind: "LinkedField",
                            name: "user",
                            plural: !1,
                            selections: [{
                                alias: "collectionWatchlist",
                                args: [{
                                    kind: "Variable",
                                    name: "sortAscending",
                                    variableName: "sortAscending"
                                }, {
                                    kind: "Variable",
                                    name: "sortBy",
                                    variableName: "sortBy"
                                }],
                                concreteType: "CollectionTypeConnection",
                                kind: "LinkedField",
                                name: "__RankingsPageWatchlist_collectionWatchlist_connection",
                                plural: !1,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    concreteType: "CollectionTypeEdge",
                                    kind: "LinkedField",
                                    name: "edges",
                                    plural: !0,
                                    selections: [{
                                        alias: null,
                                        args: null,
                                        concreteType: "CollectionType",
                                        kind: "LinkedField",
                                        name: "node",
                                        plural: !1,
                                        selections: [{
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "createdDate",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "name",
                                            storageKey: null
                                        }, e, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "logo",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "isVerified",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "relayId",
                                            storageKey: null
                                        }, {
                                            args: null,
                                            kind: "FragmentSpread",
                                            name: "StatsV2CollectionCell_collection"
                                        }, {
                                            kind: "InlineDataFragmentSpread",
                                            name: "collection_url",
                                            selections: [e, {
                                                alias: null,
                                                args: null,
                                                kind: "ScalarField",
                                                name: "isCategory",
                                                storageKey: null
                                            }],
                                            args: null,
                                            argumentDefinitions: []
                                        }, {
                                            alias: null,
                                            args: null,
                                            concreteType: "PaymentAssetType",
                                            kind: "LinkedField",
                                            name: "nativePaymentAsset",
                                            plural: !1,
                                            selections: [{
                                                args: null,
                                                kind: "FragmentSpread",
                                                name: "CollectionDataTablePrice_logo"
                                            }, {
                                                args: null,
                                                kind: "FragmentSpread",
                                                name: "StatsV2TablePrice_logo"
                                            }, {
                                                alias: null,
                                                args: null,
                                                concreteType: "AssetType",
                                                kind: "LinkedField",
                                                name: "asset",
                                                plural: !1,
                                                selections: [{
                                                    alias: null,
                                                    args: null,
                                                    kind: "ScalarField",
                                                    name: "symbol",
                                                    storageKey: null
                                                }],
                                                storageKey: null
                                            }],
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            concreteType: "CollectionStatsV2Type",
                                            kind: "LinkedField",
                                            name: "statsV2",
                                            plural: !1,
                                            selections: [{
                                                alias: null,
                                                args: null,
                                                concreteType: "PriceType",
                                                kind: "LinkedField",
                                                name: "floorPrice",
                                                plural: !1,
                                                selections: a,
                                                storageKey: null
                                            }, {
                                                alias: null,
                                                args: null,
                                                kind: "ScalarField",
                                                name: "numOwners",
                                                storageKey: null
                                            }, {
                                                alias: null,
                                                args: null,
                                                kind: "ScalarField",
                                                name: "totalSupply",
                                                storageKey: null
                                            }, {
                                                alias: null,
                                                args: null,
                                                kind: "ScalarField",
                                                name: "totalQuantity",
                                                storageKey: null
                                            }, {
                                                alias: null,
                                                args: null,
                                                kind: "ScalarField",
                                                name: "totalListed",
                                                storageKey: null
                                            }, {
                                                alias: null,
                                                args: null,
                                                kind: "ScalarField",
                                                name: "totalSales",
                                                storageKey: null
                                            }, {
                                                alias: null,
                                                args: null,
                                                kind: "ScalarField",
                                                name: "sevenDaySales",
                                                storageKey: null
                                            }, {
                                                alias: null,
                                                args: null,
                                                kind: "ScalarField",
                                                name: "sevenDayChange",
                                                storageKey: null
                                            }, {
                                                alias: null,
                                                args: null,
                                                concreteType: "PriceType",
                                                kind: "LinkedField",
                                                name: "sevenDayVolume",
                                                plural: !1,
                                                selections: a,
                                                storageKey: null
                                            }, {
                                                alias: null,
                                                args: null,
                                                kind: "ScalarField",
                                                name: "oneDaySales",
                                                storageKey: null
                                            }, {
                                                alias: null,
                                                args: null,
                                                kind: "ScalarField",
                                                name: "oneDayChange",
                                                storageKey: null
                                            }, {
                                                alias: null,
                                                args: null,
                                                concreteType: "PriceType",
                                                kind: "LinkedField",
                                                name: "oneDayVolume",
                                                plural: !1,
                                                selections: a,
                                                storageKey: null
                                            }, {
                                                alias: null,
                                                args: null,
                                                kind: "ScalarField",
                                                name: "thirtyDaySales",
                                                storageKey: null
                                            }, {
                                                alias: null,
                                                args: null,
                                                kind: "ScalarField",
                                                name: "thirtyDayChange",
                                                storageKey: null
                                            }, {
                                                alias: null,
                                                args: null,
                                                concreteType: "PriceType",
                                                kind: "LinkedField",
                                                name: "thirtyDayVolume",
                                                plural: !1,
                                                selections: a,
                                                storageKey: null
                                            }, {
                                                alias: null,
                                                args: null,
                                                concreteType: "PriceType",
                                                kind: "LinkedField",
                                                name: "totalVolume",
                                                plural: !1,
                                                selections: a,
                                                storageKey: null
                                            }],
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "__typename",
                                            storageKey: null
                                        }],
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "cursor",
                                        storageKey: null
                                    }],
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    concreteType: "PageInfo",
                                    kind: "LinkedField",
                                    name: "pageInfo",
                                    plural: !1,
                                    selections: [{
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "endCursor",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "hasNextPage",
                                        storageKey: null
                                    }],
                                    storageKey: null
                                }],
                                storageKey: null
                            }],
                            storageKey: null
                        }],
                        storageKey: null
                    }],
                    type: "Query",
                    abstractKey: null
                }
            }();
            a.hash = "5edf7c858907f009dbfd047b8fa37be0", e.default = a
        },
        74368: function(n, e, l) {
            l.r(e);
            var a = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "StatsV2CollectionCell_collection",
                selections: [{
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "name",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "imageUrl",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "isVerified",
                    storageKey: null
                }],
                type: "CollectionType",
                abstractKey: null,
                hash: "c8158da4f48fec19cc6413d5eb28ec72"
            };
            e.default = a
        },
        53458: function(n, e, l) {
            l.r(e);
            var a = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "StatsV2TablePrice_logo",
                selections: [{
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "symbol",
                    storageKey: null
                }, {
                    args: null,
                    kind: "FragmentSpread",
                    name: "PaymentAssetLogo_data"
                }],
                type: "PaymentAssetType",
                abstractKey: null,
                hash: "a5613f5ff48d20708087076bc6d91fdb"
            };
            e.default = a
        },
        5005: function(n, e, l) {
            l.r(e);
            var a = function() {
                var n = {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "count"
                    },
                    e = {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "cursor"
                    },
                    l = {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "identity"
                    },
                    a = {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "sortAscending"
                    },
                    t = {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "sortBy"
                    },
                    i = [{
                        kind: "Variable",
                        name: "address",
                        variableName: "identity"
                    }],
                    r = {
                        kind: "Variable",
                        name: "sortAscending",
                        variableName: "sortAscending"
                    },
                    s = {
                        kind: "Variable",
                        name: "sortBy",
                        variableName: "sortBy"
                    },
                    o = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "slug",
                        storageKey: null
                    },
                    u = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "__typename",
                        storageKey: null
                    },
                    c = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "cursor",
                        storageKey: null
                    },
                    d = {
                        alias: null,
                        args: null,
                        concreteType: "PageInfo",
                        kind: "LinkedField",
                        name: "pageInfo",
                        plural: !1,
                        selections: [{
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "endCursor",
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "hasNextPage",
                            storageKey: null
                        }],
                        storageKey: null
                    },
                    g = [{
                        kind: "Variable",
                        name: "after",
                        variableName: "cursor"
                    }, {
                        kind: "Variable",
                        name: "first",
                        variableName: "count"
                    }, r, s],
                    m = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "id",
                        storageKey: null
                    };
                return {
                    fragment: {
                        argumentDefinitions: [n, e, l, a, t],
                        kind: "Fragment",
                        metadata: null,
                        name: "StatsV2TableQuery",
                        selections: [{
                            alias: null,
                            args: i,
                            concreteType: "AccountType",
                            kind: "LinkedField",
                            name: "getAccount",
                            plural: !1,
                            selections: [{
                                alias: null,
                                args: null,
                                concreteType: "UserType",
                                kind: "LinkedField",
                                name: "user",
                                plural: !1,
                                selections: [{
                                    alias: "collectionWatchlist",
                                    args: [r, s],
                                    concreteType: "CollectionTypeConnection",
                                    kind: "LinkedField",
                                    name: "__StatsV2Table_collectionWatchlist_connection",
                                    plural: !1,
                                    selections: [{
                                        alias: null,
                                        args: null,
                                        concreteType: "CollectionTypeEdge",
                                        kind: "LinkedField",
                                        name: "edges",
                                        plural: !0,
                                        selections: [{
                                            alias: null,
                                            args: null,
                                            concreteType: "CollectionType",
                                            kind: "LinkedField",
                                            name: "node",
                                            plural: !1,
                                            selections: [o, {
                                                args: null,
                                                kind: "FragmentSpread",
                                                name: "StatsV2WatchlistButton_data"
                                            }, u],
                                            storageKey: null
                                        }, c],
                                        storageKey: null
                                    }, d],
                                    storageKey: null
                                }],
                                storageKey: null
                            }],
                            storageKey: null
                        }],
                        type: "Query",
                        abstractKey: null
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: [n, e, t, a, l],
                        kind: "Operation",
                        name: "StatsV2TableQuery",
                        selections: [{
                            alias: null,
                            args: i,
                            concreteType: "AccountType",
                            kind: "LinkedField",
                            name: "getAccount",
                            plural: !1,
                            selections: [{
                                alias: null,
                                args: null,
                                concreteType: "UserType",
                                kind: "LinkedField",
                                name: "user",
                                plural: !1,
                                selections: [{
                                    alias: null,
                                    args: g,
                                    concreteType: "CollectionTypeConnection",
                                    kind: "LinkedField",
                                    name: "collectionWatchlist",
                                    plural: !1,
                                    selections: [{
                                        alias: null,
                                        args: null,
                                        concreteType: "CollectionTypeEdge",
                                        kind: "LinkedField",
                                        name: "edges",
                                        plural: !0,
                                        selections: [{
                                            alias: null,
                                            args: null,
                                            concreteType: "CollectionType",
                                            kind: "LinkedField",
                                            name: "node",
                                            plural: !1,
                                            selections: [o, {
                                                alias: null,
                                                args: null,
                                                kind: "ScalarField",
                                                name: "isWatching",
                                                storageKey: null
                                            }, m, u],
                                            storageKey: null
                                        }, c],
                                        storageKey: null
                                    }, d],
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: g,
                                    filters: ["sortBy", "sortAscending"],
                                    handle: "connection",
                                    key: "StatsV2Table_collectionWatchlist",
                                    kind: "LinkedHandle",
                                    name: "collectionWatchlist"
                                }, m],
                                storageKey: null
                            }, m],
                            storageKey: null
                        }]
                    },
                    params: {
                        cacheID: "d2cf0a5bb028d878b697e1d3892de953",
                        id: null,
                        metadata: {
                            connection: [{
                                count: "count",
                                cursor: "cursor",
                                direction: "forward",
                                path: ["getAccount", "user", "collectionWatchlist"]
                            }]
                        },
                        name: "StatsV2TableQuery",
                        operationKind: "query",
                        text: "query StatsV2TableQuery(\n  $count: Int!\n  $cursor: String\n  $sortBy: CollectionWatchlistSort\n  $sortAscending: Boolean\n  $identity: AddressScalar!\n) {\n  getAccount(address: $identity) {\n    user {\n      collectionWatchlist(after: $cursor, first: $count, sortBy: $sortBy, sortAscending: $sortAscending) {\n        edges {\n          node {\n            slug\n            ...StatsV2WatchlistButton_data\n            id\n            __typename\n          }\n          cursor\n        }\n        pageInfo {\n          endCursor\n          hasNextPage\n        }\n      }\n      id\n    }\n    id\n  }\n}\n\nfragment StatsV2WatchlistButton_data on CollectionType {\n  isWatching\n}\n"
                    }
                }
            }();
            a.hash = "ea712c5a7912eaa9b0c70ecc68d0c6d0", e.default = a
        },
        12395: function(n, e, l) {
            l.r(e);
            var a = function() {
                var n = [{
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "collectionId"
                    }, {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "isWatching"
                    }],
                    e = [{
                        alias: null,
                        args: null,
                        concreteType: "CollectionMutationType",
                        kind: "LinkedField",
                        name: "collections",
                        plural: !1,
                        selections: [{
                            alias: null,
                            args: [{
                                kind: "Variable",
                                name: "collection",
                                variableName: "collectionId"
                            }, {
                                kind: "Variable",
                                name: "isWatching",
                                variableName: "isWatching"
                            }],
                            kind: "ScalarField",
                            name: "updateWatchlist",
                            storageKey: null
                        }],
                        storageKey: null
                    }];
                return {
                    fragment: {
                        argumentDefinitions: n,
                        kind: "Fragment",
                        metadata: null,
                        name: "StatsV2WatchlistButtonMutation",
                        selections: e,
                        type: "Mutation",
                        abstractKey: null
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: n,
                        kind: "Operation",
                        name: "StatsV2WatchlistButtonMutation",
                        selections: e
                    },
                    params: {
                        cacheID: "b638b8bd551ac680bdbbdb6288e78073",
                        id: null,
                        metadata: {},
                        name: "StatsV2WatchlistButtonMutation",
                        operationKind: "mutation",
                        text: "mutation StatsV2WatchlistButtonMutation(\n  $collectionId: CollectionRelayID!\n  $isWatching: Boolean!\n) {\n  collections {\n    updateWatchlist(collection: $collectionId, isWatching: $isWatching)\n  }\n}\n"
                    }
                }
            }();
            a.hash = "1e37f2ea421ecdce5d11e9dac82be52e", e.default = a
        },
        20655: function(n, e, l) {
            l.r(e);
            var a = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "StatsV2WatchlistButton_data",
                selections: [{
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "isWatching",
                    storageKey: null
                }],
                type: "CollectionType",
                abstractKey: null,
                hash: "5633d5e292df5969a3ebb3e016835ed0"
            };
            e.default = a
        }
    }
]);
//# sourceMappingURL=13465-1664c8014d12e0fd.js.map