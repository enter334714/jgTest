var c = wx.$o;
var o_gbz8ho = this && this['__extends'] || function () {
  var rhz8cp = function (k$yj0e, z8boch) {
    return (rhz8cp = Object['setPrototypeOf'] || { '__proto__': [] } instanceof Array && function (a6lvd, nl6v3a) {
      a6lvd['__proto__'] = nl6v3a;
    } || function (p8czmr, k0e_$) {
      for (var rs5mtq in k0e_$) k0e_$['hasOwnProperty'](rs5mtq) && (p8czmr[rs5mtq] = k0e_$[rs5mtq]);
    })(k$yj0e, z8boch);
  };return function (rcmpt, hp8bcz) {
    function o4zgh() {
      this['constructor'] = rcmpt;
    }rhz8cp(rcmpt, hp8bcz), rcmpt['prototype'] = null === hp8bcz ? Object['create'](hp8bcz) : (o4zgh['prototype'] = hp8bcz['prototype'], new o4zgh());
  };
}(),
    o_uey_0 = window['Sygame'],
    o_ifxw1 = !0x1,
    o_b4zgh = function () {
  function rmp() {}return rmp['init'] = function () {
    this['sygame'] = o_ifxw1 ? { 'channel': '3477d2273abd484ba2a0e04ad4971b3c', 'role_id': void 0x0, 'openid': 'oxmOf5biumkGash-Xht9FVAlswVk', 'appid': 'wx2936121c4817bf46' } : o_uey_0;
  }, rmp['getTimeStamp'] = function () {
    return new Date()['getTime']();
  }, rmp['setResMap'] = function (nva36, li62da) {
    this['resMap'][nva36] = nva36 + '?' + li62da;
  }, rmp['getResMap'] = function (kynu_) {
    return this['resMap'][kynu_];
  }, rmp['resMap'] = {}, rmp;
}(),
    o_y0_e = function () {
  function ueyk0_() {
    this['getIcon'] = 'https://wx.11babay.cn/uploads/f/fkccc1532944783/5/2/c/7/60dc442c4fbc5.png', this['copyIcon'] = 'https://wx.11babay.cn/uploads/f/fkccc1532944783/3/0/1/7/60dc4409dce39.png', o_b4zgh['init'](), this['postSidebarApi']();
  }return ueyk0_['prototype']['send'] = function (euy_k0, rmzc8p, _eyk0u, v_ny3u, cbh8oz) {
    void 0x0 === v_ny3u && (v_ny3u = 'get'), void 0x0 === cbh8oz && (cbh8oz = null);var dw12 = new Laya['HttpRequest']();dw12['http']['timeout'] = 0x2710, dw12['once'](Laya['Event']['COMPLETE'], this, rmzc8p), dw12['once'](Laya['Event']['ERROR'], this, _eyk0u), dw12['send'](euy_k0, cbh8oz, v_ny3u, 'text');
  }, ueyk0_['prototype']['postSidebarApi'] = function () {
    this['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=sidebarApi&channel=' + o_b4zgh['sygame']['channel'], this['completeHandler'], this['errorHandler']);
  }, ueyk0_['prototype']['completeHandler'] = function (pr5tc) {
    var ad1i26 = JSON['parse'](pr5tc);switch (console['log'](ad1i26), ad1i26['status']) {case 0x3e9:
        var zb8oc = [];ad1i26['msg']['basics_image_url'] && zb8oc['push']({ 'url': ad1i26['msg']['basics_image_url'], 'type': Laya['Loader']['IMAGE'] }), ad1i26['msg']['public_code'] && zb8oc['push']({ 'url': ad1i26['msg']['public_code'], 'type': Laya['Loader']['IMAGE'] }), ad1i26['msg']['vip_customer_service'] && zb8oc['push']({ 'url': ad1i26['msg']['vip_customer_service'], 'type': Laya['Loader']['IMAGE'] }), ad1i26['msg']['vip_customer_service_not_add'] && zb8oc['push']({ 'url': ad1i26['msg']['vip_customer_service_not_add'], 'type': Laya['Loader']['IMAGE'] }), ad1i26['msg']['game_center_image_url'] && zb8oc['push']({ 'url': ad1i26['msg']['game_center_image_url'], 'type': Laya['Loader']['IMAGE'] }), ad1i26['msg']['vip_qrcode'] && zb8oc['push']({ 'url': ad1i26['msg']['vip_qrcode'], 'type': Laya['Loader']['IMAGE'] }), ad1i26['msg']['getIcon'] && zb8oc['push']({ 'url': this['getIcon'], 'type': Laya['Loader']['IMAGE'] }), ad1i26['msg']['copyIcon'] && zb8oc['push']({ 'url': this['copyIcon'], 'type': Laya['Loader']['IMAGE'] });for (var y$je = 0x0, g4bx9o = ad1i26['msg']['follow_gift_list']; y$je < g4bx9o['length']; y$je++) {
          var ila62 = g4bx9o[y$je];zb8oc['push']({ 'url': ila62['url'], 'type': Laya['Loader']['IMAGE'] });
        }for (var phc8z = 0x0, b8phz = ad1i26['msg']['vip_box_list']; phc8z < b8phz['length']; phc8z++) {
          ila62 = b8phz[phc8z], zb8oc['push']({ 'url': ila62['url'], 'type': Laya['Loader']['IMAGE'] });
        }for (var boghx = 0x0; boghx < zb8oc['length']; boghx++) o_b4zgh['setResMap'](zb8oc[boghx]['url'], o_b4zgh['getTimeStamp']()), zb8oc[boghx]['url'] = o_b4zgh['getResMap'](zb8oc[boghx]['url']);Laya['loader']['load'](zb8oc, Laya['Handler']['create'](this, this['initGame'])), this['data'] = ad1i26['msg'];break;case 0x3ea:
        o_u_3vl['msg']('空的游戏channel');break;case 0x3eb:
        o_u_3vl['msg']('错误的游戏channel');break;case 0x3ec:
        o_u_3vl['msg']('未找到对应游戏大类');break;case 0x3ed:
        o_u_3vl['msg']('未设置侧边栏');}
  }, ueyk0_['prototype']['errorHandler'] = function (mctrp) {}, ueyk0_['prototype']['initGame'] = function () {
    new o_o4x9gb(this)['show']();
  }, ueyk0_;
}(),
    o_o4x9gb = function () {
  function nvu3y_(enyk_) {
    this['page'] = 0x3, this['rolePriceData'] = {}, this['boxlist'] = [], this['donwX'] = 0x0, this['downY'] = 0x0, this['tool'] = enyk_;
  }return nvu3y_['prototype']['setChildMouseThroughs'] = function (trsqm) {
    var zpcb8 = trsqm['_childs'] || [];for (var nv3la6 = 0x0; nv3la6 < zpcb8['length']; nv3la6++) zpcb8[nv3la6] && (zpcb8[nv3la6]['mouseThrough'] = !0x0);
  }, nvu3y_['prototype']['show'] = function () {
    if ('1' === this['tool']['data']['on']) {
      this['main'] = new o_nula['demoui']['MainUI'](), Laya['stage']['addChild'](this['main']), this['main']['mouseThrough'] = !0x0;var czo8bh = this['main']['_childs'] || [];for (var rzmp8c = 0x0; rzmp8c < czo8bh['length']; rzmp8c++) czo8bh[rzmp8c]['mouseThrough'] = !0x0;this['setChildMouseThroughs'](this['main']['_childs']), this['setChildMouseThroughs'](this['main']['_childs'][0x0]), this['initIcon'](), this['initEvent'](), this['initView'](), o_u_3vl['init']();
    }
  }, nvu3y_['prototype']['initView'] = function () {
    var p8zrh = this,
        chz8ob = this['tool']['data']['follow_down_words']['replace'](/\\n/g, '\x0a');this['main']['box_1_lab_info']['text'] = chz8ob;for (var g8bzh = 0x1; g8bzh <= this['tool']['data']['follow_gift_list']['length']; g8bzh++) {
      var ct5mr = this['tool']['data']['follow_gift_list'][g8bzh - 0x1];this['main']['box_1_img_' + g8bzh]['skin'] = ct5mr['url'], this['main']['box_1_lab_' + g8bzh]['text'] = ct5mr['name'];
    }for (g8bzh = 0x1; g8bzh <= this['tool']['data']['vip_box_list']['length']; g8bzh++) {
      ct5mr = this['tool']['data']['vip_box_list'][g8bzh - 0x1], (this['main']['box_2_img_' + g8bzh]['skin'] = ct5mr['url'], this['main']['box_2_lab_' + g8bzh]['text'] = ct5mr['name']);
    }this['main']['box_2_lab_m_1']['text'] = '方法一：单日充值' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_m_2']['text'] = '方法二：历史累计充值' + +this['tool']['data']['y'] + '元', this['main']['box_2_lab_v_1']['text'] = (this['rolePriceData']['todayPrice'] || 0x0) + '/' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_v_2']['text'] = (this['rolePriceData']['allPrice'] || 0x0) + '/' + +this['tool']['data']['y'] + '元', this['main']['box_2_btn_copy']['skin'] = this['tool']['copyIcon'], this['main']['box_2_btn_get']['skin'] = this['tool']['getIcon'], this['main']['box_2_btn_copy']['visible'] = !0x1, this['main']['box_2_btn_get']['on'](Laya['Event']['CLICK'], this, function () {
      0x0 != p8zrh['rolePriceData']['is_vip'] ? (p8zrh['main']['box_2_lab_wx']['text'] = p8zrh['tool']['data']['vip_wx'], p8zrh['main']['box_2_btn_copy']['visible'] = !0x0) : o_u_3vl['msg']('请先获取vip资格');
    }), this['main']['box_2_btn_copy']['on'](Laya['Event']['CLICK'], this, function () {
      p8zrh['copyText'](p8zrh['tool']['data']['vip_wx']);
    }), this['main']['box_2_addclick']['on'](Laya['Event']['CLICK'], this, function () {
      0x0 != p8zrh['rolePriceData']['is_vip'] && (p8zrh['main']['box_help']['visible'] = !0x0);
    }), this['main']['box_help_close']['on'](Laya['Event']['CLICK'], this, function () {
      p8zrh['main']['box_help']['visible'] = !0x1;
    }), this['main']['box_help_bg']['skin'] = this['tool']['data']['vip_customer_service_not_add'], this['main']['box_help_qrcode']['skin'] = this['tool']['data']['vip_qrcode'], this['main']['box_help_qrcode']['scaleX'] = 0xa0 / this['main']['box_help_qrcode']['width'], this['main']['box_help_qrcode']['scaleY'] = 0xa0 / this['main']['box_help_qrcode']['width'], this['main']['box_3_panel']['vScrollBar']['visible'] = !0x1, this['main']['box_3_panel']['vScrollBarSkin'] = 'common_atlas/scrollBar.png';
  }, nvu3y_['prototype']['initIcon'] = function () {
    this['icon'] = new Laya['Image'](), this['icon']['skin'] = this['tool']['data']['basics_image_url'], this['icon']['x'] = 0x0, this['icon']['y'] = 0xc8, this['icon']['width'] = 0x66, this['icon']['height'] = 0x6f, this['main']['addChild'](this['icon']), this['icon']['on'](Laya['Event']['MOUSE_DOWN'], this, this['iconPress']), this['icon']['on'](Laya['Event']['MOUSE_UP'], this, this['iconUp']), this['icon']['on'](Laya['Event']['MOUSE_WHEEL'], this, this['iconMove']), this['dragRect'] = new Laya['Rectangle'](-this['icon']['width'] / 0x2, 0x0, Laya['stage']['width'], Laya['stage']['height'] - this['icon']['height'] / 0x2);
  }, nvu3y_['prototype']['initEvent'] = function () {
    var zm8pc = this;this['main']['btn_1']['on'](Laya['Event']['CLICK'], this, function () {
      0x1 != zm8pc['page'] && zm8pc['page1']();
    }), this['main']['btn_2']['on'](Laya['Event']['CLICK'], this, function () {
      0x2 != zm8pc['page'] && zm8pc['page2']();
    }), this['main']['btn_3']['on'](Laya['Event']['CLICK'], this, function () {
      0x3 != zm8pc['page'] && zm8pc['page3']();
    }), this['main']['btn_close']['on'](Laya['Event']['CLICK'], this, function () {
      zm8pc['main']['bg']['x'] = -0x2ee, zm8pc['icon']['visible'] = !0x0;
    });
  }, nvu3y_['prototype']['initBoard'] = function () {
    this['isInitBoard'] = !0x0, this['page1']();
  }, nvu3y_['prototype']['showBoard'] = function () {
    this['main']['bg']['x'] = 0x0, this['icon']['visible'] = !0x1, this['tool']['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=sidebarApiRoleId&role_id=' + o_b4zgh['sygame']['role_id'] + '&channel=' + o_b4zgh['sygame']['channel'], this['rolePriceHandler']['bind'](this), this['roleError']['bind'](this));
  }, nvu3y_['prototype']['page1'] = function () {
    this['page'] = 0x1, this['main']['bg']['skin'] = this['tool']['data']['public_code'], this['main']['box_1_show']['visible'] = !0x0, this['main']['box_2_show']['visible'] = !0x1, this['main']['box_3_show']['visible'] = !0x1;
  }, nvu3y_['prototype']['page2'] = function () {
    this['page'] = 0x2, this['main']['bg']['skin'] = this['tool']['data']['vip_customer_service'], this['main']['box_1_show']['visible'] = !0x1, this['main']['box_2_show']['visible'] = !0x0, this['main']['box_3_show']['visible'] = !0x1;
  }, nvu3y_['prototype']['page3'] = function () {
    this['page'] = 0x3, this['main']['bg']['skin'] = this['tool']['data']['game_center_image_url'], this['main']['box_1_show']['visible'] = !0x1, this['main']['box_2_show']['visible'] = !0x1, this['main']['box_3_show']['visible'] = !0x0, this['sendBox'] || this['getBoxList'](0x0), this['sendBox'] = !0x0, o_uey_0 && o_uey_0['syClickOpenBox']();
  }, nvu3y_['prototype']['getBoxList'] = function (ny3e_u) {
    var uvn3_y = this;o_uey_0 && o_uey_0['syGetBoxList']({ 'page': ny3e_u, 'count': 0xc })['then'](function (e3n_yu) {
      e3n_yu = e3n_yu['data'], 0x3e9 == e3n_yu['status'] ? e3n_yu['data'] && e3n_yu['data']['length'] && (uvn3_y['boxlist'] = uvn3_y['boxlist']['concat'](e3n_yu['data']), ny3e_u++, uvn3_y['getBoxList'](ny3e_u)) : uvn3_y['boxListHandler']();
    });
  }, nvu3y_['prototype']['copyText'] = function (iwd62) {
    try {
      wx['setClipboardData']({ 'data': iwd62, 'success': function (eu_k) {
          console['log']('复制成功:', eu_k);
        } });
    } catch (yvu) {}
  }, nvu3y_['prototype']['rolePriceHandler'] = function (anvu) {
    this['rolePriceData'] = JSON['parse'](anvu), 0x3e9 === this['rolePriceData']['status'] && (this['main']['box_2_lab_v_1']['text'] = (this['rolePriceData']['todayPrice'] || 0x0) + '/' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_v_2']['text'] = (this['rolePriceData']['allPrice'] || 0x0) + '/' + +this['tool']['data']['y'] + '元');
  }, nvu3y_['prototype']['roleError'] = function () {}, nvu3y_['prototype']['boxListHandler'] = function () {
    var qt5s = this;for (var i2f19w = 0x0; i2f19w < this['boxlist']['length']; i2f19w++) !function (w4xgf) {
      var rp5mct = qt5s['boxlist'][w4xgf],
          fxg = new o_nula['demoui']['BoxItemUI']();fxg['icon']['skin'] = rp5mct['icon'], fxg['title']['text'] = rp5mct['title'], fxg['x'] = w4xgf % 0x3 * 0xa0, fxg['y'] = 0xa0 * (w4xgf / 0x3 ^ 0x0), qt5s['main']['box_3_panel']['addChild'](fxg);var li6a2 = { 'appid': o_b4zgh['sygame']['appid'], 'game_id': rp5mct['game_id'], 'jump_appid': rp5mct['jump_appid'], 'jump_path': rp5mct['jump_path'], 'tunnel_id': rp5mct['tunnel_id'], 'uv': 0x0, 'wecha_id': o_b4zgh['sygame']['openid'] },
          o9xgf4 = rp5mct['preview_img'],
          gx9o4 = rp5mct['jump_type'],
          w914xf = rp5mct['kf_session'];fxg['on'](Laya['Event']['CLICK'], qt5s, function () {
        o_uey_0 && o_uey_0['syClickBox']({ 'game_id': rp5mct['game_id'], 'tunnel_id': rp5mct['tunnel_id'], 'jump_appid': rp5mct['jump_appid'], 'jump_path': rp5mct['jump_path'] })['then'](function (av3ul) {
          '0' === gx9o4 ? wx['navigateToMiniProgram']({ 'appId': li6a2['jump_appid'], 'path': li6a2['jump_path'], 'fail': function (lnuv) {
              o9xgf4 && wx['previewImage']({ 'urls': [o9xgf4] });
            } }) : '1' === gx9o4 ? o9xgf4 && wx['previewImage']({ 'urls': [o9xgf4] }) : '2' === gx9o4 && w914xf && wx['openCustomerServiceConversation']({ 'sessionFrom': w914xf, 'showMessageCard': !0x0, 'sendMessageTitle': '', 'sendMessagePath': '', 'sendMessageImg': '' });
        });
      });
    }(i2f19w);
  }, nvu3y_['prototype']['boxListError'] = function () {}, nvu3y_['prototype']['boxClickHandler'] = function () {}, nvu3y_['prototype']['iconPress'] = function (cpt5rm) {
    this['donwX'] = cpt5rm['target']['x'], this['donwY'] = cpt5rm['target']['y'], this['icon']['startDrag'](this['dragRect']), this['isMove'] = !0x1, this['isPress'] = !0x0;
  }, nvu3y_['prototype']['iconMove'] = function (f4w1x9) {
    this['isMove'] = !0x0;
  }, nvu3y_['prototype']['iconUp'] = function (gbhzo4) {
    var fgxw94 = gbhzo4['target']['x'];gbhzo4 = gbhzo4['target']['y'], (this['icon']['stopDrag'](), fgxw94 == this['donwX'] && this['donwY'] == gbhzo4 && (this['isInitBoard'] || this['initBoard'](), this['showBoard']()), this['isMove'] = !0x1, this['isPress'] = !0x1);
  }, nvu3y_;
}(),
    o_nula;!function (_y$ek0) {
  function e3uy_n() {
    return x4fw1['call'](this) || this;
  }var w129fi, x4fw1;w129fi = _y$ek0['demoui'] || (_y$ek0['demoui'] = {}), x4fw1 = laya['ui']['View'], o_gbz8ho(e3uy_n, x4fw1), e3uy_n['prototype']['createChildren'] = function () {
    laya['ui']['View']['regComponent']('Text', laya['display']['Text']), x4fw1['prototype']['createChildren']['call'](this), this['createView'](_y$ek0['demoui']['BoxItemUI']['uiView']);
  }, e3uy_n['uiView'] = { 'type': 'View', 'props': { 'width': 0xb4, 'height': 0xa0 }, 'child': [{ 'type': 'Image', 'props': { 'y': 0x3, 'x': 0x20, 'width': 0x73, 'var': 'icon', 'height': 0x73 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x79, 'x': -0x21, 'width': 0xb4, 'var': 'title', 'valign': 'middle', 'height': 0x22, 'fontSize': 0x16, 'color': '#441d1c', 'align': 'center' } }] }] }, w129fi['BoxItemUI'] = e3uy_n;
}(o_nula = o_nula || {}), function (l3nua) {
  function vu3_y() {
    return q5strm['call'](this) || this;
  }var xghbo, q5strm;xghbo = l3nua['demoui'] || (l3nua['demoui'] = {}), q5strm = laya['ui']['View'], o_gbz8ho(vu3_y, q5strm), vu3_y['prototype']['createChildren'] = function () {
    laya['ui']['View']['regComponent']('Text', laya['display']['Text']), q5strm['prototype']['createChildren']['call'](this), this['createView'](l3nua['demoui']['MainUI']['uiView']);
  }, vu3_y['uiView'] = { 'type': 'View', 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x2ee, 'top': 0x0, 'right': 0x0, 'left': 0x0, 'height': 0x536, 'bottom': 0x0 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x2ee, 'height': 0x536, 'centerY': 0x0 }, 'child': [{ 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x2ee, 'var': 'bg', 'height': 0x536 }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x2ee, 'visible': !0x1, 'var': 'box_1_show', 'height': 0x536, 'centerY': 0x0 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x253, 'x': 0x2e, 'width': 0x1d0, 'var': 'box_1_lab_info', 'leading': 0xa, 'height': 0x97, 'fontSize': 0x18, 'color': '#a959ee' } }, { 'type': 'HBox', 'props': { 'y': 0x2ee, 'x': 0x14, 'width': 0x1fe, 'space': 0x35, 'height': 0x78, 'align': 'top' }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x58, 'var': 'box_1_img_1', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_1', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0xa, 'x': 0xa, 'width': 0x58, 'var': 'box_1_img_2', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_2', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x14, 'x': 0x14, 'width': 0x58, 'var': 'box_1_img_3', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_3', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x1e, 'x': 0x1e, 'width': 0x58, 'var': 'box_1_img_4', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_4', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }] }] }, { 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'visible': !0x1, 'var': 'box_2_show' }, 'child': [{ 'type': 'HBox', 'props': { 'y': 0x220, 'x': 0x18, 'width': 0x1f4, 'space': 0x2c, 'height': 0x56, 'align': 'top' }, 'child': [{ 'type': 'Image', 'props': { 'y': 2.5, 'x': 0x0, 'width': 0x58, 'var': 'box_2_img_1', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_1', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0xc, 'x': 0xa, 'width': 0x58, 'var': 'box_2_img_2', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_2', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x16, 'x': 0x14, 'width': 0x58, 'var': 'box_2_img_3', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_3', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x20, 'x': 0x1e, 'width': 0x58, 'var': 'box_2_img_4', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_4', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x2a, 'x': 0x28, 'width': 0x58, 'var': 'box_2_img_5', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_5', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }] }, { 'type': 'Box', 'props': { 'y': 0x384, 'x': 0x0, 'width': 0x221, 'height': 0x44 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x0, 'x': 0x28, 'width': 0x122, 'var': 'box_2_lab_m_1', 'text': '方法一\uFF1A单日充值1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300' } }, { 'type': 'Text', 'props': { 'y': 0x1e, 'x': 0x28, 'width': 0x122, 'var': 'box_2_lab_m_2', 'text': '方法一\uFF1A历史累计充值1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300' } }, { 'type': 'Text', 'props': { 'y': 0x0, 'x': 0x141, 'width': 0xa4, 'var': 'box_2_lab_v_1', 'text': '1000/1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300', 'align': 'right' } }, { 'type': 'Text', 'props': { 'y': 0x1e, 'x': 0x141, 'width': 0xa4, 'var': 'box_2_lab_v_2', 'text': '1000/1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300', 'align': 'right' } }] }, { 'type': 'Image', 'props': { 'y': 0x1aa, 'x': 0x159, 'width': 0x66, 'var': 'box_2_btn_get', 'stateNum': 0x1, 'height': 0x26 } }, { 'type': 'Image', 'props': { 'y': 0x1aa, 'x': 0x159, 'width': 0x66, 'var': 'box_2_btn_copy', 'stateNum': 0x1, 'height': 0x26 } }, { 'type': 'Button', 'props': { 'y': 0x1d2, 'x': 0x126, 'width': 0xc9, 'var': 'box_2_addclick', 'stateNum': 0x1, 'height': 0x1b } }, { 'type': 'Text', 'props': { 'y': 0x13c, 'x': 0x17a, 'width': 0xa3, 'var': 'box_2_lab_wx', 'height': 0x1f, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'left' } }] }, { 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'visible': !0x1, 'var': 'box_3_show' }, 'child': [{ 'type': 'Panel', 'props': { 'y': 0xf5, 'x': 0x10, 'width': 0x201, 'var': 'box_3_panel', 'vScrollBarSkin': '', 'height': 0x29e } }] }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0x0, 'width': 0xbb, 'var': 'btn_1', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0xba, 'width': 0xbb, 'var': 'btn_2', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0x177, 'width': 0xbb, 'var': 'btn_3', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x203, 'x': 0x22e, 'width': 0x25, 'var': 'btn_close', 'height': 0x8f } }, { 'type': 'Box', 'props': { 'width': 0x2ee, 'visible': !0x1, 'var': 'box_help', 'height': 0x536 }, 'child': [{ 'type': 'Sprite', 'props': { 'y': 0x0, 'x': 0x0, 'mouseThrough': !0x1, 'alpha': 0.7 }, 'child': [{ 'type': 'Rect', 'props': { 'width': 0x2ee, 'lineWidth': 0x1, 'height': 0x536, 'fillColor': '#000000' } }] }, { 'type': 'Image', 'props': { 'y': 0x158, 'x': 0x28, 'width': 0x1d2, 'var': 'box_help_bg', 'height': 0x203 }, 'child': [{ 'type': 'Button', 'props': { 'y': -0x1, 'x': 0x1a0, 'width': 0x33, 'var': 'box_help_close', 'height': 0x28 } }, { 'type': 'Image', 'props': { 'y': 0x3f, 'x': 0x98, 'width': 0xa0, 'var': 'box_help_qrcode', 'height': 0xa0 } }] }] }] }] }] }, xghbo['MainUI'] = vu3_y;
}(o_nula = o_nula || {}), function (ye$_0) {
  function w1xf4() {
    return d2wi6['call'](this) || this;
  }var f2idw1, d2wi6;f2idw1 = ye$_0['demoui'] || (ye$_0['demoui'] = {}), d2wi6 = laya['ui']['View'], o_gbz8ho(w1xf4, d2wi6), w1xf4['prototype']['createChildren'] = function () {
    laya['ui']['View']['regComponent']('Text', laya['display']['Text']), d2wi6['prototype']['createChildren']['call'](this), this['createView'](ye$_0['demoui']['ToastUI']['uiView']);
  }, w1xf4['uiView'] = { 'type': 'View', 'props': { 'width': 0x2ee, 'height': 0x536 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x12c, 'height': 0x32, 'centerY': 0x0, 'centerX': 0x0 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x12c, 'height': 0x32, 'centerX': 0x0, 'alpha': 0.5 }, 'child': [{ 'type': 'Rect', 'props': { 'width': 0x12c, 'lineWidth': 0x1, 'height': 0x32, 'fillColor': '#382f2f' } }] }, { 'type': 'Text', 'props': { 'width': 0x12c, 'var': 'lab_msg', 'valign': 'middle', 'text': 'text', 'height': 0x32, 'fontSize': 0x18, 'color': '#ffffff', 'align': 'center' } }] }] }, f2idw1['ToastUI'] = w1xf4;
}(o_nula = o_nula || {});var o_u_3vl = function () {
  function key$() {}return key$['init'] = function () {
    this['ui'] || (this['ui'] = new o_nula['demoui']['ToastUI'](), this['ui']['visible'] = !0x1, Laya['stage']['addChild'](this['ui']));
  }, key$['msg'] = function (dval6) {
    var x9i1wf = this;this['ui'] || key$['init'](), this['ui']['visible'] = !0x0, this['ui']['lab_msg']['text'] = dval6, clearTimeout(this['interval']), this['interval'] = setTimeout(function () {
      x9i1wf['ui']['visible'] = !0x1;
    }, 0x7d0);
  }, key$;
}();window['minitool'] = o_y0_e;