var D = wx.$b;

import test from "../untils/ddtSDKPlat.js";
var config = {
    game_id: D[501702],
    game_pkg: D[501703],
    partner_label: D[501704],
    partner_id: D[501705],
    game_ver: D[501706], //666-绝地蛮荒
    platId: 1000,
    gameId: 272,
    channelVer: D[501707],
    mode: 2,
    is_auth: true //授权登录
};
window.config = config;
var b17P1ST = b171TSP();
var HOST = D[501708];
var b17P1TS = null;
var b171STP = null;
var partner_data = {};

function b171TSP() {
    var callbacks = {};
    return {
        order_data: {},
        init: function (ops, callback) {
            var game_ver = ops && ops.game_ver ? ops.game_ver : 0;
            console.log(D[501709]);
            var self = this;
            var uuid = wx.getStorageSync(D[501710]);
            var is_new;
            if (!uuid) {
                uuid = self.uuid(16, 32);
                wx.setStorageSync(D[501710], uuid);
                is_new = 1;
            } else {
                is_new = 0;
            }
            var idfv = wx.getStorageSync(D[501711]);
            if (!idfv) {
                idfv = self.uuid(16, 32);
                wx.setStorageSync(D[501711], idfv);
            }

            var info = wx.getLaunchOptionsSync();
            var scene = info.scene ? info.scene : '';

            //判断今天是否已经上报过
            if (is_new && info.query && info.query.ad_code) {
                wx.setStorageSync(D[501712], info.query.ad_code);
            }

            var data = {
                install: is_new,
                scene: scene
            };
            self.log(D[501713], data);
            //TODO 替换对应参数
            var sdkCallback = function (code, data) {
                switch (code) {
                    case D[501714]:
                        // 初始化成功
                        console.log(D[501715], code, data);
                        break;
                    case D[501716]:
                        // 初始化失败
                        console.log(D[501717], code, data);
                        break;
                    case D[501718]:
                        // 登录成功
                        console.log(D[501719], code, data);
                        self.do_login(data);
                        // 登录成功后会返回uname、gameToken、time、sign；CP拿这几个字段进行登录校验
                        break;
                    case D[501720]:
                        //登录失败
                        console.log(D[501721], code, data);
                        callbacks[D[501541]] && callbacks[D[501541]](1, {
                            errMsg: data.msg
                        });
                        break;
                    case D[501722]:
                        // 支付成功（支付以服务端返回为准）
                        console.log(D[501723], code, data);
                        break;
                    case D[501724]:
                        // 支付失败
                        console.log(D[501725], code, data);
                        callbacks[D[501594]] && callbacks[D[501594]](1, {
                            errMsg: data.errMsg
                        });
                        break;
                }
            };

            ddtSDKPlat.init({
                platId: config.platId,
                gameId: config.gameId,
                channelVer: config.channelVer,
                mode: config.mode
            }, sdkCallback, true);

            wx.showShareMenu({ withShareTicket: true });

            console.log(D[501726] + ddtSDKPlat.version);

            //玩家是分享过来的，单独上报给服务器
            var invite = info.query && info.query.invite ? info.query.invite : '';
            var invite_type = info.query && info.query.invite_type ? info.query.invite_type : '';

            if (invite) {
                b171STP = {
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
            console.log(D[501727]);
            callbacks[D[501541]] = typeof callback == D[500126] ? callback : null;
        },

        do_login: function (info) {
            var self = this;
            partner_data = {
                uid: info.uid,
                gameToken: info.gameToken,
                time: info.time,
                sign: info.sign
            };
            var public_data = self.getPublicData();
            public_data[D[501728]] = 1;
            public_data[D[501729]] = JSON.stringify(partner_data);
            if (b171STP && typeof b171STP == D[500007]) {
                for (var key in b171STP) {
                    public_data[key] = b171STP[key];
                }
            }

            //发起网络请求
            wx.request({
                url: D[501730] + HOST + D[501731],
                method: D[501512],
                dataType: D[500391],
                header: {
                    'content-type': D[501643] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(D[501732]);
                    console.log(res);
                    if (res.statusCode === 200) {
                        var data = res.data;
                        if (data.state) {
                            try {
                                wx.setStorageSync(D[501733], data.data.sdk_token);
                                wx.setStorageSync(D[501734], data.data.user_id);
                                wx.setStorageSync(D[501735], data.data.username);
                                if (data.data.ext) {
                                    wx.setStorageSync(D[501736], data.data.ext);
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
                            callbacks[D[501541]] && callbacks[D[501541]](0, userData);
                        } else {
                            callbacks[D[501541]] && callbacks[D[501541]](1, {
                                errMsg: data.msg
                            });
                        }

                        //登录成功，加载右上角分享数据
                        self.getShareInfo(D[501737], function (data) {
                            console.log(D[501738]);
                            wx.onShareAppMessage(function () {
                                //记录开始分享
                                self.logStartShare(D[501737]);
                                return {
                                    title: data.title,
                                    imageUrl: data.img,
                                    query: data.query
                                };
                            });
                        });
                    } else {
                        callbacks[D[501541]] && callbacks[D[501541]](1, {
                            errMsg: D[501739]
                        });
                    }
                }
            });
        },

        share: function (data) {
            callbacks[D[501607]] = typeof callback == D[500126] ? callback : null;
            var type = data.type || D[501607];
            console.log(D[501740] + type);
            var self = this;

            this.getShareInfo(type, function (data) {

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
            var sdk_token = wx.getStorageSync(D[501733]);
            wx.request({
                url: D[501730] + HOST + D[501741],
                method: D[501512],
                dataType: D[500391],
                header: {
                    'content-type': D[501643] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    server_id: b17P1TS ? b17P1TS.server_id : '',
                    role_id: b17P1TS ? b17P1TS.role_id : '',
                    type: type
                },
                success: function (res) {}
            });
        },

        openService: function () {
            wx.openCustomerServiceConversation();
        },

        checkGameVersion: function (game_ver, callback) {
            console.log(D[501742]);
            var sdk_token = wx.getStorageSync(D[501733]);
            wx.request({
                url: D[501730] + HOST + D[501743],
                method: D[501512],
                dataType: D[500391],
                header: {
                    'content-type': D[501643] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    game_ver: game_ver
                },
                success: function (res) {
                    console.log(D[501744]);
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
            console.log(D[501745]);
            var sdk_token = wx.getStorageSync(D[501733]);
            wx.request({
                url: D[501730] + HOST + D[501746],
                method: D[501512],
                dataType: D[500391],
                header: {
                    'content-type': D[501643] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    type: type,
                    server_id: b17P1TS ? b17P1TS.server_id : '',
                    role_id: b17P1TS ? b17P1TS.role_id : '',
                    no_log: 1 //设置为1后就不在这个接口打log，交给logStartShare接口
                },
                success: function (res) {
                    console.log(D[501747]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callback && callback(data.data);
                        } else {
                            callbacks[D[501607]] && callbacks[D[501607]](1, {
                                errMsg: D[501748] + data.msg
                            });
                        }
                    } else {
                        callbacks[D[501607]] && callbacks[D[501607]](1, {
                            errMsg: D[501749]
                        });
                    }
                }
            });
        },

        updateShare: function (invite, invite_type, is_new, role_id, server_id, scene) {
            console.log(D[501750]);
            var sdk_token = wx.getStorageSync(D[501733]);
            wx.request({
                url: D[501730] + HOST + D[501751],
                method: D[501512],
                dataType: D[500391],
                header: {
                    'content-type': D[501643] // 默认值
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
                    console.log(D[501752]);
                    console.log(res);
                }
            });
        },

        msgCheck: function (content, callback) {
            console.log(D[501753]);
            var sdk_token = wx.getStorageSync(D[501733]);
            wx.request({
                url: D[501730] + HOST + D[501754] + config.partner_id + '/' + config.game_pkg,
                method: D[501512],
                dataType: D[500391],
                header: {
                    'content-type': D[501643] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    content: content,
                    gameToken: partner_data.gameToken,
                    uid: partner_data.uid,
                    channelVer: config.channelVer,
                    gameId: config.gameId,
                    platId: config.platId
                },
                success: function (res) {
                    console.log(D[501755]);
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
            console.log(D[501756]);
            console.log(data);

            var self = this;
            callbacks[D[501594]] = typeof callback == D[500126] ? callback : null;
            //先下单
            var sdk_token = wx.getStorageSync(D[501733]);
            var session_key = wx.getStorageSync(D[501736]);
            if (!sdk_token && !session_key) {
                callbacks[D[501594]] && callbacks[D[501594]](1, {
                    errMsg: D[501757]
                });
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
            public_data[D[501758]] = JSON.stringify(order_data);
            public_data[D[501728]] = 1;

            //发起网络请求
            wx.request({
                url: D[501730] + HOST + D[501759],
                method: D[501512],
                dataType: D[500391],
                header: {
                    'content-type': D[501643] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(D[501760]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state && data.data.pay_data) {
                            //TODO 替换对应方法
                            console.log(D[501761] + JSON.stringify(data.data.pay_data));
                            var payInfo = {
                                billNo: data.data.pay_data.billNo,
                                amount: data.data.pay_data.amount,
                                serverId: data.data.pay_data.serverId,
                                roleId: data.data.pay_data.roleId,
                                roleName: data.data.pay_data.roleName,
                                roleLevel: data.data.pay_data.roleLevel,
                                subject: data.data.pay_data.subject,
                                productDesc: data.data.pay_data.productDesc,
                                extraInfo: data.data.pay_data.extraInfo
                            };
                            ddtSDKPlat.pay(payInfo);
                        } else {
                            callbacks[D[501594]] && callbacks[D[501594]](1, {
                                errMsg: data.errMsg
                            });
                        }
                    } else {
                        callbacks[D[501541]] && callbacks[D[501541]](1, {
                            errMsg: D[501739]
                        });
                    }
                }
            });
        },

        logCreateRole: function (data) {
            var uid = wx.getStorageSync(D[501734]);
            var username = wx.getStorageSync(D[501735]);

            var postData = {};
            postData[D[501762]] = uid;
            postData[D[501763]] = username;
            postData[D[501764]] = data.roleid;
            postData[D[501765]] = data.rolelevel;
            postData[D[501766]] = data.rolename;
            postData[D[500934]] = data.serverid;

            if (data.roleid && data.serverid) {
                b17P1TS = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }
            this.log(D[500008], postData);
            var roleInfo = {
                roleLevel: data.rolelevel + '',
                roleId: data.roleid + '',
                roleName: data.rolename,
                serverName: data.servername,
                serverId: data.serverid + ''
            };

            ddtSDKPlat.submitData(D[501767], roleInfo);
        },

        //进入游戏
        logEnterGame: function (data, callback) {
            var uid = wx.getStorageSync(D[501734]);
            var username = wx.getStorageSync(D[501735]);

            var postData = {};
            postData[D[501762]] = uid;
            postData[D[501763]] = username;
            postData[D[501764]] = data.roleid;
            postData[D[501765]] = data.rolelevel;
            postData[D[501766]] = data.rolename;
            postData[D[500934]] = data.serverid;

            if (data.roleid && data.serverid) {
                b17P1TS = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(D[501768], postData);

            var roleInfo = {
                roleLevel: data.rolelevel,
                roleId: data.roleid,
                roleName: data.rolename,
                serverName: data.servername,
                serverId: data.serverid

            };

            ddtSDKPlat.submitData(D[501769], roleInfo);

            //进入游戏确认邀请成功
            if (b171STP) {
                this.updateShare(b171STP.invite, b171STP.invite_type, b171STP.is_new, data.roleid, data.serverid, b171STP.scene);
            }
        },

        //角色升级
        logRoleUpLevel: function (data, callback) {
            var uid = wx.getStorageSync(D[501734]);
            var username = wx.getStorageSync(D[501735]);
            this.log(D[501770], data);

            var postData = {};
            postData[D[501762]] = uid;
            postData[D[501763]] = username;
            postData[D[501764]] = data.roleid;
            postData[D[501765]] = data.rolelevel;
            postData[D[501766]] = data.rolename;
            postData[D[500934]] = data.serverid;

            if (data.roleid && data.serverid) {
                b17P1TS = {
                    role_id: data.roleid,
                    server_id: data.serverid,
                    role_level: data.rolelevel,
                    role_createtime: data.rolecreatetime

                };
            }

            var roleInfo = {
                roleLevel: data.rolelevel,
                roleId: data.roleid,
                roleName: data.rolename,
                serverName: data.servername,
                serverId: data.serverid,
                rolecreatetime: data.rolecreatetime,
                vipLevel: "",
                power: "",
                roleSex: "",
                partyId: "",
                partyName: ""
            };

            ddtSDKPlat.submitData(D[501771], roleInfo);
        },

        subscribeMessage: function (tmplIds, callback) {
            console.log(D[501772] + tmplIds);
            //获取模板ID
            callbacks[D[501616]] = typeof callback == D[500126] ? callback : null;
            wx.requestSubscribeMessage({
                tmplIds: tmplIds,
                success(res) {
                    console.log(D[501773]);
                    console.log(res);
                    callbacks[D[501616]] && callbacks[D[501616]](res);
                },
                fail(res) {
                    console.log(D[501774]);
                    console.log(res);
                    callbacks[D[501616]] && callbacks[D[501616]](res);
                }
            });
        },
        // 微端小助手
        weiduanHelper: function () {
            console.log(D[501775]);
            ddtSDKPlat.jump();
            // var queryConfig={
            //     "channelVer" : config.channelVer,
            //     "gameId" : config.gameId, 
            //     "gameToken" :partner_data.gameToken , 
            //     "mode" :config.mode,
            //     "platId":config.platId,
            //     "roleId":user_game_info.role_id,
            //     "roleLevel":user_game_info.role_level,
            //     "rolecreatetime":user_game_info.role_createtime,
            //     "sceneId":'enterGame',
            //     "serverId":user_game_info.server_id,
            //     "time":Date.parse(new Date()),
            //     "uid":partner_data.uid,
            //     "sign":'',
            //     "partyId":'',
            //     "partyName":'',
            //     "power":'',
            //     "roleSex":'',
            //     "vipLevel":'',
            // };
            // var _str = "";
            // for(var o in queryConfig){
            //     if(queryConfig[o] != -1){
            //         _str += o + "=" + queryConfig[o] + "&";
            //     }
            // };
            //  _str = _str.substr(0, _str.length-1);
            // var sendMessagePath = _str;
            // wx.openCustomerServiceConversation({
            //     sessionFrom: 'turngame',
            //     showMessageCard:true,
            //     sendMessageTitle: '多梦江湖',
            //     sendMessagePath:sendMessagePath,
            //     sendMessageImg: '',
            //     success:function(res){
            //         console.log("weiduan helper success");
            //     },
            //     fail:function(res){
            //         console.log("weiduan helper fail");
            //     },
            //     complete:function(res){
            //         console.log("weiduan helper complete");
            //     }
            // })
        },

        //获取唯一设备码（自定义）
        uuid: function (radix, len) {
            var chars = D[501776].split('');
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
            var uuid = wx.getStorageSync(D[501710]);
            var idfv = wx.getStorageSync(D[501711]);
            var ad_code = wx.getStorageSync(D[501712]);

            return {
                game_id: config.game_id,
                game_pkg: config.game_pkg,
                partner_id: config.partner_id,
                partner_label: config.partner_label,
                ad_code: ad_code,
                uuid: uuid,
                idfv: idfv,
                dname: system.model,
                mac: D[501777],
                net_type: system.wifiSignal == 0 ? '4G' : D[501778],
                os_ver: system.system,
                sdk_ver: system.version, //存放的是微信版本号
                game_ver: config.game_ver, //存放的是SDK版本号
                device: system.platform == D[501014] ? 1 : 2
            };
        },

        //统一发送log
        log: function (type, data) {
            var public_data = this.getPublicData();
            for (var key in data) {
                public_data[key] = data[key];
            }

            console.log(D[501779] + type);
            console.log(public_data);

            wx.request({
                url: D[501730] + HOST + D[501780] + type + D[501781] + encodeURIComponent(JSON.stringify(public_data))
            });
        },

        getDate: function () {
            var date = new Date();
            return date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate();
        },

        downloadClient: function () {
            wx.openCustomerServiceConversation();
        }
    };
}

function run(method, data, callback) {
    method in b17P1ST && b17P1ST[method](data, callback);
}

exports.init = function (data, callback) {
    run(D[501372], data, callback);
};

exports.login = function (callback) {
    run(D[501541], '', callback);
};

exports.pay = function (data, callback) {
    run(D[501594], data, callback);
};

exports.openService = function () {
    run(D[501608]);
};

exports.logCreateRole = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(D[501602], data);
};

exports.logEnterGame = function (serverId, serverName, roleId, roleName, roleLevel, rolecreatetime, callback) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel,
        rolecreatetime: rolecreatetime
    };

    run(D[501604], data, callback);
};

exports.logRoleUpLevel = function (serverId, serverName, roleId, roleName, roleLevel, rolecreatetime, callback) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel,
        rolecreatetime: rolecreatetime
    };
    run(D[501606], data, callback);
};

exports.share = function (type) {
    var data = {
        type: type
    };
    run(D[501607], data);
};
exports.subscribeMessage = function (data, callback) {
    run(D[501616], data, callback);
};

exports.msgCheck = function (data, callback) {
    run(D[501497], data, callback);
};

exports.downloadClient = function () {
    run(D[501782]);
};

exports.getConfig = function () {
    return {
        game_id: config.game_id,
        game_pkg: config.game_pkg,
        partner_id: config.partner_id
    };
};

exports.getPublicData = function () {
    run(D[501783]);
};
exports.weiduanHelper = function () {
    run(D[501610]);
};