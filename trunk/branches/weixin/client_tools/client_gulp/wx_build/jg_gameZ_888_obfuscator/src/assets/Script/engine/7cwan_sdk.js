var H = wx.$F;
let f_t9s5c = { 'game_id': '11', 'game_pkg': 'wzcq-q2-_q2wxxcxgrzh_J', 'partner_id': '4', 'is_auth': !0x1, 'from': null };window['config'] = f_t9s5c;let f_5kc4 = fj84k3(),
    falvb2g = 'https://sdk.357pk.net',
    fbl2av = null,
    fjxk4u = null,
    fxk_54 = '';function fj84k3() {
  var $167rn = {};return { 'order_data': {}, 'init': function (wi7$9h, uj4kx) {
      fxk_54 = wi7$9h && wi7$9h['game_ver'] ? wi7$9h['game_ver'] : 0x0, console['log']('[SDK]CP调用init接口');var q6roz0,
          ba2gv = wx['getStorageSync']('plat_uuid');ba2gv ? q6roz0 = 0x0 : (ba2gv = this['uuid'](0x10, 0x20), wx['setStorageSync']('plat_uuid', ba2gv), q6roz0 = 0x1);var $wn17i = wx['getStorageSync']('plat_idfv');$wn17i || ($wn17i = this['uuid'](0x10, 0x20), wx['setStorageSync']('plat_idfv', $wn17i));var nr16$7 = wx['getLaunchOptionsSync'](),
          lambe2 = nr16$7['scene'] ? nr16$7['scene'] : '';if (console['log']('[SDK]小游戏启动参数'), console['log'](nr16$7), q6roz0 && nr16$7['query'] && nr16$7['query']['ad_code'] && wx['setStorageSync']('plat_ad_code', nr16$7['query']['ad_code']), nr16$7['query'] && nr16$7['query']['from'] && '' != nr16$7['query']['from']) q6roz0 && wx['setStorageSync']('plat_from', nr16$7['query']['from']), f_t9s5c['from'] = nr16$7['query']['from'];else {
        var ua3pme = wx['getStorageSync']('plat_from');ua3pme || '' == ua3pme || (f_t9s5c['from'] = ua3pme);
      }console['log'](f_t9s5c['from']);var o6r0q = { 'install': q6roz0, 'scene': lambe2 };this['log']('start', o6r0q), wx['showShareMenu'](), fxk_54 && this['checkGameVersion'](fxk_54, function (hi$79) {
        uj4kx && uj4kx(hi$79);
      });
    }, 'login': function (stwi9, pmbe2) {
      console['log']('[SDK]调起登录');var ws9h5 = this;$167rn['login'] = 'function' == typeof pmbe2 ? pmbe2 : null, f_t9s5c['is_auth'] ? wx['getSetting']({ 'success': function (ws5h9) {
          if (ws5h9['authSetting']['scope.userInfo']) console['log']('[SDK]获得授权设置\uFF1A已授权'), ws9h5['do_login']();else {
            console['log']('[SDK]获得授权设置\uFF1A未授权'), wx['hideLoading']({});var bgla2v = wx['getSystemInfoSync'](),
                znr6$ = (bgla2v['screenWidth'], bgla2v['screenHeight'], wx['createUserInfoButton']({ 'type': 'text', 'text': '授权登录游戏', 'withCredentials': !0x1, 'style': { 'top': bgla2v['windowHeight'] / 0x2 + bgla2v['windowHeight'] / 0x4, 'left': bgla2v['windowWidth'] / 0x2 - 0x64, 'width': 0xc8, 'height': 0x28, 'lineHeight': 0x28, 'backgroundColor': '#07c160', 'color': '#ffffff', 'textAlign': 'center', 'fontSize': 0x10, 'borderRadius': 0x4 } }));znr6$['show'](), znr6$['onTap'](k4x5c => {
              console['log'](k4x5c), f33BL8({ 'title': '正在登录游戏' }), 'getUserInfo:ok' == k4x5c['errMsg'] ? ws9h5['do_login']({ 'head_img': k4x5c['userInfo']['avatarUrl'] || '', 'nick_name': k4x5c['userInfo']['nickName'] || '' }) : ws9h5['do_login'](), znr6$['destroy']();
            });
          }
        }, 'fail': function () {
          console['log']('[SDK]获得授权设置\uFF1A失败'), ws9h5['do_login']();
        } }) : (console['log']('[SDK]授权登录' + f_t9s5c['is_auth']), ws9h5['do_login']());
    }, 'do_login': function (evbla) {
      var ebap2 = this;wx['login']({ 'success': function (b2mlae) {
          if (console['log']('微信登录成功返回' + JSON['stringify'](b2mlae)), b2mlae['code']) {
            var ku4xj8 = ebap2['getPublicData']();ku4xj8['mo'] = 0x1, ku4xj8['code'] = b2mlae['code'], ku4xj8['nick_name'] = evbla ? evbla['nick_name'] : '', ku4xj8['head_img'] = evbla ? evbla['head_img'] : '', f_t9s5c['is_auth'] ? wx['getUserInfo']({ 'success': function (mabe2p) {
                var d0zorq = mabe2p['encryptedData'],
                    amebl = mabe2p['iv'],
                    s9h7iw = mabe2p['signature'];ku4xj8['encryptedData'] = d0zorq, ku4xj8['iv'] = amebl, ku4xj8['signature'] = s9h7iw, wx['request']({ 'url': falvb2g + '/partner/auth', 'method': 'POST', 'dataType': 'json', 'header': { 'content-type': 'application/x-www-form-urlencoded' }, 'data': ku4xj8, 'success': function (n761$i) {
                    if (console['log']('[SDK]登录结果\uFF1A'), console['log'](n761$i), 0xc8 == n761$i['statusCode']) {
                      var xs_5t = n761$i['data'];if (xs_5t['state']) {
                        var lam2e = { 'userid': xs_5t['data']['user_id'], 'account': xs_5t['data']['nick_name'], 'token': xs_5t['data']['token'] };try {
                          wx['setStorageSync']('plat_sdk_token', xs_5t['data']['sdk_token']), wx['setStorageSync']('plat_uid', xs_5t['data']['user_id']), wx['setStorageSync']('plat_username', xs_5t['data']['username']), wx['setStorageSync']('wx_openid', xs_5t['data']['openid']), xs_5t['data']['ext'] && wx['setStorageSync']('plat_session_key', xs_5t['data']['ext']);
                        } catch (_cs59) {}$167rn['login'] && $167rn['login'](0x0, lam2e);
                      } else $167rn['login'] && $167rn['login'](0x1, { 'errMsg': xs_5t['msg'] });
                    } else $167rn['login'] && $167rn['login'](0x1, { 'errMsg': '请求平台服务器失败\uFF01#1' });
                  }, 'fail': function (mpe8) {
                    $167rn['login'] && $167rn['login'](0x1, { 'errMsg': mpe8['errMsg'] });
                  } });
              }, 'fail': function (c5xk_t) {
                $167rn['login'] && $167rn['login'](0x1, { 'errMsg': c5xk_t['errMsg'] });
              } }) : wx['request']({ 'url': falvb2g + '/partner/auth', 'method': 'POST', 'dataType': 'json', 'header': { 'content-type': 'application/x-www-form-urlencoded' }, 'data': ku4xj8, 'success': function (odqr) {
                if (console['log']('[SDK]登录结果\uFF1A'), console['log'](odqr), 0xc8 == odqr['statusCode']) {
                  var ku48x = odqr['data'];if (ku48x['state']) {
                    var ae2pbm = { 'userid': ku48x['data']['user_id'], 'account': ku48x['data']['nick_name'], 'token': ku48x['data']['token'] };try {
                      wx['setStorageSync']('plat_sdk_token', ku48x['data']['sdk_token']), wx['setStorageSync']('plat_uid', ku48x['data']['user_id']), wx['setStorageSync']('plat_username', ku48x['data']['username']), wx['setStorageSync']('wx_openid', ku48x['data']['openid']), ku48x['data']['ext'] && wx['setStorageSync']('plat_session_key', ku48x['data']['ext']);
                    } catch (o0zdq) {}$167rn['login'] && $167rn['login'](0x0, ae2pbm);
                  } else $167rn['login'] && $167rn['login'](0x1, { 'errMsg': ku48x['msg'] });
                } else $167rn['login'] && $167rn['login'](0x1, { 'errMsg': '请求平台服务器失败\uFF01#2' });
              } });
          } else $167rn['login'] && $167rn['login'](0x1, { 'errMsg': b2mlae['errMsg'] });
        }, 'fail': function (hwist9) {
          console['log']('微信登录失败' + JSON['stringify'](hwist9)), (hwist9['errMsg']['indexOf']('auth deny') > -0x1 || hwist9['errMsg']['indexOf']('auth denied') > -0x1) && $167rn['login'] && $167rn['login'](0x1, { 'errMsg': hwist9['errMsg'] });
        } });
    }, 'checkGameVersion': function (s9wi7h, hs9t5) {
      console['log']('[SDK]检查游戏版本'), wx['getStorageSync']('plat_sdk_token'), wx['request']({ 'url': falvb2g + '/game/min/?ac=checkGameVersion', 'method': 'POST', 'dataType': 'json', 'header': { 'content-type': 'application/x-www-form-urlencoded' }, 'data': { 'game_pkg': f_t9s5c['game_pkg'], 'partner_id': f_t9s5c['partner_id'], 'game_ver': s9wi7h }, 'success': function (bepa3) {
          if (console['log']('[SDK]获取游戏版本结果'), console['log'](bepa3), 0xc8 == bepa3['statusCode']) {
            var kx45_c = bepa3['data'];kx45_c['state'] ? hs9t5 && hs9t5(kx45_c['data']) : hs9t5 && hs9t5({ 'develop': 0x0 });
          } else hs9t5 && hs9t5({ 'develop': 0x0 });
        }, 'fail': function (e2mbal) {
          console['log'](e2mbal);
        } });
    }, 'pay': function (q0rzo, tsx_c5) {
      var cx4jk8 = this;wx['checkSession']({ 'success': function () {
          cx4jk8['startPay'](q0rzo, tsx_c5);
        }, 'fail': function () {
          console['log']('[SDK]session过期需要重新登录'), cx4jk8['login']({}, function () {
            cx4jk8['startPay'](q0rzo, tsx_c5);
          });
        } });
    }, 'startPay': function (wsh9t5, nz$r6) {
      console['log']('[SDK]调起支付\uFF0CCP传值\uFF1A'), console['log'](wsh9t5);var apm = this;$167rn['pay'] = 'function' == typeof nz$r6 ? nz$r6 : null, 0x0;var p3me8 = wx['getStorageSync']('plat_sdk_token'),
          kj8xu4 = wx['getStorageSync']('plat_session_key');if (p3me8 && kj8xu4) {
        var doqrz = wx['getSystemInfoSync'](),
            c4_5xk = { 'cpbill': wsh9t5['cpbill'], 'productid': wsh9t5['productid'], 'productname': wsh9t5['productname'], 'productdesc': wsh9t5['productdesc'], 'serverid': wsh9t5['serverid'], 'servername': wsh9t5['servername'], 'roleid': wsh9t5['roleid'], 'rolename': wsh9t5['rolename'], 'rolelevel': wsh9t5['rolelevel'], 'price': wsh9t5['price'], 'extension': wsh9t5['extension'], 'sdk_token': p3me8, 'session_key': kj8xu4, 'platform': doqrz['platform'] };apm['order_data'] = c4_5xk;var $1i6 = apm['getPublicData']();$1i6['order_data'] = JSON['stringify'](c4_5xk), wx['request']({ 'url': falvb2g + '/partner/order', 'method': 'POST', 'dataType': 'json', 'header': { 'content-type': 'application/x-www-form-urlencoded' }, 'data': $1i6, 'success': function (st5h_9) {
            if (console['log']('[SDK]完成创建订单'), console['log'](st5h_9), 0xc8 == st5h_9['statusCode']) {
              var $hw1 = st5h_9['data'];$hw1['state'] ? void 0x0 === wx['requestPayment'] ? 'android' == doqrz['platform'] || 'windows' == doqrz['platform'] || 'devtools' == doqrz['platform'] ? $hw1['data']['is_android_pay'] ? apm['kfPay']($hw1['data']) : apm['gamePay']($hw1['data']) : $hw1['data']['is_ios_pay'] ? 0x1 == $hw1['data']['ios_pay_type'] && apm['kfPay']($hw1['data']) : wx['showModal']({ 'title': '支付提示', 'content': '很抱歉，由于苹果政策，暂时不能支付，安卓手机不受影响', 'confirmText': '我知道了', 'showCancel': !0x1 }) : apm['minPay']($hw1['data']) : $167rn['pay'] && $167rn['pay'](0x1, { 'errMsg': $hw1['msg'] });
            } else $167rn['login'] && $167rn['login'](0x1, { 'errMsg': '请求平台服务器失败\uFF01#3' });
          } });
      } else $167rn['pay'] && $167rn['pay'](0x1, { 'errMsg': '用户未登录，支付失败！' });
    }, 'gamePay': function (ws59t) {
      var z0qn = this;ws59t['buyQuantity'] <= ws59t['balance'] ? (console['log']('[SDK]游戏币充值直接扣除'), wx['showModal']({ 'title': '支付提示', 'content': '您还有' + ws59t['balance'] + '个游戏币未消费，本次支付将扣除' + ws59t['buyQuantity'] + '游戏币', 'showCancel': !0x1, 'confirmText': '我知道了', 'success': function () {
          z0qn['gameGoPay'](ws59t);
        } })) : (console['log']('[SDK]调起米大师支付'), console['log'](ws59t), wx['requestMidasPayment']({ 'mode': 'game', 'env': ws59t['env'], 'offerId': ws59t['offerId'], 'currencyType': ws59t['currencyType'], 'platform': ws59t['platform'], 'buyQuantity': ws59t['buyQuantity'], 'zoneId': ws59t['zoneId'], 'success': function (n$6r) {
          'requestMidasPayment:ok' == n$6r['errMsg'] && z0qn['gameGoPay'](ws59t);
        }, 'fail': function (kxt_c) {
          -0x1 !== kxt_c['errMsg']['indexOf']('用户取消') ? $167rn['pay'] && $167rn['pay'](0x2, { 'errMsg': '用户取消支付' }) : $167rn['pay'] && $167rn['pay'](0x1, { 'errMsg': '支付失败:' + kxt_c['errMsg'] + '(' + kxt_c['errCode'] + ')' });
        }, 'complete': function (ct5x_k) {} }));
    }, 'kfPay': function ($n7i1) {
      fjxk4u = $n7i1['orderId'], wx['showModal']({ 'title': '支付提示', 'content': '进入客服会话\uFF0C点击右下角小卡片或输入"cz"或"充值"获取支付链接', 'showCancel': !0x1, 'confirmText': '我知道了', 'success': function () {
          wx['openCustomerServiceConversation']({ 'showMessageCard': !0x0, 'sendMessageTitle': '不用点这个卡片', 'sendMessageImg': 'https://static.357pk.net/uploads/2109/weixin_pay_img1.png' });
        } });
    }, 'gameGoPay': function (hts59, pbam3e) {
      console['log']('[SDK]米大师支付完毕\uFF0C通知服务器发货');var cx5st_ = this,
          uk83j = wx['getStorageSync']('plat_session_key');wx['request']({ 'url': falvb2g + '/partner/pay/' + f_t9s5c['partner_id'] + '/' + f_t9s5c['game_pkg'] + '/', 'method': 'POST', 'dataType': 'json', 'header': { 'content-type': 'application/x-www-form-urlencoded' }, 'data': { 'order_id': hts59['orderId'], 'time': hts59['time'], 'sign': hts59['sign'], 'session_key': uk83j }, 'success': function (oqr60z) {
          if (console['log']('[SDK]米大师支付结果'), console['log'](oqr60z), 0xc8 == oqr60z['statusCode']) {
            if (0x1 == oqr60z['data']['state']) {
              var _4xkjc = { 'cpOrderNo': cx5st_['order_data']['cpbill'], 'orderNo': hts59['orderId'], 'amount': cx5st_['order_data']['price'], 'extension': cx5st_['order_data']['extension'] };$167rn['pay'] && $167rn['pay'](0x0, _4xkjc);
            } else $167rn['pay'] && $167rn['pay'](0x1, { 'errMsg': '支付失败' });
          }
        }, 'fail': function () {} });
    }, 'logCreateRole': function (s5_th9) {
      var rnqz60 = wx['getStorageSync']('plat_uid'),
          t_xsc5 = wx['getStorageSync']('plat_username'),
          xk4uj8 = {};xk4uj8['user_id'] = rnqz60, xk4uj8['user_name'] = t_xsc5, xk4uj8['role_id'] = s5_th9['roleid'], xk4uj8['role_lev'] = s5_th9['rolelevel'], xk4uj8['role_name'] = s5_th9['rolename'], xk4uj8['server_id'] = s5_th9['serverid'], s5_th9['roleid'] && s5_th9['serverid'] && (fbl2av = { 'role_id': s5_th9['roleid'], 'server_id': s5_th9['serverid'] }), this['log']('create', xk4uj8);
    }, 'logEnterGame': function (odrqz) {
      var jx8u = wx['getStorageSync']('plat_uid'),
          _cstx = wx['getStorageSync']('plat_username'),
          vel2b = {};vel2b['user_id'] = jx8u, vel2b['user_name'] = _cstx, vel2b['role_id'] = odrqz['roleid'], vel2b['role_lev'] = odrqz['rolelevel'], vel2b['role_name'] = odrqz['rolename'], vel2b['server_id'] = odrqz['serverid'], odrqz['roleid'] && odrqz['serverid'] && (fbl2av = { 'role_id': odrqz['roleid'], 'server_id': odrqz['serverid'] }), this['log']('enter', vel2b);
    }, 'logRoleUpLevel': function (av2blg) {
      var m3euap = wx['getStorageSync']('plat_uid'),
          ck4x8j = wx['getStorageSync']('plat_username'),
          ep3mu8 = {};ep3mu8['user_id'] = m3euap, ep3mu8['user_name'] = ck4x8j, ep3mu8['role_id'] = av2blg['roleid'], ep3mu8['role_lev'] = av2blg['rolelevel'], ep3mu8['role_name'] = av2blg['rolename'], ep3mu8['server_id'] = av2blg['serverid'], av2blg['roleid'] && av2blg['serverid'] && (fbl2av = { 'role_id': av2blg['roleid'], 'server_id': av2blg['serverid'] }), this['log']('levelup', ep3mu8);
    }, 'uuid': function (yoqzd, z01r6) {
      var sc59t,
          i7w1$,
          rn1z$ = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'['split'](''),
          w7h$1 = [];if (yoqzd = yoqzd || rn1z$['length'], z01r6) {
        for (sc59t = 0x0; sc59t < z01r6; sc59t++) w7h$1[sc59t] = rn1z$[0x0 | Math['random']() * yoqzd];
      } else {
        for (w7h$1[0x8] = w7h$1[0xd] = w7h$1[0x12] = w7h$1[0x17] = '-', w7h$1[0xe] = '4', sc59t = 0x0; sc59t < 0x24; sc59t++) w7h$1[sc59t] || (i7w1$ = 0x0 | 0x10 * Math['random'](), w7h$1[sc59t] = rn1z$[0x13 == sc59t ? 0x3 & i7w1$ | 0x8 : i7w1$]);
      }return w7h$1['join']('');
    }, 'getPublicData': function () {
      var o6zqr0 = wx['getSystemInfoSync'](),
          iws97h = wx['getStorageSync']('plat_uuid'),
          twis9h = wx['getStorageSync']('plat_idfv'),
          apmb3 = wx['getStorageSync']('plat_ad_code');return { 'game_id': f_t9s5c['game_id'], 'game_pkg': f_t9s5c['game_pkg'], 'partner_id': f_t9s5c['partner_id'], 'ad_code': apmb3, 'uuid': iws97h, 'idfv': twis9h, 'dname': o6zqr0['model'], 'mac': '0000', 'net_type': 0x0 == o6zqr0['wifiSignal'] ? '4G' : 'WIFI', 'os_ver': o6zqr0['system'], 'sdk_ver': o6zqr0['version'], 'game_ver': fxk_54, 'device': 'android' == o6zqr0['platform'] ? 0x1 : 0x2, 'is_from_min': 0x1 };
    }, 'log': function (k_c4jx, up3j8) {
      var xu4k8j = this['getPublicData']();for (var or0 in up3j8) xu4k8j[or0] = up3j8[or0];console['log']('[SDK]上报数据\uFF1A' + k_c4jx), console['log'](xu4k8j), wx['request']({ 'url': falvb2g + '/partner/h5Log/?type=' + k_c4jx + '&data=' + encodeURIComponent(JSON['stringify'](xu4k8j)) });
    }, 'getDate': function () {
      var yo0dq = new Date();return yo0dq['getFullYear']() + '-' + yo0dq['getMonth']() + '-' + yo0dq['getDate']();
    }, 'downloadClient': function () {
      var $1rn6z = '微端-不用点这个卡片-' + wx['getStorageSync']('wx_openid');wx['showModal']({ 'title': '微端下载提示', 'content': '进入客服会话，点击右下角小卡片获取微端下载链接', 'showCancel': !0x1, 'confirmText': '我知道了', 'success': function () {
          var e2pa = { 'showMessageCard': !0x0, 'sendMessageTitle': $1rn6z, 'sendMessageImg': 'https://static.357pk.net/uploads/2109/weixin_download_img2.jpg' };wx['openCustomerServiceConversation'](e2pa);
        } });
    }, 'checkMsg': function (amelb2, xst5) {
      console['log']('[SDK]查看文本是否有违规内容');var t5sc_9 = wx['getStorageSync']('plat_sdk_token');wx['request']({ 'url': falvb2g + '/game/min/?ac=msgCheck', 'method': 'POST', 'dataType': 'json', 'header': { 'content-type': 'application/x-www-form-urlencoded' }, 'data': { 'game_pkg': f_t9s5c['game_pkg'], 'partner_id': f_t9s5c['partner_id'], 'sdk_token': t5sc_9, 'content': amelb2 }, 'success': function (s9tw5h) {
          console['log']('[SDK]查看文本是否有违规内容结果返回:'), xst5 && xst5(0x0 == s9tw5h['data']['code'] ? 0x1 : 0x0, s9tw5h['data']['msg']);
        } });
    }, 'checkMsgV2': function (h$i79w, uj38pm) {
      console['log']('[SDK]查看文本是否有违规内容');var h9i$w7 = wx['getStorageSync']('plat_sdk_token');wx['request']({ 'url': falvb2g + '/game/min/?ac=msgCheckV2', 'method': 'POST', 'dataType': 'json', 'header': { 'content-type': 'application/x-www-form-urlencoded' }, 'data': { 'game_pkg': f_t9s5c['game_pkg'], 'partner_id': f_t9s5c['partner_id'], 'sdk_token': h9i$w7, 'content': h$i79w, 'scene': 0x1 }, 'success': function (ue3a) {
          console['log']('[SDK]查看文本是否有违规内容结果返回:'), uj38pm && uj38pm(0x0 == ue3a['data']['code'] ? 0x1 : 0x0, ue3a['data']['msg']);
        } });
    }, 'sendMessage': function (z6rn1, $79hiw, t5x_) {
      console['log']('[SDK]发送订阅消息');var nrz1$6 = wx['getStorageSync']('plat_sdk_token');wx['request']({ 'url': falvb2g + '/game/min/?ac=sendMessage', 'method': 'POST', 'dataType': 'json', 'header': { 'content-type': 'application/x-www-form-urlencoded' }, 'data': { 'game_pkg': f_t9s5c['game_pkg'], 'partner_id': f_t9s5c['partner_id'], 'sdk_token': nrz1$6, 'template_id': z6rn1, 'data': $79hiw }, 'success': function (h59s_t) {
          console['log']('[SDK]订阅消息发送成功'), t5x_ && t5x_(0x0 == h59s_t['data']['code'] ? 0x1 : 0x0, h59s_t['data']['msg']);
        } });
    }, 'videoAdvert': function (mep38, c8x) {
      wx['request']({ 'url': falvb2g + '/?method=user.gameConfig', 'method': 'POST', 'dataType': 'json', 'header': { 'content-type': 'application/x-www-form-urlencoded' }, 'data': { 'game_pkg': f_t9s5c['game_pkg'], 'partner_id': f_t9s5c['partner_id'] }, 'success': function (el2bm) {
          var qyzo0 = el2bm['data']['data']['weixin_advert_id'];let zn6$r1 = null;(zn6$r1 = wx['createRewardedVideoAd']({ 'adUnitId': qyzo0 }))['show']()['catch'](() => {
            zn6$r1['load']()['then'](() => zn6$r1['show']())['catch'](n0rz16 => {
              console['log']('激励视频\x20广告显示失败');
            });
          }), zn6$r1['onError'](mbepa2 => {
            console['log'](mbepa2);
          }), zn6$r1['onClose'](ozrd => {
            zn6$r1 && (zn6$r1['offClose'](), ozrd && ozrd['isEnded'] || void 0x0 === ozrd ? console['log']('正常播放结束，需要下发奖励') : console['log']('播放退出，不下发奖励'));
          });
        } });
    }, 'getGameConfig': function (z$r1n6) {
      console['log']('[SDK]获取游戏配置'), wx['request']({ 'url': falvb2g + '/?method=user.gameConfig', 'method': 'POST', 'dataType': 'json', 'header': { 'content-type': 'application/x-www-form-urlencoded' }, 'data': { 'game_pkg': f_t9s5c['game_pkg'], 'partner_id': f_t9s5c['partner_id'] }, 'success': function (qozyd0) {
          var xku84 = qozyd0['data']['data'];console['log']('[SDK]获取游戏配置成功'), console['log'](qozyd0['data']);var j84p3;j84p3 = { 'pay_switch': xku84['pay_switch'], 'game_ver': xku84['game_ver'] }, z$r1n6 && z$r1n6(j84p3);
        } });
    }, 'getUserZhuanduanInfo': function (i1$h) {
      console['log']('[SDK]获取用户转端信息');var xj8 = wx['getStorageSync']('plat_sdk_token');wx['request']({ 'url': falvb2g + '/?method=user.getUserZhuanduanInfo', 'method': 'POST', 'dataType': 'json', 'header': { 'content-type': 'application/x-www-form-urlencoded' }, 'data': { 'game_pkg': f_t9s5c['game_pkg'], 'partner_id': f_t9s5c['partner_id'], 'sdk_token': xj8 }, 'success': function ($w9hi) {
          var sh5t = $w9hi['data']['data'];console['log']('[SDK]获取用户转端信息成功');var hw79is;hw79is = { 'download_url': sh5t['download_url'], 'password': sh5t['password'], 'service_qq': sh5t['service_qq'], 'username': sh5t['username'] }, i1$h && i1$h(hw79is);
        } });
    } };
}function fleva2(bgv2l, _s9, h7$9i) {
  bgv2l in f_5kc4 && f_5kc4[bgv2l](_s9, h7$9i);
}const fr610nz = {};window['cwan'] = fr610nz, fr610nz['init'] = function (bpe3, mae3up) {
  fleva2('init', bpe3, mae3up);
}, fr610nz['login'] = function (zn61r) {
  fleva2('login', '', zn61r);
}, fr610nz['pay'] = function (zr6n01, s5tw9) {
  fleva2('pay', zr6n01, s5tw9);
}, fr610nz['logCreateRole'] = function (c_t59s, evbal2, x4c8kj, j38u4p, n1r06) {
  fleva2('logCreateRole', { 'serverid': c_t59s, 'servername': evbal2, 'roleid': x4c8kj, 'rolename': j38u4p, 'rolelevel': n1r06 });
}, fr610nz['logEnterGame'] = function (evl, zn601r, n601z, _c5sxt, apme2) {
  fleva2('logEnterGame', { 'serverid': evl, 'servername': zn601r, 'roleid': n601z, 'rolename': _c5sxt, 'rolelevel': apme2 });
}, fr610nz['logRoleUpLevel'] = function (lbea2m, u3jp48, rqzo6, oyd0zq, kct_x5) {
  fleva2('logRoleUpLevel', { 'serverid': lbea2m, 'servername': u3jp48, 'roleid': rqzo6, 'rolename': oyd0zq, 'rolelevel': kct_x5 });
}, fr610nz['downloadClient'] = function () {
  fleva2('downloadClient');
}, fr610nz['getConfig'] = function () {
  return { 'game_id': f_t9s5c['game_id'], 'game_pkg': f_t9s5c['game_pkg'], 'partner_id': f_t9s5c['partner_id'] };
}, fr610nz['getPublicData'] = function () {
  fleva2('getPublicData');
}, fr610nz['checkMsg'] = function (zr16$n, uk3j84) {
  fleva2('checkMsg', zr16$n, uk3j84);
}, fr610nz['checkMsgV2'] = function (s79ihw, h1$7w) {
  fleva2('checkMsgV2', s79ihw, h1$7w);
}, fr610nz['sendMessage'] = function (z0qoyd, t_cs, ue3pm8) {
  fleva2('sendMessage', z0qoyd, t_cs, ue3pm8);
}, fr610nz['videoAdvert'] = function (s5ct, mpe2b) {
  fleva2('videoAdvert', s5ct, mpe2b);
}, fr610nz['getGameConfig'] = function (hi1w7$) {
  fleva2('getGameConfig', hi1w7$);
}, fr610nz['getUserZhuanduanInfo'] = function (whi9$) {
  fleva2('getUserZhuanduanInfo', whi9$);
};