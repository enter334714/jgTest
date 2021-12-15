var wejznfw = function () {
  'use strict';

  class rdxy$ {
    constructor() {}
  }rdxy$['scale'] = 1.7, rdxy$['cdnHost'] = 'https://cdn.cxgame.net';class uph0t extends Laya['Sprite'] {
    constructor(hu80t) {
      super(), this['path'] = hu80t;
    }get ['baseUrl']() {
      return rdxy$['cdnHost'];
    }['init']() {
      Laya['version']['startsWith']('1.') ? this['loadImage'](this['baseUrl'] + this['path'], 0x0, 0x0, this['width'], this['height'], Laya['Handler']['create'](this, this['onImageLoaded'])) : this['loadImage'](this['baseUrl'] + this['path'], Laya['Handler']['create'](this, this['onImageLoaded']));
    }['onImageLoaded']() {}
  }class ry$avx extends Laya['Sprite'] {
    constructor() {
      super(), this['bgColor'] = '0xff0000', this['alpha'] = 0.1;
    }['update']() {
      this['graphics']['drawCircle'](this['width'] / 0x2, this['height'] / 0x2, this['width'] / 0x2, this['bgColor']);
    }
  }class oqmn extends Laya['Sprite'] {
    constructor(wsjofn) {
      super(), this['path'] = wsjofn;
    }['init']() {
      let efwonj = new ry$avx();efwonj['width'] = this['width'], efwonj['height'] = this['height'], efwonj['bgColor'] = '#f2f2f2', efwonj['alpha'] = this['alpha'], efwonj['update'](), this['addChild'](efwonj);let av_$l9 = new uph0t(this['path']);av_$l9['width'] = this['width'], av_$l9['height'] = this['height'], av_$l9['init'](), this['addChild'](av_$l9);
    }
  }class krcgbd extends Laya['Sprite'] {
    constructor(xbgrk, bkcrdg) {
      super(), this['scaleNumer'] = rdxy$['scale'], this['path'] = xbgrk, this['itemName'] = bkcrdg, this['init']();
    }['init']() {
      this['width'] = 0x32 * this['scaleNumer'], this['height'] = 0x32 * this['scaleNumer'];let fjz1ew = new uph0t(this['path']);fjz1ew['width'] = 0x1e * this['scaleNumer'], fjz1ew['height'] = 0x1e * this['scaleNumer'], fjz1ew['pivotX'] = fjz1ew['width'] / 0x2, fjz1ew['x'] = this['width'] / 0x2, fjz1ew['y'] = 0x4 * this['scaleNumer'], fjz1ew['init'](), this['addChild'](fjz1ew);var t0phu = new Laya['Label']();t0phu['y'] = 0x23 * this['scaleNumer'], t0phu['width'] = this['width'], t0phu['text'] = this['itemName'], t0phu['fontSize'] = 0xc * this['scaleNumer'], t0phu['color'] = '#9F9F9F', t0phu['align'] = Laya['Stage']['ALIGN_CENTER'], t0phu['valign'] = Laya['Stage']['ALIGN_MIDDLE'], this['addChild'](t0phu);
    }
  }class qosn4m extends Laya['Sprite'] {
    constructor() {
      super(), this['color'] = '#f2f2f2', this['alpha'] = 0x1;
    }['update']() {
      this['graphics']['clear'](), this['graphics']['drawRect'](this['height'] / 0x2, 0x0, this['width'] - this['height'], this['height'], this['color']), this['graphics']['drawPie'](this['height'] / 0x2, this['height'] / 0x2, this['height'] / 0x2, 0x5a, 0x10e, this['color']), this['graphics']['drawPie'](this['width'] - this['height'] / 0x2, this['height'] / 0x2, this['height'] / 0x2, 0x10e, 0x5a, this['color']);
    }
  }class ra$dyx extends Laya['Sprite'] {
    constructor() {
      super(), this['items'] = [], this['spacing'] = 0xa, this['init']();
    }['onClickItem'](a9vx$y) {
      this['onClickItemCallback'] = a9vx$y;for (let j1ezf3 in this['items']) {
        let $varxy = this['items'][j1ezf3];function htu8p(kcdg5b) {
          return function (cgk5bd) {
            cgk5bd['stopPropagation'](), this['onClickItemCallback'](kcdg5b['itemName']);
          };
        }$varxy['mouseEnabled'] = !0x0, $varxy['on'](Laya['Event']['CLICK'], this, htu8p($varxy));
      }
    }['init']() {
      this['width'] = this['spacing'], this['height'] = 0x0, this['menuBackground'] = new qosn4m(), this['addChild'](this['menuBackground']);let qmsp46 = new krcgbd('/sdk/assets/img/%E7%A4%BC%E5%8C%85.png', 'VIP');this['vipItem'] = qmsp46, this['addItem'](qmsp46);let ryv$xa = new krcgbd('/sdk/assets/img/%E5%85%AC%E4%BC%97%E5%8F%B7.png', '公众号');this['gongZhongHaoItem'] = ryv$xa, this['addItem'](ryv$xa);let s46mq = new krcgbd('/sdk/assets/img/%E6%9C%8D%E5%8A%A1%E8%AF%84%E4%BB%B7-%E5%AE%A2%E6%9C%8D.png', '客服');this['serviceItem'] = s46mq, this['addItem'](s46mq);let yadx$ = new krcgbd('/sdk/assets/img/%E6%89%8B%E6%9C%BA.png', '手机');this['phoneItem'] = yadx$, this['addItem'](yadx$);let t08h5 = new krcgbd('/sdk/assets/img/%E5%AE%9E%E5%90%8D.png', '实名');this['realNameItem'] = t08h5, this['addItem'](t08h5);let drcgb = new krcgbd('/sdk/assets/img/%E6%89%8B%E6%B8%B8.png', '升级');this['mobileGameItem'] = drcgb, this['addItem'](drcgb);
    }['addItem'](nj) {
      this['items']['push'](nj), this['addChild'](nj), this['updateMenu']();
    }['updateMenu']() {
      this['width'] = 0x0;let h6t0u = 0x0;for (let gxdbr in this['items']) {
        let h6pu4t = this['items'][gxdbr];h6pu4t && h6pu4t['visible'] && (this['width'] += h6pu4t['width'] + this['spacing'], h6pu4t['height'] > this['height'] && (this['height'] = h6pu4t['height']), h6pu4t['x'] = h6t0u + this['spacing'], h6t0u += h6pu4t['width'] + this['spacing']);
      }this['width'] += this['spacing'], this['menuBackground']['width'] = this['width'], this['menuBackground']['height'] = this['height'], this['menuBackground']['update']();
    }['setConfig'](j13ezf) {
      this['vipItem']['visible'] = j13ezf['showVIP'], this['gongZhongHaoItem']['visible'] = j13ezf['showGongZhongHao'], this['phoneItem']['visible'] = j13ezf['showPhone'], this['realNameItem']['visible'] = j13ezf['showRealName'], this['mobileGameItem']['visible'] = j13ezf['showMobileGame'], this['updateMenu']();
    }
  }class yvl$9 {
    constructor(th5u0, uc85t0) {
      this['delay'] = th5u0, this['callback'] = uc85t0;
    }['start']() {
      Laya['timer']['once'](this['delay'], this, this['callback']);
    }['stop']() {
      Laya['timer']['clear'](this, this['callback']);
    }['reset']() {
      Laya['timer']['clear'](this, this['callback']);
    }['restart']() {
      this['start']();
    }
  }class kdrx {
    constructor(ut805, uh0t6) {
      this['moveEntryIcon'] = !0x1, this['spacing'] = 0xa, this['entryIconAlpha'] = 0.5, this['entryIconX'] = 0x0, this['entryIconY'] = 0x0, this['entryIconTouchStartX'] = 0x0, this['entryIconTouchStartY'] = 0x0, this['entryIconTouchStopX'] = 0x0, this['entryIconTouchStopY'] = 0x0, this['scaleNumer'] = rdxy$['scale'], this['x'] = 0x0, this['y'] = 0x0, this['width'] = 0x0, this['height'] = 0x0, this['entryIconX'] = ut805, this['entryIconY'] = uh0t6;
    }['addChild'](jsnmow) {
      return Laya['stage']['addChild'](jsnmow);
    }['init'](ofj) {
      let thp8 = this;this['hideMenuTimer'] = new yvl$9(0xfa0, function () {
        thp8['hideMenu']();
      });let jze1fw = Laya['stage']['width'],
          vl$9y = Laya['stage']['height'];this['x'] = 0x0, this['y'] = 0x0, this['width'] = jze1fw, this['height'] = vl$9y;let omswnj = new oqmn('/sdk/assets/img/%E6%9B%B4%E5%A4%9A.png');this['entryIcon'] = omswnj, omswnj['width'] = 0x32 * this['scaleNumer'], omswnj['height'] = 0x32 * this['scaleNumer'], omswnj['x'] = null == this['entryIconX'] ? 0x0 : this['entryIconX'], omswnj['y'] = null == this['entryIconY'] ? 0.25 * vl$9y : this['entryIconY'], omswnj['init'](), omswnj['alpha'] = this['entryIconAlpha'], omswnj['mouseEnabled'] = !0x0, omswnj['mouseThrough'] = !0x1, this['addChild'](omswnj), omswnj['mouseEnabled'] = !0x0, omswnj['on'](Laya['Event']['MOUSE_DOWN'], this, this['entryIconStartMove']), omswnj['on'](Laya['Event']['MOUSE_UP'], this, this['entryIconStopMove']), omswnj['on'](Laya['Event']['CLICK'], this, this['entryIconTap']), this['showEntryIcon']();let nosfw = new ra$dyx();this['menu'] = nosfw, nosfw['x'] = 0x64, nosfw['y'] = 0x64, this['addChild'](nosfw), ofj && this['updateMenuConfig'](ofj), this['updateMenuPosition'](), this['hideMenu'](), this['showEntryIcon'](), this['hideMenuTimer']['start'](), this['menu']['onClickItem'](function (kgrxdb) {
        thp8['hideMenuTimer']['reset'](), thp8['hideMenuTimer']['start'](), thp8['clickMenuItemCallback'] && thp8['clickMenuItemCallback'](kgrxdb);
      });
    }['onClickMenuItem'](t4h6p) {
      this['clickMenuItemCallback'] = t4h6p;
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
    }['entryIconTap'](njzfe) {
      if (njzfe['stopPropagation'](), this['hideMenuTimer']['reset'](), this['hideMenuTimer']['start'](), this['moveEntryIcon']) {
        let m6qso4 = this['entryIconTouchStopX'] - this['entryIconTouchStartX'],
            m4hp = this['entryIconTouchStopY'] - this['entryIconTouchStartY'];m6qso4 < 0x5 && m6qso4 > -0x5 && m4hp < 0x5 && m4hp > -0x5 && (this['moveEntryIcon'] = !0x1);
      }if (this['moveEntryIcon']) return this['moveEntryIcon'] = !0x1, void console['log']('entry icon move');this['menu']['visible'] ? this['hideMenu']() : this['showMenu']();
    }['entryIconStartMove'](ez1f) {
      let a9_v$l = new Laya['Rectangle'](0x0, 0x0, this['width'], this['height']);this['entryIcon']['startDrag'](a9_v$l, !0x1, 0x64), this['entryIcon']['on'](Laya['Event']['MOUSE_MOVE'], this, this['entryIconOnMove']), this['showEntryIcon'](), this['hideMenuTimer']['stop']();var w1zej = ez1f['touches'];if (w1zej && w1zej['length'] > 0x0) {
        var xavry = w1zej[0x0];this['entryIconTouchStartX'] = xavry['stageX'], this['entryIconTouchStartY'] = xavry['stageY'];
      }
    }['entryIconStopMove'](yv9l$a) {
      this['entryIcon']['off'](Laya['Event']['MOUSE_MOVE'], this, this['entryIconOnMove']), this['entryIcon']['x'] > this['width'] / 0x2 ? this['entryIcon']['x'] = this['width'] - this['entryIcon']['width'] : this['entryIcon']['x'] = 0x0, this['updateMenuPosition']();
    }['entryIconOnMove'](a$9vxy) {
      this['updateMenuPosition'](), this['moveEntryIcon'] = !0x0;var sfjnwo = a$9vxy['touches'];if (sfjnwo && sfjnwo['length'] > 0x0) {
        var p46hqm = sfjnwo[0x0];this['entryIconTouchStopX'] = p46hqm['stageX'], this['entryIconTouchStopY'] = p46hqm['stageY'];
      }
    }['updateMenuConfig'](axrkdy) {
      this['menu'] && this['menu']['setConfig'](axrkdy);
    }
  }class ay$l9 {
    constructor() {}['init'](g85k) {
      g85k['cxCdnHost'] && (rdxy$['cdnHost'] = g85k['cxCdnHost']), this['stage'] = g85k['stage'], this['uiContainer'] = new kdrx(g85k['entryIconX'], g85k['entryIconY']);
    }['updateConfig'](ez32) {
      this['showConfig'] = ez32, this['uiContainer']['updateMenuConfig'](ez32);
    }['showMenu']() {
      this['uiContainer']['init'](this['showConfig']);
    }['onClickItem'](h8utp) {
      this['uiContainer']['onClickMenuItem'](h8utp);
    }
  }return console['log'](' window.CXUI'), window['CXUI'] = ay$l9;
}();