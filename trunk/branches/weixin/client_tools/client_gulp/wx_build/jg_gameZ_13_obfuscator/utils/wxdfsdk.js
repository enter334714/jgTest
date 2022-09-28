var Z = wx.$L;
import _0x3a4c94 from './log';import _0x429722 from './sdkhttp';;(function () {
  'use strict';

  var _0x5d7380 = function () {
    this['create'] = function (_0x418dcb) {
      if (!this['sdk']) {
        this['sdk'] = new _0x20997c();this['sdk']['init'](_0x418dcb);
      }return this;
    };this['login'] = function (_0x43890b = null) {
      if (!this['checkInit']()) {
        return;
      }this['sdk']['login'](_0x43890b);
    };this['submitData'] = function (_0x479555, _0x516b29 = null) {
      if (!this['checkInit']()) {
        return;
      }this['sdk']['submitData'](_0x479555, _0x516b29);
    };this['pay'] = function (_0x1cee26, _0x2cc89b = null) {
      if (!this['checkInit']()) {
        return;
      }this['sdk']['pay'](_0x1cee26, _0x2cc89b);
    };this['messageCheck'] = function (_0x24fea4, _0x24a1d0 = null) {
      this['sdk']['msgSecCheck'](_0x24fea4, _0x24a1d0);
    };this['openCustomerService'] = function (_0x3803b5 = null, _0x1aa310 = null) {
      this['sdk']['openCustomerService'](_0x3803b5, _0x1aa310);
    };this['onShareAppMessage'] = function () {
      this['sdk']['onShareAppMessage']();
    };this['shareAppMessage'] = function (_0x1ac9d3 = null) {
      this['sdk']['shareAppMessage'](_0x1ac9d3);
    };this['onShareTimeline'] = function () {
      this['sdk']['onShareTimeline']();
    };this['gotoSpecificPage'] = function (_0x264221) {
      this['sdk']['gotoSpecificPage'](_0x264221);
    };this['requestSubscribe'] = function (_0x1aee98, _0x17542a = null) {
      this['sdk']['requestSubscribe'](_0x1aee98, _0x17542a);
    };this['getTransferInfo'] = function (_0x504a5c = null) {
      this['sdk']['getTransferInfo'](_0x504a5c);
    };this['showAd'] = function (_0x7cf5cd, _0x5e5e56 = null) {
      this['sdk']['showAd'](_0x7cf5cd, _0x5e5e56);
    };_0x5d7380['prototype']['checkInit'] = function () {
      if (!this['sdk']) {
        console['error']('请先使用create方法初始化');return ![];
      }return !![];
    };function _0x20997c() {
      this['prefix'] = 'df_wxgame_';this['log'] = new _0x3a4c94(0x1);
    }_0x20997c['prototype']['init'] = function (_0x399604) {
      var _0x582292 = { 'gameId': 0x0, 'release': !![] };this['opts'] = this['extend']({}, _0x582292, _0x399604);this['log']['info']('初始化完成，当前游戏为：' + this['opts']['gameId']);this['cache'] = {};var _0x56dcf4 = this;let _0x627dcf = wx['getLaunchOptionsSync']();if (_0x627dcf['query']) {
        _0x56dcf4['log']['info']('wx\x20getLaunchOptionsSync');console['log'](_0x627dcf['query']);_0x56dcf4['cache']['game_query'] = _0x627dcf['query'];
      }wx['onShow'](_0x526ec6 => {
        let _0x5abd88 = _0x526ec6['query'];_0x56dcf4['log']['info']('wx\x20onShow');console['log'](_0x5abd88);let _0x4434a9 = _0x5abd88['gdt_vid'];if (_0x4434a9) {
          _0x56dcf4['cache']['gdt_vid'] = _0x4434a9;
        }let _0xc05c67 = _0x5abd88['weixinadinfo'];if (_0xc05c67) {
          let _0x4ab035 = _0xc05c67['split']('.');let _0x24c6c1 = _0x4ab035[0x0];_0x56dcf4['cache']['gdt_aid'] = _0x24c6c1;
        }if (_0x5abd88) {
          _0x56dcf4['cache']['game_query'] = Object['assign']({}, _0x56dcf4['cache']['game_query'], _0x5abd88);
        }
      });wx['showShareMenu']();_0x429722['init']({ 'data': { 'game_id': _0x56dcf4['opts']['gameId'] } })['then'](_0x1dd584 => {
        if (_0x1dd584['code'] == 0x0) {
          if (_0x1dd584['data']['share_info']) {
            _0x56dcf4['cache']['share_info'] = _0x1dd584['data']['share_info'];
          }var _0x36840d = _0x1dd584['data']['template_ids'];if (_0x36840d && Object['keys'](_0x36840d)['length'] > 0x0) {
            var _0x3da0c8 = {};Object['keys'](_0x36840d)['forEach'](_0x20722b => {
              let _0x11b930 = _0x36840d[_0x20722b];if (_0x11b930 && _0x11b930['hasOwnProperty']('template_id')) {
                _0x3da0c8[_0x20722b] = _0x11b930['template_id'];
              }
            });_0x56dcf4['cache']['template_ids'] = _0x3da0c8;
          }
        }
      }, _0x4de600 => {
        _0x56dcf4['log']['error'](_0x4de600);
      });return this;
    };_0x20997c['prototype']['extend'] = function () {
      var _0x4c3b2a = arguments;var _0x25a02e = function (_0x14f3d4) {
        if (typeof _0x14f3d4 != 'object') return _0x14f3d4;if (_0x14f3d4 == null) return _0x14f3d4;var _0x1c53ec = new Object();for (var _0x1bce54 in _0x14f3d4) {
          _0x1c53ec[_0x1bce54] = _0x25a02e(_0x14f3d4[_0x1bce54]);
        }return _0x1c53ec;
      };if (_0x4c3b2a['length'] < 0x1) return;if (_0x4c3b2a['length'] < 0x2) return _0x4c3b2a[0x0];var _0x5eb148 = _0x25a02e(_0x4c3b2a[0x0]);for (var _0x4eb371 = 0x1; _0x4eb371 < _0x4c3b2a['length']; _0x4eb371++) {
        for (var _0x4db103 in _0x4c3b2a[_0x4eb371]) {
          _0x5eb148[_0x4db103] = _0x4c3b2a[_0x4eb371][_0x4db103];
        }
      }return _0x5eb148;
    };_0x20997c['prototype']['buildResult'] = function (_0x1dadfe, _0x5be0d0 = '', _0x1bc2e6 = null) {
      var _0x1d9937 = { 'status': _0x1dadfe, 'msg': _0x5be0d0 };if (_0x1bc2e6) {
        _0x1d9937['data'] = _0x1bc2e6;
      }return _0x1d9937;
    };_0x20997c['prototype']['onCallback'] = function (_0x3bac75, _0x35fb67 = 0x0, _0x58747a = '', _0x26a432 = null) {
      if (_0x3bac75 && typeof _0x3bac75 == 'function') {
        _0x3bac75(this['buildResult'](_0x35fb67, _0x58747a, _0x26a432));
      }
    };_0x20997c['prototype']['showMessage'] = function (_0x43f94d, _0x592e97 = 'none') {
      wx['showToast']({ 'title': _0x43f94d, 'icon': _0x592e97, 'duration': 0x7d0 });
    };_0x20997c['prototype']['showSuccess'] = function (_0x496015) {
      this['showMessage'](_0x496015, 'success');
    };_0x20997c['prototype']['showError'] = function (_0x46146d) {
      this['showMessage'](_0x46146d, 'error');
    };_0x20997c['prototype']['saveStorage'] = function (_0x1eb927, _0x7f125d) {
      try {
        wx['setStorageSync'](this['prefix'] + _0x1eb927 + this['opts']['gameId'], _0x7f125d);
      } catch (_0x38086f) {
        console['error']('save\x20' + _0x1eb927 + '\x20error');
      }
    };_0x20997c['prototype']['getStorage'] = function (_0x14f9c4, _0x3bf14f = '') {
      try {
        var _0x158e30 = wx['getStorageSync'](this['prefix'] + _0x14f9c4 + this['opts']['gameId']);return _0x158e30;
      } catch (_0x5afae2) {
        console['error']('get\x20' + _0x14f9c4 + '\x20error');
      }return _0x3bf14f;
    };_0x20997c['prototype']['showLoading'] = function (_0x368f14) {
      wx['showLoading']({ 'title': _0x368f14 });
    };_0x20997c['prototype']['hideLoading'] = function () {
      wx['hideLoading']();
    };_0x20997c['prototype']['getOS'] = function () {
      var _0x4b5d1e = 0x2;try {
        const _0x692b88 = wx['getSystemInfoSync']();var _0x5929a0 = _0x692b88['system'];if (_0x5929a0['toLowerCase']()['indexOf']('android') > -0x1) {
          _0x4b5d1e = 0x3;
        }
      } catch (_0x474ece) {}return _0x4b5d1e;
    };_0x20997c['prototype']['login'] = function (_0xfd6005 = null) {
      var _0x387c5d = this;_0x387c5d['log']['debug']('发起登录');wx['login']({ 'success'(_0x36ad22) {
          if (_0x36ad22['code']) {
            var _0x1ccfb5 = {};if (_0x387c5d['cache']['game_query']) {
              _0x1ccfb5 = _0x387c5d['cache']['game_query'];
            }if (_0x387c5d['cache']['gdt_vid']) {
              _0x1ccfb5['gdt_vid'] = _0x387c5d['cache']['gdt_vid'];
            }if (_0x387c5d['cache']['gdt_aid']) {
              _0x1ccfb5['gdt_aid'] = _0x387c5d['cache']['gdt_aid'];
            }_0x1ccfb5['js_code'] = _0x36ad22['code'];_0x1ccfb5['game_id'] = _0x387c5d['opts']['gameId'];_0x1ccfb5['os'] = _0x387c5d['getOS']();_0x429722['auth']({ 'data': _0x1ccfb5 })['then'](_0x45b117 => {
              if (_0x45b117['code'] == 0x0) {
                var _0x3a53b2 = _0x45b117['data'];_0x387c5d['userInfo'] = _0x3a53b2;var _0x559668 = _0x387c5d['cache']['template_ids'] ? Object['keys'](_0x387c5d['cache']['template_ids']) : [];if (_0x3a53b2['template_ids']) {
                  _0x559668 = _0x3a53b2['template_ids'];
                }_0x387c5d['onCallback'](_0xfd6005, 0x1, 'success', { 'user_id': _0x3a53b2['userID'], 'user_name': _0x3a53b2['username'], 'session_id': _0x3a53b2['token'], 'open_id': _0x3a53b2['openid'], 'sign': _0x3a53b2['sign'], 'support_subscribe': _0x559668 });
              } else {
                _0x387c5d['showError']('登录失败');_0x387c5d['onCallback'](_0xfd6005, 0x0, '(' + _0x45b117['code'] + ')' + _0x45b117['msg']);
              }
            }, _0xbc675e => {
              _0x387c5d['showError']('请求登录失败');_0x387c5d['onCallback'](_0xfd6005, 0x0, '请求登录失败！' + _0xbc675e);
            });
          } else {
            _0x387c5d['showError']('登录失败');_0x387c5d['onCallback'](_0xfd6005, 0x0, _0x36ad22['errMsg']);_0x387c5d['log']['info']('登录失败！' + _0x36ad22['errMsg']);
          }
        }, 'fail'(_0x5b6c99) {
          _0x387c5d['showError']('登录失败');_0x387c5d['onCallback'](_0xfd6005, 0x0, _0x5b6c99['errMsg']);_0x387c5d['log']['error'](_0x5b6c99['errMsg']);
        } });
    };_0x20997c['prototype']['submitData'] = function (_0x53a354, _0x564523 = null) {
      var _0x1685d6 = this;_0x53a354['game_id'] = this['opts']['gameId'];_0x53a354['uid'] = this['userInfo']['userID'];_0x53a354['server_id'] = !_0x53a354['server_id'] ? 0x1 : _0x53a354['server_id'];_0x53a354['type'] = _0x53a354['data_type'];_0x53a354['os'] = this['getOS']();_0x1685d6['saveStorage']('server_id', _0x53a354['server_id']);_0x1685d6['saveStorage']('role_id', _0x53a354['role_id']);_0x429722['report']({ 'data': _0x53a354 })['then'](_0x2450e3 => {
        _0x1685d6['onCallback'](_0x564523, 0x1, '数据上报成功');
      }, _0x28740d => {
        _0x1685d6['onCallback'](_0x564523, 0x0, '数据上报失败');
      });
    };_0x20997c['prototype']['pay'] = function (_0x3c5cce, _0x3b9331 = null) {
      var _0x335301 = this;if (!this['userInfo']) {
        console['error']('当前未登录，请登录后重新发起支付');return;
      }_0x335301['log']['debug']('发起支付');var _0x32b8f4 = this['getOS']();var _0x3dc1a0 = { 'game_id': _0x335301['opts']['gameId'], 'os': _0x32b8f4, 'openid': _0x335301['userInfo']['openid'], 'user_id': _0x335301['userInfo']['userID'], 'role_id': _0x335301['getStorage']('role_id'), 'server_id': _0x335301['getStorage']('server_id') };_0x429722['examineVerify']({ 'data': _0x3dc1a0 })['then'](_0x242701 => {
        if (_0x242701['code'] != 0x0) {
          _0x335301['onCallback'](_0x3b9331, 0x0, '下单失败请重试！' + _0x242701['msg']);return;
        }var _0xb0a82a = _0x242701['data']['verify'];var _0x25c2e4 = _0x242701['data']['release'];_0x335301['saveStorage']('offer_id', _0x242701['data']['offer_id']);if (!_0x25c2e4) {
          _0xb0a82a = 0x0;
        }_0x3c5cce['os'] = _0x32b8f4;_0x335301['createOrder'](_0xb0a82a, _0x3c5cce, _0x3b9331);
      }, _0x2ab406 => {
        _0x335301['onCallback'](_0x3b9331, 0x0, '发起支付失败！' + _0x2ab406);
      });
    };_0x20997c['prototype']['createOrder'] = function (_0x1fe856, _0x3a8a67, _0x2118da) {
      var _0x38cb03 = this;if (_0x1fe856 == 0x0 && _0x3a8a67['os'] == 0x2) {
        _0x38cb03['showMessage']('IOS暂不支持支付');_0x38cb03['onCallback'](_0x2118da, 0x64, 'IOS暂不支持支付功能');return;
      }_0x3a8a67['game_id'] = _0x38cb03['opts']['gameId'];_0x3a8a67['openid'] = _0x38cb03['userInfo']['openid'];_0x3a8a67['user_id'] = _0x38cb03['userInfo']['userID'];var _0x4a5795 = { 'game_id': _0x3a8a67['game_id'], 'userID': _0x3a8a67['user_id'], 'user_name': _0x38cb03['userInfo']['username'], 'openid': _0x3a8a67['openid'], 'server_id': !_0x3a8a67['server_id'] ? 0x1 : _0x3a8a67['server_id'], 'roleId': _0x3a8a67['role_id'], 'role_name': _0x3a8a67['role_name'], 'ext': _0x3a8a67['ext'], 'money': _0x3a8a67['money'], 'game_gold': !_0x3a8a67['game_gold'] ? _0x3a8a67['money'] * 0x64 : _0x3a8a67['game_gold'], 'os': _0x3a8a67['os'] };_0x429722['createOrder']({ 'data': _0x4a5795 })['then'](_0x3eaa93 => {
        if (_0x3eaa93['code'] != 0x0) {
          _0x38cb03['onCallback'](_0x2118da, 0x0, '创建订单失败！' + _0x3eaa93['msg']);return;
        }_0x3a8a67['orderid'] = _0x3eaa93['data']['orderID'];if (_0x3eaa93['data']['pay_url']) {
          _0x3a8a67['pay_url'] = _0x3eaa93['data']['pay_url'];
        }if (_0x1fe856 == 0x0) {
          _0x38cb03['payByMidas'](_0x3a8a67, _0x2118da);
        } else if (_0x1fe856 == 0x1) {
          if (_0x3eaa93['data']['icon_url']) {
            _0x3a8a67['icon_url'] = _0x3eaa93['data']['icon_url'];
          }_0x38cb03['payByCustomerService'](_0x3a8a67, _0x2118da);
        } else if (_0x1fe856 == 0x2) {
          _0x3a8a67['mp_appid'] = _0x3eaa93['data']['mp_appid'];if (_0x3eaa93['data']['app_path']) {
            _0x3a8a67['app_path'] = _0x3eaa93['data']['app_path'];
          }if (_0x3eaa93['data']['env_version']) {
            _0x3a8a67['env_version'] = _0x3eaa93['data']['env_version'];
          }_0x38cb03['payByMiniProgram'](_0x3a8a67, _0x2118da);
        } else {
          _0x38cb03['payByBrowser'](_0x3a8a67, _0x2118da);
        }
      }, _0x39d921 => {
        _0x38cb03['onCallback'](_0x2118da, 0x0, '创建订单失败！' + _0x39d921);
      });
    };_0x20997c['prototype']['payByMidas'] = function (_0x5cac81, _0x48c3f8 = null) {
      var _0x4087db = this;var _0x384b31 = 0x64;var _0x19b437 = function () {
        _0x429722['payMidas']({ 'data': _0x5cac81 })['then'](_0x2e275e => {
          if (_0x2e275e['errcode'] && _0x2e275e['errcode'] != 0x0) {
            _0x4087db['showMessage']('支付未完成');_0x4087db['onCallback'](_0x48c3f8, 0x0, '支付失败！' + _0x2e275e['errcode']);return;
          }_0x4087db['showMessage']('支付完成');_0x4087db['onCallback'](_0x48c3f8, 0x1, '支付完成', { 'order_id': _0x5cac81['orderid'] });
        }, _0x455cba => {
          _0x4087db['showMessage']('支付未完成');_0x4087db['onCallback'](_0x48c3f8, 0x0, '支付失败！' + _0x455cba);
        });
      };_0x429722['balance']({ 'data': { 'game_id': this['opts']['gameId'], 'openid': this['userInfo']['openid'] } })['then'](_0xc4730f => {
        if (_0xc4730f['errcode'] == 0x0) {
          _0x4087db['log']['debug'](_0xc4730f);if (_0xc4730f['balance'] >= _0x5cac81['money'] * _0x384b31) {
            _0x19b437();
          } else {
            _0x4087db['log']['debug'](_0x5cac81);wx['requestMidasPayment']({ 'mode': 'game', 'env': _0xc4730f['env'], 'offerId': _0x4087db['getStorage']('offer_id'), 'currencyType': 'CNY', 'buyQuantity': _0x5cac81['money'] * _0x384b31, 'platform': 'android', 'zoneId': 0x1, 'success'(_0x37fbdd) {
                _0x19b437();
              }, 'fail'(_0x3c0578) {
                _0x4087db['onCallback'](_0x48c3f8, 0x0, '(' + _0x3c0578['errCode'] + ')' + _0x3c0578['errMsg']);
              } });
          }
        } else {
          _0x4087db['onCallback'](_0x48c3f8, 0x0, '(' + _0xc4730f['errcode'] + ')' + _0xc4730f['errmsg']);
        }
      }, _0x5dd77e => {
        _0x4087db['showError']('支付失败请重试');_0x4087db['onCallback'](_0x48c3f8, 0x0, '支付失败请重试！' + _0x5dd77e);
      });
    };_0x20997c['prototype']['payByCustomerService'] = function (_0x18a0d9, _0x24d6d8 = null) {
      var _0x42ac62 = this;if (!_0x18a0d9['pay_url']) {
        _0x42ac62['showMessage']('获取支付链接有误');_0x42ac62['onCallback'](_0x24d6d8, 0x0, '支付链接有误');return;
      }var _0x577acc = _0x18a0d9['pay_url'];wx['setClipboardData']({ 'data': '订单号:\x20' + _0x18a0d9['orderid'] + '\x0a充值链接:\x20' + _0x577acc + '\x0a\x0a点击以上链接即可充值，若遇到充值问题，请及时联系客服。', 'success'(_0x7443c0) {
          wx['showModal']({ 'title': '充值教程', 'content': '充值链接已经复制，请点击确定前往客服中心，如果没有自动收到订单入口，请粘贴并发送内容获取支付链接入口', 'showCancel': ![], 'success'(_0xd943e7) {
              if (_0xd943e7['confirm']) {
                wx['openCustomerServiceConversation']({ 'sessionFrom': '', 'showMessageCard': !![], 'sendMessageTitle': '获取充值地址', 'sendMessagePath': 'wxgamepay/orderid/' + _0x18a0d9['orderid'], 'sendMessageImg': _0x18a0d9['icon_url'] ? _0x18a0d9['icon_url'] : 'https://image.dfkj8.com/pic/concect_kf.png', 'success'(_0x5004f4) {}, 'fail'(_0x3c1496) {
                    _0x42ac62['log']['debug'](_0x3c1496['errMsg']);_0x42ac62['onCallback'](_0x24d6d8, 0x0, _0x3c1496['errMsg']);
                  } });
              }
            } });
        } });
    };_0x20997c['prototype']['payByMiniProgram'] = function (_0x5827e4, _0x4c3a7f = null) {
      var _0xe975b4 = this;if (!_0x5827e4['mp_appid']) {
        _0xe975b4['showMessage']('支付跳转失败');_0xe975b4['onCallback'](_0x4c3a7f, 0x0, '支付跳转失败');return;
      }wx['navigateToMiniProgram']({ 'appId': _0x5827e4['mp_appid'], 'path': _0x5827e4['app_path'] ? _0x5827e4['app_path'] : 'pages/pay/index', 'envVersion': _0x5827e4['env_version'] ? _0x5827e4['env_version'] : 'release', 'extraData': _0x5827e4, 'success'(_0x423554) {
          _0xe975b4['log']['debug']('跳转小程序成功:' + _0x423554);
        }, 'fail'(_0x5ccb8d) {
          _0xe975b4['log']['debug']('跳转小程序失败:' + _0x5ccb8d);_0xe975b4['onCallback'](_0x4c3a7f, 0x0, _0x5ccb8d['errMsg']);
        } });
    };_0x20997c['prototype']['payByBrowser'] = function (_0x547791, _0x4e4313) {
      var _0x549091 = this;if (!_0x547791['pay_url']) {
        _0x549091['showMessage']('获取支付链接有误');_0x549091['onCallback'](_0x4e4313, 0x0, '支付链接有误');return;
      }wx['setClipboardData']({ 'data': _0x547791['pay_url'], 'success'(_0x4bc27f) {
          wx['showModal']({ 'title': '充值链接已复制', 'content': '请在外部浏览器粘贴充值链接后支付', 'showCancel': ![], 'success'(_0x4e4d77) {} });
        } });
    };_0x20997c['prototype']['msgSecCheck'] = function (_0x997115, _0x2d01ac) {
      var _0x50235f = this;var _0x505538 = { 'game_id': _0x50235f['opts']['gameId'], 'content': _0x997115['content'], 'openid': _0x50235f['userInfo'] && _0x50235f['userInfo']['openid'] ? _0x50235f['userInfo']['openid'] : '' };_0x429722['msgSecCheck']({ 'data': _0x505538 })['then'](_0x2d57e0 => {
        var _0x23fa73 = _0x2d57e0['errcode'] == 0x0 ? !![] : ![];_0x50235f['onCallback'](_0x2d01ac, 0x1, _0x2d57e0['errmsg'], { 'passed': _0x23fa73 });
      }, _0x2951a5 => {
        _0x50235f['onCallback'](_0x2d01ac, 0x0, '请求失败请重试！' + _0x2951a5);
      });
    };_0x20997c['prototype']['openCustomerService'] = function (_0x1a4819 = null, _0x403f13 = null) {
      var _0x56cc6e = this;wx['openCustomerServiceConversation']({ 'sessionFrom': '', 'showMessageCard': ![], 'sendMessageTitle': '', 'sendMessagePath': '', 'sendMessageImg': '', 'success'(_0xd5c248) {
          _0x56cc6e['log']['debug'](_0xd5c248);
        }, 'fail'(_0x59336a) {
          _0x56cc6e['log']['debug'](_0x59336a['errMsg']);_0x56cc6e['onCallback'](_0x403f13, 0x0, _0x59336a['errMsg']);
        } });
    };_0x20997c['prototype']['getDefaultShareInfo'] = function () {
      var _0x26e31d = this;var _0x5209ac = { 'share_title': '', 'share_img_url': '', 'share_img_id': '', 'share_query': '', 'share_img_preview_url': '', 'share_img_preview_id': '' };var _0x346d85 = this['extend']({}, _0x5209ac, this['cache']['share_info'] ? this['cache']['share_info'] : {});return _0x346d85;
    };_0x20997c['prototype']['onShareAppMessage'] = function () {
      var _0x19ca94 = this;var _0x149ad6 = this['getDefaultShareInfo']();wx['onShareAppMessage'](function () {
        _0x19ca94['log']['debug']('onShareAppMessage');return { 'title': _0x149ad6['share_title'] ? _0x149ad6['share_title'] : '', 'imageUrl': _0x149ad6['share_img_url'] ? _0x149ad6['share_img_url'] : '', 'query': _0x149ad6['share_query'] ? _0x149ad6['share_query'] : '', 'imageUrlId': _0x149ad6['share_img_id'] ? _0x149ad6['share_img_id'] : '' };
      });
    };_0x20997c['prototype']['shareAppMessage'] = function (_0x352405 = null) {
      var _0x7af997 = this;var _0x2621c4 = this['getDefaultShareInfo']();_0x2621c4 = this['extend']({}, _0x2621c4, _0x352405 ? _0x352405 : {});wx['shareAppMessage'](function () {
        _0x7af997['log']['debug']('shareAppMessage');return { 'title': _0x2621c4['share_title'] ? _0x2621c4['share_title'] : '', 'imageUrl': _0x2621c4['share_img_url'] ? _0x2621c4['share_img_url'] : '', 'query': _0x2621c4['share_query'] ? _0x2621c4['share_query'] : '', 'imageUrlId': _0x2621c4['share_img_id'] ? _0x2621c4['share_img_id'] : '' };
      });
    };_0x20997c['prototype']['onShareTimeline'] = function () {
      var _0x52235e = this;var _0x2d28c6 = this['getDefaultShareInfo']();wx['onShareTimeline'](function () {
        _0x52235e['log']['debug']('onShareTimeline');return { 'title': _0x2d28c6['share_title'] ? _0x2d28c6['share_title'] : '', 'imageUrl': _0x2d28c6['share_img_url'] ? _0x2d28c6['share_img_url'] : '', 'query': _0x2d28c6['share_query'] ? _0x2d28c6['share_query'] : '', 'imageUrlId': _0x2d28c6['share_img_id'] ? _0x2d28c6['share_img_id'] : '', 'imagePreviewUrl': _0x2d28c6['share_img_preview_url'] ? _0x2d28c6['share_img_preview_url'] : '', 'imagePreviewUrlId': _0x2d28c6['share_img_preview_id'] ? _0x2d28c6['share_img_preview_id'] : '' };
      });
    };_0x20997c['prototype']['gotoSpecificPage'] = function (_0x3b8b0) {
      var _0x1373a6 = this;if (!_0x3b8b0) {
        _0x1373a6['log']['error']('请传入action');return;
      }var _0x147f2b = { 'game_id': _0x1373a6['opts']['gameId'], 'user_id': _0x1373a6['userInfo'] && _0x1373a6['userInfo']['userID'] ? _0x1373a6['userInfo']['userID'] : '', 'user_name': _0x1373a6['userInfo'] && _0x1373a6['userInfo']['username'] ? _0x1373a6['userInfo']['username'] : '', 'openid': _0x1373a6['userInfo'] && _0x1373a6['userInfo']['openid'] ? _0x1373a6['userInfo']['openid'] : '', 'os': _0x1373a6['getOS'](), 'action': _0x3b8b0 };_0x429722['specificPage']({ 'data': _0x147f2b })['then'](_0x19e46f => {
        if (_0x19e46f['code'] == 0x0) {
          if (_0x19e46f['data']) {
            if (_0x19e46f['data']['copyData']) {
              wx['setClipboardData']({ 'data': _0x19e46f['data']['copyData'], 'success'(_0x1c2221) {} });
            }wx['openCustomerServiceConversation']({ 'sessionFrom': _0x19e46f['data']['sessionFrom'], 'showMessageCard': _0x19e46f['data']['showMessageCard'], 'sendMessageTitle': _0x19e46f['data']['sendMessageTitle'], 'sendMessagePath': _0x19e46f['data']['sendMessagePath'], 'sendMessageImg': _0x19e46f['data']['sendMessageImg'], 'success'(_0x23cad7) {}, 'fail'(_0x2e94eb) {
                _0x1373a6['showMessage']('跳转失败');_0x1373a6['log']['error'](_0x2e94eb['errMsg']);
              } });
          }
        } else {
          _0x1373a6['showMessage'](_0x19e46f['msg'] ? _0x19e46f['msg'] : '不支持的方式');
        }
      }, _0x2321e7 => {
        _0x1373a6['showMessage']('跳转失败');_0x1373a6['log']['error'](_0x2321e7);
      });
    };_0x20997c['prototype']['requestSubscribe'] = function (_0x28d6db, _0xce5ff7 = null) {
      var _0xf84294 = this;var _0x399ad1 = {};if (_0x28d6db && _0x28d6db['length'] > 0x0 && _0xf84294['cache']['template_ids'] && Object['keys'](_0xf84294['cache']['template_ids'])['length'] > 0x0) {
        _0x28d6db['forEach'](_0x205a96 => {
          if (_0xf84294['cache']['template_ids']['hasOwnProperty'](_0x205a96)) {
            _0x399ad1[_0xf84294['cache']['template_ids'][_0x205a96]] = _0x205a96;
          }
        });
      }if (!_0x399ad1 || Object['keys'](_0x399ad1)['length'] == 0x0) {
        _0xf84294['onCallback'](_0xce5ff7, 0x0, '订阅模板为空');return;
      }wx['onTouchEnd'](function (_0x5d118d, _0x1cd3ea, _0x38ae94) {
        wx['requestSubscribeMessage']({ 'tmplIds': Object['keys'](_0x399ad1), 'success'(_0x214f20) {
            var _0x22ca86 = [];Object['keys'](_0x214f20)['forEach'](_0x41a737 => {
              if (_0x399ad1['hasOwnProperty'](_0x41a737) && _0x214f20[_0x41a737] == 'accept') {
                _0x22ca86['push'](_0x399ad1[_0x41a737]);
              }
            });_0xf84294['onCallback'](_0xce5ff7, 0x1, 'success', _0x22ca86);
          }, 'fail'(_0x3b2cbd) {
            _0xf84294['onCallback'](_0xce5ff7, 0x0, '订阅失败(' + _0x3b2cbd['errCode'] + ')' + _0x3b2cbd['errMsg']);
          } });
      });
    };_0x20997c['prototype']['showAd'] = function (_0x13d1a4, _0x3fc49b = null) {
      var _0x58a454 = this;let _0x4f1f6d = function (_0xfef5e1, _0x3d97c2 = '广告加载失败') {
        _0x3fc49b['callback'] && _0x3fc49b['callback']['onError'] && _0x3fc49b['callback']['onError'](_0xfef5e1, _0x3d97c2);
      };if (!_0x3fc49b || !_0x3fc49b['adUnitId']) {
        _0x58a454['log']['error']('广告参数有误，请检查您的广告位id');_0x4f1f6d(-0x1);return;
      }var _0xf9b496 = null;switch (_0x13d1a4) {case 0x65:
          if (wx['createRewardedVideoAd']) {
            _0xf9b496 = wx['createRewardedVideoAd']({ 'adUnitId': _0x3fc49b['adUnitId'] });
          }break;default:
          _0x58a454['log']['error']('暂不支持的广告类型');_0x4f1f6d(-0x2, '暂不支持的广告类型');break;};if (_0xf9b496) {
        _0xf9b496['onLoad'](() => {
          _0x3fc49b['callback'] && _0x3fc49b['callback']['onLoad'] && _0x3fc49b['callback']['onLoad']();_0xf9b496['show']()['catch'](() => {
            _0xf9b496['load']()['then'](() => _0xf9b496['show']())['catch'](_0x2c298e => {
              _0x4f1f6d(_0x2c298e ? _0x2c298e['errCode'] : -0x64, _0x2c298e ? _0x2c298e['errMsg'] : '广告显示失败');
            });
          });
        });_0xf9b496['onError'](_0x3378f5 => {
          _0x4f1f6d(_0x3378f5 ? _0x3378f5['errCode'] : -0x64, _0x3378f5 ? _0x3378f5['errMsg'] : '广告加载失败');
        });_0xf9b496['onClose'](_0x557b9c => {
          if (_0x13d1a4 == 0x64) {
            if (_0x557b9c && _0x557b9c['isEnded']) {
              _0x3fc49b['callback'] && _0x3fc49b['callback']['onReward'] && _0x3fc49b['callback']['onReward']();
            }
          }_0x3fc49b['callback'] && _0x3fc49b['callback']['onClose'] && _0x3fc49b['callback']['onClose']();
        });
      } else {
        _0x4f1f6d(-0x3);
      }
    };_0x20997c['prototype']['getTransferInfo'] = function (_0x5021a4 = null) {
      var _0x16c979 = this;var _0x32d108 = {};_0x32d108['game_id'] = this['opts']['gameId'];_0x32d108['os'] = this['getOS']();_0x32d108['token'] = this['userInfo']['token'];_0x32d108['username'] = this['userInfo']['username'];_0x429722['getTransferInfo']({ 'data': _0x32d108 })['then'](_0x4f42ac => {
        if (_0x4f42ac['code'] == 0x0) {
          wx['setClipboardData']({ 'data': '账号:\x20' + _0x4f42ac['data']['userinfo']['username'] + '\x0a密码:\x20' + _0x4f42ac['data']['userinfo']['password'] + '\x0a下载链接:\x20' + _0x4f42ac['data']['download_url'] + '\x0a\x0a点击以上链接即可下载，若遇到账号问题，请及时联系客服。', 'success'(_0x540c05) {
              wx['showModal']({ 'title': '微端下载链接', 'content': '下载链接已复制，请点击【确定】前往客服会话，点击右下方【下载链接】获取账号信息；如果没有显示下载链接，请手动粘贴并发送内容获取账号信息', 'showCancel': ![], 'success'(_0x3ead94) {
                  if (_0x3ead94['confirm']) {
                    wx['openCustomerServiceConversation']({ 'sessionFrom': '', 'showMessageCard': !![], 'sendMessageTitle': '微端下载链接', 'sendMessagePath': 'wxgame/download?game_id=' + _0x16c979['opts']['gameId'] + '&user_id=' + _0x16c979['userInfo']['userID'] + '&user_name=' + _0x16c979['userInfo']['username'] + '&token=' + _0x16c979['userInfo']['token'], 'sendMessageImg': _0x4f42ac['data']['icon_url'] ? _0x4f42ac['data']['icon_url'] : 'https://landing.dfkj8.com/game/red_pocket.png', 'success'(_0x3bbe10) {}, 'fail'(_0x4a3df8) {
                        _0x16c979['log']['debug'](_0x4a3df8['errMsg']);_0x16c979['onCallback'](_0x5021a4, 0x0, _0x4a3df8['errMsg']);
                      } });
                  }
                } });
            } });_0x16c979['onCallback'](_0x5021a4, 0x1, '数据获取成功', _0x4f42ac);
        } else {
          _0x16c979['onCallback'](_0x5021a4, 0x0, _0x4f42ac['msg'] || '数据获取失败');
        }
      }, _0x5a7b13 => {
        _0x16c979['onCallback'](_0x5021a4, 0x0, '数据获取失败');
      });
    };
  };var _0x548b71 = new _0x5d7380();module['exports']['dfSDK'] = _0x548b71;
})();