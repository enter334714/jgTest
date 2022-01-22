var m = wx.$g;
var g_0ib5 = function (exports) {
  'use strict';

  class x5b {
    constructor(t4z3do) {
      this['onClickEvent'] = () => {};if (!t4z3do || !t4z3do['gameGsConf'] || !t4z3do['gameGsConf']['icon']) {
        console['log']('[VIP] Icon init data null', t4z3do);return;
      }this['opt'] = t4z3do['gameGsConf']['icon'], Laya['loader']['load'](this['opt']['url'], Laya['Handler']['create'](this, this['addIcon']));
    }['addIcon']() {
      let rj2zd = Laya['loader']['getRes'](this['opt']['url']);this['icon'] = new Laya['Sprite'](), Laya['stage']['addChild'](this['icon']), this['icon']['pivot'](rj2zd['width'] / 0x2, rj2zd['height'] / 0x2);let _0t4f = this['opt']['x'] || this['opt']['posX'] || 0x0,
          ke1wh = this['opt']['y'] || this['opt']['posY'] || 0x0;this['icon']['pos'](_0t4f === -0x1 ? Laya['stage']['width'] - rj2zd['width'] - 0xf : _0t4f, ke1wh === -0x1 ? Laya['stage']['height'] / 0x2 : ke1wh), this['icon']['size'](rj2zd['width'], rj2zd['height']), this['icon']['graphics']['clear'](), this['icon']['graphics']['drawTexture'](rj2zd, 0x0, 0x0), this['bindDrag']();
    }['bindDrag']() {
      let do236 = this['icon']['width'],
          vqwy = this['icon']['height'],
          pb_tf0 = new Laya['Rectangle'](do236 / 0x2, vqwy / 0x2, Laya['stage']['width'] - do236, Laya['stage']['height'] - vqwy);this['icon']['on'](Laya['Event']['MOUSE_DOWN'], this, () => {
        this['icon']['startDrag'](pb_tf0, !![], 0x64, 0x12c, null, !![]);
      }), this['icon']['on'](Laya['Event']['CLICK'], this, _40f3t => {
        this['onClickEvent']();
      });
    }['onClick'](t4_of3) {
      t4_of3 && typeof t4_of3 == 'function' && (this['onClickEvent'] = t4_of3);
    }['close']() {
      this['icon']['visible'] = ![], this['icon']['destroy']();
    }
  }const odtz4 = { 'auto': 'AUTO', 'click': 'CLICK' },
        to3df = { 'iconShow': 'ICON-SHOW', 'iconClick': 'ICON-CLICK', 'copyClick': 'WECHAT-COPY', 'btnClick': 'BUTTON-CLICK', 'pageClose': 'CONF-CLOSE', 'pageShow': 'CONF-SHOW', 'copySecretNum': 'SECRET-COPY' },
        o42zd3 = '/customer/api/v1/gs/log';class qye7g {
    ['init'](abpix5) {
      this['opt'] = Object['assign'](this['opt'] || {}, abpix5);
    }['_jsonToQuery'](m$6urj) {
      let dzo43 = {};for (let zod243 in m$6urj) {
        'undefined' !== typeof m$6urj[zod243] && (dzo43[zod243] = m$6urj[zod243]);
      }return JSON['stringify'](dzo43);
    }['post'](gscl8, akixh1) {
      if (!this['opt'] || !this['opt']['host']) return;let j2ur = '' + this['opt']['host'] + o42zd3,
          kh1axi = this['_jsonToQuery']({ 'gameId': this['opt']['gameId'], 'userId': this['opt']['userId'], 'gs': this['opt']['gs'], 'alias': gscl8, 'gsWay': akixh1 || this['opt']['openType'] });console['log']('[VIP] post log', kh1axi);let xp5i = new Laya['HttpRequest']();xp5i['send'](j2ur, kh1axi, 'post', null, ['Content-Type', 'application/json']);
    }
  }const z6d2r = { 'bg': 0xb, 'avatar': 0xd, 'closer': 0xd, 'code': 0xe, 'cross': 0xf, 'account': 0x10, 'codeNum': 0x11, 'codeBtn': 0x12 };class ve7qy {
    constructor(dot34f, mr$u6, _f0tpb) {
      console['log']('[VIP] Page init', dot34f), this['config'] = dot34f, this['_log'] = mr$u6, this['_openType'] = _f0tpb, this['stageW'] = Laya['stage']['width'], this['stageH'] = Laya['stage']['height'], this['renderMask'](), this['renderBg'](() => {
        this['renderAvatar'](), this['renderClose'](), this['renderCode']();if (this['config']['useCopy']) this['renderWXAccount']();if (this['config']['gameGsConf']['secretary'] && this['config']['gameGsConf']['secretary']['number']) this['renderSecretaryNum']();this['_log'] && this['_log']['post'](to3df['pageShow'], this['_openType']);
      });
    }['setRate'](w1ykhe) {
      this['rate'] = this['stageW'] / w1ykhe['width'];
    }['newNode'](jz2d6r) {
      jz2d6r = jz2d6r || Laya['stage'];let f0_5 = new Laya['Sprite']();return jz2d6r['addChild'](f0_5), f0_5;
    }['setPos'](p4tf0, eygv7) {
      let kvey1 = this['rate'] || 0x1,
          gc8qs = eygv7['x'] || 0x0,
          a0ibp = eygv7['y'] || 0x0,
          ek1wyv = p4tf0['width'] / 0x2,
          vkwye = p4tf0['height'] / 0x2;gc8qs == -0x1 ? gc8qs = this['stageW'] / 0x2 : (ek1wyv = 0x0, gc8qs = gc8qs * kvey1), a0ibp == -0x1 ? a0ibp = this['stageH'] / 0x2 : (a0ibp = a0ibp * kvey1, vkwye = 0x0), p4tf0['pivot'](ek1wyv, vkwye), p4tf0['pos'](gc8qs, a0ibp), p4tf0['zOrder'] = eygv7['z'] || 0x0;
    }['drawSprite'](jzr, f3dto4) {
      let xykw = Laya['loader']['getRes'](f3dto4);if (!xykw) return;let p_0i5b = this['rate'] || 0x1,
          sgqc7v = p_0i5b ? xykw['width'] * p_0i5b : this['stageW'],
          vyq7g = p_0i5b ? xykw['height'] * p_0i5b : this['stageH'];jzr['size'](sgqc7v, vyq7g), jzr['graphics']['clear'](), jzr['graphics']['drawTexture'](xykw, 0x0, 0x0, sgqc7v, vyq7g);
    }['renderMask']() {
      let vw7ey = this['config']['gameGsConf']['background'];this['mask'] = this['newNode'](), this['mask']['graphics']['drawRect'](0x0, 0x0, this['stageW'], this['stageH'], '#' + (vw7ey['color'] || 'aaaaaa'));
    }['renderBg'](ekh1wy) {
      let oz32d = this['config']['gameGsConf']['background'];this['bg'] = this['newNode'](), Laya['loader']['load'](oz32d['url'], Laya['Handler']['create'](this, () => {
        this['setRate'](Laya['loader']['getRes'](oz32d['url'])), this['drawSprite'](this['bg'], oz32d['url']), this['setPos'](this['bg'], { 'x': 0x0, 'y': 0x0, 'z': z6d2r['bg'] }), ekh1wy && ekh1wy();
      }));
    }['renderAvatar']() {
      let sgvc7 = this['config']['gameGsConf']['gsAvatar'];this['avatar'] = this['newNode'](this['bg']), Laya['loader']['load'](sgvc7['url'], Laya['Handler']['create'](this, () => {
        this['drawSprite'](this['avatar'], sgvc7['url']), this['setPos'](this['avatar'], { 'x': sgvc7['posX'], 'y': sgvc7['posY'], 'z': z6d2r['avatar'] });
      }));
    }['renderClose']() {
      let vegyq = this['config']['gameGsConf']['closeBtn'];this['closer'] = this['newNode'](this['bg']), Laya['loader']['load'](vegyq['url'], Laya['Handler']['create'](this, () => {
        this['drawSprite'](this['closer'], vegyq['url']), this['setPos'](this['closer'], { 'x': vegyq['posX'], 'y': vegyq['posY'], 'z': z6d2r['closer'] }), this['closer']['on'](Laya['Event']['CLICK'], this, this['close']);
      }));
    }['renderCode']() {
      let f_p0t4 = this['config']['gameGsConf']['qrCodeBtn'];this['code'] = this['newNode'](this['bg']), Laya['loader']['load'](f_p0t4['url'], Laya['Handler']['create'](this, () => {
        this['drawSprite'](this['code'], f_p0t4['url']), this['setPos'](this['code'], { 'x': f_p0t4['posX'], 'y': f_p0t4['posY'], 'z': z6d2r['code'] }), this['code']['on'](Laya['Event']['CLICK'], this, this['onBtnClick']);
      }));
    }['renderWXAccount']() {
      let tod4z3 = this['config']['wxAccount'] || '',
          $jr62z = this['config']['gameGsConf']['copyAccount'];var haw1 = new Laya['Text']();haw1['text'] = ($jr62z['title'] || '') + tod4z3, haw1['fontSize'] = $jr62z['size'] || 0x20, haw1['align'] = $jr62z['textAlign'] || 'center', haw1['color'] = $jr62z['color'] || '#ffffff', this['setPos'](haw1, { 'x': $jr62z['posX'], 'y': $jr62z['posY'], 'z': z6d2r['account'] }), this['bg']['addChild'](haw1);
    }['close']() {
      this['clear'](), this['_log'] && this['_log']['post'](to3df['pageClose'], this['_openType']);
    }['clear']() {
      this['mask']['destroy'](), this['bg']['destroy']();
    }['onBtnClick']() {
      this['_log'] && this['_log']['post'](to3df['btnClick'], this['_openType']);if (!this['config']['gs']) {
        let _pbf50 = this['config']['gameGsConf']['gsMsg'] || '没有达到开通条件';wx && wx['showModal'] && wx['showModal']({ 'content': _pbf50, 'showCancel': ![] });return;
      }if (this['config']['useCopy']) {
        this['onCopy'](this['config']);return;
      }console['warn']('此VIP模块仅支持复制功能\uFF01');
    }['renderSecretaryNum']() {
      const sq8c = this['config']['gameGsConf']['secretary'] || {};let eqwvy7 = this['config']['gameGsConf']['exclusiveNumInfo'];const o3ft = sq8c['number'];if (!o3ft) return;var pib50_ = new Laya['Text']();pib50_['text'] = eqwvy7['title'] + o3ft, pib50_['fontSize'] = 0x20, pib50_['horizontalAlign'] = 'center'['toUpperCase'](), pib50_['color'] = eqwvy7['color'] || '#FFFFFF', this['setPos'](pib50_, { 'x': eqwvy7['posX'], 'y': eqwvy7['posY'], 'z': z6d2r['codeNum'] }), this['bg']['addChild'](pib50_), this['renderSecretBtn']();
    }['renderSecretBtn']() {
      let g7qeyv = this['config']['gameGsConf']['exclusiveNumBtn'];this['exclusiveBtn'] = this['newNode'](this['bg']), Laya['loader']['load'](g7qeyv['url'], Laya['Handler']['create'](this, () => {
        this['drawSprite'](this['exclusiveBtn'], g7qeyv['url']), this['setPos'](this['exclusiveBtn'], { 'x': g7qeyv['posX'], 'y': g7qeyv['posY'], 'z': z6d2r['codeBtn'] }), this['exclusiveBtn']['on'](Laya['Event']['CLICK'], this, this['clickSercretBtn']);
      }));
    }['clickSercretBtn']() {
      const mu6r = this['config']['gameGsConf']['secretary'] || {},
            ahi1kx = mu6r['number'];if (!ahi1kx) return;wx && wx['setClipboardData'] && (wx['setClipboardData']({ 'data': ahi1kx }), this['_log'] && this['_log']['post'](to3df['number'], this['_openType']));
    }['onCopy'](p_05ib) {
      wx && wx['setClipboardData'] && p_05ib && p_05ib['wxAccount'] && (wx['setClipboardData']({ 'data': p_05ib['wxAccount'] }), this['_log'] && this['_log']['post'](to3df['copySecretNum'], this['_openType']));
    }
  }const xi51a = { 'HOST': { 'Prod': 'https://platform.hortorgames.com', 'Test': 'https://platform-test.hortorgames.com' }, 'URLS': { 'Info': '/customer/api/v1/gs/info' } };class b_0fp {
    ['init'](jr2$z6) {
      console['log']('[VIP] hortorVip init', jr2$z6), this['_showIcon'] = jr2$z6['defShowIcon'] !== ![], this['_log'] = new qye7g(), this['_init'](jr2$z6), this['_loadVipData']();
    }['showIcon']() {
      this['_showIcon'] = !![], this['visible'] = !![], this['_initEntryIcon'](), this['_log']['post'](to3df['iconShow']);
    }['hideIcon']() {
      this['_showIcon'] = ![], this['_removeIcon']();
    }['refreshData'](e7qcg) {
      this['_init'](e7qcg), this['_removeIcon'](), this['_loadVipData']();
    }['_init'](_o43ft) {
      if (!_o43ft) return;this['_conf'] = Object['assign'](this['_conf'] || {}, _o43ft), this['_host'] = xi51a['HOST'][this['_conf']['env']], this['_log']['init']({ 'gameId': this['_conf']['vipGameId'], 'userId': this['_conf']['userId'] || this['_conf']['openId'], 'host': this['_host'] });
    }['_loadVipData']() {
      console['log']('[VIP] _loadVipData');let td43of = (ls9c8, ewkyv7) => {
        console['log']('[VIP] _loadVipData loaded', ls9c8, ewkyv7), typeof this['_conf']['onLoad'] === 'function' && this['_conf']['onLoad'](ls9c8, ewkyv7);
      },
          $2r6ju = '' + this['_host'] + xi51a['URLS']['Info'] + '?gameId=' + this['_conf']['vipGameId'] + '&userId=' + this['_conf']['userId'],
          a5xbih = new Laya['HttpRequest']();a5xbih['once'](Laya['Event']['COMPLETE'], this, gyeq => {
        this['_vipData'] = JSON['parse'](gyeq);if (this['_vipData']['meta'] && this['_vipData']['meta']['errCode']) {
          td43of(this['_vipData']['meta']);return;
        }this['_log']['init']({ 'gs': this['_vipData']['gs'], 'openType': this['_vipData']['disabledAutoOpenQrcode'] ? odtz4['click'] : odtz4['auto'] }), td43of(null, this['_vipData']), this['_showIcon'] && this['showIcon']();
      }), a5xbih['once'](Laya['Event']['ERROR'], this, kvyw1e => {
        td43of(kvyw1e);
      }), a5xbih['send']($2r6ju, null, 'get', 'text');
    }['_initEntryIcon']() {
      if (this['_icon']) return console['log']('[VIP] 不能重复实例化 icon');if (!this['_vipData'] || !this['_vipData']['gameGsConf']) return console['log']('[VIP] 无配置信息');if (this['_vipData']['disabled']) return console['log']('[VIP] Disabled');this['_vipData']['gameGsConf']['useCross'] = this['_crossSDK'] && !this['_vipData']['gameGsConf']['gsAddType'], this['_vipData']['useQRCode'] = this['_vipData']['gs'] && !this['_vipData']['gameGsConf']['gsAddType'], this['_vipData']['useCopy'] = this['_vipData']['gs'] && this['_vipData']['gameGsConf']['gsAddType'] == 0x1, Object['assign'](this['_vipData']['gameGsConf']['icon'], this['_conf']['icon'] || {}), this['_icon'] = new x5b(this['_vipData']), this['_icon']['onClick'](this['_onEntryIconClick']['bind'](this)), this['_tryAutoOpen']();
    }['_removeIcon']() {
      this['visible'] = ![], this['_icon'] && this['_icon']['close'] && (this['_icon']['close'](), this['_icon'] = null), this['_removePage']();
    }['_removePage']() {
      this['_page'] && (this['_page']['clear'](), this['_page'] = null);
    }['_tryAutoOpen']() {
      if (this['_vipData']['isAuth'] === 0x0 && !this['_vipData']['disabledAutoOpenQrcode']) {
        if (!this['_vipData']['gs']) return console['log']('[VIP] 没有绑定客服');this['_vipData']['useCopy'] && this['_initPage'](odtz4['auto']);
      }
    }['_onEntryIconClick']() {
      this['_initPage'](odtz4['click']), this['_log']['post'](to3df['iconClick']);
    }['_initPage'](j2zdr6) {
      console['log']('[VIP] _initPage'), this['_removePage'](), this['_page'] = new ve7qy(this['_vipData'], this['_log'], j2zdr6, this['_conf']);
    }
  }class g7vcsq {
    constructor() {
      let y7ke = new b_0fp();y7ke['init']({ 'gameVersion': window['config']['game_ver'], 'vipGameId': window['config']['partner_game_id'], 'env': 'Prod', 'userId': G$3J['openid'], 'icon': { 'posX': 0x64, 'posY': 0x226 }, 'defShowIcon': !!sdk_info['is_vipds'], 'onLoad': (aixk1, h1ikax) => {
          console['log']('vip data loaded---', aixk1, h1ikax);
        } });
    }
  }return window['XingJuBoxMain'] = g7vcsq, exports['XingJuBoxMain'] = g7vcsq, exports;
}({});