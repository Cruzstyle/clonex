(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [45171], {
        84966: function(n, e, l) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/collection/[collectionSlug]", function() {
                return l(45635)
            }])
        },
        15609: function(n, e, l) {
            "use strict";
            l.d(e, {
                Q: function() {
                    return p
                },
                f: function() {
                    return m
                }
            });
            var a = l(23842),
                t = l(35230),
                i = l.n(t),
                r = l(24246),
                s = l(27378),
                o = l(12393),
                d = l(33181),
                c = l(53585),
                u = l(377),
                y = l(9476),
                m = function(n) {
                    var e = n.loadNext,
                        l = n.count;
                    return new Promise((function(n, a) {
                        e(l, {
                            onComplete: function(e) {
                                e ? a(e) : n()
                            }
                        })
                    }))
                };

            function g() {
                return (g = (0, a.Z)(i().mark((function n() {
                    return i().wrap((function(n) {
                        for (;;) switch (n.prev = n.next) {
                            case 0:
                                if ("undefined" !== typeof window.IntersectionObserver) {
                                    n.next = 3;
                                    break
                                }
                                return n.next = 3, l.e(17827).then(l.t.bind(l, 17827, 23));
                            case 3:
                            case "end":
                                return n.stop()
                        }
                    }), n)
                })))).apply(this, arguments)
            }
            d.W6 || function() {
                g.apply(this, arguments)
            }();
            var p = function(n) {
                var e = n.disableLoader,
                    l = n.isFirstPageLoading,
                    t = n.intersectionOptions,
                    d = n.page,
                    m = d.hasMore,
                    g = d.loadMore,
                    p = d.isLoading,
                    k = n.children,
                    T = n.onLoad,
                    f = n.onLoadStart,
                    _ = n.size,
                    C = (0, o.YD)(t),
                    h = C.ref,
                    A = C.inView,
                    F = (0, s.useState)(!1),
                    S = F[0],
                    K = F[1],
                    L = p(),
                    v = m(),
                    b = function() {
                        var n = (0, a.Z)(i().mark((function n() {
                            return i().wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return f && f(), K(!0), n.next = 4, g(_);
                                    case 4:
                                        setTimeout((function() {
                                            return K(!1)
                                        }), 0), T && T();
                                    case 6:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })));
                        return function() {
                            return n.apply(this, arguments)
                        }
                    }();
                (0, s.useEffect)((function() {
                    !A || !v || S || L || e || b()
                }), [A, v, S, L, e]);
                return (0, r.jsx)(u._, {
                    ref: h,
                    children: !S && !l || e ? v ? S || l ? k || null : (0, r.jsx)(c.g, {
                        height: "1px",
                        width: "1px"
                    }) : null : (0, r.jsx)(c.g, {
                        margin: "8px",
                        children: (0, r.jsx)(y.aN, {})
                    })
                })
            }
        },
        8148: function(n, e, l) {
            "use strict";
            l.d(e, {
                i: function() {
                    return S
                }
            });
            var a, t, i = l(85034),
                r = l(70169),
                s = l(31373),
                o = l(19989),
                d = l(24246),
                c = (l(27378), l(47892)),
                u = l(510),
                y = l(53585),
                m = l(98784),
                g = l(72686),
                p = l(66079),
                k = function(n) {
                    var e = n.height;
                    return (0, d.jsxs)(S.Row, {
                        children: [(0, d.jsx)(S.Cell, {
                            height: e,
                            children: (0, d.jsx)(g.O.Line, {})
                        }), (0, d.jsx)(S.Cell, {
                            height: e,
                            children: (0, d.jsx)(g.O.Line, {})
                        }), (0, d.jsx)(S.Cell, {
                            height: e,
                            children: (0, d.jsx)(g.O.Line, {})
                        }), (0, d.jsx)(S.Cell, {
                            height: e,
                            children: (0, d.jsx)(g.O.Line, {})
                        }), (0, d.jsx)(S.Cell, {
                            height: e,
                            children: (0, d.jsx)(g.O.Line, {})
                        })]
                    })
                };

            function T() {
                var n = (0, o.Z)(["\n  width: 100%;\n  padding: 0;\n  margin: 0;\n  display: grid;\n  grid-template-columns: ", ';\n\n  [role="cell"],\n  [role="columnheader"] {\n    padding-left: ', "px;\n    padding-right: ", "px;\n\n    &:nth-child(", "n) {\n      padding-right: ", "px;\n    }\n    &:nth-child(", "n + 1) {\n      padding-left: ", "px;\n    }\n  }\n"]);
                return T = function() {
                    return n
                }, n
            }

            function f() {
                var n = (0, o.Z)(["\n  display: contents;\n"]);
                return f = function() {
                    return n
                }, n
            }

            function _() {
                var n = (0, o.Z)(["\n  display: flex;\n  align-items: center;\n  padding-top: ", ";\n  padding-bottom: ", ";\n  background-color: ", ";\n  border-top: ", ';\n\n  &[role="columnheader"] {\n    z-index: 2;\n    position: sticky;\n    top: 0;\n    border-bottom: 1px solid ', ";\n    /* Workaround for double border issue */\n    margin-top: -1px;\n  }\n"]);
                return _ = function() {
                    return n
                }, n
            }
            var C = c.ZP.ul.attrs({
                    role: "table"
                }).withConfig({
                    componentId: "sc-495851fd-0"
                })(T(), (function(n) {
                    var e = n.defaultMaxColumnWidth ? "".concat(n.defaultMaxColumnWidth, "px") : "auto",
                        l = n.defaultMinColumnWidth ? "".concat(n.defaultMinColumnWidth, "px") : "auto";
                    return n.minColumnWidths || n.maxColumnWidths ? n.maxColumnWidths ? n.minColumnWidths ? (0, m.range)(n.columns).map((function(a) {
                        var t, i;
                        return " minmax(".concat(void 0 === (null === (t = n.minColumnWidths) || void 0 === t ? void 0 : t[a]) ? l : "auto" === n.minColumnWidths[a] ? "auto" : "".concat(n.minColumnWidths[a], "px"), ", ").concat(void 0 === (null === (i = n.maxColumnWidths) || void 0 === i ? void 0 : i[a]) ? e : "auto" === n.maxColumnWidths[a] ? "auto" : "".concat(n.maxColumnWidths[a], "px"), ")")
                    })) : (0, m.range)(n.columns).map((function(a) {
                        var t;
                        return " minmax(".concat(l, ", ").concat(void 0 === (null === (t = n.maxColumnWidths) || void 0 === t ? void 0 : t[a]) ? e : "auto" === n.maxColumnWidths[a] ? "auto" : "".concat(n.maxColumnWidths[a], "px"), ")")
                    })) : (0, m.range)(n.columns).map((function(a) {
                        var t;
                        return " minmax(".concat(void 0 === (null === (t = n.minColumnWidths) || void 0 === t ? void 0 : t[a]) ? l : "auto" === n.minColumnWidths[a] ? "auto" : "".concat(n.minColumnWidths[a], "px"), ", ").concat(e, ")")
                    })) : "repeat(".concat(n.columns, ", minmax(").concat(l, ", ").concat(e, "))")
                }), (function(n) {
                    return null !== (a = n.horizontalSpacing) && void 0 !== a ? a : 8
                }), (function(n) {
                    return null !== (t = n.horizontalSpacing) && void 0 !== t ? t : 8
                }), (function(n) {
                    return n.columns
                }), (function(n) {
                    return n.horizontalSpacing ? 2 * n.horizontalSpacing : 16
                }), (function(n) {
                    return n.columns
                }), (function(n) {
                    return n.horizontalSpacing ? 2 * n.horizontalSpacing : 16
                })),
                h = c.ZP.li.attrs({
                    role: "row"
                }).withConfig({
                    componentId: "sc-495851fd-1"
                })(f()),
                A = (0, c.ZP)(y.g).withConfig({
                    componentId: "sc-495851fd-2"
                })(_(), (function(n) {
                    return "body" === n.variant ? "16px" : "4px"
                }), (function(n) {
                    return "body" === n.variant ? "16px" : "4px"
                }), (function(n) {
                    return "body" === n.variant ? n.theme.colors.panel : n.theme.colors.header
                }), (function(n) {
                    return "body" === n.variant ? "1px solid ".concat(n.theme.colors.border) : "none"
                }), (function(n) {
                    return n.theme.colors.border
                })),
                F = function(n) {
                    var e = n.children,
                        l = n.className,
                        a = (0, s.Z)(n, ["children", "className"]);
                    return (0, d.jsx)(A, (0, r.Z)((0, i.Z)({
                        className: l
                    }, a), {
                        role: "columnheader",
                        variant: "header",
                        children: (0, d.jsx)(u.n, {
                            children: e
                        })
                    }))
                },
                S = Object.assign((function(n) {
                    var e = n.headers,
                        l = n.minColumnWidths,
                        a = n.maxColumnWidths,
                        t = n.defaultMinColumnWidth,
                        i = n.defaultMaxColumnWidth,
                        r = n.horizontalSpacing,
                        s = n.children,
                        o = n.renderHeader;
                    return (0, d.jsxs)(C, {
                        columns: e.length,
                        defaultMaxColumnWidth: i,
                        defaultMinColumnWidth: t,
                        horizontalSpacing: r,
                        maxColumnWidths: a,
                        minColumnWidths: l,
                        children: [(0, d.jsx)(h, {
                            children: e.map((function(n, e) {
                                return o ? o({
                                    Header: F,
                                    header: n,
                                    index: e
                                }) : (0, d.jsx)(F, {
                                    children: n
                                }, e)
                            }))
                        }), s]
                    })
                }), {
                    Row: h,
                    Cell: function(n) {
                        var e = n.children,
                            l = n.className,
                            a = (0, s.Z)(n, ["children", "className"]);
                        return (0, d.jsx)(A, (0, r.Z)((0, i.Z)({
                            className: l
                        }, a), {
                            role: "cell",
                            variant: "body",
                            children: (0, d.jsx)(u.n, {
                                children: e
                            })
                        }))
                    },
                    Skeleton: function(n) {
                        var e = n.rowCount,
                            l = void 0 === e ? 10 : e,
                            a = n.columnCount,
                            t = void 0 === a ? 5 : a,
                            i = n.rowHeight,
                            r = void 0 === i ? "55px" : i,
                            s = n.maxHeight,
                            o = n.headers;
                        return (0, d.jsx)(y.g, {
                            maxHeight: s,
                            overflow: "scroll",
                            children: (0, d.jsx)(S, {
                                headers: null !== o && void 0 !== o ? o : Array(t).fill(p.Xz),
                                children: (0, m.range)(l).map((function(n, e) {
                                    return (0, d.jsx)(k, {
                                        height: r
                                    }, e)
                                }))
                            })
                        })
                    },
                    RowSkeleton: k
                })
        },
        53034: function(n, e, l) {
            "use strict";
            l.d(e, {
                v: function() {
                    return i
                }
            });
            var a = l(27378),
                t = l(93580),
                i = function() {
                    var n = (0, t.d)().setIsSidePanelEnabled;
                    (0, a.useEffect)((function() {
                        return n(!0),
                            function() {
                                return n(!1)
                            }
                    }), [n])
                }
        },
        50847: function(n, e, l) {
            "use strict";
            l.r(e);
            var a = function() {
                var n = {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "collection"
                    },
                    e = {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "collectionQuery"
                    },
                    l = {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "collections"
                    },
                    a = {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "includeCollectionFilter"
                    },
                    t = {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "includeHiddenCollections"
                    },
                    i = {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "numericTraits"
                    },
                    r = {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "prioritizeBuyNow"
                    },
                    s = {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "query"
                    },
                    o = {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "resultModel"
                    },
                    d = {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "showContextMenu"
                    },
                    c = {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "sortAscending"
                    },
                    u = {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "sortBy"
                    },
                    y = {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "stringTraits"
                    },
                    m = {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "toggles"
                    },
                    g = {
                        kind: "Variable",
                        name: "collection",
                        variableName: "collection"
                    },
                    p = [g],
                    k = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "isCollectionOffersEnabled",
                        storageKey: null
                    },
                    T = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "verificationStatus",
                        storageKey: null
                    },
                    f = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "enabledRarities",
                        storageKey: null
                    },
                    _ = {
                        kind: "Variable",
                        name: "collections",
                        variableName: "collections"
                    },
                    C = {
                        kind: "Variable",
                        name: "numericTraits",
                        variableName: "numericTraits"
                    },
                    h = {
                        kind: "Variable",
                        name: "prioritizeBuyNow",
                        variableName: "prioritizeBuyNow"
                    },
                    A = {
                        kind: "Variable",
                        name: "sortAscending",
                        variableName: "sortAscending"
                    },
                    F = {
                        kind: "Variable",
                        name: "sortBy",
                        variableName: "sortBy"
                    },
                    S = {
                        kind: "Variable",
                        name: "stringTraits",
                        variableName: "stringTraits"
                    },
                    K = {
                        kind: "Variable",
                        name: "toggles",
                        variableName: "toggles"
                    },
                    L = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "name",
                        storageKey: null
                    },
                    v = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "slug",
                        storageKey: null
                    },
                    b = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "imageUrl",
                        storageKey: null
                    },
                    x = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "address",
                        storageKey: null
                    },
                    P = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "id",
                        storageKey: null
                    },
                    I = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "displayName",
                        storageKey: null
                    },
                    V = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "relayId",
                        storageKey: null
                    },
                    M = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "blockExplorerLink",
                        storageKey: null
                    },
                    w = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "chain",
                        storageKey: null
                    },
                    N = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "identifier",
                        storageKey: null
                    },
                    U = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "isCategory",
                        storageKey: null
                    },
                    O = [N],
                    B = {
                        alias: null,
                        args: null,
                        concreteType: "ChainType",
                        kind: "LinkedField",
                        name: "chain",
                        plural: !1,
                        selections: O,
                        storageKey: null
                    },
                    E = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "symbol",
                        storageKey: null
                    },
                    D = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "totalSupply",
                        storageKey: null
                    },
                    W = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "unit",
                        storageKey: null
                    },
                    j = [W],
                    Q = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "eth",
                        storageKey: null
                    },
                    Z = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "key",
                        storageKey: null
                    },
                    $ = [{
                        kind: "Literal",
                        name: "first",
                        value: 10
                    }],
                    R = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "__typename",
                        storageKey: null
                    },
                    q = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "cursor",
                        storageKey: null
                    },
                    z = {
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
                    H = [_, {
                        kind: "Literal",
                        name: "first",
                        value: 20
                    }, C, h, {
                        kind: "Variable",
                        name: "querystring",
                        variableName: "query"
                    }, {
                        kind: "Variable",
                        name: "resultType",
                        variableName: "resultModel"
                    }, A, F, S, K],
                    G = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "orderType",
                        storageKey: null
                    },
                    X = [x, P],
                    Y = {
                        alias: null,
                        args: null,
                        concreteType: "PriceType",
                        kind: "LinkedField",
                        name: "perUnitPriceType",
                        plural: !1,
                        selections: j,
                        storageKey: null
                    },
                    J = {
                        alias: null,
                        args: null,
                        concreteType: "PriceType",
                        kind: "LinkedField",
                        name: "dutchAuctionFinalPriceType",
                        plural: !1,
                        selections: j,
                        storageKey: null
                    },
                    nn = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "openedAt",
                        storageKey: null
                    },
                    en = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "closedAt",
                        storageKey: null
                    },
                    ln = {
                        alias: null,
                        args: null,
                        concreteType: "PaymentAssetType",
                        kind: "LinkedField",
                        name: "payment",
                        plural: !1,
                        selections: [E, B, {
                            alias: null,
                            args: null,
                            concreteType: "AssetType",
                            kind: "LinkedField",
                            name: "asset",
                            plural: !1,
                            selections: [b, {
                                alias: null,
                                args: null,
                                concreteType: "AssetContractType",
                                kind: "LinkedField",
                                name: "assetContract",
                                plural: !1,
                                selections: [M, P],
                                storageKey: null
                            }, P],
                            storageKey: null
                        }, P],
                        storageKey: null
                    },
                    an = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "decimals",
                        storageKey: null
                    },
                    tn = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "animationUrl",
                        storageKey: null
                    },
                    rn = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "displayImageUrl",
                        storageKey: null
                    },
                    sn = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "isDelisted",
                        storageKey: null
                    },
                    on = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "backgroundColor",
                        storageKey: null
                    },
                    dn = {
                        alias: null,
                        args: null,
                        concreteType: "DisplayDataType",
                        kind: "LinkedField",
                        name: "displayData",
                        plural: !1,
                        selections: [{
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "cardDisplayStyle",
                            storageKey: null
                        }],
                        storageKey: null
                    },
                    cn = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "isVerified",
                        storageKey: null
                    },
                    un = [{
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "usd",
                        storageKey: null
                    }],
                    yn = {
                        kind: "InlineFragment",
                        selections: [P],
                        type: "Node",
                        abstractKey: "__isNode"
                    };
                return {
                    fragment: {
                        argumentDefinitions: [n, e, l, a, t, i, r, s, o, d, c, u, y, m],
                        kind: "Fragment",
                        metadata: null,
                        name: "CollectionPageQuery",
                        selections: [{
                            alias: null,
                            args: p,
                            concreteType: "CollectionType",
                            kind: "LinkedField",
                            name: "collection",
                            plural: !1,
                            selections: [k, T, f, {
                                args: null,
                                kind: "FragmentSpread",
                                name: "CollectionPageHead_collection"
                            }, {
                                args: null,
                                kind: "FragmentSpread",
                                name: "CollectionPageLayout_collection"
                            }],
                            storageKey: null
                        }, {
                            alias: "assets",
                            args: null,
                            concreteType: "Query",
                            kind: "LinkedField",
                            name: "query",
                            plural: !1,
                            selections: [{
                                args: [g, {
                                    kind: "Variable",
                                    name: "collectionQuery",
                                    variableName: "collectionQuery"
                                }, _, {
                                    kind: "Variable",
                                    name: "includeCollectionFilter",
                                    variableName: "includeCollectionFilter"
                                }, {
                                    kind: "Variable",
                                    name: "includeHiddenCollections",
                                    variableName: "includeHiddenCollections"
                                }, C, h, {
                                    kind: "Variable",
                                    name: "query",
                                    variableName: "query"
                                }, {
                                    kind: "Variable",
                                    name: "resultModel",
                                    variableName: "resultModel"
                                }, A, F, S, K],
                                kind: "FragmentSpread",
                                name: "AssetSearchCollection_data"
                            }],
                            storageKey: null
                        }],
                        type: "Query",
                        abstractKey: null
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: [n, l, e, t, i, s, c, u, y, m, o, d, a, r],
                        kind: "Operation",
                        name: "CollectionPageQuery",
                        selections: [{
                            alias: null,
                            args: p,
                            concreteType: "CollectionType",
                            kind: "LinkedField",
                            name: "collection",
                            plural: !1,
                            selections: [k, T, f, L, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "description",
                                storageKey: null
                            }, v, b, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "bannerImageUrl",
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                concreteType: "AccountType",
                                kind: "LinkedField",
                                name: "owner",
                                plural: !1,
                                selections: [x, {
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
                                }, {
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
                                    }, P],
                                    storageKey: null
                                }, I, b, P],
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                concreteType: "AssetType",
                                kind: "LinkedField",
                                name: "representativeAsset",
                                plural: !1,
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
                                        name: "openseaVersion",
                                        storageKey: null
                                    }, P],
                                    storageKey: null
                                }, P],
                                storageKey: null
                            }, V, {
                                alias: null,
                                args: [{
                                    kind: "Literal",
                                    name: "first",
                                    value: 2
                                }],
                                concreteType: "AssetContractTypeConnection",
                                kind: "LinkedField",
                                name: "assetContracts",
                                plural: !1,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    concreteType: "AssetContractTypeEdge",
                                    kind: "LinkedField",
                                    name: "edges",
                                    plural: !0,
                                    selections: [{
                                        alias: null,
                                        args: null,
                                        concreteType: "AssetContractType",
                                        kind: "LinkedField",
                                        name: "node",
                                        plural: !1,
                                        selections: [x, M, w, {
                                            alias: null,
                                            args: null,
                                            concreteType: "ChainType",
                                            kind: "LinkedField",
                                            name: "chainData",
                                            plural: !1,
                                            selections: [{
                                                alias: null,
                                                args: null,
                                                concreteType: "BlockExplorerType",
                                                kind: "LinkedField",
                                                name: "blockExplorer",
                                                plural: !1,
                                                selections: [L, N],
                                                storageKey: null
                                            }],
                                            storageKey: null
                                        }, P],
                                        storageKey: null
                                    }],
                                    storageKey: null
                                }],
                                storageKey: "assetContracts(first:2)"
                            }, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "discordUrl",
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "externalUrl",
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "instagramUsername",
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "mediumUsername",
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "telegramUrl",
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "twitterUsername",
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "connectedTwitterUsername",
                                storageKey: null
                            }, U, {
                                alias: null,
                                args: null,
                                concreteType: "PaymentAssetType",
                                kind: "LinkedField",
                                name: "nativePaymentAsset",
                                plural: !1,
                                selections: [B, E, {
                                    alias: null,
                                    args: null,
                                    concreteType: "AssetType",
                                    kind: "LinkedField",
                                    name: "asset",
                                    plural: !1,
                                    selections: [b, P],
                                    storageKey: null
                                }, P],
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
                                    kind: "ScalarField",
                                    name: "numOwners",
                                    storageKey: null
                                }, D, {
                                    alias: null,
                                    args: null,
                                    concreteType: "PriceType",
                                    kind: "LinkedField",
                                    name: "totalVolume",
                                    plural: !1,
                                    selections: j,
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    concreteType: "PriceType",
                                    kind: "LinkedField",
                                    name: "floorPrice",
                                    plural: !1,
                                    selections: j,
                                    storageKey: null
                                }],
                                storageKey: null
                            }, {
                                alias: null,
                                args: [{
                                    kind: "Literal",
                                    name: "first",
                                    value: 1
                                }],
                                concreteType: "OrderV2TypeConnection",
                                kind: "LinkedField",
                                name: "collectionOffers",
                                plural: !1,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    concreteType: "OrderV2TypeEdge",
                                    kind: "LinkedField",
                                    name: "edges",
                                    plural: !0,
                                    selections: [{
                                        alias: null,
                                        args: null,
                                        concreteType: "OrderV2Type",
                                        kind: "LinkedField",
                                        name: "node",
                                        plural: !1,
                                        selections: [{
                                            alias: null,
                                            args: null,
                                            concreteType: "PriceType",
                                            kind: "LinkedField",
                                            name: "priceType",
                                            plural: !1,
                                            selections: [Q],
                                            storageKey: null
                                        }, P],
                                        storageKey: null
                                    }],
                                    storageKey: null
                                }],
                                storageKey: "collectionOffers(first:1)"
                            }, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "connectedInstagramUsername",
                                storageKey: null
                            }, P],
                            storageKey: null
                        }, {
                            alias: "assets",
                            args: null,
                            concreteType: "Query",
                            kind: "LinkedField",
                            name: "query",
                            plural: !1,
                            selections: [{
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "queriedAt",
                                storageKey: null
                            }, {
                                alias: null,
                                args: p,
                                concreteType: "CollectionType",
                                kind: "LinkedField",
                                name: "collection",
                                plural: !1,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    concreteType: "NumericTraitTypePair",
                                    kind: "LinkedField",
                                    name: "numericTraits",
                                    plural: !0,
                                    selections: [Z, {
                                        alias: null,
                                        args: null,
                                        concreteType: "NumericTraitType",
                                        kind: "LinkedField",
                                        name: "value",
                                        plural: !1,
                                        selections: [{
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "max",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "min",
                                            storageKey: null
                                        }],
                                        storageKey: null
                                    }],
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    concreteType: "StringTraitType",
                                    kind: "LinkedField",
                                    name: "stringTraits",
                                    plural: !0,
                                    selections: [Z, {
                                        alias: null,
                                        args: null,
                                        concreteType: "StringTraitCountType",
                                        kind: "LinkedField",
                                        name: "counts",
                                        plural: !0,
                                        selections: [{
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "count",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "value",
                                            storageKey: null
                                        }],
                                        storageKey: null
                                    }],
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    concreteType: "ChainType",
                                    kind: "LinkedField",
                                    name: "defaultChain",
                                    plural: !1,
                                    selections: O,
                                    storageKey: null
                                }, f, {
                                    alias: null,
                                    args: null,
                                    concreteType: "CollectionStatsV2Type",
                                    kind: "LinkedField",
                                    name: "statsV2",
                                    plural: !1,
                                    selections: [D],
                                    storageKey: null
                                }, P],
                                storageKey: null
                            }, {
                                alias: null,
                                args: $,
                                concreteType: "PaymentAssetTypeConnection",
                                kind: "LinkedField",
                                name: "paymentAssets",
                                plural: !1,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    concreteType: "PaymentAssetTypeEdge",
                                    kind: "LinkedField",
                                    name: "edges",
                                    plural: !0,
                                    selections: [{
                                        alias: null,
                                        args: null,
                                        concreteType: "PaymentAssetType",
                                        kind: "LinkedField",
                                        name: "node",
                                        plural: !1,
                                        selections: [E, P, R],
                                        storageKey: null
                                    }, q],
                                    storageKey: null
                                }, z],
                                storageKey: "paymentAssets(first:10)"
                            }, {
                                alias: null,
                                args: $,
                                filters: ["symbolIcontains"],
                                handle: "connection",
                                key: "PaymentFilter_paymentAssets",
                                kind: "LinkedHandle",
                                name: "paymentAssets"
                            }, {
                                alias: "PaymentFilter_collection",
                                args: p,
                                concreteType: "CollectionType",
                                kind: "LinkedField",
                                name: "collection",
                                plural: !1,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    concreteType: "PaymentAssetType",
                                    kind: "LinkedField",
                                    name: "paymentAssets",
                                    plural: !0,
                                    selections: [E, P],
                                    storageKey: null
                                }, P],
                                storageKey: null
                            }, {
                                alias: "selectedCollections",
                                args: [_, {
                                    kind: "Literal",
                                    name: "first",
                                    value: 25
                                }, {
                                    kind: "Literal",
                                    name: "includeHidden",
                                    value: !0
                                }],
                                concreteType: "CollectionTypeConnection",
                                kind: "LinkedField",
                                name: "collections",
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
                                        selections: [b, L, v, P],
                                        storageKey: null
                                    }],
                                    storageKey: null
                                }],
                                storageKey: null
                            }, {
                                alias: "search",
                                args: H,
                                concreteType: "ItemTypeConnection",
                                kind: "LinkedField",
                                name: "collectionItems",
                                plural: !1,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    concreteType: "ItemTypeEdge",
                                    kind: "LinkedField",
                                    name: "edges",
                                    plural: !0,
                                    selections: [{
                                        alias: null,
                                        args: null,
                                        concreteType: null,
                                        kind: "LinkedField",
                                        name: "node",
                                        plural: !1,
                                        selections: [R, V, {
                                            kind: "TypeDiscriminator",
                                            abstractKey: "__isItemType"
                                        }, {
                                            alias: null,
                                            args: null,
                                            concreteType: "ESOrderDataType",
                                            kind: "LinkedField",
                                            name: "orderData",
                                            plural: !1,
                                            selections: [{
                                                alias: null,
                                                args: null,
                                                concreteType: "OrderV2Type",
                                                kind: "LinkedField",
                                                name: "bestAskV2",
                                                plural: !1,
                                                selections: [{
                                                    alias: null,
                                                    args: null,
                                                    concreteType: "PriceType",
                                                    kind: "LinkedField",
                                                    name: "priceType",
                                                    plural: !1,
                                                    selections: [Q, W],
                                                    storageKey: null
                                                }, P, G, {
                                                    alias: null,
                                                    args: null,
                                                    concreteType: "AccountType",
                                                    kind: "LinkedField",
                                                    name: "maker",
                                                    plural: !1,
                                                    selections: X,
                                                    storageKey: null
                                                }, Y, J, nn, en, ln],
                                                storageKey: null
                                            }, {
                                                alias: null,
                                                args: null,
                                                concreteType: "OrderV2Type",
                                                kind: "LinkedField",
                                                name: "bestBidV2",
                                                plural: !1,
                                                selections: [G, {
                                                    alias: null,
                                                    args: null,
                                                    concreteType: "PriceType",
                                                    kind: "LinkedField",
                                                    name: "priceType",
                                                    plural: !1,
                                                    selections: j,
                                                    storageKey: null
                                                }, Y, J, nn, en, ln, P],
                                                storageKey: null
                                            }],
                                            storageKey: null
                                        }, L, {
                                            alias: null,
                                            args: null,
                                            concreteType: "ESAssetEventDataType",
                                            kind: "LinkedField",
                                            name: "assetEventData",
                                            plural: !1,
                                            selections: [{
                                                alias: null,
                                                args: null,
                                                concreteType: "ESAssetEventType",
                                                kind: "LinkedField",
                                                name: "lastSale",
                                                plural: !1,
                                                selections: [{
                                                    alias: null,
                                                    args: null,
                                                    concreteType: "AssetQuantityType",
                                                    kind: "LinkedField",
                                                    name: "unitPriceQuantity",
                                                    plural: !1,
                                                    selections: [{
                                                        alias: null,
                                                        args: null,
                                                        concreteType: "AssetType",
                                                        kind: "LinkedField",
                                                        name: "asset",
                                                        plural: !1,
                                                        selections: [an, b, E, {
                                                            alias: null,
                                                            args: null,
                                                            kind: "ScalarField",
                                                            name: "usdSpotPrice",
                                                            storageKey: null
                                                        }, {
                                                            alias: null,
                                                            args: null,
                                                            concreteType: "AssetContractType",
                                                            kind: "LinkedField",
                                                            name: "assetContract",
                                                            plural: !1,
                                                            selections: [M, w, P],
                                                            storageKey: null
                                                        }, P],
                                                        storageKey: null
                                                    }, {
                                                        alias: null,
                                                        args: null,
                                                        kind: "ScalarField",
                                                        name: "quantity",
                                                        storageKey: null
                                                    }, P],
                                                    storageKey: null
                                                }],
                                                storageKey: null
                                            }],
                                            storageKey: null
                                        }, B, {
                                            kind: "InlineFragment",
                                            selections: [tn, rn, b, sn, on, {
                                                alias: null,
                                                args: null,
                                                concreteType: "CollectionType",
                                                kind: "LinkedField",
                                                name: "collection",
                                                plural: !1,
                                                selections: [dn, P, v, L, cn, f, U, V, b, T],
                                                storageKey: null
                                            }, an, {
                                                alias: null,
                                                args: null,
                                                kind: "ScalarField",
                                                name: "favoritesCount",
                                                storageKey: null
                                            }, {
                                                alias: null,
                                                args: null,
                                                kind: "ScalarField",
                                                name: "isFrozen",
                                                storageKey: null
                                            }, {
                                                alias: null,
                                                args: null,
                                                kind: "ScalarField",
                                                name: "hasUnlockableContent",
                                                storageKey: null
                                            }, {
                                                alias: null,
                                                args: null,
                                                kind: "ScalarField",
                                                name: "tokenId",
                                                storageKey: null
                                            }, {
                                                alias: null,
                                                args: null,
                                                concreteType: "AssetContractType",
                                                kind: "LinkedField",
                                                name: "assetContract",
                                                plural: !1,
                                                selections: [x, w, P],
                                                storageKey: null
                                            }, {
                                                alias: null,
                                                args: null,
                                                concreteType: "ESOrderDataType",
                                                kind: "LinkedField",
                                                name: "orderData",
                                                plural: !1,
                                                selections: [{
                                                    alias: null,
                                                    args: null,
                                                    concreteType: "OrderV2Type",
                                                    kind: "LinkedField",
                                                    name: "bestAskV2",
                                                    plural: !1,
                                                    selections: [V, {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: "PriceType",
                                                        kind: "LinkedField",
                                                        name: "priceType",
                                                        plural: !1,
                                                        selections: un,
                                                        storageKey: null
                                                    }, {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: null,
                                                        kind: "LinkedField",
                                                        name: "item",
                                                        plural: !1,
                                                        selections: [R, B, yn, {
                                                            kind: "InlineFragment",
                                                            selections: [L, {
                                                                alias: null,
                                                                args: null,
                                                                concreteType: "AssetContractType",
                                                                kind: "LinkedField",
                                                                name: "assetContract",
                                                                plural: !1,
                                                                selections: [x, M, P],
                                                                storageKey: null
                                                            }, {
                                                                alias: null,
                                                                args: null,
                                                                concreteType: "CollectionType",
                                                                kind: "LinkedField",
                                                                name: "collection",
                                                                plural: !1,
                                                                selections: [L, T, v, U, P, dn],
                                                                storageKey: null
                                                            }, tn, rn, b, sn, on, an],
                                                            type: "AssetType",
                                                            abstractKey: null
                                                        }],
                                                        storageKey: null
                                                    }, {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: "PaymentAssetType",
                                                        kind: "LinkedField",
                                                        name: "payment",
                                                        plural: !1,
                                                        selections: [V],
                                                        storageKey: null
                                                    }, {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: "PriceType",
                                                        kind: "LinkedField",
                                                        name: "perUnitPriceType",
                                                        plural: !1,
                                                        selections: un,
                                                        storageKey: null
                                                    }, {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: "PriceType",
                                                        kind: "LinkedField",
                                                        name: "dutchAuctionFinalPriceType",
                                                        plural: !1,
                                                        selections: un,
                                                        storageKey: null
                                                    }, {
                                                        alias: null,
                                                        args: null,
                                                        kind: "ScalarField",
                                                        name: "remainingQuantityType",
                                                        storageKey: null
                                                    }],
                                                    storageKey: null
                                                }],
                                                storageKey: null
                                            }, {
                                                alias: null,
                                                args: null,
                                                concreteType: "RarityDataType",
                                                kind: "LinkedField",
                                                name: "defaultRarityData",
                                                plural: !1,
                                                selections: [{
                                                    alias: null,
                                                    args: null,
                                                    kind: "ScalarField",
                                                    name: "rank",
                                                    storageKey: null
                                                }, {
                                                    alias: null,
                                                    args: null,
                                                    kind: "ScalarField",
                                                    name: "rankPercentile",
                                                    storageKey: null
                                                }, D, P],
                                                storageKey: null
                                            }, I, {
                                                condition: "showContextMenu",
                                                kind: "Condition",
                                                passingValue: !0,
                                                selections: [{
                                                    alias: null,
                                                    args: null,
                                                    concreteType: "AccountType",
                                                    kind: "LinkedField",
                                                    name: "creator",
                                                    plural: !1,
                                                    selections: X,
                                                    storageKey: null
                                                }]
                                            }],
                                            type: "AssetType",
                                            abstractKey: null
                                        }, {
                                            kind: "InlineFragment",
                                            selections: [{
                                                alias: null,
                                                args: [{
                                                    kind: "Literal",
                                                    name: "first",
                                                    value: 18
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
                                                            selections: [V, tn, rn, b, sn, on, {
                                                                alias: null,
                                                                args: null,
                                                                concreteType: "CollectionType",
                                                                kind: "LinkedField",
                                                                name: "collection",
                                                                plural: !1,
                                                                selections: [dn, P],
                                                                storageKey: null
                                                            }, an, P],
                                                            storageKey: null
                                                        }, P],
                                                        storageKey: null
                                                    }],
                                                    storageKey: null
                                                }],
                                                storageKey: "assetQuantities(first:18)"
                                            }, {
                                                alias: null,
                                                args: null,
                                                kind: "ScalarField",
                                                name: "assetCount",
                                                storageKey: null
                                            }, {
                                                alias: "bundleCollection",
                                                args: null,
                                                concreteType: "CollectionType",
                                                kind: "LinkedField",
                                                name: "collection",
                                                plural: !1,
                                                selections: [v, L, cn, f, U, P, V],
                                                storageKey: null
                                            }, v],
                                            type: "AssetBundleType",
                                            abstractKey: null
                                        }, yn],
                                        storageKey: null
                                    }, q],
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "totalCount",
                                    storageKey: null
                                }, z],
                                storageKey: null
                            }, {
                                alias: "search",
                                args: H,
                                filters: ["collections", "isAutoHidden", "numericTraits", "paymentAssets", "resultType", "priceFilter", "querystring", "safelistRequestStatuses", "sortAscending", "sortBy", "stringTraits", "toggles", "prioritizeBuyNow", "rarityFilter"],
                                handle: "connection",
                                key: "AssetSearchCollection_search",
                                kind: "LinkedHandle",
                                name: "collectionItems"
                            }],
                            storageKey: null
                        }]
                    },
                    params: {
                        cacheID: "a56969d595bf8d530ce4221db7c15af3",
                        id: null,
                        metadata: {},
                        name: "CollectionPageQuery",
                        operationKind: "query",
                        text: "query CollectionPageQuery(\n  $collection: CollectionSlug!\n  $collections: [CollectionSlug!]\n  $numericTraits: [TraitRangeType!]\n  $query: String\n  $sortAscending: Boolean\n  $sortBy: SearchSortBy\n  $stringTraits: [TraitInputType!]\n  $toggles: [SearchToggle!]\n  $resultModel: SearchResultModel\n  $showContextMenu: Boolean!\n  $prioritizeBuyNow: Boolean\n) {\n  collection(collection: $collection) {\n    isCollectionOffersEnabled\n    verificationStatus\n    enabledRarities\n    ...CollectionPageHead_collection\n    ...CollectionPageLayout_collection\n    id\n  }\n  assets: query {\n    ...AssetSearchCollection_data_2ZxBTm\n  }\n}\n\nfragment AccountLink_data on AccountType {\n  address\n  config\n  isCompromised\n  user {\n    publicUsername\n    id\n  }\n  displayName\n  ...ProfileImage_data\n  ...wallet_accountKey\n  ...accounts_url\n}\n\nfragment AssetCardAddToCartButton_asset on AssetType {\n  tokenId\n  relayId\n  assetContract {\n    address\n    id\n  }\n  orderData {\n    bestAskV2 {\n      ...ShoppingCart_inline_order\n      id\n    }\n  }\n}\n\nfragment AssetCardBuyNow_data on AssetType {\n  tokenId\n  relayId\n  assetContract {\n    address\n    chain\n    id\n  }\n  orderData {\n    bestAskV2 {\n      relayId\n      priceType {\n        usd\n      }\n      id\n    }\n  }\n}\n\nfragment AssetContextMenu_data on AssetType {\n  ...asset_edit_url\n  ...asset_url\n  relayId\n  isDelisted\n  creator {\n    address\n    id\n  }\n  imageUrl\n}\n\nfragment AssetMediaAnimation_asset on AssetType {\n  ...AssetMediaImage_asset\n}\n\nfragment AssetMediaAudio_asset on AssetType {\n  backgroundColor\n  ...AssetMediaImage_asset\n}\n\nfragment AssetMediaContainer_asset_2V84VL on AssetType {\n  backgroundColor\n  ...AssetMediaEditions_asset_2V84VL\n}\n\nfragment AssetMediaEditions_asset_2V84VL on AssetType {\n  decimals\n}\n\nfragment AssetMediaImage_asset on AssetType {\n  backgroundColor\n  imageUrl\n  collection {\n    displayData {\n      cardDisplayStyle\n    }\n    id\n  }\n}\n\nfragment AssetMediaPlaceholderImage_asset on AssetType {\n  collection {\n    displayData {\n      cardDisplayStyle\n    }\n    id\n  }\n}\n\nfragment AssetMediaVideo_asset on AssetType {\n  backgroundColor\n  ...AssetMediaImage_asset\n}\n\nfragment AssetMediaWebgl_asset on AssetType {\n  backgroundColor\n  ...AssetMediaImage_asset\n}\n\nfragment AssetMedia_asset on AssetType {\n  animationUrl\n  displayImageUrl\n  imageUrl\n  isDelisted\n  ...AssetMediaAnimation_asset\n  ...AssetMediaAudio_asset\n  ...AssetMediaContainer_asset_2V84VL\n  ...AssetMediaImage_asset\n  ...AssetMediaPlaceholderImage_asset\n  ...AssetMediaVideo_asset\n  ...AssetMediaWebgl_asset\n}\n\nfragment AssetMedia_asset_2V84VL on AssetType {\n  animationUrl\n  displayImageUrl\n  imageUrl\n  isDelisted\n  ...AssetMediaAnimation_asset\n  ...AssetMediaAudio_asset\n  ...AssetMediaContainer_asset_2V84VL\n  ...AssetMediaImage_asset\n  ...AssetMediaPlaceholderImage_asset\n  ...AssetMediaVideo_asset\n  ...AssetMediaWebgl_asset\n}\n\nfragment AssetQuantity_data on AssetQuantityType {\n  asset {\n    ...Price_data\n    id\n  }\n  quantity\n}\n\nfragment AssetSearchCollection_data_2ZxBTm on Query {\n  queriedAt\n  ...AssetSearchFilter_data_PFx8Z\n  ...PhoenixSearchPills_data_2Kg4Sq\n  search: collectionItems(collections: $collections, first: 20, numericTraits: $numericTraits, resultType: $resultModel, querystring: $query, sortAscending: $sortAscending, sortBy: $sortBy, stringTraits: $stringTraits, toggles: $toggles, prioritizeBuyNow: $prioritizeBuyNow) {\n    edges {\n      node {\n        __typename\n        relayId\n        ...AssetSearchList_data_27d9G3\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n      cursor\n    }\n    totalCount\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment AssetSearchFilter_data_PFx8Z on Query {\n  collection(collection: $collection) {\n    numericTraits {\n      key\n      value {\n        max\n        min\n      }\n      ...NumericTraitFilter_data\n    }\n    stringTraits {\n      key\n      ...StringTraitFilter_data\n    }\n    defaultChain {\n      identifier\n    }\n    enabledRarities\n    statsV2 {\n      ...RarityFilter_data\n    }\n    id\n  }\n  ...PaymentFilter_data_2YoIWt\n}\n\nfragment AssetSearchList_data_27d9G3 on ItemType {\n  __isItemType: __typename\n  __typename\n  relayId\n  ...ItemCard_data_1OrK6u\n  ... on AssetType {\n    collection {\n      isVerified\n      relayId\n      id\n    }\n    ...SelectedAssetItem_data\n    ...asset_url\n  }\n  ... on AssetBundleType {\n    bundleCollection: collection {\n      isVerified\n      relayId\n      id\n    }\n  }\n  chain {\n    identifier\n  }\n}\n\nfragment CollectionLink_assetContract on AssetContractType {\n  address\n  blockExplorerLink\n}\n\nfragment CollectionLink_collection on CollectionType {\n  name\n  verificationStatus\n  ...collection_url\n}\n\nfragment CollectionPageHead_collection on CollectionType {\n  name\n  description\n  slug\n}\n\nfragment CollectionPageLayout_collection on CollectionType {\n  slug\n  name\n  imageUrl\n  bannerImageUrl\n  verificationStatus\n  owner {\n    ...AccountLink_data\n    id\n  }\n  representativeAsset {\n    assetContract {\n      openseaVersion\n      id\n    }\n    id\n  }\n  ...PhoenixCollectionActionBar_data\n  ...PhoenixCollectionInfo_data\n  ...PhoenixCollectionSocialBar_data\n}\n\nfragment CollectionWatchlistButton_data on CollectionType {\n  relayId\n}\n\nfragment ItemCardAnnotations_27d9G3 on ItemType {\n  __isItemType: __typename\n  relayId\n  ... on AssetType {\n    chain {\n      identifier\n    }\n    decimals\n    favoritesCount\n    isDelisted\n    isFrozen\n    hasUnlockableContent\n    ...AssetCardBuyNow_data\n    ...AssetCardAddToCartButton_asset\n    orderData {\n      bestAskV2 {\n        orderType\n        maker {\n          address\n          id\n        }\n        id\n      }\n    }\n    ...AssetContextMenu_data @include(if: $showContextMenu)\n  }\n  ... on AssetBundleType {\n    assetCount\n  }\n}\n\nfragment ItemCardContent_2V84VL on ItemType {\n  __isItemType: __typename\n  __typename\n  ... on AssetType {\n    relayId\n    name\n    ...AssetMedia_asset_2V84VL\n  }\n  ... on AssetBundleType {\n    assetQuantities(first: 18) {\n      edges {\n        node {\n          asset {\n            relayId\n            ...AssetMedia_asset\n            id\n          }\n          id\n        }\n      }\n    }\n  }\n}\n\nfragment ItemCardFooter_27d9G3 on ItemType {\n  __isItemType: __typename\n  name\n  orderData {\n    bestBidV2 {\n      orderType\n      priceType {\n        unit\n      }\n      ...PriceContainer_data\n      id\n    }\n    bestAskV2 {\n      orderType\n      priceType {\n        unit\n      }\n      maker {\n        address\n        id\n      }\n      ...PriceContainer_data\n      id\n    }\n  }\n  ...ItemMetadata\n  ...ItemCardAnnotations_27d9G3\n  ... on AssetType {\n    tokenId\n    isDelisted\n    defaultRarityData {\n      ...RarityIndicator_data\n      id\n    }\n    collection {\n      slug\n      name\n      isVerified\n      enabledRarities\n      ...collection_url\n      id\n    }\n  }\n  ... on AssetBundleType {\n    bundleCollection: collection {\n      slug\n      name\n      isVerified\n      enabledRarities\n      ...collection_url\n      id\n    }\n  }\n}\n\nfragment ItemCard_data_1OrK6u on ItemType {\n  __isItemType: __typename\n  __typename\n  relayId\n  orderData {\n    bestAskV2 {\n      priceType {\n        eth\n      }\n      id\n    }\n  }\n  ...ItemCardContent_2V84VL\n  ...ItemCardFooter_27d9G3\n  ...item_url\n  ... on AssetType {\n    isDelisted\n    ...itemEvents_data\n  }\n}\n\nfragment ItemMetadata on ItemType {\n  __isItemType: __typename\n  __typename\n  orderData {\n    bestAskV2 {\n      closedAt\n      id\n    }\n  }\n  assetEventData {\n    lastSale {\n      unitPriceQuantity {\n        ...AssetQuantity_data\n        id\n      }\n    }\n  }\n}\n\nfragment NumericTraitFilter_data on NumericTraitTypePair {\n  key\n  value {\n    max\n    min\n  }\n}\n\nfragment OrderListItem_order on OrderV2Type {\n  relayId\n  item {\n    __typename\n    ... on AssetType {\n      __typename\n      name\n      assetContract {\n        ...CollectionLink_assetContract\n        id\n      }\n      collection {\n        name\n        ...CollectionLink_collection\n        id\n      }\n      ...AssetMedia_asset\n    }\n    ... on AssetBundleType {\n      __typename\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  remainingQuantityType\n  ...OrderPrice\n  ...OrderUsdPrice\n}\n\nfragment OrderList_orders on OrderV2Type {\n  relayId\n  ...OrderListItem_order\n}\n\nfragment OrderPrice on OrderV2Type {\n  priceType {\n    unit\n  }\n  perUnitPriceType {\n    unit\n  }\n  dutchAuctionFinalPriceType {\n    unit\n  }\n  openedAt\n  closedAt\n  payment {\n    ...TokenPricePayment\n    id\n  }\n}\n\nfragment OrderUsdPrice on OrderV2Type {\n  priceType {\n    usd\n  }\n  perUnitPriceType {\n    usd\n  }\n  dutchAuctionFinalPriceType {\n    usd\n  }\n  openedAt\n  closedAt\n}\n\nfragment PaymentAssetLogo_data on PaymentAssetType {\n  chain {\n    identifier\n  }\n  symbol\n  asset {\n    imageUrl\n    id\n  }\n}\n\nfragment PaymentFilter_data_2YoIWt on Query {\n  paymentAssets(first: 10) {\n    edges {\n      node {\n        symbol\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  PaymentFilter_collection: collection(collection: $collection) {\n    paymentAssets {\n      symbol\n      id\n    }\n    id\n  }\n}\n\nfragment PhoenixCollectionActionBar_data on CollectionType {\n  relayId\n  assetContracts(first: 2) {\n    edges {\n      node {\n        address\n        blockExplorerLink\n        chain\n        chainData {\n          blockExplorer {\n            name\n            identifier\n          }\n        }\n        id\n      }\n    }\n  }\n  discordUrl\n  externalUrl\n  instagramUsername\n  mediumUsername\n  telegramUrl\n  twitterUsername\n  connectedTwitterUsername\n  ...collection_url\n  ...CollectionWatchlistButton_data\n}\n\nfragment PhoenixCollectionInfo_data on CollectionType {\n  isCollectionOffersEnabled\n  description\n  name\n  nativePaymentAsset {\n    ...PaymentAssetLogo_data\n    id\n  }\n  ...collection_url\n  ...collection_stats\n}\n\nfragment PhoenixCollectionSocialBar_data on CollectionType {\n  assetContracts(first: 2) {\n    edges {\n      node {\n        address\n        blockExplorerLink\n        chain\n        chainData {\n          blockExplorer {\n            name\n            identifier\n          }\n        }\n        id\n      }\n    }\n  }\n  discordUrl\n  externalUrl\n  instagramUsername\n  mediumUsername\n  telegramUrl\n  twitterUsername\n  connectedTwitterUsername\n  connectedInstagramUsername\n  ...collection_url\n}\n\nfragment PhoenixSearchPills_data_2Kg4Sq on Query {\n  selectedCollections: collections(first: 25, collections: $collections, includeHidden: true) {\n    edges {\n      node {\n        imageUrl\n        name\n        slug\n        id\n      }\n    }\n  }\n}\n\nfragment PriceContainer_data on OrderV2Type {\n  ...OrderPrice\n}\n\nfragment Price_data on AssetType {\n  decimals\n  imageUrl\n  symbol\n  usdSpotPrice\n  assetContract {\n    blockExplorerLink\n    chain\n    id\n  }\n}\n\nfragment ProfileImage_data on AccountType {\n  imageUrl\n}\n\nfragment RarityFilter_data on CollectionStatsV2Type {\n  totalSupply\n}\n\nfragment RarityIndicator_data on RarityDataType {\n  rank\n  rankPercentile\n  totalSupply\n}\n\nfragment SelectedAssetItem_data on AssetType {\n  collection {\n    imageUrl\n    name\n    verificationStatus\n    id\n  }\n  imageUrl\n  displayName\n  relayId\n  ...asset_url\n}\n\nfragment ShoppingCartDetailedView_orders on OrderV2Type {\n  ...useTotalPrice_orders\n  ...OrderList_orders\n}\n\nfragment ShoppingCartFooter_orders on OrderV2Type {\n  ...useTotalPrice_orders\n  ...ShoppingCartDetailedView_orders\n}\n\nfragment ShoppingCart_inline_order on OrderV2Type {\n  relayId\n  item {\n    __typename\n    chain {\n      identifier\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  payment {\n    relayId\n    id\n  }\n  ...ShoppingCartDetailedView_orders\n  ...ShoppingCartFooter_orders\n}\n\nfragment StringTraitFilter_data on StringTraitType {\n  counts {\n    count\n    value\n  }\n  key\n}\n\nfragment TokenPricePayment on PaymentAssetType {\n  symbol\n  chain {\n    identifier\n  }\n  asset {\n    imageUrl\n    assetContract {\n      blockExplorerLink\n      id\n    }\n    id\n  }\n}\n\nfragment accounts_url on AccountType {\n  address\n  user {\n    publicUsername\n    id\n  }\n}\n\nfragment asset_edit_url on AssetType {\n  assetContract {\n    address\n    chain\n    id\n  }\n  tokenId\n  collection {\n    slug\n    id\n  }\n}\n\nfragment asset_url on AssetType {\n  assetContract {\n    address\n    id\n  }\n  tokenId\n  chain {\n    identifier\n  }\n}\n\nfragment bundle_url on AssetBundleType {\n  slug\n  chain {\n    identifier\n  }\n}\n\nfragment collection_stats on CollectionType {\n  statsV2 {\n    numOwners\n    totalSupply\n    totalVolume {\n      unit\n    }\n    floorPrice {\n      unit\n    }\n  }\n  collectionOffers(first: 1) {\n    edges {\n      node {\n        priceType {\n          eth\n        }\n        id\n      }\n    }\n  }\n}\n\nfragment collection_url on CollectionType {\n  slug\n  isCategory\n}\n\nfragment itemEvents_data on AssetType {\n  relayId\n  assetContract {\n    address\n    id\n  }\n  tokenId\n  chain {\n    identifier\n  }\n}\n\nfragment item_url on ItemType {\n  __isItemType: __typename\n  __typename\n  ... on AssetType {\n    ...asset_url\n  }\n  ... on AssetBundleType {\n    ...bundle_url\n  }\n}\n\nfragment useTotalPrice_orders on OrderV2Type {\n  relayId\n  perUnitPriceType {\n    usd\n    unit\n  }\n  dutchAuctionFinalPriceType {\n    usd\n    unit\n  }\n  openedAt\n  closedAt\n  payment {\n    symbol\n    id\n  }\n}\n\nfragment wallet_accountKey on AccountType {\n  address\n}\n"
                    }
                }
            }();
            a.hash = "58c5fe7144fc83548e04f536f41c9a4a", e.default = a
        },
        45635: function(n, e, l) {
            "use strict";
            l.r(e), l.d(e, {
                default: function() {
                    return K
                }
            });
            var a = l(23842),
                t = l(85034),
                i = l(3204),
                r = l(35230),
                s = l.n(r),
                o = l(24246),
                d = l(27378),
                c = l(86677),
                u = l.n(c),
                y = l(80585),
                m = l(40325),
                g = l(96150),
                p = l(68283),
                k = l(92941),
                T = l(53034),
                f = l(93580),
                _ = l(86676),
                C = (l(59809), l(13309)),
                h = l(70884),
                A = l(46323),
                F = l(46802),
                S = function(n) {
                    var e, l, a, t, r = n.data,
                        s = n.variables,
                        c = n.assetCardVariant,
                        u = (0, d.useState)(c),
                        C = u[0],
                        h = u[1],
                        S = !!(null === r || void 0 === r || null === (e = r.collection) || void 0 === e ? void 0 : e.isCollectionOffersEnabled),
                        K = (0, f.d)().isOpen;
                    return (0, T.v)(), (0, d.useEffect)((function() {
                        var n;
                        (null === r || void 0 === r || null === (n = r.collection) || void 0 === n ? void 0 : n.verificationStatus) && (0, _.k_)({
                            tab: void 0,
                            collectionSlug: s.collection,
                            verificationStatus: r.collection.verificationStatus,
                            enabledRarities: (0, i.Z)(r.collection.enabledRarities)
                        })
                    }), [null === r || void 0 === r || null === (l = r.collection) || void 0 === l ? void 0 : l.verificationStatus, null === r || void 0 === r || null === (a = r.collection) || void 0 === a ? void 0 : a.enabledRarities, s.collection]), (0, o.jsx)(p.d, {
                        initialSidebarOpen: !0,
                        children: (0, o.jsxs)(m.v, {
                            hideFooter: !0,
                            children: [(0, o.jsx)(A.Z, {
                                dataKey: null === r || void 0 === r ? void 0 : r.collection
                            }), (0, o.jsxs)(g.k, {
                                children: [(0, o.jsx)(F.r, {
                                    dataKey: null === r || void 0 === r ? void 0 : r.collection,
                                    children: (0, o.jsx)(y.dW, {
                                        cardVariant: C,
                                        data: null !== (t = null === r || void 0 === r ? void 0 : r.assets) && void 0 !== t ? t : null,
                                        defaultState: {
                                            resultModel: "ASSETS"
                                        },
                                        fixedState: {
                                            collection: s.collection,
                                            collections: s.collections
                                        },
                                        initialState: s,
                                        resultsClassName: "collection--results",
                                        setCardVariant: h,
                                        showMakeOfferButton: S
                                    })
                                }), K && (0, o.jsx)(k.J, {})]
                            })]
                        })
                    })
                };
            S.query = l(50847), S.cachePolicy = {
                maxAge: 10,
                revalidate: 20
            }, S.getInitialProps = C.Z.nextParser({
                collectionSlug: C.Z.string,
                search: C.Z.Optional(C.Z.Search)
            }, function() {
                var n = (0, a.Z)(s().mark((function n(e, l) {
                    var a, i, r;
                    return s().wrap((function(n) {
                        for (;;) switch (n.prev = n.next) {
                            case 0:
                                return a = e.collectionSlug, i = e.search, (h.h[a] || h.aA.find((function(n) {
                                    return n.slug === a
                                }))) && (r = "/category/".concat(a), l.res ? (l.res.writeHead(302, {
                                    Location: r
                                }), l.res.end()) : u().push(r)), n.abrupt("return", {
                                    assetCardVariant: (0, y.tV)(l),
                                    variables: (0, t.Z)({
                                        collection: a,
                                        collections: [a],
                                        showContextMenu: !0,
                                        sortBy: "UNIT_PRICE",
                                        sortAscending: !0,
                                        resultModel: "ASSETS",
                                        includeCollectionFilter: !1,
                                        prioritizeBuyNow: !0
                                    }, i)
                                });
                            case 4:
                            case "end":
                                return n.stop()
                        }
                    }), n)
                })));
                return function(e, l) {
                    return n.apply(this, arguments)
                }
            }());
            var K = S
        }
    },
    function(n) {
        n.O(0, [49774, 48891, 50114, 44833, 28263, 66391, 19969, 71736, 31523, 57334, 3405, 25459, 5371, 40237, 60354, 4459, 13056, 11424, 39653, 57063, 96521, 61793, 45890, 88515, 90186, 59476, 80585, 99807, 92888, 40179], (function() {
            return e = 84966, n(n.s = e);
            var e
        }));
        var e = n.O();
        _N_E = e
    }
]);
//# sourceMappingURL=[collectionSlug]-26679c1d9aea1a39.js.map