var A = wx.$N;
import FunSdk from './nnnhp';
//初始化类
const sdk = new FunSdk();

var config = {
    game_id: A[96],
    partner_label: A[97],
    game_pkg: A[98], //天剑奇缘-空灵服-萌仙-漫方微信小程序-GW
    partner_id: A[99],
    game_ver: A[100],
    is_auth: false, //授权登录
    partner_and_key: A[101],
    partner_ios_key: A[102]
};
window.config = config;
var _nO06SC = _nO6CS0();
var HOST = A[103];
var t;
var t_second = 0;
var t_max = 300;
var _nO06CS = null;
var _nO6SC0 = null;
var _nO6S0C = null;
var user_invite_by_activity = null;
var partner_user_info = null;
var sys_info = wx.getSystemInfoSync();
var platform = sys_info.platform;

var partnerConfig = false;

// 获取渠道配置信息
function getGameInfo(callback) {

    if (partnerConfig) {
        callback && callback(partnerConfig);
        return;
    }
    let partner_game_key = config.partner_ios_key;
    if (platform == A[42] || platform == A[104]) {
        partner_game_key = config.partner_and_key;
    }

    sdk.game({
        game_key: partner_game_key
    }, function (res) {
        if (res.code == 0) {
            partnerConfig = res.data;
            callback && callback(res.data);
        } else {
            callback && callback({});
        }
    });
}

