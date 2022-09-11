"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7428], {
        86304: function(e, n, t) {
            var a, r;
            t.d(n, {
                    E: function() {
                        return r
                    },
                    N: function() {
                        return a
                    }
                }),
                function(e) {
                    e.PUBLIC = "PUBLIC", e.PRESALE = "PRESALE"
                }(a || (a = {})),
                function(e) {
                    e.PENDING = "PENDING", e.CONFIRMED = "CONFIRMED", e.SUCCESS = "SUCCESS", e.FAILED = "FAILED"
                }(r || (r = {}))
        },
        7428: function(e, n, t) {
            t.d(n, {
                B3: function() {
                    return R
                },
                BQ: function() {
                    return x
                },
                DT: function() {
                    return Z
                },
                Ee: function() {
                    return L
                },
                I8: function() {
                    return F
                },
                LR: function() {
                    return K
                },
                X8: function() {
                    return V
                },
                aW: function() {
                    return B
                },
                eT: function() {
                    return M
                },
                jF: function() {
                    return U
                },
                jg: function() {
                    return w
                },
                kF: function() {
                    return O
                },
                zU: function() {
                    return C
                }
            });
            var a = t(23842),
                r = t(85034),
                i = t(70169),
                l = t(52050),
                u = t(35230),
                o = t.n(u),
                c = t(27378),
                s = t(23961),
                d = t(89154),
                m = t(94762),
                f = t(71636),
                p = t.n(f),
                y = t(86677),
                v = t(4402),
                g = t(51840),
                h = t(24140),
                b = t(9177),
                k = t(27896),
                T = t(86304),
                I = t(87481),
                N = t(79790),
                S = t(46992),
                E = t(59809),
                D = t(10412),
                C = function() {
                    var e = (0, g.Z)();
                    (0, h.Z)(e, 1e3)
                },
                A = function(e, n) {
                    var t = (0, d.Z)(e, n),
                        a = 864e5,
                        r = Math.floor(t / a);
                    t -= r * a;
                    var i = 36e5,
                        l = Math.floor(t / i);
                    t -= l * i;
                    var u = Math.floor(t / 6e4);
                    t -= 6e4 * u;
                    return {
                        days: r,
                        hours: l,
                        minutes: u,
                        seconds: Math.floor(t / 1e3)
                    }
                },
                w = function(e, n, t, a) {
                    return [e > 0 ? "".concat(e, "d") : "", e + n > 0 ? "".concat(n, "h") : "", e + n + t > 0 ? "".concat(t, "m") : "", "".concat(a, "s")].filter((function(e) {
                        return !!e
                    })).join(" ")
                },
                L = function(e) {
                    var n = p()(),
                        t = p()(e.startTime),
                        a = p()(e.endTime),
                        r = !e.endTime;
                    return n.isSameOrAfter(t) && (r || n.isSameOrBefore(a))
                },
                F = function(e) {
                    var n, t, a = e.ctaStage,
                        r = e.mintedItemCount,
                        i = e.totalItemCount,
                        l = new Date,
                        u = new Date(a.startTime),
                        o = a.stageType === T.N.PRESALE,
                        c = a.stageType === T.N.PUBLIC;
                    if (r === i) return "Sold out";
                    if (!o && !c) return "Stay tuned for updates!";
                    if ((0, m.Z)(l, u)) {
                        var s = A(u, l),
                            d = s.days,
                            f = s.hours,
                            p = s.minutes,
                            y = s.seconds,
                            v = w(d, f, p, y);
                        return "".concat(v)
                    }
                    return L(a) ? "".concat(null === (n = a.priceType) || void 0 === n ? void 0 : n.unit, " ").concat(null === (t = a.priceType) || void 0 === t ? void 0 : t.symbol) : o ? "Presale ended" : "Public sale ended"
                },
                x = function(e) {
                    var n = e.isAuthenticated,
                        t = e.ctaStage,
                        a = e.mintedItemCount,
                        r = e.totalItemCount,
                        i = e.contextUserData;
                    if (!n || a === r) return "";
                    if (t.perWalletLimit && i.mintedItemCount && t.perWalletLimit === i.mintedItemCount) return "You've reached your mint limit.";
                    var l = new Date,
                        u = new Date(t.startTime);
                    if ((0, m.Z)(l, u)) return i.isEligibleNow ? "You're eligible for this ".concat(t.stageType === T.N.PRESALE ? "presale" : "public sale") : "You aren't eligible for the ".concat(t.stageType === T.N.PRESALE ? "".concat(t.label, " presale") : "".concat(t.label, " public sale"), ".");
                    if (L(t)) {
                        if (i.isEligibleNow) {
                            if (!t.perWalletLimit || !i.mintedItemCount) return "";
                            var o = t.perWalletLimit - i.mintedItemCount,
                                c = 1 === o ? "1 mint" : "".concat(o, " mints");
                            return "You have ".concat(c, " left")
                        }
                        return "You aren't eligible for the ".concat(t.stageType === T.N.PRESALE ? "".concat(t.label, " presale") : "".concat(t.label, " public sale"), ".")
                    }
                    return ""
                };

            function P(e) {
                return new Promise((function(n) {
                    return setTimeout(n, e)
                }))
            }
            var M = function(e) {
                    var n, t, a = e.ctaStage,
                        r = e.mintedItemCount;
                    if (r === e.totalItemCount) return "All ".concat(r, " items were minted");
                    if (L(a)) {
                        if (a.endTime) {
                            var i = A(new Date(a.endTime), new Date),
                                l = i.days,
                                u = i.hours,
                                o = i.minutes,
                                c = i.seconds,
                                s = w(l, u, o, c);
                            return "Ends in ".concat(s)
                        }
                        return "Ends when fully minted"
                    }
                    return "".concat(null === (n = a.priceType) || void 0 === n ? void 0 : n.unit, " ").concat(null === (t = a.priceType) || void 0 === t ? void 0 : t.symbol)
                },
                K = {
                    NO_MONEY: "You don't have enough money",
                    UNKOWN: "Something went wrong."
                },
                Z = function() {
                    var e = (0, a.Z)(o().mark((function e(n, a, r, i, u, c, d) {
                        var m, f, p, y, v, g, h, k, I, N, D, C, A;
                        return o().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 3, a(t(44205), {
                                        collection: i,
                                        recaptchaToken: u
                                    });
                                case 3:
                                    return p = e.sent, e.t0 = l.Z, e.next = 7, (0, E.he)(t(49686), {
                                        assetId: c.id,
                                        identity: r.getActiveAccountKeyStrict()
                                    });
                                case 7:
                                    if (e.t1 = e.sent, y = (0, e.t0)(e.t1, 1), v = y[0], !new s.Z(null === v || void 0 === v || null === (m = v.blockchain) || void 0 === m ? void 0 : m.balance).dividedBy(new s.Z(10).pow(c.decimals || 18)).lte(new s.Z(null !== (g = null === (f = d.priceType) || void 0 === f ? void 0 : f.unit) && void 0 !== g ? g : 0).dividedBy(c.decimals || 18))) {
                                        e.next = 13;
                                        break
                                    }
                                    throw new Error(K.NO_MONEY);
                                case 13:
                                    return e.prev = 13, k = null === (h = p.collections) || void 0 === h ? void 0 : h.createMintTransaction, e.next = 18, r.getProvider();
                                case 18:
                                    return I = e.sent, e.next = 21, r.transact({
                                        data: k
                                    });
                                case 21:
                                    return N = e.sent, e.abrupt("return", {
                                        data: I.buildTransactionFromData(k),
                                        transactionHash: N,
                                        status: T.E.PENDING,
                                        chain: n
                                    });
                                case 25:
                                    if (e.prev = 25, e.t2 = e.catch(13), e.t2) {
                                        e.next = 29;
                                        break
                                    }
                                    throw new Error(K.UNKOWN);
                                case 29:
                                    if (D = null === r || void 0 === r ? void 0 : r.getActiveWallet(), C = D === b.UC.Phantom && e.t2.code > 0, A = D === b.UC.Glow && e.t2.code > 0, !C && !A) {
                                        e.next = 36;
                                        break
                                    }
                                    throw e.t2;
                                case 36:
                                    throw (0, S.Fo)(e.t2), new Error(K.UNKOWN);
                                case 38:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [13, 25]
                        ])
                    })));
                    return function(n, t, a, r, i, l, u) {
                        return e.apply(this, arguments)
                    }
                }(),
                O = function() {
                    var e = (0, N.e)().showErrorMessage,
                        n = (0, I.b)().wallet,
                        u = (0, c.useState)(void 0),
                        s = u[0],
                        d = u[1],
                        m = (0, c.useCallback)(function() {
                            var u = (0, a.Z)(o().mark((function u(c) {
                                var s, m, f, p, y, v, g, h, b, k;
                                return o().wrap((function(u) {
                                    for (;;) switch (u.prev = u.next) {
                                        case 0:
                                            if (d(c), (null === c || void 0 === c ? void 0 : c.status) !== T.E.PENDING) {
                                                u.next = 46;
                                                break
                                            }
                                            return u.next = 5, n.getProvider();
                                        case 5:
                                            p = u.sent, y = function() {
                                                var e = (0, a.Z)(o().mark((function e() {
                                                    var n, t;
                                                    return o().wrap((function(e) {
                                                        for (;;) switch (e.prev = e.next) {
                                                            case 0:
                                                                return e.prev = 0, e.next = 4, p.getSignatureStatus(c.transactionHash);
                                                            case 4:
                                                                return t = e.sent, e.abrupt("return", p.transactionIsPending(t) && !(null === (n = t.value) || void 0 === n ? void 0 : n.err));
                                                            case 8:
                                                                return e.prev = 8, e.t0 = e.catch(0), e.abrupt("return", !0);
                                                            case 11:
                                                            case "end":
                                                                return e.stop()
                                                        }
                                                    }), e, null, [
                                                        [0, 8]
                                                    ])
                                                })));
                                                return function() {
                                                    return e.apply(this, arguments)
                                                }
                                            }();
                                        case 7:
                                            return u.next = 9, y();
                                        case 9:
                                            if (!u.sent) {
                                                u.next = 14;
                                                break
                                            }
                                            return u.next = 12, P(3e3);
                                        case 12:
                                            u.next = 7;
                                            break;
                                        case 14:
                                            return u.next = 16, p.getSignatureStatus(c.transactionHash);
                                        case 16:
                                            if (v = u.sent, !(g = null === (s = v.value) || void 0 === s ? void 0 : s.err)) {
                                                u.next = 22;
                                                break
                                            }
                                            return "string" === typeof g && e(g), d((0, i.Z)((0, r.Z)({}, c), {
                                                status: T.E.FAILED
                                            })), u.abrupt("return");
                                        case 22:
                                            b = 0;
                                        case 24:
                                            if ((null === h || void 0 === h || null === (m = h.nft) || void 0 === m ? void 0 : m.id) || !(b < 3)) {
                                                u.next = 45;
                                                break
                                            }
                                            return u.next = 27, P(3e3);
                                        case 27:
                                            return u.prev = 27, u.t0 = l.Z, u.next = 32, (0, E.he)(t(8868), {
                                                contractAddress: D.gB,
                                                tokenId: U(c),
                                                chain: c.chain
                                            }, {
                                                force: !0
                                            });
                                        case 32:
                                            u.t1 = u.sent, k = (0, u.t0)(u.t1, 1), h = k[0], u.next = 40;
                                            break;
                                        case 38:
                                            u.prev = 38, u.t2 = u.catch(27);
                                        case 40:
                                            return u.prev = 40, b++, u.finish(40);
                                        case 43:
                                            u.next = 24;
                                            break;
                                        case 45:
                                            (null === h || void 0 === h || null === (f = h.nft) || void 0 === f ? void 0 : f.id) ? d((0, i.Z)((0, r.Z)({}, c), {
                                                itemDataKey: h.nft,
                                                status: T.E.SUCCESS
                                            })): d((0, i.Z)((0, r.Z)({}, c), {
                                                status: T.E.CONFIRMED
                                            }));
                                        case 46:
                                        case "end":
                                            return u.stop()
                                    }
                                }), u, null, [
                                    [27, 38, 40, 43]
                                ])
                            })));
                            return function(e) {
                                return u.apply(this, arguments)
                            }
                        }(), [n, e]);
                    return [s, m]
                },
                R = function(e) {
                    var n = (0, v.useFragment)(t(17027), (null === e || void 0 === e ? void 0 : e.itemDataKey) || null);
                    return {
                        name: null === n || void 0 === n ? void 0 : n.displayName
                    }
                },
                B = function() {
                    var e = (0, y.useRouter)();
                    return e.query.collectionSlug ? e.query.collectionSlug : void 0
                },
                U = function(e) {
                    return e.data.signatures[1].publicKey.toString()
                },
                V = function(e) {
                    var n = e.ctaStage,
                        t = e.contextUserData,
                        a = e.mintedItemCount,
                        r = e.totalItemCount,
                        i = (0, I.b)().isAuthenticated,
                        l = (0, k.Os)().chain,
                        u = B(),
                        o = !i || !l,
                        c = !o && t.mintedItemCount && n.perWalletLimit && t.mintedItemCount === n.perWalletLimit,
                        s = a === r,
                        d = n.stageType === T.N.PUBLIC;
                    return {
                        collectionSlug: u,
                        userNeedsToLogin: o,
                        userReachTheLimitOfMints: c,
                        collectionIsFullyMinted: s,
                        primaryDropAlreadyStarted: a > 1,
                        primaryDropEnded: s || d && n.endTime && p()().isSameOrAfter(n.endTime)
                    }
                }
        },
        8868: function(e, n, t) {
            t.r(n);
            var a = function() {
                var e = {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "chain"
                    },
                    n = {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "contractAddress"
                    },
                    t = {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "tokenId"
                    },
                    a = [{
                        kind: "Variable",
                        name: "chain",
                        variableName: "chain"
                    }, {
                        kind: "Variable",
                        name: "contractAddress",
                        variableName: "contractAddress"
                    }, {
                        kind: "Variable",
                        name: "tokenId",
                        variableName: "tokenId"
                    }],
                    r = {
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
                        name: "utilsNFTQuery",
                        selections: [{
                            alias: null,
                            args: a,
                            concreteType: "AssetType",
                            kind: "LinkedField",
                            name: "nft",
                            plural: !1,
                            selections: [r, {
                                args: null,
                                kind: "FragmentSpread",
                                name: "utils_asset"
                            }],
                            storageKey: null
                        }],
                        type: "Query",
                        abstractKey: null
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: [t, n, e],
                        kind: "Operation",
                        name: "utilsNFTQuery",
                        selections: [{
                            alias: null,
                            args: a,
                            concreteType: "AssetType",
                            kind: "LinkedField",
                            name: "nft",
                            plural: !1,
                            selections: [r, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "displayName",
                                storageKey: null
                            }],
                            storageKey: null
                        }]
                    },
                    params: {
                        cacheID: "5bdf8424c3ce0fdf1555ae2b874284f2",
                        id: null,
                        metadata: {},
                        name: "utilsNFTQuery",
                        operationKind: "query",
                        text: "query utilsNFTQuery(\n  $tokenId: String!\n  $contractAddress: AddressScalar!\n  $chain: ChainScalar!\n) {\n  nft(tokenId: $tokenId, contractAddress: $contractAddress, chain: $chain) {\n    id\n    ...utils_asset\n  }\n}\n\nfragment utils_asset on AssetType {\n  displayName\n}\n"
                    }
                }
            }();
            a.hash = "1205657db583aff35e70bf8648d72cbc", n.default = a
        },
        49686: function(e, n, t) {
            t.r(n);
            var a = function() {
                var e = [{
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "assetId"
                    }, {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "identity"
                    }],
                    n = [{
                        alias: null,
                        args: null,
                        concreteType: "BlockchainType",
                        kind: "LinkedField",
                        name: "blockchain",
                        plural: !1,
                        selections: [{
                            alias: null,
                            args: [{
                                kind: "Variable",
                                name: "asset",
                                variableName: "assetId"
                            }, {
                                kind: "Variable",
                                name: "identity",
                                variableName: "identity"
                            }],
                            kind: "ScalarField",
                            name: "balance",
                            storageKey: null
                        }],
                        storageKey: null
                    }];
                return {
                    fragment: {
                        argumentDefinitions: e,
                        kind: "Fragment",
                        metadata: null,
                        name: "utilsPrimaryDropsBalanceQuery",
                        selections: n,
                        type: "Query",
                        abstractKey: null
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: e,
                        kind: "Operation",
                        name: "utilsPrimaryDropsBalanceQuery",
                        selections: n
                    },
                    params: {
                        cacheID: "9923d609de9a94cfeed7d467fc34a2b7",
                        id: null,
                        metadata: {},
                        name: "utilsPrimaryDropsBalanceQuery",
                        operationKind: "query",
                        text: "query utilsPrimaryDropsBalanceQuery(\n  $assetId: AssetRelayID!\n  $identity: IdentityInputType!\n) {\n  blockchain {\n    balance(asset: $assetId, identity: $identity)\n  }\n}\n"
                    }
                }
            }();
            a.hash = "699e901c98ef776b35a53fb3845e4591", n.default = a
        },
        44205: function(e, n, t) {
            t.r(n);
            var a = function() {
                var e = [{
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "collection"
                    }, {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "recaptchaToken"
                    }],
                    n = [{
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
                                variableName: "collection"
                            }, {
                                kind: "Variable",
                                name: "recaptchaToken",
                                variableName: "recaptchaToken"
                            }],
                            kind: "ScalarField",
                            name: "createMintTransaction",
                            storageKey: null
                        }],
                        storageKey: null
                    }];
                return {
                    fragment: {
                        argumentDefinitions: e,
                        kind: "Fragment",
                        metadata: null,
                        name: "utilsPrimaryDropsCreateMintTransactionMutation",
                        selections: n,
                        type: "Mutation",
                        abstractKey: null
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: e,
                        kind: "Operation",
                        name: "utilsPrimaryDropsCreateMintTransactionMutation",
                        selections: n
                    },
                    params: {
                        cacheID: "bbc1454857c4f920626ae41397b55f32",
                        id: null,
                        metadata: {},
                        name: "utilsPrimaryDropsCreateMintTransactionMutation",
                        operationKind: "mutation",
                        text: "mutation utilsPrimaryDropsCreateMintTransactionMutation(\n  $collection: CollectionSlug!\n  $recaptchaToken: String!\n) {\n  collections {\n    createMintTransaction(collection: $collection, recaptchaToken: $recaptchaToken)\n  }\n}\n"
                    }
                }
            }();
            a.hash = "38ad690ce8af922e88bc99cb28b1b879", n.default = a
        },
        17027: function(e, n, t) {
            t.r(n);
            var a = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "utils_asset",
                selections: [{
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "displayName",
                    storageKey: null
                }],
                type: "AssetType",
                abstractKey: null,
                hash: "50e1a531f515bd5843c08d12e0fe062e"
            };
            n.default = a
        }
    }
]);
//# sourceMappingURL=7428-d3238bfabed6f7a8.js.map