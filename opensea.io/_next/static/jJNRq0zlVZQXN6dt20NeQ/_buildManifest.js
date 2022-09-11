self.__BUILD_MANIFEST = function(c, s, t, a, e, n, i, l, o, d, u, r, k, b, h, g, f, j, p, S, y, I, m, v, _, C, x, A, w, L, z, N, T, U, B, F, W, D, E, M, P, q, G, H, J) {
    return {
        __rewrites: {
            beforeFiles: [{
                source: "/:nextInternalLocale(en\\-US|zh\\-CN|zh\\-TW|es|fr|kr|ja)/favicon.ico",
                destination: D
            }, {
                source: "/:nextInternalLocale(en\\-US|zh\\-CN|zh\\-TW|es|fr|kr|ja)/apple-touch-icon-precomposed.png",
                destination: D
            }],
            afterFiles: [{
                source: "/:nextInternalLocale(en\\-US|zh\\-CN|zh\\-TW|es|fr|kr|ja)/assets/:collectionSlug",
                destination: "/:nextInternalLocale/assets"
            }, {
                source: "/:nextInternalLocale(en\\-US|zh\\-CN|zh\\-TW|es|fr|kr|ja)/activity/:collectionSlug",
                destination: "/:nextInternalLocale/activity"
            }],
            fallback: []
        },
        "/": [c, _, N, s, n, w, L, T, E, U, "static/chunks/pages/index-2f9c7846a6b9f0d7.js"],
        "/_app.spec": ["static/chunks/07e27881-74e665feeb70ee10.js", "static/chunks/24578-7ff232a68dfb6b12.js", "static/chunks/pages/_app.spec-8e4b44b0c152e0d6.js"],
        "/_error": ["static/chunks/pages/_error-4ded009e5aa305ec.js"],
        "/about": ["static/chunks/pages/about-d54a37d5e7c97a98.js"],
        "/account": [o, c, t, e, d, h, g, f, C, s, a, n, i, l, u, r, k, b, j, y, p, S, I, m, v, x, "static/chunks/pages/account-2cb968c362ac5711.js"],
        "/account/settings": [c, f, s, "static/chunks/pages/account/settings-b505f3e14e81b476.js"],
        "/account/verify-email": ["static/chunks/pages/account/verify-email-2f9632be70a91692.js"],
        "/account/[collectionSlug]": [o, c, t, e, d, h, g, f, C, s, a, n, i, l, u, r, k, b, j, y, p, S, I, m, v, x, "static/chunks/pages/account/[collectionSlug]-04da67f5ab0fdbae.js"],
        "/activity": [o, c, t, d, h, g, "static/chunks/97165-2771c4a866918a8a.js", s, a, l, u, b, p, m, "static/chunks/pages/activity-bf468d8da6282266.js"],
        "/asset/create": [t, B, M, "static/chunks/pages/asset/create-4dfd71b10fd27dc5.js"],
        "/assets": [o, c, t, e, d, h, g, f, C, s, a, n, i, l, u, r, k, b, j, y, p, S, I, m, v, x, "static/chunks/pages/assets-3ed2dd1290f671a3.js"],
        "/assets/solana/[mint]": [o, c, t, e, d, h, g, f, s, a, i, l, u, r, k, b, p, S, I, v, A, F, P, "static/chunks/pages/assets/solana/[mint]-cfb164e5800e44bc.js"],
        "/assets/solana/[mint]/sell": [i, r, A, q, "static/chunks/pages/assets/solana/[mint]/sell-f1edff38c1fa30cc.js"],
        "/assets/[chain]/[assetContractAddress]/[tokenId]": [o, c, t, e, d, h, g, f, s, a, i, l, u, r, k, b, p, S, I, v, A, F, P, "static/chunks/pages/assets/[chain]/[assetContractAddress]/[tokenId]-5bc35fa20bef9803.js"],
        "/assets/[chain]/[assetContractAddress]/[tokenId]/sell": [i, r, A, q, "static/chunks/pages/assets/[chain]/[assetContractAddress]/[tokenId]/sell-6df149e03bf9fbbc.js"],
        "/assets/[chain]/[assetContractAddress]/[tokenId]/transfer": [S, G, "static/chunks/pages/assets/[chain]/[assetContractAddress]/[tokenId]/transfer-984ade2880297a96.js"],
        "/bulk-list": [c, s, "static/chunks/pages/bulk-list-75a589a44f90673f.js"],
        "/bundle/[chain]/sell": [i, r, A, "static/chunks/pages/bundle/[chain]/sell-ce0257003873d700.js"],
        "/bundle/[chain]/transfer": [S, G, "static/chunks/pages/bundle/[chain]/transfer-38ab701a259bcedf.js"],
        "/bundles/[chain]/[slug]": [c, t, e, f, s, a, i, l, u, r, k, I, A, F, "static/chunks/pages/bundles/[chain]/[slug]-c4de51163980a7c3.js"],
        "/callback/bitski": ["static/chunks/pages/callback/bitski-0891523bb64db4a2.js"],
        "/careers": [L, "static/chunks/pages/careers-8e3bf191ea4b26b9.js"],
        "/category/[categorySlug]": [c, e, j, W, "static/chunks/pages/category/[categorySlug]-97c99c787cd2443a.js"],
        "/collection/create": [t, a, H, "static/chunks/pages/collection/create-8261f0606ad37fb7.js"],
        "/collection/[collectionSlug]": [o, c, t, e, d, h, g, f, C, s, a, n, i, l, u, r, k, b, j, y, p, S, I, m, v, x, z, "static/chunks/pages/collection/[collectionSlug]-26679c1d9aea1a39.js"],
        "/collection/[collectionSlug]/activity": [o, c, t, e, d, h, g, "static/chunks/59292-fce3104203b420e6.js", s, a, n, l, u, b, j, y, p, m, z, "static/chunks/pages/collection/[collectionSlug]/activity-ee450dcc7ec8550c.js"],
        "/collection/[collectionSlug]/analytics": [o, t, e, d, a, n, i, k, b, j, y, z, J, "static/chunks/pages/collection/[collectionSlug]/analytics-350ba1f117b6c10f.js"],
        "/collection/[collectionSlug]/asset/[chain]/[assetContractAddress]/[tokenId]/edit": [t, B, "static/chunks/pages/collection/[collectionSlug]/asset/[chain]/[assetContractAddress]/[tokenId]/edit-09e1fd36d327cd35.js"],
        "/collection/[collectionSlug]/assets/create": [t, B, M, "static/chunks/pages/collection/[collectionSlug]/assets/create-244700307497cc87.js"],
        "/collection/[collectionSlug]/drop": [t, e, N, a, U, "static/chunks/pages/collection/[collectionSlug]/drop-eac1e0b8a67c1ae1.js"],
        "/collection/[collectionSlug]/edit": [t, a, H, "static/chunks/pages/collection/[collectionSlug]/edit-bcc3519ffe8c2146.js"],
        "/collection/[collectionSlug]/mint": [T, "static/chunks/pages/collection/[collectionSlug]/mint-292eeb0b211afe11.js"],
        "/collection/[collectionSlug]/orderbook": [o, t, e, d, a, n, i, l, k, j, y, z, J, "static/chunks/pages/collection/[collectionSlug]/orderbook-35f0dba58ea6b3a3.js"],
        "/collection/[collectionSlug]/payouts": [c, t, "static/chunks/48914-ff6d97d248bba398.js", s, a, l, u, "static/chunks/pages/collection/[collectionSlug]/payouts-c6d1e885a009e2c5.js"],
        "/collections": ["static/chunks/pages/collections-65771423563d701c.js"],
        "/connected-socials/account-instagram-callback": ["static/chunks/pages/connected-socials/account-instagram-callback-3b73662922aea779.js"],
        "/connected-socials/account-twitter-callback": ["static/chunks/pages/connected-socials/account-twitter-callback-adbe4bb379b88047.js"],
        "/connected-socials/collection-instagram-callback": ["static/chunks/pages/connected-socials/collection-instagram-callback-7d789f224de89890.js"],
        "/connected-socials/twitter-callback": ["static/chunks/pages/connected-socials/twitter-callback-e28257711cdbd24f.js"],
        "/explore-collections": [c, W, "static/chunks/pages/explore-collections-ac3ca21c123d30ee.js"],
        "/explore-solana": [c, _, N, s, n, w, L, T, E, U, "static/chunks/pages/explore-solana-c5a5eeffcfc8c67b.js"],
        "/internal/footer": ["static/chunks/pages/internal/footer-b4276eb3084250f7.js"],
        "/login": ["static/chunks/pages/login-46cca93f8619e601.js"],
        "/my-watchlist": [c, _, s, "static/chunks/pages/my-watchlist-e5e6103da0cab678.js"],
        "/opensea-grants": ["static/chunks/pages/opensea-grants-315a574faf26aa95.js"],
        "/opensea-ventures": ["static/chunks/pages/opensea-ventures-6b6714837b746761.js"],
        "/partners": [L, "static/chunks/pages/partners-127bd7a9b421101e.js"],
        "/privacy": ["static/chunks/pages/privacy-e5dab052a99264df.js"],
        "/rankings": [c, _, s, n, w, "static/chunks/pages/rankings-acb2878e9ba9e191.js"],
        "/rankings/trending": [c, _, s, n, w, "static/chunks/pages/rankings/trending-dd1190367d16d641.js"],
        "/rankings/watchlist": [c, _, s, n, w, "static/chunks/pages/rankings/watchlist-fc0d11e6a335de5d.js"],
        "/solana-collections": [c, e, W, "static/chunks/pages/solana-collections-e2374bfc9cb6cc63.js"],
        "/tax-resources": ["static/chunks/pages/tax-resources-5bad8b068c3b1c8f.js"],
        "/tos": ["static/chunks/pages/tos-4d4fe7176ce62480.js"],
        "/[identifier]": [o, c, t, e, d, h, g, f, C, s, a, n, i, l, u, r, k, b, j, y, p, S, I, m, v, x, "static/chunks/pages/[identifier]-0fc5876301ec8a9c.js"],
        "/[identifier]/[collectionSlug]": [o, c, t, e, d, h, g, f, C, s, a, n, i, l, u, r, k, b, j, y, p, S, I, m, v, x, "static/chunks/pages/[identifier]/[collectionSlug]-77f8d56dc7b24d48.js"],
        sortedPages: ["/", "/_app", "/_app.spec", "/_error", "/about", "/account", "/account/settings", "/account/verify-email", "/account/[collectionSlug]", "/activity", "/asset/create", "/assets", "/assets/solana/[mint]", "/assets/solana/[mint]/sell", "/assets/[chain]/[assetContractAddress]/[tokenId]", "/assets/[chain]/[assetContractAddress]/[tokenId]/sell", "/assets/[chain]/[assetContractAddress]/[tokenId]/transfer", "/bulk-list", "/bundle/[chain]/sell", "/bundle/[chain]/transfer", "/bundles/[chain]/[slug]", "/callback/bitski", "/careers", "/category/[categorySlug]", "/collection/create", "/collection/[collectionSlug]", "/collection/[collectionSlug]/activity", "/collection/[collectionSlug]/analytics", "/collection/[collectionSlug]/asset/[chain]/[assetContractAddress]/[tokenId]/edit", "/collection/[collectionSlug]/assets/create", "/collection/[collectionSlug]/drop", "/collection/[collectionSlug]/edit", "/collection/[collectionSlug]/mint", "/collection/[collectionSlug]/orderbook", "/collection/[collectionSlug]/payouts", "/collections", "/connected-socials/account-instagram-callback", "/connected-socials/account-twitter-callback", "/connected-socials/collection-instagram-callback", "/connected-socials/twitter-callback", "/explore-collections", "/explore-solana", "/internal/footer", "/login", "/my-watchlist", "/opensea-grants", "/opensea-ventures", "/partners", "/privacy", "/rankings", "/rankings/trending", "/rankings/watchlist", "/solana-collections", "/tax-resources", "/tos", "/[identifier]", "/[identifier]/[collectionSlug]"]
    }
}("static/chunks/50114-0f185a0fb1c27a9b.js", "static/chunks/3405-626b0668518698fa.js", "static/chunks/44833-acf7cabbb1b71bc7.js", "static/chunks/25459-a2a4262aacd02cd2.js", "static/chunks/28263-ef811ba12172856a.js", "static/chunks/5371-bd0dc68af4a1ea05.js", "static/chunks/40237-eecec4b001e2df47.js", "static/chunks/60354-d4b2f73e68b8113a.js", "static/chunks/3143e8a8-80a1c40993de99bc.js", "static/chunks/66391-8a391964d39253fd.js", "static/chunks/4459-67f7aaf81f113062.js", "static/chunks/13056-cd8b419868e98083.js", "static/chunks/11424-ead84cd679b9a2dc.js", "static/chunks/39653-aa1ca629fd6d3aa3.js", "static/chunks/19969-c87987ca53c9dced.js", "static/chunks/71736-20e1e884a57ef378.js", "static/chunks/31523-70853feea38f899c.js", "static/chunks/57063-1f1ae170049a2814.js", "static/chunks/61793-28d691fef2bcb31a.js", "static/chunks/45890-2480b5c0434015d3.js", "static/chunks/96521-60a79718a71ec025.js", "static/chunks/88515-f9a9102f5cc43a15.js", "static/chunks/90186-cbb3f36e2967eb68.js", "static/chunks/59476-66c486db1111a24e.js", "static/chunks/54951-ee7a72c5fce04a5d.js", "static/chunks/57334-9b4f21f48746fcff.js", "static/chunks/80585-20973a23e04caba3.js", "static/chunks/90249-78a3ecbe549fc406.js", "static/chunks/13465-1664c8014d12e0fd.js", "static/chunks/30372-5d36f033d0912de9.js", "static/chunks/99807-dbf4b473a653877a.js", "static/chunks/50746-38de257680898c82.js", "static/chunks/7428-d3238bfabed6f7a8.js", "static/css/9e0b79f72d163b3c.css", "static/chunks/11224-9293c66fcadbacdb.js", "static/chunks/62761-446b497226fe9819.js", "static/chunks/46422-54db5151e1532015.js", "/:nextInternalLocale/static/images/favicon/favicon.ico", "static/chunks/76158-da2903fdc1a42019.js", "static/chunks/32919-264b48651b001296.js", "static/chunks/20924-0d76ca3fc5c3b7fe.js", "static/chunks/4234-1c91e3e6beec2dff.js", "static/chunks/23864-89fec0eb68c69841.js", "static/chunks/68223-aa2d8d63a9701c1f.js", "static/chunks/49925-30a549dae9caa089.js"), self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();