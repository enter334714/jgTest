var K = wx.$S;
import Sygame from './stts';
window[K[329258]] = Sygame;
var config = {
    game_id: K[329259],
    game_pkg: K[329260], //盛也马甲包-王女异闻录HD
    partner_label: K[329261],
    partner_id: K[329262],
    game_ver: K[329263],
    is_auth: false, //授权登录
    tmpId: { 1: K[329264], 2: K[329265], 3: K[329266] // 订阅的类型 和 模板id
    } };
window.config = config;
var s1MX4TP = s1M4PTX();
var HOST = K[329267];
var s1MX4PT = null;
var s1M4TPX = null;
var partner_user_data = {};
var user_invite_by_activity = null;
var checkHandler = null;
var loginHandler = null;
var requestCallback = false;

function s1M4PTX() {
    var callbacks = {};
    return {
        order_data: {},
        init: function (ops, callback) {
            var game_ver = ops && ops.game_ver ? ops.game_ver : 0;
            console.log(K[329268]);
            var self = this;

            var uuid = wx.getStorageSync(K[329269]);
            var is_new;
            if (!uuid) {
                uuid = self.uuid(16, 32);
                wx.setStorageSync(K[329269], uuid);
                is_new = 1;
            } else {
                is_new = 0;
            }
            var idfv = wx.getStorageSync(K[329270]);
            if (!idfv) {
                idfv = self.uuid(16, 32);
                wx.setStorageSync(K[329270], idfv);
            }

            var info = wx.getLaunchOptionsSync();
            var scene = info.scene ? info.scene : '';

            //判断今天是否已经上报过
            if (is_new && info.query && info.query.ad_code) {
                wx.setStorageSync(K[329271], info.query.ad_code);
            }

            var data = {
                install: is_new,
                scene: scene
            };
            self.log(K[300284], data);

            //渠道初始化
            Sygame.init(info);

            //玩家是分享过来的，单独上报给服务器
            var invite = info.query && info.query.invite ? info.query.invite : '';
            var invite_type = info.query && info.query.invite_type ? info.query.invite_type : '';
            var cp_activity_id = info.query && info.query.cp_activity_id ? info.query.cp_activity_id : '';

            // 普通分享不存在活动ID的话  再看下定向分享是否存在
            if (!cp_activity_id) {
                cp_activity_id = info.query && info.query.shareMessageToFriendScene ? info.query.shareMessageToFriendScene : '';
                invite_type = cp_activity_id ? K[329272] : '';
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
                s1M4TPX = {
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
            console.log(K[329273]);
            callbacks[K[328153]] = typeof callback == K[328557] ? callback : null;
            Sygame.syLogin().then(res => {
                console.log(K[329274], res);
                if (res.code === 1001) {
                    partner_user_data = res;
                    self.do_login(partner_user_data);
                } else {
                    callbacks[K[328153]] && callbacks[K[328153]](1, { errMsg: res.message });
                }
            });
        },

        do_login: function (user_info) {
            var self = this;

            var login_data = self.getPublicData();
            login_data[K[329275]] = JSON.stringify(user_info);

            if (s1M4TPX && typeof s1M4TPX == K[300279]) {
                for (var key in s1M4TPX) {
                    login_data[key] = s1M4TPX[key];
                }
            }

            var lastTime = Date.now();
            wx.request({
                url: K[324964] + HOST + K[329276],
                method: K[328123],
                dataType: K[305803],
                header: {
                    'content-type': K[328243] // 默认值
                },
                data: login_data,
                success: function (res) {
                    console.log(K[329277] + JSON.stringify(res));
                    requestCallback = true;
                    if (loginHandler) clearTimeout(loginHandler);
                    loginHandler = null;
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            partner_user_data.openid = data.data.ext;
                            try {
                                wx.setStorageSync(K[329278], data.data.sdk_token);
                                wx.setStorageSync(K[329279], data.data.user_id);
                                wx.setStorageSync(K[329280], data.data.username);
                                if (data.data.ext) {
                                    wx.setStorageSync(K[329281], data.data.ext);
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
                            callbacks[K[328153]] && callbacks[K[328153]](0, userData);
                        } else {
                            callbacks[K[328153]] && callbacks[K[328153]](1, { type: K[329282], errMsg: data.msg, time: Date.now() - lastTime, res: res });
                        }

                        //登录成功，加载右上角分享数据
                        self.getShareInfo(K[329283], function (data) {
                            console.log(K[329284]);
                            wx.onShareAppMessage(function () {
                                //记录开始分享
                                self.logStartShare(K[329283]);
                                return {
                                    title: data.title,
                                    imageUrl: data.img,
                                    query: data.query
                                };
                            });
                        });
                    } else {
                        callbacks[K[328153]] && callbacks[K[328153]](1, { type: K[329282], errMsg: K[329285], time: Date.now() - lastTime, res: res });
                    }
                },
                fail: function (res) {
                    console.log(K[329286]);
                    console.log(res);

                    requestCallback = true;
                    if (loginHandler) clearTimeout(loginHandler);
                    loginHandler = null;
                    callbacks[K[328153]] && callbacks[K[328153]](1, { type: K[329287], errMsg: res.errMsg, time: Date.now() - lastTime, res: res });
                }
            });
            if (!requestCallback) {
                var timeOutFunc = function () {
                    console.log(K[329288]);

                    callbacks[K[328153]] && callbacks[K[328153]](1, { type: K[329289], errMsg: K[329290], time: Date.now() - lastTime });
                    callbacks[K[328153]] = null; //回调后置空，以免success或fail里重复回调
                };
                loginHandler = setTimeout(timeOutFunc, 20000);
            }
        },

        share: function (data) {
            callbacks[K[328214]] = typeof callback == K[328557] ? callback : null;
            var type = data.type || K[328214];
            var cp_activity_id = data.cp_activity_id || '';

            console.log(K[329291] + type);
            var self = this;
            this.getShareInfo(type, function (data) {
                if (cp_activity_id != '' && data.query != '') {
                    data.query = data.query + K[329292] + cp_activity_id;
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
                server_id: s1MX4PT.server_id
            };
            wx.request({
                url: K[324964] + HOST + K[329293] + config.partner_id + '/' + config.game_pkg,
                method: K[328123],
                dataType: K[305803],
                header: {
                    'content-type': K[328243] // 默认值
                },
                data: params,
                success: function (res) {
                    console.log(K[329294] + JSON.stringify(params));
                    console.log(K[329295] + JSON.stringify(res));
                }
            });
        },

        logStartShare: function (type) {
            var sdk_token = wx.getStorageSync(K[329278]);
            wx.request({
                url: K[324964] + HOST + K[329296],
                method: K[328123],
                dataType: K[305803],
                header: {
                    'content-type': K[328243] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    server_id: s1MX4PT ? s1MX4PT.server_id : '',
                    role_id: s1MX4PT ? s1MX4PT.role_id : '',
                    type: type
                },
                success: function (res) {}
            });
        },

        openService: function () {
            wx.openCustomerServiceConversation();
        },

        checkGameVersion: function (game_ver, callback) {
            console.log(K[329297]);
            callbacks[K[307043]] = typeof callback == K[328557] ? callback : null;
            var sdk_token = wx.getStorageSync(K[329278]);
            wx.request({
                url: K[324964] + HOST + K[329298],
                method: K[328123],
                dataType: K[305803],
                header: {
                    'content-type': K[328243] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    game_ver: game_ver
                },
                success: function (res) {
                    console.log(K[329299]);
                    console.log(res);
                    requestCallback = true;
                    if (checkHandler) clearTimeout(checkHandler);
                    checkHandler = null;
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callbacks[K[307043]] && callbacks[K[307043]](data.data);
                        } else {
                            callbacks[K[307043]] && callbacks[K[307043]]({ develop: 0 });
                        }
                    } else {
                        callbacks[K[307043]] && callbacks[K[307043]]({ develop: 0 });
                    }
                },
                fail: function (res) {
                    console.log(K[329300]);
                    console.log(res);
                    requestCallback = true;
                    if (checkHandler) clearTimeout(checkHandler);
                    checkHandler = null;
                    callbacks[K[307043]] && callbacks[K[307043]]({ develop: 0 });
                }
            });
            if (!requestCallback) {
                var timeOutFunc = function () {
                    console.log(K[329301]);
                    callbacks[K[307043]] && callbacks[K[307043]]({ develop: 0 });
                    callbacks[K[307043]] = null; //回调后置空，以免success或fail里重复回调
                };
                checkHandler = setTimeout(timeOutFunc, 10000);
            }
        },

        getShareInfo: function (type, callback) {
            console.log(K[329302]);
            var sdk_token = wx.getStorageSync(K[329278]);
            wx.request({
                url: K[324964] + HOST + K[329303],
                method: K[328123],
                dataType: K[305803],
                header: {
                    'content-type': K[328243] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    type: type,
                    server_id: s1MX4PT ? s1MX4PT.server_id : '',
                    role_id: s1MX4PT ? s1MX4PT.role_id : '',
                    no_log: 1 //设置为1后就不在这个接口打log，交给logStartShare接口
                },
                success: function (res) {
                    console.log(K[329304]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callback && callback(data.data);
                        } else {
                            callbacks[K[328214]] && callbacks[K[328214]](1, {
                                errMsg: K[329305] + data.msg
                            });
                        }
                    } else {
                        callbacks[K[328214]] && callbacks[K[328214]](1, {
                            errMsg: K[329306]
                        });
                    }
                }
            });
        },

        updateShare: function (invite, invite_type, is_new, role_id, server_id, scene) {
            console.log(K[329307]);
            var sdk_token = wx.getStorageSync(K[329278]);
            wx.request({
                url: K[324964] + HOST + K[329308],
                method: K[328123],
                dataType: K[305803],
                header: {
                    'content-type': K[328243] // 默认值
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
                    console.log(K[329309]);
                    console.log(res);
                }
            });
        },

        msgCheck: function (content, callback) {
            console.log(K[329310]);
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
                    console.log(K[329311] + JSON.stringify(res));
                } else {
                    ret.statusCode = 0;
                    ret.data.state = 0;
                    console.log(K[329312] + JSON.stringify(res));
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
            console.log(K[329313], data);
            var self = this;
            callbacks[K[328202]] = typeof callback == K[328557] ? callback : null;
            //先下单
            var sdk_token = wx.getStorageSync(K[329278]);
            var session_key = wx.getStorageSync(K[329281]);
            if (!sdk_token && !session_key) {
                callbacks[K[328202]] && callbacks[K[328202]](1, { errMsg: K[329314] });
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
            public_data[K[329315]] = JSON.stringify(order_data);

            //发起网络请求
            wx.request({
                url: K[324964] + HOST + K[329316],
                method: K[328123],
                dataType: K[305803],
                header: {
                    'content-type': K[328243] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(K[329317], res);

                    if (res.statusCode === 200) {
                        var data = res.data;
                        if (data.state && data.data.pay_data) {
                            console.log(K[329318] + JSON.stringify(data.data.pay_data));

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
                                console.log(K[329319], res);
                            });
                        } else {
                            callbacks[K[328202]] && callbacks[K[328202]](1, { errMsg: data.errMsg });
                        }
                    } else {
                        callbacks[K[328153]] && callbacks[K[328153]](1, { errMsg: K[329285] });
                    }
                }
            });
        },

        logCreateRole: function (data) {
            var uid = wx.getStorageSync(K[329279]);
            var username = wx.getStorageSync(K[329280]);

            var role_info = {};
            role_info[K[329320]] = uid;
            role_info[K[329321]] = username;
            role_info[K[310648]] = data.roleid;
            role_info[K[329322]] = data.rolelevel;
            role_info[K[329323]] = data.rolename;
            role_info[K[311320]] = data.serverid;

            if (data.roleid && data.serverid) {
                s1MX4PT = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }
            this.log(K[300006], role_info);

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
                    url: K[324964] + HOST + K[329324],
                    method: K[328123],
                    dataType: K[305803],
                    header: {
                        'content-type': K[328243] // 默认值
                    },
                    data: roleInfo,
                    success: function (res) {
                        console.log(K[329325] + JSON.stringify(res));
                    }
                });
            }

            this.upRoleInfo(K[329326], data);
            if (s1M4TPX && typeof s1M4TPX == K[300279]) {
                var params = {
                    pf_uid: uid,
                    partner_uid: partner_data.openid,
                    role_id: data.roleid,
                    role_name: data.rolename,
                    server_id: data.serverid,
                    server_name: data.servername,
                    invite_code: s1M4TPX.invite,
                    s1M4TPX: JSON.stringify(s1M4TPX),
                    partner_user_info: JSON.stringify(partner_data)
                };

                wx.request({
                    url: K[324964] + HOST + K[329327] + config.partner_id + '/' + config.game_pkg,
                    method: K[328123],
                    dataType: K[305803],
                    header: {
                        'content-type': K[328243] // 默认值
                    },
                    data: params,
                    success: function (res) {
                        console.log(K[329294] + JSON.stringify(params));
                        console.log(K[329295] + JSON.stringify(res));
                    }
                });
            }
        },
        subscribeMessage: function (tmplIds, callback) {
            console.log(K[329328] + tmplIds);
            //获取模板ID
            callbacks[K[328220]] = typeof callback == K[328557] ? callback : null;
            let data = {
                template: tmplIds[0], // 模版ID 必填
                role_id: s1MX4PT ? s1MX4PT.role_id : '',
                tpl_type: 2 // 当前订阅活动分类：1离线收益提醒;2活动提醒
            };
            Sygame.syGetSubscribe(data).then(res => {
                if (res.status == 1001) {
                    res.errMsg = K[328222];
                    res[tmplIds[0]] = res.type;
                    callbacks[K[328220]] && callbacks[K[328220]](res);
                } else {
                    callbacks[K[328220]] && callbacks[K[328220]](res);
                }
            });
        },

        //进入游戏
        logEnterGame: function (data) {
            var uid = wx.getStorageSync(K[329279]);
            var username = wx.getStorageSync(K[329280]);

            var role_info = {};
            role_info[K[329320]] = uid;
            role_info[K[329321]] = username;
            role_info[K[310648]] = data.roleid;
            role_info[K[329322]] = data.rolelevel;
            role_info[K[329323]] = data.rolename;
            role_info[K[311320]] = data.serverid;

            if (data.roleid && data.serverid) {
                s1MX4PT = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(K[305685], role_info);

            this.upRoleInfo(K[329329], data);

            //进入游戏确认邀请成功
            if (s1M4TPX) {
                this.updateShare(s1M4TPX.invite, s1M4TPX.invite_type, s1M4TPX.is_new, data.roleid, data.serverid, s1M4TPX.scene);
            }
        },

        //角色升级
        logRoleUpLevel: function (data) {
            var uid = wx.getStorageSync(K[329279]);
            var username = wx.getStorageSync(K[329280]);

            var role_info = {};
            role_info[K[329320]] = uid;
            role_info[K[329321]] = username;
            role_info[K[310648]] = data.roleid;
            role_info[K[329322]] = data.rolelevel;
            role_info[K[329323]] = data.rolename;
            role_info[K[311320]] = data.serverid;

            if (data.roleid && data.serverid) {
                s1MX4PT = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(K[329330], role_info);
            this.upRoleInfo(K[329331], data);
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
                console.log(K[329332], res);
            });
        },

        // 渠道-- 获取分享开关配置
        shareConfig: function (callback) {
            var data = {
                'code': 1,
                'msg': K[325557],
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
                            game_list[i][K[329333]] = game_list_init[i][K[329333]];
                            game_list[i][K[315186]] = i + 1;
                            game_list[i][K[329334]] = game_list_init[i][K[316517]];
                            game_list[i][K[329335]] = game_list_init[i][K[329336]];
                            game_list[i][K[329337]] = game_list_init[i][K[300646]];
                            game_list[i][K[329338]] = game_list_init[i][K[329338]];
                            game_list[i][K[329339]] = game_list_init[i][K[329339]];
                            game_list[i][K[329340]] = game_list_init[i][K[329340]];
                            game_list[i][K[329341]] = game_list_init[i][K[329341]];
                        }

                        ret.data = game_list;
                    }
                } else {
                    ret.code = res.data.status;
                    ret.msg = res.data.info;
                    ret.data = res.data.data ? res.data.data : {};
                }
                console.log(K[329342] + JSON.stringify(ret));

                callback && callback(ret);
            });
        },

        openBox: function (callback) {
            Sygame.syClickOpenBox().then(res => {
                console.log(K[329343], res);
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
                console.log(K[329344], res);
            });
        },

        //获取唯一设备码（自定义）
        uuid: function (radix, len) {
            var chars = K[329345].split('');
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
            var uuid = wx.getStorageSync(K[329269]);
            var idfv = wx.getStorageSync(K[329270]);
            var ad_code = wx.getStorageSync(K[329271]);

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
                mac: K[329346],
                net_type: system.wifiSignal == 0 ? '4G' : K[329347],
                os_ver: system.system,
                sdk_ver: system.version, //存放的是微信版本号
                game_ver: config.game_ver, //存放的是SDK版本号
                device: system.platform == K[328044] ? 1 : 2
            };
        },

        //统一发送log
        log: function (type, data) {
            var public_data = this.getPublicData();
            for (var key in data) {
                public_data[key] = data[key];
            }

            console.log(K[329348] + type);
            console.log(public_data);

            wx.request({
                url: K[324964] + HOST + K[329349] + type + K[329350] + encodeURIComponent(JSON.stringify(public_data))
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
            this.getShareInfo(K[329272], function (data) {
                callback && callback({ title: data.title, 'img': data.img });
            });
        }
    };
}

