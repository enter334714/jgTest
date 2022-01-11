'use strict';

var G = wx.$G;
var ae$s_mr,
    ap091uw = this && this[G[620332]] || function () {
  var h2ci = Object[G[620333]] || { '__proto__': [] } instanceof Array && function (afv75, q6l378) {
    afv75[G[620334]] = q6l378;
  } || function (ofud4, lk67va) {
    for (var pw019u in lk67va) lk67va[G[620335]](pw019u) && (ofud4[pw019u] = lk67va[pw019u]);
  };return function (kfd54, zntmsb) {
    function ibhyt() {
      this[G[620336]] = kfd54;
    }h2ci(kfd54, zntmsb), kfd54[G[620337]] = null === zntmsb ? Object[G[620338]](zntmsb) : (ibhyt[G[620337]] = zntmsb[G[620337]], new ibhyt());
  };
}(),
    arsbz = laya['ui'][G[620339]],
    apw9u10 = laya['ui']['Dialog'];!function (wuo4d1) {
  var ixnb = function (_m$es) {
    function wo10u() {
      return _m$es[G[620340]](this) || this;
    }return ap091uw(wo10u, _m$es), wo10u[G[620337]][G[620341]] = function () {
      _m$es[G[620337]][G[620341]][G[620340]](this), this[G[620342]](wuo4d1['F$J'][G[620343]]);
    }, wo10u[G[620343]] = { 'type': G[620339], 'props': { 'width': 0x2d0, 'name': G[620344], 'height': 0x500 }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x2d0, 'var': 'bgImg', 'skin': 'z888z888lgrz888z888/z888z8882b.jpg', 'name': 'bg', 'height': 0x500, 'centerY': 0x0, 'centerX': 0x0 } }, { 'type': G[620345], 'props': { 'y': 0x0, 'width': 0x2d0, 'right': 0x0, 'height': 0x500 }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x2d0, 'var': 'topImg', 'top': -0x8b, 'skin': 'z888z888lgrz888z888/z888z8886b.jpg', 'height': 0x8b, 'centerX': 0x0, 'anchorY': 0x1 } }, { 'type': 'Image', 'props': { 'width': 0x2d0, 'var': 'btmImg', 'top': 0x500, 'skin': 'z888z888lgrz888z888/z888z8883b.jpg', 'height': 0x8b, 'centerX': 0x0 } }, { 'type': 'Image', 'props': { 'x': -0xdc, 'width': 0xdc, 'var': 'leftImg', 'skin': 'z888z888lgrz888z888/z888z8884b.jpg', 'left': -0xdc, 'height': 0x500, 'centerY': 0x0 } }, { 'type': 'Image', 'props': { 'width': 0xdc, 'var': 'rightImg', 'skin': 'z888z888lgrz888z888/z888z8885b.jpg', 'left': 0x2d0, 'height': 0x500, 'centerY': 0x0 } }] }] }, wo10u;
  }(arsbz);wuo4d1['F$J'] = ixnb;
}(ae$s_mr || (ae$s_mr = {})), function ($_msr) {
  var l7a86v = function (xt2hyi) {
    function d1uo() {
      return xt2hyi[G[620340]](this) || this;
    }return ap091uw(d1uo, xt2hyi), d1uo[G[620337]][G[620341]] = function () {
      xt2hyi[G[620337]][G[620341]][G[620340]](this), this[G[620342]]($_msr['F$y'][G[620343]]);
    }, d1uo[G[620343]] = { 'type': G[620339], 'props': { 'width': 0x2d0, 'name': 'P_LoadingView', 'height': 0x500 }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x2d0, 'var': 'bgImg', 'name': 'bg', 'height': 0x500, 'centerY': 0x0, 'centerX': 0x0 } }, { 'type': G[620345], 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x2d0, 'height': 0x500 }, 'child': [{ 'type': 'Image', 'props': { 'var': 'topImg', 'centerX': 0x0, 'bottom': 0x500, 'anchorY': 0x1 } }, { 'type': 'Image', 'props': { 'var': 'btmImg', 'top': 0x500, 'centerX': 0x0 } }, { 'type': 'Image', 'props': { 'var': 'leftImg', 'right': 0x2d0, 'pivotX': 0x1, 'centerY': 0x0 } }, { 'type': 'Image', 'props': { 'var': 'rightImg', 'left': 0x2d0, 'centerY': 0x0 } }] }, { 'type': 'Image', 'props': { 'var': 'copyRightImg', 'skin': 'z888z888lgrz888z888/z888z8881b.png', 'centerX': 0x0, 'bottom': 0xa } }, { 'type': G[620345], 'props': { 'y': 0x3c3, 'x': 0x0, 'width': 0x2d0, 'var': G[620346], 'name': G[620346], 'height': 0x82 }, 'child': [{ 'type': 'Image', 'props': { 'y': 0x2e, 'x': 0x3e, 'width': 0x254, 'var': 'loadingBarBg', 'skin': 'z888z888dz888/z888z88813a.png', 'height': 0x1b, 'centerX': 0x0 } }, { 'type': 'Image', 'props': { 'y': 0x31, 'x': 0x40, 'width': 0x24e, 'var': 'loadingBar', 'skin': 'z888z888dz888/z888z88814a.png', 'height': 0x15 } }, { 'type': 'Image', 'props': { 'y': 0x37, 'x': 0x1fb, 'width': 0xd0, 'var': 'loadingImg1', 'skin': 'z888z888dz888/z888z88816a.png', 'height': 0xb } }, { 'type': 'Image', 'props': { 'y': 0x6, 'x': 0x274, 'width': 0x27, 'var': 'loadingImg2', 'skin': 'z888z888dz888/z888z88817a.png', 'height': 0x74 } }, { 'type': G[620347], 'props': { 'y': 0x30, 'x': 0x125, 'width': 0x86, 'var': 'percentageTips', 'valign': G[620348], 'text': G[620349], 'strokeColor': G[620350], 'stroke': 0x3, 'height': 0x18, 'fontSize': 0x18, 'color': G[620351], 'centerX': 0x0, 'bold': !0x1, 'align': G[620352] } }] }, { 'type': G[620345], 'props': { 'y': 0x429, 'x': 0x0, 'width': 0x2d0, 'var': G[620353], 'name': G[620353], 'height': 0x11 }, 'child': [{ 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x133, 'var': G[620354], 'skin': 'z888z888dz888/z888z88820a.png', 'centerX': -0x2d } }, { 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x151, 'var': G[620355], 'skin': 'z888z888dz888/z888z88819a.png', 'centerX': -0xf } }, { 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x16f, 'var': G[620356], 'skin': 'z888z888dz888/z888z88818a.png', 'centerX': 0xf } }, { 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x18d, 'var': G[620357], 'skin': 'z888z888dz888/z888z88818a.png', 'centerX': 0x2d } }] }, { 'type': G[620358], 'props': { 'y': 0x316, 'x': 0x37, 'visible': !0x1, 'var': 'getTipsBtn', 'stateNum': 0x1, 'skin': 'z888z888dz888/z888z8881a.png', 'name': 'getTipsBtn', 'labelSize': 0x1e, 'labelFont': G[620359], 'labelColors': G[620360] }, 'child': [{ 'type': G[620347], 'props': { 'y': 0x9b, 'x': 0x92, 'width': 0x143, 'var': G[620361], 'text': G[620362], 'name': G[620361], 'height': 0x1e, 'fontSize': 0x1e, 'color': G[620363], 'align': G[620352] } }] }, { 'type': G[620347], 'props': { 'y': 0x453, 'width': 0x1f4, 'var': 'loadingTips', 'valign': G[620348], 'text': G[620364], 'height': 0x1a, 'fontSize': 0x1a, 'color': G[620365], 'centerX': 0x0, 'bold': !0x1, 'align': G[620352] } }, { 'type': G[620347], 'props': { 'y': 0xa, 'x': 0xa, 'width': 0x156, 'var': G[620366], 'valign': G[620348], 'top': 0x14, 'text': G[620367], 'strokeColor': G[620368], 'stroke': 0x2, 'right': 0x14, 'height': 0x20, 'fontSize': 0x18, 'color': G[620369], 'bold': !0x1, 'align': 'right' } }] }, d1uo;
  }(arsbz);$_msr['F$y'] = l7a86v;
}(ae$s_mr || (ae$s_mr = {})), function (ixbth) {
  var _38e$q = function (rzmbn) {
    function da4kf() {
      return rzmbn[G[620340]](this) || this;
    }return ap091uw(da4kf, rzmbn), da4kf[G[620337]][G[620341]] = function () {
      arsbz['regComponent'](G[620370], laya[G[620371]][G[620372]][G[620370]]), arsbz['regComponent'](G[620373], laya[G[620374]][G[620373]]), rzmbn[G[620337]][G[620341]][G[620340]](this), this[G[620342]](ixbth['F$T'][G[620343]]);
    }, da4kf[G[620343]] = { 'type': G[620339], 'props': { 'width': 0x2d0, 'name': G[620375], 'height': 0x500 }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x2d0, 'var': 'bgImg', 'skin': 'z888z888lgrz888z888/z888z8882b.jpg', 'name': 'bg', 'height': 0x500, 'centerY': 0x0, 'centerX': 0x0 } }, { 'type': G[620345], 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x2d0, 'height': 0x500 }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x2d0, 'var': 'topImg', 'skin': 'z888z888lgrz888z888/z888z8886b.jpg', 'bottom': 0x4ff } }, { 'type': 'Image', 'props': { 'width': 0x2d0, 'var': 'btmImg', 'top': 0x4ff, 'skin': 'z888z888lgrz888z888/z888z8883b.jpg' } }, { 'type': 'Image', 'props': { 'var': 'leftImg', 'skin': 'z888z888lgrz888z888/z888z8884b.jpg', 'right': 0x2cf, 'height': 0x500 } }, { 'type': 'Image', 'props': { 'var': 'rightImg', 'skin': 'z888z888lgrz888z888/z888z8885b.jpg', 'left': 0x2cf, 'height': 0x500 } }] }, { 'type': 'Image', 'props': { 'y': 0x34d, 'var': G[620376], 'skin': 'z888z888lgrz888z888/z888z88821b.png', 'centerX': 0x0 } }, { 'type': 'Image', 'props': { 'y': 0x44e, 'var': 'imgCheatTip', 'skin': 'z888z888lgrz888z888/z888z88827b.png', 'name': 'imgCheatTip', 'centerX': 0x0 } }, { 'type': 'Image', 'props': { 'y': 0x3a2, 'x': 0xa2, 'var': 'hotImage', 'skin': 'z888z888lgrz888z888/z888z88818b.png' } }, { 'type': 'Image', 'props': { 'var': 'copyRightImg', 'skin': 'z888z888lgrz888z888/z888z8881b.png', 'centerX': 0x0, 'bottom': 0x1e } }, { 'type': 'Image', 'props': { 'y': 0x3f7, 'var': G[620377], 'stateNum': 0x1, 'skin': 'z888z888lgrz888z888/z888z88812b.png', 'name': G[620377], 'centerX': 0x0 } }, { 'type': 'Image', 'props': { 'x': 0xc4, 'visible': !0x1, 'var': 'privacyToggle', 'skin': 'z888z888lgrz888z888/z888z88829b.png', 'bottom': 0x4 } }, { 'type': G[620347], 'props': { 'y': 0x280, 'x': 0x0, 'width': 0x2d0, 'var': G[620378], 'valign': G[620348], 'text': G[620379], 'strokeColor': G[620380], 'stroke': 0x2, 'height': 0x20, 'fontSize': 0x20, 'color': G[620381], 'bold': !0x1, 'align': G[620352] } }, { 'type': G[620347], 'props': { 'y': 0x3a4, 'x': 0x209, 'var': G[620382], 'valign': G[620348], 'text': G[620383], 'height': 0x20, 'fontSize': 0x1e, 'color': G[620384], 'bold': !0x1, 'align': G[620352] } }, { 'type': G[620347], 'props': { 'y': 0x3a4, 'width': 0x156, 'var': G[620385], 'valign': G[620348], 'text': G[620386], 'height': 0x20, 'fontSize': 0x1e, 'color': G[620384], 'centerX': 0x0, 'bold': !0x1, 'align': G[620352] } }, { 'type': G[620347], 'props': { 'width': 0x156, 'var': G[620366], 'valign': G[620348], 'top': 0x14, 'text': G[620367], 'strokeColor': G[620368], 'stroke': 0x2, 'right': 0x14, 'height': 0x20, 'fontSize': 0x18, 'color': G[620369], 'bold': !0x1, 'align': 'right' } }, { 'type': G[620370], 'props': { 'y': 0x4e7, 'x': 0x100, 'visible': !0x1, 'var': G[620387], 'height': 0x10 } }, { 'type': 'Image', 'props': { 'y': 0x7f, 'x': 593.5, 'var': G[620388], 'skin': 'z888z888lgrz888z888/z888z88811b.png' } }, { 'type': 'Image', 'props': { 'y': 0x101, 'x': 0x252, 'visible': !0x1, 'var': G[620389], 'skin': 'z888z888lgrz888z888/z888z88813b.png', 'name': G[620389] } }, { 'type': 'Image', 'props': { 'y': 0x47, 'x': -0x2, 'visible': !0x1, 'var': 'noticeBg', 'skin': 'z888z888lgrz888z888/z888z8888b.png', 'centerY': 0x0, 'centerX': 0x0 }, 'child': [{ 'type': 'Image', 'props': { 'y': 36.5, 'x': 0x268, 'var': G[620390], 'skin': 'z888z888lgrz888z888/z888z88810b.png' } }, { 'type': G[620347], 'props': { 'y': 0x48, 'x': 0xd8, 'width': 0xea, 'var': G[620391], 'valign': G[620348], 'text': G[620392], 'height': 0x23, 'fontSize': 0x1e, 'color': G[620380], 'bold': !0x1, 'align': G[620352] } }, { 'type': G[620373], 'props': { 'y': 0x8e, 'x': 0x3d, 'wordWrap': !0x0, 'width': 0x221, 'var': G[620393], 'valign': G[620082], 'overflow': G[620394], 'mouseEnabled': !0x0, 'leading': 0x4, 'height': 0x366, 'fontSize': 0x1a, 'color': G[620395] } }] }, { 'type': 'Image', 'props': { 'y': 0x71, 'x': 0x21, 'visible': !0x1, 'var': 'mNoticeBg', 'skin': 'z888z888lgrz888z888/z888z88826b.png', 'centerY': 0x0, 'centerX': 0x0 }, 'child': [{ 'type': 'Image', 'props': { 'y': 36.5, 'x': 0x268, 'var': G[620396], 'skin': 'z888z888lgrz888z888/z888z88810b.png' } }, { 'type': G[620358], 'props': { 'y': 0x388, 'x': 0xbe, 'var': G[620397], 'stateNum': 0x1, 'skin': 'z888z888lgrz888z888/z888z88825b.png', 'labelSize': 0x1e, 'labelColors': G[620398], 'label': G[620399] } }, { 'type': G[620345], 'props': { 'y': 0x388, 'x': 0x22, 'width': 0x254, 'var': G[620400], 'height': 0x3b } }, { 'type': G[620347], 'props': { 'y': 0x48, 'x': 0xd8, 'width': 0xea, 'var': G[620401], 'valign': G[620348], 'text': G[620392], 'height': 0x23, 'fontSize': 0x1e, 'color': G[620380], 'bold': !0x1, 'align': G[620352] } }, { 'type': G[620402], 'props': { 'y': 0x8e, 'x': 0x3d, 'width': 0x221, 'var': G[620403], 'height': 0x2dd }, 'child': [{ 'type': G[620370], 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x221, 'var': G[620404], 'height': 0x2dd } }] }] }, { 'type': 'Image', 'props': { 'visible': !0x1, 'var': 'privacyBg', 'skin': 'z888z888lgrz888z888/z888z88826b.png', 'name': 'privacyBg', 'centerY': 0x0, 'centerX': 0x0 }, 'child': [{ 'type': 'Image', 'props': { 'y': 36.5, 'x': 0x268, 'var': G[620405], 'skin': 'z888z888lgrz888z888/z888z88810b.png' } }, { 'type': G[620358], 'props': { 'y': 0x388, 'x': 0xbe, 'var': G[620406], 'stateNum': 0x1, 'skin': 'z888z888lgrz888z888/z888z88825b.png', 'labelSize': 0x1e, 'labelColors': G[620398], 'label': G[620399] } }, { 'type': G[620345], 'props': { 'y': 0x388, 'x': 0x22, 'width': 0x254, 'var': G[620407], 'height': 0x3b } }, { 'type': G[620347], 'props': { 'y': 0x48, 'x': 0xd8, 'width': 0xea, 'var': G[620408], 'valign': G[620348], 'text': G[620392], 'height': 0x23, 'fontSize': 0x1e, 'color': G[620380], 'bold': !0x1, 'align': G[620352] } }, { 'type': G[620402], 'props': { 'y': 0x8e, 'x': 0x3d, 'width': 0x221, 'var': G[620409], 'height': 0x2dd }, 'child': [{ 'type': G[620370], 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x221, 'var': G[620410], 'height': 0x2dd } }] }] }, { 'type': 'Image', 'props': { 'visible': !0x1, 'var': 'listBg', 'skin': 'z888z888lgrz888z888/z888z8889b.png', 'centerY': 0x0, 'centerX': 0x0 }, 'child': [{ 'type': G[620345], 'props': { 'y': 0x75, 'x': 0x3d, 'width': 0xc8, 'var': G[620411], 'height': 0x389 } }, { 'type': G[620345], 'props': { 'y': 0x75, 'x': 0x125, 'width': 0x166, 'var': 'rightListBox', 'height': 0x389 } }, { 'type': 'Image', 'props': { 'y': 0xd, 'x': 0x282, 'var': 'closeBg', 'skin': 'z888z888lgrz888z888/z888z88817b.png' } }] }] }, da4kf;
  }(arsbz);ixbth['F$T'] = _38e$q;
}(ae$s_mr || (ae$s_mr = {})), function (iytbxh) {
  var ud1wo0, tbxmnz;ud1wo0 = iytbxh['F$V'] || (iytbxh['F$V'] = {}), tbxmnz = function (tyxinb) {
    function mzrbn() {
      return tyxinb[G[620340]](this) || this;
    }return ap091uw(mzrbn, tyxinb), mzrbn[G[620337]][G[620412]] = function () {
      tyxinb[G[620337]][G[620412]][G[620340]](this), this[G[620413]] = 0x0, this[G[620414]] = 0x0, this[G[620415]](), this[G[620416]]();
    }, mzrbn[G[620337]][G[620415]] = function () {
      this['on'](Laya[G[620417]][G[620418]], this, this['F$Z']);
    }, mzrbn[G[620337]][G[620419]] = function () {
      this[G[620420]](Laya[G[620417]][G[620418]], this, this['F$Z']);
    }, mzrbn[G[620337]][G[620416]] = function () {
      this['F$m'] = Date[G[620115]](), ae$_msr[G[620028]]['gG860A'](), ae$_msr[G[620028]]['preloadLoading']();
    }, mzrbn[G[620337]][G[620421]] = function (d1fo4) {
      void 0x0 === d1fo4 && (d1fo4 = !0x0), this[G[620419]](), tyxinb[G[620337]][G[620421]][G[620340]](this, d1fo4);
    }, mzrbn[G[620337]]['F$Z'] = function () {
      0x2710 < Date[G[620115]]() - this['F$m'] && (this['F$m'] -= 0x3e8, awpg901[G[620422]]['g08'][G[620018]][G[620019]] && (ae$_msr[G[620028]][G[620423]](), ae$_msr[G[620028]][G[620424]]()));
    }, mzrbn;
  }(ae$s_mr['F$J']), ud1wo0[G[620425]] = tbxmnz;
}(modules || (modules = {})), function (htxi) {
  var ersq$_, ql36, rsz_n, $8_3, nxtbmz, nsbrmz;ersq$_ = htxi['F$R'] || (htxi['F$R'] = {}), ql36 = Laya[G[620417]], rsz_n = Laya['Image'], $8_3 = Laya[G[620426]], nxtbmz = Laya[G[620427]], nsbrmz = function (nztsm) {
    function iht2x() {
      var v7a6k = nztsm[G[620340]](this) || this;return v7a6k['F$n'] = new rsz_n(), v7a6k[G[620428]](v7a6k['F$n']), v7a6k['F$K'] = null, v7a6k['F$A'] = [], v7a6k['F$$'] = !0x1, v7a6k['F$e'] = 0x0, v7a6k['F$M'] = !0x0, v7a6k['F$G'] = 0x6, v7a6k['F$B'] = !0x1, v7a6k['on'](ql36[G[620429]], v7a6k, v7a6k['F$o']), v7a6k['on'](ql36[G[620430]], v7a6k, v7a6k['F$s']), v7a6k;
    }return ap091uw(iht2x, nztsm), iht2x[G[620338]] = function (ch2ijy, p0w1u, em_$, pg91w, emr$, bztmsn, va765k) {
      void 0x0 === pg91w && (pg91w = 0x0), void 0x0 === emr$ && (emr$ = 0x6), void 0x0 === bztmsn && (bztmsn = !0x0), void 0x0 === va765k && (va765k = !0x1);var _qe$s = new iht2x();return _qe$s[G[620431]](p0w1u, em_$, pg91w), _qe$s[G[620432]] = emr$, _qe$s[G[620433]] = bztmsn, _qe$s[G[620434]] = va765k, ch2ijy && ch2ijy[G[620428]](_qe$s), _qe$s;
    }, iht2x[G[620435]] = function (lv8367) {
      lv8367 && (lv8367[G[620436]] = !0x0, lv8367[G[620435]]());
    }, iht2x[G[620437]] = function (ybh) {
      ybh && (ybh[G[620436]] = !0x1, ybh[G[620437]]());
    }, iht2x[G[620337]][G[620421]] = function (zmrs$) {
      Laya[G[620438]][G[620439]](this, this['F$E']), this[G[620420]](ql36[G[620429]], this, this['F$o']), this[G[620420]](ql36[G[620430]], this, this['F$s']), nztsm[G[620337]][G[620421]][G[620340]](this, zmrs$);
    }, iht2x[G[620337]]['F$o'] = function () {}, iht2x[G[620337]]['F$s'] = function () {}, iht2x[G[620337]][G[620431]] = function (bsntz, e_3rq$, jyhic2) {
      if (this['F$K'] != bsntz) {
        this['F$K'] = bsntz, this['F$A'] = [];for (var elq836 = 0x0, e_srq$ = jyhic2; e_srq$ <= e_3rq$; e_srq$++) this['F$A'][elq836++] = bsntz + '/' + e_srq$ + '.png';var rz_m$s = nxtbmz['getRes'](this['F$A'][0x0]);rz_m$s && (this[G[620326]] = rz_m$s[G[620440]], this['height'] = rz_m$s['sourceHeight']), this['F$E']();
      }
    }, Object[G[620441]](iht2x[G[620337]], G[620434], { 'get': function () {
        return this['F$B'];
      }, 'set': function (q3$le) {
        this['F$B'] = q3$le;
      }, 'enumerable': !0x0, 'configurable': !0x0 }), Object[G[620441]](iht2x[G[620337]], G[620432], { 'set': function (uwop) {
        this['F$G'] != uwop && (this['F$G'] = uwop, this['F$$'] && (Laya[G[620438]][G[620439]](this, this['F$E']), Laya[G[620438]][G[620433]](this['F$G'] * (0x3e8 / 0x3c), this, this['F$E'])));
      }, 'enumerable': !0x0, 'configurable': !0x0 }), Object[G[620441]](iht2x[G[620337]], G[620433], { 'set': function (_$r3eq) {
        this['F$M'] = _$r3eq;
      }, 'enumerable': !0x0, 'configurable': !0x0 }), iht2x[G[620337]][G[620435]] = function () {
      this['F$$'] && this[G[620437]](), this['F$$'] = !0x0, this['F$e'] = 0x0, Laya[G[620438]][G[620433]](this['F$G'] * (0x3e8 / 0x3c), this, this['F$E']), this['F$E']();
    }, iht2x[G[620337]][G[620437]] = function () {
      this['F$$'] = !0x1, this['F$e'] = 0x0, this['F$E'](), Laya[G[620438]][G[620439]](this, this['F$E']);
    }, iht2x[G[620337]][G[620442]] = function () {
      this['F$$'] && (this['F$$'] = !0x1, Laya[G[620438]][G[620439]](this, this['F$E']));
    }, iht2x[G[620337]][G[620443]] = function () {
      this['F$$'] || (this['F$$'] = !0x0, Laya[G[620438]][G[620433]](this['F$G'] * (0x3e8 / 0x3c), this, this['F$E']), this['F$E']());
    }, Object[G[620441]](iht2x[G[620337]], G[620444], { 'get': function () {
        return this['F$$'];
      }, 'enumerable': !0x0, 'configurable': !0x0 }), iht2x[G[620337]]['F$E'] = function () {
      this['F$A'] && 0x0 != this['F$A']['length'] && (this['F$n'][G[620431]] = this['F$A'][this['F$e']], this['F$$'] && (this['F$e']++, this['F$e'] == this['F$A']['length'] && (this['F$M'] ? this['F$e'] = 0x0 : (Laya[G[620438]][G[620439]](this, this['F$E']), this['F$$'] = !0x1, this['F$B'] && (this[G[620436]] = !0x1), this[G[620445]](ql36[G[620446]])))));
    }, iht2x;
  }($8_3), ersq$_[G[620447]] = nsbrmz;
}(modules || (modules = {})), function (dfka4) {
  var ql$8e3, o54fkd, yih2t;ql$8e3 = dfka4['F$V'] || (dfka4['F$V'] = {}), o54fkd = dfka4['F$R'][G[620447]], yih2t = function (xm) {
    function mzrns(bintyx) {
      void 0x0 === bintyx && (bintyx = 0x0);var e8q$l = xm[G[620340]](this) || this;return e8q$l['F$O'] = { 'bgImgSkin': 'z888z888dz888/z888z8883a.jpg', 'topImgSkin': 'z888z888dz888/z888z88810a.jpg', 'btmImgSkin': 'z888z888dz888/z888z8884a.jpg', 'leftImgSkin': 'z888z888dz888/z888z8886a.jpg', 'rightImgSkin': 'z888z888dz888/z888z8888a.jpg', 'loadingBarBgSkin': 'z888z888dz888/z888z88813a.png', 'copyRightImgBottom': 0xa, 'processBox1Y': 0x3c3, 'processBox2Y': 0x429, 'loadingTipsSize': 0x1a, 'getTipsBtnVisible': !0x1 }, e8q$l['F$L'] = { 'bgImgSkin': 'z888z888dz888/z888z88812a.jpg', 'topImgSkin': 'z888z888dz888/z888z88811a.jpg', 'btmImgSkin': 'z888z888dz888/z888z8885a.jpg', 'leftImgSkin': 'z888z888dz888/z888z8887a.jpg', 'rightImgSkin': 'z888z888dz888/z888z8889a.jpg', 'loadingBarBgSkin': 'z888z888dz888/z888z88815a.png', 'copyRightImgBottom': 0xa, 'processBox1Y': 0x3c3, 'processBox2Y': 0x429, 'loadingTipsSize': 0x1a, 'getTipsBtnVisible': !0x1 }, e8q$l['F$H'] = 0x0, e8q$l['F$P'](0x1 == bintyx ? e8q$l['F$L'] : e8q$l['F$O']), e8q$l;
    }return ap091uw(mzrns, xm), mzrns[G[620337]][G[620412]] = function () {
      if (xm[G[620337]][G[620412]][G[620340]](this), ae$_msr[G[620028]]['preloadLoading'](), this['F$l'] = awpg901[G[620422]]['g08'], this[G[620413]] = 0x0, this[G[620414]] = 0x0, this['F$l']) {
        var rzsbmn = this['F$l']['loadingType'];this['loadingTips'][G[620448]] = 0x1 == rzsbmn ? G[620365] : 0x2 == rzsbmn ? G[620449] : 0x65 == rzsbmn ? G[620449] : G[620365];
      }this['F$a'] = [this[G[620354]], this[G[620355]], this[G[620356]], this[G[620357]]], awpg901[G[620422]][G[620450]] = this, gA086(), ae$_msr[G[620028]][G[620161]](), ae$_msr[G[620028]][G[620162]](), this[G[620416]]();
    }, mzrns[G[620337]]['gA08'] = function (z_sm) {
      var nxibz = this;if (-0x1 === z_sm) return nxibz['F$H'] = 0x0, Laya[G[620438]][G[620439]](this, this['gA08']), void Laya[G[620438]][G[620451]](0x1, this, this['gA08']);if (-0x2 !== z_sm) {
        nxibz['F$H'] < 0.9 ? nxibz['F$H'] += (0.15 * Math[G[620176]]() + 0.01) / (0x64 * Math[G[620176]]() + 0x32) : nxibz['F$H'] < 0x1 && (nxibz['F$H'] += 0.0001), 0.9999 < nxibz['F$H'] && (nxibz['F$H'] = 0.9999, Laya[G[620438]][G[620439]](this, this['gA08']), Laya[G[620438]][G[620452]](0xbb8, this, function () {
          0.9 < nxibz['F$H'] && gA08(-0x1);
        }));var daf54k = nxibz['F$H'],
            af57k = 0x24e * daf54k;nxibz['F$H'] = nxibz['F$H'] > daf54k ? nxibz['F$H'] : daf54k, nxibz['loadingBar'][G[620326]] = af57k;var qle8$3 = nxibz['loadingBar']['x'] + af57k;nxibz['loadingImg2']['x'] = qle8$3 - 0xf, 0x16c <= qle8$3 ? (nxibz['loadingImg1'][G[620436]] = !0x0, nxibz['loadingImg1']['x'] = qle8$3 - 0xca) : nxibz['loadingImg1'][G[620436]] = !0x1, nxibz['percentageTips'][G[620274]] = (0x64 * daf54k >> 0x0) + '%', nxibz['F$H'] < 0.9999 && Laya[G[620438]][G[620451]](0x1, this, this['gA08']);
      } else Laya[G[620438]][G[620439]](this, this['gA08']);
    }, mzrns[G[620337]]['gA80'] = function (bhix, ihjy, ns_rzm) {
      0x1 < bhix && (bhix = 0x1);var yhxci = 0x24e * bhix;this['F$H'] = this['F$H'] > bhix ? this['F$H'] : bhix, this['loadingBar'][G[620326]] = yhxci;var $q = this['loadingBar']['x'] + yhxci;this['loadingImg2']['x'] = $q - 0xf, 0x16c <= $q ? (this['loadingImg1'][G[620436]] = !0x0, this['loadingImg1']['x'] = $q - 0xca) : this['loadingImg1'][G[620436]] = !0x1, this['percentageTips'][G[620274]] = (0x64 * bhix >> 0x0) + '%', this['loadingTips'][G[620274]] = ihjy;for (var l3eq$8 = ns_rzm - 0x1, _qs$r = 0x0; _qs$r < this['F$a']['length']; _qs$r++) this['F$a'][_qs$r][G[620431]] = _qs$r < l3eq$8 ? 'z888z888dz888/z888z88820a.png' : l3eq$8 === _qs$r ? 'z888z888dz888/z888z88819a.png' : 'z888z888dz888/z888z88818a.png';
    }, mzrns[G[620337]][G[620416]] = function () {
      this['gA80'](0.1, G[620453], 0x1), this['gA08'](-0x1), awpg901[G[620422]]['gA08'] = this['gA08'][G[620181]](this), awpg901[G[620422]]['gA80'] = this['gA80'][G[620181]](this), this[G[620366]][G[620274]] = G[620454] + this['F$l'][G[620016]] + G[620455] + this['F$l'][G[620127]], this[G[620315]]();
    }, mzrns[G[620337]][G[620456]] = function (fo4u1d) {
      this[G[620457]](), Laya[G[620438]][G[620439]](this, this['gA08']), Laya[G[620438]][G[620439]](this, this['F$q']), ae$_msr[G[620028]]['closeLoading'](), this['getTipsBtn'][G[620420]](Laya[G[620417]][G[620418]], this, this['F$r']);
    }, mzrns[G[620337]][G[620457]] = function () {
      awpg901[G[620422]]['gA08'] = function () {}, awpg901[G[620422]]['gA80'] = function () {};
    }, mzrns[G[620337]][G[620421]] = function (e3$rq) {
      void 0x0 === e3$rq && (e3$rq = !0x0), this[G[620457]](), xm[G[620337]][G[620421]][G[620340]](this, e3$rq);
    }, mzrns[G[620337]][G[620315]] = function () {
      this['F$l'][G[620315]] && 0x1 == this['F$l'][G[620315]] && (this['getTipsBtn'][G[620436]] = !0x0, this['getTipsBtn']['tag'] = !0x0, this['getTipsBtn'][G[620431]] = 'z888z888dz888/z888z8881a.png', this['getTipsBtn']['on'](Laya[G[620417]][G[620418]], this, this['F$r']), this['F$D'](), this['F$_'](!0x0));
    }, mzrns[G[620337]]['F$r'] = function () {
      this['getTipsBtn']['tag'] && (this['getTipsBtn']['tag'] = !0x1, this['getTipsBtn'][G[620431]] = 'z888z888dz888/z888z8882a.png', this['F$t'](), this['F$_'](!0x1));
    }, mzrns[G[620337]]['F$P'] = function (qs_) {
      this['bgImg'][G[620431]] = qs_['bgImgSkin'], this['topImg'][G[620431]] = qs_['topImgSkin'], this['btmImg'][G[620431]] = qs_['btmImgSkin'], this['leftImg'][G[620431]] = qs_['leftImgSkin'], this['rightImg'][G[620431]] = qs_['rightImgSkin'], this['copyRightImg'][G[620083]] = qs_['copyRightImgBottom'], this[G[620346]]['y'] = qs_[G[620458]], this[G[620353]]['y'] = qs_[G[620459]], this['loadingBarBg'][G[620431]] = qs_['loadingBarBgSkin'], this['loadingTips'][G[620460]] = qs_['loadingTipsSize'], this['getTipsBtn'][G[620436]] = this['F$l'][G[620315]] && 0x1 == this['F$l'][G[620315]], this['getTipsBtn'][G[620436]] ? this['F$D']() : this['F$t'](), this['F$_'](this['getTipsBtn'][G[620436]]);
    }, mzrns[G[620337]]['F$D'] = function () {
      this['F$v'] || (this['F$v'] = o54fkd[G[620338]](this['getTipsBtn'], G[620461], 0x4, 0x0, 0xc), this['F$v'][G[620462]](0xa1, 0x6a), this['F$v'][G[620463]](1.14, 1.15)), o54fkd[G[620435]](this['F$v']);
    }, mzrns[G[620337]]['F$t'] = function () {
      this['F$v'] && o54fkd[G[620437]](this['F$v']);
    }, mzrns[G[620337]]['F$_'] = function (z_rms) {
      Laya[G[620438]][G[620439]](this, this['F$q']), z_rms ? (this['F$Q'] = 0x9, this[G[620361]][G[620436]] = !0x0, this['F$q'](), Laya[G[620438]][G[620433]](0x3e8, this, this['F$q'])) : this[G[620361]][G[620436]] = !0x1;
    }, mzrns[G[620337]]['F$q'] = function () {
      0x0 < this['F$Q'] ? (this[G[620361]][G[620274]] = G[620464] + this['F$Q'] + 's)', this['F$Q']--) : (this[G[620361]][G[620274]] = '', Laya[G[620438]][G[620439]](this, this['F$q']), this['F$r']());
    }, mzrns;
  }(ae$s_mr['F$y']), ql$8e3['LoadingPanel'] = yih2t;
}(modules || (modules = {})), function (r$3_q) {
  var gw1p90, r_nmzs, v4f5ka, xi2hy;gw1p90 = r$3_q['F$V'] || (r$3_q['F$V'] = {}), r_nmzs = Laya[G[620465]], v4f5ka = Laya[G[620417]], xi2hy = function (w0d1) {
    function yx2hc() {
      var l7av = w0d1[G[620340]](this) || this;return l7av['F$i'] = 0x0, l7av['F$c'] = G[620466], l7av['F$u'] = 0x0, l7av['F$x'] = 0x0, l7av['F$k'] = G[620467], l7av;
    }return ap091uw(yx2hc, w0d1), yx2hc[G[620337]][G[620412]] = function () {
      w0d1[G[620337]][G[620412]][G[620340]](this), this[G[620413]] = 0x0, this[G[620414]] = 0x0, ae$_msr[G[620028]]['gG860A'](), this['F$l'] = awpg901[G[620422]]['g08'], this['F$X'] = new r_nmzs(), this['F$X'][G[620468]] = '', this['F$X'][G[620469]] = gw1p90[G[620470]], this['F$X'][G[620082]] = 0x5, this['F$X'][G[620471]] = 0x1, this['F$X'][G[620472]] = 0x5, this['F$X'][G[620326]] = this[G[620411]][G[620326]], this['F$X']['height'] = this[G[620411]]['height'] - 0x8, this[G[620411]][G[620428]](this['F$X']), this['F$S'] = new r_nmzs(), this['F$S'][G[620468]] = '', this['F$S'][G[620469]] = gw1p90['SelectRightListItem'], this['F$S'][G[620082]] = 0x5, this['F$S'][G[620471]] = 0x1, this['F$S'][G[620472]] = 0x5, this['F$S'][G[620326]] = this['rightListBox'][G[620326]], this['F$S']['height'] = this['rightListBox']['height'] - 0x8, this['rightListBox'][G[620428]](this['F$S']), this['F$f'] = new r_nmzs(), this['F$f'][G[620473]] = '', this['F$f'][G[620469]] = gw1p90[G[620474]], this['F$f'][G[620475]] = 0x1, this['F$f'][G[620326]] = this[G[620400]][G[620326]], this['F$f']['height'] = this[G[620400]]['height'], this[G[620400]][G[620428]](this['F$f']), this['F$W'] = new r_nmzs(), this['F$W'][G[620473]] = '', this['F$W'][G[620469]] = gw1p90[G[620476]], this['F$W'][G[620475]] = 0x1, this['F$W'][G[620326]] = this[G[620400]][G[620326]], this['F$W']['height'] = this[G[620400]]['height'], this[G[620407]][G[620428]](this['F$W']);var bytxin = this['F$l']['loadingType'];this['F$I'] = 0x1 == bytxin ? G[620384] : 0x2 == bytxin ? G[620384] : 0x3 == bytxin ? G[620384] : 0x65 == bytxin ? G[620384] : G[620477], this[G[620377]][G[620478]](0x1fa, 0x58), this['F$Y'] = [], this[G[620388]][G[620436]] = !0x1, this[G[620404]][G[620448]] = G[620395], this[G[620404]][G[620479]][G[620460]] = 0x1a, this[G[620404]][G[620479]]['lineHeight'] = 0x1c, this[G[620404]][G[620480]] = !0x1, this[G[620410]][G[620448]] = G[620395], this[G[620410]][G[620479]][G[620460]] = 0x1a, this[G[620410]][G[620479]]['lineHeight'] = 0x1c, this[G[620410]][G[620480]] = !0x1, this[G[620387]][G[620448]] = G[620380], this[G[620387]][G[620479]][G[620460]] = 0x12, this[G[620387]][G[620479]]['lineHeight'] = 0x12, this[G[620387]][G[620479]][G[620481]] = 0x2, this[G[620387]][G[620479]][G[620482]] = G[620449], this[G[620387]][G[620479]][G[620483]] = !0x1, awpg901[G[620422]][G[620288]] = this, gA086(), this[G[620415]](), this[G[620416]]();
    }, yx2hc[G[620337]][G[620421]] = function (o0puw) {
      void 0x0 === o0puw && (o0puw = !0x0), this[G[620419]](), this['F$U'](), this['F$d'](), this['F$C'](), this['F$X'] && (this['F$X'][G[620484]](), this['F$X'][G[620421]](), this['F$X'] = null), this['F$S'] && (this['F$S'][G[620484]](), this['F$S'][G[620421]](), this['F$S'] = null), this['F$f'] && (this['F$f'][G[620484]](), this['F$f'][G[620421]](), this['F$f'] = null), this['F$W'] && (this['F$W'][G[620484]](), this['F$W'][G[620421]](), this['F$W'] = null), Laya[G[620438]][G[620439]](this, this['F$F']), w0d1[G[620337]][G[620421]][G[620340]](this, o0puw);
    }, yx2hc[G[620337]][G[620415]] = function () {
      this['bgImg']['on'](Laya[G[620417]][G[620418]], this, this['F$b']), this[G[620377]]['on'](Laya[G[620417]][G[620418]], this, this['F$h']), this[G[620376]]['on'](Laya[G[620417]][G[620418]], this, this['F$p']), this[G[620376]]['on'](Laya[G[620417]][G[620418]], this, this['F$p']), this['closeBg']['on'](Laya[G[620417]][G[620418]], this, this['F$j']), this[G[620388]]['on'](Laya[G[620417]][G[620418]], this, this['F$g']), this[G[620390]]['on'](Laya[G[620417]][G[620418]], this, this['F$N']), this[G[620393]]['on'](Laya[G[620417]][G[620485]], this, this['F$w']), this[G[620396]]['on'](Laya[G[620417]][G[620418]], this, this['F$z']), this[G[620397]]['on'](Laya[G[620417]][G[620418]], this, this['F$z']), this[G[620403]]['on'](Laya[G[620417]][G[620485]], this, this['F$JJ']), this[G[620389]]['on'](Laya[G[620417]][G[620418]], this, this['F$yJ']), this[G[620405]]['on'](Laya[G[620417]][G[620418]], this, this['F$TJ']), this[G[620406]]['on'](Laya[G[620417]][G[620418]], this, this['F$TJ']), this[G[620409]]['on'](Laya[G[620417]][G[620485]], this, this['F$VJ']), this['privacyToggle']['on'](Laya[G[620417]][G[620418]], this, this['F$ZJ']), this[G[620387]]['on'](Laya[G[620417]][G[620486]], this, this['F$mJ']), this['F$f'][G[620487]] = !0x0, this['F$f'][G[620488]] = Laya[G[620489]][G[620338]](this, this['F$RJ'], null, !0x1), this['F$W'][G[620487]] = !0x0, this['F$W'][G[620488]] = Laya[G[620489]][G[620338]](this, this['F$nJ'], null, !0x1);
    }, yx2hc[G[620337]][G[620419]] = function () {
      this['bgImg'][G[620420]](Laya[G[620417]][G[620418]], this, this['F$b']), this[G[620377]][G[620420]](Laya[G[620417]][G[620418]], this, this['F$h']), this[G[620376]][G[620420]](Laya[G[620417]][G[620418]], this, this['F$p']), this[G[620376]][G[620420]](Laya[G[620417]][G[620418]], this, this['F$p']), this['closeBg'][G[620420]](Laya[G[620417]][G[620418]], this, this['F$j']), this[G[620388]][G[620420]](Laya[G[620417]][G[620418]], this, this['F$g']), this[G[620390]][G[620420]](Laya[G[620417]][G[620418]], this, this['F$N']), this[G[620393]][G[620420]](Laya[G[620417]][G[620485]], this, this['F$w']), this[G[620396]][G[620420]](Laya[G[620417]][G[620418]], this, this['F$z']), this[G[620397]][G[620420]](Laya[G[620417]][G[620418]], this, this['F$z']), this[G[620403]][G[620420]](Laya[G[620417]][G[620485]], this, this['F$JJ']), this[G[620389]][G[620420]](Laya[G[620417]][G[620418]], this, this['F$yJ']), this[G[620405]][G[620420]](Laya[G[620417]][G[620418]], this, this['F$TJ']), this[G[620406]][G[620420]](Laya[G[620417]][G[620418]], this, this['F$TJ']), this[G[620409]][G[620420]](Laya[G[620417]][G[620485]], this, this['F$VJ']), this['privacyToggle'][G[620420]](Laya[G[620417]][G[620418]], this, this['F$ZJ']), this[G[620387]][G[620420]](Laya[G[620417]][G[620486]], this, this['F$mJ']), this['F$f'][G[620487]] = !0x1, this['F$f'][G[620488]] = null, this['F$W'][G[620487]] = !0x1, this['F$W'][G[620488]] = null;
    }, yx2hc[G[620337]][G[620416]] = function () {
      var xiybth = this;this['F$m'] = Date[G[620115]](), this['F$KJ'] = this['F$l'][G[620018]][G[620019]], this['F$AJ'](this['F$l'][G[620018]]), this['F$X'][G[620490]] = this['F$l']['groupList'], this['F$p'](), req_multi_server_notice(0x4, this['F$l']['pkgName'], this['F$l'][G[620018]][G[620019]], this['F$$J'][G[620181]](this)), Laya[G[620438]][G[620491]](0x2, this, function () {
        xiybth['F$eJ'] = xiybth['F$l']['pkg_protocol_list'] && xiybth['F$l']['pkg_protocol_list'][G[620492]] ? xiybth['F$l']['pkg_protocol_list'][G[620492]] : [], xiybth['F$MJ'] = null != xiybth['F$l']['privacy_login_pkg'] ? xiybth['F$l']['privacy_login_pkg'] : 0x0;var r_szn = '1' == localStorage['getItem'](xiybth['F$k']),
            zmbtsn = 0x0 != g08['privacy_save_pkg'],
            wgp019 = 0x0 == xiybth['F$MJ'] || 0x1 == xiybth['F$MJ'];xiybth['F$GJ'] = zmbtsn && r_szn || wgp019, xiybth['F$BJ']();
      }), this[G[620366]][G[620274]] = G[620454] + this['F$l'][G[620016]] + G[620455] + this['F$l'][G[620127]], this[G[620385]][G[620448]] = this[G[620382]][G[620448]] = this['F$I'], this['imgCheatTip'][G[620436]] = 0x1 == this['F$l']['anti_cheat_pkg'], this[G[620378]][G[620436]] = !0x1;
    }, yx2hc[G[620337]][G[620493]] = function () {}, yx2hc[G[620337]]['F$b'] = function () {
      this['F$GJ'] ? 0x2710 < Date[G[620115]]() - this['F$m'] && (this['F$m'] -= 0x7d0, ae$_msr[G[620028]][G[620423]]()) : this['F$oJ'](G[620494]);
    }, yx2hc[G[620337]]['F$h'] = function () {
      this['F$GJ'] ? this['F$sJ'](this['F$l'][G[620018]]) && (awpg901[G[620422]]['g08'][G[620018]] = this['F$l'][G[620018]], g8A60(0x0, this['F$l'][G[620018]][G[620019]])) : this['F$oJ'](G[620494]);
    }, yx2hc[G[620337]]['F$p'] = function () {
      this['F$l'][G[620290]] ? this['listBg'][G[620436]] = !0x0 : (this['F$l'][G[620290]] = !0x0, g08A6(0x0));
    }, yx2hc[G[620337]]['F$j'] = function () {
      this['listBg'][G[620436]] = !0x1;
    }, yx2hc[G[620337]]['F$g'] = function () {
      this['F$EJ']();
    }, yx2hc[G[620337]]['F$z'] = function () {
      this['mNoticeBg'][G[620436]] = !0x1;
    }, yx2hc[G[620337]]['F$N'] = function () {
      this['noticeBg'][G[620436]] = !0x1;
    }, yx2hc[G[620337]]['F$yJ'] = function () {
      this['F$OJ']();
    }, yx2hc[G[620337]]['F$TJ'] = function () {
      this['privacyBg'][G[620436]] = !0x1;
    }, yx2hc[G[620337]]['F$ZJ'] = function () {
      this['F$GJ'] = !this['F$GJ'], this['F$GJ'] && localStorage[G[620495]](this['F$k'], '1'), this['privacyToggle'][G[620431]] = 'z888z888lgrz888z888/' + (this['F$GJ'] ? 'z888z88829b.png' : 'z888z88828b.png');
    }, yx2hc[G[620337]]['F$mJ'] = function (ofk4d) {
      this['F$OJ'](Number(ofk4d));
    }, yx2hc[G[620337]]['F$w'] = function () {
      this['F$i'] = this[G[620393]][G[620496]], Laya['stage']['on'](v4f5ka[G[620497]], this, this['F$LJ']), Laya['stage']['on'](v4f5ka[G[620498]], this, this['F$U']), Laya['stage']['on'](v4f5ka[G[620499]], this, this['F$U']);
    }, yx2hc[G[620337]]['F$LJ'] = function () {
      if (this[G[620393]]) {
        var ud41of = this['F$i'] - this[G[620393]][G[620496]];this[G[620393]][G[620500]] += ud41of, this['F$i'] = this[G[620393]][G[620496]];
      }
    }, yx2hc[G[620337]]['F$U'] = function () {
      Laya['stage'][G[620420]](v4f5ka[G[620497]], this, this['F$LJ']), Laya['stage'][G[620420]](v4f5ka[G[620498]], this, this['F$U']), Laya['stage'][G[620420]](v4f5ka[G[620499]], this, this['F$U']);
    }, yx2hc[G[620337]]['F$JJ'] = function () {
      this['F$u'] = this[G[620403]][G[620496]], Laya['stage']['on'](v4f5ka[G[620497]], this, this['F$HJ']), Laya['stage']['on'](v4f5ka[G[620498]], this, this['F$d']), Laya['stage']['on'](v4f5ka[G[620499]], this, this['F$d']);
    }, yx2hc[G[620337]]['F$HJ'] = function () {
      if (this[G[620404]]) {
        var hycji2 = this['F$u'] - this[G[620403]][G[620496]];this[G[620404]]['y'] -= hycji2, this[G[620403]]['height'] < this[G[620404]]['contextHeight'] ? this[G[620404]]['y'] < this[G[620403]]['height'] - this[G[620404]]['contextHeight'] ? this[G[620404]]['y'] = this[G[620403]]['height'] - this[G[620404]]['contextHeight'] : 0x0 < this[G[620404]]['y'] && (this[G[620404]]['y'] = 0x0) : this[G[620404]]['y'] = 0x0, this['F$u'] = this[G[620403]][G[620496]];
      }
    }, yx2hc[G[620337]]['F$d'] = function () {
      Laya['stage'][G[620420]](v4f5ka[G[620497]], this, this['F$HJ']), Laya['stage'][G[620420]](v4f5ka[G[620498]], this, this['F$d']), Laya['stage'][G[620420]](v4f5ka[G[620499]], this, this['F$d']);
    }, yx2hc[G[620337]]['F$VJ'] = function () {
      this['F$x'] = this[G[620409]][G[620496]], Laya['stage']['on'](v4f5ka[G[620497]], this, this['F$PJ']), Laya['stage']['on'](v4f5ka[G[620498]], this, this['F$C']), Laya['stage']['on'](v4f5ka[G[620499]], this, this['F$C']);
    }, yx2hc[G[620337]]['F$PJ'] = function () {
      if (this[G[620410]]) {
        var ow0u1p = this['F$x'] - this[G[620409]][G[620496]];this[G[620410]]['y'] -= ow0u1p, this[G[620409]]['height'] < this[G[620410]]['contextHeight'] ? this[G[620410]]['y'] < this[G[620409]]['height'] - this[G[620410]]['contextHeight'] ? this[G[620410]]['y'] = this[G[620409]]['height'] - this[G[620410]]['contextHeight'] : 0x0 < this[G[620410]]['y'] && (this[G[620410]]['y'] = 0x0) : this[G[620410]]['y'] = 0x0, this['F$x'] = this[G[620409]][G[620496]];
      }
    }, yx2hc[G[620337]]['F$C'] = function () {
      Laya['stage'][G[620420]](v4f5ka[G[620497]], this, this['F$PJ']), Laya['stage'][G[620420]](v4f5ka[G[620498]], this, this['F$C']), Laya['stage'][G[620420]](v4f5ka[G[620499]], this, this['F$C']);
    }, yx2hc[G[620337]]['F$RJ'] = function () {
      if (this['F$f'][G[620490]]) {
        for (var smbrnz, ak75f = 0x0; ak75f < this['F$f'][G[620490]]['length']; ak75f++) {
          var tnbiyx = this['F$f'][G[620490]][ak75f];tnbiyx[0x1] = ak75f == this['F$f'][G[620501]], ak75f == this['F$f'][G[620501]] && (smbrnz = tnbiyx[0x0]);
        }smbrnz && smbrnz[G[620502]] && (smbrnz[G[620502]] = smbrnz[G[620502]][G[620005]](/(<)(?!(br)).[a-zA-Z]{0,10}(>)/g, '')), this[G[620401]][G[620274]] = smbrnz && smbrnz[G[620503]] ? smbrnz[G[620503]] : '', this[G[620404]][G[620504]] = smbrnz && smbrnz[G[620502]] ? smbrnz[G[620502]] : '', this[G[620404]]['y'] = 0x0;
      }
    }, yx2hc[G[620337]]['F$nJ'] = function () {
      if (this['F$W'][G[620490]]) {
        for (var x2hic, tbzix = 0x0; tbzix < this['F$W'][G[620490]]['length']; tbzix++) {
          var r$mes_ = this['F$W'][G[620490]][tbzix];r$mes_[0x1] = tbzix == this['F$W'][G[620501]], tbzix == this['F$W'][G[620501]] && (x2hic = r$mes_[0x0]);
        }x2hic && x2hic[G[620502]] && (x2hic[G[620502]] = x2hic[G[620502]][G[620005]](/(<)(?!(br)).[a-zA-Z]{0,10}(>)/g, '')), this[G[620408]][G[620274]] = x2hic && x2hic[G[620503]] ? x2hic[G[620503]] : '', this[G[620410]][G[620504]] = x2hic && x2hic[G[620502]] ? x2hic[G[620502]] : '', this[G[620410]]['y'] = 0x0;
      }
    }, yx2hc[G[620337]]['F$AJ'] = function (hybxit) {
      this[G[620385]][G[620274]] = -0x1 === hybxit[G[620226]] ? hybxit[G[620222]] + G[620505] : 0x0 === hybxit[G[620226]] ? hybxit[G[620222]] + G[620506] : hybxit[G[620222]], this[G[620385]][G[620448]] = -0x1 === hybxit[G[620226]] ? G[620507] : 0x0 === hybxit[G[620226]] ? G[620508] : this['F$I'], this['hotImage'][G[620431]] = this['getStatusSrc'](hybxit[G[620226]]), this['F$l'][G[620017]] = hybxit[G[620017]] || '', this['F$l'][G[620018]] = hybxit, this[G[620388]][G[620436]] = !0x0;
    }, yx2hc[G[620337]]['F$lJ'] = function (ql$e83) {
      this[G[620289]](ql$e83);
    }, yx2hc[G[620337]]['F$aJ'] = function (nsrz_) {
      this['F$AJ'](nsrz_), this['listBg'][G[620436]] = !0x1;
    }, yx2hc[G[620337]][G[620289]] = function (txmbz) {
      if (void 0x0 === txmbz && (txmbz = 0x0), this[G[620509]]) {
        var _e$rsq = this['F$l']['groupList'];if (_e$rsq && 0x0 !== _e$rsq['length']) {
          for (var a8v = _e$rsq['length'], a7k = 0x0; a7k < a8v; a7k++) _e$rsq[a7k][G[620510]] = this['F$lJ'][G[620181]](this), _e$rsq[a7k][G[620511]] = a7k == txmbz, _e$rsq[a7k][G[620512]] = a7k;var chyi2j = (this['F$X'][G[620513]] = _e$rsq)[txmbz]['id'];this['F$l'][G[620138]][chyi2j] ? this[G[620293]](chyi2j) : this['F$l'][G[620292]] || (this['F$l'][G[620292]] = !0x0, -0x1 == chyi2j ? gA60(0x0) : -0x2 == chyi2j ? gG680(0x0) : g6A0(0x0, chyi2j));
        }
      }
    }, yx2hc[G[620337]][G[620293]] = function (wu1d4o) {
      if (this[G[620509]] && this['F$l'][G[620138]][wu1d4o]) {
        for (var cy2hji = this['F$l'][G[620138]][wu1d4o], op1u0w = cy2hji['length'], vakl76 = 0x0; vakl76 < op1u0w; vakl76++) cy2hji[vakl76][G[620510]] = this['F$aJ'][G[620181]](this);this['F$S'][G[620513]] = cy2hji;
      }
    }, yx2hc[G[620337]]['F$sJ'] = function (q8637l) {
      return -0x1 == q8637l[G[620226]] ? (alert(G[620514]), !0x1) : 0x0 != q8637l[G[620226]] || (alert(G[620515]), !0x1);
    }, yx2hc[G[620337]]['getStatusSrc'] = function (htybi) {
      var zbxin = '';return 0x2 === htybi ? zbxin = 'z888z888lgrz888z888/z888z88818b.png' : 0x1 === htybi ? zbxin = 'z888z888lgrz888z888/z888z88819b.png' : -0x1 !== htybi && 0x0 !== htybi || (zbxin = 'z888z888lgrz888z888/z888z88820b.png'), zbxin;
    }, yx2hc[G[620337]]['F$$J'] = function (u0dw1o) {
      console['log'](G[620516], u0dw1o);var chx2 = Date[G[620115]]() / 0x3e8,
          oup0w1 = localStorage['getItem'](this['F$c']),
          of14u = !(this['F$Y'] = []);if (G[620212] == u0dw1o[G[620158]]) for (var _e$qr3 in u0dw1o[G[620157]]) {
        var $qr_3e = u0dw1o[G[620157]][_e$qr3],
            op1wu0 = chx2 < $qr_3e[G[620517]],
            a4vfk5 = 0x1 == $qr_3e[G[620518]],
            brsmzn = 0x2 == $qr_3e[G[620518]] && $qr_3e[G[620519]] + '' != oup0w1;!of14u && op1wu0 && (a4vfk5 || brsmzn) && (of14u = !0x0), op1wu0 && this['F$Y'][G[620031]]($qr_3e), brsmzn && localStorage[G[620495]](this['F$c'], $qr_3e[G[620519]] + '');
      }this['F$Y'][G[620283]](function (v5af7k, f1du4) {
        return v5af7k['login_id'] - f1du4['login_id'];
      }), console['log'](G[620520], this['F$Y']), of14u && this['F$EJ']();
    }, yx2hc[G[620337]]['F$EJ'] = function () {
      if (this['F$f']) {
        if (this['F$Y']) {
          this['F$f']['x'] = 0x2 < this['F$Y']['length'] ? 0x0 : (this[G[620400]][G[620326]] - 0x112 * this['F$Y']['length']) / 0x2;for (var akfv7 = [], ak4d5f = 0x0; ak4d5f < this['F$Y']['length']; ak4d5f++) {
            var mzr$_ = this['F$Y'][ak4d5f];akfv7[G[620031]]([mzr$_, ak4d5f == this['F$f'][G[620501]]]);
          }0x0 < (this['F$f'][G[620490]] = akfv7)['length'] ? (this['F$f'][G[620501]] = 0x0, this['F$f'][G[620521]](0x0)) : (this[G[620401]][G[620274]] = G[620392], this[G[620404]][G[620274]] = ''), this[G[620397]][G[620436]] = this['F$Y']['length'] <= 0x1, this[G[620400]][G[620436]] = 0x1 < this['F$Y']['length'];
        }this['mNoticeBg'][G[620436]] = !0x0;
      }
    }, yx2hc[G[620337]]['F$BJ'] = function () {
      for (var sm_rz = '', $zm_sr = 0x0; $zm_sr < this['F$eJ']['length']; $zm_sr++) {
        sm_rz += G[620522] + $zm_sr + G[620523] + this['F$eJ'][$zm_sr][G[620503]] + G[620524], $zm_sr < this['F$eJ']['length'] - 0x1 && (sm_rz += '、');
      }this[G[620387]][G[620504]] = G[620525] + sm_rz, this['privacyToggle'][G[620431]] = 'z888z888lgrz888z888/' + (this['F$GJ'] ? 'z888z88829b.png' : 'z888z88828b.png'), this[G[620387]]['x'] = (0x2d0 - this[G[620387]][G[620326]]) / 0x2, this['privacyToggle']['x'] = this[G[620387]]['x'] - 0x1e, this[G[620389]][G[620436]] = 0x0 < this['F$eJ']['length'], this['privacyToggle'][G[620436]] = this[G[620387]][G[620436]] = 0x0 < this['F$eJ']['length'] && 0x0 != this['F$MJ'];
    }, yx2hc[G[620337]]['F$OJ'] = function (o5fud) {
      if (void 0x0 === o5fud && (o5fud = 0x0), this['F$W']) {
        if (this['F$eJ']) {
          this['F$W']['x'] = 0x2 < this['F$eJ']['length'] ? 0x0 : (this[G[620400]][G[620326]] - 0x112 * this['F$eJ']['length']) / 0x2;for (var yjhc2 = [], yxhib = 0x0; yxhib < this['F$eJ']['length']; yxhib++) {
            var sztmb = this['F$eJ'][yxhib];yjhc2[G[620031]]([sztmb, yxhib == this['F$W'][G[620501]]]);
          }0x0 < (this['F$W'][G[620490]] = yjhc2)['length'] ? (this['F$W'][G[620501]] = o5fud, this['F$W'][G[620521]](o5fud)) : (this[G[620408]][G[620274]] = G[620526], this[G[620410]][G[620274]] = ''), this[G[620406]][G[620436]] = this['F$eJ']['length'] <= 0x1, this[G[620407]][G[620436]] = 0x1 < this['F$eJ']['length'];
        }this['privacyBg'][G[620436]] = !0x0;
      }
    }, yx2hc[G[620337]]['F$oJ'] = function (iyj2h) {
      this[G[620378]][G[620274]] = iyj2h, this[G[620378]]['y'] = 0x280, this[G[620378]][G[620436]] = !0x0, this['F$qJ'] = 0x1, Laya[G[620438]][G[620439]](this, this['F$F']), this['F$F'](), Laya[G[620438]][G[620451]](0x1, this, this['F$F']);
    }, yx2hc[G[620337]]['F$F'] = function () {
      this[G[620378]]['y'] -= this['F$qJ'], this['F$qJ'] *= 1.1, this[G[620378]]['y'] <= 0x24e && (this[G[620378]][G[620436]] = !0x1, Laya[G[620438]][G[620439]](this, this['F$F']));
    }, yx2hc;
  }(ae$s_mr['F$T']), gw1p90[G[620527]] = xi2hy;
}(modules || (modules = {}));var modules,
    awpg901 = Laya[G[620528]],
    auo41dw = Laya[G[620529]],
    aszr$_ = Laya[G[620530]],
    ar_3$e = Laya[G[620531]],
    a$_ser = Laya[G[620489]],
    aqe$38l = modules['F$V'][G[620425]],
    afdo5k = modules['F$V']['LoadingPanel'],
    aq6378 = modules['F$V'][G[620527]],
    ae$_msr = function () {
  function inbzxt(l8$3qe) {
    this['m_loadingRes'] = ['z888z888dz888/z888z88813a.png', 'z888z888dz888/z888z88815a.png', 'z888z888dz888/z888z88814a.png', 'z888z888dz888/z888z88816a.png', 'z888z888dz888/z888z88817a.png', 'z888z888dz888/z888z88818a.png', 'z888z888dz888/z888z88819a.png', 'z888z888dz888/z888z88820a.png', 'z888yz888/z888z8881c.png', 'z888yz888/z888z8882c.png', 'z888yz888/z888z8883c.png', 'z888yz888/z888z8884c.png', 'z888yz888/z888z8885c.png', 'z888z888dz888/z888z8883a.jpg', 'z888z888dz888/z888z88812a.jpg', 'z888z888dz888/z888z8881a.png', 'z888z888dz888/z888z8882a.png', 'z888z888dz888/z888z8884a.jpg', 'z888z888dz888/z888z8886a.jpg', 'z888z888dz888/z888z8888a.jpg', 'z888z888dz888/z888z88810a.jpg', 'z888z888dz888/z888z8885a.jpg', 'z888z888dz888/z888z8887a.jpg', 'z888z888dz888/z888z8889a.jpg', 'z888z888dz888/z888z88811a.jpg'], this['gG860'] = ['z888z888lgrz888z888/z888z88810b.png', 'z888z888lgrz888z888/z888z88811b.png', 'z888z888lgrz888z888/z888z88812b.png', 'z888z888lgrz888z888/z888z88813b.png', 'z888z888lgrz888z888/z888z88814b.png', 'z888z888lgrz888z888/z888z88815b.png', 'z888z888lgrz888z888/z888z88816b.png', 'z888z888lgrz888z888/z888z88817b.png', 'z888z888lgrz888z888/z888z88818b.png', 'z888z888lgrz888z888/z888z88819b.png', 'z888z888lgrz888z888/z888z88820b.png', 'z888z888lgrz888z888/z888z88821b.png', 'z888z888lgrz888z888/z888z8882b.jpg', 'z888z888lgrz888z888/z888z8883b.jpg', 'z888z888lgrz888z888/z888z8884b.jpg', 'z888z888lgrz888z888/z888z8885b.jpg', 'z888z888lgrz888z888/z888z8886b.jpg', 'z888z888lgrz888z888/z888z8881b.png', 'z888z888lgrz888z888/z888z8888b.png', 'z888z888lgrz888z888/z888z8889b.png', 'z888z888lgrz888z888/z888z88824b.png', 'z888z888lgrz888z888/z888z88825b.png', 'z888z888lgrz888z888/z888z88823b.png', 'z888z888lgrz888z888/z888z88826b.png', 'z888z888lgrz888z888/z888z88827b.png', 'z888z888lgrz888z888/z888z88829b.png', 'z888z888lgrz888z888/z888z88828b.png'], this[G[620532]] = !0x1, this['m_isPrelodLoading'] = !0x1, this['F$rJ'] = !0x1, this['F$DJ'] = '', inbzxt[G[620028]] = this, Laya[G[620533]][G[620180]](), Laya3D[G[620180]](0x0, 0x0, !0x1, !0x1, !0x1), DecodeTools[G[620180]](), Laya['stage'][G[620534]] = Laya['Stage'][G[620535]], Laya['stage'][G[620536]] = Laya['Stage'][G[620537]], Laya['stage']['alignH'] = Laya['Stage'][G[620538]], Laya['stage']['alignV'] = Laya['Stage'][G[620539]], Laya['stage'][G[620540]] = Laya['Stage'][G[620541]];var $3_8q = Laya['AtlasResourceManager'];$3_8q[G[620542]] = 0x6, $3_8q[G[620543]] = $3_8q['atlasTextureHeight'] = 0x400, $3_8q[G[620544]](), Laya[G[620545]][G[620546]] = Laya[G[620545]][G[620547]] = '', Laya[G[620528]][G[620422]][G[620548]](Laya[G[620417]][G[620549]], this['F$_J'][G[620181]](this)), Laya[G[620427]][G[620550]][G[620551]] = { 'frames': { 'btn_chuangjue_kaishi.png': { 'frame': { 'h': 0x58, 'idx': 0x0, 'w': 0x1fa, 'x': 0x0, 'y': 0x0 }, 'sourceSize': { 'h': 0x58, 'w': 0x1fa }, 'spriteSourceSize': { 'x': 0x0, 'y': 0x0 } }, 'btn_chuangjue_nan.png': { 'frame': { 'h': 0x62, 'idx': 0x0, 'w': 0x6c, 'x': 0x14f, 'y': 0x59 }, 'sourceSize': { 'h': 0x62, 'w': 0x6c }, 'spriteSourceSize': { 'x': 0x0, 'y': 0x0 } }, 'btn_chuangjue_nv.png': { 'frame': { 'h': 0x62, 'idx': 0x0, 'w': 0x6b, 'x': 0x0, 'y': 0xa4 }, 'sourceSize': { 'h': 0x62, 'w': 0x6b }, 'spriteSourceSize': { 'x': 0x0, 'y': 0x0 } }, 'image_chuangjue_mingbg.png': { 'frame': { 'h': 0x4a, 'idx': 0x0, 'w': 0x14e, 'x': 0x0, 'y': 0x59 }, 'sourceSize': { 'h': 0x4a, 'w': 0x14e }, 'spriteSourceSize': { 'x': 0x0, 'y': 0x0 } }, 'image_chuangjue_suiji.png': { 'frame': { 'h': 0x38, 'idx': 0x0, 'w': 0x34, 'x': 0x1bc, 'y': 0x59 }, 'sourceSize': { 'h': 0x38, 'w': 0x34 }, 'spriteSourceSize': { 'x': 0x0, 'y': 0x0 } }, 'z888z88828b.png': { 'frame': { 'h': 0x19, 'idx': 0x0, 'w': 0x19, 'x': 0x1bc, 'y': 0x92 }, 'sourceSize': { 'h': 0x1b, 'w': 0x1a }, 'spriteSourceSize': { 'x': 0x0, 'y': 0x2 } }, 'z888z88829b.png': { 'frame': { 'h': 0x1b, 'idx': 0x0, 'w': 0x1a, 'x': 0x1d6, 'y': 0x92 }, 'sourceSize': { 'h': 0x1b, 'w': 0x1a }, 'spriteSourceSize': { 'x': 0x0, 'y': 0x0 } } }, 'meta': { 'image': 'create_role_atlas.png', 'prefix': G[620552] } }, awpg901[G[620422]]['resMgrLoad'] = inbzxt[G[620028]]['gG08'], awpg901[G[620422]]['imgMgrLoad'] = inbzxt[G[620028]]['gG08'], this[G[620553]] = new Laya[G[620426]](), this[G[620553]][G[620554]] = '_wxLoadingLayer', Laya['stage'][G[620428]](this[G[620553]]), this['F$_J']();
  }return inbzxt[G[620337]]['gA860'] = function (q83le) {
    inbzxt[G[620028]][G[620553]][G[620436]] = q83le;
  }, inbzxt[G[620337]]['gG608A'] = function () {
    inbzxt[G[620028]][G[620555]] || (inbzxt[G[620028]][G[620555]] = new aqe$38l()), inbzxt[G[620028]][G[620555]][G[620509]] || inbzxt[G[620028]][G[620553]][G[620428]](inbzxt[G[620028]][G[620555]]), inbzxt[G[620028]]['F$tJ']();
  }, inbzxt[G[620337]][G[620161]] = function () {
    this[G[620555]] && this[G[620555]][G[620509]] && (Laya['stage'][G[620556]](this[G[620555]]), this[G[620555]][G[620421]](!0x0), this[G[620555]] = null);
  }, inbzxt[G[620337]]['gG860A'] = function () {
    this[G[620532]] || (this[G[620532]] = !0x0, Laya[G[620557]][G[620558]](this['gG860'], a$_ser[G[620338]](this, function () {
      awpg901[G[620422]][G[620146]] = !0x0, awpg901[G[620422]]['g860A'](), awpg901[G[620422]]['g80A6']();
    })));
  }, inbzxt[G[620337]][G[620229]] = function () {
    for (var qe_3r = function () {
      inbzxt[G[620028]][G[620559]] || (inbzxt[G[620028]][G[620559]] = new aq6378()), inbzxt[G[620028]][G[620559]][G[620509]] || inbzxt[G[620028]][G[620553]][G[620428]](inbzxt[G[620028]][G[620559]]), inbzxt[G[620028]]['F$tJ']();
    }, dw14ou = !0x0, lv837 = 0x0, f4a5 = this['gG860']; lv837 < f4a5['length']; lv837++) {
      var icjyh2 = f4a5[lv837];if (null == Laya[G[620427]]['getRes'](icjyh2)) {
        dw14ou = !0x1;break;
      }
    }dw14ou ? qe_3r() : Laya[G[620557]][G[620558]](this['gG860'], a$_ser[G[620338]](this, qe_3r));
  }, inbzxt[G[620337]][G[620162]] = function () {
    this[G[620559]] && this[G[620559]][G[620509]] && (Laya['stage'][G[620556]](this[G[620559]]), this[G[620559]][G[620421]](!0x0), this[G[620559]] = null);
  }, inbzxt[G[620337]]['preloadLoading'] = function () {
    this['m_isPrelodLoading'] || (this['m_isPrelodLoading'] = !0x0, Laya[G[620557]][G[620558]](this['m_loadingRes'], a$_ser[G[620338]](this, function () {
      awpg901[G[620422]]['loadLoadingRes'] = !0x0, awpg901[G[620422]]['g860A'](), awpg901[G[620422]]['g80A6']();
    })));
  }, inbzxt[G[620337]]['openLoading'] = function (srbnmz) {
    void 0x0 === srbnmz && (srbnmz = 0x0), Laya[G[620557]][G[620558]](this['m_loadingRes'], a$_ser[G[620338]](this, function () {
      inbzxt[G[620028]]['m_loading'] || (inbzxt[G[620028]]['m_loading'] = new afdo5k(srbnmz)), inbzxt[G[620028]]['m_loading'][G[620509]] || inbzxt[G[620028]][G[620553]][G[620428]](inbzxt[G[620028]]['m_loading']), inbzxt[G[620028]]['F$tJ']();
    }));
  }, inbzxt[G[620337]]['closeLoading'] = function () {
    this['m_loading'] && this['m_loading'][G[620509]] && (Laya['stage'][G[620556]](this['m_loading']), this['m_loading'][G[620421]](!0x0), this['m_loading'] = null);for (var ko5d4 = 0x0, ofd45k = this['gG860']; ko5d4 < ofd45k['length']; ko5d4++) {
      var jyhi2 = ofd45k[ko5d4];Laya[G[620427]][G[620560]](inbzxt[G[620028]], jyhi2), Laya[G[620427]][G[620561]](jyhi2, !0x0);
    }for (var srznb = 0x0, jyc2i = this['m_loadingRes']; srznb < jyc2i['length']; srznb++) {
      jyhi2 = jyc2i[srznb], (Laya[G[620427]][G[620560]](inbzxt[G[620028]], jyhi2), Laya[G[620427]][G[620561]](jyhi2, !0x0));
    }this[G[620553]][G[620509]] && this[G[620553]][G[620509]][G[620556]](this[G[620553]]);
  }, inbzxt[G[620337]]['gG80'] = function () {
    this['m_loading'] && this['m_loading'][G[620509]] && inbzxt[G[620028]]['m_loading'][G[620315]]();
  }, inbzxt[G[620337]][G[620423]] = function () {
    var mbrzn = awpg901[G[620422]]['g08'][G[620018]];this['F$rJ'] || -0x1 == mbrzn[G[620226]] || 0x0 == mbrzn[G[620226]] || (this['F$rJ'] = !0x0, awpg901[G[620422]]['g08'][G[620018]] = mbrzn, g8A60(0x0, mbrzn[G[620019]]));
  }, inbzxt[G[620337]][G[620424]] = function () {
    var xzbmtn = '';xzbmtn += 'newRegister=' + awpg901[G[620422]]['g08']['newRegister'], xzbmtn += G[620562] + this[G[620532]], xzbmtn += G[620563] + (null != inbzxt[G[620028]][G[620559]]), xzbmtn += ', isPrelodLoading=' + this['m_isPrelodLoading'], xzbmtn += ', LoadingPanel=' + (null != inbzxt[G[620028]]['m_loading']), xzbmtn += ', resMgrLoad=' + (awpg901[G[620422]]['resMgrLoad'] == inbzxt[G[620028]]['gG08']), xzbmtn += ', imgMgrLoad=' + (awpg901[G[620422]]['imgMgrLoad'] == inbzxt[G[620028]]['gG08']), xzbmtn += G[620564] + inbzxt[G[620028]]['F$DJ'];for (var lv6k7 = 0x0, do4u5f = this['gG860']; lv6k7 < do4u5f['length']; lv6k7++) {
      xzbmtn += ',\x20' + (zs$rm_ = do4u5f[lv6k7]) + '=' + (null != Laya[G[620427]]['getRes'](zs$rm_));
    }for (var nzitxb = 0x0, ztsm = this['m_loadingRes']; nzitxb < ztsm['length']; nzitxb++) {
      var zs$rm_;xzbmtn += ',\x20' + (zs$rm_ = ztsm[nzitxb]) + '=' + (null != Laya[G[620427]]['getRes'](zs$rm_));
    }var xy2ihc = awpg901[G[620422]]['g08'][G[620018]];xy2ihc && (xzbmtn += G[620565] + xy2ihc[G[620226]], xzbmtn += G[620566] + xy2ihc[G[620019]], xzbmtn += G[620567] + xy2ihc[G[620222]]);var ztmbs = JSON['stringify']({ 'error': G[620568], 'stack': xzbmtn });console[G[620021]](ztmbs), this['F$vJ'] && this['F$vJ'] == xzbmtn || (this['F$vJ'] = xzbmtn, g0A8(ztmbs));
  }, inbzxt[G[620337]]['F$QJ'] = function () {
    var pw90u1 = Laya['stage'],
        q8_$3e = Math[G[620280]](pw90u1[G[620326]]),
        qes = Math[G[620280]](pw90u1['height']);qes / q8_$3e < 1.7777778 ? (this[G[620569]] = Math[G[620280]](q8_$3e / (qes / 0x500)), this[G[620570]] = 0x500, this[G[620571]] = qes / 0x500) : (this[G[620569]] = 0x2d0, this[G[620570]] = Math[G[620280]](qes / (q8_$3e / 0x2d0)), this[G[620571]] = q8_$3e / 0x2d0);var $zmsr = Math[G[620280]](pw90u1[G[620326]]),
        intbx = Math[G[620280]](pw90u1['height']);intbx / $zmsr < 1.7777778 ? (this[G[620569]] = Math[G[620280]]($zmsr / (intbx / 0x500)), this[G[620570]] = 0x500, this[G[620571]] = intbx / 0x500) : (this[G[620569]] = 0x2d0, this[G[620570]] = Math[G[620280]](intbx / ($zmsr / 0x2d0)), this[G[620571]] = $zmsr / 0x2d0), this['F$tJ']();
  }, inbzxt[G[620337]]['F$tJ'] = function () {
    this[G[620553]] && (this[G[620553]][G[620478]](this[G[620569]], this[G[620570]]), this[G[620553]][G[620463]](this[G[620571]], this[G[620571]], !0x0));
  }, inbzxt[G[620337]]['F$_J'] = function () {
    if (aszr$_['isInputting'] && awpg901[G[620572]]) {
      var up0ow = parseInt(aszr$_[G[620573]][G[620479]][G[620082]][G[620005]]('px', '')),
          esm = parseInt(aszr$_[G[620574]][G[620479]]['height'][G[620005]]('px', '')) * this[G[620571]],
          wpu1o = awpg901[G[620575]] / ar_3$e[G[620576]][G[620326]];return 0x0 < (up0ow = awpg901['clientHeight'] - esm * wpu1o - up0ow) && (up0ow = 0x0), void (awpg901[G[620577]][G[620479]][G[620082]] = up0ow + 'px');
    }awpg901[G[620577]][G[620479]][G[620082]] = G[620578];var gp109 = Math[G[620280]](awpg901[G[620326]]),
        ou01dw = Math[G[620280]](awpg901['height']);gp109 = gp109 + 0x1 & 0x7ffffffe, ou01dw = ou01dw + 0x1 & 0x7ffffffe;var szbm = Laya['stage'];0x3 == ENV ? (szbm[G[620534]] = Laya['Stage'][G[620579]], szbm[G[620326]] = gp109, szbm['height'] = ou01dw) : ou01dw < gp109 ? (szbm[G[620534]] = Laya['Stage'][G[620579]], szbm[G[620326]] = gp109, szbm['height'] = ou01dw) : (szbm[G[620534]] = Laya['Stage'][G[620535]], szbm[G[620326]] = 0x348, szbm['height'] = Math[G[620280]](ou01dw / (gp109 / 0x348)) + 0x1 & 0x7ffffffe), this['F$QJ']();
  }, inbzxt[G[620337]]['gG08'] = function (z$sm_r, f4d5o) {
    function $zrsm_() {
      a5v4f[G[620580]] = null, a5v4f[G[620581]] = null;
    }var a5v4f,
        zxtbin = z$sm_r;(a5v4f = new awpg901[G[620422]]['Image']())[G[620580]] = function () {
      $zrsm_(), f4d5o(zxtbin, 0xc8, a5v4f);
    }, a5v4f[G[620581]] = function () {
      console[G[620116]]('[warn] WX loadImage onerror:', zxtbin), inbzxt[G[620028]]['F$DJ'] += zxtbin + '|', $zrsm_(), f4d5o(zxtbin, 0x194, null);
    }, a5v4f[G[620582]] = zxtbin, -0x1 == inbzxt[G[620028]]['gG860'][G[620087]](zxtbin) && -0x1 == inbzxt[G[620028]]['m_loadingRes'][G[620087]](zxtbin) || Laya[G[620427]][G[620583]](inbzxt[G[620028]], zxtbin);
  }, inbzxt[G[620337]]['F$iJ'] = function (fou4, tszmbn) {
    return -0x1 != fou4[G[620087]](tszmbn, fou4['length'] - tszmbn['length']);
  }, inbzxt;
}();!function (tixhy2) {
  var vfk54a, rqe_3$;vfk54a = tixhy2['F$V'] || (tixhy2['F$V'] = {}), rqe_3$ = function (ntzsbm) {
    function va576() {
      var kvf57 = ntzsbm[G[620340]](this) || this;return kvf57['F$cJ'] = G[620584], kvf57['F$uJ'] = G[620585], kvf57[G[620326]] = 0x112, kvf57['height'] = 0x3b, kvf57['F$xJ'] = new Laya['Image'](), kvf57[G[620428]](kvf57['F$xJ']), kvf57['F$kJ'] = new Laya[G[620347]](), kvf57['F$kJ'][G[620460]] = 0x1e, kvf57['F$kJ'][G[620448]] = kvf57['F$uJ'], kvf57[G[620428]](kvf57['F$kJ']), kvf57['F$kJ'][G[620413]] = 0x0, kvf57['F$kJ'][G[620414]] = 0x0, kvf57;
    }return ap091uw(va576, ntzsbm), va576[G[620337]][G[620412]] = function () {
      ntzsbm[G[620337]][G[620412]][G[620340]](this), this['F$l'] = awpg901[G[620422]]['g08'], this['F$l']['loadingType'], this[G[620415]]();
    }, Object[G[620441]](va576[G[620337]], G[620490], { 'set': function (fdu54) {
        fdu54 && this[G[620586]](fdu54);
      }, 'enumerable': !0x0, 'configurable': !0x0 }), va576[G[620337]][G[620586]] = function (cy2hij) {
      this['F$XJ'] = cy2hij[0x0], this['F$SJ'] = cy2hij[0x1], this['F$kJ'][G[620274]] = this['F$XJ'][G[620503]], this['F$kJ'][G[620448]] = this['F$SJ'] ? this['F$cJ'] : this['F$uJ'], this['F$xJ'][G[620431]] = this['F$SJ'] ? 'z888z888lgrz888z888/z888z88825b.png' : 'z888z888lgrz888z888/z888z88824b.png';
    }, va576[G[620337]][G[620421]] = function (mszr_$) {
      void 0x0 === mszr_$ && (mszr_$ = !0x0), this[G[620419]](), ntzsbm[G[620337]][G[620421]][G[620340]](this, mszr_$);
    }, va576[G[620337]][G[620415]] = function () {}, va576[G[620337]][G[620419]] = function () {}, va576;
  }(Laya[G[620339]]), vfk54a[G[620474]] = rqe_3$;
}(modules || (modules = {})), function (eq_r$s) {
  var a4kvf5, _ser$q;a4kvf5 = eq_r$s['F$V'] || (eq_r$s['F$V'] = {}), _ser$q = function (e_$qr) {
    function i2xhc() {
      var l78v3 = e_$qr[G[620340]](this) || this;return l78v3['F$cJ'] = G[620584], l78v3['F$uJ'] = G[620585], l78v3[G[620326]] = 0x112, l78v3['height'] = 0x3b, l78v3['F$xJ'] = new Laya['Image'](), l78v3[G[620428]](l78v3['F$xJ']), l78v3['F$kJ'] = new Laya[G[620347]](), l78v3['F$kJ'][G[620460]] = 0x1e, l78v3['F$kJ'][G[620448]] = l78v3['F$uJ'], l78v3[G[620428]](l78v3['F$kJ']), l78v3['F$kJ'][G[620413]] = 0x0, l78v3['F$kJ'][G[620414]] = 0x0, l78v3;
    }return ap091uw(i2xhc, e_$qr), i2xhc[G[620337]][G[620412]] = function () {
      e_$qr[G[620337]][G[620412]][G[620340]](this), this['F$l'] = awpg901[G[620422]]['g08'], this['F$l']['loadingType'], this[G[620415]]();
    }, Object[G[620441]](i2xhc[G[620337]], G[620490], { 'set': function (a567vk) {
        a567vk && this[G[620586]](a567vk);
      }, 'enumerable': !0x0, 'configurable': !0x0 }), i2xhc[G[620337]][G[620586]] = function (fa5kd) {
      this['F$XJ'] = fa5kd[0x0], this['F$SJ'] = fa5kd[0x1], this['F$kJ'][G[620274]] = this['F$XJ'][G[620503]], this['F$kJ'][G[620448]] = this['F$SJ'] ? this['F$cJ'] : this['F$uJ'], this['F$xJ'][G[620431]] = this['F$SJ'] ? 'z888z888lgrz888z888/z888z88825b.png' : 'z888z888lgrz888z888/z888z88824b.png';
    }, i2xhc[G[620337]][G[620421]] = function (ql3687) {
      void 0x0 === ql3687 && (ql3687 = !0x0), this[G[620419]](), e_$qr[G[620337]][G[620421]][G[620340]](this, ql3687);
    }, i2xhc[G[620337]][G[620415]] = function () {}, i2xhc[G[620337]][G[620419]] = function () {}, i2xhc;
  }(Laya[G[620339]]), a4kvf5[G[620476]] = _ser$q;
}(modules || (modules = {})), function (es) {
  var t2hyx, e_3qr;t2hyx = es['F$V'] || (es['F$V'] = {}), e_3qr = function (nszm_r) {
    function lq638e() {
      var nzx = nszm_r[G[620340]](this) || this;return nzx[G[620326]] = 0xc0, nzx['height'] = 0x46, nzx['F$xJ'] = new Laya['Image'](), nzx[G[620428]](nzx['F$xJ']), nzx['F$kJ'] = new Laya[G[620347]](), nzx['F$kJ'][G[620460]] = 0x1e, nzx['F$kJ'][G[620448]] = nzx['F$I'], nzx[G[620428]](nzx['F$kJ']), nzx['F$kJ'][G[620413]] = 0x0, nzx['F$kJ'][G[620414]] = 0x0, nzx;
    }return ap091uw(lq638e, nszm_r), lq638e[G[620337]][G[620412]] = function () {
      nszm_r[G[620337]][G[620412]][G[620340]](this), this['F$l'] = awpg901[G[620422]]['g08'];var od1fu = this['F$l']['loadingType'];this['F$I'] = 0x1 == od1fu ? G[620585] : 0x2 == od1fu ? G[620585] : 0x3 == od1fu ? G[620587] : G[620585], this[G[620415]]();
    }, Object[G[620441]](lq638e[G[620337]], G[620490], { 'set': function (nmstbz) {
        nmstbz && this[G[620586]](nmstbz);
      }, 'enumerable': !0x0, 'configurable': !0x0 }), lq638e[G[620337]][G[620586]] = function (adk54) {
      this['F$XJ'] = adk54, this['F$kJ'][G[620274]] = adk54[G[620554]], this['F$xJ'][G[620431]] = adk54[G[620511]] ? 'z888z888lgrz888z888/z888z88814b.png' : 'z888z888lgrz888z888/z888z88815b.png';
    }, lq638e[G[620337]][G[620421]] = function (q8l$) {
      void 0x0 === q8l$ && (q8l$ = !0x0), this[G[620419]](), nszm_r[G[620337]][G[620421]][G[620340]](this, q8l$);
    }, lq638e[G[620337]][G[620415]] = function () {
      this['on'](Laya[G[620417]][G[620498]], this, this[G[620588]]);
    }, lq638e[G[620337]][G[620419]] = function () {
      this[G[620420]](Laya[G[620417]][G[620498]], this, this[G[620588]]);
    }, lq638e[G[620337]][G[620588]] = function () {
      this['F$XJ'] && this['F$XJ'][G[620510]] && this['F$XJ'][G[620510]](this['F$XJ'][G[620512]]);
    }, lq638e;
  }(Laya[G[620339]]), t2hyx[G[620470]] = e_3qr;
}(modules || (modules = {})), function (o4u5f) {
  var zms_r$, es_$mr;zms_r$ = o4u5f['F$V'] || (o4u5f['F$V'] = {}), es_$mr = function (rsmbnz) {
    function xbmtz() {
      var $_q3re = rsmbnz[G[620340]](this) || this;return $_q3re['F$xJ'] = new Laya['Image']('z888z888lgrz888z888/z888z88816b.png'), $_q3re['F$kJ'] = new Laya[G[620347]](), $_q3re['F$kJ'][G[620460]] = 0x1e, $_q3re['F$kJ'][G[620448]] = $_q3re['F$I'], $_q3re[G[620428]]($_q3re['F$xJ']), $_q3re['F$fJ'] = new Laya['Image'](), $_q3re[G[620428]]($_q3re['F$fJ']), $_q3re[G[620326]] = 0x166, $_q3re['height'] = 0x46, $_q3re[G[620428]]($_q3re['F$kJ']), $_q3re['F$fJ'][G[620414]] = 0x0, $_q3re['F$fJ']['x'] = 0x12, $_q3re['F$kJ']['x'] = 0x50, $_q3re['F$kJ'][G[620414]] = 0x0, $_q3re['F$xJ']['graphics'][G[620589]](0x0, 0x0, $_q3re[G[620326]], $_q3re['height'], G[620590]), $_q3re;
    }return ap091uw(xbmtz, rsmbnz), xbmtz[G[620337]][G[620412]] = function () {
      rsmbnz[G[620337]][G[620412]][G[620340]](this), this['F$l'] = awpg901[G[620422]]['g08'];var ibxtnz = this['F$l']['loadingType'];this['F$I'] = 0x1 == ibxtnz ? G[620591] : 0x2 == ibxtnz ? G[620591] : 0x3 == ibxtnz ? G[620587] : G[620591], this[G[620415]]();
    }, Object[G[620441]](xbmtz[G[620337]], G[620490], { 'set': function (qrse) {
        qrse && this[G[620586]](qrse);
      }, 'enumerable': !0x0, 'configurable': !0x0 }), xbmtz[G[620337]][G[620586]] = function (mnt) {
      this['F$XJ'] = mnt, this['F$kJ'][G[620448]] = -0x1 === mnt[G[620226]] ? G[620507] : 0x0 === mnt[G[620226]] ? G[620508] : this['F$I'], this['F$kJ'][G[620274]] = -0x1 === mnt[G[620226]] ? mnt[G[620222]] + G[620505] : 0x0 === mnt[G[620226]] ? mnt[G[620222]] + G[620506] : mnt[G[620222]], this['F$fJ'][G[620431]] = this['getStatusSrc'](mnt[G[620226]]);
    }, xbmtz[G[620337]][G[620421]] = function (th2yxi) {
      void 0x0 === th2yxi && (th2yxi = !0x0), this[G[620419]](), rsmbnz[G[620337]][G[620421]][G[620340]](this, th2yxi);
    }, xbmtz[G[620337]][G[620415]] = function () {
      this['on'](Laya[G[620417]][G[620498]], this, this[G[620588]]);
    }, xbmtz[G[620337]][G[620419]] = function () {
      this[G[620420]](Laya[G[620417]][G[620498]], this, this[G[620588]]);
    }, xbmtz[G[620337]][G[620588]] = function () {
      this['F$XJ'] && this['F$XJ'][G[620510]] && this['F$XJ'][G[620510]](this['F$XJ']);
    }, xbmtz[G[620337]]['getStatusSrc'] = function (rmns_) {
      var e_rs$m = '';return 0x2 === rmns_ ? e_rs$m = 'z888z888lgrz888z888/z888z88818b.png' : 0x1 === rmns_ ? e_rs$m = 'z888z888lgrz888z888/z888z88819b.png' : -0x1 !== rmns_ && 0x0 !== rmns_ || (e_rs$m = 'z888z888lgrz888z888/z888z88820b.png'), e_rs$m;
    }, xbmtz;
  }(Laya[G[620339]]), zms_r$['SelectRightListItem'] = es_$mr;
}(modules || (modules = {})), window['ServerLoading'] = ae$_msr;