var m = wx.$g;
var gas8xi$ = function (vel46) {
  'use strict';

  class $mx8 {
    constructor(uv532q) {
      this['onClickEvent'] = () => {}, uv532q && uv532q['gameGsConf'] && uv532q['gameGsConf']['icon'] ? (this['opt'] = uv532q['gameGsConf']['icon'], Laya['loader']['load'](this['opt']['url'], Laya['Handler']['create'](this, this['addIcon']))) : console['log']('[VIP] Icon init data null', uv532q);
    }['addIcon']() {
      var u2vec = Laya['loader']['getRes'](this['opt']['url']);this['icon'] = new Laya['Sprite'](), Laya['stage']['addChild'](this['icon']), this['icon']['pivot'](u2vec['width'] / 0x2, u2vec['height'] / 0x2);var ce46fl = this['opt']['x'] || this['opt']['posX'] || 0x0,
          fl4h6r = this['opt']['y'] || this['opt']['posY'] || 0x0;this['icon']['pos'](-0x1 === ce46fl ? Laya['stage']['width'] - u2vec['width'] - 0xf : ce46fl, -0x1 === fl4h6r ? Laya['stage']['height'] / 0x2 : fl4h6r), this['icon']['size'](u2vec['width'], u2vec['height']), this['icon']['graphics']['clear'](), this['icon']['graphics']['drawTexture'](u2vec, 0x0, 0x0), this['bindDrag']();
    }['bindDrag']() {
      var fl46c = this['icon']['width'],
          jiza = this['icon']['height'];let ixjam8 = new Laya['Rectangle'](fl46c / 0x2, jiza / 0x2, Laya['stage']['width'] - fl46c, Laya['stage']['height'] - jiza);this['icon']['on'](Laya['Event']['MOUSE_DOWN'], this, () => {
        this['icon']['startDrag'](ixjam8, !0x0, 0x64, 0x12c, null, !0x0);
      }), this['icon']['on'](Laya['Event']['CLICK'], this, so$xi8 => {
        this['onClickEvent']();
      });
    }['onClick'](r64hf) {
      r64hf && 'function' == typeof r64hf && (this['onClickEvent'] = r64hf);
    }['close']() {
      this['icon']['visible'] = !0x1, this['icon']['destroy']();
    }
  }const eq2uv = { 'auto': 'AUTO', 'click': 'CLICK' },
        ktp1 = { 'iconShow': 'ICON-SHOW', 'iconClick': 'ICON-CLICK', 'copyClick': 'WECHAT-COPY', 'btnClick': 'BUTTON-CLICK', 'pageClose': 'CONF-CLOSE', 'pageShow': 'CONF-SHOW', 'copySecretNum': 'SECRET-COPY' };class rh0bd {
    ['init'](jamzi) {
      this['opt'] = Object['assign'](this['opt'] || {}, jamzi);
    }['_jsonToQuery'](h4c) {
      let _3q = {};for (var tg1yp in h4c) void 0x0 !== h4c[tg1yp] && (_3q[tg1yp] = h4c[tg1yp]);return JSON['stringify'](_3q);
    }['post']($oxs8i, gyt1k) {
      if (this['opt'] && this['opt']['host']) {
        var qp5t_ = this['opt']['host'] + '/customer/api/v1/gs/log';gyt1k = this['_jsonToQuery']({ 'gameId': this['opt']['gameId'], 'userId': this['opt']['userId'], 'gs': this['opt']['gs'], 'alias': $oxs8i, 'gsWay': gyt1k || this['opt']['openType'] }), console['log']('[VIP] post log', gyt1k);let fd90r = new Laya['HttpRequest']();fd90r['send'](qp5t_, gyt1k, 'post', null, ['Content-Type', 'application/json']);
      }
    }
  }const w_ptq = { 'bg': 0xb, 'avatar': 0xd, 'closer': 0xd, 'code': 0xe, 'cross': 0xf, 'account': 0x10, 'codeNum': 0x11, 'codeBtn': 0x12 };class _gwp {
    constructor(tp1, k1y7pg, o7k1s$) {
      console['log']('[VIP] Page init', tp1), this['config'] = tp1, this['_log'] = k1y7pg, this['_openType'] = o7k1s$, this['stageW'] = Laya['stage']['width'], this['stageH'] = Laya['stage']['height'], this['renderMask'](), this['renderBg'](() => {
        this['renderAvatar'](), this['renderClose'](), this['renderCode'](), this['config']['useCopy'] && this['renderWXAccount'](), this['config']['gameGsConf']['secretary'] && this['config']['gameGsConf']['secretary']['number'] && this['renderSecretaryNum'](), this['_log'] && this['_log']['post'](ktp1['pageShow'], this['_openType']);
      });
    }['setRate'](mazx) {
      this['rate'] = this['stageW'] / mazx['width'];
    }['newNode'](lf64hr) {
      lf64hr = lf64hr || Laya['stage'];var c4f = new Laya['Sprite']();return lf64hr['addChild'](c4f), c4f;
    }['setPos'](q_5u3w, uw532q) {
      var t_wq3 = this['rate'] || 0x1;let qe3uv = uw532q['x'] || 0x0,
          u23vce = uw532q['y'] || 0x0,
          wqt5_p = q_5u3w['width'] / 0x2,
          tykg_ = q_5u3w['height'] / 0x2;-0x1 == qe3uv ? qe3uv = this['stageW'] / 0x2 : (wqt5_p = 0x0, qe3uv *= t_wq3), -0x1 == u23vce ? u23vce = this['stageH'] / 0x2 : (u23vce *= t_wq3, tykg_ = 0x0), q_5u3w['pivot'](wqt5_p, tykg_), q_5u3w['pos'](qe3uv, u23vce), q_5u3w['zOrder'] = uw532q['z'] || 0x0;
    }['drawSprite'](x8iamj, ok1gy) {
      var i$ox = Laya['loader']['getRes'](ok1gy),
          q35_w;i$ox && (ok1gy = (q35_w = this['rate'] || 0x1) ? i$ox['width'] * q35_w : this['stageW'], q35_w = q35_w ? i$ox['height'] * q35_w : this['stageH'], x8iamj['size'](ok1gy, q35_w), x8iamj['graphics']['clear'](), x8iamj['graphics']['drawTexture'](i$ox, 0x0, 0x0, ok1gy, q35_w));
    }['renderMask']() {
      var gy1tpk = this['config']['gameGsConf']['background'];this['mask'] = this['newNode'](), this['mask']['graphics']['drawRect'](0x0, 0x0, this['stageW'], this['stageH'], '#' + (gy1tpk['color'] || 'aaaaaa'));
    }['renderBg'](u2evc3) {
      let e4cv62 = this['config']['gameGsConf']['background'];this['bg'] = this['newNode'](), Laya['loader']['load'](e4cv62['url'], Laya['Handler']['create'](this, () => {
        this['setRate'](Laya['loader']['getRes'](e4cv62['url'])), this['drawSprite'](this['bg'], e4cv62['url']), this['setPos'](this['bg'], { 'x': 0x0, 'y': 0x0, 'z': w_ptq['bg'] }), u2evc3 && u2evc3();
      }));
    }['renderAvatar']() {
      let ysk71o = this['config']['gameGsConf']['gsAvatar'];this['avatar'] = this['newNode'](this['bg']), Laya['loader']['load'](ysk71o['url'], Laya['Handler']['create'](this, () => {
        this['drawSprite'](this['avatar'], ysk71o['url']), this['setPos'](this['avatar'], { 'x': ysk71o['posX'], 'y': ysk71o['posY'], 'z': w_ptq['avatar'] });
      }));
    }['renderClose']() {
      let a8mi$x = this['config']['gameGsConf']['closeBtn'];this['closer'] = this['newNode'](this['bg']), Laya['loader']['load'](a8mi$x['url'], Laya['Handler']['create'](this, () => {
        this['drawSprite'](this['closer'], a8mi$x['url']), this['setPos'](this['closer'], { 'x': a8mi$x['posX'], 'y': a8mi$x['posY'], 'z': w_ptq['closer'] }), this['closer']['on'](Laya['Event']['CLICK'], this, this['close']);
      }));
    }['renderCode']() {
      let mjaxi = this['config']['gameGsConf']['qrCodeBtn'];this['code'] = this['newNode'](this['bg']), Laya['loader']['load'](mjaxi['url'], Laya['Handler']['create'](this, () => {
        this['drawSprite'](this['code'], mjaxi['url']), this['setPos'](this['code'], { 'x': mjaxi['posX'], 'y': mjaxi['posY'], 'z': w_ptq['code'] }), this['code']['on'](Laya['Event']['CLICK'], this, this['onBtnClick']);
      }));
    }['renderWXAccount']() {
      var e24c = this['config']['wxAccount'] || '',
          $siax = this['config']['gameGsConf']['copyAccount'],
          xmij = new Laya['Text']();xmij['text'] = ($siax['title'] || '') + e24c, xmij['fontSize'] = $siax['size'] || 0x20, xmij['align'] = $siax['textAlign'] || 'center', xmij['color'] = $siax['color'] || '#ffffff', this['setPos'](xmij, { 'x': $siax['posX'], 'y': $siax['posY'], 'z': w_ptq['account'] }), this['bg']['addChild'](xmij);
    }['close']() {
      this['clear'](), this['_log'] && this['_log']['post'](ktp1['pageClose'], this['_openType']);
    }['clear']() {
      this['mask']['destroy'](), this['bg']['destroy']();
    }['onBtnClick']() {
      var ygk7o;this['_log'] && this['_log']['post'](ktp1['btnClick'], this['_openType']), this['config']['gs'] ? this['config']['useCopy'] ? this['onCopy'](this['config']) : console['warn']('此VIP模块仅支持复制功能\uFF01') : (ygk7o = this['config']['gameGsConf']['gsMsg'] || '没有达到开通条件', wx && wx['showModal'] && wx['showModal']({ 'content': ygk7o, 'showCancel': !0x1 }));
    }['renderSecretaryNum']() {
      var oixs$ = this['config']['gameGsConf']['secretary'] || {},
          oyk7 = this['config']['gameGsConf']['exclusiveNumInfo'],
          u2cv3 = oixs$['number'];u2cv3 && ((oixs$ = new Laya['Text']())['text'] = oyk7['title'] + u2cv3, oixs$['fontSize'] = 0x20, oixs$['horizontalAlign'] = 'center'['toUpperCase'](), oixs$['color'] = oyk7['color'] || '#FFFFFF', this['setPos'](oixs$, { 'x': oyk7['posX'], 'y': oyk7['posY'], 'z': w_ptq['codeNum'] }), this['bg']['addChild'](oixs$), this['renderSecretBtn']());
    }['renderSecretBtn']() {
      let s7$o1k = this['config']['gameGsConf']['exclusiveNumBtn'];this['exclusiveBtn'] = this['newNode'](this['bg']), Laya['loader']['load'](s7$o1k['url'], Laya['Handler']['create'](this, () => {
        this['drawSprite'](this['exclusiveBtn'], s7$o1k['url']), this['setPos'](this['exclusiveBtn'], { 'x': s7$o1k['posX'], 'y': s7$o1k['posY'], 'z': w_ptq['codeBtn'] }), this['exclusiveBtn']['on'](Laya['Event']['CLICK'], this, this['clickSercretBtn']);
      }));
    }['clickSercretBtn']() {
      var $i8xas = (this['config']['gameGsConf']['secretary'] || {})['number'];$i8xas && wx && wx['setClipboardData'] && (wx['setClipboardData']({ 'data': $i8xas }), this['_log'] && this['_log']['post'](ktp1['number'], this['_openType']));
    }['onCopy'](dr90f) {
      wx && wx['setClipboardData'] && dr90f && dr90f['wxAccount'] && (wx['setClipboardData']({ 'data': dr90f['wxAccount'] }), this['_log'] && this['_log']['post'](ktp1['copySecretNum'], this['_openType']));
    }
  }const uq5v2 = { 'HOST': { 'Prod': 'https://platform.hortorgames.com', 'Test': 'https://platform-test.hortorgames.com' }, 'URLS': { 'Info': '/customer/api/v1/gs/info' } };class _pqtw {
    ['init'](rl6h4f) {
      console['log']('[VIP] hortorVip init', rl6h4f), this['_showIcon'] = !0x1 !== rl6h4f['defShowIcon'], this['_log'] = new rh0bd(), this['_init'](rl6h4f), this['_loadVipData']();
    }['showIcon']() {
      this['_showIcon'] = !0x0, this['visible'] = !0x0, this['_initEntryIcon'](), this['_log']['post'](ktp1['iconShow']);
    }['hideIcon']() {
      this['_showIcon'] = !0x1, this['_removeIcon']();
    }['refreshData']($8iam) {
      this['_init']($8iam), this['_removeIcon'](), this['_loadVipData']();
    }['_init'](ce2u) {
      ce2u && (this['_conf'] = Object['assign'](this['_conf'] || {}, ce2u), this['_host'] = uq5v2['HOST'][this['_conf']['env']], this['_log']['init']({ 'gameId': this['_conf']['vipGameId'], 'userId': this['_conf']['userId'] || this['_conf']['openId'], 'host': this['_host'] }));
    }['_loadVipData']() {
      console['log']('[VIP] _loadVipData');let k$s1o = (lhf09, s7io$) => {
        console['log']('[VIP] _loadVipData loaded', lhf09, s7io$), 'function' == typeof this['_conf']['onLoad'] && this['_conf']['onLoad'](lhf09, s7io$);
      };var o1gy = '' + this['_host'] + uq5v2['URLS']['Info'] + '?gameId=' + this['_conf']['vipGameId'] + '&userId=' + this['_conf']['userId'];let pg5_wt = new Laya['HttpRequest']();pg5_wt['once'](Laya['Event']['COMPLETE'], this, u_3wq5 => {
        this['_vipData'] = JSON['parse'](u_3wq5), this['_vipData']['meta'] && this['_vipData']['meta']['errCode'] ? k$s1o(this['_vipData']['meta']) : (this['_log']['init']({ 'gs': this['_vipData']['gs'], 'openType': this['_vipData']['disabledAutoOpenQrcode'] ? eq2uv['click'] : eq2uv['auto'] }), k$s1o(null, this['_vipData']), this['_showIcon'] && this['showIcon']());
      }), pg5_wt['once'](Laya['Event']['ERROR'], this, f6lr4h => {
        k$s1o(f6lr4h);
      }), pg5_wt['send'](o1gy, null, 'get', 'text');
    }['_initEntryIcon']() {
      return this['_icon'] ? console['log']('[VIP] 不能重复实例化 icon') : this['_vipData'] && this['_vipData']['gameGsConf'] ? this['_vipData']['disabled'] ? console['log']('[VIP] Disabled') : (this['_vipData']['gameGsConf']['useCross'] = this['_crossSDK'] && !this['_vipData']['gameGsConf']['gsAddType'], this['_vipData']['useQRCode'] = this['_vipData']['gs'] && !this['_vipData']['gameGsConf']['gsAddType'], this['_vipData']['useCopy'] = this['_vipData']['gs'] && 0x1 == this['_vipData']['gameGsConf']['gsAddType'], Object['assign'](this['_vipData']['gameGsConf']['icon'], this['_conf']['icon'] || {}), this['_icon'] = new $mx8(this['_vipData']), this['_icon']['onClick'](this['_onEntryIconClick']['bind'](this)), void this['_tryAutoOpen']()) : console['log']('[VIP] 无配置信息');
    }['_removeIcon']() {
      this['visible'] = !0x1, this['_icon'] && this['_icon']['close'] && (this['_icon']['close'](), this['_icon'] = null), this['_removePage']();
    }['_removePage']() {
      this['_page'] && (this['_page']['clear'](), this['_page'] = null);
    }['_tryAutoOpen']() {
      if (0x0 === this['_vipData']['isAuth'] && !this['_vipData']['disabledAutoOpenQrcode']) {
        if (!this['_vipData']['gs']) return console['log']('[VIP] 没有绑定客服');this['_vipData']['useCopy'] && this['_initPage'](eq2uv['auto']);
      }
    }['_onEntryIconClick']() {
      this['_initPage'](eq2uv['click']), this['_log']['post'](ktp1['iconClick']);
    }['_initPage'](e3ucv2) {
      console['log']('[VIP] _initPage'), this['_removePage'](), this['_page'] = new _gwp(this['_vipData'], this['_log'], e3ucv2, this['_conf']);
    }
  }class ijxza {
    constructor() {
      let fce46l = new _pqtw();fce46l['init']({ 'gameVersion': window['config']['game_ver'], 'vipGameId': window['config']['partner_game_id'], 'env': 'Prod', 'userId': window['G$NI']['userId'], 'icon': { 'posX': 0x64, 'posY': 0x226 }, 'defShowIcon': !!sdk_info['is_vipds'], 'onLoad': (e6cl4f, jzx) => {
          console['log']('vip data loaded---', e6cl4f, jzx);
        } });
    }
  }return window['XingJuBoxMain'] = ijxza, vel46['XingJuBoxMain'] = ijxza, vel46;
}({});