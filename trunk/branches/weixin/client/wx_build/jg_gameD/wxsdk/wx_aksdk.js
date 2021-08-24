import dkm from './helper'
var config = {
    game_id: '285',
    game_pkg: 'tjqy_tjqyjyhjl_FH',
    partner_id: '249',
    game_ver: '4.0.0',
    partner_label:'pbxyx',
    is_auth: false,
};
window.config = config;
var PARTNER_UNION_SDK = mainUnionSDK();
var PARTNER_HOST = 'sdk.sh9130.com';
var t;
var t_second = 0;
var t_max = 300;
var user_game_info_9130 = null;
var user_invite_info_9130 = null;
var this_order_id = null;

function mainUnionSDK() {
    var callbacks = {};
    var this_pay_order = 0;
    return {
        order_data: {},
        init: function (ops, callback) {
            var game_ver = ops && ops.game_ver ? ops.game_ver : 0;
            console.log("[UNION_SDK]CP init");
            var self = this;

            var uuid = wx.getStorageSync('9130_plat_uuid');
            var is_new;
            if(!uuid){
                uuid = self.uuid(16, 32);
                wx.setStorageSync('9130_plat_uuid', uuid);
                is_new = 1;
            }else{
                is_new = 0;
            }
            var idfv = wx.getStorageSync('9130_plat_idfv');
            if(!idfv){
                idfv = self.uuid(16, 32);
                wx.setStorageSync('9130_plat_idfv', idfv);
            }

            var info = wx.getLaunchOptionsSync();
            var scene = info.scene ? info.scene : '';

            if(is_new && info.query && info.query.ad_code){
                wx.setStorageSync('9130_plat_ad_code', info.query.ad_code);
            }

            var data = {
                install: is_new,
                scene: scene
            };
            self.log('start', data);

            dkm.init({game_ver:game_ver},function(data){
                callback && callback(data);
            });

            // wx.showShareMenu();



            // var invite = info.query && info.query.invite ? info.query.invite : '';
            // var invite_type = info.query && info.query.invite_type ? info.query.invite_type : '';

            // if(invite){
            //     user_invite_info_9130 = {
            //         invite: invite,
            //         invite_type: invite_type,
            //         is_new: is_new,
            //         scene: scene
            //     };
            // }

            // //鍒ゆ柇鐗堟湰鍙�
            // if(game_ver){
            //     this.checkGameVersion(game_ver, function (data) {
            //         callback && callback(data);
            //     });
            // }


        },
        //TODO鐧诲綍鎺ュ彛
        login: function (data, callback) {
            console.log("[UNION_SDK]登录");
            var that = this;
            callbacks['login'] = typeof callback == 'function' ? callback : null;
            dkm.login(function (status, data) {
                console.log("[UNION_SDK]登录返回");
                console.log(status);
                console.log(data);
                if (data.token) {
                    that.do_login(data);
                } else {
                    callbacks['login'] && callbacks['login'](1, {
                        errMsg: res.errMsg
                    });
                }
            });
        },

        do_login: function (info) {
            var self = this;
            var public_data = self.getPublicData();
            public_data['token'] = info.token;
            public_data['uid'] = info.userid;
            public_data['is_from_min'] = 1;
            if (user_invite_info_9130 && typeof user_invite_info == 'object') {
                for (var key in user_invite_info_9130) {
                    public_data[key] = user_invite_info_9130[key];
                }
            }

            if(user_invite_info_9130 && typeof user_invite_info_9130 == 'object'){
                for(var key in user_invite_info_9130){
                    public_data[key] = user_invite_info_9130[key];
                }
            }

            wx.request({
                url: 'https://' + PARTNER_HOST + '/partner/auth',
                method: 'POST',
                dataType: 'json',
                header: {
                    'content-type': 'application/x-www-form-urlencoded' // 榛樿鍊�
                },
                data: public_data,
                success: function (res) {
                    console.log("[UNION_SDK]联运登录结果");
                    console.log(res);
                    if(res.statusCode == 200){
                        var data = res.data;
                        if(data.state){
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
                            try {
                                wx.setStorageSync('9130_plat_sdk_token', data.data.sdk_token);
                                wx.setStorageSync('9130_plat_uid', data.data.user_id);
                                wx.setStorageSync('9130_plat_username', data.data.username);

                            } catch (e) {
                            }

                            callbacks['login'] && callbacks['login'](0, userData);
                        }else{
                            callbacks['login'] && callbacks['login'](1, {errMsg: data.msg});
                        }



                        // //鐧诲綍鎴愬姛锛屽姞杞藉彸涓婅鍒嗕韩鏁版嵁
                        // self.getShareInfo('menu', function (data) {
                        //     console.log("[UNION_SDK]分享配置");
                        //     wx.onShareAppMessage(function () {
                        //         self.logStartShare('menu');
                        //         return {
                        //             title: data.title,
                        //             imageUrl: data.img,
                        //             query: data.query,
                        //         }
                        //     });
                        // });
                    }else{
                        callbacks['login'] && callbacks['login'](1, {errMsg: '联运登录失败'});
                    }
                }
            });

        },

        share: function (data) {
            dkm.share(data);
            // callbacks['share'] = typeof callback == 'function' ? callback : null;
            // var type = data.type || 'share';
            // console.log("[UNION_SDK]CP调起分享类型 type=" + type);
            // var self = this;
            // this.getShareInfo(type, function (data) {


            //     self.logStartShare(type);
            //     wx.shareAppMessage({
            //         title: data.title,
            //         imageUrl: data.img,
            //         query: data.query,
            //     });
            // });
        },

        logStartShare: function (type) {
            var sdk_token = wx.getStorageSync('9130_plat_sdk_token');
            wx.request({
                url: 'https://' + PARTNER_HOST + '/game/min/?ac=logStartShare',
                method: 'POST',
                dataType: 'json',
                header: {
                    'content-type': 'application/x-www-form-urlencoded' // 榛樿鍊�
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    server_id: user_game_info_9130 ? user_game_info_9130.server_id : '',
                    role_id: user_game_info_9130 ? user_game_info_9130.role_id : '',
                    type: type,
                },
                success: function (res) {
                }
            });
        },

        openService: function () {
            dkm.openService();
            // wx.openCustomerServiceConversation();
        },

        checkGameVersion: function (game_ver, callback) {
            console.log("[UNION_SDK]检查版本");
            var sdk_token = wx.getStorageSync('9130_plat_sdk_token');
            wx.request({
                url: 'https://' + PARTNER_HOST + '/game/min/?ac=checkGameVersion',
                method: 'POST',
                dataType: 'json',
                header: {
                    'content-type': 'application/x-www-form-urlencoded' // 榛樿鍊�
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    game_ver: game_ver
                },
                success: function (res) {
                    console.log("[UNION_SDK]检查版本结果");
                    console.log(res);
                    if(res.statusCode == 200){
                        var data = res.data;
                        if(data.state){
                            callback && callback(data.data);
                        }else{
                            callback && callback({develop: 0});
                        }
                    }else{
                        callback && callback({develop: 0});
                    }
                }
            });
        },

        getShareInfo: function (type, callback) {
            var sdk_token = wx.getStorageSync('9130_plat_sdk_token');
            wx.request({
                url: 'https://' + PARTNER_HOST + '/game/min/?ac=shareConfig',
                method: 'POST',
                dataType: 'json',
                header: {
                    'content-type': 'application/x-www-form-urlencoded' // 榛樿鍊�
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    type: type,
                    server_id: user_game_info_9130 ? user_game_info_9130.server_id : '',
                    role_id: user_game_info_9130 ? user_game_info_9130.role_id : '',
                    no_log: 1 //璁剧疆涓�1鍚庡氨涓嶅湪杩欎釜鎺ュ彛鎵搇og锛屼氦缁檒ogStartShare鎺ュ彛
                },
                success: function (res) {
                    console.log(res);
                    if(res.statusCode == 200){
                        var data = res.data;
                        if(data.state){
                            callback && callback(data.data);
                        }else{
                            callbacks['share'] && callbacks['share'](1, {errMsg: '获取分享失败' + data.msg});
                        }
                    }else{
                        callbacks['share'] && callbacks['share'](1, {errMsg: '获取分享失败'});
                    }
                }
            });
        },

        updateShare: function (invite, invite_type, is_new, role_id, server_id, scene) {
            var sdk_token = wx.getStorageSync('9130_plat_sdk_token');
            wx.request({
                url: 'https://' + PARTNER_HOST + '/game/min/?ac=updateShare',
                method: 'POST',
                dataType: 'json',
                header: {
                    'content-type': 'application/x-www-form-urlencoded' // 榛樿鍊�
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
                    console.log("[UNION_SDK]:分享数据失败");
                    console.log(res);
                }
            });
        },

        adClick:function(appid,query){
            dkm.adClick(appid,query);
        },

        msgCheck: function (content,callback) {
            dkm.msgCheck(content,callback);
            // var sdk_token = wx.getStorageSync('9130_plat_sdk_token');
            // wx.request({
            //     url: 'https://' + PARTNER_HOST + '/game/min/?ac=msgSecCheck',
            //     method: 'POST',
            //     dataType: 'json',
            //     header: {
            //         'content-type': 'application/x-www-form-urlencoded' // 榛樿鍊�
            //     },
            //     data: {
            //         game_pkg: union_config.game_pkg,
            //         partner_id: union_config.partner_id,
            //         sdk_token: sdk_token,
            //         content:content
            //     },
            //     success: function (res) {
            //         console.log(res);
            //         callback && callback(res);
            //     }
            // });
        },

        pay: function (data, callback) {
            var self = this;

            wx.checkSession({
                success: function () {
                    self.startPay(data, callback);
                },
                fail: function () {
                    console.log("[UNION_SDK]未登录");
                    self.login({}, function () {
                        self.startPay(data, callback);
                    });
                }
            });
        },

        //鏀粯鎺ュ彛
        startPay: function(data, callback){
            console.log("[UNION_SDK]开始支付");
            console.log(data);

            var self = this;
            callbacks['pay'] = typeof callback == 'function' ? callback : null;
            //鍏堜笅鍗�
            this_pay_order = 0;
            var sdk_token = wx.getStorageSync('9130_plat_sdk_token');
            if(!sdk_token){
                callbacks['pay'] && callbacks['pay'](1, {errMsg: "未登录"});
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
                platform: sysInfo.platform,
            };
            self.order_data = order_data;

            var public_data = self.getPublicData();
            public_data['order_data'] = JSON.stringify(order_data);
            public_data['is_from_min'] = 1;

            //鍙戣捣缃戠粶璇锋眰
            wx.request({
                url: 'https://' + PARTNER_HOST + '/partner/order',
                method: 'POST',
                dataType: 'json',
                header: {
                    'content-type': 'application/x-www-form-urlencoded' // 榛樿鍊�
                },
                data: public_data,
                success: function (res) {
                    console.log("[UNION_SDK]联运下单");
                    console.log(res);
                    if(res.statusCode == 200){
                        var data = res.data;
                        if(data.state){
                            var opts = {
                                cpbill:order_data.cpbill,
                                price:data.data.pay_data.price,
                                currency : 'CNY',
                                productid : data.data.pay_data.productid,
                                productname : data.data.pay_data.productname,
                                productdesc : data.data.pay_data.productdesc,
                                roleid : data.data.pay_data.roleid,
                                rolename : data.data.pay_data.rolename,
                                rolelevel : data.data.pay_data.rolelevel,
                                serverid : data.data.pay_data.serverid,
                                servername : data.data.pay_data.servername,
                                extension : data.data.orderId,
                                callback : function(res){

                                    if(res.result == '200'){

                                    }else{
                                        callbacks['pay'] && callbacks['pay'](1, {
                                            errMsg: data.msg
                                        });
                                    }
                                }
                            };
                            console.log("[UNION_SDK]联运下单参数"+JSON.stringify(opts));
                            dkm.pay(opts);

                        }else{
                            callbacks['pay'] && callbacks['pay'](1, {errMsg: data.msg});
                        }
                    }else{
                        callbacks['login'] && callbacks['login'](1, {errMsg: '下单失败'});
                    }
                }
            });
        },

        xiaoPay: function(data){
            var self = this;
            wx.navigateToMiniProgram({
                appId: 'wxb9e0af496b6bdedf',
                path: 'pages/pay/pay?order_id='+data.orderId+'&money='+data.money,
                extraData: {

                },
                envVersion: 'release',
                success(res) {
                    // 鎵撳紑鎴愬姛
                }
            })
        },

        //灏忕▼搴忔敮浠�
        minPay: function (data) {
            //姝ｅ紡璋冭捣寰俊鏀粯
            var self = this;
            wx.requestPayment({
                timeStamp: data.timeStamp,
                nonceStr: data.nonceStr,
                package: data.package,
                signType: data.signType,
                paySign: data.paySign,
                success: function (res) {
                    if(res.errMsg == 'requestPayment:ok'){
                        var ret = {
                            cpOrderNo: self.order_data.cpbill,
                            orderNo: data.orderId,
                            amount: self.order_data.price,
                            extension: self.order_data.extension
                        };
                        callbacks['pay'] && callbacks['pay'](0, ret);
                    }
                },
                fail: function (res) {
                    if(res.errMsg == 'requestPayment:fail cancel'){
                        callbacks['pay'] && callbacks['pay'](2, {errMsg: "支付失败"});
                    }else{
                        callbacks['pay'] && callbacks['pay'](1, {errMsg: "支付失败:" + res.err_desc});
                    }
                },
                complete: function (res) {

                }
            });
        },

        //灏忔父鎴忔敮浠�
        gamePay: function (data) {
            var self = this;
            //娓告垙甯佽冻澶燂紝鐩存帴鎵ｆ
            if(data.buyQuantity <= data.balance){
                console.log("[UNION_SDK]game_pay");
                wx.showModal({
                    title: "鏀粯鎻愮ず",
                    content: "鎮ㄨ繕鏈�" + data.balance + "涓父鎴忓竵鏈秷璐癸紝鏈鏀粯灏嗘墸闄�" + data.buyQuantity + '娓告垙甯�',
                    showCancel: false,
                    confirmText: "鎴戠煡閬撲簡",
                    success: function () {
                        self.gameGoPay(data);
                    }
                });
            }else{
                console.log("[UNION_SDK]米大师");
                wx.requestMidasPayment({
                    mode: 'game',
                    env: data.env,
                    offerId: data.offerId,
                    currencyType: data.currencyType,
                    platform: data.platform,
                    buyQuantity: data.buyQuantity,
                    zoneId: data.zoneId,
                    success: function (res) {
                        if(res.errMsg == 'requestMidasPayment:ok'){
                            self.gameGoPay(data);
                        }
                    },
                    fail: function (res) {
                        if(res.errMsg.indexOf('鐢ㄦ埛鍙栨秷') !== -1){
                            callbacks['pay'] && callbacks['pay'](2, {errMsg: "调起米大师失败"});
                        }else{
                            callbacks['pay'] && callbacks['pay'](1, {errMsg: "调起米大师失败:" + res.errMsg});
                        }
                    },
                    complete: function (res) {

                    }
                });
            }
        },

        kfPay: function (data) {
            //妫€鏌ヨ鍗曟敮浠樻槸鍚﹀畬鎴�
            var self = this;
            this_order_id = data.orderId;
            wx.showModal({
                title: "鏀粯鎻愮ず",
                content: '鍗冲皢鎵撳紑瀹㈡湇鑱婂ぉ鐣岄潰锛岃緭鍏�"cz"鎴栬€�"鍏呭€�"鍙互鑾峰彇鏀粯閾炬帴',
                showCancel: false,
                confirmText: "鎴戠煡閬撲簡",
                success: function () {
                    var obj = {
                        showMessageCard:true,
                        sendMessageTitle:"鐐规垜鍏呭€�",
                        sendMessageImg:"https://static.sh9130.com/gw/images/WechatIMG700.png"
                    };
                    wx.openCustomerServiceConversation(obj);
                }
            });

        },

        gameGoPay: function (data, retry) {
            console.log("[UNION_SDK]绫冲ぇ甯堟敮浠樺畬姣曪紝閫氱煡鏈嶅姟鍣ㄥ彂璐�");
            //璇锋眰pay鎺ュ彛
            var self = this;
            wx.request({
                url: 'https://' + PARTNER_HOST + '/partner/pay/' + config.partner_id + '/' + config.game_pkg + '/',
                method: 'POST',
                dataType: 'json',
                header: {
                    'content-type': 'application/x-www-form-urlencoded' // 榛樿鍊�
                },
                data: {
                    order_id: data.orderId,
                    time: data.time,
                    sign: data.sign,
                },
                success: function (res) {
                    console.log("[UNION_SDK]绫冲ぇ甯堟敮浠樼粨鏋�");
                    console.log(res);
                    if(res.statusCode == 200){
                        if(res.data.state == 1){
                            var ret = {
                                cpOrderNo: self.order_data.cpbill,
                                orderNo: data.orderId,
                                amount: self.order_data.price,
                                extension: self.order_data.extension
                            };
                            callbacks['pay'] && callbacks['pay'](0, ret);
                        }else {
                            callbacks['pay'] && callbacks['pay'](1, {errMsg: "鏀粯澶辫触"});
                        }
                    }
                },
                fail: function () {

                }
            });
        },

        //鍒涘缓瑙掕壊
        logCreateRole: function (data) {
            var uid = wx.getStorageSync('9130_plat_uid');
            var username = wx.getStorageSync('9130_plat_username');

            var postData = {};
            postData['user_id'] = uid;
            postData['user_name'] = username;
            postData['role_id'] = data.roleid;
            postData['role_lev'] = data.rolelevel;
            postData['role_name'] = data.rolename;
            postData['server_id'] = data.serverid;

            if(data.roleid && data.serverid){
                user_game_info_9130 = {
                    role_id:  data.roleid,
                    server_id:  data.serverid,
                };
            }

            this.log('create', postData);
            dkm.logCreateRole(data.serverid,data.servername,data.serverid,data.rolename,data.rolelevel);
        },

        //杩涘叆娓告垙
        logEnterGame: function (data) {
            var uid = wx.getStorageSync('9130_plat_uid');
            var username = wx.getStorageSync('9130_plat_username');

            var postData = {};
            postData['user_id'] = uid;
            postData['user_name'] = username;
            postData['role_id'] = data.roleid;
            postData['role_lev'] = data.rolelevel;
            postData['role_name'] = data.rolename;
            postData['server_id'] = data.serverid;

            if(data.roleid && data.serverid){
                user_game_info_9130 = {
                    role_id:  data.roleid,
                    server_id:  data.serverid,
                };
            }

            this.log('enter', postData);
            dkm.logEnterGame(data.serverid,data.servername,data.serverid,data.rolename,data.rolelevel);
            //杩涘叆娓告垙纭閭€璇锋垚鍔�
            if(user_invite_info_9130){
                this.updateShare(user_invite_info_9130.invite, user_invite_info_9130.invite_type, user_invite_info_9130.is_new, data.roleid, data.serverid, user_invite_info_9130.scene);
            }
        },

        //瑙掕壊鍗囩骇
        logRoleUpLevel: function (data) {
            var uid = wx.getStorageSync('9130_plat_uid');
            var username = wx.getStorageSync('9130_plat_username');

            var postData = {};
            postData['user_id'] = uid;
            postData['user_name'] = username;
            postData['role_id'] = data.roleid;
            postData['role_lev'] = data.rolelevel;
            postData['role_name'] = data.rolename;
            postData['server_id'] = data.serverid;

            if(data.roleid && data.serverid){
                user_game_info_9130 = {
                    role_id:  data.roleid,
                    server_id:  data.serverid,
                };
            }

            this.log('levelup', postData);
            dkm.logRoleUpLevel(data.serverid,data.servername,data.serverid,data.rolename,data.rolelevel);
        },

        //微端
        weiduanHelper: function () {
            dkm.downloadClient();
        },

        //鑾峰彇鍞竴璁惧鐮侊紙鑷畾涔夛級
        uuid: function(radix, len){
            var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
            var uuid = [], i;
            radix = radix || chars.length;

            if (len) {
                for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random()*radix];
            } else {
                var r;

                uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
                uuid[14] = '4';

                for (i = 0; i < 36; i++) {
                    if (!uuid[i]) {
                        r = 0 | Math.random()*16;
                        uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
                    }
                }
            }

            return uuid.join('');
        },

        //鑾峰彇鍏叡鍙傛暟
        getPublicData: function () {
            var system = wx.getSystemInfoSync();
            var uuid = wx.getStorageSync('9130_plat_uuid');
            var idfv = wx.getStorageSync('9130_plat_idfv');
            var ad_code = wx.getStorageSync('9130_plat_ad_code');

            return {
                game_id: config.game_id,
                game_pkg: config.game_pkg,
                partner_id: config.partner_id,
                ad_code: ad_code,
                uuid: uuid,
                idfv: idfv,
                dname: system.model,
                mac: '0000',
                net_type: system.wifiSignal == 0 ? '4G' : 'WIFI',
                os_ver: system.system,
                sdk_ver: system.version,//瀛樻斁鐨勬槸寰俊鐗堟湰鍙�
                game_ver: config.game_ver,//瀛樻斁鐨勬槸SDK鐗堟湰鍙�
                device: system.platform == 'android' ? 1 : 2,
            };
        },

        //缁熶竴鍙戦€乴og
        log: function (type, data) {
            var public_data = this.getPublicData();
            for(var key in data){
                public_data[key] = data[key];
            }

            console.log("[UNION_SDK]日志上报" + type);
            console.log(public_data);

            wx.request({
                url: 'https://' + PARTNER_HOST + '/partner/h5Log/?type=' + type + '&data=' + encodeURIComponent(JSON.stringify(public_data))
            });
        },

        getDate: function () {
            var date = new Date();
            return date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate();
        },

        downloadClient: function () {
            wx.openCustomerServiceConversation();
        }
    }
}

