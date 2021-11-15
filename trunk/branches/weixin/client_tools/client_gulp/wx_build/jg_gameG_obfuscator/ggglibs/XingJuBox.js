var m = wx.$g;
var gdo6z = function (exports) {
  'use strict';

  class $u6 {
    constructor(hib5a) {
      this['onClickEvent'] = () => {};if (!hib5a || !hib5a['gameGsConf'] || !hib5a['gameGsConf']['icon']) {
        console['log']('[VIP] Icon init data null', hib5a);return;
      }this['opt'] = hib5a['gameGsConf']['icon'], Laya['loader']['load'](this['opt']['url'], Laya['Handler']['create'](this, this['addIcon']));
    }['addIcon']() {
      let egvyq = Laya['loader']['getRes'](this['opt']['url']);this['icon'] = new Laya['Sprite'](), Laya['stage']['addChild'](this['icon']), this['icon']['pivot'](egvyq['width'] / 0x2, egvyq['height'] / 0x2);let pf0_ = this['opt']['x'] || this['opt']['posX'] || 0x0,
          iax = this['opt']['y'] || this['opt']['posY'] || 0x0;this['icon']['pos'](pf0_ === -0x1 ? Laya['stage']['width'] - egvyq['width'] - 0xf : pf0_, iax === -0x1 ? Laya['stage']['height'] / 0x2 : iax), this['icon']['size'](egvyq['width'], egvyq['height']), this['icon']['graphics']['clear'](), this['icon']['graphics']['drawTexture'](egvyq, 0x0, 0x0), this['bindDrag']();
    }['bindDrag']() {
      let kixa = this['icon']['width'],
          z23d = this['icon']['height'],
          dz23o = new Laya['Rectangle'](kixa / 0x2, z23d / 0x2, Laya['stage']['width'] - kixa, Laya['stage']['height'] - z23d);this['icon']['on'](Laya['Event']['MOUSE_DOWN'], this, () => {
        this['icon']['startDrag'](dz23o, !![], 0x64, 0x12c, null, !![]);
      }), this['icon']['on'](Laya['Event']['CLICK'], this, ro2dz => {
        this['onClickEvent']();
      });
    }['onClick'](q7gevy) {
      q7gevy && typeof q7gevy == 'function' && (this['onClickEvent'] = q7gevy);
    }['close']() {
      this['icon']['visible'] = ![], this['icon']['destroy']();
    }
  }const csl8g9 = { 'auto': 'AUTO', 'click': 'CLICK' },
        $jru2 = { 'iconShow': 'ICON-SHOW', 'iconClick': 'ICON-CLICK', 'copyClick': 'WECHAT-COPY', 'btnClick': 'BUTTON-CLICK', 'pageClose': 'CONF-CLOSE', 'pageShow': 'CONF-SHOW', 'copySecretNum': 'SECRET-COPY' },
        l8sqc = '/customer/api/v1/gs/log';class baxp5 {
    ['init'](xwa1h) {
      this['opt'] = Object['assign'](this['opt'] || {}, xwa1h);
    }['_jsonToQuery'](tf0_4) {
      let x1ihka = {};for (let scg7v in tf0_4) {
        'undefined' !== typeof tf0_4[scg7v] && (x1ihka[scg7v] = tf0_4[scg7v]);
      }return JSON['stringify'](x1ihka);
    }['post'](o4f3t, hxkw1) {
      if (!this['opt'] || !this['opt']['host']) return;let p_5b0i = '' + this['opt']['host'] + l8sqc,
          dj6zr = this['_jsonToQuery']({ 'gameId': this['opt']['gameId'], 'userId': this['opt']['userId'], 'gs': this['opt']['gs'], 'alias': o4f3t, 'gsWay': hxkw1 || this['opt']['openType'] });console['log']('[VIP] post log', dj6zr);let gcs8l = new Laya['HttpRequest']();gcs8l['send'](p_5b0i, dj6zr, 'post', null, ['Content-Type', 'application/json']);
    }
  }const t0fp4 = { 'bg': 0xb, 'avatar': 0xd, 'closer': 0xd, 'code': 0xe, 'cross': 0xf, 'account': 0x10, 'codeNum': 0x11, 'codeBtn': 0x12 };class ixh5 {
    constructor(rjm$u6, bhi, f30t4) {
      console['log']('[VIP] Page init', rjm$u6), this['config'] = rjm$u6, this['_log'] = bhi, this['_openType'] = f30t4, this['stageW'] = Laya['stage']['width'], this['stageH'] = Laya['stage']['height'], this['renderMask'](), this['renderBg'](() => {
        this['renderAvatar'](), this['renderClose'](), this['renderCode']();if (this['config']['useCopy']) this['renderWXAccount']();if (this['config']['gameGsConf']['secretary'] && this['config']['gameGsConf']['secretary']['number']) this['renderSecretaryNum']();this['_log'] && this['_log']['post']($jru2['pageShow'], this['_openType']);
      });
    }['setRate'](j2z6r$) {
      this['rate'] = this['stageW'] / j2z6r$['width'];
    }['newNode'](kewv1y) {
      kewv1y = kewv1y || Laya['stage'];let b50a = new Laya['Sprite']();return kewv1y['addChild'](b50a), b50a;
    }['setPos'](_4o, d623) {
      let k1vwe = this['rate'] || 0x1,
          aixb = d623['x'] || 0x0,
          t_0fpb = d623['y'] || 0x0,
          d3z24 = _4o['width'] / 0x2,
          rju26$ = _4o['height'] / 0x2;aixb == -0x1 ? aixb = this['stageW'] / 0x2 : (d3z24 = 0x0, aixb = aixb * k1vwe), t_0fpb == -0x1 ? t_0fpb = this['stageH'] / 0x2 : (t_0fpb = t_0fpb * k1vwe, rju26$ = 0x0), _4o['pivot'](d3z24, rju26$), _4o['pos'](aixb, t_0fpb), _4o['zOrder'] = d623['z'] || 0x0;
    }['drawSprite'](xhkyw1, oz2d63) {
      let _tof43 = Laya['loader']['getRes'](oz2d63);if (!_tof43) return;let o2d6zr = this['rate'] || 0x1,
          gqy7v = o2d6zr ? _tof43['width'] * o2d6zr : this['stageW'],
          r6$2jz = o2d6zr ? _tof43['height'] * o2d6zr : this['stageH'];xhkyw1['size'](gqy7v, r6$2jz), xhkyw1['graphics']['clear'](), xhkyw1['graphics']['drawTexture'](_tof43, 0x0, 0x0, gqy7v, r6$2jz);
    }['renderMask']() {
      let zd3 = this['config']['gameGsConf']['background'];this['mask'] = this['newNode'](), this['mask']['graphics']['drawRect'](0x0, 0x0, this['stageW'], this['stageH'], '#' + (zd3['color'] || 'aaaaaa'));
    }['renderBg'](_3f0) {
      let khi1a = this['config']['gameGsConf']['background'];this['bg'] = this['newNode'](), Laya['loader']['load'](khi1a['url'], Laya['Handler']['create'](this, () => {
        this['setRate'](Laya['loader']['getRes'](khi1a['url'])), this['drawSprite'](this['bg'], khi1a['url']), this['setPos'](this['bg'], { 'x': 0x0, 'y': 0x0, 'z': t0fp4['bg'] }), _3f0 && _3f0();
      }));
    }['renderAvatar']() {
      let gy7vq = this['config']['gameGsConf']['gsAvatar'];this['avatar'] = this['newNode'](this['bg']), Laya['loader']['load'](gy7vq['url'], Laya['Handler']['create'](this, () => {
        this['drawSprite'](this['avatar'], gy7vq['url']), this['setPos'](this['avatar'], { 'x': gy7vq['posX'], 'y': gy7vq['posY'], 'z': t0fp4['avatar'] });
      }));
    }['renderClose']() {
      let g7qvce = this['config']['gameGsConf']['closeBtn'];this['closer'] = this['newNode'](this['bg']), Laya['loader']['load'](g7qvce['url'], Laya['Handler']['create'](this, () => {
        this['drawSprite'](this['closer'], g7qvce['url']), this['setPos'](this['closer'], { 'x': g7qvce['posX'], 'y': g7qvce['posY'], 'z': t0fp4['closer'] }), this['closer']['on'](Laya['Event']['CLICK'], this, this['close']);
      }));
    }['renderCode']() {
      let _i0bp5 = this['config']['gameGsConf']['qrCodeBtn'];this['code'] = this['newNode'](this['bg']), Laya['loader']['load'](_i0bp5['url'], Laya['Handler']['create'](this, () => {
        this['drawSprite'](this['code'], _i0bp5['url']), this['setPos'](this['code'], { 'x': _i0bp5['posX'], 'y': _i0bp5['posY'], 'z': t0fp4['code'] }), this['code']['on'](Laya['Event']['CLICK'], this, this['onBtnClick']);
      }));
    }['renderWXAccount']() {
      let z6jr2$ = this['config']['wxAccount'] || '',
          e7cvgq = this['config']['gameGsConf']['copyAccount'];var $m6urj = new Laya['Text']();$m6urj['text'] = (e7cvgq['title'] || '') + z6jr2$, $m6urj['fontSize'] = e7cvgq['size'] || 0x20, $m6urj['align'] = e7cvgq['textAlign'] || 'center', $m6urj['color'] = e7cvgq['color'] || '#ffffff', this['setPos']($m6urj, { 'x': e7cvgq['posX'], 'y': e7cvgq['posY'], 'z': t0fp4['account'] }), this['bg']['addChild']($m6urj);
    }['close']() {
      this['clear'](), this['_log'] && this['_log']['post']($jru2['pageClose'], this['_openType']);
    }['clear']() {
      this['mask']['destroy'](), this['bg']['destroy']();
    }['onBtnClick']() {
      this['_log'] && this['_log']['post']($jru2['btnClick'], this['_openType']);if (!this['config']['gs']) {
        let ge7vqc = this['config']['gameGsConf']['gsMsg'] || '没有达到开通条件';wx && wx['showModal'] && wx['showModal']({ 'content': ge7vqc, 'showCancel': ![] });return;
      }if (this['config']['useCopy']) {
        this['onCopy'](this['config']);return;
      }console['warn']('此VIP模块仅支持复制功能\uFF01');
    }['renderSecretaryNum']() {
      const _ptf = this['config']['gameGsConf']['secretary'] || {};let r6mj = this['config']['gameGsConf']['exclusiveNumInfo'];const _of4t3 = _ptf['number'];if (!_of4t3) return;var b5x = new Laya['Text']();b5x['text'] = r6mj['title'] + _of4t3, b5x['fontSize'] = 0x20, b5x['horizontalAlign'] = 'center'['toUpperCase'](), b5x['color'] = r6mj['color'] || '#FFFFFF', this['setPos'](b5x, { 'x': r6mj['posX'], 'y': r6mj['posY'], 'z': t0fp4['codeNum'] }), this['bg']['addChild'](b5x), this['renderSecretBtn']();
    }['renderSecretBtn']() {
      let _4tpf0 = this['config']['gameGsConf']['exclusiveNumBtn'];this['exclusiveBtn'] = this['newNode'](this['bg']), Laya['loader']['load'](_4tpf0['url'], Laya['Handler']['create'](this, () => {
        this['drawSprite'](this['exclusiveBtn'], _4tpf0['url']), this['setPos'](this['exclusiveBtn'], { 'x': _4tpf0['posX'], 'y': _4tpf0['posY'], 'z': t0fp4['codeBtn'] }), this['exclusiveBtn']['on'](Laya['Event']['CLICK'], this, this['clickSercretBtn']);
      }));
    }['clickSercretBtn']() {
      const ekvyw = this['config']['gameGsConf']['secretary'] || {},
            v7qwe = ekvyw['number'];if (!v7qwe) return;wx && wx['setClipboardData'] && (wx['setClipboardData']({ 'data': v7qwe }), this['_log'] && this['_log']['post']($jru2['number'], this['_openType']));
    }['onCopy'](xhi5ba) {
      wx && wx['setClipboardData'] && xhi5ba && xhi5ba['wxAccount'] && (wx['setClipboardData']({ 'data': xhi5ba['wxAccount'] }), this['_log'] && this['_log']['post']($jru2['copySecretNum'], this['_openType']));
    }
  }const aix5h1 = { 'HOST': { 'Prod': 'https://platform.hortorgames.com', 'Test': 'https://platform-test.hortorgames.com' }, 'URLS': { 'Info': '/customer/api/v1/gs/info' } };class bp5_0 {
    ['init'](cgs8ql) {
      console['log']('[VIP] hortorVip init', cgs8ql), this['_showIcon'] = cgs8ql['defShowIcon'] !== ![], this['_log'] = new baxp5(), this['_init'](cgs8ql), this['_loadVipData']();
    }['showIcon']() {
      this['_showIcon'] = !![], this['visible'] = !![], this['_initEntryIcon'](), this['_log']['post']($jru2['iconShow']);
    }['hideIcon']() {
      this['_showIcon'] = ![], this['_removeIcon']();
    }['refreshData'](clqgs8) {
      this['_init'](clqgs8), this['_removeIcon'](), this['_loadVipData']();
    }['_init'](w1hkyx) {
      if (!w1hkyx) return;this['_conf'] = Object['assign'](this['_conf'] || {}, w1hkyx), this['_host'] = aix5h1['HOST'][this['_conf']['env']], this['_log']['init']({ 'gameId': this['_conf']['vipGameId'], 'userId': this['_conf']['userId'] || this['_conf']['openId'], 'host': this['_host'] });
    }['_loadVipData']() {
      console['log']('[VIP] _loadVipData');let k7vey = (c8g7, pi0a) => {
        console['log']('[VIP] _loadVipData loaded', c8g7, pi0a), typeof this['_conf']['onLoad'] === 'function' && this['_conf']['onLoad'](c8g7, pi0a);
      },
          kax1h = '' + this['_host'] + aix5h1['URLS']['Info'] + '?gameId=' + this['_conf']['vipGameId'] + '&userId=' + this['_conf']['userId'],
          pt04f = new Laya['HttpRequest']();pt04f['once'](Laya['Event']['COMPLETE'], this, wyx => {
        this['_vipData'] = JSON['parse'](wyx);if (this['_vipData']['meta'] && this['_vipData']['meta']['errCode']) {
          k7vey(this['_vipData']['meta']);return;
        }this['_log']['init']({ 'gs': this['_vipData']['gs'], 'openType': this['_vipData']['disabledAutoOpenQrcode'] ? csl8g9['click'] : csl8g9['auto'] }), k7vey(null, this['_vipData']), this['_showIcon'] && this['showIcon']();
      }), pt04f['once'](Laya['Event']['ERROR'], this, jr$ => {
        k7vey(jr$);
      }), pt04f['send'](kax1h, null, 'get', 'text');
    }['_initEntryIcon']() {
      if (this['_icon']) return console['log']('[VIP] 不能重复实例化 icon');if (!this['_vipData'] || !this['_vipData']['gameGsConf']) return console['log']('[VIP] 无配置信息');if (this['_vipData']['disabled']) return console['log']('[VIP] Disabled');this['_vipData']['gameGsConf']['useCross'] = this['_crossSDK'] && !this['_vipData']['gameGsConf']['gsAddType'], this['_vipData']['useQRCode'] = this['_vipData']['gs'] && !this['_vipData']['gameGsConf']['gsAddType'], this['_vipData']['useCopy'] = this['_vipData']['gs'] && this['_vipData']['gameGsConf']['gsAddType'] == 0x1, Object['assign'](this['_vipData']['gameGsConf']['icon'], this['_conf']['icon'] || {}), this['_icon'] = new $u6(this['_vipData']), this['_icon']['onClick'](this['_onEntryIconClick']['bind'](this)), this['_tryAutoOpen']();
    }['_removeIcon']() {
      this['visible'] = ![], this['_icon'] && this['_icon']['close'] && (this['_icon']['close'](), this['_icon'] = null), this['_removePage']();
    }['_removePage']() {
      this['_page'] && (this['_page']['clear'](), this['_page'] = null);
    }['_tryAutoOpen']() {
      if (this['_vipData']['isAuth'] === 0x0 && !this['_vipData']['disabledAutoOpenQrcode']) {
        if (!this['_vipData']['gs']) return console['log']('[VIP] 没有绑定客服');this['_vipData']['useCopy'] && this['_initPage'](csl8g9['auto']);
      }
    }['_onEntryIconClick']() {
      this['_initPage'](csl8g9['click']), this['_log']['post']($jru2['iconClick']);
    }['_initPage'](o3_4f) {
      console['log']('[VIP] _initPage'), this['_removePage'](), this['_page'] = new ixh5(this['_vipData'], this['_log'], o3_4f, this['_conf']);
    }
  }class api5 {
    constructor() {
      let whkx = new bp5_0();whkx['init']({ 'gameVersion': window['config']['game_ver'], 'vipGameId': window['config']['partner_game_id'], 'env': 'Prod', 'userId': G$3J['openid'], 'icon': { 'posX': 0x64, 'posY': 0x226 }, 'defShowIcon': !!sdk_info['is_vipds'], 'onLoad': (eq7yv, xab5ip) => {
          console['log']('vip data loaded---', eq7yv, xab5ip);
        } });
    }
  }return window['XingJuBoxMain'] = api5, exports['XingJuBoxMain'] = api5, exports;
}({});