var H = wx.$F;
let fwi91h7$ = { 'game_id': '11', 'game_pkg': 'wzcq-q2-_q2wxxcxqd_H', 'partner_id': '4', 'is_auth': !(0x43d + -0x30 * 0x2a + 0x3a4), 'from': null };window['config'] = fwi91h7$;let fumej83 = f$n1wi7h(),
    fro0d = 'https://sdk.5tun.cn',
    fpebm3u = null,
    fs97thi = null,
    fcx9_ = '';function f$n1wi7h() {
  var mbalp = {};return { 'order_data': {}, 'init': function (hs9iwt, ydqr0zo) {
      fcx9_ = hs9iwt && hs9iwt['game_ver'] ? hs9iwt['game_ver'] : -0x112 * 0x1b + 0x1783 + 0x563, console['log']('[SDK]CP调用init接口');var c8u4jkx,
          ri16$7 = wx['getStorageSync']('plat_uuid');ri16$7 ? c8u4jkx = 0x2005 + 0x2210 + 0x4215 * -0x1 : (ri16$7 = this['uuid'](0x2 * 0xd85 + -0x1 * -0xc92 + -0x278c, 0x12a3 + -0x83 * 0x47 + 0x1 * 0x11d2), wx['setStorageSync']('plat_uuid', ri16$7), c8u4jkx = -0x6 * -0x35f + 0x14cd + -0x76 * 0x59);var k_j4x5c = wx['getStorageSync']('plat_idfv');k_j4x5c || (k_j4x5c = this['uuid'](0x1da8 + -0x1a20 + -0x128 * 0x3, 0x1634 + -0x3 * -0x239 + -0x1cbf), wx['setStorageSync']('plat_idfv', k_j4x5c));var apm3b2 = wx['getLaunchOptionsSync'](),
          w1i7$6n = apm3b2['scene'] ? apm3b2['scene'] : '';if (console['log']('[SDK]小游戏启动参数'), console['log'](apm3b2), c8u4jkx && apm3b2['query'] && apm3b2['query']['ad_code'] && wx['setStorageSync']('plat_ad_code', apm3b2['query']['ad_code']), apm3b2['query'] && apm3b2['query']['from'] && '' != apm3b2['query']['from']) c8u4jkx && wx['setStorageSync']('plat_from', apm3b2['query']['from']), fwi91h7$['from'] = apm3b2['query']['from'];else {
        var z6qn1r0 = wx['getStorageSync']('plat_from');z6qn1r0 || '' == z6qn1r0 || (fwi91h7$['from'] = z6qn1r0);
      }console['log'](fwi91h7$['from']);var vgel = { 'install': c8u4jkx, 'scene': w1i7$6n };this['log']('start', vgel), wx['showShareMenu'](), fcx9_ && this['checkGameVersion'](fcx9_, function (wh7$1) {
        ydqr0zo && ydqr0zo(wh7$1);
      });
    }, 'login': function ($iws97, q6z0rno) {
      console['log']('[SDK]调起登录');var cxjuk = this;mbalp['login'] = 'function' == typeof q6z0rno ? q6z0rno : null, fwi91h7$['is_auth'] ? wx['getSetting']({ 'success': function (rdzqoy) {
          if (rdzqoy['authSetting']['scope.userInfo']) console['log']('[SDK]获得授权设置\uFF1A已授权'), cxjuk['do_login']();else {
            console['log']('[SDK]获得授权设置\uFF1A未授权'), wx['hideLoading']({});var jpmue3 = wx['getSystemInfoSync'](),
                mu3ap8e = (jpmue3['screenWidth'], jpmue3['screenHeight'], wx['createUserInfoButton']({ 'type': 'text', 'text': '授权登录游戏', 'withCredentials': !(-0xf54 + -0x19cd + 0x2922), 'style': { 'top': jpmue3['windowHeight'] / (0x2137 + -0xfbe + -0x1177) + jpmue3['windowHeight'] / (0x14dc + -0x18bc + 0xa6 * 0x6), 'left': jpmue3['windowWidth'] / (-0x3 * -0x2a2 + 0x72b + -0x101 * 0xf) - (-0x3 * 0x8da + 0x14c * 0x1 + 0x19a6), 'width': 0xc8, 'height': 0x28, 'lineHeight': 0x28, 'backgroundColor': '#07c160', 'color': '#ffffff', 'textAlign': 'center', 'fontSize': 0x10, 'borderRadius': 0x4 } }));mu3ap8e['show'](), mu3ap8e['onTap'](c59_ths => {
              console['log'](c59_ths), f33BL8({ 'title': '正在登录游戏' }), 'getUserInfo:ok' == c59_ths['errMsg'] ? cxjuk['do_login']({ 'head_img': c59_ths['userInfo']['avatarUrl'] || '', 'nick_name': c59_ths['userInfo']['nickName'] || '' }) : cxjuk['do_login'](), mu3ap8e['destroy']();
            });
          }
        }, 'fail': function () {
          console['log']('[SDK]获得授权设置\uFF1A失败'), cxjuk['do_login']();
        } }) : (console['log']('[SDK]授权登录' + fwi91h7$['is_auth']), cxjuk['do_login']());
    }, 'do_login': function (xj_4k5) {
      var nwi1h = this;wx['login']({ 'success': function (ep3a8u) {
          if (console['log']('微信登录成功返回' + JSON['stringify'](ep3a8u)), ep3a8u['code']) {
            var w$671ni = nwi1h['getPublicData']();w$671ni['mo'] = 0x5bd + 0x2057 + 0x3 * -0xcb1, w$671ni['code'] = ep3a8u['code'], w$671ni['nick_name'] = xj_4k5 ? xj_4k5['nick_name'] : '', w$671ni['head_img'] = xj_4k5 ? xj_4k5['head_img'] : '', fwi91h7$['is_auth'] ? wx['getUserInfo']({ 'success': function (h9ct_5) {
                var cx5_t = h9ct_5['encryptedData'],
                    cx5_kts = h9ct_5['iv'],
                    eupbma = h9ct_5['signature'];w$671ni['encryptedData'] = cx5_t, w$671ni['iv'] = cx5_kts, w$671ni['signature'] = eupbma, wx['request']({ 'url': fro0d + '/partner/auth', 'method': 'POST', 'dataType': 'json', 'header': { 'content-type': 'application/x-www-form-urlencoded' }, 'data': w$671ni, 'success': function (sht9iw7) {
                    if (console['log']('[SDK]登录结果\uFF1A'), console['log'](sht9iw7), 0x20ad + 0xfd8 + -0x2fbd == sht9iw7['statusCode']) {
                      var whsi9t7 = sht9iw7['data'];if (whsi9t7['state']) {
                        var egvlba2 = { 'userid': whsi9t7['data']['user_id'], 'account': whsi9t7['data']['nick_name'], 'token': whsi9t7['data']['token'] };try {
                          wx['setStorageSync']('plat_sdk_token', whsi9t7['data']['sdk_token']), wx['setStorageSync']('plat_uid', whsi9t7['data']['user_id']), wx['setStorageSync']('plat_username', whsi9t7['data']['username']), wx['setStorageSync']('wx_openid', whsi9t7['data']['openid']), whsi9t7['data']['ext'] && wx['setStorageSync']('plat_session_key', whsi9t7['data']['ext']);
                        } catch (zn1q6r0) {}mbalp['login'] && mbalp['login'](-0x1724 + -0x258f + 0x1 * 0x3cb3, egvlba2);
                      } else mbalp['login'] && mbalp['login'](-0x9 * -0x12 + -0x2 * -0x9ec + -0x6d3 * 0x3, { 'errMsg': whsi9t7['msg'] });
                    } else mbalp['login'] && mbalp['login'](0x674 + -0x1c * 0x1f + -0x30f, { 'errMsg': '请求平台服务器失败\uFF01#1' });
                  }, 'fail': function (t7wshi) {
                    mbalp['login'] && mbalp['login'](0x43 * 0x13 + 0x1 * -0x187d + 0x1385, { 'errMsg': t7wshi['errMsg'] });
                  } });
              }, 'fail': function ($in71w6) {
                mbalp['login'] && mbalp['login'](0x6b9 * -0x2 + 0x1 * -0x49d + 0x242 * 0x8, { 'errMsg': $in71w6['errMsg'] });
              } }) : wx['request']({ 'url': fro0d + '/partner/auth', 'method': 'POST', 'dataType': 'json', 'header': { 'content-type': 'application/x-www-form-urlencoded' }, 'data': w$671ni, 'success': function (pmeuj8) {
                if (console['log']('[SDK]登录结果\uFF1A'), console['log'](pmeuj8), -0x1fb2 + -0x111a + 0x3194 == pmeuj8['statusCode']) {
                  var jck_x5 = pmeuj8['data'];if (jck_x5['state']) {
                    var j84kpu3 = { 'userid': jck_x5['data']['user_id'], 'account': jck_x5['data']['nick_name'], 'token': jck_x5['data']['token'] };try {
                      wx['setStorageSync']('plat_sdk_token', jck_x5['data']['sdk_token']), wx['setStorageSync']('plat_uid', jck_x5['data']['user_id']), wx['setStorageSync']('plat_username', jck_x5['data']['username']), wx['setStorageSync']('wx_openid', jck_x5['data']['openid']), jck_x5['data']['ext'] && wx['setStorageSync']('plat_session_key', jck_x5['data']['ext']);
                    } catch (nr$z17) {}mbalp['login'] && mbalp['login'](-0x175b + -0x16e0 * -0x1 + 0x3 * 0x29, j84kpu3);
                  } else mbalp['login'] && mbalp['login'](0xe02 + -0x166f + -0xa6 * -0xd, { 'errMsg': jck_x5['msg'] });
                } else mbalp['login'] && mbalp['login'](0x254e + -0xcae + -0x189f * 0x1, { 'errMsg': '请求平台服务器失败\uFF01#2' });
              } });
          } else mbalp['login'] && mbalp['login'](0x3be * -0x7 + 0xe33 + 0xc00, { 'errMsg': ep3a8u['errMsg'] });
        }, 'fail': function (s79h$iw) {
          console['log']('微信登录失败' + JSON['stringify'](s79h$iw)), (s79h$iw['errMsg']['indexOf']('auth deny') > -(0xfdb + -0x2097 + 0x10bd) || s79h$iw['errMsg']['indexOf']('auth denied') > -(0x18d9 + -0x82a + -0x7 * 0x262)) && mbalp['login'] && mbalp['login'](-0xc6a + -0x16d1 + 0x70c * 0x5, { 'errMsg': s79h$iw['errMsg'] });
        } });
    }, 'checkGameVersion': function ($sw97i, hw9tis5) {
      console['log']('[SDK]检查游戏版本'), wx['getStorageSync']('plat_sdk_token'), wx['request']({ 'url': fro0d + '/game/min/?ac=checkGameVersion', 'method': 'POST', 'dataType': 'json', 'header': { 'content-type': 'application/x-www-form-urlencoded' }, 'data': { 'game_pkg': fwi91h7$['game_pkg'], 'partner_id': fwi91h7$['partner_id'], 'game_ver': $sw97i }, 'success': function (z0qd6ro) {
          if (console['log']('[SDK]获取游戏版本结果'), console['log'](z0qd6ro), -0x157 + 0xca3 * 0x1 + -0xa84 == z0qd6ro['statusCode']) {
            var r$1zn0 = z0qd6ro['data'];r$1zn0['state'] ? hw9tis5 && hw9tis5(r$1zn0['data']) : hw9tis5 && hw9tis5({ 'develop': 0x0 });
          } else hw9tis5 && hw9tis5({ 'develop': 0x0 });
        }, 'fail': function (jcxku) {
          console['log'](jcxku);
        } });
    }, 'pay': function (_w59hts, roqnz6) {
      var em2pla = this;wx['checkSession']({ 'success': function () {
          em2pla['startPay'](_w59hts, roqnz6);
        }, 'fail': function () {
          console['log']('[SDK]session过期需要重新登录'), em2pla['login']({}, function () {
            em2pla['startPay'](_w59hts, roqnz6);
          });
        } });
    }, 'startPay': function (u83pjk, ri17n6) {
      console['log']('[SDK]调起支付\uFF0CCP传值\uFF1A'), console['log'](u83pjk);var _sh9ct5 = this;mbalp['pay'] = 'function' == typeof ri17n6 ? ri17n6 : null, -0x25ea + -0x1a4 + -0x278e * -0x1;var epam3ub = wx['getStorageSync']('plat_sdk_token'),
          htsi5w = wx['getStorageSync']('plat_session_key');if (epam3ub && htsi5w) {
        var abg2 = wx['getSystemInfoSync'](),
            th5_sc = { 'cpbill': u83pjk['cpbill'], 'productid': u83pjk['productid'], 'productname': u83pjk['productname'], 'productdesc': u83pjk['productdesc'], 'serverid': u83pjk['serverid'], 'servername': u83pjk['servername'], 'roleid': u83pjk['roleid'], 'rolename': u83pjk['rolename'], 'rolelevel': u83pjk['rolelevel'], 'price': u83pjk['price'], 'extension': u83pjk['extension'], 'sdk_token': epam3ub, 'session_key': htsi5w, 'platform': abg2['platform'] };_sh9ct5['order_data'] = th5_sc;var aep83um = _sh9ct5['getPublicData']();aep83um['order_data'] = JSON['stringify'](th5_sc), wx['request']({ 'url': fro0d + '/partner/order', 'method': 'POST', 'dataType': 'json', 'header': { 'content-type': 'application/x-www-form-urlencoded' }, 'data': aep83um, 'success': function (z601q) {
            if (console['log']('[SDK]完成创建订单'), console['log'](z601q), -0x1f23 + -0x6 * 0x250 + -0x269 * -0x13 == z601q['statusCode']) {
              var $zn17r6 = z601q['data'];$zn17r6['state'] ? void (-0x1664 + -0x4ee + 0x1 * 0x1b52) === wx['requestPayment'] ? 'android' == abg2['platform'] || 'windows' == abg2['platform'] || 'devtools' == abg2['platform'] ? $zn17r6['data']['is_android_pay'] ? _sh9ct5['kfPay']($zn17r6['data']) : _sh9ct5['gamePay']($zn17r6['data']) : $zn17r6['data']['is_ios_pay'] ? -0x2104 + 0x66e * -0x2 + 0x2de1 == $zn17r6['data']['ios_pay_type'] && _sh9ct5['kfPay']($zn17r6['data']) : wx['showModal']({ 'title': '支付提示', 'content': '很抱歉，由于苹果政策，暂时不能支付，安卓手机不受影响', 'confirmText': '我知道了', 'showCancel': !(0x59a + -0x1de1 + -0x7 * -0x378) }) : _sh9ct5['minPay']($zn17r6['data']) : mbalp['pay'] && mbalp['pay'](-0x4e1 * -0x3 + -0xac6 + -0x3dc, { 'errMsg': $zn17r6['msg'] });
            } else mbalp['login'] && mbalp['login'](-0x2 * -0xa93 + -0x71a + -0x5 * 0x2cf, { 'errMsg': '请求平台服务器失败\uFF01#3' });
          } });
      } else mbalp['pay'] && mbalp['pay'](0x6eb + -0x11 * 0x47 + 0x233 * -0x1, { 'errMsg': '用户未登录，支付失败！' });
    }, 'gamePay': function (velba2) {
      var h9i7swt = this;velba2['buyQuantity'] <= velba2['balance'] ? (console['log']('[SDK]游戏币充值直接扣除'), wx['showModal']({ 'title': '支付提示', 'content': '您还有' + velba2['balance'] + '个游戏币未消费，本次支付将扣除' + velba2['buyQuantity'] + '游戏币', 'showCancel': !(-0x186 + 0xf * 0x44 + -0x275), 'confirmText': '我知道了', 'success': function () {
          h9i7swt['gameGoPay'](velba2);
        } })) : (console['log']('[SDK]调起米大师支付'), console['log'](velba2), wx['requestMidasPayment']({ 'mode': 'game', 'env': velba2['env'], 'offerId': velba2['offerId'], 'currencyType': velba2['currencyType'], 'platform': velba2['platform'], 'buyQuantity': velba2['buyQuantity'], 'zoneId': velba2['zoneId'], 'success': function (xu48kjc) {
          'requestMidasPayment:ok' == xu48kjc['errMsg'] && h9i7swt['gameGoPay'](velba2);
        }, 'fail': function (bp3umae) {
          -(0x1 * 0x168b + -0x1 * -0x2009 + -0x3693 * 0x1) !== bp3umae['errMsg']['indexOf']('用户取消') ? mbalp['pay'] && mbalp['pay'](-0x2665 + -0x5c6 * -0x3 + 0x1515, { 'errMsg': '用户取消支付' }) : mbalp['pay'] && mbalp['pay'](-0x2cf * -0x3 + -0x20dc + 0x1870, { 'errMsg': '支付失败:' + bp3umae['errMsg'] + '(' + bp3umae['errCode'] + ')' });
        }, 'complete': function (is7$9wh) {} }));
    }, 'kfPay': function ($6n7rz1) {
      fs97thi = $6n7rz1['orderId'], wx['showModal']({ 'title': '支付提示', 'content': '进入客服会话\uFF0C点击右下角小卡片或输入"cz"或"充值"获取支付链接', 'showCancel': !(-0xde1 + 0x15d2 + -0x7f0), 'confirmText': '我知道了', 'success': function () {
          wx['openCustomerServiceConversation']({ 'showMessageCard': !(0x1ce1 + -0x9b7 + 0x2 * -0x995), 'sendMessageTitle': '不用点这个卡片', 'sendMessageImg': 'https://static.357pk.net/uploads/2109/weixin_pay_img1.png' });
        } });
    }, 'gameGoPay': function ($1n6, w6$17ni) {
      console['log']('[SDK]米大师支付完毕\uFF0C通知服务器发货');var h95swit = this,
          aepb23 = wx['getStorageSync']('plat_session_key');wx['request']({ 'url': fro0d + '/partner/pay/' + fwi91h7$['partner_id'] + '/' + fwi91h7$['game_pkg'] + '/', 'method': 'POST', 'dataType': 'json', 'header': { 'content-type': 'application/x-www-form-urlencoded' }, 'data': { 'order_id': $1n6['orderId'], 'time': $1n6['time'], 'sign': $1n6['sign'], 'session_key': aepb23 }, 'success': function (p84ku3) {
          if (console['log']('[SDK]米大师支付结果'), console['log'](p84ku3), 0x1 * -0x225 + 0x1 * -0x100f + 0x12fc == p84ku3['statusCode']) {
            if (-0x1575 * 0x1 + -0x1 * -0x4e1 + -0x5 * -0x351 == p84ku3['data']['state']) {
              var w71h$i = { 'cpOrderNo': h95swit['order_data']['cpbill'], 'orderNo': $1n6['orderId'], 'amount': h95swit['order_data']['price'], 'extension': h95swit['order_data']['extension'] };mbalp['pay'] && mbalp['pay'](0x185 * -0x16 + 0x1 * -0xe7d + 0x2feb, w71h$i);
            } else mbalp['pay'] && mbalp['pay'](0x23e + -0x621 + 0xf9 * 0x4, { 'errMsg': '支付失败' });
          }
        }, 'fail': function () {} });
    }, 'logCreateRole': function (ape8m3) {
      var r$z10n6 = wx['getStorageSync']('plat_uid'),
          ukc4xj = wx['getStorageSync']('plat_username'),
          a3be = {};a3be['user_id'] = r$z10n6, a3be['user_name'] = ukc4xj, a3be['role_id'] = ape8m3['roleid'], a3be['role_lev'] = ape8m3['rolelevel'], a3be['role_name'] = ape8m3['rolename'], a3be['server_id'] = ape8m3['serverid'], ape8m3['roleid'] && ape8m3['serverid'] && (fpebm3u = { 'role_id': ape8m3['roleid'], 'server_id': ape8m3['serverid'] }), this['log']('create', a3be);
    }, 'logEnterGame': function (lgveab2) {
      var cs_9th5 = wx['getStorageSync']('plat_uid'),
          pbe2mal = wx['getStorageSync']('plat_username'),
          pj34m8 = {};pj34m8['user_id'] = cs_9th5, pj34m8['user_name'] = pbe2mal, pj34m8['role_id'] = lgveab2['roleid'], pj34m8['role_lev'] = lgveab2['rolelevel'], pj34m8['role_name'] = lgveab2['rolename'], pj34m8['server_id'] = lgveab2['serverid'], lgveab2['roleid'] && lgveab2['serverid'] && (fpebm3u = { 'role_id': lgveab2['roleid'], 'server_id': lgveab2['serverid'] }), this['log']('enter', pj34m8);
    }, 'logRoleUpLevel': function (j4ukcx) {
      var wtsh95 = wx['getStorageSync']('plat_uid'),
          siw7ht9 = wx['getStorageSync']('plat_username'),
          _tx9s5c = {};_tx9s5c['user_id'] = wtsh95, _tx9s5c['user_name'] = siw7ht9, _tx9s5c['role_id'] = j4ukcx['roleid'], _tx9s5c['role_lev'] = j4ukcx['rolelevel'], _tx9s5c['role_name'] = j4ukcx['rolename'], _tx9s5c['server_id'] = j4ukcx['serverid'], j4ukcx['roleid'] && j4ukcx['serverid'] && (fpebm3u = { 'role_id': j4ukcx['roleid'], 'server_id': j4ukcx['serverid'] }), this['log']('levelup', _tx9s5c);
    }, 'uuid': function (t5_ckx, be2lamv) {
      var ch95st,
          lmpea,
          $6z7n1 = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'['split'](''),
          ydoq0 = [];if (t5_ckx = t5_ckx || $6z7n1['length'], be2lamv) {
        for (ch95st = -0x20 * -0xaa + 0x85e + -0xecf * 0x2; ch95st < be2lamv; ch95st++) ydoq0[ch95st] = $6z7n1[0x1 * -0x8e1 + -0x1635 + 0x1f16 | Math['random']() * t5_ckx];
      } else {
        for (ydoq0[-0xb * 0xe0 + -0x5 * 0x4f3 + 0x2267] = ydoq0[-0x7 * -0x40c + 0x123b + -0x2e82] = ydoq0[-0x11b6 + 0x10b9 + 0x10f] = ydoq0[0x1 * 0x1f + -0xf4f + 0x1 * 0xf47] = '-', ydoq0[0x1f * -0x4f + 0x2471 + -0x1ad2] = '4', ch95st = 0x1 * -0x1d30 + 0x15f * -0xd + -0x2f03 * -0x1; ch95st < -0x14db + 0x7ab * 0x3 + -0x202; ch95st++) ydoq0[ch95st] || (lmpea = 0x12 * -0x101 + -0x597 + 0x17a9 | (0x11e3 * -0x1 + -0x1367 + 0x255a) * Math['random'](), ydoq0[ch95st] = $6z7n1[-0x8 * 0x4be + -0x656 * 0x1 + -0x2c59 * -0x1 == ch95st ? 0x45a * 0x8 + -0x2de + 0x4b * -0x6d & lmpea | 0xbbf + -0x3 * 0xba2 + 0x172f * 0x1 : lmpea]);
      }return ydoq0['join']('');
    }, 'getPublicData': function () {
      var hin$71 = wx['getSystemInfoSync'](),
          kxcju84 = wx['getStorageSync']('plat_uuid'),
          valbm2 = wx['getStorageSync']('plat_idfv'),
          _t5whs9 = wx['getStorageSync']('plat_ad_code');return { 'game_id': fwi91h7$['game_id'], 'game_pkg': fwi91h7$['game_pkg'], 'partner_id': fwi91h7$['partner_id'], 'ad_code': _t5whs9, 'uuid': kxcju84, 'idfv': valbm2, 'dname': hin$71['model'], 'mac': '0000', 'net_type': -0x1 * 0x1525 + 0x1aa * -0xd + 0x2f * 0xe9 == hin$71['wifiSignal'] ? '4G' : 'WIFI', 'os_ver': hin$71['system'], 'sdk_ver': hin$71['version'], 'game_ver': fcx9_, 'device': 'android' == hin$71['platform'] ? 0x1 * 0x9f9 + 0x17b6 * -0x1 + -0x6df * -0x2 : 0xe3 * -0x24 + 0x14 * 0x90 + -0xa57 * -0x2, 'is_from_min': 0x1 };
    }, 'log': function (baume3p, in$r) {
      var blaepm2 = this['getPublicData']();for (var empab3 in in$r) blaepm2[empab3] = in$r[empab3];console['log']('[SDK]上报数据\uFF1A' + baume3p), console['log'](blaepm2), wx['request']({ 'url': fro0d + '/partner/h5Log/?type=' + baume3p + '&data=' + encodeURIComponent(JSON['stringify'](blaepm2)) });
    }, 'getDate': function () {
      var mua38e = new Date();return mua38e['getFullYear']() + '-' + mua38e['getMonth']() + '-' + mua38e['getDate']();
    }, 'downloadClient': function () {
      var _ks5xtc = '微端-不用点这个卡片-' + wx['getStorageSync']('wx_openid');wx['showModal']({ 'title': '微端下载提示', 'content': '进入客服会话，点击右下角小卡片获取微端下载链接', 'showCancel': !(-0x12e3 * -0x2 + 0x1a3f + -0xf1 * 0x44), 'confirmText': '我知道了', 'success': function () {
          var n01r6$z = { 'showMessageCard': !(0x16 * -0x139 + 0x218e + -0xc * 0x8e), 'sendMessageTitle': _ks5xtc, 'sendMessageImg': 'https://static.357pk.net/uploads/2109/weixin_download_img2.jpg' };wx['openCustomerServiceConversation'](n01r6$z);
        } });
    }, 'checkMsg': function (dryoq, ih5tws) {
      console['log']('[SDK]查看文本是否有违规内容');var rozdq0y = wx['getStorageSync']('plat_sdk_token');wx['request']({ 'url': fro0d + '/game/min/?ac=msgCheck', 'method': 'POST', 'dataType': 'json', 'header': { 'content-type': 'application/x-www-form-urlencoded' }, 'data': { 'game_pkg': fwi91h7$['game_pkg'], 'partner_id': fwi91h7$['partner_id'], 'sdk_token': rozdq0y, 'content': dryoq }, 'success': function (r7zn$61) {
          console['log']('[SDK]查看文本是否有违规内容结果返回:'), ih5tws && ih5tws(-0xde8 + 0x1eee + -0x1106 == r7zn$61['data']['code'] ? -0x1b4f + -0x9f + 0x1bef * 0x1 : -0x2704 + -0xb29 + -0x322d * -0x1, r7zn$61['data']['msg']);
        } });
    }, 'checkMsgV2': function (rn0q6, _thc59s) {
      console['log']('[SDK]查看文本是否有违规内容');var n71rz$ = wx['getStorageSync']('plat_sdk_token');wx['request']({ 'url': fro0d + '/game/min/?ac=msgCheckV2', 'method': 'POST', 'dataType': 'json', 'header': { 'content-type': 'application/x-www-form-urlencoded' }, 'data': { 'game_pkg': fwi91h7$['game_pkg'], 'partner_id': fwi91h7$['partner_id'], 'sdk_token': n71rz$, 'content': rn0q6, 'scene': 0x1 }, 'success': function (s_t95cx) {
          console['log']('[SDK]查看文本是否有违规内容结果返回:'), _thc59s && _thc59s(-0x197 * -0x5 + 0xe72 + -0x1665 == s_t95cx['data']['code'] ? 0x7 * -0x493 + -0x1ec * -0x3 + 0x1a42 : 0x12f6 + -0x1979 * -0x1 + -0x2c6f, s_t95cx['data']['msg']);
        } });
    }, 'sendMessage': function (c_jkx48, k4_tx5c, qzr1n) {
      console['log']('[SDK]发送订阅消息');var hs95tw_ = wx['getStorageSync']('plat_sdk_token');wx['request']({ 'url': fro0d + '/game/min/?ac=sendMessage', 'method': 'POST', 'dataType': 'json', 'header': { 'content-type': 'application/x-www-form-urlencoded' }, 'data': { 'game_pkg': fwi91h7$['game_pkg'], 'partner_id': fwi91h7$['partner_id'], 'sdk_token': hs95tw_, 'template_id': c_jkx48, 'data': k4_tx5c }, 'success': function (a3mebp) {
          console['log']('[SDK]订阅消息发送成功'), qzr1n && qzr1n(0x8e * 0x44 + 0x1 * 0x16d7 + -0x3c8f == a3mebp['data']['code'] ? -0x301 * -0xa + 0xdd2 + -0x67 * 0x6d : 0xed6 * -0x1 + -0x8 * -0x14c + -0x1 * -0x476, a3mebp['data']['msg']);
        } });
    }, 'videoAdvert': function (hi$7wn1, swt9i7) {
      wx['request']({ 'url': fro0d + '/?method=user.gameConfig', 'method': 'POST', 'dataType': 'json', 'header': { 'content-type': 'application/x-www-form-urlencoded' }, 'data': { 'game_pkg': fwi91h7$['game_pkg'], 'partner_id': fwi91h7$['partner_id'] }, 'success': function (em3apub) {
          var zrqn60o = em3apub['data']['data']['weixin_advert_id'];let zoq0y = null;(zoq0y = wx['createRewardedVideoAd']({ 'adUnitId': zrqn60o }))['show']()['catch'](() => {
            zoq0y['load']()['then'](() => zoq0y['show']())['catch'](ea3b2p => {
              console['log']('激励视频\x20广告显示失败');
            });
          }), zoq0y['onError'](qr0dzoy => {
            console['log'](qr0dzoy);
          }), zoq0y['onClose'](s_xt5kc => {
            zoq0y && (zoq0y['offClose'](), s_xt5kc && s_xt5kc['isEnded'] || void (0x24f1 + -0x1 * 0xc28 + -0x18c9) === s_xt5kc ? console['log']('正常播放结束，需要下发奖励') : console['log']('播放退出，不下发奖励'));
          });
        } });
    }, 'getGameConfig': function (jpu43) {
      console['log']('[SDK]获取游戏配置'), wx['request']({ 'url': fro0d + '/?method=user.gameConfig', 'method': 'POST', 'dataType': 'json', 'header': { 'content-type': 'application/x-www-form-urlencoded' }, 'data': { 'game_pkg': fwi91h7$['game_pkg'], 'partner_id': fwi91h7$['partner_id'] }, 'success': function (eb2avlg) {
          var swi7h9 = eb2avlg['data']['data'];console['log']('[SDK]获取游戏配置成功'), console['log'](eb2avlg['data']);var _t5sh;_t5sh = { 'pay_switch': swi7h9['pay_switch'], 'game_ver': swi7h9['game_ver'] }, jpu43 && jpu43(_t5sh);
        } });
    } };
}function f_t5s9(e2amlb, x48c_jk, $6n0r1) {
  e2amlb in fumej83 && fumej83[e2amlb](x48c_jk, $6n0r1);
}const f$6zrn1 = {};window['cwan'] = f$6zrn1, f$6zrn1['init'] = function (p8m3jeu, drzo0qy) {
  f_t5s9('init', p8m3jeu, drzo0qy);
}, f$6zrn1['login'] = function (yqz0ord) {
  f_t5s9('login', '', yqz0ord);
}, f$6zrn1['pay'] = function (znr176, zr$n7) {
  f_t5s9('pay', znr176, zr$n7);
}, f$6zrn1['logCreateRole'] = function (cxt9s, n7wh$i, q0orn6z, lgb2, s_c5x9t) {
  f_t5s9('logCreateRole', { 'serverid': cxt9s, 'servername': n7wh$i, 'roleid': q0orn6z, 'rolename': lgb2, 'rolelevel': s_c5x9t });
}, f$6zrn1['logEnterGame'] = function (b32, oqrzd0y, lpmae2b, j_k5x4c, z01r6n) {
  f_t5s9('logEnterGame', { 'serverid': b32, 'servername': oqrzd0y, 'roleid': lpmae2b, 'rolename': j_k5x4c, 'rolelevel': z01r6n });
}, f$6zrn1['logRoleUpLevel'] = function (rdo0q6, e2mp3ab, $1w6ni, tk4x5_, pkj348u) {
  f_t5s9('logRoleUpLevel', { 'serverid': rdo0q6, 'servername': e2mp3ab, 'roleid': $1w6ni, 'rolename': tk4x5_, 'rolelevel': pkj348u });
}, f$6zrn1['downloadClient'] = function () {
  f_t5s9('downloadClient');
}, f$6zrn1['getConfig'] = function () {
  return { 'game_id': fwi91h7$['game_id'], 'game_pkg': fwi91h7$['game_pkg'], 'partner_id': fwi91h7$['partner_id'] };
}, f$6zrn1['getPublicData'] = function () {
  f_t5s9('getPublicData');
}, f$6zrn1['checkMsg'] = function (am3pue, t5hw_) {
  f_t5s9('checkMsg', am3pue, t5hw_);
}, f$6zrn1['checkMsgV2'] = function (eabu3mp, w71$n6i) {
  f_t5s9('checkMsgV2', eabu3mp, w71$n6i);
}, f$6zrn1['sendMessage'] = function (r6nqo0z, m32pbea, ku48p3j) {
  f_t5s9('sendMessage', r6nqo0z, m32pbea, ku48p3j);
}, f$6zrn1['videoAdvert'] = function (ma3b2, c_st59) {
  f_t5s9('videoAdvert', ma3b2, c_st59);
}, f$6zrn1['getGameConfig'] = function (pembu3a) {
  f_t5s9('getGameConfig', pembu3a);
};