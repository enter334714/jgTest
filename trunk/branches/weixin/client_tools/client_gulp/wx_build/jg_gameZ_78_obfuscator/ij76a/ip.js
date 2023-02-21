var s1 = wx.l$;
import mgsdk from '../mgsdk/mgsdk';

//TODO 替换对应参数
var config = {
    game_id: s1[35227],
    game_pkg: s1[35228],
    partner_label: s1[35229],
    partner_id: s1[35230],
    game_ver: s1[35231],
    is_auth: false, //授权登录
    partner_channel_id: 100000376,
    partner_app_key: s1[35232],
    wx_tmpl_sds: ''
};
window.config = config;
var _sTYINW = _sTIWNY();
var HOST = s1[35233];
var _sTYIWN = null;
var _sTINWY = null;
var sysInfo = wx.getSystemInfoSync();
var platform = sysInfo.platform;
var partner_user_info = null;

function _sTIWNY() {
    var callbacks = {};
    var this_pay_order = 0;
    return {
        order_data: {},
        init: function (ops, callback) {
            var game_ver = ops && ops.game_ver ? ops.game_ver : 0;
            console.log(s1[35234]);
            var self = this;

            var uuid = wx.getStorageSync(s1[35235]);
            var is_new;
            if (!uuid) {
                uuid = self.uuid(16, 32);
                wx.setStorageSync(s1[35235], uuid);
                is_new = 1;
            } else {
                is_new = 0;
            }
            var idfv = wx.getStorageSync(s1[35236]);
            if (!idfv) {
                idfv = self.uuid(16, 32);
                wx.setStorageSync(s1[35236], idfv);
            }

            var info = wx.getLaunchOptionsSync();
            var scene = info.scene ? info.scene : '';

            //判断今天是否已经上报过
            if (is_new && info.query && info.query.ad_code) {
                wx.setStorageSync(s1[35237], info.query.ad_code);
            }

            var data = {
                install: is_new,
                scene: scene
            };
            self.log(s1[1334], data);

            //玩家是分享过来的，单独上报给服务器
            var invite = info.query && info.query.invite ? info.query.invite : '';
            var invite_type = info.query && info.query.invite_type ? info.query.invite_type : '';

            if (invite) {
                _sTINWY = {
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
            console.log(s1[35238]);
            callbacks[s1[721]] = typeof callback == s1[35239] ? callback : null;
            var self = this;

            // 渠道SDK初始化
            mgsdk.init({
                channelid: config.partner_channel_id,
                appkey: config.partner_app_key,
                gameversion: config.game_ver,
                callback: res => {
                    console.log(s1[35240] + JSON.stringify(res));
                    // 渠道登录
                    mgsdk.login({
                        callback: res => {
                            var result = res.data;
                            if (result.code == 0) {
                                partner_user_info = result.data;
                                self.do_login(result.data);
                                console.log(s1[35241] + JSON.stringify(result));
                            } else {
                                //登录失败
                                callback(1, {
                                    errMsg: s1[35242]
                                });
                                console.log(s1[35243] + JSON.stringify(result));
                            }
                        }
                    });
                }
            });
        },

        do_login: function (info) {
            var self = this;

            //发起网络请求
            var public_data = self.getPublicData();
            public_data[s1[35244]] = JSON.stringify(info);
            if (_sTINWY && typeof _sTINWY == s1[1329]) {
                for (var key in _sTINWY) {
                    public_data[key] = _sTINWY[key];
                }
            }

            wx.request({
                url: s1[28485] + HOST + s1[35245],
                method: s1[689],
                dataType: s1[6680],
                header: {
                    'content-type': s1[894] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(s1[35246] + JSON.stringify(res));

                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            try {
                                wx.setStorageSync(s1[35247], data.data.sdk_token);
                                wx.setStorageSync(s1[35248], data.data.user_id);
                                wx.setStorageSync(s1[35249], data.data.username);
                                if (data.data.ext) {
                                    wx.setStorageSync(s1[35250], data.data.ext);
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
                            callbacks[s1[721]] && callbacks[s1[721]](0, userData);
                        } else {
                            callbacks[s1[721]] && callbacks[s1[721]](1, {
                                errMsg: data.msg
                            });
                        }

                        self.getShareInfo(s1[35251], function (data) {
                            console.log(s1[35252]);
                            wx.onShareAppMessage(function () {
                                //记录开始分享
                                self.logStartShare(s1[35251]);
                                return {
                                    title: data.title,
                                    imageUrl: data.img,
                                    query: data.query
                                };
                            });
                        });
                    } else {
                        callbacks[s1[721]] && callbacks[s1[721]](1, {
                            errMsg: s1[35253]
                        });
                    }
                }
            });
        },

        share: function (data) {
            callbacks[s1[839]] = typeof callback == s1[35239] ? callback : null;
            var type = data.type || s1[839];
            var cp_activity_id = data.cp_activity_id || '';

            console.log(s1[35254] + type);
            var self = this;
            this.getShareInfo(type, function (data) {

                var partner_query = mgsdk.shareQueryStr();
                var query_str = data.query + '&' + partner_query;

                if (cp_activity_id != '') {
                    query_str = query_str + s1[35255] + cp_activity_id;
                }

                console.log(s1[35256] + query_str);

                //记录开始分享
                self.logStartShare(type);
                wx.shareAppMessage({
                    title: data.title,
                    imageUrl: data.img,
                    query: query_str
                });
            });
        },

        logStartShare: function (type) {
            var sdk_token = wx.getStorageSync(s1[35247]);
            wx.request({
                url: s1[28485] + HOST + s1[35257],
                method: s1[689],
                dataType: s1[6680],
                header: {
                    'content-type': s1[894] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    server_id: _sTYIWN ? _sTYIWN.server_id : '',
                    role_id: _sTYIWN ? _sTYIWN.role_id : '',
                    type: type
                },
                success: function (res) {}
            });
        },

        openService: function () {
            wx.openCustomerServiceConversation();
        },

        checkGameVersion: function (game_ver, callback) {
            console.log(s1[35258]);
            var sdk_token = wx.getStorageSync(s1[35247]);
            wx.request({
                url: s1[28485] + HOST + s1[35259],
                method: s1[689],
                dataType: s1[6680],
                header: {
                    'content-type': s1[894] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    game_ver: game_ver
                },
                success: function (res) {
                    console.log(s1[35260] + JSON.stringify(res));

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
            console.log(s1[35261]);
            var sdk_token = wx.getStorageSync(s1[35247]);
            wx.request({
                url: s1[28485] + HOST + s1[35262],
                method: s1[689],
                dataType: s1[6680],
                header: {
                    'content-type': s1[894] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    type: type,
                    server_id: _sTYIWN ? _sTYIWN.server_id : '',
                    role_id: _sTYIWN ? _sTYIWN.role_id : '',
                    no_log: 1 //设置为1后就不在这个接口打log，交给logStartShare接口
                },
                success: function (res) {
                    console.log(s1[35263]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callback && callback(data.data);
                        } else {
                            callbacks[s1[839]] && callbacks[s1[839]](1, {
                                errMsg: s1[35264] + data.msg
                            });
                        }
                    } else {
                        callbacks[s1[839]] && callbacks[s1[839]](1, {
                            errMsg: s1[35265]
                        });
                    }
                }
            });
        },

        updateShare: function (invite, invite_type, is_new, role_id, server_id, scene) {
            console.log(s1[35266]);
            var sdk_token = wx.getStorageSync(s1[35247]);
            wx.request({
                url: s1[28485] + HOST + s1[35267],
                method: s1[689],
                dataType: s1[6680],
                header: {
                    'content-type': s1[894] // 默认值
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
                    console.log(s1[35268] + JSON.stringify(res));
                }
            });
        },

        msgCheck: function (content, callback) {
            console.log(s1[35269] + content);
            mgsdk.msgSecCheck({
                content: content,
                callback: result => {
                    //请求回调结果
                    console.log(s1[35270] + JSON.stringify(result));
                    let res = {
                        data: {}
                    };
                    if (result.code == 0) {
                        res.statusCode = 200;
                        res.data.state = 1;
                    } else {
                        res.statusCode = 0;
                        res.data.state = 0;
                    }
                    callback(res);
                }
            });
        },

        pay: function (data, callback) {
            this.startPay(data, callback);
        },

        //支付接口
        startPay: function (data, callback) {
            console.log(s1[35271] + JSON.stringify(data));

            var self = this;
            callbacks[s1[815]] = typeof callback == s1[35239] ? callback : null;
            //先下单
            this_pay_order = 0;
            var sdk_token = wx.getStorageSync(s1[35247]);
            var session_key = wx.getStorageSync(s1[35250]);
            if (!sdk_token) {
                callbacks[s1[815]] && callbacks[s1[815]](1, {
                    errMsg: s1[35272]
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
                platform: platform
            };
            self.order_data = order_data;

            var public_data = self.getPublicData();
            public_data[s1[35273]] = JSON.stringify(order_data);

            //发起网络请求
            wx.request({
                url: s1[28485] + HOST + s1[35274],
                method: s1[689],
                dataType: s1[6680],
                header: {
                    'content-type': s1[894] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(s1[35275] + JSON.stringify(res));
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            if (data.data.ext == '') {
                                mgsdk.pay({
                                    amount: data.data.pay_data.amount, // int 	价格(单位分) 	是
                                    orderid: data.data.pay_data.orderId, // string 	订单id 	是
                                    roleid: data.data.pay_data.roleId, // string 	角色id 	是
                                    rolename: data.data.pay_data.roleName, // string 	角色名称 	是
                                    productid: data.data.pay_data.productId, // string 	产品id 	是
                                    productname: data.data.pay_data.productName, // string 	产品名 	是
                                    serverid: data.data.pay_data.serverId, // string 	服务器id 	是
                                    servername: data.data.pay_data.serverName, // string 	服务器名称 	是
                                    orderext: data.data.pay_data.orderId, // string 	自定义参数，支付通知原样返回 	是
                                    notifyurl: data.data.pay_data.payCallbackUrl, // string 	发货地址 	否
                                    deviceid: '', // string 	设备id 	否
                                    callback: result => {
                                        console.log(s1[35276] + JSON.stringify(result));
                                    }
                                });
                            } else {
                                self.extDo({ ext1: data.data.ext, ext2: data.data.pay_data });
                            }
                        } else {
                            callbacks[s1[815]] && callbacks[s1[815]](1, {
                                errMsg: data.msg
                            });
                        }
                    } else {
                        callbacks[s1[721]] && callbacks[s1[721]](1, {
                            errMsg: s1[35253]
                        });
                    }
                }
            });
        },

        //创建角色
        logCreateRole: function (data) {
            var uid = wx.getStorageSync(s1[35248]);
            var username = wx.getStorageSync(s1[35249]);

            var postData = {};
            postData[s1[35277]] = uid;
            postData[s1[35278]] = username;
            postData[s1[12071]] = data.roleid;
            postData[s1[35279]] = data.rolelevel;
            postData[s1[35280]] = data.rolename;
            postData[s1[173]] = data.serverid;

            if (data.roleid && data.serverid) {
                _sTYIWN = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(s1[7], postData);

            // 渠道上报
            mgsdk.report({
                type: s1[35281], //string 	上报类型 	是
                roleid: data.roleid, //string 	角色id 	    是
                rolename: data.rolename, //string 	角色名称 	是
                rolelevel: data.rolelevel, //string 	角色等级 	是
                viplevel: 0, //string 	vip等级 	    是
                serverid: data.serverid, //string 	服务器id 	是
                servername: data.servername, //string 	服务器名称 	是
                callback: result => {
                    console.log(s1[35282] + JSON.stringify(result));
                }

            });
        },

        //进入游戏
        logEnterGame: function (data, callback) {
            var uid = wx.getStorageSync(s1[35248]);
            var username = wx.getStorageSync(s1[35249]);

            var postData = {};
            postData[s1[35277]] = uid;
            postData[s1[35278]] = username;
            postData[s1[12071]] = data.roleid;
            postData[s1[35279]] = data.rolelevel;
            postData[s1[35280]] = data.rolename;
            postData[s1[173]] = data.serverid;

            if (data.roleid && data.serverid) {
                _sTYIWN = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(s1[6565], postData);

            //进入游戏确认邀请成功
            if (_sTINWY) {
                this.updateShare(_sTINWY.invite, _sTINWY.invite_type, _sTINWY.is_new, data.roleid, data.serverid, _sTINWY.scene);
            }

            // 渠道上报
            mgsdk.report({
                type: s1[6565], //string 	上报类型 	是
                roleid: data.roleid, //string 	角色id 	    是
                rolename: data.rolename, //string 	角色名称 	是
                rolelevel: data.rolelevel, //string 	角色等级 	是
                viplevel: 0, //string 	vip等级 	    是
                serverid: data.serverid, //string 	服务器id 	是
                servername: data.servername, //string 	服务器名称 	是
                callback: result => {
                    console.log(s1[35283] + JSON.stringify(result));
                }

            });
            mgsdk.pswitch({
                roleid: data.roleid, //string 	角色ID
                rolename: data.rolename, //string 	角色名称
                rolelevel: data.rolelevel, //int 	    角色等级
                serverid: data.serverid, //string 	服务器ID
                servername: data.servername, //string 	服务器名称

                callback: res => {
                    //返回的res值is_shield  0代表开启支付  1代表屏蔽支付
                    console.log(s1[35284], res);
                    var show_pay = 0;
                    if (res == 1) {
                        show_pay = 1;
                    }

                    // callback && callback({'show_pay':show_pay});
                }
            });
        },

        extDo: function (data) {
            wx.navigateToMiniProgram({
                appId: data.ext1,
                path: s1[35285] + data.ext2.orderId + s1[35286] + data.ext2.amount / 100,
                extraData: {},
                envVersion: s1[35287],
                success(res) {
                    // 打开成功
                }
            });
        },

        //角色升级
        logRoleUpLevel: function (data, callback) {
            var uid = wx.getStorageSync(s1[35248]);
            var username = wx.getStorageSync(s1[35249]);

            var postData = {};
            postData[s1[35277]] = uid;
            postData[s1[35278]] = username;
            postData[s1[12071]] = data.roleid;
            postData[s1[35279]] = data.rolelevel;
            postData[s1[35280]] = data.rolename;
            postData[s1[173]] = data.serverid;

            if (data.roleid && data.serverid) {
                _sTYIWN = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(s1[35288], postData);

            // 渠道上报
            mgsdk.report({
                type: s1[35289], //string 	上报类型 	是
                roleid: data.roleid, //string 	角色id 	    是
                rolename: data.rolename, //string 	角色名称 	是
                rolelevel: data.rolelevel, //string 	角色等级 	是
                viplevel: 0, //string 	vip等级 	    是
                serverid: data.serverid, //string 	服务器id 	是
                servername: data.servername, //string 	服务器名称 	是
                callback: result => {
                    console.log(s1[35283] + JSON.stringify(result));
                }
            });
            mgsdk.pswitch({
                roleid: data.roleid, //string 	角色ID
                rolename: data.rolename, //string 	角色名称
                rolelevel: data.rolelevel, //int 	    角色等级
                serverid: data.serverid, //string 	服务器ID
                servername: data.servername, //string 	服务器名称

                callback: res => {
                    //返回的res值is_shield  0代表开启支付  1代表屏蔽支付
                    console.log(s1[35284], res);
                    var show_pay = 0;
                    if (res == 1) {
                        show_pay = 1;
                    }

                    // callback && callback({'show_pay':show_pay});
                }
            });
        },

        //获取唯一设备码（自定义）
        uuid: function (radix, len) {
            var chars = s1[35290].split('');
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
            var uuid = wx.getStorageSync(s1[35235]);
            var idfv = wx.getStorageSync(s1[35236]);
            var ad_code = wx.getStorageSync(s1[35237]);

            return {
                game_id: config.game_id,
                game_pkg: config.game_pkg,
                partner_id: config.partner_id,
                partner_label: config.partner_label,
                ad_code: ad_code,
                uuid: uuid,
                idfv: idfv,
                mac: s1[35291],
                is_from_min: 1,
                dname: sysInfo.model,
                net_type: sysInfo.wifiSignal == 0 ? '4G' : s1[35292],
                os_ver: sysInfo.system,
                sdk_ver: sysInfo.version, //存放的是微信版本号
                game_ver: config.game_ver, //存放的是SDK版本号
                device: sysInfo.platform == s1[1054] ? 1 : 2
            };
        },

        //统一发送log
        log: function (type, data) {
            var public_data = this.getPublicData();
            for (var key in data) {
                public_data[key] = data[key];
            }

            console.log(s1[35293] + type);
            console.log(public_data);

            wx.request({
                url: s1[28485] + HOST + s1[35294] + type + s1[35295] + encodeURIComponent(JSON.stringify(public_data))
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

            callback(result);
        },

        // 渠道支付屏蔽开关
        partnerPSwitch: function (data, callback) {
            mgsdk.pswitch({
                roleid: data.roleId, //string 	角色ID
                rolename: data.roleName, //string 	角色名称
                rolelevel: data.roleLevel, //int 	    角色等级
                serverid: data.serverId, //string 	服务器ID
                servername: data.serverName, //string 	服务器名称

                callback: res => {
                    //返回的res值is_shield  0代表开启支付  1代表屏蔽支付
                    console.log(s1[35284], res);
                    callback(res);
                }
            });
        },

        // 微信消息订阅
        requestSubscribeMessage: function (callback) {
            wx.requestSubscribeMessage({ tmplIds: [config.wx_tmpl_sds], success(res) {
                    console.log(res);
                }, fail(res) {
                    console.log(res);
                }, complete(res) {
                    callback(res);
                    mgsdk.templateMsgComplete(res);
                } });
        },

        subscribeMessage: function (tmplIds, callback) {
            console.log(s1[35296] + tmplIds);
            //获取模板ID
            callbacks[s1[858]] = typeof callback == s1[35239] ? callback : null;
            wx.requestSubscribeMessage({
                tmplIds: tmplIds,
                success(res) {
                    console.log(s1[35297]);
                    console.log(res);
                    callbacks[s1[858]] && callbacks[s1[858]](res);
                },
                fail(res) {
                    console.log(s1[35298]);
                    console.log(res);
                    callbacks[s1[858]] && callbacks[s1[858]](res);
                }
            });
        },

        sendUrl: function () {
            mgsdk.toMiniD();
        },
        weiduanHelper: function () {
            mgsdk.toMiniD();
        }

    };
}

function run(method, data, callback) {
    method in _sTYINW && _sTYINW[method](data, callback);
}

exports.init = function (data, callback) {
    run(s1[411], data, callback);
};

exports.login = function (callback) {
    run(s1[721], '', callback);
};

exports.login = function (callback) {
    run(s1[721], '', callback);
};

exports.pay = function (data, callback) {
    run(s1[815], data, callback);
};

exports.openService = function () {
    run(s1[840]);
};

exports.logCreateRole = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(s1[830], data);
};

exports.logEnterGame = function (serverId, serverName, roleId, roleName, roleLevel, rolecreatetime, extra) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };

    run(s1[833], data, {});
};

exports.logRoleUpLevel = function (serverId, serverName, roleId, roleName, roleLevel, rolecreatetime, extra) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };

    run(s1[836], data, {});
};

exports.share = function (type, data) {
    var cp_activity_id = data && data.activity_id ? data.activity_id : '';

    var params = {
        type: type,
        cp_activity_id: cp_activity_id
    };

    run(s1[839], params);
};

exports.msgCheck = function (data, callback) {
    run(s1[649], data, callback);
};

exports.downloadClient = function () {
    run(s1[35299]);
};

exports.getConfig = function () {
    return {
        game_id: config.game_id,
        game_pkg: config.game_pkg,
        partner_id: config.partner_id
    };
};

exports.getPublicData = function () {
    run(s1[35300]);
};

exports.setMessageToFriendQuery = function (data, callback) {
    run(s1[35301], data, callback);
};

exports.partnerPSwitch = function (data, callback) {
    run(s1[35302], data, callback);
};

exports.requestSubscribeMessage = function (callback) {
    run(s1[35303], callback);
};
exports.subscribeMessage = function (data, callback) {
    run(s1[858], data, callback);
};
exports.sendUrl = function () {
    run(s1[35304]);
};
exports.weiduanHelper = function () {
    run(s1[842]);
};