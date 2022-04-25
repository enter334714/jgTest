var Z = wx.$L;
import _0x50f672 from './log';import _0x252543 from './sdkhttp';;(function () {
  'use strict';

  var _0x2811a6 = function () {
    this['create'] = function (_0x3e86f3) {
      if (!this['sdk']) {
        this['sdk'] = new _0x339023();this['sdk']['init'](_0x3e86f3);
      }return this;
    };this['login'] = function (_0x27bb42 = null) {
      if (!this['checkInit']()) {
        return;
      }this['sdk']['login'](_0x27bb42);
    };this['submitData'] = function (_0x4a3781, _0x4a3205 = null) {
      if (!this['checkInit']()) {
        return;
      }this['sdk']['submitData'](_0x4a3781, _0x4a3205);
    };this['pay'] = function (_0x3004be, _0x1254e3 = null) {
      if (!this['checkInit']()) {
        return;
      }this['sdk']['pay'](_0x3004be, _0x1254e3);
    };this['messageCheck'] = function (_0x303a63, _0x41d0bd = null) {
      this['sdk']['msgSecCheck'](_0x303a63, _0x41d0bd);
    };this['openCustomerService'] = function (_0x1c2ac7 = null, _0x27f9e4 = null) {
      this['sdk']['openCustomerService'](_0x1c2ac7, _0x27f9e4);
    };this['onShareAppMessage'] = function () {
      this['sdk']['onShareAppMessage']();
    };this['shareAppMessage'] = function (_0x336d7a = null) {
      this['sdk']['shareAppMessage'](_0x336d7a);
    };this['onShareTimeline'] = function () {
      this['sdk']['onShareTimeline']();
    };this['gotoSpecificPage'] = function (_0xcd551e) {
      this['sdk']['gotoSpecificPage'](_0xcd551e);
    };this['requestSubscribe'] = function (_0x1a25f5, _0xcc9ba4 = null) {
      this['sdk']['requestSubscribe'](_0x1a25f5, _0xcc9ba4);
    };_0x2811a6['prototype']['checkInit'] = function () {
      if (!this['sdk']) {
        console['error']('请先使用create方法初始化');return ![];
      }return !![];
    };function _0x339023() {
      this['prefix'] = 'df_wxgame_';this['log'] = new _0x50f672(0x1);
    }_0x339023['prototype']['init'] = function (_0x33ea1a) {
      var _0x3dfad0 = { 'gameId': 0x0, 'release': !![] };this['opts'] = this['extend']({}, _0x3dfad0, _0x33ea1a);this['log']['info']('初始化完成，当前游戏为：' + this['opts']['gameId']);this['cache'] = {};var _0x4eead8 = this;wx['onShow'](_0x809f21 => {
        let _0x52c31d = _0x809f21['query'];let _0x597863 = _0x52c31d['gdt_vid'];if (_0x597863) {
          _0x4eead8['cache']['gdt_vid'] = _0x597863;
        }let _0x275eaa = _0x52c31d['weixinadinfo'];if (_0x275eaa) {
          let _0x589909 = _0x275eaa['split']('.');let _0x47e9e7 = _0x589909[0x0];_0x4eead8['cache']['gdt_aid'] = _0x47e9e7;
        }if (_0x52c31d) {
          _0x4eead8['cache']['game_query'] = _0x52c31d;
        }
      });wx['showShareMenu']();_0x252543['init']({ 'data': { 'game_id': _0x4eead8['opts']['gameId'] } })['then'](_0x7feb64 => {
        if (_0x7feb64['code'] == 0x0) {
          if (_0x7feb64['data']['share_info']) {
            _0x4eead8['cache']['share_info'] = _0x7feb64['data']['share_info'];
          }var _0x13369b = _0x7feb64['data']['template_ids'];if (_0x13369b && Object['keys'](_0x13369b)['length'] > 0x0) {
            var _0x14289f = {};Object['keys'](_0x13369b)['forEach'](_0x221c4d => {
              let _0x35fb38 = _0x13369b[_0x221c4d];if (_0x35fb38 && _0x35fb38['hasOwnProperty']('template_id')) {
                _0x14289f[_0x221c4d] = _0x35fb38['template_id'];
              }
            });_0x4eead8['cache']['template_ids'] = _0x14289f;
          }
        }
      }, _0x145722 => {
        _0x4eead8['log']['error'](_0x145722);
      });return this;
    };_0x339023['prototype']['extend'] = function () {
      var _0x1ac160 = arguments;var _0x2a04ca = function (_0x2a05c5) {
        if (typeof _0x2a05c5 != 'object') return _0x2a05c5;if (_0x2a05c5 == null) return _0x2a05c5;var _0x20907e = new Object();for (var _0x27e500 in _0x2a05c5) {
          _0x20907e[_0x27e500] = _0x2a04ca(_0x2a05c5[_0x27e500]);
        }return _0x20907e;
      };if (_0x1ac160['length'] < 0x1) return;if (_0x1ac160['length'] < 0x2) return _0x1ac160[0x0];var _0x592d37 = _0x2a04ca(_0x1ac160[0x0]);for (var _0x57137f = 0x1; _0x57137f < _0x1ac160['length']; _0x57137f++) {
        for (var _0x87d680 in _0x1ac160[_0x57137f]) {
          _0x592d37[_0x87d680] = _0x1ac160[_0x57137f][_0x87d680];
        }
      }return _0x592d37;
    };_0x339023['prototype']['buildResult'] = function (_0x245b5a, _0x23afe8 = '', _0x1f90ba = null) {
      var _0x2046d3 = { 'status': _0x245b5a, 'msg': _0x23afe8 };if (_0x1f90ba) {
        _0x2046d3['data'] = _0x1f90ba;
      }return _0x2046d3;
    };_0x339023['prototype']['onCallback'] = function (_0x18f15d, _0x20faea = 0x0, _0x5ab5c3 = '', _0x3a6cbe = null) {
      if (_0x18f15d && typeof _0x18f15d == 'function') {
        _0x18f15d(this['buildResult'](_0x20faea, _0x5ab5c3, _0x3a6cbe));
      }
    };_0x339023['prototype']['showMessage'] = function (_0x4414be, _0x4dfee8 = 'none') {
      wx['showToast']({ 'title': _0x4414be, 'icon': _0x4dfee8, 'duration': 0x7d0 });
    };_0x339023['prototype']['showSuccess'] = function (_0x172f47) {
      this['showMessage'](_0x172f47, 'success');
    };_0x339023['prototype']['showError'] = function (_0x2c5845) {
      this['showMessage'](_0x2c5845, 'error');
    };_0x339023['prototype']['saveStorage'] = function (_0x48b17f, _0x266637) {
      try {
        wx['setStorageSync'](this['prefix'] + _0x48b17f + this['opts']['gameId'], _0x266637);
      } catch (_0x72ce6e) {
        console['error']('save\x20' + _0x48b17f + '\x20error');
      }
    };_0x339023['prototype']['getStorage'] = function (_0x4fa157, _0x19f5c5 = '') {
      try {
        var _0xd9307f = wx['getStorageSync'](this['prefix'] + _0x4fa157 + this['opts']['gameId']);return _0xd9307f;
      } catch (_0x53239b) {
        console['error']('get\x20' + _0x4fa157 + '\x20error');
      }return _0x19f5c5;
    };_0x339023['prototype']['showLoading'] = function (_0x8acdac) {
      wx['showLoading']({ 'title': _0x8acdac });
    };_0x339023['prototype']['hideLoading'] = function () {
      wx['hideLoading']();
    };_0x339023['prototype']['getOS'] = function () {
      var _0x112ddd = 0x2;try {
        const _0x5e6361 = wx['getSystemInfoSync']();var _0x4dd773 = _0x5e6361['system'];if (_0x4dd773['toLowerCase']()['indexOf']('android') > -0x1) {
          _0x112ddd = 0x3;
        }
      } catch (_0x3b9d04) {}return _0x112ddd;
    };_0x339023['prototype']['login'] = function (_0x68f213 = null) {
      var _0x102578 = this;_0x102578['log']['debug']('发起登录');wx['login']({ 'success'(_0x546ab5) {
          if (_0x546ab5['code']) {
            var _0x58b762 = {};if (_0x102578['cache']['game_query']) {
              _0x58b762 = _0x102578['cache']['game_query'];
            }if (_0x102578['cache']['gdt_vid']) {
              _0x58b762['gdt_vid'] = _0x102578['cache']['gdt_vid'];
            }if (_0x102578['cache']['gdt_aid']) {
              _0x58b762['gdt_aid'] = _0x102578['cache']['gdt_aid'];
            }_0x58b762['js_code'] = _0x546ab5['code'];_0x58b762['game_id'] = _0x102578['opts']['gameId'];_0x58b762['os'] = _0x102578['getOS']();_0x252543['auth']({ 'data': _0x58b762 })['then'](_0x40f194 => {
              if (_0x40f194['code'] == 0x0) {
                var _0x53abed = _0x40f194['data'];_0x102578['userInfo'] = _0x53abed;var _0x34cf97 = _0x102578['cache']['template_ids'] ? Object['keys'](_0x102578['cache']['template_ids']) : [];if (_0x53abed['template_ids']) {
                  _0x34cf97 = _0x53abed['template_ids'];
                }_0x102578['onCallback'](_0x68f213, 0x1, 'success', { 'user_id': _0x53abed['userID'], 'user_name': _0x53abed['username'], 'session_id': _0x53abed['token'], 'open_id': _0x53abed['openid'], 'sign': _0x53abed['sign'], 'support_subscribe': _0x34cf97 });
              } else {
                _0x102578['showError']('登录失败');_0x102578['onCallback'](_0x68f213, 0x0, '(' + _0x40f194['code'] + ')' + _0x40f194['msg']);
              }
            }, _0x51a7c6 => {
              _0x102578['showError']('请求登录失败');_0x102578['onCallback'](_0x68f213, 0x0, '请求登录失败！' + _0x51a7c6);
            });
          } else {
            _0x102578['showError']('登录失败');_0x102578['onCallback'](_0x68f213, 0x0, _0x546ab5['errMsg']);_0x102578['log']['info']('登录失败！' + _0x546ab5['errMsg']);
          }
        }, 'fail'(_0xabe8fe) {
          _0x102578['showError']('登录失败');_0x102578['onCallback'](_0x68f213, 0x0, _0xabe8fe['errMsg']);_0x102578['log']['error'](_0xabe8fe['errMsg']);
        } });
    };_0x339023['prototype']['submitData'] = function (_0x31dafe, _0x46dab2 = null) {
      var _0x3e9035 = this;_0x31dafe['game_id'] = this['opts']['gameId'];_0x31dafe['uid'] = this['userInfo']['userID'];_0x31dafe['server_id'] = !_0x31dafe['server_id'] ? 0x1 : _0x31dafe['server_id'];_0x31dafe['type'] = _0x31dafe['data_type'];_0x31dafe['os'] = this['getOS']();_0x3e9035['saveStorage']('server_id', _0x31dafe['server_id']);_0x3e9035['saveStorage']('role_id', _0x31dafe['role_id']);_0x252543['report']({ 'data': _0x31dafe })['then'](_0x681acb => {
        _0x3e9035['onCallback'](_0x46dab2, 0x1, '数据上报成功');
      }, _0x104058 => {
        _0x3e9035['onCallback'](_0x46dab2, 0x0, '数据上报失败');
      });
    };_0x339023['prototype']['pay'] = function (_0x3f9f69, _0x82803d = null) {
      var _0x3bdeb4 = this;if (!this['userInfo']) {
        console['error']('当前未登录，请登录后重新发起支付');return;
      }_0x3bdeb4['log']['debug']('发起支付');var _0x1ab0cd = this['getOS']();var _0x51f3d5 = { 'game_id': _0x3bdeb4['opts']['gameId'], 'os': _0x1ab0cd, 'openid': _0x3bdeb4['userInfo']['openid'], 'user_id': _0x3bdeb4['userInfo']['userID'], 'role_id': _0x3bdeb4['getStorage']('role_id'), 'server_id': _0x3bdeb4['getStorage']('server_id') };_0x252543['examineVerify']({ 'data': _0x51f3d5 })['then'](_0x580ec4 => {
        if (_0x580ec4['code'] != 0x0) {
          _0x3bdeb4['onCallback'](_0x82803d, 0x0, '下单失败请重试！' + _0x580ec4['msg']);return;
        }var _0x392483 = _0x580ec4['data']['verify'];var _0x44c09c = _0x580ec4['data']['release'];_0x3bdeb4['saveStorage']('offer_id', _0x580ec4['data']['offer_id']);if (!_0x44c09c) {
          _0x392483 = 0x0;
        }_0x3f9f69['os'] = _0x1ab0cd;_0x3bdeb4['createOrder'](_0x392483, _0x3f9f69, _0x82803d);
      }, _0x5c3379 => {
        _0x3bdeb4['onCallback'](_0x82803d, 0x0, '发起支付失败！' + _0x5c3379);
      });
    };_0x339023['prototype']['createOrder'] = function (_0x17f10e, _0x5c9009, _0x4cbc95) {
      var _0x3c70dc = this;if (_0x17f10e == 0x0 && _0x5c9009['os'] == 0x2) {
        _0x3c70dc['showMessage']('IOS暂不支持支付');_0x3c70dc['onCallback'](_0x4cbc95, 0x64, 'IOS暂不支持支付功能');return;
      }_0x5c9009['game_id'] = _0x3c70dc['opts']['gameId'];_0x5c9009['openid'] = _0x3c70dc['userInfo']['openid'];_0x5c9009['user_id'] = _0x3c70dc['userInfo']['userID'];var _0x14599a = { 'game_id': _0x5c9009['game_id'], 'userID': _0x5c9009['user_id'], 'user_name': _0x3c70dc['userInfo']['username'], 'openid': _0x5c9009['openid'], 'server_id': !_0x5c9009['server_id'] ? 0x1 : _0x5c9009['server_id'], 'roleId': _0x5c9009['role_id'], 'role_name': _0x5c9009['role_name'], 'ext': _0x5c9009['ext'], 'money': _0x5c9009['money'], 'game_gold': !_0x5c9009['game_gold'] ? _0x5c9009['money'] * 0x64 : _0x5c9009['game_gold'], 'os': _0x5c9009['os'] };_0x252543['createOrder']({ 'data': _0x14599a })['then'](_0x3908ce => {
        if (_0x3908ce['code'] != 0x0) {
          _0x3c70dc['onCallback'](_0x4cbc95, 0x0, '创建订单失败！' + _0x3908ce['msg']);return;
        }_0x5c9009['orderid'] = _0x3908ce['data']['orderID'];if (_0x3908ce['data']['pay_url']) {
          _0x5c9009['pay_url'] = _0x3908ce['data']['pay_url'];
        }if (_0x17f10e == 0x0) {
          _0x3c70dc['payByMidas'](_0x5c9009, _0x4cbc95);
        } else if (_0x17f10e == 0x1) {
          if (_0x3908ce['data']['icon_url']) {
            _0x5c9009['icon_url'] = _0x3908ce['data']['icon_url'];
          }_0x3c70dc['payByCustomerService'](_0x5c9009, _0x4cbc95);
        } else if (_0x17f10e == 0x2) {
          _0x5c9009['mp_appid'] = _0x3908ce['data']['mp_appid'];if (_0x3908ce['data']['app_path']) {
            _0x5c9009['app_path'] = _0x3908ce['data']['app_path'];
          }if (_0x3908ce['data']['env_version']) {
            _0x5c9009['env_version'] = _0x3908ce['data']['env_version'];
          }_0x3c70dc['payByMiniProgram'](_0x5c9009, _0x4cbc95);
        } else {
          _0x3c70dc['payByBrowser'](_0x5c9009, _0x4cbc95);
        }
      }, _0x55510a => {
        _0x3c70dc['onCallback'](_0x4cbc95, 0x0, '创建订单失败！' + _0x55510a);
      });
    };_0x339023['prototype']['payByMidas'] = function (_0x189a43, _0x8927c = null) {
      var _0x515248 = this;var _0x26da25 = 0x64;var _0x1e1589 = function () {
        _0x252543['payMidas']({ 'data': _0x189a43 })['then'](_0x3b6861 => {
          if (_0x3b6861['errcode'] && _0x3b6861['errcode'] != 0x0) {
            _0x515248['showMessage']('支付未完成');_0x515248['onCallback'](_0x8927c, 0x0, '支付失败！' + _0x3b6861['errcode']);return;
          }_0x515248['showMessage']('支付完成');_0x515248['onCallback'](_0x8927c, 0x1, '支付完成', { 'order_id': _0x189a43['orderid'] });
        }, _0x36b491 => {
          _0x515248['showMessage']('支付未完成');_0x515248['onCallback'](_0x8927c, 0x0, '支付失败！' + _0x36b491);
        });
      };_0x252543['balance']({ 'data': { 'game_id': this['opts']['gameId'], 'openid': this['userInfo']['openid'] } })['then'](_0x3cf1ea => {
        if (_0x3cf1ea['errcode'] == 0x0) {
          _0x515248['log']['debug'](_0x3cf1ea);if (_0x3cf1ea['balance'] >= _0x189a43['money'] * _0x26da25) {
            _0x1e1589();
          } else {
            _0x515248['log']['debug'](_0x189a43);wx['requestMidasPayment']({ 'mode': 'game', 'env': _0x3cf1ea['env'], 'offerId': _0x515248['getStorage']('offer_id'), 'currencyType': 'CNY', 'buyQuantity': _0x189a43['money'] * _0x26da25, 'platform': 'android', 'zoneId': 0x1, 'success'(_0x2cfc12) {
                _0x1e1589();
              }, 'fail'(_0x19b17b) {
                _0x515248['onCallback'](_0x8927c, 0x0, '(' + _0x19b17b['errCode'] + ')' + _0x19b17b['errMsg']);
              } });
          }
        } else {
          _0x515248['onCallback'](_0x8927c, 0x0, '(' + _0x3cf1ea['errcode'] + ')' + _0x3cf1ea['errmsg']);
        }
      }, _0x446f39 => {
        _0x515248['showError']('支付失败请重试');_0x515248['onCallback'](_0x8927c, 0x0, '支付失败请重试！' + _0x446f39);
      });
    };_0x339023['prototype']['payByCustomerService'] = function (_0x4ea181, _0x42f322 = null) {
      var _0x4ceb10 = this;if (!_0x4ea181['pay_url']) {
        _0x4ceb10['showMessage']('获取支付链接有误');_0x4ceb10['onCallback'](_0x42f322, 0x0, '支付链接有误');return;
      }var _0x28818d = _0x4ea181['pay_url'];wx['setClipboardData']({ 'data': '订单号:\x20' + _0x4ea181['orderid'] + '\x0a充值链接:\x20' + _0x28818d + '\x0a\x0a点击以上链接即可充值，若遇到充值问题，请及时联系客服。', 'success'(_0x2e7872) {
          wx['showModal']({ 'title': '充值教程', 'content': '充值链接已经复制，请点击确定前往客服中心，如果没有自动收到订单入口，请粘贴并发送内容获取支付链接入口', 'showCancel': ![], 'success'(_0x387e32) {
              if (_0x387e32['confirm']) {
                wx['openCustomerServiceConversation']({ 'sessionFrom': '', 'showMessageCard': !![], 'sendMessageTitle': '获取充值地址', 'sendMessagePath': 'wxgamepay/orderid/' + _0x4ea181['orderid'], 'sendMessageImg': _0x4ea181['icon_url'] ? _0x4ea181['icon_url'] : 'https://image.dfkj8.com/pic/concect_kf.png', 'success'(_0x435e0f) {}, 'fail'(_0x164502) {
                    _0x4ceb10['log']['debug'](_0x164502['errMsg']);_0x4ceb10['onCallback'](_0x42f322, 0x0, _0x164502['errMsg']);
                  } });
              }
            } });
        } });
    };_0x339023['prototype']['payByMiniProgram'] = function (_0x15aa36, _0x35512b = null) {
      var _0x1c24f2 = this;if (!_0x15aa36['mp_appid']) {
        _0x1c24f2['showMessage']('支付跳转失败');_0x1c24f2['onCallback'](_0x35512b, 0x0, '支付跳转失败');return;
      }wx['navigateToMiniProgram']({ 'appId': _0x15aa36['mp_appid'], 'path': _0x15aa36['app_path'] ? _0x15aa36['app_path'] : 'pages/pay/index', 'envVersion': _0x15aa36['env_version'] ? _0x15aa36['env_version'] : 'release', 'extraData': _0x15aa36, 'success'(_0x32a8ba) {
          _0x1c24f2['log']['debug']('跳转小程序成功:' + _0x32a8ba);
        }, 'fail'(_0x5aec06) {
          _0x1c24f2['log']['debug']('跳转小程序失败:' + _0x5aec06);_0x1c24f2['onCallback'](_0x35512b, 0x0, _0x5aec06['errMsg']);
        } });
    };_0x339023['prototype']['payByBrowser'] = function (_0x13fdd1, _0x23d1c0) {
      var _0x55d06c = this;if (!_0x13fdd1['pay_url']) {
        _0x55d06c['showMessage']('获取支付链接有误');_0x55d06c['onCallback'](_0x23d1c0, 0x0, '支付链接有误');return;
      }wx['setClipboardData']({ 'data': _0x13fdd1['pay_url'], 'success'(_0x5cbf01) {
          wx['showModal']({ 'title': '充值链接已复制', 'content': '请在外部浏览器粘贴充值链接后支付', 'showCancel': ![], 'success'(_0x3c03e9) {} });
        } });
    };_0x339023['prototype']['msgSecCheck'] = function (_0x157a45, _0x22b73d) {
      var _0x440f87 = this;var _0x292dbe = { 'game_id': _0x440f87['opts']['gameId'], 'content': _0x157a45['content'], 'openid': _0x440f87['userInfo'] && _0x440f87['userInfo']['openid'] ? _0x440f87['userInfo']['openid'] : '' };_0x252543['msgSecCheck']({ 'data': _0x292dbe })['then'](_0x519801 => {
        var _0x142d0e = _0x519801['errcode'] == 0x0 ? !![] : ![];_0x440f87['onCallback'](_0x22b73d, 0x1, _0x519801['errmsg'], { 'passed': _0x142d0e });
      }, _0x4a3479 => {
        _0x440f87['onCallback'](_0x22b73d, 0x0, '请求失败请重试！' + _0x4a3479);
      });
    };_0x339023['prototype']['openCustomerService'] = function (_0x33f391 = null, _0x6dc59b = null) {
      var _0x5e0e62 = this;wx['openCustomerServiceConversation']({ 'sessionFrom': '', 'showMessageCard': ![], 'sendMessageTitle': '', 'sendMessagePath': '', 'sendMessageImg': '', 'success'(_0x2ab730) {
          _0x5e0e62['log']['debug'](_0x2ab730);
        }, 'fail'(_0x39e55d) {
          _0x5e0e62['log']['debug'](_0x39e55d['errMsg']);_0x5e0e62['onCallback'](_0x6dc59b, 0x0, _0x39e55d['errMsg']);
        } });
    };_0x339023['prototype']['getDefaultShareInfo'] = function () {
      var _0xd818ee = this;var _0x4d8bbb = { 'share_title': '', 'share_img_url': '', 'share_img_id': '', 'share_query': '', 'share_img_preview_url': '', 'share_img_preview_id': '' };var _0x1dd369 = this['extend']({}, _0x4d8bbb, this['cache']['share_info'] ? this['cache']['share_info'] : {});return _0x1dd369;
    };_0x339023['prototype']['onShareAppMessage'] = function () {
      var _0x2c5c6e = this;var _0x45eba5 = this['getDefaultShareInfo']();wx['onShareAppMessage'](function () {
        _0x2c5c6e['log']['debug']('onShareAppMessage');return { 'title': _0x45eba5['share_title'] ? _0x45eba5['share_title'] : '', 'imageUrl': _0x45eba5['share_img_url'] ? _0x45eba5['share_img_url'] : '', 'query': _0x45eba5['share_query'] ? _0x45eba5['share_query'] : '', 'imageUrlId': _0x45eba5['share_img_id'] ? _0x45eba5['share_img_id'] : '' };
      });
    };_0x339023['prototype']['shareAppMessage'] = function (_0x1e79ae = null) {
      var _0x5dabb0 = this;var _0x35a806 = this['getDefaultShareInfo']();_0x35a806 = this['extend']({}, _0x35a806, _0x1e79ae ? _0x1e79ae : {});wx['shareAppMessage'](function () {
        _0x5dabb0['log']['debug']('shareAppMessage');return { 'title': _0x35a806['share_title'] ? _0x35a806['share_title'] : '', 'imageUrl': _0x35a806['share_img_url'] ? _0x35a806['share_img_url'] : '', 'query': _0x35a806['share_query'] ? _0x35a806['share_query'] : '', 'imageUrlId': _0x35a806['share_img_id'] ? _0x35a806['share_img_id'] : '' };
      });
    };_0x339023['prototype']['onShareTimeline'] = function () {
      var _0x2c10a9 = this;var _0x2d928d = this['getDefaultShareInfo']();wx['onShareTimeline'](function () {
        _0x2c10a9['log']['debug']('onShareTimeline');return { 'title': _0x2d928d['share_title'] ? _0x2d928d['share_title'] : '', 'imageUrl': _0x2d928d['share_img_url'] ? _0x2d928d['share_img_url'] : '', 'query': _0x2d928d['share_query'] ? _0x2d928d['share_query'] : '', 'imageUrlId': _0x2d928d['share_img_id'] ? _0x2d928d['share_img_id'] : '', 'imagePreviewUrl': _0x2d928d['share_img_preview_url'] ? _0x2d928d['share_img_preview_url'] : '', 'imagePreviewUrlId': _0x2d928d['share_img_preview_id'] ? _0x2d928d['share_img_preview_id'] : '' };
      });
    };_0x339023['prototype']['gotoSpecificPage'] = function (_0x2682b6) {
      var _0x9b16d5 = this;if (!_0x2682b6) {
        _0x9b16d5['log']['error']('请传入action');return;
      }var _0x5f3b3b = { 'game_id': _0x9b16d5['opts']['gameId'], 'user_id': _0x9b16d5['userInfo'] && _0x9b16d5['userInfo']['userID'] ? _0x9b16d5['userInfo']['userID'] : '', 'user_name': _0x9b16d5['userInfo'] && _0x9b16d5['userInfo']['username'] ? _0x9b16d5['userInfo']['username'] : '', 'openid': _0x9b16d5['userInfo'] && _0x9b16d5['userInfo']['openid'] ? _0x9b16d5['userInfo']['openid'] : '', 'os': _0x9b16d5['getOS'](), 'action': _0x2682b6 };_0x252543['specificPage']({ 'data': _0x5f3b3b })['then'](_0x4dd084 => {
        if (_0x4dd084['code'] == 0x0) {
          if (_0x4dd084['data']) {
            if (_0x4dd084['data']['copyData']) {
              wx['setClipboardData']({ 'data': _0x4dd084['data']['copyData'], 'success'(_0x5c05f9) {} });
            }wx['openCustomerServiceConversation']({ 'sessionFrom': _0x4dd084['data']['sessionFrom'], 'showMessageCard': _0x4dd084['data']['showMessageCard'], 'sendMessageTitle': _0x4dd084['data']['sendMessageTitle'], 'sendMessagePath': _0x4dd084['data']['sendMessagePath'], 'sendMessageImg': _0x4dd084['data']['sendMessageImg'], 'success'(_0x4184f2) {}, 'fail'(_0x886f61) {
                _0x9b16d5['showMessage']('跳转失败');_0x9b16d5['log']['error'](_0x886f61['errMsg']);
              } });
          }
        } else {
          _0x9b16d5['showMessage'](_0x4dd084['msg'] ? _0x4dd084['msg'] : '不支持的方式');
        }
      }, _0x2a0d66 => {
        _0x9b16d5['showMessage']('跳转失败');_0x9b16d5['log']['error'](_0x2a0d66);
      });
    };_0x339023['prototype']['requestSubscribe'] = function (_0x3ff52e, _0x361a56 = null) {
      var _0x46b2ae = this;var _0x3dc804 = {};if (_0x3ff52e && _0x3ff52e['length'] > 0x0 && _0x46b2ae['cache']['template_ids'] && Object['keys'](_0x46b2ae['cache']['template_ids'])['length'] > 0x0) {
        _0x3ff52e['forEach'](_0x2e515e => {
          if (_0x46b2ae['cache']['template_ids']['hasOwnProperty'](_0x2e515e)) {
            _0x3dc804[_0x46b2ae['cache']['template_ids'][_0x2e515e]] = _0x2e515e;
          }
        });
      }if (!_0x3dc804 || Object['keys'](_0x3dc804)['length'] == 0x0) {
        _0x46b2ae['onCallback'](_0x361a56, 0x0, '订阅模板为空');return;
      }wx['onTouchEnd'](function (_0x55fa0c, _0x3f1a60, _0x2d27d9) {
        wx['requestSubscribeMessage']({ 'tmplIds': Object['keys'](_0x3dc804), 'success'(_0x2f8f5c) {
            var _0x374d74 = [];Object['keys'](_0x2f8f5c)['forEach'](_0xda7cba => {
              if (_0x3dc804['hasOwnProperty'](_0xda7cba) && _0x2f8f5c[_0xda7cba] == 'accept') {
                _0x374d74['push'](_0x3dc804[_0xda7cba]);
              }
            });_0x46b2ae['onCallback'](_0x361a56, 0x1, 'success', _0x374d74);
          }, 'fail'(_0x4667dd) {
            _0x46b2ae['onCallback'](_0x361a56, 0x0, '订阅失败(' + _0x4667dd['errCode'] + ')' + _0x4667dd['errMsg']);
          } });
      });
    };
  };var _0x4971f4 = new _0x2811a6();module['exports']['dfSDK'] = _0x4971f4;
})();