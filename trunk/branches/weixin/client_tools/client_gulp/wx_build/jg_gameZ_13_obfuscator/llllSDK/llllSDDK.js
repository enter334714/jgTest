var Z = wx.$L;
import { dfSDK } from '../utils/wxdfsdk';
//TODO 替换对应参数
var config = {
    game_id: 256,
    game_pkg: Z[31571], //热游-曜石神魔录
    partner_label: Z[31572],
    partner_id: Z[31573],
    game_ver: Z[31574],
    is_auth: false, //授权登录
    partner_game_id: Z[31575]
};
window.config = config;
var $lTNMZO = $lTMOZN();
var HOST = Z[31576];
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
            console.log(Z[31577]);
            var self = this;

            var uuid = wx.getStorageSync(Z[31578]);
            var is_new;
            if (!uuid) {
                uuid = self.uuid(16, 32);
                wx.setStorageSync(Z[31578], uuid);
                is_new = 1;
            } else {
                is_new = 0;
            }
            var idfv = wx.getStorageSync(Z[31579]);
            if (!idfv) {
                idfv = self.uuid(16, 32);
                wx.setStorageSync(Z[31579], idfv);
            }

            var info = wx.getLaunchOptionsSync();
            var scene = info.scene ? info.scene : '';

            //判断今天是否已经上报过
            if (is_new && info.query && info.query.ad_code) {
                wx.setStorageSync(Z[31580], info.query.ad_code);
            }

            var data = {
                install: is_new,
                scene: scene
            };
            self.log(Z[1145], data);
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
            console.log(Z[31581]);
            callbacks[Z[701]] = typeof callback == Z[31488] ? callback : null;
            var self = this;
            dfSDK.login(function (result) {
                //登录回调
                if (result.status == 1) {
                    //登录成功
                    console.log(Z[31582] + result.data.user_name);
                    console.log(Z[31583] + result.data.user_id);
                    console.log(Z[31584] + result.data.open_id);
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
            public_data[Z[31585]] = JSON.stringify(info);
            if ($lTMZON && typeof $lTMZON == Z[1140]) {
                for (var key in $lTMZON) {
                    public_data[key] = $lTMZON[key];
                }
            }

            wx.request({
                url: Z[27049] + HOST + Z[31586],
                method: Z[669],
                dataType: Z[6244],
                header: {
                    'content-type': Z[838] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(Z[31587] + JSON.stringify(res));

                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            try {
                                wx.setStorageSync(Z[31588], data.data.sdk_token);
                                wx.setStorageSync(Z[31589], data.data.user_id);
                                wx.setStorageSync(Z[31590], data.data.username);
                                if (data.data.ext) {
                                    wx.setStorageSync(Z[31591], data.data.ext);
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
                            callbacks[Z[701]] && callbacks[Z[701]](0, userData);
                        } else {
                            callbacks[Z[701]] && callbacks[Z[701]](1, {
                                errMsg: data.msg
                            });
                        }

                        self.getShareInfo(Z[31592], function (data) {
                            console.log(Z[31593]);
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
                                self.logStartShare(Z[31592]);
                                return {
                                    title: data.title,
                                    imageUrl: data.img,
                                    query: data.query
                                };
                            });
                        });
                    } else {
                        callbacks[Z[701]] && callbacks[Z[701]](1, {
                            errMsg: Z[31594]
                        });
                    }
                }
            });
        },

        share: function (data) {
            callbacks[Z[798]] = typeof callback == Z[31488] ? callback : null;
            var type = data.type || Z[798];
            console.log(Z[31595] + type);
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
            var sdk_token = wx.getStorageSync(Z[31588]);
            wx.request({
                url: Z[27049] + HOST + Z[31596],
                method: Z[669],
                dataType: Z[6244],
                header: {
                    'content-type': Z[838] // 默认值
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
            console.log(Z[31597]);
            var sdk_token = wx.getStorageSync(Z[31588]);
            wx.request({
                url: Z[27049] + HOST + Z[31598],
                method: Z[669],
                dataType: Z[6244],
                header: {
                    'content-type': Z[838] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    game_ver: game_ver
                },
                success: function (res) {
                    console.log(Z[31599] + JSON.stringify(res));

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
            console.log(Z[31600]);
            var sdk_token = wx.getStorageSync(Z[31588]);
            wx.request({
                url: Z[27049] + HOST + Z[31601],
                method: Z[669],
                dataType: Z[6244],
                header: {
                    'content-type': Z[838] // 默认值
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
                    console.log(Z[31602]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callback && callback(data.data);
                        } else {
                            callbacks[Z[798]] && callbacks[Z[798]](1, {
                                errMsg: Z[31603] + data.msg
                            });
                        }
                    } else {
                        callbacks[Z[798]] && callbacks[Z[798]](1, {
                            errMsg: Z[31604]
                        });
                    }
                }
            });
        },

        updateShare: function (invite, invite_type, is_new, role_id, server_id, scene) {
            console.log(Z[31605]);
            var sdk_token = wx.getStorageSync(Z[31588]);
            wx.request({
                url: Z[27049] + HOST + Z[31606],
                method: Z[669],
                dataType: Z[6244],
                header: {
                    'content-type': Z[838] // 默认值
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
                    console.log(Z[31607] + JSON.stringify(res));
                }
            });
        },

        msgCheck: function (content, callback) {
            console.log(Z[31608] + content);

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
            console.log(Z[31609] + JSON.stringify(data));

            var self = this;
            callbacks[Z[780]] = typeof callback == Z[31488] ? callback : null;
            //先下单
            this_pay_order = 0;
            var sdk_token = wx.getStorageSync(Z[31588]);
            var session_key = wx.getStorageSync(Z[31591]);
            if (!sdk_token) {
                callbacks[Z[780]] && callbacks[Z[780]](1, {
                    errMsg: Z[31610]
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
            public_data[Z[31611]] = JSON.stringify(order_data);

            //发起网络请求
            wx.request({
                url: Z[27049] + HOST + Z[31612],
                method: Z[669],
                dataType: Z[6244],
                header: {
                    'content-type': Z[838] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(Z[31613] + JSON.stringify(res));
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            if (data.data.ext == '') {
                                dfSDK.pay(data.data.pay_data, function (result) {
                                    //请求回调结果
                                    console.log(Z[31614] + JSON.stringify(result));
                                });
                            } else {
                                self.extDo({ ext1: data.data.ext, ext2: data.data.pay_data });
                            }
                        } else {
                            callbacks[Z[780]] && callbacks[Z[780]](1, {
                                errMsg: data.msg
                            });
                        }
                    } else {
                        callbacks[Z[701]] && callbacks[Z[701]](1, {
                            errMsg: Z[31594]
                        });
                    }
                }
            });
        },

        extDo: function (data) {
            wx.navigateToMiniProgram({
                appId: data.ext1,
                path: Z[31615] + data.ext2.trade_id + Z[31616] + data.ext2.total_fee / 100,
                extraData: {},
                envVersion: Z[31617],
                success(res) {
                    // 打开成功
                }
            });
        },

        //创建角色
        logCreateRole: function (data) {
            var uid = wx.getStorageSync(Z[31589]);
            var username = wx.getStorageSync(Z[31590]);

            var postData = {};
            postData[Z[31618]] = uid;
            postData[Z[31619]] = username;
            postData[Z[11418]] = data.roleid;
            postData[Z[31620]] = data.rolelevel;
            postData[Z[31621]] = data.rolename;
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
                console.log(Z[31622] + JSON.stringify(result));
            });
        },

        //进入游戏
        logEnterGame: function (data) {
            var uid = wx.getStorageSync(Z[31589]);
            var username = wx.getStorageSync(Z[31590]);

            var postData = {};
            postData[Z[31618]] = uid;
            postData[Z[31619]] = username;
            postData[Z[11418]] = data.roleid;
            postData[Z[31620]] = data.rolelevel;
            postData[Z[31621]] = data.rolename;
            postData[Z[158]] = data.serverid;

            if (data.roleid && data.serverid) {
                $lTNMOZ = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(Z[6126], postData);

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
                console.log(Z[31623] + JSON.stringify(result));
            });
        },

        //角色升级
        logRoleUpLevel: function (data) {
            var uid = wx.getStorageSync(Z[31589]);
            var username = wx.getStorageSync(Z[31590]);

            var postData = {};
            postData[Z[31618]] = uid;
            postData[Z[31619]] = username;
            postData[Z[11418]] = data.roleid;
            postData[Z[31620]] = data.rolelevel;
            postData[Z[31621]] = data.rolename;
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

            this.log(Z[31624], postData);
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
                console.log(Z[31625] + JSON.stringify(result));
            });
        },

        //获取唯一设备码（自定义）
        uuid: function (radix, len) {
            var chars = Z[31626].split('');
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
            var uuid = wx.getStorageSync(Z[31578]);
            var idfv = wx.getStorageSync(Z[31579]);
            var ad_code = wx.getStorageSync(Z[31580]);

            return {
                game_id: config.game_id,
                game_pkg: config.game_pkg,
                partner_id: config.partner_id,
                partner_label: config.partner_label,
                ad_code: ad_code,
                uuid: uuid,
                idfv: idfv,
                mac: Z[31627],
                is_from_min: 1,
                dname: sysInfo.model,
                net_type: sysInfo.wifiSignal == 0 ? '4G' : Z[31628],
                os_ver: sysInfo.system,
                sdk_ver: sysInfo.version, //存放的是微信版本号
                game_ver: config.game_ver, //存放的是SDK版本号
                device: sysInfo.platform == Z[568] ? 1 : 2
            };
        },

        //统一发送log
        log: function (type, data) {
            var public_data = this.getPublicData();
            for (var key in data) {
                public_data[key] = data[key];
            }

            console.log(Z[31629] + type);
            console.log(public_data);

            wx.request({
                url: Z[27049] + HOST + Z[31630] + type + Z[31631] + encodeURIComponent(JSON.stringify(public_data))
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

            dfSDK.getTransferInfo(function (res) {
                console.log(Z[31632], res);
            });
        },

        // 设置 wx.shareMessageToFriend 接口 query 字段的值
        setMessageToFriendQuery: function (data, callback) {
            var cp_activity_id = data.activity_id;
            var result = wx.setMessageToFriendQuery({ shareMessageToFriendScene: cp_activity_id });

            callback(result);
        },

        subscribeMessage: function (tmplIds, callback) {
            console.log(Z[31633] + tmplIds);
            //获取模板ID
            callbacks[Z[809]] = typeof callback == Z[31488] ? callback : null;
            wx.requestSubscribeMessage({
                tmplIds: tmplIds,
                success(res) {
                    console.log(Z[31634]);
                    console.log(res);
                    callbacks[Z[809]] && callbacks[Z[809]](res);
                },
                fail(res) {
                    console.log(Z[31635]);
                    console.log(res);
                    callbacks[Z[809]] && callbacks[Z[809]](res);
                }
            });
        }

    };
}

function run(method, data, callback) {
    method in $lTNMZO && $lTNMZO[method](data, callback);
}

exports.init = function (data, callback) {
    run(Z[373], data, callback);
};

exports.login = function (callback) {
    run(Z[701], '', callback);
};

exports.login = function (callback) {
    run(Z[701], '', callback);
};

exports.pay = function (data, callback) {
    run(Z[780], data, callback);
};

exports.openService = function () {
    run(Z[799]);
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
    run(Z[793], data);
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

    run(Z[795], data);
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
    run(Z[797], data);
};

exports.share = function (type) {
    var data = {
        type: type
    };
    run(Z[798], data);
};

exports.msgCheck = function (data, callback) {
    run(Z[650], data, callback);
};

exports.downloadClient = function () {
    run(Z[31636]);
};

exports.getConfig = function () {
    return {
        game_id: config.game_id,
        game_pkg: config.game_pkg,
        partner_id: config.partner_id
    };
};

exports.getPublicData = function () {
    run(Z[31637]);
};

exports.weiduanHelper = function () {
    run(Z[801]);
};

exports.setMessageToFriendQuery = function (data, callback) {
    run(Z[31638], data, callback);
};
exports.subscribeMessage = function (data, callback) {
    run(Z[809], data, callback);
};