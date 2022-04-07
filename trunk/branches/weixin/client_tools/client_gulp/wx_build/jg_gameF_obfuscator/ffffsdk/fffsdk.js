var k = wx.$f;
import Sygame from './fffhelp';
window[k[0x7522]] = Sygame;
var config = {
    game_id: k[0x7523],
    game_pkg: k[0x7524], //盛也微信小游戏--飞仙服-鬼剑豪
    partner_label: k[0x7525],
    partner_id: k[0x7526],
    game_ver: k[0x7527],
    is_auth: false, //授权登录
    tmpId: { 1: k[0x7528], 2: k[0x7529], 3: k[0x752a] // 订阅的类型 和 模板id
    } };
window.config = config;
var F$IL608 = F$I680L();
var HOST = k[0x752b];
var F$IL680 = null;
var F$I608L = null;
var partner_user_data = {};
var user_invite_by_activity = null;
var checkHandler = null;
var loginHandler = null;
var requestCallback = false;

function F$I680L() {
    var callbacks = {};
    return {
        order_data: {},
        init: function (ops, callback) {
            var game_ver = ops && ops.game_ver ? ops.game_ver : 0;
            console.log(k[0x752c]);
            var self = this;

            var uuid = wx.getStorageSync(k[0x752d]);
            var is_new;
            if (!uuid) {
                uuid = self.uuid(16, 32);
                wx.setStorageSync(k[0x752d], uuid);
                is_new = 1;
            } else {
                is_new = 0;
            }
            var idfv = wx.getStorageSync(k[0x752e]);
            if (!idfv) {
                idfv = self.uuid(16, 32);
                wx.setStorageSync(k[0x752e], idfv);
            }

            var info = wx.getLaunchOptionsSync();
            var scene = info.scene ? info.scene : '';

            //判断今天是否已经上报过
            if (is_new && info.query && info.query.ad_code) {
                wx.setStorageSync(k[0x752f], info.query.ad_code);
            }

            var data = {
                install: is_new,
                scene: scene
            };
            self.log(k[0x11f], data);

            //渠道初始化
            Sygame.init(info);

            //玩家是分享过来的，单独上报给服务器
            var invite = info.query && info.query.invite ? info.query.invite : '';
            var invite_type = info.query && info.query.invite_type ? info.query.invite_type : '';
            var cp_activity_id = info.query && info.query.cp_activity_id ? info.query.cp_activity_id : '';

            // 普通分享不存在活动ID的话  再看下定向分享是否存在
            if (!cp_activity_id) {
                cp_activity_id = info.query && info.query.shareMessageToFriendScene ? info.query.shareMessageToFriendScene : '';
                invite_type = cp_activity_id ? k[0x7530] : '';
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
                F$I608L = {
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
            var self = this;
            console.log(k[0x7531]);
            callbacks[k[0x7532]] = typeof callback == k[0x736d] ? callback : null;
            Sygame.syLogin().then(res => {
                console.log(k[0x7533], res);
                if (res.code === 1001) {
                    partner_user_data = res;
                    self.do_login(partner_user_data);
                } else {
                    callbacks[k[0x7532]] && callbacks[k[0x7532]](1, { errMsg: res.message });
                }
            });
        },

        do_login: function (user_info) {
            var self = this;

            var login_data = self.getPublicData();
            login_data[k[0x7534]] = JSON.stringify(user_info);

            if (F$I608L && typeof F$I608L == k[0x11a]) {
                for (var key in F$I608L) {
                    login_data[key] = F$I608L[key];
                }
            }

            var lastTime = Date.now();
            wx.request({
                url: k[0x6565] + HOST + k[0x7535],
                method: k[0x74e3],
                dataType: k[0x1733],
                header: {
                    'content-type': k[0x7536] // 默认值
                },
                data: login_data,
                success: function (res) {
                    console.log(k[0x7537] + JSON.stringify(res));
                    requestCallback = true;
                    if (loginHandler) clearTimeout(loginHandler);
                    loginHandler = null;
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            partner_user_data.openid = data.data.ext;
                            try {
                                wx.setStorageSync(k[0x7538], data.data.sdk_token);
                                wx.setStorageSync(k[0x7539], data.data.user_id);
                                wx.setStorageSync(k[0x753a], data.data.username);
                                if (data.data.ext) {
                                    wx.setStorageSync(k[0x753b], data.data.ext);
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
                            callbacks[k[0x7532]] && callbacks[k[0x7532]](0, userData);
                        } else {
                            callbacks[k[0x7532]] && callbacks[k[0x7532]](1, { type: k[0x753c], errMsg: data.msg, time: Date.now() - lastTime, res: res });
                        }

                        //登录成功，加载右上角分享数据
                        self.getShareInfo(k[0x753d], function (data) {
                            console.log(k[0x753e]);
                            wx.onShareAppMessage(function () {
                                //记录开始分享
                                self.logStartShare(k[0x753d]);
                                return {
                                    title: data.title,
                                    imageUrl: data.img,
                                    query: data.query
                                };
                            });
                        });
                    } else {
                        callbacks[k[0x7532]] && callbacks[k[0x7532]](1, { type: k[0x753c], errMsg: k[0x753f], time: Date.now() - lastTime, res: res });
                    }
                },
                fail: function (res) {
                    console.log(k[0x7540]);
                    console.log(res);

                    requestCallback = true;
                    if (loginHandler) clearTimeout(loginHandler);
                    loginHandler = null;
                    callbacks[k[0x7532]] && callbacks[k[0x7532]](1, { type: k[0x7541], errMsg: res.errMsg, time: Date.now() - lastTime, res: res });
                }
            });
            if (!requestCallback) {
                var timeOutFunc = function () {
                    console.log(k[0x7542]);

                    callbacks[k[0x7532]] && callbacks[k[0x7532]](1, { type: k[0x7543], errMsg: k[0x7544], time: Date.now() - lastTime });
                    callbacks[k[0x7532]] = null; //回调后置空，以免success或fail里重复回调
                };
                loginHandler = setTimeout(timeOutFunc, 20000);
            }
        },

        share: function (data) {
            callbacks[k[0x7545]] = typeof callback == k[0x736d] ? callback : null;
            var type = data.type || k[0x7545];
            var cp_activity_id = data.cp_activity_id || '';

            console.log(k[0x7546] + type);
            var self = this;
            this.getShareInfo(type, function (data) {
                if (cp_activity_id != '' && data.query != '') {
                    data.query = data.query + k[0x7547] + cp_activity_id;
                }

                //记录开始分享
                self.logStartShare(type);
                self.logSheyeShare();
                wx.shareAppMessage({
                    title: data.title,
                    imageUrl: data.img,
                    query: data.query
                });
            });
        },

        logSheyeShare: function () {
            var params = {
                openid: partner_user_data.openid,
                server_id: F$IL680.server_id
            };
            wx.request({
                url: k[0x6565] + HOST + k[0x7548] + config.partner_id + '/' + config.game_pkg,
                method: k[0x74e3],
                dataType: k[0x1733],
                header: {
                    'content-type': k[0x7536] // 默认值
                },
                data: params,
                success: function (res) {
                    console.log(k[0x7549] + JSON.stringify(params));
                    console.log(k[0x754a] + JSON.stringify(res));
                }
            });
        },

        logStartShare: function (type) {
            var sdk_token = wx.getStorageSync(k[0x7538]);
            wx.request({
                url: k[0x6565] + HOST + k[0x754b],
                method: k[0x74e3],
                dataType: k[0x1733],
                header: {
                    'content-type': k[0x7536] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    server_id: F$IL680 ? F$IL680.server_id : '',
                    role_id: F$IL680 ? F$IL680.role_id : '',
                    type: type
                },
                success: function (res) {}
            });
        },

        openService: function () {
            wx.openCustomerServiceConversation();
        },

        checkGameVersion: function (game_ver, callback) {
            console.log(k[0x754c]);
            callbacks[k[0x1c3d]] = typeof callback == k[0x736d] ? callback : null;
            var sdk_token = wx.getStorageSync(k[0x7538]);
            wx.request({
                url: k[0x6565] + HOST + k[0x754d],
                method: k[0x74e3],
                dataType: k[0x1733],
                header: {
                    'content-type': k[0x7536] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    game_ver: game_ver
                },
                success: function (res) {
                    console.log(k[0x754e]);
                    console.log(res);
                    requestCallback = true;
                    if (checkHandler) clearTimeout(checkHandler);
                    checkHandler = null;
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callbacks[k[0x1c3d]] && callbacks[k[0x1c3d]](data.data);
                        } else {
                            callbacks[k[0x1c3d]] && callbacks[k[0x1c3d]]({ develop: 0 });
                        }
                    } else {
                        callbacks[k[0x1c3d]] && callbacks[k[0x1c3d]]({ develop: 0 });
                    }
                },
                fail: function (res) {
                    console.log(k[0x754f]);
                    console.log(res);
                    requestCallback = true;
                    if (checkHandler) clearTimeout(checkHandler);
                    checkHandler = null;
                    callbacks[k[0x1c3d]] && callbacks[k[0x1c3d]]({ develop: 0 });
                }
            });
            if (!requestCallback) {
                var timeOutFunc = function () {
                    console.log(k[0x7550]);
                    callbacks[k[0x1c3d]] && callbacks[k[0x1c3d]]({ develop: 0 });
                    callbacks[k[0x1c3d]] = null; //回调后置空，以免success或fail里重复回调
                };
                checkHandler = setTimeout(timeOutFunc, 10000);
            }
        },

        getShareInfo: function (type, callback) {
            console.log(k[0x7551]);
            var sdk_token = wx.getStorageSync(k[0x7538]);
            wx.request({
                url: k[0x6565] + HOST + k[0x7552],
                method: k[0x74e3],
                dataType: k[0x1733],
                header: {
                    'content-type': k[0x7536] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    type: type,
                    server_id: F$IL680 ? F$IL680.server_id : '',
                    role_id: F$IL680 ? F$IL680.role_id : '',
                    no_log: 1 //设置为1后就不在这个接口打log，交给logStartShare接口
                },
                success: function (res) {
                    console.log(k[0x7553]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callback && callback(data.data);
                        } else {
                            callbacks[k[0x7545]] && callbacks[k[0x7545]](1, {
                                errMsg: k[0x7554] + data.msg
                            });
                        }
                    } else {
                        callbacks[k[0x7545]] && callbacks[k[0x7545]](1, {
                            errMsg: k[0x7555]
                        });
                    }
                }
            });
        },

        updateShare: function (invite, invite_type, is_new, role_id, server_id, scene) {
            console.log(k[0x7556]);
            var sdk_token = wx.getStorageSync(k[0x7538]);
            wx.request({
                url: k[0x6565] + HOST + k[0x7557],
                method: k[0x74e3],
                dataType: k[0x1733],
                header: {
                    'content-type': k[0x7536] // 默认值
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
                    console.log(k[0x7558]);
                    console.log(res);
                }
            });
        },

        msgCheck: function (content, callback) {
            console.log(k[0x7559]);
            let ret = {
                data: {}
            };
            let data = {
                content: content,
                scene: 2 // 场景枚举值（1 资料；2 评论；3 论坛；4 社交⽇志）
            };
            Sygame.syMsgSecCheck(data).then(res => {
                if (res.status == 1001) {
                    ret.statusCode = 200;
                    ret.data.state = 1;
                    console.log(k[0x755a] + JSON.stringify(res));
                } else {
                    ret.statusCode = 0;
                    ret.data.state = 0;
                    console.log(k[0x755b] + JSON.stringify(res));
                }
                callback && callback(ret);
            });
        },

        pay: function (data, callback) {
            var self = this;
            self.startPay(data, callback);
        },

        //支付接口
        startPay: function (data, callback) {
            console.log(k[0x755c], data);
            var self = this;
            callbacks[k[0x755d]] = typeof callback == k[0x736d] ? callback : null;
            //先下单
            var sdk_token = wx.getStorageSync(k[0x7538]);
            var session_key = wx.getStorageSync(k[0x753b]);
            if (!sdk_token && !session_key) {
                callbacks[k[0x755d]] && callbacks[k[0x755d]](1, { errMsg: k[0x755e] });
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
            public_data[k[0x755f]] = JSON.stringify(order_data);

            //发起网络请求
            wx.request({
                url: k[0x6565] + HOST + k[0x7560],
                method: k[0x74e3],
                dataType: k[0x1733],
                header: {
                    'content-type': k[0x7536] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(k[0x7561], res);

                    if (res.statusCode === 200) {
                        var data = res.data;
                        if (data.state && data.data.pay_data) {
                            console.log(k[0x7562] + JSON.stringify(data.data.pay_data));

                            let pay_data = {
                                product_name: data.data.pay_data.productName, // 商品名称 可选
                                product_id: data.data.pay_data.productId, // 商品ID 可选
                                order_id: data.data.pay_data.orderId, // string 订单号 必填，游戏⽅⽣成的订单id，⻓度为10-32的字符串，是订单的唯⼀标识，即使清档后也不能重复。建议使⽤appid+⽆序字符串成，以避免和其他游戏的订单重复，若⻓度超出，可使⽤md5加密。
                                product_price: data.data.pay_data.amount, // 必填,商品价格,以元为单位
                                extends_param1: data.data.pay_data.orderId, // 选填,服务器将此参数原封不动回传⾄CP服务器
                                extends_param2: data.data.pay_data.orderId, // 选填,服务器将此参数原封不动回传⾄CP服务器
                                role_id: data.data.pay_data.roleId, // 选填,有的话尽量填写
                                role_name: data.data.pay_data.roleName, // 选填,⻆⾊名称
                                role_level: data.data.pay_data.roleLevel, // 选填,⻆⾊等级
                                server_id: data.data.pay_data.serverId, // 必填,服务器ID
                                server_name: data.data.pay_data.serverName, // 选填,服务器名称
                                role_vip: 0 // 选填,VIP等级
                            };

                            Sygame.syPay(pay_data).then(res => {
                                console.log(k[0x7563], res);
                            });
                        } else {
                            callbacks[k[0x755d]] && callbacks[k[0x755d]](1, { errMsg: data.errMsg });
                        }
                    } else {
                        callbacks[k[0x7532]] && callbacks[k[0x7532]](1, { errMsg: k[0x753f] });
                    }
                }
            });
        },

        logCreateRole: function (data) {
            var uid = wx.getStorageSync(k[0x7539]);
            var username = wx.getStorageSync(k[0x753a]);

            var role_info = {};
            role_info[k[0x7564]] = uid;
            role_info[k[0x7565]] = username;
            role_info[k[0x2aed]] = data.roleid;
            role_info[k[0x7566]] = data.rolelevel;
            role_info[k[0x7567]] = data.rolename;
            role_info[k[0x2d90]] = data.serverid;

            if (data.roleid && data.serverid) {
                F$IL680 = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }
            this.log(k[0x6], role_info);

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
                    url: k[0x6565] + HOST + k[0x7568],
                    method: k[0x74e3],
                    dataType: k[0x1733],
                    header: {
                        'content-type': k[0x7536] // 默认值
                    },
                    data: roleInfo,
                    success: function (res) {
                        console.log(k[0x7569] + JSON.stringify(res));
                    }
                });
            }

            this.upRoleInfo(k[0x756a], data);

            if (F$I608L && typeof F$I608L == k[0x11a]) {
                var params = {
                    pf_uid: uid,
                    partner_uid: partner_data.openid,
                    role_id: data.roleid,
                    role_name: data.rolename,
                    server_id: data.serverid,
                    server_name: data.servername,
                    invite_code: F$I608L.invite,
                    F$I608L: JSON.stringify(F$I608L),
                    partner_user_info: JSON.stringify(partner_data)
                };

                wx.request({
                    url: k[0x6565] + HOST + k[0x756b] + config.partner_id + '/' + config.game_pkg,
                    method: k[0x74e3],
                    dataType: k[0x1733],
                    header: {
                        'content-type': k[0x7536] // 默认值
                    },
                    data: params,
                    success: function (res) {
                        console.log(k[0x7549] + JSON.stringify(params));
                        console.log(k[0x754a] + JSON.stringify(res));
                    }
                });
            }
        },

        subscribeMessage: function (tmplIds, callback) {
            console.log(k[0x756c] + tmplIds);
            //获取模板ID
            callbacks[k[0x756d]] = typeof callback == k[0x736d] ? callback : null;
            let data = {
                template: tmplIds[0], // 模版ID 必填
                role_id: F$IL680 ? F$IL680.role_id : '',
                tpl_type: 2 // 当前订阅活动分类：1离线收益提醒;2活动提醒
            };
            Sygame.syGetSubscribe(data).then(res => {
                if (res.status == 1001) {
                    res.errMsg = k[0x756e];
                    res[tmplIds[0]] = res.type;
                    callbacks[k[0x756d]] && callbacks[k[0x756d]](res);
                } else {
                    callbacks[k[0x756d]] && callbacks[k[0x756d]](res);
                }
            });
        },

        //进入游戏
        logEnterGame: function (data) {
            var uid = wx.getStorageSync(k[0x7539]);
            var username = wx.getStorageSync(k[0x753a]);

            var role_info = {};
            role_info[k[0x7564]] = uid;
            role_info[k[0x7565]] = username;
            role_info[k[0x2aed]] = data.roleid;
            role_info[k[0x7566]] = data.rolelevel;
            role_info[k[0x7567]] = data.rolename;
            role_info[k[0x2d90]] = data.serverid;

            if (data.roleid && data.serverid) {
                F$IL680 = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(k[0x16bd], role_info);

            this.upRoleInfo(k[0x756f], data);

            //进入游戏确认邀请成功
            if (F$I608L) {
                this.updateShare(F$I608L.invite, F$I608L.invite_type, F$I608L.is_new, data.roleid, data.serverid, F$I608L.scene);
            }
        },

        //角色升级
        logRoleUpLevel: function (data) {
            var uid = wx.getStorageSync(k[0x7539]);
            var username = wx.getStorageSync(k[0x753a]);

            var role_info = {};
            role_info[k[0x7564]] = uid;
            role_info[k[0x7565]] = username;
            role_info[k[0x2aed]] = data.roleid;
            role_info[k[0x7566]] = data.rolelevel;
            role_info[k[0x7567]] = data.rolename;
            role_info[k[0x2d90]] = data.serverid;

            if (data.roleid && data.serverid) {
                F$IL680 = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(k[0x7570], role_info);
            this.upRoleInfo(k[0x7571], data);
        },

        // 角色上报
        upRoleInfo: function (type, data) {
            var role_info = {
                report_type: type,
                role_id: data.roleid,
                role_name: data.rolename,
                role_level: data.rolelevel,
                server_id: data.serverid,
                server_name: data.servername,
                role_power: data.rolepower ? data.rolepower : 0,
                role_vip: 0
            };

            Sygame.syReportRoleInfo(role_info).then(res => {
                console.log(k[0x7572], res);
            });
        },

        // 渠道-- 获取分享开关配置
        shareConfig: function (callback) {
            var data = {
                'code': 1,
                'msg': k[0x6763],
                'data': {
                    is_push: true
                }
            };
            callback && callback(data);
        },

        shareRecommend: function (callback) {
            let params = {
                page: 0, // 分⻚⻚码,从0开始（必填）
                count: 15 // 分⻚每⻚获取数量 （必填）

                //可参考下列代码段
            };Sygame.syGetBoxList(params).then(res => {
                let ret = {};
                if (res.data.status == 1001) {
                    ret.code = 1;
                    ret.msg = res.data.info;

                    var game_list = Array();
                    var game_list_init = res.data.data;
                    ret.data = {};

                    if (game_list_init.length > 0) {
                        for (let i = 0; i < game_list_init.length; ++i) {
                            game_list[i] = Object();
                            game_list[i][k[0x7573]] = game_list_init[i][k[0x7573]];
                            game_list[i][k[0x3d86]] = i + 1;
                            game_list[i][k[0x7574]] = game_list_init[i][k[0x42d5]];
                            game_list[i][k[0x7575]] = game_list_init[i][k[0x7576]];
                            game_list[i][k[0x7577]] = game_list_init[i][k[0x291]];
                            game_list[i][k[0x7578]] = game_list_init[i][k[0x7578]];
                            game_list[i][k[0x7579]] = game_list_init[i][k[0x7579]];
                            game_list[i][k[0x757a]] = game_list_init[i][k[0x757a]];
                            game_list[i][k[0x757b]] = game_list_init[i][k[0x757b]];
                        }

                        ret.data = game_list;
                    }
                } else {
                    ret.code = res.data.status;
                    ret.msg = res.data.info;
                    ret.data = res.data.data ? res.data.data : {};
                }
                console.log(k[0x757c] + JSON.stringify(ret));

                callback && callback(ret);
            });
        },

        openBox: function (callback) {
            Sygame.syClickOpenBox().then(res => {
                console.log(k[0x757d], res);
                callback && callback(res);
            });
        },

        clickBoxGame: function (data) {
            let params = {
                "game_id": data.game_id,
                "tunnel_id": data.tunnel_id,
                "jump_appid": data.jump_appid,
                "jump_path": data.jump_path
            };

            Sygame.syClickBox(params).then(res => {
                console.log(k[0x757e], res);
            });
        },

        //获取唯一设备码（自定义）
        uuid: function (radix, len) {
            var chars = k[0x757f].split('');
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
            var uuid = wx.getStorageSync(k[0x752d]);
            var idfv = wx.getStorageSync(k[0x752e]);
            var ad_code = wx.getStorageSync(k[0x752f]);

            return {
                game_id: config.game_id,
                game_pkg: config.game_pkg,
                partner_id: config.partner_id,
                partner_label: config.partner_label,
                ad_code: ad_code,
                is_from_min: 1,
                uuid: uuid,
                idfv: idfv,
                dname: system.model,
                mac: k[0x7580],
                net_type: system.wifiSignal == 0 ? k[0x7581] : k[0x7582],
                os_ver: system.system,
                sdk_ver: system.version, //存放的是微信版本号
                game_ver: config.game_ver, //存放的是SDK版本号
                device: system.platform == k[0x74fe] ? 1 : 2
            };
        },

        //统一发送log
        log: function (type, data) {
            var public_data = this.getPublicData();
            for (var key in data) {
                public_data[key] = data[key];
            }

            console.log(k[0x7583] + type);
            console.log(public_data);

            wx.request({
                url: k[0x6565] + HOST + k[0x7584] + type + k[0x7585] + encodeURIComponent(JSON.stringify(public_data))
            });
        },

        getDate: function () {
            var date = new Date();
            return date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate();
        },

        downloadClient: function () {
            wx.openCustomerServiceConversation();
        },

        // 设置 wx.shareMessageToFriend 接口 query 字段的值
        setMessageToFriendQuery: function (data, callback) {
            var cp_activity_id = data.activity_id;
            var result = wx.setMessageToFriendQuery({ shareMessageToFriendScene: cp_activity_id });

            callback && callback(result);
        },

        getFriendShareInfo: function (callback) {
            this.getShareInfo(k[0x7530], function (data) {
                callback && callback({ title: data.title, 'img': data.img });
            });
        }
    };
}

