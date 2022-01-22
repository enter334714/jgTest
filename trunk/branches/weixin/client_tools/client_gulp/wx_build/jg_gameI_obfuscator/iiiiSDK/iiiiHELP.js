var Q = wx.$I;
module.exports = function (e) {
    var t = {};
    function n(r) {
        if (t[r]) return t[r].exports;
        var a = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(a.exports, a, a.exports, n), a.l = !0, a.exports;
    }
    return n.m = e, n.c = t, n.d = function (e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        });
    }, n.r = function (e) {
        Q[148614] != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: Q[148615]
        }), Object.defineProperty(e, Q[148616], {
            value: !0
        });
    }, n.t = function (e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && Q[120282] == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, Q[120331], {
            enumerable: !0,
            value: e
        }), 2 & t && Q[120300] != typeof e) for (var a in e) n.d(r, a, function (t) {
            return e[t];
        }.bind(null, a));
        return r;
    }, n.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default;
        } : function () {
            return e;
        };
        return n.d(t, "a", t), t;
    }, n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
    }, n.p = "", n(n.s = 2);
}([function (e, t, n) {
    "use strict";

    var r = {
        debug: !1,
        baseParams: {
            app_id: "",
            client_id: "",
            format: Q[125873]
        },
        gameParams: {
            "game-pkg_name": "",
            "game-app_ver": "",
            "game-h_ver": "",
            "game-sdk_ver": "",
            "game-mp_id": ""
        },
        agentParams: {
            "agent-ch": "",
            "agent-sub_ch": ""
        },
        deviceParams: {
            "device-device_id": "",
            "device-mac": "",
            "device-ip": "",
            "device-brand": "",
            "device-model": "",
            "device-os": "",
            "device-os_version": "",
            "device-screen": "",
            "device-net": "",
            "device-imsi": "",
            "device-longitude": "",
            "device-latitude": "",
            "device-userua": "",
            "device-disk_space": "",
            "device-open_time": "",
            "device-is_charge": "",
            "device-screen_luminance": "",
            "device-has_sim": "",
            "device-is_break": ""
        },
        extParams: {
            brand: "",
            model: "",
            pixelRatio: "",
            screenWidth: "",
            screenHeight: "",
            windowWidth: "",
            windowHeight: "",
            statusBarHeight: "",
            language: "",
            version: "",
            system: "",
            platform: "",
            fontSizeSetting: "",
            SDKVersion: "",
            benchmarkLevel: "",
            albumAuthorized: "",
            cameraAuthorized: "",
            locationAuthorized: "",
            microphoneAuthorized: "",
            notificationAuthorized: "",
            notificationAlertAuthorized: "",
            notificationBadgeAuthorized: "",
            notificationSoundAuthorized: "",
            bluetoothEnabled: "",
            locationEnabled: "",
            wifiEnabled: "",
            safeArea: ""
        },
        setting: {
            showLoading: !0,
            loadingParams: {
                title: Q[149009],
                mask: !0
            },
            showToast: !1,
            toastParams: {
                icon: Q[132056]
            }
        },
        launchOptions: {},
        baseUrl: Q[149010],
        channelId: 536
    };
    try {
        r.gameParams[Q[149011]] = wx.canIUse ? "" : Q[149012], wx.getSystemInfo({
            success: function (e) {
                r.deviceParams[Q[149013]] = encodeURIComponent(e.brand), r.deviceParams[Q[149014]] = encodeURIComponent(e.model), r.deviceParams[Q[149015]] = encodeURIComponent(e.screenWidth + "x" + e.screenHeight), r.deviceParams[Q[149016]] = Q[149017] === e.platform ? Q[149018] : encodeURIComponent(e.platform), r.deviceParams[Q[149019]] = encodeURIComponent(e.system), r.extParams.brand = e.brand, r.extParams.model = e.model, r.extParams.pixelRatio = e.pixelRatio, r.extParams.windowWidth = e.windowWidth, r.extParams.windowHeight = e.windowHeight, r.extParams.statusBarHeight = e.statusBarHeight, r.extParams.language = e.language, r.extParams.version = e.version, r.extParams.system = e.system, r.extParams.platform = e.platform, r.extParams.fontSizeSetting = e.fontSizeSetting, r.extParams.SDKVersion = e.SDKVersion, r.extParams.benchmarkLevel = e.benchmarkLevel, r.extParams[Q[149020]] = e.albumAuthorized, r.extParams.cameraAuthorized = e.cameraAuthorized, r.extParams.locationAuthorized = e.locationAuthorized, r.extParams.microphoneAuthorized = e.microphoneAuthorized, r.extParams.notificationAuthorized = e.notificationAuthorized, r.extParams.notificationAlertAuthorized = e.notificationAlertAuthorized, r.extParams.notificationBadgeAuthorized = e.notificationBadgeAuthorized, r.extParams.notificationSoundAuthorized = e.notificationSoundAuthorized, r.extParams.bluetoothEnabled = e.bluetoothEnabled, r.extParams.locationEnabled = e.locationEnabled, r.extParams.wifiEnabled = e.wifiEnabled, r.extParams.safeArea = e.safeArea;
            }
        }), r.extParams.userua = window.navigator.userAgent, wx.getNetworkType({
            success: function (e) {
                r.deviceParams[Q[149021]] = encodeURIComponent(e.networkType), r.extParams.net = e.networkType;
            }
        }), wx.getScreenBrightness({
            success: function (e) {
                r.deviceParams[Q[149022]] = encodeURIComponent(parseInt(100 * e.value)), r.extParams.screen_luminance = parseInt(100 * e.value);
            }
        });
    } catch (e) {}
    e.exports = r;
}, function (e, t, n) {
    "use strict";

    var r = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
    },
        a = i(n(0)),
        o = i(n(4));
    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    var u = void 0,
        d = {
        ajax: function (e) {
            var t = this.setting(e.conf);
            return e.conf && delete e.conf,
            // t.showLoading && wx.showLoading(t.loadingParams),
            e = this.params(e), a.default.debug && console.log(new Date().getTime(), e.url, e.data), new Promise(function (n, o) {
                wx.request(r({}, e, {
                    success: function (r) {
                        a.default.debug && console.log(new Date().getTime(), e.url, r), t.showLoading && wx.hideLoading(), 200 !== r.statusCode || !r.data || void 0 !== r.data.code && 200 !== r.data.code ? (t.showToast && (r.data && r.data.msg && (t.toastParams.title = r.data.msg), wx.showToast(t.toastParams)), o(r)) : n(r);
                    },
                    fail: function (n) {
                        a.default.debug && console.log(new Date().getTime(), e.url, n), t.showLoading && wx.hideLoading(), t.showToast && (n.errMsg && (t.toastParams.title = n.errMsg), wx.showToast(t.toastParams)), o(n);
                    }
                }));
            });
        },
        params: function (e) {
            if (e.method = (e.method || Q[120461]).toUpperCase(), Q[149023] !== e.method || e.header || (e.header = {
                "Content-Type": Q[149024]
            }), !e.private) {
                var t = wx.getStorageSync(Q[149025]);
                e.data = r({}, a.default.baseParams, a.default.gameParams, a.default.agentParams, a.default.deviceParams, e.data, {
                    "device-ext": encodeURIComponent(JSON.stringify(a.default.extParams)),
                    token: t ? t.user_token : "",
                    ts: new Date().getTime()
                });
            }
            return e.data.sign = this.sign(e), /^http/.test(e.url) || (e.url = a.default.baseUrl + e.url), delete e.private, delete e.signUrl, e;
        },
        setting: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return r({}, a.default.setting, e);
        },
        sign: function (e) {
            var t = "";
            t = e.data.channel_id ? Q[149026] : Q[149027], e.app_key && (t = Q[149028] + e.app_key);
            var n = (e.signUrl || e.url).substr(1),
                r = Object.keys(e.data).sort(),
                a = "";
            r.forEach(function (t) {
                a += "&" + t + "=" + e.data[t];
            });
            var i = "";
            return i = e.app_key ? (0, o.default)(a.substr(1) + "&" + t) : (0, o.default)((e.method + "&" + encodeURIComponent(n) + "&" + encodeURIComponent(a.substr(1)) + "&" + t).replace(/\(/g, Q[149029]).replace(/\)/g, Q[149030])), i;
        },
        renderQRCode: function (e, t, n) {
            var r = t.getContext("2d"),
                a = wx.createImage();
            a.src = n.image, a.onload = function () {
                r.lineJoin = Q[123924], r.lineWidth = 30, r.strokeStyle = Q[124478], r.strokeRect((window.innerWidth - 240) / 2, (window.innerHeight - 264) / 2, 240, 264), r.fillStyle = Q[124478], r.fillRect((window.innerWidth - 220) / 2, (window.innerHeight - 244) / 2, 220, 244), r.fillStyle = Q[149031], r.font = Q[149032], r.textAlign = Q[121572], r.fillText(n.intro, window.innerWidth / 2, (window.innerHeight - 258) / 2 + 218 + 30, 250), r.drawImage(a, (window.innerWidth - 218) / 2, (window.innerHeight - 258) / 2, 218, 218);
            }, u = {
                canvas: e,
                qrcvs: t,
                qrctx: r,
                data: n
            }, e.addEventListener(Q[145185], c);
        },
        removeOffScreen: function () {
            u && (u.qrctx.clearRect(0, 0, u.qrcvs.width, u.qrcvs.height), u.canvas.removeEventListener(Q[145185], c));
        }
    };
    function c(e) {
        e.preventDefault();
        var t = e.touches[0],
            n = t.clientX,
            r = t.clientY;
        n >= (window.innerWidth - 218) / 2 && n <= (window.innerWidth - 218) / 2 + 218 && r >= (window.innerHeight - 258) / 2 && r <= (window.innerHeight - 258) / 2 + 218 ? wx.previewImage({
            urls: [u.data.image]
        }) : (u.qrctx.clearRect(0, 0, u.qrcvs.width, u.qrcvs.height), u.canvas.removeEventListener(Q[145185], c));
    }
    e.exports = d;
}, function (e, t, n) {
    "use strict";

    var r = function (e, t) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e)) return function (e, t) {
            var n = [],
                r = !0,
                a = !1,
                o = void 0;
            try {
                for (var i, u = e[Symbol.iterator](); !(r = (i = u.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
            } catch (e) {
                a = !0, o = e;
            } finally {
                try {
                    !r && u.return && u.return();
                } finally {
                    if (a) throw o;
                }
            }
            return n;
        }(e, t);
        throw new TypeError(Q[149033]);
    },
        a = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
    },
        o = d(n(3)),
        i = d(n(0)),
        u = d(n(1));
    function d(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function c(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e;
    }
    var s = {
        init: function () {
            var e = this,
                t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                n = [Q[149034], Q[149035], Q[125020], Q[149036], Q[149037], Q[149038], Q[149039]];
            return n.map(function (e) {
                void 0 !== t[e] && (Q[149034] === e ? i.default.baseParams[e] = t.app_id : Q[149035] === e ? i.default.gameParams[Q[149040]] = t.mp_id : Q[149039] === e ? i.default.debug = t.debug : i.default.setting[e] = t[e]);
            }), new Promise(function (n, u) {
                t.app_id ? o.default.getDNSInfo({
                    data: a({
                        ts: parseInt(new Date().getTime() / 1e3),
                        channel_id: i.default.channelId,
                        url: i.default.baseUrl,
                        un_url: "",
                        app_id: i.default.baseParams.app_id
                    }, i.default.deviceParams)
                }).then(function (a) {
                    t.private || (i.default.baseUrl = a.data.url);
                    var o = wx.getLaunchOptionsSync().query,
                        u = o.q,
                        d = void 0 === u ? "" : u,
                        c = o.state,
                        s = void 0 === c ? "" : c,
                        f = o.scene,
                        l = void 0 === f ? "" : f;
                    if (d) {
                        var m = decodeURIComponent(d).split("?")[1];
                        try {
                            m = m && m.split("&");
                            var g = !0,
                                h = !1,
                                p = void 0;
                            try {
                                for (var v, w = m[Symbol.iterator](); !(g = (v = w.next()).done); g = !0) {
                                    var y = v.value.split("="),
                                        P = r(y, 2),
                                        x = P[0],
                                        b = P[1];
                                    Q[149041] === x && (s = b);
                                }
                            } catch (e) {
                                h = !0, p = e;
                            } finally {
                                try {
                                    !g && w.return && w.return();
                                } finally {
                                    if (h) throw p;
                                }
                            }
                        } catch (e) {
                            console.error(e);
                        }
                        i.default.launchOptions = {
                            ext: d,
                            state: s
                        }, n(e.reversal());
                    } else i.default.launchOptions = {
                        state: l || s || ""
                    }, n({
                        msg: Q[129961]
                    });
                }, function (e) {
                    n({
                        msg: Q[129961]
                    });
                }) : u({
                    msg: Q[145629]
                });
            });
        },
        reversal: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return new Promise(function (t, n) {
                wx.login({
                    success: function (r) {
                        var a;
                        r.code ? (e.data = Object.assign({}, e.data, (c(a = {}, Q[149042], i.default.extParams), c(a, Q[129335], i.default.launchOptions.ext), c(a, Q[124142], i.default.launchOptions.state), c(a, Q[143752], r.code), a)), t(o.default.reversal(e))) : n(r);
                    },
                    fail: function (e) {
                        n(e);
                    }
                });
            });
        },
        cpUserCheck: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return o.default.cpUserCheck(e);
        },
        login: function () {
            var e = this,
                t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return new Promise(function (n, r) {
                wx.checkSession({
                    success: function (i) {
                        o.default.wxLogin(a({}, t)).then(function (r) {
                            var i = wx.getLaunchOptionsSync();
                            o.default.reportAdClick({
                                data: {
                                    click_id: i.query && i.query.gdt_vid || "",
                                    url: ""
                                }
                            }).then(function (e) {
                                console.log(Q[149043], e);
                            }), n(e.getUserInfo(a({}, t)));
                        }, function (e) {
                            r({
                                msg: e.msg || Q[145629]
                            });
                        });
                    },
                    fail: function (a) {
                        console.log(Q[149044], t), o.default.wxLogin(t).then(function (r) {
                            var a = wx.getLaunchOptionsSync();
                            o.default.reportAdClick({
                                data: {
                                    click_id: a.query && a.query.gdt_vid || "",
                                    url: ""
                                }
                            }).then(function (e) {
                                console.log(Q[149043], e);
                            }), n(e.getUserInfo(t));
                        }, function (e) {
                            r({
                                msg: e.msg || Q[145629]
                            });
                        });
                    }
                });
            });
        },
        updateUserInfo: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return new Promise(function (t, n) {
                o.default.setUserInfo(e).then(function (e) {
                    t(a({}, e, {
                        msg: Q[129961]
                    }));
                }, function (e) {
                    n({
                        msg: e.msg || Q[145629]
                    });
                });
            });
        },
        updateRole: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return o.default.upRoleInfo(e);
        },
        getUserInfo: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return o.default.getUserInfo(e);
        },
        getShareInfo: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return o.default.getShareInfo(e);
        },
        addShareInfo: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return o.default.addShareInfo(e);
        },
        getShareQrcode: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return o.default.getShareQrcode(e);
        },
        preOrder: function (e) {
            return o.default.preOrder(e);
        },
        mpPay: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return new Promise(function (t, n) {
                o.default.mpPay(e).then(function (e) {
                    t({
                        msg: Q[129961]
                    });
                }, function (e) {
                    n({
                        msg: e.errMsg || Q[145629]
                    });
                });
            });
        },
        mpPayQuery: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            if (!e.data || void 0 === e.data[Q[149045]]) {
                var t = wx.getStorageSync(Q[149046]);
                e.data = a({}, e.data, {
                    "order-order_id": t ? t.order_id : ""
                });
            }
            return o.default.mpPayQuery(e);
        },
        midasPay: function () {
            var e = this,
                t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return new Promise(function (n, r) {
                o.default.midasPay(t).then(function (r) {
                    t.conf = {
                        showLoading: !1,
                        showToast: !1
                    };
                    var a = 0,
                        o = setInterval(function () {
                        a++, e.midasPayQuery(t).then(function (e) {
                            2 !== e.data.status && 12 !== a || clearInterval(o);
                        }, function (e) {});
                    }, 15e3);
                    n({
                        msg: Q[129961]
                    });
                }, function (e) {
                    r({
                        msg: e.errMsg || Q[145629]
                    });
                });
            });
        },
        midasPayQuery: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            if (!e.data || void 0 === e.data[Q[149045]]) {
                var t = wx.getStorageSync(Q[149046]);
                e.data = a({}, e.data, {
                    "order-order_id": t ? t.order_id : ""
                });
            }
            return o.default.midasPayQuery(e);
        },
        checkPay: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return o.default.checkPay(e);
        },
        checkOrderInfo: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return o.default.checkOrderInfo(e);
        },
        checkOrder: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return o.default.checkOrder(e);
        },
        checkQrcode: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return o.default.checkQrcode(e);
        },
        reportAdClick: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return o.default.reportAdClick(e);
        },
        removeOffScreen: function () {
            o.default.removeOffScreen();
        },
        checkMsg: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return o.default.checkMsg(e);
        },
        gameMinicard: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return o.default.gameMinicard(e);
        },
        userCheckpay: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return o.default.userCheckpay(e);
        },
        checkImg: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = a({}, i.default.baseParams, i.default.gameParams, i.default.agentParams, i.default.deviceParams, {
                token: wx.getStorageSync(Q[149025]).user_token,
                ts: new Date().getTime()
            });
            return t.sign = u.default.sign({
                url: Q[149047],
                data: t
            }), new Promise(function (n, r) {
                wx.uploadFile({
                    url: i.default.baseUrl + Q[149047],
                    filePath: e.data.filePath,
                    name: Q[124727],
                    formData: t,
                    success: function (e) {
                        var t = e.data;
                        200 === (t = JSON.parse(t)).code ? n({
                            msg: Q[129961]
                        }) : r({
                            msg: t.msg || Q[145629]
                        });
                    }
                });
            });
        }
    };
    e.exports = s;
}, function (e, t, n) {
    "use strict";

    var r = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
    },
        a = i(n(1)),
        o = i(n(0));
    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    var u = !1,
        d = function (e) {
        var t = e.data,
            n = e.conf;
        return new Promise(function (r, o) {
            a.default.ajax(e).then(function (e) {
                e.data && e.data.data ? r({
                    data: e.data.data,
                    msg: Q[129961]
                }) : r({
                    msg: Q[129961]
                });
            }, function (e) {
                if (e.data && 1002 === e.data.code) {
                    if (u) return !1;
                    u = !0, r(c.wxLogin({
                        data: t,
                        conf: n
                    }).then(function (e) {
                        return u = !1, c.getUserInfo({
                            data: t,
                            conf: n
                        });
                    }));
                } else o({
                    msg: e.data ? e.data.msg || Q[149048] : e.errMsg
                });
            });
        });
    },
        c = {
        getDNSInfo: function (e) {
            return d(r({
                method: Q[124587],
                url: Q[149049],
                signUrl: Q[149050],
                private: !0
            }, e));
        },
        cpUserCheck: function (e) {
            return d(r({
                method: Q[124587],
                url: Q[149051],
                private: !0
            }, e));
        },
        login: function (e) {
            return o.default.launchOptions.ext ? e.data = Object.assign({}, e.data, r({
                state: o.default.launchOptions.state
            }, e)) : e.data = Object.assign({}, e.data, r({}, e)), o.default.launchOptions && o.default.launchOptions.state && (e.data.state = o.default.launchOptions.state), d(r({
                method: Q[124587],
                url: Q[149052]
            }, e)).then(function (e) {
                return e && wx.setStorageSync(Q[149025], e.data), e;
            });
        },
        wxLogin: function (e) {
            var t = this;
            return new Promise(function (n, a) {
                wx.login({
                    success: function (o) {
                        o.code ? (e = r({}, e.data, {
                            code: o.code,
                            state: e.data && e.data.state || ""
                        }), n(t.login(e))) : a(o);
                    },
                    fail: function (e) {
                        a(e);
                    }
                });
            });
        },
        reversal: function (e) {
            return d(r({
                method: Q[124587],
                url: Q[149053]
            }, e));
        },
        setUserInfo: function (e) {
            return d(r({
                method: Q[124587],
                url: Q[149054]
            }, e)).then(function (e) {
                return wx.setStorageSync(Q[149025], e.data), e;
            });
        },
        upRoleInfo: function (e) {
            return e.conf = {
                showLoading: !1,
                showToast: !1
            }, d(r({
                method: Q[124587],
                url: Q[149055]
            }, e)).then(function (e) {
                return e;
            });
        },
        getUserInfo: function (e) {
            return d(r({
                method: Q[124587],
                url: Q[149056]
            }, e)).then(function (e) {
                if (e.data.report_status && 2 == e.data.report_status) try {
                    require(Q[149057]);
                } catch (e) {}
                return wx.setStorageSync(Q[149025], e.data), e;
            });
        },
        getShareInfo: function (e) {
            return d(r({
                url: Q[149058]
            }, e));
        },
        addShareInfo: function (e) {
            return d(r({
                url: Q[149059]
            }, e));
        },
        getShareQrcode: function (e) {
            return d(r({
                url: Q[149060]
            }, e));
        },
        mpPay: function (e) {
            var t = this;
            return this.preOrder(e).then(function (n) {
                return e.data = r({}, e.data, {
                    payway: Q[149061],
                    "order-order_id": n.data.order_id
                }), t.mpOrder(e);
            });
        },
        midasPay: function (e) {
            var t = this;
            return this.preOrder(e).then(function (n) {
                return t.wxMidasPay(n.data, e);
            });
        },
        wxMidasPay: function (e, t) {
            var n = this;
            return new Promise(function (r, o) {
                var i = e.mode,
                    u = e.env,
                    d = e.offer_id,
                    c = e.currency,
                    s = e.buy_quantity,
                    f = e.platform,
                    l = e.zone_id;
                wx.requestMidasPayment({
                    mode: i,
                    env: u,
                    offerId: d,
                    currencyType: c,
                    buyQuantity: s,
                    platform: f,
                    zoneId: l,
                    success: function (a) {
                        t.data[Q[149045]] = e.order_id, t.conf = {
                            showLoading: !1,
                            showToast: !1
                        }, n.midasPayQuery(t).then(function (e) {
                            if (e.data && 2 !== e.data.status) var r = 0,
                                a = setInterval(function () {
                                r++, n.midasPayQuery(t).then(function (e) {
                                    2 !== e.data.status && 8 !== r || clearInterval(a);
                                }, function (e) {});
                            }, 15e3);
                        }, function (e) {}), a.errMsg && (a.msg = a.errMsg), r(a);
                    },
                    fail: function (e) {
                        if (e.errMsg) if (Q[149062] === e.errMsg) {
                            var n = wx.getStorageSync(Q[149025]);
                            e.msg = n && n.ios_text || Q[149063], e.duration = 3e3;
                        } else e.msg = e.errMsg;
                        var r = a.default.setting(t.conf);
                        r.showToast && (e.msg && (r.toastParams.title = e.msg), e.duration && (r.toastParams.duration = e.duration), wx.showToast(r.toastParams)), o(e);
                    }
                });
            });
        },
        checkPay: function (e) {
            var t = this;
            return this.preOrder(e).then(function (n) {
                return 2 === n.data.check ? t.wxMidasPay(n.data, e) : (e.data[Q[149045]] = n.data.order_id, t.checkPayInfo(e));
            });
        },
        preOrder: function (e) {
            return d(r({
                method: Q[124587],
                url: Q[149064]
            }, e)).then(function (e) {
                return wx.setStorageSync(Q[149046], e.data), e;
            }, function (e) {
                return e;
            });
        },
        mpOrder: function (e) {
            var t = this;
            return d(r({
                method: Q[124587],
                url: Q[149065]
            }, e)).then(function (n) {
                return t.wxMpPay(JSON.parse(n.data.token), e);
            });
        },
        wxMpPay: function (e, t) {
            return new Promise(function (n, o) {
                wx.requestPayment(r({}, e, {
                    success: function (e) {
                        e.errMsg && (e.msg = e.errMsg), n(e);
                    },
                    fail: function (e) {
                        e.errMsg && (e.msg = e.errMsg);
                        var n = a.default.setting(t.conf);
                        n.showToast && (e.msg && (n.toastParams.title = e.msg), wx.showToast(n.toastParams)), o(e);
                    },
                    complete: function (e) {
                        Q[149066] === e.errMsg && o({
                            msg: Q[149067]
                        });
                    }
                }));
            });
        },
        mpPayQuery: function (e) {
            return d(r({
                method: Q[124587],
                url: Q[149068]
            }, e));
        },
        midasPayQuery: function (e) {
            return d(r({
                url: Q[149069]
            }, e));
        },
        checkPayInfo: function (e) {
            var t = this;
            return d(r({
                url: Q[149070]
            }, e)).then(function (n) {
                return n.data.order_id = e.data[Q[149045]], new Promise(function (r, o) {
                    n.data.image && wx.setStorageSync(Q[149071], n.data.image);
                    var i = wx.getStorageSync(Q[149071]);
                    n.data && 4 == +n.data.pay_type ? (wx.showModal({
                        title: Q[149072],
                        content: Q[149073],
                        success: function (e) {
                            e.confirm && wx.openCustomerServiceConversation();
                        }
                    }), r(n)) : n.data && n.data.mp_id ? (wx.navigateToMiniProgram({
                        appId: n.data.mp_id,
                        path: n.data.path
                    }), r(n)) : i ? (e.canvas && e.offscreen && a.default.renderQRCode(e.canvas, e.offscreen, {
                        image: i,
                        intro: n.data.intro || Q[149074]
                    }), n.data.image = i, r(n)) : t.checkQrcode(e).then(function (t) {
                        var o = t.data.poster_img;
                        e.canvas && e.offscreen && a.default.renderQRCode(e.canvas, e.offscreen, {
                            image: o,
                            intro: n.data.intro || Q[149074]
                        }), wx.setStorageSync(Q[149071], o), n.data.image = o, r(n);
                    }, function (e) {
                        r(n);
                    });
                });
            });
        },
        checkOrderInfo: function (e) {
            return d(r({
                method: Q[124587],
                url: Q[149075]
            }, e));
        },
        checkOrder: function (e) {
            var t = this;
            return d(r({
                method: Q[124587],
                url: Q[149076]
            }, e)).then(function (n) {
                return t.wxMpPay(JSON.parse(n.data.token), e);
            });
        },
        checkQrcode: function (e) {
            return e.data && (e.data.is_last = 2), d(r({
                url: Q[149077]
            }, e));
        },
        reportAdClick: function (e) {
            return d(r({
                url: Q[149078]
            }, e));
        },
        removeOffScreen: function () {
            a.default.removeOffScreen();
        },
        checkMsg: function (e) {
            return d(r({
                method: Q[124587],
                url: Q[149079]
            }, e));
        },
        gameMinicard: function (e) {
            return d(r({
                method: Q[124587],
                url: Q[149080]
            }, e));
        },
        userCheckpay: function (e) {
            return d(r({
                method: Q[124587],
                url: Q[149081]
            }, e));
        }
    };
    e.exports = c;
}, function (e, t, n) {
    "use strict";

    var r;
    Q[148664] == typeof Symbol && Symbol.iterator;
    !function (a) {
        function o(e, t) {
            var n = (65535 & e) + (65535 & t);
            return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n;
        }
        function i(e, t, n, r, a, i) {
            return o(function (e, t) {
                return e << t | e >>> 32 - t;
            }(o(o(t, e), o(r, i)), a), n);
        }
        function u(e, t, n, r, a, o, u) {
            return i(t & n | ~t & r, e, t, a, o, u);
        }
        function d(e, t, n, r, a, o, u) {
            return i(t & r | n & ~r, e, t, a, o, u);
        }
        function c(e, t, n, r, a, o, u) {
            return i(t ^ n ^ r, e, t, a, o, u);
        }
        function s(e, t, n, r, a, o, u) {
            return i(n ^ (t | ~r), e, t, a, o, u);
        }
        function f(e, t) {
            e[t >> 5] |= 128 << t % 32, e[14 + (t + 64 >>> 9 << 4)] = t;
            var n,
                r,
                a,
                i,
                f,
                l = 1732584193,
                m = -271733879,
                g = -1732584194,
                h = 271733878;
            for (n = 0; n < e.length; n += 16) r = l, a = m, i = g, f = h, m = s(m = s(m = s(m = s(m = c(m = c(m = c(m = c(m = d(m = d(m = d(m = d(m = u(m = u(m = u(m = u(m, g = u(g, h = u(h, l = u(l, m, g, h, e[n], 7, -680876936), m, g, e[n + 1], 12, -389564586), l, m, e[n + 2], 17, 606105819), h, l, e[n + 3], 22, -1044525330), g = u(g, h = u(h, l = u(l, m, g, h, e[n + 4], 7, -176418897), m, g, e[n + 5], 12, 1200080426), l, m, e[n + 6], 17, -1473231341), h, l, e[n + 7], 22, -45705983), g = u(g, h = u(h, l = u(l, m, g, h, e[n + 8], 7, 1770035416), m, g, e[n + 9], 12, -1958414417), l, m, e[n + 10], 17, -42063), h, l, e[n + 11], 22, -1990404162), g = u(g, h = u(h, l = u(l, m, g, h, e[n + 12], 7, 1804603682), m, g, e[n + 13], 12, -40341101), l, m, e[n + 14], 17, -1502002290), h, l, e[n + 15], 22, 1236535329), g = d(g, h = d(h, l = d(l, m, g, h, e[n + 1], 5, -165796510), m, g, e[n + 6], 9, -1069501632), l, m, e[n + 11], 14, 643717713), h, l, e[n], 20, -373897302), g = d(g, h = d(h, l = d(l, m, g, h, e[n + 5], 5, -701558691), m, g, e[n + 10], 9, 38016083), l, m, e[n + 15], 14, -660478335), h, l, e[n + 4], 20, -405537848), g = d(g, h = d(h, l = d(l, m, g, h, e[n + 9], 5, 568446438), m, g, e[n + 14], 9, -1019803690), l, m, e[n + 3], 14, -187363961), h, l, e[n + 8], 20, 1163531501), g = d(g, h = d(h, l = d(l, m, g, h, e[n + 13], 5, -1444681467), m, g, e[n + 2], 9, -51403784), l, m, e[n + 7], 14, 1735328473), h, l, e[n + 12], 20, -1926607734), g = c(g, h = c(h, l = c(l, m, g, h, e[n + 5], 4, -378558), m, g, e[n + 8], 11, -2022574463), l, m, e[n + 11], 16, 1839030562), h, l, e[n + 14], 23, -35309556), g = c(g, h = c(h, l = c(l, m, g, h, e[n + 1], 4, -1530992060), m, g, e[n + 4], 11, 1272893353), l, m, e[n + 7], 16, -155497632), h, l, e[n + 10], 23, -1094730640), g = c(g, h = c(h, l = c(l, m, g, h, e[n + 13], 4, 681279174), m, g, e[n], 11, -358537222), l, m, e[n + 3], 16, -722521979), h, l, e[n + 6], 23, 76029189), g = c(g, h = c(h, l = c(l, m, g, h, e[n + 9], 4, -640364487), m, g, e[n + 12], 11, -421815835), l, m, e[n + 15], 16, 530742520), h, l, e[n + 2], 23, -995338651), g = s(g, h = s(h, l = s(l, m, g, h, e[n], 6, -198630844), m, g, e[n + 7], 10, 1126891415), l, m, e[n + 14], 15, -1416354905), h, l, e[n + 5], 21, -57434055), g = s(g, h = s(h, l = s(l, m, g, h, e[n + 12], 6, 1700485571), m, g, e[n + 3], 10, -1894986606), l, m, e[n + 10], 15, -1051523), h, l, e[n + 1], 21, -2054922799), g = s(g, h = s(h, l = s(l, m, g, h, e[n + 8], 6, 1873313359), m, g, e[n + 15], 10, -30611744), l, m, e[n + 6], 15, -1560198380), h, l, e[n + 13], 21, 1309151649), g = s(g, h = s(h, l = s(l, m, g, h, e[n + 4], 6, -145523070), m, g, e[n + 11], 10, -1120210379), l, m, e[n + 2], 15, 718787259), h, l, e[n + 9], 21, -343485551), l = o(l, r), m = o(m, a), g = o(g, i), h = o(h, f);
            return [l, m, g, h];
        }
        function l(e) {
            var t,
                n = "",
                r = 32 * e.length;
            for (t = 0; t < r; t += 8) n += String.fromCharCode(e[t >> 5] >>> t % 32 & 255);
            return n;
        }
        function m(e) {
            var t,
                n = [];
            for (n[(e.length >> 2) - 1] = void 0, t = 0; t < n.length; t += 1) n[t] = 0;
            var r = 8 * e.length;
            for (t = 0; t < r; t += 8) n[t >> 5] |= (255 & e.charCodeAt(t / 8)) << t % 32;
            return n;
        }
        function g(e) {
            var t,
                n,
                r = "";
            for (n = 0; n < e.length; n += 1) t = e.charCodeAt(n), r += Q[149082].charAt(t >>> 4 & 15) + Q[149082].charAt(15 & t);
            return r;
        }
        function h(e) {
            return unescape(encodeURIComponent(e));
        }
        function p(e) {
            return function (e) {
                return l(f(m(e), 8 * e.length));
            }(h(e));
        }
        function v(e, t) {
            return function (e, t) {
                var n,
                    r,
                    a = m(e),
                    o = [],
                    i = [];
                for (o[15] = i[15] = void 0, a.length > 16 && (a = f(a, 8 * e.length)), n = 0; n < 16; n += 1) o[n] = 909522486 ^ a[n], i[n] = 1549556828 ^ a[n];
                return r = f(o.concat(m(t)), 512 + 8 * t.length), l(f(i.concat(r), 640));
            }(h(e), h(t));
        }
        function w(e, t, n) {
            return t ? n ? v(t, e) : function (e, t) {
                return g(v(e, t));
            }(t, e) : n ? p(e) : function (e) {
                return g(p(e));
            }(e);
        }
        void 0 === (r = function () {
            return w;
        }.call(t, n, t, e)) || (e.exports = r);
    }();
}]);