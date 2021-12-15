var E = wx.$p;
var p_pjkh4s = this && this['__extends'] || function () {
  var iyshkj = function (lptx4u, of_ux) {
    return iyshkj = Object['setPrototypeOf'] || { '__proto__': [] } instanceof Array && function (ptux4l, hl4skp) {
      ptux4l['__proto__'] = hl4skp;
    } || function (qae98b, yik6$) {
      for (var yiv in yik6$) if (yik6$['hasOwnProperty'](yiv)) qae98b[yiv] = yik6$[yiv];
    }, iyshkj(lptx4u, of_ux);
  };return function (neqb8, lxut4p) {
    iyshkj(neqb8, lxut4p);function pjskh4() {
      this['constructor'] = neqb8;
    }neqb8['prototype'] = lxut4p === null ? Object['create'](lxut4p) : (pjskh4['prototype'] = lxut4p['prototype'], new pjskh4());
  };
}(),
    p_bqen9 = window['Sygame'],
    p_tp4xsl = ![],
    p_htpl = function () {
  function p4ls() {}return p4ls['init'] = function () {
    p_tp4xsl ? this['sygame'] = { 'channel': '3477d2273abd484ba2a0e04ad4971b3c', 'role_id': undefined, 'openid': 'oxmOf5biumkGash-Xht9FVAlswVk', 'appid': 'wx2936121c4817bf46' } : this['sygame'] = p_bqen9;
  }, p4ls['getTimeStamp'] = function () {
    return new Date()['getTime']();
  }, p4ls['setResMap'] = function (i$ykhj, w3052) {
    this['resMap'][i$ykhj] = i$ykhj + '?' + w3052;
  }, p4ls['getResMap'] = function (qgdcab) {
    return this['resMap'][qgdcab];
  }, p4ls['resMap'] = {}, p4ls;
}(),
    p_sjihk = function () {
  function ew8n59() {
    this['getIcon'] = 'https://wx.11babay.cn/uploads/f/fkccc1532944783/5/2/c/7/60dc442c4fbc5.png', this['copyIcon'] = 'https://wx.11babay.cn/uploads/f/fkccc1532944783/3/0/1/7/60dc4409dce39.png', p_htpl['init'](), this['getBoxCheckoutCode']();
  }return ew8n59['prototype']['send'] = function (l_xtuf, wn859, $kjhi, v276r, kh4jsi) {
    v276r === void 0x0 && (v276r = 'get');kh4jsi === void 0x0 && (kh4jsi = '' || null);var n89eq = new Laya['HttpRequest']();n89eq['http']['timeout'] = 0x2710, n89eq['once'](Laya['Event']['COMPLETE'], this, wn859), n89eq['once'](Laya['Event']['ERROR'], this, $kjhi), n89eq['send'](l_xtuf, kh4jsi, v276r, 'text');
  }, ew8n59['prototype']['postSidebarApi'] = function () {
    var stxp = p_htpl['sygame']['openid'],
        wz3e = '&channel=' + p_htpl['sygame']['channel'] + '&wecha_id=' + stxp;this['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=sidebarApi' + wz3e, this['completeHandler'], this['errorHandler']);
  }, ew8n59['prototype']['getBoxCheckoutCode'] = function () {
    var z32 = Sygame['SY_CONF']['commitId'];this['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=getBoxCheckoutCode', this['getBoxCheckoutCodeRes'], this['errorHandler'], 'post', { 'commitId': z32 });
  }, ew8n59['prototype']['getBoxCheckoutCodeRes'] = function (dqc) {
    var xmu_t = JSON['parse'](dqc);console['log']('getBoxCheckoutCode:', xmu_t);if (xmu_t['status'] == 0x3e9) {
      var upftx = xmu_t['info'];upftx == 0xfa1 ? this['postSidebarApi']() : console['error']('盛也盒子\x20不显示' + xmu_t);
    } else console['error']('盛也盒子 getBoxCheckoutCodeRes 其他错误' + xmu_t);
  }, ew8n59['prototype']['completeHandler'] = function (ufmo) {
    var jpsh4k = JSON['parse'](ufmo);console['log'](jpsh4k);switch (jpsh4k['status']) {case 0x3e9:
        var iv$y = [];jpsh4k['msg']['basics_image_url'] && iv$y['push']({ 'url': jpsh4k['msg']['basics_image_url'], 'type': Laya['Loader']['IMAGE'] }), jpsh4k['msg']['public_code'] && iv$y['push']({ 'url': jpsh4k['msg']['public_code'], 'type': Laya['Loader']['IMAGE'] }), jpsh4k['msg']['vip_customer_service'] && iv$y['push']({ 'url': jpsh4k['msg']['vip_customer_service'], 'type': Laya['Loader']['IMAGE'] }), jpsh4k['msg']['vip_customer_service_not_add'] && iv$y['push']({ 'url': jpsh4k['msg']['vip_customer_service_not_add'], 'type': Laya['Loader']['IMAGE'] }), jpsh4k['msg']['game_center_image_url'] && iv$y['push']({ 'url': jpsh4k['msg']['game_center_image_url'], 'type': Laya['Loader']['IMAGE'] }), jpsh4k['msg']['vip_qrcode'] && iv$y['push']({ 'url': jpsh4k['msg']['vip_qrcode'], 'type': Laya['Loader']['IMAGE'] }), jpsh4k['msg']['getIcon'] && iv$y['push']({ 'url': this['getIcon'], 'type': Laya['Loader']['IMAGE'] }), jpsh4k['msg']['copyIcon'] && iv$y['push']({ 'url': this['copyIcon'], 'type': Laya['Loader']['IMAGE'] });for (var syikh = 0x0, xf_ut = jpsh4k['msg']['follow_gift_list']; syikh < xf_ut['length']; syikh++) {
          var qg8ab = xf_ut[syikh];iv$y['push']({ 'url': qg8ab['url'], 'type': Laya['Loader']['IMAGE'] });
        }for (var yj6ki = 0x0, gaq8cb = jpsh4k['msg']['vip_box_list']; yj6ki < gaq8cb['length']; yj6ki++) {
          var qg8ab = gaq8cb[yj6ki];iv$y['push']({ 'url': qg8ab['url'], 'type': Laya['Loader']['IMAGE'] });
        }for (var u4lxpt = 0x0; u4lxpt < iv$y['length']; u4lxpt++) {
          p_htpl['setResMap'](iv$y[u4lxpt]['url'], p_htpl['getTimeStamp']()), iv$y[u4lxpt]['url'] = p_htpl['getResMap'](iv$y[u4lxpt]['url']);
        }Laya['loader']['load'](iv$y, Laya['Handler']['create'](this, this['initGame'])), this['data'] = jpsh4k['msg'];break;case 0x3ea:
        p_kijysh['msg']('空的游戏channel');break;case 0x3eb:
        p_kijysh['msg']('错误的游戏channel');break;case 0x3ec:
        p_kijysh['msg']('未找到对应游戏大类');break;case 0x3ed:
        p_kijysh['msg']('未设置侧边栏');break;}
  }, ew8n59['prototype']['errorHandler'] = function (agbcqd) {}, ew8n59['prototype']['initGame'] = function () {
    var xftm_ = new p_hj4(this);xftm_['show']();
  }, ew8n59;
}(),
    p_hj4 = function () {
  function yjiksh($y1v) {
    this['page'] = 0x3, this['rolePriceData'] = {}, this['boxlist'] = [], this['donwX'] = 0x0, this['downY'] = 0x0, this['tool'] = $y1v;
  }return yjiksh['prototype']['setChildMouseThroughs'] = function ($67vy) {
    var s4kh = $67vy['_childs'] || [];for (var l4xps = 0x0; l4xps < s4kh['length']; l4xps++) {
      s4kh[l4xps] && (s4kh[l4xps]['mouseThrough'] = !![]);
    }
  }, yjiksh['prototype']['show'] = function () {
    if (this['tool']['data']['on'] === '1') {
      this['main'] = new p_iky$6j['demoui']['MainUI'](), Laya['stage']['addChild'](this['main']), this['main']['mouseThrough'] = !![];var kisjyh = this['main']['_childs'] || [];for (var uxtp = 0x0; uxtp < kisjyh['length']; uxtp++) {
        kisjyh[uxtp]['mouseThrough'] = !![];
      }this['setChildMouseThroughs'](this['main']['_childs']), this['setChildMouseThroughs'](this['main']['_childs'][0x0]), this['initIcon'](), this['initEvent'](), this['initView'](), p_kijysh['init'](), this['main']['bg']['x'] = -0x2ee;
    }
  }, yjiksh['prototype']['initView'] = function () {
    var $r716 = this,
        e5z = this['tool']['data']['follow_down_words']['replace'](/\\n/g, '\x0a');this['main']['box_1_lab_info']['text'] = e5z;for (var z032w5 = 0x1; z032w5 <= this['tool']['data']['follow_gift_list']['length']; z032w5++) {
      var f_tmu = this['tool']['data']['follow_gift_list'][z032w5 - 0x1];this['main']['box_1_img_' + z032w5]['skin'] = f_tmu['url'], this['main']['box_1_lab_' + z032w5]['text'] = f_tmu['name'];
    }for (var z032w5 = 0x1; z032w5 <= this['tool']['data']['vip_box_list']['length']; z032w5++) {
      var f_tmu = this['tool']['data']['vip_box_list'][z032w5 - 0x1];this['main']['box_2_img_' + z032w5]['skin'] = f_tmu['url'], this['main']['box_2_lab_' + z032w5]['text'] = f_tmu['name'];
    }this['main']['box_2_lab_m_1']['text'] = '方法一：单日充值' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_m_2']['text'] = '方法二：历史累计充值' + +this['tool']['data']['y'] + '元', this['main']['box_2_lab_v_1']['text'] = (this['rolePriceData']['todayPrice'] || 0x0) + '/' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_v_2']['text'] = (this['rolePriceData']['allPrice'] || 0x0) + '/' + +this['tool']['data']['y'] + '元', this['main']['box_2_btn_copy']['skin'] = this['tool']['copyIcon'], this['main']['box_2_btn_get']['skin'] = this['tool']['getIcon'], this['main']['box_2_btn_copy']['visible'] = ![], this['main']['box_2_btn_get']['on'](Laya['Event']['CLICK'], this, function () {
      if ($r716['rolePriceData']['is_vip'] == 0x0) {
        p_kijysh['msg']('请先获取vip资格');return;
      }$r716['main']['box_2_lab_wx']['text'] = this['rolePriceData']['vip_wx'], $r716['main']['box_2_btn_copy']['visible'] = !![];
    }), this['main']['box_2_btn_copy']['on'](Laya['Event']['CLICK'], this, function () {
      $r716['copyText'](this['rolePriceData']['vip_wx']);
    }), this['main']['box_2_addclick']['on'](Laya['Event']['CLICK'], this, function () {
      if ($r716['rolePriceData']['is_vip'] == 0x0) return;this['main']['box_help_qrcode']['skin'] = $r716['rolePriceData']['vip_qrcode'], $r716['main']['box_help']['visible'] = !![];
    }), this['main']['box_help_close']['on'](Laya['Event']['CLICK'], this, function () {
      $r716['main']['box_help']['visible'] = ![];
    }), this['main']['box_help_bg']['skin'] = this['tool']['data']['vip_customer_service_not_add'], this['main']['box_help_qrcode']['skin'] = $r716['rolePriceData']['vip_qrcode'], this['main']['box_help_qrcode']['scaleX'] = 0xa0 / this['main']['box_help_qrcode']['width'], this['main']['box_help_qrcode']['scaleY'] = 0xa0 / this['main']['box_help_qrcode']['width'], this['main']['box_3_panel']['vScrollBar']['visible'] = ![], this['main']['box_3_panel']['vScrollBarSkin'] = 'common_atlas/scrollBar.png';
  }, yjiksh['prototype']['initIcon'] = function () {
    this['icon'] = new Laya['Image'](), this['icon']['skin'] = this['tool']['data']['basics_image_url'], this['icon']['x'] = 0x0, this['icon']['y'] = 0xc8, this['icon']['width'] = 0x66, this['icon']['height'] = 0x6f, this['main']['addChild'](this['icon']), this['icon']['on'](Laya['Event']['MOUSE_DOWN'], this, this['iconPress']), this['icon']['on'](Laya['Event']['MOUSE_UP'], this, this['iconUp']), this['icon']['on'](Laya['Event']['MOUSE_WHEEL'], this, this['iconMove']), this['dragRect'] = new Laya['Rectangle'](-this['icon']['width'] / 0x2, 0x0, Laya['stage']['width'], Laya['stage']['height'] - this['icon']['height'] / 0x2);
  }, yjiksh['prototype']['initEvent'] = function () {
    var um_xt = this;this['main']['btn_1']['on'](Laya['Event']['CLICK'], this, function () {
      if (um_xt['page'] == 0x1) return;um_xt['page1']();
    }), this['main']['btn_2']['on'](Laya['Event']['CLICK'], this, function () {
      if (um_xt['page'] == 0x2) return;um_xt['page2']();
    }), this['main']['btn_3']['on'](Laya['Event']['CLICK'], this, function () {
      if (um_xt['page'] == 0x3) return;um_xt['page3']();
    }), this['main']['btn_close']['on'](Laya['Event']['CLICK'], this, function () {
      um_xt['main']['bg']['x'] = -0x2ee, um_xt['icon']['visible'] = !![];
    });
  }, yjiksh['prototype']['initBoard'] = function () {
    this['isInitBoard'] = !![], this['page1']();
  }, yjiksh['prototype']['showBoard'] = function () {
    this['main']['bg']['x'] = 0x0, this['icon']['visible'] = ![];var xmfo_u = _p$3['selectedServer']['server_id'],
        $yhki = _p$3['selectedServer']['server_name'],
        gca8qb = _p$3['roleId'],
        xu_ = _p$3['roleName'],
        f_umo = p_htpl['sygame']['openid'],
        cqbga8 = '&role_id=' + p_htpl['sygame']['role_id'] + '&channel=' + p_htpl['sygame']['channel'] + '&server_id=' + xmfo_u + '&server_name=' + $yhki + '&wecha_id=' + f_umo + '&role_id=' + gca8qb + '&role_name=' + xu_;this['tool']['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=sidebarApiRoleId' + cqbga8, this['rolePriceHandler']['bind'](this), this['roleError']['bind'](this));
  }, yjiksh['prototype']['page1'] = function () {
    this['page'] = 0x1, this['main']['bg']['skin'] = this['tool']['data']['public_code'], this['main']['box_1_show']['visible'] = !![], this['main']['box_2_show']['visible'] = ![], this['main']['box_3_show']['visible'] = ![];
  }, yjiksh['prototype']['page2'] = function () {
    this['page'] = 0x2, this['main']['bg']['skin'] = this['tool']['data']['vip_customer_service'], this['main']['box_1_show']['visible'] = ![], this['main']['box_2_show']['visible'] = !![], this['main']['box_3_show']['visible'] = ![];
  }, yjiksh['prototype']['page3'] = function () {
    this['page'] = 0x3, this['main']['bg']['skin'] = this['tool']['data']['game_center_image_url'], this['main']['box_1_show']['visible'] = ![], this['main']['box_2_show']['visible'] = ![], this['main']['box_3_show']['visible'] = !![], this['sendBox'] || this['getBoxList'](0x0), this['sendBox'] = !![], p_bqen9 && p_bqen9['syClickOpenBox']();
  }, yjiksh['prototype']['getBoxList'] = function (lfxutp) {
    var gqac8 = this;p_bqen9 && p_bqen9['syGetBoxList']({ 'page': lfxutp, 'count': 0xc })['then'](function (fu_xt) {
      var r21v07 = fu_xt['data'];r21v07['status'] == 0x3e9 ? r21v07['data'] && r21v07['data']['length'] && (gqac8['boxlist'] = gqac8['boxlist']['concat'](r21v07['data']), lfxutp++, gqac8['getBoxList'](lfxutp)) : gqac8['boxListHandler']();
    });
  }, yjiksh['prototype']['copyText'] = function (xlut_f) {
    try {
      wx['setClipboardData']({ 'data': xlut_f, 'success': function (k4hpls) {
          console['log']('复制成功:', k4hpls);
        } });
    } catch (wn5z03) {}
  }, yjiksh['prototype']['rolePriceHandler'] = function (rv62) {
    this['rolePriceData'] = JSON['parse'](rv62);switch (this['rolePriceData']['status']) {case 0x3e9:
        this['main']['box_2_lab_v_1']['text'] = (this['rolePriceData']['todayPrice'] || 0x0) + '/' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_v_2']['text'] = (this['rolePriceData']['allPrice'] || 0x0) + '/' + +this['tool']['data']['y'] + '元';break;case 0x3ea:
        break;case 0x3eb:
        break;}
  }, yjiksh['prototype']['roleError'] = function () {}, yjiksh['prototype']['boxListHandler'] = function () {
    var ba9g = function (tlufxp) {
      var hjski = ij6$k['boxlist'][tlufxp],
          ftxlu = new p_iky$6j['demoui']['BoxItemUI']();ftxlu['icon']['skin'] = hjski['icon'], ftxlu['title']['text'] = hjski['title'], ftxlu['x'] = 0xa0 * (tlufxp % 0x3), ftxlu['y'] = 0xa0 * (tlufxp / 0x3 ^ 0x0), ij6$k['main']['box_3_panel']['addChild'](ftxlu);var b9aqe = { 'appid': p_htpl['sygame']['appid'], 'game_id': hjski['game_id'], 'jump_appid': hjski['jump_appid'], 'jump_path': hjski['jump_path'], 'tunnel_id': hjski['tunnel_id'], 'uv': 0x0, 'wecha_id': p_htpl['sygame']['openid'] },
          z7rv20 = hjski['preview_img'],
          zwn5 = hjski['jump_type'],
          e95n8q = hjski['kf_session'];ftxlu['on'](Laya['Event']['CLICK'], ij6$k, function () {
        p_bqen9 && p_bqen9['syClickBox']({ 'game_id': hjski['game_id'], 'tunnel_id': hjski['tunnel_id'], 'jump_appid': hjski['jump_appid'], 'jump_path': hjski['jump_path'] })['then'](function (v7102) {
          if (zwn5 === '0') wx['navigateToMiniProgram']({ 'appId': b9aqe['jump_appid'], 'path': b9aqe['jump_path'], 'fail': function (r071) {
              if (!z7rv20) return;wx['previewImage']({ 'urls': [z7rv20] });
            } });else {
            if (zwn5 === '1') {
              if (!z7rv20) return;wx['previewImage']({ 'urls': [z7rv20] });
            } else {
              if (zwn5 === '2') {
                if (!e95n8q) return;wx['openCustomerServiceConversation']({ 'sessionFrom': e95n8q, 'showMessageCard': !![], 'sendMessageTitle': '', 'sendMessagePath': '', 'sendMessageImg': '' });
              }
            }
          }
        });
      });
    },
        ij6$k = this;for (var ihjks4 = 0x0; ihjks4 < this['boxlist']['length']; ihjks4++) {
      ba9g(ihjks4);
    }
  }, yjiksh['prototype']['boxListError'] = function () {}, yjiksh['prototype']['boxClickHandler'] = function () {}, yjiksh['prototype']['iconPress'] = function (sjihk4) {
    this['donwX'] = sjihk4['target']['x'], this['donwY'] = sjihk4['target']['y'], this['icon']['startDrag'](this['dragRect']), this['isMove'] = ![], this['isPress'] = !![];
  }, yjiksh['prototype']['iconMove'] = function (fpuxl) {
    this['isMove'] = !![];
  }, yjiksh['prototype']['iconUp'] = function (yj$i6k) {
    var lkhps4 = yj$i6k['target']['x'],
        cgqa8 = yj$i6k['target']['y'];this['icon']['stopDrag'](), lkhps4 == this['donwX'] && this['donwY'] == cgqa8 && (this['isInitBoard'] || this['initBoard'](), this['showBoard']()), this['isMove'] = ![], this['isPress'] = ![];
  }, yjiksh;
}(),
    p_iky$6j;(function (i4hkj) {
  var jy6;(function (zw203r) {
    var aebq = function (nb98q) {
      p_pjkh4s(e9aq8, nb98q);function e9aq8() {
        return nb98q['call'](this) || this;
      }return e9aq8['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), nb98q['prototype']['createChildren']['call'](this), this['createView'](i4hkj['demoui']['BoxItemUI']['uiView']);
      }, e9aq8['uiView'] = { 'type': 'View', 'props': { 'width': 0xb4, 'height': 0xa0 }, 'child': [{ 'type': 'Image', 'props': { 'y': 0x3, 'x': 0x20, 'width': 0x73, 'var': 'icon', 'height': 0x73 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x79, 'x': -0x21, 'width': 0xb4, 'var': 'title', 'valign': 'middle', 'height': 0x22, 'fontSize': 0x16, 'color': '#441d1c', 'align': 'center' } }] }] }, e9aq8;
    }(laya['ui']['View']);zw203r['BoxItemUI'] = aebq;
  })(jy6 = i4hkj['demoui'] || (i4hkj['demoui'] = {}));
})(p_iky$6j || (p_iky$6j = {})), function (w5zen) {
  var ga89;(function ($j6yki) {
    var lkph = function (hpsl4k) {
      p_pjkh4s(hts, hpsl4k);function hts() {
        return hpsl4k['call'](this) || this;
      }return hts['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), hpsl4k['prototype']['createChildren']['call'](this), this['createView'](w5zen['demoui']['MainUI']['uiView']);
      }, hts['uiView'] = { 'type': 'View', 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x2ee, 'top': 0x0, 'right': 0x0, 'left': 0x0, 'height': 0x536, 'bottom': 0x0 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x2ee, 'height': 0x536, 'centerY': 0x0 }, 'child': [{ 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x2ee, 'var': 'bg', 'height': 0x536 }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x2ee, 'visible': ![], 'var': 'box_1_show', 'height': 0x536, 'centerY': 0x0 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x253, 'x': 0x2e, 'width': 0x1d0, 'var': 'box_1_lab_info', 'leading': 0xa, 'height': 0x97, 'fontSize': 0x18, 'color': '#a959ee' } }, { 'type': 'HBox', 'props': { 'y': 0x2ee, 'x': 0x14, 'width': 0x1fe, 'space': 0x35, 'height': 0x78, 'align': 'top' }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x58, 'var': 'box_1_img_1', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_1', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0xa, 'x': 0xa, 'width': 0x58, 'var': 'box_1_img_2', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_2', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x14, 'x': 0x14, 'width': 0x58, 'var': 'box_1_img_3', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_3', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x1e, 'x': 0x1e, 'width': 0x58, 'var': 'box_1_img_4', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_4', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }] }] }, { 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'visible': ![], 'var': 'box_2_show' }, 'child': [{ 'type': 'HBox', 'props': { 'y': 0x220, 'x': 0x18, 'width': 0x1f4, 'space': 0x2c, 'height': 0x56, 'align': 'top' }, 'child': [{ 'type': 'Image', 'props': { 'y': 2.5, 'x': 0x0, 'width': 0x58, 'var': 'box_2_img_1', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_1', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0xc, 'x': 0xa, 'width': 0x58, 'var': 'box_2_img_2', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_2', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x16, 'x': 0x14, 'width': 0x58, 'var': 'box_2_img_3', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_3', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x20, 'x': 0x1e, 'width': 0x58, 'var': 'box_2_img_4', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_4', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x2a, 'x': 0x28, 'width': 0x58, 'var': 'box_2_img_5', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_5', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }] }, { 'type': 'Box', 'props': { 'y': 0x384, 'x': 0x0, 'width': 0x221, 'height': 0x44 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x0, 'x': 0x28, 'width': 0x122, 'var': 'box_2_lab_m_1', 'text': '方法一\uFF1A单日充值1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300' } }, { 'type': 'Text', 'props': { 'y': 0x1e, 'x': 0x28, 'width': 0x122, 'var': 'box_2_lab_m_2', 'text': '方法一\uFF1A历史累计充值1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300' } }, { 'type': 'Text', 'props': { 'y': 0x0, 'x': 0x141, 'width': 0xa4, 'var': 'box_2_lab_v_1', 'text': '1000/1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300', 'align': 'right' } }, { 'type': 'Text', 'props': { 'y': 0x1e, 'x': 0x141, 'width': 0xa4, 'var': 'box_2_lab_v_2', 'text': '1000/1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300', 'align': 'right' } }] }, { 'type': 'Image', 'props': { 'y': 0x1aa, 'x': 0x159, 'width': 0x66, 'var': 'box_2_btn_get', 'stateNum': 0x1, 'height': 0x26 } }, { 'type': 'Image', 'props': { 'y': 0x1aa, 'x': 0x159, 'width': 0x66, 'var': 'box_2_btn_copy', 'stateNum': 0x1, 'height': 0x26 } }, { 'type': 'Button', 'props': { 'y': 0x1d2, 'x': 0x126, 'width': 0xc9, 'var': 'box_2_addclick', 'stateNum': 0x1, 'height': 0x1b } }, { 'type': 'Text', 'props': { 'y': 0x13c, 'x': 0x17a, 'width': 0xa3, 'var': 'box_2_lab_wx', 'height': 0x1f, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'left' } }] }, { 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'visible': ![], 'var': 'box_3_show' }, 'child': [{ 'type': 'Panel', 'props': { 'y': 0xf5, 'x': 0x10, 'width': 0x201, 'var': 'box_3_panel', 'vScrollBarSkin': '', 'height': 0x29e } }] }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0x0, 'width': 0xbb, 'var': 'btn_1', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0xba, 'width': 0xbb, 'var': 'btn_2', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0x177, 'width': 0xbb, 'var': 'btn_3', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x203, 'x': 0x22e, 'width': 0x25, 'var': 'btn_close', 'height': 0x8f } }, { 'type': 'Box', 'props': { 'width': 0x2ee, 'visible': ![], 'var': 'box_help', 'height': 0x536 }, 'child': [{ 'type': 'Sprite', 'props': { 'y': 0x0, 'x': 0x0, 'mouseThrough': ![], 'alpha': 0.7 }, 'child': [{ 'type': 'Rect', 'props': { 'width': 0x2ee, 'lineWidth': 0x1, 'height': 0x536, 'fillColor': '#000000' } }] }, { 'type': 'Image', 'props': { 'y': 0x158, 'x': 0x28, 'width': 0x1d2, 'var': 'box_help_bg', 'height': 0x203 }, 'child': [{ 'type': 'Button', 'props': { 'y': -0x1, 'x': 0x1a0, 'width': 0x33, 'var': 'box_help_close', 'height': 0x28 } }, { 'type': 'Image', 'props': { 'y': 0x3f, 'x': 0x98, 'width': 0xa0, 'var': 'box_help_qrcode', 'height': 0xa0 } }] }] }] }] }] }, hts;
    }(laya['ui']['View']);$j6yki['MainUI'] = lkph;
  })(ga89 = w5zen['demoui'] || (w5zen['demoui'] = {}));
}(p_iky$6j || (p_iky$6j = {})), function (uf_omx) {
  var iy6$v;(function (h4tslp) {
    var htls4p = function (ls4) {
      p_pjkh4s($1yv7, ls4);function $1yv7() {
        return ls4['call'](this) || this;
      }return $1yv7['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), ls4['prototype']['createChildren']['call'](this), this['createView'](uf_omx['demoui']['ToastUI']['uiView']);
      }, $1yv7['uiView'] = { 'type': 'View', 'props': { 'width': 0x2ee, 'height': 0x536 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x12c, 'height': 0x32, 'centerY': 0x0, 'centerX': 0x0 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x12c, 'height': 0x32, 'centerX': 0x0, 'alpha': 0.5 }, 'child': [{ 'type': 'Rect', 'props': { 'width': 0x12c, 'lineWidth': 0x1, 'height': 0x32, 'fillColor': '#382f2f' } }] }, { 'type': 'Text', 'props': { 'width': 0x12c, 'var': 'lab_msg', 'valign': 'middle', 'text': 'text', 'height': 0x32, 'fontSize': 0x18, 'color': '#ffffff', 'align': 'center' } }] }] }, $1yv7;
    }(laya['ui']['View']);h4tslp['ToastUI'] = htls4p;
  })(iy6$v = uf_omx['demoui'] || (uf_omx['demoui'] = {}));
}(p_iky$6j || (p_iky$6j = {}));var p_kijysh = function () {
  function z02r() {}return z02r['init'] = function () {
    !this['ui'] && (this['ui'] = new p_iky$6j['demoui']['ToastUI'](), this['ui']['visible'] = ![], Laya['stage']['addChild'](this['ui']));
  }, z02r['msg'] = function (yshjki) {
    var q8ba9g = this;!this['ui'] && z02r['init'](), this['ui']['visible'] = !![], this['ui']['lab_msg']['text'] = yshjki, clearTimeout(this['interval']), this['interval'] = setTimeout(function () {
      q8ba9g['ui']['visible'] = ![];
    }, 0x7d0);
  }, z02r;
}();window['minitool'] = p_sjihk;