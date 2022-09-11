"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [60354], {
        82167: function(n, e, l) {
            l.d(e, {
                e: function() {
                    return w
                }
            });
            var a = l(85034),
                i = l(70169),
                t = l(19989),
                s = l(24246),
                r = (l(27378), l(4402)),
                o = l(47892),
                c = l(66791),
                d = l(1569),
                u = l(25459),
                m = l(53585),
                g = l(96150),
                p = l(16611),
                h = l(72363),
                v = l(65175),
                y = l(87481),
                f = (l(59809), l(2082)),
                k = l(40869),
                x = l(11652),
                b = l(66079),
                F = l(33609),
                T = l(90761);

            function j() {
                var n = (0, t.Z)(["\n  &:hover {\n    ", "\n  }\n  &:active {\n    ", "\n  }\n"]);
                return j = function() {
                    return n
                }, n
            }

            function A() {
                var n = (0, t.Z)(["\n  display: inline-flex;\n  align-items: center;\n  height: 24px;\n  width: 100%;\n\n  &.AccountLink--variant-both {\n    display: inline-flex;\n  }\n\n  .AccountLink--ellipsis-variant-both {\n    display: inline-block;\n  }\n\n  .AccountLink--ellipsis-overflow {\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n  }\n\n  .AccountLink--image {\n    cursor: pointer;\n    margin-right: 8px;\n  }\n\n  &.AccountLink--light-container {\n    .AccountLink--light-image {\n      border: 2px solid white;\n      border-radius: 50%;\n      margin: 0 4px;\n    }\n\n    .AccountLink--light-text {\n      color: white;\n    }\n\n    &:hover {\n      .AccountLink--light-image {\n        box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.6);\n      }\n\n      .AccountLink--light-text {\n        text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.6);\n      }\n    }\n  }\n"]);
                return A = function() {
                    return n
                }, n
            }
            var w = function(n) {
                    var e = n.className,
                        t = n.dataKey,
                        o = n.isCreator,
                        T = n.isOwner,
                        j = n.mode,
                        A = n.variant,
                        w = void 0 === A ? "both" : A,
                        L = n.ownedQuantity,
                        I = n.target,
                        _ = n.iconSize,
                        Z = void 0 === _ ? 22 : _,
                        S = n.handleOverflow,
                        N = void 0 === S || S,
                        D = n.justifyContent,
                        E = n.fontWeight,
                        P = void 0 === E ? "inherit" : E,
                        B = n.testId,
                        U = void 0 === B ? "AccountLink" : B,
                        W = n.isLink,
                        M = void 0 === W || W,
                        O = n.showBadge,
                        Q = void 0 === O || O,
                        Y = (0, y.b)().wallet,
                        q = (0, r.useFragment)(l(25735), t),
                        z = q.address,
                        X = q.user,
                        G = q.config,
                        J = q.isCompromised,
                        H = q.displayName,
                        R = (null === X || void 0 === X ? void 0 : X.publicUsername) ? (0, b.aF)(X.publicUsername, 21) : null !== H && void 0 !== H ? H : void 0,
                        V = Y.isActiveAccount(q) ? "you" : R || (0, k.Tg)(z),
                        $ = (0, f.F)(q, o);
                    return o ? (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)(h.pU, {
                            lessThan: "sm",
                            children: (0, s.jsxs)(g.k, {
                                alignItems: "center",
                                children: [(0, s.jsx)(p.WX, {
                                    as: "div",
                                    variant: "caption",
                                    children: "By\xa0"
                                }), (0, s.jsx)(d.r, {
                                    href: $,
                                    children: (0, s.jsx)(K, {
                                        as: "span",
                                        variant: "h6",
                                        children: V
                                    })
                                }), Q && (0, s.jsx)(c.ZP, {
                                    config: G,
                                    isCompromised: !!J,
                                    tooltipPlacement: "bottom",
                                    variant: "tiny"
                                })]
                            })
                        }), (0, s.jsx)(h.pU, {
                            greaterThanOrEqual: "sm",
                            children: (0, s.jsxs)(g.k, {
                                alignItems: "center",
                                children: [(0, s.jsx)(p.WX, {
                                    as: "div",
                                    variant: "body-dark",
                                    children: "By\xa0"
                                }), (0, s.jsx)(d.r, {
                                    href: $,
                                    children: (0, s.jsx)(K, {
                                        as: "div",
                                        variant: "bold",
                                        children: V
                                    })
                                }), Q && (0, s.jsx)(c.ZP, {
                                    config: G,
                                    isCompromised: !!J,
                                    variant: "tiny"
                                })]
                            })
                        })]
                    }) : (0, s.jsxs)(C, {
                        className: (0, F.A)("AccountLink", {
                            "light-container": "light" === j,
                            "ellipsis-overflow": "both" !== w && N,
                            "variant-both": "both" === w
                        }, e),
                        "data-testid": U,
                        justifyContent: D,
                        children: ["no-image" !== w && (0, s.jsx)(m.g, (0, i.Z)((0, a.Z)({}, M ? {
                            as: d.r,
                            href: (0, f.F)(q),
                            target: I,
                            onClick: function(n) {
                                return n.stopPropagation()
                            }
                        } : void 0), {
                            fontWeight: P,
                            children: (0, s.jsx)(v.u, {
                                content: V,
                                children: (0, s.jsx)("span", {
                                    children: (0, s.jsx)(u.m, {
                                        className: (0, F.A)("AccountLink", {
                                            image: !j,
                                            "light-image": "light" === j
                                        }),
                                        data: q,
                                        size: Z
                                    })
                                })
                            })
                        })), (0, s.jsxs)(s.Fragment, {
                            children: [T ? L ? (0, s.jsxs)(s.Fragment, {
                                children: [(0, b.aF)((0, x.zh)(L), 19), "\xa0owned by\xa0"]
                            }) : (0, s.jsx)(s.Fragment, {
                                children: "Owned by\xa0"
                            }) : "", "only-image" !== w && (0, s.jsx)(m.g, (0, i.Z)((0, a.Z)({
                                className: (0, F.A)("AccountLink", {
                                    "light-text": "light" === j,
                                    "ellipsis-overflow": N,
                                    "ellipsis-variant-both": N && "both" === w
                                })
                            }, M ? {
                                as: d.r,
                                href: $,
                                target: I,
                                onClick: function(n) {
                                    n.stopPropagation()
                                }
                            } : void 0), {
                                fontWeight: P,
                                children: (0, s.jsx)("span", {
                                    children: V
                                })
                            }))]
                        }), Q && (0, s.jsx)(c.ZP, {
                            config: G,
                            isCompromised: J
                        })]
                    })
                },
                K = (0, o.ZP)(p.WX).withConfig({
                    componentId: "sc-6a9832ee-0"
                })(j(), (function(n) {
                    return (0, T.Um)({
                        variants: {
                            dark: {
                                color: n.theme.colors.gray
                            },
                            light: {
                                color: n.theme.colors.oil
                            }
                        }
                    })
                }), (function(n) {
                    return (0, T.Um)({
                        variants: {
                            dark: {
                                color: n.theme.colors.ash
                            },
                            light: {
                                color: n.theme.colors.darkGray
                            }
                        }
                    })
                })),
                C = (0, o.ZP)(m.g).withConfig({
                    componentId: "sc-6a9832ee-1"
                })(A())
        },
        89635: function(n, e, l) {
            l.d(e, {
                E: function() {
                    return x
                }
            });
            var a = l(85034),
                i = l(70169),
                t = l(19989),
                s = l(24246),
                r = (l(27378), l(4402)),
                o = l(47892),
                c = l(1569),
                d = l(510),
                u = l(53585),
                m = l(96150),
                g = l(72363),
                p = l(59809),
                h = l(9288),
                v = l(11652),
                y = l(42565);

            function f() {
                var n = (0, t.Z)(["\n  .AssetCell--img {\n    border-radius: ", ";\n    border: 1px solid ", ";\n    display: flex;\n    justify-content: center;\n    flex: 0 0 auto;\n    width: fit-content;\n  }\n\n  .AssetCell--img-small {\n    width: 50%;\n  }\n"]);
                return f = function() {
                    return n
                }, n
            }
            var k = function(n) {
                    var e = n.name,
                        l = n.quantityDisplayText,
                        a = n.className;
                    return (0, s.jsx)(u.g, {
                        as: "span",
                        className: a,
                        display: {
                            _: "none",
                            sm: "inline-block"
                        },
                        marginLeft: "8px",
                        textAlign: "left",
                        children: (0, s.jsxs)(d.n, {
                            lines: 2,
                            children: [e, l]
                        })
                    })
                },
                x = function(n) {
                    var e, t, o, d, f, x, F, T = n.item,
                        j = n.quantity,
                        A = n.fullscreenBreakpoint,
                        w = void 0 === A ? "sm" : A,
                        K = n.renderName,
                        C = void 0 === K ? k : K,
                        L = n.link,
                        I = void 0 === L || L,
                        _ = n.onClick,
                        Z = n.overrides,
                        S = void 0 === Z ? {} : Z,
                        N = (0, r.useFragment)(l(6370), T),
                        D = "AssetBundleType" === (null === N || void 0 === N ? void 0 : N.__typename),
                        E = (0, p.v$)(null === N || void 0 === N ? void 0 : N.assetQuantities).slice(0, 2),
                        P = null !== (F = null !== (x = null !== (f = null !== (d = null === N || void 0 === N ? void 0 : N.name) && void 0 !== d ? d : null === (e = E[0]) || void 0 === e ? void 0 : e.asset.name) && void 0 !== f ? f : null === N || void 0 === N || null === (t = N.bundleCollection) || void 0 === t ? void 0 : t.name) && void 0 !== x ? x : null === N || void 0 === N || null === (o = N.collection) || void 0 === o ? void 0 : o.name) && void 0 !== F ? F : "",
                        B = j && j.isGreaterThan(1) ? " x".concat((0, v.zh)(j)) : "",
                        U = N ? (0, h.y)(N) : void 0;
                    return (0, s.jsx)(b, {
                        children: (0, s.jsx)(u.g, (0, i.Z)((0, a.Z)({}, I ? (0, a.Z)({}, {
                            href: U,
                            as: c.r
                        }) : {}), {
                            color: "inherit",
                            display: "block",
                            onClick: _,
                            children: (0, s.jsxs)(m.k, {
                                alignItems: "center",
                                children: [D ? (0, s.jsx)("div", {
                                    className: "AssetCell--img",
                                    children: E.map((function(n) {
                                        return (0, s.jsx)(y.N, (0, a.Z)({
                                            asset: n.asset,
                                            className: "AssetCell--img-small"
                                        }, S.AssetMedia), n.relayId)
                                    }))
                                }) : N ? (0, s.jsx)(y.N, (0, a.Z)({
                                    asset: N,
                                    className: "AssetCell--img",
                                    size: 48
                                }, S.AssetMedia)) : null, (0, s.jsx)(g.pU, {
                                    greaterThanOrEqual: w,
                                    children: function(n, e) {
                                        return e ? C({
                                            name: P,
                                            quantityDisplayText: B,
                                            className: n
                                        }) : void 0
                                    }
                                })]
                            })
                        }))
                    })
                },
                b = o.ZP.div.withConfig({
                    componentId: "sc-7c6f05bd-0"
                })(f(), (function(n) {
                    return n.theme.borderRadius.default
                }), (function(n) {
                    return n.theme.colors.border
                }))
        },
        58202: function(n, e, l) {
            l.d(e, {
                X: function() {
                    return s
                }
            });
            var a = l(24246),
                i = (l(27378), l(51840)),
                t = l(24140),
                s = function(n) {
                    var e = n.interval,
                        l = void 0 === e ? 1e3 : e,
                        s = n.renderFormattedTimestamp,
                        r = (0, i.Z)();
                    return (0, t.Z)(r, l), (0, a.jsx)(a.Fragment, {
                        children: s()
                    })
                }
        },
        62699: function(n, e, l) {
            l.d(e, {
                F: function() {
                    return h
                }
            });
            var a = l(85034),
                i = l(19989),
                t = l(24246),
                s = (l(27378), l(4402)),
                r = l(47892),
                o = l(55700),
                c = l(48257),
                d = l(58202),
                u = l(53585),
                m = l(65175),
                g = (l(59809), l(97516));

            function p() {
                var n = (0, i.Z)(["\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n\n  .EventTimestamp--link {\n    color: ", ";\n  }\n"]);
                return p = function() {
                    return n
                }, n
            }
            var h = function(n) {
                    var e = n.className,
                        i = n.data,
                        r = n.fontWeight,
                        p = n.subtle,
                        h = void 0 !== p && p,
                        y = n.overrides,
                        f = void 0 === y ? {} : y,
                        k = (0, s.useFragment)(l(15720), i),
                        x = k.eventTimestamp,
                        b = k.transaction,
                        F = (0, t.jsx)(d.X, {
                            renderFormattedTimestamp: function() {
                                return (0, g.vm)((0, g.pY)(x))
                            }
                        }),
                        T = (0, g.pY)(x).format("MMMM D YYYY, h:mm a");
                    return (0, t.jsx)(v, {
                        className: e,
                        "data-testid": "EventTimestamp",
                        fontWeight: r,
                        subtle: h,
                        children: (0, t.jsx)(m.u, {
                            content: T,
                            interactive: !0,
                            placement: m.E.TOP,
                            children: b ? (0, t.jsxs)(o.d, {
                                className: "EventTimestamp--link",
                                href: b.blockExplorerLink,
                                title: "Opens in a new window",
                                children: [F, " ", (0, t.jsx)(u.g, {
                                    display: "inline-block",
                                    lineHeight: "0",
                                    marginBottom: "2px",
                                    verticalAlign: "middle",
                                    children: (0, t.jsx)(c.J, (0, a.Z)({
                                        "aria-hidden": !0,
                                        className: "EventTimestamp--link-icon",
                                        value: "open_in_new"
                                    }, f.Icon))
                                })]
                            }) : (0, t.jsx)("span", {
                                children: F
                            })
                        })
                    })
                },
                v = (0, r.ZP)(u.g).withConfig({
                    componentId: "sc-c59da66c-0"
                })(p(), (function(n) {
                    return n.subtle ? n.theme.colors.text.subtle : void 0
                }))
        },
        25735: function(n, e, l) {
            l.r(e);
            var a = function() {
                var n = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "address",
                        storageKey: null
                    },
                    e = {
                        alias: null,
                        args: null,
                        concreteType: "UserType",
                        kind: "LinkedField",
                        name: "user",
                        plural: !1,
                        selections: [{
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "publicUsername",
                            storageKey: null
                        }],
                        storageKey: null
                    };
                return {
                    argumentDefinitions: [],
                    kind: "Fragment",
                    metadata: null,
                    name: "AccountLink_data",
                    selections: [n, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "config",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "isCompromised",
                        storageKey: null
                    }, e, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "displayName",
                        storageKey: null
                    }, {
                        args: null,
                        kind: "FragmentSpread",
                        name: "ProfileImage_data"
                    }, {
                        kind: "InlineDataFragmentSpread",
                        name: "wallet_accountKey",
                        selections: [n],
                        args: null,
                        argumentDefinitions: []
                    }, {
                        kind: "InlineDataFragmentSpread",
                        name: "accounts_url",
                        selections: [n, e],
                        args: null,
                        argumentDefinitions: []
                    }],
                    type: "AccountType",
                    abstractKey: null
                }
            }();
            a.hash = "34eb3e12ba8b373ed6b27e35acb85532", e.default = a
        },
        15720: function(n, e, l) {
            l.r(e);
            var a = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "EventTimestamp_data",
                selections: [{
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "eventTimestamp",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    concreteType: "TransactionType",
                    kind: "LinkedField",
                    name: "transaction",
                    plural: !1,
                    selections: [{
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "blockExplorerLink",
                        storageKey: null
                    }],
                    storageKey: null
                }],
                type: "AssetEventType",
                abstractKey: null,
                hash: "0fe67eb891265a708d5b4b07cbf3da10"
            };
            e.default = a
        },
        6370: function(n, e, l) {
            l.r(e);
            var a = function() {
                var n = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "__typename",
                        storageKey: null
                    },
                    e = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "name",
                        storageKey: null
                    },
                    l = {
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
                    },
                    a = [e],
                    i = {
                        args: null,
                        kind: "FragmentSpread",
                        name: "AssetMedia_asset"
                    };
                return {
                    argumentDefinitions: [],
                    kind: "Fragment",
                    metadata: null,
                    name: "ItemCell_data",
                    selections: [n, e, {
                        kind: "InlineDataFragmentSpread",
                        name: "item_url",
                        selections: [n, {
                            kind: "InlineFragment",
                            selections: [{
                                kind: "InlineDataFragmentSpread",
                                name: "asset_url",
                                selections: [{
                                    alias: null,
                                    args: null,
                                    concreteType: "AssetContractType",
                                    kind: "LinkedField",
                                    name: "assetContract",
                                    plural: !1,
                                    selections: [{
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "address",
                                        storageKey: null
                                    }],
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "tokenId",
                                    storageKey: null
                                }, l],
                                args: null,
                                argumentDefinitions: []
                            }],
                            type: "AssetType",
                            abstractKey: null
                        }, {
                            kind: "InlineFragment",
                            selections: [{
                                kind: "InlineDataFragmentSpread",
                                name: "bundle_url",
                                selections: [{
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "slug",
                                    storageKey: null
                                }, l],
                                args: null,
                                argumentDefinitions: []
                            }],
                            type: "AssetBundleType",
                            abstractKey: null
                        }],
                        args: null,
                        argumentDefinitions: []
                    }, {
                        kind: "InlineFragment",
                        selections: [{
                            alias: null,
                            args: null,
                            concreteType: "CollectionType",
                            kind: "LinkedField",
                            name: "collection",
                            plural: !1,
                            selections: a,
                            storageKey: null
                        }, i],
                        type: "AssetType",
                        abstractKey: null
                    }, {
                        kind: "InlineFragment",
                        selections: [{
                            alias: "bundleCollection",
                            args: null,
                            concreteType: "CollectionType",
                            kind: "LinkedField",
                            name: "collection",
                            plural: !1,
                            selections: a,
                            storageKey: null
                        }, {
                            alias: null,
                            args: [{
                                kind: "Literal",
                                name: "first",
                                value: 30
                            }],
                            concreteType: "AssetQuantityTypeConnection",
                            kind: "LinkedField",
                            name: "assetQuantities",
                            plural: !1,
                            selections: [{
                                alias: null,
                                args: null,
                                concreteType: "AssetQuantityTypeEdge",
                                kind: "LinkedField",
                                name: "edges",
                                plural: !0,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    concreteType: "AssetQuantityType",
                                    kind: "LinkedField",
                                    name: "node",
                                    plural: !1,
                                    selections: [{
                                        alias: null,
                                        args: null,
                                        concreteType: "AssetType",
                                        kind: "LinkedField",
                                        name: "asset",
                                        plural: !1,
                                        selections: [e, i],
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "relayId",
                                        storageKey: null
                                    }],
                                    storageKey: null
                                }],
                                storageKey: null
                            }],
                            storageKey: "assetQuantities(first:30)"
                        }],
                        type: "AssetBundleType",
                        abstractKey: null
                    }],
                    type: "ItemType",
                    abstractKey: "__isItemType"
                }
            }();
            a.hash = "0c754c25e838dc3d70329303d95fcf25", e.default = a
        },
        67620: function(n, e, l) {
            l.r(e);
            var a = {
                kind: "InlineDataFragment",
                name: "item_url",
                hash: "17b374cde23b9cde6b795dce8796edec"
            };
            e.default = a
        },
        9288: function(n, e, l) {
            l.d(e, {
                y: function() {
                    return r
                }
            });
            l(59809);
            var a = l(67286),
                i = l(20889),
                t = l(75614),
                s = (0, a.A)(l(67620), (function(n) {
                    return n
                })),
                r = function(n) {
                    var e = s(n);
                    switch (e.__typename) {
                        case "AssetType":
                            return (0, i.Vh)(e);
                        case "AssetBundleType":
                            return (0, t.J)(e);
                        default:
                            return ""
                    }
                }
        }
    }
]);
//# sourceMappingURL=60354-d4b2f73e68b8113a.js.map