var m = wx.$g;
var gbfh9 = function (xk7rb) {
  'use strict';

  class k7rb9 {
    constructor(m03_8e) {
      this['onClickEvent'] = () => {}, m03_8e && m03_8e['gameGsConf'] && m03_8e['gameGsConf']['icon'] ? (this['opt'] = m03_8e['gameGsConf']['icon'], Laya['loader']['load'](this['opt']['url'], Laya['Handler']['create'](this, this['addIcon']))) : console['log']('[VIP] Icon init data null', m03_8e);
    }['addIcon']() {
      var p0det = Laya['loader']['getRes'](this['opt']['url']);this['icon'] = new Laya['Sprite'](), Laya['stage']['addChild'](this['icon']), this['icon']['pivot'](p0det['width'] / 0x2, p0det['height'] / 0x2);var cpdte0 = this['opt']['x'] || this['opt']['posX'] || 0x0,
          l23z$ = this['opt']['y'] || this['opt']['posY'] || 0x0;this['icon']['pos'](-0x1 === cpdte0 ? Laya['stage']['width'] - p0det['width'] - 0xf : cpdte0, -0x1 === l23z$ ? Laya['stage']['height'] / 0x2 : l23z$), this['icon']['size'](p0det['width'], p0det['height']), this['icon']['graphics']['clear'](), this['icon']['graphics']['drawTexture'](p0det, 0x0, 0x0), this['bindDrag']();
    }['bindDrag']() {
      var k$w72x = this['icon']['width'],
          frby95 = this['icon']['height'];let _l$w3z = new Laya['Rectangle'](k$w72x / 0x2, frby95 / 0x2, Laya['stage']['width'] - k$w72x, Laya['stage']['height'] - frby95);this['icon']['on'](Laya['Event']['MOUSE_DOWN'], this, () => {
        this['icon']['startDrag'](_l$w3z, !0x0, 0x64, 0x12c, null, !0x0);
      }), this['icon']['on'](Laya['Event']['CLICK'], this, l08m_ => {
        this['onClickEvent']();
      });
    }['onClick'](rb75f) {
      rb75f && 'function' == typeof rb75f && (this['onClickEvent'] = rb75f);
    }['close']() {
      this['icon']['visible'] = !0x1, this['icon']['destroy']();
    }
  }const ptvdo = { 'auto': 'AUTO', 'click': 'CLICK' },
        bfrx = { 'iconShow': 'ICON-SHOW', 'iconClick': 'ICON-CLICK', 'copyClick': 'WECHAT-COPY', 'btnClick': 'BUTTON-CLICK', 'pageClose': 'CONF-CLOSE', 'pageShow': 'CONF-SHOW', 'copySecretNum': 'SECRET-COPY' };class b759r {
    ['init'](g6sij) {
      this['opt'] = Object['assign'](this['opt'] || {}, g6sij);
    }['_jsonToQuery'](xr7wk2) {
      let e0tmd = {};for (var h5u4y in xr7wk2) void 0x0 !== xr7wk2[h5u4y] && (e0tmd[h5u4y] = xr7wk2[h5u4y]);return JSON['stringify'](e0tmd);
    }['post'](r9y, yu4h5i) {
      if (this['opt'] && this['opt']['host']) {
        var medtp = this['opt']['host'] + '/customer/api/v1/gs/log';yu4h5i = this['_jsonToQuery']({ 'gameId': this['opt']['gameId'], 'userId': this['opt']['userId'], 'gs': this['opt']['gs'], 'alias': r9y, 'gsWay': yu4h5i || this['opt']['openType'] }), console['log']('[VIP] post log', yu4h5i);let _$8 = new Laya['HttpRequest']();_$8['send'](medtp, yu4h5i, 'post', null, ['Content-Type', 'application/json']);
      }
    }
  }const cdp0e = { 'bg': 0xb, 'avatar': 0xd, 'closer': 0xd, 'code': 0xe, 'cross': 0xf, 'account': 0x10, 'codeNum': 0x11, 'codeBtn': 0x12 };class w$l32z {
    constructor(tepdo, h59fyb, ctvdqo) {
      console['log']('[VIP] Page init', tepdo), this['config'] = tepdo, this['_log'] = h59fyb, this['_openType'] = ctvdqo, this['stageW'] = Laya['stage']['width'], this['stageH'] = Laya['stage']['height'], this['renderMask'](), this['renderBg'](() => {
        this['renderAvatar'](), this['renderClose'](), this['renderCode'](), this['config']['useCopy'] && this['renderWXAccount'](), this['config']['gameGsConf']['secretary'] && this['config']['gameGsConf']['secretary']['number'] && this['renderSecretaryNum'](), this['_log'] && this['_log']['post'](bfrx['pageShow'], this['_openType']);
      });
    }['setRate'](doptc) {
      this['rate'] = this['stageW'] / doptc['width'];
    }['newNode'](tepcdo) {
      tepcdo = tepcdo || Laya['stage'];var mpe0_8 = new Laya['Sprite']();return tepcdo['addChild'](mpe0_8), mpe0_8;
    }['setPos'](rw2, f7r9bk) {
      var j6isg = this['rate'] || 0x1;let p0tdc = f7r9bk['x'] || 0x0,
          pcteo = f7r9bk['y'] || 0x0,
          usja = rw2['width'] / 0x2,
          iauj = rw2['height'] / 0x2;-0x1 == p0tdc ? p0tdc = this['stageW'] / 0x2 : (usja = 0x0, p0tdc *= j6isg), -0x1 == pcteo ? pcteo = this['stageH'] / 0x2 : (pcteo *= j6isg, iauj = 0x0), rw2['pivot'](usja, iauj), rw2['pos'](p0tdc, pcteo), rw2['zOrder'] = f7r9bk['z'] || 0x0;
    }['drawSprite'](krx7w2, y4uhis) {
      var f9b7k = Laya['loader']['getRes'](y4uhis),
          tdpvoc;f9b7k && (y4uhis = (tdpvoc = this['rate'] || 0x1) ? f9b7k['width'] * tdpvoc : this['stageW'], tdpvoc = tdpvoc ? f9b7k['height'] * tdpvoc : this['stageH'], krx7w2['size'](y4uhis, tdpvoc), krx7w2['graphics']['clear'](), krx7w2['graphics']['drawTexture'](f9b7k, 0x0, 0x0, y4uhis, tdpvoc));
    }['renderMask']() {
      var e308m = this['config']['gameGsConf']['background'];this['mask'] = this['newNode'](), this['mask']['graphics']['drawRect'](0x0, 0x0, this['stageW'], this['stageH'], '#' + (e308m['color'] || 'aaaaaa'));
    }['renderBg'](k72r) {
      let w2xl$z = this['config']['gameGsConf']['background'];this['bg'] = this['newNode'](), Laya['loader']['load'](w2xl$z['url'], Laya['Handler']['create'](this, () => {
        this['setRate'](Laya['loader']['getRes'](w2xl$z['url'])), this['drawSprite'](this['bg'], w2xl$z['url']), this['setPos'](this['bg'], { 'x': 0x0, 'y': 0x0, 'z': cdp0e['bg'] }), k72r && k72r();
      }));
    }['renderAvatar']() {
      let sajug = this['config']['gameGsConf']['gsAvatar'];this['avatar'] = this['newNode'](this['bg']), Laya['loader']['load'](sajug['url'], Laya['Handler']['create'](this, () => {
        this['drawSprite'](this['avatar'], sajug['url']), this['setPos'](this['avatar'], { 'x': sajug['posX'], 'y': sajug['posY'], 'z': cdp0e['avatar'] });
      }));
    }['renderClose']() {
      let zl$83_ = this['config']['gameGsConf']['closeBtn'];this['closer'] = this['newNode'](this['bg']), Laya['loader']['load'](zl$83_['url'], Laya['Handler']['create'](this, () => {
        this['drawSprite'](this['closer'], zl$83_['url']), this['setPos'](this['closer'], { 'x': zl$83_['posX'], 'y': zl$83_['posY'], 'z': cdp0e['closer'] }), this['closer']['on'](Laya['Event']['CLICK'], this, this['close']);
      }));
    }['renderCode']() {
      let m8p_e0 = this['config']['gameGsConf']['qrCodeBtn'];this['code'] = this['newNode'](this['bg']), Laya['loader']['load'](m8p_e0['url'], Laya['Handler']['create'](this, () => {
        this['drawSprite'](this['code'], m8p_e0['url']), this['setPos'](this['code'], { 'x': m8p_e0['posX'], 'y': m8p_e0['posY'], 'z': cdp0e['code'] }), this['code']['on'](Laya['Event']['CLICK'], this, this['onBtnClick']);
      }));
    }['renderWXAccount']() {
      var zw3$_l = this['config']['wxAccount'] || '',
          x$2wk7 = this['config']['gameGsConf']['copyAccount'],
          yr9bf5 = new Laya['Text']();yr9bf5['text'] = (x$2wk7['title'] || '') + zw3$_l, yr9bf5['fontSize'] = x$2wk7['size'] || 0x20, yr9bf5['align'] = x$2wk7['textAlign'] || 'center', yr9bf5['color'] = x$2wk7['color'] || '#ffffff', this['setPos'](yr9bf5, { 'x': x$2wk7['posX'], 'y': x$2wk7['posY'], 'z': cdp0e['account'] }), this['bg']['addChild'](yr9bf5);
    }['close']() {
      this['clear'](), this['_log'] && this['_log']['post'](bfrx['pageClose'], this['_openType']);
    }['clear']() {
      this['mask']['destroy'](), this['bg']['destroy']();
    }['onBtnClick']() {
      var w$2xzk;this['_log'] && this['_log']['post'](bfrx['btnClick'], this['_openType']), this['config']['gs'] ? this['config']['useCopy'] ? this['onCopy'](this['config']) : console['warn']('此VIP模块仅支持复制功能\uFF01') : (w$2xzk = this['config']['gameGsConf']['gsMsg'] || '没有达到开通条件', wx && wx['showModal'] && wx['showModal']({ 'content': w$2xzk, 'showCancel': !0x1 }));
    }['renderSecretaryNum']() {
      var k$2zw = this['config']['gameGsConf']['secretary'] || {},
          e0tcpd = this['config']['gameGsConf']['exclusiveNumInfo'],
          z3_ml = k$2zw['number'];z3_ml && ((k$2zw = new Laya['Text']())['text'] = e0tcpd['title'] + z3_ml, k$2zw['fontSize'] = 0x20, k$2zw['horizontalAlign'] = 'center'['toUpperCase'](), k$2zw['color'] = e0tcpd['color'] || '#FFFFFF', this['setPos'](k$2zw, { 'x': e0tcpd['posX'], 'y': e0tcpd['posY'], 'z': cdp0e['codeNum'] }), this['bg']['addChild'](k$2zw), this['renderSecretBtn']());
    }['renderSecretBtn']() {
      let gja6s = this['config']['gameGsConf']['exclusiveNumBtn'];this['exclusiveBtn'] = this['newNode'](this['bg']), Laya['loader']['load'](gja6s['url'], Laya['Handler']['create'](this, () => {
        this['drawSprite'](this['exclusiveBtn'], gja6s['url']), this['setPos'](this['exclusiveBtn'], { 'x': gja6s['posX'], 'y': gja6s['posY'], 'z': cdp0e['codeBtn'] }), this['exclusiveBtn']['on'](Laya['Event']['CLICK'], this, this['clickSercretBtn']);
      }));
    }['clickSercretBtn']() {
      var zl3w$ = (this['config']['gameGsConf']['secretary'] || {})['number'];zl3w$ && wx && wx['setClipboardData'] && (wx['setClipboardData']({ 'data': zl3w$ }), this['_log'] && this['_log']['post'](bfrx['number'], this['_openType']));
    }['onCopy'](ihuys4) {
      wx && wx['setClipboardData'] && ihuys4 && ihuys4['wxAccount'] && (wx['setClipboardData']({ 'data': ihuys4['wxAccount'] }), this['_log'] && this['_log']['post'](bfrx['copySecretNum'], this['_openType']));
    }
  }const ish4 = { 'HOST': { 'Prod': 'https://platform.hortorgames.com', 'Test': 'https://platform-test.hortorgames.com' }, 'URLS': { 'Info': '/customer/api/v1/gs/info' } };class ajus {
    ['init'](ujigsa) {
      console['log']('[VIP] hortorVip init', ujigsa), this['_showIcon'] = !0x1 !== ujigsa['defShowIcon'], this['_log'] = new b759r(), this['_init'](ujigsa), this['_loadVipData']();
    }['showIcon']() {
      this['_showIcon'] = !0x0, this['visible'] = !0x0, this['_initEntryIcon'](), this['_log']['post'](bfrx['iconShow']);
    }['hideIcon']() {
      this['_showIcon'] = !0x1, this['_removeIcon']();
    }['refreshData'](yfr9b) {
      this['_init'](yfr9b), this['_removeIcon'](), this['_loadVipData']();
    }['_init'](yuh95) {
      yuh95 && (this['_conf'] = Object['assign'](this['_conf'] || {}, yuh95), this['_host'] = ish4['HOST'][this['_conf']['env']], this['_log']['init']({ 'gameId': this['_conf']['vipGameId'], 'userId': this['_conf']['userId'] || this['_conf']['openId'], 'host': this['_host'] }));
    }['_loadVipData']() {
      console['log']('[VIP] _loadVipData');let x$wk2 = (d0tepm, kw2$zx) => {
        console['log']('[VIP] _loadVipData loaded', d0tepm, kw2$zx), 'function' == typeof this['_conf']['onLoad'] && this['_conf']['onLoad'](d0tepm, kw2$zx);
      };var l8z_m = '' + this['_host'] + ish4['URLS']['Info'] + '?gameId=' + this['_conf']['vipGameId'] + '&userId=' + this['_conf']['userId'];let uih4y5 = new Laya['HttpRequest']();uih4y5['once'](Laya['Event']['COMPLETE'], this, ptdvc => {
        this['_vipData'] = JSON['parse'](ptdvc), this['_vipData']['meta'] && this['_vipData']['meta']['errCode'] ? x$wk2(this['_vipData']['meta']) : (this['_log']['init']({ 'gs': this['_vipData']['gs'], 'openType': this['_vipData']['disabledAutoOpenQrcode'] ? ptvdo['click'] : ptvdo['auto'] }), x$wk2(null, this['_vipData']), this['_showIcon'] && this['showIcon']());
      }), uih4y5['once'](Laya['Event']['ERROR'], this, pe8md => {
        x$wk2(pe8md);
      }), uih4y5['send'](l8z_m, null, 'get', 'text');
    }['_initEntryIcon']() {
      return this['_icon'] ? console['log']('[VIP] 不能重复实例化 icon') : this['_vipData'] && this['_vipData']['gameGsConf'] ? this['_vipData']['disabled'] ? console['log']('[VIP] Disabled') : (this['_vipData']['gameGsConf']['useCross'] = this['_crossSDK'] && !this['_vipData']['gameGsConf']['gsAddType'], this['_vipData']['useQRCode'] = this['_vipData']['gs'] && !this['_vipData']['gameGsConf']['gsAddType'], this['_vipData']['useCopy'] = this['_vipData']['gs'] && 0x1 == this['_vipData']['gameGsConf']['gsAddType'], Object['assign'](this['_vipData']['gameGsConf']['icon'], this['_conf']['icon'] || {}), this['_icon'] = new k7rb9(this['_vipData']), this['_icon']['onClick'](this['_onEntryIconClick']['bind'](this)), void this['_tryAutoOpen']()) : console['log']('[VIP] 无配置信息');
    }['_removeIcon']() {
      this['visible'] = !0x1, this['_icon'] && this['_icon']['close'] && (this['_icon']['close'](), this['_icon'] = null), this['_removePage']();
    }['_removePage']() {
      this['_page'] && (this['_page']['clear'](), this['_page'] = null);
    }['_tryAutoOpen']() {
      if (0x0 === this['_vipData']['isAuth'] && !this['_vipData']['disabledAutoOpenQrcode']) {
        if (!this['_vipData']['gs']) return console['log']('[VIP] 没有绑定客服');this['_vipData']['useCopy'] && this['_initPage'](ptvdo['auto']);
      }
    }['_onEntryIconClick']() {
      this['_initPage'](ptvdo['click']), this['_log']['post'](bfrx['iconClick']);
    }['_initPage'](yfh9b5) {
      console['log']('[VIP] _initPage'), this['_removePage'](), this['_page'] = new w$l32z(this['_vipData'], this['_log'], yfh9b5, this['_conf']);
    }
  }class jiaugs {
    constructor() {
      let fyr9 = new ajus();fyr9['init']({ 'gameVersion': window['config']['game_ver'], 'vipGameId': window['config']['partner_game_id'], 'env': 'Prod', 'userId': window['G$B7']['userId'], 'icon': { 'posX': 0x64, 'posY': 0x226 }, 'defShowIcon': !0x0, 'onLoad': (au4jsi, kx7fb) => {
          console['log']('vip data loaded---', au4jsi, kx7fb);
        } });
    }
  }return window['XingJuBoxMain'] = jiaugs, xk7rb['XingJuBoxMain'] = jiaugs, xk7rb;
}({});