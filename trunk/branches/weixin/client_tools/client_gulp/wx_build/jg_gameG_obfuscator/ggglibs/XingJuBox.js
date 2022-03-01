var m = wx.$g;
var gtfp4_0 = function (exports) {
  'use strict';

  class $z6j2 {
    constructor(e7vqc) {
      this['onClickEvent'] = () => {};if (!e7vqc || !e7vqc['gameGsConf'] || !e7vqc['gameGsConf']['icon']) {
        console['log']('[VIP] Icon init data null', e7vqc);return;
      }this['opt'] = e7vqc['gameGsConf']['icon'], Laya['loader']['load'](this['opt']['url'], Laya['Handler']['create'](this, this['addIcon']));
    }['addIcon']() {
      let v7ce = Laya['loader']['getRes'](this['opt']['url']);this['icon'] = new Laya['Sprite'](), Laya['stage']['addChild'](this['icon']), this['icon']['pivot'](v7ce['width'] / 0x2, v7ce['height'] / 0x2);let q8s7gc = this['opt']['x'] || this['opt']['posX'] || 0x0,
          ec7qv = this['opt']['y'] || this['opt']['posY'] || 0x0;this['icon']['pos'](q8s7gc === -0x1 ? Laya['stage']['width'] - v7ce['width'] - 0xf : q8s7gc, ec7qv === -0x1 ? Laya['stage']['height'] / 0x2 : ec7qv), this['icon']['size'](v7ce['width'], v7ce['height']), this['icon']['graphics']['clear'](), this['icon']['graphics']['drawTexture'](v7ce, 0x0, 0x0), this['bindDrag']();
    }['bindDrag']() {
      let t0b_fp = this['icon']['width'],
          r6$jz2 = this['icon']['height'],
          bp0ft = new Laya['Rectangle'](t0b_fp / 0x2, r6$jz2 / 0x2, Laya['stage']['width'] - t0b_fp, Laya['stage']['height'] - r6$jz2);this['icon']['on'](Laya['Event']['MOUSE_DOWN'], this, () => {
        this['icon']['startDrag'](bp0ft, !![], 0x64, 0x12c, null, !![]);
      }), this['icon']['on'](Laya['Event']['CLICK'], this, otfd4 => {
        this['onClickEvent']();
      });
    }['onClick'](eq7gv) {
      eq7gv && typeof eq7gv == 'function' && (this['onClickEvent'] = eq7gv);
    }['close']() {
      this['icon']['visible'] = ![], this['icon']['destroy']();
    }
  }const vkw7 = { 'auto': 'AUTO', 'click': 'CLICK' },
        p5f0 = { 'iconShow': 'ICON-SHOW', 'iconClick': 'ICON-CLICK', 'copyClick': 'WECHAT-COPY', 'btnClick': 'BUTTON-CLICK', 'pageClose': 'CONF-CLOSE', 'pageShow': 'CONF-SHOW', 'copySecretNum': 'SECRET-COPY' },
        ahbix5 = '/customer/api/v1/gs/log';class hba5 {
    ['init'](a5ibxp) {
      this['opt'] = Object['assign'](this['opt'] || {}, a5ibxp);
    }['_jsonToQuery'](f_34t) {
      let z26jd = {};for (let cg9l8s in f_34t) {
        'undefined' !== typeof f_34t[cg9l8s] && (z26jd[cg9l8s] = f_34t[cg9l8s]);
      }return JSON['stringify'](z26jd);
    }['post'](jmru6, t3_) {
      if (!this['opt'] || !this['opt']['host']) return;let j$6um = '' + this['opt']['host'] + ahbix5,
          rz26 = this['_jsonToQuery']({ 'gameId': this['opt']['gameId'], 'userId': this['opt']['userId'], 'gs': this['opt']['gs'], 'alias': jmru6, 'gsWay': t3_ || this['opt']['openType'] });console['log']('[VIP] post log', rz26);let wyhx1 = new Laya['HttpRequest']();wyhx1['send'](j$6um, rz26, 'post', null, ['Content-Type', 'application/json']);
    }
  }const t4pf = { 'bg': 0xb, 'avatar': 0xd, 'closer': 0xd, 'code': 0xe, 'cross': 0xf, 'account': 0x10, 'codeNum': 0x11, 'codeBtn': 0x12 };class dz342o {
    constructor(v7qyw, sl9cg8, xy1hwk) {
      console['log']('[VIP] Page init', v7qyw), this['config'] = v7qyw, this['_log'] = sl9cg8, this['_openType'] = xy1hwk, this['stageW'] = Laya['stage']['width'], this['stageH'] = Laya['stage']['height'], this['renderMask'](), this['renderBg'](() => {
        this['renderAvatar'](), this['renderClose'](), this['renderCode']();if (this['config']['useCopy']) this['renderWXAccount']();if (this['config']['gameGsConf']['secretary'] && this['config']['gameGsConf']['secretary']['number']) this['renderSecretaryNum']();this['_log'] && this['_log']['post'](p5f0['pageShow'], this['_openType']);
      });
    }['setRate'](ehw1) {
      this['rate'] = this['stageW'] / ehw1['width'];
    }['newNode'](y1kw) {
      y1kw = y1kw || Laya['stage'];let qyewv7 = new Laya['Sprite']();return y1kw['addChild'](qyewv7), qyewv7;
    }['setPos'](kaihx1, c8slg9) {
      let yke = this['rate'] || 0x1,
          r$mu6 = c8slg9['x'] || 0x0,
          _4pt0f = c8slg9['y'] || 0x0,
          cve7gq = kaihx1['width'] / 0x2,
          habix = kaihx1['height'] / 0x2;r$mu6 == -0x1 ? r$mu6 = this['stageW'] / 0x2 : (cve7gq = 0x0, r$mu6 = r$mu6 * yke), _4pt0f == -0x1 ? _4pt0f = this['stageH'] / 0x2 : (_4pt0f = _4pt0f * yke, habix = 0x0), kaihx1['pivot'](cve7gq, habix), kaihx1['pos'](r$mu6, _4pt0f), kaihx1['zOrder'] = c8slg9['z'] || 0x0;
    }['drawSprite'](y7wkev, $62jrz) {
      let ls89gc = Laya['loader']['getRes']($62jrz);if (!ls89gc) return;let rj6$um = this['rate'] || 0x1,
          ihxba5 = rj6$um ? ls89gc['width'] * rj6$um : this['stageW'],
          $mju6r = rj6$um ? ls89gc['height'] * rj6$um : this['stageH'];y7wkev['size'](ihxba5, $mju6r), y7wkev['graphics']['clear'](), y7wkev['graphics']['drawTexture'](ls89gc, 0x0, 0x0, ihxba5, $mju6r);
    }['renderMask']() {
      let _tb = this['config']['gameGsConf']['background'];this['mask'] = this['newNode'](), this['mask']['graphics']['drawRect'](0x0, 0x0, this['stageW'], this['stageH'], '#' + (_tb['color'] || 'aaaaaa'));
    }['renderBg'](clsg8) {
      let z42od = this['config']['gameGsConf']['background'];this['bg'] = this['newNode'](), Laya['loader']['load'](z42od['url'], Laya['Handler']['create'](this, () => {
        this['setRate'](Laya['loader']['getRes'](z42od['url'])), this['drawSprite'](this['bg'], z42od['url']), this['setPos'](this['bg'], { 'x': 0x0, 'y': 0x0, 'z': t4pf['bg'] }), clsg8 && clsg8();
      }));
    }['renderAvatar']() {
      let hxwk1y = this['config']['gameGsConf']['gsAvatar'];this['avatar'] = this['newNode'](this['bg']), Laya['loader']['load'](hxwk1y['url'], Laya['Handler']['create'](this, () => {
        this['drawSprite'](this['avatar'], hxwk1y['url']), this['setPos'](this['avatar'], { 'x': hxwk1y['posX'], 'y': hxwk1y['posY'], 'z': t4pf['avatar'] });
      }));
    }['renderClose']() {
      let ek1w = this['config']['gameGsConf']['closeBtn'];this['closer'] = this['newNode'](this['bg']), Laya['loader']['load'](ek1w['url'], Laya['Handler']['create'](this, () => {
        this['drawSprite'](this['closer'], ek1w['url']), this['setPos'](this['closer'], { 'x': ek1w['posX'], 'y': ek1w['posY'], 'z': t4pf['closer'] }), this['closer']['on'](Laya['Event']['CLICK'], this, this['close']);
      }));
    }['renderCode']() {
      let ipb5xa = this['config']['gameGsConf']['qrCodeBtn'];this['code'] = this['newNode'](this['bg']), Laya['loader']['load'](ipb5xa['url'], Laya['Handler']['create'](this, () => {
        this['drawSprite'](this['code'], ipb5xa['url']), this['setPos'](this['code'], { 'x': ipb5xa['posX'], 'y': ipb5xa['posY'], 'z': t4pf['code'] }), this['code']['on'](Laya['Event']['CLICK'], this, this['onBtnClick']);
      }));
    }['renderWXAccount']() {
      let jr6m$u = this['config']['wxAccount'] || '',
          p5b_0i = this['config']['gameGsConf']['copyAccount'];var dzt3o4 = new Laya['Text']();dzt3o4['text'] = (p5b_0i['title'] || '') + jr6m$u, dzt3o4['fontSize'] = p5b_0i['size'] || 0x20, dzt3o4['align'] = p5b_0i['textAlign'] || 'center', dzt3o4['color'] = p5b_0i['color'] || '#ffffff', this['setPos'](dzt3o4, { 'x': p5b_0i['posX'], 'y': p5b_0i['posY'], 'z': t4pf['account'] }), this['bg']['addChild'](dzt3o4);
    }['close']() {
      this['clear'](), this['_log'] && this['_log']['post'](p5f0['pageClose'], this['_openType']);
    }['clear']() {
      this['mask']['destroy'](), this['bg']['destroy']();
    }['onBtnClick']() {
      this['_log'] && this['_log']['post'](p5f0['btnClick'], this['_openType']);if (!this['config']['gs']) {
        let sl9g8 = this['config']['gameGsConf']['gsMsg'] || '没有达到开通条件';wx && wx['showModal'] && wx['showModal']({ 'content': sl9g8, 'showCancel': ![] });return;
      }if (this['config']['useCopy']) {
        this['onCopy'](this['config']);return;
      }console['warn']('此VIP模块仅支持复制功能\uFF01');
    }['renderSecretaryNum']() {
      const sq7gc8 = this['config']['gameGsConf']['secretary'] || {};let csgvq7 = this['config']['gameGsConf']['exclusiveNumInfo'];const gvey = sq7gc8['number'];if (!gvey) return;var x5api = new Laya['Text']();x5api['text'] = csgvq7['title'] + gvey, x5api['fontSize'] = 0x20, x5api['horizontalAlign'] = 'center'['toUpperCase'](), x5api['color'] = csgvq7['color'] || '#FFFFFF', this['setPos'](x5api, { 'x': csgvq7['posX'], 'y': csgvq7['posY'], 'z': t4pf['codeNum'] }), this['bg']['addChild'](x5api), this['renderSecretBtn']();
    }['renderSecretBtn']() {
      let xh1i5 = this['config']['gameGsConf']['exclusiveNumBtn'];this['exclusiveBtn'] = this['newNode'](this['bg']), Laya['loader']['load'](xh1i5['url'], Laya['Handler']['create'](this, () => {
        this['drawSprite'](this['exclusiveBtn'], xh1i5['url']), this['setPos'](this['exclusiveBtn'], { 'x': xh1i5['posX'], 'y': xh1i5['posY'], 'z': t4pf['codeBtn'] }), this['exclusiveBtn']['on'](Laya['Event']['CLICK'], this, this['clickSercretBtn']);
      }));
    }['clickSercretBtn']() {
      const e1kwv = this['config']['gameGsConf']['secretary'] || {},
            hw = e1kwv['number'];if (!hw) return;wx && wx['setClipboardData'] && (wx['setClipboardData']({ 'data': hw }), this['_log'] && this['_log']['post'](p5f0['number'], this['_openType']));
    }['onCopy']($u6rj2) {
      wx && wx['setClipboardData'] && $u6rj2 && $u6rj2['wxAccount'] && (wx['setClipboardData']({ 'data': $u6rj2['wxAccount'] }), this['_log'] && this['_log']['post'](p5f0['copySecretNum'], this['_openType']));
    }
  }const g7vqcs = { 'HOST': { 'Prod': 'https://platform.hortorgames.com', 'Test': 'https://platform-test.hortorgames.com' }, 'URLS': { 'Info': '/customer/api/v1/gs/info' } };class $zrj2 {
    ['init'](ozd3) {
      console['log']('[VIP] hortorVip init', ozd3), this['_showIcon'] = ozd3['defShowIcon'] !== ![], this['_log'] = new hba5(), this['_init'](ozd3), this['_loadVipData']();
    }['showIcon']() {
      this['_showIcon'] = !![], this['visible'] = !![], this['_initEntryIcon'](), this['_log']['post'](p5f0['iconShow']);
    }['hideIcon']() {
      this['_showIcon'] = ![], this['_removeIcon']();
    }['refreshData'](k1yvew) {
      this['_init'](k1yvew), this['_removeIcon'](), this['_loadVipData']();
    }['_init'](k1hyxw) {
      if (!k1hyxw) return;this['_conf'] = Object['assign'](this['_conf'] || {}, k1hyxw), this['_host'] = g7vqcs['HOST'][this['_conf']['env']], this['_log']['init']({ 'gameId': this['_conf']['vipGameId'], 'userId': this['_conf']['userId'] || this['_conf']['openId'], 'host': this['_host'] });
    }['_loadVipData']() {
      console['log']('[VIP] _loadVipData');let tp_0f = (f_pb50, a1hki) => {
        console['log']('[VIP] _loadVipData loaded', f_pb50, a1hki), typeof this['_conf']['onLoad'] === 'function' && this['_conf']['onLoad'](f_pb50, a1hki);
      },
          scvg7q = '' + this['_host'] + g7vqcs['URLS']['Info'] + '?gameId=' + this['_conf']['vipGameId'] + '&userId=' + this['_conf']['userId'],
          svqgc = new Laya['HttpRequest']();svqgc['once'](Laya['Event']['COMPLETE'], this, j6z$2r => {
        this['_vipData'] = JSON['parse'](j6z$2r);if (this['_vipData']['meta'] && this['_vipData']['meta']['errCode']) {
          tp_0f(this['_vipData']['meta']);return;
        }this['_log']['init']({ 'gs': this['_vipData']['gs'], 'openType': this['_vipData']['disabledAutoOpenQrcode'] ? vkw7['click'] : vkw7['auto'] }), tp_0f(null, this['_vipData']), this['_showIcon'] && this['showIcon']();
      }), svqgc['once'](Laya['Event']['ERROR'], this, qvegc => {
        tp_0f(qvegc);
      }), svqgc['send'](scvg7q, null, 'get', 'text');
    }['_initEntryIcon']() {
      if (this['_icon']) return console['log']('[VIP] 不能重复实例化 icon');if (!this['_vipData'] || !this['_vipData']['gameGsConf']) return console['log']('[VIP] 无配置信息');if (this['_vipData']['disabled']) return console['log']('[VIP] Disabled');this['_vipData']['gameGsConf']['useCross'] = this['_crossSDK'] && !this['_vipData']['gameGsConf']['gsAddType'], this['_vipData']['useQRCode'] = this['_vipData']['gs'] && !this['_vipData']['gameGsConf']['gsAddType'], this['_vipData']['useCopy'] = this['_vipData']['gs'] && this['_vipData']['gameGsConf']['gsAddType'] == 0x1, Object['assign'](this['_vipData']['gameGsConf']['icon'], this['_conf']['icon'] || {}), this['_icon'] = new $z6j2(this['_vipData']), this['_icon']['onClick'](this['_onEntryIconClick']['bind'](this)), this['_tryAutoOpen']();
    }['_removeIcon']() {
      this['visible'] = ![], this['_icon'] && this['_icon']['close'] && (this['_icon']['close'](), this['_icon'] = null), this['_removePage']();
    }['_removePage']() {
      this['_page'] && (this['_page']['clear'](), this['_page'] = null);
    }['_tryAutoOpen']() {
      if (this['_vipData']['isAuth'] === 0x0 && !this['_vipData']['disabledAutoOpenQrcode']) {
        if (!this['_vipData']['gs']) return console['log']('[VIP] 没有绑定客服');this['_vipData']['useCopy'] && this['_initPage'](vkw7['auto']);
      }
    }['_onEntryIconClick']() {
      this['_initPage'](vkw7['click']), this['_log']['post'](p5f0['iconClick']);
    }['_initPage'](bi5xh) {
      console['log']('[VIP] _initPage'), this['_removePage'](), this['_page'] = new dz342o(this['_vipData'], this['_log'], bi5xh, this['_conf']);
    }
  }class z2$6r {
    constructor() {
      let b0pa5 = new $zrj2();b0pa5['init']({ 'gameVersion': window['config']['game_ver'], 'vipGameId': window['config']['partner_game_id'], 'env': 'Prod', 'userId': G$3J['openid'], 'icon': { 'posX': 0x64, 'posY': 0x226 }, 'defShowIcon': !!sdk_info['is_vipds'], 'onLoad': (gc7, ot43d) => {
          console['log']('vip data loaded---', gc7, ot43d);
        } });
    }
  }return window['XingJuBoxMain'] = z2$6r, exports['XingJuBoxMain'] = z2$6r, exports;
}({});