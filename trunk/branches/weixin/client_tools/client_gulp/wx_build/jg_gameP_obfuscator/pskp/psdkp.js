var E = wx.$p;
import Sygame from './poop';
window[E[272488]] = Sygame;
var config = {
    game_id: E[272489],
    game_pkg: E[272490], //盛也马甲包-盛也-柔情小师妹福利版
    partner_label: E[272491],
    partner_id: E[272492],
    game_ver: E[272493],
    is_auth: false, //授权登录
    tmpId: { 1: E[272494], 2: E[272495], 3: E[272496] // 订阅的类型 和 模板id
    } };
window.config = config;
var _pX$3F2 = _pX32F$();
var HOST = E[272497];
var _pX$32F = null;
var _pX3F2$ = null;
var partner_user_data = {};
var user_invite_by_activity = null;
var checkHandler = null;
var loginHandler = null;
var requestCallback = false;

function _pX32F$() {
    var callbacks = {};
    return {
        order_data: {},
        init: function (ops, callback) {
            var game_ver = ops && ops.game_ver ? ops.game_ver : 0;
            console.log(E[272498]);
            var self = this;

            var uuid = wx.getStorageSync(E[272499]);
            var is_new;
            if (!uuid) {
                uuid = self.uuid(16, 32);
                wx.setStorageSync(E[272499], uuid);
                is_new = 1;
            } else {
                is_new = 0;
            }
            var idfv = wx.getStorageSync(E[272500]);
            if (!idfv) {
                idfv = self.uuid(16, 32);
                wx.setStorageSync(E[272500], idfv);
            }

            var info = wx.getLaunchOptionsSync();
            var scene = info.scene ? info.scene : '';

            //判断今天是否已经上报过
            if (is_new && info.query && info.query.ad_code) {
                wx.setStorageSync(E[272501], info.query.ad_code);
            }

            var data = {
                install: is_new,
                scene: scene
            };
            self.log(E[241122], data);

            //渠道初始化
            Sygame.init(info);

            //玩家是分享过来的，单独上报给服务器
            var invite = info.query && info.query.invite ? info.query.invite : '';
            var invite_type = info.query && info.query.invite_type ? info.query.invite_type : '';
            var cp_activity_id = info.query && info.query.cp_activity_id ? info.query.cp_activity_id : '';

            // 普通分享不存在活动ID的话  再看下定向分享是否存在
            if (!cp_activity_id) {
                cp_activity_id = info.query && info.query.shareMessageToFriendScene ? info.query.shareMessageToFriendScene : '';
                invite_type = cp_activity_id ? E[272502] : '';
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
                _pX3F2$ = {
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
            console.log(E[272503]);
            callbacks[E[240542]] = typeof callback == E[241566] ? callback : null;
            Sygame.syLogin().then(res => {
                console.log(E[272504], res);
                if (res.code === 1001) {
                    partner_user_data = res;
                    self.do_login(partner_user_data);
                } else {
                    callbacks[E[240542]] && callbacks[E[240542]](1, { errMsg: res.message });
                }
            });
        },

        do_login: function (user_info) {
            var self = this;

            var login_data = self.getPublicData();
            login_data[E[272505]] = JSON.stringify(user_info);

            if (_pX3F2$ && typeof _pX3F2$ == E[241689]) {
                for (var key in _pX3F2$) {
                    login_data[key] = _pX3F2$[key];
                }
            }

            var lastTime = Date.now();
            wx.request({
                url: E[268778] + HOST + E[272506],
                method: E[240510],
                dataType: E[241317],
                header: {
                    'content-type': E[240653] // 默认值
                },
                data: login_data,
                success: function (res) {
                    console.log(E[272507] + JSON.stringify(res));
                    requestCallback = true;
                    if (loginHandler) clearTimeout(loginHandler);
                    loginHandler = null;
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            partner_user_data.openid = data.data.ext;
                            try {
                                wx.setStorageSync(E[272508], data.data.sdk_token);
                                wx.setStorageSync(E[272509], data.data.user_id);
                                wx.setStorageSync(E[272510], data.data.username);
                                if (data.data.ext) {
                                    wx.setStorageSync(E[272511], data.data.ext);
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
                            callbacks[E[240542]] && callbacks[E[240542]](0, userData);
                        } else {
                            callbacks[E[240542]] && callbacks[E[240542]](1, { type: E[272512], errMsg: data.msg, time: Date.now() - lastTime, res: res });
                        }

                        //登录成功，加载右上角分享数据
                        self.getShareInfo(E[272513], function (data) {
                            console.log(E[272514]);
                            wx.onShareAppMessage(function () {
                                //记录开始分享
                                self.logStartShare(E[272513]);
                                return {
                                    title: data.title,
                                    imageUrl: data.img,
                                    query: data.query
                                };
                            });
                        });
                    } else {
                        callbacks[E[240542]] && callbacks[E[240542]](1, { type: E[272512], errMsg: E[272515], time: Date.now() - lastTime, res: res });
                    }
                },
                fail: function (res) {
                    console.log(E[272516]);
                    console.log(res);

                    requestCallback = true;
                    if (loginHandler) clearTimeout(loginHandler);
                    loginHandler = null;
                    callbacks[E[240542]] && callbacks[E[240542]](1, { type: E[272517], errMsg: res.errMsg, time: Date.now() - lastTime, res: res });
                }
            });
            if (!requestCallback) {
                var timeOutFunc = function () {
                    console.log(E[272518]);

                    callbacks[E[240542]] && callbacks[E[240542]](1, { type: E[272519], errMsg: E[272520], time: Date.now() - lastTime });
                    callbacks[E[240542]] = null; //回调后置空，以免success或fail里重复回调
                };
                loginHandler = setTimeout(timeOutFunc, 20000);
            }
        },

        share: function (data) {
            callbacks[E[240609]] = typeof callback == E[241566] ? callback : null;
            var type = data.type || E[240609];
            var cp_activity_id = data.cp_activity_id || '';

            console.log(E[272521] + type);
            var self = this;
            this.getShareInfo(type, function (data) {
                if (cp_activity_id != '' && data.query != '') {
                    data.query = data.query + E[272522] + cp_activity_id;
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
                server_id: _pX$32F.server_id
            };
            wx.request({
                url: E[268778] + HOST + E[272523] + config.partner_id + '/' + config.game_pkg,
                method: E[240510],
                dataType: E[241317],
                header: {
                    'content-type': E[240653] // 默认值
                },
                data: params,
                success: function (res) {
                    console.log(E[272524] + JSON.stringify(params));
                    console.log(E[272525] + JSON.stringify(res));
                }
            });
        },

        logStartShare: function (type) {
            var sdk_token = wx.getStorageSync(E[272508]);
            wx.request({
                url: E[268778] + HOST + E[272526],
                method: E[240510],
                dataType: E[241317],
                header: {
                    'content-type': E[240653] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    server_id: _pX$32F ? _pX$32F.server_id : '',
                    role_id: _pX$32F ? _pX$32F.role_id : '',
                    type: type
                },
                success: function (res) {}
            });
        },

        openService: function () {
            wx.openCustomerServiceConversation();
        },

        checkGameVersion: function (game_ver, callback) {
            console.log(E[272527]);
            callbacks[E[241180]] = typeof callback == E[241566] ? callback : null;
            var sdk_token = wx.getStorageSync(E[272508]);
            wx.request({
                url: E[268778] + HOST + E[272528],
                method: E[240510],
                dataType: E[241317],
                header: {
                    'content-type': E[240653] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    game_ver: game_ver
                },
                success: function (res) {
                    console.log(E[272529]);
                    console.log(res);
                    requestCallback = true;
                    if (checkHandler) clearTimeout(checkHandler);
                    checkHandler = null;
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callbacks[E[241180]] && callbacks[E[241180]](data.data);
                        } else {
                            callbacks[E[241180]] && callbacks[E[241180]]({ develop: 0 });
                        }
                    } else {
                        callbacks[E[241180]] && callbacks[E[241180]]({ develop: 0 });
                    }
                },
                fail: function (res) {
                    console.log(E[272530]);
                    console.log(res);
                    requestCallback = true;
                    if (checkHandler) clearTimeout(checkHandler);
                    checkHandler = null;
                    callbacks[E[241180]] && callbacks[E[241180]]({ develop: 0 });
                }
            });
            if (!requestCallback) {
                var timeOutFunc = function () {
                    console.log(E[272531]);
                    callbacks[E[241180]] && callbacks[E[241180]]({ develop: 0 });
                    callbacks[E[241180]] = null; //回调后置空，以免success或fail里重复回调
                };
                checkHandler = setTimeout(timeOutFunc, 10000);
            }
        },

        getShareInfo: function (type, callback) {
            console.log(E[272532]);
            var sdk_token = wx.getStorageSync(E[272508]);
            wx.request({
                url: E[268778] + HOST + E[272533],
                method: E[240510],
                dataType: E[241317],
                header: {
                    'content-type': E[240653] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    type: type,
                    server_id: _pX$32F ? _pX$32F.server_id : '',
                    role_id: _pX$32F ? _pX$32F.role_id : '',
                    no_log: 1 //设置为1后就不在这个接口打log，交给logStartShare接口
                },
                success: function (res) {
                    console.log(E[272534]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callback && callback(data.data);
                        } else {
                            callbacks[E[240609]] && callbacks[E[240609]](1, {
                                errMsg: E[272535] + data.msg
                            });
                        }
                    } else {
                        callbacks[E[240609]] && callbacks[E[240609]](1, {
                            errMsg: E[272536]
                        });
                    }
                }
            });
        },

        updateShare: function (invite, invite_type, is_new, role_id, server_id, scene) {
            console.log(E[272537]);
            var sdk_token = wx.getStorageSync(E[272508]);
            wx.request({
                url: E[268778] + HOST + E[272538],
                method: E[240510],
                dataType: E[241317],
                header: {
                    'content-type': E[240653] // 默认值
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
                    console.log(E[272539]);
                    console.log(res);
                }
            });
        },

        msgCheck: function (content, callback) {
            console.log(E[272540]);
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
                    console.log(E[272541] + JSON.stringify(res));
                } else {
                    ret.statusCode = 0;
                    ret.data.state = 0;
                    console.log(E[272542] + JSON.stringify(res));
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
            console.log(E[272543], data);
            var self = this;
            callbacks[E[240596]] = typeof callback == E[241566] ? callback : null;
            //先下单
            var sdk_token = wx.getStorageSync(E[272508]);
            var session_key = wx.getStorageSync(E[272511]);
            if (!sdk_token && !session_key) {
                callbacks[E[240596]] && callbacks[E[240596]](1, { errMsg: E[272544] });
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
            public_data[E[272545]] = JSON.stringify(order_data);

            //发起网络请求
            wx.request({
                url: E[268778] + HOST + E[272546],
                method: E[240510],
                dataType: E[241317],
                header: {
                    'content-type': E[240653] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(E[272547], res);

                    if (res.statusCode === 200) {
                        var data = res.data;
                        if (data.state && data.data.pay_data) {
                            console.log(E[272548] + JSON.stringify(data.data.pay_data));

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
                                console.log(E[272549], res);
                            });
                        } else {
                            callbacks[E[240596]] && callbacks[E[240596]](1, { errMsg: data.errMsg });
                        }
                    } else {
                        callbacks[E[240542]] && callbacks[E[240542]](1, { errMsg: E[272515] });
                    }
                }
            });
        },

        logCreateRole: function (data) {
            var uid = wx.getStorageSync(E[272509]);
            var username = wx.getStorageSync(E[272510]);

            var role_info = {};
            role_info[E[272550]] = uid;
            role_info[E[272551]] = username;
            role_info[E[254636]] = data.roleid;
            role_info[E[272552]] = data.rolelevel;
            role_info[E[272553]] = data.rolename;
            role_info[E[240150]] = data.serverid;

            if (data.roleid && data.serverid) {
                _pX$32F = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }
            this.log(E[240006], role_info);

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
                    url: E[268778] + HOST + E[272554],
                    method: E[240510],
                    dataType: E[241317],
                    header: {
                        'content-type': E[240653] // 默认值
                    },
                    data: roleInfo,
                    success: function (res) {
                        console.log(E[272555] + JSON.stringify(res));
                    }
                });
            }

            this.upRoleInfo(E[272556], data);
            if (_pX3F2$ && typeof _pX3F2$ == E[241689]) {
                var params = {
                    pf_uid: uid,
                    partner_uid: partner_data.openid,
                    role_id: data.roleid,
                    role_name: data.rolename,
                    server_id: data.serverid,
                    server_name: data.servername,
                    invite_code: _pX3F2$.invite,
                    _pX3F2$: JSON.stringify(_pX3F2$),
                    partner_user_info: JSON.stringify(partner_data)
                };

                wx.request({
                    url: E[268778] + HOST + E[272557] + config.partner_id + '/' + config.game_pkg,
                    method: E[240510],
                    dataType: E[241317],
                    header: {
                        'content-type': E[240653] // 默认值
                    },
                    data: params,
                    success: function (res) {
                        console.log(E[272524] + JSON.stringify(params));
                        console.log(E[272525] + JSON.stringify(res));
                    }
                });
            }
        },

        subscribeMessage: function (tmplIds, callback) {
            console.log(E[272558] + tmplIds);
            //获取模板ID
            callbacks[E[240622]] = typeof callback == E[241566] ? callback : null;
            let data = {
                template: tmplIds[0], // 模版ID 必填
                role_id: _pX$32F ? _pX$32F.role_id : '',
                tpl_type: 2 // 当前订阅活动分类：1离线收益提醒;2活动提醒
            };
            Sygame.syGetSubscribe(data).then(res => {
                if (res.status == 1001) {
                    res.errMsg = E[240624];
                    res[tmplIds[0]] = res.type;
                    callbacks[E[240622]] && callbacks[E[240622]](res);
                } else {
                    callbacks[E[240622]] && callbacks[E[240622]](res);
                }
            });
        },

        //进入游戏
        logEnterGame: function (data) {
            var uid = wx.getStorageSync(E[272509]);
            var username = wx.getStorageSync(E[272510]);

            var role_info = {};
            role_info[E[272550]] = uid;
            role_info[E[272551]] = username;
            role_info[E[254636]] = data.roleid;
            role_info[E[272552]] = data.rolelevel;
            role_info[E[272553]] = data.rolename;
            role_info[E[240150]] = data.serverid;

            if (data.roleid && data.serverid) {
                _pX$32F = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(E[241110], role_info);

            this.upRoleInfo(E[272559], data);

            //进入游戏确认邀请成功
            if (_pX3F2$) {
                this.updateShare(_pX3F2$.invite, _pX3F2$.invite_type, _pX3F2$.is_new, data.roleid, data.serverid, _pX3F2$.scene);
            }
        },

        //角色升级
        logRoleUpLevel: function (data) {
            var uid = wx.getStorageSync(E[272509]);
            var username = wx.getStorageSync(E[272510]);

            var role_info = {};
            role_info[E[272550]] = uid;
            role_info[E[272551]] = username;
            role_info[E[254636]] = data.roleid;
            role_info[E[272552]] = data.rolelevel;
            role_info[E[272553]] = data.rolename;
            role_info[E[240150]] = data.serverid;

            if (data.roleid && data.serverid) {
                _pX$32F = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(E[272560], role_info);
            this.upRoleInfo(E[272561], data);
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
                console.log(E[272562], res);
            });
        },

        // 渠道-- 获取分享开关配置
        shareConfig: function (callback) {
            var data = {
                'code': 1,
                'msg': E[269255],
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
                            game_list[i]['jump_path'] = game_list_init[i]['jump_path'];
                            game_list[i][E[259125]] = i + 1;
                            game_list[i][E[272563]] = game_list_init[i][E[260428]];
                            game_list[i][E[272564]] = game_list_init[i][E[272565]];
                            game_list[i][E[272566]] = game_list_init[i][E[240283]];
                            game_list[i][E[272567]] = game_list_init[i][E[272567]];
                            game_list[i][E[272568]] = game_list_init[i][E[272568]];
                            game_list[i][E[272569]] = game_list_init[i][E[272569]];
                            game_list[i][E[272570]] = game_list_init[i][E[272570]];
                        }

                        ret.data = game_list;
                    }
                } else {
                    ret.code = res.data.status;
                    ret.msg = res.data.info;
                    ret.data = res.data.data ? res.data.data : {};
                }
                console.log(E[272571] + JSON.stringify(ret));

                callback && callback(ret);
            });
        },

        openBox: function (callback) {
            Sygame.syClickOpenBox().then(res => {
                console.log(E[272572], res);
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
                console.log(E[272573], res);
            });
        },

        //获取唯一设备码（自定义）
        uuid: function (radix, len) {
            var chars = E[272574].split('');
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
            var uuid = wx.getStorageSync(E[272499]);
            var idfv = wx.getStorageSync(E[272500]);
            var ad_code = wx.getStorageSync(E[272501]);

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
                mac: E[272575],
                net_type: system.wifiSignal == 0 ? '4G' : E[272576],
                os_ver: system.system,
                sdk_ver: system.version, //存放的是微信版本号
                game_ver: config.game_ver, //存放的是SDK版本号
                device: system.platform == E[244657] ? 1 : 2
            };
        },

        //统一发送log
        log: function (type, data) {
            var public_data = this.getPublicData();
            for (var key in data) {
                public_data[key] = data[key];
            }

            console.log(E[272577] + type);
            console.log(public_data);

            wx.request({
                url: E[268778] + HOST + E[272578] + type + E[272579] + encodeURIComponent(JSON.stringify(public_data))
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
            this.getShareInfo(E[272502], function (data) {
                callback && callback({ title: data.title, 'img': data.img });
            });
        }
    };
}

