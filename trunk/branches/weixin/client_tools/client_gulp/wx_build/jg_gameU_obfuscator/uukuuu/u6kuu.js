var o = wx.$U;
var sdk = require(o[341638]);

//TODO 替换对应参数
var config = {
    game_id: 256,
    game_pkg: o[341639], //37-微微剑仙
    partner_label: o[341640],
    partner_id: o[341641],
    game_ver: o[341642],
    is_auth: false, //授权登录
    partner_android_pid_id: 442,
    partner_ios_pid_id: 484,
    partner_gid_id: 1014883,
    tmpId: { 1: o[341643], 2: o[341644], 3: o[341643] // 订阅的类型 和 模板id
    } };
window.config = config;
var u$7$8G0 = u$78G$0();
var HOST = o[341645];
var u$780G$ = null;
var u$780$G = null;
var sysInfo = wx.getSystemInfoSync();
var platform = sysInfo.platform;
var partner_user_info = null;

function u$78G$0() {
    var callbacks = {};
    var this_pay_order = 0;
    return {
        order_data: {},
        init: function (ops, callback) {
            var game_ver = ops && ops.game_ver ? ops.game_ver : 0;
            console.log(o[341646]);
            var self = this;

            var uuid = wx.getStorageSync(o[341647]);
            var is_new;
            if (!uuid) {
                uuid = self.uuid(16, 32);
                wx.setStorageSync(o[341647], uuid);
                is_new = 1;
            } else {
                is_new = 0;
            }
            var idfv = wx.getStorageSync(o[341648]);
            if (!idfv) {
                idfv = self.uuid(16, 32);
                wx.setStorageSync(o[341648], idfv);
            }

            var info = wx.getLaunchOptionsSync();
            var scene = info.scene ? info.scene : '';

            //判断今天是否已经上报过
            if (is_new && info.query && info.query.ad_code) {
                wx.setStorageSync(o[341649], info.query.ad_code);
            }

            var data = {
                install: is_new,
                scene: scene
            };
            self.log(o[341650], data);
            wx.showShareMenu();
            //玩家是分享过来的，单独上报给服务器
            var invite = info.query && info.query.invite ? info.query.invite : '';
            var invite_type = info.query && info.query.invite_type ? info.query.invite_type : '';

            if (invite) {
                u$780$G = {
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
            console.log(o[341651]);
            callbacks[o[340253]] = typeof callback == o[340897] ? callback : null;
            var self = this;
            let pid = sysInfo.platform == o[340110] ? config.partner_android_pid_id : config.partner_ios_pid_id;
            var params = { pid: pid, gid: config.partner_gid_id };
            console.log(o[341652], params);
            sdk.login(params, function (res) {
                console.log(o[341653] + JSON.stringify(res));
                self.do_login(res);
            });
        },

        do_login: function (info) {
            var self = this;

            //发起网络请求
            var public_data = self.getPublicData();
            public_data[o[341654]] = JSON.stringify(info);
            if (u$780$G && typeof u$780$G == o[340796]) {
                for (var key in u$780$G) {
                    public_data[key] = u$780$G[key];
                }
            }

            wx.request({
                url: o[341655] + HOST + o[341656],
                method: o[340218],
                dataType: o[341141],
                header: {
                    'content-type': o[340366] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(o[341657] + JSON.stringify(res));

                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            try {
                                wx.setStorageSync(o[341658], data.data.sdk_token);
                                wx.setStorageSync(o[341659], data.data.user_id);
                                wx.setStorageSync(o[341660], data.data.username);
                                if (data.data.ext) {
                                    wx.setStorageSync(o[341661], data.data.ext);
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
                            callbacks[o[340253]] && callbacks[o[340253]](0, userData);
                        } else {
                            callbacks[o[340253]] && callbacks[o[340253]](1, {
                                errMsg: data.msg
                            });
                        }

                        self.getShareInfo(o[341662], function (data) {
                            console.log(o[341663]);
                            wx.onShareAppMessage(function () {
                                //记录开始分享
                                self.logStartShare(o[341662]);
                                return {
                                    title: data.title,
                                    imageUrl: data.img,
                                    query: data.query
                                };
                            });
                        });
                    } else {
                        callbacks[o[340253]] && callbacks[o[340253]](1, {
                            errMsg: o[341664]
                        });
                    }
                }
            });
        },

        share: function (data) {
            callbacks[o[340323]] = typeof callback == o[340897] ? callback : null;
            var type = data.type || o[340323];
            console.log(o[341665] + type);
            var self = this;
            this.getShareInfo(type, function (data) {
                //记录开始分享
                self.logStartShare(type);

                var query_str = data.query;

                // sdk.getShareInfo({
                //     data: {
                //         path: 'pages/index/index'
                //     }
                // }).then(res => {
                //     //console.log('res==',res)
                //     //res== {code:200,data:{},msg:'success'}
                //     // do something
                //     //console.log('share_query：'+`state=${res.data.state}`+'&'+query_str)
                //     // 小游戏
                //     wx.onShareAppMessage(function () {
                //         return {
                //             title: res.data.title,
                //             imageUrl: res.data.image,
                //             query: `state=${res.data.state}`+'&'+query_str
                //         }
                //     })

                // });
            });
        },

        logStartShare: function (type) {
            var sdk_token = wx.getStorageSync(o[341658]);
            wx.request({
                url: o[341655] + HOST + o[341666],
                method: o[340218],
                dataType: o[341141],
                header: {
                    'content-type': o[340366] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    server_id: u$780G$ ? u$780G$.server_id : '',
                    role_id: u$780G$ ? u$780G$.role_id : '',
                    type: type
                },
                success: function (res) {}
            });
        },

        openService: function () {
            wx.openCustomerServiceConversation();
        },

        checkGameVersion: function (game_ver, callback) {
            console.log(o[341667]);
            var sdk_token = wx.getStorageSync(o[341658]);
            wx.request({
                url: o[341655] + HOST + o[341668],
                method: o[340218],
                dataType: o[341141],
                header: {
                    'content-type': o[340366] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    game_ver: game_ver
                },
                success: function (res) {
                    console.log(o[341669] + JSON.stringify(res));

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
            console.log(o[341670]);
            var sdk_token = wx.getStorageSync(o[341658]);
            wx.request({
                url: o[341655] + HOST + o[341671],
                method: o[340218],
                dataType: o[341141],
                header: {
                    'content-type': o[340366] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    type: type,
                    server_id: u$780G$ ? u$780G$.server_id : '',
                    role_id: u$780G$ ? u$780G$.role_id : '',
                    no_log: 1 //设置为1后就不在这个接口打log，交给logStartShare接口
                },
                success: function (res) {
                    console.log(o[341672]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callback && callback(data.data);
                        } else {
                            callbacks[o[340323]] && callbacks[o[340323]](1, {
                                errMsg: o[341673] + data.msg
                            });
                        }
                    } else {
                        callbacks[o[340323]] && callbacks[o[340323]](1, {
                            errMsg: o[341674]
                        });
                    }
                }
            });
        },

        updateShare: function (invite, invite_type, is_new, role_id, server_id, scene) {
            console.log(o[341675]);
            var sdk_token = wx.getStorageSync(o[341658]);
            wx.request({
                url: o[341655] + HOST + o[341676],
                method: o[340218],
                dataType: o[341141],
                header: {
                    'content-type': o[340366] // 默认值
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
                    console.log(o[341677] + JSON.stringify(res));
                }
            });
        },

        msgCheck: function (content, callback) {
            console.log(o[341678] + content);

            let ret = {
                data: {}
            };
            var params = {
                "type": o[341679], // 必填,信息安全检查类型
                "data": { content: content // 信息安全检查内容
                } };
            sdk.checkSecurity(params, function (res) {
                console.log(o[341680] + JSON.stringify(res));
                if (res.state == 1) {
                    ret.statusCode = 200;
                    ret.data.state = 1;
                } else {
                    ret.statusCode = 0;
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
            console.log(o[341681] + JSON.stringify(data));

            var self = this;
            callbacks[o[340310]] = typeof callback == o[340897] ? callback : null;
            //先下单
            this_pay_order = 0;
            var sdk_token = wx.getStorageSync(o[341658]);
            var session_key = wx.getStorageSync(o[341661]);
            if (!sdk_token) {
                callbacks[o[340310]] && callbacks[o[340310]](1, {
                    errMsg: o[341682]
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
            public_data[o[341683]] = JSON.stringify(order_data);

            //发起网络请求
            wx.request({
                url: o[341655] + HOST + o[341684],
                method: o[340218],
                dataType: o[341141],
                header: {
                    'content-type': o[340366] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(o[341685] + JSON.stringify(res));
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            if (sysInfo.platform == o[340110]) {
                                sdk.androidImport(data.data.pay_data, function (res) {
                                    console.log(o[341686] + JSON.stringify(res));
                                });
                            } else {
                                sdk.otherImport(data.data.pay_data, function (res) {
                                    console.log(o[341686] + JSON.stringify(res));
                                });
                            }
                        } else {
                            callbacks[o[340310]] && callbacks[o[340310]](1, {
                                errMsg: data.msg
                            });
                        }
                    } else {
                        callbacks[o[340253]] && callbacks[o[340253]](1, {
                            errMsg: o[341664]
                        });
                    }
                }
            });
        },

        //创建角色
        logCreateRole: function (data) {
            var uid = wx.getStorageSync(o[341659]);
            var username = wx.getStorageSync(o[341660]);

            var postData = {};
            postData[o[341687]] = uid;
            postData[o[341688]] = username;
            postData[o[341689]] = data.roleid;
            postData[o[341690]] = data.rolelevel;
            postData[o[341691]] = data.rolename;
            postData[o[340023]] = data.serverid;

            if (data.roleid && data.serverid) {
                u$780G$ = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(o[340439], postData);
            var params = {
                "dsid": data.serverid, // 必填,游戏服ID
                "dsname": data.servername, // 必填,游戏服名称
                "drid": data.roleid, // 必填,角色ID
                "drname": data.rolename, // 必填,角色名称
                "drlevel": data.rolelevel, // 必填,角色等级
                "drctime": data.rolecreatetime, // 必填,CP角色创建时间
                "dpname": "", // 非必填,CP公会名称  虽然不是必填 如果没有 建议传一个默认值
                "dviplevel": "", // 非必填,CP角色VIP等级   虽然不是必填 如果没有 建议传一个默认值
                "drbalance": "", // 非必填,角色余额       虽然不是必填 如果没有 建议传一个默认值
                "drlevelmtime": "" // 非必填,角色升级的时间点   虽然不是必填 如果没有 建议传一个默认值
            };
            sdk.createRole(params, function (res) {
                console.log(o[341692] + JSON.stringify(res));
            });
            // 渠道上报
        },

        //进入游戏
        logEnterGame: function (data) {
            var uid = wx.getStorageSync(o[341659]);
            var username = wx.getStorageSync(o[341660]);

            var postData = {};
            postData[o[341687]] = uid;
            postData[o[341688]] = username;
            postData[o[341689]] = data.roleid;
            postData[o[341690]] = data.rolelevel;
            postData[o[341691]] = data.rolename;
            postData[o[340023]] = data.serverid;

            if (data.roleid && data.serverid) {
                u$780G$ = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(o[341693], postData);

            //进入游戏确认邀请成功
            if (u$780$G) {
                this.updateShare(u$780$G.invite, u$780$G.invite_type, u$780$G.is_new, data.roleid, data.serverid, u$780$G.scene);
            }

            var params = {
                "dsid": data.serverid, // 必填,游戏服ID
                "dsname": data.servername, // 必填,游戏服名称
                "drid": data.roleid, // 必填,角色ID
                "drname": data.rolename, // 必填,角色名称
                "drlevel": data.rolelevel, // 必填,角色等级
                "drctime": data.rolecreatetime, // 必填,CP角色创建时间
                "dpname": "", // 非必填,CP公会名称  虽然不是必填 如果没有 建议传一个默认值
                "dviplevel": "", // 非必填,CP角色VIP等级   虽然不是必填 如果没有 建议传一个默认值
                "drbalance": "", // 非必填,角色余额       虽然不是必填 如果没有 建议传一个默认值
                "drlevelmtime": "" // 非必填,角色升级的时间点   虽然不是必填 如果没有 建议传一个默认值
            };
            sdk.enterGame(params, function (res) {
                console.log(o[341694] + JSON.stringify(res));
            });
        },

        //角色升级
        logRoleUpLevel: function (data) {
            var uid = wx.getStorageSync(o[341659]);
            var username = wx.getStorageSync(o[341660]);

            var postData = {};
            postData[o[341687]] = uid;
            postData[o[341688]] = username;
            postData[o[341689]] = data.roleid;
            postData[o[341690]] = data.rolelevel;
            postData[o[341691]] = data.rolename;
            postData[o[340023]] = data.serverid;

            if (data.roleid && data.serverid) {
                u$780G$ = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(o[341695], postData);

            var params = {
                "dsid": data.serverid, // 必填,游戏服ID
                "dsname": data.servername, // 必填,游戏服名称
                "drid": data.roleid, // 必填,角色ID
                "drname": data.rolename, // 必填,角色名称
                "drlevel": data.rolelevel, // 必填,角色等级
                "drctime": data.rolecreatetime, // 必填,CP角色创建时间
                "dpname": "", // 非必填,CP公会名称  虽然不是必填 如果没有 建议传一个默认值
                "dviplevel": "", // 非必填,CP角色VIP等级   虽然不是必填 如果没有 建议传一个默认值
                "drbalance": "", // 非必填,角色余额       虽然不是必填 如果没有 建议传一个默认值
                "drlevelmtime": "" // 非必填,角色升级的时间点   虽然不是必填 如果没有 建议传一个默认值
            };
            sdk.roleLevelUp(params, function (res) {
                console.log(o[341696] + JSON.stringify(res));
            });
        },

        //获取唯一设备码（自定义）
        uuid: function (radix, len) {
            var chars = o[341697].split('');
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
            var uuid = wx.getStorageSync(o[341647]);
            var idfv = wx.getStorageSync(o[341648]);
            var ad_code = wx.getStorageSync(o[341649]);

            return {
                game_id: config.game_id,
                game_pkg: config.game_pkg,
                partner_id: config.partner_id,
                partner_label: config.partner_label,
                ad_code: ad_code,
                uuid: uuid,
                idfv: idfv,
                mac: o[341698],
                is_from_min: 1,
                dname: sysInfo.model,
                net_type: sysInfo.wifiSignal == 0 ? '4G' : o[341699],
                os_ver: sysInfo.system,
                sdk_ver: sysInfo.version, //存放的是微信版本号
                game_ver: config.game_ver, //存放的是SDK版本号
                device: sysInfo.platform == o[340110] ? 1 : 2
            };
        },

        //统一发送log
        log: function (type, data) {
            var public_data = this.getPublicData();
            for (var key in data) {
                public_data[key] = data[key];
            }

            console.log(o[341700] + type);
            console.log(public_data);

            wx.request({
                url: o[341655] + HOST + o[341701] + type + o[341702] + encodeURIComponent(JSON.stringify(public_data))
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
            console.log(o[341703] + tmplIds);
            //获取模板ID
            callbacks[o[340332]] = typeof callback == o[340897] ? callback : null;
            wx.requestSubscribeMessage({
                tmplIds: tmplIds,
                success(res) {
                    console.log(o[341704]);
                    console.log(res);
                    callbacks[o[340332]] && callbacks[o[340332]](res);
                },
                fail(res) {
                    console.log(o[341705]);
                    console.log(res);
                    callbacks[o[340332]] && callbacks[o[340332]](res);
                }
            });
        },

        // 微端小助手
        weiduanHelper: function () {},

        // 设置 wx.shareMessageToFriend 接口 query 字段的值
        setMessageToFriendQuery: function (data, callback) {
            var cp_activity_id = data.activity_id;
            var result = wx.setMessageToFriendQuery({ shareMessageToFriendScene: cp_activity_id });

            callback(result);
        }

    };
}

function run(method, data, callback) {
    method in u$7$8G0 && u$7$8G0[method](data, callback);
}

exports.init = function (data, callback) {
    run(o[340231], data, callback);
};

exports.login = function (callback) {
    run(o[340253], '', callback);
};

exports.login = function (callback) {
    run(o[340253], '', callback);
};

exports.pay = function (data, callback) {
    run(o[340310], data, callback);
};

exports.openService = function () {
    run(o[340324]);
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
    run(o[340318], data);
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

    run(o[340320], data);
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
    run(o[340322], data);
};

exports.share = function (type) {
    var data = {
        type: type
    };
    run(o[340323], data);
};

exports.msgCheck = function (data, callback) {
    run(o[340196], data, callback);
};

exports.downloadClient = function () {
    run(o[341706]);
};

exports.subscribeMessage = function (data, callback) {
    run(o[340332], data, callback);
};

exports.getConfig = function () {
    return {
        game_id: config.game_id,
        game_pkg: config.game_pkg,
        partner_id: config.partner_id
    };
};

exports.getPublicData = function () {
    run(o[341707]);
};

exports.weiduanHelper = function () {
    run(o[340326]);
};

exports.setMessageToFriendQuery = function (data, callback) {
    run(o[341708], data, callback);
};