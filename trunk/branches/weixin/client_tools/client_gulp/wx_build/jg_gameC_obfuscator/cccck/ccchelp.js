var p = wx.$h;
var config = {
    game_id: '2',
    game_pkg: p[48000],
    partner_id: '4',
    is_auth: false, //授权登录
    from: null //来源
};
window.config = config;

var $aHQV53 = $aHV35Q();
var HOST = p[48001];
var $aHQV35 = null;
var $aHV5Q3 = null;
var game_ver = '';

function $aHV35Q() {
    var callbacks = {};
    var this_pay_order = 0;
    return {
        order_data: {},
        init: function (ops, callback) {
            game_ver = ops && ops.game_ver ? ops.game_ver : 0;
            console.log(p[48002]);
            var self = this;

            var uuid = wx.getStorageSync(p[48003]);
            var is_new;
            if (!uuid) {
                uuid = self.uuid(16, 32);
                wx.setStorageSync(p[48003], uuid);
                is_new = 1;
            } else {
                is_new = 0;
            }
            var idfv = wx.getStorageSync(p[48004]);
            if (!idfv) {
                idfv = self.uuid(16, 32);
                wx.setStorageSync(p[48004], idfv);
            }

            var info = wx.getLaunchOptionsSync();
            var scene = info.scene ? info.scene : '';
            console.log(p[48005]);
            console.log(info);

            //判断今天是否已经上报过
            if (is_new && info.query && info.query.ad_code) {

                wx.setStorageSync(p[48006], info.query.ad_code);
            }

            //用户来源，如："txcps"
            if (info.query && info.query.from && info.query.from != "") {
                if (is_new) wx.setStorageSync(p[48007], info.query.from);
                config.from = info.query.from;
            } else {
                var from = wx.getStorageSync(p[48007]);
                if (!from && from != "") config.from = from;
            }
            // config.from = "txcps"
            console.log(config.from);

            var data = {
                install: is_new,
                scene: scene
            };
            self.log(p[20284], data);

            //显示右上角分享按钮
            wx.showShareMenu();

            //判断版本号
            if (game_ver) {
                this.checkGameVersion(game_ver, function (data) {
                    callback && callback(data);
                });
            }
        },
        //登录接口
        login: function (data, callback) {
            console.log(p[48008]);
            var self = this;
            callbacks[p[48009]] = typeof callback == p[48010] ? callback : null;

            //授权登录
            if (config.is_auth) {
                wx.getSetting({
                    success: function (res) {
                        if (res.authSetting[p[48011]]) {
                            console.log(p[48012]);
                            self.do_login(); //已授权
                        } else {
                            console.log(p[48013]);
                            wx.hideLoading({});
                            // setTimeout(() => {
                            //     wx.hideLoading();
                            // }, 1000);
                            var system_info = wx.getSystemInfoSync();
                            var screen_width = system_info.screenWidth;
                            var screen_height = system_info.screenHeight;
                            var btn_width = screen_width * 2 / 3;
                            var btn_height = btn_width / 3;
                            var btn_left = (screen_width - btn_width) / 2;
                            var btn_top = screen_height / 2;
                            var button = wx.createUserInfoButton({
                                type: p[24396],
                                text: p[48014],
                                withCredentials: false,
                                style: {
                                    top: system_info.windowHeight / 2 + system_info.windowHeight / 4,
                                    left: system_info.windowWidth / 2 - 100,
                                    width: 200,
                                    height: 40,
                                    lineHeight: 40,
                                    backgroundColor: p[48015],
                                    color: p[24419],
                                    textAlign: p[21556],
                                    fontSize: 16,
                                    borderRadius: 4
                                }
                            });
                            button.show();
                            button.onTap(res => {
                                console.log(res);
                                $a5Q3V({ title: p[48016] });
                                if (res.errMsg == p[48017]) {
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
                        console.log(p[48018]);
                        self.do_login();
                    }
                });
            } else {
                console.log(p[48019] + config.is_auth);
                self.do_login();
            }
        },

        do_login: function (info) {
            var self = this;
            wx.login({
                success: function (res) {
                    console.log(p[48020] + JSON.stringify(res));
                    if (res.code) {
                        //发起网络请求

                        var public_data = self.getPublicData();
                        public_data['mo'] = 1;
                        public_data[p[43386]] = res.code;
                        public_data[p[48021]] = info ? info.nick_name : '';
                        public_data[p[48022]] = info ? info.head_img : '';

                        if (config.is_auth) {
                            wx.getUserInfo({
                                success: function (res6) {
                                    var encryptedData = res6.encryptedData;
                                    var iv = res6.iv;
                                    var signature = res6.signature;
                                    public_data[p[48023]] = encryptedData;
                                    public_data['iv'] = iv;
                                    public_data[p[48024]] = signature;
                                    wx.request({
                                        url: HOST + p[48025],
                                        method: p[48026],
                                        dataType: p[25810],
                                        header: {
                                            'content-type': p[48027] // 默认值
                                        },
                                        data: public_data,
                                        success: function (res) {
                                            console.log(p[48028]);
                                            console.log(res);
                                            if (res.statusCode == 200) {
                                                var data = res.data;
                                                if (data.state) {
                                                    var userData = {
                                                        userid: data.data.user_id,
                                                        account: data.data.nick_name,
                                                        token: data.data.token
                                                    };
                                                    try {
                                                        wx.setStorageSync(p[48029], data.data.sdk_token);
                                                        wx.setStorageSync(p[48030], data.data.user_id);
                                                        wx.setStorageSync(p[48031], data.data.username);
                                                        wx.setStorageSync(p[48032], data.data.openid);
                                                        if (data.data.ext) {
                                                            wx.setStorageSync(p[48033], data.data.ext);
                                                        }
                                                    } catch (e) {}

                                                    callbacks[p[48009]] && callbacks[p[48009]](0, userData);
                                                } else {
                                                    callbacks[p[48009]] && callbacks[p[48009]](1, { errMsg: data.msg });
                                                }
                                            } else {
                                                callbacks[p[48009]] && callbacks[p[48009]](1, { errMsg: p[48034] });
                                            }
                                        },
                                        fail: function (res) {
                                            callbacks[p[48009]] && callbacks[p[48009]](1, { errMsg: res.errMsg });
                                        }
                                    });
                                },
                                fail: function (res6) {
                                    callbacks[p[48009]] && callbacks[p[48009]](1, { errMsg: res6.errMsg });
                                }
                            });
                        } else {
                            wx.request({
                                url: HOST + p[48025],
                                method: p[48026],
                                dataType: p[25810],
                                header: {
                                    'content-type': p[48027] // 默认值
                                },
                                data: public_data,
                                success: function (res) {
                                    console.log(p[48028]);
                                    console.log(res);
                                    if (res.statusCode == 200) {
                                        var data = res.data;
                                        if (data.state) {
                                            var userData = {
                                                userid: data.data.user_id,
                                                account: data.data.nick_name,
                                                token: data.data.token
                                            };
                                            try {
                                                wx.setStorageSync(p[48029], data.data.sdk_token);
                                                wx.setStorageSync(p[48030], data.data.user_id);
                                                wx.setStorageSync(p[48031], data.data.username);
                                                wx.setStorageSync(p[48032], data.data.openid);
                                                if (data.data.ext) {
                                                    wx.setStorageSync(p[48033], data.data.ext);
                                                }
                                            } catch (e) {}

                                            callbacks[p[48009]] && callbacks[p[48009]](0, userData);
                                        } else {
                                            callbacks[p[48009]] && callbacks[p[48009]](1, { errMsg: data.msg });
                                        }
                                    } else {
                                        callbacks[p[48009]] && callbacks[p[48009]](1, { errMsg: p[48035] });
                                    }
                                }
                            });
                        }
                    } else {
                        callbacks[p[48009]] && callbacks[p[48009]](1, { errMsg: res.errMsg });
                    }
                },
                fail: function (res) {
                    console.log(p[48036] + JSON.stringify(res));
                    // iOS 和 Android 对于拒绝授权的回调 errMsg 没有统一，需要做一下兼容处理
                    if (res.errMsg.indexOf(p[48037]) > -1 || res.errMsg.indexOf(p[48038]) > -1) {
                        // 处理用户拒绝授权的情况
                        callbacks[p[48009]] && callbacks[p[48009]](1, { errMsg: res.errMsg });
                    }
                }
            });
        },

        checkGameVersion: function (game_ver, callback) {
            console.log(p[48039]);
            var sdk_token = wx.getStorageSync(p[48029]);
            wx.request({
                url: HOST + p[48040],
                method: p[48026],
                dataType: p[25810],
                header: {
                    'content-type': p[48027] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    game_ver: game_ver
                },
                success: function (res) {
                    console.log(p[48041]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callback && callback(data.data);
                        } else {
                            callback && callback({ develop: 0 });
                        }
                    } else {
                        callback && callback({ develop: 0 });
                    }
                },
                fail: function (res) {
                    console.log(res);
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
                    console.log(p[48042]);
                    self.login({}, function () {
                        self.startPay(data, callback);
                    });
                }
            });
        },

        //支付接口
        startPay: function (data, callback) {
            console.log(p[48043]);
            console.log(data);

            var self = this;
            callbacks[p[48044]] = typeof callback == p[48010] ? callback : null;
            //先下单
            this_pay_order = 0;
            var sdk_token = wx.getStorageSync(p[48029]);
            var session_key = wx.getStorageSync(p[48033]);
            if (!sdk_token || !session_key) {
                callbacks[p[48044]] && callbacks[p[48044]](1, { errMsg: p[48045] });
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
            public_data[p[48046]] = JSON.stringify(order_data);

            //发起网络请求
            wx.request({
                url: HOST + p[48047],
                method: p[48026],
                dataType: p[25810],
                header: {
                    'content-type': p[48027] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(p[48048]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            //小程序
                            if (typeof wx.requestPayment == p[48049]) {
                                // if(data.data.platform == 'android'){
                                if (sysInfo.platform == p[48050] || sysInfo.platform == p[48051] || sysInfo.platform == p[48052]) {
                                    if (data.data.is_android_pay) {
                                        self.kfPay(data.data);
                                    } else {
                                        self.gamePay(data.data);
                                    }
                                } else {
                                    if (data.data.is_ios_pay) {
                                        if (data.data.ios_pay_type == 1) {
                                            self.kfPay(data.data);
                                        }
                                    } else {
                                        wx.showModal({
                                            title: p[48053],
                                            content: p[48054],
                                            confirmText: p[48055],
                                            showCancel: false
                                        });
                                    }
                                }
                            } else {
                                self.minPay(data.data);
                            }
                        } else {
                            callbacks[p[48044]] && callbacks[p[48044]](1, { errMsg: data.msg });
                        }
                    } else {
                        callbacks[p[48009]] && callbacks[p[48009]](1, { errMsg: p[48056] });
                    }
                }
            });
        },

        //小游戏支付
        gamePay: function (data) {
            var self = this;
            //游戏币足够，直接扣款
            if (data.buyQuantity <= data.balance) {
                console.log(p[48057]);
                wx.showModal({
                    title: p[48053],
                    content: p[48058] + data.balance + p[48059] + data.buyQuantity + p[48060],
                    showCancel: false,
                    confirmText: p[48055],
                    success: function () {
                        self.gameGoPay(data);
                    }
                });
            } else {
                console.log(p[48061]);
                console.log(data);
                wx.requestMidasPayment({
                    mode: p[48062],
                    env: data.env,
                    offerId: data.offerId,
                    currencyType: data.currencyType,
                    platform: data.platform,
                    buyQuantity: data.buyQuantity,
                    zoneId: data.zoneId,
                    success: function (res) {
                        if (res.errMsg == p[48063]) {
                            self.gameGoPay(data);
                        }
                    },
                    fail: function (res) {
                        if (res.errMsg.indexOf(p[48064]) !== -1) {
                            callbacks[p[48044]] && callbacks[p[48044]](2, { errMsg: p[48065] });
                        } else {
                            callbacks[p[48044]] && callbacks[p[48044]](1, { errMsg: p[48066] + res.errMsg + '(' + res.errCode + ')' });
                        }
                    },
                    complete: function (res) {}
                });
            }
        },

        kfPay: function (data) {
            //检查订单支付是否完成
            var self = this;
            $aHV5Q3 = data.orderId;
            wx.showModal({
                title: p[48053],
                content: p[48067],
                showCancel: false,
                confirmText: p[48055],
                success: function () {
                    var obj = {
                        showMessageCard: true,
                        sendMessageTitle: p[48068],
                        sendMessageImg: p[48069]
                    };
                    wx.openCustomerServiceConversation(obj);
                }
            });
        },

        gameGoPay: function (data, retry) {
            console.log(p[48070]);
            //请求pay接口
            var self = this;
            var session_key = wx.getStorageSync(p[48033]);
            wx.request({
                url: HOST + p[48071] + config.partner_id + '/' + config.game_pkg + '/',
                method: p[48026],
                dataType: p[25810],
                header: {
                    'content-type': p[48027] // 默认值
                },
                data: {
                    order_id: data.orderId,
                    time: data.time,
                    sign: data.sign,
                    session_key: session_key
                },
                success: function (res) {
                    console.log(p[48072]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        if (res.data.state == 1) {
                            var ret = {
                                cpOrderNo: self.order_data.cpbill,
                                orderNo: data.orderId,
                                amount: self.order_data.price,
                                extension: self.order_data.extension
                            };
                            callbacks[p[48044]] && callbacks[p[48044]](0, ret);
                        } else {
                            callbacks[p[48044]] && callbacks[p[48044]](1, { errMsg: p[48073] });
                        }
                    }
                },
                fail: function () {}
            });
        },

        //创建角色
        logCreateRole: function (data) {
            var uid = wx.getStorageSync(p[48030]);
            var username = wx.getStorageSync(p[48031]);

            var postData = {};
            postData[p[48074]] = uid;
            postData[p[48075]] = username;
            postData[p[30657]] = data.roleid;
            postData[p[48076]] = data.rolelevel;
            postData[p[48077]] = data.rolename;
            postData[p[31329]] = data.serverid;

            if (data.roleid && data.serverid) {
                $aHQV35 = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(p[20006], postData);
        },

        //进入游戏
        logEnterGame: function (data) {
            var uid = wx.getStorageSync(p[48030]);
            var username = wx.getStorageSync(p[48031]);

            var postData = {};
            postData[p[48074]] = uid;
            postData[p[48075]] = username;
            postData[p[30657]] = data.roleid;
            postData[p[48076]] = data.rolelevel;
            postData[p[48077]] = data.rolename;
            postData[p[31329]] = data.serverid;

            if (data.roleid && data.serverid) {
                $aHQV35 = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(p[25692], postData);
        },

        //角色升级
        logRoleUpLevel: function (data) {
            var uid = wx.getStorageSync(p[48030]);
            var username = wx.getStorageSync(p[48031]);

            var postData = {};
            postData[p[48074]] = uid;
            postData[p[48075]] = username;
            postData[p[30657]] = data.roleid;
            postData[p[48076]] = data.rolelevel;
            postData[p[48077]] = data.rolename;
            postData[p[31329]] = data.serverid;

            if (data.roleid && data.serverid) {
                $aHQV35 = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(p[48078], postData);
        },

        //获取唯一设备码（自定义）
        uuid: function (radix, len) {
            var chars = p[48079].split('');
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
            var uuid = wx.getStorageSync(p[48003]);
            var idfv = wx.getStorageSync(p[48004]);
            var ad_code = wx.getStorageSync(p[48006]);

            return {
                game_id: config.game_id,
                game_pkg: config.game_pkg,
                partner_id: config.partner_id,
                ad_code: ad_code,
                uuid: uuid,
                idfv: idfv,
                dname: system.model,
                mac: p[48080],
                net_type: system.wifiSignal == 0 ? '4G' : p[48081],
                os_ver: system.system,
                sdk_ver: system.version, //存放的是微信版本号
                game_ver: game_ver, //存放的是游戏版本号
                device: system.platform == p[48050] ? 1 : 2,
                is_from_min: 1
            };
        },

        //统一发送log
        log: function (type, data) {
            var public_data = this.getPublicData();
            for (var key in data) {
                public_data[key] = data[key];
            }

            console.log(p[48082] + type);
            console.log(public_data);

            wx.request({
                url: HOST + p[48083] + type + p[48084] + encodeURIComponent(JSON.stringify(public_data))
            });
        },

        getDate: function () {
            var date = new Date();
            return date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate();
        },

        downloadClient: function () {
            var openid = wx.getStorageSync(p[48032]);
            var msg = p[48085] + openid;
            wx.showModal({
                title: p[48086],
                content: p[48087],
                showCancel: false,
                confirmText: p[48055],
                success: function () {
                    var obj = {
                        showMessageCard: true,
                        sendMessageTitle: msg,
                        sendMessageImg: p[48088]
                    };
                    wx.openCustomerServiceConversation(obj);
                }
            });
        },

        checkMsg: function (msg, callback) {
            console.log(p[48089]);
            var sdk_token = wx.getStorageSync(p[48029]);
            wx.request({
                url: HOST + p[48090],
                method: p[48026],
                dataType: p[25810],
                header: {
                    'content-type': p[48027] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    content: msg
                },
                success: function (res) {
                    console.log(p[48091]);
                    callback && callback(res.data.code == 0 ? 1 : 0, res.data.msg);
                }
            });
        },

        //新版消息检测接口
        checkMsgV2: function (msg, callback) {
            console.log(p[48089]);
            var sdk_token = wx.getStorageSync(p[48029]);
            wx.request({
                url: HOST + p[48092],
                method: p[48026],
                dataType: p[25810],
                header: {
                    'content-type': p[48027] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    content: msg,
                    scene: 1
                },
                success: function (res) {
                    console.log(p[48091]);
                    callback && callback(res.data.code == 0 ? 1 : 0, res.data.msg);
                }
            });
        },

        // 发送订阅消息
        sendMessage: function (template_id, data, callback) {
            console.log(p[48093]);
            var sdk_token = wx.getStorageSync(p[48029]);
            wx.request({
                url: HOST + p[48094],
                method: p[48026],
                dataType: p[25810],
                header: {
                    'content-type': p[48027] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    template_id: template_id,
                    data: data
                },
                success: function (res) {
                    console.log(p[48095]);
                    callback && callback(res.data.code == 0 ? 1 : 0, res.data.msg);
                }
            });
        }
    };
}

function run(method, data, callback) {
    method in $aHQV53 && $aHQV53[method](data, callback);
}

exports.init = function (data, callback) {
    run(p[20364], data, callback);
};
exports.login = function (callback) {
    run(p[48009], '', callback);
};
exports.pay = function (data, callback) {
    run(p[48044], data, callback);
};

exports.logCreateRole = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(p[48096], data);
};
exports.logEnterGame = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };

    run(p[48097], data);
};
exports.logRoleUpLevel = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(p[48098], data);
};

exports.downloadClient = function () {
    run(p[48099]);
};
exports.getConfig = function () {
    return {
        game_id: config.game_id,
        game_pkg: config.game_pkg,
        partner_id: config.partner_id
    };
};
exports.getPublicData = function () {
    run(p[48100]);
};

exports.checkMsg = function (data, callback) {
    run(p[48101], data, callback);
};

exports.checkMsgV2 = function (data, callback) {
    run(p[48102], data, callback);
};

exports.sendMessage = function (template_id, data, callback) {
    run(p[48103], template_id, data, callback);
};