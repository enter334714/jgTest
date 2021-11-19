var Y = wx.$M;
var config = {
    game_id: '2',
    game_pkg: Y[208326],
    partner_id: '4',
    is_auth: false, //授权登录
    from: null //来源
};
window.config = config;

var $m51204 = $m52014();
var HOST = Y[208327];
var $m52401 = null;
var $m52041 = null;
var game_ver = '';

function $m52014() {
    var callbacks = {};
    var this_pay_order = 0;
    return {
        order_data: {},
        init: function (ops, callback) {
            game_ver = ops && ops.game_ver ? ops.game_ver : 0;
            console.log(Y[208328]);
            var self = this;

            var uuid = wx.getStorageSync(Y[208329]);
            var is_new;
            if (!uuid) {
                uuid = self.uuid(16, 32);
                wx.setStorageSync(Y[208329], uuid);
                is_new = 1;
            } else {
                is_new = 0;
            }
            var idfv = wx.getStorageSync(Y[208330]);
            if (!idfv) {
                idfv = self.uuid(16, 32);
                wx.setStorageSync(Y[208330], idfv);
            }

            var info = wx.getLaunchOptionsSync();
            var scene = info.scene ? info.scene : '';
            console.log(Y[208331]);
            console.log(info);

            //判断今天是否已经上报过
            if (is_new && info.query && info.query.ad_code) {

                wx.setStorageSync(Y[208332], info.query.ad_code);
            }

            //用户来源，如："txcps"
            if (info.query && info.query.from && info.query.from != "") {
                if (is_new) wx.setStorageSync(Y[208333], info.query.from);
                config.from = info.query.from;
            } else {
                var from = wx.getStorageSync(Y[208333]);
                if (!from && from != "") config.from = from;
            }
            // config.from = "txcps"
            console.log(config.from);

            var data = {
                install: is_new,
                scene: scene
            };
            self.log(Y[181026], data);

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
            console.log(Y[208334]);
            var self = this;
            callbacks[Y[180623]] = typeof callback == Y[208245] ? callback : null;

            //授权登录
            if (config.is_auth) {
                wx.getSetting({
                    success: function (res) {
                        if (res.authSetting[Y[208335]]) {
                            console.log(Y[208336]);
                            self.do_login(); //已授权
                        } else {
                            console.log(Y[208337]);
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
                                type: Y[180325],
                                text: Y[208338],
                                withCredentials: false,
                                style: {
                                    top: system_info.windowHeight / 2 + system_info.windowHeight / 4,
                                    left: system_info.windowWidth / 2 - 100,
                                    width: 200,
                                    height: 40,
                                    lineHeight: 40,
                                    backgroundColor: Y[208339],
                                    color: Y[180240],
                                    textAlign: Y[180188],
                                    fontSize: 16,
                                    borderRadius: 4
                                }
                            });
                            button.show();
                            button.onTap(res => {
                                console.log(res);
                                $m4102({ title: Y[208340] });
                                if (res.errMsg == Y[208341]) {
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
                        console.log(Y[208342]);
                        self.do_login();
                    }
                });
            } else {
                console.log(Y[208343] + config.is_auth);
                self.do_login();
            }
        },

        do_login: function (info) {
            var self = this;
            wx.login({
                success: function (res) {
                    console.log(Y[208344] + JSON.stringify(res));
                    if (res.code) {
                        //发起网络请求

                        var public_data = self.getPublicData();
                        public_data['mo'] = 1;
                        public_data[Y[203658]] = res.code;
                        public_data[Y[208345]] = info ? info.nick_name : '';
                        public_data[Y[208346]] = info ? info.head_img : '';

                        if (config.is_auth) {
                            wx.getUserInfo({
                                success: function (res6) {
                                    var encryptedData = res6.encryptedData;
                                    var iv = res6.iv;
                                    var signature = res6.signature;
                                    public_data[Y[208347]] = encryptedData;
                                    public_data['iv'] = iv;
                                    public_data[Y[208348]] = signature;
                                    wx.request({
                                        url: HOST + Y[208349],
                                        method: Y[180591],
                                        dataType: Y[186393],
                                        header: {
                                            'content-type': Y[180727] // 默认值
                                        },
                                        data: public_data,
                                        success: function (res) {
                                            console.log(Y[208350]);
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
                                                        wx.setStorageSync(Y[208351], data.data.sdk_token);
                                                        wx.setStorageSync(Y[208352], data.data.user_id);
                                                        wx.setStorageSync(Y[208353], data.data.username);
                                                        if (data.data.ext) {
                                                            wx.setStorageSync(Y[208354], data.data.ext);
                                                        }
                                                    } catch (e) {}

                                                    callbacks[Y[180623]] && callbacks[Y[180623]](0, userData);
                                                } else {
                                                    callbacks[Y[180623]] && callbacks[Y[180623]](1, { errMsg: data.msg });
                                                }
                                            } else {
                                                callbacks[Y[180623]] && callbacks[Y[180623]](1, { errMsg: Y[208355] });
                                            }
                                        },
                                        fail: function (res) {
                                            callbacks[Y[180623]] && callbacks[Y[180623]](1, { errMsg: res.errMsg });
                                        }
                                    });
                                },
                                fail: function (res6) {
                                    callbacks[Y[180623]] && callbacks[Y[180623]](1, { errMsg: res6.errMsg });
                                }
                            });
                        } else {
                            wx.request({
                                url: HOST + Y[208349],
                                method: Y[180591],
                                dataType: Y[186393],
                                header: {
                                    'content-type': Y[180727] // 默认值
                                },
                                data: public_data,
                                success: function (res) {
                                    console.log(Y[208350]);
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
                                                wx.setStorageSync(Y[208351], data.data.sdk_token);
                                                wx.setStorageSync(Y[208352], data.data.user_id);
                                                wx.setStorageSync(Y[208353], data.data.username);
                                                if (data.data.ext) {
                                                    wx.setStorageSync(Y[208354], data.data.ext);
                                                }
                                            } catch (e) {}

                                            callbacks[Y[180623]] && callbacks[Y[180623]](0, userData);
                                        } else {
                                            callbacks[Y[180623]] && callbacks[Y[180623]](1, { errMsg: data.msg });
                                        }
                                    } else {
                                        callbacks[Y[180623]] && callbacks[Y[180623]](1, { errMsg: Y[208356] });
                                    }
                                }
                            });
                        }
                    } else {
                        callbacks[Y[180623]] && callbacks[Y[180623]](1, { errMsg: res.errMsg });
                    }
                },
                fail: function (res) {
                    console.log(Y[208357] + JSON.stringify(res));
                    // iOS 和 Android 对于拒绝授权的回调 errMsg 没有统一，需要做一下兼容处理
                    if (res.errMsg.indexOf(Y[208358]) > -1 || res.errMsg.indexOf(Y[208359]) > -1) {
                        // 处理用户拒绝授权的情况
                        callbacks[Y[180623]] && callbacks[Y[180623]](1, { errMsg: res.errMsg });
                    }
                }
            });
        },

        checkGameVersion: function (game_ver, callback) {
            console.log(Y[208360]);
            var sdk_token = wx.getStorageSync(Y[208351]);
            wx.request({
                url: HOST + Y[208361],
                method: Y[180591],
                dataType: Y[186393],
                header: {
                    'content-type': Y[180727] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    game_ver: game_ver
                },
                success: function (res) {
                    console.log(Y[208362]);
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
                    console.log(Y[208363]);
                    self.login({}, function () {
                        self.startPay(data, callback);
                    });
                }
            });
        },

        //支付接口
        startPay: function (data, callback) {
            console.log(Y[208364]);
            console.log(data);

            var self = this;
            callbacks[Y[180677]] = typeof callback == Y[208245] ? callback : null;
            //先下单
            this_pay_order = 0;
            var sdk_token = wx.getStorageSync(Y[208351]);
            var session_key = wx.getStorageSync(Y[208354]);
            if (!sdk_token || !session_key) {
                callbacks[Y[180677]] && callbacks[Y[180677]](1, { errMsg: Y[208365] });
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
            public_data[Y[208366]] = JSON.stringify(order_data);

            //发起网络请求
            wx.request({
                url: HOST + Y[208367],
                method: Y[180591],
                dataType: Y[186393],
                header: {
                    'content-type': Y[180727] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(Y[208368]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            //小程序
                            if (typeof wx.requestPayment == Y[208198]) {
                                // if(data.data.platform == 'android'){
                                if (sysInfo.platform == Y[180110] || sysInfo.platform == Y[180113] || sysInfo.platform == Y[180588]) {
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
                                            title: Y[208369],
                                            content: Y[208370],
                                            confirmText: Y[208371],
                                            showCancel: false
                                        });
                                    }
                                }
                            } else {
                                self.minPay(data.data);
                            }
                        } else {
                            callbacks[Y[180677]] && callbacks[Y[180677]](1, { errMsg: data.msg });
                        }
                    } else {
                        callbacks[Y[180623]] && callbacks[Y[180623]](1, { errMsg: Y[208372] });
                    }
                }
            });
        },

        //小游戏支付
        gamePay: function (data) {
            var self = this;
            //游戏币足够，直接扣款
            if (data.buyQuantity <= data.balance) {
                console.log(Y[208373]);
                wx.showModal({
                    title: Y[208369],
                    content: Y[208374] + data.balance + Y[208375] + data.buyQuantity + Y[208376],
                    showCancel: false,
                    confirmText: Y[208371],
                    success: function () {
                        self.gameGoPay(data);
                    }
                });
            } else {
                console.log(Y[208377]);
                console.log(data);
                wx.requestMidasPayment({
                    mode: Y[208378],
                    env: data.env,
                    offerId: data.offerId,
                    currencyType: data.currencyType,
                    platform: data.platform,
                    buyQuantity: data.buyQuantity,
                    zoneId: data.zoneId,
                    success: function (res) {
                        if (res.errMsg == Y[208379]) {
                            self.gameGoPay(data);
                        }
                    },
                    fail: function (res) {
                        if (res.errMsg.indexOf(Y[208380]) !== -1) {
                            callbacks[Y[180677]] && callbacks[Y[180677]](2, { errMsg: Y[208381] });
                        } else {
                            callbacks[Y[180677]] && callbacks[Y[180677]](1, { errMsg: Y[208382] + res.errMsg + '(' + res.errCode + ')' });
                        }
                    },
                    complete: function (res) {}
                });
            }
        },

        kfPay: function (data) {
            //检查订单支付是否完成
            var self = this;
            $m52041 = data.orderId;
            wx.showModal({
                title: Y[208369],
                content: Y[208383],
                showCancel: false,
                confirmText: Y[208371],
                success: function () {
                    var obj = {
                        showMessageCard: true,
                        sendMessageTitle: Y[208384],
                        sendMessageImg: Y[208385]
                    };
                    wx.openCustomerServiceConversation(obj);
                }
            });
        },

        gameGoPay: function (data, retry) {
            console.log(Y[208386]);
            //请求pay接口
            var self = this;
            var session_key = wx.getStorageSync(Y[208354]);
            wx.request({
                url: HOST + Y[208387] + config.partner_id + '/' + config.game_pkg + '/',
                method: Y[180591],
                dataType: Y[186393],
                header: {
                    'content-type': Y[180727] // 默认值
                },
                data: {
                    order_id: data.orderId,
                    time: data.time,
                    sign: data.sign,
                    session_key: session_key
                },
                success: function (res) {
                    console.log(Y[208388]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        if (res.data.state == 1) {
                            var ret = {
                                cpOrderNo: self.order_data.cpbill,
                                orderNo: data.orderId,
                                amount: self.order_data.price,
                                extension: self.order_data.extension
                            };
                            callbacks[Y[180677]] && callbacks[Y[180677]](0, ret);
                        } else {
                            callbacks[Y[180677]] && callbacks[Y[180677]](1, { errMsg: Y[208389] });
                        }
                    }
                },
                fail: function () {}
            });
        },

        //创建角色
        logCreateRole: function (data) {
            var uid = wx.getStorageSync(Y[208352]);
            var username = wx.getStorageSync(Y[208353]);

            var postData = {};
            postData[Y[208390]] = uid;
            postData[Y[208391]] = username;
            postData[Y[191180]] = data.roleid;
            postData[Y[208392]] = data.rolelevel;
            postData[Y[208393]] = data.rolename;
            postData[Y[180023]] = data.serverid;

            if (data.roleid && data.serverid) {
                $m52401 = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(Y[180150], postData);
        },

        //进入游戏
        logEnterGame: function (data) {
            var uid = wx.getStorageSync(Y[208352]);
            var username = wx.getStorageSync(Y[208353]);

            var postData = {};
            postData[Y[208390]] = uid;
            postData[Y[208391]] = username;
            postData[Y[191180]] = data.roleid;
            postData[Y[208392]] = data.rolelevel;
            postData[Y[208393]] = data.rolename;
            postData[Y[180023]] = data.serverid;

            if (data.roleid && data.serverid) {
                $m52401 = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(Y[186274], postData);
        },

        //角色升级
        logRoleUpLevel: function (data) {
            var uid = wx.getStorageSync(Y[208352]);
            var username = wx.getStorageSync(Y[208353]);

            var postData = {};
            postData[Y[208390]] = uid;
            postData[Y[208391]] = username;
            postData[Y[191180]] = data.roleid;
            postData[Y[208392]] = data.rolelevel;
            postData[Y[208393]] = data.rolename;
            postData[Y[180023]] = data.serverid;

            if (data.roleid && data.serverid) {
                $m52401 = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(Y[208394], postData);
        },

        //获取唯一设备码（自定义）
        uuid: function (radix, len) {
            var chars = Y[208395].split('');
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
            var uuid = wx.getStorageSync(Y[208329]);
            var idfv = wx.getStorageSync(Y[208330]);
            var ad_code = wx.getStorageSync(Y[208332]);

            return {
                game_id: config.game_id,
                game_pkg: config.game_pkg,
                partner_id: config.partner_id,
                ad_code: ad_code,
                uuid: uuid,
                idfv: idfv,
                dname: system.model,
                mac: Y[208396],
                net_type: system.wifiSignal == 0 ? '4G' : Y[208397],
                os_ver: system.system,
                sdk_ver: system.version, //存放的是微信版本号
                game_ver: game_ver, //存放的是游戏版本号
                device: system.platform == Y[180110] ? 1 : 2,
                is_from_min: 1
            };
        },

        //统一发送log
        log: function (type, data) {
            var public_data = this.getPublicData();
            for (var key in data) {
                public_data[key] = data[key];
            }

            console.log(Y[208398] + type);
            console.log(public_data);

            wx.request({
                url: HOST + Y[208399] + type + Y[208400] + encodeURIComponent(JSON.stringify(public_data))
            });
        },

        getDate: function () {
            var date = new Date();
            return date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate();
        },

        downloadClient: function () {
            wx.showModal({
                title: Y[208401],
                content: Y[208402],
                showCancel: false,
                confirmText: Y[208371],
                success: function () {
                    var obj = {
                        showMessageCard: true,
                        sendMessageTitle: Y[208403],
                        sendMessageImg: Y[208404]
                    };
                    wx.openCustomerServiceConversation(obj);
                }
            });
        },

        checkMsg: function (msg, callback) {
            console.log(Y[208405]);
            var sdk_token = wx.getStorageSync(Y[208351]);
            wx.request({
                url: HOST + Y[208406],
                method: Y[180591],
                dataType: Y[186393],
                header: {
                    'content-type': Y[180727] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    content: msg
                },
                success: function (res) {
                    console.log(Y[208407]);
                    callback && callback(res.data.code == 0 ? 1 : 0, res.data.msg);
                }
            });
        }
    };
}

function run(method, data, callback) {
    method in $m51204 && $m51204[method](data, callback);
}

exports.init = function (data, callback) {
    run(Y[180445], data, callback);
};
exports.login = function (callback) {
    run(Y[180623], '', callback);
};
exports.pay = function (data, callback) {
    run(Y[180677], data, callback);
};

exports.logCreateRole = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(Y[180685], data);
};
exports.logEnterGame = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };

    run(Y[180687], data);
};
exports.logRoleUpLevel = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(Y[180689], data);
};

exports.downloadClient = function () {
    run(Y[208408]);
};
exports.getConfig = function () {
    return {
        game_id: config.game_id,
        game_pkg: config.game_pkg,
        partner_id: config.partner_id
    };
};
exports.getPublicData = function () {
    run(Y[208409]);
};

exports.checkMsg = function (data, callback) {
    run(Y[208410], data, callback);
};