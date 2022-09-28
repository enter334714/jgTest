var _ = wx.y$;
const JmCore = require(_[45899]);

//TODO 替换对应参数
var config = {
    game_id: 112,
    game_pkg: _[45900],
    partner_label: _[45901],
    partner_id: _[45902],
    game_ver: _[45903],
    is_auth: false //授权登录
};
window.config = config;
var p$8ZAOR = p$8AROZ();
var HOST = _[45904];
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
            console.log(_[45905]);
            var self = this;

            var uuid = wx.getStorageSync(_[45906]);
            var is_new;
            if (!uuid) {
                uuid = self.uuid(16, 32);
                wx.setStorageSync(_[45906], uuid);
                is_new = 1;
            } else {
                is_new = 0;
            }
            var idfv = wx.getStorageSync(_[45907]);
            if (!idfv) {
                idfv = self.uuid(16, 32);
                wx.setStorageSync(_[45907], idfv);
            }

            var info = wx.getLaunchOptionsSync();
            var scene = info.scene ? info.scene : '';

            wx.showShareMenu();

            //判断今天是否已经上报过
            if (is_new && info.query && info.query.ad_code) {
                wx.setStorageSync(_[45908], info.query.ad_code);
            }

            var data = {
                install: is_new,
                scene: scene
            };
            self.log(_[286], data);

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
            console.log(_[45909]);
            callbacks[_[45910]] = typeof callback == _[45138] ? callback : null;
            var self = this;

            JmCore.init(function (res) {
                console.log(_[45911], res);
                if (res.code == 0) {
                    JmCore.login(function (res) {
                        console.log(_[45912], res);
                        if (res.code == 0) {
                            partner_user_info = res.data;
                            self.do_login(partner_user_info);
                        } else {
                            console.warn(_[45913]);
                        }
                    });
                } else {
                    console.warn(_[45914]);
                }
            });
        },

        do_login: function (info) {
            var self = this;

            //发起网络请求
            var public_data = self.getPublicData();
            public_data[_[45915]] = JSON.stringify(info);
            if (p$8AORZ && typeof p$8AORZ == _[281]) {
                for (var key in p$8AORZ) {
                    public_data[key] = p$8AORZ[key];
                }
            }

            wx.request({
                url: _[38567] + HOST + _[45916],
                method: _[45917],
                dataType: _[5510],
                header: {
                    'content-type': _[45918] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(_[45919] + JSON.stringify(res));

                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            try {
                                wx.setStorageSync(_[45920], data.data.sdk_token);
                                wx.setStorageSync(_[45921], data.data.user_id);
                                wx.setStorageSync(_[45922], data.data.username);
                                if (data.data.ext) {
                                    wx.setStorageSync(_[45923], data.data.ext);
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
                            callbacks[_[45910]] && callbacks[_[45910]](0, userData);
                        } else {
                            callbacks[_[45910]] && callbacks[_[45910]](1, {
                                errMsg: data.msg
                            });
                        }

                        self.getShareInfo(_[45924], function (data) {
                            console.log(_[45925]);
                            self.logStartShare(_[45924]);

                            wx.onShareAppMessage(function () {
                                //记录开始分享
                                self.logStartShare(_[45924]);
                                return {
                                    title: data.title,
                                    imageUrl: data.img,
                                    query: data.query
                                };
                            });
                        });
                    } else {
                        callbacks[_[45910]] && callbacks[_[45910]](1, {
                            errMsg: _[45926]
                        });
                    }
                }
            });
        },

        share: function (data) {
            callbacks[_[45927]] = typeof callback == _[45138] ? callback : null;
            var type = data.type || _[45927];
            console.log(_[45928] + type);
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
            var sdk_token = wx.getStorageSync(_[45920]);
            wx.request({
                url: _[38567] + HOST + _[45929],
                method: _[45917],
                dataType: _[5510],
                header: {
                    'content-type': _[45918] // 默认值
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
            console.log(_[45930]);
            var sdk_token = wx.getStorageSync(_[45920]);
            wx.request({
                url: _[38567] + HOST + _[45931],
                method: _[45917],
                dataType: _[5510],
                header: {
                    'content-type': _[45918] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    game_ver: game_ver
                },
                success: function (res) {
                    console.log(_[45932] + JSON.stringify(res));

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
            console.log(_[45933]);
            var sdk_token = wx.getStorageSync(_[45920]);
            wx.request({
                url: _[38567] + HOST + _[45934],
                method: _[45917],
                dataType: _[5510],
                header: {
                    'content-type': _[45918] // 默认值
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
                    console.log(_[45935]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callback && callback(data.data);
                        } else {
                            callbacks[_[45927]] && callbacks[_[45927]](1, {
                                errMsg: _[45936] + data.msg
                            });
                        }
                    } else {
                        callbacks[_[45927]] && callbacks[_[45927]](1, {
                            errMsg: _[45937]
                        });
                    }
                }
            });
        },

        updateShare: function (invite, invite_type, is_new, role_id, server_id, scene) {
            console.log(_[45938]);
            var sdk_token = wx.getStorageSync(_[45920]);
            wx.request({
                url: _[38567] + HOST + _[45939],
                method: _[45917],
                dataType: _[5510],
                header: {
                    'content-type': _[45918] // 默认值
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
                    console.log(_[45940] + JSON.stringify(res));
                }
            });
        },

        msgCheck: function (content, callback) {
            console.log(_[45941] + content);

            let ret = {
                data: {}
            };
            JmCore.msgCheck(content, 1, function (res) {
                console.log(_[45942], res);
                if (res && res.suggest == _[5915]) {

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
            console.log(_[45943] + JSON.stringify(data));

            var self = this;
            callbacks[_[45944]] = typeof callback == _[45138] ? callback : null;
            //先下单
            this_pay_order = 0;
            var sdk_token = wx.getStorageSync(_[45920]);
            var session_key = wx.getStorageSync(_[45923]);
            if (!sdk_token) {
                callbacks[_[45944]] && callbacks[_[45944]](1, {
                    errMsg: _[45945]
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
            public_data[_[45946]] = JSON.stringify(order_data);

            //发起网络请求
            wx.request({
                url: _[38567] + HOST + _[45947],
                method: _[45917],
                dataType: _[5510],
                header: {
                    'content-type': _[45918] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(_[45948] + JSON.stringify(res));
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {

                            if (data.data.ext == '') {
                                let payData = data.data.pay_data;
                                payData[_[45949]] = partner_user_info.openid;

                                JmCore.createOrder(payData, '', function (res) {
                                    console.log(_[45950], res);
                                });
                            } else {
                                self.extDo({ ext1: data.data.ext, ext2: data.data.pay_data });
                            }
                        } else {
                            callbacks[_[45944]] && callbacks[_[45944]](1, {
                                errMsg: data.msg
                            });
                        }
                    } else {
                        callbacks[_[45910]] && callbacks[_[45910]](1, {
                            errMsg: _[45926]
                        });
                    }
                }
            });
        },

        //创建角色
        logCreateRole: function (data) {
            var uid = wx.getStorageSync(_[45921]);
            var username = wx.getStorageSync(_[45922]);

            var postData = {};
            postData[_[45951]] = uid;
            postData[_[45952]] = username;
            postData[_[13436]] = data.roleid;
            postData[_[45953]] = data.rolelevel;
            postData[_[45954]] = data.rolename;
            postData[_[14384]] = data.serverid;

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
                console.log(_[45955], res);
            });
        },

        //进入游戏
        logEnterGame: function (data) {
            var uid = wx.getStorageSync(_[45921]);
            var username = wx.getStorageSync(_[45922]);

            var postData = {};
            postData[_[45951]] = uid;
            postData[_[45952]] = username;
            postData[_[13436]] = data.roleid;
            postData[_[45953]] = data.rolelevel;
            postData[_[45954]] = data.rolename;
            postData[_[14384]] = data.serverid;

            if (data.roleid && data.serverid) {
                p$8ZARO = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(_[5392], postData);

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
                console.log(_[45956], res);
            });
        },

        //角色升级
        logRoleUpLevel: function (data) {
            var uid = wx.getStorageSync(_[45921]);
            var username = wx.getStorageSync(_[45922]);

            var postData = {};
            postData[_[45951]] = uid;
            postData[_[45952]] = username;
            postData[_[13436]] = data.roleid;
            postData[_[45953]] = data.rolelevel;
            postData[_[45954]] = data.rolename;
            postData[_[14384]] = data.serverid;

            if (data.roleid && data.serverid) {
                p$8ZARO = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(_[45957], postData);

            let sdkRoleInfo = {
                role_id: data.roleid,
                role_name: data.rolename,
                level: data.rolelevel,
                gender: 0, //性别
                server_no: data.serverid, //区服标识
                server_name: data.servername // 区服名字

                // 渠道上报
            };JmCore.roleReport(sdkRoleInfo, 3, function (res) {
                console.log(_[45958], res);
            });
        },

        //获取唯一设备码（自定义）
        uuid: function (radix, len) {
            var chars = _[45959].split('');
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
            var uuid = wx.getStorageSync(_[45906]);
            var idfv = wx.getStorageSync(_[45907]);
            var ad_code = wx.getStorageSync(_[45908]);

            return {
                game_id: config.game_id,
                game_pkg: config.game_pkg,
                partner_id: config.partner_id,
                partner_label: config.partner_label,
                ad_code: ad_code,
                uuid: uuid,
                idfv: idfv,
                mac: _[45960],
                is_from_min: 1,
                dname: sysInfo.model,
                net_type: sysInfo.wifiSignal == 0 ? '4G' : _[45961],
                os_ver: sysInfo.system,
                sdk_ver: sysInfo.version, //存放的是微信版本号
                game_ver: config.game_ver, //存放的是SDK版本号
                device: sysInfo.platform == _[45962] ? 1 : 2
            };
        },

        //统一发送log
        log: function (type, data) {
            var public_data = this.getPublicData();
            for (var key in data) {
                public_data[key] = data[key];
            }

            console.log(_[45963] + type);
            console.log(public_data);

            wx.request({
                url: _[38567] + HOST + _[45964] + type + _[45965] + encodeURIComponent(JSON.stringify(public_data))
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

            console.log(_[45966], data.phone);
        },
        //绑定手机
        bindPhone: function (data, callback) {

            console.log(_[45967], data.phone, data.code);
        },
        subscribeMessage: function (tmplIds, callback) {
            console.log(_[45968] + tmplIds);
            //获取模板ID
            callbacks[_[45969]] = typeof callback == _[45138] ? callback : null;
            wx.requestSubscribeMessage({
                tmplIds: tmplIds,
                success(res) {
                    console.log(_[45970]);
                    console.log(res);
                    callbacks[_[45969]] && callbacks[_[45969]](res);
                },
                fail(res) {
                    console.log(_[45971]);
                    console.log(res);
                    callbacks[_[45969]] && callbacks[_[45969]](res);
                }
            });
        }

    };
}

function run(method, data, callback) {
    method in p$8ZAOR && p$8ZAOR[method](data, callback);
}

exports.init = function (data, callback) {
    run(_[367], data, callback);
};

exports.login = function (callback) {
    run(_[45910], '', callback);
};

exports.login = function (callback) {
    run(_[45910], '', callback);
};

exports.pay = function (data, callback) {
    run(_[45944], data, callback);
};

exports.openService = function () {
    run(_[35683]);
};

exports.logCreateRole = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(_[45972], data);
};

exports.logEnterGame = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };

    run(_[45973], data);
};

exports.logRoleUpLevel = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(_[45974], data);
};

exports.share = function (type) {
    var data = {
        type: type
    };
    run(_[45927], data);
};

exports.msgCheck = function (data, callback) {
    run(_[15567], data, callback);
};

exports.downloadClient = function () {
    run(_[45975]);
};

exports.getConfig = function () {
    return {
        game_id: config.game_id,
        game_pkg: config.game_pkg,
        partner_id: config.partner_id
    };
};

exports.getPublicData = function () {
    run(_[45976]);
};

exports.weiduanHelper = function () {
    run(_[35462]);
};
exports.sendUrl = function () {
    run(_[45977]);
};

exports.setMessageToFriendQuery = function (data, callback) {
    run(_[45978], data, callback);
};

exports.setLoadingCmp = function () {
    run(_[45979]);
};

exports.sendCode = function (data, callback) {
    run(_[45980], data, callback);
};

exports.bindPhone = function (data, callback) {
    run(_[14578], data, callback);
};

exports.subscribeMessage = function (data, callback) {
    run(_[45969], data, callback);
};