import VipIcon from './VipIcon';
import VipPage from './VipPage'
import { openType, logTypes, LogManager } from './LogManager';

const consts = {
    HOST: {
        Prod: "https://platform.hortorgames.com",
        Test: "https://platform-test.hortorgames.com",
    },
    URLS: {
        Info: '/customer/api/v1/gs/info',
    }
};

export default class hortorVip {

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

        let url = `${this._host}${consts.URLS.Info}?gameId=${this._conf.vipGameId}&userId=${this._conf.userId}`
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
