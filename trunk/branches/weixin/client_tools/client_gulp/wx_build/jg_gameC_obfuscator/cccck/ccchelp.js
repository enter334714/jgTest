var p = wx.$h;
var config = {
    game_id: '2',
    game_pkg: p[48446],
    partner_id: '4',
    is_auth: false, //授权登录
    from: null //来源
};
window.config = config;

var $aHQV53 = $aHV35Q();
var HOST = p[48447];
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
            console.log(p[48448]);
            var self = this;

            var uuid = wx.getStorageSync(p[48449]);
            var is_new;
            if (!uuid) {
                uuid = self.uuid(16, 32);
                wx.setStorageSync(p[48449], uuid);
                is_new = 1;
            } else {
                is_new = 0;
            }
            var idfv = wx.getStorageSync(p[48450]);
            if (!idfv) {
                idfv = self.uuid(16, 32);
                wx.setStorageSync(p[48450], idfv);
            }

            var info = wx.getLaunchOptionsSync();
            var scene = info.scene ? info.scene : '';
            console.log(p[48451]);
            console.log(info);

            //判断今天是否已经上报过
            if (is_new && info.query && info.query.ad_code) {

                wx.setStorageSync(p[48452], info.query.ad_code);
            }

            //用户来源，如："txcps"
            if (info.query && info.query.from && info.query.from != "") {
                if (is_new) wx.setStorageSync(p[48453], info.query.from);
                config.from = info.query.from;
            } else {
                var from = wx.getStorageSync(p[48453]);
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
            console.log(p[48454]);
            var self = this;
            callbacks[p[48455]] = typeof callback == p[48456] ? callback : null;

            //授权登录
            if (config.is_auth) {
                wx.getSetting({
                    success: function (res) {
                        if (res.authSetting[p[48457]]) {
                            console.log(p[48458]);
                            self.do_login(); //已授权
                        } else {
                            console.log(p[48459]);
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
                                type: p[24430],
                                text: p[48460],
                                withCredentials: false,
                                style: {
                                    top: system_info.windowHeight / 2 + system_info.windowHeight / 4,
                                    left: system_info.windowWidth / 2 - 100,
                                    width: 200,
                                    height: 40,
                                    lineHeight: 40,
                                    backgroundColor: p[48461],
                                    color: p[24454],
                                    textAlign: p[21562],
                                    fontSize: 16,
                                    borderRadius: 4
                                }
                            });
                            button.show();
                            button.onTap(res => {
                                console.log(res);
                                $a5Q3V({ title: p[48462] });
                                if (res.errMsg == p[48463]) {
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
                        console.log(p[48464]);
                        self.do_login();
                    }
                });
            } else {
                console.log(p[48465] + config.is_auth);
                self.do_login();
            }
        },

        do_login: function (info) {
            var self = this;
            wx.login({
                success: function (res) {
                    console.log(p[48466] + JSON.stringify(res));
                    if (res.code) {
                        //发起网络请求

                        var public_data = self.getPublicData();
                        public_data['mo'] = 1;
                        public_data[p[43643]] = res.code;
                        public_data[p[48467]] = info ? info.nick_name : '';
                        public_data[p[48468]] = info ? info.head_img : '';

                        if (config.is_auth) {
                            wx.getUserInfo({
                                success: function (res6) {
                                    var encryptedData = res6.encryptedData;
                                    var iv = res6.iv;
                                    var signature = res6.signature;
                                    public_data[p[48469]] = encryptedData;
                                    public_data['iv'] = iv;
                                    public_data[p[48470]] = signature;
                                    wx.request({
                                        url: HOST + p[48471],
                                        method: p[48472],
                                        dataType: p[25848],
                                        header: {
                                            'content-type': p[48473] // 默认值
                                        },
                                        data: public_data,
                                        success: function (res) {
                                            console.log(p[48474]);
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
                                                        wx.setStorageSync(p[48475], data.data.sdk_token);
                                                        wx.setStorageSync(p[48476], data.data.user_id);
                                                        wx.setStorageSync(p[48477], data.data.username);
                                                        wx.setStorageSync(p[48478], data.data.openid);
                                                        if (data.data.ext) {
                                                            wx.setStorageSync(p[48479], data.data.ext);
                                                        }
                                                    } catch (e) {}

                                                    callbacks[p[48455]] && callbacks[p[48455]](0, userData);
                                                } else {
                                                    callbacks[p[48455]] && callbacks[p[48455]](1, { errMsg: data.msg });
                                                }
                                            } else {
                                                callbacks[p[48455]] && callbacks[p[48455]](1, { errMsg: p[48480] });
                                            }
                                        },
                                        fail: function (res) {
                                            callbacks[p[48455]] && callbacks[p[48455]](1, { errMsg: res.errMsg });
                                        }
                                    });
                                },
                                fail: function (res6) {
                                    callbacks[p[48455]] && callbacks[p[48455]](1, { errMsg: res6.errMsg });
                                }
                            });
                        } else {
                            wx.request({
                                url: HOST + p[48471],
                                method: p[48472],
                                dataType: p[25848],
                                header: {
                                    'content-type': p[48473] // 默认值
                                },
                                data: public_data,
                                success: function (res) {
                                    console.log(p[48474]);
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
                                                wx.setStorageSync(p[48475], data.data.sdk_token);
                                                wx.setStorageSync(p[48476], data.data.user_id);
                                                wx.setStorageSync(p[48477], data.data.username);
                                                wx.setStorageSync(p[48478], data.data.openid);
                                                if (data.data.ext) {
                                                    wx.setStorageSync(p[48479], data.data.ext);
                                                }
                                            } catch (e) {}

                                            callbacks[p[48455]] && callbacks[p[48455]](0, userData);
                                        } else {
                                            callbacks[p[48455]] && callbacks[p[48455]](1, { errMsg: data.msg });
                                        }
                                    } else {
                                        callbacks[p[48455]] && callbacks[p[48455]](1, { errMsg: p[48481] });
                                    }
                                }
                            });
                        }
                    } else {
                        callbacks[p[48455]] && callbacks[p[48455]](1, { errMsg: res.errMsg });
                    }
                },
                fail: function (res) {
                    console.log(p[48482] + JSON.stringify(res));
                    // iOS 和 Android 对于拒绝授权的回调 errMsg 没有统一，需要做一下兼容处理
                    if (res.errMsg.indexOf(p[48483]) > -1 || res.errMsg.indexOf(p[48484]) > -1) {
                        // 处理用户拒绝授权的情况
                        callbacks[p[48455]] && callbacks[p[48455]](1, { errMsg: res.errMsg });
                    }
                }
            });
        },

        checkGameVersion: function (game_ver, callback) {
            console.log(p[48485]);
            var sdk_token = wx.getStorageSync(p[48475]);
            wx.request({
                url: HOST + p[48486],
                method: p[48472],
                dataType: p[25848],
                header: {
                    'content-type': p[48473] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    game_ver: game_ver
                },
                success: function (res) {
                    console.log(p[48487]);
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
                    console.log(p[48488]);
                    self.login({}, function () {
                        self.startPay(data, callback);
                    });
                }
            });
        },

        //支付接口
        startPay: function (data, callback) {
            console.log(p[48489]);
            console.log(data);

            var self = this;
            callbacks[p[48490]] = typeof callback == p[48456] ? callback : null;
            //先下单
            this_pay_order = 0;
            var sdk_token = wx.getStorageSync(p[48475]);
            var session_key = wx.getStorageSync(p[48479]);
            if (!sdk_token || !session_key) {
                callbacks[p[48490]] && callbacks[p[48490]](1, { errMsg: p[48491] });
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
            public_data[p[48492]] = JSON.stringify(order_data);

            //发起网络请求
            wx.request({
                url: HOST + p[48493],
                method: p[48472],
                dataType: p[25848],
                header: {
                    'content-type': p[48473] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(p[48494]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            //小程序
                            if (typeof wx.requestPayment == p[48495]) {
                                // if(data.data.platform == 'android'){
                                if (sysInfo.platform == p[48496] || sysInfo.platform == p[48497] || sysInfo.platform == p[48498]) {
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
                                            title: p[48499],
                                            content: p[48500],
                                            confirmText: p[48501],
                                            showCancel: false
                                        });
                                    }
                                }
                            } else {
                                self.minPay(data.data);
                            }
                        } else {
                            callbacks[p[48490]] && callbacks[p[48490]](1, { errMsg: data.msg });
                        }
                    } else {
                        callbacks[p[48455]] && callbacks[p[48455]](1, { errMsg: p[48502] });
                    }
                }
            });
        },

        //小游戏支付
        gamePay: function (data) {
            var self = this;
            //游戏币足够，直接扣款
            if (data.buyQuantity <= data.balance) {
                console.log(p[48503]);
                wx.showModal({
                    title: p[48499],
                    content: p[48504] + data.balance + p[48505] + data.buyQuantity + p[48506],
                    showCancel: false,
                    confirmText: p[48501],
                    success: function () {
                        self.gameGoPay(data);
                    }
                });
            } else {
                console.log(p[48507]);
                console.log(data);
                wx.requestMidasPayment({
                    mode: p[48508],
                    env: data.env,
                    offerId: data.offerId,
                    currencyType: data.currencyType,
                    platform: data.platform,
                    buyQuantity: data.buyQuantity,
                    zoneId: data.zoneId,
                    success: function (res) {
                        if (res.errMsg == p[48509]) {
                            self.gameGoPay(data);
                        }
                    },
                    fail: function (res) {
                        if (res.errMsg.indexOf(p[48510]) !== -1) {
                            callbacks[p[48490]] && callbacks[p[48490]](2, { errMsg: p[48511] });
                        } else {
                            callbacks[p[48490]] && callbacks[p[48490]](1, { errMsg: p[48512] + res.errMsg + '(' + res.errCode + ')' });
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
                title: p[48499],
                content: p[48513],
                showCancel: false,
                confirmText: p[48501],
                success: function () {
                    var obj = {
                        showMessageCard: true,
                        sendMessageTitle: p[48514],
                        sendMessageImg: p[48515]
                    };
                    wx.openCustomerServiceConversation(obj);
                }
            });
        },

        gameGoPay: function (data, retry) {
            console.log(p[48516]);
            //请求pay接口
            var self = this;
            var session_key = wx.getStorageSync(p[48479]);
            wx.request({
                url: HOST + p[48517] + config.partner_id + '/' + config.game_pkg + '/',
                method: p[48472],
                dataType: p[25848],
                header: {
                    'content-type': p[48473] // 默认值
                },
                data: {
                    order_id: data.orderId,
                    time: data.time,
                    sign: data.sign,
                    session_key: session_key
                },
                success: function (res) {
                    console.log(p[48518]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        if (res.data.state == 1) {
                            var ret = {
                                cpOrderNo: self.order_data.cpbill,
                                orderNo: data.orderId,
                                amount: self.order_data.price,
                                extension: self.order_data.extension
                            };
                            callbacks[p[48490]] && callbacks[p[48490]](0, ret);
                        } else {
                            callbacks[p[48490]] && callbacks[p[48490]](1, { errMsg: p[48519] });
                        }
                    }
                },
                fail: function () {}
            });
        },

        //创建角色
        logCreateRole: function (data) {
            var uid = wx.getStorageSync(p[48476]);
            var username = wx.getStorageSync(p[48477]);

            var postData = {};
            postData[p[48520]] = uid;
            postData[p[48521]] = username;
            postData[p[30837]] = data.roleid;
            postData[p[48522]] = data.rolelevel;
            postData[p[48523]] = data.rolename;
            postData[p[31510]] = data.serverid;

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
            var uid = wx.getStorageSync(p[48476]);
            var username = wx.getStorageSync(p[48477]);

            var postData = {};
            postData[p[48520]] = uid;
            postData[p[48521]] = username;
            postData[p[30837]] = data.roleid;
            postData[p[48522]] = data.rolelevel;
            postData[p[48523]] = data.rolename;
            postData[p[31510]] = data.serverid;

            if (data.roleid && data.serverid) {
                $aHQV35 = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(p[25730], postData);
        },

        //角色升级
        logRoleUpLevel: function (data) {
            var uid = wx.getStorageSync(p[48476]);
            var username = wx.getStorageSync(p[48477]);

            var postData = {};
            postData[p[48520]] = uid;
            postData[p[48521]] = username;
            postData[p[30837]] = data.roleid;
            postData[p[48522]] = data.rolelevel;
            postData[p[48523]] = data.rolename;
            postData[p[31510]] = data.serverid;

            if (data.roleid && data.serverid) {
                $aHQV35 = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(p[48524], postData);
        },

        //获取唯一设备码（自定义）
        uuid: function (radix, len) {
            var chars = p[48525].split('');
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
            var uuid = wx.getStorageSync(p[48449]);
            var idfv = wx.getStorageSync(p[48450]);
            var ad_code = wx.getStorageSync(p[48452]);

            return {
                game_id: config.game_id,
                game_pkg: config.game_pkg,
                partner_id: config.partner_id,
                ad_code: ad_code,
                uuid: uuid,
                idfv: idfv,
                dname: system.model,
                mac: p[48526],
                net_type: system.wifiSignal == 0 ? '4G' : p[48527],
                os_ver: system.system,
                sdk_ver: system.version, //存放的是微信版本号
                game_ver: game_ver, //存放的是游戏版本号
                device: system.platform == p[48496] ? 1 : 2,
                is_from_min: 1
            };
        },

        //统一发送log
        log: function (type, data) {
            var public_data = this.getPublicData();
            for (var key in data) {
                public_data[key] = data[key];
            }

            console.log(p[48528] + type);
            console.log(public_data);

            wx.request({
                url: HOST + p[48529] + type + p[48530] + encodeURIComponent(JSON.stringify(public_data))
            });
        },

        getDate: function () {
            var date = new Date();
            return date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate();
        },

        downloadClient: function () {
            var openid = wx.getStorageSync(p[48478]);
            var msg = p[48531] + openid;
            wx.showModal({
                title: p[48532],
                content: p[48533],
                showCancel: false,
                confirmText: p[48501],
                success: function () {
                    var obj = {
                        showMessageCard: true,
                        sendMessageTitle: msg,
                        sendMessageImg: p[48534]
                    };
                    wx.openCustomerServiceConversation(obj);
                }
            });
        },

        checkMsg: function (msg, callback) {
            console.log(p[48535]);
            var sdk_token = wx.getStorageSync(p[48475]);
            wx.request({
                url: HOST + p[48536],
                method: p[48472],
                dataType: p[25848],
                header: {
                    'content-type': p[48473] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    content: msg
                },
                success: function (res) {
                    console.log(p[48537]);
                    callback && callback(res.data.code == 0 ? 1 : 0, res.data.msg);
                }
            });
        },

        //新版消息检测接口
        checkMsgV2: function (msg, callback) {
            console.log(p[48535]);
            var sdk_token = wx.getStorageSync(p[48475]);
            wx.request({
                url: HOST + p[48538],
                method: p[48472],
                dataType: p[25848],
                header: {
                    'content-type': p[48473] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    content: msg,
                    scene: 1
                },
                success: function (res) {
                    console.log(p[48537]);
                    callback && callback(res.data.code == 0 ? 1 : 0, res.data.msg);
                }
            });
        },

        // 发送订阅消息
        sendMessage: function (template_id, data, callback) {
            console.log(p[48539]);
            var sdk_token = wx.getStorageSync(p[48475]);
            wx.request({
                url: HOST + p[48540],
                method: p[48472],
                dataType: p[25848],
                header: {
                    'content-type': p[48473] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    template_id: template_id,
                    data: data
                },
                success: function (res) {
                    console.log(p[48541]);
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
    run(p[20366], data, callback);
};
exports.login = function (callback) {
    run(p[48455], '', callback);
};
exports.pay = function (data, callback) {
    run(p[48490], data, callback);
};

exports.logCreateRole = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(p[48542], data);
};
exports.logEnterGame = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };

    run(p[48543], data);
};
exports.logRoleUpLevel = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(p[48544], data);
};

exports.downloadClient = function () {
    run(p[48545]);
};
exports.getConfig = function () {
    return {
        game_id: config.game_id,
        game_pkg: config.game_pkg,
        partner_id: config.partner_id
    };
};
exports.getPublicData = function () {
    run(p[48546]);
};

exports.checkMsg = function (data, callback) {
    run(p[48547], data, callback);
};

exports.checkMsgV2 = function (data, callback) {
    run(p[48548], data, callback);
};

exports.sendMessage = function (template_id, data, callback) {
    run(p[48549], template_id, data, callback);
};