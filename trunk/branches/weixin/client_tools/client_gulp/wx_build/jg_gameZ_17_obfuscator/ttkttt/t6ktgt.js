var g = wx.u$;
import YqSdk from "../utils/yq_wxsdk";
//TODO 替换对应参数
var config = {
    game_id: 256,
    game_pkg: g[1886],
    partner_label: g[1887],
    partner_id: g[1888],
    game_ver: g[1889],
    is_auth: false, //授权登录
    partner_game_id: g[1890],
    tmpId: { 1: g[1891], 2: g[1892], 3: g[1893] // 订阅的类型 和 模板id
    } };
window.config = config;
var pT4H1S = pTHS14();
var HOST = g[1894];
var pT4HS1 = null;
var pTH1S4 = null;
var sysInfo = wx.getSystemInfoSync();
var platform = sysInfo.platform;
var partner_user_info = null;

function pTHS14() {
    var callbacks = {};
    var this_pay_order = 0;
    return {
        order_data: {},
        init: function (ops, callback) {
            var game_ver = ops && ops.game_ver ? ops.game_ver : 0;
            console.log(g[1895]);
            var self = this;

            var uuid = wx.getStorageSync(g[1896]);
            var is_new;
            if (!uuid) {
                uuid = self.uuid(16, 32);
                wx.setStorageSync(g[1896], uuid);
                is_new = 1;
            } else {
                is_new = 0;
            }
            var idfv = wx.getStorageSync(g[1897]);
            if (!idfv) {
                idfv = self.uuid(16, 32);
                wx.setStorageSync(g[1897], idfv);
            }

            var info = wx.getLaunchOptionsSync();
            var scene = info.scene ? info.scene : '';

            //判断今天是否已经上报过
            if (is_new && info.query && info.query.ad_code) {
                wx.setStorageSync(g[1898], info.query.ad_code);
            }

            var data = {
                install: is_new,
                scene: scene
            };
            self.log(g[1899], data);
            wx.showShareMenu();

            //玩家是分享过来的，单独上报给服务器
            var invite = info.query && info.query.invite ? info.query.invite : '';
            var invite_type = info.query && info.query.invite_type ? info.query.invite_type : '';

            if (invite) {
                pTH1S4 = {
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
            console.log(g[1900]);
            callbacks[g[301]] = typeof callback == g[1083] ? callback : null;
            var self = this;
            YqSdk.init({ game_id: config.partner_game_id }, function (code, msg, data) {
                YqSdk.login(null, function (code, msg, data) {
                    if (code == 0) {
                        self.do_login(data);
                        partner_user_info = data;
                    }
                });
            });
        },

        do_login: function (info) {
            var self = this;
            //发起网络请求
            var public_data = self.getPublicData();
            public_data[g[1901]] = JSON.stringify(info);
            if (pTH1S4 && typeof pTH1S4 == g[983]) {
                for (var key in pTH1S4) {
                    public_data[key] = pTH1S4[key];
                }
            }

            wx.request({
                url: g[1902] + HOST + g[1903],
                method: g[263],
                dataType: g[1328],
                header: {
                    'content-type': g[461] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(g[1904] + JSON.stringify(res));

                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {

                            try {
                                wx.setStorageSync(g[1905], data.data.sdk_token);
                                wx.setStorageSync(g[1906], data.data.user_id);
                                wx.setStorageSync(g[1907], data.data.username);
                                if (data.data.ext) {
                                    wx.setStorageSync(g[1908], data.data.ext);
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
                            callbacks[g[301]] && callbacks[g[301]](0, userData);
                        } else {
                            callbacks[g[301]] && callbacks[g[301]](1, {
                                errMsg: data.msg
                            });
                        }

                        self.getShareInfo(g[1909], function (data) {
                            console.log(g[1910]);
                            wx.onShareAppMessage(function () {
                                //记录开始分享
                                self.logStartShare(g[1909]);
                                return {
                                    title: data.title,
                                    imageUrl: data.img,
                                    query: data.query
                                };
                            });
                        });
                    } else {
                        callbacks[g[301]] && callbacks[g[301]](1, {
                            errMsg: g[1911]
                        });
                    }
                }
            });
        },

        share: function (data) {
            callbacks[g[414]] = typeof callback == g[1083] ? callback : null;
            var type = data.type || g[414];
            console.log(g[1912] + type);
            var self = this;
            this.getShareInfo(type, function (data) {
                //记录开始分享
                self.logStartShare(type);
                var query_str = data.query;
                wx.shareAppMessage({
                    title: data.title,
                    imageUrl: data.img,
                    query: data.query
                });
            });
        },

        logStartShare: function (type) {
            var sdk_token = wx.getStorageSync(g[1905]);
            wx.request({
                url: g[1902] + HOST + g[1913],
                method: g[263],
                dataType: g[1328],
                header: {
                    'content-type': g[461] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    server_id: pT4HS1 ? pT4HS1.server_id : '',
                    role_id: pT4HS1 ? pT4HS1.role_id : '',
                    type: type
                },
                success: function (res) {}
            });
        },

        openService: function () {
            wx.openCustomerServiceConversation();
        },

        checkGameVersion: function (game_ver, callback) {
            console.log(g[1914]);
            var sdk_token = wx.getStorageSync(g[1905]);
            wx.request({
                url: g[1902] + HOST + g[1915],
                method: g[263],
                dataType: g[1328],
                header: {
                    'content-type': g[461] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    game_ver: game_ver
                },
                success: function (res) {
                    console.log(g[1916] + JSON.stringify(res));

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
            console.log(g[1917]);
            var sdk_token = wx.getStorageSync(g[1905]);
            wx.request({
                url: g[1902] + HOST + g[1918],
                method: g[263],
                dataType: g[1328],
                header: {
                    'content-type': g[461] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    type: type,
                    server_id: pT4HS1 ? pT4HS1.server_id : '',
                    role_id: pT4HS1 ? pT4HS1.role_id : '',
                    no_log: 1 //设置为1后就不在这个接口打log，交给logStartShare接口
                },
                success: function (res) {
                    console.log(g[1919]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callback && callback(data.data);
                        } else {
                            callbacks[g[414]] && callbacks[g[414]](1, {
                                errMsg: g[1920] + data.msg
                            });
                        }
                    } else {
                        callbacks[g[414]] && callbacks[g[414]](1, {
                            errMsg: g[1921]
                        });
                    }
                }
            });
        },

        updateShare: function (invite, invite_type, is_new, role_id, server_id, scene) {
            console.log(g[1922]);
            var sdk_token = wx.getStorageSync(g[1905]);
            wx.request({
                url: g[1902] + HOST + g[1923],
                method: g[263],
                dataType: g[1328],
                header: {
                    'content-type': g[461] // 默认值
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
                    console.log(g[1924] + JSON.stringify(res));
                }
            });
        },

        msgCheck: function (content, callback) {
            console.log(g[1925] + content);
            let ret = {
                data: {}
            };
            YqSdk.msgSecCheck({
                'game_id': config.partner_game_id,
                'openid': partner_user_info.channel_openid,
                'content': content,
                'scene': 1
            }, function (code, msg, data) {
                // 回调
                console.log(code, msg, data);
                if (code == 0 && data.result.suggest == g[1926]) {
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
            console.log(g[1927] + JSON.stringify(data));

            var self = this;
            callbacks[g[390]] = typeof callback == g[1083] ? callback : null;
            //先下单
            this_pay_order = 0;
            var sdk_token = wx.getStorageSync(g[1905]);
            var session_key = wx.getStorageSync(g[1908]);
            if (!sdk_token) {
                callbacks[g[390]] && callbacks[g[390]](1, {
                    errMsg: g[1928]
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
                channel_openid: partner_user_info.channel_openid
            };
            self.order_data = order_data;

            var public_data = self.getPublicData();
            public_data[g[1929]] = JSON.stringify(order_data);

            //发起网络请求
            wx.request({
                url: g[1902] + HOST + g[1930],
                method: g[263],
                dataType: g[1328],
                header: {
                    'content-type': g[461] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(g[1931] + JSON.stringify(res));
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            if (data.data.ext == '') {
                                YqSdk.pay(data.data.pay_data, function (code, msg, data) {
                                    console.log(code, msg, data);
                                });
                            } else {
                                self.extDo({ ext1: data.data.ext, ext2: data.data.pay_data });
                            }
                        } else {
                            callbacks[g[390]] && callbacks[g[390]](1, {
                                errMsg: data.msg
                            });
                        }
                    } else {
                        callbacks[g[301]] && callbacks[g[301]](1, {
                            errMsg: g[1911]
                        });
                    }
                }
            });
        },

        extDo: function (data) {
            wx.navigateToMiniProgram({
                appId: data.ext1,
                path: g[1932] + data.ext2.game_trade_no + g[1933] + data.ext2.amount,
                extraData: {},
                envVersion: g[1934],
                success(res) {
                    // 打开成功
                }
            });
        },

        //创建角色
        logCreateRole: function (data) {
            var uid = wx.getStorageSync(g[1906]);
            var username = wx.getStorageSync(g[1907]);

            var postData = {};
            postData[g[1935]] = uid;
            postData[g[1936]] = username;
            postData[g[1937]] = data.roleid;
            postData[g[1938]] = data.rolelevel;
            postData[g[1939]] = data.rolename;
            postData[g[25]] = data.serverid;

            if (data.roleid && data.serverid) {
                pT4HS1 = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(g[557], postData);
        },

        //进入游戏
        logEnterGame: function (data) {
            var uid = wx.getStorageSync(g[1906]);
            var username = wx.getStorageSync(g[1907]);

            var postData = {};
            postData[g[1935]] = uid;
            postData[g[1936]] = username;
            postData[g[1937]] = data.roleid;
            postData[g[1938]] = data.rolelevel;
            postData[g[1939]] = data.rolename;
            postData[g[25]] = data.serverid;

            if (data.roleid && data.serverid) {
                pT4HS1 = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(g[1940], postData);

            //进入游戏确认邀请成功
            if (pTH1S4) {
                this.updateShare(pTH1S4.invite, pTH1S4.invite_type, pTH1S4.is_new, data.roleid, data.serverid, pTH1S4.scene);
            }
        },

        //角色升级
        logRoleUpLevel: function (data) {
            var uid = wx.getStorageSync(g[1906]);
            var username = wx.getStorageSync(g[1907]);

            var postData = {};
            postData[g[1935]] = uid;
            postData[g[1936]] = username;
            postData[g[1937]] = data.roleid;
            postData[g[1938]] = data.rolelevel;
            postData[g[1939]] = data.rolename;
            postData[g[25]] = data.serverid;

            if (data.roleid && data.serverid) {
                pT4HS1 = {
                    role_id: data.roleid,
                    server_id: data.serverid,
                    server_name: data.servername,
                    role_name: data.rolename,
                    role_level: data.rolelevel,
                    role_createtime: data.rolecreatetime
                };
            }

            this.log(g[1941], postData);
        },

        //获取唯一设备码（自定义）
        uuid: function (radix, len) {
            var chars = g[1942].split('');
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
            var uuid = wx.getStorageSync(g[1896]);
            var idfv = wx.getStorageSync(g[1897]);
            var ad_code = wx.getStorageSync(g[1898]);

            return {
                game_id: config.game_id,
                game_pkg: config.game_pkg,
                partner_id: config.partner_id,
                partner_label: config.partner_label,
                ad_code: ad_code,
                uuid: uuid,
                idfv: idfv,
                mac: g[1943],
                is_from_min: 1,
                dname: sysInfo.model,
                net_type: sysInfo.wifiSignal == 0 ? '4G' : g[1944],
                os_ver: sysInfo.system,
                sdk_ver: sysInfo.version, //存放的是微信版本号
                game_ver: config.game_ver, //存放的是SDK版本号
                device: sysInfo.platform == g[124] ? 1 : 2
            };
        },

        //统一发送log
        log: function (type, data) {
            var public_data = this.getPublicData();
            for (var key in data) {
                public_data[key] = data[key];
            }

            console.log(g[1945] + type);
            console.log(public_data);

            wx.request({
                url: g[1902] + HOST + g[1946] + type + g[1947] + encodeURIComponent(JSON.stringify(public_data))
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
            console.log(g[1948] + tmplIds);
            //获取模板ID
            callbacks[g[427]] = typeof callback == g[1083] ? callback : null;
            wx.requestSubscribeMessage({
                tmplIds: tmplIds,
                success(res) {
                    console.log(g[1949]);
                    console.log(res);
                    callbacks[g[427]] && callbacks[g[427]](res);
                },
                fail(res) {
                    console.log(g[1950]);
                    console.log(res);
                    callbacks[g[427]] && callbacks[g[427]](res);
                }
            });
        }

    };
}

function run(method, data, callback) {
    method in pT4H1S && pT4H1S[method](data, callback);
}

exports.init = function (data, callback) {
    run(g[276], data, callback);
};

exports.login = function (callback) {
    run(g[301], '', callback);
};

exports.login = function (callback) {
    run(g[301], '', callback);
};

exports.pay = function (data, callback) {
    run(g[390], data, callback);
};

exports.openService = function () {
    run(g[415]);
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
    run(g[405], data);
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

    run(g[408], data);
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
    run(g[411], data);
};

exports.share = function (type) {
    var data = {
        type: type
    };
    run(g[414], data);
};

exports.msgCheck = function (data, callback) {
    run(g[233], data, callback);
};

exports.downloadClient = function () {
    run(g[1951]);
};

exports.getConfig = function () {
    return {
        game_id: config.game_id,
        game_pkg: config.game_pkg,
        partner_id: config.partner_id
    };
};

exports.getPublicData = function () {
    run(g[1952]);
};

exports.weiduanHelper = function () {
    run(g[417]);
};

exports.setMessageToFriendQuery = function (data, callback) {
    run(g[1953], data, callback);
};
exports.subscribeMessage = function (data, callback) {
    run(g[427], data, callback);
};