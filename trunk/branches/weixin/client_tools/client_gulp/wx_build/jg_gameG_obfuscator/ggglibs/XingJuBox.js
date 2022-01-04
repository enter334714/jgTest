var m = wx.$g;
var gj2$ru6 = function (exports) {
  'use strict';

  class hi1a5 {
    constructor(yxwh1k) {
      this['onClickEvent'] = () => {};if (!yxwh1k || !yxwh1k['gameGsConf'] || !yxwh1k['gameGsConf']['icon']) {
        console['log']('[VIP] Icon init data null', yxwh1k);return;
      }this['opt'] = yxwh1k['gameGsConf']['icon'], Laya['loader']['load'](this['opt']['url'], Laya['Handler']['create'](this, this['addIcon']));
    }['addIcon']() {
      let yvwe7 = Laya['loader']['getRes'](this['opt']['url']);this['icon'] = new Laya['Sprite'](), Laya['stage']['addChild'](this['icon']), this['icon']['pivot'](yvwe7['width'] / 0x2, yvwe7['height'] / 0x2);let ur26$ = this['opt']['x'] || this['opt']['posX'] || 0x0,
          df34t = this['opt']['y'] || this['opt']['posY'] || 0x0;this['icon']['pos'](ur26$ === -0x1 ? Laya['stage']['width'] - yvwe7['width'] - 0xf : ur26$, df34t === -0x1 ? Laya['stage']['height'] / 0x2 : df34t), this['icon']['size'](yvwe7['width'], yvwe7['height']), this['icon']['graphics']['clear'](), this['icon']['graphics']['drawTexture'](yvwe7, 0x0, 0x0), this['bindDrag']();
    }['bindDrag']() {
      let p0_i = this['icon']['width'],
          a1ihk = this['icon']['height'],
          wyve1 = new Laya['Rectangle'](p0_i / 0x2, a1ihk / 0x2, Laya['stage']['width'] - p0_i, Laya['stage']['height'] - a1ihk);this['icon']['on'](Laya['Event']['MOUSE_DOWN'], this, () => {
        this['icon']['startDrag'](wyve1, !![], 0x64, 0x12c, null, !![]);
      }), this['icon']['on'](Laya['Event']['CLICK'], this, o4t3z => {
        this['onClickEvent']();
      });
    }['onClick'](whk1a) {
      whk1a && typeof whk1a == 'function' && (this['onClickEvent'] = whk1a);
    }['close']() {
      this['icon']['visible'] = ![], this['icon']['destroy']();
    }
  }const ap5b0 = { 'auto': 'AUTO', 'click': 'CLICK' },
        od62z3 = { 'iconShow': 'ICON-SHOW', 'iconClick': 'ICON-CLICK', 'copyClick': 'WECHAT-COPY', 'btnClick': 'BUTTON-CLICK', 'pageClose': 'CONF-CLOSE', 'pageShow': 'CONF-SHOW', 'copySecretNum': 'SECRET-COPY' },
        kvewy1 = '/customer/api/v1/gs/log';class y1ekw {
    ['init'](keywh1) {
      this['opt'] = Object['assign'](this['opt'] || {}, keywh1);
    }['_jsonToQuery'](hek1y) {
      let mjru6 = {};for (let a51xhi in hek1y) {
        'undefined' !== typeof hek1y[a51xhi] && (mjru6[a51xhi] = hek1y[a51xhi]);
      }return JSON['stringify'](mjru6);
    }['post'](z2r$j, b_pft) {
      if (!this['opt'] || !this['opt']['host']) return;let gc8q = '' + this['opt']['host'] + kvewy1,
          i1ahk = this['_jsonToQuery']({ 'gameId': this['opt']['gameId'], 'userId': this['opt']['userId'], 'gs': this['opt']['gs'], 'alias': z2r$j, 'gsWay': b_pft || this['opt']['openType'] });console['log']('[VIP] post log', i1ahk);let d62z3o = new Laya['HttpRequest']();d62z3o['send'](gc8q, i1ahk, 'post', null, ['Content-Type', 'application/json']);
    }
  }const ceq7v = { 'bg': 0xb, 'avatar': 0xd, 'closer': 0xd, 'code': 0xe, 'cross': 0xf, 'account': 0x10, 'codeNum': 0x11, 'codeBtn': 0x12 };class iaxh {
    constructor(_tbf, qgcsl8, cl8sg9) {
      console['log']('[VIP] Page init', _tbf), this['config'] = _tbf, this['_log'] = qgcsl8, this['_openType'] = cl8sg9, this['stageW'] = Laya['stage']['width'], this['stageH'] = Laya['stage']['height'], this['renderMask'](), this['renderBg'](() => {
        this['renderAvatar'](), this['renderClose'](), this['renderCode']();if (this['config']['useCopy']) this['renderWXAccount']();if (this['config']['gameGsConf']['secretary'] && this['config']['gameGsConf']['secretary']['number']) this['renderSecretaryNum']();this['_log'] && this['_log']['post'](od62z3['pageShow'], this['_openType']);
      });
    }['setRate'](yekh1w) {
      this['rate'] = this['stageW'] / yekh1w['width'];
    }['newNode'](ihax51) {
      ihax51 = ihax51 || Laya['stage'];let k1ewyh = new Laya['Sprite']();return ihax51['addChild'](k1ewyh), k1ewyh;
    }['setPos'](e7qgy, kvw1ey) {
      let bpxia5 = this['rate'] || 0x1,
          z6odr = kvw1ey['x'] || 0x0,
          gc9s = kvw1ey['y'] || 0x0,
          e1vwyk = e7qgy['width'] / 0x2,
          zo3d42 = e7qgy['height'] / 0x2;z6odr == -0x1 ? z6odr = this['stageW'] / 0x2 : (e1vwyk = 0x0, z6odr = z6odr * bpxia5), gc9s == -0x1 ? gc9s = this['stageH'] / 0x2 : (gc9s = gc9s * bpxia5, zo3d42 = 0x0), e7qgy['pivot'](e1vwyk, zo3d42), e7qgy['pos'](z6odr, gc9s), e7qgy['zOrder'] = kvw1ey['z'] || 0x0;
    }['drawSprite'](zr2do6, $zr6j) {
      let xyh1k = Laya['loader']['getRes']($zr6j);if (!xyh1k) return;let s8qgc = this['rate'] || 0x1,
          k1yev = s8qgc ? xyh1k['width'] * s8qgc : this['stageW'],
          bipx5a = s8qgc ? xyh1k['height'] * s8qgc : this['stageH'];zr2do6['size'](k1yev, bipx5a), zr2do6['graphics']['clear'](), zr2do6['graphics']['drawTexture'](xyh1k, 0x0, 0x0, k1yev, bipx5a);
    }['renderMask']() {
      let yw7q = this['config']['gameGsConf']['background'];this['mask'] = this['newNode'](), this['mask']['graphics']['drawRect'](0x0, 0x0, this['stageW'], this['stageH'], '#' + (yw7q['color'] || 'aaaaaa'));
    }['renderBg'](x1iahk) {
      let z4d23 = this['config']['gameGsConf']['background'];this['bg'] = this['newNode'](), Laya['loader']['load'](z4d23['url'], Laya['Handler']['create'](this, () => {
        this['setRate'](Laya['loader']['getRes'](z4d23['url'])), this['drawSprite'](this['bg'], z4d23['url']), this['setPos'](this['bg'], { 'x': 0x0, 'y': 0x0, 'z': ceq7v['bg'] }), x1iahk && x1iahk();
      }));
    }['renderAvatar']() {
      let qvgsc = this['config']['gameGsConf']['gsAvatar'];this['avatar'] = this['newNode'](this['bg']), Laya['loader']['load'](qvgsc['url'], Laya['Handler']['create'](this, () => {
        this['drawSprite'](this['avatar'], qvgsc['url']), this['setPos'](this['avatar'], { 'x': qvgsc['posX'], 'y': qvgsc['posY'], 'z': ceq7v['avatar'] });
      }));
    }['renderClose']() {
      let kewv1y = this['config']['gameGsConf']['closeBtn'];this['closer'] = this['newNode'](this['bg']), Laya['loader']['load'](kewv1y['url'], Laya['Handler']['create'](this, () => {
        this['drawSprite'](this['closer'], kewv1y['url']), this['setPos'](this['closer'], { 'x': kewv1y['posX'], 'y': kewv1y['posY'], 'z': ceq7v['closer'] }), this['closer']['on'](Laya['Event']['CLICK'], this, this['close']);
      }));
    }['renderCode']() {
      let sg78qc = this['config']['gameGsConf']['qrCodeBtn'];this['code'] = this['newNode'](this['bg']), Laya['loader']['load'](sg78qc['url'], Laya['Handler']['create'](this, () => {
        this['drawSprite'](this['code'], sg78qc['url']), this['setPos'](this['code'], { 'x': sg78qc['posX'], 'y': sg78qc['posY'], 'z': ceq7v['code'] }), this['code']['on'](Laya['Event']['CLICK'], this, this['onBtnClick']);
      }));
    }['renderWXAccount']() {
      let xky1w = this['config']['wxAccount'] || '',
          urmj$6 = this['config']['gameGsConf']['copyAccount'];var yxwk = new Laya['Text']();yxwk['text'] = (urmj$6['title'] || '') + xky1w, yxwk['fontSize'] = urmj$6['size'] || 0x20, yxwk['align'] = urmj$6['textAlign'] || 'center', yxwk['color'] = urmj$6['color'] || '#ffffff', this['setPos'](yxwk, { 'x': urmj$6['posX'], 'y': urmj$6['posY'], 'z': ceq7v['account'] }), this['bg']['addChild'](yxwk);
    }['close']() {
      this['clear'](), this['_log'] && this['_log']['post'](od62z3['pageClose'], this['_openType']);
    }['clear']() {
      this['mask']['destroy'](), this['bg']['destroy']();
    }['onBtnClick']() {
      this['_log'] && this['_log']['post'](od62z3['btnClick'], this['_openType']);if (!this['config']['gs']) {
        let rm$j6 = this['config']['gameGsConf']['gsMsg'] || '没有达到开通条件';wx && wx['showModal'] && wx['showModal']({ 'content': rm$j6, 'showCancel': ![] });return;
      }if (this['config']['useCopy']) {
        this['onCopy'](this['config']);return;
      }console['warn']('此VIP模块仅支持复制功能\uFF01');
    }['renderSecretaryNum']() {
      const bi5a = this['config']['gameGsConf']['secretary'] || {};let ahxwk = this['config']['gameGsConf']['exclusiveNumInfo'];const q8sl = bi5a['number'];if (!q8sl) return;var d3oz = new Laya['Text']();d3oz['text'] = ahxwk['title'] + q8sl, d3oz['fontSize'] = 0x20, d3oz['horizontalAlign'] = 'center'['toUpperCase'](), d3oz['color'] = ahxwk['color'] || '#FFFFFF', this['setPos'](d3oz, { 'x': ahxwk['posX'], 'y': ahxwk['posY'], 'z': ceq7v['codeNum'] }), this['bg']['addChild'](d3oz), this['renderSecretBtn']();
    }['renderSecretBtn']() {
      let ev7wy = this['config']['gameGsConf']['exclusiveNumBtn'];this['exclusiveBtn'] = this['newNode'](this['bg']), Laya['loader']['load'](ev7wy['url'], Laya['Handler']['create'](this, () => {
        this['drawSprite'](this['exclusiveBtn'], ev7wy['url']), this['setPos'](this['exclusiveBtn'], { 'x': ev7wy['posX'], 'y': ev7wy['posY'], 'z': ceq7v['codeBtn'] }), this['exclusiveBtn']['on'](Laya['Event']['CLICK'], this, this['clickSercretBtn']);
      }));
    }['clickSercretBtn']() {
      const kxah = this['config']['gameGsConf']['secretary'] || {},
            d3z4to = kxah['number'];if (!d3z4to) return;wx && wx['setClipboardData'] && (wx['setClipboardData']({ 'data': d3z4to }), this['_log'] && this['_log']['post'](od62z3['number'], this['_openType']));
    }['onCopy'](kvw7ey) {
      wx && wx['setClipboardData'] && kvw7ey && kvw7ey['wxAccount'] && (wx['setClipboardData']({ 'data': kvw7ey['wxAccount'] }), this['_log'] && this['_log']['post'](od62z3['copySecretNum'], this['_openType']));
    }
  }const kwyh = { 'HOST': { 'Prod': 'https://platform.hortorgames.com', 'Test': 'https://platform-test.hortorgames.com' }, 'URLS': { 'Info': '/customer/api/v1/gs/info' } };class bhix {
    ['init'](ib0p5a) {
      console['log']('[VIP] hortorVip init', ib0p5a), this['_showIcon'] = ib0p5a['defShowIcon'] !== ![], this['_log'] = new y1ekw(), this['_init'](ib0p5a), this['_loadVipData']();
    }['showIcon']() {
      this['_showIcon'] = !![], this['visible'] = !![], this['_initEntryIcon'](), this['_log']['post'](od62z3['iconShow']);
    }['hideIcon']() {
      this['_showIcon'] = ![], this['_removeIcon']();
    }['refreshData'](qc7evg) {
      this['_init'](qc7evg), this['_removeIcon'](), this['_loadVipData']();
    }['_init'](qv7gce) {
      if (!qv7gce) return;this['_conf'] = Object['assign'](this['_conf'] || {}, qv7gce), this['_host'] = kwyh['HOST'][this['_conf']['env']], this['_log']['init']({ 'gameId': this['_conf']['vipGameId'], 'userId': this['_conf']['userId'] || this['_conf']['openId'], 'host': this['_host'] });
    }['_loadVipData']() {
      console['log']('[VIP] _loadVipData');let slc8qg = (o43_f, hixba5) => {
        console['log']('[VIP] _loadVipData loaded', o43_f, hixba5), typeof this['_conf']['onLoad'] === 'function' && this['_conf']['onLoad'](o43_f, hixba5);
      },
          odz3t4 = '' + this['_host'] + kwyh['URLS']['Info'] + '?gameId=' + this['_conf']['vipGameId'] + '&userId=' + this['_conf']['userId'],
          o43df = new Laya['HttpRequest']();o43df['once'](Laya['Event']['COMPLETE'], this, r6j$mu => {
        this['_vipData'] = JSON['parse'](r6j$mu);if (this['_vipData']['meta'] && this['_vipData']['meta']['errCode']) {
          slc8qg(this['_vipData']['meta']);return;
        }this['_log']['init']({ 'gs': this['_vipData']['gs'], 'openType': this['_vipData']['disabledAutoOpenQrcode'] ? ap5b0['click'] : ap5b0['auto'] }), slc8qg(null, this['_vipData']), this['_showIcon'] && this['showIcon']();
      }), o43df['once'](Laya['Event']['ERROR'], this, scqgv7 => {
        slc8qg(scqgv7);
      }), o43df['send'](odz3t4, null, 'get', 'text');
    }['_initEntryIcon']() {
      if (this['_icon']) return console['log']('[VIP] 不能重复实例化 icon');if (!this['_vipData'] || !this['_vipData']['gameGsConf']) return console['log']('[VIP] 无配置信息');if (this['_vipData']['disabled']) return console['log']('[VIP] Disabled');this['_vipData']['gameGsConf']['useCross'] = this['_crossSDK'] && !this['_vipData']['gameGsConf']['gsAddType'], this['_vipData']['useQRCode'] = this['_vipData']['gs'] && !this['_vipData']['gameGsConf']['gsAddType'], this['_vipData']['useCopy'] = this['_vipData']['gs'] && this['_vipData']['gameGsConf']['gsAddType'] == 0x1, Object['assign'](this['_vipData']['gameGsConf']['icon'], this['_conf']['icon'] || {}), this['_icon'] = new hi1a5(this['_vipData']), this['_icon']['onClick'](this['_onEntryIconClick']['bind'](this)), this['_tryAutoOpen']();
    }['_removeIcon']() {
      this['visible'] = ![], this['_icon'] && this['_icon']['close'] && (this['_icon']['close'](), this['_icon'] = null), this['_removePage']();
    }['_removePage']() {
      this['_page'] && (this['_page']['clear'](), this['_page'] = null);
    }['_tryAutoOpen']() {
      if (this['_vipData']['isAuth'] === 0x0 && !this['_vipData']['disabledAutoOpenQrcode']) {
        if (!this['_vipData']['gs']) return console['log']('[VIP] 没有绑定客服');this['_vipData']['useCopy'] && this['_initPage'](ap5b0['auto']);
      }
    }['_onEntryIconClick']() {
      this['_initPage'](ap5b0['click']), this['_log']['post'](od62z3['iconClick']);
    }['_initPage'](vcqe7) {
      console['log']('[VIP] _initPage'), this['_removePage'](), this['_page'] = new iaxh(this['_vipData'], this['_log'], vcqe7, this['_conf']);
    }
  }class h1ykxw {
    constructor() {
      let kyve1 = new bhix();kyve1['init']({ 'gameVersion': window['config']['game_ver'], 'vipGameId': window['config']['partner_game_id'], 'env': 'Prod', 'userId': G$3J['openid'], 'icon': { 'posX': 0x64, 'posY': 0x226 }, 'defShowIcon': !!sdk_info['is_vipds'], 'onLoad': (axbip, d3) => {
          console['log']('vip data loaded---', axbip, d3);
        } });
    }
  }return window['XingJuBoxMain'] = h1ykxw, exports['XingJuBoxMain'] = h1ykxw, exports;
}({});