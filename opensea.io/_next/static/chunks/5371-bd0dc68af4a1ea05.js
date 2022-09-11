"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5371], {
        7740: function(n, t, e) {
            e.d(t, {
                P: function() {
                    return y
                }
            });
            var r = e(17599),
                i = e(19989),
                o = e(24246),
                c = e(27378),
                a = e(12393),
                l = e(74387),
                u = e(47892),
                s = e(81480),
                d = e(77795),
                f = e(53585),
                h = e(20225),
                p = e(96150),
                v = e(72363),
                x = e(41127),
                g = e(25223),
                m = e(43424),
                b = e(92941),
                w = e(93580),
                C = e(47762);
            var k = e(87821);

            function Z() {
                var n = (0, i.Z)(["\n  z-index: ", ";\n\n  @media ", " {\n    position: sticky;\n    height: ", "px;\n  }\n"]);
                return Z = function() {
                    return n
                }, n
            }

            function j() {
                var n = (0, i.Z)(["\n  @media ", " {\n    position: absolute;\n    background: ", ";\n    ", "\n  }\n"]);
                return j = function() {
                    return n
                }, n
            }

            function y(n) {
                var t = n.children,
                    e = n.className,
                    i = n.elementId,
                    u = n.height,
                    d = n.fullWidth,
                    p = void 0 === d || d,
                    Z = n.stickyFromBreakpoint,
                    j = void 0 === Z ? "lg" : Z,
                    y = (0, m.u)(),
                    L = y.setHasStickyElement,
                    O = y.filterTopOffset,
                    V = y.setHasScrolledPastFilter,
                    E = (0, c.useState)(0),
                    A = E[0],
                    T = E[1],
                    S = (0, l.Z)((0, s._4)(v.AV.sm), !1),
                    U = (0, g.r)().isOpen,
                    M = (0, w.d)().isOpen,
                    B = (0, a.YD)({
                        initialInView: !0,
                        rootMargin: "-".concat((O || 0) + 4, "px 0px ").concat((O || 0) + 4, "px 0px"),
                        threshold: [.6]
                    }),
                    W = B.ref,
                    F = B.inView,
                    H = (0, h.Fg)().theme,
                    _ = (0, a.YD)({
                        initialInView: !1
                    }),
                    z = _.ref,
                    N = _.inView,
                    D = _.entry;
                (0, c.useEffect)((function() {
                    L(!F)
                }), [F, L]), (0, c.useEffect)((function() {
                    var n = !!(null === D || void 0 === D ? void 0 : D.boundingClientRect.top) && D.boundingClientRect.top < 0;
                    V(!N && n)
                }), [N, V, D]), (0, C.n)((function() {
                    T(function() {
                        var n = document.createElement("p");
                        n.style.width = "100%", n.style.height = "200px";
                        var t = document.createElement("div");
                        t.style.position = "absolute", t.style.top = "0px", t.style.left = "0px", t.style.visibility = "hidden", t.style.width = "200px", t.style.height = "150px", t.style.overflow = "hidden", t.appendChild(n), document.body.appendChild(t);
                        var e = n.offsetWidth;
                        t.style.overflow = "scroll";
                        var r = n.offsetWidth;
                        return e === r && (r = t.clientWidth), document.body.removeChild(t), e - r
                    }())
                }));
                var R = A;
                return U && !S ? R += x.Q : M && !S && (R += b.V), (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsx)("span", {
                        id: i,
                        ref: W
                    }), (0, o.jsx)(P, {
                        className: e,
                        largeBPHeight: u,
                        stickyFromBreakpoint: j,
                        top: O - 1,
                        children: (0, o.jsx)(I, {
                            boxShadow: (0, r.Z)({
                                _: "none"
                            }, j, "\n              ".concat(F ? "" : "light" === H ? k.ZP.light.shadows.button : k.ZP.dark.shadows.button, "\n            ")),
                            fullWidth: p,
                            height: "100%",
                            inView: F,
                            stickyFromBreakpoint: j,
                            top: "0",
                            width: "calc(100vw - ".concat(R, "px)"),
                            widthOffset: R,
                            children: t
                        })
                    }), (0, o.jsx)(v.pU, {
                        lessThan: j,
                        children: (0, o.jsx)(f.g, {
                            position: "relative",
                            ref: z,
                            top: "-".concat(O - u, "px")
                        })
                    })]
                })
            }
            var P = (0, u.ZP)(p.k).withConfig({
                    componentId: "sc-aef7533e-0"
                })(Z(), d.k.PHOENIX_HEADER, (function(n) {
                    return (0, s.ip)(v.AV[n.stickyFromBreakpoint])
                }), (function(n) {
                    return n.largeBPHeight
                })),
                I = (0, u.ZP)(f.g).withConfig({
                    componentId: "sc-aef7533e-1"
                })(j(), (function(n) {
                    return (0, s.ip)(v.AV[n.stickyFromBreakpoint])
                }), (function(n) {
                    return n.theme.colors.background
                }), (function(n) {
                    return n.fullWidth ? "\n      left: calc((100vw - (100% + ".concat(n.widthOffset, "px)) / -2);\n      right: calc((100vw - (100% + ").concat(n.widthOffset, "px)) / -2);\n      ") : "\n      margin-left: calc(-1 * ((100vw - (100% + ".concat(n.widthOffset, "px)) / 2));\n      margin-right: calc(-1 * ((100vw - (100% + ").concat(n.widthOffset, "px)) / 2));\n      padding-left: calc((100vw - (100% + ").concat(n.widthOffset, "px)) / 2);\n      padding-right: calc((100vw - (100% + ").concat(n.widthOffset, "px)) / 2);\n      ")
                }))
        },
        66843: function(n, t, e) {
            e.d(t, {
                r: function() {
                    return i
                }
            });
            var r = e(24246),
                i = (e(27378), function(n) {
                    var t = n.color,
                        e = n.className,
                        i = n.width,
                        o = n.height,
                        c = n.active;
                    return (0, r.jsx)("svg", {
                        className: e,
                        color: t,
                        style: {
                            height: "".concat(o, "px"),
                            width: "".concat(i, "px")
                        },
                        viewBox: "0 0 24 24",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: c ? (0, r.jsx)(r.Fragment, {
                            children: (0, r.jsx)("path", {
                                d: "M12.6317 3.9063L14.8341 8.33148C14.9415 8.54756 15.15 8.69669 15.3893 8.73017L20.3125 9.43929C20.9168 9.52755 21.1591 10.2641 20.7204 10.6871L17.1592 14.1323C16.9844 14.2997 16.9077 14.5432 16.9475 14.7805L17.788 19.644C17.8923 20.2405 17.2604 20.697 16.7206 20.414L12.3188 18.1162C12.1041 18.0036 11.8465 18.0036 11.6348 18.1162L7.23309 20.414C6.69323 20.697 6.06134 20.2405 6.16563 19.644L7.0061 14.7805C7.04598 14.5432 6.96929 14.3027 6.79445 14.1323L3.224 10.6871C2.78536 10.2641 3.02768 9.52755 3.63196 9.43929L8.55514 8.73017C8.7944 8.69669 9.00298 8.54756 9.11034 8.33148L11.3097 3.9063C11.5796 3.36457 12.3618 3.36457 12.6317 3.9063Z",
                                fill: "currentColor",
                                stroke: "currentColor",
                                strokeMiterlimit: "10",
                                strokeWidth: "2"
                            })
                        }) : (0, r.jsx)("path", {
                            d: "M12.6,3.9l2.2,4.4c0.1,0.2,0.3,0.4,0.6,0.4l4.9,0.7c0.6,0.1,0.8,0.8,0.4,1.2l-3.6,3.4c-0.2,0.2-0.3,0.4-0.2,0.6 l0.8,4.9c0.1,0.6-0.5,1.1-1.1,0.8l-4.4-2.3c-0.2-0.1-0.5-0.1-0.7,0l-4.4,2.3c-0.5,0.3-1.2-0.2-1.1-0.8L7,14.8c0-0.2,0-0.5-0.2-0.6 l-3.6-3.4C2.8,10.3,3,9.5,3.6,9.4l4.9-0.7c0.2,0,0.4-0.2,0.6-0.4l2.2-4.4C11.6,3.4,12.4,3.4,12.6,3.9z",
                            fill: "none",
                            stroke: "currentColor",
                            strokeMiterlimit: "10",
                            strokeWidth: "2.5"
                        })
                    })
                })
        },
        41127: function(n, t, e) {
            e.d(t, {
                Q: function() {
                    return r
                },
                s: function() {
                    return i
                }
            });
            var r = 359,
                i = 20
        },
        25223: function(n, t, e) {
            e.d(t, {
                r: function() {
                    return o
                }
            });
            var r = e(27378),
                i = e(23891),
                o = function() {
                    return (0, r.useContext)(i.q)
                }
        },
        8117: function(n, t, e) {
            e.d(t, {
                r: function() {
                    return p
                }
            });
            var r = e(23842),
                i = e(85034),
                o = e(70169),
                c = e(3204),
                a = e(35230),
                l = e.n(a),
                u = e(27378),
                s = e(20927),
                d = e.n(s),
                f = e(87481),
                h = "assetSelection",
                p = function() {
                    var n, t = null === (n = (0, f.b)().wallet.activeAccount) || void 0 === n ? void 0 : n.address,
                        e = (0, u.useMemo)((function() {
                            return {
                                walletAddress: t,
                                action: void 0,
                                selections: []
                            }
                        }), [t]),
                        a = (0, u.useState)(e),
                        s = a[0],
                        p = a[1];
                    (0, u.useEffect)((function() {
                        var n = function() {
                            var n = (0, r.Z)(l().mark((function n() {
                                var e;
                                return l().wrap((function(n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            return n.prev = 0, n.next = 3, d().getItem(h);
                                        case 3:
                                            e = n.sent, t && (null === e || void 0 === e ? void 0 : e.walletAddress) === t && p(e), n.next = 9;
                                            break;
                                        case 7:
                                            n.prev = 7, n.t0 = n.catch(0);
                                        case 9:
                                        case "end":
                                            return n.stop()
                                    }
                                }), n, null, [
                                    [0, 7]
                                ])
                            })));
                            return function() {
                                return n.apply(this, arguments)
                            }
                        }();
                        n()
                    }), [t]), (0, u.useEffect)((function() {
                        d().setItem(h, s)
                    }), [s]);
                    var v = (0, u.useCallback)((function(n) {
                            p((function(t) {
                                return (0, o.Z)((0, i.Z)({}, t), {
                                    action: n
                                })
                            }))
                        }), []),
                        x = (0, u.useCallback)((function(n) {
                            p((function(t) {
                                return (0, o.Z)((0, i.Z)({}, t), {
                                    selections: (0, c.Z)(t.selections).concat([n])
                                })
                            }))
                        }), []),
                        g = (0, u.useCallback)((function(n) {
                            p((function(t) {
                                return (0, o.Z)((0, i.Z)({}, t), {
                                    selections: t.selections.filter((function(t) {
                                        return t.relayId !== n
                                    }))
                                })
                            }))
                        }), []),
                        m = (0, u.useCallback)((function() {
                            p(e)
                        }), [e]);
                    return {
                        action: s.action,
                        selections: s.selections,
                        setAction: v,
                        select: x,
                        unselect: g,
                        clear: m
                    }
                }
        },
        23891: function(n, t, e) {
            e.d(t, {
                G: function() {
                    return d
                },
                q: function() {
                    return s
                }
            });
            var r = e(24246),
                i = e(27378),
                o = e(8117),
                c = e(79790),
                a = e(6300),
                l = e(41127),
                u = e(70498),
                s = (0, i.createContext)({
                    action: void 0,
                    isOpen: !1,
                    selection: [],
                    onSetAction: function() {
                        return null
                    },
                    onClear: function() {
                        return null
                    },
                    onDelete: function() {
                        return null
                    },
                    onSelect: function() {
                        return null
                    }
                }),
                d = function(n) {
                    var t = n.children,
                        e = (0, a.q)("assets"),
                        d = (0, c.e)().showErrorMessage,
                        f = (0, o.r)(),
                        h = f.action,
                        p = f.selections,
                        v = f.setAction,
                        x = f.select,
                        g = f.unselect,
                        m = f.clear,
                        b = (0, i.useCallback)((function(n) {
                            return v(n)
                        }), [v]);
                    (0, i.useEffect)((function() {
                        1 !== p.length || h || b("bulkList")
                    }), [h, b, p]);
                    var w = (0, i.useCallback)((function() {
                            return m()
                        }), [m]),
                        C = (0, i.useCallback)((function(n) {
                            p.length === l.s && h && (0, u.n)(h) ? d(e("errors.exceededBundleMax", "A bundle can't have more than {{count}} items.", {
                                count: l.s
                            })) : x(n)
                        }), [h, x, p, d, e]),
                        k = (0, i.useCallback)((function(n) {
                            return g(n)
                        }), [g]),
                        Z = (0, i.useMemo)((function() {
                            return {
                                action: h,
                                isOpen: !!h,
                                selection: p,
                                onSetAction: b,
                                onClear: w,
                                onDelete: k,
                                onSelect: C
                            }
                        }), [h, p, w, k, C, b]);
                    return (0, r.jsx)(s.Provider, {
                        value: Z,
                        children: t
                    })
                }
        },
        70498: function(n, t, e) {
            e.d(t, {
                n: function() {
                    return i
                },
                w: function() {
                    return o
                }
            });
            var r = ["bulkList", "sell", "transfer"],
                i = function(n) {
                    return r.includes(n)
                },
                o = function(n) {
                    return "sell" === n
                }
        },
        43424: function(n, t, e) {
            e.d(t, {
                u: function() {
                    return o
                }
            });
            var r = e(27378),
                i = e(68283);

            function o() {
                return (0, r.useContext)(i.P)
            }
        },
        84762: function(n, t, e) {
            e.d(t, {
                n: function() {
                    return B
                }
            });
            var r = e(85034),
                i = e(70169),
                o = e(31373),
                c = e(19989),
                a = e(24246),
                l = (e(27378), e(76449)),
                u = e(74387),
                s = e(47892),
                d = e(48257),
                f = e(53585),
                h = e(18616),
                p = e(96150),
                v = e(72363),
                x = e(17482),
                g = e(72686),
                m = e(99525),
                b = e(316),
                w = e(6300),
                C = e(11652),
                k = e(78439),
                Z = e(90761);

            function j() {
                var n = (0, c.Z)(["\n      margin: unset;\n    "]);
                return j = function() {
                    return n
                }, n
            }

            function y() {
                var n = (0, c.Z)(["\n  /* Fixes the width showing as 2px instead */\n  border-width: 0.5px;\n  border-style: solid;\n  ", "\n  margin: 0px -16px;\n  ", "\n"]);
                return y = function() {
                    return n
                }, n
            }

            function P() {
                var n = (0, c.Z)(["\n  justify-content: left;\n  width: 100%;\n  margin: 0px;\n  :hover {\n    overflow: auto;\n  }\n"]);
                return P = function() {
                    return n
                }, n
            }

            function I() {
                var n = (0, c.Z)(["\n        gap: ", ";\n      "]);
                return I = function() {
                    return n
                }, n
            }

            function L() {
                var n = (0, c.Z)(["\n        gap: 24px;\n      "]);
                return L = function() {
                    return n
                }, n
            }

            function O() {
                var n = (0, c.Z)(["\n        gap: 16px;\n      "]);
                return O = function() {
                    return n
                }, n
            }

            function V() {
                var n = (0, c.Z)(["\n  gap: 24px;\n  margin: 0px;\n  margin-left: -8px;\n  ", "\n"]);
                return V = function() {
                    return n
                }, n
            }

            function E() {
                var n = (0, c.Z)(["\n  display: flex;\n  padding: ", ";\n  cursor: pointer;\n"]);
                return E = function() {
                    return n
                }, n
            }

            function A() {
                var n = (0, c.Z)(["\n  width: 100%;\n"]);
                return A = function() {
                    return n
                }, n
            }

            function T() {
                var n = (0, c.Z)(["\n  color: ", ";\n"]);
                return T = function() {
                    return n
                }, n
            }

            function S() {
                var n = (0, c.Z)(["\n  margin-right: 0px;\n"]);
                return S = function() {
                    return n
                }, n
            }

            function U() {
                var n = (0, c.Z)(["\n  margin-right: 0px;\n"]);
                return U = function() {
                    return n
                }, n
            }

            function M() {
                var n = (0, c.Z)(["\n  color: inherit;\n"]);
                return M = function() {
                    return n
                }, n
            }
            var B = function(n) {
                    var t = n.tabs,
                        e = n.currentTab,
                        c = n.handleClick,
                        l = n.baseUrl,
                        u = n.isLoading,
                        s = n.endEnhancer,
                        d = n.labelVariant,
                        h = n.renderLabel,
                        x = n.tabItemPadding,
                        b = n.useUpdatedTabLabels,
                        C = void 0 !== b && b,
                        k = (0, o.Z)(n, ["tabs", "currentTab", "handleClick", "baseUrl", "isLoading", "endEnhancer", "labelVariant", "renderLabel", "tabItemPadding", "useUpdatedTabLabels"]),
                        Z = (0, w.q)("phoenix");
                    return u ? (0, a.jsx)(z, {
                        children: (0, a.jsx)(g.O.Row, {
                            children: (0, a.jsxs)(p.k, {
                                children: [(0, a.jsx)(v.pU, {
                                    greaterThanOrEqual: "sm",
                                    children: (0, a.jsx)(g.O.Line, {
                                        height: "44px",
                                        width: "700px"
                                    })
                                }), (0, a.jsx)(v.pU, {
                                    lessThan: "sm",
                                    children: (0, a.jsx)(g.O.Line, {
                                        height: "32px",
                                        width: "300px"
                                    })
                                })]
                            })
                        })
                    }) : (0, a.jsx)(z, {
                        "data-testid": "ProfilePage--navbar",
                        children: (0, a.jsxs)(f.g, {
                            as: "nav",
                            overflow: "hidden",
                            width: "100%",
                            children: [(0, a.jsxs)(m.i, {
                                alignItems: "flex-end",
                                children: [(0, a.jsx)(F, {
                                    children: (0, a.jsx)(H, (0, i.Z)((0, r.Z)({}, k), {
                                        $gap: "large" === d ? "40px" : "48px",
                                        children: t.map((function(n, t) {
                                            if (Array.isArray(n)) {
                                                var r = n.filter((function(n) {
                                                    return n.id === e
                                                })).length > 0;
                                                return (0, a.jsx)(N, {
                                                    active: r,
                                                    baseUrl: l,
                                                    currentTab: e,
                                                    items: n,
                                                    label: Z("more", "More"),
                                                    labelVariant: d
                                                }, "more-dropdown")
                                            }
                                            return (0, a.jsx)(D, {
                                                active: n.id === e,
                                                baseUrl: l,
                                                count: n.count,
                                                handleClick: c,
                                                id: n.id,
                                                label: n.label,
                                                labelVariant: d,
                                                path: n.path,
                                                renderLabel: h,
                                                tabItemPadding: x,
                                                useUpdatedTabLabels: C
                                            }, n.id || t)
                                        }))
                                    }))
                                }), s]
                            }), (0, a.jsx)(W, {})]
                        })
                    })
                },
                W = (0, s.ZP)(f.g).withConfig({
                    componentId: "sc-ec8f13a5-0"
                })(y(), (function(n) {
                    return (0, Z.Um)({
                        variants: {
                            light: {
                                borderColor: (0, l.m4)(n.theme.colors.fog, .5)
                            },
                            dark: {
                                borderColor: (0, l.m4)(n.theme.colors.oil, .5)
                            }
                        }
                    })
                }), (0, v.BC)({
                    sm: (0, s.iv)(j())
                })),
                F = (0, s.ZP)(x.v).attrs({
                    direction: "horizontal"
                }).withConfig({
                    componentId: "sc-ec8f13a5-1"
                })(P()),
                H = (0, s.ZP)(p.k).withConfig({
                    componentId: "sc-ec8f13a5-2"
                })(V(), (function(n) {
                    return (0, v.BC)({
                        lg: (0, s.iv)(I(), n.$gap),
                        sm: (0, s.iv)(L()),
                        xs: (0, s.iv)(O())
                    })
                })),
                _ = (0, s.ZP)(x.v.Item).withConfig({
                    componentId: "sc-ec8f13a5-3"
                })(E(), (function(n) {
                    return n.$padding || "0px 0px 10px 0px"
                })),
                z = (0, s.ZP)(p.k).withConfig({
                    componentId: "sc-ec8f13a5-4"
                })(A()),
                N = function(n) {
                    var t = n.label,
                        e = n.items,
                        r = n.active,
                        i = n.baseUrl,
                        o = n.labelVariant;
                    return (0, a.jsx)(h.L, {
                        content: function(n) {
                            var t = n.List,
                                r = n.Item,
                                o = n.close;
                            return (0, a.jsx)(t, {
                                children: e.map((function(n) {
                                    var t;
                                    return (0, a.jsxs)(r, {
                                        href: "".concat(i).concat(null !== (t = n.path) && void 0 !== t ? t : k.Z.getMergedQueryString({
                                            tab: n.id
                                        })),
                                        scroll: !1,
                                        onClick: o,
                                        children: [(0, a.jsx)(r.Content, {
                                            children: n.label
                                        }), (0, a.jsx)(r.Action, {
                                            children: !!n.count && (0, C.nZ)(n.count)
                                        })]
                                    }, n.id)
                                }))
                            })
                        },
                        maxHeight: "358px",
                        popperOptions: {
                            modifiers: [{
                                name: "flip",
                                enabled: !1
                            }]
                        },
                        children: (0, a.jsxs)(_, {
                            active: r,
                            "data-testid": "profile-nav-more",
                            direction: "horizontal",
                            children: ["large" === o ? (0, a.jsx)(Q, {
                                children: t
                            }) : (0, a.jsx)(q, {
                                children: t
                            }), (0, a.jsx)(x.v.Side, {
                                children: (0, a.jsx)(d.J, {
                                    color: r ? void 0 : "gray",
                                    fontWeight: "600",
                                    value: "expand_more"
                                })
                            })]
                        })
                    })
                },
                D = function(n) {
                    var t = n.label,
                        e = n.renderLabel,
                        r = n.count,
                        i = n.id,
                        o = n.active,
                        c = n.handleClick,
                        l = n.baseUrl,
                        s = n.path,
                        d = n.labelVariant,
                        f = n.tabItemPadding,
                        h = n.useUpdatedTabLabels,
                        p = (0, u.Z)("(min-width: ".concat(v.AV.xxl, "px)"), !1),
                        x = h ? (0, a.jsx)($, {
                            size: p ? "large" : "medium",
                            children: t
                        }) : (0, a.jsx)(Q, {
                            children: t
                        }),
                        g = h ? (0, a.jsx)($, {
                            size: "small",
                            children: t
                        }) : (0, a.jsx)(q, {
                            children: t
                        });
                    return (0, a.jsxs)(_, {
                        $padding: f,
                        active: o,
                        direction: "horizontal",
                        href: "".concat(l).concat(null !== s && void 0 !== s ? s : k.Z.getMergedQueryString({
                            tab: i
                        })),
                        scroll: !1,
                        onClick: function() {
                            c && c(i)
                        },
                        children: [e ? e({
                            label: t
                        }) : "large" === d ? x : g, !!r && (0, a.jsx)(R, {
                            active: o,
                            marginLeft: "8px",
                            children: (0, C.nZ)(r)
                        })]
                    })
                },
                R = (0, s.ZP)(x.v.Side).attrs({
                    as: "span"
                }).withConfig({
                    componentId: "sc-ec8f13a5-5"
                })(T(), (function(n) {
                    return n.active ? n.theme.colors.text.heading : n.theme.colors.text.subtle
                })),
                q = (0, s.ZP)(x.v.Title).withConfig({
                    componentId: "sc-ec8f13a5-6"
                })(S()),
                Q = (0, s.ZP)(x.v.Title).attrs({
                    variant: "small-h2"
                }).withConfig({
                    componentId: "sc-ec8f13a5-7"
                })(U()),
                $ = (0, s.ZP)(b.xv.Heading).withConfig({
                    componentId: "sc-ec8f13a5-8"
                })(M())
        },
        92941: function(n, t, e) {
            e.d(t, {
                V: function() {
                    return d
                },
                J: function() {
                    return f
                }
            });
            var r = e(19989),
                i = e(24246),
                o = (e(27378), e(47892)),
                c = e(83989),
                a = e(72363),
                l = e(10485),
                u = e(77795);

            function s() {
                var n = (0, r.Z)(["\n  position: sticky;\n  width: ", "px;\n  flex-shrink: 0;\n  top: ", ";\n  height: calc(100vh - ", ");\n  z-index: ", ";\n  background-color: ", ";\n  filter: drop-shadow(", ");\n"]);
                return s = function() {
                    return n
                }, n
            }
            var d = e(39370).SHOPPING_CART_WIDTH + 32,
                f = function() {
                    return (0, i.jsx)(a.pU, {
                        greaterThanOrEqual: "lg",
                        children: function(n, t) {
                            return t && (0, i.jsx)(h, {})
                        }
                    })
                },
                h = (0, o.ZP)(c.t).withConfig({
                    componentId: "sc-ed9276ee-0"
                })(s(), d, l.y, l.y, u.k.DRAWER, (function(n) {
                    return n.theme.colors.background
                }), (function(n) {
                    return n.theme.shadows.button
                }))
        },
        24071: function(n, t, e) {
            e.d(t, {
                gM: function() {
                    return o
                },
                wd: function() {
                    return i
                },
                yb: function() {
                    return c
                }
            });
            var r = e(60387),
                i = (0, r.V6)("add to watchlist"),
                o = (0, r.V6)("remove from watchlist"),
                c = (0, r.V6)("unauthenticated add to watchlist click")
        }
    }
]);
//# sourceMappingURL=5371-bd0dc68af4a1ea05.js.map