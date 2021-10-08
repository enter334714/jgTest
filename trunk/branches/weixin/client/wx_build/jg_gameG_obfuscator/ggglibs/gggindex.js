import gzs7u from '../gggsdk/gggsdk.js';window['versions'] = { 'wxVersion': window['config']['game_ver'] }, window['DEBUG'] = !0x1, window['G$$Y'] = 0x1, window['ENV'] = 0x1, window['G$8Y$'] = !0x0, window['WSS'] = !0x0, window['G$QL8$Y'] = '', window['G$Y$'] = { 'base_cdn': 'https://cdn-gz-jg.sh9130.com/weixin_0/', 'cdn': 'https://cdn-gz-jg.sh9130.com/weixin_0/' }, G$Y$['pay_infos'] = {}, G$Y$['package'] = '0', G$Y$['version'] = window['versions']['wxVersion'], G$Y$['mac'] = '', G$Y$['os'] = '1', G$Y$['sdk_name'] = '9130', G$Y$['apiurl'] = 'https://api-tjqytest.shzbkj.com', G$Y$['logurl'] = 'https://log-tjqytest.shzbkj.com', G$Y$['payurl'] = 'https://pay-tjqytest.shzbkj.com', G$Y$['apikey'] = 'MQx0mYlUWO5XYKvgAIPKWgK1w722GKih', G$Y$['partnerId'] = '1', G$Y$['pkgName'] = '', G$Y$['device_id'] = '', G$Y$['from_scene'] = 0x0, G$Y$['serverList'] = {}, G$Y$['channelNum'] = parseInt(G$Y$['partnerId']), G$Y$['channel'] = G$Y$['partnerId'], G$Y$['selectedServer'] = {}, G$Y$['G$LY'] = 'https://jgcenter.sh9130.com/clientlog/', G$Y$['showLogo'] = !0x1, G$Y$['debugUsers'] = '39927500|58163716|74597555', G$Y$['tick'] = Date['now'](), G$Y$['configType'] = '_weixin', G$Y$['exposeType'] = '_a', G$Y$['loadingType'] = 0x2, G$Y$['lastVersion'] = 0x7c1, G$Y$['wxVersion'] = window['versions']['wxVersion'], G$Y$['wxShield'] = !0x1, G$Y$['wxIOS'] = !0x1, G$Y$['wxAndroid'] = !0x1, G$Y$['wxPC'] = !0x1, window['G$8$Y'] = 0x5, window['G$8$'] = !0x1, window['G$$8'] = !0x1, window['G$Y8$'] = !0x1, window['loadServerRes'] = !0x1, window['loadLoadingRes'] = !0x1, window['G$Y$8'] = !0x1, window['G$8Y'] = !0x1, window['G$Y8'] = !0x1, window['G$$8Y'] = !0x1, window['sdk_info'] = {}, window['alert'] = function (j6g1$i) {
  console['log']('alert', j6g1$i), wx['hideLoading']({}), wx['showModal']({ 'title': '提示', 'content': j6g1$i, 'success'(b3u7xz) {
      b3u7xz['confirm'] ? console['log']('用户点击确定') : b3u7xz['cancel'] && console['log']('用户点击取消');
    } });
}, window['G$L8Y$'] = function (qbovpt) {
  console['log']('loginAlert', qbovpt), G$LY$8(), wx['showModal']({ 'title': '提示', 'content': qbovpt, 'confirmText': '重试', 'cancelText': '退出', 'success'(ih$jg) {
      ih$jg['confirm'] ? window['G$YL']() : ih$jg['cancel'] && (console['log']('退出游戏'), wx['exitMiniProgram']({}));
    } });
}, window['G$$QY'] = function (a40m52) {
  console['log']('exitAlert', a40m52), wx['showModal']({ 'title': '提示', 'content': a40m52, 'confirmText': '重登', 'showCancel': !0x1, 'complete'(b3v7uz) {
      console['log']('退出游戏'), wx['exitMiniProgram']({});
    } });
}, window['G$L8$Y'] = !0x1, window['G$LY8$'] = function (mc254) {
  window['G$L8$Y'] = !0x0, wx['showLoading'](mc254);
}, window['G$LY$8'] = function () {
  window['G$L8$Y'] && (window['G$L8$Y'] = !0x1, wx['hideLoading']({}));
}, window['G$L$8Y'] = function (h_l9) {
  window['ServerLoading']['instance']['G$L$8Y'](h_l9);
}, window['msgCheck'] = function (kx7suz, hgj_6$) {
  gzs7u['msgCheck'](kx7suz, function (zbvu37) {
    zbvu37 && zbvu37['data'] ? 0x1 == zbvu37['data']['state'] ? hgj_6$(!0x0) : (hgj_6$(!0x1), console['info']('存在敏感词：\x20' + zbvu37['data']['msg'])) : console['log']('msgCheck', zbvu37);
  });
}, window['G$L$Y8'] = function (ry41a0) {
  console['log']('getJsURL', ry41a0);
}, window['G$LY$'] = function (v7uz3b) {}, window['G$L$Y'] = function (_gh$69, $g6_, h$j) {}, window['G$L$'] = function (y$) {
  console['log']('toEnterGame', y$), window['ServerLoading']['instance']['closeAuthor'](), window['ServerLoading']['instance']['closeServer'](), window['ServerLoading']['instance']['closeLoading']();
}, window['G$$L'] = function (oweqt) {
  console['log']('on api error'), window['G$L8Y$']('on api error'), G$LY(oweqt || '{"error": "on api error"}');
}, window['G$YL$'] = function (g_lh69) {
  g_lh69 = JSON['parse'](g_lh69), (g_lh69['gamever'] = window['config']['game_ver'], g_lh69['serverid'] = window['G$Y$']['selectedServer'] ? window['G$Y$']['selectedServer']['server_id'] : 0x0, g_lh69['systemInfo'] = window['systemInfo']), g_lh69 = JSON['stringify'](g_lh69), (console['error']('上报错误：' + g_lh69), G$LY(g_lh69));
}, window['G$Y$L'] = function (fs7zxk) {
  fs7zxk = { 'id': window['G$Y$']['roleId'], 'role': window['G$Y$']['roleName'], 'level': window['G$Y$']['roleLevel'], 'user': window['G$Y$']['account'], 'version': window['G$Y$']['lastVersion'], 'cdn': window['G$Y$']['cdn'], 'pkgName': window['G$Y$']['pkgName'], 'gamever': window['config']['game_ver'], 'serverid': window['G$Y$']['selectedServer'] ? window['G$Y$']['selectedServer']['server_id'] : 0x0, 'systemInfo': window['systemInfo'], 'error': fs7zxk }, fs7zxk = JSON['stringify'](fs7zxk), (console['warn']('上报信息：' + fs7zxk), window['G$LY'](fs7zxk));
}, window['G$LY'] = function (pqwot) {
  var ql8te;'devtools' != window['G$Y$']['wxPlatform'] && (ql8te = G$Y$['G$LY'] + '?account=' + G$Y$['account'], wx['request']({ 'url': ql8te, 'method': 'POST', 'data': pqwot, 'header': { 'content-type': 'application/json', 'cache-control': 'no-cache' }, 'success': function (rj16i) {}, 'fail': function (_6jg) {}, 'complete': function () {} }));
}, window['guild'] = function () {
  function yi1j0() {
    return (0x10000 * (0x1 + Math['random']()) | 0x0)['toString'](0x10)['substring'](0x1);
  }return yi1j0() + yi1j0() + '-' + yi1j0() + '-' + yi1j0() + '-' + yi1j0() + '+' + yi1j0() + yi1j0() + yi1j0();
}, window['G$YL'] = function () {
  console['log']('#SDK 初始化\uFF1A');var obu3v = gzs7u['getConfig']();G$Y$['channel'] = obu3v['partner_id'], G$Y$['channelNum'] = obu3v['partner_id'], G$Y$['partnerId'] = obu3v['partner_id'], G$Y$['pkgName'] = obu3v['game_pkg'], obu3v = { 'game_ver': G$Y$['version'] }, (G$Y$['device_id'] = this['guild'](), G$LY8$({ 'title': '正在初始化' }), gzs7u['init'](obu3v, this['G$$LY']['bind'](this)));
}, window['G$$LY'] = function (bx3u7) {
  var qetow = bx3u7['develop'];sdk_info = bx3u7, console['log']('#初始化成功\x20\x20\x20提审状态:' + qetow + '\x20\x20\x20是否提审:' + (0x1 == qetow) + '\x20\x20\x20提审版本号:' + bx3u7['game_ver'] + '\x20\x20\x20当前版本号:' + window['versions']['wxVersion']), !bx3u7['game_ver'] || window['G$Q8$YL'](window['versions']['wxVersion'], bx3u7['game_ver']) < 0x0 ? (console['log']('#正式版============================='), G$Y$['apiurl'] = 'https://api-tjqy.shzbkj.com', G$Y$['logurl'] = 'https://log-tjqy.shzbkj.com', G$Y$['payurl'] = 'https://pay-tjqy.shzbkj.com', G$Y$['cdn'] = 'https://cdn-tjqy-fx.shzbkj.com/weixin_1/', G$Y$['spareCdn'] = 'https://cdn-tjqy-ali.shzbkj.com/weixin_1/', G$Y$['version_name'] = 'ws', G$Y$['wxShield'] = !0x1) : 0x0 == window['G$Q8$YL'](window['versions']['wxVersion'], bx3u7['game_ver']) ? (console['log']('#审核版============================='), G$Y$['apiurl'] = 'https://api-tjqytest.shzbkj.com', G$Y$['logurl'] = 'https://log-tjqytest.shzbkj.com', G$Y$['payurl'] = 'https://pay-tjqytest.shzbkj.com', G$Y$['cdn'] = 'https://cdn-tjqy-fx.shzbkj.com/weixin_0/', G$Y$['spareCdn'] = 'https://cdn-tjqy-ali.shzbkj.com/weixin_1/', G$Y$['version_name'] = 'weixin', G$Y$['wxShield'] = !0x0) : (console['log']('#开发版============================='), G$Y$['apiurl'] = 'https://api-tjqytest.shzbkj.com', G$Y$['logurl'] = 'https://log-tjqytest.shzbkj.com', G$Y$['payurl'] = 'https://pay-tjqytest.shzbkj.com', G$Y$['cdn'] = 'https://cdn-tjqy-fx.shzbkj.com/weixin_0/', G$Y$['spareCdn'] = 'https://cdn-tjqy-ali.shzbkj.com/weixin_1/', G$Y$['version_name'] = 'weixin', G$Y$['wxShield'] = !0x1), G$Y$['from_scene'] = config['from'] || 0x0, this['G$8YL$'](), this['G$8Y$L'](), G$LY8$({ 'title': '正在登录账号' }), gzs7u['login'](this['G$$YL']['bind'](this));
}, window['G$$YL'] = function (poqtvb, l89he) {
  G$LY8$({ 'title': '正在验证账号' }), 0x0 === poqtvb && l89he && l89he['token'] ? (G$Y$['sdk_token'] = l89he['token'], sendApi(G$Y$['apiurl'], 'User.login', { 'platform': G$Y$['sdk_name'], 'partner_id': G$Y$['partnerId'], 'token': l89he['token'], 'game_pkg': G$Y$['pkgName'], 'deviceId': G$Y$['device_id'], 'scene': 'WX_' + G$Y$['from_scene'] }, this['G$8LY$']['bind'](this), G$8$Y, G$$L)) : (G$LY(JSON['stringify']({ 'account': G$Y$['account'], 'pkgName': G$Y$['pkgName'], 'error': 'sdkOnLoginError', 'stack': JSON['stringify']({ 'status': poqtvb, 'data': l89he }) })), window['G$L8Y$']('登录/注册失败' + (l89he && l89he['errMsg'] ? '，' + l89he['errMsg'] : '')));
}, window['G$8LY$'] = function (ubvo3p) {
  ubvo3p ? 'success' == ubvo3p['state'] ? (G$Y$['userId'] = String(ubvo3p['account']), G$Y$['account'] = String(ubvo3p['account']), G$Y$['platform'] = String(ubvo3p['platform']), G$Y$['channel'] = String(ubvo3p['platform']), G$Y$['platform_uid'] = String(ubvo3p['platform_uid']), G$Y$['php_sign'] = String(ubvo3p['sign']), G$Y$['php_signtime'] = String(ubvo3p['time']), G$Y$['sign'] = '', G$LY8$({ 'title': '请求服务器' }), sendApi(G$Y$['apiurl'], 'Server.defaultServer', { 'partner_id': G$Y$['partnerId'], 'uid': G$Y$['account'], 'version': G$Y$['version'], 'game_pkg': G$Y$['pkgName'], 'device': G$Y$['device_id'] }, this['G$8L$Y']['bind'](this), G$8$Y, G$$L)) : window['G$L8Y$']('User.login failed: ' + ubvo3p['state']) : window['G$L8Y$']('User.login failed');
}, window['G$8L$Y'] = function (o3bpt) {
  o3bpt ? 'success' == o3bpt['state'] ? o3bpt['data'] && 0x0 != o3bpt['data']['length'] ? (G$Y$['newRegister'] = o3bpt['is_new'], G$Y$['selectedServer'] = { 'server_id': String(o3bpt['data'][0x0]['server_id']), 'server_name': String(o3bpt['data'][0x0]['server_name']), 'entry_ip': o3bpt['data'][0x0]['entry_ip'], 'entry_port': parseInt(o3bpt['data'][0x0]['entry_port']), 'status': G$$L8Y(o3bpt['data'][0x0]), 'start_time': o3bpt['data'][0x0]['start_time'], 'cdn': G$Y$['cdn'] }, this['G$QL8Y$']()) : window['G$L8Y$']('服务器尚未开启') : window['G$L8Y$']('Server.defaultServer failed: ' + o3bpt['state']) : window['G$L8Y$']('Server.defaultServer failed');
}, window['G$QL8Y$'] = function () {
  if (0x1 == G$Y$['newRegister']) {
    var qwetpo = G$Y$['selectedServer']['status'];if (-0x1 === qwetpo || 0x0 === qwetpo) return void window['G$L8Y$'](-0x1 === qwetpo ? '当前服务器在维护中' : '当前服务器尚未开启，敬请期待');G$$LY8(0x0, G$Y$['selectedServer']['server_id']), window['ServerLoading']['instance']['openLoading'](G$Y$['newRegister']);
  } else window['ServerLoading']['instance']['openServer'](), G$LY$8();window['G$Y8'] = !0x0, window['G$$YL8'](), window['G$$Y8L']();
}, window['G$8YL$'] = function () {
  sendApi(G$Y$['apiurl'], 'User.getCdnVersion', { 'game_pkg': G$Y$['pkgName'], 'version_name': G$Y$['version_name'] }, function (ovbp3) {
    ovbp3 ? 'success' == ovbp3['state'] ? ovbp3['data'] && ovbp3['data']['version'] ? (G$Y$['base_cdn'] = ovbp3['data']['cdn_url'] && ovbp3['data']['cdn_url']['length'] ? ovbp3['data']['cdn_url'] : G$Y$['base_cdn'], G$Y$['cdn'] = ovbp3['data']['cdn_url'] && ovbp3['data']['cdn_url']['length'] ? ovbp3['data']['cdn_url'] : G$Y$['cdn'], G$Y$['lastVersion'] = ovbp3['data']['version'] || G$Y$['lastVersion'], console['info']('资源版本号：' + G$Y$['lastVersion']), window['G$Y$8'] = !0x0, window['G$$YL8'](), window['G$$Y8L']()) : window['G$L8Y$']('User.getCdnVersion failed: version=' + (ovbp3['data'] && ovbp3['data']['version'])) : window['G$L8Y$']('User.getCdnVersion failed: state=' + ovbp3['state']) : window['G$L8Y$']('User.getCdnVersion failed');
  });
}, window['pkgOptions'], window['G$8Y$L'] = function () {
  sendApi(G$Y$['apiurl'], 'Common.get_option_pkg', { 'game_pkg': G$Y$['pkgName'] }, G$8$LY);
}, window['G$8$LY'] = function (pu7v3) {
  if ('success' === pu7v3['state'] && pu7v3['data']) {
    for (var gh6$_ in window['pkgOptions'] = pu7v3['data'], pu7v3['data']) G$Y$[gh6$_] = pu7v3['data'][gh6$_];
  } else console['info']('reqPkgOptionsCallBack ' + pu7v3['state']);window['G$8Y'] = !0x0, window['G$$Y8L']();
}, window['toPay'] = function (a4cm, $1jg6, i0ya, pvb3to, g6ij, yar1i, ar140, otpe, h_98l) {
  g6ij = String(g6ij), (G$Y$['pay_infos'][g6ij] = { 'productid': g6ij, 'productname': ar140, 'productdesc': otpe, 'roleid': a4cm, 'rolename': $1jg6, 'rolelevel': i0ya, 'price': yar1i, 'callback': h_98l }, sendApi(G$Y$['payurl'], 'Order.order', { 'game_pkg': G$Y$['pkgName'], 'server_id': G$Y$['selectedServer']['server_id'], 'server_name': G$Y$['selectedServer']['server_name'], 'level': i0ya, 'uid': G$Y$['account'], 'role_id': a4cm, 'role_name': $1jg6, 'product_id': g6ij, 'product_name': ar140, 'product_desc': otpe, 'money': yar1i, 'partner_id': G$Y$['partnerId'] }, toPayCallBack, G$8$Y, G$$L));
}, window['toPayCallBack'] = function (jg6i1) {
  var ouvpb3;jg6i1 && (0xc8 === jg6i1['errCode'] || 'success' == jg6i1['state'] ? ((ouvpb3 = G$Y$['pay_infos'][String(jg6i1['product_id'])])['callback'] && ouvpb3['callback'](jg6i1['product_id'], jg6i1['cp_order_id'], -0x1), gzs7u['pay']({ 'cpbill': jg6i1['cp_order_id'], 'productid': jg6i1['product_id'], 'productname': ouvpb3['productname'], 'productdesc': ouvpb3['productdesc'], 'serverid': G$Y$['selectedServer']['server_id'], 'servername': G$Y$['selectedServer']['server_name'], 'roleid': ouvpb3['roleid'], 'rolename': ouvpb3['rolename'], 'rolelevel': ouvpb3['rolelevel'], 'price': ouvpb3['price'], 'extension': JSON['stringify']({ 'cp_order_id': jg6i1['cp_order_id'] }) }, function (sxzu3, gj6i$) {
    ouvpb3['callback'] && 0x0 == sxzu3 && ouvpb3['callback'](jg6i1['product_id'], jg6i1['cp_order_id'], sxzu3), console['info'](JSON['stringify']({ 'type': 'paycallback', 'status': sxzu3, 'data': jg6i1, 'role_name': ouvpb3['rolename'] }));
  })) : alert(jg6i1['info']));
}, window['G$8$YL'] = function () {}, window['G$L8$'] = function (jriy$, m254ac, r0j, $jigh6, ou3bp) {
  gzs7u['logCreateRole'](G$Y$['selectedServer']['server_id'], G$Y$['selectedServer']['server_name'] || G$Y$['selectedServer']['server_id'], jriy$, m254ac, r0j), sendApi(G$Y$['apiurl'], 'User.create_role', { 'game_pkg': G$Y$['pkgName'], 'server_id': G$Y$['selectedServer']['server_id'], 'role_id': jriy$, 'uid': G$Y$['account'], 'role_name': m254ac, 'role_type': $jigh6, 'level': r0j });
}, window['G$L$8'] = function (yj$, a540y, elh98, powte, y5r0, qoet8w, lg_h8, bzxu37, m204a, lhe98) {
  G$Y$['roleId'] = yj$, G$Y$['roleName'] = a540y, G$Y$['roleLevel'] = elh98, gzs7u['logEnterGame'](G$Y$['selectedServer']['server_id'], G$Y$['selectedServer']['server_name'] || G$Y$['selectedServer']['server_id'], yj$, a540y, elh98, qoet8w, { 'rolepower': lg_h8 }), sendApi(G$Y$['apiurl'], 'User.update_role', { 'game_pkg': G$Y$['pkgName'], 'server_id': G$Y$['selectedServer']['server_id'], 'role_id': yj$, 'uid': G$Y$['account'], 'role_name': a540y, 'role_type': powte, 'level': elh98, 'evolution': y5r0 });
}, window['G$8L$'] = function (eqpot, pbvu, ari01, lhe8, u3vb7, ql98, w8l9q, bz3ux7, y104, wqtel8) {
  G$Y$['roleId'] = eqpot, G$Y$['roleName'] = pbvu, G$Y$['roleLevel'] = ari01;
}, window['G$8$L'] = function (r$1i6j) {}, window['G$L8'] = function (ji$r61) {
  gzs7u['share']('share', function (wle_9) {
    ji$r61(wle_9);
  });
}, window['openService'] = function () {
  gzs7u['goCustomer'](G$Y$['selectedServer']['server_id'], G$Y$['selectedServer']['server_name'] || G$Y$['selectedServer']['server_id'], G$Y$['roleId'], G$Y$['roleName'], G$Y$['roleLevel']);
}, window['microPortGuide'] = function () {
  gzs7u['weiduanHelper']();
}, window['G$8L'] = function (y05ar4) {
  window['G$$8L'] = y05ar4, window['G$$8L'] && window['G$$L8'] && (console['info']('小游戏切前台事件，场景值：' + window['G$$L8']['scene']), window['G$$8L'](window['G$$L8']), window['G$$L8'] = null);
}, window['G$YL8$'] = function (otqvw, ma0452, pvuob3, ih6$jg) {
  window['send']('https://sdk.sh9130.com/game/?ct=min&ac=getInviter', { 'game_pkg': window['G$Y$']['pkgName'], 'role_id': ma0452, 'server_id': pvuob3 }, ih6$jg);
}, window['G$YL$8'] = function (i$1yr, ub7zv) {
  wx['onTouchEnd'](function b3vu7z(kzxs7) {
    var gh$ = [],
        ayi0r = [],
        ghl8 = window['config']['tmpId'];for (var cm5a in ghl8) {
      var aiyr1 = Number(cm5a);i$1yr && i$1yr['length'] && -0x1 == i$1yr['indexOf'](aiyr1) || (ayi0r['push'](ghl8[cm5a]), gh$['push']([aiyr1, 0x3]));
    }0x0 <= window['G$Q8$YL'](window['SDKVersion'], '2.4.4') ? (console['log']('调用订阅'), gzs7u['subscribeMessage'] && gzs7u['subscribeMessage'](ayi0r, function (g9l8) {
      if (console['log']('订阅回调：'), console['log'](g9l8), g9l8 && 'requestSubscribeMessage:ok' == g9l8['errMsg']) {
        for (var boqv in ghl8) if ('accept' == g9l8[ghl8[boqv]]) {
          var $j61r = Number(boqv);for (var q9e8w = 0x0; q9e8w < gh$['length']; q9e8w++) if (gh$[q9e8w][0x0] == $j61r) {
            gh$[q9e8w][0x1] = 0x1;break;
          }
        }
      }0x0 <= window['G$Q8$YL'](window['SDKVersion'], '2.10.1') ? wx['getSetting']({ 'withSubscriptions': !0x0, 'success': function (opt3vb) {
          var bu7z3v = opt3vb['subscriptionsSetting']['itemSettings'];if (bu7z3v) {
            for (var wtqep in console['log']('获得订阅设置：'), console['log'](bu7z3v), ghl8) if ('accept' == bu7z3v[ghl8[wtqep]]) {
              var y0a5r = Number(wtqep);for (var bzx7 = 0x0; bzx7 < gh$['length']; bzx7++) if (gh$[bzx7][0x0] == y0a5r) {
                gh$[bzx7][0x1] = 0x2;break;
              }
            }console['log'](gh$), ub7zv && ub7zv(gh$);
          } else console['log']('获得订阅设置：没有长期订阅消息'), console['log'](opt3vb), console['log'](gh$), ub7zv && ub7zv(gh$);
        }, 'fail': function () {
          console['log']('获得订阅设置：失败'), console['log'](gh$), ub7zv && ub7zv(gh$);
        } }) : (console['log']('版本过低，获得订阅设置：失败\x20' + window['SDKVersion']), console['log'](gh$), ub7zv && ub7zv(gh$));
    })) : (console['log']('版本过低，不支持订阅\x20' + window['SDKVersion']), console['log'](gh$), ub7zv && ub7zv(gh$)), wx['offTouchEnd'](b3vu7z);
  });
}, window['G$Y8L$'] = { 'isSuccess': !0x1, 'level': '100', 'isCharging': !0x1 }, window['G$Y8$L'] = function (pbo3t) {
  wx['getBatteryInfo']({ 'success': function (c2m54a) {
      var a05r4y = window['G$Y8L$'];a05r4y['isSuccess'] = !0x0, a05r4y['level'] = Number(c2m54a['level'])['toFixed'](0x0), a05r4y['isCharging'] = c2m54a['isCharging'], pbo3t && pbo3t(a05r4y['isSuccess'], a05r4y['level'], a05r4y['isCharging']);
    }, 'fail': function (qwt) {
      console['log']('调用获取电池信息失败', qwt['errMsg']), qwt = window['G$Y8L$'], pbo3t && pbo3t(qwt['isSuccess'], qwt['level'], qwt['isCharging']);
    } });
}, window['send'] = function (tqw8l, _g9h$6, e9_8, vobpt3, buzv37, ubvp3, j1$6r, h9_) {
  null == vobpt3 && (vobpt3 = 0x1);var w89qel = new XMLHttpRequest();w89qel['onreadystatechange'] = function () {
    if (0x4 == w89qel['readyState']) {
      if (0xc8 == w89qel['status'] || 0x12d == w89qel['status']) {
        var r1y4a0;w89qel['response'];if (r1y4a0 = JSON['parse'](w89qel['response']), !ubvp3 || ubvp3(r1y4a0, w89qel, tqw8l)) return void (e9_8 && e9_8(r1y4a0));console['info'](tqw8l), console['error'](r1y4a0);
      }0x0 < vobpt3 - 0x1 ? setTimeout(function () {
        send(tqw8l, _g9h$6, e9_8, vobpt3 - 0x1, buzv37, ubvp3);
      }, 0x3e8) : buzv37 && buzv37(JSON['stringify']({ 'account': G$Y$['account'], 'pkgName': G$Y$['pkgName'], 'error': 'onApiError', 'stack': JSON['stringify']({ 'url': tqw8l, 'status': w89qel['status'], 'response': w89qel['response'], 'responseType': w89qel['responseType'] }) }));
    }
  }, w89qel['open'](j1$6r || 'GET', tqw8l), w89qel['responseType'] = 'text', w89qel['setRequestHeader']('content-type', h9_ || 'application/json'), w89qel['send'](_g9h$6);
}, window['sendApi'] = function (ub73xz, jy10, oqtw8, $gij6, r61j, a025, el_h8) {
  oqtw8 = oqtw8 || {};var p7v3bu = Math['floor'](Date['now']() / 0x3e8);oqtw8['time'] = p7v3bu, oqtw8['method'] = jy10;var ubzx37 = Object['keys'](oqtw8)['sort'](),
      p3b7vu = '',
      wteq8o = '';for (var a0r14y = 0x0; a0r14y < ubzx37['length']; a0r14y++) p3b7vu = p3b7vu + (0x0 == a0r14y ? '' : '&') + ubzx37[a0r14y] + oqtw8[ubzx37[a0r14y]], wteq8o = wteq8o + (0x0 == a0r14y ? '' : '&') + ubzx37[a0r14y] + '=' + encodeURIComponent(oqtw8[ubzx37[a0r14y]]);p3b7vu += G$Y$['apikey'], jy10 = 'sign=' + md5(p3b7vu), send(ub73xz + '?' + wteq8o + ('' == wteq8o ? '' : '&') + jy10, null, $gij6, r61j, a025, el_h8 || function (e8_9lw) {
    return 'success' == e8_9lw['state'];
  }, null, 'application/x-www-form-urlencoded');
}, window['G$Y$L8'] = function (ayri1, v3bp7u) {
  var sdfx = 0x0;G$Y$['selectedServer'] && (sdfx = G$Y$['selectedServer']['server_id']), sendApi(G$Y$['logurl'], 'UserLog.reportUidStep', { 'partnerId': G$Y$['partnerId'], 'gamePkg': G$Y$['pkgName'], 'logTime': Math['floor'](Date['now']() / 0x3e8), 'platformUid': G$Y$['platform_uid'], 'type': ayri1, 'serverId': sdfx }, null, 0x2, null, function () {
    return !0x0;
  });
}, window['G$Y$8L'] = function (vqotw) {
  sendApi(G$Y$['apiurl'], 'Server.getServerGroup', { 'partner_id': G$Y$['partnerId'], 'uid': G$Y$['account'], 'version': G$Y$['version'], 'game_pkg': G$Y$['pkgName'], 'device': G$Y$['device_id'] }, G$L8Y, G$8$Y, G$$L);
}, window['G$L8Y'] = function (l8we9) {
  'success' === l8we9['state'] && l8we9['data'] ? (l8we9['data']['unshift']({ 'id': -0x2, 'name': '最新服' }), l8we9['data']['unshift']({ 'id': -0x1, 'name': '已有角色' }), G$Y$['groupList'] = l8we9['data'], window['initPanel'] && window['initPanel']['showGroupList']()) : (G$Y$['hasGroupReq'] = !0x1, window['G$L8Y$']('reqServerGroupCallBack ' + l8we9['state']));
}, window['G$LY8'] = function (dxskz) {
  sendApi(G$Y$['apiurl'], 'Server.getServerByUid', { 'partner_id': G$Y$['partnerId'], 'uid': G$Y$['account'], 'version': G$Y$['version'], 'game_pkg': G$Y$['pkgName'], 'device': G$Y$['device_id'] }, G$8LY, G$8$Y, G$$L);
}, window['G$8LY'] = function (h$69_g) {
  if (G$Y$['hasServerReq'] = !0x1, 'success' === h$69_g['state'] && h$69_g['data']) {
    for (var h8_l = 0x0; h8_l < h$69_g['data']['length']; h8_l++) h$69_g['data'][h8_l]['status'] = G$$L8Y(h$69_g['data'][h8_l]);G$Y$['serverList'][-0x1] = window['changeServerName'](h$69_g['data']), window['initPanel']['showServerList'](-0x1);
  } else window['G$L8Y$']('reqServerOwnerCallBack ' + h$69_g['state']);
}, window['G$8YL'] = function ($yi, $jri16) {
  sendApi(G$Y$['apiurl'], 'Server.getServerByGroup', { 'partner_id': G$Y$['partnerId'], 'uid': G$Y$['account'], 'version': G$Y$['version'], 'game_pkg': G$Y$['pkgName'], 'device': G$Y$['device_id'], 'server_group_id': $jri16 }, G$YL8, G$8$Y, G$$L);
}, window['G$YL8'] = function (yj1i$r) {
  if (G$Y$['hasServerReq'] = !0x1, 'success' === yj1i$r['state'] && yj1i$r['data'] && yj1i$r['data']['data']) {
    var h6i = yj1i$r['data']['server_group_id'],
        teqwl8 = [];for (var oe8t = 0x0; oe8t < yj1i$r['data']['data']['length']; oe8t++) yj1i$r['data']['data'][oe8t]['status'] = G$$L8Y(yj1i$r['data']['data'][oe8t]), 0x0 != teqwl8['length'] && 0x0 == yj1i$r['data']['data'][oe8t]['status'] || (teqwl8[teqwl8['length']] = yj1i$r['data']['data'][oe8t]);G$Y$['serverList'][h6i] = window['changeServerName'](teqwl8), window['initPanel']['showServerList'](h6i);
  } else window['G$L8Y$']('reqServerListCallBack ' + yj1i$r['state']);
}, window['G$QY8$'] = function (hl9_e8) {
  sendApi(G$Y$['apiurl'], 'Server.getRecommendServerList', { 'partner_id': G$Y$['partnerId'], 'uid': G$Y$['account'], 'version': G$Y$['version'], 'game_pkg': G$Y$['pkgName'], 'device': G$Y$['device_id'] }, reqServerRecommendCallBack, G$8$Y, G$$L);
}, window['reqServerRecommendCallBack'] = function (botpq) {
  if (G$Y$['hasServerReq'] = !0x1, 'success' === botpq['state'] && botpq['data']) {
    for (var gh_6l = 0x0; gh_6l < botpq['data']['length']; gh_6l++) botpq['data'][gh_6l]['status'] = G$$L8Y(botpq['data'][gh_6l]);G$Y$['serverList'][-0x2] = window['changeServerName'](botpq['data']), window['initPanel']['showServerList'](-0x2);
  } else alert('reqServerRecommendCallBack ' + botpq['state']);
}, window['changeServerName'] = function (r4y50a) {
  if (!r4y50a && r4y50a['length'] <= 0x0) return r4y50a;for (let powq = 0x0; powq < r4y50a['length']; powq++) r4y50a[powq]['is_recommend'] && 0x1 == r4y50a[powq]['is_recommend'] && (r4y50a[powq]['server_name'] += '(推荐)');return r4y50a;
}, window['G$Y8L'] = function (kszxfd, le98h_) {
  kszxfd = kszxfd || G$Y$['selectedServer']['server_id'], sendApi(G$Y$['apiurl'], 'Common.get_anno', { 'type': '4', 'game_pkg': G$Y$['pkgName'], 'server_id': kszxfd }, le98h_);
}, window['req_multi_server_notice'] = function (v3bzu, a2m540, i$yrj, g6$hi) {
  i$yrj = i$yrj || G$Y$['selectedServer']['server_id'], sendApi(G$Y$['apiurl'], 'Common.get_new_anno', { 'type': v3bzu, 'game_pkg': a2m540, 'server_id': i$yrj }, g6$hi);
}, window['G$$L8Y'] = function ($61igj) {
  return $61igj ? 0x1 == $61igj['status'] ? 0x1 == $61igj['online_status'] ? 0x2 : 0x1 : 0x0 == $61igj['status'] ? 0x0 : -0x1 : -0x1;
}, window['G$$LY8'] = function (vbpou3, j6hgi$) {
  G$Y$['last_check_ban'] = { 'step': vbpou3, 'server_id': j6hgi$ }, (G$LY8$({ 'title': '正在验证角色' }), sendApi(G$Y$['apiurl'], 'User.checkInfo', { 'partner_id': G$Y$['partnerId'], 'uid': G$Y$['account'], 'game_pkg': G$Y$['pkgName'], 'server_id': j6hgi$, 'platform': G$Y$['platform'], 'platform_uid': G$Y$['platform_uid'], 'check_login_time': G$Y$['php_signtime'], 'check_login_sign': G$Y$['php_sign'], 'version_name': G$Y$['version_name'] }, G$$8LY, G$8$Y, G$$L, function (e_w8) {
    return 'success' == e_w8['state'] || 'time_err' == e_w8['info'] || 'sign_err' == e_w8['info'];
  }));
}, window['G$$8LY'] = function (a4y5) {
  var jyr$1;'success' === a4y5['state'] && a4y5['data'] ? ((jyr$1 = G$Y$['selectedServer'])['channel_num'] = G$Y$['channelNum'], jyr$1['sign'] = String(a4y5['data']['login_sign']), jyr$1['tick'] = parseInt(a4y5['data']['time']), a4y5['data']['server_num'] ? jyr$1['server_num'] = parseInt(a4y5['data']['server_num']) : jyr$1['server_num'] = parseInt(a4y5['data']['server_id']), jyr$1['is_domain'] = 0x0, jyr$1['cdn'] = G$Y$['base_cdn'], jyr$1['resver'] = a4y5['data']['cdn_version'], jyr$1['server_options'] = a4y5['data']['server_options'], console['log']('server_options\uFF1A' + JSON['stringify'](jyr$1['server_options'])), 0x1 == G$Y$['newRegister'] && jyr$1['server_options'] && 0x1 == jyr$1['server_options']['show_btn'] && (G$Y$['showGetBtn'] = 0x1, window['ServerLoading']['instance']['G$Q$']()), G$$8YL()) : sendApi(G$Y$['apiurl'], 'User.login', { 'platform': G$Y$['sdk_name'], 'partner_id': G$Y$['partnerId'], 'token': G$Y$['sdk_token'], 'game_pkg': G$Y$['pkgName'], 'deviceId': G$Y$['device_id'], 'scene': 'WX_' + G$Y$['from_scene'] }, function (e8h9) {
    'failed' != e8h9['state'] ? (G$Y$['php_sign'] = String(e8h9['sign']), G$Y$['php_signtime'] = String(e8h9['time']), setTimeout(function () {
      G$$LY8(G$Y$['last_check_ban']['step'], G$Y$['last_check_ban']['server_id']);
    }, 0x5dc)) : window['G$L8Y$']('User.login failed: ' + e8h9['state']);
  }, G$8$Y, G$$L, function (i1rjy0) {
    return 'success' == i1rjy0['state'] || 'failed' == i1rjy0['state'];
  });
}, window['G$$8YL'] = function () {
  ServerLoading['instance']['openLoading'](G$Y$['newRegister']), window['G$8$'] = !0x0, window['G$$Y8L']();
}, window['G$$YL8'] = function () {
  var dfxz;window['G$$8'] && window['G$Y8$'] && window['loadServerRes'] && window['loadLoadingRes'] && window['G$Y$8'] && window['G$Y8'] && (window['MainWX']['instance'] || (console['log']('Main 初始化' + window['MainWX']['instance']), dfxz = wx['getLaunchOptionsSync']()['scene'] || 0x0, dfxz = { 'cdn': window['G$Y$']['cdn'], 'spareCdn': window['G$Y$']['spareCdn'], 'newRegister': window['G$Y$']['newRegister'], 'wxPC': window['G$Y$']['wxPC'], 'wxIOS': window['G$Y$']['wxIOS'], 'wxAndroid': window['G$Y$']['wxAndroid'], 'wxParam': { 'limitLoad': window['G$Y$']['G$QLY8$'], 'benchmarkLevel': window['G$Y$']['G$QLY$8'], 'wxFrom': 'txcps' == window['config']['from'] ? 0x1 : 0x0, 'wxSDKVersion': window['SDKVersion'] }, 'configType': window['G$Y$']['configType'], 'exposeType': window['G$Y$']['exposeType'], 'scene': dfxz }, new window['MainWX'](dfxz, window['G$Y$']['lastVersion'], window['G$QL8$Y'])));
}, window['G$$Y8L'] = function () {
  if (window['G$$8'] && window['G$Y8$'] && window['loadServerRes'] && window['loadLoadingRes'] && window['G$Y$8'] && window['G$Y8'] && window['G$8$'] && window['G$8Y']) {
    if (G$LY$8(), !G$$8Y) {
      G$$8Y = !0x0, window['MainWX']['instance'] || window['G$$YL8']();var e8wl9q = 0x0,
          r450y = wx['getMenuButtonBoundingClientRect']();r450y && (window['G$Y$']['wxPhone'] && (e8wl9q = r450y['top']), console['info']('MenuButton  top:' + r450y['top'] + ',bottom:' + r450y['bottom'] + ',left:' + r450y['left'] + ',right:' + r450y['right'] + ',width:' + r450y['width'] + ',height:' + r450y['height']));var kdxfzs = {};for (const g9_8l in G$Y$['selectedServer']) kdxfzs[g9_8l] = G$Y$['selectedServer'][g9_8l];var l9hg_ = { 'channel': window['G$Y$']['channel'], 'account': window['G$Y$']['account'], 'userId': window['G$Y$']['userId'], 'serverId': kdxfzs['server_id'], 'cdn': window['G$Y$']['cdn'], 'data': window['G$Y$']['data'], 'package': window['G$Y$']['package'], 'newRegister': window['G$Y$']['newRegister'], 'pkgName': window['G$Y$']['pkgName'], 'partnerId': window['G$Y$']['partnerId'], 'platform_uid': window['G$Y$']['platform_uid'], 'deviceId': window['G$Y$']['device_id'], 'selectedServer': kdxfzs, 'configType': window['G$Y$']['configType'], 'exposeType': window['G$Y$']['exposeType'], 'debugUsers': window['G$Y$']['debugUsers'], 'wxMenuTop': e8wl9q, 'wxShield': window['G$Y$']['wxShield'] };if (window['pkgOptions']) {
        for (var sxfzk7 in window['pkgOptions']) l9hg_[sxfzk7] = window['pkgOptions'][sxfzk7];
      }window['MainWX']['instance']['G$8Q$Y'](l9hg_), setTimeout(() => {
        new XingJuBoxMain();
      }, 0x1388);
    }
  } else console['info']('\u3010登录\u3011loadProbPkg:' + window['G$$8'] + ',loadMainPkg:' + window['G$Y8$'] + ',loadServerRes:' + window['loadServerRes'] + ',loadLoadingRes:' + window['loadLoadingRes'] + ',loadVersion:' + window['G$Y$8'] + ',loadServer:' + window['G$Y8'] + ',isCheckBan:' + window['G$8$'] + ',loadOption:' + window['G$8Y']);
};