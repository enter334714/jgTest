var A = wx.$N;
import FunSdk from './nnnhp';
//初始化类
const sdk = new FunSdk();

var config = {
    game_id: '88',
    partner_label: A[200040],
    game_pkg: A[200041], //天剑奇缘-空灵服-萌仙-漫方微信小程序-GW
    partner_id: A[200042],
    game_ver: A[200043],
    is_auth: false, //授权登录
    partner_and_key: A[200044],
    partner_ios_key: A[200045]
};
window.config = config;
var _nKWZ85 = _nKZ8W5();
var HOST = A[200046];
var t;
var t_second = 0;
var t_max = 300;
var _nKZ58W = null;
var _nKZ5W8 = null;
var _nKZ85W = null;
var user_invite_by_activity = null;
var partner_user_info = null;
var sys_info = wx.getSystemInfoSync();
var platform = sys_info.platform;

// 获取渠道配置信息
function getGameInfo(callback) {
    let partner_game_key = config.partner_ios_key;
    if (platform == A[200033] || platform == A[200047]) {
        partner_game_key = config.partner_and_key;
    }

    sdk.game({
        "game_key": partner_game_key
    }, function (res) {
        if (res.code == 0) {
            callback && callback(res.data);
        } else {
            callback && callback({});
        }
    });
}

