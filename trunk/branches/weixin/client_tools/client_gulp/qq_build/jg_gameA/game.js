console.info("0 进入游戏包");

var canvas = qq.wx_canvas = (qq.wx_canvas || qq.createCanvas()); 
var gl = qq.wx_gl = canvas.getContext('webgl');

import "./md5.min.js";

qq.ShowReportTips = true;
import AKSDK from "./sdk/qq_aksdk.js";
qq.AKSDK = AKSDK;

var PF_INFO = qq.PF_INFO = {};
PF_INFO.base_cdn = "https://cdn-tjqy.shzbkj.com/weixin_0/";
PF_INFO.cdn = "https://cdn-tjqy.shzbkj.com/weixin_0/";
PF_INFO.pay_infos = {}
PF_INFO.package = "0";
PF_INFO.version = qq.sdk_config.game_ver;
PF_INFO.mac = "";
PF_INFO.os = "1";
PF_INFO.sdk_name = "9130";
PF_INFO.apiurl = "https://api-tjqytest.shzbkj.com";
PF_INFO.logurl = "https://log-tjqytest.shzbkj.com";
PF_INFO.payurl = "https://pay-tjqytest.shzbkj.com";
PF_INFO.apikey = "MQx0mYlUWO5XYKvgAIPKWgK1w722GKih";
PF_INFO.partnerId = "1";
PF_INFO.pkgName = "";
PF_INFO.device_id = "";
PF_INFO.from_scene = 0;
PF_INFO.serverList = {};
PF_INFO.channelNum = parseInt(PF_INFO.partnerId);
PF_INFO.channel = PF_INFO.partnerId;
PF_INFO.selectedServer = {};

PF_INFO.clientlog = "https://jgcenter.sh9130.com/clientlog/";
PF_INFO.showLogo = false;
PF_INFO.debugUsers = "39927500|58163716|74597555";
PF_INFO.tick = Date.now();
PF_INFO.loadServer = false;
PF_INFO.loadLibs = false;

PF_INFO.configType = "_weixin";
PF_INFO.exposeType = "_a";
PF_INFO.loadingType = 101;
PF_INFO.lastVersion = 1985;
PF_INFO.wxVersion = PF_INFO.version;
PF_INFO.wxShield = false;
PF_INFO.wxIOS = false;
PF_INFO.wxAndroid = false;
PF_INFO.wxPC = false;

var wh = canvas.width;
var th = canvas.height;
var y = wh/(720.0*2.0)-th/(1559.0*2.0);

var VSHADER_SOURCE =
    'attribute vec4 a_Position;\n' +
    'attribute vec2 a_TexCoord;\n' +
    'uniform float u_Index;\n' +
    'varying vec2 v_TexCoord;\n' +
    'void main() {\n' +
    '  gl_Position = vec4(a_Position.x * u_Index, a_Position.y * u_Index, a_Position.z, a_Position.w);\n' +
    '  v_TexCoord = a_TexCoord;\n' +
    '}\n';

// Fragment shader program 
var FSHADER_SOURCE =
    'precision mediump float;\n' +
    'uniform sampler2D u_Sampler;\n' +
    'varying vec2 v_TexCoord;\n' +
    'void main() {\n' +
    '  gl_FragColor = texture2D(u_Sampler, v_TexCoord);\n' +
    '}\n';
 
var verts = new Float32Array([
    -1.0, -1.0,     0.0, 1.0-y,
     1.0, -1.0,     1.0, 1.0-y,
    -1.0,  1.0,     0.0, 0.0+y,
     1.0,  1.0,     1.0, 0.0+y
]);
gl.clearColor(1.0, 1.0, 1.0, 1.0);
gl.clear(gl.COLOR_BUFFER_BIT);
gl.viewport(0, 0, canvas.width, canvas.height);
var vrtShader = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(vrtShader, VSHADER_SOURCE);
gl.compileShader(vrtShader);
var fraShader = gl.createShader(gl.FRAGMENT_SHADER);
gl.shaderSource(fraShader, FSHADER_SOURCE);
gl.compileShader(fraShader);

