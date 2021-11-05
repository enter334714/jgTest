var i = wx.$R;
import Sygame from './rttr';
window[i[298697]] = Sygame;
var config = {
    game_id: '88',
    game_pkg: i[298698], //盛也马甲包-王女异闻录online
    partner_label: i[298699],
    partner_id: i[298700],
    game_ver: i[298701],
    is_auth: false //授权登录
};
window.config = config;
var _rUYEFS = _rUEFYS();
var HOST = i[298702];
var _rUESFY = null;
var _rUESYF = null;
var partner_user_data = {};
var user_invite_by_activity = null;
var checkHandler = null;
var loginHandler = null;
var requestCallback = false;

function _rUEFYS() {
    var callbacks = {};
    return {
        order_data: {},
        init: function (ops, callback) {
            var game_ver = ops && ops.game_ver ? ops.game_ver : 0;
            console.log(i[298703]);
            var self = this;

            var uuid = wx.getStorageSync(i[298704]);
            var is_new;
            if (!uuid) {
                uuid = self.uuid(16, 32);
                wx.setStorageSync(i[298704], uuid);
                is_new = 1;
            } else {
                is_new = 0;
            }
            var idfv = wx.getStorageSync(i[298705]);
            if (!idfv) {
                idfv = self.uuid(16, 32);
                wx.setStorageSync(i[298705], idfv);
            }

            var info = wx.getLaunchOptionsSync();
            var scene = info.scene ? info.scene : '';

            //判断今天是否已经上报过
            if (is_new && info.query && info.query.ad_code) {
                wx.setStorageSync(i[298706], info.query.ad_code);
            }

            var data = {
                install: is_new,
                scene: scene
            };
            self.log('start', data);

            //渠道初始化
            Sygame.init(info);

            //玩家是分享过来的，单独上报给服务器
            var invite = info.query && info.query.invite ? info.query.invite : '';
            var invite_type = info.query && info.query.invite_type ? info.query.invite_type : '';
            var cp_activity_id = info.query && info.query.cp_activity_id ? info.query.cp_activity_id : '';

            // 普通分享不存在活动ID的话  再看下定向分享是否存在
            if (!cp_activity_id) {
                cp_activity_id = info.query && info.query.shareMessageToFriendScene ? info.query.shareMessageToFriendScene : '';
                invite_type = cp_activity_id ? i[298707] : '';
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
                _rUESYF = {
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
            console.log(i[298708]);
            callbacks[i[280166]] = typeof callback == i[298207] ? callback : null;
            Sygame.syLogin().then(res => {
                console.log(i[298709], res);
                if (res.code === 1001) {
                    partner_user_data = res;
                    self.do_login(partner_user_data);
                } else {
                    callbacks[i[280166]] && callbacks[i[280166]](1, { errMsg: res.message });
                }
            });
        },

        do_login: function (user_info) {
            var self = this;

            var login_data = self.getPublicData();
            login_data['partner_user_info'] = JSON.stringify(user_info);

            if (_rUESYF && typeof _rUESYF == i[280572]) {
                for (var key in _rUESYF) {
                    login_data[key] = _rUESYF[key];
                }
            }

            var lastTime = Date.now();
            wx.request({
                url: i[298710] + HOST + '/partner/auth',
                method: i[280138],
                dataType: i[283501],
                header: {
                    'content-type': 'application/x-www-form-urlencoded' // 默认值
                },
                data: login_data,
                success: function (res) {
                    console.log(i[298711] + JSON.stringify(res));
                    requestCallback = true;
                    if (loginHandler) clearTimeout(loginHandler);
                    loginHandler = null;
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            partner_user_data.openid = data.data.ext;
                            try {
                                wx.setStorageSync(i[298712], data.data.sdk_token);
                                wx.setStorageSync(i[298713], data.data.user_id);
                                wx.setStorageSync('plat_username', data.data.username);
                                if (data.data.ext) {
                                    wx.setStorageSync(i[298714], data.data.ext);
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
                            callbacks[i[280166]] && callbacks[i[280166]](0, userData);
                        } else {
                            callbacks[i[280166]] && callbacks[i[280166]](1, { type: "wx.request.success", errMsg: data.msg, time: Date.now() - lastTime, res: res });
                        }

                        //登录成功，加载右上角分享数据
                        self.getShareInfo(i[298715], function (data) {
                            console.log(i[298716]);
                            wx.onShareAppMessage(function () {
                                //记录开始分享
                                self.logStartShare(i[298715]);
                                return {
                                    title: data.title,
                                    imageUrl: data.img,
                                    query: data.query
                                };
                            });
                        });
                    } else {
                        callbacks[i[280166]] && callbacks[i[280166]](1, { type: "wx.request.success", errMsg: i[298717], time: Date.now() - lastTime, res: res });
                    }
                },
                fail: function (res) {
                    console.log(i[298718]);
                    console.log(res);

                    requestCallback = true;
                    if (loginHandler) clearTimeout(loginHandler);
                    loginHandler = null;
                    callbacks[i[280166]] && callbacks[i[280166]](1, { type: "wx.request.fail", errMsg: res.errMsg, time: Date.now() - lastTime, res: res });
                }
            });
            if (!requestCallback) {
                var timeOutFunc = function () {
                    console.log(i[298719]);

                    callbacks[i[280166]] && callbacks[i[280166]](1, { type: "wx.request", errMsg: i[298720], time: Date.now() - lastTime });
                    callbacks[i[280166]] = null; //回调后置空，以免success或fail里重复回调
                };
                loginHandler = setTimeout(timeOutFunc, 20000);
            }
        },

        share: function (data) {
            callbacks['share'] = typeof callback == i[298207] ? callback : null;
            var type = data.type || 'share';
            var cp_activity_id = data.cp_activity_id || '';

            console.log(i[298721] + type);
            var self = this;
            this.getShareInfo(type, function (data) {
                if (cp_activity_id != '' && data.query != '') {
                    data.query = data.query + i[298722] + cp_activity_id;
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
            var sdk_token = wx.getStorageSync(i[298712]);
            wx.request({
                url: i[298710] + HOST + '/game/min/?ac=logStartShare',
                method: i[280138],
                dataType: i[283501],
                header: {
                    'content-type': 'application/x-www-form-urlencoded' // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    server_id: _rUESFY ? _rUESFY.server_id : '',
                    role_id: _rUESFY ? _rUESFY.role_id : '',
                    type: type
                },
                success: function (res) {}
            });
        },

        openService: function () {
            wx.openCustomerServiceConversation();
        },

        checkGameVersion: function (game_ver, callback) {
            console.log(i[298723]);
            callbacks[i[284274]] = typeof callback == i[298207] ? callback : null;
            var sdk_token = wx.getStorageSync(i[298712]);
            wx.request({
                url: i[298710] + HOST + '/game/min/?ac=checkGameVersion',
                method: i[280138],
                dataType: i[283501],
                header: {
                    'content-type': 'application/x-www-form-urlencoded' // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    game_ver: game_ver
                },
                success: function (res) {
                    console.log(i[298724]);
                    console.log(res);
                    requestCallback = true;
                    if (checkHandler) clearTimeout(checkHandler);
                    checkHandler = null;
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callbacks[i[284274]] && callbacks[i[284274]](data.data);
                        } else {
                            callbacks[i[284274]] && callbacks[i[284274]]({ develop: 0 });
                        }
                    } else {
                        callbacks[i[284274]] && callbacks[i[284274]]({ develop: 0 });
                    }
                },
                fail: function (res) {
                    console.log(i[298725]);
                    console.log(res);
                    requestCallback = true;
                    if (checkHandler) clearTimeout(checkHandler);
                    checkHandler = null;
                    callbacks[i[284274]] && callbacks[i[284274]]({ develop: 0 });
                }
            });
            if (!requestCallback) {
                var timeOutFunc = function () {
                    console.log(i[298726]);
                    callbacks[i[284274]] && callbacks[i[284274]]({ develop: 0 });
                    callbacks[i[284274]] = null; //回调后置空，以免success或fail里重复回调
                };
                checkHandler = setTimeout(timeOutFunc, 10000);
            }
        },

        getShareInfo: function (type, callback) {
            console.log(i[298727]);
            var sdk_token = wx.getStorageSync(i[298712]);
            wx.request({
                url: i[298710] + HOST + '/game/min/?ac=shareConfig',
                method: i[280138],
                dataType: i[283501],
                header: {
                    'content-type': 'application/x-www-form-urlencoded' // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    type: type,
                    server_id: _rUESFY ? _rUESFY.server_id : '',
                    role_id: _rUESFY ? _rUESFY.role_id : '',
                    no_log: 1 //设置为1后就不在这个接口打log，交给logStartShare接口
                },
                success: function (res) {
                    console.log(i[298728]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callback && callback(data.data);
                        } else {
                            callbacks['share'] && callbacks['share'](1, {
                                errMsg: i[298729] + data.msg
                            });
                        }
                    } else {
                        callbacks['share'] && callbacks['share'](1, {
                            errMsg: i[298730]
                        });
                    }
                }
            });
        },

        updateShare: function (invite, invite_type, is_new, role_id, server_id, scene) {
            console.log(i[298731]);
            var sdk_token = wx.getStorageSync(i[298712]);
            wx.request({
                url: i[298710] + HOST + '/game/min/?ac=updateShare',
                method: i[280138],
                dataType: i[283501],
                header: {
                    'content-type': 'application/x-www-form-urlencoded' // 默认值
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
                    console.log(i[298732]);
                    console.log(res);
                }
            });
        },

        msgCheck: function (content, callback) {
            console.log(i[298733]);
            var sdk_token = wx.getStorageSync(i[298712]);
            wx.request({
                url: i[298710] + HOST + '/partner/data/msgSecCheck/' + config.partner_id + '/' + config.game_pkg,
                method: i[280138],
                dataType: i[283501],
                header: {
                    'content-type': 'application/x-www-form-urlencoded' // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    content: content
                },
                success: function (res) {
                    console.log(i[298734]);
                    console.log(res);
                    callback && callback(res);
                }
            });
        },

        pay: function (data, callback) {
            var self = this;
            self.startPay(data, callback);
        },

        //支付接口
        startPay: function (data, callback) {
            console.log(i[298735], data);
            var self = this;
            callbacks[i[280193]] = typeof callback == i[298207] ? callback : null;
            //先下单
            var sdk_token = wx.getStorageSync(i[298712]);
            var session_key = wx.getStorageSync(i[298714]);
            if (!sdk_token && !session_key) {
                callbacks[i[280193]] && callbacks[i[280193]](1, { errMsg: i[298736] });
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
            public_data['order_data'] = JSON.stringify(order_data);

            //发起网络请求
            wx.request({
                url: i[298710] + HOST + '/partner/order',
                method: i[280138],
                dataType: i[283501],
                header: {
                    'content-type': 'application/x-www-form-urlencoded' // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(i[298737], res);

                    if (res.statusCode === 200) {
                        var data = res.data;
                        if (data.state && data.data.pay_data) {
                            console.log(i[298738] + JSON.stringify(data.data.pay_data));

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
                                console.log(i[298739], res);
                            });
                        } else {
                            callbacks[i[280193]] && callbacks[i[280193]](1, { errMsg: data.errMsg });
                        }
                    } else {
                        callbacks[i[280166]] && callbacks[i[280166]](1, { errMsg: i[298717] });
                    }
                }
            });
        },

        logCreateRole: function (data) {
            var uid = wx.getStorageSync(i[298713]);
            var username = wx.getStorageSync('plat_username');

            var role_info = {};
            role_info['user_id'] = uid;
            role_info['user_name'] = username;
            role_info['role_id'] = data.roleid;
            role_info['role_lev'] = data.rolelevel;
            role_info['role_name'] = data.rolename;
            role_info['server_id'] = data.serverid;

            if (data.roleid && data.serverid) {
                _rUESFY = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }
            this.log('create', role_info);

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
                    url: i[298710] + HOST + '/game/min/?ac=report2Cp',
                    method: i[280138],
                    dataType: i[283501],
                    header: {
                        'content-type': 'application/x-www-form-urlencoded' // 默认值
                    },
                    data: roleInfo,
                    success: function (res) {
                        console.log(i[298740] + JSON.stringify(res));
                    }
                });
            }

            this.upRoleInfo('createrole', data);
        },

        //进入游戏
        logEnterGame: function (data) {
            var uid = wx.getStorageSync(i[298713]);
            var username = wx.getStorageSync('plat_username');

            var role_info = {};
            role_info['user_id'] = uid;
            role_info['user_name'] = username;
            role_info['role_id'] = data.roleid;
            role_info['role_lev'] = data.rolelevel;
            role_info['role_name'] = data.rolename;
            role_info['server_id'] = data.serverid;

            if (data.roleid && data.serverid) {
                _rUESFY = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log('enter', role_info);

            this.upRoleInfo('entergame', data);

            //进入游戏确认邀请成功
            if (_rUESYF) {
                this.updateShare(_rUESYF.invite, _rUESYF.invite_type, _rUESYF.is_new, data.roleid, data.serverid, _rUESYF.scene);
            }
        },

        //角色升级
        logRoleUpLevel: function (data) {
            var uid = wx.getStorageSync(i[298713]);
            var username = wx.getStorageSync('plat_username');

            var role_info = {};
            role_info['user_id'] = uid;
            role_info['user_name'] = username;
            role_info['role_id'] = data.roleid;
            role_info['role_lev'] = data.rolelevel;
            role_info['role_name'] = data.rolename;
            role_info['server_id'] = data.serverid;

            if (data.roleid && data.serverid) {
                _rUESFY = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(i[298741], role_info);
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
                console.log(i[298742], res);
            });
        },

        // 渠道-- 获取分享开关配置
        shareConfig: function (callback) {
            var data = {
                'code': 1,
                'msg': i[296543],
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
                            game_list[i][i[298743]] = game_list_init[i][i[298743]];
                            game_list[i][i[289881]] = i + 1;
                            game_list[i][i[298744]] = game_list_init[i][i[290826]];
                            game_list[i][i[298745]] = game_list_init[i][i[298746]];
                            game_list[i][i[298747]] = game_list_init[i][i[280401]];
                            game_list[i][i[298748]] = game_list_init[i][i[298748]];
                            game_list[i]['preview_img'] = game_list_init[i]['preview_img'];
                            game_list[i][i[298749]] = game_list_init[i][i[298749]];
                            game_list[i][i[298750]] = game_list_init[i][i[298750]];
                        }

                        ret.data = game_list;
                    }
                } else {
                    ret.code = res.data.status;
                    ret.msg = res.data.info;
                    ret.data = res.data.data ? res.data.data : {};
                }
                console.log(i[298751] + JSON.stringify(ret));

                callback && callback(ret);
            });
        },

        openBox: function (callback) {
            Sygame.syClickOpenBox().then(res => {
                console.log(i[298752], res);
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
                console.log(i[298753], res);
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
            var uuid = wx.getStorageSync(i[298704]);
            var idfv = wx.getStorageSync(i[298705]);
            var ad_code = wx.getStorageSync(i[298706]);

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
                mac: i[298754],
                net_type: system.wifiSignal == 0 ? '4G' : i[298755],
                os_ver: system.system,
                sdk_ver: system.version, //存放的是微信版本号
                game_ver: config.game_ver, //存放的是SDK版本号
                device: system.platform == 'android' ? 1 : 2
            };
        },

        //统一发送log
        log: function (type, data) {
            var public_data = this.getPublicData();
            for (var key in data) {
                public_data[key] = data[key];
            }

            console.log(i[298756] + type);
            console.log(public_data);

            wx.request({
                url: i[298710] + HOST + '/partner/h5Log/?type=' + type + i[298757] + encodeURIComponent(JSON.stringify(public_data))
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
            this.getShareInfo(i[298707], function (data) {
                callback && callback({ title: data.title, 'img': data.img });
            });
        }
    };
}

function run(method, data, callback) {
    method in _rUYEFS && _rUYEFS[method](data, callback);
}

exports.init = function (data, callback) {
    run(i[280147], data, callback);
};

exports.login = function (callback) {
    run(i[280166], '', callback);
};

exports.pay = function (data, callback) {
    run(i[280193], data, callback);
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
        rolelevel: roleLevel
    };
    run('logCreateRole', data);
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

    run('logEnterGame', data);
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
    run(i[280195], data);
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
    run(i[280126], data, callback);
};

exports.shareConfig = function (callback) {
    run('shareConfig', callback);
};

exports.shareRecommend = function (callback) {
    run('shareRecommend', callback);
};

exports.openBox = function (callback) {
    run(i[283087], callback);
};

exports.clickBoxGame = function (data) {
    run(i[298758], data);
};

exports.downloadClient = function () {
    run(i[298759]);
};

exports.getConfig = function () {
    return {
        game_id: config.game_id,
        game_pkg: config.game_pkg,
        partner_id: config.partner_id
    };
};

exports.getPublicData = function () {
    run(i[298760]);
};

exports.setMessageToFriendQuery = function (data, callback) {
    run('setMessageToFriendQuery', data, callback);
};

exports.getFriendShareInfo = function (callback) {
    run('getFriendShareInfo', callback);
};