"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [99807], {
        46323: function(l, e, n) {
            n.d(e, {
                Z: function() {
                    return c
                }
            });
            var a = n(24246),
                i = (n(27378), n(4402)),
                t = n(59533),
                r = n(6300),
                s = n(24736),
                o = n(70884),
                c = function(l) {
                    var e = l.dataKey,
                        c = (0, r.q)("collections"),
                        u = (0, i.useFragment)(n(80687), null !== e && void 0 !== e ? e : null),
                        d = u ? "".concat(s.N("ogImagesPreviewUrl"), "/v1/collections/").concat(u.slug) : o.YS,
                        g = c("page.collectionSuffix", "Collection");
                    return (0, a.jsx)(t.k, {
                        description: (null === u || void 0 === u ? void 0 : u.description) || "",
                        image: d,
                        title: (0, t.t)((null === u || void 0 === u ? void 0 : u.name) ? "".concat(u.name, " - ").concat(g) : g)
                    })
                }
        },
        46802: function(l, e, n) {
            n.d(e, {
                r: function() {
                    return q
                }
            });
            var a = n(24246),
                i = n(27378),
                t = n(4402),
                r = n(82167),
                s = n(75110),
                o = n(47892),
                c = n(16611),
                u = n(6300),
                d = n(59809),
                g = n(87291),
                m = n(66079),
                p = n(70884),
                y = n(6222),
                k = function(l) {
                    var e = l.isEditable,
                        r = l.isMintable,
                        s = l.data,
                        k = l.slug,
                        f = (0, u.q)("phoenix"),
                        h = (0, o.Fg)(),
                        v = (0, t.useFragment)(n(70461), s),
                        F = v ? (0, d.v$)(v.assetContracts) : null,
                        x = 1 === (null === F || void 0 === F ? void 0 : F.length) ? F[0] : void 0,
                        b = v || {},
                        K = b.discordUrl,
                        T = b.instagramUsername,
                        S = b.mediumUsername,
                        w = b.twitterUsername,
                        C = b.telegramUrl,
                        L = b.externalUrl,
                        j = b.connectedTwitterUsername,
                        U = "light" === h.type ? "charcoal" : "fog",
                        E = (0, i.useMemo)((function() {
                            var l = [{
                                url: L,
                                icon: (0, g.Q)({
                                    name: "website",
                                    fill: U
                                }),
                                tooltip: "Website"
                            }, {
                                url: K,
                                icon: (0, g.Q)({
                                    name: "discord",
                                    fill: U
                                }),
                                tooltip: "Discord"
                            }, {
                                url: S && "https://www.medium.com/@".concat(S),
                                icon: (0, g.Q)({
                                    name: "medium",
                                    fill: U
                                }),
                                tooltip: "Medium"
                            }, {
                                url: C,
                                icon: (0, g.Q)({
                                    name: "telegram",
                                    fill: U
                                }),
                                tooltip: "Telegram"
                            }, {
                                url: T && "https://www.instagram.com/".concat((0, m.oV)(T)),
                                icon: (0, g.Q)({
                                    name: "instagram",
                                    fill: U
                                }),
                                tooltip: "Instagram"
                            }];
                            if (x) {
                                var e = x.chainData.blockExplorer.identifier;
                                "POLYGONSCAN" === e && (e = "POLYGONSCAN_FILLED"), l.unshift({
                                    url: x.blockExplorerLink,
                                    icon: (0, g.Q)({
                                        name: e,
                                        fill: U
                                    }),
                                    tooltip: f("actionBar.viewOn", "View on {{blockExplorer}}", {
                                        blockExplorer: x.chainData.blockExplorer.name
                                    })
                                })
                            }
                            return j ? l.push({
                                url: j && "https://www.twitter.com/".concat(j),
                                icon: (0, g.Q)({
                                    name: "twitter",
                                    fill: U
                                }),
                                tooltip: (0, a.jsxs)(a.Fragment, {
                                    children: [(0, a.jsx)("div", {
                                        children: "Twitter"
                                    }), (0, a.jsx)(c.WX, {
                                        as: "span",
                                        variant: "small",
                                        children: p.yc
                                    })]
                                })
                            }) : w && l.push({
                                url: w && "https://www.twitter.com/".concat(w),
                                icon: (0, g.Q)({
                                    name: "twitter",
                                    fill: U
                                }),
                                tooltip: "Twitter"
                            }), l.filter((function(l) {
                                return !!l.url
                            }))
                        }), [x, L, w, j, T, C, S, K, U, f]);
                    if (!v || !k) return null;
                    return (0, a.jsx)(y.I, {
                        collectionUrlDataKey: v,
                        collectionWatchlistDataKey: v,
                        isEditable: e,
                        isMintable: r,
                        relayId: v.relayId,
                        slug: k,
                        socialData: E,
                        toggleMoreDropdown: function() {
                            return null
                        },
                        variant: "collection"
                    })
                },
                f = n(85034),
                h = n(70169),
                v = n(53585),
                F = n(96150),
                x = n(72363),
                b = n(72686),
                K = n(23176),
                T = n(78439),
                S = n(28828),
                w = n(24328),
                C = function(l) {
                    var e = l.dataKey,
                        i = (0, u.q)("phoenix"),
                        r = (0, t.useFragment)(n(39338), e);
                    if (!r) return (0, a.jsxs)(F.k, {
                        flexDirection: "column",
                        children: [(0, a.jsx)(v.g, {
                            marginTop: "8px",
                            children: (0, a.jsx)(b.O.Line, {
                                height: "36px",
                                width: "350px"
                            })
                        }), (0, a.jsx)(x.pU, {
                            greaterThanOrEqual: "sm",
                            children: (0, a.jsx)(v.g, {
                                marginTop: "8px",
                                children: (0, a.jsx)(b.O.Line, {
                                    height: "51px",
                                    width: "350px"
                                })
                            })
                        }), (0, a.jsxs)(x.pU, {
                            lessThan: "sm",
                            children: [(0, a.jsx)(v.g, {
                                marginTop: "8px",
                                children: (0, a.jsx)(b.O.Line, {
                                    height: "51px",
                                    width: "350px"
                                })
                            }), (0, a.jsx)(v.g, {
                                marginTop: "8px",
                                children: (0, a.jsx)(b.O.Line, {
                                    height: "51px",
                                    width: "350px"
                                })
                            })]
                        })]
                    });
                    var s = r.description,
                        o = r.name,
                        c = r.nativePaymentAsset,
                        d = r.isCollectionOffersEnabled,
                        g = (0, K.Az)(r),
                        m = g.items,
                        y = g.owners,
                        k = g.floor,
                        C = g.volume,
                        L = g.offer,
                        j = T.Z.getQueryParams(),
                        U = T.Z.stringifyQueryParams({
                            search: (0, h.Z)((0, f.Z)({}, j.search), {
                                sortAscending: !0,
                                sortBy: "UNIT_PRICE",
                                toggles: ["BUY_NOW"]
                            })
                        }),
                        E = T.Z.stringifyQueryParams({
                            search: {
                                eventTypes: ["COLLECTION_OFFER"]
                            }
                        }),
                        I = {
                            text: null !== s && void 0 !== s ? s : i("collectionInfo.welcome", "Welcome to the home of {{name}} on OpenSea. Discover the best items in this collection.", {
                                name: o
                            }),
                            mobileLines: 1,
                            desktopLines: 1,
                            details: [{
                                label: "items",
                                number: m,
                                testId: "collection-stats-items",
                                onClick: function() {
                                    var l = document.getElementById(S.jh);
                                    l && window.scrollTo({
                                        top: l.getBoundingClientRect().top
                                    })
                                }
                            }, {
                                label: "owners",
                                number: y,
                                url: "".concat((0, K.vg)(r), "/activity"),
                                testId: "collection-stats-owners"
                            }, {
                                label: "total volume",
                                number: C,
                                logo: c,
                                url: "".concat((0, K.vg)(r), "/activity"),
                                testId: "collection-stats-vol"
                            }, {
                                label: "floor price",
                                number: k,
                                logo: k === p.Zx ? null : c,
                                url: "".concat((0, K.vg)(r)).concat(U),
                                testId: "collection-stats-fp"
                            }]
                        };
                    return d && I.details.push({
                        label: "best offer",
                        number: L,
                        logo: L === p.Zx ? null : c,
                        url: "".concat((0, K.vg)(r), "/activity").concat(E),
                        testId: "collection-stats-bo"
                    }), (0, a.jsx)(w.t, (0, f.Z)({}, I))
                },
                L = n(20225),
                j = n(40869),
                U = n(41313),
                E = function(l) {
                    var e = l.data,
                        r = (0, u.q)("phoenix"),
                        s = (0, L.Fg)().theme,
                        o = (0, t.useFragment)(n(80260), e || null),
                        y = o ? (0, d.v$)(o.assetContracts) : null,
                        k = y && 1 === y.length ? y[0] : void 0,
                        f = o || {},
                        h = f.discordUrl,
                        F = f.instagramUsername,
                        x = f.mediumUsername,
                        K = f.twitterUsername,
                        T = f.telegramUrl,
                        S = f.externalUrl,
                        w = f.connectedTwitterUsername,
                        C = f.connectedInstagramUsername,
                        E = "light" === s ? "charcoal" : "fog",
                        I = (0, i.useMemo)((function() {
                            var l = [{
                                url: S,
                                icon: (0, g.Q)({
                                    name: "website",
                                    fill: E
                                }),
                                tooltip: "Website"
                            }, {
                                url: h,
                                icon: (0, g.Q)({
                                    name: "discord",
                                    fill: E
                                }),
                                tooltip: "Discord"
                            }, {
                                url: x && "https://www.medium.com/@".concat(x),
                                icon: (0, g.Q)({
                                    name: "medium",
                                    fill: E
                                }),
                                tooltip: "Medium"
                            }, {
                                url: T,
                                icon: (0, g.Q)({
                                    name: "telegram",
                                    fill: E
                                }),
                                tooltip: "Telegram"
                            }];
                            if (k) {
                                var e = k.chainData.blockExplorer.identifier;
                                "POLYGONSCAN" === e && (e = "POLYGONSCAN_FILLED"), l.unshift({
                                    url: k.blockExplorerLink,
                                    icon: (0, g.Q)({
                                        name: e,
                                        fill: E
                                    }),
                                    tooltip: (0, a.jsxs)(a.Fragment, {
                                        children: [(0, a.jsx)("div", {
                                            children: r("socialBar.viewOn", "View on {{blockExplorer}}", {
                                                blockExplorer: k.chainData.blockExplorer.name
                                            })
                                        }), (0, a.jsx)(c.WX, {
                                            as: "span",
                                            variant: "small",
                                            children: (0, j.FP)(k.address)
                                        })]
                                    })
                                })
                            }
                            return C ? l.push({
                                url: C && "https://www.instagram.com/".concat((0, m.oV)(C)),
                                icon: (0, g.Q)({
                                    name: "instagram",
                                    fill: E
                                }),
                                tooltip: (0, a.jsxs)(a.Fragment, {
                                    children: [(0, a.jsx)("div", {
                                        children: "Instagram"
                                    }), C && (0, a.jsx)(c.WX, {
                                        as: "span",
                                        variant: "small",
                                        children: p.yc
                                    })]
                                })
                            }) : F && l.push({
                                url: F && "https://www.instagram.com/".concat((0, m.oV)(F)),
                                icon: (0, g.Q)({
                                    name: "instagram",
                                    fill: E
                                }),
                                tooltip: "Instagram"
                            }), w ? l.push({
                                url: w && "https://www.twitter.com/".concat(w),
                                icon: (0, g.Q)({
                                    name: "twitter",
                                    fill: E
                                }),
                                tooltip: (0, a.jsxs)(a.Fragment, {
                                    children: [(0, a.jsx)("div", {
                                        children: "Twitter"
                                    }), w && (0, a.jsx)(c.WX, {
                                        as: "span",
                                        variant: "small",
                                        children: p.yc
                                    })]
                                })
                            }) : K && l.push({
                                url: K && "https://www.twitter.com/".concat(K),
                                icon: (0, g.Q)({
                                    name: "twitter",
                                    fill: E
                                }),
                                tooltip: "Twitter"
                            }), l.filter((function(l) {
                                return !!l.url
                            }))
                        }), [k, S, K, w, C, F, T, x, h, E, r]);
                    return o ? 0 === I.length ? (0, a.jsx)(v.g, {
                        marginTop: {
                            _: "-20px",
                            sm: "-24px"
                        }
                    }) : (0, a.jsx)(U.B, {
                        items: I
                    }) : (0, a.jsx)(b.O.Row, {
                        marginLeft: "12px",
                        children: (0, a.jsx)(b.O.Line, {
                            height: "44px",
                            width: "200px"
                        })
                    })
                },
                I = n(41326),
                D = n(21835),
                O = n(50301),
                A = n(83921),
                P = n(17645),
                Q = n(47366),
                _ = n(3204),
                B = n(83989),
                N = n(84762),
                V = n(88747),
                W = [{
                    id: void 0,
                    label: "Items"
                }, {
                    id: "orderbook",
                    label: "Orderbook",
                    path: "/orderbook"
                }, {
                    id: "analytics",
                    label: "Analytics",
                    path: "/analytics"
                }, {
                    id: "activity",
                    label: "Activity",
                    path: "/activity"
                }];

            function Z(l) {
                var e = l.slug,
                    n = l.currentTab,
                    i = l.isLoading,
                    t = (0, V.Hp)() ? (0, _.Z)(W) : W.filter((function(l) {
                        return "analytics" !== l.id && "orderbook" !== l.id
                    }));
                return (0, a.jsx)(B.t, {
                    alignItems: "center",
                    children: (0, a.jsx)(N.n, {
                        baseUrl: "/collection/".concat(e),
                        currentTab: n,
                        isLoading: i,
                        tabs: t
                    })
                })
            }
            var q = function(l) {
                var e, i, o, c, d, g = l.dataKey,
                    m = l.tab,
                    p = l.children,
                    y = (0, u.q)("collections"),
                    f = (0, t.useFragment)(n(75053), null !== g && void 0 !== g ? g : null),
                    h = (0, s.W)({
                        slug: null === f || void 0 === f ? void 0 : f.slug
                    }),
                    v = Boolean(!(null === f || void 0 === f ? void 0 : f.representativeAsset) || f.representativeAsset.assetContract.openseaVersion),
                    F = (null === f || void 0 === f ? void 0 : f.owner) && (0, Q.N)(f.verificationStatus);
                return (0, a.jsx)(A.P, {
                    actionBar: (0, a.jsx)(k, {
                        data: f,
                        isEditable: h,
                        isMintable: v,
                        slug: null === f || void 0 === f ? void 0 : f.slug
                    }),
                    banner: (0, a.jsx)(O.bR, {
                        altText: null !== (e = null === f || void 0 === f ? void 0 : f.name) && void 0 !== e ? e : y("layout.heroBannerAlt", "Collection banner"),
                        bannerImageUrl: null === f || void 0 === f ? void 0 : f.bannerImageUrl
                    }),
                    content: p,
                    header: (0, a.jsx)(I.A, {
                        headerText: null !== (i = null === f || void 0 === f ? void 0 : f.name) && void 0 !== i ? i : "",
                        isLoading: !f,
                        verificationStatus: null === f || void 0 === f ? void 0 : f.verificationStatus
                    }),
                    image: (0, a.jsx)(D.K, {
                        altText: null !== (o = null === f || void 0 === f ? void 0 : f.name) && void 0 !== o ? o : y("layout.photoAlt", "Collection photo"),
                        imageUrl: null !== (c = null === f || void 0 === f ? void 0 : f.imageUrl) && void 0 !== c ? c : "",
                        variant: "collection"
                    }),
                    info: (0, a.jsx)(C, {
                        dataKey: f
                    }),
                    socialBar: (0, a.jsx)(E, {
                        data: f
                    }),
                    subheader: (0, a.jsx)(P.w, {
                        accountLink: F ? (0, a.jsx)(r.e, {
                            dataKey: f.owner,
                            iconSize: 32,
                            isCreator: !0,
                            variant: "no-image"
                        }) : null,
                        isLoading: !f
                    }),
                    tabs: (0, a.jsx)(Z, {
                        currentTab: m,
                        isLoading: !f,
                        slug: null !== (d = null === f || void 0 === f ? void 0 : f.slug) && void 0 !== d ? d : ""
                    })
                })
            }
        },
        75110: function(l, e, n) {
            n.d(e, {
                W: function() {
                    return t
                }
            });
            var a = n(52050),
                i = (n(4402), n(47748)),
                t = function(l) {
                    var e = l.slug,
                        t = (0, a.Z)((0, i.i)(n(95549), {
                            collection: e
                        }, {
                            skip: !e
                        }), 1)[0],
                        r = null === t || void 0 === t ? void 0 : t.collection;
                    return !!(null === r || void 0 === r ? void 0 : r.isEditable)
                }
        },
        80687: function(l, e, n) {
            n.r(e);
            var a = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "CollectionPageHead_collection",
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
                    name: "description",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "slug",
                    storageKey: null
                }],
                type: "CollectionType",
                abstractKey: null,
                hash: "346fb47bb0b92524c17eb3b6cee57cab"
            };
            e.default = a
        },
        75053: function(l, e, n) {
            n.r(e);
            var a = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "CollectionPageLayout_collection",
                selections: [{
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "slug",
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
                    name: "imageUrl",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "bannerImageUrl",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "verificationStatus",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    concreteType: "AccountType",
                    kind: "LinkedField",
                    name: "owner",
                    plural: !1,
                    selections: [{
                        args: null,
                        kind: "FragmentSpread",
                        name: "AccountLink_data"
                    }],
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
                        }],
                        storageKey: null
                    }],
                    storageKey: null
                }, {
                    args: null,
                    kind: "FragmentSpread",
                    name: "PhoenixCollectionActionBar_data"
                }, {
                    args: null,
                    kind: "FragmentSpread",
                    name: "PhoenixCollectionInfo_data"
                }, {
                    args: null,
                    kind: "FragmentSpread",
                    name: "PhoenixCollectionSocialBar_data"
                }],
                type: "CollectionType",
                abstractKey: null,
                hash: "1e431f5442910b5fe4aae6c9ed70bfce"
            };
            e.default = a
        },
        70461: function(l, e, n) {
            n.r(e);
            var a = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "PhoenixCollectionActionBar_data",
                selections: [{
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "relayId",
                    storageKey: null
                }, {
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
                            selections: [{
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "address",
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "blockExplorerLink",
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "chain",
                                storageKey: null
                            }, {
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
                                        name: "identifier",
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
                }, {
                    kind: "InlineDataFragmentSpread",
                    name: "collection_url",
                    selections: [{
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "slug",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "isCategory",
                        storageKey: null
                    }],
                    args: null,
                    argumentDefinitions: []
                }, {
                    args: null,
                    kind: "FragmentSpread",
                    name: "CollectionWatchlistButton_data"
                }],
                type: "CollectionType",
                abstractKey: null,
                hash: "60526616a7d1cabdba13c7938a95d319"
            };
            e.default = a
        },
        39338: function(l, e, n) {
            n.r(e);
            var a = function() {
                var l = [{
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "unit",
                    storageKey: null
                }];
                return {
                    argumentDefinitions: [],
                    kind: "Fragment",
                    metadata: null,
                    name: "PhoenixCollectionInfo_data",
                    selections: [{
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "isCollectionOffersEnabled",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "description",
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
                        concreteType: "PaymentAssetType",
                        kind: "LinkedField",
                        name: "nativePaymentAsset",
                        plural: !1,
                        selections: [{
                            args: null,
                            kind: "FragmentSpread",
                            name: "PaymentAssetLogo_data"
                        }],
                        storageKey: null
                    }, {
                        kind: "InlineDataFragmentSpread",
                        name: "collection_url",
                        selections: [{
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "slug",
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "isCategory",
                            storageKey: null
                        }],
                        args: null,
                        argumentDefinitions: []
                    }, {
                        kind: "InlineDataFragmentSpread",
                        name: "collection_stats",
                        selections: [{
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
                            }, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "totalSupply",
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                concreteType: "PriceType",
                                kind: "LinkedField",
                                name: "totalVolume",
                                plural: !1,
                                selections: l,
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                concreteType: "PriceType",
                                kind: "LinkedField",
                                name: "floorPrice",
                                plural: !1,
                                selections: l,
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
                                        selections: [{
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "eth",
                                            storageKey: null
                                        }],
                                        storageKey: null
                                    }],
                                    storageKey: null
                                }],
                                storageKey: null
                            }],
                            storageKey: "collectionOffers(first:1)"
                        }],
                        args: null,
                        argumentDefinitions: []
                    }],
                    type: "CollectionType",
                    abstractKey: null
                }
            }();
            a.hash = "272830fecd1a3c9bd7613f4cb6aa7700", e.default = a
        },
        80260: function(l, e, n) {
            n.r(e);
            var a = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "PhoenixCollectionSocialBar_data",
                selections: [{
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
                            selections: [{
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "address",
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "blockExplorerLink",
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "chain",
                                storageKey: null
                            }, {
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
                                        name: "identifier",
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
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "connectedInstagramUsername",
                    storageKey: null
                }, {
                    kind: "InlineDataFragmentSpread",
                    name: "collection_url",
                    selections: [{
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "slug",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "isCategory",
                        storageKey: null
                    }],
                    args: null,
                    argumentDefinitions: []
                }],
                type: "CollectionType",
                abstractKey: null,
                hash: "9d8760ec69c1a710bb07c289a0c58759"
            };
            e.default = a
        },
        95549: function(l, e, n) {
            n.r(e);
            var a = function() {
                var l = [{
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "collection"
                    }],
                    e = [{
                        kind: "Variable",
                        name: "collection",
                        variableName: "collection"
                    }],
                    n = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "isEditable",
                        storageKey: null
                    };
                return {
                    fragment: {
                        argumentDefinitions: l,
                        kind: "Fragment",
                        metadata: null,
                        name: "useIsEditableQuery",
                        selections: [{
                            alias: null,
                            args: e,
                            concreteType: "CollectionType",
                            kind: "LinkedField",
                            name: "collection",
                            plural: !1,
                            selections: [n],
                            storageKey: null
                        }],
                        type: "Query",
                        abstractKey: null
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: l,
                        kind: "Operation",
                        name: "useIsEditableQuery",
                        selections: [{
                            alias: null,
                            args: e,
                            concreteType: "CollectionType",
                            kind: "LinkedField",
                            name: "collection",
                            plural: !1,
                            selections: [n, {
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
                        cacheID: "f9bc9272e5ae7706939fe76e4f4f3561",
                        id: null,
                        metadata: {},
                        name: "useIsEditableQuery",
                        operationKind: "query",
                        text: "query useIsEditableQuery(\n  $collection: CollectionSlug!\n) {\n  collection(collection: $collection) {\n    isEditable\n    id\n  }\n}\n"
                    }
                }
            }();
            a.hash = "c9213e59c938de60d4452ecdecd55f34", e.default = a
        }
    }
]);
//# sourceMappingURL=99807-dbf4b473a653877a.js.map