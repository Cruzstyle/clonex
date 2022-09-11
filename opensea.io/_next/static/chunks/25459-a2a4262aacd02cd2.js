"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [25459], {
        25459: function(n, e, r) {
            r.d(e, {
                m: function() {
                    return k
                }
            });
            var t = r(23842),
                i = r(19989),
                a = r(35230),
                o = r.n(a),
                l = r(24246),
                u = (r(86248), r(27378)),
                c = r(4402),
                s = r(47892),
                d = r(7288),
                f = r(377),
                p = r(45116),
                v = r(9476),
                m = r(87481),
                g = r(79790),
                h = r(26851),
                x = (r(59809), r(33609)),
                b = r(48257),
                y = r(17813);

            function j() {
                var n = (0, i.Z)(["\n  position: relative;\n\n  .ProfileImage--loader {\n    height: 100%;\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n  .ProfileImage--image {\n    cursor: pointer;\n  }\n"]);
                return j = function() {
                    return n
                }, n
            }
            var k = function(n) {
                    var e = n.className,
                        i = n.editable,
                        a = n.isDynamic,
                        s = n.size,
                        j = n.loaderSize,
                        k = n.data,
                        I = (0, u.useState)("standby"),
                        w = I[0],
                        C = I[1],
                        R = (0, g.e)().attempt,
                        P = (0, m.b)().mutate,
                        F = (0, c.useFragment)(r(474), k).imageUrl,
                        S = function() {
                            var n = (0, t.Z)(o().mark((function n(e) {
                                return o().wrap((function(n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            return C("wait"), n.next = 3, R((0, t.Z)(o().mark((function n() {
                                                return o().wrap((function(n) {
                                                    for (;;) switch (n.prev = n.next) {
                                                        case 0:
                                                            return n.next = 2, P(r(5179), {
                                                                input: {
                                                                    profileImage: null === e || void 0 === e ? void 0 : e.file
                                                                }
                                                            }, {
                                                                shouldAuthenticate: !0
                                                            });
                                                        case 2:
                                                            (0, h.LK)(), C("done");
                                                        case 4:
                                                        case "end":
                                                            return n.stop()
                                                    }
                                                }), n)
                                            }))));
                                        case 3:
                                        case "end":
                                            return n.stop()
                                    }
                                }), n)
                            })));
                            return function(e) {
                                return n.apply(this, arguments)
                            }
                        }(),
                        z = function() {
                            var n = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).onClick;
                            return (0, l.jsx)(y.Z, {
                                alt: "User Profile Image",
                                className: "ProfileImage--image",
                                size: s,
                                sizing: "cover",
                                url: F,
                                variant: "round",
                                onClick: n
                            })
                        };
                    return (0, l.jsx)(Z, {
                        className: (0, x.A)("ProfileImage", {
                            editable: i
                        }, e),
                        children: a ? (0, l.jsxs)(l.Fragment, {
                            children: [i && (0, l.jsx)(d.a, {
                                "aria-label": "Select a profile image",
                                overlay: (0, l.jsx)(f._, {
                                    height: "100%",
                                    justifyContent: "center",
                                    children: (0, l.jsx)(b.J, {
                                        color: "white",
                                        value: "edit"
                                    })
                                }),
                                shape: "round",
                                variant: "overlay",
                                zIndex: 2,
                                onChange: S
                            }), "wait" === w ? (0, l.jsx)("div", {
                                className: "ProfileImage--loader",
                                children: (0, l.jsx)(v.aN, {
                                    size: j
                                })
                            }) : (0, l.jsx)(p.e, {
                                trigger: function(n) {
                                    return z({
                                        onClick: n
                                    })
                                },
                                children: (0, l.jsx)(y.Z, {
                                    alt: "User Profile Image",
                                    className: "ProfileImage--image",
                                    size: s,
                                    sizing: "cover",
                                    url: F,
                                    variant: "round"
                                })
                            })]
                        }) : z()
                    })
                },
                Z = s.ZP.div.withConfig({
                    componentId: "sc-9f23c233-0"
                })(j())
        },
        7288: function(n, e, r) {
            r.d(e, {
                a: function() {
                    return v
                }
            });
            var t = r(85034),
                i = r(31373),
                a = r(24246),
                o = r(27378),
                l = r(17813),
                u = r(51581),
                c = r(47762),
                s = r(6300),
                d = r(36537),
                f = r(70884),
                p = (0, d.p)(f.GT),
                v = (0, o.forwardRef)((function(n, e) {
                    var r = n.onChange,
                        d = n.shape,
                        f = void 0 === d ? "square" : d,
                        v = n.value,
                        m = (0, i.Z)(n, ["onChange", "shape", "value"]),
                        g = (0, s.q)("components"),
                        h = (0, o.useState)(),
                        x = h[0],
                        b = h[1];
                    return (0, c.n)((function() {
                        return function() {
                            x && URL.revokeObjectURL(x)
                        }
                    })), (0, a.jsx)(u.S, (0, t.Z)({
                        accept: {
                            "image/*": []
                        },
                        maxSize: p,
                        preview: (null === v || void 0 === v ? void 0 : v.url) && (0, a.jsx)(l.Z, {
                            alt: g("forms.imageInput.alt", "{{url}} preview image", {
                                url: v.url
                            }, {
                                forceString: !0
                            }),
                            imgStyle: {
                                objectFit: "cover"
                            },
                            url: v.url,
                            variant: f
                        }),
                        ref: e,
                        shape: f,
                        onChange: function(n) {
                            if (x && URL.revokeObjectURL(x), r)
                                if (n) {
                                    var e = URL.createObjectURL(n);
                                    r({
                                        file: n,
                                        url: e
                                    }), b(e)
                                } else r(void 0)
                        }
                    }, m))
                }))
        },
        51581: function(n, e, r) {
            r.d(e, {
                S: function() {
                    return _
                },
                A: function() {
                    return O
                }
            });
            var t = r(85034),
                i = r(70169),
                a = r(31373),
                o = r(52050),
                l = r(19989),
                u = r(24246),
                c = r(27378),
                s = r(95331),
                d = r(76449),
                f = r(44833),
                p = r(47892),
                v = r(96728),
                m = r(48257),
                g = r(77795),
                h = r(53585),
                x = r(377),
                b = r(83989),
                y = r(16611),
                j = r(90918),
                k = r(48599),
                Z = r(39339),
                I = r(6300),
                w = r(90761),
                C = r(87821);

            function R() {
                var n = (0, l.Z)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n"]);
                return R = function() {
                    return n
                }, n
            }

            function P() {
                var n = (0, l.Z)(["\n  ", "\n  z-index: 1;\n  opacity: 0;\n  transition: 0.1s opacity ease-in;\n"]);
                return P = function() {
                    return n
                }, n
            }

            function F() {
                var n = (0, l.Z)(["\n  position: absolute;\n  z-index: ", ";\n\n  ", ";\n"]);
                return F = function() {
                    return n
                }, n
            }

            function S() {
                var n = (0, l.Z)(["\n  border: 3px dashed ", ";\n"]);
                return S = function() {
                    return n
                }, n
            }

            function z() {
                var n = (0, l.Z)([""]);
                return z = function() {
                    return n
                }, n
            }

            function U() {
                var n = (0, l.Z)(["\n      pointer-events: none;\n      opacity: 0.5;\n    "]);
                return U = function() {
                    return n
                }, n
            }

            function A() {
                var n = (0, l.Z)(["\n      ", "\n      border: none;\n    "]);
                return A = function() {
                    return n
                }, n
            }

            function L() {
                var n = (0, l.Z)(["\n  position: relative;\n  padding: 4px;\n  cursor: pointer;\n\n  ", "\n\n  :hover {\n    ", " {\n      opacity: 1;\n    }\n  }\n\n  ", " {\n    color: ", ";\n  }\n\n  :hover {\n    ", "\n\n    ", " {\n      ", "\n    }\n  }\n\n  ", "\n\n  ", "\n\n  ", "\n"]);
                return L = function() {
                    return n
                }, n
            }
            var _ = (0, c.forwardRef)((function(n, e) {
                    var r, l = n.accept,
                        d = n.preview,
                        p = n.onChange,
                        v = n.id,
                        m = n.name,
                        g = n.inputRef,
                        h = n.variant,
                        x = void 0 === h ? "default" : h,
                        w = n.shape,
                        R = void 0 === w ? "square" : w,
                        P = n.disabled,
                        F = void 0 !== P && P,
                        S = n.removable,
                        z = void 0 === S || S,
                        U = n.extra,
                        A = n.children,
                        L = n.overlay,
                        _ = n.maxSize,
                        D = n.validator,
                        q = (0, a.Z)(n, ["accept", "preview", "onChange", "id", "name", "inputRef", "variant", "shape", "disabled", "removable", "extra", "children", "overlay", "maxSize", "validator"]),
                        K = (0, I.q)("designSystem"),
                        O = function() {
                            var n = (0, I.q)("designSystem");
                            return {
                                "file-too-large": n("fileInput.largeFile.error", "File too large"),
                                "file-invalid-type": n("file.unsupportedFile.error", "Unsupported file type")
                            }
                        }(),
                        $ = (0, o.Z)((0, Z.X)(), 2),
                        V = $[0],
                        X = $[1],
                        J = (0, c.useCallback)((function(n) {
                            return null === p || void 0 === p ? void 0 : p(n[0])
                        }), [p]),
                        W = (0, f.uI)({
                            onDrop: J,
                            multiple: !1,
                            accept: l,
                            disabled: F,
                            maxSize: _,
                            validator: D
                        }),
                        G = W.getRootProps,
                        Y = W.getInputProps,
                        B = W.fileRejections,
                        H = W.isDragActive,
                        Q = "overlay" === x ? null : (0, u.jsx)(T, {
                            size: 84,
                            value: B.length ? "help_outline" : "image"
                        }),
                        nn = G(),
                        en = nn.ref,
                        rn = (0, a.Z)(nn, ["ref"]);
                    return (0, u.jsxs)(E, (0, i.Z)((0, t.Z)({}, q, rn), {
                        $disabled: F,
                        "aria-label": null !== (r = q["aria-label"]) && void 0 !== r ? r : K("fileInput.filetype.label", "Select an image, video, audio or 3D model file"),
                        ref: (0, s.Z)(e, en, X),
                        role: "button",
                        shape: R,
                        variant: x,
                        children: [(0, u.jsx)("input", (0, t.Z)({
                            disabled: F,
                            id: v,
                            name: m,
                            ref: g
                        }, Y())), B.length ? (0, u.jsxs)(u.Fragment, {
                            children: [Q, B.flatMap((function(n) {
                                return n.errors
                            })).map((function(n) {
                                return (0, u.jsxs)(b.t, {
                                    children: [(0, u.jsx)(y.WX, {
                                        as: "span",
                                        textAlign: "center",
                                        variant: "small-heavy",
                                        children: O[n.code]
                                    }), (0, u.jsx)(y.WX, {
                                        as: "span",
                                        color: "error",
                                        marginTop: "12px",
                                        textAlign: "center",
                                        variant: "info",
                                        children: n.message
                                    }, n.code)]
                                }, "".concat(n.code, "-").concat(n.message))
                            }))]
                        }) : d ? (0, u.jsxs)(u.Fragment, {
                            children: [z ? (0, u.jsx)(M, {
                                shape: R,
                                children: (0, u.jsx)(k.k, {
                                    "aria-label": "Remove",
                                    onClick: function(n) {
                                        n.stopPropagation(), n.preventDefault(), null === p || void 0 === p || p(void 0)
                                    },
                                    children: (0, u.jsx)(T, {
                                        value: "close"
                                    })
                                })
                            }) : null, (0, u.jsx)(N, {
                                children: Q
                            }), d]
                        }) : (0, u.jsxs)(u.Fragment, {
                            children: [Q, U]
                        }), A, (0, u.jsx)(j.a, {
                            active: H || V,
                            borderRadius: "overlay" === x ? void 0 : "square" === R ? C.E0.default : void 0,
                            offset: "overlay" === x ? void 0 : "4px",
                            position: "absolute",
                            variant: R,
                            children: L
                        })]
                    }))
                })),
                D = function(n) {
                    return (0, d._j)(.1, "#ccc")
                },
                q = function(n) {
                    return (0, d.$n)(.1, "#ccc")
                },
                K = (0, p.iv)(R()),
                N = (0, p.ZP)(x._).withConfig({
                    componentId: "sc-3676ad3c-0"
                })(P(), K),
                M = (0, p.ZP)(h.g).withConfig({
                    componentId: "sc-3676ad3c-1"
                })(F(), g.k.OVERLAY + 1, (0, v.variant)({
                    prop: "shape",
                    variants: {
                        square: {
                            right: "12px",
                            top: "12px"
                        },
                        round: {
                            right: "-8px",
                            top: "-8px"
                        }
                    }
                })),
                O = (0, p.iv)(S(), (function(n) {
                    return n.theme, "#ccc"
                })),
                T = (0, p.ZP)(m.J).withConfig({
                    componentId: "sc-3676ad3c-2"
                })(z()),
                E = (0, p.ZP)(x._).withConfig({
                    componentId: "sc-3676ad3c-3"
                })(L(), O, N, T, (function(n) {
                    return n.theme, "#ccc"
                }), (function(n) {
                    return (0, w.Um)({
                        variants: {
                            light: {
                                borderColor: D(n.theme)
                            },
                            dark: {
                                borderColor: q(n.theme)
                            }
                        }
                    })
                }), T, (function(n) {
                    return (0, w.Um)({
                        variants: {
                            light: {
                                color: D(n.theme)
                            },
                            dark: {
                                color: q(n.theme)
                            }
                        }
                    })
                }), (function(n) {
                    return n.$disabled && (0, p.iv)(U())
                }), (function(n) {
                    return "overlay" === n.variant && (0, p.iv)(A(), K)
                }), (function(n) {
                    return (0, v.variant)({
                        prop: "shape",
                        variants: {
                            round: {
                                borderRadius: n.theme.borderRadius.circle
                            },
                            square: {
                                borderRadius: n.theme.borderRadius.default
                            }
                        }
                    })
                }))
        },
        45116: function(n, e, r) {
            r.d(e, {
                e: function() {
                    return o
                }
            });
            var t = r(24246),
                i = (r(27378), r(98784)),
                a = r(19378),
                o = function(n) {
                    var e = n.children,
                        r = n.trigger,
                        o = n.initiallyOpen,
                        l = n.overrides;
                    return (0, t.jsx)(a.u_, {
                        focusFirstFocusableElement: !1,
                        initiallyOpen: o,
                        overrides: (0, i.merge)({
                            Dialog: {
                                props: {
                                    style: {
                                        height: "min(calc(100vw - 50px), calc(100vh - 50px))",
                                        width: "min(calc(100vw - 50px), calc(100vh - 50px))",
                                        background: "transparent",
                                        border: 0,
                                        position: "initial",
                                        borderRadius: "initial"
                                    }
                                }
                            },
                            CloseRoot: {
                                style: {
                                    top: 8,
                                    right: 8
                                }
                            }
                        }, l),
                        position: "centered",
                        trigger: r,
                        children: e
                    })
                }
        },
        5179: function(n, e, r) {
            r.r(e);
            var t = function() {
                var n = [{
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "input"
                    }],
                    e = [{
                        kind: "Variable",
                        name: "input",
                        variableName: "input"
                    }],
                    r = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "imageUrl",
                        storageKey: null
                    };
                return {
                    fragment: {
                        argumentDefinitions: n,
                        kind: "Fragment",
                        metadata: null,
                        name: "ProfileImageMutation",
                        selections: [{
                            alias: null,
                            args: e,
                            concreteType: "AccountType",
                            kind: "LinkedField",
                            name: "account",
                            plural: !1,
                            selections: [r],
                            storageKey: null
                        }],
                        type: "Mutation",
                        abstractKey: null
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: n,
                        kind: "Operation",
                        name: "ProfileImageMutation",
                        selections: [{
                            alias: null,
                            args: e,
                            concreteType: "AccountType",
                            kind: "LinkedField",
                            name: "account",
                            plural: !1,
                            selections: [r, {
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
                        cacheID: "75fc44089a8f98943e046805a6fb2a2c",
                        id: null,
                        metadata: {},
                        name: "ProfileImageMutation",
                        operationKind: "mutation",
                        text: "mutation ProfileImageMutation(\n  $input: AccountMutationInput!\n) {\n  account(input: $input) {\n    imageUrl\n    id\n  }\n}\n"
                    }
                }
            }();
            t.hash = "e9efa8b36e5861abcde9971f1426320e", e.default = t
        },
        474: function(n, e, r) {
            r.r(e);
            var t = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "ProfileImage_data",
                selections: [{
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "imageUrl",
                    storageKey: null
                }],
                type: "AccountType",
                abstractKey: null,
                hash: "d530f7d2f491feca9849e238ccfacc84"
            };
            e.default = t
        },
        36537: function(n, e, r) {
            r.d(e, {
                p: function() {
                    return t
                }
            });
            var t = function(n) {
                return 1048576 * n
            }
        }
    }
]);
//# sourceMappingURL=25459-a2a4262aacd02cd2.js.map