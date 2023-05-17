var _j = wx.n$;
const require_mergesdk = require(_j[5]);
window[_j[6]] = require_mergesdk;
//TODO 替换对应参数
import config from './partner_config.js';
var y$HX5IT = y$H5TIX();
var HOST = _j[7];
var y$HX5TI = null;
var y$H5ITX = null;
var sysInfo = require_mergesdk.wx.getSystemInfoSync();
var platform = sysInfo.platform;
var partner_user_info = null;
var partner_is_new = 0;

function y$H5TIX() {
    var callbacks = {};
    var this_pay_order = 0;
    return {
        order_data: {},
        init: function (ops, callback) {
            var game_ver = ops && ops.game_ver ? ops.game_ver : 0;
            console.log(_j[8]);
            var self = this;
            var uuid = wx.getStorageSync(_j[9]);
            var is_new;
            if (!uuid) {
                uuid = self.uuid(16, 32);
                wx.setStorageSync(_j[9], uuid);
                is_new = 1;
            } else {
                is_new = 0;
            }
            partner_is_new = is_new;
            var idfv = wx.getStorageSync(_j[10]);
            if (!idfv) {
                idfv = self.uuid(16, 32);
                wx.setStorageSync(_j[10], idfv);
            }
            var info = wx.getLaunchOptionsSync();
            var scene = info.from ? info.from : '';
            //判断今天是否已经上报过
            if (is_new && info.query && info.query.ad_code) {
                wx.setStorageSync(_j[11], info.query.ad_code);
            }
            var data = {
                install: is_new,
                scene: scene
            };
            self.log(_j[12], data);
            //玩家是分享过来的，单独上报给服务器
            var invite = info.query && info.query.invite ? info.query.invite : '';
            var invite_type = info.query && info.query.invite_type ? info.query.invite_type : '';
            if (invite) {
                y$H5ITX = {
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
            console.log(_j[13]);
            callbacks[_j[14]] = typeof callback == _j[15] ? callback : null;
            var self = this;
            require_mergesdk.loginToServer(function (mergesdk_data) {
                console.log(_j[16] + JSON.stringify(mergesdk_data));
                self.do_login(mergesdk_data);
                partner_user_info = mergesdk_data;
            });
        },

        do_login: function (info) {
            var self = this;

            //发起网络请求
            var public_data = self.getPublicData();
            public_data[_j[17]] = JSON.stringify(info);
            if (y$H5ITX && typeof y$H5ITX == _j[18]) {
                for (var key in y$H5ITX) {
                    public_data[key] = y$H5ITX[key];
                }
            }

            wx.request({
                url: _j[19] + HOST + _j[20],
                method: _j[21],
                dataType: _j[22],
                header: {
                    'content-type': _j[23] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(_j[24] + JSON.stringify(res));
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            try {
                                wx.setStorageSync(_j[25], data.data.sdk_token);
                                wx.setStorageSync(_j[26], data.data.user_id);
                                wx.setStorageSync(_j[27], data.data.username);
                                if (data.data.ext) {
                                    wx.setStorageSync(_j[28], data.data.ext);
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
                                ad_flag: info.isAd
                            };
                            callbacks[_j[14]] && callbacks[_j[14]](0, userData);
                        } else {
                            callbacks[_j[14]] && callbacks[_j[14]](1, {
                                errMsg: data.msg
                            });
                        }

                        self.getShareInfo(_j[29], function (data) {
                            console.log(_j[30]);

                            wx.onShareAppMessage(function () {
                                //记录开始分享
                                self.logStartShare(_j[29]);
                                return {
                                    title: data.title,
                                    imageUrl: data.img,
                                    query: data.query
                                };
                            });
                        });
                    } else {
                        callbacks[_j[14]] && callbacks[_j[14]](1, {
                            errMsg: _j[31]
                        });
                    }
                }
            });
        },

        share: function (data) {
            callbacks[_j[32]] = typeof callback == _j[15] ? callback : null;
            var type = data.type || _j[32];
            console.log(_j[33] + type);
            var self = this;
            this.getShareInfo(type, function (data) {

                var partner_query = sdk.getShareParamStr();
                //记录开始分享
                self.logStartShare(type);
                wx.shareAppMessage({
                    title: data.title,
                    imageUrl: data.img,
                    query: data.query + '&' + partner_query
                });
            });
        },

        logStartShare: function (type) {
            var sdk_token = wx.getStorageSync(_j[25]);
            wx.request({
                url: _j[19] + HOST + _j[34],
                method: _j[21],
                dataType: _j[22],
                header: {
                    'content-type': _j[23] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    server_id: y$HX5TI ? y$HX5TI.server_id : '',
                    role_id: y$HX5TI ? y$HX5TI.role_id : '',
                    type: type
                },
                success: function (res) {}
            });
        },

        openService: function () {
            require_mergesdk.openCustomerServiceConversation();
        },

        checkGameVersion: function (game_ver, callback) {
            console.log(_j[35]);
            var sdk_token = wx.getStorageSync(_j[25]);
            wx.request({
                url: _j[19] + HOST + _j[36],
                method: _j[21],
                dataType: _j[22],
                header: {
                    'content-type': _j[23] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    game_ver: game_ver
                },
                success: function (res) {
                    console.log(_j[37] + JSON.stringify(res));

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
            console.log(_j[38]);
            var sdk_token = wx.getStorageSync(_j[25]);
            wx.request({
                url: _j[19] + HOST + _j[39],
                method: _j[21],
                dataType: _j[22],
                header: {
                    'content-type': _j[23] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    type: type,
                    server_id: y$HX5TI ? y$HX5TI.server_id : '',
                    role_id: y$HX5TI ? y$HX5TI.role_id : '',
                    no_log: 1 //设置为1后就不在这个接口打log，交给logStartShare接口
                },
                success: function (res) {
                    console.log(_j[40]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callback && callback(data.data);
                        } else {
                            callbacks[_j[32]] && callbacks[_j[32]](1, {
                                errMsg: _j[41] + data.msg
                            });
                        }
                    } else {
                        callbacks[_j[32]] && callbacks[_j[32]](1, {
                            errMsg: _j[42]
                        });
                    }
                }
            });
        },

        updateShare: function (invite, invite_type, is_new, role_id, server_id, scene) {
            console.log(_j[43]);
            var sdk_token = wx.getStorageSync(_j[25]);
            wx.request({
                url: _j[19] + HOST + _j[44],
                method: _j[21],
                dataType: _j[22],
                header: {
                    'content-type': _j[23] // 默认值
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
                    console.log(_j[45] + JSON.stringify(res));
                }
            });
        },

        msgCheck: function (content, callback) {
            console.log(_j[46] + content);
            let ret = {
                data: {}
            };
            require_mergesdk.requestMsgSecCheck(1, content, result => {
                if (!!result) {
                    console.log(_j[47], result);
                    if (result.result && result.result.suggest && result.result.suggest == _j[48]) {
                        ret.statusCode = 200;
                        ret.data.state = 1;
                    } else {
                        ret.statusCode = 200;
                        ret.data.state = 0;
                    }
                } else {
                    console.log(_j[49]);
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
            console.log(_j[50] + JSON.stringify(data));

            var self = this;
            callbacks[_j[51]] = typeof callback == _j[15] ? callback : null;
            //先下单
            this_pay_order = 0;
            var sdk_token = wx.getStorageSync(_j[25]);
            var session_key = wx.getStorageSync(_j[28]);
            if (!sdk_token) {
                callbacks[_j[51]] && callbacks[_j[51]](1, {
                    errMsg: _j[52]
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
            public_data[_j[53]] = JSON.stringify(order_data);

            //发起网络请求
            wx.request({
                url: _j[19] + HOST + _j[54],
                method: _j[21],
                dataType: _j[22],
                header: {
                    'content-type': _j[23] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(_j[55] + JSON.stringify(res));
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.data.ext == '') {
                            if (data.state && data.data.pay_data) {
                                if (platform == _j[56]) {
                                    var temp_ios_param = data.data.pay_data;
                                    var ios_param = _j[57] + temp_ios_param.sku + _j[58] + temp_ios_param.amount * 100 + _j[59] + temp_ios_param.sku_name + _j[60] + temp_ios_param.extension;
                                    require_mergesdk.payForCustomerServiceConversation(data.productname, ios_param);
                                } else {
                                    var temp_android_param = data.data.pay_data;
                                    require_mergesdk.requestMidasPayOrder(temp_android_param.buyQuantity, temp_android_param.sku, temp_android_param.extension, function (res) {
                                        if (!!res) {
                                            console.log(_j[61], res);
                                            require_mergesdk.oreyunPayment(res.bill_no, temp_android_param.amount, order_data.servername, order_data.serverid, order_data.rolename, order_data.roleid);
                                        } else {
                                            console.log(_j[62]);
                                        }
                                    });
                                }
                            } else {
                                callbacks[_j[51]] && callbacks[_j[51]](1, { errMsg: data.errMsg });
                            }
                        } else {
                            self.extDo(data.data.ext, data.data.pay_data);
                        }
                    } else {
                        callbacks[_j[14]] && callbacks[_j[14]](1, {
                            errMsg: _j[31]
                        });
                    }
                }
            });
        },

        extDo: function (ext1, ext2) {
            wx.navigateToMiniProgram({
                appId: ext1,
                path: _j[63] + ext2.extension + _j[64] + ext2.amount / 100,
                extraData: {},
                envVersion: _j[65],
                success(res) {
                    // 打开成功
                }
            });
        },

        //创建角色
        logCreateRole: function (data) {
            var uid = wx.getStorageSync(_j[26]);
            var username = wx.getStorageSync(_j[27]);

            var postData = {};
            postData[_j[66]] = uid;
            postData[_j[67]] = username;
            postData[_j[68]] = data.roleid;
            postData[_j[69]] = data.rolelevel;
            postData[_j[70]] = data.rolename;
            postData[_j[71]] = data.serverid;

            if (data.roleid && data.serverid) {
                y$HX5TI = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(_j[72], postData);
            require_mergesdk.oreyunRegister(partner_user_info.openid, data.servername, data.serverid, data.rolename);
        },

        //进入游戏
        logEnterGame: function (data) {
            var uid = wx.getStorageSync(_j[26]);
            var username = wx.getStorageSync(_j[27]);

            var postData = {};
            postData[_j[66]] = uid;
            postData[_j[67]] = username;
            postData[_j[68]] = data.roleid;
            postData[_j[69]] = data.rolelevel;
            postData[_j[70]] = data.rolename;
            postData[_j[71]] = data.serverid;

            if (data.roleid && data.serverid) {
                y$HX5TI = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(_j[73], postData);

            //进入游戏确认邀请成功
            if (y$H5ITX) {
                this.updateShare(y$H5ITX.invite, y$H5ITX.invite_type, y$H5ITX.is_new, data.roleid, data.serverid, y$H5ITX.scene);
            }
            require_mergesdk.oreyunLoggedin(partner_user_info.openid, data.servername, data.serverid, data.rolename);
        },

        //角色升级
        logRoleUpLevel: function (data) {
            var uid = wx.getStorageSync(_j[26]);
            var username = wx.getStorageSync(_j[27]);

            var postData = {};
            postData[_j[66]] = uid;
            postData[_j[67]] = username;
            postData[_j[68]] = data.roleid;
            postData[_j[69]] = data.rolelevel;
            postData[_j[70]] = data.rolename;
            postData[_j[71]] = data.serverid;

            if (data.roleid && data.serverid) {
                y$HX5TI = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(_j[74], postData);
        },
        inspireVideo: function (videocallback) {},
        sendUrl: function () {},
        weiduanHelper: function () {},

        //获取唯一设备码（自定义）
        uuid: function (radix, len) {
            var chars = _j[75].split('');
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
            var uuid = wx.getStorageSync(_j[9]);
            var idfv = wx.getStorageSync(_j[10]);
            var ad_code = wx.getStorageSync(_j[11]);

            return {
                game_id: config.game_id,
                game_pkg: config.game_pkg,
                partner_id: config.partner_id,
                partner_label: config.partner_label,
                ad_code: ad_code,
                uuid: uuid,
                idfv: idfv,
                mac: _j[76],
                is_from_min: 1,
                dname: sysInfo.model,
                net_type: sysInfo.wifiEnabled == false ? '4G' : _j[77],
                os_ver: sysInfo.system,
                sdk_ver: sysInfo.version, //存放的是微信版本号
                game_ver: config.game_ver, //存放的是SDK版本号
                device: sysInfo.platform == _j[78] ? 1 : 2
            };
        },

        //统一发送log
        log: function (type, data) {
            var public_data = this.getPublicData();
            for (var key in data) {
                public_data[key] = data[key];
            }

            console.log(_j[79] + type);
            console.log(public_data);

            wx.request({
                url: _j[19] + HOST + _j[80] + type + _j[81] + encodeURIComponent(JSON.stringify(public_data))
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
            console.log(_j[82] + tmplIds);
            //获取模板ID
            callbacks[_j[83]] = typeof callback == _j[15] ? callback : null;
            require_mergesdk.requestSubscribeMessage(tmplIds, rMessageIds => {
                if (!rMessageIds) {
                    console.log(_j[84]);
                    callbacks[_j[83]] && callbacks[_j[83]]({});
                } else {
                    var callbackdata = {};
                    callbackdata[_j[85]] = _j[86];
                    console.log(_j[87]);
                    for (let i = 0; i < rMessageIds.length; i++) {
                        callbackdata[rMessageIds[i]] = _j[88];
                    }
                    callbacks[_j[83]] && callbacks[_j[83]](callbackdata);
                }
            });
        }

    };
}

function run(method, data, callback) {
    method in y$HX5IT && y$HX5IT[method](data, callback);
}

exports.init = function (data, callback) {
    run(_j[89], data, callback);
};

exports.login = function (callback) {
    run(_j[14], '', callback);
};

exports.login = function (callback) {
    run(_j[14], '', callback);
};

exports.pay = function (data, callback) {
    run(_j[51], data, callback);
};

exports.openService = function () {
    run(_j[90]);
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
    run(_j[91], data);
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

    run(_j[92], data);
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
    run(_j[93], data);
};

exports.share = function (type, data) {
    var cp_activity_id = data && data.activity_id ? data.activity_id : '';

    var params = {
        type: type,
        cp_activity_id: cp_activity_id
    };

    run(_j[32], params);
};

exports.msgCheck = function (data, callback) {
    run(_j[94], data, callback);
};

exports.downloadClient = function () {
    run(_j[95]);
};

exports.getConfig = function () {
    return {
        game_id: config.game_id,
        game_pkg: config.game_pkg,
        partner_id: config.partner_id
    };
};

exports.getPublicData = function () {
    run(_j[96]);
};

exports.setMessageToFriendQuery = function (data, callback) {
    run(_j[97], data, callback);
};

exports.requestSubscribeMessage = function (callback) {
    run(_j[98], callback);
};
exports.inspireVideo = function (callback) {
    run(_j[99], '', callback);
};
exports.sendUrl = function () {
    run(_j[100]);
};
exports.weiduanHelper = function () {
    run(_j[101]);
};

exports.subscribeMessage = function (data, callback) {
    run(_j[83], data, callback);
};