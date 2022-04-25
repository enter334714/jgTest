var H = wx.$F;
let fiw1h$ = { 'game_id': '11', 'game_pkg': 'wzcq-q2-_q2wxxcxgrzh_J', 'partner_id': '4', 'is_auth': !(-0x3 * -0xad5 + -0x1a3a + 0x1 * -0x644), 'from': null };window['config'] = fiw1h$;let fma83eu = ft95_swh(),
    fkx_5tsc = 'https://sdk.5tun.cn',
    fm2pebl = null,
    fpj83ue = null,
    frn7z$6 = '';function ft95_swh() {
  var sw_h95t = {};return { 'order_data': {}, 'init': function (j3kux8, t5hc9_) {
      frn7z$6 = j3kux8 && j3kux8['game_ver'] ? j3kux8['game_ver'] : 0x9e * 0x16 + 0xc3c + 0x8 * -0x33a, console['log']('[SDK]CP调用init接口');var _5xcj4k,
          i9$71w = wx['getStorageSync']('plat_uuid');i9$71w ? _5xcj4k = 0x33f * -0xa + -0x2a * 0x61 + 0x60c * 0x8 : (i9$71w = this['uuid'](-0x42 * -0x3b + 0x2168 * 0x1 + -0x308e, -0x16cf + -0x1 * -0x2090 + -0x9a1), wx['setStorageSync']('plat_uuid', i9$71w), _5xcj4k = -0x5 * -0x136 + -0x1e37 + 0x182a);var vbam2e = wx['getStorageSync']('plat_idfv');vbam2e || (vbam2e = this['uuid'](-0x26 * -0x81 + 0xcf4 * 0x2 + -0x167f * 0x2, -0x655 + 0x8e2 + -0x26d), wx['setStorageSync']('plat_idfv', vbam2e));var c_9sx5t = wx['getLaunchOptionsSync'](),
          k38pju = c_9sx5t['scene'] ? c_9sx5t['scene'] : '';if (console['log']('[SDK]小游戏启动参数'), console['log'](c_9sx5t), _5xcj4k && c_9sx5t['query'] && c_9sx5t['query']['ad_code'] && wx['setStorageSync']('plat_ad_code', c_9sx5t['query']['ad_code']), c_9sx5t['query'] && c_9sx5t['query']['from'] && '' != c_9sx5t['query']['from']) _5xcj4k && wx['setStorageSync']('plat_from', c_9sx5t['query']['from']), fiw1h$['from'] = c_9sx5t['query']['from'];else {
        var nh$w7i = wx['getStorageSync']('plat_from');nh$w7i || '' == nh$w7i || (fiw1h$['from'] = nh$w7i);
      }console['log'](fiw1h$['from']);var $s7i9hw = { 'install': _5xcj4k, 'scene': k38pju };this['log']('start', $s7i9hw), wx['showShareMenu'](), frn7z$6 && this['checkGameVersion'](frn7z$6, function ($n6r0z1) {
        t5hc9_ && t5hc9_($n6r0z1);
      });
    }, 'login': function (emjp, evmal2b) {
      console['log']('[SDK]调起登录');var it7hs9 = this;sw_h95t['login'] = 'function' == typeof evmal2b ? evmal2b : null, fiw1h$['is_auth'] ? wx['getSetting']({ 'success': function (yq0doz) {
          if (yq0doz['authSetting']['scope.userInfo']) console['log']('[SDK]获得授权设置\uFF1A已授权'), it7hs9['do_login']();else {
            console['log']('[SDK]获得授权设置\uFF1A未授权'), wx['hideLoading']({});var cth59_s = wx['getSystemInfoSync'](),
                rn617i = (cth59_s['screenWidth'], cth59_s['screenHeight'], wx['createUserInfoButton']({ 'type': 'text', 'text': '授权登录游戏', 'withCredentials': !(0x1a8a + 0x1 * 0x262f + -0x6d * 0x98), 'style': { 'top': cth59_s['windowHeight'] / (-0x1 * 0x155d + 0x712 * 0x1 + 0x7 * 0x20b) + cth59_s['windowHeight'] / (-0x16eb * 0x1 + -0x86e + 0xd9 * 0x25), 'left': cth59_s['windowWidth'] / (-0x1e25 + 0x53 * 0x78 + -0x2eb * 0x3) - (-0x166 + 0x146f * 0x1 + -0x12a5 * 0x1), 'width': 0xc8, 'height': 0x28, 'lineHeight': 0x28, 'backgroundColor': '#07c160', 'color': '#ffffff', 'textAlign': 'center', 'fontSize': 0x10, 'borderRadius': 0x4 } }));rn617i['show'](), rn617i['onTap'](wni6$7 => {
              console['log'](wni6$7), f33BL8({ 'title': '正在登录游戏' }), 'getUserInfo:ok' == wni6$7['errMsg'] ? it7hs9['do_login']({ 'head_img': wni6$7['userInfo']['avatarUrl'] || '', 'nick_name': wni6$7['userInfo']['nickName'] || '' }) : it7hs9['do_login'](), rn617i['destroy']();
            });
          }
        }, 'fail': function () {
          console['log']('[SDK]获得授权设置\uFF1A失败'), it7hs9['do_login']();
        } }) : (console['log']('[SDK]授权登录' + fiw1h$['is_auth']), it7hs9['do_login']());
    }, 'do_login': function (_k4x8c) {
      var dzqyr0o = this;wx['login']({ 'success': function (x5_ks) {
          if (console['log']('微信登录成功返回' + JSON['stringify'](x5_ks)), x5_ks['code']) {
            var s9_tcx5 = dzqyr0o['getPublicData']();s9_tcx5['mo'] = 0x1 * -0x18df + 0x621 * 0x1 + 0x12bf, s9_tcx5['code'] = x5_ks['code'], s9_tcx5['nick_name'] = _k4x8c ? _k4x8c['nick_name'] : '', s9_tcx5['head_img'] = _k4x8c ? _k4x8c['head_img'] : '', fiw1h$['is_auth'] ? wx['getUserInfo']({ 'success': function (jp384mu) {
                var rd0qyoz = jp384mu['encryptedData'],
                    mpj483u = jp384mu['iv'],
                    lepam2 = jp384mu['signature'];s9_tcx5['encryptedData'] = rd0qyoz, s9_tcx5['iv'] = mpj483u, s9_tcx5['signature'] = lepam2, wx['request']({ 'url': fkx_5tsc + '/partner/auth', 'method': 'POST', 'dataType': 'json', 'header': { 'content-type': 'application/x-www-form-urlencoded' }, 'data': s9_tcx5, 'success': function (qnozr0) {
                    if (console['log']('[SDK]登录结果\uFF1A'), console['log'](qnozr0), -0x85c + -0x2 * 0x1066 + 0xb * 0x3d0 == qnozr0['statusCode']) {
                      var k_54xct = qnozr0['data'];if (k_54xct['state']) {
                        var u4jxk8 = { 'userid': k_54xct['data']['user_id'], 'account': k_54xct['data']['nick_name'], 'token': k_54xct['data']['token'] };try {
                          wx['setStorageSync']('plat_sdk_token', k_54xct['data']['sdk_token']), wx['setStorageSync']('plat_uid', k_54xct['data']['user_id']), wx['setStorageSync']('plat_username', k_54xct['data']['username']), wx['setStorageSync']('wx_openid', k_54xct['data']['openid']), k_54xct['data']['ext'] && wx['setStorageSync']('plat_session_key', k_54xct['data']['ext']);
                        } catch (v2blmae) {}sw_h95t['login'] && sw_h95t['login'](-0x1 * 0x6cb + 0x1c * -0x5a + 0x10a3, u4jxk8);
                      } else sw_h95t['login'] && sw_h95t['login'](0x2 * -0x941 + -0x196c + 0x2bef, { 'errMsg': k_54xct['msg'] });
                    } else sw_h95t['login'] && sw_h95t['login'](-0x94 * 0x2e + 0xbf * -0xf + 0x25ca, { 'errMsg': '请求平台服务器失败\uFF01#1' });
                  }, 'fail': function (r6n0zo) {
                    sw_h95t['login'] && sw_h95t['login'](0x2425 + -0xb86 * -0x1 + -0x2faa, { 'errMsg': r6n0zo['errMsg'] });
                  } });
              }, 'fail': function (wi7h$9) {
                sw_h95t['login'] && sw_h95t['login'](-0xe0 * -0x3 + 0x2177 + -0x2416, { 'errMsg': wi7h$9['errMsg'] });
              } }) : wx['request']({ 'url': fkx_5tsc + '/partner/auth', 'method': 'POST', 'dataType': 'json', 'header': { 'content-type': 'application/x-www-form-urlencoded' }, 'data': s9_tcx5, 'success': function (e2abgvl) {
                if (console['log']('[SDK]登录结果\uFF1A'), console['log'](e2abgvl), -0x1fa9 * -0x1 + -0x15c5 + 0xd4 * -0xb == e2abgvl['statusCode']) {
                  var sh$7w9i = e2abgvl['data'];if (sh$7w9i['state']) {
                    var dzyroq0 = { 'userid': sh$7w9i['data']['user_id'], 'account': sh$7w9i['data']['nick_name'], 'token': sh$7w9i['data']['token'] };try {
                      wx['setStorageSync']('plat_sdk_token', sh$7w9i['data']['sdk_token']), wx['setStorageSync']('plat_uid', sh$7w9i['data']['user_id']), wx['setStorageSync']('plat_username', sh$7w9i['data']['username']), wx['setStorageSync']('wx_openid', sh$7w9i['data']['openid']), sh$7w9i['data']['ext'] && wx['setStorageSync']('plat_session_key', sh$7w9i['data']['ext']);
                    } catch (ks_tc5x) {}sw_h95t['login'] && sw_h95t['login'](-0x17ff + 0x1898 + -0x99, dzyroq0);
                  } else sw_h95t['login'] && sw_h95t['login'](-0xcf5 + -0x4a * 0x78 + 0x2fa6, { 'errMsg': sh$7w9i['msg'] });
                } else sw_h95t['login'] && sw_h95t['login'](0xc0e + -0x20e6 + 0x14d9, { 'errMsg': '请求平台服务器失败\uFF01#2' });
              } });
          } else sw_h95t['login'] && sw_h95t['login'](0x1bd4 + -0x9a9 * -0x4 + 0xcd * -0x53, { 'errMsg': x5_ks['errMsg'] });
        }, 'fail': function (xc9_s) {
          console['log']('微信登录失败' + JSON['stringify'](xc9_s)), (xc9_s['errMsg']['indexOf']('auth deny') > -(-0x1 * 0x18e1 + -0xb2b * -0x1 + 0xdb7) || xc9_s['errMsg']['indexOf']('auth denied') > -(-0x1 * 0x563 + -0x1a9b + 0x1fff)) && sw_h95t['login'] && sw_h95t['login'](-0x12ba + 0x4f9 * -0x4 + 0x1 * 0x269f, { 'errMsg': xc9_s['errMsg'] });
        } });
    }, 'checkGameVersion': function (l2apem, jk4u38p) {
      console['log']('[SDK]检查游戏版本'), wx['getStorageSync']('plat_sdk_token'), wx['request']({ 'url': fkx_5tsc + '/game/min/?ac=checkGameVersion', 'method': 'POST', 'dataType': 'json', 'header': { 'content-type': 'application/x-www-form-urlencoded' }, 'data': { 'game_pkg': fiw1h$['game_pkg'], 'partner_id': fiw1h$['partner_id'], 'game_ver': l2apem }, 'success': function (tk_5) {
          if (console['log']('[SDK]获取游戏版本结果'), console['log'](tk_5), -0x185 * -0x1 + 0x3 * -0x4b2 + 0xd59 == tk_5['statusCode']) {
            var j4m = tk_5['data'];j4m['state'] ? jk4u38p && jk4u38p(j4m['data']) : jk4u38p && jk4u38p({ 'develop': 0x0 });
          } else jk4u38p && jk4u38p({ 'develop': 0x0 });
        }, 'fail': function (eump3b) {
          console['log'](eump3b);
        } });
    }, 'pay': function (mp4j3, pamlb) {
      var z60$r1 = this;wx['checkSession']({ 'success': function () {
          z60$r1['startPay'](mp4j3, pamlb);
        }, 'fail': function () {
          console['log']('[SDK]session过期需要重新登录'), z60$r1['login']({}, function () {
            z60$r1['startPay'](mp4j3, pamlb);
          });
        } });
    }, 'startPay': function (ts_c5kx, is$7w9h) {
      console['log']('[SDK]调起支付\uFF0CCP传值\uFF1A'), console['log'](ts_c5kx);var on06rzq = this;sw_h95t['pay'] = 'function' == typeof is$7w9h ? is$7w9h : null, -0xd8e + -0x30d * -0x8 + -0xada;var lga2e = wx['getStorageSync']('plat_sdk_token'),
          n7ri16 = wx['getStorageSync']('plat_session_key');if (lga2e && n7ri16) {
        var v2ambl = wx['getSystemInfoSync'](),
            lpb2m = { 'cpbill': ts_c5kx['cpbill'], 'productid': ts_c5kx['productid'], 'productname': ts_c5kx['productname'], 'productdesc': ts_c5kx['productdesc'], 'serverid': ts_c5kx['serverid'], 'servername': ts_c5kx['servername'], 'roleid': ts_c5kx['roleid'], 'rolename': ts_c5kx['rolename'], 'rolelevel': ts_c5kx['rolelevel'], 'price': ts_c5kx['price'], 'extension': ts_c5kx['extension'], 'sdk_token': lga2e, 'session_key': n7ri16, 'platform': v2ambl['platform'] };on06rzq['order_data'] = lpb2m;var $1hwni = on06rzq['getPublicData']();$1hwni['order_data'] = JSON['stringify'](lpb2m), wx['request']({ 'url': fkx_5tsc + '/partner/order', 'method': 'POST', 'dataType': 'json', 'header': { 'content-type': 'application/x-www-form-urlencoded' }, 'data': $1hwni, 'success': function (u4kxj83) {
            if (console['log']('[SDK]完成创建订单'), console['log'](u4kxj83), 0x1e7e + 0x28 + -0x1dde == u4kxj83['statusCode']) {
              var u384jkx = u4kxj83['data'];u384jkx['state'] ? void (-0x252f + 0x24b7 * 0x1 + 0x6 * 0x14) === wx['requestPayment'] ? 'android' == v2ambl['platform'] || 'windows' == v2ambl['platform'] || 'devtools' == v2ambl['platform'] ? u384jkx['data']['is_android_pay'] ? on06rzq['kfPay'](u384jkx['data']) : on06rzq['gamePay'](u384jkx['data']) : u384jkx['data']['is_ios_pay'] ? 0x1 * 0x8c6 + 0x1f47 * 0x1 + -0x280c == u384jkx['data']['ios_pay_type'] && on06rzq['kfPay'](u384jkx['data']) : wx['showModal']({ 'title': '支付提示', 'content': '很抱歉，由于苹果政策，暂时不能支付，安卓手机不受影响', 'confirmText': '我知道了', 'showCancel': !(0xf2b + -0x94 * -0xc + -0x161a) }) : on06rzq['minPay'](u384jkx['data']) : sw_h95t['pay'] && sw_h95t['pay'](-0x8 * -0x23d + -0xe69 + -0x37e, { 'errMsg': u384jkx['msg'] });
            } else sw_h95t['login'] && sw_h95t['login'](0xe3c + -0x2d1 + -0xb6a, { 'errMsg': '请求平台服务器失败\uFF01#3' });
          } });
      } else sw_h95t['pay'] && sw_h95t['pay'](-0xb1b + 0x3bf + 0x75d, { 'errMsg': '用户未登录，支付失败！' });
    }, 'gamePay': function (nh$i17w) {
      var mva = this;nh$i17w['buyQuantity'] <= nh$i17w['balance'] ? (console['log']('[SDK]游戏币充值直接扣除'), wx['showModal']({ 'title': '支付提示', 'content': '您还有' + nh$i17w['balance'] + '个游戏币未消费，本次支付将扣除' + nh$i17w['buyQuantity'] + '游戏币', 'showCancel': !(0xe79 + -0x7 * -0x2b + 0xfa5 * -0x1), 'confirmText': '我知道了', 'success': function () {
          mva['gameGoPay'](nh$i17w);
        } })) : (console['log']('[SDK]调起米大师支付'), console['log'](nh$i17w), wx['requestMidasPayment']({ 'mode': 'game', 'env': nh$i17w['env'], 'offerId': nh$i17w['offerId'], 'currencyType': nh$i17w['currencyType'], 'platform': nh$i17w['platform'], 'buyQuantity': nh$i17w['buyQuantity'], 'zoneId': nh$i17w['zoneId'], 'success': function (ma8ep3) {
          'requestMidasPayment:ok' == ma8ep3['errMsg'] && mva['gameGoPay'](nh$i17w);
        }, 'fail': function ($h7iw) {
          -(0x501 + 0x266f + -0x2b6f) !== $h7iw['errMsg']['indexOf']('用户取消') ? sw_h95t['pay'] && sw_h95t['pay'](0x215f + -0x2621 * 0x1 + 0x4c4, { 'errMsg': '用户取消支付' }) : sw_h95t['pay'] && sw_h95t['pay'](0x2c0 + -0x25ce + -0x1 * -0x230f, { 'errMsg': '支付失败:' + $h7iw['errMsg'] + '(' + $h7iw['errCode'] + ')' });
        }, 'complete': function (ct95h) {} }));
    }, 'kfPay': function (tih59ws) {
      fpj83ue = tih59ws['orderId'], wx['showModal']({ 'title': '支付提示', 'content': '进入客服会话\uFF0C点击右下角小卡片或输入"cz"或"充值"获取支付链接', 'showCancel': !(0x22a + 0x1 * -0x1613 + 0x13ea), 'confirmText': '我知道了', 'success': function () {
          wx['openCustomerServiceConversation']({ 'showMessageCard': !(-0x2 * -0x20e + 0x52f * -0x5 + -0x15cf * -0x1), 'sendMessageTitle': '不用点这个卡片', 'sendMessageImg': 'https://static.357pk.net/uploads/2109/weixin_pay_img1.png' });
        } });
    }, 'gameGoPay': function (p2ambel, bm2pla) {
      console['log']('[SDK]米大师支付完毕\uFF0C通知服务器发货');var dqor = this,
          lve2gba = wx['getStorageSync']('plat_session_key');wx['request']({ 'url': fkx_5tsc + '/partner/pay/' + fiw1h$['partner_id'] + '/' + fiw1h$['game_pkg'] + '/', 'method': 'POST', 'dataType': 'json', 'header': { 'content-type': 'application/x-www-form-urlencoded' }, 'data': { 'order_id': p2ambel['orderId'], 'time': p2ambel['time'], 'sign': p2ambel['sign'], 'session_key': lve2gba }, 'success': function (_kj48cx) {
          if (console['log']('[SDK]米大师支付结果'), console['log'](_kj48cx), -0x1b5 + -0xb31 * 0x3 + 0x4 * 0x904 == _kj48cx['statusCode']) {
            if (-0x1019 + -0x18be + 0x28d8 == _kj48cx['data']['state']) {
              var hi17w$n = { 'cpOrderNo': dqor['order_data']['cpbill'], 'orderNo': p2ambel['orderId'], 'amount': dqor['order_data']['price'], 'extension': dqor['order_data']['extension'] };sw_h95t['pay'] && sw_h95t['pay'](0x155e + -0x1ec2 * -0x1 + -0x3420, hi17w$n);
            } else sw_h95t['pay'] && sw_h95t['pay'](-0x190b * 0x1 + -0xfc7 + 0x7 * 0x5d5, { 'errMsg': '支付失败' });
          }
        }, 'fail': function () {} });
    }, 'logCreateRole': function (ablv2e) {
      var melab2p = wx['getStorageSync']('plat_uid'),
          j3x8k4u = wx['getStorageSync']('plat_username'),
          k38jx = {};k38jx['user_id'] = melab2p, k38jx['user_name'] = j3x8k4u, k38jx['role_id'] = ablv2e['roleid'], k38jx['role_lev'] = ablv2e['rolelevel'], k38jx['role_name'] = ablv2e['rolename'], k38jx['server_id'] = ablv2e['serverid'], ablv2e['roleid'] && ablv2e['serverid'] && (fm2pebl = { 'role_id': ablv2e['roleid'], 'server_id': ablv2e['serverid'] }), this['log']('create', k38jx);
    }, 'logEnterGame': function (zr06dqo) {
      var tcs5_9x = wx['getStorageSync']('plat_uid'),
          zdr6o = wx['getStorageSync']('plat_username'),
          mp3beau = {};mp3beau['user_id'] = tcs5_9x, mp3beau['user_name'] = zdr6o, mp3beau['role_id'] = zr06dqo['roleid'], mp3beau['role_lev'] = zr06dqo['rolelevel'], mp3beau['role_name'] = zr06dqo['rolename'], mp3beau['server_id'] = zr06dqo['serverid'], zr06dqo['roleid'] && zr06dqo['serverid'] && (fm2pebl = { 'role_id': zr06dqo['roleid'], 'server_id': zr06dqo['serverid'] }), this['log']('enter', mp3beau);
    }, 'logRoleUpLevel': function (s7hwti9) {
      var ith9ws5 = wx['getStorageSync']('plat_uid'),
          ea2mb = wx['getStorageSync']('plat_username'),
          n6w$i1 = {};n6w$i1['user_id'] = ith9ws5, n6w$i1['user_name'] = ea2mb, n6w$i1['role_id'] = s7hwti9['roleid'], n6w$i1['role_lev'] = s7hwti9['rolelevel'], n6w$i1['role_name'] = s7hwti9['rolename'], n6w$i1['server_id'] = s7hwti9['serverid'], s7hwti9['roleid'] && s7hwti9['serverid'] && (fm2pebl = { 'role_id': s7hwti9['roleid'], 'server_id': s7hwti9['serverid'] }), this['log']('levelup', n6w$i1);
    }, 'uuid': function (sw9ih5t, vb2alem) {
      var r6d0o,
          _st59c,
          j8k4xcu = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'['split'](''),
          _ckxt = [];if (sw9ih5t = sw9ih5t || j8k4xcu['length'], vb2alem) {
        for (r6d0o = 0x1a73 + -0x409 + -0x2 * 0xb35; r6d0o < vb2alem; r6d0o++) _ckxt[r6d0o] = j8k4xcu[0x2b7 * 0x1 + 0x700 + -0x9b7 | Math['random']() * sw9ih5t];
      } else {
        for (_ckxt[-0x5d2 * 0x4 + 0xe5e + -0x2 * -0x479] = _ckxt[-0x2ff * -0x3 + -0x1 * 0x3ba + -0x536] = _ckxt[0x22e7 + 0x548 + -0x281d] = _ckxt[0x195c + 0x22a0 + -0x10d * 0x39] = '-', _ckxt[-0x1 * 0xe3 + 0x1 * -0x648 + 0x739] = '4', r6d0o = 0xb63 + -0x1d09 + 0x8d3 * 0x2; r6d0o < 0x1 * -0x1ac0 + 0x260b * -0x1 + 0x40ef; r6d0o++) _ckxt[r6d0o] || (_st59c = 0x10e2 + -0xa * 0x182 + -0x1ce | (-0x2b2 + 0x2615 + -0x2353) * Math['random'](), _ckxt[r6d0o] = j8k4xcu[0x1f89 + 0x1ebf + -0x3e35 == r6d0o ? 0x1d * -0xbf + 0x14 * 0x141 + -0x36e & _st59c | -0x1a04 + 0xc19 + 0xdf3 * 0x1 : _st59c]);
      }return _ckxt['join']('');
    }, 'getPublicData': function () {
      var nh71$wi = wx['getSystemInfoSync'](),
          $016r = wx['getStorageSync']('plat_uuid'),
          h9is5t = wx['getStorageSync']('plat_idfv'),
          w71$i9h = wx['getStorageSync']('plat_ad_code');return { 'game_id': fiw1h$['game_id'], 'game_pkg': fiw1h$['game_pkg'], 'partner_id': fiw1h$['partner_id'], 'ad_code': w71$i9h, 'uuid': $016r, 'idfv': h9is5t, 'dname': nh71$wi['model'], 'mac': '0000', 'net_type': -0x1430 + -0x1f0 * -0x2 + 0x1050 == nh71$wi['wifiSignal'] ? '4G' : 'WIFI', 'os_ver': nh71$wi['system'], 'sdk_ver': nh71$wi['version'], 'game_ver': frn7z$6, 'device': 'android' == nh71$wi['platform'] ? 0x2c3 + 0x74c * 0x2 + -0x115a : -0x19f8 + -0x12a7 + 0x2ca1, 'is_from_min': 0x1 };
    }, 'log': function (vbal2, xuk34j8) {
      var w617$in = this['getPublicData']();for (var wh5ti in xuk34j8) w617$in[wh5ti] = xuk34j8[wh5ti];console['log']('[SDK]上报数据\uFF1A' + vbal2), console['log'](w617$in), wx['request']({ 'url': fkx_5tsc + '/partner/h5Log/?type=' + vbal2 + '&data=' + encodeURIComponent(JSON['stringify'](w617$in)) });
    }, 'getDate': function () {
      var $7r1i = new Date();return $7r1i['getFullYear']() + '-' + $7r1i['getMonth']() + '-' + $7r1i['getDate']();
    }, 'downloadClient': function () {
      var yqor0dz = '微端-不用点这个卡片-' + wx['getStorageSync']('wx_openid');wx['showModal']({ 'title': '微端下载提示', 'content': '进入客服会话，点击右下角小卡片获取微端下载链接', 'showCancel': !(-0xa * 0xbf + -0x13e4 + 0x1b5b), 'confirmText': '我知道了', 'success': function () {
          var cst_5k = { 'showMessageCard': !(0xa8b + -0x2 * 0x5c1 + -0xd * -0x13), 'sendMessageTitle': yqor0dz, 'sendMessageImg': 'https://static.357pk.net/uploads/2109/weixin_download_img2.jpg' };wx['openCustomerServiceConversation'](cst_5k);
        } });
    }, 'checkMsg': function (cs5x9t, c84j_k) {
      console['log']('[SDK]查看文本是否有违规内容');var m83upae = wx['getStorageSync']('plat_sdk_token');wx['request']({ 'url': fkx_5tsc + '/game/min/?ac=msgCheck', 'method': 'POST', 'dataType': 'json', 'header': { 'content-type': 'application/x-www-form-urlencoded' }, 'data': { 'game_pkg': fiw1h$['game_pkg'], 'partner_id': fiw1h$['partner_id'], 'sdk_token': m83upae, 'content': cs5x9t }, 'success': function (ge2bavl) {
          console['log']('[SDK]查看文本是否有违规内容结果返回:'), c84j_k && c84j_k(0x26da + -0x16a0 + 0x3e * -0x43 == ge2bavl['data']['code'] ? 0xbb9 * -0x1 + -0x5 * 0x761 + 0x1cd * 0x1b : -0x39 * 0xb + 0x1774 + -0x1 * 0x1501, ge2bavl['data']['msg']);
        } });
    }, 'checkMsgV2': function (kcs_x5t, pebma3) {
      console['log']('[SDK]查看文本是否有违规内容');var xktcs5_ = wx['getStorageSync']('plat_sdk_token');wx['request']({ 'url': fkx_5tsc + '/game/min/?ac=msgCheckV2', 'method': 'POST', 'dataType': 'json', 'header': { 'content-type': 'application/x-www-form-urlencoded' }, 'data': { 'game_pkg': fiw1h$['game_pkg'], 'partner_id': fiw1h$['partner_id'], 'sdk_token': xktcs5_, 'content': kcs_x5t, 'scene': 0x1 }, 'success': function (ts9i7w) {
          console['log']('[SDK]查看文本是否有违规内容结果返回:'), pebma3 && pebma3(0x23df + -0x1 * -0x9e7 + -0x2dc6 == ts9i7w['data']['code'] ? -0x22a1 + -0x123 * -0x8 + -0x198a * -0x1 : 0x1181 * -0x2 + 0x3 * -0x349 + 0x2cdd, ts9i7w['data']['msg']);
        } });
    }, 'sendMessage': function (hsi7$w9, cs_5kx, $inw176) {
      console['log']('[SDK]发送订阅消息');var noqr0z6 = wx['getStorageSync']('plat_sdk_token');wx['request']({ 'url': fkx_5tsc + '/game/min/?ac=sendMessage', 'method': 'POST', 'dataType': 'json', 'header': { 'content-type': 'application/x-www-form-urlencoded' }, 'data': { 'game_pkg': fiw1h$['game_pkg'], 'partner_id': fiw1h$['partner_id'], 'sdk_token': noqr0z6, 'template_id': hsi7$w9, 'data': cs_5kx }, 'success': function (sh9i7w) {
          console['log']('[SDK]订阅消息发送成功'), $inw176 && $inw176(-0x1b21 * 0x1 + -0x1d5 * 0x7 + -0x13fa * -0x2 == sh9i7w['data']['code'] ? -0xe6 * -0x13 + 0x4 * 0x543 + -0x377 * 0xb : 0x174b * 0x1 + 0x2507 + 0x2 * -0x1e29, sh9i7w['data']['msg']);
        } });
    } };
}function fmvaeb(w17nih$, ck4_8, m8pae3u) {
  w17nih$ in fma83eu && fma83eu[w17nih$](ck4_8, m8pae3u);
}const fs9iwt = {};window['cwan'] = fs9iwt, fs9iwt['init'] = function (roq0z, hw9s5_t) {
  fmvaeb('init', roq0z, hw9s5_t);
}, fs9iwt['login'] = function (ag2l) {
  fmvaeb('login', '', ag2l);
}, fs9iwt['pay'] = function (mp8eua3, n1i6r$7) {
  fmvaeb('pay', mp8eua3, n1i6r$7);
}, fs9iwt['logCreateRole'] = function (w59h_t, r$6ni7, laeg2bv, lvebm2a, c4x_8j) {
  fmvaeb('logCreateRole', { 'serverid': w59h_t, 'servername': r$6ni7, 'roleid': laeg2bv, 'rolename': lvebm2a, 'rolelevel': c4x_8j });
}, fs9iwt['logEnterGame'] = function (mbae2lv, tih97, lba2epm, b23mpa, gba2le) {
  fmvaeb('logEnterGame', { 'serverid': mbae2lv, 'servername': tih97, 'roleid': lba2epm, 'rolename': b23mpa, 'rolelevel': gba2le });
}, fs9iwt['logRoleUpLevel'] = function (kc8_xj4, me3au8p, t7hw, odrzq, c54_xkt) {
  fmvaeb('logRoleUpLevel', { 'serverid': kc8_xj4, 'servername': me3au8p, 'roleid': t7hw, 'rolename': odrzq, 'rolelevel': c54_xkt });
}, fs9iwt['downloadClient'] = function () {
  fmvaeb('downloadClient');
}, fs9iwt['getConfig'] = function () {
  return { 'game_id': fiw1h$['game_id'], 'game_pkg': fiw1h$['game_pkg'], 'partner_id': fiw1h$['partner_id'] };
}, fs9iwt['getPublicData'] = function () {
  fmvaeb('getPublicData');
}, fs9iwt['checkMsg'] = function (yrdz0, r1$60n) {
  fmvaeb('checkMsg', yrdz0, r1$60n);
}, fs9iwt['checkMsgV2'] = function (xtck54_, shiw$9) {
  fmvaeb('checkMsgV2', xtck54_, shiw$9);
}, fs9iwt['sendMessage'] = function (n$ir617, u38pjk4, k8pj3) {
  fmvaeb('sendMessage', n$ir617, u38pjk4, k8pj3);
};