var c = wx.$o;
import Sygame from './ooop';
window[c[248863]] = Sygame;
var config = {
    game_id: c[248864],
    game_pkg: c[248865], //盛也-马甲包-鬼剑豪hd
    partner_label: c[248866],
    partner_id: c[248867],
    game_ver: "14.0.11",
    is_auth: false, //授权登录
    tmpId: { 1: c[248869], 2: c[248870], 3: c[248871] // 订阅的类型 和 模板id
    } };
window.config = config;
var _oQAEU8 = _oQE8UA();
var HOST = c[248872];
var _oQAE8U = null;
var _oQEU8A = null;
var partner_user_data = {};
var user_invite_by_activity = null;
var checkHandler = null;
var loginHandler = null;
var requestCallback = false;

function _oQE8UA() {
    var callbacks = {};
    return {
        order_data: {},
        init: function (ops, callback) {
            var game_ver = ops && ops.game_ver ? ops.game_ver : 0;
            console.log(c[248873]);
            var self = this;

            var uuid = wx.getStorageSync(c[248874]);
            var is_new;
            if (!uuid) {
                uuid = self.uuid(16, 32);
                wx.setStorageSync(c[248874], uuid);
                is_new = 1;
            } else {
                is_new = 0;
            }
            var idfv = wx.getStorageSync(c[248875]);
            if (!idfv) {
                idfv = self.uuid(16, 32);
                wx.setStorageSync(c[248875], idfv);
            }

            var info = wx.getLaunchOptionsSync();
            var scene = info.scene ? info.scene : '';

            //判断今天是否已经上报过
            if (is_new && info.query && info.query.ad_code) {
                wx.setStorageSync(c[248876], info.query.ad_code);
            }

            var data = {
                install: is_new,
                scene: scene
            };
            self.log(c[221053], data);

            //渠道初始化
            Sygame.init(info);

            //玩家是分享过来的，单独上报给服务器
            var invite = info.query && info.query.invite ? info.query.invite : '';
            var invite_type = info.query && info.query.invite_type ? info.query.invite_type : '';
            var cp_activity_id = info.query && info.query.cp_activity_id ? info.query.cp_activity_id : '';

            // 普通分享不存在活动ID的话  再看下定向分享是否存在
            if (!cp_activity_id) {
                cp_activity_id = info.query && info.query.shareMessageToFriendScene ? info.query.shareMessageToFriendScene : '';
                invite_type = cp_activity_id ? c[248877] : '';
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
                _oQEU8A = {
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
            console.log(c[248878]);
            callbacks[c[220658]] = typeof callback == c[248526] ? callback : null;
            Sygame.syLogin().then(res => {
                console.log(c[248879], res);
                if (res.code === 1001) {
                    partner_user_data = res;
                    self.do_login(partner_user_data);
                } else {
                    callbacks[c[220658]] && callbacks[c[220658]](1, { errMsg: res.message });
                }
            });
        },

        do_login: function (user_info) {
            var self = this;

            var login_data = self.getPublicData();
            login_data[c[248880]] = JSON.stringify(user_info);

            if (_oQEU8A && typeof _oQEU8A == c[221048]) {
                for (var key in _oQEU8A) {
                    login_data[key] = _oQEU8A[key];
                }
            }

            var lastTime = Date.now();
            wx.request({
                url: c[245488] + HOST + c[248881],
                method: c[220625],
                dataType: c[226454],
                header: {
                    'content-type': c[220760] // 默认值
                },
                data: login_data,
                success: function (res) {
                    console.log(c[248882] + JSON.stringify(res));
                    requestCallback = true;
                    if (loginHandler) clearTimeout(loginHandler);
                    loginHandler = null;
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            partner_user_data.openid = data.data.ext;
                            try {
                                wx.setStorageSync(c[248883], data.data.sdk_token);
                                wx.setStorageSync(c[248884], data.data.user_id);
                                wx.setStorageSync(c[248885], data.data.username);
                                if (data.data.ext) {
                                    wx.setStorageSync(c[248886], data.data.ext);
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
                            callbacks[c[220658]] && callbacks[c[220658]](0, userData);
                        } else {
                            callbacks[c[220658]] && callbacks[c[220658]](1, { type: c[248887], errMsg: data.msg, time: Date.now() - lastTime, res: res });
                        }

                        //登录成功，加载右上角分享数据
                        self.getShareInfo(c[248888], function (data) {
                            console.log(c[248889]);
                            wx.onShareAppMessage(function () {
                                //记录开始分享
                                self.logStartShare(c[248888]);
                                return {
                                    title: data.title,
                                    imageUrl: data.img,
                                    query: data.query
                                };
                            });
                        });
                    } else {
                        callbacks[c[220658]] && callbacks[c[220658]](1, { type: c[248887], errMsg: c[248890], time: Date.now() - lastTime, res: res });
                    }
                },
                fail: function (res) {
                    console.log(c[248891]);
                    console.log(res);

                    requestCallback = true;
                    if (loginHandler) clearTimeout(loginHandler);
                    loginHandler = null;
                    callbacks[c[220658]] && callbacks[c[220658]](1, { type: c[248892], errMsg: res.errMsg, time: Date.now() - lastTime, res: res });
                }
            });
            if (!requestCallback) {
                var timeOutFunc = function () {
                    console.log(c[248893]);

                    callbacks[c[220658]] && callbacks[c[220658]](1, { type: c[248894], errMsg: c[248895], time: Date.now() - lastTime });
                    callbacks[c[220658]] = null; //回调后置空，以免success或fail里重复回调
                };
                loginHandler = setTimeout(timeOutFunc, 20000);
            }
        },

        share: function (data) {
            callbacks[c[220723]] = typeof callback == c[248526] ? callback : null;
            var type = data.type || c[220723];
            var cp_activity_id = data.cp_activity_id || '';

            console.log(c[248896] + type);
            var self = this;
            this.getShareInfo(type, function (data) {
                if (cp_activity_id != '' && data.query != '') {
                    data.query = data.query + c[248897] + cp_activity_id;
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
                server_id: _oQAE8U.server_id
            };
            wx.request({
                url: c[245488] + HOST + c[248898] + config.partner_id + '/' + config.game_pkg,
                method: c[220625],
                dataType: c[226454],
                header: {
                    'content-type': c[220760] // 默认值
                },
                data: params,
                success: function (res) {
                    console.log(c[248899] + JSON.stringify(params));
                    console.log(c[248900] + JSON.stringify(res));
                }
            });
        },

        logStartShare: function (type) {
            var sdk_token = wx.getStorageSync(c[248883]);
            wx.request({
                url: c[245488] + HOST + c[248901],
                method: c[220625],
                dataType: c[226454],
                header: {
                    'content-type': c[220760] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    server_id: _oQAE8U ? _oQAE8U.server_id : '',
                    role_id: _oQAE8U ? _oQAE8U.role_id : '',
                    type: type
                },
                success: function (res) {}
            });
        },

        openService: function () {
            wx.openCustomerServiceConversation();
        },

        checkGameVersion: function (game_ver, callback) {
            console.log(c[248902]);
            callbacks[c[227687]] = typeof callback == c[248526] ? callback : null;
            var sdk_token = wx.getStorageSync(c[248883]);
            wx.request({
                url: c[245488] + HOST + c[248903],
                method: c[220625],
                dataType: c[226454],
                header: {
                    'content-type': c[220760] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    game_ver: game_ver
                },
                success: function (res) {
                    console.log(c[248904]);
                    console.log(res);
                    requestCallback = true;
                    if (checkHandler) clearTimeout(checkHandler);
                    checkHandler = null;
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callbacks[c[227687]] && callbacks[c[227687]](data.data);
                        } else {
                            callbacks[c[227687]] && callbacks[c[227687]]({ develop: 0 });
                        }
                    } else {
                        callbacks[c[227687]] && callbacks[c[227687]]({ develop: 0 });
                    }
                },
                fail: function (res) {
                    console.log(c[248905]);
                    console.log(res);
                    requestCallback = true;
                    if (checkHandler) clearTimeout(checkHandler);
                    checkHandler = null;
                    callbacks[c[227687]] && callbacks[c[227687]]({ develop: 0 });
                }
            });
            if (!requestCallback) {
                var timeOutFunc = function () {
                    console.log(c[248906]);
                    callbacks[c[227687]] && callbacks[c[227687]]({ develop: 0 });
                    callbacks[c[227687]] = null; //回调后置空，以免success或fail里重复回调
                };
                checkHandler = setTimeout(timeOutFunc, 10000);
            }
        },

        getShareInfo: function (type, callback) {
            console.log(c[248907]);
            var sdk_token = wx.getStorageSync(c[248883]);
            wx.request({
                url: c[245488] + HOST + c[248908],
                method: c[220625],
                dataType: c[226454],
                header: {
                    'content-type': c[220760] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    type: type,
                    server_id: _oQAE8U ? _oQAE8U.server_id : '',
                    role_id: _oQAE8U ? _oQAE8U.role_id : '',
                    no_log: 1 //设置为1后就不在这个接口打log，交给logStartShare接口
                },
                success: function (res) {
                    console.log(c[248909]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callback && callback(data.data);
                        } else {
                            callbacks[c[220723]] && callbacks[c[220723]](1, {
                                errMsg: c[248910] + data.msg
                            });
                        }
                    } else {
                        callbacks[c[220723]] && callbacks[c[220723]](1, {
                            errMsg: c[248911]
                        });
                    }
                }
            });
        },

        updateShare: function (invite, invite_type, is_new, role_id, server_id, scene) {
            console.log(c[248912]);
            var sdk_token = wx.getStorageSync(c[248883]);
            wx.request({
                url: c[245488] + HOST + c[248913],
                method: c[220625],
                dataType: c[226454],
                header: {
                    'content-type': c[220760] // 默认值
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
                    console.log(c[248914]);
                    console.log(res);
                }
            });
        },

        msgCheck: function (content, callback) {
            console.log(c[248915]);
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
                    console.log(c[248916] + JSON.stringify(res));
                } else {
                    ret.statusCode = 0;
                    ret.data.state = 0;
                    console.log(c[248917] + JSON.stringify(res));
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
            console.log(c[248918], data);
            var self = this;
            callbacks[c[220710]] = typeof callback == c[248526] ? callback : null;
            //先下单
            var sdk_token = wx.getStorageSync(c[248883]);
            var session_key = wx.getStorageSync(c[248886]);
            if (!sdk_token && !session_key) {
                callbacks[c[220710]] && callbacks[c[220710]](1, { errMsg: c[248919] });
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
            public_data[c[248920]] = JSON.stringify(order_data);

            //发起网络请求
            wx.request({
                url: c[245488] + HOST + c[248921],
                method: c[220625],
                dataType: c[226454],
                header: {
                    'content-type': c[220760] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(c[248922], res);

                    if (res.statusCode === 200) {
                        var data = res.data;
                        if (data.state && data.data.pay_data) {
                            console.log(c[248923] + JSON.stringify(data.data.pay_data));

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
                                console.log(c[248924], res);
                            });
                        } else {
                            callbacks[c[220710]] && callbacks[c[220710]](1, { errMsg: data.errMsg });
                        }
                    } else {
                        callbacks[c[220658]] && callbacks[c[220658]](1, { errMsg: c[248890] });
                    }
                }
            });
        },

        logCreateRole: function (data) {
            var uid = wx.getStorageSync(c[248884]);
            var username = wx.getStorageSync(c[248885]);

            var role_info = {};
            role_info[c[248925]] = uid;
            role_info[c[248926]] = username;
            role_info[c[231277]] = data.roleid;
            role_info[c[248927]] = data.rolelevel;
            role_info[c[248928]] = data.rolename;
            role_info[c[220023]] = data.serverid;

            if (data.roleid && data.serverid) {
                _oQAE8U = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }
            this.log(c[220150], role_info);

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
                    url: c[245488] + HOST + c[248929],
                    method: c[220625],
                    dataType: c[226454],
                    header: {
                        'content-type': c[220760] // 默认值
                    },
                    data: roleInfo,
                    success: function (res) {
                        console.log(c[248930] + JSON.stringify(res));
                    }
                });
            }

            this.upRoleInfo(c[248931], data);
            if (_oQEU8A && typeof _oQEU8A == c[221048]) {
                var params = {
                    pf_uid: uid,
                    partner_uid: partner_data.openid,
                    role_id: data.roleid,
                    role_name: data.rolename,
                    server_id: data.serverid,
                    server_name: data.servername,
                    invite_code: _oQEU8A.invite,
                    _oQEU8A: JSON.stringify(_oQEU8A),
                    partner_user_info: JSON.stringify(partner_data)
                };

                wx.request({
                    url: c[245488] + HOST + c[248932] + config.partner_id + '/' + config.game_pkg,
                    method: c[220625],
                    dataType: c[226454],
                    header: {
                        'content-type': c[220760] // 默认值
                    },
                    data: params,
                    success: function (res) {
                        console.log(c[248899] + JSON.stringify(params));
                        console.log(c[248900] + JSON.stringify(res));
                    }
                });
            }
        },

        subscribeMessage: function (tmplIds, callback) {
            console.log(c[248933] + tmplIds);
            //获取模板ID
            callbacks[c[220732]] = typeof callback == c[248526] ? callback : null;
            let data = {
                template: tmplIds[0], // 模版ID 必填
                role_id: _oQAE8U ? _oQAE8U.role_id : '',
                tpl_type: 2 // 当前订阅活动分类：1离线收益提醒;2活动提醒
            };
            Sygame.syGetSubscribe(data).then(res => {
                if (res.status == 1001) {
                    res.errMsg = c[220734];
                    res[tmplIds[0]] = res.type;
                    callbacks[c[220732]] && callbacks[c[220732]](res);
                } else {
                    callbacks[c[220732]] && callbacks[c[220732]](res);
                }
            });
        },

        //进入游戏
        logEnterGame: function (data) {
            var uid = wx.getStorageSync(c[248884]);
            var username = wx.getStorageSync(c[248885]);

            var role_info = {};
            role_info[c[248925]] = uid;
            role_info[c[248926]] = username;
            role_info[c[231277]] = data.roleid;
            role_info[c[248927]] = data.rolelevel;
            role_info[c[248928]] = data.rolename;
            role_info[c[220023]] = data.serverid;

            if (data.roleid && data.serverid) {
                _oQAE8U = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(c[226336], role_info);

            this.upRoleInfo(c[248934], data);

            //进入游戏确认邀请成功
            if (_oQEU8A) {
                this.updateShare(_oQEU8A.invite, _oQEU8A.invite_type, _oQEU8A.is_new, data.roleid, data.serverid, _oQEU8A.scene);
            }
        },

        //角色升级
        logRoleUpLevel: function (data) {
            var uid = wx.getStorageSync(c[248884]);
            var username = wx.getStorageSync(c[248885]);

            var role_info = {};
            role_info[c[248925]] = uid;
            role_info[c[248926]] = username;
            role_info[c[231277]] = data.roleid;
            role_info[c[248927]] = data.rolelevel;
            role_info[c[248928]] = data.rolename;
            role_info[c[220023]] = data.serverid;

            if (data.roleid && data.serverid) {
                _oQAE8U = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(c[248935], role_info);
            this.upRoleInfo(c[248936], data);
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
                console.log(c[248937], res);
            });
        },

        // 渠道-- 获取分享开关配置
        shareConfig: function (callback) {
            var data = {
                'code': 1,
                'msg': c[246075],
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
                            game_list[i][c[248938]] = game_list_init[i][c[248938]];
                            game_list[i][c[235775]] = i + 1;
                            game_list[i][c[248939]] = game_list_init[i][c[237107]];
                            game_list[i][c[248940]] = game_list_init[i][c[248941]];
                            game_list[i][c[248942]] = game_list_init[i][c[220421]];
                            game_list[i][c[248943]] = game_list_init[i][c[248943]];
                            game_list[i][c[248944]] = game_list_init[i][c[248944]];
                            game_list[i][c[248945]] = game_list_init[i][c[248945]];
                            game_list[i][c[248946]] = game_list_init[i][c[248946]];
                        }

                        ret.data = game_list;
                    }
                } else {
                    ret.code = res.data.status;
                    ret.msg = res.data.info;
                    ret.data = res.data.data ? res.data.data : {};
                }
                console.log(c[248947] + JSON.stringify(ret));

                callback && callback(ret);
            });
        },

        openBox: function (callback) {
            Sygame.syClickOpenBox().then(res => {
                console.log(c[248948], res);
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
                console.log(c[248949], res);
            });
        },

        //获取唯一设备码（自定义）
        uuid: function (radix, len) {
            var chars = c[248950].split('');
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
            var uuid = wx.getStorageSync(c[248874]);
            var idfv = wx.getStorageSync(c[248875]);
            var ad_code = wx.getStorageSync(c[248876]);

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
                mac: c[248951],
                net_type: system.wifiSignal == 0 ? '4G' : c[248952],
                os_ver: system.system,
                sdk_ver: system.version, //存放的是微信版本号
                game_ver: config.game_ver, //存放的是SDK版本号
                device: system.platform == c[220110] ? 1 : 2
            };
        },

        //统一发送log
        log: function (type, data) {
            var public_data = this.getPublicData();
            for (var key in data) {
                public_data[key] = data[key];
            }

            console.log(c[248953] + type);
            console.log(public_data);

            wx.request({
                url: c[245488] + HOST + c[248954] + type + c[248955] + encodeURIComponent(JSON.stringify(public_data))
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
            this.getShareInfo(c[248877], function (data) {
                callback && callback({ title: data.title, 'img': data.img });
            });
        }
    };
}

