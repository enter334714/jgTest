'use strict';

var G = wx.$G;
var al8qe$3,
    abmns = this && this[G[620333]] || function () {
  var cxih2y = Object[G[620334]] || { '__proto__': [] } instanceof Array && function (l8qe$, zsnmr_) {
    l8qe$[G[620335]] = zsnmr_;
  } || function (btixnz, $r_eq) {
    for (var kodf in $r_eq) $r_eq[G[620336]](kodf) && (btixnz[kodf] = $r_eq[kodf]);
  };return function (pg91w, o14wu) {
    function dwou0() {
      this[G[620337]] = pg91w;
    }cxih2y(pg91w, o14wu), pg91w[G[620338]] = null === o14wu ? Object[G[620339]](o14wu) : (dwou0[G[620338]] = o14wu[G[620338]], new dwou0());
  };
}(),
    aj2icy = laya['ui'][G[620340]],
    aqe836 = laya['ui']['Dialog'];!function (wp0ou) {
  var nxtzi = function (htx) {
    function yjhic2() {
      return htx[G[620341]](this) || this;
    }return abmns(yjhic2, htx), yjhic2[G[620338]][G[620342]] = function () {
      htx[G[620338]][G[620342]][G[620341]](this), this[G[620343]](wp0ou['F$J'][G[620344]]);
    }, yjhic2[G[620344]] = { 'type': G[620340], 'props': { 'width': 0x2d0, 'name': G[620345], 'height': 0x500 }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x2d0, 'var': 'bgImg', 'skin': 'z888z888lgrz888z888/z888z8882b.jpg', 'name': 'bg', 'height': 0x500, 'centerY': 0x0, 'centerX': 0x0 } }, { 'type': G[620346], 'props': { 'y': 0x0, 'width': 0x2d0, 'right': 0x0, 'height': 0x500 }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x2d0, 'var': 'topImg', 'top': -0x8b, 'skin': 'z888z888lgrz888z888/z888z8886b.jpg', 'height': 0x8b, 'centerX': 0x0, 'anchorY': 0x1 } }, { 'type': 'Image', 'props': { 'width': 0x2d0, 'var': 'btmImg', 'top': 0x500, 'skin': 'z888z888lgrz888z888/z888z8883b.jpg', 'height': 0x8b, 'centerX': 0x0 } }, { 'type': 'Image', 'props': { 'x': -0xdc, 'width': 0xdc, 'var': 'leftImg', 'skin': 'z888z888lgrz888z888/z888z8884b.jpg', 'left': -0xdc, 'height': 0x500, 'centerY': 0x0 } }, { 'type': 'Image', 'props': { 'width': 0xdc, 'var': 'rightImg', 'skin': 'z888z888lgrz888z888/z888z8885b.jpg', 'left': 0x2d0, 'height': 0x500, 'centerY': 0x0 } }] }] }, yjhic2;
  }(aj2icy);wp0ou['F$J'] = nxtzi;
}(al8qe$3 || (al8qe$3 = {})), function (f45ou) {
  var xmtbn = function (nxtbz) {
    function ko5f() {
      return nxtbz[G[620341]](this) || this;
    }return abmns(ko5f, nxtbz), ko5f[G[620338]][G[620342]] = function () {
      nxtbz[G[620338]][G[620342]][G[620341]](this), this[G[620343]](f45ou['F$y'][G[620344]]);
    }, ko5f[G[620344]] = { 'type': G[620340], 'props': { 'width': 0x2d0, 'name': 'P_LoadingView', 'height': 0x500 }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x2d0, 'var': 'bgImg', 'name': 'bg', 'height': 0x500, 'centerY': 0x0, 'centerX': 0x0 } }, { 'type': G[620346], 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x2d0, 'height': 0x500 }, 'child': [{ 'type': 'Image', 'props': { 'var': 'topImg', 'centerX': 0x0, 'bottom': 0x500, 'anchorY': 0x1 } }, { 'type': 'Image', 'props': { 'var': 'btmImg', 'top': 0x500, 'centerX': 0x0 } }, { 'type': 'Image', 'props': { 'var': 'leftImg', 'right': 0x2d0, 'pivotX': 0x1, 'centerY': 0x0 } }, { 'type': 'Image', 'props': { 'var': 'rightImg', 'left': 0x2d0, 'centerY': 0x0 } }] }, { 'type': 'Image', 'props': { 'var': 'copyRightImg', 'skin': 'z888z888lgrz888z888/z888z8881b.png', 'centerX': 0x0, 'bottom': 0xa } }, { 'type': G[620346], 'props': { 'y': 0x3c3, 'x': 0x0, 'width': 0x2d0, 'var': G[620347], 'name': G[620347], 'height': 0x82 }, 'child': [{ 'type': 'Image', 'props': { 'y': 0x2e, 'x': 0x3e, 'width': 0x254, 'var': 'loadingBarBg', 'skin': 'z888z888dz888/z888z88813a.png', 'height': 0x1b, 'centerX': 0x0 } }, { 'type': 'Image', 'props': { 'y': 0x31, 'x': 0x40, 'width': 0x24e, 'var': 'loadingBar', 'skin': 'z888z888dz888/z888z88814a.png', 'height': 0x15 } }, { 'type': 'Image', 'props': { 'y': 0x37, 'x': 0x1fb, 'width': 0xd0, 'var': 'loadingImg1', 'skin': 'z888z888dz888/z888z88816a.png', 'height': 0xb } }, { 'type': 'Image', 'props': { 'y': 0x6, 'x': 0x274, 'width': 0x27, 'var': 'loadingImg2', 'skin': 'z888z888dz888/z888z88817a.png', 'height': 0x74 } }, { 'type': G[620348], 'props': { 'y': 0x30, 'x': 0x125, 'width': 0x86, 'var': 'percentageTips', 'valign': G[620349], 'text': G[620350], 'strokeColor': G[620351], 'stroke': 0x3, 'height': 0x18, 'fontSize': 0x18, 'color': G[620352], 'centerX': 0x0, 'bold': !0x1, 'align': G[620353] } }] }, { 'type': G[620346], 'props': { 'y': 0x429, 'x': 0x0, 'width': 0x2d0, 'var': G[620354], 'name': G[620354], 'height': 0x11 }, 'child': [{ 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x133, 'var': G[620355], 'skin': 'z888z888dz888/z888z88820a.png', 'centerX': -0x2d } }, { 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x151, 'var': G[620356], 'skin': 'z888z888dz888/z888z88819a.png', 'centerX': -0xf } }, { 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x16f, 'var': G[620357], 'skin': 'z888z888dz888/z888z88818a.png', 'centerX': 0xf } }, { 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x18d, 'var': G[620358], 'skin': 'z888z888dz888/z888z88818a.png', 'centerX': 0x2d } }] }, { 'type': G[620359], 'props': { 'y': 0x316, 'x': 0x37, 'visible': !0x1, 'var': 'getTipsBtn', 'stateNum': 0x1, 'skin': 'z888z888dz888/z888z8881a.png', 'name': 'getTipsBtn', 'labelSize': 0x1e, 'labelFont': G[620360], 'labelColors': G[620361] }, 'child': [{ 'type': G[620348], 'props': { 'y': 0x9b, 'x': 0x92, 'width': 0x143, 'var': G[620362], 'text': G[620363], 'name': G[620362], 'height': 0x1e, 'fontSize': 0x1e, 'color': G[620364], 'align': G[620353] } }] }, { 'type': G[620348], 'props': { 'y': 0x453, 'width': 0x1f4, 'var': 'loadingTips', 'valign': G[620349], 'text': G[620365], 'height': 0x1a, 'fontSize': 0x1a, 'color': G[620366], 'centerX': 0x0, 'bold': !0x1, 'align': G[620353] } }, { 'type': G[620348], 'props': { 'y': 0xa, 'x': 0xa, 'width': 0x156, 'var': G[620367], 'valign': G[620349], 'top': 0x14, 'text': G[620368], 'strokeColor': G[620369], 'stroke': 0x2, 'right': 0x14, 'height': 0x20, 'fontSize': 0x18, 'color': G[620370], 'bold': !0x1, 'align': 'right' } }] }, ko5f;
  }(aj2icy);f45ou['F$y'] = xmtbn;
}(al8qe$3 || (al8qe$3 = {})), function (fu54) {
  var $r_qs = function (hxyt2i) {
    function zntxmb() {
      return hxyt2i[G[620341]](this) || this;
    }return abmns(zntxmb, hxyt2i), zntxmb[G[620338]][G[620342]] = function () {
      aj2icy['regComponent'](G[620371], laya[G[620372]][G[620373]][G[620371]]), aj2icy['regComponent'](G[620374], laya[G[620375]][G[620374]]), hxyt2i[G[620338]][G[620342]][G[620341]](this), this[G[620343]](fu54['F$T'][G[620344]]);
    }, zntxmb[G[620344]] = { 'type': G[620340], 'props': { 'width': 0x2d0, 'name': G[620376], 'height': 0x500 }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x2d0, 'var': 'bgImg', 'skin': 'z888z888lgrz888z888/z888z8882b.jpg', 'name': 'bg', 'height': 0x500, 'centerY': 0x0, 'centerX': 0x0 } }, { 'type': G[620346], 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x2d0, 'height': 0x500 }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x2d0, 'var': 'topImg', 'skin': 'z888z888lgrz888z888/z888z8886b.jpg', 'bottom': 0x4ff } }, { 'type': 'Image', 'props': { 'width': 0x2d0, 'var': 'btmImg', 'top': 0x4ff, 'skin': 'z888z888lgrz888z888/z888z8883b.jpg' } }, { 'type': 'Image', 'props': { 'var': 'leftImg', 'skin': 'z888z888lgrz888z888/z888z8884b.jpg', 'right': 0x2cf, 'height': 0x500 } }, { 'type': 'Image', 'props': { 'var': 'rightImg', 'skin': 'z888z888lgrz888z888/z888z8885b.jpg', 'left': 0x2cf, 'height': 0x500 } }] }, { 'type': 'Image', 'props': { 'y': 0x34d, 'var': G[620377], 'skin': 'z888z888lgrz888z888/z888z88821b.png', 'centerX': 0x0 } }, { 'type': 'Image', 'props': { 'y': 0x44e, 'var': 'imgCheatTip', 'skin': 'z888z888lgrz888z888/z888z88827b.png', 'name': 'imgCheatTip', 'centerX': 0x0 } }, { 'type': 'Image', 'props': { 'y': 0x3a2, 'x': 0xa2, 'var': 'hotImage', 'skin': 'z888z888lgrz888z888/z888z88818b.png' } }, { 'type': 'Image', 'props': { 'var': 'copyRightImg', 'skin': 'z888z888lgrz888z888/z888z8881b.png', 'centerX': 0x0, 'bottom': 0x1e } }, { 'type': 'Image', 'props': { 'y': 0x3f7, 'var': G[620378], 'stateNum': 0x1, 'skin': 'z888z888lgrz888z888/z888z88812b.png', 'name': G[620378], 'centerX': 0x0 } }, { 'type': 'Image', 'props': { 'x': 0xc4, 'visible': !0x1, 'var': 'privacyToggle', 'skin': 'z888z888lgrz888z888/z888z88829b.png', 'bottom': 0x4 } }, { 'type': G[620348], 'props': { 'y': 0x280, 'x': 0x0, 'width': 0x2d0, 'var': G[620379], 'valign': G[620349], 'text': G[620380], 'strokeColor': G[620381], 'stroke': 0x2, 'height': 0x20, 'fontSize': 0x20, 'color': G[620382], 'bold': !0x1, 'align': G[620353] } }, { 'type': G[620348], 'props': { 'y': 0x3a4, 'x': 0x209, 'var': G[620383], 'valign': G[620349], 'text': G[620384], 'height': 0x20, 'fontSize': 0x1e, 'color': G[620385], 'bold': !0x1, 'align': G[620353] } }, { 'type': G[620348], 'props': { 'y': 0x3a4, 'width': 0x156, 'var': G[620386], 'valign': G[620349], 'text': G[620387], 'height': 0x20, 'fontSize': 0x1e, 'color': G[620385], 'centerX': 0x0, 'bold': !0x1, 'align': G[620353] } }, { 'type': G[620348], 'props': { 'width': 0x156, 'var': G[620367], 'valign': G[620349], 'top': 0x14, 'text': G[620368], 'strokeColor': G[620369], 'stroke': 0x2, 'right': 0x14, 'height': 0x20, 'fontSize': 0x18, 'color': G[620370], 'bold': !0x1, 'align': 'right' } }, { 'type': G[620371], 'props': { 'y': 0x4e7, 'x': 0x100, 'visible': !0x1, 'var': G[620388], 'height': 0x10 } }, { 'type': 'Image', 'props': { 'y': 0x7f, 'x': 593.5, 'var': G[620389], 'skin': 'z888z888lgrz888z888/z888z88811b.png' } }, { 'type': 'Image', 'props': { 'y': 0x101, 'x': 0x252, 'visible': !0x1, 'var': G[620390], 'skin': 'z888z888lgrz888z888/z888z88813b.png', 'name': G[620390] } }, { 'type': 'Image', 'props': { 'y': 0x47, 'x': -0x2, 'visible': !0x1, 'var': 'noticeBg', 'skin': 'z888z888lgrz888z888/z888z8888b.png', 'centerY': 0x0, 'centerX': 0x0 }, 'child': [{ 'type': 'Image', 'props': { 'y': 36.5, 'x': 0x268, 'var': G[620391], 'skin': 'z888z888lgrz888z888/z888z88810b.png' } }, { 'type': G[620348], 'props': { 'y': 0x48, 'x': 0xd8, 'width': 0xea, 'var': G[620392], 'valign': G[620349], 'text': G[620393], 'height': 0x23, 'fontSize': 0x1e, 'color': G[620381], 'bold': !0x1, 'align': G[620353] } }, { 'type': G[620374], 'props': { 'y': 0x8e, 'x': 0x3d, 'wordWrap': !0x0, 'width': 0x221, 'var': G[620394], 'valign': G[620082], 'overflow': G[620395], 'mouseEnabled': !0x0, 'leading': 0x4, 'height': 0x366, 'fontSize': 0x1a, 'color': G[620396] } }] }, { 'type': 'Image', 'props': { 'y': 0x71, 'x': 0x21, 'visible': !0x1, 'var': 'mNoticeBg', 'skin': 'z888z888lgrz888z888/z888z8888b.png', 'centerY': 0x0, 'centerX': 0x0 }, 'child': [{ 'type': 'Image', 'props': { 'y': 36.5, 'x': 0x268, 'var': G[620397], 'skin': 'z888z888lgrz888z888/z888z88810b.png' } }, { 'type': G[620359], 'props': { 'y': 0x388, 'x': 0xbe, 'var': G[620398], 'stateNum': 0x1, 'skin': 'z888z888lgrz888z888/z888z88825b.png', 'labelSize': 0x1e, 'labelColors': G[620399], 'label': G[620400] } }, { 'type': G[620346], 'props': { 'y': 0x388, 'x': 0x22, 'width': 0x254, 'var': G[620401], 'height': 0x3b } }, { 'type': G[620348], 'props': { 'y': 0x48, 'x': 0xd8, 'width': 0xea, 'var': G[620402], 'valign': G[620349], 'text': G[620393], 'height': 0x23, 'fontSize': 0x1e, 'color': G[620381], 'bold': !0x1, 'align': G[620353] } }, { 'type': G[620403], 'props': { 'y': 0x8e, 'x': 0x3d, 'width': 0x221, 'var': G[620404], 'height': 0x2dd }, 'child': [{ 'type': G[620371], 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x221, 'var': G[620405], 'height': 0x2dd } }] }] }, { 'type': 'Image', 'props': { 'visible': !0x1, 'var': 'privacyBg', 'skin': 'z888z888lgrz888z888/z888z8888b.png', 'name': 'privacyBg', 'centerY': 0x0, 'centerX': 0x0 }, 'child': [{ 'type': 'Image', 'props': { 'y': 36.5, 'x': 0x268, 'var': G[620406], 'skin': 'z888z888lgrz888z888/z888z88810b.png' } }, { 'type': G[620359], 'props': { 'y': 0x388, 'x': 0xbe, 'var': G[620407], 'stateNum': 0x1, 'skin': 'z888z888lgrz888z888/z888z88825b.png', 'labelSize': 0x1e, 'labelColors': G[620399], 'label': G[620400] } }, { 'type': G[620346], 'props': { 'y': 0x388, 'x': 0x22, 'width': 0x254, 'var': G[620408], 'height': 0x3b } }, { 'type': G[620348], 'props': { 'y': 0x48, 'x': 0xd8, 'width': 0xea, 'var': G[620409], 'valign': G[620349], 'text': G[620393], 'height': 0x23, 'fontSize': 0x1e, 'color': G[620381], 'bold': !0x1, 'align': G[620353] } }, { 'type': G[620403], 'props': { 'y': 0x8e, 'x': 0x3d, 'width': 0x221, 'var': G[620410], 'height': 0x2dd }, 'child': [{ 'type': G[620371], 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x221, 'var': G[620411], 'height': 0x2dd } }] }] }, { 'type': 'Image', 'props': { 'visible': !0x1, 'var': 'listBg', 'skin': 'z888z888lgrz888z888/z888z8889b.png', 'centerY': 0x0, 'centerX': 0x0 }, 'child': [{ 'type': G[620346], 'props': { 'y': 0x75, 'x': 0x3d, 'width': 0xc8, 'var': G[620412], 'height': 0x389 } }, { 'type': G[620346], 'props': { 'y': 0x75, 'x': 0x125, 'width': 0x166, 'var': 'rightListBox', 'height': 0x389 } }, { 'type': 'Image', 'props': { 'y': 0xd, 'x': 0x282, 'var': 'closeBg', 'skin': 'z888z888lgrz888z888/z888z88817b.png' } }] }] }, zntxmb;
  }(aj2icy);fu54['F$T'] = $r_qs;
}(al8qe$3 || (al8qe$3 = {})), function (ic2yx) {
  var xynti, _zmsr;xynti = ic2yx['F$V'] || (ic2yx['F$V'] = {}), _zmsr = function (l83e$q) {
    function xiznbt() {
      return l83e$q[G[620341]](this) || this;
    }return abmns(xiznbt, l83e$q), xiznbt[G[620338]][G[620413]] = function () {
      l83e$q[G[620338]][G[620413]][G[620341]](this), this[G[620414]] = 0x0, this[G[620415]] = 0x0, this[G[620416]](), this[G[620417]]();
    }, xiznbt[G[620338]][G[620416]] = function () {
      this['on'](Laya[G[620418]][G[620419]], this, this['F$Z']);
    }, xiznbt[G[620338]][G[620420]] = function () {
      this[G[620421]](Laya[G[620418]][G[620419]], this, this['F$Z']);
    }, xiznbt[G[620338]][G[620417]] = function () {
      this['F$m'] = Date[G[620115]](), a_$r3q[G[620028]]['gG860A'](), a_$r3q[G[620028]]['preloadLoading']();
    }, xiznbt[G[620338]][G[620422]] = function (q7638l) {
      void 0x0 === q7638l && (q7638l = !0x0), this[G[620420]](), l83e$q[G[620338]][G[620422]][G[620341]](this, q7638l);
    }, xiznbt[G[620338]]['F$Z'] = function () {
      0x2710 < Date[G[620115]]() - this['F$m'] && (this['F$m'] -= 0x3e8, abnzti[G[620423]]['g08'][G[620018]][G[620019]] && (a_$r3q[G[620028]][G[620424]](), a_$r3q[G[620028]][G[620425]]()));
    }, xiznbt;
  }(al8qe$3['F$J']), xynti[G[620426]] = _zmsr;
}(modules || (modules = {})), function (_rsm$) {
  var l83q76, xbhiy, hjc2yi, f4o1, uo0d1, tnzbi;l83q76 = _rsm$['F$R'] || (_rsm$['F$R'] = {}), xbhiy = Laya[G[620418]], hjc2yi = Laya['Image'], f4o1 = Laya[G[620427]], uo0d1 = Laya[G[620428]], tnzbi = function (l86e3q) {
    function a5kdf() {
      var w0u9p1 = l86e3q[G[620341]](this) || this;return w0u9p1['F$n'] = new hjc2yi(), w0u9p1[G[620429]](w0u9p1['F$n']), w0u9p1['F$K'] = null, w0u9p1['F$A'] = [], w0u9p1['F$$'] = !0x1, w0u9p1['F$e'] = 0x0, w0u9p1['F$M'] = !0x0, w0u9p1['F$G'] = 0x6, w0u9p1['F$B'] = !0x1, w0u9p1['on'](xbhiy[G[620430]], w0u9p1, w0u9p1['F$o']), w0u9p1['on'](xbhiy[G[620431]], w0u9p1, w0u9p1['F$s']), w0u9p1;
    }return abmns(a5kdf, l86e3q), a5kdf[G[620339]] = function (iy2jch, avk5f7, k7a65, ihyxbt, q_$rs, h2xi, mrz_) {
      void 0x0 === ihyxbt && (ihyxbt = 0x0), void 0x0 === q_$rs && (q_$rs = 0x6), void 0x0 === h2xi && (h2xi = !0x0), void 0x0 === mrz_ && (mrz_ = !0x1);var ytbix = new a5kdf();return ytbix[G[620432]](avk5f7, k7a65, ihyxbt), ytbix[G[620433]] = q_$rs, ytbix[G[620434]] = h2xi, ytbix[G[620435]] = mrz_, iy2jch && iy2jch[G[620429]](ytbix), ytbix;
    }, a5kdf[G[620436]] = function ($e3ql8) {
      $e3ql8 && ($e3ql8[G[620437]] = !0x0, $e3ql8[G[620436]]());
    }, a5kdf[G[620438]] = function (v57af) {
      v57af && (v57af[G[620437]] = !0x1, v57af[G[620438]]());
    }, a5kdf[G[620338]][G[620422]] = function (ti2xhy) {
      Laya[G[620439]][G[620440]](this, this['F$E']), this[G[620421]](xbhiy[G[620430]], this, this['F$o']), this[G[620421]](xbhiy[G[620431]], this, this['F$s']), l86e3q[G[620338]][G[620422]][G[620341]](this, ti2xhy);
    }, a5kdf[G[620338]]['F$o'] = function () {}, a5kdf[G[620338]]['F$s'] = function () {}, a5kdf[G[620338]][G[620432]] = function (j2iyc, q6873l, srmbn) {
      if (this['F$K'] != j2iyc) {
        this['F$K'] = j2iyc, this['F$A'] = [];for (var zbtx = 0x0, erm$s = srmbn; erm$s <= q6873l; erm$s++) this['F$A'][zbtx++] = j2iyc + '/' + erm$s + '.png';var tyibhx = uo0d1['getRes'](this['F$A'][0x0]);tyibhx && (this[G[620327]] = tyibhx[G[620441]], this['height'] = tyibhx['sourceHeight']), this['F$E']();
      }
    }, Object[G[620442]](a5kdf[G[620338]], G[620435], { 'get': function () {
        return this['F$B'];
      }, 'set': function (v4fk) {
        this['F$B'] = v4fk;
      }, 'enumerable': !0x0, 'configurable': !0x0 }), Object[G[620442]](a5kdf[G[620338]], G[620433], { 'set': function (eq3r_$) {
        this['F$G'] != eq3r_$ && (this['F$G'] = eq3r_$, this['F$$'] && (Laya[G[620439]][G[620440]](this, this['F$E']), Laya[G[620439]][G[620434]](this['F$G'] * (0x3e8 / 0x3c), this, this['F$E'])));
      }, 'enumerable': !0x0, 'configurable': !0x0 }), Object[G[620442]](a5kdf[G[620338]], G[620434], { 'set': function (bzxmn) {
        this['F$M'] = bzxmn;
      }, 'enumerable': !0x0, 'configurable': !0x0 }), a5kdf[G[620338]][G[620436]] = function () {
      this['F$$'] && this[G[620438]](), this['F$$'] = !0x0, this['F$e'] = 0x0, Laya[G[620439]][G[620434]](this['F$G'] * (0x3e8 / 0x3c), this, this['F$E']), this['F$E']();
    }, a5kdf[G[620338]][G[620438]] = function () {
      this['F$$'] = !0x1, this['F$e'] = 0x0, this['F$E'](), Laya[G[620439]][G[620440]](this, this['F$E']);
    }, a5kdf[G[620338]][G[620443]] = function () {
      this['F$$'] && (this['F$$'] = !0x1, Laya[G[620439]][G[620440]](this, this['F$E']));
    }, a5kdf[G[620338]][G[620444]] = function () {
      this['F$$'] || (this['F$$'] = !0x0, Laya[G[620439]][G[620434]](this['F$G'] * (0x3e8 / 0x3c), this, this['F$E']), this['F$E']());
    }, Object[G[620442]](a5kdf[G[620338]], G[620445], { 'get': function () {
        return this['F$$'];
      }, 'enumerable': !0x0, 'configurable': !0x0 }), a5kdf[G[620338]]['F$E'] = function () {
      this['F$A'] && 0x0 != this['F$A']['length'] && (this['F$n'][G[620432]] = this['F$A'][this['F$e']], this['F$$'] && (this['F$e']++, this['F$e'] == this['F$A']['length'] && (this['F$M'] ? this['F$e'] = 0x0 : (Laya[G[620439]][G[620440]](this, this['F$E']), this['F$$'] = !0x1, this['F$B'] && (this[G[620437]] = !0x1), this[G[620446]](xbhiy[G[620447]])))));
    }, a5kdf;
  }(f4o1), l83q76[G[620448]] = tnzbi;
}(modules || (modules = {})), function (chx2yi) {
  var yicx2h, v6alk7, srmnz;yicx2h = chx2yi['F$V'] || (chx2yi['F$V'] = {}), v6alk7 = chx2yi['F$R'][G[620448]], srmnz = function (_s$rzm) {
    function e83$lq(intyx) {
      void 0x0 === intyx && (intyx = 0x0);var dfu14 = _s$rzm[G[620341]](this) || this;return dfu14['F$O'] = { 'bgImgSkin': 'z888z888dz888/z888z8883a.jpg', 'topImgSkin': 'z888z888dz888/z888z88810a.jpg', 'btmImgSkin': 'z888z888dz888/z888z8884a.jpg', 'leftImgSkin': 'z888z888dz888/z888z8886a.jpg', 'rightImgSkin': 'z888z888dz888/z888z8888a.jpg', 'loadingBarBgSkin': 'z888z888dz888/z888z88813a.png', 'copyRightImgBottom': 0xa, 'processBox1Y': 0x3c3, 'processBox2Y': 0x429, 'loadingTipsSize': 0x1a, 'getTipsBtnVisible': !0x1 }, dfu14['F$L'] = { 'bgImgSkin': 'z888z888dz888/z888z88812a.jpg', 'topImgSkin': 'z888z888dz888/z888z88811a.jpg', 'btmImgSkin': 'z888z888dz888/z888z8885a.jpg', 'leftImgSkin': 'z888z888dz888/z888z8887a.jpg', 'rightImgSkin': 'z888z888dz888/z888z8889a.jpg', 'loadingBarBgSkin': 'z888z888dz888/z888z88815a.png', 'copyRightImgBottom': 0xa, 'processBox1Y': 0x3c3, 'processBox2Y': 0x429, 'loadingTipsSize': 0x1a, 'getTipsBtnVisible': !0x1 }, dfu14['F$H'] = 0x0, dfu14['F$P'](0x1 == intyx ? dfu14['F$L'] : dfu14['F$O']), dfu14;
    }return abmns(e83$lq, _s$rzm), e83$lq[G[620338]][G[620413]] = function () {
      if (_s$rzm[G[620338]][G[620413]][G[620341]](this), a_$r3q[G[620028]]['preloadLoading'](), this['F$l'] = abnzti[G[620423]]['g08'], this[G[620414]] = 0x0, this[G[620415]] = 0x0, this['F$l']) {
        var wpu1o0 = this['F$l']['loadingType'];this['loadingTips'][G[620449]] = 0x1 == wpu1o0 ? G[620366] : 0x2 == wpu1o0 ? G[620450] : 0x65 == wpu1o0 ? G[620450] : G[620366];
      }this['F$a'] = [this[G[620355]], this[G[620356]], this[G[620357]], this[G[620358]]], abnzti[G[620423]][G[620451]] = this, gA086(), a_$r3q[G[620028]][G[620161]](), a_$r3q[G[620028]][G[620162]](), this[G[620417]]();
    }, e83$lq[G[620338]]['gA08'] = function (zntbms) {
      var zmtns = this;if (-0x1 === zntbms) return zmtns['F$H'] = 0x0, Laya[G[620439]][G[620440]](this, this['gA08']), void Laya[G[620439]][G[620452]](0x1, this, this['gA08']);if (-0x2 !== zntbms) {
        zmtns['F$H'] < 0.9 ? zmtns['F$H'] += (0.15 * Math[G[620176]]() + 0.01) / (0x64 * Math[G[620176]]() + 0x32) : zmtns['F$H'] < 0x1 && (zmtns['F$H'] += 0.0001), 0.9999 < zmtns['F$H'] && (zmtns['F$H'] = 0.9999, Laya[G[620439]][G[620440]](this, this['gA08']), Laya[G[620439]][G[620453]](0xbb8, this, function () {
          0.9 < zmtns['F$H'] && gA08(-0x1);
        }));var d1wou0 = zmtns['F$H'],
            $_3eq = 0x24e * d1wou0;zmtns['F$H'] = zmtns['F$H'] > d1wou0 ? zmtns['F$H'] : d1wou0, zmtns['loadingBar'][G[620327]] = $_3eq;var nxtiby = zmtns['loadingBar']['x'] + $_3eq;zmtns['loadingImg2']['x'] = nxtiby - 0xf, 0x16c <= nxtiby ? (zmtns['loadingImg1'][G[620437]] = !0x0, zmtns['loadingImg1']['x'] = nxtiby - 0xca) : zmtns['loadingImg1'][G[620437]] = !0x1, zmtns['percentageTips'][G[620275]] = (0x64 * d1wou0 >> 0x0) + '%', zmtns['F$H'] < 0.9999 && Laya[G[620439]][G[620452]](0x1, this, this['gA08']);
      } else Laya[G[620439]][G[620440]](this, this['gA08']);
    }, e83$lq[G[620338]]['gA80'] = function (fod41, l8367v, txhyib) {
      0x1 < fod41 && (fod41 = 0x1);var v567ak = 0x24e * fod41;this['F$H'] = this['F$H'] > fod41 ? this['F$H'] : fod41, this['loadingBar'][G[620327]] = v567ak;var xitnyb = this['loadingBar']['x'] + v567ak;this['loadingImg2']['x'] = xitnyb - 0xf, 0x16c <= xitnyb ? (this['loadingImg1'][G[620437]] = !0x0, this['loadingImg1']['x'] = xitnyb - 0xca) : this['loadingImg1'][G[620437]] = !0x1, this['percentageTips'][G[620275]] = (0x64 * fod41 >> 0x0) + '%', this['loadingTips'][G[620275]] = l8367v;for (var tnms = txhyib - 0x1, nytb = 0x0; nytb < this['F$a']['length']; nytb++) this['F$a'][nytb][G[620432]] = nytb < tnms ? 'z888z888dz888/z888z88820a.png' : tnms === nytb ? 'z888z888dz888/z888z88819a.png' : 'z888z888dz888/z888z88818a.png';
    }, e83$lq[G[620338]][G[620417]] = function () {
      this['gA80'](0.1, G[620454], 0x1), this['gA08'](-0x1), abnzti[G[620423]]['gA08'] = this['gA08'][G[620181]](this), abnzti[G[620423]]['gA80'] = this['gA80'][G[620181]](this), this[G[620367]][G[620275]] = G[620455] + this['F$l'][G[620016]] + G[620456] + this['F$l'][G[620127]], this[G[620316]]();
    }, e83$lq[G[620338]][G[620457]] = function (pu1w0) {
      this[G[620458]](), Laya[G[620439]][G[620440]](this, this['gA08']), Laya[G[620439]][G[620440]](this, this['F$q']), a_$r3q[G[620028]]['closeLoading'](), this['getTipsBtn'][G[620421]](Laya[G[620418]][G[620419]], this, this['F$r']);
    }, e83$lq[G[620338]][G[620458]] = function () {
      abnzti[G[620423]]['gA08'] = function () {}, abnzti[G[620423]]['gA80'] = function () {};
    }, e83$lq[G[620338]][G[620422]] = function (q3l876) {
      void 0x0 === q3l876 && (q3l876 = !0x0), this[G[620458]](), _s$rzm[G[620338]][G[620422]][G[620341]](this, q3l876);
    }, e83$lq[G[620338]][G[620316]] = function () {
      this['F$l'][G[620316]] && 0x1 == this['F$l'][G[620316]] && (this['getTipsBtn'][G[620437]] = !0x0, this['getTipsBtn']['tag'] = !0x0, this['getTipsBtn'][G[620432]] = 'z888z888dz888/z888z8881a.png', this['getTipsBtn']['on'](Laya[G[620418]][G[620419]], this, this['F$r']), this['F$D'](), this['F$_'](!0x0));
    }, e83$lq[G[620338]]['F$r'] = function () {
      this['getTipsBtn']['tag'] && (this['getTipsBtn']['tag'] = !0x1, this['getTipsBtn'][G[620432]] = 'z888z888dz888/z888z8882a.png', this['F$t'](), this['F$_'](!0x1));
    }, e83$lq[G[620338]]['F$P'] = function (g19p0) {
      this['bgImg'][G[620432]] = g19p0['bgImgSkin'], this['topImg'][G[620432]] = g19p0['topImgSkin'], this['btmImg'][G[620432]] = g19p0['btmImgSkin'], this['leftImg'][G[620432]] = g19p0['leftImgSkin'], this['rightImg'][G[620432]] = g19p0['rightImgSkin'], this['copyRightImg'][G[620083]] = g19p0['copyRightImgBottom'], this[G[620347]]['y'] = g19p0[G[620459]], this[G[620354]]['y'] = g19p0[G[620460]], this['loadingBarBg'][G[620432]] = g19p0['loadingBarBgSkin'], this['loadingTips'][G[620461]] = g19p0['loadingTipsSize'], this['getTipsBtn'][G[620437]] = this['F$l'][G[620316]] && 0x1 == this['F$l'][G[620316]], this['getTipsBtn'][G[620437]] ? this['F$D']() : this['F$t'](), this['F$_'](this['getTipsBtn'][G[620437]]);
    }, e83$lq[G[620338]]['F$D'] = function () {
      this['F$v'] || (this['F$v'] = v6alk7[G[620339]](this['getTipsBtn'], G[620462], 0x4, 0x0, 0xc), this['F$v'][G[620463]](0xa1, 0x6a), this['F$v'][G[620464]](1.14, 1.15)), v6alk7[G[620436]](this['F$v']);
    }, e83$lq[G[620338]]['F$t'] = function () {
      this['F$v'] && v6alk7[G[620438]](this['F$v']);
    }, e83$lq[G[620338]]['F$_'] = function (s$_me) {
      Laya[G[620439]][G[620440]](this, this['F$q']), s$_me ? (this['F$Q'] = 0x9, this[G[620362]][G[620437]] = !0x0, this['F$q'](), Laya[G[620439]][G[620434]](0x3e8, this, this['F$q'])) : this[G[620362]][G[620437]] = !0x1;
    }, e83$lq[G[620338]]['F$q'] = function () {
      0x0 < this['F$Q'] ? (this[G[620362]][G[620275]] = G[620465] + this['F$Q'] + 's)', this['F$Q']--) : (this[G[620362]][G[620275]] = '', Laya[G[620439]][G[620440]](this, this['F$q']), this['F$r']());
    }, e83$lq;
  }(al8qe$3['F$y']), yicx2h['LoadingPanel'] = srmnz;
}(modules || (modules = {})), function (ynit) {
  var r_$seq, snzmbt, yxbnit, ntbzm;r_$seq = ynit['F$V'] || (ynit['F$V'] = {}), snzmbt = Laya[G[620466]], yxbnit = Laya[G[620418]], ntbzm = function (yxtbn) {
    function q38l$e() {
      var cihxy2 = yxtbn[G[620341]](this) || this;return cihxy2['F$i'] = 0x0, cihxy2['F$c'] = G[620467], cihxy2['F$u'] = 0x0, cihxy2['F$x'] = 0x0, cihxy2['F$k'] = G[620468], cihxy2;
    }return abmns(q38l$e, yxtbn), q38l$e[G[620338]][G[620413]] = function () {
      yxtbn[G[620338]][G[620413]][G[620341]](this), this[G[620414]] = 0x0, this[G[620415]] = 0x0, a_$r3q[G[620028]]['gG860A'](), this['F$l'] = abnzti[G[620423]]['g08'], this['F$X'] = new snzmbt(), this['F$X'][G[620469]] = '', this['F$X'][G[620470]] = r_$seq[G[620471]], this['F$X'][G[620082]] = 0x5, this['F$X'][G[620472]] = 0x1, this['F$X'][G[620473]] = 0x5, this['F$X'][G[620327]] = this[G[620412]][G[620327]], this['F$X']['height'] = this[G[620412]]['height'] - 0x8, this[G[620412]][G[620429]](this['F$X']), this['F$S'] = new snzmbt(), this['F$S'][G[620469]] = '', this['F$S'][G[620470]] = r_$seq['SelectRightListItem'], this['F$S'][G[620082]] = 0x5, this['F$S'][G[620472]] = 0x1, this['F$S'][G[620473]] = 0x5, this['F$S'][G[620327]] = this['rightListBox'][G[620327]], this['F$S']['height'] = this['rightListBox']['height'] - 0x8, this['rightListBox'][G[620429]](this['F$S']), this['F$f'] = new snzmbt(), this['F$f'][G[620474]] = '', this['F$f'][G[620470]] = r_$seq[G[620475]], this['F$f'][G[620476]] = 0x1, this['F$f'][G[620327]] = this[G[620401]][G[620327]], this['F$f']['height'] = this[G[620401]]['height'], this[G[620401]][G[620429]](this['F$f']), this['F$W'] = new snzmbt(), this['F$W'][G[620474]] = '', this['F$W'][G[620470]] = r_$seq[G[620477]], this['F$W'][G[620476]] = 0x1, this['F$W'][G[620327]] = this[G[620401]][G[620327]], this['F$W']['height'] = this[G[620401]]['height'], this[G[620408]][G[620429]](this['F$W']);var _3$e = this['F$l']['loadingType'];this['F$I'] = 0x1 == _3$e ? G[620385] : 0x2 == _3$e ? G[620385] : 0x3 == _3$e ? G[620385] : 0x65 == _3$e ? G[620385] : G[620478], this[G[620378]][G[620479]](0x1fa, 0x58), this['F$Y'] = [], this[G[620389]][G[620437]] = !0x1, this[G[620405]][G[620449]] = G[620396], this[G[620405]][G[620480]][G[620461]] = 0x1a, this[G[620405]][G[620480]]['lineHeight'] = 0x1c, this[G[620405]][G[620481]] = !0x1, this[G[620411]][G[620449]] = G[620396], this[G[620411]][G[620480]][G[620461]] = 0x1a, this[G[620411]][G[620480]]['lineHeight'] = 0x1c, this[G[620411]][G[620481]] = !0x1, this[G[620388]][G[620449]] = G[620381], this[G[620388]][G[620480]][G[620461]] = 0x12, this[G[620388]][G[620480]]['lineHeight'] = 0x12, this[G[620388]][G[620480]][G[620482]] = 0x2, this[G[620388]][G[620480]][G[620483]] = G[620450], this[G[620388]][G[620480]][G[620484]] = !0x1, abnzti[G[620423]][G[620289]] = this, gA086(), this[G[620416]](), this[G[620417]]();
    }, q38l$e[G[620338]][G[620422]] = function (re$sm) {
      void 0x0 === re$sm && (re$sm = !0x0), this[G[620420]](), this['F$U'](), this['F$d'](), this['F$C'](), this['F$X'] && (this['F$X'][G[620485]](), this['F$X'][G[620422]](), this['F$X'] = null), this['F$S'] && (this['F$S'][G[620485]](), this['F$S'][G[620422]](), this['F$S'] = null), this['F$f'] && (this['F$f'][G[620485]](), this['F$f'][G[620422]](), this['F$f'] = null), this['F$W'] && (this['F$W'][G[620485]](), this['F$W'][G[620422]](), this['F$W'] = null), Laya[G[620439]][G[620440]](this, this['F$F']), yxtbn[G[620338]][G[620422]][G[620341]](this, re$sm);
    }, q38l$e[G[620338]][G[620416]] = function () {
      this['bgImg']['on'](Laya[G[620418]][G[620419]], this, this['F$b']), this[G[620378]]['on'](Laya[G[620418]][G[620419]], this, this['F$h']), this[G[620377]]['on'](Laya[G[620418]][G[620419]], this, this['F$p']), this[G[620377]]['on'](Laya[G[620418]][G[620419]], this, this['F$p']), this['closeBg']['on'](Laya[G[620418]][G[620419]], this, this['F$j']), this[G[620389]]['on'](Laya[G[620418]][G[620419]], this, this['F$g']), this[G[620391]]['on'](Laya[G[620418]][G[620419]], this, this['F$N']), this[G[620394]]['on'](Laya[G[620418]][G[620486]], this, this['F$w']), this[G[620397]]['on'](Laya[G[620418]][G[620419]], this, this['F$z']), this[G[620398]]['on'](Laya[G[620418]][G[620419]], this, this['F$z']), this[G[620404]]['on'](Laya[G[620418]][G[620486]], this, this['F$JJ']), this[G[620390]]['on'](Laya[G[620418]][G[620419]], this, this['F$yJ']), this[G[620406]]['on'](Laya[G[620418]][G[620419]], this, this['F$TJ']), this[G[620407]]['on'](Laya[G[620418]][G[620419]], this, this['F$TJ']), this[G[620410]]['on'](Laya[G[620418]][G[620486]], this, this['F$VJ']), this['privacyToggle']['on'](Laya[G[620418]][G[620419]], this, this['F$ZJ']), this[G[620388]]['on'](Laya[G[620418]][G[620487]], this, this['F$mJ']), this['F$f'][G[620488]] = !0x0, this['F$f'][G[620489]] = Laya[G[620490]][G[620339]](this, this['F$RJ'], null, !0x1), this['F$W'][G[620488]] = !0x0, this['F$W'][G[620489]] = Laya[G[620490]][G[620339]](this, this['F$nJ'], null, !0x1);
    }, q38l$e[G[620338]][G[620420]] = function () {
      this['bgImg'][G[620421]](Laya[G[620418]][G[620419]], this, this['F$b']), this[G[620378]][G[620421]](Laya[G[620418]][G[620419]], this, this['F$h']), this[G[620377]][G[620421]](Laya[G[620418]][G[620419]], this, this['F$p']), this[G[620377]][G[620421]](Laya[G[620418]][G[620419]], this, this['F$p']), this['closeBg'][G[620421]](Laya[G[620418]][G[620419]], this, this['F$j']), this[G[620389]][G[620421]](Laya[G[620418]][G[620419]], this, this['F$g']), this[G[620391]][G[620421]](Laya[G[620418]][G[620419]], this, this['F$N']), this[G[620394]][G[620421]](Laya[G[620418]][G[620486]], this, this['F$w']), this[G[620397]][G[620421]](Laya[G[620418]][G[620419]], this, this['F$z']), this[G[620398]][G[620421]](Laya[G[620418]][G[620419]], this, this['F$z']), this[G[620404]][G[620421]](Laya[G[620418]][G[620486]], this, this['F$JJ']), this[G[620390]][G[620421]](Laya[G[620418]][G[620419]], this, this['F$yJ']), this[G[620406]][G[620421]](Laya[G[620418]][G[620419]], this, this['F$TJ']), this[G[620407]][G[620421]](Laya[G[620418]][G[620419]], this, this['F$TJ']), this[G[620410]][G[620421]](Laya[G[620418]][G[620486]], this, this['F$VJ']), this['privacyToggle'][G[620421]](Laya[G[620418]][G[620419]], this, this['F$ZJ']), this[G[620388]][G[620421]](Laya[G[620418]][G[620487]], this, this['F$mJ']), this['F$f'][G[620488]] = !0x1, this['F$f'][G[620489]] = null, this['F$W'][G[620488]] = !0x1, this['F$W'][G[620489]] = null;
    }, q38l$e[G[620338]][G[620417]] = function () {
      var htxbyi = this;this['F$m'] = Date[G[620115]](), this['F$KJ'] = !0x1, this['F$AJ'] = this['F$l'][G[620018]][G[620019]], this['F$$J'](this['F$l'][G[620018]]), this['F$X'][G[620491]] = this['F$l']['groupList'], this['F$p'](), req_multi_server_notice(0x4, this['F$l']['pkgName'], this['F$l'][G[620018]][G[620019]], this['F$eJ'][G[620181]](this)), Laya[G[620439]][G[620492]](0xa, this, function () {
        htxbyi['F$KJ'] = !0x0, htxbyi['F$MJ'] = htxbyi['F$l']['pkg_protocol_list'] && htxbyi['F$l']['pkg_protocol_list'][G[620493]] ? htxbyi['F$l']['pkg_protocol_list'][G[620493]] : [], htxbyi['F$GJ'] = null != htxbyi['F$l']['privacy_login_pkg'] ? htxbyi['F$l']['privacy_login_pkg'] : 0x0;var a4fvk5 = '1' == localStorage['getItem'](htxbyi['F$k']),
            n_rms = 0x0 != g08['privacy_save_pkg'],
            o5d4fk = 0x0 == htxbyi['F$GJ'] || 0x1 == htxbyi['F$GJ'];htxbyi['F$BJ'] = n_rms && a4fvk5 || o5d4fk, htxbyi['F$oJ']();
      }), this[G[620367]][G[620275]] = G[620455] + this['F$l'][G[620016]] + G[620456] + this['F$l'][G[620127]], this[G[620386]][G[620449]] = this[G[620383]][G[620449]] = this['F$I'], this['imgCheatTip'][G[620437]] = 0x1 == this['F$l']['anti_cheat_pkg'], this[G[620379]][G[620437]] = !0x1;
    }, q38l$e[G[620338]][G[620494]] = function () {}, q38l$e[G[620338]]['F$b'] = function () {
      this['F$KJ'] && (this['F$BJ'] ? 0x2710 < Date[G[620115]]() - this['F$m'] && (this['F$m'] -= 0x7d0, a_$r3q[G[620028]][G[620424]]()) : this['F$sJ'](G[620495]));
    }, q38l$e[G[620338]]['F$h'] = function () {
      this['F$KJ'] && (this['F$BJ'] ? this['F$EJ'](this['F$l'][G[620018]]) && (abnzti[G[620423]]['g08'][G[620018]] = this['F$l'][G[620018]], g8A60(0x0, this['F$l'][G[620018]][G[620019]])) : this['F$sJ'](G[620495]));
    }, q38l$e[G[620338]]['F$p'] = function () {
      this['F$l'][G[620291]] ? this['listBg'][G[620437]] = !0x0 : (this['F$l'][G[620291]] = !0x0, g08A6(0x0));
    }, q38l$e[G[620338]]['F$j'] = function () {
      this['listBg'][G[620437]] = !0x1;
    }, q38l$e[G[620338]]['F$g'] = function () {
      this['F$OJ']();
    }, q38l$e[G[620338]]['F$z'] = function () {
      this['mNoticeBg'][G[620437]] = !0x1;
    }, q38l$e[G[620338]]['F$N'] = function () {
      this['noticeBg'][G[620437]] = !0x1;
    }, q38l$e[G[620338]]['F$yJ'] = function () {
      this['F$LJ']();
    }, q38l$e[G[620338]]['F$TJ'] = function () {
      this['privacyBg'][G[620437]] = !0x1;
    }, q38l$e[G[620338]]['F$ZJ'] = function () {
      this['F$BJ'] = !this['F$BJ'], this['F$BJ'] && localStorage[G[620496]](this['F$k'], '1'), this['privacyToggle'][G[620432]] = 'z888z888lgrz888z888/' + (this['F$BJ'] ? 'z888z88829b.png' : 'z888z88828b.png');
    }, q38l$e[G[620338]]['F$mJ'] = function (ms_n) {
      this['F$LJ'](Number(ms_n));
    }, q38l$e[G[620338]]['F$w'] = function () {
      this['F$i'] = this[G[620394]][G[620497]], Laya['stage']['on'](yxbnit[G[620498]], this, this['F$HJ']), Laya['stage']['on'](yxbnit[G[620499]], this, this['F$U']), Laya['stage']['on'](yxbnit[G[620500]], this, this['F$U']);
    }, q38l$e[G[620338]]['F$HJ'] = function () {
      if (this[G[620394]]) {
        var odwu0 = this['F$i'] - this[G[620394]][G[620497]];this[G[620394]][G[620501]] += odwu0, this['F$i'] = this[G[620394]][G[620497]];
      }
    }, q38l$e[G[620338]]['F$U'] = function () {
      Laya['stage'][G[620421]](yxbnit[G[620498]], this, this['F$HJ']), Laya['stage'][G[620421]](yxbnit[G[620499]], this, this['F$U']), Laya['stage'][G[620421]](yxbnit[G[620500]], this, this['F$U']);
    }, q38l$e[G[620338]]['F$JJ'] = function () {
      this['F$u'] = this[G[620404]][G[620497]], Laya['stage']['on'](yxbnit[G[620498]], this, this['F$PJ']), Laya['stage']['on'](yxbnit[G[620499]], this, this['F$d']), Laya['stage']['on'](yxbnit[G[620500]], this, this['F$d']);
    }, q38l$e[G[620338]]['F$PJ'] = function () {
      if (this[G[620405]]) {
        var _mnrzs = this['F$u'] - this[G[620404]][G[620497]];this[G[620405]]['y'] -= _mnrzs, this[G[620404]]['height'] < this[G[620405]]['contextHeight'] ? this[G[620405]]['y'] < this[G[620404]]['height'] - this[G[620405]]['contextHeight'] ? this[G[620405]]['y'] = this[G[620404]]['height'] - this[G[620405]]['contextHeight'] : 0x0 < this[G[620405]]['y'] && (this[G[620405]]['y'] = 0x0) : this[G[620405]]['y'] = 0x0, this['F$u'] = this[G[620404]][G[620497]];
      }
    }, q38l$e[G[620338]]['F$d'] = function () {
      Laya['stage'][G[620421]](yxbnit[G[620498]], this, this['F$PJ']), Laya['stage'][G[620421]](yxbnit[G[620499]], this, this['F$d']), Laya['stage'][G[620421]](yxbnit[G[620500]], this, this['F$d']);
    }, q38l$e[G[620338]]['F$VJ'] = function () {
      this['F$x'] = this[G[620410]][G[620497]], Laya['stage']['on'](yxbnit[G[620498]], this, this['F$lJ']), Laya['stage']['on'](yxbnit[G[620499]], this, this['F$C']), Laya['stage']['on'](yxbnit[G[620500]], this, this['F$C']);
    }, q38l$e[G[620338]]['F$lJ'] = function () {
      if (this[G[620411]]) {
        var cix2yh = this['F$x'] - this[G[620410]][G[620497]];this[G[620411]]['y'] -= cix2yh, this[G[620410]]['height'] < this[G[620411]]['contextHeight'] ? this[G[620411]]['y'] < this[G[620410]]['height'] - this[G[620411]]['contextHeight'] ? this[G[620411]]['y'] = this[G[620410]]['height'] - this[G[620411]]['contextHeight'] : 0x0 < this[G[620411]]['y'] && (this[G[620411]]['y'] = 0x0) : this[G[620411]]['y'] = 0x0, this['F$x'] = this[G[620410]][G[620497]];
      }
    }, q38l$e[G[620338]]['F$C'] = function () {
      Laya['stage'][G[620421]](yxbnit[G[620498]], this, this['F$lJ']), Laya['stage'][G[620421]](yxbnit[G[620499]], this, this['F$C']), Laya['stage'][G[620421]](yxbnit[G[620500]], this, this['F$C']);
    }, q38l$e[G[620338]]['F$RJ'] = function () {
      if (this['F$f'][G[620491]]) {
        for (var pou1w0, l7a8 = 0x0; l7a8 < this['F$f'][G[620491]]['length']; l7a8++) {
          var nstz = this['F$f'][G[620491]][l7a8];nstz[0x1] = l7a8 == this['F$f'][G[620502]], l7a8 == this['F$f'][G[620502]] && (pou1w0 = nstz[0x0]);
        }pou1w0 && pou1w0[G[620503]] && (pou1w0[G[620503]] = pou1w0[G[620503]][G[620005]](/(<)(?!(br)).[a-zA-Z]{0,10}(>)/g, '')), this[G[620402]][G[620275]] = pou1w0 && pou1w0[G[620504]] ? pou1w0[G[620504]] : '', this[G[620405]][G[620505]] = pou1w0 && pou1w0[G[620503]] ? pou1w0[G[620503]] : '', this[G[620405]]['y'] = 0x0;
      }
    }, q38l$e[G[620338]]['F$nJ'] = function () {
      if (this['F$W'][G[620491]]) {
        for (var kfv5a4, x2tihy = 0x0; x2tihy < this['F$W'][G[620491]]['length']; x2tihy++) {
          var xyh2it = this['F$W'][G[620491]][x2tihy];xyh2it[0x1] = x2tihy == this['F$W'][G[620502]], x2tihy == this['F$W'][G[620502]] && (kfv5a4 = xyh2it[0x0]);
        }kfv5a4 && kfv5a4[G[620503]] && (kfv5a4[G[620503]] = kfv5a4[G[620503]][G[620005]](/(<)(?!(br)).[a-zA-Z]{0,10}(>)/g, '')), this[G[620409]][G[620275]] = kfv5a4 && kfv5a4[G[620504]] ? kfv5a4[G[620504]] : '', this[G[620411]][G[620505]] = kfv5a4 && kfv5a4[G[620503]] ? kfv5a4[G[620503]] : '', this[G[620411]]['y'] = 0x0;
      }
    }, q38l$e[G[620338]]['F$$J'] = function (ntibyx) {
      this[G[620386]][G[620275]] = -0x1 === ntibyx[G[620226]] ? ntibyx[G[620222]] + G[620506] : 0x0 === ntibyx[G[620226]] ? ntibyx[G[620222]] + G[620507] : ntibyx[G[620222]], this[G[620386]][G[620449]] = -0x1 === ntibyx[G[620226]] ? G[620508] : 0x0 === ntibyx[G[620226]] ? G[620509] : this['F$I'], this['hotImage'][G[620432]] = this['getStatusSrc'](ntibyx[G[620226]]), this['F$l'][G[620017]] = ntibyx[G[620017]] || '', this['F$l'][G[620018]] = ntibyx, this[G[620389]][G[620437]] = !0x0;
    }, q38l$e[G[620338]]['F$aJ'] = function (d4wo1) {
      this[G[620290]](d4wo1);
    }, q38l$e[G[620338]]['F$qJ'] = function (k7vaf) {
      this['F$$J'](k7vaf), this['listBg'][G[620437]] = !0x1;
    }, q38l$e[G[620338]][G[620290]] = function (mszrn_) {
      if (void 0x0 === mszrn_ && (mszrn_ = 0x0), this[G[620510]]) {
        var r_mzs = this['F$l']['groupList'];if (r_mzs && 0x0 !== r_mzs['length']) {
          for (var q36el = r_mzs['length'], kv67al = 0x0; kv67al < q36el; kv67al++) r_mzs[kv67al][G[620511]] = this['F$aJ'][G[620181]](this), r_mzs[kv67al][G[620512]] = kv67al == mszrn_, r_mzs[kv67al][G[620513]] = kv67al;var l76q3 = (this['F$X'][G[620514]] = r_mzs)[mszrn_]['id'];this['F$l'][G[620138]][l76q3] ? this[G[620294]](l76q3) : this['F$l'][G[620293]] || (this['F$l'][G[620293]] = !0x0, -0x1 == l76q3 ? gA60(0x0) : -0x2 == l76q3 ? gG680(0x0) : g6A0(0x0, l76q3));
        }
      }
    }, q38l$e[G[620338]][G[620294]] = function (rzmbsn) {
      if (this[G[620510]] && this['F$l'][G[620138]][rzmbsn]) {
        for (var er_3$q = this['F$l'][G[620138]][rzmbsn], ytihx = er_3$q['length'], zixtn = 0x0; zixtn < ytihx; zixtn++) er_3$q[zixtn][G[620511]] = this['F$qJ'][G[620181]](this);this['F$S'][G[620514]] = er_3$q;
      }
    }, q38l$e[G[620338]]['F$EJ'] = function (fuo1d4) {
      return -0x1 == fuo1d4[G[620226]] ? (alert(G[620515]), !0x1) : 0x0 != fuo1d4[G[620226]] || (alert(G[620516]), !0x1);
    }, q38l$e[G[620338]]['getStatusSrc'] = function (xbyti) {
      var xytnib = '';return 0x2 === xbyti ? xytnib = 'z888z888lgrz888z888/z888z88818b.png' : 0x1 === xbyti ? xytnib = 'z888z888lgrz888z888/z888z88819b.png' : -0x1 !== xbyti && 0x0 !== xbyti || (xytnib = 'z888z888lgrz888z888/z888z88820b.png'), xytnib;
    }, q38l$e[G[620338]]['F$eJ'] = function (lq8e3) {
      console['log'](G[620517], lq8e3);var uf41od = Date[G[620115]]() / 0x3e8,
          l8673v = localStorage['getItem'](this['F$c']),
          _r$qes = !(this['F$Y'] = []);if (G[620212] == lq8e3[G[620158]]) for (var e863l in lq8e3[G[620157]]) {
        var q68l7 = lq8e3[G[620157]][e863l],
            fd14u = uf41od < q68l7[G[620518]],
            ic2jhy = 0x1 == q68l7[G[620519]],
            a86v7l = 0x2 == q68l7[G[620519]] && q68l7[G[620520]] + '' != l8673v;!_r$qes && fd14u && (ic2jhy || a86v7l) && (_r$qes = !0x0), fd14u && this['F$Y'][G[620031]](q68l7), a86v7l && localStorage[G[620496]](this['F$c'], q68l7[G[620520]] + '');
      }this['F$Y'][G[620284]](function (of4d5k, biytx) {
        return of4d5k['login_id'] - biytx['login_id'];
      }), console['log'](G[620521], this['F$Y']), _r$qes && this['F$OJ']();
    }, q38l$e[G[620338]]['F$OJ'] = function () {
      if (this['F$f']) {
        if (this['F$Y']) {
          this['F$f']['x'] = 0x2 < this['F$Y']['length'] ? 0x0 : (this[G[620401]][G[620327]] - 0x112 * this['F$Y']['length']) / 0x2;for (var ow1ud = [], l68v7 = 0x0; l68v7 < this['F$Y']['length']; l68v7++) {
            var txbmnz = this['F$Y'][l68v7];ow1ud[G[620031]]([txbmnz, l68v7 == this['F$f'][G[620502]]]);
          }0x0 < (this['F$f'][G[620491]] = ow1ud)['length'] ? (this['F$f'][G[620502]] = 0x0, this['F$f'][G[620522]](0x0)) : (this[G[620402]][G[620275]] = G[620393], this[G[620405]][G[620275]] = ''), this[G[620398]][G[620437]] = this['F$Y']['length'] <= 0x1, this[G[620401]][G[620437]] = 0x1 < this['F$Y']['length'];
        }this['mNoticeBg'][G[620437]] = !0x0;
      }
    }, q38l$e[G[620338]]['F$oJ'] = function () {
      for (var w91u = '', p1u09w = 0x0; p1u09w < this['F$MJ']['length']; p1u09w++) {
        w91u += G[620523] + p1u09w + G[620524] + this['F$MJ'][p1u09w][G[620504]] + G[620525], p1u09w < this['F$MJ']['length'] - 0x1 && (w91u += '、');
      }this[G[620388]][G[620505]] = G[620526] + w91u, this['privacyToggle'][G[620432]] = 'z888z888lgrz888z888/' + (this['F$BJ'] ? 'z888z88829b.png' : 'z888z88828b.png'), this[G[620388]]['x'] = (0x2d0 - this[G[620388]][G[620327]]) / 0x2, this['privacyToggle']['x'] = this[G[620388]]['x'] - 0x1e, this[G[620390]][G[620437]] = 0x0 < this['F$MJ']['length'], this['privacyToggle'][G[620437]] = this[G[620388]][G[620437]] = 0x0 < this['F$MJ']['length'] && 0x0 != this['F$GJ'];
    }, q38l$e[G[620338]]['F$LJ'] = function (ibxnz) {
      if (void 0x0 === ibxnz && (ibxnz = 0x0), this['F$W']) {
        if (this['F$MJ']) {
          this['F$W']['x'] = 0x2 < this['F$MJ']['length'] ? 0x0 : (this[G[620401]][G[620327]] - 0x112 * this['F$MJ']['length']) / 0x2;for (var snm_zr = [], e3ql$ = 0x0; e3ql$ < this['F$MJ']['length']; e3ql$++) {
            var sqr_e = this['F$MJ'][e3ql$];snm_zr[G[620031]]([sqr_e, e3ql$ == this['F$W'][G[620502]]]);
          }0x0 < (this['F$W'][G[620491]] = snm_zr)['length'] ? (this['F$W'][G[620502]] = ibxnz, this['F$W'][G[620522]](ibxnz)) : (this[G[620409]][G[620275]] = G[620527], this[G[620411]][G[620275]] = ''), this[G[620407]][G[620437]] = this['F$MJ']['length'] <= 0x1, this[G[620408]][G[620437]] = 0x1 < this['F$MJ']['length'];
        }this['privacyBg'][G[620437]] = !0x0;
      }
    }, q38l$e[G[620338]]['F$sJ'] = function (a5vkf7) {
      this[G[620379]][G[620275]] = a5vkf7, this[G[620379]]['y'] = 0x280, this[G[620379]][G[620437]] = !0x0, this['F$rJ'] = 0x1, Laya[G[620439]][G[620440]](this, this['F$F']), this['F$F'](), Laya[G[620439]][G[620452]](0x1, this, this['F$F']);
    }, q38l$e[G[620338]]['F$F'] = function () {
      this[G[620379]]['y'] -= this['F$rJ'], this['F$rJ'] *= 1.1, this[G[620379]]['y'] <= 0x24e && (this[G[620379]][G[620437]] = !0x1, Laya[G[620439]][G[620440]](this, this['F$F']));
    }, q38l$e;
  }(al8qe$3['F$T']), r_$seq[G[620528]] = ntbzm;
}(modules || (modules = {}));var modules,
    abnzti = Laya[G[620529]],
    aybnxi = Laya[G[620530]],
    ak6a57 = Laya[G[620531]],
    ah2ycj = Laya[G[620532]],
    ayi2hxt = Laya[G[620490]],
    awod41u = modules['F$V'][G[620426]],
    akav56 = modules['F$V']['LoadingPanel'],
    ad4f5k = modules['F$V'][G[620528]],
    a_$r3q = function () {
  function q3e8l(ihyc2x) {
    this['m_loadingRes'] = ['z888z888dz888/z888z88813a.png', 'z888z888dz888/z888z88815a.png', 'z888z888dz888/z888z88814a.png', 'z888z888dz888/z888z88816a.png', 'z888z888dz888/z888z88817a.png', 'z888z888dz888/z888z88818a.png', 'z888z888dz888/z888z88819a.png', 'z888z888dz888/z888z88820a.png', 'z888yz888/z888z8881c.png', 'z888yz888/z888z8882c.png', 'z888yz888/z888z8883c.png', 'z888yz888/z888z8884c.png', 'z888yz888/z888z8885c.png', 'z888z888dz888/z888z8883a.jpg', 'z888z888dz888/z888z88812a.jpg', 'z888z888dz888/z888z8881a.png', 'z888z888dz888/z888z8882a.png', 'z888z888dz888/z888z8884a.jpg', 'z888z888dz888/z888z8886a.jpg', 'z888z888dz888/z888z8888a.jpg', 'z888z888dz888/z888z88810a.jpg', 'z888z888dz888/z888z8885a.jpg', 'z888z888dz888/z888z8887a.jpg', 'z888z888dz888/z888z8889a.jpg', 'z888z888dz888/z888z88811a.jpg'], this['gG860'] = ['z888z888lgrz888z888/z888z88810b.png', 'z888z888lgrz888z888/z888z88811b.png', 'z888z888lgrz888z888/z888z88812b.png', 'z888z888lgrz888z888/z888z88813b.png', 'z888z888lgrz888z888/z888z88814b.png', 'z888z888lgrz888z888/z888z88815b.png', 'z888z888lgrz888z888/z888z88816b.png', 'z888z888lgrz888z888/z888z88817b.png', 'z888z888lgrz888z888/z888z88818b.png', 'z888z888lgrz888z888/z888z88819b.png', 'z888z888lgrz888z888/z888z88820b.png', 'z888z888lgrz888z888/z888z88821b.png', 'z888z888lgrz888z888/z888z8882b.jpg', 'z888z888lgrz888z888/z888z8883b.jpg', 'z888z888lgrz888z888/z888z8884b.jpg', 'z888z888lgrz888z888/z888z8885b.jpg', 'z888z888lgrz888z888/z888z8886b.jpg', 'z888z888lgrz888z888/z888z8881b.png', 'z888z888lgrz888z888/z888z8888b.png', 'z888z888lgrz888z888/z888z8889b.png', 'z888z888lgrz888z888/z888z88824b.png', 'z888z888lgrz888z888/z888z88825b.png', 'z888z888lgrz888z888/z888z88827b.png', 'z888z888lgrz888z888/z888z88829b.png', 'z888z888lgrz888z888/z888z88828b.png'], this[G[620533]] = !0x1, this['m_isPrelodLoading'] = !0x1, this['F$DJ'] = !0x1, this['F$_J'] = '', q3e8l[G[620028]] = this, Laya[G[620534]][G[620180]](), Laya3D[G[620180]](0x0, 0x0, !0x1, !0x1, !0x1), DecodeTools[G[620180]](), Laya['stage'][G[620535]] = Laya['Stage'][G[620536]], Laya['stage'][G[620537]] = Laya['Stage'][G[620538]], Laya['stage']['alignH'] = Laya['Stage'][G[620539]], Laya['stage']['alignV'] = Laya['Stage'][G[620540]], Laya['stage'][G[620541]] = Laya['Stage'][G[620542]];var tbiz = Laya['AtlasResourceManager'];tbiz[G[620543]] = 0x6, tbiz[G[620544]] = tbiz['atlasTextureHeight'] = 0x400, tbiz[G[620545]](), Laya[G[620546]][G[620547]] = Laya[G[620546]][G[620548]] = '', Laya[G[620529]][G[620423]][G[620549]](Laya[G[620418]][G[620550]], this['F$tJ'][G[620181]](this)), Laya[G[620428]][G[620551]][G[620552]] = { 'frames': { 'btn_chuangjue_kaishi.png': { 'frame': { 'h': 0x58, 'idx': 0x0, 'w': 0x1fa, 'x': 0x0, 'y': 0x0 }, 'sourceSize': { 'h': 0x58, 'w': 0x1fa }, 'spriteSourceSize': { 'x': 0x0, 'y': 0x0 } }, 'btn_chuangjue_nan.png': { 'frame': { 'h': 0x62, 'idx': 0x0, 'w': 0x6c, 'x': 0x14f, 'y': 0x59 }, 'sourceSize': { 'h': 0x62, 'w': 0x6c }, 'spriteSourceSize': { 'x': 0x0, 'y': 0x0 } }, 'btn_chuangjue_nv.png': { 'frame': { 'h': 0x62, 'idx': 0x0, 'w': 0x6b, 'x': 0x0, 'y': 0xa4 }, 'sourceSize': { 'h': 0x62, 'w': 0x6b }, 'spriteSourceSize': { 'x': 0x0, 'y': 0x0 } }, 'image_chuangjue_mingbg.png': { 'frame': { 'h': 0x4a, 'idx': 0x0, 'w': 0x14e, 'x': 0x0, 'y': 0x59 }, 'sourceSize': { 'h': 0x4a, 'w': 0x14e }, 'spriteSourceSize': { 'x': 0x0, 'y': 0x0 } }, 'image_chuangjue_suiji.png': { 'frame': { 'h': 0x38, 'idx': 0x0, 'w': 0x34, 'x': 0x1bc, 'y': 0x59 }, 'sourceSize': { 'h': 0x38, 'w': 0x34 }, 'spriteSourceSize': { 'x': 0x0, 'y': 0x0 } }, 'z888z88828b.png': { 'frame': { 'h': 0x19, 'idx': 0x0, 'w': 0x19, 'x': 0x1bc, 'y': 0x92 }, 'sourceSize': { 'h': 0x1b, 'w': 0x1a }, 'spriteSourceSize': { 'x': 0x0, 'y': 0x2 } }, 'z888z88829b.png': { 'frame': { 'h': 0x1b, 'idx': 0x0, 'w': 0x1a, 'x': 0x1d6, 'y': 0x92 }, 'sourceSize': { 'h': 0x1b, 'w': 0x1a }, 'spriteSourceSize': { 'x': 0x0, 'y': 0x0 } } }, 'meta': { 'image': 'create_role_atlas.png', 'prefix': G[620553] } }, abnzti[G[620423]]['resMgrLoad'] = q3e8l[G[620028]]['gG08'], abnzti[G[620423]]['imgMgrLoad'] = q3e8l[G[620028]]['gG08'], this[G[620554]] = new Laya[G[620427]](), this[G[620554]][G[620555]] = '_wxLoadingLayer', Laya['stage'][G[620429]](this[G[620554]]), this['F$tJ']();
  }return q3e8l[G[620338]]['gA860'] = function (_r$eq) {
    q3e8l[G[620028]][G[620554]][G[620437]] = _r$eq;
  }, q3e8l[G[620338]]['gG608A'] = function () {
    q3e8l[G[620028]][G[620556]] || (q3e8l[G[620028]][G[620556]] = new awod41u()), q3e8l[G[620028]][G[620556]][G[620510]] || q3e8l[G[620028]][G[620554]][G[620429]](q3e8l[G[620028]][G[620556]]), q3e8l[G[620028]]['F$vJ']();
  }, q3e8l[G[620338]][G[620161]] = function () {
    this[G[620556]] && this[G[620556]][G[620510]] && (Laya['stage'][G[620557]](this[G[620556]]), this[G[620556]][G[620422]](!0x0), this[G[620556]] = null);
  }, q3e8l[G[620338]]['gG860A'] = function () {
    this[G[620533]] || (this[G[620533]] = !0x0, Laya[G[620558]][G[620559]](this['gG860'], ayi2hxt[G[620339]](this, function () {
      abnzti[G[620423]][G[620146]] = !0x0, abnzti[G[620423]]['g860A'](), abnzti[G[620423]]['g80A6']();
    })));
  }, q3e8l[G[620338]][G[620229]] = function () {
    for (var y2tx = function () {
      q3e8l[G[620028]][G[620560]] || (q3e8l[G[620028]][G[620560]] = new ad4f5k()), q3e8l[G[620028]][G[620560]][G[620510]] || q3e8l[G[620028]][G[620554]][G[620429]](q3e8l[G[620028]][G[620560]]), q3e8l[G[620028]]['F$vJ']();
    }, szbntm = !0x0, l8a7 = 0x0, _q$3r = this['gG860']; l8a7 < _q$3r['length']; l8a7++) {
      var ud5fo4 = _q$3r[l8a7];if (null == Laya[G[620428]]['getRes'](ud5fo4)) {
        szbntm = !0x1;break;
      }
    }szbntm ? y2tx() : Laya[G[620558]][G[620559]](this['gG860'], ayi2hxt[G[620339]](this, y2tx));
  }, q3e8l[G[620338]][G[620162]] = function () {
    this[G[620560]] && this[G[620560]][G[620510]] && (Laya['stage'][G[620557]](this[G[620560]]), this[G[620560]][G[620422]](!0x0), this[G[620560]] = null);
  }, q3e8l[G[620338]]['preloadLoading'] = function () {
    this['m_isPrelodLoading'] || (this['m_isPrelodLoading'] = !0x0, Laya[G[620558]][G[620559]](this['m_loadingRes'], ayi2hxt[G[620339]](this, function () {
      abnzti[G[620423]]['loadLoadingRes'] = !0x0, abnzti[G[620423]]['g860A'](), abnzti[G[620423]]['g80A6']();
    })));
  }, q3e8l[G[620338]]['openLoading'] = function (tzbxnm) {
    void 0x0 === tzbxnm && (tzbxnm = 0x0), Laya[G[620558]][G[620559]](this['m_loadingRes'], ayi2hxt[G[620339]](this, function () {
      q3e8l[G[620028]]['m_loading'] || (q3e8l[G[620028]]['m_loading'] = new akav56(tzbxnm)), q3e8l[G[620028]]['m_loading'][G[620510]] || q3e8l[G[620028]][G[620554]][G[620429]](q3e8l[G[620028]]['m_loading']), q3e8l[G[620028]]['F$vJ']();
    }));
  }, q3e8l[G[620338]]['closeLoading'] = function () {
    this['m_loading'] && this['m_loading'][G[620510]] && (Laya['stage'][G[620557]](this['m_loading']), this['m_loading'][G[620422]](!0x0), this['m_loading'] = null);for (var pwg9 = 0x0, cxyi2h = this['gG860']; pwg9 < cxyi2h['length']; pwg9++) {
      var owu1d = cxyi2h[pwg9];Laya[G[620428]][G[620561]](q3e8l[G[620028]], owu1d), Laya[G[620428]][G[620562]](owu1d, !0x0);
    }for (var xyinbt = 0x0, _emrs$ = this['m_loadingRes']; xyinbt < _emrs$['length']; xyinbt++) {
      owu1d = _emrs$[xyinbt], (Laya[G[620428]][G[620561]](q3e8l[G[620028]], owu1d), Laya[G[620428]][G[620562]](owu1d, !0x0));
    }this[G[620554]][G[620510]] && this[G[620554]][G[620510]][G[620557]](this[G[620554]]);
  }, q3e8l[G[620338]]['gG80'] = function () {
    this['m_loading'] && this['m_loading'][G[620510]] && q3e8l[G[620028]]['m_loading'][G[620316]]();
  }, q3e8l[G[620338]][G[620424]] = function () {
    var w0u91 = abnzti[G[620423]]['g08'][G[620018]];this['F$DJ'] || -0x1 == w0u91[G[620226]] || 0x0 == w0u91[G[620226]] || (this['F$DJ'] = !0x0, abnzti[G[620423]]['g08'][G[620018]] = w0u91, g8A60(0x0, w0u91[G[620019]]));
  }, q3e8l[G[620338]][G[620425]] = function () {
    var udw1 = '';udw1 += 'newRegister=' + abnzti[G[620423]]['g08']['newRegister'], udw1 += G[620563] + this[G[620533]], udw1 += G[620564] + (null != q3e8l[G[620028]][G[620560]]), udw1 += ', isPrelodLoading=' + this['m_isPrelodLoading'], udw1 += ', LoadingPanel=' + (null != q3e8l[G[620028]]['m_loading']), udw1 += ', resMgrLoad=' + (abnzti[G[620423]]['resMgrLoad'] == q3e8l[G[620028]]['gG08']), udw1 += ', imgMgrLoad=' + (abnzti[G[620423]]['imgMgrLoad'] == q3e8l[G[620028]]['gG08']), udw1 += G[620565] + q3e8l[G[620028]]['F$_J'];for (var wd14uo = 0x0, wu19p0 = this['gG860']; wd14uo < wu19p0['length']; wd14uo++) {
      udw1 += ',\x20' + (cx2yhi = wu19p0[wd14uo]) + '=' + (null != Laya[G[620428]]['getRes'](cx2yhi));
    }for (var ql36 = 0x0, _zm$s = this['m_loadingRes']; ql36 < _zm$s['length']; ql36++) {
      var cx2yhi;udw1 += ',\x20' + (cx2yhi = _zm$s[ql36]) + '=' + (null != Laya[G[620428]]['getRes'](cx2yhi));
    }var ibxyt = abnzti[G[620423]]['g08'][G[620018]];ibxyt && (udw1 += G[620566] + ibxyt[G[620226]], udw1 += G[620567] + ibxyt[G[620019]], udw1 += G[620568] + ibxyt[G[620222]]);var rnzs_ = JSON['stringify']({ 'error': G[620569], 'stack': udw1 });console[G[620021]](rnzs_), this['F$QJ'] && this['F$QJ'] == udw1 || (this['F$QJ'] = udw1, g0A8(rnzs_));
  }, q3e8l[G[620338]]['F$iJ'] = function () {
    var ntiyb = Laya['stage'],
        oud10w = Math[G[620281]](ntiyb[G[620327]]),
        msbrz = Math[G[620281]](ntiyb['height']);msbrz / oud10w < 1.7777778 ? (this[G[620570]] = Math[G[620281]](oud10w / (msbrz / 0x500)), this[G[620571]] = 0x500, this[G[620572]] = msbrz / 0x500) : (this[G[620570]] = 0x2d0, this[G[620571]] = Math[G[620281]](msbrz / (oud10w / 0x2d0)), this[G[620572]] = oud10w / 0x2d0);var df45ak = Math[G[620281]](ntiyb[G[620327]]),
        xh2it = Math[G[620281]](ntiyb['height']);xh2it / df45ak < 1.7777778 ? (this[G[620570]] = Math[G[620281]](df45ak / (xh2it / 0x500)), this[G[620571]] = 0x500, this[G[620572]] = xh2it / 0x500) : (this[G[620570]] = 0x2d0, this[G[620571]] = Math[G[620281]](xh2it / (df45ak / 0x2d0)), this[G[620572]] = df45ak / 0x2d0), this['F$vJ']();
  }, q3e8l[G[620338]]['F$vJ'] = function () {
    this[G[620554]] && (this[G[620554]][G[620479]](this[G[620570]], this[G[620571]]), this[G[620554]][G[620464]](this[G[620572]], this[G[620572]], !0x0));
  }, q3e8l[G[620338]]['F$tJ'] = function () {
    if (ak6a57['isInputting'] && abnzti[G[620573]]) {
      var w0upo = parseInt(ak6a57[G[620574]][G[620480]][G[620082]][G[620005]]('px', '')),
          ibxn = parseInt(ak6a57[G[620575]][G[620480]]['height'][G[620005]]('px', '')) * this[G[620572]],
          itbxz = abnzti[G[620576]] / ah2ycj[G[620577]][G[620327]];return 0x0 < (w0upo = abnzti['clientHeight'] - ibxn * itbxz - w0upo) && (w0upo = 0x0), void (abnzti[G[620578]][G[620480]][G[620082]] = w0upo + 'px');
    }abnzti[G[620578]][G[620480]][G[620082]] = G[620579];var nsm_z = Math[G[620281]](abnzti[G[620327]]),
        $rse = Math[G[620281]](abnzti['height']);nsm_z = nsm_z + 0x1 & 0x7ffffffe, $rse = $rse + 0x1 & 0x7ffffffe;var v76alk = Laya['stage'];0x3 == ENV ? (v76alk[G[620535]] = Laya['Stage'][G[620580]], v76alk[G[620327]] = nsm_z, v76alk['height'] = $rse) : $rse < nsm_z ? (v76alk[G[620535]] = Laya['Stage'][G[620580]], v76alk[G[620327]] = nsm_z, v76alk['height'] = $rse) : (v76alk[G[620535]] = Laya['Stage'][G[620536]], v76alk[G[620327]] = 0x348, v76alk['height'] = Math[G[620281]]($rse / (nsm_z / 0x348)) + 0x1 & 0x7ffffffe), this['F$iJ']();
  }, q3e8l[G[620338]]['gG08'] = function (l86q37, r3q) {
    function vka4f5() {
      u90w[G[620581]] = null, u90w[G[620582]] = null;
    }var u90w,
        fa4kv = l86q37;(u90w = new abnzti[G[620423]]['Image']())[G[620581]] = function () {
      vka4f5(), r3q(fa4kv, 0xc8, u90w);
    }, u90w[G[620582]] = function () {
      console[G[620116]]('[warn] WX loadImage onerror:', fa4kv), q3e8l[G[620028]]['F$_J'] += fa4kv + '|', vka4f5(), r3q(fa4kv, 0x194, null);
    }, u90w[G[620583]] = fa4kv, -0x1 == q3e8l[G[620028]]['gG860'][G[620087]](fa4kv) && -0x1 == q3e8l[G[620028]]['m_loadingRes'][G[620087]](fa4kv) || Laya[G[620428]][G[620584]](q3e8l[G[620028]], fa4kv);
  }, q3e8l[G[620338]]['F$cJ'] = function (l6k7v, fd14ou) {
    return -0x1 != l6k7v[G[620087]](fd14ou, l6k7v['length'] - fd14ou['length']);
  }, q3e8l;
}();!function (_q3r$) {
  var du4of, inzbx;du4of = _q3r$['F$V'] || (_q3r$['F$V'] = {}), inzbx = function (yhji) {
    function fa4vk5() {
      var u0p1 = yhji[G[620341]](this) || this;return u0p1['F$uJ'] = G[620585], u0p1['F$xJ'] = G[620586], u0p1[G[620327]] = 0x112, u0p1['height'] = 0x3b, u0p1['F$kJ'] = new Laya['Image'](), u0p1[G[620429]](u0p1['F$kJ']), u0p1['F$XJ'] = new Laya[G[620348]](), u0p1['F$XJ'][G[620461]] = 0x1e, u0p1['F$XJ'][G[620449]] = u0p1['F$xJ'], u0p1[G[620429]](u0p1['F$XJ']), u0p1['F$XJ'][G[620414]] = 0x0, u0p1['F$XJ'][G[620415]] = 0x0, u0p1;
    }return abmns(fa4vk5, yhji), fa4vk5[G[620338]][G[620413]] = function () {
      yhji[G[620338]][G[620413]][G[620341]](this), this['F$l'] = abnzti[G[620423]]['g08'], this['F$l']['loadingType'], this[G[620416]]();
    }, Object[G[620442]](fa4vk5[G[620338]], G[620491], { 'set': function (ad4fk5) {
        ad4fk5 && this[G[620587]](ad4fk5);
      }, 'enumerable': !0x0, 'configurable': !0x0 }), fa4vk5[G[620338]][G[620587]] = function (q$_8) {
      this['F$SJ'] = q$_8[0x0], this['F$fJ'] = q$_8[0x1], this['F$XJ'][G[620275]] = this['F$SJ'][G[620504]], this['F$XJ'][G[620449]] = this['F$fJ'] ? this['F$uJ'] : this['F$xJ'], this['F$kJ'][G[620432]] = this['F$fJ'] ? 'z888z888lgrz888z888/z888z88825b.png' : 'z888z888lgrz888z888/z888z88824b.png';
    }, fa4vk5[G[620338]][G[620422]] = function (m_zs$r) {
      void 0x0 === m_zs$r && (m_zs$r = !0x0), this[G[620420]](), yhji[G[620338]][G[620422]][G[620341]](this, m_zs$r);
    }, fa4vk5[G[620338]][G[620416]] = function () {}, fa4vk5[G[620338]][G[620420]] = function () {}, fa4vk5;
  }(Laya[G[620340]]), du4of[G[620475]] = inzbx;
}(modules || (modules = {})), function (rs$m_z) {
  var xnibtz, a4k5fd;xnibtz = rs$m_z['F$V'] || (rs$m_z['F$V'] = {}), a4k5fd = function (nbitxy) {
    function v78al6() {
      var vkal76 = nbitxy[G[620341]](this) || this;return vkal76['F$uJ'] = G[620585], vkal76['F$xJ'] = G[620586], vkal76[G[620327]] = 0x112, vkal76['height'] = 0x3b, vkal76['F$kJ'] = new Laya['Image'](), vkal76[G[620429]](vkal76['F$kJ']), vkal76['F$XJ'] = new Laya[G[620348]](), vkal76['F$XJ'][G[620461]] = 0x1e, vkal76['F$XJ'][G[620449]] = vkal76['F$xJ'], vkal76[G[620429]](vkal76['F$XJ']), vkal76['F$XJ'][G[620414]] = 0x0, vkal76['F$XJ'][G[620415]] = 0x0, vkal76;
    }return abmns(v78al6, nbitxy), v78al6[G[620338]][G[620413]] = function () {
      nbitxy[G[620338]][G[620413]][G[620341]](this), this['F$l'] = abnzti[G[620423]]['g08'], this['F$l']['loadingType'], this[G[620416]]();
    }, Object[G[620442]](v78al6[G[620338]], G[620491], { 'set': function (w10udo) {
        w10udo && this[G[620587]](w10udo);
      }, 'enumerable': !0x0, 'configurable': !0x0 }), v78al6[G[620338]][G[620587]] = function (q8e$_) {
      this['F$SJ'] = q8e$_[0x0], this['F$fJ'] = q8e$_[0x1], this['F$XJ'][G[620275]] = this['F$SJ'][G[620504]], this['F$XJ'][G[620449]] = this['F$fJ'] ? this['F$uJ'] : this['F$xJ'], this['F$kJ'][G[620432]] = this['F$fJ'] ? 'z888z888lgrz888z888/z888z88825b.png' : 'z888z888lgrz888z888/z888z88824b.png';
    }, v78al6[G[620338]][G[620422]] = function (htyxib) {
      void 0x0 === htyxib && (htyxib = !0x0), this[G[620420]](), nbitxy[G[620338]][G[620422]][G[620341]](this, htyxib);
    }, v78al6[G[620338]][G[620416]] = function () {}, v78al6[G[620338]][G[620420]] = function () {}, v78al6;
  }(Laya[G[620340]]), xnibtz[G[620477]] = a4k5fd;
}(modules || (modules = {})), function (k4od5f) {
  var mztbn, _$emsr;mztbn = k4od5f['F$V'] || (k4od5f['F$V'] = {}), _$emsr = function (rsnzbm) {
    function l87v3() {
      var gp01w = rsnzbm[G[620341]](this) || this;return gp01w[G[620327]] = 0xc0, gp01w['height'] = 0x46, gp01w['F$kJ'] = new Laya['Image'](), gp01w[G[620429]](gp01w['F$kJ']), gp01w['F$XJ'] = new Laya[G[620348]](), gp01w['F$XJ'][G[620461]] = 0x1e, gp01w['F$XJ'][G[620449]] = gp01w['F$I'], gp01w[G[620429]](gp01w['F$XJ']), gp01w['F$XJ'][G[620414]] = 0x0, gp01w['F$XJ'][G[620415]] = 0x0, gp01w;
    }return abmns(l87v3, rsnzbm), l87v3[G[620338]][G[620413]] = function () {
      rsnzbm[G[620338]][G[620413]][G[620341]](this), this['F$l'] = abnzti[G[620423]]['g08'];var y2hc = this['F$l']['loadingType'];this['F$I'] = 0x1 == y2hc ? G[620586] : 0x2 == y2hc ? G[620586] : 0x3 == y2hc ? G[620588] : G[620586], this[G[620416]]();
    }, Object[G[620442]](l87v3[G[620338]], G[620491], { 'set': function (xzit) {
        xzit && this[G[620587]](xzit);
      }, 'enumerable': !0x0, 'configurable': !0x0 }), l87v3[G[620338]][G[620587]] = function (f5kdo4) {
      this['F$SJ'] = f5kdo4, this['F$XJ'][G[620275]] = f5kdo4[G[620555]], this['F$kJ'][G[620432]] = f5kdo4[G[620512]] ? 'z888z888lgrz888z888/z888z88814b.png' : 'z888z888lgrz888z888/z888z88815b.png';
    }, l87v3[G[620338]][G[620422]] = function (ytbxih) {
      void 0x0 === ytbxih && (ytbxih = !0x0), this[G[620420]](), rsnzbm[G[620338]][G[620422]][G[620341]](this, ytbxih);
    }, l87v3[G[620338]][G[620416]] = function () {
      this['on'](Laya[G[620418]][G[620499]], this, this[G[620589]]);
    }, l87v3[G[620338]][G[620420]] = function () {
      this[G[620421]](Laya[G[620418]][G[620499]], this, this[G[620589]]);
    }, l87v3[G[620338]][G[620589]] = function () {
      this['F$SJ'] && this['F$SJ'][G[620511]] && this['F$SJ'][G[620511]](this['F$SJ'][G[620513]]);
    }, l87v3;
  }(Laya[G[620340]]), mztbn[G[620471]] = _$emsr;
}(modules || (modules = {})), function ($mz_rs) {
  var hyixt, hy2jci;hyixt = $mz_rs['F$V'] || ($mz_rs['F$V'] = {}), hy2jci = function (d5k4of) {
    function k7la() {
      var ixntz = d5k4of[G[620341]](this) || this;return ixntz['F$kJ'] = new Laya['Image']('z888z888lgrz888z888/z888z88816b.png'), ixntz['F$XJ'] = new Laya[G[620348]](), ixntz['F$XJ'][G[620461]] = 0x1e, ixntz['F$XJ'][G[620449]] = ixntz['F$I'], ixntz[G[620429]](ixntz['F$kJ']), ixntz['F$WJ'] = new Laya['Image'](), ixntz[G[620429]](ixntz['F$WJ']), ixntz[G[620327]] = 0x166, ixntz['height'] = 0x46, ixntz[G[620429]](ixntz['F$XJ']), ixntz['F$WJ'][G[620415]] = 0x0, ixntz['F$WJ']['x'] = 0x12, ixntz['F$XJ']['x'] = 0x50, ixntz['F$XJ'][G[620415]] = 0x0, ixntz['F$kJ']['graphics'][G[620590]](0x0, 0x0, ixntz[G[620327]], ixntz['height'], G[620591]), ixntz;
    }return abmns(k7la, d5k4of), k7la[G[620338]][G[620413]] = function () {
      d5k4of[G[620338]][G[620413]][G[620341]](this), this['F$l'] = abnzti[G[620423]]['g08'];var uod = this['F$l']['loadingType'];this['F$I'] = 0x1 == uod ? G[620592] : 0x2 == uod ? G[620592] : 0x3 == uod ? G[620588] : G[620592], this[G[620416]]();
    }, Object[G[620442]](k7la[G[620338]], G[620491], { 'set': function (q3l$e8) {
        q3l$e8 && this[G[620587]](q3l$e8);
      }, 'enumerable': !0x0, 'configurable': !0x0 }), k7la[G[620338]][G[620587]] = function (f4akd5) {
      this['F$SJ'] = f4akd5, this['F$XJ'][G[620449]] = -0x1 === f4akd5[G[620226]] ? G[620508] : 0x0 === f4akd5[G[620226]] ? G[620509] : this['F$I'], this['F$XJ'][G[620275]] = -0x1 === f4akd5[G[620226]] ? f4akd5[G[620222]] + G[620506] : 0x0 === f4akd5[G[620226]] ? f4akd5[G[620222]] + G[620507] : f4akd5[G[620222]], this['F$WJ'][G[620432]] = this['getStatusSrc'](f4akd5[G[620226]]);
    }, k7la[G[620338]][G[620422]] = function (d54f) {
      void 0x0 === d54f && (d54f = !0x0), this[G[620420]](), d5k4of[G[620338]][G[620422]][G[620341]](this, d54f);
    }, k7la[G[620338]][G[620416]] = function () {
      this['on'](Laya[G[620418]][G[620499]], this, this[G[620589]]);
    }, k7la[G[620338]][G[620420]] = function () {
      this[G[620421]](Laya[G[620418]][G[620499]], this, this[G[620589]]);
    }, k7la[G[620338]][G[620589]] = function () {
      this['F$SJ'] && this['F$SJ'][G[620511]] && this['F$SJ'][G[620511]](this['F$SJ']);
    }, k7la[G[620338]]['getStatusSrc'] = function (u1w0do) {
      var g0pw1 = '';return 0x2 === u1w0do ? g0pw1 = 'z888z888lgrz888z888/z888z88818b.png' : 0x1 === u1w0do ? g0pw1 = 'z888z888lgrz888z888/z888z88819b.png' : -0x1 !== u1w0do && 0x0 !== u1w0do || (g0pw1 = 'z888z888lgrz888z888/z888z88820b.png'), g0pw1;
    }, k7la;
  }(Laya[G[620340]]), hyixt['SelectRightListItem'] = hy2jci;
}(modules || (modules = {})), window['ServerLoading'] = a_$r3q;