var _ = wx.y$;
// 引入渠道JS资源 TODO
import sdkInfo from '../utils/kycommon.js';
var config = {
    game_id: 256,
    game_pkg: _[31126], //天剑vs可以--幻灵仙境
    partner_label: _[31127],
    partner_id: _[31128],
    game_ver: _[31129],
    is_auth: false, //授权登录
    partner_game_id: 142,
    partner_ad_id: 13318,
    tmpId: { 1: _[31130], 2: _[31131], 3: _[31132] // 订阅的类型 和 模板id
    } };

window.config = config;
var p$ADEBC = p$AECBD();
var HOST = _[31133];
var p$ADECB = null;
var p$AEBCD = null;
var user_invite_by_activity = null;

var sysInfo = wx.getSystemInfoSync();
var platform = sysInfo.platform;
var partner_user_info = null;

var sdk = null;

function p$AECBD() {
    var callbacks = {};
    var this_pay_order = 0;
    return {
        order_data: {},
        init: function (ops, callback) {
            var game_ver = ops && ops.game_ver ? ops.game_ver : 0;
            console.log(_[31134]);
            var self = this;

            var uuid = wx.getStorageSync(_[31135]);
            var is_new;
            if (!uuid) {
                uuid = self.uuid(16, 32);
                wx.setStorageSync(_[31135], uuid);
                is_new = 1;
            } else {
                is_new = 0;
            }
            var idfv = wx.getStorageSync(_[31136]);
            if (!idfv) {
                idfv = self.uuid(16, 32);
                wx.setStorageSync(_[31136], idfv);
            }

            var info = wx.getLaunchOptionsSync();
            var scene = info.scene ? info.scene : '';

            console.log(_[31137], JSON.stringify(info));

            var data = {
                install: is_new,
                scene: scene
            };
            self.log(_[286], data);

            //显示右上角分享按钮
            wx.showShareMenu();

            //玩家是分享过来的，单独上报给服务器
            var invite = info.query && info.query.invite ? info.query.invite : '';
            var invite_type = info.query && info.query.invite_type ? info.query.invite_type : '';
            var cp_activity_id = info.query && info.query.cp_activity_id ? info.query.cp_activity_id : '';

            // 普通分享不存在活动ID的话  再看下定向分享是否存在
            if (!cp_activity_id) {
                cp_activity_id = info.query && info.query.shareMessageToFriendScene ? info.query.shareMessageToFriendScene : '';
                invite_type = cp_activity_id ? _[31138] : '';
            }

            // 带活动ID
            if (cp_activity_id) {
                user_invite_by_activity = {
                    invite: invite,
                    invite_type: invite_type,
                    is_new: is_new,
                    scene: scene,
                    cp_activity_id: cp_activity_id
                };
            }

            // 带邀请码
            if (invite) {
                p$AEBCD = {
                    invite: invite,
                    invite_type: invite_type,
                    is_new: is_new,
                    scene: scene
                };
            }

            //判断版本号
            if (game_ver) {
                config.game_ver = game_ver;
                this.checkGameVersion(game_ver, function (data) {
                    callback && callback(data);
                });
            }
        },

        //登录接口
        login: function (data, callback) {
            console.log(_[31139]);
            var self = this;
            callbacks[_[31140]] = typeof callback == _[30743] ? callback : null;
            var self = this;
            sdk = new sdkInfo({ gameId: config.partner_game_id, adid: config.partner_ad_id }, function (code, data) {
                switch (code) {
                    case _[367]:
                        // 初始化
                        console.log(_[31141] + JSON.stringify(data)); // 初始化成功后会返回 os、params 这两个参数
                        break;
                    case _[31140]:
                        // 登录
                        console.log(_[31142] + JSON.stringify(data)); // 登录成功后会返回 uid、username、time、vsign 这四个参数，服务端需拿这几个字段进行服务端登录校验
                        self.do_login(data);
                        break;
                }
            });
        },

        do_login: function (info) {
            var self = this;

            //发起网络请求
            var public_data = self.getPublicData();
            public_data[_[31143]] = JSON.stringify(info);
            if (p$AEBCD && typeof p$AEBCD == _[281]) {
                for (var key in p$AEBCD) {
                    public_data[key] = p$AEBCD[key];
                }
            }

            wx.request({
                url: _[26445] + HOST + _[31144],
                method: _[31145],
                dataType: _[5349],
                header: {
                    'content-type': _[31146] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(_[31147] + JSON.stringify(res));

                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            try {
                                wx.setStorageSync(_[31148], data.data.sdk_token);
                                wx.setStorageSync(_[31149], data.data.user_id);
                                wx.setStorageSync(_[31150], data.data.username);
                                if (data.data.ext) {
                                    wx.setStorageSync(_[31151], data.data.ext);
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
                            callbacks[_[31140]] && callbacks[_[31140]](0, userData);
                        } else {
                            callbacks[_[31140]] && callbacks[_[31140]](1, {
                                errMsg: data.msg
                            });
                        }

                        self.getShareInfo(_[31152], function (data) {
                            console.log(_[31153]);
                            wx.onShareAppMessage(function () {
                                //记录开始分享
                                self.logStartShare(_[31152]);
                                return {
                                    title: data.title,
                                    imageUrl: data.img,
                                    query: data.query
                                };
                            });
                        });
                    } else {
                        callbacks[_[31140]] && callbacks[_[31140]](1, {
                            errMsg: _[31154]
                        });
                    }
                }
            });
        },

        share: function (data) {
            callbacks[_[31155]] = typeof callback == _[30743] ? callback : null;
            var type = data.type || _[31155];
            var cp_activity_id = data.cp_activity_id || '';

            console.log(_[31156] + type);
            var self = this;
            this.getShareInfo(type, function (data) {
                if (cp_activity_id != '' && data.query != '') {
                    data.query = data.query + _[31157] + cp_activity_id;
                }

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
            var sdk_token = wx.getStorageSync(_[31148]);
            wx.request({
                url: _[26445] + HOST + _[31158],
                method: _[31145],
                dataType: _[5349],
                header: {
                    'content-type': _[31146] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    server_id: p$ADECB ? p$ADECB.server_id : '',
                    role_id: p$ADECB ? p$ADECB.role_id : '',
                    type: type
                },
                success: function (res) {}
            });
        },

        openService: function () {
            wx.openCustomerServiceConversation();
        },

        checkGameVersion: function (game_ver, callback) {
            console.log(_[31159]);
            var sdk_token = wx.getStorageSync(_[31148]);
            wx.request({
                url: _[26445] + HOST + _[31160],
                method: _[31145],
                dataType: _[5349],
                header: {
                    'content-type': _[31146] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    game_ver: game_ver
                },
                success: function (res) {
                    console.log(_[31161]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callback && callback(data.data);
                        } else {
                            callback && callback({ develop: 0 });
                        }
                    } else {
                        callback && callback({ develop: 0 });
                    }
                }
            });
        },

        getShareInfo: function (type, callback) {
            console.log(_[31162]);
            var sdk_token = wx.getStorageSync(_[31148]);
            wx.request({
                url: _[26445] + HOST + _[31163],
                method: _[31145],
                dataType: _[5349],
                header: {
                    'content-type': _[31146] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    type: type,
                    server_id: p$ADECB ? p$ADECB.server_id : '',
                    role_id: p$ADECB ? p$ADECB.role_id : '',
                    no_log: 1 //设置为1后就不在这个接口打log，交给logStartShare接口
                },
                success: function (res) {
                    console.log(_[31164] + JSON.stringify(res));
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callback && callback(data.data);
                        } else {
                            callbacks[_[31155]] && callbacks[_[31155]](1, { errMsg: _[31165] + data.msg });
                        }
                    } else {
                        callbacks[_[31155]] && callbacks[_[31155]](1, { errMsg: _[31166] });
                    }
                }
            });
        },

        updateShare: function (invite, invite_type, is_new, role_id, server_id, scene) {
            console.log(_[31167]);
            var sdk_token = wx.getStorageSync(_[31148]);
            wx.request({
                url: _[26445] + HOST + _[31168],
                method: _[31145],
                dataType: _[5349],
                header: {
                    'content-type': _[31146] // 默认值
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
                    console.log(_[31169] + JSON.stringify(res));
                }
            });
        },

        msgCheck: function (content, callback) {
            sdk.MsgSecCheck({ msg: content }, function (code, data) {
                let ret = { data: {} };
                switch (code) {
                    case _[31170]:
                        // 成功
                        console.log(data); // 默认返回{code:0,msg:””}
                        ret.statusCode = 200;
                        ret.data.state = 1;
                        break;
                    case _[31171]:
                        // 失败
                        console.log(data); // {code:2009,msg:”内容可能潜在风险”}
                        ret.statusCode = 0;
                        ret.data.state = 0;
                        break;
                }
                callback && callback(ret);
            });
        },

        pay: function (data, callback) {
            var self = this;
            self.startPay(data, callback);
        },

        //支付接口
        startPay: function (data, callback) {
            console.log(_[31172]);
            console.log(data);

            var self = this;
            callbacks[_[31173]] = typeof callback == _[30743] ? callback : null;
            //先下单
            this_pay_order = 0;
            var sdk_token = wx.getStorageSync(_[31148]);
            var session_key = wx.getStorageSync(_[31151]);
            if (!sdk_token) {
                callbacks[_[31173]] && callbacks[_[31173]](1, { errMsg: _[31174] });
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
                ApplePrdId: data.ApplePrdId
            };
            self.order_data = order_data;

            var public_data = self.getPublicData();
            public_data[_[31175]] = JSON.stringify(order_data);

            //发起网络请求
            wx.request({
                url: _[26445] + HOST + _[31176],
                method: _[31145],
                dataType: _[5349],
                header: {
                    'content-type': _[31146] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(_[31177] + JSON.stringify(res));

                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            //调用渠道下单支付接口 TODO
                            if (data.data.ext == "") {
                                sdk.Pay(data.data.pay_data);
                            } else {
                                var temp = data.data.pay_data;
                                temp[_[28057]] = self.order_data[_[28057]];
                                self.extDo({ ext1: data.data.ext, ext2: temp });
                            }
                        } else {
                            callbacks[_[31173]] && callbacks[_[31173]](1, { errMsg: data.msg });
                        }
                    } else {
                        callbacks[_[31140]] && callbacks[_[31140]](1, { errMsg: _[31154] });
                    }
                }
            });
        },

        //创建角色
        logCreateRole: function (data) {
            var uid = wx.getStorageSync(_[31149]);
            var username = wx.getStorageSync(_[31150]);

            var postData = {};
            postData[_[31178]] = uid;
            postData[_[31179]] = username;
            postData[_[10626]] = data.roleid;
            postData[_[31180]] = data.rolelevel;
            postData[_[31181]] = data.rolename;
            postData[_[11316]] = data.serverid;

            if (data.roleid && data.serverid) {
                p$ADECB = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(_[6], postData);
            sdk.Role({ roleid: data.roleid, rolename: data.rolename, rolelevel: data.rolelevel, serverid: data.serverid, servername: data.servername, type: _[6] });
            // 记录从活动分享进入的角色信息
            if (user_invite_by_activity) {
                var scene = user_invite_by_activity.scene;
                var is_new = user_invite_by_activity.is_new;
                var invite_code = user_invite_by_activity.invite;
                var invite_type = user_invite_by_activity && user_invite_by_activity.invite_type ? user_invite_by_activity.invite_type : '';
                var cp_activity_id = user_invite_by_activity.cp_activity_id;

                var roleInfo = {
                    uid: uid,
                    role_id: data.roleid,
                    role_name: data.rolename,
                    server_id: data.serverid,
                    server_name: data.servername,
                    game_id: config.game_id,
                    partner_id: config.partner_id,
                    game_pkg: config.game_pkg,
                    scene: scene,
                    is_new: is_new,
                    invite_code: invite_code,
                    invite_type: invite_type,
                    cp_activity_id: cp_activity_id
                };

                wx.request({
                    url: _[26445] + HOST + _[31182],
                    method: _[31145],
                    dataType: _[5349],
                    header: {
                        'content-type': _[31146] // 默认值
                    },
                    data: roleInfo,
                    success: function (res) {
                        console.log(_[31183] + JSON.stringify(res));
                    }
                });
            }
        },

        extDo: function (data) {
            wx.navigateToMiniProgram({
                appId: data.ext1,
                path: _[31184] + data.ext2.extradata + _[31185] + data.ext2.price,
                extraData: {},
                envVersion: _[31186],
                success(res) {
                    // 打开成功
                }
            });
        },

        //进入游戏
        logEnterGame: function (data) {
            var uid = wx.getStorageSync(_[31149]);
            var username = wx.getStorageSync(_[31150]);

            var postData = {};
            postData[_[31178]] = uid;
            postData[_[31179]] = username;
            postData[_[10626]] = data.roleid;
            postData[_[31180]] = data.rolelevel;
            postData[_[31181]] = data.rolename;
            postData[_[11316]] = data.serverid;

            if (data.roleid && data.serverid) {
                p$ADECB = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(_[5231], postData);
            sdk.Role({ roleid: data.roleid, rolename: data.rolename, rolelevel: data.rolelevel, serverid: data.serverid, servername: data.servername, type: _[31140] });
            //进入游戏确认邀请成功
            if (p$AEBCD) {
                this.updateShare(p$AEBCD.invite, p$AEBCD.invite_type, p$AEBCD.is_new, data.roleid, data.serverid, p$AEBCD.scene);
            }
        },

        //角色升级
        logRoleUpLevel: function (data) {
            var uid = wx.getStorageSync(_[31149]);
            var username = wx.getStorageSync(_[31150]);

            var postData = {};
            postData[_[31178]] = uid;
            postData[_[31179]] = username;
            postData[_[10626]] = data.roleid;
            postData[_[31180]] = data.rolelevel;
            postData[_[31181]] = data.rolename;
            postData[_[11316]] = data.serverid;

            if (data.roleid && data.serverid) {
                p$ADECB = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(_[31187], postData);
        },

        //获取唯一设备码（自定义）
        uuid: function (radix, len) {
            var chars = _[31188].split('');
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
            var uuid = wx.getStorageSync(_[31135]);
            var idfv = wx.getStorageSync(_[31136]);

            return {
                is_from_min: 1,
                game_id: config.game_id,
                game_pkg: config.game_pkg,
                partner_id: config.partner_id,
                ad_code: '',
                uuid: uuid,
                idfv: idfv,
                dname: system.model,
                mac: _[31189],
                net_type: system.wifiSignal == 0 ? '4G' : _[31190],
                os_ver: system.system,
                sdk_ver: system.version, //存放的是微信版本号
                game_ver: config.game_ver, //存放的是SDK版本号
                device: system.platform == _[31191] ? 1 : 2
            };
        },

        //统一发送log
        log: function (type, data) {
            var public_data = this.getPublicData();
            for (var key in data) {
                public_data[key] = data[key];
            }

            console.log(_[31192] + type);
            console.log(_[31193] + public_data);

            wx.request({
                url: _[26445] + HOST + _[31194] + type + _[31195] + encodeURIComponent(JSON.stringify(public_data))
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
            // 接入渠道微端接口  TODO
            sdk.Download();
        },

        // 设置 wx.shareMessageToFriend 接口 query 字段的值
        setMessageToFriendQuery: function (data, callback) {
            var cp_activity_id = data.activity_id;
            var result = wx.setMessageToFriendQuery({ shareMessageToFriendScene: cp_activity_id });

            callback && callback(result);
        },

        // 获取定向分享图片跟标题
        getFriendShareInfo: function (callback) {
            this.getShareInfo(_[31138], function (data) {
                callback && callback({ title: data.title, 'img': data.img });
            });
        }

    };
}

function run(method, data, callback) {
    method in p$ADEBC && p$ADEBC[method](data, callback);
}

exports.init = function (data, callback) {
    run(_[367], data, callback);
};

exports.login = function (callback) {
    run(_[31140], '', callback);
};

exports.pay = function (data, callback) {
    run(_[31173], data, callback);
};

exports.openService = function () {
    run(_[24281]);
};

exports.logCreateRole = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(_[31196], data);
};

exports.logEnterGame = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };

    run(_[31197], data);
};

exports.logRoleUpLevel = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(_[31198], data);
};

exports.share = function (type, data) {
    var cp_activity_id = data && data.activity_id ? data.activity_id : '';

    var params = {
        type: type,
        cp_activity_id: cp_activity_id
    };

    run(_[31155], params);
};

exports.msgCheck = function (data, callback) {
    run(_[12119], data, callback);
};

exports.downloadClient = function () {
    run(_[31199]);
};

exports.getConfig = function () {
    return {
        game_id: config.game_id,
        game_pkg: config.game_pkg,
        partner_id: config.partner_id
    };
};

exports.getPublicData = function () {
    run(_[31200]);
};

exports.weiduanHelper = function () {
    run(_[24160]);
};

exports.setMessageToFriendQuery = function (data, callback) {
    run(_[31201], data, callback);
};

exports.getFriendShareInfo = function (callback) {
    run(_[31202], callback);
};