function run(method, data, callback) {
    method in _oQAEU8 && _oQAEU8[method](data, callback);
}

exports.init = function (data, callback) {
    run(c[220479], data, callback);
};

exports.login = function (callback) {
    run(c[220658], '', callback);
};

exports.pay = function (data, callback) {
    run(c[220710], data, callback);
};

exports.openService = function () {
    run(c[220724]);
};

exports.logCreateRole = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(c[220718], data);
};

exports.subscribeMessage = function (data, callback) {
    run(c[220732], data, callback);
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

    run(c[220720], data);
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
    run(c[220722], data);
};

exports.share = function (type, data) {
    var cp_activity_id = data && data.activity_id ? data.activity_id : '';

    var params = {
        type: type,
        cp_activity_id: cp_activity_id
    };

    run(c[220723], params);
};

exports.msgCheck = function (data, callback) {
    run(c[220609], data, callback);
};

exports.shareConfig = function (callback) {
    run(c[248956], callback);
};

exports.shareRecommend = function (callback) {
    run(c[248957], callback);
};

exports.openBox = function (callback) {
    run(c[225795], callback);
};

exports.clickBoxGame = function (data) {
    run(c[248958], data);
};

exports.downloadClient = function () {
    run(c[248959]);
};

exports.getConfig = function () {
    return {
        game_id: config.game_id,
        game_pkg: config.game_pkg,
        partner_id: config.partner_id
    };
};

exports.getPublicData = function () {
    run(c[248960]);
};

exports.setMessageToFriendQuery = function (data, callback) {
    run(c[248961], data, callback);
};

exports.getFriendShareInfo = function (callback) {
    run(c[248962], callback);
};