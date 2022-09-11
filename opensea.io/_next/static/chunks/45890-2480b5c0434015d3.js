"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [45890], {
        45890: function(n, e, a) {
            a.d(e, {
                P: function() {
                    return m
                }
            });
            var t = a(24246),
                l = a(27378),
                s = a(4402),
                i = a(43769),
                r = a(86196),
                o = a(19378),
                c = a(13601),
                d = a(87481),
                u = (a(59809), a(39738)),
                y = a(66079),
                p = function(n) {
                    var e = n.sender,
                        l = n.transferAssetInputs,
                        d = n.onEnd,
                        p = (0, c.W)().onReplace,
                        m = (0, s.useLazyLoadQuery)(a(27161), {
                            sender: e,
                            transferAssetInputs: l
                        }, {
                            fetchPolicy: "network-only"
                        }),
                        _ = (0, u.hX)(l.map((function(n) {
                            var e;
                            return null === (e = n.assetQuantity) || void 0 === e ? void 0 : e.asset
                        })));
                    return (0, t.jsxs)(t.Fragment, {
                        children: [(0, t.jsx)(o.u_.Header, {
                            children: (0, t.jsxs)(o.u_.Title, {
                                children: ["Transfer your ", (0, y._6)("item", l.length)]
                            })
                        }), (0, t.jsx)(o.u_.Body, {
                            children: (0, t.jsx)(i.BlockchainActionList, {
                                dataKey: m.blockchain.transferActions.actionsV2,
                                onEnd: function() {
                                    var n = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).transaction;
                                    n && (p((0, t.jsx)(r.H, {
                                        mode: "transferred",
                                        transaction: n,
                                        variables: {
                                            assetIDs: _
                                        }
                                    })), null === d || void 0 === d || d(n.transactionHash))
                                }
                            })
                        })]
                    })
                },
                m = function(n) {
                    var e, a = n.transferAssetInputs,
                        s = n.onEnd,
                        r = null === (e = (0, d.b)().wallet.getActiveAccountKey()) || void 0 === e ? void 0 : e.address;
                    return r ? (0, t.jsx)(l.Suspense, {
                        fallback: (0, t.jsx)(i.BlockchainActionListModalSkeleton, {}),
                        children: (0, t.jsx)(p, {
                            sender: r,
                            transferAssetInputs: a,
                            onEnd: s
                        })
                    }) : null
                }
        },
        27161: function(n, e, a) {
            a.r(e);
            var t = function() {
                var n = [{
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "sender"
                    }, {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "transferAssetInputs"
                    }],
                    e = [{
                        kind: "Variable",
                        name: "sender",
                        variableName: "sender"
                    }, {
                        kind: "Variable",
                        name: "transferAssetInputs",
                        variableName: "transferAssetInputs"
                    }],
                    a = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "__typename",
                        storageKey: null
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
                    l = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "chainIdentifier",
                        storageKey: null
                    },
                    s = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "value",
                        storageKey: null
                    },
                    i = [s],
                    r = {
                        alias: null,
                        args: null,
                        concreteType: "AddressDataType",
                        kind: "LinkedField",
                        name: "source",
                        plural: !1,
                        selections: i,
                        storageKey: null
                    },
                    o = {
                        alias: null,
                        args: null,
                        concreteType: "AddressDataType",
                        kind: "LinkedField",
                        name: "destination",
                        plural: !1,
                        selections: i,
                        storageKey: null
                    },
                    c = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "data",
                        storageKey: null
                    },
                    d = {
                        kind: "InlineFragment",
                        selections: [t, l, r, o, s, c],
                        type: "TransactionSubmissionDataType",
                        abstractKey: null
                    },
                    u = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "clientMessage",
                        storageKey: null
                    },
                    y = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "clientSignatureStandard",
                        storageKey: null
                    },
                    p = {
                        kind: "InlineFragment",
                        selections: [u, y, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "functionSignature",
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "verifyingContract",
                            storageKey: null
                        }],
                        type: "MetaTransactionDataType",
                        abstractKey: null
                    },
                    m = {
                        alias: null,
                        args: null,
                        concreteType: null,
                        kind: "LinkedField",
                        name: "method",
                        plural: !1,
                        selections: [a, d, {
                            kind: "TypeDiscriminator",
                            abstractKey: "__isTransactionMethodType"
                        }, p],
                        storageKey: null
                    },
                    _ = [m],
                    A = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "decimals",
                        storageKey: null
                    },
                    g = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "symbol",
                        storageKey: null
                    },
                    k = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "id",
                        storageKey: null
                    },
                    T = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "minQuantity",
                        storageKey: null
                    },
                    f = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "relayId",
                        storageKey: null
                    },
                    h = {
                        kind: "InlineFragment",
                        selections: [l, r, o, s, c],
                        type: "TransactionSubmissionDataType",
                        abstractKey: null
                    },
                    F = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "serverSignature",
                        storageKey: null
                    },
                    S = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "side",
                        storageKey: null
                    };
                return {
                    fragment: {
                        argumentDefinitions: n,
                        kind: "Fragment",
                        metadata: null,
                        name: "TransferActionsModalContentQuery",
                        selections: [{
                            alias: null,
                            args: null,
                            concreteType: "BlockchainType",
                            kind: "LinkedField",
                            name: "blockchain",
                            plural: !1,
                            selections: [{
                                alias: null,
                                args: e,
                                concreteType: "ActionDataType",
                                kind: "LinkedField",
                                name: "transferActions",
                                plural: !1,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    concreteType: null,
                                    kind: "LinkedField",
                                    name: "actionsV2",
                                    plural: !0,
                                    selections: [{
                                        args: null,
                                        kind: "FragmentSpread",
                                        name: "BlockchainActionList_data"
                                    }],
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
                        name: "TransferActionsModalContentQuery",
                        selections: [{
                            alias: null,
                            args: null,
                            concreteType: "BlockchainType",
                            kind: "LinkedField",
                            name: "blockchain",
                            plural: !1,
                            selections: [{
                                alias: null,
                                args: e,
                                concreteType: "ActionDataType",
                                kind: "LinkedField",
                                name: "transferActions",
                                plural: !1,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    concreteType: null,
                                    kind: "LinkedField",
                                    name: "actionsV2",
                                    plural: !0,
                                    selections: [a, {
                                        kind: "TypeDiscriminator",
                                        abstractKey: "__isBlockchainActionType"
                                    }, {
                                        kind: "InlineFragment",
                                        selections: _,
                                        type: "AssetApprovalActionType",
                                        abstractKey: null
                                    }, {
                                        kind: "InlineFragment",
                                        selections: [{
                                            alias: null,
                                            args: null,
                                            concreteType: "AssetType",
                                            kind: "LinkedField",
                                            name: "asset",
                                            plural: !1,
                                            selections: [t, A, g, {
                                                alias: null,
                                                args: null,
                                                kind: "ScalarField",
                                                name: "usdSpotPrice",
                                                storageKey: null
                                            }, k],
                                            storageKey: null
                                        }, T],
                                        type: "AskForDepositType",
                                        abstractKey: null
                                    }, {
                                        kind: "InlineFragment",
                                        selections: [{
                                            alias: null,
                                            args: null,
                                            concreteType: "AssetType",
                                            kind: "LinkedField",
                                            name: "fromAsset",
                                            plural: !1,
                                            selections: [t, A, g, k, f],
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            concreteType: "AssetType",
                                            kind: "LinkedField",
                                            name: "toAsset",
                                            plural: !1,
                                            selections: [t, g, k, f],
                                            storageKey: null
                                        }, T, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "maxQuantity",
                                            storageKey: null
                                        }],
                                        type: "AskForSwapType",
                                        abstractKey: null
                                    }, {
                                        kind: "InlineFragment",
                                        selections: _,
                                        type: "AssetFreezeMetadataActionType",
                                        abstractKey: null
                                    }, {
                                        kind: "InlineFragment",
                                        selections: [{
                                            alias: null,
                                            args: null,
                                            concreteType: "TransactionSubmissionDataType",
                                            kind: "LinkedField",
                                            name: "method",
                                            plural: !1,
                                            selections: [t, {
                                                kind: "InlineFragment",
                                                selections: [a, h, p],
                                                type: "TransactionMethodType",
                                                abstractKey: "__isTransactionMethodType"
                                            }],
                                            storageKey: null
                                        }],
                                        type: "AssetSwapActionType",
                                        abstractKey: null
                                    }, {
                                        kind: "InlineFragment",
                                        selections: _,
                                        type: "AssetTransferActionType",
                                        abstractKey: null
                                    }, {
                                        kind: "InlineFragment",
                                        selections: [{
                                            alias: null,
                                            args: null,
                                            concreteType: "SignAndPostType",
                                            kind: "LinkedField",
                                            name: "method",
                                            plural: !1,
                                            selections: [t, u, y, F, {
                                                alias: null,
                                                args: null,
                                                kind: "ScalarField",
                                                name: "orderData",
                                                storageKey: null
                                            }],
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            concreteType: "OrderDataType",
                                            kind: "LinkedField",
                                            name: "orderData",
                                            plural: !1,
                                            selections: [S, {
                                                alias: null,
                                                args: null,
                                                kind: "ScalarField",
                                                name: "isCounterOrder",
                                                storageKey: null
                                            }],
                                            storageKey: null
                                        }],
                                        type: "CreateOrderActionType",
                                        abstractKey: null
                                    }, {
                                        kind: "InlineFragment",
                                        selections: [{
                                            alias: null,
                                            args: null,
                                            concreteType: null,
                                            kind: "LinkedField",
                                            name: "method",
                                            plural: !1,
                                            selections: [a, d, {
                                                kind: "InlineFragment",
                                                selections: [{
                                                    alias: "cancelOrderData",
                                                    args: null,
                                                    concreteType: "SignAndPostOrderCancelDataType",
                                                    kind: "LinkedField",
                                                    name: "data",
                                                    plural: !1,
                                                    selections: [{
                                                        alias: null,
                                                        args: null,
                                                        kind: "ScalarField",
                                                        name: "payload",
                                                        storageKey: null
                                                    }, {
                                                        alias: null,
                                                        args: null,
                                                        kind: "ScalarField",
                                                        name: "message",
                                                        storageKey: null
                                                    }],
                                                    storageKey: null
                                                }, F, y],
                                                type: "SignAndPostOrderCancelType",
                                                abstractKey: null
                                            }],
                                            storageKey: null
                                        }],
                                        type: "CancelOrderActionType",
                                        abstractKey: null
                                    }, {
                                        kind: "InlineFragment",
                                        selections: [m, {
                                            alias: null,
                                            args: null,
                                            concreteType: "OrderDataType",
                                            kind: "LinkedField",
                                            name: "orderData",
                                            plural: !1,
                                            selections: [S, {
                                                alias: null,
                                                args: null,
                                                kind: "ScalarField",
                                                name: "openedAt",
                                                storageKey: null
                                            }],
                                            storageKey: null
                                        }],
                                        type: "FulfillOrderActionType",
                                        abstractKey: null
                                    }, {
                                        kind: "InlineFragment",
                                        selections: [m, {
                                            alias: null,
                                            args: null,
                                            concreteType: "AssetType",
                                            kind: "LinkedField",
                                            name: "asset",
                                            plural: !1,
                                            selections: [g, k],
                                            storageKey: null
                                        }],
                                        type: "PaymentAssetApprovalActionType",
                                        abstractKey: null
                                    }, {
                                        kind: "InlineFragment",
                                        selections: [{
                                            alias: null,
                                            args: null,
                                            concreteType: "TransactionSubmissionDataType",
                                            kind: "LinkedField",
                                            name: "method",
                                            plural: !1,
                                            selections: [a, t, {
                                                kind: "InlineFragment",
                                                selections: [h, p],
                                                type: "TransactionMethodType",
                                                abstractKey: "__isTransactionMethodType"
                                            }],
                                            storageKey: null
                                        }],
                                        type: "MintActionType",
                                        abstractKey: null
                                    }],
                                    storageKey: null
                                }],
                                storageKey: null
                            }],
                            storageKey: null
                        }]
                    },
                    params: {
                        cacheID: "bd7c499fba5ea911978b00477e107288",
                        id: null,
                        metadata: {},
                        name: "TransferActionsModalContentQuery",
                        operationKind: "query",
                        text: "query TransferActionsModalContentQuery(\n  $sender: AddressScalar!\n  $transferAssetInputs: [TransferAssetInputType!]!\n) {\n  blockchain {\n    transferActions(sender: $sender, transferAssetInputs: $transferAssetInputs) {\n      actionsV2 {\n        __typename\n        ...BlockchainActionList_data\n      }\n    }\n  }\n}\n\nfragment AskForDepositAction_data on AskForDepositType {\n  asset {\n    chain {\n      identifier\n    }\n    decimals\n    symbol\n    usdSpotPrice\n    id\n  }\n  minQuantity\n}\n\nfragment AskForSwapAction_data on AskForSwapType {\n  __typename\n  fromAsset {\n    chain {\n      identifier\n    }\n    decimals\n    symbol\n    id\n  }\n  toAsset {\n    chain {\n      identifier\n    }\n    symbol\n    id\n  }\n  minQuantity\n  maxQuantity\n  ...useHandleBlockchainActions_ask_for_asset_swap\n}\n\nfragment AssetApprovalAction_data on AssetApprovalActionType {\n  __typename\n  method {\n    __typename\n    ... on TransactionSubmissionDataType {\n      chain {\n        identifier\n      }\n    }\n  }\n  ...useHandleBlockchainActions_approve_asset\n}\n\nfragment AssetFreezeMetadataAction_data on AssetFreezeMetadataActionType {\n  __typename\n  method {\n    __typename\n    ... on TransactionSubmissionDataType {\n      chain {\n        identifier\n      }\n    }\n  }\n  ...useHandleBlockchainActions_freeze_asset_metadata\n}\n\nfragment AssetSwapAction_data on AssetSwapActionType {\n  __typename\n  method {\n    chain {\n      identifier\n    }\n  }\n  ...useHandleBlockchainActions_swap_asset\n}\n\nfragment AssetTransferAction_data on AssetTransferActionType {\n  __typename\n  method {\n    __typename\n    ... on TransactionSubmissionDataType {\n      chain {\n        identifier\n      }\n    }\n  }\n  ...useHandleBlockchainActions_transfer_asset\n}\n\nfragment BlockchainActionList_data on BlockchainActionType {\n  __isBlockchainActionType: __typename\n  __typename\n  ... on AssetApprovalActionType {\n    ...AssetApprovalAction_data\n  }\n  ... on AskForDepositType {\n    __typename\n    ...AskForDepositAction_data\n  }\n  ... on AskForSwapType {\n    __typename\n    ...AskForSwapAction_data\n  }\n  ... on AssetFreezeMetadataActionType {\n    __typename\n    ...AssetFreezeMetadataAction_data\n  }\n  ... on AssetSwapActionType {\n    __typename\n    ...AssetSwapAction_data\n  }\n  ... on AssetTransferActionType {\n    __typename\n    ...AssetTransferAction_data\n  }\n  ... on CreateOrderActionType {\n    __typename\n    ...CreateOrderAction_data\n  }\n  ... on CancelOrderActionType {\n    __typename\n    ...CancelOrderAction_data\n  }\n  ... on FulfillOrderActionType {\n    __typename\n    ...FulfillOrderAction_data\n  }\n  ... on PaymentAssetApprovalActionType {\n    __typename\n    ...PaymentAssetApprovalAction_data\n  }\n  ... on WaitForBalanceActionType {\n    __typename\n    ...WaitForBalanceAction_data\n  }\n  ... on MintActionType {\n    __typename\n    ...MintAction_data\n  }\n}\n\nfragment CancelOrderAction_data on CancelOrderActionType {\n  __typename\n  method {\n    __typename\n    ... on TransactionSubmissionDataType {\n      chain {\n        identifier\n      }\n    }\n  }\n  ...useHandleBlockchainActions_cancel_orders\n}\n\nfragment CreateOrderAction_data on CreateOrderActionType {\n  __typename\n  method {\n    chain {\n      identifier\n    }\n  }\n  orderData {\n    side\n    isCounterOrder\n  }\n  ...useHandleBlockchainActions_create_order\n}\n\nfragment FulfillOrderAction_data on FulfillOrderActionType {\n  __typename\n  method {\n    __typename\n    ... on TransactionSubmissionDataType {\n      chain {\n        identifier\n      }\n    }\n  }\n  orderData {\n    side\n  }\n  ...useHandleBlockchainActions_fulfill_order\n}\n\nfragment MintAction_data on MintActionType {\n  __typename\n  method {\n    __typename\n    chain {\n      identifier\n    }\n  }\n  ...useHandleBlockchainActions_mint_asset\n}\n\nfragment PaymentAssetApprovalAction_data on PaymentAssetApprovalActionType {\n  __typename\n  method {\n    __typename\n    ... on TransactionSubmissionDataType {\n      chain {\n        identifier\n      }\n    }\n  }\n  asset {\n    symbol\n    id\n  }\n  ...useHandleBlockchainActions_approve_payment_asset\n}\n\nfragment WaitForBalanceAction_data on WaitForBalanceActionType {\n  __typename\n}\n\nfragment useHandleBlockchainActions_approve_asset on AssetApprovalActionType {\n  method {\n    __typename\n    ...useHandleBlockchainActions_transaction_method\n  }\n}\n\nfragment useHandleBlockchainActions_approve_payment_asset on PaymentAssetApprovalActionType {\n  method {\n    __typename\n    ...useHandleBlockchainActions_transaction_method\n  }\n}\n\nfragment useHandleBlockchainActions_ask_for_asset_swap on AskForSwapType {\n  fromAsset {\n    decimals\n    relayId\n    id\n  }\n  toAsset {\n    relayId\n    id\n  }\n}\n\nfragment useHandleBlockchainActions_cancel_orders on CancelOrderActionType {\n  method {\n    __typename\n    ... on TransactionSubmissionDataType {\n      ...useTransaction_transaction\n    }\n    ... on SignAndPostOrderCancelType {\n      cancelOrderData: data {\n        payload\n        message\n      }\n      serverSignature\n      clientSignatureStandard\n    }\n  }\n}\n\nfragment useHandleBlockchainActions_create_order on CreateOrderActionType {\n  method {\n    clientMessage\n    clientSignatureStandard\n    serverSignature\n    orderData\n    chain {\n      identifier\n    }\n  }\n}\n\nfragment useHandleBlockchainActions_freeze_asset_metadata on AssetFreezeMetadataActionType {\n  method {\n    __typename\n    ...useHandleBlockchainActions_transaction_method\n  }\n}\n\nfragment useHandleBlockchainActions_fulfill_order on FulfillOrderActionType {\n  method {\n    __typename\n    ...useHandleBlockchainActions_transaction_method\n  }\n  orderData {\n    openedAt\n  }\n}\n\nfragment useHandleBlockchainActions_mint_asset on MintActionType {\n  method {\n    ...useHandleBlockchainActions_transaction_method\n  }\n}\n\nfragment useHandleBlockchainActions_swap_asset on AssetSwapActionType {\n  method {\n    ...useHandleBlockchainActions_transaction_method\n  }\n}\n\nfragment useHandleBlockchainActions_transaction_method on TransactionMethodType {\n  __isTransactionMethodType: __typename\n  __typename\n  ... on TransactionSubmissionDataType {\n    ...useTransaction_transaction\n  }\n  ... on MetaTransactionDataType {\n    ...useTransaction_meta_transaction\n  }\n}\n\nfragment useHandleBlockchainActions_transfer_asset on AssetTransferActionType {\n  method {\n    __typename\n    ...useHandleBlockchainActions_transaction_method\n  }\n}\n\nfragment useTransaction_meta_transaction on MetaTransactionDataType {\n  clientMessage\n  clientSignatureStandard\n  functionSignature\n  verifyingContract\n}\n\nfragment useTransaction_transaction on TransactionSubmissionDataType {\n  chainIdentifier\n  source {\n    value\n  }\n  destination {\n    value\n  }\n  value\n  data\n}\n"
                    }
                }
            }();
            t.hash = "54e3d8defdccca33da98c46116587f53", e.default = t
        }
    }
]);
//# sourceMappingURL=45890-2480b5c0434015d3.js.map