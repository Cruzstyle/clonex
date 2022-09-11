"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3405], {
        3405: function(n, e, r) {
            r.d(e, {
                mn: function() {
                    return W
                }
            });
            var o = r(85034),
                t = r(70169),
                i = r(31373),
                l = r(19989),
                d = r(24246),
                u = r(27378),
                a = r(60713),
                c = r(85044),
                s = r(47892),
                f = r(53585),
                h = r(65156),
                p = r(68139),
                v = r(17599),
                m = r(72363),
                x = r(84188),
                g = r(52050),
                w = r(95632),
                Z = r(88747),
                k = r(96150),
                b = r(44668),
                C = r(16611),
                y = r(48599),
                M = r(6300),
                B = function(n) {
                    var e = n.showMore,
                        r = n.toggleShowMore,
                        o = (0, M.q)("designSystem");
                    return (0, d.jsx)(f.g, {
                        as: y.k,
                        minWidth: 64,
                        position: "relative",
                        width: "100%",
                        onClick: function(n) {
                            n.preventDefault(), r()
                        },
                        children: (0, d.jsx)(C.WX, {
                            marginBottom: 0,
                            marginTop: "4px",
                            variant: "info",
                            children: e ? o("showMore.less.label", "- Less") : o("showMore.more.label", "+ More")
                        })
                    })
                };

            function j() {
                var n = (0, l.Z)(["\n  border: none;\n  ", ";\n  ", ";\n"]);
                return j = function() {
                    return n
                }, n
            }
            var P = function(n) {
                    var e = n.className,
                        r = n.href,
                        l = n.renderPrimary,
                        u = n.renderMore,
                        a = n.onClick,
                        c = (0, i.Z)(n, ["className", "href", "renderPrimary", "renderMore", "onClick"]),
                        s = l,
                        f = u,
                        h = (0, g.Z)((0, w.Z)(!0), 2),
                        p = h[0],
                        v = h[1];
                    return (0, Z.kS)() ? (0, d.jsxs)(I, {
                        border: "none",
                        borderBottom: "1px solid",
                        borderColor: "border",
                        className: e,
                        flexDirection: "column",
                        href: r,
                        overflow: "hidden",
                        padding: {
                            _: "12px 16px",
                            xl: "16px"
                        },
                        role: "row",
                        onClick: a,
                        children: [(0, d.jsx)(k.k, {
                            width: "100%",
                            children: (0, d.jsx)(s, (0, t.Z)((0, o.Z)({}, c), {
                                ShowMoreButton: function() {
                                    return (0, d.jsx)(B, {
                                        showMore: !p,
                                        toggleShowMore: v
                                    })
                                },
                                isCollapsed: p,
                                toggleCollapsed: v
                            }))
                        }), !p && (0, d.jsx)(b.ck.Footer, {
                            overflow: "auto",
                            children: (0, d.jsx)(f, (0, o.Z)({}, c))
                        })]
                    }) : (0, d.jsxs)(b.ck, {
                        border: "none",
                        borderBottom: "1px solid",
                        borderColor: "border",
                        className: e,
                        flexDirection: "column",
                        href: r,
                        overflow: "hidden",
                        padding: "16px 0",
                        role: "row",
                        onClick: a,
                        children: [(0, d.jsx)(k.k, {
                            width: "100%",
                            children: (0, d.jsx)(s, (0, t.Z)((0, o.Z)({}, c), {
                                ShowMoreButton: function() {
                                    return (0, d.jsx)(B, {
                                        showMore: !p,
                                        toggleShowMore: v
                                    })
                                },
                                isCollapsed: p,
                                toggleCollapsed: v
                            }))
                        }), !p && (0, d.jsx)(b.ck.Footer, {
                            overflow: "auto",
                            children: (0, d.jsx)(f, (0, o.Z)({}, c))
                        })]
                    })
                },
                I = (0, s.ZP)(b.ck).withConfig({
                    componentId: "sc-c5384b02-0"
                })(j(), x.ZT, x.tN);

            function S() {
                var n = (0, l.Z)(["\n        display: block;\n      "]);
                return S = function() {
                    return n
                }, n
            }

            function R() {
                var n = (0, l.Z)(["\n  display: none;\n  ", "\n"]);
                return R = function() {
                    return n
                }, n
            }

            function N() {
                var n = (0, l.Z)(["\n        display: none;\n      "]);
                return N = function() {
                    return n
                }, n
            }

            function H() {
                var n = (0, l.Z)(["\n  ", "\n"]);
                return H = function() {
                    return n
                }, n
            }
            var F = function(n) {
                    var e = n.renderPrimary,
                        r = n.renderMore,
                        l = n.renderFullRow,
                        u = n.getHref,
                        a = n.fullRowMinBreakpoint,
                        c = void 0 === a ? "xl" : a,
                        s = n.onClick,
                        f = n.showBorder,
                        h = void 0 === f || f,
                        p = n.showInteractiveStyles,
                        v = void 0 !== p && p,
                        m = (0, i.Z)(n, ["renderPrimary", "renderMore", "renderFullRow", "getHref", "fullRowMinBreakpoint", "onClick", "showBorder", "showInteractiveStyles"]),
                        g = l,
                        w = null === u || void 0 === u ? void 0 : u(m),
                        Z = s ? function() {
                            return s(m)
                        } : void 0;
                    return (0, d.jsxs)(d.Fragment, {
                        children: [(0, d.jsx)(T, {
                            $fullRowMinBreakpoint: c,
                            children: (0, d.jsx)(P, (0, o.Z)({
                                eventParams: {
                                    index: m.index
                                },
                                href: w,
                                renderMore: r,
                                renderPrimary: e,
                                onClick: Z
                            }, m))
                        }), (0, d.jsx)(E, {
                            $fullRowMinBreakpoint: c,
                            children: g ? (0, d.jsx)(x.g9, {
                                eventParams: {
                                    index: m.index
                                },
                                href: w,
                                showBorder: h,
                                showInteractiveStyles: v,
                                onClick: Z,
                                children: (0, d.jsx)(g, (0, o.Z)({}, m))
                            }) : (0, d.jsx)(P, (0, t.Z)((0, o.Z)({
                                eventParams: {
                                    index: m.index
                                },
                                href: w,
                                renderMore: r,
                                renderPrimary: e,
                                onClick: Z
                            }, m), {
                                className: m.className
                            }))
                        })]
                    })
                },
                E = (0, s.ZP)(f.g).withConfig({
                    componentId: "sc-13de03c7-0"
                })(R(), (function(n) {
                    return (0, m.BC)((0, v.Z)({}, n.$fullRowMinBreakpoint, (0, s.iv)(S())))
                })),
                T = (0, s.ZP)(f.g).withConfig({
                    componentId: "sc-13de03c7-1"
                })(H(), (function(n) {
                    return (0, m.BC)((0, v.Z)({}, n.$fullRowMinBreakpoint, (0, s.iv)(N())))
                }));

            function _() {
                var n = (0, l.Z)([""]);
                return _ = function() {
                    return n
                }, n
            }
            var z = (0, s.ZP)(f.g).attrs((function(n) {
                return (0, t.Z)((0, o.Z)({}, n), {
                    flexBasis: n.width
                })
            })).withConfig({
                componentId: "sc-4eaffdff-0"
            })(_());
            z.defaultProps = {
                display: "flex",
                flexBasis: "125px",
                width: "125px",
                flexGrow: 0,
                flexShrink: 0,
                justifyContent: "center",
                alignItems: "center"
            };
            var W = Object.assign((function(n) {
                var e, r = n.items,
                    l = n.itemHeightEstimate,
                    s = n.itemKey,
                    v = n.header,
                    m = n.fullRowMinBreakpoint,
                    x = void 0 === m ? "xl" : m,
                    g = n.overscanBy,
                    w = n.pagination,
                    Z = n.isItemLoaded,
                    k = n.onClick,
                    b = n.showBorder,
                    C = void 0 === b || b,
                    y = n.showInteractiveStyles,
                    M = void 0 !== y && y,
                    B = n.renderPrimary,
                    j = n.renderMore,
                    P = n.renderFullRow,
                    I = n.getHref,
                    S = (0, i.Z)(n, ["items", "itemHeightEstimate", "itemKey", "header", "fullRowMinBreakpoint", "overscanBy", "pagination", "isItemLoaded", "onClick", "showBorder", "showInteractiveStyles", "renderPrimary", "renderMore", "renderFullRow", "getHref"]),
                    R = (0, h.lo)(w),
                    N = (0, a.z)(R, {
                        isItemLoaded: Z,
                        minimumBatchSize: null !== (e = null === w || void 0 === w ? void 0 : w.size) && void 0 !== e ? e : 16,
                        threshold: 1
                    }),
                    H = (0, u.useCallback)((function(n) {
                        return (0, d.jsx)(F, (0, t.Z)((0, o.Z)({
                            fullRowMinBreakpoint: x
                        }, n), {
                            getHref: I,
                            renderFullRow: P,
                            renderMore: j,
                            renderPrimary: B,
                            showBorder: C,
                            showInteractiveStyles: M,
                            onClick: k
                        }))
                    }), [x, I, k, P, j, B, C, M]),
                    E = (0, p.T)(r);
                return (0, d.jsxs)(f.g, (0, t.Z)((0, o.Z)({}, S), {
                    children: [v, (0, d.jsx)(c.a, {
                        itemHeightEstimate: null !== l && void 0 !== l ? l : 80,
                        itemKey: s,
                        items: r,
                        overscanBy: g,
                        render: H,
                        onRender: N
                    }, E)]
                }))
            }), {
                Row: F,
                Cell: z,
                HeaderContainer: x.gM,
                FullRowContainer: x.g9,
                StatContainer: x.iJ,
                StatHeader: x.UE,
                StatText: x.Xe
            })
        },
        84188: function(n, e, r) {
            r.d(e, {
                UE: function() {
                    return B
                },
                Xe: function() {
                    return M
                },
                ZT: function() {
                    return Z
                },
                g9: function() {
                    return b
                },
                gM: function() {
                    return C
                },
                iJ: function() {
                    return y
                },
                tN: function() {
                    return k
                }
            });
            var o = r(19989),
                t = r(76449),
                i = r(47892),
                l = r(377),
                d = r(44668),
                u = r(16611),
                a = r(99525);

            function c() {
                var n = (0, o.Z)(["\n  :hover {\n    box-shadow: none;\n    background-color: ", ";\n  }\n"]);
                return c = function() {
                    return n
                }, n
            }

            function s() {
                var n = (0, o.Z)(["\n  :active {\n    transition: background-color 0.25s ease-in-out;\n    background-color: ", ";\n  }\n"]);
                return s = function() {
                    return n
                }, n
            }

            function f() {
                var n = (0, o.Z)(['\n      padding: "12px";\n      ', ";\n      ", ";\n    "]);
                return f = function() {
                    return n
                }, n
            }

            function h() {
                var n = (0, o.Z)(["\n  position: relative;\n  border-left: none;\n  border-right: none;\n  border-top: none;\n  padding: ", ";\n  border: ", ";\n  justify-content: space-between;\n  ", ";\n"]);
                return h = function() {
                    return n
                }, n
            }

            function p() {
                var n = (0, o.Z)(["\n  position: sticky;\n  top: ", ";\n  z-index: ", ";\n\n  background-color: ", ";\n  border-bottom: 1px solid;\n  border-color: ", ";\n\n  /* Applied to hide the hover shadow underlayed items */\n  box-shadow: -8px 0px 0px 0px ", ",\n    8px 0px 0px 0px ", ";\n"]);
                return p = function() {
                    return n
                }, n
            }

            function v() {
                var n = (0, o.Z)(["\n  flex-shrink: 0;\n  text-align: center;\n  width: 90px;\n"]);
                return v = function() {
                    return n
                }, n
            }

            function m() {
                var n = (0, o.Z)([""]);
                return m = function() {
                    return n
                }, n
            }

            function x() {
                var n = (0, o.Z)([""]);
                return x = function() {
                    return n
                }, n
            }
            var g, w, Z = (0, i.iv)(c(), (function(n) {
                    return "light" === n.theme.type ? (0, t.m4)(n.theme.colors.fog, .2) : (0, t.m4)(n.theme.colors.ash, .2)
                })),
                k = (0, i.iv)(s(), (function(n) {
                    return "light" === n.theme.type ? (0, t.m4)(n.theme.colors.fog, .4) : (0, t.m4)(n.theme.colors.ash, .4)
                })),
                b = (0, i.ZP)(d.No).attrs({
                    role: "row"
                }).withConfig({
                    componentId: "sc-721a5632-0"
                })(h(), (function(n) {
                    return n.showBorder ? "16px" : "12px"
                }), (function(n) {
                    return !n.showBorder && "none"
                }), (function(n) {
                    return n.showInteractiveStyles && (0, i.iv)(f(), Z, k)
                }));
            b.defaultProps = {
                padding: "16px",
                border: "1px solid",
                borderColor: "border"
            };
            var C = (0, i.ZP)(a.i).withConfig({
                componentId: "sc-721a5632-1"
            })(p(), (function(n) {
                return null !== (g = n.top) && void 0 !== g ? g : 0
            }), (function(n) {
                return null !== (w = n.zIndex) && void 0 !== w ? w : 1
            }), (function(n) {
                return n.theme.colors.background
            }), (function(n) {
                return n.theme.colors.border
            }), (function(n) {
                return n.theme.colors.background
            }), (function(n) {
                return n.theme.colors.background
            }));
            C.defaultProps = {
                padding: "16px",
                borderRight: "none",
                borderLeft: "none",
                borderTop: "none"
            };
            var y = (0, i.ZP)(l._).withConfig({
                    componentId: "sc-721a5632-2"
                })(v()),
                M = (0, i.ZP)(u.WX).withConfig({
                    componentId: "sc-721a5632-3"
                })(m());
            M.defaultProps = {
                color: "text.body",
                margin: "0",
                variant: "small",
                fontSize: {
                    _: "14px",
                    xl: "16px"
                },
                fontWeight: 600
            };
            var B = (0, i.ZP)(u.WX).withConfig({
                componentId: "sc-721a5632-4"
            })(x());
            B.defaultProps = {
                margin: "0",
                variant: "small-bold",
                fontWeight: 400
            }
        },
        68139: function(n, e, r) {
            r.d(e, {
                T: function() {
                    return i
                }
            });
            var o = r(41948),
                t = r(38788),
                i = function(n) {
                    var e, r = null !== (e = (0, o.Z)(n.length)) && void 0 !== e ? e : -1,
                        i = n.length < r ? (0, t.Z)() : void 0,
                        l = (0, o.Z)(i);
                    return null !== i && void 0 !== i ? i : l
                }
        }
    }
]);
//# sourceMappingURL=3405-626b0668518698fa.js.map