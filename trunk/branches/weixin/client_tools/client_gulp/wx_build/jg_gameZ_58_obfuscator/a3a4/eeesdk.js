var c = wx.$a;
import XHSDK from '../utils/xhSdk';

//TODO 替换对应参数 qingjs
var config = {
    game_id: c[0],
    game_pkg: c[1],
    partner_label: c[2],
    partner_id: c[3],
    game_ver: c[4],
    is_auth: true, //授权登录
    partner_pid: c[5],
    partner_gid: c[6]
};
window.config = config;
const xhSdk = new XHSDK({
    pid: config.partner_pid,
    gid: config.partner_gid
});
var j61EMB = j6EBM1();
var HOST = c[7];
var j61EBM = null;
var j6EMB1 = null;
var partner_data = {};
var system = wx.getSystemInfoSync();
var partner_user_info = {};
var partner_info = {};

function j6EBM1() {
    var callbacks = {};
    return {
        order_data: {},
        init: function (ops, callback) {
            var game_ver = ops && ops.game_ver ? ops.game_ver : 0;
            console.log(c[8]);
            var self = this;

            var uuid = wx.getStorageSync(c[9]);
            var is_new;
            if (!uuid) {
                uuid = self.uuid(16, 32);
                wx.setStorageSync(c[9], uuid);
                is_new = 1;
            } else {
                is_new = 0;
            }
            var idfv = wx.getStorageSync(c[10]);
            if (!idfv) {
                idfv = self.uuid(16, 32);
                wx.setStorageSync(c[10], idfv);
            }

            var info = wx.getLaunchOptionsSync();
            var scene = info.scene ? info.scene : '';

            //判断今天是否已经上报过
            if (is_new && info.query && info.query.ad_code) {
                wx.setStorageSync(c[11], info.query.ad_code);
            }
            wx.showShareMenu();
            var data = {
                install: is_new,
                scene: scene
            };
            self.log(c[12], data);
            //TODO 替换对应参数

            wx.showShareMenu({ withShareTicket: true });

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

        //TODO 替换联运登录接口
        login: function (data, callback) {
            var self = this;
            console.log(c[13]);
            callbacks[c[14]] = typeof callback == c[15] ? callback : null;
            xhSdk.login().then(res => {
                //res 返回给CP的参数,类型为对象
                console.log(res);
                if (res.code == 200) {
                    self.do_login(res.data);
                }
            }).catch(err => {
                console.log(err);
            });
        },

        do_login: function (info) {
            var self = this;
            var public_data = self.getPublicData();
            public_data[c[16]] = 1;
            info[c[17]] = config.partner_pid;
            info[c[18]] = config.partner_gid;
            public_data[c[19]] = JSON.stringify(info);
            if (j6EMB1 && typeof j6EMB1 == c[20]) {
                for (var key in j6EMB1) {
                    public_data[key] = j6EMB1[key];
                }
            }

            //发起网络请求
            wx.request({
                url: c[21] + HOST + c[22],
                method: c[23],
                dataType: c[24],
                header: {
                    'content-type': c[25] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(c[26], res);
                    if (res.statusCode === 200) {
                        var data = res.data;
                        if (data.state) {
                            try {
                                wx.setStorageSync(c[27], data.data.sdk_token);
                                wx.setStorageSync(c[28], data.data.user_id);
                                wx.setStorageSync(c[29], data.data.username);
                                if (data.data.ext) {
                                    wx.setStorageSync(c[30], data.data.ext);
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
                            callbacks[c[14]] && callbacks[c[14]](0, userData);
                        } else {
                            callbacks[c[14]] && callbacks[c[14]](1, {
                                errMsg: data.msg
                            });
                        }

                        //登录成功，加载右上角分享数据
                        self.getShareInfo(c[31], function (data) {
                            console.log(c[32] + JSON.stringify(data));
                            wx.onShareAppMessage(function () {
                                //记录开始分享
                                self.logStartShare(c[31]);
                                return {
                                    title: data.title,
                                    imageUrl: data.img,
                                    query: data.query + "&" + qingjs.instance.getShareToken()
                                };
                            });
                        });
                    } else {
                        callbacks[c[14]] && callbacks[c[14]](1, {
                            errMsg: c[33]
                        });
                    }
                }
            });
        },

        share: function (data) {
            callbacks[c[34]] = typeof callback == c[15] ? callback : null;
            var type = data.type || c[34];
            console.log(c[35] + type);
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
            var sdk_token = wx.getStorageSync(c[27]);
            wx.request({
                url: c[21] + HOST + c[36],
                method: c[23],
                dataType: c[24],
                header: {
                    'content-type': c[25] // 默认值
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
            //登录后打开客服页面
            qingjs.instance.goCustomerService();
        },

        checkGameVersion: function (game_ver, callback) {
            console.log(c[37]);
            var sdk_token = wx.getStorageSync(c[27]);
            wx.request({
                url: c[21] + HOST + c[38],
                method: c[23],
                dataType: c[24],
                header: {
                    'content-type': c[25] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    game_ver: game_ver
                },
                success: function (res) {
                    console.log(c[39]);
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
            console.log(c[40]);
            var sdk_token = wx.getStorageSync(c[27]);
            wx.request({
                url: c[21] + HOST + c[41],
                method: c[23],
                dataType: c[24],
                header: {
                    'content-type': c[25] // 默认值
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
                    console.log(c[42]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callback && callback(data.data);
                        } else {
                            callbacks[c[34]] && callbacks[c[34]](1, {
                                errMsg: c[43] + data.msg
                            });
                        }
                    } else {
                        callbacks[c[34]] && callbacks[c[34]](1, {
                            errMsg: c[44]
                        });
                    }
                }
            });
        },

        updateShare: function (invite, invite_type, is_new, role_id, server_id, scene) {
            console.log(c[45]);
            var sdk_token = wx.getStorageSync(c[27]);
            wx.request({
                url: c[21] + HOST + c[46],
                method: c[23],
                dataType: c[24],
                header: {
                    'content-type': c[25] // 默认值
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
                    console.log(c[47]);
                    console.log(res);
                }
            });
        },

        msgCheck: function (content, callback) {
            console.log(c[48]);
            let ret = {
                data: {}
            };
            let data = {
                content: content,
                scene: 1
            };
            xhSdk.checkContent(data).then(res => {
                if (res.code == 200 && res.data.pass) {
                    ret.statusCode = 200;
                    ret.data.state = 1;
                } else {
                    ret.statusCode = 200;
                    ret.data.state = 0;
                }
                callback && callback(ret);
            }).catch(err => {
                ret.statusCode = 200;
                ret.data.state = 0;
                callback && callback(ret);
            });
        },

        pay: function (data, callback) {
            var self = this;
            self.startPay(data, callback);
        },

        //支付接口
        startPay: function (data, callback) {
            console.log(c[49], data);
            var self = this;
            callbacks[c[50]] = typeof callback == c[15] ? callback : null;
            //先下单
            var sdk_token = wx.getStorageSync(c[27]);
            var session_key = wx.getStorageSync(c[30]);
            if (!sdk_token && !session_key) {
                callbacks[c[50]] && callbacks[c[50]](1, {
                    errMsg: c[51]
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
            public_data[c[52]] = JSON.stringify(order_data);
            public_data[c[16]] = 1;

            //发起网络请求
            wx.request({
                url: c[21] + HOST + c[53],
                method: c[23],
                dataType: c[24],
                header: {
                    'content-type': c[25] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(c[54]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state && data.data.pay_data) {
                            //TODO 替换对应方法
                            console.log(c[55] + JSON.stringify(data.data.pay_data));
                            if (data.data.ext == '') {
                                xhSdk.pay(data.data.pay_data);
                            } else {
                                self.extDo({ ext1: data.data.ext, ext2: data.data.pay_data });
                            }
                        } else {
                            callbacks[c[50]] && callbacks[c[50]](1, {
                                errMsg: data.errMsg
                            });
                        }
                    } else {
                        callbacks[c[14]] && callbacks[c[14]](1, {
                            errMsg: c[33]
                        });
                    }
                }
            });
        },

        logCreateRole: function (data) {
            var uid = wx.getStorageSync(c[28]);
            var username = wx.getStorageSync(c[29]);

            var postData = {};
            postData[c[56]] = uid;
            postData[c[57]] = username;
            postData[c[58]] = data.roleid;
            postData[c[59]] = data.rolelevel;
            postData[c[60]] = data.rolename;
            postData[c[61]] = data.serverid;

            if (data.roleid && data.serverid) {
                j61EBM = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }
            this.log(c[62], postData);
            let params = {
                action: c[63],
                server_id: data.serverid, //区服编号
                server_name: data.servername, //区服名称
                role_id: data.roleid, //角色 ID
                role_name: data.rolename, //角色名
                role_level: 0, //角色等级
                role_createtime: data.rolecreatetime,
                role_leveltime: '0',
                role_vip: '0',
                role_balance: '0',
                role_fightvalue: 0,
                role_profession: c[64],
                role_partyname: c[64]
            };
            xhSdk.submitRoleInfo(params).then(res => {
                console.log(c[65] + JSON.stringify(res));
            }).catch(err => {
                console.log(err);
            });
        },

        //进入游戏
        logEnterGame: function (data, callback) {
            var uid = wx.getStorageSync(c[28]);
            var username = wx.getStorageSync(c[29]);

            var postData = {};
            postData[c[56]] = uid;
            postData[c[57]] = username;
            postData[c[58]] = data.roleid;
            postData[c[59]] = data.rolelevel;
            postData[c[60]] = data.rolename;
            postData[c[61]] = data.serverid;

            if (data.roleid && data.serverid) {
                j61EBM = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(c[66], postData);

            //进入游戏确认邀请成功
            if (j6EMB1) {
                this.updateShare(j6EMB1.invite, j6EMB1.invite_type, j6EMB1.is_new, data.roleid, data.serverid, j6EMB1.scene);
            }
            let params = {
                action: c[67],
                server_id: data.serverid, //区服编号
                server_name: data.servername, //区服名称
                role_id: data.roleid, //角色 ID
                role_name: data.rolename, //角色名
                role_level: data.rolelevel, //角色等级
                role_createtime: data.rolecreatetime,
                role_leveltime: '0',
                role_vip: '0',
                role_balance: '0',
                role_fightvalue: 0,
                role_profession: c[64],
                role_partyname: c[64]
            };
            xhSdk.submitRoleInfo(params).then(res => {
                console.log(c[68] + JSON.stringify(res));
            }).catch(err => {
                console.log(err);
            });
        },

        //角色升级
        logRoleUpLevel: function (data, callback) {
            var uid = wx.getStorageSync(c[28]);
            var username = wx.getStorageSync(c[29]);

            var postData = {};
            postData[c[56]] = uid;
            postData[c[57]] = username;
            postData[c[58]] = data.roleid;
            postData[c[59]] = data.rolelevel;
            postData[c[60]] = data.rolename;
            postData[c[61]] = data.serverid;

            if (data.roleid && data.serverid) {
                j61EBM = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }
            this.log(c[69], data);
            let params = {
                action: c[70],
                server_id: data.serverid, //区服编号
                server_name: data.servername, //区服名称
                role_id: data.roleid, //角色 ID
                role_name: data.rolename, //角色名
                role_level: data.rolelevel, //角色等级
                role_createtime: data.rolecreatetime,
                role_leveltime: '0',
                role_vip: '0',
                role_balance: '0',
                role_fightvalue: 0,
                role_profession: c[64],
                role_partyname: c[64]
            };
            xhSdk.submitRoleInfo(params).then(res => {
                console.log(c[68] + JSON.stringify(res));
            }).catch(err => {
                console.log(err);
            });
        },

        //获取唯一设备码（自定义）
        uuid: function (radix, len) {
            var chars = c[71].split('');
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

        sendUrl: function () {},
        // 微端小助手
        weiduanHelper: function () {},

        //获取公共参数
        getPublicData: function () {
            var system = wx.getSystemInfoSync();
            var uuid = wx.getStorageSync(c[9]);
            var idfv = wx.getStorageSync(c[10]);
            var ad_code = wx.getStorageSync(c[11]);

            return {
                game_id: config.game_id,
                game_pkg: config.game_pkg,
                partner_id: config.partner_id,
                partner_label: config.partner_label,
                ad_code: ad_code,
                uuid: uuid,
                idfv: idfv,
                dname: system.model,
                mac: c[72],
                net_type: system.wifiSignal == 0 ? '4G' : c[73],
                os_ver: system.system,
                sdk_ver: system.version, //存放的是微信版本号
                game_ver: config.game_ver, //存放的是SDK版本号
                device: system.platform == c[74] ? 1 : 2
            };
        },

        //统一发送log
        log: function (type, data) {
            var public_data = this.getPublicData();
            for (var key in data) {
                public_data[key] = data[key];
            }

            console.log(c[75] + type);
            console.log(public_data);

            wx.request({
                url: c[21] + HOST + c[76] + type + c[77] + encodeURIComponent(JSON.stringify(public_data))
            });
        },

        getDate: function () {
            var date = new Date();
            return date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate();
        },

        downloadClient: function () {
            wx.openCustomerServiceConversation();
        },

        // 玩家下线通知
        beQuit: function (data) {},
        extDo: function (data) {
            wx.navigateToMiniProgram({
                appId: data.ext1,
                path: c[78] + data.ext2.ext + c[79] + data.ext2.money,
                extraData: {},
                envVersion: c[80],
                success(res) {
                    // 打开成功
                }
            });
        }
    };
}

function run(method, data, callback) {
    method in j61EMB && j61EMB[method](data, callback);
}

exports.init = function (data, callback) {
    run(c[81], data, callback);
};

exports.login = function (callback) {
    run(c[14], '', callback);
};

exports.login = function (callback) {
    run(c[14], '', callback);
};

exports.pay = function (data, callback) {
    run(c[50], data, callback);
};

exports.openService = function () {
    run(c[82]);
};

exports.logCreateRole = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(c[83], data);
};

exports.logEnterGame = function (serverId, serverName, roleId, roleName, roleLevel, rolecreatetime, extra) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel,
        rolecreatetime: rolecreatetime,
        rolepower: extra ? extra.rolepower : ""
    };

    run(c[84], data, extra ? extra.callback : null);
};

exports.logRoleUpLevel = function (serverId, serverName, roleId, roleName, roleLevel, rolecreatetime, extra) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel,
        rolecreatetime: rolecreatetime,
        rolepower: extra ? extra.rolepower : ""
    };
    run(c[85], data, extra ? extra.callback : null);
};

exports.share = function (type) {
    var data = {
        type: type
    };
    run(c[34], data);
};

exports.msgCheck = function (data, callback) {
    run(c[86], data, callback);
};
exports.downloadClient = function () {
    run(c[87]);
};

exports.getConfig = function () {
    return {
        game_id: config.game_id,
        game_pkg: config.game_pkg,
        partner_id: config.partner_id
    };
};

exports.getPublicData = function () {
    run(c[88]);
};

exports.beQuit = function (data) {
    run(c[89], data);
};