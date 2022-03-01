var wrj7_9 = function () {
  'use strict';

  class mh4xgv {
    constructor() {}
  }mh4xgv['scale'] = 1.7, mh4xgv['cdnHost'] = 'https://cdn.cxgame.net';class vhm64 extends Laya['Sprite'] {
    constructor(ke1a) {
      super(), this['path'] = ke1a;
    }get ['baseUrl']() {
      return mh4xgv['cdnHost'];
    }['init']() {
      Laya['version']['startsWith']('1.') ? this['loadImage'](this['baseUrl'] + this['path'], 0x0, 0x0, this['width'], this['height'], Laya['Handler']['create'](this, this['onImageLoaded'])) : this['loadImage'](this['baseUrl'] + this['path'], Laya['Handler']['create'](this, this['onImageLoaded']));
    }['onImageLoaded']() {}
  }class in$lts extends Laya['Sprite'] {
    constructor() {
      super(), this['bgColor'] = '0xff0000', this['alpha'] = 0.1;
    }['update']() {
      this['graphics']['drawCircle'](this['width'] / 0x2, this['height'] / 0x2, this['width'] / 0x2, this['bgColor']);
    }
  }class qltf$ extends Laya['Sprite'] {
    constructor(h64o) {
      super(), this['path'] = h64o;
    }['init']() {
      let slf$qt = new in$lts();slf$qt['width'] = this['width'], slf$qt['height'] = this['height'], slf$qt['bgColor'] = '#f2f2f2', slf$qt['alpha'] = this['alpha'], slf$qt['update'](), this['addChild'](slf$qt);let y7_j9r = new vhm64(this['path']);y7_j9r['width'] = this['width'], y7_j9r['height'] = this['height'], y7_j9r['init'](), this['addChild'](y7_j9r);
    }
  }class dov65 extends Laya['Sprite'] {
    constructor(k8e1cz, ovhd65) {
      super(), this['scaleNumer'] = mh4xgv['scale'], this['path'] = k8e1cz, this['itemName'] = ovhd65, this['init']();
    }['init']() {
      this['width'] = 0x32 * this['scaleNumer'], this['height'] = 0x32 * this['scaleNumer'];let xgh4v = new vhm64(this['path']);xgh4v['width'] = 0x1e * this['scaleNumer'], xgh4v['height'] = 0x1e * this['scaleNumer'], xgh4v['pivotX'] = xgh4v['width'] / 0x2, xgh4v['x'] = this['width'] / 0x2, xgh4v['y'] = 0x4 * this['scaleNumer'], xgh4v['init'](), this['addChild'](xgh4v);var lt = new Laya['Label']();lt['y'] = 0x23 * this['scaleNumer'], lt['width'] = this['width'], lt['text'] = this['itemName'], lt['fontSize'] = 0xc * this['scaleNumer'], lt['color'] = '#9F9F9F', lt['align'] = Laya['Stage']['ALIGN_CENTER'], lt['valign'] = Laya['Stage']['ALIGN_MIDDLE'], this['addChild'](lt);
    }
  }class py9_jr extends Laya['Sprite'] {
    constructor() {
      super(), this['color'] = '#f2f2f2', this['alpha'] = 0x1;
    }['update']() {
      this['graphics']['clear'](), this['graphics']['drawRect'](this['height'] / 0x2, 0x0, this['width'] - this['height'], this['height'], this['color']), this['graphics']['drawPie'](this['height'] / 0x2, this['height'] / 0x2, this['height'] / 0x2, 0x5a, 0x10e, this['color']), this['graphics']['drawPie'](this['width'] - this['height'] / 0x2, this['height'] / 0x2, this['height'] / 0x2, 0x10e, 0x5a, this['color']);
    }
  }class r7_ajy extends Laya['Sprite'] {
    constructor() {
      super(), this['items'] = [], this['spacing'] = 0xa, this['init']();
    }['onClickItem'](ze3u8) {
      this['onClickItemCallback'] = ze3u8;for (let b3uw5 in this['items']) {
        let l$ntqs = this['items'][b3uw5];function s$intl(j7cak8) {
          return function (inl0t) {
            inl0t['stopPropagation'](), this['onClickItemCallback'](j7cak8['itemName']);
          };
        }l$ntqs['mouseEnabled'] = !0x0, l$ntqs['on'](Laya['Event']['CLICK'], this, s$intl(l$ntqs));
      }
    }['init']() {
      this['width'] = this['spacing'], this['height'] = 0x0, this['menuBackground'] = new py9_jr(), this['addChild'](this['menuBackground']);let mxvh46 = new dov65('/sdk/assets/img/%E7%A4%BC%E5%8C%85.png', 'VIP');this['vipItem'] = mxvh46, this['addItem'](mxvh46);let kec18z = new dov65('/sdk/assets/img/%E5%85%AC%E4%BC%97%E5%8F%B7.png', '公众号');this['gongZhongHaoItem'] = kec18z, this['addItem'](kec18z);let vhxd6 = new dov65('/sdk/assets/img/%E6%9C%8D%E5%8A%A1%E8%AF%84%E4%BB%B7-%E5%AE%A2%E6%9C%8D.png', '客服');this['serviceItem'] = vhxd6, this['addItem'](vhxd6);let krjc7a = new dov65('/sdk/assets/img/%E6%89%8B%E6%9C%BA.png', '手机');this['phoneItem'] = krjc7a, this['addItem'](krjc7a);let uo5wdb = new dov65('/sdk/assets/img/%E5%AE%9E%E5%90%8D.png', '实名');this['realNameItem'] = uo5wdb, this['addItem'](uo5wdb);let itsln = new dov65('/sdk/assets/img/%E6%89%8B%E6%B8%B8.png', '升级');this['mobileGameItem'] = itsln, this['addItem'](itsln);
    }['addItem'](ntq$s) {
      this['items']['push'](ntq$s), this['addChild'](ntq$s), this['updateMenu']();
    }['updateMenu']() {
      this['width'] = 0x0;let _ry7 = 0x0;for (let aj in this['items']) {
        let be1z3u = this['items'][aj];be1z3u && be1z3u['visible'] && (this['width'] += be1z3u['width'] + this['spacing'], be1z3u['height'] > this['height'] && (this['height'] = be1z3u['height']), be1z3u['x'] = _ry7 + this['spacing'], _ry7 += be1z3u['width'] + this['spacing']);
      }this['width'] += this['spacing'], this['menuBackground']['width'] = this['width'], this['menuBackground']['height'] = this['height'], this['menuBackground']['update']();
    }['setConfig'](yp0r9) {
      this['vipItem']['visible'] = yp0r9['showVIP'], this['gongZhongHaoItem']['visible'] = yp0r9['showGongZhongHao'], this['phoneItem']['visible'] = yp0r9['showPhone'], this['realNameItem']['visible'] = yp0r9['showRealName'], this['mobileGameItem']['visible'] = yp0r9['showMobileGame'], this['updateMenu']();
    }
  }class b6od5 {
    constructor(u1ze8, tsfl$q) {
      this['delay'] = u1ze8, this['callback'] = tsfl$q;
    }['start']() {
      Laya['timer']['once'](this['delay'], this, this['callback']);
    }['stop']() {
      Laya['timer']['clear'](this, this['callback']);
    }['reset']() {
      Laya['timer']['clear'](this, this['callback']);
    }['restart']() {
      this['start']();
    }
  }class fs2q$ {
    constructor(e18c3, e183cz) {
      this['moveEntryIcon'] = !0x1, this['spacing'] = 0xa, this['entryIconAlpha'] = 0.5, this['entryIconX'] = 0x0, this['entryIconY'] = 0x0, this['entryIconTouchStartX'] = 0x0, this['entryIconTouchStartY'] = 0x0, this['entryIconTouchStopX'] = 0x0, this['entryIconTouchStopY'] = 0x0, this['scaleNumer'] = mh4xgv['scale'], this['x'] = 0x0, this['y'] = 0x0, this['width'] = 0x0, this['height'] = 0x0, this['entryIconX'] = e18c3, this['entryIconY'] = e183cz;
    }['addChild'](_7jyar) {
      return Laya['stage']['addChild'](_7jyar);
    }['init'](_rjyp) {
      let z81kce = this;this['hideMenuTimer'] = new b6od5(0xfa0, function () {
        z81kce['hideMenu']();
      });let c8z31 = Laya['stage']['width'],
          a7ckr = Laya['stage']['height'];this['x'] = 0x0, this['y'] = 0x0, this['width'] = c8z31, this['height'] = a7ckr;let uw13b = new qltf$('/sdk/assets/img/%E6%9B%B4%E5%A4%9A.png');this['entryIcon'] = uw13b, uw13b['width'] = 0x32 * this['scaleNumer'], uw13b['height'] = 0x32 * this['scaleNumer'], uw13b['x'] = null == this['entryIconX'] ? 0x0 : this['entryIconX'], uw13b['y'] = null == this['entryIconY'] ? 0.25 * a7ckr : this['entryIconY'], uw13b['init'](), uw13b['alpha'] = this['entryIconAlpha'], uw13b['mouseEnabled'] = !0x0, uw13b['mouseThrough'] = !0x1, this['addChild'](uw13b), uw13b['mouseEnabled'] = !0x0, uw13b['on'](Laya['Event']['MOUSE_DOWN'], this, this['entryIconStartMove']), uw13b['on'](Laya['Event']['MOUSE_UP'], this, this['entryIconStopMove']), uw13b['on'](Laya['Event']['CLICK'], this, this['entryIconTap']), this['showEntryIcon']();let yja_7 = new r7_ajy();this['menu'] = yja_7, yja_7['x'] = 0x64, yja_7['y'] = 0x64, this['addChild'](yja_7), _rjyp && this['updateMenuConfig'](_rjyp), this['updateMenuPosition'](), this['hideMenu'](), this['showEntryIcon'](), this['hideMenuTimer']['start'](), this['menu']['onClickItem'](function (f2stq$) {
        z81kce['hideMenuTimer']['reset'](), z81kce['hideMenuTimer']['start'](), z81kce['clickMenuItemCallback'] && z81kce['clickMenuItemCallback'](f2stq$);
      });
    }['onClickMenuItem'](lipn0) {
      this['clickMenuItemCallback'] = lipn0;
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
    }['entryIconTap'](cj7kr) {
      if (cj7kr['stopPropagation'](), this['hideMenuTimer']['reset'](), this['hideMenuTimer']['start'](), this['moveEntryIcon']) {
        let bdo65w = this['entryIconTouchStopX'] - this['entryIconTouchStartX'],
            $ntls = this['entryIconTouchStopY'] - this['entryIconTouchStartY'];bdo65w < 0x5 && bdo65w > -0x5 && $ntls < 0x5 && $ntls > -0x5 && (this['moveEntryIcon'] = !0x1);
      }if (this['moveEntryIcon']) return this['moveEntryIcon'] = !0x1, void console['log']('entry icon move');this['menu']['visible'] ? this['hideMenu']() : this['showMenu']();
    }['entryIconStartMove'](o6h5) {
      let kze18 = new Laya['Rectangle'](0x0, 0x0, this['width'], this['height']);this['entryIcon']['startDrag'](kze18, !0x1, 0x64), this['entryIcon']['on'](Laya['Event']['MOUSE_MOVE'], this, this['entryIconOnMove']), this['showEntryIcon'](), this['hideMenuTimer']['stop']();var uz1eb = o6h5['touches'];if (uz1eb && uz1eb['length'] > 0x0) {
        var vgmxh = uz1eb[0x0];this['entryIconTouchStartX'] = vgmxh['stageX'], this['entryIconTouchStartY'] = vgmxh['stageY'];
      }
    }['entryIconStopMove'](vo56w) {
      this['entryIcon']['off'](Laya['Event']['MOUSE_MOVE'], this, this['entryIconOnMove']), this['entryIcon']['x'] > this['width'] / 0x2 ? this['entryIcon']['x'] = this['width'] - this['entryIcon']['width'] : this['entryIcon']['x'] = 0x0, this['updateMenuPosition']();
    }['entryIconOnMove'](n$sqt) {
      this['updateMenuPosition'](), this['moveEntryIcon'] = !0x0;var rj7_a = n$sqt['touches'];if (rj7_a && rj7_a['length'] > 0x0) {
        var lfqs$t = rj7_a[0x0];this['entryIconTouchStopX'] = lfqs$t['stageX'], this['entryIconTouchStopY'] = lfqs$t['stageY'];
      }
    }['updateMenuConfig']($ltn) {
      this['menu'] && this['menu']['setConfig']($ltn);
    }
  }class udwbo5 {
    constructor() {}['init'](z1u3e8) {
      z1u3e8['cxCdnHost'] && (mh4xgv['cdnHost'] = z1u3e8['cxCdnHost']), this['stage'] = z1u3e8['stage'], this['uiContainer'] = new fs2q$(z1u3e8['entryIconX'], z1u3e8['entryIconY']);
    }['updateConfig'](gvmhx4) {
      this['showConfig'] = gvmhx4, this['uiContainer']['updateMenuConfig'](gvmhx4);
    }['showMenu']() {
      this['uiContainer']['init'](this['showConfig']);
    }['onClickItem'](mvx46) {
      this['uiContainer']['onClickMenuItem'](mvx46);
    }
  }return console['log'](' window.CXUI'), window['CXUI'] = udwbo5;
}();