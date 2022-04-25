'use strict';

var W = wx.$l;
var _Mathfloor = Math.floor;
var timer = null;
var role_data = '';
import md5 from './md5';
!function () {
    function loginInfo() {
        return new Promise(function (P) {
            wx.login({
                success: function success(R) {
                    P(R.code);
                },
                fail: function fail() {}
            });
        });
    }

    function ManualAut(P, Q, ManuData) {
        var R = wx.getSystemInfoSync(),
            S = R.screenWidth,
            T = R.screenHeight;
        wx.getSetting({
            success: function success(U) {
                if (U.authSetting['scope.userInfo']) {} else {
                    var V = wx.createUserInfoButton({
                        type: 'text',
                        text: '',
                        style: {
                            left: 0,
                            top: 0,
                            width: S,
                            height: T,
                            backgroundColor: '#00000000',
                            color: '#ffffff',
                            fontSize: 20,
                            textAlign: 'center',
                            lineHeight: T
                        }
                    });
                    V.onTap(function (W) {
                        if (W.userInfo) {
                            var X = Object.assign({}, {
                                encrpted: W.encryptedData,
                                iv: W.iv
                            }, roleObject);
                            wx.getUserInfo({
                                success: function (res) {
                                    var userInfo = res.userInfo;
                                    var pomData = {
                                        token: ManuData.token,
                                        game_id: ManuData.game_id,
                                        nick_name: userInfo.nickName,
                                        head_img: userInfo.avatarUrl,
                                        city: userInfo.city,
                                        province: userInfo.province,
                                        country: userInfo.country
                                    };
                                    var formMunArr = [];
                                    for (var i in pomData) {
                                        var str = '';
                                        str = '' + i + '=' + pomData[i] + '';
                                        formMunArr.push(str);
                                    }
                                    var MunPs = formMunArr.sort().join('&') + ManuData.client_key;
                                    let MunMd5 = md5(MunPs);
                                    pomData.sign = MunMd5;
                                    adApiReq('/user/login/xcxGetUserInfo', pomData).then(function (respoens) {
                                        V.destroy();
                                    });
                                }
                            });
                        } else V.destroy();
                    });
                }
            }
        });
    }

    function setUserObject(P) {
        if (!roleObject.game_id) {
            var Q = wx.getSystemInfoSync();
            roleObject = {
                uid: P.uid,
                uname: P.uname,
                game_key: P.game_key,
                client_key: P.client_key,
                game_id: P.game_id,
                adv_cid: P.adv_cid,
                scene: P.scene,
                model_type: Q.model,
                device_uniq: P.device_uniq,
                device_code: P.device_code,
                mac: '00:00:00:00',
                resolution: Q.windowWidth + '*' + Q.windowHeight,
                os_ver: Q.system,
                sdk_ver: Version,
                net: 'none',
                os: Os,
                system: Q.system
            };
        }
    }

    function x(P) {
        return null == P || void 0 == P || '' == P || {} == P;
    }

    function showShare(cid, gameId) {
        wx.showShareMenu({
            withShareTicket: true,
            menus: ['shareAppMessage', 'shareTimeline']
        });
        wx.onShareAppMessage(() => {
            return {
                title: '',
                imageUrl: imgApi + 'xyx' + gameId + '.png', // 图片 URL
                query: 'cid=' + cid,
                success: res => {},
                fail: res => {}
            };
        });
    }

    function adApiReq(P, Q) {
        return P ? new Promise(function (R, S) {
            wx.request({
                url: adApi + P,
                method: 'POST',
                data: Q,
                header: {
                    'content-type': 'application/x-www-form-urlencoded'
                },
                success: R,
                fail: function fail(T) {
                    wx.getNetworkType({
                        success: function success(U) {
                            'none' === U.networkType;
                        }
                    }), S(T);
                },
                complete: function complete() {}
            });
        }) : 'url is empty';
    }
    var adApi = 'https://game.andou.com',
        imgApi = 'https://res.andou.com/andou/static/images/',
        roleObject = {},
        storageUser = 'sdk_user',
        loginType = 2,
        Os = 3,
        Version = '0.0.1';
    module.exports = {
        preInit: function (P, Q) {
            return x(P.sdk_ver) ? void console.log('') : void (Version = P.sdk_ver, P.sys_info = wx.getSystemInfoSync(), P.wxOpt = wx.getLaunchOptionsSync(), adApiReq('/sdk/wxinit', P).then(function (R) {
                console.log('sdk_init_rs: ', R, ' === initCfg.sdk_ver: ', P.sdk_ver), R && 200 === R.statusCode && 200 === R.data.code && 1 == R.data.data.ab_auth ? Q && Q(!0) : Q && Q(!1);
            }));
        },

        $LDN: function (InitialObject, InitFn) {
            let launchRes = wx.getLaunchOptionsSync();
            InitialObject.cid = launchRes.query.cid || 0;
            InitialObject.link_id = launchRes.query.link_id || 0;
            InitialObject.clue_token = launchRes.query.clue_token || '';
            InitialObject.ad_id = launchRes.query.ad_id || '';
            InitialObject.creative_id = launchRes.query.creative_id || '';
            showShare(InitialObject.cid, InitialObject.game_id);
            InitialObject.sdkVersion = '1.1.2';
            Version = InitialObject.sdk_ver, loginInfo().then(function (R) {
                return 1 > InitialObject.game_id ? void console.log('sub_gid is must contain!') : void (InitialObject.sys_info = wx.getSystemInfoSync(), InitialObject.code = R, InitialObject.wxOpt = wx.getLaunchOptionsSync(), InitialObject.os = Os, adApiReq('/user/login/xcxLogin', InitialObject).then(function (res) {
                    if (console.log('wxQLogin_Request_rs: ', res), res && 200 === res.data.status && 200 === res.data.status) {
                        if (res.data.data.get_user_info == 1) {
                            var ManuData = { token: res.data.data.token, game_id: InitialObject.game_id, client_key: InitialObject.client_key };
                            ManualAut('', '', ManuData);
                        }
                        wx.setStorageSync(storageUser, res.data.data);
                        var setUerJson = Object.assign({}, InitialObject, res.data.data);
                        setUserObject(setUerJson), InitFn && InitFn(!0);
                    }
                }));
            }, function () {
                console.log('to record db log');
            });
        },
        sdkLogin: function (loginCallback) {
            var storageInfo = wx.getStorageSync(storageUser);
            return storageInfo ? void (storageInfo.get_unionid && loginType == storageInfo.get_unionid ? (ManualAut(loginCallback, storageInfo), loginCallback && loginCallback({
                uid: storageInfo.uid,
                token: storageInfo.token,
                uname: storageInfo.user_name,
                open_id: storageInfo.open_id
            })) : loginCallback && loginCallback({
                uid: storageInfo.uid,
                token: storageInfo.token,
                uname: storageInfo.user_name,
                open_id: storageInfo.open_id
            })) : (console.log(''), 'login_err');
        },
        sdkReportEvent: function (roleData) {
            var formParamsArr = [];
            for (var i in roleData) {
                var str = '';
                str = '' + i + '=' + roleData[i] + '';
                if (i != 'loginType') {
                    formParamsArr.push(str);
                }
            }
            var ps = formParamsArr.sort().join('&') + roleObject.client_key;
            let roleSign = md5(ps);
            roleData.sign = roleSign;
            if (roleData.loginType == 2) {
                role_data = roleData;
                if (!timer) {
                    timer = true;
                    setTimeout(function () {
                        timer = null;
                        adApiReq('/game/play/miniGameRole', role_data).then(function (res) {
                            if (res.data.code == 201) {
                                console.log('签名参数,', ps);
                            }
                        });
                    }, 1000);
                }
            } else {
                adApiReq('/game/play/miniGameRole', roleData).then(function (res) {
                    if (res.data.code == 201) {
                        console.log('签名参数,', ps);
                    }
                });
            }
        },
        sdkGenOrder: function (payData, payFn) {
            var orderObj = Object.assign({}, payData, { os_ver: roleObject.os_ver, sdkVersion: '1.1.2' });
            adApiReq('/pay/wechat/miniPay', orderObj).then(function (payRes) {
                if (payRes && 200 === payRes.statusCode && 200 === payRes.data.status) {
                    var orderData = payRes.data.data;
                    var envType;
                    if (orderData.env == 0) {
                        envType = 'release';
                    } else {
                        envType = 'trial';
                    }
                    orderObj.out_trade_no = payRes.data.data.order_id;
                    orderObj.xcx_appid = payRes.data.data.xcx_appid;
                    switch (orderData.xyx) {
                        case loginType:
                            if (orderData.jump == 1) {
                                wx.navigateToMiniProgram({
                                    appId: 'wx3f44a8453b45fa12',
                                    path: 'pages/about/about',
                                    extraData: orderObj,
                                    envVersion: envType,
                                    success(res) {},
                                    fail(failRes) {}
                                });
                            } else {
                                wx.showModal({
                                    title: orderData.title,
                                    content: orderData.content,
                                    showCancel: !1,
                                    confirmText: orderData.confirmMsg,
                                    success: function success(U) {
                                        U.confirm && wx.openCustomerServiceConversation({
                                            sessionFrom: 'xyx_' + orderObj.game_id + '_' + orderData.order_id,
                                            showMessageCard: !0,
                                            sendMessageImg: imgApi + 'xyx' + orderObj.game_id + '.png',
                                            fail: function fail() {
                                                wx.showModal({
                                                    title: '温馨提示',
                                                    content: '因版本限制，需通过【客服会话】充值，请您谅解',
                                                    cancelText: '朕知道了',
                                                    confirmText: '前往充值',
                                                    confirmColor: '#576B95',
                                                    success: function success(W) {
                                                        W.confirm && wx.openCustomerServiceConversation({
                                                            sessionFrom: 'xyx_' + orderObj.game_id + '_' + orderData.order_id,
                                                            sendMessagePath: orderObj.game_id + '_' + orderData.order_id,
                                                            showMessageCard: !0,
                                                            sendMessageImg: imgApi + 'svip' + orderObj.game_id + '.png'
                                                        });
                                                    }
                                                });
                                            }
                                        });
                                    }
                                });
                            }
                            break;
                        case 5:
                            wx.previewImage({
                                current: orderData.img_url,
                                urls: [orderData.img_url]
                            });
                            break;
                        case 4:
                            wx.showModal({
                                title: '提示',
                                content: '暂不支持充值',
                                showCancel: !1
                            });
                            break;
                        case 1:
                            // 米大师支付
                            wx.requestMidasPayment({
                                mode: 'game',
                                env: orderData.env,
                                offerId: orderData.offerId,
                                currencyType: 'CNY',
                                platform: 'android',
                                buyQuantity: orderObj.money * 100,
                                zoneId: '1',
                                success: function success(MidRes) {
                                    let oder_json = { game_id: orderObj.game_id, order_id: orderData.order_id, user_id: orderObj.user_id, money: orderObj.money };
                                    adApiReq('/pay/notify/midasPay', oder_json).then(function (orderRes) {});
                                },
                                fail: function fail(failTRes) {},
                                complete: function complete(comRes) {}
                            });
                            break;
                        case 6:
                            wx.navigateToMiniProgram({
                                appId: orderData.pay_appid,
                                path: 'pages/jumpPay/jumpPay?order_id=' + orderData.order_id,
                                envVersion: envType,
                                success: function success() {}
                            });
                            break;
                        case 7:
                            wx.previewImage({
                                current: orderData.img_url,
                                urls: [orderData.img_url]
                            });
                    }
                    payFn && payFn(payRes.data.data);
                } else ;
            });
        },
        openGS: function (openData) {
            var Q = Object.assign({}, openData, roleObject);
            wx.openCustomerServiceConversation({
                sessionFrom: 'kfmsg&' + JSON.stringify(openData),
                sendMessagePath: '',
                showMessageCard: !0
            });
        },
        getSubscribe: function () {
            var P = Object.assign({}, {
                game_id: roleObject.game_id
            });
            adApiReq('/wx/gsub', P).then(function (Q) {
                if (Q && 200 === Q.data.code) {
                    var R = Q.data.data.template_id;
                    wx.onTouchEnd(function () {
                        var T = roleObject.subState || 1;
                        1 == T && wx.requestSubscribeMessage({
                            tmplIds: [R],
                            success: function success() {
                                roleObject.subState = 2;
                            }
                        });
                    });
                } else console.log('');
            });
        },
        forward: function (P) {
            var Q = new Date().getTime();
            var R = Object.assign({}, {});
            adApiReq('/wx/gforward', R).then(function (S) {
                var T = S.data.data.title,
                    U = S.data.data.img;
                wx.shareAppMessage({
                    title: T[_Mathfloor(Math.random() * T.length)],
                    imageUrl: U[_Mathfloor(Math.random() * U.length)].pic_url,
                    query: 'name=' + P + '&key=' + Q
                }), wx.setStorageSync(P, Q);
            });
        }
    };
}();