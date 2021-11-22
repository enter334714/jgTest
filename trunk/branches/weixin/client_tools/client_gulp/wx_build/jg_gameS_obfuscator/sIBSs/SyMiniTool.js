var K = wx.$S;
var sx_ciw = this && this['__extends'] || function () {
  var _0mcxi = function (xmt72, d4$a) {
    return _0mcxi = Object['setPrototypeOf'] || { '__proto__': [] } instanceof Array && function (l168jb, _nmxi) {
      l168jb['__proto__'] = _nmxi;
    } || function (jq8b1g, oue) {
      for (var zw09v in oue) if (oue['hasOwnProperty'](zw09v)) jq8b1g[zw09v] = oue[zw09v];
    }, _0mcxi(xmt72, d4$a);
  };return function (c0w9_i, kz9vo) {
    _0mcxi(c0w9_i, kz9vo);function m0xc_() {
      this['constructor'] = c0w9_i;
    }c0w9_i['prototype'] = kz9vo === null ? Object['create'](kz9vo) : (m0xc_['prototype'] = kz9vo['prototype'], new m0xc_());
  };
}(),
    sqgbj8 = window['Sygame'],
    se4$u3 = ![],
    sv0kzw9 = function () {
  function roz() {}return roz['init'] = function () {
    se4$u3 ? this['sygame'] = { 'channel': '3477d2273abd484ba2a0e04ad4971b3c', 'role_id': undefined, 'openid': 'oxmOf5biumkGash-Xht9FVAlswVk', 'appid': 'wx2936121c4817bf46' } : this['sygame'] = sqgbj8;
  }, roz['getTimeStamp'] = function () {
    return new Date()['getTime']();
  }, roz['setResMap'] = function (u3ro4e, l1b86) {
    this['resMap'][u3ro4e] = u3ro4e + '?' + l1b86;
  }, roz['getResMap'] = function (_2cix) {
    return this['resMap'][_2cix];
  }, roz['resMap'] = {}, roz;
}(),
    sbl8j1 = function () {
  function vo3zkr() {
    this['getIcon'] = 'https://wx.11babay.cn/uploads/f/fkccc1532944783/5/2/c/7/60dc442c4fbc5.png', this['copyIcon'] = 'https://wx.11babay.cn/uploads/f/fkccc1532944783/3/0/1/7/60dc4409dce39.png', sv0kzw9['init'](), this['getBoxCheckoutCode']();
  }return vo3zkr['prototype']['send'] = function (q8j1b, qsjg1p, zwvk, x_icw, nt2im) {
    x_icw === void 0x0 && (x_icw = 'get');nt2im === void 0x0 && (nt2im = '' || null);var i2xm_ = new Laya['HttpRequest']();i2xm_['http']['timeout'] = 0x2710, i2xm_['once'](Laya['Event']['COMPLETE'], this, qsjg1p), i2xm_['once'](Laya['Event']['ERROR'], this, zwvk), i2xm_['send'](q8j1b, nt2im, x_icw, 'text');
  }, vo3zkr['prototype']['postSidebarApi'] = function () {
    var x0ic = sv0kzw9['sygame']['openid'],
        eadu$4 = '&channel=' + sv0kzw9['sygame']['channel'] + '&wecha_id=' + x0ic;this['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=sidebarApi' + eadu$4, this['completeHandler'], this['errorHandler']);
  }, vo3zkr['prototype']['getBoxCheckoutCode'] = function () {
    var zv0kw = Sygame['SY_CONF']['commitId'];this['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=getBoxCheckoutCode', this['getBoxCheckoutCodeRes'], this['errorHandler'], 'post', { 'commitId': zv0kw });
  }, vo3zkr['prototype']['getBoxCheckoutCodeRes'] = function (ura$e) {
    var m_i0x = JSON['parse'](ura$e);console['log']('getBoxCheckoutCode:', m_i0x);if (m_i0x['status'] == 0x3e9) {
      var pyhgqs = m_i0x['info'];pyhgqs == 0xfa1 ? this['postSidebarApi']() : console['error']('盛也盒子\x20不显示' + m_i0x);
    } else console['error']('盛也盒子 getBoxCheckoutCodeRes 其他错误' + m_i0x);
  }, vo3zkr['prototype']['completeHandler'] = function (g81jq) {
    var y5sqp = JSON['parse'](g81jq);console['log'](y5sqp);switch (y5sqp['status']) {case 0x3e9:
        var p1sgqj = [];y5sqp['msg']['basics_image_url'] && p1sgqj['push']({ 'url': y5sqp['msg']['basics_image_url'], 'type': Laya['Loader']['IMAGE'] }), y5sqp['msg']['public_code'] && p1sgqj['push']({ 'url': y5sqp['msg']['public_code'], 'type': Laya['Loader']['IMAGE'] }), y5sqp['msg']['vip_customer_service'] && p1sgqj['push']({ 'url': y5sqp['msg']['vip_customer_service'], 'type': Laya['Loader']['IMAGE'] }), y5sqp['msg']['vip_customer_service_not_add'] && p1sgqj['push']({ 'url': y5sqp['msg']['vip_customer_service_not_add'], 'type': Laya['Loader']['IMAGE'] }), y5sqp['msg']['game_center_image_url'] && p1sgqj['push']({ 'url': y5sqp['msg']['game_center_image_url'], 'type': Laya['Loader']['IMAGE'] }), y5sqp['msg']['vip_qrcode'] && p1sgqj['push']({ 'url': y5sqp['msg']['vip_qrcode'], 'type': Laya['Loader']['IMAGE'] }), y5sqp['msg']['getIcon'] && p1sgqj['push']({ 'url': this['getIcon'], 'type': Laya['Loader']['IMAGE'] }), y5sqp['msg']['copyIcon'] && p1sgqj['push']({ 'url': this['copyIcon'], 'type': Laya['Loader']['IMAGE'] });for (var x0_w = 0x0, ic90_w = y5sqp['msg']['follow_gift_list']; x0_w < ic90_w['length']; x0_w++) {
          var a$yd5 = ic90_w[x0_w];p1sgqj['push']({ 'url': a$yd5['url'], 'type': Laya['Loader']['IMAGE'] });
        }for (var r$4e = 0x0, v3rue = y5sqp['msg']['vip_box_list']; r$4e < v3rue['length']; r$4e++) {
          var a$yd5 = v3rue[r$4e];p1sgqj['push']({ 'url': a$yd5['url'], 'type': Laya['Loader']['IMAGE'] });
        }for (var de$4 = 0x0; de$4 < p1sgqj['length']; de$4++) {
          sv0kzw9['setResMap'](p1sgqj[de$4]['url'], sv0kzw9['getTimeStamp']()), p1sgqj[de$4]['url'] = sv0kzw9['getResMap'](p1sgqj[de$4]['url']);
        }Laya['loader']['load'](p1sgqj, Laya['Handler']['create'](this, this['initGame'])), this['data'] = y5sqp['msg'];break;case 0x3ea:
        sgpj1sq['msg']('空的游戏channel');break;case 0x3eb:
        sgpj1sq['msg']('错误的游戏channel');break;case 0x3ec:
        sgpj1sq['msg']('未找到对应游戏大类');break;case 0x3ed:
        sgpj1sq['msg']('未设置侧边栏');break;}
  }, vo3zkr['prototype']['errorHandler'] = function (_mi2) {}, vo3zkr['prototype']['initGame'] = function () {
    var qgjsp1 = new sxi2_n(this);qgjsp1['show']();
  }, vo3zkr;
}(),
    sxi2_n = function () {
  function c9wk0z(jb6l) {
    this['page'] = 0x3, this['rolePriceData'] = {}, this['boxlist'] = [], this['donwX'] = 0x0, this['downY'] = 0x0, this['tool'] = jb6l;
  }return c9wk0z['prototype']['setChildMouseThroughs'] = function (k0_9w) {
    var gpsq1j = k0_9w['_childs'] || [];for (var xcm_i = 0x0; xcm_i < gpsq1j['length']; xcm_i++) {
      gpsq1j[xcm_i] && (gpsq1j[xcm_i]['mouseThrough'] = !![]);
    }
  }, c9wk0z['prototype']['show'] = function () {
    if (this['tool']['data']['on'] === '1') {
      this['main'] = new sr34u$e['demoui']['MainUI'](), Laya['stage']['addChild'](this['main']), this['main']['mouseThrough'] = !![];var u$3e = this['main']['_childs'] || [];for (var ci_x0 = 0x0; ci_x0 < u$3e['length']; ci_x0++) {
        u$3e[ci_x0]['mouseThrough'] = !![];
      }this['setChildMouseThroughs'](this['main']['_childs']), this['setChildMouseThroughs'](this['main']['_childs'][0x0]), this['initIcon'](), this['initEvent'](), this['initView'](), sgpj1sq['init']();
    }
  }, c9wk0z['prototype']['initView'] = function () {
    var shq5y = this,
        gyspqh = this['tool']['data']['follow_down_words']['replace'](/\\n/g, '\x0a');this['main']['box_1_lab_info']['text'] = gyspqh;for (var asd5yh = 0x1; asd5yh <= this['tool']['data']['follow_gift_list']['length']; asd5yh++) {
      var de$ua = this['tool']['data']['follow_gift_list'][asd5yh - 0x1];this['main']['box_1_img_' + asd5yh]['skin'] = de$ua['url'], this['main']['box_1_lab_' + asd5yh]['text'] = de$ua['name'];
    }for (var asd5yh = 0x1; asd5yh <= this['tool']['data']['vip_box_list']['length']; asd5yh++) {
      var de$ua = this['tool']['data']['vip_box_list'][asd5yh - 0x1];this['main']['box_2_img_' + asd5yh]['skin'] = de$ua['url'], this['main']['box_2_lab_' + asd5yh]['text'] = de$ua['name'];
    }this['main']['box_2_lab_m_1']['text'] = '方法一：单日充值' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_m_2']['text'] = '方法二：历史累计充值' + +this['tool']['data']['y'] + '元', this['main']['box_2_lab_v_1']['text'] = (this['rolePriceData']['todayPrice'] || 0x0) + '/' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_v_2']['text'] = (this['rolePriceData']['allPrice'] || 0x0) + '/' + +this['tool']['data']['y'] + '元', this['main']['box_2_btn_copy']['skin'] = this['tool']['copyIcon'], this['main']['box_2_btn_get']['skin'] = this['tool']['getIcon'], this['main']['box_2_btn_copy']['visible'] = ![], this['main']['box_2_btn_get']['on'](Laya['Event']['CLICK'], this, function () {
      if (shq5y['rolePriceData']['is_vip'] == 0x0) {
        sgpj1sq['msg']('请先获取vip资格');return;
      }shq5y['main']['box_2_lab_wx']['text'] = this['rolePriceData']['vip_wx'], shq5y['main']['box_2_btn_copy']['visible'] = !![];
    }), this['main']['box_2_btn_copy']['on'](Laya['Event']['CLICK'], this, function () {
      shq5y['copyText'](this['rolePriceData']['vip_wx']);
    }), this['main']['box_2_addclick']['on'](Laya['Event']['CLICK'], this, function () {
      if (shq5y['rolePriceData']['is_vip'] == 0x0) return;this['main']['box_help_qrcode']['skin'] = shq5y['rolePriceData']['vip_qrcode'], shq5y['main']['box_help']['visible'] = !![];
    }), this['main']['box_help_close']['on'](Laya['Event']['CLICK'], this, function () {
      shq5y['main']['box_help']['visible'] = ![];
    }), this['main']['box_help_bg']['skin'] = this['tool']['data']['vip_customer_service_not_add'], this['main']['box_help_qrcode']['skin'] = shq5y['rolePriceData']['vip_qrcode'], this['main']['box_help_qrcode']['scaleX'] = 0xa0 / this['main']['box_help_qrcode']['width'], this['main']['box_help_qrcode']['scaleY'] = 0xa0 / this['main']['box_help_qrcode']['width'], this['main']['box_3_panel']['vScrollBar']['visible'] = ![], this['main']['box_3_panel']['vScrollBarSkin'] = 'common_atlas/scrollBar.png';
  }, c9wk0z['prototype']['initIcon'] = function () {
    this['icon'] = new Laya['Image'](), this['icon']['skin'] = this['tool']['data']['basics_image_url'], this['icon']['x'] = 0x0, this['icon']['y'] = 0xc8, this['icon']['width'] = 0x66, this['icon']['height'] = 0x6f, this['main']['addChild'](this['icon']), this['icon']['on'](Laya['Event']['MOUSE_DOWN'], this, this['iconPress']), this['icon']['on'](Laya['Event']['MOUSE_UP'], this, this['iconUp']), this['icon']['on'](Laya['Event']['MOUSE_WHEEL'], this, this['iconMove']), this['dragRect'] = new Laya['Rectangle'](-this['icon']['width'] / 0x2, 0x0, Laya['stage']['width'], Laya['stage']['height'] - this['icon']['height'] / 0x2);
  }, c9wk0z['prototype']['initEvent'] = function () {
    var zc90 = this;this['main']['btn_1']['on'](Laya['Event']['CLICK'], this, function () {
      if (zc90['page'] == 0x1) return;zc90['page1']();
    }), this['main']['btn_2']['on'](Laya['Event']['CLICK'], this, function () {
      if (zc90['page'] == 0x2) return;zc90['page2']();
    }), this['main']['btn_3']['on'](Laya['Event']['CLICK'], this, function () {
      if (zc90['page'] == 0x3) return;zc90['page3']();
    }), this['main']['btn_close']['on'](Laya['Event']['CLICK'], this, function () {
      zc90['main']['bg']['x'] = -0x2ee, zc90['icon']['visible'] = !![];
    });
  }, c9wk0z['prototype']['initBoard'] = function () {
    this['isInitBoard'] = !![], this['page1']();
  }, c9wk0z['prototype']['showBoard'] = function () {
    this['main']['bg']['x'] = 0x0, this['icon']['visible'] = ![];var l86 = s1X4['selectedServer']['server_id'],
        ourzv = s1X4['selectedServer']['server_name'],
        j8g1q = s1X4['roleId'],
        r3uv = s1X4['roleName'],
        hpsgy = sv0kzw9['sygame']['openid'],
        uaer$4 = '&role_id=' + sv0kzw9['sygame']['role_id'] + '&channel=' + sv0kzw9['sygame']['channel'] + '&server_id=' + l86 + '&server_name=' + ourzv + '&wecha_id=' + hpsgy + '&role_id=' + j8g1q + '&role_name=' + r3uv;this['tool']['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=sidebarApiRoleId' + uaer$4, this['rolePriceHandler']['bind'](this), this['roleError']['bind'](this));
  }, c9wk0z['prototype']['page1'] = function () {
    this['page'] = 0x1, this['main']['bg']['skin'] = this['tool']['data']['public_code'], this['main']['box_1_show']['visible'] = !![], this['main']['box_2_show']['visible'] = ![], this['main']['box_3_show']['visible'] = ![];
  }, c9wk0z['prototype']['page2'] = function () {
    this['page'] = 0x2, this['main']['bg']['skin'] = this['tool']['data']['vip_customer_service'], this['main']['box_1_show']['visible'] = ![], this['main']['box_2_show']['visible'] = !![], this['main']['box_3_show']['visible'] = ![];
  }, c9wk0z['prototype']['page3'] = function () {
    this['page'] = 0x3, this['main']['bg']['skin'] = this['tool']['data']['game_center_image_url'], this['main']['box_1_show']['visible'] = ![], this['main']['box_2_show']['visible'] = ![], this['main']['box_3_show']['visible'] = !![], this['sendBox'] || this['getBoxList'](0x0), this['sendBox'] = !![], sqgbj8 && sqgbj8['syClickOpenBox']();
  }, c9wk0z['prototype']['getBoxList'] = function (eru3o) {
    var n2x_i = this;sqgbj8 && sqgbj8['syGetBoxList']({ 'page': eru3o, 'count': 0xc })['then'](function (j1q8) {
      var qspjgy = j1q8['data'];qspjgy['status'] == 0x3e9 ? qspjgy['data'] && qspjgy['data']['length'] && (n2x_i['boxlist'] = n2x_i['boxlist']['concat'](qspjgy['data']), eru3o++, n2x_i['getBoxList'](eru3o)) : n2x_i['boxListHandler']();
    });
  }, c9wk0z['prototype']['copyText'] = function (gb1j68) {
    try {
      wx['setClipboardData']({ 'data': gb1j68, 'success': function (cix_0w) {
          console['log']('复制成功:', cix_0w);
        } });
    } catch (wv0kz9) {}
  }, c9wk0z['prototype']['rolePriceHandler'] = function ($ah4d5) {
    this['rolePriceData'] = JSON['parse']($ah4d5);switch (this['rolePriceData']['status']) {case 0x3e9:
        this['main']['box_2_lab_v_1']['text'] = (this['rolePriceData']['todayPrice'] || 0x0) + '/' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_v_2']['text'] = (this['rolePriceData']['allPrice'] || 0x0) + '/' + +this['tool']['data']['y'] + '元';break;case 0x3ea:
        break;case 0x3eb:
        break;}
  }, c9wk0z['prototype']['roleError'] = function () {}, c9wk0z['prototype']['boxListHandler'] = function () {
    var vzrou3 = function (zk09wc) {
      var nx_im2 = ygqsp['boxlist'][zk09wc],
          vw9zo = new sr34u$e['demoui']['BoxItemUI']();vw9zo['icon']['skin'] = nx_im2['icon'], vw9zo['title']['text'] = nx_im2['title'], vw9zo['x'] = 0xa0 * (zk09wc % 0x3), vw9zo['y'] = 0xa0 * (zk09wc / 0x3 ^ 0x0), ygqsp['main']['box_3_panel']['addChild'](vw9zo);var xiw_0c = { 'appid': sv0kzw9['sygame']['appid'], 'game_id': nx_im2['game_id'], 'jump_appid': nx_im2['jump_appid'], 'jump_path': nx_im2['jump_path'], 'tunnel_id': nx_im2['tunnel_id'], 'uv': 0x0, 'wecha_id': sv0kzw9['sygame']['openid'] },
          aed54 = nx_im2['preview_img'],
          k3rzo = nx_im2['jump_type'],
          k90wvz = nx_im2['kf_session'];vw9zo['on'](Laya['Event']['CLICK'], ygqsp, function () {
        sqgbj8 && sqgbj8['syClickBox']({ 'game_id': nx_im2['game_id'], 'tunnel_id': nx_im2['tunnel_id'], 'jump_appid': nx_im2['jump_appid'], 'jump_path': nx_im2['jump_path'] })['then'](function (r4ue$) {
          if (k3rzo === '0') wx['navigateToMiniProgram']({ 'appId': xiw_0c['jump_appid'], 'path': xiw_0c['jump_path'], 'fail': function (yh5sq) {
              if (!aed54) return;wx['previewImage']({ 'urls': [aed54] });
            } });else {
            if (k3rzo === '1') {
              if (!aed54) return;wx['previewImage']({ 'urls': [aed54] });
            } else {
              if (k3rzo === '2') {
                if (!k90wvz) return;wx['openCustomerServiceConversation']({ 'sessionFrom': k90wvz, 'showMessageCard': !![], 'sendMessageTitle': '', 'sendMessagePath': '', 'sendMessageImg': '' });
              }
            }
          }
        });
      });
    },
        ygqsp = this;for (var q1jgp = 0x0; q1jgp < this['boxlist']['length']; q1jgp++) {
      vzrou3(q1jgp);
    }
  }, c9wk0z['prototype']['boxListError'] = function () {}, c9wk0z['prototype']['boxClickHandler'] = function () {}, c9wk0z['prototype']['iconPress'] = function ($aru4) {
    this['donwX'] = $aru4['target']['x'], this['donwY'] = $aru4['target']['y'], this['icon']['startDrag'](this['dragRect']), this['isMove'] = ![], this['isPress'] = !![];
  }, c9wk0z['prototype']['iconMove'] = function (jpgyqs) {
    this['isMove'] = !![];
  }, c9wk0z['prototype']['iconUp'] = function (tmn2i) {
    var evuro = tmn2i['target']['x'],
        jbg81 = tmn2i['target']['y'];this['icon']['stopDrag'](), evuro == this['donwX'] && this['donwY'] == jbg81 && (this['isInitBoard'] || this['initBoard'](), this['showBoard']()), this['isMove'] = ![], this['isPress'] = ![];
  }, c9wk0z;
}(),
    sr34u$e;(function (aued4$) {
  var ae$54d;(function (hypd) {
    var ghpyq = function (vw9) {
      sx_ciw(_wi0, vw9);function _wi0() {
        return vw9['call'](this) || this;
      }return _wi0['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), vw9['prototype']['createChildren']['call'](this), this['createView'](aued4$['demoui']['BoxItemUI']['uiView']);
      }, _wi0['uiView'] = { 'type': 'View', 'props': { 'width': 0xb4, 'height': 0xa0 }, 'child': [{ 'type': 'Image', 'props': { 'y': 0x3, 'x': 0x20, 'width': 0x73, 'var': 'icon', 'height': 0x73 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x79, 'x': -0x21, 'width': 0xb4, 'var': 'title', 'valign': 'middle', 'height': 0x22, 'fontSize': 0x16, 'color': '#441d1c', 'align': 'center' } }] }] }, _wi0;
    }(laya['ui']['View']);hypd['BoxItemUI'] = ghpyq;
  })(ae$54d = aued4$['demoui'] || (aued4$['demoui'] = {}));
})(sr34u$e || (sr34u$e = {})), function (dyhps5) {
  var spqh5y;(function (c_w) {
    var raue4$ = function (a$h4d) {
      sx_ciw($4d5ae, a$h4d);function $4d5ae() {
        return a$h4d['call'](this) || this;
      }return $4d5ae['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), a$h4d['prototype']['createChildren']['call'](this), this['createView'](dyhps5['demoui']['MainUI']['uiView']);
      }, $4d5ae['uiView'] = { 'type': 'View', 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x2ee, 'top': 0x0, 'right': 0x0, 'left': 0x0, 'height': 0x536, 'bottom': 0x0 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x2ee, 'height': 0x536, 'centerY': 0x0 }, 'child': [{ 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x2ee, 'var': 'bg', 'height': 0x536 }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x2ee, 'visible': ![], 'var': 'box_1_show', 'height': 0x536, 'centerY': 0x0 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x253, 'x': 0x2e, 'width': 0x1d0, 'var': 'box_1_lab_info', 'leading': 0xa, 'height': 0x97, 'fontSize': 0x18, 'color': '#a959ee' } }, { 'type': 'HBox', 'props': { 'y': 0x2ee, 'x': 0x14, 'width': 0x1fe, 'space': 0x35, 'height': 0x78, 'align': 'top' }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x58, 'var': 'box_1_img_1', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_1', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0xa, 'x': 0xa, 'width': 0x58, 'var': 'box_1_img_2', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_2', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x14, 'x': 0x14, 'width': 0x58, 'var': 'box_1_img_3', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_3', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x1e, 'x': 0x1e, 'width': 0x58, 'var': 'box_1_img_4', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_4', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }] }] }, { 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'visible': ![], 'var': 'box_2_show' }, 'child': [{ 'type': 'HBox', 'props': { 'y': 0x220, 'x': 0x18, 'width': 0x1f4, 'space': 0x2c, 'height': 0x56, 'align': 'top' }, 'child': [{ 'type': 'Image', 'props': { 'y': 2.5, 'x': 0x0, 'width': 0x58, 'var': 'box_2_img_1', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_1', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0xc, 'x': 0xa, 'width': 0x58, 'var': 'box_2_img_2', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_2', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x16, 'x': 0x14, 'width': 0x58, 'var': 'box_2_img_3', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_3', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x20, 'x': 0x1e, 'width': 0x58, 'var': 'box_2_img_4', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_4', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x2a, 'x': 0x28, 'width': 0x58, 'var': 'box_2_img_5', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_5', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }] }, { 'type': 'Box', 'props': { 'y': 0x384, 'x': 0x0, 'width': 0x221, 'height': 0x44 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x0, 'x': 0x28, 'width': 0x122, 'var': 'box_2_lab_m_1', 'text': '方法一\uFF1A单日充值1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300' } }, { 'type': 'Text', 'props': { 'y': 0x1e, 'x': 0x28, 'width': 0x122, 'var': 'box_2_lab_m_2', 'text': '方法一\uFF1A历史累计充值1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300' } }, { 'type': 'Text', 'props': { 'y': 0x0, 'x': 0x141, 'width': 0xa4, 'var': 'box_2_lab_v_1', 'text': '1000/1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300', 'align': 'right' } }, { 'type': 'Text', 'props': { 'y': 0x1e, 'x': 0x141, 'width': 0xa4, 'var': 'box_2_lab_v_2', 'text': '1000/1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300', 'align': 'right' } }] }, { 'type': 'Image', 'props': { 'y': 0x1aa, 'x': 0x159, 'width': 0x66, 'var': 'box_2_btn_get', 'stateNum': 0x1, 'height': 0x26 } }, { 'type': 'Image', 'props': { 'y': 0x1aa, 'x': 0x159, 'width': 0x66, 'var': 'box_2_btn_copy', 'stateNum': 0x1, 'height': 0x26 } }, { 'type': 'Button', 'props': { 'y': 0x1d2, 'x': 0x126, 'width': 0xc9, 'var': 'box_2_addclick', 'stateNum': 0x1, 'height': 0x1b } }, { 'type': 'Text', 'props': { 'y': 0x13c, 'x': 0x17a, 'width': 0xa3, 'var': 'box_2_lab_wx', 'height': 0x1f, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'left' } }] }, { 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'visible': ![], 'var': 'box_3_show' }, 'child': [{ 'type': 'Panel', 'props': { 'y': 0xf5, 'x': 0x10, 'width': 0x201, 'var': 'box_3_panel', 'vScrollBarSkin': '', 'height': 0x29e } }] }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0x0, 'width': 0xbb, 'var': 'btn_1', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0xba, 'width': 0xbb, 'var': 'btn_2', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0x177, 'width': 0xbb, 'var': 'btn_3', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x203, 'x': 0x22e, 'width': 0x25, 'var': 'btn_close', 'height': 0x8f } }, { 'type': 'Box', 'props': { 'width': 0x2ee, 'visible': ![], 'var': 'box_help', 'height': 0x536 }, 'child': [{ 'type': 'Sprite', 'props': { 'y': 0x0, 'x': 0x0, 'mouseThrough': ![], 'alpha': 0.7 }, 'child': [{ 'type': 'Rect', 'props': { 'width': 0x2ee, 'lineWidth': 0x1, 'height': 0x536, 'fillColor': '#000000' } }] }, { 'type': 'Image', 'props': { 'y': 0x158, 'x': 0x28, 'width': 0x1d2, 'var': 'box_help_bg', 'height': 0x203 }, 'child': [{ 'type': 'Button', 'props': { 'y': -0x1, 'x': 0x1a0, 'width': 0x33, 'var': 'box_help_close', 'height': 0x28 } }, { 'type': 'Image', 'props': { 'y': 0x3f, 'x': 0x98, 'width': 0xa0, 'var': 'box_help_qrcode', 'height': 0xa0 } }] }] }] }] }] }, $4d5ae;
    }(laya['ui']['View']);c_w['MainUI'] = raue4$;
  })(spqh5y = dyhps5['demoui'] || (dyhps5['demoui'] = {}));
}(sr34u$e || (sr34u$e = {})), function (f86l) {
  var wkoz9v;(function (had5y$) {
    var yps5d = function (o3rzuv) {
      sx_ciw(tnx2, o3rzuv);function tnx2() {
        return o3rzuv['call'](this) || this;
      }return tnx2['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), o3rzuv['prototype']['createChildren']['call'](this), this['createView'](f86l['demoui']['ToastUI']['uiView']);
      }, tnx2['uiView'] = { 'type': 'View', 'props': { 'width': 0x2ee, 'height': 0x536 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x12c, 'height': 0x32, 'centerY': 0x0, 'centerX': 0x0 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x12c, 'height': 0x32, 'centerX': 0x0, 'alpha': 0.5 }, 'child': [{ 'type': 'Rect', 'props': { 'width': 0x12c, 'lineWidth': 0x1, 'height': 0x32, 'fillColor': '#382f2f' } }] }, { 'type': 'Text', 'props': { 'width': 0x12c, 'var': 'lab_msg', 'valign': 'middle', 'text': 'text', 'height': 0x32, 'fontSize': 0x18, 'color': '#ffffff', 'align': 'center' } }] }] }, tnx2;
    }(laya['ui']['View']);had5y$['ToastUI'] = yps5d;
  })(wkoz9v = f86l['demoui'] || (f86l['demoui'] = {}));
}(sr34u$e || (sr34u$e = {}));var sgpj1sq = function () {
  function tmixn() {}return tmixn['init'] = function () {
    !this['ui'] && (this['ui'] = new sr34u$e['demoui']['ToastUI'](), this['ui']['visible'] = ![], Laya['stage']['addChild'](this['ui']));
  }, tmixn['msg'] = function (j1pq) {
    var days5h = this;!this['ui'] && tmixn['init'](), this['ui']['visible'] = !![], this['ui']['lab_msg']['text'] = j1pq, clearTimeout(this['interval']), this['interval'] = setTimeout(function () {
      days5h['ui']['visible'] = ![];
    }, 0x7d0);
  }, tmixn;
}();window['minitool'] = sbl8j1;