var m = wx.$g;
var gmju$r6 = function (exports) {
  'use strict';

  class u6$mj {
    constructor(gcs9l) {
      this['onClickEvent'] = () => {};if (!gcs9l || !gcs9l['gameGsConf'] || !gcs9l['gameGsConf']['icon']) {
        console['log']('[VIP] Icon init data null', gcs9l);return;
      }this['opt'] = gcs9l['gameGsConf']['icon'], Laya['loader']['load'](this['opt']['url'], Laya['Handler']['create'](this, this['addIcon']));
    }['addIcon']() {
      let r6z2jd = Laya['loader']['getRes'](this['opt']['url']);this['icon'] = new Laya['Sprite'](), Laya['stage']['addChild'](this['icon']), this['icon']['pivot'](r6z2jd['width'] / 0x2, r6z2jd['height'] / 0x2);let $u62 = this['opt']['x'] || this['opt']['posX'] || 0x0,
          fbt0p_ = this['opt']['y'] || this['opt']['posY'] || 0x0;this['icon']['pos']($u62 === -0x1 ? Laya['stage']['width'] - r6z2jd['width'] - 0xf : $u62, fbt0p_ === -0x1 ? Laya['stage']['height'] / 0x2 : fbt0p_), this['icon']['size'](r6z2jd['width'], r6z2jd['height']), this['icon']['graphics']['clear'](), this['icon']['graphics']['drawTexture'](r6z2jd, 0x0, 0x0), this['bindDrag']();
    }['bindDrag']() {
      let u6j = this['icon']['width'],
          axpi5 = this['icon']['height'],
          dzo6r2 = new Laya['Rectangle'](u6j / 0x2, axpi5 / 0x2, Laya['stage']['width'] - u6j, Laya['stage']['height'] - axpi5);this['icon']['on'](Laya['Event']['MOUSE_DOWN'], this, () => {
        this['icon']['startDrag'](dzo6r2, !![], 0x64, 0x12c, null, !![]);
      }), this['icon']['on'](Laya['Event']['CLICK'], this, hixa5 => {
        this['onClickEvent']();
      });
    }['onClick'](j62zrd) {
      j62zrd && typeof j62zrd == 'function' && (this['onClickEvent'] = j62zrd);
    }['close']() {
      this['icon']['visible'] = ![], this['icon']['destroy']();
    }
  }const axihb = { 'auto': 'AUTO', 'click': 'CLICK' },
        sg9c = { 'iconShow': 'ICON-SHOW', 'iconClick': 'ICON-CLICK', 'copyClick': 'WECHAT-COPY', 'btnClick': 'BUTTON-CLICK', 'pageClose': 'CONF-CLOSE', 'pageShow': 'CONF-SHOW', 'copySecretNum': 'SECRET-COPY' },
        z4odt3 = '/customer/api/v1/gs/log';class kixa1h {
    ['init'](t4_3fo) {
      this['opt'] = Object['assign'](this['opt'] || {}, t4_3fo);
    }['_jsonToQuery'](ia1h5x) {
      let dr2z = {};for (let wv7eyk in ia1h5x) {
        'undefined' !== typeof ia1h5x[wv7eyk] && (dr2z[wv7eyk] = ia1h5x[wv7eyk]);
      }return JSON['stringify'](dr2z);
    }['post'](hxba, gce7v) {
      if (!this['opt'] || !this['opt']['host']) return;let xhk1wy = '' + this['opt']['host'] + z4odt3,
          gcq8s = this['_jsonToQuery']({ 'gameId': this['opt']['gameId'], 'userId': this['opt']['userId'], 'gs': this['opt']['gs'], 'alias': hxba, 'gsWay': gce7v || this['opt']['openType'] });console['log']('[VIP] post log', gcq8s);let h1iaxk = new Laya['HttpRequest']();h1iaxk['send'](xhk1wy, gcq8s, 'post', null, ['Content-Type', 'application/json']);
    }
  }const c9ls = { 'bg': 0xb, 'avatar': 0xd, 'closer': 0xd, 'code': 0xe, 'cross': 0xf, 'account': 0x10, 'codeNum': 0x11, 'codeBtn': 0x12 };class tpf0_ {
    constructor(p_ft40, gs8c, zdo4t) {
      console['log']('[VIP] Page init', p_ft40), this['config'] = p_ft40, this['_log'] = gs8c, this['_openType'] = zdo4t, this['stageW'] = Laya['stage']['width'], this['stageH'] = Laya['stage']['height'], this['renderMask'](), this['renderBg'](() => {
        this['renderAvatar'](), this['renderClose'](), this['renderCode']();if (this['config']['useCopy']) this['renderWXAccount']();if (this['config']['gameGsConf']['secretary'] && this['config']['gameGsConf']['secretary']['number']) this['renderSecretaryNum']();this['_log'] && this['_log']['post'](sg9c['pageShow'], this['_openType']);
      });
    }['setRate'](c7qvgs) {
      this['rate'] = this['stageW'] / c7qvgs['width'];
    }['newNode'](vqc7g) {
      vqc7g = vqc7g || Laya['stage'];let do24z3 = new Laya['Sprite']();return vqc7g['addChild'](do24z3), do24z3;
    }['setPos'](vge7, p0iab) {
      let x5i1 = this['rate'] || 0x1,
          vqe7wy = p0iab['x'] || 0x0,
          um$j6r = p0iab['y'] || 0x0,
          vsq = vge7['width'] / 0x2,
          ywkve7 = vge7['height'] / 0x2;vqe7wy == -0x1 ? vqe7wy = this['stageW'] / 0x2 : (vsq = 0x0, vqe7wy = vqe7wy * x5i1), um$j6r == -0x1 ? um$j6r = this['stageH'] / 0x2 : (um$j6r = um$j6r * x5i1, ywkve7 = 0x0), vge7['pivot'](vsq, ywkve7), vge7['pos'](vqe7wy, um$j6r), vge7['zOrder'] = p0iab['z'] || 0x0;
    }['drawSprite'](w1yxk, _05ibp) {
      let gyvqe7 = Laya['loader']['getRes'](_05ibp);if (!gyvqe7) return;let r6o = this['rate'] || 0x1,
          hkew1y = r6o ? gyvqe7['width'] * r6o : this['stageW'],
          qv7gec = r6o ? gyvqe7['height'] * r6o : this['stageH'];w1yxk['size'](hkew1y, qv7gec), w1yxk['graphics']['clear'](), w1yxk['graphics']['drawTexture'](gyvqe7, 0x0, 0x0, hkew1y, qv7gec);
    }['renderMask']() {
      let u$rj = this['config']['gameGsConf']['background'];this['mask'] = this['newNode'](), this['mask']['graphics']['drawRect'](0x0, 0x0, this['stageW'], this['stageH'], '#' + (u$rj['color'] || 'aaaaaa'));
    }['renderBg'](_fb0tp) {
      let hxik1a = this['config']['gameGsConf']['background'];this['bg'] = this['newNode'](), Laya['loader']['load'](hxik1a['url'], Laya['Handler']['create'](this, () => {
        this['setRate'](Laya['loader']['getRes'](hxik1a['url'])), this['drawSprite'](this['bg'], hxik1a['url']), this['setPos'](this['bg'], { 'x': 0x0, 'y': 0x0, 'z': c9ls['bg'] }), _fb0tp && _fb0tp();
      }));
    }['renderAvatar']() {
      let khe1w = this['config']['gameGsConf']['gsAvatar'];this['avatar'] = this['newNode'](this['bg']), Laya['loader']['load'](khe1w['url'], Laya['Handler']['create'](this, () => {
        this['drawSprite'](this['avatar'], khe1w['url']), this['setPos'](this['avatar'], { 'x': khe1w['posX'], 'y': khe1w['posY'], 'z': c9ls['avatar'] });
      }));
    }['renderClose']() {
      let veyw1k = this['config']['gameGsConf']['closeBtn'];this['closer'] = this['newNode'](this['bg']), Laya['loader']['load'](veyw1k['url'], Laya['Handler']['create'](this, () => {
        this['drawSprite'](this['closer'], veyw1k['url']), this['setPos'](this['closer'], { 'x': veyw1k['posX'], 'y': veyw1k['posY'], 'z': c9ls['closer'] }), this['closer']['on'](Laya['Event']['CLICK'], this, this['close']);
      }));
    }['renderCode']() {
      let r62zjd = this['config']['gameGsConf']['qrCodeBtn'];this['code'] = this['newNode'](this['bg']), Laya['loader']['load'](r62zjd['url'], Laya['Handler']['create'](this, () => {
        this['drawSprite'](this['code'], r62zjd['url']), this['setPos'](this['code'], { 'x': r62zjd['posX'], 'y': r62zjd['posY'], 'z': c9ls['code'] }), this['code']['on'](Laya['Event']['CLICK'], this, this['onBtnClick']);
      }));
    }['renderWXAccount']() {
      let ib0 = this['config']['wxAccount'] || '',
          iax1 = this['config']['gameGsConf']['copyAccount'];var v7kew = new Laya['Text']();v7kew['text'] = (iax1['title'] || '') + ib0, v7kew['fontSize'] = iax1['size'] || 0x20, v7kew['align'] = iax1['textAlign'] || 'center', v7kew['color'] = iax1['color'] || '#ffffff', this['setPos'](v7kew, { 'x': iax1['posX'], 'y': iax1['posY'], 'z': c9ls['account'] }), this['bg']['addChild'](v7kew);
    }['close']() {
      this['clear'](), this['_log'] && this['_log']['post'](sg9c['pageClose'], this['_openType']);
    }['clear']() {
      this['mask']['destroy'](), this['bg']['destroy']();
    }['onBtnClick']() {
      this['_log'] && this['_log']['post'](sg9c['btnClick'], this['_openType']);if (!this['config']['gs']) {
        let khe1wy = this['config']['gameGsConf']['gsMsg'] || '没有达到开通条件';wx && wx['showModal'] && wx['showModal']({ 'content': khe1wy, 'showCancel': ![] });return;
      }if (this['config']['useCopy']) {
        this['onCopy'](this['config']);return;
      }console['warn']('此VIP模块仅支持复制功能\uFF01');
    }['renderSecretaryNum']() {
      const dzro62 = this['config']['gameGsConf']['secretary'] || {};let t30f_ = this['config']['gameGsConf']['exclusiveNumInfo'];const ewy7kv = dzro62['number'];if (!ewy7kv) return;var $j6ru2 = new Laya['Text']();$j6ru2['text'] = t30f_['title'] + ewy7kv, $j6ru2['fontSize'] = 0x20, $j6ru2['horizontalAlign'] = 'center'['toUpperCase'](), $j6ru2['color'] = t30f_['color'] || '#FFFFFF', this['setPos']($j6ru2, { 'x': t30f_['posX'], 'y': t30f_['posY'], 'z': c9ls['codeNum'] }), this['bg']['addChild']($j6ru2), this['renderSecretBtn']();
    }['renderSecretBtn']() {
      let z23do6 = this['config']['gameGsConf']['exclusiveNumBtn'];this['exclusiveBtn'] = this['newNode'](this['bg']), Laya['loader']['load'](z23do6['url'], Laya['Handler']['create'](this, () => {
        this['drawSprite'](this['exclusiveBtn'], z23do6['url']), this['setPos'](this['exclusiveBtn'], { 'x': z23do6['posX'], 'y': z23do6['posY'], 'z': c9ls['codeBtn'] }), this['exclusiveBtn']['on'](Laya['Event']['CLICK'], this, this['clickSercretBtn']);
      }));
    }['clickSercretBtn']() {
      const lq8gc = this['config']['gameGsConf']['secretary'] || {},
            oft_3 = lq8gc['number'];if (!oft_3) return;wx && wx['setClipboardData'] && (wx['setClipboardData']({ 'data': oft_3 }), this['_log'] && this['_log']['post'](sg9c['number'], this['_openType']));
    }['onCopy'](dz) {
      wx && wx['setClipboardData'] && dz && dz['wxAccount'] && (wx['setClipboardData']({ 'data': dz['wxAccount'] }), this['_log'] && this['_log']['post'](sg9c['copySecretNum'], this['_openType']));
    }
  }const zd2r6j = { 'HOST': { 'Prod': 'https://platform.hortorgames.com', 'Test': 'https://platform-test.hortorgames.com' }, 'URLS': { 'Info': '/customer/api/v1/gs/info' } };class q7vcsg {
    ['init'](dz623) {
      console['log']('[VIP] hortorVip init', dz623), this['_showIcon'] = dz623['defShowIcon'] !== ![], this['_log'] = new kixa1h(), this['_init'](dz623), this['_loadVipData']();
    }['showIcon']() {
      this['_showIcon'] = !![], this['visible'] = !![], this['_initEntryIcon'](), this['_log']['post'](sg9c['iconShow']);
    }['hideIcon']() {
      this['_showIcon'] = ![], this['_removeIcon']();
    }['refreshData'](sq7cvg) {
      this['_init'](sq7cvg), this['_removeIcon'](), this['_loadVipData']();
    }['_init'](eh1kwy) {
      if (!eh1kwy) return;this['_conf'] = Object['assign'](this['_conf'] || {}, eh1kwy), this['_host'] = zd2r6j['HOST'][this['_conf']['env']], this['_log']['init']({ 'gameId': this['_conf']['vipGameId'], 'userId': this['_conf']['userId'] || this['_conf']['openId'], 'host': this['_host'] });
    }['_loadVipData']() {
      console['log']('[VIP] _loadVipData');let hb5ai = (dt34of, scgql) => {
        console['log']('[VIP] _loadVipData loaded', dt34of, scgql), typeof this['_conf']['onLoad'] === 'function' && this['_conf']['onLoad'](dt34of, scgql);
      },
          ft4_p = '' + this['_host'] + zd2r6j['URLS']['Info'] + '?gameId=' + this['_conf']['vipGameId'] + '&userId=' + this['_conf']['userId'],
          ye7wv = new Laya['HttpRequest']();ye7wv['once'](Laya['Event']['COMPLETE'], this, ai0pb => {
        this['_vipData'] = JSON['parse'](ai0pb);if (this['_vipData']['meta'] && this['_vipData']['meta']['errCode']) {
          hb5ai(this['_vipData']['meta']);return;
        }this['_log']['init']({ 'gs': this['_vipData']['gs'], 'openType': this['_vipData']['disabledAutoOpenQrcode'] ? axihb['click'] : axihb['auto'] }), hb5ai(null, this['_vipData']), this['_showIcon'] && this['showIcon']();
      }), ye7wv['once'](Laya['Event']['ERROR'], this, fdt34 => {
        hb5ai(fdt34);
      }), ye7wv['send'](ft4_p, null, 'get', 'text');
    }['_initEntryIcon']() {
      if (this['_icon']) return console['log']('[VIP] 不能重复实例化 icon');if (!this['_vipData'] || !this['_vipData']['gameGsConf']) return console['log']('[VIP] 无配置信息');if (this['_vipData']['disabled']) return console['log']('[VIP] Disabled');this['_vipData']['gameGsConf']['useCross'] = this['_crossSDK'] && !this['_vipData']['gameGsConf']['gsAddType'], this['_vipData']['useQRCode'] = this['_vipData']['gs'] && !this['_vipData']['gameGsConf']['gsAddType'], this['_vipData']['useCopy'] = this['_vipData']['gs'] && this['_vipData']['gameGsConf']['gsAddType'] == 0x1, Object['assign'](this['_vipData']['gameGsConf']['icon'], this['_conf']['icon'] || {}), this['_icon'] = new u6$mj(this['_vipData']), this['_icon']['onClick'](this['_onEntryIconClick']['bind'](this)), this['_tryAutoOpen']();
    }['_removeIcon']() {
      this['visible'] = ![], this['_icon'] && this['_icon']['close'] && (this['_icon']['close'](), this['_icon'] = null), this['_removePage']();
    }['_removePage']() {
      this['_page'] && (this['_page']['clear'](), this['_page'] = null);
    }['_tryAutoOpen']() {
      if (this['_vipData']['isAuth'] === 0x0 && !this['_vipData']['disabledAutoOpenQrcode']) {
        if (!this['_vipData']['gs']) return console['log']('[VIP] 没有绑定客服');this['_vipData']['useCopy'] && this['_initPage'](axihb['auto']);
      }
    }['_onEntryIconClick']() {
      this['_initPage'](axihb['click']), this['_log']['post'](sg9c['iconClick']);
    }['_initPage'](s8q7c) {
      console['log']('[VIP] _initPage'), this['_removePage'](), this['_page'] = new tpf0_(this['_vipData'], this['_log'], s8q7c, this['_conf']);
    }
  }class qv7gey {
    constructor() {
      let pbf_0 = new q7vcsg();pbf_0['init']({ 'gameVersion': window['config']['game_ver'], 'vipGameId': window['config']['partner_game_id'], 'env': 'Prod', 'userId': G$3J['openid'], 'icon': { 'posX': 0x64, 'posY': 0x226 }, 'defShowIcon': !!sdk_info['is_vipds'], 'onLoad': (xaih5b, td4o3z) => {
          console['log']('vip data loaded---', xaih5b, td4o3z);
        } });
    }
  }return window['XingJuBoxMain'] = qv7gey, exports['XingJuBoxMain'] = qv7gey, exports;
}({});