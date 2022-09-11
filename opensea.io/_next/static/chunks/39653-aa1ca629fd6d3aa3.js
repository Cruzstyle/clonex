"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [39653], {
        60034: function(e, n, t) {
            t.d(n, {
                O: function() {
                    return z
                },
                c: function() {
                    return F
                }
            });
            var r = t(85034),
                i = t(31373),
                o = t(19989),
                a = t(24246),
                l = t(27378),
                s = t(24572),
                u = t(38579),
                d = t.n(u),
                c = t(4402),
                f = t(47892),
                m = t(74016),
                p = t(53585),
                g = t(377),
                h = t(2698),
                v = t(9476),
                y = t(316),
                b = t(11652),
                x = t(90761),
                k = t(70884);

            function Z() {
                var e = (0, o.Z)(["\n  ", "\n"]);
                return Z = function() {
                    return e
                }, e
            }
            var T, S, P = function(e) {
                    return (0, b.bn)(e.volume.quantity, e.volume.asset.decimals).div((0, b.bn)(e.quantity, 0)).toNumber()
                },
                w = function(e) {
                    return (0, b.bn)(e.volume.quantity, e.volume.asset.decimals).toNumber()
                },
                C = function(e) {
                    var n = e.dp,
                        t = e.getDate;
                    return (0, a.jsxs)(p.g, {
                        position: "relative",
                        textAlign: "center",
                        children: [(0, a.jsx)(y.xv.Body, {
                            as: "div",
                            color: "white",
                            margin: "0",
                            size: "small",
                            children: (0, s.Z)(t(n), "MMM d, yyyy")
                        }), (0, a.jsxs)(y.xv.Body, {
                            as: "div",
                            color: "white",
                            size: "small",
                            weight: "semibold",
                            children: ["Avg. price: \u039e", (0, b.SG)(P(n), 2, null !== (T = n.volume.asset.symbol) && void 0 !== T ? T : void 0)]
                        }), (0, a.jsxs)(y.xv.Body, {
                            as: "div",
                            color: "white",
                            size: "small",
                            weight: "semibold",
                            children: ["Volume: \u039e", (0, b.SG)((0, b.bn)(n.volume.quantity, n.volume.asset.decimals), 2, null !== (S = n.volume.asset.symbol) && void 0 !== S ? S : void 0)]
                        }), (0, a.jsxs)(y.xv.Body, {
                            as: "div",
                            color: "white",
                            size: "small",
                            weight: "semibold",
                            children: ["Num. sales: ", (0, b.jf)(n.quantity)]
                        })]
                    })
                },
                F = function(e) {
                    var n = e.data,
                        r = e.height,
                        i = void 0 === r ? 300 : r,
                        o = e.useUTC,
                        s = void 0 === o || o,
                        u = (0, c.useFragment)(t(94082), n).results,
                        d = (0, l.useCallback)((function(e) {
                            return s ? (n = e.bucketStart, new Date(n.split("+")[0])) : new Date(e.bucketStart);
                            var n
                        }), [s]),
                        f = (0, l.useCallback)((function(e) {
                            return (0, a.jsx)(C, {
                                dp: e,
                                getDate: d
                            })
                        }), [d]);
                    return 0 === u.length ? (0, a.jsxs)(g._, {
                        children: [(0, a.jsx)(A, {
                            height: 100,
                            width: 140
                        }), (0, a.jsx)(y.xv.Body, {
                            as: "div",
                            marginBottom: "16px",
                            marginTop: "8px",
                            size: "medium",
                            children: "No item activity yet"
                        })]
                    }) : (0, a.jsx)(h.q, {
                        columnAxisTitle: "Volume",
                        data: u,
                        getColumnValue: w,
                        getDate: d,
                        getValue: P,
                        height: i,
                        interactive: !0,
                        lineType: "line",
                        overrides: {
                            tooltip: {
                                shared: !0
                            }
                        },
                        renderTooltip: f,
                        yAxisTitle: "Average price"
                    })
                },
                D = function(e) {
                    var n = e.collectionSlug,
                        o = e.startDate,
                        l = (0, i.Z)(e, ["collectionSlug", "startDate"]),
                        s = (0, c.useLazyLoadQuery)(t(33762), {
                            collectionSlug: n,
                            startDate: o.toISOString()
                        });
                    return (0, a.jsx)(F, (0, r.Z)({
                        data: s.tradeHistory
                    }, l))
                },
                z = function(e) {
                    return (0, a.jsx)(m.s, {
                        fallback: (0, a.jsx)(v.aN, {}),
                        children: (0, a.jsx)(D, (0, r.Z)({}, e))
                    })
                },
                A = (0, f.ZP)(d()).attrs({
                    alt: "",
                    src: k.fU,
                    unoptimized: !0
                }).withConfig({
                    componentId: "sc-6777d55f-0"
                })(Z(), (0, x.Um)({
                    variants: {
                        dark: {
                            filter: "brightness(75%)"
                        }
                    }
                }))
        },
        2698: function(e, n, t) {
            t.d(n, {
                q: function() {
                    return p
                }
            });
            var r = t(85034),
                i = t(70169),
                o = t(24246),
                a = t(27378),
                l = t(62785),
                s = t(26992),
                u = t(76449),
                d = t(20225),
                c = t(87821),
                f = t(51971),
                m = t(34973),
                p = function(e) {
                    var n = e.data,
                        t = e.getColumnValue,
                        p = e.getDate,
                        g = e.getValue,
                        h = e.height,
                        v = e.width,
                        y = e.renderTooltip,
                        b = e.interactive,
                        x = void 0 !== b && b,
                        k = e.lineType,
                        Z = void 0 === k ? "spline" : k,
                        T = e.lineWidth,
                        S = void 0 === T ? 4 : T,
                        P = e.markerRadius,
                        w = void 0 === P ? 4 : P,
                        C = e.hideAxes,
                        F = void 0 !== C && C,
                        D = e.xAxisTitle,
                        z = e.yAxisTitle,
                        A = e.columnAxisTitle,
                        j = e.overrides,
                        K = void 0 === j ? {
                            tooltip: {}
                        } : j,
                        H = (0, d.Fg)().theme,
                        E = (0, a.useRef)(null),
                        G = (0, a.useRef)(K);
                    (0, a.useEffect)((function() {
                        G.current = K
                    }), [K]);
                    var O = (0, m.Kq)({
                            data: n,
                            renderTooltip: y
                        }),
                        V = (0, a.useMemo)((function() {
                            var e = [],
                                r = p(n[n.length - 1]),
                                i = (0, l.Z)(r) || (0, s.Z)(r, new Date);
                            return t && e.push((0, m.$M)(H, {
                                type: "column",
                                data: n.map((function(e) {
                                    return [p(e).getTime(), t(e)]
                                })),
                                color: c.ZP[H].colors.fog,
                                borderRadius: 4,
                                states: {
                                    hover: {
                                        color: c.ZP[H].colors.mist
                                    }
                                }
                            })), "area" === Z ? e.push((0, m.$M)(H, {
                                type: "area",
                                data: n.map((function(e) {
                                    return [p(e).getTime(), g(e)]
                                })),
                                yAxis: 1,
                                marker: {
                                    enabled: !1,
                                    fillColor: c.ZP[H].colors.primary,
                                    radius: w
                                },
                                lineColor: c.ZP[H].colors.primary,
                                color: {
                                    linearGradient: {
                                        x1: 0,
                                        x2: 0,
                                        y1: 0,
                                        y2: 1
                                    },
                                    stops: [
                                        [0, (0, u.$n)(.35, c.ZP[H].colors.primary)],
                                        [1, "#ffffff"]
                                    ]
                                },
                                lineWidth: S
                            })) : e.push((0, m.$M)(H, {
                                type: Z,
                                data: n.map((function(e) {
                                    return [p(e).getTime(), g(e)]
                                })),
                                yAxis: 1,
                                marker: {
                                    enabled: !1,
                                    fillColor: c.ZP[H].colors.primary,
                                    radius: w
                                },
                                lineWidth: S,
                                color: {
                                    linearGradient: {
                                        x1: 0,
                                        x2: 1,
                                        y1: 0,
                                        y2: 0
                                    },
                                    stops: [
                                        [0, c.ZP[H].colors.aqua],
                                        [1, "#5D32E9"]
                                    ]
                                },
                                zoneAxis: "x",
                                zones: [{
                                    value: i && n.length >= 2 ? p(n[n.length - 2]).getTime() : void 0
                                }, {
                                    dashStyle: "Dot"
                                }]
                            })), e
                        }), [n, t, p, g, Z, S, w, H]),
                        M = (0, a.useMemo)((function() {
                            var e;
                            return (0, i.Z)((0, r.Z)({}, m.ZG), {
                                chart: (0, m.Tw)(H, {
                                    height: h,
                                    width: v,
                                    interactive: x,
                                    spacing: F ? [0, 0, 0, 0] : null === (e = f.a.defaultOptions.chart) || void 0 === e ? void 0 : e.spacing
                                }),
                                yAxis: [(0, m.pG)(H, {
                                    visible: !F,
                                    axisTitle: A
                                }), (0, m.pG)(H, {
                                    opposite: !0,
                                    visible: !F,
                                    axisTitle: z
                                })],
                                xAxis: (0, m.ty)(H, {
                                    type: "datetime",
                                    visible: !F,
                                    axisTitle: D
                                }),
                                series: V,
                                tooltip: (0, m.RO)(H, (0, r.Z)({
                                    formatter: O,
                                    shared: !0
                                }, G.current.tooltip))
                            })
                        }), [A, h, F, x, V, H, O, v, D, z]);
                    return (0, o.jsx)(f.B, {
                        highcharts: f.a,
                        options: M,
                        ref: E
                    })
                }
        },
        86949: function(e, n, t) {
            t.d(n, {
                NK: function() {
                    return g
                },
                QZ: function() {
                    return f
                },
                U$: function() {
                    return m
                },
                b5: function() {
                    return p
                }
            });
            var r = t(19989),
                i = t(47892),
                o = t(53585),
                a = t(316),
                l = t(59405);

            function s() {
                var e = (0, r.Z)(["\n  ", "\n"]);
                return s = function() {
                    return e
                }, e
            }

            function u() {
                var e = (0, r.Z)(["\n  border: 1px solid ", ";\n  border-radius: ", ";\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n"]);
                return u = function() {
                    return e
                }, e
            }

            function d() {
                var e = (0, r.Z)([""]);
                return d = function() {
                    return e
                }, e
            }

            function c() {
                var e = (0, r.Z)(["\n  margin-bottom: 32px;\n"]);
                return c = function() {
                    return e
                }, e
            }
            var f = (0, i.ZP)(o.g).withConfig({
                    componentId: "sc-af7d43d8-0"
                })(s(), l.G),
                m = (0, i.ZP)(o.g).attrs({
                    as: "figure"
                }).withConfig({
                    componentId: "sc-af7d43d8-1"
                })(u(), (function(e) {
                    return e.theme.colors.border
                }), (function(e) {
                    return e.theme.borderRadius.default
                }));
            m.defaultProps = {
                padding: "40px 32px"
            };
            var p = (0, i.ZP)(a.xv.Body).attrs({
                    as: "figcaption"
                }).attrs({
                    size: "medium",
                    weight: "semibold"
                }).withConfig({
                    componentId: "sc-af7d43d8-2"
                })(d()),
                g = (0, i.ZP)(o.g).withConfig({
                    componentId: "sc-af7d43d8-3"
                })(c())
        },
        51971: function(e, n, t) {
            t.d(n, {
                B: function() {
                    return a.a
                },
                a: function() {
                    return i.a
                }
            });
            var r = t(43869),
                i = t.n(r),
                o = t(54164),
                a = t.n(o),
                l = t(88332),
                s = t.n(l);
            t(33181).W6 || s()(i())
        },
        34973: function(e, n, t) {
            t.d(n, {
                ZG: function() {
                    return h
                },
                Tw: function() {
                    return y
                },
                $M: function() {
                    return Z
                },
                RO: function() {
                    return b
                },
                ty: function() {
                    return x
                },
                pG: function() {
                    return k
                },
                G1: function() {
                    return u
                },
                Kq: function() {
                    return s
                },
                O$: function() {
                    return d
                }
            });
            var r = t(24246),
                i = t(27378),
                o = t(37803),
                a = t(18579),
                l = t(86949),
                s = function(e) {
                    var n = e.data,
                        t = e.renderTooltip,
                        s = (0, a.Fg)(),
                        u = s.theme,
                        d = s.dpr,
                        c = (0, i.useCallback)((function() {
                            var e, i, s = null !== (i = null === (e = this.points) || void 0 === e ? void 0 : e[0].point.index) && void 0 !== i ? i : this.point.index,
                                c = n[s];
                            return (0, o.renderToString)((0, r.jsx)(a.f6, {
                                dpr: d,
                                theme: u,
                                children: (0, r.jsx)(l.QZ, {
                                    children: null === t || void 0 === t ? void 0 : t(c, this)
                                })
                            }))
                        }), [n, u, t, d]);
                    return t ? c : void 0
                },
                u = function(e) {
                    var n = e.series,
                        t = e.renderTooltip,
                        s = (0, a.Fg)(),
                        u = s.theme,
                        d = s.dpr,
                        c = (0, i.useCallback)((function() {
                            var e, i, s, c, f = null !== (s = null === (e = this.points) || void 0 === e ? void 0 : e[0].point.index) && void 0 !== s ? s : this.point.index,
                                m = (null !== (c = null === (i = this.points) || void 0 === i ? void 0 : i[0].point) && void 0 !== c ? c : this.point).series.index,
                                p = n[m][f];
                            return (0, o.renderToString)((0, r.jsx)(a.f6, {
                                dpr: d,
                                theme: u,
                                children: (0, r.jsx)(l.QZ, {
                                    children: null === t || void 0 === t ? void 0 : t(p, this)
                                })
                            }))
                        }), [n, u, t, d]);
                    return t ? c : void 0
                },
                d = function(e) {
                    var n = e.zoomStart,
                        t = e.zoomEnd,
                        r = e.chart,
                        i = r.xAxis[0];
                    i.setExtremes(n, null !== i.max ? Math.min(i.max, t) : t), r.showResetZoom()
                },
                c = t(85034),
                f = t(70169),
                m = t(31373),
                p = t(76449),
                g = t(87821),
                h = {
                    title: {
                        text: ""
                    },
                    credits: {
                        enabled: !1
                    },
                    time: {
                        useUTC: !1
                    }
                },
                v = {
                    zoomType: "x",
                    panKey: "shift",
                    panning: {
                        enabled: !0
                    }
                },
                y = function(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        t = n.interactive,
                        r = void 0 !== t && t,
                        i = n.zoomType,
                        o = (0, m.Z)(n, ["interactive", "zoomType"]);
                    return (0, c.Z)((0, f.Z)((0, c.Z)({
                        backgroundColor: "",
                        style: {
                            fontFamily: "'Poppins', sans-serif"
                        },
                        borderWidth: 0
                    }, r ? v : {}), {
                        zoomType: r ? null !== i && void 0 !== i ? i : "x" : void 0
                    }), o)
                },
                b = function(e, n) {
                    var t = n.interactive,
                        r = void 0 !== t && t,
                        i = n.formatter,
                        o = (0, m.Z)(n, ["interactive", "formatter"]);
                    return (0, c.Z)({
                        backgroundColor: "light" === e ? (0, p.DZ)(.4, g.ZP[e].colors.charcoal) : (0, p.DZ)(.2, g.ZP[e].colors.charcoal),
                        shadow: !1,
                        borderRadius: 10,
                        borderWidth: 0,
                        padding: 12,
                        style: (0, c.Z)({
                            color: g.ZP[e].colors.white
                        }, o.style),
                        enabled: !!i,
                        formatter: i,
                        followTouchMove: !r,
                        useHTML: !0,
                        outside: !0,
                        hideDelay: 1e5
                    }, o)
                },
                x = function(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        t = n.axisTitle,
                        r = (0, m.Z)(n, ["axisTitle"]);
                    return (0, f.Z)((0, c.Z)({
                        crosshair: !0,
                        lineColor: g.ZP[e].colors.border,
                        tickColor: g.ZP[e].colors.border
                    }, r), {
                        title: (0, c.Z)({
                            text: null !== t && void 0 !== t ? t : null,
                            style: {
                                fontWeight: "600",
                                color: g.ZP[e].colors.text.body,
                                fontSize: "14px"
                            },
                            margin: 16
                        }, r.title)
                    })
                },
                k = function(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        t = n.axisTitle,
                        r = (0, m.Z)(n, ["axisTitle"]);
                    return (0, f.Z)((0, c.Z)({
                        gridLineColor: g.ZP[e].colors.border
                    }, r), {
                        title: (0, c.Z)({
                            text: null !== t && void 0 !== t ? t : null,
                            style: {
                                fontWeight: "600",
                                color: g.ZP[e].colors.text.body,
                                fontSize: "14px"
                            },
                            margin: 16
                        }, r.title)
                    })
                },
                Z = function(e, n) {
                    return (0, c.Z)({
                        showInLegend: !1,
                        color: g.ZP[e].colors.primary,
                        borderColor: g.ZP[e].colors.border
                    }, n)
                }
        },
        76190: function(e, n, t) {
            t.d(n, {
                t: function() {
                    return Z
                }
            });
            var r = t(85034),
                i = t(70169),
                o = t(31373),
                a = t(19989),
                l = t(24246),
                s = t(27378),
                u = t(74387),
                d = t(47892),
                c = t(96728),
                f = t(81480),
                m = t(56656),
                p = t(16611),
                g = t(90761),
                h = t(28828);

            function v() {
                var e = (0, a.Z)(["\n  display: flex;\n  align-items: center;\n"]);
                return v = function() {
                    return e
                }, e
            }

            function y() {
                var e = (0, a.Z)(["\n  height: ", "px;\n  background: ", ";\n  border: 2px solid\n    ", ";\n  border-radius: ", ";\n\n  ", "\n  ", "\n\n  ", "\n\n  ", "\n  ", "\n  ", "\n  ", "\n"]);
                return y = function() {
                    return e
                }, e
            }
            var b, x = function(e, n) {
                    var t = e.startEnhancer,
                        a = e.endEnhancer,
                        s = e.foregroundColor,
                        d = e.children,
                        c = (0, o.Z)(e, ["startEnhancer", "endEnhancer", "foregroundColor", "children"]),
                        m = !(0, u.Z)((0, f.ip)(f.ss.large), !1) ? "bold" : "small-bold-h4";
                    return (0, l.jsx)(T, (0, i.Z)((0, r.Z)({
                        foregroundColor: s,
                        ref: n,
                        variant: "secondary"
                    }, c), {
                        children: (0, l.jsxs)(k, {
                            as: "span",
                            color: s,
                            variant: m,
                            children: [t, d, a]
                        })
                    }))
                },
                k = (0, d.ZP)(p.WX).withConfig({
                    componentId: "sc-e120eff9-0"
                })(v()),
                Z = (0, s.forwardRef)(x),
                T = (0, d.ZP)(m.zx).withConfig({
                    componentId: "sc-e120eff9-1"
                })(y(), h.Wb, (function(e) {
                    return e.theme.colors.background
                }), (function(e) {
                    return null !== (b = e.foregroundColor) && void 0 !== b ? b : e.theme.colors.border
                }), (function(e) {
                    return e.theme.borderRadius.button
                }), c.borderRadius, c.boxShadow, (function(e) {
                    return (0, g.Um)({
                        variants: {
                            light: {
                                ":hover:not([disabled]),:active:not([disabled]):active:not([disabled]),:focus:not([disabled]):focus:not([disabled])": {
                                    borderColor: e.theme.colors.fog,
                                    borderWidth: "2px"
                                }
                            },
                            dark: {
                                background: e.theme.colors.oil
                            }
                        }
                    })
                }), c.width, c.height, c.background, c.border)
        },
        28828: function(e, n, t) {
            t.d(n, {
                C8: function() {
                    return r
                },
                Wb: function() {
                    return i
                },
                eg: function() {
                    return o
                },
                jh: function() {
                    return s
                },
                oZ: function() {
                    return l
                },
                ti: function() {
                    return a
                }
            });
            var r = 66,
                i = 48,
                o = 168,
                a = "cubic-bezier(0.45, 0, 0.55, 1)",
                l = .4,
                s = "main-search-results"
        },
        68283: function(e, n, t) {
            t.d(n, {
                P: function() {
                    return s
                },
                d: function() {
                    return u
                }
            });
            var r = t(24246),
                i = t(27378),
                o = t(88747),
                a = t(10485),
                l = t(28828),
                s = (0, i.createContext)({
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
                    headerTopOffset: a.E,
                    filterTopOffset: a.E,
                    contentTopOffset: a.E,
                    isAssetsCssGridEnabled: !1
                });

            function u(e) {
                var n = e.initialSidebarOpen,
                    t = void 0 === n || n,
                    u = e.initialMobileFilterDrawerOpen,
                    d = void 0 !== u && u,
                    c = e.children,
                    f = (0, i.useState)(t),
                    m = f[0],
                    p = f[1],
                    g = (0, i.useState)(d),
                    h = g[0],
                    v = g[1],
                    y = (0, i.useState)(!1),
                    b = y[0],
                    x = y[1],
                    k = (0, i.useState)(!1),
                    Z = k[0],
                    T = k[1],
                    S = a.E,
                    P = l.C8 + a.E,
                    w = (0, o.P5)("is_assets_css_grid_enabled"),
                    C = (0, i.useMemo)((function() {
                        return {
                            sidebarOpen: m,
                            isMobileFilterDrawerOpen: h,
                            setIsMobileFilterDrawerOpen: v,
                            toggleSidebar: p,
                            headerTopOffset: a.E,
                            filterTopOffset: S,
                            hasScrolledPastFilter: Z,
                            setHasScrolledPastFilter: T,
                            hasStickyElement: b,
                            setHasStickyElement: x,
                            contentTopOffset: P,
                            isAssetsCssGridEnabled: w
                        }
                    }), [m, h, Z, b, S, P, w]);
                return (0, r.jsx)(s.Provider, {
                    value: C,
                    children: c
                })
            }
        },
        33762: function(e, n, t) {
            t.r(n);
            var r = function() {
                var e = {
                        defaultValue: "DAY",
                        kind: "LocalArgument",
                        name: "bucketSize"
                    },
                    n = {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "collectionSlug"
                    },
                    t = {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "startDate"
                    },
                    r = [{
                        kind: "Variable",
                        name: "bucketSize",
                        variableName: "bucketSize"
                    }, {
                        kind: "Variable",
                        name: "collection",
                        variableName: "collectionSlug"
                    }, {
                        kind: "Variable",
                        name: "minTime",
                        variableName: "startDate"
                    }],
                    i = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "quantity",
                        storageKey: null
                    },
                    o = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "id",
                        storageKey: null
                    };
                return {
                    fragment: {
                        argumentDefinitions: [e, n, t],
                        kind: "Fragment",
                        metadata: null,
                        name: "PriceHistoryGraphV2Query",
                        selections: [{
                            alias: null,
                            args: r,
                            concreteType: "TradeHistoryType",
                            kind: "LinkedField",
                            name: "tradeHistory",
                            plural: !1,
                            selections: [{
                                args: null,
                                kind: "FragmentSpread",
                                name: "PriceHistoryGraphV2_data"
                            }],
                            storageKey: null
                        }],
                        type: "Query",
                        abstractKey: null
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: [n, t, e],
                        kind: "Operation",
                        name: "PriceHistoryGraphV2Query",
                        selections: [{
                            alias: null,
                            args: r,
                            concreteType: "TradeHistoryType",
                            kind: "LinkedField",
                            name: "tradeHistory",
                            plural: !1,
                            selections: [{
                                alias: null,
                                args: null,
                                concreteType: "TradeHistoryDataPoint",
                                kind: "LinkedField",
                                name: "results",
                                plural: !0,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "bucketStart",
                                    storageKey: null
                                }, i, {
                                    alias: null,
                                    args: null,
                                    concreteType: "AssetQuantityType",
                                    kind: "LinkedField",
                                    name: "volume",
                                    plural: !1,
                                    selections: [{
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
                                            name: "decimals",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "symbol",
                                            storageKey: null
                                        }, o],
                                        storageKey: null
                                    }, i, o],
                                    storageKey: null
                                }],
                                storageKey: null
                            }],
                            storageKey: null
                        }]
                    },
                    params: {
                        cacheID: "beb96b3cfbe5af8f482a5be01fce8fe6",
                        id: null,
                        metadata: {},
                        name: "PriceHistoryGraphV2Query",
                        operationKind: "query",
                        text: "query PriceHistoryGraphV2Query(\n  $collectionSlug: CollectionSlug!\n  $startDate: DateTime!\n  $bucketSize: BucketSize = DAY\n) {\n  tradeHistory(minTime: $startDate, collection: $collectionSlug, bucketSize: $bucketSize) {\n    ...PriceHistoryGraphV2_data\n  }\n}\n\nfragment PriceHistoryGraphV2_data on TradeHistoryType {\n  results {\n    bucketStart\n    quantity\n    volume {\n      asset {\n        decimals\n        symbol\n        id\n      }\n      quantity\n      id\n    }\n  }\n}\n"
                    }
                }
            }();
            r.hash = "53bb3ecbfd476d93d6e08ea01495b6cb", n.default = r
        },
        94082: function(e, n, t) {
            t.r(n);
            var r = function() {
                var e = {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "quantity",
                    storageKey: null
                };
                return {
                    argumentDefinitions: [],
                    kind: "Fragment",
                    metadata: null,
                    name: "PriceHistoryGraphV2_data",
                    selections: [{
                        alias: null,
                        args: null,
                        concreteType: "TradeHistoryDataPoint",
                        kind: "LinkedField",
                        name: "results",
                        plural: !0,
                        selections: [{
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "bucketStart",
                            storageKey: null
                        }, e, {
                            alias: null,
                            args: null,
                            concreteType: "AssetQuantityType",
                            kind: "LinkedField",
                            name: "volume",
                            plural: !1,
                            selections: [{
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
                                    name: "decimals",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "symbol",
                                    storageKey: null
                                }],
                                storageKey: null
                            }, e],
                            storageKey: null
                        }],
                        storageKey: null
                    }],
                    type: "TradeHistoryType",
                    abstractKey: null
                }
            }();
            r.hash = "d927e1236fdb25e7c728e512b107a8c4", n.default = r
        }
    }
]);
//# sourceMappingURL=39653-aa1ca629fd6d3aa3.js.map