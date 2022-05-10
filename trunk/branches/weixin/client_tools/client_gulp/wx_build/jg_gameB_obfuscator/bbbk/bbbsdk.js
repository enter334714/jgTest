var _ = wx.y$;
import Dall from './bbbhelp';
var config = {
    game_id: _[30320], //九歌行--天枢服--官方
    game_pkg: _[30321],
    partner_id: '19',
    game_ver: _[30322], //B包为2.x.x，每次上传版本修改，先设置，上传审核版本的时候保持一致
    is_auth: false, //授权登录
    from: null, //来源
    tmpId: { 1: _[30323], 2: _[30324], 3: _[30325], 4: _[30326] }, // 订阅的类型 和 模板id
    min_app_id: ''
};
window.config = config;

var p$ADEBC = p$AECBD();
var HOST = _[30306];
var t;
var t_second = 0;
var t_max = 300;
var p$ADECB = null;
var p$AEBCD = null;
var p$AEBDC = null;
var checkHandler = null;
var loginHandler = null;
var requestCallback = false;

var ad_info = null;

function p$AECBD() {
    var callbacks = {};
    var this_pay_order = 0;
    return {
        order_data: {},
        init: function (ops, callback) {
            var game_ver = ops && ops.game_ver ? ops.game_ver : 0;
            console.log(_[30327]);
            var self = this;

            var uuid = wx.getStorageSync(_[30328]);
            var is_new;
            if (!uuid) {
                uuid = self.uuid(16, 32);
                wx.setStorageSync(_[30328], uuid);
                is_new = 1;
            } else {
                is_new = 0;
            }
            var idfv = wx.getStorageSync(_[30329]);
            if (!idfv) {
                idfv = self.uuid(16, 32);
                wx.setStorageSync(_[30329], idfv);
            }

            var info = wx.getLaunchOptionsSync();
            var scene = info.scene ? info.scene : '';
            console.log(_[30330]);
            console.log(info);

            //判断今天是否已经上报过
            if (is_new && info.query && info.query.ad_code) {
                wx.setStorageSync(_[30331], info.query.ad_code);
            }

            //用户来源，如："txcps"
            if (info.query && info.query.from && info.query.from != "") {
                if (is_new) wx.setStorageSync(_[30332], info.query.from);
                config.from = info.query.from;
            } else {
                var from = wx.getStorageSync(_[30332]);
                if (!from && from != "") config.from = from;
            }
            // config.from = "txcps"
            console.log(_[30333] + config.from);

            var data = {
                install: is_new,
                scene: scene
            };
            self.log(_[772], data);

            //显示右上角分享按钮
            wx.showShareMenu();

            //玩家是分享过来的，单独上报给服务器
            var invite = info.query && info.query.invite ? info.query.invite : '';
            var invite_type = info.query && info.query.invite_type ? info.query.invite_type : '';

            if (invite) {
                p$AEBCD = {
                    invite: invite,
                    invite_type: invite_type,
                    is_new: is_new,
                    scene: scene
                };
            }

            //判断版本号
            if (game_ver) {
                this.checkGameVersion(game_ver, function (data) {
                    callback && callback(data);
                });
            }

            ad_info = {
                "temp_info": info,
                "temp_uuid": uuid,
                "temp_is_new": is_new
            };
        },

        adLog: function (openid) {
            //发送启动参数
            var info = ad_info.temp_info;
            var is_new = ad_info.temp_is_new;
            var uuid = ad_info.temp_uuid;
            if (info.query.hasOwnProperty(_[30334]) && info.query.hasOwnProperty(_[30335]) && is_new) {
                var temp_data = info.query;
                temp_data[_[30336]] = uuid;
                temp_data[_[30337]] = openid;
                var url = _[30338] + this.convertObj(temp_data);
                console.log(_[30339] + url);
                wx.request({
                    url: url
                });
            }
        },

        convertObj: function (data) {
            var _result = [];
            for (var key in data) {
                var value = data[key];
                if (value.constructor == Array) {
                    value.forEach(function (_value) {
                        _result.push(key + "=" + _value);
                    });
                } else {
                    _result.push(key + '=' + value);
                }
            }
            return _result.join('&');
        },

        //登录接口
        login: function (data, callback) {
            console.log(_[30340]);
            var self = this;
            callbacks[_[30341]] = typeof callback == _[90] ? callback : null;

            //授权登录
            if (config.is_auth) {
                wx.getSetting({
                    success: function (res) {
                        if (res.authSetting[_[30342]]) {
                            console.log(_[30343]);
                            self.do_login(); //已授权
                        } else {
                            console.log(_[30344]);
                            wx.hideLoading({});
                            var system_info = wx.getSystemInfoSync();
                            var screen_width = system_info.screenWidth;
                            var screen_height = system_info.screenHeight;
                            var btn_width = screen_width * 2 / 3;
                            var btn_height = btn_width / 3;
                            var btn_left = (screen_width - btn_width) / 2;
                            var btn_top = screen_height / 2;
                            var button = wx.createUserInfoButton({
                                type: _[5101],
                                text: _[30345],
                                withCredentials: false,
                                style: {
                                    top: system_info.windowHeight / 2 + system_info.windowHeight / 4,
                                    left: system_info.windowWidth / 2 - 100,
                                    width: 200,
                                    height: 40,
                                    lineHeight: 40,
                                    backgroundColor: _[30346],
                                    color: _[5125],
                                    textAlign: _[2093],
                                    fontSize: 16,
                                    borderRadius: 4
                                }
                            });
                            button.show();
                            button.onTap(res => {
                                console.log(res);
                                p$BDCE({ title: _[30347] });
                                if (res.errMsg == _[30348]) {
                                    self.do_login({
                                        head_img: res.userInfo.avatarUrl || '',
                                        nick_name: res.userInfo.nickName || ''
                                    });
                                } else {
                                    self.do_login();
                                }
                                button.destroy();
                            });
                        }
                    },
                    fail: function () {
                        console.log(_[30349]);
                        self.do_login();
                    }
                });
            } else {
                console.log(_[30350] + config.is_auth);
                self.do_login();
            }
        },

        do_login: function (info) {
            var self = this;
            wx.login({
                success: function (res) {
                    console.log(_[30351] + JSON.stringify(res));
                    if (res.code) {
                        //发起网络请求
                        var public_data = self.getPublicData();
                        public_data[_[30352]] = 1;
                        public_data[_[24781]] = res.code;
                        public_data[_[30353]] = info ? info.nick_name : '';
                        public_data[_[30354]] = info ? info.head_img : '';

                        if (p$AEBCD && typeof p$AEBCD == _[4]) {
                            for (var key in p$AEBCD) {
                                public_data[key] = p$AEBCD[key];
                            }
                        }
                        if (config.is_auth) {
                            wx.getUserInfo({
                                success: function (res6) {
                                    var encryptedData = res6.encryptedData;
                                    var iv = res6.iv;
                                    var signature = res6.signature;
                                    public_data[_[30355]] = encryptedData;
                                    public_data['iv'] = iv;
                                    public_data[_[30356]] = signature;
                                    wx.request({
                                        url: _[26698] + HOST + _[30357],
                                        method: _[30310],
                                        dataType: _[219],
                                        header: {
                                            'content-type': _[30311] // 默认值
                                        },
                                        data: public_data,
                                        success: function (res) {
                                            console.log(_[30358]);
                                            console.log(res);
                                            if (res.statusCode == 200) {
                                                var data = res.data;
                                                if (data.state) {
                                                    var userData = {
                                                        userid: data.data.user_id,
                                                        account: data.data.nick_name,
                                                        token: data.data.token,
                                                        invite_uid: data.data.invite_uid || '',
                                                        invite_nickname: data.data.invite_nickname || '',
                                                        invite_head_img: data.data.invite_head_img || '',
                                                        head_img: data.data.head_img || '',
                                                        is_client: data.data.is_client || '0',
                                                        ios_pay: data.data.ios_pay || '0'

                                                    };
                                                    try {
                                                        self.adLog(data.data.openid);
                                                    } catch (e) {
                                                        console.log(_[30359] + JSON.stringify(e));
                                                    }
                                                    try {
                                                        wx.setStorageSync(_[30360], data.data.sdk_token);
                                                        wx.setStorageSync(_[30361], data.data.user_id);
                                                        wx.setStorageSync(_[30307], data.data.username);
                                                        if (data.data.ext) {
                                                            wx.setStorageSync(_[30362], data.data.ext);
                                                        }
                                                        wx.setStorageSync(_[30312], data.data.navigate_app_id);
                                                    } catch (e) {}

                                                    callbacks[_[30341]] && callbacks[_[30341]](0, userData);
                                                } else {
                                                    callbacks[_[30341]] && callbacks[_[30341]](1, { errMsg: data.msg });
                                                }

                                                //登录成功，加载右上角分享数据
                                                self.getShareInfo(_[30363], function (data) {
                                                    console.log(_[30364]);
                                                    wx.onShareAppMessage(function () {
                                                        //记录开始分享
                                                        self.logStartShare(_[30363]);
                                                        return {
                                                            title: data.title,
                                                            imageUrl: data.img,
                                                            query: data.query
                                                        };
                                                    });
                                                });
                                            } else {
                                                callbacks[_[30341]] && callbacks[_[30341]](1, { errMsg: _[30365] });
                                            }
                                        },
                                        fail: function (res) {
                                            callbacks[_[30341]] && callbacks[_[30341]](1, { errMsg: res.errMsg });
                                        }
                                    });
                                },
                                fail: function (res6) {
                                    callbacks[_[30341]] && callbacks[_[30341]](1, { errMsg: res6.errMsg });
                                }
                            });
                        } else {
                            var lastTime = Date.now();
                            wx.request({
                                url: _[26698] + HOST + _[30357],
                                method: _[30310],
                                dataType: _[219],
                                header: {
                                    'content-type': _[30311] // 默认值
                                },
                                data: public_data,
                                success: function (res) {
                                    console.log(_[30358]);
                                    console.log(res);
                                    requestCallback = true;
                                    if (loginHandler) clearTimeout(loginHandler);
                                    loginHandler = null;
                                    if (res.statusCode == 200) {
                                        var data = res.data;
                                        if (data.state) {
                                            var userData = {
                                                userid: data.data.user_id,
                                                account: data.data.nick_name,
                                                token: data.data.token,
                                                invite_uid: data.data.invite_uid || '',
                                                invite_nickname: data.data.invite_nickname || '',
                                                invite_head_img: data.data.invite_head_img || '',
                                                head_img: data.data.head_img || '',
                                                is_client: data.data.is_client || '0',
                                                ios_pay: data.data.ios_pay || '0'

                                            };
                                            try {
                                                self.adLog(data.data.openid);
                                            } catch (e) {
                                                console.log(_[30359] + JSON.stringify(e));
                                            }
                                            try {
                                                wx.setStorageSync(_[30360], data.data.sdk_token);
                                                wx.setStorageSync(_[30361], data.data.user_id);
                                                wx.setStorageSync(_[30307], data.data.username);
                                                if (data.data.ext) {
                                                    wx.setStorageSync(_[30362], data.data.ext);
                                                }
                                                wx.setStorageSync(_[30312], data.data.navigate_app_id);
                                            } catch (e) {}

                                            callbacks[_[30341]] && callbacks[_[30341]](0, userData);
                                        } else {
                                            callbacks[_[30341]] && callbacks[_[30341]](1, { type: _[30366], errMsg: data.msg, time: Date.now() - lastTime, res: res });
                                        }

                                        //登录成功，加载右上角分享数据
                                        self.getShareInfo(_[30363], function (data) {
                                            console.log(_[30364]);
                                            wx.onShareAppMessage(function () {
                                                //记录开始分享
                                                self.logStartShare(_[30363]);
                                                return {
                                                    title: data.title,
                                                    imageUrl: data.img,
                                                    query: data.query
                                                };
                                            });
                                        });
                                    } else {
                                        callbacks[_[30341]] && callbacks[_[30341]](1, { type: _[30366], errMsg: _[30365], time: Date.now() - lastTime, res: res });
                                    }
                                },
                                fail: function (res) {
                                    console.log(_[30367]);
                                    console.log(res);
                                    self.log(_[982], { event: _[30368] });
                                    requestCallback = true;
                                    if (loginHandler) clearTimeout(loginHandler);
                                    loginHandler = null;
                                    callbacks[_[30341]] && callbacks[_[30341]](1, { type: _[30369], errMsg: res.errMsg, time: Date.now() - lastTime, res: res });
                                }
                            });
                            if (!requestCallback) {
                                var timeOutFunc = function () {
                                    console.log(_[30370]);
                                    self.log(_[982], { event: _[30371] });
                                    callbacks[_[30341]] && callbacks[_[30341]](1, { type: _[30372], errMsg: _[30373], time: Date.now() - lastTime });
                                    callbacks[_[30341]] = null; //回调后置空，以免success或fail里重复回调
                                };
                                loginHandler = setTimeout(timeOutFunc, 20000);
                            }
                        }
                    } else {
                        callbacks[_[30341]] && callbacks[_[30341]](1, { type: _[30374], errMsg: res.errMsg, res: res });
                    }
                },
                fail: function (res) {
                    console.log(_[30375] + JSON.stringify(res));
                    // iOS 和 Android 对于拒绝授权的回调 errMsg 没有统一，需要做一下兼容处理
                    if (res.errMsg.indexOf(_[30376]) > -1 || res.errMsg.indexOf(_[30377]) > -1) {
                        // 处理用户拒绝授权的情况
                        callbacks[_[30341]] && callbacks[_[30341]](1, { type: _[30378], errMsg: res.errMsg, res: res });
                    } else {
                        callbacks[_[30341]] && callbacks[_[30341]](1, { type: _[30378], errMsg: res.errMsg, res: res });
                    }
                }
            });
        },

        share: function (data) {
            callbacks[_[30379]] = typeof callback == _[90] ? callback : null;
            var type = data.type || _[30379];
            console.log(_[30380] + type);
            var self = this;
            this.getShareInfo(type, function (data) {

                //记录开始分享
                self.logStartShare(type);
                wx.shareAppMessage({
                    title: data.title,
                    imageUrl: data.img,
                    query: data.query
                });
            });
        },

        logStartShare: function (type) {
            var sdk_token = wx.getStorageSync(_[30360]);
            wx.request({
                url: _[26698] + HOST + _[30381],
                method: _[30310],
                dataType: _[219],
                header: {
                    'content-type': _[30311] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    server_id: p$ADECB ? p$ADECB.server_id : '',
                    role_id: p$ADECB ? p$ADECB.role_id : '',
                    type: type
                },
                success: function (res) {}
            });
        },

        openService: function () {
            wx.openCustomerServiceConversation();
        },

        checkGameVersion: function (game_ver, callback) {
            console.log(_[30382]);
            callbacks[_[7808]] = typeof callback == _[90] ? callback : null;
            var sdk_token = wx.getStorageSync(_[30360]);
            wx.request({
                url: _[26698] + HOST + _[30383],
                method: _[30310],
                dataType: _[219],
                header: {
                    'content-type': _[30311] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    game_ver: game_ver
                },
                success: function (res) {
                    console.log(_[30384]);
                    console.log(res);
                    requestCallback = true;
                    if (checkHandler) clearTimeout(checkHandler);
                    checkHandler = null;
                    if (res.statusCode == 200) {
                        var data = res.data;
                        config.min_app_id = data.data.min_app_id;
                        if (data.state) {
                            callbacks[_[7808]] && callbacks[_[7808]](data.data);
                        } else {
                            callbacks[_[7808]] && callbacks[_[7808]]({ develop: 0 });
                        }
                    } else {
                        callbacks[_[7808]] && callbacks[_[7808]]({ develop: 0 });
                    }
                },
                fail: function (res) {
                    console.log(_[30385]);
                    console.log(res);
                    requestCallback = true;
                    if (checkHandler) clearTimeout(checkHandler);
                    checkHandler = null;
                    callbacks[_[7808]] && callbacks[_[7808]]({ develop: 0 });
                }
            });
            if (!requestCallback) {
                var timeOutFunc = function () {
                    console.log(_[30386]);
                    callbacks[_[7808]] && callbacks[_[7808]]({ develop: 0 });
                    callbacks[_[7808]] = null; //回调后置空，以免success或fail里重复回调
                };
                checkHandler = setTimeout(timeOutFunc, 10000);
            }
        },

        getShareInfo: function (type, callback) {
            console.log(_[30387]);
            var sdk_token = wx.getStorageSync(_[30360]);
            wx.request({
                url: _[26698] + HOST + _[30388],
                method: _[30310],
                dataType: _[219],
                header: {
                    'content-type': _[30311] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    type: type,
                    server_id: p$ADECB ? p$ADECB.server_id : '',
                    role_id: p$ADECB ? p$ADECB.role_id : '',
                    no_log: 1 //设置为1后就不在这个接口打log，交给logStartShare接口
                },
                success: function (res) {
                    console.log(_[30389]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callback && callback(data.data);
                        } else {
                            callbacks[_[30379]] && callbacks[_[30379]](1, { errMsg: _[30390] + data.msg });
                        }
                    } else {
                        callbacks[_[30379]] && callbacks[_[30379]](1, { errMsg: _[30391] });
                    }
                }
            });
        },

        updateShare: function (invite, invite_type, is_new, role_id, server_id, scene) {
            console.log(_[30392]);
            var sdk_token = wx.getStorageSync(_[30360]);
            wx.request({
                url: _[26698] + HOST + _[30393],
                method: _[30310],
                dataType: _[219],
                header: {
                    'content-type': _[30311] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    invite: invite,
                    invite_type: invite_type,
                    is_new: is_new,
                    role_id: role_id,
                    sever_id: server_id,
                    scene: scene
                },
                success: function (res) {
                    console.log(_[30394]);
                    console.log(res);
                }
            });
        },

        msgCheck: function (content, callback) {
            console.log(_[30395]);
            var sdk_token = wx.getStorageSync(_[30360]);
            wx.request({
                url: _[26698] + HOST + _[30396],
                method: _[30310],
                dataType: _[219],
                header: {
                    'content-type': _[30311] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    content: content
                },
                success: function (res) {
                    console.log(_[30397]);
                    console.log(res);
                    callback && callback(res);
                }
            });
        },

        pay: function (data, callback) {
            var self = this;

            wx.checkSession({
                success: function () {
                    self.startPay(data, callback);
                },
                fail: function () {
                    console.log(_[30398]);
                    self.login({}, function () {
                        self.startPay(data, callback);
                    });
                }
            });
        },

        //支付接口
        startPay: function (data, callback) {
            console.log(_[30399]);
            console.log(data);

            var self = this;
            callbacks[_[30400]] = typeof callback == _[90] ? callback : null;
            //先下单
            this_pay_order = 0;
            var sdk_token = wx.getStorageSync(_[30360]);
            var session_key = wx.getStorageSync(_[30362]);
            if (!sdk_token || !session_key) {
                callbacks[_[30400]] && callbacks[_[30400]](1, { errMsg: _[30401] });
                return;
            }

            var sysInfo = wx.getSystemInfoSync();
            var order_data = {
                cpbill: data.cpbill,
                productid: data.productid,
                productname: data.productname,
                productdesc: data.productdesc,
                serverid: data.serverid,
                servername: data.servername,
                roleid: data.roleid,
                rolename: data.rolename,
                rolelevel: data.rolelevel,
                price: data.price,
                extension: data.extension,
                sdk_token: sdk_token,
                session_key: session_key,
                platform: sysInfo.platform
            };
            self.order_data = order_data;

            var public_data = self.getPublicData();
            public_data[_[30402]] = JSON.stringify(order_data);
            public_data[_[30352]] = 1;

            //发起网络请求
            wx.request({
                url: _[26698] + HOST + _[30403],
                method: _[30310],
                dataType: _[219],
                header: {
                    'content-type': _[30311] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(_[30404]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            //小程序
                            if (typeof wx.requestPayment == _[3]) {
                                // if(data.data.platform == 'android'){
                                if (sysInfo.platform == _[30405] || sysInfo.platform == _[30406]) {
                                    if (data.data.is_android_pay) {
                                        if (data.data.ios_pay_type == 1) {
                                            self.kfPay(data.data);
                                        } else if (data.data.ios_pay_type == 2) {
                                            self.xiaoPay(data.data);
                                        }
                                    } else {
                                        self.gamePay(data.data);
                                    }
                                } else {
                                    if (data.data.is_ios_pay) {
                                        if (data.data.ios_pay_type == 1) {
                                            self.kfPay(data.data);
                                        } else if (data.data.ios_pay_type == 2) {
                                            self.xiaoPay(data.data);
                                        }
                                    } else {
                                        wx.showModal({
                                            title: _[30407],
                                            content: _[30408],
                                            confirmText: _[30409],
                                            showCancel: false
                                        });
                                    }
                                }
                            } else {
                                self.minPay(data.data);
                            }
                        } else {
                            callbacks[_[30400]] && callbacks[_[30400]](1, { errMsg: data.msg });
                        }
                    } else {
                        callbacks[_[30400]] && callbacks[_[30400]](1, { errMsg: _[30365] });
                    }
                }
            });
        },
        xiaoPay: function (data) {
            var self = this;
            wx.navigateToMiniProgram({
                appId: config.min_app_id,
                path: _[30410] + data.orderId + _[30411] + data.money,
                extraData: {},
                envVersion: _[30318],
                success(res) {
                    // 打开成功
                }
            });
        },
        //小程序支付
        minPay: function (data) {
            //正式调起微信支付
            var self = this;
            wx.requestPayment({
                timeStamp: data.timeStamp,
                nonceStr: data.nonceStr,
                package: data.package,
                signType: data.signType,
                paySign: data.paySign,
                success: function (res) {
                    if (res.errMsg == _[30412]) {
                        var ret = {
                            cpOrderNo: self.order_data.cpbill,
                            orderNo: data.orderId,
                            amount: self.order_data.price,
                            extension: self.order_data.extension
                        };
                        callbacks[_[30400]] && callbacks[_[30400]](0, ret);
                    }
                },
                fail: function (res) {
                    if (res.errMsg == _[30413]) {
                        callbacks[_[30400]] && callbacks[_[30400]](2, { errMsg: _[30414] });
                    } else {
                        callbacks[_[30400]] && callbacks[_[30400]](1, { errMsg: _[30415] + res.err_desc });
                    }
                },
                complete: function (res) {}
            });
        },

        //小游戏支付
        gamePay: function (data) {
            var self = this;
            //游戏币足够，直接扣款
            if (data.buyQuantity <= data.balance) {
                console.log(_[30416]);
                wx.showModal({
                    title: _[30407],
                    content: _[30417] + data.balance + _[30418] + data.buyQuantity + _[30419],
                    showCancel: false,
                    confirmText: _[30409],
                    success: function () {
                        self.gameGoPay(data);
                    }
                });
            } else {
                console.log(_[30420]);
                wx.requestMidasPayment({
                    mode: _[30421],
                    env: data.env,
                    offerId: data.offerId,
                    currencyType: data.currencyType,
                    platform: data.platform,
                    buyQuantity: data.buyQuantity,
                    zoneId: data.zoneId,
                    success: function (res) {
                        if (res.errMsg == _[30422]) {
                            self.gameGoPay(data);
                        }
                    },
                    fail: function (res) {
                        if (res.errMsg.indexOf(_[30423]) !== -1) {
                            callbacks[_[30400]] && callbacks[_[30400]](2, { errMsg: _[30414] });
                        } else {
                            callbacks[_[30400]] && callbacks[_[30400]](1, { errMsg: _[30415] + res.errMsg });
                        }
                    },
                    complete: function (res) {}
                });
            }
        },

        kfPay: function (data) {
            //检查订单支付是否完成
            var self = this;
            p$AEBDC = data.orderId;
            wx.showModal({
                title: _[30407],
                content: _[30424],
                showCancel: false,
                confirmText: _[30409],
                success: function () {
                    var obj = {
                        showMessageCard: true,
                        sendMessageTitle: _[30425],
                        sendMessageImg: _[30426]
                    };
                    wx.openCustomerServiceConversation(obj);
                }
            });
        },

        gameGoPay: function (data, retry) {
            console.log(_[30427]);
            //请求pay接口
            var self = this;
            var session_key = wx.getStorageSync(_[30362]);
            wx.request({
                url: _[26698] + HOST + _[30428] + config.partner_id + '/' + config.game_pkg + '/',
                method: _[30310],
                dataType: _[219],
                header: {
                    'content-type': _[30311] // 默认值
                },
                data: {
                    order_id: data.orderId,
                    time: data.time,
                    sign: data.sign,
                    session_key: session_key
                },
                success: function (res) {
                    console.log(_[30429]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        if (res.data.state == 1) {
                            var ret = {
                                cpOrderNo: self.order_data.cpbill,
                                orderNo: data.orderId,
                                amount: self.order_data.price,
                                extension: self.order_data.extension
                            };
                            callbacks[_[30400]] && callbacks[_[30400]](0, ret);
                        } else {
                            callbacks[_[30400]] && callbacks[_[30400]](1, { errMsg: _[30430] });
                        }
                    }
                },
                fail: function () {}
            });
        },

        //创建角色
        logCreateRole: function (data) {
            var uid = wx.getStorageSync(_[30361]);
            var username = wx.getStorageSync(_[30307]);

            var postData = {};
            postData[_[30431]] = uid;
            postData[_[30432]] = username;
            postData[_[11583]] = data.roleid;
            postData[_[30433]] = data.rolelevel;
            postData[_[30434]] = data.rolename;
            postData[_[12260]] = data.serverid;

            if (data.roleid && data.serverid) {
                p$ADECB = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(_[5], postData);
        },

        //进入游戏
        logEnterGame: function (data) {
            var uid = wx.getStorageSync(_[30361]);
            var username = wx.getStorageSync(_[30307]);

            var postData = {};
            postData[_[30431]] = uid;
            postData[_[30432]] = username;
            postData[_[11583]] = data.roleid;
            postData[_[30433]] = data.rolelevel;
            postData[_[30434]] = data.rolename;
            postData[_[12260]] = data.serverid;

            if (data.roleid && data.serverid) {
                p$ADECB = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(_[6404], postData);

            //进入游戏确认邀请成功
            if (p$AEBCD) {
                this.updateShare(p$AEBCD.invite, p$AEBCD.invite_type, p$AEBCD.is_new, data.roleid, data.serverid, p$AEBCD.scene);
            }
        },

        //角色升级
        logRoleUpLevel: function (data) {
            var uid = wx.getStorageSync(_[30361]);
            var username = wx.getStorageSync(_[30307]);

            var postData = {};
            postData[_[30431]] = uid;
            postData[_[30432]] = username;
            postData[_[11583]] = data.roleid;
            postData[_[30433]] = data.rolelevel;
            postData[_[30434]] = data.rolename;
            postData[_[12260]] = data.serverid;

            if (data.roleid && data.serverid) {
                p$ADECB = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(_[30435], postData);
        },

        //获取唯一设备码（自定义）
        uuid: function (radix, len) {
            var chars = _[30436].split('');
            var uuid = [],
                i;
            radix = radix || chars.length;

            if (len) {
                for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random() * radix];
            } else {
                var r;

                uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
                uuid[14] = '4';

                for (i = 0; i < 36; i++) {
                    if (!uuid[i]) {
                        r = 0 | Math.random() * 16;
                        uuid[i] = chars[i == 19 ? r & 0x3 | 0x8 : r];
                    }
                }
            }

            return uuid.join('');
        },

        //获取公共参数
        getPublicData: function () {
            var system = wx.getSystemInfoSync();
            var uuid = wx.getStorageSync(_[30328]);
            var idfv = wx.getStorageSync(_[30329]);
            var ad_code = wx.getStorageSync(_[30331]);

            return {
                game_id: config.game_id,
                game_pkg: config.game_pkg,
                partner_id: config.partner_id,
                ad_code: ad_code,
                uuid: uuid,
                idfv: idfv,
                dname: system.model,
                mac: _[30437],
                net_type: system.wifiSignal == 0 ? '4G' : _[30438],
                os_ver: system.system,
                sdk_ver: system.version, //存放的是微信版本号
                game_ver: config.game_ver, //存放的是SDK版本号
                device: system.platform == _[30405] ? 1 : 2
            };
        },
        subscribeWhatsNew: function (type, callback) {
            wx.requestSubscribeWhatsNew({
                msgType: 1, // 消息类型，1=游戏更新提醒，目前只有这种类型
                success(res) {
                    console.log(res);
                    // res.confirm === true 或 false
                    callback(res.confirm);
                },
                fail(err) {
                    console.error(err);
                    callback(false);
                }
            });
        },

        subscriptionsSetting: function (type, callback) {
            wx.getWhatsNewSubscriptionsSetting({
                msgType: 1, // 消息类型，1=游戏更新提醒，目前只有这种类型
                success(res) {
                    console.log(res);
                    callback(res.status);
                },
                fail(err) {
                    console.error(err);
                    callback(0);
                }
            });
        },

        //统一发送log
        log: function (type, data) {
            var public_data = this.getPublicData();
            for (var key in data) {
                public_data[key] = data[key];
            }

            console.log(_[30439] + type);
            console.log(public_data);

            wx.request({
                url: _[26698] + HOST + _[30440] + type + _[30441] + encodeURIComponent(JSON.stringify(public_data))
            });
        },

        getDate: function () {
            var date = new Date();
            return date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate();
        },

        downloadClient: function () {
            wx.openCustomerServiceConversation();
        },
        subscribeMessage: function (tmplIds, callback) {
            console.log(_[30442] + tmplIds);
            //获取模板ID
            callbacks[_[30443]] = typeof callback == _[90] ? callback : null;
            wx.requestSubscribeMessage({
                tmplIds: tmplIds,
                success(res) {
                    console.log(_[30444]);
                    console.log(res);
                    callbacks[_[30443]] && callbacks[_[30443]](res);
                },
                fail(res) {
                    console.log(_[30445]);
                    console.log(res);
                    callbacks[_[30443]] && callbacks[_[30443]](res);
                }
            });
        },

        // 微端小助手
        weiduanHelper: function () {
            var da = new Dall();
            da.stebutonanimation(config.partner_id, config.game_pkg, config.game_id);
        }
    };
}

