'use strict';

var G = wx.$G;
var aofd1u4,
    a$sr_mz = this && this[G[620335]] || function () {
  var a6vk75 = Object[G[620336]] || { '__proto__': [] } instanceof Array && function (tbnmx, xbni) {
    tbnmx[G[620337]] = xbni;
  } || function (av7k6l, p10ow) {
    for (var d54afk in p10ow) p10ow[G[620338]](d54afk) && (av7k6l[d54afk] = p10ow[d54afk]);
  };return function (_rqs, od14fu) {
    function zxmbnt() {
      this[G[620339]] = _rqs;
    }a6vk75(_rqs, od14fu), _rqs[G[620340]] = null === od14fu ? Object[G[620341]](od14fu) : (zxmbnt[G[620340]] = od14fu[G[620340]], new zxmbnt());
  };
}(),
    ao5fkd = laya['ui'][G[620342]],
    anzbstm = laya['ui']['Dialog'];!function (l7v86) {
  var e3r = function (kav45f) {
    function cxyih() {
      return kav45f[G[620343]](this) || this;
    }return a$sr_mz(cxyih, kav45f), cxyih[G[620340]][G[620344]] = function () {
      kav45f[G[620340]][G[620344]][G[620343]](this), this[G[620345]](l7v86['F$J'][G[620346]]);
    }, cxyih[G[620346]] = { 'type': G[620342], 'props': { 'width': 0x2d0, 'name': G[620347], 'height': 0x500 }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x2d0, 'var': 'bgImg', 'skin': 'z888z888lgrz888z888/z888z8882b.jpg', 'name': 'bg', 'height': 0x500, 'centerY': 0x0, 'centerX': 0x0 } }, { 'type': G[620348], 'props': { 'y': 0x0, 'width': 0x2d0, 'right': 0x0, 'height': 0x500 }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x2d0, 'var': 'topImg', 'top': -0x8b, 'skin': 'z888z888lgrz888z888/z888z8886b.jpg', 'height': 0x8b, 'centerX': 0x0, 'anchorY': 0x1 } }, { 'type': 'Image', 'props': { 'width': 0x2d0, 'var': 'btmImg', 'top': 0x500, 'skin': 'z888z888lgrz888z888/z888z8883b.jpg', 'height': 0x8b, 'centerX': 0x0 } }, { 'type': 'Image', 'props': { 'x': -0xdc, 'width': 0xdc, 'var': 'leftImg', 'skin': 'z888z888lgrz888z888/z888z8884b.jpg', 'left': -0xdc, 'height': 0x500, 'centerY': 0x0 } }, { 'type': 'Image', 'props': { 'width': 0xdc, 'var': 'rightImg', 'skin': 'z888z888lgrz888z888/z888z8885b.jpg', 'left': 0x2d0, 'height': 0x500, 'centerY': 0x0 } }] }] }, cxyih;
  }(ao5fkd);l7v86['F$J'] = e3r;
}(aofd1u4 || (aofd1u4 = {})), function (s$_mrz) {
  var yi2chx = function (pu10ow) {
    function eqsr() {
      return pu10ow[G[620343]](this) || this;
    }return a$sr_mz(eqsr, pu10ow), eqsr[G[620340]][G[620344]] = function () {
      pu10ow[G[620340]][G[620344]][G[620343]](this), this[G[620345]](s$_mrz['F$y'][G[620346]]);
    }, eqsr[G[620346]] = { 'type': G[620342], 'props': { 'width': 0x2d0, 'name': 'P_LoadingView', 'height': 0x500 }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x2d0, 'var': 'bgImg', 'name': 'bg', 'height': 0x500, 'centerY': 0x0, 'centerX': 0x0 } }, { 'type': G[620348], 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x2d0, 'height': 0x500 }, 'child': [{ 'type': 'Image', 'props': { 'var': 'topImg', 'centerX': 0x0, 'bottom': 0x500, 'anchorY': 0x1 } }, { 'type': 'Image', 'props': { 'var': 'btmImg', 'top': 0x500, 'centerX': 0x0 } }, { 'type': 'Image', 'props': { 'var': 'leftImg', 'right': 0x2d0, 'pivotX': 0x1, 'centerY': 0x0 } }, { 'type': 'Image', 'props': { 'var': 'rightImg', 'left': 0x2d0, 'centerY': 0x0 } }] }, { 'type': 'Image', 'props': { 'var': 'copyRightImg', 'skin': 'z888z888lgrz888z888/z888z8881b.png', 'centerX': 0x0, 'bottom': 0xa } }, { 'type': G[620348], 'props': { 'y': 0x3c3, 'x': 0x0, 'width': 0x2d0, 'var': G[620349], 'name': G[620349], 'height': 0x82 }, 'child': [{ 'type': 'Image', 'props': { 'y': 0x2e, 'x': 0x3e, 'width': 0x254, 'var': 'loadingBarBg', 'skin': 'z888z888dz888/z888z88813a.png', 'height': 0x1b, 'centerX': 0x0 } }, { 'type': 'Image', 'props': { 'y': 0x31, 'x': 0x40, 'width': 0x24e, 'var': 'loadingBar', 'skin': 'z888z888dz888/z888z88814a.png', 'height': 0x15 } }, { 'type': 'Image', 'props': { 'y': 0x37, 'x': 0x1fb, 'width': 0xd0, 'var': 'loadingImg1', 'skin': 'z888z888dz888/z888z88816a.png', 'height': 0xb } }, { 'type': 'Image', 'props': { 'y': 0x6, 'x': 0x274, 'width': 0x27, 'var': 'loadingImg2', 'skin': 'z888z888dz888/z888z88817a.png', 'height': 0x74 } }, { 'type': G[620350], 'props': { 'y': 0x30, 'x': 0x125, 'width': 0x86, 'var': 'percentageTips', 'valign': G[620351], 'text': G[620352], 'strokeColor': G[620353], 'stroke': 0x3, 'height': 0x18, 'fontSize': 0x18, 'color': G[620354], 'centerX': 0x0, 'bold': !0x1, 'align': G[620355] } }] }, { 'type': G[620348], 'props': { 'y': 0x429, 'x': 0x0, 'width': 0x2d0, 'var': G[620356], 'name': G[620356], 'height': 0x11 }, 'child': [{ 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x133, 'var': G[620357], 'skin': 'z888z888dz888/z888z88820a.png', 'centerX': -0x2d } }, { 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x151, 'var': G[620358], 'skin': 'z888z888dz888/z888z88819a.png', 'centerX': -0xf } }, { 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x16f, 'var': G[620359], 'skin': 'z888z888dz888/z888z88818a.png', 'centerX': 0xf } }, { 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x18d, 'var': G[620360], 'skin': 'z888z888dz888/z888z88818a.png', 'centerX': 0x2d } }] }, { 'type': G[620361], 'props': { 'y': 0x316, 'x': 0x37, 'visible': !0x1, 'var': 'getTipsBtn', 'stateNum': 0x1, 'skin': 'z888z888dz888/z888z8881a.png', 'name': 'getTipsBtn', 'labelSize': 0x1e, 'labelFont': G[620362], 'labelColors': G[620363] }, 'child': [{ 'type': G[620350], 'props': { 'y': 0x9b, 'x': 0x92, 'width': 0x143, 'var': G[620364], 'text': G[620365], 'name': G[620364], 'height': 0x1e, 'fontSize': 0x1e, 'color': G[620366], 'align': G[620355] } }] }, { 'type': G[620350], 'props': { 'y': 0x453, 'width': 0x1f4, 'var': 'loadingTips', 'valign': G[620351], 'text': G[620367], 'height': 0x1a, 'fontSize': 0x1a, 'color': G[620368], 'centerX': 0x0, 'bold': !0x1, 'align': G[620355] } }, { 'type': G[620350], 'props': { 'y': 0xa, 'x': 0xa, 'width': 0x156, 'var': G[620369], 'valign': G[620351], 'top': 0x14, 'text': G[620370], 'strokeColor': G[620371], 'stroke': 0x2, 'right': 0x14, 'height': 0x20, 'fontSize': 0x18, 'color': G[620372], 'bold': !0x1, 'align': 'right' } }] }, eqsr;
  }(ao5fkd);s$_mrz['F$y'] = yi2chx;
}(aofd1u4 || (aofd1u4 = {})), function (c2yhj) {
  var szmnr_ = function (nsrbzm) {
    function mzn_s() {
      return nsrbzm[G[620343]](this) || this;
    }return a$sr_mz(mzn_s, nsrbzm), mzn_s[G[620340]][G[620344]] = function () {
      ao5fkd['regComponent'](G[620373], laya[G[620374]][G[620375]][G[620373]]), ao5fkd['regComponent'](G[620376], laya[G[620377]][G[620376]]), nsrbzm[G[620340]][G[620344]][G[620343]](this), this[G[620345]](c2yhj['F$T'][G[620346]]);
    }, mzn_s[G[620346]] = { 'type': G[620342], 'props': { 'width': 0x2d0, 'name': G[620378], 'height': 0x500 }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x2d0, 'var': 'bgImg', 'skin': 'z888z888lgrz888z888/z888z8882b.jpg', 'name': 'bg', 'height': 0x500, 'centerY': 0x0, 'centerX': 0x0 } }, { 'type': G[620348], 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x2d0, 'height': 0x500 }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x2d0, 'var': 'topImg', 'skin': 'z888z888lgrz888z888/z888z8886b.jpg', 'bottom': 0x4ff } }, { 'type': 'Image', 'props': { 'width': 0x2d0, 'var': 'btmImg', 'top': 0x4ff, 'skin': 'z888z888lgrz888z888/z888z8883b.jpg' } }, { 'type': 'Image', 'props': { 'var': 'leftImg', 'skin': 'z888z888lgrz888z888/z888z8884b.jpg', 'right': 0x2cf, 'height': 0x500 } }, { 'type': 'Image', 'props': { 'var': 'rightImg', 'skin': 'z888z888lgrz888z888/z888z8885b.jpg', 'left': 0x2cf, 'height': 0x500 } }] }, { 'type': 'Image', 'props': { 'y': 0x34d, 'var': G[620379], 'skin': 'z888z888lgrz888z888/z888z88821b.png', 'centerX': 0x0 } }, { 'type': 'Image', 'props': { 'y': 0x44e, 'var': 'imgCheatTip', 'skin': 'z888z888lgrz888z888/z888z88827b.png', 'name': 'imgCheatTip', 'centerX': 0x0 } }, { 'type': 'Image', 'props': { 'y': 0x3a2, 'x': 0xa2, 'var': 'hotImage', 'skin': 'z888z888lgrz888z888/z888z88818b.png' } }, { 'type': 'Image', 'props': { 'var': 'copyRightImg', 'skin': 'z888z888lgrz888z888/z888z8881b.png', 'centerX': 0x0, 'bottom': 0x1e } }, { 'type': 'Image', 'props': { 'y': 0x3f7, 'var': G[620380], 'stateNum': 0x1, 'skin': 'z888z888lgrz888z888/z888z88812b.png', 'name': G[620380], 'centerX': 0x0 } }, { 'type': 'Image', 'props': { 'x': 0xc4, 'visible': !0x1, 'var': 'privacyToggle', 'skin': 'z888z888lgrz888z888/z888z88829b.png', 'bottom': 0x4 } }, { 'type': G[620350], 'props': { 'y': 0x280, 'x': 0x0, 'width': 0x2d0, 'var': G[620381], 'valign': G[620351], 'text': G[620382], 'strokeColor': G[620383], 'stroke': 0x2, 'height': 0x20, 'fontSize': 0x20, 'color': G[620384], 'bold': !0x1, 'align': G[620355] } }, { 'type': G[620350], 'props': { 'y': 0x3a4, 'x': 0x209, 'var': G[620385], 'valign': G[620351], 'text': G[620386], 'height': 0x20, 'fontSize': 0x1e, 'color': G[620387], 'bold': !0x1, 'align': G[620355] } }, { 'type': G[620350], 'props': { 'y': 0x3a4, 'width': 0x156, 'var': G[620388], 'valign': G[620351], 'text': G[620389], 'height': 0x20, 'fontSize': 0x1e, 'color': G[620387], 'centerX': 0x0, 'bold': !0x1, 'align': G[620355] } }, { 'type': G[620350], 'props': { 'width': 0x156, 'var': G[620369], 'valign': G[620351], 'top': 0x14, 'text': G[620370], 'strokeColor': G[620371], 'stroke': 0x2, 'right': 0x14, 'height': 0x20, 'fontSize': 0x18, 'color': G[620372], 'bold': !0x1, 'align': 'right' } }, { 'type': G[620373], 'props': { 'y': 0x4e7, 'x': 0x100, 'visible': !0x1, 'var': G[620390], 'height': 0x10 } }, { 'type': 'Image', 'props': { 'y': 0x7f, 'x': 593.5, 'var': G[620391], 'skin': 'z888z888lgrz888z888/z888z88811b.png' } }, { 'type': 'Image', 'props': { 'y': 0x101, 'x': 0x252, 'visible': !0x1, 'var': G[620392], 'skin': 'z888z888lgrz888z888/z888z88813b.png', 'name': G[620392] } }, { 'type': 'Image', 'props': { 'y': 0x47, 'x': -0x2, 'visible': !0x1, 'var': 'noticeBg', 'skin': 'z888z888lgrz888z888/z888z8888b.png', 'centerY': 0x0, 'centerX': 0x0 }, 'child': [{ 'type': 'Image', 'props': { 'y': 36.5, 'x': 0x268, 'var': G[620393], 'skin': 'z888z888lgrz888z888/z888z88810b.png' } }, { 'type': G[620350], 'props': { 'y': 0x48, 'x': 0xd8, 'width': 0xea, 'var': G[620394], 'valign': G[620351], 'text': G[620395], 'height': 0x23, 'fontSize': 0x1e, 'color': G[620383], 'bold': !0x1, 'align': G[620355] } }, { 'type': G[620376], 'props': { 'y': 0x8e, 'x': 0x3d, 'wordWrap': !0x0, 'width': 0x221, 'var': G[620396], 'valign': G[620082], 'overflow': G[620397], 'mouseEnabled': !0x0, 'leading': 0x4, 'height': 0x366, 'fontSize': 0x1a, 'color': G[620398] } }] }, { 'type': 'Image', 'props': { 'visible': !0x1, 'var': 'mNoticeBg', 'skin': 'z888z888lgrz888z888/z888z8888b.png', 'centerY': 0x0, 'centerX': 0x0 }, 'child': [{ 'type': 'Image', 'props': { 'y': 36.5, 'x': 0x268, 'var': G[620399], 'skin': 'z888z888lgrz888z888/z888z88810b.png' } }, { 'type': G[620361], 'props': { 'y': 0x388, 'x': 0xbe, 'var': G[620400], 'stateNum': 0x1, 'skin': 'z888z888lgrz888z888/z888z88825b.png', 'labelSize': 0x1e, 'labelColors': G[620401], 'label': G[620402] } }, { 'type': G[620348], 'props': { 'y': 0x388, 'x': 0x22, 'width': 0x254, 'var': G[620403], 'height': 0x3b } }, { 'type': G[620350], 'props': { 'y': 0x48, 'x': 0xd8, 'width': 0xea, 'var': G[620404], 'valign': G[620351], 'text': G[620395], 'height': 0x23, 'fontSize': 0x1e, 'color': G[620383], 'bold': !0x1, 'align': G[620355] } }, { 'type': G[620405], 'props': { 'y': 0x8e, 'x': 0x3d, 'width': 0x221, 'var': G[620406], 'height': 0x2dd }, 'child': [{ 'type': G[620373], 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x221, 'var': G[620407], 'height': 0x2dd } }] }] }, { 'type': 'Image', 'props': { 'visible': !0x1, 'var': 'privacyBg', 'skin': 'z888z888lgrz888z888/z888z8888b.png', 'name': 'privacyBg', 'centerY': 0x0, 'centerX': 0x0 }, 'child': [{ 'type': 'Image', 'props': { 'y': 36.5, 'x': 0x268, 'var': G[620408], 'skin': 'z888z888lgrz888z888/z888z88810b.png' } }, { 'type': G[620361], 'props': { 'y': 0x388, 'x': 0xbe, 'var': G[620409], 'stateNum': 0x1, 'skin': 'z888z888lgrz888z888/z888z88825b.png', 'labelSize': 0x1e, 'labelColors': G[620401], 'label': G[620402] } }, { 'type': G[620348], 'props': { 'y': 0x388, 'x': 0x22, 'width': 0x254, 'var': G[620410], 'height': 0x3b } }, { 'type': G[620350], 'props': { 'y': 0x48, 'x': 0xd8, 'width': 0xea, 'var': G[620411], 'valign': G[620351], 'text': G[620395], 'height': 0x23, 'fontSize': 0x1e, 'color': G[620383], 'bold': !0x1, 'align': G[620355] } }, { 'type': G[620405], 'props': { 'y': 0x8e, 'x': 0x3d, 'width': 0x221, 'var': G[620412], 'height': 0x2dd }, 'child': [{ 'type': G[620373], 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x221, 'var': G[620413], 'height': 0x2dd } }] }] }, { 'type': 'Image', 'props': { 'visible': !0x1, 'var': 'listBg', 'skin': 'z888z888lgrz888z888/z888z8889b.png', 'centerY': 0x0, 'centerX': 0x0 }, 'child': [{ 'type': G[620348], 'props': { 'y': 0x75, 'x': 0x3d, 'width': 0xc8, 'var': G[620414], 'height': 0x389 } }, { 'type': G[620348], 'props': { 'y': 0x75, 'x': 0x125, 'width': 0x166, 'var': 'rightListBox', 'height': 0x389 } }, { 'type': 'Image', 'props': { 'y': 0xd, 'x': 0x282, 'var': 'closeBg', 'skin': 'z888z888lgrz888z888/z888z88817b.png' } }] }, { 'type': G[620348], 'props': { 'width': 0x2d0, 'visible': !0x1, 'var': 'jumpBg', 'mouseThrough': !0x1, 'height': 0x500, 'centerY': 0x0, 'centerX': 0x0 }, 'child': [{ 'type': 'Image', 'props': { 'y': 0x8f, 'x': 0x21, 'skin': 'z888z888lgrz888z888/z888z8888b.png', 'centerY': 0x0, 'centerX': 0x0 } }, { 'type': G[620361], 'props': { 'y': 0x417, 'x': 0xdf, 'var': G[620415], 'stateNum': 0x1, 'skin': 'z888z888lgrz888z888/z888z88825b.png', 'labelSize': 0x1e, 'labelColors': G[620401], 'label': G[620416] } }, { 'type': G[620350], 'props': { 'y': 0xd7, 'x': 0xf9, 'width': 0xea, 'var': G[620417], 'valign': G[620351], 'text': G[620395], 'height': 0x23, 'fontSize': 0x1e, 'color': G[620383], 'bold': !0x1, 'align': G[620355] } }, { 'type': G[620405], 'props': { 'y': 0x11d, 'x': 0x5e, 'width': 0x221, 'var': G[620418], 'height': 0x2dd }, 'child': [{ 'type': G[620373], 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x221, 'var': G[620419], 'height': 0x2dd } }] }] }] }, mzn_s;
  }(ao5fkd);c2yhj['F$T'] = szmnr_;
}(aofd1u4 || (aofd1u4 = {})), function (p19g0w) {
  var inzxb, mbzntx;inzxb = p19g0w['F$V'] || (p19g0w['F$V'] = {}), mbzntx = function (duo5) {
    function wg1p90() {
      return duo5[G[620343]](this) || this;
    }return a$sr_mz(wg1p90, duo5), wg1p90[G[620340]][G[620420]] = function () {
      duo5[G[620340]][G[620420]][G[620343]](this), this[G[620421]] = 0x0, this[G[620422]] = 0x0, this[G[620423]](), this[G[620424]]();
    }, wg1p90[G[620340]][G[620423]] = function () {
      this['on'](Laya[G[620425]][G[620426]], this, this['F$Z']);
    }, wg1p90[G[620340]][G[620427]] = function () {
      this[G[620428]](Laya[G[620425]][G[620426]], this, this['F$Z']);
    }, wg1p90[G[620340]][G[620424]] = function () {
      this['F$m'] = Date[G[620115]](), amre_[G[620028]]['gG860A'](), amre_[G[620028]]['preloadLoading']();
    }, wg1p90[G[620340]][G[620429]] = function (dow10) {
      void 0x0 === dow10 && (dow10 = !0x0), this[G[620427]](), duo5[G[620340]][G[620429]][G[620343]](this, dow10);
    }, wg1p90[G[620340]]['F$Z'] = function () {
      0x2710 < Date[G[620115]]() - this['F$m'] && (this['F$m'] -= 0x3e8, abmnzrs[G[620430]]['g08'][G[620018]][G[620019]] && (amre_[G[620028]][G[620431]](), amre_[G[620028]][G[620432]]()));
    }, wg1p90;
  }(aofd1u4['F$J']), inzxb[G[620433]] = mbzntx;
}(modules || (modules = {})), function (hixy2) {
  var f54odk, uw09, w9up10, ih2cyx, fuo, du0wo;f54odk = hixy2['F$R'] || (hixy2['F$R'] = {}), uw09 = Laya[G[620425]], w9up10 = Laya['Image'], ih2cyx = Laya[G[620434]], fuo = Laya[G[620435]], du0wo = function (tx2) {
    function p0wg91() {
      var pu0 = tx2[G[620343]](this) || this;return pu0['F$n'] = new w9up10(), pu0[G[620436]](pu0['F$n']), pu0['F$K'] = null, pu0['F$A'] = [], pu0['F$$'] = !0x1, pu0['F$e'] = 0x0, pu0['F$M'] = !0x0, pu0['F$G'] = 0x6, pu0['F$B'] = !0x1, pu0['on'](uw09[G[620437]], pu0, pu0['F$o']), pu0['on'](uw09[G[620438]], pu0, pu0['F$s']), pu0;
    }return a$sr_mz(p0wg91, tx2), p0wg91[G[620341]] = function (z_s$mr, i2xht, k5afv7, f5du4, u01, e$m_r, zr_m$) {
      void 0x0 === f5du4 && (f5du4 = 0x0), void 0x0 === u01 && (u01 = 0x6), void 0x0 === e$m_r && (e$m_r = !0x0), void 0x0 === zr_m$ && (zr_m$ = !0x1);var mr_ns = new p0wg91();return mr_ns[G[620439]](i2xht, k5afv7, f5du4), mr_ns[G[620440]] = u01, mr_ns[G[620441]] = e$m_r, mr_ns[G[620442]] = zr_m$, z_s$mr && z_s$mr[G[620436]](mr_ns), mr_ns;
    }, p0wg91[G[620443]] = function (ofud5) {
      ofud5 && (ofud5[G[620444]] = !0x0, ofud5[G[620443]]());
    }, p0wg91[G[620445]] = function (sm_r$) {
      sm_r$ && (sm_r$[G[620444]] = !0x1, sm_r$[G[620445]]());
    }, p0wg91[G[620340]][G[620429]] = function (e3$q8_) {
      Laya[G[620446]][G[620447]](this, this['F$E']), this[G[620428]](uw09[G[620437]], this, this['F$o']), this[G[620428]](uw09[G[620438]], this, this['F$s']), tx2[G[620340]][G[620429]][G[620343]](this, e3$q8_);
    }, p0wg91[G[620340]]['F$o'] = function () {}, p0wg91[G[620340]]['F$s'] = function () {}, p0wg91[G[620340]][G[620439]] = function (zixb, es_$mr, av56) {
      if (this['F$K'] != zixb) {
        this['F$K'] = zixb, this['F$A'] = [];for (var rzmbsn = 0x0, _srz$ = av56; _srz$ <= es_$mr; _srz$++) this['F$A'][rzmbsn++] = zixb + '/' + _srz$ + '.png';var sq_er$ = fuo['getRes'](this['F$A'][0x0]);sq_er$ && (this[G[620329]] = sq_er$[G[620448]], this['height'] = sq_er$['sourceHeight']), this['F$E']();
      }
    }, Object[G[620449]](p0wg91[G[620340]], G[620442], { 'get': function () {
        return this['F$B'];
      }, 'set': function ($_3erq) {
        this['F$B'] = $_3erq;
      }, 'enumerable': !0x0, 'configurable': !0x0 }), Object[G[620449]](p0wg91[G[620340]], G[620440], { 'set': function (av657k) {
        this['F$G'] != av657k && (this['F$G'] = av657k, this['F$$'] && (Laya[G[620446]][G[620447]](this, this['F$E']), Laya[G[620446]][G[620441]](this['F$G'] * (0x3e8 / 0x3c), this, this['F$E'])));
      }, 'enumerable': !0x0, 'configurable': !0x0 }), Object[G[620449]](p0wg91[G[620340]], G[620441], { 'set': function (wp109) {
        this['F$M'] = wp109;
      }, 'enumerable': !0x0, 'configurable': !0x0 }), p0wg91[G[620340]][G[620443]] = function () {
      this['F$$'] && this[G[620445]](), this['F$$'] = !0x0, this['F$e'] = 0x0, Laya[G[620446]][G[620441]](this['F$G'] * (0x3e8 / 0x3c), this, this['F$E']), this['F$E']();
    }, p0wg91[G[620340]][G[620445]] = function () {
      this['F$$'] = !0x1, this['F$e'] = 0x0, this['F$E'](), Laya[G[620446]][G[620447]](this, this['F$E']);
    }, p0wg91[G[620340]][G[620450]] = function () {
      this['F$$'] && (this['F$$'] = !0x1, Laya[G[620446]][G[620447]](this, this['F$E']));
    }, p0wg91[G[620340]][G[620451]] = function () {
      this['F$$'] || (this['F$$'] = !0x0, Laya[G[620446]][G[620441]](this['F$G'] * (0x3e8 / 0x3c), this, this['F$E']), this['F$E']());
    }, Object[G[620449]](p0wg91[G[620340]], G[620452], { 'get': function () {
        return this['F$$'];
      }, 'enumerable': !0x0, 'configurable': !0x0 }), p0wg91[G[620340]]['F$E'] = function () {
      this['F$A'] && 0x0 != this['F$A']['length'] && (this['F$n'][G[620439]] = this['F$A'][this['F$e']], this['F$$'] && (this['F$e']++, this['F$e'] == this['F$A']['length'] && (this['F$M'] ? this['F$e'] = 0x0 : (Laya[G[620446]][G[620447]](this, this['F$E']), this['F$$'] = !0x1, this['F$B'] && (this[G[620444]] = !0x1), this[G[620453]](uw09[G[620454]])))));
    }, p0wg91;
  }(ih2cyx), f54odk[G[620455]] = du0wo;
}(modules || (modules = {})), function (n_smzr) {
  var f45akd, bxtyi, q6le38;f45akd = n_smzr['F$V'] || (n_smzr['F$V'] = {}), bxtyi = n_smzr['F$R'][G[620455]], q6le38 = function ($3e8lq) {
    function vakf57(r_zns) {
      void 0x0 === r_zns && (r_zns = 0x0);var ibt = $3e8lq[G[620343]](this) || this;return ibt['F$O'] = { 'bgImgSkin': 'z888z888dz888/z888z8883a.jpg', 'topImgSkin': 'z888z888dz888/z888z88810a.jpg', 'btmImgSkin': 'z888z888dz888/z888z8884a.jpg', 'leftImgSkin': 'z888z888dz888/z888z8886a.jpg', 'rightImgSkin': 'z888z888dz888/z888z8888a.jpg', 'loadingBarBgSkin': 'z888z888dz888/z888z88813a.png', 'copyRightImgBottom': 0xa, 'processBox1Y': 0x3c3, 'processBox2Y': 0x429, 'loadingTipsSize': 0x1a, 'getTipsBtnVisible': !0x1 }, ibt['F$L'] = { 'bgImgSkin': 'z888z888dz888/z888z88812a.jpg', 'topImgSkin': 'z888z888dz888/z888z88811a.jpg', 'btmImgSkin': 'z888z888dz888/z888z8885a.jpg', 'leftImgSkin': 'z888z888dz888/z888z8887a.jpg', 'rightImgSkin': 'z888z888dz888/z888z8889a.jpg', 'loadingBarBgSkin': 'z888z888dz888/z888z88815a.png', 'copyRightImgBottom': 0xa, 'processBox1Y': 0x3c3, 'processBox2Y': 0x429, 'loadingTipsSize': 0x1a, 'getTipsBtnVisible': !0x1 }, ibt['F$H'] = 0x0, ibt['F$P'](0x1 == r_zns ? ibt['F$L'] : ibt['F$O']), ibt;
    }return a$sr_mz(vakf57, $3e8lq), vakf57[G[620340]][G[620420]] = function () {
      if ($3e8lq[G[620340]][G[620420]][G[620343]](this), amre_[G[620028]]['preloadLoading'](), this['F$l'] = abmnzrs[G[620430]]['g08'], this[G[620421]] = 0x0, this[G[620422]] = 0x0, this['F$l']) {
        var wou41 = this['F$l']['loadingType'];this['loadingTips'][G[620456]] = 0x1 == wou41 ? G[620368] : 0x2 == wou41 ? G[620457] : 0x65 == wou41 ? G[620457] : G[620368];
      }this['F$a'] = [this[G[620357]], this[G[620358]], this[G[620359]], this[G[620360]]], abmnzrs[G[620430]][G[620458]] = this, gA086(), amre_[G[620028]][G[620161]](), amre_[G[620028]][G[620162]](), this[G[620424]]();
    }, vakf57[G[620340]]['gA08'] = function (hiytx) {
      var txbyih = this;if (-0x1 === hiytx) return txbyih['F$H'] = 0x0, Laya[G[620446]][G[620447]](this, this['gA08']), void Laya[G[620446]][G[620459]](0x1, this, this['gA08']);if (-0x2 !== hiytx) {
        txbyih['F$H'] < 0.9 ? txbyih['F$H'] += (0.15 * Math[G[620176]]() + 0.01) / (0x64 * Math[G[620176]]() + 0x32) : txbyih['F$H'] < 0x1 && (txbyih['F$H'] += 0.0001), 0.9999 < txbyih['F$H'] && (txbyih['F$H'] = 0.9999, Laya[G[620446]][G[620447]](this, this['gA08']), Laya[G[620446]][G[620460]](0xbb8, this, function () {
          0.9 < txbyih['F$H'] && gA08(-0x1);
        }));var q38l$e = txbyih['F$H'],
            rmnsbz = 0x24e * q38l$e;txbyih['F$H'] = txbyih['F$H'] > q38l$e ? txbyih['F$H'] : q38l$e, txbyih['loadingBar'][G[620329]] = rmnsbz;var ycjh = txbyih['loadingBar']['x'] + rmnsbz;txbyih['loadingImg2']['x'] = ycjh - 0xf, 0x16c <= ycjh ? (txbyih['loadingImg1'][G[620444]] = !0x0, txbyih['loadingImg1']['x'] = ycjh - 0xca) : txbyih['loadingImg1'][G[620444]] = !0x1, txbyih['percentageTips'][G[620275]] = (0x64 * q38l$e >> 0x0) + '%', txbyih['F$H'] < 0.9999 && Laya[G[620446]][G[620459]](0x1, this, this['gA08']);
      } else Laya[G[620446]][G[620447]](this, this['gA08']);
    }, vakf57[G[620340]]['gA80'] = function (ql63e8, la76k, izxnt) {
      0x1 < ql63e8 && (ql63e8 = 0x1);var _r3q = 0x24e * ql63e8;this['F$H'] = this['F$H'] > ql63e8 ? this['F$H'] : ql63e8, this['loadingBar'][G[620329]] = _r3q;var uw0po = this['loadingBar']['x'] + _r3q;this['loadingImg2']['x'] = uw0po - 0xf, 0x16c <= uw0po ? (this['loadingImg1'][G[620444]] = !0x0, this['loadingImg1']['x'] = uw0po - 0xca) : this['loadingImg1'][G[620444]] = !0x1, this['percentageTips'][G[620275]] = (0x64 * ql63e8 >> 0x0) + '%', this['loadingTips'][G[620275]] = la76k;for (var r$_q = izxnt - 0x1, k7av65 = 0x0; k7av65 < this['F$a']['length']; k7av65++) this['F$a'][k7av65][G[620439]] = k7av65 < r$_q ? 'z888z888dz888/z888z88820a.png' : r$_q === k7av65 ? 'z888z888dz888/z888z88819a.png' : 'z888z888dz888/z888z88818a.png';
    }, vakf57[G[620340]][G[620424]] = function () {
      this['gA80'](0.1, G[620461], 0x1), this['gA08'](-0x1), abmnzrs[G[620430]]['gA08'] = this['gA08'][G[620181]](this), abmnzrs[G[620430]]['gA80'] = this['gA80'][G[620181]](this), this[G[620369]][G[620275]] = G[620462] + this['F$l'][G[620016]] + G[620463] + this['F$l'][G[620127]], this[G[620318]]();
    }, vakf57[G[620340]][G[620464]] = function (emr_s$) {
      this[G[620465]](), Laya[G[620446]][G[620447]](this, this['gA08']), Laya[G[620446]][G[620447]](this, this['F$q']), amre_[G[620028]]['closeLoading'](), this['getTipsBtn'][G[620428]](Laya[G[620425]][G[620426]], this, this['F$r']);
    }, vakf57[G[620340]][G[620465]] = function () {
      abmnzrs[G[620430]]['gA08'] = function () {}, abmnzrs[G[620430]]['gA80'] = function () {};
    }, vakf57[G[620340]][G[620429]] = function (v36) {
      void 0x0 === v36 && (v36 = !0x0), this[G[620465]](), $3e8lq[G[620340]][G[620429]][G[620343]](this, v36);
    }, vakf57[G[620340]][G[620318]] = function () {
      this['F$l'][G[620318]] && 0x1 == this['F$l'][G[620318]] && (this['getTipsBtn'][G[620444]] = !0x0, this['getTipsBtn']['tag'] = !0x0, this['getTipsBtn'][G[620439]] = 'z888z888dz888/z888z8881a.png', this['getTipsBtn']['on'](Laya[G[620425]][G[620426]], this, this['F$r']), this['F$D'](), this['F$_'](!0x0));
    }, vakf57[G[620340]]['F$r'] = function () {
      this['getTipsBtn']['tag'] && (this['getTipsBtn']['tag'] = !0x1, this['getTipsBtn'][G[620439]] = 'z888z888dz888/z888z8882a.png', this['F$t'](), this['F$_'](!0x1));
    }, vakf57[G[620340]]['F$P'] = function (ntmbzx) {
      this['bgImg'][G[620439]] = ntmbzx['bgImgSkin'], this['topImg'][G[620439]] = ntmbzx['topImgSkin'], this['btmImg'][G[620439]] = ntmbzx['btmImgSkin'], this['leftImg'][G[620439]] = ntmbzx['leftImgSkin'], this['rightImg'][G[620439]] = ntmbzx['rightImgSkin'], this['copyRightImg'][G[620083]] = ntmbzx['copyRightImgBottom'], this[G[620349]]['y'] = ntmbzx[G[620466]], this[G[620356]]['y'] = ntmbzx[G[620467]], this['loadingBarBg'][G[620439]] = ntmbzx['loadingBarBgSkin'], this['loadingTips'][G[620468]] = ntmbzx['loadingTipsSize'], this['getTipsBtn'][G[620444]] = this['F$l'][G[620318]] && 0x1 == this['F$l'][G[620318]], this['getTipsBtn'][G[620444]] ? this['F$D']() : this['F$t'](), this['F$_'](this['getTipsBtn'][G[620444]]);
    }, vakf57[G[620340]]['F$D'] = function () {
      this['F$v'] || (this['F$v'] = bxtyi[G[620341]](this['getTipsBtn'], G[620469], 0x4, 0x0, 0xc), this['F$v'][G[620470]](0xa1, 0x6a), this['F$v'][G[620471]](1.14, 1.15)), bxtyi[G[620443]](this['F$v']);
    }, vakf57[G[620340]]['F$t'] = function () {
      this['F$v'] && bxtyi[G[620445]](this['F$v']);
    }, vakf57[G[620340]]['F$_'] = function (yitbx) {
      Laya[G[620446]][G[620447]](this, this['F$q']), yitbx ? (this['F$Q'] = 0x9, this[G[620364]][G[620444]] = !0x0, this['F$q'](), Laya[G[620446]][G[620441]](0x3e8, this, this['F$q'])) : this[G[620364]][G[620444]] = !0x1;
    }, vakf57[G[620340]]['F$q'] = function () {
      0x0 < this['F$Q'] ? (this[G[620364]][G[620275]] = G[620472] + this['F$Q'] + 's)', this['F$Q']--) : (this[G[620364]][G[620275]] = '', Laya[G[620446]][G[620447]](this, this['F$q']), this['F$r']());
    }, vakf57;
  }(aofd1u4['F$y']), f45akd['LoadingPanel'] = q6le38;
}(modules || (modules = {})), function (h2yixc) {
  var ij2cyh, kaf45, ijh2y, zxtinb;ij2cyh = h2yixc['F$V'] || (h2yixc['F$V'] = {}), kaf45 = Laya[G[620473]], ijh2y = Laya[G[620425]], zxtinb = function (v6a78l) {
    function bmtnx() {
      var $m_es = v6a78l[G[620343]](this) || this;return $m_es['F$i'] = 0x0, $m_es['F$c'] = G[620474], $m_es['F$u'] = 0x0, $m_es['F$x'] = 0x0, $m_es['F$k'] = G[620475], $m_es['F$X'] = !0x0, $m_es['F$S'] = 0x0, $m_es;
    }return a$sr_mz(bmtnx, v6a78l), bmtnx[G[620340]][G[620420]] = function () {
      v6a78l[G[620340]][G[620420]][G[620343]](this), this[G[620421]] = 0x0, this[G[620422]] = 0x0, amre_[G[620028]]['gG860A'](), this['F$l'] = abmnzrs[G[620430]]['g08'], this['F$f'] = new kaf45(), this['F$f'][G[620476]] = '', this['F$f'][G[620477]] = ij2cyh[G[620478]], this['F$f'][G[620082]] = 0x5, this['F$f'][G[620479]] = 0x1, this['F$f'][G[620480]] = 0x5, this['F$f'][G[620329]] = this[G[620414]][G[620329]], this['F$f']['height'] = this[G[620414]]['height'] - 0x8, this[G[620414]][G[620436]](this['F$f']), this['F$W'] = new kaf45(), this['F$W'][G[620476]] = '', this['F$W'][G[620477]] = ij2cyh['SelectRightListItem'], this['F$W'][G[620082]] = 0x5, this['F$W'][G[620479]] = 0x1, this['F$W'][G[620480]] = 0x5, this['F$W'][G[620329]] = this['rightListBox'][G[620329]], this['F$W']['height'] = this['rightListBox']['height'] - 0x8, this['rightListBox'][G[620436]](this['F$W']), this['F$I'] = new kaf45(), this['F$I'][G[620481]] = '', this['F$I'][G[620477]] = ij2cyh[G[620482]], this['F$I'][G[620483]] = 0x1, this['F$I'][G[620329]] = this[G[620403]][G[620329]], this['F$I']['height'] = this[G[620403]]['height'], this[G[620403]][G[620436]](this['F$I']), this['F$Y'] = new kaf45(), this['F$Y'][G[620481]] = '', this['F$Y'][G[620477]] = ij2cyh[G[620484]], this['F$Y'][G[620483]] = 0x1, this['F$Y'][G[620329]] = this[G[620403]][G[620329]], this['F$Y']['height'] = this[G[620403]]['height'], this[G[620410]][G[620436]](this['F$Y']);var yixc = this['F$l']['loadingType'];this['F$U'] = 0x1 == yixc ? G[620387] : 0x2 == yixc ? G[620387] : 0x3 == yixc ? G[620387] : 0x65 == yixc ? G[620387] : G[620485], this[G[620380]][G[620486]](0x1fa, 0x58), this['F$d'] = [], this[G[620391]][G[620444]] = !0x1, this[G[620407]][G[620456]] = G[620398], this[G[620407]][G[620487]][G[620468]] = 0x1a, this[G[620407]][G[620487]]['lineHeight'] = 0x1c, this[G[620407]][G[620488]] = !0x1, this[G[620413]][G[620456]] = G[620398], this[G[620413]][G[620487]][G[620468]] = 0x1a, this[G[620413]][G[620487]]['lineHeight'] = 0x1c, this[G[620413]][G[620488]] = !0x1, this[G[620390]][G[620456]] = G[620383], this[G[620390]][G[620487]][G[620468]] = 0x12, this[G[620390]][G[620487]]['lineHeight'] = 0x12, this[G[620390]][G[620487]][G[620489]] = 0x2, this[G[620390]][G[620487]][G[620490]] = G[620457], this[G[620390]][G[620487]][G[620491]] = !0x1, this[G[620419]][G[620456]] = G[620398], this[G[620419]][G[620487]][G[620468]] = 0x1a, this[G[620419]][G[620487]]['lineHeight'] = 0x1c, this[G[620419]][G[620488]] = !0x1, abmnzrs[G[620430]][G[620289]] = this, gA086(), this[G[620423]](), this[G[620424]]();
    }, bmtnx[G[620340]][G[620429]] = function (av5k4f) {
      void 0x0 === av5k4f && (av5k4f = !0x0), this[G[620427]](), this['F$C'](), this['F$F'](), this['F$b'](), this['F$h'](), this['F$f'] && (this['F$f'][G[620492]](), this['F$f'][G[620429]](), this['F$f'] = null), this['F$W'] && (this['F$W'][G[620492]](), this['F$W'][G[620429]](), this['F$W'] = null), this['F$I'] && (this['F$I'][G[620492]](), this['F$I'][G[620429]](), this['F$I'] = null), this['F$Y'] && (this['F$Y'][G[620492]](), this['F$Y'][G[620429]](), this['F$Y'] = null), Laya[G[620446]][G[620447]](this, this['F$p']), v6a78l[G[620340]][G[620429]][G[620343]](this, av5k4f);
    }, bmtnx[G[620340]][G[620423]] = function () {
      this['bgImg']['on'](Laya[G[620425]][G[620426]], this, this['F$j']), this[G[620380]]['on'](Laya[G[620425]][G[620426]], this, this['F$g']), this[G[620379]]['on'](Laya[G[620425]][G[620426]], this, this['F$N']), this[G[620379]]['on'](Laya[G[620425]][G[620426]], this, this['F$N']), this['closeBg']['on'](Laya[G[620425]][G[620426]], this, this['F$w']), this[G[620391]]['on'](Laya[G[620425]][G[620426]], this, this['F$z']), this[G[620393]]['on'](Laya[G[620425]][G[620426]], this, this['F$JJ']), this[G[620396]]['on'](Laya[G[620425]][G[620493]], this, this['F$yJ']), this[G[620399]]['on'](Laya[G[620425]][G[620426]], this, this['F$TJ']), this[G[620400]]['on'](Laya[G[620425]][G[620426]], this, this['F$TJ']), this[G[620406]]['on'](Laya[G[620425]][G[620493]], this, this['F$VJ']), this[G[620392]]['on'](Laya[G[620425]][G[620426]], this, this['F$ZJ']), this[G[620408]]['on'](Laya[G[620425]][G[620426]], this, this['F$mJ']), this[G[620409]]['on'](Laya[G[620425]][G[620426]], this, this['F$mJ']), this[G[620412]]['on'](Laya[G[620425]][G[620493]], this, this['F$RJ']), this['privacyToggle']['on'](Laya[G[620425]][G[620426]], this, this['F$nJ']), this[G[620390]]['on'](Laya[G[620425]][G[620494]], this, this['F$KJ']), this[G[620415]]['on'](Laya[G[620425]][G[620426]], this, this['F$AJ']), this[G[620418]]['on'](Laya[G[620425]][G[620493]], this, this['F$$J']), this['F$I'][G[620495]] = !0x0, this['F$I'][G[620496]] = Laya[G[620497]][G[620341]](this, this['F$eJ'], null, !0x1), this['F$Y'][G[620495]] = !0x0, this['F$Y'][G[620496]] = Laya[G[620497]][G[620341]](this, this['F$MJ'], null, !0x1);
    }, bmtnx[G[620340]][G[620427]] = function () {
      this['bgImg'][G[620428]](Laya[G[620425]][G[620426]], this, this['F$j']), this[G[620380]][G[620428]](Laya[G[620425]][G[620426]], this, this['F$g']), this[G[620379]][G[620428]](Laya[G[620425]][G[620426]], this, this['F$N']), this[G[620379]][G[620428]](Laya[G[620425]][G[620426]], this, this['F$N']), this['closeBg'][G[620428]](Laya[G[620425]][G[620426]], this, this['F$w']), this[G[620391]][G[620428]](Laya[G[620425]][G[620426]], this, this['F$z']), this[G[620393]][G[620428]](Laya[G[620425]][G[620426]], this, this['F$JJ']), this[G[620396]][G[620428]](Laya[G[620425]][G[620493]], this, this['F$yJ']), this[G[620399]][G[620428]](Laya[G[620425]][G[620426]], this, this['F$TJ']), this[G[620400]][G[620428]](Laya[G[620425]][G[620426]], this, this['F$TJ']), this[G[620406]][G[620428]](Laya[G[620425]][G[620493]], this, this['F$VJ']), this[G[620392]][G[620428]](Laya[G[620425]][G[620426]], this, this['F$ZJ']), this[G[620408]][G[620428]](Laya[G[620425]][G[620426]], this, this['F$mJ']), this[G[620409]][G[620428]](Laya[G[620425]][G[620426]], this, this['F$mJ']), this[G[620412]][G[620428]](Laya[G[620425]][G[620493]], this, this['F$RJ']), this['privacyToggle'][G[620428]](Laya[G[620425]][G[620426]], this, this['F$nJ']), this[G[620390]][G[620428]](Laya[G[620425]][G[620494]], this, this['F$KJ']), this[G[620415]][G[620428]](Laya[G[620425]][G[620426]], this, this['F$AJ']), this[G[620418]][G[620428]](Laya[G[620425]][G[620493]], this, this['F$$J']), this['F$I'][G[620495]] = !0x1, this['F$I'][G[620496]] = null, this['F$Y'][G[620495]] = !0x1, this['F$Y'][G[620496]] = null;
    }, bmtnx[G[620340]][G[620424]] = function () {
      var bstzm = this;this['F$m'] = Date[G[620115]](), this['F$X'] = !0x0, this['F$GJ'] = this['F$l'][G[620018]][G[620019]], this['F$BJ'](this['F$l'][G[620018]]), this['F$f'][G[620498]] = this['F$l']['groupList'], this['F$N'](), req_multi_server_notice(0x4, this['F$l']['pkgName'], this['F$l'][G[620018]][G[620019]], this['F$oJ'][G[620181]](this)), Laya[G[620446]][G[620499]](0x1, this, function () {
        bstzm['F$sJ'] = bstzm['F$l'][G[620500]] && bstzm['F$l'][G[620500]][G[620501]] ? bstzm['F$l'][G[620500]][G[620501]] : [], bstzm['F$EJ'] = null != bstzm['F$l']['privacy_login_pkg'] ? bstzm['F$l']['privacy_login_pkg'] : 0x0;var $_qrse = '1' == localStorage['getItem'](bstzm['F$k']),
            iyxbht = 0x0 != g08['privacy_save_pkg'],
            s$rzm_ = 0x0 == bstzm['F$EJ'] || 0x1 == bstzm['F$EJ'];bstzm['F$OJ'] = iyxbht && $_qrse || s$rzm_, bstzm['F$LJ']();
      }), this[G[620369]][G[620275]] = G[620462] + this['F$l'][G[620016]] + G[620463] + this['F$l'][G[620127]], this[G[620388]][G[620456]] = this[G[620385]][G[620456]] = this['F$U'], this['imgCheatTip'][G[620444]] = 0x1 == this['F$l']['anti_cheat_pkg'], this[G[620381]][G[620444]] = !0x1;
    }, bmtnx[G[620340]][G[620502]] = function () {}, bmtnx[G[620340]]['F$j'] = function () {
      this['F$OJ'] ? 0x2710 < Date[G[620115]]() - this['F$m'] && (this['F$m'] -= 0x7d0, amre_[G[620028]][G[620431]]()) : this['F$HJ'](G[620503]);
    }, bmtnx[G[620340]]['F$g'] = function () {
      this['F$OJ'] ? this['F$PJ'](this['F$l'][G[620018]]) && (abmnzrs[G[620430]]['g08'][G[620018]] = this['F$l'][G[620018]], g8A60(0x0, this['F$l'][G[620018]][G[620019]])) : this['F$HJ'](G[620503]);
    }, bmtnx[G[620340]]['F$N'] = function () {
      this['F$l'][G[620291]] ? this['listBg'][G[620444]] = !0x0 : (this['F$l'][G[620291]] = !0x0, g08A6(0x0));
    }, bmtnx[G[620340]]['F$w'] = function () {
      this['listBg'][G[620444]] = !0x1;
    }, bmtnx[G[620340]]['F$z'] = function () {
      this['F$lJ']();
    }, bmtnx[G[620340]]['F$TJ'] = function () {
      this['mNoticeBg'][G[620444]] = !0x1;
    }, bmtnx[G[620340]]['F$JJ'] = function () {
      this['noticeBg'][G[620444]] = !0x1;
    }, bmtnx[G[620340]]['F$ZJ'] = function () {
      this['F$aJ']();
    }, bmtnx[G[620340]]['F$mJ'] = function () {
      this['privacyBg'][G[620444]] = !0x1;
    }, bmtnx[G[620340]]['F$nJ'] = function () {
      this['F$OJ'] = !this['F$OJ'], this['F$OJ'] && localStorage[G[620504]](this['F$k'], '1'), this['privacyToggle'][G[620439]] = 'z888z888lgrz888z888/' + (this['F$OJ'] ? 'z888z88829b.png' : 'z888z88828b.png');
    }, bmtnx[G[620340]]['F$KJ'] = function (yxbht) {
      this['F$aJ'](Number(yxbht));
    }, bmtnx[G[620340]]['F$AJ'] = function () {
      abmnzrs[G[620430]][G[620505]]();
    }, bmtnx[G[620340]]['F$yJ'] = function () {
      this['F$i'] = this[G[620396]][G[620506]], Laya['stage']['on'](ijh2y[G[620507]], this, this['F$qJ']), Laya['stage']['on'](ijh2y[G[620508]], this, this['F$C']), Laya['stage']['on'](ijh2y[G[620509]], this, this['F$C']);
    }, bmtnx[G[620340]]['F$qJ'] = function () {
      if (this[G[620396]]) {
        var nybi = this['F$i'] - this[G[620396]][G[620506]];this[G[620396]][G[620510]] += nybi, this['F$i'] = this[G[620396]][G[620506]];
      }
    }, bmtnx[G[620340]]['F$C'] = function () {
      Laya['stage'][G[620428]](ijh2y[G[620507]], this, this['F$qJ']), Laya['stage'][G[620428]](ijh2y[G[620508]], this, this['F$C']), Laya['stage'][G[620428]](ijh2y[G[620509]], this, this['F$C']);
    }, bmtnx[G[620340]]['F$VJ'] = function () {
      this['F$u'] = this[G[620406]][G[620506]], Laya['stage']['on'](ijh2y[G[620507]], this, this['F$rJ']), Laya['stage']['on'](ijh2y[G[620508]], this, this['F$F']), Laya['stage']['on'](ijh2y[G[620509]], this, this['F$F']);
    }, bmtnx[G[620340]]['F$rJ'] = function () {
      if (this[G[620407]]) {
        var h2i = this['F$u'] - this[G[620406]][G[620506]];this[G[620407]]['y'] -= h2i, this[G[620406]]['height'] < this[G[620407]]['contextHeight'] ? this[G[620407]]['y'] < this[G[620406]]['height'] - this[G[620407]]['contextHeight'] ? this[G[620407]]['y'] = this[G[620406]]['height'] - this[G[620407]]['contextHeight'] : 0x0 < this[G[620407]]['y'] && (this[G[620407]]['y'] = 0x0) : this[G[620407]]['y'] = 0x0, this['F$u'] = this[G[620406]][G[620506]];
      }
    }, bmtnx[G[620340]]['F$F'] = function () {
      Laya['stage'][G[620428]](ijh2y[G[620507]], this, this['F$rJ']), Laya['stage'][G[620428]](ijh2y[G[620508]], this, this['F$F']), Laya['stage'][G[620428]](ijh2y[G[620509]], this, this['F$F']);
    }, bmtnx[G[620340]]['F$RJ'] = function () {
      this['F$x'] = this[G[620412]][G[620506]], Laya['stage']['on'](ijh2y[G[620507]], this, this['F$DJ']), Laya['stage']['on'](ijh2y[G[620508]], this, this['F$b']), Laya['stage']['on'](ijh2y[G[620509]], this, this['F$b']);
    }, bmtnx[G[620340]]['F$DJ'] = function () {
      if (this[G[620413]]) {
        var me$s_ = this['F$x'] - this[G[620412]][G[620506]];this[G[620413]]['y'] -= me$s_, this[G[620412]]['height'] < this[G[620413]]['contextHeight'] ? this[G[620413]]['y'] < this[G[620412]]['height'] - this[G[620413]]['contextHeight'] ? this[G[620413]]['y'] = this[G[620412]]['height'] - this[G[620413]]['contextHeight'] : 0x0 < this[G[620413]]['y'] && (this[G[620413]]['y'] = 0x0) : this[G[620413]]['y'] = 0x0, this['F$x'] = this[G[620412]][G[620506]];
      }
    }, bmtnx[G[620340]]['F$b'] = function () {
      Laya['stage'][G[620428]](ijh2y[G[620507]], this, this['F$DJ']), Laya['stage'][G[620428]](ijh2y[G[620508]], this, this['F$b']), Laya['stage'][G[620428]](ijh2y[G[620509]], this, this['F$b']);
    }, bmtnx[G[620340]]['F$$J'] = function () {
      this['F$S'] = this[G[620418]][G[620506]], Laya['stage']['on'](ijh2y[G[620507]], this, this['F$_J']), Laya['stage']['on'](ijh2y[G[620508]], this, this['F$h']), Laya['stage']['on'](ijh2y[G[620509]], this, this['F$h']);
    }, bmtnx[G[620340]]['F$_J'] = function () {
      if (this[G[620419]]) {
        var kl = this['F$S'] - this[G[620418]][G[620506]];this[G[620419]]['y'] -= kl, this[G[620418]]['height'] < this[G[620419]]['contextHeight'] ? this[G[620419]]['y'] < this[G[620418]]['height'] - this[G[620419]]['contextHeight'] ? this[G[620419]]['y'] = this[G[620418]]['height'] - this[G[620419]]['contextHeight'] : 0x0 < this[G[620419]]['y'] && (this[G[620419]]['y'] = 0x0) : this[G[620419]]['y'] = 0x0, this['F$S'] = this[G[620418]][G[620506]];
      }
    }, bmtnx[G[620340]]['F$h'] = function () {
      Laya['stage'][G[620428]](ijh2y[G[620507]], this, this['F$_J']), Laya['stage'][G[620428]](ijh2y[G[620508]], this, this['F$h']), Laya['stage'][G[620428]](ijh2y[G[620509]], this, this['F$h']);
    }, bmtnx[G[620340]]['F$eJ'] = function () {
      if (this['F$I'][G[620498]]) {
        for (var $rq_s, bzsmt = 0x0; bzsmt < this['F$I'][G[620498]]['length']; bzsmt++) {
          var zmrs_n = this['F$I'][G[620498]][bzsmt];zmrs_n[0x1] = bzsmt == this['F$I'][G[620511]], bzsmt == this['F$I'][G[620511]] && ($rq_s = zmrs_n[0x0]);
        }this[G[620404]][G[620275]] = $rq_s && $rq_s[G[620512]] ? $rq_s[G[620512]] : '', this[G[620407]][G[620513]] = $rq_s && $rq_s[G[620514]] ? $rq_s[G[620514]] : '', this[G[620407]]['y'] = 0x0;
      }
    }, bmtnx[G[620340]]['F$MJ'] = function () {
      var ibxy = this['F$Y'][G[620498]];if (ibxy) {
        for (var dk4f = 0x0; dk4f < ibxy['length']; dk4f++) {
          ibxy[dk4f][0x1] = dk4f == this['F$Y'][G[620511]];
        }var msnzbr = this['F$sJ'][this['F$Y'][G[620511]]];msnzbr && msnzbr[G[620514]] && (msnzbr[G[620514]] = msnzbr[G[620514]][G[620005]](/(<)(?!(br)).[a-zA-Z]{0,10}(>)/g, '')), this[G[620411]][G[620275]] = msnzbr && msnzbr[G[620512]] ? msnzbr[G[620512]] : G[620515], this[G[620413]][G[620513]] = msnzbr && msnzbr[G[620514]] ? msnzbr[G[620514]] : G[620516], this[G[620413]]['y'] = 0x0;
      }
    }, bmtnx[G[620340]]['F$BJ'] = function (ixynb) {
      this[G[620388]][G[620275]] = -0x1 === ixynb[G[620226]] ? ixynb[G[620222]] + G[620517] : 0x0 === ixynb[G[620226]] ? ixynb[G[620222]] + G[620518] : ixynb[G[620222]], this[G[620388]][G[620456]] = -0x1 === ixynb[G[620226]] ? G[620519] : 0x0 === ixynb[G[620226]] ? G[620520] : this['F$U'], this['hotImage'][G[620439]] = this['getStatusSrc'](ixynb[G[620226]]), this['F$l'][G[620017]] = ixynb[G[620017]] || '', this['F$l'][G[620018]] = ixynb, this[G[620391]][G[620444]] = !0x0;
    }, bmtnx[G[620340]]['F$tJ'] = function (txi) {
      this[G[620290]](txi);
    }, bmtnx[G[620340]]['F$vJ'] = function (o4w1) {
      this['F$BJ'](o4w1), this['listBg'][G[620444]] = !0x1;
    }, bmtnx[G[620340]][G[620290]] = function (wpu109) {
      if (void 0x0 === wpu109 && (wpu109 = 0x0), this[G[620521]]) {
        var zsbn = this['F$l']['groupList'];if (zsbn && 0x0 !== zsbn['length']) {
          for (var rz$_ = zsbn['length'], j2hicy = 0x0; j2hicy < rz$_; j2hicy++) zsbn[j2hicy][G[620522]] = this['F$tJ'][G[620181]](this), zsbn[j2hicy][G[620523]] = j2hicy == wpu109, zsbn[j2hicy][G[620524]] = j2hicy;var rs$zm_ = (this['F$f'][G[620525]] = zsbn)[wpu109]['id'];this['F$l'][G[620138]][rs$zm_] ? this[G[620294]](rs$zm_) : this['F$l'][G[620293]] || (this['F$l'][G[620293]] = !0x0, -0x1 == rs$zm_ ? gA60(0x0) : -0x2 == rs$zm_ ? gG680(0x0) : g6A0(0x0, rs$zm_));
        }
      }
    }, bmtnx[G[620340]][G[620294]] = function (r_z$sm) {
      if (this[G[620521]] && this['F$l'][G[620138]][r_z$sm]) {
        for (var wu109p = this['F$l'][G[620138]][r_z$sm], d4uo1w = wu109p['length'], da4f5 = 0x0; da4f5 < d4uo1w; da4f5++) wu109p[da4f5][G[620522]] = this['F$vJ'][G[620181]](this);this['F$W'][G[620525]] = wu109p;
      }
    }, bmtnx[G[620340]]['F$PJ'] = function (uod14f) {
      return -0x1 == uod14f[G[620226]] ? (alert(G[620526]), !0x1) : 0x0 != uod14f[G[620226]] || (alert(G[620527]), !0x1);
    }, bmtnx[G[620340]]['getStatusSrc'] = function (eq863l) {
      var m_es = '';return 0x2 === eq863l ? m_es = 'z888z888lgrz888z888/z888z88818b.png' : 0x1 === eq863l ? m_es = 'z888z888lgrz888z888/z888z88819b.png' : -0x1 !== eq863l && 0x0 !== eq863l || (m_es = 'z888z888lgrz888z888/z888z88820b.png'), m_es;
    }, bmtnx[G[620340]]['F$oJ'] = function (yihtxb) {
      console['log'](G[620528], yihtxb);var yhixt2 = Date[G[620115]]() / 0x3e8,
          tzmsb = localStorage['getItem'](this['F$c']),
          ak75fv = !(this['F$d'] = []);if (G[620212] == yihtxb[G[620158]]) for (var w01gp9 in yihtxb[G[620157]]) {
        var nzixbt = yihtxb[G[620157]][w01gp9],
            bhytxi = yhixt2 < nzixbt[G[620529]],
            fod4k5 = 0x1 == nzixbt[G[620530]],
            se_rm$ = 0x2 == nzixbt[G[620530]] && nzixbt[G[620531]] + '' != tzmsb;!ak75fv && bhytxi && (fod4k5 || se_rm$) && (ak75fv = !0x0), bhytxi && this['F$d'][G[620031]](nzixbt), se_rm$ && localStorage[G[620504]](this['F$c'], nzixbt[G[620531]] + '');
      }this['F$d'][G[620284]](function (o4fdu1, p9w10g) {
        return o4fdu1['login_id'] - p9w10g['login_id'];
      }), console['log'](G[620532], this['F$d']), ak75fv && this['F$lJ']();
    }, bmtnx[G[620340]]['F$lJ'] = function () {
      if (this['F$I']) {
        if (this['F$d']) {
          this['F$I']['x'] = 0x2 < this['F$d']['length'] ? 0x0 : (this[G[620403]][G[620329]] - 0x112 * this['F$d']['length']) / 0x2;for (var zxbtmn = [], kv6a7 = 0x0; kv6a7 < this['F$d']['length']; kv6a7++) {
            var bxtiz = this['F$d'][kv6a7];zxbtmn[G[620031]]([bxtiz, kv6a7 == this['F$I'][G[620511]]]);
          }0x0 < (this['F$I'][G[620498]] = zxbtmn)['length'] ? (this['F$I'][G[620511]] = 0x0, this['F$I'][G[620533]](0x0)) : (this[G[620404]][G[620275]] = G[620395], this[G[620407]][G[620275]] = ''), this[G[620400]][G[620444]] = this['F$d']['length'] <= 0x1, this[G[620403]][G[620444]] = 0x1 < this['F$d']['length'];
        }this['mNoticeBg'][G[620444]] = !0x0;
      }
    }, bmtnx[G[620340]]['F$QJ'] = function (cjh2yi) {
      if (!this[G[620534]]) {
        if (console['log'](G[620535], cjh2yi), G[620212] == cjh2yi[G[620158]]) for (var a5fdk4 in cjh2yi[G[620157]]) {
          var yc2j = Number(a5fdk4),
              _q$8 = cjh2yi[G[620157]][yc2j];this['F$sJ'] && this['F$sJ'][yc2j] && (this['F$sJ'][yc2j][G[620514]] = _q$8[G[620514]]);
        }this['F$MJ']();
      }
    }, bmtnx[G[620340]]['F$LJ'] = function () {
      for (var bztxin = '', $l38 = 0x0; $l38 < this['F$sJ']['length']; $l38++) {
        bztxin += G[620536] + $l38 + G[620537] + this['F$sJ'][$l38][G[620512]] + G[620538], $l38 < this['F$sJ']['length'] - 0x1 && (bztxin += '、');
      }this[G[620390]][G[620513]] = G[620539] + bztxin, this['privacyToggle'][G[620439]] = 'z888z888lgrz888z888/' + (this['F$OJ'] ? 'z888z88829b.png' : 'z888z88828b.png'), this[G[620390]]['x'] = (0x2d0 - this[G[620390]][G[620329]]) / 0x2, this['privacyToggle']['x'] = this[G[620390]]['x'] - 0x1e, this[G[620392]][G[620444]] = 0x0 < this['F$sJ']['length'], this['privacyToggle'][G[620444]] = this[G[620390]][G[620444]] = 0x0 < this['F$sJ']['length'] && 0x0 != this['F$EJ'];
    }, bmtnx[G[620340]]['F$aJ'] = function (_q$83) {
      if (void 0x0 === _q$83 && (_q$83 = 0x0), this['F$Y']) {
        if (this['F$sJ']) {
          this['F$Y']['x'] = 0x2 < this['F$sJ']['length'] ? 0x0 : (this[G[620403]][G[620329]] - 0x112 * this['F$sJ']['length']) / 0x2;for (var e3$_qr = [], favk = 0x0; favk < this['F$sJ']['length']; favk++) {
            var d1u4of = this['F$sJ'][favk],
                g1p09 = d1u4of && d1u4of[G[620512]] ? d1u4of[G[620512]] : '',
                cx2 = favk == this['F$Y'][G[620511]];e3$_qr[G[620031]]([g1p09, cx2]);
          }0x0 < (this['F$Y'][G[620498]] = e3$_qr)['length'] ? (_q$83 < 0x0 && (_q$83 = 0x0), _q$83 > e3$_qr['length'] - 0x1 && (_q$83 = 0x0), this['F$Y'][G[620511]] = _q$83, this['F$Y'][G[620533]](_q$83)) : (this[G[620411]][G[620275]] = G[620540], this[G[620413]][G[620275]] = ''), this[G[620409]][G[620444]] = this['F$sJ']['length'] <= 0x1, this[G[620410]][G[620444]] = 0x1 < this['F$sJ']['length'];
        }this['F$X'] && (this['F$X'] = !0x1, req_privacy(this['F$l']['pkgName'], this['F$QJ'][G[620181]](this))), this['privacyBg'][G[620444]] = !0x0;
      }
    }, bmtnx[G[620340]][G[620541]] = function (brms, bynti, q3_$er) {
      this[G[620417]][G[620275]] = brms || G[620395], this[G[620419]][G[620513]] = bynti || '', this[G[620415]][G[620542]] = q3_$er || G[620543], this[G[620419]]['y'] = 0x0, this['jumpBg'][G[620444]] = !0x0;
    }, bmtnx[G[620340]]['F$HJ'] = function (mtz) {
      this[G[620381]][G[620275]] = mtz, this[G[620381]]['y'] = 0x280, this[G[620381]][G[620444]] = !0x0, this['F$iJ'] = 0x1, Laya[G[620446]][G[620447]](this, this['F$p']), this['F$p'](), Laya[G[620446]][G[620459]](0x1, this, this['F$p']);
    }, bmtnx[G[620340]]['F$p'] = function () {
      this[G[620381]]['y'] -= this['F$iJ'], this['F$iJ'] *= 1.1, this[G[620381]]['y'] <= 0x24e && (this[G[620381]][G[620444]] = !0x1, Laya[G[620446]][G[620447]](this, this['F$p']));
    }, bmtnx;
  }(aofd1u4['F$T']), ij2cyh[G[620544]] = zxtinb;
}(modules || (modules = {}));var modules,
    abmnzrs = Laya[G[620545]],
    arzm$ = Laya[G[620546]],
    azxnit = Laya[G[620547]],
    awg0p1 = Laya[G[620548]],
    axby = Laya[G[620497]],
    arq$e3_ = modules['F$V'][G[620433]],
    aeq3l8 = modules['F$V']['LoadingPanel'],
    ak7lav6 = modules['F$V'][G[620544]],
    amre_ = function () {
  function wdu4o(tzibx) {
    this['m_loadingRes'] = ['z888z888dz888/z888z88813a.png', 'z888z888dz888/z888z88815a.png', 'z888z888dz888/z888z88814a.png', 'z888z888dz888/z888z88816a.png', 'z888z888dz888/z888z88817a.png', 'z888z888dz888/z888z88818a.png', 'z888z888dz888/z888z88819a.png', 'z888z888dz888/z888z88820a.png', 'z888yz888/z888z8881c.png', 'z888yz888/z888z8882c.png', 'z888yz888/z888z8883c.png', 'z888yz888/z888z8884c.png', 'z888yz888/z888z8885c.png', 'z888z888dz888/z888z8883a.jpg', 'z888z888dz888/z888z88812a.jpg', 'z888z888dz888/z888z8881a.png', 'z888z888dz888/z888z8882a.png', 'z888z888dz888/z888z8884a.jpg', 'z888z888dz888/z888z8886a.jpg', 'z888z888dz888/z888z8888a.jpg', 'z888z888dz888/z888z88810a.jpg', 'z888z888dz888/z888z8885a.jpg', 'z888z888dz888/z888z8887a.jpg', 'z888z888dz888/z888z8889a.jpg', 'z888z888dz888/z888z88811a.jpg'], this['gG860'] = ['z888z888lgrz888z888/z888z88810b.png', 'z888z888lgrz888z888/z888z88811b.png', 'z888z888lgrz888z888/z888z88812b.png', 'z888z888lgrz888z888/z888z88813b.png', 'z888z888lgrz888z888/z888z88814b.png', 'z888z888lgrz888z888/z888z88815b.png', 'z888z888lgrz888z888/z888z88816b.png', 'z888z888lgrz888z888/z888z88817b.png', 'z888z888lgrz888z888/z888z88818b.png', 'z888z888lgrz888z888/z888z88819b.png', 'z888z888lgrz888z888/z888z88820b.png', 'z888z888lgrz888z888/z888z88821b.png', 'z888z888lgrz888z888/z888z8882b.jpg', 'z888z888lgrz888z888/z888z8883b.jpg', 'z888z888lgrz888z888/z888z8884b.jpg', 'z888z888lgrz888z888/z888z8885b.jpg', 'z888z888lgrz888z888/z888z8886b.jpg', 'z888z888lgrz888z888/z888z8881b.png', 'z888z888lgrz888z888/z888z8888b.png', 'z888z888lgrz888z888/z888z8889b.png', 'z888z888lgrz888z888/z888z88824b.png', 'z888z888lgrz888z888/z888z88825b.png', 'z888z888lgrz888z888/z888z88827b.png', 'z888z888lgrz888z888/z888z88829b.png', 'z888z888lgrz888z888/z888z88828b.png'], this[G[620549]] = !0x1, this['m_isPrelodLoading'] = !0x1, this['F$cJ'] = !0x1, this['F$uJ'] = '', wdu4o[G[620028]] = this, Laya[G[620550]][G[620180]](), Laya3D[G[620180]](0x0, 0x0, !0x1, !0x1, !0x1), DecodeTools[G[620180]](), Laya['stage'][G[620551]] = Laya['Stage'][G[620552]], Laya['stage'][G[620553]] = Laya['Stage'][G[620554]], Laya['stage']['alignH'] = Laya['Stage'][G[620555]], Laya['stage']['alignV'] = Laya['Stage'][G[620556]], Laya['stage'][G[620557]] = Laya['Stage'][G[620558]];var eq3$r = Laya['AtlasResourceManager'];eq3$r[G[620559]] = 0x6, eq3$r[G[620560]] = eq3$r['atlasTextureHeight'] = 0x400, eq3$r[G[620561]](), Laya[G[620562]][G[620563]] = Laya[G[620562]][G[620564]] = '', Laya[G[620545]][G[620430]][G[620565]](Laya[G[620425]][G[620566]], this['F$xJ'][G[620181]](this)), Laya[G[620435]][G[620567]][G[620568]] = { 'frames': { 'btn_chuangjue_kaishi.png': { 'frame': { 'h': 0x58, 'idx': 0x0, 'w': 0x1fa, 'x': 0x0, 'y': 0x0 }, 'sourceSize': { 'h': 0x58, 'w': 0x1fa }, 'spriteSourceSize': { 'x': 0x0, 'y': 0x0 } }, 'btn_chuangjue_nan.png': { 'frame': { 'h': 0x62, 'idx': 0x0, 'w': 0x6c, 'x': 0x14f, 'y': 0x59 }, 'sourceSize': { 'h': 0x62, 'w': 0x6c }, 'spriteSourceSize': { 'x': 0x0, 'y': 0x0 } }, 'btn_chuangjue_nv.png': { 'frame': { 'h': 0x62, 'idx': 0x0, 'w': 0x6b, 'x': 0x0, 'y': 0xa4 }, 'sourceSize': { 'h': 0x62, 'w': 0x6b }, 'spriteSourceSize': { 'x': 0x0, 'y': 0x0 } }, 'image_chuangjue_mingbg.png': { 'frame': { 'h': 0x4a, 'idx': 0x0, 'w': 0x14e, 'x': 0x0, 'y': 0x59 }, 'sourceSize': { 'h': 0x4a, 'w': 0x14e }, 'spriteSourceSize': { 'x': 0x0, 'y': 0x0 } }, 'image_chuangjue_suiji.png': { 'frame': { 'h': 0x38, 'idx': 0x0, 'w': 0x34, 'x': 0x1bc, 'y': 0x59 }, 'sourceSize': { 'h': 0x38, 'w': 0x34 }, 'spriteSourceSize': { 'x': 0x0, 'y': 0x0 } }, 'z888z88828b.png': { 'frame': { 'h': 0x19, 'idx': 0x0, 'w': 0x19, 'x': 0x1bc, 'y': 0x92 }, 'sourceSize': { 'h': 0x1b, 'w': 0x1a }, 'spriteSourceSize': { 'x': 0x0, 'y': 0x2 } }, 'z888z88829b.png': { 'frame': { 'h': 0x1b, 'idx': 0x0, 'w': 0x1a, 'x': 0x1d6, 'y': 0x92 }, 'sourceSize': { 'h': 0x1b, 'w': 0x1a }, 'spriteSourceSize': { 'x': 0x0, 'y': 0x0 } } }, 'meta': { 'image': 'create_role_atlas.png', 'prefix': G[620569] } }, abmnzrs[G[620430]]['resMgrLoad'] = wdu4o[G[620028]]['gG08'], abmnzrs[G[620430]]['imgMgrLoad'] = wdu4o[G[620028]]['gG08'], this[G[620570]] = new Laya[G[620434]](), this[G[620570]][G[620571]] = '_wxLoadingLayer', Laya['stage'][G[620436]](this[G[620570]]), this['F$xJ']();
  }return wdu4o[G[620340]]['gA860'] = function (bxmz) {
    wdu4o[G[620028]][G[620570]][G[620444]] = bxmz;
  }, wdu4o[G[620340]]['gG608A'] = function () {
    wdu4o[G[620028]][G[620572]] || (wdu4o[G[620028]][G[620572]] = new arq$e3_()), wdu4o[G[620028]][G[620572]][G[620521]] || wdu4o[G[620028]][G[620570]][G[620436]](wdu4o[G[620028]][G[620572]]), wdu4o[G[620028]]['F$kJ']();
  }, wdu4o[G[620340]][G[620161]] = function () {
    this[G[620572]] && this[G[620572]][G[620521]] && (Laya['stage'][G[620573]](this[G[620572]]), this[G[620572]][G[620429]](!0x0), this[G[620572]] = null);
  }, wdu4o[G[620340]]['gG860A'] = function () {
    this[G[620549]] || (this[G[620549]] = !0x0, Laya[G[620574]][G[620575]](this['gG860'], axby[G[620341]](this, function () {
      abmnzrs[G[620430]][G[620146]] = !0x0, abmnzrs[G[620430]]['g860A'](), abmnzrs[G[620430]]['g80A6']();
    })));
  }, wdu4o[G[620340]]['F$XJ'] = function () {
    wdu4o[G[620028]][G[620576]] || (wdu4o[G[620028]][G[620576]] = new ak7lav6()), wdu4o[G[620028]][G[620576]][G[620521]] || wdu4o[G[620028]][G[620570]][G[620436]](wdu4o[G[620028]][G[620576]]), wdu4o[G[620028]]['F$kJ']();
  }, wdu4o[G[620340]][G[620541]] = function (znsmt, of1ud, rsm_z$) {
    this['F$XJ'](), wdu4o[G[620028]][G[620576]][G[620541]](znsmt, of1ud, rsm_z$);
  }, wdu4o[G[620340]][G[620229]] = function (rmzs_, ufo45d) {
    for (var opu01 = this, qe3$r = function () {
      opu01['F$XJ'](), rmzs_ && ufo45d && rmzs_[G[620343]](ufo45d);
    }, _$sqr = !0x0, ixbnzt = 0x0, tnbzsm = this['gG860']; ixbnzt < tnbzsm['length']; ixbnzt++) {
      var hcyix2 = tnbzsm[ixbnzt];if (null == Laya[G[620435]]['getRes'](hcyix2)) {
        _$sqr = !0x1;break;
      }
    }_$sqr ? qe3$r() : Laya[G[620574]][G[620575]](this['gG860'], axby[G[620341]](this, qe3$r));
  }, wdu4o[G[620340]][G[620162]] = function () {
    this[G[620576]] && this[G[620576]][G[620521]] && (Laya['stage'][G[620573]](this[G[620576]]), this[G[620576]][G[620429]](!0x0), this[G[620576]] = null);
  }, wdu4o[G[620340]]['preloadLoading'] = function () {
    this['m_isPrelodLoading'] || (this['m_isPrelodLoading'] = !0x0, Laya[G[620574]][G[620575]](this['m_loadingRes'], axby[G[620341]](this, function () {
      abmnzrs[G[620430]]['loadLoadingRes'] = !0x0, abmnzrs[G[620430]]['g860A'](), abmnzrs[G[620430]]['g80A6']();
    })));
  }, wdu4o[G[620340]]['openLoading'] = function (l8va67) {
    void 0x0 === l8va67 && (l8va67 = 0x0), Laya[G[620574]][G[620575]](this['m_loadingRes'], axby[G[620341]](this, function () {
      wdu4o[G[620028]]['m_loading'] || (wdu4o[G[620028]]['m_loading'] = new aeq3l8(l8va67)), wdu4o[G[620028]]['m_loading'][G[620521]] || wdu4o[G[620028]][G[620570]][G[620436]](wdu4o[G[620028]]['m_loading']), wdu4o[G[620028]]['F$kJ']();
    }));
  }, wdu4o[G[620340]]['closeLoading'] = function () {
    this['m_loading'] && this['m_loading'][G[620521]] && (Laya['stage'][G[620573]](this['m_loading']), this['m_loading'][G[620429]](!0x0), this['m_loading'] = null);for (var kv45f = 0x0, nszmb = this['gG860']; kv45f < nszmb['length']; kv45f++) {
      var iyhx = nszmb[kv45f];Laya[G[620435]][G[620577]](wdu4o[G[620028]], iyhx), Laya[G[620435]][G[620578]](iyhx, !0x0);
    }for (var akdf5 = 0x0, _8q$3e = this['m_loadingRes']; akdf5 < _8q$3e['length']; akdf5++) {
      iyhx = _8q$3e[akdf5], (Laya[G[620435]][G[620577]](wdu4o[G[620028]], iyhx), Laya[G[620435]][G[620578]](iyhx, !0x0));
    }this[G[620570]][G[620521]] && this[G[620570]][G[620521]][G[620573]](this[G[620570]]);
  }, wdu4o[G[620340]]['gG80'] = function () {
    this['m_loading'] && this['m_loading'][G[620521]] && wdu4o[G[620028]]['m_loading'][G[620318]]();
  }, wdu4o[G[620340]][G[620431]] = function () {
    var r_mes = abmnzrs[G[620430]]['g08'][G[620018]];this['F$cJ'] || -0x1 == r_mes[G[620226]] || 0x0 == r_mes[G[620226]] || (this['F$cJ'] = !0x0, abmnzrs[G[620430]]['g08'][G[620018]] = r_mes, g8A60(0x0, r_mes[G[620019]]));
  }, wdu4o[G[620340]][G[620432]] = function () {
    var xznbm = '';xznbm += 'newRegister=' + abmnzrs[G[620430]]['g08']['newRegister'], xznbm += G[620579] + this[G[620549]], xznbm += G[620580] + (null != wdu4o[G[620028]][G[620576]]), xznbm += ', isPrelodLoading=' + this['m_isPrelodLoading'], xznbm += ', LoadingPanel=' + (null != wdu4o[G[620028]]['m_loading']), xznbm += ', resMgrLoad=' + (abmnzrs[G[620430]]['resMgrLoad'] == wdu4o[G[620028]]['gG08']), xznbm += ', imgMgrLoad=' + (abmnzrs[G[620430]]['imgMgrLoad'] == wdu4o[G[620028]]['gG08']), xznbm += G[620581] + wdu4o[G[620028]]['F$uJ'];for (var nzitbx = 0x0, afvk7 = this['gG860']; nzitbx < afvk7['length']; nzitbx++) {
      xznbm += ',\x20' + (ntbxz = afvk7[nzitbx]) + '=' + (null != Laya[G[620435]]['getRes'](ntbxz));
    }for (var qel68 = 0x0, fd4k = this['m_loadingRes']; qel68 < fd4k['length']; qel68++) {
      var ntbxz;xznbm += ',\x20' + (ntbxz = fd4k[qel68]) + '=' + (null != Laya[G[620435]]['getRes'](ntbxz));
    }var nxbm = abmnzrs[G[620430]]['g08'][G[620018]];nxbm && (xznbm += G[620582] + nxbm[G[620226]], xznbm += G[620583] + nxbm[G[620019]], xznbm += G[620584] + nxbm[G[620222]]);var d5ka4 = JSON['stringify']({ 'error': G[620585], 'stack': xznbm });console[G[620021]](d5ka4), this['F$SJ'] && this['F$SJ'] == xznbm || (this['F$SJ'] = xznbm, g0A8(d5ka4));
  }, wdu4o[G[620340]]['F$fJ'] = function () {
    var dk5of4 = Laya['stage'],
        odw0u1 = Math[G[620281]](dk5of4[G[620329]]),
        a5vk7f = Math[G[620281]](dk5of4['height']);a5vk7f / odw0u1 < 1.7777778 ? (this[G[620586]] = Math[G[620281]](odw0u1 / (a5vk7f / 0x500)), this[G[620587]] = 0x500, this[G[620588]] = a5vk7f / 0x500) : (this[G[620586]] = 0x2d0, this[G[620587]] = Math[G[620281]](a5vk7f / (odw0u1 / 0x2d0)), this[G[620588]] = odw0u1 / 0x2d0);var el$38q = Math[G[620281]](dk5of4[G[620329]]),
        $qe83 = Math[G[620281]](dk5of4['height']);$qe83 / el$38q < 1.7777778 ? (this[G[620586]] = Math[G[620281]](el$38q / ($qe83 / 0x500)), this[G[620587]] = 0x500, this[G[620588]] = $qe83 / 0x500) : (this[G[620586]] = 0x2d0, this[G[620587]] = Math[G[620281]]($qe83 / (el$38q / 0x2d0)), this[G[620588]] = el$38q / 0x2d0), this['F$kJ']();
  }, wdu4o[G[620340]]['F$kJ'] = function () {
    this[G[620570]] && (this[G[620570]][G[620486]](this[G[620586]], this[G[620587]]), this[G[620570]][G[620471]](this[G[620588]], this[G[620588]], !0x0));
  }, wdu4o[G[620340]]['F$xJ'] = function () {
    if (azxnit['isInputting'] && abmnzrs[G[620589]]) {
      var h2yj = parseInt(azxnit[G[620590]][G[620487]][G[620082]][G[620005]]('px', '')),
          r_szmn = parseInt(azxnit[G[620591]][G[620487]]['height'][G[620005]]('px', '')) * this[G[620588]],
          kfa5v = abmnzrs[G[620592]] / awg0p1[G[620593]][G[620329]];return 0x0 < (h2yj = abmnzrs['clientHeight'] - r_szmn * kfa5v - h2yj) && (h2yj = 0x0), void (abmnzrs[G[620594]][G[620487]][G[620082]] = h2yj + 'px');
    }abmnzrs[G[620594]][G[620487]][G[620082]] = G[620595];var o1dwu = Math[G[620281]](abmnzrs[G[620329]]),
        o1df4 = Math[G[620281]](abmnzrs['height']);o1dwu = o1dwu + 0x1 & 0x7ffffffe, o1df4 = o1df4 + 0x1 & 0x7ffffffe;var bzt = Laya['stage'];0x3 == ENV ? (bzt[G[620551]] = Laya['Stage'][G[620596]], bzt[G[620329]] = o1dwu, bzt['height'] = o1df4) : o1df4 < o1dwu ? (bzt[G[620551]] = Laya['Stage'][G[620596]], bzt[G[620329]] = o1dwu, bzt['height'] = o1df4) : (bzt[G[620551]] = Laya['Stage'][G[620552]], bzt[G[620329]] = 0x348, bzt['height'] = Math[G[620281]](o1df4 / (o1dwu / 0x348)) + 0x1 & 0x7ffffffe), this['F$fJ']();
  }, wdu4o[G[620340]]['gG08'] = function (bnzt, m_e$sr) {
    function nrzbms() {
      mr_sz$[G[620597]] = null, mr_sz$[G[620598]] = null;
    }var mr_sz$,
        qrs$_e = bnzt;(mr_sz$ = new abmnzrs[G[620430]]['Image']())[G[620597]] = function () {
      nrzbms(), m_e$sr(qrs$_e, 0xc8, mr_sz$);
    }, mr_sz$[G[620598]] = function () {
      console[G[620116]]('[warn] WX loadImage onerror:', qrs$_e), wdu4o[G[620028]]['F$uJ'] += qrs$_e + '|', nrzbms(), m_e$sr(qrs$_e, 0x194, null);
    }, mr_sz$[G[620599]] = qrs$_e, -0x1 == wdu4o[G[620028]]['gG860'][G[620087]](qrs$_e) && -0x1 == wdu4o[G[620028]]['m_loadingRes'][G[620087]](qrs$_e) || Laya[G[620435]][G[620600]](wdu4o[G[620028]], qrs$_e);
  }, wdu4o[G[620340]]['F$WJ'] = function (cyhxi, jhicy) {
    return -0x1 != cyhxi[G[620087]](jhicy, cyhxi['length'] - jhicy['length']);
  }, wdu4o;
}();!function (gw10) {
  var fudo54, $r3e_;fudo54 = gw10['F$V'] || (gw10['F$V'] = {}), $r3e_ = function (k67la) {
    function mrbzn() {
      var rsnbzm = k67la[G[620343]](this) || this;return rsnbzm['F$IJ'] = G[620601], rsnbzm['F$YJ'] = G[620602], rsnbzm[G[620329]] = 0x112, rsnbzm['height'] = 0x3b, rsnbzm['F$UJ'] = new Laya['Image'](), rsnbzm[G[620436]](rsnbzm['F$UJ']), rsnbzm['F$dJ'] = new Laya[G[620350]](), rsnbzm['F$dJ'][G[620468]] = 0x1e, rsnbzm['F$dJ'][G[620456]] = rsnbzm['F$YJ'], rsnbzm[G[620436]](rsnbzm['F$dJ']), rsnbzm['F$dJ'][G[620421]] = 0x0, rsnbzm['F$dJ'][G[620422]] = 0x0, rsnbzm;
    }return a$sr_mz(mrbzn, k67la), mrbzn[G[620340]][G[620420]] = function () {
      k67la[G[620340]][G[620420]][G[620343]](this), this['F$l'] = abmnzrs[G[620430]]['g08'], this['F$l']['loadingType'], this[G[620423]]();
    }, Object[G[620449]](mrbzn[G[620340]], G[620498], { 'set': function (q8el$) {
        q8el$ && this[G[620603]](q8el$);
      }, 'enumerable': !0x0, 'configurable': !0x0 }), mrbzn[G[620340]][G[620603]] = function (va4k5) {
      this['F$CJ'] = va4k5[0x0], this['F$FJ'] = va4k5[0x1], this['F$dJ'][G[620275]] = this['F$CJ'][G[620512]], this['F$dJ'][G[620456]] = this['F$FJ'] ? this['F$IJ'] : this['F$YJ'], this['F$UJ'][G[620439]] = this['F$FJ'] ? 'z888z888lgrz888z888/z888z88825b.png' : 'z888z888lgrz888z888/z888z88824b.png';
    }, mrbzn[G[620340]][G[620429]] = function (rmzns) {
      void 0x0 === rmzns && (rmzns = !0x0), this[G[620427]](), k67la[G[620340]][G[620429]][G[620343]](this, rmzns);
    }, mrbzn[G[620340]][G[620423]] = function () {}, mrbzn[G[620340]][G[620427]] = function () {}, mrbzn;
  }(Laya[G[620342]]), fudo54[G[620482]] = $r3e_;
}(modules || (modules = {})), function (byxnt) {
  var d4f5, zibtn;d4f5 = byxnt['F$V'] || (byxnt['F$V'] = {}), zibtn = function (s$_mr) {
    function rn_() {
      var _e$3q8 = s$_mr[G[620343]](this) || this;return _e$3q8['F$IJ'] = G[620601], _e$3q8['F$YJ'] = G[620602], _e$3q8[G[620329]] = 0x112, _e$3q8['height'] = 0x3b, _e$3q8['F$UJ'] = new Laya['Image'](), _e$3q8[G[620436]](_e$3q8['F$UJ']), _e$3q8['F$dJ'] = new Laya[G[620350]](), _e$3q8['F$dJ'][G[620468]] = 0x1e, _e$3q8['F$dJ'][G[620456]] = _e$3q8['F$YJ'], _e$3q8[G[620436]](_e$3q8['F$dJ']), _e$3q8['F$dJ'][G[620421]] = 0x0, _e$3q8['F$dJ'][G[620422]] = 0x0, _e$3q8;
    }return a$sr_mz(rn_, s$_mr), rn_[G[620340]][G[620420]] = function () {
      s$_mr[G[620340]][G[620420]][G[620343]](this), this['F$l'] = abmnzrs[G[620430]]['g08'], this['F$l']['loadingType'], this[G[620423]]();
    }, Object[G[620449]](rn_[G[620340]], G[620498], { 'set': function (nb) {
        nb && this[G[620603]](nb);
      }, 'enumerable': !0x0, 'configurable': !0x0 }), rn_[G[620340]][G[620603]] = function (zbstnm) {
      this['F$bJ'] = zbstnm[0x0], this['F$FJ'] = zbstnm[0x1], this['F$dJ'][G[620275]] = this['F$bJ'], this['F$dJ'][G[620456]] = this['F$FJ'] ? this['F$IJ'] : this['F$YJ'], this['F$UJ'][G[620439]] = this['F$FJ'] ? 'z888z888lgrz888z888/z888z88825b.png' : 'z888z888lgrz888z888/z888z88824b.png';
    }, rn_[G[620340]][G[620429]] = function (owp0u1) {
      void 0x0 === owp0u1 && (owp0u1 = !0x0), this[G[620427]](), s$_mr[G[620340]][G[620429]][G[620343]](this, owp0u1);
    }, rn_[G[620340]][G[620423]] = function () {}, rn_[G[620340]][G[620427]] = function () {}, rn_;
  }(Laya[G[620342]]), d4f5[G[620484]] = zibtn;
}(modules || (modules = {})), function (pwuo1) {
  var val6k7, vafk;val6k7 = pwuo1['F$V'] || (pwuo1['F$V'] = {}), vafk = function (yxithb) {
    function mbtsn() {
      var esrq = yxithb[G[620343]](this) || this;return esrq[G[620329]] = 0xc0, esrq['height'] = 0x46, esrq['F$UJ'] = new Laya['Image'](), esrq[G[620436]](esrq['F$UJ']), esrq['F$dJ'] = new Laya[G[620350]](), esrq['F$dJ'][G[620468]] = 0x1e, esrq['F$dJ'][G[620456]] = esrq['F$U'], esrq[G[620436]](esrq['F$dJ']), esrq['F$dJ'][G[620421]] = 0x0, esrq['F$dJ'][G[620422]] = 0x0, esrq;
    }return a$sr_mz(mbtsn, yxithb), mbtsn[G[620340]][G[620420]] = function () {
      yxithb[G[620340]][G[620420]][G[620343]](this), this['F$l'] = abmnzrs[G[620430]]['g08'];var k5a4 = this['F$l']['loadingType'];this['F$U'] = 0x1 == k5a4 ? G[620602] : 0x2 == k5a4 ? G[620602] : 0x3 == k5a4 ? G[620604] : G[620602], this[G[620423]]();
    }, Object[G[620449]](mbtsn[G[620340]], G[620498], { 'set': function (g90wp) {
        g90wp && this[G[620603]](g90wp);
      }, 'enumerable': !0x0, 'configurable': !0x0 }), mbtsn[G[620340]][G[620603]] = function (eq3l6) {
      this['F$CJ'] = eq3l6, this['F$dJ'][G[620275]] = eq3l6[G[620571]], this['F$UJ'][G[620439]] = eq3l6[G[620523]] ? 'z888z888lgrz888z888/z888z88814b.png' : 'z888z888lgrz888z888/z888z88815b.png';
    }, mbtsn[G[620340]][G[620429]] = function (h2icy) {
      void 0x0 === h2icy && (h2icy = !0x0), this[G[620427]](), yxithb[G[620340]][G[620429]][G[620343]](this, h2icy);
    }, mbtsn[G[620340]][G[620423]] = function () {
      this['on'](Laya[G[620425]][G[620508]], this, this[G[620605]]);
    }, mbtsn[G[620340]][G[620427]] = function () {
      this[G[620428]](Laya[G[620425]][G[620508]], this, this[G[620605]]);
    }, mbtsn[G[620340]][G[620605]] = function () {
      this['F$CJ'] && this['F$CJ'][G[620522]] && this['F$CJ'][G[620522]](this['F$CJ'][G[620524]]);
    }, mbtsn;
  }(Laya[G[620342]]), val6k7[G[620478]] = vafk;
}(modules || (modules = {})), function (s_q$e) {
  var le$q38, f45av;le$q38 = s_q$e['F$V'] || (s_q$e['F$V'] = {}), f45av = function (sn_zmr) {
    function d4wo() {
      var $sr_z = sn_zmr[G[620343]](this) || this;return $sr_z['F$UJ'] = new Laya['Image']('z888z888lgrz888z888/z888z88816b.png'), $sr_z['F$dJ'] = new Laya[G[620350]](), $sr_z['F$dJ'][G[620468]] = 0x1e, $sr_z['F$dJ'][G[620456]] = $sr_z['F$U'], $sr_z[G[620436]]($sr_z['F$UJ']), $sr_z['F$hJ'] = new Laya['Image'](), $sr_z[G[620436]]($sr_z['F$hJ']), $sr_z[G[620329]] = 0x166, $sr_z['height'] = 0x46, $sr_z[G[620436]]($sr_z['F$dJ']), $sr_z['F$hJ'][G[620422]] = 0x0, $sr_z['F$hJ']['x'] = 0x12, $sr_z['F$dJ']['x'] = 0x50, $sr_z['F$dJ'][G[620422]] = 0x0, $sr_z['F$UJ']['graphics'][G[620606]](0x0, 0x0, $sr_z[G[620329]], $sr_z['height'], G[620607]), $sr_z;
    }return a$sr_mz(d4wo, sn_zmr), d4wo[G[620340]][G[620420]] = function () {
      sn_zmr[G[620340]][G[620420]][G[620343]](this), this['F$l'] = abmnzrs[G[620430]]['g08'];var bznmts = this['F$l']['loadingType'];this['F$U'] = 0x1 == bznmts ? G[620608] : 0x2 == bznmts ? G[620608] : 0x3 == bznmts ? G[620604] : G[620608], this[G[620423]]();
    }, Object[G[620449]](d4wo[G[620340]], G[620498], { 'set': function (q_$e38) {
        q_$e38 && this[G[620603]](q_$e38);
      }, 'enumerable': !0x0, 'configurable': !0x0 }), d4wo[G[620340]][G[620603]] = function (ka54fd) {
      this['F$CJ'] = ka54fd, this['F$dJ'][G[620456]] = -0x1 === ka54fd[G[620226]] ? G[620519] : 0x0 === ka54fd[G[620226]] ? G[620520] : this['F$U'], this['F$dJ'][G[620275]] = -0x1 === ka54fd[G[620226]] ? ka54fd[G[620222]] + G[620517] : 0x0 === ka54fd[G[620226]] ? ka54fd[G[620222]] + G[620518] : ka54fd[G[620222]], this['F$hJ'][G[620439]] = this['getStatusSrc'](ka54fd[G[620226]]);
    }, d4wo[G[620340]][G[620429]] = function (s_mzn) {
      void 0x0 === s_mzn && (s_mzn = !0x0), this[G[620427]](), sn_zmr[G[620340]][G[620429]][G[620343]](this, s_mzn);
    }, d4wo[G[620340]][G[620423]] = function () {
      this['on'](Laya[G[620425]][G[620508]], this, this[G[620605]]);
    }, d4wo[G[620340]][G[620427]] = function () {
      this[G[620428]](Laya[G[620425]][G[620508]], this, this[G[620605]]);
    }, d4wo[G[620340]][G[620605]] = function () {
      this['F$CJ'] && this['F$CJ'][G[620522]] && this['F$CJ'][G[620522]](this['F$CJ']);
    }, d4wo[G[620340]]['getStatusSrc'] = function (itnxy) {
      var l376 = '';return 0x2 === itnxy ? l376 = 'z888z888lgrz888z888/z888z88818b.png' : 0x1 === itnxy ? l376 = 'z888z888lgrz888z888/z888z88819b.png' : -0x1 !== itnxy && 0x0 !== itnxy || (l376 = 'z888z888lgrz888z888/z888z88820b.png'), l376;
    }, d4wo;
  }(Laya[G[620342]]), le$q38['SelectRightListItem'] = f45av;
}(modules || (modules = {})), window['ServerLoading'] = amre_;