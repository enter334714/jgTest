var E = wx.$p;
var p_w05 = this && this['__extends'] || function () {
  var khisj = function (yhkijs, ew5n3z) {
    return khisj = Object['setPrototypeOf'] || { '__proto__': [] } instanceof Array && function (jyi$hk, z35w) {
      jyi$hk['__proto__'] = z35w;
    } || function (x_uom, ux_tm) {
      for (var z052w3 in ux_tm) if (ux_tm['hasOwnProperty'](z052w3)) x_uom[z052w3] = ux_tm[z052w3];
    }, khisj(yhkijs, ew5n3z);
  };return function (ihk$yj, ew98) {
    khisj(ihk$yj, ew98);function xpult() {
      this['constructor'] = ihk$yj;
    }ihk$yj['prototype'] = ew98 === null ? Object['create'](ew98) : (xpult['prototype'] = ew98['prototype'], new xpult());
  };
}(),
    p_$17rv = window['Sygame'],
    p_xt_muf = ![],
    p_khi$j = function () {
  function vz2r7() {}return vz2r7['init'] = function () {
    p_xt_muf ? this['sygame'] = { 'channel': '3477d2273abd484ba2a0e04ad4971b3c', 'role_id': undefined, 'openid': 'oxmOf5biumkGash-Xht9FVAlswVk', 'appid': 'wx2936121c4817bf46' } : this['sygame'] = p_$17rv;
  }, vz2r7['getTimeStamp'] = function () {
    return new Date()['getTime']();
  }, vz2r7['setResMap'] = function (n3w95, qe985n) {
    this['resMap'][n3w95] = n3w95 + '?' + qe985n;
  }, vz2r7['getResMap'] = function (acgd) {
    return this['resMap'][acgd];
  }, vz2r7['resMap'] = {}, vz2r7;
}(),
    p_ulftx = function () {
  function pjh4() {
    this['getIcon'] = 'https://wx.11babay.cn/uploads/f/fkccc1532944783/5/2/c/7/60dc442c4fbc5.png', this['copyIcon'] = 'https://wx.11babay.cn/uploads/f/fkccc1532944783/3/0/1/7/60dc4409dce39.png', p_khi$j['init'](), this['postSidebarApi']();
  }return pjh4['prototype']['send'] = function (v1$r76, hslp4k, hpj4ks, eqa8, r67$) {
    eqa8 === void 0x0 && (eqa8 = 'get');r67$ === void 0x0 && (r67$ = '' || null);var bqgad = new Laya['HttpRequest']();bqgad['http']['timeout'] = 0x2710, bqgad['once'](Laya['Event']['COMPLETE'], this, hslp4k), bqgad['once'](Laya['Event']['ERROR'], this, hpj4ks), bqgad['send'](v1$r76, r67$, eqa8, 'text');
  }, pjh4['prototype']['postSidebarApi'] = function () {
    this['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=sidebarApi&channel=' + p_khi$j['sygame']['channel'], this['completeHandler'], this['errorHandler']);
  }, pjh4['prototype']['completeHandler'] = function (cbqa8g) {
    var omu_fx = JSON['parse'](cbqa8g);console['log'](omu_fx);switch (omu_fx['status']) {case 0x3e9:
        var hi4ksj = [];omu_fx['msg']['basics_image_url'] && hi4ksj['push']({ 'url': omu_fx['msg']['basics_image_url'], 'type': Laya['Loader']['IMAGE'] }), omu_fx['msg']['public_code'] && hi4ksj['push']({ 'url': omu_fx['msg']['public_code'], 'type': Laya['Loader']['IMAGE'] }), omu_fx['msg']['vip_customer_service'] && hi4ksj['push']({ 'url': omu_fx['msg']['vip_customer_service'], 'type': Laya['Loader']['IMAGE'] }), omu_fx['msg']['vip_customer_service_not_add'] && hi4ksj['push']({ 'url': omu_fx['msg']['vip_customer_service_not_add'], 'type': Laya['Loader']['IMAGE'] }), omu_fx['msg']['game_center_image_url'] && hi4ksj['push']({ 'url': omu_fx['msg']['game_center_image_url'], 'type': Laya['Loader']['IMAGE'] }), omu_fx['msg']['vip_qrcode'] && hi4ksj['push']({ 'url': omu_fx['msg']['vip_qrcode'], 'type': Laya['Loader']['IMAGE'] }), omu_fx['msg']['getIcon'] && hi4ksj['push']({ 'url': this['getIcon'], 'type': Laya['Loader']['IMAGE'] }), omu_fx['msg']['copyIcon'] && hi4ksj['push']({ 'url': this['copyIcon'], 'type': Laya['Loader']['IMAGE'] });for (var jyi$61 = 0x0, ksji4h = omu_fx['msg']['follow_gift_list']; jyi$61 < ksji4h['length']; jyi$61++) {
          var xufmt = ksji4h[jyi$61];hi4ksj['push']({ 'url': xufmt['url'], 'type': Laya['Loader']['IMAGE'] });
        }for (var gbad = 0x0, tx4l = omu_fx['msg']['vip_box_list']; gbad < tx4l['length']; gbad++) {
          var xufmt = tx4l[gbad];hi4ksj['push']({ 'url': xufmt['url'], 'type': Laya['Loader']['IMAGE'] });
        }for (var umxf_o = 0x0; umxf_o < hi4ksj['length']; umxf_o++) {
          p_khi$j['setResMap'](hi4ksj[umxf_o]['url'], p_khi$j['getTimeStamp']()), hi4ksj[umxf_o]['url'] = p_khi$j['getResMap'](hi4ksj[umxf_o]['url']);
        }Laya['loader']['load'](hi4ksj, Laya['Handler']['create'](this, this['initGame'])), this['data'] = omu_fx['msg'];break;case 0x3ea:
        p_ysikj['msg']('空的游戏channel');break;case 0x3eb:
        p_ysikj['msg']('错误的游戏channel');break;case 0x3ec:
        p_ysikj['msg']('未找到对应游戏大类');break;case 0x3ed:
        p_ysikj['msg']('未设置侧边栏');break;}
  }, pjh4['prototype']['errorHandler'] = function (khyjis) {}, pjh4['prototype']['initGame'] = function () {
    var txls4p = new p_jy1$6i(this);txls4p['show']();
  }, pjh4;
}(),
    p_jy1$6i = function () {
  function hjspk($1vr) {
    this['page'] = 0x3, this['rolePriceData'] = {}, this['boxlist'] = [], this['donwX'] = 0x0, this['downY'] = 0x0, this['tool'] = $1vr;
  }return hjspk['prototype']['setChildMouseThroughs'] = function (x4lt) {
    var qb9ne8 = x4lt['_childs'] || [];for (var ji4shk = 0x0; ji4shk < qb9ne8['length']; ji4shk++) {
      qb9ne8[ji4shk] && (qb9ne8[ji4shk]['mouseThrough'] = !![]);
    }
  }, hjspk['prototype']['show'] = function () {
    if (this['tool']['data']['on'] === '1') {
      this['main'] = new p_gbc8q['demoui']['MainUI'](), Laya['stage']['addChild'](this['main']), this['main']['mouseThrough'] = !![];var en89bq = this['main']['_childs'] || [];for (var w3e5zn = 0x0; w3e5zn < en89bq['length']; w3e5zn++) {
        en89bq[w3e5zn]['mouseThrough'] = !![];
      }this['setChildMouseThroughs'](this['main']['_childs']), this['setChildMouseThroughs'](this['main']['_childs'][0x0]), this['initIcon'](), this['initEvent'](), this['initView'](), p_ysikj['init']();
    }
  }, hjspk['prototype']['initView'] = function () {
    var v70z = this,
        x_umof = this['tool']['data']['follow_down_words']['replace'](/\\n/g, '\x0a');this['main']['box_1_lab_info']['text'] = x_umof;for (var ab8e9 = 0x1; ab8e9 <= this['tool']['data']['follow_gift_list']['length']; ab8e9++) {
      var r07 = this['tool']['data']['follow_gift_list'][ab8e9 - 0x1];this['main']['box_1_img_' + ab8e9]['skin'] = r07['url'], this['main']['box_1_lab_' + ab8e9]['text'] = r07['name'];
    }for (var ab8e9 = 0x1; ab8e9 <= this['tool']['data']['vip_box_list']['length']; ab8e9++) {
      var r07 = this['tool']['data']['vip_box_list'][ab8e9 - 0x1];this['main']['box_2_img_' + ab8e9]['skin'] = r07['url'], this['main']['box_2_lab_' + ab8e9]['text'] = r07['name'];
    }this['main']['box_2_lab_m_1']['text'] = '方法一：单日充值' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_m_2']['text'] = '方法二：历史累计充值' + +this['tool']['data']['y'] + '元', this['main']['box_2_lab_v_1']['text'] = (this['rolePriceData']['todayPrice'] || 0x0) + '/' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_v_2']['text'] = (this['rolePriceData']['allPrice'] || 0x0) + '/' + +this['tool']['data']['y'] + '元', this['main']['box_2_btn_copy']['skin'] = this['tool']['copyIcon'], this['main']['box_2_btn_get']['skin'] = this['tool']['getIcon'], this['main']['box_2_btn_copy']['visible'] = ![], this['main']['box_2_btn_get']['on'](Laya['Event']['CLICK'], this, function () {
      if (v70z['rolePriceData']['is_vip'] == 0x0) {
        p_ysikj['msg']('请先获取vip资格');return;
      }v70z['main']['box_2_lab_wx']['text'] = v70z['tool']['data']['vip_wx'], v70z['main']['box_2_btn_copy']['visible'] = !![];
    }), this['main']['box_2_btn_copy']['on'](Laya['Event']['CLICK'], this, function () {
      v70z['copyText'](v70z['tool']['data']['vip_wx']);
    }), this['main']['box_2_addclick']['on'](Laya['Event']['CLICK'], this, function () {
      if (v70z['rolePriceData']['is_vip'] == 0x0) return;v70z['main']['box_help']['visible'] = !![];
    }), this['main']['box_help_close']['on'](Laya['Event']['CLICK'], this, function () {
      v70z['main']['box_help']['visible'] = ![];
    }), this['main']['box_help_bg']['skin'] = this['tool']['data']['vip_customer_service_not_add'], this['main']['box_help_qrcode']['skin'] = this['tool']['data']['vip_qrcode'], this['main']['box_help_qrcode']['scaleX'] = 0xa0 / this['main']['box_help_qrcode']['width'], this['main']['box_help_qrcode']['scaleY'] = 0xa0 / this['main']['box_help_qrcode']['width'], this['main']['box_3_panel']['vScrollBar']['visible'] = ![], this['main']['box_3_panel']['vScrollBarSkin'] = 'common_atlas/scrollBar.png';
  }, hjspk['prototype']['initIcon'] = function () {
    this['icon'] = new Laya['Image'](), this['icon']['skin'] = this['tool']['data']['basics_image_url'], this['icon']['x'] = 0x0, this['icon']['y'] = 0xc8, this['icon']['width'] = 0x66, this['icon']['height'] = 0x6f, this['main']['addChild'](this['icon']), this['icon']['on'](Laya['Event']['MOUSE_DOWN'], this, this['iconPress']), this['icon']['on'](Laya['Event']['MOUSE_UP'], this, this['iconUp']), this['icon']['on'](Laya['Event']['MOUSE_WHEEL'], this, this['iconMove']), this['dragRect'] = new Laya['Rectangle'](-this['icon']['width'] / 0x2, 0x0, Laya['stage']['width'], Laya['stage']['height'] - this['icon']['height'] / 0x2);
  }, hjspk['prototype']['initEvent'] = function () {
    var kjh4is = this;this['main']['btn_1']['on'](Laya['Event']['CLICK'], this, function () {
      if (kjh4is['page'] == 0x1) return;kjh4is['page1']();
    }), this['main']['btn_2']['on'](Laya['Event']['CLICK'], this, function () {
      if (kjh4is['page'] == 0x2) return;kjh4is['page2']();
    }), this['main']['btn_3']['on'](Laya['Event']['CLICK'], this, function () {
      if (kjh4is['page'] == 0x3) return;kjh4is['page3']();
    }), this['main']['btn_close']['on'](Laya['Event']['CLICK'], this, function () {
      kjh4is['main']['bg']['x'] = -0x2ee, kjh4is['icon']['visible'] = !![];
    });
  }, hjspk['prototype']['initBoard'] = function () {
    this['isInitBoard'] = !![], this['page1']();
  }, hjspk['prototype']['showBoard'] = function () {
    this['main']['bg']['x'] = 0x0, this['icon']['visible'] = ![], this['tool']['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=sidebarApiRoleId&role_id=' + p_khi$j['sygame']['role_id'] + '&channel=' + p_khi$j['sygame']['channel'], this['rolePriceHandler']['bind'](this), this['roleError']['bind'](this));
  }, hjspk['prototype']['page1'] = function () {
    this['page'] = 0x1, this['main']['bg']['skin'] = this['tool']['data']['public_code'], this['main']['box_1_show']['visible'] = !![], this['main']['box_2_show']['visible'] = ![], this['main']['box_3_show']['visible'] = ![];
  }, hjspk['prototype']['page2'] = function () {
    this['page'] = 0x2, this['main']['bg']['skin'] = this['tool']['data']['vip_customer_service'], this['main']['box_1_show']['visible'] = ![], this['main']['box_2_show']['visible'] = !![], this['main']['box_3_show']['visible'] = ![];
  }, hjspk['prototype']['page3'] = function () {
    this['page'] = 0x3, this['main']['bg']['skin'] = this['tool']['data']['game_center_image_url'], this['main']['box_1_show']['visible'] = ![], this['main']['box_2_show']['visible'] = ![], this['main']['box_3_show']['visible'] = !![], this['sendBox'] || this['getBoxList'](0x0), this['sendBox'] = !![], p_$17rv && p_$17rv['syClickOpenBox']();
  }, hjspk['prototype']['getBoxList'] = function (q89ba) {
    var mf_xtu = this;p_$17rv && p_$17rv['syGetBoxList']({ 'page': q89ba, 'count': 0xc })['then'](function (xuft_) {
      var pkhs4 = xuft_['data'];pkhs4['status'] == 0x3e9 ? pkhs4['data'] && pkhs4['data']['length'] && (mf_xtu['boxlist'] = mf_xtu['boxlist']['concat'](pkhs4['data']), q89ba++, mf_xtu['getBoxList'](q89ba)) : mf_xtu['boxListHandler']();
    });
  }, hjspk['prototype']['copyText'] = function (nb9q) {
    try {
      wx['setClipboardData']({ 'data': nb9q, 'success': function (n953we) {
          console['log']('复制成功:', n953we);
        } });
    } catch (x4ptl) {}
  }, hjspk['prototype']['rolePriceHandler'] = function (kjh) {
    this['rolePriceData'] = JSON['parse'](kjh);switch (this['rolePriceData']['status']) {case 0x3e9:
        this['main']['box_2_lab_v_1']['text'] = (this['rolePriceData']['todayPrice'] || 0x0) + '/' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_v_2']['text'] = (this['rolePriceData']['allPrice'] || 0x0) + '/' + +this['tool']['data']['y'] + '元';break;case 0x3ea:
        break;case 0x3eb:
        break;}
  }, hjspk['prototype']['roleError'] = function () {}, hjspk['prototype']['boxListHandler'] = function () {
    var vr6217 = function (n5e89w) {
      var k4splh = r372z['boxlist'][n5e89w],
          acbd = new p_gbc8q['demoui']['BoxItemUI']();acbd['icon']['skin'] = k4splh['icon'], acbd['title']['text'] = k4splh['title'], acbd['x'] = 0xa0 * (n5e89w % 0x3), acbd['y'] = 0xa0 * (n5e89w / 0x3 ^ 0x0), r372z['main']['box_3_panel']['addChild'](acbd);var jksh4p = { 'appid': p_khi$j['sygame']['appid'], 'game_id': k4splh['game_id'], 'jump_appid': k4splh['jump_appid'], 'jump_path': k4splh['jump_path'], 'tunnel_id': k4splh['tunnel_id'], 'uv': 0x0, 'wecha_id': p_khi$j['sygame']['openid'] },
          ksjph = k4splh['preview_img'],
          r027 = k4splh['jump_type'],
          r01 = k4splh['kf_session'];acbd['on'](Laya['Event']['CLICK'], r372z, function () {
        p_$17rv && p_$17rv['syClickBox']({ 'game_id': k4splh['game_id'], 'tunnel_id': k4splh['tunnel_id'], 'jump_appid': k4splh['jump_appid'], 'jump_path': k4splh['jump_path'] })['then'](function (jk4ph) {
          if (r027 === '0') wx['navigateToMiniProgram']({ 'appId': jksh4p['jump_appid'], 'path': jksh4p['jump_path'], 'fail': function (pxlu4) {
              if (!ksjph) return;wx['previewImage']({ 'urls': [ksjph] });
            } });else {
            if (r027 === '1') {
              if (!ksjph) return;wx['previewImage']({ 'urls': [ksjph] });
            } else {
              if (r027 === '2') {
                if (!r01) return;wx['openCustomerServiceConversation']({ 'sessionFrom': r01, 'showMessageCard': !![], 'sendMessageTitle': '', 'sendMessagePath': '', 'sendMessageImg': '' });
              }
            }
          }
        });
      });
    },
        r372z = this;for (var w03zn = 0x0; w03zn < this['boxlist']['length']; w03zn++) {
      vr6217(w03zn);
    }
  }, hjspk['prototype']['boxListError'] = function () {}, hjspk['prototype']['boxClickHandler'] = function () {}, hjspk['prototype']['iconPress'] = function (xstpl) {
    this['donwX'] = xstpl['target']['x'], this['donwY'] = xstpl['target']['y'], this['icon']['startDrag'](this['dragRect']), this['isMove'] = ![], this['isPress'] = !![];
  }, hjspk['prototype']['iconMove'] = function (tfupx) {
    this['isMove'] = !![];
  }, hjspk['prototype']['iconUp'] = function ($r71v6) {
    var wne5z3 = $r71v6['target']['x'],
        gb98a = $r71v6['target']['y'];this['icon']['stopDrag'](), wne5z3 == this['donwX'] && this['donwY'] == gb98a && (this['isInitBoard'] || this['initBoard'](), this['showBoard']()), this['isMove'] = ![], this['isPress'] = ![];
  }, hjspk;
}(),
    p_gbc8q;(function (ih$kj) {
  var x_ful;(function (i$6y1) {
    var k$hjiy = function (z053n) {
      p_w05(e89nb, z053n);function e89nb() {
        return z053n['call'](this) || this;
      }return e89nb['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), z053n['prototype']['createChildren']['call'](this), this['createView'](ih$kj['demoui']['BoxItemUI']['uiView']);
      }, e89nb['uiView'] = { 'type': 'View', 'props': { 'width': 0xb4, 'height': 0xa0 }, 'child': [{ 'type': 'Image', 'props': { 'y': 0x3, 'x': 0x20, 'width': 0x73, 'var': 'icon', 'height': 0x73 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x79, 'x': -0x21, 'width': 0xb4, 'var': 'title', 'valign': 'middle', 'height': 0x22, 'fontSize': 0x16, 'color': '#441d1c', 'align': 'center' } }] }] }, e89nb;
    }(laya['ui']['View']);i$6y1['BoxItemUI'] = k$hjiy;
  })(x_ful = ih$kj['demoui'] || (ih$kj['demoui'] = {}));
})(p_gbc8q || (p_gbc8q = {})), function (i6kyj$) {
  var u_xmof;(function (jykhs) {
    var e5w93n = function (jkyhi) {
      p_w05(cq8, jkyhi);function cq8() {
        return jkyhi['call'](this) || this;
      }return cq8['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), jkyhi['prototype']['createChildren']['call'](this), this['createView'](i6kyj$['demoui']['MainUI']['uiView']);
      }, cq8['uiView'] = { 'type': 'View', 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x2ee, 'top': 0x0, 'right': 0x0, 'left': 0x0, 'height': 0x536, 'bottom': 0x0 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x2ee, 'height': 0x536, 'centerY': 0x0 }, 'child': [{ 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x2ee, 'var': 'bg', 'height': 0x536 }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x2ee, 'visible': ![], 'var': 'box_1_show', 'height': 0x536, 'centerY': 0x0 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x253, 'x': 0x2e, 'width': 0x1d0, 'var': 'box_1_lab_info', 'leading': 0xa, 'height': 0x97, 'fontSize': 0x18, 'color': '#a959ee' } }, { 'type': 'HBox', 'props': { 'y': 0x2ee, 'x': 0x14, 'width': 0x1fe, 'space': 0x35, 'height': 0x78, 'align': 'top' }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x58, 'var': 'box_1_img_1', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_1', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0xa, 'x': 0xa, 'width': 0x58, 'var': 'box_1_img_2', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_2', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x14, 'x': 0x14, 'width': 0x58, 'var': 'box_1_img_3', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_3', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x1e, 'x': 0x1e, 'width': 0x58, 'var': 'box_1_img_4', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_4', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }] }] }, { 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'visible': ![], 'var': 'box_2_show' }, 'child': [{ 'type': 'HBox', 'props': { 'y': 0x220, 'x': 0x18, 'width': 0x1f4, 'space': 0x2c, 'height': 0x56, 'align': 'top' }, 'child': [{ 'type': 'Image', 'props': { 'y': 2.5, 'x': 0x0, 'width': 0x58, 'var': 'box_2_img_1', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_1', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0xc, 'x': 0xa, 'width': 0x58, 'var': 'box_2_img_2', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_2', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x16, 'x': 0x14, 'width': 0x58, 'var': 'box_2_img_3', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_3', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x20, 'x': 0x1e, 'width': 0x58, 'var': 'box_2_img_4', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_4', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x2a, 'x': 0x28, 'width': 0x58, 'var': 'box_2_img_5', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_5', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }] }, { 'type': 'Box', 'props': { 'y': 0x384, 'x': 0x0, 'width': 0x221, 'height': 0x44 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x0, 'x': 0x28, 'width': 0x122, 'var': 'box_2_lab_m_1', 'text': '方法一\uFF1A单日充值1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300' } }, { 'type': 'Text', 'props': { 'y': 0x1e, 'x': 0x28, 'width': 0x122, 'var': 'box_2_lab_m_2', 'text': '方法一\uFF1A历史累计充值1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300' } }, { 'type': 'Text', 'props': { 'y': 0x0, 'x': 0x141, 'width': 0xa4, 'var': 'box_2_lab_v_1', 'text': '1000/1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300', 'align': 'right' } }, { 'type': 'Text', 'props': { 'y': 0x1e, 'x': 0x141, 'width': 0xa4, 'var': 'box_2_lab_v_2', 'text': '1000/1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300', 'align': 'right' } }] }, { 'type': 'Image', 'props': { 'y': 0x1aa, 'x': 0x159, 'width': 0x66, 'var': 'box_2_btn_get', 'stateNum': 0x1, 'height': 0x26 } }, { 'type': 'Image', 'props': { 'y': 0x1aa, 'x': 0x159, 'width': 0x66, 'var': 'box_2_btn_copy', 'stateNum': 0x1, 'height': 0x26 } }, { 'type': 'Button', 'props': { 'y': 0x1d2, 'x': 0x126, 'width': 0xc9, 'var': 'box_2_addclick', 'stateNum': 0x1, 'height': 0x1b } }, { 'type': 'Text', 'props': { 'y': 0x13c, 'x': 0x17a, 'width': 0xa3, 'var': 'box_2_lab_wx', 'height': 0x1f, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'left' } }] }, { 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'visible': ![], 'var': 'box_3_show' }, 'child': [{ 'type': 'Panel', 'props': { 'y': 0xf5, 'x': 0x10, 'width': 0x201, 'var': 'box_3_panel', 'vScrollBarSkin': '', 'height': 0x29e } }] }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0x0, 'width': 0xbb, 'var': 'btn_1', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0xba, 'width': 0xbb, 'var': 'btn_2', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0x177, 'width': 0xbb, 'var': 'btn_3', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x203, 'x': 0x22e, 'width': 0x25, 'var': 'btn_close', 'height': 0x8f } }, { 'type': 'Box', 'props': { 'width': 0x2ee, 'visible': ![], 'var': 'box_help', 'height': 0x536 }, 'child': [{ 'type': 'Sprite', 'props': { 'y': 0x0, 'x': 0x0, 'mouseThrough': ![], 'alpha': 0.7 }, 'child': [{ 'type': 'Rect', 'props': { 'width': 0x2ee, 'lineWidth': 0x1, 'height': 0x536, 'fillColor': '#000000' } }] }, { 'type': 'Image', 'props': { 'y': 0x158, 'x': 0x28, 'width': 0x1d2, 'var': 'box_help_bg', 'height': 0x203 }, 'child': [{ 'type': 'Button', 'props': { 'y': -0x1, 'x': 0x1a0, 'width': 0x33, 'var': 'box_help_close', 'height': 0x28 } }, { 'type': 'Image', 'props': { 'y': 0x3f, 'x': 0x98, 'width': 0xa0, 'var': 'box_help_qrcode', 'height': 0xa0 } }] }] }] }] }] }, cq8;
    }(laya['ui']['View']);jykhs['MainUI'] = e5w93n;
  })(u_xmof = i6kyj$['demoui'] || (i6kyj$['demoui'] = {}));
}(p_gbc8q || (p_gbc8q = {})), function (ky$ji6) {
  var xmu_ft;(function (xo_muf) {
    var mfou_x = function (hplst4) {
      p_w05(xf_mt, hplst4);function xf_mt() {
        return hplst4['call'](this) || this;
      }return xf_mt['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), hplst4['prototype']['createChildren']['call'](this), this['createView'](ky$ji6['demoui']['ToastUI']['uiView']);
      }, xf_mt['uiView'] = { 'type': 'View', 'props': { 'width': 0x2ee, 'height': 0x536 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x12c, 'height': 0x32, 'centerY': 0x0, 'centerX': 0x0 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x12c, 'height': 0x32, 'centerX': 0x0, 'alpha': 0.5 }, 'child': [{ 'type': 'Rect', 'props': { 'width': 0x12c, 'lineWidth': 0x1, 'height': 0x32, 'fillColor': '#382f2f' } }] }, { 'type': 'Text', 'props': { 'width': 0x12c, 'var': 'lab_msg', 'valign': 'middle', 'text': 'text', 'height': 0x32, 'fontSize': 0x18, 'color': '#ffffff', 'align': 'center' } }] }] }, xf_mt;
    }(laya['ui']['View']);xo_muf['ToastUI'] = mfou_x;
  })(xmu_ft = ky$ji6['demoui'] || (ky$ji6['demoui'] = {}));
}(p_gbc8q || (p_gbc8q = {}));var p_ysikj = function () {
  function tx_muf() {}return tx_muf['init'] = function () {
    !this['ui'] && (this['ui'] = new p_gbc8q['demoui']['ToastUI'](), this['ui']['visible'] = ![], Laya['stage']['addChild'](this['ui']));
  }, tx_muf['msg'] = function (ufxtp) {
    var ltxps = this;!this['ui'] && tx_muf['init'](), this['ui']['visible'] = !![], this['ui']['lab_msg']['text'] = ufxtp, clearTimeout(this['interval']), this['interval'] = setTimeout(function () {
      ltxps['ui']['visible'] = ![];
    }, 0x7d0);
  }, tx_muf;
}();window['minitool'] = p_ulftx;