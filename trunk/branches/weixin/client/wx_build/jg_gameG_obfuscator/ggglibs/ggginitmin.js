'use strict';
var gsx37zu,
    gcm4a = this && this['__extends'] || function () {
  var kfz7x = Object['setPrototypeOf'] || { '__proto__': [] } instanceof Array && function (a2y4, el_h8) {
    a2y4['__proto__'] = el_h8;
  } || function (szxk7f, _hg9l6) {
    for (var $j_gh in _hg9l6) _hg9l6['hasOwnProperty']($j_gh) && (szxk7f[$j_gh] = _hg9l6[$j_gh]);
  };return function (w_e9l, ubpv37) {
    function xus7kz() {
      this['constructor'] = w_e9l;
    }kfz7x(w_e9l, ubpv37), w_e9l['prototype'] = null === ubpv37 ? Object['create'](ubpv37) : (xus7kz['prototype'] = ubpv37['prototype'], new xus7kz());
  };
}(),
    gbpouv = laya['ui']['View'],
    gopwtq = laya['ui']['Dialog'];!function (to8qe) {
  var qtp = (gcm4a(zkxus7, bvp7u3 = gbpouv), zkxus7['prototype']['createChildren'] = function () {
    bvp7u3['prototype']['createChildren']['call'](this), this['createView'](to8qe['Ga']['uiView']);
  }, zkxus7['uiView'] = { 'type': 'View', 'props': { 'width': 0x2d0, 'name': 'P_WXAuthorizationViewUI', 'height': 0x500 }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x2d0, 'var': 'bgImg', 'skin': 'ggglogin/g2b.jpg', 'name': 'bg', 'height': 0x500, 'centerY': 0x0, 'centerX': 0x0 } }, { 'type': 'Box', 'props': { 'y': 0x0, 'width': 0x2d0, 'right': 0x0, 'height': 0x500 }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x2d0, 'var': 'topImg', 'top': -0x8b, 'skin': 'ggglogin/g6b.jpg', 'height': 0x8b, 'centerX': 0x0, 'anchorY': 0x1 } }, { 'type': 'Image', 'props': { 'width': 0x2d0, 'var': 'btmImg', 'top': 0x500, 'skin': 'ggglogin/g3b.jpg', 'height': 0x8b, 'centerX': 0x0 } }, { 'type': 'Image', 'props': { 'x': -0xdc, 'width': 0xdc, 'var': 'leftImg', 'skin': 'ggglogin/g4b.jpg', 'left': -0xdc, 'height': 0x500, 'centerY': 0x0 } }, { 'type': 'Image', 'props': { 'width': 0xdc, 'var': 'rightImg', 'skin': 'ggglogin/g5b.jpg', 'left': 0x2d0, 'height': 0x500, 'centerY': 0x0 } }] }] }, zkxus7);function zkxus7() {
    return bvp7u3['call'](this) || this;
  }var bvp7u3;to8qe['Ga'] = qtp;
}(gsx37zu = gsx37zu || {}), function (j0iy1) {
  var xsfzk7 = (gcm4a(yrj$i1, j$riy = gbpouv), yrj$i1['prototype']['createChildren'] = function () {
    j$riy['prototype']['createChildren']['call'](this), this['createView'](j0iy1['Gb']['uiView']);
  }, yrj$i1['uiView'] = { 'type': 'View', 'props': { 'width': 0x2d0, 'name': 'P_LoadingView', 'height': 0x500 }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x2d0, 'var': 'bgImg', 'name': 'bg', 'height': 0x500, 'centerY': 0x0, 'centerX': 0x0 } }, { 'type': 'Box', 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x2d0, 'height': 0x500 }, 'child': [{ 'type': 'Image', 'props': { 'var': 'topImg', 'centerX': 0x0, 'bottom': 0x500, 'anchorY': 0x1 } }, { 'type': 'Image', 'props': { 'var': 'btmImg', 'top': 0x500, 'centerX': 0x0 } }, { 'type': 'Image', 'props': { 'var': 'leftImg', 'right': 0x2d0, 'pivotX': 0x1, 'centerY': 0x0 } }, { 'type': 'Image', 'props': { 'var': 'rightImg', 'left': 0x2d0, 'centerY': 0x0 } }] }, { 'type': 'Image', 'props': { 'var': 'copyRightImg', 'skin': 'ggglogin/g1b.png', 'centerX': 0x0, 'bottom': 0xa } }, { 'type': 'Box', 'props': { 'y': 0x3c3, 'x': 0x0, 'width': 0x2d0, 'var': 'processBox1', 'name': 'processBox1', 'height': 0x82 }, 'child': [{ 'type': 'Image', 'props': { 'y': 0x2e, 'x': 0x3e, 'width': 0x254, 'var': 'loadingBarBg', 'skin': 'gggloding/g13a.png', 'height': 0x1b, 'centerX': 0x0 } }, { 'type': 'Image', 'props': { 'y': 0x31, 'x': 0x40, 'width': 0x24e, 'var': 'loadingBar', 'skin': 'gggloding/g14a.png', 'height': 0x15 } }, { 'type': 'Image', 'props': { 'y': 0x37, 'x': 0x1fb, 'width': 0xd0, 'var': 'loadingImg1', 'skin': 'gggloding/g16a.png', 'height': 0xb } }, { 'type': 'Image', 'props': { 'y': 0x6, 'x': 0x274, 'width': 0x27, 'var': 'loadingImg2', 'skin': 'gggloding/g17a.png', 'height': 0x74 } }, { 'type': 'Label', 'props': { 'y': 0x30, 'x': 0x125, 'width': 0x86, 'var': 'percentageTips', 'valign': 'middle', 'text': '88%', 'strokeColor': '#565353', 'stroke': 0x3, 'height': 0x18, 'fontSize': 0x18, 'color': '#fbfbf9', 'centerX': 0x0, 'bold': !0x1, 'align': 'center' } }] }, { 'type': 'Box', 'props': { 'y': 0x429, 'x': 0x0, 'width': 0x2d0, 'var': 'processBox2', 'name': 'processBox2', 'height': 0x11 }, 'child': [{ 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x133, 'var': 'point1', 'skin': 'gggloding/g20a.png', 'centerX': -0x2d } }, { 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x151, 'var': 'point2', 'skin': 'gggloding/g19a.png', 'centerX': -0xf } }, { 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x16f, 'var': 'point3', 'skin': 'gggloding/g18a.png', 'centerX': 0xf } }, { 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x18d, 'var': 'point4', 'skin': 'gggloding/g18a.png', 'centerX': 0x2d } }] }, { 'type': 'Button', 'props': { 'y': 0x316, 'x': 0x37, 'visible': !0x1, 'var': 'getTipsBtn', 'stateNum': 0x1, 'skin': 'gggloding/g1a.png', 'name': 'getTipsBtn', 'labelSize': 0x1e, 'labelFont': 'SimHei', 'labelColors': '#af4158' }, 'child': [{ 'type': 'Label', 'props': { 'y': 0x9b, 'x': 0x92, 'width': 0x143, 'var': 'txtGetTm', 'text': '立即领取(5s)', 'name': 'txtGetTm', 'height': 0x1e, 'fontSize': 0x1e, 'color': '#bd4f1e', 'align': 'center' } }] }, { 'type': 'Label', 'props': { 'y': 0x453, 'width': 0x1f4, 'var': 'loadingTips', 'valign': 'middle', 'text': '加载描述', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#f2ffb5', 'centerX': 0x0, 'bold': !0x1, 'align': 'center' } }, { 'type': 'Label', 'props': { 'y': 0xa, 'x': 0xa, 'width': 0x156, 'var': 'versionTxt', 'valign': 'middle', 'top': 0x14, 'text': '版本\uFF1A100', 'right': 0x14, 'height': 0x20, 'fontSize': 0x18, 'color': '#163274', 'bold': !0x1, 'align': 'right' } }] }, yrj$i1);function yrj$i1() {
    return j$riy['call'](this) || this;
  }var j$riy;j0iy1['Gb'] = xsfzk7;
}(gsx37zu = gsx37zu || {}), function (obqp) {
  var j6g$h_ = (gcm4a(hg9_6l, xfsdkz = gbpouv), hg9_6l['prototype']['createChildren'] = function () {
    gbpouv['regComponent']('Text', laya['display']['Text']), xfsdkz['prototype']['createChildren']['call'](this), this['createView'](obqp['Gc']['uiView']);
  }, hg9_6l['uiView'] = { 'type': 'View', 'props': { 'width': 0x2d0, 'name': 'P_SelectServerViewUI', 'height': 0x500 }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x2d0, 'var': 'bgImg', 'skin': 'ggglogin/g2b.jpg', 'name': 'bg', 'height': 0x500, 'centerY': 0x0, 'centerX': 0x0 } }, { 'type': 'Box', 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x2d0, 'height': 0x500 }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x2d0, 'var': 'topImg', 'top': -0x8b, 'skin': 'ggglogin/g6b.jpg', 'height': 0x8b, 'centerX': 0x0 } }, { 'type': 'Image', 'props': { 'width': 0x2d0, 'var': 'btmImg', 'top': 0x500, 'skin': 'ggglogin/g3b.jpg', 'height': 0x8b, 'centerX': 0x0 } }, { 'type': 'Image', 'props': { 'width': 0xdc, 'var': 'leftImg', 'skin': 'ggglogin/g4b.jpg', 'left': -0xdc, 'height': 0x500, 'centerY': 0x0 } }, { 'type': 'Image', 'props': { 'width': 0xdc, 'var': 'rightImg', 'skin': 'ggglogin/g5b.jpg', 'left': 0x2d0, 'height': 0x500, 'centerY': 0x0 } }] }, { 'type': 'Image', 'props': { 'y': 0x34d, 'var': 'selectServer', 'skin': 'ggglogin/g21b.png', 'centerX': 0x0 } }, { 'type': 'Image', 'props': { 'y': 0x3a2, 'x': 0xa2, 'var': 'hotImage', 'skin': 'ggglogin/g18b.png' } }, { 'type': 'Image', 'props': { 'var': 'copyRightImg', 'skin': 'ggglogin/g1b.png', 'centerX': 0x0, 'bottom': 0xa } }, { 'type': 'Image', 'props': { 'y': 0x3f7, 'var': 'enterBtn', 'stateNum': 0x1, 'skin': 'ggglogin/g12b.png', 'name': 'enterBtn', 'centerX': 0x0 } }, { 'type': 'Label', 'props': { 'y': 0x3a4, 'x': 0x209, 'var': 'selServer', 'valign': 'middle', 'text': '选服>', 'height': 0x20, 'fontSize': 0x1e, 'color': '#feffc0', 'bold': !0x1, 'align': 'center' } }, { 'type': 'Label', 'props': { 'y': 0x3a4, 'width': 0x156, 'var': 'serverName', 'valign': 'middle', 'text': '0000000000001服', 'height': 0x20, 'fontSize': 0x1e, 'color': '#feffc0', 'centerX': 0x0, 'bold': !0x1, 'align': 'center' } }, { 'type': 'Label', 'props': { 'width': 0x156, 'var': 'versionTxt', 'valign': 'middle', 'top': 0x14, 'text': '版本\uFF1A100', 'right': 0x14, 'height': 0x20, 'fontSize': 0x18, 'color': '#163274', 'bold': !0x1, 'align': 'right' } }, { 'type': 'Image', 'props': { 'y': 0x7f, 'x': 593.5, 'var': 'noticeBtn', 'skin': 'ggglogin/g11b.png' } }, { 'type': 'Image', 'props': { 'y': 0x47, 'x': -0x2, 'visible': !0x1, 'var': 'noticeBg', 'skin': 'ggglogin/g8b.png', 'centerY': 0x0, 'centerX': 0x0 }, 'child': [{ 'type': 'Image', 'props': { 'y': 36.5, 'x': 0x268, 'var': 'noticeClose', 'skin': 'ggglogin/g10b.png' } }, { 'type': 'Label', 'props': { 'y': 0x48, 'x': 0xd8, 'width': 0xea, 'var': 'noticeTitle', 'valign': 'middle', 'text': '暂无公告', 'height': 0x23, 'fontSize': 0x1e, 'color': '#ffffff', 'bold': !0x1, 'align': 'center' } }, { 'type': 'Text', 'props': { 'y': 0x8e, 'x': 0x3d, 'wordWrap': !0x0, 'width': 0x221, 'var': 'noticeContent', 'valign': 'top', 'overflow': 'scroll', 'mouseEnabled': !0x0, 'leading': 0x4, 'height': 0x366, 'fontSize': 0x1a, 'color': '#212942' } }] }, { 'type': 'Image', 'props': { 'y': 0x71, 'x': 0x21, 'visible': !0x1, 'var': 'mNoticeBg', 'skin': 'ggglogin/g26b.png', 'centerY': 0x0, 'centerX': 0x0 }, 'child': [{ 'type': 'Image', 'props': { 'y': 36.5, 'x': 0x268, 'var': 'mNoticeClose', 'skin': 'ggglogin/g10b.png' } }, { 'type': 'Box', 'props': { 'y': 0x388, 'x': 0x22, 'width': 0x254, 'var': 'boxTab', 'height': 0x3b } }, { 'type': 'Label', 'props': { 'y': 0x48, 'x': 0xd8, 'width': 0xea, 'var': 'mNoticeTitle', 'valign': 'middle', 'text': '暂无公告', 'height': 0x23, 'fontSize': 0x1e, 'color': '#ffffff', 'bold': !0x1, 'align': 'center' } }, { 'type': 'Text', 'props': { 'y': 0x8e, 'x': 0x3d, 'wordWrap': !0x0, 'width': 0x221, 'var': 'mNoticeContent', 'valign': 'top', 'overflow': 'scroll', 'mouseEnabled': !0x0, 'leading': 0x4, 'height': 0x2dd, 'fontSize': 0x1a, 'color': '#212942' } }] }, { 'type': 'Image', 'props': { 'visible': !0x1, 'var': 'listBg', 'skin': 'ggglogin/g9b.png', 'centerY': 0x0, 'centerX': 0x0 }, 'child': [{ 'type': 'Box', 'props': { 'y': 0x75, 'x': 0x3d, 'width': 0xc8, 'var': 'leftListBox', 'height': 0x389 } }, { 'type': 'Box', 'props': { 'y': 0x75, 'x': 0x125, 'width': 0x166, 'var': 'rightListBox', 'height': 0x389 } }, { 'type': 'Image', 'props': { 'y': 0xd, 'x': 0x282, 'var': 'closeBg', 'skin': 'ggglogin/g17b.png' } }] }] }, hg9_6l);function hg9_6l() {
    return xfsdkz['call'](this) || this;
  }var xfsdkz;obqp['Gc'] = j6g$h_;
}(gsx37zu = gsx37zu || {}), function (ltw8qe) {
  function pteow() {
    return pvbo['call'](this) || this;
  }var pvbo;ltw8qe = ltw8qe['Gd'] || (ltw8qe['Gd'] = {}), pvbo = gsx37zu['Ga'], gcm4a(pteow, pvbo), pteow['prototype']['initialize'] = function () {
    pvbo['prototype']['initialize']['call'](this), this['centerX'] = 0x0, this['centerY'] = 0x0, this['addEvt'](), this['onOpened']();
  }, pteow['prototype']['addEvt'] = function () {
    this['on'](Laya['Event']['CLICK'], this, this['Ge']);
  }, pteow['prototype']['rmEvts'] = function () {
    this['off'](Laya['Event']['CLICK'], this, this['Ge']);
  }, pteow['prototype']['onOpened'] = function () {
    this['Gf'] = Date['now'](), gvqptw['instance']['G$Q$YL8'](), gvqptw['instance']['preloadLoading']();
  }, pteow['prototype']['destroy'] = function (z7kxsf) {
    void 0x0 === z7kxsf && (z7kxsf = !0x0), this['rmEvts'](), pvbo['prototype']['destroy']['call'](this, z7kxsf);
  }, pteow['prototype']['Ge'] = function () {
    0x2710 < Date['now']() - this['Gf'] && (this['Gf'] -= 0x3e8, gg6_jh$['window']['G$Y$']['selectedServer']['server_id'] && (gvqptw['instance']['enterDefaultServer'](), gvqptw['instance']['sendRecord']()));
  }, ltw8qe['AuthorizationPanel'] = pteow;
}(modules = modules || {}), function (xs3z7u) {
  var hjg$6_, qotvpb, b3p7uv, zvbu3;function ig61j() {
    var g6lh9 = votpbq['call'](this) || this;return g6lh9['Gh'] = new b3p7uv(), g6lh9['addChild'](g6lh9['Gh']), g6lh9['Gi'] = null, g6lh9['Gj'] = [], g6lh9['Gk'] = !0x1, g6lh9['Gl'] = 0x0, g6lh9['Go'] = !0x0, g6lh9['Gp'] = 0x6, g6lh9['Gq'] = !0x1, g6lh9['on'](qotvpb['DISPLAY'], g6lh9, g6lh9['Gr']), g6lh9['on'](qotvpb['UNDISPLAY'], g6lh9, g6lh9['Gs']), g6lh9;
  }var votpbq;hjg$6_ = xs3z7u['Gg'] || (xs3z7u['Gg'] = {}), qotvpb = Laya['Event'], b3p7uv = Laya['Image'], xs3z7u = Laya['Component'], zvbu3 = Laya['Loader'], gcm4a(ig61j, votpbq = xs3z7u), ig61j['create'] = function (v73uz, gij6, hg98_l, zfskd, kfx7, kzxsd, ghl_6) {
    void 0x0 === zfskd && (zfskd = 0x0), void 0x0 === kfx7 && (kfx7 = 0x6), void 0x0 === kzxsd && (kzxsd = !0x0), void 0x0 === ghl_6 && (ghl_6 = !0x1);var bpu3o = new ig61j();return bpu3o['skin'](gij6, hg98_l, zfskd), bpu3o['durFrm'] = kfx7, bpu3o['loop'] = kzxsd, bpu3o['atHide'] = ghl_6, v73uz && v73uz['addChild'](bpu3o), bpu3o;
  }, ig61j['play'] = function (ptvwo) {
    ptvwo && (ptvwo['visible'] = !0x0, ptvwo['play']());
  }, ig61j['stop'] = function (tqeow8) {
    tqeow8 && (tqeow8['visible'] = !0x1, tqeow8['stop']());
  }, ig61j['prototype']['destroy'] = function (topwe) {
    Laya['timer']['clear'](this, this['Gt']), this['off'](qotvpb['DISPLAY'], this, this['Gr']), this['off'](qotvpb['UNDISPLAY'], this, this['Gs']), votpbq['prototype']['destroy']['call'](this, topwe);
  }, ig61j['prototype']['Gr'] = function () {}, ig61j['prototype']['Gs'] = function () {}, ig61j['prototype']['skin'] = function (z7sxku, uskzx7, w89le) {
    if (this['Gi'] != z7sxku) {
      this['Gi'] = z7sxku, this['Gj'] = [];for (var kzdfs = 0x0, ou3b = w89le; ou3b <= uskzx7; ou3b++) this['Gj'][kzdfs++] = z7sxku + '/' + ou3b + '.png';w89le = zvbu3['getRes'](this['Gj'][0x0]), (w89le && (this['width'] = w89le['sourceWidth'], this['height'] = w89le['sourceHeight']), this['Gt']());
    }
  }, Object['defineProperty'](ig61j['prototype'], 'atHide', { 'get': function () {
      return this['Gq'];
    }, 'set': function (r4ya1) {
      this['Gq'] = r4ya1;
    }, 'enumerable': !0x0, 'configurable': !0x0 }), Object['defineProperty'](ig61j['prototype'], 'durFrm', { 'set': function (xz7fsk) {
      this['Gp'] != xz7fsk && (this['Gp'] = xz7fsk, this['Gk'] && (Laya['timer']['clear'](this, this['Gt']), Laya['timer']['loop'](this['Gp'] * (0x3e8 / 0x3c), this, this['Gt'])));
    }, 'enumerable': !0x0, 'configurable': !0x0 }), Object['defineProperty'](ig61j['prototype'], 'loop', { 'set': function (pqtvo) {
      this['Go'] = pqtvo;
    }, 'enumerable': !0x0, 'configurable': !0x0 }), ig61j['prototype']['play'] = function () {
    this['Gk'] && this['stop'](), this['Gk'] = !0x0, this['Gl'] = 0x0, Laya['timer']['loop'](this['Gp'] * (0x3e8 / 0x3c), this, this['Gt']), this['Gt']();
  }, ig61j['prototype']['stop'] = function () {
    this['Gk'] = !0x1, this['Gl'] = 0x0, this['Gt'](), Laya['timer']['clear'](this, this['Gt']);
  }, ig61j['prototype']['pause'] = function () {
    this['Gk'] && (this['Gk'] = !0x1, Laya['timer']['clear'](this, this['Gt']));
  }, ig61j['prototype']['resume'] = function () {
    this['Gk'] || (this['Gk'] = !0x0, Laya['timer']['loop'](this['Gp'] * (0x3e8 / 0x3c), this, this['Gt']), this['Gt']());
  }, Object['defineProperty'](ig61j['prototype'], 'isPlay', { 'get': function () {
      return this['Gk'];
    }, 'enumerable': !0x0, 'configurable': !0x0 }), ig61j['prototype']['Gt'] = function () {
    this['Gj'] && 0x0 != this['Gj']['length'] && (this['Gh']['skin'] = this['Gj'][this['Gl']], this['Gk'] && (this['Gl']++, this['Gl'] == this['Gj']['length'] && (this['Go'] ? this['Gl'] = 0x0 : (Laya['timer']['clear'](this, this['Gt']), this['Gk'] = !0x1, this['Gq'] && (this['visible'] = !0x1), this['event'](qotvpb['COMPLETE'])))));
  }, hjg$6_['PanelEff'] = ig61j;
}(modules = modules || {}), function (tvpboq) {
  var $ji61g, m4a250;function g_lh69(ir$61) {
    void 0x0 === ir$61 && (ir$61 = 0x0);var otw8 = zfkdxs['call'](this) || this;return otw8['Gu'] = { 'bgImgSkin': 'gggloding/g3a.jpg', 'topImgSkin': 'gggloding/g10a.jpg', 'btmImgSkin': 'gggloding/g4a.jpg', 'leftImgSkin': 'gggloding/g6a.jpg', 'rightImgSkin': 'gggloding/g8a.jpg', 'loadingBarBgSkin': 'gggloding/g13a.png', 'copyRightImgBottom': 0xa, 'processBox1Y': 0x3c3, 'processBox2Y': 0x429, 'loadingTipsSize': 0x1a, 'getTipsBtnVisible': !0x1 }, otw8['Gv'] = { 'bgImgSkin': 'gggloding/g12a.jpg', 'topImgSkin': 'gggloding/g11a.jpg', 'btmImgSkin': 'gggloding/g5a.jpg', 'leftImgSkin': 'gggloding/g7a.jpg', 'rightImgSkin': 'gggloding/g9a.jpg', 'loadingBarBgSkin': 'gggloding/g15a.png', 'copyRightImgBottom': 0xa, 'processBox1Y': 0x3c3, 'processBox2Y': 0x429, 'loadingTipsSize': 0x1a, 'getTipsBtnVisible': !0x1 }, otw8['Gw'] = 0x0, otw8['Gx'](0x1 == ir$61 ? otw8['Gv'] : otw8['Gu']), otw8;
  }var zfkdxs;$ji61g = tvpboq['Gd'] || (tvpboq['Gd'] = {}), m4a250 = tvpboq['Gg']['PanelEff'], zfkdxs = gsx37zu['Gb'], gcm4a(g_lh69, zfkdxs), g_lh69['prototype']['initialize'] = function () {
    zfkdxs['prototype']['initialize']['call'](this), gvqptw['instance']['preloadLoading'](), this['Gy'] = gg6_jh$['window']['G$Y$'], this['centerX'] = 0x0, this['centerY'] = 0x0, this['Gy'] && (this['Gy']['loadingType'], this['loadingTips']['color'] = '#f2ffb5'), this['Gz'] = [this['point1'], this['point2'], this['point3'], this['point4']], gg6_jh$['window']['watPanel'] = this, G$LY$8(), gvqptw['instance']['closeAuthor'](), gvqptw['instance']['closeServer'](), this['onOpened']();
  }, g_lh69['prototype']['G$LY$'] = function (qpovtw) {
    var bu7vp = this;if (-0x1 === qpovtw) return bu7vp['Gw'] = 0x0, Laya['timer']['clear'](this, this['G$LY$']), void Laya['timer']['frameLoop'](0x1, this, this['G$LY$']);var h$6ji;-0x2 !== qpovtw ? (bu7vp['Gw'] < 0.9 ? bu7vp['Gw'] += (0.15 * Math['random']() + 0.01) / (0x64 * Math['random']() + 0x32) : bu7vp['Gw'] < 0x1 && (bu7vp['Gw'] += 0.0001), 0.9999 < bu7vp['Gw'] && (bu7vp['Gw'] = 0.9999, Laya['timer']['clear'](this, this['G$LY$']), Laya['timer']['once'](0xbb8, this, function () {
      0.9 < bu7vp['Gw'] && G$LY$(-0x1);
    })), qpovtw = 0x24e * (h$6ji = bu7vp['Gw']), bu7vp['Gw'] = bu7vp['Gw'] > h$6ji ? bu7vp['Gw'] : h$6ji, bu7vp['loadingBar']['width'] = qpovtw, qpovtw = bu7vp['loadingBar']['x'] + qpovtw, bu7vp['loadingImg2']['x'] = qpovtw - 0xf, 0x16c <= qpovtw ? (bu7vp['loadingImg1']['visible'] = !0x0, bu7vp['loadingImg1']['x'] = qpovtw - 0xca) : bu7vp['loadingImg1']['visible'] = !0x1, bu7vp['percentageTips']['text'] = (0x64 * h$6ji >> 0x0) + '%', bu7vp['Gw'] < 0.9999 && Laya['timer']['frameLoop'](0x1, this, this['G$LY$'])) : Laya['timer']['clear'](this, this['G$LY$']);
  }, g_lh69['prototype']['G$L$Y'] = function (yj$r, e8h9l, szdkfx) {
    var dkxsf = this,
        v73upb = 0x24e * (yj$r = 0x1 < yj$r ? 0x1 : yj$r);dkxsf['Gw'] = dkxsf['Gw'] > yj$r ? dkxsf['Gw'] : yj$r, dkxsf['loadingBar']['width'] = v73upb, v73upb = dkxsf['loadingBar']['x'] + v73upb, (dkxsf['loadingImg2']['x'] = v73upb - 0xf, 0x16c <= v73upb ? (dkxsf['loadingImg1']['visible'] = !0x0, dkxsf['loadingImg1']['x'] = v73upb - 0xca) : dkxsf['loadingImg1']['visible'] = !0x1, dkxsf['percentageTips']['text'] = (0x64 * yj$r >> 0x0) + '%', dkxsf['loadingTips']['text'] = e8h9l);for (var ou3 = szdkfx - 0x1, jg61$ = 0x0; jg61$ < this['Gz']['length']; jg61$++) dkxsf['Gz'][jg61$]['skin'] = jg61$ < ou3 ? 'gggloding/g20a.png' : ou3 === jg61$ ? 'gggloding/g19a.png' : 'gggloding/g18a.png';
  }, g_lh69['prototype']['onOpened'] = function () {
    this['G$L$Y'](0.1, '正在加载资源...', 0x1), this['G$LY$'](-0x1), gg6_jh$['window']['G$LY$'] = this['G$LY$']['bind'](this), gg6_jh$['window']['G$L$Y'] = this['G$L$Y']['bind'](this), this['versionTxt']['text'] = '资源：' + this['Gy']['lastVersion'] + '\x20\x20\x20\x20\x20\x20版本：' + this['Gy']['wxVersion'], this['showGetBtn']();
  }, g_lh69['prototype']['close'] = function (bv73pu) {
    this['resetWinFun'](), Laya['timer']['clear'](this, this['G$LY$']), Laya['timer']['clear'](this, this['GA']), gvqptw['instance']['closeLoading'](), this['getTipsBtn']['off'](Laya['Event']['CLICK'], this, this['GB']);
  }, g_lh69['prototype']['resetWinFun'] = function () {
    gg6_jh$['window']['G$LY$'] = function () {}, gg6_jh$['window']['G$L$Y'] = function () {};
  }, g_lh69['prototype']['destroy'] = function (r05ya4) {
    void 0x0 === r05ya4 && (r05ya4 = !0x0), this['resetWinFun'](), zfkdxs['prototype']['destroy']['call'](this, r05ya4);
  }, g_lh69['prototype']['showGetBtn'] = function () {
    this['Gy']['showGetBtn'] && 0x1 == this['Gy']['showGetBtn'] && (this['getTipsBtn']['visible'] = !0x0, this['getTipsBtn']['tag'] = !0x0, this['getTipsBtn']['skin'] = 'gggloding/g1a.png', this['getTipsBtn']['on'](Laya['Event']['CLICK'], this, this['GB']), this['GC'](), this['GD'](!0x0));
  }, g_lh69['prototype']['GB'] = function () {
    this['getTipsBtn']['tag'] && (this['getTipsBtn']['tag'] = !0x1, this['getTipsBtn']['skin'] = 'gggloding/g2a.png', this['GE'](), this['GD'](!0x1));
  }, g_lh69['prototype']['Gx'] = function (kxsd) {
    this['bgImg']['skin'] = kxsd['bgImgSkin'], this['topImg']['skin'] = kxsd['topImgSkin'], this['btmImg']['skin'] = kxsd['btmImgSkin'], this['leftImg']['skin'] = kxsd['leftImgSkin'], this['rightImg']['skin'] = kxsd['rightImgSkin'], this['copyRightImg']['bottom'] = kxsd['copyRightImgBottom'], this['processBox1']['y'] = kxsd['processBox1Y'], this['processBox2']['y'] = kxsd['processBox2Y'], this['loadingBarBg']['skin'] = kxsd['loadingBarBgSkin'], this['loadingTips']['fontSize'] = kxsd['loadingTipsSize'], this['getTipsBtn']['visible'] = this['Gy']['showGetBtn'] && 0x1 == this['Gy']['showGetBtn'], this['getTipsBtn']['visible'] ? this['GC']() : this['GE'](), this['GD'](this['getTipsBtn']['visible']);
  }, g_lh69['prototype']['GC'] = function () {
    this['GF'] || (this['GF'] = m4a250['create'](this['getTipsBtn'], 'gggwxeff', 0x4, 0x0, 0xc), this['GF']['pos'](0xa1, 0x6a), this['GF']['scale'](1.14, 1.15)), m4a250['play'](this['GF']);
  }, g_lh69['prototype']['GE'] = function () {
    this['GF'] && m4a250['stop'](this['GF']);
  }, g_lh69['prototype']['GD'] = function (ma0452) {
    Laya['timer']['clear'](this, this['GA']), ma0452 ? (this['GG'] = 0x9, this['txtGetTm']['visible'] = !0x0, this['GA'](), Laya['timer']['loop'](0x3e8, this, this['GA'])) : this['txtGetTm']['visible'] = !0x1;
  }, g_lh69['prototype']['GA'] = function () {
    0x0 < this['GG'] ? (this['txtGetTm']['text'] = '立即领取(' + this['GG'] + 's)', this['GG']--) : (this['txtGetTm']['text'] = '', Laya['timer']['clear'](this, this['GA']), this['GB']());
  }, $ji61g['LoadingPanel'] = g_lh69;
}(modules = modules || {}), function (o3bvu) {
  var eqto, yia0r1, e8ltq;function wlqe89() {
    var q8e9 = ptqvob['call'](this) || this;return q8e9['GH'] = 0x0, q8e9['GI'] = 'multi_notice_key', q8e9['GJ'] = 0x0, q8e9;
  }var ptqvob;eqto = o3bvu['Gd'] || (o3bvu['Gd'] = {}), yia0r1 = Laya['List'], e8ltq = Laya['Event'], ptqvob = gsx37zu['Gc'], gcm4a(wlqe89, ptqvob), wlqe89['prototype']['initialize'] = function () {
    ptqvob['prototype']['initialize']['call'](this), gvqptw['instance']['G$Q$YL8'](), this['centerX'] = 0x0, this['centerY'] = 0x0, this['Gy'] = gg6_jh$['window']['G$Y$'], this['GK'] = new yia0r1(), this['GK']['vScrollBarSkin'] = '', this['GK']['itemRender'] = eqto['SelectLeftListItem'], this['GK']['top'] = 0x5, this['GK']['repeatX'] = 0x1, this['GK']['spaceY'] = 0x5, this['GK']['width'] = this['leftListBox']['width'], this['GK']['height'] = this['leftListBox']['height'] - 0x8, this['leftListBox']['addChild'](this['GK']), this['GL'] = new yia0r1(), this['GL']['vScrollBarSkin'] = '', this['GL']['itemRender'] = eqto['SelectRightListItem'], this['GL']['top'] = 0x5, this['GL']['repeatX'] = 0x1, this['GL']['spaceY'] = 0x5, this['GL']['width'] = this['rightListBox']['width'], this['GL']['height'] = this['rightListBox']['height'] - 0x8, this['rightListBox']['addChild'](this['GL']), this['GM'] = new yia0r1(), this['GM']['hScrollBarSkin'] = '', this['GM']['itemRender'] = eqto['NoticeItem'], this['GM']['repeatY'] = 0x1, this['GM']['width'] = this['boxTab']['width'], this['GM']['height'] = this['boxTab']['height'], this['boxTab']['addChild'](this['GM']);var te8qwl = this['Gy']['loadingType'];this['GN'] = 0x1 != te8qwl && (0x2 == te8qwl || 0x3 == te8qwl) ? '#feffc0' : '#93353b', this['enterBtn']['size'](0x1fa, 0x58), this['noticeBtn']['visible'] = !0x1, gg6_jh$['window']['initPanel'] = this, G$LY$8(), this['addEvt'](), this['onOpened']();
  }, wlqe89['prototype']['addEvt'] = function () {
    this['bgImg']['on'](Laya['Event']['CLICK'], this, this['Ge']), this['enterBtn']['on'](Laya['Event']['CLICK'], this, this['GO']), this['selectServer']['on'](Laya['Event']['CLICK'], this, this['GP']), this['selectServer']['on'](Laya['Event']['CLICK'], this, this['GP']), this['closeBg']['on'](Laya['Event']['CLICK'], this, this['GQ']), this['noticeBtn']['on'](Laya['Event']['CLICK'], this, this['GR']), this['noticeClose']['on'](Laya['Event']['CLICK'], this, this['GS']), this['noticeContent']['on'](Laya['Event']['MOUSE_DOWN'], this, this['GT']), this['mNoticeClose']['on'](Laya['Event']['CLICK'], this, this['GU']), this['mNoticeContent']['on'](Laya['Event']['MOUSE_DOWN'], this, this['GV']), this['GM']['selectEnable'] = !0x0, this['GM']['selectHandler'] = Laya['Handler']['create'](this, this['GW'], null, !0x1);
  }, wlqe89['prototype']['rmEvts'] = function () {
    this['bgImg']['off'](Laya['Event']['CLICK'], this, this['Ge']), this['enterBtn']['off'](Laya['Event']['CLICK'], this, this['GO']), this['selectServer']['off'](Laya['Event']['CLICK'], this, this['GP']), this['selectServer']['off'](Laya['Event']['CLICK'], this, this['GP']), this['closeBg']['off'](Laya['Event']['CLICK'], this, this['GQ']), this['noticeBtn']['off'](Laya['Event']['CLICK'], this, this['GR']), this['noticeClose']['off'](Laya['Event']['CLICK'], this, this['GS']), this['noticeContent']['off'](Laya['Event']['MOUSE_DOWN'], this, this['GT']), this['mNoticeClose']['off'](Laya['Event']['CLICK'], this, this['GU']), this['mNoticeContent']['off'](Laya['Event']['MOUSE_DOWN'], this, this['GV']), this['GM']['selectEnable'] = !0x1, this['GM']['selectHandler'] = null;
  }, wlqe89['prototype']['onOpened'] = function () {
    this['Gf'] = Date['now'](), this['GX'] = this['Gy']['selectedServer']['server_id'], this['GY'](this['Gy']['selectedServer']), this['GK']['dataSource'] = this['Gy']['groupList'], this['GP'](), this['versionTxt']['text'] = '资源：' + this['Gy']['lastVersion'] + '\x20\x20\x20\x20\x20\x20版本：' + this['Gy']['wxVersion'], this['serverName']['color'] = this['selServer']['color'] = this['GN'], req_multi_server_notice(0x4, this['Gy']['pkgName'], this['Gy']['selectedServer']['server_id'], this['GZ']['bind'](this));
  }, wlqe89['prototype']['destroy'] = function (vb37u) {
    void 0x0 === vb37u && (vb37u = !0x0), this['rmEvts'](), this['GK'] && (this['GK']['removeSelf'](), this['GK']['destroy'](), this['GK'] = null), this['GL'] && (this['GL']['removeSelf'](), this['GL']['destroy'](), this['GL'] = null), this['GM'] && (this['GM']['removeSelf'](), this['GM']['destroy'](), this['GM'] = null), ptqvob['prototype']['destroy']['call'](this, vb37u);
  }, wlqe89['prototype']['Ge'] = function () {
    0x2710 < Date['now']() - this['Gf'] && (this['Gf'] -= 0x7d0, gvqptw['instance']['enterDefaultServer']());
  }, wlqe89['prototype']['GQ'] = function () {
    this['listBg']['visible'] = !0x1;
  }, wlqe89['prototype']['GO'] = function () {
    this['G$'](this['Gy']['selectedServer']) && (gg6_jh$['window']['G$Y$']['selectedServer'] = this['Gy']['selectedServer'], G$$LY8(0x0, this['Gy']['selectedServer']['server_id']));
  }, wlqe89['prototype']['GR'] = function () {
    this['noticeBg']['visible'] = !0x0, G$Y8L(this['Gy']['selectedServer']['server_id'], this['G_']['bind'](this));
  }, wlqe89['prototype']['GS'] = function () {
    this['noticeBg']['visible'] = !0x1;
  }, wlqe89['prototype']['GT'] = function () {
    this['GH'] = this['noticeContent']['mouseY'], Laya['stage']['on'](e8ltq['MOUSE_MOVE'], this, this['Gm']), Laya['stage']['on'](e8ltq['MOUSE_UP'], this, this['Gn']), Laya['stage']['on'](e8ltq['MOUSE_OUT'], this, this['Gn']);
  }, wlqe89['prototype']['Gm'] = function () {
    var eq8l9 = this['GH'] - this['noticeContent']['mouseY'];this['noticeContent']['scrollY'] += eq8l9, this['GH'] = this['noticeContent']['mouseY'];
  }, wlqe89['prototype']['Gn'] = function () {
    Laya['stage']['off'](e8ltq['MOUSE_MOVE'], this, this['Gm']), Laya['stage']['off'](e8ltq['MOUSE_UP'], this, this['Gn']), Laya['stage']['off'](e8ltq['MOUSE_OUT'], this, this['Gn']);
  }, wlqe89['prototype']['G$'] = function (g8l_h9) {
    return -0x1 == g8l_h9['status'] ? (alert('服务器维护中'), !0x1) : 0x0 != g8l_h9['status'] || (alert('服务器尚未开启，敬请期待'), !0x1);
  }, wlqe89['prototype']['GP'] = function () {
    this['Gy']['hasGroupReq'] ? this['listBg']['visible'] = !0x0 : (this['Gy']['hasGroupReq'] = !0x0, G$Y$8L(0x0));
  }, wlqe89['prototype']['GZ'] = function (pwqt) {
    console['log']('onMultiNoticeCallback, param = ', pwqt);var ehl9_8 = Date['now']() / 0x3e8,
        b3zx7u = localStorage['getItem'](this['GI']);if (this['Gaa'] = [], 'success' == pwqt['state']) for (var $_g6j in pwqt['data']) {
      var rj6$1i = pwqt['data'][$_g6j],
          y1$ij = ehl9_8 < rj6$1i['end_time'],
          wle8q9 = 0x1 == rj6$1i['pop_type'],
          $_g6j = 0x2 == rj6$1i['pop_type'] && rj6$1i['key'] + '' != b3zx7u;y1$ij && (wle8q9 || $_g6j) && this['Gaa']['push'](rj6$1i), $_g6j && localStorage['setItem'](this['GI'], rj6$1i['key'] + '');
    }this['Gaa']['sort'](function (r014a, qpowe) {
      return r014a['login_id'] - qpowe['login_id'];
    }), console['log']('onMultiNoticeCallback, datas = ', this['Gaa']), 0x0 < this['Gaa']['length'] && this['Gba']();
  }, wlqe89['prototype']['preload'] = function () {}, wlqe89['prototype']['getStatusSrc'] = function ($g6ij1) {
    var e89 = '';return 0x2 === $g6ij1 ? e89 = 'ggglogin/g18b.png' : 0x1 === $g6ij1 ? e89 = 'ggglogin/g19b.png' : -0x1 !== $g6ij1 && 0x0 !== $g6ij1 || (e89 = 'ggglogin/g20b.png'), e89;
  }, wlqe89['prototype']['GY'] = function (h_69l) {
    this['serverName']['text'] = -0x1 === h_69l['status'] ? h_69l['server_name'] + '(维护中)' : 0x0 === h_69l['status'] ? h_69l['server_name'] + '(待开服)' : h_69l['server_name'], this['serverName']['color'] = -0x1 === h_69l['status'] ? '#d50000' : 0x0 === h_69l['status'] ? '#49575a' : this['GN'], this['hotImage']['skin'] = this['getStatusSrc'](h_69l['status']), this['Gy']['cdn'] = h_69l['cdn'] || '', this['Gy']['selectedServer'] = h_69l, this['noticeBtn']['visible'] = !0x0;
  }, wlqe89['prototype']['Gca'] = function (ig1j6$) {
    this['showGroupList'](ig1j6$);
  }, wlqe89['prototype']['Gda'] = function (opuvb3) {
    this['GY'](opuvb3), this['listBg']['visible'] = !0x1;
  }, wlqe89['prototype']['G_'] = function (i1yr$j) {
    this['noticeContent']['text'] = i1yr$j['data']['content'] || '', this['noticeTitle']['text'] = i1yr$j['data']['title'] || '暂无公告';
  }, wlqe89['prototype']['showGroupList'] = function (zxfk7) {
    if (void 0x0 === zxfk7 && (zxfk7 = 0x0), this['parent']) {
      var tpovwq = this['Gy']['groupList'];if (tpovwq && 0x0 !== tpovwq['length']) {
        for (var gh_9 = tpovwq['length'], a402m = 0x0; a402m < gh_9; a402m++) tpovwq[a402m]['callBack'] = this['Gca']['bind'](this), tpovwq[a402m]['select'] = a402m == zxfk7, tpovwq[a402m]['index'] = a402m;var gi$1j6 = (this['GK']['array'] = tpovwq)[zxfk7]['id'];this['Gy']['serverList'][gi$1j6] ? this['showServerList'](gi$1j6) : this['Gy']['hasServerReq'] || (this['Gy']['hasServerReq'] = !0x0, -0x1 == gi$1j6 ? G$LY8(0x0) : -0x2 == gi$1j6 ? G$QY8$(0x0) : G$8YL(0x0, gi$1j6));
      }
    }
  }, wlqe89['prototype']['showServerList'] = function (sxkzdf) {
    if (this['parent'] && this['Gy']['serverList'][sxkzdf]) {
      for (var dksxfz = this['Gy']['serverList'][sxkzdf], e_9lw8 = dksxfz['length'], wqvt = 0x0; wqvt < e_9lw8; wqvt++) dksxfz[wqvt]['callBack'] = this['Gda']['bind'](this);this['GL']['array'] = dksxfz;
    }
  }, wlqe89['prototype']['Gba'] = function () {
    if (this['Gaa']) {
      this['GM']['x'] = 0x2 < this['Gaa']['length'] ? 0x0 : (this['boxTab']['width'] - 0x112 * this['Gaa']['length']) / 0x2;for (var xkdfsz = [], oeq8tw = 0x0; oeq8tw < this['Gaa']['length']; oeq8tw++) {
        var ryj0 = this['Gaa'][oeq8tw];xkdfsz['push']([ryj0, oeq8tw == this['GM']['selectedIndex']]);
      }this['GM']['dataSource'] = xkdfsz, this['GM']['selectedIndex'] = 0x0, this['GM']['scrollTo'](0x0);
    }this['mNoticeBg']['visible'] = !0x0;
  }, wlqe89['prototype']['GU'] = function () {
    this['mNoticeBg']['visible'] = !0x1;
  }, wlqe89['prototype']['GW'] = function () {
    if (this['GM']['dataSource']) {
      for (var c54m2a, _hj$g = 0x0; _hj$g < this['GM']['dataSource']['length']; _hj$g++) {
        var y1ri$ = this['GM']['dataSource'][_hj$g];y1ri$[0x1] = _hj$g == this['GM']['selectedIndex'], _hj$g == this['GM']['selectedIndex'] && (c54m2a = y1ri$[0x0]);
      }c54m2a && (this['mNoticeTitle']['text'] = c54m2a['title'] || 'null', this['mNoticeContent']['text'] = c54m2a['content'] || 'null');
    }
  }, wlqe89['prototype']['GV'] = function () {
    this['GJ'] = this['mNoticeContent']['mouseY'], Laya['stage']['on'](e8ltq['MOUSE_MOVE'], this, this['Gea']), Laya['stage']['on'](e8ltq['MOUSE_UP'], this, this['Gfa']), Laya['stage']['on'](e8ltq['MOUSE_OUT'], this, this['Gfa']);
  }, wlqe89['prototype']['Gea'] = function () {
    var mca524 = this['GJ'] - this['mNoticeContent']['mouseY'];this['mNoticeContent']['scrollY'] += mca524, this['GJ'] = this['mNoticeContent']['mouseY'];
  }, wlqe89['prototype']['Gfa'] = function () {
    Laya['stage']['off'](e8ltq['MOUSE_MOVE'], this, this['Gea']), Laya['stage']['off'](e8ltq['MOUSE_UP'], this, this['Gfa']), Laya['stage']['off'](e8ltq['MOUSE_OUT'], this, this['Gfa']);
  }, eqto['SelectServerPanel'] = wlqe89;
}(modules = modules || {});var modules,
    gg6_jh$ = Laya['Browser'],
    gy1ria0 = Laya['Font'],
    gi$1rj6 = Laya['Input'],
    gvzb7 = Laya['Render'],
    gvqtwpo = Laya['Handler'],
    gu3szx7 = modules['Gd']['AuthorizationPanel'],
    gvpu37 = modules['Gd']['LoadingPanel'],
    gcma42 = modules['Gd']['SelectServerPanel'],
    gvqptw = function () {
  function ubz37x(g9) {
    this['m_loadingRes'] = ['gggloding/g13a.png', 'gggloding/g15a.png', 'gggloding/g14a.png', 'gggloding/g16a.png', 'gggloding/g17a.png', 'gggloding/g18a.png', 'gggloding/g19a.png', 'gggloding/g20a.png', 'gggwxeff/g1c.png', 'gggwxeff/g2c.png', 'gggwxeff/g3c.png', 'gggwxeff/g4c.png', 'gggwxeff/g5c.png', 'gggloding/g3a.jpg', 'gggloding/g12a.jpg', 'gggloding/g1a.png', 'gggloding/g2a.png', 'gggloding/g4a.jpg', 'gggloding/g6a.jpg', 'gggloding/g8a.jpg', 'gggloding/g10a.jpg', 'gggloding/g5a.jpg', 'gggloding/g7a.jpg', 'gggloding/g9a.jpg', 'gggloding/g11a.jpg'], this['G$Q$Y8'] = ['ggglogin/g10b.png', 'ggglogin/g11b.png', 'ggglogin/g12b.png', 'ggglogin/g13b.png', 'ggglogin/g14b.png', 'ggglogin/g15b.png', 'ggglogin/g16b.png', 'ggglogin/g17b.png', 'ggglogin/g18b.png', 'ggglogin/g19b.png', 'ggglogin/g20b.png', 'ggglogin/g21b.png', 'ggglogin/g2b.jpg', 'ggglogin/g3b.jpg', 'ggglogin/g4b.jpg', 'ggglogin/g5b.jpg', 'ggglogin/g6b.jpg', 'ggglogin/g1b.png', 'ggglogin/g8b.png', 'ggglogin/g9b.png'], this['m_isPrelodServer'] = !0x1, this['m_isPrelodLoading'] = !0x1, this['Gga'] = !0x1, this['Gha'] = '', ubz37x['instance'] = this, Laya['MiniAdpter']['init'](), Laya3D['init'](0x0, 0x0, !0x1, !0x1, !0x1), DecodeTools['init'](), Laya['stage']['scaleMode'] = Laya['Stage']['SCALE_FIXED_WIDTH'], Laya['stage']['screenMode'] = Laya['Stage']['SCREEN_NONE'], Laya['stage']['alignH'] = Laya['Stage']['ALIGN_CENTER'], Laya['stage']['alignV'] = Laya['Stage']['ALIGN_MIDDLE'], Laya['stage']['frameRate'] = Laya['Stage']['FRAME_SLOW'];var _el89 = Laya['AtlasResourceManager'];_el89['maxTextureCount'] = 0x4, _el89['atlasTextureWidth'] = _el89['atlasTextureHeight'] = 0x400, _el89['_enable'](), Laya['URL']['rootPath'] = Laya['URL']['basePath'] = '', Laya['Browser']['window']['addEventListener'](Laya['Event']['RESIZE'], this['Gia']['bind'](this)), Laya['Loader']['preLoadedMap']['res/atlas/create_role_atlas.atlas'] = { 'frames': { 'btn_chuangjue_kaishi.png': { 'frame': { 'h': 0x58, 'idx': 0x0, 'w': 0x1fa, 'x': 0x0, 'y': 0x0 }, 'sourceSize': { 'h': 0x58, 'w': 0x1fa }, 'spriteSourceSize': { 'x': 0x0, 'y': 0x0 } }, 'btn_chuangjue_nan.png': { 'frame': { 'h': 0x62, 'idx': 0x0, 'w': 0x6c, 'x': 0x14f, 'y': 0x59 }, 'sourceSize': { 'h': 0x62, 'w': 0x6c }, 'spriteSourceSize': { 'x': 0x0, 'y': 0x0 } }, 'btn_chuangjue_nv.png': { 'frame': { 'h': 0x62, 'idx': 0x0, 'w': 0x6b, 'x': 0x0, 'y': 0xa4 }, 'sourceSize': { 'h': 0x62, 'w': 0x6b }, 'spriteSourceSize': { 'x': 0x0, 'y': 0x0 } }, 'image_chuangjue_mingbg.png': { 'frame': { 'h': 0x4a, 'idx': 0x0, 'w': 0x14e, 'x': 0x0, 'y': 0x59 }, 'sourceSize': { 'h': 0x4a, 'w': 0x14e }, 'spriteSourceSize': { 'x': 0x0, 'y': 0x0 } }, 'image_chuangjue_suiji.png': { 'frame': { 'h': 0x38, 'idx': 0x0, 'w': 0x34, 'x': 0x1bc, 'y': 0x59 }, 'sourceSize': { 'h': 0x38, 'w': 0x34 }, 'spriteSourceSize': { 'x': 0x0, 'y': 0x0 } } }, 'meta': { 'image': 'create_role_atlas.png', 'prefix': 'create_role_atlas/' } }, gg6_jh$['window']['resMgrLoad'] = ubz37x['instance']['G$Q$Y'], gg6_jh$['window']['imgMgrLoad'] = ubz37x['instance']['G$Q$Y'], this['m_layer'] = new Laya['Component'](), this['m_layer']['name'] = '_wxLoadingLayer', Laya['stage']['addChild'](this['m_layer']), this['Gia']();
  }return ubz37x['prototype']['G$L$8Y'] = function (pqotb) {
    ubz37x['instance']['m_layer']['visible'] = pqotb;
  }, ubz37x['prototype']['G$Q8$LY'] = function () {
    ubz37x['instance']['m_author'] || (ubz37x['instance']['m_author'] = new gu3szx7()), ubz37x['instance']['m_author']['parent'] || ubz37x['instance']['m_layer']['addChild'](ubz37x['instance']['m_author']), ubz37x['instance']['Gja']();
  }, ubz37x['prototype']['closeAuthor'] = function () {
    this['m_author'] && this['m_author']['parent'] && (Laya['stage']['removeChild'](this['m_author']), this['m_author']['destroy'](!0x0), this['m_author'] = null);
  }, ubz37x['prototype']['G$Q$YL8'] = function () {
    this['m_isPrelodServer'] || (this['m_isPrelodServer'] = !0x0, Laya['loader']['load'](this['G$Q$Y8'], gvqtwpo['create'](this, function () {
      gg6_jh$['window']['loadServerRes'] = !0x0, gg6_jh$['window']['G$$YL8'](), gg6_jh$['window']['G$$Y8L']();
    })));
  }, ubz37x['prototype']['openServer'] = function () {
    for (var qpote = function () {
      ubz37x['instance']['m_server'] || (ubz37x['instance']['m_server'] = new gcma42()), ubz37x['instance']['m_server']['parent'] || ubz37x['instance']['m_layer']['addChild'](ubz37x['instance']['m_server']), ubz37x['instance']['Gja']();
    }, zxs7uk = !0x0, hg_8 = 0x0, ew8oqt = this['G$Q$Y8']; hg_8 < ew8oqt['length']; hg_8++) {
      var zbv7u3 = ew8oqt[hg_8];if (null == Laya['Loader']['getRes'](zbv7u3)) {
        zxs7uk = !0x1;break;
      }
    }zxs7uk ? qpote() : Laya['loader']['load'](this['G$Q$Y8'], gvqtwpo['create'](this, qpote));
  }, ubz37x['prototype']['closeServer'] = function () {
    this['m_server'] && this['m_server']['parent'] && (Laya['stage']['removeChild'](this['m_server']), this['m_server']['destroy'](!0x0), this['m_server'] = null);
  }, ubz37x['prototype']['preloadLoading'] = function () {
    this['m_isPrelodLoading'] || (this['m_isPrelodLoading'] = !0x0, Laya['loader']['load'](this['m_loadingRes'], gvqtwpo['create'](this, function () {
      gg6_jh$['window']['loadLoadingRes'] = !0x0, gg6_jh$['window']['G$$YL8'](), gg6_jh$['window']['G$$Y8L']();
    })));
  }, ubz37x['prototype']['openLoading'] = function (i6gh) {
    void 0x0 === i6gh && (i6gh = 0x0), Laya['loader']['load'](this['m_loadingRes'], gvqtwpo['create'](this, function () {
      ubz37x['instance']['m_loading'] || (ubz37x['instance']['m_loading'] = new gvpu37(i6gh)), ubz37x['instance']['m_loading']['parent'] || ubz37x['instance']['m_layer']['addChild'](ubz37x['instance']['m_loading']), ubz37x['instance']['Gja']();
    }));
  }, ubz37x['prototype']['closeLoading'] = function () {
    this['m_loading'] && this['m_loading']['parent'] && (Laya['stage']['removeChild'](this['m_loading']), this['m_loading']['destroy'](!0x0), this['m_loading'] = null);for (var $6i1r = 0x0, ry40 = this['G$Q$Y8']; $6i1r < ry40['length']; $6i1r++) {
      var hl9g_ = ry40[$6i1r];Laya['Loader']['clearCache'](ubz37x['instance'], hl9g_), Laya['Loader']['clearRes'](hl9g_, !0x0);
    }for (var kszx = 0x0, g89h = this['m_loadingRes']; kszx < g89h['length']; kszx++) hl9g_ = g89h[kszx], Laya['Loader']['clearCache'](ubz37x['instance'], hl9g_), Laya['Loader']['clearRes'](hl9g_, !0x0);this['m_layer']['parent'] && this['m_layer']['parent']['removeChild'](this['m_layer']);
  }, ubz37x['prototype']['G$Q$'] = function () {
    this['m_loading'] && this['m_loading']['parent'] && ubz37x['instance']['m_loading']['showGetBtn']();
  }, ubz37x['prototype']['enterDefaultServer'] = function () {
    var c254am = gg6_jh$['window']['G$Y$']['selectedServer'];this['Gga'] || -0x1 == c254am['status'] || 0x0 == c254am['status'] || (this['Gga'] = !0x0, gg6_jh$['window']['G$Y$']['selectedServer'] = c254am, G$$LY8(0x0, c254am['server_id']));
  }, ubz37x['prototype']['sendRecord'] = function () {
    var u37bvp = '';u37bvp += 'newRegister=' + gg6_jh$['window']['G$Y$']['newRegister'], u37bvp += ', isPrelodServer=' + this['m_isPrelodServer'], u37bvp += ', SelectServerPanel=' + (null != ubz37x['instance']['m_server']), u37bvp += ', isPrelodLoading=' + this['m_isPrelodLoading'], u37bvp += ', LoadingPanel=' + (null != ubz37x['instance']['m_loading']), u37bvp += ', resMgrLoad=' + (gg6_jh$['window']['resMgrLoad'] == ubz37x['instance']['G$Q$Y']), u37bvp += ', imgMgrLoad=' + (gg6_jh$['window']['imgMgrLoad'] == ubz37x['instance']['G$Q$Y']), u37bvp += ', errUrls=' + ubz37x['instance']['Gha'];for (var btqo = 0x0, gl69_h = this['G$Q$Y8']; btqo < gl69_h['length']; btqo++) u37bvp += ',\x20' + (obupv3 = gl69_h[btqo]) + '=' + (null != Laya['Loader']['getRes'](obupv3));for (var epwtqo = 0x0, wltq = this['m_loadingRes']; epwtqo < wltq['length']; epwtqo++) {
      var obupv3;u37bvp += ',\x20' + (obupv3 = wltq[epwtqo]) + '=' + (null != Laya['Loader']['getRes'](obupv3));
    }var b3x7u = gg6_jh$['window']['G$Y$']['selectedServer'];b3x7u && (u37bvp += ', server_status=' + b3x7u['status'], u37bvp += ', server_id=' + b3x7u['server_id'], u37bvp += ', server_name=' + b3x7u['server_name']), b3x7u = JSON['stringify']({ 'error': '初始界面超过10秒', 'stack': u37bvp }), (console['error'](b3x7u), this['Gka'] && this['Gka'] == u37bvp || (this['Gka'] = u37bvp, G$YL$(b3x7u)));
  }, ubz37x['prototype']['Gla'] = function () {
    var u3vobp = Laya['stage'],
        pu3v7b = Math['floor'](u3vobp['width']),
        eh_8l9 = Math['floor'](u3vobp['height']);eh_8l9 / pu3v7b < 1.7777778 ? (this['viewW'] = Math['floor'](pu3v7b / (eh_8l9 / 0x500)), this['viewH'] = 0x500, this['viewS'] = eh_8l9 / 0x500) : (this['viewW'] = 0x2d0, this['viewH'] = Math['floor'](eh_8l9 / (pu3v7b / 0x2d0)), this['viewS'] = pu3v7b / 0x2d0), (pu3v7b = Math['floor'](u3vobp['width']), u3vobp = Math['floor'](u3vobp['height'])), (u3vobp / pu3v7b < 1.7777778 ? (this['viewW'] = Math['floor'](pu3v7b / (u3vobp / 0x500)), this['viewH'] = 0x500, this['viewS'] = u3vobp / 0x500) : (this['viewW'] = 0x2d0, this['viewH'] = Math['floor'](u3vobp / (pu3v7b / 0x2d0)), this['viewS'] = pu3v7b / 0x2d0), this['Gja']());
  }, ubz37x['prototype']['Gja'] = function () {
    this['m_layer'] && (this['m_layer']['size'](this['viewW'], this['viewH']), this['m_layer']['scale'](this['viewS'], this['viewS'], !0x0));
  }, ubz37x['prototype']['Gia'] = function () {
    if (gi$1rj6['isInputting'] && gg6_jh$['onMobile']) {
      var _lh9e8 = parseInt(gi$1rj6['inputContainer']['style']['top']['replace']('px', '')),
          b7zuv = parseInt(gi$1rj6['inputElement']['style']['height']['replace']('px', '')) * this['viewS'],
          ry41 = gg6_jh$['clientWidth'] / gvzb7['canvas']['width'];return 0x0 < (_lh9e8 = gg6_jh$['clientHeight'] - b7zuv * ry41 - _lh9e8) && (_lh9e8 = 0x0), void (gg6_jh$['container']['style']['top'] = _lh9e8 + 'px');
    }gg6_jh$['container']['style']['top'] = '0px', b7zuv = (b7zuv = Math['floor'](gg6_jh$['width'])) + 0x1 & 0x7ffffffe, ry41 = (ry41 = Math['floor'](gg6_jh$['height'])) + 0x1 & 0x7ffffffe, _lh9e8 = Laya['stage'], (0x3 == ENV || ry41 < b7zuv ? (_lh9e8['scaleMode'] = Laya['Stage']['SCALE_NOSCALE'], _lh9e8['width'] = b7zuv, _lh9e8['height'] = ry41) : (_lh9e8['scaleMode'] = Laya['Stage']['SCALE_FIXED_WIDTH'], _lh9e8['width'] = 0x348, _lh9e8['height'] = Math['floor'](ry41 / (b7zuv / 0x348)) + 0x1 & 0x7ffffffe), this['Gla']());
  }, ubz37x['prototype']['G$Q$Y'] = function (twepoq, g1j) {
    function _l98w() {
      sfkzdx['onload'] = null, sfkzdx['onerror'] = null;
    }var sfkzdx,
        $rjiy1 = twepoq;(sfkzdx = new gg6_jh$['window']['Image']())['onload'] = function () {
      _l98w(), g1j($rjiy1, 0xc8, sfkzdx);
    }, sfkzdx['onerror'] = function () {
      console['warn']('[warn] WX loadImage onerror:', $rjiy1), ubz37x['instance']['Gha'] += $rjiy1 + '|', _l98w(), g1j($rjiy1, 0x194, null);
    }, sfkzdx['src'] = $rjiy1, -0x1 == ubz37x['instance']['G$Q$Y8']['indexOf']($rjiy1) && -0x1 == ubz37x['instance']['m_loadingRes']['indexOf']($rjiy1) || Laya['Loader']['keepCache'](ubz37x['instance'], $rjiy1);
  }, ubz37x['prototype']['Goa'] = function (g89hl_, a402) {
    return -0x1 != g89hl_['indexOf'](a402, g89hl_['length'] - a402['length']);
  }, ubz37x;
}();!function (fsxk7z) {
  function wtpoeq() {
    var b3tpv = sxz7u['call'](this) || this;return b3tpv['Gpa'] = '#72441d', b3tpv['Gqa'] = '#263d7d', b3tpv['width'] = 0x112, b3tpv['height'] = 0x3b, b3tpv['Gra'] = new Laya['Image'](), b3tpv['addChild'](b3tpv['Gra']), b3tpv['Gsa'] = new Laya['Label'](), b3tpv['Gsa']['fontSize'] = 0x1e, b3tpv['Gsa']['color'] = b3tpv['Gqa'], b3tpv['addChild'](b3tpv['Gsa']), b3tpv['Gsa']['centerX'] = 0x0, b3tpv['Gsa']['centerY'] = 0x0, b3tpv;
  }var sxz7u;fsxk7z = fsxk7z['Gd'] || (fsxk7z['Gd'] = {}), sxz7u = Laya['View'], gcm4a(wtpoeq, sxz7u), wtpoeq['prototype']['initialize'] = function () {
    sxz7u['prototype']['initialize']['call'](this), this['Gy'] = gg6_jh$['window']['G$Y$'], this['Gy']['loadingType'], this['addEvt']();
  }, Object['defineProperty'](wtpoeq['prototype'], 'dataSource', { 'set': function ($yjri1) {
      $yjri1 && this['setData']($yjri1);
    }, 'enumerable': !0x0, 'configurable': !0x0 }), wtpoeq['prototype']['setData'] = function (iy1ar0) {
    this['Gta'] = iy1ar0[0x0], this['Gua'] = iy1ar0[0x1], this['Gsa']['text'] = this['Gta']['title'], this['Gsa']['color'] = this['Gua'] ? this['Gpa'] : this['Gqa'], this['Gra']['skin'] = this['Gua'] ? 'ggglogin/g25b.png' : 'ggglogin/g24b.png';
  }, wtpoeq['prototype']['destroy'] = function (g8h9_l) {
    void 0x0 === g8h9_l && (g8h9_l = !0x0), this['rmEvts'](), sxz7u['prototype']['destroy']['call'](this, g8h9_l);
  }, wtpoeq['prototype']['addEvt'] = function () {}, wtpoeq['prototype']['rmEvts'] = function () {}, fsxk7z['NoticeItem'] = wtpoeq;
}(modules = modules || {}), function (pu3bo) {
  function i$j6r() {
    var a5ry0 = ewq8lt['call'](this) || this;return a5ry0['width'] = 0xc0, a5ry0['height'] = 0x46, a5ry0['Gra'] = new Laya['Image'](), a5ry0['addChild'](a5ry0['Gra']), a5ry0['Gsa'] = new Laya['Label'](), a5ry0['Gsa']['fontSize'] = 0x1e, a5ry0['Gsa']['color'] = a5ry0['GN'], a5ry0['addChild'](a5ry0['Gsa']), a5ry0['Gsa']['centerX'] = 0x0, a5ry0['Gsa']['centerY'] = 0x0, a5ry0;
  }var ewq8lt;pu3bo = pu3bo['Gd'] || (pu3bo['Gd'] = {}), ewq8lt = Laya['View'], gcm4a(i$j6r, ewq8lt), i$j6r['prototype']['initialize'] = function () {
    ewq8lt['prototype']['initialize']['call'](this), this['Gy'] = gg6_jh$['window']['G$Y$'];var z7xks = this['Gy']['loadingType'];this['GN'] = 0x1 != z7xks && 0x2 != z7xks && 0x3 == z7xks ? '#763042' : '#263d7d', this['addEvt']();
  }, Object['defineProperty'](i$j6r['prototype'], 'dataSource', { 'set': function (j01riy) {
      j01riy && this['setData'](j01riy);
    }, 'enumerable': !0x0, 'configurable': !0x0 }), i$j6r['prototype']['setData'] = function (up37vb) {
    this['Gta'] = up37vb, this['Gsa']['text'] = up37vb['name'], this['Gra']['skin'] = up37vb['select'] ? 'ggglogin/g14b.png' : 'ggglogin/g15b.png';
  }, i$j6r['prototype']['destroy'] = function (o3ubp) {
    void 0x0 === o3ubp && (o3ubp = !0x0), this['rmEvts'](), ewq8lt['prototype']['destroy']['call'](this, o3ubp);
  }, i$j6r['prototype']['addEvt'] = function () {
    this['on'](Laya['Event']['MOUSE_UP'], this, this['clkHdler']);
  }, i$j6r['prototype']['rmEvts'] = function () {
    this['off'](Laya['Event']['MOUSE_UP'], this, this['clkHdler']);
  }, i$j6r['prototype']['clkHdler'] = function () {
    this['Gta'] && this['Gta']['callBack'] && this['Gta']['callBack'](this['Gta']['index']);
  }, pu3bo['SelectLeftListItem'] = i$j6r;
}(modules = modules || {}), function (bv37z) {
  function y4r05a() {
    var rjy$i = szfdxk['call'](this) || this;return rjy$i['Gra'] = new Laya['Image']('ggglogin/g16b.png'), rjy$i['Gsa'] = new Laya['Label'](), rjy$i['Gsa']['fontSize'] = 0x1e, rjy$i['Gsa']['color'] = rjy$i['GN'], rjy$i['addChild'](rjy$i['Gra']), rjy$i['Gva'] = new Laya['Image'](), rjy$i['addChild'](rjy$i['Gva']), rjy$i['width'] = 0x166, rjy$i['height'] = 0x46, rjy$i['addChild'](rjy$i['Gsa']), rjy$i['Gva']['centerY'] = 0x0, rjy$i['Gva']['x'] = 0x12, rjy$i['Gsa']['x'] = 0x50, rjy$i['Gsa']['centerY'] = 0x0, rjy$i['Gra']['graphics']['drawRect'](0x0, 0x0, rjy$i['width'], rjy$i['height'], '#00sasd'), rjy$i;
  }var szfdxk;bv37z = bv37z['Gd'] || (bv37z['Gd'] = {}), szfdxk = Laya['View'], gcm4a(y4r05a, szfdxk), y4r05a['prototype']['initialize'] = function () {
    szfdxk['prototype']['initialize']['call'](this), this['Gy'] = gg6_jh$['window']['G$Y$'];var m24a5c = this['Gy']['loadingType'];this['GN'] = 0x1 != m24a5c && 0x2 != m24a5c && 0x3 == m24a5c ? '#763042' : '#34267d', this['addEvt']();
  }, Object['defineProperty'](y4r05a['prototype'], 'dataSource', { 'set': function (g_l9h6) {
      g_l9h6 && this['setData'](g_l9h6);
    }, 'enumerable': !0x0, 'configurable': !0x0 }), y4r05a['prototype']['setData'] = function (o3tbp) {
    this['Gta'] = o3tbp, this['Gsa']['color'] = -0x1 === o3tbp['status'] ? '#d50000' : 0x0 === o3tbp['status'] ? '#49575a' : this['GN'], this['Gsa']['text'] = -0x1 === o3tbp['status'] ? o3tbp['server_name'] + '(维护中)' : 0x0 === o3tbp['status'] ? o3tbp['server_name'] + '(待开服)' : o3tbp['server_name'], this['Gva']['skin'] = this['getStatusSrc'](o3tbp['status']);
  }, y4r05a['prototype']['destroy'] = function (_$g6j) {
    void 0x0 === _$g6j && (_$g6j = !0x0), this['rmEvts'](), szfdxk['prototype']['destroy']['call'](this, _$g6j);
  }, y4r05a['prototype']['addEvt'] = function () {
    this['on'](Laya['Event']['MOUSE_UP'], this, this['clkHdler']);
  }, y4r05a['prototype']['rmEvts'] = function () {
    this['off'](Laya['Event']['MOUSE_UP'], this, this['clkHdler']);
  }, y4r05a['prototype']['clkHdler'] = function () {
    this['Gta'] && this['Gta']['callBack'] && this['Gta']['callBack'](this['Gta']);
  }, y4r05a['prototype']['getStatusSrc'] = function (xku7sz) {
    var zs7xkf = '';return 0x2 === xku7sz ? zs7xkf = 'ggglogin/g18b.png' : 0x1 === xku7sz ? zs7xkf = 'ggglogin/g19b.png' : -0x1 !== xku7sz && 0x0 !== xku7sz || (zs7xkf = 'ggglogin/g20b.png'), zs7xkf;
  }, bv37z['SelectRightListItem'] = y4r05a;
}(modules = modules || {}), window['ServerLoading'] = gvqptw;