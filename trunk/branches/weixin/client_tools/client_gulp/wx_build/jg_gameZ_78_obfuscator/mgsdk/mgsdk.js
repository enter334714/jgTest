var s1 = wx.l$;
var channelSDK;
try {
    channelSDK = require('../channelWF/channel.js').default;
    console.log(channelSDK, 'test');
} catch (e) {
    console.log('[魔光] not found file "channel.js"');
}
// 20220519
var version = '20220519';
console.log(version, '[sdk版本]');
export default class MGSDK {
    constructor() {
        this.systemArgs = {
            sdkHost: "https://sdk.17a.cn",
            assHost: 'https://sdk.17a.cn/wechat/turnport',
            extra_data: {
                os: '',
                deviceid: this.getUUID(),
                gameversion: ''
            },
            payos: "",
            appkey: "",
            appid: '',
            channelid: '',
            access_token: '',
            userid: '',
            cuid: '',
            session_key: '',
            openid: '',
            login_code: '',
            query: {
                ldid: ''
            },
            click_id: '',
            is_wx_share: 0,
            time: Math.round(new Date().getTime() / 1000),
            paytype: 0,
            initFlag: false,
            postfix: '',
            merchantid: 0,
            turn_port_url: '',
            isChannel: false,
            initRes: {
                constRealName: '',
                realName: ''
            },
            weChatConfig: {
                jump_appid: "",
                jump_type: 0
            }
        };
        this.popGameList = function () {
            console.log('[魔光] 暂无此功能');
        };
        this.userPay = {
            access_token: '',
            userid: ''
        };
        this.newQuery = {};
        this.systemPay = {
            order_sn: ''
        };
        this.headerArgs = {
            LaunchArgs: ""
            // 授权登录
        };this.open_authlogin = false;
        this.rewardedVideo;
        // 跳包
        this.touchuAfter = '';
        this.jumpstatus = 0;
        // 订阅
        this.isFirstLogin = true;
        this.open_report_subscribe = false;
        this.realDialog = {
            show: flag => {
                console.log('未定义');
            },
            setOnClick: callback => {
                console.log('未定义');
            },
            setCLoseFlag: flag => {
                console.log('未定义');
            }
        };
        this.isShowRealDialog = false;
        this.realNameFlag = 0;
        this.payReal = false;
        this.payLock = false;
        this.showFloat = false;
        this.isShowFloatIcon = false;
        this.isPayRealName = false;
        this.payTime = 5000;
        this.allow_to_open = false;
        this.dialogShow = {
            show: flag => {
                console.log('未定义');
            },
            setOnClick: callback => {
                console.log('未定义');
            },
            setCLoseFlag: flag => {
                console.log('未定义');
            }
        };
        this.isShowTokenDialog = false;
        this.showDialogCancel = true;
    }
    getUUID() {
        var deviceid = wx.getStorageSync("deviceid");
        if (!deviceid) {
            deviceid = 'wechat-' + this.generateUUID();
            wx.setStorageSync('deviceid', deviceid);
        }
        return deviceid;
    }

