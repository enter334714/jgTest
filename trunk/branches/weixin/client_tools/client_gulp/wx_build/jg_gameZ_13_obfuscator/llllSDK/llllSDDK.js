var Z = wx.$L;
import { dfSDK } from '../utils/wxdfsdk';
//TODO 替换对应参数
var config = {
    game_id: 256,
    game_pkg: Z[30895], //热游-曜石神魔录
    partner_label: Z[30896],
    partner_id: Z[30897],
    game_ver: Z[30898],
    is_auth: false, //授权登录
    partner_game_id: Z[30899]
};
window.config = config;
var $lTNMZO = $lTMOZN();
var HOST = Z[30900];
var $lTNMOZ = null;
var $lTMZON = null;
var sysInfo = wx.getSystemInfoSync();
var platform = sysInfo.platform;

function $lTMOZN() {
    var callbacks = {};
    var this_pay_order = 0;
    return {
        order_data: {},
        init: function (ops, callback) {
            var game_ver = ops && ops.game_ver ? ops.game_ver : 0;
            console.log(Z[30901]);
            var self = this;

            var uuid = wx.getStorageSync(Z[30902]);
            var is_new;
            if (!uuid) {
                uuid = self.uuid(16, 32);
                wx.setStorageSync(Z[30902], uuid);
                is_new = 1;
            } else {
                is_new = 0;
            }
            var idfv = wx.getStorageSync(Z[30903]);
            if (!idfv) {
                idfv = self.uuid(16, 32);
                wx.setStorageSync(Z[30903], idfv);
            }

            var info = wx.getLaunchOptionsSync();
            var scene = info.scene ? info.scene : '';

            //判断今天是否已经上报过
            if (is_new && info.query && info.query.ad_code) {
                wx.setStorageSync(Z[30904], info.query.ad_code);
            }

            var data = {
                install: is_new,
                scene: scene
            };
            self.log(Z[1137], data);
            wx.showShareMenu();

            //玩家是分享过来的，单独上报给服务器
            var invite = info.query && info.query.invite ? info.query.invite : '';
            var invite_type = info.query && info.query.invite_type ? info.query.invite_type : '';

            if (invite) {
                $lTMZON = {
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
            dfSDK.create({
                gameId: config.partner_game_id,

                release: true
            });
        },

        login: function (data, callback) {
            console.log(Z[30905]);
            callbacks[Z[700]] = typeof callback == Z[30812] ? callback : null;
            var self = this;
            dfSDK.login(function (result) {
                //登录回调
                if (result.status == 1) {
                    //登录成功
                    console.log(Z[30906] + result.data.user_name);
                    console.log(Z[30907] + result.data.user_id);
                    console.log(Z[30908] + result.data.open_id);
                    self.do_login(result.data);
                } else {
                    console.log(result.msg);
                }
            });
        },

        do_login: function (info) {
            var self = this;
            //发起网络请求
            var public_data = self.getPublicData();
            public_data[Z[30909]] = JSON.stringify(info);
            if ($lTMZON && typeof $lTMZON == Z[1132]) {
                for (var key in $lTMZON) {
                    public_data[key] = $lTMZON[key];
                }
            }

            wx.request({
                url: Z[26868] + HOST + Z[30910],
                method: Z[668],
                dataType: Z[6795],
                header: {
                    'content-type': Z[834] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(Z[30911] + JSON.stringify(res));

                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            try {
                                wx.setStorageSync(Z[30912], data.data.sdk_token);
                                wx.setStorageSync(Z[30913], data.data.user_id);
                                wx.setStorageSync(Z[30914], data.data.username);
                                if (data.data.ext) {
                                    wx.setStorageSync(Z[30915], data.data.ext);
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
                            callbacks[Z[700]] && callbacks[Z[700]](0, userData);
                        } else {
                            callbacks[Z[700]] && callbacks[Z[700]](1, {
                                errMsg: data.msg
                            });
                        }

                        self.getShareInfo(Z[30916], function (data) {
                            console.log(Z[30917]);
                            // wx.onShareAppMessage(function () {
                            //     //记录开始分享
                            //     self.logStartShare('menu');
                            //     return {
                            //         title: data.title,
                            //         imageUrl: data.img,
                            //         query: data.query,
                            //     }
                            // });

                            dfSDK.onShareAppMessage(function () {
                                //记录开始分享
                                self.logStartShare(Z[30916]);
                                return {
                                    title: data.title,
                                    imageUrl: data.img,
                                    query: data.query
                                };
                            });
                        });
                    } else {
                        callbacks[Z[700]] && callbacks[Z[700]](1, {
                            errMsg: Z[30918]
                        });
                    }
                }
            });
        },

        share: function (data) {
            callbacks[Z[794]] = typeof callback == Z[30812] ? callback : null;
            var type = data.type || Z[794];
            console.log(Z[30919] + type);
            var self = this;
            this.getShareInfo(type, function (data) {
                //记录开始分享
                self.logStartShare(type);
                var query_str = data.query;
                dfSDK.shareAppMessage({
                    share_title: data.title,

                    share_img_url: data.img,

                    share_query: data.query
                });
                // wx.shareAppMessage({
                //     title: data.title,
                //     imageUrl: data.img,
                //     query: data.query,
                // });
            });
        },

        logStartShare: function (type) {
            var sdk_token = wx.getStorageSync(Z[30912]);
            wx.request({
                url: Z[26868] + HOST + Z[30920],
                method: Z[668],
                dataType: Z[6795],
                header: {
                    'content-type': Z[834] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    server_id: $lTNMOZ ? $lTNMOZ.server_id : '',
                    role_id: $lTNMOZ ? $lTNMOZ.role_id : '',
                    type: type
                },
                success: function (res) {}
            });
        },

        openService: function () {
            dfSDK.openCustomerService();
        },

        checkGameVersion: function (game_ver, callback) {
            console.log(Z[30921]);
            var sdk_token = wx.getStorageSync(Z[30912]);
            wx.request({
                url: Z[26868] + HOST + Z[30922],
                method: Z[668],
                dataType: Z[6795],
                header: {
                    'content-type': Z[834] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    game_ver: game_ver
                },
                success: function (res) {
                    console.log(Z[30923] + JSON.stringify(res));

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
            console.log(Z[30924]);
            var sdk_token = wx.getStorageSync(Z[30912]);
            wx.request({
                url: Z[26868] + HOST + Z[30925],
                method: Z[668],
                dataType: Z[6795],
                header: {
                    'content-type': Z[834] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    type: type,
                    server_id: $lTNMOZ ? $lTNMOZ.server_id : '',
                    role_id: $lTNMOZ ? $lTNMOZ.role_id : '',
                    no_log: 1 //设置为1后就不在这个接口打log，交给logStartShare接口
                },
                success: function (res) {
                    console.log(Z[30926]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callback && callback(data.data);
                        } else {
                            callbacks[Z[794]] && callbacks[Z[794]](1, {
                                errMsg: Z[30927] + data.msg
                            });
                        }
                    } else {
                        callbacks[Z[794]] && callbacks[Z[794]](1, {
                            errMsg: Z[30928]
                        });
                    }
                }
            });
        },

        updateShare: function (invite, invite_type, is_new, role_id, server_id, scene) {
            console.log(Z[30929]);
            var sdk_token = wx.getStorageSync(Z[30912]);
            wx.request({
                url: Z[26868] + HOST + Z[30930],
                method: Z[668],
                dataType: Z[6795],
                header: {
                    'content-type': Z[834] // 默认值
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
                    console.log(Z[30931] + JSON.stringify(res));
                }
            });
        },

        msgCheck: function (content, callback) {
            console.log(Z[30932] + content);

            let ret = {
                data: {}
            };
            dfSDK.messageCheck({

                content: content

            }, function (result) {
                if (result.data.passed) {
                    ret.data.state = 1;
                    ret.statusCode = 200;
                } else {
                    ret.data.state = 0;
                    ret.statusCode = 200;
                }
                callback && callback(ret);
            });
        },

        pay: function (data, callback) {
            this.startPay(data, callback);
        },

        //支付接口
        startPay: function (data, callback) {
            console.log(Z[30933] + JSON.stringify(data));

            var self = this;
            callbacks[Z[776]] = typeof callback == Z[30812] ? callback : null;
            //先下单
            this_pay_order = 0;
            var sdk_token = wx.getStorageSync(Z[30912]);
            var session_key = wx.getStorageSync(Z[30915]);
            if (!sdk_token) {
                callbacks[Z[776]] && callbacks[Z[776]](1, {
                    errMsg: Z[30934]
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
            public_data[Z[30935]] = JSON.stringify(order_data);

            //发起网络请求
            wx.request({
                url: Z[26868] + HOST + Z[30936],
                method: Z[668],
                dataType: Z[6795],
                header: {
                    'content-type': Z[834] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(Z[30937] + JSON.stringify(res));
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            if (data.data.ext == '') {
                                dfSDK.pay(data.data.pay_data, function (result) {
                                    //请求回调结果
                                    console.log(Z[30938] + JSON.stringify(result));
                                });
                            } else {
                                self.extDo({ ext1: data.data.ext, ext2: data.data.pay_data });
                            }
                        } else {
                            callbacks[Z[776]] && callbacks[Z[776]](1, {
                                errMsg: data.msg
                            });
                        }
                    } else {
                        callbacks[Z[700]] && callbacks[Z[700]](1, {
                            errMsg: Z[30918]
                        });
                    }
                }
            });
        },

        extDo: function (data) {
            wx.navigateToMiniProgram({
                appId: data.ext1,
                path: Z[30939] + data.ext2.trade_id + Z[30940] + data.ext2.total_fee / 100,
                extraData: {},
                envVersion: Z[30941],
                success(res) {
                    // 打开成功
                }
            });
        },

        //创建角色
        logCreateRole: function (data) {
            var uid = wx.getStorageSync(Z[30913]);
            var username = wx.getStorageSync(Z[30914]);

            var postData = {};
            postData[Z[30942]] = uid;
            postData[Z[30943]] = username;
            postData[Z[11846]] = data.roleid;
            postData[Z[30944]] = data.rolelevel;
            postData[Z[30945]] = data.rolename;
            postData[Z[158]] = data.serverid;

            if (data.roleid && data.serverid) {
                $lTNMOZ = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(Z[7], postData);
            dfSDK.submitData({
                data_type: 2,
                server_id: data.serverid,
                server_name: data.servername,
                role_id: data.roleid,
                role_name: data.rolename,
                role_level: data.rolelevel,
                money_num: 0,
                vip: 0
            }, function (result) {
                console.log(Z[30946] + JSON.stringify(result));
            });
        },

        //进入游戏
        logEnterGame: function (data) {
            var uid = wx.getStorageSync(Z[30913]);
            var username = wx.getStorageSync(Z[30914]);

            var postData = {};
            postData[Z[30942]] = uid;
            postData[Z[30943]] = username;
            postData[Z[11846]] = data.roleid;
            postData[Z[30944]] = data.rolelevel;
            postData[Z[30945]] = data.rolename;
            postData[Z[158]] = data.serverid;

            if (data.roleid && data.serverid) {
                $lTNMOZ = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(Z[6677], postData);

            //进入游戏确认邀请成功
            if ($lTMZON) {
                this.updateShare($lTMZON.invite, $lTMZON.invite_type, $lTMZON.is_new, data.roleid, data.serverid, $lTMZON.scene);
            }

            dfSDK.submitData({
                data_type: 3,
                server_id: data.serverid,
                server_name: data.servername,
                role_id: data.roleid,
                role_name: data.rolename,
                role_level: data.rolelevel,
                money_num: 0,
                vip: 0
            }, function (result) {
                console.log(Z[30947] + JSON.stringify(result));
            });
        },

        //角色升级
        logRoleUpLevel: function (data) {
            var uid = wx.getStorageSync(Z[30913]);
            var username = wx.getStorageSync(Z[30914]);

            var postData = {};
            postData[Z[30942]] = uid;
            postData[Z[30943]] = username;
            postData[Z[11846]] = data.roleid;
            postData[Z[30944]] = data.rolelevel;
            postData[Z[30945]] = data.rolename;
            postData[Z[158]] = data.serverid;

            if (data.roleid && data.serverid) {
                $lTNMOZ = {
                    role_id: data.roleid,
                    server_id: data.serverid,
                    server_name: data.servername,
                    role_name: data.rolename,
                    role_level: data.rolelevel,
                    role_createtime: data.rolecreatetime
                };
            }

            this.log(Z[30948], postData);
            dfSDK.submitData({
                data_type: 4,
                server_id: data.serverid,
                server_name: data.servername,
                role_id: data.roleid,
                role_name: data.rolename,
                role_level: data.rolelevel,
                money_num: 0,
                vip: 0
            }, function (result) {
                console.log(Z[30949] + JSON.stringify(result));
            });
        },

        //获取唯一设备码（自定义）
        uuid: function (radix, len) {
            var chars = Z[30950].split('');
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
            var uuid = wx.getStorageSync(Z[30902]);
            var idfv = wx.getStorageSync(Z[30903]);
            var ad_code = wx.getStorageSync(Z[30904]);

            return {
                game_id: config.game_id,
                game_pkg: config.game_pkg,
                partner_id: config.partner_id,
                partner_label: config.partner_label,
                ad_code: ad_code,
                uuid: uuid,
                idfv: idfv,
                mac: Z[30951],
                is_from_min: 1,
                dname: sysInfo.model,
                net_type: sysInfo.wifiSignal == 0 ? '4G' : Z[30952],
                os_ver: sysInfo.system,
                sdk_ver: sysInfo.version, //存放的是微信版本号
                game_ver: config.game_ver, //存放的是SDK版本号
                device: sysInfo.platform == Z[567] ? 1 : 2
            };
        },

        //统一发送log
        log: function (type, data) {
            var public_data = this.getPublicData();
            for (var key in data) {
                public_data[key] = data[key];
            }

            console.log(Z[30953] + type);
            console.log(public_data);

            wx.request({
                url: Z[26868] + HOST + Z[30954] + type + Z[30955] + encodeURIComponent(JSON.stringify(public_data))
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
        weiduanHelper: function () {},

        // 设置 wx.shareMessageToFriend 接口 query 字段的值
        setMessageToFriendQuery: function (data, callback) {
            var cp_activity_id = data.activity_id;
            var result = wx.setMessageToFriendQuery({ shareMessageToFriendScene: cp_activity_id });

            callback(result);
        },

        subscribeMessage: function (tmplIds, callback) {
            console.log(Z[30956] + tmplIds);
            //获取模板ID
            callbacks[Z[805]] = typeof callback == Z[30812] ? callback : null;
            wx.requestSubscribeMessage({
                tmplIds: tmplIds,
                success(res) {
                    console.log(Z[30957]);
                    console.log(res);
                    callbacks[Z[805]] && callbacks[Z[805]](res);
                },
                fail(res) {
                    console.log(Z[30958]);
                    console.log(res);
                    callbacks[Z[805]] && callbacks[Z[805]](res);
                }
            });
        }

    };
}

function run(method, data, callback) {
    method in $lTNMZO && $lTNMZO[method](data, callback);
}

exports.init = function (data, callback) {
    run(Z[371], data, callback);
};

exports.login = function (callback) {
    run(Z[700], '', callback);
};

exports.login = function (callback) {
    run(Z[700], '', callback);
};

exports.pay = function (data, callback) {
    run(Z[776], data, callback);
};

exports.openService = function () {
    run(Z[795]);
};

exports.logCreateRole = function (serverId, serverName, roleId, roleName, roleLevel, rolecreatetime) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel,
        rolecreatetime: rolecreatetime
    };
    run(Z[789], data);
};

exports.logEnterGame = function (serverId, serverName, roleId, roleName, roleLevel, rolecreatetime) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel,
        rolecreatetime: rolecreatetime
    };

    run(Z[791], data);
};

exports.logRoleUpLevel = function (serverId, serverName, roleId, roleName, roleLevel, rolecreatetime) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel,
        rolecreatetime: rolecreatetime
    };
    run(Z[793], data);
};

exports.share = function (type) {
    var data = {
        type: type
    };
    run(Z[794], data);
};

exports.msgCheck = function (data, callback) {
    run(Z[649], data, callback);
};

exports.downloadClient = function () {
    run(Z[30959]);
};

exports.getConfig = function () {
    return {
        game_id: config.game_id,
        game_pkg: config.game_pkg,
        partner_id: config.partner_id
    };
};

exports.getPublicData = function () {
    run(Z[30960]);
};

exports.weiduanHelper = function () {
    run(Z[797]);
};

exports.setMessageToFriendQuery = function (data, callback) {
    run(Z[30961], data, callback);
};
exports.subscribeMessage = function (data, callback) {
    run(Z[805], data, callback);
};