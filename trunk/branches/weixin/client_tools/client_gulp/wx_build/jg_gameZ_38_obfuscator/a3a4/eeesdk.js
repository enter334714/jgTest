var c = wx.$a;
import gameSDK from "../utils/tjqy.bundle";

//TODO 替换对应参数
var config = {
    game_id: 256,
    game_pkg: c[31114],
    partner_label: c[31115],
    partner_id: c[31116],
    game_ver: c[31117],
    is_auth: false //授权登录
};
window.config = config;
var j61EMB = j6EBM1();
var HOST = c[31118];
var j61EBM = null;
var j6EMB1 = null;
var sysInfo = wx.getSystemInfoSync();
var platform = sysInfo.platform;
var partner_user_info = null;

// 渠道SDK初始化
var sdkInitOk = false;

function j6EBM1() {
    var callbacks = {};
    var this_pay_order = 0;
    return {
        order_data: {},
        init: function (ops, callback) {
            var game_ver = ops && ops.game_ver ? ops.game_ver : 0;
            console.log(c[31119]);
            var self = this;

            var uuid = wx.getStorageSync(c[31120]);
            var is_new;
            if (!uuid) {
                uuid = self.uuid(16, 32);
                wx.setStorageSync(c[31120], uuid);
                is_new = 1;
            } else {
                is_new = 0;
            }
            var idfv = wx.getStorageSync(c[31121]);
            if (!idfv) {
                idfv = self.uuid(16, 32);
                wx.setStorageSync(c[31121], idfv);
            }

            var info = wx.getLaunchOptionsSync();
            var scene = info.scene ? info.scene : '';

            wx.showShareMenu();

            //判断今天是否已经上报过
            if (is_new && info.query && info.query.ad_code) {
                wx.setStorageSync(c[31122], info.query.ad_code);
            }

            var data = {
                install: is_new,
                scene: scene
            };
            self.log(c[806], data);

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
            console.log(c[31123]);
            callbacks[c[31124]] = typeof callback == c[389] ? callback : null;
            var self = this;

            gameSDK.init(() => {
                console.log(c[31125]);
                gameSDK.entryGame(() => {

                    console.log(c[31126]);
                    gameSDK.loginUserInfo(res => {
                        console.log(c[31127], JSON.stringify(res));
                        partner_user_info = res;
                        self.do_login(res);
                    }, err => {

                        console.log(c[31128], err);
                    });
                }, err => {

                    console.log(c[31129], err);
                });
            }, err => {
                console.log(c[31130], err);
            });
        },

        do_login: function (info) {
            var self = this;

            //发起网络请求
            var public_data = self.getPublicData();
            public_data[c[31131]] = JSON.stringify(info);
            if (j6EMB1 && typeof j6EMB1 == c[305]) {
                for (var key in j6EMB1) {
                    public_data[key] = j6EMB1[key];
                }
            }

            wx.request({
                url: c[27022] + HOST + c[31132],
                method: c[31133],
                dataType: c[517],
                header: {
                    'content-type': c[31134] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(c[31135] + JSON.stringify(res));

                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            try {
                                wx.setStorageSync(c[31136], data.data.sdk_token);
                                wx.setStorageSync(c[31137], data.data.user_id);
                                wx.setStorageSync(c[31138], data.data.username);
                                if (data.data.ext) {
                                    wx.setStorageSync(c[31139], data.data.ext);
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
                                isBindPhone: info.isBindPhone
                            };
                            callbacks[c[31124]] && callbacks[c[31124]](0, userData);
                        } else {
                            callbacks[c[31124]] && callbacks[c[31124]](1, {
                                errMsg: data.msg
                            });
                        }

                        self.getShareInfo(c[31140], function (data) {
                            console.log(c[31141]);
                            self.logStartShare(c[31140]);
                            // let 
                            // console.log(info.share_ext,{title:data.title,imageUrl:data.img,ext:data.query+'&'+ self.jsontoQuery(info.share_ext)});
                            // gameSDK.setMenuShare({title:data.title,imageUrl:data.img,ext:data.query+'&'+ self.jsontoQuery(info.share_ext)})
                            gameSDK.setMenuShare({ title: data.title, imageUrl: data.img, ext: data.query + c[31142] + JSON.stringify(info.share_ext) });
                        });
                    } else {
                        callbacks[c[31124]] && callbacks[c[31124]](1, {
                            errMsg: c[31143]
                        });
                    }
                }
            });
        },
        jsontoQuery: function (json) {
            let str = "";
            let query = "";
            for (let i in json) {
                //i是对象的键值
                str += i + "=" + json[i] + "&";
            }
            query = str.substring(0, str.length - 1);
            return query;
        },
        share: function (data) {
            callbacks[c[31144]] = typeof callback == c[389] ? callback : null;
            var type = data.type || c[31144];
            console.log(c[31145] + type);
            var self = this;
            this.getShareInfo(type, function (data) {

                //记录开始分享
                self.logStartShare(type);

                gameSDK.shareAppMessage({
                    title: data.title,
                    imageUrl: data.img,
                    ext: data.query + c[31142] + JSON.stringify(partner_user_info.share_ext)
                });
            });
        },

        logStartShare: function (type) {
            var sdk_token = wx.getStorageSync(c[31136]);
            wx.request({
                url: c[27022] + HOST + c[31146],
                method: c[31133],
                dataType: c[517],
                header: {
                    'content-type': c[31134] // 默认值
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
            gameSDK.connectCustomer(() => {}, err => {});
        },

        checkGameVersion: function (game_ver, callback) {
            console.log(c[31147]);
            var sdk_token = wx.getStorageSync(c[31136]);
            wx.request({
                url: c[27022] + HOST + c[31148],
                method: c[31133],
                dataType: c[517],
                header: {
                    'content-type': c[31134] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    game_ver: game_ver
                },
                success: function (res) {
                    console.log(c[31149] + JSON.stringify(res));

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
            console.log(c[31150]);
            var sdk_token = wx.getStorageSync(c[31136]);
            wx.request({
                url: c[27022] + HOST + c[31151],
                method: c[31133],
                dataType: c[517],
                header: {
                    'content-type': c[31134] // 默认值
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
                    console.log(c[31152]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callback && callback(data.data);
                        } else {
                            callbacks[c[31144]] && callbacks[c[31144]](1, {
                                errMsg: c[31153] + data.msg
                            });
                        }
                    } else {
                        callbacks[c[31144]] && callbacks[c[31144]](1, {
                            errMsg: c[31154]
                        });
                    }
                }
            });
        },

        updateShare: function (invite, invite_type, is_new, role_id, server_id, scene) {
            console.log(c[31155]);
            var sdk_token = wx.getStorageSync(c[31136]);
            wx.request({
                url: c[27022] + HOST + c[31156],
                method: c[31133],
                dataType: c[517],
                header: {
                    'content-type': c[31134] // 默认值
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
                    console.log(c[31157] + JSON.stringify(res));
                }
            });
        },

        msgCheck: function (content, callback) {
            console.log(c[31158] + content);

            let ret = {
                data: {}
            };

            gameSDK.msgCheck(content).then(success => {
                console.log(c[31159], success);
                ret.statusCode = 200;
                ret.data.state = 1;
                callback && callback(ret);
            }).catch(err => {
                console.log(c[31160], err);
                ret.statusCode = 200;
                ret.data.state = 0;
                callback && callback(ret);
            });
        },

        pay: function (data, callback) {
            this.startPay(data, callback);
        },

        //支付接口
        startPay: function (data, callback) {
            console.log(c[31161] + JSON.stringify(data));

            var self = this;
            callbacks[c[31162]] = typeof callback == c[389] ? callback : null;
            //先下单
            this_pay_order = 0;
            var sdk_token = wx.getStorageSync(c[31136]);
            var session_key = wx.getStorageSync(c[31139]);
            if (!sdk_token) {
                callbacks[c[31162]] && callbacks[c[31162]](1, {
                    errMsg: c[31163]
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
                partner_openid: partner_user_info.uid
            };
            self.order_data = order_data;

            var public_data = self.getPublicData();
            public_data[c[31164]] = JSON.stringify(order_data);

            //发起网络请求
            wx.request({
                url: c[27022] + HOST + c[31165],
                method: c[31133],
                dataType: c[517],
                header: {
                    'content-type': c[31134] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(c[31166] + JSON.stringify(res));
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {

                            if (data.data.ext == '') {

                                gameSDK.makePayment(data.data.pay_data).then(res => {
                                    console.log(c[31167], res);
                                }).catch(error => {
                                    // wx.showModal({
                                    //     title: '发起支付失败',
                                    //     content: JSON.stringify(error),
                                    //     showCancel: false
                                    // })
                                    console.log(c[31168], error);
                                    callbacks[c[31162]] && callbacks[c[31162]](1, { errMsg: c[31169] });
                                });
                            } else {
                                self.extDo({ ext1: data.data.ext, ext2: data.data.pay_data });
                            }
                        } else {
                            callbacks[c[31162]] && callbacks[c[31162]](1, { errMsg: data.msg });
                        }
                    } else {
                        callbacks[c[31124]] && callbacks[c[31124]](1, { errMsg: c[31143] });
                    }
                }
            });
        },
        extDo: function (data) {
            wx.navigateToMiniProgram({
                appId: data.ext1,
                path: c[31170] + data.ext2.orderId + c[31171] + data.ext2.amount,
                extraData: {},
                envVersion: c[31172],
                success(res) {
                    // 打开成功
                }
            });
        },
        //创建角色
        logCreateRole: function (data) {
            var uid = wx.getStorageSync(c[31137]);
            var username = wx.getStorageSync(c[31138]);

            var postData = {};
            postData[c[31173]] = uid;
            postData[c[31174]] = username;
            postData[c[11291]] = data.roleid;
            postData[c[31175]] = data.rolelevel;
            postData[c[31176]] = data.rolename;
            postData[c[11981]] = data.serverid;

            if (data.roleid && data.serverid) {
                j61EBM = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(c[306], postData);
            // 渠道上报
            let sdkRoleInfo = {
                data_type: 2, //1 选择服务器、2 创建角色、3 进入游戏、4 等级提升、5 退出游戏
                server_id: data.serverid,
                server_name: data.servername,
                role_id: data.roleid,
                role_name: data.rolename,
                role_level: data.rolelevel,
                role_currency: 0
            };
            gameSDK.dataReport(sdkRoleInfo);
        },

        //进入游戏
        logEnterGame: function (data) {
            var uid = wx.getStorageSync(c[31137]);
            var username = wx.getStorageSync(c[31138]);

            var postData = {};
            postData[c[31173]] = uid;
            postData[c[31174]] = username;
            postData[c[11291]] = data.roleid;
            postData[c[31175]] = data.rolelevel;
            postData[c[31176]] = data.rolename;
            postData[c[11981]] = data.serverid;

            if (data.roleid && data.serverid) {
                j61EBM = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(c[5987], postData);

            //进入游戏确认邀请成功
            if (j6EMB1) {
                this.updateShare(j6EMB1.invite, j6EMB1.invite_type, j6EMB1.is_new, data.roleid, data.serverid, j6EMB1.scene);
            }
            const iosPaySwitch = gameSDK.checkIosPay(data.rolelevel);

            // 渠道上报
            let sdkRoleInfo = {
                data_type: 3, //1 选择服务器、2 创建角色、3 进入游戏、4 等级提升、5 退出游戏
                server_id: data.serverid,
                server_name: data.servername,
                role_id: data.roleid,
                role_name: data.rolename,
                role_level: data.rolelevel,
                role_currency: 0
            };
            gameSDK.dataReport(sdkRoleInfo);
        },

        //角色升级
        logRoleUpLevel: function (data) {
            var uid = wx.getStorageSync(c[31137]);
            var username = wx.getStorageSync(c[31138]);

            var postData = {};
            postData[c[31173]] = uid;
            postData[c[31174]] = username;
            postData[c[11291]] = data.roleid;
            postData[c[31175]] = data.rolelevel;
            postData[c[31176]] = data.rolename;
            postData[c[11981]] = data.serverid;

            if (data.roleid && data.serverid) {
                j61EBM = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(c[31177], postData);

            // 渠道上报
            let sdkRoleInfo = {
                data_type: 4, //1 选择服务器、2 创建角色、3 进入游戏、4 等级提升、5 退出游戏
                server_id: data.serverid,
                server_name: data.servername,
                role_id: data.roleid,
                role_name: data.rolename,
                role_level: data.rolelevel,
                role_currency: 0
            };
            gameSDK.dataReport(sdkRoleInfo);
        },

        //获取唯一设备码（自定义）
        uuid: function (radix, len) {
            var chars = c[31178].split('');
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
            var uuid = wx.getStorageSync(c[31120]);
            var idfv = wx.getStorageSync(c[31121]);
            var ad_code = wx.getStorageSync(c[31122]);

            return {
                game_id: config.game_id,
                game_pkg: config.game_pkg,
                partner_id: config.partner_id,
                partner_label: config.partner_label,
                ad_code: ad_code,
                uuid: uuid,
                idfv: idfv,
                mac: c[31179],
                is_from_min: 1,
                dname: sysInfo.model,
                net_type: sysInfo.wifiSignal == 0 ? '4G' : c[31180],
                os_ver: sysInfo.system,
                sdk_ver: sysInfo.version, //存放的是微信版本号
                game_ver: config.game_ver, //存放的是SDK版本号
                device: sysInfo.platform == c[31181] ? 1 : 2
            };
        },

        //统一发送log
        log: function (type, data) {
            var public_data = this.getPublicData();
            for (var key in data) {
                public_data[key] = data[key];
            }

            console.log(c[31182] + type);
            console.log(public_data);

            wx.request({
                url: c[27022] + HOST + c[31183] + type + c[31184] + encodeURIComponent(JSON.stringify(public_data))
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
        weiduanHelper: function () {},
        // 微端小助手(兼容)
        sendUrl: function () {},

        // 设置 wx.shareMessageToFriend 接口 query 字段的值
        setMessageToFriendQuery: function (data, callback) {
            var cp_activity_id = data.activity_id;
            var result = wx.setMessageToFriendQuery({ shareMessageToFriendScene: cp_activity_id });

            callback(result);
        },

        // 游戏loading完成事件上报
        setLoadingCmp: function () {},

        //获取验证码
        sendCode: function (data, callback) {},
        //绑定手机
        bindPhone: function (data, callback) {},
        subscribeMessage: function (tmplIds, callback) {
            console.log(c[31185] + tmplIds);
            //获取模板ID
            callbacks[c[31186]] = typeof callback == c[389] ? callback : null;
            wx.requestSubscribeMessage({
                tmplIds: tmplIds,
                success(res) {
                    console.log(c[31187]);
                    console.log(res);
                    callbacks[c[31186]] && callbacks[c[31186]](res);
                },
                fail(res) {
                    console.log(c[31188]);
                    console.log(res);
                    callbacks[c[31186]] && callbacks[c[31186]](res);
                }
            });
        }

    };
}

function run(method, data, callback) {
    method in j61EMB && j61EMB[method](data, callback);
}

exports.init = function (data, callback) {
    run(c[889], data, callback);
};

exports.login = function (callback) {
    run(c[31124], '', callback);
};

exports.login = function (callback) {
    run(c[31124], '', callback);
};

exports.pay = function (data, callback) {
    run(c[31162], data, callback);
};

exports.openService = function () {
    run(c[24876]);
};

exports.logCreateRole = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(c[31189], data);
};

exports.logEnterGame = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };

    run(c[31190], data);
};

exports.logRoleUpLevel = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(c[31191], data);
};

exports.share = function (type) {
    var data = {
        type: type
    };
    run(c[31144], data);
};

exports.msgCheck = function (data, callback) {
    run(c[12776], data, callback);
};

exports.downloadClient = function () {
    run(c[31192]);
};

exports.getConfig = function () {
    return {
        game_id: config.game_id,
        game_pkg: config.game_pkg,
        partner_id: config.partner_id
    };
};

exports.getPublicData = function () {
    run(c[31193]);
};

exports.weiduanHelper = function () {
    run(c[24755]);
};
exports.sendUrl = function () {
    run(c[31194]);
};

exports.setMessageToFriendQuery = function (data, callback) {
    run(c[31195], data, callback);
};

exports.setLoadingCmp = function () {
    run(c[31196]);
};

exports.sendCode = function (data, callback) {
    run(c[31197], data, callback);
};

exports.bindPhone = function (data, callback) {
    run(c[12111], data, callback);
};

exports.subscribeMessage = function (data, callback) {
    run(c[31186], data, callback);
};