function run(method, data, callback) {
    method in p$ADEBC && p$ADEBC[method](data, callback);
}

exports.init = function (data, callback) {
    run(_[846], data, callback);
};
exports.login = function (callback) {
    run(_[30341], '', callback);
};
exports.pay = function (data, callback) {
    run(_[30400], data, callback);
};
exports.openService = function () {
    run(_[24777]);
};
exports.logCreateRole = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(_[30446], data);
};
exports.logEnterGame = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };

    run(_[30447], data);
};
exports.logRoleUpLevel = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(_[30448], data);
};
exports.share = function (type) {
    var data = {
        type: type
    };
    run(_[30379], data);
};
exports.msgCheck = function (data, callback) {
    run(_[12962], data, callback);
};
exports.downloadClient = function () {
    run(_[30449]);
};
exports.subscribeMessage = function (data, callback) {
    run(_[30443], data, callback);
};
exports.getConfig = function () {
    return {
        game_id: config.game_id,
        game_pkg: config.game_pkg,
        partner_id: config.partner_id
    };
};
exports.getPublicData = function () {
    run(_[30450]);
};
exports.weiduanHelper = function () {
    run(_[24667]);
};

exports.subscribeWhatsNew = function (data, callback) {
    run(_[30451], data, callback);
};
exports.subscriptionsSetting = function (data, callback) {
    run(_[30452], data, callback);
};