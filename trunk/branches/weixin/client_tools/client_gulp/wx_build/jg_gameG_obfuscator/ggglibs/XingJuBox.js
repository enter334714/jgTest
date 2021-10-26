var m = wx.$g;
var gh$wfl6 = function (exports) {
  'use strict';

  class q3esg {
    constructor(kt8_97) {
      this['onClickEvent'] = () => {};if (!kt8_97 || !kt8_97['gameGsConf'] || !kt8_97['gameGsConf']['icon']) {
        console['log']('[VIP] Icon init data null', kt8_97);return;
      }this['opt'] = kt8_97['gameGsConf']['icon'], Laya['loader']['load'](this['opt']['url'], Laya['Handler']['create'](this, this['addIcon']));
    }['addIcon']() {
      let mzfh6w = Laya['loader']['getRes'](this['opt']['url']);this['icon'] = new Laya['Sprite'](), Laya['stage']['addChild'](this['icon']), this['icon']['pivot'](mzfh6w['width'] / 0x2, mzfh6w['height'] / 0x2);let l6fwh = this['opt']['x'] || this['opt']['posX'] || 0x0,
          eolg$f = this['opt']['y'] || this['opt']['posY'] || 0x0;this['icon']['pos'](l6fwh === -0x1 ? Laya['stage']['width'] - mzfh6w['width'] - 0xf : l6fwh, eolg$f === -0x1 ? Laya['stage']['height'] / 0x2 : eolg$f), this['icon']['size'](mzfh6w['width'], mzfh6w['height']), this['icon']['graphics']['clear'](), this['icon']['graphics']['drawTexture'](mzfh6w, 0x0, 0x0), this['bindDrag']();
    }['bindDrag']() {
      let f$loge = this['icon']['width'],
          x2cy = this['icon']['height'],
          r_k8tb = new Laya['Rectangle'](f$loge / 0x2, x2cy / 0x2, Laya['stage']['width'] - f$loge, Laya['stage']['height'] - x2cy);this['icon']['on'](Laya['Event']['MOUSE_DOWN'], this, () => {
        this['icon']['startDrag'](r_k8tb, !![], 0x64, 0x12c, null, !![]);
      }), this['icon']['on'](Laya['Event']['CLICK'], this, qeg3s5 => {
        this['onClickEvent']();
      });
    }['onClick'](g$fole) {
      g$fole && typeof g$fole == 'function' && (this['onClickEvent'] = g$fole);
    }['close']() {
      this['icon']['visible'] = ![], this['icon']['destroy']();
    }
  }const f$6h = { 'auto': 'AUTO', 'click': 'CLICK' },
        rvt1bp = { 'iconShow': 'ICON-SHOW', 'iconClick': 'ICON-CLICK', 'copyClick': 'WECHAT-COPY', 'btnClick': 'BUTTON-CLICK', 'pageClose': 'CONF-CLOSE', 'pageShow': 'CONF-SHOW', 'copySecretNum': 'SECRET-COPY' },
        leqgo = '/customer/api/v1/gs/log';class og53eq {
    ['init'](gqs5e) {
      this['opt'] = Object['assign'](this['opt'] || {}, gqs5e);
    }['_jsonToQuery'](p1bt) {
      let t_987 = {};for (let y7_9d in p1bt) {
        'undefined' !== typeof p1bt[y7_9d] && (t_987[y7_9d] = p1bt[y7_9d]);
      }return JSON['stringify'](t_987);
    }['post'](cxs25, y29jd0) {
      if (!this['opt'] || !this['opt']['host']) return;let aib1p = '' + this['opt']['host'] + leqgo,
          zh6wmf = this['_jsonToQuery']({ 'gameId': this['opt']['gameId'], 'userId': this['opt']['userId'], 'gs': this['opt']['gs'], 'alias': cxs25, 'gsWay': y29jd0 || this['opt']['openType'] });console['log']('[VIP] post log', zh6wmf);let av1pbr = new Laya['HttpRequest']();av1pbr['send'](aib1p, zh6wmf, 'post', null, ['Content-Type', 'application/json']);
    }
  }const tk8_r = { 'bg': 0xb, 'avatar': 0xd, 'closer': 0xd, 'code': 0xe, 'cross': 0xf, 'account': 0x10, 'codeNum': 0x11, 'codeBtn': 0x12 };class e5s3gq {
    constructor(yd20j9, brva, g5sq3c) {
      console['log']('[VIP] Page init', yd20j9), this['config'] = yd20j9, this['_log'] = brva, this['_openType'] = g5sq3c, this['stageW'] = Laya['stage']['width'], this['stageH'] = Laya['stage']['height'], this['renderMask'](), this['renderBg'](() => {
        this['renderAvatar'](), this['renderClose'](), this['renderCode']();if (this['config']['useCopy']) this['renderWXAccount']();if (this['config']['gameGsConf']['secretary'] && this['config']['gameGsConf']['secretary']['number']) this['renderSecretaryNum']();this['_log'] && this['_log']['post'](rvt1bp['pageShow'], this['_openType']);
      });
    }['setRate'](_tr78k) {
      this['rate'] = this['stageW'] / _tr78k['width'];
    }['newNode'](_9kd7) {
      _9kd7 = _9kd7 || Laya['stage'];let flh$e = new Laya['Sprite']();return _9kd7['addChild'](flh$e), flh$e;
    }['setPos'](lg$fo, x02cy4) {
      let $loeh = this['rate'] || 0x1,
          hmz6fw = x02cy4['x'] || 0x0,
          b8_kr = x02cy4['y'] || 0x0,
          fh6mwz = lg$fo['width'] / 0x2,
          eq3s5 = lg$fo['height'] / 0x2;hmz6fw == -0x1 ? hmz6fw = this['stageW'] / 0x2 : (fh6mwz = 0x0, hmz6fw = hmz6fw * $loeh), b8_kr == -0x1 ? b8_kr = this['stageH'] / 0x2 : (b8_kr = b8_kr * $loeh, eq3s5 = 0x0), lg$fo['pivot'](fh6mwz, eq3s5), lg$fo['pos'](hmz6fw, b8_kr), lg$fo['zOrder'] = x02cy4['z'] || 0x0;
    }['drawSprite'](gcq5s3, yj97_) {
      let g3oq = Laya['loader']['getRes'](yj97_);if (!g3oq) return;let efglo = this['rate'] || 0x1,
          uwz6m = efglo ? g3oq['width'] * efglo : this['stageW'],
          sqc35 = efglo ? g3oq['height'] * efglo : this['stageH'];gcq5s3['size'](uwz6m, sqc35), gcq5s3['graphics']['clear'](), gcq5s3['graphics']['drawTexture'](g3oq, 0x0, 0x0, uwz6m, sqc35);
    }['renderMask']() {
      let y97j = this['config']['gameGsConf']['background'];this['mask'] = this['newNode'](), this['mask']['graphics']['drawRect'](0x0, 0x0, this['stageW'], this['stageH'], '#' + (y97j['color'] || 'aaaaaa'));
    }['renderBg'](scg53) {
      let whlf$ = this['config']['gameGsConf']['background'];this['bg'] = this['newNode'](), Laya['loader']['load'](whlf$['url'], Laya['Handler']['create'](this, () => {
        this['setRate'](Laya['loader']['getRes'](whlf$['url'])), this['drawSprite'](this['bg'], whlf$['url']), this['setPos'](this['bg'], { 'x': 0x0, 'y': 0x0, 'z': tk8_r['bg'] }), scg53 && scg53();
      }));
    }['renderAvatar']() {
      let wmh6zf = this['config']['gameGsConf']['gsAvatar'];this['avatar'] = this['newNode'](this['bg']), Laya['loader']['load'](wmh6zf['url'], Laya['Handler']['create'](this, () => {
        this['drawSprite'](this['avatar'], wmh6zf['url']), this['setPos'](this['avatar'], { 'x': wmh6zf['posX'], 'y': wmh6zf['posY'], 'z': tk8_r['avatar'] });
      }));
    }['renderClose']() {
      let g3eoql = this['config']['gameGsConf']['closeBtn'];this['closer'] = this['newNode'](this['bg']), Laya['loader']['load'](g3eoql['url'], Laya['Handler']['create'](this, () => {
        this['drawSprite'](this['closer'], g3eoql['url']), this['setPos'](this['closer'], { 'x': g3eoql['posX'], 'y': g3eoql['posY'], 'z': tk8_r['closer'] }), this['closer']['on'](Laya['Event']['CLICK'], this, this['close']);
      }));
    }['renderCode']() {
      let cqs3g = this['config']['gameGsConf']['qrCodeBtn'];this['code'] = this['newNode'](this['bg']), Laya['loader']['load'](cqs3g['url'], Laya['Handler']['create'](this, () => {
        this['drawSprite'](this['code'], cqs3g['url']), this['setPos'](this['code'], { 'x': cqs3g['posX'], 'y': cqs3g['posY'], 'z': tk8_r['code'] }), this['code']['on'](Laya['Event']['CLICK'], this, this['onBtnClick']);
      }));
    }['renderWXAccount']() {
      let hwf6 = this['config']['wxAccount'] || '',
          o$lgfe = this['config']['gameGsConf']['copyAccount'];var t8k9 = new Laya['Text']();t8k9['text'] = (o$lgfe['title'] || '') + hwf6, t8k9['fontSize'] = o$lgfe['size'] || 0x20, t8k9['align'] = o$lgfe['textAlign'] || 'center', t8k9['color'] = o$lgfe['color'] || '#ffffff', this['setPos'](t8k9, { 'x': o$lgfe['posX'], 'y': o$lgfe['posY'], 'z': tk8_r['account'] }), this['bg']['addChild'](t8k9);
    }['close']() {
      this['clear'](), this['_log'] && this['_log']['post'](rvt1bp['pageClose'], this['_openType']);
    }['clear']() {
      this['mask']['destroy'](), this['bg']['destroy']();
    }['onBtnClick']() {
      this['_log'] && this['_log']['post'](rvt1bp['btnClick'], this['_openType']);if (!this['config']['gs']) {
        let csx542 = this['config']['gameGsConf']['gsMsg'] || '没有达到开通条件';wx && wx['showModal'] && wx['showModal']({ 'content': csx542, 'showCancel': ![] });return;
      }if (this['config']['useCopy']) {
        this['onCopy'](this['config']);return;
      }console['warn']('此VIP模块仅支持复制功能\uFF01');
    }['renderSecretaryNum']() {
      const y4x0c = this['config']['gameGsConf']['secretary'] || {};let sx02 = this['config']['gameGsConf']['exclusiveNumInfo'];const kt9_ = y4x0c['number'];if (!kt9_) return;var e3glq = new Laya['Text']();e3glq['text'] = sx02['title'] + kt9_, e3glq['fontSize'] = 0x20, e3glq['horizontalAlign'] = 'center'['toUpperCase'](), e3glq['color'] = sx02['color'] || '#FFFFFF', this['setPos'](e3glq, { 'x': sx02['posX'], 'y': sx02['posY'], 'z': tk8_r['codeNum'] }), this['bg']['addChild'](e3glq), this['renderSecretBtn']();
    }['renderSecretBtn']() {
      let q3ges = this['config']['gameGsConf']['exclusiveNumBtn'];this['exclusiveBtn'] = this['newNode'](this['bg']), Laya['loader']['load'](q3ges['url'], Laya['Handler']['create'](this, () => {
        this['drawSprite'](this['exclusiveBtn'], q3ges['url']), this['setPos'](this['exclusiveBtn'], { 'x': q3ges['posX'], 'y': q3ges['posY'], 'z': tk8_r['codeBtn'] }), this['exclusiveBtn']['on'](Laya['Event']['CLICK'], this, this['clickSercretBtn']);
      }));
    }['clickSercretBtn']() {
      const $qlego = this['config']['gameGsConf']['secretary'] || {},
            xc42y = $qlego['number'];if (!xc42y) return;wx && wx['setClipboardData'] && (wx['setClipboardData']({ 'data': xc42y }), this['_log'] && this['_log']['post'](rvt1bp['number'], this['_openType']));
    }['onCopy'](q35gc) {
      wx && wx['setClipboardData'] && q35gc && q35gc['wxAccount'] && (wx['setClipboardData']({ 'data': q35gc['wxAccount'] }), this['_log'] && this['_log']['post'](rvt1bp['copySecretNum'], this['_openType']));
    }
  }const tp8br = { 'HOST': { 'Prod': 'https://platform.hortorgames.com', 'Test': 'https://platform-test.hortorgames.com' }, 'URLS': { 'Info': '/customer/api/v1/gs/info' } };class p1vrab {
    ['init'](fw$mh) {
      console['log']('[VIP] hortorVip init', fw$mh), this['_showIcon'] = fw$mh['defShowIcon'] !== ![], this['_log'] = new og53eq(), this['_init'](fw$mh), this['_loadVipData']();
    }['showIcon']() {
      this['_showIcon'] = !![], this['visible'] = !![], this['_initEntryIcon'](), this['_log']['post'](rvt1bp['iconShow']);
    }['hideIcon']() {
      this['_showIcon'] = ![], this['_removeIcon']();
    }['refreshData'](_9jd) {
      this['_init'](_9jd), this['_removeIcon'](), this['_loadVipData']();
    }['_init'](s4x52) {
      if (!s4x52) return;this['_conf'] = Object['assign'](this['_conf'] || {}, s4x52), this['_host'] = tp8br['HOST'][this['_conf']['env']], this['_log']['init']({ 'gameId': this['_conf']['vipGameId'], 'userId': this['_conf']['userId'] || this['_conf']['openId'], 'host': this['_host'] });
    }['_loadVipData']() {
      console['log']('[VIP] _loadVipData');let woh$l = (qcg, h$lfow) => {
        console['log']('[VIP] _loadVipData loaded', qcg, h$lfow), typeof this['_conf']['onLoad'] === 'function' && this['_conf']['onLoad'](qcg, h$lfow);
      },
          y7_9 = '' + this['_host'] + tp8br['URLS']['Info'] + '?gameId=' + this['_conf']['vipGameId'] + '&userId=' + this['_conf']['userId'],
          hfl6w$ = new Laya['HttpRequest']();hfl6w$['once'](Laya['Event']['COMPLETE'], this, q3gole => {
        this['_vipData'] = JSON['parse'](q3gole);if (this['_vipData']['meta'] && this['_vipData']['meta']['errCode']) {
          woh$l(this['_vipData']['meta']);return;
        }this['_log']['init']({ 'gs': this['_vipData']['gs'], 'openType': this['_vipData']['disabledAutoOpenQrcode'] ? f$6h['click'] : f$6h['auto'] }), woh$l(null, this['_vipData']), this['_showIcon'] && this['showIcon']();
      }), hfl6w$['once'](Laya['Event']['ERROR'], this, brkt => {
        woh$l(brkt);
      }), hfl6w$['send'](y7_9, null, 'get', 'text');
    }['_initEntryIcon']() {
      if (this['_icon']) return console['log']('[VIP] 不能重复实例化 icon');if (!this['_vipData'] || !this['_vipData']['gameGsConf']) return console['log']('[VIP] 无配置信息');if (this['_vipData']['disabled']) return console['log']('[VIP] Disabled');this['_vipData']['gameGsConf']['useCross'] = this['_crossSDK'] && !this['_vipData']['gameGsConf']['gsAddType'], this['_vipData']['useQRCode'] = this['_vipData']['gs'] && !this['_vipData']['gameGsConf']['gsAddType'], this['_vipData']['useCopy'] = this['_vipData']['gs'] && this['_vipData']['gameGsConf']['gsAddType'] == 0x1, Object['assign'](this['_vipData']['gameGsConf']['icon'], this['_conf']['icon'] || {}), this['_icon'] = new q3esg(this['_vipData']), this['_icon']['onClick'](this['_onEntryIconClick']['bind'](this)), this['_tryAutoOpen']();
    }['_removeIcon']() {
      this['visible'] = ![], this['_icon'] && this['_icon']['close'] && (this['_icon']['close'](), this['_icon'] = null), this['_removePage']();
    }['_removePage']() {
      this['_page'] && (this['_page']['clear'](), this['_page'] = null);
    }['_tryAutoOpen']() {
      if (this['_vipData']['isAuth'] === 0x0 && !this['_vipData']['disabledAutoOpenQrcode']) {
        if (!this['_vipData']['gs']) return console['log']('[VIP] 没有绑定客服');this['_vipData']['useCopy'] && this['_initPage'](f$6h['auto']);
      }
    }['_onEntryIconClick']() {
      this['_initPage'](f$6h['click']), this['_log']['post'](rvt1bp['iconClick']);
    }['_initPage'](e$flho) {
      console['log']('[VIP] _initPage'), this['_removePage'](), this['_page'] = new e5s3gq(this['_vipData'], this['_log'], e$flho, this['_conf']);
    }
  }class jx2y {
    constructor() {
      console.log("pfInfo:",window['PF_INFO']);
      let wl6fh$ = new p1vrab();wl6fh$['init']({ 'gameVersion': window['config']['game_ver'], 'vipGameId': window['config']['partner_game_id'], 'env': 'Prod','userId': window['G$S2']['userId'], 'icon': { 'posX': 0x64, 'posY': 0x226 }, 'defShowIcon': !!sdk_info['is_vipds'], 'onLoad': (gs53eq, c04x) => {
          console['log']('vip data loaded---', gs53eq, c04x);
        } });
    }
  }return window['XingJuBoxMain'] = jx2y, exports['XingJuBoxMain'] = jx2y, exports;
}({});