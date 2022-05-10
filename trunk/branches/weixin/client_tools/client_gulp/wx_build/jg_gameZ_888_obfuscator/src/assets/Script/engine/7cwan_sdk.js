var H = wx.$F;
let fp2lame = { 'game_id': '11', 'game_pkg': 'wzcq-q2-_q2wxxcxqd_H', 'partner_id': '4', 'is_auth': !(-0x5 * 0x7a7 + 0x427 * 0x3 + -0x19cf * -0x1), 'from': null };window['config'] = fp2lame;let fe3pmb2a = febua3pm(),
    fts5c9x_ = 'https://sdk.5tun.cn',
    feblv2m = null,
    fs5wht_ = null,
    f$w9s7i = '';function febua3pm() {
  var zd6orq = {};return { 'order_data': {}, 'init': function (m3puj84, k5j4) {
      f$w9s7i = m3puj84 && m3puj84['game_ver'] ? m3puj84['game_ver'] : 0x500 + -0xe5 * 0x2 + -0x1 * 0x336, console['log']('[SDK]CP调用init接口');var vlbeg2,
          mapl2e = wx['getStorageSync']('plat_uuid');mapl2e ? vlbeg2 = 0x1e2e + 0xcd3 * 0x1 + -0x2b01 : (mapl2e = this['uuid'](0x269 * -0xd + 0xbbc + 0x13a9 * 0x1, -0x1ea9 * 0x1 + 0x2351 + -0x488), wx['setStorageSync']('plat_uuid', mapl2e), vlbeg2 = -0x1 * -0x15db + 0x6 * -0x366 + -0x1 * 0x176);var hw59s = wx['getStorageSync']('plat_idfv');hw59s || (hw59s = this['uuid'](0xd7f * -0x2 + 0x279 * -0x1 + 0x1d87 * 0x1, 0x1feb * -0x1 + 0x15cf + 0x4 * 0x28f), wx['setStorageSync']('plat_idfv', hw59s));var jpmu348 = wx['getLaunchOptionsSync'](),
          levmb2 = jpmu348['scene'] ? jpmu348['scene'] : '';if (console['log']('[SDK]小游戏启动参数'), console['log'](jpmu348), vlbeg2 && jpmu348['query'] && jpmu348['query']['ad_code'] && wx['setStorageSync']('plat_ad_code', jpmu348['query']['ad_code']), jpmu348['query'] && jpmu348['query']['from'] && '' != jpmu348['query']['from']) vlbeg2 && wx['setStorageSync']('plat_from', jpmu348['query']['from']), fp2lame['from'] = jpmu348['query']['from'];else {
        var jupm3 = wx['getStorageSync']('plat_from');jupm3 || '' == jupm3 || (fp2lame['from'] = jupm3);
      }console['log'](fp2lame['from']);var apu8 = { 'install': vlbeg2, 'scene': levmb2 };this['log']('start', apu8), wx['showShareMenu'](), f$w9s7i && this['checkGameVersion'](f$w9s7i, function (w59th_) {
        k5j4 && k5j4(w59th_);
      });
    }, 'login': function ($7iw1h9, x4juck8) {
      console['log']('[SDK]调起登录');var ihtw7s = this;zd6orq['login'] = 'function' == typeof x4juck8 ? x4juck8 : null, fp2lame['is_auth'] ? wx['getSetting']({ 'success': function (sw_9t) {
          if (sw_9t['authSetting']['scope.userInfo']) console['log']('[SDK]获得授权设置\uFF1A已授权'), ihtw7s['do_login']();else {
            console['log']('[SDK]获得授权设置\uFF1A未授权'), wx['hideLoading']({});var b2vgale = wx['getSystemInfoSync'](),
                s5hwit = (b2vgale['screenWidth'], b2vgale['screenHeight'], wx['createUserInfoButton']({ 'type': 'text', 'text': '授权登录游戏', 'withCredentials': !(-0x10a5 + -0x2560 + 0x3606), 'style': { 'top': b2vgale['windowHeight'] / (-0x4 * -0x886 + 0x256c + -0x36 * 0x153) + b2vgale['windowHeight'] / (0x15d * -0x1 + -0x1994 + 0x1af5), 'left': b2vgale['windowWidth'] / (0x49a + -0x3 * -0xaec + -0x255c) - (0x1a4c + -0x1 * 0x557 + -0x1491), 'width': 0xc8, 'height': 0x28, 'lineHeight': 0x28, 'backgroundColor': '#07c160', 'color': '#ffffff', 'textAlign': 'center', 'fontSize': 0x10, 'borderRadius': 0x4 } }));s5hwit['show'](), s5hwit['onTap'](ku8jp43 => {
              console['log'](ku8jp43), f33BL8({ 'title': '正在登录游戏' }), 'getUserInfo:ok' == ku8jp43['errMsg'] ? ihtw7s['do_login']({ 'head_img': ku8jp43['userInfo']['avatarUrl'] || '', 'nick_name': ku8jp43['userInfo']['nickName'] || '' }) : ihtw7s['do_login'](), s5hwit['destroy']();
            });
          }
        }, 'fail': function () {
          console['log']('[SDK]获得授权设置\uFF1A失败'), ihtw7s['do_login']();
        } }) : (console['log']('[SDK]授权登录' + fp2lame['is_auth']), ihtw7s['do_login']());
    }, 'do_login': function (e8mpju) {
      var kscx_5t = this;wx['login']({ 'success': function (r0oqd) {
          if (console['log']('微信登录成功返回' + JSON['stringify'](r0oqd)), r0oqd['code']) {
            var xu3j84k = kscx_5t['getPublicData']();xu3j84k['mo'] = -0x889 * -0x1 + -0x804 + 0xc * -0xb, xu3j84k['code'] = r0oqd['code'], xu3j84k['nick_name'] = e8mpju ? e8mpju['nick_name'] : '', xu3j84k['head_img'] = e8mpju ? e8mpju['head_img'] : '', fp2lame['is_auth'] ? wx['getUserInfo']({ 'success': function (auep8) {
                var i9$1w7h = auep8['encryptedData'],
                    k_5xts = auep8['iv'],
                    u8cjk4 = auep8['signature'];xu3j84k['encryptedData'] = i9$1w7h, xu3j84k['iv'] = k_5xts, xu3j84k['signature'] = u8cjk4, wx['request']({ 'url': fts5c9x_ + '/partner/auth', 'method': 'POST', 'dataType': 'json', 'header': { 'content-type': 'application/x-www-form-urlencoded' }, 'data': xu3j84k, 'success': function (p8emu3) {
                    if (console['log']('[SDK]登录结果\uFF1A'), console['log'](p8emu3), 0xe88 + 0x13c2 + 0x10c1 * -0x2 == p8emu3['statusCode']) {
                      var kj4p3u = p8emu3['data'];if (kj4p3u['state']) {
                        var g2ebal = { 'userid': kj4p3u['data']['user_id'], 'account': kj4p3u['data']['nick_name'], 'token': kj4p3u['data']['token'] };try {
                          wx['setStorageSync']('plat_sdk_token', kj4p3u['data']['sdk_token']), wx['setStorageSync']('plat_uid', kj4p3u['data']['user_id']), wx['setStorageSync']('plat_username', kj4p3u['data']['username']), wx['setStorageSync']('wx_openid', kj4p3u['data']['openid']), kj4p3u['data']['ext'] && wx['setStorageSync']('plat_session_key', kj4p3u['data']['ext']);
                        } catch (i6nr71) {}zd6orq['login'] && zd6orq['login'](-0xa53 * -0x2 + -0x1 * -0x2222 + -0x36c8, g2ebal);
                      } else zd6orq['login'] && zd6orq['login'](-0x259 * -0x5 + 0x2 * 0x923 + 0x1e02 * -0x1, { 'errMsg': kj4p3u['msg'] });
                    } else zd6orq['login'] && zd6orq['login'](0x10d0 + -0x4f4 + 0x25f * -0x5, { 'errMsg': '请求平台服务器失败\uFF01#1' });
                  }, 'fail': function (irn6) {
                    zd6orq['login'] && zd6orq['login'](0xfd1 * 0x1 + -0x151 * 0x3 + -0xbdd, { 'errMsg': irn6['errMsg'] });
                  } });
              }, 'fail': function (orn0q) {
                zd6orq['login'] && zd6orq['login'](-0x154d + 0x3 * -0x1e9 + 0x1b09, { 'errMsg': orn0q['errMsg'] });
              } }) : wx['request']({ 'url': fts5c9x_ + '/partner/auth', 'method': 'POST', 'dataType': 'json', 'header': { 'content-type': 'application/x-www-form-urlencoded' }, 'data': xu3j84k, 'success': function ($i9h1) {
                if (console['log']('[SDK]登录结果\uFF1A'), console['log']($i9h1), -0xa * 0x238 + 0x1 * -0x1ae3 + -0x1 * -0x31db == $i9h1['statusCode']) {
                  var pbmau3e = $i9h1['data'];if (pbmau3e['state']) {
                    var eaup8m = { 'userid': pbmau3e['data']['user_id'], 'account': pbmau3e['data']['nick_name'], 'token': pbmau3e['data']['token'] };try {
                      wx['setStorageSync']('plat_sdk_token', pbmau3e['data']['sdk_token']), wx['setStorageSync']('plat_uid', pbmau3e['data']['user_id']), wx['setStorageSync']('plat_username', pbmau3e['data']['username']), wx['setStorageSync']('wx_openid', pbmau3e['data']['openid']), pbmau3e['data']['ext'] && wx['setStorageSync']('plat_session_key', pbmau3e['data']['ext']);
                    } catch (ap2me3) {}zd6orq['login'] && zd6orq['login'](0x1c42 + -0x1845 + -0x1 * 0x3fd, eaup8m);
                  } else zd6orq['login'] && zd6orq['login'](0x259 * 0x1 + 0x9 * 0x1a5 + -0x1125, { 'errMsg': pbmau3e['msg'] });
                } else zd6orq['login'] && zd6orq['login'](-0x1 * 0x204d + 0x1d33 * -0x1 + 0x3d81, { 'errMsg': '请求平台服务器失败\uFF01#2' });
              } });
          } else zd6orq['login'] && zd6orq['login'](0x12cc + 0xa96 + 0x6d * -0x45, { 'errMsg': r0oqd['errMsg'] });
        }, 'fail': function (p2aembl) {
          console['log']('微信登录失败' + JSON['stringify'](p2aembl)), (p2aembl['errMsg']['indexOf']('auth deny') > -(0x2208 + -0x2 * 0x1141 + -0x7b * -0x1) || p2aembl['errMsg']['indexOf']('auth denied') > -(0x147 * -0x3 + -0xc * -0xfd + -0x1a * 0x4f)) && zd6orq['login'] && zd6orq['login'](-0x6a * 0x4f + -0x1213 * -0x2 + -0x36f, { 'errMsg': p2aembl['errMsg'] });
        } });
    }, 'checkGameVersion': function (rz0n$61, lpmab2) {
      console['log']('[SDK]检查游戏版本'), wx['getStorageSync']('plat_sdk_token'), wx['request']({ 'url': fts5c9x_ + '/game/min/?ac=checkGameVersion', 'method': 'POST', 'dataType': 'json', 'header': { 'content-type': 'application/x-www-form-urlencoded' }, 'data': { 'game_pkg': fp2lame['game_pkg'], 'partner_id': fp2lame['partner_id'], 'game_ver': rz0n$61 }, 'success': function (_45cxkj) {
          if (console['log']('[SDK]获取游戏版本结果'), console['log'](_45cxkj), 0x17c1 + 0x2482 + -0x1 * 0x3b7b == _45cxkj['statusCode']) {
            var w$ih7s = _45cxkj['data'];w$ih7s['state'] ? lpmab2 && lpmab2(w$ih7s['data']) : lpmab2 && lpmab2({ 'develop': 0x0 });
          } else lpmab2 && lpmab2({ 'develop': 0x0 });
        }, 'fail': function (_swht59) {
          console['log'](_swht59);
        } });
    }, 'pay': function ($w79his, sxtc_9) {
      var r$6n7i1 = this;wx['checkSession']({ 'success': function () {
          r$6n7i1['startPay']($w79his, sxtc_9);
        }, 'fail': function () {
          console['log']('[SDK]session过期需要重新登录'), r$6n7i1['login']({}, function () {
            r$6n7i1['startPay']($w79his, sxtc_9);
          });
        } });
    }, 'startPay': function (mea32bp, yr0zod) {
      console['log']('[SDK]调起支付\uFF0CCP传值\uFF1A'), console['log'](mea32bp);var i17wnh = this;zd6orq['pay'] = 'function' == typeof yr0zod ? yr0zod : null, -0x7 * 0xd7 + 0x804 + -0x223;var dorq0yz = wx['getStorageSync']('plat_sdk_token'),
          or0yzq = wx['getStorageSync']('plat_session_key');if (dorq0yz && or0yzq) {
        var ju38p4k = wx['getSystemInfoSync'](),
            j4xu83k = { 'cpbill': mea32bp['cpbill'], 'productid': mea32bp['productid'], 'productname': mea32bp['productname'], 'productdesc': mea32bp['productdesc'], 'serverid': mea32bp['serverid'], 'servername': mea32bp['servername'], 'roleid': mea32bp['roleid'], 'rolename': mea32bp['rolename'], 'rolelevel': mea32bp['rolelevel'], 'price': mea32bp['price'], 'extension': mea32bp['extension'], 'sdk_token': dorq0yz, 'session_key': or0yzq, 'platform': ju38p4k['platform'] };i17wnh['order_data'] = j4xu83k;var ampue3 = i17wnh['getPublicData']();ampue3['order_data'] = JSON['stringify'](j4xu83k), wx['request']({ 'url': fts5c9x_ + '/partner/order', 'method': 'POST', 'dataType': 'json', 'header': { 'content-type': 'application/x-www-form-urlencoded' }, 'data': ampue3, 'success': function (nq60ozr) {
            if (console['log']('[SDK]完成创建订单'), console['log'](nq60ozr), -0x1063 + 0x367 * 0x7 + -0x17 * 0x4a == nq60ozr['statusCode']) {
              var i$w7hs9 = nq60ozr['data'];i$w7hs9['state'] ? void (0x28d + -0xa37 + 0x7aa) === wx['requestPayment'] ? 'android' == ju38p4k['platform'] || 'windows' == ju38p4k['platform'] || 'devtools' == ju38p4k['platform'] ? i$w7hs9['data']['is_android_pay'] ? i17wnh['kfPay'](i$w7hs9['data']) : i17wnh['gamePay'](i$w7hs9['data']) : i$w7hs9['data']['is_ios_pay'] ? -0x249d * -0x1 + -0x2586 + 0x75 * 0x2 == i$w7hs9['data']['ios_pay_type'] && i17wnh['kfPay'](i$w7hs9['data']) : wx['showModal']({ 'title': '支付提示', 'content': '很抱歉，由于苹果政策，暂时不能支付，安卓手机不受影响', 'confirmText': '我知道了', 'showCancel': !(0x1a * -0x4f + -0x13f * 0x1a + 0x286d) }) : i17wnh['minPay'](i$w7hs9['data']) : zd6orq['pay'] && zd6orq['pay'](-0x547 * 0x2 + 0x1ec + 0x8a3, { 'errMsg': i$w7hs9['msg'] });
            } else zd6orq['login'] && zd6orq['login'](0x21dd * -0x1 + 0x15 * -0x32 + -0x798 * -0x5, { 'errMsg': '请求平台服务器失败\uFF01#3' });
          } });
      } else zd6orq['pay'] && zd6orq['pay'](-0xae0 + -0x193f + 0x2420, { 'errMsg': '用户未登录，支付失败！' });
    }, 'gamePay': function (cjk54_x) {
      var levma2b = this;cjk54_x['buyQuantity'] <= cjk54_x['balance'] ? (console['log']('[SDK]游戏币充值直接扣除'), wx['showModal']({ 'title': '支付提示', 'content': '您还有' + cjk54_x['balance'] + '个游戏币未消费，本次支付将扣除' + cjk54_x['buyQuantity'] + '游戏币', 'showCancel': !(0x2 * 0x1087 + -0xaf0 + 0x9 * -0x275), 'confirmText': '我知道了', 'success': function () {
          levma2b['gameGoPay'](cjk54_x);
        } })) : (console['log']('[SDK]调起米大师支付'), console['log'](cjk54_x), wx['requestMidasPayment']({ 'mode': 'game', 'env': cjk54_x['env'], 'offerId': cjk54_x['offerId'], 'currencyType': cjk54_x['currencyType'], 'platform': cjk54_x['platform'], 'buyQuantity': cjk54_x['buyQuantity'], 'zoneId': cjk54_x['zoneId'], 'success': function (bmeap2l) {
          'requestMidasPayment:ok' == bmeap2l['errMsg'] && levma2b['gameGoPay'](cjk54_x);
        }, 'fail': function (u3a8mpe) {
          -(-0x3 * -0xab2 + 0x18d2 + -0x38e7) !== u3a8mpe['errMsg']['indexOf']('用户取消') ? zd6orq['pay'] && zd6orq['pay'](-0x186 * -0x2 + -0x1290 + 0xf86, { 'errMsg': '用户取消支付' }) : zd6orq['pay'] && zd6orq['pay'](-0xec1 * -0x1 + 0x1536 * 0x1 + -0x11fb * 0x2, { 'errMsg': '支付失败:' + u3a8mpe['errMsg'] + '(' + u3a8mpe['errCode'] + ')' });
        }, 'complete': function (i7h$nw) {} }));
    }, 'kfPay': function (ep32ma) {
      fs5wht_ = ep32ma['orderId'], wx['showModal']({ 'title': '支付提示', 'content': '进入客服会话\uFF0C点击右下角小卡片或输入"cz"或"充值"获取支付链接', 'showCancel': !(0x14b8 + 0x5a * 0x51 + -0x3131), 'confirmText': '我知道了', 'success': function () {
          wx['openCustomerServiceConversation']({ 'showMessageCard': !(0x1a96 + -0x9b2 * -0x4 + -0x415e), 'sendMessageTitle': '不用点这个卡片', 'sendMessageImg': 'https://static.357pk.net/uploads/2109/weixin_pay_img1.png' });
        } });
    }, 'gameGoPay': function (rq0y, mpa3e2) {
      console['log']('[SDK]米大师支付完毕\uFF0C通知服务器发货');var n16rz$7 = this,
          blage2 = wx['getStorageSync']('plat_session_key');wx['request']({ 'url': fts5c9x_ + '/partner/pay/' + fp2lame['partner_id'] + '/' + fp2lame['game_pkg'] + '/', 'method': 'POST', 'dataType': 'json', 'header': { 'content-type': 'application/x-www-form-urlencoded' }, 'data': { 'order_id': rq0y['orderId'], 'time': rq0y['time'], 'sign': rq0y['sign'], 'session_key': blage2 }, 'success': function (ih95tws) {
          if (console['log']('[SDK]米大师支付结果'), console['log'](ih95tws), -0x1d1b + -0x1fd1 + -0x2 * -0x1eda == ih95tws['statusCode']) {
            if (0x1ad3 + 0x1 * -0x11b6 + 0x2c * -0x35 == ih95tws['data']['state']) {
              var ep38uam = { 'cpOrderNo': n16rz$7['order_data']['cpbill'], 'orderNo': rq0y['orderId'], 'amount': n16rz$7['order_data']['price'], 'extension': n16rz$7['order_data']['extension'] };zd6orq['pay'] && zd6orq['pay'](0x549 + -0x29 * -0xbb + -0x233c, ep38uam);
            } else zd6orq['pay'] && zd6orq['pay'](0xd56 + -0x1 * 0x52 + -0xd03, { 'errMsg': '支付失败' });
          }
        }, 'fail': function () {} });
    }, 'logCreateRole': function (yqodrz) {
      var p4mu8j = wx['getStorageSync']('plat_uid'),
          almbve = wx['getStorageSync']('plat_username'),
          cth9_5s = {};cth9_5s['user_id'] = p4mu8j, cth9_5s['user_name'] = almbve, cth9_5s['role_id'] = yqodrz['roleid'], cth9_5s['role_lev'] = yqodrz['rolelevel'], cth9_5s['role_name'] = yqodrz['rolename'], cth9_5s['server_id'] = yqodrz['serverid'], yqodrz['roleid'] && yqodrz['serverid'] && (feblv2m = { 'role_id': yqodrz['roleid'], 'server_id': yqodrz['serverid'] }), this['log']('create', cth9_5s);
    }, 'logEnterGame': function (pabmel2) {
      var qdozr0 = wx['getStorageSync']('plat_uid'),
          $n176iw = wx['getStorageSync']('plat_username'),
          q1z0rn = {};q1z0rn['user_id'] = qdozr0, q1z0rn['user_name'] = $n176iw, q1z0rn['role_id'] = pabmel2['roleid'], q1z0rn['role_lev'] = pabmel2['rolelevel'], q1z0rn['role_name'] = pabmel2['rolename'], q1z0rn['server_id'] = pabmel2['serverid'], pabmel2['roleid'] && pabmel2['serverid'] && (feblv2m = { 'role_id': pabmel2['roleid'], 'server_id': pabmel2['serverid'] }), this['log']('enter', q1z0rn);
    }, 'logRoleUpLevel': function (au3) {
      var m3uep8a = wx['getStorageSync']('plat_uid'),
          geblav = wx['getStorageSync']('plat_username'),
          ba2emp = {};ba2emp['user_id'] = m3uep8a, ba2emp['user_name'] = geblav, ba2emp['role_id'] = au3['roleid'], ba2emp['role_lev'] = au3['rolelevel'], ba2emp['role_name'] = au3['rolename'], ba2emp['server_id'] = au3['serverid'], au3['roleid'] && au3['serverid'] && (feblv2m = { 'role_id': au3['roleid'], 'server_id': au3['serverid'] }), this['log']('levelup', ba2emp);
    }, 'uuid': function (m2eapbl, balpme) {
      var hwi7$9s,
          zr0dyq,
          lgbe2 = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'['split'](''),
          ws9iht7 = [];if (m2eapbl = m2eapbl || lgbe2['length'], balpme) {
        for (hwi7$9s = -0x150 + 0x1 * -0xa21 + 0x65 * 0x1d; hwi7$9s < balpme; hwi7$9s++) ws9iht7[hwi7$9s] = lgbe2[0x2050 + -0xdd8 + -0x1278 | Math['random']() * m2eapbl];
      } else {
        for (ws9iht7[0x6 * -0x62b + -0xd * 0x198 + 0x39c2 * 0x1] = ws9iht7[-0xbf4 + -0x4ff + 0x1100 * 0x1] = ws9iht7[-0x133 + 0x1d78 + -0x1c33 * 0x1] = ws9iht7[-0x1c0f + 0x991 * 0x3 + -0x3 * 0x2f] = '-', ws9iht7[-0x4 * -0x20e + -0x5d * 0x27 + 0x1 * 0x601] = '4', hwi7$9s = -0xd * 0x1 + -0x26a + -0x277 * -0x1; hwi7$9s < -0xb1b * -0x3 + 0x26a1 + -0x1 * 0x47ce; hwi7$9s++) ws9iht7[hwi7$9s] || (zr0dyq = 0x1 * -0x489 + 0x1f73 + -0x1aea | (-0x6 * 0x32 + -0x217b * -0x1 + 0x7f * -0x41) * Math['random'](), ws9iht7[hwi7$9s] = lgbe2[-0xe * -0x14 + 0x214 * -0x6 + 0xb73 * 0x1 == hwi7$9s ? -0x62 + 0x9 * 0x106 + -0x25 * 0x3d & zr0dyq | 0x2 * 0xcb9 + -0x2007 + 0x69d : zr0dyq]);
      }return ws9iht7['join']('');
    }, 'getPublicData': function () {
      var sc_xkt5 = wx['getSystemInfoSync'](),
          nih71$w = wx['getStorageSync']('plat_uuid'),
          q16nr0z = wx['getStorageSync']('plat_idfv'),
          n7r61z$ = wx['getStorageSync']('plat_ad_code');return { 'game_id': fp2lame['game_id'], 'game_pkg': fp2lame['game_pkg'], 'partner_id': fp2lame['partner_id'], 'ad_code': n7r61z$, 'uuid': nih71$w, 'idfv': q16nr0z, 'dname': sc_xkt5['model'], 'mac': '0000', 'net_type': -0x2d * -0xbd + -0x11b5 + -0xf84 == sc_xkt5['wifiSignal'] ? '4G' : 'WIFI', 'os_ver': sc_xkt5['system'], 'sdk_ver': sc_xkt5['version'], 'game_ver': f$w9s7i, 'device': 'android' == sc_xkt5['platform'] ? 0xfc * 0x24 + 0x2339 + -0x46a8 : -0x16ff + 0x2 * -0x6da + 0x24b5 * 0x1, 'is_from_min': 0x1 };
    }, 'log': function (cskx_5, doqzr0y) {
      var n61i7 = this['getPublicData']();for (var c_xk5j in doqzr0y) n61i7[c_xk5j] = doqzr0y[c_xk5j];console['log']('[SDK]上报数据\uFF1A' + cskx_5), console['log'](n61i7), wx['request']({ 'url': fts5c9x_ + '/partner/h5Log/?type=' + cskx_5 + '&data=' + encodeURIComponent(JSON['stringify'](n61i7)) });
    }, 'getDate': function () {
      var n0z61r = new Date();return n0z61r['getFullYear']() + '-' + n0z61r['getMonth']() + '-' + n0z61r['getDate']();
    }, 'downloadClient': function () {
      var j43kup = '微端-不用点这个卡片-' + wx['getStorageSync']('wx_openid');wx['showModal']({ 'title': '微端下载提示', 'content': '进入客服会话，点击右下角小卡片获取微端下载链接', 'showCancel': !(0xf0d * 0x2 + -0xef3 + -0x793 * 0x2), 'confirmText': '我知道了', 'success': function () {
          var p8jmu3 = { 'showMessageCard': !(0x370 + -0x1 * 0x24db + -0x216b * -0x1), 'sendMessageTitle': j43kup, 'sendMessageImg': 'https://static.357pk.net/uploads/2109/weixin_download_img2.jpg' };wx['openCustomerServiceConversation'](p8jmu3);
        } });
    }, 'checkMsg': function (r0qz6no, e2agb) {
      console['log']('[SDK]查看文本是否有违规内容');var _ckxj45 = wx['getStorageSync']('plat_sdk_token');wx['request']({ 'url': fts5c9x_ + '/game/min/?ac=msgCheck', 'method': 'POST', 'dataType': 'json', 'header': { 'content-type': 'application/x-www-form-urlencoded' }, 'data': { 'game_pkg': fp2lame['game_pkg'], 'partner_id': fp2lame['partner_id'], 'sdk_token': _ckxj45, 'content': r0qz6no }, 'success': function (no60z) {
          console['log']('[SDK]查看文本是否有违规内容结果返回:'), e2agb && e2agb(0xf91 + 0x1f * -0x31 + -0x9a2 == no60z['data']['code'] ? -0xe82 + -0x8f0 + 0x1773 : 0x2376 + 0x2627 + -0x499d, no60z['data']['msg']);
        } });
    }, 'checkMsgV2': function (ck54xt, w7hi$n1) {
      console['log']('[SDK]查看文本是否有违规内容');var ukj8cx = wx['getStorageSync']('plat_sdk_token');wx['request']({ 'url': fts5c9x_ + '/game/min/?ac=msgCheckV2', 'method': 'POST', 'dataType': 'json', 'header': { 'content-type': 'application/x-www-form-urlencoded' }, 'data': { 'game_pkg': fp2lame['game_pkg'], 'partner_id': fp2lame['partner_id'], 'sdk_token': ukj8cx, 'content': ck54xt, 'scene': 0x1 }, 'success': function (eupjm38) {
          console['log']('[SDK]查看文本是否有违规内容结果返回:'), w7hi$n1 && w7hi$n1(-0x26ed * -0x1 + 0x70c + -0x3 * 0xf53 == eupjm38['data']['code'] ? 0xe3 * 0x1f + 0x26c4 + 0x109 * -0x40 : 0x1d * 0xd7 + -0x30 * -0x43 + 0x2d7 * -0xd, eupjm38['data']['msg']);
        } });
    }, 'sendMessage': function (d06qoz, nz1$76r, qn0zor) {
      console['log']('[SDK]发送订阅消息');var mbp2eal = wx['getStorageSync']('plat_sdk_token');wx['request']({ 'url': fts5c9x_ + '/game/min/?ac=sendMessage', 'method': 'POST', 'dataType': 'json', 'header': { 'content-type': 'application/x-www-form-urlencoded' }, 'data': { 'game_pkg': fp2lame['game_pkg'], 'partner_id': fp2lame['partner_id'], 'sdk_token': mbp2eal, 'template_id': d06qoz, 'data': nz1$76r }, 'success': function (ths95iw) {
          console['log']('[SDK]订阅消息发送成功'), qn0zor && qn0zor(-0xfbd + 0x2573 + -0x15b6 * 0x1 == ths95iw['data']['code'] ? 0xb2c + 0x1cc1 + -0x27ec : 0xb57 + -0x250b + 0xa * 0x292, ths95iw['data']['msg']);
        } });
    }, 'videoAdvert': function (v2bal, e2abvg) {
      wx['request']({ 'url': fts5c9x_ + '/?method=user.gameConfig', 'method': 'POST', 'dataType': 'json', 'header': { 'content-type': 'application/x-www-form-urlencoded' }, 'data': { 'game_pkg': fp2lame['game_pkg'], 'partner_id': fp2lame['partner_id'] }, 'success': function (bmaev2l) {
          var pu8am3e = bmaev2l['data']['data']['weixin_advert_id'];let rq60nz1 = null;(rq60nz1 = wx['createRewardedVideoAd']({ 'adUnitId': pu8am3e }))['show']()['catch'](() => {
            rq60nz1['load']()['then'](() => rq60nz1['show']())['catch'](nh17w$ => {
              console['log']('激励视频\x20广告显示失败');
            });
          }), rq60nz1['onError'](h_s5c9t => {
            console['log'](h_s5c9t);
          }), rq60nz1['onClose'](e83puma => {
            rq60nz1 && (rq60nz1['offClose'](), e83puma && e83puma['isEnded'] || void (0x9 * 0x3e8 + -0x37 * -0x95 + -0x432b) === e83puma ? console['log']('正常播放结束，需要下发奖励') : console['log']('播放退出，不下发奖励'));
          });
        } });
    }, 'getGameConfig': function ($0zn6r1) {
      console['log']('[SDK]获取游戏配置'), wx['request']({ 'url': fts5c9x_ + '/?method=user.gameConfig', 'method': 'POST', 'dataType': 'json', 'header': { 'content-type': 'application/x-www-form-urlencoded' }, 'data': { 'game_pkg': fp2lame['game_pkg'], 'partner_id': fp2lame['partner_id'] }, 'success': function ($19h7i) {
          var aevb2g = $19h7i['data']['data'];console['log']('[SDK]获取游戏配置成功'), console['log']($19h7i['data']);var _c5kxt;_c5kxt = { 'pay_switch': aevb2g['pay_switch'], 'game_ver': aevb2g['game_ver'] }, $0zn6r1 && $0zn6r1(_c5kxt);
        } });
    } };
}function fkct5sx_(p4m83u, n6r$17, emj3pu8) {
  p4m83u in fe3pmb2a && fe3pmb2a[p4m83u](n6r$17, emj3pu8);
}const fbg2evl = {};window['cwan'] = fbg2evl, fbg2evl['init'] = function (kcxj8u, e2bp3ma) {
  fkct5sx_('init', kcxj8u, e2bp3ma);
}, fbg2evl['login'] = function (w$7n6i1) {
  fkct5sx_('login', '', w$7n6i1);
}, fbg2evl['pay'] = function (kj8cxu4, whts9) {
  fkct5sx_('pay', kj8cxu4, whts9);
}, fbg2evl['logCreateRole'] = function (mep38, iw7s$h, p38jku, rn1$6z7, kuj4xc) {
  fkct5sx_('logCreateRole', { 'serverid': mep38, 'servername': iw7s$h, 'roleid': p38jku, 'rolename': rn1$6z7, 'rolelevel': kuj4xc });
}, fbg2evl['logEnterGame'] = function (ba32ep, drqyz, e2plb, w1$7ihn, xkt5c) {
  fkct5sx_('logEnterGame', { 'serverid': ba32ep, 'servername': drqyz, 'roleid': e2plb, 'rolename': w1$7ihn, 'rolelevel': xkt5c });
}, fbg2evl['logRoleUpLevel'] = function ($hw7i1, hw7s9i$, w7h9i, cxj8k4, hi1$7w9) {
  fkct5sx_('logRoleUpLevel', { 'serverid': $hw7i1, 'servername': hw7s9i$, 'roleid': w7h9i, 'rolename': cxj8k4, 'rolelevel': hi1$7w9 });
}, fbg2evl['downloadClient'] = function () {
  fkct5sx_('downloadClient');
}, fbg2evl['getConfig'] = function () {
  return { 'game_id': fp2lame['game_id'], 'game_pkg': fp2lame['game_pkg'], 'partner_id': fp2lame['partner_id'] };
}, fbg2evl['getPublicData'] = function () {
  fkct5sx_('getPublicData');
}, fbg2evl['checkMsg'] = function (jm38e, rqd0yzo) {
  fkct5sx_('checkMsg', jm38e, rqd0yzo);
}, fbg2evl['checkMsgV2'] = function (t9hcs5, x_c8j) {
  fkct5sx_('checkMsgV2', t9hcs5, x_c8j);
}, fbg2evl['sendMessage'] = function (peum8a, malp2be, c_j54) {
  fkct5sx_('sendMessage', peum8a, malp2be, c_j54);
}, fbg2evl['videoAdvert'] = function (c_9ht5s, ts5ck) {
  fkct5sx_('videoAdvert', c_9ht5s, ts5ck);
}, fbg2evl['getGameConfig'] = function (amp2elb) {
  fkct5sx_('getGameConfig', amp2elb);
};