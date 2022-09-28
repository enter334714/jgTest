var v = wx.$d;
import XXSdk from '../utils/xxsdk.min';
//TODO 替换对应参数
var config = {
    game_id: 256,
    game_pkg: v[1893],
    partner_label: v[1894],
    partner_id: v[1895],
    game_ver: v[1896],
    is_auth: false, //授权登录
    appId: v[1897], // AppId 必填
    appBundleId: v[1898], // AppBundleId 必填
    appName: v[1899] // 游戏名称 必填
};
window.config = config;
var D$H5$Q4 = D$H$4Q5();
var HOST = v[1900];
var D$H5$4Q = null;
var D$H$Q45 = null;
var sysInfo = wx.getSystemInfoSync();
var platform = sysInfo.platform;
var partner_user_info = null;

const sdk = new XXSdk();

function D$H$4Q5() {
    var callbacks = {};
    var this_pay_order = 0;
    return {
        order_data: {},
        init: function (ops, callback) {
            var game_ver = ops && ops.game_ver ? ops.game_ver : 0;
            console.log(v[1901]);
            var self = this;

            var uuid = wx.getStorageSync(v[1902]);
            var is_new;
            if (!uuid) {
                uuid = self.uuid(16, 32);
                wx.setStorageSync(v[1902], uuid);
                is_new = 1;
            } else {
                is_new = 0;
            }
            var idfv = wx.getStorageSync(v[1903]);
            if (!idfv) {
                idfv = self.uuid(16, 32);
                wx.setStorageSync(v[1903], idfv);
            }

            var info = wx.getLaunchOptionsSync();
            var scene = info.scene ? info.scene : '';

            //判断今天是否已经上报过
            if (is_new && info.query && info.query.ad_code) {
                wx.setStorageSync(v[1904], info.query.ad_code);
            }

            var data = {
                install: is_new,
                scene: scene
            };
            self.log(v[1905], data);
            wx.showShareMenu();
            //玩家是分享过来的，单独上报给服务器
            var invite = info.query && info.query.invite ? info.query.invite : '';
            var invite_type = info.query && info.query.invite_type ? info.query.invite_type : '';

            if (invite) {
                D$H$Q45 = {
                    invite: invite,
                    invite_type: invite_type,
                    is_new: is_new,
                    scene: scene
                };
            }
            console.log(v[1906]);

            //判断版本号
            if (game_ver) {
                this.checkGameVersion(game_ver, function (data) {
                    callback && callback(data);
                });
            }
        },

        login: function (data, callback) {
            console.log(v[1907]);
            callbacks[v[261]] = typeof callback == v[1082] ? callback : null;
            var self = this;
            console.log(sdk);
            // 渠道SDK初始化
            // 创建对象后，也可以⽤全局变量 GameGlobal.xxsdk.init 调⽤
            sdk.init({
                appId: config.appId, // AppId 必填
                appBundleId: config.appBundleId, // AppBundleId 必填
                appName: config.appName // 游戏名称 必填
            }).then(res => {
                // 初始化成功回调 完成回调即可调⽤其他接⼝
                console.log(v[1908], res);
                sdk.login().then(res => {

                    //请求回调结果
                    if (res.code == 1) {
                        // partner_user_info = res.sdkUserInfo;
                        partner_user_info = {
                            userToken: res.sdkUserInfo[v[262]],
                            uid: res.sdkUserInfo['id'],
                            openId: res.sdkUserInfo[v[1909]]
                        };
                        self.do_login(partner_user_info);
                        console.log(v[1910] + JSON.stringify(res));
                    } else {
                        //登录失败
                        callback(1, {
                            errMsg: v[1911]
                        });
                        console.log(v[1912] + JSON.stringify(res));
                        return;
                    }
                }).catch(err => {
                    //登录失败
                    callback(1, {
                        errMsg: v[1911]
                    });
                    console.log(v[1912] + JSON.stringify(err));
                });
            }).catch(err => {
                console.log(v[1913], err);
                callback(1, {
                    errMsg: v[1914]
                });
            });
        },

        do_login: function (info) {
            var self = this;

            //发起网络请求
            var public_data = self.getPublicData();
            public_data[v[1915]] = JSON.stringify(info);
            if (D$H$Q45 && typeof D$H$Q45 == v[983]) {
                for (var key in D$H$Q45) {
                    public_data[key] = D$H$Q45[key];
                }
            }

            wx.request({
                url: v[1916] + HOST + v[1917],
                method: v[225],
                dataType: v[1327],
                header: {
                    'content-type': v[417] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(v[1918] + JSON.stringify(res));

                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            try {
                                var login_times = 2;
                                if (!wx.getStorageSync(v[1919])) {
                                    wx.setStorageSync(v[1920], new Date());
                                    login_times = 1;
                                }
                                var create_time = Date.parse(wx.getStorageSync(v[1920])).toString();
                                create_time = create_time.substr(0, 10);
                                partner_user_info = {
                                    'open_id': data.data.ext,
                                    'user_id': data.data.user_id
                                    // JYSDK.sendLoginLog({
                                    //     'app_id':config.partner_app_id, 
                                    //     'open_id':data.data.ext,
                                    //     'user_id':data.data.user_id, 
                                    //     'create_time': create_time, 
                                    //     'login_times': login_times
                                    // })
                                };wx.setStorageSync(v[1921], data.data.sdk_token);
                                wx.setStorageSync(v[1919], data.data.user_id);
                                wx.setStorageSync(v[1922], data.data.username);
                                if (data.data.ext) {
                                    wx.setStorageSync(v[1923], data.data.ext);
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
                            callbacks[v[261]] && callbacks[v[261]](0, userData);
                        } else {
                            callbacks[v[261]] && callbacks[v[261]](1, {
                                errMsg: data.msg
                            });
                        }

                        // self.getShareInfo('menu', function (data) {
                        //     console.log("[SDK]开始监听右上角菜单分享");
                        //     // wx.onShareAppMessage(function () {
                        //     //     //记录开始分享
                        //     //     self.logStartShare('menu');
                        //     //     return {
                        //     //         title: data.title,
                        //     //         imageUrl: data.img,
                        //     //         query: data.query,
                        //     //     }
                        //     // });
                        //     const share = {
                        //         title: data.title, // 转发标题, 选填
                        //         imageUrl: data.img, // 转发显示图⽚的链接, 选填
                        //         }
                        //     sdk.shareGame(share);
                        // });
                    } else {
                        callbacks[v[261]] && callbacks[v[261]](1, {
                            errMsg: v[1924]
                        });
                    }
                }
            });
        },

        share: function (data) {
            callbacks[v[374]] = typeof callback == v[1082] ? callback : null;
            var type = data.type || v[374];
            console.log(v[1925] + type);
            var self = this;
            this.getShareInfo(type, function (data) {
                //记录开始分享
                self.logStartShare(type);

                var query_str = data.query;

                //记录开始分享
                self.logStartShare(type);

                wx.shareAppMessage({
                    title: data.title,
                    imageUrl: data.img,
                    query: data.query
                });
                // const share = {
                //     title: data.title, // 转发标题, 选填
                //     imageUrl: data.img, // 转发显示图⽚的链接, 选填
                //    };
                // sdk.shareGame(share)
            });
        },

        logStartShare: function (type) {
            var sdk_token = wx.getStorageSync(v[1921]);
            wx.request({
                url: v[1916] + HOST + v[1926],
                method: v[225],
                dataType: v[1327],
                header: {
                    'content-type': v[417] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    server_id: D$H5$4Q ? D$H5$4Q.server_id : '',
                    role_id: D$H5$4Q ? D$H5$4Q.role_id : '',
                    type: type
                },
                success: function (res) {}
            });
        },

        openService: function () {
            wx.openCustomerServiceConversation();
        },

        checkGameVersion: function (game_ver, callback) {
            console.log(v[1927]);
            var sdk_token = wx.getStorageSync(v[1921]);
            wx.request({
                url: v[1916] + HOST + v[1928],
                method: v[225],
                dataType: v[1327],
                header: {
                    'content-type': v[417] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    game_ver: game_ver
                },
                success: function (res) {
                    console.log(v[1929] + JSON.stringify(res));

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
            console.log(v[1930]);
            var sdk_token = wx.getStorageSync(v[1921]);
            wx.request({
                url: v[1916] + HOST + v[1931],
                method: v[225],
                dataType: v[1327],
                header: {
                    'content-type': v[417] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    type: type,
                    server_id: D$H5$4Q ? D$H5$4Q.server_id : '',
                    role_id: D$H5$4Q ? D$H5$4Q.role_id : '',
                    no_log: 1 //设置为1后就不在这个接口打log，交给logStartShare接口
                },
                success: function (res) {
                    console.log(v[1932]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callback && callback(data.data);
                        } else {
                            callbacks[v[374]] && callbacks[v[374]](1, {
                                errMsg: v[1933] + data.msg
                            });
                        }
                    } else {
                        callbacks[v[374]] && callbacks[v[374]](1, {
                            errMsg: v[1934]
                        });
                    }
                }
            });
        },

        updateShare: function (invite, invite_type, is_new, role_id, server_id, scene) {
            console.log(v[1935]);
            var sdk_token = wx.getStorageSync(v[1921]);
            wx.request({
                url: v[1916] + HOST + v[1936],
                method: v[225],
                dataType: v[1327],
                header: {
                    'content-type': v[417] // 默认值
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
                    console.log(v[1937] + JSON.stringify(res));
                }
            });
        },

        msgCheck2: function (content, callback) {
            console.log(v[1938], content);
            sdk.msgSecCheck(content).then(res => {
                console.log(v[1939], res);
                callback && callback(res);
            }).catch(err => {
                console.log(v[1913], err);
                callback && callback(res);
            });
        },

        msgCheck: function (content, callback) {
            console.log(v[1938], content);

            let ret_ata = {
                data: {}
            };

            var content = { scene: 4, content: content };

            sdk.msgSecCheck(content).then(res => {
                console.log(v[1940], res);

                if (res.code == 1) {

                    if (res.data.result.suggest == v[1941]) {

                        ret_ata.data.state = 1;
                        ret_ata.statusCode = 200;
                    } else {

                        ret_ata.data.state = 0;
                        ret_ata.statusCode = 200;
                    }
                } else {
                    ret_ata.data.state = 0;
                    ret_ata.statusCode = 0;
                }

                callback && callback(ret_ata);
            }).catch(err => {
                console.log(v[1913], err);
                ret_ata.data.state = 0;
                ret_ata.statusCode = 0;
                callback && callback(ret_ata);
            });
        },

        pay: function (data, callback) {
            this.startPay(data, callback);
        },

        //支付接口
        startPay: function (data, callback) {
            console.log(v[1942] + JSON.stringify(data));

            var self = this;
            callbacks[v[356]] = typeof callback == v[1082] ? callback : null;
            //先下单
            this_pay_order = 0;
            var sdk_token = wx.getStorageSync(v[1921]);
            var session_key = wx.getStorageSync(v[1923]);
            // console.log('sdk_token',sdk_token)
            if (!sdk_token) {
                callbacks[v[356]] && callbacks[v[356]](1, {
                    errMsg: v[1943]
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
            public_data[v[1944]] = JSON.stringify(order_data);

            //发起网络请求
            wx.request({
                url: v[1916] + HOST + v[1945],
                method: v[225],
                dataType: v[1327],
                header: {
                    'content-type': v[417] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(v[1946] + JSON.stringify(res));
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {

                            if (data.data.ext == '') {

                                const order = {
                                    server: order_data.serverid, //游戏区服，必填
                                    item: order_data.productname, //商品名称，必填
                                    item_id: order_data.productid, //商品ID，必填
                                    amount: order_data.price, //⾦额，单位元，必填
                                    cp_order_id: data.data.orderId, //CP订单号，必填
                                    role_id: order_data.roleid, //⻆⾊ID
                                    role_level: order_data.rolelevel, //⻆⾊等级
                                    role_name: order_data.rolename, //⻆⾊名称
                                    cp_extra_info: order_data.extension //订单额外信息
                                };

                                console.log(v[1947] + JSON.stringify(order));
                                sdk.createOrder(order).then(res => {

                                    console.log(v[1948], res);
                                }).catch(err => {
                                    console.log(v[1913], err);
                                });
                            } else {
                                var param = { ext1: data.data.ext, ext2: { pay_data: { orderId: data.data.orderId, amount: order_data.price } } };
                                console.log(v[1949], param);
                                // self.extDo(param);
                            }
                        } else {
                            callbacks[v[356]] && callbacks[v[356]](1, {
                                errMsg: data.msg
                            });
                        }
                    } else {
                        callbacks[v[261]] && callbacks[v[261]](1, {
                            errMsg: v[1924]
                        });
                    }
                }
            });
        },

        extDo: function (data) {
            wx.navigateToMiniProgram({
                appId: data.ext1,
                path: v[1950] + data.ext2.pay_data.orderId + v[1951] + data.ext2.pay_data.amount,
                extraData: {},
                envVersion: v[1952],
                success(res) {
                    // 打开成功
                }
            });
        },

        gameGoPay: function (cpData, androidData) {
            console.log(v[1953]);
            //请求pay接口
            var self = this;
            var session_key = wx.getStorageSync(v[1923]);
            wx.request({
                url: v[1916] + HOST + v[1954] + config.partner_id + '/' + config.game_pkg + '/',
                method: v[225],
                dataType: v[1327],
                header: {
                    'content-type': v[417] // 默认值
                },
                data: {
                    uid: partner_user_info.user_id,
                    open_id: partner_user_info.open_id,
                    user_create_time: wx.getStorageSync(v[1920]),
                    in_sandbox: androidData.sandbox,
                    cp_order_no: cpData.cpbill,
                    amount: cpData.price
                },
                success: function (res) {
                    console.log(v[1955]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        if (res.data.state == 1) {
                            var ret = {};
                            callbacks[v[356]] && callbacks[v[356]](0, ret);
                        } else {
                            callbacks[v[356]] && callbacks[v[356]](1, { errMsg: v[1956] });
                        }
                    }
                },
                fail: function () {}
            });
        },

        //创建角色
        logCreateRole: function (data) {
            var uid = wx.getStorageSync(v[1919]);
            var username = wx.getStorageSync(v[1922]);

            var postData = {};
            postData[v[1957]] = uid;
            postData[v[1958]] = username;
            postData[v[1959]] = data.roleid;
            postData[v[1960]] = data.rolelevel;
            postData[v[1961]] = data.rolename;
            postData[v[24]] = data.serverid;

            console.log(v[1962], postData);
            if (data.roleid && data.serverid) {
                D$H5$4Q = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(v[498], postData);
            var time = Date.parse(new Date()).toString();
            time = time.substr(0, 10);
            sdk.updateRole({
                'id': data.roleid,
                'name': data.rolename,
                'level': data.rolelevel,
                'server': data.serverid
            });
        },

        //进入游戏
        logEnterGame: function (data) {
            var uid = wx.getStorageSync(v[1919]);
            var username = wx.getStorageSync(v[1922]);

            var postData = {};
            postData[v[1957]] = uid;
            postData[v[1958]] = username;
            postData[v[1959]] = data.roleid;
            postData[v[1960]] = data.rolelevel;
            postData[v[1961]] = data.rolename;
            postData[v[24]] = data.serverid;

            if (data.roleid && data.serverid) {
                D$H5$4Q = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(v[1963], postData);

            //进入游戏确认邀请成功
            if (D$H$Q45) {
                this.updateShare(D$H$Q45.invite, D$H$Q45.invite_type, D$H$Q45.is_new, data.roleid, data.serverid, D$H$Q45.scene);
            }
        },

        //角色升级
        logRoleUpLevel: function (data) {
            var uid = wx.getStorageSync(v[1919]);
            var username = wx.getStorageSync(v[1922]);

            var postData = {};
            postData[v[1957]] = uid;
            postData[v[1958]] = username;
            postData[v[1959]] = data.roleid;
            postData[v[1960]] = data.rolelevel;
            postData[v[1961]] = data.rolename;
            postData[v[24]] = data.serverid;

            if (data.roleid && data.serverid) {
                D$H5$4Q = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(v[1964], postData);

            sdk.updateRole({
                'id': data.roleid,
                'name': data.rolename,
                'level': data.rolelevel,
                'server': data.serverid
            });
        },

        //获取唯一设备码（自定义）
        uuid: function (radix, len) {
            var chars = v[1965].split('');
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
            var uuid = wx.getStorageSync(v[1902]);
            var idfv = wx.getStorageSync(v[1903]);
            var ad_code = wx.getStorageSync(v[1904]);

            return {
                game_id: config.game_id,
                game_pkg: config.game_pkg,
                partner_id: config.partner_id,
                partner_label: config.partner_label,
                ad_code: ad_code,
                uuid: uuid,
                idfv: idfv,
                mac: v[1966],
                is_from_min: 1,
                dname: sysInfo.model,
                net_type: sysInfo.wifiSignal == 0 ? '4G' : v[1967],
                os_ver: sysInfo.system,
                sdk_ver: sysInfo.version, //存放的是微信版本号
                game_ver: config.game_ver, //存放的是SDK版本号
                device: sysInfo.platform == v[111] ? 1 : 2
            };
        },

        subscribeMessage: function (tmplIds, callback) {
            console.log(v[1968] + tmplIds);
            //获取模板ID
            callbacks[v[385]] = typeof callback == v[1082] ? callback : null;
            wx.requestSubscribeMessage({
                tmplIds: tmplIds,
                success(res) {
                    console.log(v[1969]);
                    console.log(res);
                    callbacks[v[385]] && callbacks[v[385]](res);
                },
                fail(res) {
                    console.log(v[1970]);
                    console.log(res);
                    callbacks[v[385]] && callbacks[v[385]](res);
                }
            });
        },

        //统一发送log
        log: function (type, data) {
            var public_data = this.getPublicData();
            for (var key in data) {
                public_data[key] = data[key];
            }

            console.log(v[1971] + type);
            console.log(public_data);

            wx.request({
                url: v[1916] + HOST + v[1972] + type + v[1973] + encodeURIComponent(JSON.stringify(public_data))
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

        reportStart: function () {
            JYSDK.sendLoadingLog(v[1905]);
        },
        reportEnd: function () {
            JYSDDK.sendLoadingLog(v[1274]);
        },

        // 设置 wx.shareMessageToFriend 接口 query 字段的值
        setMessageToFriendQuery: function (data, callback) {
            var cp_activity_id = data.activity_id;
            var result = wx.setMessageToFriendQuery({ shareMessageToFriendScene: cp_activity_id });

            callback(result);
        }

    };
}

function run(method, data, callback) {
    method in D$H5$Q4 && D$H5$Q4[method](data, callback);
}

exports.init = function (data, callback) {
    run(v[238], data, callback);
};

exports.subscribeMessage = function (data, callback) {
    run(v[385], data, callback);
};

exports.login = function (callback) {
    run(v[261], '', callback);
};

exports.login = function (callback) {
    run(v[261], '', callback);
};

exports.pay = function (data, callback) {
    run(v[356], data, callback);
};

exports.openService = function () {
    run(v[375]);
};

exports.logCreateRole = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(v[369], data);
};

exports.logEnterGame = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };

    run(v[371], data);
};

exports.logRoleUpLevel = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(v[373], data);
};

exports.share = function (type) {
    var data = {
        type: type
    };
    run(v[374], data);
};

exports.msgCheck = function (data, callback) {
    run(v[201], data, callback);
};

exports.downloadClient = function () {
    run(v[1974]);
};

exports.getConfig = function () {
    return {
        game_id: config.game_id,
        game_pkg: config.game_pkg,
        partner_id: config.partner_id
    };
};

exports.getPublicData = function () {
    run(v[1975]);
};

exports.weiduanHelper = function () {
    run(v[377]);
};

exports.reportStart = function () {
    run(v[1976]);
};

exports.reportEnd = function () {
    run(v[1977]);
};

exports.setMessageToFriendQuery = function (data, callback) {
    run(v[1978], data, callback);
};