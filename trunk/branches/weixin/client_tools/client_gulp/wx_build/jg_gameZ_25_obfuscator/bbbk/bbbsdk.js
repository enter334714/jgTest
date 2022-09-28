var _ = wx.y$;
require(_[38847]);
var config = {
    game_id: _[38848],
    game_pkg: _[38849], //666-微信	笑傲天龙-Z_25
    partner_label: _[38850],
    partner_id: _[38851],
    game_ver: "56.0.17",
    platId: 1000,
    gameId: 298,
    channelVer: _[38853],
    mode: 2,
    is_auth: true //授权登录
};
window.config = config;
var p$ADEBC = p$AECBD();
var HOST = _[38854];
var p$ADECB = null;
var p$AEBCD = null;
var partner_data = {};

function p$AECBD() {
    var callbacks = {};
    return {
        order_data: {},
        init: function (ops, callback) {
            var game_ver = ops && ops.game_ver ? ops.game_ver : 0;
            console.log(_[38855]);
            var self = this;
            var uuid = wx.getStorageSync(_[38856]);
            var is_new;
            if (!uuid) {
                uuid = self.uuid(16, 32);
                wx.setStorageSync(_[38856], uuid);
                is_new = 1;
            } else {
                is_new = 0;
            }
            var idfv = wx.getStorageSync(_[38857]);
            if (!idfv) {
                idfv = self.uuid(16, 32);
                wx.setStorageSync(_[38857], idfv);
            }

            var info = wx.getLaunchOptionsSync();
            var scene = info.scene ? info.scene : '';

            //判断今天是否已经上报过
            if (is_new && info.query && info.query.ad_code) {
                wx.setStorageSync(_[38858], info.query.ad_code);
            }

            var data = {
                install: is_new,
                scene: scene
            };
            self.log(_[287], data);
            //TODO 替换对应参数
            var sdkCallback = function (code, data) {
                switch (code) {
                    case _[38859]:
                        // 初始化成功
                        console.log(_[38860], code, data);
                        break;
                    case _[38861]:
                        // 初始化失败
                        console.log(_[38862], code, data);
                        break;
                    case _[38863]:
                        // 登录成功
                        console.log(_[38864], code, data);
                        self.do_login(data);
                        // 登录成功后会返回uname、gameToken、time、sign；CP拿这几个字段进行登录校验
                        break;
                    case _[38865]:
                        //登录失败
                        console.log(_[38866], code, data);
                        callbacks[_[31852]] && callbacks[_[31852]](1, {
                            errMsg: data.msg
                        });
                        break;
                    case _[38867]:
                        // 支付成功（支付以服务端返回为准）
                        console.log(_[38868], code, data);
                        break;
                    case _[38869]:
                        // 支付失败
                        console.log(_[38870], code, data);
                        callbacks[_[31927]] && callbacks[_[31927]](1, {
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

            console.log(_[38871] + ddtSDKPlat.version);

            //玩家是分享过来的，单独上报给服务器
            var invite = info.query && info.query.invite ? info.query.invite : '';
            var invite_type = info.query && info.query.invite_type ? info.query.invite_type : '';

            if (invite) {
                p$AEBCD = {
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
            console.log(_[38872]);
            callbacks[_[31852]] = typeof callback == _[31278] ? callback : null;
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
            public_data[_[38873]] = 1;
            public_data[_[38874]] = JSON.stringify(partner_data);
            if (p$AEBCD && typeof p$AEBCD == _[282]) {
                for (var key in p$AEBCD) {
                    public_data[key] = p$AEBCD[key];
                }
            }

            //发起网络请求
            wx.request({
                url: _[26576] + HOST + _[38875],
                method: _[31824],
                dataType: _[5401],
                header: {
                    'content-type': _[31974] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(_[38876]);
                    console.log(res);
                    if (res.statusCode === 200) {
                        var data = res.data;
                        if (data.state) {
                            try {
                                wx.setStorageSync(_[38877], data.data.sdk_token);
                                wx.setStorageSync(_[38878], data.data.user_id);
                                wx.setStorageSync(_[38879], data.data.username);
                                if (data.data.ext) {
                                    wx.setStorageSync(_[38880], data.data.ext);
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
                            callbacks[_[31852]] && callbacks[_[31852]](0, userData);
                        } else {
                            callbacks[_[31852]] && callbacks[_[31852]](1, {
                                errMsg: data.msg
                            });
                        }

                        //登录成功，加载右上角分享数据
                        self.getShareInfo(_[38881], function (data) {
                            console.log(_[38882]);
                            wx.onShareAppMessage(function () {
                                //记录开始分享
                                self.logStartShare(_[38881]);
                                return {
                                    title: data.title,
                                    imageUrl: data.img,
                                    query: data.query
                                };
                            });
                        });
                    } else {
                        callbacks[_[31852]] && callbacks[_[31852]](1, {
                            errMsg: _[38883]
                        });
                    }
                }
            });
        },

        share: function (data) {
            callbacks[_[31942]] = typeof callback == _[31278] ? callback : null;
            var type = data.type || _[31942];
            console.log(_[38884] + type);
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
            var sdk_token = wx.getStorageSync(_[38877]);
            wx.request({
                url: _[26576] + HOST + _[38885],
                method: _[31824],
                dataType: _[5401],
                header: {
                    'content-type': _[31974] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    server_id: p$ADECB ? p$ADECB.server_id : '',
                    role_id: p$ADECB ? p$ADECB.role_id : '',
                    type: type
                },
                success: function (res) {}
            });
        },

        openService: function () {
            // wx.openCustomerServiceConversation();
            ddtSDKPlat.toService();
        },

        checkGameVersion: function (game_ver, callback) {
            console.log(_[38886]);
            var sdk_token = wx.getStorageSync(_[38877]);
            wx.request({
                url: _[26576] + HOST + _[38887],
                method: _[31824],
                dataType: _[5401],
                header: {
                    'content-type': _[31974] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    game_ver: game_ver
                },
                success: function (res) {
                    console.log(_[38888]);
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
            console.log(_[38889]);
            var sdk_token = wx.getStorageSync(_[38877]);
            wx.request({
                url: _[26576] + HOST + _[38890],
                method: _[31824],
                dataType: _[5401],
                header: {
                    'content-type': _[31974] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    type: type,
                    server_id: p$ADECB ? p$ADECB.server_id : '',
                    role_id: p$ADECB ? p$ADECB.role_id : '',
                    no_log: 1 //设置为1后就不在这个接口打log，交给logStartShare接口
                },
                success: function (res) {
                    console.log(_[38891]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callback && callback(data.data);
                        } else {
                            callbacks[_[31942]] && callbacks[_[31942]](1, {
                                errMsg: _[38892] + data.msg
                            });
                        }
                    } else {
                        callbacks[_[31942]] && callbacks[_[31942]](1, {
                            errMsg: _[38893]
                        });
                    }
                }
            });
        },

        updateShare: function (invite, invite_type, is_new, role_id, server_id, scene) {
            console.log(_[38894]);
            var sdk_token = wx.getStorageSync(_[38877]);
            wx.request({
                url: _[26576] + HOST + _[38895],
                method: _[31824],
                dataType: _[5401],
                header: {
                    'content-type': _[31974] // 默认值
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
                    console.log(_[38896]);
                    console.log(res);
                }
            });
        },

        msgCheck: function (content, callback) {
            console.log(_[38897]);
            var sdk_token = wx.getStorageSync(_[38877]);
            wx.request({
                url: _[26576] + HOST + _[38898] + config.partner_id + '/' + config.game_pkg,
                method: _[31824],
                dataType: _[5401],
                header: {
                    'content-type': _[31974] // 默认值
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
                    console.log(_[38899]);
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
            console.log(_[38900]);
            console.log(data);

            var self = this;
            callbacks[_[31927]] = typeof callback == _[31278] ? callback : null;
            //先下单
            var sdk_token = wx.getStorageSync(_[38877]);
            var session_key = wx.getStorageSync(_[38880]);
            if (!sdk_token && !session_key) {
                callbacks[_[31927]] && callbacks[_[31927]](1, {
                    errMsg: _[38901]
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
            public_data[_[38902]] = JSON.stringify(order_data);
            public_data[_[38873]] = 1;

            //发起网络请求
            wx.request({
                url: _[26576] + HOST + _[38903],
                method: _[31824],
                dataType: _[5401],
                header: {
                    'content-type': _[31974] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(_[38904]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.data.ext == '') {
                            if (data.state && data.data.pay_data) {
                                //TODO 替换对应方法
                                if (data.data.ext == '') {
                                    console.log(_[38905] + JSON.stringify(data.data.pay_data));
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
                                    self.extDo({ ext1: data.data.ext, ext2: data.data.pay_data });
                                }
                            } else {
                                self.extDo({ ext1: data.data.ext, ext2: data.data.pay_data });
                            }
                        } else {
                            callbacks[_[31927]] && callbacks[_[31927]](1, {
                                errMsg: data.errMsg
                            });
                        }
                    } else {
                        callbacks[_[31852]] && callbacks[_[31852]](1, {
                            errMsg: _[38883]
                        });
                    }
                }
            });
        },

        extDo: function (data) {
            wx.navigateToMiniProgram({
                appId: data.ext1,
                path: _[38906] + data.ext2.billNo + _[38907] + data.ext2.amount,
                extraData: {},
                envVersion: _[34197],
                success(res) {
                    // 打开成功
                }
            });
        },

        extDo: function (data) {
            wx.navigateToMiniProgram({
                appId: data.ext1,
                path: _[38906] + data.ext2.extraInfo + _[38907] + data.ext2.amount,
                extraData: {},
                envVersion: _[34197],
                success(res) {
                    // 打开成功
                }
            });
        },

        logCreateRole: function (data) {
            var uid = wx.getStorageSync(_[38878]);
            var username = wx.getStorageSync(_[38879]);

            var postData = {};
            postData[_[38908]] = uid;
            postData[_[38909]] = username;
            postData[_[10673]] = data.roleid;
            postData[_[38910]] = data.rolelevel;
            postData[_[38911]] = data.rolename;
            postData[_[11363]] = data.serverid;

            if (data.roleid && data.serverid) {
                p$ADECB = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }
            this.log(_[6], postData);
            var roleInfo = {
                roleLevel: data.rolelevel + '',
                roleId: data.roleid + '',
                roleName: data.rolename,
                serverName: data.servername,
                serverId: data.serverid + ''
            };

            ddtSDKPlat.submitData(_[7578], roleInfo);
        },

        //进入游戏
        logEnterGame: function (data, callback) {
            var uid = wx.getStorageSync(_[38878]);
            var username = wx.getStorageSync(_[38879]);

            var postData = {};
            postData[_[38908]] = uid;
            postData[_[38909]] = username;
            postData[_[10673]] = data.roleid;
            postData[_[38910]] = data.rolelevel;
            postData[_[38911]] = data.rolename;
            postData[_[11363]] = data.serverid;

            if (data.roleid && data.serverid) {
                p$ADECB = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(_[5283], postData);

            var roleInfo = {
                roleLevel: data.rolelevel,
                roleId: data.roleid,
                roleName: data.rolename,
                serverName: data.servername,
                serverId: data.serverid

            };

            ddtSDKPlat.submitData(_[11927], roleInfo);

            //进入游戏确认邀请成功
            if (p$AEBCD) {
                this.updateShare(p$AEBCD.invite, p$AEBCD.invite_type, p$AEBCD.is_new, data.roleid, data.serverid, p$AEBCD.scene);
            }
        },

        //角色升级
        logRoleUpLevel: function (data, callback) {
            var uid = wx.getStorageSync(_[38878]);
            var username = wx.getStorageSync(_[38879]);
            this.log(_[38912], data);

            var postData = {};
            postData[_[38908]] = uid;
            postData[_[38909]] = username;
            postData[_[10673]] = data.roleid;
            postData[_[38910]] = data.rolelevel;
            postData[_[38911]] = data.rolename;
            postData[_[11363]] = data.serverid;

            if (data.roleid && data.serverid) {
                p$ADECB = {
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

            ddtSDKPlat.submitData(_[38913], roleInfo);
        },

        subscribeMessage: function (tmplIds, callback) {
            console.log(_[38914] + tmplIds);
            //获取模板ID
            callbacks[_[31950]] = typeof callback == _[31278] ? callback : null;
            wx.requestSubscribeMessage({
                tmplIds: tmplIds,
                success(res) {
                    console.log(_[38915]);
                    console.log(res);
                    callbacks[_[31950]] && callbacks[_[31950]](res);
                },
                fail(res) {
                    console.log(_[38916]);
                    console.log(res);
                    callbacks[_[31950]] && callbacks[_[31950]](res);
                }
            });
        },
        // 微端小助手
        weiduanHelper: function () {
            console.log(_[38917]);
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
            var chars = _[38918].split('');
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
            var uuid = wx.getStorageSync(_[38856]);
            var idfv = wx.getStorageSync(_[38857]);
            var ad_code = wx.getStorageSync(_[38858]);

            return {
                game_id: config.game_id,
                game_pkg: config.game_pkg,
                partner_id: config.partner_id,
                partner_label: config.partner_label,
                ad_code: ad_code,
                uuid: uuid,
                idfv: idfv,
                dname: system.model,
                mac: _[38919],
                net_type: system.wifiSignal == 0 ? '4G' : _[38920],
                os_ver: system.system,
                sdk_ver: system.version, //存放的是微信版本号
                game_ver: config.game_ver, //存放的是SDK版本号
                device: system.platform == _[31741] ? 1 : 2
            };
        },

        //统一发送log
        log: function (type, data) {
            var public_data = this.getPublicData();
            for (var key in data) {
                public_data[key] = data[key];
            }

            console.log(_[38921] + type);
            console.log(public_data);

            wx.request({
                url: _[26576] + HOST + _[38922] + type + _[38923] + encodeURIComponent(JSON.stringify(public_data))
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
    method in p$ADEBC && p$ADEBC[method](data, callback);
}

exports.init = function (data, callback) {
    run(_[368], data, callback);
};

exports.login = function (callback) {
    run(_[31852], '', callback);
};

exports.pay = function (data, callback) {
    run(_[31927], data, callback);
};

exports.openService = function () {
    run(_[24371]);
};

exports.logCreateRole = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(_[31937], data);
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

    run(_[31939], data, callback);
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
    run(_[31941], data, callback);
};

exports.share = function (type) {
    var data = {
        type: type
    };
    run(_[31942], data);
};
exports.subscribeMessage = function (data, callback) {
    run(_[31950], data, callback);
};

exports.msgCheck = function (data, callback) {
    run(_[12182], data, callback);
};

exports.downloadClient = function () {
    run(_[38924]);
};

exports.getConfig = function () {
    return {
        game_id: config.game_id,
        game_pkg: config.game_pkg,
        partner_id: config.partner_id
    };
};

exports.getPublicData = function () {
    run(_[38925]);
};
exports.weiduanHelper = function () {
    run(_[24250]);
};