function _nO6CS0() {
    var callbacks = {};
    var this_pay_order = 0;
    return {
        order_data: {},
        init: function (ops, callback) {
            var game_ver = ops && ops.game_ver ? ops.game_ver : 0;
            console.log(A[105]);
            var self = this;

            var uuid = wx.getStorageSync(A[106]);
            var is_new;
            if (!uuid) {
                uuid = self.uuid(16, 32);
                wx.setStorageSync(A[106], uuid);
                is_new = 1;
            } else {
                is_new = 0;
            }
            var idfv = wx.getStorageSync(A[107]);
            if (!idfv) {
                idfv = self.uuid(16, 32);
                wx.setStorageSync(A[107], idfv);
            }

            var info = wx.getLaunchOptionsSync();
            var scene = info.scene ? info.scene : '';

            console.log(A[108], JSON.stringify(info));

            //判断今天是否已经上报过
            if (is_new && info.query && info.query.ad_code) {
                wx.setStorageSync(A[109], info.query.ad_code);
            }

            var data = {
                install: is_new,
                scene: scene
            };
            self.log(A[110], data);

            //显示右上角分享按钮
            wx.showShareMenu();

            //玩家是分享过来的，单独上报给服务器
            var invite = info.query && info.query.invite ? info.query.invite : '';
            var invite_type = info.query && info.query.invite_type ? info.query.invite_type : '';
            var cp_activity_id = info.query && info.query.cp_activity_id ? info.query.cp_activity_id : '';

            // 普通分享不存在活动ID的话  再看下定向分享是否存在
            if (!cp_activity_id) {
                cp_activity_id = info.query && info.query.shareMessageToFriendScene ? info.query.shareMessageToFriendScene : '';
                invite_type = cp_activity_id ? A[111] : '';
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
                _nO6SC0 = {
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
            console.log(A[112]);
            var self = this;
            callbacks[A[113]] = typeof callback == A[114] ? callback : null;

            wx.login({
                success: function (res) {
                    console.log(A[115] + JSON.stringify(res));
                    if (res.code) {
                        getGameInfo(function (res1) {
                            sdk.gameLogin({
                                'host_url': res1.host_url,
                                'game_key': res1.game_key,
                                'code': res.code
                            }, function (res2) {
                                console.log(A[116] + JSON.stringify(res2));
                                if (res2.code == 0) {
                                    partner_user_info = res2.data;
                                    self.do_login(res2.data);
                                } else {
                                    callback && callback(1);
                                }
                            }, function (res3) {
                                console.log(A[117] + JSON.stringify(res3));
                                callback && callback(1);
                            });
                        });
                    } else {
                        callback && callback(1, { errMsg: res.errMsg });
                    }
                },
                fail: function (res) {
                    console.log(A[118] + JSON.stringify(res));
                    // iOS 和 Android 对于拒绝授权的回调 errMsg 没有统一，需要做一下兼容处理
                    if (res.errMsg.indexOf(A[119]) > -1 || res.errMsg.indexOf(A[120]) > -1) {
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
            public_data[A[121]] = JSON.stringify(info);
            if (_nO6SC0 && typeof _nO6SC0 == A[122]) {
                for (var key in _nO6SC0) {
                    public_data[key] = _nO6SC0[key];
                }
            }

            wx.request({
                url: A[123] + HOST + A[124],
                method: A[4],
                dataType: A[5],
                header: {
                    'content-type': A[3] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(A[125] + JSON.stringify(res));

                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            try {
                                wx.setStorageSync(A[126], data.data.sdk_token);
                                wx.setStorageSync(A[127], data.data.user_id);
                                wx.setStorageSync(A[128], data.data.username);
                                if (data.data.ext) {
                                    wx.setStorageSync(A[129], data.data.ext);
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
                            callbacks[A[113]] && callbacks[A[113]](0, userData);
                        } else {
                            callbacks[A[113]] && callbacks[A[113]](1, {
                                errMsg: data.msg
                            });
                        }

                        self.getShareInfo(A[130], function (data) {
                            console.log(A[131]);
                            wx.onShareAppMessage(function () {
                                //记录开始分享
                                self.logStartShare(A[130]);
                                return {
                                    title: data.title,
                                    imageUrl: data.img,
                                    query: data.query
                                };
                            });
                        });
                    } else {
                        callbacks[A[113]] && callbacks[A[113]](1, {
                            errMsg: A[132]
                        });
                    }
                }
            });
        },

        share: function (data) {
            callbacks[A[133]] = typeof callback == A[114] ? callback : null;
            var type = data.type || A[133];
            var cp_activity_id = data.cp_activity_id || '';

            console.log(A[134] + type);
            var self = this;
            this.getShareInfo(type, function (data) {
                if (cp_activity_id != '' && data.query != '') {
                    data.query = data.query + A[135] + cp_activity_id;
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
            var sdk_token = wx.getStorageSync(A[126]);
            wx.request({
                url: A[123] + HOST + A[136],
                method: A[4],
                dataType: A[5],
                header: {
                    'content-type': A[3] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    server_id: _nO06CS ? _nO06CS.server_id : '',
                    role_id: _nO06CS ? _nO06CS.role_id : '',
                    type: type
                },
                success: function (res) {}
            });
        },

        openService: function () {
            wx.openCustomerServiceConversation();
        },

        checkGameVersion: function (game_ver, callback) {
            console.log(A[137]);
            var sdk_token = wx.getStorageSync(A[126]);
            wx.request({
                url: A[123] + HOST + A[138],
                method: A[4],
                dataType: A[5],
                header: {
                    'content-type': A[3] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    game_ver: game_ver
                },
                success: function (res) {
                    console.log(A[139] + JSON.stringify(res));
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
            console.log(A[140]);
            var sdk_token = wx.getStorageSync(A[126]);
            wx.request({
                url: A[123] + HOST + A[141],
                method: A[4],
                dataType: A[5],
                header: {
                    'content-type': A[3] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    type: type,
                    server_id: _nO06CS ? _nO06CS.server_id : '',
                    role_id: _nO06CS ? _nO06CS.role_id : '',
                    no_log: 1 //设置为1后就不在这个接口打log，交给logStartShare接口
                },
                success: function (res) {
                    console.log(A[142]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callback && callback(data.data);
                        } else {
                            callbacks[A[133]] && callbacks[A[133]](1, { errMsg: A[143] + data.msg });
                        }
                    } else {
                        callbacks[A[133]] && callbacks[A[133]](1, { errMsg: A[144] });
                    }
                }
            });
        },

        updateShare: function (invite, invite_type, is_new, role_id, server_id, scene) {
            console.log(A[145]);
            var sdk_token = wx.getStorageSync(A[126]);
            wx.request({
                url: A[123] + HOST + A[146],
                method: A[4],
                dataType: A[5],
                header: {
                    'content-type': A[3] // 默认值
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
                    console.log(A[147] + JSON.stringify(res));
                }
            });
        },

        msgCheck: function (content, callback) {
            console.log(A[148]);
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
                    console.log(A[149] + JSON.stringify(res2));
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
                    console.log(A[150]);
                    self.login({}, function () {
                        self.startPay(data, callback);
                    });
                }
            });
        },

        //支付接口
        startPay: function (data, callback) {
            console.log(A[151] + JSON.stringify(data));
            var self = this;
            callbacks[A[152]] = typeof callback == A[114] ? callback : null;
            //先下单
            this_pay_order = 0;
            var sdk_token = wx.getStorageSync(A[126]);
            var session_key = wx.getStorageSync(A[129]);
            if (!sdk_token || !session_key) {
                callbacks[A[152]] && callbacks[A[152]](1, { errMsg: A[153] });
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
                public_data[A[154]] = JSON.stringify(order_data);

                //发起网络请求
                wx.request({
                    url: A[123] + HOST + A[155],
                    method: A[4],
                    dataType: A[5],
                    header: {
                        'content-type': A[3] // 默认值
                    },
                    data: public_data,
                    success: function (res) {
                        console.log(A[156] + JSON.stringify(res));
                        if (res.statusCode == 200) {
                            var data = res.data;
                            if (data.state) {
                                if (typeof wx.requestPayment == A[13]) {
                                    if (platform == A[42] || platform == A[104]) {
                                        sdk.midasNotice(data.data.pay_data);
                                    } else {
                                        self.kfPay(data.data);
                                    }
                                }
                            } else {
                                callbacks[A[152]] && callbacks[A[152]](1, { errMsg: data.msg });
                            }
                        } else {
                            callbacks[A[113]] && callbacks[A[113]](1, { errMsg: A[132] });
                        }
                    }
                });
            });
        },

        kfPay: function (data) {
            console.log(A[157]);
            sdk.order({
                "host_url": data.pay_data.host_url,
                "game_key": data.pay_data.game_key,
                "account": data.pay_data.account,
                "server": data.pay_data.server,
                "role": data.pay_data.role,
                "amount": data.pay_data.amount,
                "extend": data.pay_data.extend
            }, function (res) {
                console.log(A[158] + JSON.stringify(res));

                wx.showModal({
                    title: A[159],
                    content: A[160],
                    showCancel: false,
                    confirmText: A[161],
                    success: function () {
                        // wx.openCustomerServiceConversation();
                        sdk.openCustomerService();
                    }
                });
            });
        },

        //创建角色
        logCreateRole: function (data) {
            var uid = wx.getStorageSync(A[127]);
            var username = wx.getStorageSync(A[128]);

            var postData = {};
            postData[A[162]] = uid;
            postData[A[163]] = username;
            postData[A[164]] = data.roleid;
            postData[A[165]] = data.rolelevel;
            postData[A[166]] = data.rolename;
            postData[A[167]] = data.serverid;

            if (data.roleid && data.serverid) {
                _nO06CS = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(A[168], postData);

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
                    url: A[123] + HOST + A[169],
                    method: A[4],
                    dataType: A[5],
                    header: {
                        'content-type': A[3] // 默认值
                    },
                    data: roleInfo,
                    success: function (res) {
                        console.log(A[170] + JSON.stringify(res));
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
                    "type": 5
                }, function (res2) {
                    console.log(A[171] + JSON.stringify(res2));
                });
            });
        },

        //进入游戏
        logEnterGame: function (data) {
            var uid = wx.getStorageSync(A[127]);
            var username = wx.getStorageSync(A[128]);

            var postData = {};
            postData[A[162]] = uid;
            postData[A[163]] = username;
            postData[A[164]] = data.roleid;
            postData[A[165]] = data.rolelevel;
            postData[A[166]] = data.rolename;
            postData[A[167]] = data.serverid;

            if (data.roleid && data.serverid) {
                _nO06CS = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(A[172], postData);

            //进入游戏确认邀请成功
            if (_nO6SC0) {
                this.updateShare(_nO6SC0.invite, _nO6SC0.invite_type, _nO6SC0.is_new, data.roleid, data.serverid, _nO6SC0.scene);
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
                        console.log(A[173] + JSON.stringify(res2));
                    });
                }

                // sdk.role({
                //     "host_url":res1.host_url,
                //     "game_key":res1.game_key,
                //     "account":partner_user_info.openid,
                //     "server":data.serverid,
                //     "server_name":data.servername,
                //     "role":data.roleid,
                //     "role_name":data.rolename,
                //     "level":data.rolelevel,
                //     "type":3
                // },function (res2) {
                //     console.log('[sdk]登录上报渠道成功：'+JSON.stringify(res2));
                // });

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
                    console.log(A[174] + JSON.stringify(res2));
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
                    "type": 0
                }, function (res2) {
                    console.log(A[175] + JSON.stringify(res2));
                });
            });
        },

        //角色升级
        logRoleUpLevel: function (data) {
            var uid = wx.getStorageSync(A[127]);
            var username = wx.getStorageSync(A[128]);

            var postData = {};
            postData[A[162]] = uid;
            postData[A[163]] = username;
            postData[A[164]] = data.roleid;
            postData[A[165]] = data.rolelevel;
            postData[A[166]] = data.rolename;
            postData[A[167]] = data.serverid;

            if (data.roleid && data.serverid) {
                _nO06CS = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(A[176], postData);

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
                    console.log(A[177] + JSON.stringify(res2));
                });
            });
        },

        //获取唯一设备码（自定义）
        uuid: function (radix, len) {
            var chars = A[178].split('');
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
            var uuid = wx.getStorageSync(A[106]);
            var idfv = wx.getStorageSync(A[107]);
            var ad_code = wx.getStorageSync(A[109]);

            return {
                game_id: config.game_id,
                game_pkg: config.game_pkg,
                partner_id: config.partner_id,
                is_from_min: 1,
                ad_code: ad_code,
                uuid: uuid,
                idfv: idfv,
                dname: system.model,
                mac: A[179],
                net_type: system.wifiSignal == 0 ? '4G' : A[180],
                os_ver: system.system,
                sdk_ver: system.version, //存放的是微信版本号
                game_ver: config.game_ver, //存放的是SDK版本号
                device: system.platform == A[42] ? 1 : 2
            };
        },

        //统一发送log
        log: function (type, data) {
            var public_data = this.getPublicData();
            for (var key in data) {
                public_data[key] = data[key];
            }

            console.log(A[181] + type);
            console.log(public_data);

            wx.request({
                url: A[123] + HOST + A[182] + type + A[183] + encodeURIComponent(JSON.stringify(public_data))
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
            this.getShareInfo(A[111], function (data) {
                callback && callback({ title: data.title, 'img': data.img });
            });
        },
        subscribeMessage: function (tmplIds, callback) {
            console.log(A[184] + tmplIds);
            //获取模板ID
            callbacks[A[185]] = typeof callback == A[114] ? callback : null;

            // getGameInfo(function (res1) {
            //     sdk.subscribeToData({
            //         host_url:res1.host_url,
            //         game_key:res1.game_key,
            //         account:partner_user_info.openid,
            //         tmpl_ids:tmplIds
            //     },function (res2) {
            //         console.log("[SDK]订阅消息返回：成功");
            //         console.log(res2);
            //         callbacks['subscribeMessage'] && callbacks['subscribeMessage'](res2);
            //     },function(res3){
            //         console.log("[SDK]订阅消息返回：失败");
            //         console.log(res3);
            //         callbacks['subscribeMessage'] && callbacks['subscribeMessage'](res3);
            //     });
            // });
            wx.requestSubscribeMessage({
                tmplIds: tmplIds,
                success(res) {
                    console.log(A[186]);
                    console.log(res);
                    callbacks[A[185]] && callbacks[A[185]](res);
                },
                fail(res) {
                    console.log(A[187]);
                    console.log(res);
                    callbacks[A[185]] && callbacks[A[185]](res);
                }
            });
        },
        //获取验证码
        sendCode: function (data, callback) {

            console.log(A[188], data.phone);

            getGameInfo(function (res1) {
                sdk.phoneCode({
                    host_url: res1.host_url,
                    phone: data.phone
                }, function (res2) {
                    console.log(A[189] + JSON.stringify(res2));
                    if (res2.code == 0) {
                        callback && callback(0, res2);
                    } else {
                        callback && callback(1, res2);
                    }
                });
            });
        },
        //绑定手机
        bindPhone: function (data, callback) {

            console.log(A[190], data.phone, data.code);
            getGameInfo(function (res1) {
                sdk.phoneBind({
                    host_url: res1.host_url,
                    game_key: res1.game_key,
                    account: partner_user_info.openid,
                    phone: data.phone,
                    code: data.code
                }, function (res2) {
                    console.log(A[191] + JSON.stringify(res2));
                    if (res2.code == 0) {
                        callback && callback(0, res2);
                    } else {
                        callback && callback(1, res2);
                    }
                });
            });
        }

    };
}

