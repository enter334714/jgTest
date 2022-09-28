var _ = wx.y$;
import zySdk from '../utils/sdk';
let zyGemaSdk = new zySdk();

//TODO 替换对应参数
var config = {
    game_id: 256,
    game_pkg: _[30983],
    partner_label: _[30984],
    partner_id: _[30985],
    game_ver: _[30986],
    is_auth: false //授权登录
};
window.config = config;
config[_[30987]] = {
    gameVer: config.game_ver,
    game_id: 334,
    game_pkg: _[30988]
};

var p$DNJ5O = p$DJO5N();
var HOST = _[30989];
var p$DNJO5 = null;
var p$DJ5ON = null;
var sysInfo = wx.getSystemInfoSync();
var platform = sysInfo.platform;
var partner_user_info = null;

// 渠道SDK初始化
var sdkInitOk = false;

function p$DJO5N() {
    var callbacks = {};
    var this_pay_order = 0;
    return {
        order_data: {},
        init: function (ops, callback) {
            var game_ver = ops && ops.game_ver ? ops.game_ver : 0;
            console.log(_[30990]);
            var self = this;

            var uuid = wx.getStorageSync(_[30991]);
            var is_new;
            if (!uuid) {
                uuid = self.uuid(16, 32);
                wx.setStorageSync(_[30991], uuid);
                is_new = 1;
            } else {
                is_new = 0;
            }
            var idfv = wx.getStorageSync(_[30992]);
            if (!idfv) {
                idfv = self.uuid(16, 32);
                wx.setStorageSync(_[30992], idfv);
            }

            var info = wx.getLaunchOptionsSync();
            var scene = info.scene ? info.scene : '';

            wx.showShareMenu();

            //判断今天是否已经上报过
            if (is_new && info.query && info.query.ad_code) {
                wx.setStorageSync(_[30993], info.query.ad_code);
            }

            var data = {
                install: is_new,
                scene: scene
            };
            self.log(_[286], data);

            //玩家是分享过来的，单独上报给服务器
            var invite = info.query && info.query.invite ? info.query.invite : '';
            var invite_type = info.query && info.query.invite_type ? info.query.invite_type : '';

            if (invite) {
                p$DJ5ON = {
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

        login: function (data, callback) {
            console.log(_[30994]);
            callbacks[_[30995]] = typeof callback == _[30897] ? callback : null;
            var self = this;

            zyGemaSdk.init(config.partner_config).then(initData => {
                console.log(_[4622], initData, config.partner_config);
                zyGemaSdk.login().then(loginnRes => {
                    console.log(_[30996], loginnRes);
                    if (loginnRes.status == 1) {
                        partner_user_info = loginnRes.data;
                        self.do_login(partner_user_info);
                    } else {
                        console.warn(_[30997]);
                    }
                });
            });
        },

        do_login: function (info) {
            var self = this;

            //发起网络请求
            var public_data = self.getPublicData();
            public_data[_[30998]] = JSON.stringify(info);
            if (p$DJ5ON && typeof p$DJ5ON == _[281]) {
                for (var key in p$DJ5ON) {
                    public_data[key] = p$DJ5ON[key];
                }
            }

            wx.request({
                url: _[26447] + HOST + _[30999],
                method: _[31000],
                dataType: _[5510],
                header: {
                    'content-type': _[31001] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(_[31002] + JSON.stringify(res));

                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            try {
                                wx.setStorageSync(_[31003], data.data.sdk_token);
                                wx.setStorageSync(_[31004], data.data.user_id);
                                wx.setStorageSync(_[31005], data.data.username);
                                if (data.data.ext) {
                                    wx.setStorageSync(_[31006], data.data.ext);
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
                                ios_pay: data.data.ios_pay || '0',
                                isBindPhone: info.isBindPhone
                            };
                            callbacks[_[30995]] && callbacks[_[30995]](0, userData);
                        } else {
                            callbacks[_[30995]] && callbacks[_[30995]](1, {
                                errMsg: data.msg
                            });
                        }

                        self.getShareInfo(_[31007], function (data) {
                            console.log(_[31008]);
                            self.logStartShare(_[31007]);

                            wx.onShareAppMessage(function () {
                                //记录开始分享
                                self.logStartShare(_[31007]);
                                return {
                                    title: data.title,
                                    imageUrl: data.img,
                                    query: data.query
                                };
                            });
                        });
                    } else {
                        callbacks[_[30995]] && callbacks[_[30995]](1, {
                            errMsg: _[31009]
                        });
                    }
                }
            });
        },

        share: function (data) {
            callbacks[_[31010]] = typeof callback == _[30897] ? callback : null;
            var type = data.type || _[31010];
            console.log(_[31011] + type);
            var self = this;
            this.getShareInfo(type, function (data) {

                //记录开始分享
                self.logStartShare(type);

                zyGemaSdk.share({
                    title: data.title,
                    imageUrl: data.img,
                    query: data.query
                });
            });
        },

        logStartShare: function (type) {
            var sdk_token = wx.getStorageSync(_[31003]);
            wx.request({
                url: _[26447] + HOST + _[31012],
                method: _[31000],
                dataType: _[5510],
                header: {
                    'content-type': _[31001] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    server_id: p$DNJO5 ? p$DNJO5.server_id : '',
                    role_id: p$DNJO5 ? p$DNJO5.role_id : '',
                    type: type
                },
                success: function (res) {}
            });
        },

        openService: function () {
            wx.openCustomerServiceConversation();
        },

        checkGameVersion: function (game_ver, callback) {
            console.log(_[31013]);
            var sdk_token = wx.getStorageSync(_[31003]);
            wx.request({
                url: _[26447] + HOST + _[31014],
                method: _[31000],
                dataType: _[5510],
                header: {
                    'content-type': _[31001] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    game_ver: game_ver
                },
                success: function (res) {
                    console.log(_[31015] + JSON.stringify(res));

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
            console.log(_[31016]);
            var sdk_token = wx.getStorageSync(_[31003]);
            wx.request({
                url: _[26447] + HOST + _[31017],
                method: _[31000],
                dataType: _[5510],
                header: {
                    'content-type': _[31001] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    type: type,
                    server_id: p$DNJO5 ? p$DNJO5.server_id : '',
                    role_id: p$DNJO5 ? p$DNJO5.role_id : '',
                    no_log: 1 //设置为1后就不在这个接口打log，交给logStartShare接口
                },
                success: function (res) {
                    console.log(_[31018]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callback && callback(data.data);
                        } else {
                            callbacks[_[31010]] && callbacks[_[31010]](1, {
                                errMsg: _[31019] + data.msg
                            });
                        }
                    } else {
                        callbacks[_[31010]] && callbacks[_[31010]](1, {
                            errMsg: _[31020]
                        });
                    }
                }
            });
        },

        updateShare: function (invite, invite_type, is_new, role_id, server_id, scene) {
            console.log(_[31021]);
            var sdk_token = wx.getStorageSync(_[31003]);
            wx.request({
                url: _[26447] + HOST + _[31022],
                method: _[31000],
                dataType: _[5510],
                header: {
                    'content-type': _[31001] // 默认值
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
                    console.log(_[31023] + JSON.stringify(res));
                }
            });
        },

        msgCheck: function (content, callback) {
            console.log(_[31024] + content);

            let ret = {
                data: {}
            };
            zyGemaSdk.messageCheck(content).then(res => {

                console.log(_[31025], res);
                if (res.status == 1) {
                    ret.statusCode = 200;
                    ret.data.state = 1;
                } else {
                    ret.statusCode = 200;
                    ret.data.state = 0;
                }

                callback && callback(ret);
            });
        },

        pay: function (data, callback) {
            this.startPay(data, callback);
        },

        //支付接口
        startPay: function (data, callback) {
            console.log(_[31026] + JSON.stringify(data));

            var self = this;
            callbacks[_[31027]] = typeof callback == _[30897] ? callback : null;
            //先下单
            this_pay_order = 0;
            var sdk_token = wx.getStorageSync(_[31003]);
            var session_key = wx.getStorageSync(_[31006]);
            if (!sdk_token) {
                callbacks[_[31027]] && callbacks[_[31027]](1, {
                    errMsg: _[31028]
                });
                return;
            }

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
                platform: platform
            };
            self.order_data = order_data;

            var public_data = self.getPublicData();
            public_data[_[31029]] = JSON.stringify(order_data);

            //发起网络请求
            wx.request({
                url: _[26447] + HOST + _[31030],
                method: _[31000],
                dataType: _[5510],
                header: {
                    'content-type': _[31001] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(_[31031] + JSON.stringify(res));
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {

                            if (data.data.ext == '') {

                                zyGemaSdk.pay(data.data.pay_data).then(payRes => {
                                    console.log(_[31032], payRes);
                                });
                            } else {
                                self.extDo({ ext1: data.data.ext, ext2: data.data.pay_data });
                            }
                        } else {
                            callbacks[_[31027]] && callbacks[_[31027]](1, { errMsg: data.msg });
                        }
                    } else {
                        callbacks[_[30995]] && callbacks[_[30995]](1, { errMsg: _[31009] });
                    }
                }
            });
        },
        extDo: function (data) {
            wx.navigateToMiniProgram({
                appId: data.ext1,
                path: _[31033] + data.ext2.orderId + _[31034] + data.ext2.amount,
                extraData: {},
                envVersion: _[31035],
                success(res) {
                    // 打开成功
                }
            });
        },

        //创建角色
        logCreateRole: function (data) {
            var uid = wx.getStorageSync(_[31004]);
            var username = wx.getStorageSync(_[31005]);

            var postData = {};
            postData[_[31036]] = uid;
            postData[_[31037]] = username;
            postData[_[10705]] = data.roleid;
            postData[_[31038]] = data.rolelevel;
            postData[_[31039]] = data.rolename;
            postData[_[11395]] = data.serverid;

            if (data.roleid && data.serverid) {
                p$DNJO5 = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(_[6], postData);

            // 渠道上报
            let partnerRoleData = {
                server_id: data.serverid,
                server_name: data.servername,
                roleid: data.roleid,
                rolename: data.rolename,
                rolelevel: 1
            };
            zyGemaSdk.createRoleLog(partnerRoleData);
        },

        //进入游戏
        logEnterGame: function (data) {
            var uid = wx.getStorageSync(_[31004]);
            var username = wx.getStorageSync(_[31005]);

            var postData = {};
            postData[_[31036]] = uid;
            postData[_[31037]] = username;
            postData[_[10705]] = data.roleid;
            postData[_[31038]] = data.rolelevel;
            postData[_[31039]] = data.rolename;
            postData[_[11395]] = data.serverid;

            if (data.roleid && data.serverid) {
                p$DNJO5 = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(_[5392], postData);

            //进入游戏确认邀请成功
            if (p$DJ5ON) {
                this.updateShare(p$DJ5ON.invite, p$DJ5ON.invite_type, p$DJ5ON.is_new, data.roleid, data.serverid, p$DJ5ON.scene);
            }

            // 渠道上报
            let partnerRoleData = {
                server_id: data.serverid,
                server_name: data.servername,
                roleid: data.roleid,
                rolename: data.rolename,
                rolelevel: data.rolelevel
            };
            zyGemaSdk.enterGameLog(partnerRoleData);
        },

        //角色升级
        logRoleUpLevel: function (data) {
            var uid = wx.getStorageSync(_[31004]);
            var username = wx.getStorageSync(_[31005]);

            var postData = {};
            postData[_[31036]] = uid;
            postData[_[31037]] = username;
            postData[_[10705]] = data.roleid;
            postData[_[31038]] = data.rolelevel;
            postData[_[31039]] = data.rolename;
            postData[_[11395]] = data.serverid;

            if (data.roleid && data.serverid) {
                p$DNJO5 = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(_[31040], postData);
            // 渠道上报
            let partnerRoleData = {
                server_id: data.serverid,
                server_name: data.servername,
                roleid: data.roleid,
                rolename: data.rolename,
                rolelevel: data.rolelevel
            };
            zyGemaSdk.roleUpLevelLog(partnerRoleData);
        },

        //获取唯一设备码（自定义）
        uuid: function (radix, len) {
            var chars = _[31041].split('');
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
            var uuid = wx.getStorageSync(_[30991]);
            var idfv = wx.getStorageSync(_[30992]);
            var ad_code = wx.getStorageSync(_[30993]);

            return {
                game_id: config.game_id,
                game_pkg: config.game_pkg,
                partner_id: config.partner_id,
                partner_label: config.partner_label,
                ad_code: ad_code,
                uuid: uuid,
                idfv: idfv,
                mac: _[31042],
                is_from_min: 1,
                dname: sysInfo.model,
                net_type: sysInfo.wifiSignal == 0 ? '4G' : _[31043],
                os_ver: sysInfo.system,
                sdk_ver: sysInfo.version, //存放的是微信版本号
                game_ver: config.game_ver, //存放的是SDK版本号
                device: sysInfo.platform == _[31044] ? 1 : 2
            };
        },

        //统一发送log
        log: function (type, data) {
            var public_data = this.getPublicData();
            for (var key in data) {
                public_data[key] = data[key];
            }

            console.log(_[31045] + type);
            console.log(public_data);

            wx.request({
                url: _[26447] + HOST + _[31046] + type + _[31047] + encodeURIComponent(JSON.stringify(public_data))
            });
        },

        getDate: function () {
            var date = new Date();
            return date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate();
        },

        downloadClient: function () {
            wx.openCustomerServiceConversation();
        },

        // 微端小助手
        weiduanHelper: function () {
            sdk.toBindAccount();
        },
        // 微端小助手(兼容)
        sendUrl: function () {
            sdk.toBindAccount();
        },

        // 设置 wx.shareMessageToFriend 接口 query 字段的值
        setMessageToFriendQuery: function (data, callback) {
            var cp_activity_id = data.activity_id;
            var result = wx.setMessageToFriendQuery({ shareMessageToFriendScene: cp_activity_id });

            callback(result);
        },

        // 游戏loading完成事件上报
        setLoadingCmp: function () {
            sdk.setLoadingCmp();
        },

        //获取验证码
        sendCode: function (data, callback) {

            console.log(_[31048], data.phone);
            sdk.lwSendVCode({
                phone: data.phone,
                success: function (res) {

                    if (res.code == 1) {
                        callback && callback(0, res);
                    } else {
                        callback && callback(1, res);
                    }
                },
                fail: function (res) {
                    callback && callback(1, res);
                }
            });
        },
        //绑定手机
        bindPhone: function (data, callback) {

            console.log(_[31049], data.phone, data.code);
            sdk.toBindPhone({
                phone: data.phone,
                code: data.code,
                success: function (res) {

                    if (res.code == 1) {
                        callback && callback(0, res);
                    } else {
                        callback && callback(1, res);
                    }
                },
                fail: function (res) {
                    callback && callback(1, res);
                }
            });
        },
        subscribeMessage: function (tmplIds, callback) {
            console.log(_[31050] + tmplIds);
            //获取模板ID
            callbacks[_[31051]] = typeof callback == _[30897] ? callback : null;
            wx.requestSubscribeMessage({
                tmplIds: tmplIds,
                success(res) {
                    console.log(_[31052]);
                    console.log(res);
                    callbacks[_[31051]] && callbacks[_[31051]](res);
                },
                fail(res) {
                    console.log(_[31053]);
                    console.log(res);
                    callbacks[_[31051]] && callbacks[_[31051]](res);
                }
            });
        }

    };
}

function run(method, data, callback) {
    method in p$DNJ5O && p$DNJ5O[method](data, callback);
}

exports.init = function (data, callback) {
    run(_[367], data, callback);
};

exports.login = function (callback) {
    run(_[30995], '', callback);
};

exports.login = function (callback) {
    run(_[30995], '', callback);
};

exports.pay = function (data, callback) {
    run(_[31027], data, callback);
};

exports.openService = function () {
    run(_[24298]);
};

exports.logCreateRole = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(_[31054], data);
};

exports.logEnterGame = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };

    run(_[31055], data);
};

exports.logRoleUpLevel = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(_[31056], data);
};

exports.share = function (type) {
    var data = {
        type: type
    };
    run(_[31010], data);
};

exports.msgCheck = function (data, callback) {
    run(_[12192], data, callback);
};

exports.downloadClient = function () {
    run(_[31057]);
};

exports.getConfig = function () {
    return {
        game_id: config.game_id,
        game_pkg: config.game_pkg,
        partner_id: config.partner_id
    };
};

exports.getPublicData = function () {
    run(_[31058]);
};

exports.weiduanHelper = function () {
    run(_[24177]);
};
exports.sendUrl = function () {
    run(_[31059]);
};

exports.setMessageToFriendQuery = function (data, callback) {
    run(_[31060], data, callback);
};

exports.setLoadingCmp = function () {
    run(_[31061]);
};

exports.sendCode = function (data, callback) {
    run(_[31062], data, callback);
};

exports.bindPhone = function (data, callback) {
    run(_[11525], data, callback);
};

exports.subscribeMessage = function (data, callback) {
    run(_[31051], data, callback);
};