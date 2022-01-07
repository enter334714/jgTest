var c = wx.$o;
var o_z4hgo = this && this['__extends'] || function () {
  var gxf4o = function (ctrpm5, wifd21) {
    return gxf4o = Object['setPrototypeOf'] || { '__proto__': [] } instanceof Array && function (tqs7m, _ky0e) {
      tqs7m['__proto__'] = _ky0e;
    } || function (mrc85, hocb8) {
      for (var $0_key in hocb8) if (hocb8['hasOwnProperty']($0_key)) mrc85[$0_key] = hocb8[$0_key];
    }, gxf4o(ctrpm5, wifd21);
  };return function (zgb, cm5rp) {
    gxf4o(zgb, cm5rp);function u_y0k() {
      this['constructor'] = zgb;
    }zgb['prototype'] = cm5rp === null ? Object['create'](cm5rp) : (u_y0k['prototype'] = cm5rp['prototype'], new u_y0k());
  };
}(),
    o_zphr = window['Sygame'],
    o_t5smqr = ![],
    o_bz8cp = function () {
  function obhg8() {}return obhg8['init'] = function () {
    o_t5smqr ? this['sygame'] = { 'channel': '3477d2273abd484ba2a0e04ad4971b3c', 'role_id': undefined, 'openid': 'oxmOf5biumkGash-Xht9FVAlswVk', 'appid': 'wx2936121c4817bf46' } : this['sygame'] = o_zphr;
  }, obhg8['getTimeStamp'] = function () {
    return new Date()['getTime']();
  }, obhg8['setResMap'] = function (ye0ku, vln_3) {
    this['resMap'][ye0ku] = ye0ku + '?' + vln_3;
  }, obhg8['getResMap'] = function (v3_y) {
    return this['resMap'][v3_y];
  }, obhg8['resMap'] = {}, obhg8;
}(),
    o_lan6v = function () {
  function di216a() {
    this['getIcon'] = 'https://wx.11babay.cn/uploads/f/fkccc1532944783/5/2/c/7/60dc442c4fbc5.png', this['copyIcon'] = 'https://wx.11babay.cn/uploads/f/fkccc1532944783/3/0/1/7/60dc4409dce39.png', o_bz8cp['init'](), this['getBoxCheckoutCode']();
  }return di216a['prototype']['send'] = function (l3u_nv, keun, wf149x, a63lvn, og4bx9) {
    a63lvn === void 0x0 && (a63lvn = 'get');og4bx9 === void 0x0 && (og4bx9 = '' || null);var xb4 = new Laya['HttpRequest']();xb4['http']['timeout'] = 0x2710, xb4['once'](Laya['Event']['COMPLETE'], this, keun), xb4['once'](Laya['Event']['ERROR'], this, wf149x), xb4['send'](l3u_nv, og4bx9, a63lvn, 'text');
  }, di216a['prototype']['postSidebarApi'] = function () {
    var v3nal6 = o_bz8cp['sygame']['openid'],
        hgo = '&channel=' + o_bz8cp['sygame']['channel'] + '&wecha_id=' + v3nal6;this['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=sidebarApi' + hgo, this['completeHandler'], this['errorHandler']);
  }, di216a['prototype']['getBoxCheckoutCode'] = function () {
    var b8zgo = Sygame['SY_CONF']['commitId'];this['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=getBoxCheckoutCode', this['getBoxCheckoutCodeRes'], this['errorHandler'], 'post', { 'commitId': b8zgo });
  }, di216a['prototype']['getBoxCheckoutCodeRes'] = function (wd61i) {
    var mp8r5c = JSON['parse'](wd61i);console['log']('getBoxCheckoutCode:', mp8r5c);if (mp8r5c['status'] == 0x3e9) {
      var f9i21w = mp8r5c['info'];f9i21w == 0xfa1 ? this['postSidebarApi']() : console['error']('盛也盒子\x20不显示' + mp8r5c);
    } else console['error']('盛也盒子 getBoxCheckoutCodeRes 其他错误' + mp8r5c);
  }, di216a['prototype']['completeHandler'] = function (gxob4h) {
    var y3nu_e = JSON['parse'](gxob4h);console['log'](y3nu_e);switch (y3nu_e['status']) {case 0x3e9:
        var v3ln_ = [];y3nu_e['msg']['basics_image_url'] && v3ln_['push']({ 'url': y3nu_e['msg']['basics_image_url'], 'type': Laya['Loader']['IMAGE'] }), y3nu_e['msg']['public_code'] && v3ln_['push']({ 'url': y3nu_e['msg']['public_code'], 'type': Laya['Loader']['IMAGE'] }), y3nu_e['msg']['vip_customer_service'] && v3ln_['push']({ 'url': y3nu_e['msg']['vip_customer_service'], 'type': Laya['Loader']['IMAGE'] }), y3nu_e['msg']['vip_customer_service_not_add'] && v3ln_['push']({ 'url': y3nu_e['msg']['vip_customer_service_not_add'], 'type': Laya['Loader']['IMAGE'] }), y3nu_e['msg']['game_center_image_url'] && v3ln_['push']({ 'url': y3nu_e['msg']['game_center_image_url'], 'type': Laya['Loader']['IMAGE'] }), y3nu_e['msg']['vip_qrcode'] && v3ln_['push']({ 'url': y3nu_e['msg']['vip_qrcode'], 'type': Laya['Loader']['IMAGE'] }), y3nu_e['msg']['getIcon'] && v3ln_['push']({ 'url': this['getIcon'], 'type': Laya['Loader']['IMAGE'] }), y3nu_e['msg']['copyIcon'] && v3ln_['push']({ 'url': this['copyIcon'], 'type': Laya['Loader']['IMAGE'] });for (var m57sq = 0x0, _3nl = y3nu_e['msg']['follow_gift_list']; m57sq < _3nl['length']; m57sq++) {
          var bgx4o = _3nl[m57sq];v3ln_['push']({ 'url': bgx4o['url'], 'type': Laya['Loader']['IMAGE'] });
        }for (var uyen_3 = 0x0, t5pcr = y3nu_e['msg']['vip_box_list']; uyen_3 < t5pcr['length']; uyen_3++) {
          var bgx4o = t5pcr[uyen_3];v3ln_['push']({ 'url': bgx4o['url'], 'type': Laya['Loader']['IMAGE'] });
        }for (var og8bz = 0x0; og8bz < v3ln_['length']; og8bz++) {
          o_bz8cp['setResMap'](v3ln_[og8bz]['url'], o_bz8cp['getTimeStamp']()), v3ln_[og8bz]['url'] = o_bz8cp['getResMap'](v3ln_[og8bz]['url']);
        }Laya['loader']['load'](v3ln_, Laya['Handler']['create'](this, this['initGame'])), this['data'] = y3nu_e['msg'];break;case 0x3ea:
        o_x91f4w['msg']('空的游戏channel');break;case 0x3eb:
        o_x91f4w['msg']('错误的游戏channel');break;case 0x3ec:
        o_x91f4w['msg']('未找到对应游戏大类');break;case 0x3ed:
        o_x91f4w['msg']('未设置侧边栏');break;}
  }, di216a['prototype']['errorHandler'] = function (mp5cr8) {}, di216a['prototype']['initGame'] = function () {
    var k0yj$ = new o__vul3n(this);k0yj$['show']();
  }, di216a;
}(),
    o__vul3n = function () {
  function ghxbo4(xbh4g) {
    this['page'] = 0x3, this['rolePriceData'] = {}, this['boxlist'] = [], this['donwX'] = 0x0, this['downY'] = 0x0, this['tool'] = xbh4g;
  }return ghxbo4['prototype']['setChildMouseThroughs'] = function (e_u0y) {
    var k_0 = e_u0y['_childs'] || [];for (var e_y3nu = 0x0; e_y3nu < k_0['length']; e_y3nu++) {
      k_0[e_y3nu] && (k_0[e_y3nu]['mouseThrough'] = !![]);
    }
  }, ghxbo4['prototype']['show'] = function () {
    if (this['tool']['data']['on'] === '1') {
      this['main'] = new o_avdl2['demoui']['MainUI'](), Laya['stage']['addChild'](this['main']), this['main']['mouseThrough'] = !![];var g4fox9 = this['main']['_childs'] || [];for (var l6nva3 = 0x0; l6nva3 < g4fox9['length']; l6nva3++) {
        g4fox9[l6nva3]['mouseThrough'] = !![];
      }this['setChildMouseThroughs'](this['main']['_childs']), this['setChildMouseThroughs'](this['main']['_childs'][0x0]), this['initIcon'](), this['initEvent'](), this['initView'](), o_x91f4w['init'](), this['main']['bg']['x'] = -0x2ee;
    }
  }, ghxbo4['prototype']['initView'] = function () {
    var e0ykj = this,
        rm5qs = this['tool']['data']['follow_down_words']['replace'](/\\n/g, '\x0a');this['main']['box_1_lab_info']['text'] = rm5qs;for (var lu3nav = 0x1; lu3nav <= this['tool']['data']['follow_gift_list']['length']; lu3nav++) {
      var fwi1x9 = this['tool']['data']['follow_gift_list'][lu3nav - 0x1];this['main']['box_1_img_' + lu3nav]['skin'] = fwi1x9['url'], this['main']['box_1_lab_' + lu3nav]['text'] = fwi1x9['name'];
    }for (var lu3nav = 0x1; lu3nav <= this['tool']['data']['vip_box_list']['length']; lu3nav++) {
      var fwi1x9 = this['tool']['data']['vip_box_list'][lu3nav - 0x1];this['main']['box_2_img_' + lu3nav]['skin'] = fwi1x9['url'], this['main']['box_2_lab_' + lu3nav]['text'] = fwi1x9['name'];
    }this['main']['box_2_lab_m_1']['text'] = '方法一：单日充值' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_m_2']['text'] = '方法二：历史累计充值' + +this['tool']['data']['y'] + '元', this['main']['box_2_lab_v_1']['text'] = (this['rolePriceData']['todayPrice'] || 0x0) + '/' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_v_2']['text'] = (this['rolePriceData']['allPrice'] || 0x0) + '/' + +this['tool']['data']['y'] + '元', this['main']['box_2_btn_copy']['skin'] = this['tool']['copyIcon'], this['main']['box_2_btn_get']['skin'] = this['tool']['getIcon'], this['main']['box_2_btn_copy']['visible'] = ![], this['main']['box_2_btn_get']['on'](Laya['Event']['CLICK'], this, function () {
      if (e0ykj['rolePriceData']['is_vip'] == 0x0) {
        o_x91f4w['msg']('请先获取vip资格');return;
      }e0ykj['main']['box_2_lab_wx']['text'] = this['rolePriceData']['vip_wx'], e0ykj['main']['box_2_btn_copy']['visible'] = !![];
    }), this['main']['box_2_btn_copy']['on'](Laya['Event']['CLICK'], this, function () {
      e0ykj['copyText'](this['rolePriceData']['vip_wx']);
    }), this['main']['box_2_addclick']['on'](Laya['Event']['CLICK'], this, function () {
      if (e0ykj['rolePriceData']['is_vip'] == 0x0) return;this['main']['box_help_qrcode']['skin'] = e0ykj['rolePriceData']['vip_qrcode'], e0ykj['main']['box_help']['visible'] = !![];
    }), this['main']['box_help_close']['on'](Laya['Event']['CLICK'], this, function () {
      e0ykj['main']['box_help']['visible'] = ![];
    }), this['main']['box_help_bg']['skin'] = this['tool']['data']['vip_customer_service_not_add'], this['main']['box_help_qrcode']['skin'] = e0ykj['rolePriceData']['vip_qrcode'], this['main']['box_help_qrcode']['scaleX'] = 0xa0 / this['main']['box_help_qrcode']['width'], this['main']['box_help_qrcode']['scaleY'] = 0xa0 / this['main']['box_help_qrcode']['width'], this['main']['box_3_panel']['vScrollBar']['visible'] = ![], this['main']['box_3_panel']['vScrollBarSkin'] = 'common_atlas/scrollBar.png';
  }, ghxbo4['prototype']['initIcon'] = function () {
    this['icon'] = new Laya['Image'](), this['icon']['skin'] = this['tool']['data']['basics_image_url'], this['icon']['x'] = 0x0, this['icon']['y'] = 0xc8, this['icon']['width'] = 0x66, this['icon']['height'] = 0x6f, this['main']['addChild'](this['icon']), this['icon']['on'](Laya['Event']['MOUSE_DOWN'], this, this['iconPress']), this['icon']['on'](Laya['Event']['MOUSE_UP'], this, this['iconUp']), this['icon']['on'](Laya['Event']['MOUSE_WHEEL'], this, this['iconMove']), this['dragRect'] = new Laya['Rectangle'](-this['icon']['width'] / 0x2, 0x0, Laya['stage']['width'], Laya['stage']['height'] - this['icon']['height'] / 0x2);
  }, ghxbo4['prototype']['initEvent'] = function () {
    var sqtrm = this;this['main']['btn_1']['on'](Laya['Event']['CLICK'], this, function () {
      if (sqtrm['page'] == 0x1) return;sqtrm['page1']();
    }), this['main']['btn_2']['on'](Laya['Event']['CLICK'], this, function () {
      if (sqtrm['page'] == 0x2) return;sqtrm['page2']();
    }), this['main']['btn_3']['on'](Laya['Event']['CLICK'], this, function () {
      if (sqtrm['page'] == 0x3) return;sqtrm['page3']();
    }), this['main']['btn_close']['on'](Laya['Event']['CLICK'], this, function () {
      sqtrm['main']['bg']['x'] = -0x2ee, sqtrm['icon']['visible'] = !![];
    });
  }, ghxbo4['prototype']['initBoard'] = function () {
    this['isInitBoard'] = !![], this['page1']();
  }, ghxbo4['prototype']['showBoard'] = function () {
    this['main']['bg']['x'] = 0x0, this['icon']['visible'] = ![];var p5mcr = _oAE['selectedServer']['server_id'],
        o49f = _oAE['selectedServer']['server_name'],
        fi9w21 = _oAE['roleId'],
        wf4g9x = _oAE['roleName'],
        eunky = o_bz8cp['sygame']['openid'],
        _y0 = '&role_id=' + o_bz8cp['sygame']['role_id'] + '&channel=' + o_bz8cp['sygame']['channel'] + '&server_id=' + p5mcr + '&server_name=' + o49f + '&wecha_id=' + eunky + '&role_id=' + fi9w21 + '&role_name=' + wf4g9x;this['tool']['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=sidebarApiRoleId' + _y0, this['rolePriceHandler']['bind'](this), this['roleError']['bind'](this));
  }, ghxbo4['prototype']['page1'] = function () {
    this['page'] = 0x1;!ghxbo4['prototype']['page1Bg'] && (ghxbo4['prototype']['page1Bg'] = new Laya['Image'](this['tool']['data']['public_code']), this['main']['bg']['addChildAt'](ghxbo4['prototype']['page1Bg'], 0x0));if (ghxbo4['prototype']['page1Bg']) ghxbo4['prototype']['page1Bg']['visible'] = !![];if (ghxbo4['prototype']['page2Bg']) ghxbo4['prototype']['page2Bg']['visible'] = ![];if (ghxbo4['prototype']['page3Bg']) ghxbo4['prototype']['page3Bg']['visible'] = ![];this['main']['box_1_show']['visible'] = !![], this['main']['box_2_show']['visible'] = ![], this['main']['box_3_show']['visible'] = ![];
  }, ghxbo4['prototype']['page2'] = function () {
    this['page'] = 0x2;!ghxbo4['prototype']['page2Bg'] && (ghxbo4['prototype']['page2Bg'] = new Laya['Image'](this['tool']['data']['vip_customer_service']), this['main']['bg']['addChildAt'](ghxbo4['prototype']['page2Bg'], 0x0));if (ghxbo4['prototype']['page1Bg']) ghxbo4['prototype']['page1Bg']['visible'] = ![];if (ghxbo4['prototype']['page2Bg']) ghxbo4['prototype']['page2Bg']['visible'] = !![];if (ghxbo4['prototype']['page3Bg']) ghxbo4['prototype']['page3Bg']['visible'] = ![];this['main']['box_1_show']['visible'] = ![], this['main']['box_2_show']['visible'] = !![], this['main']['box_3_show']['visible'] = ![];
  }, ghxbo4['prototype']['page3'] = function () {
    this['page'] = 0x3;!ghxbo4['prototype']['page3Bg'] && (ghxbo4['prototype']['page3Bg'] = new Laya['Image'](this['tool']['data']['game_center_image_url']), this['main']['bg']['addChildAt'](ghxbo4['prototype']['page3Bg'], 0x0));if (ghxbo4['prototype']['page1Bg']) ghxbo4['prototype']['page1Bg']['visible'] = ![];if (ghxbo4['prototype']['page2Bg']) ghxbo4['prototype']['page2Bg']['visible'] = ![];if (ghxbo4['prototype']['page3Bg']) ghxbo4['prototype']['page3Bg']['visible'] = !![];ghxbo4['prototype']['page1Bg']['visible'] = ![], this['main']['bg']['skin'] = this['tool']['data']['game_center_image_url'], this['main']['box_1_show']['visible'] = ![], this['main']['box_2_show']['visible'] = ![], this['main']['box_3_show']['visible'] = !![], this['sendBox'] || this['getBoxList'](0x0), this['sendBox'] = !![], o_zphr && o_zphr['syClickOpenBox']();
  }, ghxbo4['prototype']['getBoxList'] = function (o8cbz) {
    var bzphc8 = this;o_zphr && o_zphr['syGetBoxList']({ 'page': o8cbz, 'count': 0xc })['then'](function (ohxbg) {
      var oxgb4h = ohxbg['data'];oxgb4h['status'] == 0x3e9 ? oxgb4h['data'] && oxgb4h['data']['length'] && (bzphc8['boxlist'] = bzphc8['boxlist']['concat'](oxgb4h['data']), o8cbz++, bzphc8['getBoxList'](o8cbz)) : bzphc8['boxListHandler']();
    });
  }, ghxbo4['prototype']['copyText'] = function (navl3) {
    try {
      wx['setClipboardData']({ 'data': navl3, 'success': function (nyeu_) {
          console['log']('复制成功:', nyeu_);
        } });
    } catch (fw9i1x) {}
  }, ghxbo4['prototype']['rolePriceHandler'] = function (f9oxg4) {
    this['rolePriceData'] = JSON['parse'](f9oxg4);switch (this['rolePriceData']['status']) {case 0x3e9:
        this['main']['box_2_lab_v_1']['text'] = (this['rolePriceData']['todayPrice'] || 0x0) + '/' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_v_2']['text'] = (this['rolePriceData']['allPrice'] || 0x0) + '/' + +this['tool']['data']['y'] + '元';break;case 0x3ea:
        break;case 0x3eb:
        break;}
  }, ghxbo4['prototype']['roleError'] = function () {}, ghxbo4['prototype']['boxListHandler'] = function () {
    var y_ekn = function (ox9b4g) {
      var _0uyek = diw62['boxlist'][ox9b4g],
          x4w9f = new o_avdl2['demoui']['BoxItemUI']();x4w9f['icon']['skin'] = _0uyek['icon'], x4w9f['title']['text'] = _0uyek['title'], x4w9f['x'] = 0xa0 * (ox9b4g % 0x3), x4w9f['y'] = 0xa0 * (ox9b4g / 0x3 ^ 0x0), diw62['main']['box_3_panel']['addChild'](x4w9f);var ogf = { 'appid': o_bz8cp['sygame']['appid'], 'game_id': _0uyek['game_id'], 'jump_appid': _0uyek['jump_appid'], 'jump_path': _0uyek['jump_path'], 'tunnel_id': _0uyek['tunnel_id'], 'uv': 0x0, 'wecha_id': o_bz8cp['sygame']['openid'] },
          lu_n = _0uyek['preview_img'],
          $y0ej = _0uyek['jump_type'],
          l63anv = _0uyek['kf_session'];x4w9f['on'](Laya['Event']['CLICK'], diw62, function () {
        o_zphr && o_zphr['syClickBox']({ 'game_id': _0uyek['game_id'], 'tunnel_id': _0uyek['tunnel_id'], 'jump_appid': _0uyek['jump_appid'], 'jump_path': _0uyek['jump_path'] })['then'](function (a2i6l) {
          if ($y0ej === '0') wx['navigateToMiniProgram']({ 'appId': ogf['jump_appid'], 'path': ogf['jump_path'], 'fail': function (nu3vl_) {
              if (!lu_n) return;wx['previewImage']({ 'urls': [lu_n] });
            } });else {
            if ($y0ej === '1') {
              if (!lu_n) return;wx['previewImage']({ 'urls': [lu_n] });
            } else {
              if ($y0ej === '2') {
                if (!l63anv) return;wx['openCustomerServiceConversation']({ 'sessionFrom': l63anv, 'showMessageCard': !![], 'sendMessageTitle': '', 'sendMessagePath': '', 'sendMessageImg': '' });
              }
            }
          }
        });
      });
    },
        diw62 = this;for (var nv3y = 0x0; nv3y < this['boxlist']['length']; nv3y++) {
      y_ekn(nv3y);
    }
  }, ghxbo4['prototype']['boxListError'] = function () {}, ghxbo4['prototype']['boxClickHandler'] = function () {}, ghxbo4['prototype']['iconPress'] = function (zrhpc8) {
    this['donwX'] = zrhpc8['target']['x'], this['donwY'] = zrhpc8['target']['y'], this['icon']['startDrag'](this['dragRect']), this['isMove'] = ![], this['isPress'] = !![];
  }, ghxbo4['prototype']['iconMove'] = function (ua3l) {
    this['isMove'] = !![];
  }, ghxbo4['prototype']['iconUp'] = function (z8crm) {
    var xw4f9g = z8crm['target']['x'],
        mpqtr5 = z8crm['target']['y'];this['icon']['stopDrag'](), xw4f9g == this['donwX'] && this['donwY'] == mpqtr5 && (this['isInitBoard'] || this['initBoard'](), this['showBoard']()), this['isMove'] = ![], this['isPress'] = ![];
  }, ghxbo4;
}(),
    o_avdl2;(function (m8zcpr) {
  var cr58;(function (f1iw9) {
    var y_3une = function (czh8bo) {
      o_z4hgo(gobhz4, czh8bo);function gobhz4() {
        return czh8bo['call'](this) || this;
      }return gobhz4['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), czh8bo['prototype']['createChildren']['call'](this), this['createView'](m8zcpr['demoui']['BoxItemUI']['uiView']);
      }, gobhz4['uiView'] = { 'type': 'View', 'props': { 'width': 0xb4, 'height': 0xa0 }, 'child': [{ 'type': 'Image', 'props': { 'y': 0x3, 'x': 0x20, 'width': 0x73, 'var': 'icon', 'height': 0x73 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x79, 'x': -0x21, 'width': 0xb4, 'var': 'title', 'valign': 'middle', 'height': 0x22, 'fontSize': 0x16, 'color': '#441d1c', 'align': 'center' } }] }] }, gobhz4;
    }(laya['ui']['View']);f1iw9['BoxItemUI'] = y_3une;
  })(cr58 = m8zcpr['demoui'] || (m8zcpr['demoui'] = {}));
})(o_avdl2 || (o_avdl2 = {})), function (m5ptc) {
  var _kyn;(function (rhz) {
    var vuny3_ = function (a6il2) {
      o_z4hgo(ohc8bz, a6il2);function ohc8bz() {
        return a6il2['call'](this) || this;
      }return ohc8bz['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), a6il2['prototype']['createChildren']['call'](this), this['createView'](m5ptc['demoui']['MainUI']['uiView']);
      }, ohc8bz['uiView'] = { 'type': 'View', 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x2ee, 'top': 0x0, 'right': 0x0, 'left': 0x0, 'height': 0x536, 'bottom': 0x0 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x2ee, 'height': 0x536, 'centerY': 0x0 }, 'child': [{ 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x2ee, 'var': 'bg', 'height': 0x536 }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x2ee, 'visible': ![], 'var': 'box_1_show', 'height': 0x536, 'centerY': 0x0 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x253, 'x': 0x2e, 'width': 0x1d0, 'var': 'box_1_lab_info', 'leading': 0xa, 'height': 0x97, 'fontSize': 0x18, 'color': '#a959ee' } }, { 'type': 'HBox', 'props': { 'y': 0x2ee, 'x': 0x14, 'width': 0x1fe, 'space': 0x35, 'height': 0x78, 'align': 'top' }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x58, 'var': 'box_1_img_1', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_1', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0xa, 'x': 0xa, 'width': 0x58, 'var': 'box_1_img_2', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_2', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x14, 'x': 0x14, 'width': 0x58, 'var': 'box_1_img_3', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_3', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x1e, 'x': 0x1e, 'width': 0x58, 'var': 'box_1_img_4', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_4', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }] }] }, { 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'visible': ![], 'var': 'box_2_show' }, 'child': [{ 'type': 'HBox', 'props': { 'y': 0x220, 'x': 0x18, 'width': 0x1f4, 'space': 0x2c, 'height': 0x56, 'align': 'top' }, 'child': [{ 'type': 'Image', 'props': { 'y': 2.5, 'x': 0x0, 'width': 0x58, 'var': 'box_2_img_1', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_1', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0xc, 'x': 0xa, 'width': 0x58, 'var': 'box_2_img_2', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_2', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x16, 'x': 0x14, 'width': 0x58, 'var': 'box_2_img_3', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_3', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x20, 'x': 0x1e, 'width': 0x58, 'var': 'box_2_img_4', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_4', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x2a, 'x': 0x28, 'width': 0x58, 'var': 'box_2_img_5', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_5', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }] }, { 'type': 'Box', 'props': { 'y': 0x384, 'x': 0x0, 'width': 0x221, 'height': 0x44 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x0, 'x': 0x28, 'width': 0x122, 'var': 'box_2_lab_m_1', 'text': '方法一\uFF1A单日充值1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300' } }, { 'type': 'Text', 'props': { 'y': 0x1e, 'x': 0x28, 'width': 0x122, 'var': 'box_2_lab_m_2', 'text': '方法一\uFF1A历史累计充值1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300' } }, { 'type': 'Text', 'props': { 'y': 0x0, 'x': 0x141, 'width': 0xa4, 'var': 'box_2_lab_v_1', 'text': '1000/1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300', 'align': 'right' } }, { 'type': 'Text', 'props': { 'y': 0x1e, 'x': 0x141, 'width': 0xa4, 'var': 'box_2_lab_v_2', 'text': '1000/1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300', 'align': 'right' } }] }, { 'type': 'Image', 'props': { 'y': 0x1aa, 'x': 0x159, 'width': 0x66, 'var': 'box_2_btn_get', 'stateNum': 0x1, 'height': 0x26 } }, { 'type': 'Image', 'props': { 'y': 0x1aa, 'x': 0x159, 'width': 0x66, 'var': 'box_2_btn_copy', 'stateNum': 0x1, 'height': 0x26 } }, { 'type': 'Button', 'props': { 'y': 0x1d2, 'x': 0x126, 'width': 0xc9, 'var': 'box_2_addclick', 'stateNum': 0x1, 'height': 0x1b } }, { 'type': 'Text', 'props': { 'y': 0x13c, 'x': 0x17a, 'width': 0xa3, 'var': 'box_2_lab_wx', 'height': 0x1f, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'left' } }] }, { 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'visible': ![], 'var': 'box_3_show' }, 'child': [{ 'type': 'Panel', 'props': { 'y': 0xf5, 'x': 0x10, 'width': 0x201, 'var': 'box_3_panel', 'vScrollBarSkin': '', 'height': 0x29e } }] }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0x0, 'width': 0xbb, 'var': 'btn_1', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0xba, 'width': 0xbb, 'var': 'btn_2', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0x177, 'width': 0xbb, 'var': 'btn_3', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x203, 'x': 0x22e, 'width': 0x25, 'var': 'btn_close', 'height': 0x8f } }, { 'type': 'Box', 'props': { 'width': 0x2ee, 'visible': ![], 'var': 'box_help', 'height': 0x536 }, 'child': [{ 'type': 'Sprite', 'props': { 'y': 0x0, 'x': 0x0, 'mouseThrough': ![], 'alpha': 0.7 }, 'child': [{ 'type': 'Rect', 'props': { 'width': 0x2ee, 'lineWidth': 0x1, 'height': 0x536, 'fillColor': '#000000' } }] }, { 'type': 'Image', 'props': { 'y': 0x158, 'x': 0x28, 'width': 0x1d2, 'var': 'box_help_bg', 'height': 0x203 }, 'child': [{ 'type': 'Button', 'props': { 'y': -0x1, 'x': 0x1a0, 'width': 0x33, 'var': 'box_help_close', 'height': 0x28 } }, { 'type': 'Image', 'props': { 'y': 0x3f, 'x': 0x98, 'width': 0xa0, 'var': 'box_help_qrcode', 'height': 0xa0 } }] }] }] }] }] }, ohc8bz;
    }(laya['ui']['View']);rhz['MainUI'] = vuny3_;
  })(_kyn = m5ptc['demoui'] || (m5ptc['demoui'] = {}));
}(o_avdl2 || (o_avdl2 = {})), function (i2wf91) {
  var nk_euy;(function (qstrm) {
    var ox9gb4 = function (na3) {
      o_z4hgo(hg4obz, na3);function hg4obz() {
        return na3['call'](this) || this;
      }return hg4obz['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), na3['prototype']['createChildren']['call'](this), this['createView'](i2wf91['demoui']['ToastUI']['uiView']);
      }, hg4obz['uiView'] = { 'type': 'View', 'props': { 'width': 0x2ee, 'height': 0x536 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x12c, 'height': 0x32, 'centerY': 0x0, 'centerX': 0x0 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x12c, 'height': 0x32, 'centerX': 0x0, 'alpha': 0.5 }, 'child': [{ 'type': 'Rect', 'props': { 'width': 0x12c, 'lineWidth': 0x1, 'height': 0x32, 'fillColor': '#382f2f' } }] }, { 'type': 'Text', 'props': { 'width': 0x12c, 'var': 'lab_msg', 'valign': 'middle', 'text': 'text', 'height': 0x32, 'fontSize': 0x18, 'color': '#ffffff', 'align': 'center' } }] }] }, hg4obz;
    }(laya['ui']['View']);qstrm['ToastUI'] = ox9gb4;
  })(nk_euy = i2wf91['demoui'] || (i2wf91['demoui'] = {}));
}(o_avdl2 || (o_avdl2 = {}));var o_x91f4w = function () {
  function o8bzhc() {}return o8bzhc['init'] = function () {
    !this['ui'] && (this['ui'] = new o_avdl2['demoui']['ToastUI'](), this['ui']['visible'] = ![], Laya['stage']['addChild'](this['ui']));
  }, o8bzhc['msg'] = function (d21a6) {
    var wf14x = this;!this['ui'] && o8bzhc['init'](), this['ui']['visible'] = !![], this['ui']['lab_msg']['text'] = d21a6, clearTimeout(this['interval']), this['interval'] = setTimeout(function () {
      wf14x['ui']['visible'] = ![];
    }, 0x7d0);
  }, o8bzhc;
}();window['minitool'] = o_lan6v;