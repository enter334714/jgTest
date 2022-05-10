var _ = wx.y$;
require(_[0x78ae]);
var config = {
    game_id: _[0x78af],
    game_pkg: _[0x78b0], //666-多梦江湖-剑斩星辰
    partner_label: _[0x78b1],
    partner_id: _[0x78b2],
    game_ver: _[0x78b3],
    platId: 1000,
    gameId: 289,
    channelVer: _[0x78b4],
    mode: 2,
    is_auth: true, //授权登录
    tmpId: { 1: _[0x78b5], 2: _[0x78b6], 3: _[0x78b7] // 订阅的类型 和 模板id
    } };
window.config = config;
var p$2R5_V = p$25V_R();
var HOST = _[0x78b8];
var p$2R5V_ = null;
var p$25_VR = null;
var partner_data = {};

function p$25V_R() {
    var callbacks = {};
    return {
        order_data: {},
        init: function (ops, callback) {
            var game_ver = ops && ops.game_ver ? ops.game_ver : 0;
            console.log(_[0x78b9]);
            var self = this;
            var uuid = wx.getStorageSync(_[0x78ba]);
            var is_new;
            if (!uuid) {
                uuid = self.uuid(16, 32);
                wx.setStorageSync(_[0x78ba], uuid);
                is_new = 1;
            } else {
                is_new = 0;
            }
            var idfv = wx.getStorageSync(_[0x78bb]);
            if (!idfv) {
                idfv = self.uuid(16, 32);
                wx.setStorageSync(_[0x78bb], idfv);
            }

            var info = wx.getLaunchOptionsSync();
            var scene = info.scene ? info.scene : '';

            //判断今天是否已经上报过
            if (is_new && info.query && info.query.ad_code) {
                wx.setStorageSync(_[0x78bc], info.query.ad_code);
            }

            var data = {
                install: is_new,
                scene: scene
            };
            self.log(_[0x11a], data);
            //TODO 替换对应参数
            var sdkCallback = function (code, data) {
                switch (code) {
                    case _[0x78bd]:
                        // 初始化成功
                        console.log(_[0x78be], code, data);
                        break;
                    case _[0x78bf]:
                        // 初始化失败
                        console.log(_[0x78c0], code, data);
                        break;
                    case _[0x78c1]:
                        // 登录成功
                        console.log(_[0x78c2], code, data);
                        self.do_login(data);
                        // 登录成功后会返回uname、gameToken、time、sign；CP拿这几个字段进行登录校验
                        break;
                    case _[0x78c3]:
                        //登录失败
                        console.log(_[0x78c4], code, data);
                        callbacks[_[0x771d]] && callbacks[_[0x771d]](1, {
                            errMsg: data.msg
                        });
                        break;
                    case _[0x78c5]:
                        // 支付成功（支付以服务端返回为准）
                        console.log(_[0x78c6], code, data);
                        break;
                    case _[0x78c7]:
                        // 支付失败
                        console.log(_[0x78c8], code, data);
                        callbacks[_[0x7764]] && callbacks[_[0x7764]](1, {
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

            console.log(_[0x78c9] + ddtSDKPlat.version);

            //玩家是分享过来的，单独上报给服务器
            var invite = info.query && info.query.invite ? info.query.invite : '';
            var invite_type = info.query && info.query.invite_type ? info.query.invite_type : '';

            if (invite) {
                p$25_VR = {
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
            console.log(_[0x78ca]);
            callbacks[_[0x771d]] = typeof callback == _[0x74f0] ? callback : null;
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
            public_data[_[0x78cb]] = 1;
            public_data[_[0x78cc]] = JSON.stringify(partner_data);
            if (p$25_VR && typeof p$25_VR == _[0x115]) {
                for (var key in p$25_VR) {
                    public_data[key] = p$25_VR[key];
                }
            }

            //发起网络请求
            wx.request({
                url: _[0x669b] + HOST + _[0x78cd],
                method: _[0x7701],
                dataType: _[0x17b1],
                header: {
                    'content-type': _[0x7795] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(_[0x78ce]);
                    console.log(res);
                    if (res.statusCode === 200) {
                        var data = res.data;
                        if (data.state) {
                            try {
                                wx.setStorageSync(_[0x78cf], data.data.sdk_token);
                                wx.setStorageSync(_[0x78d0], data.data.user_id);
                                wx.setStorageSync(_[0x78d1], data.data.username);
                                if (data.data.ext) {
                                    wx.setStorageSync(_[0x78d2], data.data.ext);
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
                            callbacks[_[0x771d]] && callbacks[_[0x771d]](0, userData);
                        } else {
                            callbacks[_[0x771d]] && callbacks[_[0x771d]](1, {
                                errMsg: data.msg
                            });
                        }

                        //登录成功，加载右上角分享数据
                        self.getShareInfo(_[0x78d3], function (data) {
                            console.log(_[0x78d4]);
                            wx.onShareAppMessage(function () {
                                //记录开始分享
                                self.logStartShare(_[0x78d3]);
                                return {
                                    title: data.title,
                                    imageUrl: data.img,
                                    query: data.query
                                };
                            });
                        });
                    } else {
                        callbacks[_[0x771d]] && callbacks[_[0x771d]](1, {
                            errMsg: _[0x78d5]
                        });
                    }
                }
            });
        },

        share: function (data) {
            callbacks[_[0x7775]] = typeof callback == _[0x74f0] ? callback : null;
            var type = data.type || _[0x7775];
            console.log(_[0x78d6] + type);
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
            var sdk_token = wx.getStorageSync(_[0x78cf]);
            wx.request({
                url: _[0x669b] + HOST + _[0x78d7],
                method: _[0x7701],
                dataType: _[0x17b1],
                header: {
                    'content-type': _[0x7795] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    server_id: p$2R5V_ ? p$2R5V_.server_id : '',
                    role_id: p$2R5V_ ? p$2R5V_.role_id : '',
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
            console.log(_[0x78d8]);
            var sdk_token = wx.getStorageSync(_[0x78cf]);
            wx.request({
                url: _[0x669b] + HOST + _[0x78d9],
                method: _[0x7701],
                dataType: _[0x17b1],
                header: {
                    'content-type': _[0x7795] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    game_ver: game_ver
                },
                success: function (res) {
                    console.log(_[0x78da]);
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
            console.log(_[0x78db]);
            var sdk_token = wx.getStorageSync(_[0x78cf]);
            wx.request({
                url: _[0x669b] + HOST + _[0x78dc],
                method: _[0x7701],
                dataType: _[0x17b1],
                header: {
                    'content-type': _[0x7795] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    type: type,
                    server_id: p$2R5V_ ? p$2R5V_.server_id : '',
                    role_id: p$2R5V_ ? p$2R5V_.role_id : '',
                    no_log: 1 //设置为1后就不在这个接口打log，交给logStartShare接口
                },
                success: function (res) {
                    console.log(_[0x78dd]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callback && callback(data.data);
                        } else {
                            callbacks[_[0x7775]] && callbacks[_[0x7775]](1, {
                                errMsg: _[0x78de] + data.msg
                            });
                        }
                    } else {
                        callbacks[_[0x7775]] && callbacks[_[0x7775]](1, {
                            errMsg: _[0x78df]
                        });
                    }
                }
            });
        },

        updateShare: function (invite, invite_type, is_new, role_id, server_id, scene) {
            console.log(_[0x78e0]);
            var sdk_token = wx.getStorageSync(_[0x78cf]);
            wx.request({
                url: _[0x669b] + HOST + _[0x78e1],
                method: _[0x7701],
                dataType: _[0x17b1],
                header: {
                    'content-type': _[0x7795] // 默认值
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
                    console.log(_[0x78e2]);
                    console.log(res);
                }
            });
        },

        msgCheck: function (content, callback) {
            console.log(_[0x78e3]);
            var sdk_token = wx.getStorageSync(_[0x78cf]);
            wx.request({
                url: _[0x669b] + HOST + _[0x78e4] + config.partner_id + '/' + config.game_pkg,
                method: _[0x7701],
                dataType: _[0x17b1],
                header: {
                    'content-type': _[0x7795] // 默认值
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
                    console.log(_[0x78e5]);
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
            console.log(_[0x78e6]);
            console.log(data);

            var self = this;
            callbacks[_[0x7764]] = typeof callback == _[0x74f0] ? callback : null;
            //先下单
            var sdk_token = wx.getStorageSync(_[0x78cf]);
            var session_key = wx.getStorageSync(_[0x78d2]);
            if (!sdk_token && !session_key) {
                callbacks[_[0x7764]] && callbacks[_[0x7764]](1, {
                    errMsg: _[0x78e7]
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
            public_data[_[0x78e8]] = JSON.stringify(order_data);
            public_data[_[0x78cb]] = 1;

            //发起网络请求
            wx.request({
                url: _[0x669b] + HOST + _[0x78e9],
                method: _[0x7701],
                dataType: _[0x17b1],
                header: {
                    'content-type': _[0x7795] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(_[0x78ea]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.data.ext == '') {
                            if (data.state && data.data.pay_data) {
                                //TODO 替换对应方法
                                if (data.data.ext == '') {
                                    console.log(_[0x78eb] + JSON.stringify(data.data.pay_data));
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
                            callbacks[_[0x7764]] && callbacks[_[0x7764]](1, {
                                errMsg: data.errMsg
                            });
                        }
                    } else {
                        callbacks[_[0x771d]] && callbacks[_[0x771d]](1, {
                            errMsg: _[0x78d5]
                        });
                    }
                }
            });
        },

        extDo: function (data) {
            wx.navigateToMiniProgram({
                appId: data.ext1,
                path: _[0x78ec] + data.ext2.billNo + _[0x78ed] + data.ext2.amount,
                extraData: {},
                envVersion: _[0x78ee],
                success(res) {
                    // 打开成功
                }
            });
        },

        extDo: function (data) {
            wx.navigateToMiniProgram({
                appId: data.ext1,
                path: _[0x78ec] + data.ext2.extraInfo + _[0x78ed] + data.ext2.amount,
                extraData: {},
                envVersion: _[0x78ee],
                success(res) {
                    // 打开成功
                }
            });
        },

        logCreateRole: function (data) {
            var uid = wx.getStorageSync(_[0x78d0]);
            var username = wx.getStorageSync(_[0x78d1]);

            var postData = {};
            postData[_[0x78ef]] = uid;
            postData[_[0x78f0]] = username;
            postData[_[0x2b80]] = data.roleid;
            postData[_[0x78f1]] = data.rolelevel;
            postData[_[0x78f2]] = data.rolename;
            postData[_[0x2e25]] = data.serverid;

            if (data.roleid && data.serverid) {
                p$2R5V_ = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }
            this.log(_[0x6], postData);
            var roleInfo = {
                roleLevel: data.rolelevel + '',
                roleId: data.roleid + '',
                roleName: data.rolename,
                serverName: data.servername,
                serverId: data.serverid + ''
            };

            ddtSDKPlat.submitData(_[0x1fa1], roleInfo);
        },

        //进入游戏
        logEnterGame: function (data, callback) {
            var uid = wx.getStorageSync(_[0x78d0]);
            var username = wx.getStorageSync(_[0x78d1]);

            var postData = {};
            postData[_[0x78ef]] = uid;
            postData[_[0x78f0]] = username;
            postData[_[0x2b80]] = data.roleid;
            postData[_[0x78f1]] = data.rolelevel;
            postData[_[0x78f2]] = data.rolename;
            postData[_[0x2e25]] = data.serverid;

            if (data.roleid && data.serverid) {
                p$2R5V_ = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(_[0x173b], postData);

            var roleInfo = {
                roleLevel: data.rolelevel,
                roleId: data.roleid,
                roleName: data.rolename,
                serverName: data.servername,
                serverId: data.serverid

            };

            ddtSDKPlat.submitData(_[0x2ffb], roleInfo);

            //进入游戏确认邀请成功
            if (p$25_VR) {
                this.updateShare(p$25_VR.invite, p$25_VR.invite_type, p$25_VR.is_new, data.roleid, data.serverid, p$25_VR.scene);
            }
        },

        //角色升级
        logRoleUpLevel: function (data, callback) {
            var uid = wx.getStorageSync(_[0x78d0]);
            var username = wx.getStorageSync(_[0x78d1]);
            this.log(_[0x78f3], data);

            var postData = {};
            postData[_[0x78ef]] = uid;
            postData[_[0x78f0]] = username;
            postData[_[0x2b80]] = data.roleid;
            postData[_[0x78f1]] = data.rolelevel;
            postData[_[0x78f2]] = data.rolename;
            postData[_[0x2e25]] = data.serverid;

            if (data.roleid && data.serverid) {
                p$2R5V_ = {
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

            ddtSDKPlat.submitData(_[0x78f4], roleInfo);
        },

        subscribeMessage: function (tmplIds, callback) {
            console.log(_[0x78f5] + tmplIds);
            //获取模板ID
            callbacks[_[0x777d]] = typeof callback == _[0x74f0] ? callback : null;
            wx.requestSubscribeMessage({
                tmplIds: tmplIds,
                success(res) {
                    console.log(_[0x78f6]);
                    console.log(res);
                    callbacks[_[0x777d]] && callbacks[_[0x777d]](res);
                },
                fail(res) {
                    console.log(_[0x78f7]);
                    console.log(res);
                    callbacks[_[0x777d]] && callbacks[_[0x777d]](res);
                }
            });
        },
        // 微端小助手
        weiduanHelper: function () {
            console.log(_[0x78f8]);
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
            var chars = _[0x78f9].split('');
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
            var uuid = wx.getStorageSync(_[0x78ba]);
            var idfv = wx.getStorageSync(_[0x78bb]);
            var ad_code = wx.getStorageSync(_[0x78bc]);

            return {
                game_id: config.game_id,
                game_pkg: config.game_pkg,
                partner_id: config.partner_id,
                partner_label: config.partner_label,
                ad_code: ad_code,
                uuid: uuid,
                idfv: idfv,
                dname: system.model,
                mac: _[0x78fa],
                net_type: system.wifiSignal == 0 ? '4G' : _[0x78fb],
                os_ver: system.system,
                sdk_ver: system.version, //存放的是微信版本号
                game_ver: config.game_ver, //存放的是SDK版本号
                device: system.platform == _[0x76ae] ? 1 : 2
            };
        },

        //统一发送log
        log: function (type, data) {
            var public_data = this.getPublicData();
            for (var key in data) {
                public_data[key] = data[key];
            }

            console.log(_[0x78fc] + type);
            console.log(public_data);

            wx.request({
                url: _[0x669b] + HOST + _[0x78fd] + type + _[0x78fe] + encodeURIComponent(JSON.stringify(public_data))
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
    method in p$2R5_V && p$2R5_V[method](data, callback);
}

exports.init = function (data, callback) {
    run(_[0x16b], data, callback);
};

exports.login = function (callback) {
    run(_[0x771d], '', callback);
};

exports.pay = function (data, callback) {
    run(_[0x7764], data, callback);
};

exports.openService = function () {
    run(_[0x5f16]);
};

exports.logCreateRole = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(_[0x7770], data);
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

    run(_[0x7772], data, callback);
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
    run(_[0x7774], data, callback);
};

exports.share = function (type) {
    var data = {
        type: type
    };
    run(_[0x7775], data);
};
exports.subscribeMessage = function (data, callback) {
    run(_[0x777d], data, callback);
};

exports.msgCheck = function (data, callback) {
    run(_[0x30e6], data, callback);
};

exports.downloadClient = function () {
    run(_[0x78ff]);
};

exports.getConfig = function () {
    return {
        game_id: config.game_id,
        game_pkg: config.game_pkg,
        partner_id: config.partner_id
    };
};

exports.getPublicData = function () {
    run(_[0x7900]);
};
exports.weiduanHelper = function () {
    run(_[0x5ea8]);
};