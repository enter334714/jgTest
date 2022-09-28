var H = wx.$F;
let fmue8p = { 'game_id': '11', 'game_pkg': 'wzcq-q2-_q2wxxcxqd_H', 'partner_id': '4', 'is_auth': !0x1, 'from': null };window['config'] = fmue8p;let fs59h = fal2g(),
    fxckt5 = 'https://sdk.5tun.cn',
    febam2p = null,
    fj8cxk = null,
    fpu8jm3 = '';function fal2g() {
  var k4j8u3 = {};return { 'order_data': {}, 'init': function (cx_kj, r6znq) {
      fpu8jm3 = cx_kj && cx_kj['game_ver'] ? cx_kj['game_ver'] : 0x0, console['log']('[SDK]CP调用init接口');var t59_s,
          ma2e = wx['getStorageSync']('plat_uuid');ma2e ? t59_s = 0x0 : (ma2e = this['uuid'](0x10, 0x20), wx['setStorageSync']('plat_uuid', ma2e), t59_s = 0x1);var st9h_5 = wx['getStorageSync']('plat_idfv');st9h_5 || (st9h_5 = this['uuid'](0x10, 0x20), wx['setStorageSync']('plat_idfv', st9h_5));var k4xj = wx['getLaunchOptionsSync'](),
          u8k4x = k4xj['scene'] ? k4xj['scene'] : '';if (console['log']('[SDK]小游戏启动参数'), console['log'](k4xj), t59_s && k4xj['query'] && k4xj['query']['ad_code'] && wx['setStorageSync']('plat_ad_code', k4xj['query']['ad_code']), k4xj['query'] && k4xj['query']['from'] && '' != k4xj['query']['from']) t59_s && wx['setStorageSync']('plat_from', k4xj['query']['from']), fmue8p['from'] = k4xj['query']['from'];else {
        var n6rzq0 = wx['getStorageSync']('plat_from');n6rzq0 || '' == n6rzq0 || (fmue8p['from'] = n6rzq0);
      }console['log'](fmue8p['from']);var jk8c4 = { 'install': t59_s, 'scene': u8k4x };this['log']('start', jk8c4), wx['showShareMenu'](), fpu8jm3 && this['checkGameVersion'](fpu8jm3, function (qzo6r0) {
        r6znq && r6znq(qzo6r0);
      });
    }, 'login': function (jcx4_k, u3pm8) {
      console['log']('[SDK]调起登录');var kux4j8 = this;k4j8u3['login'] = 'function' == typeof u3pm8 ? u3pm8 : null, fmue8p['is_auth'] ? wx['getSetting']({ 'success': function (ju834) {
          if (ju834['authSetting']['scope.userInfo']) console['log']('[SDK]获得授权设置\uFF1A已授权'), kux4j8['do_login']();else {
            console['log']('[SDK]获得授权设置\uFF1A未授权'), wx['hideLoading']({});var l2meba = wx['getSystemInfoSync'](),
                nw$71 = (l2meba['screenWidth'], l2meba['screenHeight'], wx['createUserInfoButton']({ 'type': 'text', 'text': '授权登录游戏', 'withCredentials': !0x1, 'style': { 'top': l2meba['windowHeight'] / 0x2 + l2meba['windowHeight'] / 0x4, 'left': l2meba['windowWidth'] / 0x2 - 0x64, 'width': 0xc8, 'height': 0x28, 'lineHeight': 0x28, 'backgroundColor': '#07c160', 'color': '#ffffff', 'textAlign': 'center', 'fontSize': 0x10, 'borderRadius': 0x4 } }));nw$71['show'](), nw$71['onTap'](u83k => {
              console['log'](u83k), f33BL8({ 'title': '正在登录游戏' }), 'getUserInfo:ok' == u83k['errMsg'] ? kux4j8['do_login']({ 'head_img': u83k['userInfo']['avatarUrl'] || '', 'nick_name': u83k['userInfo']['nickName'] || '' }) : kux4j8['do_login'](), nw$71['destroy']();
            });
          }
        }, 'fail': function () {
          console['log']('[SDK]获得授权设置\uFF1A失败'), kux4j8['do_login']();
        } }) : (console['log']('[SDK]授权登录' + fmue8p['is_auth']), kux4j8['do_login']());
    }, 'do_login': function (e2bval) {
      var zq0dor = this;wx['login']({ 'success': function (p8um3j) {
          if (console['log']('微信登录成功返回' + JSON['stringify'](p8um3j)), p8um3j['code']) {
            var mb2ela = zq0dor['getPublicData']();mb2ela['mo'] = 0x1, mb2ela['code'] = p8um3j['code'], mb2ela['nick_name'] = e2bval ? e2bval['nick_name'] : '', mb2ela['head_img'] = e2bval ? e2bval['head_img'] : '', fmue8p['is_auth'] ? wx['getUserInfo']({ 'success': function (hsw95) {
                var mpu8e3 = hsw95['encryptedData'],
                    gal2 = hsw95['iv'],
                    x_5ts = hsw95['signature'];mb2ela['encryptedData'] = mpu8e3, mb2ela['iv'] = gal2, mb2ela['signature'] = x_5ts, wx['request']({ 'url': fxckt5 + '/partner/auth', 'method': 'POST', 'dataType': 'json', 'header': { 'content-type': 'application/x-www-form-urlencoded' }, 'data': mb2ela, 'success': function (in1w7) {
                    if (console['log']('[SDK]登录结果\uFF1A'), console['log'](in1w7), 0xc8 == in1w7['statusCode']) {
                      var $1nzr6 = in1w7['data'];if ($1nzr6['state']) {
                        var _5xcst = { 'userid': $1nzr6['data']['user_id'], 'account': $1nzr6['data']['nick_name'], 'token': $1nzr6['data']['token'] };try {
                          wx['setStorageSync']('plat_sdk_token', $1nzr6['data']['sdk_token']), wx['setStorageSync']('plat_uid', $1nzr6['data']['user_id']), wx['setStorageSync']('plat_username', $1nzr6['data']['username']), wx['setStorageSync']('wx_openid', $1nzr6['data']['openid']), $1nzr6['data']['ext'] && wx['setStorageSync']('plat_session_key', $1nzr6['data']['ext']);
                        } catch (c_s5t9) {}k4j8u3['login'] && k4j8u3['login'](0x0, _5xcst);
                      } else k4j8u3['login'] && k4j8u3['login'](0x1, { 'errMsg': $1nzr6['msg'] });
                    } else k4j8u3['login'] && k4j8u3['login'](0x1, { 'errMsg': '请求平台服务器失败\uFF01#1' });
                  }, 'fail': function (ab2ml) {
                    k4j8u3['login'] && k4j8u3['login'](0x1, { 'errMsg': ab2ml['errMsg'] });
                  } });
              }, 'fail': function (wi$7h) {
                k4j8u3['login'] && k4j8u3['login'](0x1, { 'errMsg': wi$7h['errMsg'] });
              } }) : wx['request']({ 'url': fxckt5 + '/partner/auth', 'method': 'POST', 'dataType': 'json', 'header': { 'content-type': 'application/x-www-form-urlencoded' }, 'data': mb2ela, 'success': function (c5xts) {
                if (console['log']('[SDK]登录结果\uFF1A'), console['log'](c5xts), 0xc8 == c5xts['statusCode']) {
                  var _5x4c = c5xts['data'];if (_5x4c['state']) {
                    var vae2bl = { 'userid': _5x4c['data']['user_id'], 'account': _5x4c['data']['nick_name'], 'token': _5x4c['data']['token'] };try {
                      wx['setStorageSync']('plat_sdk_token', _5x4c['data']['sdk_token']), wx['setStorageSync']('plat_uid', _5x4c['data']['user_id']), wx['setStorageSync']('plat_username', _5x4c['data']['username']), wx['setStorageSync']('wx_openid', _5x4c['data']['openid']), _5x4c['data']['ext'] && wx['setStorageSync']('plat_session_key', _5x4c['data']['ext']);
                    } catch (n$iw17) {}k4j8u3['login'] && k4j8u3['login'](0x0, vae2bl);
                  } else k4j8u3['login'] && k4j8u3['login'](0x1, { 'errMsg': _5x4c['msg'] });
                } else k4j8u3['login'] && k4j8u3['login'](0x1, { 'errMsg': '请求平台服务器失败\uFF01#2' });
              } });
          } else k4j8u3['login'] && k4j8u3['login'](0x1, { 'errMsg': p8um3j['errMsg'] });
        }, 'fail': function (wth9i) {
          console['log']('微信登录失败' + JSON['stringify'](wth9i)), (wth9i['errMsg']['indexOf']('auth deny') > -0x1 || wth9i['errMsg']['indexOf']('auth denied') > -0x1) && k4j8u3['login'] && k4j8u3['login'](0x1, { 'errMsg': wth9i['errMsg'] });
        } });
    }, 'checkGameVersion': function (aep2mb, win$17) {
      console['log']('[SDK]检查游戏版本'), wx['getStorageSync']('plat_sdk_token'), wx['request']({ 'url': fxckt5 + '/game/min/?ac=checkGameVersion', 'method': 'POST', 'dataType': 'json', 'header': { 'content-type': 'application/x-www-form-urlencoded' }, 'data': { 'game_pkg': fmue8p['game_pkg'], 'partner_id': fmue8p['partner_id'], 'game_ver': aep2mb }, 'success': function (e2mabp) {
          if (console['log']('[SDK]获取游戏版本结果'), console['log'](e2mabp), 0xc8 == e2mabp['statusCode']) {
            var upm3ae = e2mabp['data'];upm3ae['state'] ? win$17 && win$17(upm3ae['data']) : win$17 && win$17({ 'develop': 0x0 });
          } else win$17 && win$17({ 'develop': 0x0 });
        }, 'fail': function (bgla2) {
          console['log'](bgla2);
        } });
    }, 'pay': function (c5s9t_, sh9wi) {
      var up34j8 = this;wx['checkSession']({ 'success': function () {
          up34j8['startPay'](c5s9t_, sh9wi);
        }, 'fail': function () {
          console['log']('[SDK]session过期需要重新登录'), up34j8['login']({}, function () {
            up34j8['startPay'](c5s9t_, sh9wi);
          });
        } });
    }, 'startPay': function (h9tw, a3ebp) {
      console['log']('[SDK]调起支付\uFF0CCP传值\uFF1A'), console['log'](h9tw);var i9tsw = this;k4j8u3['pay'] = 'function' == typeof a3ebp ? a3ebp : null, 0x0;var yzoq0 = wx['getStorageSync']('plat_sdk_token'),
          qorz = wx['getStorageSync']('plat_session_key');if (yzoq0 && qorz) {
        var mau3p = wx['getSystemInfoSync'](),
            rz1n = { 'cpbill': h9tw['cpbill'], 'productid': h9tw['productid'], 'productname': h9tw['productname'], 'productdesc': h9tw['productdesc'], 'serverid': h9tw['serverid'], 'servername': h9tw['servername'], 'roleid': h9tw['roleid'], 'rolename': h9tw['rolename'], 'rolelevel': h9tw['rolelevel'], 'price': h9tw['price'], 'extension': h9tw['extension'], 'sdk_token': yzoq0, 'session_key': qorz, 'platform': mau3p['platform'] };i9tsw['order_data'] = rz1n;var pbae3 = i9tsw['getPublicData']();pbae3['order_data'] = JSON['stringify'](rz1n), wx['request']({ 'url': fxckt5 + '/partner/order', 'method': 'POST', 'dataType': 'json', 'header': { 'content-type': 'application/x-www-form-urlencoded' }, 'data': pbae3, 'success': function (p843u) {
            if (console['log']('[SDK]完成创建订单'), console['log'](p843u), 0xc8 == p843u['statusCode']) {
              var p8em3 = p843u['data'];p8em3['state'] ? void 0x0 === wx['requestPayment'] ? 'android' == mau3p['platform'] || 'windows' == mau3p['platform'] || 'devtools' == mau3p['platform'] ? p8em3['data']['is_android_pay'] ? i9tsw['kfPay'](p8em3['data']) : i9tsw['gamePay'](p8em3['data']) : p8em3['data']['is_ios_pay'] ? 0x1 == p8em3['data']['ios_pay_type'] && i9tsw['kfPay'](p8em3['data']) : wx['showModal']({ 'title': '支付提示', 'content': '很抱歉，由于苹果政策，暂时不能支付，安卓手机不受影响', 'confirmText': '我知道了', 'showCancel': !0x1 }) : i9tsw['minPay'](p8em3['data']) : k4j8u3['pay'] && k4j8u3['pay'](0x1, { 'errMsg': p8em3['msg'] });
            } else k4j8u3['login'] && k4j8u3['login'](0x1, { 'errMsg': '请求平台服务器失败\uFF01#3' });
          } });
      } else k4j8u3['pay'] && k4j8u3['pay'](0x1, { 'errMsg': '用户未登录，支付失败！' });
    }, 'gamePay': function (ume8p3) {
      var cjkx48 = this;ume8p3['buyQuantity'] <= ume8p3['balance'] ? (console['log']('[SDK]游戏币充值直接扣除'), wx['showModal']({ 'title': '支付提示', 'content': '您还有' + ume8p3['balance'] + '个游戏币未消费，本次支付将扣除' + ume8p3['buyQuantity'] + '游戏币', 'showCancel': !0x1, 'confirmText': '我知道了', 'success': function () {
          cjkx48['gameGoPay'](ume8p3);
        } })) : (console['log']('[SDK]调起米大师支付'), console['log'](ume8p3), wx['requestMidasPayment']({ 'mode': 'game', 'env': ume8p3['env'], 'offerId': ume8p3['offerId'], 'currencyType': ume8p3['currencyType'], 'platform': ume8p3['platform'], 'buyQuantity': ume8p3['buyQuantity'], 'zoneId': ume8p3['zoneId'], 'success': function (peam2) {
          'requestMidasPayment:ok' == peam2['errMsg'] && cjkx48['gameGoPay'](ume8p3);
        }, 'fail': function (swh5t9) {
          -0x1 !== swh5t9['errMsg']['indexOf']('用户取消') ? k4j8u3['pay'] && k4j8u3['pay'](0x2, { 'errMsg': '用户取消支付' }) : k4j8u3['pay'] && k4j8u3['pay'](0x1, { 'errMsg': '支付失败:' + swh5t9['errMsg'] + '(' + swh5t9['errCode'] + ')' });
        }, 'complete': function (n7$wi) {} }));
    }, 'kfPay': function (mapu3e) {
      fj8cxk = mapu3e['orderId'], wx['showModal']({ 'title': '支付提示', 'content': '进入客服会话\uFF0C点击右下角小卡片或输入"cz"或"充值"获取支付链接', 'showCancel': !0x1, 'confirmText': '我知道了', 'success': function () {
          wx['openCustomerServiceConversation']({ 'showMessageCard': !0x0, 'sendMessageTitle': '不用点这个卡片', 'sendMessageImg': 'https://static.357pk.net/uploads/2109/weixin_pay_img1.png' });
        } });
    }, 'gameGoPay': function (qn6z, hts95_) {
      console['log']('[SDK]米大师支付完毕\uFF0C通知服务器发货');var s_9tc5 = this,
          iswh7 = wx['getStorageSync']('plat_session_key');wx['request']({ 'url': fxckt5 + '/partner/pay/' + fmue8p['partner_id'] + '/' + fmue8p['game_pkg'] + '/', 'method': 'POST', 'dataType': 'json', 'header': { 'content-type': 'application/x-www-form-urlencoded' }, 'data': { 'order_id': qn6z['orderId'], 'time': qn6z['time'], 'sign': qn6z['sign'], 'session_key': iswh7 }, 'success': function (pj348u) {
          if (console['log']('[SDK]米大师支付结果'), console['log'](pj348u), 0xc8 == pj348u['statusCode']) {
            if (0x1 == pj348u['data']['state']) {
              var ba2gvl = { 'cpOrderNo': s_9tc5['order_data']['cpbill'], 'orderNo': qn6z['orderId'], 'amount': s_9tc5['order_data']['price'], 'extension': s_9tc5['order_data']['extension'] };k4j8u3['pay'] && k4j8u3['pay'](0x0, ba2gvl);
            } else k4j8u3['pay'] && k4j8u3['pay'](0x1, { 'errMsg': '支付失败' });
          }
        }, 'fail': function () {} });
    }, 'logCreateRole': function (rdoz) {
      var mau = wx['getStorageSync']('plat_uid'),
          xcst5 = wx['getStorageSync']('plat_username'),
          jk8 = {};jk8['user_id'] = mau, jk8['user_name'] = xcst5, jk8['role_id'] = rdoz['roleid'], jk8['role_lev'] = rdoz['rolelevel'], jk8['role_name'] = rdoz['rolename'], jk8['server_id'] = rdoz['serverid'], rdoz['roleid'] && rdoz['serverid'] && (febam2p = { 'role_id': rdoz['roleid'], 'server_id': rdoz['serverid'] }), this['log']('create', jk8);
    }, 'logEnterGame': function (th_s5) {
      var ba2m = wx['getStorageSync']('plat_uid'),
          r$n16 = wx['getStorageSync']('plat_username'),
          x_kt5 = {};x_kt5['user_id'] = ba2m, x_kt5['user_name'] = r$n16, x_kt5['role_id'] = th_s5['roleid'], x_kt5['role_lev'] = th_s5['rolelevel'], x_kt5['role_name'] = th_s5['rolename'], x_kt5['server_id'] = th_s5['serverid'], th_s5['roleid'] && th_s5['serverid'] && (febam2p = { 'role_id': th_s5['roleid'], 'server_id': th_s5['serverid'] }), this['log']('enter', x_kt5);
    }, 'logRoleUpLevel': function (nz6rq0) {
      var _x5ck = wx['getStorageSync']('plat_uid'),
          n617i$ = wx['getStorageSync']('plat_username'),
          ck_j = {};ck_j['user_id'] = _x5ck, ck_j['user_name'] = n617i$, ck_j['role_id'] = nz6rq0['roleid'], ck_j['role_lev'] = nz6rq0['rolelevel'], ck_j['role_name'] = nz6rq0['rolename'], ck_j['server_id'] = nz6rq0['serverid'], nz6rq0['roleid'] && nz6rq0['serverid'] && (febam2p = { 'role_id': nz6rq0['roleid'], 'server_id': nz6rq0['serverid'] }), this['log']('levelup', ck_j);
    }, 'uuid': function (ap2, h_s95t) {
      var pem8u3,
          ts5xc_,
          v2blga = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'['split'](''),
          ih9st = [];if (ap2 = ap2 || v2blga['length'], h_s95t) {
        for (pem8u3 = 0x0; pem8u3 < h_s95t; pem8u3++) ih9st[pem8u3] = v2blga[0x0 | Math['random']() * ap2];
      } else {
        for (ih9st[0x8] = ih9st[0xd] = ih9st[0x12] = ih9st[0x17] = '-', ih9st[0xe] = '4', pem8u3 = 0x0; pem8u3 < 0x24; pem8u3++) ih9st[pem8u3] || (ts5xc_ = 0x0 | 0x10 * Math['random'](), ih9st[pem8u3] = v2blga[0x13 == pem8u3 ? 0x3 & ts5xc_ | 0x8 : ts5xc_]);
      }return ih9st['join']('');
    }, 'getPublicData': function () {
      var j8kcx = wx['getSystemInfoSync'](),
          c8xj4k = wx['getStorageSync']('plat_uuid'),
          $nw7 = wx['getStorageSync']('plat_idfv'),
          s97ih = wx['getStorageSync']('plat_ad_code');return { 'game_id': fmue8p['game_id'], 'game_pkg': fmue8p['game_pkg'], 'partner_id': fmue8p['partner_id'], 'ad_code': s97ih, 'uuid': c8xj4k, 'idfv': $nw7, 'dname': j8kcx['model'], 'mac': '0000', 'net_type': 0x0 == j8kcx['wifiSignal'] ? '4G' : 'WIFI', 'os_ver': j8kcx['system'], 'sdk_ver': j8kcx['version'], 'game_ver': fpu8jm3, 'device': 'android' == j8kcx['platform'] ? 0x1 : 0x2, 'is_from_min': 0x1 };
    }, 'log': function (emaup3, v2e) {
      var $h79iw = this['getPublicData']();for (var xc_k54 in v2e) $h79iw[xc_k54] = v2e[xc_k54];console['log']('[SDK]上报数据\uFF1A' + emaup3), console['log']($h79iw), wx['request']({ 'url': fxckt5 + '/partner/h5Log/?type=' + emaup3 + '&data=' + encodeURIComponent(JSON['stringify']($h79iw)) });
    }, 'getDate': function () {
      var tkc5x = new Date();return tkc5x['getFullYear']() + '-' + tkc5x['getMonth']() + '-' + tkc5x['getDate']();
    }, 'downloadClient': function () {
      var _jc = '微端-不用点这个卡片-' + wx['getStorageSync']('wx_openid');wx['showModal']({ 'title': '微端下载提示', 'content': '进入客服会话，点击右下角小卡片获取微端下载链接', 'showCancel': !0x1, 'confirmText': '我知道了', 'success': function () {
          var uap3me = { 'showMessageCard': !0x0, 'sendMessageTitle': _jc, 'sendMessageImg': 'https://static.357pk.net/uploads/2109/weixin_download_img2.jpg' };wx['openCustomerServiceConversation'](uap3me);
        } });
    }, 'checkMsg': function (mape, x5k_4c) {
      console['log']('[SDK]查看文本是否有违规内容');var agl2 = wx['getStorageSync']('plat_sdk_token');wx['request']({ 'url': fxckt5 + '/game/min/?ac=msgCheck', 'method': 'POST', 'dataType': 'json', 'header': { 'content-type': 'application/x-www-form-urlencoded' }, 'data': { 'game_pkg': fmue8p['game_pkg'], 'partner_id': fmue8p['partner_id'], 'sdk_token': agl2, 'content': mape }, 'success': function (s5ht9) {
          console['log']('[SDK]查看文本是否有违规内容结果返回:'), x5k_4c && x5k_4c(0x0 == s5ht9['data']['code'] ? 0x1 : 0x0, s5ht9['data']['msg']);
        } });
    }, 'checkMsgV2': function (h59_, e2p) {
      console['log']('[SDK]查看文本是否有违规内容');var upmae = wx['getStorageSync']('plat_sdk_token');wx['request']({ 'url': fxckt5 + '/game/min/?ac=msgCheckV2', 'method': 'POST', 'dataType': 'json', 'header': { 'content-type': 'application/x-www-form-urlencoded' }, 'data': { 'game_pkg': fmue8p['game_pkg'], 'partner_id': fmue8p['partner_id'], 'sdk_token': upmae, 'content': h59_, 'scene': 0x1 }, 'success': function (si9hw) {
          console['log']('[SDK]查看文本是否有违规内容结果返回:'), e2p && e2p(0x0 == si9hw['data']['code'] ? 0x1 : 0x0, si9hw['data']['msg']);
        } });
    }, 'sendMessage': function (ebva, x_jck, ckx48j) {
      console['log']('[SDK]发送订阅消息');var pu384j = wx['getStorageSync']('plat_sdk_token');wx['request']({ 'url': fxckt5 + '/game/min/?ac=sendMessage', 'method': 'POST', 'dataType': 'json', 'header': { 'content-type': 'application/x-www-form-urlencoded' }, 'data': { 'game_pkg': fmue8p['game_pkg'], 'partner_id': fmue8p['partner_id'], 'sdk_token': pu384j, 'template_id': ebva, 'data': x_jck }, 'success': function (kxj8c) {
          console['log']('[SDK]订阅消息发送成功'), ckx48j && ckx48j(0x0 == kxj8c['data']['code'] ? 0x1 : 0x0, kxj8c['data']['msg']);
        } });
    }, 'videoAdvert': function (laev, e3apu) {
      wx['request']({ 'url': fxckt5 + '/?method=user.gameConfig', 'method': 'POST', 'dataType': 'json', 'header': { 'content-type': 'application/x-www-form-urlencoded' }, 'data': { 'game_pkg': fmue8p['game_pkg'], 'partner_id': fmue8p['partner_id'] }, 'success': function (um83e) {
          var kcx_4j = um83e['data']['data']['weixin_advert_id'];let d0zorq = null;(d0zorq = wx['createRewardedVideoAd']({ 'adUnitId': kcx_4j }))['show']()['catch'](() => {
            d0zorq['load']()['then'](() => d0zorq['show']())['catch'](dz0qo => {
              console['log']('激励视频\x20广告显示失败');
            });
          }), d0zorq['onError'](hts_59 => {
            console['log'](hts_59);
          }), d0zorq['onClose'](zo0dqr => {
            d0zorq && (d0zorq['offClose'](), zo0dqr && zo0dqr['isEnded'] || void 0x0 === zo0dqr ? console['log']('正常播放结束，需要下发奖励') : console['log']('播放退出，不下发奖励'));
          });
        } });
    }, 'getGameConfig': function (bpame) {
      console['log']('[SDK]获取游戏配置'), wx['request']({ 'url': fxckt5 + '/?method=user.gameConfig', 'method': 'POST', 'dataType': 'json', 'header': { 'content-type': 'application/x-www-form-urlencoded' }, 'data': { 'game_pkg': fmue8p['game_pkg'], 'partner_id': fmue8p['partner_id'] }, 'success': function (h71w$) {
          var eabm2 = h71w$['data']['data'];console['log']('[SDK]获取游戏配置成功'), console['log'](h71w$['data']);var mup3;mup3 = { 'pay_switch': eabm2['pay_switch'], 'game_ver': eabm2['game_ver'] }, bpame && bpame(mup3);
        } });
    } };
}function feba3m(n617i, mp38e, n617r) {
  n617i in fs59h && fs59h[n617i](mp38e, n617r);
}const fam3p = {};window['cwan'] = fam3p, fam3p['init'] = function (p84ju, i7n$6) {
  feba3m('init', p84ju, i7n$6);
}, fam3p['login'] = function (t5_k) {
  feba3m('login', '', t5_k);
}, fam3p['pay'] = function (u8p, ku3j4) {
  feba3m('pay', u8p, ku3j4);
}, fam3p['logCreateRole'] = function (_4c5kx, ju48p3, v2lag, maeb2l, _stc59) {
  feba3m('logCreateRole', { 'serverid': _4c5kx, 'servername': ju48p3, 'roleid': v2lag, 'rolename': maeb2l, 'rolelevel': _stc59 });
}, fam3p['logEnterGame'] = function (kcj_, roz0, n7i6, a2lg, zr0n1) {
  feba3m('logEnterGame', { 'serverid': kcj_, 'servername': roz0, 'roleid': n7i6, 'rolename': a2lg, 'rolelevel': zr0n1 });
}, fam3p['logRoleUpLevel'] = function (ujx84, upmae3, cj_4x, w$i17h, r$1zn) {
  feba3m('logRoleUpLevel', { 'serverid': ujx84, 'servername': upmae3, 'roleid': cj_4x, 'rolename': w$i17h, 'rolelevel': r$1zn });
}, fam3p['downloadClient'] = function () {
  feba3m('downloadClient');
}, fam3p['getConfig'] = function () {
  return { 'game_id': fmue8p['game_id'], 'game_pkg': fmue8p['game_pkg'], 'partner_id': fmue8p['partner_id'] };
}, fam3p['getPublicData'] = function () {
  feba3m('getPublicData');
}, fam3p['checkMsg'] = function (bpam2e, wh9$i) {
  feba3m('checkMsg', bpam2e, wh9$i);
}, fam3p['checkMsgV2'] = function (ths95w, nr601) {
  feba3m('checkMsgV2', ths95w, nr601);
}, fam3p['sendMessage'] = function (s9t5c_, zoqd, n716r) {
  feba3m('sendMessage', s9t5c_, zoqd, n716r);
}, fam3p['videoAdvert'] = function (t5csx_, _5th) {
  feba3m('videoAdvert', t5csx_, _5th);
}, fam3p['getGameConfig'] = function ($n761i) {
  feba3m('getGameConfig', $n761i);
};