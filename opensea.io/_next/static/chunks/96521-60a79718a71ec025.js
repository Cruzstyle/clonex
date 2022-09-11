"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [96521], {
        53210: function(n, e, t) {
            t.d(e, {
                Z: function() {
                    return u
                }
            });
            var i = t(24246),
                r = (t(27378), t(48257)),
                o = t(20225),
                a = t(96150),
                l = t(81399),
                c = t(72363),
                s = t(76190),
                d = t(43424),
                h = t(6300);

            function u(n) {
                var e = n.onToggle,
                    t = n.numFiltersApplied,
                    u = void 0 === t ? 0 : t,
                    g = (0, h.q)("phoenix"),
                    x = (0, d.u)(),
                    f = x.toggleSidebar,
                    m = x.sidebarOpen,
                    p = x.isMobileFilterDrawerOpen,
                    j = x.setIsMobileFilterDrawerOpen,
                    v = (0, o.Fg)().theme,
                    b = function(n) {
                        n.preventDefault(), j(!p), null === e || void 0 === e || e()
                    },
                    k = (0, i.jsx)(r.J, {
                        color: "light" === v ? "charcoal" : "white",
                        fontWeight: "600",
                        value: "filter_list",
                        variant: "outlined"
                    });
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(c.pU, {
                        lessThan: "lg",
                        children: function(n, e) {
                            return e ? (0, i.jsx)(s.t, {
                                "aria-label": p ? g("search.toggles.close", "Close") : g("search.toggles.open", "Open"),
                                className: n,
                                "data-testid": "filter-toggle",
                                startEnhancer: (0, i.jsx)(a.k, {
                                    marginRight: "8px",
                                    children: k
                                }),
                                whiteSpace: "nowrap",
                                width: "100%",
                                onClick: b,
                                children: "".concat(g("search.filters", "Filters")).concat(u ? " ".concat(u) : "")
                            }) : null
                        }
                    }), (0, i.jsx)(c.pU, {
                        greaterThanOrEqual: "lg",
                        children: (0, i.jsx)(l.h, {
                            "aria-label": m ? g("search.toggles.close", "Close") : g("search.toggles.open", "Open"),
                            "data-testid": "filter-toggle",
                            onClick: function(n) {
                                n.preventDefault(), f(!m), null === e || void 0 === e || e()
                            },
                            children: k
                        })
                    })]
                })
            }
        },
        6222: function(n, e, t) {
            t.d(e, {
                I: function() {
                    return X
                }
            });
            var i = t(19989),
                r = t(24246),
                o = t(27378),
                a = t(74387),
                l = t(47892),
                c = t(23842),
                s = t(52050),
                d = t(35230),
                h = t.n(d),
                u = t(4402),
                g = t(1569),
                x = t(66843),
                f = t(53585),
                m = t(18579),
                p = t(96150),
                j = t(81399),
                v = t(44668),
                b = t(65175),
                k = t(33950),
                C = t(87481),
                w = t(47748),
                I = t(79790),
                y = t(24071),
                T = (t(59809), t(87821)),
                Z = function(n) {
                    var e, i = n.data,
                        a = n.slug,
                        l = n.variant,
                        d = void 0 === l ? "button" : l,
                        Z = (0, u.useFragment)(t(32177), i),
                        W = (0, m.Fg)().theme,
                        F = (0, k.P)(),
                        B = (0, o.useState)(!1),
                        O = B[0],
                        A = B[1],
                        E = (0, s.Z)((0, w.i)(t(81214), {
                            collection: a
                        }), 1)[0];
                    (0, o.useEffect)((function() {
                        var n;
                        A(!!(null === E || void 0 === E || null === (n = E.collection) || void 0 === n ? void 0 : n.isWatching))
                    }), [null === E || void 0 === E || null === (e = E.collection) || void 0 === e ? void 0 : e.isWatching]);
                    var S = (0, C.b)(),
                        U = S.wallet,
                        D = S.mutate,
                        P = S.updateContext,
                        R = (0, I.e)(),
                        L = R.attempt,
                        _ = R.showSuccessMessage,
                        V = U.getActiveAccountKey(),
                        z = O ? "Watching" : "Add to watchlist",
                        q = function() {
                            var n = (0, c.Z)(h().mark((function n() {
                                return h().wrap((function(n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            if (V) {
                                                n.next = 4;
                                                break
                                            }
                                            return (0, y.yb)({
                                                collectionSlug: a
                                            }), P({
                                                isWalletSidebarOpen: !0
                                            }), n.abrupt("return");
                                        case 4:
                                            return n.next = 6, L((0, c.Z)(h().mark((function n() {
                                                var e;
                                                return h().wrap((function(n) {
                                                    for (;;) switch (n.prev = n.next) {
                                                        case 0:
                                                            return n.next = 3, D(t(57556), {
                                                                collectionId: null !== (e = null === Z || void 0 === Z ? void 0 : Z.relayId) && void 0 !== e ? e : "",
                                                                isWatching: !O
                                                            }, {
                                                                shouldAuthenticate: !0,
                                                                updater: function(n) {
                                                                    if (null === Z || void 0 === Z ? void 0 : Z.relayId) {
                                                                        var e = n.get(Z.relayId);
                                                                        e && e.setValue(!O, "isWatching")
                                                                    }
                                                                }
                                                            });
                                                        case 3:
                                                            n.sent.collections.updateWatchlist && (O ? (0, y.gM)({
                                                                collectionSlug: a
                                                            }) : (0, y.wd)({
                                                                collectionSlug: a
                                                            }), _((0, r.jsxs)(p.k, {
                                                                children: ["".concat(O ? "Removed from" : "Added to", " watchlist."), (0, r.jsx)(f.g, {
                                                                    marginLeft: "8px",
                                                                    children: (0, r.jsx)(g.r, {
                                                                        href: F,
                                                                        children: "View"
                                                                    })
                                                                })]
                                                            })), A(!O));
                                                        case 5:
                                                        case "end":
                                                            return n.stop()
                                                    }
                                                }), n)
                                            }))));
                                        case 6:
                                        case "end":
                                            return n.stop()
                                    }
                                }), n)
                            })));
                            return function() {
                                return n.apply(this, arguments)
                            }
                        }(),
                        M = "light" === W ? T.r7.charcoal : T.r7.fog;
                    return "option" === d ? (0, r.jsxs)(v.ck, {
                        onClick: q,
                        children: [(0, r.jsx)(p.k, {
                            marginRight: 16,
                            children: (0, r.jsx)(x.r, {
                                active: O,
                                color: M,
                                height: 24,
                                width: 24
                            })
                        }), (0, r.jsx)(v.ck.Content, {
                            children: (0, r.jsx)(v.ck.Title, {
                                children: z
                            })
                        })]
                    }) : (0, r.jsx)(b.u, {
                        content: O ? "Watching" : "Add to watchlist",
                        hideOnClick: !0,
                        children: (0, r.jsx)(j.h, {
                            "aria-label": O ? "Watching" : "Add to watchlist",
                            "data-testid": "phoenix-watchlist-button",
                            height: "60px",
                            padding: "0 24px 0 20px",
                            onClick: q,
                            children: (0, r.jsx)(x.r, {
                                active: O,
                                color: M,
                                height: 20,
                                width: 20
                            })
                        })
                    })
                },
                W = t(48257),
                F = t(71141),
                B = t(13291),
                O = t(33181),
                A = t(77795),
                E = t(377),
                S = t(20225),
                U = t(18616),
                D = t(72363),
                P = t(90635),
                R = t(67882),
                L = t(87916),
                _ = t(21697),
                V = t(6300),
                z = t(2082),
                q = t(40869),
                M = t(58241),
                K = t(10412),
                $ = t(23176),
                N = t(89824);

            function J() {
                var n = (0, i.Z)(["\n  font-size: 12px;\n  color: ", ";\n"]);
                return J = function() {
                    return n
                }, n
            }

            function H() {
                var n = (0, i.Z)(["\n  margin-right: 0px;\n  font-weight: 600;\n"]);
                return H = function() {
                    return n
                }, n
            }

            function Q() {
                var n = (0, i.Z)(["\n  margin-right: 0px;\n  font-weight: 600;\n"]);
                return Q = function() {
                    return n
                }, n
            }
            var X = function(n) {
                    var e = n.collectionWatchlistDataKey,
                        t = n.collectionUrlDataKey,
                        i = n.socialData,
                        o = n.shareData,
                        l = n.toggleMoreDropdown,
                        c = n.slug,
                        s = n.relayId,
                        d = n.variant,
                        h = n.address,
                        u = n.ens,
                        g = n.isEditable,
                        x = n.isMintable,
                        m = n.isCurrentUser,
                        k = (0, V.q)("phoenix"),
                        w = (0, _.W)(),
                        I = w.isOpen,
                        y = w.close,
                        T = w.open,
                        W = (0, S.Fg)().theme,
                        J = (0, C.b)().isStaff,
                        H = (0, a.Z)("(min-width: ".concat(D.AV.lg, "px)"), !0),
                        Q = (0, a.Z)("(min-width: ".concat(D.AV.md, "px)"), !0),
                        X = "light" === W ? "oil" : "fog",
                        en = (0, K.g1)(h);
                    return (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsxs)(p.k, {
                            marginTop: {
                                _: "16px",
                                sm: "0px"
                            },
                            position: "relative",
                            zIndex: A.k.PHOENIX_HEADER,
                            children: [(0, r.jsxs)(p.k, {
                                alignItems: "center",
                                children: [(0, r.jsx)(D.pU, {
                                    greaterThan: "md",
                                    children: e && "collection" === d && (0, r.jsx)(f.g, {
                                        marginRight: "4px",
                                        children: (0, r.jsx)(Z, {
                                            data: e,
                                            slug: c
                                        })
                                    })
                                }), (o || t) && (0, r.jsx)(F.m, {
                                    object: o ? "account" : "collection",
                                    url: o ? (0, z.F)(o) : t ? (0, $.vg)(t) : "",
                                    children: (0, r.jsx)(b.u, {
                                        content: "Share",
                                        hideOnClick: !0,
                                        touch: !1,
                                        children: (0, r.jsx)(f.g, {
                                            marginRight: "4px",
                                            children: (0, r.jsx)(j.h, {
                                                "aria-label": k("actionBar.share", "Share"),
                                                children: (0, r.jsx)(nn, {
                                                    value: "share"
                                                })
                                            })
                                        })
                                    })
                                })]
                            }), (0, r.jsx)(U.L, {
                                appendTo: O.W6 ? void 0 : document.body,
                                content: function(n) {
                                    var o = n.List,
                                        a = n.Item,
                                        l = n.close;
                                    return (0, r.jsxs)(o, {
                                        children: [!Q && h && (0, r.jsxs)(r.Fragment, {
                                            children: [(0, r.jsx)(a, {
                                                children: (0, r.jsx)(Y, {
                                                    children: k("actionBar.addressesHeader", "ADDRESSES")
                                                })
                                            }), u && (0, r.jsx)(a, {
                                                children: (0, r.jsx)(a.Content, {
                                                    style: {
                                                        marginRight: 0
                                                    },
                                                    children: (0, r.jsx)(N.e, {
                                                        ItemComponent: a,
                                                        chainIdentifier: "ETHEREUM",
                                                        fontSize: "14px",
                                                        text: u
                                                    })
                                                })
                                            }), (0, r.jsx)(a, {
                                                children: (0, r.jsx)(a.Content, {
                                                    style: {
                                                        marginRight: 0
                                                    },
                                                    children: (0, r.jsx)(N.e, {
                                                        ItemComponent: a,
                                                        chainIdentifier: en,
                                                        fontSize: "14px",
                                                        label: (0, q.FP)(h),
                                                        text: h
                                                    })
                                                })
                                            })]
                                        }), !H && (0, r.jsxs)(r.Fragment, {
                                            children: [i.length > 0 && (0, r.jsx)(a, {
                                                children: (0, r.jsx)(Y, {
                                                    children: k("actionBar.links", "LINKS")
                                                })
                                            }), i.map((function(n) {
                                                var e = n.url,
                                                    t = n.icon,
                                                    i = n.tooltip;
                                                return (0, r.jsxs)(a, {
                                                    href: null !== e && void 0 !== e ? e : void 0,
                                                    children: [(0, r.jsx)(v.V1, {
                                                        color: X,
                                                        children: t
                                                    }), (0, r.jsx)(a.Content, {
                                                        children: (0, r.jsx)(a.Title, {
                                                            children: i
                                                        })
                                                    })]
                                                }, e)
                                            })), (0, r.jsx)(a, {
                                                children: (0, r.jsx)(Y, {
                                                    children: k("actionBar.more", "MORE")
                                                })
                                            })]
                                        }), "profile" === d && m && (0, r.jsxs)(r.Fragment, {
                                            children: [(0, r.jsxs)(a, {
                                                href: "/account/settings",
                                                children: [(0, r.jsx)(a.Avatar, {
                                                    color: X,
                                                    icon: "settings"
                                                }), (0, r.jsx)(a.Content, {
                                                    children: (0, r.jsx)(a.Title, {
                                                        children: k("actionBar.settings", "Settings")
                                                    })
                                                })]
                                            }), (0, r.jsx)(D.pU, {
                                                greaterThanOrEqual: "lg",
                                                children: (0, r.jsx)(a, {
                                                    href: "/account/settings?tab=featured",
                                                    children: (0, r.jsx)(a.Content, {
                                                        children: (0, r.jsxs)(p.k, {
                                                            children: [(0, r.jsx)(p.k, {
                                                                marginRight: "16px",
                                                                children: (0, r.jsx)(B.$, {})
                                                            }), (0, r.jsx)(E._, {
                                                                children: (0, r.jsx)(a.Title, {
                                                                    children: k("actionBar.featuredItems", "Featured items")
                                                                })
                                                            })]
                                                        })
                                                    })
                                                })
                                            })]
                                        }), g && t && (0, r.jsxs)(r.Fragment, {
                                            children: [(0, r.jsxs)(a, {
                                                href: (0, $.JJ)(t),
                                                children: [(0, r.jsx)(a.Avatar, {
                                                    color: X,
                                                    icon: "edit"
                                                }), (0, r.jsx)(a.Content, {
                                                    children: (0, r.jsx)(a.Title, {
                                                        children: k("actionBar.edit", "Edit")
                                                    })
                                                })]
                                            }), (0, r.jsxs)(a, {
                                                href: (0, $.dq)(t),
                                                children: [(0, r.jsx)(a.Avatar, {
                                                    color: X,
                                                    icon: "attach_money"
                                                }), (0, r.jsx)(a.Content, {
                                                    children: (0, r.jsx)(a.Title, {
                                                        children: k("actionBar.creatorEarnings", "Creator earnings")
                                                    })
                                                })]
                                            }), (0, r.jsx)(b.u, {
                                                content: k("actionBar.notCreatedOnOS", "Your collection was not created on OpenSea"),
                                                disabled: x,
                                                children: (0, r.jsxs)(a, {
                                                    disabled: !x,
                                                    href: (0, $.u6)(t),
                                                    children: [(0, r.jsx)(a.Avatar, {
                                                        color: X,
                                                        icon: "add"
                                                    }), (0, r.jsx)(a.Content, {
                                                        children: (0, r.jsx)(a.Title, {
                                                            children: k("actionBar.addItem", "Add item")
                                                        })
                                                    })]
                                                })
                                            })]
                                        }), e && "collection" === d && (0, r.jsx)(D.pU, {
                                            lessThan: "lg",
                                            children: (0, r.jsx)(Z, {
                                                data: e,
                                                slug: c,
                                                variant: "option"
                                            })
                                        }), (0, r.jsxs)(a, {
                                            onClick: function() {
                                                T(), l()
                                            },
                                            children: [(0, r.jsx)(a.Avatar, {
                                                color: X,
                                                icon: "flag"
                                            }), (0, r.jsx)(a.Content, {
                                                children: (0, r.jsx)(a.Title, {
                                                    children: k("actionBar.report", "Report")
                                                })
                                            })]
                                        }), "collection" === d && J && (0, r.jsxs)(r.Fragment, {
                                            children: [(0, r.jsx)(P.B, {
                                                collectionId: s,
                                                tooltip: !1,
                                                children: function(n) {
                                                    return (0, r.jsxs)(a, {
                                                        onClick: n,
                                                        children: [(0, r.jsx)(a.Avatar, {
                                                            color: X,
                                                            icon: "refresh"
                                                        }), (0, r.jsx)(a.Content, {
                                                            children: (0, r.jsx)(a.Title, {
                                                                children: k("actionBar.refreshStats", "Refresh stats")
                                                            })
                                                        })]
                                                    })
                                                }
                                            }), (0, r.jsxs)(a, {
                                                href: (0, M.k4)(s),
                                                children: [(0, r.jsx)(a.Avatar, {
                                                    color: X,
                                                    icon: "vpn_key"
                                                }), (0, r.jsx)(a.Content, {
                                                    children: (0, r.jsx)(a.Title, {
                                                        children: k("actionBar.djangoAdmin", "Django Admin")
                                                    })
                                                })]
                                            })]
                                        }), "profile" === d && J && (0, r.jsxs)(a, {
                                            href: (0, M.i5)(s),
                                            children: [(0, r.jsx)(a.Avatar, {
                                                color: X,
                                                icon: "vpn_key"
                                            }), (0, r.jsx)(a.Content, {
                                                children: (0, r.jsx)(a.Title, {
                                                    children: k("actionBar.djangoAdmin", "Django Admin")
                                                })
                                            })]
                                        })]
                                    })
                                },
                                placement: "bottom-end",
                                children: (0, r.jsx)(p.k, {
                                    alignItems: "center",
                                    children: (0, r.jsx)(j.h, {
                                        "aria-label": k("actionBar.moreDropdownLabel", "More dropdown"),
                                        onClick: l,
                                        children: (0, r.jsx)(G, {
                                            value: "more_horiz"
                                        })
                                    })
                                })
                            })]
                        }), (0, r.jsx)(R.y, {
                            isOpen: I,
                            subject: "collection" === d ? {
                                collection: s
                            } : {
                                account: s
                            },
                            onClose: y,
                            onSubmit: function(n) {
                                var e = n.additionalComments,
                                    t = n.originalCreatorUrl,
                                    i = n.reason;
                                "collection" === d && (0, L.nq)({
                                    slug: c,
                                    additionalComments: e,
                                    originalCreatorUrl: t,
                                    reason: i
                                }), "profile" === d && (0, L.AW)({
                                    address: h,
                                    additionalComments: e,
                                    originalCreatorUrl: t,
                                    reason: i
                                })
                            }
                        })]
                    })
                },
                Y = (0, l.ZP)(f.g).withConfig({
                    componentId: "sc-c71b7a6a-0"
                })(J(), (function(n) {
                    return "dark" === n.theme.type ? n.theme.colors.gray : n.theme.colors.darkGray
                })),
                G = (0, l.ZP)(W.J).attrs({
                    size: 24,
                    color: "black"
                }).withConfig({
                    componentId: "sc-c71b7a6a-1"
                })(H()),
                nn = (0, l.ZP)(W.J).attrs({
                    size: 20,
                    color: "black",
                    variant: "outlined"
                }).withConfig({
                    componentId: "sc-c71b7a6a-2"
                })(Q())
        },
        89824: function(n, e, t) {
            t.d(e, {
                e: function() {
                    return T
                },
                p: function() {
                    return y
                }
            });
            var i = t(19989),
                r = t(24246),
                o = (t(27378), t(76449)),
                a = t(47892),
                l = t(39972),
                c = t(18893),
                s = t(48257),
                d = t(1569),
                h = t(6135),
                u = t(32969),
                g = t(18616),
                x = t(96150),
                f = t(16611),
                m = t(48599),
                p = t(40869),
                j = t(10412),
                v = t(90761),
                b = t(70884);

            function k() {
                var n = (0, i.Z)(["\n  svg {\n    fill: inherit;\n  }\n"]);
                return k = function() {
                    return n
                }, n
            }

            function C() {
                var n = (0, i.Z)(["\n  color: ", ";\n\n  &:hover {\n    color: ", ";\n  }\n"]);
                return C = function() {
                    return n
                }, n
            }

            function w() {
                var n = (0, i.Z)(["\n  justify-content: center;\n  padding: 4px 8px 4px 0;\n  display: inline-flex;\n  align-items: center;\n  gap: 2px;\n  height: 32px;\n  fill: ", ";\n  border-radius: ", ";\n\n  ", "\n\n  &:hover {\n    ", ";\n    fill: ", ";\n  }\n\n  &:active {\n    ", ";\n    fill: ", ";\n  }\n\n  .PillContainer--eth-icon {\n    ", "\n  }\n"]);
                return w = function() {
                    return n
                }, n
            }

            function I() {
                var n = (0, i.Z)(["\n  width: 100%;\n\n  .CopierContainer--eth-icon {\n    ", "\n  }\n"]);
                return I = function() {
                    return n
                }, n
            }

            function y(n) {
                var e = n.address,
                    t = n.chainIdentifier,
                    i = n.ens,
                    o = n.variant,
                    a = void 0 === o ? "copy" : o,
                    l = n.url,
                    d = null,
                    h = (0, p.DY)(e);
                d = "copy" === a ? (0, r.jsx)(c.g, {
                    address: h
                }) : (0, r.jsxs)(x.k, {
                    alignItems: "center",
                    children: [(0, p.FP)(h), (0, r.jsx)(x.k, {
                        marginLeft: "4px",
                        children: (0, r.jsx)(s.J, {
                            fontWeight: 600,
                            size: 16,
                            value: "call_made",
                            variant: "outlined"
                        })
                    })]
                });
                var f = (0, j.$F)(t) ? (0, r.jsx)(x.k, {
                        marginRight: "4px",
                        children: (0, r.jsx)(u.qE, {
                            className: "PillContainer--eth-icon",
                            size: 16,
                            src: b.Zn
                        })
                    }) : (0, r.jsx)(Z, {
                        chain: t
                    }),
                    v = function(n) {
                        var e = n.value,
                            t = n.withBorder,
                            i = void 0 === t || t;
                        return (0, r.jsxs)(F, {
                            as: "div",
                            pillVariant: a,
                            variant: "body-dark",
                            withBorder: !!i,
                            children: [f, e]
                        })
                    };
                return i ? (0, r.jsx)(g.L, {
                    content: function(n) {
                        var e = n.List,
                            o = n.Item;
                        return (0, r.jsxs)(e, {
                            children: [(0, r.jsx)(o, {
                                children: (0, r.jsx)(T, {
                                    ItemComponent: o,
                                    chainIdentifier: t,
                                    text: i
                                })
                            }), (0, r.jsx)(o, {
                                children: (0, r.jsx)(T, {
                                    ItemComponent: o,
                                    chainIdentifier: t,
                                    label: (0, p.FP)(h),
                                    text: h
                                })
                            })]
                        })
                    },
                    children: (0, r.jsx)(W, {
                        href: l,
                        target: "_blank",
                        children: (0, r.jsx)(m.k, {
                            children: (0, r.jsx)(v, {
                                value: (0, r.jsxs)(r.Fragment, {
                                    children: [i, (0, r.jsx)(x.k, {
                                        children: (0, r.jsx)(s.J, {
                                            fontWeight: 600,
                                            size: 16,
                                            value: "expand_more",
                                            variant: "outlined"
                                        })
                                    })]
                                })
                            })
                        })
                    })
                }) : (0, r.jsx)(W, {
                    href: l,
                    target: "_blank",
                    children: (0, r.jsx)(v, {
                        value: d
                    })
                })
            }
            var T = function(n) {
                    var e = n.text,
                        t = n.chainIdentifier,
                        i = n.fontSize,
                        o = n.label,
                        a = n.ItemComponent;
                    return (0, r.jsxs)(B, {
                        text: e,
                        children: [(0, r.jsx)(a.Content, {
                            children: (0, r.jsxs)(x.k, {
                                alignItems: "center",
                                children: ["ETHEREUM" === t ? (0, r.jsx)(u.qE, {
                                    className: "CopierContainer--eth-icon",
                                    size: 20,
                                    src: b.Zn
                                }) : (0, r.jsx)(Z, {
                                    chain: t
                                }), (0, r.jsx)(x.k, {
                                    fontSize: i,
                                    marginLeft: "12px",
                                    children: o || e
                                })]
                            })
                        }), (0, r.jsx)(a.Action, {
                            children: (0, r.jsx)(s.J, {
                                fontWeight: 600,
                                marginLeft: "auto",
                                size: 16,
                                value: "content_copy"
                            })
                        })]
                    })
                },
                Z = (0, a.ZP)(l.E).withConfig({
                    componentId: "sc-5d9c65f1-0"
                })(k()),
                W = (0, a.ZP)(d.r).withConfig({
                    componentId: "sc-5d9c65f1-1"
                })(C(), (function(n) {
                    return n.theme.colors.text.subtle
                }), (function(n) {
                    return n.theme.colors.text.body
                })),
                F = (0, a.ZP)(f.WX).withConfig({
                    componentId: "sc-5d9c65f1-2"
                })(w(), (function(n) {
                    return n.theme.colors.text.heading
                }), (function(n) {
                    return n.theme.borderRadius.default
                }), (function(n) {
                    return "link" === n.pillVariant ? (0, v.Um)({
                        variants: {
                            light: {
                                backgroundColor: n.theme.colors.fog
                            },
                            dark: {
                                backgroundColor: n.theme.colors.oil
                            }
                        }
                    }) : (0, v.Um)({
                        variants: {
                            light: {
                                color: n.theme.colors.oil
                            },
                            dark: {
                                color: n.theme.colors.fog
                            }
                        }
                    })
                }), (function(n) {
                    return (0, v.Um)({
                        variants: {
                            dark: {
                                color: (0, o.m4)(n.theme.colors.fog, .8)
                            },
                            light: {
                                color: (0, o.m4)(n.theme.colors.oil, .8)
                            }
                        }
                    })
                }), (function(n) {
                    return (0, o.m4)(n.theme.colors.text.heading, .8)
                }), (function(n) {
                    return (0, v.Um)({
                        variants: {
                            dark: {
                                color: (0, o.m4)(n.theme.colors.fog, .6)
                            },
                            light: {
                                color: (0, o.m4)(n.theme.colors.oil, .6)
                            }
                        }
                    })
                }), (function(n) {
                    return (0, o.m4)(n.theme.colors.text.heading, .6)
                }), (0, v.Um)({
                    variants: {
                        dark: {
                            filter: "brightness(3)"
                        }
                    }
                })),
                B = (0, a.ZP)(h.m).withConfig({
                    componentId: "sc-5d9c65f1-3"
                })(I(), (0, v.Um)({
                    variants: {
                        dark: {
                            filter: "brightness(3)"
                        }
                    }
                }))
        },
        55815: function(n, e, t) {
            t.d(e, {
                M: function() {
                    return m
                }
            });
            var i = t(19989),
                r = t(24246),
                o = (t(27378), t(74387)),
                a = t(47892),
                l = t(81480),
                c = t(7740),
                s = t(53585),
                d = t(38996),
                h = t(96150),
                u = t(72363),
                g = t(28828);

            function x() {
                var n = (0, i.Z)(["\n  gap: 8px;\n"]);
                return x = function() {
                    return n
                }, n
            }

            function f() {
                var n = (0, i.Z)(["\n  height: 100%;\n"]);
                return f = function() {
                    return n
                }, n
            }

            function m(n) {
                var e = n.assetCardVariantToggle,
                    t = n.collectionOfferButton,
                    i = n.filterToggle,
                    a = n.sortDropdown,
                    x = n.search,
                    f = !(0, o.Z)((0, l.ip)(u.AV.lg), !1) ? (0, r.jsx)(u.pU, {
                        lessThan: "lg",
                        children: (0, r.jsxs)(h.k, {
                            alignItems: "center",
                            flexDirection: "column",
                            width: "100%",
                            children: [x && (0, r.jsx)(h.k, {
                                marginBottom: "8px",
                                width: "100%",
                                children: x
                            }), (0, r.jsxs)(p, {
                                alignItems: "center",
                                width: "100%",
                                children: [i && (0, r.jsx)(h.k, {
                                    width: a ? "50%" : "100%",
                                    children: i
                                }), a && (0, r.jsx)(h.k, {
                                    width: "50%",
                                    children: a
                                })]
                            }), t && (0, r.jsx)(s.g, {
                                marginTop: "8px",
                                width: "100%",
                                children: t
                            })]
                        })
                    }) : (0, r.jsx)(j, {
                        greaterThanOrEqual: "lg",
                        children: (0, r.jsx)(d.W, {
                            alignItems: "center",
                            display: "flex",
                            height: "100%",
                            children: (0, r.jsxs)(h.k, {
                                alignItems: "center",
                                width: "100%",
                                children: [(0, r.jsx)(h.k, {
                                    alignItems: "center",
                                    children: i
                                }), x && (0, r.jsx)(s.g, {
                                    marginX: "12px",
                                    width: "100%",
                                    children: x
                                }), a && (0, r.jsx)(s.g, {
                                    flexShrink: {
                                        _: 0
                                    },
                                    marginLeft: "auto",
                                    width: "240px",
                                    children: a
                                }), e && (0, r.jsx)(s.g, {
                                    marginLeft: "12px",
                                    children: e
                                }), t && (0, r.jsx)(s.g, {
                                    marginLeft: "12px",
                                    children: t
                                })]
                            })
                        })
                    });
                return (0, r.jsx)(c.P, {
                    elementId: g.jh,
                    height: g.C8,
                    children: f
                })
            }
            var p = (0, a.ZP)(h.k).withConfig({
                    componentId: "sc-11558d97-0"
                })(x()),
                j = (0, a.ZP)(u.pU).withConfig({
                    componentId: "sc-11558d97-1"
                })(f())
        },
        41326: function(n, e, t) {
            t.d(e, {
                A: function() {
                    return v
                }
            });
            var i = t(19989),
                r = t(24246),
                o = (t(27378), t(47892)),
                a = t(48028),
                l = t(66791),
                c = t(23018),
                s = t(53585),
                d = t(96150),
                h = t(16611),
                u = t(72363),
                g = t(19378),
                x = t(72686),
                f = t(48599),
                m = t(47366);

            function p() {
                var n = (0, i.Z)(["\n  display: inline-flex;\n  vertical-align: middle;\n"]);
                return p = function() {
                    return n
                }, n
            }

            function j() {
                var n = (0, i.Z)(["\n  gap: 4px;\n  word-break: break-word;\n"]);
                return j = function() {
                    return n
                }, n
            }

            function v(n) {
                var e = n.isLoading,
                    t = n.headerText,
                    i = n.verificationStatus,
                    o = n.accountConfig,
                    l = n.isAccountCompromised;
                if (e) return (0, r.jsxs)(x.O.Row, {
                    children: [(0, r.jsx)(u.pU, {
                        greaterThanOrEqual: "sm",
                        children: (0, r.jsx)(x.O.Line, {
                            height: "56px",
                            width: "500px"
                        })
                    }), (0, r.jsx)(u.pU, {
                        lessThan: "sm",
                        children: (0, r.jsx)(d.k, {
                            marginTop: "8px",
                            children: (0, r.jsx)(x.O.Line, {
                                height: "34px",
                                width: "200px"
                            })
                        })
                    })]
                });
                var p = (!!o || void 0 !== l) && (0, r.jsx)(b, {
                    config: o,
                    isCompromised: !!l,
                    variant: "medium"
                });
                return p || (p = !!i && (0, m.R)(i) && (0, r.jsx)(g.u_, {
                    trigger: function(n) {
                        return (0, r.jsx)(s.g, {
                            display: "inline-flex",
                            marginBottom: "4px",
                            verticalAlign: "middle",
                            children: (0, r.jsx)(f.k, {
                                onClick: n,
                                children: (0, r.jsx)(a.o, {
                                    size: "medium",
                                    verificationStatus: i
                                })
                            })
                        })
                    },
                    children: (0, r.jsx)(c.O, {
                        verificationStatus: i
                    })
                })), (0, r.jsxs)(k, {
                    alignItems: "center",
                    "data-testid": "phoenix-header",
                    children: [(0, r.jsx)(u.pU, {
                        lessThan: "sm",
                        children: (0, r.jsxs)(h.WX, {
                            as: "h1",
                            lineHeight: "1.4",
                            margin: "0",
                            variant: "h3",
                            width: "100%",
                            children: [t, p]
                        })
                    }), (0, r.jsx)(u.pU, {
                        greaterThanOrEqual: "sm",
                        children: (0, r.jsxs)(h.WX, {
                            as: "h1",
                            lineHeight: "1.4",
                            margin: "0",
                            variant: "small-h2",
                            width: "100%",
                            children: [t, p]
                        })
                    })]
                })
            }
            var b = (0, o.ZP)(l.ZP).withConfig({
                    componentId: "sc-5bb7da0c-0"
                })(p()),
                k = (0, o.ZP)(d.k).withConfig({
                    componentId: "sc-5bb7da0c-1"
                })(j())
        },
        21835: function(n, e, t) {
            t.d(e, {
                K: function() {
                    return k
                },
                W: function() {
                    return I
                }
            });
            var i = t(19989),
                r = t(24246),
                o = (t(27378), t(38579)),
                a = t.n(o),
                l = t(47892),
                c = t(81480),
                s = t(53585),
                d = t(45116),
                h = t(72686),
                u = t(48599),
                g = t(20807),
                x = t(28828);

            function f() {
                var n = (0, i.Z)(["\n  border-radius: ", ";\n"]);
                return f = function() {
                    return n
                }, n
            }

            function m() {
                var n = (0, i.Z)(["\n  border-radius: ", ";\n  width: 100%;\n  height: 100%;\n"]);
                return m = function() {
                    return n
                }, n
            }

            function p() {
                var n = (0, i.Z)(["\n      width: 120px;\n      height: 120px;\n      flex-basis: 120px;\n    "]);
                return p = function() {
                    return n
                }, n
            }

            function j() {
                var n = (0, i.Z)(["\n      width: 180px;\n      height: 180px;\n      flex-basis: 180px;\n    "]);
                return j = function() {
                    return n
                }, n
            }

            function v() {
                var n = (0, i.Z)(["\n      border: 6px solid ", ";\n    "]);
                return v = function() {
                    return n
                }, n
            }

            function b() {
                var n = (0, i.Z)(["\n  width: 90px;\n  height: 90px;\n  flex-basis: 90px;\n\n  ", "\n\n  // TODO(@auster-eth): Handle dark theme box-shadow\n  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.08);\n  border: 4px solid ", ";\n  ", "\n  border-radius: ", ";\n  position: relative;\n  z-index: 1;\n  background: ", ";\n"]);
                return b = function() {
                    return n
                }, n
            }

            function k(n) {
                var e = n.imageUrl,
                    t = n.variant,
                    i = n.altText;
                return e ? (0, r.jsx)(d.e, {
                    trigger: function(n) {
                        return (0, r.jsx)(I, {
                            $imageVariant: t,
                            display: "inline-flex",
                            children: (0, r.jsx)(w, {
                                $imageVariant: t,
                                onClick: n,
                                children: (0, r.jsx)(C, {
                                    $imageVariant: t,
                                    alt: i,
                                    layout: "fill",
                                    objectFit: "cover",
                                    priority: !0,
                                    src: (0, g.tg)(e, {
                                        size: x.eg
                                    }),
                                    unoptimized: !0
                                })
                            })
                        })
                    },
                    children: (0, r.jsx)(s.g, {
                        height: "100%",
                        position: "relative",
                        width: "100%",
                        children: (0, r.jsx)(C, {
                            $imageVariant: t,
                            alt: i,
                            layout: "fill",
                            objectFit: "cover",
                            src: (0, g.tg)(e, {
                                size: 0
                            }),
                            unoptimized: !0
                        })
                    })
                }) : (0, r.jsx)(I, {
                    $imageVariant: t,
                    children: (0, r.jsx)(h.O.Block, {})
                })
            }
            var C = (0, l.ZP)(a()).withConfig({
                    componentId: "sc-61145a04-0"
                })(f(), (function(n) {
                    return "profile" === n.$imageVariant ? n.theme.borderRadius.circle : n.theme.borderRadius.default
                })),
                w = (0, l.ZP)(u.k).withConfig({
                    componentId: "sc-61145a04-1"
                })(m(), (function(n) {
                    return "profile" === n.$imageVariant ? n.theme.borderRadius.circle : "none"
                })),
                I = (0, l.ZP)(s.g).withConfig({
                    componentId: "sc-61145a04-2"
                })(b(), (0, c.FD)({
                    small: (0, l.iv)(p()),
                    large: (0, l.iv)(j())
                }), (function(n) {
                    return n.theme.colors.background
                }), (0, c.FD)({
                    medium: (0, l.iv)(v(), (function(n) {
                        return n.theme.colors.background
                    }))
                }), (function(n) {
                    return "profile" === n.$imageVariant ? n.theme.borderRadius.circle : n.theme.borderRadius.pill
                }), (function(n) {
                    return n.theme.colors.background
                }))
        },
        50301: function(n, e, t) {
            t.d(e, {
                bR: function() {
                    return m
                },
                cb: function() {
                    return x
                },
                fM: function() {
                    return g
                },
                tY: function() {
                    return f
                }
            });
            var i = t(19989),
                r = t(24246),
                o = (t(27378), t(47892)),
                a = t(39283),
                l = t(88747),
                c = t(20807),
                s = t(90761);

            function d() {
                var n = (0, i.Z)(["\n  position: relative;\n  right: 0;\n  left: 0;\n  border-radius: 0;\n"]);
                return d = function() {
                    return n
                }, n
            }

            function h() {
                var n = (0, i.Z)(["\n  position: relative;\n  max-height: 320px;\n  overflow: hidden;\n"]);
                return h = function() {
                    return n
                }, n
            }

            function u() {
                var n = (0, i.Z)(["\n  height: 0;\n  // 1:4 aspect ratio\n  padding-bottom: 25%;\n  position: relative;\n\n  ", "\n"]);
                return u = function() {
                    return n
                }, n
            }
            var g = (0, o.ZP)(a.E).withConfig({
                    componentId: "sc-3a36befb-0"
                })(d()),
                x = o.ZP.div.withConfig({
                    componentId: "sc-3a36befb-1"
                })(h()),
                f = o.ZP.div.withConfig({
                    componentId: "sc-3a36befb-2"
                })(u(), (function(n) {
                    return (0, s.Um)({
                        variants: {
                            light: {
                                backgroundColor: "#E5E8EB50"
                            },
                            dark: {
                                backgroundColor: n.theme.colors.onyx
                            }
                        }
                    })
                }));

            function m(n) {
                var e = n.bannerImageUrl,
                    t = n.altText,
                    i = (0, c.xJ)({
                        height: 300
                    }),
                    o = (0, l.P5)("is_seadn_enabled"),
                    a = e ? (0, c.tg)((0, c.GS)(e) || "", {
                        height: 600
                    }) : "",
                    s = e ? (0, r.jsx)(g, {
                        alt: t,
                        layout: "fill",
                        objectFit: "cover",
                        priority: !0,
                        src: o ? (0, c.Dc)(a, i) : a,
                        unoptimized: !0
                    }) : null;
                return (0, r.jsx)(x, {
                    children: (0, r.jsx)(f, {
                        children: s
                    })
                })
            }
        },
        83921: function(n, e, t) {
            t.d(e, {
                P: function() {
                    return u
                }
            });
            var i = t(19989),
                r = t(24246),
                o = (t(27378), t(47892)),
                a = t(53585),
                l = t(38996),
                c = t(96150),
                s = t(72363);

            function d() {
                var n = (0, i.Z)(["\n  background: ", ";\n  width: 100%;\n"]);
                return d = function() {
                    return n
                }, n
            }

            function h() {
                var n = (0, i.Z)(["\n  gap: 4px;\n"]);
                return h = function() {
                    return n
                }, n
            }

            function u(n) {
                var e = n.image,
                    t = n.header,
                    i = n.subheader,
                    o = n.socialBar,
                    d = n.content,
                    h = n.banner,
                    u = n.info,
                    f = n.tabs,
                    m = n.actionBar;
                return (0, r.jsxs)(c.k, {
                    flexDirection: "column",
                    width: "100%",
                    children: [h, (0, r.jsx)(l.W, {
                        children: (0, r.jsx)(r.Fragment, {
                            children: (0, r.jsxs)(c.k, {
                                alignItems: "center",
                                children: [(0, r.jsx)(a.g, {
                                    marginBottom: "16px",
                                    marginTop: h ? {
                                        _: "-36px",
                                        sm: "-86px",
                                        lg: "-156px"
                                    } : "16px",
                                    children: e
                                }), (0, r.jsx)(a.g, {
                                    marginLeft: "auto",
                                    children: (0, r.jsx)(s.pU, {
                                        lessThan: "sm",
                                        children: (0, r.jsxs)(x, {
                                            alignItems: "center",
                                            children: [o, m]
                                        })
                                    })
                                })]
                            })
                        })
                    }), (0, r.jsx)(g, {
                        children: (0, r.jsx)(l.W, {
                            children: (0, r.jsxs)(c.k, {
                                alignItems: "flex-start",
                                width: "100%",
                                children: [(0, r.jsx)(a.g, {
                                    maxWidth: {
                                        _: "90%",
                                        sm: "80%",
                                        lg: "60%"
                                    },
                                    minWidth: "0px",
                                    children: t
                                }), (0, r.jsx)(a.g, {
                                    marginLeft: "auto",
                                    children: (0, r.jsx)(s.pU, {
                                        greaterThanOrEqual: "sm",
                                        children: (0, r.jsxs)(c.k, {
                                            alignItems: "center",
                                            children: [o, m]
                                        })
                                    })
                                })]
                            })
                        })
                    }), (0, r.jsx)(a.g, {
                        children: i && (0, r.jsx)(l.W, {
                            marginTop: {
                                sm: "-6px"
                            },
                            children: i
                        })
                    }), (0, r.jsx)(l.W, {
                        paddingTop: "0",
                        children: (0, r.jsxs)(a.g, {
                            children: [u && (0, r.jsx)(a.g, {
                                children: u
                            }), f && (0, r.jsx)(a.g, {
                                marginBottom: "24px",
                                marginTop: {
                                    _: "20px",
                                    sm: "32px"
                                },
                                children: f
                            }), d]
                        })
                    })]
                })
            }
            var g = (0, o.ZP)(c.k).withConfig({
                    componentId: "sc-b840b1d0-0"
                })(d(), (function(n) {
                    return n.theme.colors.background
                })),
                x = (0, o.ZP)(c.k).withConfig({
                    componentId: "sc-b840b1d0-1"
                })(h())
        },
        41313: function(n, e, t) {
            t.d(e, {
                B: function() {
                    return x
                }
            });
            var i = t(19989),
                r = t(24246),
                o = (t(27378), t(47892)),
                a = t(1569),
                l = t(53585),
                c = t(96150),
                s = t(81399),
                d = t(72363),
                h = t(65175);

            function u() {
                var n = (0, i.Z)(["\n  gap: 4px;\n"]);
                return u = function() {
                    return n
                }, n
            }

            function g() {
                var n = (0, i.Z)(["\n  margin-left: 10px;\n  margin-right: 10px;\n  height: 24px;\n  width: 1px;\n  background-color: ", ";\n"]);
                return g = function() {
                    return n
                }, n
            }
            var x = function(n) {
                    var e = n.items,
                        t = n.renderIcon,
                        i = n.withDivider,
                        o = void 0 === i || i;
                    return (0, r.jsx)(r.Fragment, {
                        children: (0, r.jsx)(d.pU, {
                            greaterThan: "md",
                            children: (0, r.jsxs)(c.k, {
                                alignItems: "center",
                                children: [(0, r.jsx)(f, {
                                    children: e.map((function(n) {
                                        var e = n.url,
                                            i = n.icon,
                                            o = n.tooltip;
                                        return e && (0, r.jsx)(h.u, {
                                            content: o,
                                            hideOnClick: !0,
                                            children: (0, r.jsx)(a.r, {
                                                href: e,
                                                children: t ? t(i) : (0, r.jsx)(s.h, {
                                                    children: i
                                                })
                                            })
                                        }, e)
                                    }))
                                }), e.length > 0 && o && (0, r.jsx)(m, {})]
                            })
                        })
                    })
                },
                f = (0, o.ZP)(c.k).withConfig({
                    componentId: "sc-35f75ba4-0"
                })(u()),
                m = (0, o.ZP)(l.g).withConfig({
                    componentId: "sc-35f75ba4-1"
                })(g(), (function(n) {
                    return "dark" === n.theme.type ? n.theme.colors.ash : n.theme.colors.fog
                }))
        },
        17645: function(n, e, t) {
            t.d(e, {
                w: function() {
                    return l
                }
            });
            var i = t(24246),
                r = (t(27378), t(96150)),
                o = t(72363),
                a = t(72686);

            function l(n) {
                var e = n.isLoading,
                    t = n.addressPill,
                    l = n.accountLink,
                    c = n.joinedText;
                return e ? (0, i.jsx)(a.O.Row, {
                    children: (0, i.jsxs)(r.k, {
                        marginY: "16px",
                        children: [(0, i.jsx)(o.pU, {
                            greaterThanOrEqual: "sm",
                            children: (0, i.jsx)(a.O.Line, {
                                height: "32px",
                                width: "500px"
                            })
                        }), (0, i.jsx)(o.pU, {
                            lessThan: "sm",
                            children: (0, i.jsx)(a.O.Line, {
                                height: "32px",
                                width: "200px"
                            })
                        })]
                    })
                }) : (0, i.jsxs)(r.k, {
                    flexDirection: "column",
                    children: [(0, i.jsxs)(r.k, {
                        alignItems: "center",
                        children: [l && (0, i.jsx)(r.k, {
                            marginRight: "16px",
                            marginTop: "8px",
                            children: l
                        }), (0, i.jsx)(o.pU, {
                            greaterThanOrEqual: "sm",
                            children: (0, i.jsxs)(r.k, {
                                alignItems: "center",
                                children: [t, c]
                            })
                        })]
                    }), (0, i.jsx)(o.pU, {
                        lessThan: "sm",
                        children: c
                    })]
                })
            }
        },
        81214: function(n, e, t) {
            t.r(e);
            var i = function() {
                var n = [{
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "collection"
                    }],
                    e = [{
                        kind: "Variable",
                        name: "collection",
                        variableName: "collection"
                    }],
                    t = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "isWatching",
                        storageKey: null
                    };
                return {
                    fragment: {
                        argumentDefinitions: n,
                        kind: "Fragment",
                        metadata: null,
                        name: "CollectionWatchlistButtonIsWatchingQuery",
                        selections: [{
                            alias: null,
                            args: e,
                            concreteType: "CollectionType",
                            kind: "LinkedField",
                            name: "collection",
                            plural: !1,
                            selections: [t],
                            storageKey: null
                        }],
                        type: "Query",
                        abstractKey: null
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: n,
                        kind: "Operation",
                        name: "CollectionWatchlistButtonIsWatchingQuery",
                        selections: [{
                            alias: null,
                            args: e,
                            concreteType: "CollectionType",
                            kind: "LinkedField",
                            name: "collection",
                            plural: !1,
                            selections: [t, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "id",
                                storageKey: null
                            }],
                            storageKey: null
                        }]
                    },
                    params: {
                        cacheID: "e8e451b21d0e564c12023a426931cb87",
                        id: null,
                        metadata: {},
                        name: "CollectionWatchlistButtonIsWatchingQuery",
                        operationKind: "query",
                        text: "query CollectionWatchlistButtonIsWatchingQuery(\n  $collection: CollectionSlug!\n) {\n  collection(collection: $collection) {\n    isWatching\n    id\n  }\n}\n"
                    }
                }
            }();
            i.hash = "319f85dfa7d2b3cb2b04cfcf9a99f0d1", e.default = i
        },
        57556: function(n, e, t) {
            t.r(e);
            var i = function() {
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
                        name: "CollectionWatchlistButtonMutation",
                        selections: e,
                        type: "Mutation",
                        abstractKey: null
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: n,
                        kind: "Operation",
                        name: "CollectionWatchlistButtonMutation",
                        selections: e
                    },
                    params: {
                        cacheID: "8a68ae7f1ee93228abb37858e204042b",
                        id: null,
                        metadata: {},
                        name: "CollectionWatchlistButtonMutation",
                        operationKind: "mutation",
                        text: "mutation CollectionWatchlistButtonMutation(\n  $collectionId: CollectionRelayID!\n  $isWatching: Boolean!\n) {\n  collections {\n    updateWatchlist(collection: $collectionId, isWatching: $isWatching)\n  }\n}\n"
                    }
                }
            }();
            i.hash = "b7cf85b46b0a90d583bec5623f3e3c4c", e.default = i
        },
        32177: function(n, e, t) {
            t.r(e);
            var i = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "CollectionWatchlistButton_data",
                selections: [{
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "relayId",
                    storageKey: null
                }],
                type: "CollectionType",
                abstractKey: null,
                hash: "810b6ec3fc033a7027ebb3cf01b80dd7"
            };
            e.default = i
        }
    }
]);
//# sourceMappingURL=96521-60a79718a71ec025.js.map