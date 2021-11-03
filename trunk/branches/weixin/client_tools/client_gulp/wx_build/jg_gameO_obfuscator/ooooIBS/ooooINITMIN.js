'use strict';

var c = wx.$o;
var o_g4hxo,
    o_e0_ky = this && this[c[220080]] || function () {
  var $ke0y = Object['setPrototypeOf'] || { '__proto__': [] } instanceof Array && function (t75s, ia1d2) {
    t75s['__proto__'] = ia1d2;
  } || function (dl2, e_ynku) {
    for (var q5strm in e_ynku) e_ynku['hasOwnProperty'](q5strm) && (dl2[q5strm] = e_ynku[q5strm]);
  };return function (d26iw1, eynu3) {
    function xhgo() {
      this['constructor'] = d26iw1;
    }$ke0y(d26iw1, eynu3), d26iw1['prototype'] = null === eynu3 ? Object[c[220081]](eynu3) : (xhgo['prototype'] = eynu3['prototype'], new xhgo());
  };
}(),
    o_k$ejy = laya['ui'][c[220082]],
    o_b4zog = laya['ui']['Dialog'];!function (czb8hp) {
  var hzo8b = (o_e0_ky(oczbh8, ye3u_ = o_k$ejy), oczbh8['prototype'][c[220083]] = function () {
    ye3u_['prototype'][c[220083]][c[220084]](this), this[c[220085]](czb8hp['oo'][c[220086]]);
  }, oczbh8[c[220086]] = { 'type': c[220082], 'props': { 'width': 0x2d0, 'name': 'P_WXAuthorizationViewUI', 'height': 0x500 }, 'child': [{ 'type': c[220087], 'props': { 'width': 0x2d0, 'var': c[220088], 'skin': 'oolgo/o2b.jpg', 'name': 'bg', 'height': 0x500, 'centerY': 0x0, 'centerX': 0x0 } }, { 'type': 'Box', 'props': { 'y': 0x0, 'width': 0x2d0, 'right': 0x0, 'height': 0x500 }, 'child': [{ 'type': c[220087], 'props': { 'width': 0x2d0, 'var': 'topImg', 'top': -0x8b, 'skin': 'oolgo/o6b.jpg', 'height': 0x8b, 'centerX': 0x0, 'anchorY': 0x1 } }, { 'type': c[220087], 'props': { 'width': 0x2d0, 'var': c[220089], 'top': 0x500, 'skin': 'oolgo/o3b.jpg', 'height': 0x8b, 'centerX': 0x0 } }, { 'type': c[220087], 'props': { 'x': -0xdc, 'width': 0xdc, 'var': c[220090], 'skin': 'oolgo/o4b.jpg', 'left': -0xdc, 'height': 0x500, 'centerY': 0x0 } }, { 'type': c[220087], 'props': { 'width': 0xdc, 'var': c[220091], 'skin': 'oolgo/o5b.jpg', 'left': 0x2d0, 'height': 0x500, 'centerY': 0x0 } }] }] }, oczbh8);function oczbh8() {
    return ye3u_[c[220084]](this) || this;
  }var ye3u_;czb8hp['oo'] = hzo8b;
}(o_g4hxo = o_g4hxo || {}), function (eky_nu) {
  var enk = (o_e0_ky(qt5pm, pm5r = o_k$ejy), qt5pm['prototype'][c[220083]] = function () {
    pm5r['prototype'][c[220083]][c[220084]](this), this[c[220085]](eky_nu['or'][c[220086]]);
  }, qt5pm[c[220086]] = { 'type': c[220082], 'props': { 'width': 0x2d0, 'name': 'P_LoadingView', 'height': 0x500 }, 'child': [{ 'type': c[220087], 'props': { 'width': 0x2d0, 'var': c[220088], 'name': 'bg', 'height': 0x500, 'centerY': 0x0, 'centerX': 0x0 } }, { 'type': 'Box', 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x2d0, 'height': 0x500 }, 'child': [{ 'type': c[220087], 'props': { 'var': 'topImg', 'centerX': 0x0, 'bottom': 0x500, 'anchorY': 0x1 } }, { 'type': c[220087], 'props': { 'var': c[220089], 'top': 0x500, 'centerX': 0x0 } }, { 'type': c[220087], 'props': { 'var': c[220090], 'right': 0x2d0, 'pivotX': 0x1, 'centerY': 0x0 } }, { 'type': c[220087], 'props': { 'var': c[220091], 'left': 0x2d0, 'centerY': 0x0 } }] }, { 'type': c[220087], 'props': { 'var': 'copyRightImg', 'skin': 'oolgo/o1b.png', 'centerX': 0x0, 'bottom': 0xa } }, { 'type': 'Box', 'props': { 'y': 0x3c3, 'x': 0x0, 'width': 0x2d0, 'var': 'processBox1', 'name': 'processBox1', 'height': 0x82 }, 'child': [{ 'type': c[220087], 'props': { 'y': 0x2e, 'x': 0x3e, 'width': 0x254, 'var': 'loadingBarBg', 'skin': 'oodino/o13a.png', 'height': 0x1b, 'centerX': 0x0 } }, { 'type': c[220087], 'props': { 'y': 0x31, 'x': 0x40, 'width': 0x24e, 'var': 'loadingBar', 'skin': 'oodino/o14a.png', 'height': 0x15 } }, { 'type': c[220087], 'props': { 'y': 0x37, 'x': 0x1fb, 'width': 0xd0, 'var': 'loadingImg1', 'skin': 'oodino/o16a.png', 'height': 0xb } }, { 'type': c[220087], 'props': { 'y': 0x6, 'x': 0x274, 'width': 0x27, 'var': 'loadingImg2', 'skin': 'oodino/o17a.png', 'height': 0x74 } }, { 'type': c[220092], 'props': { 'y': 0x30, 'x': 0x125, 'width': 0x86, 'var': c[220093], 'valign': c[220094], 'text': c[220095], 'strokeColor': c[220096], 'stroke': 0x3, 'height': 0x18, 'fontSize': 0x18, 'color': c[220097], 'centerX': 0x0, 'bold': !0x1, 'align': c[220098] } }] }, { 'type': 'Box', 'props': { 'y': 0x429, 'x': 0x0, 'width': 0x2d0, 'var': 'processBox2', 'name': 'processBox2', 'height': 0x11 }, 'child': [{ 'type': c[220087], 'props': { 'y': 0x0, 'x': 0x133, 'var': 'point1', 'skin': 'oodino/o20a.png', 'centerX': -0x2d } }, { 'type': c[220087], 'props': { 'y': 0x0, 'x': 0x151, 'var': 'point2', 'skin': 'oodino/o19a.png', 'centerX': -0xf } }, { 'type': c[220087], 'props': { 'y': 0x0, 'x': 0x16f, 'var': 'point3', 'skin': 'oodino/o18a.png', 'centerX': 0xf } }, { 'type': c[220087], 'props': { 'y': 0x0, 'x': 0x18d, 'var': 'point4', 'skin': 'oodino/o18a.png', 'centerX': 0x2d } }] }, { 'type': 'Button', 'props': { 'y': 0x316, 'x': 0x37, 'visible': !0x1, 'var': c[220099], 'stateNum': 0x1, 'skin': 'oodino/o1a.png', 'name': c[220099], 'labelSize': 0x1e, 'labelFont': c[220100], 'labelColors': c[220101] }, 'child': [{ 'type': c[220092], 'props': { 'y': 0x9b, 'x': 0x92, 'width': 0x143, 'var': c[220102], 'text': c[220103], 'name': c[220102], 'height': 0x1e, 'fontSize': 0x1e, 'color': c[220104], 'align': c[220098] } }] }, { 'type': c[220092], 'props': { 'y': 0x453, 'width': 0x1f4, 'var': 'loadingTips', 'valign': c[220094], 'text': c[220105], 'height': 0x1a, 'fontSize': 0x1a, 'color': c[220106], 'centerX': 0x0, 'bold': !0x1, 'align': c[220098] } }, { 'type': c[220092], 'props': { 'y': 0xa, 'x': 0xa, 'width': 0x156, 'var': 'versionTxt', 'valign': c[220094], 'top': 0x14, 'text': c[220107], 'strokeColor': c[220108], 'stroke': 0x2, 'right': 0x14, 'height': 0x20, 'fontSize': 0x18, 'color': c[220109], 'bold': !0x1, 'align': c[220060] } }] }, qt5pm);function qt5pm() {
    return pm5r[c[220084]](this) || this;
  }var pm5r;eky_nu['or'] = enk;
}(o_g4hxo = o_g4hxo || {}), function (_0key$) {
  var i92 = (o_e0_ky(c5rp8, x9fgw4 = o_k$ejy), c5rp8['prototype'][c[220083]] = function () {
    o_k$ejy['regComponent'](c[220110], laya[c[220111]][c[220110]]), o_k$ejy['regComponent'](c[220112], laya[c[220113]]['dom'][c[220112]]), x9fgw4['prototype'][c[220083]][c[220084]](this), this[c[220085]](_0key$['oT'][c[220086]]);
  }, c5rp8[c[220086]] = { 'type': c[220082], 'props': { 'width': 0x2d0, 'name': c[220114], 'height': 0x500 }, 'child': [{ 'type': c[220087], 'props': { 'width': 0x2d0, 'var': c[220088], 'skin': 'oolgo/o2b.jpg', 'name': 'bg', 'height': 0x500, 'centerY': 0x0, 'centerX': 0x0 } }, { 'type': 'Box', 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x2d0, 'height': 0x500 }, 'child': [{ 'type': c[220087], 'props': { 'width': 0x2d0, 'var': 'topImg', 'skin': 'oolgo/o6b.jpg', 'bottom': 0x4ff } }, { 'type': c[220087], 'props': { 'width': 0x2d0, 'var': c[220089], 'top': 0x4ff, 'skin': 'oolgo/o3b.jpg' } }, { 'type': c[220087], 'props': { 'var': c[220090], 'skin': 'oolgo/o4b.jpg', 'right': 0x2cf, 'height': 0x500 } }, { 'type': c[220087], 'props': { 'var': c[220091], 'skin': 'oolgo/o5b.jpg', 'left': 0x2cf, 'height': 0x500 } }] }, { 'type': c[220087], 'props': { 'y': 0x34d, 'var': c[220115], 'skin': 'oolgo/o21b.png', 'centerX': 0x0 } }, { 'type': c[220087], 'props': { 'y': 0x457, 'var': c[220116], 'skin': 'oolgo/o27b.png', 'name': c[220116], 'centerX': 0x0 } }, { 'type': c[220087], 'props': { 'y': 0x3a2, 'x': 0xa2, 'var': 'hotImage', 'skin': 'oolgo/o18b.png' } }, { 'type': c[220087], 'props': { 'var': 'copyRightImg', 'skin': 'oolgo/o1b.png', 'centerX': 0x0, 'bottom': 0xa } }, { 'type': c[220087], 'props': { 'y': 0x3f7, 'var': c[220117], 'stateNum': 0x1, 'skin': 'oolgo/o12b.png', 'name': c[220117], 'centerX': 0x0 } }, { 'type': c[220092], 'props': { 'y': 0x3a4, 'x': 0x209, 'var': c[220118], 'valign': c[220094], 'text': c[220119], 'height': 0x20, 'fontSize': 0x1e, 'color': c[220120], 'bold': !0x1, 'align': c[220098] } }, { 'type': c[220092], 'props': { 'y': 0x3a4, 'width': 0x156, 'var': c[220121], 'valign': c[220094], 'text': c[220122], 'height': 0x20, 'fontSize': 0x1e, 'color': c[220120], 'centerX': 0x0, 'bold': !0x1, 'align': c[220098] } }, { 'type': c[220092], 'props': { 'width': 0x156, 'var': 'versionTxt', 'valign': c[220094], 'top': 0x14, 'text': c[220107], 'strokeColor': c[220108], 'stroke': 0x2, 'right': 0x14, 'height': 0x20, 'fontSize': 0x18, 'color': c[220109], 'bold': !0x1, 'align': c[220060] } }, { 'type': c[220087], 'props': { 'y': 0x7f, 'x': 593.5, 'var': 'noticeBtn', 'skin': 'oolgo/o11b.png' } }, { 'type': c[220087], 'props': { 'y': 0x47, 'x': -0x2, 'visible': !0x1, 'var': 'noticeBg', 'skin': 'oolgo/o8b.png', 'centerY': 0x0, 'centerX': 0x0 }, 'child': [{ 'type': c[220087], 'props': { 'y': 36.5, 'x': 0x268, 'var': 'noticeClose', 'skin': 'oolgo/o10b.png' } }, { 'type': c[220092], 'props': { 'y': 0x48, 'x': 0xd8, 'width': 0xea, 'var': 'noticeTitle', 'valign': c[220094], 'text': c[220123], 'height': 0x23, 'fontSize': 0x1e, 'color': c[220124], 'bold': !0x1, 'align': c[220098] } }, { 'type': c[220110], 'props': { 'y': 0x8e, 'x': 0x3d, 'wordWrap': !0x0, 'width': 0x221, 'var': 'noticeContent', 'valign': 'top', 'overflow': 'scroll', 'mouseEnabled': !0x0, 'leading': 0x4, 'height': 0x366, 'fontSize': 0x1a, 'color': c[220125] } }] }, { 'type': c[220087], 'props': { 'y': 0x71, 'x': 0x21, 'visible': !0x1, 'var': 'mNoticeBg', 'skin': 'oolgo/o26b.png', 'centerY': 0x0, 'centerX': 0x0 }, 'child': [{ 'type': c[220087], 'props': { 'y': 36.5, 'x': 0x268, 'var': 'mNoticeClose', 'skin': 'oolgo/o10b.png' } }, { 'type': 'Button', 'props': { 'y': 0x388, 'x': 0xbe, 'var': 'mNoticeClose2', 'stateNum': 0x1, 'skin': 'oolgo/o25b.png', 'labelSize': 0x1e, 'labelColors': c[220126], 'label': c[220127] } }, { 'type': 'Box', 'props': { 'y': 0x388, 'x': 0x22, 'width': 0x254, 'var': 'boxTab', 'height': 0x3b } }, { 'type': c[220092], 'props': { 'y': 0x48, 'x': 0xd8, 'width': 0xea, 'var': 'mNoticeTitle', 'valign': c[220094], 'text': c[220123], 'height': 0x23, 'fontSize': 0x1e, 'color': c[220124], 'bold': !0x1, 'align': c[220098] } }, { 'type': c[220128], 'props': { 'y': 0x8e, 'x': 0x3d, 'width': 0x221, 'var': 'mNoticePanel', 'height': 0x2dd }, 'child': [{ 'type': c[220112], 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x221, 'var': 'mNoticeContent', 'height': 0x2dd } }] }] }, { 'type': c[220087], 'props': { 'visible': !0x1, 'var': c[220129], 'skin': 'oolgo/o9b.png', 'centerY': 0x0, 'centerX': 0x0 }, 'child': [{ 'type': 'Box', 'props': { 'y': 0x75, 'x': 0x3d, 'width': 0xc8, 'var': 'leftListBox', 'height': 0x389 } }, { 'type': 'Box', 'props': { 'y': 0x75, 'x': 0x125, 'width': 0x166, 'var': 'rightListBox', 'height': 0x389 } }, { 'type': c[220087], 'props': { 'y': 0xd, 'x': 0x282, 'var': 'closeBg', 'skin': 'oolgo/o17b.png' } }] }] }, c5rp8);function c5rp8() {
    return x9fgw4[c[220084]](this) || this;
  }var x9fgw4;_0key$['oT'] = i92;
}(o_g4hxo = o_g4hxo || {}), function (_3vln) {
  function zb8hog() {
    return l3vad[c[220084]](this) || this;
  }var l3vad;_3vln = _3vln['ok'] || (_3vln['ok'] = {}), l3vad = o_g4hxo['oo'], o_e0_ky(zb8hog, l3vad), zb8hog['prototype'][c[220130]] = function () {
    l3vad['prototype'][c[220130]][c[220084]](this), this[c[220131]] = 0x0, this[c[220132]] = 0x0, this[c[220133]](), this['onOpened']();
  }, zb8hog['prototype'][c[220133]] = function () {
    this['on'](Laya[c[220134]][c[220135]], this, this['oW']);
  }, zb8hog['prototype'][c[220136]] = function () {
    this['off'](Laya[c[220134]][c[220135]], this, this['oW']);
  }, zb8hog['prototype']['onOpened'] = function () {
    this['oD'] = Date['now'](), o_vlda62[c[220016]]['_oQEAU8'](), o_vlda62[c[220016]]['preloadLoading']();
  }, zb8hog['prototype']['destroy'] = function (ue_kyn) {
    void 0x0 === ue_kyn && (ue_kyn = !0x0), this[c[220136]](), l3vad['prototype']['destroy'][c[220084]](this, ue_kyn);
  }, zb8hog['prototype']['oW'] = function () {
    0x2710 < Date['now']() - this['oD'] && (this['oD'] -= 0x3e8, o_bhxog4['window']['_oAE'][c[220008]][c[220009]] && (o_vlda62[c[220016]][c[220137]](), o_vlda62[c[220016]]['sendRecord']()));
  }, _3vln['AuthorizationPanel'] = zb8hog;
}(modules = modules || {}), function (_uek) {
  var sr5tqm, _0$ek, rcpz8m, qpmtr5;function zcbo() {
    var tqr5m = _uyen[c[220084]](this) || this;return tqr5m['oL'] = new rcpz8m(), tqr5m[c[220138]](tqr5m['oL']), tqr5m['oU'] = null, tqr5m['oh'] = [], tqr5m['op'] = !0x1, tqr5m['oi'] = 0x0, tqr5m['ov'] = !0x0, tqr5m['ox'] = 0x6, tqr5m['oj'] = !0x1, tqr5m['on'](_0$ek[c[220139]], tqr5m, tqr5m['o_']), tqr5m['on'](_0$ek[c[220140]], tqr5m, tqr5m['oK']), tqr5m;
  }var _uyen;sr5tqm = _uek['oV'] || (_uek['oV'] = {}), _0$ek = Laya[c[220134]], rcpz8m = Laya[c[220087]], _uek = Laya['Component'], qpmtr5 = Laya['Loader'], o_e0_ky(zcbo, _uyen = _uek), zcbo[c[220081]] = function (y0_uke, val2, wf4x1, d2wi61, rqmtp, bhz4o, p8rzh) {
    void 0x0 === d2wi61 && (d2wi61 = 0x0), void 0x0 === rqmtp && (rqmtp = 0x6), void 0x0 === bhz4o && (bhz4o = !0x0), void 0x0 === p8rzh && (p8rzh = !0x1);var en = new zcbo();return en[c[220141]](val2, wf4x1, d2wi61), en[c[220142]] = rqmtp, en['loop'] = bhz4o, en[c[220143]] = p8rzh, y0_uke && y0_uke[c[220138]](en), en;
  }, zcbo[c[220144]] = function (qm5prt) {
    qm5prt && (qm5prt[c[220145]] = !0x0, qm5prt[c[220144]]());
  }, zcbo['stop'] = function (i12w9f) {
    i12w9f && (i12w9f[c[220145]] = !0x1, i12w9f['stop']());
  }, zcbo['prototype']['destroy'] = function (hbxgo4) {
    Laya[c[220146]][c[220147]](this, this['o$']), this['off'](_0$ek[c[220139]], this, this['o_']), this['off'](_0$ek[c[220140]], this, this['oK']), _uyen['prototype']['destroy'][c[220084]](this, hbxgo4);
  }, zcbo['prototype']['o_'] = function () {}, zcbo['prototype']['oK'] = function () {}, zcbo['prototype'][c[220141]] = function (rzh8cp, hb4gx, _lu3v) {
    if (this['oU'] != rzh8cp) {
      this['oU'] = rzh8cp, this['oh'] = [];for (var lvua3 = 0x0, rzm = _lu3v; rzm <= hb4gx; rzm++) this['oh'][lvua3++] = rzh8cp + '/' + rzm + c[220148];_lu3v = qpmtr5[c[220149]](this['oh'][0x0]), (_lu3v && (this[c[220150]] = _lu3v['sourceWidth'], this[c[220151]] = _lu3v['sourceHeight']), this['o$']());
    }
  }, Object['defineProperty'](zcbo['prototype'], c[220143], { 'get': function () {
      return this['oj'];
    }, 'set': function (_$yk0) {
      this['oj'] = _$yk0;
    }, 'enumerable': !0x0, 'configurable': !0x0 }), Object['defineProperty'](zcbo['prototype'], c[220142], { 'set': function (gobh8z) {
      this['ox'] != gobh8z && (this['ox'] = gobh8z, this['op'] && (Laya[c[220146]][c[220147]](this, this['o$']), Laya[c[220146]]['loop'](this['ox'] * (0x3e8 / 0x3c), this, this['o$'])));
    }, 'enumerable': !0x0, 'configurable': !0x0 }), Object['defineProperty'](zcbo['prototype'], 'loop', { 'set': function (bzo8hg) {
      this['ov'] = bzo8hg;
    }, 'enumerable': !0x0, 'configurable': !0x0 }), zcbo['prototype'][c[220144]] = function () {
    this['op'] && this['stop'](), this['op'] = !0x0, this['oi'] = 0x0, Laya[c[220146]]['loop'](this['ox'] * (0x3e8 / 0x3c), this, this['o$']), this['o$']();
  }, zcbo['prototype']['stop'] = function () {
    this['op'] = !0x1, this['oi'] = 0x0, this['o$'](), Laya[c[220146]][c[220147]](this, this['o$']);
  }, zcbo['prototype'][c[220152]] = function () {
    this['op'] && (this['op'] = !0x1, Laya[c[220146]][c[220147]](this, this['o$']));
  }, zcbo['prototype'][c[220153]] = function () {
    this['op'] || (this['op'] = !0x0, Laya[c[220146]]['loop'](this['ox'] * (0x3e8 / 0x3c), this, this['o$']), this['o$']());
  }, Object['defineProperty'](zcbo['prototype'], c[220154], { 'get': function () {
      return this['op'];
    }, 'enumerable': !0x0, 'configurable': !0x0 }), zcbo['prototype']['o$'] = function () {
    this['oh'] && 0x0 != this['oh'][c[220005]] && (this['oL'][c[220141]] = this['oh'][this['oi']], this['op'] && (this['oi']++, this['oi'] == this['oh'][c[220005]] && (this['ov'] ? this['oi'] = 0x0 : (Laya[c[220146]][c[220147]](this, this['o$']), this['op'] = !0x1, this['oj'] && (this[c[220145]] = !0x1), this[c[220155]](_0$ek[c[220156]])))));
  }, sr5tqm[c[220157]] = zcbo;
}(modules = modules || {}), function (rcp8m) {
  var uvny_3, ynu3e;function pbzch8(gozb8h) {
    void 0x0 === gozb8h && (gozb8h = 0x0);var xb4hog = m7t5[c[220084]](this) || this;return xb4hog['oy'] = { 'bgImgSkin': 'oodino/o3a.jpg', 'topImgSkin': 'oodino/o10a.jpg', 'btmImgSkin': 'oodino/o4a.jpg', 'leftImgSkin': 'oodino/o6a.jpg', 'rightImgSkin': 'oodino/o8a.jpg', 'loadingBarBgSkin': 'oodino/o13a.png', 'copyRightImgBottom': 0xa, 'processBox1Y': 0x3c3, 'processBox2Y': 0x429, 'loadingTipsSize': 0x1a, 'getTipsBtnVisible': !0x1 }, xb4hog['ol'] = { 'bgImgSkin': 'oodino/o12a.jpg', 'topImgSkin': 'oodino/o11a.jpg', 'btmImgSkin': 'oodino/o5a.jpg', 'leftImgSkin': 'oodino/o7a.jpg', 'rightImgSkin': 'oodino/o9a.jpg', 'loadingBarBgSkin': 'oodino/o15a.png', 'copyRightImgBottom': 0xa, 'processBox1Y': 0x3c3, 'processBox2Y': 0x429, 'loadingTipsSize': 0x1a, 'getTipsBtnVisible': !0x1 }, xb4hog['oS'] = 0x0, xb4hog['oq'](0x1 == gozb8h ? xb4hog['ol'] : xb4hog['oy']), xb4hog;
  }var m7t5;uvny_3 = rcp8m['ok'] || (rcp8m['ok'] = {}), ynu3e = rcp8m['oV'][c[220157]], m7t5 = o_g4hxo['or'], o_e0_ky(pbzch8, m7t5), pbzch8['prototype'][c[220130]] = function () {
    var li6;m7t5['prototype'][c[220130]][c[220084]](this), o_vlda62[c[220016]]['preloadLoading'](), this['ob'] = o_bhxog4['window']['_oAE'], this[c[220131]] = 0x0, this[c[220132]] = 0x0, this['ob'] && (li6 = this['ob']['loadingType'], this['loadingTips']['color'] = 0x1 != li6 && 0x2 == li6 ? c[220158] : c[220106]), this['oF'] = [this['point1'], this['point2'], this['point3'], this['point4']], o_bhxog4['window'][c[220159]] = this, _oUAE8(), o_vlda62[c[220016]]['closeAuthor'](), o_vlda62[c[220016]]['closeServer'](), this['onOpened']();
  }, pbzch8['prototype']['_oUAE'] = function (bzpc8) {
    var c8mrzp = this;if (-0x1 === bzpc8) return c8mrzp['oS'] = 0x0, Laya[c[220146]][c[220147]](this, this['_oUAE']), void Laya[c[220146]]['frameLoop'](0x1, this, this['_oUAE']);var l_u3v;-0x2 !== bzpc8 ? (c8mrzp['oS'] < 0.9 ? c8mrzp['oS'] += (0.15 * Math['random']() + 0.01) / (0x64 * Math['random']() + 0x32) : c8mrzp['oS'] < 0x1 && (c8mrzp['oS'] += 0.0001), 0.9999 < c8mrzp['oS'] && (c8mrzp['oS'] = 0.9999, Laya[c[220146]][c[220147]](this, this['_oUAE']), Laya[c[220146]]['once'](0xbb8, this, function () {
      0.9 < c8mrzp['oS'] && _oUAE(-0x1);
    })), bzpc8 = 0x24e * (l_u3v = c8mrzp['oS']), c8mrzp['oS'] = c8mrzp['oS'] > l_u3v ? c8mrzp['oS'] : l_u3v, c8mrzp['loadingBar'][c[220150]] = bzpc8, bzpc8 = c8mrzp['loadingBar']['x'] + bzpc8, c8mrzp['loadingImg2']['x'] = bzpc8 - 0xf, 0x16c <= bzpc8 ? (c8mrzp['loadingImg1'][c[220145]] = !0x0, c8mrzp['loadingImg1']['x'] = bzpc8 - 0xca) : c8mrzp['loadingImg1'][c[220145]] = !0x1, c8mrzp[c[220093]][c[220160]] = (0x64 * l_u3v >> 0x0) + '%', c8mrzp['oS'] < 0.9999 && Laya[c[220146]]['frameLoop'](0x1, this, this['_oUAE'])) : Laya[c[220146]][c[220147]](this, this['_oUAE']);
  }, pbzch8['prototype']['_oUEA'] = function (p8bzc, r85c, ld26i) {
    var gohb8z = this,
        mpqrt5 = 0x24e * (p8bzc = 0x1 < p8bzc ? 0x1 : p8bzc);gohb8z['oS'] = gohb8z['oS'] > p8bzc ? gohb8z['oS'] : p8bzc, gohb8z['loadingBar'][c[220150]] = mpqrt5, mpqrt5 = gohb8z['loadingBar']['x'] + mpqrt5, (gohb8z['loadingImg2']['x'] = mpqrt5 - 0xf, 0x16c <= mpqrt5 ? (gohb8z['loadingImg1'][c[220145]] = !0x0, gohb8z['loadingImg1']['x'] = mpqrt5 - 0xca) : gohb8z['loadingImg1'][c[220145]] = !0x1, gohb8z[c[220093]][c[220160]] = (0x64 * p8bzc >> 0x0) + '%', gohb8z['loadingTips'][c[220160]] = r85c);for (var hzpc8r = ld26i - 0x1, al3n6v = 0x0; al3n6v < this['oF'][c[220005]]; al3n6v++) gohb8z['oF'][al3n6v][c[220141]] = al3n6v < hzpc8r ? 'oodino/o20a.png' : hzpc8r === al3n6v ? 'oodino/o19a.png' : 'oodino/o18a.png';
  }, pbzch8['prototype']['onOpened'] = function () {
    this['_oUEA'](0.1, c[220161], 0x1), this['_oUAE'](-0x1), o_bhxog4['window']['_oUAE'] = this['_oUAE'][c[220162]](this), o_bhxog4['window']['_oUEA'] = this['_oUEA'][c[220162]](this), this['versionTxt'][c[220160]] = c[220163] + this['ob']['lastVersion'] + c[220164] + this['ob']['wxVersion'], this['showGetBtn']();
  }, pbzch8['prototype']['close'] = function (x4og9) {
    this[c[220165]](), Laya[c[220146]][c[220147]](this, this['_oUAE']), Laya[c[220146]][c[220147]](this, this['oP']), o_vlda62[c[220016]]['closeLoading'](), this[c[220099]]['off'](Laya[c[220134]][c[220135]], this, this['ot']);
  }, pbzch8['prototype'][c[220165]] = function () {
    o_bhxog4['window']['_oUAE'] = function () {}, o_bhxog4['window']['_oUEA'] = function () {};
  }, pbzch8['prototype']['destroy'] = function (zo8g) {
    void 0x0 === zo8g && (zo8g = !0x0), this[c[220165]](), m7t5['prototype']['destroy'][c[220084]](this, zo8g);
  }, pbzch8['prototype']['showGetBtn'] = function () {
    this['ob']['showGetBtn'] && 0x1 == this['ob']['showGetBtn'] && (this[c[220099]][c[220145]] = !0x0, this[c[220099]][c[220166]] = !0x0, this[c[220099]][c[220141]] = 'oodino/o1a.png', this[c[220099]]['on'](Laya[c[220134]][c[220135]], this, this['ot']), this['oH'](), this['oR'](!0x0));
  }, pbzch8['prototype']['ot'] = function () {
    this[c[220099]][c[220166]] && (this[c[220099]][c[220166]] = !0x1, this[c[220099]][c[220141]] = 'oodino/o2a.png', this['ou'](), this['oR'](!0x1));
  }, pbzch8['prototype']['oq'] = function (ilad62) {
    this[c[220088]][c[220141]] = ilad62[c[220167]], this['topImg'][c[220141]] = ilad62['topImgSkin'], this[c[220089]][c[220141]] = ilad62[c[220168]], this[c[220090]][c[220141]] = ilad62[c[220169]], this[c[220091]][c[220141]] = ilad62[c[220170]], this['copyRightImg']['bottom'] = ilad62['copyRightImgBottom'], this['processBox1']['y'] = ilad62['processBox1Y'], this['processBox2']['y'] = ilad62['processBox2Y'], this['loadingBarBg'][c[220141]] = ilad62['loadingBarBgSkin'], this['loadingTips']['fontSize'] = ilad62['loadingTipsSize'], this[c[220099]][c[220145]] = this['ob']['showGetBtn'] && 0x1 == this['ob']['showGetBtn'], this[c[220099]][c[220145]] ? this['oH']() : this['ou'](), this['oR'](this[c[220099]][c[220145]]);
  }, pbzch8['prototype']['oH'] = function () {
    this['os'] || (this['os'] = ynu3e[c[220081]](this[c[220099]], 'ofo', 0x4, 0x0, 0xc), this['os']['pos'](0xa1, 0x6a), this['os'][c[220171]](1.14, 1.15)), ynu3e[c[220144]](this['os']);
  }, pbzch8['prototype']['ou'] = function () {
    this['os'] && ynu3e['stop'](this['os']);
  }, pbzch8['prototype']['oR'] = function (tm5qsr) {
    Laya[c[220146]][c[220147]](this, this['oP']), tm5qsr ? (this['oz'] = 0x9, this[c[220102]][c[220145]] = !0x0, this['oP'](), Laya[c[220146]]['loop'](0x3e8, this, this['oP'])) : this[c[220102]][c[220145]] = !0x1;
  }, pbzch8['prototype']['oP'] = function () {
    0x0 < this['oz'] ? (this[c[220102]][c[220160]] = c[220172] + this['oz'] + 's)', this['oz']--) : (this[c[220102]][c[220160]] = '', Laya[c[220146]][c[220147]](this, this['oP']), this['ot']());
  }, uvny_3['LoadingPanel'] = pbzch8;
}(modules = modules || {}), function (x9fwi) {
  var o4gxf, q5smrt, lnva6;function bzh4go() {
    var hzo4bg = una3lv[c[220084]](this) || this;return hzo4bg['om'] = 0x0, hzo4bg['oC'] = 'multi_notice_key', hzo4bg['oX'] = 0x0, hzo4bg;
  }var una3lv;o4gxf = x9fwi['ok'] || (x9fwi['ok'] = {}), q5smrt = Laya[c[220173]], lnva6 = Laya[c[220134]], una3lv = o_g4hxo['oT'], o_e0_ky(bzh4go, una3lv), bzh4go['prototype'][c[220130]] = function () {
    una3lv['prototype'][c[220130]][c[220084]](this), o_vlda62[c[220016]]['_oQEAU8'](), this[c[220131]] = 0x0, this[c[220132]] = 0x0, this['ob'] = o_bhxog4['window']['_oAE'], this['oO'] = new q5smrt(), this['oO']['vScrollBarSkin'] = '', this['oO'][c[220174]] = o4gxf[c[220175]], this['oO']['top'] = 0x5, this['oO'][c[220176]] = 0x1, this['oO'][c[220177]] = 0x5, this['oO'][c[220150]] = this['leftListBox'][c[220150]], this['oO'][c[220151]] = this['leftListBox'][c[220151]] - 0x8, this['leftListBox'][c[220138]](this['oO']), this['oM'] = new q5smrt(), this['oM']['vScrollBarSkin'] = '', this['oM'][c[220174]] = o4gxf[c[220178]], this['oM']['top'] = 0x5, this['oM'][c[220176]] = 0x1, this['oM'][c[220177]] = 0x5, this['oM'][c[220150]] = this['rightListBox'][c[220150]], this['oM'][c[220151]] = this['rightListBox'][c[220151]] - 0x8, this['rightListBox'][c[220138]](this['oM']), this['oc'] = new q5smrt(), this['oc']['hScrollBarSkin'] = '', this['oc'][c[220174]] = o4gxf['NoticeItem'], this['oc'][c[220179]] = 0x1, this['oc'][c[220150]] = this['boxTab'][c[220150]], this['oc'][c[220151]] = this['boxTab'][c[220151]], this['boxTab'][c[220138]](this['oc']);var b8gzh = this['ob']['loadingType'];this['oe'] = 0x1 == b8gzh || 0x2 == b8gzh || 0x3 == b8gzh || 0x65 == b8gzh ? c[220120] : c[220180], this[c[220117]][c[220181]](0x1fa, 0x58), this['noticeBtn'][c[220145]] = !0x1, this['mNoticeContent']['color'] = c[220125], this['mNoticeContent'][c[220182]]['fontSize'] = 0x1a, this['mNoticeContent'][c[220182]][c[220183]] = 0x1c, this['mNoticeContent']['mouseEnabled'] = !0x1, this['oJ'] = [], o_bhxog4['window'][c[220184]] = this, _oUAE8(), this[c[220133]](), this['onOpened']();
  }, bzh4go['prototype'][c[220133]] = function () {
    this[c[220088]]['on'](Laya[c[220134]][c[220135]], this, this['oW']), this[c[220117]]['on'](Laya[c[220134]][c[220135]], this, this['oY']), this[c[220115]]['on'](Laya[c[220134]][c[220135]], this, this['oA']), this[c[220115]]['on'](Laya[c[220134]][c[220135]], this, this['oA']), this['closeBg']['on'](Laya[c[220134]][c[220135]], this, this['oI']), this['noticeBtn']['on'](Laya[c[220134]][c[220135]], this, this['oN']), this['noticeClose']['on'](Laya[c[220134]][c[220135]], this, this['oa']), this['noticeContent']['on'](Laya[c[220134]][c[220185]], this, this['oG']), this['mNoticeClose']['on'](Laya[c[220134]][c[220135]], this, this['ow']), this['mNoticeClose2']['on'](Laya[c[220134]][c[220135]], this, this['ow']), this['mNoticePanel']['on'](Laya[c[220134]][c[220185]], this, this['oZ']), this['oc'][c[220186]] = !0x0, this['oc'][c[220187]] = Laya[c[220188]][c[220081]](this, this['oQ'], null, !0x1);
  }, bzh4go['prototype'][c[220136]] = function () {
    this[c[220088]]['off'](Laya[c[220134]][c[220135]], this, this['oW']), this[c[220117]]['off'](Laya[c[220134]][c[220135]], this, this['oY']), this[c[220115]]['off'](Laya[c[220134]][c[220135]], this, this['oA']), this[c[220115]]['off'](Laya[c[220134]][c[220135]], this, this['oA']), this['closeBg']['off'](Laya[c[220134]][c[220135]], this, this['oI']), this['noticeBtn']['off'](Laya[c[220134]][c[220135]], this, this['oN']), this['noticeClose']['off'](Laya[c[220134]][c[220135]], this, this['oa']), this['noticeContent']['off'](Laya[c[220134]][c[220185]], this, this['oG']), this['mNoticeClose']['off'](Laya[c[220134]][c[220135]], this, this['ow']), this['mNoticeClose2']['off'](Laya[c[220134]][c[220135]], this, this['ow']), this['mNoticePanel']['off'](Laya[c[220134]][c[220185]], this, this['oZ']), this['oc'][c[220186]] = !0x1, this['oc'][c[220187]] = null;
  }, bzh4go['prototype']['onOpened'] = function () {
    this['oD'] = Date['now'](), this['og'] = this['ob'][c[220008]][c[220009]], this['oB'](this['ob'][c[220008]]), this['oO']['dataSource'] = this['ob']['groupList'], this['oA'](), this['versionTxt'][c[220160]] = c[220163] + this['ob']['lastVersion'] + c[220164] + this['ob']['wxVersion'], this[c[220121]]['color'] = this[c[220118]]['color'] = this['oe'], this[c[220116]][c[220145]] = 0x1 == this['ob'][c[220189]], req_multi_server_notice(0x4, this['ob'][c[220190]], this['ob'][c[220008]][c[220009]], this['oE'][c[220162]](this));
  }, bzh4go['prototype']['destroy'] = function (t5qpr) {
    void 0x0 === t5qpr && (t5qpr = !0x0), this[c[220136]](), this['od'](), this['ooo'](), this['oO'] && (this['oO']['removeSelf'](), this['oO']['destroy'](), this['oO'] = null), this['oM'] && (this['oM']['removeSelf'](), this['oM']['destroy'](), this['oM'] = null), this['oc'] && (this['oc']['removeSelf'](), this['oc']['destroy'](), this['oc'] = null), una3lv['prototype']['destroy'][c[220084]](this, t5qpr);
  }, bzh4go['prototype']['oW'] = function () {
    0x2710 < Date['now']() - this['oD'] && (this['oD'] -= 0x7d0, o_vlda62[c[220016]][c[220137]]());
  }, bzh4go['prototype']['oI'] = function () {
    this[c[220129]][c[220145]] = !0x1;
  }, bzh4go['prototype']['oY'] = function () {
    this['oro'](this['ob'][c[220008]]) && (o_bhxog4['window']['_oAE'][c[220008]] = this['ob'][c[220008]], _oEUA8(0x0, this['ob'][c[220008]][c[220009]]));
  }, bzh4go['prototype']['oN'] = function () {
    this['oTo']();
  }, bzh4go['prototype']['oa'] = function () {
    this['noticeBg'][c[220145]] = !0x1;
  }, bzh4go['prototype']['oG'] = function () {
    this['om'] = this['noticeContent']['mouseY'], Laya[c[220191]]['on'](lnva6[c[220192]], this, this['oko']), Laya[c[220191]]['on'](lnva6[c[220193]], this, this['od']), Laya[c[220191]]['on'](lnva6[c[220194]], this, this['od']);
  }, bzh4go['prototype']['oko'] = function () {
    var nl_uv;this['noticeContent'] && (nl_uv = this['om'] - this['noticeContent']['mouseY'], this['noticeContent']['scrollY'] += nl_uv, this['om'] = this['noticeContent']['mouseY']);
  }, bzh4go['prototype']['od'] = function () {
    Laya[c[220191]]['off'](lnva6[c[220192]], this, this['oko']), Laya[c[220191]]['off'](lnva6[c[220193]], this, this['od']), Laya[c[220191]]['off'](lnva6[c[220194]], this, this['od']);
  }, bzh4go['prototype']['oro'] = function (avn3lu) {
    return -0x1 == avn3lu[c[220195]] ? (alert(c[220196]), !0x1) : 0x0 != avn3lu[c[220195]] || (alert(c[220197]), !0x1);
  }, bzh4go['prototype']['oA'] = function () {
    this['ob']['hasGroupReq'] ? this[c[220129]][c[220145]] = !0x0 : (this['ob']['hasGroupReq'] = !0x0, _oAE8U(0x0));
  }, bzh4go['prototype']['oE'] = function (hzgo8) {
    console['log']('onMultiNoticeCallback, param = ', hzgo8);var _ye0k = Date['now']() / 0x3e8,
        x4w9f1 = localStorage[c[220198]](this['oC']),
        gxo49b = !(this['oJ'] = []);if (c[220199] == hzgo8[c[220200]]) for (var ozg in hzgo8[c[220201]]) {
      var en_ = hzgo8[c[220201]][ozg],
          _ey3nu = _ye0k < en_[c[220202]],
          obh8cz = 0x1 == en_['pop_type'],
          ozg = 0x2 == en_['pop_type'] && en_[c[220203]] + '' != x4w9f1;!gxo49b && _ey3nu && (obh8cz || ozg) && (gxo49b = !0x0), _ey3nu && this['oJ'][c[220019]](en_), ozg && localStorage[c[220204]](this['oC'], en_[c[220203]] + '');
    }this['oJ']['sort'](function (a2di61, ky) {
      return a2di61['login_id'] - ky['login_id'];
    }), console['log']('onMultiNoticeCallback, datas = ', this['oJ']), gxo49b && this['oTo']();
  }, bzh4go['prototype']['preload'] = function () {}, bzh4go['prototype'][c[220205]] = function (ptrmc5) {
    var $0kje = '';return 0x2 === ptrmc5 ? $0kje = 'oolgo/o18b.png' : 0x1 === ptrmc5 ? $0kje = 'oolgo/o19b.png' : -0x1 !== ptrmc5 && 0x0 !== ptrmc5 || ($0kje = 'oolgo/o20b.png'), $0kje;
  }, bzh4go['prototype']['oB'] = function (t5rmcp) {
    this[c[220121]][c[220160]] = -0x1 === t5rmcp[c[220195]] ? t5rmcp[c[220206]] + c[220207] : 0x0 === t5rmcp[c[220195]] ? t5rmcp[c[220206]] + c[220208] : t5rmcp[c[220206]], this[c[220121]]['color'] = -0x1 === t5rmcp[c[220195]] ? c[220209] : 0x0 === t5rmcp[c[220195]] ? c[220210] : this['oe'], this['hotImage'][c[220141]] = this[c[220205]](t5rmcp[c[220195]]), this['ob'][c[220007]] = t5rmcp[c[220007]] || '', this['ob'][c[220008]] = t5rmcp, this['noticeBtn'][c[220145]] = !0x0;
  }, bzh4go['prototype']['oWo'] = function (n_3lv) {
    this['showGroupList'](n_3lv);
  }, bzh4go['prototype']['oDo'] = function (rqst5) {
    this['oB'](rqst5), this[c[220129]][c[220145]] = !0x1;
  }, bzh4go['prototype']['ono'] = function (vdla6) {
    this['noticeContent'] && (this['noticeContent'][c[220160]] = vdla6[c[220201]]['content'] || '', this['noticeTitle'][c[220160]] = vdla6[c[220201]][c[220211]] || c[220123]);
  }, bzh4go['prototype']['showGroupList'] = function (lda2v) {
    if (void 0x0 === lda2v && (lda2v = 0x0), this[c[220212]]) {
      var _yuekn = this['ob']['groupList'];if (_yuekn && 0x0 !== _yuekn[c[220005]]) {
        for (var nu3_vy = _yuekn[c[220005]], f19x4w = 0x0; f19x4w < nu3_vy; f19x4w++) _yuekn[f19x4w][c[220213]] = this['oWo'][c[220162]](this), _yuekn[f19x4w][c[220214]] = f19x4w == lda2v, _yuekn[f19x4w][c[220215]] = f19x4w;var w912f = (this['oO'][c[220216]] = _yuekn)[lda2v]['id'];this['ob'][c[220217]][w912f] ? this['showServerList'](w912f) : this['ob'][c[220218]] || (this['ob'][c[220218]] = !0x0, -0x1 == w912f ? _oUA8(0x0) : -0x2 == w912f ? _oQA8E(0x0) : _o8AU(0x0, w912f));
      }
    }
  }, bzh4go['prototype']['showServerList'] = function (dw1f2) {
    if (this[c[220212]] && this['ob'][c[220217]][dw1f2]) {
      for (var p5qmt = this['ob'][c[220217]][dw1f2], d12wfi = p5qmt[c[220005]], q5rms = 0x0; q5rms < d12wfi; q5rms++) p5qmt[q5rms][c[220213]] = this['oDo'][c[220162]](this);this['oM'][c[220216]] = p5qmt;
    }
  }, bzh4go['prototype']['oTo'] = function () {
    if (this['oc']) {
      if (this['oJ']) {
        this['oc']['x'] = 0x2 < this['oJ'][c[220005]] ? 0x0 : (this['boxTab'][c[220150]] - 0x112 * this['oJ'][c[220005]]) / 0x2;for (var y$0je = [], gxohb4 = 0x0; gxohb4 < this['oJ'][c[220005]]; gxohb4++) {
          var n3yvu = this['oJ'][gxohb4];y$0je[c[220019]]([n3yvu, gxohb4 == this['oc'][c[220219]]]);
        }0x0 < (this['oc']['dataSource'] = y$0je)[c[220005]] ? (this['oc'][c[220219]] = 0x0, this['oc']['scrollTo'](0x0)) : (this['mNoticeTitle'][c[220160]] = c[220123], this['mNoticeContent'][c[220160]] = ''), this['mNoticeClose2'][c[220145]] = this['oJ'][c[220005]] <= 0x1, this['boxTab'][c[220145]] = 0x1 < this['oJ'][c[220005]];
      }this['mNoticeBg'][c[220145]] = !0x0;
    }
  }, bzh4go['prototype']['ow'] = function () {
    this['mNoticeBg'][c[220145]] = !0x1;
  }, bzh4go['prototype']['oQ'] = function () {
    if (this['oc']['dataSource']) {
      for (var ek0_u, ix19wf = 0x0; ix19wf < this['oc']['dataSource'][c[220005]]; ix19wf++) {
        var tsq = this['oc']['dataSource'][ix19wf];tsq[0x1] = ix19wf == this['oc'][c[220219]], ix19wf == this['oc'][c[220219]] && (ek0_u = tsq[0x0]);
      }ek0_u && ek0_u['content'] && (ek0_u['content'] = ek0_u['content'][c[220003]](/(<)(?!(br)).[a-zA-Z]{0,10}(>)/g, '')), this['mNoticeTitle'][c[220160]] = ek0_u && ek0_u[c[220211]] ? ek0_u[c[220211]] : '', this['mNoticeContent'][c[220220]] = ek0_u && ek0_u['content'] ? ek0_u['content'] : '', this['mNoticeContent']['y'] = 0x0;
    }
  }, bzh4go['prototype']['oZ'] = function () {
    this['oX'] = this['mNoticePanel']['mouseY'], Laya[c[220191]]['on'](lnva6[c[220192]], this, this['oVo']), Laya[c[220191]]['on'](lnva6[c[220193]], this, this['ooo']), Laya[c[220191]]['on'](lnva6[c[220194]], this, this['ooo']);
  }, bzh4go['prototype']['oVo'] = function () {
    var ye0k$;this['mNoticeContent'] && (ye0k$ = this['oX'] - this['mNoticePanel']['mouseY'], this['mNoticeContent']['y'] -= ye0k$, this['mNoticePanel'][c[220151]] < this['mNoticeContent']['contextHeight'] ? this['mNoticeContent']['y'] < this['mNoticePanel'][c[220151]] - this['mNoticeContent']['contextHeight'] ? this['mNoticeContent']['y'] = this['mNoticePanel'][c[220151]] - this['mNoticeContent']['contextHeight'] : 0x0 < this['mNoticeContent']['y'] && (this['mNoticeContent']['y'] = 0x0) : this['mNoticeContent']['y'] = 0x0, this['oX'] = this['mNoticePanel']['mouseY']);
  }, bzh4go['prototype']['ooo'] = function () {
    Laya[c[220191]]['off'](lnva6[c[220192]], this, this['oVo']), Laya[c[220191]]['off'](lnva6[c[220193]], this, this['ooo']), Laya[c[220191]]['off'](lnva6[c[220194]], this, this['ooo']);
  }, o4gxf[c[220221]] = bzh4go;
}(modules = modules || {});var modules,
    o_bhxog4 = Laya['Browser'],
    o_mrct = Laya['Font'],
    o__3uyen = Laya[c[220222]],
    o_v3nua = Laya[c[220223]],
    o_wf2i1 = Laya[c[220188]],
    o_zcmp8 = modules['ok']['AuthorizationPanel'],
    o_di6la2 = modules['ok']['LoadingPanel'],
    o_eyu_k0 = modules['ok'][c[220221]],
    o_vlda62 = function () {
  function di21a(c8hzbp) {
    this['m_loadingRes'] = ['oodino/o13a.png', 'oodino/o15a.png', 'oodino/o14a.png', 'oodino/o16a.png', 'oodino/o17a.png', 'oodino/o18a.png', 'oodino/o19a.png', 'oodino/o20a.png', 'ofo/o1c.png', 'ofo/o2c.png', 'ofo/o3c.png', 'ofo/o4c.png', 'ofo/o5c.png', 'oodino/o3a.jpg', 'oodino/o12a.jpg', 'oodino/o1a.png', 'oodino/o2a.png', 'oodino/o4a.jpg', 'oodino/o6a.jpg', 'oodino/o8a.jpg', 'oodino/o10a.jpg', 'oodino/o5a.jpg', 'oodino/o7a.jpg', 'oodino/o9a.jpg', 'oodino/o11a.jpg'], this['_oQEA8'] = ['oolgo/o10b.png', 'oolgo/o11b.png', 'oolgo/o12b.png', 'oolgo/o13b.png', 'oolgo/o14b.png', 'oolgo/o15b.png', 'oolgo/o16b.png', 'oolgo/o17b.png', 'oolgo/o18b.png', 'oolgo/o19b.png', 'oolgo/o20b.png', 'oolgo/o21b.png', 'oolgo/o2b.jpg', 'oolgo/o3b.jpg', 'oolgo/o4b.jpg', 'oolgo/o5b.jpg', 'oolgo/o6b.jpg', 'oolgo/o1b.png', 'oolgo/o8b.png', 'oolgo/o9b.png', 'oolgo/o24b.png', 'oolgo/o25b.png', 'oolgo/o23b.png', 'oolgo/o26b.png', 'oolgo/o27b.png'], this['m_isPrelodServer'] = !0x1, this['m_isPrelodLoading'] = !0x1, this['oLo'] = !0x1, this['oUo'] = '', di21a[c[220016]] = this, Laya[c[220224]][c[220225]](), Laya3D[c[220225]](0x0, 0x0, !0x1, !0x1, !0x1), DecodeTools[c[220225]](), Laya[c[220191]]['scaleMode'] = Laya[c[220226]][c[220227]], Laya[c[220191]]['screenMode'] = Laya[c[220226]][c[220228]], Laya[c[220191]][c[220229]] = Laya[c[220226]][c[220230]], Laya[c[220191]][c[220231]] = Laya[c[220226]][c[220232]], Laya[c[220191]][c[220233]] = Laya[c[220226]][c[220234]];var zogbh8 = Laya['AtlasResourceManager'];zogbh8['maxTextureCount'] = 0x4, zogbh8[c[220235]] = zogbh8[c[220236]] = 0x400, zogbh8[c[220237]](), Laya[c[220238]]['rootPath'] = Laya[c[220238]][c[220239]] = '', Laya['Browser']['window'][c[220240]](Laya[c[220134]][c[220241]], this['oho'][c[220162]](this)), Laya['Loader']['preLoadedMap']['res/atlas/create_role_atlas.atlas'] = { 'frames': { 'btn_chuangjue_kaishi.png': { 'frame': { 'h': 0x58, 'idx': 0x0, 'w': 0x1fa, 'x': 0x0, 'y': 0x0 }, 'sourceSize': { 'h': 0x58, 'w': 0x1fa }, 'spriteSourceSize': { 'x': 0x0, 'y': 0x0 } }, 'btn_chuangjue_nan.png': { 'frame': { 'h': 0x62, 'idx': 0x0, 'w': 0x6c, 'x': 0x14f, 'y': 0x59 }, 'sourceSize': { 'h': 0x62, 'w': 0x6c }, 'spriteSourceSize': { 'x': 0x0, 'y': 0x0 } }, 'btn_chuangjue_nv.png': { 'frame': { 'h': 0x62, 'idx': 0x0, 'w': 0x6b, 'x': 0x0, 'y': 0xa4 }, 'sourceSize': { 'h': 0x62, 'w': 0x6b }, 'spriteSourceSize': { 'x': 0x0, 'y': 0x0 } }, 'image_chuangjue_mingbg.png': { 'frame': { 'h': 0x4a, 'idx': 0x0, 'w': 0x14e, 'x': 0x0, 'y': 0x59 }, 'sourceSize': { 'h': 0x4a, 'w': 0x14e }, 'spriteSourceSize': { 'x': 0x0, 'y': 0x0 } }, 'image_chuangjue_suiji.png': { 'frame': { 'h': 0x38, 'idx': 0x0, 'w': 0x34, 'x': 0x1bc, 'y': 0x59 }, 'sourceSize': { 'h': 0x38, 'w': 0x34 }, 'spriteSourceSize': { 'x': 0x0, 'y': 0x0 } } }, 'meta': { 'image': 'create_role_atlas.png', 'prefix': 'create_role_atlas/' } }, o_bhxog4['window']['resMgrLoad'] = di21a[c[220016]]['_oQEA'], o_bhxog4['window']['imgMgrLoad'] = di21a[c[220016]]['_oQEA'], this[c[220242]] = new Laya['Component'](), this[c[220242]][c[220243]] = '_wxLoadingLayer', Laya[c[220191]][c[220138]](this[c[220242]]), this['oho']();
  }return di21a['prototype']['_oUE8A'] = function (z4hob) {
    di21a[c[220016]][c[220242]][c[220145]] = z4hob;
  }, di21a['prototype']['_oQ8EUA'] = function () {
    di21a[c[220016]]['m_author'] || (di21a[c[220016]]['m_author'] = new o_zcmp8()), di21a[c[220016]]['m_author'][c[220212]] || di21a[c[220016]][c[220242]][c[220138]](di21a[c[220016]]['m_author']), di21a[c[220016]]['opo']();
  }, di21a['prototype']['closeAuthor'] = function () {
    this['m_author'] && this['m_author'][c[220212]] && (Laya[c[220191]]['removeChild'](this['m_author']), this['m_author']['destroy'](!0x0), this['m_author'] = null);
  }, di21a['prototype']['_oQEAU8'] = function () {
    this['m_isPrelodServer'] || (this['m_isPrelodServer'] = !0x0, Laya['loader']['load'](this['_oQEA8'], o_wf2i1[c[220081]](this, function () {
      o_bhxog4['window']['loadServerRes'] = !0x0, o_bhxog4['window']['_oEAU8'](), o_bhxog4['window']['_oEA8U']();
    })));
  }, di21a['prototype']['openServer'] = function () {
    for (var yunv3_ = function () {
      di21a[c[220016]][c[220244]] || (di21a[c[220016]][c[220244]] = new o_eyu_k0()), di21a[c[220016]][c[220244]][c[220212]] || di21a[c[220016]][c[220242]][c[220138]](di21a[c[220016]][c[220244]]), di21a[c[220016]]['opo']();
    }, w261 = !0x0, rcm5pt = 0x0, wg4x9f = this['_oQEA8']; rcm5pt < wg4x9f[c[220005]]; rcm5pt++) {
      var bgox4 = wg4x9f[rcm5pt];if (null == Laya['Loader'][c[220149]](bgox4)) {
        w261 = !0x1;break;
      }
    }w261 ? yunv3_() : Laya['loader']['load'](this['_oQEA8'], o_wf2i1[c[220081]](this, yunv3_));
  }, di21a['prototype']['closeServer'] = function () {
    this[c[220244]] && this[c[220244]][c[220212]] && (Laya[c[220191]]['removeChild'](this[c[220244]]), this[c[220244]]['destroy'](!0x0), this[c[220244]] = null);
  }, di21a['prototype']['preloadLoading'] = function () {
    this['m_isPrelodLoading'] || (this['m_isPrelodLoading'] = !0x0, Laya['loader']['load'](this['m_loadingRes'], o_wf2i1[c[220081]](this, function () {
      o_bhxog4['window']['loadLoadingRes'] = !0x0, o_bhxog4['window']['_oEAU8'](), o_bhxog4['window']['_oEA8U']();
    })));
  }, di21a['prototype']['openLoading'] = function (_eu0k) {
    void 0x0 === _eu0k && (_eu0k = 0x0), Laya['loader']['load'](this['m_loadingRes'], o_wf2i1[c[220081]](this, function () {
      di21a[c[220016]]['m_loading'] || (di21a[c[220016]]['m_loading'] = new o_di6la2(_eu0k)), di21a[c[220016]]['m_loading'][c[220212]] || di21a[c[220016]][c[220242]][c[220138]](di21a[c[220016]]['m_loading']), di21a[c[220016]]['opo']();
    }));
  }, di21a['prototype']['closeLoading'] = function () {
    this['m_loading'] && this['m_loading'][c[220212]] && (Laya[c[220191]]['removeChild'](this['m_loading']), this['m_loading']['destroy'](!0x0), this['m_loading'] = null);for (var d21iw6 = 0x0, hozc8b = this['_oQEA8']; d21iw6 < hozc8b[c[220005]]; d21iw6++) {
      var rmptq = hozc8b[d21iw6];Laya['Loader'][c[220245]](di21a[c[220016]], rmptq), Laya['Loader'][c[220246]](rmptq, !0x0);
    }for (var uvl3na = 0x0, bzc8ph = this['m_loadingRes']; uvl3na < bzc8ph[c[220005]]; uvl3na++) rmptq = bzc8ph[uvl3na], Laya['Loader'][c[220245]](di21a[c[220016]], rmptq), Laya['Loader'][c[220246]](rmptq, !0x0);this[c[220242]][c[220212]] && this[c[220242]][c[220212]]['removeChild'](this[c[220242]]);
  }, di21a['prototype']['_oQE'] = function () {
    this['m_loading'] && this['m_loading'][c[220212]] && di21a[c[220016]]['m_loading']['showGetBtn']();
  }, di21a['prototype'][c[220137]] = function () {
    var tmrcp5 = o_bhxog4['window']['_oAE'][c[220008]];this['oLo'] || -0x1 == tmrcp5[c[220195]] || 0x0 == tmrcp5[c[220195]] || (this['oLo'] = !0x0, o_bhxog4['window']['_oAE'][c[220008]] = tmrcp5, _oEUA8(0x0, tmrcp5[c[220009]]));
  }, di21a['prototype']['sendRecord'] = function () {
    var u_ln3 = '';u_ln3 += c[220247] + o_bhxog4['window']['_oAE'][c[220248]], u_ln3 += ', isPrelodServer=' + this['m_isPrelodServer'], u_ln3 += c[220249] + (null != di21a[c[220016]][c[220244]]), u_ln3 += ', isPrelodLoading=' + this['m_isPrelodLoading'], u_ln3 += ', LoadingPanel=' + (null != di21a[c[220016]]['m_loading']), u_ln3 += ', resMgrLoad=' + (o_bhxog4['window']['resMgrLoad'] == di21a[c[220016]]['_oQEA']), u_ln3 += ', imgMgrLoad=' + (o_bhxog4['window']['imgMgrLoad'] == di21a[c[220016]]['_oQEA']), u_ln3 += c[220250] + di21a[c[220016]]['oUo'];for (var da261i = 0x0, r5mq = this['_oQEA8']; da261i < r5mq[c[220005]]; da261i++) u_ln3 += ',\x20' + (xw9g4f = r5mq[da261i]) + '=' + (null != Laya['Loader'][c[220149]](xw9g4f));for (var ula3nv = 0x0, kye$_0 = this['m_loadingRes']; ula3nv < kye$_0[c[220005]]; ula3nv++) {
      var xw9g4f;u_ln3 += ',\x20' + (xw9g4f = kye$_0[ula3nv]) + '=' + (null != Laya['Loader'][c[220149]](xw9g4f));
    }var xiwf19 = o_bhxog4['window']['_oAE'][c[220008]];xiwf19 && (u_ln3 += c[220251] + xiwf19[c[220195]], u_ln3 += c[220252] + xiwf19[c[220009]], u_ln3 += c[220253] + xiwf19[c[220206]]), xiwf19 = JSON[c[220010]]({ 'error': c[220254], 'stack': u_ln3 }), (console['error'](xiwf19), this['oio'] && this['oio'] == u_ln3 || (this['oio'] = u_ln3, _oAUE(xiwf19)));
  }, di21a['prototype']['ovo'] = function () {
    var vl_3 = Laya[c[220191]],
        rq5mt = Math['floor'](vl_3[c[220150]]),
        m5trpq = Math['floor'](vl_3[c[220151]]);m5trpq / rq5mt < 1.7777778 ? (this[c[220255]] = Math['floor'](rq5mt / (m5trpq / 0x500)), this[c[220256]] = 0x500, this[c[220257]] = m5trpq / 0x500) : (this[c[220255]] = 0x2d0, this[c[220256]] = Math['floor'](m5trpq / (rq5mt / 0x2d0)), this[c[220257]] = rq5mt / 0x2d0), (rq5mt = Math['floor'](vl_3[c[220150]]), vl_3 = Math['floor'](vl_3[c[220151]])), (vl_3 / rq5mt < 1.7777778 ? (this[c[220255]] = Math['floor'](rq5mt / (vl_3 / 0x500)), this[c[220256]] = 0x500, this[c[220257]] = vl_3 / 0x500) : (this[c[220255]] = 0x2d0, this[c[220256]] = Math['floor'](vl_3 / (rq5mt / 0x2d0)), this[c[220257]] = rq5mt / 0x2d0), this['opo']());
  }, di21a['prototype']['opo'] = function () {
    this[c[220242]] && (this[c[220242]][c[220181]](this[c[220255]], this[c[220256]]), this[c[220242]][c[220171]](this[c[220257]], this[c[220257]], !0x0));
  }, di21a['prototype']['oho'] = function () {
    if (o__3uyen[c[220258]] && o_bhxog4['onMobile']) {
      var bo8gzh = parseInt(o__3uyen['inputContainer'][c[220182]]['top'][c[220003]]('px', '')),
          yek_ = parseInt(o__3uyen[c[220259]][c[220182]][c[220151]][c[220003]]('px', '')) * this[c[220257]],
          uv_nl = o_bhxog4[c[220260]] / o_v3nua[c[220261]][c[220150]];return 0x0 < (bo8gzh = o_bhxog4[c[220262]] - yek_ * uv_nl - bo8gzh) && (bo8gzh = 0x0), void (o_bhxog4['container'][c[220182]]['top'] = bo8gzh + 'px');
    }o_bhxog4['container'][c[220182]]['top'] = c[220263], yek_ = (yek_ = Math['floor'](o_bhxog4[c[220150]])) + 0x1 & 0x7ffffffe, uv_nl = (uv_nl = Math['floor'](o_bhxog4[c[220151]])) + 0x1 & 0x7ffffffe, bo8gzh = Laya[c[220191]], (0x3 == ENV || uv_nl < yek_ ? (bo8gzh['scaleMode'] = Laya[c[220226]][c[220264]], bo8gzh[c[220150]] = yek_, bo8gzh[c[220151]] = uv_nl) : (bo8gzh['scaleMode'] = Laya[c[220226]][c[220227]], bo8gzh[c[220150]] = 0x348, bo8gzh[c[220151]] = Math['floor'](uv_nl / (yek_ / 0x348)) + 0x1 & 0x7ffffffe), this['ovo']());
  }, di21a['prototype']['_oQEA'] = function (fxiw9, zp8mr) {
    function vanl36() {
      ohgx['onload'] = null, ohgx['onerror'] = null;
    }var ohgx,
        gfx9o = fxiw9;(ohgx = new o_bhxog4['window'][c[220087]]())['onload'] = function () {
      vanl36(), zp8mr(gfx9o, 0xc8, ohgx);
    }, ohgx['onerror'] = function () {
      console[c[220265]]('[warn] WX loadImage onerror:', gfx9o), di21a[c[220016]]['oUo'] += gfx9o + '|', vanl36(), zp8mr(gfx9o, 0x194, null);
    }, ohgx[c[220266]] = gfx9o, -0x1 == di21a[c[220016]]['_oQEA8'][c[220062]](gfx9o) && -0x1 == di21a[c[220016]]['m_loadingRes'][c[220062]](gfx9o) || Laya['Loader'][c[220267]](di21a[c[220016]], gfx9o);
  }, di21a['prototype']['oxo'] = function ($ey0k_, u3nye_) {
    return -0x1 != $ey0k_[c[220062]](u3nye_, $ey0k_[c[220005]] - u3nye_[c[220005]]);
  }, di21a;
}();!function (lvn3a6) {
  function ozhb8c() {
    var euk0y = eu_ynk[c[220084]](this) || this;return euk0y['ojo'] = c[220268], euk0y['o_o'] = c[220269], euk0y[c[220150]] = 0x112, euk0y[c[220151]] = 0x3b, euk0y['oKo'] = new Laya[c[220087]](), euk0y[c[220138]](euk0y['oKo']), euk0y['o$o'] = new Laya[c[220092]](), euk0y['o$o']['fontSize'] = 0x1e, euk0y['o$o']['color'] = euk0y['o_o'], euk0y[c[220138]](euk0y['o$o']), euk0y['o$o'][c[220131]] = 0x0, euk0y['o$o'][c[220132]] = 0x0, euk0y;
  }var eu_ynk;lvn3a6 = lvn3a6['ok'] || (lvn3a6['ok'] = {}), eu_ynk = Laya[c[220082]], o_e0_ky(ozhb8c, eu_ynk), ozhb8c['prototype'][c[220130]] = function () {
    eu_ynk['prototype'][c[220130]][c[220084]](this), this['ob'] = o_bhxog4['window']['_oAE'], this['ob']['loadingType'], this[c[220133]]();
  }, Object['defineProperty'](ozhb8c['prototype'], 'dataSource', { 'set': function (hpbcz8) {
      hpbcz8 && this[c[220270]](hpbcz8);
    }, 'enumerable': !0x0, 'configurable': !0x0 }), ozhb8c['prototype'][c[220270]] = function (pr5tcm) {
    this['oyo'] = pr5tcm[0x0], this['olo'] = pr5tcm[0x1], this['o$o'][c[220160]] = this['oyo'][c[220211]], this['o$o']['color'] = this['olo'] ? this['ojo'] : this['o_o'], this['oKo'][c[220141]] = this['olo'] ? 'oolgo/o25b.png' : 'oolgo/o24b.png';
  }, ozhb8c['prototype']['destroy'] = function (f4gxo) {
    void 0x0 === f4gxo && (f4gxo = !0x0), this[c[220136]](), eu_ynk['prototype']['destroy'][c[220084]](this, f4gxo);
  }, ozhb8c['prototype'][c[220133]] = function () {}, ozhb8c['prototype'][c[220136]] = function () {}, lvn3a6['NoticeItem'] = ozhb8c;
}(modules = modules || {}), function (davl36) {
  function y_3() {
    var ey$j0 = gw9xf[c[220084]](this) || this;return ey$j0[c[220150]] = 0xc0, ey$j0[c[220151]] = 0x46, ey$j0['oKo'] = new Laya[c[220087]](), ey$j0[c[220138]](ey$j0['oKo']), ey$j0['o$o'] = new Laya[c[220092]](), ey$j0['o$o']['fontSize'] = 0x1e, ey$j0['o$o']['color'] = ey$j0['oe'], ey$j0[c[220138]](ey$j0['o$o']), ey$j0['o$o'][c[220131]] = 0x0, ey$j0['o$o'][c[220132]] = 0x0, ey$j0;
  }var gw9xf;davl36 = davl36['ok'] || (davl36['ok'] = {}), gw9xf = Laya[c[220082]], o_e0_ky(y_3, gw9xf), y_3['prototype'][c[220130]] = function () {
    gw9xf['prototype'][c[220130]][c[220084]](this), this['ob'] = o_bhxog4['window']['_oAE'];var h4xb = this['ob']['loadingType'];this['oe'] = 0x1 != h4xb && 0x2 != h4xb && 0x3 == h4xb ? c[220271] : c[220269], this[c[220133]]();
  }, Object['defineProperty'](y_3['prototype'], 'dataSource', { 'set': function (hzb8c) {
      hzb8c && this[c[220270]](hzb8c);
    }, 'enumerable': !0x0, 'configurable': !0x0 }), y_3['prototype'][c[220270]] = function (k$_ey) {
    this['oyo'] = k$_ey, this['o$o'][c[220160]] = k$_ey[c[220243]], this['oKo'][c[220141]] = k$_ey[c[220214]] ? 'oolgo/o14b.png' : 'oolgo/o15b.png';
  }, y_3['prototype']['destroy'] = function (zh4ob) {
    void 0x0 === zh4ob && (zh4ob = !0x0), this[c[220136]](), gw9xf['prototype']['destroy'][c[220084]](this, zh4ob);
  }, y_3['prototype'][c[220133]] = function () {
    this['on'](Laya[c[220134]][c[220193]], this, this[c[220272]]);
  }, y_3['prototype'][c[220136]] = function () {
    this['off'](Laya[c[220134]][c[220193]], this, this[c[220272]]);
  }, y_3['prototype'][c[220272]] = function () {
    this['oyo'] && this['oyo'][c[220213]] && this['oyo'][c[220213]](this['oyo'][c[220215]]);
  }, davl36[c[220175]] = y_3;
}(modules = modules || {}), function (l3anuv) {
  function oc8() {
    var tcmrp = vd3la[c[220084]](this) || this;return tcmrp['oKo'] = new Laya[c[220087]]('oolgo/o16b.png'), tcmrp['o$o'] = new Laya[c[220092]](), tcmrp['o$o']['fontSize'] = 0x1e, tcmrp['o$o']['color'] = tcmrp['oe'], tcmrp[c[220138]](tcmrp['oKo']), tcmrp['oSo'] = new Laya[c[220087]](), tcmrp[c[220138]](tcmrp['oSo']), tcmrp[c[220150]] = 0x166, tcmrp[c[220151]] = 0x46, tcmrp[c[220138]](tcmrp['o$o']), tcmrp['oSo'][c[220132]] = 0x0, tcmrp['oSo']['x'] = 0x12, tcmrp['o$o']['x'] = 0x50, tcmrp['o$o'][c[220132]] = 0x0, tcmrp['oKo'][c[220273]][c[220274]](0x0, 0x0, tcmrp[c[220150]], tcmrp[c[220151]], c[220275]), tcmrp;
  }var vd3la;l3anuv = l3anuv['ok'] || (l3anuv['ok'] = {}), vd3la = Laya[c[220082]], o_e0_ky(oc8, vd3la), oc8['prototype'][c[220130]] = function () {
    vd3la['prototype'][c[220130]][c[220084]](this), this['ob'] = o_bhxog4['window']['_oAE'];var i162da = this['ob']['loadingType'];this['oe'] = 0x1 != i162da && 0x2 != i162da && 0x3 == i162da ? c[220271] : c[220276], this[c[220133]]();
  }, Object['defineProperty'](oc8['prototype'], 'dataSource', { 'set': function (t75qm) {
      t75qm && this[c[220270]](t75qm);
    }, 'enumerable': !0x0, 'configurable': !0x0 }), oc8['prototype'][c[220270]] = function (tqrpm5) {
    this['oyo'] = tqrpm5, this['o$o']['color'] = -0x1 === tqrpm5[c[220195]] ? c[220209] : 0x0 === tqrpm5[c[220195]] ? c[220210] : this['oe'], this['o$o'][c[220160]] = -0x1 === tqrpm5[c[220195]] ? tqrpm5[c[220206]] + c[220207] : 0x0 === tqrpm5[c[220195]] ? tqrpm5[c[220206]] + c[220208] : tqrpm5[c[220206]], this['oSo'][c[220141]] = this[c[220205]](tqrpm5[c[220195]]);
  }, oc8['prototype']['destroy'] = function (ifw) {
    void 0x0 === ifw && (ifw = !0x0), this[c[220136]](), vd3la['prototype']['destroy'][c[220084]](this, ifw);
  }, oc8['prototype'][c[220133]] = function () {
    this['on'](Laya[c[220134]][c[220193]], this, this[c[220272]]);
  }, oc8['prototype'][c[220136]] = function () {
    this['off'](Laya[c[220134]][c[220193]], this, this[c[220272]]);
  }, oc8['prototype'][c[220272]] = function () {
    this['oyo'] && this['oyo'][c[220213]] && this['oyo'][c[220213]](this['oyo']);
  }, oc8['prototype'][c[220205]] = function (d6i1w2) {
    var qr5mtp = '';return 0x2 === d6i1w2 ? qr5mtp = 'oolgo/o18b.png' : 0x1 === d6i1w2 ? qr5mtp = 'oolgo/o19b.png' : -0x1 !== d6i1w2 && 0x0 !== d6i1w2 || (qr5mtp = 'oolgo/o20b.png'), qr5mtp;
  }, l3anuv[c[220178]] = oc8;
}(modules = modules || {}), window['ServerLoading'] = o_vlda62;