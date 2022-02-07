var H = wx.$F;
var fsj$v5 = wx['$F'],
    f$djqm = { 'game_id': '7', 'game_pkg': 'kttl-k1-_kttlgrzh_E', 'partner_id': '4', 'is_auth': !0x1, 'from': null };window['config'] = f$djqm;var fdjq$s = fean3i(),
    fptr6u4 = 'https://sdk.5tun.cn',
    fl4ptu0 = null,
    ftr981 = null,
    faikv = '';function fean3i() {
  var wn0x = {};return { 'order_data': {}, 'init': function (eb3nai, sjqm$) {
      faikv = eb3nai && eb3nai['game_ver'] ? eb3nai['game_ver'] : 0x0, console['log']('[SDK]CP调用init接口');var e3na = this,
          trp6;trp6 = (yq$dm = wx['getStorageSync']('plat_uuid')) ? 0x0 : (yq$dm = e3na['uuid'](0x10, 0x20), wx['setStorageSync']('plat_uuid', yq$dm), 0x1), (eb3nai = wx['getStorageSync']('plat_idfv')) || (eb3nai = e3na['uuid'](0x10, 0x20), wx['setStorageSync']('plat_idfv', eb3nai));var yq$dm = wx['getLaunchOptionsSync']();eb3nai = yq$dm['scene'] || '', (console['log']('[SDK]小游戏启动参数'), console['log'](yq$dm), trp6 && yq$dm['query'] && yq$dm['query']['ad_code'] && wx['setStorageSync']('plat_ad_code', yq$dm['query']['ad_code']), yq$dm['query'] && yq$dm['query']['from'] && '' != yq$dm['query']['from'] ? (trp6 && wx['setStorageSync']('plat_from', yq$dm['query']['from']), f$djqm['from'] = yq$dm['query']['from']) : (yq$dm = wx['getStorageSync']('plat_from')) || '' == yq$dm || (f$djqm['from'] = yq$dm), console['log'](f$djqm['from']), e3na['log']('start', { 'install': trp6, 'scene': eb3nai }), wx['showShareMenu'](), faikv && this['checkGameVersion'](faikv, function (ut640) {
        sjqm$ && sjqm$(ut640);
      }));
    }, 'login': function (r968, kajv5_) {
      console['log']('[SDK]调起登录');var pu04t6 = this;wn0x['login'] = 'function' == typeof kajv5_ ? kajv5_ : null, f$djqm['is_auth'] ? wx['getSetting']({ 'success': function (y$gq) {
          var e0xwnl, sd$vj;y$gq['authSetting']['scope.userInfo'] ? (console['log']('[SDK]获得授权设置\uFF1A已授权'), pu04t6['do_login']()) : (console['log']('[SDK]获得授权设置\uFF1A未授权'), wx['hideLoading']({}), y$gq = 0x2 * (e0xwnl = wx['getSystemInfoSync']())['screenWidth'] / 0x3, e0xwnl['screenHeight'], (sd$vj = wx['createUserInfoButton']({ 'type': 'text', 'text': '授权登录游戏', 'withCredentials': !0x1, 'style': { 'top': e0xwnl['windowHeight'] / 0x2 + e0xwnl['windowHeight'] / 0x4, 'left': e0xwnl['windowWidth'] / 0x2 - 0x64, 'width': 0xc8, 'height': 0x28, 'lineHeight': 0x28, 'backgroundColor': '#07c160', 'color': '#ffffff', 'textAlign': 'center', 'fontSize': 0x10, 'borderRadius': 0x4 } }))['show'](), sd$vj['onTap'](mqy$7g => {
            console['log'](mqy$7g), f1A$I2({ 'title': '正在登录游戏' }), 'getUserInfo:ok' == mqy$7g['errMsg'] ? pu04t6['do_login']({ 'head_img': mqy$7g['userInfo']['avatarUrl'] || '', 'nick_name': mqy$7g['userInfo']['nickName'] || '' }) : pu04t6['do_login'](), sd$vj['destroy']();
          }));
        }, 'fail': function () {
          console['log']('[SDK]获得授权设置\uFF1A失败'), pu04t6['do_login']();
        } }) : (console['log']('[SDK]授权登录' + f$djqm['is_auth']), pu04t6['do_login']());
    }, 'do_login': function (u40tpl) {
      var kj_va = this;wx['login']({ 'success': function (ln0w) {
          var ebn3ia;console['log']('微信登录成功返回' + JSON['stringify'](ln0w)), ln0w['code'] ? ((ebn3ia = kj_va['getPublicData']())['mo'] = 0x1, ebn3ia['code'] = ln0w['code'], ebn3ia['nick_name'] = u40tpl ? u40tpl['nick_name'] : '', ebn3ia['head_img'] = u40tpl ? u40tpl['head_img'] : '', f$djqm['is_auth'] ? wx['getUserInfo']({ 'success': function (_s5vkj) {
              var wenix = _s5vkj['encryptedData'],
                  l0wuxe = _s5vkj['iv'];_s5vkj = _s5vkj['signature'], (ebn3ia['encryptedData'] = wenix, ebn3ia['iv'] = l0wuxe, ebn3ia['signature'] = _s5vkj, wx['request']({ 'url': fptr6u4 + '/partner/auth', 'method': 'POST', 'dataType': 'json', 'header': { 'content-type': 'application/x-www-form-urlencoded' }, 'data': ebn3ia, 'success': function (_j5av) {
                  if (console['log']('[SDK]登录结果\uFF1A'), console['log'](_j5av), 0xc8 == _j5av['statusCode']) {
                    var ut6r4p = _j5av['data'];if (ut6r4p['state']) {
                      _j5av = { 'userid': ut6r4p['data']['user_id'], 'account': ut6r4p['data']['nick_name'], 'token': ut6r4p['data']['token'] };try {
                        wx['setStorageSync']('plat_sdk_token', ut6r4p['data']['sdk_token']), wx['setStorageSync']('plat_uid', ut6r4p['data']['user_id']), wx['setStorageSync']('plat_username', ut6r4p['data']['username']), wx['setStorageSync']('wx_openid', ut6r4p['data']['openid']), ut6r4p['data']['ext'] && wx['setStorageSync']('plat_session_key', ut6r4p['data']['ext']);
                      } catch (rtpu46) {}wn0x['login'] && wn0x['login'](0x0, _j5av);
                    } else wn0x['login'] && wn0x['login'](0x1, { 'errMsg': ut6r4p['msg'] });
                  } else wn0x['login'] && wn0x['login'](0x1, { 'errMsg': '请求平台服务器失败\uFF01#1' });
                }, 'fail': function (c89zo) {
                  wn0x['login'] && wn0x['login'](0x1, { 'errMsg': c89zo['errMsg'] });
                } }));
            }, 'fail': function (ewnxi3) {
              wn0x['login'] && wn0x['login'](0x1, { 'errMsg': ewnxi3['errMsg'] });
            } }) : wx['request']({ 'url': fptr6u4 + '/partner/auth', 'method': 'POST', 'dataType': 'json', 'header': { 'content-type': 'application/x-www-form-urlencoded' }, 'data': ebn3ia, 'success': function (m$jsd) {
              if (console['log']('[SDK]登录结果\uFF1A'), console['log'](m$jsd), 0xc8 == m$jsd['statusCode']) {
                var p4x0lu = m$jsd['data'];if (p4x0lu['state']) {
                  m$jsd = { 'userid': p4x0lu['data']['user_id'], 'account': p4x0lu['data']['nick_name'], 'token': p4x0lu['data']['token'] };try {
                    wx['setStorageSync']('plat_sdk_token', p4x0lu['data']['sdk_token']), wx['setStorageSync']('plat_uid', p4x0lu['data']['user_id']), wx['setStorageSync']('plat_username', p4x0lu['data']['username']), wx['setStorageSync']('wx_openid', p4x0lu['data']['openid']), p4x0lu['data']['ext'] && wx['setStorageSync']('plat_session_key', p4x0lu['data']['ext']);
                  } catch (gmdqy$) {}wn0x['login'] && wn0x['login'](0x0, m$jsd);
                } else wn0x['login'] && wn0x['login'](0x1, { 'errMsg': p4x0lu['msg'] });
              } else wn0x['login'] && wn0x['login'](0x1, { 'errMsg': '请求平台服务器失败\uFF01#2' });
            } })) : wn0x['login'] && wn0x['login'](0x1, { 'errMsg': ln0w['errMsg'] });
        }, 'fail': function (b3nkai) {
          console['log']('微信登录失败' + JSON['stringify'](b3nkai)), (-0x1 < b3nkai['errMsg']['indexOf']('auth deny') || -0x1 < b3nkai['errMsg']['indexOf']('auth denied')) && wn0x['login'] && wn0x['login'](0x1, { 'errMsg': b3nkai['errMsg'] });
        } });
    }, 'checkGameVersion': function (t64rpu, nbwi) {
      console['log']('[SDK]检查游戏版本'), wx['getStorageSync']('plat_sdk_token'), wx['request']({ 'url': fptr6u4 + '/game/min/?ac=checkGameVersion', 'method': 'POST', 'dataType': 'json', 'header': { 'content-type': 'application/x-www-form-urlencoded' }, 'data': { 'game_pkg': f$djqm['game_pkg'], 'partner_id': f$djqm['partner_id'], 'game_ver': t64rpu }, 'success': function (x04wu) {
          var sjqd$m;console['log']('[SDK]获取游戏版本结果'), console['log'](x04wu), 0xc8 == x04wu['statusCode'] && (sjqd$m = x04wu['data'])['state'] ? nbwi && nbwi(sjqd$m['data']) : nbwi && nbwi({ 'develop': 0x0 });
        }, 'fail': function (v5_sj) {
          console['log'](v5_sj);
        } });
    }, 'pay': function (ux0ew, j_5sv) {
      var z1oc98 = this;wx['checkSession']({ 'success': function () {
          z1oc98['startPay'](ux0ew, j_5sv);
        }, 'fail': function () {
          console['log']('[SDK]session过期需要重新登录'), z1oc98['login']({}, function () {
            z1oc98['startPay'](ux0ew, j_5sv);
          });
        } });
    }, 'startPay': function (t8r, lxpu04) {
      console['log']('[SDK]调起支付\uFF0CCP传值\uFF1A'), console['log'](t8r);var pu64tr = this;wn0x['pay'] = 'function' == typeof lxpu04 ? lxpu04 : null;var dj5sv_ = wx['getStorageSync']('plat_sdk_token');lxpu04 = wx['getStorageSync']('plat_session_key');var p9t68r;dj5sv_ && lxpu04 ? (p9t68r = wx['getSystemInfoSync'](), dj5sv_ = { 'cpbill': t8r['cpbill'], 'productid': t8r['productid'], 'productname': t8r['productname'], 'productdesc': t8r['productdesc'], 'serverid': t8r['serverid'], 'servername': t8r['servername'], 'roleid': t8r['roleid'], 'rolename': t8r['rolename'], 'rolelevel': t8r['rolelevel'], 'price': t8r['price'], 'extension': t8r['extension'], 'sdk_token': dj5sv_, 'session_key': lxpu04, 'platform': p9t68r['platform'] }, pu64tr['order_data'] = dj5sv_, (lxpu04 = pu64tr['getPublicData']())['order_data'] = JSON['stringify'](dj5sv_), wx['request']({ 'url': fptr6u4 + '/partner/order', 'method': 'POST', 'dataType': 'json', 'header': { 'content-type': 'application/x-www-form-urlencoded' }, 'data': lxpu04, 'success': function (smy$q) {
          console['log']('[SDK]完成创建订单'), console['log'](smy$q), 0xc8 == smy$q['statusCode'] ? (smy$q = smy$q['data'])['state'] ? void 0x0 === wx['requestPayment'] ? 'android' == p9t68r['platform'] || 'windows' == p9t68r['platform'] || 'devtools' == p9t68r['platform'] ? smy$q['data']['is_android_pay'] ? pu64tr['kfPay'](smy$q['data']) : pu64tr['gamePay'](smy$q['data']) : smy$q['data']['is_ios_pay'] ? 0x1 == smy$q['data']['ios_pay_type'] && pu64tr['kfPay'](smy$q['data']) : wx['showModal']({ 'title': '支付提示', 'content': '很抱歉，由于苹果政策，暂时不能支付，安卓手机不受影响', 'confirmText': '我知道了', 'showCancel': !0x1 }) : pu64tr['minPay'](smy$q['data']) : wn0x['pay'] && wn0x['pay'](0x1, { 'errMsg': smy$q['msg'] }) : wn0x['login'] && wn0x['login'](0x1, { 'errMsg': '请求平台服务器失败\uFF01#3' });
        } })) : wn0x['pay'] && wn0x['pay'](0x1, { 'errMsg': '用户未登录，支付失败！' });
    }, 'gamePay': function (djs5v) {
      var jdmq$s = this;djs5v['buyQuantity'] <= djs5v['balance'] ? (console['log']('[SDK]游戏币充值直接扣除'), wx['showModal']({ 'title': '支付提示', 'content': '您还有' + djs5v['balance'] + '个游戏币未消费，本次支付将扣除' + djs5v['buyQuantity'] + '游戏币', 'showCancel': !0x1, 'confirmText': '我知道了', 'success': function () {
          jdmq$s['gameGoPay'](djs5v);
        } })) : (console['log']('[SDK]调起米大师支付'), console['log'](djs5v), wx['requestMidasPayment']({ 'mode': 'game', 'env': djs5v['env'], 'offerId': djs5v['offerId'], 'currencyType': djs5v['currencyType'], 'platform': djs5v['platform'], 'buyQuantity': djs5v['buyQuantity'], 'zoneId': djs5v['zoneId'], 'success': function (hc2z1) {
          'requestMidasPayment:ok' == hc2z1['errMsg'] && jdmq$s['gameGoPay'](djs5v);
        }, 'fail': function (r9861z) {
          -0x1 !== r9861z['errMsg']['indexOf']('用户取消') ? wn0x['pay'] && wn0x['pay'](0x2, { 'errMsg': '用户取消支付' }) : wn0x['pay'] && wn0x['pay'](0x1, { 'errMsg': '支付失败:' + r9861z['errMsg'] + '(' + r9861z['errCode'] + ')' });
        }, 'complete': function (ru4) {} }));
    }, 'kfPay': function (ka_5vb) {
      ftr981 = ka_5vb['orderId'], wx['showModal']({ 'title': '支付提示', 'content': '进入客服会话\uFF0C点击右下角小卡片或输入"cz"或"充值"获取支付链接', 'showCancel': !0x1, 'confirmText': '我知道了', 'success': function () {
          wx['openCustomerServiceConversation']({ 'showMessageCard': !0x0, 'sendMessageTitle': '不用点这个卡片', 'sendMessageImg': 'https://static.357pk.net/uploads/2109/weixin_pay_img1.png' });
        } });
    }, 'gameGoPay': function (p64tr9, ixew) {
      console['log']('[SDK]米大师支付完毕\uFF0C通知服务器发货');var up4t60 = this,
          o9z8r1 = wx['getStorageSync']('plat_session_key');wx['request']({ 'url': fptr6u4 + '/partner/pay/' + f$djqm['partner_id'] + '/' + f$djqm['game_pkg'] + '/', 'method': 'POST', 'dataType': 'json', 'header': { 'content-type': 'application/x-www-form-urlencoded' }, 'data': { 'order_id': p64tr9['orderId'], 'time': p64tr9['time'], 'sign': p64tr9['sign'], 'session_key': o9z8r1 }, 'success': function (t6ur) {
          console['log']('[SDK]米大师支付结果'), console['log'](t6ur), 0xc8 == t6ur['statusCode'] && (0x1 == t6ur['data']['state'] ? (t6ur = { 'cpOrderNo': up4t60['order_data']['cpbill'], 'orderNo': p64tr9['orderId'], 'amount': up4t60['order_data']['price'], 'extension': up4t60['order_data']['extension'] }, wn0x['pay'] && wn0x['pay'](0x0, t6ur)) : wn0x['pay'] && wn0x['pay'](0x1, { 'errMsg': '支付失败' }));
        }, 'fail': function () {} });
    }, 'logCreateRole': function ($qm7g) {
      var rz18 = wx['getStorageSync']('plat_uid'),
          $qdmyg = wx['getStorageSync']('plat_username'),
          nwe3l = {};nwe3l['user_id'] = rz18, nwe3l['user_name'] = $qdmyg, nwe3l['role_id'] = $qm7g['roleid'], nwe3l['role_lev'] = $qm7g['rolelevel'], nwe3l['role_name'] = $qm7g['rolename'], nwe3l['server_id'] = $qm7g['serverid'], $qm7g['roleid'] && $qm7g['serverid'] && (fl4ptu0 = { 'role_id': $qm7g['roleid'], 'server_id': $qm7g['serverid'] }), this['log']('create', nwe3l);
    }, 'logEnterGame': function (zo8hc1) {
      var r8196t = wx['getStorageSync']('plat_uid'),
          ewux0l = wx['getStorageSync']('plat_username'),
          nebai3 = {};nebai3['user_id'] = r8196t, nebai3['user_name'] = ewux0l, nebai3['role_id'] = zo8hc1['roleid'], nebai3['role_lev'] = zo8hc1['rolelevel'], nebai3['role_name'] = zo8hc1['rolename'], nebai3['server_id'] = zo8hc1['serverid'], zo8hc1['roleid'] && zo8hc1['serverid'] && (fl4ptu0 = { 'role_id': zo8hc1['roleid'], 'server_id': zo8hc1['serverid'] }), this['log']('enter', nebai3);
    }, 'logRoleUpLevel': function (xnle) {
      var l4wu0x = wx['getStorageSync']('plat_uid'),
          eb3wn = wx['getStorageSync']('plat_username'),
          ho21cz = {};ho21cz['user_id'] = l4wu0x, ho21cz['user_name'] = eb3wn, ho21cz['role_id'] = xnle['roleid'], ho21cz['role_lev'] = xnle['rolelevel'], ho21cz['role_name'] = xnle['rolename'], ho21cz['server_id'] = xnle['serverid'], xnle['roleid'] && xnle['serverid'] && (fl4ptu0 = { 'role_id': xnle['roleid'], 'server_id': xnle['serverid'] }), this['log']('levelup', ho21cz);
    }, 'uuid': function (r1689t, uxwl04) {
      var e3nwbi = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'['split'](''),
          we3nix,
          ho2z1 = [],
          rpt694;if (r1689t = r1689t || e3nwbi['length'], uxwl04) {
        for (we3nix = 0x0; we3nix < uxwl04; we3nix++) ho2z1[we3nix] = e3nwbi[0x0 | Math['random']() * r1689t];
      } else {
        for (ho2z1[0x8] = ho2z1[0xd] = ho2z1[0x12] = ho2z1[0x17] = '-', ho2z1[0xe] = '4', we3nix = 0x0; we3nix < 0x24; we3nix++) ho2z1[we3nix] || (rpt694 = 0x0 | 0x10 * Math['random'](), ho2z1[we3nix] = e3nwbi[0x13 == we3nix ? 0x3 & rpt694 | 0x8 : rpt694]);
      }return ho2z1['join']('');
    }, 'getPublicData': function () {
      var wl0uxe = wx['getSystemInfoSync'](),
          utpl04 = wx['getStorageSync']('plat_uuid'),
          $js5md = wx['getStorageSync']('plat_idfv'),
          coz89 = wx['getStorageSync']('plat_ad_code');return { 'game_id': f$djqm['game_id'], 'game_pkg': f$djqm['game_pkg'], 'partner_id': f$djqm['partner_id'], 'ad_code': coz89, 'uuid': utpl04, 'idfv': $js5md, 'dname': wl0uxe['model'], 'mac': '0000', 'net_type': 0x0 == wl0uxe['wifiSignal'] ? '4G' : 'WIFI', 'os_ver': wl0uxe['system'], 'sdk_ver': wl0uxe['version'], 'game_ver': faikv, 'device': 'android' == wl0uxe['platform'] ? 0x1 : 0x2, 'is_from_min': 0x1 };
    }, 'log': function (t4p06, t4u6r) {
      var w0xen = this['getPublicData']();for (var bien3w in t4u6r) w0xen[bien3w] = t4u6r[bien3w];console['log']('[SDK]上报数据\uFF1A' + t4p06), console['log'](w0xen), wx['request']({ 'url': fptr6u4 + '/partner/h5Log/?type=' + t4p06 + '&data=' + encodeURIComponent(JSON['stringify'](w0xen)) });
    }, 'getDate': function () {
      var eibna3 = new Date();return eibna3['getFullYear']() + '-' + eibna3['getMonth']() + '-' + eibna3['getDate']();
    }, 'downloadClient': function () {
      var ka3ni = '微端-不用点这个卡片-' + wx['getStorageSync']('wx_openid');wx['showModal']({ 'title': '微端下载提示', 'content': '进入客服会话，点击右下角小卡片获取微端下载链接', 'showCancel': !0x1, 'confirmText': '我知道了', 'success': function () {
          wx['openCustomerServiceConversation']({ 'showMessageCard': !0x0, 'sendMessageTitle': ka3ni, 'sendMessageImg': 'https://static.357pk.net/uploads/2109/weixin_download_img2.jpg' });
        } });
    }, 'checkMsg': function (ai3kb_, up4tr6) {
      console['log']('[SDK]查看文本是否有违规内容');var o18zc = wx['getStorageSync']('plat_sdk_token');wx['request']({ 'url': fptr6u4 + '/game/min/?ac=msgCheck', 'method': 'POST', 'dataType': 'json', 'header': { 'content-type': 'application/x-www-form-urlencoded' }, 'data': { 'game_pkg': f$djqm['game_pkg'], 'partner_id': f$djqm['partner_id'], 'sdk_token': o18zc, 'content': ai3kb_ }, 'success': function (rz8o1) {
          console['log']('[SDK]查看文本是否有违规内容结果返回:'), up4tr6 && up4tr6(0x0 == rz8o1['data']['code'] ? 0x1 : 0x0, rz8o1['data']['msg']);
        } });
    }, 'checkMsgV2': function ($mj, q$jms) {
      console['log']('[SDK]查看文本是否有违规内容');var z6918r = wx['getStorageSync']('plat_sdk_token');wx['request']({ 'url': fptr6u4 + '/game/min/?ac=msgCheckV2', 'method': 'POST', 'dataType': 'json', 'header': { 'content-type': 'application/x-www-form-urlencoded' }, 'data': { 'game_pkg': f$djqm['game_pkg'], 'partner_id': f$djqm['partner_id'], 'sdk_token': z6918r, 'content': $mj, 'scene': 0x1 }, 'success': function (t9p6r4) {
          console['log']('[SDK]查看文本是否有违规内容结果返回:'), q$jms && q$jms(0x0 == t9p6r4['data']['code'] ? 0x1 : 0x0, t9p6r4['data']['msg']);
        } });
    }, 'sendMessage': function (t469p, jv5_d, vj$sd) {
      console['log']('[SDK]发送订阅消息');var $sdmjq = wx['getStorageSync']('plat_sdk_token');wx['request']({ 'url': fptr6u4 + '/game/min/?ac=sendMessage', 'method': 'POST', 'dataType': 'json', 'header': { 'content-type': 'application/x-www-form-urlencoded' }, 'data': { 'game_pkg': f$djqm['game_pkg'], 'partner_id': f$djqm['partner_id'], 'sdk_token': $sdmjq, 'template_id': t469p, 'data': jv5_d }, 'success': function ($ydqgm) {
          console['log']('[SDK]订阅消息发送成功'), vj$sd && vj$sd(0x0 == $ydqgm['data']['code'] ? 0x1 : 0x0, $ydqgm['data']['msg']);
        } });
    } };
}function fb_3kia(w0eulx, kai3bn, upl4x0) {
  w0eulx in fdjq$s && fdjq$s[w0eulx](kai3bn, upl4x0);
}exports['init'] = function (ut6p04, zh81o) {
  fb_3kia('init', ut6p04, zh81o);
}, exports['login'] = function (r6pt8) {
  fb_3kia('login', '', r6pt8);
}, exports['pay'] = function (tr6, _ak3) {
  fb_3kia('pay', tr6, _ak3);
}, exports['logCreateRole'] = function (y$mgd, z9r86, l0xeuw, t0u, qys$dm) {
  fb_3kia('logCreateRole', { 'serverid': y$mgd, 'servername': z9r86, 'roleid': l0xeuw, 'rolename': t0u, 'rolelevel': qys$dm });
}, exports['logEnterGame'] = function (s$j5d, kv5s_, $yq7gm, r4p9t, t46rup) {
  fb_3kia('logEnterGame', { 'serverid': s$j5d, 'servername': kv5s_, 'roleid': $yq7gm, 'rolename': r4p9t, 'rolelevel': t46rup });
}, exports['logRoleUpLevel'] = function (a3bei, o19r8, ja_5k, ni3akb, cz81o) {
  fb_3kia('logRoleUpLevel', { 'serverid': a3bei, 'servername': o19r8, 'roleid': ja_5k, 'rolename': ni3akb, 'rolelevel': cz81o });
}, exports['downloadClient'] = function () {
  fb_3kia('downloadClient');
}, exports['getConfig'] = function () {
  return { 'game_id': f$djqm['game_id'], 'game_pkg': f$djqm['game_pkg'], 'partner_id': f$djqm['partner_id'] };
}, exports['getPublicData'] = function () {
  fb_3kia('getPublicData');
}, exports['checkMsg'] = function (o9z1r8, pt64u0) {
  fb_3kia('checkMsg', o9z1r8, pt64u0);
}, exports['checkMsgV2'] = function (xlu0p4, _skv5j) {
  fb_3kia('checkMsgV2', xlu0p4, _skv5j);
}, exports['sendMessage'] = function (av_ib, ch8, vs5_) {
  fb_3kia('sendMessage', av_ib, ch8, vs5_);
};