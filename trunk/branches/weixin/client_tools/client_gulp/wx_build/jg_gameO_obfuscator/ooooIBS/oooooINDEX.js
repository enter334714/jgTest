var c = wx.$o;
import o__enuk from '../ooosk/oooosdk.js';window['versions'] = { 'wxVersion': window['config'][c[220002]] }, window[c[220277]] = !0x1, window['_oEA'] = 0x1, window[c[220278]] = 0x1, window['_o8AE'] = !0x0, window[c[220279]] = !0x0, window['_oQU8EA'] = '', window['_oAE'] = { 'base_cdn': 'https://cdn-tjqy.shzbkj.com/weixin_0/', 'cdn': 'https://cdn-tjqy.shzbkj.com/weixin_0/' }, _oAE['pay_infos'] = {}, _oAE[c[220280]] = '0', _oAE['version'] = window['versions']['wxVersion'], _oAE[c[220064]] = '', _oAE['os'] = '1', _oAE[c[220281]] = c[220282], _oAE[c[220283]] = 'https://api-tjqytest.shzbkj.com', _oAE['logurl'] = 'https://log-tjqytest.shzbkj.com', _oAE[c[220284]] = 'https://pay-tjqytest.shzbkj.com', _oAE[c[220285]] = c[220286], _oAE[c[220287]] = '1', _oAE[c[220190]] = '', _oAE[c[220288]] = '', _oAE['from_scene'] = 0x0, _oAE[c[220217]] = {}, _oAE[c[220289]] = parseInt(_oAE[c[220287]]), _oAE[c[220290]] = _oAE[c[220287]], _oAE[c[220008]] = {}, _oAE['_oUA'] = 'https://jgcenter.sh9130.com/clientlog/', _oAE['showLogo'] = !0x1, _oAE[c[220291]] = c[220292], _oAE[c[220293]] = Date['now'](), _oAE['configType'] = c[220294], _oAE['exposeType'] = '_a', _oAE['loadingType'] = 0x2, _oAE['lastVersion'] = 0x7c1, _oAE['wxVersion'] = window['versions']['wxVersion'], _oAE[c[220295]] = !0x1, _oAE[c[220061]] = !0x1, _oAE['wxAndroid'] = !0x1, _oAE[c[220063]] = !0x1, window['_o8EA'] = 0x5, window['_o8E'] = !0x1, window['_oE8'] = !0x1, window['_oA8E'] = !0x1, window['loadServerRes'] = !0x1, window['loadLoadingRes'] = !0x1, window['_oAE8'] = !0x1, window['_o8A'] = !0x1, window['_oA8'] = !0x1, window['_oE8A'] = !0x1, window[c[220296]] = function (tqsm5) {
  console['log'](c[220296], tqsm5), wx['hideLoading']({}), wx['showModal']({ 'title': c[220036], 'content': tqsm5, 'success'(hozcb8) {
      hozcb8['confirm'] ? console['log'](c[220297]) : hozcb8[c[220298]] && console['log'](c[220299]);
    } });
}, window['_oU8AE'] = function (un_v3y) {
  console['log']('loginAlert', un_v3y), _oUAE8(), wx['showModal']({ 'title': c[220036], 'content': un_v3y, 'confirmText': c[220300], 'cancelText': c[220301], 'success'(ej$k) {
      ej$k['confirm'] ? window['_oAU']() : ej$k[c[220298]] && (console['log'](c[220302]), wx['exitMiniProgram']({}));
    } });
}, window['_oEQA'] = function (yek$0) {
  console['log'](c[220303], yek$0), wx['showModal']({ 'title': c[220036], 'content': yek$0, 'confirmText': c[220304], 'showCancel': !0x1, 'complete'(ix19fw) {
      console['log'](c[220302]), wx['exitMiniProgram']({});
    } });
}, window['_oU8EA'] = !0x1, window['_oUA8E'] = function (ky0e_$) {
  window['_oU8EA'] = !0x0, wx['showLoading'](ky0e_$);
}, window['_oUAE8'] = function () {
  window['_oU8EA'] && (window['_oU8EA'] = !0x1, wx['hideLoading']({}));
}, window['_oUE8A'] = function (rz8hpc) {
  window['ServerLoading'][c[220016]]['_oUE8A'](rz8hpc);
}, window[c[220305]] = function (crzmp8, x94fw) {
  o__enuk[c[220305]](crzmp8, function (fwix) {
    fwix && fwix[c[220201]] ? 0x1 == fwix[c[220201]][c[220200]] ? x94fw(!0x0) : (x94fw(!0x1), console['info'](c[220306] + fwix[c[220201]][c[220307]])) : console['log'](c[220305], fwix);
  });
}, window['_oUEA8'] = function (ky$e0) {
  console['log'](c[220308], ky$e0);
}, window['_oUAE'] = function (il6) {}, window['_oUEA'] = function (xo9, q7ts5m, dl2a6i) {}, window['_oUE'] = function (xb4o) {
  console['log']('toEnterGame', xb4o), window['ServerLoading'][c[220016]]['closeAuthor'](), window['ServerLoading'][c[220016]]['closeServer'](), window['ServerLoading'][c[220016]]['closeLoading']();
}, window['_oEU'] = function (o8bczh) {
  window['_oU8AE']('on api error'), o8bczh = { 'id': window['_oAE']['roleId'], 'role': window['_oAE']['roleName'], 'level': window['_oAE']['roleLevel'], 'account': window['_oAE']['account'], 'version': window['_oAE']['lastVersion'], 'cdn': window['_oAE'][c[220007]], 'pkgName': window['_oAE'][c[220190]], 'gamever': window['config'][c[220002]], 'serverid': window['_oAE'][c[220008]] ? window['_oAE'][c[220008]][c[220009]] : 0x0, 'systemInfo': window['systemInfo'], 'error': 'onApiError', 'stack': o8bczh || 'on api error' }, o8bczh = JSON[c[220010]](o8bczh), (console['error'](c[220309] + o8bczh), window['_oUA'](o8bczh));
}, window['_oAUE'] = function (_lvnu) {
  _lvnu = JSON[c[220310]](_lvnu), (_lvnu[c[220311]] = window['config'][c[220002]], _lvnu[c[220312]] = window['_oAE'][c[220008]] ? window['_oAE'][c[220008]][c[220009]] : 0x0, _lvnu['systemInfo'] = window['systemInfo']), _lvnu = JSON[c[220010]](_lvnu), (console['error'](c[220313] + _lvnu), window['_oUA'](_lvnu));
}, window['_oAEU'] = function (zbch, y_u0) {
  y_u0 = { 'id': window['_oAE']['roleId'], 'role': window['_oAE']['roleName'], 'level': window['_oAE']['roleLevel'], 'account': window['_oAE']['account'], 'version': window['_oAE']['lastVersion'], 'cdn': window['_oAE'][c[220007]], 'pkgName': window['_oAE'][c[220190]], 'gamever': window['config'][c[220002]], 'serverid': window['_oAE'][c[220008]] ? window['_oAE'][c[220008]][c[220009]] : 0x0, 'systemInfo': window['systemInfo'], 'error': zbch, 'stack': y_u0 }, y_u0 = JSON[c[220010]](y_u0), (console[c[220265]](c[220314] + y_u0), window['_oUA'](y_u0));
}, window['_oUA'] = function (rstqm5) {
  var a3vnul;'devtools' != window['_oAE']['wxPlatform'] && (a3vnul = _oAE['_oUA'] + '?account=' + _oAE['account'], wx[c[220315]]({ 'url': a3vnul, 'method': c[220316], 'data': rstqm5, 'header': { 'content-type': 'application/json', 'cache-control': 'no-cache' }, 'success': function (wf9x41) {}, 'fail': function (x9f1w) {}, 'complete': function () {} }));
}, window[c[220317]] = function () {
  function n_u3yv() {
    return (0x10000 * (0x1 + Math['random']()) | 0x0)['toString'](0x10)[c[220318]](0x1);
  }return n_u3yv() + n_u3yv() + '-' + n_u3yv() + '-' + n_u3yv() + '-' + n_u3yv() + '+' + n_u3yv() + n_u3yv() + n_u3yv();
};var wx_develop = !(window['_oAU'] = function () {
  console['log'](c[220319]);var av6l2 = o__enuk['getConfig']();_oAE[c[220290]] = av6l2[c[220320]], _oAE[c[220289]] = av6l2[c[220320]], _oAE[c[220287]] = av6l2[c[220320]], _oAE[c[220190]] = av6l2[c[220321]], av6l2 = { 'game_ver': _oAE['version'] }, (_oAE[c[220288]] = this[c[220317]](), _oUA8E({ 'title': c[220322] }), o__enuk[c[220225]](av6l2, this['_oEUA'][c[220162]](this)));
});window['_oEUA'] = function (av62) {
  var fg94 = av62['develop'];wx_develop = 0x1 == fg94, console['log'](c[220323] + fg94 + c[220324] + (0x1 == fg94) + c[220325] + av62[c[220002]] + c[220326] + window['versions']['wxVersion']), !av62[c[220002]] || window['_oQ8EAU'](window['versions']['wxVersion'], av62[c[220002]]) < 0x0 ? (console['log'](c[220327]), _oAE[c[220283]] = 'https://api-tjqy.shzbkj.com', _oAE['logurl'] = 'https://log-tjqy.shzbkj.com', _oAE[c[220284]] = 'https://pay-tjqy.shzbkj.com', _oAE[c[220007]] = 'https://cdn-tjqy-fx.shzbkj.com/weixin_1/', _oAE[c[220328]] = 'https://cdn-tjqy-ali.shzbkj.com/weixin_1/', _oAE['version_name'] = c[220329], _oAE[c[220295]] = !0x1) : 0x0 == window['_oQ8EAU'](window['versions']['wxVersion'], av62[c[220002]]) ? (console['log'](c[220330]), _oAE[c[220283]] = 'https://api-tjqytest.shzbkj.com', _oAE['logurl'] = 'https://log-tjqytest.shzbkj.com', _oAE[c[220284]] = 'https://pay-tjqytest.shzbkj.com', _oAE[c[220007]] = 'https://cdn-tjqy-fx.shzbkj.com/weixin_0/', _oAE[c[220328]] = 'https://cdn-tjqy-ali.shzbkj.com/weixin_1/', _oAE['version_name'] = c[220331], _oAE[c[220295]] = !0x0) : (console['log'](c[220332]), _oAE[c[220283]] = 'https://api-tjqytest.shzbkj.com', _oAE['logurl'] = 'https://log-tjqytest.shzbkj.com', _oAE[c[220284]] = 'https://pay-tjqytest.shzbkj.com', _oAE[c[220007]] = 'https://cdn-tjqy-fx.shzbkj.com/weixin_0/', _oAE[c[220328]] = 'https://cdn-tjqy-ali.shzbkj.com/weixin_1/', _oAE['version_name'] = c[220331], _oAE[c[220295]] = !0x1), _oAE['from_scene'] = config['from'] || 0x0, this['_o8AUE'](), this['_o8AEU'](), window['sdkLoginRetry'] = 0x5, _oUA8E({ 'title': c[220333] }), o__enuk['login'](this['_oEAU'][c[220162]](this));
}, window['sdkLoginRetry'] = 0x5, window['_oEAU'] = function (w4g9fx, w216i) {
  0x0 == w4g9fx && w216i && w216i['token'] ? (_oAE['sdk_token'] = w216i['token'], _oUA8E({ 'title': c[220334] }), sendApi(_oAE[c[220283]], 'User.login', { 'platform': _oAE[c[220281]], 'partner_id': _oAE[c[220287]], 'token': w216i['token'], 'game_pkg': _oAE[c[220190]], 'deviceId': _oAE[c[220288]], 'scene': c[220335] + _oAE['from_scene'] }, this['_o8UAE'][c[220162]](this), _o8EA, _oEU)) : w216i && w216i[c[220028]] && 0x0 < window['sdkLoginRetry'] && (-0x1 != w216i[c[220028]][c[220062]](c[220336]) || -0x1 != w216i[c[220028]][c[220062]]('network api interrupted') || -0x1 != w216i[c[220028]][c[220062]]('Network Error') || -0x1 != w216i[c[220028]][c[220062]](c[220337]) || -0x1 != w216i[c[220028]][c[220062]](c[220338]) || -0x1 != w216i[c[220028]][c[220062]](c[220339])) ? (window['sdkLoginRetry']--, o__enuk['login'](this['_oEAU'][c[220162]](this))) : (window['_oAEU']('sdkOnLoginError', JSON[c[220010]]({ 'status': w4g9fx, 'data': w216i })), window['_oU8AE'](c[220340] + (w216i && w216i[c[220028]] ? '，' + w216i[c[220028]] : '')));
}, window['_o8UAE'] = function (lu3av) {
  lu3av ? c[220199] == lu3av[c[220200]] ? (_oAE[c[220341]] = String(lu3av['account']), _oAE['account'] = String(lu3av['account']), _oAE['platform'] = String(lu3av['platform']), _oAE[c[220290]] = String(lu3av['platform']), _oAE['platform_uid'] = String(lu3av['platform_uid']), _oAE[c[220342]] = String(lu3av[c[220343]]), _oAE[c[220344]] = String(lu3av[c[220345]]), _oAE[c[220343]] = '', _oUA8E({ 'title': c[220346] }), sendApi(_oAE[c[220283]], c[220347], { 'partner_id': _oAE[c[220287]], 'uid': _oAE['account'], 'version': _oAE['version'], 'game_pkg': _oAE[c[220190]], 'device': _oAE[c[220288]] }, this['_o8UEA'][c[220162]](this), _o8EA, _oEU)) : window['_oU8AE']('User.login failed: ' + lu3av[c[220200]]) : window['_oU8AE']('User.login failed');
}, window['_o8UEA'] = function (qr5mts) {
  qr5mts ? c[220199] == qr5mts[c[220200]] ? qr5mts[c[220201]] && 0x0 != qr5mts[c[220201]][c[220005]] ? (_oAE[c[220248]] = qr5mts[c[220348]], _oAE[c[220008]] = { 'server_id': String(qr5mts[c[220201]][0x0][c[220009]]), 'server_name': String(qr5mts[c[220201]][0x0][c[220206]]), 'entry_ip': qr5mts[c[220201]][0x0][c[220349]], 'entry_port': parseInt(qr5mts[c[220201]][0x0]['entry_port']), 'status': _oEU8A(qr5mts[c[220201]][0x0]), 'start_time': qr5mts[c[220201]][0x0][c[220350]], 'cdn': _oAE[c[220007]] }, this['_oQU8AE']()) : window['_oU8AE'](c[220351]) : window['_oU8AE'](c[220352] + qr5mts[c[220200]]) : window['_oU8AE'](c[220353]);
}, window['_oQU8AE'] = function () {
  if (0x1 == _oAE[c[220248]]) {
    var ldv6a3 = _oAE[c[220008]][c[220195]];if (-0x1 === ldv6a3 || 0x0 === ldv6a3) return void window['_oU8AE'](-0x1 === ldv6a3 ? c[220354] : c[220355]);_oEUA8(0x0, _oAE[c[220008]][c[220009]]), window['ServerLoading'][c[220016]]['openLoading'](_oAE[c[220248]]);
  } else window['ServerLoading'][c[220016]]['openServer'](), _oUAE8();window['_oA8'] = !0x0, window['_oEAU8'](), window['_oEA8U']();
}, window['_o8AUE'] = function () {
  sendApi(_oAE[c[220283]], 'User.getCdnVersion', { 'game_pkg': _oAE[c[220190]], 'version_name': _oAE['version_name'] }, function (g4ozhb) {
    g4ozhb ? c[220199] == g4ozhb[c[220200]] ? g4ozhb[c[220201]] && g4ozhb[c[220201]]['version'] ? (g4ozhb[c[220201]][c[220356]] && 0xa < g4ozhb[c[220201]][c[220356]][c[220005]] && (_oAE[c[220357]] = g4ozhb[c[220201]][c[220356]], _oAE[c[220007]] = g4ozhb[c[220201]][c[220356]]), g4ozhb[c[220201]]['version'] && (_oAE['lastVersion'] = g4ozhb[c[220201]]['version']), console['info']('lastVersion:' + _oAE['lastVersion'] + ', version_name:' + _oAE['version_name']), window['_oAE8'] = !0x0, window['_oEAU8'](), window['_oEA8U']()) : window['_oU8AE']('User.getCdnVersion failed: version=' + (g4ozhb[c[220201]] && g4ozhb[c[220201]]['version'])) : window['_oU8AE']('User.getCdnVersion failed: state=' + g4ozhb[c[220200]]) : window['_oU8AE']('User.getCdnVersion failed');
  });
}, window['pkgOptions'], window['_o8AEU'] = function () {
  sendApi(_oAE[c[220283]], 'Common.get_option_pkg', { 'game_pkg': _oAE[c[220190]] }, _o8EUA);
}, window['_o8EUA'] = function (ms57q) {
  if (c[220199] === ms57q[c[220200]] && ms57q[c[220201]]) {
    for (var f19xwi in window['pkgOptions'] = ms57q[c[220201]], ms57q[c[220201]]) _oAE[f19xwi] = ms57q[c[220201]][f19xwi];
  } else console['info']('reqPkgOptionsCallBack ' + ms57q[c[220200]]);window['_o8A'] = !0x0, window['_oEA8U']();
}, window['toPay'] = function (xoh4, iw621, d2ia, y3ne, m5tprq, va26d, hg4boz, xwgf9, wfi2d) {
  m5tprq = String(m5tprq), (_oAE['pay_infos'][m5tprq] = { 'productid': m5tprq, 'productname': hg4boz, 'productdesc': xwgf9, 'roleid': xoh4, 'rolename': iw621, 'rolelevel': d2ia, 'price': va26d, 'callback': wfi2d }, sendApi(_oAE[c[220284]], 'Order.order', { 'game_pkg': _oAE[c[220190]], 'server_id': _oAE[c[220008]][c[220009]], 'server_name': _oAE[c[220008]][c[220206]], 'level': d2ia, 'uid': _oAE['account'], 'role_id': xoh4, 'role_name': iw621, 'product_id': m5tprq, 'product_name': hg4boz, 'product_desc': xwgf9, 'money': va26d, 'partner_id': _oAE[c[220287]] }, toPayCallBack, _o8EA, _oEU));
}, window['toPayCallBack'] = function (bgx9o) {
  var l6a2v;bgx9o && (0xc8 === bgx9o['errCode'] || c[220199] == bgx9o[c[220200]] ? ((l6a2v = _oAE['pay_infos'][String(bgx9o['product_id'])])[c[220358]] && l6a2v[c[220358]](bgx9o['product_id'], bgx9o['cp_order_id'], -0x1), o__enuk[c[220359]]({ 'cpbill': bgx9o['cp_order_id'], 'productid': bgx9o['product_id'], 'productname': l6a2v['productname'], 'productdesc': l6a2v['productdesc'], 'serverid': _oAE[c[220008]][c[220009]], 'servername': _oAE[c[220008]][c[220206]], 'roleid': l6a2v['roleid'], 'rolename': l6a2v['rolename'], 'rolelevel': l6a2v['rolelevel'], 'price': l6a2v[c[220360]], 'extension': JSON[c[220010]]({ 'cp_order_id': bgx9o['cp_order_id'] }) }, function (hb8czp, wg4f) {
    l6a2v[c[220358]] && 0x0 == hb8czp && l6a2v[c[220358]](bgx9o['product_id'], bgx9o['cp_order_id'], hb8czp), console['info'](JSON[c[220010]]({ 'type': c[220361], 'status': hb8czp, 'data': bgx9o, 'role_name': l6a2v['rolename'] }));
  })) : alert(bgx9o['info']));
}, window['_o8EAU'] = function () {}, window['_oU8E'] = function (if1w29, gzb, xbgoh, l36d, z8gbho) {
  o__enuk['logCreateRole'](_oAE[c[220008]][c[220009]], _oAE[c[220008]][c[220206]] || _oAE[c[220008]][c[220009]], if1w29, gzb, xbgoh), sendApi(_oAE[c[220283]], 'User.create_role', { 'game_pkg': _oAE[c[220190]], 'server_id': _oAE[c[220008]][c[220009]], 'role_id': if1w29, 'uid': _oAE['account'], 'role_name': gzb, 'role_type': l36d, 'level': xbgoh });
}, window['_oUE8'] = function (u_0k, x4fo9, yeuk_n, hogz8, ykune_, u_ln, mq5ptr, r8pzh, crz8ph, x9gof) {
  _oAE['roleId'] = u_0k, _oAE['roleName'] = x4fo9, _oAE['roleLevel'] = yeuk_n, o__enuk['logEnterGame'](_oAE[c[220008]][c[220009]], _oAE[c[220008]][c[220206]] || _oAE[c[220008]][c[220009]], u_0k, x4fo9, yeuk_n), sendApi(_oAE[c[220283]], 'User.update_role', { 'game_pkg': _oAE[c[220190]], 'server_id': _oAE[c[220008]][c[220009]], 'role_id': u_0k, 'uid': _oAE['account'], 'role_name': x4fo9, 'role_type': hogz8, 'level': yeuk_n, 'evolution': ykune_ });
}, window['_o8UE'] = function (ph8zr, nvuy_, y_nuv3, ky_nue, g9b, _kuye, _uk0ey, bo4x, zh4bg, k_e$0) {
  _oAE['roleId'] = ph8zr, _oAE['roleName'] = nvuy_, _oAE['roleLevel'] = y_nuv3, o__enuk['logRoleUpLevel'](_oAE[c[220008]][c[220009]], _oAE[c[220008]][c[220206]] || _oAE[c[220008]][c[220009]], ph8zr, nvuy_, y_nuv3), sendApi(_oAE[c[220283]], 'User.update_role', { 'game_pkg': _oAE[c[220190]], 'server_id': _oAE[c[220008]][c[220009]], 'role_id': ph8zr, 'uid': _oAE['account'], 'role_name': nvuy_, 'role_type': ky_nue, 'level': y_nuv3, 'evolution': g9b });
}, window['_o8EU'] = function (y3n) {}, window['_oU8'] = function (qr5mtp) {
  o__enuk[c[220362]](c[220362], function (pcz8) {
    qr5mtp && qr5mtp(pcz8);
  });
}, window['openService'] = function () {
  o__enuk['openService']();
}, window['microPortGuide'] = function () {
  o__enuk[c[220363]]();
}, window['_o8U'] = function (ue_nyk) {
  window['_oE8U'] = ue_nyk, window['_oE8U'] && window['_oEU8'] && (console['info'](c[220075] + window['_oEU8'][c[220076]]), window['_oE8U'](window['_oEU8']), window['_oEU8'] = null);
}, window['_oAU8E'] = function (nyu_ek, bczph8, zo4ghb, dai6) {
  window[c[220364]]('https://sdk.sh9130.com/game/?ct=min&ac=getInviter', { 'game_pkg': window['_oAE'][c[220190]], 'role_id': bczph8, 'server_id': zo4ghb }, dai6);
}, window['_oAUE8'] = function (hrpz, cm5prt) {
  wx['onTouchEnd'](function vnl_3(g8oh) {
    var f1wi2d = [],
        $0 = [],
        f2d1w = window['config'][c[220365]];for (var w91xf4 in f2d1w) {
      var bhxg4o = Number(w91xf4);hrpz && hrpz[c[220005]] && -0x1 == hrpz[c[220062]](bhxg4o) || ($0[c[220019]](f2d1w[w91xf4]), f1wi2d[c[220019]]([bhxg4o, 0x3]));
    }0x0 <= window['_oQ8EAU'](window['SDKVersion'], c[220366]) ? (console['log'](c[220367]), o__enuk[c[220368]] && o__enuk[c[220368]]($0, function (rt5mqp) {
      if (console['log'](c[220369]), console['log'](rt5mqp), rt5mqp && 'requestSubscribeMessage:ok' == rt5mqp[c[220028]]) {
        for (var ozhg8b in f2d1w) if (c[220370] == rt5mqp[f2d1w[ozhg8b]]) {
          var _kyeu = Number(ozhg8b);for (var zc8hpr = 0x0; zc8hpr < f1wi2d[c[220005]]; zc8hpr++) if (f1wi2d[zc8hpr][0x0] == _kyeu) {
            f1wi2d[zc8hpr][0x1] = 0x1;break;
          }
        }
      }0x0 <= window['_oQ8EAU'](window['SDKVersion'], c[220371]) ? wx[c[220372]]({ 'withSubscriptions': !0x0, 'success': function (lv6n3a) {
          var unval = lv6n3a['subscriptionsSetting'][c[220373]];if (unval) {
            for (var a3vdl6 in console['log'](c[220374]), console['log'](unval), f2d1w) if (c[220370] == unval[f2d1w[a3vdl6]]) {
              var ctr5mp = Number(a3vdl6);for (var ilad2 = 0x0; ilad2 < f1wi2d[c[220005]]; ilad2++) if (f1wi2d[ilad2][0x0] == ctr5mp) {
                f1wi2d[ilad2][0x1] = 0x2;break;
              }
            }console['log'](f1wi2d), cm5prt && cm5prt(f1wi2d);
          } else console['log'](c[220375]), console['log'](lv6n3a), console['log'](f1wi2d), cm5prt && cm5prt(f1wi2d);
        }, 'fail': function () {
          console['log'](c[220376]), console['log'](f1wi2d), cm5prt && cm5prt(f1wi2d);
        } }) : (console['log'](c[220377] + window['SDKVersion']), console['log'](f1wi2d), cm5prt && cm5prt(f1wi2d));
    })) : (console['log'](c[220378] + window['SDKVersion']), console['log'](f1wi2d), cm5prt && cm5prt(f1wi2d)), wx['offTouchEnd'](vnl_3);
  });
}, window['_oA8UE'] = { 'isSuccess': !0x1, 'level': c[220379], 'isCharging': !0x1 }, window['_oA8EU'] = function (czphr) {
  wx['getBatteryInfo']({ 'success': function (x4fog) {
      var pzhb8 = window['_oA8UE'];pzhb8[c[220380]] = !0x0, pzhb8[c[220069]] = Number(x4fog[c[220069]])['toFixed'](0x0), pzhb8[c[220071]] = x4fog[c[220071]], czphr && czphr(pzhb8[c[220380]], pzhb8[c[220069]], pzhb8[c[220071]]);
    }, 'fail': function (lda62) {
      console['log'](c[220381], lda62[c[220028]]), lda62 = window['_oA8UE'], czphr && czphr(lda62[c[220380]], lda62[c[220069]], lda62[c[220071]]);
    } });
}, window[c[220364]] = function (y_ekn, gof4x, oz8b, zrmp8, r8cpm5, xgo, uvl_n, zhg4o) {
  null == zrmp8 && (zrmp8 = 0x1);var wgxf49 = new XMLHttpRequest();wgxf49['onreadystatechange'] = function () {
    if (0x4 == wgxf49[c[220382]]) {
      if (0xc8 == wgxf49[c[220195]] || 0x12d == wgxf49[c[220195]]) {
        var m7qt5;wgxf49['response'];if (m7qt5 = JSON[c[220310]](wgxf49['response']), !xgo || xgo(m7qt5, wgxf49, y_ekn)) return void (oz8b && oz8b(m7qt5));console['info'](y_ekn), console['error'](m7qt5);
      }0x0 < zrmp8 - 0x1 ? setTimeout(function () {
        send(y_ekn, gof4x, oz8b, zrmp8 - 0x1, r8cpm5, xgo);
      }, 0x3e8) : r8cpm5 && r8cpm5(JSON[c[220010]]({ 'url': y_ekn, 'status': wgxf49[c[220195]], 'response': wgxf49['response'], 'responseType': wgxf49['responseType'] }));
    }
  }, wgxf49['open'](uvl_n || c[220383], y_ekn), wgxf49['responseType'] = c[220160], wgxf49[c[220384]]('content-type', zhg4o || 'application/json'), wgxf49[c[220364]](gof4x);
}, window[c[220385]] = function (zh4obg, un_ke, ogzh4, adl3, rp5ct, uye_k, _eku) {
  ogzh4 = ogzh4 || {};var f192w = Math['floor'](Date['now']() / 0x3e8);ogzh4[c[220345]] = f192w, ogzh4['method'] = un_ke;var o9f4gx = Object[c[220386]](ogzh4)['sort'](),
      go4fx9 = '',
      pr8cz = '';for (var idw216 = 0x0; idw216 < o9f4gx[c[220005]]; idw216++) go4fx9 = go4fx9 + (0x0 == idw216 ? '' : '&') + o9f4gx[idw216] + ogzh4[o9f4gx[idw216]], pr8cz = pr8cz + (0x0 == idw216 ? '' : '&') + o9f4gx[idw216] + '=' + encodeURIComponent(ogzh4[o9f4gx[idw216]]);go4fx9 += _oAE[c[220285]], un_ke = c[220387] + md5(go4fx9), send(zh4obg + '?' + pr8cz + ('' == pr8cz ? '' : '&') + un_ke, null, adl3, rp5ct, uye_k, _eku || function (mpzc8r) {
    return c[220199] == mpzc8r[c[220200]];
  }, null, 'application/x-www-form-urlencoded');
}, window['_oAEU8'] = function (i1xw9, lnav3) {
  var o8hbgz = 0x0;_oAE[c[220008]] && (o8hbgz = _oAE[c[220008]][c[220009]]), sendApi(_oAE['logurl'], 'UserLog.reportUidStep', { 'partnerId': _oAE[c[220287]], 'gamePkg': _oAE[c[220190]], 'logTime': Math['floor'](Date['now']() / 0x3e8), 'platformUid': _oAE['platform_uid'], 'type': i1xw9, 'serverId': o8hbgz }, null, 0x2, null, function () {
    return !0x0;
  });
}, window['_oAE8U'] = function (l3vua) {
  sendApi(_oAE[c[220283]], 'Server.getServerGroup', { 'partner_id': _oAE[c[220287]], 'uid': _oAE['account'], 'version': _oAE['version'], 'game_pkg': _oAE[c[220190]], 'device': _oAE[c[220288]] }, _oU8A, _o8EA, _oEU);
}, window['_oU8A'] = function (eykj0) {
  c[220199] === eykj0[c[220200]] && eykj0[c[220201]] ? (eykj0[c[220201]][c[220388]]({ 'id': -0x2, 'name': c[220389] }), eykj0[c[220201]][c[220388]]({ 'id': -0x1, 'name': c[220390] }), _oAE['groupList'] = eykj0[c[220201]], window[c[220184]] && window[c[220184]]['showGroupList']()) : (_oAE['hasGroupReq'] = !0x1, window['_oU8AE']('reqServerGroupCallBack ' + eykj0[c[220200]]));
}, window['_oUA8'] = function (dav26l) {
  sendApi(_oAE[c[220283]], c[220391], { 'partner_id': _oAE[c[220287]], 'uid': _oAE['account'], 'version': _oAE['version'], 'game_pkg': _oAE[c[220190]], 'device': _oAE[c[220288]] }, _o8UA, _o8EA, _oEU);
}, window['_o8UA'] = function (b4ghz) {
  if (_oAE[c[220218]] = !0x1, c[220199] === b4ghz[c[220200]] && b4ghz[c[220201]]) {
    for (var mzcpr = 0x0; mzcpr < b4ghz[c[220201]][c[220005]]; mzcpr++) b4ghz[c[220201]][mzcpr][c[220195]] = _oEU8A(b4ghz[c[220201]][mzcpr]);_oAE[c[220217]][-0x1] = window[c[220392]](b4ghz[c[220201]]), window[c[220184]]['showServerList'](-0x1);
  } else window['_oU8AE'](c[220393] + b4ghz[c[220200]]);
}, window['req_server_owner_status'] = function (id26a1) {
  sendApi(_oAE[c[220283]], c[220391], { 'partner_id': _oAE[c[220287]], 'uid': _oAE['account'], 'version': _oAE['version'], 'game_pkg': _oAE[c[220190]], 'device': _oAE[c[220288]] }, id26a1, _o8EA, _oEU);
}, window['_o8AU'] = function (goxf, wi62d) {
  sendApi(_oAE[c[220283]], 'Server.getServerByGroup', { 'partner_id': _oAE[c[220287]], 'uid': _oAE['account'], 'version': _oAE['version'], 'game_pkg': _oAE[c[220190]], 'device': _oAE[c[220288]], 'server_group_id': wi62d }, _oAU8, _o8EA, _oEU);
}, window['_oAU8'] = function (fwi29) {
  if (_oAE[c[220218]] = !0x1, c[220199] === fwi29[c[220200]] && fwi29[c[220201]] && fwi29[c[220201]][c[220201]]) {
    var trsqm5 = fwi29[c[220201]]['server_group_id'],
        uey0_k = [];for (var b9o4gx = 0x0; b9o4gx < fwi29[c[220201]][c[220201]][c[220005]]; b9o4gx++) fwi29[c[220201]][c[220201]][b9o4gx][c[220195]] = _oEU8A(fwi29[c[220201]][c[220201]][b9o4gx]), 0x0 != uey0_k[c[220005]] && 0x0 == fwi29[c[220201]][c[220201]][b9o4gx][c[220195]] || (uey0_k[uey0_k[c[220005]]] = fwi29[c[220201]][c[220201]][b9o4gx]);_oAE[c[220217]][trsqm5] = window[c[220392]](uey0_k), window[c[220184]]['showServerList'](trsqm5);
  } else window['_oU8AE'](c[220394] + fwi29[c[220200]]);
}, window['_oQA8E'] = function (fo9x4g) {
  sendApi(_oAE[c[220283]], 'Server.getRecommendServerList', { 'partner_id': _oAE[c[220287]], 'uid': _oAE['account'], 'version': _oAE['version'], 'game_pkg': _oAE[c[220190]], 'device': _oAE[c[220288]] }, reqServerRecommendCallBack, _o8EA, _oEU);
}, window['reqServerRecommendCallBack'] = function (mrqtp) {
  if (_oAE[c[220218]] = !0x1, c[220199] === mrqtp[c[220200]] && mrqtp[c[220201]]) {
    for (var f91xw4 = 0x0; f91xw4 < mrqtp[c[220201]][c[220005]]; f91xw4++) mrqtp[c[220201]][f91xw4][c[220195]] = _oEU8A(mrqtp[c[220201]][f91xw4]);_oAE[c[220217]][-0x2] = window[c[220392]](mrqtp[c[220201]]), window[c[220184]]['showServerList'](-0x2);
  } else alert('reqServerRecommendCallBack ' + mrqtp[c[220200]]);
}, window[c[220392]] = function (nk_uye) {
  if (!nk_uye && nk_uye[c[220005]] <= 0x0) return nk_uye;for (let ogb = 0x0; ogb < nk_uye[c[220005]]; ogb++) nk_uye[ogb]['is_recommend'] && 0x1 == nk_uye[ogb]['is_recommend'] && (nk_uye[ogb][c[220206]] += c[220395]);return nk_uye;
}, window['_oA8U'] = function (pbh8z, $eyjk) {
  pbh8z = pbh8z || _oAE[c[220008]][c[220009]], sendApi(_oAE[c[220283]], 'Common.get_anno', { 'type': '4', 'game_pkg': _oAE[c[220190]], 'server_id': pbh8z }, $eyjk);
}, window['req_multi_server_notice'] = function (tqm7s5, c8ozhb, u_3e, tm5) {
  u_3e = u_3e || _oAE[c[220008]][c[220009]], sendApi(_oAE[c[220283]], 'Common.get_new_anno', { 'type': tqm7s5, 'game_pkg': c8ozhb, 'server_id': u_3e }, tm5);
}, window['_oEU8A'] = function (rtc5) {
  return rtc5 ? 0x1 == rtc5[c[220195]] ? 0x1 == rtc5['online_status'] ? 0x2 : 0x1 : 0x0 == rtc5[c[220195]] ? 0x0 : -0x1 : -0x1;
}, window['_oEUA8'] = function (uv_y3n, m5tqr) {
  _oAE[c[220396]] = { 'step': uv_y3n, 'server_id': m5tqr }, (_oUA8E({ 'title': c[220397] }), sendApi(_oAE[c[220283]], 'User.checkInfo', { 'partner_id': _oAE[c[220287]], 'uid': _oAE['account'], 'game_pkg': _oAE[c[220190]], 'server_id': m5tqr, 'platform': _oAE['platform'], 'platform_uid': _oAE['platform_uid'], 'check_login_time': _oAE[c[220344]], 'check_login_sign': _oAE[c[220342]], 'version_name': _oAE['version_name'] }, _oE8UA, _o8EA, _oEU, function (lna) {
    return c[220199] == lna[c[220200]] || c[220398] == lna['info'] || c[220399] == lna['info'];
  }));
}, window['_oE8UA'] = function (x9bg) {
  var phzbc8;c[220199] === x9bg[c[220200]] && x9bg[c[220201]] ? ((phzbc8 = _oAE[c[220008]])[c[220400]] = _oAE[c[220289]], phzbc8[c[220343]] = String(x9bg[c[220201]]['login_sign']), phzbc8[c[220293]] = parseInt(x9bg[c[220201]][c[220345]]), x9bg[c[220201]][c[220401]] ? phzbc8[c[220401]] = parseInt(x9bg[c[220201]][c[220401]]) : phzbc8[c[220401]] = parseInt(x9bg[c[220201]][c[220009]]), phzbc8['is_domain'] = 0x0, phzbc8[c[220007]] = _oAE[c[220357]], phzbc8[c[220402]] = x9bg[c[220201]]['cdn_version'], phzbc8['server_options'] = x9bg[c[220201]]['server_options'], console['log']('server_options\uFF1A' + JSON[c[220010]](phzbc8['server_options'])), 0x1 == _oAE[c[220248]] && phzbc8['server_options'] && 0x1 == phzbc8['server_options']['show_btn'] && (_oAE['showGetBtn'] = 0x1, window['ServerLoading'][c[220016]]['_oQE']()), _oE8AU()) : sendApi(_oAE[c[220283]], 'User.login', { 'platform': _oAE[c[220281]], 'partner_id': _oAE[c[220287]], 'token': _oAE['sdk_token'], 'game_pkg': _oAE[c[220190]], 'deviceId': _oAE[c[220288]], 'scene': c[220335] + _oAE['from_scene'] }, function (wf19i) {
    c[220403] != wf19i[c[220200]] ? (_oAE[c[220342]] = String(wf19i[c[220343]]), _oAE[c[220344]] = String(wf19i[c[220345]]), setTimeout(function () {
      _oEUA8(_oAE[c[220396]][c[220404]], _oAE[c[220396]][c[220009]]);
    }, 0x5dc)) : window['_oU8AE']('User.login failed: ' + wf19i[c[220200]]);
  }, _o8EA, _oEU, function (a1di2) {
    return c[220199] == a1di2[c[220200]] || c[220403] == a1di2[c[220200]];
  });
}, window['_oE8AU'] = function () {
  ServerLoading[c[220016]]['openLoading'](_oAE[c[220248]]), window['_o8E'] = !0x0, window['_oEA8U']();
}, window['_oEAU8'] = function () {
  var ynu_;window['_oE8'] && window['_oA8E'] && window['loadServerRes'] && window['loadLoadingRes'] && window['_oAE8'] && window['_oA8'] && (window[c[220405]][c[220016]] || (console['log'](c[220406] + window[c[220405]][c[220016]]), ynu_ = wx['getLaunchOptionsSync']()[c[220076]] || 0x0, ynu_ = { 'cdn': window['_oAE'][c[220007]], 'spareCdn': window['_oAE'][c[220328]], 'newRegister': window['_oAE'][c[220248]], 'wxPC': window['_oAE'][c[220063]], 'wxIOS': window['_oAE'][c[220061]], 'wxAndroid': window['_oAE']['wxAndroid'], 'wxParam': { 'limitLoad': window['_oAE']['_oQUA8E'], 'benchmarkLevel': window['_oAE']['_oQUAE8'], 'wxFrom': c[220407] == window['config']['from'] ? 0x1 : 0x0, 'wxSDKVersion': window['SDKVersion'] }, 'configType': window['_oAE']['configType'], 'exposeType': window['_oAE']['exposeType'], 'scene': ynu_ }, new window[c[220405]](ynu_, window['_oAE']['lastVersion'], window['_oQU8EA'])));
}, window['_oEA8U'] = function () {
  if (window['_oE8'] && window['_oA8E'] && window['loadServerRes'] && window['loadLoadingRes'] && window['_oAE8'] && window['_oA8'] && window['_o8E'] && window['_o8A']) {
    if (_oUAE8(), !_oE8A) {
      _oE8A = !0x0, window[c[220405]][c[220016]] || window['_oEAU8']();var d3la6 = 0x0,
          d1w2f = wx['getMenuButtonBoundingClientRect']();d1w2f && (window['_oAE']['wxPhone'] && (d3la6 = d1w2f['top']), console['info']('MenuButton  top:' + d1w2f['top'] + ',bottom:' + d1w2f['bottom'] + c[220408] + d1w2f[c[220059]] + c[220409] + d1w2f[c[220060]] + c[220410] + d1w2f[c[220150]] + c[220411] + d1w2f[c[220151]]));var fg4o9 = {};for (const vd2la6 in _oAE[c[220008]]) fg4o9[vd2la6] = _oAE[c[220008]][vd2la6];var zrp8m = { 'channel': window['_oAE'][c[220290]], 'account': window['_oAE']['account'], 'userId': window['_oAE'][c[220341]], 'cdn': window['_oAE'][c[220007]], 'data': window['_oAE'][c[220201]], 'package': window['_oAE'][c[220280]], 'newRegister': window['_oAE'][c[220248]], 'pkgName': window['_oAE'][c[220190]], 'partnerId': window['_oAE'][c[220287]], 'platform_uid': window['_oAE']['platform_uid'], 'deviceId': window['_oAE'][c[220288]], 'selectedServer': fg4o9, 'configType': window['_oAE']['configType'], 'exposeType': window['_oAE']['exposeType'], 'debugUsers': window['_oAE'][c[220291]], 'wxMenuTop': d3la6, 'wxShield': window['_oAE'][c[220295]] };if (window['pkgOptions']) {
        for (var xwg in window['pkgOptions']) zrp8m[xwg] = window['pkgOptions'][xwg];
      }window[c[220405]][c[220016]]['_o8QEA'](zrp8m), setTimeout(() => {
        wx_develop || new minitool();
      }, 0x2710);
    }
  } else console['info']('\u3010登录\u3011loadProbPkg:' + window['_oE8'] + ',loadMainPkg:' + window['_oA8E'] + ',loadServerRes:' + window['loadServerRes'] + ',loadLoadingRes:' + window['loadLoadingRes'] + ',loadVersion:' + window['_oAE8'] + ',loadServer:' + window['_oA8'] + c[220412] + window['_o8E'] + ',loadOption:' + window['_o8A']);
};