function run(method, data, callback) {
    method in _nO06SC && _nO06SC[method](data, callback);
}

exports.init = function (data, callback) {
    run(A[192], data, callback);
};

exports.login = function (callback) {
    run(A[113], '', callback);
};

exports.pay = function (data, callback) {
    run(A[152], data, callback);
};

exports.openService = function () {
    run(A[193]);
};

exports.logCreateRole = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(A[194], data);
};

exports.logEnterGame = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };

    run(A[195], data);
};

exports.logRoleUpLevel = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(A[196], data);
};

exports.share = function (type, data) {
    var cp_activity_id = data && data.activity_id ? data.activity_id : '';

    var params = {
        type: type,
        cp_activity_id: cp_activity_id
    };

    run(A[133], params);
};

exports.msgCheck = function (data, callback) {
    run(A[197], data, callback);
};

exports.downloadClient = function () {
    run(A[198]);
};

exports.getConfig = function () {
    return {
        game_id: config.game_id,
        game_pkg: config.game_pkg,
        partner_id: config.partner_id
    };
};

exports.getPublicData = function () {
    run(A[199]);
};

exports.weiduanHelper = function () {
    run(A[200]);
};

exports.setMessageToFriendQuery = function (data, callback) {
    run(A[201], data, callback);
};

exports.getFriendShareInfo = function (callback) {
    run(A[202], callback);
};
exports.sendCode = function (data, callback) {
    run(A[203], data, callback);
};

exports.bindPhone = function (data, callback) {
    run(A[204], data, callback);
};
exports.subscribeMessage = function (data, callback) {
    run(A[185], data, callback);
};