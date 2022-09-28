var q1 = wx.f$;
let XLGame = require(q1[0]);

//TODO 替换对应参数
var config = {
    game_id: q1[1],
    game_pkg: q1[2],
    partner_label: q1[3],
    partner_id: q1[4],
    game_ver: q1[5],
    is_auth: true, //授权登录
    partner_game_id: 2000046,
    partner_game_key: q1[6]
};
window.config = config;
var _lMO1I6 = _lM16IO();
var HOST = q1[7];
var _lMO16I = null;
var _lM1I6O = null;
var partner_data = {};

function _lM16IO() {
    var callbacks = {};
    return {
        order_data: {},
        init: function (ops, callback) {
            var game_ver = ops && ops.game_ver ? ops.game_ver : 0;
            console.log(q1[8]);
            var self = this;

            var uuid = wx.getStorageSync(q1[9]);
            var is_new;
            if (!uuid) {
                uuid = self.uuid(16, 32);
                wx.setStorageSync(q1[9], uuid);
                is_new = 1;
            } else {
                is_new = 0;
            }
            var idfv = wx.getStorageSync(q1[10]);
            if (!idfv) {
                idfv = self.uuid(16, 32);
                wx.setStorageSync(q1[10], idfv);
            }

            var info = wx.getLaunchOptionsSync();
            var scene = info.scene ? info.scene : '';

            //判断今天是否已经上报过
            if (is_new && info.query && info.query.ad_code) {
                wx.setStorageSync(q1[11], info.query.ad_code);
            }

            var data = {
                install: is_new,
                scene: scene
            };
            self.log(q1[12], data);
            //TODO 替换对应参数
            //初始化回调
            XLGame.onActiveCallback = data => {
                console.log(q1[13], data);
            };
            XLGame.init(config.partner_game_id, config.partner_game_key, config.game_ver);
            var sdkInterface = XLGame.sdkInterface;
            console.log(q1[14], sdkInterface);

            //玩家是分享过来的，单独上报给服务器
            var invite = info.query && info.query.invite ? info.query.invite : '';
            var invite_type = info.query && info.query.invite_type ? info.query.invite_type : '';

            if (invite) {
                _lM1I6O = {
                    invite: invite,
                    invite_type: invite_type,
                    is_new: is_new,
                    scene: scene
                };
            }

            //判断版本号
            if (game_ver) {
                this.checkGameVersion(game_ver, function (data) {
                    data.show_pay = sdkInterface.canPay ? 1 : 0;
                    callback && callback(data);
                });
            }
        },

        //TODO 替换联运登录接口
        login: function (data, callback) {
            var self = this;
            console.log(q1[15]);
            callbacks[q1[16]] = typeof callback == q1[17] ? callback : null;
            if (XLGame.sdkInterface.userInfo) {
                //授权登录
                wx.getSetting({
                    success: function (res) {
                        if (res.authSetting[q1[18]]) {
                            //已授权
                            self.weak_login();
                        } else {
                            XLGame.onUserInfoCallback = data => {
                                console.log(q1[19], data);
                                if (data.status == '1') {
                                    self.do_login(data.data);
                                } else {
                                    callback && callback(1, { errMsg: data.msg });
                                }
                            };
                            var system_info = wx.getSystemInfoSync();
                            var screen_width = system_info.screenWidth;
                            var screen_height = system_info.screenHeight;
                            var btn_width = screen_width * 2 / 4;
                            var btn_height = btn_width / 4;
                            var btn_left = (screen_width - btn_width) / 2;
                            var btn_top = screen_height / 2;
                            let btn = wx.createUserInfoButton({
                                type: q1[20],
                                text: q1[21],
                                style: {
                                    left: btn_left,
                                    top: btn_top,
                                    width: btn_width,
                                    height: btn_height,
                                    lineHeight: btn_height,
                                    backgroundColor: q1[22],
                                    color: q1[23],
                                    textAlign: q1[24],
                                    fontSize: 16,
                                    borderRadius: 4
                                }
                            });

                            btn.onTap(res => {
                                XLGame.getUserInfo(res); //授权成功后res回传回来
                                // 按钮隐藏
                                btn.hide();
                            });
                        }
                    }
                });
            } else {
                self.weak_login();
            }
        },

        weak_login: function () {
            var self = this;
            XLGame.onLoginCallback = data => {
                console.log(q1[25], data);
                if (data.status == '1') {
                    self.do_login(data.data);
                } else {
                    callbacks[q1[16]] && callbacks[q1[16]](1, { errMsg: data.msg });
                }
            };

            XLGame.login();
        },

        do_login: function (info) {
            var self = this;
            partner_data = {
                uid: info.uid,
                timeStamp: info.timeStamp,
                sign: info.sign
            };
            var public_data = self.getPublicData();
            public_data[q1[26]] = 1;
            public_data[q1[27]] = JSON.stringify(partner_data);
            if (_lM1I6O && typeof _lM1I6O == q1[28]) {
                for (var key in _lM1I6O) {
                    public_data[key] = _lM1I6O[key];
                }
            }

            //发起网络请求
            wx.request({
                url: q1[29] + HOST + q1[30],
                method: q1[31],
                dataType: q1[32],
                header: {
                    'content-type': q1[33] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(q1[34], res);
                    if (res.statusCode === 200) {
                        var data = res.data;
                        if (data.state) {
                            try {
                                wx.setStorageSync(q1[35], data.data.sdk_token);
                                wx.setStorageSync(q1[36], data.data.user_id);
                                wx.setStorageSync(q1[37], data.data.username);
                                if (data.data.ext) {
                                    wx.setStorageSync(q1[38], data.data.ext);
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
                            callbacks[q1[16]] && callbacks[q1[16]](0, userData);
                        } else {
                            callbacks[q1[16]] && callbacks[q1[16]](1, { errMsg: data.msg });
                        }

                        //登录成功，加载右上角分享数据
                        self.getShareInfo(q1[39], function (data) {
                            console.log(q1[40]);
                            wx.onShareAppMessage(function () {
                                //记录开始分享
                                self.logStartShare(q1[39]);
                                return {
                                    title: data.title,
                                    imageUrl: data.img,
                                    query: data.query
                                };
                            });
                        });
                    } else {
                        callbacks[q1[16]] && callbacks[q1[16]](1, {
                            errMsg: q1[41]
                        });
                    }
                }
            });
        },

        share: function (data) {
            callbacks[q1[42]] = typeof callback == q1[17] ? callback : null;
            var type = data.type || q1[42];
            console.log(q1[43] + type);
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

        //获取公众号
        pubSubscribe: function () {
            if (XLGame.sdkInterface.subscribe) {
                XLGame.subscribe();
            } else {
                wx.showToast({
                    title: q1[44]
                });
            }
        },

        logStartShare: function (type) {
            var sdk_token = wx.getStorageSync(q1[35]);
            wx.request({
                url: q1[29] + HOST + q1[45],
                method: q1[31],
                dataType: q1[32],
                header: {
                    'content-type': q1[33] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    server_id: _lMO16I ? _lMO16I.server_id : '',
                    role_id: _lMO16I ? _lMO16I.role_id : '',
                    type: type
                },
                success: function (res) {}
            });
        },

        openService: function () {
            // wx.openCustomerServiceConversation();

            if (XLGame.sdkInterface.openCustomerService) {
                XLGame.openCustomerService();
            } else {
                wx.showToast({
                    title: q1[46]
                });
            }
        },

        checkGameVersion: function (game_ver, callback) {
            console.log(q1[47]);
            var sdk_token = wx.getStorageSync(q1[35]);
            wx.request({
                url: q1[29] + HOST + q1[48],
                method: q1[31],
                dataType: q1[32],
                header: {
                    'content-type': q1[33] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    game_ver: game_ver
                },
                success: function (res) {
                    console.log(q1[49]);
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
            console.log(q1[50]);
            var sdk_token = wx.getStorageSync(q1[35]);
            wx.request({
                url: q1[29] + HOST + q1[51],
                method: q1[31],
                dataType: q1[32],
                header: {
                    'content-type': q1[33] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    type: type,
                    server_id: _lMO16I ? _lMO16I.server_id : '',
                    role_id: _lMO16I ? _lMO16I.role_id : '',
                    no_log: 1 //设置为1后就不在这个接口打log，交给logStartShare接口
                },
                success: function (res) {
                    console.log(q1[52]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callback && callback(data.data);
                        } else {
                            callbacks[q1[42]] && callbacks[q1[42]](1, {
                                errMsg: q1[53] + data.msg
                            });
                        }
                    } else {
                        callbacks[q1[42]] && callbacks[q1[42]](1, {
                            errMsg: q1[54]
                        });
                    }
                }
            });
        },

        updateShare: function (invite, invite_type, is_new, role_id, server_id, scene) {
            console.log(q1[55]);
            var sdk_token = wx.getStorageSync(q1[35]);
            wx.request({
                url: q1[29] + HOST + q1[56],
                method: q1[31],
                dataType: q1[32],
                header: {
                    'content-type': q1[33] // 默认值
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
                    console.log(q1[57]);
                    console.log(res);
                }
            });
        },

        msgCheck: function (content, callback) {
            console.log(q1[58]);
            XLGame.onMsgSecCheckCallback = data => {
                let ret = {
                    data: {}
                };
                if (data.code == 100) {
                    ret.statusCode = 200;
                    ret.data.state = 1;
                } else {
                    ret.statusCode = 200;
                    ret.data.state = 0;
                }
                callback && callback(ret);
            };
            XLGame.msgSecCheck(1, content);
        },

        pay: function (data, callback) {
            var self = this;
            self.startPay(data, callback);
        },

        //支付接口
        startPay: function (data, callback) {
            console.log(q1[59], data);
            var self = this;
            callbacks[q1[60]] = typeof callback == q1[17] ? callback : null;
            //先下单
            var sdk_token = wx.getStorageSync(q1[35]);
            var session_key = wx.getStorageSync(q1[38]);
            if (!sdk_token && !session_key) {
                callbacks[q1[60]] && callbacks[q1[60]](1, { errMsg: q1[61] });
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
            public_data[q1[62]] = JSON.stringify(order_data);
            public_data[q1[26]] = 1;

            //发起网络请求
            wx.request({
                url: q1[29] + HOST + q1[63],
                method: q1[31],
                dataType: q1[32],
                header: {
                    'content-type': q1[33] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(q1[64]);
                    console.log(res);
                    if (res.statusCode === 200) {
                        var data = res.data;
                        if (data.state && data.data.pay_data) {
                            //TODO 替换对应方法
                            console.log(q1[65] + JSON.stringify(data.data.pay_data));
                            if (data.data.ext == '') {
                                XLGame.onPayCallback = data => {
                                    console.log(q1[66], data);
                                    if (data.status != '1') {
                                        callbacks[q1[60]] && callbacks[q1[60]](1, { errMsg: data.msg });
                                    }
                                };
                                XLGame.pay(data.data.pay_data);
                            } else {
                                self.extDo({ ext1: data.data.ext, ext2: data.data.pay_data });
                            }
                        } else {
                            callbacks[q1[60]] && callbacks[q1[60]](1, { errMsg: data.errMsg });
                        }
                    } else {
                        callbacks[q1[16]] && callbacks[q1[16]](1, { errMsg: q1[41] });
                    }
                }
            });
        },

        extDo: function (data) {
            wx.navigateToMiniProgram({
                appId: data.ext1,
                path: q1[67] + data.ext2.pext + q1[68] + data.ext2.money,
                extraData: {},
                envVersion: q1[69],
                success(res) {
                    // 打开成功
                }
            });
        },

        logCreateRole: function (data) {
            console.log(q1[70]);
            var uid = wx.getStorageSync(q1[36]);
            var username = wx.getStorageSync(q1[37]);

            var postData = {};
            postData[q1[71]] = uid;
            postData[q1[72]] = username;
            postData[q1[73]] = data.roleid;
            postData[q1[74]] = data.rolelevel;
            postData[q1[75]] = data.rolename;
            postData[q1[76]] = data.serverid;

            if (data.roleid && data.serverid) {
                _lMO16I = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }
            this.log(q1[77], postData);

            this.upRoleInfo(2, data);
        },

        //进入游戏
        logEnterGame: function (data) {
            console.log(q1[78]);
            var uid = wx.getStorageSync(q1[36]);
            var username = wx.getStorageSync(q1[37]);

            var postData = {};
            postData[q1[71]] = uid;
            postData[q1[72]] = username;
            postData[q1[73]] = data.roleid;
            postData[q1[74]] = data.rolelevel;
            postData[q1[75]] = data.rolename;
            postData[q1[76]] = data.serverid;

            if (data.roleid && data.serverid) {
                _lMO16I = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(q1[79], postData);

            this.upRoleInfo(1, data);

            //进入游戏确认邀请成功
            if (_lM1I6O) {
                this.updateShare(_lM1I6O.invite, _lM1I6O.invite_type, _lM1I6O.is_new, data.roleid, data.serverid, _lM1I6O.scene);
            }
        },

        //角色升级
        logRoleUpLevel: function (data) {
            console.log(q1[80]);
            var uid = wx.getStorageSync(q1[36]);
            var username = wx.getStorageSync(q1[37]);

            var postData = {};
            postData[q1[71]] = uid;
            postData[q1[72]] = username;
            postData[q1[73]] = data.roleid;
            postData[q1[74]] = data.rolelevel;
            postData[q1[75]] = data.rolename;
            postData[q1[76]] = data.serverid;

            this.log(q1[81], postData);

            if (data.roleid && data.serverid) {
                _lMO16I = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.upRoleInfo(4, data);
        },

        // 角色上报
        upRoleInfo: function (type, data) {
            var roleInfo = {
                type: type,
                gameAccountId: partner_data.uid,
                roleId: data.roleid,
                roleName: data.rolename,
                level: data.rolelevel,
                serverId: data.serverid,
                serverName: data.servername,
                rolePower: data.rolepower ? data.rolepower : 0,
                vipLevel: 0,
                region: "0",
                extend1: "", //扩展参数1
                extend2: "" //扩展参数2
            };
            console.log(q1[82] + JSON.stringify(roleInfo));
            XLGame.pushData(roleInfo);
        },

        //获取唯一设备码（自定义）
        uuid: function (radix, len) {
            var chars = q1[83].split('');
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
            var uuid = wx.getStorageSync(q1[9]);
            var idfv = wx.getStorageSync(q1[10]);
            var ad_code = wx.getStorageSync(q1[11]);

            return {
                game_id: config.game_id,
                game_pkg: config.game_pkg,
                partner_id: config.partner_id,
                partner_label: config.partner_label,
                ad_code: ad_code,
                uuid: uuid,
                idfv: idfv,
                dname: system.model,
                mac: q1[84],
                net_type: system.wifiSignal == 0 ? '4G' : q1[85],
                os_ver: system.system,
                sdk_ver: system.version, //存放的是微信版本号
                game_ver: config.game_ver, //存放的是SDK版本号
                device: system.platform == q1[86] ? 1 : 2
            };
        },

        //统一发送log
        log: function (type, data) {
            var public_data = this.getPublicData();
            for (var key in data) {
                public_data[key] = data[key];
            }

            console.log(q1[87] + type);
            console.log(public_data);

            wx.request({
                url: q1[29] + HOST + q1[88] + type + q1[89] + encodeURIComponent(JSON.stringify(public_data))
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
            console.log(q1[90] + tmplIds);
            //获取模板ID
            callbacks[q1[91]] = typeof callback == q1[17] ? callback : null;
            wx.requestSubscribeMessage({
                tmplIds: tmplIds,
                success(res) {
                    console.log(q1[92]);
                    console.log(res);
                    callbacks[q1[91]] && callbacks[q1[91]](res);
                },
                fail(res) {
                    console.log(q1[93]);
                    console.log(res);
                    callbacks[q1[91]] && callbacks[q1[91]](res);
                }
            });
        },

        // 引入悬浮窗
        floatingWindow: function (this_obj) {
            require(q1[94]);
            var sdkFloat = new SdkFloat();
            sdkFloat.createFloatIcon(this_obj);
        }
    };
}

function run(method, data, callback) {
    method in _lMO1I6 && _lMO1I6[method](data, callback);
}

exports.init = function (data, callback) {
    run(q1[95], data, callback);
};

exports.login = function (callback) {
    run(q1[16], '', callback);
};

exports.login = function (callback) {
    run(q1[16], '', callback);
};

exports.pay = function (data, callback) {
    run(q1[60], data, callback);
};

exports.openService = function () {
    run(q1[96]);
};

exports.logCreateRole = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(q1[97], data);
};

exports.logEnterGame = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };

    run(q1[98], data);
};

exports.logRoleUpLevel = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(q1[99], data);
};

exports.pubSubscribe = function () {
    run(q1[100]);
};

exports.share = function (type) {
    var data = {
        type: type
    };
    run(q1[42], data);
};

exports.msgCheck = function (data, callback) {
    run(q1[101], data, callback);
};

exports.downloadClient = function () {
    run(q1[102]);
};

exports.getConfig = function () {
    return {
        game_id: config.game_id,
        game_pkg: config.game_pkg,
        partner_id: config.partner_id
    };
};

exports.getPublicData = function () {
    run(q1[103]);
};

exports.floatingWindow = function (this_obj) {
    run(q1[104], this_obj);
};
exports.subscribeMessage = function (data, callback) {
    run(q1[91], data, callback);
};