    generateUUID() {
        var d = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c == 'x' ? r : r & 0x3 | 0x8).toString(16);
        });
        return uuid;
    }
    //初始化
    init(ops) {
        if (this.systemArgs.initFlag) {
            return;
        }
        if (window['Laya'] && window['Laya'].stage) {
            class Sprite_DrawShapes extends Laya.Sprite {
                constructor() {
                    super();
                    this.diff = Laya.stage.width / 840;
                    this.visible = false;
                    Laya.stage.addChild(this);
                    this.mouseEnabled = true;
                    this.drawY = this.drawSomething();
                    this.userNameInput = this.createInput('真实姓名', 5);
                    this.userNameInput.y += 90;
                    this.userNameInput.lineObj.y += 90;
                    this.userCardInput = this.createInput('身份证号码', 2);
                    this.userCardInput.y += 110;
                    this.userCardInput.lineObj.y += 110;
                    this.createTitle();
                    this.createContent();
                    this.drawButton();
                    this.timerId = 0;
                }
                show(flag) {
                    if (this.timerId) {
                        clearInterval(this.timerId);
                    }
                    if (flag) {
                        this.timerId = setInterval(() => {
                            Laya.stage.setChildIndex(this, Laya.stage.numChildren - 1);
                        }, 1000);
                    }
                    this.visible = flag;
                    this.userNameInput.text = '';
                    this.userCardInput.text = '';
                }
                drawSomething() {
                    let sp = new Laya.Sprite();
                    let mark = new Laya.Sprite();
                    var pWidth = Laya.stage.width;
                    var pHeight = Laya.stage.height;
                    mark.graphics.drawRect(0, 0, pWidth, pHeight, "#000000");
                    mark.alpha = 0.7;
                    mark.width = pWidth;
                    mark.height = pHeight;
                    this.addChild(mark);
                    this.addChild(sp);
                    sp.scaleX = this.diff;
                    sp.scaleY = this.diff;
                    sp.mouseEnabled = true;
                    mark.mouseEnabled = true;
                    mark.on(Laya.Event.MOUSE_UP, this, function () {
                        this.closeFlag && this.show(false);
                    }.bind(this));
                    var x = 672;
                    var y = x;
                    console.log(x, y, 111);
                    var cPosiX = (pWidth / this.diff - x) / 2;
                    var cPosiY = (pHeight / this.diff - y) / 2;
                    //绘制圆角矩形，自定义路径
                    sp.x = cPosiX;
                    sp.y = cPosiY;
                    sp.width = x;
                    sp.height = y;
                    sp.graphics.drawPath(0, 0, [["moveTo", 5, 0], ["lineTo", x + 5, 0], ["arcTo", x + 10, 0, x + 10, 5, 10], ["lineTo", x + 10, y + 5], ["arcTo", x + 10, y + 10, x + 5, y + 10, 10], ["lineTo", 5, y + 10], ["arcTo", 0, y + 10, 0, y + 5, 10], ["lineTo", 0, 5], ["arcTo", 0, 0, 5, 0, 10], ["closePath"]], {
                        fillStyle: "#666666"
                    });
                    this.mainContent = sp;
                    return cPosiY;
                }

                createInput(placeholder, multiple) {
                    const Input = Laya.Input;
                    var inputText = new Input();
                    this.mainContent.addChild(inputText);
                    var inputWidth = Laya.stage.width * 0.7 / this.diff;
                    inputText.size(inputWidth, 60);
                    inputText.x = this.mainContent.width / this.diff - inputWidth >> 1;
                    inputText.y = this.mainContent.height / this.diff - inputText.height * multiple >> 1;

                    // 移动端输入提示符
                    inputText.prompt = placeholder;

                    // 设置字体样式
                    inputText.color = "#ffffff";
                    inputText.fontSize = 26;

                    //画线
                    let sp = new Laya.Sprite();
                    this.mainContent.addChild(sp);
                    inputText.lineObj = sp;
                    var linPosi = inputText.height + inputText.y;
                    sp.graphics.drawLine(inputText.x, linPosi, inputWidth + inputText.x, linPosi, "#cecbc5", 3);
                    return inputText;
                }

                createTitle() {
                    const Text = Laya.Text;
                    let text = new Text();
                    text.color = "#FFFFFF";
                    text.fontSize = 32;
                    text.text = '实名认证';
                    text.bold = true;
                    text.y = 20 / this.diff;
                    text.width = this.mainContent.width / this.diff;
                    text.align = 'center';
                    this.mainContent.addChild(text);
                }

                createContent() {
                    var sprite = new Laya.Sprite();
                    const Text = Laya.Text;
                    let text = new Text();
                    // text.bold = true;
                    text.y = 80 / this.diff;
                    text.width = this.userNameInput.width;
                    sprite.width = this.userNameInput.width;
                    sprite.height = 176;
                    sprite.addChild(text);
                    text.x = (this.mainContent.width - text.width) / this.diff / 2;
                    text.wordWrap = true;
                    text.leading = '18';
                    text.color = "#FFFFFF";
                    text.fontSize = 26;
                    text.text = '您的账号尚未进行实名注册。按照文化部《关于防止未成年人沉迷网络游戏的通知》的要求，网络游戏用户需要使用有效身份证件进行实名注册才可登录、充值游戏。';
                    this.mainContent.addChild(sprite);
                }
                drawButton() {
                    let sp = new Laya.Sprite();
                    this.mainContent.addChild(sp);
                    var pWidth = this.mainContent.width / this.diff;
                    var pHeight = this.mainContent.height;
                    var x = pWidth * 0.3;
                    var y = x * 0.3;
                    var cPosiX = (pWidth - x) / 2;
                    var cPosiY = this.mainContent.height / this.diff - 60 * this.diff - y;
                    //绘制圆角矩形，自定义路径
                    sp.graphics.drawPath(cPosiX, cPosiY, [["moveTo", 5, 0], ["lineTo", x + 5, 0], ["arcTo", x + 10, 0, x + 10, 5, 10], ["lineTo", x + 10, y + 5], ["arcTo", x + 10, y + 10, x + 5, y + 10, 10], ["lineTo", 5, y + 10], ["arcTo", 0, y + 10, 0, y + 5, 10], ["lineTo", 0, 5], ["arcTo", 0, 0, 5, 0, 10], ["closePath"]], {
                        fillStyle: "#a7a2a2"
                    });
                    var text = new Laya.Text();
                    sp.addChild(text);
                    text.color = "#FFFFFF";
                    text.width = x + 5 * this.diff;
                    text.height = y;
                    text.align = 'center';
                    text.valign = 'middle';
                    text.x = cPosiX;
                    text.y = cPosiY;
                    text.fontSize = 32;
                    text.text = '确认';
                    text.bold = true;
                    text.mouseEnabled = true;
                    text.on(Laya.Event.MOUSE_UP, this, function () {
                        this.onClickCallBack && this.onClickCallBack(this.userNameInput.text, this.userCardInput.text);
                    }.bind(this));
                }
                setOnClick(callback) {
                    this.onClickCallBack = callback;
                }
                setCLoseFlag(flag) {
                    this.closeFlag = flag;
                }
            }
            this.realDialog = new Sprite_DrawShapes();
            this.realDialog.setOnClick((uName, cardNum) => {
                var data = {
                    cardname: uName,
                    idcard: cardNum
                };
                this.userbindReal(data);
            });
        }
        if (window['egret']) {
            var egretStage = egret.lifecycle.stage;
            class Sprite_DrawShapes extends egret.Sprite {
                constructor() {
                    super();
                    this.init();
                }
                init() {
                    this.shape = new egret.Shape();
                    this.addChild(this.shape);
                    this.visible = false;
                    egretStage.addChild(this);
                    this.egretRect(egretStage.stage.stageWidth, egretStage.stage.stageHeight);
                    this.egretReal(egretStage.stage.stageWidth / 2, egretStage.stage.stageHeight / 2);
                    this.egretTitle();
                    this.egretContent();
                    this.uNameInput = this.egretInput('真实姓名', 40);
                    this.cardNumInput = this.egretInput('身份证号码', -30);
                    this.egretButton();
                }
                egretRect(x, y) {
                    var shape = new egret.Shape();
                    this.addChild(shape);
                    var w = egretStage.stage.stageWidth;
                    var h = egretStage.stage.stageHeight;
                    /*** 本示例关键代码段开始 ***/
                    shape.graphics.beginFill(0x000000, 0.7);
                    shape.graphics.drawRect(x - w, y - h, w, h);
                    shape.graphics.endFill();
                    shape.touchEnabled = true;
                    shape.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                        this.closeFlag && this.show(false);
                    }.bind(this));
                    /*** 本示例关键代码段结束 ***/
                }

                egretReal(x, y) {
                    var shape = new egret.Shape();
                    this.addChild(shape);
                    shape.touchEnabled = true;
                    var w = egretStage.stage.stageWidth * 0.8;
                    var h = w;
                    // shape.x = x;
                    // shape.y = y;
                    shape.width = w;
                    shape.height = h;
                    /*** 本示例关键代码段开始 ***/
                    shape.graphics.beginFill(0x666666, 1);
                    shape.graphics.drawRect(x - w / 2, y - h / 2, w, h);
                    shape.graphics.endFill();
                    /*** 本示例关键代码段结束 ***/
                }

                egretTitle() {
                    var x = egretStage.stage.stageWidth / 2;
                    var y = egretStage.stage.stageHeight / 2;
                    var h = egretStage.stage.stageWidth * 0.8;
                    var text = new egret.TextField();
                    text.text = "实名认证";
                    /*** 本示例关键代码段开始 ***/
                    text.size = 24;
                    /*** 本示例关键代码段结束 ***/
                    text.width = egretStage.stage.stageWidth;
                    text.bold = true;
                    this.addChild(text);
                    text.x = x - text.textWidth / 2;
                    text.y = y - h / 2 + text.textHeight / 2;
                }

                egretContent() {
                    var x = egretStage.stage.stageWidth / 2;
                    var y = egretStage.stage.stageHeight / 2;
                    var h = egretStage.stage.stageWidth * 0.8;
                    var text = new egret.TextField();
                    text.text = "您的账号尚未进行实名注册。按照文化部《关于防止未成年人沉迷网络游戏的通知》的要求，网络游戏用户需要使用有效身份证件进行实名注册才可登录、充值游戏。";
                    /*** 本示例关键代码段开始 ***/
                    text.size = 20;
                    text.lineSpacing = 16;
                    /*** 本示例关键代码段结束 ***/
                    text.width = egretStage.stage.stageWidth * 0.7;
                    this.addChild(text);
                    text.x = x - text.textWidth / 2;
                    text.y = y - h / 2 + text.textHeight / 2;
                }

                egretInput(placeholder, position) {
                    var input = new egret.TextField();
                    var promptBg = new egret.TextField();
                    var sprite = new egret.Sprite();
                    var x = egretStage.stage.stageWidth / 2;
                    var y = egretStage.stage.stageHeight / 2 - position;
                    promptBg.text = placeholder;
                    sprite.width = egretStage.stage.stageWidth * 0.7;
                    sprite.height = 40;
                    sprite.x = x - sprite.width / 2;
                    sprite.y = y;
                    input.width = sprite.width;
                    input.size = 20;
                    promptBg.size = 20;
                    input.verticalAlign = 'middle';
                    // input.border = true;
                    input.borderColor = 0x999999;
                    input.type = egret.TextFieldType.INPUT;
                    input.addEventListener(egret.FocusEvent.FOCUS_IN, function (e) {
                        promptBg.visible = false;
                    }, this);
                    input.addEventListener(egret.FocusEvent.FOCUS_OUT, function (e) {
                        promptBg.visible = input.text == '';
                    }, this);
                    sprite.addChild(promptBg);
                    sprite.addChild(input);
                    this.addChild(sprite);
                    var shape = new egret.Shape();
                    this.addChild(shape);
                    shape.y = y;
                    shape.graphics.lineStyle(1, 0xcecbc5);
                    shape.graphics.moveTo(sprite.x, sprite.height);
                    shape.graphics.lineTo(sprite.width + sprite.x, sprite.height);
                    return input;
                }

                egretButton(x, y) {
                    var sprite = new egret.Sprite();
                    var shape = new egret.Shape();
                    sprite.addChild(shape);
                    this.addChild(sprite);
                    var pWidth = egretStage.stage.stageWidth * 0.8;
                    var pHeight = egretStage.stage.stageHeight / 2;
                    var w = egretStage.stage.stageWidth * 0.3;
                    var h = w * 0.3;
                    /*** 本示例关键代码段开始 ***/
                    shape.graphics.beginFill(0xa7a2a2, 1);
                    shape.graphics.drawRect((egretStage.stage.stageWidth - w) / 2, pHeight + w - 40, w, h);
                    shape.graphics.endFill();
                    /*** 本示例关键代码段结束 ***/

                    var text = new egret.TextField();
                    text.text = "确认";
                    sprite.addChild(text);
                    /*** 本示例关键代码段开始 ***/
                    text.size = 24;
                    /*** 本示例关键代码段结束 ***/
                    text.width = w;
                    text.x = (egretStage.stage.stageWidth - w) / 2 + w / 2 - 24;
                    text.y = pHeight + w - 40 + h / 4;
                    text.touchEnabled = true;
                    text.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                        this.onClickCallBack && this.onClickCallBack(this.uNameInput.text, this.cardNumInput.text);
                    }.bind(this));
                }
                setOnClick(callback) {
                    this.onClickCallBack = callback;
                }
                setCLoseFlag(flag) {
                    this.closeFlag = flag;
                }
                show(flag) {
                    if (this.timerId) {
                        clearInterval(this.timerId);
                    }
                    if (flag) {
                        this.timerId = setInterval(() => {
                            egretStage.setChildIndex(this, egretStage.$children.length - 1);
                        }, 1000);
                    }
                    this.visible = flag;
                    this.uNameInput.text = '';
                    this.cardNumInput.text = '';
                }
            }
            this.realDialog = new Sprite_DrawShapes();
            this.realDialog.setOnClick((uName, cardNum) => {
                var data = {
                    cardname: uName,
                    idcard: cardNum
                };
                this.userbindReal(data);
            });
        }
        var args = wx.getLaunchOptionsSync();
        if (args.scene == '1007' || args.scene == '1044' || args.scene == '1155') {
            this.systemArgs.is_wx_share = 1;
        } else {
            this.systemArgs.is_wx_share = 0;
        }
        this.showModalInit(this.launchPop.bind(this));
        this.systemArgs.channelid = ops.channelid;
        this.systemArgs.appkey = ops.appkey;
        this.systemArgs.extra_data.gameversion = ops.gameversion || '';
        var os = wx.getSystemInfoSync().system;
        if (os.indexOf('Android') != -1) {
            this.systemArgs.extra_data.os = 'wxandroid';
            this.systemArgs.payos = 'wxandroid';
        } else if (os.indexOf('iOS') != -1) {
            this.systemArgs.extra_data.os = 'wxios';
            this.systemArgs.payos = 'wxios';
        } else {
            this.systemArgs.extra_data.os = 'wxwindow';
            this.systemArgs.payos = 'wxwindow';
        }
        this.initArgs = ops;
        // args.gdt_vid	 广告traceid	
        if (args.query["sourceId@" + this.systemArgs.channelid]) {
            this.systemArgs.query.ldid = "wxapp_wxShare." + args.query["sourceId@" + this.systemArgs.channelid];
        } else {
            this.systemArgs.query.ldid = "wxapp@" + this.systemArgs.extra_data.os;
        }
        for (var i in args) {
            this.systemArgs.query[i] = args[i];
        }
        this.newQuery = {
            scene: this.systemArgs.query.scene,
            referrerInfo: this.systemArgs.query.referrerInfo,
            ldid: this.systemArgs.query.ldid
        };
        Object.assign(this.newQuery, this.systemArgs.query.query);
        var that = this;
        report({ type: 'start' });
        this._request({
            url: '/wechat/init',
            data: {
                channelid: that.systemArgs.channelid,
                query: JSON.stringify(that.newQuery) || {},
                extra_data: JSON.stringify(that.systemArgs.extra_data) || ''
            },
            success(res) {
                that.showFloat = res.data.data.config.float;
                that.systemArgs.initFlag = true;
                that.systemArgs.appid = res.data.data.appid;
                // 授权登录
                that.open_authlogin = res.data.data.config.open_authlogin;
                // 订阅
                that.open_report_subscribe = res.data.data.config.open_report_subscribe;
                that.initRes = {
                    constRealName: res.data.data.config.constRealName,
                    realName: res.data.data.config.realName
                };
                that.weChatConfig = {
                    jump_appid: res.data.data.jump_appid,
                    jump_type: res.data.data.jump_type
                };
                that.payLock = res.data.data.config.payLock;
                that.payReal = res.data.data.config.payReal;
                that.merchantid = res.data.data.merchantid;
                that.postfix = res.data.data.postfix;
                that.turn_port_url = res.data.data.turn_port_url;
                if (that.merchantid == '0') {
                    ops.callback(res);
                } else if (channelSDK && that.merchantid != '0') {
                    var data = {
                        gameid: res.data.data.union_config.jh_gameid,
                        channelid: res.data.data.union_config.jh_channelid,
                        appkey: res.data.data.union_config.jh_appkey
                    };
                    that.systemArgs.isChannel = true;
                    channelSDK.channel_init(data, res, ops.callback);
                } else {
                    that.systemArgs.isChannel = true;
                }
            }
        });
        that.checkUnReport();

        wx.showShareMenu({
            withShareTicket: true,
            menus: ['shareAppMessage', 'shareTimeline']
        });
        // app分享朋友
        wx.onShareAppMessage(() => {
            var rs = {
                query: "sourceId@" + this.systemArgs.channelid + "=" + this.systemArgs.userid
            };
            rs.imageUrl = "https://frontcdn.17a.cn/wxapp/share/" + this.systemArgs.channelid + '_0' + Math.ceil(Math.random() * 3) + ".png";
            return rs;
        });

        // 朋友圈分享
        if (wx.onShareTimeline) {
            wx.onShareTimeline(() => {
                var rs = {
                    query: "sourceId@" + this.systemArgs.channelid + "=" + this.systemArgs.userid
                };
                return rs;
            });
        }
    }

    //登录
    login(ops) {
        var that = this;
        // 如果是外放sdk的话，走渠道登录，拿到渠道登录数据后，走二次验证并登录验证
        if (that.systemArgs.isChannel) {
            channelSDK && channelSDK.channel_login(function (res, ch_userid) {
                that.verifyLogin(res, ch_userid).then(result => {
                    that.systemArgs.cuid = ch_userid;
                    ops.callback(result);
                });
            });
            return;
        }
        wx.login({
            success(res) {
                // wx.getUserInfo({
                // 	complete: resInfo => {
                // if (!that.open_authlogin) {
                // 	if (resInfo.encryptedData == null && wx.createUserInfoButton) {
                // 		wx.hideLoading();
                // 		that.showLogin(ops);
                // 		return;
                // 	}
                // }
                // console.log('[魔光] resInfo', resInfo);
                var resInfo = '';
                var usdata = {
                    appid: that.systemArgs.appid || '',
                    channelid: that.systemArgs.channelid || '',
                    code: res.code || '',
                    encryptedData: resInfo.encryptedData || '',
                    iv: resInfo.iv || '',
                    query: JSON.stringify(that.newQuery) || {},
                    extra_data: JSON.stringify(that.systemArgs.extra_data) || ''
                };
                var apiData = that.signFun(usdata);
                that._request({
                    url: '/login/wechat',
                    data: apiData,
                    success(res) {
                        if (res.data.code == 0) {
                            that.realNameFlag = res.data.data.realNameFlag;
                            if (res.data.data.realNameFlag == '0') {
                                if (that.initRes.constRealName) {
                                    that.realDialog.setCLoseFlag(false);
                                    that.isShowRealDialog = true;
                                } else if (that.initRes.realName) {
                                    that.realDialog.setCLoseFlag(true);
                                    that.isShowRealDialog = true;
                                }
                            }
                            that.systemArgs.access_token = res.data.data.access_token;
                            that.systemArgs.userid = res.data.data.userid;
                            that.systemArgs.session_key = res.data.data.extData.session_key;
                            that.systemArgs.openid = res.data.data.extData.openid;
                            that.systemArgs.click_id = res.data.data.click_id;
                            that.systemArgs.login_code = res.data.code;
                            that.smallList(ops);
                            // ops.callback(res);
                        }
                    },
                    fail(res) {
                        wx.showModal({
                            title: '错误提示',
                            content: "error:" + res.data.msg + "",
                            confirmText: "重新登录",
                            showCancel: false,
                            success: () => {
                                login(opts);
                                return;
                            }
                        });
                    }
                });
                // 	}
                // })
            }
        });
    }

    md5(instring) {
        var hexcase = 0; /* hex output format. 0 - lowercase; 1 - uppercase        */
        function hex_md5(s) {
            return rstr2hex(rstr_md5(str2rstr_utf8(s)));
        }
        function rstr_md5(s) {
            return binl2rstr(binl_md5(rstr2binl(s), s.length * 8));
        }
        function rstr2hex(input) {
            try {
                hexcase;
            } catch (e) {
                hexcase = 0;
            }
            var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
            var output = "";
            var x;
            for (var i = 0; i < input.length; i++) {
                x = input.charCodeAt(i);
                output += hex_tab.charAt(x >>> 4 & 0x0F) + hex_tab.charAt(x & 0x0F);
            }
            return output;
        }
        function str2rstr_utf8(input) {
            var output = "";
            var i = -1;
            var x, y;

            while (++i < input.length) {
                /* Decode utf-16 surrogate pairs */
                x = input.charCodeAt(i);
                y = i + 1 < input.length ? input.charCodeAt(i + 1) : 0;
                if (0xD800 <= x && x <= 0xDBFF && 0xDC00 <= y && y <= 0xDFFF) {
                    x = 0x10000 + ((x & 0x03FF) << 10) + (y & 0x03FF);
                    i++;
                }

                /* Encode output as utf-8 */
                if (x <= 0x7F) output += String.fromCharCode(x);else if (x <= 0x7FF) output += String.fromCharCode(0xC0 | x >>> 6 & 0x1F, 0x80 | x & 0x3F);else if (x <= 0xFFFF) output += String.fromCharCode(0xE0 | x >>> 12 & 0x0F, 0x80 | x >>> 6 & 0x3F, 0x80 | x & 0x3F);else if (x <= 0x1FFFFF) output += String.fromCharCode(0xF0 | x >>> 18 & 0x07, 0x80 | x >>> 12 & 0x3F, 0x80 | x >>> 6 & 0x3F, 0x80 | x & 0x3F);
            }
            return output;
        }
        function rstr2binl(input) {
            var output = Array(input.length >> 2);
            for (var i = 0; i < output.length; i++) output[i] = 0;
            for (var i = 0; i < input.length * 8; i += 8) output[i >> 5] |= (input.charCodeAt(i / 8) & 0xFF) << i % 32;
            return output;
        }
        function binl2rstr(input) {
            var output = "";
            for (var i = 0; i < input.length * 32; i += 8) output += String.fromCharCode(input[i >> 5] >>> i % 32 & 0xFF);
            return output;
        }
        function binl_md5(x, len) {
            /* append padding */
            x[len >> 5] |= 0x80 << len % 32;
            x[(len + 64 >>> 9 << 4) + 14] = len;

            var a = 1732584193;
            var b = -271733879;
            var c = -1732584194;
            var d = 271733878;

            for (var i = 0; i < x.length; i += 16) {
                var olda = a;
                var oldb = b;
                var oldc = c;
                var oldd = d;

                a = md5_ff(a, b, c, d, x[i + 0], 7, -680876936);
                d = md5_ff(d, a, b, c, x[i + 1], 12, -389564586);
                c = md5_ff(c, d, a, b, x[i + 2], 17, 606105819);
                b = md5_ff(b, c, d, a, x[i + 3], 22, -1044525330);
                a = md5_ff(a, b, c, d, x[i + 4], 7, -176418897);
                d = md5_ff(d, a, b, c, x[i + 5], 12, 1200080426);
                c = md5_ff(c, d, a, b, x[i + 6], 17, -1473231341);
                b = md5_ff(b, c, d, a, x[i + 7], 22, -45705983);
                a = md5_ff(a, b, c, d, x[i + 8], 7, 1770035416);
                d = md5_ff(d, a, b, c, x[i + 9], 12, -1958414417);
                c = md5_ff(c, d, a, b, x[i + 10], 17, -42063);
                b = md5_ff(b, c, d, a, x[i + 11], 22, -1990404162);
                a = md5_ff(a, b, c, d, x[i + 12], 7, 1804603682);
                d = md5_ff(d, a, b, c, x[i + 13], 12, -40341101);
                c = md5_ff(c, d, a, b, x[i + 14], 17, -1502002290);
                b = md5_ff(b, c, d, a, x[i + 15], 22, 1236535329);

                a = md5_gg(a, b, c, d, x[i + 1], 5, -165796510);
                d = md5_gg(d, a, b, c, x[i + 6], 9, -1069501632);
                c = md5_gg(c, d, a, b, x[i + 11], 14, 643717713);
                b = md5_gg(b, c, d, a, x[i + 0], 20, -373897302);
                a = md5_gg(a, b, c, d, x[i + 5], 5, -701558691);
                d = md5_gg(d, a, b, c, x[i + 10], 9, 38016083);
                c = md5_gg(c, d, a, b, x[i + 15], 14, -660478335);
                b = md5_gg(b, c, d, a, x[i + 4], 20, -405537848);
                a = md5_gg(a, b, c, d, x[i + 9], 5, 568446438);
                d = md5_gg(d, a, b, c, x[i + 14], 9, -1019803690);
                c = md5_gg(c, d, a, b, x[i + 3], 14, -187363961);
                b = md5_gg(b, c, d, a, x[i + 8], 20, 1163531501);
                a = md5_gg(a, b, c, d, x[i + 13], 5, -1444681467);
                d = md5_gg(d, a, b, c, x[i + 2], 9, -51403784);
                c = md5_gg(c, d, a, b, x[i + 7], 14, 1735328473);
                b = md5_gg(b, c, d, a, x[i + 12], 20, -1926607734);

                a = md5_hh(a, b, c, d, x[i + 5], 4, -378558);
                d = md5_hh(d, a, b, c, x[i + 8], 11, -2022574463);
                c = md5_hh(c, d, a, b, x[i + 11], 16, 1839030562);
                b = md5_hh(b, c, d, a, x[i + 14], 23, -35309556);
                a = md5_hh(a, b, c, d, x[i + 1], 4, -1530992060);
                d = md5_hh(d, a, b, c, x[i + 4], 11, 1272893353);
                c = md5_hh(c, d, a, b, x[i + 7], 16, -155497632);
                b = md5_hh(b, c, d, a, x[i + 10], 23, -1094730640);
                a = md5_hh(a, b, c, d, x[i + 13], 4, 681279174);
                d = md5_hh(d, a, b, c, x[i + 0], 11, -358537222);
                c = md5_hh(c, d, a, b, x[i + 3], 16, -722521979);
                b = md5_hh(b, c, d, a, x[i + 6], 23, 76029189);
                a = md5_hh(a, b, c, d, x[i + 9], 4, -640364487);
                d = md5_hh(d, a, b, c, x[i + 12], 11, -421815835);
                c = md5_hh(c, d, a, b, x[i + 15], 16, 530742520);
                b = md5_hh(b, c, d, a, x[i + 2], 23, -995338651);

                a = md5_ii(a, b, c, d, x[i + 0], 6, -198630844);
                d = md5_ii(d, a, b, c, x[i + 7], 10, 1126891415);
                c = md5_ii(c, d, a, b, x[i + 14], 15, -1416354905);
                b = md5_ii(b, c, d, a, x[i + 5], 21, -57434055);
                a = md5_ii(a, b, c, d, x[i + 12], 6, 1700485571);
                d = md5_ii(d, a, b, c, x[i + 3], 10, -1894986606);
                c = md5_ii(c, d, a, b, x[i + 10], 15, -1051523);
                b = md5_ii(b, c, d, a, x[i + 1], 21, -2054922799);
                a = md5_ii(a, b, c, d, x[i + 8], 6, 1873313359);
                d = md5_ii(d, a, b, c, x[i + 15], 10, -30611744);
                c = md5_ii(c, d, a, b, x[i + 6], 15, -1560198380);
                b = md5_ii(b, c, d, a, x[i + 13], 21, 1309151649);
                a = md5_ii(a, b, c, d, x[i + 4], 6, -145523070);
                d = md5_ii(d, a, b, c, x[i + 11], 10, -1120210379);
                c = md5_ii(c, d, a, b, x[i + 2], 15, 718787259);
                b = md5_ii(b, c, d, a, x[i + 9], 21, -343485551);

                a = safe_add(a, olda);
                b = safe_add(b, oldb);
                c = safe_add(c, oldc);
                d = safe_add(d, oldd);
            }
            return Array(a, b, c, d);
        }
        function md5_cmn(q, a, b, x, s, t) {
            return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s), b);
        }
        function md5_ff(a, b, c, d, x, s, t) {
            return md5_cmn(b & c | ~b & d, a, b, x, s, t);
        }
        function md5_gg(a, b, c, d, x, s, t) {
            return md5_cmn(b & d | c & ~d, a, b, x, s, t);
        }
        function md5_hh(a, b, c, d, x, s, t) {
            return md5_cmn(b ^ c ^ d, a, b, x, s, t);
        }
        function md5_ii(a, b, c, d, x, s, t) {
            return md5_cmn(c ^ (b | ~d), a, b, x, s, t);
        }
        function safe_add(x, y) {
            var lsw = (x & 0xFFFF) + (y & 0xFFFF);
            var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
            return msw << 16 | lsw & 0xFFFF;
        }
        function bit_rol(num, cnt) {
            return num << cnt | num >>> 32 - cnt;
        }

        return hex_md5(instring);
    }

    signFun(data) {
        var ordered = {};
        var signData = "";
        Object.keys(data).sort().forEach(function (key) {
            ordered[key] = data[key];
            signData += ordered[key];
        });
        var fileNameMd5 = this.md5(signData + this.systemArgs.appkey);
        var apiData = JSON.parse(JSON.stringify(data));
        apiData.sign = fileNameMd5;
        return apiData;
    }

    // 渠道二次验证 登录或注册
    verifyLogin(data, ch_userid) {
        var that = this;
        return new Promise((reslove, reject) => {
            // 走我们的验证接口，换取我们的参数;
            // reslove返回结果
            var usdata = {
                channelid: that.systemArgs.channelid,
                postfix: that.postfix,
                query: JSON.stringify(that.newQuery) || {},
                extra_data: JSON.stringify(that.systemArgs.extra_data) || ''
            };
            Object.assign(usdata, data);
            console.log(usdata);
            var apiData = that.signFun(usdata);
            that._request({
                url: '/login/channels',
                data: apiData,
                success: res => {
                    if (res.data.code == 0) {
                        that.systemArgs.access_token = res.data.data.access_token;
                        that.systemArgs.userid = res.data.data.userid;
                        that.smallList({ callback: reslove });
                    } else {
                        wx.showModal({
                            content: res.data.msg || '登录失败',
                            showCancel: false
                        });
                        reject(res);
                    }
                },
                fail: res => {
                    wx.showModal({
                        content: '网络错误'
                    });
                    reject(res);
                }
            });
        });
    }

    //支付
    pay(ops) {
        this.payData = ops;
        var that = this;
        if (that.systemArgs.access_token.length < 1) {
            wx.showModal({
                title: '错误提示',
                content: "你还没登录呢，请先登录",
                confirmText: "重新登录",
                showCancel: false,
                success: () => {
                    that.login({
                        callback: res => {
                            that.pay(ops);
                        }
                    });
                    return;
                }
            });
            return;
        }
        var usdata = {
            channelid: that.systemArgs.channelid,
            userid: that.userPay.userid,
            amount: that.payData.amount || 10,
            extra_data: JSON.stringify(that.systemArgs.extra_data) || '',
            query: JSON.stringify(that.newQuery) || {}
        };
        var apiData = that.signFun(usdata);
        that._request({
            url: '/info/policy',
            data: apiData,
            success(res) {
                if (res.data.data.is_cut === 0) {
                    that.systemArgs.paytype = 13; // 不切支付
                } else {
                    that.systemArgs.paytype = res.data.data.is_cut; // 切支付
                }
                that.create(that.payData);
            }
        });
    }

    // 支付
    create(ops) {
        var that = this;
        if (!that.systemArgs.isChannel && that.realNameFlag == '0' && that.payReal) {
            that.isPayRealName = true;
            that.realDialog.show(true);
            that.realDialog.setCLoseFlag(true);
            return false;
        } else if (!that.systemArgs.isChannel && that.payLock) {
            return false;
        }
        var usdata = {
            appid: that.systemArgs.appid || '',
            query: JSON.stringify(that.newQuery) || {},
            extra_data: JSON.stringify(that.systemArgs.extra_data) || '',
            access_token: that.userPay.access_token || '',
            channelid: that.systemArgs.channelid || '',
            userid: that.userPay.userid || '',
            click_id: that.systemArgs.click_id || '',
            os: that.systemArgs.payos || '',
            orderid: ops.orderid || '',
            amount: ops.amount || 10,
            roleid: ops.roleid || '',
            rolename: ops.rolename || '',
            productid: ops.productid || '',
            productname: ops.productname || '',
            serverid: ops.serverid || '',
            servername: ops.servername || '',
            orderext: ops.orderext || '',
            notifyurl: ops.notifyurl || '',
            deviceid: ops.deviceid || '',
            paytype: that.systemArgs.paytype
        };
        if (that.systemArgs.cuid) {
            Object.assign(usdata, { cuid: that.systemArgs.cuid, paytype: 25 });
        }
        var apiData = that.signFun(usdata);
        that._request({
            url: '/order/create',
            data: apiData,
            success(res) {
                var payData = res.data.data;
                that.systemPay.order_sn = payData.order_sn;
                if (res.data.code != 0) {} else {
                    // 下面是渠道支付逻辑
                    if (that.systemArgs.isChannel) {
                        Object.assign(payData, ops);
                        channelSDK && channelSDK.channel_pay(payData, ops.callback);
                        return;
                    }
                    // 下面是我们的支付逻辑
                    if (payData.tradeType == "KFPAY") {
                        ops.callback(res);
                        wx.showModal({
                            title: "充值教程",
                            content: "充值链接已复制剪贴板，请前往客服中心，如果没有自动收到订单入口请粘贴并发送剪贴板内容获取支付入口链接。",
                            confirmText: "前往粘贴",
                            showCancel: false,
                            fail: () => {},
                            success: () => {
                                wx.setClipboardData({
                                    data: payData.url + '\n\n点击上方链接即可充值。\n如有其他疑问可联系\n客服公众号:silanggame\n\n发送并点击本链接即可充值',
                                    success(res) {}
                                });
                                var sftmp = {
                                    link: payData.url,
                                    desc: "订单号：" + payData.order_sn,
                                    title: "订单支付",
                                    img: "https://frontcdn.17a.cn/static/images/dhfz.jpg"
                                };
                                wx.openCustomerServiceConversation({
                                    showMessageCard: true,
                                    sendMessageTitle: sftmp.desc,
                                    sendMessagePath: JSON.stringify(sftmp),
                                    sessionFrom: JSON.stringify(sftmp),
                                    sendMessageImg: "https://frontcdn.17a.cn/static/images/dhfz.jpg",
                                    success: res => {}
                                });
                            }
                        });
                        return;
                    }

                    //JSAPI,小程序支付
                    if (payData.tradeType == "JSAPI") {
                        delete payData.tradeType;
                        payData.success = function (res1) {
                            ops.callback(res1);
                        };
                        wx.requestPayment(payData);
                        return;
                    }

                    if (payData.tradeType == "WXGAME") {
                        var ostype = wx.getSystemInfoSync().system;
                        if (ostype.indexOf('iOS') != -1) {
                            wx.showModal({
                                showCancel: false,
                                content: 'IOS不支持充值'
                            });
                            return false;
                        }
                        wx.requestMidasPayment({
                            mode: payData.payParameters.mode,
                            env: payData.payParameters.env,
                            offerId: payData.payParameters.offerId,
                            currencyType: payData.payParameters.currencyType,
                            platform: payData.payParameters.platform,
                            buyQuantity: payData.payParameters.buyQuantity,
                            zoneId: payData.payParameters.zoneId,
                            success: function (res) {
                                console.log('requestMidasPayment', res);
                                if (res.errMsg == 'requestMidasPayment:ok') {
                                    that.notify(ops);
                                }
                            },
                            fail: function (res) {
                                console.log("[SDK]" + JSON.stringify(res));
                                if (res.errMsg.indexOf('用户取消') !== -1) {
                                    ops.callback({ errMsg: "用户取消支付:" + res });
                                    console.log('用户取消支付');
                                } else {
                                    ops.callback({ errMsg: "支付失败:" + res });
                                    console.log('支付失败');
                                }
                            },
                            complete: function (res) {
                                console.log("[SDK]" + JSON.stringify(res));
                            }
                        });
                    }
                }
            }
        });
    }

    notify(ops) {
        // 支付后回调
        var that = this;
        var paydata = {
            appid: that.systemArgs.appid || '',
            order_sn: that.systemPay.order_sn || '',
            click_id: that.systemArgs.click_id || '',
            openid: that.systemArgs.openid || '',
            extra_data: JSON.stringify(that.systemArgs.extra_data) || '',
            query: JSON.stringify(that.newQuery) || {}
        };
        var apiData = that.signFun(paydata);
        wx.request({
            url: that.systemArgs.sdkHost + '/callback/type/13',
            data: apiData,
            method: 'POST',
            header: {
                "content-type": "application/x-www-form-urlencoded "
            },
            success(res) {
                ops.callback(res.data);
                console.log('魔光支付', JSON.stringify(res));
                if (res.data.code == 0) {} else if (res.data.code == '90010') {
                    var sessiondata = {
                        channelid: that.systemArgs.channelid,
                        code: that.systemArgs.login_code
                    };
                    var sessionData = that.signFun(sessiondata);
                    that._request({
                        url: '/wechat/code2session',
                        data: sessionData,
                        success(res) {
                            if (res.data.code == 0) {
                                that.systemArgs.session_key = res.data.data.session_key;
                                that.notify(ops);
                            }
                        },
                        fail(res) {}
                    });
                }
            },
            fail() {}
        });
    }

    // 辅助-切支付
    pswitch(ops) {
        console.log(ops, "[魔光] call pswitch");
        var that = this;
        var pdata = {
            access_token: that.systemArgs.access_token,
            userid: that.systemArgs.userid,
            channelid: that.systemArgs.channelid,
            rolelevel: ops.rolelevel,
            serverid: ops.serverid,
            extra_data: JSON.stringify(that.systemArgs.extra_data) || '',
            query: JSON.stringify(that.newQuery) || {}
        };

        var apiData = that.signFun(pdata);
        that._request({
            url: '/info/shieldrule',
            data: apiData,
            success(res) {
                console.log('[魔光] pswitch return', res.data.data);
                ops.callback && ops.callback(res.data.data.is_shield);
                if (res.data.data && res.data.data.is_show_pop == '1') {
                    var nowTime = new Date().getTime(),
                        startTime = new Date(new Date(new Date().toLocaleDateString()).getTime()).getTime(),
                        endTime = new Date(new Date(new Date().toLocaleDateString()).getTime() + 24 * 60 * 60 * 1000 - 1).getTime();
                    if (wx.getStorageSync('showShielTime')) {
                        if (startTime <= wx.getStorageSync('showShielTime') && wx.getStorageSync('showShielTime') <= endTime) {} else wx.removeStorageSync('showShielNum');
                    }
                    var isShowShielNum = wx.getStorageSync('showShielNum') || 1;
                    if (isShowShielNum < 3) {
                        var QQ = res.data.data.qq,
                            Cont = res.data.data.description;
                        wx.showModal({
                            content: 'VIPQQ：' + QQ + '\r\n添加即可领取：\r\n' + Cont,
                            cancelText: '关闭',
                            confirmText: '复制QQ',
                            success(res) {
                                if (res.confirm) {
                                    wx.setClipboardData({
                                        data: QQ
                                    });
                                }
                            }
                        });
                        wx.setStorageSync('showShielTime', nowTime);
                        if (isShowShielNum && isShowShielNum === 1) {
                            wx.setStorageSync('showShielNum', 2);
                        } else {
                            wx.setStorageSync('showShielNum', 3);
                        }
                    }
                    console.log(wx.getStorageSync('showShielNum'), 'showShielNum');
                }
            }
        });
        if (that.jumpstatus != 1) {
            that.checkGoToAppid(ops);
        }
    }

    //上报加载
    reportLoad(ops) {
        var reportData = ops;
        var that = this;
        var usdata = {
            channelid: that.systemArgs.channelid || '',
            extra_data: JSON.stringify(that.systemArgs.extra_data) || '',
            query: JSON.stringify(that.newQuery) || {},
            roleid: reportData.roleid || '',
            rolename: reportData.rolename || '',
            rolelevel: reportData.rolelevel || 0,
            viplevel: reportData.viplevel || 0,
            serverid: reportData.serverid || '',
            servername: reportData.servername || '',
            progress: reportData.progress || 0,
            time: Math.round(new Date().getTime() / 1000) || ''
        };
        var apiData = that.signFun(usdata);
        if (reportData.progress != '-1') {
            that._request({
                url: '/report/event/load',
                data: apiData,
                success(res) {}
            });
        }
    }

    //上报
    report(ops) {
        var reportData = ops;
        var that = this;
        that.systemArgs.extra_data.query = JSON.stringify(that.systemArgs.query);
        var usdata = {
            channelid: that.systemArgs.channelid || '',
            extra_data: JSON.stringify(that.systemArgs.extra_data) || '',
            query: JSON.stringify(that.newQuery) || {},
            roleid: reportData.roleid || '',
            rolename: reportData.rolename || '',
            userid: that.userPay.userid || '',
            rolelevel: reportData.rolelevel || 0,
            viplevel: reportData.viplevel || 0,
            serverid: reportData.serverid || '',
            servername: reportData.servername || '',
            time: Math.round(new Date().getTime() / 1000) || ''
        };
        var apiData = that.signFun(usdata);
        if (that.systemArgs.isChannel) {
            channelSDK && channelSDK.channel_gameReport(ops);
        }
        that._request({
            url: '/report/event/' + reportData.type,
            data: apiData,
            success(res) {
                if ((reportData.type == 'enter' || reportData.type == 'roleup') && that.showFloat) {
                    var fdata = {
                        channelid: that.systemArgs.channelid,
                        access_token: that.systemArgs.access_token,
                        server_id: ops.serverid,
                        userid: that.systemArgs.userid,
                        rolelevel: reportData.rolelevel || 0,
                        roleid: reportData.roleid || '',
                        rolename: reportData.rolename || '',
                        servername: reportData.servername || ''
                    };
                    var apiData = that.signFun(fdata);
                    that._request({
                        url: '/info/floatC',
                        data: apiData,
                        success(res) {
                            if (res.data.code == '0' && res.data.data.is_show_float == '1' && !that.isShowFloatIcon) {
                                that.isShowFloatIcon = true;
                                if (window['Laya'] && window['Laya'].stage) {
                                    that.showFloatIconByLaya();
                                }
                                if (window['egret']) {
                                    that.showFloatIcon();
                                }
                                if (window['cc']) {
                                    that.showFun();
                                }
                            }
                        }
                    });
                }
            }
        });
    }

    // 小号列表
    smallList(ops) {
        var that = this;
        var usdata = {
            time: Math.round(new Date().getTime() / 1000) || '',
            access_token: that.systemArgs.access_token || '',
            channelid: that.systemArgs.channelid || '',
            extra_data: JSON.stringify(that.systemArgs.extra_data) || '',
            query: JSON.stringify(that.newQuery) || {}
        };
        var apiData = that.signFun(usdata);
        that._request({
            url: '/user/smallList',
            data: apiData,
            success(res) {
                if (res.data.code === 0) {
                    that.smallToken(ops, res.data.data.number[0]);
                }
            }
        });
    }

    // 小号登录
    smallToken(ops, data) {
        var that = this;
        var usdata = {
            channelid: that.systemArgs.channelid || '',
            userid: data.userid || '',
            access_token: that.systemArgs.access_token,
            nickname: data.nickname || '',
            extra_data: JSON.stringify(that.systemArgs.extra_data) || '',
            query: JSON.stringify(that.newQuery) || {}
        };
        var apiData = that.signFun(usdata);
        that._request({
            url: '/login/smallToken',
            data: apiData,
            success(res) {
                if (!that.systemArgs.isChannel) {
                    that.showModalDialog();
                }
                that.userPay.access_token = res.data.data.access_token;
                that.userPay.userid = res.data.data.userid;
                ops.callback(res);
                if (that.isFirstLogin && that.open_report_subscribe) {
                    that.isFirstLogin = false;
                    that.upWxSetting();
                }
                if (that.isShowRealDialog) {
                    that.realDialog.show(true);
                }
            }
        });
    }

    // 实名认证
    userbindReal(ops) {
        console.log(ops);
        if (!ops.cardname) {
            wx.showModal({
                title: '错误提示',
                content: "error:" + "真实姓名不能为空" + "",
                showCancel: false
            });
            return;
        }

        if (!ops.idcard) {
            wx.showModal({
                title: '错误提示',
                content: "error:" + "身份证不能为空" + "",
                showCancel: false
            });
            return;
        }
        var that = this;
        var usdata = {
            channelid: that.systemArgs.channelid,
            userid: that.systemArgs.userid,
            access_token: that.systemArgs.access_token,
            cardname: ops.cardname,
            idcard: ops.idcard,
            extra_data: JSON.stringify(that.systemArgs.extra_data),
            query: JSON.stringify(that.newQuery) || {}
        };
        var apiData = that.signFun(usdata);
        that._request({
            url: '/user/realname',
            data: apiData,
            success(res) {
                console.log(res);
                that.realDialog.show(false);
                wx.showModal({
                    title: '提示',
                    content: res.data.message,
                    showCancel: false,
                    success: respon => {
                        if (respon.confirm) {
                            if (res.data.code == '0') {
                                that.realNameFlag = 1;
                                if (that.isPayRealName) {
                                    that.pay(that.payData);
                                }
                            }
                        }
                    }
                });
            }
        });
    }

    // 后置授权
    updateUserInfo(ops) {
        var that = this;
        wx.login({
            success(res) {
                // wx.getUserInfo({
                // 	complete: resInfo => {
                //         console.log('[魔光] 后置授权获取用户信息', resInfo)
                var resInfo = '';
                var usdata = {
                    appid: that.systemArgs.appid || '',
                    channelid: that.systemArgs.channelid || '',
                    code: res.code || '',
                    encryptedData: resInfo.encryptedData || '',
                    iv: resInfo.iv || '',
                    query: JSON.stringify(that.newQuery) || {},
                    extra_data: JSON.stringify(that.systemArgs.extra_data) || '',
                    query: JSON.stringify(that.newQuery) || {}
                };
                var apiData = that.signFun(usdata);
                that._request({
                    url: '/login/wechat',
                    data: apiData,
                    success(res) {
                        if (res.data.code == 0) {
                            that.systemArgs.access_token = res.data.data.access_token;
                            that.systemArgs.userid = res.data.data.userid;
                            that.systemArgs.session_key = res.data.data.extData.session_key;
                            that.systemArgs.openid = res.data.data.extData.openid;
                            that.systemArgs.click_id = res.data.data.click_id;
                            that.systemArgs.login_code = res.data.code;
                            that.smallList(ops);
                        }
                    },
                    fail(res) {
                        wx.showModal({
                            title: '错误提示',
                            content: "error:" + res.data.msg + "",
                            confirmText: "重新登录",
                            showCancel: false,
                            success: () => {
                                login(opts);
                                return;
                            }
                        });
                    }
                });
                // 	}
                // })
            }
        });
    }

    // 敏感词判断
    msgSecCheck(ops) {
        var msgtData = ops;
        var that = this;
        if (that.systemArgs.isChannel) {
            channelSDK && channelSDK.channel_msgSecCheck(ops, ops.callback);
            return;
        }
        var usdata = {
            appid: that.systemArgs.appid || '',
            content: msgtData.content || '',
            access_token: that.systemArgs.access_token || '',
            channelid: that.systemArgs.channelid || '',
            openid: that.systemArgs.openid || '',
            scene: msgtData.scene || '',
            extra_data: JSON.stringify(that.systemArgs.extra_data) || '',
            query: JSON.stringify(that.newQuery) || {}
        };
        var apiData = that.signFun(usdata);
        that._request({
            url: '/msg/wxcheck',
            data: apiData,
            success(res) {
                ops.callback(res.data);
            }
        });
    }

    // 授权登录游戏
    // showLogin(ops){
    // 	var systemInfo = wx.getSystemInfoSync();
    // 	let button = wx.createUserInfoButton({
    // 		type: 'text',
    // 		text: '授权登录游戏',
    // 		style: {
    // 			top: systemInfo.windowHeight / 2 + systemInfo.windowHeight / 4,
    // 			left: systemInfo.windowWidth / 2 - 100,
    // 			width: 200,
    // 			height: 40,
    // 			lineHeight: 40,
    // 			backgroundColor: '#07c160',
    // 			color: '#ffffff',
    // 			textAlign: 'center',
    // 			fontSize: 16,
    // 			borderRadius: 4
    // 		}
    // 	})
    // 	button.onTap((res) => {
    // 		wx.showLoading({
    // 			title: '获取用户信息中..',
    // 		});
    // 		login(ops);
    // 		button.hide();
    // 		return;
    // 	})
    // }

    /**
        * 获取分享query
        */
    shareQueryStr() {
        console.log("[魔光] call shareQueryStr");
        var queryStr = "sourceId@" + this.systemArgs.channelid + "=" + this.systemArgs.userid;
        if (this.systemArgs.access_token.length < 1) {
            console.log('[魔光] 请在授权登录游戏后进行分享，否则无法识别到用户id');
        }
        return queryStr;
    }

    /**
        * 首次运行弹窗 
        */
    launchPop() {
        console.log("[魔光] launchPop");
        var LaunchOptionObj = wx.getLaunchOptionsSync();
        var title = LaunchOptionObj.query.title;
        var wx_appid = LaunchOptionObj.query.wx_appid;
        var content = LaunchOptionObj.query.content;
        var img = LaunchOptionObj.query.image;
        // 这个地方可以测试 title wx_appid content img 弹窗
        if (title && wx_appid && content) {
            if (window["sl_moDal"]) {
                var m = new window["sl_moDal"]();
                console.log("[魔光] 启动弹窗", LaunchOptionObj.query);
                this.reportClickPop({ event: "open", wx_appid, sence: '弹窗' });
                m.showModal(title, content, "立即前往", null, function () {
                    wx.navigateToMiniProgram({
                        appId: wx_appid,
                        path: 'index?ldid=wxSubscribe_' + window['SLWX'].systemArgs.channelid,
                        success: res => {
                            this.reportClickPop({ event: "click", wx_appid, sence: '弹窗' });
                        },
                        fail: res => {
                            this.reportClickPop({ event: "close", wx_appid, sence: '弹窗' });
                        }
                    });
                }.bind(this), null, true, img);
            }
        }
    }

    // 弹窗初始化
    showModalInit(callback) {
        var count = 0;
        var _this = this;
        var timer_id = setInterval(function () {
            count += 1;
            if (count <= 30) {
                if (window['egret'] && window['egret'].lifecycle.stage) {
                    // 显示浮标
                    window["sl_moDal"] = moDal;
                    callback();
                    clearInterval(timer_id);
                }
                if (window['Laya'] && window['Laya'].stage) {
                    window["sl_moDal"] = moDal_laya;
                    callback();
                    clearInterval(timer_id);
                }
            } else {
                clearInterval(timer_id);
            }
        }.bind(this), 1000);
        // 弹游戏列表
        var getPopGameListFunction = function () {
            return _this.popGameList;
        };

        var moDal_laya = /** @class */function () {
            function moDal_laya() {
                // 模态
                this.m_mark = null;
                this.m_container = null;
                this.alwaysOnTop();
            }
            /**
             * 窗口总在最前
             */
            moDal_laya.prototype.alwaysOnTop = function () {
                var _this_1 = this;
                setInterval(function () {
                    if (_this_1.m_container != null) {
                        var num = Laya.stage.numChildren;
                        Laya.stage.setChildIndex(_this_1.m_container, num - 1);
                    }
                }, 1000);
            };
            moDal_laya.prototype.showModal = function (cTitle, cContent, confirmText, cancelText, confirm, cancel, isHideCancel, popImgSrc) {
                var _this = this;
                if (popImgSrc) {
                    var parent_stage = Laya.stage;
                    _this.m_container = null; // 释放内存
                    _this.m_container = new Laya.Sprite();
                    _this.m_container.loadImage(popImgSrc);
                    parent_stage.addChild(_this.m_container);
                    _this.m_container.alpha = 0;
                    _this.m_container.on(Laya.Event.MOUSE_UP, this, function (e) {
                        parent_stage.removeChild(_this.m_container);
                        _this.m_container = null;
                        confirm && confirm();
                    });
                    var timerId = setInterval(() => {
                        if (_this.m_container.width != 0) {
                            if (_this.m_container.width <= parent_stage.width) {
                                _this.m_container.y = parent_stage.height / 2 - _this.m_container.height / 2;
                                _this.m_container.x = parseInt((parent_stage.width - _this.m_container.width) / 2);
                            }
                            if (_this.m_container.width >= parent_stage.width) {
                                var diff = (parent_stage.width - 20) / _this.m_container.width;
                                _this.m_container.x = 10;
                                _this.m_container.scaleY = diff;
                                _this.m_container.scaleX = diff;
                                // _this.m_container.height = diff * _this.m_container.height;
                                _this.m_container.y = (parent_stage.height / 2 - _this.m_container.height / 2) / diff;
                            }
                            _this.m_container.alpha = 1;
                            clearInterval(timerId);
                        }
                    }, 1000);
                    return;
                }
                var _this = this;
                var parent_stage = Laya.stage;
                this.m_container = null; // 释放内存
                this.m_container = new Laya.Sprite();
                var currentStage = this.m_container;
                parent_stage.addChild(this.m_container);
                currentStage.mouseEnabled = true;
                // 画mark遮罩
                this.m_mark = new Laya.Sprite();
                // 画矩形
                var y = parent_stage.height / 2 - 200;
                var x = 20;
                var w = parent_stage.width - 40;
                var h = 400;
                this.m_mark.graphics.drawRect(x, y, w, h, "#ffffff");
                this.m_mark.mouseEnabled = true;
                // 画标题
                var title = new Laya.Label();
                title.width = w;
                title.x = x;
                title.y = y + 10;
                title.text = cTitle;
                title.bold = true;
                title.align = Laya.Stage.ALIGN_CENTER;
                title.fontSize = 30;
                title.color = "#000000";
                // 画正文
                var content = new Laya.Label();
                content.width = w - 40;
                content.x = x + 20;
                content.y = y + 30 + 30;
                content.text = cContent;
                content.align = Laya.Stage.ALIGN_LEFT;
                content.wordWrap = true;
                content.fontSize = 30;
                content.color = "#49494d";
                if (!isHideCancel) {
                    // 画确定
                    var button = new Laya.Label();
                    var button_x = x + w / 2 + 20;
                    var button_y = y + h - 70;
                    var button_w = w / 2 - 40;
                    var button_h = 50;
                    this.m_mark.graphics.drawRect(button_x, button_y, button_w, button_h, "#449d44");
                    button.text = confirmText ? confirmText : "确定";
                    button.color = "#FFFFFF";
                    button.x = button_x;
                    button.y = button_y + 5;
                    button.fontSize = 40;
                    button.align = Laya.Stage.ALIGN_CENTER;
                    button.width = button_w;
                    button.height = button_h;
                    button.mouseEnabled = true;
                    button.on(Laya.Event.MOUSE_UP, this, function (e) {
                        c_confirm(e);
                    });
                    // 画取消
                    var button2 = new Laya.Label();
                    button_x = x + 20;
                    button_y = y + h - 70;
                    button_w = w / 2 - 40;
                    button_h = 50;
                    this.m_mark.graphics.drawRect(button_x, button_y, button_w, button_h, "#ff0000");
                    button2.text = cancelText ? cancelText : "取消";
                    button2.color = "#FFFFFF";
                    button2.x = button_x;
                    button2.y = button_y + 5;
                    button2.fontSize = 40;
                    button2.align = Laya.Stage.ALIGN_CENTER;
                    button2.width = button_w;
                    button2.height = button_h;
                    button2.mouseEnabled = true;
                    button2.on(Laya.Event.MOUSE_UP, this, function (e) {
                        c_cancel(e);
                    });
                } else {
                    // 画确定
                    var button = new Laya.Label();
                    // var button_x = x + w / 2 + 20;
                    var button_y = y + h - 70;
                    var button_w = w / 2 - 40;
                    var button_x = x + 40 + button_w / 2;
                    var button_h = 50;
                    this.m_mark.graphics.drawRect(button_x, button_y, button_w, button_h, "#449d44");
                    button.text = confirmText ? confirmText : "确定";
                    button.color = "#FFFFFF";
                    button.x = button_x;
                    button.y = button_y + 5;
                    button.fontSize = 40;
                    button.align = Laya.Stage.ALIGN_CENTER;
                    button.width = button_w;
                    button.height = button_h;
                    button.mouseEnabled = true;
                    button.on(Laya.Event.MOUSE_UP, this, function (e) {
                        c_confirm(e);
                    });
                }
                var c_cancel = function (e) {
                    if (cancel) {
                        cancel();
                    }
                    c_celar();
                };
                var c_confirm = function (e) {
                    if (confirm) {
                        confirm();
                        // TODO 这里塞sdk里面的时候需要恢复
                        var result = confirm();
                        if (result == "弹游戏列表") {
                            if (getPopGameListFunction()) {
                                getPopGameListFunction()();
                            }
                        }
                    }
                    c_celar();
                };
                var c_celar = function () {
                    parent_stage.removeChild(currentStage);
                    _this.m_container = null;
                };
                currentStage.addChild(this.m_mark);
                currentStage.addChild(button2);
                currentStage.addChild(button);
                currentStage.addChild(title);
                currentStage.addChild(content);
            };
            return moDal_laya;
        }();

        var moDal = /** @class */function () {
            function moDal() {
                // 模态
                this.m_mark = null;
                this.m_container = null;
                this.m_shape = null;
                this.m_title = null;
                this.m_content = null;
                this.m_button = null;
                this.m_button2 = null;
                this.m_confirm_text = null;
                this.m_cancel_text = null;
                this.alwaysOnTop();
            }
            moDal.prototype.alwaysOnTop = function () {
                var _this = this;
                var parent_stage = window['egret'].lifecycle.stage;
                setInterval(function () {
                    if (_this.m_container != null) {
                        var num = parent_stage.numChildren;
                        parent_stage.setChildIndex(_this.m_container, num - 1);
                    }
                }, 1000);
            };
            // title:String,content:String,confirm,cancel
            moDal.prototype.showModal = function (cTitle, cContent, confirmText, cancelText, confirm, cancel, isHideCancel, popImgSrc) {
                var _this = this;
                if (popImgSrc) {
                    var parent_stage = egret.lifecycle.stage;
                    _this.m_container = null; // 释放内存
                    _this.m_container = new egret.Sprite();
                    // 创建 ImageLoader 对象
                    var loader = new egret.ImageLoader();
                    // 添加加载完成侦听
                    loader.addEventListener(egret.Event.COMPLETE, function (e) {
                        _this.m_container.width = 100;
                        _this.m_container.height = 100;
                        var bitmapData = e.target.data;
                        // 创建纹理对象
                        var texture = new egret.Texture();
                        texture.bitmapData = bitmapData;
                        // 创建 Bitmap 进行显示
                        var _bird = new egret.Bitmap(texture);
                        if (_bird.width <= parent_stage.stageWidth) {
                            _bird.y = parent_stage.stageHeight / 2 - _bird.height / 2;
                            _bird.x = parseInt((parent_stage.stageWidth - _bird.width) / 2);
                        } else {
                            var diff = (parent_stage.stageWidth - 20) / _bird.width;
                            // _bird.width = (parent_stage.stageWidth - 20);
                            // _bird.height = _bird.height*diff;
                            _this.m_container.addChild(_bird);
                            _bird.scaleY = diff;
                            _bird.scaleX = diff;
                            _bird.x = 10;
                            _bird.y = (parent_stage.stageHeight / 2 - _bird.height / 2) / diff;
                        }
                        _this.m_container.addChild(_bird);
                        parent_stage.addChild(_this.m_container);
                        _bird.touchEnabled = true;
                        _bird.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function () {
                            parent_stage.removeChild(_this.m_container);
                            _this.m_container = null;
                            confirm && confirm();
                        }, this);
                    }, this);
                    // 开始加载
                    loader.load(popImgSrc);
                    return;
                }
                var parent_stage = egret.lifecycle.stage;
                this.m_container = null; // 释放内存
                this.m_container = new egret.Sprite();
                this.m_container.$setAlpha(0);
                parent_stage.addChild(this.m_container);
                var currentStage = this.m_container;
                var count = 0;
                // 淡入动画
                var timer_id_20201119 = setInterval(function () {
                    count += 0.05;
                    if (count <= 1) {
                        _this.m_container.$setAlpha(count);
                    } else {
                        clearInterval(timer_id_20201119);
                    }
                }, 20);
                // 画mark遮罩
                this.m_mark = new egret.Shape();
                this.m_mark.graphics.beginFill(0x000000, 0.5);
                this.m_mark.graphics.drawRect(0, 0, parent_stage.stageWidth, parent_stage.stageHeight);
                this.m_mark.graphics.endFill();
                this.m_mark.touchEnabled = true;
                currentStage.addChild(this.m_mark);
                // 画矩形
                this.m_shape = new egret.Shape();
                var y = parent_stage.stageHeight / 2 - 200;
                var x = 20;
                var w = parent_stage.stageWidth - 40;
                var h = 400;
                // 绘制一个矩形
                this.m_shape.graphics.beginFill(0xffffff, 1);
                this.m_shape.graphics.lineStyle(0x000000);
                this.m_shape.graphics.drawRect(x, y, w, h);
                this.m_shape.graphics.endFill();
                currentStage.addChild(this.m_shape);
                // 绘制标题
                this.m_title = new egret.TextField();
                this.m_title.text = cTitle;
                this.m_title.bold = true;
                currentStage.addChild(this.m_title);
                this.m_title.width = w;
                this.m_title.x = x;
                this.m_title.y = y + 10;
                this.m_title.textColor = 0x000000;
                this.m_title.textAlign = egret.HorizontalAlign.CENTER;
                // 绘制正文
                this.m_content = new egret.TextField();
                this.m_content.text = cContent;
                this.m_content.bold = false;
                this.m_content.textColor = 0x49494d;
                this.m_content.x = x + 40;
                this.m_content.y = this.m_title.y + this.m_title.size + 40;
                this.m_content.width = w - 80;
                currentStage.addChild(this.m_content);
                if (!isHideCancel) {
                    // 绘制一个可以点击的按钮
                    this.m_button = new egret.Shape();
                    var button_x = x + w / 2 + 20;
                    var button_y = y + h - 70;
                    var button_w = w / 2 - 40;
                    var button_h = 50;
                    this.m_button.graphics.beginFill(0x449d44);
                    this.m_button.graphics.drawRect(button_x, button_y, button_w, button_h);
                    this.m_button.graphics.endFill();
                    currentStage.addChild(this.m_button);
                    this.m_confirm_text = new egret.TextField();
                    this.m_confirm_text.text = confirmText ? confirmText : "确定";
                    this.m_confirm_text.bold = true;
                    this.m_confirm_text.textColor = 0xFFFFFF;
                    currentStage.addChild(this.m_confirm_text);
                    this.m_confirm_text.x = button_x;
                    this.m_confirm_text.y = button_y + 5;
                    this.m_confirm_text.width = button_w;
                    this.m_confirm_text.height = button_h - 10;
                    this.m_confirm_text.textAlign = egret.HorizontalAlign.CENTER;
                    this.m_confirm_text.size = button_h - 10;
                    this.m_button.touchEnabled = true;
                    this.m_button.addEventListener(egret.TouchEvent.TOUCH_TAP, function (evt) {
                        parent_stage.removeChild(currentStage);
                        this.m_container = null;
                        if (confirm) {
                            confirm();
                            // TODO 这里塞sdk里面的时候需要恢复
                            var result = confirm();
                            if (result == "弹游戏列表") {
                                if (getPopGameListFunction()) {
                                    getPopGameListFunction()();
                                }
                            }
                        }
                    }.bind(this), this);
                    // 绘制一个可以点击的按钮
                    this.m_button2 = new egret.Shape();
                    var button_x = x + 20;
                    var button_y = y + h - 70;
                    var button_w = w / 2 - 40;
                    var button_h = 50;
                    this.m_button2.graphics.beginFill(0xff0000);
                    this.m_button2.graphics.drawRect(x + 20, y + h - 70, w / 2 - 40, 50);
                    this.m_button2.graphics.endFill();
                    currentStage.addChild(this.m_button2);
                    this.m_cancel_text = new egret.TextField();
                    this.m_cancel_text.text = cancelText ? cancelText : "取消";
                    this.m_cancel_text.bold = true;
                    this.m_cancel_text.textColor = 0xFFFFFF;
                    currentStage.addChild(this.m_cancel_text);
                    this.m_cancel_text.x = button_x;
                    this.m_cancel_text.y = button_y + 5;
                    this.m_cancel_text.width = button_w;
                    this.m_cancel_text.height = button_h - 10;
                    this.m_cancel_text.textAlign = egret.HorizontalAlign.CENTER;
                    this.m_cancel_text.size = button_h - 10;
                    this.m_button2.touchEnabled = true;
                    this.m_button2.addEventListener(egret.TouchEvent.TOUCH_TAP, function (evt) {
                        parent_stage.removeChild(currentStage);
                        this.m_container = null;
                        if (cancel) {
                            cancel();
                        }
                    }.bind(this), this);
                } else {
                    // 绘制一个可以点击的按钮
                    this.m_button = new egret.Shape();
                    // var button_x = x + w / 2 + 20;
                    var button_y = y + h - 70;
                    var button_w = w / 2 - 40;
                    var button_x = x + 40 + button_w / 2;
                    var button_h = 50;
                    this.m_button.graphics.beginFill(0x449d44);
                    this.m_button.graphics.drawRect(button_x, button_y, button_w, button_h);
                    this.m_button.graphics.endFill();
                    currentStage.addChild(this.m_button);
                    this.m_confirm_text = new egret.TextField();
                    this.m_confirm_text.text = confirmText ? confirmText : "确定";
                    this.m_confirm_text.bold = true;
                    this.m_confirm_text.textColor = 0xFFFFFF;
                    currentStage.addChild(this.m_confirm_text);
                    this.m_confirm_text.x = button_x;
                    this.m_confirm_text.y = button_y + 5;
                    this.m_confirm_text.width = button_w;
                    this.m_confirm_text.height = button_h - 10;
                    this.m_confirm_text.textAlign = egret.HorizontalAlign.CENTER;
                    this.m_confirm_text.size = button_h - 10;
                    this.m_button.touchEnabled = true;
                    this.m_button.addEventListener(egret.TouchEvent.TOUCH_TAP, function (evt) {
                        parent_stage.removeChild(currentStage);
                        this.m_container = null;
                        if (confirm) {
                            confirm();
                            // TODO 这里塞sdk里面的时候需要恢复
                            var result = confirm();
                            if (result == "弹游戏列表") {
                                if (getPopGameListFunction()) {
                                    getPopGameListFunction()();
                                }
                            }
                        }
                    }.bind(this), this);
                }
            };
            return moDal;
        }();
    }

    showFun() {
        var url = "https://frontcdn.17a.cn/static/images/floatIcon/slFloatIcon_1.png";
        var that = this;
        cc.loader.load({ url, type: 'png' }, function (err, spriteFrame) {
            var node = new cc.Node("Sprite1");
            var sprite = node.addComponent(cc.Sprite);
            sprite.spriteFrame = new cc.SpriteFrame(spriteFrame);
            node.x = 50;
            node.y = cc.winSize.height - 50;
            var scalex = 100 / spriteFrame.width;
            var scaley = 100 / spriteFrame.height;
            node.scaleX = scalex;
            node.scaleY = scaley;
            that.ismove = false;
            sprite.node.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
                if (!that.allow_to_open) {
                    node.x = event.touch._point.x;
                    node.y = event.touch._point.y;
                    that.ismove = true;
                }
            });
            sprite.node.on(cc.Node.EventType.TOUCH_END, function (event) {
                if (!that.allow_to_open) {
                    setTimeout(() => {
                        that.ismove = false;
                    }, 400);
                    if (parseInt(event.target.y) < 50) {
                        event.target.y = 50;
                    }
                    if (parseInt(event.target.y) > cc.winSize.height - 50) {
                        event.target.y = cc.winSize.height - 50;
                    }
                    if (parseInt(event.target.x) > cc.winSize.width / 2 && parseInt(event.target.x) < cc.winSize.width) {
                        var cctimerId = setInterval(() => {
                            event.target.x = parseInt(event.target.x);
                            event.target.x += (cc.winSize.width - 50 - parseInt(event.target.x)) / 2;
                            if (cc.winSize.width - 52 < parseInt(event.target.x)) {
                                clearInterval(cctimerId);
                            } else if (parseInt(event.target.x) == '463') {
                                event.target.x = 50;
                                clearInterval(cctimerId);
                            }
                        }, 100);
                    } else if (parseInt(event.target.x) > cc.winSize.width) {
                        event.target.x = cc.winSize.width - 50;
                    } else if (parseInt(event.target.x) < 50) {
                        event.target.x = 50;
                    } else {
                        var cctimerId = setInterval(() => {
                            event.target.x = parseInt(event.target.x);
                            event.target.x -= (parseInt(event.target.x) - 50) / 2;
                            if (event.target.x === 50) {
                                clearInterval(cctimerId);
                            }
                        }, 100);
                    }
                    if (!that.ismove) {
                        that.show2Fun(event.target);
                    }
                }
            });
            cc.director.getScene().addChild(node);
        });
    }

    show2Fun(data) {
        var url2 = "https://frontcdn.17a.cn/static/images/floatIcon/slFloatIcon_2.png";
        var that = this;
        var node;
        node = new cc.Node("Sprite2");
        var sprite = node.addComponent(cc.Sprite);
        that.allow_to_open = true;
        cc.loader.load({ url: url2, type: 'png' }, function (err, spriteFrame) {
            sprite.spriteFrame = new cc.SpriteFrame(spriteFrame);
            if (data.x <= 50) {
                node.x = 150;
            } else {
                node.x = data.x - 100;
            }
            node.y = data.y;
            var scalex = 100 / spriteFrame.width;
            var scaley = 100 / spriteFrame.height;
            node.scaleX = scalex;
            node.scaleY = scaley;
            sprite.node.on(cc.Node.EventType.TOUCH_END, function (event) {
                that.toMiniD();
            });
            cc.director.getScene().addChild(node);
            setTimeout(() => {
                node.destroy();
                that.allow_to_open = false;
            }, 2000);
        });
    }

    // 画浮标 白鹭引擎
    showFloatIcon() {
        var __extends = this && this.__extends || function () {
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf || {
                    __proto__: []
                } instanceof Array && function (d, b) {
                    d.__proto__ = b;
                } || function (d, b) {
                    for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
                };
                return extendStatics(d, b);
            };
            return function (d, b) {
                extendStatics(d, b);

                function __() {
                    this.constructor = d;
                }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            };
        }();
        /**
         * 魔光悬浮图标类精灵
         * 当前demo所使用的白鹭引擎版本：5.3.10
         */
        var slFloatIcon = /** @class */function (_super) {
            __extends(slFloatIcon, _super);
            /**
             * 构造函数
             * @param ops Object ops.data 游戏列表;ops.clickUpdata点击升级后的事件
             */
            function slFloatIcon(ops) {
                var that = _super.call(this) || this;
                that._clickUpdate = function () {
                    this.msg('您点击了升级。');
                }.bind(that);
                // 类成员属性放这里
                // 图片 菜单相关
                that._imgSrc = 'https://frontcdn.17a.cn/static/images/floatIcon/slFloatIcon_1.png'; // 网络图片
                that._touchStatus = false; // 当前触摸状态，按下时，值为true
                that._touchMoveStatus = false; // 当前移动状态，移动时，值为true
                that._distance = new egret.Point(); // 鼠标点击时，鼠标全局坐标与_bird的位置差
                that._imgSrc2 = 'https://frontcdn.17a.cn/static/images/floatIcon/slFloatIcon_2.png'; // 网络图片
                // stage
                that._stage = window['egret'].lifecycle.stage;
                that._stage_width = window['egret'].lifecycle.stage.stageWidth;
                that._stage_height = window['egret'].lifecycle.stage.stageHeight;
                // 微信创建用户授权信息按钮
                that.button = null;
                // 推荐
                that.one_data = function () {
                    return [];
                };
                that.one_game_list = null;
                that.one_container = null;
                if (ops) {
                    that._clickUpdate = ops.clickUpdate;
                    // TODO 加到sdk 的时候需要恢复下
                    this.setOneData(ops.data);
                }
                that.createView();
                that.showOneGameList();
                return that;
            }
            slFloatIcon.prototype.createView = function () {
                // 加载菜单
                this.loadImg(this._imgSrc, function (event) {
                    this._bird = this.onLoadComplete(event);
                    // 监听鼠标或者手指按下和放开的事件
                    this._bird.touchEnabled = true;
                    this._bird.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.mouseDown, this);
                    this._bird.addEventListener(egret.TouchEvent.TOUCH_END, this.mouseUp, this);
                }.bind(this));
                this._stage.addChild(this);
                // 窗口总在最前
                this.alwaysOnTop();
            };
            // 加载图片
            slFloatIcon.prototype.loadImg = function (src, complete) {
                // 创建 ImageLoader 对象
                var loader = new egret.ImageLoader();
                // 添加加载完成侦听
                loader.addEventListener(egret.Event.COMPLETE, complete, this);
                // 开始加载
                loader.load(src);
            };
            // 监听加载完毕后处理事件
            slFloatIcon.prototype.onLoadComplete = function (event) {
                var loader = event.target;
                // 获取加载到的纹理对象
                var bitmapData = loader.data;
                // 创建纹理对象
                var texture = new egret.Texture();
                texture.bitmapData = bitmapData;
                // 创建 Bitmap 进行显示
                var _bird = new egret.Bitmap(texture);
                // 修正尺寸 自适应比例 在1280宽下是1:1
                var _proportion = this._stage_width / 1280;
                _bird.width = _proportion * _bird.width;
                _bird.height = _proportion * _bird.height;
                if (this._stage_width > 1135) {
                    _bird.width = _bird.width * 0.5;
                    _bird.height = _bird.height * 0.5;
                }
                this.addChild(_bird);
                return _bird;
            };
            /**
             * 鼠标按下或者手指按下
             */
            slFloatIcon.prototype.mouseDown = function (evt) {
                this._touchStatus = true;
                this._distance.x = evt.stageX - this._bird.x;
                this._distance.y = evt.stageY - this._bird.y;
                this._bird.alpha = 1;
                this._stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.mouseMove, this);
            };
            /**
             * 鼠标移动或者手指移动
             */
            slFloatIcon.prototype.mouseMove = function (evt) {
                if (this._touchStatus) {
                    var diffX = evt.stageX - this._distance.x;
                    var diffY = evt.stageY - this._distance.y;
                    if (diffX >= 0 && diffX <= this._stage_width - this._bird.width) {
                        this._bird.x = diffX;
                        this._touchMoveStatus = true;
                    }
                    if (diffY >= 0 && diffY <= this._stage.height - this._bird.height) {
                        this._bird.y = diffY;
                        this._touchMoveStatus = true;
                    }
                    if (this._touchMoveStatus && this._list) {
                        // 列表跟随菜单图标
                        this.followMenu();
                    }
                }
            };
            /**
             * 对着列表按下
             */
            slFloatIcon.prototype.listMouseDown = function (evt) {
                this._clickUpdate();
            };
            /**
             * 松开手指或者鼠标 _bird
             */
            slFloatIcon.prototype.mouseUp = function (evt) {
                var that = this;
                if (!this._touchMoveStatus) {
                    if (this._list) {
                        this._clearList();
                        this._list = null;
                        // 清除授权按钮
                        if (this.button != null) {
                            this.button.hide();
                            this.button.destroy();
                            this.button = null;
                        }
                    } else {
                        this.loadImg(this._imgSrc2, function (event) {
                            this._list = this.onLoadComplete(event);
                            // 监听鼠标或者手指按下和放开的事件
                            this._list.touchEnabled = true;
                            this.followMenu();
                            this._list.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.listMouseDown, this);
                            var currentStage = this;
                            this._clearList = function () {
                                currentStage.removeChild(this._list);
                                currentStage.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.listMouseDown, this);
                                currentStage._clearList = null;
                            }.bind(this);
                            // 创建授权按钮
                            this.createWxUserInfoButotn(this._list);
                        }.bind(this));
                    }
                } else {
                    // 清除时钟
                    clearInterval(this._timerId);
                    var _proportion = this._stage_width / 1280;
                    if (this._bird.x + this._bird.width / 2 <= this._stage_width / 2) {
                        // 向左缓动
                        this._timerId = setInterval(function () {
                            if (that._bird.x - 40 * _proportion >= 0) {
                                that._bird.x -= 40 * _proportion;
                            } else {
                                that._bird.x = 0;
                                setTimeout(() => {
                                    that._bird.x -= that._bird.width / 2;
                                    that._bird.alpha = 0.8;
                                    if (that._list) {
                                        that.followMenu();
                                    }
                                }, 1000);
                                clearInterval(that._timerId);
                            }
                            if (that._list) {
                                that.followMenu();
                            }
                        }, 20);
                    } else if (this._bird.x + this._bird.width / 2 >= this._stage_width / 2) {
                        // 向右缓动
                        this._timerId = setInterval(function () {
                            if (that._bird.x + 40 * _proportion <= that._stage_width - that._bird.width) {
                                that._bird.x += 40 * _proportion;
                            } else {
                                that._bird.x = that._stage_width - that._bird.width;
                                setTimeout(() => {
                                    that._bird.x += that._bird.width / 2;
                                    that._bird.alpha = 0.8;
                                    if (that._list) {
                                        that.followMenu();
                                    }
                                }, 1000);
                                clearInterval(that._timerId);
                            }
                            if (that._list) {
                                that.followMenu();
                            }
                        }, 20);
                    }
                }
                this._touchStatus = false;
                this._touchMoveStatus = false;
                this._stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.mouseMove, this);
            };
            /**
             * 跟随菜单
             */
            slFloatIcon.prototype.followMenu = function () {
                var _proportion = this._stage_width / 1280;
                if (this._bird.x <= this._stage_width / 2) {
                    this._list.x = 20 * _proportion + this._bird.x + this._bird.width;
                } else {
                    this._list.x = this._bird.x - 20 * _proportion - this._list.width;
                }
                this._list.y = this._bird.y;
                var wx = window['wx'];
                if (this.button != null) {
                    var sysInfo = wx.getSystemInfoSync();
                    this.button.style.left = this._list.x / this._stage.stageWidth * sysInfo.screenWidth;
                    this.button.style.top = this._list.y / this._stage.stageHeight * sysInfo.screenHeight;
                }
            };
            /**
             * 微信的显示提示
             * 调用微信的接口时，可以从全局window对象里面拿wx的对象出来用，为避免编译报错，请按照下面的格式进行调用。
             */
            slFloatIcon.prototype.msg = function (contetn) {
                var wx = window['wx'] || null;
                if (wx) {
                    wx.showToast({
                        title: contetn,
                        icon: 'none'
                    });
                }
            };
            /**
             * 窗口总在最前
             */
            slFloatIcon.prototype.alwaysOnTop = function () {
                var that = this;
                setInterval(function () {
                    var num = that._stage.numChildren;
                    window['egret'].lifecycle.stage.setChildIndex(that, num - 1);
                }, 1000);
            };
            /**
             * 创建微信授权按钮
             */
            slFloatIcon.prototype.createWxUserInfoButotn = function (example) {
                if (this.button != null) {
                    this.button.hide();
                    this.button.destroy();
                    this.button = null;
                }
                // 创建button
                var wx = window['wx'];
                var that = this;
                this.button = wx.createUserInfoButton();
                var sysInfo = wx.getSystemInfoSync();
                this.button.text = '';
                this.button.style.width = example.width / this._stage.stageWidth * sysInfo.screenWidth;
                this.button.style.height = example.height / this._stage.stageHeight * sysInfo.screenHeight;
                // 跟随example
                this.button.style.left = example.x / this._stage.stageWidth * sysInfo.screenWidth;
                this.button.style.top = example.y / this._stage.stageHeight * sysInfo.screenHeight;
                // 绑定点击事件
                this.button.onTap(function () {
                    wx.getUserInfo({
                        success: function (result) {
                            // 这个地方还得调外部合并的 login(window.loginOpts);
                            // TODO 
                            // login(window.loginOpts);
                            that._clickUpdate();
                            that._clearList();
                            that._list = null;
                            if (that.button != null) {
                                that.button.hide();
                                that.button.destroy();
                                that.button = null;
                            }
                        }
                    });
                });
            };
            slFloatIcon.prototype.showOneGameList = function () {
                this.one_game_list = new OneGameList(this, this.one_data);
            };
            slFloatIcon.prototype.setOneData = function (data) {
                this.one_data = data;
            };
            slFloatIcon.prototype.hideOneGameList = function () {
                this.one_game_list.remove();
                this.one_game_list = null;
            };
            /**
             * 弹游戏列表
             */
            slFloatIcon.prototype.popGameList = function () {
                var e = {
                    stopPropagation: function () {
                        console.log('[魔光] slFloatIcon 强弹游戏列表');
                    }
                };
                this.hideOneGameList();
                this.showOneGameList();
            };
            return slFloatIcon;
        }(egret.Sprite);

        var OneGameList = /** @class */function () {
            function OneGameList(obj, getData) {
                this.one_container = new egret.Sprite();
                this.data = [];
                this.floatIcon = obj;
                this.isRender = false;
                if (getData) {
                    this.data = getData();
                }
                this.initView();
            }
            OneGameList.prototype.getMain = function () {
                return this.one_container;
            };
            OneGameList.prototype.initView = function () {
                if (this.data.length <= 0) {
                    return;
                }
                this.isRender = true;
                this.floatIcon.addChild(this.one_container);
                var currentStage = this.one_container;
                currentStage.$setAlpha(0);
                // 画矩形
                var x = 0;
                var y = this.floatIcon._stage_height / 3;
                var w = this.floatIcon._stage_width * 0.7;
                // 一行放6个，计算需要多少行 间距10
                var item_wh = (w - 30 * 5) / 2;
                // 高度底部预留20 顶部预留20 
                var h = w * 1.353;
                var channelId = window['SLWX'].systemArgs.channelId;
                var BG_URL = 'https://frontcdn.17a.cn/MangLingWXSDK/recommend/' + channelId + '/' + channelId + '_bg.png';
                var SWITCH_BTN_URL = 'https://frontcdn.17a.cn/MangLingWXSDK/recommend/' + channelId + '/' + channelId + '_switch_left.png';
                var SWITCH_BTN_URL2 = 'https://frontcdn.17a.cn/MangLingWXSDK/recommend/' + channelId + '/' + channelId + '_switch_right.png';
                // 画背景
                this.loadImg(BG_URL, function (event) {
                    var loader = event.target;
                    // 获取加载到的纹理对象
                    var bitmapData = loader.data;
                    // 创建纹理对象
                    var texture = new egret.Texture();
                    texture.bitmapData = bitmapData;
                    // 创建 Bitmap 进行显示
                    var _bird = new egret.Bitmap(texture);
                    _bird.x = x;
                    _bird.y = y;
                    _bird.width = w;
                    _bird.height = h;
                    currentStage.addChild(_bird);
                    _bird.touchEnabled = false;
                    pushItem();
                }.bind(this));
                // 画收缩开关
                var button_switch = null;
                var button_switch2 = null;
                var isLeft = true;
                this.one_container.x = 0 - w;
                var animationPop = function () {
                    var that = this;
                    if (isLeft) {
                        var timerId_1 = setInterval(function () {
                            if (that.one_container.x <= 0 - w) {
                                that.one_container.x = 0 - w;
                                clearInterval(timerId_1);
                                currentStage.removeChild(button_switch);
                                currentStage.addChild(button_switch2);
                                isLeft = false;
                                return;
                            }
                            that.setX(that.one_container.x - 50);
                        }, 30);
                    } else {
                        var timerId_2 = setInterval(function () {
                            if (that.one_container.x >= 0) {
                                that.one_container.x = 0;
                                clearInterval(timerId_2);
                                currentStage.removeChild(button_switch2);
                                currentStage.addChild(button_switch);
                                isLeft = true;
                                return;
                            }
                            if (that.one_container.x + 50 >= 0) {
                                that.setX(0);
                                return;
                            }
                            that.setX(that.one_container.x + 50);
                        }, 30);
                    }
                }.bind(this);
                this.loadImg(SWITCH_BTN_URL, function (event) {
                    var loader = event.target;
                    // 获取加载到的纹理对象
                    var bitmapData = loader.data;
                    // 创建纹理对象
                    var texture = new egret.Texture();
                    texture.bitmapData = bitmapData;
                    // 创建 Bitmap 进行显示
                    var _bird = new egret.Bitmap(texture);
                    _bird.x = w;
                    _bird.y = y + h / 5 * 4;
                    _bird.width = 40;
                    _bird.height = 70;
                    currentStage.addChild(_bird);
                    _bird.touchEnabled = true;
                    _bird.addEventListener(egret.TouchEvent.TOUCH_END, animationPop, this.floatIcon);
                    button_switch = _bird;
                    currentStage.removeChild(button_switch);
                }.bind(this));
                this.loadImg(SWITCH_BTN_URL2, function (event) {
                    var loader = event.target;
                    // 获取加载到的纹理对象
                    var bitmapData = loader.data;
                    // 创建纹理对象
                    var texture = new egret.Texture();
                    texture.bitmapData = bitmapData;
                    // 创建 Bitmap 进行显示
                    var _bird = new egret.Bitmap(texture);
                    _bird.x = w;
                    _bird.y = y + h / 5 * 4;
                    _bird.width = Math.round(40 / 640 * this.floatIcon._stage_width);
                    _bird.height = Math.round(70 / 40 * _bird.width);
                    currentStage.addChild(_bird);
                    _bird.touchEnabled = true;
                    _bird.addEventListener(egret.TouchEvent.TOUCH_END, animationPop, this.floatIcon);
                    button_switch2 = _bird;
                    isLeft = false;
                }.bind(this));
                var pushItem = function () {
                    // 画item
                    var padding = 30;
                    var x_count = padding;
                    var y_count = 0;
                    var i = 0;
                    this.data.map(function (item, index, arr) {
                        // 监听
                        var gotoMiniD = function () {
                            window['wx'].navigateToMiniProgram({
                                appId: item.wx_appid,
                                path: 'index?adsId=wxHotGame_' + window['SLWX'].systemArgs.channelId,
                                success: result => {
                                    window['SLWX'].reportClickPop({
                                        event: 'click',
                                        wx_appid: item.wx_appid,
                                        sence: '游戏推荐'
                                    });
                                },
                                fail: result => {
                                    window['SLWX'].reportClickPop({
                                        event: 'close',
                                        wx_appid: item.wx_appid,
                                        sence: '游戏推荐'
                                    });
                                }
                            });
                        };
                        // 画图标
                        var bird_x = 25 + x + x_count + i * item_wh;
                        var bird_y = 20 + y + item_wh * 0.6 + y_count * (item_wh + item_wh * 0.6) + 20;
                        var hrefStr = item.game_icon.indexOf('http') == -1 ? 'https://sdk.silanggame.com' + item.game_icon : item.game_icon;
                        this.loadImg(hrefStr, function (event) {
                            var loader = event.target;
                            // 获取加载到的纹理对象
                            var bitmapData = loader.data;
                            // 创建纹理对象
                            var texture = new egret.Texture();
                            texture.bitmapData = bitmapData;
                            // 创建 Bitmap 进行显示
                            var _bird = new egret.Bitmap(texture);
                            _bird.x = bird_x;
                            _bird.y = bird_y;
                            _bird.width = item_wh;
                            _bird.height = item_wh;
                            currentStage.addChild(_bird);
                            _bird.touchEnabled = true;
                            _bird.addEventListener(egret.TouchEvent.TOUCH_END, gotoMiniD, this.floatIcon);
                        }.bind(this));
                        // 画图标下面的标题
                        var _title = new egret.TextField();
                        _title.text = item.channel_name;
                        _title.bold = false;
                        currentStage.addChild(_title);
                        _title.width = item_wh;
                        _title.x = bird_x;
                        _title.size = item_wh * 0.2;
                        _title.y = item_wh * 0.15 + bird_y + item_wh;
                        _title.textColor = 0xFFFFFF;
                        _title.textAlign = egret.HorizontalAlign.CENTER;
                        _title.touchEnabled = true;
                        _title.addEventListener(egret.TouchEvent.TOUCH_END, gotoMiniD, this.floatIcon);
                        if ((index + 1) % 2 == 0) {
                            y_count += 1;
                            x_count = padding;
                            i = 0;
                        } else {
                            x_count += padding;
                            i += 1;
                        }
                    }.bind(this));
                    currentStage.$setAlpha(1);
                }.bind(this);
            };
            OneGameList.prototype.isShow = function () {
                return this.isRender;
            };
            OneGameList.prototype.setX = function (x) {
                if (!this.isShow()) {
                    return;
                }
                this.one_container.$setX(x);
            };
            OneGameList.prototype.remove = function () {
                if (!this.isShow()) {
                    return;
                }
                this.floatIcon.removeChild(this.one_container);
            };
            OneGameList.prototype.setY = function (y) {
                if (!this.isShow()) {
                    return;
                }
                this.one_container.$setY(y);
            };
            OneGameList.prototype.loadImg = function (src, complete) {
                // 创建 ImageLoader 对象
                var loader = new egret.ImageLoader();
                // 添加加载完成侦听
                loader.addEventListener(egret.Event.COMPLETE, complete, this);
                // 开始加载
                loader.load(src);
            };
            return OneGameList;
        }();

        var _that = this;
        // 绑定点击事件
        var sl_floatIcon = new slFloatIcon({
            clickUpdate: () => {
                this.isShowTokenDialog = false;
                this.toMiniD();
            },
            data: function () {
                if (_that.onegamelist) {
                    return _that.onegamelist;
                }
                return [];
            }
        });
        this.popGameList = sl_floatIcon.popGameList.bind(sl_floatIcon);
    }

    // 画浮标 laya引擎
    showFloatIconByLaya() {
        // 使用tsc转译成js的时候需要去掉export
        var slFloatIcon = /** @class */function () {
            function slFloatIcon(ops) {
                this._clickUpdate = function () {
                    this.msg('您点击了升级');
                };
                // 类成员属性放这里
                // 图片 菜单相关
                this._imgSprite = new Laya.Sprite();
                this._imgSrc = 'https://frontcdn.17a.cn/static/images/floatIcon/slFloatIcon_1.png'; // 网络图片地址
                this._touchStatus = false; // 当前触摸状态，按下时，值为true
                this._touchMoveStatus = false; // 当前移动状态，移动时，值为true
                this._distance = new Laya.Point(); // 鼠标点击时，鼠标全局坐标与_bird的位置差
                this._imgSrc2 = 'https://frontcdn.17a.cn/static/images/floatIcon/slFloatIcon_2.png'; // 网络图片地址
                // 微信创建用户授权信息按钮
                this.button = null;
                // 比例 Laya.stage.width / 1280
                this._proportion = Laya.stage.width / 1280;
                if (Laya.stage.width > 1135) {
                    this._proportion = this._proportion * 0.5;
                }
                // 推荐
                this.one_data = null;
                this.one_game_list = null;
                this.one_container = null;
                if (ops) {
                    this._clickUpdate = ops.clickUpdate;
                    // TODO 加到sdk 的时候需要恢复下
                    this.setOneData(ops.data);
                }
                this.createView();
                this.showOneGameList();
            }
            // 创建菜单视图
            slFloatIcon.prototype.createView = function () {
                this._imgSprite.loadImage(this._imgSrc);
                Laya.stage.addChild(this._imgSprite);
                this._imgSprite.x = 0;
                this._imgSprite.y = 0;
                this._imgSprite.on(Laya.Event.MOUSE_DOWN, this, this.mouseDown);
                this._imgSprite.on(Laya.Event.MOUSE_UP, this, this.onMouseUp);
                this._imgSprite.scale(this._proportion, this._proportion);
                this.alwaysOnTop();
            };
            // load image
            // 移动事件
            slFloatIcon.prototype.onMouseMove = function (e) {
                if (this._touchStatus) {
                    this._touchMoveStatus = true;
                    var diffX = e.stageX - this._distance.x;
                    var diffY = e.stageY - this._distance.y;
                    if (this._imgSprite.x == diffX && this._imgSprite.y == diffY) {
                        this._touchMoveStatus = false;
                        return;
                    }
                    if (diffX >= 0 && diffX <= Laya.stage.width - this._imgSprite.width * this._proportion) {
                        this._imgSprite.x = diffX;
                        this._touchMoveStatus = true;
                    }
                    if (diffY >= 0 && diffY <= Laya.stage.height - this._imgSprite.height * this._proportion) {
                        this._imgSprite.y = diffY;
                        this._touchMoveStatus = true;
                    }
                    if (this._touchMoveStatus && this._img2Sprite) {
                        // 列表跟随菜单图标
                        this.followMenu();
                    }
                }
            };
            // 拖动事件监听
            slFloatIcon.prototype.mouseDown = function (e) {
                e.stopPropagation();
                //鼠标按下开始拖拽(设置了拖动区域和超界弹回的滑动效果)
                this._touchStatus = true;
                this._distance.x = e.stageX - this._imgSprite.x;
                this._distance.y = e.stageY - this._imgSprite.y;
                this._imgSprite.alpha = 1;
                Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.onMouseMove);
            };
            // 松开事件
            slFloatIcon.prototype.onMouseUp = function (e) {
                var that = this;
                e.stopPropagation();
                if (!this._touchMoveStatus) {
                    if (!this._img2Sprite) {
                        this.createListView();
                        this.createWxUserInfoButotn(this._img2Sprite);
                    } else {
                        this._clearList();
                        if (this.button != null) {
                            this.button.hide();
                            this.button.destroy();
                            this.button = null;
                        }
                    }
                } else {
                    // 清除时钟
                    clearInterval(this._timerId);
                    if (this._imgSprite.x + this._imgSprite.width / 2 <= Laya.stage.width / 2) {
                        // 向左缓动
                        this._timerId = setInterval(function () {
                            if (that._imgSprite.x - 40 * that._proportion >= 0) {
                                that._imgSprite.x -= 40 * that._proportion;
                            } else {
                                that._imgSprite.x = 0;
                                setTimeout(() => {
                                    that._imgSprite.x -= that._imgSprite.width * that._proportion / 2;
                                    that._imgSprite.alpha = 0.8;
                                    if (that._img2Sprite) {
                                        that.followMenu();
                                    }
                                }, 1000);
                                clearInterval(that._timerId);
                            }
                            if (that._img2Sprite) {
                                that.followMenu();
                            }
                        }, 20);
                    } else {
                        // 向右缓动
                        this._timerId = setInterval(function () {
                            if (that._imgSprite.x + 40 * that._proportion < Laya.stage.width - that._imgSprite.width * that._proportion) {
                                that._imgSprite.x += 40 * that._proportion;
                            } else {
                                that._imgSprite.x = Laya.stage.width - that._imgSprite.width * that._proportion;
                                setTimeout(() => {
                                    that._imgSprite.x += that._imgSprite.width * that._proportion / 2;
                                    that._imgSprite.alpha = 0.8;
                                    if (that._img2Sprite) {
                                        that.followMenu();
                                    }
                                }, 1000);
                                clearInterval(that._timerId);
                            }
                            if (that._img2Sprite) {
                                that.followMenu();
                            }
                        }, 20);
                    }
                }
                this._touchStatus = false;
                this._touchMoveStatus = false;
                Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this.onMouseMove);
            };
            // 创建图片2
            slFloatIcon.prototype.createListView = function () {
                this._img2Sprite = new Laya.Sprite();
                this._img2Sprite.loadImage(this._imgSrc2);
                Laya.stage.addChild(this._img2Sprite);
                this.followMenu();
                this._img2Sprite.scale(this._proportion, this._proportion);
                this._img2Sprite.on(Laya.Event.MOUSE_UP, this, this.onListMouseUp);
                this._clearList = function () {
                    this._img2Sprite.off(Laya.Event.MOUSE_UP, this, this.onListMouseUp);
                    Laya.stage.removeChild(this._img2Sprite);
                    this._img2Sprite = null;
                }.bind(this);
            };
            // 跟随浮标
            slFloatIcon.prototype.followMenu = function () {
                if (this._imgSprite.x + this._imgSprite.width / 2 <= Laya.stage.width / 2) {
                    this._img2Sprite.x = this._imgSprite.x + 20 * this._proportion + this._imgSprite.width * this._proportion;
                } else {
                    this._img2Sprite.x = this._imgSprite.x - 20 * this._proportion - this._img2Sprite.width * this._proportion;
                }
                this._img2Sprite.y = this._imgSprite.y;
            };
            // 列表点击
            slFloatIcon.prototype.onListMouseUp = function (e) {
                this._clickUpdate();
            };
            /**
             * 微信的显示提示
             * 调用微信的接口时，可以从全局window对象里面拿wx的对象出来用，为避免编译报错，请按照下面的格式进行调用。
             */
            slFloatIcon.prototype.msg = function (contetn) {
                var wx = window['wx'] || {};
                if (wx) {
                    wx['showToast']({
                        title: contetn,
                        icon: 'none'
                    });
                }
            };
            /**
             * 窗口总在最前
             */
            slFloatIcon.prototype.alwaysOnTop = function () {
                var that = this;
                setInterval(function () {
                    var num = Laya.stage.numChildren;
                    Laya.stage.setChildIndex(that._imgSprite, num - 1);
                    if (that.one_game_list != null && that.one_game_list.isShow()) {
                        Laya.stage.setChildIndex(that.one_game_list.getMain(), num - 2);
                    }
                }, 1000);
            };
            /**
             * 创建微信授权按钮
             */
            slFloatIcon.prototype.createWxUserInfoButotn = function (example) {
                if (this.button != null) {
                    this.button.hide();
                    this.button.destroy();
                    this.button = null;
                }
                // 创建button
                var wx = window['wx'] || {};
                var that = this;
                this.button = wx['createUserInfoButton']();
                var sysInfo = wx['getSystemInfoSync']();
                this.button.text = '';
                this.button.style.width = example.width / Laya.stage.width * sysInfo.screenWidth;
                this.button.style.height = example.height / Laya.stage.height * sysInfo.screenHeight;
                // 跟随example
                this.button.style.left = example.x / Laya.stage.width * sysInfo.screenWidth;
                this.button.style.top = example.y / Laya.stage.height * sysInfo.screenHeight;
                this.button.onTap(function () {
                    wx['getUserInfo']({
                        success: function (result) {
                            that._clickUpdate();
                            // login(window.loginOpts); 转成js文件后把ts文件去掉.
                            // TODO 这里记得恢复
                            // login(window.loginOpts);
                            that._clearList();
                            if (that.button != null) {
                                that.button.hide();
                                that.button.destroy();
                                that.button = null;
                            }
                        }
                    });
                });
            };
            slFloatIcon.prototype.showOneGameList = function () {
                this.one_game_list = new OneGameList(this.one_data);
            };
            slFloatIcon.prototype.setOneData = function (data) {
                this.one_data = data;
            };
            slFloatIcon.prototype.hideOneGameList = function () {
                this.one_game_list.remove();
                this.one_game_list = null;
            };
            /**
             * 弹游戏列表
             */
            slFloatIcon.prototype.popGameList = function () {
                var e = {
                    stopPropagation: function () {
                        console.log('[魔光] slFloatIcon 强弹游戏列表');
                    }
                };
                this.hideOneGameList();
                this.showOneGameList();
            };
            return slFloatIcon;
        }();
        var OneGameList = /** @class */function () {
            function OneGameList(getData) {
                this.parent_stage = Laya.stage;
                this.one_container = new Laya.Sprite();
                this.data = [];
                this.isRender = false;
                if (getData) {
                    this.data = getData();
                }
                this.initView();
            }
            OneGameList.prototype.getMain = function () {
                return this.one_container;
            };
            OneGameList.prototype.initView = function () {
                if (this.data.length <= 0) {
                    return;
                }
                this.isRender = true;
                this.parent_stage.addChild(this.one_container);
                var currentStage = this.one_container;
                // 画矩形
                var x = 0;
                var y = this.parent_stage.height / 3;
                var w = this.parent_stage.width * 0.7;
                // 一行放6个，计算需要多少行 间距10
                var item_wh = (w - 30 * 5) / 2;
                // 高度底部预留20 顶部预留20 
                var h = w * 1.353;
                currentStage.mouseEnabled = true;
                var channelId = window['SLWX'].systemArgs.channelId;
                var BG_URL = 'https://frontcdn.17a.cn/MangLingWXSDK/recommend/' + channelId + '/' + channelId + '_bg.png';
                var SWITCH_BTN_URL = 'https://frontcdn.17a.cn/MangLingWXSDK/recommend/' + channelId + '/' + channelId + '_switch_left.png';
                var SWITCH_BTN_URL2 = 'https://frontcdn.17a.cn/MangLingWXSDK/recommend/' + channelId + '/' + channelId + '_switch_right.png';
                // 画背景
                var renderBG = function () {
                    var _bird = new Laya.Image(BG_URL);
                    _bird.x = x;
                    _bird.y = y;
                    _bird.width = w;
                    _bird.height = h;
                    currentStage.addChild(_bird);
                }.bind(this);
                renderBG();
                // 画收缩开关
                var button_switch = null;
                var button_switch2 = null;
                var isLeft = true;
                this.one_container.x = 0 - w;
                var animationPop = function () {
                    var that = this;
                    if (isLeft) {
                        var timerId_1 = setInterval(function () {
                            if (that.one_container.x <= 0 - w) {
                                that.one_container.x = 0 - w;
                                clearInterval(timerId_1);
                                currentStage.removeChild(button_switch);
                                currentStage.addChild(button_switch2);
                                isLeft = false;
                                return;
                            }
                            that.setX(that.one_container.x - 50);
                        }, 30);
                    } else {
                        var timerId_2 = setInterval(function () {
                            if (that.one_container.x >= 0) {
                                that.one_container.x = 0;
                                clearInterval(timerId_2);
                                currentStage.removeChild(button_switch2);
                                currentStage.addChild(button_switch);
                                isLeft = true;
                                return;
                            }
                            if (that.one_container.x + 50 >= 0) {
                                that.setX(0);
                                return;
                            }
                            that.setX(that.one_container.x + 50);
                        }, 30);
                    }
                }.bind(this);
                var renderSwtichBtn = function (url) {
                    var bird_x = w;
                    var bird_y = y + h / 5 * 4;
                    var _bird = new Laya.Image(url);
                    _bird.x = bird_x;
                    _bird.y = bird_y;
                    _bird.width = Math.round(40 / 640 * Laya.stage.width);
                    _bird.height = Math.round(70 / 40 * _bird.width);
                    currentStage.addChild(_bird);
                    _bird.mouseEnabled = true;
                    _bird.on(Laya.Event.MOUSE_DOWN, this, function (e) {
                        animationPop();
                    });
                    return _bird;
                }.bind(this);
                button_switch = renderSwtichBtn(SWITCH_BTN_URL);
                currentStage.removeChild(button_switch);
                button_switch2 = renderSwtichBtn(SWITCH_BTN_URL2);
                isLeft = false;
                // 画item
                var padding = 30;
                var x_count = padding;
                var y_count = 0;
                var i = 0;
                var c_wx = window['wx'] || {};
                this.data.map(function (item, index, arr) {
                    // 监听
                    var gotoMiniD = function () {
                        c_wx['navigateToMiniProgram']({
                            appId: item.wx_appid,
                            path: 'index?adsId=wxHotGame_' + window['SLWX'].systemArgs.channelId,
                            success: result => {
                                window['SLWX'].reportClickPop({
                                    event: 'click',
                                    wx_appid: item.wx_appid,
                                    sence: '游戏推荐'
                                });
                            },
                            fail: result => {
                                window['SLWX'].reportClickPop({
                                    event: 'close',
                                    wx_appid: item.wx_appid,
                                    sence: '游戏推荐'
                                });
                            }
                        });
                    };
                    // 画图标
                    var bird_x = 25 + x + x_count + i * item_wh;
                    var bird_y = 20 + y + item_wh * 0.6 + y_count * (item_wh + item_wh * 0.6) + 20;
                    var hrefStr = item.game_icon.indexOf('http') == -1 ? 'https://sdk.silanggame.com' + item.game_icon : item.game_icon;
                    var _bird = new Laya.Image(hrefStr);
                    _bird.x = bird_x;
                    _bird.y = bird_y;
                    _bird.width = item_wh;
                    _bird.height = item_wh;
                    currentStage.addChild(_bird);
                    _bird.mouseEnabled = true;
                    _bird.on(Laya.Event.MOUSE_DOWN, this, function (e) {
                        gotoMiniD();
                    });
                    // 画图标下面的标题
                    var _title = new Laya.Label();
                    _title.text = item.channel_name;
                    _title.bold = false;
                    currentStage.addChild(_title);
                    _title.width = item_wh;
                    _title.x = bird_x;
                    _title.fontSize = item_wh * 0.2;
                    _title.y = item_wh * 0.15 + bird_y + item_wh;
                    _title.color = '#FFFFFF';
                    _title.align = Laya.Stage.ALIGN_CENTER;
                    _title.mouseEnabled = true;
                    _title.on(Laya.Event.MOUSE_DOWN, this, function (e) {
                        gotoMiniD();
                    });
                    if ((index + 1) % 2 == 0) {
                        y_count += 1;
                        x_count = padding;
                        i = 0;
                    } else {
                        x_count += padding;
                        i += 1;
                    }
                }.bind(this));
            };
            OneGameList.prototype.isShow = function () {
                return this.isRender;
            };
            OneGameList.prototype.setX = function (x) {
                if (!this.isShow()) {
                    return;
                }
                this.one_container.x = x;
            };
            OneGameList.prototype.remove = function () {
                if (!this.isShow()) {
                    return;
                }
                this.parent_stage.removeChild(this.one_container);
            };
            OneGameList.prototype.setY = function (y) {
                if (!this.isShow()) {
                    return;
                }
                this.one_container.y = y;
            };
            return OneGameList;
        }();

        // 绑定点击事件
        var _that = this;
        var sl_floatIcon = new slFloatIcon({
            clickUpdate: () => {
                this.isShowTokenDialog = false;
                this.toMiniD();
            },
            data: function () {
                if (_that.onegamelist) {
                    return _that.onegamelist;
                }
                return [];
            }
        });
        this.popGameList = sl_floatIcon.popGameList.bind(sl_floatIcon);
    }

    /**
        * 复制链接
        */
    copyUrl() {
        if (this.weChatConfig.jump_type == '2') {
            var that = this;
            var pdata = {
                channelid: that.systemArgs.channelid,
                userid: that.systemArgs.userid,
                access_token: that.systemArgs.access_token
            };
            var apiData = that.signFun(pdata);
            that._request({
                url: '/wechat/getToken',
                data: apiData,
                success(res) {
                    wx.setClipboardData({
                        data: res.data.data.user_token
                    });
                }
            });
        } else {
            wx.setClipboardData({
                data: this.systemArgs.assHost + '/' + this.systemArgs.appid + '/' + this.systemArgs.channelid
            });
        }
    }

    /**
        * 跳转
        */
    toMiniD() {
        if (!this.isShowTokenDialog) {
            this.copyUrl();
        }
        var img_url = 'https://frontcdn.17a.cn/static/images/wxKf2.jpg';
        var sftmp = {
            link: this.turn_port_url,
            desc: '点击我下载微端',
            title: '转端下载',
            img: img_url
        };

        // 检查跳转配置
        if (this.weChatConfig.jump_type == '0') {
            var jumpAppid = 'wx0d652e5da480573a'; // 默认跳转权游四海的小程序
            if (this.weChatConfig.jump_appid) {
                jumpAppid = this.weChatConfig.jump_appid;
            }
            var that = this;
            wx.navigateToMiniProgram({
                appId: jumpAppid,
                path: '/pages/hander/index?text=' + encodeURI(img_url) + '&v_title=' + encodeURI(that.turn_port_url),
                complete(res) {
                    if (that.isShowTokenDialog) {
                        if (!that.showDialogCancel && res.errMsg == 'navigateToMiniProgram:fail cancel') {
                            that.dialogShow.show(true);
                        } else {
                            that.dialogShow.show(false);
                        }
                    }
                }
            });
        } else {
            var that = this;
            wx.openCustomerServiceConversation({
                showMessageCard: true,
                sendMessageTitle: sftmp.desc,
                sendMessagePath: JSON.stringify(sftmp),
                sessionFrom: JSON.stringify(sftmp),
                sendMessageImg: img_url,
                success: result => {
                    console.log('[魔光] toMiniD tips: jump wxmini', result);
                },
                complete(res) {
                    if (that.isShowTokenDialog) {
                        if (!that.showDialogCancel && res.errMsg == 'openCustomerServiceConversation:fail cancel') {
                            that.dialogShow.show(true);
                        } else {
                            that.dialogShow.show(false);
                        }
                    }
                }
            });
        }
    }

    /**
     * 跳包
     */
    checkGoToAppid(ops) {
        var usdata = {
            channelid: this.systemArgs.channelid,
            role_level: ops.rolelevel,
            userid: this.systemArgs.userid,
            access_token: this.systemArgs.access_token
        };
        var apiData = this.signFun(usdata);
        this._request({
            url: '/info/shiftC',
            data: apiData,
            success: res => {
                this.jumpstatus = 1;
                console.log('checkGoToAppid', res);
                if (res.data.code == '0' && res.data.data.is_show_shift == '1') {
                    var appid, channelname;
                    appid = res.data.data.shift_appid;
                    channelname = res.data.data.shift_gamename;
                    this.touchuAfter = function () {
                        var that = this;
                        wx.showModal({
                            title: '跳转提示',
                            content: '亲爱的玩家您好，因小游戏即将迁移，请点击“确认”，再次点击允许跳转至“' + channelname + '”继续游戏。账号是互通的，给您带来不便敬请谅解。如遇特殊情况，请关注微信公众号“肆狼热游”咨询人工客服。',
                            showCancel: false,
                            success(res) {
                                console.log('用户点击确定', that.systemArgs.channelid);
                                wx.navigateToMiniProgram({
                                    appId: appid,
                                    path: '?ldid=jumpfrom' + that.systemArgs.channelid,
                                    success: res => {
                                        // 打开成功
                                        console.log('打开成功', res);
                                    },
                                    fail: res => {
                                        console.log('取消了', res);
                                        // that.touchuAfter()
                                    }
                                });
                            }
                        });
                    };
                    this.touchuAfter();
                    wx.onTouchEnd(res => {
                        this.touchuAfter();
                    });
                }
            }
        });
    }

    // 转端弹窗
    showModalDialog() {
        var that = this;
        var fdata = {
            channelid: that.systemArgs.channelid,
            access_token: that.systemArgs.access_token,
            userid: that.systemArgs.userid
        };
        var apiData = that.signFun(fdata);
        that._request({
            url: '/info/turnpopC',
            data: apiData,
            success(res) {
                if (res.data.code == '0') {
                    if (res.data.data.is_turn_pop == '1' && res.data.data.is_show_turnpop == '1') {
                        that.showDialogCancel = true;
                        that.isShowModal();
                    } else if (res.data.data.is_turn_pop == '2' && res.data.data.is_show_turnpop == '1') {
                        that.showDialogCancel = false;
                        that.isShowModal();
                    }
                }
            }
        });
    }

    // 唤起官方弹窗
    isShowModal() {
        var contest = 'app正式来袭！！！\r\n点击“下载微端”按钮跳转至客服会话，下载手机版即可享受\r\n1、高价值手机版礼包\r\n2、沉浸式无干扰游戏体验';
        var that = this;
        wx.showModal({
            title: '手游福利版',
            content: contest,
            cancelText: '残忍拒绝',
            confirmText: '下载微端',
            showCancel: that.showDialogCancel,
            success(res) {
                if (res.confirm) {
                    that.isShowTokenDialog = true;
                    that.tokenDialog();
                    that.dialogShow.setCLoseFlag(false);
                    that.dialogShow.show(true);
                }
            }
        });
    }

    // 转端弹窗遮罩层
    tokenDialog() {
        var that = this;
        that.copyUrl();
        if (window['Laya'] && window['Laya'].stage) {
            class Sprite_DrawShapes extends Laya.Sprite {
                constructor() {
                    super();
                    this.diff = Laya.stage.width / 840;
                    this.visible = false;
                    Laya.stage.addChild(this);
                    this.mouseEnabled = true;
                    this.drawY = this.drawSomething();
                    this.timerId = 0;
                }
                show(flag) {
                    if (this.timerId) {
                        clearInterval(this.timerId);
                    }
                    if (flag) {
                        this.timerId = setInterval(() => {
                            Laya.stage.setChildIndex(this, Laya.stage.numChildren - 1);
                        }, 1000);
                    }
                    this.visible = flag;
                }
                drawSomething() {
                    let sp = new Laya.Sprite();
                    let mark = new Laya.Sprite();
                    var pWidth = Laya.stage.width;
                    var pHeight = Laya.stage.height;
                    mark.graphics.drawRect(0, 0, pWidth, pHeight, "#000000");
                    mark.alpha = 0.7;
                    mark.width = pWidth;
                    mark.height = pHeight;
                    this.addChild(mark);
                    this.addChild(sp);
                    sp.scaleX = this.diff;
                    sp.scaleY = this.diff;
                    sp.mouseEnabled = true;
                    mark.mouseEnabled = true;
                    mark.on(Laya.Event.MOUSE_UP, this, function () {
                        this.closeFlag && this.show(false);
                        that.toMiniD();
                    }.bind(this));
                }
                setOnClick(callback) {
                    this.onClickCallBack = callback;
                }
                setCLoseFlag(flag) {
                    this.closeFlag = flag;
                }
            }
            this.dialogShow = new Sprite_DrawShapes();
        }
        if (window['egret']) {
            var egretStage = egret.lifecycle.stage;
            class Sprite_DrawShapes extends egret.Sprite {
                constructor() {
                    super();
                    this.init();
                }
                init() {
                    this.shape = new egret.Shape();
                    this.addChild(this.shape);
                    this.visible = false;
                    egretStage.addChild(this);
                    this.egretRect(egretStage.stage.stageWidth, egretStage.stage.stageHeight);
                }
                egretRect(x, y) {
                    var shape = new egret.Shape();
                    this.addChild(shape);
                    var w = egretStage.stage.stageWidth;
                    var h = egretStage.stage.stageHeight;
                    /*** 本示例关键代码段开始 ***/
                    shape.graphics.beginFill(0x000000, 0.7);
                    shape.graphics.drawRect(x - w, y - h, w, h);
                    shape.graphics.endFill();
                    shape.touchEnabled = true;
                    shape.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                        this.closeFlag && this.show(false);
                        that.toMiniD();
                    }.bind(this));
                    /*** 本示例关键代码段结束 ***/
                }
                setOnClick(callback) {
                    this.onClickCallBack = callback;
                }
                setCLoseFlag(flag) {
                    this.closeFlag = flag;
                }
            }
            this.dialogShow = new Sprite_DrawShapes();
        }
    }

    /**
        * 订阅成功、失败回调
        */
    templateMsgComplete(res) {
        if (!this.open_report_subscribe) {
            return;
        }
        var that = this;
        if (res.errCode) return;
        var pData = [];
        for (var i in res) {
            if (i != 'errMsg') {
                if (res[i] == 'accept') {
                    pData.push({
                        channelid: that.systemArgs.channelid,
                        appid: that.systemArgs.appid,
                        openid: that.systemArgs.openid,
                        templateid: i, // 订阅的模板id
                        subscription: 1, // 区分用户的订阅操作结果
                        always: 0 // 区分用户是否勾选了 总是 结果， 0为否，1为是
                    });
                }
            }
        }
        wx.getSetting({
            withSubscriptions: true,
            success(res) {
                var subscriptionsSetting = res.subscriptionsSetting;
                console.log('[魔光] 获取订阅设置', subscriptionsSetting);
                if ("undefined" == typeof subscriptionsSetting.itemSettings) {
                    return;
                }
                var tmplIds = [];
                for (var n in pData) {
                    if ("undefined" != typeof subscriptionsSetting.itemSettings) {
                        for (var i in subscriptionsSetting.itemSettings) {
                            if (pData[n].templateid == i) {
                                pData[n].always = 1;
                                tmplIds.push(i);
                            }
                        }
                    }
                }
                var tempCallback = function (index) {
                    wx.requestSubscribeMessage({
                        tmplIds: tmplIds,
                        success(res) {
                            that.addSubscribeMessageCount();
                        },
                        fail(res) {},
                        complete() {}
                    });
                };
                var count = that.getSubscribeMessageCount();
                if (count <= 50) {
                    wx.onTouchEnd(result => {
                        tempCallback(0);
                    });
                    wx.onTouchEnd(result => {
                        tempCallback(1);
                    });
                }
            },
            complete(res) {
                console.log('[魔光] 订阅消息设置', pData);
                that.upSubscribeMessage(pData);
            }
        });
    }

    /**
     *上报订阅情况 
     */
    upSubscribeMessage(list) {
        for (var i in list) {
            // 异步上报防卡
            setTimeout(() => {
                this._request({
                    url: '/msg/subscription',
                    method: 'POST',
                    data: list[i],
                    success(res) {
                        console.log('[魔光] 上报订阅消息 s', res);
                    },
                    fail(res) {
                        console.log('[魔光] 上报订阅消息 f', res);
                    }
                });
            }, i * 100);
        }
    }

    /**
     * 总是允许的
     */
    upWxSetting() {
        var that = this;
        wx.getSetting({
            withSubscriptions: true,
            success(res) {
                var subscriptionsSetting = res.subscriptionsSetting;
                if ("undefined" == typeof subscriptionsSetting.itemSettings) {
                    return;
                }
                var pData = [];
                var itemSettings = subscriptionsSetting.itemSettings;
                var templids = [];
                for (var i in itemSettings) {
                    if (itemSettings[i] == 'accept') {
                        templids.push(i);
                        pData.push({
                            channelid: that.systemArgs.channelid,
                            appid: that.systemArgs.appid,
                            openid: that.systemArgs.openid,
                            templateid: i, // 订阅的模板id
                            subscription: 1, // 区分用户的订阅操作结果
                            always: 1
                        });
                    }
                }
                that.upSubscribeMessage(pData);
                var tempCallback = function (index) {
                    wx.requestSubscribeMessage({
                        tmplIds: templids,
                        success(res) {
                            that.addSubscribeMessageCount();
                        },
                        fail(res) {},
                        complete() {}
                    });
                };
                var count = that.getSubscribeMessageCount();
                if (count <= 50) {
                    wx.onTouchEnd(result => {
                        tempCallback();
                    });
                    wx.onTouchEnd(result => {
                        tempCallback();
                    });
                }
            }
        });
    }

    /**
     * 存次数
     */
    addSubscribeMessageCount() {
        var that = this;
        var count = Number(that.getSubscribeMessageCount());
        try {
            wx.setStorageSync('mg_SubscribeMessage_count', count + 1);
        } catch (e) {}
    }

    /**
     * 检查未上报的用户
     */
    checkUnReport() {
        var value = 0;
        var that = this;
        try {
            value = wx.getStorageSync('checkUnReport');
        } catch (e) {
            console.log('[魔光] 检查未上报函数出错');
        }
        if (value == 0) {
            // 没有检查过 检查一遍
            if (that.getSubscribeMessageCount() > 0) {
                wx.getSetting({
                    withSubscriptions: true,
                    success(res) {
                        var pdata = [];
                        var subscriptionsSetting = res.subscriptionsSetting;
                        if ("undefined" == typeof subscriptionsSetting.itemSettings) {
                            return;
                        }
                        var itemSettings = subscriptionsSetting.itemSettings;
                        for (var i in itemSettings) {
                            if (itemSettings[i] == 'accept') {
                                pdata.push({
                                    channelid: that.systemArgs.channelid,
                                    appid: that.systemArgs.appid,
                                    openid: that.systemArgs.openid,
                                    templateid: i, // 订阅的模板id
                                    subscription: 1, // 区分用户的订阅操作结果
                                    always: 1
                                });
                            }
                            // 重新上报
                            that.upSubscribeMessage(pdata);
                        }
                    }
                });
            }
        }
        wx.setStorageSync('checkUnReport', 1);
    }

    /**
     * 获取次数
     */
    getSubscribeMessageCount() {
        var value = 0;
        try {
            value = wx.getStorageSync('mg_SubscribeMessage_count');
            if (value) {
                // Do something with return value
            }
        } catch (e) {
            // Do something when catch error
        }
        return value;
    }

    // 点击上报
    reportClickPop(ops) {
        // 检测到userid再上报，否则调用自身
        if (this.systemArgs.userid == '') {
            setTimeout(() => {
                if (!ops.count) {
                    ops.count = 0;
                }
                ops.count += 1;
                this.reportClickPop(ops);
            }, 1000);
            return;
        }
        this._request({
            url: '/msg/subscribeclick',
            method: 'POST',
            data: {
                'channelid': this.systemArgs.channelid,
                'type': ops.event,
                'appid': ops.wx_appid, // 跳转的appid
                'userid': this.systemArgs.userid,
                'sence': ops.sence
            },
            callback: res => {
                if (res.data.code == 0) {
                    console.log("[魔光] 埋点上报: event" + ops.event + " appid:" + ops.wx_appid + " userid:" + this.systemArgs.userid);
                }
            }
        });
    }

    // ad
    getRewarderdVideo(opts) {
        if (opts) {
            this.rewardedVideo = wx.createRewardedVideoAd({
                adUnitId: opts.adUnitId
            });
            this.rewardedVideo.onError(res => {
                // show.Modal(res.errMsg);
                console.log('[魔光] 监听激励视频错误事件: ', res);
            });
            this.rewardedVideo.load().then(() => {
                // var type = 'openad';
                var that = this;
                var usdata = {
                    channelid: that.systemArgs.channelid,
                    access_token: that.systemArgs.access_token,
                    time: Math.round(new Date().getTime() / 1000) || '',
                    adunitid: opts.adUnitId,
                    type: 'openad'
                };
                var apiData1 = that.signFun(usdata);
                that.rewardedVideo.show().then(() => {
                    that._request({
                        url: '/channeladlog/setUserChannelAdLog',
                        data: apiData1,
                        success() {}
                    });
                    that.rewardedVideo.onClose(res => {
                        if (res.isEnded) {
                            usdata.type = 'close_on_look_all';
                        } else {
                            usdata.type = 'close_on_look_tad';
                        }
                        var apiData2 = that.signFun(usdata);
                        that._request({
                            url: '/channeladlog/setUserChannelAdLog',
                            data: apiData2,
                            success() {}
                        });
                        opts.callback({ is_close_finish: res.isEnded });
                        that.rewardedVideo.offClose();
                    });
                });
            });
        }
    }

    // 跳转小程序
    toMiniGameC() {
        var that = this;
        wx.request({
            url: 'https://frontcdn.17a.cn/static/wx/miniGameCenter.js' + '?v=' + Math.random(),
            success(res) {
                wx.navigateToMiniProgram({
                    appId: res.data,
                    path: '/pages/jump/index?channelid=' + that.systemArgs.channelid,
                    success(res) {
                        console.log('jump s:', res, that.systemArgs.channelid);
                    },
                    fail(res) {
                        console.log('jump f:', '未配置参数', res);
                    }
                });
            }
        });
    }

    //封装网络请求wx.request
    _request({ url, data, header, method, success, fail, complete }) {
        var that = this;
        var p_url = that.systemArgs.sdkHost + url;
        var p_header = {
            "content-type": "application/x-www-form-urlencoded "
        };
        for (var i in header) {
            p_header[i] = header[i];
        }
        wx.request({
            url: p_url,
            header: p_header,
            data,
            method: method || "POST",
            success: res => {
                if (res && res.data && res.data.code != '0') {
                    wx.showModal({
                        title: '错误提示',
                        content: "error:" + res.data.message + "",
                        showCancel: false
                    });
                    return;
                }
                success(res);
            },
            fail,
            complete
        });
    }
}
var mgsdk_source = new MGSDK();
var init = function (ops) {
    return mgsdk_source.init(ops);
};
var login = function (ops) {
    return mgsdk_source.login(ops);
};
var pay = function (ops) {
    return mgsdk_source.pay(ops);
};
var report = function (ops) {
    return mgsdk_source.report(ops);
};
var reportLoad = function (ops) {
    return mgsdk_source.reportLoad(ops);
};
var msgSecCheck = function (ops) {
    return mgsdk_source.msgSecCheck(ops);
};
var notify = function (ops) {
    return mgsdk_source.notify(ops);
};
var pswitch = function (ops) {
    return mgsdk_source.pswitch(ops);
};
var shareQueryStr = function (ops) {
    return mgsdk_source.shareQueryStr(ops);
};
var templateMsgComplete = function (ops) {
    return mgsdk_source.templateMsgComplete(ops);
};
var updateUserInfo = function updateUserInfo(ops) {
    return mgsdk_source.updateUserInfo(ops);
};
var getRewarderdVideo = function getRewarderdVideo(ops) {
    return mgsdk_source.getRewarderdVideo(ops);
};

var toMiniD = function toMiniD(ops) {
    return mgsdk_source.toMiniD(ops);
};

var toMiniGameC = function toMiniGameC(ops) {
    return mgsdk_source.toMiniGameC(ops);
};

module.exports = { init, login, pay, report, reportLoad, mgsdk_source, msgSecCheck, pswitch, shareQueryStr, templateMsgComplete, updateUserInfo, getRewarderdVideo, toMiniD, toMiniGameC };