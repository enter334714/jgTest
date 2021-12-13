var wsqwmn = function () {
  'use strict';

  class pq4u6 {
    constructor() {}
  }pq4u6['scale'] = 1.7, pq4u6['cdnHost'] = 'https://cdn.cxgame.net';class th0u6 extends Laya['Sprite'] {
    constructor(a$xv9) {
      super(), this['path'] = a$xv9;
    }get ['baseUrl']() {
      return pq4u6['cdnHost'];
    }['init']() {
      Laya['version']['startsWith']('1.') ? this['loadImage'](this['baseUrl'] + this['path'], 0x0, 0x0, this['width'], this['height'], Laya['Handler']['create'](this, this['onImageLoaded'])) : this['loadImage'](this['baseUrl'] + this['path'], Laya['Handler']['create'](this, this['onImageLoaded']));
    }['onImageLoaded']() {}
  }class la9_$v extends Laya['Sprite'] {
    constructor() {
      super(), this['bgColor'] = '0xff0000', this['alpha'] = 0.1;
    }['update']() {
      this['graphics']['drawCircle'](this['width'] / 0x2, this['height'] / 0x2, this['width'] / 0x2, this['bgColor']);
    }
  }class z1fjew extends Laya['Sprite'] {
    constructor(jwnofs) {
      super(), this['path'] = jwnofs;
    }['init']() {
      let gdbrkc = new la9_$v();gdbrkc['width'] = this['width'], gdbrkc['height'] = this['height'], gdbrkc['bgColor'] = '#f2f2f2', gdbrkc['alpha'] = this['alpha'], gdbrkc['update'](), this['addChild'](gdbrkc);let zwejf1 = new th0u6(this['path']);zwejf1['width'] = this['width'], zwejf1['height'] = this['height'], zwejf1['init'](), this['addChild'](zwejf1);
    }
  }class rayx$v extends Laya['Sprite'] {
    constructor(smq64o, u06pht) {
      super(), this['scaleNumer'] = pq4u6['scale'], this['path'] = smq64o, this['itemName'] = u06pht, this['init']();
    }['init']() {
      this['width'] = 0x32 * this['scaleNumer'], this['height'] = 0x32 * this['scaleNumer'];let qmsno = new th0u6(this['path']);qmsno['width'] = 0x1e * this['scaleNumer'], qmsno['height'] = 0x1e * this['scaleNumer'], qmsno['pivotX'] = qmsno['width'] / 0x2, qmsno['x'] = this['width'] / 0x2, qmsno['y'] = 0x4 * this['scaleNumer'], qmsno['init'](), this['addChild'](qmsno);var smjwo = new Laya['Label']();smjwo['y'] = 0x23 * this['scaleNumer'], smjwo['width'] = this['width'], smjwo['text'] = this['itemName'], smjwo['fontSize'] = 0xc * this['scaleNumer'], smjwo['color'] = '#9F9F9F', smjwo['align'] = Laya['Stage']['ALIGN_CENTER'], smjwo['valign'] = Laya['Stage']['ALIGN_MIDDLE'], this['addChild'](smjwo);
    }
  }class ar$xv extends Laya['Sprite'] {
    constructor() {
      super(), this['color'] = '#f2f2f2', this['alpha'] = 0x1;
    }['update']() {
      this['graphics']['clear'](), this['graphics']['drawRect'](this['height'] / 0x2, 0x0, this['width'] - this['height'], this['height'], this['color']), this['graphics']['drawPie'](this['height'] / 0x2, this['height'] / 0x2, this['height'] / 0x2, 0x5a, 0x10e, this['color']), this['graphics']['drawPie'](this['width'] - this['height'] / 0x2, this['height'] / 0x2, this['height'] / 0x2, 0x10e, 0x5a, this['color']);
    }
  }class dgxbrk extends Laya['Sprite'] {
    constructor() {
      super(), this['items'] = [], this['spacing'] = 0xa, this['init']();
    }['onClickItem'](m4qns) {
      this['onClickItemCallback'] = m4qns;for (let q46pms in this['items']) {
        let g0tc58 = this['items'][q46pms];function je31z(omwqn) {
          return function (p4ht6) {
            p4ht6['stopPropagation'](), this['onClickItemCallback'](omwqn['itemName']);
          };
        }g0tc58['mouseEnabled'] = !0x0, g0tc58['on'](Laya['Event']['CLICK'], this, je31z(g0tc58));
      }
    }['init']() {
      this['width'] = this['spacing'], this['height'] = 0x0, this['menuBackground'] = new ar$xv(), this['addChild'](this['menuBackground']);let jweof = new rayx$v('/sdk/assets/img/%E7%A4%BC%E5%8C%85.png', 'VIP');this['vipItem'] = jweof, this['addItem'](jweof);let ary$xd = new rayx$v('/sdk/assets/img/%E5%85%AC%E4%BC%97%E5%8F%B7.png', '公众号');this['gongZhongHaoItem'] = ary$xd, this['addItem'](ary$xd);let jwosmn = new rayx$v('/sdk/assets/img/%E6%9C%8D%E5%8A%A1%E8%AF%84%E4%BB%B7-%E5%AE%A2%E6%9C%8D.png', '客服');this['serviceItem'] = jwosmn, this['addItem'](jwosmn);let qsm46p = new rayx$v('/sdk/assets/img/%E6%89%8B%E6%9C%BA.png', '手机');this['phoneItem'] = qsm46p, this['addItem'](qsm46p);let g5ct = new rayx$v('/sdk/assets/img/%E5%AE%9E%E5%90%8D.png', '实名');this['realNameItem'] = g5ct, this['addItem'](g5ct);let hpt8u = new rayx$v('/sdk/assets/img/%E6%89%8B%E6%B8%B8.png', '升级');this['mobileGameItem'] = hpt8u, this['addItem'](hpt8u);
    }['addItem'](krgdbx) {
      this['items']['push'](krgdbx), this['addChild'](krgdbx), this['updateMenu']();
    }['updateMenu']() {
      this['width'] = 0x0;let ze32f1 = 0x0;for (let jsno in this['items']) {
        let yxdkr = this['items'][jsno];yxdkr && yxdkr['visible'] && (this['width'] += yxdkr['width'] + this['spacing'], yxdkr['height'] > this['height'] && (this['height'] = yxdkr['height']), yxdkr['x'] = ze32f1 + this['spacing'], ze32f1 += yxdkr['width'] + this['spacing']);
      }this['width'] += this['spacing'], this['menuBackground']['width'] = this['width'], this['menuBackground']['height'] = this['height'], this['menuBackground']['update']();
    }['setConfig'](dkxr) {
      this['vipItem']['visible'] = dkxr['showVIP'], this['gongZhongHaoItem']['visible'] = dkxr['showGongZhongHao'], this['phoneItem']['visible'] = dkxr['showPhone'], this['realNameItem']['visible'] = dkxr['showRealName'], this['mobileGameItem']['visible'] = dkxr['showMobileGame'], this['updateMenu']();
    }
  }class ph0u6 {
    constructor(kdrxby, newfj) {
      this['delay'] = kdrxby, this['callback'] = newfj;
    }['start']() {
      Laya['timer']['once'](this['delay'], this, this['callback']);
    }['stop']() {
      Laya['timer']['clear'](this, this['callback']);
    }['reset']() {
      Laya['timer']['clear'](this, this['callback']);
    }['restart']() {
      this['start']();
    }
  }class cgbr {
    constructor(wnsqom, i3127z) {
      this['moveEntryIcon'] = !0x1, this['spacing'] = 0xa, this['entryIconAlpha'] = 0.5, this['entryIconX'] = 0x0, this['entryIconY'] = 0x0, this['entryIconTouchStartX'] = 0x0, this['entryIconTouchStartY'] = 0x0, this['entryIconTouchStopX'] = 0x0, this['entryIconTouchStopY'] = 0x0, this['scaleNumer'] = pq4u6['scale'], this['x'] = 0x0, this['y'] = 0x0, this['width'] = 0x0, this['height'] = 0x0, this['entryIconX'] = wnsqom, this['entryIconY'] = i3127z;
    }['addChild'](onq4sm) {
      return Laya['stage']['addChild'](onq4sm);
    }['init'](wf1ez) {
      let t46uhp = this;this['hideMenuTimer'] = new ph0u6(0xfa0, function () {
        t46uhp['hideMenu']();
      });let gkcbdr = Laya['stage']['width'],
          zwjef1 = Laya['stage']['height'];this['x'] = 0x0, this['y'] = 0x0, this['width'] = gkcbdr, this['height'] = zwjef1;let f2e = new z1fjew('/sdk/assets/img/%E6%9B%B4%E5%A4%9A.png');this['entryIcon'] = f2e, f2e['width'] = 0x32 * this['scaleNumer'], f2e['height'] = 0x32 * this['scaleNumer'], f2e['x'] = null == this['entryIconX'] ? 0x0 : this['entryIconX'], f2e['y'] = null == this['entryIconY'] ? 0.25 * zwjef1 : this['entryIconY'], f2e['init'](), f2e['alpha'] = this['entryIconAlpha'], f2e['mouseEnabled'] = !0x0, f2e['mouseThrough'] = !0x1, this['addChild'](f2e), f2e['mouseEnabled'] = !0x0, f2e['on'](Laya['Event']['MOUSE_DOWN'], this, this['entryIconStartMove']), f2e['on'](Laya['Event']['MOUSE_UP'], this, this['entryIconStopMove']), f2e['on'](Laya['Event']['CLICK'], this, this['entryIconTap']), this['showEntryIcon']();let vyrx = new dgxbrk();this['menu'] = vyrx, vyrx['x'] = 0x64, vyrx['y'] = 0x64, this['addChild'](vyrx), wf1ez && this['updateMenuConfig'](wf1ez), this['updateMenuPosition'](), this['hideMenu'](), this['showEntryIcon'](), this['hideMenuTimer']['start'](), this['menu']['onClickItem'](function (gdkxbr) {
        t46uhp['hideMenuTimer']['reset'](), t46uhp['hideMenuTimer']['start'](), t46uhp['clickMenuItemCallback'] && t46uhp['clickMenuItemCallback'](gdkxbr);
      });
    }['onClickMenuItem'](xdkby) {
      this['clickMenuItemCallback'] = xdkby;
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
    }['entryIconTap'](ct58u0) {
      if (ct58u0['stopPropagation'](), this['hideMenuTimer']['reset'](), this['hideMenuTimer']['start'](), this['moveEntryIcon']) {
        let mqh4 = this['entryIconTouchStopX'] - this['entryIconTouchStartX'],
            sfnowj = this['entryIconTouchStopY'] - this['entryIconTouchStartY'];mqh4 < 0x5 && mqh4 > -0x5 && sfnowj < 0x5 && sfnowj > -0x5 && (this['moveEntryIcon'] = !0x1);
      }if (this['moveEntryIcon']) return this['moveEntryIcon'] = !0x1, void console['log']('entry icon move');this['menu']['visible'] ? this['hideMenu']() : this['showMenu']();
    }['entryIconStartMove'](xydka) {
      let xa$vy9 = new Laya['Rectangle'](0x0, 0x0, this['width'], this['height']);this['entryIcon']['startDrag'](xa$vy9, !0x1, 0x64), this['entryIcon']['on'](Laya['Event']['MOUSE_MOVE'], this, this['entryIconOnMove']), this['showEntryIcon'](), this['hideMenuTimer']['stop']();var ojnsfw = xydka['touches'];if (ojnsfw && ojnsfw['length'] > 0x0) {
        var msqn = ojnsfw[0x0];this['entryIconTouchStartX'] = msqn['stageX'], this['entryIconTouchStartY'] = msqn['stageY'];
      }
    }['entryIconStopMove'](t0gc) {
      this['entryIcon']['off'](Laya['Event']['MOUSE_MOVE'], this, this['entryIconOnMove']), this['entryIcon']['x'] > this['width'] / 0x2 ? this['entryIcon']['x'] = this['width'] - this['entryIcon']['width'] : this['entryIcon']['x'] = 0x0, this['updateMenuPosition']();
    }['entryIconOnMove'](dcgb5k) {
      this['updateMenuPosition'](), this['moveEntryIcon'] = !0x0;var jzfwe = dcgb5k['touches'];if (jzfwe && jzfwe['length'] > 0x0) {
        var dbgckr = jzfwe[0x0];this['entryIconTouchStopX'] = dbgckr['stageX'], this['entryIconTouchStopY'] = dbgckr['stageY'];
      }
    }['updateMenuConfig'](qph6u) {
      this['menu'] && this['menu']['setConfig'](qph6u);
    }
  }class fzjwen {
    constructor() {}['init'](drbgk) {
      drbgk['cxCdnHost'] && (pq4u6['cdnHost'] = drbgk['cxCdnHost']), this['stage'] = drbgk['stage'], this['uiContainer'] = new cgbr(drbgk['entryIconX'], drbgk['entryIconY']);
    }['updateConfig'](msno) {
      this['showConfig'] = msno, this['uiContainer']['updateMenuConfig'](msno);
    }['showMenu']() {
      this['uiContainer']['init'](this['showConfig']);
    }['onClickItem'](wmoqsn) {
      this['uiContainer']['onClickMenuItem'](wmoqsn);
    }
  }return console['log'](' window.CXUI'), window['CXUI'] = fzjwen;
}();