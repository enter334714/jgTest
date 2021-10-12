var m = wx.$g;
import { openType, logTypes } from './LogManager';
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

export default class VipPage {

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
            this.setPos(this.bg, { x: 0, y: 0, z: zIndxs.bg });
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
        txt.align = conf.textAlign || "center";
        txt.color = conf.color || '#ffffff';
        this.setPos(txt, { x: conf.posX, y: conf.posY, z: zIndxs.account });
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
        if (!number) return;
        var txt = new Laya.Text();

        txt.text = exclusiveNumInfo.title + number;
        txt.fontSize = 32;
        txt.horizontalAlign = "center".toUpperCase();
        txt.color = exclusiveNumInfo.color || '#FFFFFF';
        this.setPos(txt, { x: exclusiveNumInfo.posX, y: exclusiveNumInfo.posY, z: zIndxs.codeNum });
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
        if (!number) return;
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