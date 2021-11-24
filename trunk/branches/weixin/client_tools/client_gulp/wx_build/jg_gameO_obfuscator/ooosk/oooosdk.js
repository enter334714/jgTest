var c = wx.$o;
import Sygame from './ooop';
window[c[247909]] = Sygame;
var config = {
    game_id: c[247910],
    game_pkg: c[247911], //盛也-马甲包-鬼剑豪hd
    partner_label: c[247912],
    partner_id: c[247913],
    game_ver: c[247914],
    is_auth: false, //授权登录
    tmpId: { 1: c[247915], 2: c[247916], 3: c[247917] // 订阅的类型 和 模板id
    } };
window.config = config;
var _oQAE8U = _oQE8AU();
var HOST = c[247918];
var _oQEU8A = null;
var _oQEUA8 = null;
var partner_user_data = {};
var user_invite_by_activity = null;
var checkHandler = null;
var loginHandler = null;
var requestCallback = false;

function _oQE8AU() {
    var callbacks = {};
    return {
        order_data: {},
        init: function (ops, callback) {
            var game_ver = ops && ops.game_ver ? ops.game_ver : 0;
            console.log(c[247919]);
            var self = this;

            var uuid = wx.getStorageSync(c[247920]);
            var is_new;
            if (!uuid) {
                uuid = self.uuid(16, 32);
                wx.setStorageSync(c[247920], uuid);
                is_new = 1;
            } else {
                is_new = 0;
            }
            var idfv = wx.getStorageSync(c[247921]);
            if (!idfv) {
                idfv = self.uuid(16, 32);
                wx.setStorageSync(c[247921], idfv);
            }

            var info = wx.getLaunchOptionsSync();
            var scene = info.scene ? info.scene : '';

            //判断今天是否已经上报过
            if (is_new && info.query && info.query.ad_code) {
                wx.setStorageSync(c[247922], info.query.ad_code);
            }

            var data = {
                install: is_new,
                scene: scene
            };
            self.log(c[220281], data);

            //渠道初始化
            Sygame.init(info);

            //玩家是分享过来的，单独上报给服务器
            var invite = info.query && info.query.invite ? info.query.invite : '';
            var invite_type = info.query && info.query.invite_type ? info.query.invite_type : '';
            var cp_activity_id = info.query && info.query.cp_activity_id ? info.query.cp_activity_id : '';

            // 普通分享不存在活动ID的话  再看下定向分享是否存在
            if (!cp_activity_id) {
                cp_activity_id = info.query && info.query.shareMessageToFriendScene ? info.query.shareMessageToFriendScene : '';
                invite_type = cp_activity_id ? c[247923] : '';
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
                _oQEUA8 = {
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
            console.log(c[247924]);
            callbacks[c[247774]] = typeof callback == c[247925] ? callback : null;
            Sygame.syLogin().then(res => {
                console.log(c[247926], res);
                if (res.code === 1001) {
                    partner_user_data = res;
                    self.do_login(partner_user_data);
                } else {
                    callbacks[c[247774]] && callbacks[c[247774]](1, { errMsg: res.message });
                }
            });
        },

        do_login: function (user_info) {
            var self = this;

            var login_data = self.getPublicData();
            login_data[c[247927]] = JSON.stringify(user_info);

            if (_oQEUA8 && typeof _oQEUA8 == c[220276]) {
                for (var key in _oQEUA8) {
                    login_data[key] = _oQEUA8[key];
                }
            }

            var lastTime = Date.now();
            wx.request({
                url: c[244559] + HOST + c[247928],
                method: c[247744],
                dataType: c[225764],
                header: {
                    'content-type': c[247859] // 默认值
                },
                data: login_data,
                success: function (res) {
                    console.log(c[247929] + JSON.stringify(res));
                    requestCallback = true;
                    if (loginHandler) clearTimeout(loginHandler);
                    loginHandler = null;
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            partner_user_data.openid = data.data.ext;
                            try {
                                wx.setStorageSync(c[247930], data.data.sdk_token);
                                wx.setStorageSync(c[247931], data.data.user_id);
                                wx.setStorageSync(c[247932], data.data.username);
                                if (data.data.ext) {
                                    wx.setStorageSync(c[247933], data.data.ext);
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
                            callbacks[c[247774]] && callbacks[c[247774]](0, userData);
                        } else {
                            callbacks[c[247774]] && callbacks[c[247774]](1, { type: c[247934], errMsg: data.msg, time: Date.now() - lastTime, res: res });
                        }

                        //登录成功，加载右上角分享数据
                        self.getShareInfo(c[247935], function (data) {
                            console.log(c[247936]);
                            wx.onShareAppMessage(function () {
                                //记录开始分享
                                self.logStartShare(c[247935]);
                                return {
                                    title: data.title,
                                    imageUrl: data.img,
                                    query: data.query
                                };
                            });
                        });
                    } else {
                        callbacks[c[247774]] && callbacks[c[247774]](1, { type: c[247934], errMsg: c[247937], time: Date.now() - lastTime, res: res });
                    }
                },
                fail: function (res) {
                    console.log(c[247938]);
                    console.log(res);

                    requestCallback = true;
                    if (loginHandler) clearTimeout(loginHandler);
                    loginHandler = null;
                    callbacks[c[247774]] && callbacks[c[247774]](1, { type: c[247939], errMsg: res.errMsg, time: Date.now() - lastTime, res: res });
                }
            });
            if (!requestCallback) {
                var timeOutFunc = function () {
                    console.log(c[247940]);

                    callbacks[c[247774]] && callbacks[c[247774]](1, { type: c[247941], errMsg: c[247942], time: Date.now() - lastTime });
                    callbacks[c[247774]] = null; //回调后置空，以免success或fail里重复回调
                };
                loginHandler = setTimeout(timeOutFunc, 20000);
            }
        },

        share: function (data) {
            callbacks[c[247830]] = typeof callback == c[247925] ? callback : null;
            var type = data.type || c[247830];
            var cp_activity_id = data.cp_activity_id || '';

            console.log(c[247943] + type);
            var self = this;
            this.getShareInfo(type, function (data) {
                if (cp_activity_id != '' && data.query != '') {
                    data.query = data.query + c[247944] + cp_activity_id;
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
            var sdk_token = wx.getStorageSync(c[247930]);
            wx.request({
                url: c[244559] + HOST + c[247945],
                method: c[247744],
                dataType: c[225764],
                header: {
                    'content-type': c[247859] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    server_id: _oQEU8A ? _oQEU8A.server_id : '',
                    role_id: _oQEU8A ? _oQEU8A.role_id : '',
                    type: type
                },
                success: function (res) {}
            });
        },

        openService: function () {
            wx.openCustomerServiceConversation();
        },

        checkGameVersion: function (game_ver, callback) {
            console.log(c[247946]);
            callbacks[c[226993]] = typeof callback == c[247925] ? callback : null;
            var sdk_token = wx.getStorageSync(c[247930]);
            wx.request({
                url: c[244559] + HOST + c[247947],
                method: c[247744],
                dataType: c[225764],
                header: {
                    'content-type': c[247859] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    game_ver: game_ver
                },
                success: function (res) {
                    console.log(c[247948]);
                    console.log(res);
                    requestCallback = true;
                    if (checkHandler) clearTimeout(checkHandler);
                    checkHandler = null;
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callbacks[c[226993]] && callbacks[c[226993]](data.data);
                        } else {
                            callbacks[c[226993]] && callbacks[c[226993]]({ develop: 0 });
                        }
                    } else {
                        callbacks[c[226993]] && callbacks[c[226993]]({ develop: 0 });
                    }
                },
                fail: function (res) {
                    console.log(c[247949]);
                    console.log(res);
                    requestCallback = true;
                    if (checkHandler) clearTimeout(checkHandler);
                    checkHandler = null;
                    callbacks[c[226993]] && callbacks[c[226993]]({ develop: 0 });
                }
            });
            if (!requestCallback) {
                var timeOutFunc = function () {
                    console.log(c[247950]);
                    callbacks[c[226993]] && callbacks[c[226993]]({ develop: 0 });
                    callbacks[c[226993]] = null; //回调后置空，以免success或fail里重复回调
                };
                checkHandler = setTimeout(timeOutFunc, 10000);
            }
        },

        getShareInfo: function (type, callback) {
            console.log(c[247951]);
            var sdk_token = wx.getStorageSync(c[247930]);
            wx.request({
                url: c[244559] + HOST + c[247952],
                method: c[247744],
                dataType: c[225764],
                header: {
                    'content-type': c[247859] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    type: type,
                    server_id: _oQEU8A ? _oQEU8A.server_id : '',
                    role_id: _oQEU8A ? _oQEU8A.role_id : '',
                    no_log: 1 //设置为1后就不在这个接口打log，交给logStartShare接口
                },
                success: function (res) {
                    console.log(c[247953]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callback && callback(data.data);
                        } else {
                            callbacks[c[247830]] && callbacks[c[247830]](1, {
                                errMsg: c[247954] + data.msg
                            });
                        }
                    } else {
                        callbacks[c[247830]] && callbacks[c[247830]](1, {
                            errMsg: c[247955]
                        });
                    }
                }
            });
        },

        updateShare: function (invite, invite_type, is_new, role_id, server_id, scene) {
            console.log(c[247956]);
            var sdk_token = wx.getStorageSync(c[247930]);
            wx.request({
                url: c[244559] + HOST + c[247957],
                method: c[247744],
                dataType: c[225764],
                header: {
                    'content-type': c[247859] // 默认值
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
                    console.log(c[247958]);
                    console.log(res);
                }
            });
        },

        msgCheck: function (content, callback) {
            console.log(c[247959]);
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
                    console.log(c[247960] + JSON.stringify(res));
                } else {
                    ret.statusCode = 0;
                    ret.data.state = 0;
                    console.log(c[247961] + JSON.stringify(res));
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
            console.log(c[247962], data);
            var self = this;
            callbacks[c[247818]] = typeof callback == c[247925] ? callback : null;
            //先下单
            var sdk_token = wx.getStorageSync(c[247930]);
            var session_key = wx.getStorageSync(c[247933]);
            if (!sdk_token && !session_key) {
                callbacks[c[247818]] && callbacks[c[247818]](1, { errMsg: c[247963] });
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
            public_data[c[247964]] = JSON.stringify(order_data);

            //发起网络请求
            wx.request({
                url: c[244559] + HOST + c[247965],
                method: c[247744],
                dataType: c[225764],
                header: {
                    'content-type': c[247859] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(c[247966], res);

                    if (res.statusCode === 200) {
                        var data = res.data;
                        if (data.state && data.data.pay_data) {
                            console.log(c[247967] + JSON.stringify(data.data.pay_data));

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
                                console.log(c[247968], res);
                            });
                        } else {
                            callbacks[c[247818]] && callbacks[c[247818]](1, { errMsg: data.errMsg });
                        }
                    } else {
                        callbacks[c[247774]] && callbacks[c[247774]](1, { errMsg: c[247937] });
                    }
                }
            });
        },

        logCreateRole: function (data) {
            var uid = wx.getStorageSync(c[247931]);
            var username = wx.getStorageSync(c[247932]);

            var role_info = {};
            role_info[c[247969]] = uid;
            role_info[c[247970]] = username;
            role_info[c[230563]] = data.roleid;
            role_info[c[247971]] = data.rolelevel;
            role_info[c[247972]] = data.rolename;
            role_info[c[231219]] = data.serverid;

            if (data.roleid && data.serverid) {
                _oQEU8A = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }
            this.log(c[220006], role_info);

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
                    url: c[244559] + HOST + c[247973],
                    method: c[247744],
                    dataType: c[225764],
                    header: {
                        'content-type': c[247859] // 默认值
                    },
                    data: roleInfo,
                    success: function (res) {
                        console.log(c[247974] + JSON.stringify(res));
                    }
                });
            }

            this.upRoleInfo(c[247975], data);
            if (_oQEUA8 && typeof _oQEUA8 == c[220276]) {
                var params = {
                    pf_uid: uid,
                    partner_uid: partner_data.openid,
                    role_id: data.roleid,
                    role_name: data.rolename,
                    server_id: data.serverid,
                    server_name: data.servername,
                    invite_code: _oQEUA8.invite,
                    _oQEUA8: JSON.stringify(_oQEUA8),
                    partner_user_info: JSON.stringify(partner_data)
                };

                wx.request({
                    url: c[244559] + HOST + c[247976] + config.partner_id + '/' + config.game_pkg,
                    method: c[247744],
                    dataType: c[225764],
                    header: {
                        'content-type': c[247859] // 默认值
                    },
                    data: params,
                    success: function (res) {
                        console.log(c[247977] + JSON.stringify(params));
                        console.log(c[247978] + JSON.stringify(res));
                    }
                });
            }
        },

        subscribeMessage: function (tmplIds, callback) {
            console.log(c[247979] + tmplIds);
            //获取模板ID
            callbacks[c[247836]] = typeof callback == c[247925] ? callback : null;
            let data = {
                template: tmplIds[0], // 模版ID 必填
                role_id: _oQEU8A ? _oQEU8A.role_id : '',
                tpl_type: 2 // 当前订阅活动分类：1离线收益提醒;2活动提醒
            };
            Sygame.syGetSubscribe(data).then(res => {
                if (res.status == 1001) {
                    res.errMsg = c[247838];
                    res[tmplIds[0]] = res.type;
                    callbacks[c[247836]] && callbacks[c[247836]](res);
                } else {
                    callbacks[c[247836]] && callbacks[c[247836]](res);
                }
            });
        },

        //进入游戏
        logEnterGame: function (data) {
            var uid = wx.getStorageSync(c[247931]);
            var username = wx.getStorageSync(c[247932]);

            var role_info = {};
            role_info[c[247969]] = uid;
            role_info[c[247970]] = username;
            role_info[c[230563]] = data.roleid;
            role_info[c[247971]] = data.rolelevel;
            role_info[c[247972]] = data.rolename;
            role_info[c[231219]] = data.serverid;

            if (data.roleid && data.serverid) {
                _oQEU8A = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(c[225645], role_info);

            this.upRoleInfo(c[247980], data);

            //进入游戏确认邀请成功
            if (_oQEUA8) {
                this.updateShare(_oQEUA8.invite, _oQEUA8.invite_type, _oQEUA8.is_new, data.roleid, data.serverid, _oQEUA8.scene);
            }
        },

        //角色升级
        logRoleUpLevel: function (data) {
            var uid = wx.getStorageSync(c[247931]);
            var username = wx.getStorageSync(c[247932]);

            var role_info = {};
            role_info[c[247969]] = uid;
            role_info[c[247970]] = username;
            role_info[c[230563]] = data.roleid;
            role_info[c[247971]] = data.rolelevel;
            role_info[c[247972]] = data.rolename;
            role_info[c[231219]] = data.serverid;

            if (data.roleid && data.serverid) {
                _oQEU8A = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(c[247981], role_info);
            this.upRoleInfo(c[247982], data);
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
                console.log(c[247983], res);
            });
        },

        // 渠道-- 获取分享开关配置
        shareConfig: function (callback) {
            var data = {
                'code': 1,
                'msg': c[245074],
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
                            game_list[i][c[247984]] = game_list_init[i][c[247984]];
                            game_list[i][c[234923]] = i + 1;
                            game_list[i][c[247985]] = game_list_init[i][c[236255]];
                            game_list[i][c[247986]] = game_list_init[i][c[247987]];
                            game_list[i][c[247988]] = game_list_init[i][c[220644]];
                            game_list[i][c[247989]] = game_list_init[i][c[247989]];
                            game_list[i][c[247990]] = game_list_init[i][c[247990]];
                            game_list[i][c[247991]] = game_list_init[i][c[247991]];
                            game_list[i][c[247992]] = game_list_init[i][c[247992]];
                        }

                        ret.data = game_list;
                    }
                } else {
                    ret.code = res.data.status;
                    ret.msg = res.data.info;
                    ret.data = res.data.data ? res.data.data : {};
                }
                console.log(c[247993] + JSON.stringify(ret));

                callback && callback(ret);
            });
        },

        openBox: function (callback) {
            Sygame.syClickOpenBox().then(res => {
                console.log(c[247994], res);
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
                console.log(c[247995], res);
            });
        },

        //获取唯一设备码（自定义）
        uuid: function (radix, len) {
            var chars = c[247996].split('');
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
            var uuid = wx.getStorageSync(c[247920]);
            var idfv = wx.getStorageSync(c[247921]);
            var ad_code = wx.getStorageSync(c[247922]);

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
                mac: c[247997],
                net_type: system.wifiSignal == 0 ? '4G' : c[247998],
                os_ver: system.system,
                sdk_ver: system.version, //存放的是微信版本号
                game_ver: config.game_ver, //存放的是SDK版本号
                device: system.platform == c[247480] ? 1 : 2
            };
        },

        //统一发送log
        log: function (type, data) {
            var public_data = this.getPublicData();
            for (var key in data) {
                public_data[key] = data[key];
            }

            console.log(c[247999] + type);
            console.log(public_data);

            wx.request({
                url: c[244559] + HOST + c[248000] + type + c[248001] + encodeURIComponent(JSON.stringify(public_data))
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
            this.getShareInfo(c[247923], function (data) {
                callback && callback({ title: data.title, 'img': data.img });
            });
        }
    };
}

