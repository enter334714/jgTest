var v = wx.$d;
// 引入渠道JS文件
import SDKyyw from './dddhelp';

var config = {
    game_id: v[0x718c],
    game_pkg: v[0x718d], //有一 --飞剑 -战神纪
    partner_id: v[0x718e],
    game_ver: v[0x718f],
    is_auth: false //授权登录
};
window.config = config;
// 渠道配置
var partner_config = {
    app_id: 1000221,
    app_key: v[0x7190]
};

var D$YLZSA = D$YZASL();
var HOST = v[0x7191];
var D$YLZAS = null;
var D$YZSAL = null;
var D$YZSLA = null;
var partner_user_info = null;

function D$YZASL() {
    var callbacks = {};
    var this_pay_order = 0;
    return {
        order_data: {},
        init: function (ops, callback) {
            var game_ver = ops && ops.game_ver ? ops.game_ver : 0;
            console.log(v[0x7192]);
            var self = this;

            var uuid = wx.getStorageSync(v[0x7193]);
            var is_new;
            if (!uuid) {
                uuid = self.uuid(16, 32);
                wx.setStorageSync(v[0x7193], uuid);
                is_new = 1;
            } else {
                is_new = 0;
            }
            var idfv = wx.getStorageSync(v[0x7194]);
            if (!idfv) {
                idfv = self.uuid(16, 32);
                wx.setStorageSync(v[0x7194], idfv);
            }

            var info = wx.getLaunchOptionsSync();
            var scene = info.scene ? info.scene : '';

            //判断今天是否已经上报过
            if (is_new && info.query && info.query.ad_code) {
                wx.setStorageSync(v[0x7195], info.query.ad_code);
            }

            var data = {
                install: is_new,
                scene: scene
            };
            self.log(v[0x11c], data);

            //显示右上角分享按钮
            wx.showShareMenu();

            //玩家是分享过来的，单独上报给服务器
            var invite = info.query && info.query.invite ? info.query.invite : '';
            var invite_type = info.query && info.query.invite_type ? info.query.invite_type : '';

            if (invite) {
                D$YZSAL = {
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
            console.log(v[0x7196]);
            var self = this;
            callbacks[v[0x7105]] = typeof callback == v[0x7054] ? callback : null;

            //初始化参数
            SDKyyw.initLoginCallback = res => {
                console.log(v[0x7197] + JSON.stringify(res));
                if (res.status == 0) {
                    console.log(v[0x7198]);
                    callback(1, {
                        errMsg: v[0x7199]
                    });
                    return;
                }

                partner_user_info = res.data;
                self.do_login(partner_user_info);
            };

            SDKyyw.init(partner_config.app_id, partner_config.app_key);
        },

        do_login: function (info) {
            var self = this;
            var public_data = self.getPublicData();
            public_data[v[0x719a]] = info ? info.nick_name : '';
            public_data[v[0x719b]] = info ? info.head_img : '';

            if (D$YZSAL && typeof D$YZSAL == v[0x117]) {
                for (var key in D$YZSAL) {
                    public_data[key] = D$YZSAL[key];
                }
            }

            public_data[v[0x719c]] = info.uid;

            wx.request({
                url: v[0x6358] + HOST + v[0x719d],
                method: v[0x719e],
                dataType: v[0x16d8],
                header: {
                    'content-type': v[0x711f] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(v[0x719f] + JSON.stringify(res));
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
                                wx.setStorageSync(v[0x71a0], data.data.sdk_token);
                                wx.setStorageSync(v[0x71a1], data.data.user_id);
                                wx.setStorageSync(v[0x71a2], data.data.username);
                                if (data.data.ext) {
                                    wx.setStorageSync(v[0x71a3], data.data.ext);
                                }
                            } catch (e) {}

                            callbacks[v[0x7105]] && callbacks[v[0x7105]](0, userData);
                        } else {
                            callbacks[v[0x7105]] && callbacks[v[0x7105]](1, { errMsg: data.msg });
                        }

                        //登录成功，加载右上角分享数据
                        self.getShareInfo(v[0x71a4], function (data) {
                            console.log(v[0x71a5]);
                            wx.onShareAppMessage(function () {
                                //记录开始分享
                                self.logStartShare(v[0x71a4]);
                                return {
                                    title: data.title,
                                    imageUrl: data.img,
                                    query: data.query
                                };
                            });
                        });
                    } else {
                        callbacks[v[0x7105]] && callbacks[v[0x7105]](1, { errMsg: v[0x71a6] });
                    }
                }
            });
        },

        share: function (data) {
            callbacks[v[0x7181]] = typeof callback == v[0x7054] ? callback : null;
            var type = data.type || v[0x7181];
            console.log(v[0x71a7] + type);
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
            var sdk_token = wx.getStorageSync(v[0x71a0]);
            wx.request({
                url: v[0x6358] + HOST + v[0x71a8],
                method: v[0x719e],
                dataType: v[0x16d8],
                header: {
                    'content-type': v[0x711f] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    server_id: D$YLZAS ? D$YLZAS.server_id : '',
                    role_id: D$YLZAS ? D$YLZAS.role_id : '',
                    type: type
                },
                success: function (res) {}
            });
        },

        openService: function () {
            wx.openCustomerServiceConversation();
        },

        checkGameVersion: function (game_ver, callback) {
            console.log(v[0x71a9]);
            var sdk_token = wx.getStorageSync(v[0x71a0]);
            wx.request({
                url: v[0x6358] + HOST + v[0x71aa],
                method: v[0x719e],
                dataType: v[0x16d8],
                header: {
                    'content-type': v[0x711f] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    game_ver: game_ver
                },
                success: function (res) {
                    console.log(v[0x71ab]);
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
            console.log(v[0x71ac]);
            var sdk_token = wx.getStorageSync(v[0x71a0]);
            wx.request({
                url: v[0x6358] + HOST + v[0x71ad],
                method: v[0x719e],
                dataType: v[0x16d8],
                header: {
                    'content-type': v[0x711f] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    type: type,
                    server_id: D$YLZAS ? D$YLZAS.server_id : '',
                    role_id: D$YLZAS ? D$YLZAS.role_id : '',
                    no_log: 1 //设置为1后就不在这个接口打log，交给logStartShare接口
                },
                success: function (res) {
                    console.log(v[0x71ae]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callback && callback(data.data);
                        } else {
                            callbacks[v[0x7181]] && callbacks[v[0x7181]](1, { errMsg: v[0x71af] + data.msg });
                        }
                    } else {
                        callbacks[v[0x7181]] && callbacks[v[0x7181]](1, { errMsg: v[0x71b0] });
                    }
                }
            });
        },

        updateShare: function (invite, invite_type, is_new, role_id, server_id, scene) {
            console.log(v[0x71b1]);
            var sdk_token = wx.getStorageSync(v[0x71a0]);
            wx.request({
                url: v[0x6358] + HOST + v[0x71b2],
                method: v[0x719e],
                dataType: v[0x16d8],
                header: {
                    'content-type': v[0x711f] // 默认值
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
                    console.log(v[0x71b3]);
                    console.log(res);
                }
            });
        },

        pay: function (data, callback) {
            var self = this;

            wx.checkSession({
                success: function () {
                    self.startPay(data, callback);
                },
                fail: function () {
                    console.log(v[0x71b4]);
                    self.login({}, function () {
                        self.startPay(data, callback);
                    });
                }
            });
        },

        //支付接口
        startPay: function (data, callback) {
            console.log(v[0x71b5]);
            console.log(data);

            var self = this;
            callbacks[v[0x71b6]] = typeof callback == v[0x7054] ? callback : null;
            //先下单
            this_pay_order = 0;
            var sdk_token = wx.getStorageSync(v[0x71a0]);
            var session_key = wx.getStorageSync(v[0x71a3]);
            if (!sdk_token && !session_key) {
                callbacks[v[0x71b6]] && callbacks[v[0x71b6]](1, { errMsg: v[0x71b7] });
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
                platform: sysInfo.platform
            };
            self.order_data = order_data;

            var public_data = self.getPublicData();
            public_data[v[0x71b8]] = JSON.stringify(order_data);

            //发起网络请求
            wx.request({
                url: v[0x6358] + HOST + v[0x71b9],
                method: v[0x719e],
                dataType: v[0x16d8],
                header: {
                    'content-type': v[0x711f] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(v[0x71ba] + JSON.stringify(res));

                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            //支付回调
                            SDKyyw.onPayCallback = data => {}
                            //不要通过客户端回调来作为充值判断
                            //支付成功 data = {status:"1", data: {gameOrderid:"this is order id",money:"充值金额",productId:"商品id"}, msg:"支付成功"}


                            //拉起支付
                            ;let payData = {};
                            payData.serverId = data.data.pay_data.serverId; //服务器id
                            payData.serverName = data.data.pay_data.serverName; //服务器名称
                            payData.roleId = data.data.pay_data.roleId; //角色id
                            payData.roleName = data.data.pay_data.roleName; //角色名称
                            payData.roleLevel = data.data.pay_data.roleLevel; //角色等级
                            payData.gameOrderid = data.data.pay_data.orderId; //cp支付订单id
                            payData.pext = data.data.pay_data.orderId; //扩展字段，服务端回调原样返回
                            payData.money = data.data.pay_data.amount; //充值金额 单位元
                            payData.productName = data.data.pay_data.productName;
                            payData.productId = data.data.pay_data.productId;

                            console.log(v[0x71bb] + JSON.stringify(payData));
                            SDKyyw.pay(payData);
                        } else {
                            callbacks[v[0x71b6]] && callbacks[v[0x71b6]](1, { errMsg: data.msg });
                        }
                    } else {
                        callbacks[v[0x7105]] && callbacks[v[0x7105]](1, { errMsg: v[0x71a6] });
                    }
                }
            });
        },

        //创建角色
        logCreateRole: function (data) {
            var uid = wx.getStorageSync(v[0x71a1]);
            var username = wx.getStorageSync(v[0x71a2]);

            var postData = {};
            postData[v[0x71bc]] = uid;
            postData[v[0x71bd]] = username;
            postData[v[0x2a55]] = data.roleid;
            postData[v[0x71be]] = data.rolelevel;
            postData[v[0x71bf]] = data.rolename;
            postData[v[0x2cf6]] = data.serverid;

            if (data.roleid && data.serverid) {
                D$YLZAS = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(v[0x6], postData);

            let report_data = {};
            report_data.type = 2; //1:登录，2:创建角色
            report_data.roleId = data.roleid;
            report_data.roleName = data.rolename;
            SDKyyw.pushData(report_data);
        },

        //进入游戏
        logEnterGame: function (data) {
            var uid = wx.getStorageSync(v[0x71a1]);
            var username = wx.getStorageSync(v[0x71a2]);

            var postData = {};
            postData[v[0x71bc]] = uid;
            postData[v[0x71bd]] = username;
            postData[v[0x2a55]] = data.roleid;
            postData[v[0x71be]] = data.rolelevel;
            postData[v[0x71bf]] = data.rolename;
            postData[v[0x2cf6]] = data.serverid;

            if (data.roleid && data.serverid) {
                D$YLZAS = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(v[0x1662], postData);

            //进入游戏确认邀请成功
            if (D$YZSAL) {
                this.updateShare(D$YZSAL.invite, D$YZSAL.invite_type, D$YZSAL.is_new, data.roleid, data.serverid, D$YZSAL.scene);
            }

            let report_data1 = {};
            report_data1.type = 1; //1:登录，2:创建角色
            report_data1.roleId = data.roleid;
            report_data1.roleName = data.rolename;
            SDKyyw.pushData(report_data1);

            let report_data2 = {};
            report_data2.type = 5; //5:在线
            report_data2.roleId = data.roleid;
            report_data2.roleName = data.rolename;
            SDKyyw.pushData(report_data2);
        },

        //角色升级
        logRoleUpLevel: function (data) {
            var uid = wx.getStorageSync(v[0x71a1]);
            var username = wx.getStorageSync(v[0x71a2]);

            var postData = {};
            postData[v[0x71bc]] = uid;
            postData[v[0x71bd]] = username;
            postData[v[0x2a55]] = data.roleid;
            postData[v[0x71be]] = data.rolelevel;
            postData[v[0x71bf]] = data.rolename;
            postData[v[0x2cf6]] = data.serverid;

            if (data.roleid && data.serverid) {
                D$YLZAS = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(v[0x71c0], postData);
        },

        //获取唯一设备码（自定义）
        uuid: function (radix, len) {
            var chars = v[0x71c1].split('');
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
            var uuid = wx.getStorageSync(v[0x7193]);
            var idfv = wx.getStorageSync(v[0x7194]);
            var ad_code = wx.getStorageSync(v[0x7195]);

            return {
                game_id: config.game_id,
                game_pkg: config.game_pkg,
                partner_id: config.partner_id,
                is_from_min: 1,
                ad_code: ad_code,
                uuid: uuid,
                idfv: idfv,
                dname: system.model,
                mac: v[0x71c2],
                net_type: system.wifiSignal == 0 ? '4G' : v[0x71c3],
                os_ver: system.system,
                sdk_ver: system.version, //存放的是微信版本号
                game_ver: config.game_ver, //存放的是SDK版本号
                device: system.platform == v[0x70b0] ? 1 : 2
            };
        },

        //统一发送log
        log: function (type, data) {
            var public_data = this.getPublicData();
            for (var key in data) {
                public_data[key] = data[key];
            }

            console.log(v[0x71c4] + type);
            console.log(public_data);

            wx.request({
                url: v[0x6358] + HOST + v[0x71c5] + type + v[0x71c6] + encodeURIComponent(JSON.stringify(public_data))
            });
        },

        getDate: function () {
            var date = new Date();
            return date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate();
        },

        downloadClient: function () {
            wx.openCustomerServiceConversation();
        },

        // 获取当前场景值
        getLaunchOptionsSync: function (callback) {
            let launchOptions = SDKyyw.getLaunchOptionsSync();
            callback(launchOptions);
            console.log(v[0x71c7] + JSON.stringify(launchOptions));

            // 返回的数据 {query:{}, scene:1001, shareTicket: '', referrerInfo: {}}        }
        },

        // 关键字屏蔽
        msgCheck: function (msg, callback) {
            SDKyyw.msgSecCheck(msg, function (res) {
                console.log(v[0x71c8] + JSON.stringify(res));
                // 返回内容和微信返回内容一样
                // errcode 0 内容正常 87014 内容有违规内容
                // errMsg ok 内容正常 risky 内容有违规内容

                let ret_res = {
                    data: {}
                };
                if (res.status == 1) {
                    ret_res.statusCode = 200;
                    ret_res.data.state = 1;
                } else {
                    ret_res.statusCode = 0;
                    ret_res.data.state = 0;
                }
                callback && callback(ret_res);
            });
        }
    };
}

function run(method, data, callback) {
    method in D$YLZSA && D$YLZSA[method](data, callback);
}

exports.init = function (data, callback) {
    run(v[0x16e], data, callback);
};

exports.login = function (callback) {
    run(v[0x7105], '', callback);
};

exports.login = function (callback) {
    run(v[0x7105], '', callback);
};

exports.pay = function (data, callback) {
    run(v[0x71b6], data, callback);
};

exports.openService = function () {
    run(v[0x6139]);
};

exports.logCreateRole = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(v[0x71c9], data);
};

exports.logEnterGame = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };

    run(v[0x71ca], data);
};

exports.logRoleUpLevel = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(v[0x71cb], data);
};

exports.share = function (type) {
    var data = {
        type: type
    };
    run(v[0x7181], data);
};

exports.downloadClient = function () {
    run(v[0x71cc]);
};

exports.getConfig = function () {
    return {
        game_id: config.game_id,
        game_pkg: config.game_pkg,
        partner_id: config.partner_id
    };
};

exports.getLaunchOptionsSync = function (callback) {
    run(v[0x71cd], callback);
};

exports.msgCheck = function (msg, callback) {
    run(v[0x2f5f], msg, callback);
};