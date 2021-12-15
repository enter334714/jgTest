var m = wx.$g;
var g_b0tfp = function (exports) {
  'use strict';

  class eky1h {
    constructor(cl9sg8) {
      this['onClickEvent'] = () => {};if (!cl9sg8 || !cl9sg8['gameGsConf'] || !cl9sg8['gameGsConf']['icon']) {
        console['log']('[VIP] Icon init data null', cl9sg8);return;
      }this['opt'] = cl9sg8['gameGsConf']['icon'], Laya['loader']['load'](this['opt']['url'], Laya['Handler']['create'](this, this['addIcon']));
    }['addIcon']() {
      let f0b_5p = Laya['loader']['getRes'](this['opt']['url']);this['icon'] = new Laya['Sprite'](), Laya['stage']['addChild'](this['icon']), this['icon']['pivot'](f0b_5p['width'] / 0x2, f0b_5p['height'] / 0x2);let $6mur = this['opt']['x'] || this['opt']['posX'] || 0x0,
          p5i0ab = this['opt']['y'] || this['opt']['posY'] || 0x0;this['icon']['pos']($6mur === -0x1 ? Laya['stage']['width'] - f0b_5p['width'] - 0xf : $6mur, p5i0ab === -0x1 ? Laya['stage']['height'] / 0x2 : p5i0ab), this['icon']['size'](f0b_5p['width'], f0b_5p['height']), this['icon']['graphics']['clear'](), this['icon']['graphics']['drawTexture'](f0b_5p, 0x0, 0x0), this['bindDrag']();
    }['bindDrag']() {
      let cq7gv = this['icon']['width'],
          q8glc = this['icon']['height'],
          o3t4zd = new Laya['Rectangle'](cq7gv / 0x2, q8glc / 0x2, Laya['stage']['width'] - cq7gv, Laya['stage']['height'] - q8glc);this['icon']['on'](Laya['Event']['MOUSE_DOWN'], this, () => {
        this['icon']['startDrag'](o3t4zd, !![], 0x64, 0x12c, null, !![]);
      }), this['icon']['on'](Laya['Event']['CLICK'], this, z3o62 => {
        this['onClickEvent']();
      });
    }['onClick'](vw7yeq) {
      vw7yeq && typeof vw7yeq == 'function' && (this['onClickEvent'] = vw7yeq);
    }['close']() {
      this['icon']['visible'] = ![], this['icon']['destroy']();
    }
  }const zj$2 = { 'auto': 'AUTO', 'click': 'CLICK' },
        rjz26$ = { 'iconShow': 'ICON-SHOW', 'iconClick': 'ICON-CLICK', 'copyClick': 'WECHAT-COPY', 'btnClick': 'BUTTON-CLICK', 'pageClose': 'CONF-CLOSE', 'pageShow': 'CONF-SHOW', 'copySecretNum': 'SECRET-COPY' },
        yveqg = '/customer/api/v1/gs/log';class w1hke {
    ['init'](ka1i) {
      this['opt'] = Object['assign'](this['opt'] || {}, ka1i);
    }['_jsonToQuery'](hxawk1) {
      let qscgl = {};for (let j2zr6d in hxawk1) {
        'undefined' !== typeof hxawk1[j2zr6d] && (qscgl[j2zr6d] = hxawk1[j2zr6d]);
      }return JSON['stringify'](qscgl);
    }['post'](p0_b5i, p_t) {
      if (!this['opt'] || !this['opt']['host']) return;let od32z4 = '' + this['opt']['host'] + yveqg,
          csq8g7 = this['_jsonToQuery']({ 'gameId': this['opt']['gameId'], 'userId': this['opt']['userId'], 'gs': this['opt']['gs'], 'alias': p0_b5i, 'gsWay': p_t || this['opt']['openType'] });console['log']('[VIP] post log', csq8g7);let _40ft3 = new Laya['HttpRequest']();_40ft3['send'](od32z4, csq8g7, 'post', null, ['Content-Type', 'application/json']);
    }
  }const i5_0pb = { 'bg': 0xb, 'avatar': 0xd, 'closer': 0xd, 'code': 0xe, 'cross': 0xf, 'account': 0x10, 'codeNum': 0x11, 'codeBtn': 0x12 };class a1hkx {
    constructor(dt4zo, f3otd, z3td4o) {
      console['log']('[VIP] Page init', dt4zo), this['config'] = dt4zo, this['_log'] = f3otd, this['_openType'] = z3td4o, this['stageW'] = Laya['stage']['width'], this['stageH'] = Laya['stage']['height'], this['renderMask'](), this['renderBg'](() => {
        this['renderAvatar'](), this['renderClose'](), this['renderCode']();if (this['config']['useCopy']) this['renderWXAccount']();if (this['config']['gameGsConf']['secretary'] && this['config']['gameGsConf']['secretary']['number']) this['renderSecretaryNum']();this['_log'] && this['_log']['post'](rjz26$['pageShow'], this['_openType']);
      });
    }['setRate'](sg9l8c) {
      this['rate'] = this['stageW'] / sg9l8c['width'];
    }['newNode'](h15ixa) {
      h15ixa = h15ixa || Laya['stage'];let bp5xi = new Laya['Sprite']();return h15ixa['addChild'](bp5xi), bp5xi;
    }['setPos'](t4z, df3t4o) {
      let i51hx = this['rate'] || 0x1,
          pftb = df3t4o['x'] || 0x0,
          kxahw = df3t4o['y'] || 0x0,
          r26$j = t4z['width'] / 0x2,
          h1ekw = t4z['height'] / 0x2;pftb == -0x1 ? pftb = this['stageW'] / 0x2 : (r26$j = 0x0, pftb = pftb * i51hx), kxahw == -0x1 ? kxahw = this['stageH'] / 0x2 : (kxahw = kxahw * i51hx, h1ekw = 0x0), t4z['pivot'](r26$j, h1ekw), t4z['pos'](pftb, kxahw), t4z['zOrder'] = df3t4o['z'] || 0x0;
    }['drawSprite'](xbh5, bapi50) {
      let kxwhy1 = Laya['loader']['getRes'](bapi50);if (!kxwhy1) return;let hywk1 = this['rate'] || 0x1,
          y1vw = hywk1 ? kxwhy1['width'] * hywk1 : this['stageW'],
          qcvge = hywk1 ? kxwhy1['height'] * hywk1 : this['stageH'];xbh5['size'](y1vw, qcvge), xbh5['graphics']['clear'](), xbh5['graphics']['drawTexture'](kxwhy1, 0x0, 0x0, y1vw, qcvge);
    }['renderMask']() {
      let hikx = this['config']['gameGsConf']['background'];this['mask'] = this['newNode'](), this['mask']['graphics']['drawRect'](0x0, 0x0, this['stageW'], this['stageH'], '#' + (hikx['color'] || 'aaaaaa'));
    }['renderBg'](f4t0_3) {
      let o4z2 = this['config']['gameGsConf']['background'];this['bg'] = this['newNode'](), Laya['loader']['load'](o4z2['url'], Laya['Handler']['create'](this, () => {
        this['setRate'](Laya['loader']['getRes'](o4z2['url'])), this['drawSprite'](this['bg'], o4z2['url']), this['setPos'](this['bg'], { 'x': 0x0, 'y': 0x0, 'z': i5_0pb['bg'] }), f4t0_3 && f4t0_3();
      }));
    }['renderAvatar']() {
      let _f0bp = this['config']['gameGsConf']['gsAvatar'];this['avatar'] = this['newNode'](this['bg']), Laya['loader']['load'](_f0bp['url'], Laya['Handler']['create'](this, () => {
        this['drawSprite'](this['avatar'], _f0bp['url']), this['setPos'](this['avatar'], { 'x': _f0bp['posX'], 'y': _f0bp['posY'], 'z': i5_0pb['avatar'] });
      }));
    }['renderClose']() {
      let kwv7 = this['config']['gameGsConf']['closeBtn'];this['closer'] = this['newNode'](this['bg']), Laya['loader']['load'](kwv7['url'], Laya['Handler']['create'](this, () => {
        this['drawSprite'](this['closer'], kwv7['url']), this['setPos'](this['closer'], { 'x': kwv7['posX'], 'y': kwv7['posY'], 'z': i5_0pb['closer'] }), this['closer']['on'](Laya['Event']['CLICK'], this, this['close']);
      }));
    }['renderCode']() {
      let haix5 = this['config']['gameGsConf']['qrCodeBtn'];this['code'] = this['newNode'](this['bg']), Laya['loader']['load'](haix5['url'], Laya['Handler']['create'](this, () => {
        this['drawSprite'](this['code'], haix5['url']), this['setPos'](this['code'], { 'x': haix5['posX'], 'y': haix5['posY'], 'z': i5_0pb['code'] }), this['code']['on'](Laya['Event']['CLICK'], this, this['onBtnClick']);
      }));
    }['renderWXAccount']() {
      let t0_f4 = this['config']['wxAccount'] || '',
          odz3t = this['config']['gameGsConf']['copyAccount'];var f_0 = new Laya['Text']();f_0['text'] = (odz3t['title'] || '') + t0_f4, f_0['fontSize'] = odz3t['size'] || 0x20, f_0['align'] = odz3t['textAlign'] || 'center', f_0['color'] = odz3t['color'] || '#ffffff', this['setPos'](f_0, { 'x': odz3t['posX'], 'y': odz3t['posY'], 'z': i5_0pb['account'] }), this['bg']['addChild'](f_0);
    }['close']() {
      this['clear'](), this['_log'] && this['_log']['post'](rjz26$['pageClose'], this['_openType']);
    }['clear']() {
      this['mask']['destroy'](), this['bg']['destroy']();
    }['onBtnClick']() {
      this['_log'] && this['_log']['post'](rjz26$['btnClick'], this['_openType']);if (!this['config']['gs']) {
        let qe7cg = this['config']['gameGsConf']['gsMsg'] || '没有达到开通条件';wx && wx['showModal'] && wx['showModal']({ 'content': qe7cg, 'showCancel': ![] });return;
      }if (this['config']['useCopy']) {
        this['onCopy'](this['config']);return;
      }console['warn']('此VIP模块仅支持复制功能\uFF01');
    }['renderSecretaryNum']() {
      const axw = this['config']['gameGsConf']['secretary'] || {};let fto3 = this['config']['gameGsConf']['exclusiveNumInfo'];const pbi0_ = axw['number'];if (!pbi0_) return;var qsv7cg = new Laya['Text']();qsv7cg['text'] = fto3['title'] + pbi0_, qsv7cg['fontSize'] = 0x20, qsv7cg['horizontalAlign'] = 'center'['toUpperCase'](), qsv7cg['color'] = fto3['color'] || '#FFFFFF', this['setPos'](qsv7cg, { 'x': fto3['posX'], 'y': fto3['posY'], 'z': i5_0pb['codeNum'] }), this['bg']['addChild'](qsv7cg), this['renderSecretBtn']();
    }['renderSecretBtn']() {
      let d4t3fo = this['config']['gameGsConf']['exclusiveNumBtn'];this['exclusiveBtn'] = this['newNode'](this['bg']), Laya['loader']['load'](d4t3fo['url'], Laya['Handler']['create'](this, () => {
        this['drawSprite'](this['exclusiveBtn'], d4t3fo['url']), this['setPos'](this['exclusiveBtn'], { 'x': d4t3fo['posX'], 'y': d4t3fo['posY'], 'z': i5_0pb['codeBtn'] }), this['exclusiveBtn']['on'](Laya['Event']['CLICK'], this, this['clickSercretBtn']);
      }));
    }['clickSercretBtn']() {
      const qwv7 = this['config']['gameGsConf']['secretary'] || {},
            vq7yge = qwv7['number'];if (!vq7yge) return;wx && wx['setClipboardData'] && (wx['setClipboardData']({ 'data': vq7yge }), this['_log'] && this['_log']['post'](rjz26$['number'], this['_openType']));
    }['onCopy'](pf50) {
      wx && wx['setClipboardData'] && pf50 && pf50['wxAccount'] && (wx['setClipboardData']({ 'data': pf50['wxAccount'] }), this['_log'] && this['_log']['post'](rjz26$['copySecretNum'], this['_openType']));
    }
  }const _0t3f4 = { 'HOST': { 'Prod': 'https://platform.hortorgames.com', 'Test': 'https://platform-test.hortorgames.com' }, 'URLS': { 'Info': '/customer/api/v1/gs/info' } };class k7yev {
    ['init'](ro26) {
      console['log']('[VIP] hortorVip init', ro26), this['_showIcon'] = ro26['defShowIcon'] !== ![], this['_log'] = new w1hke(), this['_init'](ro26), this['_loadVipData']();
    }['showIcon']() {
      this['_showIcon'] = !![], this['visible'] = !![], this['_initEntryIcon'](), this['_log']['post'](rjz26$['iconShow']);
    }['hideIcon']() {
      this['_showIcon'] = ![], this['_removeIcon']();
    }['refreshData'](lgc9s8) {
      this['_init'](lgc9s8), this['_removeIcon'](), this['_loadVipData']();
    }['_init'](kev) {
      if (!kev) return;this['_conf'] = Object['assign'](this['_conf'] || {}, kev), this['_host'] = _0t3f4['HOST'][this['_conf']['env']], this['_log']['init']({ 'gameId': this['_conf']['vipGameId'], 'userId': this['_conf']['userId'] || this['_conf']['openId'], 'host': this['_host'] });
    }['_loadVipData']() {
      console['log']('[VIP] _loadVipData');let m$jr6 = (bpai0, qsg8c7) => {
        console['log']('[VIP] _loadVipData loaded', bpai0, qsg8c7), typeof this['_conf']['onLoad'] === 'function' && this['_conf']['onLoad'](bpai0, qsg8c7);
      },
          jz$r6 = '' + this['_host'] + _0t3f4['URLS']['Info'] + '?gameId=' + this['_conf']['vipGameId'] + '&userId=' + this['_conf']['userId'],
          r62z$ = new Laya['HttpRequest']();r62z$['once'](Laya['Event']['COMPLETE'], this, u62r$ => {
        this['_vipData'] = JSON['parse'](u62r$);if (this['_vipData']['meta'] && this['_vipData']['meta']['errCode']) {
          m$jr6(this['_vipData']['meta']);return;
        }this['_log']['init']({ 'gs': this['_vipData']['gs'], 'openType': this['_vipData']['disabledAutoOpenQrcode'] ? zj$2['click'] : zj$2['auto'] }), m$jr6(null, this['_vipData']), this['_showIcon'] && this['showIcon']();
      }), r62z$['once'](Laya['Event']['ERROR'], this, rdj => {
        m$jr6(rdj);
      }), r62z$['send'](jz$r6, null, 'get', 'text');
    }['_initEntryIcon']() {
      if (this['_icon']) return console['log']('[VIP] 不能重复实例化 icon');if (!this['_vipData'] || !this['_vipData']['gameGsConf']) return console['log']('[VIP] 无配置信息');if (this['_vipData']['disabled']) return console['log']('[VIP] Disabled');this['_vipData']['gameGsConf']['useCross'] = this['_crossSDK'] && !this['_vipData']['gameGsConf']['gsAddType'], this['_vipData']['useQRCode'] = this['_vipData']['gs'] && !this['_vipData']['gameGsConf']['gsAddType'], this['_vipData']['useCopy'] = this['_vipData']['gs'] && this['_vipData']['gameGsConf']['gsAddType'] == 0x1, Object['assign'](this['_vipData']['gameGsConf']['icon'], this['_conf']['icon'] || {}), this['_icon'] = new eky1h(this['_vipData']), this['_icon']['onClick'](this['_onEntryIconClick']['bind'](this)), this['_tryAutoOpen']();
    }['_removeIcon']() {
      this['visible'] = ![], this['_icon'] && this['_icon']['close'] && (this['_icon']['close'](), this['_icon'] = null), this['_removePage']();
    }['_removePage']() {
      this['_page'] && (this['_page']['clear'](), this['_page'] = null);
    }['_tryAutoOpen']() {
      if (this['_vipData']['isAuth'] === 0x0 && !this['_vipData']['disabledAutoOpenQrcode']) {
        if (!this['_vipData']['gs']) return console['log']('[VIP] 没有绑定客服');this['_vipData']['useCopy'] && this['_initPage'](zj$2['auto']);
      }
    }['_onEntryIconClick']() {
      this['_initPage'](zj$2['click']), this['_log']['post'](rjz26$['iconClick']);
    }['_initPage'](ibp5_) {
      console['log']('[VIP] _initPage'), this['_removePage'](), this['_page'] = new a1hkx(this['_vipData'], this['_log'], ibp5_, this['_conf']);
    }
  }class xkah {
    constructor() {
      let h51ax = new k7yev();h51ax['init']({ 'gameVersion': window['config']['game_ver'], 'vipGameId': window['config']['partner_game_id'], 'env': 'Prod', 'userId': G$3J['openid'], 'icon': { 'posX': 0x64, 'posY': 0x226 }, 'defShowIcon': !!sdk_info['is_vipds'], 'onLoad': (aip0b, ru$m6) => {
          console['log']('vip data loaded---', aip0b, ru$m6);
        } });
    }
  }return window['XingJuBoxMain'] = xkah, exports['XingJuBoxMain'] = xkah, exports;
}({});