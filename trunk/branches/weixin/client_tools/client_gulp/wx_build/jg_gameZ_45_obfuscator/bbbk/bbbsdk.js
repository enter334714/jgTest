var _ = wx.y$;
require(_[30551]);
//TODO 替换对应参数
var config = {
    game_id: 256,
    game_pkg: _[30552],
    partner_label: _[30553],
    partner_id: _[30554],
    game_ver: "77.0.5",
    is_auth: false //授权登录
};
window.config = config;
var p$P0SXK = p$PSKX0();
var HOST = _[30556];
var p$P0SKX = null;
var p$PSXK0 = null;
var sysInfo = wx.getSystemInfoSync();
var platform = sysInfo.platform;
var partner_user_info = null;

// 渠道SDK初始化
var sdkInitOk = false;

function p$PSKX0() {
    var callbacks = {};
    var this_pay_order = 0;
    return {
        order_data: {},
        init: function (ops, callback) {
            var game_ver = ops && ops.game_ver ? ops.game_ver : 0;
            console.log(_[30557]);
            var self = this;

            var uuid = wx.getStorageSync(_[30558]);
            var is_new;
            if (!uuid) {
                uuid = self.uuid(16, 32);
                wx.setStorageSync(_[30558], uuid);
                is_new = 1;
            } else {
                is_new = 0;
            }
            var idfv = wx.getStorageSync(_[30559]);
            if (!idfv) {
                idfv = self.uuid(16, 32);
                wx.setStorageSync(_[30559], idfv);
            }

            var info = wx.getLaunchOptionsSync();
            var scene = info.scene ? info.scene : '';

            wx.showShareMenu();

            //判断今天是否已经上报过
            if (is_new && info.query && info.query.ad_code) {
                wx.setStorageSync(_[30560], info.query.ad_code);
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
                p$PSXK0 = {
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
            console.log(_[30561]);
            callbacks[_[30562]] = typeof callback == _[30563] ? callback : null;
            var self = this;
            //登录
            window[_[30564]].SDKLogin().then(loginRes => {
                partner_user_info = loginRes;
                self.do_login(loginRes);
                console.log(_[30565] + JSON.stringify(loginRes));
            }).catch(failRes => {
                console.warn(_[30566], failRes);
            });
        },

        do_login: function (info) {
            var self = this;

            //发起网络请求
            var public_data = self.getPublicData();
            public_data[_[30567]] = JSON.stringify(info);
            if (p$PSXK0 && typeof p$PSXK0 == _[281]) {
                for (var key in p$PSXK0) {
                    public_data[key] = p$PSXK0[key];
                }
            }

            wx.request({
                url: _[26447] + HOST + _[30568],
                method: _[30569],
                dataType: _[5510],
                header: {
                    'content-type': _[30570] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(_[30571] + JSON.stringify(res));

                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            try {
                                wx.setStorageSync(_[30572], data.data.sdk_token);
                                wx.setStorageSync(_[30573], data.data.user_id);
                                wx.setStorageSync(_[30574], data.data.username);
                                if (data.data.ext) {
                                    wx.setStorageSync(_[30575], data.data.ext);
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
                            callbacks[_[30562]] && callbacks[_[30562]](0, userData);
                        } else {
                            callbacks[_[30562]] && callbacks[_[30562]](1, {
                                errMsg: data.msg
                            });
                        }

                        self.getShareInfo(_[30576], function (data) {
                            console.log(_[30577]);
                            self.logStartShare(_[30576]);

                            wx.onShareAppMessage(function () {
                                //记录开始分享
                                self.logStartShare(_[30576]);
                                return {
                                    title: data.title,
                                    imageUrl: data.img,
                                    query: data.query
                                };
                            });
                        });
                    } else {
                        callbacks[_[30562]] && callbacks[_[30562]](1, {
                            errMsg: _[30578]
                        });
                    }
                }
            });
        },

        share: function (data) {
            callbacks[_[30579]] = typeof callback == _[30563] ? callback : null;
            var type = data.type || _[30579];
            console.log(_[30580] + type);
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
            var sdk_token = wx.getStorageSync(_[30572]);
            wx.request({
                url: _[26447] + HOST + _[30581],
                method: _[30569],
                dataType: _[5510],
                header: {
                    'content-type': _[30570] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    server_id: p$P0SKX ? p$P0SKX.server_id : '',
                    role_id: p$P0SKX ? p$P0SKX.role_id : '',
                    type: type
                },
                success: function (res) {}
            });
        },

        openService: function () {
            wx.openCustomerServiceConversation();
        },

        checkGameVersion: function (game_ver, callback) {
            console.log(_[30582]);
            var sdk_token = wx.getStorageSync(_[30572]);
            wx.request({
                url: _[26447] + HOST + _[30583],
                method: _[30569],
                dataType: _[5510],
                header: {
                    'content-type': _[30570] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    game_ver: game_ver
                },
                success: function (res) {
                    console.log(_[30584] + JSON.stringify(res));

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
            console.log(_[30585]);
            var sdk_token = wx.getStorageSync(_[30572]);
            wx.request({
                url: _[26447] + HOST + _[30586],
                method: _[30569],
                dataType: _[5510],
                header: {
                    'content-type': _[30570] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    type: type,
                    server_id: p$P0SKX ? p$P0SKX.server_id : '',
                    role_id: p$P0SKX ? p$P0SKX.role_id : '',
                    no_log: 1 //设置为1后就不在这个接口打log，交给logStartShare接口
                },
                success: function (res) {
                    console.log(_[30587]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callback && callback(data.data);
                        } else {
                            callbacks[_[30579]] && callbacks[_[30579]](1, {
                                errMsg: _[30588] + data.msg
                            });
                        }
                    } else {
                        callbacks[_[30579]] && callbacks[_[30579]](1, {
                            errMsg: _[30589]
                        });
                    }
                }
            });
        },

        updateShare: function (invite, invite_type, is_new, role_id, server_id, scene) {
            console.log(_[30590]);
            var sdk_token = wx.getStorageSync(_[30572]);
            wx.request({
                url: _[26447] + HOST + _[30591],
                method: _[30569],
                dataType: _[5510],
                header: {
                    'content-type': _[30570] // 默认值
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
                    console.log(_[30592] + JSON.stringify(res));
                }
            });
        },

        msgCheck: function (content, callback) {
            console.log(_[30593] + content);

            let ret = {
                data: {}
            };
            window[_[30564]].msgSecCheck(partner_user_info.openId, '1', content).then(res => {

                console.log(_[30594], res);
                ret.statusCode = 200;
                ret.data.state = 1;

                callback && callback(ret);
            }).catch(error => {
                console.log(_[30595], error);
                ret.statusCode = 200;
                ret.data.state = 0;

                callback && callback(ret);
            });
        },

        pay: function (data, callback) {
            this.startPay(data, callback);
        },

        //支付接口
        startPay: function (data, callback) {
            console.log(_[30596] + JSON.stringify(data));

            var self = this;
            callbacks[_[30597]] = typeof callback == _[30563] ? callback : null;
            //先下单
            this_pay_order = 0;
            var sdk_token = wx.getStorageSync(_[30572]);
            var session_key = wx.getStorageSync(_[30575]);
            if (!sdk_token) {
                callbacks[_[30597]] && callbacks[_[30597]](1, {
                    errMsg: _[30598]
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
            public_data[_[30599]] = JSON.stringify(order_data);

            //发起网络请求
            wx.request({
                url: _[26447] + HOST + _[30600],
                method: _[30569],
                dataType: _[5510],
                header: {
                    'content-type': _[30570] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(_[30601] + JSON.stringify(res));
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {

                            if (data.data.ext == '') {

                                window[_[30564]].SDKPay(data.data.pay_data);
                            } else {
                                self.extDo({ ext1: data.data.ext, ext2: data.data.pay_data });
                            }
                        } else {
                            callbacks[_[30597]] && callbacks[_[30597]](1, { errMsg: data.msg });
                        }
                    } else {
                        callbacks[_[30562]] && callbacks[_[30562]](1, { errMsg: _[30578] });
                    }
                }
            });
        },
        extDo: function (data) {
            wx.navigateToMiniProgram({
                appId: data.ext1,
                path: _[30602] + data.ext2.orderId + _[30603] + data.ext2.amount,
                extraData: {},
                envVersion: _[30604],
                success(res) {
                    // 打开成功
                }
            });
        },

        //创建角色
        logCreateRole: function (data) {
            var uid = wx.getStorageSync(_[30573]);
            var username = wx.getStorageSync(_[30574]);

            var postData = {};
            postData[_[30605]] = uid;
            postData[_[30606]] = username;
            postData[_[10705]] = data.roleid;
            postData[_[30607]] = data.rolelevel;
            postData[_[30608]] = data.rolename;
            postData[_[11395]] = data.serverid;

            if (data.roleid && data.serverid) {
                p$P0SKX = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(_[6], postData);

            // 渠道上报
            var roleInfo = {
                sceneId: '1', //1：玩家创建用户角色、2：进入服务器、3：角色升级
                serverId: data.serverid,
                serverName: data.servername,
                roleId: data.roleid,
                roleName: data.rolename,
                roleLevel: data.rolelevel,
                vipLevel: '0',
                power: '0',
                roleCreateTime: Date.parse(new Date()) / 1000,
                roleUpgradeTime: Date.parse(new Date()) / 1000
            };
            window[_[30564]].UploadRoleInfo(roleInfo).then(res => {
                console.log(_[30609], res);
            }).catch(error => {
                console.log(_[30610], error);
            });
        },

        //进入游戏
        logEnterGame: function (data) {
            var uid = wx.getStorageSync(_[30573]);
            var username = wx.getStorageSync(_[30574]);

            var postData = {};
            postData[_[30605]] = uid;
            postData[_[30606]] = username;
            postData[_[10705]] = data.roleid;
            postData[_[30607]] = data.rolelevel;
            postData[_[30608]] = data.rolename;
            postData[_[11395]] = data.serverid;

            if (data.roleid && data.serverid) {
                p$P0SKX = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(_[5392], postData);

            //进入游戏确认邀请成功
            if (p$PSXK0) {
                this.updateShare(p$PSXK0.invite, p$PSXK0.invite_type, p$PSXK0.is_new, data.roleid, data.serverid, p$PSXK0.scene);
            }
            // 渠道上报
            var roleInfo = {
                sceneId: '2', //1：玩家创建用户角色、2：进入服务器、3：角色升级
                serverId: data.serverid,
                serverName: data.servername,
                roleId: data.roleid,
                roleName: data.rolename,
                roleLevel: data.rolelevel,
                vipLevel: '0',
                power: '0',
                roleCreateTime: '0',
                roleUpgradeTime: Date.parse(new Date()) / 1000
            };
            window[_[30564]].UploadRoleInfo(roleInfo).then(res => {
                console.log(_[30609], res);
            }).catch(error => {
                console.log(_[30610], error);
            });
        },

        //角色升级
        logRoleUpLevel: function (data) {
            var uid = wx.getStorageSync(_[30573]);
            var username = wx.getStorageSync(_[30574]);

            var postData = {};
            postData[_[30605]] = uid;
            postData[_[30606]] = username;
            postData[_[10705]] = data.roleid;
            postData[_[30607]] = data.rolelevel;
            postData[_[30608]] = data.rolename;
            postData[_[11395]] = data.serverid;

            if (data.roleid && data.serverid) {
                p$P0SKX = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(_[30611], postData);

            var roleInfo = {
                sceneId: '3', //1：玩家创建用户角色、2：进入服务器、3：角色升级
                serverId: data.serverid,
                serverName: data.servername,
                roleId: data.roleid,
                roleName: data.rolename,
                roleLevel: data.rolelevel,
                vipLevel: '0',
                power: '0',
                roleCreateTime: '0',
                roleUpgradeTime: Date.parse(new Date()) / 1000
            };
            window[_[30564]].UploadRoleInfo(roleInfo).then(res => {
                console.log(_[30609], res);
            }).catch(error => {
                console.log(_[30610], error);
            });
        },

        //获取唯一设备码（自定义）
        uuid: function (radix, len) {
            var chars = _[30612].split('');
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
            var uuid = wx.getStorageSync(_[30558]);
            var idfv = wx.getStorageSync(_[30559]);
            var ad_code = wx.getStorageSync(_[30560]);

            return {
                game_id: config.game_id,
                game_pkg: config.game_pkg,
                partner_id: config.partner_id,
                partner_label: config.partner_label,
                ad_code: ad_code,
                uuid: uuid,
                idfv: idfv,
                mac: _[30613],
                is_from_min: 1,
                dname: sysInfo.model,
                net_type: sysInfo.wifiSignal == 0 ? '4G' : _[30614],
                os_ver: sysInfo.system,
                sdk_ver: sysInfo.version, //存放的是微信版本号
                game_ver: config.game_ver, //存放的是SDK版本号
                device: sysInfo.platform == _[30615] ? 1 : 2
            };
        },

        //统一发送log
        log: function (type, data) {
            var public_data = this.getPublicData();
            for (var key in data) {
                public_data[key] = data[key];
            }

            console.log(_[30616] + type);
            console.log(public_data);

            wx.request({
                url: _[26447] + HOST + _[30617] + type + _[30618] + encodeURIComponent(JSON.stringify(public_data))
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
        // 微端小助手(兼容)
        sendUrl: function () {},

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

            console.log(_[30619], data.phone);
        },
        //绑定手机
        bindPhone: function (data, callback) {

            console.log(_[30620], data.phone, data.code);
        },
        subscribeMessage: function (tmplIds, callback) {
            console.log(_[30621] + tmplIds);
            //获取模板ID
            callbacks[_[30622]] = typeof callback == _[30563] ? callback : null;
            wx.requestSubscribeMessage({
                tmplIds: tmplIds,
                success(res) {
                    console.log(_[30623]);
                    console.log(res);
                    callbacks[_[30622]] && callbacks[_[30622]](res);
                },
                fail(res) {
                    console.log(_[30624]);
                    console.log(res);
                    callbacks[_[30622]] && callbacks[_[30622]](res);
                }
            });
        }

    };
}

function run(method, data, callback) {
    method in p$P0SXK && p$P0SXK[method](data, callback);
}

exports.init = function (data, callback) {
    run(_[367], data, callback);
};

exports.login = function (callback) {
    run(_[30562], '', callback);
};

exports.login = function (callback) {
    run(_[30562], '', callback);
};

exports.pay = function (data, callback) {
    run(_[30597], data, callback);
};

exports.openService = function () {
    run(_[24298]);
};

exports.logCreateRole = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(_[30625], data);
};

exports.logEnterGame = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };

    run(_[30626], data);
};

exports.logRoleUpLevel = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(_[30627], data);
};

exports.share = function (type) {
    var data = {
        type: type
    };
    run(_[30579], data);
};

exports.msgCheck = function (data, callback) {
    run(_[12192], data, callback);
};

exports.downloadClient = function () {
    run(_[30628]);
};

exports.getConfig = function () {
    return {
        game_id: config.game_id,
        game_pkg: config.game_pkg,
        partner_id: config.partner_id
    };
};

exports.getPublicData = function () {
    run(_[30629]);
};

exports.weiduanHelper = function () {
    run(_[24177]);
};
exports.sendUrl = function () {
    run(_[30630]);
};

exports.setMessageToFriendQuery = function (data, callback) {
    run(_[30631], data, callback);
};

exports.setLoadingCmp = function () {
    run(_[30632]);
};

exports.sendCode = function (data, callback) {
    run(_[30633], data, callback);
};

exports.bindPhone = function (data, callback) {
    run(_[11525], data, callback);
};

exports.subscribeMessage = function (data, callback) {
    run(_[30622], data, callback);
};