var m = wx.$g;
var ghbwy1 = function (z8pl) {
  'use strict';

  class fgzp {
    constructor(je3mtv) {
      this['onClickEvent'] = () => {}, je3mtv && je3mtv['gameGsConf'] && je3mtv['gameGsConf']['icon'] ? (this['opt'] = je3mtv['gameGsConf']['icon'], Laya['loader']['load'](this['opt']['url'], Laya['Handler']['create'](this, this['addIcon']))) : console['log']('[VIP] Icon init data null', je3mtv);
    }['addIcon']() {
      var qumt = Laya['loader']['getRes'](this['opt']['url']);this['icon'] = new Laya['Sprite'](), Laya['stage']['addChild'](this['icon']), this['icon']['pivot'](qumt['width'] / 0x2, qumt['height'] / 0x2);var vd4ae = this['opt']['x'] || this['opt']['posX'] || 0x0,
          hwiyb1 = this['opt']['y'] || this['opt']['posY'] || 0x0;this['icon']['pos'](-0x1 === vd4ae ? Laya['stage']['width'] - qumt['width'] - 0xf : vd4ae, -0x1 === hwiyb1 ? Laya['stage']['height'] / 0x2 : hwiyb1), this['icon']['size'](qumt['width'], qumt['height']), this['icon']['graphics']['clear'](), this['icon']['graphics']['drawTexture'](qumt, 0x0, 0x0), this['bindDrag']();
    }['bindDrag']() {
      var _1r$bi = this['icon']['width'],
          kp5lc = this['icon']['height'];let wdhay4 = new Laya['Rectangle'](_1r$bi / 0x2, kp5lc / 0x2, Laya['stage']['width'] - _1r$bi, Laya['stage']['height'] - kp5lc);this['icon']['on'](Laya['Event']['MOUSE_DOWN'], this, () => {
        this['icon']['startDrag'](wdhay4, !0x0, 0x64, 0x12c, null, !0x0);
      }), this['icon']['on'](Laya['Event']['CLICK'], this, byhi1 => {
        this['onClickEvent']();
      });
    }['onClick'](ad3) {
      ad3 && 'function' == typeof ad3 && (this['onClickEvent'] = ad3);
    }['close']() {
      this['icon']['visible'] = !0x1, this['icon']['destroy']();
    }
  }const i_r$s = { 'auto': 'AUTO', 'click': 'CLICK' },
        ih1br = { 'iconShow': 'ICON-SHOW', 'iconClick': 'ICON-CLICK', 'copyClick': 'WECHAT-COPY', 'btnClick': 'BUTTON-CLICK', 'pageClose': 'CONF-CLOSE', 'pageShow': 'CONF-SHOW', 'copySecretNum': 'SECRET-COPY' };class z8pkfg {
    ['init'](jt3m) {
      this['opt'] = Object['assign'](this['opt'] || {}, jt3m);
    }['_jsonToQuery'](klpzc5) {
      let $ir1_s = {};for (var tvmqj in klpzc5) void 0x0 !== klpzc5[tvmqj] && ($ir1_s[tvmqj] = klpzc5[tvmqj]);return JSON['stringify']($ir1_s);
    }['post'](_br$i1, sg_$) {
      if (this['opt'] && this['opt']['host']) {
        var b1ih_r = this['opt']['host'] + '/customer/api/v1/gs/log';sg_$ = this['_jsonToQuery']({ 'gameId': this['opt']['gameId'], 'userId': this['opt']['userId'], 'gs': this['opt']['gs'], 'alias': _br$i1, 'gsWay': sg_$ || this['opt']['openType'] }), console['log']('[VIP] post log', sg_$);let b_1ir = new Laya['HttpRequest']();b_1ir['send'](b1ih_r, sg_$, 'post', null, ['Content-Type', 'application/json']);
      }
    }
  }const r_h1 = { 'bg': 0xb, 'avatar': 0xd, 'closer': 0xd, 'code': 0xe, 'cross': 0xf, 'account': 0x10, 'codeNum': 0x11, 'codeBtn': 0x12 };class dwb4yh {
    constructor($b1_i, mquxtj, k9l5p) {
      console['log']('[VIP] Page init', $b1_i), this['config'] = $b1_i, this['_log'] = mquxtj, this['_openType'] = k9l5p, this['stageW'] = Laya['stage']['width'], this['stageH'] = Laya['stage']['height'], this['renderMask'](), this['renderBg'](() => {
        this['renderAvatar'](), this['renderClose'](), this['renderCode'](), this['config']['useCopy'] && this['renderWXAccount'](), this['config']['gameGsConf']['secretary'] && this['config']['gameGsConf']['secretary']['number'] && this['renderSecretaryNum'](), this['_log'] && this['_log']['post'](ih1br['pageShow'], this['_openType']);
      });
    }['setRate'](yhib1) {
      this['rate'] = this['stageW'] / yhib1['width'];
    }['newNode'](jtuq3m) {
      jtuq3m = jtuq3m || Laya['stage'];var _r$1s = new Laya['Sprite']();return jtuq3m['addChild'](_r$1s), _r$1s;
    }['setPos'](lk8, kzplc) {
      var l90c5 = this['rate'] || 0x1;let klc5pz = kzplc['x'] || 0x0,
          muqxtj = kzplc['y'] || 0x0,
          klzg8p = lk8['width'] / 0x2,
          c62590 = lk8['height'] / 0x2;-0x1 == klc5pz ? klc5pz = this['stageW'] / 0x2 : (klzg8p = 0x0, klc5pz *= l90c5), -0x1 == muqxtj ? muqxtj = this['stageH'] / 0x2 : (muqxtj *= l90c5, c62590 = 0x0), lk8['pivot'](klzg8p, c62590), lk8['pos'](klc5pz, muqxtj), lk8['zOrder'] = kzplc['z'] || 0x0;
    }['drawSprite'](tmva, bi1r$) {
      var lc09p = Laya['loader']['getRes'](bi1r$),
          bydh4w;lc09p && (bi1r$ = (bydh4w = this['rate'] || 0x1) ? lc09p['width'] * bydh4w : this['stageW'], bydh4w = bydh4w ? lc09p['height'] * bydh4w : this['stageH'], tmva['size'](bi1r$, bydh4w), tmva['graphics']['clear'](), tmva['graphics']['drawTexture'](lc09p, 0x0, 0x0, bi1r$, bydh4w));
    }['renderMask']() {
      var zkgfs = this['config']['gameGsConf']['background'];this['mask'] = this['newNode'](), this['mask']['graphics']['drawRect'](0x0, 0x0, this['stageW'], this['stageH'], '#' + (zkgfs['color'] || 'aaaaaa'));
    }['renderBg'](l5cp0) {
      let mva3te = this['config']['gameGsConf']['background'];this['bg'] = this['newNode'](), Laya['loader']['load'](mva3te['url'], Laya['Handler']['create'](this, () => {
        this['setRate'](Laya['loader']['getRes'](mva3te['url'])), this['drawSprite'](this['bg'], mva3te['url']), this['setPos'](this['bg'], { 'x': 0x0, 'y': 0x0, 'z': r_h1['bg'] }), l5cp0 && l5cp0();
      }));
    }['renderAvatar']() {
      let c52l09 = this['config']['gameGsConf']['gsAvatar'];this['avatar'] = this['newNode'](this['bg']), Laya['loader']['load'](c52l09['url'], Laya['Handler']['create'](this, () => {
        this['drawSprite'](this['avatar'], c52l09['url']), this['setPos'](this['avatar'], { 'x': c52l09['posX'], 'y': c52l09['posY'], 'z': r_h1['avatar'] });
      }));
    }['renderClose']() {
      let _f8s$r = this['config']['gameGsConf']['closeBtn'];this['closer'] = this['newNode'](this['bg']), Laya['loader']['load'](_f8s$r['url'], Laya['Handler']['create'](this, () => {
        this['drawSprite'](this['closer'], _f8s$r['url']), this['setPos'](this['closer'], { 'x': _f8s$r['posX'], 'y': _f8s$r['posY'], 'z': r_h1['closer'] }), this['closer']['on'](Laya['Event']['CLICK'], this, this['close']);
      }));
    }['renderCode']() {
      let zf$ = this['config']['gameGsConf']['qrCodeBtn'];this['code'] = this['newNode'](this['bg']), Laya['loader']['load'](zf$['url'], Laya['Handler']['create'](this, () => {
        this['drawSprite'](this['code'], zf$['url']), this['setPos'](this['code'], { 'x': zf$['posX'], 'y': zf$['posY'], 'z': r_h1['code'] }), this['code']['on'](Laya['Event']['CLICK'], this, this['onBtnClick']);
      }));
    }['renderWXAccount']() {
      var jvtm3e = this['config']['wxAccount'] || '',
          gfpkz8 = this['config']['gameGsConf']['copyAccount'],
          isf$ = new Laya['Text']();isf$['text'] = (gfpkz8['title'] || '') + jvtm3e, isf$['fontSize'] = gfpkz8['size'] || 0x20, isf$['align'] = gfpkz8['textAlign'] || 'center', isf$['color'] = gfpkz8['color'] || '#ffffff', this['setPos'](isf$, { 'x': gfpkz8['posX'], 'y': gfpkz8['posY'], 'z': r_h1['account'] }), this['bg']['addChild'](isf$);
    }['close']() {
      this['clear'](), this['_log'] && this['_log']['post'](ih1br['pageClose'], this['_openType']);
    }['clear']() {
      this['mask']['destroy'](), this['bg']['destroy']();
    }['onBtnClick']() {
      var wvdea4;this['_log'] && this['_log']['post'](ih1br['btnClick'], this['_openType']), this['config']['gs'] ? this['config']['useCopy'] ? this['onCopy'](this['config']) : console['warn']('此VIP模块仅支持复制功能\uFF01') : (wvdea4 = this['config']['gameGsConf']['gsMsg'] || '没有达到开通条件', wx && wx['showModal'] && wx['showModal']({ 'content': wvdea4, 'showCancel': !0x1 }));
    }['renderSecretaryNum']() {
      var dyw4hb = this['config']['gameGsConf']['secretary'] || {},
          eyda4 = this['config']['gameGsConf']['exclusiveNumInfo'],
          p9k = dyw4hb['number'];p9k && ((dyw4hb = new Laya['Text']())['text'] = eyda4['title'] + p9k, dyw4hb['fontSize'] = 0x20, dyw4hb['horizontalAlign'] = 'center'['toUpperCase'](), dyw4hb['color'] = eyda4['color'] || '#FFFFFF', this['setPos'](dyw4hb, { 'x': eyda4['posX'], 'y': eyda4['posY'], 'z': r_h1['codeNum'] }), this['bg']['addChild'](dyw4hb), this['renderSecretBtn']());
    }['renderSecretBtn']() {
      let r$fi_ = this['config']['gameGsConf']['exclusiveNumBtn'];this['exclusiveBtn'] = this['newNode'](this['bg']), Laya['loader']['load'](r$fi_['url'], Laya['Handler']['create'](this, () => {
        this['drawSprite'](this['exclusiveBtn'], r$fi_['url']), this['setPos'](this['exclusiveBtn'], { 'x': r$fi_['posX'], 'y': r$fi_['posY'], 'z': r_h1['codeBtn'] }), this['exclusiveBtn']['on'](Laya['Event']['CLICK'], this, this['clickSercretBtn']);
      }));
    }['clickSercretBtn']() {
      var c95kl = (this['config']['gameGsConf']['secretary'] || {})['number'];c95kl && wx && wx['setClipboardData'] && (wx['setClipboardData']({ 'data': c95kl }), this['_log'] && this['_log']['post'](ih1br['number'], this['_openType']));
    }['onCopy'](_sr$f) {
      wx && wx['setClipboardData'] && _sr$f && _sr$f['wxAccount'] && (wx['setClipboardData']({ 'data': _sr$f['wxAccount'] }), this['_log'] && this['_log']['post'](ih1br['copySecretNum'], this['_openType']));
    }
  }const _ir$s = { 'HOST': { 'Prod': 'https://platform.hortorgames.com', 'Test': 'https://platform-test.hortorgames.com' }, 'URLS': { 'Info': '/customer/api/v1/gs/info' } };class mvad3e {
    ['init'](y4adew) {
      console['log']('[VIP] hortorVip init', y4adew), this['_showIcon'] = !0x1 !== y4adew['defShowIcon'], this['_log'] = new z8pkfg(), this['_init'](y4adew), this['_loadVipData']();
    }['showIcon']() {
      this['_showIcon'] = !0x0, this['visible'] = !0x0, this['_initEntryIcon'](), this['_log']['post'](ih1br['iconShow']);
    }['hideIcon']() {
      this['_showIcon'] = !0x1, this['_removeIcon']();
    }['refreshData'](vtema) {
      this['_init'](vtema), this['_removeIcon'](), this['_loadVipData']();
    }['_init'](oc69) {
      oc69 && (this['_conf'] = Object['assign'](this['_conf'] || {}, oc69), this['_host'] = _ir$s['HOST'][this['_conf']['env']], this['_log']['init']({ 'gameId': this['_conf']['vipGameId'], 'userId': this['_conf']['userId'] || this['_conf']['openId'], 'host': this['_host'] }));
    }['_loadVipData']() {
      console['log']('[VIP] _loadVipData');let lp8zg = (h1ybwi, vtma3) => {
        console['log']('[VIP] _loadVipData loaded', h1ybwi, vtma3), 'function' == typeof this['_conf']['onLoad'] && this['_conf']['onLoad'](h1ybwi, vtma3);
      };var w4h1y = '' + this['_host'] + _ir$s['URLS']['Info'] + '?gameId=' + this['_conf']['vipGameId'] + '&userId=' + this['_conf']['userId'];let lp8zkg = new Laya['HttpRequest']();lp8zkg['once'](Laya['Event']['COMPLETE'], this, a4eywd => {
        this['_vipData'] = JSON['parse'](a4eywd), this['_vipData']['meta'] && this['_vipData']['meta']['errCode'] ? lp8zg(this['_vipData']['meta']) : (this['_log']['init']({ 'gs': this['_vipData']['gs'], 'openType': this['_vipData']['disabledAutoOpenQrcode'] ? i_r$s['click'] : i_r$s['auto'] }), lp8zg(null, this['_vipData']), this['_showIcon'] && this['showIcon']());
      }), lp8zkg['once'](Laya['Event']['ERROR'], this, p5k9c => {
        lp8zg(p5k9c);
      }), lp8zkg['send'](w4h1y, null, 'get', 'text');
    }['_initEntryIcon']() {
      return this['_icon'] ? console['log']('[VIP] 不能重复实例化 icon') : this['_vipData'] && this['_vipData']['gameGsConf'] ? this['_vipData']['disabled'] ? console['log']('[VIP] Disabled') : (this['_vipData']['gameGsConf']['useCross'] = this['_crossSDK'] && !this['_vipData']['gameGsConf']['gsAddType'], this['_vipData']['useQRCode'] = this['_vipData']['gs'] && !this['_vipData']['gameGsConf']['gsAddType'], this['_vipData']['useCopy'] = this['_vipData']['gs'] && 0x1 == this['_vipData']['gameGsConf']['gsAddType'], Object['assign'](this['_vipData']['gameGsConf']['icon'], this['_conf']['icon'] || {}), this['_icon'] = new fgzp(this['_vipData']), this['_icon']['onClick'](this['_onEntryIconClick']['bind'](this)), void this['_tryAutoOpen']()) : console['log']('[VIP] 无配置信息');
    }['_removeIcon']() {
      this['visible'] = !0x1, this['_icon'] && this['_icon']['close'] && (this['_icon']['close'](), this['_icon'] = null), this['_removePage']();
    }['_removePage']() {
      this['_page'] && (this['_page']['clear'](), this['_page'] = null);
    }['_tryAutoOpen']() {
      if (0x0 === this['_vipData']['isAuth'] && !this['_vipData']['disabledAutoOpenQrcode']) {
        if (!this['_vipData']['gs']) return console['log']('[VIP] 没有绑定客服');this['_vipData']['useCopy'] && this['_initPage'](i_r$s['auto']);
      }
    }['_onEntryIconClick']() {
      this['_initPage'](i_r$s['click']), this['_log']['post'](ih1br['iconClick']);
    }['_initPage'](fi$sr) {
      console['log']('[VIP] _initPage'), this['_removePage'](), this['_page'] = new dwb4yh(this['_vipData'], this['_log'], fi$sr, this['_conf']);
    }
  }class h1b_ir {
    constructor() {
      let yhbw = new mvad3e();yhbw['init']({ 'gameVersion': window['config']['game_ver'], 'vipGameId': window['config']['partner_game_id'], 'env': 'Prod', 'userId': window['G$0N']['userId'], 'icon': { 'posX': 0x64, 'posY': 0x226 }, 'defShowIcon': !!sdk_info['is_vipds'], 'onLoad': (fs8$_g, mxjut) => {
          console['log']('vip data loaded---', fs8$_g, mxjut);
        } });
    }
  }return window['XingJuBoxMain'] = h1b_ir, z8pl['XingJuBoxMain'] = h1b_ir, z8pl;
}({});