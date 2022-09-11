"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [62761], {
        72153: function(n, e, a) {
            a.d(e, {
                C: function() {
                    return v
                }
            });
            var i = a(85034),
                l = a(70169),
                r = a(31373),
                t = a(19989),
                s = a(24246),
                o = a(27378),
                d = a(47892),
                u = a(96728),
                c = a(53585),
                m = a(16611),
                p = a(90761),
                g = a(48257),
                y = a(17813);

            function h() {
                var n = (0, t.Z)(["\n  width: fit-content;\n  border-radius: 4px;\n  padding: 6px;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  background-color: ", ";\n  color: ", ";\n\n  .Badge--icon {\n    margin-right: 4px;\n  }\n\n  .Badge--text {\n    ", "\n  }\n\n  ", "\n"]);
                return h = function() {
                    return n
                }, n
            }
            var f = {
                    PRIMARY: "primary",
                    SECONDARY: "secondary",
                    TERTIARY: "tertiary",
                    SUCCESS: "success",
                    WARNING: "warning",
                    ERROR: "error"
                },
                v = (0, o.forwardRef)((function(n, e) {
                    var a = n.text,
                        t = n.textVariant,
                        o = void 0 === t ? "small" : t,
                        d = n.icon,
                        u = n.iconSize,
                        c = void 0 === u ? 14 : u,
                        p = n.className,
                        h = n.variant,
                        f = n.imageUrl,
                        v = (0, r.Z)(n, ["text", "textVariant", "icon", "iconSize", "className", "variant", "imageUrl"]);
                    return (0, s.jsxs)(x, (0, l.Z)((0, i.Z)({
                        className: p,
                        ref: e,
                        variant: h
                    }, v), {
                        children: [f ? (0, s.jsx)(y.Z, {
                            alt: "",
                            size: c,
                            url: f
                        }) : null, d ? (0, s.jsx)(g.J, {
                            className: "Badge--icon",
                            size: c,
                            value: d
                        }) : null, a ? (0, s.jsx)(m.WX, {
                            as: "span",
                            className: "Badge--text",
                            variant: o,
                            children: a
                        }) : null]
                    }))
                })),
                x = (0, d.ZP)(c.g).withConfig({
                    componentId: "sc-5b05a974-0"
                })(h(), (function(n) {
                    return n.theme.colors.border
                }), (function(n) {
                    return n.theme.colors.text.subtle
                }), (function(n) {
                    return (0, u.variant)({
                        variants: (0, p.R0)(f, (function(e) {
                            return {
                                color: n.theme.colors.text.on[e]
                            }
                        }))
                    })
                }), (function(n) {
                    return (0, u.variant)({
                        variants: (0, p.R0)(f, (function(e) {
                            return {
                                backgroundColor: n.theme.colors[e],
                                color: n.theme.colors.text.on[e]
                            }
                        }))
                    })
                }))
        },
        60107: function(n, e, a) {
            a.d(e, {
                T: function() {
                    return s
                }
            });
            var i = a(24246),
                l = (a(27378), a(87481)),
                r = a(33181),
                t = {
                    staff: function(n) {
                        return n.isStaff
                    },
                    development: function() {
                        return r.v9 || r.rv
                    }
                },
                s = function(n) {
                    var e = n.flags,
                        a = n.children,
                        r = (0, l.b)();
                    return (null === e || void 0 === e ? void 0 : e.some((function(n) {
                        return t[n](r)
                    }))) ? (0, i.jsx)(i.Fragment, {
                        children: a
                    }) : null
                }
        },
        98286: function(n, e, a) {
            var i = a(19989),
                l = a(24246),
                r = (a(27378), a(47892)),
                t = a(82167),
                s = a(53585),
                o = a(87481),
                d = (a(59809), a(63964)),
                u = a(28849);

            function c() {
                var n = (0, i.Z)(["\n  width: 100%;\n\n  .PrivateListingBanner--content {\n    align-items: center;\n    display: flex;\n    flex-wrap: wrap;\n    font-size: 16px;\n    justify-content: center;\n    width: 100%;\n\n    .PrivateListingBanner--identity-sentence {\n      margin-right: 4px;\n\n      .PrivateListingBanner--account-link {\n        margin-left: 4px;\n        padding: 6px 0;\n        vertical-align: bottom;\n      }\n    }\n  }\n"]);
                return c = function() {
                    return n
                }, n
            }
            e.Z = (0, d.d)((function(n) {
                var e, a, i = n.data,
                    r = (0, o.b)().wallet,
                    d = null === (e = null === i || void 0 === i ? void 0 : i.tradeSummary.bestAsk) || void 0 === e ? void 0 : e.maker,
                    c = d && r.isActiveAccount(d),
                    p = null === (a = null === i || void 0 === i ? void 0 : i.tradeSummary.bestAsk) || void 0 === a ? void 0 : a.taker,
                    g = c || p && r.isActiveAccount(p);
                if (!i || !p || !g) return null;
                var y = (0, l.jsx)(s.g, {
                    display: "inline-block",
                    children: (0, l.jsx)(t.e, {
                        className: "PrivateListingBanner--account-link",
                        dataKey: p,
                        mode: "light"
                    })
                });
                return (0, l.jsx)(m, {
                    children: (0, l.jsx)(u.Z, {
                        children: (0, l.jsx)("div", {
                            className: "PrivateListingBanner--content",
                            children: c ? (0, l.jsxs)("div", {
                                className: "PrivateListingBanner--identity-sentence",
                                children: ["This is a private listing that you made for ", y, "."]
                            }) : r.isActiveAccount(p) ? "This listing is reserved for you!" : null
                        })
                    })
                })
            }), a(46371));
            var m = r.ZP.div.withConfig({
                componentId: "sc-5ef21e2b-0"
            })(c())
        },
        28711: function(n, e, a) {
            a.d(e, {
                Z: function() {
                    return fn
                }
            });
            var i, l = a(23842),
                r = a(19989),
                t = a(35230),
                s = a.n(t),
                o = a(24246),
                d = a(27378),
                u = a(64083),
                c = a(47892),
                m = a(43769),
                p = a(52963),
                g = a(13332),
                y = a(90141),
                h = a(81480),
                f = a(84919),
                v = a(38042),
                x = a(56656),
                k = a(16611),
                T = a(19378),
                b = a(38008),
                j = a(65175),
                S = a(82020),
                F = a(87481),
                w = a(59985),
                C = a(79790),
                A = a(82455),
                L = a(59809),
                K = a(63964),
                I = a(39738),
                N = a(20889),
                O = a(10412),
                _ = a(97516),
                P = a(11652),
                D = a(2034),
                E = a(66079),
                B = a(77795),
                M = a(4041),
                Z = a(17813),
                W = a(53585),
                V = a(33303),
                R = a(47762),
                z = function(n) {
                    var e = n.onClose,
                        a = n.onReviewListings;
                    return (0, R.n)((function() {
                        (0, A.Qz)()
                    })), (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)(T.u_.Header, {
                            children: (0, o.jsx)(T.u_.Title, {
                                children: "Cancel active listings"
                            })
                        }), (0, o.jsx)(T.u_.Body, {
                            children: (0, o.jsxs)(V.B, {
                                alignItems: "center",
                                children: [(0, o.jsx)(Z.Z, {
                                    alt: "",
                                    url: "/static/images/lower-price-warning.png",
                                    width: 200
                                }), (0, o.jsx)(k.WX, {
                                    children: "When you lower the price of your item, we don\u2019t cancel the previous listing (to save gas). If you intend to remove the item from sale, review and cancel the listings."
                                })]
                            })
                        }), (0, o.jsxs)(T.u_.Footer, {
                            children: [(0, o.jsx)(x.zx, {
                                variant: "secondary",
                                onClick: function() {
                                    (0, A.vA)(), e(), null === a || void 0 === a || a()
                                },
                                children: "Review listings"
                            }), (0, o.jsx)(W.g, {
                                marginLeft: "8px",
                                children: (0, o.jsx)(x.zx, {
                                    onClick: function() {
                                        (0, A.nF)(), e()
                                    },
                                    children: "Done"
                                })
                            })]
                        })]
                    })
                },
                H = a(85034),
                Y = a(70169),
                U = a(93451),
                Q = a(4402),
                $ = (a(2417), a(48257)),
                G = a(1569),
                X = a(72784),
                q = a(96150),
                J = a(69981),
                nn = a(13601),
                en = a(2385),
                an = a(99525),
                ln = a(30512),
                rn = a(90249),
                tn = a(26699),
                sn = a(95601),
                on = a(56864);

            function dn() {
                var n = (0, r.Z)(["\n          color: ", ";\n        "]);
                return dn = function() {
                    return n
                }, n
            }

            function un() {
                var n = (0, r.Z)(["\n          color: ", ";\n        "]);
                return un = function() {
                    return n
                }, n
            }

            function cn() {
                var n = (0, r.Z)(["\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n\n  ", "\n"]);
                return cn = function() {
                    return n
                }, n
            }
            var mn = null === (i = X.W.find((function(n) {
                    return "7" === n.value
                }))) || void 0 === i ? void 0 : i.value,
                pn = function(n) {
                    var e, i = n.errorMessage,
                        r = n.placeholder,
                        t = n.onClose,
                        d = n.onSubmit,
                        u = n.paymentAssetOption,
                        c = n.previousAmount,
                        m = n.previousExpiration,
                        p = n.collection,
                        g = (0, Q.useFragment)(a(18193), null !== p && void 0 !== p ? p : null),
                        y = null === g || void 0 === g ? void 0 : g.statsV2.floorPrice,
                        h = (0, sn.c)({
                            mode: "onChange",
                            defaultValues: {
                                isCustomExpiration: !1
                            }
                        }),
                        f = h.handleSubmit,
                        x = h.formState,
                        b = x.errors,
                        j = x.isValid,
                        S = x.isSubmitting,
                        F = h.setError,
                        w = h.control,
                        C = h.watch,
                        A = h.setValue,
                        L = (0, nn.W)(),
                        K = L.onReplace,
                        I = L.onNext,
                        N = C("newAmount"),
                        O = C("isCustomExpiration"),
                        _ = function() {
                            if (!y || !u.usdSpotPrice) return (0, P.bn)(0);
                            var n = (0, P.bn)(N).multipliedBy(u.usdSpotPrice);
                            return n.isGreaterThan(y.usd) ? (0, P.bn)(0) : P.O$.min((0, P.bn)(1).minus(n.div(y.usd)), .99).multipliedBy(100)
                        }(),
                        D = _.isGreaterThan(0),
                        E = _.isGreaterThan(tn.N),
                        B = function() {
                            var n = (0, l.Z)(s().mark((function n(e) {
                                var a, i, r, u;
                                return s().wrap((function(n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            if (a = e.newAmount, i = e.newExpirationDurationDays, r = e.isCustomExpiration, !(0, P.bn)(a).isLessThanOrEqualTo(0) || window.confirm("Are you sure you want to make this free?")) {
                                                n.next = 4;
                                                break
                                            }
                                            return F("newAmount", {
                                                type: "greaterThanZero",
                                                message: "Please try again with a positive price"
                                            }), n.abrupt("return");
                                        case 4:
                                            if (u = function() {
                                                    var n = (0, l.Z)(s().mark((function n() {
                                                        return s().wrap((function(n) {
                                                            for (;;) switch (n.prev = n.next) {
                                                                case 0:
                                                                    return n.prev = 0, n.next = 3, d({
                                                                        newAmount: a,
                                                                        newExpirationDurationDays: i,
                                                                        onClose: t,
                                                                        onNext: I,
                                                                        onReplace: K,
                                                                        isCustomExpiration: r
                                                                    });
                                                                case 3:
                                                                    n.next = 8;
                                                                    break;
                                                                case 5:
                                                                    n.prev = 5, n.t0 = n.catch(0), t();
                                                                case 8:
                                                                case "end":
                                                                    return n.stop()
                                                            }
                                                        }), n, null, [
                                                            [0, 5]
                                                        ])
                                                    })));
                                                    return function() {
                                                        return n.apply(this, arguments)
                                                    }
                                                }(), !E) {
                                                n.next = 7;
                                                break
                                            }
                                            return n.abrupt("return", I((0, o.jsx)(tn.H, {
                                                priceWarningActionMessage: "Confirm listing",
                                                priceWarningHeader: "Confirm low listing price?",
                                                priceWarningMessage: (0, o.jsxs)(W.g, {
                                                    children: ["Your updated listing will be", " ", (0, o.jsx)("b", {
                                                        children: "".concat((0, P.SG)(_, 0), "%")
                                                    }), " ", "below the floor price for this collection."]
                                                }),
                                                onClose: t,
                                                onConfirm: u
                                            })));
                                        case 7:
                                            return n.next = 9, u();
                                        case 9:
                                        case "end":
                                            return n.stop()
                                    }
                                }), n)
                            })));
                            return function(e) {
                                return n.apply(this, arguments)
                            }
                        }();
                    return (0, o.jsxs)(V.B, {
                        as: "form",
                        onSubmit: f(B),
                        children: [(0, o.jsx)(T.u_.Header, {
                            children: (0, o.jsx)(T.u_.Title, {
                                children: "Lower the listing price"
                            })
                        }), (0, o.jsxs)(T.u_.Body, {
                            children: [(0, o.jsx)(U.Qr, {
                                control: w,
                                name: "newAmount",
                                render: function(n) {
                                    var e = n.field;
                                    return (0, o.jsx)(v.XN, {
                                        autoFocus: !0,
                                        error: b[e.name],
                                        id: e.name,
                                        name: e.name,
                                        paymentAssetOptions: [u],
                                        paymentAssetRelayId: u.value,
                                        placeholder: r,
                                        price: e.value,
                                        warning: D ? (0, o.jsx)(gn, {
                                            warningSeverity: E ? rn.dL.High : rn.dL.Low,
                                            children: "This amount is below the collection floor price. Consider a higher price."
                                        }) : void 0,
                                        onChange: e.onChange
                                    })
                                },
                                rules: {
                                    validate: (0, Y.Z)((0, H.Z)({}, (0, on.q8)({
                                        maxDecimals: null !== (e = u.decimals) && void 0 !== e ? e : 0
                                    })), {
                                        greaterThanPrevious: function(n) {
                                            return !n || (0, P.bn)(n).isLessThan(c) || "The new sale price must be lower than the current price. If you need to set a higher price, cancel the listing and re-list."
                                        }
                                    })
                                }
                            }), i && (0, o.jsxs)(o.Fragment, {
                                children: [(0, o.jsx)("br", {}), (0, o.jsx)("p", {
                                    children: i
                                })]
                            }), (0, o.jsx)(W.g, {
                                marginTop: "24px",
                                children: (0, o.jsx)(U.Qr, {
                                    control: w,
                                    name: "newExpirationDurationDays",
                                    render: function(n) {
                                        var e = n.field;
                                        return (0, o.jsx)(J.l.Control, {
                                            error: b[e.name],
                                            htmlFor: e.name,
                                            label: (0, o.jsxs)(an.i, {
                                                children: ["Use previous listing expiration date", (0, o.jsx)(ln.Z, {
                                                    checked: !O,
                                                    onChange: function(n) {
                                                        A("newExpirationDurationDays", n ? void 0 : mn), A("isCustomExpiration", !n)
                                                    }
                                                })]
                                            }),
                                            tip: O || null === m || void 0 === m ? void 0 : m.local().format("MMMM D, YYYY h:mma"),
                                            children: O ? (0, o.jsx)(en.P, {
                                                clearable: !1,
                                                excludeSelectedOption: !0,
                                                id: e.name,
                                                options: X.W,
                                                placeholder: "Select a duration",
                                                readOnly: !0,
                                                startEnhancer: (0, o.jsx)($.J, {
                                                    value: "calendar_today"
                                                }),
                                                value: e.value,
                                                onSelect: function(n) {
                                                    return n && e.onChange(n.value)
                                                }
                                            }) : (0, o.jsx)(o.Fragment, {})
                                        })
                                    }
                                })
                            }), (0, o.jsx)(q.k, {
                                margin: "24px 0 8px",
                                children: (0, o.jsxs)(k.WX, {
                                    as: "span",
                                    variant: "small",
                                    children: ["You must pay an additional gas fee if you want to cancel this listing at a later point.", " ", (0, o.jsx)(G.r, {
                                        href: "https://support.opensea.io/hc/articles/4410153816723",
                                        target: "_blank",
                                        children: "Learn more about canceling listings"
                                    }), "."]
                                })
                            })]
                        }), (0, o.jsxs)(T.u_.Footer, {
                            children: [(0, o.jsx)(T.u_.Footer.Button, {
                                variant: "tertiary",
                                onClick: t,
                                children: "Never mind"
                            }), (0, o.jsx)(T.u_.Footer.Button, {
                                disabled: !j || S,
                                isLoading: S,
                                type: "submit",
                                children: "Set new price"
                            })]
                        })]
                    })
                },
                gn = c.ZP.div.withConfig({
                    componentId: "sc-a9fa6f11-0"
                })(cn(), (function(n) {
                    return n.warningSeverity === rn.dL.High ? (0, c.iv)(dn(), n.theme.colors.error) : (0, c.iv)(un(), n.theme.colors.warning)
                }));

            function yn() {
                var n = (0, r.Z)(["\n      position: sticky;\n      top: 72px;\n      height: 81px;\n\n      .OrderManager--cta-container {\n        max-width: 1280px;\n        margin: auto;\n        padding: 0 20px;\n      }\n    "]);
                return yn = function() {
                    return n
                }, n
            }

            function hn() {
                var n = (0, r.Z)(["\n  bottom: 0px;\n  position: fixed;\n  top: auto;\n  width: 100%;\n  right: 0px;\n  padding: 10px 20px;\n  z-index: ", ";\n  background-color: ", ";\n  border-bottom: 1px solid ", ";\n  display: flex;\n\n  .OrderManager--cta-container {\n    align-items: center;\n    display: flex;\n    flex: 1 0;\n    justify-content: flex-end;\n\n    .OrderManager--second-button {\n      margin-right: 10px;\n    }\n  }\n\n  .Modal {\n    .OrderManager--cta-container {\n      margin: 10px 0px 20px;\n      justify-content: center;\n      .OrderManager--cta {\n        padding: 18px;\n      }\n    }\n    .OrderManager--modal-error-text {\n      color: ", ";\n      overflow: hidden;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n    }\n  }\n\n  .OrderManager--loader {\n    display: flex;\n    justify-content: center;\n    margin-top: 32px;\n  }\n\n  ", "\n"]);
                return hn = function() {
                    return n
                }, n
            }
            var fn = (0, K.d)((function(n) {
                    var e, a = n.data,
                        i = n.onOrdersChanged,
                        r = n.className,
                        t = n.sellRoute,
                        c = n.onReviewListings,
                        h = n.hasPendingListing,
                        K = n.chain,
                        B = n.variables.isBundle,
                        Z = (0, d.useState)(!1),
                        W = Z[0],
                        V = Z[1],
                        R = (0, d.useState)(!1),
                        H = R[0],
                        Y = R[1],
                        U = (0, C.e)(),
                        Q = U.showSuccessMessage,
                        $ = U.showErrorMessage,
                        G = (0, F.b)().wallet,
                        X = (0, p.C)().cancelOrders,
                        q = (0, y.k)().pollTransaction,
                        J = (0, w.N)(K),
                        nn = null !== (e = null === a || void 0 === a ? void 0 : a.bundleOrders) && void 0 !== e ? e : null === a || void 0 === a ? void 0 : a.orders,
                        en = function() {
                            var n, e;
                            return null !== (e = null === a || void 0 === a || null === (n = a.asset) || void 0 === n ? void 0 : n.isCurrentlyFungible) && void 0 !== e && e
                        },
                        an = function() {
                            return ln().length > 0
                        },
                        ln = function() {
                            return (0, L.v$)(nn)
                        },
                        rn = function() {
                            var n;
                            return null != (null === a || void 0 === a || null === (n = a.asset) || void 0 === n ? void 0 : n.isEditable.value) && Boolean(a.asset.isEditable.value)
                        },
                        tn = function() {
                            var n = (0, l.Z)(s().mark((function n() {
                                var e, a, l;
                                return s().wrap((function(n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            return n.prev = 0, Y(!0), e = ln().filter((function(n) {
                                                return n.isFulfillable
                                            })).map((function(n) {
                                                return n.relayId
                                            })), n.next = 5, (0, m.getCancelOrdersAction)(e);
                                        case 5:
                                            return a = n.sent, n.next = 8, X(a);
                                        case 8:
                                            if (!(l = n.sent)) {
                                                n.next = 12;
                                                break
                                            }
                                            return n.next = 12, q({
                                                transactionHash: l.transactionHash,
                                                chain: l.chain
                                            });
                                        case 12:
                                            Q("Your listing has been canceled."), i(), V(!1), n.next = 19;
                                            break;
                                        case 17:
                                            n.prev = 17, n.t0 = n.catch(0);
                                        case 19:
                                            return n.prev = 19, Y(!1), n.finish(19);
                                        case 22:
                                        case "end":
                                            return n.stop()
                                    }
                                }), n, null, [
                                    [0, 17, 19, 22]
                                ])
                            })));
                            return function() {
                                return n.apply(this, arguments)
                            }
                        }(),
                        sn = function() {
                            var n = (0, l.Z)(s().mark((function n(e) {
                                var l, r, t, d, m, p, y, h, f, v, x, k, T;
                                return s().wrap((function(n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            if (l = e.newAmount, r = e.newExpirationDurationDays, t = e.onClose, d = e.onNext, m = e.onReplace, y = (0, L.v$)(nn)[0], h = (0, P.bn)(y.priceType.unit), f = (0, P.bn)(l || h), r ? v = (0, u.Z)(new Date, parseInt(r)) : y.closedAt && (v = (0, _.LE)(y.closedAt)), x = y.payment, k = y.item, T = function() {
                                                    var n;
                                                    i(), (0, A.MT)({
                                                        assetId: (null === a || void 0 === a || null === (n = a.asset) || void 0 === n ? void 0 : n.relayId) || "",
                                                        previousAmount: +h,
                                                        newAmount: +f
                                                    }), Q("Price successfully lowered"), m((0, o.jsx)(z, {
                                                        onClose: t,
                                                        onReviewListings: c
                                                    }))
                                                }, v) {
                                                n.next = 11;
                                                break
                                            }
                                            throw new Error("Could not determine a new expiration date");
                                        case 11:
                                            d((0, o.jsx)(g.q, {
                                                closedAt: v.toISOString(),
                                                isLowerListing: !0,
                                                item: {
                                                    asset: k.relayId,
                                                    quantity: y.itemQuantityType
                                                },
                                                openedAt: (0, D.tg)().toISOString(),
                                                price: {
                                                    paymentAsset: x.relayId,
                                                    amount: l
                                                },
                                                recipient: null === (p = y.taker) || void 0 === p ? void 0 : p.address,
                                                onEnd: T,
                                                onError: function(n) {
                                                    $((null === n || void 0 === n ? void 0 : n.message) || "Something went wrong while lowering your listing")
                                                }
                                            }));
                                        case 12:
                                        case "end":
                                            return n.stop()
                                    }
                                }), n)
                            })));
                            return function(e) {
                                return n.apply(this, arguments)
                            }
                        }(),
                        on = function() {
                            var n, e;
                            return 0 !== +(0, P.bn)(null !== (e = null === a || void 0 === a || null === (n = a.asset) || void 0 === n ? void 0 : n.ownedQuantity) && void 0 !== e ? e : 0) && !(!en() && an())
                        },
                        dn = on() || en(),
                        un = rn() || en(),
                        cn = !en() && an();
                    return (0, o.jsxs)(vn, {
                        className: r,
                        children: [(0, o.jsx)("div", {
                            className: "OrderManager--cta-container",
                            children: (0, o.jsx)(f.p, {
                                chainIdentifier: K,
                                children: (0, o.jsxs)(o.Fragment, {
                                    children: [(null === a || void 0 === a ? void 0 : a.asset) && un ? function(n) {
                                        var e = en() ? "You do not own the entire item supply." : "You are not the creator of this item.";
                                        return (0, o.jsx)(j.u, {
                                            content: e,
                                            disabled: rn(),
                                            children: (0, o.jsx)("span", {
                                                children: (0, o.jsx)(x.zx, {
                                                    className: "OrderManager--second-button",
                                                    disabled: !rn(),
                                                    href: (0, N.K0)(n),
                                                    size: x.iY.medium,
                                                    variant: "secondary",
                                                    width: "162px",
                                                    children: "Edit"
                                                })
                                            })
                                        })
                                    }(a.asset) : null, cn ? (0, o.jsxs)(o.Fragment, {
                                        children: [function() {
                                            var n = (0, L.v$)(nn),
                                                e = (0, I.Ps)(n);
                                            return (0, o.jsx)(b.d, {
                                                size: "large",
                                                trigger: function(e) {
                                                    return (0, o.jsx)(o.Fragment, {
                                                        children: (0, o.jsxs)(x.zx, {
                                                            className: "OrderManager--second-button",
                                                            disabled: h,
                                                            minWidth: "162px",
                                                            size: x.iY.medium,
                                                            variant: J ? "secondary" : "primary",
                                                            onClick: function() {
                                                                (0, O.$F)(K) ? V(!0): e()
                                                            },
                                                            children: ["Cancel ", (0, E._6)("listing", n.length)]
                                                        })
                                                    })
                                                },
                                                children: function(n) {
                                                    return (0, o.jsx)(M.Z, {
                                                        variables: {
                                                            orderId: e.relayId
                                                        },
                                                        onClose: n,
                                                        onError: function(e) {
                                                            $((null === e || void 0 === e ? void 0 : e.message) || "Something went wrong while creating a listing"), n()
                                                        },
                                                        onOrderCancelled: i
                                                    })
                                                }
                                            })
                                        }(), function() {
                                            var n = (0, L.v$)(nn)[0],
                                                e = (0, P.bn)(n.priceType.unit),
                                                i = n.closedAt ? (0, _.pY)(n.closedAt) : void 0;
                                            if (!J || B) return null;
                                            var l = n.payment,
                                                r = (0, v.$3)(n.payment),
                                                t = (0, P.jf)(e, l.symbol);
                                            return (0, o.jsx)(b.d, {
                                                trigger: function(n) {
                                                    return (0, o.jsx)(x.zx, {
                                                        minWidth: "162px",
                                                        size: x.iY.medium,
                                                        onClick: function() {
                                                            var e;
                                                            (0, A.B)({
                                                                assetId: (null === a || void 0 === a || null === (e = a.asset) || void 0 === e ? void 0 : e.relayId) || ""
                                                            }), n()
                                                        },
                                                        children: "Lower price"
                                                    })
                                                },
                                                children: function(a) {
                                                    return (0, o.jsx)(pn, {
                                                        collection: n.item.collection,
                                                        paymentAssetOption: r,
                                                        placeholder: t,
                                                        previousAmount: e,
                                                        previousExpiration: i,
                                                        onClose: a,
                                                        onSubmit: sn
                                                    })
                                                }
                                            })
                                        }()]
                                    }) : null, dn ? function() {
                                        var n, e, a = null !== (e = null === (n = G.activeAccount) || void 0 === n ? void 0 : n.isCompromised) && void 0 !== e && e;
                                        return (0, o.jsx)(j.u, {
                                            content: S.p,
                                            disabled: !a,
                                            children: (0, o.jsx)("span", {
                                                children: (0, o.jsx)(x.zx, {
                                                    className: "OrderManager--second-button",
                                                    disabled: !on() || a,
                                                    href: t,
                                                    size: x.iY.medium,
                                                    width: "162px",
                                                    children: "Sell"
                                                })
                                            })
                                        })
                                    }() : null]
                                })
                            })
                        }), function() {
                            var n = (0, L.v$)(nn).length,
                                e = function() {
                                    return V(!1)
                                },
                                a = (0, E._6)("listing", n);
                            return (0, o.jsxs)(T.u_, {
                                isOpen: W,
                                onClose: e,
                                children: [(0, o.jsx)(T.u_.Header, {
                                    children: (0, o.jsxs)(T.u_.Title, {
                                        children: ["Cancel ", a, "?"]
                                    })
                                }), (0, o.jsx)(T.u_.Body, {
                                    children: (0, o.jsxs)(k.WX, {
                                        children: ["This will cancel your ", a, ". You will also be asked to confirm this cancelation from your wallet."]
                                    })
                                }), (0, o.jsxs)(T.u_.Footer, {
                                    children: [(0, o.jsx)(T.u_.Footer.Button, {
                                        variant: "tertiary",
                                        onClick: e,
                                        children: "Go back"
                                    }), (0, o.jsx)(T.u_.Footer.Button, {
                                        disabled: H || h,
                                        isLoading: H,
                                        onClick: tn,
                                        children: "Continue"
                                    })]
                                })]
                            }, "CancelModal")
                        }()]
                    })
                }), a(88486)),
                vn = c.ZP.div.withConfig({
                    componentId: "sc-66e7ebb2-0"
                })(hn(), B.k.MANAGER_BAR, (function(n) {
                    return n.theme.colors.surface
                }), (function(n) {
                    return n.theme.colors.border
                }), (function(n) {
                    return n.theme.colors.error
                }), (0, h.FD)({
                    tabletL: (0, c.iv)(yn())
                }))
        },
        5984: function(n, e, a) {
            a.d(e, {
                j: function() {
                    return dn
                }
            });
            var i = a(85034),
                l = a(19989),
                r = a(24246),
                t = a(27378),
                s = a(12476),
                o = a(71636),
                d = a.n(o),
                u = a(4402),
                c = a(47892),
                m = a(74044),
                p = a(86694),
                g = a(37533),
                y = a(72153),
                h = a(53585),
                f = a(16611),
                v = a(97516),
                x = a(51840),
                k = a(24140),
                T = function(n) {
                    var e = n.moment,
                        a = (0, x.Z)();
                    return (0, k.Z)(a, 1e3), (0, r.jsx)(r.Fragment, {
                        children: (0, v.LU)(d().duration(e.diff(d().utc())))
                    })
                },
                b = function(n) {
                    var e = n.prefix,
                        a = void 0 === e ? "" : e,
                        i = n.postfix,
                        l = void 0 === i ? "" : i,
                        t = n.includeDate,
                        s = void 0 === t || t,
                        o = n.endMoment,
                        u = n.includeCountDown,
                        c = void 0 === u || u,
                        m = o ? d()(o).local().startOf("day") : void 0,
                        p = d()().startOf("day"),
                        g = d()(p).add(1, "day"),
                        y = o && s ? "".concat(o.local().format("MMMM D, YYYY [at] h:mma"), " \n  ").concat((0, v.Ze)()) : "",
                        x = (0, r.jsx)(f.WX, {
                            as: "span",
                            margin: 0,
                            children: c ? "(".concat(y, ")") : y
                        }),
                        k = o && m && c ? m.isSameOrBefore(g) ? (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)(f.WX, {
                                as: "span",
                                color: "inherit",
                                margin: "0",
                                variant: "bold",
                                children: m.isSame(p) ? "today" : "tomorrow"
                            }), "\xa0in\xa0", (0, r.jsx)(f.WX, {
                                as: "span",
                                color: "inherit",
                                margin: "0",
                                variant: "bold",
                                children: (0, r.jsx)(T, {
                                    moment: o
                                })
                            })]
                        }) : (0, r.jsxs)(r.Fragment, {
                            children: ["\xa0in\xa0", (0, r.jsxs)(f.WX, {
                                as: "span",
                                color: "inherit",
                                margin: "0",
                                variant: "bold",
                                children: [d().duration(m.diff(p, "days"), "days").asDays(), " ", "days"]
                            })]
                        }) : null,
                        b = (0, r.jsx)(r.Fragment, {
                            children: "\xa0"
                        });
                    return (0, r.jsxs)(h.g, {
                        display: "inline",
                        children: [(0, r.jsx)(f.WX, {
                            as: "span",
                            margin: 0,
                            children: a
                        }), a ? b : null, k, k ? b : null, x, b, (0, r.jsx)(f.WX, {
                            as: "span",
                            margin: 0,
                            children: l
                        })]
                    })
                },
                j = a(48257),
                S = a(81480),
                F = a(46322),
                w = a(94762),
                C = a(40306),
                A = a(96150),
                L = a(72686),
                K = a(11652);

            function I() {
                var n = (0, l.Z)(["\n          margin-right: 32px;\n        "]);
                return I = function() {
                    return n
                }, n
            }

            function N() {
                var n = (0, l.Z)(["\n          margin-right: 50px;\n        "]);
                return N = function() {
                    return n
                }, n
            }

            function O() {
                var n = (0, l.Z)(["\n  font-size: 20px;\n  font-weight: 500;\n\n  .Timer--time-unit {\n    :not(:last-child) {\n      margin-right: 16px;\n\n      ", "\n    }\n\n    .Timer--numbers {\n      color: ", ";\n    }\n  }\n"]);
                return O = function() {
                    return n
                }, n
            }
            var _ = function(n) {
                    var e = n.endMoment,
                        a = n.className,
                        i = e ? new Date(e) : new Date,
                        l = (0, t.useState)(new Date),
                        o = l[0],
                        d = l[1],
                        u = (0, t.useState)((0, F.Z)({
                            start: o,
                            end: i
                        })),
                        c = u[0],
                        m = u[1];
                    (0, k.Z)((function() {
                        if ((0, w.Z)(o, i)) {
                            var n = (0, C.Z)(o, {
                                seconds: 1
                            });
                            d(n), m((0, F.Z)({
                                start: n,
                                end: i
                            }))
                        }
                    }), 1e3);
                    var p, g, y, v = (0, s.Z)(i, o),
                        x = null !== (p = c.hours) && void 0 !== p ? p : 0,
                        T = null !== (g = c.minutes) && void 0 !== g ? g : 0,
                        b = null !== (y = c.seconds) && void 0 !== y ? y : 0,
                        j = v <= 0 && x <= 0;
                    return e ? (0, r.jsx)(P, {
                        lessThanOneHourRemains: j,
                        children: (0, r.jsxs)(A.k, {
                            className: a,
                            flexWrap: "wrap",
                            children: [v > 0 ? (0, r.jsxs)(h.g, {
                                className: "Timer--time-unit",
                                children: [(0, r.jsx)(h.g, {
                                    className: "Timer--numbers",
                                    children: (0, K.pY)(v, 2)
                                }), (0, r.jsx)(f.WX, {
                                    fontSize: 15,
                                    margin: 0,
                                    children: "Days"
                                })]
                            }) : null, (0, r.jsxs)(h.g, {
                                className: "Timer--time-unit",
                                children: [(0, r.jsx)(h.g, {
                                    className: "Timer--numbers",
                                    children: (0, K.pY)(x, 2)
                                }), (0, r.jsx)(f.WX, {
                                    fontSize: 15,
                                    margin: 0,
                                    children: "Hours"
                                })]
                            }), (0, r.jsxs)(h.g, {
                                className: "Timer--time-unit",
                                children: [(0, r.jsx)(h.g, {
                                    className: "Timer--numbers",
                                    children: (0, K.pY)(T, 2)
                                }), (0, r.jsx)(f.WX, {
                                    fontSize: 15,
                                    margin: 0,
                                    children: "Minutes"
                                })]
                            }), (0, r.jsxs)(h.g, {
                                className: "Timer--time-unit",
                                children: [(0, r.jsx)(h.g, {
                                    className: "Timer--numbers",
                                    children: (0, K.pY)(b, 2)
                                }), (0, r.jsx)(f.WX, {
                                    fontSize: 15,
                                    margin: 0,
                                    children: "Seconds"
                                })]
                            })]
                        })
                    }) : (0, r.jsx)(P, {
                        lessThanOneHourRemains: j,
                        children: (0, r.jsxs)(A.k, {
                            className: a,
                            children: [(0, r.jsxs)(h.g, {
                                className: "Timer--time-unit",
                                children: [(0, r.jsx)(L.O.Block, {
                                    height: "24px"
                                }), (0, r.jsx)(f.WX, {
                                    fontSize: 15,
                                    margin: 0,
                                    children: "Days"
                                })]
                            }), (0, r.jsxs)(h.g, {
                                className: "Timer--time-unit",
                                children: [(0, r.jsx)(L.O.Block, {
                                    height: "24px"
                                }), (0, r.jsx)(f.WX, {
                                    fontSize: 15,
                                    margin: 0,
                                    children: "Hours"
                                })]
                            }), (0, r.jsxs)(h.g, {
                                className: "Timer--time-unit",
                                children: [(0, r.jsx)(L.O.Block, {
                                    height: "24px"
                                }), (0, r.jsx)(f.WX, {
                                    fontSize: 15,
                                    margin: 0,
                                    children: "Minutes"
                                })]
                            }), (0, r.jsxs)(h.g, {
                                className: "Timer--time-unit",
                                children: [(0, r.jsx)(L.O.Block, {
                                    height: "24px"
                                }), (0, r.jsx)(f.WX, {
                                    fontSize: 15,
                                    margin: 0,
                                    children: "Seconds"
                                })]
                            })]
                        })
                    })
                },
                P = (0, c.ZP)(h.g).withConfig({
                    componentId: "sc-c2effd3a-0"
                })(O(), (0, S.FD)({
                    phoneM: (0, c.iv)(I()),
                    mobile: (0, c.iv)(N())
                }), (function(n) {
                    return n.lessThanOneHourRemains ? n.theme.colors.error : n.theme.colors.text.heading
                })),
                D = a(48727),
                E = a(84919),
                B = a(33181),
                M = a(56656),
                Z = a(31893),
                W = a(9476),
                V = a(99525),
                R = a(65175),
                z = a(33303),
                H = a(51764),
                Y = a(82020),
                U = a(87481),
                Q = a(29250),
                $ = a(99887),
                G = a(82455),
                X = a(71650),
                q = a(59809),
                J = a(2034),
                nn = a(33609),
                en = a(47366),
                an = a(90761),
                ln = a(72984),
                rn = a(65457);

            function tn() {
                var n = (0, l.Z)(["\n  border-top-right-radius: ", ";\n  border-top-left-radius: ", ";\n\n  padding: 10px;\n\n  border-bottom: 1px solid ", ";\n  color: ", ";\n  font-weight: initial;\n  padding: 20px;\n\n  ", "\n\n  .TradeStation--header-icon-help {\n    &:hover {\n      color: ", ";\n    }\n  }\n\n  .TradeStation--header-dutch-final-price {\n    display: inline-flex;\n    color: inherit;\n  }\n"]);
                return tn = function() {
                    return n
                }, n
            }

            function sn() {
                var n = (0, l.Z)(["\n      .TradeStation--main {\n        padding: 20px;\n      }\n    "]);
                return sn = function() {
                    return n
                }, n
            }

            function on() {
                var n = (0, l.Z)(["\n  .TradeStation--main {\n    background-color: ", ";\n    padding: 12px;\n\n    .TradeStation--ask-label {\n      color: ", ";\n    }\n\n    .TradeStation--price-container {\n      display: flex;\n      flex-wrap: wrap;\n      margin-bottom: 8px;\n\n      .TradeStation--quantity-badge {\n        margin: auto 8px auto 0;\n      }\n\n      .TradeStation--price {\n        font-size: 30px;\n      }\n\n      .TradeStation--fiat-price {\n        font-size: 15px;\n        margin-left: 8px;\n        margin-top: 15px;\n      }\n\n      .TradeStation--price-auction-icon {\n        background-color: ", ";\n        border-radius: 22px;\n        color: ", ";\n        height: 24px;\n        margin-left: 4px;\n        width: 24px;\n\n        &.TradeStation--price-auction-icon-dutch {\n          transform: rotate(270deg);\n        }\n\n        &.TradeStation--price-auction-icon-rising {\n          transform: rotate(180deg);\n        }\n      }\n    }\n  }\n\n  .TradeStation--modal {\n    display: inline-block;\n  }\n\n  ", "\n"]);
                return on = function() {
                    return n
                }, n
            }
            var dn = function(n) {
                    var e, l, o = n.archetypeData,
                        c = n.bundleData,
                        f = n.data,
                        x = n.tradeLimitsDataKey,
                        k = n.onOrdersChanged,
                        T = n.hasPendingListing,
                        S = (0, U.b)(),
                        F = S.wallet,
                        w = (0, u.useFragment)(a(43825), f),
                        C = (0, u.useFragment)(a(18696), c),
                        L = (0, u.useFragment)(a(48453), o),
                        I = (0, u.useFragment)(a(74201), x),
                        N = w.bestAsk,
                        O = "AssetBundleType" === (null === N || void 0 === N ? void 0 : N.item.__typename),
                        P = (0, t.useMemo)((function() {
                            var n, e;
                            return new X.mb({
                                eventSource: "TradeStation",
                                itemId: null === N || void 0 === N ? void 0 : N.item.relayId,
                                assetId: null === N || void 0 === N ? void 0 : N.item.relayId,
                                collectionSlug: null === (n = null === N || void 0 === N ? void 0 : N.item.collection) || void 0 === n ? void 0 : n.slug,
                                assetContractAddress: null === (e = null === N || void 0 === N ? void 0 : N.item.assetContract) || void 0 === e ? void 0 : e.address,
                                tokenId: null === N || void 0 === N ? void 0 : N.item.tokenId,
                                chainId: null === N || void 0 === N ? void 0 : N.item.chain.identifier,
                                usdValue: null === N || void 0 === N ? void 0 : N.priceType.usd,
                                tokenQuantity: null === N || void 0 === N ? void 0 : N.priceType.unit,
                                symbol: null === N || void 0 === N ? void 0 : N.payment.symbol
                            })
                        }), [N]),
                        an = function(n) {
                            return !C && !(0, en.N)(n)
                        },
                        tn = function(n) {
                            return (0, r.jsx)(H.z, {
                                asset: L,
                                bundle: C,
                                collection: null,
                                tradeDataKey: w,
                                tradeLimitsDataKey: I,
                                onClose: n,
                                onOrderCreated: k
                            })
                        },
                        sn = function(n) {
                            var e, a, i = n.onClick,
                                l = n.assetRelayId,
                                t = n.isDisabled,
                                s = void 0 !== t && t,
                                o = null !== (a = null === (e = F.activeAccount) || void 0 === e ? void 0 : e.isCompromised) && void 0 !== a && a,
                                d = o ? Y.p : void 0,
                                u = !O && !(null === L || void 0 === L ? void 0 : L.isBiddingEnabled.value),
                                c = O ? void 0 : function(n) {
                                    if (n) switch (n) {
                                        case "This NFT is in a bad state. Ask the owner to list on OpenSea":
                                            return "Offers can\u2019t currently be made on this Solana NFT. This issue is resolved if listed on OpenSea.";
                                        case "Cannot bid on NFT without owner":
                                            return "This SOL NFT doesn\u2019t have an owner, so no offers can be made on it. This often happens when an NFT is burned.";
                                        default:
                                            return n
                                    }
                                }(null === L || void 0 === L ? void 0 : L.isBiddingEnabled.reason),
                                m = null !== d && void 0 !== d ? d : c,
                                p = !m;
                            return (0, r.jsx)(R.u, {
                                content: m,
                                disabled: p,
                                children: (0, r.jsx)(Z.O, {
                                    marginLeft: [0, 0, 0, "8px"],
                                    marginTop: ["8px", "8px", "8px", 0],
                                    width: ["100%", "100%", "100%", "50%"],
                                    children: (0, r.jsx)(M.zx, {
                                        disabled: s || o || u,
                                        icon: "local_offer",
                                        variant: "secondary",
                                        width: "100%",
                                        onClick: function() {
                                            l && (0, $.TA)({
                                                assetId: l
                                            }), i()
                                        },
                                        children: "Make offer"
                                    })
                                })
                            })
                        };
                    if (!N) return function() {
                        var n = L;
                        if (!n) return null;
                        if (!n.isListable) return null;
                        var e = (0, q.t3)(n.assetOwners);
                        if ((null === e || void 0 === e ? void 0 : e.owner) && F.isActiveAccount(e.owner)) return null;
                        var a = w.bestBid,
                            i = n.verificationStatus;
                        return (0, r.jsx)(cn, {
                            children: (0, r.jsx)(D.ZP, {
                                children: (0, r.jsxs)("div", {
                                    className: "TradeStation--main",
                                    children: [a ? (0, r.jsxs)(r.Fragment, {
                                        children: [(0, r.jsx)("div", {
                                            className: "TradeStation--ask-label",
                                            children: "Best offer"
                                        }), (0, r.jsx)("div", {
                                            className: "TradeStation--price-container",
                                            children: (0, r.jsxs)(r.Fragment, {
                                                children: [(0, r.jsx)(m.O, {
                                                    className: "TradeStation--price TradeStation--price",
                                                    order: a
                                                }), (0, r.jsx)(p.v, {
                                                    className: "TradeStation--fiat-price TradeStation--fiat-price",
                                                    order: a,
                                                    secondary: !0
                                                })]
                                            })
                                        })]
                                    }) : null, (0, r.jsx)(E.p, {
                                        chainIdentifier: n.assetContract.chain,
                                        children: (0, r.jsx)(rn.w, {
                                            assetId: n.relayId,
                                            focusFirstFocusableElement: !1,
                                            renderMainModal: tn,
                                            shouldVerifyCollectionDetails: an(i),
                                            trigger: function(e) {
                                                return sn({
                                                    onClick: e,
                                                    assetRelayId: n.relayId
                                                })
                                            }
                                        })
                                    })]
                                })
                            })
                        })
                    }();
                    if (!N.maker) return null;
                    var on, dn, mn, pn, gn, yn = w.bestBid,
                        hn = null === (e = N.englishAuctionReservePriceType) || void 0 === e ? void 0 : e.unit,
                        fn = N.dutchAuctionFinalPriceType,
                        vn = N.orderType,
                        xn = N.closedAt ? (0, v.pY)(N.closedAt) : void 0,
                        kn = xn ? d().duration(xn.diff(d().utc())).asHours() : void 0,
                        Tn = void 0 !== kn && kn < 0 && "ENGLISH" === vn && !!yn,
                        bn = (0, K.bn)(N.remainingQuantityType),
                        jn = "DUTCH" === vn && fn && (0, K.bn)(N.priceType.unit).isGreaterThan(fn.unit),
                        Sn = "DUTCH" === vn && fn && (0, K.bn)(N.priceType.unit).isLessThan(fn.unit),
                        Fn = N.priceFnEndedAt ? (0, v.pY)(N.priceFnEndedAt) : void 0,
                        wn = xn,
                        Cn = null === Fn || void 0 === Fn ? void 0 : Fn.isSameOrBefore(d()()),
                        An = N.payment.symbol,
                        Ln = "WETH" === An ? "ETH" : An,
                        Kn = (null === yn || void 0 === yn ? void 0 : yn.payment.relayId) === N.payment.relayId,
                        In = function() {
                            if (!hn) return "";
                            var n = Kn && (0, K.bn)(yn.priceType.unit).isGreaterThanOrEqualTo(hn),
                                e = F.isActiveAccount(N.maker) ? "of ".concat((0, K.jf)(hn, An), " ").concat(Ln, " ") : "";
                            return " -- Reserve price ".concat(e, n ? "met!" : "not met.")
                        }(),
                        Nn = (0, v.pY)(N.openedAt).local(),
                        On = Nn.isAfter(d()()),
                        _n = Kn && (0, K.bn)(yn.priceType.unit).isGreaterThan(N.priceType.unit),
                        Pn = N.item.verificationStatus,
                        Dn = function() {
                            (0, G.sy)(N.item)
                        },
                        En = function() {
                            (0, G.$)(N.item)
                        },
                        Bn = an(Pn),
                        Mn = wn ? (0, s.Z)(new Date(wn.format()), new Date) : void 0,
                        Zn = void 0 !== Mn && Mn < 3,
                        Wn = F.isActiveAccount(N.maker),
                        Vn = (0, Q.gQ)(S, K.O$.maximum(N.perUnitPriceType.usd, null !== (on = null === yn || void 0 === yn ? void 0 : yn.perUnitPriceType.usd) && void 0 !== on ? on : 0)),
                        Rn = null !== (dn = null === (l = F.activeAccount) || void 0 === l ? void 0 : l.isCompromised) && void 0 !== dn && dn,
                        zn = Wn || On || Rn || Vn,
                        Hn = N.item.chain.identifier,
                        Yn = F.getActiveAccountKey(),
                        Un = {
                            chain: Hn,
                            orderId: N.relayId,
                            paymentAsset: N.payment.relayId,
                            identity: {
                                address: null === Yn || void 0 === Yn ? void 0 : Yn.address
                            },
                            addressForPaymentBalance: null !== (mn = null === Yn || void 0 === Yn ? void 0 : Yn.address) && void 0 !== mn ? mn : ""
                        },
                        Qn = "ENGLISH" !== vn,
                        $n = Rn ? Y.p : void 0,
                        Gn = Wn ? "You own this item." : void 0,
                        Xn = On ? (0, J.dG)(Nn, "ENGLISH" === vn ? "bid on" : "buy") : void 0,
                        qn = null !== (pn = null !== $n && void 0 !== $n ? $n : Gn) && void 0 !== pn ? pn : Xn,
                        Jn = function(n) {
                            return T ? (0, r.jsx)(r.Fragment, {}) : (0, r.jsx)(Z.O, {
                                width: {
                                    _: "100%",
                                    xl: Qn ? "50%" : "100%"
                                },
                                children: (0, r.jsx)(M.zx, {
                                    disabled: zn,
                                    icon: "account_balance_wallet",
                                    width: "100%",
                                    onClick: function() {
                                        "ENGLISH" !== vn && P.trackClickBuyNow(), n && n()
                                    },
                                    children: "ENGLISH" === vn ? "Place bid" : "Buy ".concat(C ? "bundle" : "now")
                                })
                            })
                        },
                        ne = (0, r.jsxs)("div", {
                            className: "TradeStation--main",
                            children: [!T && (0, r.jsxs)("div", {
                                className: "TradeStation--ask-label",
                                children: ["ENGLISH" === vn ? _n ? "Top bid" : "Minimum bid" : "Current price", In]
                            }), (0, r.jsxs)("div", {
                                className: "TradeStation--price-container",
                                children: [bn.isGreaterThan(1) ? (0, r.jsx)(R.u, {
                                    content: "Quantity: ".concat(bn),
                                    children: (0, r.jsx)(y.C, {
                                        className: "TradeStation--quantity-badge",
                                        icon: "filter_none",
                                        text: "x".concat(bn)
                                    })
                                }) : null, "ENGLISH" === vn && yn && _n ? (0, r.jsxs)(r.Fragment, {
                                    children: [(0, r.jsx)(m.O, {
                                        className: "TradeStation--price",
                                        order: yn,
                                        size: 24
                                    }), (0, r.jsx)(p.v, {
                                        className: "TradeStation--fiat-price",
                                        order: yn,
                                        secondary: !0
                                    })]
                                }) : function() {
                                    if (T) return (0, r.jsx)(r.Fragment, {});
                                    var n = (0, r.jsxs)(r.Fragment, {
                                        children: [(0, r.jsx)(m.O, {
                                            className: "TradeStation--price",
                                            order: N,
                                            size: 24,
                                            variant: "perUnit"
                                        }), (0, r.jsx)(p.v, {
                                            className: "TradeStation--fiat-price",
                                            order: N,
                                            secondary: !0,
                                            variant: "perUnit"
                                        })]
                                    });
                                    return B.W6 ? n : (0, r.jsx)(t.Suspense, {
                                        fallback: (0, r.jsx)(W.aN, {}),
                                        children: n
                                    })
                                }(), (jn || Sn) && !Cn || "ENGLISH" === vn ? (0, r.jsx)(z.B, {
                                    children: (0, r.jsx)(R.u, {
                                        content: "DUTCH" === vn ? (0, r.jsxs)("div", {
                                            children: [(0, r.jsx)("div", {
                                                children: Sn ? "Price increasing" : "Price declining"
                                            }), (0, r.jsxs)("div", {
                                                children: ["The buy-it-now price is", " ", Sn ? "increasing" : "declining", " from\xa0", (0, r.jsx)(h.g, {
                                                    display: "inline",
                                                    verticalAlign: "sub",
                                                    children: (0, r.jsx)(m.O, {
                                                        color: "white",
                                                        isInline: !0,
                                                        order: N
                                                    })
                                                }), "\xa0to\xa0", (0, r.jsx)(h.g, {
                                                    display: "inline",
                                                    verticalAlign: "sub",
                                                    children: (0, r.jsx)(g.G, (0, i.Z)({
                                                        color: "white",
                                                        isInline: !0,
                                                        price: (0, K.bn)(null !== (gn = null === fn || void 0 === fn ? void 0 : fn.unit) && void 0 !== gn ? gn : "0")
                                                    }, (0, g.C)(N.payment)))
                                                }), ", ending", (0, r.jsx)(h.g, {
                                                    display: "inline",
                                                    verticalAlign: "middle",
                                                    children: (0, r.jsx)(b, {
                                                        endMoment: wn
                                                    })
                                                })]
                                            })]
                                        }) : "The highest bidder will win the item at the end of the auction.",
                                        children: (0, r.jsx)(j.J, {
                                            "aria-label": "DUTCH" === vn ? "Price decreasing" : "Price increasing",
                                            className: (0, nn.A)("TradeStation", {
                                                "price-auction-icon": !0,
                                                "price-auction-icon-dutch": "DUTCH" === vn,
                                                "price-auction-icon-rising": Sn || "ENGLISH" === vn
                                            }),
                                            cursor: "pointer",
                                            value: "transit_enterexit"
                                        })
                                    })
                                }) : null]
                            }), (0, r.jsx)(h.g, {
                                display: ["block", "block", "block", "flex"],
                                maxWidth: ["100%", "100%", "100%", "420px"],
                                children: (0, r.jsx)(E.p, {
                                    chainIdentifier: Hn,
                                    overrides: {
                                        unsupportedModalButton: {
                                            style: {
                                                width: "100%",
                                                display: "contents"
                                            }
                                        }
                                    },
                                    children: zn ? (0, r.jsx)(R.u, {
                                        content: Vn ? "This transaction cannot be completed at this time" : qn,
                                        placement: "right",
                                        children: Jn()
                                    }) : (0, r.jsxs)(r.Fragment, {
                                        children: [(0, r.jsx)(rn.w, {
                                            assetId: N.item.relayId,
                                            focusFirstFocusableElement: !1,
                                            renderMainModal: "ENGLISH" === vn ? tn : function(n) {
                                                return Yn ? (0, r.jsx)(ln.B, {
                                                    variables: Un,
                                                    onClose: n
                                                }) : null
                                            },
                                            shouldVerifyCollectionDetails: Bn,
                                            trigger: Jn,
                                            onClose: Dn,
                                            onPrevious: En
                                        }), Qn ? (0, r.jsx)(rn.w, {
                                            assetId: N.item.relayId,
                                            focusFirstFocusableElement: !1,
                                            renderMainModal: tn,
                                            shouldVerifyCollectionDetails: Bn,
                                            trigger: function(n) {
                                                return sn({
                                                    onClick: n,
                                                    assetRelayId: N.item.relayId,
                                                    isDisabled: zn
                                                })
                                            },
                                            onClose: Dn,
                                            onPrevious: En
                                        }) : null]
                                    })
                                })
                            })]
                        });
                    return !N.priceFnEndedAt && !xn || Cn ? (0, r.jsx)(cn, {
                        children: (0, r.jsx)(D.ZP, {
                            children: ne
                        })
                    }) : (0, r.jsx)(X.LW.Provider, {
                        value: {
                            tracker: P
                        },
                        children: (0, r.jsx)(cn, {
                            children: (0, r.jsxs)(D.ZP, {
                                children: [!T && (0, r.jsxs)(un, {
                                    className: "TradeStation--header",
                                    children: [(0, r.jsxs)(V.i, {
                                        alignItems: "center",
                                        children: [(0, r.jsxs)(A.k, {
                                            children: [Zn ? null : (0, r.jsx)(A.k, {
                                                alignItems: "center",
                                                marginRight: "4px",
                                                children: (0, r.jsx)(j.J, {
                                                    className: "TradeStation--header-icon",
                                                    value: Tn ? "gavel" : "schedule"
                                                })
                                            }), Tn ? (0, r.jsx)(h.g, {
                                                children: "Sold! Matching orders on the blockchain."
                                            }) : (0, r.jsx)(b, {
                                                endMoment: wn,
                                                includeCountDown: !1,
                                                includeDate: !0,
                                                postfix: fn ? (0, r.jsxs)(r.Fragment, {
                                                    children: ["\xa0at\xa0", (0, r.jsx)(g.G, (0, i.Z)({
                                                        className: "TradeStation--header-dutch-final-price",
                                                        price: (0, K.bn)(fn.unit)
                                                    }, (0, g.C)(N.payment)))]
                                                }) : void 0,
                                                prefix: xn ? "Sale ends" : Sn ? "Price increase ends" : "Price decline ends"
                                            })]
                                        }), "DUTCH" === vn || "ENGLISH" === vn ? (0, r.jsx)(R.u, {
                                            content: "DUTCH" === vn ? (0, r.jsxs)(h.g, {
                                                children: [Sn ? "Increasing" : "Declining", " Price Auction The price of this item", " ", Sn ? "increases" : "declines", " over time. It can be bought by anyone at any point during the duration of the auction."]
                                            }) : (0, r.jsxs)(h.g, {
                                                children: ["Extending Auction ", (0, r.jsx)("br", {}), "A new highest bid placed under 10 minutes remaining will extend the auction by an additional 10 minutes."]
                                            }),
                                            children: (0, r.jsx)(j.J, {
                                                className: "TradeStation--header-icon-help",
                                                cursor: "pointer",
                                                value: "help_outline"
                                            })
                                        }) : null]
                                    }), Zn ? (0, r.jsx)(h.g, {
                                        marginTop: "8px",
                                        children: (0, r.jsx)(_, {
                                            endMoment: null === wn || void 0 === wn ? void 0 : wn.format()
                                        })
                                    }) : null]
                                }), ne]
                            })
                        })
                    })
                },
                un = (0, c.ZP)(h.g).withConfig({
                    componentId: "sc-60c8ab9e-0"
                })(tn(), (function(n) {
                    return n.theme.borderRadius.default
                }), (function(n) {
                    return n.theme.borderRadius.default
                }), (function(n) {
                    return n.theme.colors.border
                }), (function(n) {
                    return n.theme.colors.text.subtle
                }), (function(n) {
                    var e = n.theme;
                    return (0, an.Um)({
                        variants: {
                            light: {
                                "background-color": e.colors.white
                            },
                            dark: {
                                "background-color": e.colors.onyx
                            }
                        }
                    })
                }), (function(n) {
                    return n.theme.colors.text.heading
                })),
                cn = c.ZP.div.withConfig({
                    componentId: "sc-60c8ab9e-1"
                })(on(), (function(n) {
                    return n.theme.colors.panel
                }), (function(n) {
                    return n.theme.colors.text.subtle
                }), (function(n) {
                    return n.theme.colors.text.subtle
                }), (function(n) {
                    return n.theme.colors.white
                }), (0, S.FD)({
                    tabletL: (0, c.iv)(sn())
                }))
        },
        31893: function(n, e, a) {
            a.d(e, {
                O: function() {
                    return s
                }
            });
            var i = a(19989),
                l = a(47892),
                r = a(53585);

            function t() {
                var n = (0, i.Z)(["\n  display: inline-flex;\n"]);
                return t = function() {
                    return n
                }, n
            }
            var s = (0, l.ZP)(r.g).withConfig({
                componentId: "sc-40f22686-0"
            })(t())
        },
        15609: function(n, e, a) {
            a.d(e, {
                Q: function() {
                    return y
                },
                f: function() {
                    return p
                }
            });
            var i = a(23842),
                l = a(35230),
                r = a.n(l),
                t = a(24246),
                s = a(27378),
                o = a(12393),
                d = a(33181),
                u = a(53585),
                c = a(377),
                m = a(9476),
                p = function(n) {
                    var e = n.loadNext,
                        a = n.count;
                    return new Promise((function(n, i) {
                        e(a, {
                            onComplete: function(e) {
                                e ? i(e) : n()
                            }
                        })
                    }))
                };

            function g() {
                return (g = (0, i.Z)(r().mark((function n() {
                    return r().wrap((function(n) {
                        for (;;) switch (n.prev = n.next) {
                            case 0:
                                if ("undefined" !== typeof window.IntersectionObserver) {
                                    n.next = 3;
                                    break
                                }
                                return n.next = 3, a.e(17827).then(a.t.bind(a, 17827, 23));
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
            var y = function(n) {
                var e = n.disableLoader,
                    a = n.isFirstPageLoading,
                    l = n.intersectionOptions,
                    d = n.page,
                    p = d.hasMore,
                    g = d.loadMore,
                    y = d.isLoading,
                    h = n.children,
                    f = n.onLoad,
                    v = n.onLoadStart,
                    x = n.size,
                    k = (0, o.YD)(l),
                    T = k.ref,
                    b = k.inView,
                    j = (0, s.useState)(!1),
                    S = j[0],
                    F = j[1],
                    w = y(),
                    C = p(),
                    A = function() {
                        var n = (0, i.Z)(r().mark((function n() {
                            return r().wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return v && v(), F(!0), n.next = 4, g(x);
                                    case 4:
                                        setTimeout((function() {
                                            return F(!1)
                                        }), 0), f && f();
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
                    !b || !C || S || w || e || A()
                }), [b, C, S, w, e]);
                return (0, t.jsx)(c._, {
                    ref: T,
                    children: !S && !a || e ? C ? S || a ? h || null : (0, t.jsx)(u.g, {
                        height: "1px",
                        width: "1px"
                    }) : null : (0, t.jsx)(u.g, {
                        margin: "8px",
                        children: (0, t.jsx)(m.aN, {})
                    })
                })
            }
        },
        8148: function(n, e, a) {
            a.d(e, {
                i: function() {
                    return S
                }
            });
            var i, l, r = a(85034),
                t = a(70169),
                s = a(31373),
                o = a(19989),
                d = a(24246),
                u = (a(27378), a(47892)),
                c = a(510),
                m = a(53585),
                p = a(98784),
                g = a(72686),
                y = a(66079),
                h = function(n) {
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

            function f() {
                var n = (0, o.Z)(["\n  width: 100%;\n  padding: 0;\n  margin: 0;\n  display: grid;\n  grid-template-columns: ", ';\n\n  [role="cell"],\n  [role="columnheader"] {\n    padding-left: ', "px;\n    padding-right: ", "px;\n\n    &:nth-child(", "n) {\n      padding-right: ", "px;\n    }\n    &:nth-child(", "n + 1) {\n      padding-left: ", "px;\n    }\n  }\n"]);
                return f = function() {
                    return n
                }, n
            }

            function v() {
                var n = (0, o.Z)(["\n  display: contents;\n"]);
                return v = function() {
                    return n
                }, n
            }

            function x() {
                var n = (0, o.Z)(["\n  display: flex;\n  align-items: center;\n  padding-top: ", ";\n  padding-bottom: ", ";\n  background-color: ", ";\n  border-top: ", ';\n\n  &[role="columnheader"] {\n    z-index: 2;\n    position: sticky;\n    top: 0;\n    border-bottom: 1px solid ', ";\n    /* Workaround for double border issue */\n    margin-top: -1px;\n  }\n"]);
                return x = function() {
                    return n
                }, n
            }
            var k = u.ZP.ul.attrs({
                    role: "table"
                }).withConfig({
                    componentId: "sc-495851fd-0"
                })(f(), (function(n) {
                    var e = n.defaultMaxColumnWidth ? "".concat(n.defaultMaxColumnWidth, "px") : "auto",
                        a = n.defaultMinColumnWidth ? "".concat(n.defaultMinColumnWidth, "px") : "auto";
                    return n.minColumnWidths || n.maxColumnWidths ? n.maxColumnWidths ? n.minColumnWidths ? (0, p.range)(n.columns).map((function(i) {
                        var l, r;
                        return " minmax(".concat(void 0 === (null === (l = n.minColumnWidths) || void 0 === l ? void 0 : l[i]) ? a : "auto" === n.minColumnWidths[i] ? "auto" : "".concat(n.minColumnWidths[i], "px"), ", ").concat(void 0 === (null === (r = n.maxColumnWidths) || void 0 === r ? void 0 : r[i]) ? e : "auto" === n.maxColumnWidths[i] ? "auto" : "".concat(n.maxColumnWidths[i], "px"), ")")
                    })) : (0, p.range)(n.columns).map((function(i) {
                        var l;
                        return " minmax(".concat(a, ", ").concat(void 0 === (null === (l = n.maxColumnWidths) || void 0 === l ? void 0 : l[i]) ? e : "auto" === n.maxColumnWidths[i] ? "auto" : "".concat(n.maxColumnWidths[i], "px"), ")")
                    })) : (0, p.range)(n.columns).map((function(i) {
                        var l;
                        return " minmax(".concat(void 0 === (null === (l = n.minColumnWidths) || void 0 === l ? void 0 : l[i]) ? a : "auto" === n.minColumnWidths[i] ? "auto" : "".concat(n.minColumnWidths[i], "px"), ", ").concat(e, ")")
                    })) : "repeat(".concat(n.columns, ", minmax(").concat(a, ", ").concat(e, "))")
                }), (function(n) {
                    return null !== (i = n.horizontalSpacing) && void 0 !== i ? i : 8
                }), (function(n) {
                    return null !== (l = n.horizontalSpacing) && void 0 !== l ? l : 8
                }), (function(n) {
                    return n.columns
                }), (function(n) {
                    return n.horizontalSpacing ? 2 * n.horizontalSpacing : 16
                }), (function(n) {
                    return n.columns
                }), (function(n) {
                    return n.horizontalSpacing ? 2 * n.horizontalSpacing : 16
                })),
                T = u.ZP.li.attrs({
                    role: "row"
                }).withConfig({
                    componentId: "sc-495851fd-1"
                })(v()),
                b = (0, u.ZP)(m.g).withConfig({
                    componentId: "sc-495851fd-2"
                })(x(), (function(n) {
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
                j = function(n) {
                    var e = n.children,
                        a = n.className,
                        i = (0, s.Z)(n, ["children", "className"]);
                    return (0, d.jsx)(b, (0, t.Z)((0, r.Z)({
                        className: a
                    }, i), {
                        role: "columnheader",
                        variant: "header",
                        children: (0, d.jsx)(c.n, {
                            children: e
                        })
                    }))
                },
                S = Object.assign((function(n) {
                    var e = n.headers,
                        a = n.minColumnWidths,
                        i = n.maxColumnWidths,
                        l = n.defaultMinColumnWidth,
                        r = n.defaultMaxColumnWidth,
                        t = n.horizontalSpacing,
                        s = n.children,
                        o = n.renderHeader;
                    return (0, d.jsxs)(k, {
                        columns: e.length,
                        defaultMaxColumnWidth: r,
                        defaultMinColumnWidth: l,
                        horizontalSpacing: t,
                        maxColumnWidths: i,
                        minColumnWidths: a,
                        children: [(0, d.jsx)(T, {
                            children: e.map((function(n, e) {
                                return o ? o({
                                    Header: j,
                                    header: n,
                                    index: e
                                }) : (0, d.jsx)(j, {
                                    children: n
                                }, e)
                            }))
                        }), s]
                    })
                }), {
                    Row: T,
                    Cell: function(n) {
                        var e = n.children,
                            a = n.className,
                            i = (0, s.Z)(n, ["children", "className"]);
                        return (0, d.jsx)(b, (0, t.Z)((0, r.Z)({
                            className: a
                        }, i), {
                            role: "cell",
                            variant: "body",
                            children: (0, d.jsx)(c.n, {
                                children: e
                            })
                        }))
                    },
                    Skeleton: function(n) {
                        var e = n.rowCount,
                            a = void 0 === e ? 10 : e,
                            i = n.columnCount,
                            l = void 0 === i ? 5 : i,
                            r = n.rowHeight,
                            t = void 0 === r ? "55px" : r,
                            s = n.maxHeight,
                            o = n.headers;
                        return (0, d.jsx)(m.g, {
                            maxHeight: s,
                            overflow: "scroll",
                            children: (0, d.jsx)(S, {
                                headers: null !== o && void 0 !== o ? o : Array(l).fill(y.Xz),
                                children: (0, p.range)(a).map((function(n, e) {
                                    return (0, d.jsx)(h, {
                                        height: t
                                    }, e)
                                }))
                            })
                        })
                    },
                    RowSkeleton: h
                })
        },
        88486: function(n, e, a) {
            a.r(e);
            var i = function() {
                var n = {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "archetype"
                    },
                    e = {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "assetId"
                    },
                    a = {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "bundle"
                    },
                    i = {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "isBundle"
                    },
                    l = {
                        kind: "Literal",
                        name: "first",
                        value: 20
                    },
                    r = {
                        kind: "Literal",
                        name: "isValid",
                        value: !0
                    },
                    t = {
                        kind: "Literal",
                        name: "maker",
                        value: {}
                    },
                    s = {
                        kind: "Literal",
                        name: "sortAscending",
                        value: !0
                    },
                    o = {
                        kind: "Literal",
                        name: "sortBy",
                        value: "TAKER_ASSETS_USD_PRICE"
                    },
                    d = {
                        kind: "Literal",
                        name: "takerAssetIsPayment",
                        value: !0
                    },
                    u = [l, {
                        kind: "Literal",
                        name: "isExpired",
                        value: !1
                    }, r, t, {
                        kind: "Variable",
                        name: "makerArchetype",
                        variableName: "archetype"
                    }, s, o, d],
                    c = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "relayId",
                        storageKey: null
                    },
                    m = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "isFulfillable",
                        storageKey: null
                    },
                    p = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "closedAt",
                        storageKey: null
                    },
                    g = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "address",
                        storageKey: null
                    },
                    y = {
                        alias: null,
                        args: null,
                        concreteType: "AccountType",
                        kind: "LinkedField",
                        name: "taker",
                        plural: !1,
                        selections: [g],
                        storageKey: null
                    },
                    h = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "symbol",
                        storageKey: null
                    },
                    f = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "displayImageUrl",
                        storageKey: null
                    },
                    v = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "usdSpotPrice",
                        storageKey: null
                    },
                    x = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "decimals",
                        storageKey: null
                    },
                    k = {
                        alias: null,
                        args: null,
                        concreteType: "PaymentAssetType",
                        kind: "LinkedField",
                        name: "payment",
                        plural: !1,
                        selections: [c, h, {
                            alias: null,
                            args: null,
                            concreteType: "AssetType",
                            kind: "LinkedField",
                            name: "asset",
                            plural: !1,
                            selections: [c],
                            storageKey: null
                        }, {
                            kind: "InlineDataFragmentSpread",
                            name: "utils_PaymentAssetOption",
                            selections: [c, h, {
                                alias: null,
                                args: null,
                                concreteType: "AssetType",
                                kind: "LinkedField",
                                name: "asset",
                                plural: !1,
                                selections: [c, f, v, x],
                                storageKey: null
                            }],
                            args: null,
                            argumentDefinitions: []
                        }],
                        storageKey: null
                    },
                    T = {
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
                            name: "unit",
                            storageKey: null
                        }],
                        storageKey: null
                    },
                    b = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "itemQuantityType",
                        storageKey: null
                    },
                    j = [{
                        alias: null,
                        args: null,
                        concreteType: "CollectionType",
                        kind: "LinkedField",
                        name: "collection",
                        plural: !1,
                        selections: [{
                            args: null,
                            kind: "FragmentSpread",
                            name: "PriceDropModal_collection"
                        }],
                        storageKey: null
                    }],
                    S = [{
                        kind: "Variable",
                        name: "asset",
                        variableName: "assetId"
                    }],
                    F = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "chain",
                        storageKey: null
                    },
                    w = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "tokenId",
                        storageKey: null
                    },
                    C = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "slug",
                        storageKey: null
                    },
                    A = {
                        alias: null,
                        args: null,
                        concreteType: "AbleToType",
                        kind: "LinkedField",
                        name: "isEditable",
                        plural: !1,
                        selections: [{
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "value",
                            storageKey: null
                        }],
                        storageKey: null
                    },
                    L = {
                        alias: null,
                        args: [{
                            kind: "Literal",
                            name: "identity",
                            value: {}
                        }],
                        kind: "ScalarField",
                        name: "ownedQuantity",
                        storageKey: "ownedQuantity(identity:{})"
                    },
                    K = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "isCurrentlyFungible",
                        storageKey: null
                    },
                    I = [l, r, t, {
                        kind: "Variable",
                        name: "makerAssetBundle",
                        variableName: "bundle"
                    }, s, o, d],
                    N = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "id",
                        storageKey: null
                    },
                    O = {
                        alias: null,
                        args: null,
                        concreteType: "AccountType",
                        kind: "LinkedField",
                        name: "taker",
                        plural: !1,
                        selections: [g, N],
                        storageKey: null
                    },
                    _ = {
                        alias: null,
                        args: null,
                        concreteType: "PaymentAssetType",
                        kind: "LinkedField",
                        name: "payment",
                        plural: !1,
                        selections: [c, h, {
                            alias: null,
                            args: null,
                            concreteType: "AssetType",
                            kind: "LinkedField",
                            name: "asset",
                            plural: !1,
                            selections: [c, N, f, v, x],
                            storageKey: null
                        }, N],
                        storageKey: null
                    },
                    P = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "__typename",
                        storageKey: null
                    },
                    D = [{
                        alias: null,
                        args: null,
                        concreteType: "CollectionType",
                        kind: "LinkedField",
                        name: "collection",
                        plural: !1,
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
                                concreteType: "PriceType",
                                kind: "LinkedField",
                                name: "floorPrice",
                                plural: !1,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "usd",
                                    storageKey: null
                                }],
                                storageKey: null
                            }],
                            storageKey: null
                        }, N],
                        storageKey: null
                    }],
                    E = {
                        kind: "InlineFragment",
                        selections: [N],
                        type: "Node",
                        abstractKey: "__isNode"
                    };
                return {
                    fragment: {
                        argumentDefinitions: [n, e, a, i],
                        kind: "Fragment",
                        metadata: null,
                        name: "OrderManagerQuery",
                        selections: [{
                            condition: "isBundle",
                            kind: "Condition",
                            passingValue: !1,
                            selections: [{
                                alias: null,
                                args: u,
                                concreteType: "OrderV2TypeConnection",
                                kind: "LinkedField",
                                name: "orders",
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
                                        selections: [c, m, p, y, k, T, b, {
                                            alias: null,
                                            args: null,
                                            concreteType: null,
                                            kind: "LinkedField",
                                            name: "item",
                                            plural: !1,
                                            selections: [c, {
                                                kind: "InlineFragment",
                                                selections: j,
                                                type: "AssetType",
                                                abstractKey: null
                                            }],
                                            storageKey: null
                                        }],
                                        storageKey: null
                                    }],
                                    storageKey: null
                                }],
                                storageKey: null
                            }, {
                                alias: null,
                                args: S,
                                concreteType: "AssetType",
                                kind: "LinkedField",
                                name: "asset",
                                plural: !1,
                                selections: [{
                                    kind: "InlineDataFragmentSpread",
                                    name: "asset_edit_url",
                                    selections: [{
                                        alias: null,
                                        args: null,
                                        concreteType: "AssetContractType",
                                        kind: "LinkedField",
                                        name: "assetContract",
                                        plural: !1,
                                        selections: [g, F],
                                        storageKey: null
                                    }, w, {
                                        alias: null,
                                        args: null,
                                        concreteType: "CollectionType",
                                        kind: "LinkedField",
                                        name: "collection",
                                        plural: !1,
                                        selections: [C],
                                        storageKey: null
                                    }],
                                    args: null,
                                    argumentDefinitions: []
                                }, A, c, L, K],
                                storageKey: null
                            }]
                        }, {
                            condition: "isBundle",
                            kind: "Condition",
                            passingValue: !0,
                            selections: [{
                                alias: "bundleOrders",
                                args: I,
                                concreteType: "OrderV2TypeConnection",
                                kind: "LinkedField",
                                name: "orders",
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
                                        selections: [c, m, p, y, k, T, b, {
                                            alias: null,
                                            args: null,
                                            concreteType: null,
                                            kind: "LinkedField",
                                            name: "item",
                                            plural: !1,
                                            selections: [c, {
                                                kind: "InlineFragment",
                                                selections: j,
                                                type: "AssetBundleType",
                                                abstractKey: null
                                            }],
                                            storageKey: null
                                        }],
                                        storageKey: null
                                    }],
                                    storageKey: null
                                }],
                                storageKey: null
                            }]
                        }],
                        type: "Query",
                        abstractKey: null
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: [e, n, a, i],
                        kind: "Operation",
                        name: "OrderManagerQuery",
                        selections: [{
                            condition: "isBundle",
                            kind: "Condition",
                            passingValue: !1,
                            selections: [{
                                alias: null,
                                args: u,
                                concreteType: "OrderV2TypeConnection",
                                kind: "LinkedField",
                                name: "orders",
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
                                        selections: [c, m, p, O, _, T, b, {
                                            alias: null,
                                            args: null,
                                            concreteType: null,
                                            kind: "LinkedField",
                                            name: "item",
                                            plural: !1,
                                            selections: [P, c, {
                                                kind: "InlineFragment",
                                                selections: D,
                                                type: "AssetType",
                                                abstractKey: null
                                            }, E],
                                            storageKey: null
                                        }, N],
                                        storageKey: null
                                    }],
                                    storageKey: null
                                }],
                                storageKey: null
                            }, {
                                alias: null,
                                args: S,
                                concreteType: "AssetType",
                                kind: "LinkedField",
                                name: "asset",
                                plural: !1,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    concreteType: "AssetContractType",
                                    kind: "LinkedField",
                                    name: "assetContract",
                                    plural: !1,
                                    selections: [g, F, N],
                                    storageKey: null
                                }, w, {
                                    alias: null,
                                    args: null,
                                    concreteType: "CollectionType",
                                    kind: "LinkedField",
                                    name: "collection",
                                    plural: !1,
                                    selections: [C, N],
                                    storageKey: null
                                }, A, c, L, K, N],
                                storageKey: null
                            }]
                        }, {
                            condition: "isBundle",
                            kind: "Condition",
                            passingValue: !0,
                            selections: [{
                                alias: "bundleOrders",
                                args: I,
                                concreteType: "OrderV2TypeConnection",
                                kind: "LinkedField",
                                name: "orders",
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
                                        selections: [c, m, p, O, _, T, b, {
                                            alias: null,
                                            args: null,
                                            concreteType: null,
                                            kind: "LinkedField",
                                            name: "item",
                                            plural: !1,
                                            selections: [P, c, {
                                                kind: "InlineFragment",
                                                selections: D,
                                                type: "AssetBundleType",
                                                abstractKey: null
                                            }, E],
                                            storageKey: null
                                        }, N],
                                        storageKey: null
                                    }],
                                    storageKey: null
                                }],
                                storageKey: null
                            }]
                        }]
                    },
                    params: {
                        cacheID: "6022dc1563640bb1da74b08368b532e0",
                        id: null,
                        metadata: {},
                        name: "OrderManagerQuery",
                        operationKind: "query",
                        text: "query OrderManagerQuery(\n  $assetId: AssetRelayID!\n  $archetype: ArchetypeInputType!\n  $bundle: BundleSlug\n  $isBundle: Boolean!\n) {\n  orders(first: 20, isValid: true, isExpired: false, maker: {}, makerArchetype: $archetype, sortAscending: true, sortBy: TAKER_ASSETS_USD_PRICE, takerAssetIsPayment: true) @skip(if: $isBundle) {\n    edges {\n      node {\n        relayId\n        isFulfillable\n        closedAt\n        taker {\n          address\n          id\n        }\n        payment {\n          relayId\n          symbol\n          asset {\n            relayId\n            id\n          }\n          ...utils_PaymentAssetOption\n          id\n        }\n        priceType {\n          unit\n        }\n        itemQuantityType\n        item {\n          __typename\n          relayId\n          ... on AssetType {\n            collection {\n              ...PriceDropModal_collection\n              id\n            }\n          }\n          ... on Node {\n            __isNode: __typename\n            id\n          }\n        }\n        id\n      }\n    }\n  }\n  asset(asset: $assetId) @skip(if: $isBundle) {\n    ...asset_edit_url\n    isEditable {\n      value\n    }\n    relayId\n    ownedQuantity(identity: {})\n    isCurrentlyFungible\n    id\n  }\n  bundleOrders: orders(first: 20, isValid: true, maker: {}, makerAssetBundle: $bundle, sortAscending: true, sortBy: TAKER_ASSETS_USD_PRICE, takerAssetIsPayment: true) @include(if: $isBundle) {\n    edges {\n      node {\n        relayId\n        isFulfillable\n        closedAt\n        taker {\n          address\n          id\n        }\n        payment {\n          relayId\n          symbol\n          asset {\n            relayId\n            id\n          }\n          ...utils_PaymentAssetOption\n          id\n        }\n        priceType {\n          unit\n        }\n        itemQuantityType\n        item {\n          __typename\n          relayId\n          ... on AssetBundleType {\n            collection {\n              ...PriceDropModal_collection\n              id\n            }\n          }\n          ... on Node {\n            __isNode: __typename\n            id\n          }\n        }\n        id\n      }\n    }\n  }\n}\n\nfragment PriceDropModal_collection on CollectionType {\n  statsV2 {\n    floorPrice {\n      usd\n    }\n  }\n}\n\nfragment asset_edit_url on AssetType {\n  assetContract {\n    address\n    chain\n    id\n  }\n  tokenId\n  collection {\n    slug\n    id\n  }\n}\n\nfragment utils_PaymentAssetOption on PaymentAssetType {\n  relayId\n  symbol\n  asset {\n    relayId\n    displayImageUrl\n    usdSpotPrice\n    decimals\n    id\n  }\n}\n"
                    }
                }
            }();
            i.hash = "6831447abaf4554087abd80fb6e918f7", e.default = i
        },
        18193: function(n, e, a) {
            a.r(e);
            var i = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "PriceDropModal_collection",
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
                        concreteType: "PriceType",
                        kind: "LinkedField",
                        name: "floorPrice",
                        plural: !1,
                        selections: [{
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "usd",
                            storageKey: null
                        }],
                        storageKey: null
                    }],
                    storageKey: null
                }],
                type: "CollectionType",
                abstractKey: null,
                hash: "7a2066d3b1b66377527c2df52ae12293"
            };
            e.default = i
        },
        46371: function(n, e, a) {
            a.r(e);
            var i = function() {
                var n = [{
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "archetype"
                    }, {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "bundle"
                    }, {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "includePrivate"
                    }],
                    e = [{
                        kind: "Variable",
                        name: "archetype",
                        variableName: "archetype"
                    }, {
                        kind: "Variable",
                        name: "bundle",
                        variableName: "bundle"
                    }, {
                        kind: "Variable",
                        name: "includePrivate",
                        variableName: "includePrivate"
                    }],
                    a = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "address",
                        storageKey: null
                    },
                    i = {
                        kind: "InlineDataFragmentSpread",
                        name: "wallet_accountKey",
                        selections: [a],
                        args: null,
                        argumentDefinitions: []
                    },
                    l = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "id",
                        storageKey: null
                    };
                return {
                    fragment: {
                        argumentDefinitions: n,
                        kind: "Fragment",
                        metadata: null,
                        name: "PrivateListingBannerQuery",
                        selections: [{
                            alias: null,
                            args: e,
                            concreteType: "TradeSummaryType",
                            kind: "LinkedField",
                            name: "tradeSummary",
                            plural: !1,
                            selections: [{
                                alias: null,
                                args: null,
                                concreteType: "OrderV2Type",
                                kind: "LinkedField",
                                name: "bestAsk",
                                plural: !1,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    concreteType: "AccountType",
                                    kind: "LinkedField",
                                    name: "taker",
                                    plural: !1,
                                    selections: [a, {
                                        args: null,
                                        kind: "FragmentSpread",
                                        name: "AccountLink_data"
                                    }, i],
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    concreteType: "AccountType",
                                    kind: "LinkedField",
                                    name: "maker",
                                    plural: !1,
                                    selections: [i],
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
                        argumentDefinitions: n,
                        kind: "Operation",
                        name: "PrivateListingBannerQuery",
                        selections: [{
                            alias: null,
                            args: e,
                            concreteType: "TradeSummaryType",
                            kind: "LinkedField",
                            name: "tradeSummary",
                            plural: !1,
                            selections: [{
                                alias: null,
                                args: null,
                                concreteType: "OrderV2Type",
                                kind: "LinkedField",
                                name: "bestAsk",
                                plural: !1,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    concreteType: "AccountType",
                                    kind: "LinkedField",
                                    name: "taker",
                                    plural: !1,
                                    selections: [a, {
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
                                        }, l],
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "displayName",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "imageUrl",
                                        storageKey: null
                                    }, l],
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    concreteType: "AccountType",
                                    kind: "LinkedField",
                                    name: "maker",
                                    plural: !1,
                                    selections: [a, l],
                                    storageKey: null
                                }, l],
                                storageKey: null
                            }],
                            storageKey: null
                        }]
                    },
                    params: {
                        cacheID: "ff9822eb1a6c29ec9870c92aabbb6b0a",
                        id: null,
                        metadata: {},
                        name: "PrivateListingBannerQuery",
                        operationKind: "query",
                        text: "query PrivateListingBannerQuery(\n  $archetype: ArchetypeInputType\n  $bundle: BundleSlug\n  $includePrivate: Boolean!\n) {\n  tradeSummary(archetype: $archetype, bundle: $bundle, includePrivate: $includePrivate) {\n    bestAsk {\n      taker {\n        address\n        ...AccountLink_data\n        ...wallet_accountKey\n        id\n      }\n      maker {\n        ...wallet_accountKey\n        id\n      }\n      id\n    }\n  }\n}\n\nfragment AccountLink_data on AccountType {\n  address\n  config\n  isCompromised\n  user {\n    publicUsername\n    id\n  }\n  displayName\n  ...ProfileImage_data\n  ...wallet_accountKey\n  ...accounts_url\n}\n\nfragment ProfileImage_data on AccountType {\n  imageUrl\n}\n\nfragment accounts_url on AccountType {\n  address\n  user {\n    publicUsername\n    id\n  }\n}\n\nfragment wallet_accountKey on AccountType {\n  address\n}\n"
                    }
                }
            }();
            i.hash = "1139f6ff714062491de86b6540a67eba", e.default = i
        },
        48453: function(n, e, a) {
            a.r(e);
            var i = {
                argumentDefinitions: [{
                    defaultValue: null,
                    kind: "LocalArgument",
                    name: "chain"
                }],
                kind: "Fragment",
                metadata: null,
                name: "TradeStation_archetype",
                selections: [{
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "verificationStatus",
                    storageKey: null
                }, {
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
                        name: "chain",
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
                    concreteType: "AssetOwnershipTypeConnection",
                    kind: "LinkedField",
                    name: "assetOwners",
                    plural: !1,
                    selections: [{
                        alias: null,
                        args: null,
                        concreteType: "AssetOwnershipTypeEdge",
                        kind: "LinkedField",
                        name: "edges",
                        plural: !0,
                        selections: [{
                            alias: null,
                            args: null,
                            concreteType: "AssetOwnershipType",
                            kind: "LinkedField",
                            name: "node",
                            plural: !1,
                            selections: [{
                                alias: null,
                                args: null,
                                concreteType: "AccountType",
                                kind: "LinkedField",
                                name: "owner",
                                plural: !1,
                                selections: [{
                                    kind: "InlineDataFragmentSpread",
                                    name: "wallet_accountKey",
                                    selections: [{
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "address",
                                        storageKey: null
                                    }],
                                    args: null,
                                    argumentDefinitions: []
                                }],
                                storageKey: null
                            }],
                            storageKey: null
                        }],
                        storageKey: null
                    }],
                    storageKey: "assetOwners(first:1)"
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "isListable",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    concreteType: "AbleToType",
                    kind: "LinkedField",
                    name: "isBiddingEnabled",
                    plural: !1,
                    selections: [{
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "value",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "reason",
                        storageKey: null
                    }],
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "relayId",
                    storageKey: null
                }, {
                    args: [{
                        kind: "Variable",
                        name: "chain",
                        variableName: "chain"
                    }],
                    kind: "FragmentSpread",
                    name: "OfferModal_asset"
                }],
                type: "AssetType",
                abstractKey: null,
                hash: "06eaa43cc29ea5edf7be20862ac02883"
            };
            e.default = i
        },
        18696: function(n, e, a) {
            a.r(e);
            var i = {
                argumentDefinitions: [{
                    defaultValue: null,
                    kind: "LocalArgument",
                    name: "chain"
                }],
                kind: "Fragment",
                metadata: null,
                name: "TradeStation_bundle",
                selections: [{
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "relayId",
                    storageKey: null
                }, {
                    args: [{
                        kind: "Variable",
                        name: "chain",
                        variableName: "chain"
                    }],
                    kind: "FragmentSpread",
                    name: "OfferModal_assetBundle"
                }],
                type: "AssetBundleType",
                abstractKey: null,
                hash: "cd8a363a61763884cfc8e717951c06d1"
            };
            e.default = i
        },
        43825: function(n, e, a) {
            a.r(e);
            var i = function() {
                var n = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "unit",
                        storageKey: null
                    },
                    e = [n],
                    a = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "relayId",
                        storageKey: null
                    },
                    i = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "address",
                        storageKey: null
                    },
                    l = [i],
                    r = {
                        kind: "InlineDataFragmentSpread",
                        name: "wallet_accountKey",
                        selections: l,
                        args: null,
                        argumentDefinitions: []
                    },
                    t = {
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
                    s = {
                        kind: "InlineFragment",
                        selections: [{
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
                            selections: l,
                            storageKey: null
                        }],
                        type: "AssetType",
                        abstractKey: null
                    },
                    o = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "usd",
                        storageKey: null
                    },
                    d = {
                        alias: null,
                        args: null,
                        concreteType: "PriceType",
                        kind: "LinkedField",
                        name: "perUnitPriceType",
                        plural: !1,
                        selections: [o],
                        storageKey: null
                    },
                    u = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "symbol",
                        storageKey: null
                    },
                    c = [a],
                    m = {
                        args: null,
                        kind: "FragmentSpread",
                        name: "OrderPrice"
                    },
                    p = {
                        args: null,
                        kind: "FragmentSpread",
                        name: "OrderUsdPrice"
                    };
                return {
                    argumentDefinitions: [],
                    kind: "Fragment",
                    metadata: null,
                    name: "TradeStation_data",
                    selections: [{
                        alias: null,
                        args: null,
                        concreteType: "OrderV2Type",
                        kind: "LinkedField",
                        name: "bestAsk",
                        plural: !1,
                        selections: [{
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "closedAt",
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            concreteType: "PriceType",
                            kind: "LinkedField",
                            name: "dutchAuctionFinalPriceType",
                            plural: !1,
                            selections: e,
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "openedAt",
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "orderType",
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "priceFnEndedAt",
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            concreteType: "PriceType",
                            kind: "LinkedField",
                            name: "englishAuctionReservePriceType",
                            plural: !1,
                            selections: e,
                            storageKey: null
                        }, a, {
                            alias: null,
                            args: null,
                            concreteType: "AccountType",
                            kind: "LinkedField",
                            name: "maker",
                            plural: !1,
                            selections: [i, r],
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            concreteType: null,
                            kind: "LinkedField",
                            name: "item",
                            plural: !1,
                            selections: [{
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "__typename",
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "verificationStatus",
                                storageKey: null
                            }, a, {
                                alias: null,
                                args: null,
                                concreteType: "CollectionType",
                                kind: "LinkedField",
                                name: "collection",
                                plural: !1,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "slug",
                                    storageKey: null
                                }],
                                storageKey: null
                            }, t, s, {
                                kind: "InlineDataFragmentSpread",
                                name: "itemEvents_dataV2",
                                selections: [a, t, s],
                                args: null,
                                argumentDefinitions: []
                            }],
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            concreteType: "PriceType",
                            kind: "LinkedField",
                            name: "priceType",
                            plural: !1,
                            selections: [n, o],
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "remainingQuantityType",
                            storageKey: null
                        }, d, {
                            alias: null,
                            args: null,
                            concreteType: "PaymentAssetType",
                            kind: "LinkedField",
                            name: "payment",
                            plural: !1,
                            selections: [u, a, {
                                alias: null,
                                args: null,
                                concreteType: "AssetType",
                                kind: "LinkedField",
                                name: "asset",
                                plural: !1,
                                selections: c,
                                storageKey: null
                            }, {
                                kind: "InlineDataFragmentSpread",
                                name: "TokenPricePayment",
                                selections: [u, t, {
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
                                    }, {
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
                                            name: "blockExplorerLink",
                                            storageKey: null
                                        }],
                                        storageKey: null
                                    }],
                                    storageKey: null
                                }],
                                args: null,
                                argumentDefinitions: []
                            }],
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            concreteType: "AccountType",
                            kind: "LinkedField",
                            name: "taker",
                            plural: !1,
                            selections: [r],
                            storageKey: null
                        }, m, p],
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        concreteType: "OrderV2Type",
                        kind: "LinkedField",
                        name: "bestBid",
                        plural: !1,
                        selections: [m, p, {
                            alias: null,
                            args: null,
                            concreteType: "PaymentAssetType",
                            kind: "LinkedField",
                            name: "payment",
                            plural: !1,
                            selections: c,
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            concreteType: "PriceType",
                            kind: "LinkedField",
                            name: "priceType",
                            plural: !1,
                            selections: e,
                            storageKey: null
                        }, d],
                        storageKey: null
                    }, {
                        args: null,
                        kind: "FragmentSpread",
                        name: "OfferModal_tradeSummary"
                    }],
                    type: "TradeSummaryType",
                    abstractKey: null
                }
            }();
            i.hash = "52a24cd3dcc46a0a4c40c3fbcdd5e579", e.default = i
        },
        74201: function(n, e, a) {
            a.r(e);
            var i = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "TradeStation_tradeLimits",
                selections: [{
                    args: null,
                    kind: "FragmentSpread",
                    name: "OfferModal_tradeLimits"
                }],
                type: "TradeLimitsType",
                abstractKey: null,
                hash: "a072a10b21724b2fad55d6b61b3465ef"
            };
            e.default = i
        },
        76159: function(n, e, a) {
            a.d(e, {
                n: function() {
                    return d
                }
            });
            var i = a(71636),
                l = a.n(i),
                r = a(70884),
                t = a(26851),
                s = a(97516),
                o = a(79570),
                d = function(n, e) {
                    (0, o.$l)({
                        delay: r.g_,
                        fn: function() {
                            var a = (0, s.pY)(n),
                                i = l().duration(a.diff(l()())).asMinutes();
                            i > -1 && i < r.l9 && ((0, t.LK)(), e())
                        }
                    })
                }
        }
    }
]);
//# sourceMappingURL=62761-446b497226fe9819.js.map