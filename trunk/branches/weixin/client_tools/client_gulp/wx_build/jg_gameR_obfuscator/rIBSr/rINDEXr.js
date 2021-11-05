var i = wx.$R;
import r_erqp7 from '../RskRR/rs6kr.js';window['versions'] = { 'wxVersion': window[i[280003]]['game_ver'] }, window[i[280090]] = ![], window['_rEY'] = 0x1, window[i[280091]] = 0x1, window['_rFYE'] = !![], window[i[280092]] = !![], window['_rUSFEY'] = '', window['_rYE'] = { 'base_cdn': i[280093], 'cdn': i[280093] }, _rYE[i[280094]] = {}, _rYE[i[280095]] = '0', _rYE['version'] = window['versions']['wxVersion'], _rYE[i[280071]] = '', _rYE['os'] = '1', _rYE[i[280096]] = i[280097], _rYE['apiurl'] = i[280098], _rYE['logurl'] = i[280099], _rYE['payurl'] = i[280100], _rYE[i[280101]] = i[280102], _rYE['partnerId'] = '1', _rYE[i[280103]] = '', _rYE[i[280104]] = '', _rYE['from_scene'] = 0x0, _rYE['serverList'] = {}, _rYE[i[280105]] = parseInt(_rYE['partnerId']), _rYE[i[280106]] = _rYE['partnerId'], _rYE['selectedServer'] = {}, _rYE['_rSY'] = 'https://jgcenter.sh9130.com/clientlog/', _rYE[i[280107]] = ![], _rYE['debugUsers'] = i[280108], _rYE[i[280109]] = Date[i[280110]](), _rYE[i[280111]] = i[280112], _rYE[i[280113]] = '_a', _rYE[i[280114]] = 0x2, _rYE['lastVersion'] = 0x7c1, _rYE['wxVersion'] = window['versions']['wxVersion'], _rYE[i[280115]] = ![], _rYE[i[280065]] = ![], _rYE['wxAndroid'] = ![], _rYE[i[280069]] = ![], window['_rFEY'] = 0x5, window['_rFE'] = ![], window['_rEF'] = ![], window['_rYFE'] = ![], window['loadServerRes'] = ![], window[i[280116]] = ![], window['_rYEF'] = ![], window['_rFY'] = ![], window['_rYF'] = ![], window['_rEFY'] = ![], window['alert'] = function (wkm7) {
  console[i[280019]]('alert', wkm7), wx[i[280117]]({}), wx[i[280024]]({ 'title': i[280040], 'content': wkm7, 'success'(p5fdnc) {
      if (p5fdnc['confirm']) console[i[280019]](i[280118]);else p5fdnc[i[280119]] && console[i[280019]](i[280120]);
    } });
}, window['_rSFYE'] = function (i8yoj) {
  console[i[280019]]('loginAlert', i8yoj), _rSYEF(), wx[i[280024]]({ 'title': i[280040], 'content': i8yoj, 'confirmText': i[280121], 'cancelText': i[280122], 'success'(kmr7g) {
      if (kmr7g['confirm']) window['_rYS']();else kmr7g[i[280119]] && (console[i[280019]](i[280123]), wx['exitMiniProgram']({}));
    } });
}, window['_rEUY'] = function (gkmr) {
  console[i[280019]]('exitAlert', gkmr), wx[i[280024]]({ 'title': i[280040], 'content': gkmr, 'confirmText': i[280124], 'showCancel': ![], 'complete'(o2iz) {
      console[i[280019]](i[280123]), wx['exitMiniProgram']({});
    } });
}, window['_rSFEY'] = ![], window['_rSYFE'] = function (cuh5_) {
  window['_rSFEY'] = !![], wx[i[280125]](cuh5_);
}, window['_rSYEF'] = function () {
  window['_rSFEY'] && (window['_rSFEY'] = ![], wx[i[280117]]({}));
}, window['_rSEFY'] = function (sj2x) {
  window['ServerLoading'][i[280014]]['_rSEFY'](sj2x);
}, window[i[280126]] = function (b$ua1, oiyxj8) {
  r_erqp7[i[280126]](b$ua1, function (qedg) {
    qedg && qedg[i[280127]] ? qedg[i[280127]][i[280128]] == 0x1 ? oiyxj8(!![]) : (oiyxj8(![]), console[i[280000]](i[280129] + qedg[i[280127]][i[280130]])) : console[i[280019]](i[280126], qedg);
  });
}, window['_rSEYF'] = function (h_bu1a) {
  console[i[280019]](i[280131], h_bu1a);
}, window['_rSYE'] = function (fh6nc) {}, window['_rSEY'] = function (oykmw8, egqp7d, _$u1ba) {}, window['_rSE'] = function (oixy8) {
  console[i[280019]]('toEnterGame', oixy8), window['ServerLoading'][i[280014]]['closeAuthor'](), window['ServerLoading'][i[280014]]['closeServer'](), window['ServerLoading'][i[280014]][i[280132]]();
}, window['_rES'] = function (kjyo8) {
  window['_rSFYE']('on api error');var r7qegm = { 'id': window['_rYE']['roleId'], 'role': window['_rYE']['roleName'], 'level': window['_rYE']['roleLevel'], 'account': window['_rYE'][i[280007]], 'version': window['_rYE']['lastVersion'], 'cdn': window['_rYE'][i[280008]], 'pkgName': window['_rYE'][i[280103]], 'gamever': window[i[280003]]['game_ver'], 'serverid': window['_rYE']['selectedServer'] ? window['_rYE']['selectedServer']['server_id'] : 0x0, 'systemInfo': window[i[280009]], 'error': 'onApiError', 'stack': kjyo8 ? kjyo8 : 'on api error' },
      $b_a1u = JSON['stringify'](r7qegm);console['error'](i[280133] + $b_a1u), window['_rSY']($b_a1u);
}, window['_rYSE'] = function (gpfqed) {
  var h65_u = JSON['parse'](gpfqed);h65_u['gamever'] = window[i[280003]]['game_ver'], h65_u['serverid'] = window['_rYE']['selectedServer'] ? window['_rYE']['selectedServer']['server_id'] : 0x0, h65_u[i[280009]] = window[i[280009]];var cn5fh = JSON['stringify'](h65_u);console['error'](i[280134] + cn5fh), window['_rSY'](cn5fh);
}, window['_rYES'] = function (ubh_a1, depfqg) {
  var gepq7 = { 'id': window['_rYE']['roleId'], 'role': window['_rYE']['roleName'], 'level': window['_rYE']['roleLevel'], 'account': window['_rYE'][i[280007]], 'version': window['_rYE']['lastVersion'], 'cdn': window['_rYE'][i[280008]], 'pkgName': window['_rYE'][i[280103]], 'gamever': window[i[280003]]['game_ver'], 'serverid': window['_rYE']['selectedServer'] ? window['_rYE']['selectedServer']['server_id'] : 0x0, 'systemInfo': window[i[280009]], 'error': ubh_a1, 'stack': depfqg },
      dg7p = JSON['stringify'](gepq7);console['warn'](i[280135] + dg7p), window['_rSY'](dg7p);
}, window['_rSY'] = function (tx2sz) {
  if (window['_rYE']['wxPlatform'] == i[280136]) return;var v30st = _rYE['_rSY'] + i[280137] + _rYE[i[280007]];wx['request']({ 'url': v30st, 'method': i[280138], 'data': tx2sz, 'header': { 'content-type': i[280139], 'cache-control': i[280140] }, 'success': function (yxji8) {
      DEBUG && console[i[280019]](i[280141], v30st, tx2sz, yxji8);
    }, 'fail': function (dnc5pf) {
      DEBUG && console[i[280019]](i[280141], v30st, tx2sz, dnc5pf);
    }, 'complete': function () {} });
}, window[i[280142]] = function () {
  function gq7er() {
    return ((0x1 + Math['random']()) * 0x10000 | 0x0)['toString'](0x10)['substring'](0x1);
  }return gq7er() + gq7er() + '-' + gq7er() + '-' + gq7er() + '-' + gq7er() + '+' + gq7er() + gq7er() + gq7er();
}, window['_rYS'] = function () {
  console[i[280019]](i[280143]);var gpe7qd = r_erqp7[i[280144]]();_rYE[i[280106]] = gpe7qd['partner_id'], _rYE[i[280105]] = gpe7qd['partner_id'], _rYE['partnerId'] = gpe7qd['partner_id'], _rYE[i[280103]] = gpe7qd[i[280145]];var fedgpq = { 'game_ver': _rYE['version'] };_rYE[i[280104]] = this[i[280142]](), _rSYFE({ 'title': i[280146] }), r_erqp7[i[280147]](fedgpq, this['_rESY'][i[280148]](this));
};var wx_develop = ![];window['_rESY'] = function (sz2t) {
  var mwge = sz2t[i[280149]];wx_develop = mwge == 0x1, console[i[280019]](i[280150] + mwge + i[280151] + (mwge == 0x1) + i[280152] + sz2t['game_ver'] + i[280153] + window['versions']['wxVersion']);if (!sz2t['game_ver'] || window['_rUFEYS'](window['versions']['wxVersion'], sz2t['game_ver']) < 0x0) console[i[280019]](i[280154]), _rYE['apiurl'] = i[280155], _rYE['logurl'] = i[280156], _rYE['payurl'] = i[280157], _rYE[i[280008]] = i[280158], _rYE['spareCdn'] = i[280159], _rYE['version_name'] = i[280160], _rYE[i[280115]] = ![];else window['_rUFEYS'](window['versions']['wxVersion'], sz2t['game_ver']) == 0x0 ? (console[i[280019]](i[280161]), _rYE['apiurl'] = i[280098], _rYE['logurl'] = i[280099], _rYE['payurl'] = i[280100], _rYE[i[280008]] = i[280162], _rYE['spareCdn'] = i[280159], _rYE['version_name'] = i[280163], _rYE[i[280115]] = !![]) : (console[i[280019]](i[280164]), _rYE['apiurl'] = i[280098], _rYE['logurl'] = i[280099], _rYE['payurl'] = i[280100], _rYE[i[280008]] = i[280162], _rYE['spareCdn'] = i[280159], _rYE['version_name'] = i[280163], _rYE[i[280115]] = ![]);_rYE['from_scene'] = config['from'] ? config['from'] : 0x0, this['_rFYSE'](), this['_rFYES'](), window['sdkLoginRetry'] = 0x5, _rSYFE({ 'title': i[280165] }), r_erqp7[i[280166]](this['_rEYS'][i[280148]](this));
}, window['sdkLoginRetry'] = 0x5, window['_rEYS'] = function (tsz2j, fn5d6c) {
  if (tsz2j == 0x0 && fn5d6c && fn5d6c[i[280167]]) {
    _rYE[i[280168]] = fn5d6c[i[280167]];var komw8y = this;_rSYFE({ 'title': i[280169] }), sendApi(_rYE['apiurl'], 'User.login', { 'platform': _rYE[i[280096]], 'partner_id': _rYE['partnerId'], 'token': fn5d6c[i[280167]], 'game_pkg': _rYE[i[280103]], 'deviceId': _rYE[i[280104]], 'scene': i[280170] + _rYE['from_scene'] }, this['_rFSYE'][i[280148]](this), _rFEY, _rES);
  } else fn5d6c && fn5d6c['errMsg'] && window['sdkLoginRetry'] > 0x0 && (fn5d6c['errMsg'][i[280066]]('fail interrupted') != -0x1 || fn5d6c['errMsg'][i[280066]]('network api interrupted') != -0x1 || fn5d6c['errMsg'][i[280066]]('Network Error') != -0x1 || fn5d6c['errMsg'][i[280066]](i[280171]) != -0x1 || fn5d6c['errMsg'][i[280066]](i[280172]) != -0x1 || fn5d6c['errMsg'][i[280066]](i[280173]) != -0x1) ? (window['sdkLoginRetry']--, r_erqp7[i[280166]](this['_rEYS'][i[280148]](this))) : (window['_rYES']('sdkOnLoginError', JSON['stringify']({ 'status': tsz2j, 'data': fn5d6c })), window['_rSFYE'](i[280174] + (fn5d6c && fn5d6c['errMsg'] ? '，' + fn5d6c['errMsg'] : '')));
}, window['_rFSYE'] = function (ua9b1) {
  if (!ua9b1) {
    window['_rSFYE']('User.login failed');return;
  }if (ua9b1[i[280128]] != i[280175]) {
    window['_rSFYE']('User.login failed: ' + ua9b1[i[280128]]);return;
  }_rYE['userId'] = String(ua9b1[i[280007]]), _rYE[i[280007]] = String(ua9b1[i[280007]]), _rYE['platform'] = String(ua9b1['platform']), _rYE[i[280106]] = String(ua9b1['platform']), _rYE['platform_uid'] = String(ua9b1['platform_uid']), _rYE[i[280176]] = String(ua9b1[i[280177]]), _rYE[i[280178]] = String(ua9b1[i[280179]]), _rYE[i[280177]] = '';var ch6_5n = this;_rSYFE({ 'title': i[280180] }), sendApi(_rYE['apiurl'], 'Server.defaultServer', { 'partner_id': _rYE['partnerId'], 'uid': _rYE[i[280007]], 'version': _rYE['version'], 'game_pkg': _rYE[i[280103]], 'device': _rYE[i[280104]] }, ch6_5n['_rFSEY'][i[280148]](ch6_5n), _rFEY, _rES);
}, window['_rFSEY'] = function (ixyj2) {
  if (!ixyj2) {
    window['_rSFYE']('Server.defaultServer failed');return;
  }if (ixyj2[i[280128]] != i[280175]) {
    window['_rSFYE']('Server.defaultServer failed: ' + ixyj2[i[280128]]);return;
  }if (!ixyj2[i[280127]] || ixyj2[i[280127]][i[280005]] == 0x0) {
    window['_rSFYE'](i[280181]);return;
  }_rYE['newRegister'] = ixyj2[i[280182]], _rYE['selectedServer'] = { 'server_id': String(ixyj2[i[280127]][0x0]['server_id']), 'server_name': String(ixyj2[i[280127]][0x0]['server_name']), 'entry_ip': ixyj2[i[280127]][0x0]['entry_ip'], 'entry_port': parseInt(ixyj2[i[280127]][0x0]['entry_port']), 'status': _rESFY(ixyj2[i[280127]][0x0]), 'start_time': ixyj2[i[280127]][0x0]['start_time'], 'cdn': _rYE[i[280008]] }, this['_rUSFYE']();
}, window['_rUSFYE'] = function () {
  if (_rYE['newRegister'] == 0x1) {
    var yoxi8 = _rYE['selectedServer'][i[280183]];if (yoxi8 === -0x1 || yoxi8 === 0x0) {
      window['_rSFYE'](yoxi8 === -0x1 ? i[280184] : i[280185]);return;
    }_rESYF(0x0, _rYE['selectedServer']['server_id']), window['ServerLoading'][i[280014]][i[280186]](_rYE['newRegister']);
  } else window['ServerLoading'][i[280014]]['openServer'](), _rSYEF();window['_rYF'] = !![], window['_rEYSF'](), window['_rEYFS']();
}, window['_rFYSE'] = function () {
  var oiz2x = this;sendApi(_rYE['apiurl'], 'User.getCdnVersion', { 'game_pkg': _rYE[i[280103]], 'version_name': _rYE['version_name'] }, function (qne) {
    if (!qne) {
      window['_rSFYE']('User.getCdnVersion failed');return;
    }if (qne[i[280128]] != i[280175]) {
      window['_rSFYE']('User.getCdnVersion failed: state=' + qne[i[280128]]);return;
    }if (!qne[i[280127]] || !qne[i[280127]]['version']) {
      window['_rSFYE']('User.getCdnVersion failed: version=' + (qne[i[280127]] && qne[i[280127]]['version']));return;
    }qne[i[280127]]['cdn_url'] && qne[i[280127]]['cdn_url'][i[280005]] > 0xa && (_rYE[i[280187]] = qne[i[280127]]['cdn_url'], _rYE[i[280008]] = qne[i[280127]]['cdn_url']), qne[i[280127]]['version'] && (_rYE['lastVersion'] = qne[i[280127]]['version']), console[i[280000]]('lastVersion:' + _rYE['lastVersion'] + ', version_name:' + _rYE['version_name']), window['_rYEF'] = !![], window['_rEYSF'](), window['_rEYFS']();
  });
}, window[i[280188]], window['_rFYES'] = function () {
  sendApi(_rYE['apiurl'], i[280189], { 'game_pkg': _rYE[i[280103]] }, _rFESY);
}, window['_rFESY'] = function (zt2xsj) {
  if (zt2xsj[i[280128]] === i[280175] && zt2xsj[i[280127]]) {
    window[i[280188]] = zt2xsj[i[280127]];for (var kmwr7g in zt2xsj[i[280127]]) {
      _rYE[kmwr7g] = zt2xsj[i[280127]][kmwr7g];
    }
  } else console[i[280000]]('reqPkgOptionsCallBack ' + zt2xsj[i[280128]]);window['_rFY'] = !![], window['_rEYFS']();
}, window[i[280190]] = function (_uh6, hc_u56, ji2, r7kwm8, siz2x, b1_ua, dpqcnf, fpne, dpenq) {
  siz2x = String(siz2x);var ij8k = dpqcnf,
      _cn6h5 = fpne;_rYE[i[280094]][siz2x] = { 'productid': siz2x, 'productname': ij8k, 'productdesc': _cn6h5, 'roleid': _uh6, 'rolename': hc_u56, 'rolelevel': ji2, 'price': b1_ua, 'callback': dpenq }, sendApi(_rYE['payurl'], 'Order.order', { 'game_pkg': _rYE[i[280103]], 'server_id': _rYE['selectedServer']['server_id'], 'server_name': _rYE['selectedServer']['server_name'], 'level': ji2, 'uid': _rYE[i[280007]], 'role_id': _uh6, 'role_name': hc_u56, 'product_id': siz2x, 'product_name': ij8k, 'product_desc': _cn6h5, 'money': b1_ua, 'partner_id': _rYE['partnerId'] }, toPayCallBack, _rFEY, _rES);
}, window[i[280191]] = function (zoix) {
  if (zoix) {
    if (zoix['errCode'] === 0xc8 || zoix[i[280128]] == i[280175]) {
      var pqdefg = _rYE[i[280094]][String(zoix['product_id'])];if (pqdefg[i[280192]]) pqdefg[i[280192]](zoix['product_id'], zoix['cp_order_id'], -0x1);r_erqp7[i[280193]]({ 'cpbill': zoix['cp_order_id'], 'productid': zoix['product_id'], 'productname': pqdefg['productname'], 'productdesc': pqdefg['productdesc'], 'serverid': _rYE['selectedServer']['server_id'], 'servername': _rYE['selectedServer']['server_name'], 'roleid': pqdefg['roleid'], 'rolename': pqdefg['rolename'], 'rolelevel': pqdefg['rolelevel'], 'price': pqdefg['price'], 'extension': JSON['stringify']({ 'cp_order_id': zoix['cp_order_id'] }) }, function (_hcu6, wyrm8k) {
        pqdefg[i[280192]] && _hcu6 == 0x0 && pqdefg[i[280192]](zoix['product_id'], zoix['cp_order_id'], _hcu6);console[i[280000]](JSON['stringify']({ 'type': i[280194], 'status': _hcu6, 'data': zoix, 'role_name': pqdefg['rolename'] }));if (_hcu6 === 0x0) {} else {
          if (_hcu6 === 0x1) {} else {
            if (_hcu6 === 0x2) {}
          }
        }
      });
    } else alert(zoix[i[280000]]);
  }
}, window['_rFEYS'] = function () {}, window['_rSFE'] = function (fchn56, mkw8o, zx2sji, p7geq, w8m7kr) {
  r_erqp7['logCreateRole'](_rYE['selectedServer']['server_id'], _rYE['selectedServer']['server_name'] || _rYE['selectedServer']['server_id'], fchn56, mkw8o, zx2sji), sendApi(_rYE['apiurl'], 'User.create_role', { 'game_pkg': _rYE[i[280103]], 'server_id': _rYE['selectedServer']['server_id'], 'role_id': fchn56, 'uid': _rYE[i[280007]], 'role_name': mkw8o, 'role_type': p7geq, 'level': zx2sji });
}, window['_rSEF'] = function (uh56, m7k8w, ndc5f6, qfdge, ergqp, dfeqp, mg7rqe, lt03s, h1_u6a, gdqe7) {
  _rYE['roleId'] = uh56, _rYE['roleName'] = m7k8w, _rYE['roleLevel'] = ndc5f6, r_erqp7['logEnterGame'](_rYE['selectedServer']['server_id'], _rYE['selectedServer']['server_name'] || _rYE['selectedServer']['server_id'], uh56, m7k8w, ndc5f6), sendApi(_rYE['apiurl'], 'User.update_role', { 'game_pkg': _rYE[i[280103]], 'server_id': _rYE['selectedServer']['server_id'], 'role_id': uh56, 'uid': _rYE[i[280007]], 'role_name': m7k8w, 'role_type': qfdge, 'level': ndc5f6, 'evolution': ergqp });
}, window['_rFSE'] = function (dfenp, kr78, z2xoji, stvl0, ger7qm, $a41b9, r87k, n6hc, d6fc, cfqnp) {
  _rYE['roleId'] = dfenp, _rYE['roleName'] = kr78, _rYE['roleLevel'] = z2xoji, r_erqp7[i[280195]](_rYE['selectedServer']['server_id'], _rYE['selectedServer']['server_name'] || _rYE['selectedServer']['server_id'], dfenp, kr78, z2xoji), sendApi(_rYE['apiurl'], 'User.update_role', { 'game_pkg': _rYE[i[280103]], 'server_id': _rYE['selectedServer']['server_id'], 'role_id': dfenp, 'uid': _rYE[i[280007]], 'role_name': kr78, 'role_type': stvl0, 'level': z2xoji, 'evolution': ger7qm });
}, window['_rFES'] = function (iok8yj) {}, window['_rSF'] = function (ua19b) {
  r_erqp7['share']('share', function (b491) {
    ua19b && ua19b(b491);
  });
}, window['openService'] = function () {
  r_erqp7['openService']();
}, window['microPortGuide'] = function () {
  r_erqp7['weiduanHelper']();
}, window['_rFS'] = function (mkw8r7) {
  window['_rEFS'] = mkw8r7, window['_rEFS'] && window['_rESF'] && (console[i[280000]](i[280086] + window['_rESF'][i[280087]]), window['_rEFS'](window['_rESF']), window['_rESF'] = null);
}, window['_rYSFE'] = function (q7gp, r8mkwy, _6u1a, _6uh15) {
  window[i[280196]]('https://sdk.sh9130.com/game/?ct=min&ac=getInviter', { 'game_pkg': window['_rYE'][i[280103]], 'role_id': r8mkwy, 'server_id': _6u1a }, _6uh15);
}, window['_rYSEF'] = function (a$91b4, gew7rm) {
  function pqfdg(tsx2zj) {
    var mok = [],
        uh61a_ = [],
        qdncp = window[i[280003]][i[280197]];for (var $au_1 in qdncp) {
      var wrmyk8 = Number($au_1);(!a$91b4 || !a$91b4[i[280005]] || a$91b4[i[280066]](wrmyk8) != -0x1) && (uh61a_[i[280017]](qdncp[$au_1]), mok[i[280017]]([wrmyk8, 0x3]));
    }window['_rUFEYS'](window['SDKVersion'], i[280198]) >= 0x0 ? (console[i[280019]](i[280199]), r_erqp7['subscribeMessage'] && r_erqp7['subscribeMessage'](uh61a_, function (yxoij2) {
      console[i[280019]](i[280200]), console[i[280019]](yxoij2);if (yxoij2 && yxoij2['errMsg'] == 'requestSubscribeMessage:ok') for (var qnfped in qdncp) {
        if (yxoij2[qdncp[qnfped]] == i[280201]) {
          var pcdqf = Number(qnfped);for (var df6c5 = 0x0; df6c5 < mok[i[280005]]; df6c5++) {
            if (mok[df6c5][0x0] == pcdqf) {
              mok[df6c5][0x1] = 0x1;break;
            }
          }
        }
      }window['_rUFEYS'](window['SDKVersion'], i[280202]) >= 0x0 ? wx[i[280203]]({ 'withSubscriptions': !![], 'success': function (n5_h6c) {
          var wm78k = n5_h6c['subscriptionsSetting'][i[280204]];if (wm78k) {
            console[i[280019]](i[280205]), console[i[280019]](wm78k);for (var _1bua$ in qdncp) {
              if (wm78k[qdncp[_1bua$]] == i[280201]) {
                var _auh61 = Number(_1bua$);for (var qfncp = 0x0; qfncp < mok[i[280005]]; qfncp++) {
                  if (mok[qfncp][0x0] == _auh61) {
                    mok[qfncp][0x1] = 0x2;break;
                  }
                }
              }
            }console[i[280019]](mok), gew7rm && gew7rm(mok);
          } else console[i[280019]](i[280206]), console[i[280019]](n5_h6c), console[i[280019]](mok), gew7rm && gew7rm(mok);
        }, 'fail': function () {
          console[i[280019]](i[280207]), console[i[280019]](mok), gew7rm && gew7rm(mok);
        } }) : (console[i[280019]](i[280208] + window['SDKVersion']), console[i[280019]](mok), gew7rm && gew7rm(mok));
    })) : (console[i[280019]](i[280209] + window['SDKVersion']), console[i[280019]](mok), gew7rm && gew7rm(mok)), wx[i[280210]](pqfdg);
  }wx[i[280211]](pqfdg);
}, window['_rYFSE'] = { 'isSuccess': ![], 'level': i[280212], 'isCharging': ![] }, window['_rYFES'] = function (ixo2zj) {
  wx['getBatteryInfo']({ 'success': function (mq7ge) {
      var y8wrm = window['_rYFSE'];y8wrm[i[280213]] = !![], y8wrm[i[280080]] = Number(mq7ge[i[280080]])[i[280214]](0x0), y8wrm['isCharging'] = mq7ge['isCharging'], ixo2zj && ixo2zj(y8wrm[i[280213]], y8wrm[i[280080]], y8wrm['isCharging']);
    }, 'fail': function (xoyi8j) {
      console[i[280019]](i[280215], xoyi8j['errMsg']);var $1ua_ = window['_rYFSE'];ixo2zj && ixo2zj($1ua_[i[280213]], $1ua_[i[280080]], $1ua_['isCharging']);
    } });
}, window[i[280196]] = function (u9$1a, xs3z2, gq7mr, mr7q, $a19b4, wkio8y, uh56_, owm8y) {
  mr7q == undefined && (mr7q = 0x1);var mgk7w = new XMLHttpRequest();mgk7w['onreadystatechange'] = function () {
    if (mgk7w['readyState'] == 0x4) {
      if (mgk7w[i[280183]] == 0xc8 || mgk7w[i[280183]] == 0x12d) {
        var jxiy2o = mgk7w['response'];jxiy2o = JSON['parse'](mgk7w['response']);if (!wkio8y || wkio8y(jxiy2o, mgk7w, u9$1a)) {
          gq7mr && gq7mr(jxiy2o);return;
        } else console[i[280000]](u9$1a), console['error'](jxiy2o);
      }mr7q - 0x1 > 0x0 ? setTimeout(function () {
        send(u9$1a, xs3z2, gq7mr, mr7q - 0x1, $a19b4, wkio8y);
      }, 0x3e8) : $a19b4 && $a19b4(JSON['stringify']({ 'url': u9$1a, 'status': mgk7w[i[280183]], 'response': mgk7w['response'], 'responseType': mgk7w['responseType'] }));
    }
  }, mgk7w[i[280216]](uh56_ || i[280217], u9$1a), mgk7w['responseType'] = i[280218], mgk7w['setRequestHeader'](i[280219], owm8y || i[280139]), mgk7w[i[280196]](xs3z2);
}, window[i[280220]] = function (iyow, _56hu, n_h5, kwr8, pe7gdq, yo8xji, nfdpq) {
  !n_h5 && (n_h5 = {});var ab914 = Math['floor'](Date[i[280110]]() / 0x3e8);n_h5[i[280179]] = ab914, n_h5[i[280221]] = _56hu;var wiy8o = Object[i[280222]](n_h5)['sort'](),
      zsvlt3 = '',
      $1bu_ = '';for (var penqdf = 0x0; penqdf < wiy8o[i[280005]]; penqdf++) {
    zsvlt3 = zsvlt3 + (penqdf == 0x0 ? '' : '&') + wiy8o[penqdf] + n_h5[wiy8o[penqdf]], $1bu_ = $1bu_ + (penqdf == 0x0 ? '' : '&') + wiy8o[penqdf] + '=' + encodeURIComponent(n_h5[wiy8o[penqdf]]);
  }zsvlt3 = zsvlt3 + _rYE[i[280101]];var edfpq = i[280223] + md5(zsvlt3);send(iyow + '?' + $1bu_ + ($1bu_ == '' ? '' : '&') + edfpq, null, kwr8, pe7gdq, yo8xji, nfdpq || function (j2xzts) {
    return j2xzts[i[280128]] == i[280175];
  }, null, 'application/x-www-form-urlencoded');
}, window['_rYESF'] = function (zi2sj, m8ryw) {
  var s32zxt = 0x0;_rYE['selectedServer'] && (s32zxt = _rYE['selectedServer']['server_id']), sendApi(_rYE['logurl'], 'UserLog.reportUidStep', { 'partnerId': _rYE['partnerId'], 'gamePkg': _rYE[i[280103]], 'logTime': Math['floor'](Date[i[280110]]() / 0x3e8), 'platformUid': _rYE['platform_uid'], 'type': zi2sj, 'serverId': s32zxt }, null, 0x2, null, function () {
    return !![];
  });
}, window['_rYEFS'] = function (mwr7ge) {
  sendApi(_rYE['apiurl'], 'Server.getServerGroup', { 'partner_id': _rYE['partnerId'], 'uid': _rYE[i[280007]], 'version': _rYE['version'], 'game_pkg': _rYE[i[280103]], 'device': _rYE[i[280104]] }, _rSFY, _rFEY, _rES);
}, window['_rSFY'] = function (j8kiy) {
  if (j8kiy[i[280128]] === i[280175] && j8kiy[i[280127]]) {
    j8kiy[i[280127]][i[280224]]({ 'id': -0x2, 'name': i[280225] }), j8kiy[i[280127]][i[280224]]({ 'id': -0x1, 'name': i[280226] }), _rYE['groupList'] = j8kiy[i[280127]];if (window[i[280227]]) window[i[280227]]['showGroupList']();
  } else _rYE['hasGroupReq'] = ![], window['_rSFYE']('reqServerGroupCallBack ' + j8kiy[i[280128]]);
}, window['_rSYF'] = function (mrwe7) {
  sendApi(_rYE['apiurl'], 'Server.getServerByUid', { 'partner_id': _rYE['partnerId'], 'uid': _rYE[i[280007]], 'version': _rYE['version'], 'game_pkg': _rYE[i[280103]], 'device': _rYE[i[280104]] }, _rFSY, _rFEY, _rES);
}, window['_rFSY'] = function (ixoy8) {
  _rYE['hasServerReq'] = ![];if (ixoy8[i[280128]] === i[280175] && ixoy8[i[280127]]) {
    for (var myr8kw = 0x0; myr8kw < ixoy8[i[280127]][i[280005]]; myr8kw++) {
      ixoy8[i[280127]][myr8kw][i[280183]] = _rESFY(ixoy8[i[280127]][myr8kw]);
    }_rYE['serverList'][-0x1] = window['changeServerName'](ixoy8[i[280127]]), window[i[280227]]['showServerList'](-0x1);
  } else window['_rSFYE']('reqServerOwnerCallBack ' + ixoy8[i[280128]]);
}, window['req_server_owner_status'] = function (kwr7) {
  sendApi(_rYE['apiurl'], 'Server.getServerByUid', { 'partner_id': _rYE['partnerId'], 'uid': _rYE[i[280007]], 'version': _rYE['version'], 'game_pkg': _rYE[i[280103]], 'device': _rYE[i[280104]] }, kwr7, _rFEY, _rES);
}, window['_rFYS'] = function (eqdgf, z2oxj) {
  sendApi(_rYE['apiurl'], 'Server.getServerByGroup', { 'partner_id': _rYE['partnerId'], 'uid': _rYE[i[280007]], 'version': _rYE['version'], 'game_pkg': _rYE[i[280103]], 'device': _rYE[i[280104]], 'server_group_id': z2oxj }, _rYSF, _rFEY, _rES);
}, window['_rYSF'] = function (dep7qg) {
  _rYE['hasServerReq'] = ![];if (dep7qg[i[280128]] === i[280175] && dep7qg[i[280127]] && dep7qg[i[280127]][i[280127]]) {
    var ls0v3 = dep7qg[i[280127]]['server_group_id'],
        _56chn = [];for (var fdeqnp = 0x0; fdeqnp < dep7qg[i[280127]][i[280127]][i[280005]]; fdeqnp++) {
      dep7qg[i[280127]][i[280127]][fdeqnp][i[280183]] = _rESFY(dep7qg[i[280127]][i[280127]][fdeqnp]), (_56chn[i[280005]] == 0x0 || dep7qg[i[280127]][i[280127]][fdeqnp][i[280183]] != 0x0) && (_56chn[_56chn[i[280005]]] = dep7qg[i[280127]][i[280127]][fdeqnp]);
    }_rYE['serverList'][ls0v3] = window['changeServerName'](_56chn), window[i[280227]]['showServerList'](ls0v3);
  } else window['_rSFYE']('reqServerListCallBack ' + dep7qg[i[280128]]);
}, window['_rUYFE'] = function (fepdqn) {
  sendApi(_rYE['apiurl'], 'Server.getRecommendServerList', { 'partner_id': _rYE['partnerId'], 'uid': _rYE[i[280007]], 'version': _rYE['version'], 'game_pkg': _rYE[i[280103]], 'device': _rYE[i[280104]] }, reqServerRecommendCallBack, _rFEY, _rES);
}, window['reqServerRecommendCallBack'] = function (u_a1bh) {
  _rYE['hasServerReq'] = ![];if (u_a1bh[i[280128]] === i[280175] && u_a1bh[i[280127]]) {
    for (var bu9a1 = 0x0; bu9a1 < u_a1bh[i[280127]][i[280005]]; bu9a1++) {
      u_a1bh[i[280127]][bu9a1][i[280183]] = _rESFY(u_a1bh[i[280127]][bu9a1]);
    }_rYE['serverList'][-0x2] = window['changeServerName'](u_a1bh[i[280127]]), window[i[280227]]['showServerList'](-0x2);
  } else alert('reqServerRecommendCallBack ' + u_a1bh[i[280128]]);
}, window['changeServerName'] = function (efpqgd) {
  if (!efpqgd && efpqgd[i[280005]] <= 0x0) return efpqgd;for (let xi2joz = 0x0; xi2joz < efpqgd[i[280005]]; xi2joz++) {
    efpqgd[xi2joz]['is_recommend'] && efpqgd[xi2joz]['is_recommend'] == 0x1 && (efpqgd[xi2joz]['server_name'] += i[280228]);
  }return efpqgd;
}, window['_rYFS'] = function (t3l0s, ijy8xo) {
  t3l0s = t3l0s || _rYE['selectedServer']['server_id'], sendApi(_rYE['apiurl'], i[280229], { 'type': '4', 'game_pkg': _rYE[i[280103]], 'server_id': t3l0s }, ijy8xo);
}, window['req_multi_server_notice'] = function (epqg, cn6, tl2s, vs3lt0) {
  tl2s = tl2s || _rYE['selectedServer']['server_id'], sendApi(_rYE['apiurl'], i[280230], { 'type': epqg, 'game_pkg': cn6, 'server_id': tl2s }, vs3lt0);
}, window['_rESFY'] = function (iyko8w) {
  if (iyko8w) {
    if (iyko8w[i[280183]] == 0x1) {
      if (iyko8w[i[280231]] == 0x1) return 0x2;else return 0x1;
    } else return iyko8w[i[280183]] == 0x0 ? 0x0 : -0x1;
  }return -0x1;
}, window['_rESYF'] = function (jz2s, rkgwm7) {
  _rYE[i[280232]] = { 'step': jz2s, 'server_id': rkgwm7 };var dnqfpc = this;_rSYFE({ 'title': i[280233] }), sendApi(_rYE['apiurl'], 'User.checkInfo', { 'partner_id': _rYE['partnerId'], 'uid': _rYE[i[280007]], 'game_pkg': _rYE[i[280103]], 'server_id': rkgwm7, 'platform': _rYE['platform'], 'platform_uid': _rYE['platform_uid'], 'check_login_time': _rYE[i[280178]], 'check_login_sign': _rYE[i[280176]], 'version_name': _rYE['version_name'] }, _rEFSY, _rFEY, _rES, function (mwkgr) {
    return mwkgr[i[280128]] == i[280175] || mwkgr[i[280000]] == 'time_err' || mwkgr[i[280000]] == 'sign_err';
  });
}, window['_rEFSY'] = function (z2xsj) {
  var wgmer7 = this;if (z2xsj[i[280128]] === i[280175] && z2xsj[i[280127]]) {
    var qepgr = _rYE['selectedServer'];qepgr[i[280234]] = _rYE[i[280105]], qepgr[i[280177]] = String(z2xsj[i[280127]][i[280235]]), qepgr[i[280109]] = parseInt(z2xsj[i[280127]][i[280179]]);if (z2xsj[i[280127]]['server_num']) qepgr['server_num'] = parseInt(z2xsj[i[280127]]['server_num']);else qepgr['server_num'] = parseInt(z2xsj[i[280127]]['server_id']);qepgr[i[280236]] = 0x0, qepgr[i[280008]] = _rYE[i[280187]], qepgr['resver'] = z2xsj[i[280127]]['cdn_version'], qepgr['server_options'] = z2xsj[i[280127]]['server_options'], console[i[280019]]('server_options\uFF1A' + JSON['stringify'](qepgr['server_options'])), _rYE['newRegister'] == 0x1 && qepgr['server_options'] && qepgr['server_options'][i[280237]] == 0x1 && (_rYE[i[280238]] = 0x1, window['ServerLoading'][i[280014]]['_rUE']()), _rEFYS();
  } else sendApi(_rYE['apiurl'], 'User.login', { 'platform': _rYE[i[280096]], 'partner_id': _rYE['partnerId'], 'token': _rYE[i[280168]], 'game_pkg': _rYE[i[280103]], 'deviceId': _rYE[i[280104]], 'scene': i[280170] + _rYE['from_scene'] }, function (gq7dp) {
    if (gq7dp[i[280128]] == i[280239]) {
      window['_rSFYE']('User.login failed: ' + gq7dp[i[280128]]);return;
    }_rYE[i[280176]] = String(gq7dp[i[280177]]), _rYE[i[280178]] = String(gq7dp[i[280179]]), setTimeout(function () {
      _rESYF(_rYE[i[280232]][i[280240]], _rYE[i[280232]]['server_id']);
    }, 0x5dc);
  }, _rFEY, _rES, function ($1b49a) {
    return $1b49a[i[280128]] == i[280175] || $1b49a[i[280128]] == i[280239];
  });
}, window['_rEFYS'] = function () {
  ServerLoading[i[280014]][i[280186]](_rYE['newRegister']), window['_rFE'] = !![], window['_rEYFS']();
}, window['_rEYSF'] = function () {
  if (window['_rEF'] && window['_rYFE'] && window['loadServerRes'] && window[i[280116]] && window['_rYEF'] && window['_rYF']) {
    if (!window[i[280241]][i[280014]]) {
      console[i[280019]](i[280242] + window[i[280241]][i[280014]]);var e7mrqg = wx[i[280243]](),
          ijyox = e7mrqg[i[280087]] ? e7mrqg[i[280087]] : 0x0,
          enfd = { 'cdn': window['_rYE'][i[280008]], 'spareCdn': window['_rYE']['spareCdn'], 'newRegister': window['_rYE']['newRegister'], 'wxPC': window['_rYE'][i[280069]], 'wxIOS': window['_rYE'][i[280065]], 'wxAndroid': window['_rYE']['wxAndroid'], 'wxParam': { 'limitLoad': window['_rYE']['_rUSYFE'], 'benchmarkLevel': window['_rYE']['_rUSYEF'], 'wxFrom': window[i[280003]]['from'] == i[280244] ? 0x1 : 0x0, 'wxSDKVersion': window['SDKVersion'] }, 'configType': window['_rYE'][i[280111]], 'exposeType': window['_rYE'][i[280113]], 'scene': ijyox };new window[i[280241]](enfd, window['_rYE']['lastVersion'], window['_rUSFEY']);
    }
  }
}, window['_rEYFS'] = function () {
  if (window['_rEF'] && window['_rYFE'] && window['loadServerRes'] && window[i[280116]] && window['_rYEF'] && window['_rYF'] && window['_rFE'] && window['_rFY']) {
    _rSYEF();if (!_rEFY) {
      _rEFY = !![];if (!window[i[280241]][i[280014]]) window['_rEYSF']();var nfedpq = 0x0,
          ednqfp = wx[i[280245]]();ednqfp && (window['_rYE'][i[280068]] && (nfedpq = ednqfp[i[280062]]), console[i[280000]](i[280246] + ednqfp[i[280062]] + i[280247] + ednqfp[i[280063]] + i[280248] + ednqfp[i[280064]] + ',right:' + ednqfp['right'] + i[280249] + ednqfp[i[280250]] + i[280251] + ednqfp[i[280252]]));var n6_h = {};for (const rg7mk in _rYE['selectedServer']) {
        n6_h[rg7mk] = _rYE['selectedServer'][rg7mk];
      }var joki = { 'channel': window['_rYE'][i[280106]], 'account': window['_rYE'][i[280007]], 'userId': window['_rYE']['userId'], 'cdn': window['_rYE'][i[280008]], 'data': window['_rYE'][i[280127]], 'package': window['_rYE'][i[280095]], 'newRegister': window['_rYE']['newRegister'], 'pkgName': window['_rYE'][i[280103]], 'partnerId': window['_rYE']['partnerId'], 'platform_uid': window['_rYE']['platform_uid'], 'deviceId': window['_rYE'][i[280104]], 'selectedServer': n6_h, 'configType': window['_rYE'][i[280111]], 'exposeType': window['_rYE'][i[280113]], 'debugUsers': window['_rYE']['debugUsers'], 'wxMenuTop': nfedpq, 'wxShield': window['_rYE'][i[280115]] };if (window[i[280188]]) for (var ixyoj in window[i[280188]]) {
        joki[ixyoj] = window[i[280188]][ixyoj];
      }window[i[280241]][i[280014]]['_rFUEY'](joki), setTimeout(() => {
        !wx_develop && new minitool();
      }, 0x2710);
    }
  } else console[i[280000]]('\u3010登录\u3011loadProbPkg:' + window['_rEF'] + i[280253] + window['_rYFE'] + ',loadServerRes:' + window['loadServerRes'] + i[280254] + window[i[280116]] + ',loadVersion:' + window['_rYEF'] + ',loadServer:' + window['_rYF'] + i[280255] + window['_rFE'] + i[280256] + window['_rFY']);
};