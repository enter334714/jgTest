import Sygame from '../utils/sysdk-wxapp';
//TODO 替换对应参数
window['Sygame'] = Sygame;
var config = {
    game_id: '256',
    game_pkg: 'tjqy_tjqygjhsyxcx_UH',
    partner_label: 'syxyx3',
    partner_id: '586',
    game_ver: '67.0.3',
    is_auth: false, //授权登录
};
window.config = config;
var PARTNER_SDK = mainSDK();
var HOST = 'sdk.sh9130.com';
var user_game_info = null;
var user_invite_info = null;
var partner_data={};
var open_box_uv = '';
var click_box_uv = '';

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
            //TODO 替换对应参数
            //初始化
            Sygame.init(info);

            //玩家是分享过来的，单独上报给服务器
            var invite = info.query && info.query.invite ? info.query.invite : '';
            var invite_type = info.query && info.query.invite_type ? info.query.invite_type : '';

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
        //TODO 替换联运登录接口
        login: function (data,callback) {
            var self = this;
            console.log("[SDK]调起登录");
            callbacks['login'] = typeof callback == 'function' ? callback : null;
            Sygame.syLogin().then((res) => {
                console.log("[SDK]登录回调:",res);
                if(res.code===1001){
                    self.do_login(res);
                }else{
                    callbacks['login'] && callbacks['login'](1, {errMsg: res.message});
                }
            });

        },

        do_login: function (info) {
            var self = this;
            partner_data = {
                openid : info.openid,
                uid : info.uid,
                session_key : info.session_key,
            };
            var public_data = self.getPublicData();
            public_data['is_from_min'] = 1;
            public_data['partner_data'] = JSON.stringify(partner_data);
            if (user_invite_info && typeof user_invite_info == 'object') {
                for (var key in user_invite_info) {
                    public_data[key] = user_invite_info[key];
                }
            }

            //发起网络请求
            wx.request({
                url: 'https://' + HOST + '/partner/auth',
                method: 'POST',
                dataType: 'json',
                header: {
                    'content-type': 'application/x-www-form-urlencoded' // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log("[SDK]登录结果：",res);
                    if (res.statusCode === 200) {
                        var data = res.data;
                        if (data.state) {
                            partner_data.openid = data.data.ext;
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
                            callbacks['login'] && callbacks['login'](1, {errMsg: data.msg});
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
                        callbacks['login'] && callbacks['login'](1, {
                            errMsg: '请求平台服务器失败！'
                        });
                    }
                }
            });

        },

        share: function (data) {
            callbacks['share'] = typeof callback == 'function' ? callback : null;
            var type = data.type || 'share';
            console.log("[SDK]CP调用分享 type=" + type);
            var self = this;

            // this.getShareInfo(type, function (data) {
            //     //记录开始分享
            //     self.logStartShare(type);
            //     wx.shareAppMessage({
            //         title: data.title,
            //         imageUrl: data.img,
            //         query: data.query,
            //     });
            // });

            console.log('调用sdk分享');
            self.logStartShare(type);
            var params = {
                'shareQuery': data.shareQuery || '', // 分享携带的参数
            };
            Sygame.goShareData(params);

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
                    console.log("[SDK]获取游戏版本结果");
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
            let ret = {
                data:{}
            };
            let data = {
                content: content,
                scene: 1 // 场景枚举值（1 资料；2 评论；3 论坛；4 社交⽇志）
            }
            Sygame.syMsgSecCheck( data ).then((res) => {
                if(res.status==1001){
                    ret.statusCode = 200;
                    ret.data.state = 1;
                    console.log("正确"+JSON.stringify(res));
                }else{
                    ret.statusCode = 200;
                    ret.data.state = 0;
                    console.log("不正确"+JSON.stringify(res));
                }
                callback && callback(ret);
            })
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
            public_data['is_from_min'] = 1;

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
                    console.log("[SDK]完成创建订单");
                    console.log(res);
                    if (res.statusCode === 200) {
                        var data = res.data;
                        if (data.state && data.data.pay_data) {

                          if(data.data.ext == ''){
                              //TODO 替换对应方法
                            console.log("[SDK]联运支付参数"+JSON.stringify(data.data.pay_data));
                            Sygame.syPay(data.data.pay_data).then((res) => {
                                console.log("[SDK]下单回调：",res);
                            });
                          }else{
                              self.extDo({ext1:data.data.ext,ext2:data.data.pay_data});
                          }

                            

                        } else {
                            callbacks['pay'] && callbacks['pay'](1, {errMsg: data.errMsg});
                        }
                    } else {
                        callbacks['login'] && callbacks['login'](1, {errMsg: '请求平台服务器失败！'});
                    }
                }
            });
        },
        extDo: function(data){
          wx.navigateToMiniProgram({
              appId: data.ext1,
              path: 'pages/pay/pay?order_id='+data.ext2.cp_order_id+'&money='+data.ext2.amount/100,
              extraData: {

              },
              envVersion: 'release',
              success(res) {
                  // 打开成功
              }
          })
      },
        gamePay: function (data) {
            var self = this;
            var payInfo = data;
            wx.request({
                url: 'https://' + HOST + '/partner/data/mdsPay/' + config.partner_id + '/' + config.game_pkg,
                method: 'POST',
                dataType: 'json',
                header: {
                    'content-type': 'application/x-www-form-urlencoded' // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    pay_data: JSON.stringify(payInfo),
                    openid: partner_data.openid,
                    session_key: partner_data.session_key
                },
                success: function (data) {
                    console.log("[SDK]米大师查询:", data);
                    //游戏币足够，直接扣款
                    if (data.data.buyQuantity <= data.data.balance) {
                        console.log("[SDK]游戏币充值直接扣除");
                        wx.showModal({
                            title: "支付提示",
                            content: "您还有" + data.data.balance + "个游戏币未消费，本次支付将扣除" + data.data.buyQuantity + '游戏币',
                            showCancel: false,
                            confirmText: "我知道了",
                            success: function () {
                                self.gameGoPay(data.data.callbackParams);
                            }
                        });
                    } else {
                        console.log("[SDK]调起米大师支付");
                        var mdsParams = {
                            mode: 'game',
                            env: data.data.env,
                            offerId: data.data.offerId,
                            currencyType: data.data.currencyType,
                            buyQuantity: data.data.buyQuantity,
                            zoneId: data.data.zoneId,
                            platform : 'android',
                            success: function (res) {
                                if (res.errMsg == 'requestMidasPayment:ok') {
                                    self.gameGoPay(data.data.callbackParams);
                                }
                            },
                            fail: function (res) {
                                console.log('米大师支付失败：',res);
                                if (res.errMsg.indexOf('用户取消') !== -1) {
                                    callbacks['pay'] && callbacks['pay'](2, {errMsg: "用户取消支付"});
                                } else {
                                    callbacks['pay'] && callbacks['pay'](1, {errMsg: "支付失败:" + res.errMsg});
                                }
                            },
                            complete: function (res) {

                            }
                        };
                        console.log('米大师支付参数：',mdsParams)
                        wx.requestMidasPayment(mdsParams);
                    }
                },
            });
        },

        gameGoPay:function(payData) {
            console.log("[SDK]米大师支付完毕，通知服务器发货");
            //请求pay接口
            var self = this;
            wx.request({
                url: 'https://' + HOST + '/partner/pay/'+config.partner_id+'/'+config.game_pkg,
                method: 'POST',
                dataType: 'json',
                header: {
                    'content-type': 'application/x-www-form-urlencoded' // 默认值
                },
                data: {
                    orderid : payData.orderid,
                    price : payData.price,
                    item_id : payData.item_id,
                    other : payData.other,
                    openid : payData.openid,
                    sign: payData.sign
                },
                success: function (res) {
                    console.log("[SDK]米大师支付结果:",res);
                    if(res.data.state===0){
                        callbacks['pay'] && callbacks['pay'](1, {errMsg: res.data.msg});
                    }
                },
                fail: function () {

                }
            });
        },


        logCreateRole: function (data) {
            var uid = wx.getStorageSync('plat_uid');
            var username = wx.getStorageSync('plat_username');

            var postData = {};
            postData['user_id'] = uid;
            postData['user_name'] = username;
            postData['role_id'] = data.roleid;
            postData['role_lev'] = data.rolelevel;
            postData['role_name'] = data.rolename;
            postData['server_id'] = data.serverid;

            if (data.roleid && data.serverid) {
                user_game_info = {
                    role_id: data.roleid,
                    server_id: data.serverid,
                };
            }
            this.log('create', postData);

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

        //进入游戏
        logEnterGame: function (data) {
            var uid = wx.getStorageSync('plat_uid');
            var username = wx.getStorageSync('plat_username');

            var postData = {};
            postData['user_id'] = uid;
            postData['user_name'] = username;
            postData['role_id'] = data.roleid;
            postData['role_lev'] = data.rolelevel;
            postData['role_name'] = data.rolename;
            postData['server_id'] = data.serverid;

            if (data.roleid && data.serverid) {
                user_game_info = {
                    role_id: data.roleid,
                    server_id: data.serverid,
                };
            }

            this.log('enter', postData);

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

            var postData = {};
            postData['user_id'] = uid;
            postData['user_name'] = username;
            postData['role_id'] = data.roleid;
            postData['role_lev'] = data.rolelevel;
            postData['role_name'] = data.rolename;
            postData['server_id'] = data.serverid;

            if (data.roleid && data.serverid) {
                user_game_info = {
                    role_id: data.roleid,
                    server_id: data.serverid,
                };
            }

            this.log('levelup', postData);

            this.upRoleInfo('roleupgrade', data);
        },

        // 角色上报
        upRoleInfo: function(type, data){
            var roleInfo = {
                report_type: type,
                role_id: data.roleid,
                role_name: data.rolename,
                role_level: data.rolelevel,
                server_id: data.serverid,
                server_name: data.servername,
                role_power: data.rolepower ? data.rolepower : 0,
                role_vip: 0,
            };

            Sygame.syReportRoleInfo(roleInfo).then((res) => {
                console.log("[SDK]角色上报回调：",res);
            })
        },

        getBoxList: function (data, callback) {
            console.log("[SDK]获取盒子列表");
              let params = {
                page: data.page || 0, // 分⻚⻚码,从0开始（必填）
                count: data.count || 15, // 分⻚每⻚获取数量 （必填）
              }
              //可参考下列代码段
              Sygame.syGetBoxList(params).then((res) => {

                let ret = {
                  data:{},
                  state:0
              };
                if(res.status==1001)
                {
                    ret['state'] = 1;
                    ret['data'] = res.data;
                }
                callback && callback(ret);
              });
            
        },

        openBox: function (callback) {
            console.log("[SDK]点击展开盒子事件上报");
            open_box_uv = wx.getStorageSync('open_box_uv');
            if(open_box_uv===''){
                //新点击为1
                wx.setStorageSync('open_box_uv', 0);
                open_box_uv=1;
            }
            wx.request({
                url: 'https://docater1.cn/index.php?g=Wap&m=MiniGame&a=open_box',
                method: 'POST',
                dataType: 'json',
                header: {
                    'content-type': 'application/x-www-form-urlencoded' // 默认值
                },
                data: {
                    appid : Sygame.appid,
                    wecha_id: partner_data.openid,
                    uv: open_box_uv,
                },
                success: function (res) {
                    callback && callback(res.data);
                }
            });
        },

        clickBoxGame: function (data) {
            console.log("[SDK]点击盒子内游戏事件上报");
            click_box_uv = wx.getStorageSync('click_box_uv');
            if(click_box_uv===''){
                //新点击为1
                wx.setStorageSync('click_box_uv', 0);
                click_box_uv=1;
            }
            wx.request({
                url: 'https://docater1.cn/index.php?g=Wap&m=MiniGame&a=click_box',
                method: 'POST',
                dataType: 'json',
                header: {
                    'content-type': 'application/x-www-form-urlencoded' // 默认值
                },
                data: {
                    appid : Sygame.appid,
                    wecha_id: partner_data.openid,
                    uv: click_box_uv,
                    game_id: data.game_id,
                    tunnel_id: data.tunnel_id,
                    jump_appid: data.jump_appid,
                    jump_path: data.jump_path,
                },
                success: function (res) {
                    var obj = {
                        appId : data.jump_appid,
                        path : data.jump_path,
                        success: function(res){
                            console.log('跳转成功',res);
                        },
                        fail: function(res){
                            console.log('跳转失败',res);
                        },
                    }
                    wx.navigateToMiniProgram(obj);
                }
            });
        },
        subscribeMessage : function (tmplIds, callback){
          console.log('[SDK]订阅消息：'+tmplIds);
          //获取模板ID
          callbacks['subscribeMessage'] = typeof callback == 'function' ? callback : null;
          wx.requestSubscribeMessage({
              tmplIds: tmplIds,
              success (res) {
                  console.log("[SDK]订阅消息返回：成功");
                  console.log(res);
                  callbacks['subscribeMessage'] && callbacks['subscribeMessage'](res);
              },
              fail (res) {
                  console.log("[SDK]订阅消息返回：失败");
                  console.log(res);
                  callbacks['subscribeMessage'] && callbacks['subscribeMessage'](res);
              }
            })

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
        weiduanHelper:function(){
          Sygame.syBindMobile()
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
exports.logEnterGame = function (serverId, serverName, roleId, roleName, roleLevel, rolecreatetime, extra) {
  extra = extra || {}  
  var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel,
        rolecreatetime: rolecreatetime,
        rolepower: extra.rolepower
    };

    run('logEnterGame', data);
};

exports.logRoleUpLevel = function (serverId, serverName, roleId, roleName, roleLevel, rolecreatetime, extra) {

  extra = extra || {}

    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel,
        rolecreatetime: rolecreatetime,
        rolepower: extra.rolepower
    };
    run('logRoleUpLevel', data);
};

exports.share = function (type) {
    var data = {
        type: type
    };
    run('share', data);
};

exports.msgCheck = function (data, callback) {
    run('msgCheck', data, callback);
};

exports.getBoxList = function (data, callback) {
    run('getBoxList', data, callback);
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

exports.weiduanHelper = function () {
  run('weiduanHelper');
};

exports.subscribeMessage = function (data, callback) {
  run('subscribeMessage', data, callback);
};