var shaderProgram = gl.createProgram();
gl.attachShader(shaderProgram, vrtShader);
gl.attachShader(shaderProgram, fraShader);
gl.linkProgram(shaderProgram);
gl.useProgram(shaderProgram);

var index = 0;
var u_Index = gl.getUniformLocation(shaderProgram, 'u_Index');

var buffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
gl.bufferData(gl.ARRAY_BUFFER, verts, gl.STATIC_DRAW);
var a_Position = gl.getAttribLocation(shaderProgram, 'a_Position');
var fsize = 4;
gl.vertexAttribPointer(a_Position, 2, gl.FLOAT, false, fsize * 4, 0);
gl.enableVertexAttribArray(a_Position);

var a_TexCoord = gl.getAttribLocation(shaderProgram, 'a_TexCoord');
gl.vertexAttribPointer(a_TexCoord, 2, gl.FLOAT, false, fsize * 4, fsize * 2);
gl.enableVertexAttribArray(a_TexCoord);
gl.clearColor(1.0, 1.0, 1.0, 1.0);

var texture;
var image = qq.createImage();
image.onload = function() {
    texture = gl.createTexture();
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, texture); 
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, image);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
}
image.src = "wxlogin_atlas/image_login_init.jpg";

console.info("1 加载游戏 "+canvas.width+","+canvas.height);

function render() {
    if (texture) {
        index=10;
        gl.uniform1f(u_Index, (index>=10 ? 1.0 : (index/10.0)));
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    }
}
render();
qq.loadingInterval = setInterval(function(){
    render();
}, 16);

//监听小游戏切前台事件
qq.onShow(function (res) {
    qq.wx_onShowData = res;
    if (qq.wx_onShowCallback && qq.wx_onShowData) {
        console.info("小游戏切前台事件，场景值："+qq.wx_onShowData.scene);
        qq.wx_onShowCallback(qq.wx_onShowData);
        qq.wx_onShowData = null;
    }
})


// 版本更新相关，基础库 1.9.90 开始支持
var updateManager = qq.getUpdateManager();
updateManager.onCheckForUpdate(function (res) {
  console.log("是否有新版本："+ res.hasUpdate);
})
updateManager.onUpdateReady(function () {
  qq.showModal({
    title: '更新提示',
    content: '新版本已经准备好，是否重启应用？',
    showCancel : false, // 加了取消按钮后，实际不会触发更新
    success: function (res) {
      // if (res.confirm) { // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
        updateManager.applyUpdate();
      // } else if (res.cancel) {
      //   console.log('用户点击取消')
      // }
    }
  })
})
updateManager.onUpdateFailed(function () {
  console.log('新版本下载失败 ')
})

