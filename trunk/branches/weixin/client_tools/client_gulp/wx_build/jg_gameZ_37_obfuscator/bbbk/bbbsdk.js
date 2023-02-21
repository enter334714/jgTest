var _ = wx.y$;
const JmCore = require(_[52150]);

//TODO 替换对应参数
var config = {
    game_id: 112,
    game_pkg: _[52151],
    partner_label: _[52152],
    partner_id: _[52153],
    game_ver: _[52154],
    is_auth: false //授权登录
};
window.config = config;
var p$8ZAOR = p$8AROZ();
var HOST = _[52155];
var p$8ZARO = null;
var p$8AORZ = null;
var sysInfo = wx.getSystemInfoSync();
var platform = sysInfo.platform;
var partner_user_info = null;

function p$8AROZ() {
    var callbacks = {};
    var this_pay_order = 0;
    return {
        order_data: {},
        init: function (ops, callback) {
            var game_ver = ops && ops.game_ver ? ops.game_ver : 0;
            console.log(_[52156]);
            var self = this;

            var uuid = wx.getStorageSync(_[52157]);
            var is_new;
            if (!uuid) {
                uuid = self.uuid(16, 32);
                wx.setStorageSync(_[52157], uuid);
                is_new = 1;
            } else {
                is_new = 0;
            }
            var idfv = wx.getStorageSync(_[52158]);
            if (!idfv) {
                idfv = self.uuid(16, 32);
                wx.setStorageSync(_[52158], idfv);
            }

            var info = wx.getLaunchOptionsSync();
            var scene = info.scene ? info.scene : '';

            wx.showShareMenu();

            //判断今天是否已经上报过
            if (is_new && info.query && info.query.ad_code) {
                wx.setStorageSync(_[52159], info.query.ad_code);
            }

            var data = {
                install: is_new,
                scene: scene
            };
            self.log(_[289], data);

            //玩家是分享过来的，单独上报给服务器
            var invite = info.query && info.query.invite ? info.query.invite : '';
            var invite_type = info.query && info.query.invite_type ? info.query.invite_type : '';

            if (invite) {
                p$8AORZ = {
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
            console.log(_[52160]);
            callbacks[_[52161]] = typeof callback == _[51382] ? callback : null;
            var self = this;

            JmCore.init(function (res) {
                console.log(_[52162], res);
                if (res.code == 0) {
                    JmCore.login(function (res) {
                        console.log(_[52163], res);
                        if (res.code == 0) {
                            partner_user_info = res.data;
                            self.do_login(partner_user_info);
                        } else {
                            console.warn(_[52164]);
                        }
                    });
                } else {
                    console.warn(_[52165]);
                }
            });
        },

        do_login: function (info) {
            var self = this;

            //发起网络请求
            var public_data = self.getPublicData();
            public_data[_[52166]] = JSON.stringify(info);
            if (p$8AORZ && typeof p$8AORZ == _[284]) {
                for (var key in p$8AORZ) {
                    public_data[key] = p$8AORZ[key];
                }
            }

            wx.request({
                url: _[40420] + HOST + _[52167],
                method: _[52168],
                dataType: _[5704],
                header: {
                    'content-type': _[52169] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(_[52170] + JSON.stringify(res));

                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            try {
                                wx.setStorageSync(_[52171], data.data.sdk_token);
                                wx.setStorageSync(_[52172], data.data.user_id);
                                wx.setStorageSync(_[52173], data.data.username);
                                if (data.data.ext) {
                                    wx.setStorageSync(_[52174], data.data.ext);
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
                            callbacks[_[52161]] && callbacks[_[52161]](0, userData);
                        } else {
                            callbacks[_[52161]] && callbacks[_[52161]](1, {
                                errMsg: data.msg
                            });
                        }

                        self.getShareInfo(_[52175], function (data) {
                            console.log(_[52176]);
                            self.logStartShare(_[52175]);

                            wx.onShareAppMessage(function () {
                                //记录开始分享
                                self.logStartShare(_[52175]);
                                return {
                                    title: data.title,
                                    imageUrl: data.img,
                                    query: data.query
                                };
                            });
                        });
                    } else {
                        callbacks[_[52161]] && callbacks[_[52161]](1, {
                            errMsg: _[52177]
                        });
                    }
                }
            });
        },

        share: function (data) {
            callbacks[_[52178]] = typeof callback == _[51382] ? callback : null;
            var type = data.type || _[52178];
            console.log(_[52179] + type);
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
            var sdk_token = wx.getStorageSync(_[52171]);
            wx.request({
                url: _[40420] + HOST + _[52180],
                method: _[52168],
                dataType: _[5704],
                header: {
                    'content-type': _[52169] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    server_id: p$8ZARO ? p$8ZARO.server_id : '',
                    role_id: p$8ZARO ? p$8ZARO.role_id : '',
                    type: type
                },
                success: function (res) {}
            });
        },

        openService: function () {
            wx.openCustomerServiceConversation();
        },

        checkGameVersion: function (game_ver, callback) {
            console.log(_[52181]);
            var sdk_token = wx.getStorageSync(_[52171]);
            wx.request({
                url: _[40420] + HOST + _[52182],
                method: _[52168],
                dataType: _[5704],
                header: {
                    'content-type': _[52169] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    game_ver: game_ver
                },
                success: function (res) {
                    console.log(_[52183] + JSON.stringify(res));

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
            console.log(_[52184]);
            var sdk_token = wx.getStorageSync(_[52171]);
            wx.request({
                url: _[40420] + HOST + _[52185],
                method: _[52168],
                dataType: _[5704],
                header: {
                    'content-type': _[52169] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    type: type,
                    server_id: p$8ZARO ? p$8ZARO.server_id : '',
                    role_id: p$8ZARO ? p$8ZARO.role_id : '',
                    no_log: 1 //设置为1后就不在这个接口打log，交给logStartShare接口
                },
                success: function (res) {
                    console.log(_[52186]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callback && callback(data.data);
                        } else {
                            callbacks[_[52178]] && callbacks[_[52178]](1, {
                                errMsg: _[52187] + data.msg
                            });
                        }
                    } else {
                        callbacks[_[52178]] && callbacks[_[52178]](1, {
                            errMsg: _[52188]
                        });
                    }
                }
            });
        },

        updateShare: function (invite, invite_type, is_new, role_id, server_id, scene) {
            console.log(_[52189]);
            var sdk_token = wx.getStorageSync(_[52171]);
            wx.request({
                url: _[40420] + HOST + _[52190],
                method: _[52168],
                dataType: _[5704],
                header: {
                    'content-type': _[52169] // 默认值
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
                    console.log(_[52191] + JSON.stringify(res));
                }
            });
        },

        msgCheck: function (content, callback) {
            console.log(_[52192] + content);

            let ret = {
                data: {}
            };
            JmCore.msgCheck(content, 1, function (res) {
                console.log(_[52193], res);
                if (res && res.suggest == _[6297]) {

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
            console.log(_[52194] + JSON.stringify(data));

            var self = this;
            callbacks[_[52195]] = typeof callback == _[51382] ? callback : null;
            //先下单
            this_pay_order = 0;
            var sdk_token = wx.getStorageSync(_[52171]);
            var session_key = wx.getStorageSync(_[52174]);
            if (!sdk_token) {
                callbacks[_[52195]] && callbacks[_[52195]](1, {
                    errMsg: _[52196]
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
            public_data[_[52197]] = JSON.stringify(order_data);

            //发起网络请求
            wx.request({
                url: _[40420] + HOST + _[52198],
                method: _[52168],
                dataType: _[5704],
                header: {
                    'content-type': _[52169] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(_[52199] + JSON.stringify(res));
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {

                            if (data.data.ext == '') {
                                let payData = data.data.pay_data;
                                payData[_[52200]] = partner_user_info.openid;

                                JmCore.createOrder(payData, '', function (res) {
                                    console.log(_[52201], res);
                                });
                            } else {
                                self.extDo({ ext1: data.data.ext, ext2: data.data.pay_data });
                            }
                        } else {
                            callbacks[_[52195]] && callbacks[_[52195]](1, {
                                errMsg: data.msg
                            });
                        }
                    } else {
                        callbacks[_[52161]] && callbacks[_[52161]](1, {
                            errMsg: _[52177]
                        });
                    }
                }
            });
        },

        //创建角色
        logCreateRole: function (data) {
            var uid = wx.getStorageSync(_[52172]);
            var username = wx.getStorageSync(_[52173]);

            var postData = {};
            postData[_[52202]] = uid;
            postData[_[52203]] = username;
            postData[_[14068]] = data.roleid;
            postData[_[52204]] = data.rolelevel;
            postData[_[52205]] = data.rolename;
            postData[_[15010]] = data.serverid;

            if (data.roleid && data.serverid) {
                p$8ZARO = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(_[6], postData);

            let sdkRoleInfo = {
                role_id: data.roleid,
                role_name: data.rolename,
                level: data.rolelevel,
                gender: 0, //性别
                server_no: data.serverid, //区服标识
                server_name: data.servername // 区服名字

                // 渠道上报
            };JmCore.roleReport(sdkRoleInfo, 1, function (res) {
                console.log(_[52206], res);
            });
        },

        //进入游戏
        logEnterGame: function (data) {
            var uid = wx.getStorageSync(_[52172]);
            var username = wx.getStorageSync(_[52173]);

            var postData = {};
            postData[_[52202]] = uid;
            postData[_[52203]] = username;
            postData[_[14068]] = data.roleid;
            postData[_[52204]] = data.rolelevel;
            postData[_[52205]] = data.rolename;
            postData[_[15010]] = data.serverid;

            if (data.roleid && data.serverid) {
                p$8ZARO = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(_[5586], postData);

            //进入游戏确认邀请成功
            if (p$8AORZ) {
                this.updateShare(p$8AORZ.invite, p$8AORZ.invite_type, p$8AORZ.is_new, data.roleid, data.serverid, p$8AORZ.scene);
            }
            let sdkRoleInfo = {
                role_id: data.roleid,
                role_name: data.rolename,
                level: data.rolelevel,
                gender: 0, //性别
                server_no: data.serverid, //区服标识
                server_name: data.servername // 区服名字

                // 渠道上报
            };JmCore.roleReport(sdkRoleInfo, 2, function (res) {
                console.log(_[52207], res);
            });
        },

        //角色升级
        logRoleUpLevel: function (data) {
            var uid = wx.getStorageSync(_[52172]);
            var username = wx.getStorageSync(_[52173]);

            var postData = {};
            postData[_[52202]] = uid;
            postData[_[52203]] = username;
            postData[_[14068]] = data.roleid;
            postData[_[52204]] = data.rolelevel;
            postData[_[52205]] = data.rolename;
            postData[_[15010]] = data.serverid;

            if (data.roleid && data.serverid) {
                p$8ZARO = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(_[52208], postData);

            let sdkRoleInfo = {
                role_id: data.roleid,
                role_name: data.rolename,
                level: data.rolelevel,
                gender: 0, //性别
                server_no: data.serverid, //区服标识
                server_name: data.servername // 区服名字

                // 渠道上报
            };JmCore.roleReport(sdkRoleInfo, 3, function (res) {
                console.log(_[52209], res);
            });
        },

        //获取唯一设备码（自定义）
        uuid: function (radix, len) {
            var chars = _[52210].split('');
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
            var uuid = wx.getStorageSync(_[52157]);
            var idfv = wx.getStorageSync(_[52158]);
            var ad_code = wx.getStorageSync(_[52159]);

            return {
                game_id: config.game_id,
                game_pkg: config.game_pkg,
                partner_id: config.partner_id,
                partner_label: config.partner_label,
                ad_code: ad_code,
                uuid: uuid,
                idfv: idfv,
                mac: _[52211],
                is_from_min: 1,
                dname: sysInfo.model,
                net_type: sysInfo.wifiSignal == 0 ? '4G' : _[52212],
                os_ver: sysInfo.system,
                sdk_ver: sysInfo.version, //存放的是微信版本号
                game_ver: config.game_ver, //存放的是SDK版本号
                device: sysInfo.platform == _[52213] ? 1 : 2
            };
        },

        //统一发送log
        log: function (type, data) {
            var public_data = this.getPublicData();
            for (var key in data) {
                public_data[key] = data[key];
            }

            console.log(_[52214] + type);
            console.log(public_data);

            wx.request({
                url: _[40420] + HOST + _[52215] + type + _[52216] + encodeURIComponent(JSON.stringify(public_data))
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

            JmCore.transferClient();
        },
        // 微端小助手(兼容)
        sendUrl: function () {
            JmCore.transferClient();
        },

        // 设置 wx.shareMessageToFriend 接口 query 字段的值
        setMessageToFriendQuery: function (data, callback) {
            var cp_activity_id = data.activity_id;
            var result = wx.setMessageToFriendQuery({ shareMessageToFriendScene: cp_activity_id });

            callback(result);
        },

        // 游戏loading完成事件上报
        setLoadingCmp: function () {},

        //获取验证码
        sendCode: function (data, callback) {

            console.log(_[52217], data.phone);
        },
        //绑定手机
        bindPhone: function (data, callback) {

            console.log(_[52218], data.phone, data.code);
        },
        subscribeMessage: function (tmplIds, callback) {
            console.log(_[52219] + tmplIds);
            //获取模板ID
            callbacks[_[52220]] = typeof callback == _[51382] ? callback : null;
            wx.requestSubscribeMessage({
                tmplIds: tmplIds,
                success(res) {
                    console.log(_[52221]);
                    console.log(res);
                    callbacks[_[52220]] && callbacks[_[52220]](res);
                },
                fail(res) {
                    console.log(_[52222]);
                    console.log(res);
                    callbacks[_[52220]] && callbacks[_[52220]](res);
                }
            });
        }

    };
}

function run(method, data, callback) {
    method in p$8ZAOR && p$8ZAOR[method](data, callback);
}

exports.init = function (data, callback) {
    run(_[371], data, callback);
};

exports.login = function (callback) {
    run(_[52161], '', callback);
};

exports.login = function (callback) {
    run(_[52161], '', callback);
};

exports.pay = function (data, callback) {
    run(_[52195], data, callback);
};

exports.openService = function () {
    run(_[37029]);
};

exports.logCreateRole = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(_[52223], data);
};

exports.logEnterGame = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };

    run(_[52224], data);
};

exports.logRoleUpLevel = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(_[52225], data);
};

exports.share = function (type) {
    var data = {
        type: type
    };
    run(_[52178], data);
};

exports.msgCheck = function (data, callback) {
    run(_[16371], data, callback);
};

exports.downloadClient = function () {
    run(_[52226]);
};

exports.getConfig = function () {
    return {
        game_id: config.game_id,
        game_pkg: config.game_pkg,
        partner_id: config.partner_id
    };
};

exports.getPublicData = function () {
    run(_[52227]);
};

exports.weiduanHelper = function () {
    run(_[36802]);
};
exports.sendUrl = function () {
    run(_[52228]);
};

exports.setMessageToFriendQuery = function (data, callback) {
    run(_[52229], data, callback);
};

exports.setLoadingCmp = function () {
    run(_[52230]);
};

exports.sendCode = function (data, callback) {
    run(_[52231], data, callback);
};

exports.bindPhone = function (data, callback) {
    run(_[15205], data, callback);
};

exports.subscribeMessage = function (data, callback) {
    run(_[52220], data, callback);
};