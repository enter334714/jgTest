var M = wx.$T;
import tdc9i$ from '../ttkttt/t6ktgt.js';window[M[320095]] = { 'wxVersion': window[M[320004]][M[320005]] }, window[M[320096]] = ![], window['t$KZ'] = 0x1, window[M[320097]] = 0x1, window['t$6ZK'] = !![], window[M[320098]] = !![], window['t$FM6KZ'] = '', window['t$ZK'] = { 'base_cdn': 'https://cdn-tjqy.shzbkj.com/weixin_0/', 'cdn': 'https://cdn-tjqy.shzbkj.com/weixin_0/' }, t$ZK[M[320099]] = {}, t$ZK[M[320100]] = '0', t$ZK[M[320052]] = window[M[320095]][M[320101]], t$ZK[M[320074]] = '', t$ZK['os'] = '1', t$ZK[M[320102]] = M[320103], t$ZK[M[320104]] = 'https://api-tjqytest.shzbkj.com', t$ZK[M[320105]] = 'https://log-tjqytest.shzbkj.com', t$ZK[M[320106]] = 'https://pay-tjqytest.shzbkj.com', t$ZK[M[320107]] = M[320108], t$ZK['partnerId'] = '1', t$ZK[M[320109]] = '', t$ZK[M[320110]] = '', t$ZK[M[320111]] = 0x0, t$ZK['serverList'] = {}, t$ZK[M[320112]] = parseInt(t$ZK['partnerId']), t$ZK[M[320113]] = t$ZK['partnerId'], t$ZK['selectedServer'] = {}, t$ZK['t$MZ'] = 'https://jgcenter.sh9130.com/clientlog/', t$ZK[M[320114]] = ![], t$ZK[M[320115]] = M[320116], t$ZK['tick'] = Date[M[320117]](), t$ZK[M[320118]] = M[320119], t$ZK[M[320120]] = '_a', t$ZK[M[320121]] = 0x2, t$ZK['lastVersion'] = 0x7c1, t$ZK[M[320101]] = window[M[320095]][M[320101]], t$ZK[M[320122]] = ![], t$ZK[M[320066]] = ![], t$ZK[M[320069]] = ![], t$ZK[M[320072]] = ![], window['t$6KZ'] = 0x5, window['t$6K'] = ![], window['t$K6'] = ![], window['t$Z6K'] = ![], window[M[320123]] = ![], window[M[320124]] = ![], window['t$ZK6'] = ![], window['t$6Z'] = ![], window['t$Z6'] = ![], window['t$K6Z'] = ![], window['alert'] = function (p7fozd) {
  console[M[320024]]('alert', p7fozd), wx[M[320125]]({}), wx[M[320027]]({ 'title': M[320045], 'content': p7fozd, 'success'(kgaj) {
      if (kgaj[M[320126]]) console[M[320024]](M[320127]);else kgaj[M[320128]] && console[M[320024]](M[320129]);
    } });
}, window['t$M6ZK'] = function (jgnr3b) {
  console[M[320024]]('loginAlert', jgnr3b), t$MZK6(), wx[M[320027]]({ 'title': M[320045], 'content': jgnr3b, 'confirmText': M[320130], 'cancelText': M[320131], 'success'($9icvd) {
      if ($9icvd[M[320126]]) window['t$ZM']();else $9icvd[M[320128]] && (console[M[320024]](M[320132]), wx['exitMiniProgram']({}));
    } });
}, window['t$KFZ'] = function (xhmyw_) {
  console[M[320024]]('exitAlert', xhmyw_), wx[M[320027]]({ 'title': M[320045], 'content': xhmyw_, 'confirmText': M[320133], 'showCancel': ![], 'complete'(grn13) {
      console[M[320024]](M[320132]), wx['exitMiniProgram']({});
    } });
}, window['t$M6KZ'] = ![], window['t$MZ6K'] = function (v2cti9) {
  window['t$M6KZ'] = !![], wx[M[320134]](v2cti9);
}, window['t$MZK6'] = function () {
  window['t$M6KZ'] && (window['t$M6KZ'] = ![], wx[M[320125]]({}));
}, window['t$MK6Z'] = function (ym_xq) {
  window[M[320020]]['instance']['t$MK6Z'](ym_xq);
}, window[M[320135]] = function (h865, jrn3b) {
  tdc9i$[M[320135]](h865, function (vpd$f) {
    vpd$f && vpd$f['data'] ? vpd$f['data']['state'] == 0x1 ? jrn3b(!![]) : (jrn3b(![]), console[M[320000]](M[320136] + vpd$f['data'][M[320137]])) : console[M[320024]](M[320135], vpd$f);
  });
}, window['t$MKZ6'] = function (w65mh1) {
  console[M[320024]]('getJsURL', w65mh1);
}, window['t$MZK'] = function (j3nbrg) {}, window['t$MKZ'] = function (xeyq0, ep7zf, qxye_) {}, window['t$MK'] = function (_yx0hm) {
  console[M[320024]]('toEnterGame', _yx0hm), window[M[320020]]['instance']['closeAuthor'](), window[M[320020]]['instance'][M[320138]](), window[M[320020]]['instance'][M[320139]]();
}, window['t$KM'] = function (fd$zpv) {
  window['t$M6ZK'](M[320140]);var tvc$ = { 'id': window['t$ZK'][M[320008]], 'role': window['t$ZK'][M[320009]], 'level': window['t$ZK'][M[320010]], 'account': window['t$ZK']['account'], 'version': window['t$ZK']['lastVersion'], 'cdn': window['t$ZK'][M[320011]], 'pkgName': window['t$ZK'][M[320109]], 'gamever': window[M[320004]][M[320005]], 'serverid': window['t$ZK']['selectedServer'] ? window['t$ZK']['selectedServer'][M[320012]] : 0x0, 'systemInfo': window['systemInfo'], 'error': M[320141], 'stack': fd$zpv ? fd$zpv : M[320140] },
      agrnb = JSON['stringify'](tvc$);console[M[320014]](M[320142] + agrnb), window['t$MZ'](agrnb);
}, window['t$ZMK'] = function (eqoyx) {
  var h1m5 = JSON[M[320143]](eqoyx);h1m5[M[320144]] = window[M[320004]][M[320005]], h1m5[M[320145]] = window['t$ZK']['selectedServer'] ? window['t$ZK']['selectedServer'][M[320012]] : 0x0, h1m5['systemInfo'] = window['systemInfo'];var q70exo = JSON['stringify'](h1m5);console[M[320014]](M[320146] + q70exo), window['t$MZ'](q70exo);
}, window['t$ZKM'] = function (sjaku, c9vi$t) {
  var yxq0e_ = { 'id': window['t$ZK'][M[320008]], 'role': window['t$ZK'][M[320009]], 'level': window['t$ZK'][M[320010]], 'account': window['t$ZK']['account'], 'version': window['t$ZK']['lastVersion'], 'cdn': window['t$ZK'][M[320011]], 'pkgName': window['t$ZK'][M[320109]], 'gamever': window[M[320004]][M[320005]], 'serverid': window['t$ZK']['selectedServer'] ? window['t$ZK']['selectedServer'][M[320012]] : 0x0, 'systemInfo': window['systemInfo'], 'error': sjaku, 'stack': c9vi$t },
      n86531 = JSON['stringify'](yxq0e_);console[M[320147]](M[320148] + n86531), window['t$MZ'](n86531);
}, window['t$MZ'] = function (bgjr3n) {
  if (window['t$ZK']['wxPlatform'] == 'devtools') return;var cit9v = t$ZK['t$MZ'] + '?account=' + t$ZK['account'];wx['request']({ 'url': cit9v, 'method': M[320149], 'data': bgjr3n, 'header': { 'content-type': 'application/json', 'cache-control': M[320150] }, 'success': function (vdfz$) {
      DEBUG && console[M[320024]]('clientlog:', cit9v, bgjr3n, vdfz$);
    }, 'fail': function (iv2t9c) {
      DEBUG && console[M[320024]]('clientlog:', cit9v, bgjr3n, iv2t9c);
    }, 'complete': function () {} });
}, window[M[320151]] = function () {
  function e7zoqf() {
    return ((0x1 + Math[M[320152]]()) * 0x10000 | 0x0)['toString'](0x10)['substring'](0x1);
  }return e7zoqf() + e7zoqf() + '-' + e7zoqf() + '-' + e7zoqf() + '-' + e7zoqf() + '+' + e7zoqf() + e7zoqf() + e7zoqf();
}, window['t$ZM'] = function () {
  console[M[320024]](M[320153]);var oqx0e = tdc9i$['getConfig']();t$ZK[M[320113]] = oqx0e['partner_id'], t$ZK[M[320112]] = oqx0e['partner_id'], t$ZK['partnerId'] = oqx0e['partner_id'], t$ZK[M[320109]] = oqx0e[M[320154]];var uajk = { 'game_ver': t$ZK[M[320052]] };t$ZK[M[320110]] = this[M[320151]](), t$MZ6K({ 'title': M[320155] }), tdc9i$['init'](uajk, this['t$KMZ'][M[320156]](this));
}, window['t$KMZ'] = function (gjrnb3) {
  var nrg = gjrnb3[M[320157]];console[M[320024]](M[320158] + nrg + M[320159] + (nrg == 0x1) + M[320160] + gjrnb3[M[320005]] + M[320161] + window[M[320095]][M[320101]]);if (!gjrnb3[M[320005]] || window['t$F6KZM'](window[M[320095]][M[320101]], gjrnb3[M[320005]]) < 0x0) console[M[320024]](M[320162]), t$ZK[M[320104]] = 'https://api-tjqy.shzbkj.com', t$ZK[M[320105]] = 'https://log-tjqy.shzbkj.com', t$ZK[M[320106]] = 'https://pay-tjqy.shzbkj.com', t$ZK[M[320011]] = 'https://cdn-tjqy.shzbkj.com/weixin_1/', t$ZK[M[320163]] = 'https://cdn-tjqy-ali.shzbkj.com/weixin_1/', t$ZK[M[320164]] = M[320165], t$ZK[M[320122]] = ![];else window['t$F6KZM'](window[M[320095]][M[320101]], gjrnb3[M[320005]]) == 0x0 ? (console[M[320024]](M[320166]), t$ZK[M[320104]] = 'https://api-tjqytest.shzbkj.com', t$ZK[M[320105]] = 'https://log-tjqytest.shzbkj.com', t$ZK[M[320106]] = 'https://pay-tjqytest.shzbkj.com', t$ZK[M[320011]] = 'https://cdn-tjqy.shzbkj.com/weixin_0/', t$ZK[M[320163]] = 'https://cdn-tjqy-ali.shzbkj.com/weixin_1/', t$ZK[M[320164]] = M[320165], t$ZK[M[320122]] = !![]) : (console[M[320024]](M[320167]), t$ZK[M[320104]] = 'https://api-tjqytest.shzbkj.com', t$ZK[M[320105]] = 'https://log-tjqytest.shzbkj.com', t$ZK[M[320106]] = 'https://pay-tjqytest.shzbkj.com', t$ZK[M[320011]] = 'https://cdn-tjqy.shzbkj.com/weixin_0/', t$ZK[M[320163]] = 'https://cdn-tjqy-ali.shzbkj.com/weixin_1/', t$ZK[M[320164]] = M[320165], t$ZK[M[320122]] = ![]);t$ZK[M[320111]] = config[M[320168]] ? config[M[320168]] : 0x0, this['t$6ZMK'](), this['t$6ZKM'](), window['sdkLoginRetry'] = 0x5, t$MZ6K({ 'title': M[320169] }), tdc9i$[M[320170]](this['t$KZM'][M[320156]](this));
}, window['sdkLoginRetry'] = 0x5, window['t$KZM'] = function (ezp7f, z7pdfo) {
  if (ezp7f == 0x0 && z7pdfo && z7pdfo['token']) {
    t$ZK['sdk_token'] = z7pdfo['token'];var _wyhm5 = this;t$MZ6K({ 'title': M[320171] }), sendApi(t$ZK[M[320104]], M[320172], { 'platform': t$ZK[M[320102]], 'partner_id': t$ZK['partnerId'], 'token': z7pdfo['token'], 'game_pkg': t$ZK[M[320109]], 'deviceId': t$ZK[M[320110]], 'scene': M[320173] + t$ZK[M[320111]] }, this['t$6MZK'][M[320156]](this), t$6KZ, t$KM);
  } else z7pdfo && z7pdfo[M[320034]] && window['sdkLoginRetry'] > 0x0 && (z7pdfo[M[320034]][M[320067]]('fail interrupted') != -0x1 || z7pdfo[M[320034]][M[320067]]('network api interrupted') != -0x1 || z7pdfo[M[320034]][M[320067]]('Network Error') != -0x1 || z7pdfo[M[320034]][M[320067]](M[320174]) != -0x1 || z7pdfo[M[320034]][M[320067]](M[320175]) != -0x1 || z7pdfo[M[320034]][M[320067]](M[320176]) != -0x1) ? (window['sdkLoginRetry']--, tdc9i$[M[320170]](this['t$KZM'][M[320156]](this))) : (window['t$ZKM'](M[320177], JSON['stringify']({ 'status': ezp7f, 'data': z7pdfo })), window['t$M6ZK'](M[320178] + (z7pdfo && z7pdfo[M[320034]] ? '，' + z7pdfo[M[320034]] : '')));
}, window['t$6MZK'] = function (qymx0_) {
  if (!qymx0_) {
    window['t$M6ZK'](M[320179]);return;
  }if (qymx0_['state'] != M[320180]) {
    window['t$M6ZK'](M[320181] + qymx0_['state']);return;
  }t$ZK[M[320182]] = String(qymx0_['account']), t$ZK['account'] = String(qymx0_['account']), t$ZK['platform'] = String(qymx0_['platform']), t$ZK[M[320113]] = String(qymx0_['platform']), t$ZK['platform_uid'] = String(qymx0_['platform_uid']), t$ZK[M[320183]] = String(qymx0_[M[320184]]), t$ZK['php_signtime'] = String(qymx0_['time']), t$ZK[M[320184]] = '';var pdvf9 = this;t$MZ6K({ 'title': M[320185] }), sendApi(t$ZK[M[320104]], 'Server.defaultServer', { 'partner_id': t$ZK['partnerId'], 'uid': t$ZK['account'], 'version': t$ZK[M[320052]], 'game_pkg': t$ZK[M[320109]], 'device': t$ZK[M[320110]] }, pdvf9['t$6MKZ'][M[320156]](pdvf9), t$6KZ, t$KM);
}, window['t$6MKZ'] = function (z$fdp) {
  if (!z$fdp) {
    window['t$M6ZK']('Server.defaultServer failed');return;
  }if (z$fdp['state'] != M[320180]) {
    window['t$M6ZK']('Server.defaultServer failed: ' + z$fdp['state']);return;
  }if (!z$fdp['data'] || z$fdp['data']['length'] == 0x0) {
    window['t$M6ZK'](M[320186]);return;
  }t$ZK['newRegister'] = z$fdp[M[320187]], t$ZK['selectedServer'] = { 'server_id': String(z$fdp['data'][0x0][M[320012]]), 'server_name': String(z$fdp['data'][0x0][M[320188]]), 'entry_ip': z$fdp['data'][0x0]['entry_ip'], 'entry_port': parseInt(z$fdp['data'][0x0]['entry_port']), 'status': t$KM6Z(z$fdp['data'][0x0]), 'start_time': z$fdp['data'][0x0]['start_time'], 'cdn': t$ZK[M[320011]] }, this['t$FM6ZK']();
}, window['t$FM6ZK'] = function () {
  if (t$ZK['newRegister'] == 0x1) {
    var bkjas = t$ZK['selectedServer']['status'];if (bkjas === -0x1 || bkjas === 0x0) {
      window['t$M6ZK'](bkjas === -0x1 ? M[320189] : M[320190]);return;
    }t$KMZ6(0x0, t$ZK['selectedServer'][M[320012]]), window[M[320020]]['instance'][M[320191]](t$ZK['newRegister']);
  } else window[M[320020]]['instance'][M[320192]](), t$MZK6();window['t$Z6'] = !![], window['t$KZM6'](), window['t$KZ6M']();
}, window['t$6ZMK'] = function () {
  var idc9v = this;sendApi(t$ZK[M[320104]], 'User.getCdnVersion', { 'game_pkg': t$ZK[M[320109]], 'version_name': t$ZK[M[320164]] }, function (dzof) {
    if (!dzof) {
      window['t$M6ZK']('User.getCdnVersion failed');return;
    }if (dzof['state'] != M[320180]) {
      window['t$M6ZK']('User.getCdnVersion failed: state=' + dzof['state']);return;
    }if (!dzof['data'] || !dzof['data'][M[320052]]) {
      window['t$M6ZK']('User.getCdnVersion failed: version=' + (dzof['data'] && dzof['data'][M[320052]]));return;
    }dzof['data'][M[320193]] && dzof['data'][M[320193]]['length'] > 0xa && (t$ZK[M[320194]] = dzof['data'][M[320193]], t$ZK[M[320011]] = dzof['data'][M[320193]]), dzof['data'][M[320052]] && (t$ZK['lastVersion'] = dzof['data'][M[320052]]), console[M[320000]]('lastVersion:' + t$ZK['lastVersion'] + M[320195] + t$ZK[M[320164]]), window['t$ZK6'] = !![], window['t$KZM6'](), window['t$KZ6M']();
  });
}, window['pkgOptions'], window['t$6ZKM'] = function () {
  sendApi(t$ZK[M[320104]], 'Common.get_option_pkg', { 'game_pkg': t$ZK[M[320109]] }, t$6KMZ);
}, window['t$6KMZ'] = function (pd$fz) {
  if (pd$fz['state'] === M[320180] && pd$fz['data']) {
    window['pkgOptions'] = pd$fz['data'];for (var j3rgnb in pd$fz['data']) {
      t$ZK[j3rgnb] = pd$fz['data'][j3rgnb];
    }
  } else console[M[320000]]('reqPkgOptionsCallBack ' + pd$fz['state']);window['t$6Z'] = !![], window['t$KZ6M']();
}, window['toPay'] = function (op7zdf, $9idp, h_6mw, xy_mwh, yqo0x, it4c2l, ajbkgr, fd$9pv, p$7fz) {
  yqo0x = String(yqo0x);var my_xhw = ajbkgr,
      pefz7 = fd$9pv;t$ZK[M[320099]][yqo0x] = { 'productid': yqo0x, 'productname': my_xhw, 'productdesc': pefz7, 'roleid': op7zdf, 'rolename': $9idp, 'rolelevel': h_6mw, 'price': it4c2l, 'callback': p$7fz }, sendApi(t$ZK[M[320106]], M[320196], { 'game_pkg': t$ZK[M[320109]], 'server_id': t$ZK['selectedServer'][M[320012]], 'server_name': t$ZK['selectedServer'][M[320188]], 'level': h_6mw, 'uid': t$ZK['account'], 'role_id': op7zdf, 'role_name': $9idp, 'product_id': yqo0x, 'product_name': my_xhw, 'product_desc': pefz7, 'money': it4c2l, 'partner_id': t$ZK['partnerId'] }, toPayCallBack, t$6KZ, t$KM);
}, window['toPayCallBack'] = function (w1h5) {
  if (w1h5) {
    if (w1h5[M[320197]] === 0xc8 || w1h5['state'] == M[320180]) {
      var oq70ze = t$ZK[M[320099]][String(w1h5['product_id'])];if (oq70ze[M[320198]]) oq70ze[M[320198]](w1h5['product_id'], w1h5[M[320199]], -0x1);tdc9i$[M[320200]]({ 'cpbill': w1h5[M[320199]], 'productid': w1h5['product_id'], 'productname': oq70ze['productname'], 'productdesc': oq70ze['productdesc'], 'serverid': t$ZK['selectedServer'][M[320012]], 'servername': t$ZK['selectedServer'][M[320188]], 'roleid': oq70ze[M[320201]], 'rolename': oq70ze[M[320202]], 'rolelevel': oq70ze[M[320203]], 'price': oq70ze[M[320204]], 'extension': JSON['stringify']({ 'cp_order_id': w1h5[M[320199]] }) }, function (w5_hy, $9icd) {
        oq70ze[M[320198]] && w5_hy == 0x0 && oq70ze[M[320198]](w1h5['product_id'], w1h5[M[320199]], w5_hy);console[M[320000]](JSON['stringify']({ 'type': M[320205], 'status': w5_hy, 'data': w1h5, 'role_name': oq70ze[M[320202]] }));if (w5_hy === 0x0) {} else {
          if (w5_hy === 0x1) {} else {
            if (w5_hy === 0x2) {}
          }
        }
      });
    } else alert(w1h5[M[320000]]);
  }
}, window['t$6KZM'] = function () {}, window['t$M6K'] = function (ezqo, z7o0e, f7ope, civ, nabr) {
  tdc9i$['logCreateRole'](t$ZK['selectedServer'][M[320012]], t$ZK['selectedServer'][M[320188]] || t$ZK['selectedServer'][M[320012]], ezqo, z7o0e, f7ope), sendApi(t$ZK[M[320104]], 'User.create_role', { 'game_pkg': t$ZK[M[320109]], 'server_id': t$ZK['selectedServer'][M[320012]], 'role_id': ezqo, 'uid': t$ZK['account'], 'role_name': z7o0e, 'role_type': civ, 'level': f7ope });
}, window['t$MK6'] = function (h5w168, z7oefp, askbj, w18563, t$vic9, z0oqe, wh1m6, c9tv2i, p$9df, skjra) {
  t$ZK[M[320008]] = h5w168, t$ZK[M[320009]] = z7oefp, t$ZK[M[320010]] = askbj, tdc9i$['logEnterGame'](t$ZK['selectedServer'][M[320012]], t$ZK['selectedServer'][M[320188]] || t$ZK['selectedServer'][M[320012]], h5w168, z7oefp, askbj), sendApi(t$ZK[M[320104]], 'User.update_role', { 'game_pkg': t$ZK[M[320109]], 'server_id': t$ZK['selectedServer'][M[320012]], 'role_id': h5w168, 'uid': t$ZK['account'], 'role_name': z7oefp, 'role_type': w18563, 'level': askbj, 'evolution': t$vic9 });
}, window['t$6MK'] = function (c$9vdi, $dfvzp, jbgak, vt29c, icdv$9, x_hm, y_hw5m, oep, hyw_xm, n3856) {
  t$ZK[M[320008]] = c$9vdi, t$ZK[M[320009]] = $dfvzp, t$ZK[M[320010]] = jbgak, tdc9i$[M[320206]](t$ZK['selectedServer'][M[320012]], t$ZK['selectedServer'][M[320188]] || t$ZK['selectedServer'][M[320012]], c$9vdi, $dfvzp, jbgak), sendApi(t$ZK[M[320104]], 'User.update_role', { 'game_pkg': t$ZK[M[320109]], 'server_id': t$ZK['selectedServer'][M[320012]], 'role_id': c$9vdi, 'uid': t$ZK['account'], 'role_name': $dfvzp, 'role_type': vt29c, 'level': jbgak, 'evolution': icdv$9 });
}, window['t$6KM'] = function (j3rgn) {}, window['t$M6'] = function (hx_y) {
  tdc9i$[M[320207]](M[320207], function (pfzoe) {
    hx_y && hx_y(pfzoe);
  });
}, window[M[320208]] = function () {
  tdc9i$[M[320208]]();
}, window['microPortGuide'] = function () {
  tdc9i$[M[320209]]();
}, window['t$6M'] = function (dv$pf9) {
  window['t$K6M'] = dv$pf9, window['t$K6M'] && window['t$KM6'] && (console[M[320000]](M[320089] + window['t$KM6'][M[320090]]), window['t$K6M'](window['t$KM6']), window['t$KM6'] = null);
}, window['t$ZM6K'] = function (xm_y, bjrgka, oqye0, w6381) {
  window[M[320210]]('https://sdk.sh9130.com/game/?ct=min&ac=getInviter', { 'game_pkg': window['t$ZK'][M[320109]], 'role_id': bjrgka, 'server_id': oqye0 }, w6381);
}, window['t$ZMK6'] = function (n3186g, vt9ic$) {
  function cl(sabju) {
    var vdi = [],
        q_yex = [],
        dfzvp = window[M[320004]]['tmpId'];for (var c9d$vi in dfzvp) {
      var qz7foe = Number(c9d$vi);(!n3186g || !n3186g['length'] || n3186g[M[320067]](qz7foe) != -0x1) && (q_yex[M[320022]](dfzvp[c9d$vi]), vdi[M[320022]]([qz7foe, 0x3]));
    }window['t$F6KZM'](window[M[320023]], M[320211]) >= 0x0 ? (console[M[320024]](M[320212]), tdc9i$[M[320213]](q_yex, function (c9iv2) {
      console[M[320024]](M[320214]), console[M[320024]](c9iv2);if (c9iv2 && c9iv2[M[320034]] == 'requestSubscribeMessage:ok') for (var _mqx0 in dfzvp) {
        if (c9iv2[dfzvp[_mqx0]] == 'accept') {
          var e07oz = Number(_mqx0);for (var $tvci9 = 0x0; $tvci9 < vdi['length']; $tvci9++) {
            if (vdi[$tvci9][0x0] == e07oz) {
              vdi[$tvci9][0x1] = 0x1;break;
            }
          }
        }
      }window['t$F6KZM'](window[M[320023]], M[320215]) >= 0x0 ? wx['getSetting']({ 'withSubscriptions': !![], 'success': function (zdp7fo) {
          var hw85 = zdp7fo['subscriptionsSetting']['itemSettings'];if (hw85) {
            console[M[320024]](M[320216]), console[M[320024]](hw85);for (var rg8n13 in dfzvp) {
              if (hw85[dfzvp[rg8n13]] == 'accept') {
                var cvdi = Number(rg8n13);for (var yq_xe = 0x0; yq_xe < vdi['length']; yq_xe++) {
                  if (vdi[yq_xe][0x0] == cvdi) {
                    vdi[yq_xe][0x1] = 0x2;break;
                  }
                }
              }
            }console[M[320024]](vdi), vt9ic$ && vt9ic$(vdi);
          } else console[M[320024]](M[320217]), console[M[320024]](zdp7fo), console[M[320024]](vdi), vt9ic$ && vt9ic$(vdi);
        }, 'fail': function () {
          console[M[320024]](M[320218]), console[M[320024]](vdi), vt9ic$ && vt9ic$(vdi);
        } }) : (console[M[320024]](M[320219] + window[M[320023]]), console[M[320024]](vdi), vt9ic$ && vt9ic$(vdi));
    })) : (console[M[320024]](M[320220] + window[M[320023]]), console[M[320024]](vdi), vt9ic$ && vt9ic$(vdi)), wx[M[320221]](cl);
  }wx[M[320222]](cl);
}, window['t$Z6MK'] = { 'isSuccess': ![], 'level': M[320223], 'isCharging': ![] }, window['t$Z6KM'] = function (cvdi9) {
  wx['getBatteryInfo']({ 'success': function (n5813) {
      var h_xm0y = window['t$Z6MK'];h_xm0y[M[320224]] = !![], h_xm0y[M[320083]] = Number(n5813[M[320083]])['toFixed'](0x0), h_xm0y[M[320085]] = n5813[M[320085]], cvdi9 && cvdi9(h_xm0y[M[320224]], h_xm0y[M[320083]], h_xm0y[M[320085]]);
    }, 'fail': function (yhx_mw) {
      console[M[320024]](M[320225], yhx_mw[M[320034]]);var zqe70o = window['t$Z6MK'];cvdi9 && cvdi9(zqe70o[M[320224]], zqe70o[M[320083]], zqe70o[M[320085]]);
    } });
}, window[M[320210]] = function (nrg8, t9vc2, t29i, x_myh, akbrsj, n13685, ti29v, hx_my0) {
  x_myh == undefined && (x_myh = 0x1);var xe_y = new XMLHttpRequest();xe_y['onreadystatechange'] = function () {
    if (xe_y['readyState'] == 0x4) {
      if (xe_y['status'] == 0xc8 || xe_y['status'] == 0x12d) {
        var p$i9v = xe_y[M[320226]];p$i9v = JSON[M[320143]](xe_y[M[320226]]);if (!n13685 || n13685(p$i9v, xe_y, nrg8)) {
          t29i && t29i(p$i9v);return;
        } else console[M[320000]](nrg8), console[M[320014]](p$i9v);
      }x_myh - 0x1 > 0x0 ? setTimeout(function () {
        send(nrg8, t9vc2, t29i, x_myh - 0x1, akbrsj, n13685);
      }, 0x3e8) : akbrsj && akbrsj(JSON['stringify']({ 'url': nrg8, 'status': xe_y['status'], 'response': xe_y[M[320226]], 'responseType': xe_y[M[320227]] }));
    }
  }, xe_y[M[320228]](ti29v || M[320229], nrg8), xe_y[M[320227]] = 'text', xe_y['setRequestHeader']('content-type', hx_my0 || 'application/json'), xe_y[M[320210]](t9vc2);
}, window[M[320230]] = function (n6513, vpi$d, h685, _yqe0, q7ozfe, bjgarn, vtic$9) {
  !h685 && (h685 = {});var rgbn = Math[M[320231]](Date[M[320117]]() / 0x3e8);h685['time'] = rgbn, h685['method'] = vpi$d;var z7pef = Object[M[320232]](h685)['sort'](),
      $9tic = '',
      rabjk = '';for (var v2ic9t = 0x0; v2ic9t < z7pef['length']; v2ic9t++) {
    $9tic = $9tic + (v2ic9t == 0x0 ? '' : '&') + z7pef[v2ic9t] + h685[z7pef[v2ic9t]], rabjk = rabjk + (v2ic9t == 0x0 ? '' : '&') + z7pef[v2ic9t] + '=' + encodeURIComponent(h685[z7pef[v2ic9t]]);
  }$9tic = $9tic + t$ZK[M[320107]];var pvz$d = M[320233] + md5($9tic);send(n6513 + '?' + rabjk + (rabjk == '' ? '' : '&') + pvz$d, null, _yqe0, q7ozfe, bjgarn, vtic$9 || function ($vt) {
    return $vt['state'] == M[320180];
  }, null, 'application/x-www-form-urlencoded');
}, window['t$ZKM6'] = function (vp$9di, $dfp7z) {
  var zqoef7 = 0x0;t$ZK['selectedServer'] && (zqoef7 = t$ZK['selectedServer'][M[320012]]), sendApi(t$ZK[M[320105]], 'UserLog.reportUidStep', { 'partnerId': t$ZK['partnerId'], 'gamePkg': t$ZK[M[320109]], 'logTime': Math[M[320231]](Date[M[320117]]() / 0x3e8), 'platformUid': t$ZK['platform_uid'], 'type': vp$9di, 'serverId': zqoef7 }, null, 0x2, null, function () {
    return !![];
  });
}, window['t$ZK6M'] = function (krja) {
  sendApi(t$ZK[M[320104]], 'Server.getServerGroup', { 'partner_id': t$ZK['partnerId'], 'uid': t$ZK['account'], 'version': t$ZK[M[320052]], 'game_pkg': t$ZK[M[320109]], 'device': t$ZK[M[320110]] }, t$M6Z, t$6KZ, t$KM);
}, window['t$M6Z'] = function (pzfdo7) {
  if (pzfdo7['state'] === M[320180] && pzfdo7['data']) {
    pzfdo7['data']['unshift']({ 'id': -0x2, 'name': M[320234] }), pzfdo7['data']['unshift']({ 'id': -0x1, 'name': M[320235] }), t$ZK['groupList'] = pzfdo7['data'];if (window['initPanel']) window['initPanel']['showGroupList']();
  } else t$ZK[M[320236]] = ![], window['t$M6ZK'](M[320237] + pzfdo7['state']);
}, window['t$MZ6'] = function (bkjr) {
  sendApi(t$ZK[M[320104]], 'Server.getServerByUid', { 'partner_id': t$ZK['partnerId'], 'uid': t$ZK['account'], 'version': t$ZK[M[320052]], 'game_pkg': t$ZK[M[320109]], 'device': t$ZK[M[320110]] }, t$6MZ, t$6KZ, t$KM);
}, window['t$6MZ'] = function (zoe7fq) {
  t$ZK[M[320238]] = ![];if (zoe7fq['state'] === M[320180] && zoe7fq['data']) {
    for (var g183n6 = 0x0; g183n6 < zoe7fq['data']['length']; g183n6++) {
      zoe7fq['data'][g183n6]['status'] = t$KM6Z(zoe7fq['data'][g183n6]);
    }t$ZK['serverList'][-0x1] = window[M[320239]](zoe7fq['data']), window['initPanel']['showServerList'](-0x1);
  } else window['t$M6ZK'](M[320240] + zoe7fq['state']);
}, window['req_server_owner_status'] = function (g6n138) {
  sendApi(t$ZK[M[320104]], 'Server.getServerByUid', { 'partner_id': t$ZK['partnerId'], 'uid': t$ZK['account'], 'version': t$ZK[M[320052]], 'game_pkg': t$ZK[M[320109]], 'device': t$ZK[M[320110]] }, g6n138, t$6KZ, t$KM);
}, window['t$6ZM'] = function (_y0mh, pdf9v) {
  sendApi(t$ZK[M[320104]], 'Server.getServerByGroup', { 'partner_id': t$ZK['partnerId'], 'uid': t$ZK['account'], 'version': t$ZK[M[320052]], 'game_pkg': t$ZK[M[320109]], 'device': t$ZK[M[320110]], 'server_group_id': pdf9v }, t$ZM6, t$6KZ, t$KM);
}, window['t$ZM6'] = function (rb3jng) {
  t$ZK[M[320238]] = ![];if (rb3jng['state'] === M[320180] && rb3jng['data'] && rb3jng['data']['data']) {
    var $ivdc9 = rb3jng['data'][M[320241]],
        wmy5_ = [];for (var m6h5w1 = 0x0; m6h5w1 < rb3jng['data']['data']['length']; m6h5w1++) {
      rb3jng['data']['data'][m6h5w1]['status'] = t$KM6Z(rb3jng['data']['data'][m6h5w1]), (wmy5_['length'] == 0x0 || rb3jng['data']['data'][m6h5w1]['status'] != 0x0) && (wmy5_[wmy5_['length']] = rb3jng['data']['data'][m6h5w1]);
    }t$ZK['serverList'][$ivdc9] = window[M[320239]](wmy5_), window['initPanel']['showServerList']($ivdc9);
  } else window['t$M6ZK']('reqServerListCallBack ' + rb3jng['state']);
}, window['t$FZ6K'] = function (skujba) {
  sendApi(t$ZK[M[320104]], 'Server.getRecommendServerList', { 'partner_id': t$ZK['partnerId'], 'uid': t$ZK['account'], 'version': t$ZK[M[320052]], 'game_pkg': t$ZK[M[320109]], 'device': t$ZK[M[320110]] }, reqServerRecommendCallBack, t$6KZ, t$KM);
}, window[M[320242]] = function (pdvf) {
  t$ZK[M[320238]] = ![];if (pdvf['state'] === M[320180] && pdvf['data']) {
    for (var $dfv = 0x0; $dfv < pdvf['data']['length']; $dfv++) {
      pdvf['data'][$dfv]['status'] = t$KM6Z(pdvf['data'][$dfv]);
    }t$ZK['serverList'][-0x2] = window[M[320239]](pdvf['data']), window['initPanel']['showServerList'](-0x2);
  } else alert(M[320243] + pdvf['state']);
}, window[M[320239]] = function (ofpze) {
  if (!ofpze && ofpze['length'] <= 0x0) return ofpze;for (let rbg3j = 0x0; rbg3j < ofpze['length']; rbg3j++) {
    ofpze[rbg3j][M[320244]] && ofpze[rbg3j][M[320244]] == 0x1 && (ofpze[rbg3j][M[320188]] += M[320245]);
  }return ofpze;
}, window['t$Z6M'] = function (ct2i94, i9c$d) {
  ct2i94 = ct2i94 || t$ZK['selectedServer'][M[320012]], sendApi(t$ZK[M[320104]], 'Common.get_anno', { 'type': '4', 'game_pkg': t$ZK[M[320109]], 'server_id': ct2i94 }, i9c$d);
}, window['req_multi_server_notice'] = function (g3n81r, xqoye, mh16, xoeqy0) {
  mh16 = mh16 || t$ZK['selectedServer'][M[320012]], sendApi(t$ZK[M[320104]], 'Common.get_new_anno', { 'type': g3n81r, 'game_pkg': xqoye, 'server_id': mh16 }, xoeqy0);
}, window['t$KM6Z'] = function (wyxm_) {
  if (wyxm_) {
    if (wyxm_['status'] == 0x1) {
      if (wyxm_['online_status'] == 0x1) return 0x2;else return 0x1;
    } else return wyxm_['status'] == 0x0 ? 0x0 : -0x1;
  }return -0x1;
}, window['t$KMZ6'] = function (c9it2v, najb) {
  t$ZK['last_check_ban'] = { 'step': c9it2v, 'server_id': najb };var p9iv = this;t$MZ6K({ 'title': M[320246] }), sendApi(t$ZK[M[320104]], M[320247], { 'partner_id': t$ZK['partnerId'], 'uid': t$ZK['account'], 'game_pkg': t$ZK[M[320109]], 'server_id': najb, 'platform': t$ZK['platform'], 'platform_uid': t$ZK['platform_uid'], 'check_login_time': t$ZK['php_signtime'], 'check_login_sign': t$ZK[M[320183]], 'version_name': t$ZK[M[320164]] }, t$K6MZ, t$6KZ, t$KM, function (v9ci2t) {
    return v9ci2t['state'] == M[320180] || v9ci2t[M[320000]] == 'time_err' || v9ci2t[M[320000]] == M[320248];
  });
}, window['t$K6MZ'] = function (_y0mqx) {
  var qxyoe0 = this;if (_y0mqx['state'] === M[320180] && _y0mqx['data']) {
    var g83n = t$ZK['selectedServer'];g83n[M[320249]] = t$ZK[M[320112]], g83n[M[320184]] = String(_y0mqx['data'][M[320250]]), g83n['tick'] = parseInt(_y0mqx['data']['time']);if (_y0mqx['data'][M[320251]]) g83n[M[320251]] = parseInt(_y0mqx['data'][M[320251]]);else g83n[M[320251]] = parseInt(_y0mqx['data'][M[320012]]);g83n[M[320252]] = 0x0, g83n[M[320011]] = t$ZK[M[320194]], g83n[M[320253]] = _y0mqx['data'][M[320254]], g83n['server_options'] = _y0mqx['data']['server_options'], console[M[320024]]('server_options\uFF1A' + JSON['stringify'](g83n['server_options'])), t$ZK['newRegister'] == 0x1 && g83n['server_options'] && g83n['server_options']['show_btn'] == 0x1 && (t$ZK['showGetBtn'] = 0x1, window[M[320020]]['instance']['t$FK']()), t$K6ZM();
  } else sendApi(t$ZK[M[320104]], M[320172], { 'platform': t$ZK[M[320102]], 'partner_id': t$ZK['partnerId'], 'token': t$ZK['sdk_token'], 'game_pkg': t$ZK[M[320109]], 'deviceId': t$ZK[M[320110]], 'scene': M[320173] + t$ZK[M[320111]] }, function (zpo7e) {
    if (zpo7e['state'] == M[320255]) {
      window['t$M6ZK'](M[320181] + zpo7e['state']);return;
    }t$ZK[M[320183]] = String(zpo7e[M[320184]]), t$ZK['php_signtime'] = String(zpo7e['time']), setTimeout(function () {
      t$KMZ6(t$ZK['last_check_ban']['step'], t$ZK['last_check_ban'][M[320012]]);
    }, 0x5dc);
  }, t$6KZ, t$KM, function ($tvci) {
    return $tvci['state'] == M[320180] || $tvci['state'] == M[320255];
  });
}, window['t$K6ZM'] = function () {
  ServerLoading['instance'][M[320191]](t$ZK['newRegister']), window['t$6K'] = !![], window['t$KZ6M']();
}, window['t$KZM6'] = function () {
  if (window['t$K6'] && window['t$Z6K'] && window[M[320123]] && window[M[320124]] && window['t$ZK6'] && window['t$Z6']) {
    if (!window[M[320256]]['instance']) {
      console[M[320024]](M[320257] + window[M[320256]]['instance']);var n3gjbr = wx['getLaunchOptionsSync'](),
          vidp = n3gjbr[M[320090]] ? n3gjbr[M[320090]] : 0x0,
          qeo7x = { 'cdn': window['t$ZK'][M[320011]], 'spareCdn': window['t$ZK'][M[320163]], 'newRegister': window['t$ZK']['newRegister'], 'wxPC': window['t$ZK'][M[320072]], 'wxIOS': window['t$ZK'][M[320066]], 'wxAndroid': window['t$ZK'][M[320069]], 'wxParam': { 'limitLoad': window['t$ZK']['t$FMZ6K'], 'benchmarkLevel': window['t$ZK']['t$FMZK6'], 'wxFrom': window[M[320004]][M[320168]] == 'txcps' ? 0x1 : 0x0, 'wxSDKVersion': window[M[320023]] }, 'configType': window['t$ZK'][M[320118]], 'exposeType': window['t$ZK'][M[320120]], 'scene': vidp };new window[M[320256]](qeo7x, window['t$ZK']['lastVersion'], window['t$FM6KZ']);
    }
  }
}, window['t$KZ6M'] = function () {
  if (window['t$K6'] && window['t$Z6K'] && window[M[320123]] && window[M[320124]] && window['t$ZK6'] && window['t$Z6'] && window['t$6K'] && window['t$6Z']) {
    t$MZK6();if (!t$K6Z) {
      t$K6Z = !![];if (!window[M[320256]]['instance']) window['t$KZM6']();var $cv9d = 0x0,
          gjbark = wx['getMenuButtonBoundingClientRect']();gjbark && (window['t$ZK'][M[320071]] && ($cv9d = gjbark['top']), console[M[320000]]('MenuButton  top:' + gjbark['top'] + ',bottom:' + gjbark['bottom'] + ',left:' + gjbark['left'] + ',right:' + gjbark['right'] + ',width:' + gjbark['width'] + ',height:' + gjbark['height']));var ic$vt = {};for (const fd7p$ in t$ZK['selectedServer']) {
        ic$vt[fd7p$] = t$ZK['selectedServer'][fd7p$];
      }var rbngj = { 'channel': window['t$ZK'][M[320113]], 'account': window['t$ZK']['account'], 'userId': window['t$ZK'][M[320182]], 'cdn': window['t$ZK'][M[320011]], 'data': window['t$ZK']['data'], 'package': window['t$ZK'][M[320100]], 'newRegister': window['t$ZK']['newRegister'], 'pkgName': window['t$ZK'][M[320109]], 'partnerId': window['t$ZK']['partnerId'], 'platform_uid': window['t$ZK']['platform_uid'], 'deviceId': window['t$ZK'][M[320110]], 'selectedServer': ic$vt, 'configType': window['t$ZK'][M[320118]], 'exposeType': window['t$ZK'][M[320120]], 'debugUsers': window['t$ZK'][M[320115]], 'wxMenuTop': $cv9d, 'wxShield': window['t$ZK'][M[320122]] };if (window['pkgOptions']) for (var o7xeq0 in window['pkgOptions']) {
        rbngj[o7xeq0] = window['pkgOptions'][o7xeq0];
      }window[M[320256]]['instance']['t$6FKZ'](rbngj);
    }
  } else console[M[320000]](M[320258] + window['t$K6'] + M[320259] + window['t$Z6K'] + M[320260] + window[M[320123]] + M[320261] + window[M[320124]] + M[320262] + window['t$ZK6'] + M[320263] + window['t$Z6'] + M[320264] + window['t$6K'] + ',loadOption:' + window['t$6Z']);
};