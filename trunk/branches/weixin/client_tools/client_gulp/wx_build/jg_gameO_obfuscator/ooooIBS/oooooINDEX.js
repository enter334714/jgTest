var c = wx.$o;
import o_ob8hzg from '../ooosk/oooosdk.js';window['versions'] = { 'wxVersion': window['config'][c[220002]] }, window[c[220277]] = !0x1, window['_oEA'] = 0x1, window[c[220278]] = 0x1, window['_o8AE'] = !0x0, window[c[220279]] = !0x0, window['_oQU8EA'] = '', window['_oAE'] = { 'base_cdn': 'https://cdn-tjqy.shzbkj.com/weixin_0/', 'cdn': 'https://cdn-tjqy.shzbkj.com/weixin_0/' }, _oAE['pay_infos'] = {}, _oAE[c[220280]] = '0', _oAE['version'] = window['versions']['wxVersion'], _oAE[c[220064]] = '', _oAE['os'] = '1', _oAE[c[220281]] = c[220282], _oAE[c[220283]] = 'https://api-tjqytest.shzbkj.com', _oAE['logurl'] = 'https://log-tjqytest.shzbkj.com', _oAE[c[220284]] = 'https://pay-tjqytest.shzbkj.com', _oAE[c[220285]] = c[220286], _oAE[c[220287]] = '1', _oAE[c[220190]] = '', _oAE[c[220288]] = '', _oAE['from_scene'] = 0x0, _oAE[c[220217]] = {}, _oAE[c[220289]] = parseInt(_oAE[c[220287]]), _oAE[c[220290]] = _oAE[c[220287]], _oAE[c[220008]] = {}, _oAE['_oUA'] = 'https://jgcenter.sh9130.com/clientlog/', _oAE['showLogo'] = !0x1, _oAE[c[220291]] = c[220292], _oAE[c[220293]] = Date['now'](), _oAE['configType'] = c[220294], _oAE['exposeType'] = '_a', _oAE['loadingType'] = 0x2, _oAE['lastVersion'] = 0x7c1, _oAE['wxVersion'] = window['versions']['wxVersion'], _oAE[c[220295]] = !0x1, _oAE[c[220061]] = !0x1, _oAE['wxAndroid'] = !0x1, _oAE[c[220063]] = !0x1, window['_o8EA'] = 0x5, window['_o8E'] = !0x1, window['_oE8'] = !0x1, window['_oA8E'] = !0x1, window['loadServerRes'] = !0x1, window['loadLoadingRes'] = !0x1, window['_oAE8'] = !0x1, window['_o8A'] = !0x1, window['_oA8'] = !0x1, window['_oE8A'] = !0x1, window[c[220296]] = function (tcrpm5) {
  console['log'](c[220296], tcrpm5), wx['hideLoading']({}), wx['showModal']({ 'title': c[220036], 'content': tcrpm5, 'success'(idl26a) {
      idl26a['confirm'] ? console['log'](c[220297]) : idl26a[c[220298]] && console['log'](c[220299]);
    } });
}, window['_oU8AE'] = function (yunk_) {
  console['log']('loginAlert', yunk_), _oUAE8(), wx['showModal']({ 'title': c[220036], 'content': yunk_, 'confirmText': c[220300], 'cancelText': c[220301], 'success'(ifd1) {
      ifd1['confirm'] ? window['_oAU']() : ifd1[c[220298]] && (console['log'](c[220302]), wx['exitMiniProgram']({}));
    } });
}, window['_oEQA'] = function (cpmr8z) {
  console['log'](c[220303], cpmr8z), wx['showModal']({ 'title': c[220036], 'content': cpmr8z, 'confirmText': c[220304], 'showCancel': !0x1, 'complete'(ob8hg) {
      console['log'](c[220302]), wx['exitMiniProgram']({});
    } });
}, window['_oU8EA'] = !0x1, window['_oUA8E'] = function (adi62) {
  window['_oU8EA'] = !0x0, wx['showLoading'](adi62);
}, window['_oUAE8'] = function () {
  window['_oU8EA'] && (window['_oU8EA'] = !0x1, wx['hideLoading']({}));
}, window['_oUE8A'] = function (k$y0_e) {
  window['ServerLoading'][c[220016]]['_oUE8A'](k$y0_e);
}, window[c[220305]] = function ($ky0j, jye0k$) {
  o_ob8hzg[c[220305]]($ky0j, function (e$yk_0) {
    e$yk_0 && e$yk_0[c[220201]] ? 0x1 == e$yk_0[c[220201]][c[220200]] ? jye0k$(!0x0) : (jye0k$(!0x1), console['info'](c[220306] + e$yk_0[c[220201]][c[220307]])) : console['log'](c[220305], e$yk_0);
  });
}, window['_oUEA8'] = function (mc5rp) {
  console['log'](c[220308], mc5rp);
}, window['_oUAE'] = function (l6avd2) {}, window['_oUEA'] = function (r8cp5m, $e0ky_, f12wi9) {}, window['_oUE'] = function (pcrmz8) {
  console['log']('toEnterGame', pcrmz8), window['ServerLoading'][c[220016]]['closeAuthor'](), window['ServerLoading'][c[220016]]['closeServer'](), window['ServerLoading'][c[220016]]['closeLoading']();
}, window['_oEU'] = function (ykej0) {
  window['_oU8AE']('on api error'), ykej0 = { 'id': window['_oAE']['roleId'], 'role': window['_oAE']['roleName'], 'level': window['_oAE']['roleLevel'], 'account': window['_oAE']['account'], 'version': window['_oAE']['lastVersion'], 'cdn': window['_oAE'][c[220007]], 'pkgName': window['_oAE'][c[220190]], 'gamever': window['config'][c[220002]], 'serverid': window['_oAE'][c[220008]] ? window['_oAE'][c[220008]][c[220009]] : 0x0, 'systemInfo': window['systemInfo'], 'error': 'onApiError', 'stack': ykej0 || 'on api error' }, ykej0 = JSON[c[220010]](ykej0), (console['error'](c[220309] + ykej0), window['_oUA'](ykej0));
}, window['_oAUE'] = function (m8pzc) {
  m8pzc = JSON[c[220310]](m8pzc), (m8pzc[c[220311]] = window['config'][c[220002]], m8pzc[c[220312]] = window['_oAE'][c[220008]] ? window['_oAE'][c[220008]][c[220009]] : 0x0, m8pzc['systemInfo'] = window['systemInfo']), m8pzc = JSON[c[220010]](m8pzc), (console['error'](c[220313] + m8pzc), window['_oUA'](m8pzc));
}, window['_oAEU'] = function (bzgho8, ku0ey_) {
  ku0ey_ = { 'id': window['_oAE']['roleId'], 'role': window['_oAE']['roleName'], 'level': window['_oAE']['roleLevel'], 'account': window['_oAE']['account'], 'version': window['_oAE']['lastVersion'], 'cdn': window['_oAE'][c[220007]], 'pkgName': window['_oAE'][c[220190]], 'gamever': window['config'][c[220002]], 'serverid': window['_oAE'][c[220008]] ? window['_oAE'][c[220008]][c[220009]] : 0x0, 'systemInfo': window['systemInfo'], 'error': bzgho8, 'stack': ku0ey_ }, ku0ey_ = JSON[c[220010]](ku0ey_), (console[c[220265]](c[220314] + ku0ey_), window['_oUA'](ku0ey_));
}, window['_oUA'] = function (e3_nu) {
  var m5qtrs;'devtools' != window['_oAE']['wxPlatform'] && (m5qtrs = _oAE['_oUA'] + '?account=' + _oAE['account'], wx[c[220315]]({ 'url': m5qtrs, 'method': c[220316], 'data': e3_nu, 'header': { 'content-type': 'application/json', 'cache-control': 'no-cache' }, 'success': function (b4zog) {}, 'fail': function (rpz8) {}, 'complete': function () {} }));
}, window[c[220317]] = function () {
  function ptrm5c() {
    return (0x10000 * (0x1 + Math['random']()) | 0x0)['toString'](0x10)[c[220318]](0x1);
  }return ptrm5c() + ptrm5c() + '-' + ptrm5c() + '-' + ptrm5c() + '-' + ptrm5c() + '+' + ptrm5c() + ptrm5c() + ptrm5c();
};var wx_develop = !(window['_oAU'] = function () {
  console['log'](c[220319]);var m5pc8 = o_ob8hzg['getConfig']();_oAE[c[220290]] = m5pc8[c[220320]], _oAE[c[220289]] = m5pc8[c[220320]], _oAE[c[220287]] = m5pc8[c[220320]], _oAE[c[220190]] = m5pc8[c[220321]], m5pc8 = { 'game_ver': _oAE['version'] }, (_oAE[c[220288]] = this[c[220317]](), _oUA8E({ 'title': c[220322] }), o_ob8hzg[c[220225]](m5pc8, this['_oEUA'][c[220162]](this)));
});window['_oEUA'] = function (auv) {
  var xf9 = auv['develop'];wx_develop = 0x1 == xf9, console['log'](c[220323] + xf9 + c[220324] + (0x1 == xf9) + c[220325] + auv[c[220002]] + c[220326] + window['versions']['wxVersion']), !auv[c[220002]] || window['_oQ8EAU'](window['versions']['wxVersion'], auv[c[220002]]) < 0x0 ? (console['log'](c[220327]), _oAE[c[220283]] = 'https://api-tjqy.shzbkj.com', _oAE['logurl'] = 'https://log-tjqy.shzbkj.com', _oAE[c[220284]] = 'https://pay-tjqy.shzbkj.com', _oAE[c[220007]] = 'https://cdn-tjqy-fx.shzbkj.com/weixin_1/', _oAE[c[220328]] = 'https://cdn-tjqy-ali.shzbkj.com/weixin_1/', _oAE['version_name'] = c[220329], _oAE[c[220295]] = !0x1) : 0x0 == window['_oQ8EAU'](window['versions']['wxVersion'], auv[c[220002]]) ? (console['log'](c[220330]), _oAE[c[220283]] = 'https://api-tjqytest.shzbkj.com', _oAE['logurl'] = 'https://log-tjqytest.shzbkj.com', _oAE[c[220284]] = 'https://pay-tjqytest.shzbkj.com', _oAE[c[220007]] = 'https://cdn-tjqy-fx.shzbkj.com/weixin_0/', _oAE[c[220328]] = 'https://cdn-tjqy-ali.shzbkj.com/weixin_1/', _oAE['version_name'] = c[220331], _oAE[c[220295]] = !0x0) : (console['log'](c[220332]), _oAE[c[220283]] = 'https://api-tjqytest.shzbkj.com', _oAE['logurl'] = 'https://log-tjqytest.shzbkj.com', _oAE[c[220284]] = 'https://pay-tjqytest.shzbkj.com', _oAE[c[220007]] = 'https://cdn-tjqy-fx.shzbkj.com/weixin_0/', _oAE[c[220328]] = 'https://cdn-tjqy-ali.shzbkj.com/weixin_1/', _oAE['version_name'] = c[220331], _oAE[c[220295]] = !0x1), _oAE['from_scene'] = config['from'] || 0x0, this['_o8AUE'](), this['_o8AEU'](), window['sdkLoginRetry'] = 0x5, _oUA8E({ 'title': c[220333] }), o_ob8hzg['login'](this['_oEAU'][c[220162]](this));
}, window['sdkLoginRetry'] = 0x5, window['_oEAU'] = function (iw12df, qm5r) {
  0x0 == iw12df && qm5r && qm5r['token'] ? (_oAE['sdk_token'] = qm5r['token'], _oUA8E({ 'title': c[220334] }), sendApi(_oAE[c[220283]], 'User.login', { 'platform': _oAE[c[220281]], 'partner_id': _oAE[c[220287]], 'token': qm5r['token'], 'game_pkg': _oAE[c[220190]], 'deviceId': _oAE[c[220288]], 'scene': c[220335] + _oAE['from_scene'] }, this['_o8UAE'][c[220162]](this), _o8EA, _oEU)) : qm5r && qm5r[c[220028]] && 0x0 < window['sdkLoginRetry'] && (-0x1 != qm5r[c[220028]][c[220062]](c[220336]) || -0x1 != qm5r[c[220028]][c[220062]]('network api interrupted') || -0x1 != qm5r[c[220028]][c[220062]]('Network Error') || -0x1 != qm5r[c[220028]][c[220062]](c[220337]) || -0x1 != qm5r[c[220028]][c[220062]](c[220338]) || -0x1 != qm5r[c[220028]][c[220062]](c[220339])) ? (window['sdkLoginRetry']--, o_ob8hzg['login'](this['_oEAU'][c[220162]](this))) : (window['_oAEU']('sdkOnLoginError', JSON[c[220010]]({ 'status': iw12df, 'data': qm5r })), window['_oU8AE'](c[220340] + (qm5r && qm5r[c[220028]] ? '，' + qm5r[c[220028]] : '')));
}, window['_o8UAE'] = function (qtrm) {
  qtrm ? c[220199] == qtrm[c[220200]] ? (_oAE[c[220341]] = String(qtrm['account']), _oAE['account'] = String(qtrm['account']), _oAE['platform'] = String(qtrm['platform']), _oAE[c[220290]] = String(qtrm['platform']), _oAE['platform_uid'] = String(qtrm['platform_uid']), _oAE[c[220342]] = String(qtrm[c[220343]]), _oAE[c[220344]] = String(qtrm[c[220345]]), _oAE[c[220343]] = '', _oUA8E({ 'title': c[220346] }), sendApi(_oAE[c[220283]], c[220347], { 'partner_id': _oAE[c[220287]], 'uid': _oAE['account'], 'version': _oAE['version'], 'game_pkg': _oAE[c[220190]], 'device': _oAE[c[220288]] }, this['_o8UEA'][c[220162]](this), _o8EA, _oEU)) : window['_oU8AE']('User.login failed: ' + qtrm[c[220200]]) : window['_oU8AE']('User.login failed');
}, window['_o8UEA'] = function (g9x4o) {
  g9x4o ? c[220199] == g9x4o[c[220200]] ? g9x4o[c[220201]] && 0x0 != g9x4o[c[220201]][c[220005]] ? (_oAE[c[220248]] = g9x4o[c[220348]], _oAE[c[220008]] = { 'server_id': String(g9x4o[c[220201]][0x0][c[220009]]), 'server_name': String(g9x4o[c[220201]][0x0][c[220206]]), 'entry_ip': g9x4o[c[220201]][0x0][c[220349]], 'entry_port': parseInt(g9x4o[c[220201]][0x0]['entry_port']), 'status': _oEU8A(g9x4o[c[220201]][0x0]), 'start_time': g9x4o[c[220201]][0x0][c[220350]], 'cdn': _oAE[c[220007]] }, this['_oQU8AE']()) : window['_oU8AE'](c[220351]) : window['_oU8AE'](c[220352] + g9x4o[c[220200]]) : window['_oU8AE'](c[220353]);
}, window['_oQU8AE'] = function () {
  if (0x1 == _oAE[c[220248]]) {
    var xogb9 = _oAE[c[220008]][c[220195]];if (-0x1 === xogb9 || 0x0 === xogb9) return void window['_oU8AE'](-0x1 === xogb9 ? c[220354] : c[220355]);_oEUA8(0x0, _oAE[c[220008]][c[220009]]), window['ServerLoading'][c[220016]]['openLoading'](_oAE[c[220248]]);
  } else window['ServerLoading'][c[220016]]['openServer'](), _oUAE8();window['_oA8'] = !0x0, window['_oEAU8'](), window['_oEA8U']();
}, window['_o8AUE'] = function () {
  sendApi(_oAE[c[220283]], 'User.getCdnVersion', { 'game_pkg': _oAE[c[220190]], 'version_name': _oAE['version_name'] }, function (i19x) {
    i19x ? c[220199] == i19x[c[220200]] ? i19x[c[220201]] && i19x[c[220201]]['version'] ? (i19x[c[220201]][c[220356]] && 0xa < i19x[c[220201]][c[220356]][c[220005]] && (_oAE[c[220357]] = i19x[c[220201]][c[220356]], _oAE[c[220007]] = i19x[c[220201]][c[220356]]), i19x[c[220201]]['version'] && (_oAE['lastVersion'] = i19x[c[220201]]['version']), console['info']('lastVersion:' + _oAE['lastVersion'] + ', version_name:' + _oAE['version_name']), window['_oAE8'] = !0x0, window['_oEAU8'](), window['_oEA8U']()) : window['_oU8AE']('User.getCdnVersion failed: version=' + (i19x[c[220201]] && i19x[c[220201]]['version'])) : window['_oU8AE']('User.getCdnVersion failed: state=' + i19x[c[220200]]) : window['_oU8AE']('User.getCdnVersion failed');
  });
}, window['pkgOptions'], window['_o8AEU'] = function () {
  sendApi(_oAE[c[220283]], 'Common.get_option_pkg', { 'game_pkg': _oAE[c[220190]] }, _o8EUA);
}, window['_o8EUA'] = function (di26w) {
  if (c[220199] === di26w[c[220200]] && di26w[c[220201]]) {
    for (var rp8hzc in window['pkgOptions'] = di26w[c[220201]], di26w[c[220201]]) _oAE[rp8hzc] = di26w[c[220201]][rp8hzc];
  } else console['info']('reqPkgOptionsCallBack ' + di26w[c[220200]]);window['_o8A'] = !0x0, window['_oEA8U']();
}, window['toPay'] = function (ox4b9g, coz8, w941fx, rpc58, ukn_ey, q5s7t, lv36d, if92w1, uanlv) {
  ukn_ey = String(ukn_ey), (_oAE['pay_infos'][ukn_ey] = { 'productid': ukn_ey, 'productname': lv36d, 'productdesc': if92w1, 'roleid': ox4b9g, 'rolename': coz8, 'rolelevel': w941fx, 'price': q5s7t, 'callback': uanlv }, sendApi(_oAE[c[220284]], 'Order.order', { 'game_pkg': _oAE[c[220190]], 'server_id': _oAE[c[220008]][c[220009]], 'server_name': _oAE[c[220008]][c[220206]], 'level': w941fx, 'uid': _oAE['account'], 'role_id': ox4b9g, 'role_name': coz8, 'product_id': ukn_ey, 'product_name': lv36d, 'product_desc': if92w1, 'money': q5s7t, 'partner_id': _oAE[c[220287]] }, toPayCallBack, _o8EA, _oEU));
}, window['toPayCallBack'] = function (w92f1) {
  var i62dal;w92f1 && (0xc8 === w92f1['errCode'] || c[220199] == w92f1[c[220200]] ? ((i62dal = _oAE['pay_infos'][String(w92f1['product_id'])])[c[220358]] && i62dal[c[220358]](w92f1['product_id'], w92f1['cp_order_id'], -0x1), o_ob8hzg[c[220359]]({ 'cpbill': w92f1['cp_order_id'], 'productid': w92f1['product_id'], 'productname': i62dal['productname'], 'productdesc': i62dal['productdesc'], 'serverid': _oAE[c[220008]][c[220009]], 'servername': _oAE[c[220008]][c[220206]], 'roleid': i62dal['roleid'], 'rolename': i62dal['rolename'], 'rolelevel': i62dal['rolelevel'], 'price': i62dal[c[220360]], 'extension': JSON[c[220010]]({ 'cp_order_id': w92f1['cp_order_id'] }) }, function (cbz8, p5qt) {
    i62dal[c[220358]] && 0x0 == cbz8 && i62dal[c[220358]](w92f1['product_id'], w92f1['cp_order_id'], cbz8), console['info'](JSON[c[220010]]({ 'type': c[220361], 'status': cbz8, 'data': w92f1, 'role_name': i62dal['rolename'] }));
  })) : alert(w92f1['info']));
}, window['_o8EAU'] = function () {}, window['_oU8E'] = function (q7smt, y0k$e_, x9gfw4, g4x9w, mczpr8) {
  o_ob8hzg['logCreateRole'](_oAE[c[220008]][c[220009]], _oAE[c[220008]][c[220206]] || _oAE[c[220008]][c[220009]], q7smt, y0k$e_, x9gfw4), sendApi(_oAE[c[220283]], 'User.create_role', { 'game_pkg': _oAE[c[220190]], 'server_id': _oAE[c[220008]][c[220009]], 'role_id': q7smt, 'uid': _oAE['account'], 'role_name': y0k$e_, 'role_type': g4x9w, 'level': x9gfw4 });
}, window['_oUE8'] = function (eyk$_, fx94g, lnu_v3, rc8mzp, mtq75, xgf4, i91wfx, q5ts, zrm8, s5tq) {
  _oAE['roleId'] = eyk$_, _oAE['roleName'] = fx94g, _oAE['roleLevel'] = lnu_v3, o_ob8hzg['logEnterGame'](_oAE[c[220008]][c[220009]], _oAE[c[220008]][c[220206]] || _oAE[c[220008]][c[220009]], eyk$_, fx94g, lnu_v3), sendApi(_oAE[c[220283]], 'User.update_role', { 'game_pkg': _oAE[c[220190]], 'server_id': _oAE[c[220008]][c[220009]], 'role_id': eyk$_, 'uid': _oAE['account'], 'role_name': fx94g, 'role_type': rc8mzp, 'level': lnu_v3, 'evolution': mtq75 });
}, window['_o8UE'] = function (hzob8, anl63v, l2adi, dav26, nyu_3e, mt5cpr, di16w, mpz8rc, t5rqmp, bhgo4) {
  _oAE['roleId'] = hzob8, _oAE['roleName'] = anl63v, _oAE['roleLevel'] = l2adi, o_ob8hzg['logRoleUpLevel'](_oAE[c[220008]][c[220009]], _oAE[c[220008]][c[220206]] || _oAE[c[220008]][c[220009]], hzob8, anl63v, l2adi), sendApi(_oAE[c[220283]], 'User.update_role', { 'game_pkg': _oAE[c[220190]], 'server_id': _oAE[c[220008]][c[220009]], 'role_id': hzob8, 'uid': _oAE['account'], 'role_name': anl63v, 'role_type': dav26, 'level': l2adi, 'evolution': nyu_3e });
}, window['_o8EU'] = function (fx9w4g) {}, window['_oU8'] = function (qmtsr5) {
  o_ob8hzg[c[220362]](c[220362], function (hc8r) {
    qmtsr5 && qmtsr5(hc8r);
  });
}, window['openService'] = function () {
  o_ob8hzg['openService']();
}, window['microPortGuide'] = function () {
  o_ob8hzg[c[220363]]();
}, window['_o8U'] = function (tms75) {
  window['_oE8U'] = tms75, window['_oE8U'] && window['_oEU8'] && (console['info'](c[220075] + window['_oEU8'][c[220076]]), window['_oE8U'](window['_oEU8']), window['_oEU8'] = null);
}, window['_oAU8E'] = function (rtq5ms, f4o9g, v_n3, w2fi19) {
  window[c[220364]]('https://sdk.sh9130.com/game/?ct=min&ac=getInviter', { 'game_pkg': window['_oAE'][c[220190]], 'role_id': f4o9g, 'server_id': v_n3 }, w2fi19);
}, window['_oAUE8'] = function (w4fx1, da2i6) {
  wx['onTouchEnd'](function ox4ghb(ny3ue_) {
    var a2dlv6 = [],
        cbz8hp = [],
        _n3ue = window['config'][c[220365]];for (var d61iw2 in _n3ue) {
      var zhbp8c = Number(d61iw2);w4fx1 && w4fx1[c[220005]] && -0x1 == w4fx1[c[220062]](zhbp8c) || (cbz8hp[c[220019]](_n3ue[d61iw2]), a2dlv6[c[220019]]([zhbp8c, 0x3]));
    }0x0 <= window['_oQ8EAU'](window['SDKVersion'], c[220366]) ? (console['log'](c[220367]), o_ob8hzg[c[220368]] && o_ob8hzg[c[220368]](cbz8hp, function (dlv2) {
      if (console['log'](c[220369]), console['log'](dlv2), dlv2 && 'requestSubscribeMessage:ok' == dlv2[c[220028]]) {
        for (var cbzoh in _n3ue) if (c[220370] == dlv2[_n3ue[cbzoh]]) {
          var xfgw = Number(cbzoh);for (var i2wf1d = 0x0; i2wf1d < a2dlv6[c[220005]]; i2wf1d++) if (a2dlv6[i2wf1d][0x0] == xfgw) {
            a2dlv6[i2wf1d][0x1] = 0x1;break;
          }
        }
      }0x0 <= window['_oQ8EAU'](window['SDKVersion'], c[220371]) ? wx[c[220372]]({ 'withSubscriptions': !0x0, 'success': function (og9x) {
          var v3yn_u = og9x['subscriptionsSetting'][c[220373]];if (v3yn_u) {
            for (var pmqt in console['log'](c[220374]), console['log'](v3yn_u), _n3ue) if (c[220370] == v3yn_u[_n3ue[pmqt]]) {
              var v2d6al = Number(pmqt);for (var e$0jky = 0x0; e$0jky < a2dlv6[c[220005]]; e$0jky++) if (a2dlv6[e$0jky][0x0] == v2d6al) {
                a2dlv6[e$0jky][0x1] = 0x2;break;
              }
            }console['log'](a2dlv6), da2i6 && da2i6(a2dlv6);
          } else console['log'](c[220375]), console['log'](og9x), console['log'](a2dlv6), da2i6 && da2i6(a2dlv6);
        }, 'fail': function () {
          console['log'](c[220376]), console['log'](a2dlv6), da2i6 && da2i6(a2dlv6);
        } }) : (console['log'](c[220377] + window['SDKVersion']), console['log'](a2dlv6), da2i6 && da2i6(a2dlv6));
    })) : (console['log'](c[220378] + window['SDKVersion']), console['log'](a2dlv6), da2i6 && da2i6(a2dlv6)), wx['offTouchEnd'](ox4ghb);
  });
}, window['_oA8UE'] = { 'isSuccess': !0x1, 'level': c[220379], 'isCharging': !0x1 }, window['_oA8EU'] = function (a612d) {
  wx['getBatteryInfo']({ 'success': function (ne3_yu) {
      var f9x4og = window['_oA8UE'];f9x4og[c[220380]] = !0x0, f9x4og[c[220069]] = Number(ne3_yu[c[220069]])['toFixed'](0x0), f9x4og[c[220071]] = ne3_yu[c[220071]], a612d && a612d(f9x4og[c[220380]], f9x4og[c[220069]], f9x4og[c[220071]]);
    }, 'fail': function (e$_0) {
      console['log'](c[220381], e$_0[c[220028]]), e$_0 = window['_oA8UE'], a612d && a612d(e$_0[c[220380]], e$_0[c[220069]], e$_0[c[220071]]);
    } });
}, window[c[220364]] = function (zb8hp, oghz4b, uy0_, f2iw19, nav63, v3n, xbgoh, u3e_yn) {
  null == f2iw19 && (f2iw19 = 0x1);var enuy_ = new XMLHttpRequest();enuy_['onreadystatechange'] = function () {
    if (0x4 == enuy_[c[220382]]) {
      if (0xc8 == enuy_[c[220195]] || 0x12d == enuy_[c[220195]]) {
        var w2f9i1;enuy_['response'];if (w2f9i1 = JSON[c[220310]](enuy_['response']), !v3n || v3n(w2f9i1, enuy_, zb8hp)) return void (uy0_ && uy0_(w2f9i1));console['info'](zb8hp), console['error'](w2f9i1);
      }0x0 < f2iw19 - 0x1 ? setTimeout(function () {
        send(zb8hp, oghz4b, uy0_, f2iw19 - 0x1, nav63, v3n);
      }, 0x3e8) : nav63 && nav63(JSON[c[220010]]({ 'url': zb8hp, 'status': enuy_[c[220195]], 'response': enuy_['response'], 'responseType': enuy_['responseType'] }));
    }
  }, enuy_['open'](xbgoh || c[220383], zb8hp), enuy_['responseType'] = c[220160], enuy_[c[220384]]('content-type', u3e_yn || 'application/json'), enuy_[c[220364]](oghz4b);
}, window[c[220385]] = function (rc8, rm5c8, kenuy, zpmc8, eu3n_y, bgoh4, va63dl) {
  kenuy = kenuy || {};var zb8och = Math['floor'](Date['now']() / 0x3e8);kenuy[c[220345]] = zb8och, kenuy['method'] = rm5c8;var st7qm5 = Object[c[220386]](kenuy)['sort'](),
      lavu3n = '',
      mp5rc8 = '';for (var zrcp = 0x0; zrcp < st7qm5[c[220005]]; zrcp++) lavu3n = lavu3n + (0x0 == zrcp ? '' : '&') + st7qm5[zrcp] + kenuy[st7qm5[zrcp]], mp5rc8 = mp5rc8 + (0x0 == zrcp ? '' : '&') + st7qm5[zrcp] + '=' + encodeURIComponent(kenuy[st7qm5[zrcp]]);lavu3n += _oAE[c[220285]], rm5c8 = c[220387] + md5(lavu3n), send(rc8 + '?' + mp5rc8 + ('' == mp5rc8 ? '' : '&') + rm5c8, null, zpmc8, eu3n_y, bgoh4, va63dl || function (yeu_n) {
    return c[220199] == yeu_n[c[220200]];
  }, null, 'application/x-www-form-urlencoded');
}, window['_oAEU8'] = function (an3vul, i162w) {
  var p8m5c = 0x0;_oAE[c[220008]] && (p8m5c = _oAE[c[220008]][c[220009]]), sendApi(_oAE['logurl'], 'UserLog.reportUidStep', { 'partnerId': _oAE[c[220287]], 'gamePkg': _oAE[c[220190]], 'logTime': Math['floor'](Date['now']() / 0x3e8), 'platformUid': _oAE['platform_uid'], 'type': an3vul, 'serverId': p8m5c }, null, 0x2, null, function () {
    return !0x0;
  });
}, window['_oAE8U'] = function (qtrs5m) {
  sendApi(_oAE[c[220283]], 'Server.getServerGroup', { 'partner_id': _oAE[c[220287]], 'uid': _oAE['account'], 'version': _oAE['version'], 'game_pkg': _oAE[c[220190]], 'device': _oAE[c[220288]] }, _oU8A, _o8EA, _oEU);
}, window['_oU8A'] = function (k_ne) {
  c[220199] === k_ne[c[220200]] && k_ne[c[220201]] ? (k_ne[c[220201]][c[220388]]({ 'id': -0x2, 'name': c[220389] }), k_ne[c[220201]][c[220388]]({ 'id': -0x1, 'name': c[220390] }), _oAE['groupList'] = k_ne[c[220201]], window[c[220184]] && window[c[220184]]['showGroupList']()) : (_oAE['hasGroupReq'] = !0x1, window['_oU8AE']('reqServerGroupCallBack ' + k_ne[c[220200]]));
}, window['_oUA8'] = function (_uv3n) {
  sendApi(_oAE[c[220283]], c[220391], { 'partner_id': _oAE[c[220287]], 'uid': _oAE['account'], 'version': _oAE['version'], 'game_pkg': _oAE[c[220190]], 'device': _oAE[c[220288]] }, _o8UA, _o8EA, _oEU);
}, window['_o8UA'] = function (eyn_k) {
  if (_oAE[c[220218]] = !0x1, c[220199] === eyn_k[c[220200]] && eyn_k[c[220201]]) {
    for (var f1ix = 0x0; f1ix < eyn_k[c[220201]][c[220005]]; f1ix++) eyn_k[c[220201]][f1ix][c[220195]] = _oEU8A(eyn_k[c[220201]][f1ix]);_oAE[c[220217]][-0x1] = window[c[220392]](eyn_k[c[220201]]), window[c[220184]]['showServerList'](-0x1);
  } else window['_oU8AE'](c[220393] + eyn_k[c[220200]]);
}, window['req_server_owner_status'] = function (a6ld3v) {
  sendApi(_oAE[c[220283]], c[220391], { 'partner_id': _oAE[c[220287]], 'uid': _oAE['account'], 'version': _oAE['version'], 'game_pkg': _oAE[c[220190]], 'device': _oAE[c[220288]] }, a6ld3v, _o8EA, _oEU);
}, window['_o8AU'] = function (zbo4, r5tms) {
  sendApi(_oAE[c[220283]], 'Server.getServerByGroup', { 'partner_id': _oAE[c[220287]], 'uid': _oAE['account'], 'version': _oAE['version'], 'game_pkg': _oAE[c[220190]], 'device': _oAE[c[220288]], 'server_group_id': r5tms }, _oAU8, _o8EA, _oEU);
}, window['_oAU8'] = function (fwg9) {
  if (_oAE[c[220218]] = !0x1, c[220199] === fwg9[c[220200]] && fwg9[c[220201]] && fwg9[c[220201]][c[220201]]) {
    var xohbg4 = fwg9[c[220201]]['server_group_id'],
        nky = [];for (var ue_kyn = 0x0; ue_kyn < fwg9[c[220201]][c[220201]][c[220005]]; ue_kyn++) fwg9[c[220201]][c[220201]][ue_kyn][c[220195]] = _oEU8A(fwg9[c[220201]][c[220201]][ue_kyn]), 0x0 != nky[c[220005]] && 0x0 == fwg9[c[220201]][c[220201]][ue_kyn][c[220195]] || (nky[nky[c[220005]]] = fwg9[c[220201]][c[220201]][ue_kyn]);_oAE[c[220217]][xohbg4] = window[c[220392]](nky), window[c[220184]]['showServerList'](xohbg4);
  } else window['_oU8AE'](c[220394] + fwg9[c[220200]]);
}, window['_oQA8E'] = function (xwfi91) {
  sendApi(_oAE[c[220283]], 'Server.getRecommendServerList', { 'partner_id': _oAE[c[220287]], 'uid': _oAE['account'], 'version': _oAE['version'], 'game_pkg': _oAE[c[220190]], 'device': _oAE[c[220288]] }, reqServerRecommendCallBack, _o8EA, _oEU);
}, window['reqServerRecommendCallBack'] = function (d6a) {
  if (_oAE[c[220218]] = !0x1, c[220199] === d6a[c[220200]] && d6a[c[220201]]) {
    for (var euk_ny = 0x0; euk_ny < d6a[c[220201]][c[220005]]; euk_ny++) d6a[c[220201]][euk_ny][c[220195]] = _oEU8A(d6a[c[220201]][euk_ny]);_oAE[c[220217]][-0x2] = window[c[220392]](d6a[c[220201]]), window[c[220184]]['showServerList'](-0x2);
  } else alert('reqServerRecommendCallBack ' + d6a[c[220200]]);
}, window[c[220392]] = function (i61a2d) {
  if (!i61a2d && i61a2d[c[220005]] <= 0x0) return i61a2d;for (let v3yn = 0x0; v3yn < i61a2d[c[220005]]; v3yn++) i61a2d[v3yn]['is_recommend'] && 0x1 == i61a2d[v3yn]['is_recommend'] && (i61a2d[v3yn][c[220206]] += c[220395]);return i61a2d;
}, window['_oA8U'] = function (uvy3n, e_n3y) {
  uvy3n = uvy3n || _oAE[c[220008]][c[220009]], sendApi(_oAE[c[220283]], 'Common.get_anno', { 'type': '4', 'game_pkg': _oAE[c[220190]], 'server_id': uvy3n }, e_n3y);
}, window['req_multi_server_notice'] = function (d2ai16, f94o, nlav3, gbh8o) {
  nlav3 = nlav3 || _oAE[c[220008]][c[220009]], sendApi(_oAE[c[220283]], 'Common.get_new_anno', { 'type': d2ai16, 'game_pkg': f94o, 'server_id': nlav3 }, gbh8o);
}, window['_oEU8A'] = function (hobxg) {
  return hobxg ? 0x1 == hobxg[c[220195]] ? 0x1 == hobxg['online_status'] ? 0x2 : 0x1 : 0x0 == hobxg[c[220195]] ? 0x0 : -0x1 : -0x1;
}, window['_oEUA8'] = function (eyu, $yk0_e) {
  _oAE[c[220396]] = { 'step': eyu, 'server_id': $yk0_e }, (_oUA8E({ 'title': c[220397] }), sendApi(_oAE[c[220283]], 'User.checkInfo', { 'partner_id': _oAE[c[220287]], 'uid': _oAE['account'], 'game_pkg': _oAE[c[220190]], 'server_id': $yk0_e, 'platform': _oAE['platform'], 'platform_uid': _oAE['platform_uid'], 'check_login_time': _oAE[c[220344]], 'check_login_sign': _oAE[c[220342]], 'version_name': _oAE['version_name'] }, _oE8UA, _o8EA, _oEU, function (w1xf9) {
    return c[220199] == w1xf9[c[220200]] || c[220398] == w1xf9['info'] || c[220399] == w1xf9['info'];
  }));
}, window['_oE8UA'] = function (coh) {
  var t5qprm;c[220199] === coh[c[220200]] && coh[c[220201]] ? ((t5qprm = _oAE[c[220008]])[c[220400]] = _oAE[c[220289]], t5qprm[c[220343]] = String(coh[c[220201]]['login_sign']), t5qprm[c[220293]] = parseInt(coh[c[220201]][c[220345]]), coh[c[220201]][c[220401]] ? t5qprm[c[220401]] = parseInt(coh[c[220201]][c[220401]]) : t5qprm[c[220401]] = parseInt(coh[c[220201]][c[220009]]), t5qprm['is_domain'] = 0x0, t5qprm[c[220007]] = _oAE[c[220357]], t5qprm[c[220402]] = coh[c[220201]]['cdn_version'], t5qprm['server_options'] = coh[c[220201]]['server_options'], console['log']('server_options\uFF1A' + JSON[c[220010]](t5qprm['server_options'])), 0x1 == _oAE[c[220248]] && t5qprm['server_options'] && 0x1 == t5qprm['server_options']['show_btn'] && (_oAE['showGetBtn'] = 0x1, window['ServerLoading'][c[220016]]['_oQE']()), _oE8AU()) : sendApi(_oAE[c[220283]], 'User.login', { 'platform': _oAE[c[220281]], 'partner_id': _oAE[c[220287]], 'token': _oAE['sdk_token'], 'game_pkg': _oAE[c[220190]], 'deviceId': _oAE[c[220288]], 'scene': c[220335] + _oAE['from_scene'] }, function (k$e0y_) {
    c[220403] != k$e0y_[c[220200]] ? (_oAE[c[220342]] = String(k$e0y_[c[220343]]), _oAE[c[220344]] = String(k$e0y_[c[220345]]), setTimeout(function () {
      _oEUA8(_oAE[c[220396]][c[220404]], _oAE[c[220396]][c[220009]]);
    }, 0x5dc)) : window['_oU8AE']('User.login failed: ' + k$e0y_[c[220200]]);
  }, _o8EA, _oEU, function (hb4ogz) {
    return c[220199] == hb4ogz[c[220200]] || c[220403] == hb4ogz[c[220200]];
  });
}, window['_oE8AU'] = function () {
  ServerLoading[c[220016]]['openLoading'](_oAE[c[220248]]), window['_o8E'] = !0x0, window['_oEA8U']();
}, window['_oEAU8'] = function () {
  var o8zgh;window['_oE8'] && window['_oA8E'] && window['loadServerRes'] && window['loadLoadingRes'] && window['_oAE8'] && window['_oA8'] && (window[c[220405]][c[220016]] || (console['log'](c[220406] + window[c[220405]][c[220016]]), o8zgh = wx['getLaunchOptionsSync']()[c[220076]] || 0x0, o8zgh = { 'cdn': window['_oAE'][c[220007]], 'spareCdn': window['_oAE'][c[220328]], 'newRegister': window['_oAE'][c[220248]], 'wxPC': window['_oAE'][c[220063]], 'wxIOS': window['_oAE'][c[220061]], 'wxAndroid': window['_oAE']['wxAndroid'], 'wxParam': { 'limitLoad': window['_oAE']['_oQUA8E'], 'benchmarkLevel': window['_oAE']['_oQUAE8'], 'wxFrom': c[220407] == window['config']['from'] ? 0x1 : 0x0, 'wxSDKVersion': window['SDKVersion'] }, 'configType': window['_oAE']['configType'], 'exposeType': window['_oAE']['exposeType'], 'scene': o8zgh }, new window[c[220405]](o8zgh, window['_oAE']['lastVersion'], window['_oQU8EA'])));
}, window['_oEA8U'] = function () {
  if (window['_oE8'] && window['_oA8E'] && window['loadServerRes'] && window['loadLoadingRes'] && window['_oAE8'] && window['_oA8'] && window['_o8E'] && window['_o8A']) {
    if (_oUAE8(), !_oE8A) {
      _oE8A = !0x0, window[c[220405]][c[220016]] || window['_oEAU8']();var hzo8 = 0x0,
          u_eky0 = wx['getMenuButtonBoundingClientRect']();u_eky0 && (window['_oAE']['wxPhone'] && (hzo8 = u_eky0['top']), console['info']('MenuButton  top:' + u_eky0['top'] + ',bottom:' + u_eky0['bottom'] + c[220408] + u_eky0[c[220059]] + c[220409] + u_eky0[c[220060]] + c[220410] + u_eky0[c[220150]] + c[220411] + u_eky0[c[220151]]));var stm75q = {};for (const zco in _oAE[c[220008]]) stm75q[zco] = _oAE[c[220008]][zco];var czpb8 = { 'channel': window['_oAE'][c[220290]], 'account': window['_oAE']['account'], 'userId': window['_oAE'][c[220341]], 'cdn': window['_oAE'][c[220007]], 'data': window['_oAE'][c[220201]], 'package': window['_oAE'][c[220280]], 'newRegister': window['_oAE'][c[220248]], 'pkgName': window['_oAE'][c[220190]], 'partnerId': window['_oAE'][c[220287]], 'platform_uid': window['_oAE']['platform_uid'], 'deviceId': window['_oAE'][c[220288]], 'selectedServer': stm75q, 'configType': window['_oAE']['configType'], 'exposeType': window['_oAE']['exposeType'], 'debugUsers': window['_oAE'][c[220291]], 'wxMenuTop': hzo8, 'wxShield': window['_oAE'][c[220295]] };if (window['pkgOptions']) {
        for (var ad6i12 in window['pkgOptions']) czpb8[ad6i12] = window['pkgOptions'][ad6i12];
      }window[c[220405]][c[220016]]['_o8QEA'](czpb8), setTimeout(() => {
        wx_develop || new minitool();
      }, 0x2710);
    }
  } else console['info']('\u3010登录\u3011loadProbPkg:' + window['_oE8'] + ',loadMainPkg:' + window['_oA8E'] + ',loadServerRes:' + window['loadServerRes'] + ',loadLoadingRes:' + window['loadLoadingRes'] + ',loadVersion:' + window['_oAE8'] + ',loadServer:' + window['_oA8'] + c[220412] + window['_o8E'] + ',loadOption:' + window['_o8A']);
};