//获取系统信息
var systemInfo = "";
qq.getSystemInfo({
  success (res) {
    systemInfo = "品牌："+res.brand+"，型号："+res.model+"，QQ版本号："+res.version+"，系统及版本："+res.system+"，客户端平台："+res.platform+"，基础库版本："+res.SDKVersion+"，设备性能等级："+res.benchmarkLevel;
    console.log(systemInfo);
    console.log("设备像素比："+res.pixelRatio+"，屏幕宽度："+res.screenWidth+"，屏幕高度："+res.screenHeight+"，可使用窗口宽度："+res.windowWidth+"，可使用窗口高度："+res.windowHeight+"，状态栏的高度："+res.statusBarHeight+"，安全区域："+(res.safeArea?(res.safeArea.top+","+res.safeArea.bottom+","+res.safeArea.left+","+res.safeArea.right):""));

    var system = (res.system ? res.system.toLowerCase() : "");
    var model = (res.model ? res.model.toLowerCase().replace(" ", "") : "");
    PF_INFO.wxIOS = system.indexOf("ios") != -1;
    PF_INFO.wxAndroid = system.indexOf("android") != -1;
    PF_INFO.wxPhone = system.indexOf("ios") != -1 || system.indexOf("android") != -1;
    PF_INFO.wxPC = system.indexOf("windows") != -1 || system.indexOf("mac") != -1;
    PF_INFO.wxPlatform = (res.platform ? res.platform.toLowerCase() : "");
    PF_INFO.wxLimitLoad = false; //model.indexOf("iphonex") != -1;
    PF_INFO.wxBenchmarkLevel = 2;
    if (system.indexOf("android") != -1) { //android按设备等级
      if (res.benchmarkLevel >= 24) 
        PF_INFO.wxBenchmarkLevel = 3;
      else 
        PF_INFO.wxBenchmarkLevel = 2;
    } else if (system.indexOf("ios") != -1) { //ios按型号
      if(res.benchmarkLevel && res.benchmarkLevel >= 20)
        PF_INFO.wxBenchmarkLevel = 3;
      else if (model.indexOf("iphone5") != -1 || model.indexOf("iphone6") != -1 || model.indexOf("iphone7") != -1 
        || model.indexOf("iphonese") != -1 || model.indexOf("ipad") != -1) 
        PF_INFO.wxBenchmarkLevel = 2;
      else 
        PF_INFO.wxBenchmarkLevel = 3;
    } else { //PC
      PF_INFO.wxBenchmarkLevel = 2;
    }
    console.log("加载限制："+ PF_INFO.wxLimitLoad +"，设备限制等级："+ PF_INFO.wxBenchmarkLevel);
  }
})



var WX_MAIN = qq.WX_MAIN = qqmain();

