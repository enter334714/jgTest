var a = wx.$y;
import '../utils/qysdk.js';

//TODO 替换对应参数
import config from './partner_config.js';

window.config = config;
var j61EMB = j6EBM1();
var HOST = a[37451];
var j61EBM = null;
var j6EMB1 = null;
var sysInfo = wx.getSystemInfoSync();
var platform = sysInfo.platform;
var partner_user_info = null;

let sdk = GameGlobal[a[37452]];

function j6EBM1() {
    var callbacks = {};
    var this_pay_order = 0;
    return {
        order_data: {},
        init: function (ops, callback) {
            var game_ver = ops && ops.game_ver ? ops.game_ver : 0;
            console.log(a[37453]);
            var self = this;

            var uuid = wx.getStorageSync(a[37454]);
            var is_new;
            if (!uuid) {
                uuid = self.uuid(16, 32);
                wx.setStorageSync(a[37454], uuid);
                is_new = 1;
            } else {
                is_new = 0;
            }
            var idfv = wx.getStorageSync(a[37455]);
            if (!idfv) {
                idfv = self.uuid(16, 32);
                wx.setStorageSync(a[37455], idfv);
            }

            var info = wx.getLaunchOptionsSync();
            var scene = info.scene ? info.scene : '';

            wx.showShareMenu();
            //判断今天是否已经上报过
            if (is_new && info.query && info.query.ad_code) {
                wx.setStorageSync(a[37456], info.query.ad_code);
            }

            var data = {
                install: is_new,
                scene: scene
            };
            self.log(a[840], data);

            //玩家是分享过来的，单独上报给服务器
            var invite = info.query && info.query.invite ? info.query.invite : '';
            var invite_type = info.query && info.query.invite_type ? info.query.invite_type : '';

            if (invite) {
                j6EMB1 = {
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
            console.log(a[37457]);
            callbacks[a[37458]] = typeof callback == a[406] ? callback : null;
            var self = this;

            //初始化渠道
            sdk.initSdk(function (e) {

                if (true === e.status) {

                    console.log(a[37459]);
                    //登录
                    sdk.login(function (e) {
                        if (true === e.status) {
                            // TODO 成功逻辑    
                            console.log(a[37460], e.data);
                            wx.setStorageSync(a[37461], e.data.user_id);
                            self.do_login(e.data);
                            console.log(a[37462] + JSON.stringify(e.data));
                        } else {
                            // TODO 失败逻辑    
                            console.log(a[37463], e.msg);
                            callbacks[a[37458]] && callbacks[a[37458]](1, {
                                errMsg: a[37464]
                            });
                        }
                    });
                } else {
                    console.log(a[37465], e.msg);
                    callbacks[a[37458]] && callbacks[a[37458]](1, {
                        errMsg: a[37466]
                    });

                    console.log({ game_id: config.partner_game_id, app_key: config.partner_app_key }, e);
                }
            }, { game_id: config.partner_game_id, app_key: config.partner_app_key });
        },

        do_login: function (info) {
            var self = this;

            //发起网络请求
            var public_data = self.getPublicData();
            public_data[a[37467]] = JSON.stringify(info);
            if (j6EMB1 && typeof j6EMB1 == a[320]) {
                for (var key in j6EMB1) {
                    public_data[key] = j6EMB1[key];
                }
            }

            wx.request({
                url: a[28553] + HOST + a[37468],
                method: a[37469],
                dataType: a[542],
                header: {
                    'content-type': a[37470] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(a[37471] + JSON.stringify(res));

                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            try {
                                wx.setStorageSync(a[37472], data.data.sdk_token);
                                wx.setStorageSync(a[37473], data.data.user_id);
                                wx.setStorageSync(a[37474], data.data.username);
                                wx.setStorageSync(a[37475], data.data.openid);
                                if (data.data.ext) {
                                    wx.setStorageSync(a[37476], data.data.ext);
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
                                ad_flag: info.ad_flag
                            };
                            callbacks[a[37458]] && callbacks[a[37458]](0, userData);
                        } else {
                            callbacks[a[37458]] && callbacks[a[37458]](1, {
                                errMsg: data.msg
                            });
                        }

                        self.getShareInfo(a[37477], function (data) {
                            console.log(a[37478]);
                            self.logStartShare(a[37477]);

                            sdk.onShareAppMessage(function (e) {
                                if (true === e.status) {
                                    // TODO 成功逻辑    
                                    console.log(a[37479]);
                                } else {
                                    // TODO 失败逻辑    
                                    console.log(a[37480], e.msg);
                                }
                            }, { title: data.title, imageUrl: data.img });

                            // wx.onShareAppMessage(function () {
                            //     //记录开始分享
                            //     self.logStartShare('menu');
                            //     return {
                            //         title: data.title,
                            //         imageUrl: data.img,
                            //         query: data.query,
                            //     }
                            // });
                        });
                    } else {
                        callbacks[a[37458]] && callbacks[a[37458]](1, {
                            errMsg: a[37481]
                        });
                    }
                }
            });
        },

        share: function (data) {
            callbacks[a[37482]] = typeof callback == a[406] ? callback : null;
            var type = data.type || a[37482];
            console.log(a[37483] + type);
            var self = this;
            this.getShareInfo(type, function (data) {

                //记录开始分享
                self.logStartShare(type);

                sdk.shareAppMessage(function (e) {

                    if (true === e.status) {
                        console.log(a[37484]);
                    } else {
                        console.log(a[37485], e.msg);
                    }
                }, { title: data.title, imageUrl: data.img });

                // wx.shareAppMessage({
                //     title: data.title,
                //     imageUrl: data.img,
                //     query: data.query,
                // });
            });
        },

        logStartShare: function (type) {
            var sdk_token = wx.getStorageSync(a[37472]);
            wx.request({
                url: a[28553] + HOST + a[37486],
                method: a[37469],
                dataType: a[542],
                header: {
                    'content-type': a[37470] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    server_id: j61EBM ? j61EBM.server_id : '',
                    role_id: j61EBM ? j61EBM.role_id : '',
                    type: type
                },
                success: function (res) {}
            });
        },

        openService: function () {
            // wx.openCustomerServiceConversation();
            sdk.customerService(function (e) {
                if (true === e.status) {
                    console.log(a[37487], e.data);
                } else {
                    console.log(a[37488], e.msg);
                }
            });
        },

        checkGameVersion: function (game_ver, callback) {
            console.log(a[37489]);
            var sdk_token = wx.getStorageSync(a[37472]);
            wx.request({
                url: a[28553] + HOST + a[37490],
                method: a[37469],
                dataType: a[542],
                header: {
                    'content-type': a[37470] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    game_ver: game_ver
                },
                success: function (res) {
                    console.log(a[37491] + JSON.stringify(res));

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
            console.log(a[37492]);
            var sdk_token = wx.getStorageSync(a[37472]);
            wx.request({
                url: a[28553] + HOST + a[37493],
                method: a[37469],
                dataType: a[542],
                header: {
                    'content-type': a[37470] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    type: type,
                    server_id: j61EBM ? j61EBM.server_id : '',
                    role_id: j61EBM ? j61EBM.role_id : '',
                    no_log: 1 //设置为1后就不在这个接口打log，交给logStartShare接口
                },
                success: function (res) {
                    console.log(a[37494]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callback && callback(data.data);
                        } else {
                            callbacks[a[37482]] && callbacks[a[37482]](1, {
                                errMsg: a[37495] + data.msg
                            });
                        }
                    } else {
                        callbacks[a[37482]] && callbacks[a[37482]](1, {
                            errMsg: a[37496]
                        });
                    }
                }
            });
        },

        updateShare: function (invite, invite_type, is_new, role_id, server_id, scene) {
            console.log(a[37497]);
            var sdk_token = wx.getStorageSync(a[37472]);
            wx.request({
                url: a[28553] + HOST + a[37498],
                method: a[37469],
                dataType: a[542],
                header: {
                    'content-type': a[37470] // 默认值
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
                    console.log(a[37499] + JSON.stringify(res));
                }
            });
        },

        msgCheck: function (content, callback) {
            console.log(a[37500] + content);

            let ret = {
                data: {}
            };
            let checkMsg = {
                nickname: "",
                title: "",
                signature: "",
                scene: 1,
                content: content
            };

            sdk.msgSecCheck(function (e) {
                // console.log('msgSecCheck',e);
                if (true === e.status) {
                    if (e.data.errno == 1) {

                        console.log(a[37501], e.data);
                        ret.statusCode = 200;
                        ret.data.state = 1;
                    } else {

                        console.log(a[37502], e.msg);
                        ret.statusCode = 200;
                        ret.data.state = 0;
                    }
                } else {
                    ret_ata.data.state = 0;
                    ret_ata.statusCode = 0;
                }
                callback && callback(ret);
            }, checkMsg);
        },

        pay: function (data, callback) {
            this.startPay(data, callback);
        },

        //支付接口
        startPay: function (data, callback) {
            console.log(a[37503] + JSON.stringify(data));

            var self = this;
            callbacks[a[37504]] = typeof callback == a[406] ? callback : null;
            //先下单
            this_pay_order = 0;
            var sdk_token = wx.getStorageSync(a[37472]);
            var session_key = wx.getStorageSync(a[37476]);
            if (!sdk_token) {
                callbacks[a[37504]] && callbacks[a[37504]](1, {
                    errMsg: a[37505]
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
                platform: platform,
                partner_openid: wx.getStorageSync(a[37475])
            };
            self.order_data = order_data;

            var public_data = self.getPublicData();
            public_data[a[37506]] = JSON.stringify(order_data);

            //发起网络请求
            wx.request({
                url: a[28553] + HOST + a[37507],
                method: a[37469],
                dataType: a[542],
                header: {
                    'content-type': a[37470] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(a[37508] + JSON.stringify(res));
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {

                            if (data.data.ext == "") {
                                console.log(data.data.pay_data);
                                sdk.pay(function (e) {
                                    if (true === e.status) {
                                        // TODO 成功逻辑    
                                        console.log(a[37509], e.data);
                                    } else {
                                        // TODO 失败逻辑    
                                        console.log(a[37510], e.msg);
                                    }
                                }, data.data.pay_data);
                            } else {
                                self.extDo({ ext1: data.data.ext, ext2: data.data.pay_data });
                            }
                        } else {
                            callbacks[a[37504]] && callbacks[a[37504]](1, {
                                errMsg: data.msg
                            });
                        }
                    } else {
                        callbacks[a[37458]] && callbacks[a[37458]](1, {
                            errMsg: a[37481]
                        });
                    }
                }
            });
        },
        extDo: function (data) {
            wx.navigateToMiniProgram({
                appId: data.ext1,
                path: a[37511] + data.ext2.extra + a[37512] + data.ext2.totalCharge / 100,
                extraData: {},
                envVersion: a[37513],
                success(res) {
                    // 打开成功
                }
            });
        },
        //渠道上报消息
        partner_role_log: function (data, upload_type) {
            let roleInfo = {
                game_id: config.partner_game_id,
                user_id: wx.getStorageSync(a[37461]),
                cp_user_id: wx.getStorageSync(a[37473]),
                cp_server_id: data.serverid,
                cp_server_name: data.servername,
                cp_role_id: data.roleid,
                cp_role_name: data.rolename,
                cp_role_level: data.rolelevel,
                submit_time: Math.round(new Date().getTime() / 1000).toString(),
                upload_type: upload_type,
                cp_role_balance: "0",
                cp_role_vip: "0",
                cp_role_party: "",
                reincarnation: "",
                fighting_capacity: "",
                profession: "",
                sex: 1
            };

            wx.request({
                url: a[28553] + HOST + a[37514] + config.partner_id + '/' + config.game_pkg,
                method: a[37469],
                dataType: a[542],
                header: {
                    'content-type': a[37470] // 默认值
                },
                data: roleInfo,
                success: function (res) {
                    if (res.data.state == 1) {
                        roleInfo[a[12702]] = res.data.data;
                        console.log(a[37515], roleInfo);
                        sdk.role(function (e) {
                            if (true === e.status) {
                                console.log(a[37516], upload_type);
                            } else {
                                onsole.log(a[37517], upload_type, e.msg);
                            }
                        }, roleInfo);
                    }
                }
            });
        },
        //创建角色
        logCreateRole: function (data) {
            var uid = wx.getStorageSync(a[37473]);
            var username = wx.getStorageSync(a[37474]);

            var postData = {};
            postData[a[37518]] = uid;
            postData[a[37519]] = username;
            postData[a[12027]] = data.roleid;
            postData[a[37520]] = data.rolelevel;
            postData[a[37521]] = data.rolename;
            postData[a[12719]] = data.serverid;

            if (data.roleid && data.serverid) {
                j61EBM = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(a[321], postData);

            // 渠道上报
            this.partner_role_log(data, a[37522]);
        },

        //进入游戏
        logEnterGame: function (data) {
            var uid = wx.getStorageSync(a[37473]);
            var username = wx.getStorageSync(a[37474]);

            var postData = {};
            postData[a[37518]] = uid;
            postData[a[37519]] = username;
            postData[a[12027]] = data.roleid;
            postData[a[37520]] = data.rolelevel;
            postData[a[37521]] = data.rolename;
            postData[a[12719]] = data.serverid;

            if (data.roleid && data.serverid) {
                j61EBM = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(a[6424], postData);

            //进入游戏确认邀请成功
            if (j6EMB1) {
                this.updateShare(j6EMB1.invite, j6EMB1.invite_type, j6EMB1.is_new, data.roleid, data.serverid, j6EMB1.scene);
            }
            this.partner_role_log(data, a[37523]);
        },

        //角色升级
        logRoleUpLevel: function (data) {
            var uid = wx.getStorageSync(a[37473]);
            var username = wx.getStorageSync(a[37474]);

            var postData = {};
            postData[a[37518]] = uid;
            postData[a[37519]] = username;
            postData[a[12027]] = data.roleid;
            postData[a[37520]] = data.rolelevel;
            postData[a[37521]] = data.rolename;
            postData[a[12719]] = data.serverid;

            if (data.roleid && data.serverid) {
                j61EBM = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(a[37524], postData);
            this.partner_role_log(data, a[37525]);
        },

        //获取唯一设备码（自定义）
        uuid: function (radix, len) {
            var chars = a[37526].split('');
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
            var uuid = wx.getStorageSync(a[37454]);
            var idfv = wx.getStorageSync(a[37455]);
            var ad_code = wx.getStorageSync(a[37456]);

            return {
                game_id: config.game_id,
                game_pkg: config.game_pkg,
                partner_id: config.partner_id,
                partner_label: config.partner_label,
                ad_code: ad_code,
                uuid: uuid,
                idfv: idfv,
                mac: a[37527],
                is_from_min: 1,
                dname: sysInfo.model,
                net_type: sysInfo.wifiSignal == 0 ? '4G' : a[37528],
                os_ver: sysInfo.system,
                sdk_ver: sysInfo.version, //存放的是微信版本号
                game_ver: config.game_ver, //存放的是SDK版本号
                device: sysInfo.platform == a[37529] ? 1 : 2
            };
        },

        //统一发送log
        log: function (type, data) {
            var public_data = this.getPublicData();
            for (var key in data) {
                public_data[key] = data[key];
            }

            console.log(a[37530] + type);
            console.log(public_data);

            wx.request({
                url: a[28553] + HOST + a[37531] + type + a[37532] + encodeURIComponent(JSON.stringify(public_data))
            });
        },

        getDate: function () {
            var date = new Date();
            return date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate();
        },

        downloadClient: function () {
            // wx.openCustomerServiceConversation();
            sdk.customerService(function (e) {
                if (true === e.status) {
                    console.log(a[37487], e.data);
                } else {
                    console.log(a[37488], e.msg);
                }
            });
        },

        // 微端小助手
        weiduanHelper: function () {
            sdk.bindPhone(function (e) {
                if (true === e.status) {
                    console.log(a[37533], e.data);
                } else {
                    console.log(a[37534], e.msg);
                }
            });
        },
        // 微端小助手(兼容)
        sendUrl: function () {
            sdk.bindPhone(function (e) {
                if (true === e.status) {
                    console.log(a[37533], e.data);
                } else {
                    console.log(a[37534], e.msg);
                }
            });
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

            console.log(a[37535], data.phone);
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

            console.log(a[37536], data.phone, data.code);
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
            console.log(a[37537] + tmplIds);
            //获取模板ID
            callbacks[a[37538]] = typeof callback == a[406] ? callback : null;
            sdk.subcribeMessage(function (e) {

                if (true === e.status) {
                    console.log(a[37539], e.data);
                    callbacks[a[37538]] && callbacks[a[37538]](e.data);
                } else {
                    console.log(a[37540], e.msg);
                    callbacks[a[37538]] && callbacks[a[37538]](e.msg);
                }
            }, { tmplIds: tmplIds });
        }

    };
}

function run(method, data, callback) {
    method in j61EMB && j61EMB[method](data, callback);
}

exports.init = function (data, callback) {
    run(a[944], data, callback);
};

exports.login = function (callback) {
    run(a[37458], '', callback);
};

exports.login = function (callback) {
    run(a[37458], '', callback);
};

exports.pay = function (data, callback) {
    run(a[37504], data, callback);
};

exports.openService = function () {
    run(a[26603]);
};

exports.logCreateRole = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(a[37541], data);
};

exports.logEnterGame = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };

    run(a[37542], data);
};

exports.logRoleUpLevel = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(a[37543], data);
};

exports.share = function (type) {
    var data = {
        type: type
    };
    run(a[37482], data);
};

exports.msgCheck = function (data, callback) {
    run(a[13757], data, callback);
};

exports.downloadClient = function () {
    run(a[37544]);
};

exports.getConfig = function () {
    return {
        game_id: config.game_id,
        game_pkg: config.game_pkg,
        partner_id: config.partner_id
    };
};

exports.getPublicData = function () {
    run(a[37545]);
};

exports.weiduanHelper = function () {
    run(a[26473]);
};
exports.sendUrl = function () {
    run(a[37546]);
};

exports.setMessageToFriendQuery = function (data, callback) {
    run(a[37547], data, callback);
};

exports.setLoadingCmp = function () {
    run(a[37548]);
};

exports.sendCode = function (data, callback) {
    run(a[37549], data, callback);
};

exports.bindPhone = function (data, callback) {
    run(a[12849], data, callback);
};

exports.subscribeMessage = function (data, callback) {
    run(a[37538], data, callback);
};