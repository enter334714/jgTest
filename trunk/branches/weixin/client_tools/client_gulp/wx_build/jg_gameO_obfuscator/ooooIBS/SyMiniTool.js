var c = wx.$o;
var o__n3ul = this && this['__extends'] || function () {
  var _$eky = function (uy_v3, uln3a) {
    return _$eky = Object['setPrototypeOf'] || { '__proto__': [] } instanceof Array && function (li6d, pzbhc) {
      li6d['__proto__'] = pzbhc;
    } || function (q5t, uyn_ek) {
      for (var ey_uk in uyn_ek) if (uyn_ek['hasOwnProperty'](ey_uk)) q5t[ey_uk] = uyn_ek[ey_uk];
    }, _$eky(uy_v3, uln3a);
  };return function (n3l6v, xfo9g) {
    _$eky(n3l6v, xfo9g);function valu3n() {
      this['constructor'] = n3l6v;
    }n3l6v['prototype'] = xfo9g === null ? Object['create'](xfo9g) : (valu3n['prototype'] = xfo9g['prototype'], new valu3n());
  };
}(),
    o_p8bzc = window['Sygame'],
    o_zh8ogb = ![],
    o_bzoc = function () {
  function trmp5() {}return trmp5['init'] = function () {
    o_zh8ogb ? this['sygame'] = { 'channel': '3477d2273abd484ba2a0e04ad4971b3c', 'role_id': undefined, 'openid': 'oxmOf5biumkGash-Xht9FVAlswVk', 'appid': 'wx2936121c4817bf46' } : this['sygame'] = o_p8bzc;
  }, trmp5['getTimeStamp'] = function () {
    return new Date()['getTime']();
  }, trmp5['setResMap'] = function (ek_ynu, c8mrpz) {
    this['resMap'][ek_ynu] = ek_ynu + '?' + c8mrpz;
  }, trmp5['getResMap'] = function (g9x4w) {
    return this['resMap'][g9x4w];
  }, trmp5['resMap'] = {}, trmp5;
}(),
    o_n_ekuy = function () {
  function r5pmq() {
    this['getIcon'] = 'https://wx.11babay.cn/uploads/f/fkccc1532944783/5/2/c/7/60dc442c4fbc5.png', this['copyIcon'] = 'https://wx.11babay.cn/uploads/f/fkccc1532944783/3/0/1/7/60dc4409dce39.png', o_bzoc['init'](), this['getBoxCheckoutCode']();
  }return r5pmq['prototype']['send'] = function (nye3_, _uy3n, fxgo94, ke_u, b94gx) {
    ke_u === void 0x0 && (ke_u = 'get');b94gx === void 0x0 && (b94gx = '' || null);var m5trqp = new Laya['HttpRequest']();m5trqp['http']['timeout'] = 0x2710, m5trqp['once'](Laya['Event']['COMPLETE'], this, _uy3n), m5trqp['once'](Laya['Event']['ERROR'], this, fxgo94), m5trqp['send'](nye3_, b94gx, ke_u, 'text');
  }, r5pmq['prototype']['postSidebarApi'] = function () {
    var x9fw4 = o_bzoc['sygame']['openid'],
        naul3 = '&channel=' + o_bzoc['sygame']['channel'] + '&wecha_id=' + x9fw4;this['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=sidebarApi' + naul3, this['completeHandler'], this['errorHandler']);
  }, r5pmq['prototype']['getBoxCheckoutCode'] = function () {
    var v3_ln = Sygame['SY_CONF']['commitId'];this['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=getBoxCheckoutCode', this['getBoxCheckoutCodeRes'], this['errorHandler'], 'post', { 'commitId': v3_ln });
  }, r5pmq['prototype']['getBoxCheckoutCodeRes'] = function (avlu3n) {
    var vun3_l = JSON['parse'](avlu3n);console['log']('getBoxCheckoutCode:', vun3_l);if (vun3_l['status'] == 0x3e9) {
      var sr5t = vun3_l['info'];sr5t == 0xfa1 ? this['postSidebarApi']() : console['error']('盛也盒子\x20不显示' + vun3_l);
    } else console['error']('盛也盒子 getBoxCheckoutCodeRes 其他错误' + vun3_l);
  }, r5pmq['prototype']['completeHandler'] = function (z8bog) {
    var rch8 = JSON['parse'](z8bog);console['log'](rch8);switch (rch8['status']) {case 0x3e9:
        var je$0k = [];rch8['msg']['basics_image_url'] && je$0k['push']({ 'url': rch8['msg']['basics_image_url'], 'type': Laya['Loader']['IMAGE'] }), rch8['msg']['public_code'] && je$0k['push']({ 'url': rch8['msg']['public_code'], 'type': Laya['Loader']['IMAGE'] }), rch8['msg']['vip_customer_service'] && je$0k['push']({ 'url': rch8['msg']['vip_customer_service'], 'type': Laya['Loader']['IMAGE'] }), rch8['msg']['vip_customer_service_not_add'] && je$0k['push']({ 'url': rch8['msg']['vip_customer_service_not_add'], 'type': Laya['Loader']['IMAGE'] }), rch8['msg']['game_center_image_url'] && je$0k['push']({ 'url': rch8['msg']['game_center_image_url'], 'type': Laya['Loader']['IMAGE'] }), rch8['msg']['vip_qrcode'] && je$0k['push']({ 'url': rch8['msg']['vip_qrcode'], 'type': Laya['Loader']['IMAGE'] }), rch8['msg']['getIcon'] && je$0k['push']({ 'url': this['getIcon'], 'type': Laya['Loader']['IMAGE'] }), rch8['msg']['copyIcon'] && je$0k['push']({ 'url': this['copyIcon'], 'type': Laya['Loader']['IMAGE'] });for (var rhp8zc = 0x0, cphz8r = rch8['msg']['follow_gift_list']; rhp8zc < cphz8r['length']; rhp8zc++) {
          var dai2 = cphz8r[rhp8zc];je$0k['push']({ 'url': dai2['url'], 'type': Laya['Loader']['IMAGE'] });
        }for (var v3a6 = 0x0, mqt5pr = rch8['msg']['vip_box_list']; v3a6 < mqt5pr['length']; v3a6++) {
          var dai2 = mqt5pr[v3a6];je$0k['push']({ 'url': dai2['url'], 'type': Laya['Loader']['IMAGE'] });
        }for (var a36nv = 0x0; a36nv < je$0k['length']; a36nv++) {
          o_bzoc['setResMap'](je$0k[a36nv]['url'], o_bzoc['getTimeStamp']()), je$0k[a36nv]['url'] = o_bzoc['getResMap'](je$0k[a36nv]['url']);
        }Laya['loader']['load'](je$0k, Laya['Handler']['create'](this, this['initGame'])), this['data'] = rch8['msg'];break;case 0x3ea:
        o_mrpcz['msg']('空的游戏channel');break;case 0x3eb:
        o_mrpcz['msg']('错误的游戏channel');break;case 0x3ec:
        o_mrpcz['msg']('未找到对应游戏大类');break;case 0x3ed:
        o_mrpcz['msg']('未设置侧边栏');break;}
  }, r5pmq['prototype']['errorHandler'] = function (vlan) {}, r5pmq['prototype']['initGame'] = function () {
    var r8hp = new o_b8cph(this);r8hp['show']();
  }, r5pmq;
}(),
    o_b8cph = function () {
  function i1w2f(b9og) {
    this['page'] = 0x3, this['rolePriceData'] = {}, this['boxlist'] = [], this['donwX'] = 0x0, this['downY'] = 0x0, this['tool'] = b9og;
  }return i1w2f['prototype']['setChildMouseThroughs'] = function (wdif2) {
    var vnu3_y = wdif2['_childs'] || [];for (var hcb8zo = 0x0; hcb8zo < vnu3_y['length']; hcb8zo++) {
      vnu3_y[hcb8zo] && (vnu3_y[hcb8zo]['mouseThrough'] = !![]);
    }
  }, i1w2f['prototype']['show'] = function () {
    if (this['tool']['data']['on'] === '1') {
      this['main'] = new o_uk_yn['demoui']['MainUI'](), Laya['stage']['addChild'](this['main']), this['main']['mouseThrough'] = !![];var zch = this['main']['_childs'] || [];for (var v63lad = 0x0; v63lad < zch['length']; v63lad++) {
        zch[v63lad]['mouseThrough'] = !![];
      }this['setChildMouseThroughs'](this['main']['_childs']), this['setChildMouseThroughs'](this['main']['_childs'][0x0]), this['initIcon'](), this['initEvent'](), this['initView'](), o_mrpcz['init']();
    }
  }, i1w2f['prototype']['initView'] = function () {
    var r5tq = this,
        gxw94 = this['tool']['data']['follow_down_words']['replace'](/\\n/g, '\x0a');this['main']['box_1_lab_info']['text'] = gxw94;for (var b4x = 0x1; b4x <= this['tool']['data']['follow_gift_list']['length']; b4x++) {
      var k$ye_ = this['tool']['data']['follow_gift_list'][b4x - 0x1];this['main']['box_1_img_' + b4x]['skin'] = k$ye_['url'], this['main']['box_1_lab_' + b4x]['text'] = k$ye_['name'];
    }for (var b4x = 0x1; b4x <= this['tool']['data']['vip_box_list']['length']; b4x++) {
      var k$ye_ = this['tool']['data']['vip_box_list'][b4x - 0x1];this['main']['box_2_img_' + b4x]['skin'] = k$ye_['url'], this['main']['box_2_lab_' + b4x]['text'] = k$ye_['name'];
    }this['main']['box_2_lab_m_1']['text'] = '方法一：单日充值' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_m_2']['text'] = '方法二：历史累计充值' + +this['tool']['data']['y'] + '元', this['main']['box_2_lab_v_1']['text'] = (this['rolePriceData']['todayPrice'] || 0x0) + '/' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_v_2']['text'] = (this['rolePriceData']['allPrice'] || 0x0) + '/' + +this['tool']['data']['y'] + '元', this['main']['box_2_btn_copy']['skin'] = this['tool']['copyIcon'], this['main']['box_2_btn_get']['skin'] = this['tool']['getIcon'], this['main']['box_2_btn_copy']['visible'] = ![], this['main']['box_2_btn_get']['on'](Laya['Event']['CLICK'], this, function () {
      if (r5tq['rolePriceData']['is_vip'] == 0x0) {
        o_mrpcz['msg']('请先获取vip资格');return;
      }r5tq['main']['box_2_lab_wx']['text'] = this['rolePriceData']['vip_wx'], r5tq['main']['box_2_btn_copy']['visible'] = !![];
    }), this['main']['box_2_btn_copy']['on'](Laya['Event']['CLICK'], this, function () {
      r5tq['copyText'](this['rolePriceData']['vip_wx']);
    }), this['main']['box_2_addclick']['on'](Laya['Event']['CLICK'], this, function () {
      if (r5tq['rolePriceData']['is_vip'] == 0x0) return;this['main']['box_help_qrcode']['skin'] = r5tq['rolePriceData']['vip_qrcode'], r5tq['main']['box_help']['visible'] = !![];
    }), this['main']['box_help_close']['on'](Laya['Event']['CLICK'], this, function () {
      r5tq['main']['box_help']['visible'] = ![];
    }), this['main']['box_help_bg']['skin'] = this['tool']['data']['vip_customer_service_not_add'], this['main']['box_help_qrcode']['skin'] = r5tq['rolePriceData']['vip_qrcode'], this['main']['box_help_qrcode']['scaleX'] = 0xa0 / this['main']['box_help_qrcode']['width'], this['main']['box_help_qrcode']['scaleY'] = 0xa0 / this['main']['box_help_qrcode']['width'], this['main']['box_3_panel']['vScrollBar']['visible'] = ![], this['main']['box_3_panel']['vScrollBarSkin'] = 'common_atlas/scrollBar.png';
  }, i1w2f['prototype']['initIcon'] = function () {
    this['icon'] = new Laya['Image'](), this['icon']['skin'] = this['tool']['data']['basics_image_url'], this['icon']['x'] = 0x0, this['icon']['y'] = 0xc8, this['icon']['width'] = 0x66, this['icon']['height'] = 0x6f, this['main']['addChild'](this['icon']), this['icon']['on'](Laya['Event']['MOUSE_DOWN'], this, this['iconPress']), this['icon']['on'](Laya['Event']['MOUSE_UP'], this, this['iconUp']), this['icon']['on'](Laya['Event']['MOUSE_WHEEL'], this, this['iconMove']), this['dragRect'] = new Laya['Rectangle'](-this['icon']['width'] / 0x2, 0x0, Laya['stage']['width'], Laya['stage']['height'] - this['icon']['height'] / 0x2);
  }, i1w2f['prototype']['initEvent'] = function () {
    var cozhb = this;this['main']['btn_1']['on'](Laya['Event']['CLICK'], this, function () {
      if (cozhb['page'] == 0x1) return;cozhb['page1']();
    }), this['main']['btn_2']['on'](Laya['Event']['CLICK'], this, function () {
      if (cozhb['page'] == 0x2) return;cozhb['page2']();
    }), this['main']['btn_3']['on'](Laya['Event']['CLICK'], this, function () {
      if (cozhb['page'] == 0x3) return;cozhb['page3']();
    }), this['main']['btn_close']['on'](Laya['Event']['CLICK'], this, function () {
      cozhb['main']['bg']['x'] = -0x2ee, cozhb['icon']['visible'] = !![];
    });
  }, i1w2f['prototype']['initBoard'] = function () {
    this['isInitBoard'] = !![], this['page1']();
  }, i1w2f['prototype']['showBoard'] = function () {
    this['main']['bg']['x'] = 0x0, this['icon']['visible'] = ![];var ln63 = _oAE['selectedServer']['server_id'],
        prc8m = _oAE['selectedServer']['server_name'],
        s7qm = _oAE['roleId'],
        ldav3 = _oAE['roleName'],
        ueny3_ = o_bzoc['sygame']['openid'],
        ynu_ke = '&role_id=' + o_bzoc['sygame']['role_id'] + '&channel=' + o_bzoc['sygame']['channel'] + '&server_id=' + ln63 + '&server_name=' + prc8m + '&wecha_id=' + ueny3_ + '&role_id=' + s7qm + '&role_name=' + ldav3;this['tool']['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=sidebarApiRoleId' + ynu_ke, this['rolePriceHandler']['bind'](this), this['roleError']['bind'](this));
  }, i1w2f['prototype']['page1'] = function () {
    this['page'] = 0x1, this['main']['bg']['skin'] = this['tool']['data']['public_code'], this['main']['box_1_show']['visible'] = !![], this['main']['box_2_show']['visible'] = ![], this['main']['box_3_show']['visible'] = ![];
  }, i1w2f['prototype']['page2'] = function () {
    this['page'] = 0x2, this['main']['bg']['skin'] = this['tool']['data']['vip_customer_service'], this['main']['box_1_show']['visible'] = ![], this['main']['box_2_show']['visible'] = !![], this['main']['box_3_show']['visible'] = ![];
  }, i1w2f['prototype']['page3'] = function () {
    this['page'] = 0x3, this['main']['bg']['skin'] = this['tool']['data']['game_center_image_url'], this['main']['box_1_show']['visible'] = ![], this['main']['box_2_show']['visible'] = ![], this['main']['box_3_show']['visible'] = !![], this['sendBox'] || this['getBoxList'](0x0), this['sendBox'] = !![], o_p8bzc && o_p8bzc['syClickOpenBox']();
  }, i1w2f['prototype']['getBoxList'] = function (d12a6) {
    var rqtmp5 = this;o_p8bzc && o_p8bzc['syGetBoxList']({ 'page': d12a6, 'count': 0xc })['then'](function (gxboh) {
      var bhozg = gxboh['data'];bhozg['status'] == 0x3e9 ? bhozg['data'] && bhozg['data']['length'] && (rqtmp5['boxlist'] = rqtmp5['boxlist']['concat'](bhozg['data']), d12a6++, rqtmp5['getBoxList'](d12a6)) : rqtmp5['boxListHandler']();
    });
  }, i1w2f['prototype']['copyText'] = function (ifw1) {
    try {
      wx['setClipboardData']({ 'data': ifw1, 'success': function (ke$yj0) {
          console['log']('复制成功:', ke$yj0);
        } });
    } catch (zcrp8m) {}
  }, i1w2f['prototype']['rolePriceHandler'] = function (ghz4b) {
    this['rolePriceData'] = JSON['parse'](ghz4b);switch (this['rolePriceData']['status']) {case 0x3e9:
        this['main']['box_2_lab_v_1']['text'] = (this['rolePriceData']['todayPrice'] || 0x0) + '/' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_v_2']['text'] = (this['rolePriceData']['allPrice'] || 0x0) + '/' + +this['tool']['data']['y'] + '元';break;case 0x3ea:
        break;case 0x3eb:
        break;}
  }, i1w2f['prototype']['roleError'] = function () {}, i1w2f['prototype']['boxListHandler'] = function () {
    var unyek_ = function (z4obh) {
      var o8zhbc = trqp5['boxlist'][z4obh],
          _3nl = new o_uk_yn['demoui']['BoxItemUI']();_3nl['icon']['skin'] = o8zhbc['icon'], _3nl['title']['text'] = o8zhbc['title'], _3nl['x'] = 0xa0 * (z4obh % 0x3), _3nl['y'] = 0xa0 * (z4obh / 0x3 ^ 0x0), trqp5['main']['box_3_panel']['addChild'](_3nl);var _yk$e0 = { 'appid': o_bzoc['sygame']['appid'], 'game_id': o8zhbc['game_id'], 'jump_appid': o8zhbc['jump_appid'], 'jump_path': o8zhbc['jump_path'], 'tunnel_id': o8zhbc['tunnel_id'], 'uv': 0x0, 'wecha_id': o_bzoc['sygame']['openid'] },
          xi9f = o8zhbc['preview_img'],
          b4gzo = o8zhbc['jump_type'],
          fxiw91 = o8zhbc['kf_session'];_3nl['on'](Laya['Event']['CLICK'], trqp5, function () {
        o_p8bzc && o_p8bzc['syClickBox']({ 'game_id': o8zhbc['game_id'], 'tunnel_id': o8zhbc['tunnel_id'], 'jump_appid': o8zhbc['jump_appid'], 'jump_path': o8zhbc['jump_path'] })['then'](function (h8zrcp) {
          if (b4gzo === '0') wx['navigateToMiniProgram']({ 'appId': _yk$e0['jump_appid'], 'path': _yk$e0['jump_path'], 'fail': function (jey$k) {
              if (!xi9f) return;wx['previewImage']({ 'urls': [xi9f] });
            } });else {
            if (b4gzo === '1') {
              if (!xi9f) return;wx['previewImage']({ 'urls': [xi9f] });
            } else {
              if (b4gzo === '2') {
                if (!fxiw91) return;wx['openCustomerServiceConversation']({ 'sessionFrom': fxiw91, 'showMessageCard': !![], 'sendMessageTitle': '', 'sendMessagePath': '', 'sendMessageImg': '' });
              }
            }
          }
        });
      });
    },
        trqp5 = this;for (var hgb8o = 0x0; hgb8o < this['boxlist']['length']; hgb8o++) {
      unyek_(hgb8o);
    }
  }, i1w2f['prototype']['boxListError'] = function () {}, i1w2f['prototype']['boxClickHandler'] = function () {}, i1w2f['prototype']['iconPress'] = function (g94xb) {
    this['donwX'] = g94xb['target']['x'], this['donwY'] = g94xb['target']['y'], this['icon']['startDrag'](this['dragRect']), this['isMove'] = ![], this['isPress'] = !![];
  }, i1w2f['prototype']['iconMove'] = function (ai26d) {
    this['isMove'] = !![];
  }, i1w2f['prototype']['iconUp'] = function (cr8pz) {
    var obx9g4 = cr8pz['target']['x'],
        la6d = cr8pz['target']['y'];this['icon']['stopDrag'](), obx9g4 == this['donwX'] && this['donwY'] == la6d && (this['isInitBoard'] || this['initBoard'](), this['showBoard']()), this['isMove'] = ![], this['isPress'] = ![];
  }, i1w2f;
}(),
    o_uk_yn;(function (jy0ke$) {
  var rp5qm;(function (ekyu_0) {
    var qsrm5 = function (cmr8p5) {
      o__n3ul(oxb94, cmr8p5);function oxb94() {
        return cmr8p5['call'](this) || this;
      }return oxb94['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), cmr8p5['prototype']['createChildren']['call'](this), this['createView'](jy0ke$['demoui']['BoxItemUI']['uiView']);
      }, oxb94['uiView'] = { 'type': 'View', 'props': { 'width': 0xb4, 'height': 0xa0 }, 'child': [{ 'type': 'Image', 'props': { 'y': 0x3, 'x': 0x20, 'width': 0x73, 'var': 'icon', 'height': 0x73 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x79, 'x': -0x21, 'width': 0xb4, 'var': 'title', 'valign': 'middle', 'height': 0x22, 'fontSize': 0x16, 'color': '#441d1c', 'align': 'center' } }] }] }, oxb94;
    }(laya['ui']['View']);ekyu_0['BoxItemUI'] = qsrm5;
  })(rp5qm = jy0ke$['demoui'] || (jy0ke$['demoui'] = {}));
})(o_uk_yn || (o_uk_yn = {})), function (zo8cbh) {
  var mrp58c;(function (w9ix1) {
    var h8zbog = function (_eky$0) {
      o__n3ul(lv6n3a, _eky$0);function lv6n3a() {
        return _eky$0['call'](this) || this;
      }return lv6n3a['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), _eky$0['prototype']['createChildren']['call'](this), this['createView'](zo8cbh['demoui']['MainUI']['uiView']);
      }, lv6n3a['uiView'] = { 'type': 'View', 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x2ee, 'top': 0x0, 'right': 0x0, 'left': 0x0, 'height': 0x536, 'bottom': 0x0 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x2ee, 'height': 0x536, 'centerY': 0x0 }, 'child': [{ 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x2ee, 'var': 'bg', 'height': 0x536 }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x2ee, 'visible': ![], 'var': 'box_1_show', 'height': 0x536, 'centerY': 0x0 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x253, 'x': 0x2e, 'width': 0x1d0, 'var': 'box_1_lab_info', 'leading': 0xa, 'height': 0x97, 'fontSize': 0x18, 'color': '#a959ee' } }, { 'type': 'HBox', 'props': { 'y': 0x2ee, 'x': 0x14, 'width': 0x1fe, 'space': 0x35, 'height': 0x78, 'align': 'top' }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x58, 'var': 'box_1_img_1', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_1', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0xa, 'x': 0xa, 'width': 0x58, 'var': 'box_1_img_2', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_2', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x14, 'x': 0x14, 'width': 0x58, 'var': 'box_1_img_3', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_3', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x1e, 'x': 0x1e, 'width': 0x58, 'var': 'box_1_img_4', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_4', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }] }] }, { 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'visible': ![], 'var': 'box_2_show' }, 'child': [{ 'type': 'HBox', 'props': { 'y': 0x220, 'x': 0x18, 'width': 0x1f4, 'space': 0x2c, 'height': 0x56, 'align': 'top' }, 'child': [{ 'type': 'Image', 'props': { 'y': 2.5, 'x': 0x0, 'width': 0x58, 'var': 'box_2_img_1', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_1', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0xc, 'x': 0xa, 'width': 0x58, 'var': 'box_2_img_2', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_2', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x16, 'x': 0x14, 'width': 0x58, 'var': 'box_2_img_3', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_3', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x20, 'x': 0x1e, 'width': 0x58, 'var': 'box_2_img_4', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_4', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x2a, 'x': 0x28, 'width': 0x58, 'var': 'box_2_img_5', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_5', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }] }, { 'type': 'Box', 'props': { 'y': 0x384, 'x': 0x0, 'width': 0x221, 'height': 0x44 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x0, 'x': 0x28, 'width': 0x122, 'var': 'box_2_lab_m_1', 'text': '方法一\uFF1A单日充值1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300' } }, { 'type': 'Text', 'props': { 'y': 0x1e, 'x': 0x28, 'width': 0x122, 'var': 'box_2_lab_m_2', 'text': '方法一\uFF1A历史累计充值1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300' } }, { 'type': 'Text', 'props': { 'y': 0x0, 'x': 0x141, 'width': 0xa4, 'var': 'box_2_lab_v_1', 'text': '1000/1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300', 'align': 'right' } }, { 'type': 'Text', 'props': { 'y': 0x1e, 'x': 0x141, 'width': 0xa4, 'var': 'box_2_lab_v_2', 'text': '1000/1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300', 'align': 'right' } }] }, { 'type': 'Image', 'props': { 'y': 0x1aa, 'x': 0x159, 'width': 0x66, 'var': 'box_2_btn_get', 'stateNum': 0x1, 'height': 0x26 } }, { 'type': 'Image', 'props': { 'y': 0x1aa, 'x': 0x159, 'width': 0x66, 'var': 'box_2_btn_copy', 'stateNum': 0x1, 'height': 0x26 } }, { 'type': 'Button', 'props': { 'y': 0x1d2, 'x': 0x126, 'width': 0xc9, 'var': 'box_2_addclick', 'stateNum': 0x1, 'height': 0x1b } }, { 'type': 'Text', 'props': { 'y': 0x13c, 'x': 0x17a, 'width': 0xa3, 'var': 'box_2_lab_wx', 'height': 0x1f, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'left' } }] }, { 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'visible': ![], 'var': 'box_3_show' }, 'child': [{ 'type': 'Panel', 'props': { 'y': 0xf5, 'x': 0x10, 'width': 0x201, 'var': 'box_3_panel', 'vScrollBarSkin': '', 'height': 0x29e } }] }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0x0, 'width': 0xbb, 'var': 'btn_1', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0xba, 'width': 0xbb, 'var': 'btn_2', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0x177, 'width': 0xbb, 'var': 'btn_3', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x203, 'x': 0x22e, 'width': 0x25, 'var': 'btn_close', 'height': 0x8f } }, { 'type': 'Box', 'props': { 'width': 0x2ee, 'visible': ![], 'var': 'box_help', 'height': 0x536 }, 'child': [{ 'type': 'Sprite', 'props': { 'y': 0x0, 'x': 0x0, 'mouseThrough': ![], 'alpha': 0.7 }, 'child': [{ 'type': 'Rect', 'props': { 'width': 0x2ee, 'lineWidth': 0x1, 'height': 0x536, 'fillColor': '#000000' } }] }, { 'type': 'Image', 'props': { 'y': 0x158, 'x': 0x28, 'width': 0x1d2, 'var': 'box_help_bg', 'height': 0x203 }, 'child': [{ 'type': 'Button', 'props': { 'y': -0x1, 'x': 0x1a0, 'width': 0x33, 'var': 'box_help_close', 'height': 0x28 } }, { 'type': 'Image', 'props': { 'y': 0x3f, 'x': 0x98, 'width': 0xa0, 'var': 'box_help_qrcode', 'height': 0xa0 } }] }] }] }] }] }, lv6n3a;
    }(laya['ui']['View']);w9ix1['MainUI'] = h8zbog;
  })(mrp58c = zo8cbh['demoui'] || (zo8cbh['demoui'] = {}));
}(o_uk_yn || (o_uk_yn = {})), function (w1di6) {
  var h4gxb;(function (gzboh) {
    var fd1w = function (s5rqm) {
      o__n3ul(fo9gx4, s5rqm);function fo9gx4() {
        return s5rqm['call'](this) || this;
      }return fo9gx4['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), s5rqm['prototype']['createChildren']['call'](this), this['createView'](w1di6['demoui']['ToastUI']['uiView']);
      }, fo9gx4['uiView'] = { 'type': 'View', 'props': { 'width': 0x2ee, 'height': 0x536 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x12c, 'height': 0x32, 'centerY': 0x0, 'centerX': 0x0 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x12c, 'height': 0x32, 'centerX': 0x0, 'alpha': 0.5 }, 'child': [{ 'type': 'Rect', 'props': { 'width': 0x12c, 'lineWidth': 0x1, 'height': 0x32, 'fillColor': '#382f2f' } }] }, { 'type': 'Text', 'props': { 'width': 0x12c, 'var': 'lab_msg', 'valign': 'middle', 'text': 'text', 'height': 0x32, 'fontSize': 0x18, 'color': '#ffffff', 'align': 'center' } }] }] }, fo9gx4;
    }(laya['ui']['View']);gzboh['ToastUI'] = fd1w;
  })(h4gxb = w1di6['demoui'] || (w1di6['demoui'] = {}));
}(o_uk_yn || (o_uk_yn = {}));var o_mrpcz = function () {
  function _3eynu() {}return _3eynu['init'] = function () {
    !this['ui'] && (this['ui'] = new o_uk_yn['demoui']['ToastUI'](), this['ui']['visible'] = ![], Laya['stage']['addChild'](this['ui']));
  }, _3eynu['msg'] = function (pbzh) {
    var d1i26w = this;!this['ui'] && _3eynu['init'](), this['ui']['visible'] = !![], this['ui']['lab_msg']['text'] = pbzh, clearTimeout(this['interval']), this['interval'] = setTimeout(function () {
      d1i26w['ui']['visible'] = ![];
    }, 0x7d0);
  }, _3eynu;
}();window['minitool'] = o_n_ekuy;