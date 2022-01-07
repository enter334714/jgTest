var k = wx.$f;
import Sygame from './fffhelp';
window[k[87517]] = Sygame;
var config = {
    game_id: k[87518],
    game_pkg: 'tjqy_tjqygjhol_FW', //盛也微信小游戏--飞仙服-鬼剑豪
    partner_label: k[87519],
    partner_id: k[87520],
    game_ver: k[87521],
    is_auth: false, //授权登录
    tmpId: { 1: 'r9EXyfU6PuWuCRkUp7C9ndzw9ak29C7FoEk3-zjJgsk', 2: k[87522], 3: k[87523] // 订阅的类型 和 模板id
    } };
window.config = config;
var F$IL608 = F$I680L();
var HOST = k[87524];
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
            console.log(k[87525]);
            var self = this;

            var uuid = wx.getStorageSync(k[87526]);
            var is_new;
            if (!uuid) {
                uuid = self.uuid(16, 32);
                wx.setStorageSync(k[87526], uuid);
                is_new = 1;
            } else {
                is_new = 0;
            }
            var idfv = wx.getStorageSync(k[87527]);
            if (!idfv) {
                idfv = self.uuid(16, 32);
                wx.setStorageSync(k[87527], idfv);
            }

            var info = wx.getLaunchOptionsSync();
            var scene = info.scene ? info.scene : '';

            //判断今天是否已经上报过
            if (is_new && info.query && info.query.ad_code) {
                wx.setStorageSync(k[87528], info.query.ad_code);
            }

            var data = {
                install: is_new,
                scene: scene
            };
            self.log(k[60277], data);

            //渠道初始化
            Sygame.init(info);

            //玩家是分享过来的，单独上报给服务器
            var invite = info.query && info.query.invite ? info.query.invite : '';
            var invite_type = info.query && info.query.invite_type ? info.query.invite_type : '';
            var cp_activity_id = info.query && info.query.cp_activity_id ? info.query.cp_activity_id : '';

            // 普通分享不存在活动ID的话  再看下定向分享是否存在
            if (!cp_activity_id) {
                cp_activity_id = info.query && info.query.shareMessageToFriendScene ? info.query.shareMessageToFriendScene : '';
                invite_type = cp_activity_id ? k[87529] : '';
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
            console.log(k[87530]);
            callbacks[k[87531]] = typeof callback == k[87346] ? callback : null;
            Sygame.syLogin().then(res => {
                console.log(k[87532], res);
                if (res.code === 1001) {
                    partner_user_data = res;
                    self.do_login(partner_user_data);
                } else {
                    callbacks[k[87531]] && callbacks[k[87531]](1, { errMsg: res.message });
                }
            });
        },

        do_login: function (user_info) {
            var self = this;

            var login_data = self.getPublicData();
            login_data[k[87533]] = JSON.stringify(user_info);

            if (F$I608L && typeof F$I608L == k[60272]) {
                for (var key in F$I608L) {
                    login_data[key] = F$I608L[key];
                }
            }

            var lastTime = Date.now();
            wx.request({
                url: k[84167] + HOST + k[87534],
                method: k[87459],
                dataType: k[65328],
                header: {
                    'content-type': k[87535] // 默认值
                },
                data: login_data,
                success: function (res) {
                    console.log(k[87536] + JSON.stringify(res));
                    requestCallback = true;
                    if (loginHandler) clearTimeout(loginHandler);
                    loginHandler = null;
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            partner_user_data.openid = data.data.ext;
                            try {
                                wx.setStorageSync(k[87537], data.data.sdk_token);
                                wx.setStorageSync(k[87538], data.data.user_id);
                                wx.setStorageSync(k[87539], data.data.username);
                                if (data.data.ext) {
                                    wx.setStorageSync(k[87540], data.data.ext);
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
                            callbacks[k[87531]] && callbacks[k[87531]](0, userData);
                        } else {
                            callbacks[k[87531]] && callbacks[k[87531]](1, { type: k[87541], errMsg: data.msg, time: Date.now() - lastTime, res: res });
                        }

                        //登录成功，加载右上角分享数据
                        self.getShareInfo(k[87542], function (data) {
                            console.log(k[87543]);
                            wx.onShareAppMessage(function () {
                                //记录开始分享
                                self.logStartShare(k[87542]);
                                return {
                                    title: data.title,
                                    imageUrl: data.img,
                                    query: data.query
                                };
                            });
                        });
                    } else {
                        callbacks[k[87531]] && callbacks[k[87531]](1, { type: k[87541], errMsg: k[87544], time: Date.now() - lastTime, res: res });
                    }
                },
                fail: function (res) {
                    console.log(k[87545]);
                    console.log(res);

                    requestCallback = true;
                    if (loginHandler) clearTimeout(loginHandler);
                    loginHandler = null;
                    callbacks[k[87531]] && callbacks[k[87531]](1, { type: k[87546], errMsg: res.errMsg, time: Date.now() - lastTime, res: res });
                }
            });
            if (!requestCallback) {
                var timeOutFunc = function () {
                    console.log(k[87547]);

                    callbacks[k[87531]] && callbacks[k[87531]](1, { type: k[87548], errMsg: k[87549], time: Date.now() - lastTime });
                    callbacks[k[87531]] = null; //回调后置空，以免success或fail里重复回调
                };
                loginHandler = setTimeout(timeOutFunc, 20000);
            }
        },

        share: function (data) {
            callbacks[k[87550]] = typeof callback == k[87346] ? callback : null;
            var type = data.type || k[87550];
            var cp_activity_id = data.cp_activity_id || '';

            console.log(k[87551] + type);
            var self = this;
            this.getShareInfo(type, function (data) {
                if (cp_activity_id != '' && data.query != '') {
                    data.query = data.query + k[87552] + cp_activity_id;
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
                url: k[84167] + HOST + k[87553] + config.partner_id + '/' + config.game_pkg,
                method: k[87459],
                dataType: k[65328],
                header: {
                    'content-type': k[87535] // 默认值
                },
                data: params,
                success: function (res) {
                    console.log(k[87554] + JSON.stringify(params));
                    console.log(k[87555] + JSON.stringify(res));
                }
            });
        },

        logStartShare: function (type) {
            var sdk_token = wx.getStorageSync(k[87537]);
            wx.request({
                url: k[84167] + HOST + k[87556],
                method: k[87459],
                dataType: k[65328],
                header: {
                    'content-type': k[87535] // 默认值
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
            console.log(k[87557]);
            callbacks[k[66533]] = typeof callback == k[87346] ? callback : null;
            var sdk_token = wx.getStorageSync(k[87537]);
            wx.request({
                url: k[84167] + HOST + k[87558],
                method: k[87459],
                dataType: k[65328],
                header: {
                    'content-type': k[87535] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    game_ver: game_ver
                },
                success: function (res) {
                    console.log(k[87559]);
                    console.log(res);
                    requestCallback = true;
                    if (checkHandler) clearTimeout(checkHandler);
                    checkHandler = null;
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callbacks[k[66533]] && callbacks[k[66533]](data.data);
                        } else {
                            callbacks[k[66533]] && callbacks[k[66533]]({ develop: 0 });
                        }
                    } else {
                        callbacks[k[66533]] && callbacks[k[66533]]({ develop: 0 });
                    }
                },
                fail: function (res) {
                    console.log(k[87560]);
                    console.log(res);
                    requestCallback = true;
                    if (checkHandler) clearTimeout(checkHandler);
                    checkHandler = null;
                    callbacks[k[66533]] && callbacks[k[66533]]({ develop: 0 });
                }
            });
            if (!requestCallback) {
                var timeOutFunc = function () {
                    console.log(k[87561]);
                    callbacks[k[66533]] && callbacks[k[66533]]({ develop: 0 });
                    callbacks[k[66533]] = null; //回调后置空，以免success或fail里重复回调
                };
                checkHandler = setTimeout(timeOutFunc, 10000);
            }
        },

        getShareInfo: function (type, callback) {
            console.log(k[87562]);
            var sdk_token = wx.getStorageSync(k[87537]);
            wx.request({
                url: k[84167] + HOST + k[87563],
                method: k[87459],
                dataType: k[65328],
                header: {
                    'content-type': k[87535] // 默认值
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
                    console.log(k[87564]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callback && callback(data.data);
                        } else {
                            callbacks[k[87550]] && callbacks[k[87550]](1, {
                                errMsg: k[87565] + data.msg
                            });
                        }
                    } else {
                        callbacks[k[87550]] && callbacks[k[87550]](1, {
                            errMsg: k[87566]
                        });
                    }
                }
            });
        },

        updateShare: function (invite, invite_type, is_new, role_id, server_id, scene) {
            console.log(k[87567]);
            var sdk_token = wx.getStorageSync(k[87537]);
            wx.request({
                url: k[84167] + HOST + k[87568],
                method: k[87459],
                dataType: k[65328],
                header: {
                    'content-type': k[87535] // 默认值
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
                    console.log(k[87569]);
                    console.log(res);
                }
            });
        },

        msgCheck: function (content, callback) {
            console.log(k[87570]);
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
                    console.log(k[87571] + JSON.stringify(res));
                } else {
                    ret.statusCode = 0;
                    ret.data.state = 0;
                    console.log(k[87572] + JSON.stringify(res));
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
            console.log(k[87573], data);
            var self = this;
            callbacks[k[87574]] = typeof callback == k[87346] ? callback : null;
            //先下单
            var sdk_token = wx.getStorageSync(k[87537]);
            var session_key = wx.getStorageSync(k[87540]);
            if (!sdk_token && !session_key) {
                callbacks[k[87574]] && callbacks[k[87574]](1, { errMsg: k[87575] });
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
            public_data[k[87576]] = JSON.stringify(order_data);

            //发起网络请求
            wx.request({
                url: k[84167] + HOST + k[87577],
                method: k[87459],
                dataType: k[65328],
                header: {
                    'content-type': k[87535] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(k[87578], res);

                    if (res.statusCode === 200) {
                        var data = res.data;
                        if (data.state && data.data.pay_data) {
                            console.log(k[87579] + JSON.stringify(data.data.pay_data));

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
                                console.log(k[87580], res);
                            });
                        } else {
                            callbacks[k[87574]] && callbacks[k[87574]](1, { errMsg: data.errMsg });
                        }
                    } else {
                        callbacks[k[87531]] && callbacks[k[87531]](1, { errMsg: k[87544] });
                    }
                }
            });
        },

        logCreateRole: function (data) {
            var uid = wx.getStorageSync(k[87538]);
            var username = wx.getStorageSync(k[87539]);

            var role_info = {};
            role_info[k[87581]] = uid;
            role_info[k[87582]] = username;
            role_info[k[70027]] = data.roleid;
            role_info[k[87583]] = data.rolelevel;
            role_info[k[87584]] = data.rolename;
            role_info[k[70632]] = data.serverid;

            if (data.roleid && data.serverid) {
                F$IL680 = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }
            this.log(k[60006], role_info);

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
                    url: k[84167] + HOST + k[87585],
                    method: k[87459],
                    dataType: k[65328],
                    header: {
                        'content-type': k[87535] // 默认值
                    },
                    data: roleInfo,
                    success: function (res) {
                        console.log(k[87586] + JSON.stringify(res));
                    }
                });
            }

            this.upRoleInfo(k[87587], data);

            if (F$I608L && typeof F$I608L == k[60272]) {
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
                    url: k[84167] + HOST + k[87588] + config.partner_id + '/' + config.game_pkg,
                    method: k[87459],
                    dataType: k[65328],
                    header: {
                        'content-type': k[87535] // 默认值
                    },
                    data: params,
                    success: function (res) {
                        console.log(k[87554] + JSON.stringify(params));
                        console.log(k[87555] + JSON.stringify(res));
                    }
                });
            }
        },

        subscribeMessage: function (tmplIds, callback) {
            console.log(k[87589] + tmplIds);
            //获取模板ID
            callbacks[k[87590]] = typeof callback == k[87346] ? callback : null;
            let data = {
                template: tmplIds[0], // 模版ID 必填
                role_id: F$IL680 ? F$IL680.role_id : '',
                tpl_type: 2 // 当前订阅活动分类：1离线收益提醒;2活动提醒
            };
            Sygame.syGetSubscribe(data).then(res => {
                if (res.status == 1001) {
                    res.errMsg = k[87591];
                    res[tmplIds[0]] = res.type;
                    callbacks[k[87590]] && callbacks[k[87590]](res);
                } else {
                    callbacks[k[87590]] && callbacks[k[87590]](res);
                }
            });
        },

        //进入游戏
        logEnterGame: function (data) {
            var uid = wx.getStorageSync(k[87538]);
            var username = wx.getStorageSync(k[87539]);

            var role_info = {};
            role_info[k[87581]] = uid;
            role_info[k[87582]] = username;
            role_info[k[70027]] = data.roleid;
            role_info[k[87583]] = data.rolelevel;
            role_info[k[87584]] = data.rolename;
            role_info[k[70632]] = data.serverid;

            if (data.roleid && data.serverid) {
                F$IL680 = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(k[65226], role_info);

            this.upRoleInfo(k[87592], data);

            //进入游戏确认邀请成功
            if (F$I608L) {
                this.updateShare(F$I608L.invite, F$I608L.invite_type, F$I608L.is_new, data.roleid, data.serverid, F$I608L.scene);
            }
        },

        //角色升级
        logRoleUpLevel: function (data) {
            var uid = wx.getStorageSync(k[87538]);
            var username = wx.getStorageSync(k[87539]);

            var role_info = {};
            role_info[k[87581]] = uid;
            role_info[k[87582]] = username;
            role_info[k[70027]] = data.roleid;
            role_info[k[87583]] = data.rolelevel;
            role_info[k[87584]] = data.rolename;
            role_info[k[70632]] = data.serverid;

            if (data.roleid && data.serverid) {
                F$IL680 = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(k[87593], role_info);
            this.upRoleInfo(k[87594], data);
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
                console.log(k[87595], res);
            });
        },

        // 渠道-- 获取分享开关配置
        shareConfig: function (callback) {
            var data = {
                'code': 1,
                'msg': k[84653],
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
                            game_list[i][k[87596]] = game_list_init[i][k[87596]];
                            game_list[i][k[74414]] = i + 1;
                            game_list[i][k[87597]] = game_list_init[i][k[75728]];
                            game_list[i][k[87598]] = game_list_init[i][k[87599]];
                            game_list[i][k[87600]] = game_list_init[i][k[60629]];
                            game_list[i][k[87601]] = game_list_init[i][k[87601]];
                            game_list[i][k[87602]] = game_list_init[i][k[87602]];
                            game_list[i][k[87603]] = game_list_init[i][k[87603]];
                            game_list[i][k[87604]] = game_list_init[i][k[87604]];
                        }

                        ret.data = game_list;
                    }
                } else {
                    ret.code = res.data.status;
                    ret.msg = res.data.info;
                    ret.data = res.data.data ? res.data.data : {};
                }
                console.log(k[87605] + JSON.stringify(ret));

                callback && callback(ret);
            });
        },

        openBox: function (callback) {
            Sygame.syClickOpenBox().then(res => {
                console.log(k[87606], res);
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
                console.log(k[87607], res);
            });
        },

        //获取唯一设备码（自定义）
        uuid: function (radix, len) {
            var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
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
            var uuid = wx.getStorageSync(k[87526]);
            var idfv = wx.getStorageSync(k[87527]);
            var ad_code = wx.getStorageSync(k[87528]);

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
                mac: k[87608],
                net_type: system.wifiSignal == 0 ? '4G' : 'WIFI',
                os_ver: system.system,
                sdk_ver: system.version, //存放的是微信版本号
                game_ver: config.game_ver, //存放的是SDK版本号
                device: system.platform == k[87486] ? 1 : 2
            };
        },

        //统一发送log
        log: function (type, data) {
            var public_data = this.getPublicData();
            for (var key in data) {
                public_data[key] = data[key];
            }

            console.log(k[87609] + type);
            console.log(public_data);

            wx.request({
                url: k[84167] + HOST + k[87610] + type + k[87611] + encodeURIComponent(JSON.stringify(public_data))
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
            this.getShareInfo(k[87529], function (data) {
                callback && callback({ title: data.title, 'img': data.img });
            });
        }
    };
}

