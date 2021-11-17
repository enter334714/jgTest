var c = wx.$o;
var o_lv3a = this && this['__extends'] || function () {
  var qpmrt5 = function (hbo8cz, al6v3) {
    return qpmrt5 = Object['setPrototypeOf'] || { '__proto__': [] } instanceof Array && function (gohb4x, xo49b) {
      gohb4x['__proto__'] = xo49b;
    } || function (k_0e, _uek) {
      for (var e0uy_k in _uek) if (_uek['hasOwnProperty'](e0uy_k)) k_0e[e0uy_k] = _uek[e0uy_k];
    }, qpmrt5(hbo8cz, al6v3);
  };return function (ej$y0k, n3uav) {
    qpmrt5(ej$y0k, n3uav);function ohbzg() {
      this['constructor'] = ej$y0k;
    }ej$y0k['prototype'] = n3uav === null ? Object['create'](n3uav) : (ohbzg['prototype'] = n3uav['prototype'], new ohbzg());
  };
}(),
    o_i9xfw1 = window['Sygame'],
    o_r8mc5p = ![],
    o_czh8bp = function () {
  function xwfi9() {}return xwfi9['init'] = function () {
    o_r8mc5p ? this['sygame'] = { 'channel': '3477d2273abd484ba2a0e04ad4971b3c', 'role_id': undefined, 'openid': 'oxmOf5biumkGash-Xht9FVAlswVk', 'appid': 'wx2936121c4817bf46' } : this['sygame'] = o_i9xfw1;
  }, xwfi9['getTimeStamp'] = function () {
    return new Date()['getTime']();
  }, xwfi9['setResMap'] = function (i26ld, p5mtcr) {
    this['resMap'][i26ld] = i26ld + '?' + p5mtcr;
  }, xwfi9['getResMap'] = function (l3nva) {
    return this['resMap'][l3nva];
  }, xwfi9['resMap'] = {}, xwfi9;
}(),
    o_hpcz8b = function () {
  function _enyku() {
    this['getIcon'] = 'https://wx.11babay.cn/uploads/f/fkccc1532944783/5/2/c/7/60dc442c4fbc5.png', this['copyIcon'] = 'https://wx.11babay.cn/uploads/f/fkccc1532944783/3/0/1/7/60dc4409dce39.png', o_czh8bp['init'](), this['getBoxCheckoutCode']();
  }return _enyku['prototype']['send'] = function (nla3, rtm5p, pqrt, oxbhg, wifd12) {
    oxbhg === void 0x0 && (oxbhg = 'get');wifd12 === void 0x0 && (wifd12 = '' || null);var pmtc5 = new Laya['HttpRequest']();pmtc5['http']['timeout'] = 0x2710, pmtc5['once'](Laya['Event']['COMPLETE'], this, rtm5p), pmtc5['once'](Laya['Event']['ERROR'], this, pqrt), pmtc5['send'](nla3, wifd12, oxbhg, 'text');
  }, _enyku['prototype']['postSidebarApi'] = function () {
    this['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=sidebarApi&channel=' + o_czh8bp['sygame']['channel'], this['completeHandler'], this['errorHandler']);
  }, _enyku['prototype']['getBoxCheckoutCode'] = function () {
    var g9xbo = Sygame['SY_CONF']['commitId'];this['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=getBoxCheckoutCode', this['getBoxCheckoutCodeRes'], this['errorHandler'], 'post', { 'commitId': g9xbo });
  }, _enyku['prototype']['getBoxCheckoutCodeRes'] = function (id6w) {
    var y3nuv = JSON['parse'](id6w);console['log']('getBoxCheckoutCode:', y3nuv);if (y3nuv['status'] == 0x3e9) {
      var x91wfi = y3nuv['info'];x91wfi == 0xfa1 ? this['postSidebarApi']() : console['error']('盛也盒子\x20不显示' + y3nuv);
    } else console['error']('盛也盒子 getBoxCheckoutCodeRes 其他错误' + y3nuv);
  }, _enyku['prototype']['completeHandler'] = function (nuke) {
    var f12i9 = JSON['parse'](nuke);console['log'](f12i9);switch (f12i9['status']) {case 0x3e9:
        var k_yuen = [];f12i9['msg']['basics_image_url'] && k_yuen['push']({ 'url': f12i9['msg']['basics_image_url'], 'type': Laya['Loader']['IMAGE'] }), f12i9['msg']['public_code'] && k_yuen['push']({ 'url': f12i9['msg']['public_code'], 'type': Laya['Loader']['IMAGE'] }), f12i9['msg']['vip_customer_service'] && k_yuen['push']({ 'url': f12i9['msg']['vip_customer_service'], 'type': Laya['Loader']['IMAGE'] }), f12i9['msg']['vip_customer_service_not_add'] && k_yuen['push']({ 'url': f12i9['msg']['vip_customer_service_not_add'], 'type': Laya['Loader']['IMAGE'] }), f12i9['msg']['game_center_image_url'] && k_yuen['push']({ 'url': f12i9['msg']['game_center_image_url'], 'type': Laya['Loader']['IMAGE'] }), f12i9['msg']['vip_qrcode'] && k_yuen['push']({ 'url': f12i9['msg']['vip_qrcode'], 'type': Laya['Loader']['IMAGE'] }), f12i9['msg']['getIcon'] && k_yuen['push']({ 'url': this['getIcon'], 'type': Laya['Loader']['IMAGE'] }), f12i9['msg']['copyIcon'] && k_yuen['push']({ 'url': this['copyIcon'], 'type': Laya['Loader']['IMAGE'] });for (var ke0jy = 0x0, al6i = f12i9['msg']['follow_gift_list']; ke0jy < al6i['length']; ke0jy++) {
          var en_3u = al6i[ke0jy];k_yuen['push']({ 'url': en_3u['url'], 'type': Laya['Loader']['IMAGE'] });
        }for (var da2l6 = 0x0, srmq5 = f12i9['msg']['vip_box_list']; da2l6 < srmq5['length']; da2l6++) {
          var en_3u = srmq5[da2l6];k_yuen['push']({ 'url': en_3u['url'], 'type': Laya['Loader']['IMAGE'] });
        }for (var x194w = 0x0; x194w < k_yuen['length']; x194w++) {
          o_czh8bp['setResMap'](k_yuen[x194w]['url'], o_czh8bp['getTimeStamp']()), k_yuen[x194w]['url'] = o_czh8bp['getResMap'](k_yuen[x194w]['url']);
        }Laya['loader']['load'](k_yuen, Laya['Handler']['create'](this, this['initGame'])), this['data'] = f12i9['msg'];break;case 0x3ea:
        o_w9x14['msg']('空的游戏channel');break;case 0x3eb:
        o_w9x14['msg']('错误的游戏channel');break;case 0x3ec:
        o_w9x14['msg']('未找到对应游戏大类');break;case 0x3ed:
        o_w9x14['msg']('未设置侧边栏');break;}
  }, _enyku['prototype']['errorHandler'] = function (ln_v) {}, _enyku['prototype']['initGame'] = function () {
    var ul_ = new o_y_uvn(this);ul_['show']();
  }, _enyku;
}(),
    o_y_uvn = function () {
  function wi1x(czh8pr) {
    this['page'] = 0x3, this['rolePriceData'] = {}, this['boxlist'] = [], this['donwX'] = 0x0, this['downY'] = 0x0, this['tool'] = czh8pr;
  }return wi1x['prototype']['setChildMouseThroughs'] = function (l_nv3) {
    var v6d3a = l_nv3['_childs'] || [];for (var chb8 = 0x0; chb8 < v6d3a['length']; chb8++) {
      v6d3a[chb8] && (v6d3a[chb8]['mouseThrough'] = !![]);
    }
  }, wi1x['prototype']['show'] = function () {
    if (this['tool']['data']['on'] === '1') {
      this['main'] = new o_ulvn3['demoui']['MainUI'](), Laya['stage']['addChild'](this['main']), this['main']['mouseThrough'] = !![];var y0_ = this['main']['_childs'] || [];for (var qts5m7 = 0x0; qts5m7 < y0_['length']; qts5m7++) {
        y0_[qts5m7]['mouseThrough'] = !![];
      }this['setChildMouseThroughs'](this['main']['_childs']), this['setChildMouseThroughs'](this['main']['_childs'][0x0]), this['initIcon'](), this['initEvent'](), this['initView'](), o_w9x14['init']();
    }
  }, wi1x['prototype']['initView'] = function () {
    var pt5mrq = this,
        mr58c = this['tool']['data']['follow_down_words']['replace'](/\\n/g, '\x0a');this['main']['box_1_lab_info']['text'] = mr58c;for (var y$ejk = 0x1; y$ejk <= this['tool']['data']['follow_gift_list']['length']; y$ejk++) {
      var qrs = this['tool']['data']['follow_gift_list'][y$ejk - 0x1];this['main']['box_1_img_' + y$ejk]['skin'] = qrs['url'], this['main']['box_1_lab_' + y$ejk]['text'] = qrs['name'];
    }for (var y$ejk = 0x1; y$ejk <= this['tool']['data']['vip_box_list']['length']; y$ejk++) {
      var qrs = this['tool']['data']['vip_box_list'][y$ejk - 0x1];this['main']['box_2_img_' + y$ejk]['skin'] = qrs['url'], this['main']['box_2_lab_' + y$ejk]['text'] = qrs['name'];
    }this['main']['box_2_lab_m_1']['text'] = '方法一：单日充值' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_m_2']['text'] = '方法二：历史累计充值' + +this['tool']['data']['y'] + '元', this['main']['box_2_lab_v_1']['text'] = (this['rolePriceData']['todayPrice'] || 0x0) + '/' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_v_2']['text'] = (this['rolePriceData']['allPrice'] || 0x0) + '/' + +this['tool']['data']['y'] + '元', this['main']['box_2_btn_copy']['skin'] = this['tool']['copyIcon'], this['main']['box_2_btn_get']['skin'] = this['tool']['getIcon'], this['main']['box_2_btn_copy']['visible'] = ![], this['main']['box_2_btn_get']['on'](Laya['Event']['CLICK'], this, function () {
      if (pt5mrq['rolePriceData']['is_vip'] == 0x0) {
        o_w9x14['msg']('请先获取vip资格');return;
      }pt5mrq['main']['box_2_lab_wx']['text'] = pt5mrq['tool']['data']['vip_wx'], pt5mrq['main']['box_2_btn_copy']['visible'] = !![];
    }), this['main']['box_2_btn_copy']['on'](Laya['Event']['CLICK'], this, function () {
      pt5mrq['copyText'](pt5mrq['tool']['data']['vip_wx']);
    }), this['main']['box_2_addclick']['on'](Laya['Event']['CLICK'], this, function () {
      if (pt5mrq['rolePriceData']['is_vip'] == 0x0) return;pt5mrq['main']['box_help']['visible'] = !![];
    }), this['main']['box_help_close']['on'](Laya['Event']['CLICK'], this, function () {
      pt5mrq['main']['box_help']['visible'] = ![];
    }), this['main']['box_help_bg']['skin'] = this['tool']['data']['vip_customer_service_not_add'], this['main']['box_help_qrcode']['skin'] = this['tool']['data']['vip_qrcode'], this['main']['box_help_qrcode']['scaleX'] = 0xa0 / this['main']['box_help_qrcode']['width'], this['main']['box_help_qrcode']['scaleY'] = 0xa0 / this['main']['box_help_qrcode']['width'], this['main']['box_3_panel']['vScrollBar']['visible'] = ![], this['main']['box_3_panel']['vScrollBarSkin'] = 'common_atlas/scrollBar.png';
  }, wi1x['prototype']['initIcon'] = function () {
    this['icon'] = new Laya['Image'](), this['icon']['skin'] = this['tool']['data']['basics_image_url'], this['icon']['x'] = 0x0, this['icon']['y'] = 0xc8, this['icon']['width'] = 0x66, this['icon']['height'] = 0x6f, this['main']['addChild'](this['icon']), this['icon']['on'](Laya['Event']['MOUSE_DOWN'], this, this['iconPress']), this['icon']['on'](Laya['Event']['MOUSE_UP'], this, this['iconUp']), this['icon']['on'](Laya['Event']['MOUSE_WHEEL'], this, this['iconMove']), this['dragRect'] = new Laya['Rectangle'](-this['icon']['width'] / 0x2, 0x0, Laya['stage']['width'], Laya['stage']['height'] - this['icon']['height'] / 0x2);
  }, wi1x['prototype']['initEvent'] = function () {
    var cm8rpz = this;this['main']['btn_1']['on'](Laya['Event']['CLICK'], this, function () {
      if (cm8rpz['page'] == 0x1) return;cm8rpz['page1']();
    }), this['main']['btn_2']['on'](Laya['Event']['CLICK'], this, function () {
      if (cm8rpz['page'] == 0x2) return;cm8rpz['page2']();
    }), this['main']['btn_3']['on'](Laya['Event']['CLICK'], this, function () {
      if (cm8rpz['page'] == 0x3) return;cm8rpz['page3']();
    }), this['main']['btn_close']['on'](Laya['Event']['CLICK'], this, function () {
      cm8rpz['main']['bg']['x'] = -0x2ee, cm8rpz['icon']['visible'] = !![];
    });
  }, wi1x['prototype']['initBoard'] = function () {
    this['isInitBoard'] = !![], this['page1']();
  }, wi1x['prototype']['showBoard'] = function () {
    this['main']['bg']['x'] = 0x0, this['icon']['visible'] = ![], this['tool']['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=sidebarApiRoleId&role_id=' + o_czh8bp['sygame']['role_id'] + '&channel=' + o_czh8bp['sygame']['channel'], this['rolePriceHandler']['bind'](this), this['roleError']['bind'](this));
  }, wi1x['prototype']['page1'] = function () {
    this['page'] = 0x1, this['main']['bg']['skin'] = this['tool']['data']['public_code'], this['main']['box_1_show']['visible'] = !![], this['main']['box_2_show']['visible'] = ![], this['main']['box_3_show']['visible'] = ![];
  }, wi1x['prototype']['page2'] = function () {
    this['page'] = 0x2, this['main']['bg']['skin'] = this['tool']['data']['vip_customer_service'], this['main']['box_1_show']['visible'] = ![], this['main']['box_2_show']['visible'] = !![], this['main']['box_3_show']['visible'] = ![];
  }, wi1x['prototype']['page3'] = function () {
    this['page'] = 0x3, this['main']['bg']['skin'] = this['tool']['data']['game_center_image_url'], this['main']['box_1_show']['visible'] = ![], this['main']['box_2_show']['visible'] = ![], this['main']['box_3_show']['visible'] = !![], this['sendBox'] || this['getBoxList'](0x0), this['sendBox'] = !![], o_i9xfw1 && o_i9xfw1['syClickOpenBox']();
  }, wi1x['prototype']['getBoxList'] = function (neyk) {
    var t7m5sq = this;o_i9xfw1 && o_i9xfw1['syGetBoxList']({ 'page': neyk, 'count': 0xc })['then'](function (bhpc8) {
      var h4oxgb = bhpc8['data'];h4oxgb['status'] == 0x3e9 ? h4oxgb['data'] && h4oxgb['data']['length'] && (t7m5sq['boxlist'] = t7m5sq['boxlist']['concat'](h4oxgb['data']), neyk++, t7m5sq['getBoxList'](neyk)) : t7m5sq['boxListHandler']();
    });
  }, wi1x['prototype']['copyText'] = function (k$ey) {
    try {
      wx['setClipboardData']({ 'data': k$ey, 'success': function (gox94f) {
          console['log']('复制成功:', gox94f);
        } });
    } catch (gf4x9w) {}
  }, wi1x['prototype']['rolePriceHandler'] = function (anu) {
    this['rolePriceData'] = JSON['parse'](anu);switch (this['rolePriceData']['status']) {case 0x3e9:
        this['main']['box_2_lab_v_1']['text'] = (this['rolePriceData']['todayPrice'] || 0x0) + '/' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_v_2']['text'] = (this['rolePriceData']['allPrice'] || 0x0) + '/' + +this['tool']['data']['y'] + '元';break;case 0x3ea:
        break;case 0x3eb:
        break;}
  }, wi1x['prototype']['roleError'] = function () {}, wi1x['prototype']['boxListHandler'] = function () {
    var t5ms7 = function (y3e_u) {
      var y_u3 = zp8rmc['boxlist'][y3e_u],
          ogx9f4 = new o_ulvn3['demoui']['BoxItemUI']();ogx9f4['icon']['skin'] = y_u3['icon'], ogx9f4['title']['text'] = y_u3['title'], ogx9f4['x'] = 0xa0 * (y3e_u % 0x3), ogx9f4['y'] = 0xa0 * (y3e_u / 0x3 ^ 0x0), zp8rmc['main']['box_3_panel']['addChild'](ogx9f4);var _0ye = { 'appid': o_czh8bp['sygame']['appid'], 'game_id': y_u3['game_id'], 'jump_appid': y_u3['jump_appid'], 'jump_path': y_u3['jump_path'], 'tunnel_id': y_u3['tunnel_id'], 'uv': 0x0, 'wecha_id': o_czh8bp['sygame']['openid'] },
          xg4hbo = y_u3['preview_img'],
          _y3vun = y_u3['jump_type'],
          e3_nyu = y_u3['kf_session'];ogx9f4['on'](Laya['Event']['CLICK'], zp8rmc, function () {
        o_i9xfw1 && o_i9xfw1['syClickBox']({ 'game_id': y_u3['game_id'], 'tunnel_id': y_u3['tunnel_id'], 'jump_appid': y_u3['jump_appid'], 'jump_path': y_u3['jump_path'] })['then'](function (hzpcb8) {
          if (_y3vun === '0') wx['navigateToMiniProgram']({ 'appId': _0ye['jump_appid'], 'path': _0ye['jump_path'], 'fail': function (ejk$y0) {
              if (!xg4hbo) return;wx['previewImage']({ 'urls': [xg4hbo] });
            } });else {
            if (_y3vun === '1') {
              if (!xg4hbo) return;wx['previewImage']({ 'urls': [xg4hbo] });
            } else {
              if (_y3vun === '2') {
                if (!e3_nyu) return;wx['openCustomerServiceConversation']({ 'sessionFrom': e3_nyu, 'showMessageCard': !![], 'sendMessageTitle': '', 'sendMessagePath': '', 'sendMessageImg': '' });
              }
            }
          }
        });
      });
    },
        zp8rmc = this;for (var ld2va6 = 0x0; ld2va6 < this['boxlist']['length']; ld2va6++) {
      t5ms7(ld2va6);
    }
  }, wi1x['prototype']['boxListError'] = function () {}, wi1x['prototype']['boxClickHandler'] = function () {}, wi1x['prototype']['iconPress'] = function (wi216) {
    this['donwX'] = wi216['target']['x'], this['donwY'] = wi216['target']['y'], this['icon']['startDrag'](this['dragRect']), this['isMove'] = ![], this['isPress'] = !![];
  }, wi1x['prototype']['iconMove'] = function (a2d1) {
    this['isMove'] = !![];
  }, wi1x['prototype']['iconUp'] = function (v36ln) {
    var dl2i6a = v36ln['target']['x'],
        sm = v36ln['target']['y'];this['icon']['stopDrag'](), dl2i6a == this['donwX'] && this['donwY'] == sm && (this['isInitBoard'] || this['initBoard'](), this['showBoard']()), this['isMove'] = ![], this['isPress'] = ![];
  }, wi1x;
}(),
    o_ulvn3;(function (hgzo8) {
  var ifd;(function (qrm5ts) {
    var d6lav3 = function (d12fi) {
      o_lv3a(zrc8, d12fi);function zrc8() {
        return d12fi['call'](this) || this;
      }return zrc8['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), d12fi['prototype']['createChildren']['call'](this), this['createView'](hgzo8['demoui']['BoxItemUI']['uiView']);
      }, zrc8['uiView'] = { 'type': 'View', 'props': { 'width': 0xb4, 'height': 0xa0 }, 'child': [{ 'type': 'Image', 'props': { 'y': 0x3, 'x': 0x20, 'width': 0x73, 'var': 'icon', 'height': 0x73 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x79, 'x': -0x21, 'width': 0xb4, 'var': 'title', 'valign': 'middle', 'height': 0x22, 'fontSize': 0x16, 'color': '#441d1c', 'align': 'center' } }] }] }, zrc8;
    }(laya['ui']['View']);qrm5ts['BoxItemUI'] = d6lav3;
  })(ifd = hgzo8['demoui'] || (hgzo8['demoui'] = {}));
})(o_ulvn3 || (o_ulvn3 = {})), function (ms75tq) {
  var mc;(function (u_0yke) {
    var tmqsr5 = function (qrtsm5) {
      o_lv3a(wfdi, qrtsm5);function wfdi() {
        return qrtsm5['call'](this) || this;
      }return wfdi['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), qrtsm5['prototype']['createChildren']['call'](this), this['createView'](ms75tq['demoui']['MainUI']['uiView']);
      }, wfdi['uiView'] = { 'type': 'View', 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x2ee, 'top': 0x0, 'right': 0x0, 'left': 0x0, 'height': 0x536, 'bottom': 0x0 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x2ee, 'height': 0x536, 'centerY': 0x0 }, 'child': [{ 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x2ee, 'var': 'bg', 'height': 0x536 }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x2ee, 'visible': ![], 'var': 'box_1_show', 'height': 0x536, 'centerY': 0x0 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x253, 'x': 0x2e, 'width': 0x1d0, 'var': 'box_1_lab_info', 'leading': 0xa, 'height': 0x97, 'fontSize': 0x18, 'color': '#a959ee' } }, { 'type': 'HBox', 'props': { 'y': 0x2ee, 'x': 0x14, 'width': 0x1fe, 'space': 0x35, 'height': 0x78, 'align': 'top' }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x58, 'var': 'box_1_img_1', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_1', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0xa, 'x': 0xa, 'width': 0x58, 'var': 'box_1_img_2', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_2', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x14, 'x': 0x14, 'width': 0x58, 'var': 'box_1_img_3', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_3', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x1e, 'x': 0x1e, 'width': 0x58, 'var': 'box_1_img_4', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_4', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }] }] }, { 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'visible': ![], 'var': 'box_2_show' }, 'child': [{ 'type': 'HBox', 'props': { 'y': 0x220, 'x': 0x18, 'width': 0x1f4, 'space': 0x2c, 'height': 0x56, 'align': 'top' }, 'child': [{ 'type': 'Image', 'props': { 'y': 2.5, 'x': 0x0, 'width': 0x58, 'var': 'box_2_img_1', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_1', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0xc, 'x': 0xa, 'width': 0x58, 'var': 'box_2_img_2', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_2', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x16, 'x': 0x14, 'width': 0x58, 'var': 'box_2_img_3', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_3', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x20, 'x': 0x1e, 'width': 0x58, 'var': 'box_2_img_4', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_4', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x2a, 'x': 0x28, 'width': 0x58, 'var': 'box_2_img_5', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_5', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }] }, { 'type': 'Box', 'props': { 'y': 0x384, 'x': 0x0, 'width': 0x221, 'height': 0x44 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x0, 'x': 0x28, 'width': 0x122, 'var': 'box_2_lab_m_1', 'text': '方法一\uFF1A单日充值1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300' } }, { 'type': 'Text', 'props': { 'y': 0x1e, 'x': 0x28, 'width': 0x122, 'var': 'box_2_lab_m_2', 'text': '方法一\uFF1A历史累计充值1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300' } }, { 'type': 'Text', 'props': { 'y': 0x0, 'x': 0x141, 'width': 0xa4, 'var': 'box_2_lab_v_1', 'text': '1000/1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300', 'align': 'right' } }, { 'type': 'Text', 'props': { 'y': 0x1e, 'x': 0x141, 'width': 0xa4, 'var': 'box_2_lab_v_2', 'text': '1000/1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300', 'align': 'right' } }] }, { 'type': 'Image', 'props': { 'y': 0x1aa, 'x': 0x159, 'width': 0x66, 'var': 'box_2_btn_get', 'stateNum': 0x1, 'height': 0x26 } }, { 'type': 'Image', 'props': { 'y': 0x1aa, 'x': 0x159, 'width': 0x66, 'var': 'box_2_btn_copy', 'stateNum': 0x1, 'height': 0x26 } }, { 'type': 'Button', 'props': { 'y': 0x1d2, 'x': 0x126, 'width': 0xc9, 'var': 'box_2_addclick', 'stateNum': 0x1, 'height': 0x1b } }, { 'type': 'Text', 'props': { 'y': 0x13c, 'x': 0x17a, 'width': 0xa3, 'var': 'box_2_lab_wx', 'height': 0x1f, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'left' } }] }, { 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'visible': ![], 'var': 'box_3_show' }, 'child': [{ 'type': 'Panel', 'props': { 'y': 0xf5, 'x': 0x10, 'width': 0x201, 'var': 'box_3_panel', 'vScrollBarSkin': '', 'height': 0x29e } }] }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0x0, 'width': 0xbb, 'var': 'btn_1', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0xba, 'width': 0xbb, 'var': 'btn_2', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0x177, 'width': 0xbb, 'var': 'btn_3', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x203, 'x': 0x22e, 'width': 0x25, 'var': 'btn_close', 'height': 0x8f } }, { 'type': 'Box', 'props': { 'width': 0x2ee, 'visible': ![], 'var': 'box_help', 'height': 0x536 }, 'child': [{ 'type': 'Sprite', 'props': { 'y': 0x0, 'x': 0x0, 'mouseThrough': ![], 'alpha': 0.7 }, 'child': [{ 'type': 'Rect', 'props': { 'width': 0x2ee, 'lineWidth': 0x1, 'height': 0x536, 'fillColor': '#000000' } }] }, { 'type': 'Image', 'props': { 'y': 0x158, 'x': 0x28, 'width': 0x1d2, 'var': 'box_help_bg', 'height': 0x203 }, 'child': [{ 'type': 'Button', 'props': { 'y': -0x1, 'x': 0x1a0, 'width': 0x33, 'var': 'box_help_close', 'height': 0x28 } }, { 'type': 'Image', 'props': { 'y': 0x3f, 'x': 0x98, 'width': 0xa0, 'var': 'box_help_qrcode', 'height': 0xa0 } }] }] }] }] }] }, wfdi;
    }(laya['ui']['View']);u_0yke['MainUI'] = tmqsr5;
  })(mc = ms75tq['demoui'] || (ms75tq['demoui'] = {}));
}(o_ulvn3 || (o_ulvn3 = {})), function (eun3) {
  var f9wix1;(function (o4bz) {
    var da6i = function (gf4x) {
      o_lv3a(i19, gf4x);function i19() {
        return gf4x['call'](this) || this;
      }return i19['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), gf4x['prototype']['createChildren']['call'](this), this['createView'](eun3['demoui']['ToastUI']['uiView']);
      }, i19['uiView'] = { 'type': 'View', 'props': { 'width': 0x2ee, 'height': 0x536 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x12c, 'height': 0x32, 'centerY': 0x0, 'centerX': 0x0 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x12c, 'height': 0x32, 'centerX': 0x0, 'alpha': 0.5 }, 'child': [{ 'type': 'Rect', 'props': { 'width': 0x12c, 'lineWidth': 0x1, 'height': 0x32, 'fillColor': '#382f2f' } }] }, { 'type': 'Text', 'props': { 'width': 0x12c, 'var': 'lab_msg', 'valign': 'middle', 'text': 'text', 'height': 0x32, 'fontSize': 0x18, 'color': '#ffffff', 'align': 'center' } }] }] }, i19;
    }(laya['ui']['View']);o4bz['ToastUI'] = da6i;
  })(f9wix1 = eun3['demoui'] || (eun3['demoui'] = {}));
}(o_ulvn3 || (o_ulvn3 = {}));var o_w9x14 = function () {
  function p5mtq() {}return p5mtq['init'] = function () {
    !this['ui'] && (this['ui'] = new o_ulvn3['demoui']['ToastUI'](), this['ui']['visible'] = ![], Laya['stage']['addChild'](this['ui']));
  }, p5mtq['msg'] = function (fw91x) {
    var wf9i2 = this;!this['ui'] && p5mtq['init'](), this['ui']['visible'] = !![], this['ui']['lab_msg']['text'] = fw91x, clearTimeout(this['interval']), this['interval'] = setTimeout(function () {
      wf9i2['ui']['visible'] = ![];
    }, 0x7d0);
  }, p5mtq;
}();window['minitool'] = o_hpcz8b;