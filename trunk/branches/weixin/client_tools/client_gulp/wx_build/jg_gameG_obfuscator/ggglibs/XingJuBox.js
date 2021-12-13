var m = wx.$g;
var gg87scq = function (exports) {
  'use strict';

  class odr2z {
    constructor(heykw1) {
      this['onClickEvent'] = () => {};if (!heykw1 || !heykw1['gameGsConf'] || !heykw1['gameGsConf']['icon']) {
        console['log']('[VIP] Icon init data null', heykw1);return;
      }this['opt'] = heykw1['gameGsConf']['icon'], Laya['loader']['load'](this['opt']['url'], Laya['Handler']['create'](this, this['addIcon']));
    }['addIcon']() {
      let abpxi5 = Laya['loader']['getRes'](this['opt']['url']);this['icon'] = new Laya['Sprite'](), Laya['stage']['addChild'](this['icon']), this['icon']['pivot'](abpxi5['width'] / 0x2, abpxi5['height'] / 0x2);let cg7vs = this['opt']['x'] || this['opt']['posX'] || 0x0,
          ah1i5x = this['opt']['y'] || this['opt']['posY'] || 0x0;this['icon']['pos'](cg7vs === -0x1 ? Laya['stage']['width'] - abpxi5['width'] - 0xf : cg7vs, ah1i5x === -0x1 ? Laya['stage']['height'] / 0x2 : ah1i5x), this['icon']['size'](abpxi5['width'], abpxi5['height']), this['icon']['graphics']['clear'](), this['icon']['graphics']['drawTexture'](abpxi5, 0x0, 0x0), this['bindDrag']();
    }['bindDrag']() {
      let aih1 = this['icon']['width'],
          e1kyvw = this['icon']['height'],
          _p0ft = new Laya['Rectangle'](aih1 / 0x2, e1kyvw / 0x2, Laya['stage']['width'] - aih1, Laya['stage']['height'] - e1kyvw);this['icon']['on'](Laya['Event']['MOUSE_DOWN'], this, () => {
        this['icon']['startDrag'](_p0ft, !![], 0x64, 0x12c, null, !![]);
      }), this['icon']['on'](Laya['Event']['CLICK'], this, qevw7 => {
        this['onClickEvent']();
      });
    }['onClick'](hia1xk) {
      hia1xk && typeof hia1xk == 'function' && (this['onClickEvent'] = hia1xk);
    }['close']() {
      this['icon']['visible'] = ![], this['icon']['destroy']();
    }
  }const cqgv7s = { 'auto': 'AUTO', 'click': 'CLICK' },
        gqscv7 = { 'iconShow': 'ICON-SHOW', 'iconClick': 'ICON-CLICK', 'copyClick': 'WECHAT-COPY', 'btnClick': 'BUTTON-CLICK', 'pageClose': 'CONF-CLOSE', 'pageShow': 'CONF-SHOW', 'copySecretNum': 'SECRET-COPY' },
        $j26r = '/customer/api/v1/gs/log';class wyve7k {
    ['init'](_btpf) {
      this['opt'] = Object['assign'](this['opt'] || {}, _btpf);
    }['_jsonToQuery'](u$j6) {
      let $r2z6 = {};for (let zdo234 in u$j6) {
        'undefined' !== typeof u$j6[zdo234] && ($r2z6[zdo234] = u$j6[zdo234]);
      }return JSON['stringify']($r2z6);
    }['post'](cs89gl, t3_o4) {
      if (!this['opt'] || !this['opt']['host']) return;let t4d3of = '' + this['opt']['host'] + $j26r,
          q7sv = this['_jsonToQuery']({ 'gameId': this['opt']['gameId'], 'userId': this['opt']['userId'], 'gs': this['opt']['gs'], 'alias': cs89gl, 'gsWay': t3_o4 || this['opt']['openType'] });console['log']('[VIP] post log', q7sv);let pb5aix = new Laya['HttpRequest']();pb5aix['send'](t4d3of, q7sv, 'post', null, ['Content-Type', 'application/json']);
    }
  }const bxi5h = { 'bg': 0xb, 'avatar': 0xd, 'closer': 0xd, 'code': 0xe, 'cross': 0xf, 'account': 0x10, 'codeNum': 0x11, 'codeBtn': 0x12 };class ot_f43 {
    constructor(ibpx5a, z62ord, ewvy7) {
      console['log']('[VIP] Page init', ibpx5a), this['config'] = ibpx5a, this['_log'] = z62ord, this['_openType'] = ewvy7, this['stageW'] = Laya['stage']['width'], this['stageH'] = Laya['stage']['height'], this['renderMask'](), this['renderBg'](() => {
        this['renderAvatar'](), this['renderClose'](), this['renderCode']();if (this['config']['useCopy']) this['renderWXAccount']();if (this['config']['gameGsConf']['secretary'] && this['config']['gameGsConf']['secretary']['number']) this['renderSecretaryNum']();this['_log'] && this['_log']['post'](gqscv7['pageShow'], this['_openType']);
      });
    }['setRate'](r2j6) {
      this['rate'] = this['stageW'] / r2j6['width'];
    }['newNode'](hxi5) {
      hxi5 = hxi5 || Laya['stage'];let rjz26$ = new Laya['Sprite']();return hxi5['addChild'](rjz26$), rjz26$;
    }['setPos'](l9gs, xiakh) {
      let g8qscl = this['rate'] || 0x1,
          t40_p = xiakh['x'] || 0x0,
          _30f = xiakh['y'] || 0x0,
          v1ekyw = l9gs['width'] / 0x2,
          qgc7 = l9gs['height'] / 0x2;t40_p == -0x1 ? t40_p = this['stageW'] / 0x2 : (v1ekyw = 0x0, t40_p = t40_p * g8qscl), _30f == -0x1 ? _30f = this['stageH'] / 0x2 : (_30f = _30f * g8qscl, qgc7 = 0x0), l9gs['pivot'](v1ekyw, qgc7), l9gs['pos'](t40_p, _30f), l9gs['zOrder'] = xiakh['z'] || 0x0;
    }['drawSprite'](b5xhi, xkih1a) {
      let p_fbt0 = Laya['loader']['getRes'](xkih1a);if (!p_fbt0) return;let dzo243 = this['rate'] || 0x1,
          lc9g8 = dzo243 ? p_fbt0['width'] * dzo243 : this['stageW'],
          iax = dzo243 ? p_fbt0['height'] * dzo243 : this['stageH'];b5xhi['size'](lc9g8, iax), b5xhi['graphics']['clear'](), b5xhi['graphics']['drawTexture'](p_fbt0, 0x0, 0x0, lc9g8, iax);
    }['renderMask']() {
      let hkwe1y = this['config']['gameGsConf']['background'];this['mask'] = this['newNode'](), this['mask']['graphics']['drawRect'](0x0, 0x0, this['stageW'], this['stageH'], '#' + (hkwe1y['color'] || 'aaaaaa'));
    }['renderBg'](a1hkx) {
      let yw1hek = this['config']['gameGsConf']['background'];this['bg'] = this['newNode'](), Laya['loader']['load'](yw1hek['url'], Laya['Handler']['create'](this, () => {
        this['setRate'](Laya['loader']['getRes'](yw1hek['url'])), this['drawSprite'](this['bg'], yw1hek['url']), this['setPos'](this['bg'], { 'x': 0x0, 'y': 0x0, 'z': bxi5h['bg'] }), a1hkx && a1hkx();
      }));
    }['renderAvatar']() {
      let cvs7 = this['config']['gameGsConf']['gsAvatar'];this['avatar'] = this['newNode'](this['bg']), Laya['loader']['load'](cvs7['url'], Laya['Handler']['create'](this, () => {
        this['drawSprite'](this['avatar'], cvs7['url']), this['setPos'](this['avatar'], { 'x': cvs7['posX'], 'y': cvs7['posY'], 'z': bxi5h['avatar'] });
      }));
    }['renderClose']() {
      let vcgqe7 = this['config']['gameGsConf']['closeBtn'];this['closer'] = this['newNode'](this['bg']), Laya['loader']['load'](vcgqe7['url'], Laya['Handler']['create'](this, () => {
        this['drawSprite'](this['closer'], vcgqe7['url']), this['setPos'](this['closer'], { 'x': vcgqe7['posX'], 'y': vcgqe7['posY'], 'z': bxi5h['closer'] }), this['closer']['on'](Laya['Event']['CLICK'], this, this['close']);
      }));
    }['renderCode']() {
      let b05fp_ = this['config']['gameGsConf']['qrCodeBtn'];this['code'] = this['newNode'](this['bg']), Laya['loader']['load'](b05fp_['url'], Laya['Handler']['create'](this, () => {
        this['drawSprite'](this['code'], b05fp_['url']), this['setPos'](this['code'], { 'x': b05fp_['posX'], 'y': b05fp_['posY'], 'z': bxi5h['code'] }), this['code']['on'](Laya['Event']['CLICK'], this, this['onBtnClick']);
      }));
    }['renderWXAccount']() {
      let qcsg7 = this['config']['wxAccount'] || '',
          wyvq7e = this['config']['gameGsConf']['copyAccount'];var t4zod = new Laya['Text']();t4zod['text'] = (wyvq7e['title'] || '') + qcsg7, t4zod['fontSize'] = wyvq7e['size'] || 0x20, t4zod['align'] = wyvq7e['textAlign'] || 'center', t4zod['color'] = wyvq7e['color'] || '#ffffff', this['setPos'](t4zod, { 'x': wyvq7e['posX'], 'y': wyvq7e['posY'], 'z': bxi5h['account'] }), this['bg']['addChild'](t4zod);
    }['close']() {
      this['clear'](), this['_log'] && this['_log']['post'](gqscv7['pageClose'], this['_openType']);
    }['clear']() {
      this['mask']['destroy'](), this['bg']['destroy']();
    }['onBtnClick']() {
      this['_log'] && this['_log']['post'](gqscv7['btnClick'], this['_openType']);if (!this['config']['gs']) {
        let qcgvs = this['config']['gameGsConf']['gsMsg'] || '没有达到开通条件';wx && wx['showModal'] && wx['showModal']({ 'content': qcgvs, 'showCancel': ![] });return;
      }if (this['config']['useCopy']) {
        this['onCopy'](this['config']);return;
      }console['warn']('此VIP模块仅支持复制功能\uFF01');
    }['renderSecretaryNum']() {
      const t43dof = this['config']['gameGsConf']['secretary'] || {};let sqgcl = this['config']['gameGsConf']['exclusiveNumInfo'];const ve1yk = t43dof['number'];if (!ve1yk) return;var tf3d4 = new Laya['Text']();tf3d4['text'] = sqgcl['title'] + ve1yk, tf3d4['fontSize'] = 0x20, tf3d4['horizontalAlign'] = 'center'['toUpperCase'](), tf3d4['color'] = sqgcl['color'] || '#FFFFFF', this['setPos'](tf3d4, { 'x': sqgcl['posX'], 'y': sqgcl['posY'], 'z': bxi5h['codeNum'] }), this['bg']['addChild'](tf3d4), this['renderSecretBtn']();
    }['renderSecretBtn']() {
      let j2$ur6 = this['config']['gameGsConf']['exclusiveNumBtn'];this['exclusiveBtn'] = this['newNode'](this['bg']), Laya['loader']['load'](j2$ur6['url'], Laya['Handler']['create'](this, () => {
        this['drawSprite'](this['exclusiveBtn'], j2$ur6['url']), this['setPos'](this['exclusiveBtn'], { 'x': j2$ur6['posX'], 'y': j2$ur6['posY'], 'z': bxi5h['codeBtn'] }), this['exclusiveBtn']['on'](Laya['Event']['CLICK'], this, this['clickSercretBtn']);
      }));
    }['clickSercretBtn']() {
      const d2zr = this['config']['gameGsConf']['secretary'] || {},
            ib_5 = d2zr['number'];if (!ib_5) return;wx && wx['setClipboardData'] && (wx['setClipboardData']({ 'data': ib_5 }), this['_log'] && this['_log']['post'](gqscv7['number'], this['_openType']));
    }['onCopy'](hia1k) {
      wx && wx['setClipboardData'] && hia1k && hia1k['wxAccount'] && (wx['setClipboardData']({ 'data': hia1k['wxAccount'] }), this['_log'] && this['_log']['post'](gqscv7['copySecretNum'], this['_openType']));
    }
  }const qv7gec = { 'HOST': { 'Prod': 'https://platform.hortorgames.com', 'Test': 'https://platform-test.hortorgames.com' }, 'URLS': { 'Info': '/customer/api/v1/gs/info' } };class p0a5i {
    ['init'](eyw1k) {
      console['log']('[VIP] hortorVip init', eyw1k), this['_showIcon'] = eyw1k['defShowIcon'] !== ![], this['_log'] = new wyve7k(), this['_init'](eyw1k), this['_loadVipData']();
    }['showIcon']() {
      this['_showIcon'] = !![], this['visible'] = !![], this['_initEntryIcon'](), this['_log']['post'](gqscv7['iconShow']);
    }['hideIcon']() {
      this['_showIcon'] = ![], this['_removeIcon']();
    }['refreshData'](ha51x) {
      this['_init'](ha51x), this['_removeIcon'](), this['_loadVipData']();
    }['_init'](f3dto) {
      if (!f3dto) return;this['_conf'] = Object['assign'](this['_conf'] || {}, f3dto), this['_host'] = qv7gec['HOST'][this['_conf']['env']], this['_log']['init']({ 'gameId': this['_conf']['vipGameId'], 'userId': this['_conf']['userId'] || this['_conf']['openId'], 'host': this['_host'] });
    }['_loadVipData']() {
      console['log']('[VIP] _loadVipData');let jz2d6r = (wk7ey, $jrum) => {
        console['log']('[VIP] _loadVipData loaded', wk7ey, $jrum), typeof this['_conf']['onLoad'] === 'function' && this['_conf']['onLoad'](wk7ey, $jrum);
      },
          tpf0_ = '' + this['_host'] + qv7gec['URLS']['Info'] + '?gameId=' + this['_conf']['vipGameId'] + '&userId=' + this['_conf']['userId'],
          ehy1w = new Laya['HttpRequest']();ehy1w['once'](Laya['Event']['COMPLETE'], this, v7eygq => {
        this['_vipData'] = JSON['parse'](v7eygq);if (this['_vipData']['meta'] && this['_vipData']['meta']['errCode']) {
          jz2d6r(this['_vipData']['meta']);return;
        }this['_log']['init']({ 'gs': this['_vipData']['gs'], 'openType': this['_vipData']['disabledAutoOpenQrcode'] ? cqgv7s['click'] : cqgv7s['auto'] }), jz2d6r(null, this['_vipData']), this['_showIcon'] && this['showIcon']();
      }), ehy1w['once'](Laya['Event']['ERROR'], this, f5b => {
        jz2d6r(f5b);
      }), ehy1w['send'](tpf0_, null, 'get', 'text');
    }['_initEntryIcon']() {
      if (this['_icon']) return console['log']('[VIP] 不能重复实例化 icon');if (!this['_vipData'] || !this['_vipData']['gameGsConf']) return console['log']('[VIP] 无配置信息');if (this['_vipData']['disabled']) return console['log']('[VIP] Disabled');this['_vipData']['gameGsConf']['useCross'] = this['_crossSDK'] && !this['_vipData']['gameGsConf']['gsAddType'], this['_vipData']['useQRCode'] = this['_vipData']['gs'] && !this['_vipData']['gameGsConf']['gsAddType'], this['_vipData']['useCopy'] = this['_vipData']['gs'] && this['_vipData']['gameGsConf']['gsAddType'] == 0x1, Object['assign'](this['_vipData']['gameGsConf']['icon'], this['_conf']['icon'] || {}), this['_icon'] = new odr2z(this['_vipData']), this['_icon']['onClick'](this['_onEntryIconClick']['bind'](this)), this['_tryAutoOpen']();
    }['_removeIcon']() {
      this['visible'] = ![], this['_icon'] && this['_icon']['close'] && (this['_icon']['close'](), this['_icon'] = null), this['_removePage']();
    }['_removePage']() {
      this['_page'] && (this['_page']['clear'](), this['_page'] = null);
    }['_tryAutoOpen']() {
      if (this['_vipData']['isAuth'] === 0x0 && !this['_vipData']['disabledAutoOpenQrcode']) {
        if (!this['_vipData']['gs']) return console['log']('[VIP] 没有绑定客服');this['_vipData']['useCopy'] && this['_initPage'](cqgv7s['auto']);
      }
    }['_onEntryIconClick']() {
      this['_initPage'](cqgv7s['click']), this['_log']['post'](gqscv7['iconClick']);
    }['_initPage'](x5i) {
      console['log']('[VIP] _initPage'), this['_removePage'](), this['_page'] = new ot_f43(this['_vipData'], this['_log'], x5i, this['_conf']);
    }
  }class a5bp {
    constructor() {
      let rdz2o6 = new p0a5i();rdz2o6['init']({ 'gameVersion': window['config']['game_ver'], 'vipGameId': window['config']['partner_game_id'], 'env': 'Prod', 'userId': G$3J['openid'], 'icon': { 'posX': 0x64, 'posY': 0x226 }, 'defShowIcon': !!sdk_info['is_vipds'], 'onLoad': (gsq, scgl8) => {
          console['log']('vip data loaded---', gsq, scgl8);
        } });
    }
  }return window['XingJuBoxMain'] = a5bp, exports['XingJuBoxMain'] = a5bp, exports;
}({});