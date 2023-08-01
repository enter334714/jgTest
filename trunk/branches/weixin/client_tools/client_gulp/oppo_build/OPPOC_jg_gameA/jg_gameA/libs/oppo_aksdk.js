
// var sdk_conf = require('./partner_config.js');
var config = {
    game_id: '256',
    game_pkg: 'tjqy_tjqyswoppoxyxb_AGK',
    partner_id: '47',
    game_ver: '1.0.7',
    is_auth: false //授权登录
  };
var channel_name = 'OPPO';
var PARTNER_SDK = mainSDK();
var HOST = 'sdk.sh9130.com';
var t;
var t_second = 0;
var t_max = 300;
var user_game_info = null;
var user_invite_info = null;
var this_order_id = null;

//适配器
var wx = {
    request: function (ops) {
        var xmlhttp = new XMLHttpRequest();
        ops.method = ops.method || 'GET';
        ops.dataType = ops.dataType || 'json';
        ops.header = ops.header || {};
        var data = ops.data || null;
        var i;

        var post_data = '';
        if (data) {
            var str = [];
            for (i in data) {
                str.push(encodeURIComponent(i) + "=" + encodeURIComponent(data[i]));
            }
            post_data = str.join('&');
        } else {
            post_data = '';
        }

        console.log("[SDK] " + ops.method + " " + ops.url + (post_data ? ' DATA:' + post_data : ''));

        xmlhttp.timeout = 10000;
        xmlhttp.onreadystatechange = function () {
            console.log("status==" + xmlhttp.status + " readyState=" + xmlhttp.readyState);
            if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
                console.log("返回：",xmlhttp.responseText);
                var result = {
                    statusCode: xmlhttp.status,
                    data: ops.dataType == 'json' ? JSON.parse(xmlhttp.responseText) : xmlhttp.responseText
                };
                if (ops.success && typeof ops.success == 'function') {
                    ops.success(result);
                }
            }
        };

        xmlhttp.open(ops.method, ops.url, true);

        if (!ops.header['content-type']) {
            ops.header['content-type'] = 'application/x-www-form-urlencoded';
        }

        if (ops.header) {
            var ss;
            for (var key in ops.header) {
                //首字母大写
                ss = key.toLowerCase().split('-');
                var value = ops.header[key];

                for (i = 0; i < ss.length; i++) {
                    ss[i] = ss[i].slice(0, 1).toUpperCase() + ss[i].slice(1);
                }
                key = ss.join('-');
                xmlhttp.setRequestHeader(key, value);
            }
        }

        if (post_data) {
            xmlhttp.send(post_data);
        } else {
            xmlhttp.send();
        }
    }
};

