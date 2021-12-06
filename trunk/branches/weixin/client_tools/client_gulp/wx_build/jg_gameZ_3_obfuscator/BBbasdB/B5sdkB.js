var D = wx.$b;

import test from "../untils/ddtSDKPlat.js";
var config = {
    game_id: D[500899],
    game_pkg: D[500900],
    partner_label: D[500901],
    partner_id: D[500902],
    game_ver: D[500903], //666-多梦江湖
    platId: 1000,
    gameId: 272,
    channelVer: D[500904],
    mode: 0,
    is_auth: true //授权登录
};
window.config = config;
var b1FV$O1 = b1F$1OV();
var HOST = D[500905];
var b1FV$1O = null;
var b1F$O1V = null;
var partner_data = {};

function b1F$1OV() {
    var callbacks = {};
    return {
        order_data: {},
        init: function (ops, callback) {
            var game_ver = ops && ops.game_ver ? ops.game_ver : 0;
            console.log(D[500906]);
            var self = this;
            var uuid = wx.getStorageSync(D[500907]);
            var is_new;
            if (!uuid) {
                uuid = self.uuid(16, 32);
                wx.setStorageSync(D[500907], uuid);
                is_new = 1;
            } else {
                is_new = 0;
            }
            var idfv = wx.getStorageSync(D[500908]);
            if (!idfv) {
                idfv = self.uuid(16, 32);
                wx.setStorageSync(D[500908], idfv);
            }

            var info = wx.getLaunchOptionsSync();
            var scene = info.scene ? info.scene : '';

            //判断今天是否已经上报过
            if (is_new && info.query && info.query.ad_code) {
                wx.setStorageSync(D[500909], info.query.ad_code);
            }

            var data = {
                install: is_new,
                scene: scene
            };
            self.log(D[500910], data);
            //TODO 替换对应参数
            var sdkCallback = function (code, data) {
                switch (code) {
                    case D[500911]:
                        // 初始化成功
                        console.log(D[500912], code, data);
                        break;
                    case D[500913]:
                        // 初始化失败
                        console.log(D[500914], code, data);
                        break;
                    case D[500915]:
                        // 登录成功
                        console.log(D[500916], code, data);
                        self.do_login(data);
                        // 登录成功后会返回uname、gameToken、time、sign；CP拿这几个字段进行登录校验
                        break;
                    case D[500917]:
                        //登录失败
                        console.log(D[500918], code, data);
                        callbacks[D[500919]] && callbacks[D[500919]](1, {
                            errMsg: data.msg
                        });
                        break;
                    case D[500920]:
                        // 支付成功（支付以服务端返回为准）
                        console.log(D[500921], code, data);
                        break;
                    case D[500922]:
                        // 支付失败
                        console.log(D[500923], code, data);
                        callbacks[D[500924]] && callbacks[D[500924]](1, {
                            errMsg: data.errMsg
                        });
                        break;
                }
            };

            ddtSDKPlat.init({
                platId: 1000,
                gameId: 272,
                channelVer: D[500904],
                mode: 0
            }, sdkCallback, true);

            wx.showShareMenu({ withShareTicket: true });

            console.log(D[500925] + ddtSDKPlat.version);

            //玩家是分享过来的，单独上报给服务器
            var invite = info.query && info.query.invite ? info.query.invite : '';
            var invite_type = info.query && info.query.invite_type ? info.query.invite_type : '';

            if (invite) {
                b1F$O1V = {
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
            console.log(D[500926]);
            callbacks[D[500919]] = typeof callback == D[500126] ? callback : null;
        },

        do_login: function (info) {
            var self = this;
            partner_data = {
                uid: info.uid,
                gameToken: info.gameToken,
                time: info.time,
                sign: info.sign
            };
            var public_data = self.getPublicData();
            public_data[D[500927]] = 1;
            public_data[D[500928]] = JSON.stringify(partner_data);
            if (b1F$O1V && typeof b1F$O1V == D[500007]) {
                for (var key in b1F$O1V) {
                    public_data[key] = b1F$O1V[key];
                }
            }

            //发起网络请求
            wx.request({
                url: D[500929] + HOST + D[500930],
                method: D[500931],
                dataType: D[500391],
                header: {
                    'content-type': D[500932] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(D[500933]);
                    console.log(res);
                    if (res.statusCode === 200) {
                        var data = res.data;
                        if (data.state) {
                            try {
                                wx.setStorageSync(D[500934], data.data.sdk_token);
                                wx.setStorageSync(D[500935], data.data.user_id);
                                wx.setStorageSync(D[500936], data.data.username);
                                if (data.data.ext) {
                                    wx.setStorageSync(D[500937], data.data.ext);
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
                            callbacks[D[500919]] && callbacks[D[500919]](0, userData);
                        } else {
                            callbacks[D[500919]] && callbacks[D[500919]](1, {
                                errMsg: data.msg
                            });
                        }

                        //登录成功，加载右上角分享数据
                        self.getShareInfo(D[500938], function (data) {
                            console.log(D[500939]);
                            wx.onShareAppMessage(function () {
                                //记录开始分享
                                self.logStartShare(D[500938]);
                                return {
                                    title: data.title,
                                    imageUrl: data.img,
                                    query: data.query
                                };
                            });
                        });
                    } else {
                        callbacks[D[500919]] && callbacks[D[500919]](1, {
                            errMsg: D[500940]
                        });
                    }
                }
            });
        },

        share: function (data) {
            callbacks[D[500941]] = typeof callback == D[500126] ? callback : null;
            var type = data.type || D[500941];
            console.log(D[500942] + type);
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
            var sdk_token = wx.getStorageSync(D[500934]);
            wx.request({
                url: D[500929] + HOST + D[500943],
                method: D[500931],
                dataType: D[500391],
                header: {
                    'content-type': D[500932] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    server_id: b1FV$1O ? b1FV$1O.server_id : '',
                    role_id: b1FV$1O ? b1FV$1O.role_id : '',
                    type: type
                },
                success: function (res) {}
            });
        },

        openService: function () {
            wx.openCustomerServiceConversation();
        },

        checkGameVersion: function (game_ver, callback) {
            console.log(D[500944]);
            var sdk_token = wx.getStorageSync(D[500934]);
            wx.request({
                url: D[500929] + HOST + D[500945],
                method: D[500931],
                dataType: D[500391],
                header: {
                    'content-type': D[500932] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    game_ver: game_ver
                },
                success: function (res) {
                    console.log(D[500946]);
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
            console.log(D[500947]);
            var sdk_token = wx.getStorageSync(D[500934]);
            wx.request({
                url: D[500929] + HOST + D[500948],
                method: D[500931],
                dataType: D[500391],
                header: {
                    'content-type': D[500932] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    type: type,
                    server_id: b1FV$1O ? b1FV$1O.server_id : '',
                    role_id: b1FV$1O ? b1FV$1O.role_id : '',
                    no_log: 1 //设置为1后就不在这个接口打log，交给logStartShare接口
                },
                success: function (res) {
                    console.log(D[500949]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callback && callback(data.data);
                        } else {
                            callbacks[D[500941]] && callbacks[D[500941]](1, {
                                errMsg: D[500950] + data.msg
                            });
                        }
                    } else {
                        callbacks[D[500941]] && callbacks[D[500941]](1, {
                            errMsg: D[500951]
                        });
                    }
                }
            });
        },

        updateShare: function (invite, invite_type, is_new, role_id, server_id, scene) {
            console.log(D[500952]);
            var sdk_token = wx.getStorageSync(D[500934]);
            wx.request({
                url: D[500929] + HOST + D[500953],
                method: D[500931],
                dataType: D[500391],
                header: {
                    'content-type': D[500932] // 默认值
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
                    console.log(D[500954]);
                    console.log(res);
                }
            });
        },

        msgCheck: function (content, callback) {
            console.log(D[500955]);
            var sdk_token = wx.getStorageSync(D[500934]);
            wx.request({
                url: D[500929] + HOST + D[500956] + config.partner_id + '/' + config.game_pkg,
                method: D[500931],
                dataType: D[500391],
                header: {
                    'content-type': D[500932] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    content: content,
                    gameToken: partner_data.gameToken,
                    uid: partner_data.uid,
                    channelVer: config.channelVer,
                    gameId: config.gameId,
                    platId: config.platId
                },
                success: function (res) {
                    console.log(D[500957]);
                    console.log(res);
                    callback && callback(res);
                }
            });
        },

        pay: function (data, callback) {
            var self = this;
            self.startPay(data, callback);
        },

        //支付接口
        startPay: function (data, callback) {
            console.log(D[500958]);
            console.log(data);

            var self = this;
            callbacks[D[500924]] = typeof callback == D[500126] ? callback : null;
            //先下单
            var sdk_token = wx.getStorageSync(D[500934]);
            var session_key = wx.getStorageSync(D[500937]);
            if (!sdk_token && !session_key) {
                callbacks[D[500924]] && callbacks[D[500924]](1, {
                    errMsg: D[500959]
                });
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
            public_data[D[500960]] = JSON.stringify(order_data);
            public_data[D[500927]] = 1;

            //发起网络请求
            wx.request({
                url: D[500929] + HOST + D[500961],
                method: D[500931],
                dataType: D[500391],
                header: {
                    'content-type': D[500932] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(D[500962]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state && data.data.pay_data) {
                            //TODO 替换对应方法
                            console.log(D[500963] + JSON.stringify(data.data.pay_data));
                            var payInfo = {
                                billNo: data.data.pay_data.billNo,
                                amount: data.data.pay_data.amount,
                                serverId: data.data.pay_data.serverId,
                                roleId: data.data.pay_data.roleId,
                                roleName: data.data.pay_data.roleName,
                                roleLevel: data.data.pay_data.roleLevel,
                                subject: data.data.pay_data.subject,
                                productDesc: data.data.pay_data.productDesc,
                                extraInfo: data.data.pay_data.extraInfo
                            };
                            ddtSDKPlat.pay(payInfo);
                        } else {
                            callbacks[D[500924]] && callbacks[D[500924]](1, {
                                errMsg: data.errMsg
                            });
                        }
                    } else {
                        callbacks[D[500919]] && callbacks[D[500919]](1, {
                            errMsg: D[500940]
                        });
                    }
                }
            });
        },

        logCreateRole: function (data) {
            var uid = wx.getStorageSync(D[500935]);
            var username = wx.getStorageSync(D[500936]);

            var postData = {};
            postData[D[500964]] = uid;
            postData[D[500965]] = username;
            postData[D[500966]] = data.roleid;
            postData[D[500967]] = data.rolelevel;
            postData[D[500968]] = data.rolename;
            postData[D[500969]] = data.serverid;

            if (data.roleid && data.serverid) {
                b1FV$1O = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }
            this.log(D[500008], postData);
            var roleInfo = {
                roleLevel: data.rolelevel,
                roleId: data.roleid,
                roleName: data.rolename,
                serverName: data.servername,
                serverId: data.serverid,
                rolecreatetime: Date.parse(new Date()) / 1000,
                vipLevel: "",
                power: "",
                roleSex: "",
                partyId: "",
                partyName: ""
            };

            ddtSDKPlat.submitData(D[500970], roleInfo);
        },

        //进入游戏
        logEnterGame: function (data, callback) {
            var uid = wx.getStorageSync(D[500935]);
            var username = wx.getStorageSync(D[500936]);

            var postData = {};
            postData[D[500964]] = uid;
            postData[D[500965]] = username;
            postData[D[500966]] = data.roleid;
            postData[D[500967]] = data.rolelevel;
            postData[D[500968]] = data.rolename;
            postData[D[500969]] = data.serverid;

            if (data.roleid && data.serverid) {
                b1FV$1O = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(D[500971], postData);

            var roleInfo = {
                roleLevel: data.rolelevel,
                roleId: data.roleid,
                roleName: data.rolename,
                serverName: data.servername,
                serverId: data.serverid,
                rolecreatetime: data.rolecreatetime,
                vipLevel: "",
                power: "",
                roleSex: "",
                partyId: "",
                partyName: ""
            };

            ddtSDKPlat.submitData(D[500972], roleInfo);

            //进入游戏确认邀请成功
            if (b1F$O1V) {
                this.updateShare(b1F$O1V.invite, b1F$O1V.invite_type, b1F$O1V.is_new, data.roleid, data.serverid, b1F$O1V.scene);
            }
        },

        //角色升级
        logRoleUpLevel: function (data, callback) {
            var uid = wx.getStorageSync(D[500935]);
            var username = wx.getStorageSync(D[500936]);
            this.log(D[500973], data);

            var postData = {};
            postData[D[500964]] = uid;
            postData[D[500965]] = username;
            postData[D[500966]] = data.roleid;
            postData[D[500967]] = data.rolelevel;
            postData[D[500968]] = data.rolename;
            postData[D[500969]] = data.serverid;

            if (data.roleid && data.serverid) {
                b1FV$1O = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            var roleInfo = {
                roleLevel: data.rolelevel,
                roleId: data.roleid,
                roleName: data.rolename,
                serverName: data.servername,
                serverId: data.serverid,
                rolecreatetime: data.rolecreatetime,
                vipLevel: "",
                power: "",
                roleSex: "",
                partyId: "",
                partyName: ""
            };

            ddtSDKPlat.submitData(D[500974], roleInfo);
        },

        subscribeMessage: function (tmplIds, callback) {
            console.log(D[500975] + tmplIds);
            //获取模板ID
            callbacks[D[500976]] = typeof callback == D[500126] ? callback : null;
            wx.requestSubscribeMessage({
                tmplIds: tmplIds,
                success(res) {
                    console.log(D[500977]);
                    console.log(res);
                    callbacks[D[500976]] && callbacks[D[500976]](res);
                },
                fail(res) {
                    console.log(D[500978]);
                    console.log(res);
                    callbacks[D[500976]] && callbacks[D[500976]](res);
                }
            });
        },

        //获取唯一设备码（自定义）
        uuid: function (radix, len) {
            var chars = D[500979].split('');
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
            var uuid = wx.getStorageSync(D[500907]);
            var idfv = wx.getStorageSync(D[500908]);
            var ad_code = wx.getStorageSync(D[500909]);

            return {
                game_id: config.game_id,
                game_pkg: config.game_pkg,
                partner_id: config.partner_id,
                partner_label: config.partner_label,
                ad_code: ad_code,
                uuid: uuid,
                idfv: idfv,
                dname: system.model,
                mac: D[500980],
                net_type: system.wifiSignal == 0 ? '4G' : D[500981],
                os_ver: system.system,
                sdk_ver: system.version, //存放的是微信版本号
                game_ver: config.game_ver, //存放的是SDK版本号
                device: system.platform == D[500982] ? 1 : 2
            };
        },

        //统一发送log
        log: function (type, data) {
            var public_data = this.getPublicData();
            for (var key in data) {
                public_data[key] = data[key];
            }

            console.log(D[500983] + type);
            console.log(public_data);

            wx.request({
                url: D[500929] + HOST + D[500984] + type + D[500985] + encodeURIComponent(JSON.stringify(public_data))
            });
        },

        getDate: function () {
            var date = new Date();
            return date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate();
        },

        downloadClient: function () {
            wx.openCustomerServiceConversation();
        }
    };
}

function run(method, data, callback) {
    method in b1FV$O1 && b1FV$O1[method](data, callback);
}

exports.init = function (data, callback) {
    run(D[500986], data, callback);
};

exports.login = function (callback) {
    run(D[500919], '', callback);
};

exports.pay = function (data, callback) {
    run(D[500924], data, callback);
};

exports.openService = function () {
    run(D[500987]);
};

exports.logCreateRole = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(D[500988], data);
};

exports.logEnterGame = function (serverId, serverName, roleId, roleName, roleLevel, rolecreatetime, callback) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel,
        rolecreatetime: rolecreatetime
    };

    run(D[500989], data, callback);
};

exports.logRoleUpLevel = function (serverId, serverName, roleId, roleName, roleLevel, rolecreatetime, callback) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel,
        rolecreatetime: rolecreatetime
    };
    run(D[500990], data, callback);
};

exports.share = function (type) {
    var data = {
        type: type
    };
    run(D[500941], data);
};
exports.subscribeMessage = function (data, callback) {
    run(D[500976], data, callback);
};

exports.msgCheck = function (data, callback) {
    run(D[500991], data, callback);
};

exports.downloadClient = function () {
    run(D[500992]);
};

exports.getConfig = function () {
    return {
        game_id: config.game_id,
        game_pkg: config.game_pkg,
        partner_id: config.partner_id
    };
};

exports.getPublicData = function () {
    run(D[500993]);
};