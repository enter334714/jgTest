var E = wx.$F;
import Sygame from '../utils/sysdk-wxapp';
window[E[0x1dde]] = Sygame;
var config = {
    game_id: E[0x1ddf],
    game_pkg: E[0x1de0], //盛也-逆神H5
    partner_label: 'shengye2',
    partner_id: E[0x1de1],
    game_ver: E[0x1de2],
    is_auth: false //授权登录
};
window.config = config;
var hEDZTO = hEZOTD();
var HOST = 'sdk.sh9130.com';
var hEDZOT = null;
var hEZTOD = null;
var partner_user_data = {};
var user_invite_by_activity = null;

function hEZOTD() {
    var callbacks = {};
    return {
        order_data: {},
        init: function (ops, callback) {
            var game_ver = ops && ops.game_ver ? ops.game_ver : 0;
            console.log(E[0x1de3]);
            var self = this;

            var uuid = wx.getStorageSync(E[0x1de4]);
            var is_new;
            if (!uuid) {
                uuid = self.uuid(16, 32);
                wx.setStorageSync(E[0x1de4], uuid);
                is_new = 1;
            } else {
                is_new = 0;
            }
            var idfv = wx.getStorageSync(E[0x1de5]);
            if (!idfv) {
                idfv = self.uuid(16, 32);
                wx.setStorageSync(E[0x1de5], idfv);
            }

            var info = wx.getLaunchOptionsSync();
            var scene = info.scene ? info.scene : '';

            //判断今天是否已经上报过
            if (is_new && info.query && info.query.ad_code) {
                wx.setStorageSync(E[0x1de6], info.query.ad_code);
            }

            var data = {
                install: is_new,
                scene: scene
            };
            self.log(E[0x636], data);

            //渠道初始化
            Sygame.init(info);

            //玩家是分享过来的，单独上报给服务器
            var invite = info.query && info.query.invite ? info.query.invite : '';
            var invite_type = info.query && info.query.invite_type ? info.query.invite_type : '';
            var cp_activity_id = info.query && info.query.cp_activity_id ? info.query.cp_activity_id : '';

            // 普通分享不存在活动ID的话  再看下定向分享是否存在
            if (!cp_activity_id) {
                cp_activity_id = info.query && info.query.shareMessageToFriendScene ? info.query.shareMessageToFriendScene : '';
                invite_type = cp_activity_id ? E[0x1de7] : '';
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
                hEZTOD = {
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
            console.log(E[0x1de8]);
            callbacks[E[0xd1]] = typeof callback == E[0x1bb] ? callback : null;
            Sygame.syLogin().then(res => {
                console.log(E[0x1de9], res);
                if (res.code === 1001) {
                    partner_user_data = res;
                    self.do_login(partner_user_data);
                } else {
                    callbacks[E[0xd1]] && callbacks[E[0xd1]](1, { errMsg: res.message });
                }
            });
        },

        do_login: function (user_info) {
            var self = this;

            var login_data = self.getPublicData();
            login_data[E[0x1dea]] = JSON.stringify(user_info);

            if (hEZTOD && typeof hEZTOD == E[0x1b8]) {
                for (var key in hEZTOD) {
                    login_data[key] = hEZTOD[key];
                }
            }

            //发起网络请求
            wx.request({
                url: 'https://' + HOST + '/partner/auth',
                method: E[0xb5],
                dataType: E[0x767],
                header: {
                    'content-type': E[0x153] // 默认值
                },
                data: login_data,
                success: function (res) {
                    console.log(E[0x1deb], res);
                    if (res.statusCode === 200) {
                        var data = res.data;
                        if (data.state) {
                            partner_user_data.openid = data.data.ext;
                            try {
                                wx.setStorageSync(E[0x1dec], data.data.sdk_token);
                                wx.setStorageSync(E[0x1ded], data.data.user_id);
                                wx.setStorageSync(E[0x1dee], data.data.username);
                                if (data.data.ext) {
                                    wx.setStorageSync(E[0x1def], data.data.ext);
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
                            callbacks[E[0xd1]] && callbacks[E[0xd1]](0, userData);
                        } else {
                            callbacks[E[0xd1]] && callbacks[E[0xd1]](1, { errMsg: data.msg });
                        }

                        //登录成功，加载右上角分享数据
                        self.getShareInfo(E[0x1df0], function (data) {
                            console.log(E[0x1df1]);
                            wx.onShareAppMessage(function () {
                                //记录开始分享
                                self.logStartShare(E[0x1df0]);
                                return {
                                    title: data.title,
                                    imageUrl: data.img,
                                    query: data.query
                                };
                            });
                        });
                    } else {
                        callbacks[E[0xd1]] && callbacks[E[0xd1]](1, {
                            errMsg: E[0x1df2]
                        });
                    }
                }
            });
        },

        share: function (data) {
            callbacks['share'] = typeof callback == E[0x1bb] ? callback : null;
            var type = data.type || 'share';
            var cp_activity_id = data.cp_activity_id || '';

            console.log(E[0x1df3] + type);
            var self = this;
            this.getShareInfo(type, function (data) {
                if (cp_activity_id != '' && data.query != '') {
                    data.query = data.query + E[0x1df4] + cp_activity_id;
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
                server_id: hEDZOT.server_id
            };
            wx.request({
                url: 'https://' + HOST + '/partner/data/report_share/' + config.partner_id + '/' + config.game_pkg,
                method: E[0xb5],
                dataType: E[0x767],
                header: {
                    'content-type': E[0x153] // 默认值
                },
                data: params,
                success: function (res) {
                    console.log(E[0x1df5] + JSON.stringify(params));
                    console.log(E[0x1df6] + JSON.stringify(res));
                }
            });
        },

        logStartShare: function (type) {
            var sdk_token = wx.getStorageSync(E[0x1dec]);
            wx.request({
                url: 'https://' + HOST + '/game/min/?ac=logStartShare',
                method: E[0xb5],
                dataType: E[0x767],
                header: {
                    'content-type': E[0x153] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    server_id: hEDZOT ? hEDZOT.server_id : '',
                    role_id: hEDZOT ? hEDZOT.role_id : '',
                    type: type
                },
                success: function (res) {}
            });
        },

        openService: function () {
            wx.openCustomerServiceConversation();
        },

        checkGameVersion: function (game_ver, callback) {
            console.log(E[0x1df7]);
            var sdk_token = wx.getStorageSync(E[0x1dec]);
            wx.request({
                url: 'https://' + HOST + '/game/min/?ac=checkGameVersion',
                method: E[0xb5],
                dataType: E[0x767],
                header: {
                    'content-type': E[0x153] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    game_ver: game_ver
                },
                success: function (res) {
                    console.log(E[0x1df8]);
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
            console.log(E[0x1df9]);
            var sdk_token = wx.getStorageSync(E[0x1dec]);
            wx.request({
                url: 'https://' + HOST + '/game/min/?ac=shareConfig',
                method: E[0xb5],
                dataType: E[0x767],
                header: {
                    'content-type': E[0x153] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    type: type,
                    server_id: hEDZOT ? hEDZOT.server_id : '',
                    role_id: hEDZOT ? hEDZOT.role_id : '',
                    no_log: 1 //设置为1后就不在这个接口打log，交给logStartShare接口
                },
                success: function (res) {
                    console.log(E[0x1dfa]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callback && callback(data.data);
                        } else {
                            callbacks['share'] && callbacks['share'](1, {
                                errMsg: E[0x1dfb] + data.msg
                            });
                        }
                    } else {
                        callbacks['share'] && callbacks['share'](1, {
                            errMsg: E[0x1dfc]
                        });
                    }
                }
            });
        },

        updateShare: function (invite, invite_type, is_new, role_id, server_id, scene) {
            console.log(E[0x1dfd]);
            var sdk_token = wx.getStorageSync(E[0x1dec]);
            wx.request({
                url: 'https://' + HOST + '/game/min/?ac=updateShare',
                method: E[0xb5],
                dataType: E[0x767],
                header: {
                    'content-type': E[0x153] // 默认值
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
                    console.log(E[0x1dfe]);
                    console.log(res);
                }
            });
        },

        msgCheck: function (content, callback) {
            console.log(E[0x1dff]);
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
                    console.log(E[0x1e00] + JSON.stringify(res));
                } else {
                    ret.statusCode = 0;
                    ret.data.state = 0;
                    console.log(E[0x1e01] + JSON.stringify(res));
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
            console.log(E[0x1e02], data);
            var self = this;
            callbacks[E[0x11c]] = typeof callback == E[0x1bb] ? callback : null;
            //先下单
            var sdk_token = wx.getStorageSync(E[0x1dec]);
            var session_key = wx.getStorageSync(E[0x1def]);
            if (!sdk_token && !session_key) {
                callbacks[E[0x11c]] && callbacks[E[0x11c]](1, { errMsg: E[0x1e03] });
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
            public_data[E[0x1e04]] = JSON.stringify(order_data);

            //发起网络请求
            wx.request({
                url: 'https://' + HOST + E[0x1e05],
                method: E[0xb5],
                dataType: E[0x767],
                header: {
                    'content-type': E[0x153] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(E[0x1e06], res);

                    if (res.statusCode === 200) {
                        var data = res.data;
                        if (data.state && data.data.pay_data) {
                            console.log(E[0x1e07] + JSON.stringify(data.data.pay_data));

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
                                console.log(E[0x1e08], res);
                            });
                        } else {
                            callbacks[E[0x11c]] && callbacks[E[0x11c]](1, { errMsg: data.errMsg });
                        }
                    } else {
                        callbacks[E[0xd1]] && callbacks[E[0xd1]](1, { errMsg: E[0x1df2] });
                    }
                }
            });
        },

        logCreateRole: function (data) {
            var uid = wx.getStorageSync(E[0x1ded]);
            var username = wx.getStorageSync(E[0x1dee]);

            var role_info = {};
            role_info[E[0x1e09]] = uid;
            role_info[E[0x1e0a]] = username;
            role_info[E[0x1e0b]] = data.roleid;
            role_info[E[0x1e0c]] = data.rolelevel;
            role_info[E[0x1e0d]] = data.rolename;
            role_info[E[0x11]] = data.serverid;

            if (data.roleid && data.serverid) {
                hEDZOT = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }
            this.log(E[0x1c1], role_info);

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
                    url: 'https://' + HOST + E[0x1e0e],
                    method: E[0xb5],
                    dataType: E[0x767],
                    header: {
                        'content-type': E[0x153] // 默认值
                    },
                    data: roleInfo,
                    success: function (res) {
                        console.log(E[0x1e0f] + JSON.stringify(res));
                    }
                });
            }

            this.upRoleInfo(E[0x1e10], data);

            if (hEZTOD && typeof hEZTOD == E[0x1b8]) {
                var params = {
                    pf_uid: uid,
                    partner_uid: partner_data.openid,
                    role_id: data.roleid,
                    role_name: data.rolename,
                    server_id: data.serverid,
                    server_name: data.servername,
                    invite_code: hEZTOD.invite,
                    hEZTOD: JSON.stringify(hEZTOD),
                    partner_user_info: JSON.stringify(partner_data)
                };

                wx.request({
                    url: 'https://' + HOST + '/partner/data/report_share_info/' + config.partner_id + '/' + config.game_pkg,
                    method: E[0xb5],
                    dataType: E[0x767],
                    header: {
                        'content-type': E[0x153] // 默认值
                    },
                    data: params,
                    success: function (res) {
                        console.log(E[0x1df5] + JSON.stringify(params));
                        console.log(E[0x1df6] + JSON.stringify(res));
                    }
                });
            }
        },

        subscribeMessage: function (tmplIds, callback) {
            console.log(E[0x1e11] + tmplIds);
            //获取模板ID
            callbacks[E[0x137]] = typeof callback == E[0x1bb] ? callback : null;
            let data = {
                template: tmplIds[0], // 模版ID 必填
                role_id: hEDZOT ? hEDZOT.role_id : '',
                tpl_type: 2 // 当前订阅活动分类：1离线收益提醒;2活动提醒
            };
            Sygame.syGetSubscribe(data).then(res => {
                if (res.status == 1001) {
                    res.errMsg = E[0x139];
                    res[tmplIds[0]] = res.type;
                    callbacks[E[0x137]] && callbacks[E[0x137]](res);
                } else {
                    callbacks[E[0x137]] && callbacks[E[0x137]](res);
                }
            });
        },

        //进入游戏
        logEnterGame: function (data) {
            var uid = wx.getStorageSync(E[0x1ded]);
            var username = wx.getStorageSync(E[0x1dee]);

            var role_info = {};
            role_info[E[0x1e09]] = uid;
            role_info[E[0x1e0a]] = username;
            role_info[E[0x1e0b]] = data.roleid;
            role_info[E[0x1e0c]] = data.rolelevel;
            role_info[E[0x1e0d]] = data.rolename;
            role_info[E[0x11]] = data.serverid;

            if (data.roleid && data.serverid) {
                hEDZOT = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(E[0x627], role_info);

            this.upRoleInfo(E[0x1e12], data);

            //进入游戏确认邀请成功
            if (hEZTOD) {
                this.updateShare(hEZTOD.invite, hEZTOD.invite_type, hEZTOD.is_new, data.roleid, data.serverid, hEZTOD.scene);
            }
        },

        //角色升级
        logRoleUpLevel: function (data) {
            var uid = wx.getStorageSync(E[0x1ded]);
            var username = wx.getStorageSync(E[0x1dee]);

            var role_info = {};
            role_info[E[0x1e09]] = uid;
            role_info[E[0x1e0a]] = username;
            role_info[E[0x1e0b]] = data.roleid;
            role_info[E[0x1e0c]] = data.rolelevel;
            role_info[E[0x1e0d]] = data.rolename;
            role_info[E[0x11]] = data.serverid;

            if (data.roleid && data.serverid) {
                hEDZOT = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(E[0x1e13], role_info);
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
                console.log(E[0x1e14], res);
            });
        },

        // 渠道-- 获取分享开关配置
        shareConfig: function (callback) {
            var data = {
                'code': 1,
                'msg': E[0x1e15],
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
                            game_list[i][E[0x1e16]] = i + 1;
                            game_list[i][E[0x1e17]] = game_list_init[i][E[0x1e18]];
                            game_list[i][E[0x1e19]] = game_list_init[i][E[0x1e1a]];
                            game_list[i][E[0x1e1b]] = game_list_init[i][E[0x423]];
                            game_list[i][E[0x1e1c]] = game_list_init[i][E[0x1e1c]];
                            game_list[i][E[0x1e1d]] = game_list_init[i][E[0x1e1d]];
                            game_list[i][E[0x1e1e]] = game_list_init[i][E[0x1e1e]];
                            game_list[i][E[0x1e1f]] = game_list_init[i][E[0x1e1f]];
                        }

                        ret.data = game_list;
                    }
                } else {
                    ret.code = res.data.status;
                    ret.msg = res.data.info;
                    ret.data = res.data.data ? res.data.data : {};
                }
                console.log(E[0x1e20] + JSON.stringify(ret));

                callback && callback(ret);
            });
        },

        openBox: function (callback) {
            Sygame.syClickOpenBox().then(res => {
                console.log(E[0x1e21], res);
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
                console.log(E[0x1e22], res);
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
            var uuid = wx.getStorageSync(E[0x1de4]);
            var idfv = wx.getStorageSync(E[0x1de5]);
            var ad_code = wx.getStorageSync(E[0x1de6]);

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
                mac: E[0x1e23],
                net_type: system.wifiSignal == 0 ? E[0x1e24] : E[0x1e25],
                os_ver: system.system,
                sdk_ver: system.version, //存放的是微信版本号
                game_ver: config.game_ver, //存放的是SDK版本号
                device: system.platform == E[0x5a] ? 1 : 2
            };
        },

        //统一发送log
        log: function (type, data) {
            var public_data = this.getPublicData();
            for (var key in data) {
                public_data[key] = data[key];
            }

            console.log(E[0x1e26] + type);
            console.log(public_data);

            wx.request({
                url: 'https://' + HOST + '/partner/h5Log/?type=' + type + E[0x1e27] + encodeURIComponent(JSON.stringify(public_data))
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
            this.getShareInfo(E[0x1de7], function (data) {
                callback && callback({ title: data.title, 'img': data.img });
            });
        }
    };
}

function run(method, data, callback) {
    method in hEDZTO && hEDZTO[method](data, callback);
}

exports.init = function (data, callback) {
    run(E[0xc1], data, callback);
};

exports.login = function (callback) {
    run(E[0xd1], '', callback);
};

exports.pay = function (data, callback) {
    run(E[0x11c], data, callback);
};
exports.subscribeMessage = function (data, callback) {
    run(E[0x137], data, callback);
};

exports.openService = function () {
    run(E[0x12e]);
};

exports.logCreateRole = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(E[0x129], data);
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

    run(E[0x12b], data);
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
    run(E[0x12d], data);
};

exports.share = function (type, data) {
    var cp_activity_id = data && data.activity_id ? data.activity_id : '';

    var params = {
        type: type,
        cp_activity_id: cp_activity_id
    };

    run('share', params);
};

exports.msgCheck = function (data, callback) {
    run('msgCheck', data, callback);
};

exports.shareConfig = function (callback) {
    run('shareConfig', callback);
};

exports.shareRecommend = function (callback) {
    run('shareRecommend', callback);
};

exports.openBox = function (callback) {
    run(E[0x1e28], callback);
};

exports.clickBoxGame = function (data) {
    run(E[0x1e29], data);
};

exports.downloadClient = function () {
    run(E[0x1e2a]);
};

exports.getConfig = function () {
    return {
        game_id: config.game_id,
        game_pkg: config.game_pkg,
        partner_id: config.partner_id
    };
};

exports.getPublicData = function () {
    run(E[0x1e2b]);
};

exports.setMessageToFriendQuery = function (data, callback) {
    run(E[0x1e2c], data, callback);
};

exports.getFriendShareInfo = function (callback) {
    run('getFriendShareInfo', callback);
};