function run(method, data, callback) {
    method in _pX$3F2 && _pX$3F2[method](data, callback);
}

exports.init = function (data, callback) {
    run(E[240344], data, callback);
};

exports.login = function (callback) {
    run(E[240542], '', callback);
};

exports.pay = function (data, callback) {
    run(E[240596], data, callback);
};

exports.openService = function () {
    run(E[240610]);
};

exports.logCreateRole = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(E[240604], data);
};
exports.subscribeMessage = function (data, callback) {
    run(E[240622], data, callback);
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

    run(E[240606], data);
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
    run(E[240608], data);
};

exports.share = function (type, data) {
    var cp_activity_id = data && data.activity_id ? data.activity_id : '';

    var params = {
        type: type,
        cp_activity_id: cp_activity_id
    };

    run(E[240609], params);
};

exports.msgCheck = function (data, callback) {
    run(E[240487], data, callback);
};

exports.shareConfig = function (callback) {
    run(E[272580], callback);
};

exports.shareRecommend = function (callback) {
    run(E[272581], callback);
};

exports.openBox = function (callback) {
    run(E[249236], callback);
};

exports.clickBoxGame = function (data) {
    run(E[272582], data);
};

exports.downloadClient = function () {
    run(E[272583]);
};

exports.getConfig = function () {
    return {
        game_id: config.game_id,
        game_pkg: config.game_pkg,
        partner_id: config.partner_id
    };
};

exports.getPublicData = function () {
    run(E[272584]);
};

exports.setMessageToFriendQuery = function (data, callback) {
    run(E[272585], data, callback);
};

exports.getFriendShareInfo = function (callback) {
    run(E[272586], callback);
};