var a = wx.$y;
import '../utils/qysdk.js';

//TODO 替换对应参数
import config from './partner_config.js';

window.config = config;
var j61EMB = j6EBM1();
var HOST = a[34989];
var j61EBM = null;
var j6EMB1 = null;
var sysInfo = wx.getSystemInfoSync();
var platform = sysInfo.platform;
var partner_user_info = null;

let sdk = GameGlobal[a[34990]];

function j6EBM1() {
    var callbacks = {};
    var this_pay_order = 0;
    return {
        order_data: {},
        init: function (ops, callback) {
            var game_ver = ops && ops.game_ver ? ops.game_ver : 0;
            console.log(a[34991]);
            var self = this;

            var uuid = wx.getStorageSync(a[34992]);
            var is_new;
            if (!uuid) {
                uuid = self.uuid(16, 32);
                wx.setStorageSync(a[34992], uuid);
                is_new = 1;
            } else {
                is_new = 0;
            }
            var idfv = wx.getStorageSync(a[34993]);
            if (!idfv) {
                idfv = self.uuid(16, 32);
                wx.setStorageSync(a[34993], idfv);
            }

            var info = wx.getLaunchOptionsSync();
            var scene = info.scene ? info.scene : '';

            wx.showShareMenu();
            //判断今天是否已经上报过
            if (is_new && info.query && info.query.ad_code) {
                wx.setStorageSync(a[34994], info.query.ad_code);
            }

            var data = {
                install: is_new,
                scene: scene
            };
            self.log(a[827], data);

            //玩家是分享过来的，单独上报给服务器
            var invite = info.query && info.query.invite ? info.query.invite : '';
            var invite_type = info.query && info.query.invite_type ? info.query.invite_type : '';

            if (invite) {
                j6EMB1 = {
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
            console.log(a[34995]);
            callbacks[a[34996]] = typeof callback == a[397] ? callback : null;
            var self = this;

            //初始化渠道
            sdk.initSdk(function (e) {

                if (true === e.status) {

                    console.log(a[34997]);
                    //登录
                    sdk.login(function (e) {
                        if (true === e.status) {
                            // TODO 成功逻辑    
                            console.log(a[34998], e.data);
                            wx.setStorageSync(a[34999], e.data.user_id);
                            self.do_login(e.data);
                            console.log(a[35000] + JSON.stringify(e.data));
                        } else {
                            // TODO 失败逻辑    
                            console.log(a[35001], e.msg);
                            callbacks[a[34996]] && callbacks[a[34996]](1, {
                                errMsg: a[35002]
                            });
                        }
                    });
                } else {
                    console.log(a[35003], e.msg);
                    callbacks[a[34996]] && callbacks[a[34996]](1, {
                        errMsg: a[35004]
                    });

                    console.log({ game_id: config.partner_game_id, app_key: config.partner_app_key }, e);
                }
            }, { game_id: config.partner_game_id, app_key: config.partner_app_key });
        },

        do_login: function (info) {
            var self = this;

            //发起网络请求
            var public_data = self.getPublicData();
            public_data[a[35005]] = JSON.stringify(info);
            if (j6EMB1 && typeof j6EMB1 == a[311]) {
                for (var key in j6EMB1) {
                    public_data[key] = j6EMB1[key];
                }
            }

            wx.request({
                url: a[28247] + HOST + a[35006],
                method: a[35007],
                dataType: a[533],
                header: {
                    'content-type': a[35008] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(a[35009] + JSON.stringify(res));

                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            try {
                                wx.setStorageSync(a[35010], data.data.sdk_token);
                                wx.setStorageSync(a[35011], data.data.user_id);
                                wx.setStorageSync(a[35012], data.data.username);
                                wx.setStorageSync(a[35013], data.data.openid);
                                if (data.data.ext) {
                                    wx.setStorageSync(a[35014], data.data.ext);
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
                                ios_pay: data.data.ios_pay || '0',
                                ad_flag: info.ad_flag
                            };
                            callbacks[a[34996]] && callbacks[a[34996]](0, userData);
                        } else {
                            callbacks[a[34996]] && callbacks[a[34996]](1, {
                                errMsg: data.msg
                            });
                        }

                        self.getShareInfo(a[35015], function (data) {
                            console.log(a[35016]);
                            self.logStartShare(a[35015]);

                            sdk.onShareAppMessage(function (e) {
                                if (true === e.status) {
                                    // TODO 成功逻辑    
                                    console.log(a[35017]);
                                } else {
                                    // TODO 失败逻辑    
                                    console.log(a[35018], e.msg);
                                }
                            }, { title: data.title, imageUrl: data.img });

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
                        callbacks[a[34996]] && callbacks[a[34996]](1, {
                            errMsg: a[35019]
                        });
                    }
                }
            });
        },

        share: function (data) {
            callbacks[a[35020]] = typeof callback == a[397] ? callback : null;
            var type = data.type || a[35020];
            console.log(a[35021] + type);
            var self = this;
            this.getShareInfo(type, function (data) {

                //记录开始分享
                self.logStartShare(type);

                sdk.shareAppMessage(function (e) {

                    if (true === e.status) {
                        console.log(a[35022]);
                    } else {
                        console.log(a[35023], e.msg);
                    }
                }, { title: data.title, imageUrl: data.img });

                // wx.shareAppMessage({
                //     title: data.title,
                //     imageUrl: data.img,
                //     query: data.query,
                // });
            });
        },

        logStartShare: function (type) {
            var sdk_token = wx.getStorageSync(a[35010]);
            wx.request({
                url: a[28247] + HOST + a[35024],
                method: a[35007],
                dataType: a[533],
                header: {
                    'content-type': a[35008] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    server_id: j61EBM ? j61EBM.server_id : '',
                    role_id: j61EBM ? j61EBM.role_id : '',
                    type: type
                },
                success: function (res) {}
            });
        },

        openService: function () {
            // wx.openCustomerServiceConversation();
            sdk.customerService(function (e) {
                if (true === e.status) {
                    console.log(a[35025], e.data);
                } else {
                    console.log(a[35026], e.msg);
                }
            });
        },

        checkGameVersion: function (game_ver, callback) {
            console.log(a[35027]);
            var sdk_token = wx.getStorageSync(a[35010]);
            wx.request({
                url: a[28247] + HOST + a[35028],
                method: a[35007],
                dataType: a[533],
                header: {
                    'content-type': a[35008] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    game_ver: game_ver
                },
                success: function (res) {
                    console.log(a[35029] + JSON.stringify(res));

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
            console.log(a[35030]);
            var sdk_token = wx.getStorageSync(a[35010]);
            wx.request({
                url: a[28247] + HOST + a[35031],
                method: a[35007],
                dataType: a[533],
                header: {
                    'content-type': a[35008] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    type: type,
                    server_id: j61EBM ? j61EBM.server_id : '',
                    role_id: j61EBM ? j61EBM.role_id : '',
                    no_log: 1 //设置为1后就不在这个接口打log，交给logStartShare接口
                },
                success: function (res) {
                    console.log(a[35032]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callback && callback(data.data);
                        } else {
                            callbacks[a[35020]] && callbacks[a[35020]](1, {
                                errMsg: a[35033] + data.msg
                            });
                        }
                    } else {
                        callbacks[a[35020]] && callbacks[a[35020]](1, {
                            errMsg: a[35034]
                        });
                    }
                }
            });
        },

        updateShare: function (invite, invite_type, is_new, role_id, server_id, scene) {
            console.log(a[35035]);
            var sdk_token = wx.getStorageSync(a[35010]);
            wx.request({
                url: a[28247] + HOST + a[35036],
                method: a[35007],
                dataType: a[533],
                header: {
                    'content-type': a[35008] // 默认值
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
                    console.log(a[35037] + JSON.stringify(res));
                }
            });
        },

        msgCheck: function (content, callback) {
            console.log(a[35038] + content);

            let ret = {
                data: {}
            };
            let checkMsg = {
                nickname: "",
                title: "",
                signature: "",
                scene: 1,
                content: content
            };

            sdk.msgSecCheck(function (e) {
                // console.log('msgSecCheck',e);
                if (true === e.status) {
                    if (e.data.errno == 1) {

                        console.log(a[35039], e.data);
                        ret.statusCode = 200;
                        ret.data.state = 1;
                    } else {

                        console.log(a[35040], e.msg);
                        ret.statusCode = 200;
                        ret.data.state = 0;
                    }
                } else {
                    ret_ata.data.state = 0;
                    ret_ata.statusCode = 0;
                }
                callback && callback(ret);
            }, checkMsg);
        },

        pay: function (data, callback) {
            this.startPay(data, callback);
        },

        //支付接口
        startPay: function (data, callback) {
            console.log(a[35041] + JSON.stringify(data));

            var self = this;
            callbacks[a[35042]] = typeof callback == a[397] ? callback : null;
            //先下单
            this_pay_order = 0;
            var sdk_token = wx.getStorageSync(a[35010]);
            var session_key = wx.getStorageSync(a[35014]);
            if (!sdk_token) {
                callbacks[a[35042]] && callbacks[a[35042]](1, {
                    errMsg: a[35043]
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
                partner_openid: wx.getStorageSync(a[35013])
            };
            self.order_data = order_data;

            var public_data = self.getPublicData();
            public_data[a[35044]] = JSON.stringify(order_data);

            //发起网络请求
            wx.request({
                url: a[28247] + HOST + a[35045],
                method: a[35007],
                dataType: a[533],
                header: {
                    'content-type': a[35008] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(a[35046] + JSON.stringify(res));
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {

                            if (data.data.ext == "") {
                                console.log(data.data.pay_data);
                                sdk.pay(function (e) {
                                    if (true === e.status) {
                                        // TODO 成功逻辑    
                                        console.log(a[35047], e.data);
                                    } else {
                                        // TODO 失败逻辑    
                                        console.log(a[35048], e.msg);
                                    }
                                }, data.data.pay_data);
                            } else {
                                self.extDo({ ext1: data.data.ext, ext2: data.data.pay_data });
                            }
                        } else {
                            callbacks[a[35042]] && callbacks[a[35042]](1, {
                                errMsg: data.msg
                            });
                        }
                    } else {
                        callbacks[a[34996]] && callbacks[a[34996]](1, {
                            errMsg: a[35019]
                        });
                    }
                }
            });
        },
        extDo: function (data) {
            wx.navigateToMiniProgram({
                appId: data.ext1,
                path: a[35049] + data.ext2.extra + a[35050] + data.ext2.totalCharge / 100,
                extraData: {},
                envVersion: a[35051],
                success(res) {
                    // 打开成功
                }
            });
        },
        //渠道上报消息
        partner_role_log: function (data, upload_type) {
            let roleInfo = {
                game_id: config.partner_game_id,
                user_id: wx.getStorageSync(a[34999]),
                cp_user_id: wx.getStorageSync(a[35011]),
                cp_server_id: data.serverid,
                cp_server_name: data.servername,
                cp_role_id: data.roleid,
                cp_role_name: data.rolename,
                cp_role_level: data.rolelevel,
                submit_time: Math.round(new Date().getTime() / 1000).toString(),
                upload_type: upload_type,
                cp_role_balance: "0",
                cp_role_vip: "0",
                cp_role_party: "",
                reincarnation: "",
                fighting_capacity: "",
                profession: "",
                sex: 1
            };

            wx.request({
                url: a[28247] + HOST + a[35052] + config.partner_id + '/' + config.game_pkg,
                method: a[35007],
                dataType: a[533],
                header: {
                    'content-type': a[35008] // 默认值
                },
                data: roleInfo,
                success: function (res) {
                    if (res.data.state == 1) {
                        roleInfo[a[12386]] = res.data.data;
                        console.log(a[35053], roleInfo);
                        sdk.role(function (e) {
                            if (true === e.status) {
                                console.log(a[35054], upload_type);
                            } else {
                                onsole.log(a[35055], upload_type, e.msg);
                            }
                        }, roleInfo);
                    }
                }
            });
        },
        //创建角色
        logCreateRole: function (data) {
            var uid = wx.getStorageSync(a[35011]);
            var username = wx.getStorageSync(a[35012]);

            var postData = {};
            postData[a[35056]] = uid;
            postData[a[35057]] = username;
            postData[a[11718]] = data.roleid;
            postData[a[35058]] = data.rolelevel;
            postData[a[35059]] = data.rolename;
            postData[a[12403]] = data.serverid;

            if (data.roleid && data.serverid) {
                j61EBM = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(a[312], postData);

            // 渠道上报
            this.partner_role_log(data, a[35060]);
        },

        //进入游戏
        logEnterGame: function (data) {
            var uid = wx.getStorageSync(a[35011]);
            var username = wx.getStorageSync(a[35012]);

            var postData = {};
            postData[a[35056]] = uid;
            postData[a[35057]] = username;
            postData[a[11718]] = data.roleid;
            postData[a[35058]] = data.rolelevel;
            postData[a[35059]] = data.rolename;
            postData[a[12403]] = data.serverid;

            if (data.roleid && data.serverid) {
                j61EBM = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(a[6198], postData);

            //进入游戏确认邀请成功
            if (j6EMB1) {
                this.updateShare(j6EMB1.invite, j6EMB1.invite_type, j6EMB1.is_new, data.roleid, data.serverid, j6EMB1.scene);
            }
            this.partner_role_log(data, a[35061]);
        },

        //角色升级
        logRoleUpLevel: function (data) {
            var uid = wx.getStorageSync(a[35011]);
            var username = wx.getStorageSync(a[35012]);

            var postData = {};
            postData[a[35056]] = uid;
            postData[a[35057]] = username;
            postData[a[11718]] = data.roleid;
            postData[a[35058]] = data.rolelevel;
            postData[a[35059]] = data.rolename;
            postData[a[12403]] = data.serverid;

            if (data.roleid && data.serverid) {
                j61EBM = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(a[35062], postData);
            this.partner_role_log(data, a[35063]);
        },

        //获取唯一设备码（自定义）
        uuid: function (radix, len) {
            var chars = a[35064].split('');
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
            var uuid = wx.getStorageSync(a[34992]);
            var idfv = wx.getStorageSync(a[34993]);
            var ad_code = wx.getStorageSync(a[34994]);

            return {
                game_id: config.game_id,
                game_pkg: config.game_pkg,
                partner_id: config.partner_id,
                partner_label: config.partner_label,
                ad_code: ad_code,
                uuid: uuid,
                idfv: idfv,
                mac: a[35065],
                is_from_min: 1,
                dname: sysInfo.model,
                net_type: sysInfo.wifiSignal == 0 ? '4G' : a[35066],
                os_ver: sysInfo.system,
                sdk_ver: sysInfo.version, //存放的是微信版本号
                game_ver: config.game_ver, //存放的是SDK版本号
                device: sysInfo.platform == a[35067] ? 1 : 2
            };
        },

        //统一发送log
        log: function (type, data) {
            var public_data = this.getPublicData();
            for (var key in data) {
                public_data[key] = data[key];
            }

            console.log(a[35068] + type);
            console.log(public_data);

            wx.request({
                url: a[28247] + HOST + a[35069] + type + a[35070] + encodeURIComponent(JSON.stringify(public_data))
            });
        },

        getDate: function () {
            var date = new Date();
            return date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate();
        },

        downloadClient: function () {
            // wx.openCustomerServiceConversation();
            sdk.customerService(function (e) {
                if (true === e.status) {
                    console.log(a[35025], e.data);
                } else {
                    console.log(a[35026], e.msg);
                }
            });
        },

        // 微端小助手
        weiduanHelper: function () {
            sdk.bindPhone(function (e) {
                if (true === e.status) {
                    console.log(a[35071], e.data);
                } else {
                    console.log(a[35072], e.msg);
                }
            });
        },
        // 微端小助手(兼容)
        sendUrl: function () {
            sdk.bindPhone(function (e) {
                if (true === e.status) {
                    console.log(a[35071], e.data);
                } else {
                    console.log(a[35072], e.msg);
                }
            });
        },

        // 设置 wx.shareMessageToFriend 接口 query 字段的值
        setMessageToFriendQuery: function (data, callback) {
            var cp_activity_id = data.activity_id;
            var result = wx.setMessageToFriendQuery({ shareMessageToFriendScene: cp_activity_id });

            callback(result);
        },

        // 游戏loading完成事件上报
        setLoadingCmp: function () {
            sdk.setLoadingCmp();
        },

        //获取验证码
        sendCode: function (data, callback) {

            console.log(a[35073], data.phone);
            sdk.lwSendVCode({
                phone: data.phone,
                success: function (res) {

                    if (res.code == 1) {
                        callback && callback(0, res);
                    } else {
                        callback && callback(1, res);
                    }
                },
                fail: function (res) {
                    callback && callback(1, res);
                }
            });
        },
        //绑定手机
        bindPhone: function (data, callback) {

            console.log(a[35074], data.phone, data.code);
            sdk.toBindPhone({
                phone: data.phone,
                code: data.code,
                success: function (res) {

                    if (res.code == 1) {
                        callback && callback(0, res);
                    } else {
                        callback && callback(1, res);
                    }
                },
                fail: function (res) {
                    callback && callback(1, res);
                }
            });
        },
        subscribeMessage: function (tmplIds, callback) {
            console.log(a[35075] + tmplIds);
            //获取模板ID
            callbacks[a[35076]] = typeof callback == a[397] ? callback : null;
            sdk.subcribeMessage(function (e) {

                if (true === e.status) {
                    console.log(a[35077], e.data);
                    callbacks[a[35076]] && callbacks[a[35076]](e.data);
                } else {
                    console.log(a[35078], e.msg);
                    callbacks[a[35076]] && callbacks[a[35076]](e.msg);
                }
            }, { tmplIds: tmplIds });
        }

    };
}

function run(method, data, callback) {
    method in j61EMB && j61EMB[method](data, callback);
}

exports.init = function (data, callback) {
    run(a[911], data, callback);
};

exports.login = function (callback) {
    run(a[34996], '', callback);
};

exports.login = function (callback) {
    run(a[34996], '', callback);
};

exports.pay = function (data, callback) {
    run(a[35042], data, callback);
};

exports.openService = function () {
    run(a[25813]);
};

exports.logCreateRole = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(a[35079], data);
};

exports.logEnterGame = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };

    run(a[35080], data);
};

exports.logRoleUpLevel = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(a[35081], data);
};

exports.share = function (type) {
    var data = {
        type: type
    };
    run(a[35020], data);
};

exports.msgCheck = function (data, callback) {
    run(a[13303], data, callback);
};

exports.downloadClient = function () {
    run(a[35082]);
};

exports.getConfig = function () {
    return {
        game_id: config.game_id,
        game_pkg: config.game_pkg,
        partner_id: config.partner_id
    };
};

exports.getPublicData = function () {
    run(a[35083]);
};

exports.weiduanHelper = function () {
    run(a[25689]);
};
exports.sendUrl = function () {
    run(a[35084]);
};

exports.setMessageToFriendQuery = function (data, callback) {
    run(a[35085], data, callback);
};

exports.setLoadingCmp = function () {
    run(a[35086]);
};

exports.sendCode = function (data, callback) {
    run(a[35087], data, callback);
};

exports.bindPhone = function (data, callback) {
    run(a[12533], data, callback);
};

exports.subscribeMessage = function (data, callback) {
    run(a[35076], data, callback);
};