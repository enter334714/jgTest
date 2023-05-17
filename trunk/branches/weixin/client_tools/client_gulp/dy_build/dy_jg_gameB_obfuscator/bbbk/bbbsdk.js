var _ = wx.y$;
//TODO 替换对应参数
import config from './partner_config.js';
window.config = config;
var p$ADEBC = p$AECBD();
var HOST = _[54613];
var p$ADECB = null;
var p$AEBCD = null;
var sysInfo = tt.getSystemInfoSync();
var platform = sysInfo.platform;
var partner_user_info = null;
var iosPayData = null;
var ad_info = null;
function p$AECBD() {
    var callbacks = {};
    var this_pay_order = 0;
    return {
        order_data: {},
        init: function (ops, callback) {
            var game_ver = ops && ops.game_ver ? ops.game_ver : 0;
            console.log(_[54626]);
            var self = this;

            var uuid = tt.getStorageSync(_[54627]);
            var is_new;
            if (!uuid) {
                uuid = self.uuid(16, 32);
                tt.setStorageSync(_[54627], uuid);
                is_new = 1;
            } else {
                is_new = 0;
            }
            var idfv = tt.getStorageSync(_[54628]);
            if (!idfv) {
                idfv = self.uuid(16, 32);
                tt.setStorageSync(_[54628], idfv);
            }

            var info = tt.getLaunchOptionsSync();
            var scene = info.from ? info.from : '';

            //判断今天是否已经上报过
            if (is_new && info.query && info.query.ad_code) {
                tt.setStorageSync(_[54629], info.query.ad_code);
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
                p$AEBCD = {
                    invite: invite,
                    invite_type: invite_type,
                    is_new: is_new,
                    scene: scene
                };
            }
            ad_info = {
                "temp_info": info,
                "temp_uuid": uuid,
                "temp_is_new": is_new
                //判断版本号
            };if (game_ver) {
                this.checkGameVersion(game_ver, function (data) {
                    callback && callback(data);
                });
            }
        },

        adLog: function (openid) {
            //发送启动参数
            var info = ad_info.temp_info;
            var is_new = ad_info.temp_is_new;
            var uuid = ad_info.temp_uuid;
            if (info.query.hasOwnProperty(_[54630]) && info.query.hasOwnProperty(_[54631])) {
                var temp_data = info.query;
                temp_data[_[54632]] = uuid;
                temp_data[_[54633]] = openid;
                temp_data[_[14500]] = JSON.stringify(info.query);
                var url = _[54634] + this.convertObj(temp_data);
                console.log(_[54635] + url);
                wx.request({
                    url: url
                });
            }
        },
        convertObj: function (data) {
            var _result = [];
            for (var key in data) {
                var value = data[key];
                if (value.constructor == Array) {
                    value.forEach(function (_value) {
                        _result.push(key + "=" + _value);
                    });
                } else {
                    _result.push(key + '=' + value);
                }
            }
            return _result.join('&');
        },

        login: function (data, callback) {
            console.log(_[54636]);
            callbacks[_[54637]] = typeof callback == _[54227] ? callback : null;
            var self = this;

            // 渠道SDK初始化
            tt.login({
                success: result => {
                    console.log(_[54638] + JSON.stringify(result));
                    partner_user_info = result;
                    self.do_login(result);
                },
                fail: error => {
                    console.log(_[54639] + JSON.stringify(error));
                }
            });
        },

        do_login: function (info) {
            var self = this;

            //发起网络请求
            var public_data = self.getPublicData();
            public_data[_[54640]] = JSON.stringify(info);
            if (p$AEBCD && typeof p$AEBCD == _[284]) {
                for (var key in p$AEBCD) {
                    public_data[key] = p$AEBCD[key];
                }
            }

            tt.request({
                url: _[41670] + HOST + _[54641],
                method: _[54617],
                dataType: _[5910],
                header: {
                    'content-type': _[54618] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(_[54642] + JSON.stringify(res));

                    if (res.statusCode == 200) {
                        var data = res.data;
                        partner_user_info[_[54633]] = data.data.openid;
                        if (data.state) {
                            partner_user_info[_[54643]] = data.data.ext;
                            try {
                                tt.setStorageSync(_[54644], data.data.sdk_token);
                                tt.setStorageSync(_[54645], data.data.user_id);
                                tt.setStorageSync(_[54614], data.data.username);
                                if (data.data.ext) {
                                    tt.setStorageSync(_[54646], data.data.ext);
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
                            try {
                                self.adLog(data.data.openid);
                            } catch (e) {
                                console.log(_[54647] + JSON.stringify(e));
                            }
                            callbacks[_[54637]] && callbacks[_[54637]](0, userData);
                        } else {
                            callbacks[_[54637]] && callbacks[_[54637]](1, {
                                errMsg: data.msg
                            });
                        }

                        self.getShareInfo(_[54648], function (data) {
                            console.log(_[54649]);
                        });
                    } else {
                        callbacks[_[54637]] && callbacks[_[54637]](1, {
                            errMsg: _[54650]
                        });
                    }
                }
            });
        },

        share: function (data) {
            callbacks[_[54651]] = typeof callback == _[54227] ? callback : null;
            var type = data.type || _[54651];
            var cp_activity_id = data.cp_activity_id || '';

            console.log(_[54652] + type);
            var self = this;
            this.getShareInfo(type, function (data) {

                var partner_query = mgsdk.shareQueryStr();
                var query_str = data.query + '&' + partner_query;

                if (cp_activity_id != '') {
                    query_str = query_str + _[54653] + cp_activity_id;
                }

                console.log(_[54654] + query_str);

                //记录开始分享
                self.logStartShare(type);
                tt.shareAppMessage({
                    templateId: partner_user_info.templateId,
                    success: function (res) {
                        console.log(_[54655]);
                    },
                    fail: function (res) {
                        console.log(_[11309]);
                    },
                    complete: function (res) {
                        console.log(_[54656]);
                    }
                });
            });
        },

        logStartShare: function (type) {
            var sdk_token = tt.getStorageSync(_[54644]);
            tt.request({
                url: _[41670] + HOST + _[54657],
                method: _[54617],
                dataType: _[5910],
                header: {
                    'content-type': _[54618] // 默认值
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
            // wx.openCustomerServiceConversation();
        },

        checkGameVersion: function (game_ver, callback) {
            console.log(_[54658]);
            var sdk_token = tt.getStorageSync(_[54644]);
            tt.request({
                url: _[41670] + HOST + _[54659],
                method: _[54617],
                dataType: _[5910],
                header: {
                    'content-type': _[54618] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    game_ver: game_ver
                },
                success: function (res) {
                    console.log(_[54660] + JSON.stringify(res));

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
            console.log(_[54661]);
            var sdk_token = tt.getStorageSync(_[54644]);
            tt.request({
                url: _[41670] + HOST + _[54662],
                method: _[54617],
                dataType: _[5910],
                header: {
                    'content-type': _[54618] // 默认值
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
                    console.log(_[54663]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callback && callback(data.data);
                        } else {
                            callbacks[_[54651]] && callbacks[_[54651]](1, {
                                errMsg: _[54664] + data.msg
                            });
                        }
                    } else {
                        callbacks[_[54651]] && callbacks[_[54651]](1, {
                            errMsg: _[54665]
                        });
                    }
                }
            });
        },

        updateShare: function (invite, invite_type, is_new, role_id, server_id, scene) {
            console.log(_[54666]);
            var sdk_token = tt.getStorageSync(_[54644]);
            tt.request({
                url: _[41670] + HOST + _[54667],
                method: _[54617],
                dataType: _[5910],
                header: {
                    'content-type': _[54618] // 默认值
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
                    console.log(_[54668] + JSON.stringify(res));
                }
            });
        },

        msgCheck: function (content, callback) {
            console.log(_[54669] + content);
            tt.request({
                url: _[41670] + HOST + _[54670] + config.partner_id + '/' + config.game_pkg,
                method: _[54617],
                dataType: _[5910],
                header: {
                    'content-type': _[54618] // 默认值
                },
                data: {
                    content: content
                },
                success: function (res) {
                    console.log(_[54671] + JSON.stringify(res));
                    console.log(res);
                    callback && callback(res);
                }
            });
        },

        pay: function (data, callback) {
            this.startPay(data, callback);
        },
        iosPay: function () {
            tt.openAwemeCustomerService(iosPayData);
        },

        //支付接口
        startPay: function (data, callback) {
            console.log(_[54672] + JSON.stringify(data));

            var self = this;
            callbacks[_[54673]] = typeof callback == _[54227] ? callback : null;
            //先下单
            this_pay_order = 0;
            var sdk_token = tt.getStorageSync(_[54644]);
            var session_key = tt.getStorageSync(_[54646]);
            if (!sdk_token) {
                callbacks[_[54673]] && callbacks[_[54673]](1, {
                    errMsg: _[54674]
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
                openid: partner_user_info.openid

            };
            self.order_data = order_data;

            var public_data = self.getPublicData();
            public_data[_[54675]] = JSON.stringify(order_data);

            //发起网络请求
            tt.request({
                url: _[41670] + HOST + _[54676],
                method: _[54617],
                dataType: _[5910],
                header: {
                    'content-type': _[54618] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(_[54677] + JSON.stringify(res));
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            console.log(_[54678] + platform);
                            if (platform == _[54679]) {
                                if (data.data.is_buy > 0) {
                                    console.log(_[54680]);
                                    tt.showModal({
                                        title: _[54681],
                                        content: _[54682] + data.data.balance + _[54683] + data.data.pay_data.buyQuantity + _[54684],
                                        showCancel: false,
                                        confirmText: _[54685],
                                        success: function () {
                                            self.gameGoPay(order_data, data.data.pay_data);
                                        }
                                    });
                                } else {
                                    var pay_data = data.data.pay_data;
                                    pay_data[_[12814]] = function (res) {
                                        console.log(_[54686]);
                                        self.gameGoPay(order_data, data.data.pay_data);
                                    };
                                    pay_data[_[41758]] = function (res) {
                                        console.log(_[54687] + JSON.stringify(res));
                                    };
                                    tt.requestGamePayment(data.data.pay_data);
                                }
                            } else {
                                if (sysInfo.version >= _[54688] && sysInfo.SDKVersion >= _[54689] && sysInfo.appName == _[54690]) {
                                    var pay_data = data.data.pay_data;
                                    iosPayData = {};
                                    iosPayData[_[54691]] = pay_data[_[54691]];
                                    iosPayData[_[54692]] = pay_data[_[54692]];
                                    iosPayData[_[54693]] = pay_data[_[54693]];
                                    iosPayData[_[54694]] = pay_data[_[54694]];
                                    iosPayData[_[54695]] = pay_data[_[54695]];
                                    iosPayData[_[12814]] = function (res) {
                                        console.log(_[54696] + JSON.stringify(res));
                                    };
                                    iosPayData[_[41758]] = function (res) {
                                        console.log(_[54697] + JSON.stringify(res));
                                    };
                                    iosPayData[_[6242]] = function (res) {
                                        console.log(_[54698] + JSON.stringify(res));
                                        tt.offTouchEnd(self.iosPay);
                                    };
                                    console.log(_[54699] + JSON.stringify(iosPayData));
                                    tt.onTouchEnd(self.iosPay);
                                    tt.showModal({
                                        title: _[54681],
                                        content: _[54700],
                                        showCancel: false,
                                        success(res) {},
                                        fail(res) {
                                            console.log(`showModal调用失败`);
                                        }
                                    });
                                } else {
                                    tt.showModal({
                                        title: _[54681],
                                        content: _[54701],
                                        showCancel: false,
                                        success(res) {},
                                        fail(res) {
                                            console.log(`showModal调用失败`);
                                        }
                                    });
                                }
                            }
                        } else {
                            callbacks[_[54673]] && callbacks[_[54673]](1, {
                                errMsg: data.msg
                            });
                        }
                    } else {
                        callbacks[_[54637]] && callbacks[_[54637]](1, {
                            errMsg: _[54650]
                        });
                    }
                }
            });
        },

        gameGoPay: function (cpData, androidData) {
            console.log(_[54702]);
            //请求pay接口
            var self = this;
            var session_key = wx.getStorageSync(_[54646]);
            cpData[_[54633]] = partner_user_info.openid;
            cpData[_[102]] = 1;
            cpData[_[54703]] = androidData[_[54694]];
            wx.request({
                url: _[41670] + HOST + _[54704] + config.partner_id + '/' + config.game_pkg + '/',
                method: _[54617],
                dataType: _[5910],
                header: {
                    'content-type': _[54618] // 默认值
                },
                data: cpData,
                success: function (res) {
                    console.log(_[54705]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        if (res.data.state == 1) {
                            var ret = {};
                            callbacks[_[54673]] && callbacks[_[54673]](0, ret);
                        } else {
                            callbacks[_[54673]] && callbacks[_[54673]](1, { errMsg: _[54687] });
                        }
                    }
                },
                fail: function () {}
            });
        },

        //创建角色
        logCreateRole: function (data) {
            var uid = tt.getStorageSync(_[54645]);
            var username = tt.getStorageSync(_[54614]);

            var postData = {};
            postData[_[54706]] = uid;
            postData[_[54707]] = username;
            postData[_[14480]] = data.roleid;
            postData[_[54708]] = data.rolelevel;
            postData[_[54709]] = data.rolename;
            postData[_[15431]] = data.serverid;

            if (data.roleid && data.serverid) {
                p$ADECB = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(_[6], postData);
        },

        //进入游戏
        logEnterGame: function (data) {
            var uid = tt.getStorageSync(_[54645]);
            var username = tt.getStorageSync(_[54614]);

            var postData = {};
            postData[_[54706]] = uid;
            postData[_[54707]] = username;
            postData[_[14480]] = data.roleid;
            postData[_[54708]] = data.rolelevel;
            postData[_[54709]] = data.rolename;
            postData[_[15431]] = data.serverid;

            if (data.roleid && data.serverid) {
                p$ADECB = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(_[5780], postData);

            //进入游戏确认邀请成功
            if (p$AEBCD) {
                this.updateShare(p$AEBCD.invite, p$AEBCD.invite_type, p$AEBCD.is_new, data.roleid, data.serverid, p$AEBCD.scene);
            }
        },

        //角色升级
        logRoleUpLevel: function (data) {
            var uid = tt.getStorageSync(_[54645]);
            var username = tt.getStorageSync(_[54614]);

            var postData = {};
            postData[_[54706]] = uid;
            postData[_[54707]] = username;
            postData[_[14480]] = data.roleid;
            postData[_[54708]] = data.rolelevel;
            postData[_[54709]] = data.rolename;
            postData[_[15431]] = data.serverid;

            if (data.roleid && data.serverid) {
                p$ADECB = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(_[54710], postData);
        },
        inspireVideo: function (videocallback) {},
        sendUrl: function () {},
        weiduanHelper: function () {},

        //获取唯一设备码（自定义）
        uuid: function (radix, len) {
            var chars = _[54711].split('');
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
            var uuid = tt.getStorageSync(_[54627]);
            var idfv = tt.getStorageSync(_[54628]);
            var ad_code = tt.getStorageSync(_[54629]);

            return {
                game_id: config.game_id,
                game_pkg: config.game_pkg,
                partner_id: config.partner_id,
                partner_label: config.partner_label,
                ad_code: ad_code,
                uuid: uuid,
                idfv: idfv,
                mac: _[54712],
                is_from_min: 1,
                dname: sysInfo.model,
                net_type: sysInfo.wifiEnabled == false ? '4G' : _[54713],
                os_ver: sysInfo.system,
                sdk_ver: sysInfo.version, //存放的是微信版本号
                game_ver: config.game_ver, //存放的是SDK版本号
                device: sysInfo.platform == _[54679] ? 1 : 2
            };
        },

        //统一发送log
        log: function (type, data) {
            var public_data = this.getPublicData();
            for (var key in data) {
                public_data[key] = data[key];
            }

            console.log(_[54714] + type);
            console.log(public_data);

            tt.request({
                url: _[41670] + HOST + _[54715] + type + _[54716] + encodeURIComponent(JSON.stringify(public_data))
            });
        },

        getDate: function () {
            var date = new Date();
            return date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate();
        },

        downloadClient: function () {},

        // 设置 wx.shareMessageToFriend 接口 query 字段的值
        setMessageToFriendQuery: function (data, callback) {
            var cp_activity_id = data.activity_id;
        },

        subscribeMessage: function (tmplIds, callback) {
            console.log(_[54717] + tmplIds);
            //获取模板ID
            callbacks[_[54718]] = typeof callback == _[54227] ? callback : null;
            tt.requestSubscribeMessage({
                tmplIds: tmplIds,
                success(res) {
                    console.log(_[54719]);
                    console.log(res);
                    callbacks[_[54718]] && callbacks[_[54718]](res);
                },
                fail(res) {
                    console.log(_[54720]);
                    console.log(res);
                    callbacks[_[54718]] && callbacks[_[54718]](res);
                }
            });
        }

    };
}

function run(method, data, callback) {
    method in p$ADEBC && p$ADEBC[method](data, callback);
}

exports.init = function (data, callback) {
    run(_[371], data, callback);
};

exports.login = function (callback) {
    run(_[54637], '', callback);
};

exports.login = function (callback) {
    run(_[54637], '', callback);
};

exports.pay = function (data, callback) {
    run(_[54673], data, callback);
};

exports.openService = function () {
    run(_[38059]);
};

exports.logCreateRole = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(_[54721], data);
};

exports.logEnterGame = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };

    run(_[54722], data);
};

exports.logRoleUpLevel = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(_[54723], data);
};

exports.share = function (type, data) {
    var cp_activity_id = data && data.activity_id ? data.activity_id : '';

    var params = {
        type: type,
        cp_activity_id: cp_activity_id
    };

    run(_[54651], params);
};

exports.msgCheck = function (data, callback) {
    run(_[16967], data, callback);
};

exports.downloadClient = function () {
    run(_[54724]);
};

exports.getConfig = function () {
    return {
        game_id: config.game_id,
        game_pkg: config.game_pkg,
        partner_id: config.partner_id
    };
};

exports.getPublicData = function () {
    run(_[54725]);
};

exports.setMessageToFriendQuery = function (data, callback) {
    run(_[54726], data, callback);
};

exports.requestSubscribeMessage = function (callback) {
    run(_[54727], callback);
};
exports.inspireVideo = function (callback) {
    run(_[54728], '', callback);
};
exports.sendUrl = function () {
    run(_[54729]);
};
exports.weiduanHelper = function () {
    run(_[37832]);
};

exports.subscribeMessage = function (data, callback) {
    run(_[54718], data, callback);
};