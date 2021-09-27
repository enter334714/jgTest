var laya = (function (exports) {
    'use strict';

    class VipIcon {
        constructor(data) { 
            this.onClickEvent = () => {};
            if (!data || !data.gameGsConf || !data.gameGsConf.icon) {
                console.log('[VIP] Icon init data null', data);
                return;
            }

            this.opt = data.gameGsConf.icon;
            Laya.loader.load(this.opt.url, Laya.Handler.create(this, this.addIcon));
        }

        addIcon() {
            let texture = Laya.loader.getRes(this.opt.url);
            
            this.icon = new Laya.Sprite();
    		Laya.stage.addChild(this.icon);
            this.icon.pivot(texture.width / 2, texture.height / 2);
            
            let x = this.opt.x || this.opt.posX || 0;
            let y = this.opt.y || this.opt.posY || 0;
            this.icon.pos(x === -1 ? Laya.stage.width - texture.width - 15: x, y === -1 ? Laya.stage.height / 2 : y);

            this.icon.size(texture.width, texture.height);
            this.icon.graphics.clear();
    		this.icon.graphics.drawTexture(texture, 0, 0);
    		
            
            this.bindDrag();
        }

        bindDrag() {
            let w = this.icon.width;
            let h = this.icon.height;

            //拖动限制区域
    	    let dragRegion = new Laya.Rectangle(w / 2, h / 2, Laya.stage.width - w, Laya.stage.height - h);

            //鼠标按下开始拖拽(设置了拖动区域和超界弹回的滑动效果)
    		this.icon.on(Laya.Event.MOUSE_DOWN, this, () => {
                this.icon.startDrag(dragRegion, true, 100, 300, null, true);
            });

            this.icon.on(Laya.Event.CLICK, this, (e) => {
                this.onClickEvent();
            });
        }

        onClick(cb) {
            if (cb && typeof cb == 'function') {
                this.onClickEvent = cb;
            }
        }

        close() {
            this.icon.visible = false;
            this.icon.destroy();
        }

    }

    const openType = {
        auto: 'AUTO',
        click: 'CLICK',
    };

    const logTypes = {
        iconShow: 'ICON-SHOW',
        iconClick: 'ICON-CLICK',
        copyClick: 'WECHAT-COPY',
        btnClick: 'BUTTON-CLICK',
        pageClose: 'CONF-CLOSE',
        pageShow: 'CONF-SHOW',
        copySecretNum: 'SECRET-COPY'
    };

    const logUrl = "/customer/api/v1/gs/log";

    class LogManager {

        init(opt) {
            this.opt = Object.assign(this.opt || {}, opt);
        }

        _jsonToQuery(obj) {
            let temp = {};
            for (let i in obj) {
                if ('undefined' !== typeof obj[i]) {
                    temp[i] = obj[i];
                }
            }
            return JSON.stringify(temp);
        }

        post(logType, gsWay) {
            if (!this.opt || !this.opt.host) {
                return;
            }

            let url = `${this.opt.host}${logUrl}`;
            let params = this._jsonToQuery({
                gameId: this.opt.gameId,
                userId: this.opt.userId,
                gs: this.opt.gs,
                alias: logType,
                gsWay: gsWay || this.opt.openType,
            });

            console.log('[VIP] post log', params);

            let xhr = new Laya.HttpRequest();
            xhr.send(url, params, 'post', null, ["Content-Type", "application/json"]);
        }

    }

    const zIndxs = {
        bg: 11,
        avatar: 13,
        closer: 13,
        code: 14,
        cross: 15,
        account: 16,
        codeNum: 17,
        codeBtn: 18
    };

    class VipPage {

        constructor(data, log, openType) {
            console.log('[VIP] Page init', data);

            this.config = data;
            this._log = log;
            this._openType = openType;
            this.stageW = Laya.stage.width;
            this.stageH = Laya.stage.height;

            this.renderMask();
            this.renderBg(() => {
                this.renderAvatar();
                this.renderClose();
                this.renderCode();

                // 当已经认证，且是复制类型，渲染微信号
                if (this.config.useCopy) this.renderWXAccount();

                // 小蜜专属配置编号
                if (this.config.gameGsConf.secretary && this.config.gameGsConf.secretary.number) this.renderSecretaryNum();
                // page show log
                this._log && this._log.post(logTypes.pageShow, this._openType);
            });
        }

        // 展示比率
        setRate(data) {
            this.rate = this.stageW / data.width;
        }

        // 创建新节点
        newNode(parent) {
            parent = parent || Laya.stage;
            let node = new Laya.Sprite();
            parent.addChild(node);
            return node;
        }

        // 定位
        setPos(node, opt) {
            let rate = this.rate || 1;
            let x = opt.x || 0;
            let y = opt.y || 0;
            let Ax = node.width / 2;
            let Ay = node.height / 2;

            if (x == -1) {
                x = this.stageW / 2;
            } else {
                Ax = 0;
                x = x * rate;
            }

            if (y == -1) {
                y = this.stageH / 2;
            } else {
                y = y * rate;
                Ay = 0;
            }

            node.pivot(Ax, Ay);
            node.pos(x, y);
            node.zOrder = opt.z || 0;
        }

        // 添加图片资源
        drawSprite(node, url) {
            let texture = Laya.loader.getRes(url);
            
            if (!texture) {
                return;
            }

            let rate = this.rate || 1;
            let w = rate ? texture.width * rate : this.stageW;
            let h = rate ? texture.height * rate : this.stageH;
            node.size(w, h);
            node.graphics.clear();
            node.graphics.drawTexture(texture, 0, 0, w, h);
        }

        // 遮罩
        renderMask() {
            let conf = this.config.gameGsConf.background;
            this.mask = this.newNode();
            this.mask.graphics.drawRect(0, 0, this.stageW, this.stageH, `#${conf.color || 'aaaaaa'}`);
        }

        // 背景渲染
        renderBg(callBack) {
            let conf = this.config.gameGsConf.background;
            this.bg = this.newNode();
            Laya.loader.load(conf.url, Laya.Handler.create(this, () => {
                this.setRate(Laya.loader.getRes(conf.url));
                this.drawSprite(this.bg, conf.url);
                this.setPos(this.bg, { x: 0, y: 0, z: zIndxs.bg});
                callBack && callBack();
            }));
        }

        // 渲染头像
        renderAvatar() {
            let conf = this.config.gameGsConf.gsAvatar;
            this.avatar = this.newNode(this.bg);
            Laya.loader.load(conf.url, Laya.Handler.create(this, () => {
                this.drawSprite(this.avatar, conf.url);
                this.setPos(this.avatar, { x: conf.posX, y: conf.posY, z: zIndxs.avatar });
            }));
        }

        // 渲染关闭按钮
        renderClose() {
            let conf = this.config.gameGsConf.closeBtn;
            this.closer = this.newNode(this.bg);
            Laya.loader.load(conf.url, Laya.Handler.create(this, () => {
                this.drawSprite(this.closer, conf.url);
                this.setPos(this.closer, { x: conf.posX, y: conf.posY, z: zIndxs.closer });
                this.closer.on(Laya.Event.CLICK, this, this.close);
            }));
        }

        // 渲染二维码按钮
        renderCode() {
            let conf = this.config.gameGsConf.qrCodeBtn;
            this.code = this.newNode(this.bg);
            Laya.loader.load(conf.url, Laya.Handler.create(this, () => {
                this.drawSprite(this.code, conf.url);
                this.setPos(this.code, { x: conf.posX, y: conf.posY, z: zIndxs.code });
                this.code.on(Laya.Event.CLICK, this, this.onBtnClick);
            }));
        }

        // 渲染微信账号
        renderWXAccount() {
            let account = this.config.wxAccount || '';
            let conf = this.config.gameGsConf.copyAccount;

            var txt = new Laya.Text();
            txt.text = (conf.title || '') + account;
            txt.fontSize = conf.size || 32;
            txt.align = (conf.textAlign || "center");
            txt.color = conf.color || '#ffffff';
            this.setPos(txt, {x: conf.posX, y: conf.posY, z: zIndxs.account });
            this.bg.addChild(txt);
        }

        // 关闭
        close() {
            this.clear();

            // page close log
            this._log && this._log.post(logTypes.pageClose, this._openType);
        }
        
        // 清空
        clear() {
            this.mask.destroy();
            this.bg.destroy();
        }

        // 按钮点击
        onBtnClick() {

            // btn click log
            this._log && this._log.post(logTypes.btnClick, this._openType);

            if (!this.config.gs) {
                let content = this.config.gameGsConf.gsMsg || "没有达到开通条件";
                if (wx && wx.showModal) {
                    wx.showModal({ content, showCancel: false });
                }
                return;
            }

            if (this.config.useCopy) {
                this.onCopy(this.config);
                return;
            }

            console.warn('此VIP模块仅支持复制功能！');
        }

        // 渲染小蜜专属编号
        renderSecretaryNum() {
            const secretary = this.config.gameGsConf.secretary || {};
            let exclusiveNumInfo = this.config.gameGsConf.exclusiveNumInfo;
            const number = secretary.number;
            if (!number) return
            var txt = new Laya.Text();

            txt.text = exclusiveNumInfo.title + number;
            txt.fontSize = 32;
            txt.horizontalAlign = "center".toUpperCase();
            txt.color = exclusiveNumInfo.color || '#FFFFFF';
            this.setPos(txt, {x: exclusiveNumInfo.posX, y: exclusiveNumInfo.posY, z: zIndxs.codeNum });
            this.bg.addChild(txt);
            this.renderSecretBtn();
        }

        // 渲染小蜜专属编号按钮
        renderSecretBtn() {
            let conf = this.config.gameGsConf.exclusiveNumBtn;
            this.exclusiveBtn = this.newNode(this.bg);

            Laya.loader.load(conf.url, Laya.Handler.create(this, () => {
                this.drawSprite(this.exclusiveBtn, conf.url);
                this.setPos(this.exclusiveBtn, { x: conf.posX, y: conf.posY, z: zIndxs.codeBtn });
                this.exclusiveBtn.on(Laya.Event.CLICK, this, this.clickSercretBtn);
            }));
        }

        // 点击小蜜编号按钮
        clickSercretBtn() {
            const secretary = this.config.gameGsConf.secretary || {};
            const number = secretary.number;
            if (!number) return
            if (wx && wx.setClipboardData) {
                wx.setClipboardData({
                    data: number
                });
        
                // copy click log
                this._log && this._log.post(logTypes.number, this._openType);
            }
        }

        // 复制
        onCopy(config) {
            if (wx && wx.setClipboardData && config && config.wxAccount) {
                wx.setClipboardData({
                    data: config.wxAccount
                });
        
                // copy click log
                this._log && this._log.post(logTypes.copySecretNum, this._openType);
            }
        }

    }

    const consts = {
        HOST: {
            Prod: "https://platform.hortorgames.com",
            Test: "https://platform-test.hortorgames.com",
        },
        URLS: {
            Info: '/customer/api/v1/gs/info',
        }
    };

    class hortorVip {

        /**
         * 实例化
         * @param {object} config 
         */
        init(config) {
            console.log('[VIP] hortorVip init', config);
            this._showIcon = config.defShowIcon !== false;
            this._log = new LogManager();
            this._init(config);
            this._loadVipData();
        }

        /**
         * 展示 Icon
         */
        showIcon() {
            this._showIcon = true;
            this.visible = true;
            this._initEntryIcon();

            // icon show log
            this._log.post(logTypes.iconShow);
        }

        /**
         * 隐藏 Icon
         */
        hideIcon() {
            this._showIcon = false;
            this._removeIcon();
        }

        /**
         * 刷新数据
         * @param {function} next 
         */
        refreshData(config) {
            this._init(config);
            this._removeIcon();
            this._loadVipData();
        }

        // 基础实例化
        _init(config) {
            if (!config) return;
            this._conf = Object.assign(this._conf || {}, config);
            this._host = consts.HOST[this._conf.env];
            this._log.init({
                gameId: this._conf.vipGameId,
                userId: this._conf.userId || this._conf.openId,
                host: this._host,
            });
        }

        // 加载数据
        _loadVipData() {
            console.log('[VIP] _loadVipData');

            let callback = (err, data) => {
                console.log('[VIP] _loadVipData loaded', err, data);
                typeof this._conf.onLoad === 'function' && this._conf.onLoad(err, data);
            };

            let url = `${this._host}${consts.URLS.Info}?gameId=${this._conf.vipGameId}&userId=${this._conf.userId}`;
            let xhr = new Laya.HttpRequest();
            xhr.once(Laya.Event.COMPLETE, this, res => {          
                this._vipData = JSON.parse(res);
                if (this._vipData.meta && this._vipData.meta.errCode) {
                    callback(this._vipData.meta);
                    return;
                }

                this._log.init({ gs: this._vipData.gs, openType: this._vipData.disabledAutoOpenQrcode ? openType.click : openType.auto });

                callback(null, this._vipData);
                if (this._showIcon) {
                    this.showIcon();
                }
            });
            xhr.once(Laya.Event.ERROR, this, err => {
                callback(err);
            });
            xhr.send(url, null, 'get', 'text');
        }

        // 实例化进入ICON
        _initEntryIcon() {
            if (this._icon) return console.log("[VIP] 不能重复实例化 icon");
            if (!this._vipData || !this._vipData.gameGsConf) return console.log("[VIP] 无配置信息");

            // 设置了禁用状态并禁用==true，不显示图标了
            if (this._vipData.disabled) return console.log("[VIP] Disabled");

            // 各种判断，是否使用交叉推广/二维码/复制账户
            this._vipData.gameGsConf.useCross = this._crossSDK && !this._vipData.gameGsConf.gsAddType;
            this._vipData.useQRCode = this._vipData.gs && !this._vipData.gameGsConf.gsAddType;
            this._vipData.useCopy = this._vipData.gs && this._vipData.gameGsConf.gsAddType == 1;
            Object.assign(this._vipData.gameGsConf.icon, this._conf.icon || {});

            // 实例化图标
            this._icon = new VipIcon(this._vipData);
            this._icon.onClick(this._onEntryIconClick.bind(this));

            this._tryAutoOpen();
        }

        // 移除Icon
        _removeIcon() {
            this.visible = false;
            if (this._icon && this._icon.close) {
                this._icon.close();
                this._icon = null;
            }
            this._removePage();
        }

        // 移除页面
        _removePage() {
            if (this._page) {
                this._page.clear();
                this._page = null;
            }
        }

        // 自动打开尝试
        _tryAutoOpen() {
            if (this._vipData.isAuth === 0 && !this._vipData.disabledAutoOpenQrcode) {
                if (!this._vipData.gs) {
                    return console.log("[VIP] 没有绑定客服");
                }

                if (this._vipData.useCopy) {
                    this._initPage(openType.auto);
                }
            }
        }

        // 点击Icon事件
        _onEntryIconClick() {
            this._initPage(openType.click);

            // icon click log
            this._log.post(logTypes.iconClick);
        }

        // 实例化 vip 页面
        _initPage(type) {
            console.log('[VIP] _initPage');

            this._removePage();

            this._page = new VipPage(this._vipData, this._log, type, this._conf);
        }

    }

    class XingJuBoxMain {
        constructor() {
            let hortorVip$1 = new hortorVip();
            hortorVip$1.init({
                gameVersion: window["config"].game_ver,
                vipGameId: window["config"].partner_game_id,
                env: "Prod",
                userId: window["PF_INFO"].userId,
                icon: {
                    posX: 100,
                    posY: 550,
                },
                defShowIcon: true,
                onLoad: (err, data) => {
                    console.log('vip data loaded---', err, data);
                }
            });
        }
    }
    window["XingJuBoxMain"] = XingJuBoxMain;

    exports.XingJuBoxMain = XingJuBoxMain;

    return exports;

}({}));
