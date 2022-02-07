var wobduw = function () {
  'use strict';

  class r7_akj {
    constructor() {}
  }r7_akj['scale'] = 1.7, r7_akj['cdnHost'] = 'https://cdn.cxgame.net';class ho56v extends Laya['Sprite'] {
    constructor(_ry7) {
      super(), this['path'] = _ry7;
    }get ['baseUrl']() {
      return r7_akj['cdnHost'];
    }['init']() {
      Laya['version']['startsWith']('1.') ? this['loadImage'](this['baseUrl'] + this['path'], 0x0, 0x0, this['width'], this['height'], Laya['Handler']['create'](this, this['onImageLoaded'])) : this['loadImage'](this['baseUrl'] + this['path'], Laya['Handler']['create'](this, this['onImageLoaded']));
    }['onImageLoaded']() {}
  }class aj7y extends Laya['Sprite'] {
    constructor() {
      super(), this['bgColor'] = '0xff0000', this['alpha'] = 0.1;
    }['update']() {
      this['graphics']['drawCircle'](this['width'] / 0x2, this['height'] / 0x2, this['width'] / 0x2, this['bgColor']);
    }
  }class lq$nt extends Laya['Sprite'] {
    constructor(kac8e7) {
      super(), this['path'] = kac8e7;
    }['init']() {
      let tlsn$ = new aj7y();tlsn$['width'] = this['width'], tlsn$['height'] = this['height'], tlsn$['bgColor'] = '#f2f2f2', tlsn$['alpha'] = this['alpha'], tlsn$['update'](), this['addChild'](tlsn$);let w6dov = new ho56v(this['path']);w6dov['width'] = this['width'], w6dov['height'] = this['height'], w6dov['init'](), this['addChild'](w6dov);
    }
  }class arkj7_ extends Laya['Sprite'] {
    constructor(n0il$p, ze81kc) {
      super(), this['scaleNumer'] = r7_akj['scale'], this['path'] = n0il$p, this['itemName'] = ze81kc, this['init']();
    }['init']() {
      this['width'] = 0x32 * this['scaleNumer'], this['height'] = 0x32 * this['scaleNumer'];let m6vx = new ho56v(this['path']);m6vx['width'] = 0x1e * this['scaleNumer'], m6vx['height'] = 0x1e * this['scaleNumer'], m6vx['pivotX'] = m6vx['width'] / 0x2, m6vx['x'] = this['width'] / 0x2, m6vx['y'] = 0x4 * this['scaleNumer'], m6vx['init'](), this['addChild'](m6vx);var $qt2s = new Laya['Label']();$qt2s['y'] = 0x23 * this['scaleNumer'], $qt2s['width'] = this['width'], $qt2s['text'] = this['itemName'], $qt2s['fontSize'] = 0xc * this['scaleNumer'], $qt2s['color'] = '#9F9F9F', $qt2s['align'] = Laya['Stage']['ALIGN_CENTER'], $qt2s['valign'] = Laya['Stage']['ALIGN_MIDDLE'], this['addChild']($qt2s);
    }
  }class k8c7a extends Laya['Sprite'] {
    constructor() {
      super(), this['color'] = '#f2f2f2', this['alpha'] = 0x1;
    }['update']() {
      this['graphics']['clear'](), this['graphics']['drawRect'](this['height'] / 0x2, 0x0, this['width'] - this['height'], this['height'], this['color']), this['graphics']['drawPie'](this['height'] / 0x2, this['height'] / 0x2, this['height'] / 0x2, 0x5a, 0x10e, this['color']), this['graphics']['drawPie'](this['width'] - this['height'] / 0x2, this['height'] / 0x2, this['height'] / 0x2, 0x10e, 0x5a, this['color']);
    }
  }class kae7c extends Laya['Sprite'] {
    constructor() {
      super(), this['items'] = [], this['spacing'] = 0xa, this['init']();
    }['onClickItem'](ae18c) {
      for (var z1ec38 in this['onClickItemCallback'] = ae18c, this['items']) {
        let c1k = this['items'][z1ec38];c1k['mouseEnabled'] = !0x0, c1k['on'](Laya['Event']['CLICK'], this, function (_py9i0) {
          return function (ry_09) {
            ry_09['stopPropagation'](), this['onClickItemCallback'](_py9i0['itemName']);
          };
        }(c1k));
      }
    }['init']() {
      this['width'] = this['spacing'], this['height'] = 0x0, this['menuBackground'] = new k8c7a(), this['addChild'](this['menuBackground']);var xhvd = new arkj7_('/sdk/assets/img/%E7%A4%BC%E5%8C%85.png', 'VIP');this['vipItem'] = xhvd, this['addItem'](xhvd), xhvd = new arkj7_('/sdk/assets/img/%E5%85%AC%E4%BC%97%E5%8F%B7.png', '公众号'), (this['gongZhongHaoItem'] = xhvd, this['addItem'](xhvd)), xhvd = new arkj7_('/sdk/assets/img/%E6%9C%8D%E5%8A%A1%E8%AF%84%E4%BB%B7-%E5%AE%A2%E6%9C%8D.png', '客服'), (this['serviceItem'] = xhvd, this['addItem'](xhvd)), xhvd = new arkj7_('/sdk/assets/img/%E6%89%8B%E6%9C%BA.png', '手机'), (this['phoneItem'] = xhvd, this['addItem'](xhvd)), xhvd = new arkj7_('/sdk/assets/img/%E5%AE%9E%E5%90%8D.png', '实名'), (this['realNameItem'] = xhvd, this['addItem'](xhvd)), xhvd = new arkj7_('/sdk/assets/img/%E6%89%8B%E6%B8%B8.png', '升级'), (this['mobileGameItem'] = xhvd, this['addItem'](xhvd));
    }['addItem'](dv4h) {
      this['items']['push'](dv4h), this['addChild'](dv4h), this['updateMenu']();
    }['updateMenu']() {
      let z8ue = this['width'] = 0x0;for (var bwuz1 in this['items']) {
        let _7ajyr = this['items'][bwuz1];_7ajyr && _7ajyr['visible'] && (this['width'] += _7ajyr['width'] + this['spacing'], _7ajyr['height'] > this['height'] && (this['height'] = _7ajyr['height']), _7ajyr['x'] = z8ue + this['spacing'], z8ue += _7ajyr['width'] + this['spacing']);
      }this['width'] += this['spacing'], this['menuBackground']['width'] = this['width'], this['menuBackground']['height'] = this['height'], this['menuBackground']['update']();
    }['setConfig'](lti$0) {
      this['vipItem']['visible'] = lti$0['showVIP'], this['gongZhongHaoItem']['visible'] = lti$0['showGongZhongHao'], this['phoneItem']['visible'] = lti$0['showPhone'], this['realNameItem']['visible'] = lti$0['showRealName'], this['mobileGameItem']['visible'] = lti$0['showMobileGame'], this['updateMenu']();
    }
  }class nsl$q {
    constructor(x4dhv, jak7rc) {
      this['delay'] = x4dhv, this['callback'] = jak7rc;
    }['start']() {
      Laya['timer']['once'](this['delay'], this, this['callback']);
    }['stop']() {
      Laya['timer']['clear'](this, this['callback']);
    }['reset']() {
      Laya['timer']['clear'](this, this['callback']);
    }['restart']() {
      this['start']();
    }
  }class vxd46h {
    constructor(uw3o, ck8ez) {
      this['moveEntryIcon'] = !0x1, this['spacing'] = 0xa, this['entryIconAlpha'] = 0.5, this['entryIconX'] = 0x0, this['entryIconY'] = 0x0, this['entryIconTouchStartX'] = 0x0, this['entryIconTouchStartY'] = 0x0, this['entryIconTouchStopX'] = 0x0, this['entryIconTouchStopY'] = 0x0, this['scaleNumer'] = r7_akj['scale'], this['x'] = 0x0, this['y'] = 0x0, this['width'] = 0x0, this['height'] = 0x0, this['entryIconX'] = uw3o, this['entryIconY'] = ck8ez;
    }['addChild'](a7j8k) {
      return Laya['stage']['addChild'](a7j8k);
    }['init'](_ry7j) {
      let o5vw = this;this['hideMenuTimer'] = new nsl$q(0xfa0, function () {
        o5vw['hideMenu']();
      });var ho5d6v = Laya['stage']['width'],
          nip9y0 = Laya['stage']['height'];this['x'] = 0x0, this['y'] = 0x0, this['width'] = ho5d6v, this['height'] = nip9y0;let oh6dv5 = new lq$nt('/sdk/assets/img/%E6%9B%B4%E5%A4%9A.png');this['entryIcon'] = oh6dv5, oh6dv5['width'] = 0x32 * this['scaleNumer'], oh6dv5['height'] = 0x32 * this['scaleNumer'], oh6dv5['x'] = null == this['entryIconX'] ? 0x0 : this['entryIconX'], oh6dv5['y'] = null == this['entryIconY'] ? 0.25 * nip9y0 : this['entryIconY'], oh6dv5['init'](), oh6dv5['alpha'] = this['entryIconAlpha'], oh6dv5['mouseEnabled'] = !0x0, oh6dv5['mouseThrough'] = !0x1, this['addChild'](oh6dv5), oh6dv5['mouseEnabled'] = !0x0, oh6dv5['on'](Laya['Event']['MOUSE_DOWN'], this, this['entryIconStartMove']), oh6dv5['on'](Laya['Event']['MOUSE_UP'], this, this['entryIconStopMove']), oh6dv5['on'](Laya['Event']['CLICK'], this, this['entryIconTap']), this['showEntryIcon']();let ipn0l$ = new kae7c();this['menu'] = ipn0l$, ipn0l$['x'] = 0x64, ipn0l$['y'] = 0x64, this['addChild'](ipn0l$), _ry7j && this['updateMenuConfig'](_ry7j), this['updateMenuPosition'](), this['hideMenu'](), this['showEntryIcon'](), this['hideMenuTimer']['start'](), this['menu']['onClickItem'](function (lqtf) {
        o5vw['hideMenuTimer']['reset'](), o5vw['hideMenuTimer']['start'](), o5vw['clickMenuItemCallback'] && o5vw['clickMenuItemCallback'](lqtf);
      });
    }['onClickMenuItem'](jk8c7a) {
      this['clickMenuItemCallback'] = jk8c7a;
    }['updateMenuPosition']() {
      this['entryIcon']['x'] > this['width'] / 0x2 ? this['menu']['x'] = this['entryIcon']['x'] - this['menu']['width'] - this['spacing'] : this['menu']['x'] = this['entryIcon']['x'] + this['entryIcon']['width'] + this['spacing'], this['menu']['y'] = this['entryIcon']['y'];
    }['showEntryIcon']() {
      this['entryIcon']['alpha'] = 0x1;
    }['hideEntryIcon']() {
      this['entryIcon']['alpha'] = this['entryIconAlpha'];
    }['showMenu']() {
      this['menu']['visible'] = !0x0, this['showEntryIcon']();
    }['hideMenu']() {
      this['menu']['visible'] = !0x1, this['hideEntryIcon']();
    }['entryIconTap'](zwu31) {
      var n0i$p;if (zwu31['stopPropagation'](), this['hideMenuTimer']['reset'](), this['hideMenuTimer']['start'](), this['moveEntryIcon'] && (n0i$p = this['entryIconTouchStopX'] - this['entryIconTouchStartX'], zwu31 = this['entryIconTouchStopY'] - this['entryIconTouchStartY'], n0i$p < 0x5 && -0x5 < n0i$p && zwu31 < 0x5 && -0x5 < zwu31 && (this['moveEntryIcon'] = !0x1)), this['moveEntryIcon']) return this['moveEntryIcon'] = !0x1, void console['log']('entry icon move');this['menu']['visible'] ? this['hideMenu']() : this['showMenu']();
    }['entryIconStartMove'](py9r_0) {
      var gvm = new Laya['Rectangle'](0x0, 0x0, this['width'], this['height']);this['entryIcon']['startDrag'](gvm, !0x1, 0x64), this['entryIcon']['on'](Laya['Event']['MOUSE_MOVE'], this, this['entryIconOnMove']), this['showEntryIcon'](), this['hideMenuTimer']['stop'](), py9r_0 = py9r_0['touches'], py9r_0 && 0x0 < py9r_0['length'] && (py9r_0 = py9r_0[0x0], this['entryIconTouchStartX'] = py9r_0['stageX'], this['entryIconTouchStartY'] = py9r_0['stageY']);
    }['entryIconStopMove'](kjr7c) {
      this['entryIcon']['off'](Laya['Event']['MOUSE_MOVE'], this, this['entryIconOnMove']), this['entryIcon']['x'] > this['width'] / 0x2 ? this['entryIcon']['x'] = this['width'] - this['entryIcon']['width'] : this['entryIcon']['x'] = 0x0, this['updateMenuPosition']();
    }['entryIconOnMove'](f$qst2) {
      this['updateMenuPosition'](), this['moveEntryIcon'] = !0x0, f$qst2 = f$qst2['touches'], f$qst2 && 0x0 < f$qst2['length'] && (f$qst2 = f$qst2[0x0], this['entryIconTouchStopX'] = f$qst2['stageX'], this['entryIconTouchStopY'] = f$qst2['stageY']);
    }['updateMenuConfig'](u3w5zb) {
      this['menu'] && this['menu']['setConfig'](u3w5zb);
    }
  }return console['log'](' window.CXUI'), window['CXUI'] = class {
    constructor() {}['init'](bw5od6) {
      bw5od6['cxCdnHost'] && (r7_akj['cdnHost'] = bw5od6['cxCdnHost']), this['stage'] = bw5od6['stage'], this['uiContainer'] = new vxd46h(bw5od6['entryIconX'], bw5od6['entryIconY']);
    }['updateConfig'](do65vw) {
      this['showConfig'] = do65vw, this['uiContainer']['updateMenuConfig'](do65vw);
    }['showMenu']() {
      this['uiContainer']['init'](this['showConfig']);
    }['onClickItem'](zw3u5b) {
      this['uiContainer']['onClickMenuItem'](zw3u5b);
    }
  };
}();