var m = wx.$g;
var g$6jzr = function (exports) {
  'use strict';

  class sqc7gv {
    constructor(ke7) {
      this['onClickEvent'] = () => {};if (!ke7 || !ke7['gameGsConf'] || !ke7['gameGsConf']['icon']) {
        console['log']('[VIP] Icon init data null', ke7);return;
      }this['opt'] = ke7['gameGsConf']['icon'], Laya['loader']['load'](this['opt']['url'], Laya['Handler']['create'](this, this['addIcon']));
    }['addIcon']() {
      let qgevy7 = Laya['loader']['getRes'](this['opt']['url']);this['icon'] = new Laya['Sprite'](), Laya['stage']['addChild'](this['icon']), this['icon']['pivot'](qgevy7['width'] / 0x2, qgevy7['height'] / 0x2);let w1akx = this['opt']['x'] || this['opt']['posX'] || 0x0,
          p_4f0 = this['opt']['y'] || this['opt']['posY'] || 0x0;this['icon']['pos'](w1akx === -0x1 ? Laya['stage']['width'] - qgevy7['width'] - 0xf : w1akx, p_4f0 === -0x1 ? Laya['stage']['height'] / 0x2 : p_4f0), this['icon']['size'](qgevy7['width'], qgevy7['height']), this['icon']['graphics']['clear'](), this['icon']['graphics']['drawTexture'](qgevy7, 0x0, 0x0), this['bindDrag']();
    }['bindDrag']() {
      let wv1eky = this['icon']['width'],
          eyq7wv = this['icon']['height'],
          yhe1w = new Laya['Rectangle'](wv1eky / 0x2, eyq7wv / 0x2, Laya['stage']['width'] - wv1eky, Laya['stage']['height'] - eyq7wv);this['icon']['on'](Laya['Event']['MOUSE_DOWN'], this, () => {
        this['icon']['startDrag'](yhe1w, !![], 0x64, 0x12c, null, !![]);
      }), this['icon']['on'](Laya['Event']['CLICK'], this, e7vcqg => {
        this['onClickEvent']();
      });
    }['onClick'](z6d2j) {
      z6d2j && typeof z6d2j == 'function' && (this['onClickEvent'] = z6d2j);
    }['close']() {
      this['icon']['visible'] = ![], this['icon']['destroy']();
    }
  }const rjd6z2 = { 'auto': 'AUTO', 'click': 'CLICK' },
        ia1xk = { 'iconShow': 'ICON-SHOW', 'iconClick': 'ICON-CLICK', 'copyClick': 'WECHAT-COPY', 'btnClick': 'BUTTON-CLICK', 'pageClose': 'CONF-CLOSE', 'pageShow': 'CONF-SHOW', 'copySecretNum': 'SECRET-COPY' },
        do2z3 = '/customer/api/v1/gs/log';class w7eyvq {
    ['init'](rj62u$) {
      this['opt'] = Object['assign'](this['opt'] || {}, rj62u$);
    }['_jsonToQuery'](b0a) {
      let qwvey = {};for (let bp0t in b0a) {
        'undefined' !== typeof b0a[bp0t] && (qwvey[bp0t] = b0a[bp0t]);
      }return JSON['stringify'](qwvey);
    }['post'](qvs7cg, tzo3d4) {
      if (!this['opt'] || !this['opt']['host']) return;let ihb5 = '' + this['opt']['host'] + do2z3,
          c7s8qg = this['_jsonToQuery']({ 'gameId': this['opt']['gameId'], 'userId': this['opt']['userId'], 'gs': this['opt']['gs'], 'alias': qvs7cg, 'gsWay': tzo3d4 || this['opt']['openType'] });console['log']('[VIP] post log', c7s8qg);let z6r$ = new Laya['HttpRequest']();z6r$['send'](ihb5, c7s8qg, 'post', null, ['Content-Type', 'application/json']);
    }
  }const p_0i5b = { 'bg': 0xb, 'avatar': 0xd, 'closer': 0xd, 'code': 0xe, 'cross': 0xf, 'account': 0x10, 'codeNum': 0x11, 'codeBtn': 0x12 };class wka1x {
    constructor(g8cls, _f5bp0, dzo34) {
      console['log']('[VIP] Page init', g8cls), this['config'] = g8cls, this['_log'] = _f5bp0, this['_openType'] = dzo34, this['stageW'] = Laya['stage']['width'], this['stageH'] = Laya['stage']['height'], this['renderMask'](), this['renderBg'](() => {
        this['renderAvatar'](), this['renderClose'](), this['renderCode']();if (this['config']['useCopy']) this['renderWXAccount']();if (this['config']['gameGsConf']['secretary'] && this['config']['gameGsConf']['secretary']['number']) this['renderSecretaryNum']();this['_log'] && this['_log']['post'](ia1xk['pageShow'], this['_openType']);
      });
    }['setRate'](s7cgv) {
      this['rate'] = this['stageW'] / s7cgv['width'];
    }['newNode'](o4_t3f) {
      o4_t3f = o4_t3f || Laya['stage'];let ah5xi1 = new Laya['Sprite']();return o4_t3f['addChild'](ah5xi1), ah5xi1;
    }['setPos'](ur6jm, y1hke) {
      let csq7g = this['rate'] || 0x1,
          rd26o = y1hke['x'] || 0x0,
          pi5a0 = y1hke['y'] || 0x0,
          yh1xw = ur6jm['width'] / 0x2,
          _f0tbp = ur6jm['height'] / 0x2;rd26o == -0x1 ? rd26o = this['stageW'] / 0x2 : (yh1xw = 0x0, rd26o = rd26o * csq7g), pi5a0 == -0x1 ? pi5a0 = this['stageH'] / 0x2 : (pi5a0 = pi5a0 * csq7g, _f0tbp = 0x0), ur6jm['pivot'](yh1xw, _f0tbp), ur6jm['pos'](rd26o, pi5a0), ur6jm['zOrder'] = y1hke['z'] || 0x0;
    }['drawSprite'](pi_05b, gqvey) {
      let cgl8s9 = Laya['loader']['getRes'](gqvey);if (!cgl8s9) return;let qcl8 = this['rate'] || 0x1,
          vyge = qcl8 ? cgl8s9['width'] * qcl8 : this['stageW'],
          axhb5 = qcl8 ? cgl8s9['height'] * qcl8 : this['stageH'];pi_05b['size'](vyge, axhb5), pi_05b['graphics']['clear'](), pi_05b['graphics']['drawTexture'](cgl8s9, 0x0, 0x0, vyge, axhb5);
    }['renderMask']() {
      let hk1axw = this['config']['gameGsConf']['background'];this['mask'] = this['newNode'](), this['mask']['graphics']['drawRect'](0x0, 0x0, this['stageW'], this['stageH'], '#' + (hk1axw['color'] || 'aaaaaa'));
    }['renderBg'](_b5p0i) {
      let a15hxi = this['config']['gameGsConf']['background'];this['bg'] = this['newNode'](), Laya['loader']['load'](a15hxi['url'], Laya['Handler']['create'](this, () => {
        this['setRate'](Laya['loader']['getRes'](a15hxi['url'])), this['drawSprite'](this['bg'], a15hxi['url']), this['setPos'](this['bg'], { 'x': 0x0, 'y': 0x0, 'z': p_0i5b['bg'] }), _b5p0i && _b5p0i();
      }));
    }['renderAvatar']() {
      let c8slqg = this['config']['gameGsConf']['gsAvatar'];this['avatar'] = this['newNode'](this['bg']), Laya['loader']['load'](c8slqg['url'], Laya['Handler']['create'](this, () => {
        this['drawSprite'](this['avatar'], c8slqg['url']), this['setPos'](this['avatar'], { 'x': c8slqg['posX'], 'y': c8slqg['posY'], 'z': p_0i5b['avatar'] });
      }));
    }['renderClose']() {
      let b_0tpf = this['config']['gameGsConf']['closeBtn'];this['closer'] = this['newNode'](this['bg']), Laya['loader']['load'](b_0tpf['url'], Laya['Handler']['create'](this, () => {
        this['drawSprite'](this['closer'], b_0tpf['url']), this['setPos'](this['closer'], { 'x': b_0tpf['posX'], 'y': b_0tpf['posY'], 'z': p_0i5b['closer'] }), this['closer']['on'](Laya['Event']['CLICK'], this, this['close']);
      }));
    }['renderCode']() {
      let g7veq = this['config']['gameGsConf']['qrCodeBtn'];this['code'] = this['newNode'](this['bg']), Laya['loader']['load'](g7veq['url'], Laya['Handler']['create'](this, () => {
        this['drawSprite'](this['code'], g7veq['url']), this['setPos'](this['code'], { 'x': g7veq['posX'], 'y': g7veq['posY'], 'z': p_0i5b['code'] }), this['code']['on'](Laya['Event']['CLICK'], this, this['onBtnClick']);
      }));
    }['renderWXAccount']() {
      let zjd6 = this['config']['wxAccount'] || '',
          k1xiha = this['config']['gameGsConf']['copyAccount'];var b5pai = new Laya['Text']();b5pai['text'] = (k1xiha['title'] || '') + zjd6, b5pai['fontSize'] = k1xiha['size'] || 0x20, b5pai['align'] = k1xiha['textAlign'] || 'center', b5pai['color'] = k1xiha['color'] || '#ffffff', this['setPos'](b5pai, { 'x': k1xiha['posX'], 'y': k1xiha['posY'], 'z': p_0i5b['account'] }), this['bg']['addChild'](b5pai);
    }['close']() {
      this['clear'](), this['_log'] && this['_log']['post'](ia1xk['pageClose'], this['_openType']);
    }['clear']() {
      this['mask']['destroy'](), this['bg']['destroy']();
    }['onBtnClick']() {
      this['_log'] && this['_log']['post'](ia1xk['btnClick'], this['_openType']);if (!this['config']['gs']) {
        let cg8qsl = this['config']['gameGsConf']['gsMsg'] || '没有达到开通条件';wx && wx['showModal'] && wx['showModal']({ 'content': cg8qsl, 'showCancel': ![] });return;
      }if (this['config']['useCopy']) {
        this['onCopy'](this['config']);return;
      }console['warn']('此VIP模块仅支持复制功能\uFF01');
    }['renderSecretaryNum']() {
      const hi1ax = this['config']['gameGsConf']['secretary'] || {};let yvwke1 = this['config']['gameGsConf']['exclusiveNumInfo'];const ew7qyv = hi1ax['number'];if (!ew7qyv) return;var mru6$j = new Laya['Text']();mru6$j['text'] = yvwke1['title'] + ew7qyv, mru6$j['fontSize'] = 0x20, mru6$j['horizontalAlign'] = 'center'['toUpperCase'](), mru6$j['color'] = yvwke1['color'] || '#FFFFFF', this['setPos'](mru6$j, { 'x': yvwke1['posX'], 'y': yvwke1['posY'], 'z': p_0i5b['codeNum'] }), this['bg']['addChild'](mru6$j), this['renderSecretBtn']();
    }['renderSecretBtn']() {
      let hi5x1a = this['config']['gameGsConf']['exclusiveNumBtn'];this['exclusiveBtn'] = this['newNode'](this['bg']), Laya['loader']['load'](hi5x1a['url'], Laya['Handler']['create'](this, () => {
        this['drawSprite'](this['exclusiveBtn'], hi5x1a['url']), this['setPos'](this['exclusiveBtn'], { 'x': hi5x1a['posX'], 'y': hi5x1a['posY'], 'z': p_0i5b['codeBtn'] }), this['exclusiveBtn']['on'](Laya['Event']['CLICK'], this, this['clickSercretBtn']);
      }));
    }['clickSercretBtn']() {
      const tf340 = this['config']['gameGsConf']['secretary'] || {},
            pbai05 = tf340['number'];if (!pbai05) return;wx && wx['setClipboardData'] && (wx['setClipboardData']({ 'data': pbai05 }), this['_log'] && this['_log']['post'](ia1xk['number'], this['_openType']));
    }['onCopy'](xbih) {
      wx && wx['setClipboardData'] && xbih && xbih['wxAccount'] && (wx['setClipboardData']({ 'data': xbih['wxAccount'] }), this['_log'] && this['_log']['post'](ia1xk['copySecretNum'], this['_openType']));
    }
  }const $6mr = { 'HOST': { 'Prod': 'https://platform.hortorgames.com', 'Test': 'https://platform-test.hortorgames.com' }, 'URLS': { 'Info': '/customer/api/v1/gs/info' } };class o3dtz {
    ['init'](xaik) {
      console['log']('[VIP] hortorVip init', xaik), this['_showIcon'] = xaik['defShowIcon'] !== ![], this['_log'] = new w7eyvq(), this['_init'](xaik), this['_loadVipData']();
    }['showIcon']() {
      this['_showIcon'] = !![], this['visible'] = !![], this['_initEntryIcon'](), this['_log']['post'](ia1xk['iconShow']);
    }['hideIcon']() {
      this['_showIcon'] = ![], this['_removeIcon']();
    }['refreshData'](zo326d) {
      this['_init'](zo326d), this['_removeIcon'](), this['_loadVipData']();
    }['_init'](abix) {
      if (!abix) return;this['_conf'] = Object['assign'](this['_conf'] || {}, abix), this['_host'] = $6mr['HOST'][this['_conf']['env']], this['_log']['init']({ 'gameId': this['_conf']['vipGameId'], 'userId': this['_conf']['userId'] || this['_conf']['openId'], 'host': this['_host'] });
    }['_loadVipData']() {
      console['log']('[VIP] _loadVipData');let od26z = (tod34, f43t_o) => {
        console['log']('[VIP] _loadVipData loaded', tod34, f43t_o), typeof this['_conf']['onLoad'] === 'function' && this['_conf']['onLoad'](tod34, f43t_o);
      },
          oft34 = '' + this['_host'] + $6mr['URLS']['Info'] + '?gameId=' + this['_conf']['vipGameId'] + '&userId=' + this['_conf']['userId'],
          $mj6u = new Laya['HttpRequest']();$mj6u['once'](Laya['Event']['COMPLETE'], this, gveq7c => {
        this['_vipData'] = JSON['parse'](gveq7c);if (this['_vipData']['meta'] && this['_vipData']['meta']['errCode']) {
          od26z(this['_vipData']['meta']);return;
        }this['_log']['init']({ 'gs': this['_vipData']['gs'], 'openType': this['_vipData']['disabledAutoOpenQrcode'] ? rjd6z2['click'] : rjd6z2['auto'] }), od26z(null, this['_vipData']), this['_showIcon'] && this['showIcon']();
      }), $mj6u['once'](Laya['Event']['ERROR'], this, hx1a => {
        od26z(hx1a);
      }), $mj6u['send'](oft34, null, 'get', 'text');
    }['_initEntryIcon']() {
      if (this['_icon']) return console['log']('[VIP] 不能重复实例化 icon');if (!this['_vipData'] || !this['_vipData']['gameGsConf']) return console['log']('[VIP] 无配置信息');if (this['_vipData']['disabled']) return console['log']('[VIP] Disabled');this['_vipData']['gameGsConf']['useCross'] = this['_crossSDK'] && !this['_vipData']['gameGsConf']['gsAddType'], this['_vipData']['useQRCode'] = this['_vipData']['gs'] && !this['_vipData']['gameGsConf']['gsAddType'], this['_vipData']['useCopy'] = this['_vipData']['gs'] && this['_vipData']['gameGsConf']['gsAddType'] == 0x1, Object['assign'](this['_vipData']['gameGsConf']['icon'], this['_conf']['icon'] || {}), this['_icon'] = new sqc7gv(this['_vipData']), this['_icon']['onClick'](this['_onEntryIconClick']['bind'](this)), this['_tryAutoOpen']();
    }['_removeIcon']() {
      this['visible'] = ![], this['_icon'] && this['_icon']['close'] && (this['_icon']['close'](), this['_icon'] = null), this['_removePage']();
    }['_removePage']() {
      this['_page'] && (this['_page']['clear'](), this['_page'] = null);
    }['_tryAutoOpen']() {
      if (this['_vipData']['isAuth'] === 0x0 && !this['_vipData']['disabledAutoOpenQrcode']) {
        if (!this['_vipData']['gs']) return console['log']('[VIP] 没有绑定客服');this['_vipData']['useCopy'] && this['_initPage'](rjd6z2['auto']);
      }
    }['_onEntryIconClick']() {
      this['_initPage'](rjd6z2['click']), this['_log']['post'](ia1xk['iconClick']);
    }['_initPage'](ahw1k) {
      console['log']('[VIP] _initPage'), this['_removePage'](), this['_page'] = new wka1x(this['_vipData'], this['_log'], ahw1k, this['_conf']);
    }
  }class q7gcv {
    constructor() {
      let zd6o32 = new o3dtz();zd6o32['init']({ 'gameVersion': window['config']['game_ver'], 'vipGameId': window['config']['partner_game_id'], 'env': 'Prod', 'userId': G$3J['openid'], 'icon': { 'posX': 0x64, 'posY': 0x226 }, 'defShowIcon': !!sdk_info['is_vipds'], 'onLoad': (_05bi, do34z) => {
          console['log']('vip data loaded---', _05bi, do34z);
        } });
    }
  }return window['XingJuBoxMain'] = q7gcv, exports['XingJuBoxMain'] = q7gcv, exports;
}({});