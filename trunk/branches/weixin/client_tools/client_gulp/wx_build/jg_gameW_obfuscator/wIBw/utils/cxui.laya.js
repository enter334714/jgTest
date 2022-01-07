var wkdyra = function () {
  'use strict';

  class arkdyx {
    constructor() {}
  }arkdyx['scale'] = 1.7, arkdyx['cdnHost'] = 'https://cdn.cxgame.net';class psm6q4 extends Laya['Sprite'] {
    constructor(rdyxak) {
      super(), this['path'] = rdyxak;
    }get ['baseUrl']() {
      return arkdyx['cdnHost'];
    }['init']() {
      Laya['version']['startsWith']('1.') ? this['loadImage'](this['baseUrl'] + this['path'], 0x0, 0x0, this['width'], this['height'], Laya['Handler']['create'](this, this['onImageLoaded'])) : this['loadImage'](this['baseUrl'] + this['path'], Laya['Handler']['create'](this, this['onImageLoaded']));
    }['onImageLoaded']() {}
  }class rdxykb extends Laya['Sprite'] {
    constructor() {
      super(), this['bgColor'] = '0xff0000', this['alpha'] = 0.1;
    }['update']() {
      this['graphics']['drawCircle'](this['width'] / 0x2, this['height'] / 0x2, this['width'] / 0x2, this['bgColor']);
    }
  }class soqnmw extends Laya['Sprite'] {
    constructor(_9lav$) {
      super(), this['path'] = _9lav$;
    }['init']() {
      let _$la = new rdxykb();_$la['width'] = this['width'], _$la['height'] = this['height'], _$la['bgColor'] = '#f2f2f2', _$la['alpha'] = this['alpha'], _$la['update'](), this['addChild'](_$la);let adkr = new psm6q4(this['path']);adkr['width'] = this['width'], adkr['height'] = this['height'], adkr['init'](), this['addChild'](adkr);
    }
  }class xar$v extends Laya['Sprite'] {
    constructor(t46hp, kbdxry) {
      super(), this['scaleNumer'] = arkdyx['scale'], this['path'] = t46hp, this['itemName'] = kbdxry, this['init']();
    }['init']() {
      this['width'] = 0x32 * this['scaleNumer'], this['height'] = 0x32 * this['scaleNumer'];let mqhp46 = new psm6q4(this['path']);mqhp46['width'] = 0x1e * this['scaleNumer'], mqhp46['height'] = 0x1e * this['scaleNumer'], mqhp46['pivotX'] = mqhp46['width'] / 0x2, mqhp46['x'] = this['width'] / 0x2, mqhp46['y'] = 0x4 * this['scaleNumer'], mqhp46['init'](), this['addChild'](mqhp46);var grdcbk = new Laya['Label']();grdcbk['y'] = 0x23 * this['scaleNumer'], grdcbk['width'] = this['width'], grdcbk['text'] = this['itemName'], grdcbk['fontSize'] = 0xc * this['scaleNumer'], grdcbk['color'] = '#9F9F9F', grdcbk['align'] = Laya['Stage']['ALIGN_CENTER'], grdcbk['valign'] = Laya['Stage']['ALIGN_MIDDLE'], this['addChild'](grdcbk);
    }
  }class e731 extends Laya['Sprite'] {
    constructor() {
      super(), this['color'] = '#f2f2f2', this['alpha'] = 0x1;
    }['update']() {
      this['graphics']['clear'](), this['graphics']['drawRect'](this['height'] / 0x2, 0x0, this['width'] - this['height'], this['height'], this['color']), this['graphics']['drawPie'](this['height'] / 0x2, this['height'] / 0x2, this['height'] / 0x2, 0x5a, 0x10e, this['color']), this['graphics']['drawPie'](this['width'] - this['height'] / 0x2, this['height'] / 0x2, this['height'] / 0x2, 0x10e, 0x5a, this['color']);
    }
  }class nejwf extends Laya['Sprite'] {
    constructor() {
      super(), this['items'] = [], this['spacing'] = 0xa, this['init']();
    }['onClickItem'](qup6h4) {
      this['onClickItemCallback'] = qup6h4;for (let kxbrdy in this['items']) {
        let jnoewf = this['items'][kxbrdy];function brkxd(f1je) {
          return function (cu85) {
            cu85['stopPropagation'](), this['onClickItemCallback'](f1je['itemName']);
          };
        }jnoewf['mouseEnabled'] = !0x0, jnoewf['on'](Laya['Event']['CLICK'], this, brkxd(jnoewf));
      }
    }['init']() {
      this['width'] = this['spacing'], this['height'] = 0x0, this['menuBackground'] = new e731(), this['addChild'](this['menuBackground']);let s4noqm = new xar$v('/sdk/assets/img/%E7%A4%BC%E5%8C%85.png', 'VIP');this['vipItem'] = s4noqm, this['addItem'](s4noqm);let q6s4mp = new xar$v('/sdk/assets/img/%E5%85%AC%E4%BC%97%E5%8F%B7.png', '公众号');this['gongZhongHaoItem'] = q6s4mp, this['addItem'](q6s4mp);let mon4q = new xar$v('/sdk/assets/img/%E6%9C%8D%E5%8A%A1%E8%AF%84%E4%BB%B7-%E5%AE%A2%E6%9C%8D.png', '客服');this['serviceItem'] = mon4q, this['addItem'](mon4q);let alv_9$ = new xar$v('/sdk/assets/img/%E6%89%8B%E6%9C%BA.png', '手机');this['phoneItem'] = alv_9$, this['addItem'](alv_9$);let d$ray = new xar$v('/sdk/assets/img/%E5%AE%9E%E5%90%8D.png', '实名');this['realNameItem'] = d$ray, this['addItem'](d$ray);let z7132 = new xar$v('/sdk/assets/img/%E6%89%8B%E6%B8%B8.png', '升级');this['mobileGameItem'] = z7132, this['addItem'](z7132);
    }['addItem'](x9$ayv) {
      this['items']['push'](x9$ayv), this['addChild'](x9$ayv), this['updateMenu']();
    }['updateMenu']() {
      this['width'] = 0x0;let t58uh = 0x0;for (let up4qh6 in this['items']) {
        let rbxyk = this['items'][up4qh6];rbxyk && rbxyk['visible'] && (this['width'] += rbxyk['width'] + this['spacing'], rbxyk['height'] > this['height'] && (this['height'] = rbxyk['height']), rbxyk['x'] = t58uh + this['spacing'], t58uh += rbxyk['width'] + this['spacing']);
      }this['width'] += this['spacing'], this['menuBackground']['width'] = this['width'], this['menuBackground']['height'] = this['height'], this['menuBackground']['update']();
    }['setConfig'](pm4h6) {
      this['vipItem']['visible'] = pm4h6['showVIP'], this['gongZhongHaoItem']['visible'] = pm4h6['showGongZhongHao'], this['phoneItem']['visible'] = pm4h6['showPhone'], this['realNameItem']['visible'] = pm4h6['showRealName'], this['mobileGameItem']['visible'] = pm4h6['showMobileGame'], this['updateMenu']();
    }
  }class q6u4ph {
    constructor(av9xy$, newojf) {
      this['delay'] = av9xy$, this['callback'] = newojf;
    }['start']() {
      Laya['timer']['once'](this['delay'], this, this['callback']);
    }['stop']() {
      Laya['timer']['clear'](this, this['callback']);
    }['reset']() {
      Laya['timer']['clear'](this, this['callback']);
    }['restart']() {
      this['start']();
    }
  }class efnjwz {
    constructor(xdkbyr, t8g05) {
      this['moveEntryIcon'] = !0x1, this['spacing'] = 0xa, this['entryIconAlpha'] = 0.5, this['entryIconX'] = 0x0, this['entryIconY'] = 0x0, this['entryIconTouchStartX'] = 0x0, this['entryIconTouchStartY'] = 0x0, this['entryIconTouchStopX'] = 0x0, this['entryIconTouchStopY'] = 0x0, this['scaleNumer'] = arkdyx['scale'], this['x'] = 0x0, this['y'] = 0x0, this['width'] = 0x0, this['height'] = 0x0, this['entryIconX'] = xdkbyr, this['entryIconY'] = t8g05;
    }['addChild'](dbgrkx) {
      return Laya['stage']['addChild'](dbgrkx);
    }['init'](bdckr) {
      let h0ut6p = this;this['hideMenuTimer'] = new q6u4ph(0xfa0, function () {
        h0ut6p['hideMenu']();
      });let cg5bkd = Laya['stage']['width'],
          nwjosm = Laya['stage']['height'];this['x'] = 0x0, this['y'] = 0x0, this['width'] = cg5bkd, this['height'] = nwjosm;let h64p = new soqnmw('/sdk/assets/img/%E6%9B%B4%E5%A4%9A.png');this['entryIcon'] = h64p, h64p['width'] = 0x32 * this['scaleNumer'], h64p['height'] = 0x32 * this['scaleNumer'], h64p['x'] = null == this['entryIconX'] ? 0x0 : this['entryIconX'], h64p['y'] = null == this['entryIconY'] ? 0.25 * nwjosm : this['entryIconY'], h64p['init'](), h64p['alpha'] = this['entryIconAlpha'], h64p['mouseEnabled'] = !0x0, h64p['mouseThrough'] = !0x1, this['addChild'](h64p), h64p['mouseEnabled'] = !0x0, h64p['on'](Laya['Event']['MOUSE_DOWN'], this, this['entryIconStartMove']), h64p['on'](Laya['Event']['MOUSE_UP'], this, this['entryIconStopMove']), h64p['on'](Laya['Event']['CLICK'], this, this['entryIconTap']), this['showEntryIcon']();let kbgx = new nejwf();this['menu'] = kbgx, kbgx['x'] = 0x64, kbgx['y'] = 0x64, this['addChild'](kbgx), bdckr && this['updateMenuConfig'](bdckr), this['updateMenuPosition'](), this['hideMenu'](), this['showEntryIcon'](), this['hideMenuTimer']['start'](), this['menu']['onClickItem'](function ($xray) {
        h0ut6p['hideMenuTimer']['reset'](), h0ut6p['hideMenuTimer']['start'](), h0ut6p['clickMenuItemCallback'] && h0ut6p['clickMenuItemCallback']($xray);
      });
    }['onClickMenuItem'](v$yar) {
      this['clickMenuItemCallback'] = v$yar;
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
    }['entryIconTap'](ybdrk) {
      if (ybdrk['stopPropagation'](), this['hideMenuTimer']['reset'](), this['hideMenuTimer']['start'](), this['moveEntryIcon']) {
        let m46qph = this['entryIconTouchStopX'] - this['entryIconTouchStartX'],
            $9ya = this['entryIconTouchStopY'] - this['entryIconTouchStartY'];m46qph < 0x5 && m46qph > -0x5 && $9ya < 0x5 && $9ya > -0x5 && (this['moveEntryIcon'] = !0x1);
      }if (this['moveEntryIcon']) return this['moveEntryIcon'] = !0x1, void console['log']('entry icon move');this['menu']['visible'] ? this['hideMenu']() : this['showMenu']();
    }['entryIconStartMove'](u5t0c) {
      let brxy = new Laya['Rectangle'](0x0, 0x0, this['width'], this['height']);this['entryIcon']['startDrag'](brxy, !0x1, 0x64), this['entryIcon']['on'](Laya['Event']['MOUSE_MOVE'], this, this['entryIconOnMove']), this['showEntryIcon'](), this['hideMenuTimer']['stop']();var cgbk5 = u5t0c['touches'];if (cgbk5 && cgbk5['length'] > 0x0) {
        var xvr$ = cgbk5[0x0];this['entryIconTouchStartX'] = xvr$['stageX'], this['entryIconTouchStartY'] = xvr$['stageY'];
      }
    }['entryIconStopMove'](crbkdg) {
      this['entryIcon']['off'](Laya['Event']['MOUSE_MOVE'], this, this['entryIconOnMove']), this['entryIcon']['x'] > this['width'] / 0x2 ? this['entryIcon']['x'] = this['width'] - this['entryIcon']['width'] : this['entryIcon']['x'] = 0x0, this['updateMenuPosition']();
    }['entryIconOnMove'](k5bgc) {
      this['updateMenuPosition'](), this['moveEntryIcon'] = !0x0;var vya9$l = k5bgc['touches'];if (vya9$l && vya9$l['length'] > 0x0) {
        var bk58g = vya9$l[0x0];this['entryIconTouchStopX'] = bk58g['stageX'], this['entryIconTouchStopY'] = bk58g['stageY'];
      }
    }['updateMenuConfig'](smjnwo) {
      this['menu'] && this['menu']['setConfig'](smjnwo);
    }
  }class uc8t {
    constructor() {}['init'](fejow) {
      fejow['cxCdnHost'] && (arkdyx['cdnHost'] = fejow['cxCdnHost']), this['stage'] = fejow['stage'], this['uiContainer'] = new efnjwz(fejow['entryIconX'], fejow['entryIconY']);
    }['updateConfig'](aryv$) {
      this['showConfig'] = aryv$, this['uiContainer']['updateMenuConfig'](aryv$);
    }['showMenu']() {
      this['uiContainer']['init'](this['showConfig']);
    }['onClickItem'](monqs4) {
      this['uiContainer']['onClickMenuItem'](monqs4);
    }
  }return console['log'](' window.CXUI'), window['CXUI'] = uc8t;
}();