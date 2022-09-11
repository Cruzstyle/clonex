(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [66391], {
        54164: function(e, t, o) {
            var i;
            "undefined" != typeof self && self, e.exports = (i = o(27378), function(e) {
                function t(i) {
                    if (o[i]) return o[i].exports;
                    var n = o[i] = {
                        i: i,
                        l: !1,
                        exports: {}
                    };
                    return e[i].call(n.exports, n, n.exports, t), n.l = !0, n.exports
                }
                var o = {};
                return t.m = e, t.c = o, t.d = function(e, o, i) {
                    t.o(e, o) || Object.defineProperty(e, o, {
                        configurable: !1,
                        enumerable: !0,
                        get: i
                    })
                }, t.n = function(e) {
                    var o = e && e.__esModule ? function() {
                        return e.default
                    } : function() {
                        return e
                    };
                    return t.d(o, "a", o), o
                }, t.o = function(e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }, t.p = "", t(t.s = 0)
            }([function(e, t, o) {
                "use strict";

                function i() {
                    return i = Object.assign || function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var o = arguments[t];
                            for (var i in o) Object.prototype.hasOwnProperty.call(o, i) && (e[i] = o[i])
                        }
                        return e
                    }, i.apply(this, arguments)
                }

                function n(e) {
                    return l(e) || a(e) || s(e) || r()
                }

                function r() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }

                function s(e, t) {
                    if (e) {
                        if ("string" == typeof e) return f(e, t);
                        var o = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === o && e.constructor && (o = e.constructor.name), "Map" === o || "Set" === o ? Array.from(e) : "Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? f(e, t) : void 0
                    }
                }

                function a(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }

                function l(e) {
                    if (Array.isArray(e)) return f(e)
                }

                function f(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var o = 0, i = new Array(t); o < t; o++) i[o] = e[o];
                    return i
                }

                function u(e) {
                    return (u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    })(e)
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var c = o(1),
                    d = o.n(c),
                    h = "undefined" != typeof window ? c.useLayoutEffect : c.useEffect,
                    p = Object(c.forwardRef)((function(e, t) {
                        var o = Object(c.useRef)(),
                            r = Object(c.useRef)();
                        return h((function() {
                            function t() {
                                var t = e.highcharts || "object" === ("undefined" == typeof window ? "undefined" : u(window)) && window.Highcharts,
                                    i = e.constructorType || "chart";
                                t ? t[i] ? e.options ? r.current = t[i](o.current, e.options, e.callback ? e.callback : void 0) : console.warn('The "options" property was not passed.') : console.warn('The "constructorType" property is incorrect or some required module is not imported.') : console.warn('The "highcharts" property was not passed.')
                            }
                            if (r.current) {
                                if (!1 !== e.allowChartUpdate)
                                    if (!e.immutable && r.current) {
                                        var i;
                                        (i = r.current).update.apply(i, [e.options].concat(n(e.updateArgs || [!0, !0])))
                                    } else t()
                            } else t()
                        })), h((function() {
                            return function() {
                                r.current && (r.current.destroy(), r.current = null)
                            }
                        }), []), Object(c.useImperativeHandle)(t, (function() {
                            return {
                                get chart() {
                                    return r.current
                                },
                                container: o
                            }
                        }), []), d.a.createElement("div", i({}, e.containerProps, {
                            ref: o
                        }))
                    }));
                t.default = Object(c.memo)(p)
            }, function(e, t) {
                e.exports = i
            }]))
        },
        88332: function(e, t, o) {
            var i, n, r;
            r = function(e) {
                function t(e, t, o, i) {
                    e.hasOwnProperty(t) || (e[t] = i.apply(null, o), "function" === typeof CustomEvent && window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded", {
                        detail: {
                            path: t,
                            module: e[t]
                        }
                    })))
                }
                t(e = e ? e._modules : {}, "Extensions/Boost/Boostables.js", [], (function() {
                    return "area areaspline arearange column columnrange bar line scatter heatmap bubble treemap".split(" ")
                })), t(e, "Extensions/Boost/BoostableMap.js", [e["Extensions/Boost/Boostables.js"]], (function(e) {
                    var t = {};
                    return e.forEach((function(e) {
                        t[e] = 1
                    })), t
                })), t(e, "Extensions/Boost/WGLShader.js", [e["Core/Utilities.js"]], (function(e) {
                    var t = e.clamp,
                        o = e.error,
                        i = e.pick;
                    return function(e) {
                        function n() {
                            y.length && o("[highcharts boost] shader error - " + y.join("\n"))
                        }

                        function r(t, o) {
                            var i = e.createShader("vertex" === o ? e.VERTEX_SHADER : e.FRAGMENT_SHADER);
                            return e.shaderSource(i, t), e.compileShader(i), e.getShaderParameter(i, e.COMPILE_STATUS) ? i : (y.push("when compiling " + o + " shader:\n" + e.getShaderInfoLog(i)), !1)
                        }

                        function s() {
                            function t(t) {
                                return e.getUniformLocation(l, t)
                            }
                            var o = r("#version 100\n#define LN10 2.302585092994046\nprecision highp float;\nattribute vec4 aVertexPosition;\nattribute vec4 aColor;\nvarying highp vec2 position;\nvarying highp vec4 vColor;\nuniform mat4 uPMatrix;\nuniform float pSize;\nuniform float translatedThreshold;\nuniform bool hasThreshold;\nuniform bool skipTranslation;\nuniform float xAxisTrans;\nuniform float xAxisMin;\nuniform float xAxisMinPad;\nuniform float xAxisPointRange;\nuniform float xAxisLen;\nuniform bool  xAxisPostTranslate;\nuniform float xAxisOrdinalSlope;\nuniform float xAxisOrdinalOffset;\nuniform float xAxisPos;\nuniform bool  xAxisCVSCoord;\nuniform bool  xAxisIsLog;\nuniform bool  xAxisReversed;\nuniform float yAxisTrans;\nuniform float yAxisMin;\nuniform float yAxisMinPad;\nuniform float yAxisPointRange;\nuniform float yAxisLen;\nuniform bool  yAxisPostTranslate;\nuniform float yAxisOrdinalSlope;\nuniform float yAxisOrdinalOffset;\nuniform float yAxisPos;\nuniform bool  yAxisCVSCoord;\nuniform bool  yAxisIsLog;\nuniform bool  yAxisReversed;\nuniform bool  isBubble;\nuniform bool  bubbleSizeByArea;\nuniform float bubbleZMin;\nuniform float bubbleZMax;\nuniform float bubbleZThreshold;\nuniform float bubbleMinSize;\nuniform float bubbleMaxSize;\nuniform bool  bubbleSizeAbs;\nuniform bool  isInverted;\nfloat bubbleRadius(){\nfloat value = aVertexPosition.w;\nfloat zMax = bubbleZMax;\nfloat zMin = bubbleZMin;\nfloat radius = 0.0;\nfloat pos = 0.0;\nfloat zRange = zMax - zMin;\nif (bubbleSizeAbs){\nvalue = value - bubbleZThreshold;\nzMax = max(zMax - bubbleZThreshold, zMin - bubbleZThreshold);\nzMin = 0.0;\n}\nif (value < zMin){\nradius = bubbleZMin / 2.0 - 1.0;\n} else {\npos = zRange > 0.0 ? (value - zMin) / zRange : 0.5;\nif (bubbleSizeByArea && pos > 0.0){\npos = sqrt(pos);\n}\nradius = ceil(bubbleMinSize + pos * (bubbleMaxSize - bubbleMinSize)) / 2.0;\n}\nreturn radius * 2.0;\n}\nfloat translate(float val,\nfloat pointPlacement,\nfloat localA,\nfloat localMin,\nfloat minPixelPadding,\nfloat pointRange,\nfloat len,\nbool  cvsCoord,\nbool  isLog,\nbool  reversed\n){\nfloat sign = 1.0;\nfloat cvsOffset = 0.0;\nif (cvsCoord) {\nsign *= -1.0;\ncvsOffset = len;\n}\nif (isLog) {\nval = log(val) / LN10;\n}\nif (reversed) {\nsign *= -1.0;\ncvsOffset -= sign * len;\n}\nreturn sign * (val - localMin) * localA + cvsOffset + \n(sign * minPixelPadding);\n}\nfloat xToPixels(float value) {\nif (skipTranslation){\nreturn value;// + xAxisPos;\n}\nreturn translate(value, 0.0, xAxisTrans, xAxisMin, xAxisMinPad, xAxisPointRange, xAxisLen, xAxisCVSCoord, xAxisIsLog, xAxisReversed);// + xAxisPos;\n}\nfloat yToPixels(float value, float checkTreshold) {\nfloat v;\nif (skipTranslation){\nv = value;// + yAxisPos;\n} else {\nv = translate(value, 0.0, yAxisTrans, yAxisMin, yAxisMinPad, yAxisPointRange, yAxisLen, yAxisCVSCoord, yAxisIsLog, yAxisReversed);// + yAxisPos;\nif (v > yAxisLen) {\nv = yAxisLen;\n}\n}\nif (checkTreshold > 0.0 && hasThreshold) {\nv = min(v, translatedThreshold);\n}\nreturn v;\n}\nvoid main(void) {\nif (isBubble){\ngl_PointSize = bubbleRadius();\n} else {\ngl_PointSize = pSize;\n}\nvColor = aColor;\nif (skipTranslation && isInverted) {\ngl_Position = uPMatrix * vec4(aVertexPosition.y + yAxisPos, aVertexPosition.x + xAxisPos, 0.0, 1.0);\n} else if (isInverted) {\ngl_Position = uPMatrix * vec4(yToPixels(aVertexPosition.y, aVertexPosition.z) + yAxisPos, xToPixels(aVertexPosition.x) + xAxisPos, 0.0, 1.0);\n} else {\ngl_Position = uPMatrix * vec4(xToPixels(aVertexPosition.x) + xAxisPos, yToPixels(aVertexPosition.y, aVertexPosition.z) + yAxisPos, 0.0, 1.0);\n}\n}", "vertex"),
                                i = r("precision highp float;\nuniform vec4 fillColor;\nvarying highp vec2 position;\nvarying highp vec4 vColor;\nuniform sampler2D uSampler;\nuniform bool isCircle;\nuniform bool hasColor;\nvoid main(void) {\nvec4 col = fillColor;\nvec4 tcol = texture2D(uSampler, gl_PointCoord.st);\nif (hasColor) {\ncol = vColor;\n}\nif (isCircle) {\ncol *= tcol;\nif (tcol.r < 0.0) {\ndiscard;\n} else {\ngl_FragColor = col;\n}\n} else {\ngl_FragColor = col;\n}\n}", "fragment");
                            return o && i ? (l = e.createProgram(), e.attachShader(l, o), e.attachShader(l, i), e.linkProgram(l), e.getProgramParameter(l, e.LINK_STATUS) ? (e.useProgram(l), e.bindAttribLocation(l, 0, "aVertexPosition"), f = t("uPMatrix"), u = t("pSize"), c = t("fillColor"), d = t("isBubble"), h = t("bubbleSizeAbs"), p = t("bubbleSizeByArea"), A = t("uSampler"), g = t("skipTranslation"), b = t("isCircle"), m = t("isInverted"), !0) : (y.push(e.getProgramInfoLog(l)), n(), l = !1)) : (l = !1, n(), !1)
                        }

                        function a(t, o) {
                            e && l && (t = x[t] = x[t] || e.getUniformLocation(l, t), e.uniform1f(t, o))
                        }
                        var l, f, u, c, d, h, p, g, b, m, A, x = {},
                            y = [];
                        return !(e && !s()) && {
                            psUniform: function() {
                                return u
                            },
                            pUniform: function() {
                                return f
                            },
                            fillColorUniform: function() {
                                return c
                            },
                            setBubbleUniforms: function(o, n, r, s) {
                                void 0 === s && (s = 1);
                                var f = o.options,
                                    u = Number.MAX_VALUE,
                                    c = -Number.MAX_VALUE;
                                if (e && l && o.is("bubble")) {
                                    var g = o.getPxExtremes();
                                    u = i(f.zMin, t(n, !1 === f.displayNegative ? f.zThreshold : -Number.MAX_VALUE, u)), c = i(f.zMax, Math.max(c, r)), e.uniform1i(d, 1), e.uniform1i(b, 1), e.uniform1i(p, "width" !== o.options.sizeBy), e.uniform1i(h, o.options.sizeByAbsoluteValue), a("bubbleZMin", u), a("bubbleZMax", c), a("bubbleZThreshold", o.options.zThreshold), a("bubbleMinSize", g.minPxSize * s), a("bubbleMaxSize", g.maxPxSize * s)
                                }
                            },
                            bind: function() {
                                e && l && e.useProgram(l)
                            },
                            program: function() {
                                return l
                            },
                            create: s,
                            setUniform: a,
                            setPMatrix: function(t) {
                                e && l && e.uniformMatrix4fv(f, !1, t)
                            },
                            setColor: function(t) {
                                e && l && e.uniform4f(c, t[0] / 255, t[1] / 255, t[2] / 255, t[3])
                            },
                            setPointSize: function(t) {
                                e && l && e.uniform1f(u, t)
                            },
                            setSkipTranslation: function(t) {
                                e && l && e.uniform1i(g, !0 === t ? 1 : 0)
                            },
                            setTexture: function(t) {
                                e && l && e.uniform1i(A, t)
                            },
                            setDrawAsCircle: function(t) {
                                e && l && e.uniform1i(b, t ? 1 : 0)
                            },
                            reset: function() {
                                e && l && (e.uniform1i(d, 0), e.uniform1i(b, 0))
                            },
                            setInverted: function(t) {
                                e && l && e.uniform1i(m, t)
                            },
                            destroy: function() {
                                e && l && (e.deleteProgram(l), l = !1)
                            }
                        }
                    }
                })), t(e, "Extensions/Boost/WGLVBuffer.js", [], (function() {
                    return function(e, t, o) {
                        function i() {
                            r && (e.deleteBuffer(r), s = r = !1), f = 0, a = o || 2, n = []
                        }
                        var n, r = !1,
                            s = !1,
                            a = o || 2,
                            l = !1,
                            f = 0;
                        return {
                            destroy: i,
                            bind: function() {
                                if (!r) return !1;
                                e.vertexAttribPointer(s, a, e.FLOAT, !1, 0, 0)
                            },
                            data: n,
                            build: function(o, f, u) {
                                var c;
                                return (n = o || []) && 0 !== n.length || l ? (a = u || a, r && e.deleteBuffer(r), l || (c = new Float32Array(n)), r = e.createBuffer(), e.bindBuffer(e.ARRAY_BUFFER, r), e.bufferData(e.ARRAY_BUFFER, l || c, e.STATIC_DRAW), s = e.getAttribLocation(t.program(), f), e.enableVertexAttribArray(s), !0) : (i(), !1)
                            },
                            render: function(t, o, i) {
                                var s = l ? l.length : n.length;
                                return !(!r || !s) && ((!t || t > s || 0 > t) && (t = 0), (!o || o > s) && (o = s), !(t >= o) && (e.drawArrays(e[(i || "points").toUpperCase()], t / a, (o - t) / a), !0))
                            },
                            allocate: function(e) {
                                f = -1, l = new Float32Array(4 * e)
                            },
                            push: function(e, t, o, i) {
                                l && (l[++f] = e, l[++f] = t, l[++f] = o, l[++f] = i)
                            }
                        }
                    }
                })), t(e, "Extensions/Boost/WGLRenderer.js", [e["Core/Color/Color.js"], e["Extensions/Boost/WGLShader.js"], e["Extensions/Boost/WGLVBuffer.js"], e["Core/Globals.js"], e["Core/Utilities.js"]], (function(e, t, o, i, n) {
                    var r = e.parse,
                        s = i.doc,
                        a = i.win,
                        l = n.isNumber,
                        f = n.isObject,
                        u = n.merge,
                        c = n.objectEach,
                        d = n.pick;
                    return function(n) {
                        function h() {
                            return j.pixelRatio || a.devicePixelRatio || 1
                        }

                        function p(e) {
                            if (e.isSeriesBoosting) {
                                var t = !!e.options.stacking,
                                    o = e.xData || e.options.xData || e.processedXData;
                                return t = (t ? e.data : o || e.options.data).length, "treemap" === e.type ? t *= 12 : "heatmap" === e.type ? t *= 6 : D[e.type] && (t *= 2), t
                            }
                            return 0
                        }

                        function g() {
                            S.clear(S.COLOR_BUFFER_BIT | S.DEPTH_BUFFER_BIT)
                        }

                        function b() {
                            R = [], w.data = B = [], k = [], C && C.destroy()
                        }

                        function m(e) {
                            if (v) {
                                var t = h();
                                v.setUniform("xAxisTrans", e.transA * t), v.setUniform("xAxisMin", e.min), v.setUniform("xAxisMinPad", e.minPixelPadding * t), v.setUniform("xAxisPointRange", e.pointRange), v.setUniform("xAxisLen", e.len * t), v.setUniform("xAxisPos", e.pos * t), v.setUniform("xAxisCVSCoord", !e.horiz), v.setUniform("xAxisIsLog", !!e.logarithmic), v.setUniform("xAxisReversed", !!e.reversed)
                            }
                        }

                        function A(e) {
                            if (v) {
                                var t = h();
                                v.setUniform("yAxisTrans", e.transA * t), v.setUniform("yAxisMin", e.min), v.setUniform("yAxisMinPad", e.minPixelPadding * t), v.setUniform("yAxisPointRange", e.pointRange), v.setUniform("yAxisLen", e.len * t), v.setUniform("yAxisPos", e.pos * t), v.setUniform("yAxisCVSCoord", !e.horiz), v.setUniform("yAxisIsLog", !!e.logarithmic), v.setUniform("yAxisReversed", !!e.reversed)
                            }
                        }

                        function x(e, t) {
                            v.setUniform("hasThreshold", e), v.setUniform("translatedThreshold", t)
                        }

                        function y(t) {
                            var s = h();
                            return !!t && (E = t.chartWidth * s, P = t.chartHeight * s, !!(S && E && P && v) && (j.debug.timeRendering && console.time("gl rendering"), S.canvas.width = E, S.canvas.height = P, v.bind(), S.viewport(0, 0, E, P), v.setPMatrix([2 / E, 0, 0, 0, 0, -2 / P, 0, 0, 0, 0, -2, 0, -1, 1, -1, 1]), 1 < j.lineWidth && !i.isMS && S.lineWidth(j.lineWidth), C.build(w.data, "aVertexPosition", 4), C.bind(), v.setInverted(t.inverted), R.forEach((function(i, n) {
                                var a = i.series.options,
                                    f = a.marker,
                                    u = "undefined" !== typeof a.lineWidth ? a.lineWidth : 1,
                                    c = a.threshold,
                                    h = l(c),
                                    p = i.series.yAxis.getThreshold(c);
                                if (c = d(a.marker ? a.marker.enabled : null, !!i.series.xAxis.isRadial || null, i.series.closestPointRangePx > 2 * ((a.marker ? a.marker.radius : 10) || 10)), f = U[f && f.symbol || i.series.symbol] || U.circle, 0 !== i.segments.length && i.segments[0].from !== i.segments[0].to) {
                                    if (f.isReady && (S.bindTexture(S.TEXTURE_2D, f.handle), v.setTexture(f.handle)), t.styledMode ? f = i.series.markerGroup && i.series.markerGroup.getStyle("fill") : (f = "points" === i.drawMode && i.series.pointAttribs && i.series.pointAttribs().fill || i.series.color, a.colorByPoint && (f = i.series.chart.options.colors[n])), i.series.fillOpacity && a.fillOpacity && (f = new e(f).setOpacity(d(a.fillOpacity, 1)).get()), f = r(f).rgba, j.useAlpha || (f[3] = 1), "lines" === i.drawMode && j.useAlpha && 1 > f[3] && (f[3] /= 10), "add" === a.boostBlending ? (S.blendFunc(S.SRC_ALPHA, S.ONE), S.blendEquation(S.FUNC_ADD)) : "mult" === a.boostBlending || "multiply" === a.boostBlending ? S.blendFunc(S.DST_COLOR, S.ZERO) : "darken" === a.boostBlending ? (S.blendFunc(S.ONE, S.ONE), S.blendEquation(S.FUNC_MIN)) : S.blendFuncSeparate(S.SRC_ALPHA, S.ONE_MINUS_SRC_ALPHA, S.ONE, S.ONE_MINUS_SRC_ALPHA), v.reset(), 0 < i.colorData.length ? (v.setUniform("hasColor", 1), (n = o(S, v)).build(i.colorData, "aColor", 4), n.bind()) : S.disableVertexAttribArray(S.getAttribLocation(v.program(), "aColor")), v.setColor(f), m(i.series.xAxis), A(i.series.yAxis), x(h, p), "points" === i.drawMode && v.setPointSize(2 * d(a.marker && a.marker.radius, .5) * s), v.setSkipTranslation(i.skipTranslation), "bubble" === i.series.type && v.setBubbleUniforms(i.series, i.zMin, i.zMax, s), v.setDrawAsCircle(_[i.series.type] || !1), 0 < u || "line_strip" !== i.drawMode)
                                        for (u = 0; u < i.segments.length; u++) C.render(i.segments[u].from, i.segments[u].to, i.drawMode);
                                    if (i.hasMarkers && c)
                                        for (v.setPointSize(2 * d(a.marker && a.marker.radius, 5) * s), v.setDrawAsCircle(!0), u = 0; u < i.segments.length; u++) C.render(i.segments[u].from, i.segments[u].to, "POINTS")
                                }
                            })), j.debug.timeRendering && console.timeEnd("gl rendering"), n && n(), void b()))
                        }
                        var v = !1,
                            C = !1,
                            T = 0,
                            S = !1,
                            E = 0,
                            P = 0,
                            B = !1,
                            k = !1,
                            w = {},
                            M = !1,
                            R = [],
                            U = {},
                            D = {
                                column: !0,
                                columnrange: !0,
                                bar: !0,
                                area: !0,
                                areaspline: !0,
                                arearange: !0
                            },
                            _ = {
                                scatter: !0,
                                bubble: !0
                            },
                            j = {
                                pointSize: 1,
                                lineWidth: 1,
                                fillColor: "#AA00AA",
                                useAlpha: !0,
                                usePreallocated: !1,
                                useGPUTranslations: !1,
                                debug: {
                                    timeRendering: !1,
                                    timeSeriesProcessing: !1,
                                    timeSetup: !1,
                                    timeBufferCopy: !1,
                                    timeKDTree: !1,
                                    showSkipSummary: !1
                                }
                            };
                        return w = {
                            allocateBufferForSingleSeries: function(e) {
                                var t = 0;
                                j.usePreallocated && (e.isSeriesBoosting && (t = p(e)), C.allocate(t))
                            },
                            pushSeries: function(e) {
                                0 < R.length && R[R.length - 1].hasMarkers && (R[R.length - 1].markerTo = k.length), j.debug.timeSeriesProcessing && console.time("building " + e.type + " series");
                                var t = {
                                    segments: [],
                                    markerFrom: k.length,
                                    colorData: [],
                                    series: e,
                                    zMin: Number.MAX_VALUE,
                                    zMax: -Number.MAX_VALUE,
                                    hasMarkers: !!e.options.marker && !1 !== e.options.marker.enabled,
                                    showMarkers: !0,
                                    drawMode: {
                                        area: "lines",
                                        arearange: "lines",
                                        areaspline: "lines",
                                        column: "lines",
                                        columnrange: "lines",
                                        bar: "lines",
                                        line: "line_strip",
                                        scatter: "points",
                                        heatmap: "triangles",
                                        treemap: "triangles",
                                        bubble: "points"
                                    }[e.type] || "line_strip"
                                };
                                e.index >= R.length ? R.push(t) : R[e.index] = t,
                                    function(e, t) {
                                        function o(e) {
                                            e && (t.colorData.push(e[0]), t.colorData.push(e[1]), t.colorData.push(e[2]), t.colorData.push(e[3]))
                                        }

                                        function i(e, i, n, r, s) {
                                            void 0 === r && (r = 1), o(s), 1 === ue || j.useGPUTranslations && !t.skipTranslation || (e *= ue, i *= ue, r *= ue), j.usePreallocated ? (C.push(e, i, n ? 1 : 0, r), T += 4) : (B.push(e), B.push(i), B.push(n ? ue : 0), B.push(r))
                                        }

                                        function n() {
                                            t.segments.length && (t.segments[t.segments.length - 1].to = B.length || T)
                                        }

                                        function s() {
                                            t.segments.length && t.segments[t.segments.length - 1].from === (B.length || T) || (n(), t.segments.push({
                                                from: B.length || T
                                            }))
                                        }

                                        function a(e, t, n, r, s) {
                                            o(s), i(e + n, t), o(s), i(e, t), o(s), i(e, t + r), o(s), i(e, t + r), o(s), i(e + n, t + r), o(s), i(e + n, t)
                                        }

                                        function l(e, o) {
                                            j.useGPUTranslations || (t.skipTranslation = !0, e.x = k.toPixels(e.x, !0), e.y = P.toPixels(e.y, !0)), o ? B = [e.x, e.y, 0, 2].concat(B) : i(e.x, e.y, 0, 2)
                                        }
                                        var u = e.pointArrayMap && "low,high" === e.pointArrayMap.join(","),
                                            c = e.chart,
                                            d = e.options,
                                            p = !!d.stacking,
                                            g = d.data,
                                            b = e.xAxis.getExtremes(),
                                            m = b.min,
                                            A = b.max,
                                            x = (b = e.yAxis.getExtremes()).min,
                                            y = b.max,
                                            v = e.xData || d.xData || e.processedXData,
                                            S = e.yData || d.yData || e.processedYData,
                                            E = e.zData || d.zData || e.processedZData,
                                            P = e.yAxis,
                                            k = e.xAxis,
                                            w = e.chart.plotWidth,
                                            M = !v || 0 === v.length,
                                            R = d.connectNulls;
                                        b = e.points || !1;
                                        var U, _, L, G, z, O, N, I = !1,
                                            V = !1,
                                            X = p ? e.data : v || g,
                                            F = {
                                                x: Number.MAX_VALUE,
                                                y: 0
                                            },
                                            Y = {
                                                x: -Number.MAX_VALUE,
                                                y: 0
                                            },
                                            H = 0,
                                            W = !1,
                                            q = -1,
                                            K = !1,
                                            Z = !1,
                                            Q = "undefined" === typeof c.index,
                                            J = !1,
                                            $ = !1,
                                            ee = !1,
                                            te = D[e.type],
                                            oe = !1,
                                            ie = !0,
                                            ne = !0,
                                            re = d.zoneAxis || "y",
                                            se = d.zones || !1,
                                            ae = !1,
                                            le = d.threshold,
                                            fe = !1,
                                            ue = h();
                                        if (!(d.boostData && 0 < d.boostData.length)) {
                                            if (d.gapSize && (fe = "value" !== d.gapUnit ? d.gapSize * e.closestPointRange : d.gapSize), se) {
                                                var ce = [];
                                                se.forEach((function(e, t) {
                                                    if (e.color) {
                                                        var o = r(e.color).rgba;
                                                        o[0] /= 255, o[1] /= 255, o[2] /= 255, ce[t] = o, ae || "undefined" !== typeof e.value || (ae = o)
                                                    }
                                                })), ae || (v = e.pointAttribs && e.pointAttribs().fill || e.color, (ae = r(v).rgba)[0] /= 255, ae[1] /= 255, ae[2] /= 255)
                                            }
                                            if (c.inverted && (w = e.chart.plotHeight), e.closestPointRangePx = Number.MAX_VALUE, s(), b && 0 < b.length) t.skipTranslation = !0, t.drawMode = "triangles", b[0].node && b[0].node.levelDynamic && b.sort((function(e, t) {
                                                if (e.node) {
                                                    if (e.node.levelDynamic > t.node.levelDynamic) return 1;
                                                    if (e.node.levelDynamic < t.node.levelDynamic) return -1
                                                }
                                                return 0
                                            })), b.forEach((function(t) {
                                                var o = t.plotY;
                                                if ("undefined" !== typeof o && !isNaN(o) && null !== t.y && t.shapeArgs) {
                                                    var i = t.shapeArgs;
                                                    o = void 0 === (o = i.x) ? 0 : o;
                                                    var n = i.y;
                                                    n = void 0 === n ? 0 : n;
                                                    var s = i.width;
                                                    s = void 0 === s ? 0 : s, i = void 0 === (i = i.height) ? 0 : i;
                                                    var l = c.styledMode ? t.series.colorAttribs(t) : l = t.series.pointAttribs(t);
                                                    t = l["stroke-width"] || 0, (ee = r(l.fill).rgba)[0] /= 255, ee[1] /= 255, ee[2] /= 255, e.is("treemap") && (t = t || 1, (_ = r(l.stroke).rgba)[0] /= 255, _[1] /= 255, _[2] /= 255, a(o, n, s, i, _), t /= 2), e.is("heatmap") && c.inverted && (o = k.len - o, n = P.len - n, s = -s, i = -i), a(o + t, n + t, s - 2 * t, i - 2 * t, ee)
                                                }
                                            }));
                                            else {
                                                for (b = function() {
                                                        if ("undefined" === typeof(z = X[++q])) return "continue";
                                                        if (Q) return "break";
                                                        var o, n = g && g[q];
                                                        return !M && f(n, !0) && n.color && ((ee = r(n.color).rgba)[0] /= 255, ee[1] /= 255, ee[2] /= 255), M ? (L = z[0], G = z[1], X[q + 1] && (Z = X[q + 1][0]), X[q - 1] && (K = X[q - 1][0]), 3 <= z.length && (O = z[2], z[2] > t.zMax && (t.zMax = z[2]), z[2] < t.zMin && (t.zMin = z[2]))) : (L = z, G = S[q], X[q + 1] && (Z = X[q + 1]), X[q - 1] && (K = X[q - 1]), E && E.length && (O = E[q], E[q] > t.zMax && (t.zMax = E[q]), E[q] < t.zMin && (t.zMin = E[q]))), R || null !== L && null !== G ? (Z && Z >= m && Z <= A && (J = !0), K && K >= m && K <= A && ($ = !0), u ? (M && (G = z.slice(1, 3)), N = G[0], G = G[1]) : p && (L = z.x, G = z.stackY, N = G - z.y), null !== x && "undefined" !== typeof x && null !== y && "undefined" !== typeof y && (ie = G >= x && G <= y), L > A && Y.x < A && (Y.x = L, Y.y = G), L < m && F.x > m && (F.x = L, F.y = G), null === G && R ? "continue" : null !== G && (ie || J || $) ? ((Z >= m || L >= m) && (K <= A || L <= A) && (oe = !0), oe || J || $ ? (fe && L - K > fe && s(), se && (se.some((function(e, t) {
                                                            var i = se[t - 1];
                                                            return "x" === re ? "undefined" !== typeof e.value && L <= e.value && (ce[t] && (!i || L >= i.value) && (o = ce[t]), !0) : "undefined" !== typeof e.value && G <= e.value && (ce[t] && (!i || G >= i.value) && (o = ce[t]), !0)
                                                        })), ee = o || ae || ee), !j.useGPUTranslations && (t.skipTranslation = !0, L = k.toPixels(L, !0), G = P.toPixels(G, !0), L > w && "points" === t.drawMode) ? "continue" : (t.hasMarkers && oe && !1 !== I && (e.closestPointRangePx = Math.min(e.closestPointRangePx, Math.abs(L - I))), !j.useGPUTranslations && !j.usePreallocated && I && 1 > Math.abs(L - I) && V && 1 > Math.abs(G - V) ? (j.debug.showSkipSummary && ++H, "continue") : (te && (U = N, !1 !== N && "undefined" !== typeof N || (U = 0 > G ? G : 0), u || p || (U = Math.max(null === le ? x : le, x)), j.useGPUTranslations || (U = P.toPixels(U, !0)), i(L, U, 0, 0, ee)), d.step && !ne && i(L, V, 0, 2, ee), i(L, G, 0, "bubble" === e.type ? O || 1 : 2, ee), I = L, V = G, W = !0, void(ne = !1)))) : "continue") : (s(), "continue")) : (s(), "continue")
                                                    }; q < X.length - 1 && "break" !== b(););
                                                j.debug.showSkipSummary && console.log("skipped points:", H), W || !1 === R || "line_strip" !== e.drawMode || (F.x < Number.MAX_VALUE && l(F, !0), Y.x > -Number.MAX_VALUE && l(Y))
                                            }
                                            n()
                                        }
                                    }(e, t), j.debug.timeSeriesProcessing && console.timeEnd("building " + e.type + " series")
                            },
                            setSize: function(e, t) {
                                E === e && P === t || !v || (E = e, P = t, v.bind(), v.setPMatrix([2 / E, 0, 0, 0, 0, -2 / P, 0, 0, 0, 0, -2, 0, -1, 1, -1, 1]))
                            },
                            inited: function() {
                                return M
                            },
                            setThreshold: x,
                            init: function(e, i) {
                                function n(e, t) {
                                    var o = {
                                            isReady: !1,
                                            texture: s.createElement("canvas"),
                                            handle: S.createTexture()
                                        },
                                        i = o.texture.getContext("2d");
                                    U[e] = o, o.texture.width = 512, o.texture.height = 512, i.mozImageSmoothingEnabled = !1, i.webkitImageSmoothingEnabled = !1, i.msImageSmoothingEnabled = !1, i.imageSmoothingEnabled = !1, i.strokeStyle = "rgba(255, 255, 255, 0)", i.fillStyle = "#FFF", t(i);
                                    try {
                                        S.activeTexture(S.TEXTURE0), S.bindTexture(S.TEXTURE_2D, o.handle), S.texImage2D(S.TEXTURE_2D, 0, S.RGBA, S.RGBA, S.UNSIGNED_BYTE, o.texture), S.texParameteri(S.TEXTURE_2D, S.TEXTURE_WRAP_S, S.CLAMP_TO_EDGE), S.texParameteri(S.TEXTURE_2D, S.TEXTURE_WRAP_T, S.CLAMP_TO_EDGE), S.texParameteri(S.TEXTURE_2D, S.TEXTURE_MAG_FILTER, S.LINEAR), S.texParameteri(S.TEXTURE_2D, S.TEXTURE_MIN_FILTER, S.LINEAR), S.bindTexture(S.TEXTURE_2D, null), o.isReady = !0
                                    } catch (n) {}
                                }
                                var r = 0,
                                    a = ["webgl", "experimental-webgl", "moz-webgl", "webkit-3d"];
                                if (M = !1, !e) return !1;
                                for (j.debug.timeSetup && console.time("gl setup"); r < a.length && !(S = e.getContext(a[r], {})); r++);
                                return !!S && (i || b(), S.enable(S.BLEND), S.blendFunc(S.SRC_ALPHA, S.ONE_MINUS_SRC_ALPHA), S.disable(S.DEPTH_TEST), S.depthFunc(S.LESS), !!(v = t(S)) && (C = o(S, v), n("circle", (function(e) {
                                    e.beginPath(), e.arc(256, 256, 256, 0, 2 * Math.PI), e.stroke(), e.fill()
                                })), n("square", (function(e) {
                                    e.fillRect(0, 0, 512, 512)
                                })), n("diamond", (function(e) {
                                    e.beginPath(), e.moveTo(256, 0), e.lineTo(512, 256), e.lineTo(256, 512), e.lineTo(0, 256), e.lineTo(256, 0), e.fill()
                                })), n("triangle", (function(e) {
                                    e.beginPath(), e.moveTo(0, 512), e.lineTo(256, 0), e.lineTo(512, 512), e.lineTo(0, 512), e.fill()
                                })), n("triangle-down", (function(e) {
                                    e.beginPath(), e.moveTo(0, 0), e.lineTo(256, 512), e.lineTo(512, 0), e.lineTo(0, 0), e.fill()
                                })), M = !0, j.debug.timeSetup && console.timeEnd("gl setup"), !0))
                            },
                            render: function e(t) {
                                if (g(), t.renderer.forExport) return y(t);
                                M ? y(t) : setTimeout((function() {
                                    e(t)
                                }), 1)
                            },
                            settings: j,
                            valid: function() {
                                return !1 !== S
                            },
                            clear: g,
                            flush: b,
                            setXAxis: m,
                            setYAxis: A,
                            data: B,
                            gl: function() {
                                return S
                            },
                            allocateBuffer: function(e) {
                                var t = 0;
                                j.usePreallocated && (e.series.forEach((function(e) {
                                    e.isSeriesBoosting && (t += p(e))
                                })), C.allocate(t))
                            },
                            destroy: function() {
                                b(), C.destroy(), v.destroy(), S && (c(U, (function(e) {
                                    e.handle && S.deleteTexture(e.handle)
                                })), S.canvas.width = 1, S.canvas.height = 1)
                            },
                            setOptions: function(e) {
                                "pixelRatio" in e || (e.pixelRatio = 1), u(!0, j, e)
                            }
                        }
                    }
                })), t(e, "Extensions/Boost/BoostAttach.js", [e["Core/Chart/Chart.js"], e["Extensions/Boost/WGLRenderer.js"], e["Core/Globals.js"], e["Core/Utilities.js"]], (function(e, t, o, i) {
                    var n, r = o.doc,
                        s = i.error;
                    return function(o, i) {
                        var a = o.chartWidth,
                            l = o.chartHeight,
                            f = o,
                            u = o.seriesGroup || i.group;
                        return r.implementation.hasFeature("www.http://w3.org/TR/SVG11/feature#Extensibility", "1.1"), f = o.isChartSeriesBoosting() ? o : i, n || (n = r.createElement("canvas")), f.renderTarget || (f.canvas = n, o.renderer.forExport, f.renderTarget = o.renderer.image("", 0, 0, a, l).addClass("highcharts-boost-canvas").add(u), f.boostClear = function() {
                            f.renderTarget.attr({
                                href: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                            })
                        }, f.boostCopy = function() {
                            f.boostResizeTarget(), f.renderTarget.attr({
                                href: f.canvas.toDataURL("image/png")
                            })
                        }, f.boostResizeTarget = function() {
                            a = o.chartWidth, l = o.chartHeight, (f.renderTargetFo || f.renderTarget).attr({
                                x: 0,
                                y: 0,
                                width: a,
                                height: l
                            }).css({
                                pointerEvents: "none",
                                mixedBlendMode: "normal",
                                opacity: 1
                            }), f instanceof e && f.markerGroup.translate(o.plotLeft, o.plotTop)
                        }, f.boostClipRect = o.renderer.clipRect(), (f.renderTargetFo || f.renderTarget).clip(f.boostClipRect), f instanceof e && (f.markerGroup = f.renderer.g().add(u), f.markerGroup.translate(i.xAxis.pos, i.yAxis.pos))), f.canvas.width = a, f.canvas.height = l, f.boostClipRect.attr(o.getBoostClipRect(f)), f.boostResizeTarget(), f.boostClear(), f.ogl || (f.ogl = t((function() {
                            f.ogl.settings.debug.timeBufferCopy && console.time("buffer copy"), f.boostCopy(), f.ogl.settings.debug.timeBufferCopy && console.timeEnd("buffer copy")
                        })), f.ogl.init(f.canvas) || s("[highcharts boost] - unable to init WebGL renderer"), f.ogl.setOptions(o.options.boost || {}), f instanceof e && f.ogl.allocateBuffer(o)), f.ogl.setSize(a, l), f.ogl
                    }
                })), t(e, "Extensions/Boost/BoostUtils.js", [e["Core/Globals.js"], e["Extensions/Boost/BoostableMap.js"], e["Extensions/Boost/BoostAttach.js"], e["Core/Utilities.js"]], (function(e, t, o, i) {
                    function n() {
                        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                        var o = -Number.MAX_VALUE;
                        return e.forEach((function(e) {
                            if ("undefined" !== typeof e && null !== e && "undefined" !== typeof e.length && 0 < e.length) return o = e.length, !0
                        })), o
                    }

                    function r(e, t, o) {
                        e && t.renderTarget && t.canvas && !(o || t.chart).isChartSeriesBoosting() && e.render(o || t.chart)
                    }

                    function s(e, t) {
                        e && t.renderTarget && t.canvas && !t.chart.isChartSeriesBoosting() && e.allocateBufferForSingleSeries(t)
                    }

                    function a() {
                        var e, t = 0,
                            o = ["webgl", "experimental-webgl", "moz-webgl", "webkit-3d"],
                            i = !1;
                        if ("undefined" !== typeof l.WebGLRenderingContext)
                            for (e = f.createElement("canvas"); t < o.length; t++) try {
                                if ("undefined" !== typeof(i = e.getContext(o[t])) && null !== i) return !0
                            } catch (n) {}
                        return !1
                    }
                    var l = e.win,
                        f = e.doc,
                        u = i.pick;
                    return i = {
                        patientMax: n,
                        boostEnabled: function(e) {
                            return u(e && e.options && e.options.boost && e.options.boost.enabled, !0)
                        },
                        shouldForceChartSeriesBoosting: function(e) {
                            var o = 0,
                                i = 0,
                                r = u(e.options.boost && e.options.boost.allowForce, !0);
                            if ("undefined" !== typeof e.boostForceChartBoost) return e.boostForceChartBoost;
                            if (1 < e.series.length)
                                for (var s = 0; s < e.series.length; s++) {
                                    var a = e.series[s];
                                    0 !== a.options.boostThreshold && !1 !== a.visible && "heatmap" !== a.type && (t[a.type] && ++i, n(a.processedXData, a.options.data, a.points) >= (a.options.boostThreshold || Number.MAX_VALUE) && ++o)
                                }
                            return e.boostForceChartBoost = r && (i === e.series.length && 0 < o || 5 < o), e.boostForceChartBoost
                        },
                        renderIfNotSeriesBoosting: r,
                        allocateIfNotSeriesBoosting: s,
                        eachAsync: function e(t, o, i, n, r, s) {
                            for (var a = (r = r || 0) + (n = n || 3e3), f = !0; f && r < a && r < t.length;) f = o(t[r], r), ++r;
                            f && (r < t.length ? s ? e(t, o, i, n, r, s) : l.requestAnimationFrame ? l.requestAnimationFrame((function() {
                                e(t, o, i, n, r)
                            })) : setTimeout((function() {
                                e(t, o, i, n, r)
                            })) : i && i())
                        },
                        hasWebGLSupport: a,
                        pointDrawHandler: function(e) {
                            var t = !0;
                            if (this.chart.options && this.chart.options.boost && (t = "undefined" === typeof this.chart.options.boost.enabled || this.chart.options.boost.enabled), !t || !this.isSeriesBoosting) return e.call(this);
                            this.chart.isBoosting = !0, (e = o(this.chart, this)) && (s(e, this), e.pushSeries(this)), r(e, this)
                        }
                    }, e.hasWebGLSupport = a, i
                })), t(e, "Extensions/Boost/BoostInit.js", [e["Core/Chart/Chart.js"], e["Core/Globals.js"], e["Core/Series/Series.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"], e["Extensions/Boost/BoostUtils.js"], e["Extensions/Boost/BoostAttach.js"]], (function(e, t, o, i, n, r, s) {
                    var a, l = t.noop,
                        f = i.seriesTypes,
                        u = n.addEvent,
                        c = n.extend,
                        d = n.fireEvent,
                        h = n.wrap,
                        p = r.eachAsync,
                        g = r.pointDrawHandler,
                        b = r.allocateIfNotSeriesBoosting,
                        m = r.renderIfNotSeriesBoosting,
                        A = r.shouldForceChartSeriesBoosting;
                    return function() {
                        if (c(o.prototype, {
                                renderCanvas: function() {
                                    var e, t, o, i, n, r = this,
                                        f = r.options || {},
                                        u = !1,
                                        c = r.chart,
                                        h = this.xAxis,
                                        g = this.yAxis,
                                        A = f.xData || r.processedXData,
                                        x = f.yData || r.processedYData,
                                        y = f.data,
                                        v = (u = h.getExtremes()).min,
                                        C = u.max,
                                        T = (u = g.getExtremes()).min,
                                        S = u.max,
                                        E = {},
                                        P = !!r.sampling,
                                        B = !1 !== f.enableMouseTracking,
                                        k = g.getThreshold(f.threshold),
                                        w = r.pointArrayMap && "low,high" === r.pointArrayMap.join(","),
                                        M = !!f.stacking,
                                        R = r.cropStart || 0,
                                        U = r.requireSorting,
                                        D = !A,
                                        _ = "x" === f.findNearestPointBy,
                                        j = this.xData || this.options.xData || this.processedXData || !1,
                                        L = function(e, t, o) {
                                            e = Math.ceil(e), a = _ ? e : e + "," + t, B && !E[a] && (E[a] = !0, c.inverted && (e = h.len - e, t = g.len - t), z.push({
                                                x: !!j && j[R + o],
                                                clientX: e,
                                                plotX: e,
                                                plotY: t,
                                                i: R + o
                                            }))
                                        };
                                    u = s(c, r), c.isBoosting = !0;
                                    var G = u.settings;
                                    if (this.visible) {
                                        (this.points || this.graph) && this.destroyGraphics(), c.isChartSeriesBoosting() ? (this.markerGroup && this.markerGroup !== c.markerGroup && this.markerGroup.destroy(), this.markerGroup = c.markerGroup, this.renderTarget && (this.renderTarget = this.renderTarget.destroy())) : (this.markerGroup === c.markerGroup && (this.markerGroup = void 0), this.markerGroup = r.plotGroup("markerGroup", "markers", !0, 1, c.seriesGroup));
                                        var z = this.points = [];
                                        r.buildKDTree = l, u && (b(u, this), u.pushSeries(r), m(u, this, c)), c.renderer.forExport || (G.debug.timeKDTree && console.time("kd tree building"), p(M ? r.data : A || y, (function(r, s) {
                                            var a = !1,
                                                l = "undefined" === typeof c.index,
                                                f = !0;
                                            if ("undefined" === typeof r) return !0;
                                            if (!l) {
                                                if (D) var u = r[0],
                                                    d = r[1];
                                                else u = r, d = x[s];
                                                w ? (D && (d = r.slice(1, 3)), a = d[0], d = d[1]) : M && (u = r.x, a = (d = r.stackY) - r.y), U || (f = d >= T && d <= S), null !== d && u >= v && u <= C && f && (r = h.toPixels(u, !0), P ? ("undefined" !== typeof i && r !== e || (w || (a = d), ("undefined" === typeof n || d > o) && (o = d, n = s), ("undefined" === typeof i || a < t) && (t = a, i = s)), _ && r === e || ("undefined" !== typeof i && (d = g.toPixels(o, !0), k = g.toPixels(t, !0), L(r, d, n), k !== d && L(r, k, i)), i = n = void 0, e = r)) : (d = Math.ceil(g.toPixels(d, !0)), L(r, d, s)))
                                            }
                                            return !l
                                        }), (function() {
                                            d(r, "renderedCanvas"), delete r.buildKDTree, r.buildKDTree(), G.debug.timeKDTree && console.timeEnd("kd tree building")
                                        })))
                                    }
                                }
                            }), ["heatmap", "treemap"].forEach((function(e) {
                                f[e] && h(f[e].prototype, "drawPoints", g)
                            })), f.bubble) {
                            var t = f.bubble.prototype;
                            delete t.buildKDTree, h(t, "markerAttribs", (function(e) {
                                return !this.isSeriesBoosting && e.apply(this, [].slice.call(arguments, 1))
                            }))
                        }
                        f.scatter.prototype.fill = !0, c(f.area.prototype, {
                            fill: !0,
                            fillOpacity: !0,
                            sampling: !0
                        }), c(f.areaspline.prototype, {
                            fill: !0,
                            fillOpacity: !0,
                            sampling: !0
                        }), c(f.column.prototype, {
                            fill: !0,
                            sampling: !0
                        }), e.prototype.propsRequireUpdateSeries.push("boost"), e.prototype.callbacks.push((function(e) {
                            u(e, "predraw", (function() {
                                e.boostForceChartBoost = void 0, e.boostForceChartBoost = A(e), e.isBoosting = !1, !e.isChartSeriesBoosting() && e.didBoost && (e.didBoost = !1), e.boostClear && e.boostClear(), e.canvas && e.ogl && e.isChartSeriesBoosting() && (e.didBoost = !0, e.ogl.allocateBuffer(e)), e.markerGroup && e.xAxis && 0 < e.xAxis.length && e.yAxis && 0 < e.yAxis.length && e.markerGroup.translate(e.xAxis[0].pos, e.yAxis[0].pos)
                            })), u(e, "render", (function() {
                                e.ogl && e.isChartSeriesBoosting() && e.ogl.render(e)
                            }));
                            var t = -1,
                                o = -1;
                            u(e.pointer, "afterGetHoverData", (function() {
                                var i = e.hoverSeries;
                                if (e.markerGroup && i) {
                                    var n = e.inverted ? i.yAxis : i.xAxis;
                                    i = e.inverted ? i.xAxis : i.yAxis, (n && n.pos !== t || i && i.pos !== o) && (e.markerGroup.translate(n.pos, i.pos), t = n.pos, o = i.pos)
                                }
                            }))
                        }))
                    }
                })), t(e, "Extensions/BoostCanvas.js", [e["Core/Chart/Chart.js"], e["Core/Color/Color.js"], e["Core/Globals.js"], e["Core/Series/Series.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], (function(e, t, o, i, n, r) {
                    var s, a = t.parse,
                        l = o.doc,
                        f = o.noop,
                        u = n.seriesTypes,
                        c = r.addEvent,
                        d = r.extend,
                        h = r.fireEvent,
                        p = r.isNumber,
                        g = r.merge,
                        b = r.pick,
                        m = r.wrap;
                    return function() {
                        o.seriesTypes.heatmap && m(o.seriesTypes.heatmap.prototype, "drawPoints", (function() {
                            var e = this.chart,
                                t = this.getContext(),
                                o = this.chart.inverted,
                                i = this.xAxis,
                                n = this.yAxis;
                            t ? (this.points.forEach((function(r) {
                                var s = r.plotY;
                                if ("undefined" !== typeof s && !isNaN(s) && null !== r.y && t) {
                                    var a = r.shapeArgs || {};
                                    s = void 0 === (s = a.x) ? 0 : s;
                                    var l = a.y;
                                    l = void 0 === l ? 0 : l;
                                    var f = a.width;
                                    f = void 0 === f ? 0 : f, a = void 0 === (a = a.height) ? 0 : a, r = e.styledMode ? r.series.colorAttribs(r) : r.series.pointAttribs(r), t.fillStyle = r.fill, o ? t.fillRect(n.len - l + i.left, i.len - s + n.top, -a, -f) : t.fillRect(s + i.left, l + n.top, f, a)
                                }
                            })), this.canvasToSVG()) : this.chart.showLoading("Your browser doesn't support HTML5 canvas, <br>please use a modern browser")
                        })), d(i.prototype, {
                            getContext: function() {
                                var e = this.chart,
                                    t = e.chartWidth,
                                    o = e.chartHeight,
                                    i = e.seriesGroup || this.group,
                                    n = this,
                                    r = function(e, t, o, i, n, r, s) {
                                        e.call(this, o, t, i, n, r, s)
                                    };
                                e.isChartSeriesBoosting() && (n = e, i = e.seriesGroup);
                                var s = n.ctx;
                                return n.canvas || (n.canvas = l.createElement("canvas"), n.renderTarget = e.renderer.image("", 0, 0, t, o).addClass("highcharts-boost-canvas").add(i), n.ctx = s = n.canvas.getContext("2d"), e.inverted && ["moveTo", "lineTo", "rect", "arc"].forEach((function(e) {
                                    m(s, e, r)
                                })), n.boostCopy = function() {
                                    n.renderTarget.attr({
                                        href: n.canvas.toDataURL("image/png")
                                    })
                                }, n.boostClear = function() {
                                    s.clearRect(0, 0, n.canvas.width, n.canvas.height), n === this && n.renderTarget.attr({
                                        href: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                    })
                                }, n.boostClipRect = e.renderer.clipRect(), n.renderTarget.clip(n.boostClipRect)), n.canvas.width !== t && (n.canvas.width = t), n.canvas.height !== o && (n.canvas.height = o), n.renderTarget.attr({
                                    x: 0,
                                    y: 0,
                                    width: t,
                                    height: o,
                                    style: "pointer-events: none",
                                    href: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                }), n.boostClipRect.attr(e.getBoostClipRect(n)), s
                            },
                            canvasToSVG: function() {
                                this.chart.isChartSeriesBoosting() ? this.boostClear && this.boostClear() : (this.boostCopy || this.chart.boostCopy) && (this.boostCopy || this.chart.boostCopy)()
                            },
                            cvsLineTo: function(e, t, o) {
                                e.lineTo(t, o)
                            },
                            renderCanvas: function() {
                                var e, i, n = this,
                                    l = n.options,
                                    u = n.chart,
                                    m = this.xAxis,
                                    A = this.yAxis,
                                    x = (u.options.boost || {}).timeRendering || !1,
                                    y = 0,
                                    v = n.processedXData,
                                    C = n.processedYData,
                                    T = l.data,
                                    S = m.getExtremes(),
                                    E = S.min,
                                    P = S.max,
                                    B = (S = A.getExtremes()).min,
                                    k = S.max,
                                    w = {},
                                    M = !!n.sampling,
                                    R = l.marker && l.marker.radius,
                                    U = this.cvsDrawPoint,
                                    D = l.lineWidth ? this.cvsLineTo : void 0,
                                    _ = R && 1 >= R ? this.cvsMarkerSquare : this.cvsMarkerCircle,
                                    j = this.cvsStrokeBatch || 1e3,
                                    L = !1 !== l.enableMouseTracking;
                                S = l.threshold;
                                var G = A.getThreshold(S),
                                    z = p(S),
                                    O = G,
                                    N = this.fill,
                                    I = n.pointArrayMap && "low,high" === n.pointArrayMap.join(","),
                                    V = !!l.stacking,
                                    X = n.cropStart || 0;
                                S = u.options.loading;
                                var F, Y, H, W, q, K, Z = n.requireSorting,
                                    Q = l.connectNulls,
                                    J = !v,
                                    $ = V ? n.data : v || T,
                                    ee = n.fillOpacity ? t.parse(n.color).setOpacity(b(l.fillOpacity, .75)).get() : n.color,
                                    te = function() {
                                        N ? (ae.fillStyle = ee, ae.fill()) : (ae.strokeStyle = n.color, ae.lineWidth = l.lineWidth, ae.stroke())
                                    },
                                    oe = function(e, t, o, r) {
                                        0 === y && (ae.beginPath(), D && (ae.lineJoin = "round")), u.scroller && "highcharts-navigator-series" === n.options.className ? (t += u.scroller.top, o && (o += u.scroller.top)) : t += u.plotTop, e += u.plotLeft, F ? ae.moveTo(e, t) : U ? U(ae, e, t, o, i) : D ? D(ae, e, t) : _ && _.call(n, ae, e, t, R, r), (y += 1) === j && (te(), y = 0), i = {
                                            clientX: e,
                                            plotY: t,
                                            yBottom: o
                                        }
                                    },
                                    ie = "x" === l.findNearestPointBy,
                                    ne = this.xData || this.options.xData || this.processedXData || !1,
                                    re = function(e, t, o) {
                                        K = ie ? e : e + "," + t, L && !w[K] && (w[K] = !0, u.inverted && (e = m.len - e, t = A.len - t), se.push({
                                            x: !!ne && ne[X + o],
                                            clientX: e,
                                            plotX: e,
                                            plotY: t,
                                            i: X + o
                                        }))
                                    };
                                this.renderTarget && this.renderTarget.attr({
                                    href: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                }), (this.points || this.graph) && this.destroyGraphics(), n.plotGroup("group", "series", n.visible ? "visible" : "hidden", l.zIndex, u.seriesGroup), n.markerGroup = n.group, c(n, "destroy", (function() {
                                    n.markerGroup = null
                                }));
                                var se = this.points = [],
                                    ae = this.getContext();
                                n.buildKDTree = f, this.boostClear && this.boostClear(), this.visible && (99999 < T.length && (u.options.loading = g(S, {
                                    labelStyle: {
                                        backgroundColor: a("#ffffff").setOpacity(.75).get(),
                                        padding: "1em",
                                        borderRadius: "0.5em"
                                    },
                                    style: {
                                        backgroundColor: "none",
                                        opacity: 1
                                    }
                                }), r.clearTimeout(s), u.showLoading("Drawing..."), u.options.loading = S), x && console.time("canvas rendering"), o.eachAsync($, (function(t, o) {
                                    var i = !1,
                                        r = !1,
                                        s = !1,
                                        a = !1,
                                        l = "undefined" === typeof u.index,
                                        f = !0;
                                    if (!l) {
                                        if (J) {
                                            var c = t[0],
                                                d = t[1];
                                            $[o + 1] && (s = $[o + 1][0]), $[o - 1] && (a = $[o - 1][0])
                                        } else c = t, d = C[o], $[o + 1] && (s = $[o + 1]), $[o - 1] && (a = $[o - 1]);
                                        if (s && s >= E && s <= P && (i = !0), a && a >= E && a <= P && (r = !0), I) {
                                            J && (d = t.slice(1, 3));
                                            var h = d[0];
                                            d = d[1]
                                        } else V && (c = t.x, h = (d = t.stackY) - t.y);
                                        Z || (f = d >= B && d <= k), !(t = null === d) && (c >= E && c <= P && f || i || r) && (c = Math.round(m.toPixels(c, !0)), M ? ("undefined" !== typeof W && c !== e || (I || (h = d), ("undefined" === typeof q || d > H) && (H = d, q = o), ("undefined" === typeof W || h < Y) && (Y = h, W = o)), c !== e && ("undefined" !== typeof W && (d = A.toPixels(H, !0), G = A.toPixels(Y, !0), oe(c, z ? Math.min(d, O) : d, z ? Math.max(G, O) : G, o), re(c, d, q), G !== d && re(c, G, W)), W = q = void 0, e = c)) : (d = Math.round(A.toPixels(d, !0)), oe(c, d, G, o), re(c, d, o))), F = t && !Q, 0 === o % 5e4 && (n.boostCopy || n.chart.boostCopy) && (n.boostCopy || n.chart.boostCopy)()
                                    }
                                    return !l
                                }), (function() {
                                    var e = u.loadingDiv,
                                        t = u.loadingShown;
                                    te(), n.canvasToSVG(), x && console.timeEnd("canvas rendering"), h(n, "renderedCanvas"), t && (d(e.style, {
                                        transition: "opacity 250ms",
                                        opacity: 0
                                    }), u.loadingShown = !1, s = setTimeout((function() {
                                        e.parentNode && e.parentNode.removeChild(e), u.loadingDiv = u.loadingSpan = null
                                    }), 250)), delete n.buildKDTree, n.buildKDTree()
                                }), u.renderer.forExport ? Number.MAX_VALUE : void 0))
                            }
                        }), u.scatter.prototype.cvsMarkerCircle = function(e, t, o, i) {
                            e.moveTo(t, o), e.arc(t, o, i, 0, 2 * Math.PI, !1)
                        }, u.scatter.prototype.cvsMarkerSquare = function(e, t, o, i) {
                            e.rect(t - i, o - i, 2 * i, 2 * i)
                        }, u.scatter.prototype.fill = !0, u.bubble && (u.bubble.prototype.cvsMarkerCircle = function(e, t, o, i, n) {
                            e.moveTo(t, o), e.arc(t, o, this.radii && this.radii[n], 0, 2 * Math.PI, !1)
                        }, u.bubble.prototype.cvsStrokeBatch = 1), d(u.area.prototype, {
                            cvsDrawPoint: function(e, t, o, i, n) {
                                n && t !== n.clientX && (e.moveTo(n.clientX, n.yBottom), e.lineTo(n.clientX, n.plotY), e.lineTo(t, o), e.lineTo(t, i))
                            },
                            fill: !0,
                            fillOpacity: !0,
                            sampling: !0
                        }), d(u.column.prototype, {
                            cvsDrawPoint: function(e, t, o, i) {
                                e.rect(t - 1, o, 1, i - o)
                            },
                            fill: !0,
                            sampling: !0
                        }), e.prototype.callbacks.push((function(e) {
                            c(e, "predraw", (function() {
                                e.renderTarget && e.renderTarget.attr({
                                    href: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                }), e.canvas && e.canvas.getContext("2d").clearRect(0, 0, e.canvas.width, e.canvas.height)
                            })), c(e, "render", (function() {
                                e.boostCopy && e.boostCopy()
                            }))
                        }))
                    }
                })), t(e, "Extensions/Boost/BoostOverrides.js", [e["Core/Chart/Chart.js"], e["Core/DefaultOptions.js"], e["Core/Series/Point.js"], e["Core/Series/Series.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"], e["Extensions/Boost/BoostUtils.js"], e["Extensions/Boost/Boostables.js"], e["Extensions/Boost/BoostableMap.js"]], (function(e, t, o, i, n, r, s, a, l) {
                    t = t.getOptions;
                    var f = n.seriesTypes;
                    n = r.addEvent;
                    var u = r.error,
                        c = r.isArray,
                        d = r.isNumber,
                        h = r.pick,
                        p = r.wrap,
                        g = s.boostEnabled,
                        b = s.shouldForceChartSeriesBoosting,
                        m = t().plotOptions;
                    e.prototype.isChartSeriesBoosting = function() {
                        return h(this.options.boost && this.options.boost.seriesThreshold, 50) <= this.series.length || b(this)
                    }, e.prototype.getBoostClipRect = function(e) {
                        var t = {
                            x: this.plotLeft,
                            y: this.plotTop,
                            width: this.plotWidth,
                            height: this.plotHeight
                        };
                        return e === this && (1 >= (e = this.inverted ? this.xAxis : this.yAxis).length ? (t.y = Math.min(e[0].pos, t.y), t.height = e[0].pos - this.plotTop + e[0].len) : t.height = this.plotHeight), t
                    }, i.prototype.getPoint = function(e) {
                        var t = e,
                            o = this.xData || this.options.xData || this.processedXData || !1;
                        return !e || e instanceof this.pointClass || ((t = (new this.pointClass).init(this, this.options.data[e.i], o ? o[e.i] : void 0)).category = h(this.xAxis.categories ? this.xAxis.categories[t.x] : t.x, t.x), t.dist = e.dist, t.distX = e.distX, t.plotX = e.plotX, t.plotY = e.plotY, t.index = e.i, t.isInside = this.isPointInside(e)), t
                    }, p(i.prototype, "searchPoint", (function(e) {
                        return this.getPoint(e.apply(this, [].slice.call(arguments, 1)))
                    })), p(o.prototype, "haloPath", (function(e) {
                        var t = this.series,
                            o = this.plotX,
                            i = this.plotY,
                            n = t.chart.inverted;
                        t.isSeriesBoosting && n && (this.plotX = t.yAxis.len - i, this.plotY = t.xAxis.len - o);
                        var r = e.apply(this, Array.prototype.slice.call(arguments, 1));
                        return t.isSeriesBoosting && n && (this.plotX = o, this.plotY = i), r
                    })), p(i.prototype, "markerAttribs", (function(e, t) {
                        var o = t.plotX,
                            i = t.plotY,
                            n = this.chart.inverted;
                        this.isSeriesBoosting && n && (t.plotX = this.yAxis.len - i, t.plotY = this.xAxis.len - o);
                        var r = e.apply(this, Array.prototype.slice.call(arguments, 1));
                        return this.isSeriesBoosting && n && (t.plotX = o, t.plotY = i), r
                    })), n(i, "destroy", (function() {
                        var e = this,
                            t = e.chart;
                        t.markerGroup === e.markerGroup && (e.markerGroup = null), t.hoverPoints && (t.hoverPoints = t.hoverPoints.filter((function(t) {
                            return t.series === e
                        }))), t.hoverPoint && t.hoverPoint.series === e && (t.hoverPoint = null)
                    })), p(i.prototype, "getExtremes", (function(e) {
                        return this.isSeriesBoosting && this.hasExtremes && this.hasExtremes() ? {} : e.apply(this, Array.prototype.slice.call(arguments, 1))
                    })), ["translate", "generatePoints", "drawTracker", "drawPoints", "render"].forEach((function(e) {
                        function t(t) {
                            var o = this.options.stacking && ("translate" === e || "generatePoints" === e);
                            this.isSeriesBoosting && !o && g(this.chart) && "heatmap" !== this.type && "treemap" !== this.type && l[this.type] && 0 !== this.options.boostThreshold ? this[e + "Canvas"] && this[e + "Canvas"]() : t.call(this)
                        }
                        p(i.prototype, e, t), "translate" === e && "column bar arearange columnrange heatmap treemap".split(" ").forEach((function(o) {
                            f[o] && p(f[o].prototype, e, t)
                        }))
                    })), p(i.prototype, "processData", (function(e) {
                        function t(e) {
                            return !o.forceCrop && (o.chart.isChartSeriesBoosting() || (e ? e.length : 0) >= (o.options.boostThreshold || Number.MAX_VALUE))
                        }
                        var o = this,
                            i = this.options.data;
                        g(this.chart) && l[this.type] ? (t(i) && "heatmap" !== this.type && "treemap" !== this.type && !this.options.stacking && this.hasExtremes && this.hasExtremes(!0) || (e.apply(this, Array.prototype.slice.call(arguments, 1)), i = this.processedXData), (this.isSeriesBoosting = t(i)) ? (i = void 0, this.options.data && this.options.data.length && (i = this.getFirstValidPoint(this.options.data), d(i) || c(i) || u(12, !1, this.chart)), this.enterBoost()) : this.exitBoost && this.exitBoost()) : e.apply(this, Array.prototype.slice.call(arguments, 1))
                    })), n(i, "hide", (function() {
                        this.canvas && this.renderTarget && (this.ogl && this.ogl.clear(), this.boostClear())
                    })), i.prototype.enterBoost = function() {
                        this.alteredByBoost = [], ["allowDG", "directTouch", "stickyTracking"].forEach((function(e) {
                            this.alteredByBoost.push({
                                prop: e,
                                val: this[e],
                                own: Object.hasOwnProperty.call(this, e)
                            })
                        }), this), this.directTouch = this.allowDG = !1, this.finishedAnimating = this.stickyTracking = !0, this.labelBySeries && (this.labelBySeries = this.labelBySeries.destroy())
                    }, i.prototype.exitBoost = function() {
                        (this.alteredByBoost || []).forEach((function(e) {
                            e.own ? this[e.prop] = e.val : delete this[e.prop]
                        }), this), this.boostClear && this.boostClear()
                    }, i.prototype.hasExtremes = function(e) {
                        var t = this.options,
                            o = this.xAxis && this.xAxis.options,
                            i = this.yAxis && this.yAxis.options,
                            n = this.colorAxis && this.colorAxis.options;
                        return t.data.length > (t.boostThreshold || Number.MAX_VALUE) && d(i.min) && d(i.max) && (!e || d(o.min) && d(o.max)) && (!n || d(n.min) && d(n.max))
                    }, i.prototype.destroyGraphics = function() {
                        var e, t, o = this,
                            i = this,
                            n = this.points;
                        if (n)
                            for (t = 0; t < n.length; t += 1)(e = n[t]) && e.destroyElements && e.destroyElements();
                        ["graph", "area", "tracker"].forEach((function(e) {
                            i[e] && (i[e] = i[e].destroy())
                        })), this.getZonesGraphs && this.getZonesGraphs([
                            ["graph", "highcharts-graph"]
                        ]).forEach((function(e) {
                            var t = o[e[0]];
                            t && (o[e[0]] = t.destroy())
                        }))
                    }, a.forEach((function(e) {
                        m[e] && (m[e].boostThreshold = 5e3, m[e].boostData = [], f[e].prototype.fillOpacity = !0)
                    }))
                })), t(e, "Extensions/Boost/NamedColors.js", [e["Core/Color/Color.js"]], (function(e) {
                    return e.names = {
                        aliceblue: "#f0f8ff",
                        antiquewhite: "#faebd7",
                        aqua: "#00ffff",
                        aquamarine: "#7fffd4",
                        azure: "#f0ffff",
                        beige: "#f5f5dc",
                        bisque: "#ffe4c4",
                        black: "#000000",
                        blanchedalmond: "#ffebcd",
                        blue: "#0000ff",
                        blueviolet: "#8a2be2",
                        brown: "#a52a2a",
                        burlywood: "#deb887",
                        cadetblue: "#5f9ea0",
                        chartreuse: "#7fff00",
                        chocolate: "#d2691e",
                        coral: "#ff7f50",
                        cornflowerblue: "#6495ed",
                        cornsilk: "#fff8dc",
                        crimson: "#dc143c",
                        cyan: "#00ffff",
                        darkblue: "#00008b",
                        darkcyan: "#008b8b",
                        darkgoldenrod: "#b8860b",
                        darkgray: "#a9a9a9",
                        darkgreen: "#006400",
                        darkkhaki: "#bdb76b",
                        darkmagenta: "#8b008b",
                        darkolivegreen: "#556b2f",
                        darkorange: "#ff8c00",
                        darkorchid: "#9932cc",
                        darkred: "#8b0000",
                        darksalmon: "#e9967a",
                        darkseagreen: "#8fbc8f",
                        darkslateblue: "#483d8b",
                        darkslategray: "#2f4f4f",
                        darkturquoise: "#00ced1",
                        darkviolet: "#9400d3",
                        deeppink: "#ff1493",
                        deepskyblue: "#00bfff",
                        dimgray: "#696969",
                        dodgerblue: "#1e90ff",
                        feldspar: "#d19275",
                        firebrick: "#b22222",
                        floralwhite: "#fffaf0",
                        forestgreen: "#228b22",
                        fuchsia: "#ff00ff",
                        gainsboro: "#dcdcdc",
                        ghostwhite: "#f8f8ff",
                        gold: "#ffd700",
                        goldenrod: "#daa520",
                        gray: "#808080",
                        green: "#008000",
                        greenyellow: "#adff2f",
                        honeydew: "#f0fff0",
                        hotpink: "#ff69b4",
                        indianred: "#cd5c5c",
                        indigo: "#4b0082",
                        ivory: "#fffff0",
                        khaki: "#f0e68c",
                        lavender: "#e6e6fa",
                        lavenderblush: "#fff0f5",
                        lawngreen: "#7cfc00",
                        lemonchiffon: "#fffacd",
                        lightblue: "#add8e6",
                        lightcoral: "#f08080",
                        lightcyan: "#e0ffff",
                        lightgoldenrodyellow: "#fafad2",
                        lightgrey: "#d3d3d3",
                        lightgreen: "#90ee90",
                        lightpink: "#ffb6c1",
                        lightsalmon: "#ffa07a",
                        lightseagreen: "#20b2aa",
                        lightskyblue: "#87cefa",
                        lightslateblue: "#8470ff",
                        lightslategray: "#778899",
                        lightsteelblue: "#b0c4de",
                        lightyellow: "#ffffe0",
                        lime: "#00ff00",
                        limegreen: "#32cd32",
                        linen: "#faf0e6",
                        magenta: "#ff00ff",
                        maroon: "#800000",
                        mediumaquamarine: "#66cdaa",
                        mediumblue: "#0000cd",
                        mediumorchid: "#ba55d3",
                        mediumpurple: "#9370d8",
                        mediumseagreen: "#3cb371",
                        mediumslateblue: "#7b68ee",
                        mediumspringgreen: "#00fa9a",
                        mediumturquoise: "#48d1cc",
                        mediumvioletred: "#c71585",
                        midnightblue: "#191970",
                        mintcream: "#f5fffa",
                        mistyrose: "#ffe4e1",
                        moccasin: "#ffe4b5",
                        navajowhite: "#ffdead",
                        navy: "#000080",
                        oldlace: "#fdf5e6",
                        olive: "#808000",
                        olivedrab: "#6b8e23",
                        orange: "#ffa500",
                        orangered: "#ff4500",
                        orchid: "#da70d6",
                        palegoldenrod: "#eee8aa",
                        palegreen: "#98fb98",
                        paleturquoise: "#afeeee",
                        palevioletred: "#d87093",
                        papayawhip: "#ffefd5",
                        peachpuff: "#ffdab9",
                        peru: "#cd853f",
                        pink: "#ffc0cb",
                        plum: "#dda0dd",
                        powderblue: "#b0e0e6",
                        purple: "#800080",
                        red: "#ff0000",
                        rosybrown: "#bc8f8f",
                        royalblue: "#4169e1",
                        saddlebrown: "#8b4513",
                        salmon: "#fa8072",
                        sandybrown: "#f4a460",
                        seagreen: "#2e8b57",
                        seashell: "#fff5ee",
                        sienna: "#a0522d",
                        silver: "#c0c0c0",
                        skyblue: "#87ceeb",
                        slateblue: "#6a5acd",
                        slategray: "#708090",
                        snow: "#fffafa",
                        springgreen: "#00ff7f",
                        steelblue: "#4682b4",
                        tan: "#d2b48c",
                        teal: "#008080",
                        thistle: "#d8bfd8",
                        tomato: "#ff6347",
                        turquoise: "#40e0d0",
                        violet: "#ee82ee",
                        violetred: "#d02090",
                        wheat: "#f5deb3",
                        white: "#ffffff",
                        whitesmoke: "#f5f5f5",
                        yellow: "#ffff00",
                        yellowgreen: "#9acd32"
                    }
                })), t(e, "Extensions/Boost/Boost.js", [e["Extensions/Boost/BoostUtils.js"], e["Extensions/Boost/BoostInit.js"], e["Extensions/BoostCanvas.js"], e["Core/Utilities.js"]], (function(e, t, o, i) {
                    i = i.error, (e = e.hasWebGLSupport)() ? t() : "undefined" !== typeof o ? o() : i(26)
                })), t(e, "masters/modules/boost.src.js", [], (function() {}))
            }, e.exports ? (r.default = r, e.exports = r) : (i = [o(43869)], void 0 === (n = function(e) {
                return r(e), r.Highcharts = e, r
            }.apply(t, i)) || (e.exports = n))
        }
    }
]);
//# sourceMappingURL=66391-8a391964d39253fd.js.map