function qqmain() {
    return {
        isShowLoading: false,
        wxShowLoading: function(value) {
            WX_MAIN.isShowLoading = true;
            qq.showLoading(value);
        },
        wxHideLoading: function() {
            if (WX_MAIN.isShowLoading) {
                WX_MAIN.isShowLoading = false;
                qq.hideLoading({});
            }
        },

        alert: function(value) {
            console.log("alert", value);
            qq.hideLoading({});
            qq.showModal({
                title: '提示',
                content: value,
                success(res) {
                    if (res.confirm) {
                        console.log('用户点击确定')
                    } else if (res.cancel) {
                        console.log('用户点击取消')
                    }
                }
            })
        },
        loginAlert: function(value) {
            console.log("loginAlert", value);
            qq.hideLoading({});
            qq.showModal({
                title: '提示',
                content: value,
                confirmText: "重试",
                cancelText: "退出",
                success(res) {
                    if (res.confirm) {
                        WX_MAIN.sdkInit();
                    } else if (res.cancel) {
                        console.log("退出游戏");
                        qq.exitMiniProgram({});
                    }
                }
            })
        },
        exitAlert: function(value) {
            console.log("exitAlert", value);
            qq.showModal({
                title: '提示',
                content: value,
                confirmText: "重登",
                showCancel : false,
                complete(res) {
                    console.log("退出游戏");
                    qq.exitMiniProgram({});
                }
            })
        },
        
        onApiError: function(str) {
            // console.log('on api error');
            // AKSDK.logout(function(){});
            WX_MAIN.loginAlert('on api error');
            var info = {
                id: PF_INFO.roleId,
                role: PF_INFO.roleName,
                level: PF_INFO.roleLevel,
                account: PF_INFO.account,
                version: PF_INFO.lastVersion,
                cdn: PF_INFO.cdn,
                pkgName: PF_INFO.pkgName,
                gamever: PF_INFO.version,
                serverid: (PF_INFO.selectedServer ? PF_INFO.selectedServer.server_id : 0),
                systemInfo: systemInfo,
                error: "onApiError",
                stack: str ? str : "on api error",
            }
            var infostr = JSON.stringify(info);
            console.error("API错误："+ infostr);
            WX_MAIN.clientlog(infostr);
        },
        clientlog: function(info) {
            if (PF_INFO.wxPlatform == "devtools") return;
            var url = PF_INFO.clientlog + "?account=" + PF_INFO.account;
            qq.request({
                url: url,
                method: "POST",
                data: info,
                header: {
                "content-type": "application/json",
                "cache-control": "no-cache"
                },
                success: function(res) {
                DEBUG && console.log("clientlog:", url, info, res);
                },
                fail: function(res) {
                DEBUG && console.log("clientlog:", url, info, res);
                },
                complete: function() {}
            })
        },
        // 错误警报
        toErrorAlarm: function (type, info) {
            WX_MAIN.sendApi(PF_INFO.logurl, 'log.client_error', {
            'game_pkg': PF_INFO.pkgName,
            'partner_id': PF_INFO.partnerId,
            'server_id': (PF_INFO.selectedServer&&PF_INFO.selectedServer.server_id>0 ? PF_INFO.selectedServer.server_id : 0),
            'uid': (PF_INFO.account > 0 ? PF_INFO.account : 0),
            'type': type,
            'info': info,
            }) 
        },
        reqRecordError: function(str) {
            var info = JSON.parse(str);
            info.gamever = PF_INFO.wxVersion;
            info.serverid = (PF_INFO.selectedServer ? PF_INFO.selectedServer.server_id : 0);
            info.systemInfo = systemInfo;
            var infostr = JSON.stringify(info);
            console.error("上报错误："+ infostr);
            WX_MAIN.clientlog(infostr);
        },
        reqRecordInfo: function(error, stack) {
            var info = {
                id: PF_INFO.roleId,
                role: PF_INFO.roleName,
                level: PF_INFO.roleLevel,
                account: PF_INFO.account,
                version: PF_INFO.lastVersion,
                cdn: PF_INFO.cdn,
                pkgName: PF_INFO.pkgName,
                gamever: PF_INFO.wxVersion,
                serverid: (PF_INFO.selectedServer ? PF_INFO.selectedServer.server_id : 0),
                systemInfo: systemInfo,
                error: error,
                stack: stack,
            }
            var infostr = JSON.stringify(info);
            console.warn("上报信息："+ infostr);
            WX_MAIN.clientlog(infostr);
        },

        send: function(url, data, callBack, retryAmount, errorCB, checkSuccess, reqType, contentType) {
            if (retryAmount == undefined) {
                retryAmount = 1;
            }

            qq.request({
                url: url,
                method: reqType || "GET",
                responseType: "text",
                data: data,
                header: {
                    "content-type": contentType || 'application/json',
                    "cache-control": "no-cache"
                },
                success: function(res) {
                    console.log("send.success:", url, data, res);
                    if (res && (res.statusCode == 200 || res.statusCode == 301)) {
                        var response = res.data;
                        if (!checkSuccess || checkSuccess(response, res, url)) {
                            if (callBack) {
                                callBack(response);
                            }
                        } else {
                            console.info(url);
                            console.error(response);
                            if (retryAmount - 1 > 0) {
                                setTimeout(function() {
                                    WX_MAIN.send(url, data, callBack, retryAmount - 1, errorCB, checkSuccess);
                                }, 1000);
                            } else {
                                if (errorCB) {
                                    errorCB(JSON.stringify({
                                        url: url,
                                        response: res
                                    }));
                                }
                            }
                        }
                    }
                },
                fail: function(res) {
                    console.log("send.fail:", url, data, res);
                    if (retryAmount - 1 > 0) {
                        setTimeout(function() {
                            WX_MAIN.send(url, data, callBack, retryAmount - 1, errorCB, checkSuccess);
                        }, 1000);
                    } else {
                        if (errorCB) {
                            errorCB(JSON.stringify({
                                url: url,
                                response: res
                            }));
                        }
                    }
                },
                complete: function() {}
            })
        },
        sendApi: function(apiurl, method, param, callBack, retryAmount, errorCB, checkSuccess) {
            if (!param) {
                param = {};
            }

            var now = Math.floor(Date.now() / 1000);
            param['time'] = now;
            param['method'] = method;

            var sortKeys = Object.keys(param).sort();
            var md5Str = '';
            var reqStr = '';
            for (var i = 0; i < sortKeys.length; i++) {
                md5Str = md5Str + (i == 0 ? '' : '&') + sortKeys[i] + param[sortKeys[i]];
                reqStr = reqStr + (i == 0 ? '' : '&') + sortKeys[i] + '=' + encodeURIComponent(param[sortKeys[i]]);
            }
            md5Str = md5Str + PF_INFO.apikey;

            var extendParam = 'sign=' + qq.wx_md5(md5Str);

            WX_MAIN.send(apiurl + '?' + reqStr + (reqStr == '' ? '' : '&') + extendParam, null, callBack, retryAmount, errorCB, checkSuccess || function(response) {
                return response && response.state == 'success';
            }, null, 'application/x-www-form-urlencoded');
        },

        stepMap: {
            3: 1,  //白屏（SDK的login接口返回，开始请求User.login）
            22: 2, //后台登录成功（后台User.login接口返回，开始加载Libs库分包）
            23: 3, //Libs库分包加载成功（Main分包开始加载、开始请求默认服务器，两个同步进行）
            25: 4, //Main分包开始加载
            27: 5, //开始请求默认服务器
            24: 6, //请求默认服务器成功（后台Server.defaultServer接口返回，开始开始验证角色）
            28: 7, //开始验证角色
            29: 8, //验证角色成功（后台User.checkInfo接口返回）
            26: 9, //Main分包加载成功
            1: 10,  //开始加载类库
            2: 11,  //所有类库加载完成
            4: 12,  //开始加载配置文件
            5: 13,  //开始连接服务器
            6: 14,  //服务器连接成功
            8: 15,  //创角跳转
            10: 16, //开始创角
            11: 17, //创角成功
            7:  18, //登录成功
            12: 19, //开始进入场景
            13: 20, //开始加载通用资源
            14: 21, //通用资源加载完成
            15: 22, //进入场景
        },
        onRoleRecordStep: function(step, role_id) {
            var serverTmpId = 0;
            if (PF_INFO.selectedServer) {
                serverTmpId = PF_INFO.selectedServer.server_id;
            }
            WX_MAIN.sendApi(PF_INFO.logurl, 'UserLog.reportUidStep', {
                'partnerId': PF_INFO.partnerId,
                'gamePkg': PF_INFO.pkgName,
                'logTime': Math.floor(Date.now() / 1000),
                'platformUid': PF_INFO.platform_uid,
                'type': step,
                'serverId': serverTmpId,
            }, null, 2, null, function() { return true; });

            if (WX_MAIN.stepMap[step]) {
                AKSDK.reportAnalytics(WX_MAIN.stepMap[step]);

                // 渠道 openid上报
                if (WX_MAIN.stepMap[step] == 14) 
                AladinSDK.reportOpenId(qq.sdk_partner_user_info.openid);
            }
        },

        //比较版本号
        compareVersion: function(v1, v2) {
            if (!v1 || !v2) return 0;
            v1 = v1.split('.'); v2 = v2.split('.');
            const len = Math.max(v1.length, v2.length);
            while (v1.length < len) {
                v1.push('0');
            }
            while (v2.length < len) {
                v2.push('0');
            }
            for (var i = 0; i < len; i++) {
                const num1 = parseInt(v1[i]), num2 = parseInt(v2[i]);
                if (num1 > num2) return 1;
                else if (num1 < num2) return -1;
            }
            return 0;
        },
        //符合版本号
        isMatchSDKVersion: function(v) {
            if (WX_MAIN.compareVersion(WX_MAIN.SDKVersion, v) >= 0) {
                return true;
            } else {
                qq.showModal({
                    title: '提示',
                    content: '当前QQ版本过低，无法使用该功能，请升级到最新QQ版本后重试。'
                })
                return false;
            }
        },

        guild: function() {
            function S4() {
                return (((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1));
            }
            return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "+" + S4() + S4() + S4());
        },
        /*sdk初始化*/
        sdkInit: function() {
            console.log("#SDK 初始化：");

            var cfg = AKSDK.getConfig();
            PF_INFO.channel = cfg.partner_id;
            PF_INFO.channelNum = cfg.partner_id;
            PF_INFO.partnerId = cfg.partner_id;
            PF_INFO.pkgName = cfg.game_pkg;
            var initData = {
                game_ver: PF_INFO.version
            };
            PF_INFO.device_id = WX_MAIN.guild();

            WX_MAIN.wxShowLoading({ title: '正在初始化' });
            AKSDK.init(initData, WX_MAIN.sdkOnInited.bind(WX_MAIN));
        },
        /*sdk初始化回调*/
        sdkOnInited: function(res) {
            var develop = res.develop;
            console.log("#初始化成功   提审状态:"+ develop +"   是否提审:"+ (develop == 1) +"   提审版本号:"+res.game_ver +"   当前版本号:"+PF_INFO.wxVersion); 
            if (!res.game_ver || WX_MAIN.compareVersion(PF_INFO.wxVersion, res.game_ver) < 0) {  //当前版本 < 后台版本   
                console.log("#正式版=============================");
                PF_INFO.apiurl = "https://api-tjqy.shzbkj.com";    //正式服（线上版本）
                PF_INFO.logurl = "https://log-tjqy.shzbkj.com";
                PF_INFO.payurl = "https://pay-tjqy.shzbkj.com";
                PF_INFO.cdn = "https://cdn-tjqy.shzbkj.com/weixin_1/";
                PF_INFO.spareCdn = "https://cdn-tjqy-ali.shzbkj.com/weixin_1/";
                PF_INFO.version_name = "qqmd";
                PF_INFO.wxShield = false;
            } else if (WX_MAIN.compareVersion(PF_INFO.wxVersion, res.game_ver) == 0){  //当前版本 == 后台版本
                console.log("#审核版=============================");
                PF_INFO.apiurl = "https://api-tjqytest.shzbkj.com";    //测试服（审核版本）
                PF_INFO.logurl = "https://log-tjqytest.shzbkj.com";
                PF_INFO.payurl = "https://pay-tjqytest.shzbkj.com";
                PF_INFO.cdn = "https://cdn-tjqy.shzbkj.com/weixin_0/";
                PF_INFO.spareCdn = "https://cdn-tjqy-ali.shzbkj.com/weixin_1/";
                PF_INFO.version_name = "weixin";
                PF_INFO.wxShield = true;                          //屏蔽活动
            } else {
                console.log("#开发版=============================");
                PF_INFO.apiurl = "https://api-tjqytest.shzbkj.com";    //测试服（开发版本）
                PF_INFO.logurl = "https://log-tjqytest.shzbkj.com";
                PF_INFO.payurl = "https://pay-tjqytest.shzbkj.com";
                PF_INFO.cdn = "https://cdn-tjqy.shzbkj.com/weixin_0/";
                PF_INFO.spareCdn = "https://cdn-tjqy-ali.shzbkj.com/weixin_1/";
                PF_INFO.version_name = "weixin";
                PF_INFO.wxShield = false;
            }
            PF_INFO.from_scene = qq.sdk_config.from_scene;

            WX_MAIN.sdkLoginRetry = 5;
            WX_MAIN.wxShowLoading({ title: '正在登录账号' });
            AKSDK.login(WX_MAIN.sdkOnLogin.bind(WX_MAIN));
        },
        apiRetryAmount: 5,
        sdkLoginRetry: 5,
        /*sdk登录回调*/
        sdkOnLogin: function(status, data) {
            // 打点启动
            AKSDK.reportAnalytics(1);

            if (status == 0 && data && data.token) {
                PF_INFO.sdk_token = data.token;
                PF_INFO.wx_channel = data.wx_channel;
                WX_MAIN.wxShowLoading({ title: '正在验证账号' });
                WX_MAIN.sendApi(PF_INFO.apiurl, 'User.login', {
                    'platform': PF_INFO.sdk_name,
                    'partner_id': PF_INFO.partnerId,
                    'token': data.token,
                    'game_pkg': PF_INFO.pkgName,
                    'deviceId': PF_INFO.device_id,
                    'scene': 'QQ_'+ PF_INFO.from_scene,
                }, WX_MAIN.onUserLogin.bind(WX_MAIN), WX_MAIN.apiRetryAmount, WX_MAIN.onApiError.bind(WX_MAIN));
            } else {
                if (data && data.errMsg && WX_MAIN.sdkLoginRetry > 0 && (
                data.errMsg.indexOf("fail interrupted") != -1 || 
                data.errMsg.indexOf("network api interrupted") != -1 || 
                data.errMsg.indexOf("Network Error") != -1 || 
                data.errMsg.indexOf("ERR_TIMED_OUT") != -1 || 
                data.errMsg.indexOf("ERR_CONNECTION_ABORTED") != -1 || 
                data.errMsg.indexOf("ERR_CONNECTION_RESET") != -1)) { //可以自动重试的失败  network api interrupted in suspend state(小程序退后台之后发起网络请求)
                    WX_MAIN.sdkLoginRetry--;
                    AKSDK.login(WX_MAIN.sdkOnLogin.bind(WX_MAIN));
                } else {
                    WX_MAIN.toErrorAlarm(1, "AKSDK.login fail: status="+status+",errMsg="+(data ? data.errMsg : ""));
                    WX_MAIN.reqRecordInfo("sdkOnLoginError", JSON.stringify({ status: status, data: data }));
                    WX_MAIN.loginAlert("登录/注册失败" + (data&&data.errMsg ? "，"+data.errMsg : ""));
                }
            }
        },
        onUserLogin: function (response) {
            if (!response) {
                WX_MAIN.toErrorAlarm(2, "User.login fail: response is null");
                WX_MAIN.reqRecordInfo("userLoginError", "response is null");
                WX_MAIN.loginAlert('User.login failed');
                return;
            }
            if (response.state != 'success') {
                WX_MAIN.toErrorAlarm(2, "User.login fail: state="+response.state);
                WX_MAIN.reqRecordInfo("userLoginError", JSON.stringify(response));
                WX_MAIN.loginAlert('User.login failed: ' + response.state);
                return;
            }
            if (response.ban_state == 1) {
                window.loginAlert("账号已被封禁！");
                return;
            }

            PF_INFO.userId = String(response.account);
            PF_INFO.account = String(response.account);
            PF_INFO.platform = String(response.platform);
            PF_INFO.channel = String(response.platform);
            PF_INFO.platform_uid = String(response.platform_uid);
            PF_INFO.php_sign = String(response.sign);
            PF_INFO.php_signtime = String(response.time);
            PF_INFO.sign = ''; // TODO

            WX_MAIN.onRoleRecordStep(22);
            WX_MAIN.getServers();
        },

        getServers: function() {
            WX_MAIN.onRoleRecordStep(27);
            WX_MAIN.wxShowLoading({ title: '请求服务器' });
            var lastSerStr = localStorage.getItem("LastSer_" + PF_INFO.pkgName + PF_INFO.account);
            if (lastSerStr && lastSerStr != "") {
                var lastSerId = Number(lastSerStr);
                WX_MAIN.getCheckServers(lastSerId);
            } else {
                WX_MAIN.getDefaultServers();
            }
        },
        getDefaultServers: function () {
            WX_MAIN.sendApi(PF_INFO.apiurl, 'Server.defaultServer', {
                'partner_id': PF_INFO.partnerId,
                'uid': PF_INFO.account,
                'version': PF_INFO.version,
                'game_pkg': PF_INFO.pkgName,
                'device': PF_INFO.device_id,
            }, WX_MAIN.onUserLoginDefaultServers.bind(WX_MAIN), WX_MAIN.apiRetryAmount, WX_MAIN.onApiError.bind(WX_MAIN));
        },
        onUserLoginDefaultServers: function(response) {
            if (!response) {
                WX_MAIN.toErrorAlarm(3, 'Server.defaultServer failed');
                WX_MAIN.loginAlert('Server.defaultServer failed');
                return;
            }
            if (response.state != 'success') {
                WX_MAIN.toErrorAlarm(3, 'Server.defaultServer failed: ' + response.state);
                WX_MAIN.loginAlert('Server.defaultServer failed: ' + response.state);
                return;
            }
            if (!response.data || response.data.length == 0) {
                WX_MAIN.toErrorAlarm(3, 'Server.defaultServer failed: data null');
                WX_MAIN.loginAlert('服务器尚未开启');
                return;
            }
            WX_MAIN.updCurServer(response);
        },
        getCheckServers: function (lastSerId) {
            WX_MAIN.sendApi(PF_INFO.apiurl, 'Server.check_server', {
                'server_id': lastSerId,
                'time': Date.now() / 1000,
            }, WX_MAIN.onUserLoginCheckServers.bind(WX_MAIN), WX_MAIN.apiRetryAmount, WX_MAIN.onApiError.bind(WX_MAIN));
        },
        onUserLoginCheckServers: function(response) {
            if (!response) {
                WX_MAIN.toErrorAlarm(4, 'Server.check_server failed');
                WX_MAIN.getDefaultServers();
                return;
            }
            if (response.state != 'success') {
                WX_MAIN.toErrorAlarm(4, 'Server.check_server failed: ' + response.state);
                WX_MAIN.getDefaultServers();
                return;
            }
            if (!response.data || response.data.length == 0) {
                WX_MAIN.toErrorAlarm(4, 'Server.check_server failed: data null');
                WX_MAIN.getDefaultServers();
                return;
            }
            WX_MAIN.updCurServer(response);
        },
        updCurServer: function(response) {
            WX_MAIN.onRoleRecordStep(24);
            PF_INFO.newRegister = response.is_new != undefined ? response.is_new : 0;
            PF_INFO.selectedServer = {
                'server_id': String(response.data[0].server_id),
                'server_name': String(response.data[0].server_name),
                'entry_ip': response.data[0].entry_ip,
                'entry_port': parseInt(response.data[0].entry_port),
                'status': WX_MAIN.get_status(response.data[0]),
                'start_time': response.data[0].start_time,
                'maintain_time': response.data[0].maintain_time ? response.data[0].maintain_time : "",
                'is_recommend': response.data[0].is_recommend,
                'cdn': PF_INFO.cdn,
            }
            
            PF_INFO.loadServer = true;
            if (PF_INFO.loadServer && PF_INFO.loadLibs) {
                qq.initComplete();
            } else {
                WX_MAIN.wxShowLoading({ title: '正在加载分包' });
            }
        },
        get_status: function(server) {
            if (server) {
                if (server.status == 1) {
                    if (server.online_status == 3) {
                        return 3;
                    } else if (server.online_status == 1) {
                        return 2;
                    } else {
                        return 1;
                    }
                } else if (server.status == 0) {
                    return 0;
                } else {
                    return -1;
                }
            }
            return -1;
        },

        loadLibs: function() {
            console.log("libs 分包加载");
            var loadLibsTask = qq.loadSubpackage({
                name: 'libs',
                success: function(res) {
                    console.log("libs 分包加载成功");
                    console.log(res);
                    WX_MAIN.onRoleRecordStep(23);
                    PF_INFO.loadLibs = true;
                    if (PF_INFO.loadServer && PF_INFO.loadLibs) {
                        qq.initComplete();
                    }
                    qq.loadGameSubpackages();
                },
                fail: function(res) {
                    console.log("libs 分包加载失败");
                    console.log(res);
                    setTimeout(function() {
                        WX_MAIN.loadLibs();
                    }, 500);
                },
            });
            loadLibsTask && loadLibsTask.onProgressUpdate(res => {
            });
        }
    }
}
qq.onHide(function(){
  console.info("小游戏进入后台");
  if (qq.onHideCallBack) {
    qq.onHideCallBack();
}
});
WX_MAIN.sdkInit();
WX_MAIN.loadLibs();