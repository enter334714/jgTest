var H = wx.$F;
let fjk4ux = { 'game_id': '11', 'game_pkg': 'wzcq-q2-_q2wxxcxqd_H', 'partner_id': '4', 'is_auth': !0x1, 'from': null };window['config'] = fjk4ux;let fh9ws5 = fhs95tw(),
    fkx_ct = 'https://sdk.5tun.cn',
    fk_54xc = null,
    fzq0oy = null,
    fh7iw = '';function fhs95tw() {
  var bpaem = {};return { 'order_data': {}, 'init': function (m2peab, s_txc) {
      fh7iw = m2peab && m2peab['game_ver'] ? m2peab['game_ver'] : 0x0, console['log']('[SDK]CP调用init接口');var a2lveb,
          pameu3 = wx['getStorageSync']('plat_uuid');pameu3 ? a2lveb = 0x0 : (pameu3 = this['uuid'](0x10, 0x20), wx['setStorageSync']('plat_uuid', pameu3), a2lveb = 0x1);var h7i$9w = wx['getStorageSync']('plat_idfv');h7i$9w || (h7i$9w = this['uuid'](0x10, 0x20), wx['setStorageSync']('plat_idfv', h7i$9w));var zo0yd = wx['getLaunchOptionsSync'](),
          r6zoq = zo0yd['scene'] ? zo0yd['scene'] : '';if (console['log']('[SDK]小游戏启动参数'), console['log'](zo0yd), a2lveb && zo0yd['query'] && zo0yd['query']['ad_code'] && wx['setStorageSync']('plat_ad_code', zo0yd['query']['ad_code']), zo0yd['query'] && zo0yd['query']['from'] && '' != zo0yd['query']['from']) a2lveb && wx['setStorageSync']('plat_from', zo0yd['query']['from']), fjk4ux['from'] = zo0yd['query']['from'];else {
        var q0doz = wx['getStorageSync']('plat_from');q0doz || '' == q0doz || (fjk4ux['from'] = q0doz);
      }console['log'](fjk4ux['from']);var zr6n1$ = { 'install': a2lveb, 'scene': r6zoq };this['log']('start', zr6n1$), wx['showShareMenu'](), fh7iw && this['checkGameVersion'](fh7iw, function (nqz6r0) {
        s_txc && s_txc(nqz6r0);
      });
    }, 'login': function (b2av, tsh59) {
      console['log']('[SDK]调起登录');var ebl2 = this;bpaem['login'] = 'function' == typeof tsh59 ? tsh59 : null, fjk4ux['is_auth'] ? wx['getSetting']({ 'success': function (ae3b) {
          if (ae3b['authSetting']['scope.userInfo']) console['log']('[SDK]获得授权设置\uFF1A已授权'), ebl2['do_login']();else {
            console['log']('[SDK]获得授权设置\uFF1A未授权'), wx['hideLoading']({});var pu8j3m = wx['getSystemInfoSync'](),
                jk843u = (pu8j3m['screenWidth'], pu8j3m['screenHeight'], wx['createUserInfoButton']({ 'type': 'text', 'text': '授权登录游戏', 'withCredentials': !0x1, 'style': { 'top': pu8j3m['windowHeight'] / 0x2 + pu8j3m['windowHeight'] / 0x4, 'left': pu8j3m['windowWidth'] / 0x2 - 0x64, 'width': 0xc8, 'height': 0x28, 'lineHeight': 0x28, 'backgroundColor': '#07c160', 'color': '#ffffff', 'textAlign': 'center', 'fontSize': 0x10, 'borderRadius': 0x4 } }));jk843u['show'](), jk843u['onTap'](ktc_x5 => {
              console['log'](ktc_x5), f33BL8({ 'title': '正在登录游戏' }), 'getUserInfo:ok' == ktc_x5['errMsg'] ? ebl2['do_login']({ 'head_img': ktc_x5['userInfo']['avatarUrl'] || '', 'nick_name': ktc_x5['userInfo']['nickName'] || '' }) : ebl2['do_login'](), jk843u['destroy']();
            });
          }
        }, 'fail': function () {
          console['log']('[SDK]获得授权设置\uFF1A失败'), ebl2['do_login']();
        } }) : (console['log']('[SDK]授权登录' + fjk4ux['is_auth']), ebl2['do_login']());
    }, 'do_login': function (tc5k_) {
      var k348ju = this;wx['login']({ 'success': function (bal2vg) {
          if (console['log']('微信登录成功返回' + JSON['stringify'](bal2vg)), bal2vg['code']) {
            var j3u48 = k348ju['getPublicData']();j3u48['mo'] = 0x1, j3u48['code'] = bal2vg['code'], j3u48['nick_name'] = tc5k_ ? tc5k_['nick_name'] : '', j3u48['head_img'] = tc5k_ ? tc5k_['head_img'] : '', fjk4ux['is_auth'] ? wx['getUserInfo']({ 'success': function (mae2bp) {
                var k8cx4j = mae2bp['encryptedData'],
                    u38pe = mae2bp['iv'],
                    vblga = mae2bp['signature'];j3u48['encryptedData'] = k8cx4j, j3u48['iv'] = u38pe, j3u48['signature'] = vblga, wx['request']({ 'url': fkx_ct + '/partner/auth', 'method': 'POST', 'dataType': 'json', 'header': { 'content-type': 'application/x-www-form-urlencoded' }, 'data': j3u48, 'success': function (wsht9i) {
                    if (console['log']('[SDK]登录结果\uFF1A'), console['log'](wsht9i), 0xc8 == wsht9i['statusCode']) {
                      var p3auem = wsht9i['data'];if (p3auem['state']) {
                        var $z16r = { 'userid': p3auem['data']['user_id'], 'account': p3auem['data']['nick_name'], 'token': p3auem['data']['token'] };try {
                          wx['setStorageSync']('plat_sdk_token', p3auem['data']['sdk_token']), wx['setStorageSync']('plat_uid', p3auem['data']['user_id']), wx['setStorageSync']('plat_username', p3auem['data']['username']), wx['setStorageSync']('wx_openid', p3auem['data']['openid']), p3auem['data']['ext'] && wx['setStorageSync']('plat_session_key', p3auem['data']['ext']);
                        } catch (jxk4u) {}bpaem['login'] && bpaem['login'](0x0, $z16r);
                      } else bpaem['login'] && bpaem['login'](0x1, { 'errMsg': p3auem['msg'] });
                    } else bpaem['login'] && bpaem['login'](0x1, { 'errMsg': '请求平台服务器失败\uFF01#1' });
                  }, 'fail': function (r1$nz6) {
                    bpaem['login'] && bpaem['login'](0x1, { 'errMsg': r1$nz6['errMsg'] });
                  } });
              }, 'fail': function (mlb2a) {
                bpaem['login'] && bpaem['login'](0x1, { 'errMsg': mlb2a['errMsg'] });
              } }) : wx['request']({ 'url': fkx_ct + '/partner/auth', 'method': 'POST', 'dataType': 'json', 'header': { 'content-type': 'application/x-www-form-urlencoded' }, 'data': j3u48, 'success': function (ebpm2a) {
                if (console['log']('[SDK]登录结果\uFF1A'), console['log'](ebpm2a), 0xc8 == ebpm2a['statusCode']) {
                  var txcs = ebpm2a['data'];if (txcs['state']) {
                    var c4xj = { 'userid': txcs['data']['user_id'], 'account': txcs['data']['nick_name'], 'token': txcs['data']['token'] };try {
                      wx['setStorageSync']('plat_sdk_token', txcs['data']['sdk_token']), wx['setStorageSync']('plat_uid', txcs['data']['user_id']), wx['setStorageSync']('plat_username', txcs['data']['username']), wx['setStorageSync']('wx_openid', txcs['data']['openid']), txcs['data']['ext'] && wx['setStorageSync']('plat_session_key', txcs['data']['ext']);
                    } catch (yqod0) {}bpaem['login'] && bpaem['login'](0x0, c4xj);
                  } else bpaem['login'] && bpaem['login'](0x1, { 'errMsg': txcs['msg'] });
                } else bpaem['login'] && bpaem['login'](0x1, { 'errMsg': '请求平台服务器失败\uFF01#2' });
              } });
          } else bpaem['login'] && bpaem['login'](0x1, { 'errMsg': bal2vg['errMsg'] });
        }, 'fail': function (_k5ct) {
          console['log']('微信登录失败' + JSON['stringify'](_k5ct)), (_k5ct['errMsg']['indexOf']('auth deny') > -0x1 || _k5ct['errMsg']['indexOf']('auth denied') > -0x1) && bpaem['login'] && bpaem['login'](0x1, { 'errMsg': _k5ct['errMsg'] });
        } });
    }, 'checkGameVersion': function (c5_9s, e3pma) {
      console['log']('[SDK]检查游戏版本'), wx['getStorageSync']('plat_sdk_token'), wx['request']({ 'url': fkx_ct + '/game/min/?ac=checkGameVersion', 'method': 'POST', 'dataType': 'json', 'header': { 'content-type': 'application/x-www-form-urlencoded' }, 'data': { 'game_pkg': fjk4ux['game_pkg'], 'partner_id': fjk4ux['partner_id'], 'game_ver': c5_9s }, 'success': function (x_4jc) {
          if (console['log']('[SDK]获取游戏版本结果'), console['log'](x_4jc), 0xc8 == x_4jc['statusCode']) {
            var $7wh9 = x_4jc['data'];$7wh9['state'] ? e3pma && e3pma($7wh9['data']) : e3pma && e3pma({ 'develop': 0x0 });
          } else e3pma && e3pma({ 'develop': 0x0 });
        }, 'fail': function (elv2b) {
          console['log'](elv2b);
        } });
    }, 'pay': function (r1$z, od0zy) {
      var roqdz0 = this;wx['checkSession']({ 'success': function () {
          roqdz0['startPay'](r1$z, od0zy);
        }, 'fail': function () {
          console['log']('[SDK]session过期需要重新登录'), roqdz0['login']({}, function () {
            roqdz0['startPay'](r1$z, od0zy);
          });
        } });
    }, 'startPay': function (ish9t, am2bep) {
      console['log']('[SDK]调起支付\uFF0CCP传值\uFF1A'), console['log'](ish9t);var jpu483 = this;bpaem['pay'] = 'function' == typeof am2bep ? am2bep : null, 0x0;var oq0dyz = wx['getStorageSync']('plat_sdk_token'),
          ozr0d = wx['getStorageSync']('plat_session_key');if (oq0dyz && ozr0d) {
        var h_ts95 = wx['getSystemInfoSync'](),
            bamep = { 'cpbill': ish9t['cpbill'], 'productid': ish9t['productid'], 'productname': ish9t['productname'], 'productdesc': ish9t['productdesc'], 'serverid': ish9t['serverid'], 'servername': ish9t['servername'], 'roleid': ish9t['roleid'], 'rolename': ish9t['rolename'], 'rolelevel': ish9t['rolelevel'], 'price': ish9t['price'], 'extension': ish9t['extension'], 'sdk_token': oq0dyz, 'session_key': ozr0d, 'platform': h_ts95['platform'] };jpu483['order_data'] = bamep;var z6oqr0 = jpu483['getPublicData']();z6oqr0['order_data'] = JSON['stringify'](bamep), wx['request']({ 'url': fkx_ct + '/partner/order', 'method': 'POST', 'dataType': 'json', 'header': { 'content-type': 'application/x-www-form-urlencoded' }, 'data': z6oqr0, 'success': function (p3me8u) {
            if (console['log']('[SDK]完成创建订单'), console['log'](p3me8u), 0xc8 == p3me8u['statusCode']) {
              var p3uj48 = p3me8u['data'];p3uj48['state'] ? void 0x0 === wx['requestPayment'] ? 'android' == h_ts95['platform'] || 'windows' == h_ts95['platform'] || 'devtools' == h_ts95['platform'] ? p3uj48['data']['is_android_pay'] ? jpu483['kfPay'](p3uj48['data']) : jpu483['gamePay'](p3uj48['data']) : p3uj48['data']['is_ios_pay'] ? 0x1 == p3uj48['data']['ios_pay_type'] && jpu483['kfPay'](p3uj48['data']) : wx['showModal']({ 'title': '支付提示', 'content': '很抱歉，由于苹果政策，暂时不能支付，安卓手机不受影响', 'confirmText': '我知道了', 'showCancel': !0x1 }) : jpu483['minPay'](p3uj48['data']) : bpaem['pay'] && bpaem['pay'](0x1, { 'errMsg': p3uj48['msg'] });
            } else bpaem['login'] && bpaem['login'](0x1, { 'errMsg': '请求平台服务器失败\uFF01#3' });
          } });
      } else bpaem['pay'] && bpaem['pay'](0x1, { 'errMsg': '用户未登录，支付失败！' });
    }, 'gamePay': function (m8jup) {
      var q06roz = this;m8jup['buyQuantity'] <= m8jup['balance'] ? (console['log']('[SDK]游戏币充值直接扣除'), wx['showModal']({ 'title': '支付提示', 'content': '您还有' + m8jup['balance'] + '个游戏币未消费，本次支付将扣除' + m8jup['buyQuantity'] + '游戏币', 'showCancel': !0x1, 'confirmText': '我知道了', 'success': function () {
          q06roz['gameGoPay'](m8jup);
        } })) : (console['log']('[SDK]调起米大师支付'), console['log'](m8jup), wx['requestMidasPayment']({ 'mode': 'game', 'env': m8jup['env'], 'offerId': m8jup['offerId'], 'currencyType': m8jup['currencyType'], 'platform': m8jup['platform'], 'buyQuantity': m8jup['buyQuantity'], 'zoneId': m8jup['zoneId'], 'success': function (m2bp) {
          'requestMidasPayment:ok' == m2bp['errMsg'] && q06roz['gameGoPay'](m8jup);
        }, 'fail': function (alveb) {
          -0x1 !== alveb['errMsg']['indexOf']('用户取消') ? bpaem['pay'] && bpaem['pay'](0x2, { 'errMsg': '用户取消支付' }) : bpaem['pay'] && bpaem['pay'](0x1, { 'errMsg': '支付失败:' + alveb['errMsg'] + '(' + alveb['errCode'] + ')' });
        }, 'complete': function (aebp) {} }));
    }, 'kfPay': function (sw97ih) {
      fzq0oy = sw97ih['orderId'], wx['showModal']({ 'title': '支付提示', 'content': '进入客服会话\uFF0C点击右下角小卡片或输入"cz"或"充值"获取支付链接', 'showCancel': !0x1, 'confirmText': '我知道了', 'success': function () {
          wx['openCustomerServiceConversation']({ 'showMessageCard': !0x0, 'sendMessageTitle': '不用点这个卡片', 'sendMessageImg': 'https://static.357pk.net/uploads/2109/weixin_pay_img1.png' });
        } });
    }, 'gameGoPay': function (m2abpe, ame2l) {
      console['log']('[SDK]米大师支付完毕\uFF0C通知服务器发货');var elba2v = this,
          ct5_ = wx['getStorageSync']('plat_session_key');wx['request']({ 'url': fkx_ct + '/partner/pay/' + fjk4ux['partner_id'] + '/' + fjk4ux['game_pkg'] + '/', 'method': 'POST', 'dataType': 'json', 'header': { 'content-type': 'application/x-www-form-urlencoded' }, 'data': { 'order_id': m2abpe['orderId'], 'time': m2abpe['time'], 'sign': m2abpe['sign'], 'session_key': ct5_ }, 'success': function (q0oyzd) {
          if (console['log']('[SDK]米大师支付结果'), console['log'](q0oyzd), 0xc8 == q0oyzd['statusCode']) {
            if (0x1 == q0oyzd['data']['state']) {
              var k4uxj8 = { 'cpOrderNo': elba2v['order_data']['cpbill'], 'orderNo': m2abpe['orderId'], 'amount': elba2v['order_data']['price'], 'extension': elba2v['order_data']['extension'] };bpaem['pay'] && bpaem['pay'](0x0, k4uxj8);
            } else bpaem['pay'] && bpaem['pay'](0x1, { 'errMsg': '支付失败' });
          }
        }, 'fail': function () {} });
    }, 'logCreateRole': function (ma2) {
      var wh7i9$ = wx['getStorageSync']('plat_uid'),
          a3ebm = wx['getStorageSync']('plat_username'),
          emlab2 = {};emlab2['user_id'] = wh7i9$, emlab2['user_name'] = a3ebm, emlab2['role_id'] = ma2['roleid'], emlab2['role_lev'] = ma2['rolelevel'], emlab2['role_name'] = ma2['rolename'], emlab2['server_id'] = ma2['serverid'], ma2['roleid'] && ma2['serverid'] && (fk_54xc = { 'role_id': ma2['roleid'], 'server_id': ma2['serverid'] }), this['log']('create', emlab2);
    }, 'logEnterGame': function (cts59_) {
      var $i167n = wx['getStorageSync']('plat_uid'),
          hsiwt9 = wx['getStorageSync']('plat_username'),
          pmb3ea = {};pmb3ea['user_id'] = $i167n, pmb3ea['user_name'] = hsiwt9, pmb3ea['role_id'] = cts59_['roleid'], pmb3ea['role_lev'] = cts59_['rolelevel'], pmb3ea['role_name'] = cts59_['rolename'], pmb3ea['server_id'] = cts59_['serverid'], cts59_['roleid'] && cts59_['serverid'] && (fk_54xc = { 'role_id': cts59_['roleid'], 'server_id': cts59_['serverid'] }), this['log']('enter', pmb3ea);
    }, 'logRoleUpLevel': function (al2v) {
      var x5kct_ = wx['getStorageSync']('plat_uid'),
          e3ab = wx['getStorageSync']('plat_username'),
          _4k5x = {};_4k5x['user_id'] = x5kct_, _4k5x['user_name'] = e3ab, _4k5x['role_id'] = al2v['roleid'], _4k5x['role_lev'] = al2v['rolelevel'], _4k5x['role_name'] = al2v['rolename'], _4k5x['server_id'] = al2v['serverid'], al2v['roleid'] && al2v['serverid'] && (fk_54xc = { 'role_id': al2v['roleid'], 'server_id': al2v['serverid'] }), this['log']('levelup', _4k5x);
    }, 'uuid': function (c4_5kx, cxs5t_) {
      var h7wi,
          ydzoq0,
          _j4xkc = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'['split'](''),
          a2veb = [];if (c4_5kx = c4_5kx || _j4xkc['length'], cxs5t_) {
        for (h7wi = 0x0; h7wi < cxs5t_; h7wi++) a2veb[h7wi] = _j4xkc[0x0 | Math['random']() * c4_5kx];
      } else {
        for (a2veb[0x8] = a2veb[0xd] = a2veb[0x12] = a2veb[0x17] = '-', a2veb[0xe] = '4', h7wi = 0x0; h7wi < 0x24; h7wi++) a2veb[h7wi] || (ydzoq0 = 0x0 | 0x10 * Math['random'](), a2veb[h7wi] = _j4xkc[0x13 == h7wi ? 0x3 & ydzoq0 | 0x8 : ydzoq0]);
      }return a2veb['join']('');
    }, 'getPublicData': function () {
      var evlab = wx['getSystemInfoSync'](),
          rqoz0 = wx['getStorageSync']('plat_uuid'),
          i$7h9 = wx['getStorageSync']('plat_idfv'),
          sxc5 = wx['getStorageSync']('plat_ad_code');return { 'game_id': fjk4ux['game_id'], 'game_pkg': fjk4ux['game_pkg'], 'partner_id': fjk4ux['partner_id'], 'ad_code': sxc5, 'uuid': rqoz0, 'idfv': i$7h9, 'dname': evlab['model'], 'mac': '0000', 'net_type': 0x0 == evlab['wifiSignal'] ? '4G' : 'WIFI', 'os_ver': evlab['system'], 'sdk_ver': evlab['version'], 'game_ver': fh7iw, 'device': 'android' == evlab['platform'] ? 0x1 : 0x2, 'is_from_min': 0x1 };
    }, 'log': function (kxc5_t, mj8p3) {
      var s5c9t_ = this['getPublicData']();for (var od0qzr in mj8p3) s5c9t_[od0qzr] = mj8p3[od0qzr];console['log']('[SDK]上报数据\uFF1A' + kxc5_t), console['log'](s5c9t_), wx['request']({ 'url': fkx_ct + '/partner/h5Log/?type=' + kxc5_t + '&data=' + encodeURIComponent(JSON['stringify'](s5c9t_)) });
    }, 'getDate': function () {
      var p2mab = new Date();return p2mab['getFullYear']() + '-' + p2mab['getMonth']() + '-' + p2mab['getDate']();
    }, 'downloadClient': function () {
      var nw$71i = '微端-不用点这个卡片-' + wx['getStorageSync']('wx_openid');wx['showModal']({ 'title': '微端下载提示', 'content': '进入客服会话，点击右下角小卡片获取微端下载链接', 'showCancel': !0x1, 'confirmText': '我知道了', 'success': function () {
          var z$6r1n = { 'showMessageCard': !0x0, 'sendMessageTitle': nw$71i, 'sendMessageImg': 'https://static.357pk.net/uploads/2109/weixin_download_img2.jpg' };wx['openCustomerServiceConversation'](z$6r1n);
        } });
    }, 'checkMsg': function (nr$z6, m8upe) {
      console['log']('[SDK]查看文本是否有违规内容');var _s5ct9 = wx['getStorageSync']('plat_sdk_token');wx['request']({ 'url': fkx_ct + '/game/min/?ac=msgCheck', 'method': 'POST', 'dataType': 'json', 'header': { 'content-type': 'application/x-www-form-urlencoded' }, 'data': { 'game_pkg': fjk4ux['game_pkg'], 'partner_id': fjk4ux['partner_id'], 'sdk_token': _s5ct9, 'content': nr$z6 }, 'success': function (sw5) {
          console['log']('[SDK]查看文本是否有违规内容结果返回:'), m8upe && m8upe(0x0 == sw5['data']['code'] ? 0x1 : 0x0, sw5['data']['msg']);
        } });
    }, 'checkMsgV2': function (qozr0, kj8x4u) {
      console['log']('[SDK]查看文本是否有违规内容');var yzd = wx['getStorageSync']('plat_sdk_token');wx['request']({ 'url': fkx_ct + '/game/min/?ac=msgCheckV2', 'method': 'POST', 'dataType': 'json', 'header': { 'content-type': 'application/x-www-form-urlencoded' }, 'data': { 'game_pkg': fjk4ux['game_pkg'], 'partner_id': fjk4ux['partner_id'], 'sdk_token': yzd, 'content': qozr0, 'scene': 0x1 }, 'success': function (jk_xc4) {
          console['log']('[SDK]查看文本是否有违规内容结果返回:'), kj8x4u && kj8x4u(0x0 == jk_xc4['data']['code'] ? 0x1 : 0x0, jk_xc4['data']['msg']);
        } });
    }, 'sendMessage': function (nzrq60, ct_59, kx5t_) {
      console['log']('[SDK]发送订阅消息');var sw5th9 = wx['getStorageSync']('plat_sdk_token');wx['request']({ 'url': fkx_ct + '/game/min/?ac=sendMessage', 'method': 'POST', 'dataType': 'json', 'header': { 'content-type': 'application/x-www-form-urlencoded' }, 'data': { 'game_pkg': fjk4ux['game_pkg'], 'partner_id': fjk4ux['partner_id'], 'sdk_token': sw5th9, 'template_id': nzrq60, 'data': ct_59 }, 'success': function (_ktxc) {
          console['log']('[SDK]订阅消息发送成功'), kx5t_ && kx5t_(0x0 == _ktxc['data']['code'] ? 0x1 : 0x0, _ktxc['data']['msg']);
        } });
    }, 'videoAdvert': function (_tc9s5, m3pu8) {
      wx['request']({ 'url': fkx_ct + '/?method=user.gameConfig', 'method': 'POST', 'dataType': 'json', 'header': { 'content-type': 'application/x-www-form-urlencoded' }, 'data': { 'game_pkg': fjk4ux['game_pkg'], 'partner_id': fjk4ux['partner_id'] }, 'success': function (p2amb) {
          var wi71h$ = p2amb['data']['data']['weixin_advert_id'];let vgbl = null;(vgbl = wx['createRewardedVideoAd']({ 'adUnitId': wi71h$ }))['show']()['catch'](() => {
            vgbl['load']()['then'](() => vgbl['show']())['catch'](qnr06 => {
              console['log']('激励视频\x20广告显示失败');
            });
          }), vgbl['onError'](qor0dz => {
            console['log'](qor0dz);
          }), vgbl['onClose']($i9w => {
            vgbl && (vgbl['offClose'](), $i9w && $i9w['isEnded'] || void 0x0 === $i9w ? console['log']('正常播放结束，需要下发奖励') : console['log']('播放退出，不下发奖励'));
          });
        } });
    }, 'getGameConfig': function (mpe3) {
      console['log']('[SDK]获取游戏配置'), wx['request']({ 'url': fkx_ct + '/?method=user.gameConfig', 'method': 'POST', 'dataType': 'json', 'header': { 'content-type': 'application/x-www-form-urlencoded' }, 'data': { 'game_pkg': fjk4ux['game_pkg'], 'partner_id': fjk4ux['partner_id'] }, 'success': function (whs79) {
          var l2vgab = whs79['data']['data'];console['log']('[SDK]获取游戏配置成功'), console['log'](whs79['data']);var zqrn06;zqrn06 = { 'pay_switch': l2vgab['pay_switch'], 'game_ver': l2vgab['game_ver'] }, mpe3 && mpe3(zqrn06);
        } });
    } };
}function fa2vle(eamb2l, whs9ti, bm2eap) {
  eamb2l in fh9ws5 && fh9ws5[eamb2l](whs9ti, bm2eap);
}const fkjx_c = {};window['cwan'] = fkjx_c, fkjx_c['init'] = function (mj3p8u, c_kx54) {
  fa2vle('init', mj3p8u, c_kx54);
}, fkjx_c['login'] = function (blam2e) {
  fa2vle('login', '', blam2e);
}, fkjx_c['pay'] = function (i617, r0z1n6) {
  fa2vle('pay', i617, r0z1n6);
}, fkjx_c['logCreateRole'] = function (u8jmp, csx5_, paemu3, a2be, ujp83m) {
  fa2vle('logCreateRole', { 'serverid': u8jmp, 'servername': csx5_, 'roleid': paemu3, 'rolename': a2be, 'rolelevel': ujp83m });
}, fkjx_c['logEnterGame'] = function (ujm8p3, $9iwh, xj8c4k, n1i7w$, cxk4) {
  fa2vle('logEnterGame', { 'serverid': ujm8p3, 'servername': $9iwh, 'roleid': xj8c4k, 'rolename': n1i7w$, 'rolelevel': cxk4 });
}, fkjx_c['logRoleUpLevel'] = function (h9wts5, _hts59, pam3u, t_xc5k, v2ablg) {
  fa2vle('logRoleUpLevel', { 'serverid': h9wts5, 'servername': _hts59, 'roleid': pam3u, 'rolename': t_xc5k, 'rolelevel': v2ablg });
}, fkjx_c['downloadClient'] = function () {
  fa2vle('downloadClient');
}, fkjx_c['getConfig'] = function () {
  return { 'game_id': fjk4ux['game_id'], 'game_pkg': fjk4ux['game_pkg'], 'partner_id': fjk4ux['partner_id'] };
}, fkjx_c['getPublicData'] = function () {
  fa2vle('getPublicData');
}, fkjx_c['checkMsg'] = function (tc5_s, u8kj4) {
  fa2vle('checkMsg', tc5_s, u8kj4);
}, fkjx_c['checkMsgV2'] = function (iw7h$, u4pj) {
  fa2vle('checkMsgV2', iw7h$, u4pj);
}, fkjx_c['sendMessage'] = function (q0zodr, xc4k_j, i79wh$) {
  fa2vle('sendMessage', q0zodr, xc4k_j, i79wh$);
}, fkjx_c['videoAdvert'] = function (t59hw, _xt5) {
  fa2vle('videoAdvert', t59hw, _xt5);
}, fkjx_c['getGameConfig'] = function (kjux84) {
  fa2vle('getGameConfig', kjux84);
};