var W = wx.$l;
import sdk from '../utils/hywxgsdk_v108';

//TODO 替换对应参数
var config = {
    game_id: 256,
    game_pkg: W[35438],
    partner_label: W[35439],
    partner_id: W[35440],
    game_ver: W[35441],
    is_auth: false, //授权登录
    partner_appid: W[35442] //游戏appid
};
window.config = config;
var $LMUXR7 = $LMX7RU();
var HOST = W[35443];
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
            console.log(W[35444]);
            var self = this;

            var uuid = wx.getStorageSync(W[35445]);
            var is_new;
            if (!uuid) {
                uuid = self.uuid(16, 32);
                wx.setStorageSync(W[35445], uuid);
                is_new = 1;
            } else {
                is_new = 0;
            }
            var idfv = wx.getStorageSync(W[35446]);
            if (!idfv) {
                idfv = self.uuid(16, 32);
                wx.setStorageSync(W[35446], idfv);
            }

            var info = wx.getLaunchOptionsSync();
            var scene = info.scene ? info.scene : '';

            //判断今天是否已经上报过
            if (is_new && info.query && info.query.ad_code) {
                wx.setStorageSync(W[35447], info.query.ad_code);
            }

            var data = {
                install: is_new,
                scene: scene
            };
            self.log(W[1237], data);

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
            console.log(W[35448]);
            callbacks[W[789]] = typeof callback == W[35359] ? callback : null;
            var self = this;

            hysdkobj.login({
                success: function (res) {
                    //登录成功回调。
                    //   partner_user_info = 
                    //   self.do_login(partner_user_info);

                    if (res.code == 0) {
                        console.log(W[35449] + JSON.stringify(res));
                        self.do_login({ token: res.data.token });
                    } else {
                        callbacks[W[789]] && callbacks[W[789]](1, { errMsg: res.msg });
                    }
                    //处理登录成功逻辑
                },
                fail: function (res) {
                    //登录失败回调
                    console.log(W[35450]);
                    console.log(res); //回传参数
                    //处理登录失败逻辑
                }
            }); // login end 
        },

        do_login: function (info) {
            var self = this;

            //发起网络请求
            var public_data = self.getPublicData();
            public_data[W[790]] = info.token;

            if ($LMXR7U && typeof $LMXR7U == W[1232]) {
                for (var key in $LMXR7U) {
                    public_data[key] = $LMXR7U[key];
                }
            }
            // console.log(public_data)
            // return ;
            wx.request({
                url: W[28268] + HOST + W[35451],
                method: W[758],
                dataType: W[6476],
                header: {
                    'content-type': W[934] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(W[35452] + JSON.stringify(res));

                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            try {
                                wx.setStorageSync(W[35453], data.data.sdk_token);
                                wx.setStorageSync(W[35454], data.data.user_id);
                                wx.setStorageSync(W[35455], data.data.username);
                                if (data.data.ext) {
                                    wx.setStorageSync(W[35456], data.data.ext);
                                }
                                //保存运营方uid
                                wx.setStorageSync(W[35457], data.data.openid);
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
                            callbacks[W[789]] && callbacks[W[789]](0, userData);
                        } else {
                            callbacks[W[789]] && callbacks[W[789]](1, {
                                errMsg: data.msg
                            });
                        }

                        //登录成功，加载右上角分享数据
                        self.getShareInfo(W[35458], function (data) {
                            console.log(W[35459]);
                            wx.onShareAppMessage(function () {
                                //记录开始分享
                                self.logStartShare(W[35458]);
                                return {
                                    title: data.title,
                                    imageUrl: data.img,
                                    query: data.query
                                };
                            });
                        });
                    } else {
                        callbacks[W[789]] && callbacks[W[789]](1, {
                            errMsg: W[35460]
                        });
                    }
                }
            });
        },

        share: function (data) {
            callbacks[W[894]] = typeof callback == W[35359] ? callback : null;
            var type = data.type || W[894];
            console.log(W[35461] + type);
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
            var sdk_token = wx.getStorageSync(W[35453]);
            wx.request({
                url: W[28268] + HOST + W[35462],
                method: W[758],
                dataType: W[6476],
                header: {
                    'content-type': W[934] // 默认值
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
                    console.log(W[35463], res);
                },
                fail(res) {
                    console.log(W[35464], res);
                }
            }); // request end
        },

        checkGameVersion: function (game_ver, callback) {
            console.log(W[35465]);
            var sdk_token = wx.getStorageSync(W[35453]);
            wx.request({
                url: W[28268] + HOST + W[35466],
                method: W[758],
                dataType: W[6476],
                header: {
                    'content-type': W[934] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    game_ver: game_ver
                },
                success: function (res) {
                    console.log(W[35467] + JSON.stringify(res));

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
            console.log(W[35468]);
            var sdk_token = wx.getStorageSync(W[35453]);
            wx.request({
                url: W[28268] + HOST + W[35469],
                method: W[758],
                dataType: W[6476],
                header: {
                    'content-type': W[934] // 默认值
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
                    console.log(W[35470]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callback && callback(data.data);
                        } else {
                            callbacks[W[894]] && callbacks[W[894]](1, {
                                errMsg: W[35471] + data.msg
                            });
                        }
                    } else {
                        callbacks[W[894]] && callbacks[W[894]](1, {
                            errMsg: W[35472]
                        });
                    }
                }
            });
        },

        updateShare: function (invite, invite_type, is_new, role_id, server_id, scene) {
            console.log(W[35473]);
            var sdk_token = wx.getStorageSync(W[35453]);
            wx.request({
                url: W[28268] + HOST + W[35474],
                method: W[758],
                dataType: W[6476],
                header: {
                    'content-type': W[934] // 默认值
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
                    console.log(W[35475] + JSON.stringify(res));
                }
            });
        },

        msgCheck: function (content, callback) {
            console.log(W[35476] + content);

            wx.request({
                url: W[28268] + HOST + W[35477] + config.partner_id + '/' + config.game_pkg,
                method: W[758],
                dataType: W[6476],
                header: {
                    'content-type': W[934] // 默认值
                },
                data: {
                    content: content,
                    user_id: wx.getStorageSync(W[35457])
                },
                success: function (res) {
                    console.log(W[35478] + JSON.stringify(res));

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
            console.log(W[35479] + JSON.stringify(data));

            var self = this;
            callbacks[W[876]] = typeof callback == W[35359] ? callback : null;
            //先下单
            this_pay_order = 0;
            var sdk_token = wx.getStorageSync(W[35453]);
            var session_key = wx.getStorageSync(W[35456]);
            if (!sdk_token) {
                callbacks[W[876]] && callbacks[W[876]](1, {
                    errMsg: W[35480]
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
                uid: wx.getStorageSync(W[35457])
            };
            self.order_data = order_data;

            var public_data = self.getPublicData();
            public_data[W[35481]] = JSON.stringify(order_data);

            //发起网络请求
            wx.request({
                url: W[28268] + HOST + W[35482],
                method: W[758],
                dataType: W[6476],
                header: {
                    'content-type': W[934] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(W[35483] + JSON.stringify(res));
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
                                        console.log(W[35484]);
                                        console.log(res);
                                    },
                                    fail: function (res) {
                                        console.log(W[35485], res);
                                    }
                                }); // pay end 
                            } else {
                                self.extDo({ ext1: data.data.ext, ext2: data.data.pay_data });
                            }
                        } else {
                            callbacks[W[876]] && callbacks[W[876]](1, {
                                errMsg: data.msg
                            });
                        }
                    } else {
                        callbacks[W[789]] && callbacks[W[789]](1, {
                            errMsg: W[35460]
                        });
                    }
                }
            });
        },
        extDo: function (data) {
            wx.navigateToMiniProgram({
                appId: data.ext1,
                path: W[35486] + data.ext2.cpOrderId + W[35487] + data.ext2.amount / 100,
                extraData: {},
                envVersion: W[35488],
                success(res) {
                    // 打开成功
                }
            });
        },
        //创建角色
        logCreateRole: function (data) {
            var uid = wx.getStorageSync(W[35454]);
            var username = wx.getStorageSync(W[35455]);

            var postData = {};
            postData[W[35489]] = uid;
            postData[W[35490]] = username;
            postData[W[11857]] = data.roleid;
            postData[W[35491]] = data.rolelevel;
            postData[W[35492]] = data.rolename;
            postData[W[171]] = data.serverid;

            if (data.roleid && data.serverid) {
                $LMUX7R = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(W[7], postData);

            // 渠道上报
            var params = {
                role_id: data.roleid, // 角色 id 	Y 	String
                role_name: data.rolename, // 角色名 	Y 	String
                role_level: data.rolelevel, // 角色等级 	Y 	String
                server_id: data.serverid, // 角色所在服 id 	Y 	String
                user_id: wx.getStorageSync(W[35457]) // uid

                //角色上传接口（客户端上传）
            };hysdkobj.sendrole({
                roleInfo: params,
                success: function (res) {
                    console.log(W[35493] + JSON.stringify(res));
                },
                fail: function (res) {
                    console.log(W[35494], res);
                }
            }); //sedrole end
        },

        //进入游戏
        logEnterGame: function (data) {
            var uid = wx.getStorageSync(W[35454]);
            var username = wx.getStorageSync(W[35455]);

            var postData = {};
            postData[W[35489]] = uid;
            postData[W[35490]] = username;
            postData[W[11857]] = data.roleid;
            postData[W[35491]] = data.rolelevel;
            postData[W[35492]] = data.rolename;
            postData[W[171]] = data.serverid;

            if (data.roleid && data.serverid) {
                $LMUX7R = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(W[6361], postData);

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
            var uid = wx.getStorageSync(W[35454]);
            var username = wx.getStorageSync(W[35455]);

            var postData = {};
            postData[W[35489]] = uid;
            postData[W[35490]] = username;
            postData[W[11857]] = data.roleid;
            postData[W[35491]] = data.rolelevel;
            postData[W[35492]] = data.rolename;
            postData[W[171]] = data.serverid;

            if (data.roleid && data.serverid) {
                $LMUX7R = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(W[35495], postData);

            // 渠道上报
            var params = {
                role_id: data.roleid, // 角色 id 	Y 	String
                role_name: data.rolename, // 角色名 	Y 	String
                role_level: data.rolelevel, // 角色等级 	Y 	String
                server_id: data.serverid, // 角色所在服 id 	Y 	String
                user_id: wx.getStorageSync(W[35457]) // uid
            };
            hysdkobj.sendrole({
                roleInfo: params,
                success: function (res) {
                    console.log(W[35496] + JSON.stringify(res));
                },
                fail: function (res) {
                    console.log(W[35497], res);
                }
            }); //sedrole end
        },

        //获取唯一设备码（自定义）
        uuid: function (radix, len) {
            var chars = W[35498].split('');
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
            var uuid = wx.getStorageSync(W[35445]);
            var idfv = wx.getStorageSync(W[35446]);
            var ad_code = wx.getStorageSync(W[35447]);

            return {
                game_id: config.game_id,
                game_pkg: config.game_pkg,
                partner_id: config.partner_id,
                partner_label: config.partner_label,
                ad_code: ad_code,
                uuid: uuid,
                idfv: idfv,
                mac: W[35499],
                is_from_min: 1,
                dname: sysInfo.model,
                net_type: sysInfo.wifiSignal == 0 ? '4G' : W[35500],
                os_ver: sysInfo.system,
                sdk_ver: sysInfo.version, //存放的是微信版本号
                game_ver: config.game_ver, //存放的是SDK版本号
                device: sysInfo.platform == W[657] ? 1 : 2
            };
        },

        //统一发送log
        log: function (type, data) {
            var public_data = this.getPublicData();
            for (var key in data) {
                public_data[key] = data[key];
            }

            console.log(W[35501] + type);
            console.log(public_data);

            wx.request({
                url: W[28268] + HOST + W[35502] + type + W[35503] + encodeURIComponent(JSON.stringify(public_data))
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
            hysdkobj.transfer({
                success(res) {
                    console.log(W[35504]);
                },
                fail(res) {
                    console.log(W[35505]);
                }
            });
        },
        sendUrl: function () {
            hysdkobj.transfer({
                success(res) {
                    console.log(W[35504]);
                },
                fail(res) {
                    console.log(W[35505]);
                }
            });
        },

        // 设置 wx.shareMessageToFriend 接口 query 字段的值
        setMessageToFriendQuery: function (data, callback) {
            var cp_activity_id = data.activity_id;
            var result = wx.setMessageToFriendQuery({ shareMessageToFriendScene: cp_activity_id });

            callback(result);
        },
        // 获取SVIP信息
        getSvipInfo: function (data, callback) {
            console.log(W[35506]);
            var api = W[35507];
            wx.request({
                url: api,
                method: W[925],
                dataType: W[6476],
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
            console.log(W[35508] + tmplIds);
            //获取模板ID
            callbacks[W[905]] = typeof callback == W[35359] ? callback : null;
            wx.requestSubscribeMessage({
                tmplIds: tmplIds,
                success(res) {
                    console.log(W[35509]);
                    console.log(res);
                    callbacks[W[905]] && callbacks[W[905]](res);
                },
                fail(res) {
                    console.log(W[35510]);
                    console.log(res);
                    callbacks[W[905]] && callbacks[W[905]](res);
                }
            });
        }

    };
}

function run(method, data, callback) {
    method in $LMUXR7 && $LMUXR7[method](data, callback);
}

exports.init = function (data, callback) {
    run(W[406], data, callback);
};

exports.login = function (callback) {
    run(W[789], '', callback);
};

exports.login = function (callback) {
    run(W[789], '', callback);
};

exports.pay = function (data, callback) {
    run(W[876], data, callback);
};

exports.openService = function () {
    run(W[895]);
};

exports.logCreateRole = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(W[889], data);
};

exports.logEnterGame = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };

    run(W[891], data);
};

exports.logRoleUpLevel = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(W[893], data);
};

exports.share = function (type) {
    var data = {
        type: type
    };
    run(W[894], data);
};

exports.msgCheck = function (data, callback) {
    run(W[738], data, callback);
};

exports.downloadClient = function () {
    run(W[35511]);
};

exports.getConfig = function () {
    return {
        game_id: config.game_id,
        game_pkg: config.game_pkg,
        partner_id: config.partner_id
    };
};

exports.getPublicData = function () {
    run(W[35512]);
};

exports.weiduanHelper = function () {
    run(W[897]);
};
exports.sendUrl = function () {
    run(W[35513]);
};

exports.setMessageToFriendQuery = function (data, callback) {
    run(W[35514], data, callback);
};

exports.getSvipInfo = function (data, callback) {
    run(W[35515], data, callback);
};

exports.subscribeMessage = function (data, callback) {
    run(W[905], data, callback);
};