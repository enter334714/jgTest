var m = wx.$g;
var gr6u$m = function (exports) {
  'use strict';

  class o4d {
    constructor(b50fp) {
      this['onClickEvent'] = () => {};if (!b50fp || !b50fp['gameGsConf'] || !b50fp['gameGsConf']['icon']) {
        console['log']('[VIP] Icon init data null', b50fp);return;
      }this['opt'] = b50fp['gameGsConf']['icon'], Laya['loader']['load'](this['opt']['url'], Laya['Handler']['create'](this, this['addIcon']));
    }['addIcon']() {
      let b0_ptf = Laya['loader']['getRes'](this['opt']['url']);this['icon'] = new Laya['Sprite'](), Laya['stage']['addChild'](this['icon']), this['icon']['pivot'](b0_ptf['width'] / 0x2, b0_ptf['height'] / 0x2);let weq7yv = this['opt']['x'] || this['opt']['posX'] || 0x0,
          cq8g7s = this['opt']['y'] || this['opt']['posY'] || 0x0;this['icon']['pos'](weq7yv === -0x1 ? Laya['stage']['width'] - b0_ptf['width'] - 0xf : weq7yv, cq8g7s === -0x1 ? Laya['stage']['height'] / 0x2 : cq8g7s), this['icon']['size'](b0_ptf['width'], b0_ptf['height']), this['icon']['graphics']['clear'](), this['icon']['graphics']['drawTexture'](b0_ptf, 0x0, 0x0), this['bindDrag']();
    }['bindDrag']() {
      let kwyxh = this['icon']['width'],
          _0i5b = this['icon']['height'],
          vsq7c = new Laya['Rectangle'](kwyxh / 0x2, _0i5b / 0x2, Laya['stage']['width'] - kwyxh, Laya['stage']['height'] - _0i5b);this['icon']['on'](Laya['Event']['MOUSE_DOWN'], this, () => {
        this['icon']['startDrag'](vsq7c, !![], 0x64, 0x12c, null, !![]);
      }), this['icon']['on'](Laya['Event']['CLICK'], this, f40_tp => {
        this['onClickEvent']();
      });
    }['onClick'](j$26zr) {
      j$26zr && typeof j$26zr == 'function' && (this['onClickEvent'] = j$26zr);
    }['close']() {
      this['icon']['visible'] = ![], this['icon']['destroy']();
    }
  }const o3tzd = { 'auto': 'AUTO', 'click': 'CLICK' },
        _5fbp = { 'iconShow': 'ICON-SHOW', 'iconClick': 'ICON-CLICK', 'copyClick': 'WECHAT-COPY', 'btnClick': 'BUTTON-CLICK', 'pageClose': 'CONF-CLOSE', 'pageShow': 'CONF-SHOW', 'copySecretNum': 'SECRET-COPY' },
        kxyw = '/customer/api/v1/gs/log';class kixa {
    ['init'](xiah5) {
      this['opt'] = Object['assign'](this['opt'] || {}, xiah5);
    }['_jsonToQuery'](zo24d3) {
      let ihx5 = {};for (let ekyv7w in zo24d3) {
        'undefined' !== typeof zo24d3[ekyv7w] && (ihx5[ekyv7w] = zo24d3[ekyv7w]);
      }return JSON['stringify'](ihx5);
    }['post'](lcgsq8, paxbi) {
      if (!this['opt'] || !this['opt']['host']) return;let xahi15 = '' + this['opt']['host'] + kxyw,
          yeg7v = this['_jsonToQuery']({ 'gameId': this['opt']['gameId'], 'userId': this['opt']['userId'], 'gs': this['opt']['gs'], 'alias': lcgsq8, 'gsWay': paxbi || this['opt']['openType'] });console['log']('[VIP] post log', yeg7v);let v7egyq = new Laya['HttpRequest']();v7egyq['send'](xahi15, yeg7v, 'post', null, ['Content-Type', 'application/json']);
    }
  }const baihx5 = { 'bg': 0xb, 'avatar': 0xd, 'closer': 0xd, 'code': 0xe, 'cross': 0xf, 'account': 0x10, 'codeNum': 0x11, 'codeBtn': 0x12 };class o6rz {
    constructor(hai, lqscg, kvw7y) {
      console['log']('[VIP] Page init', hai), this['config'] = hai, this['_log'] = lqscg, this['_openType'] = kvw7y, this['stageW'] = Laya['stage']['width'], this['stageH'] = Laya['stage']['height'], this['renderMask'](), this['renderBg'](() => {
        this['renderAvatar'](), this['renderClose'](), this['renderCode']();if (this['config']['useCopy']) this['renderWXAccount']();if (this['config']['gameGsConf']['secretary'] && this['config']['gameGsConf']['secretary']['number']) this['renderSecretaryNum']();this['_log'] && this['_log']['post'](_5fbp['pageShow'], this['_openType']);
      });
    }['setRate'](_5p0f) {
      this['rate'] = this['stageW'] / _5p0f['width'];
    }['newNode'](wkhe1) {
      wkhe1 = wkhe1 || Laya['stage'];let kxa1h = new Laya['Sprite']();return wkhe1['addChild'](kxa1h), kxa1h;
    }['setPos'](sgqcl, c7veg) {
      let i5pabx = this['rate'] || 0x1,
          xhkwa = c7veg['x'] || 0x0,
          sgqc7 = c7veg['y'] || 0x0,
          gsl8 = sgqcl['width'] / 0x2,
          g8sclq = sgqcl['height'] / 0x2;xhkwa == -0x1 ? xhkwa = this['stageW'] / 0x2 : (gsl8 = 0x0, xhkwa = xhkwa * i5pabx), sgqc7 == -0x1 ? sgqc7 = this['stageH'] / 0x2 : (sgqc7 = sgqc7 * i5pabx, g8sclq = 0x0), sgqcl['pivot'](gsl8, g8sclq), sgqcl['pos'](xhkwa, sgqc7), sgqcl['zOrder'] = c7veg['z'] || 0x0;
    }['drawSprite'](gs7vc, do632) {
      let ekvy = Laya['loader']['getRes'](do632);if (!ekvy) return;let xh1ia5 = this['rate'] || 0x1,
          r$2u6j = xh1ia5 ? ekvy['width'] * xh1ia5 : this['stageW'],
          kywh1 = xh1ia5 ? ekvy['height'] * xh1ia5 : this['stageH'];gs7vc['size'](r$2u6j, kywh1), gs7vc['graphics']['clear'](), gs7vc['graphics']['drawTexture'](ekvy, 0x0, 0x0, r$2u6j, kywh1);
    }['renderMask']() {
      let _tbf0p = this['config']['gameGsConf']['background'];this['mask'] = this['newNode'](), this['mask']['graphics']['drawRect'](0x0, 0x0, this['stageW'], this['stageH'], '#' + (_tbf0p['color'] || 'aaaaaa'));
    }['renderBg'](c7sgqv) {
      let _tf34 = this['config']['gameGsConf']['background'];this['bg'] = this['newNode'](), Laya['loader']['load'](_tf34['url'], Laya['Handler']['create'](this, () => {
        this['setRate'](Laya['loader']['getRes'](_tf34['url'])), this['drawSprite'](this['bg'], _tf34['url']), this['setPos'](this['bg'], { 'x': 0x0, 'y': 0x0, 'z': baihx5['bg'] }), c7sgqv && c7sgqv();
      }));
    }['renderAvatar']() {
      let glc8sq = this['config']['gameGsConf']['gsAvatar'];this['avatar'] = this['newNode'](this['bg']), Laya['loader']['load'](glc8sq['url'], Laya['Handler']['create'](this, () => {
        this['drawSprite'](this['avatar'], glc8sq['url']), this['setPos'](this['avatar'], { 'x': glc8sq['posX'], 'y': glc8sq['posY'], 'z': baihx5['avatar'] });
      }));
    }['renderClose']() {
      let yw1vk = this['config']['gameGsConf']['closeBtn'];this['closer'] = this['newNode'](this['bg']), Laya['loader']['load'](yw1vk['url'], Laya['Handler']['create'](this, () => {
        this['drawSprite'](this['closer'], yw1vk['url']), this['setPos'](this['closer'], { 'x': yw1vk['posX'], 'y': yw1vk['posY'], 'z': baihx5['closer'] }), this['closer']['on'](Laya['Event']['CLICK'], this, this['close']);
      }));
    }['renderCode']() {
      let _5 = this['config']['gameGsConf']['qrCodeBtn'];this['code'] = this['newNode'](this['bg']), Laya['loader']['load'](_5['url'], Laya['Handler']['create'](this, () => {
        this['drawSprite'](this['code'], _5['url']), this['setPos'](this['code'], { 'x': _5['posX'], 'y': _5['posY'], 'z': baihx5['code'] }), this['code']['on'](Laya['Event']['CLICK'], this, this['onBtnClick']);
      }));
    }['renderWXAccount']() {
      let hab5i = this['config']['wxAccount'] || '',
          xp5a = this['config']['gameGsConf']['copyAccount'];var ia5h1x = new Laya['Text']();ia5h1x['text'] = (xp5a['title'] || '') + hab5i, ia5h1x['fontSize'] = xp5a['size'] || 0x20, ia5h1x['align'] = xp5a['textAlign'] || 'center', ia5h1x['color'] = xp5a['color'] || '#ffffff', this['setPos'](ia5h1x, { 'x': xp5a['posX'], 'y': xp5a['posY'], 'z': baihx5['account'] }), this['bg']['addChild'](ia5h1x);
    }['close']() {
      this['clear'](), this['_log'] && this['_log']['post'](_5fbp['pageClose'], this['_openType']);
    }['clear']() {
      this['mask']['destroy'](), this['bg']['destroy']();
    }['onBtnClick']() {
      this['_log'] && this['_log']['post'](_5fbp['btnClick'], this['_openType']);if (!this['config']['gs']) {
        let x1hik = this['config']['gameGsConf']['gsMsg'] || '没有达到开通条件';wx && wx['showModal'] && wx['showModal']({ 'content': x1hik, 'showCancel': ![] });return;
      }if (this['config']['useCopy']) {
        this['onCopy'](this['config']);return;
      }console['warn']('此VIP模块仅支持复制功能\uFF01');
    }['renderSecretaryNum']() {
      const g8q = this['config']['gameGsConf']['secretary'] || {};let f3_t = this['config']['gameGsConf']['exclusiveNumInfo'];const ew1yh = g8q['number'];if (!ew1yh) return;var x1iah = new Laya['Text']();x1iah['text'] = f3_t['title'] + ew1yh, x1iah['fontSize'] = 0x20, x1iah['horizontalAlign'] = 'center'['toUpperCase'](), x1iah['color'] = f3_t['color'] || '#FFFFFF', this['setPos'](x1iah, { 'x': f3_t['posX'], 'y': f3_t['posY'], 'z': baihx5['codeNum'] }), this['bg']['addChild'](x1iah), this['renderSecretBtn']();
    }['renderSecretBtn']() {
      let xpbi = this['config']['gameGsConf']['exclusiveNumBtn'];this['exclusiveBtn'] = this['newNode'](this['bg']), Laya['loader']['load'](xpbi['url'], Laya['Handler']['create'](this, () => {
        this['drawSprite'](this['exclusiveBtn'], xpbi['url']), this['setPos'](this['exclusiveBtn'], { 'x': xpbi['posX'], 'y': xpbi['posY'], 'z': baihx5['codeBtn'] }), this['exclusiveBtn']['on'](Laya['Event']['CLICK'], this, this['clickSercretBtn']);
      }));
    }['clickSercretBtn']() {
      const khax1 = this['config']['gameGsConf']['secretary'] || {},
            c8gq7s = khax1['number'];if (!c8gq7s) return;wx && wx['setClipboardData'] && (wx['setClipboardData']({ 'data': c8gq7s }), this['_log'] && this['_log']['post'](_5fbp['number'], this['_openType']));
    }['onCopy'](t403) {
      wx && wx['setClipboardData'] && t403 && t403['wxAccount'] && (wx['setClipboardData']({ 'data': t403['wxAccount'] }), this['_log'] && this['_log']['post'](_5fbp['copySecretNum'], this['_openType']));
    }
  }const z6d2jr = { 'HOST': { 'Prod': 'https://platform.hortorgames.com', 'Test': 'https://platform-test.hortorgames.com' }, 'URLS': { 'Info': '/customer/api/v1/gs/info' } };class ztd43 {
    ['init'](j2u6r$) {
      console['log']('[VIP] hortorVip init', j2u6r$), this['_showIcon'] = j2u6r$['defShowIcon'] !== ![], this['_log'] = new kixa(), this['_init'](j2u6r$), this['_loadVipData']();
    }['showIcon']() {
      this['_showIcon'] = !![], this['visible'] = !![], this['_initEntryIcon'](), this['_log']['post'](_5fbp['iconShow']);
    }['hideIcon']() {
      this['_showIcon'] = ![], this['_removeIcon']();
    }['refreshData'](g8lc9) {
      this['_init'](g8lc9), this['_removeIcon'](), this['_loadVipData']();
    }['_init'](ro2zd6) {
      if (!ro2zd6) return;this['_conf'] = Object['assign'](this['_conf'] || {}, ro2zd6), this['_host'] = z6d2jr['HOST'][this['_conf']['env']], this['_log']['init']({ 'gameId': this['_conf']['vipGameId'], 'userId': this['_conf']['userId'] || this['_conf']['openId'], 'host': this['_host'] });
    }['_loadVipData']() {
      console['log']('[VIP] _loadVipData');let fpt_ = (cslq8g, ap05b) => {
        console['log']('[VIP] _loadVipData loaded', cslq8g, ap05b), typeof this['_conf']['onLoad'] === 'function' && this['_conf']['onLoad'](cslq8g, ap05b);
      },
          iap5b0 = '' + this['_host'] + z6d2jr['URLS']['Info'] + '?gameId=' + this['_conf']['vipGameId'] + '&userId=' + this['_conf']['userId'],
          d4tz3o = new Laya['HttpRequest']();d4tz3o['once'](Laya['Event']['COMPLETE'], this, zr2d6o => {
        this['_vipData'] = JSON['parse'](zr2d6o);if (this['_vipData']['meta'] && this['_vipData']['meta']['errCode']) {
          fpt_(this['_vipData']['meta']);return;
        }this['_log']['init']({ 'gs': this['_vipData']['gs'], 'openType': this['_vipData']['disabledAutoOpenQrcode'] ? o3tzd['click'] : o3tzd['auto'] }), fpt_(null, this['_vipData']), this['_showIcon'] && this['showIcon']();
      }), d4tz3o['once'](Laya['Event']['ERROR'], this, y7qv => {
        fpt_(y7qv);
      }), d4tz3o['send'](iap5b0, null, 'get', 'text');
    }['_initEntryIcon']() {
      if (this['_icon']) return console['log']('[VIP] 不能重复实例化 icon');if (!this['_vipData'] || !this['_vipData']['gameGsConf']) return console['log']('[VIP] 无配置信息');if (this['_vipData']['disabled']) return console['log']('[VIP] Disabled');this['_vipData']['gameGsConf']['useCross'] = this['_crossSDK'] && !this['_vipData']['gameGsConf']['gsAddType'], this['_vipData']['useQRCode'] = this['_vipData']['gs'] && !this['_vipData']['gameGsConf']['gsAddType'], this['_vipData']['useCopy'] = this['_vipData']['gs'] && this['_vipData']['gameGsConf']['gsAddType'] == 0x1, Object['assign'](this['_vipData']['gameGsConf']['icon'], this['_conf']['icon'] || {}), this['_icon'] = new o4d(this['_vipData']), this['_icon']['onClick'](this['_onEntryIconClick']['bind'](this)), this['_tryAutoOpen']();
    }['_removeIcon']() {
      this['visible'] = ![], this['_icon'] && this['_icon']['close'] && (this['_icon']['close'](), this['_icon'] = null), this['_removePage']();
    }['_removePage']() {
      this['_page'] && (this['_page']['clear'](), this['_page'] = null);
    }['_tryAutoOpen']() {
      if (this['_vipData']['isAuth'] === 0x0 && !this['_vipData']['disabledAutoOpenQrcode']) {
        if (!this['_vipData']['gs']) return console['log']('[VIP] 没有绑定客服');this['_vipData']['useCopy'] && this['_initPage'](o3tzd['auto']);
      }
    }['_onEntryIconClick']() {
      this['_initPage'](o3tzd['click']), this['_log']['post'](_5fbp['iconClick']);
    }['_initPage'](_pib05) {
      console['log']('[VIP] _initPage'), this['_removePage'](), this['_page'] = new o6rz(this['_vipData'], this['_log'], _pib05, this['_conf']);
    }
  }class pfb {
    constructor() {
      let gs8c9 = new ztd43();gs8c9['init']({ 'gameVersion': window['config']['game_ver'], 'vipGameId': window['config']['partner_game_id'], 'env': 'Prod', 'userId': G$3J['openid'], 'icon': { 'posX': 0x64, 'posY': 0x226 }, 'defShowIcon': !!sdkInitRes['is_vipds'], 'onLoad': (dz2o34, k7vyw) => {
          console['log']('vip data loaded---', dz2o34, k7vyw);
        } });
    }
  }return window['XingJuBoxMain'] = pfb, exports['XingJuBoxMain'] = pfb, exports;
}({});