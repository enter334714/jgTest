'use strict';

var i = wx.$R;
var r_rpgeq7,
    r_x2st3 = this && this[i[280257]] || function () {
  var zs2xj = Object['setPrototypeOf'] || { '__proto__': [] } instanceof Array && function (wrkgm7, ykiwo) {
    wrkgm7['__proto__'] = ykiwo;
  } || function (o8iwky, deqfpg) {
    for (var rw7mk8 in deqfpg) deqfpg['hasOwnProperty'](rw7mk8) && (o8iwky[rw7mk8] = deqfpg[rw7mk8]);
  };return function (rmk8yw, o8wkyi) {
    function vsz3t() {
      this['constructor'] = rmk8yw;
    }zs2xj(rmk8yw, o8wkyi), rmk8yw['prototype'] = null === o8wkyi ? Object['create'](o8wkyi) : (vsz3t['prototype'] = o8wkyi['prototype'], new vsz3t());
  };
}(),
    r_nh_c6 = laya['ui'][i[280258]],
    r_x2zsij = laya['ui'][i[280259]];!function (i8xyoj) {
  var df5pc = function (grep7q) {
    function j2ix() {
      return grep7q[i[280260]](this) || this;
    }return r_x2st3(j2ix, grep7q), j2ix['prototype']['createChildren'] = function () {
      grep7q['prototype']['createChildren'][i[280260]](this), this['createView'](i8xyoj['rS'][i[280261]]);
    }, j2ix[i[280261]] = { 'type': i[280258], 'props': { 'width': 0x2d0, 'name': 'P_WXAuthorizationViewUI', 'height': 0x500 }, 'child': [{ 'type': i[280262], 'props': { 'width': 0x2d0, 'var': i[280263], 'skin': 'rrlgr/r2b.jpg', 'name': 'bg', 'height': 0x500, 'centerY': 0x0, 'centerX': 0x0 } }, { 'type': i[280264], 'props': { 'y': 0x0, 'width': 0x2d0, 'right': 0x0, 'height': 0x500 }, 'child': [{ 'type': i[280262], 'props': { 'width': 0x2d0, 'var': i[280265], 'top': -0x8b, 'skin': 'rrlgr/r6b.jpg', 'height': 0x8b, 'centerX': 0x0, 'anchorY': 0x1 } }, { 'type': i[280262], 'props': { 'width': 0x2d0, 'var': i[280266], 'top': 0x500, 'skin': 'rrlgr/r3b.jpg', 'height': 0x8b, 'centerX': 0x0 } }, { 'type': i[280262], 'props': { 'x': -0xdc, 'width': 0xdc, 'var': i[280267], 'skin': 'rrlgr/r4b.jpg', 'left': -0xdc, 'height': 0x500, 'centerY': 0x0 } }, { 'type': i[280262], 'props': { 'width': 0xdc, 'var': 'rightImg', 'skin': 'rrlgr/r5b.jpg', 'left': 0x2d0, 'height': 0x500, 'centerY': 0x0 } }] }] }, j2ix;
  }(r_nh_c6);i8xyoj['rS'] = df5pc;
}(r_rpgeq7 || (r_rpgeq7 = {})), function (zl2t) {
  var a16_h = function (qmer7) {
    function gdqe7p() {
      return qmer7[i[280260]](this) || this;
    }return r_x2st3(gdqe7p, qmer7), gdqe7p['prototype']['createChildren'] = function () {
      qmer7['prototype']['createChildren'][i[280260]](this), this['createView'](zl2t['rQ'][i[280261]]);
    }, gdqe7p[i[280261]] = { 'type': i[280258], 'props': { 'width': 0x2d0, 'name': i[280268], 'height': 0x500 }, 'child': [{ 'type': i[280262], 'props': { 'width': 0x2d0, 'var': i[280263], 'name': 'bg', 'height': 0x500, 'centerY': 0x0, 'centerX': 0x0 } }, { 'type': i[280264], 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x2d0, 'height': 0x500 }, 'child': [{ 'type': i[280262], 'props': { 'var': i[280265], 'centerX': 0x0, 'bottom': 0x500, 'anchorY': 0x1 } }, { 'type': i[280262], 'props': { 'var': i[280266], 'top': 0x500, 'centerX': 0x0 } }, { 'type': i[280262], 'props': { 'var': i[280267], 'right': 0x2d0, 'pivotX': 0x1, 'centerY': 0x0 } }, { 'type': i[280262], 'props': { 'var': 'rightImg', 'left': 0x2d0, 'centerY': 0x0 } }] }, { 'type': i[280262], 'props': { 'var': i[280269], 'skin': 'rrlgr/r1b.png', 'centerX': 0x0, 'bottom': 0xa } }, { 'type': i[280264], 'props': { 'y': 0x3c3, 'x': 0x0, 'width': 0x2d0, 'var': 'processBox1', 'name': 'processBox1', 'height': 0x82 }, 'child': [{ 'type': i[280262], 'props': { 'y': 0x2e, 'x': 0x3e, 'width': 0x254, 'var': 'loadingBarBg', 'skin': 'rrdirr/r13a.png', 'height': 0x1b, 'centerX': 0x0 } }, { 'type': i[280262], 'props': { 'y': 0x31, 'x': 0x40, 'width': 0x24e, 'var': 'loadingBar', 'skin': 'rrdirr/r14a.png', 'height': 0x15 } }, { 'type': i[280262], 'props': { 'y': 0x37, 'x': 0x1fb, 'width': 0xd0, 'var': i[280270], 'skin': 'rrdirr/r16a.png', 'height': 0xb } }, { 'type': i[280262], 'props': { 'y': 0x6, 'x': 0x274, 'width': 0x27, 'var': i[280271], 'skin': 'rrdirr/r17a.png', 'height': 0x74 } }, { 'type': i[280272], 'props': { 'y': 0x30, 'x': 0x125, 'width': 0x86, 'var': 'percentageTips', 'valign': i[280273], 'text': i[280274], 'strokeColor': i[280275], 'stroke': 0x3, 'height': 0x18, 'fontSize': 0x18, 'color': i[280276], 'centerX': 0x0, 'bold': !0x1, 'align': 'center' } }] }, { 'type': i[280264], 'props': { 'y': 0x429, 'x': 0x0, 'width': 0x2d0, 'var': 'processBox2', 'name': 'processBox2', 'height': 0x11 }, 'child': [{ 'type': i[280262], 'props': { 'y': 0x0, 'x': 0x133, 'var': i[280277], 'skin': 'rrdirr/r20a.png', 'centerX': -0x2d } }, { 'type': i[280262], 'props': { 'y': 0x0, 'x': 0x151, 'var': i[280278], 'skin': 'rrdirr/r19a.png', 'centerX': -0xf } }, { 'type': i[280262], 'props': { 'y': 0x0, 'x': 0x16f, 'var': i[280279], 'skin': 'rrdirr/r18a.png', 'centerX': 0xf } }, { 'type': i[280262], 'props': { 'y': 0x0, 'x': 0x18d, 'var': i[280280], 'skin': 'rrdirr/r18a.png', 'centerX': 0x2d } }] }, { 'type': i[280281], 'props': { 'y': 0x316, 'x': 0x37, 'visible': !0x1, 'var': i[280282], 'stateNum': 0x1, 'skin': 'rrdirr/r1a.png', 'name': i[280282], 'labelSize': 0x1e, 'labelFont': i[280283], 'labelColors': i[280284] }, 'child': [{ 'type': i[280272], 'props': { 'y': 0x9b, 'x': 0x92, 'width': 0x143, 'var': i[280285], 'text': i[280286], 'name': i[280285], 'height': 0x1e, 'fontSize': 0x1e, 'color': i[280287], 'align': 'center' } }] }, { 'type': i[280272], 'props': { 'y': 0x453, 'width': 0x1f4, 'var': i[280288], 'valign': i[280273], 'text': i[280289], 'height': 0x1a, 'fontSize': 0x1a, 'color': i[280290], 'centerX': 0x0, 'bold': !0x1, 'align': 'center' } }, { 'type': i[280272], 'props': { 'y': 0xa, 'x': 0xa, 'width': 0x156, 'var': 'versionTxt', 'valign': i[280273], 'top': 0x14, 'text': i[280291], 'strokeColor': i[280292], 'stroke': 0x2, 'right': 0x14, 'height': 0x20, 'fontSize': 0x18, 'color': i[280293], 'bold': !0x1, 'align': 'right' } }] }, gdqe7p;
  }(r_nh_c6);zl2t['rQ'] = a16_h;
}(r_rpgeq7 || (r_rpgeq7 = {})), function (cdnf6) {
  var _au16 = function (r7meq) {
    function mgwk7() {
      return r7meq[i[280260]](this) || this;
    }return r_x2st3(mgwk7, r7meq), mgwk7['prototype']['createChildren'] = function () {
      r_nh_c6['regComponent'](i[280294], laya[i[280295]][i[280294]]), r_nh_c6['regComponent'](i[280296], laya[i[280297]][i[280298]][i[280296]]), r7meq['prototype']['createChildren'][i[280260]](this), this['createView'](cdnf6['re'][i[280261]]);
    }, mgwk7[i[280261]] = { 'type': i[280258], 'props': { 'width': 0x2d0, 'name': 'P_SelectServerViewUI', 'height': 0x500 }, 'child': [{ 'type': i[280262], 'props': { 'width': 0x2d0, 'var': i[280263], 'skin': 'rrlgr/r2b.jpg', 'name': 'bg', 'height': 0x500, 'centerY': 0x0, 'centerX': 0x0 } }, { 'type': i[280264], 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x2d0, 'height': 0x500 }, 'child': [{ 'type': i[280262], 'props': { 'width': 0x2d0, 'var': i[280265], 'skin': 'rrlgr/r6b.jpg', 'bottom': 0x4ff } }, { 'type': i[280262], 'props': { 'width': 0x2d0, 'var': i[280266], 'top': 0x4ff, 'skin': 'rrlgr/r3b.jpg' } }, { 'type': i[280262], 'props': { 'var': i[280267], 'skin': 'rrlgr/r4b.jpg', 'right': 0x2cf, 'height': 0x500 } }, { 'type': i[280262], 'props': { 'var': 'rightImg', 'skin': 'rrlgr/r5b.jpg', 'left': 0x2cf, 'height': 0x500 } }] }, { 'type': i[280262], 'props': { 'y': 0x34d, 'var': 'selectServer', 'skin': 'rrlgr/r21b.png', 'centerX': 0x0 } }, { 'type': i[280262], 'props': { 'y': 0x457, 'var': i[280299], 'skin': 'rrlgr/r27b.png', 'name': i[280299], 'centerX': 0x0 } }, { 'type': i[280262], 'props': { 'y': 0x3a2, 'x': 0xa2, 'var': i[280300], 'skin': 'rrlgr/r18b.png' } }, { 'type': i[280262], 'props': { 'var': i[280269], 'skin': 'rrlgr/r1b.png', 'centerX': 0x0, 'bottom': 0xa } }, { 'type': i[280262], 'props': { 'y': 0x3f7, 'var': 'enterBtn', 'stateNum': 0x1, 'skin': 'rrlgr/r12b.png', 'name': 'enterBtn', 'centerX': 0x0 } }, { 'type': i[280272], 'props': { 'y': 0x3a4, 'x': 0x209, 'var': 'selServer', 'valign': i[280273], 'text': i[280301], 'height': 0x20, 'fontSize': 0x1e, 'color': i[280302], 'bold': !0x1, 'align': 'center' } }, { 'type': i[280272], 'props': { 'y': 0x3a4, 'width': 0x156, 'var': 'serverName', 'valign': i[280273], 'text': i[280303], 'height': 0x20, 'fontSize': 0x1e, 'color': i[280302], 'centerX': 0x0, 'bold': !0x1, 'align': 'center' } }, { 'type': i[280272], 'props': { 'width': 0x156, 'var': 'versionTxt', 'valign': i[280273], 'top': 0x14, 'text': i[280291], 'strokeColor': i[280292], 'stroke': 0x2, 'right': 0x14, 'height': 0x20, 'fontSize': 0x18, 'color': i[280293], 'bold': !0x1, 'align': 'right' } }, { 'type': i[280262], 'props': { 'y': 0x7f, 'x': 593.5, 'var': i[280304], 'skin': 'rrlgr/r11b.png' } }, { 'type': i[280262], 'props': { 'y': 0x47, 'x': -0x2, 'visible': !0x1, 'var': i[280305], 'skin': 'rrlgr/r8b.png', 'centerY': 0x0, 'centerX': 0x0 }, 'child': [{ 'type': i[280262], 'props': { 'y': 36.5, 'x': 0x268, 'var': i[280306], 'skin': 'rrlgr/r10b.png' } }, { 'type': i[280272], 'props': { 'y': 0x48, 'x': 0xd8, 'width': 0xea, 'var': i[280307], 'valign': i[280273], 'text': i[280308], 'height': 0x23, 'fontSize': 0x1e, 'color': i[280309], 'bold': !0x1, 'align': 'center' } }, { 'type': i[280294], 'props': { 'y': 0x8e, 'x': 0x3d, 'wordWrap': !0x0, 'width': 0x221, 'var': i[280310], 'valign': i[280062], 'overflow': 'scroll', 'mouseEnabled': !0x0, 'leading': 0x4, 'height': 0x366, 'fontSize': 0x1a, 'color': i[280311] } }] }, { 'type': i[280262], 'props': { 'y': 0x71, 'x': 0x21, 'visible': !0x1, 'var': i[280312], 'skin': 'rrlgr/r26b.png', 'centerY': 0x0, 'centerX': 0x0 }, 'child': [{ 'type': i[280262], 'props': { 'y': 36.5, 'x': 0x268, 'var': i[280313], 'skin': 'rrlgr/r10b.png' } }, { 'type': i[280281], 'props': { 'y': 0x388, 'x': 0xbe, 'var': i[280314], 'stateNum': 0x1, 'skin': 'rrlgr/r25b.png', 'labelSize': 0x1e, 'labelColors': i[280315], 'label': i[280316] } }, { 'type': i[280264], 'props': { 'y': 0x388, 'x': 0x22, 'width': 0x254, 'var': i[280317], 'height': 0x3b } }, { 'type': i[280272], 'props': { 'y': 0x48, 'x': 0xd8, 'width': 0xea, 'var': i[280318], 'valign': i[280273], 'text': i[280308], 'height': 0x23, 'fontSize': 0x1e, 'color': i[280309], 'bold': !0x1, 'align': 'center' } }, { 'type': i[280319], 'props': { 'y': 0x8e, 'x': 0x3d, 'width': 0x221, 'var': i[280320], 'height': 0x2dd }, 'child': [{ 'type': i[280296], 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x221, 'var': i[280321], 'height': 0x2dd } }] }] }, { 'type': i[280262], 'props': { 'visible': !0x1, 'var': i[280322], 'skin': 'rrlgr/r9b.png', 'centerY': 0x0, 'centerX': 0x0 }, 'child': [{ 'type': i[280264], 'props': { 'y': 0x75, 'x': 0x3d, 'width': 0xc8, 'var': i[280323], 'height': 0x389 } }, { 'type': i[280264], 'props': { 'y': 0x75, 'x': 0x125, 'width': 0x166, 'var': 'rightListBox', 'height': 0x389 } }, { 'type': i[280262], 'props': { 'y': 0xd, 'x': 0x282, 'var': i[280324], 'skin': 'rrlgr/r17b.png' } }] }] }, mgwk7;
  }(r_nh_c6);cdnf6['re'] = _au16;
}(r_rpgeq7 || (r_rpgeq7 = {})), function (a1h_ub) {
  var iojz2x, ojiyx8;iojz2x = a1h_ub['rl'] || (a1h_ub['rl'] = {}), ojiyx8 = function (a419$b) {
    function j2xzi() {
      return a419$b[i[280260]](this) || this;
    }return r_x2st3(j2xzi, a419$b), j2xzi['prototype'][i[280325]] = function () {
      a419$b['prototype'][i[280325]][i[280260]](this), this['centerX'] = 0x0, this['centerY'] = 0x0, this[i[280326]](), this[i[280327]]();
    }, j2xzi['prototype'][i[280326]] = function () {
      this['on'](Laya[i[280328]][i[280329]], this, this['rM']);
    }, j2xzi['prototype']['rmEvts'] = function () {
      this[i[280330]](Laya[i[280328]][i[280329]], this, this['rM']);
    }, j2xzi['prototype'][i[280327]] = function () {
      this['rd'] = Date[i[280110]](), r_fpqn[i[280014]]['_rUEYSF'](), r_fpqn[i[280014]]['preloadLoading']();
    }, j2xzi['prototype']['destroy'] = function (sv3l) {
      void 0x0 === sv3l && (sv3l = !0x0), this['rmEvts'](), a419$b['prototype']['destroy'][i[280260]](this, sv3l);
    }, j2xzi['prototype']['rM'] = function () {
      0x2710 < Date[i[280110]]() - this['rd'] && (this['rd'] -= 0x3e8, r_cf5pnd[i[280331]]['_rYE']['selectedServer']['server_id'] && (r_fpqn[i[280014]]['enterDefaultServer'](), r_fpqn[i[280014]]['sendRecord']()));
    }, j2xzi;
  }(r_rpgeq7['rS']), iojz2x['AuthorizationPanel'] = ojiyx8;
}(modules || (modules = {})), function (au_h1) {
  var oykmw, ow, r7gmqe, dg7ep, ub_a$, pfdge;oykmw = au_h1['rT'] || (au_h1['rT'] = {}), ow = Laya[i[280328]], r7gmqe = Laya[i[280262]], dg7ep = Laya[i[280332]], ub_a$ = Laya['Loader'], pfdge = function (dfn6c) {
    function _1b$ua() {
      var qr7p = dfn6c[i[280260]](this) || this;return qr7p['rU'] = new r7gmqe(), qr7p[i[280333]](qr7p['rU']), qr7p['ri'] = null, qr7p['rR'] = [], qr7p['ro'] = !0x1, qr7p['rY'] = 0x0, qr7p['rp'] = !0x0, qr7p['rJ'] = 0x6, qr7p['rL'] = !0x1, qr7p['on'](ow[i[280334]], qr7p, qr7p['rj']), qr7p['on'](ow[i[280335]], qr7p, qr7p['rc']), qr7p;
    }return r_x2st3(_1b$ua, dfn6c), _1b$ua['create'] = function (edgqp7, ba1h_u, gqdefp, e7, k8mr7, cn5fp, $1uba9) {
      void 0x0 === e7 && (e7 = 0x0), void 0x0 === k8mr7 && (k8mr7 = 0x6), void 0x0 === cn5fp && (cn5fp = !0x0), void 0x0 === $1uba9 && ($1uba9 = !0x1);var gem = new _1b$ua();return gem[i[280336]](ba1h_u, gqdefp, e7), gem['durFrm'] = k8mr7, gem[i[280337]] = cn5fp, gem[i[280338]] = $1uba9, edgqp7 && edgqp7[i[280333]](gem), gem;
    }, _1b$ua[i[280339]] = function (ki8yj) {
      ki8yj && (ki8yj[i[280340]] = !0x0, ki8yj[i[280339]]());
    }, _1b$ua[i[280341]] = function (jzixs) {
      jzixs && (jzixs[i[280340]] = !0x1, jzixs[i[280341]]());
    }, _1b$ua['prototype']['destroy'] = function (r7mk) {
      Laya['timer']['clear'](this, this['rG']), this[i[280330]](ow[i[280334]], this, this['rj']), this[i[280330]](ow[i[280335]], this, this['rc']), dfn6c['prototype']['destroy'][i[280260]](this, r7mk);
    }, _1b$ua['prototype']['rj'] = function () {}, _1b$ua['prototype']['rc'] = function () {}, _1b$ua['prototype'][i[280336]] = function (_h1u65, _ha, rgmq7e) {
      if (this['ri'] != _h1u65) {
        this['ri'] = _h1u65, this['rR'] = [];for (var _c5hn6 = 0x0, wkyrm = rgmq7e; wkyrm <= _ha; wkyrm++) this['rR'][_c5hn6++] = _h1u65 + '/' + wkyrm + i[280342];var pqfgd = ub_a$[i[280343]](this['rR'][0x0]);pqfgd && (this[i[280250]] = pqfgd['sourceWidth'], this[i[280252]] = pqfgd['sourceHeight']), this['rG']();
      }
    }, Object['defineProperty'](_1b$ua['prototype'], i[280338], { 'get': function () {
        return this['rL'];
      }, 'set': function (rqepg) {
        this['rL'] = rqepg;
      }, 'enumerable': !0x0, 'configurable': !0x0 }), Object['defineProperty'](_1b$ua['prototype'], 'durFrm', { 'set': function (f56cd) {
        this['rJ'] != f56cd && (this['rJ'] = f56cd, this['ro'] && (Laya['timer']['clear'](this, this['rG']), Laya['timer'][i[280337]](this['rJ'] * (0x3e8 / 0x3c), this, this['rG'])));
      }, 'enumerable': !0x0, 'configurable': !0x0 }), Object['defineProperty'](_1b$ua['prototype'], i[280337], { 'set': function (jxo2i) {
        this['rp'] = jxo2i;
      }, 'enumerable': !0x0, 'configurable': !0x0 }), _1b$ua['prototype'][i[280339]] = function () {
      this['ro'] && this[i[280341]](), this['ro'] = !0x0, this['rY'] = 0x0, Laya['timer'][i[280337]](this['rJ'] * (0x3e8 / 0x3c), this, this['rG']), this['rG']();
    }, _1b$ua['prototype'][i[280341]] = function () {
      this['ro'] = !0x1, this['rY'] = 0x0, this['rG'](), Laya['timer']['clear'](this, this['rG']);
    }, _1b$ua['prototype'][i[280344]] = function () {
      this['ro'] && (this['ro'] = !0x1, Laya['timer']['clear'](this, this['rG']));
    }, _1b$ua['prototype']['resume'] = function () {
      this['ro'] || (this['ro'] = !0x0, Laya['timer'][i[280337]](this['rJ'] * (0x3e8 / 0x3c), this, this['rG']), this['rG']());
    }, Object['defineProperty'](_1b$ua['prototype'], i[280345], { 'get': function () {
        return this['ro'];
      }, 'enumerable': !0x0, 'configurable': !0x0 }), _1b$ua['prototype']['rG'] = function () {
      this['rR'] && 0x0 != this['rR'][i[280005]] && (this['rU'][i[280336]] = this['rR'][this['rY']], this['ro'] && (this['rY']++, this['rY'] == this['rR'][i[280005]] && (this['rp'] ? this['rY'] = 0x0 : (Laya['timer']['clear'](this, this['rG']), this['ro'] = !0x1, this['rL'] && (this[i[280340]] = !0x1), this[i[280346]](ow[i[280347]])))));
    }, _1b$ua;
  }(dg7ep), oykmw[i[280348]] = pfdge;
}(modules || (modules = {})), function (zx2) {
  var u_hb, is2xz, v3lz;u_hb = zx2['rl'] || (zx2['rl'] = {}), is2xz = zx2['rT'][i[280348]], v3lz = function (c5hn_) {
    function t2xsjz(u_abh1) {
      void 0x0 === u_abh1 && (u_abh1 = 0x0);var pqdc = c5hn_[i[280260]](this) || this;return pqdc['rz'] = { 'bgImgSkin': 'rrdirr/r3a.jpg', 'topImgSkin': 'rrdirr/r10a.jpg', 'btmImgSkin': 'rrdirr/r4a.jpg', 'leftImgSkin': 'rrdirr/r6a.jpg', 'rightImgSkin': 'rrdirr/r8a.jpg', 'loadingBarBgSkin': 'rrdirr/r13a.png', 'copyRightImgBottom': 0xa, 'processBox1Y': 0x3c3, 'processBox2Y': 0x429, 'loadingTipsSize': 0x1a, 'getTipsBtnVisible': !0x1 }, pqdc['rA'] = { 'bgImgSkin': 'rrdirr/r12a.jpg', 'topImgSkin': 'rrdirr/r11a.jpg', 'btmImgSkin': 'rrdirr/r5a.jpg', 'leftImgSkin': 'rrdirr/r7a.jpg', 'rightImgSkin': 'rrdirr/r9a.jpg', 'loadingBarBgSkin': 'rrdirr/r15a.png', 'copyRightImgBottom': 0xa, 'processBox1Y': 0x3c3, 'processBox2Y': 0x429, 'loadingTipsSize': 0x1a, 'getTipsBtnVisible': !0x1 }, pqdc['rv'] = 0x0, pqdc['rD'](0x1 == u_abh1 ? pqdc['rA'] : pqdc['rz']), pqdc;
    }return r_x2st3(t2xsjz, c5hn_), t2xsjz['prototype'][i[280325]] = function () {
      if (c5hn_['prototype'][i[280325]][i[280260]](this), r_fpqn[i[280014]]['preloadLoading'](), this['rB'] = r_cf5pnd[i[280331]]['_rYE'], this['centerX'] = 0x0, this['centerY'] = 0x0, this['rB']) {
        var s3vlt = this['rB'][i[280114]];this[i[280288]]['color'] = 0x1 == s3vlt ? i[280290] : 0x2 == s3vlt ? i[280349] : i[280290];
      }this['rO'] = [this[i[280277]], this[i[280278]], this[i[280279]], this[i[280280]]], r_cf5pnd[i[280331]][i[280350]] = this, _rSYEF(), r_fpqn[i[280014]]['closeAuthor'](), r_fpqn[i[280014]]['closeServer'](), this[i[280327]]();
    }, t2xsjz['prototype']['_rSYE'] = function (qfgd) {
      var bua1_h = this;if (-0x1 === qfgd) return bua1_h['rv'] = 0x0, Laya['timer']['clear'](this, this['_rSYE']), void Laya['timer']['frameLoop'](0x1, this, this['_rSYE']);if (-0x2 !== qfgd) {
        bua1_h['rv'] < 0.9 ? bua1_h['rv'] += (0.15 * Math['random']() + 0.01) / (0x64 * Math['random']() + 0x32) : bua1_h['rv'] < 0x1 && (bua1_h['rv'] += 0.0001), 0.9999 < bua1_h['rv'] && (bua1_h['rv'] = 0.9999, Laya['timer']['clear'](this, this['_rSYE']), Laya['timer'][i[280351]](0xbb8, this, function () {
          0.9 < bua1_h['rv'] && _rSYE(-0x1);
        }));var ltzsv = bua1_h['rv'],
            efqgd = 0x24e * ltzsv;bua1_h['rv'] = bua1_h['rv'] > ltzsv ? bua1_h['rv'] : ltzsv, bua1_h['loadingBar'][i[280250]] = efqgd;var k8owym = bua1_h['loadingBar']['x'] + efqgd;bua1_h[i[280271]]['x'] = k8owym - 0xf, 0x16c <= k8owym ? (bua1_h[i[280270]][i[280340]] = !0x0, bua1_h[i[280270]]['x'] = k8owym - 0xca) : bua1_h[i[280270]][i[280340]] = !0x1, bua1_h['percentageTips'][i[280218]] = (0x64 * ltzsv >> 0x0) + '%', bua1_h['rv'] < 0.9999 && Laya['timer']['frameLoop'](0x1, this, this['_rSYE']);
      } else Laya['timer']['clear'](this, this['_rSYE']);
    }, t2xsjz['prototype']['_rSEY'] = function (dqe7p, o2ijz, rqemg7) {
      var sj2tx = this;0x1 < dqe7p && (dqe7p = 0x1);var a1bu_$ = 0x24e * dqe7p;sj2tx['rv'] = sj2tx['rv'] > dqe7p ? sj2tx['rv'] : dqe7p, sj2tx['loadingBar'][i[280250]] = a1bu_$;var xio2zj = sj2tx['loadingBar']['x'] + a1bu_$;sj2tx[i[280271]]['x'] = xio2zj - 0xf, 0x16c <= xio2zj ? (sj2tx[i[280270]][i[280340]] = !0x0, sj2tx[i[280270]]['x'] = xio2zj - 0xca) : sj2tx[i[280270]][i[280340]] = !0x1, sj2tx['percentageTips'][i[280218]] = (0x64 * dqe7p >> 0x0) + '%', sj2tx[i[280288]][i[280218]] = o2ijz;for (var kgm7wr = rqemg7 - 0x1, h5cn = 0x0; h5cn < this['rO'][i[280005]]; h5cn++) sj2tx['rO'][h5cn][i[280336]] = h5cn < kgm7wr ? 'rrdirr/r20a.png' : kgm7wr === h5cn ? 'rrdirr/r19a.png' : 'rrdirr/r18a.png';
    }, t2xsjz['prototype'][i[280327]] = function () {
      this['_rSEY'](0.1, i[280352], 0x1), this['_rSYE'](-0x1), r_cf5pnd[i[280331]]['_rSYE'] = this['_rSYE'][i[280148]](this), r_cf5pnd[i[280331]]['_rSEY'] = this['_rSEY'][i[280148]](this), this['versionTxt'][i[280218]] = i[280353] + this['rB']['lastVersion'] + i[280354] + this['rB']['wxVersion'], this[i[280238]]();
    }, t2xsjz['prototype'][i[280355]] = function (izsxj2) {
      this['resetWinFun'](), Laya['timer']['clear'](this, this['_rSYE']), Laya['timer']['clear'](this, this['rH']), r_fpqn[i[280014]][i[280132]](), this[i[280282]][i[280330]](Laya[i[280328]][i[280329]], this, this['rg']);
    }, t2xsjz['prototype']['resetWinFun'] = function () {
      r_cf5pnd[i[280331]]['_rSYE'] = function () {}, r_cf5pnd[i[280331]]['_rSEY'] = function () {};
    }, t2xsjz['prototype']['destroy'] = function (o8kjyi) {
      void 0x0 === o8kjyi && (o8kjyi = !0x0), this['resetWinFun'](), c5hn_['prototype']['destroy'][i[280260]](this, o8kjyi);
    }, t2xsjz['prototype'][i[280238]] = function () {
      this['rB'][i[280238]] && 0x1 == this['rB'][i[280238]] && (this[i[280282]][i[280340]] = !0x0, this[i[280282]][i[280356]] = !0x0, this[i[280282]][i[280336]] = 'rrdirr/r1a.png', this[i[280282]]['on'](Laya[i[280328]][i[280329]], this, this['rg']), this['rI'](), this['rE'](!0x0));
    }, t2xsjz['prototype']['rg'] = function () {
      this[i[280282]][i[280356]] && (this[i[280282]][i[280356]] = !0x1, this[i[280282]][i[280336]] = 'rrdirr/r2a.png', this['rt'](), this['rE'](!0x1));
    }, t2xsjz['prototype']['rD'] = function (grp7) {
      this[i[280263]][i[280336]] = grp7[i[280357]], this[i[280265]][i[280336]] = grp7[i[280358]], this[i[280266]][i[280336]] = grp7[i[280359]], this[i[280267]][i[280336]] = grp7[i[280360]], this['rightImg'][i[280336]] = grp7['rightImgSkin'], this[i[280269]][i[280063]] = grp7[i[280361]], this['processBox1']['y'] = grp7['processBox1Y'], this['processBox2']['y'] = grp7['processBox2Y'], this['loadingBarBg'][i[280336]] = grp7['loadingBarBgSkin'], this[i[280288]][i[280362]] = grp7[i[280363]], this[i[280282]][i[280340]] = this['rB'][i[280238]] && 0x1 == this['rB'][i[280238]], this[i[280282]][i[280340]] ? this['rI']() : this['rt'](), this['rE'](this[i[280282]][i[280340]]);
    }, t2xsjz['prototype']['rI'] = function () {
      this['rk'] || (this['rk'] = is2xz['create'](this[i[280282]], 'rfr', 0x4, 0x0, 0xc), this['rk'][i[280364]](0xa1, 0x6a), this['rk'][i[280365]](1.14, 1.15)), is2xz[i[280339]](this['rk']);
    }, t2xsjz['prototype']['rt'] = function () {
      this['rk'] && is2xz[i[280341]](this['rk']);
    }, t2xsjz['prototype']['rE'] = function (ub9) {
      Laya['timer']['clear'](this, this['rH']), ub9 ? (this['rX'] = 0x9, this[i[280285]][i[280340]] = !0x0, this['rH'](), Laya['timer'][i[280337]](0x3e8, this, this['rH'])) : this[i[280285]][i[280340]] = !0x1;
    }, t2xsjz['prototype']['rH'] = function () {
      0x0 < this['rX'] ? (this[i[280285]][i[280218]] = i[280366] + this['rX'] + 's)', this['rX']--) : (this[i[280285]][i[280218]] = '', Laya['timer']['clear'](this, this['rH']), this['rg']());
    }, t2xsjz;
  }(r_rpgeq7['rQ']), u_hb[i[280367]] = v3lz;
}(modules || (modules = {})), function (bhua) {
  var hnc5f6, we7mrg, lt30sv, $9u;hnc5f6 = bhua['rl'] || (bhua['rl'] = {}), we7mrg = Laya[i[280368]], lt30sv = Laya[i[280328]], $9u = function (fpdqnc) {
    function uh6_5c() {
      var z3ltvs = fpdqnc[i[280260]](this) || this;return z3ltvs['rh'] = 0x0, z3ltvs['rb'] = i[280369], z3ltvs['rm'] = 0x0, z3ltvs;
    }return r_x2st3(uh6_5c, fpdqnc), uh6_5c['prototype'][i[280325]] = function () {
      fpdqnc['prototype'][i[280325]][i[280260]](this), r_fpqn[i[280014]]['_rUEYSF'](), this['centerX'] = 0x0, this['centerY'] = 0x0, this['rB'] = r_cf5pnd[i[280331]]['_rYE'], this['r$'] = new we7mrg(), this['r$']['vScrollBarSkin'] = '', this['r$']['itemRender'] = hnc5f6[i[280370]], this['r$'][i[280062]] = 0x5, this['r$']['repeatX'] = 0x1, this['r$'][i[280371]] = 0x5, this['r$'][i[280250]] = this[i[280323]][i[280250]], this['r$'][i[280252]] = this[i[280323]][i[280252]] - 0x8, this[i[280323]][i[280333]](this['r$']), this['rn'] = new we7mrg(), this['rn']['vScrollBarSkin'] = '', this['rn']['itemRender'] = hnc5f6[i[280372]], this['rn'][i[280062]] = 0x5, this['rn']['repeatX'] = 0x1, this['rn'][i[280371]] = 0x5, this['rn'][i[280250]] = this['rightListBox'][i[280250]], this['rn'][i[280252]] = this['rightListBox'][i[280252]] - 0x8, this['rightListBox'][i[280333]](this['rn']), this['rP'] = new we7mrg(), this['rP']['hScrollBarSkin'] = '', this['rP']['itemRender'] = hnc5f6[i[280373]], this['rP']['repeatY'] = 0x1, this['rP'][i[280250]] = this[i[280317]][i[280250]], this['rP'][i[280252]] = this[i[280317]][i[280252]], this[i[280317]][i[280333]](this['rP']);var b1a$_ = this['rB'][i[280114]];this['ra'] = 0x1 == b1a$_ ? i[280302] : 0x2 == b1a$_ ? i[280302] : 0x3 == b1a$_ ? i[280302] : 0x65 == b1a$_ ? i[280302] : i[280374], this['enterBtn'][i[280375]](0x1fa, 0x58), this[i[280304]][i[280340]] = !0x1, this[i[280321]]['color'] = i[280311], this[i[280321]][i[280376]][i[280362]] = 0x1a, this[i[280321]][i[280376]][i[280377]] = 0x1c, this[i[280321]][i[280378]] = !0x1, this['rf'] = [], r_cf5pnd[i[280331]][i[280227]] = this, _rSYEF(), this[i[280326]](), this[i[280327]]();
    }, uh6_5c['prototype'][i[280326]] = function () {
      this[i[280263]]['on'](Laya[i[280328]][i[280329]], this, this['rM']), this['enterBtn']['on'](Laya[i[280328]][i[280329]], this, this['rw']), this['selectServer']['on'](Laya[i[280328]][i[280329]], this, this['ru']), this['selectServer']['on'](Laya[i[280328]][i[280329]], this, this['ru']), this[i[280324]]['on'](Laya[i[280328]][i[280329]], this, this['rr']), this[i[280304]]['on'](Laya[i[280328]][i[280329]], this, this['rW']), this[i[280306]]['on'](Laya[i[280328]][i[280329]], this, this['rx']), this[i[280310]]['on'](Laya[i[280328]][i[280379]], this, this['rF']), this[i[280313]]['on'](Laya[i[280328]][i[280329]], this, this['rq']), this[i[280314]]['on'](Laya[i[280328]][i[280329]], this, this['rq']), this[i[280320]]['on'](Laya[i[280328]][i[280379]], this, this['rZ']), this['rP'][i[280380]] = !0x0, this['rP']['selectHandler'] = Laya['Handler']['create'](this, this['rN'], null, !0x1);
    }, uh6_5c['prototype']['rmEvts'] = function () {
      this[i[280263]][i[280330]](Laya[i[280328]][i[280329]], this, this['rM']), this['enterBtn'][i[280330]](Laya[i[280328]][i[280329]], this, this['rw']), this['selectServer'][i[280330]](Laya[i[280328]][i[280329]], this, this['ru']), this['selectServer'][i[280330]](Laya[i[280328]][i[280329]], this, this['ru']), this[i[280324]][i[280330]](Laya[i[280328]][i[280329]], this, this['rr']), this[i[280304]][i[280330]](Laya[i[280328]][i[280329]], this, this['rW']), this[i[280306]][i[280330]](Laya[i[280328]][i[280329]], this, this['rx']), this[i[280310]][i[280330]](Laya[i[280328]][i[280379]], this, this['rF']), this[i[280313]][i[280330]](Laya[i[280328]][i[280329]], this, this['rq']), this[i[280314]][i[280330]](Laya[i[280328]][i[280329]], this, this['rq']), this[i[280320]][i[280330]](Laya[i[280328]][i[280379]], this, this['rZ']), this['rP'][i[280380]] = !0x1, this['rP']['selectHandler'] = null;
    }, uh6_5c['prototype'][i[280327]] = function () {
      this['rd'] = Date[i[280110]](), this['rC'] = this['rB']['selectedServer']['server_id'], this['rK'](this['rB']['selectedServer']), this['r$']['dataSource'] = this['rB']['groupList'], this['ru'](), this['versionTxt'][i[280218]] = i[280353] + this['rB']['lastVersion'] + i[280354] + this['rB']['wxVersion'], this['serverName']['color'] = this['selServer']['color'] = this['ra'], this[i[280299]][i[280340]] = 0x1 == this['rB'][i[280381]], req_multi_server_notice(0x4, this['rB'][i[280103]], this['rB']['selectedServer']['server_id'], this['rV'][i[280148]](this));
    }, uh6_5c['prototype']['destroy'] = function (oj2iz) {
      void 0x0 === oj2iz && (oj2iz = !0x0), this['rmEvts'](), this['r_'](), this['rs'](), this['r$'] && (this['r$']['removeSelf'](), this['r$']['destroy'](), this['r$'] = null), this['rn'] && (this['rn']['removeSelf'](), this['rn']['destroy'](), this['rn'] = null), this['rP'] && (this['rP']['removeSelf'](), this['rP']['destroy'](), this['rP'] = null), fpdqnc['prototype']['destroy'][i[280260]](this, oj2iz);
    }, uh6_5c['prototype']['rM'] = function () {
      0x2710 < Date[i[280110]]() - this['rd'] && (this['rd'] -= 0x7d0, r_fpqn[i[280014]]['enterDefaultServer']());
    }, uh6_5c['prototype']['rr'] = function () {
      this[i[280322]][i[280340]] = !0x1;
    }, uh6_5c['prototype']['rw'] = function () {
      this['ry'](this['rB']['selectedServer']) && (r_cf5pnd[i[280331]]['_rYE']['selectedServer'] = this['rB']['selectedServer'], _rESYF(0x0, this['rB']['selectedServer']['server_id']));
    }, uh6_5c['prototype']['rW'] = function () {
      this['rSS']();
    }, uh6_5c['prototype']['rx'] = function () {
      this[i[280305]][i[280340]] = !0x1;
    }, uh6_5c['prototype']['rF'] = function () {
      this['rh'] = this[i[280310]][i[280382]], Laya[i[280383]]['on'](lt30sv[i[280384]], this, this['rQS']), Laya[i[280383]]['on'](lt30sv[i[280385]], this, this['r_']), Laya[i[280383]]['on'](lt30sv[i[280386]], this, this['r_']);
    }, uh6_5c['prototype']['rQS'] = function () {
      if (this[i[280310]]) {
        var sl2zt = this['rh'] - this[i[280310]][i[280382]];this[i[280310]]['scrollY'] += sl2zt, this['rh'] = this[i[280310]][i[280382]];
      }
    }, uh6_5c['prototype']['r_'] = function () {
      Laya[i[280383]][i[280330]](lt30sv[i[280384]], this, this['rQS']), Laya[i[280383]][i[280330]](lt30sv[i[280385]], this, this['r_']), Laya[i[280383]][i[280330]](lt30sv[i[280386]], this, this['r_']);
    }, uh6_5c['prototype']['ry'] = function (hu6c5) {
      return -0x1 == hu6c5[i[280183]] ? (alert(i[280387]), !0x1) : 0x0 != hu6c5[i[280183]] || (alert(i[280388]), !0x1);
    }, uh6_5c['prototype']['ru'] = function () {
      this['rB']['hasGroupReq'] ? this[i[280322]][i[280340]] = !0x0 : (this['rB']['hasGroupReq'] = !0x0, _rYEFS(0x0));
    }, uh6_5c['prototype']['rV'] = function (eqpd7) {
      console[i[280019]]('onMultiNoticeCallback, param = ', eqpd7);var ji2xsz = Date[i[280110]]() / 0x3e8,
          dfgpq = localStorage[i[280389]](this['rb']),
          zl3t2s = !(this['rf'] = []);if (i[280175] == eqpd7[i[280128]]) for (var m7rewg in eqpd7[i[280127]]) {
        var h_u516 = eqpd7[i[280127]][m7rewg],
            mwkr78 = ji2xsz < h_u516[i[280390]],
            qdnfe = 0x1 == h_u516[i[280391]],
            gw7r = 0x2 == h_u516[i[280391]] && h_u516[i[280392]] + '' != dfgpq;!zl3t2s && mwkr78 && (qdnfe || gw7r) && (zl3t2s = !0x0), mwkr78 && this['rf'][i[280017]](h_u516), gw7r && localStorage[i[280393]](this['rb'], h_u516[i[280392]] + '');
      }this['rf']['sort'](function (u1_a6h, erpgq) {
        return u1_a6h[i[280394]] - erpgq[i[280394]];
      }), console[i[280019]](i[280395], this['rf']), zl3t2s && this['rSS']();
    }, uh6_5c['prototype']['preload'] = function () {}, uh6_5c['prototype']['getStatusSrc'] = function (h_6a1u) {
      var wgm7e = '';return 0x2 === h_6a1u ? wgm7e = 'rrlgr/r18b.png' : 0x1 === h_6a1u ? wgm7e = 'rrlgr/r19b.png' : -0x1 !== h_6a1u && 0x0 !== h_6a1u || (wgm7e = 'rrlgr/r20b.png'), wgm7e;
    }, uh6_5c['prototype']['rK'] = function (oyikw8) {
      this['serverName'][i[280218]] = -0x1 === oyikw8[i[280183]] ? oyikw8['server_name'] + i[280396] : 0x0 === oyikw8[i[280183]] ? oyikw8['server_name'] + i[280397] : oyikw8['server_name'], this['serverName']['color'] = -0x1 === oyikw8[i[280183]] ? i[280398] : 0x0 === oyikw8[i[280183]] ? i[280399] : this['ra'], this[i[280300]][i[280336]] = this['getStatusSrc'](oyikw8[i[280183]]), this['rB'][i[280008]] = oyikw8[i[280008]] || '', this['rB']['selectedServer'] = oyikw8, this[i[280304]][i[280340]] = !0x0;
    }, uh6_5c['prototype']['reS'] = function (dnfqcp) {
      this['showGroupList'](dnfqcp);
    }, uh6_5c['prototype']['rlS'] = function (yk8iwo) {
      this['rK'](yk8iwo), this[i[280322]][i[280340]] = !0x1;
    }, uh6_5c['prototype']['rMS'] = function (pfegq) {
      this[i[280310]] && (this[i[280310]][i[280218]] = pfegq[i[280127]][i[280400]] ? pfegq[i[280127]][i[280400]] : '', this[i[280307]][i[280218]] = pfegq[i[280127]][i[280401]] ? pfegq[i[280127]][i[280401]] : i[280308]);
    }, uh6_5c['prototype']['showGroupList'] = function (pqcfdn) {
      if (void 0x0 === pqcfdn && (pqcfdn = 0x0), this['parent']) {
        var rgq7pe = this['rB']['groupList'];if (rgq7pe && 0x0 !== rgq7pe[i[280005]]) {
          for (var k8rwm = rgq7pe[i[280005]], deqgp = 0x0; deqgp < k8rwm; deqgp++) rgq7pe[deqgp][i[280402]] = this['reS'][i[280148]](this), rgq7pe[deqgp][i[280403]] = deqgp == pqcfdn, rgq7pe[deqgp][i[280404]] = deqgp;var _61uh = (this['r$']['array'] = rgq7pe)[pqcfdn]['id'];this['rB']['serverList'][_61uh] ? this['showServerList'](_61uh) : this['rB']['hasServerReq'] || (this['rB']['hasServerReq'] = !0x0, -0x1 == _61uh ? _rSYF(0x0) : -0x2 == _61uh ? _rUYFE(0x0) : _rFYS(0x0, _61uh));
        }
      }
    }, uh6_5c['prototype']['showServerList'] = function (ozxi2) {
      if (this['parent'] && this['rB']['serverList'][ozxi2]) {
        for (var fepnd = this['rB']['serverList'][ozxi2], kioj = fepnd[i[280005]], efqpg = 0x0; efqpg < kioj; efqpg++) fepnd[efqpg][i[280402]] = this['rlS'][i[280148]](this);this['rn']['array'] = fepnd;
      }
    }, uh6_5c['prototype']['rSS'] = function () {
      if (this['rP']) {
        if (this['rf']) {
          this['rP']['x'] = 0x2 < this['rf'][i[280005]] ? 0x0 : (this[i[280317]][i[280250]] - 0x112 * this['rf'][i[280005]]) / 0x2;for (var tlz32s = [], n5_hc = 0x0; n5_hc < this['rf'][i[280005]]; n5_hc++) {
            var krgm7 = this['rf'][n5_hc];tlz32s[i[280017]]([krgm7, n5_hc == this['rP'][i[280405]]]);
          }0x0 < (this['rP']['dataSource'] = tlz32s)[i[280005]] ? (this['rP'][i[280405]] = 0x0, this['rP']['scrollTo'](0x0)) : (this[i[280318]][i[280218]] = i[280308], this[i[280321]][i[280218]] = ''), this[i[280314]][i[280340]] = this['rf'][i[280005]] <= 0x1, this[i[280317]][i[280340]] = 0x1 < this['rf'][i[280005]];
        }this[i[280312]][i[280340]] = !0x0;
      }
    }, uh6_5c['prototype']['rq'] = function () {
      this[i[280312]][i[280340]] = !0x1;
    }, uh6_5c['prototype']['rN'] = function () {
      if (this['rP']['dataSource']) {
        for (var pqfcdn, cu_h65 = 0x0; cu_h65 < this['rP']['dataSource'][i[280005]]; cu_h65++) {
          var jzs2xt = this['rP']['dataSource'][cu_h65];jzs2xt[0x1] = cu_h65 == this['rP'][i[280405]], cu_h65 == this['rP'][i[280405]] && (pqfcdn = jzs2xt[0x0]);
        }pqfcdn && pqfcdn[i[280400]] && (pqfcdn[i[280400]] = pqfcdn[i[280400]]['replace'](/(<)(?!(br)).[a-zA-Z]{0,10}(>)/g, '')), this[i[280318]][i[280218]] = pqfcdn && pqfcdn[i[280401]] ? pqfcdn[i[280401]] : '', this[i[280321]]['innerHTML'] = pqfcdn && pqfcdn[i[280400]] ? pqfcdn[i[280400]] : '', this[i[280321]]['y'] = 0x0;
      }
    }, uh6_5c['prototype']['rZ'] = function () {
      this['rm'] = this[i[280320]][i[280382]], Laya[i[280383]]['on'](lt30sv[i[280384]], this, this['rdS']), Laya[i[280383]]['on'](lt30sv[i[280385]], this, this['rs']), Laya[i[280383]]['on'](lt30sv[i[280386]], this, this['rs']);
    }, uh6_5c['prototype']['rdS'] = function () {
      if (this[i[280321]]) {
        var nqpdcf = this['rm'] - this[i[280320]][i[280382]];this[i[280321]]['y'] -= nqpdcf, this[i[280320]][i[280252]] < this[i[280321]][i[280406]] ? this[i[280321]]['y'] < this[i[280320]][i[280252]] - this[i[280321]][i[280406]] ? this[i[280321]]['y'] = this[i[280320]][i[280252]] - this[i[280321]][i[280406]] : 0x0 < this[i[280321]]['y'] && (this[i[280321]]['y'] = 0x0) : this[i[280321]]['y'] = 0x0, this['rm'] = this[i[280320]][i[280382]];
      }
    }, uh6_5c['prototype']['rs'] = function () {
      Laya[i[280383]][i[280330]](lt30sv[i[280384]], this, this['rdS']), Laya[i[280383]][i[280330]](lt30sv[i[280385]], this, this['rs']), Laya[i[280383]][i[280330]](lt30sv[i[280386]], this, this['rs']);
    }, uh6_5c;
  }(r_rpgeq7['re']), hnc5f6['SelectServerPanel'] = $9u;
}(modules || (modules = {}));var modules,
    r_cf5pnd = Laya['Browser'],
    r_vt03l = Laya[i[280407]],
    r_izjsx2 = Laya[i[280408]],
    r_zsvl3t = Laya['Render'],
    r_y8krm = Laya['Handler'],
    r_uh_c = modules['rl']['AuthorizationPanel'],
    r_s2jzt = modules['rl'][i[280367]],
    r_x2z3ts = modules['rl']['SelectServerPanel'],
    r_fpqn = function () {
  function cfndp5(ox2izj) {
    this[i[280409]] = ['rrdirr/r13a.png', 'rrdirr/r15a.png', 'rrdirr/r14a.png', 'rrdirr/r16a.png', 'rrdirr/r17a.png', 'rrdirr/r18a.png', 'rrdirr/r19a.png', 'rrdirr/r20a.png', 'rfr/r1c.png', 'rfr/r2c.png', 'rfr/r3c.png', 'rfr/r4c.png', 'rfr/r5c.png', 'rrdirr/r3a.jpg', 'rrdirr/r12a.jpg', 'rrdirr/r1a.png', 'rrdirr/r2a.png', 'rrdirr/r4a.jpg', 'rrdirr/r6a.jpg', 'rrdirr/r8a.jpg', 'rrdirr/r10a.jpg', 'rrdirr/r5a.jpg', 'rrdirr/r7a.jpg', 'rrdirr/r9a.jpg', 'rrdirr/r11a.jpg'], this['_rUEYF'] = ['rrlgr/r10b.png', 'rrlgr/r11b.png', 'rrlgr/r12b.png', 'rrlgr/r13b.png', 'rrlgr/r14b.png', 'rrlgr/r15b.png', 'rrlgr/r16b.png', 'rrlgr/r17b.png', 'rrlgr/r18b.png', 'rrlgr/r19b.png', 'rrlgr/r20b.png', 'rrlgr/r21b.png', 'rrlgr/r2b.jpg', 'rrlgr/r3b.jpg', 'rrlgr/r4b.jpg', 'rrlgr/r5b.jpg', 'rrlgr/r6b.jpg', 'rrlgr/r1b.png', 'rrlgr/r8b.png', 'rrlgr/r9b.png', 'rrlgr/r24b.png', 'rrlgr/r25b.png', 'rrlgr/r23b.png', 'rrlgr/r26b.png', 'rrlgr/r27b.png'], this['m_isPrelodServer'] = !0x1, this['m_isPrelodLoading'] = !0x1, this['rTS'] = !0x1, this['rUS'] = '', cfndp5[i[280014]] = this, Laya['MiniAdpter'][i[280147]](), Laya3D[i[280147]](0x0, 0x0, !0x1, !0x1, !0x1), DecodeTools[i[280147]](), Laya[i[280383]][i[280410]] = Laya[i[280411]][i[280412]], Laya[i[280383]]['screenMode'] = Laya[i[280411]][i[280413]], Laya[i[280383]][i[280414]] = Laya[i[280411]][i[280415]], Laya[i[280383]][i[280416]] = Laya[i[280411]][i[280417]], Laya[i[280383]]['frameRate'] = Laya[i[280411]][i[280418]];var ky8joi = Laya['AtlasResourceManager'];ky8joi['maxTextureCount'] = 0x4, ky8joi['atlasTextureWidth'] = ky8joi['atlasTextureHeight'] = 0x400, ky8joi[i[280419]](), Laya[i[280420]]['rootPath'] = Laya[i[280420]][i[280421]] = '', Laya['Browser'][i[280331]]['addEventListener'](Laya[i[280328]][i[280422]], this['riS'][i[280148]](this)), Laya['Loader']['preLoadedMap']['res/atlas/create_role_atlas.atlas'] = { 'frames': { 'btn_chuangjue_kaishi.png': { 'frame': { 'h': 0x58, 'idx': 0x0, 'w': 0x1fa, 'x': 0x0, 'y': 0x0 }, 'sourceSize': { 'h': 0x58, 'w': 0x1fa }, 'spriteSourceSize': { 'x': 0x0, 'y': 0x0 } }, 'btn_chuangjue_nan.png': { 'frame': { 'h': 0x62, 'idx': 0x0, 'w': 0x6c, 'x': 0x14f, 'y': 0x59 }, 'sourceSize': { 'h': 0x62, 'w': 0x6c }, 'spriteSourceSize': { 'x': 0x0, 'y': 0x0 } }, 'btn_chuangjue_nv.png': { 'frame': { 'h': 0x62, 'idx': 0x0, 'w': 0x6b, 'x': 0x0, 'y': 0xa4 }, 'sourceSize': { 'h': 0x62, 'w': 0x6b }, 'spriteSourceSize': { 'x': 0x0, 'y': 0x0 } }, 'image_chuangjue_mingbg.png': { 'frame': { 'h': 0x4a, 'idx': 0x0, 'w': 0x14e, 'x': 0x0, 'y': 0x59 }, 'sourceSize': { 'h': 0x4a, 'w': 0x14e }, 'spriteSourceSize': { 'x': 0x0, 'y': 0x0 } }, 'image_chuangjue_suiji.png': { 'frame': { 'h': 0x38, 'idx': 0x0, 'w': 0x34, 'x': 0x1bc, 'y': 0x59 }, 'sourceSize': { 'h': 0x38, 'w': 0x34 }, 'spriteSourceSize': { 'x': 0x0, 'y': 0x0 } } }, 'meta': { 'image': 'create_role_atlas.png', 'prefix': 'create_role_atlas/' } }, r_cf5pnd[i[280331]]['resMgrLoad'] = cfndp5[i[280014]]['_rUEY'], r_cf5pnd[i[280331]]['imgMgrLoad'] = cfndp5[i[280014]]['_rUEY'], this['m_layer'] = new Laya[i[280332]](), this['m_layer'][i[280423]] = '_wxLoadingLayer', Laya[i[280383]][i[280333]](this['m_layer']), this['riS']();
  }return cfndp5['prototype']['_rSEFY'] = function (y8iow) {
    cfndp5[i[280014]]['m_layer'][i[280340]] = y8iow;
  }, cfndp5['prototype']['_rUFESY'] = function () {
    cfndp5[i[280014]]['m_author'] || (cfndp5[i[280014]]['m_author'] = new r_uh_c()), cfndp5[i[280014]]['m_author']['parent'] || cfndp5[i[280014]]['m_layer'][i[280333]](cfndp5[i[280014]]['m_author']), cfndp5[i[280014]]['rRS']();
  }, cfndp5['prototype']['closeAuthor'] = function () {
    this['m_author'] && this['m_author']['parent'] && (Laya[i[280383]]['removeChild'](this['m_author']), this['m_author']['destroy'](!0x0), this['m_author'] = null);
  }, cfndp5['prototype']['_rUEYSF'] = function () {
    this['m_isPrelodServer'] || (this['m_isPrelodServer'] = !0x0, Laya['loader'][i[280424]](this['_rUEYF'], r_y8krm['create'](this, function () {
      r_cf5pnd[i[280331]]['loadServerRes'] = !0x0, r_cf5pnd[i[280331]]['_rEYSF'](), r_cf5pnd[i[280331]]['_rEYFS']();
    })));
  }, cfndp5['prototype']['openServer'] = function () {
    for (var qd7pge = function () {
      cfndp5[i[280014]]['m_server'] || (cfndp5[i[280014]]['m_server'] = new r_x2z3ts()), cfndp5[i[280014]]['m_server']['parent'] || cfndp5[i[280014]]['m_layer'][i[280333]](cfndp5[i[280014]]['m_server']), cfndp5[i[280014]]['rRS']();
    }, cfqd = !0x0, r7pgqe = 0x0, zsjt2 = this['_rUEYF']; r7pgqe < zsjt2[i[280005]]; r7pgqe++) {
      var qd7g = zsjt2[r7pgqe];if (null == Laya['Loader'][i[280343]](qd7g)) {
        cfqd = !0x1;break;
      }
    }cfqd ? qd7pge() : Laya['loader'][i[280424]](this['_rUEYF'], r_y8krm['create'](this, qd7pge));
  }, cfndp5['prototype']['closeServer'] = function () {
    this['m_server'] && this['m_server']['parent'] && (Laya[i[280383]]['removeChild'](this['m_server']), this['m_server']['destroy'](!0x0), this['m_server'] = null);
  }, cfndp5['prototype']['preloadLoading'] = function () {
    this['m_isPrelodLoading'] || (this['m_isPrelodLoading'] = !0x0, Laya['loader'][i[280424]](this[i[280409]], r_y8krm['create'](this, function () {
      r_cf5pnd[i[280331]][i[280116]] = !0x0, r_cf5pnd[i[280331]]['_rEYSF'](), r_cf5pnd[i[280331]]['_rEYFS']();
    })));
  }, cfndp5['prototype'][i[280186]] = function (s3tv0l) {
    void 0x0 === s3tv0l && (s3tv0l = 0x0), Laya['loader'][i[280424]](this[i[280409]], r_y8krm['create'](this, function () {
      cfndp5[i[280014]][i[280425]] || (cfndp5[i[280014]][i[280425]] = new r_s2jzt(s3tv0l)), cfndp5[i[280014]][i[280425]]['parent'] || cfndp5[i[280014]]['m_layer'][i[280333]](cfndp5[i[280014]][i[280425]]), cfndp5[i[280014]]['rRS']();
    }));
  }, cfndp5['prototype'][i[280132]] = function () {
    this[i[280425]] && this[i[280425]]['parent'] && (Laya[i[280383]]['removeChild'](this[i[280425]]), this[i[280425]]['destroy'](!0x0), this[i[280425]] = null);for (var pgefqd = 0x0, oz2xij = this['_rUEYF']; pgefqd < oz2xij[i[280005]]; pgefqd++) {
      var rqgme7 = oz2xij[pgefqd];Laya['Loader']['clearCache'](cfndp5[i[280014]], rqgme7), Laya['Loader']['clearRes'](rqgme7, !0x0);
    }for (var gmwer = 0x0, owk = this[i[280409]]; gmwer < owk[i[280005]]; gmwer++) {
      rqgme7 = owk[gmwer], (Laya['Loader']['clearCache'](cfndp5[i[280014]], rqgme7), Laya['Loader']['clearRes'](rqgme7, !0x0));
    }this['m_layer']['parent'] && this['m_layer']['parent']['removeChild'](this['m_layer']);
  }, cfndp5['prototype']['_rUE'] = function () {
    this[i[280425]] && this[i[280425]]['parent'] && cfndp5[i[280014]][i[280425]][i[280238]]();
  }, cfndp5['prototype']['enterDefaultServer'] = function () {
    var _1ub$ = r_cf5pnd[i[280331]]['_rYE']['selectedServer'];this['rTS'] || -0x1 == _1ub$[i[280183]] || 0x0 == _1ub$[i[280183]] || (this['rTS'] = !0x0, r_cf5pnd[i[280331]]['_rYE']['selectedServer'] = _1ub$, _rESYF(0x0, _1ub$['server_id']));
  }, cfndp5['prototype']['sendRecord'] = function () {
    var bh_ua1 = '';bh_ua1 += 'newRegister=' + r_cf5pnd[i[280331]]['_rYE']['newRegister'], bh_ua1 += ', isPrelodServer=' + this['m_isPrelodServer'], bh_ua1 += ', SelectServerPanel=' + (null != cfndp5[i[280014]]['m_server']), bh_ua1 += ', isPrelodLoading=' + this['m_isPrelodLoading'], bh_ua1 += i[280426] + (null != cfndp5[i[280014]][i[280425]]), bh_ua1 += ', resMgrLoad=' + (r_cf5pnd[i[280331]]['resMgrLoad'] == cfndp5[i[280014]]['_rUEY']), bh_ua1 += ', imgMgrLoad=' + (r_cf5pnd[i[280331]]['imgMgrLoad'] == cfndp5[i[280014]]['_rUEY']), bh_ua1 += ', errUrls=' + cfndp5[i[280014]]['rUS'];for (var cf6dn5 = 0x0, r7wgmk = this['_rUEYF']; cf6dn5 < r7wgmk[i[280005]]; cf6dn5++) {
      bh_ua1 += ',\x20' + (au1_bh = r7wgmk[cf6dn5]) + '=' + (null != Laya['Loader'][i[280343]](au1_bh));
    }for (var qfncdp = 0x0, jz2t = this[i[280409]]; qfncdp < jz2t[i[280005]]; qfncdp++) {
      var au1_bh;bh_ua1 += ',\x20' + (au1_bh = jz2t[qfncdp]) + '=' + (null != Laya['Loader'][i[280343]](au1_bh));
    }var x3tz = r_cf5pnd[i[280331]]['_rYE']['selectedServer'];x3tz && (bh_ua1 += ', server_status=' + x3tz[i[280183]], bh_ua1 += ', server_id=' + x3tz['server_id'], bh_ua1 += ', server_name=' + x3tz['server_name']);var ioj2xz = JSON['stringify']({ 'error': i[280427], 'stack': bh_ua1 });console['error'](ioj2xz), this['roS'] && this['roS'] == bh_ua1 || (this['roS'] = bh_ua1, _rYSE(ioj2xz));
  }, cfndp5['prototype']['rYS'] = function () {
    var dc6n5f = Laya[i[280383]],
        txz2js = Math['floor'](dc6n5f[i[280250]]),
        lts30 = Math['floor'](dc6n5f[i[280252]]);lts30 / txz2js < 1.7777778 ? (this[i[280428]] = Math['floor'](txz2js / (lts30 / 0x500)), this[i[280429]] = 0x500, this[i[280430]] = lts30 / 0x500) : (this[i[280428]] = 0x2d0, this[i[280429]] = Math['floor'](lts30 / (txz2js / 0x2d0)), this[i[280430]] = txz2js / 0x2d0);var egfpqd = Math['floor'](dc6n5f[i[280250]]),
        rg7ew = Math['floor'](dc6n5f[i[280252]]);rg7ew / egfpqd < 1.7777778 ? (this[i[280428]] = Math['floor'](egfpqd / (rg7ew / 0x500)), this[i[280429]] = 0x500, this[i[280430]] = rg7ew / 0x500) : (this[i[280428]] = 0x2d0, this[i[280429]] = Math['floor'](rg7ew / (egfpqd / 0x2d0)), this[i[280430]] = egfpqd / 0x2d0), this['rRS']();
  }, cfndp5['prototype']['rRS'] = function () {
    this['m_layer'] && (this['m_layer'][i[280375]](this[i[280428]], this[i[280429]]), this['m_layer'][i[280365]](this[i[280430]], this[i[280430]], !0x0));
  }, cfndp5['prototype']['riS'] = function () {
    if (r_izjsx2[i[280431]] && r_cf5pnd[i[280432]]) {
      var ywo8ik = parseInt(r_izjsx2['inputContainer'][i[280376]][i[280062]]['replace']('px', '')),
          qpfedn = parseInt(r_izjsx2[i[280433]][i[280376]][i[280252]]['replace']('px', '')) * this[i[280430]],
          c6_uh = r_cf5pnd[i[280434]] / r_zsvl3t[i[280435]][i[280250]];return 0x0 < (ywo8ik = r_cf5pnd[i[280436]] - qpfedn * c6_uh - ywo8ik) && (ywo8ik = 0x0), void (r_cf5pnd['container'][i[280376]][i[280062]] = ywo8ik + 'px');
    }r_cf5pnd['container'][i[280376]][i[280062]] = i[280437];var _1ua6 = Math['floor'](r_cf5pnd[i[280250]]),
        eg7pd = Math['floor'](r_cf5pnd[i[280252]]);_1ua6 = _1ua6 + 0x1 & 0x7ffffffe, eg7pd = eg7pd + 0x1 & 0x7ffffffe;var xyoi8j = Laya[i[280383]];0x3 == ENV ? (xyoi8j[i[280410]] = Laya[i[280411]][i[280438]], xyoi8j[i[280250]] = _1ua6, xyoi8j[i[280252]] = eg7pd) : eg7pd < _1ua6 ? (xyoi8j[i[280410]] = Laya[i[280411]][i[280438]], xyoi8j[i[280250]] = _1ua6, xyoi8j[i[280252]] = eg7pd) : (xyoi8j[i[280410]] = Laya[i[280411]][i[280412]], xyoi8j[i[280250]] = 0x348, xyoi8j[i[280252]] = Math['floor'](eg7pd / (_1ua6 / 0x348)) + 0x1 & 0x7ffffffe), this['rYS']();
  }, cfndp5['prototype']['_rUEY'] = function (mkyo8, rgmqe7) {
    function grw7m() {
      stv3z[i[280439]] = null, stv3z['onerror'] = null;
    }var stv3z,
        yj2ixo = mkyo8;(stv3z = new r_cf5pnd[i[280331]][i[280262]]())[i[280439]] = function () {
      grw7m(), rgmqe7(yj2ixo, 0xc8, stv3z);
    }, stv3z['onerror'] = function () {
      console['warn']('[warn] WX loadImage onerror:', yj2ixo), cfndp5[i[280014]]['rUS'] += yj2ixo + '|', grw7m(), rgmqe7(yj2ixo, 0x194, null);
    }, stv3z['src'] = yj2ixo, -0x1 == cfndp5[i[280014]]['_rUEYF'][i[280066]](yj2ixo) && -0x1 == cfndp5[i[280014]][i[280409]][i[280066]](yj2ixo) || Laya['Loader'][i[280440]](cfndp5[i[280014]], yj2ixo);
  }, cfndp5['prototype']['rpS'] = function ($bu_a, dpfeqn) {
    return -0x1 != $bu_a[i[280066]](dpfeqn, $bu_a[i[280005]] - dpfeqn[i[280005]]);
  }, cfndp5;
}();!function (pqge7d) {
  var xzijo2, _6au;xzijo2 = pqge7d['rl'] || (pqge7d['rl'] = {}), _6au = function (qe7dp) {
    function cpnq() {
      var ywkom = qe7dp[i[280260]](this) || this;return ywkom['rJS'] = i[280441], ywkom['rLS'] = i[280442], ywkom[i[280250]] = 0x112, ywkom[i[280252]] = 0x3b, ywkom['rjS'] = new Laya[i[280262]](), ywkom[i[280333]](ywkom['rjS']), ywkom['rcS'] = new Laya[i[280272]](), ywkom['rcS'][i[280362]] = 0x1e, ywkom['rcS']['color'] = ywkom['rLS'], ywkom[i[280333]](ywkom['rcS']), ywkom['rcS']['centerX'] = 0x0, ywkom['rcS']['centerY'] = 0x0, ywkom;
    }return r_x2st3(cpnq, qe7dp), cpnq['prototype'][i[280325]] = function () {
      qe7dp['prototype'][i[280325]][i[280260]](this), this['rB'] = r_cf5pnd[i[280331]]['_rYE'], this['rB'][i[280114]], this[i[280326]]();
    }, Object['defineProperty'](cpnq['prototype'], 'dataSource', { 'set': function (_165uh) {
        _165uh && this[i[280443]](_165uh);
      }, 'enumerable': !0x0, 'configurable': !0x0 }), cpnq['prototype'][i[280443]] = function (sz3vl) {
      this['rGS'] = sz3vl[0x0], this['rzS'] = sz3vl[0x1], this['rcS'][i[280218]] = this['rGS'][i[280401]], this['rcS']['color'] = this['rzS'] ? this['rJS'] : this['rLS'], this['rjS'][i[280336]] = this['rzS'] ? 'rrlgr/r25b.png' : 'rrlgr/r24b.png';
    }, cpnq['prototype']['destroy'] = function (h1u_5) {
      void 0x0 === h1u_5 && (h1u_5 = !0x0), this['rmEvts'](), qe7dp['prototype']['destroy'][i[280260]](this, h1u_5);
    }, cpnq['prototype'][i[280326]] = function () {}, cpnq['prototype']['rmEvts'] = function () {}, cpnq;
  }(Laya[i[280258]]), xzijo2[i[280373]] = _6au;
}(modules || (modules = {})), function (womky) {
  var epr7g, ndqfp;epr7g = womky['rl'] || (womky['rl'] = {}), ndqfp = function (h5cf6) {
    function u_6h() {
      var myow = h5cf6[i[280260]](this) || this;return myow[i[280250]] = 0xc0, myow[i[280252]] = 0x46, myow['rjS'] = new Laya[i[280262]](), myow[i[280333]](myow['rjS']), myow['rcS'] = new Laya[i[280272]](), myow['rcS'][i[280362]] = 0x1e, myow['rcS']['color'] = myow['ra'], myow[i[280333]](myow['rcS']), myow['rcS']['centerX'] = 0x0, myow['rcS']['centerY'] = 0x0, myow;
    }return r_x2st3(u_6h, h5cf6), u_6h['prototype'][i[280325]] = function () {
      h5cf6['prototype'][i[280325]][i[280260]](this), this['rB'] = r_cf5pnd[i[280331]]['_rYE'];var xt2sj = this['rB'][i[280114]];this['ra'] = 0x1 == xt2sj ? i[280442] : 0x2 == xt2sj ? i[280442] : 0x3 == xt2sj ? i[280444] : i[280442], this[i[280326]]();
    }, Object['defineProperty'](u_6h['prototype'], 'dataSource', { 'set': function (jyx8oi) {
        jyx8oi && this[i[280443]](jyx8oi);
      }, 'enumerable': !0x0, 'configurable': !0x0 }), u_6h['prototype'][i[280443]] = function (fdpeq) {
      this['rGS'] = fdpeq, this['rcS'][i[280218]] = fdpeq[i[280423]], this['rjS'][i[280336]] = fdpeq[i[280403]] ? 'rrlgr/r14b.png' : 'rrlgr/r15b.png';
    }, u_6h['prototype']['destroy'] = function (r7gqm) {
      void 0x0 === r7gqm && (r7gqm = !0x0), this['rmEvts'](), h5cf6['prototype']['destroy'][i[280260]](this, r7gqm);
    }, u_6h['prototype'][i[280326]] = function () {
      this['on'](Laya[i[280328]][i[280385]], this, this['clkHdler']);
    }, u_6h['prototype']['rmEvts'] = function () {
      this[i[280330]](Laya[i[280328]][i[280385]], this, this['clkHdler']);
    }, u_6h['prototype']['clkHdler'] = function () {
      this['rGS'] && this['rGS'][i[280402]] && this['rGS'][i[280402]](this['rGS'][i[280404]]);
    }, u_6h;
  }(Laya[i[280258]]), epr7g[i[280370]] = ndqfp;
}(modules || (modules = {})), function (yk8o) {
  var qpfdne, zjisx;qpfdne = yk8o['rl'] || (yk8o['rl'] = {}), zjisx = function (emwgr7) {
    function xzoi2() {
      var g7kmr = emwgr7[i[280260]](this) || this;return g7kmr['rjS'] = new Laya[i[280262]]('rrlgr/r16b.png'), g7kmr['rcS'] = new Laya[i[280272]](), g7kmr['rcS'][i[280362]] = 0x1e, g7kmr['rcS']['color'] = g7kmr['ra'], g7kmr[i[280333]](g7kmr['rjS']), g7kmr['rAS'] = new Laya[i[280262]](), g7kmr[i[280333]](g7kmr['rAS']), g7kmr[i[280250]] = 0x166, g7kmr[i[280252]] = 0x46, g7kmr[i[280333]](g7kmr['rcS']), g7kmr['rAS']['centerY'] = 0x0, g7kmr['rAS']['x'] = 0x12, g7kmr['rcS']['x'] = 0x50, g7kmr['rcS']['centerY'] = 0x0, g7kmr['rjS']['graphics']['drawRect'](0x0, 0x0, g7kmr[i[280250]], g7kmr[i[280252]], i[280445]), g7kmr;
    }return r_x2st3(xzoi2, emwgr7), xzoi2['prototype'][i[280325]] = function () {
      emwgr7['prototype'][i[280325]][i[280260]](this), this['rB'] = r_cf5pnd[i[280331]]['_rYE'];var wr8 = this['rB'][i[280114]];this['ra'] = 0x1 == wr8 ? i[280446] : 0x2 == wr8 ? i[280446] : 0x3 == wr8 ? i[280444] : i[280446], this[i[280326]]();
    }, Object['defineProperty'](xzoi2['prototype'], 'dataSource', { 'set': function (cdfp5n) {
        cdfp5n && this[i[280443]](cdfp5n);
      }, 'enumerable': !0x0, 'configurable': !0x0 }), xzoi2['prototype'][i[280443]] = function (m7gwrk) {
      this['rGS'] = m7gwrk, this['rcS']['color'] = -0x1 === m7gwrk[i[280183]] ? i[280398] : 0x0 === m7gwrk[i[280183]] ? i[280399] : this['ra'], this['rcS'][i[280218]] = -0x1 === m7gwrk[i[280183]] ? m7gwrk['server_name'] + i[280396] : 0x0 === m7gwrk[i[280183]] ? m7gwrk['server_name'] + i[280397] : m7gwrk['server_name'], this['rAS'][i[280336]] = this['getStatusSrc'](m7gwrk[i[280183]]);
    }, xzoi2['prototype']['destroy'] = function (iow8yk) {
      void 0x0 === iow8yk && (iow8yk = !0x0), this['rmEvts'](), emwgr7['prototype']['destroy'][i[280260]](this, iow8yk);
    }, xzoi2['prototype'][i[280326]] = function () {
      this['on'](Laya[i[280328]][i[280385]], this, this['clkHdler']);
    }, xzoi2['prototype']['rmEvts'] = function () {
      this[i[280330]](Laya[i[280328]][i[280385]], this, this['clkHdler']);
    }, xzoi2['prototype']['clkHdler'] = function () {
      this['rGS'] && this['rGS'][i[280402]] && this['rGS'][i[280402]](this['rGS']);
    }, xzoi2['prototype']['getStatusSrc'] = function (ua1b9$) {
      var r7gqpe = '';return 0x2 === ua1b9$ ? r7gqpe = 'rrlgr/r18b.png' : 0x1 === ua1b9$ ? r7gqpe = 'rrlgr/r19b.png' : -0x1 !== ua1b9$ && 0x0 !== ua1b9$ || (r7gqpe = 'rrlgr/r20b.png'), r7gqpe;
    }, xzoi2;
  }(Laya[i[280258]]), qpfdne[i[280372]] = zjisx;
}(modules || (modules = {})), window['ServerLoading'] = r_fpqn;