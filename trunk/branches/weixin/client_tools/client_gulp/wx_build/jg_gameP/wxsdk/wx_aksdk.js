import Sygame from './helper';
window["Sygame"] = Sygame;
var config = {
    game_id: '88',
    game_pkg: 'tjqy_rqxsmflb_HK', //盛也马甲包-盛也-柔情小师妹福利版
    partner_label: 'shengye2',
    partner_id: '398',
    game_ver: '15.0.1',
    is_auth: false, //授权登录
};
window.config = config;
var PARTNER_SDK = mainSDK();
var HOST = 'sdk.sh9130.com';
var user_game_info = null;
var user_invite_info = null;
var partner_user_data={};
var user_invite_by_activity = null;
var checkHandler = null;
var loginHandler = null;
var requestCallback = false;

function mainSDK() {
    var callbacks = {};
    return {
        order_data: {},
        init: function (ops, callback) {
            var game_ver = ops && ops.game_ver ? ops.game_ver : 0;
            console.log("[SDK]CP调用init接口");
            var self = this;

            var uuid = wx.getStorageSync('plat_uuid');
            var is_new;
            if (!uuid) {
                uuid = self.uuid(16, 32);
                wx.setStorageSync('plat_uuid', uuid);
                is_new = 1;
            } else {
                is_new = 0;
            }
            var idfv = wx.getStorageSync('plat_idfv');
            if (!idfv) {
                idfv = self.uuid(16, 32);
                wx.setStorageSync('plat_idfv', idfv);
            }

            var info = wx.getLaunchOptionsSync();
            var scene = info.scene ? info.scene : '';

            //判断今天是否已经上报过
            if (is_new && info.query && info.query.ad_code) {
                wx.setStorageSync('plat_ad_code', info.query.ad_code);
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
            var cp_activity_id  = info.query && info.query.cp_activity_id ? info.query.cp_activity_id : '';

            // 普通分享不存在活动ID的话  再看下定向分享是否存在
            if(!cp_activity_id){
                cp_activity_id  = info.query && info.query.shareMessageToFriendScene ? info.query.shareMessageToFriendScene : '';
                invite_type = cp_activity_id?'activity':'';
            }

            // 带活动ID
            if(cp_activity_id){
                user_invite_by_activity = {
                    invite: invite,
                    invite_type: invite_type,
                    is_new: is_new,
                    scene: scene,
                    cp_activity_id:cp_activity_id
                };
            }

            // 带邀请码
            if (invite) {
                user_invite_info = {
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

        login: function (data,callback) {
            var self = this;
            console.log("[SDK]调起登录");
            callbacks['login'] = typeof callback == 'function' ? callback : null;
            Sygame.syLogin().then((res) => {
                console.log("[SDK]登录回调:",res);
                if(res.code===1001){
                    partner_user_data =res;
                    self.do_login(partner_user_data);
                }else{
                    callbacks['login'] && callbacks['login'](1, {errMsg: res.message});
                }
            });
        },

        do_login: function (user_info) {
            var self = this;

            var login_data = self.getPublicData();
            login_data['partner_user_info'] = JSON.stringify(user_info);

            if (user_invite_info && typeof user_invite_info == 'object') {
                for (var key in user_invite_info) {
                    login_data[key] = user_invite_info[key];
                }
            }

            var lastTime = Date.now();
            wx.request({
                url: 'https://' + HOST + '/partner/auth',
                method: 'POST',
                dataType: 'json',
                header: {
                    'content-type': 'application/x-www-form-urlencoded' // 默认值
                },
                data: login_data,
                success: function (res) {
                    console.log("[SDK]登录结果：" + JSON.stringify(res));
                    requestCallback = true;
                    if (loginHandler) clearTimeout(loginHandler);
                    loginHandler = null;
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            partner_user_data.openid = data.data.ext;
                            try {
                                wx.setStorageSync('plat_sdk_token', data.data.sdk_token);
                                wx.setStorageSync('plat_uid', data.data.user_id);
                                wx.setStorageSync('plat_username', data.data.username);
                                if(data.data.ext){
                                    wx.setStorageSync('plat_session_key', data.data.ext);
                                }
                            } catch (e) {
                            }
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
                            callbacks['login'] && callbacks['login'](0, userData);
                        } else {
                            callbacks['login'] && callbacks['login'](1, {type: "wx.request.success", errMsg: data.msg, time: (Date.now()-lastTime), res: res});
                        }

                        //登录成功，加载右上角分享数据
                        self.getShareInfo('menu', function (data) {
                            console.log("[SDK]开始监听右上角菜单分享");
                            wx.onShareAppMessage(function () {
                                //记录开始分享
                                self.logStartShare('menu');
                                return {
                                    title: data.title,
                                    imageUrl: data.img,
                                    query: data.query,
                                }
                            });
                        });

                    } else {
                        callbacks['login'] && callbacks['login'](1, {type: "wx.request.success", errMsg: '请求平台服务器失败！', time: (Date.now()-lastTime), res: res});
                    }
                },
                fail: function(res){
                    console.log("[SDK]登录失败");
                    console.log(res);

                    requestCallback = true;
                    if (loginHandler) clearTimeout(loginHandler);
                    loginHandler = null;
                    callbacks['login'] && callbacks['login'](1, {type: "wx.request.fail", errMsg: res.errMsg, time: (Date.now()-lastTime), res: res});
                }
            });
            if (!requestCallback) {
                var timeOutFunc = function() {
                    console.log("[SDK]登录超时");

                    callbacks['login'] && callbacks['login'](1, {type: "wx.request", errMsg: "登录超时20秒无返回", time: (Date.now()-lastTime)});
                    callbacks['login'] = null; //回调后置空，以免success或fail里重复回调
                }
                loginHandler = setTimeout(timeOutFunc, 20000);
            }
        },

        share: function (data) {
            callbacks['share'] = typeof callback == 'function' ? callback : null;
            var type = data.type || 'share';
            var cp_activity_id = data.cp_activity_id || '';

            console.log("[SDK]CP调用分享 type=" + type);
            var self = this;
            this.getShareInfo(type, function (data) {
                if(cp_activity_id !='' && data.query != ''){
                    data.query = data.query + '&cp_activity_id='+ cp_activity_id;
                }

                //记录开始分享
                self.logStartShare(type);
                wx.shareAppMessage({
                    title: data.title,
                    imageUrl: data.img,
                    query: data.query,
                });
            });
        },

        logStartShare: function (type) {
            var sdk_token = wx.getStorageSync('plat_sdk_token');
            wx.request({
                url: 'https://' + HOST + '/game/min/?ac=logStartShare',
                method: 'POST',
                dataType: 'json',
                header: {
                    'content-type': 'application/x-www-form-urlencoded' // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    server_id: user_game_info ? user_game_info.server_id : '',
                    role_id: user_game_info ? user_game_info.role_id : '',
                    type: type,
                },
                success: function (res) {}
            });
        },

        openService: function () {
            wx.openCustomerServiceConversation();
        },

        checkGameVersion: function (game_ver, callback) {
            console.log("[SDK]检查游戏版本");
            callbacks['check'] = typeof callback == 'function' ? callback : null;
            var sdk_token = wx.getStorageSync('plat_sdk_token');
            wx.request({
                url: 'https://' + HOST + '/game/min/?ac=checkGameVersion',
                method: 'POST',
                dataType: 'json',
                header: {
                    'content-type': 'application/x-www-form-urlencoded' // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    game_ver: game_ver
                },
                success: function (res) {
                    console.log("[SDK]获取游戏版本成功");
                    console.log(res);
                    requestCallback = true;
                    if (checkHandler) clearTimeout(checkHandler);
                    checkHandler = null;
                    if(res.statusCode == 200){
                        var data = res.data;
                        if(data.state){
                            callbacks['check'] && callbacks['check'](data.data);
                        }else{
                            callbacks['check'] && callbacks['check']({develop: 0});
                        }
                    }else{
                        callbacks['check'] && callbacks['check']({develop: 0});
                    }
                },
                fail: function(res){
                    console.log("[SDK]获取游戏版本失败");
                    console.log(res);
                    requestCallback = true;
                    if (checkHandler) clearTimeout(checkHandler);
                    checkHandler = null;
                    callbacks['check'] && callbacks['check']({develop: 0});
                }
            });
            if (!requestCallback) {
                var timeOutFunc = function() {
                    console.log("[SDK]获取游戏版本超时");
                    callbacks['check'] && callbacks['check']({develop: 0});
                    callbacks['check'] = null; //回调后置空，以免success或fail里重复回调
                }
                checkHandler = setTimeout(timeOutFunc, 10000);
            }
        },

        getShareInfo: function (type, callback) {
            console.log("[SDK]获取分享参数");
            var sdk_token = wx.getStorageSync('plat_sdk_token');
            wx.request({
                url: 'https://' + HOST + '/game/min/?ac=shareConfig',
                method: 'POST',
                dataType: 'json',
                header: {
                    'content-type': 'application/x-www-form-urlencoded' // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    type: type,
                    server_id: user_game_info ? user_game_info.server_id : '',
                    role_id: user_game_info ? user_game_info.role_id : '',
                    no_log: 1 //设置为1后就不在这个接口打log，交给logStartShare接口
                },
                success: function (res) {
                    console.log("[SDK]获取分享参数结果");
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callback && callback(data.data);
                        } else {
                            callbacks['share'] && callbacks['share'](1, {
                                errMsg: '分享失败：' + data.msg
                            });
                        }
                    } else {
                        callbacks['share'] && callbacks['share'](1, {
                            errMsg: '获取分享数据失败！'
                        });
                    }
                }
            });
        },

        updateShare: function (invite, invite_type, is_new, role_id, server_id, scene) {
            console.log("[SDK]分享过来的玩家上报给服务器");
            var sdk_token = wx.getStorageSync('plat_sdk_token');
            wx.request({
                url: 'https://' + HOST + '/game/min/?ac=updateShare',
                method: 'POST',
                dataType: 'json',
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
                    console.log("[SDK]上报分享结果返回:");
                    console.log(res);
                }
            });
        },

        msgCheck: function (content, callback) {
            console.log("[SDK]查看文本是否有违规内容");
            var sdk_token = wx.getStorageSync('plat_sdk_token');
            wx.request({
                url: 'https://' + HOST + '/partner/data/msgSecCheck/'+config.partner_id+'/'+config.game_pkg,
                method: 'POST',
                dataType: 'json',
                header: {
                    'content-type': 'application/x-www-form-urlencoded' // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    content:content,
                },
                success: function (res) {
                    console.log("[SDK]查看文本是否有违规内容结果返回:");
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
            console.log("[SDK]调起支付，CP传值：",data);
            var self = this;
            callbacks['pay'] = typeof callback == 'function' ? callback : null;
            //先下单
            var sdk_token = wx.getStorageSync('plat_sdk_token');
            var session_key = wx.getStorageSync('plat_session_key');
            if (!sdk_token && !session_key) {
                callbacks['pay'] && callbacks['pay'](1, {errMsg: "用户未登录，支付失败！"});
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
                platform: sysInfo.platform,
            };
            self.order_data = order_data;

            var public_data = self.getPublicData();
            public_data['order_data'] = JSON.stringify(order_data);

            //发起网络请求
            wx.request({
                url: 'https://' + HOST + '/partner/order',
                method: 'POST',
                dataType: 'json',
                header: {
                    'content-type': 'application/x-www-form-urlencoded' // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log("[SDK]完成创建订单",res);

                    if (res.statusCode === 200) {
                        var data = res.data;
                        if (data.state && data.data.pay_data) {
                            console.log("[SDK]联运支付参数"+JSON.stringify(data.data.pay_data));

                            let pay_data = {
                                product_name: data.data.pay_data.productName,// 商品名称 可选
                                product_id: data.data.pay_data.productId,    // 商品ID 可选
                                order_id: data.data.pay_data.orderId,        // string 订单号 必填，游戏⽅⽣成的订单id，⻓度为10-32的字符串，是订单的唯⼀标识，即使清档后也不能重复。建议使⽤appid+⽆序字符串成，以避免和其他游戏的订单重复，若⻓度超出，可使⽤md5加密。
                                product_price: data.data.pay_data.amount,    // 必填,商品价格,以元为单位
                                extends_param1: data.data.pay_data.orderId,  // 选填,服务器将此参数原封不动回传⾄CP服务器
                                extends_param2: data.data.pay_data.orderId,  // 选填,服务器将此参数原封不动回传⾄CP服务器
                                role_id: data.data.pay_data.roleId,          // 选填,有的话尽量填写
                                role_name: data.data.pay_data.roleName,      // 选填,⻆⾊名称
                                role_level: data.data.pay_data.roleLevel,    // 选填,⻆⾊等级
                                server_id: data.data.pay_data.serverId,      // 必填,服务器ID
                                server_name: data.data.pay_data.serverName,  // 选填,服务器名称
                                role_vip: 0                                  // 选填,VIP等级
                            }

                            Sygame.syPay(pay_data).then((res) => {
                                console.log('支付结果',res);
                            });

                        } else {
                            callbacks['pay'] && callbacks['pay'](1, {errMsg: data.errMsg});
                        }
                    } else {
                        callbacks['login'] && callbacks['login'](1, {errMsg: '请求平台服务器失败！'});
                    }
                }
            });
        },

        logCreateRole: function (data) {
            var uid = wx.getStorageSync('plat_uid');
            var username = wx.getStorageSync('plat_username');

            var role_info = {};
            role_info['user_id'] = uid;
            role_info['user_name'] = username;
            role_info['role_id'] = data.roleid;
            role_info['role_lev'] = data.rolelevel;
            role_info['role_name'] = data.rolename;
            role_info['server_id'] = data.serverid;

            if (data.roleid && data.serverid) {
                user_game_info = {
                    role_id: data.roleid,
                    server_id: data.serverid,
                };
            }
            this.log('create', role_info);


            // 记录从活动分享进入的角色信息
            if(user_invite_by_activity){
                var scene       = user_invite_by_activity.scene;
                var is_new      = user_invite_by_activity.is_new;
                var invite_code = user_invite_by_activity.invite;
                var invite_type = user_invite_by_activity && user_invite_by_activity.invite_type ? user_invite_by_activity.invite_type : '';
                var cp_activity_id = user_invite_by_activity.cp_activity_id;

                var roleInfo = {
                    uid :uid,
                    role_id :data.roleid,
                    role_name :data.rolename,
                    server_id :data.serverid,
                    server_name :data.servername,
                    game_id:config.game_id,
                    partner_id :config.partner_id,
                    game_pkg :config.game_pkg,
                    scene :scene,
                    is_new :is_new,
                    invite_code :invite_code,
                    invite_type :invite_type,
                    cp_activity_id :cp_activity_id,
                }

                wx.request({
                    url: 'https://' + HOST + '/game/min/?ac=report2Cp',
                    method: 'POST',
                    dataType: 'json',
                    header: {
                        'content-type': 'application/x-www-form-urlencoded' // 默认值
                    },
                    data: roleInfo,
                    success: function (res) {
                        console.log("[SDK]活动上报分享结果返回:"+JSON.stringify(res));
                    }
                });

            }

            this.upRoleInfo('createrole', data);
            if (user_invite_info && typeof user_invite_info == 'object') {
                var params = {
                    pf_uid:uid,
                    partner_uid:partner_data.openid,
                    role_id:data.roleid,
                    role_name:data.rolename,
                    server_id:data.serverid,
                    server_name:data.servername,
                    invite_code:user_invite_info.invite,
                    user_invite_info:JSON.stringify(user_invite_info),
                    partner_user_info:JSON.stringify(partner_data)
                }

                wx.request({
                    url: 'https://' + HOST + '/partner/data/report_share_info/'+config.partner_id+'/'+config.game_pkg,
                    method: 'POST',
                    dataType: 'json',
                    header: {
                        'content-type': 'application/x-www-form-urlencoded' // 默认值
                    },
                    data: params,
                    success: function (res) {
                        console.log('[SDK]分享上报渠道：'+JSON.stringify(params));
                        console.log('[SDK]分享上报渠道结果：'+JSON.stringify(res));
                    }
                });
            }
        },

        subscribeMessage : function (tmplIds, callback){
            console.log('[SDK]订阅消息：'+tmplIds);
            //获取模板ID
            callbacks['subscribeMessage'] = typeof callback == 'function' ? callback : null;
            let data = {
                template: tmplIds[0], // 模版ID 必填
                role_id: user_game_info ? user_game_info.role_id : '',
                tpl_type: 2, // 当前订阅活动分类：1离线收益提醒;2活动提醒
            }
             Sygame.syGetSubscribe(data).then((res) => {
                if(res.status == 1001){
                    res.errMsg = "requestSubscribeMessage:ok";
                    res[tmplIds[0]] = res.type;
                    callbacks['subscribeMessage'] && callbacks['subscribeMessage'](res);
                }else{
                    callbacks['subscribeMessage'] && callbacks['subscribeMessage'](res);
                }
               
            })
        },

        //进入游戏
        logEnterGame: function (data) {
            var uid = wx.getStorageSync('plat_uid');
            var username = wx.getStorageSync('plat_username');

            var role_info = {};
            role_info['user_id'] = uid;
            role_info['user_name'] = username;
            role_info['role_id'] = data.roleid;
            role_info['role_lev'] = data.rolelevel;
            role_info['role_name'] = data.rolename;
            role_info['server_id'] = data.serverid;

            if (data.roleid && data.serverid) {
                user_game_info = {
                    role_id: data.roleid,
                    server_id: data.serverid,
                };
            }

            this.log('enter', role_info);

            this.upRoleInfo('entergame', data);

            //进入游戏确认邀请成功
            if (user_invite_info) {
                this.updateShare(user_invite_info.invite, user_invite_info.invite_type, user_invite_info.is_new, data.roleid, data.serverid, user_invite_info.scene);
            }
        },

        //角色升级
        logRoleUpLevel: function (data) {
            var uid = wx.getStorageSync('plat_uid');
            var username = wx.getStorageSync('plat_username');

            var role_info = {};
            role_info['user_id'] = uid;
            role_info['user_name'] = username;
            role_info['role_id'] = data.roleid;
            role_info['role_lev'] = data.rolelevel;
            role_info['role_name'] = data.rolename;
            role_info['server_id'] = data.serverid;

            if (data.roleid && data.serverid) {
                user_game_info = {
                    role_id: data.roleid,
                    server_id: data.serverid,
                };
            }

            this.log('levelup', role_info);
        },

        // 角色上报
        upRoleInfo: function(type, data){
            var role_info = {
                report_type: type,
                role_id: data.roleid,
                role_name: data.rolename,
                role_level: data.rolelevel,
                server_id: data.serverid,
                server_name: data.servername,
                role_power: data.rolepower ? data.rolepower : 0,
                role_vip: 0,
            };

            Sygame.syReportRoleInfo(role_info).then((res) => {
                console.log("[SDK]角色上报回调：",res);
            })
        },

        // 渠道-- 获取分享开关配置
        shareConfig:function (callback){
            var data = {
                'code':1,
                'msg':'成功',
                'data': {
                    is_push :true
                }
            }
            callback && callback(data);

        },

        shareRecommend: function (callback) {
            let params = {
                    page: 0, // 分⻚⻚码,从0开始（必填）
                    count: 15, // 分⻚每⻚获取数量 （必填）
                }
                //可参考下列代码段
            Sygame.syGetBoxList(params).then((res) => {
                let ret = {};
                if(res.data.status == 1001){
                    ret.code  = 1;
                    ret.msg   = res.data.info;

                    var game_list = Array() ;
                    var game_list_init = res.data.data;
                    ret.data = {};

                    if(game_list_init.length > 0){
                        for (let i = 0; i < game_list_init.length; ++i) {
                            game_list[i] = Object();
                            game_list[i]['jump_path'] = game_list_init[i]['jump_path'];
                            game_list[i]['panel'] = i+1;
                            game_list[i]['pic'] = game_list_init[i]['icon'];
                            game_list[i]['to_appid'] = game_list_init[i]['jump_appid'];
                            game_list[i]['to_game_name'] = game_list_init[i]['title'];
                            game_list[i]['jump_type'] = game_list_init[i]['jump_type'];
                            game_list[i]['preview_img'] = game_list_init[i]['preview_img'];
                            game_list[i]['game_id'] = game_list_init[i]['game_id'];
                            game_list[i]['tunnel_id'] = game_list_init[i]['tunnel_id'];
                        }

                        ret.data = game_list;
                    }

                }else{
                    ret.code  = res.data.status;
                    ret.msg   = res.data.info;
                    ret.data  = res.data.data?res.data.data:{};
                }
                console.log("获取盒⼦列表:"+JSON.stringify(ret));

                callback && callback(ret);
            });
        },

        openBox: function (callback) {
            Sygame.syClickOpenBox().then((res) => {
                console.log("展开盒⼦事件上报:",res);
                callback && callback(res)
            });
        },

        clickBoxGame: function (data) {
            let params = {
                "game_id":data.game_id,
                "tunnel_id":data.tunnel_id,
                "jump_appid":data.jump_appid,
                "jump_path":data.jump_path,
            }

            Sygame.syClickBox(params).then((res) => {
                console.log("点击盒⼦内游戏事件上报:",res);
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
                        uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
                    }
                }
            }

            return uuid.join('');
        },

        //获取公共参数
        getPublicData: function () {
            var system = wx.getSystemInfoSync();
            var uuid = wx.getStorageSync('plat_uuid');
            var idfv = wx.getStorageSync('plat_idfv');
            var ad_code = wx.getStorageSync('plat_ad_code');

            return {
                game_id: config.game_id,
                game_pkg: config.game_pkg,
                partner_id: config.partner_id,
                partner_label: config.partner_label,
                ad_code: ad_code,
                is_from_min:1,
                uuid: uuid,
                idfv: idfv,
                dname: system.model,
                mac: '0000',
                net_type: system.wifiSignal == 0 ? '4G' : 'WIFI',
                os_ver: system.system,
                sdk_ver: system.version, //存放的是微信版本号
                game_ver: config.game_ver, //存放的是SDK版本号
                device: system.platform == 'android' ? 1 : 2,
            };
        },

        //统一发送log
        log: function (type, data) {
            var public_data = this.getPublicData();
            for (var key in data) {
                public_data[key] = data[key];
            }

            console.log("[SDK]上报数据：" + type);
            console.log(public_data);

            wx.request({
                url: 'https://' + HOST + '/partner/h5Log/?type=' + type + '&data=' + encodeURIComponent(JSON.stringify(public_data))
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
        setMessageToFriendQuery: function (data,callback) {
            var cp_activity_id = data.activity_id;
            var result = wx.setMessageToFriendQuery({shareMessageToFriendScene:cp_activity_id});

            callback && callback(result);
        },

        getFriendShareInfo: function (callback) {
            this.getShareInfo('activity', function (data) {
                callback && callback({title:data.title,'img':data.img});
            });
        }
    }
}

function run(method, data, callback) {
    (method in PARTNER_SDK) && PARTNER_SDK[method](data, callback);
}

exports.init = function (data, callback) {
    run('init', data, callback);
};

exports.login = function (callback) {
    run('login', '', callback);
};

exports.pay = function (data, callback) {
    run('pay', data, callback);
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
        rolelevel: roleLevel,
    };
    run('logCreateRole', data);
};
exports.subscribeMessage = function (data, callback) {
    run('subscribeMessage', data, callback);
};

exports.logEnterGame = function (serverId, serverName, roleId, roleName, roleLevel, rolecreatetime, extra) {
    var rolepower = extra && extra.rolepower?extra.rolepower:0;
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
    var rolepower = extra && extra.rolepower?extra.rolepower:0;
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel,
        rolecreatetime: rolecreatetime,
        rolepower: rolepower
    };
    run('logRoleUpLevel', data);
};

exports.share = function (type,data) {
    var cp_activity_id = data && data.activity_id ? data.activity_id : '';

    var params = {
        type: type,
        cp_activity_id:cp_activity_id
    };

    run('share', params);
};

exports.msgCheck = function (data, callback) {
    run('msgCheck', data, callback);
};

exports.shareConfig = function (callback){
    run('shareConfig',callback);
};

exports.shareRecommend  = function (callback) {
    run('shareRecommend',callback);
};

exports.openBox = function (callback) {
    run('openBox',   callback);
};

exports.clickBoxGame = function (data) {
    run('clickBoxGame', data);
};

exports.downloadClient = function () {
    run('downloadClient');
};

exports.getConfig = function () {
    return {
        game_id: config.game_id,
        game_pkg: config.game_pkg,
        partner_id: config.partner_id
    }
};

exports.getPublicData = function () {
    run('getPublicData');
};

exports.setMessageToFriendQuery = function (data,callback) {
    run('setMessageToFriendQuery',data,callback);
};

exports.getFriendShareInfo = function (callback) {
    run('getFriendShareInfo',callback);
}