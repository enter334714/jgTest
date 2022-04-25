var m = wx.$g;
var gzjd26 = function (exports) {
  'use strict';
  class f3t4_ {
    constructor(ah5xib) {
      this['onClickEvent'] = () => {};if (!ah5xib || !ah5xib['gameGsConf'] || !ah5xib['gameGsConf']['icon']) {
        console['log']('[VIP] Icon init data null', ah5xib);return;
      }this['opt'] = ah5xib['gameGsConf']['icon'], Laya['loader']['load'](this['opt']['url'], Laya['Handler']['create'](this, this['addIcon']));
    }['addIcon']() {
      let ev7qc = Laya['loader']['getRes'](this['opt']['url']);this['icon'] = new Laya['Sprite'](), Laya['stage']['addChild'](this['icon']), this['icon']['pivot'](ev7qc['width'] / 0x2, ev7qc['height'] / 0x2);let ec7vg = this['opt']['x'] || this['opt']['posX'] || 0x0,
          l9cg8 = this['opt']['y'] || this['opt']['posY'] || 0x0;this['icon']['pos'](ec7vg === -0x1 ? Laya['stage']['width'] - ev7qc['width'] - 0xf : ec7vg, l9cg8 === -0x1 ? Laya['stage']['height'] / 0x2 : l9cg8), this['icon']['size'](ev7qc['width'], ev7qc['height']), this['icon']['graphics']['clear'](), this['icon']['graphics']['drawTexture'](ev7qc, 0x0, 0x0), this['bindDrag']();
    }['bindDrag']() {
      let w1xak = this['icon']['width'],
          pf40_t = this['icon']['height'],
          $m = new Laya['Rectangle'](w1xak / 0x2, pf40_t / 0x2, Laya['stage']['width'] - w1xak, Laya['stage']['height'] - pf40_t);this['icon']['on'](Laya['Event']['MOUSE_DOWN'], this, () => {
        this['icon']['startDrag']($m, !![], 0x64, 0x12c, null, !![]);
      }), this['icon']['on'](Laya['Event']['CLICK'], this, g98sc => {
        this['onClickEvent']();
      });
    }['onClick'](gl8sqc) {
      gl8sqc && typeof gl8sqc == 'function' && (this['onClickEvent'] = gl8sqc);
    }['close']() {
      this['icon']['visible'] = ![], this['icon']['destroy']();
    }
  }const x1ywk = { 'auto': 'AUTO', 'click': 'CLICK' },
        s9glc = { 'iconShow': 'ICON-SHOW', 'iconClick': 'ICON-CLICK', 'copyClick': 'WECHAT-COPY', 'btnClick': 'BUTTON-CLICK', 'pageClose': 'CONF-CLOSE', 'pageShow': 'CONF-SHOW', 'copySecretNum': 'SECRET-COPY' },
        ecq7g = '/customer/api/v1/gs/log';class h5ia1x {
    ['init'](v1wyk) {
      this['opt'] = Object['assign'](this['opt'] || {}, v1wyk);
    }['_jsonToQuery'](s9c8gl) {
      let hwa1 = {};for (let m6$jur in s9c8gl) {
        'undefined' !== typeof s9c8gl[m6$jur] && (hwa1[m6$jur] = s9c8gl[m6$jur]);
      }return JSON['stringify'](hwa1);
    }['post'](mr$j6u, b5hxia) {
      if (!this['opt'] || !this['opt']['host']) return;let vgcs7 = '' + this['opt']['host'] + ecq7g,
          qv7cg = this['_jsonToQuery']({ 'gameId': this['opt']['gameId'], 'userId': this['opt']['userId'], 'gs': this['opt']['gs'], 'alias': mr$j6u, 'gsWay': b5hxia || this['opt']['openType'] });console['log']('[VIP] post log', qv7cg);let qvye7g = new Laya['HttpRequest']();qvye7g['send'](vgcs7, qv7cg, 'post', null, ['Content-Type', 'application/json']);
    }
  }const vky1we = { 'bg': 0xb, 'avatar': 0xd, 'closer': 0xd, 'code': 0xe, 'cross': 0xf, 'account': 0x10, 'codeNum': 0x11, 'codeBtn': 0x12 };class qsl8c {
    constructor(p_t0fb, $uj6rm, bp0_5) {
      console['log']('[VIP] Page init', p_t0fb), this['config'] = p_t0fb, this['_log'] = $uj6rm, this['_openType'] = bp0_5, this['stageW'] = Laya['stage']['width'], this['stageH'] = Laya['stage']['height'], this['renderMask'](), this['renderBg'](() => {
        this['renderAvatar'](), this['renderClose'](), this['renderCode']();if (this['config']['useCopy']) this['renderWXAccount']();if (this['config']['gameGsConf']['secretary'] && this['config']['gameGsConf']['secretary']['number']) this['renderSecretaryNum']();this['_log'] && this['_log']['post'](s9glc['pageShow'], this['_openType']);
      });
    }['setRate'](w7veq) {
      this['rate'] = this['stageW'] / w7veq['width'];
    }['newNode'](q7vye) {
      q7vye = q7vye || Laya['stage'];let vcg7qe = new Laya['Sprite']();return q7vye['addChild'](vcg7qe), vcg7qe;
    }['setPos'](od2zr6, _f3o4t) {
      let z2r6o = this['rate'] || 0x1,
          p_4ft0 = _f3o4t['x'] || 0x0,
          wevqy7 = _f3o4t['y'] || 0x0,
          zr$j2 = od2zr6['width'] / 0x2,
          f5_bp0 = od2zr6['height'] / 0x2;p_4ft0 == -0x1 ? p_4ft0 = this['stageW'] / 0x2 : (zr$j2 = 0x0, p_4ft0 = p_4ft0 * z2r6o), wevqy7 == -0x1 ? wevqy7 = this['stageH'] / 0x2 : (wevqy7 = wevqy7 * z2r6o, f5_bp0 = 0x0), od2zr6['pivot'](zr$j2, f5_bp0), od2zr6['pos'](p_4ft0, wevqy7), od2zr6['zOrder'] = _f3o4t['z'] || 0x0;
    }['drawSprite'](i05a, g7vqc) {
      let o4dz23 = Laya['loader']['getRes'](g7vqc);if (!o4dz23) return;let hk1wey = this['rate'] || 0x1,
          vgey = hk1wey ? o4dz23['width'] * hk1wey : this['stageW'],
          _ib0p5 = hk1wey ? o4dz23['height'] * hk1wey : this['stageH'];i05a['size'](vgey, _ib0p5), i05a['graphics']['clear'](), i05a['graphics']['drawTexture'](o4dz23, 0x0, 0x0, vgey, _ib0p5);
    }['renderMask']() {
      let eykhw1 = this['config']['gameGsConf']['background'];this['mask'] = this['newNode'](), this['mask']['graphics']['drawRect'](0x0, 0x0, this['stageW'], this['stageH'], '#' + (eykhw1['color'] || 'aaaaaa'));
    }['renderBg'](hxbia) {
      let d4fo = this['config']['gameGsConf']['background'];this['bg'] = this['newNode'](), Laya['loader']['load'](d4fo['url'], Laya['Handler']['create'](this, () => {
        this['setRate'](Laya['loader']['getRes'](d4fo['url'])), this['drawSprite'](this['bg'], d4fo['url']), this['setPos'](this['bg'], { 'x': 0x0, 'y': 0x0, 'z': vky1we['bg'] }), hxbia && hxbia();
      }));
    }['renderAvatar']() {
      let p_tb0 = this['config']['gameGsConf']['gsAvatar'];this['avatar'] = this['newNode'](this['bg']), Laya['loader']['load'](p_tb0['url'], Laya['Handler']['create'](this, () => {
        this['drawSprite'](this['avatar'], p_tb0['url']), this['setPos'](this['avatar'], { 'x': p_tb0['posX'], 'y': p_tb0['posY'], 'z': vky1we['avatar'] });
      }));
    }['renderClose']() {
      let gc7e = this['config']['gameGsConf']['closeBtn'];this['closer'] = this['newNode'](this['bg']), Laya['loader']['load'](gc7e['url'], Laya['Handler']['create'](this, () => {
        this['drawSprite'](this['closer'], gc7e['url']), this['setPos'](this['closer'], { 'x': gc7e['posX'], 'y': gc7e['posY'], 'z': vky1we['closer'] }), this['closer']['on'](Laya['Event']['CLICK'], this, this['close']);
      }));
    }['renderCode']() {
      let ihx = this['config']['gameGsConf']['qrCodeBtn'];this['code'] = this['newNode'](this['bg']), Laya['loader']['load'](ihx['url'], Laya['Handler']['create'](this, () => {
        this['drawSprite'](this['code'], ihx['url']), this['setPos'](this['code'], { 'x': ihx['posX'], 'y': ihx['posY'], 'z': vky1we['code'] }), this['code']['on'](Laya['Event']['CLICK'], this, this['onBtnClick']);
      }));
    }['renderWXAccount']() {
      let _0i5b = this['config']['wxAccount'] || '',
          ls8c = this['config']['gameGsConf']['copyAccount'];var sclg9 = new Laya['Text']();sclg9['text'] = (ls8c['title'] || '') + _0i5b, sclg9['fontSize'] = ls8c['size'] || 0x20, sclg9['align'] = ls8c['textAlign'] || 'center', sclg9['color'] = ls8c['color'] || '#ffffff', this['setPos'](sclg9, { 'x': ls8c['posX'], 'y': ls8c['posY'], 'z': vky1we['account'] }), this['bg']['addChild'](sclg9);
    }['close']() {
      this['clear'](), this['_log'] && this['_log']['post'](s9glc['pageClose'], this['_openType']);
    }['clear']() {
      this['mask']['destroy'](), this['bg']['destroy']();
    }['onBtnClick']() {
      this['_log'] && this['_log']['post'](s9glc['btnClick'], this['_openType']);if (!this['config']['gs']) {
        let akxh1i = this['config']['gameGsConf']['gsMsg'] || '没有达到开通条件';wx && wx['showModal'] && wx['showModal']({ 'content': akxh1i, 'showCancel': ![] });return;
      }if (this['config']['useCopy']) {
        this['onCopy'](this['config']);return;
      }console['warn']('此VIP模块仅支持复制功能\uFF01');
    }['renderSecretaryNum']() {
      const rj62zd = this['config']['gameGsConf']['secretary'] || {};let f_b50 = this['config']['gameGsConf']['exclusiveNumInfo'];const cqs8 = rj62zd['number'];if (!cqs8) return;var tf_3o = new Laya['Text']();tf_3o['text'] = f_b50['title'] + cqs8, tf_3o['fontSize'] = 0x20, tf_3o['horizontalAlign'] = 'center'['toUpperCase'](), tf_3o['color'] = f_b50['color'] || '#FFFFFF', this['setPos'](tf_3o, { 'x': f_b50['posX'], 'y': f_b50['posY'], 'z': vky1we['codeNum'] }), this['bg']['addChild'](tf_3o), this['renderSecretBtn']();
    }['renderSecretBtn']() {
      let _5f0bp = this['config']['gameGsConf']['exclusiveNumBtn'];this['exclusiveBtn'] = this['newNode'](this['bg']), Laya['loader']['load'](_5f0bp['url'], Laya['Handler']['create'](this, () => {
        this['drawSprite'](this['exclusiveBtn'], _5f0bp['url']), this['setPos'](this['exclusiveBtn'], { 'x': _5f0bp['posX'], 'y': _5f0bp['posY'], 'z': vky1we['codeBtn'] }), this['exclusiveBtn']['on'](Laya['Event']['CLICK'], this, this['clickSercretBtn']);
      }));
    }['clickSercretBtn']() {
      const vykwe1 = this['config']['gameGsConf']['secretary'] || {},
            _fb0t = vykwe1['number'];if (!_fb0t) return;wx && wx['setClipboardData'] && (wx['setClipboardData']({ 'data': _fb0t }), this['_log'] && this['_log']['post'](s9glc['number'], this['_openType']));
    }['onCopy'](zrj6$) {
      wx && wx['setClipboardData'] && zrj6$ && zrj6$['wxAccount'] && (wx['setClipboardData']({ 'data': zrj6$['wxAccount'] }), this['_log'] && this['_log']['post'](s9glc['copySecretNum'], this['_openType']));
    }
  }const a5xib = { 'HOST': { 'Prod': 'https://platform.hortorgames.com', 'Test': 'https://platform-test.hortorgames.com' }, 'URLS': { 'Info': '/customer/api/v1/gs/info' } };class z6djr {
    ['init'](d623oz) {
      console['log']('[VIP] hortorVip init', d623oz), this['_showIcon'] = d623oz['defShowIcon'] !== ![], this['_log'] = new h5ia1x(), this['_init'](d623oz), this['_loadVipData']();
    }['showIcon']() {
      this['_showIcon'] = !![], this['visible'] = !![], this['_initEntryIcon'](), this['_log']['post'](s9glc['iconShow']);
    }['hideIcon']() {
      this['_showIcon'] = ![], this['_removeIcon']();
    }['refreshData'](t43_of) {
      this['_init'](t43_of), this['_removeIcon'](), this['_loadVipData']();
    }['_init'](xaih51) {
      if (!xaih51) return;this['_conf'] = Object['assign'](this['_conf'] || {}, xaih51), this['_host'] = a5xib['HOST'][this['_conf']['env']], this['_log']['init']({ 'gameId': this['_conf']['vipGameId'], 'userId': this['_conf']['userId'] || this['_conf']['openId'], 'host': this['_host'] });
    }['_loadVipData']() {
      console['log']('[VIP] _loadVipData');let bixh5a = (cq8, _05ibp) => {
        console['log']('[VIP] _loadVipData loaded', cq8, _05ibp), typeof this['_conf']['onLoad'] === 'function' && this['_conf']['onLoad'](cq8, _05ibp);
      },
          o2dr6z = '' + this['_host'] + a5xib['URLS']['Info'] + '?gameId=' + this['_conf']['vipGameId'] + '&userId=' + this['_conf']['userId'],
          apibx = new Laya['HttpRequest']();apibx['once'](Laya['Event']['COMPLETE'], this, yhwe => {
        this['_vipData'] = JSON['parse'](yhwe);if (this['_vipData']['meta'] && this['_vipData']['meta']['errCode']) {
          bixh5a(this['_vipData']['meta']);return;
        }this['_log']['init']({ 'gs': this['_vipData']['gs'], 'openType': this['_vipData']['disabledAutoOpenQrcode'] ? x1ywk['click'] : x1ywk['auto'] }), bixh5a(null, this['_vipData']), this['_showIcon'] && this['showIcon']();
      }), apibx['once'](Laya['Event']['ERROR'], this, ykvew1 => {
        bixh5a(ykvew1);
      }), apibx['send'](o2dr6z, null, 'get', 'text');
    }['_initEntryIcon']() {
      if (this['_icon']) return console['log']('[VIP] 不能重复实例化 icon');if (!this['_vipData'] || !this['_vipData']['gameGsConf']) return console['log']('[VIP] 无配置信息');if (this['_vipData']['disabled']) return console['log']('[VIP] Disabled');this['_vipData']['gameGsConf']['useCross'] = this['_crossSDK'] && !this['_vipData']['gameGsConf']['gsAddType'], this['_vipData']['useQRCode'] = this['_vipData']['gs'] && !this['_vipData']['gameGsConf']['gsAddType'], this['_vipData']['useCopy'] = this['_vipData']['gs'] && this['_vipData']['gameGsConf']['gsAddType'] == 0x1, Object['assign'](this['_vipData']['gameGsConf']['icon'], this['_conf']['icon'] || {}), this['_icon'] = new f3t4_(this['_vipData']), this['_icon']['onClick'](this['_onEntryIconClick']['bind'](this)), this['_tryAutoOpen']();
    }['_removeIcon']() {
      this['visible'] = ![], this['_icon'] && this['_icon']['close'] && (this['_icon']['close'](), this['_icon'] = null), this['_removePage']();
    }['_removePage']() {
      this['_page'] && (this['_page']['clear'](), this['_page'] = null);
    }['_tryAutoOpen']() {
      if (this['_vipData']['isAuth'] === 0x0 && !this['_vipData']['disabledAutoOpenQrcode']) {
        if (!this['_vipData']['gs']) return console['log']('[VIP] 没有绑定客服');this['_vipData']['useCopy'] && this['_initPage'](x1ywk['auto']);
      }
    }['_onEntryIconClick']() {
      this['_initPage'](x1ywk['click']), this['_log']['post'](s9glc['iconClick']);
    }['_initPage'](f05_b) {
      console['log']('[VIP] _initPage'), this['_removePage'](), this['_page'] = new qsl8c(this['_vipData'], this['_log'], f05_b, this['_conf']);
    }
  }class vwq7y {
    constructor() {
      let p0ba5 = new z6djr();p0ba5['init']({ 'gameVersion': window['config']['game_ver'], 'vipGameId': window['config']['partner_game_id'], 'env': 'Prod', 'userId': G$3J['openid'], 'icon': { 'posX': 0x64, 'posY': 0x226 }, 'defShowIcon': !!sdkInitRes['is_vipds'], 'onLoad': (ro62d, rz$62j) => {
          console['log']('vip data loaded---', ro62d, rz$62j);
        } });
    }
  }return window['XingJuBoxMain'] = vwq7y, exports['XingJuBoxMain'] = vwq7y, exports;
}({});