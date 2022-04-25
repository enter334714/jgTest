var H = wx.$F;
let fq6n0zr1 = { 'game_id': '11', 'game_pkg': 'wzcq-q2-_q2wxxcxgrzh_J', 'partner_id': '4', 'is_auth': !(-0x1998 + 0x2663 + -0xcca), 'from': null };window['config'] = fq6n0zr1;let fkt5xc4_ = fiwt5sh9(),
    fv2lgbe = 'https://sdk.5tun.cn',
    fj3peum = null,
    fc5_jk4 = null,
    f_5ch9s = '';function fiwt5sh9() {
  var puk834j = {};return { 'order_data': {}, 'init': function (oqzn06r, pmuea3b) {
      f_5ch9s = oqzn06r && oqzn06r['game_ver'] ? oqzn06r['game_ver'] : 0x1e3c + -0x20da + 0x5 * 0x86, console['log']('[SDK]CP调用init接口');var o6zqrn0,
          v2gaeb = wx['getStorageSync']('plat_uuid');v2gaeb ? o6zqrn0 = 0x4e * 0x9 + 0x39 * -0x31 + -0x7b * -0x11 : (v2gaeb = this['uuid'](-0x80b + 0x1 * -0x145f + 0x97e * 0x3, 0xb * -0x12e + 0x1d15 + -0x1 * 0xffb), wx['setStorageSync']('plat_uuid', v2gaeb), o6zqrn0 = 0x3 * -0xc73 + 0x68 + -0x2 * -0x1279);var stc = wx['getStorageSync']('plat_idfv');stc || (stc = this['uuid'](-0x2 * -0xae5 + -0x4ff * 0x1 + -0x10bb, 0x14d * 0x10 + -0x17 * 0xd3 + 0x1bb * -0x1), wx['setStorageSync']('plat_idfv', stc));var bl2emva = wx['getLaunchOptionsSync'](),
          in716w$ = bl2emva['scene'] ? bl2emva['scene'] : '';if (console['log']('[SDK]小游戏启动参数'), console['log'](bl2emva), o6zqrn0 && bl2emva['query'] && bl2emva['query']['ad_code'] && wx['setStorageSync']('plat_ad_code', bl2emva['query']['ad_code']), bl2emva['query'] && bl2emva['query']['from'] && '' != bl2emva['query']['from']) o6zqrn0 && wx['setStorageSync']('plat_from', bl2emva['query']['from']), fq6n0zr1['from'] = bl2emva['query']['from'];else {
        var $671ni = wx['getStorageSync']('plat_from');$671ni || '' == $671ni || (fq6n0zr1['from'] = $671ni);
      }console['log'](fq6n0zr1['from']);var upbm3ae = { 'install': o6zqrn0, 'scene': in716w$ };this['log']('start', upbm3ae), wx['showShareMenu'](), f_5ch9s && this['checkGameVersion'](f_5ch9s, function (ih7stw9) {
        pmuea3b && pmuea3b(ih7stw9);
      });
    }, 'login': function (sw_95th, pa3ubme) {
      console['log']('[SDK]调起登录');var kct5_4x = this;puk834j['login'] = 'function' == typeof pa3ubme ? pa3ubme : null, fq6n0zr1['is_auth'] ? wx['getSetting']({ 'success': function (mp3abeu) {
          if (mp3abeu['authSetting']['scope.userInfo']) console['log']('[SDK]获得授权设置\uFF1A已授权'), kct5_4x['do_login']();else {
            console['log']('[SDK]获得授权设置\uFF1A未授权'), wx['hideLoading']({});var b3umaep = wx['getSystemInfoSync'](),
                x_j8kc = (b3umaep['screenWidth'], b3umaep['screenHeight'], wx['createUserInfoButton']({ 'type': 'text', 'text': '授权登录游戏', 'withCredentials': !(0x1 * 0x92f + 0x16 * 0x76 + -0x1352), 'style': { 'top': b3umaep['windowHeight'] / (-0xd7d + 0x347 * 0x3 + -0xe * -0x43) + b3umaep['windowHeight'] / (-0x4 * -0x887 + -0x1288 + 0xf9 * -0x10), 'left': b3umaep['windowWidth'] / (0x1 * 0x1fc9 + -0x1 * 0x1235 + -0xd92) - (-0x698 + -0x1737 + -0x1 * -0x1e33), 'width': 0xc8, 'height': 0x28, 'lineHeight': 0x28, 'backgroundColor': '#07c160', 'color': '#ffffff', 'textAlign': 'center', 'fontSize': 0x10, 'borderRadius': 0x4 } }));x_j8kc['show'](), x_j8kc['onTap'](vgbe2al => {
              console['log'](vgbe2al), f13BL8({ 'title': '正在登录游戏' }), 'getUserInfo:ok' == vgbe2al['errMsg'] ? kct5_4x['do_login']({ 'head_img': vgbe2al['userInfo']['avatarUrl'] || '', 'nick_name': vgbe2al['userInfo']['nickName'] || '' }) : kct5_4x['do_login'](), x_j8kc['destroy']();
            });
          }
        }, 'fail': function () {
          console['log']('[SDK]获得授权设置\uFF1A失败'), kct5_4x['do_login']();
        } }) : (console['log']('[SDK]授权登录' + fq6n0zr1['is_auth']), kct5_4x['do_login']());
    }, 'do_login': function (znrq160) {
      var rq61 = this;wx['login']({ 'success': function (n061r$) {
          if (console['log']('微信登录成功返回' + JSON['stringify'](n061r$)), n061r$['code']) {
            var rd0yzqo = rq61['getPublicData']();rd0yzqo['mo'] = 0x1627 + 0x1eac + -0x2 * 0x1a69, rd0yzqo['code'] = n061r$['code'], rd0yzqo['nick_name'] = znrq160 ? znrq160['nick_name'] : '', rd0yzqo['head_img'] = znrq160 ? znrq160['head_img'] : '', fq6n0zr1['is_auth'] ? wx['getUserInfo']({ 'success': function (x4ck8_j) {
                var cuk4j8x = x4ck8_j['encryptedData'],
                    hts9w_5 = x4ck8_j['iv'],
                    zy0ordq = x4ck8_j['signature'];rd0yzqo['encryptedData'] = cuk4j8x, rd0yzqo['iv'] = hts9w_5, rd0yzqo['signature'] = zy0ordq, wx['request']({ 'url': fv2lgbe + '/partner/auth', 'method': 'POST', 'dataType': 'json', 'header': { 'content-type': 'application/x-www-form-urlencoded' }, 'data': rd0yzqo, 'success': function (r1zq6) {
                    if (console['log']('[SDK]登录结果\uFF1A'), console['log'](r1zq6), -0x2fb * -0xd + -0x11f7 + -0x1400 * 0x1 == r1zq6['statusCode']) {
                      var q6zrd0 = r1zq6['data'];if (q6zrd0['state']) {
                        var zron6q0 = { 'userid': q6zrd0['data']['user_id'], 'account': q6zrd0['data']['nick_name'], 'token': q6zrd0['data']['token'] };try {
                          wx['setStorageSync']('plat_sdk_token', q6zrd0['data']['sdk_token']), wx['setStorageSync']('plat_uid', q6zrd0['data']['user_id']), wx['setStorageSync']('plat_username', q6zrd0['data']['username']), wx['setStorageSync']('wx_openid', q6zrd0['data']['openid']), q6zrd0['data']['ext'] && wx['setStorageSync']('plat_session_key', q6zrd0['data']['ext']);
                        } catch (whs79$) {}puk834j['login'] && puk834j['login'](-0x83 * 0x16 + 0xae0 + -0x31 * -0x2, zron6q0);
                      } else puk834j['login'] && puk834j['login'](0x10a0 + 0x11 + -0x10b0, { 'errMsg': q6zrd0['msg'] });
                    } else puk834j['login'] && puk834j['login'](-0x101f + 0x9c * 0x15 + 0x354, { 'errMsg': '请求平台服务器失败\uFF01#1' });
                  }, 'fail': function (bmepau) {
                    puk834j['login'] && puk834j['login'](-0x3 * -0x5b1 + -0x1 * -0x131c + 0x1217 * -0x2, { 'errMsg': bmepau['errMsg'] });
                  } });
              }, 'fail': function (x_j8k) {
                puk834j['login'] && puk834j['login'](0x61d + 0x1 * 0x22bf + 0x1 * -0x28db, { 'errMsg': x_j8k['errMsg'] });
              } }) : wx['request']({ 'url': fv2lgbe + '/partner/auth', 'method': 'POST', 'dataType': 'json', 'header': { 'content-type': 'application/x-www-form-urlencoded' }, 'data': rd0yzqo, 'success': function (ku48jx3) {
                if (console['log']('[SDK]登录结果\uFF1A'), console['log'](ku48jx3), 0x421 + -0x1 * -0x5cb + 0x1a * -0x5a == ku48jx3['statusCode']) {
                  var pbaem2 = ku48jx3['data'];if (pbaem2['state']) {
                    var qdzr0o = { 'userid': pbaem2['data']['user_id'], 'account': pbaem2['data']['nick_name'], 'token': pbaem2['data']['token'] };try {
                      wx['setStorageSync']('plat_sdk_token', pbaem2['data']['sdk_token']), wx['setStorageSync']('plat_uid', pbaem2['data']['user_id']), wx['setStorageSync']('plat_username', pbaem2['data']['username']), wx['setStorageSync']('wx_openid', pbaem2['data']['openid']), pbaem2['data']['ext'] && wx['setStorageSync']('plat_session_key', pbaem2['data']['ext']);
                    } catch (jkx_c84) {}puk834j['login'] && puk834j['login'](-0x22b9 + -0x71 * -0x4f + 0x26 * -0x1, qdzr0o);
                  } else puk834j['login'] && puk834j['login'](-0x2330 + -0x2 * 0x12e7 + 0x48ff, { 'errMsg': pbaem2['msg'] });
                } else puk834j['login'] && puk834j['login'](-0x8b * -0x23 + 0xc1 * -0xa + -0x9 * 0x146, { 'errMsg': '请求平台服务器失败\uFF01#2' });
              } });
          } else puk834j['login'] && puk834j['login'](-0x14a1 + -0x18aa * 0x1 + 0x2d4c, { 'errMsg': n061r$['errMsg'] });
        }, 'fail': function (i$r7n) {
          console['log']('微信登录失败' + JSON['stringify'](i$r7n)), (i$r7n['errMsg']['indexOf']('auth deny') > -(0x5b * -0x6c + 0x1e90 + 0x7d5) || i$r7n['errMsg']['indexOf']('auth denied') > -(-0xe20 + -0x702 + -0x1523 * -0x1)) && puk834j['login'] && puk834j['login'](0x198 + 0xf27 * -0x2 + 0x1cb7, { 'errMsg': i$r7n['errMsg'] });
        } });
    }, 'checkGameVersion': function (pkj38, epbl2) {
      console['log']('[SDK]检查游戏版本'), wx['getStorageSync']('plat_sdk_token'), wx['request']({ 'url': fv2lgbe + '/game/min/?ac=checkGameVersion', 'method': 'POST', 'dataType': 'json', 'header': { 'content-type': 'application/x-www-form-urlencoded' }, 'data': { 'game_pkg': fq6n0zr1['game_pkg'], 'partner_id': fq6n0zr1['partner_id'], 'game_ver': pkj38 }, 'success': function (h9its7w) {
          if (console['log']('[SDK]获取游戏版本结果'), console['log'](h9its7w), -0x195b + -0x800 + 0x2223 == h9its7w['statusCode']) {
            var $zr71n6 = h9its7w['data'];$zr71n6['state'] ? epbl2 && epbl2($zr71n6['data']) : epbl2 && epbl2({ 'develop': 0x0 });
          } else epbl2 && epbl2({ 'develop': 0x0 });
        }, 'fail': function (s7$h9iw) {
          console['log'](s7$h9iw);
        } });
    }, 'pay': function (_shw59t, jux348k) {
      var tw9hi7s = this;wx['checkSession']({ 'success': function () {
          tw9hi7s['startPay'](_shw59t, jux348k);
        }, 'fail': function () {
          console['log']('[SDK]session过期需要重新登录'), tw9hi7s['login']({}, function () {
            tw9hi7s['startPay'](_shw59t, jux348k);
          });
        } });
    }, 'startPay': function (_th9sc, a2pbem3) {
      console['log']('[SDK]调起支付\uFF0CCP传值\uFF1A'), console['log'](_th9sc);var c_kxs = this;puk834j['pay'] = 'function' == typeof a2pbem3 ? a2pbem3 : null, 0x19 * -0x4f + -0x1e12 + 0x25c9;var n$hi7w1 = wx['getStorageSync']('plat_sdk_token'),
          h5sw = wx['getStorageSync']('plat_session_key');if (n$hi7w1 && h5sw) {
        var ws79$ih = wx['getSystemInfoSync'](),
            niw16$7 = { 'cpbill': _th9sc['cpbill'], 'productid': _th9sc['productid'], 'productname': _th9sc['productname'], 'productdesc': _th9sc['productdesc'], 'serverid': _th9sc['serverid'], 'servername': _th9sc['servername'], 'roleid': _th9sc['roleid'], 'rolename': _th9sc['rolename'], 'rolelevel': _th9sc['rolelevel'], 'price': _th9sc['price'], 'extension': _th9sc['extension'], 'sdk_token': n$hi7w1, 'session_key': h5sw, 'platform': ws79$ih['platform'] };c_kxs['order_data'] = niw16$7;var al2epbm = c_kxs['getPublicData']();al2epbm['order_data'] = JSON['stringify'](niw16$7), wx['request']({ 'url': fv2lgbe + '/partner/order', 'method': 'POST', 'dataType': 'json', 'header': { 'content-type': 'application/x-www-form-urlencoded' }, 'data': al2epbm, 'success': function (zr60$n1) {
            if (console['log']('[SDK]完成创建订单'), console['log'](zr60$n1), 0xdf * 0x1 + -0x1 * 0x12c1 + 0x955 * 0x2 == zr60$n1['statusCode']) {
              var k4j38 = zr60$n1['data'];k4j38['state'] ? void (-0x1445 + 0x21 * -0x4f + 0x1e74) === wx['requestPayment'] ? 'android' == ws79$ih['platform'] || 'windows' == ws79$ih['platform'] || 'devtools' == ws79$ih['platform'] ? k4j38['data']['is_android_pay'] ? c_kxs['kfPay'](k4j38['data']) : c_kxs['gamePay'](k4j38['data']) : k4j38['data']['is_ios_pay'] ? -0x4 * 0x8c0 + 0xc4 + 0x223d == k4j38['data']['ios_pay_type'] && c_kxs['kfPay'](k4j38['data']) : wx['showModal']({ 'title': '支付提示', 'content': '很抱歉，由于苹果政策，暂时不能支付，安卓手机不受影响', 'confirmText': '我知道了', 'showCancel': !(-0x3 * 0x56e + 0x2dd * -0x1 + -0x265 * -0x8) }) : c_kxs['minPay'](k4j38['data']) : puk834j['pay'] && puk834j['pay'](-0x3ef + -0x1e5b + 0x1 * 0x224b, { 'errMsg': k4j38['msg'] });
            } else puk834j['login'] && puk834j['login'](-0xbc + -0x1a7a + 0x1b37 * 0x1, { 'errMsg': '请求平台服务器失败\uFF01#3' });
          } });
      } else puk834j['pay'] && puk834j['pay'](0x52d + 0x1b00 + -0x202c * 0x1, { 'errMsg': '用户未登录，支付失败！' });
    }, 'gamePay': function (jme3) {
      var nz10 = this;jme3['buyQuantity'] <= jme3['balance'] ? (console['log']('[SDK]游戏币充值直接扣除'), wx['showModal']({ 'title': '支付提示', 'content': '您还有' + jme3['balance'] + '个游戏币未消费，本次支付将扣除' + jme3['buyQuantity'] + '游戏币', 'showCancel': !(-0xee1 * -0x2 + 0x2205 + -0x3fc6), 'confirmText': '我知道了', 'success': function () {
          nz10['gameGoPay'](jme3);
        } })) : (console['log']('[SDK]调起米大师支付'), console['log'](jme3), wx['requestMidasPayment']({ 'mode': 'game', 'env': jme3['env'], 'offerId': jme3['offerId'], 'currencyType': jme3['currencyType'], 'platform': jme3['platform'], 'buyQuantity': jme3['buyQuantity'], 'zoneId': jme3['zoneId'], 'success': function (nrqz01) {
          'requestMidasPayment:ok' == nrqz01['errMsg'] && nz10['gameGoPay'](jme3);
        }, 'fail': function (_54xtc) {
          -(0xd8a * -0x2 + -0x1bd * 0xd + -0x31ae * -0x1) !== _54xtc['errMsg']['indexOf']('用户取消') ? puk834j['pay'] && puk834j['pay'](-0x23f0 + -0xfcf + -0x1 * -0x33c1, { 'errMsg': '用户取消支付' }) : puk834j['pay'] && puk834j['pay'](0x30d * 0x5 + -0x1 * -0x7 + -0xf47, { 'errMsg': '支付失败:' + _54xtc['errMsg'] + '(' + _54xtc['errCode'] + ')' });
        }, 'complete': function (sctkx5) {} }));
    }, 'kfPay': function (nz610q) {
      fc5_jk4 = nz610q['orderId'], wx['showModal']({ 'title': '支付提示', 'content': '进入客服会话\uFF0C点击右下角小卡片或输入"cz"或"充值"获取支付链接', 'showCancel': !(-0x12 * 0x3f + 0x2 * -0xf7b + -0x29 * -0xdd), 'confirmText': '我知道了', 'success': function () {
          wx['openCustomerServiceConversation']({ 'showMessageCard': !(-0x4a0 + 0x1a9 + -0xfd * -0x3), 'sendMessageTitle': '不用点这个卡片', 'sendMessageImg': 'https://static.357pk.net/uploads/2109/weixin_pay_img1.png' });
        } });
    }, 'gameGoPay': function (lpe2ab, wh19$7i) {
      console['log']('[SDK]米大师支付完毕\uFF0C通知服务器发货');var dqr0o = this,
          u3emb = wx['getStorageSync']('plat_session_key');wx['request']({ 'url': fv2lgbe + '/partner/pay/' + fq6n0zr1['partner_id'] + '/' + fq6n0zr1['game_pkg'] + '/', 'method': 'POST', 'dataType': 'json', 'header': { 'content-type': 'application/x-www-form-urlencoded' }, 'data': { 'order_id': lpe2ab['orderId'], 'time': lpe2ab['time'], 'sign': lpe2ab['sign'], 'session_key': u3emb }, 'success': function (w7$s9hi) {
          if (console['log']('[SDK]米大师支付结果'), console['log'](w7$s9hi), -0x2085 + 0x20f4 + 0x59 == w7$s9hi['statusCode']) {
            if (0xb3 * -0x7 + 0x2472 + -0x1f8c == w7$s9hi['data']['state']) {
              var iwh7s = { 'cpOrderNo': dqr0o['order_data']['cpbill'], 'orderNo': lpe2ab['orderId'], 'amount': dqr0o['order_data']['price'], 'extension': dqr0o['order_data']['extension'] };puk834j['pay'] && puk834j['pay'](-0x9a3 + -0x5f * -0x1a + -0x3 * 0x1, iwh7s);
            } else puk834j['pay'] && puk834j['pay'](0x1062 + 0xa01 + 0x1a62 * -0x1, { 'errMsg': '支付失败' });
          }
        }, 'fail': function () {} });
    }, 'logCreateRole': function (r1i6n) {
      var n0r1$6z = wx['getStorageSync']('plat_uid'),
          ujpm8e = wx['getStorageSync']('plat_username'),
          _s5ctxk = {};_s5ctxk['user_id'] = n0r1$6z, _s5ctxk['user_name'] = ujpm8e, _s5ctxk['role_id'] = r1i6n['roleid'], _s5ctxk['role_lev'] = r1i6n['rolelevel'], _s5ctxk['role_name'] = r1i6n['rolename'], _s5ctxk['server_id'] = r1i6n['serverid'], r1i6n['roleid'] && r1i6n['serverid'] && (fj3peum = { 'role_id': r1i6n['roleid'], 'server_id': r1i6n['serverid'] }), this['log']('create', _s5ctxk);
    }, 'logEnterGame': function (lmp2ab) {
      var $w1hn7i = wx['getStorageSync']('plat_uid'),
          si5wth = wx['getStorageSync']('plat_username'),
          _h5wts = {};_h5wts['user_id'] = $w1hn7i, _h5wts['user_name'] = si5wth, _h5wts['role_id'] = lmp2ab['roleid'], _h5wts['role_lev'] = lmp2ab['rolelevel'], _h5wts['role_name'] = lmp2ab['rolename'], _h5wts['server_id'] = lmp2ab['serverid'], lmp2ab['roleid'] && lmp2ab['serverid'] && (fj3peum = { 'role_id': lmp2ab['roleid'], 'server_id': lmp2ab['serverid'] }), this['log']('enter', _h5wts);
    }, 'logRoleUpLevel': function (_k8xj4c) {
      var lvageb = wx['getStorageSync']('plat_uid'),
          jx34k8 = wx['getStorageSync']('plat_username'),
          k_45cjx = {};k_45cjx['user_id'] = lvageb, k_45cjx['user_name'] = jx34k8, k_45cjx['role_id'] = _k8xj4c['roleid'], k_45cjx['role_lev'] = _k8xj4c['rolelevel'], k_45cjx['role_name'] = _k8xj4c['rolename'], k_45cjx['server_id'] = _k8xj4c['serverid'], _k8xj4c['roleid'] && _k8xj4c['serverid'] && (fj3peum = { 'role_id': _k8xj4c['roleid'], 'server_id': _k8xj4c['serverid'] }), this['log']('levelup', k_45cjx);
    }, 'uuid': function (rzoy, w$9sh7i) {
      var xkj38u,
          elamb2p,
          cj_k5 = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'['split'](''),
          z06r$1 = [];if (rzoy = rzoy || cj_k5['length'], w$9sh7i) {
        for (xkj38u = 0xec3 * 0x2 + -0x5df * -0x3 + -0x2f23; xkj38u < w$9sh7i; xkj38u++) z06r$1[xkj38u] = cj_k5[-0x5 * 0x66d + 0x1df1 + 0x230 | Math['random']() * rzoy];
      } else {
        for (z06r$1[-0xf54 + -0x1ee1 + -0x13 * -0x26f] = z06r$1[-0x191f + 0xd04 + -0x614 * -0x2] = z06r$1[-0x2 * -0xc84 + 0x19d6 + 0x32cc * -0x1] = z06r$1[-0x2 * -0x7f9 + -0x29 * -0x1d + 0x1 * -0x1480] = '-', z06r$1[0x19 * 0x87 + -0x11 * -0xc1 + -0x19f2] = '4', xkj38u = -0x1f8 + -0x71b + 0x65 * 0x17; xkj38u < 0x9e6 + -0x5 * -0x51 + -0xb57; xkj38u++) z06r$1[xkj38u] || (elamb2p = 0x226c + 0x15a9 + 0x803 * -0x7 | (0x3c8 + 0x197a + -0x1d32 * 0x1) * Math['random'](), z06r$1[xkj38u] = cj_k5[0x21e3 + -0x922 + -0x3 * 0x83a == xkj38u ? 0x66e + 0x25cd + -0x2c38 & elamb2p | 0xf3 + -0xc8 + -0x23 : elamb2p]);
      }return z06r$1['join']('');
    }, 'getPublicData': function () {
      var vbm2ae = wx['getSystemInfoSync'](),
          p3am = wx['getStorageSync']('plat_uuid'),
          tihw7s = wx['getStorageSync']('plat_idfv'),
          e3um8j = wx['getStorageSync']('plat_ad_code');return { 'game_id': fq6n0zr1['game_id'], 'game_pkg': fq6n0zr1['game_pkg'], 'partner_id': fq6n0zr1['partner_id'], 'ad_code': e3um8j, 'uuid': p3am, 'idfv': tihw7s, 'dname': vbm2ae['model'], 'mac': '0000', 'net_type': 0x15ab + 0xccc + -0x2277 == vbm2ae['wifiSignal'] ? '4G' : 'WIFI', 'os_ver': vbm2ae['system'], 'sdk_ver': vbm2ae['version'], 'game_ver': f_5ch9s, 'device': 'android' == vbm2ae['platform'] ? 0x3e6 * 0x7 + 0x55 * -0x1c + -0x11fd : 0xa6b + -0x1 * -0x351 + -0x1f6 * 0x7, 'is_from_min': 0x1 };
    }, 'log': function (rz7n6, $i617wn) {
      var s5w_9h = this['getPublicData']();for (var r6i$17 in $i617wn) s5w_9h[r6i$17] = $i617wn[r6i$17];console['log']('[SDK]上报数据\uFF1A' + rz7n6), console['log'](s5w_9h), wx['request']({ 'url': fv2lgbe + '/partner/h5Log/?type=' + rz7n6 + '&data=' + encodeURIComponent(JSON['stringify'](s5w_9h)) });
    }, 'getDate': function () {
      var p83aemu = new Date();return p83aemu['getFullYear']() + '-' + p83aemu['getMonth']() + '-' + p83aemu['getDate']();
    }, 'downloadClient': function () {
      var x9c_st = '微端-不用点这个卡片-' + wx['getStorageSync']('wx_openid');wx['showModal']({ 'title': '微端下载提示', 'content': '进入客服会话，点击右下角小卡片获取微端下载链接', 'showCancel': !(0x24b2 + 0x7 * -0x6 + -0x2487), 'confirmText': '我知道了', 'success': function () {
          var pujk834 = { 'showMessageCard': !(0x219a + -0x1021 + 0x9 * -0x1f1), 'sendMessageTitle': x9c_st, 'sendMessageImg': 'https://static.357pk.net/uploads/2109/weixin_download_img2.jpg' };wx['openCustomerServiceConversation'](pujk834);
        } });
    }, 'checkMsg': function (eavm2b, lbme2v) {
      console['log']('[SDK]查看文本是否有违规内容');var a3upb = wx['getStorageSync']('plat_sdk_token');wx['request']({ 'url': fv2lgbe + '/game/min/?ac=msgCheck', 'method': 'POST', 'dataType': 'json', 'header': { 'content-type': 'application/x-www-form-urlencoded' }, 'data': { 'game_pkg': fq6n0zr1['game_pkg'], 'partner_id': fq6n0zr1['partner_id'], 'sdk_token': a3upb, 'content': eavm2b }, 'success': function (em2pba) {
          console['log']('[SDK]查看文本是否有违规内容结果返回:'), lbme2v && lbme2v(0x13a4 + 0x1a03 + -0x2da7 * 0x1 == em2pba['data']['code'] ? -0x108 * 0x10 + 0x413 * 0x2 + 0x85b : -0x1e8b + -0xd4f + 0x2bda, em2pba['data']['msg']);
        } });
    }, 'checkMsgV2': function (aeb2vm, x_tc5ks) {
      console['log']('[SDK]查看文本是否有违规内容');var x_4jc5 = wx['getStorageSync']('plat_sdk_token');wx['request']({ 'url': fv2lgbe + '/game/min/?ac=msgCheckV2', 'method': 'POST', 'dataType': 'json', 'header': { 'content-type': 'application/x-www-form-urlencoded' }, 'data': { 'game_pkg': fq6n0zr1['game_pkg'], 'partner_id': fq6n0zr1['partner_id'], 'sdk_token': x_4jc5, 'content': aeb2vm, 'scene': 0x1 }, 'success': function (amu83p) {
          console['log']('[SDK]查看文本是否有违规内容结果返回:'), x_tc5ks && x_tc5ks(0xfc4 + -0x7 * 0x4d6 + 0x2 * 0x90b == amu83p['data']['code'] ? -0x1 * -0x14d5 + 0x2 * -0x8dd + -0x31a * 0x1 : 0xaf1 + -0x12ea + 0x7f9, amu83p['data']['msg']);
        } });
    }, 'sendMessage': function ($ihws, jpm3u84, s5tcx_9) {
      console['log']('[SDK]发送订阅消息');var _ts95ch = wx['getStorageSync']('plat_sdk_token');wx['request']({ 'url': fv2lgbe + '/game/min/?ac=sendMessage', 'method': 'POST', 'dataType': 'json', 'header': { 'content-type': 'application/x-www-form-urlencoded' }, 'data': { 'game_pkg': fq6n0zr1['game_pkg'], 'partner_id': fq6n0zr1['partner_id'], 'sdk_token': _ts95ch, 'template_id': $ihws, 'data': jpm3u84 }, 'success': function (hc_9st5) {
          console['log']('[SDK]订阅消息发送成功'), s5tcx_9 && s5tcx_9(0x3 * 0x23f + 0x16 * -0xd8 + 0x3 * 0x3f1 == hc_9st5['data']['code'] ? 0x1bbe + -0x314 + -0x18a9 * 0x1 : -0xbf2 + -0xe9 * -0xc + 0x1 * 0x106, hc_9st5['data']['msg']);
        } });
    } };
}function fbae2mp(k_x4c, q6z0onr, si7$9hw) {
  k_x4c in fkt5xc4_ && fkt5xc4_[k_x4c](q6z0onr, si7$9hw);
}const fpbmaeu3 = {};window['cwan'] = fpbmaeu3, fpbmaeu3['init'] = function (n1r$7z, uj8k4p) {
  fbae2mp('init', n1r$7z, uj8k4p);
}, fpbmaeu3['login'] = function (ckj4x8u) {
  fbae2mp('login', '', ckj4x8u);
}, fpbmaeu3['pay'] = function (zn01$6r, r$160z) {
  fbae2mp('pay', zn01$6r, r$160z);
}, fpbmaeu3['logCreateRole'] = function (m3u8pej, pm8, c5_ksxt, l2veamb, sh79i$w) {
  fbae2mp('logCreateRole', { 'serverid': m3u8pej, 'servername': pm8, 'roleid': c5_ksxt, 'rolename': l2veamb, 'rolelevel': sh79i$w });
}, fpbmaeu3['logEnterGame'] = function (n$7z6r, baegl2v, mae3, d0oqrz, zrd0yqo) {
  fbae2mp('logEnterGame', { 'serverid': n$7z6r, 'servername': baegl2v, 'roleid': mae3, 'rolename': d0oqrz, 'rolelevel': zrd0yqo });
}, fpbmaeu3['logRoleUpLevel'] = function (_5tcx4k, up4m8j3, _5csxkt, s9t5_wh, vmleb) {
  fbae2mp('logRoleUpLevel', { 'serverid': _5tcx4k, 'servername': up4m8j3, 'roleid': _5csxkt, 'rolename': s9t5_wh, 'rolelevel': vmleb });
}, fpbmaeu3['downloadClient'] = function () {
  fbae2mp('downloadClient');
}, fpbmaeu3['getConfig'] = function () {
  return { 'game_id': fq6n0zr1['game_id'], 'game_pkg': fq6n0zr1['game_pkg'], 'partner_id': fq6n0zr1['partner_id'] };
}, fpbmaeu3['getPublicData'] = function () {
  fbae2mp('getPublicData');
}, fpbmaeu3['checkMsg'] = function (sh9t5w, thc_s) {
  fbae2mp('checkMsg', sh9t5w, thc_s);
}, fpbmaeu3['checkMsgV2'] = function (w97i, kt4_cx5) {
  fbae2mp('checkMsgV2', w97i, kt4_cx5);
}, fpbmaeu3['sendMessage'] = function (wsht9i, q0r6nz, cux4k8) {
  fbae2mp('sendMessage', wsht9i, q0r6nz, cux4k8);
};