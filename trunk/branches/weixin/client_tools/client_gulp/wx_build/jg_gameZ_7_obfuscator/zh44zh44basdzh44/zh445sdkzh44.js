var e = wx.$F;
import Sygame from '../utils/sysdk-wxapp';
window[e[601590]] = Sygame;
var config = {
    game_id: e[601591],
    game_pkg: e[601592], //盛也-逆神H5
    partner_label: e[601593],
    partner_id: e[601594],
    game_ver: e[601595],
    is_auth: false //授权登录
};
window.config = config;
var kB$EIT = kBETI$();
var HOST = 'sdk.sh9130.com';
var kB$ETI = null;
var kBEIT$ = null;
var partner_user_data = {};
var user_invite_by_activity = null;

function kBETI$() {
    var callbacks = {};
    return {
        order_data: {},
        init: function (ops, callback) {
            var game_ver = ops && ops.game_ver ? ops.game_ver : 0;
            console.log(e[601596]);
            var self = this;

            var uuid = wx.getStorageSync(e[601597]);
            var is_new;
            if (!uuid) {
                uuid = self.uuid(16, 32);
                wx.setStorageSync(e[601597], uuid);
                is_new = 1;
            } else {
                is_new = 0;
            }
            var idfv = wx.getStorageSync(e[601598]);
            if (!idfv) {
                idfv = self.uuid(16, 32);
                wx.setStorageSync(e[601598], idfv);
            }

            var info = wx.getLaunchOptionsSync();
            var scene = info.scene ? info.scene : '';

            //判断今天是否已经上报过
            if (is_new && info.query && info.query.ad_code) {
                wx.setStorageSync(e[601599], info.query.ad_code);
            }

            var data = {
                install: is_new,
                scene: scene
            };
            self.log(e[601600], data);

            //渠道初始化
            Sygame.init(info);

            //玩家是分享过来的，单独上报给服务器
            var invite = info.query && info.query.invite ? info.query.invite : '';
            var invite_type = info.query && info.query.invite_type ? info.query.invite_type : '';
            var cp_activity_id = info.query && info.query.cp_activity_id ? info.query.cp_activity_id : '';

            // 普通分享不存在活动ID的话  再看下定向分享是否存在
            if (!cp_activity_id) {
                cp_activity_id = info.query && info.query.shareMessageToFriendScene ? info.query.shareMessageToFriendScene : '';
                invite_type = cp_activity_id ? e[601601] : '';
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
                kBEIT$ = {
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
            console.log(e[601602]);
            callbacks[e[600229]] = typeof callback == e[600854] ? callback : null;
            Sygame.syLogin().then(res => {
                console.log(e[601603], res);
                if (res.code === 1001) {
                    partner_user_data = res;
                    self.do_login(partner_user_data);
                } else {
                    callbacks[e[600229]] && callbacks[e[600229]](1, { errMsg: res.message });
                }
            });
        },

        do_login: function (user_info) {
            var self = this;

            var login_data = self.getPublicData();
            login_data[e[601604]] = JSON.stringify(user_info);

            if (kBEIT$ && typeof kBEIT$ == e[600759]) {
                for (var key in kBEIT$) {
                    login_data[key] = kBEIT$[key];
                }
            }

            //发起网络请求
            wx.request({
                url: e[601605] + HOST + e[601606],
                method: e[600201],
                dataType: e[601081],
                header: {
                    'content-type': e[600327] // 默认值
                },
                data: login_data,
                success: function (res) {
                    console.log(e[601607], res);
                    if (res.statusCode === 200) {
                        var data = res.data;
                        if (data.state) {
                            partner_user_data.openid = data.data.ext;
                            try {
                                wx.setStorageSync('plat_sdk_token', data.data.sdk_token);
                                wx.setStorageSync(e[601608], data.data.user_id);
                                wx.setStorageSync(e[601609], data.data.username);
                                if (data.data.ext) {
                                    wx.setStorageSync('plat_session_key', data.data.ext);
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
                            callbacks[e[600229]] && callbacks[e[600229]](0, userData);
                        } else {
                            callbacks[e[600229]] && callbacks[e[600229]](1, { errMsg: data.msg });
                        }

                        //登录成功，加载右上角分享数据
                        self.getShareInfo(e[601610], function (data) {
                            console.log(e[601611]);
                            wx.onShareAppMessage(function () {
                                //记录开始分享
                                self.logStartShare(e[601610]);
                                return {
                                    title: data.title,
                                    imageUrl: data.img,
                                    query: data.query
                                };
                            });
                        });
                    } else {
                        callbacks[e[600229]] && callbacks[e[600229]](1, {
                            errMsg: e[601612]
                        });
                    }
                }
            });
        },

        share: function (data) {
            callbacks[e[600290]] = typeof callback == e[600854] ? callback : null;
            var type = data.type || e[600290];
            var cp_activity_id = data.cp_activity_id || '';

            console.log(e[601613] + type);
            var self = this;
            this.getShareInfo(type, function (data) {
                if (cp_activity_id != '' && data.query != '') {
                    data.query = data.query + e[601614] + cp_activity_id;
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
                server_id: kB$ETI.server_id
            };
            wx.request({
                url: e[601605] + HOST + e[601615] + config.partner_id + '/' + config.game_pkg,
                method: e[600201],
                dataType: e[601081],
                header: {
                    'content-type': e[600327] // 默认值
                },
                data: params,
                success: function (res) {
                    console.log(e[601616] + JSON.stringify(params));
                    console.log(e[601617] + JSON.stringify(res));
                }
            });
        },

        logStartShare: function (type) {
            var sdk_token = wx.getStorageSync('plat_sdk_token');
            wx.request({
                url: e[601605] + HOST + e[601618],
                method: e[600201],
                dataType: e[601081],
                header: {
                    'content-type': e[600327] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    server_id: kB$ETI ? kB$ETI.server_id : '',
                    role_id: kB$ETI ? kB$ETI.role_id : '',
                    type: type
                },
                success: function (res) {}
            });
        },

        openService: function () {
            wx.openCustomerServiceConversation();
        },

        checkGameVersion: function (game_ver, callback) {
            console.log(e[601619]);
            var sdk_token = wx.getStorageSync('plat_sdk_token');
            wx.request({
                url: e[601605] + HOST + '/game/min/?ac=checkGameVersion',
                method: e[600201],
                dataType: e[601081],
                header: {
                    'content-type': e[600327] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    game_ver: game_ver
                },
                success: function (res) {
                    console.log(e[601620]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callback && callback(data.data);
                        } else {
                            callback && callback({
                                develop: 0
                            });
                        }
                    } else {
                        callback && callback({
                            develop: 0
                        });
                    }
                }
            });
        },

        getShareInfo: function (type, callback) {
            console.log(e[601621]);
            var sdk_token = wx.getStorageSync('plat_sdk_token');
            wx.request({
                url: e[601605] + HOST + e[601622],
                method: e[600201],
                dataType: e[601081],
                header: {
                    'content-type': e[600327] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    type: type,
                    server_id: kB$ETI ? kB$ETI.server_id : '',
                    role_id: kB$ETI ? kB$ETI.role_id : '',
                    no_log: 1 //设置为1后就不在这个接口打log，交给logStartShare接口
                },
                success: function (res) {
                    console.log(e[601623]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callback && callback(data.data);
                        } else {
                            callbacks[e[600290]] && callbacks[e[600290]](1, {
                                errMsg: e[601624] + data.msg
                            });
                        }
                    } else {
                        callbacks[e[600290]] && callbacks[e[600290]](1, {
                            errMsg: e[601625]
                        });
                    }
                }
            });
        },

        updateShare: function (invite, invite_type, is_new, role_id, server_id, scene) {
            console.log(e[601626]);
            var sdk_token = wx.getStorageSync('plat_sdk_token');
            wx.request({
                url: e[601605] + HOST + e[601627],
                method: e[600201],
                dataType: e[601081],
                header: {
                    'content-type': e[600327] // 默认值
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
                    console.log(e[601628]);
                    console.log(res);
                }
            });
        },

        msgCheck: function (content, callback) {
            console.log(e[601629]);
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
                    console.log(e[601630] + JSON.stringify(res));
                } else {
                    ret.statusCode = 0;
                    ret.data.state = 0;
                    console.log(e[601631] + JSON.stringify(res));
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
            console.log(e[601632], data);
            var self = this;
            callbacks[e[600278]] = typeof callback == e[600854] ? callback : null;
            //先下单
            var sdk_token = wx.getStorageSync('plat_sdk_token');
            var session_key = wx.getStorageSync('plat_session_key');
            if (!sdk_token && !session_key) {
                callbacks[e[600278]] && callbacks[e[600278]](1, { errMsg: e[601633] });
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
            public_data[e[601634]] = JSON.stringify(order_data);

            //发起网络请求
            wx.request({
                url: e[601605] + HOST + e[601635],
                method: e[600201],
                dataType: e[601081],
                header: {
                    'content-type': e[600327] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(e[601636], res);

                    if (res.statusCode === 200) {
                        var data = res.data;
                        if (data.state && data.data.pay_data) {
                            console.log(e[601637] + JSON.stringify(data.data.pay_data));

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
                                console.log(e[601638], res);
                            });
                        } else {
                            callbacks[e[600278]] && callbacks[e[600278]](1, { errMsg: data.errMsg });
                        }
                    } else {
                        callbacks[e[600229]] && callbacks[e[600229]](1, { errMsg: e[601612] });
                    }
                }
            });
        },

        logCreateRole: function (data) {
            var uid = wx.getStorageSync(e[601608]);
            var username = wx.getStorageSync(e[601609]);

            var role_info = {};
            role_info[e[601639]] = uid;
            role_info[e[601640]] = username;
            role_info[e[601641]] = data.roleid;
            role_info[e[601642]] = data.rolelevel;
            role_info[e[601643]] = data.rolename;
            role_info[e[600023]] = data.serverid;

            if (data.roleid && data.serverid) {
                kB$ETI = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }
            this.log(e[600390], role_info);

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
                    url: e[601605] + HOST + e[601644],
                    method: e[600201],
                    dataType: e[601081],
                    header: {
                        'content-type': e[600327] // 默认值
                    },
                    data: roleInfo,
                    success: function (res) {
                        console.log(e[601645] + JSON.stringify(res));
                    }
                });
            }

            this.upRoleInfo(e[601646], data);

            if (kBEIT$ && typeof kBEIT$ == e[600759]) {
                var params = {
                    pf_uid: uid,
                    partner_uid: partner_data.openid,
                    role_id: data.roleid,
                    role_name: data.rolename,
                    server_id: data.serverid,
                    server_name: data.servername,
                    invite_code: kBEIT$.invite,
                    kBEIT$: JSON.stringify(kBEIT$),
                    partner_user_info: JSON.stringify(partner_data)
                };

                wx.request({
                    url: e[601605] + HOST + e[601647] + config.partner_id + '/' + config.game_pkg,
                    method: e[600201],
                    dataType: e[601081],
                    header: {
                        'content-type': e[600327] // 默认值
                    },
                    data: params,
                    success: function (res) {
                        console.log(e[601616] + JSON.stringify(params));
                        console.log(e[601617] + JSON.stringify(res));
                    }
                });
            }
        },

        subscribeMessage: function (tmplIds, callback) {
            console.log(e[601648] + tmplIds);
            //获取模板ID
            callbacks[e[600298]] = typeof callback == e[600854] ? callback : null;
            let data = {
                template: tmplIds[0], // 模版ID 必填
                role_id: kB$ETI ? kB$ETI.role_id : '',
                tpl_type: 2 // 当前订阅活动分类：1离线收益提醒;2活动提醒
            };
            Sygame.syGetSubscribe(data).then(res => {
                if (res.status == 1001) {
                    res.errMsg = "requestSubscribeMessage:ok";
                    res[tmplIds[0]] = res.type;
                    callbacks[e[600298]] && callbacks[e[600298]](res);
                } else {
                    callbacks[e[600298]] && callbacks[e[600298]](res);
                }
            });
        },

        //进入游戏
        logEnterGame: function (data) {
            var uid = wx.getStorageSync(e[601608]);
            var username = wx.getStorageSync(e[601609]);

            var role_info = {};
            role_info[e[601639]] = uid;
            role_info[e[601640]] = username;
            role_info[e[601641]] = data.roleid;
            role_info[e[601642]] = data.rolelevel;
            role_info[e[601643]] = data.rolename;
            role_info[e[600023]] = data.serverid;

            if (data.roleid && data.serverid) {
                kB$ETI = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(e[601649], role_info);

            this.upRoleInfo(e[601650], data);

            //进入游戏确认邀请成功
            if (kBEIT$) {
                this.updateShare(kBEIT$.invite, kBEIT$.invite_type, kBEIT$.is_new, data.roleid, data.serverid, kBEIT$.scene);
            }
        },

        //角色升级
        logRoleUpLevel: function (data) {
            var uid = wx.getStorageSync(e[601608]);
            var username = wx.getStorageSync(e[601609]);

            var role_info = {};
            role_info[e[601639]] = uid;
            role_info[e[601640]] = username;
            role_info[e[601641]] = data.roleid;
            role_info[e[601642]] = data.rolelevel;
            role_info[e[601643]] = data.rolename;
            role_info[e[600023]] = data.serverid;

            if (data.roleid && data.serverid) {
                kB$ETI = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(e[601651], role_info);
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
                console.log(e[601652], res);
            });
        },

        // 渠道-- 获取分享开关配置
        shareConfig: function (callback) {
            var data = {
                'code': 1,
                'msg': e[601653],
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
                            game_list[i][e[601654]] = game_list_init[i][e[601654]];
                            game_list[i][e[601655]] = i + 1;
                            game_list[i][e[601656]] = game_list_init[i][e[601657]];
                            game_list[i][e[601658]] = game_list_init[i][e[601659]];
                            game_list[i][e[601660]] = game_list_init[i][e[600629]];
                            game_list[i][e[601661]] = game_list_init[i][e[601661]];
                            game_list[i][e[601662]] = game_list_init[i][e[601662]];
                            game_list[i][e[601663]] = game_list_init[i][e[601663]];
                            game_list[i][e[601664]] = game_list_init[i][e[601664]];
                        }

                        ret.data = game_list;
                    }
                } else {
                    ret.code = res.data.status;
                    ret.msg = res.data.info;
                    ret.data = res.data.data ? res.data.data : {};
                }
                console.log(e[601665] + JSON.stringify(ret));

                callback && callback(ret);
            });
        },

        openBox: function (callback) {
            Sygame.syClickOpenBox().then(res => {
                console.log(e[601666], res);
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
                console.log(e[601667], res);
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
            var uuid = wx.getStorageSync(e[601597]);
            var idfv = wx.getStorageSync(e[601598]);
            var ad_code = wx.getStorageSync(e[601599]);

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
                mac: e[601668],
                net_type: system.wifiSignal == 0 ? '4G' : e[601669],
                os_ver: system.system,
                sdk_ver: system.version, //存放的是微信版本号
                game_ver: config.game_ver, //存放的是SDK版本号
                device: system.platform == e[600105] ? 1 : 2
            };
        },

        //统一发送log
        log: function (type, data) {
            var public_data = this.getPublicData();
            for (var key in data) {
                public_data[key] = data[key];
            }

            console.log(e[601670] + type);
            console.log(public_data);

            wx.request({
                url: e[601605] + HOST + e[601671] + type + e[601672] + encodeURIComponent(JSON.stringify(public_data))
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
            this.getShareInfo(e[601601], function (data) {
                callback && callback({ title: data.title, 'img': data.img });
            });
        }
    };
}

function run(method, data, callback) {
    method in kB$EIT && kB$EIT[method](data, callback);
}

exports.init = function (data, callback) {
    run(e[600213], data, callback);
};

exports.login = function (callback) {
    run(e[600229], '', callback);
};

exports.pay = function (data, callback) {
    run(e[600278], data, callback);
};
exports.subscribeMessage = function (data, callback) {
    run(e[600298], data, callback);
};

exports.openService = function () {
    run(e[600291]);
};

exports.logCreateRole = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(e[600285], data);
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

    run(e[600287], data);
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
    run(e[600289], data);
};

exports.share = function (type, data) {
    var cp_activity_id = data && data.activity_id ? data.activity_id : '';

    var params = {
        type: type,
        cp_activity_id: cp_activity_id
    };

    run(e[600290], params);
};

exports.msgCheck = function (data, callback) {
    run('msgCheck', data, callback);
};

exports.shareConfig = function (callback) {
    run(e[601673], callback);
};

exports.shareRecommend = function (callback) {
    run(e[601674], callback);
};

exports.openBox = function (callback) {
    run(e[601675], callback);
};

exports.clickBoxGame = function (data) {
    run('clickBoxGame', data);
};

exports.downloadClient = function () {
    run(e[601676]);
};

exports.getConfig = function () {
    return {
        game_id: config.game_id,
        game_pkg: config.game_pkg,
        partner_id: config.partner_id
    };
};

exports.getPublicData = function () {
    run(e[601677]);
};

exports.setMessageToFriendQuery = function (data, callback) {
    run(e[601678], data, callback);
};

exports.getFriendShareInfo = function (callback) {
    run(e[601679], callback);
};