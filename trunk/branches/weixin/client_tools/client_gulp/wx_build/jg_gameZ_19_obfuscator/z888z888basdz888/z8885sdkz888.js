var u = wx.$x;
import huoSdk from '../utils/huosdk-2.2.1';
//TODO 替换对应参数
var config = {
    game_id: u[1886],
    game_pkg: u[1887],
    partner_label: u[1888],
    partner_id: u[1889],
    game_ver: u[1890],
    is_auth: false, //授权登录
    partner_app_id: 81240824,
    partner_mp_id: u[1891]
};
window.config = config;
var x1G08A6 = x1G86A0();
var HOST = u[1892];
var x1G086A = null;
var x1G8A60 = null;
var sysInfo = wx.getSystemInfoSync();
var platform = sysInfo.platform;
var partner_user_info = null;
var partner_data = null;
function x1G86A0() {
    var callbacks = {};
    return {
        order_data: {},
        init: function (ops, callback) {
            var game_ver = ops && ops.game_ver ? ops.game_ver : 0;
            console.log(u[1893]);
            var self = this;

            var uuid = wx.getStorageSync(u[1894]);
            var is_new;
            if (!uuid) {
                uuid = self.uuid(16, 32);
                wx.setStorageSync(u[1894], uuid);
                is_new = 1;
            } else {
                is_new = 0;
            }
            var idfv = wx.getStorageSync(u[1895]);
            if (!idfv) {
                idfv = self.uuid(16, 32);
                wx.setStorageSync(u[1895], idfv);
            }

            var info = wx.getLaunchOptionsSync();
            var scene = info.scene ? info.scene : '';

            //判断今天是否已经上报过
            if (is_new && info.query && info.query.ad_code) {
                wx.setStorageSync(u[1896], info.query.ad_code);
            }

            var data = {
                install: is_new,
                scene: scene
            };
            self.log(u[1897], data);
            //TODO 替换对应参数


            //玩家是分享过来的，单独上报给服务器
            var invite = info.query && info.query.invite ? info.query.invite : '';
            var invite_type = info.query && info.query.invite_type ? info.query.invite_type : '';

            if (invite) {
                x1G8A60 = {
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
        },

        //TODO 替换联运登录接口
        login: function (data, callback) {
            var self = this;
            console.log(u[1898]);
            callbacks[u[301]] = typeof callback == u[1083] ? callback : null;

            //初始化回调
            huoSdk.init({
                app_id: config.partner_app_id,
                mp_id: config.partner_mp_id
            }).then(res => {
                console.log(u[1899], res);
                wx.showShareMenu({ withShareTicket: true });

                if (config.is_auth) {
                    //授权登录
                    wx.getSetting({
                        success: function (res) {
                            if (res.authSetting[u[1900]]) {
                                //已授权
                                wx.getUserInfo({
                                    success: res => {
                                        console.log(u[1901], res);
                                        huoSdk.updateUserInfo({
                                            data: {
                                                raw_data: res.rawData,
                                                signature: res.signature,
                                                encrypted_data: res.encryptedData,
                                                iv: res.iv
                                            }
                                        });
                                    }
                                });
                                self.weak_login();
                            } else {
                                var system_info = wx.getSystemInfoSync();
                                var screen_width = system_info.screenWidth;
                                var screen_height = system_info.screenHeight;
                                var btn_width = screen_width * 2 / 4;
                                var btn_height = btn_width / 4;
                                var btn_left = (screen_width - btn_width) / 2;
                                var btn_top = screen_height / 2;
                                let btn = wx.createUserInfoButton({
                                    type: u[450],
                                    text: u[1902],
                                    style: {
                                        left: btn_left,
                                        top: btn_top,
                                        width: btn_width,
                                        height: btn_height,
                                        lineHeight: btn_height,
                                        backgroundColor: u[1903],
                                        color: u[638],
                                        textAlign: u[595],
                                        fontSize: 16,
                                        borderRadius: 4
                                    }
                                });

                                btn.onTap(res => {
                                    huoSdk.updateUserInfo({
                                        data: {
                                            raw_data: res.rawData,
                                            signature: res.signature,
                                            encrypted_data: res.encryptedData,
                                            iv: res.iv
                                        }
                                    }).then(res => {
                                        console.log(u[1901], res);
                                        self.weak_login();
                                    });
                                    // 按钮隐藏
                                    btn.hide();
                                });
                            }
                        }
                    });
                } else {
                    self.weak_login();
                }
            });
        },

        weak_login: function () {

            var self = this;
            let opts = wx.getLaunchOptionsSync();
            huoSdk.login({
                data: {
                    // 路径跳转从 state 参数获取，扫码跳转从 scene 参数获取，因此此处需要兼容处理
                    state: opts.query.state || opts.query.scene || ''
                }
            }).then(res => {
                console.log(u[1904], res);
                if (res.code === 200) {
                    self.do_login(res.data);
                } else {
                    callbacks[u[301]] && callbacks[u[301]](1, { errMsg: res.msg });
                }
            });
        },

        do_login: function (info) {
            var self = this;
            partner_data = {
                user_token: info.cp_user_token,
                mem_id: info.mg_mem_id
            };
            var public_data = self.getPublicData();
            public_data[u[1905]] = 1;
            public_data[u[1906]] = JSON.stringify(partner_data);
            if (x1G8A60 && typeof x1G8A60 == u[983]) {
                for (var key in x1G8A60) {
                    public_data[key] = x1G8A60[key];
                }
            }

            //发起网络请求
            wx.request({
                url: u[1907] + HOST + u[1908],
                method: u[263],
                dataType: u[1328],
                header: {
                    'content-type': u[461] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(u[1909], res);
                    if (res.statusCode === 200) {
                        var data = res.data;
                        if (data.state) {
                            try {
                                wx.setStorageSync(u[1910], data.data.sdk_token);
                                wx.setStorageSync(u[1911], data.data.user_id);
                                wx.setStorageSync(u[1912], data.data.username);
                                if (data.data.ext) {
                                    wx.setStorageSync(u[1913], data.data.ext);
                                }
                            } catch (e) {}
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
                            callbacks[u[301]] && callbacks[u[301]](0, userData);
                        } else {
                            callbacks[u[301]] && callbacks[u[301]](1, { errMsg: data.msg });
                        }

                        //登录成功，加载右上角分享数据
                        self.getShareInfo(u[1914], function (data) {
                            console.log(u[1915], data);
                            self.logStartShare(u[1914]);
                            huoSdk.getShareInfo({
                                data: {
                                    path: u[1916]
                                }
                            }).then(res => {
                                console.log(u[1917], res);
                                wx.onShareAppMessage(function () {
                                    self.addShareInfo();
                                    return {
                                        title: res.data.title,
                                        imageUrl: res.data.image,
                                        query: data.query + u[1918] + res.data.state
                                    };
                                });
                            });
                        });
                    } else {
                        callbacks[u[301]] && callbacks[u[301]](1, {
                            errMsg: u[1919]
                        });
                    }
                }
            });
        },

        addShareInfo: function () {
            huoSdk.addShareInfo({
                data: {
                    to_target: 'wx'
                }
            }).then(res => {
                console.log(u[1920], res);
            });
        },

        share: function (data) {
            callbacks[u[414]] = typeof callback == u[1083] ? callback : null;
            var type = data.type || u[414];
            console.log(u[1921] + type);
            var self = this;

            this.getShareInfo(type, function (data) {
                self.logStartShare(type);
                huoSdk.getShareInfo({
                    data: {
                        path: u[1916]
                    }
                }).then(res => {
                    console.log(u[1922], res);
                    self.addShareInfo();
                    wx.shareAppMessage({
                        title: res.data.title,
                        imageUrl: res.data.image,
                        query: data.query + u[1918] + res.data.state
                    });
                });
            });
        },

        logStartShare: function (type) {
            var sdk_token = wx.getStorageSync(u[1910]);
            wx.request({
                url: u[1907] + HOST + u[1923],
                method: u[263],
                dataType: u[1328],
                header: {
                    'content-type': u[461] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    server_id: x1G086A ? x1G086A.server_id : '',
                    role_id: x1G086A ? x1G086A.role_id : '',
                    type: type
                },
                success: function (res) {}
            });
        },

        openService: function () {
            wx.openCustomerServiceConversation();
        },

        checkGameVersion: function (game_ver, callback) {
            console.log(u[1924]);
            var sdk_token = wx.getStorageSync(u[1910]);
            wx.request({
                url: u[1907] + HOST + u[1925],
                method: u[263],
                dataType: u[1328],
                header: {
                    'content-type': u[461] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    game_ver: game_ver
                },
                success: function (res) {
                    console.log(u[1926]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callback && callback(data.data);
                        } else {
                            callback && callback({
                                develop: 0
                            });
                        }
                    } else {
                        callback && callback({
                            develop: 0
                        });
                    }
                }
            });
        },
        getShareInfo: function (type, callback) {
            console.log(u[1922]);
            var sdk_token = wx.getStorageSync(u[1910]);
            wx.request({
                url: u[1907] + HOST + u[1927],
                method: u[263],
                dataType: u[1328],
                header: {
                    'content-type': u[461] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    type: type,
                    server_id: x1G086A ? x1G086A.server_id : '',
                    role_id: x1G086A ? x1G086A.role_id : '',
                    no_log: 1 //设置为1后就不在这个接口打log，交给logStartShare接口
                },
                success: function (res) {
                    console.log(u[1928]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callback && callback(data.data);
                        } else {
                            callbacks[u[414]] && callbacks[u[414]](1, {
                                errMsg: u[1929] + data.msg
                            });
                        }
                    } else {
                        callbacks[u[414]] && callbacks[u[414]](1, {
                            errMsg: u[1930]
                        });
                    }
                }
            });
        },

        updateShare: function (invite, invite_type, is_new, role_id, server_id, scene) {
            console.log(u[1931]);
            var sdk_token = wx.getStorageSync(u[1910]);
            wx.request({
                url: u[1907] + HOST + u[1932],
                method: u[263],
                dataType: u[1328],
                header: {
                    'content-type': u[461] // 默认值
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
                    console.log(u[1933]);
                    console.log(res);
                }
            });
        },

        msgCheck: function (content, callback) {
            console.log(u[1934]);
            var data = {
                statusCode: 200,
                data: { state: 0 }
            };
            huoSdk.checkMsg({
                data: {
                    content: content
                }
            }).then(res => {
                console.log(u[1935], res);
                data.data.state = res.code === 200 ? 1 : 0;
                callback && callback(data);
            }, err => {
                console.log(u[1935], err);
                data.data.state = 0;
                callback && callback(data);
            });
        },

        pay: function (data, callback) {
            var self = this;
            self.startPay(data, callback);
        },

        //支付接口
        startPay: function (data, callback) {
            console.log(u[1936], data);
            var self = this;
            callbacks[u[390]] = typeof callback == u[1083] ? callback : null;
            //先下单
            var sdk_token = wx.getStorageSync(u[1910]);
            var session_key = wx.getStorageSync(u[1913]);
            if (!sdk_token && !session_key) {
                callbacks[u[390]] && callbacks[u[390]](1, { errMsg: u[1937] });
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
            public_data[u[1938]] = JSON.stringify(order_data);
            public_data[u[1905]] = 1;

            //发起网络请求
            wx.request({
                url: u[1907] + HOST + u[1939],
                method: u[263],
                dataType: u[1328],
                header: {
                    'content-type': u[461] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(u[1940]);
                    console.log(res);
                    if (res.statusCode === 200) {
                        var data = res.data;
                        if (data.state && data.data.pay_data) {
                            //TODO 替换对应方法
                            console.log(u[1941] + JSON.stringify(data.data.pay_data));
                            if (data.data.ext == '') {
                                huoSdk.checkPay({
                                    data: data.data.pay_data
                                }).then(res => {
                                    console.log(u[1942], res);
                                    if (res.code !== u[1943]) {
                                        callbacks[u[390]] && callbacks[u[390]](1, { errMsg: res.msg });
                                    }
                                });
                            } else {
                                self.extDo({ ext1: data.data.ext, ext2: data.data.pay_data });
                            }
                        } else {
                            callbacks[u[390]] && callbacks[u[390]](1, { errMsg: data.errMsg });
                        }
                    } else {
                        callbacks[u[301]] && callbacks[u[301]](1, { errMsg: u[1919] });
                    }
                }
            });
        },
        extDo: function (data) {
            wx.navigateToMiniProgram({
                appId: data.ext1,
                path: u[1944] + data.ext2.orderId + u[1945] + data.ext2.amount / 100,
                extraData: {},
                envVersion: u[1946],
                success(res) {
                    // 打开成功
                }
            });
        },
        logCreateRole: function (data, callback) {
            var uid = wx.getStorageSync(u[1911]);
            var username = wx.getStorageSync(u[1912]);

            var postData = {};
            postData[u[1947]] = uid;
            postData[u[1948]] = username;
            postData[u[1949]] = data.roleid;
            postData[u[1950]] = data.rolelevel;
            postData[u[1951]] = data.rolename;
            postData[u[25]] = data.serverid;

            if (data.roleid && data.serverid) {
                x1G086A = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }
            this.log(u[557], postData);

            this.upRoleInfo(2, data);
        },

        //进入游戏
        logEnterGame: function (data, callback) {
            var uid = wx.getStorageSync(u[1911]);
            var username = wx.getStorageSync(u[1912]);

            var postData = {};
            postData[u[1947]] = uid;
            postData[u[1948]] = username;
            postData[u[1949]] = data.roleid;
            postData[u[1950]] = data.rolelevel;
            postData[u[1951]] = data.rolename;
            postData[u[25]] = data.serverid;

            if (data.roleid && data.serverid) {
                x1G086A = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(u[1952], postData);

            this.upRoleInfo(1, data);

            //进入游戏确认邀请成功
            if (x1G8A60) {
                this.updateShare(x1G8A60.invite, x1G8A60.invite_type, x1G8A60.is_new, data.roleid, data.serverid, x1G8A60.scene);
            }
        },

        //角色升级
        logRoleUpLevel: function (data) {
            var uid = wx.getStorageSync(u[1911]);
            var username = wx.getStorageSync(u[1912]);
            var postData = {};
            postData[u[1947]] = uid;
            postData[u[1948]] = username;
            postData[u[1949]] = data.roleid;
            postData[u[1950]] = data.rolelevel;
            postData[u[1951]] = data.rolename;
            postData[u[25]] = data.serverid;

            if (data.roleid && data.serverid) {
                x1G086A = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }
            this.log(u[1953], postData);

            this.upRoleInfo(3, data);
        },

        // 角色上报
        upRoleInfo: function (type, data) {
            var roleInfo = {
                'role-event': type,
                'role-role_id': data.roleid,
                'role-role_name': data.rolename,
                'role-role_level': data.rolelevel,
                'role-server_id': data.serverid,
                'role-server_name': data.servername,
                'role-combat_num': data.rolepower ? data.rolepower : 0,
                'role-role_vip': 0
            };
            huoSdk.updateRole({
                data: roleInfo
            }).then(res => {
                console.log(u[1954], res);
            }, err => {
                console.log(u[1954], err);
            });

            if (data.callback) {
                huoSdk.userCheckpay({
                    data: {
                        'role-server_id': data.serverid,
                        'role-role_id': data.roleid,
                        'role-role_level': data.rolelevel,
                        'role-role_vip': 0,
                        'role-combat_num': data.rolepower ? data.rolepower : 0
                    }
                }).then(res => {
                    console.log(u[1955], res);
                    if (res.code === 200) {
                        if (res.data.check === 3) {
                            data.callback({ 'show_pay': 0 });
                        } else {
                            data.callback({ 'show_pay': 1 });
                        }
                    } else {
                        data.callback({ 'show_pay': 1 });
                    }
                }, err => {
                    console.log(u[1955], err);
                    data.callback({ 'show_pay': 1 });
                });
            }
        },

        subscribe: function () {
            huoSdk.subscribe().then(res => {
                console.log(u[1956], res);
            }).catch(err => {
                console.log(u[1956], err);
            });
        },

        //获取唯一设备码（自定义）
        uuid: function (radix, len) {
            var chars = u[1957].split('');
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
            var uuid = wx.getStorageSync(u[1894]);
            var idfv = wx.getStorageSync(u[1895]);
            var ad_code = wx.getStorageSync(u[1896]);

            return {
                game_id: config.game_id,
                game_pkg: config.game_pkg,
                partner_id: config.partner_id,
                partner_label: config.partner_label,
                ad_code: ad_code,
                uuid: uuid,
                idfv: idfv,
                dname: system.model,
                mac: u[1958],
                net_type: system.wifiSignal == 0 ? '4G' : u[1959],
                os_ver: system.system,
                sdk_ver: system.version, //存放的是微信版本号
                game_ver: config.game_ver, //存放的是SDK版本号
                device: system.platform == u[124] ? 1 : 2
            };
        },

        //统一发送log
        log: function (type, data) {
            var public_data = this.getPublicData();
            for (var key in data) {
                public_data[key] = data[key];
            }

            console.log(u[1960] + type);
            console.log(public_data);

            wx.request({
                url: u[1907] + HOST + u[1961] + type + u[1962] + encodeURIComponent(JSON.stringify(public_data))
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
            console.log(u[1963] + tmplIds);
            //获取模板ID
            callbacks[u[427]] = typeof callback == u[1083] ? callback : null;
            wx.requestSubscribeMessage({
                tmplIds: tmplIds,
                success(res) {
                    console.log(u[1964]);
                    console.log(res);
                    callbacks[u[427]] && callbacks[u[427]](res);
                },
                fail(res) {
                    console.log(u[1965]);
                    console.log(res);
                    callbacks[u[427]] && callbacks[u[427]](res);
                }
            });
        },
        //获取验证码
        sendCode: function (data, callback) {

            console.log(u[1966], data.phone);
            huoSdk.sendCode({
                data: {
                    "sms-type": 6,
                    "sms-mobile": data.phone
                }
            }).then(res => {
                if (res.code == 200) {
                    callback && callback(0, res);
                } else {
                    callback && callback(1, res);
                }
            }).catch(err => {
                callback && callback(1, err);
            });
        },
        //绑定手机
        bindPhone: function (data, callback) {

            console.log(u[1967], data.phone, data.code);
            huoSdk.bindPhone({
                data: {
                    "sms-type": 6,
                    "sms-mobile": data.phone,
                    "sms-code": data.code
                }
            }).then(res => {
                if (res.code == 200) {
                    callback && callback(0, res);
                } else {
                    callback && callback(1, res);
                }
            }).catch(err => {
                callback && callback(1, err);
            });
        }
    };
}

function run(method, data, callback) {
    method in x1G08A6 && x1G08A6[method](data, callback);
}

exports.init = function (data, callback) {
    run(u[276], data, callback);
};

exports.login = function (callback) {
    run(u[301], '', callback);
};

exports.login = function (callback) {
    run(u[301], '', callback);
};
exports.pay = function (data, callback) {
    run(u[390], data, callback);
};
exports.openService = function () {
    run(u[415]);
};
exports.logCreateRole = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(u[405], data);
};
exports.logEnterGame = function (serverId, serverName, roleId, roleName, roleLevel, rolecreatetime, extra) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel,
        rolecreatetime: rolecreatetime,
        rolepower: extra?(extra.rolepower || 0):0,
        callback: extra?extra.callback:null
    };

    run(u[408], data);
};

exports.logRoleUpLevel = function (serverId, serverName, roleId, roleName, roleLevel, rolecreatetime, extra) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel,
        rolecreatetime: rolecreatetime,
        rolepower: extra?extra.rolepower:0,
        callback: extra?extra.callback:null
    };
    run(u[411], data);
};

exports.share = function (type) {
    var data = {
        type: type
    };
    run(u[414], data);
};

exports.msgCheck = function (data, callback) {
    run(u[233], data, callback);
};
exports.downloadClient = function () {
    run(u[1968]);
};
exports.getConfig = function () {
    return {
        game_id: config.game_id,
        game_pkg: config.game_pkg,
        partner_id: config.partner_id
    };
};
exports.subscribe = function () {
    run(u[1969]);
};
exports.subscribeMessage = function (data, callback) {
    run(u[427], data, callback);
};

exports.sendCode = function (data, callback) {
    run(u[1970], data, callback);
};

exports.bindPhone = function (data, callback) {
    run(u[1971], data, callback);
};