function run(method, data, callback) {
    method in s1MX4TP && s1MX4TP[method](data, callback);
}

exports.init = function (data, callback) {
    run(K[300364], data, callback);
};

exports.login = function (callback) {
    run(K[328153], '', callback);
};

exports.pay = function (data, callback) {
    run(K[328202], data, callback);
};

exports.openService = function () {
    run(K[324426]);
};

exports.logCreateRole = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(K[328209], data);
};
exports.subscribeMessage = function (data, callback) {
    run(K[328220], data, callback);
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

    run(K[328211], data);
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
    run(K[328213], data);
};

exports.share = function (type, data) {
    var cp_activity_id = data && data.activity_id ? data.activity_id : '';

    var params = {
        type: type,
        cp_activity_id: cp_activity_id
    };

    run(K[328214], params);
};

exports.msgCheck = function (data, callback) {
    run(K[311900], data, callback);
};

exports.shareConfig = function (callback) {
    run(K[329351], callback);
};

exports.shareRecommend = function (callback) {
    run(K[329352], callback);
};

exports.openBox = function (callback) {
    run(K[305145], callback);
};

exports.clickBoxGame = function (data) {
    run(K[329353], data);
};

exports.downloadClient = function () {
    run(K[329354]);
};

exports.getConfig = function () {
    return {
        game_id: config.game_id,
        game_pkg: config.game_pkg,
        partner_id: config.partner_id
    };
};

exports.getPublicData = function () {
    run(K[329355]);
};

exports.setMessageToFriendQuery = function (data, callback) {
    run(K[329356], data, callback);
};

exports.getFriendShareInfo = function (callback) {
    run(K[329357], callback);
};