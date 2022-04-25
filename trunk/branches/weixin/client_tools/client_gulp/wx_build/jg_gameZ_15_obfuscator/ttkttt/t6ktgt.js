var P = wx.$y;
import { default as ONEFIVE } from '../utils/onefiveSdk';
var sdk = new ONEFIVE();
//TODO 替换对应参数
var config = {
    game_id: 256,
    game_pkg: P[1887],
    partner_label: P[1888],
    partner_id: P[1889],
    game_ver: P[1890],
    tmpId: { 1: P[1891], 2: P[1892], 3: P[1893] }, // 订阅的类型 和 模板id
    is_auth: false //授权登录
};
window.config = config;
var P__U9GV = P__9VGU();
var HOST = P[1894];
var P__U9VG = null;
var P__9GVU = null;
var sysInfo = wx.getSystemInfoSync();
var platform = sysInfo.platform;
var partner_user_info = null;

function P__9VGU() {
    var callbacks = {};
    var this_pay_order = 0;
    return {
        order_data: {},
        init: function (ops, callback) {
            var game_ver = ops && ops.game_ver ? ops.game_ver : 0;
            console.log(P[1895]);
            var self = this;

            var uuid = wx.getStorageSync(P[1896]);
            var is_new;
            if (!uuid) {
                uuid = self.uuid(16, 32);
                wx.setStorageSync(P[1896], uuid);
                is_new = 1;
            } else {
                is_new = 0;
            }
            var idfv = wx.getStorageSync(P[1897]);
            if (!idfv) {
                idfv = self.uuid(16, 32);
                wx.setStorageSync(P[1897], idfv);
            }

            var info = wx.getLaunchOptionsSync();
            var scene = info.scene ? info.scene : '';

            //判断今天是否已经上报过
            if (is_new && info.query && info.query.ad_code) {
                wx.setStorageSync(P[1898], info.query.ad_code);
            }

            var data = {
                install: is_new,
                scene: scene
            };
            self.log(P[1899], data);
            wx.showShareMenu();

            //玩家是分享过来的，单独上报给服务器
            var invite = info.query && info.query.invite ? info.query.invite : '';
            var invite_type = info.query && info.query.invite_type ? info.query.invite_type : '';

            if (invite) {
                P__9GVU = {
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
            console.log(P[1900]);
            callbacks[P[302]] = typeof callback == P[1084] ? callback : null;
            var self = this;
            sdk.init({}, function (status, data) {
                if (status == 1) {
                    console.log(P[1901]);
                    sdk.login(function (status, data) {
                        if (status == 1) {
                            console.log(P[1902]);
                            partner_user_info = data;
                            self.do_login(data);
                            //TODO 研发进行服务器登录验证
                        } else if (status == 0) {
                            //失败时data值为 {msg:"失败原因"}
                            console.log(P[1903] + data.msg);
                        }
                    });
                } else if (status == 0) {
                    //失败时data值为 {msg:"失败原因"}
                    console.log(P[1904] + data.msg);
                }
            });
        },

        do_login: function (info) {
            var self = this;
            //发起网络请求
            var public_data = self.getPublicData();
            public_data[P[1905]] = JSON.stringify(info);
            if (P__9GVU && typeof P__9GVU == P[984]) {
                for (var key in P__9GVU) {
                    public_data[key] = P__9GVU[key];
                }
            }

            wx.request({
                url: P[1906] + HOST + P[1907],
                method: P[263],
                dataType: P[1329],
                header: {
                    'content-type': P[462] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(P[1908] + JSON.stringify(res));

                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            try {
                                wx.setStorageSync(P[1909], data.data.sdk_token);
                                wx.setStorageSync(P[1910], data.data.user_id);
                                wx.setStorageSync(P[1911], data.data.username);
                                if (data.data.ext) {
                                    wx.setStorageSync(P[1912], data.data.ext);
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
                            callbacks[P[302]] && callbacks[P[302]](0, userData);
                        } else {
                            callbacks[P[302]] && callbacks[P[302]](1, {
                                errMsg: data.msg
                            });
                        }

                        self.getShareInfo(P[1913], function (data) {
                            console.log(P[1914]);
                            sdk.onShareAppMessage({
                                query: data.query
                            });
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
                        callbacks[P[302]] && callbacks[P[302]](1, {
                            errMsg: P[1915]
                        });
                    }
                }
            });
        },

        share: function (data) {
            callbacks[P[415]] = typeof callback == P[1084] ? callback : null;
            var type = data.type || P[415];
            console.log(P[1916] + type);
            var self = this;
            this.getShareInfo(type, function (data) {
                //记录开始分享
                self.logStartShare(type);
                var query_str = data.query;
                sdk.userShare({}, function (status, data1) {
                    if (status == 1) {
                        var query = data.query;
                        var title = data.title;
                        var imageUrl = data.img;
                        //主动转发 query拼接上我方参数
                        wx.shareAppMessage({
                            title: data1.title ? data1.title : title,
                            imageUrl: data1.imageUrl ? data1.imageUrl : imageUrl,
                            query: query + '&' + data1.query
                        });
                    } else {
                        //研发缺省处理
                    }
                });
                // wx.shareAppMessage({
                //     title: data.title,
                //     imageUrl: data.img,
                //     query: data.query,
                // });
            });
        },

        logStartShare: function (type) {
            var sdk_token = wx.getStorageSync(P[1909]);
            wx.request({
                url: P[1906] + HOST + P[1917],
                method: P[263],
                dataType: P[1329],
                header: {
                    'content-type': P[462] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    server_id: P__U9VG ? P__U9VG.server_id : '',
                    role_id: P__U9VG ? P__U9VG.role_id : '',
                    type: type
                },
                success: function (res) {}
            });
        },

        openService: function () {},

        checkGameVersion: function (game_ver, callback) {
            console.log(P[1918]);
            var sdk_token = wx.getStorageSync(P[1909]);
            wx.request({
                url: P[1906] + HOST + P[1919],
                method: P[263],
                dataType: P[1329],
                header: {
                    'content-type': P[462] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    game_ver: game_ver
                },
                success: function (res) {
                    console.log(P[1920] + JSON.stringify(res));

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
            console.log(P[1921]);
            var sdk_token = wx.getStorageSync(P[1909]);
            wx.request({
                url: P[1906] + HOST + P[1922],
                method: P[263],
                dataType: P[1329],
                header: {
                    'content-type': P[462] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    type: type,
                    server_id: P__U9VG ? P__U9VG.server_id : '',
                    role_id: P__U9VG ? P__U9VG.role_id : '',
                    no_log: 1 //设置为1后就不在这个接口打log，交给logStartShare接口
                },
                success: function (res) {
                    console.log(P[1923]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callback && callback(data.data);
                        } else {
                            callbacks[P[415]] && callbacks[P[415]](1, {
                                errMsg: P[1924] + data.msg
                            });
                        }
                    } else {
                        callbacks[P[415]] && callbacks[P[415]](1, {
                            errMsg: P[1925]
                        });
                    }
                }
            });
        },

        updateShare: function (invite, invite_type, is_new, role_id, server_id, scene) {
            console.log(P[1926]);
            var sdk_token = wx.getStorageSync(P[1909]);
            wx.request({
                url: P[1906] + HOST + P[1927],
                method: P[263],
                dataType: P[1329],
                header: {
                    'content-type': P[462] // 默认值
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
                    console.log(P[1928] + JSON.stringify(res));
                }
            });
        },

        msgCheck: function (content, callback) {
            console.log(P[1929] + content);

            let ret = {
                data: {}
            };
            wx.request({
                url: P[1906] + HOST + P[1930] + config.partner_id + '/' + config.game_pkg,
                method: P[263],
                dataType: P[1329],
                header: {
                    'content-type': P[462] // 默认值
                },
                data: {
                    content: content,
                    uid: partner_user_info.userId
                },
                success: function (res) {
                    console.log(P[1931] + JSON.stringify(res));
                    console.log(res);
                    callback && callback(res);
                }
            });
        },

        pay: function (data, callback) {
            this.startPay(data, callback);
        },

        //支付接口
        startPay: function (data, callback) {
            console.log(P[1932] + JSON.stringify(data));

            var self = this;
            callbacks[P[391]] = typeof callback == P[1084] ? callback : null;
            //先下单
            this_pay_order = 0;
            var sdk_token = wx.getStorageSync(P[1909]);
            var session_key = wx.getStorageSync(P[1912]);
            if (!sdk_token) {
                callbacks[P[391]] && callbacks[P[391]](1, {
                    errMsg: P[1933]
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
            public_data[P[1934]] = JSON.stringify(order_data);

            //发起网络请求
            wx.request({
                url: P[1906] + HOST + P[1935],
                method: P[263],
                dataType: P[1329],
                header: {
                    'content-type': P[462] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(P[1936] + JSON.stringify(res));
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            if (data.data.ext == '') {
                                sdk.pay(data.data.pay_data, function (status, data) {
                                    if (status == 1) {
                                        console.log(P[1937]);
                                    } else if (status == 0) {
                                        //失败时data值为 {msg:"失败原因"}
                                        console.log(P[1938] + data.msg);
                                    }
                                });
                            } else {
                                self.extDo({ ext1: data.data.ext, ext2: data.data.pay_data });
                            }
                        } else {
                            callbacks[P[391]] && callbacks[P[391]](1, {
                                errMsg: data.msg
                            });
                        }
                    } else {
                        callbacks[P[302]] && callbacks[P[302]](1, {
                            errMsg: P[1915]
                        });
                    }
                }
            });
        },

        extDo: function (data) {
            wx.navigateToMiniProgram({
                appId: data.ext1,
                path: P[1939] + data.ext2.trade_id + P[1940] + data.ext2.total_fee / 100,
                extraData: {},
                envVersion: P[1941],
                success(res) {
                    // 打开成功
                }
            });
        },

        //创建角色
        logCreateRole: function (data) {
            var uid = wx.getStorageSync(P[1910]);
            var username = wx.getStorageSync(P[1911]);

            var postData = {};
            postData[P[1942]] = uid;
            postData[P[1943]] = username;
            postData[P[1944]] = data.roleid;
            postData[P[1945]] = data.rolelevel;
            postData[P[1946]] = data.rolename;
            postData[P[25]] = data.serverid;

            if (data.roleid && data.serverid) {
                P__U9VG = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }
            var time = Date.parse(new Date()).toString(); //获取到毫秒的时间戳，精确到毫秒
            time = time.substr(0, 10); //精确到秒
            this.log(P[558], postData);
            var roledata = {
                createTime: time,
                serverId: data.serverid,
                serverName: data.servername,
                roleId: data.roleid,
                roleName: data.rolename,
                roleLevel: 0,
                payLevel: 0,
                dataType: 1
            };
            sdk.roleLog(roledata);
        },

        //进入游戏
        logEnterGame: function (data) {
            var uid = wx.getStorageSync(P[1910]);
            var username = wx.getStorageSync(P[1911]);

            var postData = {};
            postData[P[1942]] = uid;
            postData[P[1943]] = username;
            postData[P[1944]] = data.roleid;
            postData[P[1945]] = data.rolelevel;
            postData[P[1946]] = data.rolename;
            postData[P[25]] = data.serverid;

            if (data.roleid && data.serverid) {
                P__U9VG = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(P[1947], postData);

            //进入游戏确认邀请成功
            if (P__9GVU) {
                this.updateShare(P__9GVU.invite, P__9GVU.invite_type, P__9GVU.is_new, data.roleid, data.serverid, P__9GVU.scene);
            }

            var roledata = {
                createTime: data.rolecreatetime,
                serverId: data.serverid,
                serverName: data.servername,
                roleId: data.roleid,
                roleName: data.rolename,
                roleLevel: data.rolelevel,
                payLevel: 0,
                dataType: 2
            };
            sdk.roleLog(roledata);
        },

        //支付开关
        paySwitch(data, callback) {
            sdk.getPayState(data, function (status, data) {
                if (status == 1) {
                    if (data.switch == 1) {
                        //屏蔽充值入口
                        callback(0);
                    } else {
                        //满足显示充值入口
                        callback(1);
                    }
                } else if (status == 0) {
                    callback(0);
                    //调用失败
                    //屏蔽充值入口
                }
            });
        },

        //角色升级
        logRoleUpLevel: function (data) {
            var uid = wx.getStorageSync(P[1910]);
            var username = wx.getStorageSync(P[1911]);

            var postData = {};
            postData[P[1942]] = uid;
            postData[P[1943]] = username;
            postData[P[1944]] = data.roleid;
            postData[P[1945]] = data.rolelevel;
            postData[P[1946]] = data.rolename;
            postData[P[25]] = data.serverid;

            if (data.roleid && data.serverid) {
                P__U9VG = {
                    role_id: data.roleid,
                    server_id: data.serverid,
                    server_name: data.servername,
                    role_name: data.rolename,
                    role_level: data.rolelevel,
                    role_createtime: data.rolecreatetime
                };
            }

            this.log(P[1948], postData);
            var roledata = {
                createTime: data.rolecreatetime,
                serverId: data.serverid,
                serverName: data.servername,
                roleId: data.roleid,
                roleName: data.rolename,
                roleLevel: data.rolelevel,
                payLevel: 0,
                dataType: 3
            };
            sdk.roleLog(roledata);
        },

        //获取唯一设备码（自定义）
        uuid: function (radix, len) {
            var chars = P[1949].split('');
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
            var uuid = wx.getStorageSync(P[1896]);
            var idfv = wx.getStorageSync(P[1897]);
            var ad_code = wx.getStorageSync(P[1898]);

            return {
                game_id: config.game_id,
                game_pkg: config.game_pkg,
                partner_id: config.partner_id,
                partner_label: config.partner_label,
                ad_code: ad_code,
                uuid: uuid,
                idfv: idfv,
                mac: P[1950],
                is_from_min: 1,
                dname: sysInfo.model,
                net_type: sysInfo.wifiSignal == 0 ? '4G' : P[1951],
                os_ver: sysInfo.system,
                sdk_ver: sysInfo.version, //存放的是微信版本号
                game_ver: config.game_ver, //存放的是SDK版本号
                device: sysInfo.platform == P[124] ? 1 : 2
            };
        },

        //统一发送log
        log: function (type, data) {
            var public_data = this.getPublicData();
            for (var key in data) {
                public_data[key] = data[key];
            }

            console.log(P[1952] + type);
            console.log(public_data);

            wx.request({
                url: P[1906] + HOST + P[1953] + type + P[1954] + encodeURIComponent(JSON.stringify(public_data))
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
            console.log(P[1955] + tmplIds);
            //获取模板ID
            callbacks[P[428]] = typeof callback == P[1084] ? callback : null;
            wx.requestSubscribeMessage({
                tmplIds: tmplIds,
                success(res) {
                    console.log(P[1956]);
                    console.log(res);
                    callbacks[P[428]] && callbacks[P[428]](res);
                },
                fail(res) {
                    console.log(P[1957]);
                    console.log(res);
                    callbacks[P[428]] && callbacks[P[428]](res);
                }
            });
        }

    };
}

function run(method, data, callback) {
    method in P__U9GV && P__U9GV[method](data, callback);
}

exports.init = function (data, callback) {
    run(P[276], data, callback);
};

exports.login = function (callback) {
    run(P[302], '', callback);
};

exports.login = function (callback) {
    run(P[302], '', callback);
};

exports.pay = function (data, callback) {
    run(P[391], data, callback);
};

exports.openService = function () {
    run(P[416]);
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
    run(P[406], data);
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

    run(P[409], data);
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
    run(P[412], data);
};

exports.paySwitch = function (serverId, serverName, roleId, roleName, roleLevel, rolecreatetime, callback) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel,
        rolecreatetime: rolecreatetime
    };
    run(P[1958], data, callback);
};

exports.share = function (type) {
    var data = {
        type: type
    };
    run(P[415], data);
};

exports.msgCheck = function (data, callback) {
    run(P[233], data, callback);
};

exports.downloadClient = function () {
    run(P[1959]);
};

exports.getConfig = function () {
    return {
        game_id: config.game_id,
        game_pkg: config.game_pkg,
        partner_id: config.partner_id
    };
};

exports.getPublicData = function () {
    run(P[1960]);
};

exports.weiduanHelper = function () {
    run(P[418]);
};

exports.setMessageToFriendQuery = function (data, callback) {
    run(P[1961], data, callback);
};
exports.subscribeMessage = function (data, callback) {
    run(P[428], data, callback);
};