function run(method, data, callback) {
    method in F$IL608 && F$IL608[method](data, callback);
}

exports.init = function (data, callback) {
    run(k[0x170], data, callback);
};

exports.login = function (callback) {
    run(k[0x7532], '', callback);
};

exports.pay = function (data, callback) {
    run(k[0x755d], data, callback);
};
exports.subscribeMessage = function (data, callback) {
    run(k[0x756d], data, callback);
};

exports.openService = function () {
    run(k[0x633e]);
};

exports.logCreateRole = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(k[0x7586], data);
};

exports.logEnterGame = function (serverId, serverName, roleId, roleName, roleLevel, rolecreatetime, extra) {
    var rolepower = extra && extra.rolepower ? extra.rolepower : 0;
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel,
        rolecreatetime: rolecreatetime,
        rolepower: rolepower
    };

    run(k[0x7587], data);
};

exports.logRoleUpLevel = function (serverId, serverName, roleId, roleName, roleLevel, rolecreatetime, extra) {
    var rolepower = extra && extra.rolepower ? extra.rolepower : 0;
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel,
        rolecreatetime: rolecreatetime,
        rolepower: rolepower
    };
    run(k[0x7588], data);
};

exports.share = function (type, data) {
    var cp_activity_id = data && data.activity_id ? data.activity_id : '';

    var params = {
        type: type,
        cp_activity_id: cp_activity_id
    };

    run(k[0x7545], params);
};

exports.msgCheck = function (data, callback) {
    run(k[0x3041], data, callback);
};

exports.shareConfig = function (callback) {
    run(k[0x7589], callback);
};

exports.shareRecommend = function (callback) {
    run(k[0x758a], callback);
};

exports.openBox = function (callback) {
    run(k[0x149d], callback);
};

exports.clickBoxGame = function (data) {
    run(k[0x758b], data);
};

exports.downloadClient = function () {
    run(k[0x758c]);
};

exports.getConfig = function () {
    return {
        game_id: config.game_id,
        game_pkg: config.game_pkg,
        partner_id: config.partner_id
    };
};

exports.getPublicData = function () {
    run(k[0x758d]);
};

exports.setMessageToFriendQuery = function (data, callback) {
    run(k[0x758e], data, callback);
};

exports.getFriendShareInfo = function (callback) {
    run(k[0x758f], callback);
};