function run(method, data, callback) {
    method in _oQAE8U && _oQAE8U[method](data, callback);
}

exports.init = function (data, callback) {
    run(c[220361], data, callback);
};

exports.login = function (callback) {
    run(c[247774], '', callback);
};

exports.pay = function (data, callback) {
    run(c[247818], data, callback);
};

exports.openService = function () {
    run(c[244023]);
};

exports.logCreateRole = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(c[247825], data);
};

exports.subscribeMessage = function (data, callback) {
    run(c[247836], data, callback);
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

    run(c[247827], data);
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
    run(c[247829], data);
};

exports.share = function (type, data) {
    var cp_activity_id = data && data.activity_id ? data.activity_id : '';

    var params = {
        type: type,
        cp_activity_id: cp_activity_id
    };

    run(c[247830], params);
};

exports.msgCheck = function (data, callback) {
    run(c[231685], data, callback);
};

exports.shareConfig = function (callback) {
    run(c[248002], callback);
};

exports.shareRecommend = function (callback) {
    run(c[248003], callback);
};

exports.openBox = function (callback) {
    run(c[225103], callback);
};

exports.clickBoxGame = function (data) {
    run(c[248004], data);
};

exports.downloadClient = function () {
    run(c[248005]);
};

exports.getConfig = function () {
    return {
        game_id: config.game_id,
        game_pkg: config.game_pkg,
        partner_id: config.partner_id
    };
};

exports.getPublicData = function () {
    run(c[248006]);
};

exports.setMessageToFriendQuery = function (data, callback) {
    run(c[248007], data, callback);
};

exports.getFriendShareInfo = function (callback) {
    run(c[248008], callback);
};