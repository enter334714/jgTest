var weu38 = function () {
  'use strict';

  class $lint {
    constructor() {}
  }$lint['scale'] = 1.7, $lint['cdnHost'] = 'https://cdn.cxgame.net';class c78ek extends Laya['Sprite'] {
    constructor(xmhv6) {
      super(), this['path'] = xmhv6;
    }get ['baseUrl']() {
      return $lint['cdnHost'];
    }['init']() {
      Laya['version']['startsWith']('1.') ? this['loadImage'](this['baseUrl'] + this['path'], 0x0, 0x0, this['width'], this['height'], Laya['Handler']['create'](this, this['onImageLoaded'])) : this['loadImage'](this['baseUrl'] + this['path'], Laya['Handler']['create'](this, this['onImageLoaded']));
    }['onImageLoaded']() {}
  }class i0l9pn extends Laya['Sprite'] {
    constructor() {
      super(), this['bgColor'] = '0xff0000', this['alpha'] = 0.1;
    }['update']() {
      this['graphics']['drawCircle'](this['width'] / 0x2, this['height'] / 0x2, this['width'] / 0x2, this['bgColor']);
    }
  }class a8jkc extends Laya['Sprite'] {
    constructor(ck8a1) {
      super(), this['path'] = ck8a1;
    }['init']() {
      let rjy_97 = new i0l9pn();rjy_97['width'] = this['width'], rjy_97['height'] = this['height'], rjy_97['bgColor'] = '#f2f2f2', rjy_97['alpha'] = this['alpha'], rjy_97['update'](), this['addChild'](rjy_97);let sqtf$ = new c78ek(this['path']);sqtf$['width'] = this['width'], sqtf$['height'] = this['height'], sqtf$['init'](), this['addChild'](sqtf$);
    }
  }class _a7rjk extends Laya['Sprite'] {
    constructor(jc78k, k_ja) {
      super(), this['scaleNumer'] = $lint['scale'], this['path'] = jc78k, this['itemName'] = k_ja, this['init']();
    }['init']() {
      this['width'] = 0x32 * this['scaleNumer'], this['height'] = 0x32 * this['scaleNumer'];let yp0i_9 = new c78ek(this['path']);yp0i_9['width'] = 0x1e * this['scaleNumer'], yp0i_9['height'] = 0x1e * this['scaleNumer'], yp0i_9['pivotX'] = yp0i_9['width'] / 0x2, yp0i_9['x'] = this['width'] / 0x2, yp0i_9['y'] = 0x4 * this['scaleNumer'], yp0i_9['init'](), this['addChild'](yp0i_9);var yi9_ = new Laya['Label']();yi9_['y'] = 0x23 * this['scaleNumer'], yi9_['width'] = this['width'], yi9_['text'] = this['itemName'], yi9_['fontSize'] = 0xc * this['scaleNumer'], yi9_['color'] = '#9F9F9F', yi9_['align'] = Laya['Stage']['ALIGN_CENTER'], yi9_['valign'] = Laya['Stage']['ALIGN_MIDDLE'], this['addChild'](yi9_);
    }
  }class uz1be3 extends Laya['Sprite'] {
    constructor() {
      super(), this['color'] = '#f2f2f2', this['alpha'] = 0x1;
    }['update']() {
      this['graphics']['clear'](), this['graphics']['drawRect'](this['height'] / 0x2, 0x0, this['width'] - this['height'], this['height'], this['color']), this['graphics']['drawPie'](this['height'] / 0x2, this['height'] / 0x2, this['height'] / 0x2, 0x5a, 0x10e, this['color']), this['graphics']['drawPie'](this['width'] - this['height'] / 0x2, this['height'] / 0x2, this['height'] / 0x2, 0x10e, 0x5a, this['color']);
    }
  }class lqn$st extends Laya['Sprite'] {
    constructor() {
      super(), this['items'] = [], this['spacing'] = 0xa, this['init']();
    }['onClickItem'](nts$ql) {
      this['onClickItemCallback'] = nts$ql;for (let yr97 in this['items']) {
        let _rypj = this['items'][yr97];function b5od6(q$2ts) {
          return function (e13ub) {
            e13ub['stopPropagation'](), this['onClickItemCallback'](q$2ts['itemName']);
          };
        }_rypj['mouseEnabled'] = !0x0, _rypj['on'](Laya['Event']['CLICK'], this, b5od6(_rypj));
      }
    }['init']() {
      this['width'] = this['spacing'], this['height'] = 0x0, this['menuBackground'] = new uz1be3(), this['addChild'](this['menuBackground']);let rjp9_ = new _a7rjk('/sdk/assets/img/%E7%A4%BC%E5%8C%85.png', 'VIP');this['vipItem'] = rjp9_, this['addItem'](rjp9_);let raj_y7 = new _a7rjk('/sdk/assets/img/%E5%85%AC%E4%BC%97%E5%8F%B7.png', '公众号');this['gongZhongHaoItem'] = raj_y7, this['addItem'](raj_y7);let dh5vo = new _a7rjk('/sdk/assets/img/%E6%9C%8D%E5%8A%A1%E8%AF%84%E4%BB%B7-%E5%AE%A2%E6%9C%8D.png', '客服');this['serviceItem'] = dh5vo, this['addItem'](dh5vo);let wob35 = new _a7rjk('/sdk/assets/img/%E6%89%8B%E6%9C%BA.png', '手机');this['phoneItem'] = wob35, this['addItem'](wob35);let s$ltq = new _a7rjk('/sdk/assets/img/%E5%AE%9E%E5%90%8D.png', '实名');this['realNameItem'] = s$ltq, this['addItem'](s$ltq);let hod = new _a7rjk('/sdk/assets/img/%E6%89%8B%E6%B8%B8.png', '升级');this['mobileGameItem'] = hod, this['addItem'](hod);
    }['addItem'](ac8j) {
      this['items']['push'](ac8j), this['addChild'](ac8j), this['updateMenu']();
    }['updateMenu']() {
      this['width'] = 0x0;let $2tfsq = 0x0;for (let t$ilns in this['items']) {
        let d64vh = this['items'][t$ilns];d64vh && d64vh['visible'] && (this['width'] += d64vh['width'] + this['spacing'], d64vh['height'] > this['height'] && (this['height'] = d64vh['height']), d64vh['x'] = $2tfsq + this['spacing'], $2tfsq += d64vh['width'] + this['spacing']);
      }this['width'] += this['spacing'], this['menuBackground']['width'] = this['width'], this['menuBackground']['height'] = this['height'], this['menuBackground']['update']();
    }['setConfig'](a7rk) {
      this['vipItem']['visible'] = a7rk['showVIP'], this['gongZhongHaoItem']['visible'] = a7rk['showGongZhongHao'], this['phoneItem']['visible'] = a7rk['showPhone'], this['realNameItem']['visible'] = a7rk['showRealName'], this['mobileGameItem']['visible'] = a7rk['showMobileGame'], this['updateMenu']();
    }
  }class m6xv {
    constructor(jyra7_, h46d) {
      this['delay'] = jyra7_, this['callback'] = h46d;
    }['start']() {
      Laya['timer']['once'](this['delay'], this, this['callback']);
    }['stop']() {
      Laya['timer']['clear'](this, this['callback']);
    }['reset']() {
      Laya['timer']['clear'](this, this['callback']);
    }['restart']() {
      this['start']();
    }
  }class c7jk8 {
    constructor(o6dhv5, z1ub3) {
      this['moveEntryIcon'] = !0x1, this['spacing'] = 0xa, this['entryIconAlpha'] = 0.5, this['entryIconX'] = 0x0, this['entryIconY'] = 0x0, this['entryIconTouchStartX'] = 0x0, this['entryIconTouchStartY'] = 0x0, this['entryIconTouchStopX'] = 0x0, this['entryIconTouchStopY'] = 0x0, this['scaleNumer'] = $lint['scale'], this['x'] = 0x0, this['y'] = 0x0, this['width'] = 0x0, this['height'] = 0x0, this['entryIconX'] = o6dhv5, this['entryIconY'] = z1ub3;
    }['addChild'](cjk7r) {
      return Laya['stage']['addChild'](cjk7r);
    }['init'](d46x) {
      let eubz1 = this;this['hideMenuTimer'] = new m6xv(0xfa0, function () {
        eubz1['hideMenu']();
      });let z1wu3b = Laya['stage']['width'],
          $tli = Laya['stage']['height'];this['x'] = 0x0, this['y'] = 0x0, this['width'] = z1wu3b, this['height'] = $tli;let p0ln = new a8jkc('/sdk/assets/img/%E6%9B%B4%E5%A4%9A.png');this['entryIcon'] = p0ln, p0ln['width'] = 0x32 * this['scaleNumer'], p0ln['height'] = 0x32 * this['scaleNumer'], p0ln['x'] = null == this['entryIconX'] ? 0x0 : this['entryIconX'], p0ln['y'] = null == this['entryIconY'] ? 0.25 * $tli : this['entryIconY'], p0ln['init'](), p0ln['alpha'] = this['entryIconAlpha'], p0ln['mouseEnabled'] = !0x0, p0ln['mouseThrough'] = !0x1, this['addChild'](p0ln), p0ln['mouseEnabled'] = !0x0, p0ln['on'](Laya['Event']['MOUSE_DOWN'], this, this['entryIconStartMove']), p0ln['on'](Laya['Event']['MOUSE_UP'], this, this['entryIconStopMove']), p0ln['on'](Laya['Event']['CLICK'], this, this['entryIconTap']), this['showEntryIcon']();let bz1wu3 = new lqn$st();this['menu'] = bz1wu3, bz1wu3['x'] = 0x64, bz1wu3['y'] = 0x64, this['addChild'](bz1wu3), d46x && this['updateMenuConfig'](d46x), this['updateMenuPosition'](), this['hideMenu'](), this['showEntryIcon'](), this['hideMenuTimer']['start'](), this['menu']['onClickItem'](function (ln$) {
        eubz1['hideMenuTimer']['reset'](), eubz1['hideMenuTimer']['start'](), eubz1['clickMenuItemCallback'] && eubz1['clickMenuItemCallback'](ln$);
      });
    }['onClickMenuItem']($0p) {
      this['clickMenuItemCallback'] = $0p;
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
    }['entryIconTap'](xhd4v6) {
      if (xhd4v6['stopPropagation'](), this['hideMenuTimer']['reset'](), this['hideMenuTimer']['start'](), this['moveEntryIcon']) {
        let ln0t$ = this['entryIconTouchStopX'] - this['entryIconTouchStartX'],
            c87a = this['entryIconTouchStopY'] - this['entryIconTouchStartY'];ln0t$ < 0x5 && ln0t$ > -0x5 && c87a < 0x5 && c87a > -0x5 && (this['moveEntryIcon'] = !0x1);
      }if (this['moveEntryIcon']) return this['moveEntryIcon'] = !0x1, void console['log']('entry icon move');this['menu']['visible'] ? this['hideMenu']() : this['showMenu']();
    }['entryIconStartMove'](slit$n) {
      let vdo56h = new Laya['Rectangle'](0x0, 0x0, this['width'], this['height']);this['entryIcon']['startDrag'](vdo56h, !0x1, 0x64), this['entryIcon']['on'](Laya['Event']['MOUSE_MOVE'], this, this['entryIconOnMove']), this['showEntryIcon'](), this['hideMenuTimer']['stop']();var zw3b1 = slit$n['touches'];if (zw3b1 && zw3b1['length'] > 0x0) {
        var yp09ni = zw3b1[0x0];this['entryIconTouchStartX'] = yp09ni['stageX'], this['entryIconTouchStartY'] = yp09ni['stageY'];
      }
    }['entryIconStopMove'](u5z3) {
      this['entryIcon']['off'](Laya['Event']['MOUSE_MOVE'], this, this['entryIconOnMove']), this['entryIcon']['x'] > this['width'] / 0x2 ? this['entryIcon']['x'] = this['width'] - this['entryIcon']['width'] : this['entryIcon']['x'] = 0x0, this['updateMenuPosition']();
    }['entryIconOnMove'](jak78c) {
      this['updateMenuPosition'](), this['moveEntryIcon'] = !0x0;var d5ow6b = jak78c['touches'];if (d5ow6b && d5ow6b['length'] > 0x0) {
        var b5wu3o = d5ow6b[0x0];this['entryIconTouchStopX'] = b5wu3o['stageX'], this['entryIconTouchStopY'] = b5wu3o['stageY'];
      }
    }['updateMenuConfig'](lp9n) {
      this['menu'] && this['menu']['setConfig'](lp9n);
    }
  }class s$qfl {
    constructor() {}['init'](ilnp9) {
      ilnp9['cxCdnHost'] && ($lint['cdnHost'] = ilnp9['cxCdnHost']), this['stage'] = ilnp9['stage'], this['uiContainer'] = new c7jk8(ilnp9['entryIconX'], ilnp9['entryIconY']);
    }['updateConfig'](tsf$2) {
      this['showConfig'] = tsf$2, this['uiContainer']['updateMenuConfig'](tsf$2);
    }['showMenu']() {
      this['uiContainer']['init'](this['showConfig']);
    }['onClickItem'](rjya) {
      this['uiContainer']['onClickMenuItem'](rjya);
    }
  }return console['log'](' window.CXUI'), window['CXUI'] = s$qfl;
}();