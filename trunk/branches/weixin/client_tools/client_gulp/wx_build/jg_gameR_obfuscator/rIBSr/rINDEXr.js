var i = wx.$R;
import r_qgr7 from '../RskRR/rs6kr.js';window['versions'] = { 'wxVersion': window[i[280003]]['game_ver'] }, window[i[280090]] = ![], window['_rEY'] = 0x1, window[i[280091]] = 0x1, window['_rFYE'] = !![], window[i[280092]] = !![], window['_rUSFEY'] = '', window['_rYE'] = { 'base_cdn': i[280093], 'cdn': i[280093] }, _rYE[i[280094]] = {}, _rYE[i[280095]] = '0', _rYE['version'] = window['versions']['wxVersion'], _rYE[i[280071]] = '', _rYE['os'] = '1', _rYE[i[280096]] = i[280097], _rYE['apiurl'] = i[280098], _rYE['logurl'] = i[280099], _rYE['payurl'] = i[280100], _rYE[i[280101]] = i[280102], _rYE['partnerId'] = '1', _rYE[i[280103]] = '', _rYE[i[280104]] = '', _rYE['from_scene'] = 0x0, _rYE['serverList'] = {}, _rYE[i[280105]] = parseInt(_rYE['partnerId']), _rYE[i[280106]] = _rYE['partnerId'], _rYE['selectedServer'] = {}, _rYE['_rSY'] = 'https://jgcenter.sh9130.com/clientlog/', _rYE[i[280107]] = ![], _rYE['debugUsers'] = i[280108], _rYE[i[280109]] = Date[i[280110]](), _rYE[i[280111]] = i[280112], _rYE[i[280113]] = '_a', _rYE[i[280114]] = 0x2, _rYE['lastVersion'] = 0x7c1, _rYE['wxVersion'] = window['versions']['wxVersion'], _rYE[i[280115]] = ![], _rYE[i[280065]] = ![], _rYE['wxAndroid'] = ![], _rYE[i[280069]] = ![], window['_rFEY'] = 0x5, window['_rFE'] = ![], window['_rEF'] = ![], window['_rYFE'] = ![], window['loadServerRes'] = ![], window[i[280116]] = ![], window['_rYEF'] = ![], window['_rFY'] = ![], window['_rYF'] = ![], window['_rEFY'] = ![], window['alert'] = function (deqpnf) {
  console[i[280019]]('alert', deqpnf), wx[i[280117]]({}), wx[i[280024]]({ 'title': i[280040], 'content': deqpnf, 'success'(k8omw) {
      if (k8omw['confirm']) console[i[280019]](i[280118]);else k8omw[i[280119]] && console[i[280019]](i[280120]);
    } });
}, window['_rSFYE'] = function (mwr7kg) {
  console[i[280019]]('loginAlert', mwr7kg), _rSYEF(), wx[i[280024]]({ 'title': i[280040], 'content': mwr7kg, 'confirmText': i[280121], 'cancelText': i[280122], 'success'(ixjo2z) {
      if (ixjo2z['confirm']) window['_rYS']();else ixjo2z[i[280119]] && (console[i[280019]](i[280123]), wx['exitMiniProgram']({}));
    } });
}, window['_rEUY'] = function (ky8rm) {
  console[i[280019]]('exitAlert', ky8rm), wx[i[280024]]({ 'title': i[280040], 'content': ky8rm, 'confirmText': i[280124], 'showCancel': ![], 'complete'(kgmrw) {
      console[i[280019]](i[280123]), wx['exitMiniProgram']({});
    } });
}, window['_rSFEY'] = ![], window['_rSYFE'] = function (rwgm7) {
  window['_rSFEY'] = !![], wx[i[280125]](rwgm7);
}, window['_rSYEF'] = function () {
  window['_rSFEY'] && (window['_rSFEY'] = ![], wx[i[280117]]({}));
}, window['_rSEFY'] = function (z3stlv) {
  window['ServerLoading'][i[280014]]['_rSEFY'](z3stlv);
}, window[i[280126]] = function (zxij2s, $_1au) {
  r_qgr7[i[280126]](zxij2s, function (rewmg) {
    rewmg && rewmg[i[280127]] ? rewmg[i[280127]][i[280128]] == 0x1 ? $_1au(!![]) : ($_1au(![]), console[i[280000]](i[280129] + rewmg[i[280127]][i[280130]])) : console[i[280019]](i[280126], rewmg);
  });
}, window['_rSEYF'] = function (a1) {
  console[i[280019]](i[280131], a1);
}, window['_rSYE'] = function (ergmq7) {}, window['_rSEY'] = function (fqdeg, dqp, mwe7r) {}, window['_rSE'] = function (c_u6) {
  console[i[280019]]('toEnterGame', c_u6), window['ServerLoading'][i[280014]]['closeAuthor'](), window['ServerLoading'][i[280014]]['closeServer'](), window['ServerLoading'][i[280014]][i[280132]]();
}, window['_rES'] = function (ztsv3) {
  window['_rSFYE']('on api error');var wrk7m8 = { 'id': window['_rYE']['roleId'], 'role': window['_rYE']['roleName'], 'level': window['_rYE']['roleLevel'], 'account': window['_rYE'][i[280007]], 'version': window['_rYE']['lastVersion'], 'cdn': window['_rYE'][i[280008]], 'pkgName': window['_rYE'][i[280103]], 'gamever': window[i[280003]]['game_ver'], 'serverid': window['_rYE']['selectedServer'] ? window['_rYE']['selectedServer']['server_id'] : 0x0, 'systemInfo': window[i[280009]], 'error': 'onApiError', 'stack': ztsv3 ? ztsv3 : 'on api error' },
      a9b4$ = JSON['stringify'](wrk7m8);console['error'](i[280133] + a9b4$), window['_rSY'](a9b4$);
}, window['_rYSE'] = function (_hbu1) {
  var b9a1u = JSON['parse'](_hbu1);b9a1u['gamever'] = window[i[280003]]['game_ver'], b9a1u['serverid'] = window['_rYE']['selectedServer'] ? window['_rYE']['selectedServer']['server_id'] : 0x0, b9a1u[i[280009]] = window[i[280009]];var _1b$au = JSON['stringify'](b9a1u);console['error'](i[280134] + _1b$au), window['_rSY'](_1b$au);
}, window['_rYES'] = function (dfc6n, remq) {
  var cp5n = { 'id': window['_rYE']['roleId'], 'role': window['_rYE']['roleName'], 'level': window['_rYE']['roleLevel'], 'account': window['_rYE'][i[280007]], 'version': window['_rYE']['lastVersion'], 'cdn': window['_rYE'][i[280008]], 'pkgName': window['_rYE'][i[280103]], 'gamever': window[i[280003]]['game_ver'], 'serverid': window['_rYE']['selectedServer'] ? window['_rYE']['selectedServer']['server_id'] : 0x0, 'systemInfo': window[i[280009]], 'error': dfc6n, 'stack': remq },
      _u$a1b = JSON['stringify'](cp5n);console['warn'](i[280135] + _u$a1b), window['_rSY'](_u$a1b);
}, window['_rSY'] = function (zlst3) {
  if (window['_rYE']['wxPlatform'] == i[280136]) return;var b_1u$ = _rYE['_rSY'] + i[280137] + _rYE[i[280007]];wx['request']({ 'url': b_1u$, 'method': i[280138], 'data': zlst3, 'header': { 'content-type': i[280139], 'cache-control': i[280140] }, 'success': function (lv3szt) {
      DEBUG && console[i[280019]](i[280141], b_1u$, zlst3, lv3szt);
    }, 'fail': function (yjx8oi) {
      DEBUG && console[i[280019]](i[280141], b_1u$, zlst3, yjx8oi);
    }, 'complete': function () {} });
}, window[i[280142]] = function () {
  function u1ab() {
    return ((0x1 + Math['random']()) * 0x10000 | 0x0)['toString'](0x10)['substring'](0x1);
  }return u1ab() + u1ab() + '-' + u1ab() + '-' + u1ab() + '-' + u1ab() + '+' + u1ab() + u1ab() + u1ab();
}, window['_rYS'] = function () {
  console[i[280019]](i[280143]);var wg7em = r_qgr7[i[280144]]();_rYE[i[280106]] = wg7em['partner_id'], _rYE[i[280105]] = wg7em['partner_id'], _rYE['partnerId'] = wg7em['partner_id'], _rYE[i[280103]] = wg7em[i[280145]];var xsj2zt = { 'game_ver': _rYE['version'] };_rYE[i[280104]] = this[i[280142]](), _rSYFE({ 'title': i[280146] }), r_qgr7[i[280147]](xsj2zt, this['_rESY'][i[280148]](this));
};var wx_develop = ![];window['_rESY'] = function (s3l2z) {
  var w8omyk = s3l2z[i[280149]];wx_develop = w8omyk == 0x1, console[i[280019]](i[280150] + w8omyk + i[280151] + (w8omyk == 0x1) + i[280152] + s3l2z['game_ver'] + i[280153] + window['versions']['wxVersion']);if (!s3l2z['game_ver'] || window['_rUFEYS'](window['versions']['wxVersion'], s3l2z['game_ver']) < 0x0) console[i[280019]](i[280154]), _rYE['apiurl'] = i[280155], _rYE['logurl'] = i[280156], _rYE['payurl'] = i[280157], _rYE[i[280008]] = i[280158], _rYE['spareCdn'] = i[280159], _rYE['version_name'] = i[280160], _rYE[i[280115]] = ![];else window['_rUFEYS'](window['versions']['wxVersion'], s3l2z['game_ver']) == 0x0 ? (console[i[280019]](i[280161]), _rYE['apiurl'] = i[280098], _rYE['logurl'] = i[280099], _rYE['payurl'] = i[280100], _rYE[i[280008]] = i[280162], _rYE['spareCdn'] = i[280159], _rYE['version_name'] = i[280163], _rYE[i[280115]] = !![]) : (console[i[280019]](i[280164]), _rYE['apiurl'] = i[280098], _rYE['logurl'] = i[280099], _rYE['payurl'] = i[280100], _rYE[i[280008]] = i[280162], _rYE['spareCdn'] = i[280159], _rYE['version_name'] = i[280163], _rYE[i[280115]] = ![]);_rYE['from_scene'] = config['from'] ? config['from'] : 0x0, this['_rFYSE'](), this['_rFYES'](), window['sdkLoginRetry'] = 0x5, _rSYFE({ 'title': i[280165] }), r_qgr7[i[280166]](this['_rEYS'][i[280148]](this));
}, window['sdkLoginRetry'] = 0x5, window['_rEYS'] = function (qreg7, qgpr) {
  if (qreg7 == 0x0 && qgpr && qgpr[i[280167]]) {
    _rYE[i[280168]] = qgpr[i[280167]];var fendp = this;_rSYFE({ 'title': i[280169] }), sendApi(_rYE['apiurl'], 'User.login', { 'platform': _rYE[i[280096]], 'partner_id': _rYE['partnerId'], 'token': qgpr[i[280167]], 'game_pkg': _rYE[i[280103]], 'deviceId': _rYE[i[280104]], 'scene': i[280170] + _rYE['from_scene'] }, this['_rFSYE'][i[280148]](this), _rFEY, _rES);
  } else qgpr && qgpr['errMsg'] && window['sdkLoginRetry'] > 0x0 && (qgpr['errMsg'][i[280066]]('fail interrupted') != -0x1 || qgpr['errMsg'][i[280066]]('network api interrupted') != -0x1 || qgpr['errMsg'][i[280066]]('Network Error') != -0x1 || qgpr['errMsg'][i[280066]](i[280171]) != -0x1 || qgpr['errMsg'][i[280066]](i[280172]) != -0x1 || qgpr['errMsg'][i[280066]](i[280173]) != -0x1) ? (window['sdkLoginRetry']--, r_qgr7[i[280166]](this['_rEYS'][i[280148]](this))) : (window['_rYES']('sdkOnLoginError', JSON['stringify']({ 'status': qreg7, 'data': qgpr })), window['_rSFYE'](i[280174] + (qgpr && qgpr['errMsg'] ? '，' + qgpr['errMsg'] : '')));
}, window['_rFSYE'] = function (cuh65) {
  if (!cuh65) {
    window['_rSFYE']('User.login failed');return;
  }if (cuh65[i[280128]] != i[280175]) {
    window['_rSFYE']('User.login failed: ' + cuh65[i[280128]]);return;
  }_rYE['userId'] = String(cuh65[i[280007]]), _rYE[i[280007]] = String(cuh65[i[280007]]), _rYE['platform'] = String(cuh65['platform']), _rYE[i[280106]] = String(cuh65['platform']), _rYE['platform_uid'] = String(cuh65['platform_uid']), _rYE[i[280176]] = String(cuh65[i[280177]]), _rYE[i[280178]] = String(cuh65[i[280179]]), _rYE[i[280177]] = '';var wm7rge = this;_rSYFE({ 'title': i[280180] }), sendApi(_rYE['apiurl'], 'Server.defaultServer', { 'partner_id': _rYE['partnerId'], 'uid': _rYE[i[280007]], 'version': _rYE['version'], 'game_pkg': _rYE[i[280103]], 'device': _rYE[i[280104]] }, wm7rge['_rFSEY'][i[280148]](wm7rge), _rFEY, _rES);
}, window['_rFSEY'] = function (a1hbu_) {
  if (!a1hbu_) {
    window['_rSFYE']('Server.defaultServer failed');return;
  }if (a1hbu_[i[280128]] != i[280175]) {
    window['_rSFYE']('Server.defaultServer failed: ' + a1hbu_[i[280128]]);return;
  }if (!a1hbu_[i[280127]] || a1hbu_[i[280127]][i[280005]] == 0x0) {
    window['_rSFYE'](i[280181]);return;
  }_rYE['newRegister'] = a1hbu_[i[280182]], _rYE['selectedServer'] = { 'server_id': String(a1hbu_[i[280127]][0x0]['server_id']), 'server_name': String(a1hbu_[i[280127]][0x0]['server_name']), 'entry_ip': a1hbu_[i[280127]][0x0]['entry_ip'], 'entry_port': parseInt(a1hbu_[i[280127]][0x0]['entry_port']), 'status': _rESFY(a1hbu_[i[280127]][0x0]), 'start_time': a1hbu_[i[280127]][0x0]['start_time'], 'cdn': _rYE[i[280008]] }, this['_rUSFYE']();
}, window['_rUSFYE'] = function () {
  if (_rYE['newRegister'] == 0x1) {
    var jo2xiy = _rYE['selectedServer'][i[280183]];if (jo2xiy === -0x1 || jo2xiy === 0x0) {
      window['_rSFYE'](jo2xiy === -0x1 ? i[280184] : i[280185]);return;
    }_rESYF(0x0, _rYE['selectedServer']['server_id']), window['ServerLoading'][i[280014]][i[280186]](_rYE['newRegister']);
  } else window['ServerLoading'][i[280014]]['openServer'](), _rSYEF();window['_rYF'] = !![], window['_rEYSF'](), window['_rEYFS']();
}, window['_rFYSE'] = function () {
  var wyiko = this;sendApi(_rYE['apiurl'], 'User.getCdnVersion', { 'game_pkg': _rYE[i[280103]], 'version_name': _rYE['version_name'] }, function (q7per) {
    if (!q7per) {
      window['_rSFYE']('User.getCdnVersion failed');return;
    }if (q7per[i[280128]] != i[280175]) {
      window['_rSFYE']('User.getCdnVersion failed: state=' + q7per[i[280128]]);return;
    }if (!q7per[i[280127]] || !q7per[i[280127]]['version']) {
      window['_rSFYE']('User.getCdnVersion failed: version=' + (q7per[i[280127]] && q7per[i[280127]]['version']));return;
    }q7per[i[280127]]['cdn_url'] && q7per[i[280127]]['cdn_url'][i[280005]] > 0xa && (_rYE[i[280187]] = q7per[i[280127]]['cdn_url'], _rYE[i[280008]] = q7per[i[280127]]['cdn_url']), q7per[i[280127]]['version'] && (_rYE['lastVersion'] = q7per[i[280127]]['version']), console[i[280000]]('lastVersion:' + _rYE['lastVersion'] + ', version_name:' + _rYE['version_name']), window['_rYEF'] = !![], window['_rEYSF'](), window['_rEYFS']();
  });
}, window[i[280188]], window['_rFYES'] = function () {
  sendApi(_rYE['apiurl'], i[280189], { 'game_pkg': _rYE[i[280103]] }, _rFESY);
}, window['_rFESY'] = function (nd6f5) {
  if (nd6f5[i[280128]] === i[280175] && nd6f5[i[280127]]) {
    window[i[280188]] = nd6f5[i[280127]];for (var s2jixz in nd6f5[i[280127]]) {
      _rYE[s2jixz] = nd6f5[i[280127]][s2jixz];
    }
  } else console[i[280000]]('reqPkgOptionsCallBack ' + nd6f5[i[280128]]);window['_rFY'] = !![], window['_rEYFS']();
}, window[i[280190]] = function (gfqdp, wyom8, hu_ba1, yoik8j, ykrwm, _$u, dqefpn, cd56fn, jtzsx2) {
  ykrwm = String(ykrwm);var c_n65h = dqefpn,
      e7pdqg = cd56fn;_rYE[i[280094]][ykrwm] = { 'productid': ykrwm, 'productname': c_n65h, 'productdesc': e7pdqg, 'roleid': gfqdp, 'rolename': wyom8, 'rolelevel': hu_ba1, 'price': _$u, 'callback': jtzsx2 }, sendApi(_rYE['payurl'], 'Order.order', { 'game_pkg': _rYE[i[280103]], 'server_id': _rYE['selectedServer']['server_id'], 'server_name': _rYE['selectedServer']['server_name'], 'level': hu_ba1, 'uid': _rYE[i[280007]], 'role_id': gfqdp, 'role_name': wyom8, 'product_id': ykrwm, 'product_name': c_n65h, 'product_desc': e7pdqg, 'money': _$u, 'partner_id': _rYE['partnerId'] }, toPayCallBack, _rFEY, _rES);
}, window[i[280191]] = function (g7er) {
  if (g7er) {
    if (g7er['errCode'] === 0xc8 || g7er[i[280128]] == i[280175]) {
      var $_ua1b = _rYE[i[280094]][String(g7er['product_id'])];if ($_ua1b[i[280192]]) $_ua1b[i[280192]](g7er['product_id'], g7er['cp_order_id'], -0x1);r_qgr7[i[280193]]({ 'cpbill': g7er['cp_order_id'], 'productid': g7er['product_id'], 'productname': $_ua1b['productname'], 'productdesc': $_ua1b['productdesc'], 'serverid': _rYE['selectedServer']['server_id'], 'servername': _rYE['selectedServer']['server_name'], 'roleid': $_ua1b['roleid'], 'rolename': $_ua1b['rolename'], 'rolelevel': $_ua1b['rolelevel'], 'price': $_ua1b['price'], 'extension': JSON['stringify']({ 'cp_order_id': g7er['cp_order_id'] }) }, function (isxj2, k87rmw) {
        $_ua1b[i[280192]] && isxj2 == 0x0 && $_ua1b[i[280192]](g7er['product_id'], g7er['cp_order_id'], isxj2);console[i[280000]](JSON['stringify']({ 'type': i[280194], 'status': isxj2, 'data': g7er, 'role_name': $_ua1b['rolename'] }));if (isxj2 === 0x0) {} else {
          if (isxj2 === 0x1) {} else {
            if (isxj2 === 0x2) {}
          }
        }
      });
    } else alert(g7er[i[280000]]);
  }
}, window['_rFEYS'] = function () {}, window['_rSFE'] = function (a$9ub1, i8kyj, b9au1, qcfdpn, u_6ch5) {
  r_qgr7['logCreateRole'](_rYE['selectedServer']['server_id'], _rYE['selectedServer']['server_name'] || _rYE['selectedServer']['server_id'], a$9ub1, i8kyj, b9au1), sendApi(_rYE['apiurl'], 'User.create_role', { 'game_pkg': _rYE[i[280103]], 'server_id': _rYE['selectedServer']['server_id'], 'role_id': a$9ub1, 'uid': _rYE[i[280007]], 'role_name': i8kyj, 'role_type': qcfdpn, 'level': b9au1 });
}, window['_rSEF'] = function (eqg7rp, neqdf, enqpd, nqcpdf, i8woyk, rkm8wy, b_ua$, z23sx, cn6, yxo8ij) {
  _rYE['roleId'] = eqg7rp, _rYE['roleName'] = neqdf, _rYE['roleLevel'] = enqpd, r_qgr7['logEnterGame'](_rYE['selectedServer']['server_id'], _rYE['selectedServer']['server_name'] || _rYE['selectedServer']['server_id'], eqg7rp, neqdf, enqpd), sendApi(_rYE['apiurl'], 'User.update_role', { 'game_pkg': _rYE[i[280103]], 'server_id': _rYE['selectedServer']['server_id'], 'role_id': eqg7rp, 'uid': _rYE[i[280007]], 'role_name': neqdf, 'role_type': nqcpdf, 'level': enqpd, 'evolution': i8woyk });
}, window['_rFSE'] = function (u1_ba, weg7r, jiz2x, sxi2j, kmwyr, iojx8y, npcqfd, n5c_, mkgrw, gk7r) {
  _rYE['roleId'] = u1_ba, _rYE['roleName'] = weg7r, _rYE['roleLevel'] = jiz2x, r_qgr7[i[280195]](_rYE['selectedServer']['server_id'], _rYE['selectedServer']['server_name'] || _rYE['selectedServer']['server_id'], u1_ba, weg7r, jiz2x), sendApi(_rYE['apiurl'], 'User.update_role', { 'game_pkg': _rYE[i[280103]], 'server_id': _rYE['selectedServer']['server_id'], 'role_id': u1_ba, 'uid': _rYE[i[280007]], 'role_name': weg7r, 'role_type': sxi2j, 'level': jiz2x, 'evolution': kmwyr });
}, window['_rFES'] = function (wioky) {}, window['_rSF'] = function (zt3s2) {
  r_qgr7['share']('share', function (v3l) {
    zt3s2 && zt3s2(v3l);
  });
}, window['openService'] = function () {
  r_qgr7['openService']();
}, window['microPortGuide'] = function () {
  r_qgr7['weiduanHelper']();
}, window['_rFS'] = function (wkyoi8) {
  window['_rEFS'] = wkyoi8, window['_rEFS'] && window['_rESF'] && (console[i[280000]](i[280086] + window['_rESF'][i[280087]]), window['_rEFS'](window['_rESF']), window['_rESF'] = null);
}, window['_rYSFE'] = function (f5pcd, u_b1$a, gwrkm7, cuh_56) {
  window[i[280196]]('https://sdk.sh9130.com/game/?ct=min&ac=getInviter', { 'game_pkg': window['_rYE'][i[280103]], 'role_id': u_b1$a, 'server_id': gwrkm7 }, cuh_56);
}, window['_rYSEF'] = function (o8wmy, x2joyi) {
  function tz32sl(hua6) {
    var $941b = [],
        gepqfd = [],
        fdpnqc = window[i[280003]][i[280197]];for (var jykoi in fdpnqc) {
      var kgmrw7 = Number(jykoi);(!o8wmy || !o8wmy[i[280005]] || o8wmy[i[280066]](kgmrw7) != -0x1) && (gepqfd[i[280017]](fdpnqc[jykoi]), $941b[i[280017]]([kgmrw7, 0x3]));
    }window['_rUFEYS'](window['SDKVersion'], i[280198]) >= 0x0 ? (console[i[280019]](i[280199]), r_qgr7['subscribeMessage'] && r_qgr7['subscribeMessage'](gepqfd, function ($19a) {
      console[i[280019]](i[280200]), console[i[280019]]($19a);if ($19a && $19a['errMsg'] == 'requestSubscribeMessage:ok') for (var yj8iox in fdpnqc) {
        if ($19a[fdpnqc[yj8iox]] == i[280201]) {
          var eqgr7 = Number(yj8iox);for (var pq7ged = 0x0; pq7ged < $941b[i[280005]]; pq7ged++) {
            if ($941b[pq7ged][0x0] == eqgr7) {
              $941b[pq7ged][0x1] = 0x1;break;
            }
          }
        }
      }window['_rUFEYS'](window['SDKVersion'], i[280202]) >= 0x0 ? wx[i[280203]]({ 'withSubscriptions': !![], 'success': function (mgq) {
          var k8rwm = mgq['subscriptionsSetting'][i[280204]];if (k8rwm) {
            console[i[280019]](i[280205]), console[i[280019]](k8rwm);for (var h6_n5 in fdpnqc) {
              if (k8rwm[fdpnqc[h6_n5]] == i[280201]) {
                var ba9$ = Number(h6_n5);for (var nh65_ = 0x0; nh65_ < $941b[i[280005]]; nh65_++) {
                  if ($941b[nh65_][0x0] == ba9$) {
                    $941b[nh65_][0x1] = 0x2;break;
                  }
                }
              }
            }console[i[280019]]($941b), x2joyi && x2joyi($941b);
          } else console[i[280019]](i[280206]), console[i[280019]](mgq), console[i[280019]]($941b), x2joyi && x2joyi($941b);
        }, 'fail': function () {
          console[i[280019]](i[280207]), console[i[280019]]($941b), x2joyi && x2joyi($941b);
        } }) : (console[i[280019]](i[280208] + window['SDKVersion']), console[i[280019]]($941b), x2joyi && x2joyi($941b));
    })) : (console[i[280019]](i[280209] + window['SDKVersion']), console[i[280019]]($941b), x2joyi && x2joyi($941b)), wx[i[280210]](tz32sl);
  }wx[i[280211]](tz32sl);
}, window['_rYFSE'] = { 'isSuccess': ![], 'level': i[280212], 'isCharging': ![] }, window['_rYFES'] = function (ijoy2) {
  wx['getBatteryInfo']({ 'success': function (jiyo8) {
      var au_6h1 = window['_rYFSE'];au_6h1[i[280213]] = !![], au_6h1[i[280080]] = Number(jiyo8[i[280080]])[i[280214]](0x0), au_6h1['isCharging'] = jiyo8['isCharging'], ijoy2 && ijoy2(au_6h1[i[280213]], au_6h1[i[280080]], au_6h1['isCharging']);
    }, 'fail': function (rg7ep) {
      console[i[280019]](i[280215], rg7ep['errMsg']);var kmg7r = window['_rYFSE'];ijoy2 && ijoy2(kmg7r[i[280213]], kmg7r[i[280080]], kmg7r['isCharging']);
    } });
}, window[i[280196]] = function (pfcqn, cu_65, wreg7m, per7q, edgq, _ha1b, svtl, yjo8i) {
  per7q == undefined && (per7q = 0x1);var lsvtz = new XMLHttpRequest();lsvtz['onreadystatechange'] = function () {
    if (lsvtz['readyState'] == 0x4) {
      if (lsvtz[i[280183]] == 0xc8 || lsvtz[i[280183]] == 0x12d) {
        var uc_56h = lsvtz['response'];uc_56h = JSON['parse'](lsvtz['response']);if (!_ha1b || _ha1b(uc_56h, lsvtz, pfcqn)) {
          wreg7m && wreg7m(uc_56h);return;
        } else console[i[280000]](pfcqn), console['error'](uc_56h);
      }per7q - 0x1 > 0x0 ? setTimeout(function () {
        send(pfcqn, cu_65, wreg7m, per7q - 0x1, edgq, _ha1b);
      }, 0x3e8) : edgq && edgq(JSON['stringify']({ 'url': pfcqn, 'status': lsvtz[i[280183]], 'response': lsvtz['response'], 'responseType': lsvtz['responseType'] }));
    }
  }, lsvtz[i[280216]](svtl || i[280217], pfcqn), lsvtz['responseType'] = i[280218], lsvtz['setRequestHeader'](i[280219], yjo8i || i[280139]), lsvtz[i[280196]](cu_65);
}, window[i[280220]] = function (tslzv3, epdfgq, rkmyw8, n5f6hc, j8oyk, rqepg, a_h1) {
  !rkmyw8 && (rkmyw8 = {});var o8yxji = Math['floor'](Date[i[280110]]() / 0x3e8);rkmyw8[i[280179]] = o8yxji, rkmyw8[i[280221]] = epdfgq;var stz23x = Object[i[280222]](rkmyw8)['sort'](),
      mkw8o = '',
      x2is = '';for (var xt32 = 0x0; xt32 < stz23x[i[280005]]; xt32++) {
    mkw8o = mkw8o + (xt32 == 0x0 ? '' : '&') + stz23x[xt32] + rkmyw8[stz23x[xt32]], x2is = x2is + (xt32 == 0x0 ? '' : '&') + stz23x[xt32] + '=' + encodeURIComponent(rkmyw8[stz23x[xt32]]);
  }mkw8o = mkw8o + _rYE[i[280101]];var yjx2oi = i[280223] + md5(mkw8o);send(tslzv3 + '?' + x2is + (x2is == '' ? '' : '&') + yjx2oi, null, n5f6hc, j8oyk, rqepg, a_h1 || function (i2xzs) {
    return i2xzs[i[280128]] == i[280175];
  }, null, 'application/x-www-form-urlencoded');
}, window['_rYESF'] = function ($4ba, oi8jyx) {
  var a94$1b = 0x0;_rYE['selectedServer'] && (a94$1b = _rYE['selectedServer']['server_id']), sendApi(_rYE['logurl'], 'UserLog.reportUidStep', { 'partnerId': _rYE['partnerId'], 'gamePkg': _rYE[i[280103]], 'logTime': Math['floor'](Date[i[280110]]() / 0x3e8), 'platformUid': _rYE['platform_uid'], 'type': $4ba, 'serverId': a94$1b }, null, 0x2, null, function () {
    return !![];
  });
}, window['_rYEFS'] = function (nchf) {
  sendApi(_rYE['apiurl'], 'Server.getServerGroup', { 'partner_id': _rYE['partnerId'], 'uid': _rYE[i[280007]], 'version': _rYE['version'], 'game_pkg': _rYE[i[280103]], 'device': _rYE[i[280104]] }, _rSFY, _rFEY, _rES);
}, window['_rSFY'] = function (ge7rqm) {
  if (ge7rqm[i[280128]] === i[280175] && ge7rqm[i[280127]]) {
    ge7rqm[i[280127]][i[280224]]({ 'id': -0x2, 'name': i[280225] }), ge7rqm[i[280127]][i[280224]]({ 'id': -0x1, 'name': i[280226] }), _rYE['groupList'] = ge7rqm[i[280127]];if (window[i[280227]]) window[i[280227]]['showGroupList']();
  } else _rYE['hasGroupReq'] = ![], window['_rSFYE']('reqServerGroupCallBack ' + ge7rqm[i[280128]]);
}, window['_rSYF'] = function (dcn5f) {
  sendApi(_rYE['apiurl'], 'Server.getServerByUid', { 'partner_id': _rYE['partnerId'], 'uid': _rYE[i[280007]], 'version': _rYE['version'], 'game_pkg': _rYE[i[280103]], 'device': _rYE[i[280104]] }, _rFSY, _rFEY, _rES);
}, window['_rFSY'] = function (jyx8io) {
  _rYE['hasServerReq'] = ![];if (jyx8io[i[280128]] === i[280175] && jyx8io[i[280127]]) {
    for (var a1$4b9 = 0x0; a1$4b9 < jyx8io[i[280127]][i[280005]]; a1$4b9++) {
      jyx8io[i[280127]][a1$4b9][i[280183]] = _rESFY(jyx8io[i[280127]][a1$4b9]);
    }_rYE['serverList'][-0x1] = window['changeServerName'](jyx8io[i[280127]]), window[i[280227]]['showServerList'](-0x1);
  } else window['_rSFYE']('reqServerOwnerCallBack ' + jyx8io[i[280128]]);
}, window['req_server_owner_status'] = function (abuh_1) {
  sendApi(_rYE['apiurl'], 'Server.getServerByUid', { 'partner_id': _rYE['partnerId'], 'uid': _rYE[i[280007]], 'version': _rYE['version'], 'game_pkg': _rYE[i[280103]], 'device': _rYE[i[280104]] }, abuh_1, _rFEY, _rES);
}, window['_rFYS'] = function (ergq7m, ah61u) {
  sendApi(_rYE['apiurl'], 'Server.getServerByGroup', { 'partner_id': _rYE['partnerId'], 'uid': _rYE[i[280007]], 'version': _rYE['version'], 'game_pkg': _rYE[i[280103]], 'device': _rYE[i[280104]], 'server_group_id': ah61u }, _rYSF, _rFEY, _rES);
}, window['_rYSF'] = function (u5_ch) {
  _rYE['hasServerReq'] = ![];if (u5_ch[i[280128]] === i[280175] && u5_ch[i[280127]] && u5_ch[i[280127]][i[280127]]) {
    var pcnqfd = u5_ch[i[280127]]['server_group_id'],
        yi2ojx = [];for (var kgr7w = 0x0; kgr7w < u5_ch[i[280127]][i[280127]][i[280005]]; kgr7w++) {
      u5_ch[i[280127]][i[280127]][kgr7w][i[280183]] = _rESFY(u5_ch[i[280127]][i[280127]][kgr7w]), (yi2ojx[i[280005]] == 0x0 || u5_ch[i[280127]][i[280127]][kgr7w][i[280183]] != 0x0) && (yi2ojx[yi2ojx[i[280005]]] = u5_ch[i[280127]][i[280127]][kgr7w]);
    }_rYE['serverList'][pcnqfd] = window['changeServerName'](yi2ojx), window[i[280227]]['showServerList'](pcnqfd);
  } else window['_rSFYE']('reqServerListCallBack ' + u5_ch[i[280128]]);
}, window['_rUYFE'] = function (xoj) {
  sendApi(_rYE['apiurl'], 'Server.getRecommendServerList', { 'partner_id': _rYE['partnerId'], 'uid': _rYE[i[280007]], 'version': _rYE['version'], 'game_pkg': _rYE[i[280103]], 'device': _rYE[i[280104]] }, reqServerRecommendCallBack, _rFEY, _rES);
}, window['reqServerRecommendCallBack'] = function (u6c5h) {
  _rYE['hasServerReq'] = ![];if (u6c5h[i[280128]] === i[280175] && u6c5h[i[280127]]) {
    for (var xjzi2s = 0x0; xjzi2s < u6c5h[i[280127]][i[280005]]; xjzi2s++) {
      u6c5h[i[280127]][xjzi2s][i[280183]] = _rESFY(u6c5h[i[280127]][xjzi2s]);
    }_rYE['serverList'][-0x2] = window['changeServerName'](u6c5h[i[280127]]), window[i[280227]]['showServerList'](-0x2);
  } else alert('reqServerRecommendCallBack ' + u6c5h[i[280128]]);
}, window['changeServerName'] = function (st23l) {
  if (!st23l && st23l[i[280005]] <= 0x0) return st23l;for (let mgrw7k = 0x0; mgrw7k < st23l[i[280005]]; mgrw7k++) {
    st23l[mgrw7k]['is_recommend'] && st23l[mgrw7k]['is_recommend'] == 0x1 && (st23l[mgrw7k]['server_name'] += i[280228]);
  }return st23l;
}, window['_rYFS'] = function (pgfqed, ab94$) {
  pgfqed = pgfqed || _rYE['selectedServer']['server_id'], sendApi(_rYE['apiurl'], i[280229], { 'type': '4', 'game_pkg': _rYE[i[280103]], 'server_id': pgfqed }, ab94$);
}, window['req_multi_server_notice'] = function (c6_u, j8oxi, o2ix, ch5nf) {
  o2ix = o2ix || _rYE['selectedServer']['server_id'], sendApi(_rYE['apiurl'], i[280230], { 'type': c6_u, 'game_pkg': j8oxi, 'server_id': o2ix }, ch5nf);
}, window['_rESFY'] = function (c5hf6n) {
  if (c5hf6n) {
    if (c5hf6n[i[280183]] == 0x1) {
      if (c5hf6n[i[280231]] == 0x1) return 0x2;else return 0x1;
    } else return c5hf6n[i[280183]] == 0x0 ? 0x0 : -0x1;
  }return -0x1;
}, window['_rESYF'] = function (kj8ioy, cuh56_) {
  _rYE[i[280232]] = { 'step': kj8ioy, 'server_id': cuh56_ };var eqdfn = this;_rSYFE({ 'title': i[280233] }), sendApi(_rYE['apiurl'], 'User.checkInfo', { 'partner_id': _rYE['partnerId'], 'uid': _rYE[i[280007]], 'game_pkg': _rYE[i[280103]], 'server_id': cuh56_, 'platform': _rYE['platform'], 'platform_uid': _rYE['platform_uid'], 'check_login_time': _rYE[i[280178]], 'check_login_sign': _rYE[i[280176]], 'version_name': _rYE['version_name'] }, _rEFSY, _rFEY, _rES, function (mgwr7e) {
    return mgwr7e[i[280128]] == i[280175] || mgwr7e[i[280000]] == 'time_err' || mgwr7e[i[280000]] == 'sign_err';
  });
}, window['_rEFSY'] = function (gfq) {
  var r7wkm8 = this;if (gfq[i[280128]] === i[280175] && gfq[i[280127]]) {
    var qpedfn = _rYE['selectedServer'];qpedfn[i[280234]] = _rYE[i[280105]], qpedfn[i[280177]] = String(gfq[i[280127]][i[280235]]), qpedfn[i[280109]] = parseInt(gfq[i[280127]][i[280179]]);if (gfq[i[280127]]['server_num']) qpedfn['server_num'] = parseInt(gfq[i[280127]]['server_num']);else qpedfn['server_num'] = parseInt(gfq[i[280127]]['server_id']);qpedfn[i[280236]] = 0x0, qpedfn[i[280008]] = _rYE[i[280187]], qpedfn['resver'] = gfq[i[280127]]['cdn_version'], qpedfn['server_options'] = gfq[i[280127]]['server_options'], console[i[280019]]('server_options\uFF1A' + JSON['stringify'](qpedfn['server_options'])), _rYE['newRegister'] == 0x1 && qpedfn['server_options'] && qpedfn['server_options'][i[280237]] == 0x1 && (_rYE[i[280238]] = 0x1, window['ServerLoading'][i[280014]]['_rUE']()), _rEFYS();
  } else sendApi(_rYE['apiurl'], 'User.login', { 'platform': _rYE[i[280096]], 'partner_id': _rYE['partnerId'], 'token': _rYE[i[280168]], 'game_pkg': _rYE[i[280103]], 'deviceId': _rYE[i[280104]], 'scene': i[280170] + _rYE['from_scene'] }, function (n5f6cd) {
    if (n5f6cd[i[280128]] == i[280239]) {
      window['_rSFYE']('User.login failed: ' + n5f6cd[i[280128]]);return;
    }_rYE[i[280176]] = String(n5f6cd[i[280177]]), _rYE[i[280178]] = String(n5f6cd[i[280179]]), setTimeout(function () {
      _rESYF(_rYE[i[280232]][i[280240]], _rYE[i[280232]]['server_id']);
    }, 0x5dc);
  }, _rFEY, _rES, function (ger) {
    return ger[i[280128]] == i[280175] || ger[i[280128]] == i[280239];
  });
}, window['_rEFYS'] = function () {
  ServerLoading[i[280014]][i[280186]](_rYE['newRegister']), window['_rFE'] = !![], window['_rEYFS']();
}, window['_rEYSF'] = function () {
  if (window['_rEF'] && window['_rYFE'] && window['loadServerRes'] && window[i[280116]] && window['_rYEF'] && window['_rYF']) {
    if (!window[i[280241]][i[280014]]) {
      console[i[280019]](i[280242] + window[i[280241]][i[280014]]);var a$419 = wx[i[280243]](),
          c6u_h = a$419[i[280087]] ? a$419[i[280087]] : 0x0,
          jtx2 = { 'cdn': window['_rYE'][i[280008]], 'spareCdn': window['_rYE']['spareCdn'], 'newRegister': window['_rYE']['newRegister'], 'wxPC': window['_rYE'][i[280069]], 'wxIOS': window['_rYE'][i[280065]], 'wxAndroid': window['_rYE']['wxAndroid'], 'wxParam': { 'limitLoad': window['_rYE']['_rUSYFE'], 'benchmarkLevel': window['_rYE']['_rUSYEF'], 'wxFrom': window[i[280003]]['from'] == i[280244] ? 0x1 : 0x0, 'wxSDKVersion': window['SDKVersion'] }, 'configType': window['_rYE'][i[280111]], 'exposeType': window['_rYE'][i[280113]], 'scene': c6u_h };new window[i[280241]](jtx2, window['_rYE']['lastVersion'], window['_rUSFEY']);
    }
  }
}, window['_rEYFS'] = function () {
  if (window['_rEF'] && window['_rYFE'] && window['loadServerRes'] && window[i[280116]] && window['_rYEF'] && window['_rYF'] && window['_rFE'] && window['_rFY']) {
    _rSYEF();if (!_rEFY) {
      _rEFY = !![];if (!window[i[280241]][i[280014]]) window['_rEYSF']();var rmwk = 0x0,
          _$bau = wx[i[280245]]();_$bau && (window['_rYE'][i[280068]] && (rmwk = _$bau[i[280062]]), console[i[280000]](i[280246] + _$bau[i[280062]] + i[280247] + _$bau[i[280063]] + i[280248] + _$bau[i[280064]] + ',right:' + _$bau['right'] + i[280249] + _$bau[i[280250]] + i[280251] + _$bau[i[280252]]));var fch = {};for (const xjiyo in _rYE['selectedServer']) {
        fch[xjiyo] = _rYE['selectedServer'][xjiyo];
      }var tvls3z = { 'channel': window['_rYE'][i[280106]], 'account': window['_rYE'][i[280007]], 'userId': window['_rYE']['userId'], 'cdn': window['_rYE'][i[280008]], 'data': window['_rYE'][i[280127]], 'package': window['_rYE'][i[280095]], 'newRegister': window['_rYE']['newRegister'], 'pkgName': window['_rYE'][i[280103]], 'partnerId': window['_rYE']['partnerId'], 'platform_uid': window['_rYE']['platform_uid'], 'deviceId': window['_rYE'][i[280104]], 'selectedServer': fch, 'configType': window['_rYE'][i[280111]], 'exposeType': window['_rYE'][i[280113]], 'debugUsers': window['_rYE']['debugUsers'], 'wxMenuTop': rmwk, 'wxShield': window['_rYE'][i[280115]] };if (window[i[280188]]) for (var xi2joz in window[i[280188]]) {
        tvls3z[xi2joz] = window[i[280188]][xi2joz];
      }window[i[280241]][i[280014]]['_rFUEY'](tvls3z), setTimeout(() => {
        !wx_develop && new minitool();
      }, 0x2710);
    }
  } else console[i[280000]]('\u3010登录\u3011loadProbPkg:' + window['_rEF'] + i[280253] + window['_rYFE'] + ',loadServerRes:' + window['loadServerRes'] + i[280254] + window[i[280116]] + ',loadVersion:' + window['_rYEF'] + ',loadServer:' + window['_rYF'] + i[280255] + window['_rFE'] + i[280256] + window['_rFY']);
};