function unionRun(method, data, callback) {
    (method in PARTNER_UNION_SDK) && PARTNER_UNION_SDK[method](data, callback);
}

exports.init = function (data, callback) {
    unionRun('init', data, callback);
};

exports.login = function (callback) {
    unionRun('login', '', callback);
};

exports.login = function (callback) {
    unionRun('login', '', callback);
};

exports.pay = function (data, callback) {
    unionRun('pay', data, callback);
};

exports.openService = function () {
    unionRun('openService');
};

exports.logCreateRole = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel,
    };
    unionRun('logCreateRole', data);
};

exports.logEnterGame = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel,
    };

    unionRun('logEnterGame', data);
};

exports.logRoleUpLevel = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel,
    };
    unionRun('logRoleUpLevel', data);
};

exports.share = function (type) {
    var data = {
        type: type
    };
    unionRun('share', type);
};

exports.msgCheck = function (data, callback) {
    unionRun('msgCheck', data, callback);
};

exports.downloadClient = function () {
    unionRun('downloadClient');
};

exports.getConfig = function () {
    return {
        game_id: config.game_id,
        game_pkg: config.game_pkg,
        partner_id: config.partner_id
    }
};

exports.adClick = function (game_id, query) {
    var data = {
        game_id: game_id,
        query: query
    };
    unionRun('adClick', data);
};

exports.weiduanHelper = function () {
    unionRun('weiduanHelper');
};