function run(method, data, callback) {
    method in F$IL608 && F$IL608[method](data, callback);
}

exports.init = function (data, callback) {
    run(k[60358], data, callback);
};

exports.login = function (callback) {
    run(k[87531], '', callback);
};

exports.pay = function (data, callback) {
    run(k[87574], data, callback);
};
exports.subscribeMessage = function (data, callback) {
    run(k[87590], data, callback);
};

exports.openService = function () {
    run(k[83629]);
};

exports.logCreateRole = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(k[87612], data);
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

    run(k[87613], data);
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
    run(k[87614], data);
};

exports.share = function (type, data) {
    var cp_activity_id = data && data.activity_id ? data.activity_id : '';

    var params = {
        type: type,
        cp_activity_id: cp_activity_id
    };

    run(k[87550], params);
};

exports.msgCheck = function (data, callback) {
    run(k[71201], data, callback);
};

exports.shareConfig = function (callback) {
    run(k[87615], callback);
};

exports.shareRecommend = function (callback) {
    run(k[87616], callback);
};

exports.openBox = function (callback) {
    run(k[64728], callback);
};

exports.clickBoxGame = function (data) {
    run(k[87617], data);
};

exports.downloadClient = function () {
    run(k[87618]);
};

exports.getConfig = function () {
    return {
        game_id: config.game_id,
        game_pkg: config.game_pkg,
        partner_id: config.partner_id
    };
};

exports.getPublicData = function () {
    run(k[87619]);
};

exports.setMessageToFriendQuery = function (data, callback) {
    run('setMessageToFriendQuery', data, callback);
};

exports.getFriendShareInfo = function (callback) {
    run('getFriendShareInfo', callback);
};