function mainSDK() {
    var callbacks = {};
    var this_pay_order = 0;
    return {
        order_data: {},
        init: function (ops, callback) {
            console.log("[SDK]CP调用init接口");
            var game_ver = ops && ops.game_ver ? ops.game_ver : 0;


            var self = this;
            var uuid = localStorage.getItem('plat_uuid');
            var is_new;
            if (!uuid) {
                uuid = self.uuid(16, 32);
                localStorage.setItem('plat_uuid', uuid);
                is_new = 1;
            } else {
                is_new = 0;
            }
            var idfv = localStorage.getItem('plat_idfv');
            if (!idfv) {
                idfv = self.uuid(16, 32);
                localStorage.setItem('plat_idfv', idfv);
            }

            var scene = '';

            var data = {
                install: is_new,
                scene: scene
            };
            self.log('start', data);

            //判断版本号
            if (game_ver) {
                this.checkGameVersion(game_ver, function (data) {
                    callback && callback(data);
                });
            }
        },

        //登录接口
        login: function (data, callback) {
            console.log("[SDK]调起登录");

            var self = this;
            callbacks['login'] = typeof callback == 'function' ? callback : null;

            self.do_login();
        },

        do_login: function (info) {
            var self = this;
            qg.login({
                success: function (res) {
                    console.log(channel_name + "登录返回" + JSON.stringify(res));
                    if (res.code === 0) {
                        //发起网络请求
                        var public_data = self.getPublicData();
                        var token = res.token;
                        public_data['is_from_min'] = 1;
                        public_data['code'] = res.token;
                        public_data['nick_name'] = res.nickName || '';
                        public_data['head_img'] = res.avatar || '';

                        if (user_invite_info && typeof user_invite_info == 'object') {
                            for (var key in user_invite_info) {
                                public_data[key] = user_invite_info[key];
                            }
                        }

                        wx.request({
                            url: 'https://' + HOST + '/partner/auth',
                            method: 'POST',
                            dataType: 'json',
                            header: {
                                'content-type': 'application/x-www-form-urlencoded' // 默认值
                            },
                            data: public_data,
                            success: function (res) {
                                console.log("[SDK]平台登录结果：");
                                console.log(res);

                                if (res.statusCode == 200) {
                                    var data = res.data;
                                    if (data.state) {
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
                                            localStorage.setItem('plat_sdk_token', data.data.sdk_token);
                                            localStorage.setItem('plat_uid', data.data.user_id);
                                            localStorage.setItem('plat_username', data.data.username);
                                            localStorage.setItem('plat_session_key', token);
                                        } catch (e) {
                                        }

                                        callbacks['login'] && callbacks['login'](0, userData);
                                    } else {
                                        callbacks['login'] && callbacks['login'](1, { errMsg: data.msg });
                                    }
                                } else {
                                    callbacks['login'] && callbacks['login'](1, { errMsg: '请求平台服务器失败！' });
                                }
                            }
                        });
                    } else {
                        callbacks['login'] && callbacks['login'](1, { errMsg: res.errMsg });
                    }
                },
                fail: function (res) {
                    callbacks['login'] && callbacks['login'](1, { errMsg: res.errMsg });
                }
            });
        },

        checkGameVersion: function (game_ver, callback) {
            console.log("[SDK]检查游戏版本");
            var sdk_token = localStorage.getItem('plat_sdk_token');
            wx.request({
                url: 'https://' + HOST + '/game/min/?ac=checkGameVersion',
                method: 'POST',
                dataType: 'json',
                header: {
                    'content-type': 'application/x-www-form-urlencoded' // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    game_ver: game_ver
                },
                success: function (res) {
                    console.log("[SDK]获取游戏版本结果");
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

        pay: function (data, callback) {
            this.startPay(data, callback);
        },

        //支付接口
        startPay: function (data, callback) {
            console.log("[SDK]调起支付，CP传值：");
            console.log(data);

            var self = this;
            callbacks['pay'] = typeof callback == 'function' ? callback : null;
            //先下单
            this_pay_order = 0;
            var sdk_token = localStorage.getItem('plat_sdk_token');
            if (!sdk_token) {
                callbacks['pay'] && callbacks['pay'](1, { errMsg: "用户未登录，支付失败！" });
                return;
            }

            var sysInfo = qg.getSystemInfoSync();

            var session_key = localStorage.getItem('plat_session_key');

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

            };
            self.order_data = order_data;

            var public_data = self.getPublicData();
            public_data['order_data'] = JSON.stringify(order_data);
            public_data['is_from_min'] = 1;

            //发起网络请求
            wx.request({
                url: 'https://' + HOST + '/partner/order',
                method: 'POST',
                dataType: 'json',
                header: {
                    'content-type': 'application/x-www-form-urlencoded' // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log("[SDK]完成创建订单");
                    console.log(res);

                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            self.gamePay(data.data);
                        } else {
                            callbacks['pay'] && callbacks['pay'](1, { errMsg: data.msg });
                        }
                    } else {
                        callbacks['pay'] && callbacks['pay'](1, { errMsg: '请求平台服务器失败！' });
                    }
                }
            });
        },

        //小游戏支付
        gamePay: function (data) {
            qg.pay({
                appId: data.appId,
                token: data.token,
                timestamp: data.timestamp,
                orderNo: data.payOrderNo,
                paySign: data.paySign,
                success: function (res) {
                    console.log(res);
                    if (res.code === 0) {
                        var ret = {
                            cpOrderNo: data.cpbill,
                            orderNo: data.orderId,
                            amount: data.price,
                            extension: data.extension
                        };
                        callbacks['pay'] && callbacks['pay'](0, ret);

                    } else {
                        callbacks['pay'] && callbacks['pay'](1, { errMsg: res.data.errMsg });
                    }
                },
                fail: function (res) {
                    console.log(res);
                    callbacks['pay'] && callbacks['pay'](1, { errMsg: "充值失败 code=" + res.code });
                }
            });
        },

        //创建角色
        logCreateRole: function (data) {
            var uid = localStorage.getItem('plat_uid');
            var username = localStorage.getItem('plat_username');

            var postData = {};
            postData['user_id'] = uid;
            postData['user_name'] = username;
            postData['role_id'] = data.roleid;
            postData['role_lev'] = data.rolelevel;
            postData['role_name'] = data.rolename;
            postData['server_id'] = data.serverid;

            if (data.roleid && data.serverid) {
                user_game_info = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log('create', postData);
        },

        //进入游戏
        logEnterGame: function (data) {
            var uid = localStorage.getItem('plat_uid');
            var username = localStorage.getItem('plat_username');

            var postData = {};
            postData['user_id'] = uid;
            postData['user_name'] = username;
            postData['role_id'] = data.roleid;
            postData['role_lev'] = data.rolelevel;
            postData['role_name'] = data.rolename;
            postData['server_id'] = data.serverid;

            if (data.roleid && data.serverid) {
                user_game_info = {
                    role_id: data.roleid,
                    server_id: data.serverid,
                };
            }

            this.log('enter', postData);
        },

        //角色升级
        logRoleUpLevel: function (data) {
            var uid = localStorage.getItem('plat_uid');
            var username = localStorage.getItem('plat_username');

            var postData = {};
            postData['user_id'] = uid;
            postData['user_name'] = username;
            postData['role_id'] = data.roleid;
            postData['role_lev'] = data.rolelevel;
            postData['role_name'] = data.rolename;
            postData['server_id'] = data.serverid;

            if (data.roleid && data.serverid) {
                user_game_info = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log('levelup', postData);
        },

        msgCheck: function (content, callback) {
            console.log("[SDK]查看文本是否有违规内容");
            var res = {};
            res.data = {};
            res.data.state = 1;
            res.statusCode = 200;
            callback && callback(res);
        },

        //获取唯一设备码（自定义）
        uuid: function (radix, len) {
            var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
            var uuid = [], i;
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
                        uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
                    }
                }
            }

            return uuid.join('');
        },

        //获取公共参数
        getPublicData: function () {
            var system = qg.getSystemInfoSync();
            var uuid = localStorage.getItem('plat_uuid');
            var idfv = localStorage.getItem('plat_idfv');
            var ad_code = localStorage.getItem('plat_ad_code');

            return {
                game_id: config.game_id,
                game_pkg: config.game_pkg,
                partner_id: config.partner_id,
                ad_code: ad_code,
                uuid: uuid,
                idfv: idfv,
                dname: system.model,
                mac: '0000',
                net_type: 'WIFI',
                os_ver: system.system,
                sdk_ver: system.platformVersion,//存放的是OPPO快应用SDK版本号
                game_ver: config.game_ver,//存放的是SDK版本号
                device: system.platform == 'android' ? 1 : 2,
            };
        },

        //统一发送log
        log: function (type, data) {
            var public_data = this.getPublicData();
            for (var key in data) {
                public_data[key] = data[key];
            }

            console.log("[SDK]上报数据：" + type);
            console.log(public_data);

            wx.request({
                url: 'https://' + HOST + '/partner/h5Log/?type=' + type + '&data=' + encodeURIComponent(JSON.stringify(public_data))
            });
        },

        getDate: function () {
            var date = new Date();
            return date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate();
        },

        // 判断并添加桌面图标
        hasShortcutInstalled:function (callback) {
            qg.hasShortcutInstalled({
                success: function(res) {
                    // 判断图标未存在时，创建图标
                    if (res == false) {
                        qg.installShortcut({
                            success: function() {
                                console.log('[SDK]渠道添加图标成功回调');
                                // 执行用户创建图标奖励
                                callback && callback(true);
                            },
                            fail: function(err) {
                                console.log('[SDK]渠道添加图标失败回调',err);
                                callback && callback(false);
                            },
                            complete: function() {}
                        })
                    }else{
                        console.log('[SDK]玩家已添加过图标');
                        callback && callback(true);
                    }
                },
                fail: function(err) {
                    console.log('[SDK]hasShortcutInstalled 渠道接口返回失败',err);
                    callback && callback(false);
                },
                complete: function() {}
            })
        },
    }
}

function run(method, data, callback) {
    (method in PARTNER_SDK) && PARTNER_SDK[method](data, callback);
}

var no_exports = false;
if (!(typeof module !== 'undefined' && module.exports)) {
    var exports = {};
    no_exports = true;
}

exports.init = function (data, callback) {
    run('init', data, callback);
};

exports.login = function (callback) {
    run('login', '', callback);
};

exports.pay = function (data, callback) {
    run('pay', data, callback);
};

exports.logCreateRole = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run('logCreateRole', data);
};

exports.logEnterGame = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };

    run('logEnterGame', data);
};

exports.logRoleUpLevel = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run('logRoleUpLevel', data);
};

exports.getConfig = function () {
    return {
        game_id: config.game_id,
        game_pkg: config.game_pkg,
        partner_id: config.partner_id
    }
};

exports.setLoadingProgress = function (progress) {
    qg.setLoadingProgress({
        progress: progress
    });
};

exports.msgCheck = function (content, callback) {
    run('msgCheck', content, callback);
};

exports.hasShortcutInstalled = function (callback) {
    run('hasShortcutInstalled',callback);
};

if (no_exports && window) {
    window.AKSDK = exports;
}



