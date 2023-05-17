
var PARTNER_SDK = DkmMainSDK();
var HOST = 'sdk.9187.cn';
var user_game_info = null;
var this_order_id = null;

var Sdk9130 = require('./utils/wx_aksdk');

var config = {
    game_id: '701',
    game_pkg: 'fzjz_hjqyxyx_BC',
    partner_id: '5429',
    partner_label: '9130',
    game_ver: '143.0.21',
};
window.config = config;
function DkmMainSDK() {
    var callbacks = {};
    var this_pay_order = 0;
    return {
        order_data: {},
        init: function (ops, callback) {
            var game_ver = ops && ops.game_ver ? ops.game_ver : 0;
            if(game_ver){
                config.game_ver = game_ver;
            }
            console.log("[DKMSDK]CP调用init接口");
            var self = this;

            var uuid = wx.getStorageSync('dkm_plat_uuid');
            var is_new;
            if (!uuid) {
                uuid = self.uuid(16, 32);
                wx.setStorageSync('dkm_plat_uuid', uuid);
                is_new = 1;
            } else {
                is_new = 0;
            }
            var idfv = wx.getStorageSync('dkm_plat_idfv');
            if (!idfv) {
                idfv = self.uuid(16, 32);
                wx.setStorageSync('dkm_plat_idfv', idfv);
            }


            var info = wx.getLaunchOptionsSync();
            var scene = info.scene ? info.scene : '';


            var data = {
                install: is_new,
                scene: scene
            };
            self.log('start', data);


            Sdk9130.init(ops, callback);
        },

        //登录接口
        login: function (data, callback) {
            console.log("[DKMSDK]调起登录");
            var self = this;
            callbacks['login'] = typeof callback == 'function' ? callback : null;

            //授权登录
            self.do_login();

        },

        do_login: function () {
            var self = this;
            Sdk9130.login(function (status, data) {
                var public_data = {
                    partner_id: config.partner_id,
                    game_pkg: config.game_pkg,
                    is_from_min: 1,
                    userid:  data.userid,
                    token: data.token
                };
                if (status == 0) {
                    wx.request({
                        url: 'https://' + HOST + '/partner/auth',
                        method: 'POST',
                        dataType: 'json',
                        header: {
                            'content-type': 'application/x-www-form-urlencoded' // 默认值
                        },
                        data: public_data,
                        success: function (res) {
                            console.log("[DKMSDK]登录结果：" + JSON.stringify(res));

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
                                        ios_pay: data.data.ios_pay || '0',
                                    };
                                    try {
                                        wx.setStorageSync('dkm_plat_sdk_token', data.data.sdk_token);
                                        wx.setStorageSync('dkm_plat_uid', data.data.user_id);
                                        wx.setStorageSync('dkm_plat_username', data.data.username);
                                        if (data.data.ext) {
                                            wx.setStorageSync('dkm_plat_session_key', data.data.ext);
                                        }
                                    } catch (e) { }

                                    callbacks['login'] && callbacks['login'](0, userData);
                                } else {
                                    callbacks['login'] && callbacks['login'](1, { errMsg: data.msg });
                                }

                            } else {
                                callbacks['login'] && callbacks['login'](1, { errMsg: '请求平台服务器失败！http code = ' + res.statusCode });
                            }
                        }
                    });
                }else{
                    callbacks['login'] && callbacks['login'](1, { errMsg: data.errMsg });
                }
            });
            
        },

        share: function (data) {
            Sdk9130.share(data);
        },

        

        openService: function () {
            Sdk9130.openService();
        },

        pay: function (data, callback) {
            console.log("[DKMSDK]调起支付，CP传值：");
            console.log(data);

            var self = this;
            callbacks['pay'] = typeof callback == 'function' ? callback : null;
            //先下单
            this_pay_order = 0;
            var sdk_token = wx.getStorageSync('dkm_plat_sdk_token');
            var session_key = wx.getStorageSync('dkm_plat_session_key');
            if (!sdk_token && !session_key) {
                callbacks['pay'] && callbacks['pay'](1, { errMsg: "用户未登录，支付失败！" });
                return;
            }

            var sysInfo = wx.getSystemInfoSync();

            var cp_bill = data.cpbill;
            var cp_extension = data.extension;

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
                platform: sysInfo.platform,
            };
            self.order_data = order_data;


            var public_data = self.getPublicData();
            public_data['order_data'] = JSON.stringify(order_data);

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
                    console.log("[DKMSDK]完成创建订单" + JSON.stringify(res));

                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {

                            var dkm_order_id = data.data.pay_data.order_id;
                            var dkm_money = data.data.pay_data.money;
                           
                            var payData = {
                                cpbill: data.data.pay_data.order_id,
                                productid: data.data.pay_data.product_id,
								productname: data.data.pay_data.product_name,
                                productdesc: data.data.pay_data.product_desc,
                                serverid: data.data.pay_data.server_id,
                                servername: data.data.pay_data.server_name,
                                roleid: data.data.pay_data.role_id,
                                rolename: data.data.pay_data.role_name,
                                rolelevel: data.data.pay_data.role_level,
                                price: data.data.pay_data.money,
                                extension: data.data.pay_data.order_id,
                               
                            };
                            console.log('[DKMSDK]下单返回数据' + JSON.stringify(payData));

                            console.log('[DKMSDK]数据数据' + JSON.stringify(data))

                            Sdk9130.pay(payData, function(status, data){
                                if(status == 0){
                                    callbacks['pay'] && callbacks['pay'](0, {
                                        cpOrderNo: cp_bill,
                                        orderNo: dkm_order_id,
                                        amount: dkm_money,
                                        extension: cp_extension
                                    });
                                }else{
                                    callbacks['pay'] && callbacks['pay'](status);
                                }
                            });
                        } else {
                            callbacks['pay'] && callbacks['pay'](1, { errMsg: data.msg });
                        }
                    } else {
                        callbacks['pay'] && callbacks['pay'](1, { errMsg: '请求平台服务器失败！' });
                    }
                }
            });
        },



        //创建角色
        logCreateRole: function (data) {
            var uid = wx.getStorageSync('dkm_plat_uid');
            var username = wx.getStorageSync('dkm_plat_username');

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
                    role_name: data.rolename,
                    server_name: data.servername
                };
            }

            this.log('create', postData);

            var info = {
                roleid: data.roleid,
                rolelevel: data.rolelevel,
                rolename: data.rolename,
                serverid: data.serverid,
            };

            Sdk9130.logCreateRole(info);

        },

        //进入游戏
        logEnterGame: function (data) {
            var uid = wx.getStorageSync('dkm_plat_uid');
            var username = wx.getStorageSync('dkm_plat_username');

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
                    role_name: data.rolename,
                    server_name: data.servername
                };
            }


            this.log('enter', postData);

            var info = {
                roleid: data.roleid,
                rolelevel: data.rolelevel,
                rolename: data.rolename,
                serverid: data.serverid,
            };

            Sdk9130.logEnterGame(info);
        },

        //角色升级
        logRoleUpLevel: function (data) {
            var uid = wx.getStorageSync('dkm_plat_uid');
            var username = wx.getStorageSync('dkm_plat_username');

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
                    role_name: data.rolename,
                    server_name: data.servername
                };
            }

            this.log('levelup', postData);


            var info = {
                roleid: data.roleid,
                rolelevel: data.rolelevel,
                rolename: data.rolename,
                serverid: data.serverid,
            };

            Sdk9130.logRoleUpLevel(info);


        },

        // 敏感词检测
        msgCheck: function (content, callback) {
            Sdk9130.msgCheck(content, callback);
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
            var system = wx.getSystemInfoSync();
            var uuid = wx.getStorageSync('dkm_plat_uuid');
            var idfv = wx.getStorageSync('dkm_plat_idfv');
            var ad_code = wx.getStorageSync('dkm_plat_ad_code');

            return {
                game_id: config.game_id,
                game_pkg: config.game_pkg,
                partner_id: config.partner_id,
                partner_label: config.partner_label,
                ad_code: ad_code,
                uuid: uuid,
                idfv: idfv,
                dname: system.model,
                mac: '0000',
                net_type: system.wifiSignal == 0 ? '4G' : 'WIFI',
                os_ver: system.system,
                sdk_ver: system.version,//存放的是微信版本号
                game_ver: config.game_ver,//存放的是SDK版本号
                device: system.platform == 'android' ? 1 : 2,
                is_from_min: 1
            };
        },

        downloadClient: function () {
            Sdk9130.weiduanHelper();
        },
		
		showVideoAd: function(){
			Sdk9130.showVideoAd();
		},
        subscribeMessage : function (tmplIds, callback){
            Sdk9130.subscribeMessage();
        },

        // 微端小助手
        weiduanHelper: function() {
            Sdk9130.weiduanHelper();
        },
        showGameClub(params = {}) {
            Sdk9130.showGameClub();
        },

        //统一发送log
        log: function (type, data) {
            var public_data = this.getPublicData();
            for (var key in data) {
                public_data[key] = data[key];
            }

            console.log("[DKMSDK]上报数据：" + type);
            console.log(public_data);

            wx.request({
                url: 'https://' + HOST + '/partner/h5Log/?type=' + type + '&data=' + encodeURIComponent(JSON.stringify(public_data))
            });
        }
    }
}

