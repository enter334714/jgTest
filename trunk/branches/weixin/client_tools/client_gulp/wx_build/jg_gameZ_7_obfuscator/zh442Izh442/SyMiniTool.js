var E = wx.$F;
var fx5l1_j = this && this['__extends'] || function () {
  var q5_xlj = function (ainp9, $vwm8) {
    return q5_xlj = Object['setPrototypeOf'] || { '__proto__': [] } instanceof Array && function (ia9c, na3p9o) {
      ia9c['__proto__'] = na3p9o;
    } || function (y0o3na, y08mfo) {
      for (var dqu2 in y08mfo) if (y08mfo['hasOwnProperty'](dqu2)) y0o3na[dqu2] = y08mfo[dqu2];
    }, q5_xlj(ainp9, $vwm8);
  };return function (t4ipc7, i74tpc) {
    q5_xlj(t4ipc7, i74tpc);function bq2() {
      this['constructor'] = t4ipc7;
    }t4ipc7['prototype'] = i74tpc === null ? Object['create'](i74tpc) : (bq2['prototype'] = i74tpc['prototype'], new bq2());
  };
}(),
    fia9c7p = window['Sygame'],
    fw6vmf = ![],
    fdqeb2 = function () {
  function oay03n() {}return oay03n['init'] = function () {
    fw6vmf ? this['sygame'] = { 'channel': '3477d2273abd484ba2a0e04ad4971b3c', 'role_id': undefined, 'openid': 'oxmOf5biumkGash-Xht9FVAlswVk', 'appid': 'wx2936121c4817bf46' } : this['sygame'] = fia9c7p;
  }, oay03n['getTimeStamp'] = function () {
    return new Date()['getTime']();
  }, oay03n['setResMap'] = function (w186, htg7) {
    this['resMap'][w186] = w186 + '?' + htg7;
  }, oay03n['getResMap'] = function (m3fyo0) {
    return this['resMap'][m3fyo0];
  }, oay03n['resMap'] = {}, oay03n;
}(),
    ftg7h4 = function () {
  function tc4g7() {
    this['getIcon'] = 'https://wx.11babay.cn/uploads/f/fkccc1532944783/5/2/c/7/60dc442c4fbc5.png', this['copyIcon'] = 'https://wx.11babay.cn/uploads/f/fkccc1532944783/3/0/1/7/60dc4409dce39.png', fdqeb2['init'](), this['getBoxCheckoutCode']();
  }return tc4g7['prototype']['send'] = function (yof8, ud5l_q, $x61j, ckit4, q_x5j) {
    ckit4 === void 0x0 && (ckit4 = 'get');q_x5j === void 0x0 && (q_x5j = '' || null);var ux5 = new Laya['HttpRequest']();ux5['http']['timeout'] = 0x2710, ux5['once'](Laya['Event']['COMPLETE'], this, ud5l_q), ux5['once'](Laya['Event']['ERROR'], this, $x61j), ux5['send'](yof8, q_x5j, ckit4, 'text');
  }, tc4g7['prototype']['postSidebarApi'] = function () {
    var np39ia = fdqeb2['sygame']['openid'],
        tp4ic = '&channel=' + fdqeb2['sygame']['channel'] + '&wecha_id=' + np39ia;this['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=sidebarApi' + tp4ic, this['completeHandler'], this['errorHandler']);
  }, tc4g7['prototype']['getBoxCheckoutCode'] = function () {
    var lud5q_ = Sygame['SY_CONF']['commitId'];this['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=getBoxCheckoutCode', this['getBoxCheckoutCodeRes'], this['errorHandler'], 'post', { 'commitId': lud5q_ });
  }, tc4g7['prototype']['getBoxCheckoutCodeRes'] = function (uebq2d) {
    var b2reds = JSON['parse'](uebq2d);console['log']('getBoxCheckoutCode:', b2reds);if (b2reds['status'] == 0x3e9) {
      var mw$86 = b2reds['info'];mw$86 == 0xfa1 ? this['postSidebarApi']() : console['error']('盛也盒子\x20不显示' + b2reds);
    } else console['error']('盛也盒子 getBoxCheckoutCodeRes 其他错误' + b2reds);
  }, tc4g7['prototype']['completeHandler'] = function (s2der) {
    var fo0my8 = JSON['parse'](s2der);console['log'](fo0my8);switch (fo0my8['status']) {case 0x3e9:
        var pt7c = [];fo0my8['msg']['basics_image_url'] && pt7c['push']({ 'url': fo0my8['msg']['basics_image_url'], 'type': Laya['Loader']['IMAGE'] }), fo0my8['msg']['public_code'] && pt7c['push']({ 'url': fo0my8['msg']['public_code'], 'type': Laya['Loader']['IMAGE'] }), fo0my8['msg']['vip_customer_service'] && pt7c['push']({ 'url': fo0my8['msg']['vip_customer_service'], 'type': Laya['Loader']['IMAGE'] }), fo0my8['msg']['vip_customer_service_not_add'] && pt7c['push']({ 'url': fo0my8['msg']['vip_customer_service_not_add'], 'type': Laya['Loader']['IMAGE'] }), fo0my8['msg']['game_center_image_url'] && pt7c['push']({ 'url': fo0my8['msg']['game_center_image_url'], 'type': Laya['Loader']['IMAGE'] }), fo0my8['msg']['vip_qrcode'] && pt7c['push']({ 'url': fo0my8['msg']['vip_qrcode'], 'type': Laya['Loader']['IMAGE'] }), fo0my8['msg']['getIcon'] && pt7c['push']({ 'url': this['getIcon'], 'type': Laya['Loader']['IMAGE'] }), fo0my8['msg']['copyIcon'] && pt7c['push']({ 'url': this['copyIcon'], 'type': Laya['Loader']['IMAGE'] });for (var $8wv6m = 0x0, du5lq = fo0my8['msg']['follow_gift_list']; $8wv6m < du5lq['length']; $8wv6m++) {
          var lqxj5 = du5lq[$8wv6m];pt7c['push']({ 'url': lqxj5['url'], 'type': Laya['Loader']['IMAGE'] });
        }for (var v68m = 0x0, sbre = fo0my8['msg']['vip_box_list']; v68m < sbre['length']; v68m++) {
          var lqxj5 = sbre[v68m];pt7c['push']({ 'url': lqxj5['url'], 'type': Laya['Loader']['IMAGE'] });
        }for (var _jq5l = 0x0; _jq5l < pt7c['length']; _jq5l++) {
          fdqeb2['setResMap'](pt7c[_jq5l]['url'], fdqeb2['getTimeStamp']()), pt7c[_jq5l]['url'] = fdqeb2['getResMap'](pt7c[_jq5l]['url']);
        }Laya['loader']['load'](pt7c, Laya['Handler']['create'](this, this['initGame'])), this['data'] = fo0my8['msg'];break;case 0x3ea:
        fna3o0['msg']('空的游戏channel');break;case 0x3eb:
        fna3o0['msg']('错误的游戏channel');break;case 0x3ec:
        fna3o0['msg']('未找到对应游戏大类');break;case 0x3ed:
        fna3o0['msg']('未设置侧边栏');break;}
  }, tc4g7['prototype']['errorHandler'] = function (y0fno3) {}, tc4g7['prototype']['initGame'] = function () {
    var $vj1 = new fany93(this);$vj1['show']();
  }, tc4g7;
}(),
    fany93 = function () {
  function qb2deu(bsude2) {
    this['page'] = 0x3, this['rolePriceData'] = {}, this['boxlist'] = [], this['donwX'] = 0x0, this['downY'] = 0x0, this['tool'] = bsude2;
  }return qb2deu['prototype']['setChildMouseThroughs'] = function (qdbue) {
    var npi3 = qdbue['_childs'] || [];for (var tp74i = 0x0; tp74i < npi3['length']; tp74i++) {
      npi3[tp74i] && (npi3[tp74i]['mouseThrough'] = !![]);
    }
  }, qb2deu['prototype']['show'] = function () {
    if (this['tool']['data']['on'] === '1') {
      this['main'] = new fdbu2q['demoui']['MainUI'](), Laya['stage']['addChild'](this['main']), this['main']['mouseThrough'] = !![];var h7t4g = this['main']['_childs'] || [];for (var my8o0f = 0x0; my8o0f < h7t4g['length']; my8o0f++) {
        h7t4g[my8o0f]['mouseThrough'] = !![];
      }this['setChildMouseThroughs'](this['main']['_childs']), this['setChildMouseThroughs'](this['main']['_childs'][0x0]), this['initIcon'](), this['initEvent'](), this['initView'](), fna3o0['init'](), this['main']['bg']['x'] = -0x2ee;
    }
  }, qb2deu['prototype']['initView'] = function () {
    var oyna = this,
        ymf30 = this['tool']['data']['follow_down_words']['replace'](/\\n/g, '\x0a');this['main']['box_1_lab_info']['text'] = ymf30;for (var wm8fy0 = 0x1; wm8fy0 <= this['tool']['data']['follow_gift_list']['length']; wm8fy0++) {
      var k7itc4 = this['tool']['data']['follow_gift_list'][wm8fy0 - 0x1];this['main']['box_1_img_' + wm8fy0]['skin'] = k7itc4['url'], this['main']['box_1_lab_' + wm8fy0]['text'] = k7itc4['name'];
    }for (var wm8fy0 = 0x1; wm8fy0 <= this['tool']['data']['vip_box_list']['length']; wm8fy0++) {
      var k7itc4 = this['tool']['data']['vip_box_list'][wm8fy0 - 0x1];this['main']['box_2_img_' + wm8fy0]['skin'] = k7itc4['url'], this['main']['box_2_lab_' + wm8fy0]['text'] = k7itc4['name'];
    }this['main']['box_2_lab_m_1']['text'] = '方法一：单日充值' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_m_2']['text'] = '方法二：历史累计充值' + +this['tool']['data']['y'] + '元', this['main']['box_2_lab_v_1']['text'] = (this['rolePriceData']['todayPrice'] || 0x0) + '/' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_v_2']['text'] = (this['rolePriceData']['allPrice'] || 0x0) + '/' + +this['tool']['data']['y'] + '元', this['main']['box_2_btn_copy']['skin'] = this['tool']['copyIcon'], this['main']['box_2_btn_get']['skin'] = this['tool']['getIcon'], this['main']['box_2_btn_copy']['visible'] = ![], this['main']['box_2_btn_get']['on'](Laya['Event']['CLICK'], this, function () {
      if (oyna['rolePriceData']['is_vip'] == 0x0) {
        fna3o0['msg']('请先获取vip资格');return;
      }oyna['main']['box_2_lab_wx']['text'] = this['rolePriceData']['vip_wx'], oyna['main']['box_2_btn_copy']['visible'] = !![];
    }), this['main']['box_2_btn_copy']['on'](Laya['Event']['CLICK'], this, function () {
      oyna['copyText'](this['rolePriceData']['vip_wx']);
    }), this['main']['box_2_addclick']['on'](Laya['Event']['CLICK'], this, function () {
      if (oyna['rolePriceData']['is_vip'] == 0x0) return;this['main']['box_help_qrcode']['skin'] = oyna['rolePriceData']['vip_qrcode'], oyna['main']['box_help']['visible'] = !![];
    }), this['main']['box_help_close']['on'](Laya['Event']['CLICK'], this, function () {
      oyna['main']['box_help']['visible'] = ![];
    }), this['main']['box_help_bg']['skin'] = this['tool']['data']['vip_customer_service_not_add'], this['main']['box_help_qrcode']['skin'] = oyna['rolePriceData']['vip_qrcode'], this['main']['box_help_qrcode']['scaleX'] = 0xa0 / this['main']['box_help_qrcode']['width'], this['main']['box_help_qrcode']['scaleY'] = 0xa0 / this['main']['box_help_qrcode']['width'], this['main']['box_3_panel']['vScrollBar']['visible'] = ![], this['main']['box_3_panel']['vScrollBarSkin'] = 'common_atlas/scrollBar.png';
  }, qb2deu['prototype']['initIcon'] = function () {
    this['icon'] = new Laya['Image'](), this['icon']['skin'] = this['tool']['data']['basics_image_url'], this['icon']['x'] = 0x0, this['icon']['y'] = 0xc8, this['icon']['width'] = 0x66, this['icon']['height'] = 0x6f, this['main']['addChild'](this['icon']), this['icon']['on'](Laya['Event']['MOUSE_DOWN'], this, this['iconPress']), this['icon']['on'](Laya['Event']['MOUSE_UP'], this, this['iconUp']), this['icon']['on'](Laya['Event']['MOUSE_WHEEL'], this, this['iconMove']), this['dragRect'] = new Laya['Rectangle'](-this['icon']['width'] / 0x2, 0x0, Laya['stage']['width'], Laya['stage']['height'] - this['icon']['height'] / 0x2);
  }, qb2deu['prototype']['initEvent'] = function () {
    var mfoy = this;this['main']['btn_1']['on'](Laya['Event']['CLICK'], this, function () {
      if (mfoy['page'] == 0x1) return;mfoy['page1']();
    }), this['main']['btn_2']['on'](Laya['Event']['CLICK'], this, function () {
      if (mfoy['page'] == 0x2) return;mfoy['page2']();
    }), this['main']['btn_3']['on'](Laya['Event']['CLICK'], this, function () {
      if (mfoy['page'] == 0x3) return;mfoy['page3']();
    }), this['main']['btn_close']['on'](Laya['Event']['CLICK'], this, function () {
      mfoy['main']['bg']['x'] = -0x2ee, mfoy['icon']['visible'] = !![];
    });
  }, qb2deu['prototype']['initBoard'] = function () {
    this['isInitBoard'] = !![], this['page1']();
  }, qb2deu['prototype']['showBoard'] = function () {
    this['main']['bg']['x'] = 0x0, this['icon']['visible'] = ![];var ipnc9 = hDZ['selectedServer']['server_id'],
        ain93p = hDZ['selectedServer']['server_name'],
        a9npci = hDZ['roleId'],
        xq5_l = hDZ['roleName'],
        a93yno = fdqeb2['sygame']['openid'],
        udql_2 = '&version=' + Sygame['SY_CONF']['APP_VERSION'] + '&role_id=' + fdqeb2['sygame']['role_id'] + '&channel=' + fdqeb2['sygame']['channel'] + '&server_id=' + ipnc9 + '&server_name=' + ain93p + '&wecha_id=' + a93yno + '&role_id=' + a9npci + '&role_name=' + xq5_l;this['tool']['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=sidebarApiRoleId' + udql_2, this['rolePriceHandler']['bind'](this), this['roleError']['bind'](this));
  }, qb2deu['prototype']['page1'] = function () {
    this['page'] = 0x1;!qb2deu['prototype']['page1Bg'] && (qb2deu['prototype']['page1Bg'] = new Laya['Image'](this['tool']['data']['public_code']), this['main']['bg']['addChildAt'](qb2deu['prototype']['page1Bg'], 0x0));if (qb2deu['prototype']['page1Bg']) qb2deu['prototype']['page1Bg']['visible'] = !![];if (qb2deu['prototype']['page2Bg']) qb2deu['prototype']['page2Bg']['visible'] = ![];if (qb2deu['prototype']['page3Bg']) qb2deu['prototype']['page3Bg']['visible'] = ![];this['main']['box_1_show']['visible'] = !![], this['main']['box_2_show']['visible'] = ![], this['main']['box_3_show']['visible'] = ![];
  }, qb2deu['prototype']['page2'] = function () {
    this['page'] = 0x2;!qb2deu['prototype']['page2Bg'] && (qb2deu['prototype']['page2Bg'] = new Laya['Image'](this['tool']['data']['vip_customer_service']), this['main']['bg']['addChildAt'](qb2deu['prototype']['page2Bg'], 0x0));if (qb2deu['prototype']['page1Bg']) qb2deu['prototype']['page1Bg']['visible'] = ![];if (qb2deu['prototype']['page2Bg']) qb2deu['prototype']['page2Bg']['visible'] = !![];if (qb2deu['prototype']['page3Bg']) qb2deu['prototype']['page3Bg']['visible'] = ![];this['main']['box_1_show']['visible'] = ![], this['main']['box_2_show']['visible'] = !![], this['main']['box_3_show']['visible'] = ![];
  }, qb2deu['prototype']['page3'] = function () {
    this['page'] = 0x3;!qb2deu['prototype']['page3Bg'] && (qb2deu['prototype']['page3Bg'] = new Laya['Image'](this['tool']['data']['game_center_image_url']), this['main']['bg']['addChildAt'](qb2deu['prototype']['page3Bg'], 0x0));if (qb2deu['prototype']['page1Bg']) qb2deu['prototype']['page1Bg']['visible'] = ![];if (qb2deu['prototype']['page2Bg']) qb2deu['prototype']['page2Bg']['visible'] = ![];if (qb2deu['prototype']['page3Bg']) qb2deu['prototype']['page3Bg']['visible'] = !![];qb2deu['prototype']['page1Bg']['visible'] = ![], this['main']['bg']['skin'] = this['tool']['data']['game_center_image_url'], this['main']['box_1_show']['visible'] = ![], this['main']['box_2_show']['visible'] = ![], this['main']['box_3_show']['visible'] = !![], this['sendBox'] || this['getBoxList'](0x0), this['sendBox'] = !![], fia9c7p && fia9c7p['syClickOpenBox']();
  }, qb2deu['prototype']['getBoxList'] = function (b2dsre) {
    var gk7ht = this;fia9c7p && fia9c7p['syGetBoxList']({ 'page': b2dsre, 'count': 0xc })['then'](function (_ludq5) {
      var ux5l = _ludq5['data'];ux5l['status'] == 0x3e9 ? ux5l['data'] && ux5l['data']['length'] && (gk7ht['boxlist'] = gk7ht['boxlist']['concat'](ux5l['data']), b2dsre++, gk7ht['getBoxList'](b2dsre)) : gk7ht['boxListHandler']();
    });
  }, qb2deu['prototype']['copyText'] = function (t7h) {
    try {
      wx['setClipboardData']({ 'data': t7h, 'success': function (lj_x51) {
          console['log']('复制成功:', lj_x51);
        } });
    } catch ($51j_x) {}
  }, qb2deu['prototype']['rolePriceHandler'] = function (pin9ac) {
    this['rolePriceData'] = JSON['parse'](pin9ac);switch (this['rolePriceData']['status']) {case 0x3e9:
        this['main']['box_2_lab_v_1']['text'] = (this['rolePriceData']['todayPrice'] || 0x0) + '/' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_v_2']['text'] = (this['rolePriceData']['allPrice'] || 0x0) + '/' + +this['tool']['data']['y'] + '元';break;case 0x3ea:
        break;case 0x3eb:
        break;}
  }, qb2deu['prototype']['roleError'] = function () {}, qb2deu['prototype']['boxListHandler'] = function () {
    var ql5_j = function (thk47g) {
      var dql_2 = v16$w['boxlist'][thk47g],
          v80w = new fdbu2q['demoui']['BoxItemUI']();v80w['icon']['skin'] = dql_2['icon'], v80w['title']['text'] = dql_2['title'], v80w['x'] = 0xa0 * (thk47g % 0x3), v80w['y'] = 0xa0 * (thk47g / 0x3 ^ 0x0), v16$w['main']['box_3_panel']['addChild'](v80w);var s2deub = { 'appid': fdqeb2['sygame']['appid'], 'game_id': dql_2['game_id'], 'jump_appid': dql_2['jump_appid'], 'jump_path': dql_2['jump_path'], 'tunnel_id': dql_2['tunnel_id'], 'uv': 0x0, 'wecha_id': fdqeb2['sygame']['openid'] },
          c74p = dql_2['preview_img'],
          nya3o9 = dql_2['jump_type'],
          tkc4 = dql_2['kf_session'];v80w['on'](Laya['Event']['CLICK'], v16$w, function () {
        fia9c7p && fia9c7p['syClickBox']({ 'game_id': dql_2['game_id'], 'tunnel_id': dql_2['tunnel_id'], 'jump_appid': dql_2['jump_appid'], 'jump_path': dql_2['jump_path'] })['then'](function (bq2de) {
          if (nya3o9 === '0') wx['navigateToMiniProgram']({ 'appId': s2deub['jump_appid'], 'path': s2deub['jump_path'], 'fail': function (leqd2u) {
              if (!c74p) return;wx['previewImage']({ 'urls': [c74p] });
            } });else {
            if (nya3o9 === '1') {
              if (!c74p) return;wx['previewImage']({ 'urls': [c74p] });
            } else {
              if (nya3o9 === '2') {
                if (!tkc4) return;wx['openCustomerServiceConversation']({ 'sessionFrom': tkc4, 'showMessageCard': !![], 'sendMessageTitle': '', 'sendMessagePath': '', 'sendMessageImg': '' });
              }
            }
          }
        });
      });
    },
        v16$w = this;for (var w6$1 = 0x0; w6$1 < this['boxlist']['length']; w6$1++) {
      ql5_j(w6$1);
    }
  }, qb2deu['prototype']['boxListError'] = function () {}, qb2deu['prototype']['boxClickHandler'] = function () {}, qb2deu['prototype']['iconPress'] = function (p9cia7) {
    this['donwX'] = p9cia7['target']['x'], this['donwY'] = p9cia7['target']['y'], this['icon']['startDrag'](this['dragRect']), this['isMove'] = ![], this['isPress'] = !![];
  }, qb2deu['prototype']['iconMove'] = function (jv1$w6) {
    this['isMove'] = !![];
  }, qb2deu['prototype']['iconUp'] = function (mw0f8y) {
    var ac7i = mw0f8y['target']['x'],
        ld2_ = mw0f8y['target']['y'];this['icon']['stopDrag'](), ac7i == this['donwX'] && this['donwY'] == ld2_ && (this['isInitBoard'] || this['initBoard'](), this['showBoard']()), this['isMove'] = ![], this['isPress'] = ![];
  }, qb2deu;
}(),
    fdbu2q;(function (wmf8v0) {
  var q2e;(function (tgc4k) {
    var opa3n9 = function (v6$wm) {
      fx5l1_j(_uqlx5, v6$wm);function _uqlx5() {
        return v6$wm['call'](this) || this;
      }return _uqlx5['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), v6$wm['prototype']['createChildren']['call'](this), this['createView'](wmf8v0['demoui']['BoxItemUI']['uiView']);
      }, _uqlx5['uiView'] = { 'type': 'View', 'props': { 'width': 0xb4, 'height': 0xa0 }, 'child': [{ 'type': 'Image', 'props': { 'y': 0x3, 'x': 0x20, 'width': 0x73, 'var': 'icon', 'height': 0x73 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x79, 'x': -0x21, 'width': 0xb4, 'var': 'title', 'valign': 'middle', 'height': 0x22, 'fontSize': 0x16, 'color': '#441d1c', 'align': 'center' } }] }] }, _uqlx5;
    }(laya['ui']['View']);tgc4k['BoxItemUI'] = opa3n9;
  })(q2e = wmf8v0['demoui'] || (wmf8v0['demoui'] = {}));
})(fdbu2q || (fdbu2q = {})), function (mwv8$) {
  var l1_xj5;(function (sebrd2) {
    var deub2 = function (i3n9pa) {
      fx5l1_j(s2edu, i3n9pa);function s2edu() {
        return i3n9pa['call'](this) || this;
      }return s2edu['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), i3n9pa['prototype']['createChildren']['call'](this), this['createView'](mwv8$['demoui']['MainUI']['uiView']);
      }, s2edu['uiView'] = { 'type': 'View', 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x2ee, 'top': 0x0, 'right': 0x0, 'left': 0x0, 'height': 0x536, 'bottom': 0x0 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x2ee, 'height': 0x536, 'centerY': 0x0 }, 'child': [{ 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x2ee, 'var': 'bg', 'height': 0x536 }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x2ee, 'visible': ![], 'var': 'box_1_show', 'height': 0x536, 'centerY': 0x0 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x253, 'x': 0x2e, 'width': 0x1d0, 'var': 'box_1_lab_info', 'leading': 0xa, 'height': 0x97, 'fontSize': 0x18, 'color': '#a959ee' } }, { 'type': 'HBox', 'props': { 'y': 0x2ee, 'x': 0x14, 'width': 0x1fe, 'space': 0x35, 'height': 0x78, 'align': 'top' }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x58, 'var': 'box_1_img_1', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_1', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0xa, 'x': 0xa, 'width': 0x58, 'var': 'box_1_img_2', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_2', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x14, 'x': 0x14, 'width': 0x58, 'var': 'box_1_img_3', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_3', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x1e, 'x': 0x1e, 'width': 0x58, 'var': 'box_1_img_4', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_4', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }] }] }, { 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'visible': ![], 'var': 'box_2_show' }, 'child': [{ 'type': 'HBox', 'props': { 'y': 0x220, 'x': 0x18, 'width': 0x1f4, 'space': 0x2c, 'height': 0x56, 'align': 'top' }, 'child': [{ 'type': 'Image', 'props': { 'y': 2.5, 'x': 0x0, 'width': 0x58, 'var': 'box_2_img_1', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_1', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0xc, 'x': 0xa, 'width': 0x58, 'var': 'box_2_img_2', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_2', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x16, 'x': 0x14, 'width': 0x58, 'var': 'box_2_img_3', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_3', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x20, 'x': 0x1e, 'width': 0x58, 'var': 'box_2_img_4', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_4', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x2a, 'x': 0x28, 'width': 0x58, 'var': 'box_2_img_5', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_5', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }] }, { 'type': 'Box', 'props': { 'y': 0x384, 'x': 0x0, 'width': 0x221, 'height': 0x44 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x0, 'x': 0x28, 'width': 0x122, 'var': 'box_2_lab_m_1', 'text': '方法一\uFF1A单日充值1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300' } }, { 'type': 'Text', 'props': { 'y': 0x1e, 'x': 0x28, 'width': 0x122, 'var': 'box_2_lab_m_2', 'text': '方法一\uFF1A历史累计充值1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300' } }, { 'type': 'Text', 'props': { 'y': 0x0, 'x': 0x141, 'width': 0xa4, 'var': 'box_2_lab_v_1', 'text': '1000/1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300', 'align': 'right' } }, { 'type': 'Text', 'props': { 'y': 0x1e, 'x': 0x141, 'width': 0xa4, 'var': 'box_2_lab_v_2', 'text': '1000/1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300', 'align': 'right' } }] }, { 'type': 'Image', 'props': { 'y': 0x1aa, 'x': 0x159, 'width': 0x66, 'var': 'box_2_btn_get', 'stateNum': 0x1, 'height': 0x26 } }, { 'type': 'Image', 'props': { 'y': 0x1aa, 'x': 0x159, 'width': 0x66, 'var': 'box_2_btn_copy', 'stateNum': 0x1, 'height': 0x26 } }, { 'type': 'Button', 'props': { 'y': 0x1d2, 'x': 0x126, 'width': 0xc9, 'var': 'box_2_addclick', 'stateNum': 0x1, 'height': 0x1b } }, { 'type': 'Text', 'props': { 'y': 0x13c, 'x': 0x17a, 'width': 0xa3, 'var': 'box_2_lab_wx', 'height': 0x1f, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'left' } }] }, { 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'visible': ![], 'var': 'box_3_show' }, 'child': [{ 'type': 'Panel', 'props': { 'y': 0xf5, 'x': 0x10, 'width': 0x201, 'var': 'box_3_panel', 'vScrollBarSkin': '', 'height': 0x29e } }] }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0x0, 'width': 0xbb, 'var': 'btn_1', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0xba, 'width': 0xbb, 'var': 'btn_2', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0x177, 'width': 0xbb, 'var': 'btn_3', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x203, 'x': 0x22e, 'width': 0x25, 'var': 'btn_close', 'height': 0x8f } }, { 'type': 'Box', 'props': { 'width': 0x2ee, 'visible': ![], 'var': 'box_help', 'height': 0x536 }, 'child': [{ 'type': 'Sprite', 'props': { 'y': 0x0, 'x': 0x0, 'mouseThrough': ![], 'alpha': 0.7 }, 'child': [{ 'type': 'Rect', 'props': { 'width': 0x2ee, 'lineWidth': 0x1, 'height': 0x536, 'fillColor': '#000000' } }] }, { 'type': 'Image', 'props': { 'y': 0x158, 'x': 0x28, 'width': 0x1d2, 'var': 'box_help_bg', 'height': 0x203 }, 'child': [{ 'type': 'Button', 'props': { 'y': -0x1, 'x': 0x1a0, 'width': 0x33, 'var': 'box_help_close', 'height': 0x28 } }, { 'type': 'Image', 'props': { 'y': 0x3f, 'x': 0x98, 'width': 0xa0, 'var': 'box_help_qrcode', 'height': 0xa0 } }] }] }] }] }] }, s2edu;
    }(laya['ui']['View']);sebrd2['MainUI'] = deub2;
  })(l1_xj5 = mwv8$['demoui'] || (mwv8$['demoui'] = {}));
}(fdbu2q || (fdbu2q = {})), function (pi7) {
  var ap79i;(function (_q5ulx) {
    var tc4i7 = function (xj1_$5) {
      fx5l1_j(wm0y, xj1_$5);function wm0y() {
        return xj1_$5['call'](this) || this;
      }return wm0y['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), xj1_$5['prototype']['createChildren']['call'](this), this['createView'](pi7['demoui']['ToastUI']['uiView']);
      }, wm0y['uiView'] = { 'type': 'View', 'props': { 'width': 0x2ee, 'height': 0x536 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x12c, 'height': 0x32, 'centerY': 0x0, 'centerX': 0x0 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x12c, 'height': 0x32, 'centerX': 0x0, 'alpha': 0.5 }, 'child': [{ 'type': 'Rect', 'props': { 'width': 0x12c, 'lineWidth': 0x1, 'height': 0x32, 'fillColor': '#382f2f' } }] }, { 'type': 'Text', 'props': { 'width': 0x12c, 'var': 'lab_msg', 'valign': 'middle', 'text': 'text', 'height': 0x32, 'fontSize': 0x18, 'color': '#ffffff', 'align': 'center' } }] }] }, wm0y;
    }(laya['ui']['View']);_q5ulx['ToastUI'] = tc4i7;
  })(ap79i = pi7['demoui'] || (pi7['demoui'] = {}));
}(fdbu2q || (fdbu2q = {}));var fna3o0 = function () {
  function vw8m$6() {}return vw8m$6['init'] = function () {
    !this['ui'] && (this['ui'] = new fdbu2q['demoui']['ToastUI'](), this['ui']['visible'] = ![], Laya['stage']['addChild'](this['ui']));
  }, vw8m$6['msg'] = function (u_5dl) {
    var p4t7ic = this;!this['ui'] && vw8m$6['init'](), this['ui']['visible'] = !![], this['ui']['lab_msg']['text'] = u_5dl, clearTimeout(this['interval']), this['interval'] = setTimeout(function () {
      p4t7ic['ui']['visible'] = ![];
    }, 0x7d0);
  }, vw8m$6;
}();window['minitool'] = ftg7h4;