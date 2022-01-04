var wwnfzej = function () {
  'use strict';

  class omq6s {
    constructor() {}
  }omq6s['scale'] = 1.7, omq6s['cdnHost'] = 'https://cdn.cxgame.net';class m4ph6q extends Laya['Sprite'] {
    constructor(mqh) {
      super(), this['path'] = mqh;
    }get ['baseUrl']() {
      return omq6s['cdnHost'];
    }['init']() {
      Laya['version']['startsWith']('1.') ? this['loadImage'](this['baseUrl'] + this['path'], 0x0, 0x0, this['width'], this['height'], Laya['Handler']['create'](this, this['onImageLoaded'])) : this['loadImage'](this['baseUrl'] + this['path'], Laya['Handler']['create'](this, this['onImageLoaded']));
    }['onImageLoaded']() {}
  }class bxkyrd extends Laya['Sprite'] {
    constructor() {
      super(), this['bgColor'] = '0xff0000', this['alpha'] = 0.1;
    }['update']() {
      this['graphics']['drawCircle'](this['width'] / 0x2, this['height'] / 0x2, this['width'] / 0x2, this['bgColor']);
    }
  }class zjfnw extends Laya['Sprite'] {
    constructor(yxva) {
      super(), this['path'] = yxva;
    }['init']() {
      let z273i = new bxkyrd();z273i['width'] = this['width'], z273i['height'] = this['height'], z273i['bgColor'] = '#f2f2f2', z273i['alpha'] = this['alpha'], z273i['update'](), this['addChild'](z273i);let ef1w = new m4ph6q(this['path']);ef1w['width'] = this['width'], ef1w['height'] = this['height'], ef1w['init'](), this['addChild'](ef1w);
    }
  }class nzf extends Laya['Sprite'] {
    constructor(uh0t5, v9ly$a) {
      super(), this['scaleNumer'] = omq6s['scale'], this['path'] = uh0t5, this['itemName'] = v9ly$a, this['init']();
    }['init']() {
      this['width'] = 0x32 * this['scaleNumer'], this['height'] = 0x32 * this['scaleNumer'];let ph8u0t = new m4ph6q(this['path']);ph8u0t['width'] = 0x1e * this['scaleNumer'], ph8u0t['height'] = 0x1e * this['scaleNumer'], ph8u0t['pivotX'] = ph8u0t['width'] / 0x2, ph8u0t['x'] = this['width'] / 0x2, ph8u0t['y'] = 0x4 * this['scaleNumer'], ph8u0t['init'](), this['addChild'](ph8u0t);var u5t8 = new Laya['Label']();u5t8['y'] = 0x23 * this['scaleNumer'], u5t8['width'] = this['width'], u5t8['text'] = this['itemName'], u5t8['fontSize'] = 0xc * this['scaleNumer'], u5t8['color'] = '#9F9F9F', u5t8['align'] = Laya['Stage']['ALIGN_CENTER'], u5t8['valign'] = Laya['Stage']['ALIGN_MIDDLE'], this['addChild'](u5t8);
    }
  }class nfwosj extends Laya['Sprite'] {
    constructor() {
      super(), this['color'] = '#f2f2f2', this['alpha'] = 0x1;
    }['update']() {
      this['graphics']['clear'](), this['graphics']['drawRect'](this['height'] / 0x2, 0x0, this['width'] - this['height'], this['height'], this['color']), this['graphics']['drawPie'](this['height'] / 0x2, this['height'] / 0x2, this['height'] / 0x2, 0x5a, 0x10e, this['color']), this['graphics']['drawPie'](this['width'] - this['height'] / 0x2, this['height'] / 0x2, this['height'] / 0x2, 0x10e, 0x5a, this['color']);
    }
  }class grxb extends Laya['Sprite'] {
    constructor() {
      super(), this['items'] = [], this['spacing'] = 0xa, this['init']();
    }['onClickItem'](onsmjw) {
      this['onClickItemCallback'] = onsmjw;for (let g5c0t8 in this['items']) {
        let ydarkx = this['items'][g5c0t8];function w1ze(mnwsq) {
          return function (jnowsf) {
            jnowsf['stopPropagation'](), this['onClickItemCallback'](mnwsq['itemName']);
          };
        }ydarkx['mouseEnabled'] = !0x0, ydarkx['on'](Laya['Event']['CLICK'], this, w1ze(ydarkx));
      }
    }['init']() {
      this['width'] = this['spacing'], this['height'] = 0x0, this['menuBackground'] = new nfwosj(), this['addChild'](this['menuBackground']);let p6huq = new nzf('/sdk/assets/img/%E7%A4%BC%E5%8C%85.png', 'VIP');this['vipItem'] = p6huq, this['addItem'](p6huq);let wnoj = new nzf('/sdk/assets/img/%E5%85%AC%E4%BC%97%E5%8F%B7.png', '公众号');this['gongZhongHaoItem'] = wnoj, this['addItem'](wnoj);let $yvax9 = new nzf('/sdk/assets/img/%E6%9C%8D%E5%8A%A1%E8%AF%84%E4%BB%B7-%E5%AE%A2%E6%9C%8D.png', '客服');this['serviceItem'] = $yvax9, this['addItem']($yvax9);let mq4no = new nzf('/sdk/assets/img/%E6%89%8B%E6%9C%BA.png', '手机');this['phoneItem'] = mq4no, this['addItem'](mq4no);let gxdrk = new nzf('/sdk/assets/img/%E5%AE%9E%E5%90%8D.png', '实名');this['realNameItem'] = gxdrk, this['addItem'](gxdrk);let uq46p = new nzf('/sdk/assets/img/%E6%89%8B%E6%B8%B8.png', '升级');this['mobileGameItem'] = uq46p, this['addItem'](uq46p);
    }['addItem'](z1fjwe) {
      this['items']['push'](z1fjwe), this['addChild'](z1fjwe), this['updateMenu']();
    }['updateMenu']() {
      this['width'] = 0x0;let h5t8 = 0x0;for (let l$9v_a in this['items']) {
        let ph8 = this['items'][l$9v_a];ph8 && ph8['visible'] && (this['width'] += ph8['width'] + this['spacing'], ph8['height'] > this['height'] && (this['height'] = ph8['height']), ph8['x'] = h5t8 + this['spacing'], h5t8 += ph8['width'] + this['spacing']);
      }this['width'] += this['spacing'], this['menuBackground']['width'] = this['width'], this['menuBackground']['height'] = this['height'], this['menuBackground']['update']();
    }['setConfig'](ejnw) {
      this['vipItem']['visible'] = ejnw['showVIP'], this['gongZhongHaoItem']['visible'] = ejnw['showGongZhongHao'], this['phoneItem']['visible'] = ejnw['showPhone'], this['realNameItem']['visible'] = ejnw['showRealName'], this['mobileGameItem']['visible'] = ejnw['showMobileGame'], this['updateMenu']();
    }
  }class yadkx {
    constructor(e31zf2, hpq4u6) {
      this['delay'] = e31zf2, this['callback'] = hpq4u6;
    }['start']() {
      Laya['timer']['once'](this['delay'], this, this['callback']);
    }['stop']() {
      Laya['timer']['clear'](this, this['callback']);
    }['reset']() {
      Laya['timer']['clear'](this, this['callback']);
    }['restart']() {
      this['start']();
    }
  }class t5h8 {
    constructor(jnoms, gkdcr) {
      this['moveEntryIcon'] = !0x1, this['spacing'] = 0xa, this['entryIconAlpha'] = 0.5, this['entryIconX'] = 0x0, this['entryIconY'] = 0x0, this['entryIconTouchStartX'] = 0x0, this['entryIconTouchStartY'] = 0x0, this['entryIconTouchStopX'] = 0x0, this['entryIconTouchStopY'] = 0x0, this['scaleNumer'] = omq6s['scale'], this['x'] = 0x0, this['y'] = 0x0, this['width'] = 0x0, this['height'] = 0x0, this['entryIconX'] = jnoms, this['entryIconY'] = gkdcr;
    }['addChild'](gbxk) {
      return Laya['stage']['addChild'](gbxk);
    }['init'](wfons) {
      let xv$a = this;this['hideMenuTimer'] = new yadkx(0xfa0, function () {
        xv$a['hideMenu']();
      });let x$9a = Laya['stage']['width'],
          wsofn = Laya['stage']['height'];this['x'] = 0x0, this['y'] = 0x0, this['width'] = x$9a, this['height'] = wsofn;let pu6t4 = new zjfnw('/sdk/assets/img/%E6%9B%B4%E5%A4%9A.png');this['entryIcon'] = pu6t4, pu6t4['width'] = 0x32 * this['scaleNumer'], pu6t4['height'] = 0x32 * this['scaleNumer'], pu6t4['x'] = null == this['entryIconX'] ? 0x0 : this['entryIconX'], pu6t4['y'] = null == this['entryIconY'] ? 0.25 * wsofn : this['entryIconY'], pu6t4['init'](), pu6t4['alpha'] = this['entryIconAlpha'], pu6t4['mouseEnabled'] = !0x0, pu6t4['mouseThrough'] = !0x1, this['addChild'](pu6t4), pu6t4['mouseEnabled'] = !0x0, pu6t4['on'](Laya['Event']['MOUSE_DOWN'], this, this['entryIconStartMove']), pu6t4['on'](Laya['Event']['MOUSE_UP'], this, this['entryIconStopMove']), pu6t4['on'](Laya['Event']['CLICK'], this, this['entryIconTap']), this['showEntryIcon']();let nofsw = new grxb();this['menu'] = nofsw, nofsw['x'] = 0x64, nofsw['y'] = 0x64, this['addChild'](nofsw), wfons && this['updateMenuConfig'](wfons), this['updateMenuPosition'](), this['hideMenu'](), this['showEntryIcon'](), this['hideMenuTimer']['start'](), this['menu']['onClickItem'](function (u08pt) {
        xv$a['hideMenuTimer']['reset'](), xv$a['hideMenuTimer']['start'](), xv$a['clickMenuItemCallback'] && xv$a['clickMenuItemCallback'](u08pt);
      });
    }['onClickMenuItem'](qsmnw) {
      this['clickMenuItemCallback'] = qsmnw;
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
    }['entryIconTap'](raxvy) {
      if (raxvy['stopPropagation'](), this['hideMenuTimer']['reset'](), this['hideMenuTimer']['start'](), this['moveEntryIcon']) {
        let t085 = this['entryIconTouchStopX'] - this['entryIconTouchStartX'],
            kxbyd = this['entryIconTouchStopY'] - this['entryIconTouchStartY'];t085 < 0x5 && t085 > -0x5 && kxbyd < 0x5 && kxbyd > -0x5 && (this['moveEntryIcon'] = !0x1);
      }if (this['moveEntryIcon']) return this['moveEntryIcon'] = !0x1, void console['log']('entry icon move');this['menu']['visible'] ? this['hideMenu']() : this['showMenu']();
    }['entryIconStartMove'](rvax$y) {
      let u4h6q = new Laya['Rectangle'](0x0, 0x0, this['width'], this['height']);this['entryIcon']['startDrag'](u4h6q, !0x1, 0x64), this['entryIcon']['on'](Laya['Event']['MOUSE_MOVE'], this, this['entryIconOnMove']), this['showEntryIcon'](), this['hideMenuTimer']['stop']();var gck5 = rvax$y['touches'];if (gck5 && gck5['length'] > 0x0) {
        var fzej31 = gck5[0x0];this['entryIconTouchStartX'] = fzej31['stageX'], this['entryIconTouchStartY'] = fzej31['stageY'];
      }
    }['entryIconStopMove'](gb85kc) {
      this['entryIcon']['off'](Laya['Event']['MOUSE_MOVE'], this, this['entryIconOnMove']), this['entryIcon']['x'] > this['width'] / 0x2 ? this['entryIcon']['x'] = this['width'] - this['entryIcon']['width'] : this['entryIcon']['x'] = 0x0, this['updateMenuPosition']();
    }['entryIconOnMove'](lvy$) {
      this['updateMenuPosition'](), this['moveEntryIcon'] = !0x0;var rax$yd = lvy$['touches'];if (rax$yd && rax$yd['length'] > 0x0) {
        var kgcd = rax$yd[0x0];this['entryIconTouchStopX'] = kgcd['stageX'], this['entryIconTouchStopY'] = kgcd['stageY'];
      }
    }['updateMenuConfig'](xyrkb) {
      this['menu'] && this['menu']['setConfig'](xyrkb);
    }
  }class x$y9 {
    constructor() {}['init'](cbkg85) {
      cbkg85['cxCdnHost'] && (omq6s['cdnHost'] = cbkg85['cxCdnHost']), this['stage'] = cbkg85['stage'], this['uiContainer'] = new t5h8(cbkg85['entryIconX'], cbkg85['entryIconY']);
    }['updateConfig'](c0g) {
      this['showConfig'] = c0g, this['uiContainer']['updateMenuConfig'](c0g);
    }['showMenu']() {
      this['uiContainer']['init'](this['showConfig']);
    }['onClickItem'](lyva$) {
      this['uiContainer']['onClickMenuItem'](lyva$);
    }
  }return console['log'](' window.CXUI'), window['CXUI'] = x$y9;
}();