var W = wx.$l;
import sdk from '../utils/hywxgsdk_v108';

//TODO 替换对应参数
var config = {
    game_id: 256,
    game_pkg: W[32250],
    partner_label: W[32251],
    partner_id: W[32252],
    game_ver: W[32253],
    is_auth: false, //授权登录
    partner_appid: W[32254] //游戏appid
};
window.config = config;
var $LMUXR7 = $LMX7RU();
var HOST = W[32255];
var $LMUX7R = null;
var $LMXR7U = null;
var sysInfo = wx.getSystemInfoSync();
var platform = sysInfo.platform;
var partner_user_info = null;
var hysdkobj;

function $LMX7RU() {
    var callbacks = {};
    var this_pay_order = 0;
    return {
        order_data: {},
        init: function (ops, callback) {
            var game_ver = ops && ops.game_ver ? ops.game_ver : 0;
            console.log(W[32256]);
            var self = this;

            var uuid = wx.getStorageSync(W[32257]);
            var is_new;
            if (!uuid) {
                uuid = self.uuid(16, 32);
                wx.setStorageSync(W[32257], uuid);
                is_new = 1;
            } else {
                is_new = 0;
            }
            var idfv = wx.getStorageSync(W[32258]);
            if (!idfv) {
                idfv = self.uuid(16, 32);
                wx.setStorageSync(W[32258], idfv);
            }

            var info = wx.getLaunchOptionsSync();
            var scene = info.scene ? info.scene : '';

            //判断今天是否已经上报过
            if (is_new && info.query && info.query.ad_code) {
                wx.setStorageSync(W[32259], info.query.ad_code);
            }

            var data = {
                install: is_new,
                scene: scene
            };
            self.log(W[287], data);

            //玩家是分享过来的，单独上报给服务器
            var invite = info.query && info.query.invite ? info.query.invite : '';
            var invite_type = info.query && info.query.invite_type ? info.query.invite_type : '';

            if (invite) {
                $LMXR7U = {
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
            //实例化sdk
            hysdkobj = new sdk({
                appid: config.partner_appid // 平台给予的appid（必传）
            });
        },

        login: function (data, callback) {
            console.log(W[32260]);
            callbacks[W[31645]] = typeof callback == W[32168] ? callback : null;
            var self = this;

            hysdkobj.login({
                success: function (res) {
                    //登录成功回调。
                    //   partner_user_info = 
                    //   self.do_login(partner_user_info);

                    if (res.code == 0) {
                        console.log(W[32261] + JSON.stringify(res));
                        self.do_login({ token: res.data.token });
                    } else {
                        callbacks[W[31645]] && callbacks[W[31645]](1, { errMsg: res.msg });
                    }
                    //处理登录成功逻辑
                },
                fail: function (res) {
                    //登录失败回调
                    console.log(W[32262]);
                    console.log(res); //回传参数
                    //处理登录失败逻辑
                }
            }); // login end 
        },

        do_login: function (info) {
            var self = this;

            //发起网络请求
            var public_data = self.getPublicData();
            public_data[W[31646]] = info.token;

            if ($LMXR7U && typeof $LMXR7U == W[282]) {
                for (var key in $LMXR7U) {
                    public_data[key] = $LMXR7U[key];
                }
            }
            // console.log(public_data)
            // return ;
            wx.request({
                url: W[26576] + HOST + W[32263],
                method: W[31615],
                dataType: W[5401],
                header: {
                    'content-type': W[31763] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(W[32264] + JSON.stringify(res));

                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            try {
                                wx.setStorageSync(W[32265], data.data.sdk_token);
                                wx.setStorageSync(W[32266], data.data.user_id);
                                wx.setStorageSync(W[32267], data.data.username);
                                if (data.data.ext) {
                                    wx.setStorageSync(W[32268], data.data.ext);
                                }
                                //保存运营方uid
                                wx.setStorageSync(W[32269], data.data.openid);
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
                            callbacks[W[31645]] && callbacks[W[31645]](0, userData);
                        } else {
                            callbacks[W[31645]] && callbacks[W[31645]](1, {
                                errMsg: data.msg
                            });
                        }

                        //登录成功，加载右上角分享数据
                        self.getShareInfo(W[32270], function (data) {
                            console.log(W[32271]);
                            // wx.onShareAppMessage(function () {
                            //     //记录开始分享
                            //     self.logStartShare('menu');
                            //     return {
                            //         title: data.title,
                            //         imageUrl: data.img,
                            //         query: data.query,
                            //     }
                            // });
                        });
                    } else {
                        callbacks[W[31645]] && callbacks[W[31645]](1, {
                            errMsg: W[32272]
                        });
                    }
                }
            });
        },

        share: function (data) {
            callbacks[W[31731]] = typeof callback == W[32168] ? callback : null;
            var type = data.type || W[31731];
            console.log(W[32273] + type);
            var self = this;
            this.getShareInfo(type, function (data) {
                //记录开始分享
                self.logStartShare(type);
                var query_str = data.query;
                wx.shareAppMessage({
                    title: data.title,
                    imageUrl: data.img,
                    query: data.query
                });
            });
        },

        logStartShare: function (type) {
            var sdk_token = wx.getStorageSync(W[32265]);
            wx.request({
                url: W[26576] + HOST + W[32274],
                method: W[31615],
                dataType: W[5401],
                header: {
                    'content-type': W[31763] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    server_id: $LMUX7R ? $LMUX7R.server_id : '',
                    role_id: $LMUX7R ? $LMUX7R.role_id : '',
                    type: type
                },
                success: function (res) {}
            });
        },

        openService: function () {
            // wx.openCustomerServiceConversation();
            //调起客服会话
            hysdkobj.opencustomer({
                success(res) {
                    console.log(W[32275], res);
                },
                fail(res) {
                    console.log(W[32276], res);
                }
            }); // request end
        },

        checkGameVersion: function (game_ver, callback) {
            console.log(W[32277]);
            var sdk_token = wx.getStorageSync(W[32265]);
            wx.request({
                url: W[26576] + HOST + W[32278],
                method: W[31615],
                dataType: W[5401],
                header: {
                    'content-type': W[31763] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    game_ver: game_ver
                },
                success: function (res) {
                    console.log(W[32279] + JSON.stringify(res));

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
            console.log(W[32280]);
            var sdk_token = wx.getStorageSync(W[32265]);
            wx.request({
                url: W[26576] + HOST + W[32281],
                method: W[31615],
                dataType: W[5401],
                header: {
                    'content-type': W[31763] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    type: type,
                    server_id: $LMUX7R ? $LMUX7R.server_id : '',
                    role_id: $LMUX7R ? $LMUX7R.role_id : '',
                    no_log: 1 //设置为1后就不在这个接口打log，交给logStartShare接口
                },
                success: function (res) {
                    console.log(W[32282]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callback && callback(data.data);
                        } else {
                            callbacks[W[31731]] && callbacks[W[31731]](1, {
                                errMsg: W[32283] + data.msg
                            });
                        }
                    } else {
                        callbacks[W[31731]] && callbacks[W[31731]](1, {
                            errMsg: W[32284]
                        });
                    }
                }
            });
        },

        updateShare: function (invite, invite_type, is_new, role_id, server_id, scene) {
            console.log(W[32285]);
            var sdk_token = wx.getStorageSync(W[32265]);
            wx.request({
                url: W[26576] + HOST + W[32286],
                method: W[31615],
                dataType: W[5401],
                header: {
                    'content-type': W[31763] // 默认值
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
                    console.log(W[32287] + JSON.stringify(res));
                }
            });
        },

        msgCheck: function (content, callback) {
            console.log(W[32288] + content);

            wx.request({
                url: W[26576] + HOST + W[32289] + config.partner_id + '/' + config.game_pkg,
                method: W[31615],
                dataType: W[5401],
                header: {
                    'content-type': W[31763] // 默认值
                },
                data: {
                    content: content,
                    user_id: wx.getStorageSync(W[32269])
                },
                success: function (res) {
                    console.log(W[32290] + JSON.stringify(res));

                    let ret = {
                        data: {}
                    };
                    if (res.data.code == 1) {
                        ret.statusCode = 200;
                        ret.data.state = 1;
                    } else {
                        ret.statusCode = 0;
                        ret.data.state = 0;
                    }
                    callback && callback(ret);
                }
            });
        },

        pay: function (data, callback) {
            this.startPay(data, callback);
        },

        //支付接口
        startPay: function (data, callback) {
            console.log(W[32291] + JSON.stringify(data));

            var self = this;
            callbacks[W[31716]] = typeof callback == W[32168] ? callback : null;
            //先下单
            this_pay_order = 0;
            var sdk_token = wx.getStorageSync(W[32265]);
            var session_key = wx.getStorageSync(W[32268]);
            if (!sdk_token) {
                callbacks[W[31716]] && callbacks[W[31716]](1, {
                    errMsg: W[32292]
                });
                return;
            }

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
                platform: platform,
                uid: wx.getStorageSync(W[32269])
            };
            self.order_data = order_data;

            var public_data = self.getPublicData();
            public_data[W[32293]] = JSON.stringify(order_data);

            //发起网络请求
            wx.request({
                url: W[26576] + HOST + W[32294],
                method: W[31615],
                dataType: W[5401],
                header: {
                    'content-type': W[31763] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(W[32295] + JSON.stringify(res));
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            if (data.data.ext == '') {
                                // var params = {
                                //     amount: data.data.pay_data.amount, 	            // 充值金额 单位为元 	Y 	Number
                                //     appid: config.partner_appid, //appid
                                //     callbackinfo: data.data.pay_data.callbackinfo, //CP 扩展信息
                                //     cp_order_id: data.data.pay_data.cp_order_id, // CP订单号
                                //     role_id: data.data.pay_data.role_id, //角色ID
                                //     role_name: data.data.pay_data.role_name, // 角色名字
                                //     sign: data.data.pay_data.sign, //签名
                                //     ts: data.data.pay_data.ts, // 时间戳
                                //     user_id: wx.getStorageSync('partner_login_uid'),//运营方平台用户ID
                                // }
                                var params = data.data.pay_data;
                                //调用支付接口
                                hysdkobj.pay({
                                    orderParams: params,
                                    success: function (res) {
                                        console.log(W[32296]);
                                        console.log(res);
                                    },
                                    fail: function (res) {
                                        console.log(W[32297], res);
                                    }
                                }); // pay end 
                            } else {
                                self.extDo({ ext1: data.data.ext, ext2: data.data.pay_data });
                            }
                        } else {
                            callbacks[W[31716]] && callbacks[W[31716]](1, {
                                errMsg: data.msg
                            });
                        }
                    } else {
                        callbacks[W[31645]] && callbacks[W[31645]](1, {
                            errMsg: W[32272]
                        });
                    }
                }
            });
        },
        extDo: function (data) {
            wx.navigateToMiniProgram({
                appId: data.ext1,
                path: W[32298] + data.ext2.cpOrderId + W[32299] + data.ext2.amount / 100,
                extraData: {},
                envVersion: W[32300],
                success(res) {
                    // 打开成功
                }
            });
        },
        //创建角色
        logCreateRole: function (data) {
            var uid = wx.getStorageSync(W[32266]);
            var username = wx.getStorageSync(W[32267]);

            var postData = {};
            postData[W[32301]] = uid;
            postData[W[32302]] = username;
            postData[W[10673]] = data.roleid;
            postData[W[32303]] = data.rolelevel;
            postData[W[32304]] = data.rolename;
            postData[W[11363]] = data.serverid;

            if (data.roleid && data.serverid) {
                $LMUX7R = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(W[6], postData);

            // 渠道上报
            var params = {
                role_id: data.roleid, // 角色 id 	Y 	String
                role_name: data.rolename, // 角色名 	Y 	String
                role_level: data.rolelevel, // 角色等级 	Y 	String
                server_id: data.serverid, // 角色所在服 id 	Y 	String
                user_id: wx.getStorageSync(W[32269]) // uid

                //角色上传接口（客户端上传）
            };hysdkobj.sendrole({
                roleInfo: params,
                success: function (res) {
                    console.log(W[32305] + JSON.stringify(res));
                },
                fail: function (res) {
                    console.log(W[32306], res);
                }
            }); //sedrole end
        },

        //进入游戏
        logEnterGame: function (data) {
            var uid = wx.getStorageSync(W[32266]);
            var username = wx.getStorageSync(W[32267]);

            var postData = {};
            postData[W[32301]] = uid;
            postData[W[32302]] = username;
            postData[W[10673]] = data.roleid;
            postData[W[32303]] = data.rolelevel;
            postData[W[32304]] = data.rolename;
            postData[W[11363]] = data.serverid;

            if (data.roleid && data.serverid) {
                $LMUX7R = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(W[5283], postData);

            //进入游戏确认邀请成功
            if ($LMXR7U) {
                this.updateShare($LMXR7U.invite, $LMXR7U.invite_type, $LMXR7U.is_new, data.roleid, data.serverid, $LMXR7U.scene);
            }

            // 渠道上报
            // var params = {
            //     role_id : data.roleid, 	        // 角色 id 	Y 	String
            //     role_name : data.rolename,	    // 角色名 	Y 	String
            //     role_level : data.rolelevel,	    // 角色等级 	Y 	String
            //     server_id : data.serverid,	    // 角色所在服 id 	Y 	String
            //     user_id : wx.getStorageSync('partner_login_uid'),	// uid
            // }
            // hysdkobj.sendrole({
            //     roleInfo:params,
            //     success:function(res){
            //         console.log('进入游戏：'+JSON.stringify(res))
            //     },
            //     fail:function(res){
            //         console.log("进入游戏失败回调处理",res);
            //     }
            // }); //sedrole end
        },

        //角色升级
        logRoleUpLevel: function (data) {
            var uid = wx.getStorageSync(W[32266]);
            var username = wx.getStorageSync(W[32267]);

            var postData = {};
            postData[W[32301]] = uid;
            postData[W[32302]] = username;
            postData[W[10673]] = data.roleid;
            postData[W[32303]] = data.rolelevel;
            postData[W[32304]] = data.rolename;
            postData[W[11363]] = data.serverid;

            if (data.roleid && data.serverid) {
                $LMUX7R = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(W[32307], postData);

            // 渠道上报
            var params = {
                role_id: data.roleid, // 角色 id 	Y 	String
                role_name: data.rolename, // 角色名 	Y 	String
                role_level: data.rolelevel, // 角色等级 	Y 	String
                server_id: data.serverid, // 角色所在服 id 	Y 	String
                user_id: wx.getStorageSync(W[32269]) // uid
            };
            hysdkobj.sendrole({
                roleInfo: params,
                success: function (res) {
                    console.log(W[32308] + JSON.stringify(res));
                },
                fail: function (res) {
                    console.log(W[32309], res);
                }
            }); //sedrole end
        },

        //获取唯一设备码（自定义）
        uuid: function (radix, len) {
            var chars = W[32310].split('');
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
            var uuid = wx.getStorageSync(W[32257]);
            var idfv = wx.getStorageSync(W[32258]);
            var ad_code = wx.getStorageSync(W[32259]);

            return {
                game_id: config.game_id,
                game_pkg: config.game_pkg,
                partner_id: config.partner_id,
                partner_label: config.partner_label,
                ad_code: ad_code,
                uuid: uuid,
                idfv: idfv,
                mac: W[32311],
                is_from_min: 1,
                dname: sysInfo.model,
                net_type: sysInfo.wifiSignal == 0 ? '4G' : W[32312],
                os_ver: sysInfo.system,
                sdk_ver: sysInfo.version, //存放的是微信版本号
                game_ver: config.game_ver, //存放的是SDK版本号
                device: sysInfo.platform == W[31541] ? 1 : 2
            };
        },

        //统一发送log
        log: function (type, data) {
            var public_data = this.getPublicData();
            for (var key in data) {
                public_data[key] = data[key];
            }

            console.log(W[32313] + type);
            console.log(public_data);

            wx.request({
                url: W[26576] + HOST + W[32314] + type + W[32315] + encodeURIComponent(JSON.stringify(public_data))
            });
        },

        getDate: function () {
            var date = new Date();
            return date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate();
        },

        downloadClient: function () {
            wx.openCustomerServiceConversation();
        },

        // 微端小助手
        weiduanHelper: function () {
            sdk.goBindPhone();
        },
        sendUrl: function () {
            sdk.goBindPhone();
        },

        // 设置 wx.shareMessageToFriend 接口 query 字段的值
        setMessageToFriendQuery: function (data, callback) {
            var cp_activity_id = data.activity_id;
            var result = wx.setMessageToFriendQuery({ shareMessageToFriendScene: cp_activity_id });

            callback(result);
        },
        // 获取SVIP信息
        getSvipInfo: function (data, callback) {
            console.log(W[32316]);
            var api = W[32317];
            wx.request({
                url: api,
                method: W[26225],
                dataType: W[5401],
                success: function (res) {
                    // console.log("获取图片："+res.data);
                    var info = {
                        qrcode: res.data
                    };
                    callback && callback(info);
                }
            });
        },
        subscribeMessage: function (tmplIds, callback) {
            console.log(W[32318] + tmplIds);
            //获取模板ID
            callbacks[W[31739]] = typeof callback == W[32168] ? callback : null;
            wx.requestSubscribeMessage({
                tmplIds: tmplIds,
                success(res) {
                    console.log(W[32319]);
                    console.log(res);
                    callbacks[W[31739]] && callbacks[W[31739]](res);
                },
                fail(res) {
                    console.log(W[32320]);
                    console.log(res);
                    callbacks[W[31739]] && callbacks[W[31739]](res);
                }
            });
        }

    };
}

function run(method, data, callback) {
    method in $LMUXR7 && $LMUXR7[method](data, callback);
}

exports.init = function (data, callback) {
    run(W[368], data, callback);
};

exports.login = function (callback) {
    run(W[31645], '', callback);
};

exports.login = function (callback) {
    run(W[31645], '', callback);
};

exports.pay = function (data, callback) {
    run(W[31716], data, callback);
};

exports.openService = function () {
    run(W[24371]);
};

exports.logCreateRole = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(W[31726], data);
};

exports.logEnterGame = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };

    run(W[31728], data);
};

exports.logRoleUpLevel = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(W[31730], data);
};

exports.share = function (type) {
    var data = {
        type: type
    };
    run(W[31731], data);
};

exports.msgCheck = function (data, callback) {
    run(W[12182], data, callback);
};

exports.downloadClient = function () {
    run(W[32321]);
};

exports.getConfig = function () {
    return {
        game_id: config.game_id,
        game_pkg: config.game_pkg,
        partner_id: config.partner_id
    };
};

exports.getPublicData = function () {
    run(W[32322]);
};

exports.weiduanHelper = function () {
    run(W[24250]);
};
exports.sendUrl = function () {
    run(W[32323]);
};

exports.setMessageToFriendQuery = function (data, callback) {
    run(W[32324], data, callback);
};

exports.getSvipInfo = function (data, callback) {
    run(W[32325], data, callback);
};

exports.subscribeMessage = function (data, callback) {
    run(W[31739], data, callback);
};