function _nKZ8W5() {
    var callbacks = {};
    var this_pay_order = 0;
    return {
        order_data: {},
        init: function (ops, callback) {
            var game_ver = ops && ops.game_ver ? ops.game_ver : 0;
            console.log(A[200048]);
            var self = this;

            var uuid = wx.getStorageSync(A[200049]);
            var is_new;
            if (!uuid) {
                uuid = self.uuid(16, 32);
                wx.setStorageSync(A[200049], uuid);
                is_new = 1;
            } else {
                is_new = 0;
            }
            var idfv = wx.getStorageSync(A[200050]);
            if (!idfv) {
                idfv = self.uuid(16, 32);
                wx.setStorageSync(A[200050], idfv);
            }

            var info = wx.getLaunchOptionsSync();
            var scene = info.scene ? info.scene : '';

            console.log(A[200051], JSON.stringify(info));

            //判断今天是否已经上报过
            if (is_new && info.query && info.query.ad_code) {
                wx.setStorageSync(A[200052], info.query.ad_code);
            }

            var data = {
                install: is_new,
                scene: scene
            };
            self.log(A[200053], data);

            //显示右上角分享按钮
            wx.showShareMenu();

            //玩家是分享过来的，单独上报给服务器
            var invite = info.query && info.query.invite ? info.query.invite : '';
            var invite_type = info.query && info.query.invite_type ? info.query.invite_type : '';
            var cp_activity_id = info.query && info.query.cp_activity_id ? info.query.cp_activity_id : '';

            // 普通分享不存在活动ID的话  再看下定向分享是否存在
            if (!cp_activity_id) {
                cp_activity_id = info.query && info.query.shareMessageToFriendScene ? info.query.shareMessageToFriendScene : '';
                invite_type = cp_activity_id ? A[200054] : '';
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
                _nKZ5W8 = {
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

        //登录接口
        login: function (data, callback) {
            console.log(A[200055]);
            var self = this;
            callbacks[A[200056]] = typeof callback == A[200057] ? callback : null;

            wx.login({
                success: function (res) {
                    console.log(A[200058] + JSON.stringify(res));
                    if (res.code) {
                        getGameInfo(function (res1) {
                            sdk.gameLogin({
                                'host_url': res1.host_url,
                                'game_key': res1.game_key,
                                'code': res.code
                            }, function (res2) {
                                console.log(A[200059] + JSON.stringify(res2));
                                if (res2.code == 0) {
                                    partner_user_info = res2.data;
                                    self.do_login(res2.data);
                                } else {
                                    callback && callback(1);
                                }
                            }, function (res3) {
                                console.log(A[200060] + JSON.stringify(res3));
                                callback && callback(1);
                            });
                        });
                    } else {
                        callback && callback(1, { errMsg: res.errMsg });
                    }
                },
                fail: function (res) {
                    console.log(A[200061] + JSON.stringify(res));
                    // iOS 和 Android 对于拒绝授权的回调 errMsg 没有统一，需要做一下兼容处理
                    if (res.errMsg.indexOf(A[200062]) > -1 || res.errMsg.indexOf(A[200063]) > -1) {
                        // 处理用户拒绝授权的情况
                        callback && callback(1, { errMsg: res.errMsg });
                    }
                }
            });
        },

        do_login: function (info) {
            var self = this;

            //发起网络请求
            var public_data = self.getPublicData();
            public_data[A[200064]] = JSON.stringify(info);
            if (_nKZ5W8 && typeof _nKZ5W8 == A[200065]) {
                for (var key in _nKZ5W8) {
                    public_data[key] = _nKZ5W8[key];
                }
            }

            wx.request({
                url: A[200066] + HOST + A[200067],
                method: A[200004],
                dataType: A[200005],
                header: {
                    'content-type': A[200003] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(A[200068] + JSON.stringify(res));

                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            try {
                                wx.setStorageSync(A[200069], data.data.sdk_token);
                                wx.setStorageSync(A[200070], data.data.user_id);
                                wx.setStorageSync(A[200071], data.data.username);
                                if (data.data.ext) {
                                    wx.setStorageSync(A[200072], data.data.ext);
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
                            callbacks[A[200056]] && callbacks[A[200056]](0, userData);
                        } else {
                            callbacks[A[200056]] && callbacks[A[200056]](1, {
                                errMsg: data.msg
                            });
                        }

                        self.getShareInfo(A[200073], function (data) {
                            console.log(A[200074]);
                            wx.onShareAppMessage(function () {
                                //记录开始分享
                                self.logStartShare(A[200073]);
                                return {
                                    title: data.title,
                                    imageUrl: data.img,
                                    query: data.query
                                };
                            });
                        });
                    } else {
                        callbacks[A[200056]] && callbacks[A[200056]](1, {
                            errMsg: A[200075]
                        });
                    }
                }
            });
        },

        share: function (data) {
            callbacks[A[200076]] = typeof callback == A[200057] ? callback : null;
            var type = data.type || A[200076];
            var cp_activity_id = data.cp_activity_id || '';

            console.log(A[200077] + type);
            var self = this;
            this.getShareInfo(type, function (data) {
                if (cp_activity_id != '' && data.query != '') {
                    data.query = data.query + A[200078] + cp_activity_id;
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
            var sdk_token = wx.getStorageSync(A[200069]);
            wx.request({
                url: A[200066] + HOST + A[200079],
                method: A[200004],
                dataType: A[200005],
                header: {
                    'content-type': A[200003] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    server_id: _nKZ58W ? _nKZ58W.server_id : '',
                    role_id: _nKZ58W ? _nKZ58W.role_id : '',
                    type: type
                },
                success: function (res) {}
            });
        },

        openService: function () {
            wx.openCustomerServiceConversation();
        },

        checkGameVersion: function (game_ver, callback) {
            console.log(A[200080]);
            var sdk_token = wx.getStorageSync(A[200069]);
            wx.request({
                url: A[200066] + HOST + A[200081],
                method: A[200004],
                dataType: A[200005],
                header: {
                    'content-type': A[200003] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    game_ver: game_ver
                },
                success: function (res) {
                    console.log(A[200082] + JSON.stringify(res));
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
            console.log(A[200083]);
            var sdk_token = wx.getStorageSync(A[200069]);
            wx.request({
                url: A[200066] + HOST + A[200084],
                method: A[200004],
                dataType: A[200005],
                header: {
                    'content-type': A[200003] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    type: type,
                    server_id: _nKZ58W ? _nKZ58W.server_id : '',
                    role_id: _nKZ58W ? _nKZ58W.role_id : '',
                    no_log: 1 //设置为1后就不在这个接口打log，交给logStartShare接口
                },
                success: function (res) {
                    console.log(A[200085]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callback && callback(data.data);
                        } else {
                            callbacks[A[200076]] && callbacks[A[200076]](1, { errMsg: A[200086] + data.msg });
                        }
                    } else {
                        callbacks[A[200076]] && callbacks[A[200076]](1, { errMsg: A[200087] });
                    }
                }
            });
        },

        updateShare: function (invite, invite_type, is_new, role_id, server_id, scene) {
            console.log(A[200088]);
            var sdk_token = wx.getStorageSync(A[200069]);
            wx.request({
                url: A[200066] + HOST + A[200089],
                method: A[200004],
                dataType: A[200005],
                header: {
                    'content-type': A[200003] // 默认值
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
                    console.log(A[200090] + JSON.stringify(res));
                }
            });
        },

        msgCheck: function (content, callback) {
            console.log(A[200091]);
            let ret = {
                data: {}
            };
            getGameInfo(function (res1) {
                var game_key = res1.game_key;
                sdk.checkWords({
                    "game_key": game_key,
                    "account": partner_user_info.openid,
                    "scene": 4,
                    "content": content,
                    "host_url": res1.host_url
                }, function (res2) {
                    console.log(A[200092] + JSON.stringify(res2));
                    if (res2.code == 0) {
                        ret.statusCode = 200;
                        ret.data.state = 1;
                    } else {
                        ret.statusCode = 0;
                        ret.data.state = 0;
                    }
                    callback && callback(ret);
                }, function (res3) {
                    ret.statusCode = 0;
                    ret.data.state = 0;
                    callback && callback(ret);
                });
            });
        },

        pay: function (data, callback) {
            var self = this;

            wx.checkSession({
                success: function () {
                    self.startPay(data, callback);
                },
                fail: function () {
                    console.log(A[200093]);
                    self.login({}, function () {
                        self.startPay(data, callback);
                    });
                }
            });
        },

        //支付接口
        startPay: function (data, callback) {
            console.log(A[200094] + JSON.stringify(data));
            var self = this;
            callbacks[A[200095]] = typeof callback == A[200057] ? callback : null;
            //先下单
            this_pay_order = 0;
            var sdk_token = wx.getStorageSync(A[200069]);
            var session_key = wx.getStorageSync(A[200072]);
            if (!sdk_token || !session_key) {
                callbacks[A[200095]] && callbacks[A[200095]](1, { errMsg: A[200096] });
                return;
            }

            getGameInfo(function (res) {
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
                    partner_game_info: res,
                    partner_openid: partner_user_info.openid
                };
                self.order_data = order_data;

                var public_data = self.getPublicData();
                public_data[A[200097]] = JSON.stringify(order_data);

                //发起网络请求
                wx.request({
                    url: A[200066] + HOST + A[200098],
                    method: A[200004],
                    dataType: A[200005],
                    header: {
                        'content-type': A[200003] // 默认值
                    },
                    data: public_data,
                    success: function (res) {
                        console.log(A[200099] + JSON.stringify(res));
                        if (res.statusCode == 200) {
                            var data = res.data;
                            if (data.state) {
                                if (typeof wx.requestPayment == A[200010]) {
                                    if (platform == A[200033] || platform == A[200047]) {
                                        sdk.midasNotice(data.data.pay_data);
                                    } else {
                                        self.kfPay(data.data);
                                    }
                                }
                            } else {
                                callbacks[A[200095]] && callbacks[A[200095]](1, { errMsg: data.msg });
                            }
                        } else {
                            callbacks[A[200056]] && callbacks[A[200056]](1, { errMsg: A[200075] });
                        }
                    }
                });
            });
        },

        kfPay: function (data) {
            console.log(A[200100]);
            sdk.order({
                "host_url": data.pay_data.host_url,
                "game_key": data.pay_data.game_key,
                "account": data.pay_data.account,
                "server": data.pay_data.server,
                "role": data.pay_data.role,
                "amount": data.pay_data.amount,
                "extend": data.pay_data.extend
            }, function (res) {
                console.log(A[200101] + JSON.stringify(res));

                wx.showModal({
                    title: A[200102],
                    content: A[200103],
                    showCancel: false,
                    confirmText: A[200104],
                    success: function () {
                        wx.openCustomerServiceConversation();
                    }
                });
            });
        },

        //创建角色
        logCreateRole: function (data) {
            var uid = wx.getStorageSync(A[200070]);
            var username = wx.getStorageSync(A[200071]);

            var postData = {};
            postData[A[200105]] = uid;
            postData['user_name'] = username;
            postData[A[200106]] = data.roleid;
            postData[A[200107]] = data.rolelevel;
            postData['role_name'] = data.rolename;
            postData[A[200108]] = data.serverid;

            if (data.roleid && data.serverid) {
                _nKZ58W = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(A[200109], postData);

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
                    url: A[200066] + HOST + A[200110],
                    method: A[200004],
                    dataType: A[200005],
                    header: {
                        'content-type': A[200003] // 默认值
                    },
                    data: roleInfo,
                    success: function (res) {
                        console.log(A[200111] + JSON.stringify(res));
                    }
                });
            }

            // 渠道上报
            getGameInfo(function (res1) {
                sdk.role({
                    "host_url": res1.host_url,
                    "game_key": res1.game_key,
                    "account": partner_user_info.openid,
                    "server": data.serverid,
                    "server_name": data.servername,
                    "role": data.roleid,
                    "role_name": data.rolename,
                    "level": data.rolelevel,
                    "type": 3
                }, function (res2) {
                    console.log(A[200112] + JSON.stringify(res2));
                });
            });
        },

        //进入游戏
        logEnterGame: function (data) {
            var uid = wx.getStorageSync(A[200070]);
            var username = wx.getStorageSync(A[200071]);

            var postData = {};
            postData[A[200105]] = uid;
            postData['user_name'] = username;
            postData[A[200106]] = data.roleid;
            postData[A[200107]] = data.rolelevel;
            postData['role_name'] = data.rolename;
            postData[A[200108]] = data.serverid;

            if (data.roleid && data.serverid) {
                _nKZ58W = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(A[200113], postData);

            //进入游戏确认邀请成功
            if (_nKZ5W8) {
                this.updateShare(_nKZ5W8.invite, _nKZ5W8.invite_type, _nKZ5W8.is_new, data.roleid, data.serverid, _nKZ5W8.scene);
            }

            // 渠道上报
            getGameInfo(function (res1) {
                var partner_query_info = sdk.wxChannelCode();
                if (partner_query_info) {
                    sdk.role({
                        "host_url": res1.host_url,
                        "game_key": res1.game_key,
                        "account": partner_user_info.openid,
                        "server": data.serverid,
                        "server_name": data.servername,
                        "role": data.roleid,
                        "role_name": data.rolename,
                        "level": data.rolelevel,
                        "type": partner_query_info && partner_query_info.type ? partner_query_info.type : '',
                        "code": partner_query_info && partner_query_info.code ? partner_query_info.code : ''
                    }, function (res2) {
                        console.log(A[200114] + JSON.stringify(res2));
                    });
                }

                sdk.role({
                    "host_url": res1.host_url,
                    "game_key": res1.game_key,
                    "account": partner_user_info.openid,
                    "server": data.serverid,
                    "server_name": data.servername,
                    "role": data.roleid,
                    "role_name": data.rolename,
                    "level": data.rolelevel,
                    "type": 0
                }, function (res2) {
                    console.log(A[200115] + JSON.stringify(res2));
                });

                sdk.role({
                    "host_url": res1.host_url,
                    "game_key": res1.game_key,
                    "account": partner_user_info.openid,
                    "server": data.serverid,
                    "server_name": data.servername,
                    "role": data.roleid,
                    "role_name": data.rolename,
                    "level": data.rolelevel,
                    "type": 3
                }, function (res2) {
                    console.log(A[200116] + JSON.stringify(res2));
                });

                sdk.role({
                    "host_url": res1.host_url,
                    "game_key": res1.game_key,
                    "account": partner_user_info.openid,
                    "server": data.serverid,
                    "server_name": data.servername,
                    "role": data.roleid,
                    "role_name": data.rolename,
                    "level": data.rolelevel,
                    "type": 6
                }, function (res2) {
                    console.log(A[200117] + JSON.stringify(res2));
                });
            });
        },

        //角色升级
        logRoleUpLevel: function (data) {
            var uid = wx.getStorageSync(A[200070]);
            var username = wx.getStorageSync(A[200071]);

            var postData = {};
            postData[A[200105]] = uid;
            postData['user_name'] = username;
            postData[A[200106]] = data.roleid;
            postData[A[200107]] = data.rolelevel;
            postData['role_name'] = data.rolename;
            postData[A[200108]] = data.serverid;

            if (data.roleid && data.serverid) {
                _nKZ58W = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(A[200118], postData);

            // 渠道上报
            getGameInfo(function (res1) {
                sdk.role({
                    "host_url": res1.host_url,
                    "game_key": res1.game_key,
                    "account": partner_user_info.openid,
                    "server": data.serverid,
                    "server_name": data.servername,
                    "role": data.roleid,
                    "role_name": data.rolename,
                    "level": data.rolelevel,
                    "type": 8
                }, function (res2) {
                    console.log(A[200119] + JSON.stringify(res2));
                });
            });
        },

        //获取唯一设备码（自定义）
        uuid: function (radix, len) {
            var chars = A[200120].split('');
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
            var uuid = wx.getStorageSync(A[200049]);
            var idfv = wx.getStorageSync(A[200050]);
            var ad_code = wx.getStorageSync(A[200052]);

            return {
                game_id: config.game_id,
                game_pkg: config.game_pkg,
                partner_id: config.partner_id,
                is_from_min: 1,
                ad_code: ad_code,
                uuid: uuid,
                idfv: idfv,
                dname: system.model,
                mac: A[200121],
                net_type: system.wifiSignal == 0 ? '4G' : A[200122],
                os_ver: system.system,
                sdk_ver: system.version, //存放的是微信版本号
                game_ver: config.game_ver, //存放的是SDK版本号
                device: system.platform == A[200033] ? 1 : 2
            };
        },

        //统一发送log
        log: function (type, data) {
            var public_data = this.getPublicData();
            for (var key in data) {
                public_data[key] = data[key];
            }

            console.log(A[200123] + type);
            console.log(public_data);

            wx.request({
                url: A[200066] + HOST + A[200124] + type + A[200125] + encodeURIComponent(JSON.stringify(public_data))
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

            callback && callback(result);
        },

        getFriendShareInfo: function (callback) {
            this.getShareInfo(A[200054], function (data) {
                callback && callback({ title: data.title, 'img': data.img });
            });
        }

    };
}

function run(method, data, callback) {
    method in _nKWZ85 && _nKWZ85[method](data, callback);
}

exports.init = function (data, callback) {
    run(A[200126], data, callback);
};

exports.login = function (callback) {
    run(A[200056], '', callback);
};

exports.pay = function (data, callback) {
    run(A[200095], data, callback);
};

exports.openService = function () {
    run(A[200127]);
};

exports.logCreateRole = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(A[200128], data);
};

exports.logEnterGame = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };

    run(A[200129], data);
};

exports.logRoleUpLevel = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(A[200130], data);
};

exports.share = function (type, data) {
    var cp_activity_id = data && data.activity_id ? data.activity_id : '';

    var params = {
        type: type,
        cp_activity_id: cp_activity_id
    };

    run(A[200076], params);
};

exports.msgCheck = function (data, callback) {
    run(A[200131], data, callback);
};

exports.downloadClient = function () {
    run(A[200132]);
};

exports.getConfig = function () {
    return {
        game_id: config.game_id,
        game_pkg: config.game_pkg,
        partner_id: config.partner_id
    };
};

exports.getPublicData = function () {
    run(A[200133]);
};

exports.weiduanHelper = function () {
    run(A[200134]);
};

exports.setMessageToFriendQuery = function (data, callback) {
    run(A[200135], data, callback);
};

exports.getFriendShareInfo = function (callback) {
    run(A[200136], callback);
};