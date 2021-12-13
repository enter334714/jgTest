var E = wx.$p;
var p_zrv7 = this && this['__extends'] || function () {
  var mufx_o = function (jsiyh, shiyjk) {
    return mufx_o = Object['setPrototypeOf'] || { '__proto__': [] } instanceof Array && function (mox_fu, jhki$y) {
      mox_fu['__proto__'] = jhki$y;
    } || function (p4txs, viy61$) {
      for (var e89ab in viy61$) if (viy61$['hasOwnProperty'](e89ab)) p4txs[e89ab] = viy61$[e89ab];
    }, mufx_o(jsiyh, shiyjk);
  };return function (adcgb, gcaq8) {
    mufx_o(adcgb, gcaq8);function sp4lt() {
      this['constructor'] = adcgb;
    }adcgb['prototype'] = gcaq8 === null ? Object['create'](gcaq8) : (sp4lt['prototype'] = gcaq8['prototype'], new sp4lt());
  };
}(),
    p_yjkhs = window['Sygame'],
    p_vy7 = ![],
    p_e9qn8b = function () {
  function zw0r2() {}return zw0r2['init'] = function () {
    p_vy7 ? this['sygame'] = { 'channel': '3477d2273abd484ba2a0e04ad4971b3c', 'role_id': undefined, 'openid': 'oxmOf5biumkGash-Xht9FVAlswVk', 'appid': 'wx2936121c4817bf46' } : this['sygame'] = p_yjkhs;
  }, zw0r2['getTimeStamp'] = function () {
    return new Date()['getTime']();
  }, zw0r2['setResMap'] = function (wenz3, b9ne) {
    this['resMap'][wenz3] = wenz3 + '?' + b9ne;
  }, zw0r2['getResMap'] = function (flxtu_) {
    return this['resMap'][flxtu_];
  }, zw0r2['resMap'] = {}, zw0r2;
}(),
    p_v7$16y = function () {
  function jhkps() {
    this['getIcon'] = 'https://wx.11babay.cn/uploads/f/fkccc1532944783/5/2/c/7/60dc442c4fbc5.png', this['copyIcon'] = 'https://wx.11babay.cn/uploads/f/fkccc1532944783/3/0/1/7/60dc4409dce39.png', p_e9qn8b['init'](), this['getBoxCheckoutCode']();
  }return jhkps['prototype']['send'] = function (beaq89, eqba89, isjkyh, w5zne, qg8c) {
    w5zne === void 0x0 && (w5zne = 'get');qg8c === void 0x0 && (qg8c = '' || null);var tl_fu = new Laya['HttpRequest']();tl_fu['http']['timeout'] = 0x2710, tl_fu['once'](Laya['Event']['COMPLETE'], this, eqba89), tl_fu['once'](Laya['Event']['ERROR'], this, isjkyh), tl_fu['send'](beaq89, qg8c, w5zne, 'text');
  }, jhkps['prototype']['postSidebarApi'] = function () {
    var yjki$h = p_e9qn8b['sygame']['openid'],
        lu_ftx = '&channel=' + p_e9qn8b['sygame']['channel'] + '&wecha_id=' + yjki$h;this['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=sidebarApi' + lu_ftx, this['completeHandler'], this['errorHandler']);
  }, jhkps['prototype']['getBoxCheckoutCode'] = function () {
    var tlxf_u = Sygame['SY_CONF']['commitId'];this['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=getBoxCheckoutCode', this['getBoxCheckoutCodeRes'], this['errorHandler'], 'post', { 'commitId': tlxf_u });
  }, jhkps['prototype']['getBoxCheckoutCodeRes'] = function (w0523z) {
    var fm_xut = JSON['parse'](w0523z);console['log']('getBoxCheckoutCode:', fm_xut);if (fm_xut['status'] == 0x3e9) {
      var hk4psl = fm_xut['info'];hk4psl == 0xfa1 ? this['postSidebarApi']() : console['error']('盛也盒子\x20不显示' + fm_xut);
    } else console['error']('盛也盒子 getBoxCheckoutCodeRes 其他错误' + fm_xut);
  }, jhkps['prototype']['completeHandler'] = function (r26v17) {
    var p4jsk = JSON['parse'](r26v17);console['log'](p4jsk);switch (p4jsk['status']) {case 0x3e9:
        var sl4pth = [];p4jsk['msg']['basics_image_url'] && sl4pth['push']({ 'url': p4jsk['msg']['basics_image_url'], 'type': Laya['Loader']['IMAGE'] }), p4jsk['msg']['public_code'] && sl4pth['push']({ 'url': p4jsk['msg']['public_code'], 'type': Laya['Loader']['IMAGE'] }), p4jsk['msg']['vip_customer_service'] && sl4pth['push']({ 'url': p4jsk['msg']['vip_customer_service'], 'type': Laya['Loader']['IMAGE'] }), p4jsk['msg']['vip_customer_service_not_add'] && sl4pth['push']({ 'url': p4jsk['msg']['vip_customer_service_not_add'], 'type': Laya['Loader']['IMAGE'] }), p4jsk['msg']['game_center_image_url'] && sl4pth['push']({ 'url': p4jsk['msg']['game_center_image_url'], 'type': Laya['Loader']['IMAGE'] }), p4jsk['msg']['vip_qrcode'] && sl4pth['push']({ 'url': p4jsk['msg']['vip_qrcode'], 'type': Laya['Loader']['IMAGE'] }), p4jsk['msg']['getIcon'] && sl4pth['push']({ 'url': this['getIcon'], 'type': Laya['Loader']['IMAGE'] }), p4jsk['msg']['copyIcon'] && sl4pth['push']({ 'url': this['copyIcon'], 'type': Laya['Loader']['IMAGE'] });for (var fltuxp = 0x0, hkisy = p4jsk['msg']['follow_gift_list']; fltuxp < hkisy['length']; fltuxp++) {
          var spkj = hkisy[fltuxp];sl4pth['push']({ 'url': spkj['url'], 'type': Laya['Loader']['IMAGE'] });
        }for (var tulx4p = 0x0, adqbcg = p4jsk['msg']['vip_box_list']; tulx4p < adqbcg['length']; tulx4p++) {
          var spkj = adqbcg[tulx4p];sl4pth['push']({ 'url': spkj['url'], 'type': Laya['Loader']['IMAGE'] });
        }for (var lhts4 = 0x0; lhts4 < sl4pth['length']; lhts4++) {
          p_e9qn8b['setResMap'](sl4pth[lhts4]['url'], p_e9qn8b['getTimeStamp']()), sl4pth[lhts4]['url'] = p_e9qn8b['getResMap'](sl4pth[lhts4]['url']);
        }Laya['loader']['load'](sl4pth, Laya['Handler']['create'](this, this['initGame'])), this['data'] = p4jsk['msg'];break;case 0x3ea:
        p_qne8b['msg']('空的游戏channel');break;case 0x3eb:
        p_qne8b['msg']('错误的游戏channel');break;case 0x3ec:
        p_qne8b['msg']('未找到对应游戏大类');break;case 0x3ed:
        p_qne8b['msg']('未设置侧边栏');break;}
  }, jhkps['prototype']['errorHandler'] = function (yk6i$) {}, jhkps['prototype']['initGame'] = function () {
    var jh4kp = new p_uptl4x(this);jh4kp['show']();
  }, jhkps;
}(),
    p_uptl4x = function () {
  function v1$i6y(i4hsk) {
    this['page'] = 0x3, this['rolePriceData'] = {}, this['boxlist'] = [], this['donwX'] = 0x0, this['downY'] = 0x0, this['tool'] = i4hsk;
  }return v1$i6y['prototype']['setChildMouseThroughs'] = function (nw589) {
    var pxls = nw589['_childs'] || [];for (var tl4spx = 0x0; tl4spx < pxls['length']; tl4spx++) {
      pxls[tl4spx] && (pxls[tl4spx]['mouseThrough'] = !![]);
    }
  }, v1$i6y['prototype']['show'] = function () {
    if (this['tool']['data']['on'] === '1') {
      this['main'] = new p_dcga['demoui']['MainUI'](), Laya['stage']['addChild'](this['main']), this['main']['mouseThrough'] = !![];var khl4 = this['main']['_childs'] || [];for (var caqdg = 0x0; caqdg < khl4['length']; caqdg++) {
        khl4[caqdg]['mouseThrough'] = !![];
      }this['setChildMouseThroughs'](this['main']['_childs']), this['setChildMouseThroughs'](this['main']['_childs'][0x0]), this['initIcon'](), this['initEvent'](), this['initView'](), p_qne8b['init'](), this['main']['bg']['x'] = -0x2ee;
    }
  }, v1$i6y['prototype']['initView'] = function () {
    var w359en = this,
        fltxp = this['tool']['data']['follow_down_words']['replace'](/\\n/g, '\x0a');this['main']['box_1_lab_info']['text'] = fltxp;for (var nz5we = 0x1; nz5we <= this['tool']['data']['follow_gift_list']['length']; nz5we++) {
      var uxmtf = this['tool']['data']['follow_gift_list'][nz5we - 0x1];this['main']['box_1_img_' + nz5we]['skin'] = uxmtf['url'], this['main']['box_1_lab_' + nz5we]['text'] = uxmtf['name'];
    }for (var nz5we = 0x1; nz5we <= this['tool']['data']['vip_box_list']['length']; nz5we++) {
      var uxmtf = this['tool']['data']['vip_box_list'][nz5we - 0x1];this['main']['box_2_img_' + nz5we]['skin'] = uxmtf['url'], this['main']['box_2_lab_' + nz5we]['text'] = uxmtf['name'];
    }this['main']['box_2_lab_m_1']['text'] = '方法一：单日充值' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_m_2']['text'] = '方法二：历史累计充值' + +this['tool']['data']['y'] + '元', this['main']['box_2_lab_v_1']['text'] = (this['rolePriceData']['todayPrice'] || 0x0) + '/' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_v_2']['text'] = (this['rolePriceData']['allPrice'] || 0x0) + '/' + +this['tool']['data']['y'] + '元', this['main']['box_2_btn_copy']['skin'] = this['tool']['copyIcon'], this['main']['box_2_btn_get']['skin'] = this['tool']['getIcon'], this['main']['box_2_btn_copy']['visible'] = ![], this['main']['box_2_btn_get']['on'](Laya['Event']['CLICK'], this, function () {
      if (w359en['rolePriceData']['is_vip'] == 0x0) {
        p_qne8b['msg']('请先获取vip资格');return;
      }w359en['main']['box_2_lab_wx']['text'] = this['rolePriceData']['vip_wx'], w359en['main']['box_2_btn_copy']['visible'] = !![];
    }), this['main']['box_2_btn_copy']['on'](Laya['Event']['CLICK'], this, function () {
      w359en['copyText'](this['rolePriceData']['vip_wx']);
    }), this['main']['box_2_addclick']['on'](Laya['Event']['CLICK'], this, function () {
      if (w359en['rolePriceData']['is_vip'] == 0x0) return;this['main']['box_help_qrcode']['skin'] = w359en['rolePriceData']['vip_qrcode'], w359en['main']['box_help']['visible'] = !![];
    }), this['main']['box_help_close']['on'](Laya['Event']['CLICK'], this, function () {
      w359en['main']['box_help']['visible'] = ![];
    }), this['main']['box_help_bg']['skin'] = this['tool']['data']['vip_customer_service_not_add'], this['main']['box_help_qrcode']['skin'] = w359en['rolePriceData']['vip_qrcode'], this['main']['box_help_qrcode']['scaleX'] = 0xa0 / this['main']['box_help_qrcode']['width'], this['main']['box_help_qrcode']['scaleY'] = 0xa0 / this['main']['box_help_qrcode']['width'], this['main']['box_3_panel']['vScrollBar']['visible'] = ![], this['main']['box_3_panel']['vScrollBarSkin'] = 'common_atlas/scrollBar.png';
  }, v1$i6y['prototype']['initIcon'] = function () {
    this['icon'] = new Laya['Image'](), this['icon']['skin'] = this['tool']['data']['basics_image_url'], this['icon']['x'] = 0x0, this['icon']['y'] = 0xc8, this['icon']['width'] = 0x66, this['icon']['height'] = 0x6f, this['main']['addChild'](this['icon']), this['icon']['on'](Laya['Event']['MOUSE_DOWN'], this, this['iconPress']), this['icon']['on'](Laya['Event']['MOUSE_UP'], this, this['iconUp']), this['icon']['on'](Laya['Event']['MOUSE_WHEEL'], this, this['iconMove']), this['dragRect'] = new Laya['Rectangle'](-this['icon']['width'] / 0x2, 0x0, Laya['stage']['width'], Laya['stage']['height'] - this['icon']['height'] / 0x2);
  }, v1$i6y['prototype']['initEvent'] = function () {
    var s4xlpt = this;this['main']['btn_1']['on'](Laya['Event']['CLICK'], this, function () {
      if (s4xlpt['page'] == 0x1) return;s4xlpt['page1']();
    }), this['main']['btn_2']['on'](Laya['Event']['CLICK'], this, function () {
      if (s4xlpt['page'] == 0x2) return;s4xlpt['page2']();
    }), this['main']['btn_3']['on'](Laya['Event']['CLICK'], this, function () {
      if (s4xlpt['page'] == 0x3) return;s4xlpt['page3']();
    }), this['main']['btn_close']['on'](Laya['Event']['CLICK'], this, function () {
      s4xlpt['main']['bg']['x'] = -0x2ee, s4xlpt['icon']['visible'] = !![];
    });
  }, v1$i6y['prototype']['initBoard'] = function () {
    this['isInitBoard'] = !![], this['page1']();
  }, v1$i6y['prototype']['showBoard'] = function () {
    this['main']['bg']['x'] = 0x0, this['icon']['visible'] = ![];var hiy$ = _p$3['selectedServer']['server_id'],
        $yh = _p$3['selectedServer']['server_name'],
        rz270v = _p$3['roleId'],
        xuftlp = _p$3['roleName'],
        en3w5 = p_e9qn8b['sygame']['openid'],
        ltpux4 = '&role_id=' + p_e9qn8b['sygame']['role_id'] + '&channel=' + p_e9qn8b['sygame']['channel'] + '&server_id=' + hiy$ + '&server_name=' + $yh + '&wecha_id=' + en3w5 + '&role_id=' + rz270v + '&role_name=' + xuftlp;this['tool']['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=sidebarApiRoleId' + ltpux4, this['rolePriceHandler']['bind'](this), this['roleError']['bind'](this));
  }, v1$i6y['prototype']['page1'] = function () {
    this['page'] = 0x1, this['main']['bg']['skin'] = this['tool']['data']['public_code'], this['main']['box_1_show']['visible'] = !![], this['main']['box_2_show']['visible'] = ![], this['main']['box_3_show']['visible'] = ![];
  }, v1$i6y['prototype']['page2'] = function () {
    this['page'] = 0x2, this['main']['bg']['skin'] = this['tool']['data']['vip_customer_service'], this['main']['box_1_show']['visible'] = ![], this['main']['box_2_show']['visible'] = !![], this['main']['box_3_show']['visible'] = ![];
  }, v1$i6y['prototype']['page3'] = function () {
    this['page'] = 0x3, this['main']['bg']['skin'] = this['tool']['data']['game_center_image_url'], this['main']['box_1_show']['visible'] = ![], this['main']['box_2_show']['visible'] = ![], this['main']['box_3_show']['visible'] = !![], this['sendBox'] || this['getBoxList'](0x0), this['sendBox'] = !![], p_yjkhs && p_yjkhs['syClickOpenBox']();
  }, v1$i6y['prototype']['getBoxList'] = function (bca8gq) {
    var jsih = this;p_yjkhs && p_yjkhs['syGetBoxList']({ 'page': bca8gq, 'count': 0xc })['then'](function (hsp4) {
      var yv6$71 = hsp4['data'];yv6$71['status'] == 0x3e9 ? yv6$71['data'] && yv6$71['data']['length'] && (jsih['boxlist'] = jsih['boxlist']['concat'](yv6$71['data']), bca8gq++, jsih['getBoxList'](bca8gq)) : jsih['boxListHandler']();
    });
  }, v1$i6y['prototype']['copyText'] = function (rv671) {
    try {
      wx['setClipboardData']({ 'data': rv671, 'success': function (tuxl) {
          console['log']('复制成功:', tuxl);
        } });
    } catch (gab98q) {}
  }, v1$i6y['prototype']['rolePriceHandler'] = function (dgaq) {
    this['rolePriceData'] = JSON['parse'](dgaq);switch (this['rolePriceData']['status']) {case 0x3e9:
        this['main']['box_2_lab_v_1']['text'] = (this['rolePriceData']['todayPrice'] || 0x0) + '/' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_v_2']['text'] = (this['rolePriceData']['allPrice'] || 0x0) + '/' + +this['tool']['data']['y'] + '元';break;case 0x3ea:
        break;case 0x3eb:
        break;}
  }, v1$i6y['prototype']['roleError'] = function () {}, v1$i6y['prototype']['boxListHandler'] = function () {
    var eqa89b = function (jskph) {
      var r0z = z032r['boxlist'][jskph],
          gcqdba = new p_dcga['demoui']['BoxItemUI']();gcqdba['icon']['skin'] = r0z['icon'], gcqdba['title']['text'] = r0z['title'], gcqdba['x'] = 0xa0 * (jskph % 0x3), gcqdba['y'] = 0xa0 * (jskph / 0x3 ^ 0x0), z032r['main']['box_3_panel']['addChild'](gcqdba);var klshp = { 'appid': p_e9qn8b['sygame']['appid'], 'game_id': r0z['game_id'], 'jump_appid': r0z['jump_appid'], 'jump_path': r0z['jump_path'], 'tunnel_id': r0z['tunnel_id'], 'uv': 0x0, 'wecha_id': p_e9qn8b['sygame']['openid'] },
          sp4xtl = r0z['preview_img'],
          y167 = r0z['jump_type'],
          gabdqc = r0z['kf_session'];gcqdba['on'](Laya['Event']['CLICK'], z032r, function () {
        p_yjkhs && p_yjkhs['syClickBox']({ 'game_id': r0z['game_id'], 'tunnel_id': r0z['tunnel_id'], 'jump_appid': r0z['jump_appid'], 'jump_path': r0z['jump_path'] })['then'](function (eab9) {
          if (y167 === '0') wx['navigateToMiniProgram']({ 'appId': klshp['jump_appid'], 'path': klshp['jump_path'], 'fail': function (jyhi) {
              if (!sp4xtl) return;wx['previewImage']({ 'urls': [sp4xtl] });
            } });else {
            if (y167 === '1') {
              if (!sp4xtl) return;wx['previewImage']({ 'urls': [sp4xtl] });
            } else {
              if (y167 === '2') {
                if (!gabdqc) return;wx['openCustomerServiceConversation']({ 'sessionFrom': gabdqc, 'showMessageCard': !![], 'sendMessageTitle': '', 'sendMessagePath': '', 'sendMessageImg': '' });
              }
            }
          }
        });
      });
    },
        z032r = this;for (var p4hj = 0x0; p4hj < this['boxlist']['length']; p4hj++) {
      eqa89b(p4hj);
    }
  }, v1$i6y['prototype']['boxListError'] = function () {}, v1$i6y['prototype']['boxClickHandler'] = function () {}, v1$i6y['prototype']['iconPress'] = function (h4ksl) {
    this['donwX'] = h4ksl['target']['x'], this['donwY'] = h4ksl['target']['y'], this['icon']['startDrag'](this['dragRect']), this['isMove'] = ![], this['isPress'] = !![];
  }, v1$i6y['prototype']['iconMove'] = function (js4kih) {
    this['isMove'] = !![];
  }, v1$i6y['prototype']['iconUp'] = function (n35w0z) {
    var w05nz3 = n35w0z['target']['x'],
        qacb = n35w0z['target']['y'];this['icon']['stopDrag'](), w05nz3 == this['donwX'] && this['donwY'] == qacb && (this['isInitBoard'] || this['initBoard'](), this['showBoard']()), this['isMove'] = ![], this['isPress'] = ![];
  }, v1$i6y;
}(),
    p_dcga;(function (lpst4h) {
  var t4xup;(function (uf_xo) {
    var i4h = function (xft_mu) {
      p_zrv7(hs4i, xft_mu);function hs4i() {
        return xft_mu['call'](this) || this;
      }return hs4i['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), xft_mu['prototype']['createChildren']['call'](this), this['createView'](lpst4h['demoui']['BoxItemUI']['uiView']);
      }, hs4i['uiView'] = { 'type': 'View', 'props': { 'width': 0xb4, 'height': 0xa0 }, 'child': [{ 'type': 'Image', 'props': { 'y': 0x3, 'x': 0x20, 'width': 0x73, 'var': 'icon', 'height': 0x73 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x79, 'x': -0x21, 'width': 0xb4, 'var': 'title', 'valign': 'middle', 'height': 0x22, 'fontSize': 0x16, 'color': '#441d1c', 'align': 'center' } }] }] }, hs4i;
    }(laya['ui']['View']);uf_xo['BoxItemUI'] = i4h;
  })(t4xup = lpst4h['demoui'] || (lpst4h['demoui'] = {}));
})(p_dcga || (p_dcga = {})), function (rz02w) {
  var psxl4t;(function (_fuxmo) {
    var f_oux = function (zr7203) {
      p_zrv7(qeba89, zr7203);function qeba89() {
        return zr7203['call'](this) || this;
      }return qeba89['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), zr7203['prototype']['createChildren']['call'](this), this['createView'](rz02w['demoui']['MainUI']['uiView']);
      }, qeba89['uiView'] = { 'type': 'View', 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x2ee, 'top': 0x0, 'right': 0x0, 'left': 0x0, 'height': 0x536, 'bottom': 0x0 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x2ee, 'height': 0x536, 'centerY': 0x0 }, 'child': [{ 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x2ee, 'var': 'bg', 'height': 0x536 }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x2ee, 'visible': ![], 'var': 'box_1_show', 'height': 0x536, 'centerY': 0x0 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x253, 'x': 0x2e, 'width': 0x1d0, 'var': 'box_1_lab_info', 'leading': 0xa, 'height': 0x97, 'fontSize': 0x18, 'color': '#a959ee' } }, { 'type': 'HBox', 'props': { 'y': 0x2ee, 'x': 0x14, 'width': 0x1fe, 'space': 0x35, 'height': 0x78, 'align': 'top' }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x58, 'var': 'box_1_img_1', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_1', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0xa, 'x': 0xa, 'width': 0x58, 'var': 'box_1_img_2', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_2', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x14, 'x': 0x14, 'width': 0x58, 'var': 'box_1_img_3', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_3', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x1e, 'x': 0x1e, 'width': 0x58, 'var': 'box_1_img_4', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_4', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }] }] }, { 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'visible': ![], 'var': 'box_2_show' }, 'child': [{ 'type': 'HBox', 'props': { 'y': 0x220, 'x': 0x18, 'width': 0x1f4, 'space': 0x2c, 'height': 0x56, 'align': 'top' }, 'child': [{ 'type': 'Image', 'props': { 'y': 2.5, 'x': 0x0, 'width': 0x58, 'var': 'box_2_img_1', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_1', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0xc, 'x': 0xa, 'width': 0x58, 'var': 'box_2_img_2', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_2', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x16, 'x': 0x14, 'width': 0x58, 'var': 'box_2_img_3', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_3', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x20, 'x': 0x1e, 'width': 0x58, 'var': 'box_2_img_4', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_4', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x2a, 'x': 0x28, 'width': 0x58, 'var': 'box_2_img_5', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_5', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }] }, { 'type': 'Box', 'props': { 'y': 0x384, 'x': 0x0, 'width': 0x221, 'height': 0x44 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x0, 'x': 0x28, 'width': 0x122, 'var': 'box_2_lab_m_1', 'text': '方法一\uFF1A单日充值1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300' } }, { 'type': 'Text', 'props': { 'y': 0x1e, 'x': 0x28, 'width': 0x122, 'var': 'box_2_lab_m_2', 'text': '方法一\uFF1A历史累计充值1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300' } }, { 'type': 'Text', 'props': { 'y': 0x0, 'x': 0x141, 'width': 0xa4, 'var': 'box_2_lab_v_1', 'text': '1000/1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300', 'align': 'right' } }, { 'type': 'Text', 'props': { 'y': 0x1e, 'x': 0x141, 'width': 0xa4, 'var': 'box_2_lab_v_2', 'text': '1000/1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300', 'align': 'right' } }] }, { 'type': 'Image', 'props': { 'y': 0x1aa, 'x': 0x159, 'width': 0x66, 'var': 'box_2_btn_get', 'stateNum': 0x1, 'height': 0x26 } }, { 'type': 'Image', 'props': { 'y': 0x1aa, 'x': 0x159, 'width': 0x66, 'var': 'box_2_btn_copy', 'stateNum': 0x1, 'height': 0x26 } }, { 'type': 'Button', 'props': { 'y': 0x1d2, 'x': 0x126, 'width': 0xc9, 'var': 'box_2_addclick', 'stateNum': 0x1, 'height': 0x1b } }, { 'type': 'Text', 'props': { 'y': 0x13c, 'x': 0x17a, 'width': 0xa3, 'var': 'box_2_lab_wx', 'height': 0x1f, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'left' } }] }, { 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'visible': ![], 'var': 'box_3_show' }, 'child': [{ 'type': 'Panel', 'props': { 'y': 0xf5, 'x': 0x10, 'width': 0x201, 'var': 'box_3_panel', 'vScrollBarSkin': '', 'height': 0x29e } }] }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0x0, 'width': 0xbb, 'var': 'btn_1', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0xba, 'width': 0xbb, 'var': 'btn_2', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0x177, 'width': 0xbb, 'var': 'btn_3', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x203, 'x': 0x22e, 'width': 0x25, 'var': 'btn_close', 'height': 0x8f } }, { 'type': 'Box', 'props': { 'width': 0x2ee, 'visible': ![], 'var': 'box_help', 'height': 0x536 }, 'child': [{ 'type': 'Sprite', 'props': { 'y': 0x0, 'x': 0x0, 'mouseThrough': ![], 'alpha': 0.7 }, 'child': [{ 'type': 'Rect', 'props': { 'width': 0x2ee, 'lineWidth': 0x1, 'height': 0x536, 'fillColor': '#000000' } }] }, { 'type': 'Image', 'props': { 'y': 0x158, 'x': 0x28, 'width': 0x1d2, 'var': 'box_help_bg', 'height': 0x203 }, 'child': [{ 'type': 'Button', 'props': { 'y': -0x1, 'x': 0x1a0, 'width': 0x33, 'var': 'box_help_close', 'height': 0x28 } }, { 'type': 'Image', 'props': { 'y': 0x3f, 'x': 0x98, 'width': 0xa0, 'var': 'box_help_qrcode', 'height': 0xa0 } }] }] }] }] }] }, qeba89;
    }(laya['ui']['View']);_fuxmo['MainUI'] = f_oux;
  })(psxl4t = rz02w['demoui'] || (rz02w['demoui'] = {}));
}(p_dcga || (p_dcga = {})), function (x_ftl) {
  var acq8bg;(function (_xftmu) {
    var $yv167 = function (jsp4hk) {
      p_zrv7(ksphj4, jsp4hk);function ksphj4() {
        return jsp4hk['call'](this) || this;
      }return ksphj4['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), jsp4hk['prototype']['createChildren']['call'](this), this['createView'](x_ftl['demoui']['ToastUI']['uiView']);
      }, ksphj4['uiView'] = { 'type': 'View', 'props': { 'width': 0x2ee, 'height': 0x536 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x12c, 'height': 0x32, 'centerY': 0x0, 'centerX': 0x0 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x12c, 'height': 0x32, 'centerX': 0x0, 'alpha': 0.5 }, 'child': [{ 'type': 'Rect', 'props': { 'width': 0x12c, 'lineWidth': 0x1, 'height': 0x32, 'fillColor': '#382f2f' } }] }, { 'type': 'Text', 'props': { 'width': 0x12c, 'var': 'lab_msg', 'valign': 'middle', 'text': 'text', 'height': 0x32, 'fontSize': 0x18, 'color': '#ffffff', 'align': 'center' } }] }] }, ksphj4;
    }(laya['ui']['View']);_xftmu['ToastUI'] = $yv167;
  })(acq8bg = x_ftl['demoui'] || (x_ftl['demoui'] = {}));
}(p_dcga || (p_dcga = {}));var p_qne8b = function () {
  function eznw53() {}return eznw53['init'] = function () {
    !this['ui'] && (this['ui'] = new p_dcga['demoui']['ToastUI'](), this['ui']['visible'] = ![], Laya['stage']['addChild'](this['ui']));
  }, eznw53['msg'] = function (lfuxt_) {
    var pfxl = this;!this['ui'] && eznw53['init'](), this['ui']['visible'] = !![], this['ui']['lab_msg']['text'] = lfuxt_, clearTimeout(this['interval']), this['interval'] = setTimeout(function () {
      pfxl['ui']['visible'] = ![];
    }, 0x7d0);
  }, eznw53;
}();window['minitool'] = p_v7$16y;