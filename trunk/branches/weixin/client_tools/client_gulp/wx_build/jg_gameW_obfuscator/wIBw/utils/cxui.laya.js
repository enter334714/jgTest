var wouw = function () {
  'use strict';

  class kr_ja {
    constructor() {}
  }kr_ja['scale'] = 1.7, kr_ja['cdnHost'] = 'https://cdn.cxgame.net';class st$lqn extends Laya['Sprite'] {
    constructor(m4vx6) {
      super(), this['path'] = m4vx6;
    }get ['baseUrl']() {
      return kr_ja['cdnHost'];
    }['init']() {
      Laya['version']['startsWith']('1.') ? this['loadImage'](this['baseUrl'] + this['path'], 0x0, 0x0, this['width'], this['height'], Laya['Handler']['create'](this, this['onImageLoaded'])) : this['loadImage'](this['baseUrl'] + this['path'], Laya['Handler']['create'](this, this['onImageLoaded']));
    }['onImageLoaded']() {}
  }class ace78 extends Laya['Sprite'] {
    constructor() {
      super(), this['bgColor'] = '0xff0000', this['alpha'] = 0.1;
    }['update']() {
      this['graphics']['drawCircle'](this['width'] / 0x2, this['height'] / 0x2, this['width'] / 0x2, this['bgColor']);
    }
  }class ob65dw extends Laya['Sprite'] {
    constructor(zu5) {
      super(), this['path'] = zu5;
    }['init']() {
      let a18ce = new ace78();a18ce['width'] = this['width'], a18ce['height'] = this['height'], a18ce['bgColor'] = '#f2f2f2', a18ce['alpha'] = this['alpha'], a18ce['update'](), this['addChild'](a18ce);let m4vhx6 = new st$lqn(this['path']);m4vhx6['width'] = this['width'], m4vhx6['height'] = this['height'], m4vhx6['init'](), this['addChild'](m4vhx6);
    }
  }class hg4vm extends Laya['Sprite'] {
    constructor(r7a_j, j78cka) {
      super(), this['scaleNumer'] = kr_ja['scale'], this['path'] = r7a_j, this['itemName'] = j78cka, this['init']();
    }['init']() {
      this['width'] = 0x32 * this['scaleNumer'], this['height'] = 0x32 * this['scaleNumer'];let yn09i = new st$lqn(this['path']);yn09i['width'] = 0x1e * this['scaleNumer'], yn09i['height'] = 0x1e * this['scaleNumer'], yn09i['pivotX'] = yn09i['width'] / 0x2, yn09i['x'] = this['width'] / 0x2, yn09i['y'] = 0x4 * this['scaleNumer'], yn09i['init'](), this['addChild'](yn09i);var zuw3b1 = new Laya['Label']();zuw3b1['y'] = 0x23 * this['scaleNumer'], zuw3b1['width'] = this['width'], zuw3b1['text'] = this['itemName'], zuw3b1['fontSize'] = 0xc * this['scaleNumer'], zuw3b1['color'] = '#9F9F9F', zuw3b1['align'] = Laya['Stage']['ALIGN_CENTER'], zuw3b1['valign'] = Laya['Stage']['ALIGN_MIDDLE'], this['addChild'](zuw3b1);
    }
  }class x6v4d extends Laya['Sprite'] {
    constructor() {
      super(), this['color'] = '#f2f2f2', this['alpha'] = 0x1;
    }['update']() {
      this['graphics']['clear'](), this['graphics']['drawRect'](this['height'] / 0x2, 0x0, this['width'] - this['height'], this['height'], this['color']), this['graphics']['drawPie'](this['height'] / 0x2, this['height'] / 0x2, this['height'] / 0x2, 0x5a, 0x10e, this['color']), this['graphics']['drawPie'](this['width'] - this['height'] / 0x2, this['height'] / 0x2, this['height'] / 0x2, 0x10e, 0x5a, this['color']);
    }
  }class ilnp$ extends Laya['Sprite'] {
    constructor() {
      super(), this['items'] = [], this['spacing'] = 0xa, this['init']();
    }['onClickItem'](wou5db) {
      this['onClickItemCallback'] = wou5db;for (let rp9y_j in this['items']) {
        let _yi9 = this['items'][rp9y_j];function a7rcj(qlt$sn) {
          return function (wuz1b) {
            wuz1b['stopPropagation'](), this['onClickItemCallback'](qlt$sn['itemName']);
          };
        }_yi9['mouseEnabled'] = !0x0, _yi9['on'](Laya['Event']['CLICK'], this, a7rcj(_yi9));
      }
    }['init']() {
      this['width'] = this['spacing'], this['height'] = 0x0, this['menuBackground'] = new x6v4d(), this['addChild'](this['menuBackground']);let _9pyr0 = new hg4vm('/sdk/assets/img/%E7%A4%BC%E5%8C%85.png', 'VIP');this['vipItem'] = _9pyr0, this['addItem'](_9pyr0);let yr9pj = new hg4vm('/sdk/assets/img/%E5%85%AC%E4%BC%97%E5%8F%B7.png', '公众号');this['gongZhongHaoItem'] = yr9pj, this['addItem'](yr9pj);let euz183 = new hg4vm('/sdk/assets/img/%E6%9C%8D%E5%8A%A1%E8%AF%84%E4%BB%B7-%E5%AE%A2%E6%9C%8D.png', '客服');this['serviceItem'] = euz183, this['addItem'](euz183);let r_90yp = new hg4vm('/sdk/assets/img/%E6%89%8B%E6%9C%BA.png', '手机');this['phoneItem'] = r_90yp, this['addItem'](r_90yp);let odwb5u = new hg4vm('/sdk/assets/img/%E5%AE%9E%E5%90%8D.png', '实名');this['realNameItem'] = odwb5u, this['addItem'](odwb5u);let _rayj = new hg4vm('/sdk/assets/img/%E6%89%8B%E6%B8%B8.png', '升级');this['mobileGameItem'] = _rayj, this['addItem'](_rayj);
    }['addItem'](pr90y_) {
      this['items']['push'](pr90y_), this['addChild'](pr90y_), this['updateMenu']();
    }['updateMenu']() {
      this['width'] = 0x0;let $ils = 0x0;for (let yr_p9 in this['items']) {
        let j9ry_ = this['items'][yr_p9];j9ry_ && j9ry_['visible'] && (this['width'] += j9ry_['width'] + this['spacing'], j9ry_['height'] > this['height'] && (this['height'] = j9ry_['height']), j9ry_['x'] = $ils + this['spacing'], $ils += j9ry_['width'] + this['spacing']);
      }this['width'] += this['spacing'], this['menuBackground']['width'] = this['width'], this['menuBackground']['height'] = this['height'], this['menuBackground']['update']();
    }['setConfig'](y_9j7r) {
      this['vipItem']['visible'] = y_9j7r['showVIP'], this['gongZhongHaoItem']['visible'] = y_9j7r['showGongZhongHao'], this['phoneItem']['visible'] = y_9j7r['showPhone'], this['realNameItem']['visible'] = y_9j7r['showRealName'], this['mobileGameItem']['visible'] = y_9j7r['showMobileGame'], this['updateMenu']();
    }
  }class _0iy9 {
    constructor(ov56dh, p$i0nl) {
      this['delay'] = ov56dh, this['callback'] = p$i0nl;
    }['start']() {
      Laya['timer']['once'](this['delay'], this, this['callback']);
    }['stop']() {
      Laya['timer']['clear'](this, this['callback']);
    }['reset']() {
      Laya['timer']['clear'](this, this['callback']);
    }['restart']() {
      this['start']();
    }
  }class d5ou {
    constructor(y7jra_, zec31) {
      this['moveEntryIcon'] = !0x1, this['spacing'] = 0xa, this['entryIconAlpha'] = 0.5, this['entryIconX'] = 0x0, this['entryIconY'] = 0x0, this['entryIconTouchStartX'] = 0x0, this['entryIconTouchStartY'] = 0x0, this['entryIconTouchStopX'] = 0x0, this['entryIconTouchStopY'] = 0x0, this['scaleNumer'] = kr_ja['scale'], this['x'] = 0x0, this['y'] = 0x0, this['width'] = 0x0, this['height'] = 0x0, this['entryIconX'] = y7jra_, this['entryIconY'] = zec31;
    }['addChild'](st2$qf) {
      return Laya['stage']['addChild'](st2$qf);
    }['init'](o65dwv) {
      let cja7k8 = this;this['hideMenuTimer'] = new _0iy9(0xfa0, function () {
        cja7k8['hideMenu']();
      });let dob6 = Laya['stage']['width'],
          wz53ub = Laya['stage']['height'];this['x'] = 0x0, this['y'] = 0x0, this['width'] = dob6, this['height'] = wz53ub;let mh4gx = new ob65dw('/sdk/assets/img/%E6%9B%B4%E5%A4%9A.png');this['entryIcon'] = mh4gx, mh4gx['width'] = 0x32 * this['scaleNumer'], mh4gx['height'] = 0x32 * this['scaleNumer'], mh4gx['x'] = null == this['entryIconX'] ? 0x0 : this['entryIconX'], mh4gx['y'] = null == this['entryIconY'] ? 0.25 * wz53ub : this['entryIconY'], mh4gx['init'](), mh4gx['alpha'] = this['entryIconAlpha'], mh4gx['mouseEnabled'] = !0x0, mh4gx['mouseThrough'] = !0x1, this['addChild'](mh4gx), mh4gx['mouseEnabled'] = !0x0, mh4gx['on'](Laya['Event']['MOUSE_DOWN'], this, this['entryIconStartMove']), mh4gx['on'](Laya['Event']['MOUSE_UP'], this, this['entryIconStopMove']), mh4gx['on'](Laya['Event']['CLICK'], this, this['entryIconTap']), this['showEntryIcon']();let d6ow5 = new ilnp$();this['menu'] = d6ow5, d6ow5['x'] = 0x64, d6ow5['y'] = 0x64, this['addChild'](d6ow5), o65dwv && this['updateMenuConfig'](o65dwv), this['updateMenuPosition'](), this['hideMenu'](), this['showEntryIcon'](), this['hideMenuTimer']['start'](), this['menu']['onClickItem'](function (a7rj_) {
        cja7k8['hideMenuTimer']['reset'](), cja7k8['hideMenuTimer']['start'](), cja7k8['clickMenuItemCallback'] && cja7k8['clickMenuItemCallback'](a7rj_);
      });
    }['onClickMenuItem'](mv6x) {
      this['clickMenuItemCallback'] = mv6x;
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
    }['entryIconTap'](obu3) {
      if (obu3['stopPropagation'](), this['hideMenuTimer']['reset'](), this['hideMenuTimer']['start'](), this['moveEntryIcon']) {
        let lf$tsq = this['entryIconTouchStopX'] - this['entryIconTouchStartX'],
            xmghv4 = this['entryIconTouchStopY'] - this['entryIconTouchStartY'];lf$tsq < 0x5 && lf$tsq > -0x5 && xmghv4 < 0x5 && xmghv4 > -0x5 && (this['moveEntryIcon'] = !0x1);
      }if (this['moveEntryIcon']) return this['moveEntryIcon'] = !0x1, void console['log']('entry icon move');this['menu']['visible'] ? this['hideMenu']() : this['showMenu']();
    }['entryIconStartMove'](uzb3) {
      let i09lp = new Laya['Rectangle'](0x0, 0x0, this['width'], this['height']);this['entryIcon']['startDrag'](i09lp, !0x1, 0x64), this['entryIcon']['on'](Laya['Event']['MOUSE_MOVE'], this, this['entryIconOnMove']), this['showEntryIcon'](), this['hideMenuTimer']['stop']();var wbou35 = uzb3['touches'];if (wbou35 && wbou35['length'] > 0x0) {
        var ny9i0 = wbou35[0x0];this['entryIconTouchStartX'] = ny9i0['stageX'], this['entryIconTouchStartY'] = ny9i0['stageY'];
      }
    }['entryIconStopMove'](sltn$) {
      this['entryIcon']['off'](Laya['Event']['MOUSE_MOVE'], this, this['entryIconOnMove']), this['entryIcon']['x'] > this['width'] / 0x2 ? this['entryIcon']['x'] = this['width'] - this['entryIcon']['width'] : this['entryIcon']['x'] = 0x0, this['updateMenuPosition']();
    }['entryIconOnMove'](z8ke1c) {
      this['updateMenuPosition'](), this['moveEntryIcon'] = !0x0;var qlsf$t = z8ke1c['touches'];if (qlsf$t && qlsf$t['length'] > 0x0) {
        var crka = qlsf$t[0x0];this['entryIconTouchStopX'] = crka['stageX'], this['entryIconTouchStopY'] = crka['stageY'];
      }
    }['updateMenuConfig'](uze1b3) {
      this['menu'] && this['menu']['setConfig'](uze1b3);
    }
  }class nl$its {
    constructor() {}['init'](o5d6bw) {
      o5d6bw['cxCdnHost'] && (kr_ja['cdnHost'] = o5d6bw['cxCdnHost']), this['stage'] = o5d6bw['stage'], this['uiContainer'] = new d5ou(o5d6bw['entryIconX'], o5d6bw['entryIconY']);
    }['updateConfig'](l90i) {
      this['showConfig'] = l90i, this['uiContainer']['updateMenuConfig'](l90i);
    }['showMenu']() {
      this['uiContainer']['init'](this['showConfig']);
    }['onClickItem'](buw3) {
      this['uiContainer']['onClickMenuItem'](buw3);
    }
  }return console['log'](' window.CXUI'), window['CXUI'] = nl$its;
}();