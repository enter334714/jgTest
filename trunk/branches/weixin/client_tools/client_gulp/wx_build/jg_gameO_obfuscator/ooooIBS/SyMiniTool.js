var c = wx.$o;
var o_v6a = this && this['__extends'] || function () {
  var msq = function (yekj$, i26w1) {
    return msq = Object['setPrototypeOf'] || { '__proto__': [] } instanceof Array && function (a1i, yu0_) {
      a1i['__proto__'] = yu0_;
    } || function (rpmqt, yn_3ue) {
      for (var un_v3 in yn_3ue) if (yn_3ue['hasOwnProperty'](un_v3)) rpmqt[un_v3] = yn_3ue[un_v3];
    }, msq(yekj$, i26w1);
  };return function (ld6va3, $k_y0) {
    msq(ld6va3, $k_y0);function _kye() {
      this['constructor'] = ld6va3;
    }ld6va3['prototype'] = $k_y0 === null ? Object['create']($k_y0) : (_kye['prototype'] = $k_y0['prototype'], new _kye());
  };
}(),
    o_ghb8zo = window['Sygame'],
    o_h8zbg = ![],
    o_nu_y3 = function () {
  function gx9w4f() {}return gx9w4f['init'] = function () {
    o_h8zbg ? this['sygame'] = { 'channel': '3477d2273abd484ba2a0e04ad4971b3c', 'role_id': undefined, 'openid': 'oxmOf5biumkGash-Xht9FVAlswVk', 'appid': 'wx2936121c4817bf46' } : this['sygame'] = o_ghb8zo;
  }, gx9w4f['getTimeStamp'] = function () {
    return new Date()['getTime']();
  }, gx9w4f['setResMap'] = function (bozh8, cprmt5) {
    this['resMap'][bozh8] = bozh8 + '?' + cprmt5;
  }, gx9w4f['getResMap'] = function (q5rms) {
    return this['resMap'][q5rms];
  }, gx9w4f['resMap'] = {}, gx9w4f;
}(),
    o_fog4 = function () {
  function p5m8r() {
    this['getIcon'] = 'https://wx.11babay.cn/uploads/f/fkccc1532944783/5/2/c/7/60dc442c4fbc5.png', this['copyIcon'] = 'https://wx.11babay.cn/uploads/f/fkccc1532944783/3/0/1/7/60dc4409dce39.png', o_nu_y3['init'](), this['postSidebarApi']();
  }return p5m8r['prototype']['send'] = function (e_yu0, y0jke, pmzcr, xfo4g, _vnul) {
    xfo4g === void 0x0 && (xfo4g = 'get');_vnul === void 0x0 && (_vnul = '' || null);var vnlu = new Laya['HttpRequest']();vnlu['http']['timeout'] = 0x2710, vnlu['once'](Laya['Event']['COMPLETE'], this, y0jke), vnlu['once'](Laya['Event']['ERROR'], this, pmzcr), vnlu['send'](e_yu0, _vnul, xfo4g, 'text');
  }, p5m8r['prototype']['postSidebarApi'] = function () {
    this['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=sidebarApi&channel=' + o_nu_y3['sygame']['channel'], this['completeHandler'], this['errorHandler']);
  }, p5m8r['prototype']['completeHandler'] = function (xfiw91) {
    var ohz4 = JSON['parse'](xfiw91);console['log'](ohz4);switch (ohz4['status']) {case 0x3e9:
        var vdl62a = [];ohz4['msg']['basics_image_url'] && vdl62a['push']({ 'url': ohz4['msg']['basics_image_url'], 'type': Laya['Loader']['IMAGE'] }), ohz4['msg']['public_code'] && vdl62a['push']({ 'url': ohz4['msg']['public_code'], 'type': Laya['Loader']['IMAGE'] }), ohz4['msg']['vip_customer_service'] && vdl62a['push']({ 'url': ohz4['msg']['vip_customer_service'], 'type': Laya['Loader']['IMAGE'] }), ohz4['msg']['vip_customer_service_not_add'] && vdl62a['push']({ 'url': ohz4['msg']['vip_customer_service_not_add'], 'type': Laya['Loader']['IMAGE'] }), ohz4['msg']['game_center_image_url'] && vdl62a['push']({ 'url': ohz4['msg']['game_center_image_url'], 'type': Laya['Loader']['IMAGE'] }), ohz4['msg']['vip_qrcode'] && vdl62a['push']({ 'url': ohz4['msg']['vip_qrcode'], 'type': Laya['Loader']['IMAGE'] }), ohz4['msg']['getIcon'] && vdl62a['push']({ 'url': this['getIcon'], 'type': Laya['Loader']['IMAGE'] }), ohz4['msg']['copyIcon'] && vdl62a['push']({ 'url': this['copyIcon'], 'type': Laya['Loader']['IMAGE'] });for (var tqsrm = 0x0, vny_u3 = ohz4['msg']['follow_gift_list']; tqsrm < vny_u3['length']; tqsrm++) {
          var trmqs = vny_u3[tqsrm];vdl62a['push']({ 'url': trmqs['url'], 'type': Laya['Loader']['IMAGE'] });
        }for (var rcm5pt = 0x0, nuke_y = ohz4['msg']['vip_box_list']; rcm5pt < nuke_y['length']; rcm5pt++) {
          var trmqs = nuke_y[rcm5pt];vdl62a['push']({ 'url': trmqs['url'], 'type': Laya['Loader']['IMAGE'] });
        }for (var e_ku = 0x0; e_ku < vdl62a['length']; e_ku++) {
          o_nu_y3['setResMap'](vdl62a[e_ku]['url'], o_nu_y3['getTimeStamp']()), vdl62a[e_ku]['url'] = o_nu_y3['getResMap'](vdl62a[e_ku]['url']);
        }Laya['loader']['load'](vdl62a, Laya['Handler']['create'](this, this['initGame'])), this['data'] = ohz4['msg'];break;case 0x3ea:
        o_mq7t['msg']('空的游戏channel');break;case 0x3eb:
        o_mq7t['msg']('错误的游戏channel');break;case 0x3ec:
        o_mq7t['msg']('未找到对应游戏大类');break;case 0x3ed:
        o_mq7t['msg']('未设置侧边栏');break;}
  }, p5m8r['prototype']['errorHandler'] = function (gof49x) {}, p5m8r['prototype']['initGame'] = function () {
    var o94 = new o_hg4z(this);o94['show']();
  }, p5m8r;
}(),
    o_hg4z = function () {
  function zc8r(bz8phc) {
    this['page'] = 0x3, this['rolePriceData'] = {}, this['boxlist'] = [], this['donwX'] = 0x0, this['downY'] = 0x0, this['tool'] = bz8phc;
  }return zc8r['prototype']['setChildMouseThroughs'] = function (cr8mp5) {
    var uyke_n = cr8mp5['_childs'] || [];for (var rtmpc5 = 0x0; rtmpc5 < uyke_n['length']; rtmpc5++) {
      uyke_n[rtmpc5] && (uyke_n[rtmpc5]['mouseThrough'] = !![]);
    }
  }, zc8r['prototype']['show'] = function () {
    if (this['tool']['data']['on'] === '1') {
      this['main'] = new o_d1w2i6['demoui']['MainUI'](), Laya['stage']['addChild'](this['main']), this['main']['mouseThrough'] = !![];var v3ld6a = this['main']['_childs'] || [];for (var _un3 = 0x0; _un3 < v3ld6a['length']; _un3++) {
        v3ld6a[_un3]['mouseThrough'] = !![];
      }this['setChildMouseThroughs'](this['main']['_childs']), this['setChildMouseThroughs'](this['main']['_childs'][0x0]), this['initIcon'](), this['initEvent'](), this['initView'](), o_mq7t['init']();
    }
  }, zc8r['prototype']['initView'] = function () {
    var pmc85r = this,
        eyu3n_ = this['tool']['data']['follow_down_words']['replace'](/\\n/g, '\x0a');this['main']['box_1_lab_info']['text'] = eyu3n_;for (var mrqt5s = 0x1; mrqt5s <= this['tool']['data']['follow_gift_list']['length']; mrqt5s++) {
      var a2i16d = this['tool']['data']['follow_gift_list'][mrqt5s - 0x1];this['main']['box_1_img_' + mrqt5s]['skin'] = a2i16d['url'], this['main']['box_1_lab_' + mrqt5s]['text'] = a2i16d['name'];
    }for (var mrqt5s = 0x1; mrqt5s <= this['tool']['data']['vip_box_list']['length']; mrqt5s++) {
      var a2i16d = this['tool']['data']['vip_box_list'][mrqt5s - 0x1];this['main']['box_2_img_' + mrqt5s]['skin'] = a2i16d['url'], this['main']['box_2_lab_' + mrqt5s]['text'] = a2i16d['name'];
    }this['main']['box_2_lab_m_1']['text'] = '方法一：单日充值' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_m_2']['text'] = '方法二：历史累计充值' + +this['tool']['data']['y'] + '元', this['main']['box_2_lab_v_1']['text'] = (this['rolePriceData']['todayPrice'] || 0x0) + '/' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_v_2']['text'] = (this['rolePriceData']['allPrice'] || 0x0) + '/' + +this['tool']['data']['y'] + '元', this['main']['box_2_btn_copy']['skin'] = this['tool']['copyIcon'], this['main']['box_2_btn_get']['skin'] = this['tool']['getIcon'], this['main']['box_2_btn_copy']['visible'] = ![], this['main']['box_2_btn_get']['on'](Laya['Event']['CLICK'], this, function () {
      if (pmc85r['rolePriceData']['is_vip'] == 0x0) {
        o_mq7t['msg']('请先获取vip资格');return;
      }pmc85r['main']['box_2_lab_wx']['text'] = pmc85r['tool']['data']['vip_wx'], pmc85r['main']['box_2_btn_copy']['visible'] = !![];
    }), this['main']['box_2_btn_copy']['on'](Laya['Event']['CLICK'], this, function () {
      pmc85r['copyText'](pmc85r['tool']['data']['vip_wx']);
    }), this['main']['box_2_addclick']['on'](Laya['Event']['CLICK'], this, function () {
      if (pmc85r['rolePriceData']['is_vip'] == 0x0) return;pmc85r['main']['box_help']['visible'] = !![];
    }), this['main']['box_help_close']['on'](Laya['Event']['CLICK'], this, function () {
      pmc85r['main']['box_help']['visible'] = ![];
    }), this['main']['box_help_bg']['skin'] = this['tool']['data']['vip_customer_service_not_add'], this['main']['box_help_qrcode']['skin'] = this['tool']['data']['vip_qrcode'], this['main']['box_help_qrcode']['scaleX'] = 0xa0 / this['main']['box_help_qrcode']['width'], this['main']['box_help_qrcode']['scaleY'] = 0xa0 / this['main']['box_help_qrcode']['width'], this['main']['box_3_panel']['vScrollBar']['visible'] = ![], this['main']['box_3_panel']['vScrollBarSkin'] = 'common_atlas/scrollBar.png';
  }, zc8r['prototype']['initIcon'] = function () {
    this['icon'] = new Laya['Image'](), this['icon']['skin'] = this['tool']['data']['basics_image_url'], this['icon']['x'] = 0x0, this['icon']['y'] = 0xc8, this['icon']['width'] = 0x66, this['icon']['height'] = 0x6f, this['main']['addChild'](this['icon']), this['icon']['on'](Laya['Event']['MOUSE_DOWN'], this, this['iconPress']), this['icon']['on'](Laya['Event']['MOUSE_UP'], this, this['iconUp']), this['icon']['on'](Laya['Event']['MOUSE_WHEEL'], this, this['iconMove']), this['dragRect'] = new Laya['Rectangle'](-this['icon']['width'] / 0x2, 0x0, Laya['stage']['width'], Laya['stage']['height'] - this['icon']['height'] / 0x2);
  }, zc8r['prototype']['initEvent'] = function () {
    var u3lavn = this;this['main']['btn_1']['on'](Laya['Event']['CLICK'], this, function () {
      if (u3lavn['page'] == 0x1) return;u3lavn['page1']();
    }), this['main']['btn_2']['on'](Laya['Event']['CLICK'], this, function () {
      if (u3lavn['page'] == 0x2) return;u3lavn['page2']();
    }), this['main']['btn_3']['on'](Laya['Event']['CLICK'], this, function () {
      if (u3lavn['page'] == 0x3) return;u3lavn['page3']();
    }), this['main']['btn_close']['on'](Laya['Event']['CLICK'], this, function () {
      u3lavn['main']['bg']['x'] = -0x2ee, u3lavn['icon']['visible'] = !![];
    });
  }, zc8r['prototype']['initBoard'] = function () {
    this['isInitBoard'] = !![], this['page1']();
  }, zc8r['prototype']['showBoard'] = function () {
    this['main']['bg']['x'] = 0x0, this['icon']['visible'] = ![], this['tool']['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=sidebarApiRoleId&role_id=' + o_nu_y3['sygame']['role_id'] + '&channel=' + o_nu_y3['sygame']['channel'], this['rolePriceHandler']['bind'](this), this['roleError']['bind'](this));
  }, zc8r['prototype']['page1'] = function () {
    this['page'] = 0x1, this['main']['bg']['skin'] = this['tool']['data']['public_code'], this['main']['box_1_show']['visible'] = !![], this['main']['box_2_show']['visible'] = ![], this['main']['box_3_show']['visible'] = ![];
  }, zc8r['prototype']['page2'] = function () {
    this['page'] = 0x2, this['main']['bg']['skin'] = this['tool']['data']['vip_customer_service'], this['main']['box_1_show']['visible'] = ![], this['main']['box_2_show']['visible'] = !![], this['main']['box_3_show']['visible'] = ![];
  }, zc8r['prototype']['page3'] = function () {
    this['page'] = 0x3, this['main']['bg']['skin'] = this['tool']['data']['game_center_image_url'], this['main']['box_1_show']['visible'] = ![], this['main']['box_2_show']['visible'] = ![], this['main']['box_3_show']['visible'] = !![], this['sendBox'] || this['getBoxList'](0x0), this['sendBox'] = !![], o_ghb8zo && o_ghb8zo['syClickOpenBox']();
  }, zc8r['prototype']['getBoxList'] = function (o8) {
    var yunke_ = this;o_ghb8zo && o_ghb8zo['syGetBoxList']({ 'page': o8, 'count': 0xc })['then'](function (rp8czm) {
      var hgo4x = rp8czm['data'];hgo4x['status'] == 0x3e9 ? hgo4x['data'] && hgo4x['data']['length'] && (yunke_['boxlist'] = yunke_['boxlist']['concat'](hgo4x['data']), o8++, yunke_['getBoxList'](o8)) : yunke_['boxListHandler']();
    });
  }, zc8r['prototype']['copyText'] = function (f4x) {
    try {
      wx['setClipboardData']({ 'data': f4x, 'success': function (xogbh4) {
          console['log']('复制成功:', xogbh4);
        } });
    } catch (xogh) {}
  }, zc8r['prototype']['rolePriceHandler'] = function (rq5tpm) {
    this['rolePriceData'] = JSON['parse'](rq5tpm);switch (this['rolePriceData']['status']) {case 0x3e9:
        this['main']['box_2_lab_v_1']['text'] = (this['rolePriceData']['todayPrice'] || 0x0) + '/' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_v_2']['text'] = (this['rolePriceData']['allPrice'] || 0x0) + '/' + +this['tool']['data']['y'] + '元';break;case 0x3ea:
        break;case 0x3eb:
        break;}
  }, zc8r['prototype']['roleError'] = function () {}, zc8r['prototype']['boxListHandler'] = function () {
    var hzo8gb = function (xogh4) {
      var gzh8o = qstr5m['boxlist'][xogh4],
          dw1if2 = new o_d1w2i6['demoui']['BoxItemUI']();dw1if2['icon']['skin'] = gzh8o['icon'], dw1if2['title']['text'] = gzh8o['title'], dw1if2['x'] = 0xa0 * (xogh4 % 0x3), dw1if2['y'] = 0xa0 * (xogh4 / 0x3 ^ 0x0), qstr5m['main']['box_3_panel']['addChild'](dw1if2);var ohb8c = { 'appid': o_nu_y3['sygame']['appid'], 'game_id': gzh8o['game_id'], 'jump_appid': gzh8o['jump_appid'], 'jump_path': gzh8o['jump_path'], 'tunnel_id': gzh8o['tunnel_id'], 'uv': 0x0, 'wecha_id': o_nu_y3['sygame']['openid'] },
          mr5tsq = gzh8o['preview_img'],
          mrcpt = gzh8o['jump_type'],
          yku_0 = gzh8o['kf_session'];dw1if2['on'](Laya['Event']['CLICK'], qstr5m, function () {
        o_ghb8zo && o_ghb8zo['syClickBox']({ 'game_id': gzh8o['game_id'], 'tunnel_id': gzh8o['tunnel_id'], 'jump_appid': gzh8o['jump_appid'], 'jump_path': gzh8o['jump_path'] })['then'](function (a3v6nl) {
          if (mrcpt === '0') wx['navigateToMiniProgram']({ 'appId': ohb8c['jump_appid'], 'path': ohb8c['jump_path'], 'fail': function (gx49f) {
              if (!mr5tsq) return;wx['previewImage']({ 'urls': [mr5tsq] });
            } });else {
            if (mrcpt === '1') {
              if (!mr5tsq) return;wx['previewImage']({ 'urls': [mr5tsq] });
            } else {
              if (mrcpt === '2') {
                if (!yku_0) return;wx['openCustomerServiceConversation']({ 'sessionFrom': yku_0, 'showMessageCard': !![], 'sendMessageTitle': '', 'sendMessagePath': '', 'sendMessageImg': '' });
              }
            }
          }
        });
      });
    },
        qstr5m = this;for (var wif192 = 0x0; wif192 < this['boxlist']['length']; wif192++) {
      hzo8gb(wif192);
    }
  }, zc8r['prototype']['boxListError'] = function () {}, zc8r['prototype']['boxClickHandler'] = function () {}, zc8r['prototype']['iconPress'] = function (g9fxw4) {
    this['donwX'] = g9fxw4['target']['x'], this['donwY'] = g9fxw4['target']['y'], this['icon']['startDrag'](this['dragRect']), this['isMove'] = ![], this['isPress'] = !![];
  }, zc8r['prototype']['iconMove'] = function (s5q7t) {
    this['isMove'] = !![];
  }, zc8r['prototype']['iconUp'] = function (d162ia) {
    var ne3_yu = d162ia['target']['x'],
        a3ulnv = d162ia['target']['y'];this['icon']['stopDrag'](), ne3_yu == this['donwX'] && this['donwY'] == a3ulnv && (this['isInitBoard'] || this['initBoard'](), this['showBoard']()), this['isMove'] = ![], this['isPress'] = ![];
  }, zc8r;
}(),
    o_d1w2i6;(function (mqrpt5) {
  var hz8rc;(function (xg4w9) {
    var di16 = function (l3va6) {
      o_v6a(bg4xho, l3va6);function bg4xho() {
        return l3va6['call'](this) || this;
      }return bg4xho['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), l3va6['prototype']['createChildren']['call'](this), this['createView'](mqrpt5['demoui']['BoxItemUI']['uiView']);
      }, bg4xho['uiView'] = { 'type': 'View', 'props': { 'width': 0xb4, 'height': 0xa0 }, 'child': [{ 'type': 'Image', 'props': { 'y': 0x3, 'x': 0x20, 'width': 0x73, 'var': 'icon', 'height': 0x73 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x79, 'x': -0x21, 'width': 0xb4, 'var': 'title', 'valign': 'middle', 'height': 0x22, 'fontSize': 0x16, 'color': '#441d1c', 'align': 'center' } }] }] }, bg4xho;
    }(laya['ui']['View']);xg4w9['BoxItemUI'] = di16;
  })(hz8rc = mqrpt5['demoui'] || (mqrpt5['demoui'] = {}));
})(o_d1w2i6 || (o_d1w2i6 = {})), function (d26iw) {
  var y_ek0;(function (v_u3n) {
    var a6n3v = function (obc8h) {
      o_v6a(wdif, obc8h);function wdif() {
        return obc8h['call'](this) || this;
      }return wdif['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), obc8h['prototype']['createChildren']['call'](this), this['createView'](d26iw['demoui']['MainUI']['uiView']);
      }, wdif['uiView'] = { 'type': 'View', 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x2ee, 'top': 0x0, 'right': 0x0, 'left': 0x0, 'height': 0x536, 'bottom': 0x0 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x2ee, 'height': 0x536, 'centerY': 0x0 }, 'child': [{ 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x2ee, 'var': 'bg', 'height': 0x536 }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x2ee, 'visible': ![], 'var': 'box_1_show', 'height': 0x536, 'centerY': 0x0 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x253, 'x': 0x2e, 'width': 0x1d0, 'var': 'box_1_lab_info', 'leading': 0xa, 'height': 0x97, 'fontSize': 0x18, 'color': '#a959ee' } }, { 'type': 'HBox', 'props': { 'y': 0x2ee, 'x': 0x14, 'width': 0x1fe, 'space': 0x35, 'height': 0x78, 'align': 'top' }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x58, 'var': 'box_1_img_1', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_1', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0xa, 'x': 0xa, 'width': 0x58, 'var': 'box_1_img_2', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_2', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x14, 'x': 0x14, 'width': 0x58, 'var': 'box_1_img_3', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_3', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x1e, 'x': 0x1e, 'width': 0x58, 'var': 'box_1_img_4', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_4', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }] }] }, { 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'visible': ![], 'var': 'box_2_show' }, 'child': [{ 'type': 'HBox', 'props': { 'y': 0x220, 'x': 0x18, 'width': 0x1f4, 'space': 0x2c, 'height': 0x56, 'align': 'top' }, 'child': [{ 'type': 'Image', 'props': { 'y': 2.5, 'x': 0x0, 'width': 0x58, 'var': 'box_2_img_1', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_1', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0xc, 'x': 0xa, 'width': 0x58, 'var': 'box_2_img_2', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_2', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x16, 'x': 0x14, 'width': 0x58, 'var': 'box_2_img_3', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_3', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x20, 'x': 0x1e, 'width': 0x58, 'var': 'box_2_img_4', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_4', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x2a, 'x': 0x28, 'width': 0x58, 'var': 'box_2_img_5', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_5', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }] }, { 'type': 'Box', 'props': { 'y': 0x384, 'x': 0x0, 'width': 0x221, 'height': 0x44 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x0, 'x': 0x28, 'width': 0x122, 'var': 'box_2_lab_m_1', 'text': '方法一\uFF1A单日充值1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300' } }, { 'type': 'Text', 'props': { 'y': 0x1e, 'x': 0x28, 'width': 0x122, 'var': 'box_2_lab_m_2', 'text': '方法一\uFF1A历史累计充值1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300' } }, { 'type': 'Text', 'props': { 'y': 0x0, 'x': 0x141, 'width': 0xa4, 'var': 'box_2_lab_v_1', 'text': '1000/1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300', 'align': 'right' } }, { 'type': 'Text', 'props': { 'y': 0x1e, 'x': 0x141, 'width': 0xa4, 'var': 'box_2_lab_v_2', 'text': '1000/1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300', 'align': 'right' } }] }, { 'type': 'Image', 'props': { 'y': 0x1aa, 'x': 0x159, 'width': 0x66, 'var': 'box_2_btn_get', 'stateNum': 0x1, 'height': 0x26 } }, { 'type': 'Image', 'props': { 'y': 0x1aa, 'x': 0x159, 'width': 0x66, 'var': 'box_2_btn_copy', 'stateNum': 0x1, 'height': 0x26 } }, { 'type': 'Button', 'props': { 'y': 0x1d2, 'x': 0x126, 'width': 0xc9, 'var': 'box_2_addclick', 'stateNum': 0x1, 'height': 0x1b } }, { 'type': 'Text', 'props': { 'y': 0x13c, 'x': 0x17a, 'width': 0xa3, 'var': 'box_2_lab_wx', 'height': 0x1f, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'left' } }] }, { 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'visible': ![], 'var': 'box_3_show' }, 'child': [{ 'type': 'Panel', 'props': { 'y': 0xf5, 'x': 0x10, 'width': 0x201, 'var': 'box_3_panel', 'vScrollBarSkin': '', 'height': 0x29e } }] }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0x0, 'width': 0xbb, 'var': 'btn_1', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0xba, 'width': 0xbb, 'var': 'btn_2', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0x177, 'width': 0xbb, 'var': 'btn_3', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x203, 'x': 0x22e, 'width': 0x25, 'var': 'btn_close', 'height': 0x8f } }, { 'type': 'Box', 'props': { 'width': 0x2ee, 'visible': ![], 'var': 'box_help', 'height': 0x536 }, 'child': [{ 'type': 'Sprite', 'props': { 'y': 0x0, 'x': 0x0, 'mouseThrough': ![], 'alpha': 0.7 }, 'child': [{ 'type': 'Rect', 'props': { 'width': 0x2ee, 'lineWidth': 0x1, 'height': 0x536, 'fillColor': '#000000' } }] }, { 'type': 'Image', 'props': { 'y': 0x158, 'x': 0x28, 'width': 0x1d2, 'var': 'box_help_bg', 'height': 0x203 }, 'child': [{ 'type': 'Button', 'props': { 'y': -0x1, 'x': 0x1a0, 'width': 0x33, 'var': 'box_help_close', 'height': 0x28 } }, { 'type': 'Image', 'props': { 'y': 0x3f, 'x': 0x98, 'width': 0xa0, 'var': 'box_help_qrcode', 'height': 0xa0 } }] }] }] }] }] }, wdif;
    }(laya['ui']['View']);v_u3n['MainUI'] = a6n3v;
  })(y_ek0 = d26iw['demoui'] || (d26iw['demoui'] = {}));
}(o_d1w2i6 || (o_d1w2i6 = {})), function (i1dw62) {
  var w1xf9i;(function (rq5st) {
    var x9wfi1 = function (hgo8b) {
      o_v6a(qprmt5, hgo8b);function qprmt5() {
        return hgo8b['call'](this) || this;
      }return qprmt5['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), hgo8b['prototype']['createChildren']['call'](this), this['createView'](i1dw62['demoui']['ToastUI']['uiView']);
      }, qprmt5['uiView'] = { 'type': 'View', 'props': { 'width': 0x2ee, 'height': 0x536 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x12c, 'height': 0x32, 'centerY': 0x0, 'centerX': 0x0 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x12c, 'height': 0x32, 'centerX': 0x0, 'alpha': 0.5 }, 'child': [{ 'type': 'Rect', 'props': { 'width': 0x12c, 'lineWidth': 0x1, 'height': 0x32, 'fillColor': '#382f2f' } }] }, { 'type': 'Text', 'props': { 'width': 0x12c, 'var': 'lab_msg', 'valign': 'middle', 'text': 'text', 'height': 0x32, 'fontSize': 0x18, 'color': '#ffffff', 'align': 'center' } }] }] }, qprmt5;
    }(laya['ui']['View']);rq5st['ToastUI'] = x9wfi1;
  })(w1xf9i = i1dw62['demoui'] || (i1dw62['demoui'] = {}));
}(o_d1w2i6 || (o_d1w2i6 = {}));var o_mq7t = function () {
  function _vn3uy() {}return _vn3uy['init'] = function () {
    !this['ui'] && (this['ui'] = new o_d1w2i6['demoui']['ToastUI'](), this['ui']['visible'] = ![], Laya['stage']['addChild'](this['ui']));
  }, _vn3uy['msg'] = function (p5cmr8) {
    var l6d3av = this;!this['ui'] && _vn3uy['init'](), this['ui']['visible'] = !![], this['ui']['lab_msg']['text'] = p5cmr8, clearTimeout(this['interval']), this['interval'] = setTimeout(function () {
      l6d3av['ui']['visible'] = ![];
    }, 0x7d0);
  }, _vn3uy;
}();window['minitool'] = o_fog4;