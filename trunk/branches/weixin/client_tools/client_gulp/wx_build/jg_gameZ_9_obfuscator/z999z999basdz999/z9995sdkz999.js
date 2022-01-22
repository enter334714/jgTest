var H = wx.$F;
require(H[641700]);
require(H[641701]);

//TODO 替换对应参数
var config = {
    game_id: H[641702],
    game_pkg: H[641703], //天剑vs墨雪--蜀山御剑仙
    partner_label: H[641704],
    partner_id: H[641705],
    game_ver: H[641706],
    is_auth: true //授权登录
};
window.config = config;
var f12T9KB = f129BKT();
var HOST = H[641707];
var f12T9BK = null;
var f129KBT = null;
var partner_data = {};
var partner_user_info = null;

function f129BKT() {
    var callbacks = {};
    return {
        order_data: {},
        init: function (ops, callback) {
            var game_ver = ops && ops.game_ver ? ops.game_ver : 0;
            console.log(H[641708]);
            var self = this;

            var uuid = wx.getStorageSync(H[641709]);
            var is_new;
            if (!uuid) {
                uuid = self.uuid(16, 32);
                wx.setStorageSync(H[641709], uuid);
                is_new = 1;
            } else {
                is_new = 0;
            }
            var idfv = wx.getStorageSync(H[641710]);
            if (!idfv) {
                idfv = self.uuid(16, 32);
                wx.setStorageSync(H[641710], idfv);
            }

            var info = wx.getLaunchOptionsSync();
            var scene = info.scene ? info.scene : '';

            //判断今天是否已经上报过
            if (is_new && info.query && info.query.ad_code) {
                wx.setStorageSync(H[641711], info.query.ad_code);
            }

            var data = {
                install: is_new,
                scene: scene
            };
            self.log(H[641712], data);

            wx.showShareMenu({ withShareTicket: true });

            //玩家是分享过来的，单独上报给服务器
            var invite = info.query && info.query.invite ? info.query.invite : '';
            var invite_type = info.query && info.query.invite_type ? info.query.invite_type : '';

            if (invite) {
                f129KBT = {
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
            console.log(H[641713]);
            callbacks[H[641152]] = typeof callback == H[640130] ? callback : null;
            moosnowHeavy.login(data => {
                /**
                 * data.code 0:失败 1：成功
                 * data.info
                * data.unionid
                * data.openid
                */
                console.log(H[641714], data);

                if (data.code == 1) {
                    self.do_login({ openid: data.openid, unionid: data.unionid });
                }
            });
        },

        subscribeMessage: function (tmplIds, callback) {
            console.log(H[641715] + tmplIds);
            //获取模板ID
            callbacks[H[641233]] = typeof callback == H[640130] ? callback : null;
            wx.requestSubscribeMessage({
                tmplIds: tmplIds,
                success(res) {
                    console.log(H[641716]);
                    console.log(res);
                    callbacks[H[641233]] && callbacks[H[641233]](res);
                },
                fail(res) {
                    console.log(H[641717]);
                    console.log(res);
                    callbacks[H[641233]] && callbacks[H[641233]](res);
                }
            });
        },

        do_login: function (info) {
            var self = this;
            var public_data = self.getPublicData();
            partner_user_info = info;
            public_data[H[641718]] = 1;
            public_data[H[641719]] = JSON.stringify(info);
            if (f129KBT && typeof f129KBT == H[640013]) {
                for (var key in f129KBT) {
                    public_data[key] = f129KBT[key];
                }
            }

            //发起网络请求
            wx.request({
                url: H[641720] + HOST + H[641721],
                method: H[641121],
                dataType: H[640393],
                header: {
                    'content-type': H[641261] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(H[641722], res);
                    if (res.statusCode === 200) {
                        var data = res.data;
                        if (data.state) {
                            try {
                                wx.setStorageSync(H[641723], data.data.sdk_token);
                                wx.setStorageSync(H[641724], data.data.user_id);
                                wx.setStorageSync(H[641725], data.data.username);
                                if (data.data.ext) {
                                    wx.setStorageSync(H[641726], data.data.ext);
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
                            callbacks[H[641152]] && callbacks[H[641152]](0, userData);
                        } else {
                            callbacks[H[641152]] && callbacks[H[641152]](1, {
                                errMsg: data.msg
                            });
                        }

                        //登录成功，加载右上角分享数据
                        self.getShareInfo(H[641727], function (data) {
                            console.log(H[641728] + JSON.stringify(data));
                            wx.onShareAppMessage(function () {
                                //记录开始分享
                                self.logStartShare(H[641727]);
                                return {
                                    title: data.title,
                                    imageUrl: data.img,
                                    query: data.query + "&" + qingjs.instance.getShareToken()
                                };
                            });
                        });
                    } else {
                        callbacks[H[641152]] && callbacks[H[641152]](1, {
                            errMsg: H[641729]
                        });
                    }
                }
            });
        },

        share: function (data) {
            callbacks[H[641224]] = typeof callback == H[640130] ? callback : null;
            var type = data.type || H[641224];
            console.log(H[641730] + type);
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
            var sdk_token = wx.getStorageSync(H[641723]);
            wx.request({
                url: H[641720] + HOST + H[641731],
                method: H[641121],
                dataType: H[640393],
                header: {
                    'content-type': H[641261] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    server_id: f12T9BK ? f12T9BK.server_id : '',
                    role_id: f12T9BK ? f12T9BK.role_id : '',
                    type: type
                },
                success: function (res) {}
            });
        },

        openService: function () {
            //登录后打开客服页面
            qingjs.instance.goCustomerService();
        },

        checkGameVersion: function (game_ver, callback) {
            console.log(H[641732]);
            var sdk_token = wx.getStorageSync(H[641723]);
            wx.request({
                url: H[641720] + HOST + H[641733],
                method: H[641121],
                dataType: H[640393],
                header: {
                    'content-type': H[641261] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    game_ver: game_ver
                },
                success: function (res) {
                    console.log(H[641734]);
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
            console.log(H[641735]);
            var sdk_token = wx.getStorageSync(H[641723]);
            wx.request({
                url: H[641720] + HOST + H[641736],
                method: H[641121],
                dataType: H[640393],
                header: {
                    'content-type': H[641261] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    type: type,
                    server_id: f12T9BK ? f12T9BK.server_id : '',
                    role_id: f12T9BK ? f12T9BK.role_id : '',
                    no_log: 1 //设置为1后就不在这个接口打log，交给logStartShare接口
                },
                success: function (res) {
                    console.log(H[641737]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callback && callback(data.data);
                        } else {
                            callbacks[H[641224]] && callbacks[H[641224]](1, {
                                errMsg: H[641738] + data.msg
                            });
                        }
                    } else {
                        callbacks[H[641224]] && callbacks[H[641224]](1, {
                            errMsg: H[641739]
                        });
                    }
                }
            });
        },

        updateShare: function (invite, invite_type, is_new, role_id, server_id, scene) {
            console.log(H[641740]);
            var sdk_token = wx.getStorageSync(H[641723]);
            wx.request({
                url: H[641720] + HOST + H[641741],
                method: H[641121],
                dataType: H[640393],
                header: {
                    'content-type': H[641261] // 默认值
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
                    console.log(H[641742]);
                    console.log(res);
                }
            });
        },

        msgCheck: function (content, callback) {
            console.log(H[641743]);
            let res = {
                data: {}
            };
            moosnowHeavy.wordsCheck(content, data => {
                console.log(H[641744], data);
                if (data.code == 1 && data.data.suggest == H[641745]) {
                    res.statusCode = 200;
                    res.data.state = 1;
                } else {
                    res.statusCode = 0;
                    res.data.state = 0;
                }
                callback && callback(res);
            });
        },

        pay: function (data, callback) {
            var self = this;
            self.startPay(data, callback);
        },

        //支付接口
        startPay: function (data, callback) {
            console.log(H[641746], data);
            var self = this;
            callbacks[H[641211]] = typeof callback == H[640130] ? callback : null;
            //先下单
            var sdk_token = wx.getStorageSync(H[641723]);
            var session_key = wx.getStorageSync(H[641726]);
            if (!sdk_token && !session_key) {
                callbacks[H[641211]] && callbacks[H[641211]](1, {
                    errMsg: H[641747]
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
                platform: sysInfo.platform,
                uid: partner_user_info.openid
            };
            self.order_data = order_data;

            var public_data = self.getPublicData();
            public_data[H[641748]] = JSON.stringify(order_data);
            public_data[H[641718]] = 1;

            //发起网络请求
            wx.request({
                url: H[641720] + HOST + H[641749],
                method: H[641121],
                dataType: H[640393],
                header: {
                    'content-type': H[641261] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(H[641750]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state && data.data.pay_data) {
                            //TODO 替换对应方法
                            console.log(H[641751] + JSON.stringify(data.data.pay_data));
                            if (sysInfo.platform == H[641016]) {
                                moosnowHeavy.androidPay(data.data.pay_data, {
                                    success: function (res) {
                                        console.log(H[641752] + JSON.stringify(res));
                                    },
                                    fail: function (res) {
                                        console.log(H[641753] + JSON.stringify(res));
                                    },
                                    complete: function (res) {
                                        console.log(H[641754] + JSON.stringify(res));
                                    }
                                });
                            } else {
                                moosnowHeavy.openCustomerServiceConversation(data.data.pay_data, {
                                    sessionFrom: '',
                                    showMessageCard: true,
                                    sendMessageTitle: H[641755],
                                    sendMessagePath: '',

                                    success: function (res) {
                                        console.log(H[641756]);
                                    },
                                    fail: function (res) {
                                        console.log(H[641757]);
                                    },
                                    complete: function (res) {
                                        console.log(H[641758]);
                                    }
                                });
                            }
                        } else {
                            callbacks[H[641211]] && callbacks[H[641211]](1, {
                                errMsg: data.errMsg
                            });
                        }
                    } else {
                        callbacks[H[641152]] && callbacks[H[641152]](1, {
                            errMsg: H[641729]
                        });
                    }
                }
            });
        },

        logCreateRole: function (data, callback) {
            var uid = wx.getStorageSync(H[641724]);
            var username = wx.getStorageSync(H[641725]);

            var postData = {};
            postData[H[641759]] = uid;
            postData[H[641760]] = username;
            postData[H[641761]] = data.roleid;
            postData[H[641762]] = data.rolelevel;
            postData[H[641763]] = data.rolename;
            postData[H[640936]] = data.serverid;

            if (data.roleid && data.serverid) {
                f12T9BK = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }
            this.log(H[640014], postData);
            var roleInfo = {
                role_id: data.roleid,
                role_name: data.rolename,
                server_id: data.serverid,
                server_name: data.servername
            };
        },

        //进入游戏
        logEnterGame: function (data, callback) {
            var uid = wx.getStorageSync(H[641724]);
            var username = wx.getStorageSync(H[641725]);

            var postData = {};
            postData[H[641759]] = uid;
            postData[H[641760]] = username;
            postData[H[641761]] = data.roleid;
            postData[H[641762]] = data.rolelevel;
            postData[H[641763]] = data.rolename;
            postData[H[640936]] = data.serverid;

            if (data.roleid && data.serverid) {
                f12T9BK = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(H[641764], postData);

            //进入游戏确认邀请成功
            if (f129KBT) {
                this.updateShare(f129KBT.invite, f129KBT.invite_type, f129KBT.is_new, data.roleid, data.serverid, f129KBT.scene);
            }
            var data = {
                serverId: data.serverid,
                roleId: data.roleid,
                roleName: data.rolename,
                vip: "0"
            };
            moosnowHeavy.reportPlayerInfo(data);
        },

        //角色升级
        logRoleUpLevel: function (data, callback) {
            var uid = wx.getStorageSync(H[641724]);
            var username = wx.getStorageSync(H[641725]);
            this.log(H[641765], data);

            var postData = {};
            postData[H[641759]] = uid;
            postData[H[641760]] = username;
            postData[H[641761]] = data.roleid;
            postData[H[641762]] = data.rolelevel;
            postData[H[641763]] = data.rolename;
            postData[H[640936]] = data.serverid;

            if (data.roleid && data.serverid) {
                f12T9BK = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }
        },

        //获取唯一设备码（自定义）
        uuid: function (radix, len) {
            var chars = H[641766].split('');
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
            var uuid = wx.getStorageSync(H[641709]);
            var idfv = wx.getStorageSync(H[641710]);
            var ad_code = wx.getStorageSync(H[641711]);

            return {
                game_id: config.game_id,
                game_pkg: config.game_pkg,
                partner_id: config.partner_id,
                partner_label: config.partner_label,
                ad_code: ad_code,
                uuid: uuid,
                idfv: idfv,
                dname: system.model,
                mac: H[641767],
                net_type: system.wifiSignal == 0 ? '4G' : H[641768],
                os_ver: system.system,
                sdk_ver: system.version, //存放的是微信版本号
                game_ver: config.game_ver, //存放的是SDK版本号
                device: system.platform == H[641016] ? 1 : 2
            };
        },

        //统一发送log
        log: function (type, data) {
            var public_data = this.getPublicData();
            for (var key in data) {
                public_data[key] = data[key];
            }

            console.log(H[641769] + type);
            console.log(public_data);

            wx.request({
                url: H[641720] + HOST + H[641770] + type + H[641771] + encodeURIComponent(JSON.stringify(public_data))
            });
        },

        getDate: function () {
            var date = new Date();
            return date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate();
        },

        downloadClient: function () {
            wx.openCustomerServiceConversation();
        },

        // 玩家下线通知
        beQuit: function (data) {
            wx.request({
                url: H[641720] + HOST + H[641772] + config.partner_id + '/' + config.game_pkg,
                method: H[641121],
                dataType: H[640393],
                header: {
                    'content-type': H[641261] // 默认值
                },
                data: {
                    uid: partner_data.uid, // 渠道UID
                    event: H[641773]
                },
                success: function (res) {
                    console.log(H[641774] + JSON.stringify(res));
                }
            });
        },
        showMenu: function () {
            qingjs.instance.showMenu({
                stage: Laya.stage,
                canvas: canvas, // 微信小游戏上屏canvas
                entryIconX: 0, // 可选
                entryIconY: 0 // 可选
            });
        }
    };
}

function run(method, data, callback) {
    method in f12T9KB && f12T9KB[method](data, callback);
}

exports.init = function (data, callback) {
    run(H[641132], data, callback);
};

exports.login = function (callback) {
    run(H[641152], '', callback);
};

exports.login = function (callback) {
    run(H[641152], '', callback);
};

exports.pay = function (data, callback) {
    run(H[641211], data, callback);
};

exports.openService = function () {
    run(H[641225]);
};

exports.logCreateRole = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(H[641219], data);
};

exports.logEnterGame = function (serverId, serverName, roleId, roleName, roleLevel, rolecreatetime, extra) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel,
        rolecreatetime: rolecreatetime,
        rolepower: extra ? extra.rolepower : 0
    };

    run(H[641221], data, extra ? extra.callback : null);
};

exports.logRoleUpLevel = function (serverId, serverName, roleId, roleName, roleLevel, rolecreatetime, extra) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel,
        rolecreatetime: rolecreatetime,
        rolepower: extra ? extra.rolepower : 0
    };
    run(H[641223], data, extra ? extra.callback : null);
};

exports.share = function (type) {
    var data = {
        type: type
    };
    run(H[641224], data);
};

exports.msgCheck = function (data, callback) {
    run(H[641102], data, callback);
};
exports.downloadClient = function () {
    run(H[641775]);
};

exports.getConfig = function () {
    return {
        game_id: config.game_id,
        game_pkg: config.game_pkg,
        partner_id: config.partner_id
    };
};

exports.getPublicData = function () {
    run(H[641776]);
};

exports.beQuit = function (data) {
    run(H[641777], data);
};
exports.showMenu = function () {
    run(H[641778]);
};
exports.subscribeMessage = function (data, callback) {
    run(H[641233], data, callback);
};