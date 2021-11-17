var wgdrcb = function () {
  'use strict';

  class t0gc58 {
    constructor() {}
  }t0gc58['scale'] = 1.7, t0gc58['cdnHost'] = 'https://cdn.cxgame.net';class rgdkc extends Laya['Sprite'] {
    constructor(b0c85g) {
      super(), this['path'] = b0c85g;
    }get ['baseUrl']() {
      return t0gc58['cdnHost'];
    }['init']() {
      Laya['version']['startsWith']('1.') ? this['loadImage'](this['baseUrl'] + this['path'], 0x0, 0x0, this['width'], this['height'], Laya['Handler']['create'](this, this['onImageLoaded'])) : this['loadImage'](this['baseUrl'] + this['path'], Laya['Handler']['create'](this, this['onImageLoaded']));
    }['onImageLoaded']() {}
  }class e12zf extends Laya['Sprite'] {
    constructor() {
      super(), this['bgColor'] = '0xff0000', this['alpha'] = 0.1;
    }['update']() {
      this['graphics']['drawCircle'](this['width'] / 0x2, this['height'] / 0x2, this['width'] / 0x2, this['bgColor']);
    }
  }class $9xya extends Laya['Sprite'] {
    constructor(jez13) {
      super(), this['path'] = jez13;
    }['init']() {
      let o4ms6q = new e12zf();o4ms6q['width'] = this['width'], o4ms6q['height'] = this['height'], o4ms6q['bgColor'] = '#f2f2f2', o4ms6q['alpha'] = this['alpha'], o4ms6q['update'](), this['addChild'](o4ms6q);let zjwf = new rgdkc(this['path']);zjwf['width'] = this['width'], zjwf['height'] = this['height'], zjwf['init'](), this['addChild'](zjwf);
    }
  }class ut50 extends Laya['Sprite'] {
    constructor(ms46o, omsnq) {
      super(), this['scaleNumer'] = t0gc58['scale'], this['path'] = ms46o, this['itemName'] = omsnq, this['init']();
    }['init']() {
      this['width'] = 0x32 * this['scaleNumer'], this['height'] = 0x32 * this['scaleNumer'];let gdb5c = new rgdkc(this['path']);gdb5c['width'] = 0x1e * this['scaleNumer'], gdb5c['height'] = 0x1e * this['scaleNumer'], gdb5c['pivotX'] = gdb5c['width'] / 0x2, gdb5c['x'] = this['width'] / 0x2, gdb5c['y'] = 0x4 * this['scaleNumer'], gdb5c['init'](), this['addChild'](gdb5c);var c5tg80 = new Laya['Label']();c5tg80['y'] = 0x23 * this['scaleNumer'], c5tg80['width'] = this['width'], c5tg80['text'] = this['itemName'], c5tg80['fontSize'] = 0xc * this['scaleNumer'], c5tg80['color'] = '#9F9F9F', c5tg80['align'] = Laya['Stage']['ALIGN_CENTER'], c5tg80['valign'] = Laya['Stage']['ALIGN_MIDDLE'], this['addChild'](c5tg80);
    }
  }class mswjno extends Laya['Sprite'] {
    constructor() {
      super(), this['color'] = '#f2f2f2', this['alpha'] = 0x1;
    }['update']() {
      this['graphics']['clear'](), this['graphics']['drawRect'](this['height'] / 0x2, 0x0, this['width'] - this['height'], this['height'], this['color']), this['graphics']['drawPie'](this['height'] / 0x2, this['height'] / 0x2, this['height'] / 0x2, 0x5a, 0x10e, this['color']), this['graphics']['drawPie'](this['width'] - this['height'] / 0x2, this['height'] / 0x2, this['height'] / 0x2, 0x10e, 0x5a, this['color']);
    }
  }class fjos extends Laya['Sprite'] {
    constructor() {
      super(), this['items'] = [], this['spacing'] = 0xa, this['init']();
    }['onClickItem'](zwe1j) {
      this['onClickItemCallback'] = zwe1j;for (let z7312i in this['items']) {
        let wfsoj = this['items'][z7312i];function qp6uh(jmwnos) {
          return function (gkdxbr) {
            gkdxbr['stopPropagation'](), this['onClickItemCallback'](jmwnos['itemName']);
          };
        }wfsoj['mouseEnabled'] = !0x0, wfsoj['on'](Laya['Event']['CLICK'], this, qp6uh(wfsoj));
      }
    }['init']() {
      this['width'] = this['spacing'], this['height'] = 0x0, this['menuBackground'] = new mswjno(), this['addChild'](this['menuBackground']);let tcu5 = new ut50('/sdk/assets/img/%E7%A4%BC%E5%8C%85.png', 'VIP');this['vipItem'] = tcu5, this['addItem'](tcu5);let c5gb8k = new ut50('/sdk/assets/img/%E5%85%AC%E4%BC%97%E5%8F%B7.png', '公众号');this['gongZhongHaoItem'] = c5gb8k, this['addItem'](c5gb8k);let wzjef1 = new ut50('/sdk/assets/img/%E6%9C%8D%E5%8A%A1%E8%AF%84%E4%BB%B7-%E5%AE%A2%E6%9C%8D.png', '客服');this['serviceItem'] = wzjef1, this['addItem'](wzjef1);let qn4om = new ut50('/sdk/assets/img/%E6%89%8B%E6%9C%BA.png', '手机');this['phoneItem'] = qn4om, this['addItem'](qn4om);let arxd$ = new ut50('/sdk/assets/img/%E5%AE%9E%E5%90%8D.png', '实名');this['realNameItem'] = arxd$, this['addItem'](arxd$);let xkrady = new ut50('/sdk/assets/img/%E6%89%8B%E6%B8%B8.png', '升级');this['mobileGameItem'] = xkrady, this['addItem'](xkrady);
    }['addItem'](ph64m) {
      this['items']['push'](ph64m), this['addChild'](ph64m), this['updateMenu']();
    }['updateMenu']() {
      this['width'] = 0x0;let a$rvxy = 0x0;for (let pm64qh in this['items']) {
        let h0ptu6 = this['items'][pm64qh];h0ptu6 && h0ptu6['visible'] && (this['width'] += h0ptu6['width'] + this['spacing'], h0ptu6['height'] > this['height'] && (this['height'] = h0ptu6['height']), h0ptu6['x'] = a$rvxy + this['spacing'], a$rvxy += h0ptu6['width'] + this['spacing']);
      }this['width'] += this['spacing'], this['menuBackground']['width'] = this['width'], this['menuBackground']['height'] = this['height'], this['menuBackground']['update']();
    }['setConfig'](uh0pt) {
      this['vipItem']['visible'] = uh0pt['showVIP'], this['gongZhongHaoItem']['visible'] = uh0pt['showGongZhongHao'], this['phoneItem']['visible'] = uh0pt['showPhone'], this['realNameItem']['visible'] = uh0pt['showRealName'], this['mobileGameItem']['visible'] = uh0pt['showMobileGame'], this['updateMenu']();
    }
  }class rxvya {
    constructor(qsm, enfzwj) {
      this['delay'] = qsm, this['callback'] = enfzwj;
    }['start']() {
      Laya['timer']['once'](this['delay'], this, this['callback']);
    }['stop']() {
      Laya['timer']['clear'](this, this['callback']);
    }['reset']() {
      Laya['timer']['clear'](this, this['callback']);
    }['restart']() {
      this['start']();
    }
  }class hmqp46 {
    constructor(pq4uh6, zwen) {
      this['moveEntryIcon'] = !0x1, this['spacing'] = 0xa, this['entryIconAlpha'] = 0.5, this['entryIconX'] = 0x0, this['entryIconY'] = 0x0, this['entryIconTouchStartX'] = 0x0, this['entryIconTouchStartY'] = 0x0, this['entryIconTouchStopX'] = 0x0, this['entryIconTouchStopY'] = 0x0, this['scaleNumer'] = t0gc58['scale'], this['x'] = 0x0, this['y'] = 0x0, this['width'] = 0x0, this['height'] = 0x0, this['entryIconX'] = pq4uh6, this['entryIconY'] = zwen;
    }['addChild'](i2z137) {
      return Laya['stage']['addChild'](i2z137);
    }['init'](vary$) {
      let qwmson = this;this['hideMenuTimer'] = new rxvya(0xfa0, function () {
        qwmson['hideMenu']();
      });let pu6t4h = Laya['stage']['width'],
          bcdg = Laya['stage']['height'];this['x'] = 0x0, this['y'] = 0x0, this['width'] = pu6t4h, this['height'] = bcdg;let h80tu5 = new $9xya('/sdk/assets/img/%E6%9B%B4%E5%A4%9A.png');this['entryIcon'] = h80tu5, h80tu5['width'] = 0x32 * this['scaleNumer'], h80tu5['height'] = 0x32 * this['scaleNumer'], h80tu5['x'] = null == this['entryIconX'] ? 0x0 : this['entryIconX'], h80tu5['y'] = null == this['entryIconY'] ? 0.25 * bcdg : this['entryIconY'], h80tu5['init'](), h80tu5['alpha'] = this['entryIconAlpha'], h80tu5['mouseEnabled'] = !0x0, h80tu5['mouseThrough'] = !0x1, this['addChild'](h80tu5), h80tu5['mouseEnabled'] = !0x0, h80tu5['on'](Laya['Event']['MOUSE_DOWN'], this, this['entryIconStartMove']), h80tu5['on'](Laya['Event']['MOUSE_UP'], this, this['entryIconStopMove']), h80tu5['on'](Laya['Event']['CLICK'], this, this['entryIconTap']), this['showEntryIcon']();let xva9y$ = new fjos();this['menu'] = xva9y$, xva9y$['x'] = 0x64, xva9y$['y'] = 0x64, this['addChild'](xva9y$), vary$ && this['updateMenuConfig'](vary$), this['updateMenuPosition'](), this['hideMenu'](), this['showEntryIcon'](), this['hideMenuTimer']['start'](), this['menu']['onClickItem'](function (xrd$ay) {
        qwmson['hideMenuTimer']['reset'](), qwmson['hideMenuTimer']['start'](), qwmson['clickMenuItemCallback'] && qwmson['clickMenuItemCallback'](xrd$ay);
      });
    }['onClickMenuItem'](qonws) {
      this['clickMenuItemCallback'] = qonws;
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
    }['entryIconTap'](pt0u6h) {
      if (pt0u6h['stopPropagation'](), this['hideMenuTimer']['reset'](), this['hideMenuTimer']['start'](), this['moveEntryIcon']) {
        let mwjso = this['entryIconTouchStopX'] - this['entryIconTouchStartX'],
            qnowm = this['entryIconTouchStopY'] - this['entryIconTouchStartY'];mwjso < 0x5 && mwjso > -0x5 && qnowm < 0x5 && qnowm > -0x5 && (this['moveEntryIcon'] = !0x1);
      }if (this['moveEntryIcon']) return this['moveEntryIcon'] = !0x1, void console['log']('entry icon move');this['menu']['visible'] ? this['hideMenu']() : this['showMenu']();
    }['entryIconStartMove'](ykrbdx) {
      let gkbcd5 = new Laya['Rectangle'](0x0, 0x0, this['width'], this['height']);this['entryIcon']['startDrag'](gkbcd5, !0x1, 0x64), this['entryIcon']['on'](Laya['Event']['MOUSE_MOVE'], this, this['entryIconOnMove']), this['showEntryIcon'](), this['hideMenuTimer']['stop']();var u80p = ykrbdx['touches'];if (u80p && u80p['length'] > 0x0) {
        var i32z7 = u80p[0x0];this['entryIconTouchStartX'] = i32z7['stageX'], this['entryIconTouchStartY'] = i32z7['stageY'];
      }
    }['entryIconStopMove'](yval$) {
      this['entryIcon']['off'](Laya['Event']['MOUSE_MOVE'], this, this['entryIconOnMove']), this['entryIcon']['x'] > this['width'] / 0x2 ? this['entryIcon']['x'] = this['width'] - this['entryIcon']['width'] : this['entryIcon']['x'] = 0x0, this['updateMenuPosition']();
    }['entryIconOnMove'](av$ry) {
      this['updateMenuPosition'](), this['moveEntryIcon'] = !0x0;var ejonfw = av$ry['touches'];if (ejonfw && ejonfw['length'] > 0x0) {
        var rydkbx = ejonfw[0x0];this['entryIconTouchStopX'] = rydkbx['stageX'], this['entryIconTouchStopY'] = rydkbx['stageY'];
      }
    }['updateMenuConfig'](wnejf) {
      this['menu'] && this['menu']['setConfig'](wnejf);
    }
  }class pmqh64 {
    constructor() {}['init'](bxdrkg) {
      bxdrkg['cxCdnHost'] && (t0gc58['cdnHost'] = bxdrkg['cxCdnHost']), this['stage'] = bxdrkg['stage'], this['uiContainer'] = new hmqp46(bxdrkg['entryIconX'], bxdrkg['entryIconY']);
    }['updateConfig'](sqpm46) {
      this['showConfig'] = sqpm46, this['uiContainer']['updateMenuConfig'](sqpm46);
    }['showMenu']() {
      this['uiContainer']['init'](this['showConfig']);
    }['onClickItem'](t4hpu6) {
      this['uiContainer']['onClickMenuItem'](t4hpu6);
    }
  }return console['log'](' window.CXUI'), window['CXUI'] = pmqh64;
}();