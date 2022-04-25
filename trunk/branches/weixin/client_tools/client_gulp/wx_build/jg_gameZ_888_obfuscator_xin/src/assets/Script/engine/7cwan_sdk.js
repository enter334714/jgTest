var H = wx.$F;
let fujk8 = { 'game_id': '11', 'game_pkg': 'wzcq-q2-_q2wxxcxgrzh_J', 'partner_id': '4', 'is_auth': !(0xc92 + 0x2 * -0x9fb + 0x765), 'from': null };window['config'] = fujk8;let fwhi9st = fgb2l(),
    fbeavl2 = 'https://sdk.5tun.cn',
    fhw$i71 = null,
    fgal = null,
    fsitw9 = '';function fgb2l() {
  var qr06 = {};return { 'order_data': {}, 'init': function (oqzd0y, w7i9$) {
      fsitw9 = oqzd0y && oqzd0y['game_ver'] ? oqzd0y['game_ver'] : 0x1 * -0x205b + -0x5 * 0x3d7 + -0x338e * -0x1, console['log']('[SDK]CP调用init接口');var h5s9wt,
          gbla2 = wx['getStorageSync']('plat_uuid');gbla2 ? h5s9wt = -0x839 + -0x3e3 * -0x5 + -0xb36 : (gbla2 = this['uuid'](-0x22ef + -0xf74 + 0x3273, 0x1222 + 0x96a + -0x2be * 0xa), wx['setStorageSync']('plat_uuid', gbla2), h5s9wt = -0x141 + -0xef5 * 0x1 + 0x1037);var q6z0 = wx['getStorageSync']('plat_idfv');q6z0 || (q6z0 = this['uuid'](0x1 * -0x1bf3 + 0x2bd * 0x2 + -0x9 * -0x281, 0x1c3c * -0x1 + 0x2121 + -0x4c5), wx['setStorageSync']('plat_idfv', q6z0));var j843u = wx['getLaunchOptionsSync'](),
          wi9tsh = j843u['scene'] ? j843u['scene'] : '';if (console['log']('[SDK]小游戏启动参数'), console['log'](j843u), h5s9wt && j843u['query'] && j843u['query']['ad_code'] && wx['setStorageSync']('plat_ad_code', j843u['query']['ad_code']), j843u['query'] && j843u['query']['from'] && '' != j843u['query']['from']) h5s9wt && wx['setStorageSync']('plat_from', j843u['query']['from']), fujk8['from'] = j843u['query']['from'];else {
        var mepu3 = wx['getStorageSync']('plat_from');mepu3 || '' == mepu3 || (fujk8['from'] = mepu3);
      }console['log'](fujk8['from']);var lbe2 = { 'install': h5s9wt, 'scene': wi9tsh };this['log']('start', lbe2), wx['showShareMenu'](), fsitw9 && this['checkGameVersion'](fsitw9, function (kxj84u) {
        w7i9$ && w7i9$(kxj84u);
      });
    }, 'login': function (gb2vl, aglb2v) {
      console['log']('[SDK]调起登录');var kcx4_ = this;qr06['login'] = 'function' == typeof aglb2v ? aglb2v : null, fujk8['is_auth'] ? wx['getSetting']({ 'success': function (umpe3) {
          if (umpe3['authSetting']['scope.userInfo']) console['log']('[SDK]获得授权设置\uFF1A已授权'), kcx4_['do_login']();else {
            console['log']('[SDK]获得授权设置\uFF1A未授权'), wx['hideLoading']({});var z0r61 = wx['getSystemInfoSync'](),
                h$i9w = (z0r61['screenWidth'], z0r61['screenHeight'], wx['createUserInfoButton']({ 'type': 'text', 'text': '授权登录游戏', 'withCredentials': !(-0xcb4 + 0x6b1 * -0x5 + -0x2 * -0x1715), 'style': { 'top': z0r61['windowHeight'] / (-0x1675 + -0x294 + 0x190b) + z0r61['windowHeight'] / (-0x1353 + -0xec4 + 0x1 * 0x221b), 'left': z0r61['windowWidth'] / (0x26b7 + 0x122 + -0x27d7 * 0x1) - (-0x2013 + 0x33 * 0x45 + 0x1 * 0x12b8), 'width': 0xc8, 'height': 0x28, 'lineHeight': 0x28, 'backgroundColor': '#07c160', 'color': '#ffffff', 'textAlign': 'center', 'fontSize': 0x10, 'borderRadius': 0x4 } }));h$i9w['show'](), h$i9w['onTap'](h9$wi => {
              console['log'](h9$wi), f33BL8({ 'title': '正在登录游戏' }), 'getUserInfo:ok' == h9$wi['errMsg'] ? kcx4_['do_login']({ 'head_img': h9$wi['userInfo']['avatarUrl'] || '', 'nick_name': h9$wi['userInfo']['nickName'] || '' }) : kcx4_['do_login'](), h$i9w['destroy']();
            });
          }
        }, 'fail': function () {
          console['log']('[SDK]获得授权设置\uFF1A失败'), kcx4_['do_login']();
        } }) : (console['log']('[SDK]授权登录' + fujk8['is_auth']), kcx4_['do_login']());
    }, 'do_login': function (u34jk) {
      var e2pbma = this;wx['login']({ 'success': function (jp8m) {
          if (console['log']('微信登录成功返回' + JSON['stringify'](jp8m)), jp8m['code']) {
            var lba2 = e2pbma['getPublicData']();lba2['mo'] = 0x1753 + 0x1f8e + -0x36e0, lba2['code'] = jp8m['code'], lba2['nick_name'] = u34jk ? u34jk['nick_name'] : '', lba2['head_img'] = u34jk ? u34jk['head_img'] : '', fujk8['is_auth'] ? wx['getUserInfo']({ 'success': function (eu8m3p) {
                var rqo0dz = eu8m3p['encryptedData'],
                    maelb = eu8m3p['iv'],
                    c_4xk = eu8m3p['signature'];lba2['encryptedData'] = rqo0dz, lba2['iv'] = maelb, lba2['signature'] = c_4xk, wx['request']({ 'url': fbeavl2 + '/partner/auth', 'method': 'POST', 'dataType': 'json', 'header': { 'content-type': 'application/x-www-form-urlencoded' }, 'data': lba2, 'success': function (h9$iw) {
                    if (console['log']('[SDK]登录结果\uFF1A'), console['log'](h9$iw), -0x8c9 + -0x23c4 + 0x2d55 == h9$iw['statusCode']) {
                      var qnzr = h9$iw['data'];if (qnzr['state']) {
                        var m8ue3p = { 'userid': qnzr['data']['user_id'], 'account': qnzr['data']['nick_name'], 'token': qnzr['data']['token'] };try {
                          wx['setStorageSync']('plat_sdk_token', qnzr['data']['sdk_token']), wx['setStorageSync']('plat_uid', qnzr['data']['user_id']), wx['setStorageSync']('plat_username', qnzr['data']['username']), wx['setStorageSync']('wx_openid', qnzr['data']['openid']), qnzr['data']['ext'] && wx['setStorageSync']('plat_session_key', qnzr['data']['ext']);
                        } catch (s_c5xt) {}qr06['login'] && qr06['login'](0xda4 + -0x422 + -0x982, m8ue3p);
                      } else qr06['login'] && qr06['login'](-0x1 * -0x22bd + -0x86 * 0x2e + -0x554 * 0x2, { 'errMsg': qnzr['msg'] });
                    } else qr06['login'] && qr06['login'](0x2 * -0x6d1 + -0x7 * -0x469 + 0x44f * -0x4, { 'errMsg': '请求平台服务器失败\uFF01#1' });
                  }, 'fail': function (x4kj8) {
                    qr06['login'] && qr06['login'](-0x4d * -0x3d + -0x69e + -0xbba, { 'errMsg': x4kj8['errMsg'] });
                  } });
              }, 'fail': function (i71nw$) {
                qr06['login'] && qr06['login'](0x233e + 0x189 * -0x4 + 0x3 * -0x9b3, { 'errMsg': i71nw$['errMsg'] });
              } }) : wx['request']({ 'url': fbeavl2 + '/partner/auth', 'method': 'POST', 'dataType': 'json', 'header': { 'content-type': 'application/x-www-form-urlencoded' }, 'data': lba2, 'success': function (iwh7) {
                if (console['log']('[SDK]登录结果\uFF1A'), console['log'](iwh7), 0x153a + -0x2662 + 0x11f0 == iwh7['statusCode']) {
                  var eb2lav = iwh7['data'];if (eb2lav['state']) {
                    var wsh97i = { 'userid': eb2lav['data']['user_id'], 'account': eb2lav['data']['nick_name'], 'token': eb2lav['data']['token'] };try {
                      wx['setStorageSync']('plat_sdk_token', eb2lav['data']['sdk_token']), wx['setStorageSync']('plat_uid', eb2lav['data']['user_id']), wx['setStorageSync']('plat_username', eb2lav['data']['username']), wx['setStorageSync']('wx_openid', eb2lav['data']['openid']), eb2lav['data']['ext'] && wx['setStorageSync']('plat_session_key', eb2lav['data']['ext']);
                    } catch (qord0z) {}qr06['login'] && qr06['login'](-0x25c + -0xb3b * 0x2 + 0x423 * 0x6, wsh97i);
                  } else qr06['login'] && qr06['login'](0x103f + 0x2077 + -0x30b5 * 0x1, { 'errMsg': eb2lav['msg'] });
                } else qr06['login'] && qr06['login'](0x3a * -0x47 + -0x2285 * 0x1 + 0x329c, { 'errMsg': '请求平台服务器失败\uFF01#2' });
              } });
          } else qr06['login'] && qr06['login'](-0x26 * -0xe5 + 0x6f7 * 0x5 + -0x10 * 0x44d, { 'errMsg': jp8m['errMsg'] });
        }, 'fail': function (pmaeb2) {
          console['log']('微信登录失败' + JSON['stringify'](pmaeb2)), (pmaeb2['errMsg']['indexOf']('auth deny') > -(0x14e * -0x11 + -0x76d * -0x1 + 0xec2) || pmaeb2['errMsg']['indexOf']('auth denied') > -(-0x1 * 0x20a4 + -0x547 * -0x7 + -0x44c * 0x1)) && qr06['login'] && qr06['login'](-0x9ad * -0x3 + 0x1 * -0x653 + -0x16b3, { 'errMsg': pmaeb2['errMsg'] });
        } });
    }, 'checkGameVersion': function (c8kj, zyoq0d) {
      console['log']('[SDK]检查游戏版本'), wx['getStorageSync']('plat_sdk_token'), wx['request']({ 'url': fbeavl2 + '/game/min/?ac=checkGameVersion', 'method': 'POST', 'dataType': 'json', 'header': { 'content-type': 'application/x-www-form-urlencoded' }, 'data': { 'game_pkg': fujk8['game_pkg'], 'partner_id': fujk8['partner_id'], 'game_ver': c8kj }, 'success': function (r$61n7) {
          if (console['log']('[SDK]获取游戏版本结果'), console['log'](r$61n7), -0x1cdb + -0x4a5 + 0x2248 == r$61n7['statusCode']) {
            var e38um = r$61n7['data'];e38um['state'] ? zyoq0d && zyoq0d(e38um['data']) : zyoq0d && zyoq0d({ 'develop': 0x0 });
          } else zyoq0d && zyoq0d({ 'develop': 0x0 });
        }, 'fail': function (ck5t_x) {
          console['log'](ck5t_x);
        } });
    }, 'pay': function (balev2, e8m3up) {
      var sc5t_9 = this;wx['checkSession']({ 'success': function () {
          sc5t_9['startPay'](balev2, e8m3up);
        }, 'fail': function () {
          console['log']('[SDK]session过期需要重新登录'), sc5t_9['login']({}, function () {
            sc5t_9['startPay'](balev2, e8m3up);
          });
        } });
    }, 'startPay': function (nw17, _9hts5) {
      console['log']('[SDK]调起支付\uFF0CCP传值\uFF1A'), console['log'](nw17);var zr$n1 = this;qr06['pay'] = 'function' == typeof _9hts5 ? _9hts5 : null, -0x71b + 0xe23 * 0x1 + -0x708;var rzn610 = wx['getStorageSync']('plat_sdk_token'),
          blma = wx['getStorageSync']('plat_session_key');if (rzn610 && blma) {
        var x_c5k4 = wx['getSystemInfoSync'](),
            w$71ni = { 'cpbill': nw17['cpbill'], 'productid': nw17['productid'], 'productname': nw17['productname'], 'productdesc': nw17['productdesc'], 'serverid': nw17['serverid'], 'servername': nw17['servername'], 'roleid': nw17['roleid'], 'rolename': nw17['rolename'], 'rolelevel': nw17['rolelevel'], 'price': nw17['price'], 'extension': nw17['extension'], 'sdk_token': rzn610, 'session_key': blma, 'platform': x_c5k4['platform'] };zr$n1['order_data'] = w$71ni;var p3ebam = zr$n1['getPublicData']();p3ebam['order_data'] = JSON['stringify'](w$71ni), wx['request']({ 'url': fbeavl2 + '/partner/order', 'method': 'POST', 'dataType': 'json', 'header': { 'content-type': 'application/x-www-form-urlencoded' }, 'data': p3ebam, 'success': function (g2lvb) {
            if (console['log']('[SDK]完成创建订单'), console['log'](g2lvb), 0x1272 + 0xf6 * 0x17 + -0x13e2 * 0x2 == g2lvb['statusCode']) {
              var _xc5 = g2lvb['data'];_xc5['state'] ? void (0x1b7f * -0x1 + -0x81 + 0x1c00) === wx['requestPayment'] ? 'android' == x_c5k4['platform'] || 'windows' == x_c5k4['platform'] || 'devtools' == x_c5k4['platform'] ? _xc5['data']['is_android_pay'] ? zr$n1['kfPay'](_xc5['data']) : zr$n1['gamePay'](_xc5['data']) : _xc5['data']['is_ios_pay'] ? -0x151e + -0x257 * -0x8 + -0x7b * -0x5 == _xc5['data']['ios_pay_type'] && zr$n1['kfPay'](_xc5['data']) : wx['showModal']({ 'title': '支付提示', 'content': '很抱歉，由于苹果政策，暂时不能支付，安卓手机不受影响', 'confirmText': '我知道了', 'showCancel': !(0xd6a + 0x184d * 0x1 + -0x25b6) }) : zr$n1['minPay'](_xc5['data']) : qr06['pay'] && qr06['pay'](-0x34 * -0x29 + 0x6fb * -0x2 + 0x5a3, { 'errMsg': _xc5['msg'] });
            } else qr06['login'] && qr06['login'](0x11 * 0x1af + 0x21d2 + -0x3e70, { 'errMsg': '请求平台服务器失败\uFF01#3' });
          } });
      } else qr06['pay'] && qr06['pay'](-0x1aa * 0xc + -0x1e19 + 0x3212, { 'errMsg': '用户未登录，支付失败！' });
    }, 'gamePay': function (pu48) {
      var k_5xct = this;pu48['buyQuantity'] <= pu48['balance'] ? (console['log']('[SDK]游戏币充值直接扣除'), wx['showModal']({ 'title': '支付提示', 'content': '您还有' + pu48['balance'] + '个游戏币未消费，本次支付将扣除' + pu48['buyQuantity'] + '游戏币', 'showCancel': !(0x263f * -0x1 + 0x1 * 0x15d4 + 0x106c), 'confirmText': '我知道了', 'success': function () {
          k_5xct['gameGoPay'](pu48);
        } })) : (console['log']('[SDK]调起米大师支付'), console['log'](pu48), wx['requestMidasPayment']({ 'mode': 'game', 'env': pu48['env'], 'offerId': pu48['offerId'], 'currencyType': pu48['currencyType'], 'platform': pu48['platform'], 'buyQuantity': pu48['buyQuantity'], 'zoneId': pu48['zoneId'], 'success': function (r0ozqd) {
          'requestMidasPayment:ok' == r0ozqd['errMsg'] && k_5xct['gameGoPay'](pu48);
        }, 'fail': function (h7i$1) {
          -(-0x1d1f + 0x323 + -0x19fd * -0x1) !== h7i$1['errMsg']['indexOf']('用户取消') ? qr06['pay'] && qr06['pay'](-0x5 * -0x23c + -0x6e4 + -0x2 * 0x223, { 'errMsg': '用户取消支付' }) : qr06['pay'] && qr06['pay'](0x1901 * -0x1 + 0xb * 0xb5 + 0x113b, { 'errMsg': '支付失败:' + h7i$1['errMsg'] + '(' + h7i$1['errCode'] + ')' });
        }, 'complete': function (kcx_5) {} }));
    }, 'kfPay': function (jxk8) {
      fgal = jxk8['orderId'], wx['showModal']({ 'title': '支付提示', 'content': '进入客服会话\uFF0C点击右下角小卡片或输入"cz"或"充值"获取支付链接', 'showCancel': !(0xd8b * 0x1 + -0x8a0 * -0x1 + 0xb15 * -0x2), 'confirmText': '我知道了', 'success': function () {
          wx['openCustomerServiceConversation']({ 'showMessageCard': !(-0x22f5 + -0x157e + 0x3873), 'sendMessageTitle': '不用点这个卡片', 'sendMessageImg': 'https://static.357pk.net/uploads/2109/weixin_pay_img1.png' });
        } });
    }, 'gameGoPay': function (n16z0, s7ih9) {
      console['log']('[SDK]米大师支付完毕\uFF0C通知服务器发货');var ct_5k = this,
          w5ths = wx['getStorageSync']('plat_session_key');wx['request']({ 'url': fbeavl2 + '/partner/pay/' + fujk8['partner_id'] + '/' + fujk8['game_pkg'] + '/', 'method': 'POST', 'dataType': 'json', 'header': { 'content-type': 'application/x-www-form-urlencoded' }, 'data': { 'order_id': n16z0['orderId'], 'time': n16z0['time'], 'sign': n16z0['sign'], 'session_key': w5ths }, 'success': function (nwi$) {
          if (console['log']('[SDK]米大师支付结果'), console['log'](nwi$), -0x6ee * -0x2 + -0xc69 + -0x13 * 0x9 == nwi$['statusCode']) {
            if (0x105 * -0x9 + 0x1df * 0x7 + -0x3eb == nwi$['data']['state']) {
              var mlbea2 = { 'cpOrderNo': ct_5k['order_data']['cpbill'], 'orderNo': n16z0['orderId'], 'amount': ct_5k['order_data']['price'], 'extension': ct_5k['order_data']['extension'] };qr06['pay'] && qr06['pay'](0x1fe0 + 0x9b0 + -0x2990, mlbea2);
            } else qr06['pay'] && qr06['pay'](-0x19c6 + 0x1a6a + 0x1 * -0xa3, { 'errMsg': '支付失败' });
          }
        }, 'fail': function () {} });
    }, 'logCreateRole': function (_ct5k) {
      var pam3e = wx['getStorageSync']('plat_uid'),
          yo0zd = wx['getStorageSync']('plat_username'),
          u43p = {};u43p['user_id'] = pam3e, u43p['user_name'] = yo0zd, u43p['role_id'] = _ct5k['roleid'], u43p['role_lev'] = _ct5k['rolelevel'], u43p['role_name'] = _ct5k['rolename'], u43p['server_id'] = _ct5k['serverid'], _ct5k['roleid'] && _ct5k['serverid'] && (fhw$i71 = { 'role_id': _ct5k['roleid'], 'server_id': _ct5k['serverid'] }), this['log']('create', u43p);
    }, 'logEnterGame': function (xj4k) {
      var alv2gb = wx['getStorageSync']('plat_uid'),
          h97wi = wx['getStorageSync']('plat_username'),
          b2vel = {};b2vel['user_id'] = alv2gb, b2vel['user_name'] = h97wi, b2vel['role_id'] = xj4k['roleid'], b2vel['role_lev'] = xj4k['rolelevel'], b2vel['role_name'] = xj4k['rolename'], b2vel['server_id'] = xj4k['serverid'], xj4k['roleid'] && xj4k['serverid'] && (fhw$i71 = { 'role_id': xj4k['roleid'], 'server_id': xj4k['serverid'] }), this['log']('enter', b2vel);
    }, 'logRoleUpLevel': function (shi7) {
      var tsc_ = wx['getStorageSync']('plat_uid'),
          p3ue8 = wx['getStorageSync']('plat_username'),
          i9wh$7 = {};i9wh$7['user_id'] = tsc_, i9wh$7['user_name'] = p3ue8, i9wh$7['role_id'] = shi7['roleid'], i9wh$7['role_lev'] = shi7['rolelevel'], i9wh$7['role_name'] = shi7['rolename'], i9wh$7['server_id'] = shi7['serverid'], shi7['roleid'] && shi7['serverid'] && (fhw$i71 = { 'role_id': shi7['roleid'], 'server_id': shi7['serverid'] }), this['log']('levelup', i9wh$7);
    }, 'uuid': function (gvb2l, yqdo) {
      var ht9wsi,
          whit9,
          m2pbe = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'['split'](''),
          aebv2 = [];if (gvb2l = gvb2l || m2pbe['length'], yqdo) {
        for (ht9wsi = -0x1 * 0x252d + -0x7d2 + 0x2cff * 0x1; ht9wsi < yqdo; ht9wsi++) aebv2[ht9wsi] = m2pbe[-0x4e * 0x15 + -0x3f + 0x237 * 0x3 | Math['random']() * gvb2l];
      } else {
        for (aebv2[0x6 * 0x447 + 0x68c + -0x55d * 0x6] = aebv2[0x1eb0 + -0x1a5 * 0xd + 0x942 * -0x1] = aebv2[0x1497 + -0x49 * -0x1d + -0x1cca] = aebv2[-0x35b * 0x2 + -0x6cc + 0xd99] = '-', aebv2[-0x608 + 0x4 * 0x5ae + -0x10a2 * 0x1] = '4', ht9wsi = 0x6 * -0x385 + -0x239f * 0x1 + 0x38bd; ht9wsi < -0x15fc + -0x13a * 0xe + 0x274c; ht9wsi++) aebv2[ht9wsi] || (whit9 = -0x1eb * 0x1 + -0xb08 + -0x3 * -0x451 | (-0x1 * -0x72b + -0x2336 + 0x1c1b * 0x1) * Math['random'](), aebv2[ht9wsi] = m2pbe[-0x2049 + 0xb2 + -0x6 * -0x547 == ht9wsi ? -0x21e4 + 0x1bf7 * -0x1 + 0x3dde & whit9 | 0x2 * -0x1079 + -0x5 * -0x58f + 0x52f * 0x1 : whit9]);
      }return aebv2['join']('');
    }, 'getPublicData': function () {
      var rzn601 = wx['getSystemInfoSync'](),
          ab2vle = wx['getStorageSync']('plat_uuid'),
          ku84x = wx['getStorageSync']('plat_idfv'),
          cx_k54 = wx['getStorageSync']('plat_ad_code');return { 'game_id': fujk8['game_id'], 'game_pkg': fujk8['game_pkg'], 'partner_id': fujk8['partner_id'], 'ad_code': cx_k54, 'uuid': ab2vle, 'idfv': ku84x, 'dname': rzn601['model'], 'mac': '0000', 'net_type': 0xd * 0x21e + -0x21ce + 0xc * 0x86 == rzn601['wifiSignal'] ? '4G' : 'WIFI', 'os_ver': rzn601['system'], 'sdk_ver': rzn601['version'], 'game_ver': fsitw9, 'device': 'android' == rzn601['platform'] ? -0x31 * 0x1d + 0x2eb * 0x1 + 0x2a3 : 0x3e * -0x42 + 0x20f8 + -0x35 * 0x52, 'is_from_min': 0x1 };
    }, 'log': function (qoydz0, _c5xtk) {
      var abpe2 = this['getPublicData']();for (var xtcs_ in _c5xtk) abpe2[xtcs_] = _c5xtk[xtcs_];console['log']('[SDK]上报数据\uFF1A' + qoydz0), console['log'](abpe2), wx['request']({ 'url': fbeavl2 + '/partner/h5Log/?type=' + qoydz0 + '&data=' + encodeURIComponent(JSON['stringify'](abpe2)) });
    }, 'getDate': function () {
      var z6$n1r = new Date();return z6$n1r['getFullYear']() + '-' + z6$n1r['getMonth']() + '-' + z6$n1r['getDate']();
    }, 'downloadClient': function () {
      var zrn1$6 = '微端-不用点这个卡片-' + wx['getStorageSync']('wx_openid');wx['showModal']({ 'title': '微端下载提示', 'content': '进入客服会话，点击右下角小卡片获取微端下载链接', 'showCancel': !(0x246e + -0x121b + -0x3aa * 0x5), 'confirmText': '我知道了', 'success': function () {
          var x84ck = { 'showMessageCard': !(-0x20a5 + 0x3 * -0xac7 + 0x40fa), 'sendMessageTitle': zrn1$6, 'sendMessageImg': 'https://static.357pk.net/uploads/2109/weixin_download_img2.jpg' };wx['openCustomerServiceConversation'](x84ck);
        } });
    }, 'checkMsg': function (zr6q0, r6oq0z) {
      console['log']('[SDK]查看文本是否有违规内容');var wh9 = wx['getStorageSync']('plat_sdk_token');wx['request']({ 'url': fbeavl2 + '/game/min/?ac=msgCheck', 'method': 'POST', 'dataType': 'json', 'header': { 'content-type': 'application/x-www-form-urlencoded' }, 'data': { 'game_pkg': fujk8['game_pkg'], 'partner_id': fujk8['partner_id'], 'sdk_token': wh9, 'content': zr6q0 }, 'success': function (h_5s9) {
          console['log']('[SDK]查看文本是否有违规内容结果返回:'), r6oq0z && r6oq0z(0x998 + 0x654 + 0x7f6 * -0x2 == h_5s9['data']['code'] ? 0x100d + 0xb * -0x278 + 0x3 * 0x3b4 : 0x2091 + -0xe81 + -0x1210, h_5s9['data']['msg']);
        } });
    }, 'checkMsgV2': function (_5tcsx, c_xkj4) {
      console['log']('[SDK]查看文本是否有违规内容');var w$1in7 = wx['getStorageSync']('plat_sdk_token');wx['request']({ 'url': fbeavl2 + '/game/min/?ac=msgCheckV2', 'method': 'POST', 'dataType': 'json', 'header': { 'content-type': 'application/x-www-form-urlencoded' }, 'data': { 'game_pkg': fujk8['game_pkg'], 'partner_id': fujk8['partner_id'], 'sdk_token': w$1in7, 'content': _5tcsx, 'scene': 0x1 }, 'success': function (pmaeu3) {
          console['log']('[SDK]查看文本是否有违规内容结果返回:'), c_xkj4 && c_xkj4(-0x1 * 0x23f3 + -0xcd7 * -0x1 + 0x2 * 0xb8e == pmaeu3['data']['code'] ? -0x14d6 * -0x1 + -0x749 * 0x1 + -0xd8c : 0x151 * -0x13 + 0x1 * 0x5f2 + 0x1311, pmaeu3['data']['msg']);
        } });
    }, 'sendMessage': function (labve, r1n7$, p2aem) {
      console['log']('[SDK]发送订阅消息');var c4jx_ = wx['getStorageSync']('plat_sdk_token');wx['request']({ 'url': fbeavl2 + '/game/min/?ac=sendMessage', 'method': 'POST', 'dataType': 'json', 'header': { 'content-type': 'application/x-www-form-urlencoded' }, 'data': { 'game_pkg': fujk8['game_pkg'], 'partner_id': fujk8['partner_id'], 'sdk_token': c4jx_, 'template_id': labve, 'data': r1n7$ }, 'success': function (ux84kj) {
          console['log']('[SDK]订阅消息发送成功'), p2aem && p2aem(0xb2a + 0x138a + -0x1eb4 == ux84kj['data']['code'] ? -0x2424 + 0xe7a + -0x15ab * -0x1 : -0x24c9 + -0x187 * -0x1 + 0x2342, ux84kj['data']['msg']);
        } });
    } };
}function fqoy0dz(_x4kc5, h7w9is, oqr06) {
  _x4kc5 in fwhi9st && fwhi9st[_x4kc5](h7w9is, oqr06);
}const fqrdo = {};window['cwan'] = fqrdo, fqrdo['init'] = function ($i761n, r0zdo) {
  fqoy0dz('init', $i761n, r0zdo);
}, fqrdo['login'] = function (is7w9h) {
  fqoy0dz('login', '', is7w9h);
}, fqrdo['pay'] = function (rn6, s59_tc) {
  fqoy0dz('pay', rn6, s59_tc);
}, fqrdo['logCreateRole'] = function (j_k4xc, $n6i71, va2lg, mu3ea, xukj) {
  fqoy0dz('logCreateRole', { 'serverid': j_k4xc, 'servername': $n6i71, 'roleid': va2lg, 'rolename': mu3ea, 'rolelevel': xukj });
}, fqrdo['logEnterGame'] = function (gb2lav, zy0oq, uk8x4, r0dqzo, g2abvl) {
  fqoy0dz('logEnterGame', { 'serverid': gb2lav, 'servername': zy0oq, 'roleid': uk8x4, 'rolename': r0dqzo, 'rolelevel': g2abvl });
}, fqrdo['logRoleUpLevel'] = function (tsi9, mp2ba, ts5c9_, ht5s9, odr0zq) {
  fqoy0dz('logRoleUpLevel', { 'serverid': tsi9, 'servername': mp2ba, 'roleid': ts5c9_, 'rolename': ht5s9, 'rolelevel': odr0zq });
}, fqrdo['downloadClient'] = function () {
  fqoy0dz('downloadClient');
}, fqrdo['getConfig'] = function () {
  return { 'game_id': fujk8['game_id'], 'game_pkg': fujk8['game_pkg'], 'partner_id': fujk8['partner_id'] };
}, fqrdo['getPublicData'] = function () {
  fqoy0dz('getPublicData');
}, fqrdo['checkMsg'] = function (_xjc4k, _5kxt) {
  fqoy0dz('checkMsg', _xjc4k, _5kxt);
}, fqrdo['checkMsgV2'] = function (xck4j8, ku84j3) {
  fqoy0dz('checkMsgV2', xck4j8, ku84j3);
}, fqrdo['sendMessage'] = function (jkx8c4, s_5ct, zyd0q) {
  fqoy0dz('sendMessage', jkx8c4, s_5ct, zyd0q);
};