function run(method, data, callback) {
    (method in PARTNER_SDK) && PARTNER_SDK[method](data, callback);
}

exports.init = function (data, callback) {
    run('init', data, callback);
};

exports.login = function (callback) {
    run('login', '', callback);
};

exports.login = function (callback) {
    run('login', '', callback);
};

exports.pay = function (data, callback) {
    run('pay', data, callback);
};

exports.openService = function () {
    run('openService');
};

exports.logCreateRole = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel,
    };
    run('logCreateRole', data);
};

exports.logEnterGame = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel,
    };

    run('logEnterGame', data);
};

exports.logRoleUpLevel = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel,
    };
    run('logRoleUpLevel', data);
};

exports.share = function (type) {
    var data = {
        type: type
    };
    run('share', data);
};

exports.downloadClient = function () {
    run('downloadClient');
};

exports.getConfig = function () {
    return {
        game_id: config.game_id,
        game_pkg: config.game_pkg,
        partner_id: config.partner_id
    }
};



exports.msgCheck = function (data, callback) {
    run('msgCheck', data, callback);
};


exports.downloadClient = function () {
    run('downloadClient');
};

exports.showVideoAd = function () {
    run('showVideoAd');
};


exports.subscribeMessage = function (data, callback) {
    run('subscribeMessage', data, callback);
};

exports.getPublicData = function(){
    run('getPublicData');
};
exports.weiduanHelper = function () {
    run('weiduanHelper');
};

exports.subscribeWhatsNew = function (data, callback) {
    run('subscribeWhatsNew', data, callback);
};
exports.subscriptionsSetting = function (data, callback) {
    run('subscriptionsSetting', data, callback);
};

exports.showGameClub = function (data) {
    run('showGameClub', data);
};