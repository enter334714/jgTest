var K = wx.$S;
var so43re = this && this['__extends'] || function () {
  var vzr3uo = function (ed45$, shqgy) {
    return vzr3uo = Object['setPrototypeOf'] || { '__proto__': [] } instanceof Array && function (zk, dpyh5) {
      zk['__proto__'] = dpyh5;
    } || function (icm0_, ypq5) {
      for (var m_c0ix in ypq5) if (ypq5['hasOwnProperty'](m_c0ix)) icm0_[m_c0ix] = ypq5[m_c0ix];
    }, vzr3uo(ed45$, shqgy);
  };return function (sjgqpy, tim2) {
    vzr3uo(sjgqpy, tim2);function cxm2i_() {
      this['constructor'] = sjgqpy;
    }sjgqpy['prototype'] = tim2 === null ? Object['create'](tim2) : (cxm2i_['prototype'] = tim2['prototype'], new cxm2i_());
  };
}(),
    sf6b8l1 = window['Sygame'],
    sjsqp1 = ![],
    sv3ozk9 = function () {
  function ci2_m() {}return ci2_m['init'] = function () {
    sjsqp1 ? this['sygame'] = { 'channel': '3477d2273abd484ba2a0e04ad4971b3c', 'role_id': undefined, 'openid': 'oxmOf5biumkGash-Xht9FVAlswVk', 'appid': 'wx2936121c4817bf46' } : this['sygame'] = sf6b8l1;
  }, ci2_m['getTimeStamp'] = function () {
    return new Date()['getTime']();
  }, ci2_m['setResMap'] = function (a4h$d, jg6) {
    this['resMap'][a4h$d] = a4h$d + '?' + jg6;
  }, ci2_m['getResMap'] = function (yhpsd5) {
    return this['resMap'][yhpsd5];
  }, ci2_m['resMap'] = {}, ci2_m;
}(),
    swvko = function () {
  function pg1js() {
    this['getIcon'] = 'https://wx.11babay.cn/uploads/f/fkccc1532944783/5/2/c/7/60dc442c4fbc5.png', this['copyIcon'] = 'https://wx.11babay.cn/uploads/f/fkccc1532944783/3/0/1/7/60dc4409dce39.png', sv3ozk9['init'](), this['getBoxCheckoutCode']();
  }return pg1js['prototype']['send'] = function (or3kv, r4$ue3, cxmi_0, kwv9zo, zo9k3v) {
    kwv9zo === void 0x0 && (kwv9zo = 'get');zo9k3v === void 0x0 && (zo9k3v = '' || null);var yha5d$ = new Laya['HttpRequest']();yha5d$['http']['timeout'] = 0x2710, yha5d$['once'](Laya['Event']['COMPLETE'], this, r4$ue3), yha5d$['once'](Laya['Event']['ERROR'], this, cxmi_0), yha5d$['send'](or3kv, zo9k3v, kwv9zo, 'text');
  }, pg1js['prototype']['postSidebarApi'] = function () {
    var pgqy = sv3ozk9['sygame']['openid'],
        a4dh$5 = '&channel=' + sv3ozk9['sygame']['channel'] + '&wecha_id=' + pgqy;this['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=sidebarApi' + a4dh$5, this['completeHandler'], this['errorHandler']);
  }, pg1js['prototype']['getBoxCheckoutCode'] = function () {
    var x_cm0 = Sygame['SY_CONF']['commitId'];this['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=getBoxCheckoutCode', this['getBoxCheckoutCodeRes'], this['errorHandler'], 'post', { 'commitId': x_cm0 });
  }, pg1js['prototype']['getBoxCheckoutCodeRes'] = function (x_i0w) {
    var jgsqp1 = JSON['parse'](x_i0w);console['log']('getBoxCheckoutCode:', jgsqp1);if (jgsqp1['status'] == 0x3e9) {
      var u34e$ = jgsqp1['info'];u34e$ == 0xfa1 ? this['postSidebarApi']() : console['error']('盛也盒子\x20不显示' + jgsqp1);
    } else console['error']('盛也盒子 getBoxCheckoutCodeRes 其他错误' + jgsqp1);
  }, pg1js['prototype']['completeHandler'] = function (g6b8j) {
    var gj1spq = JSON['parse'](g6b8j);console['log'](gj1spq);switch (gj1spq['status']) {case 0x3e9:
        var tnm72 = [];gj1spq['msg']['basics_image_url'] && tnm72['push']({ 'url': gj1spq['msg']['basics_image_url'], 'type': Laya['Loader']['IMAGE'] }), gj1spq['msg']['public_code'] && tnm72['push']({ 'url': gj1spq['msg']['public_code'], 'type': Laya['Loader']['IMAGE'] }), gj1spq['msg']['vip_customer_service'] && tnm72['push']({ 'url': gj1spq['msg']['vip_customer_service'], 'type': Laya['Loader']['IMAGE'] }), gj1spq['msg']['vip_customer_service_not_add'] && tnm72['push']({ 'url': gj1spq['msg']['vip_customer_service_not_add'], 'type': Laya['Loader']['IMAGE'] }), gj1spq['msg']['game_center_image_url'] && tnm72['push']({ 'url': gj1spq['msg']['game_center_image_url'], 'type': Laya['Loader']['IMAGE'] }), gj1spq['msg']['vip_qrcode'] && tnm72['push']({ 'url': gj1spq['msg']['vip_qrcode'], 'type': Laya['Loader']['IMAGE'] }), gj1spq['msg']['getIcon'] && tnm72['push']({ 'url': this['getIcon'], 'type': Laya['Loader']['IMAGE'] }), gj1spq['msg']['copyIcon'] && tnm72['push']({ 'url': this['copyIcon'], 'type': Laya['Loader']['IMAGE'] });for (var kw9c_0 = 0x0, yqspgh = gj1spq['msg']['follow_gift_list']; kw9c_0 < yqspgh['length']; kw9c_0++) {
          var wk90_c = yqspgh[kw9c_0];tnm72['push']({ 'url': wk90_c['url'], 'type': Laya['Loader']['IMAGE'] });
        }for (var w09kv = 0x0, u3e$4 = gj1spq['msg']['vip_box_list']; w09kv < u3e$4['length']; w09kv++) {
          var wk90_c = u3e$4[w09kv];tnm72['push']({ 'url': wk90_c['url'], 'type': Laya['Loader']['IMAGE'] });
        }for (var j816bg = 0x0; j816bg < tnm72['length']; j816bg++) {
          sv3ozk9['setResMap'](tnm72[j816bg]['url'], sv3ozk9['getTimeStamp']()), tnm72[j816bg]['url'] = sv3ozk9['getResMap'](tnm72[j816bg]['url']);
        }Laya['loader']['load'](tnm72, Laya['Handler']['create'](this, this['initGame'])), this['data'] = gj1spq['msg'];break;case 0x3ea:
        sjgq8['msg']('空的游戏channel');break;case 0x3eb:
        sjgq8['msg']('错误的游戏channel');break;case 0x3ec:
        sjgq8['msg']('未找到对应游戏大类');break;case 0x3ed:
        sjgq8['msg']('未设置侧边栏');break;}
  }, pg1js['prototype']['errorHandler'] = function (c9_w0) {}, pg1js['prototype']['initGame'] = function () {
    var oe43r = new szw09v(this);oe43r['show']();
  }, pg1js;
}(),
    szw09v = function () {
  function mx0i_(voe) {
    this['page'] = 0x3, this['rolePriceData'] = {}, this['boxlist'] = [], this['donwX'] = 0x0, this['downY'] = 0x0, this['tool'] = voe;
  }return mx0i_['prototype']['setChildMouseThroughs'] = function (x_iw0c) {
    var uve3r = x_iw0c['_childs'] || [];for (var j16l = 0x0; j16l < uve3r['length']; j16l++) {
      uve3r[j16l] && (uve3r[j16l]['mouseThrough'] = !![]);
    }
  }, mx0i_['prototype']['show'] = function () {
    if (this['tool']['data']['on'] === '1') {
      this['main'] = new sw90_['demoui']['MainUI'](), Laya['stage']['addChild'](this['main']), this['main']['mouseThrough'] = !![];var jpsqg = this['main']['_childs'] || [];for (var g81pjq = 0x0; g81pjq < jpsqg['length']; g81pjq++) {
        jpsqg[g81pjq]['mouseThrough'] = !![];
      }this['setChildMouseThroughs'](this['main']['_childs']), this['setChildMouseThroughs'](this['main']['_childs'][0x0]), this['initIcon'](), this['initEvent'](), this['initView'](), sjgq8['init']();
    }
  }, mx0i_['prototype']['initView'] = function () {
    var aru4$e = this,
        _ck90 = this['tool']['data']['follow_down_words']['replace'](/\\n/g, '\x0a');this['main']['box_1_lab_info']['text'] = _ck90;for (var ni_x2 = 0x1; ni_x2 <= this['tool']['data']['follow_gift_list']['length']; ni_x2++) {
      var urae$ = this['tool']['data']['follow_gift_list'][ni_x2 - 0x1];this['main']['box_1_img_' + ni_x2]['skin'] = urae$['url'], this['main']['box_1_lab_' + ni_x2]['text'] = urae$['name'];
    }for (var ni_x2 = 0x1; ni_x2 <= this['tool']['data']['vip_box_list']['length']; ni_x2++) {
      var urae$ = this['tool']['data']['vip_box_list'][ni_x2 - 0x1];this['main']['box_2_img_' + ni_x2]['skin'] = urae$['url'], this['main']['box_2_lab_' + ni_x2]['text'] = urae$['name'];
    }this['main']['box_2_lab_m_1']['text'] = '方法一：单日充值' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_m_2']['text'] = '方法二：历史累计充值' + +this['tool']['data']['y'] + '元', this['main']['box_2_lab_v_1']['text'] = (this['rolePriceData']['todayPrice'] || 0x0) + '/' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_v_2']['text'] = (this['rolePriceData']['allPrice'] || 0x0) + '/' + +this['tool']['data']['y'] + '元', this['main']['box_2_btn_copy']['skin'] = this['tool']['copyIcon'], this['main']['box_2_btn_get']['skin'] = this['tool']['getIcon'], this['main']['box_2_btn_copy']['visible'] = ![], this['main']['box_2_btn_get']['on'](Laya['Event']['CLICK'], this, function () {
      if (aru4$e['rolePriceData']['is_vip'] == 0x0) {
        sjgq8['msg']('请先获取vip资格');return;
      }aru4$e['main']['box_2_lab_wx']['text'] = this['rolePriceData']['vip_wx'], aru4$e['main']['box_2_btn_copy']['visible'] = !![];
    }), this['main']['box_2_btn_copy']['on'](Laya['Event']['CLICK'], this, function () {
      aru4$e['copyText'](this['rolePriceData']['vip_wx']);
    }), this['main']['box_2_addclick']['on'](Laya['Event']['CLICK'], this, function () {
      if (aru4$e['rolePriceData']['is_vip'] == 0x0) return;this['main']['box_help_qrcode']['skin'] = aru4$e['rolePriceData']['vip_qrcode'], aru4$e['main']['box_help']['visible'] = !![];
    }), this['main']['box_help_close']['on'](Laya['Event']['CLICK'], this, function () {
      aru4$e['main']['box_help']['visible'] = ![];
    }), this['main']['box_help_bg']['skin'] = this['tool']['data']['vip_customer_service_not_add'], this['main']['box_help_qrcode']['skin'] = aru4$e['rolePriceData']['vip_qrcode'], this['main']['box_help_qrcode']['scaleX'] = 0xa0 / this['main']['box_help_qrcode']['width'], this['main']['box_help_qrcode']['scaleY'] = 0xa0 / this['main']['box_help_qrcode']['width'], this['main']['box_3_panel']['vScrollBar']['visible'] = ![], this['main']['box_3_panel']['vScrollBarSkin'] = 'common_atlas/scrollBar.png';
  }, mx0i_['prototype']['initIcon'] = function () {
    this['icon'] = new Laya['Image'](), this['icon']['skin'] = this['tool']['data']['basics_image_url'], this['icon']['x'] = 0x0, this['icon']['y'] = 0xc8, this['icon']['width'] = 0x66, this['icon']['height'] = 0x6f, this['main']['addChild'](this['icon']), this['icon']['on'](Laya['Event']['MOUSE_DOWN'], this, this['iconPress']), this['icon']['on'](Laya['Event']['MOUSE_UP'], this, this['iconUp']), this['icon']['on'](Laya['Event']['MOUSE_WHEEL'], this, this['iconMove']), this['dragRect'] = new Laya['Rectangle'](-this['icon']['width'] / 0x2, 0x0, Laya['stage']['width'], Laya['stage']['height'] - this['icon']['height'] / 0x2);
  }, mx0i_['prototype']['initEvent'] = function () {
    var j1b8 = this;this['main']['btn_1']['on'](Laya['Event']['CLICK'], this, function () {
      if (j1b8['page'] == 0x1) return;j1b8['page1']();
    }), this['main']['btn_2']['on'](Laya['Event']['CLICK'], this, function () {
      if (j1b8['page'] == 0x2) return;j1b8['page2']();
    }), this['main']['btn_3']['on'](Laya['Event']['CLICK'], this, function () {
      if (j1b8['page'] == 0x3) return;j1b8['page3']();
    }), this['main']['btn_close']['on'](Laya['Event']['CLICK'], this, function () {
      j1b8['main']['bg']['x'] = -0x2ee, j1b8['icon']['visible'] = !![];
    });
  }, mx0i_['prototype']['initBoard'] = function () {
    this['isInitBoard'] = !![], this['page1']();
  }, mx0i_['prototype']['showBoard'] = function () {
    this['main']['bg']['x'] = 0x0, this['icon']['visible'] = ![];var rau4$e = s1X4['selectedServer']['server_id'],
        vzoru = s1X4['selectedServer']['server_name'],
        gj1p8q = s1X4['roleId'],
        $34eru = s1X4['roleName'],
        pgjy = sv3ozk9['sygame']['openid'],
        bq8jg = '&role_id=' + sv3ozk9['sygame']['role_id'] + '&channel=' + sv3ozk9['sygame']['channel'] + '&server_id=' + rau4$e + '&server_name=' + vzoru + '&wecha_id=' + pgjy + '&role_id=' + gj1p8q + '&role_name=' + $34eru;this['tool']['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=sidebarApiRoleId' + bq8jg, this['rolePriceHandler']['bind'](this), this['roleError']['bind'](this));
  }, mx0i_['prototype']['page1'] = function () {
    this['page'] = 0x1, this['main']['bg']['skin'] = this['tool']['data']['public_code'], this['main']['box_1_show']['visible'] = !![], this['main']['box_2_show']['visible'] = ![], this['main']['box_3_show']['visible'] = ![];
  }, mx0i_['prototype']['page2'] = function () {
    this['page'] = 0x2, this['main']['bg']['skin'] = this['tool']['data']['vip_customer_service'], this['main']['box_1_show']['visible'] = ![], this['main']['box_2_show']['visible'] = !![], this['main']['box_3_show']['visible'] = ![];
  }, mx0i_['prototype']['page3'] = function () {
    this['page'] = 0x3, this['main']['bg']['skin'] = this['tool']['data']['game_center_image_url'], this['main']['box_1_show']['visible'] = ![], this['main']['box_2_show']['visible'] = ![], this['main']['box_3_show']['visible'] = !![], this['sendBox'] || this['getBoxList'](0x0), this['sendBox'] = !![], sf6b8l1 && sf6b8l1['syClickOpenBox']();
  }, mx0i_['prototype']['getBoxList'] = function (u$dea) {
    var sy5qph = this;sf6b8l1 && sf6b8l1['syGetBoxList']({ 'page': u$dea, 'count': 0xc })['then'](function (du4ae) {
      var spyh = du4ae['data'];spyh['status'] == 0x3e9 ? spyh['data'] && spyh['data']['length'] && (sy5qph['boxlist'] = sy5qph['boxlist']['concat'](spyh['data']), u$dea++, sy5qph['getBoxList'](u$dea)) : sy5qph['boxListHandler']();
    });
  }, mx0i_['prototype']['copyText'] = function (a$d5h) {
    try {
      wx['setClipboardData']({ 'data': a$d5h, 'success': function (ck09) {
          console['log']('复制成功:', ck09);
        } });
    } catch (tmx72n) {}
  }, mx0i_['prototype']['rolePriceHandler'] = function (j1g8p) {
    this['rolePriceData'] = JSON['parse'](j1g8p);switch (this['rolePriceData']['status']) {case 0x3e9:
        this['main']['box_2_lab_v_1']['text'] = (this['rolePriceData']['todayPrice'] || 0x0) + '/' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_v_2']['text'] = (this['rolePriceData']['allPrice'] || 0x0) + '/' + +this['tool']['data']['y'] + '元';break;case 0x3ea:
        break;case 0x3eb:
        break;}
  }, mx0i_['prototype']['roleError'] = function () {}, mx0i_['prototype']['boxListHandler'] = function () {
    var u4ear$ = function (yh5d$) {
      var rue$43 = g1jqp8['boxlist'][yh5d$],
          ue34r$ = new sw90_['demoui']['BoxItemUI']();ue34r$['icon']['skin'] = rue$43['icon'], ue34r$['title']['text'] = rue$43['title'], ue34r$['x'] = 0xa0 * (yh5d$ % 0x3), ue34r$['y'] = 0xa0 * (yh5d$ / 0x3 ^ 0x0), g1jqp8['main']['box_3_panel']['addChild'](ue34r$);var wvo9z = { 'appid': sv3ozk9['sygame']['appid'], 'game_id': rue$43['game_id'], 'jump_appid': rue$43['jump_appid'], 'jump_path': rue$43['jump_path'], 'tunnel_id': rue$43['tunnel_id'], 'uv': 0x0, 'wecha_id': sv3ozk9['sygame']['openid'] },
          mxi2tn = rue$43['preview_img'],
          l81fb6 = rue$43['jump_type'],
          spg1jq = rue$43['kf_session'];ue34r$['on'](Laya['Event']['CLICK'], g1jqp8, function () {
        sf6b8l1 && sf6b8l1['syClickBox']({ 'game_id': rue$43['game_id'], 'tunnel_id': rue$43['tunnel_id'], 'jump_appid': rue$43['jump_appid'], 'jump_path': rue$43['jump_path'] })['then'](function (zk0wc) {
          if (l81fb6 === '0') wx['navigateToMiniProgram']({ 'appId': wvo9z['jump_appid'], 'path': wvo9z['jump_path'], 'fail': function (v3ruz) {
              if (!mxi2tn) return;wx['previewImage']({ 'urls': [mxi2tn] });
            } });else {
            if (l81fb6 === '1') {
              if (!mxi2tn) return;wx['previewImage']({ 'urls': [mxi2tn] });
            } else {
              if (l81fb6 === '2') {
                if (!spg1jq) return;wx['openCustomerServiceConversation']({ 'sessionFrom': spg1jq, 'showMessageCard': !![], 'sendMessageTitle': '', 'sendMessagePath': '', 'sendMessageImg': '' });
              }
            }
          }
        });
      });
    },
        g1jqp8 = this;for (var $a4ure = 0x0; $a4ure < this['boxlist']['length']; $a4ure++) {
      u4ear$($a4ure);
    }
  }, mx0i_['prototype']['boxListError'] = function () {}, mx0i_['prototype']['boxClickHandler'] = function () {}, mx0i_['prototype']['iconPress'] = function (d$h5a) {
    this['donwX'] = d$h5a['target']['x'], this['donwY'] = d$h5a['target']['y'], this['icon']['startDrag'](this['dragRect']), this['isMove'] = ![], this['isPress'] = !![];
  }, mx0i_['prototype']['iconMove'] = function (o3vrkz) {
    this['isMove'] = !![];
  }, mx0i_['prototype']['iconUp'] = function (ypqsh) {
    var hyq5 = ypqsh['target']['x'],
        _xmn2i = ypqsh['target']['y'];this['icon']['stopDrag'](), hyq5 == this['donwX'] && this['donwY'] == _xmn2i && (this['isInitBoard'] || this['initBoard'](), this['showBoard']()), this['isMove'] = ![], this['isPress'] = ![];
  }, mx0i_;
}(),
    sw90_;(function (j1g8q) {
  var iwc_x;(function (g1b6) {
    var ouv3e = function (s5ydhp) {
      so43re(iwc09, s5ydhp);function iwc09() {
        return s5ydhp['call'](this) || this;
      }return iwc09['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), s5ydhp['prototype']['createChildren']['call'](this), this['createView'](j1g8q['demoui']['BoxItemUI']['uiView']);
      }, iwc09['uiView'] = { 'type': 'View', 'props': { 'width': 0xb4, 'height': 0xa0 }, 'child': [{ 'type': 'Image', 'props': { 'y': 0x3, 'x': 0x20, 'width': 0x73, 'var': 'icon', 'height': 0x73 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x79, 'x': -0x21, 'width': 0xb4, 'var': 'title', 'valign': 'middle', 'height': 0x22, 'fontSize': 0x16, 'color': '#441d1c', 'align': 'center' } }] }] }, iwc09;
    }(laya['ui']['View']);g1b6['BoxItemUI'] = ouv3e;
  })(iwc_x = j1g8q['demoui'] || (j1g8q['demoui'] = {}));
})(sw90_ || (sw90_ = {})), function (jbq8g1) {
  var hyas;(function (yshpgq) {
    var qysp = function (wkzv90) {
      so43re(e4$uar, wkzv90);function e4$uar() {
        return wkzv90['call'](this) || this;
      }return e4$uar['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), wkzv90['prototype']['createChildren']['call'](this), this['createView'](jbq8g1['demoui']['MainUI']['uiView']);
      }, e4$uar['uiView'] = { 'type': 'View', 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x2ee, 'top': 0x0, 'right': 0x0, 'left': 0x0, 'height': 0x536, 'bottom': 0x0 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x2ee, 'height': 0x536, 'centerY': 0x0 }, 'child': [{ 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x2ee, 'var': 'bg', 'height': 0x536 }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x2ee, 'visible': ![], 'var': 'box_1_show', 'height': 0x536, 'centerY': 0x0 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x253, 'x': 0x2e, 'width': 0x1d0, 'var': 'box_1_lab_info', 'leading': 0xa, 'height': 0x97, 'fontSize': 0x18, 'color': '#a959ee' } }, { 'type': 'HBox', 'props': { 'y': 0x2ee, 'x': 0x14, 'width': 0x1fe, 'space': 0x35, 'height': 0x78, 'align': 'top' }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x58, 'var': 'box_1_img_1', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_1', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0xa, 'x': 0xa, 'width': 0x58, 'var': 'box_1_img_2', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_2', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x14, 'x': 0x14, 'width': 0x58, 'var': 'box_1_img_3', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_3', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x1e, 'x': 0x1e, 'width': 0x58, 'var': 'box_1_img_4', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_4', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }] }] }, { 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'visible': ![], 'var': 'box_2_show' }, 'child': [{ 'type': 'HBox', 'props': { 'y': 0x220, 'x': 0x18, 'width': 0x1f4, 'space': 0x2c, 'height': 0x56, 'align': 'top' }, 'child': [{ 'type': 'Image', 'props': { 'y': 2.5, 'x': 0x0, 'width': 0x58, 'var': 'box_2_img_1', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_1', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0xc, 'x': 0xa, 'width': 0x58, 'var': 'box_2_img_2', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_2', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x16, 'x': 0x14, 'width': 0x58, 'var': 'box_2_img_3', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_3', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x20, 'x': 0x1e, 'width': 0x58, 'var': 'box_2_img_4', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_4', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x2a, 'x': 0x28, 'width': 0x58, 'var': 'box_2_img_5', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_5', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }] }, { 'type': 'Box', 'props': { 'y': 0x384, 'x': 0x0, 'width': 0x221, 'height': 0x44 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x0, 'x': 0x28, 'width': 0x122, 'var': 'box_2_lab_m_1', 'text': '方法一\uFF1A单日充值1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300' } }, { 'type': 'Text', 'props': { 'y': 0x1e, 'x': 0x28, 'width': 0x122, 'var': 'box_2_lab_m_2', 'text': '方法一\uFF1A历史累计充值1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300' } }, { 'type': 'Text', 'props': { 'y': 0x0, 'x': 0x141, 'width': 0xa4, 'var': 'box_2_lab_v_1', 'text': '1000/1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300', 'align': 'right' } }, { 'type': 'Text', 'props': { 'y': 0x1e, 'x': 0x141, 'width': 0xa4, 'var': 'box_2_lab_v_2', 'text': '1000/1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300', 'align': 'right' } }] }, { 'type': 'Image', 'props': { 'y': 0x1aa, 'x': 0x159, 'width': 0x66, 'var': 'box_2_btn_get', 'stateNum': 0x1, 'height': 0x26 } }, { 'type': 'Image', 'props': { 'y': 0x1aa, 'x': 0x159, 'width': 0x66, 'var': 'box_2_btn_copy', 'stateNum': 0x1, 'height': 0x26 } }, { 'type': 'Button', 'props': { 'y': 0x1d2, 'x': 0x126, 'width': 0xc9, 'var': 'box_2_addclick', 'stateNum': 0x1, 'height': 0x1b } }, { 'type': 'Text', 'props': { 'y': 0x13c, 'x': 0x17a, 'width': 0xa3, 'var': 'box_2_lab_wx', 'height': 0x1f, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'left' } }] }, { 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'visible': ![], 'var': 'box_3_show' }, 'child': [{ 'type': 'Panel', 'props': { 'y': 0xf5, 'x': 0x10, 'width': 0x201, 'var': 'box_3_panel', 'vScrollBarSkin': '', 'height': 0x29e } }] }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0x0, 'width': 0xbb, 'var': 'btn_1', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0xba, 'width': 0xbb, 'var': 'btn_2', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0x177, 'width': 0xbb, 'var': 'btn_3', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x203, 'x': 0x22e, 'width': 0x25, 'var': 'btn_close', 'height': 0x8f } }, { 'type': 'Box', 'props': { 'width': 0x2ee, 'visible': ![], 'var': 'box_help', 'height': 0x536 }, 'child': [{ 'type': 'Sprite', 'props': { 'y': 0x0, 'x': 0x0, 'mouseThrough': ![], 'alpha': 0.7 }, 'child': [{ 'type': 'Rect', 'props': { 'width': 0x2ee, 'lineWidth': 0x1, 'height': 0x536, 'fillColor': '#000000' } }] }, { 'type': 'Image', 'props': { 'y': 0x158, 'x': 0x28, 'width': 0x1d2, 'var': 'box_help_bg', 'height': 0x203 }, 'child': [{ 'type': 'Button', 'props': { 'y': -0x1, 'x': 0x1a0, 'width': 0x33, 'var': 'box_help_close', 'height': 0x28 } }, { 'type': 'Image', 'props': { 'y': 0x3f, 'x': 0x98, 'width': 0xa0, 'var': 'box_help_qrcode', 'height': 0xa0 } }] }] }] }] }] }, e4$uar;
    }(laya['ui']['View']);yshpgq['MainUI'] = qysp;
  })(hyas = jbq8g1['demoui'] || (jbq8g1['demoui'] = {}));
}(sw90_ || (sw90_ = {})), function (tn27m) {
  var yd$;(function (zo39vk) {
    var h5dysa = function (qsjyg) {
      so43re(h$ya5, qsjyg);function h$ya5() {
        return qsjyg['call'](this) || this;
      }return h$ya5['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), qsjyg['prototype']['createChildren']['call'](this), this['createView'](tn27m['demoui']['ToastUI']['uiView']);
      }, h$ya5['uiView'] = { 'type': 'View', 'props': { 'width': 0x2ee, 'height': 0x536 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x12c, 'height': 0x32, 'centerY': 0x0, 'centerX': 0x0 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x12c, 'height': 0x32, 'centerX': 0x0, 'alpha': 0.5 }, 'child': [{ 'type': 'Rect', 'props': { 'width': 0x12c, 'lineWidth': 0x1, 'height': 0x32, 'fillColor': '#382f2f' } }] }, { 'type': 'Text', 'props': { 'width': 0x12c, 'var': 'lab_msg', 'valign': 'middle', 'text': 'text', 'height': 0x32, 'fontSize': 0x18, 'color': '#ffffff', 'align': 'center' } }] }] }, h$ya5;
    }(laya['ui']['View']);zo39vk['ToastUI'] = h5dysa;
  })(yd$ = tn27m['demoui'] || (tn27m['demoui'] = {}));
}(sw90_ || (sw90_ = {}));var sjgq8 = function () {
  function ady5h$() {}return ady5h$['init'] = function () {
    !this['ui'] && (this['ui'] = new sw90_['demoui']['ToastUI'](), this['ui']['visible'] = ![], Laya['stage']['addChild'](this['ui']));
  }, ady5h$['msg'] = function (syhgp) {
    var vk9wz = this;!this['ui'] && ady5h$['init'](), this['ui']['visible'] = !![], this['ui']['lab_msg']['text'] = syhgp, clearTimeout(this['interval']), this['interval'] = setTimeout(function () {
      vk9wz['ui']['visible'] = ![];
    }, 0x7d0);
  }, ady5h$;
}();window['minitool'] = swvko;