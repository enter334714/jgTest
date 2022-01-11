var e = wx.$F;
var lzuf91w = this && this['__extends'] || function () {
  var q5v6b = function (mx8iry, x8iyrm) {
    return q5v6b = Object['setPrototypeOf'] || { '__proto__': [] } instanceof Array && function (epnd4, uwc94z) {
      epnd4['__proto__'] = uwc94z;
    } || function (a5760q, ox570) {
      for (var fw1z9 in ox570) if (ox570['hasOwnProperty'](fw1z9)) a5760q[fw1z9] = ox570[fw1z9];
    }, q5v6b(mx8iry, x8iyrm);
  };return function (e4djp, fczu9w) {
    q5v6b(e4djp, fczu9w);function j_snke() {
      this['constructor'] = e4djp;
    }e4djp['prototype'] = fczu9w === null ? Object['create'](fczu9w) : (j_snke['prototype'] = fczu9w['prototype'], new j_snke());
  };
}(),
    lbq650a = window['Sygame'],
    lq5vba = ![],
    ljpd4nc = function () {
  function o50a7() {}return o50a7['init'] = function () {
    lq5vba ? this['sygame'] = { 'channel': '3477d2273abd484ba2a0e04ad4971b3c', 'role_id': undefined, 'openid': 'oxmOf5biumkGash-Xht9FVAlswVk', 'appid': 'wx2936121c4817bf46' } : this['sygame'] = lbq650a;
  }, o50a7['getTimeStamp'] = function () {
    return new Date()['getTime']();
  }, o50a7['setResMap'] = function (s$_2, $b26k) {
    this['resMap'][s$_2] = s$_2 + '?' + $b26k;
  }, o50a7['getResMap'] = function (c4pjnd) {
    return this['resMap'][c4pjnd];
  }, o50a7['resMap'] = {}, o50a7;
}(),
    lkvb62$ = function () {
  function o5qx07() {
    this['getIcon'] = 'https://wx.11babay.cn/uploads/f/fkccc1532944783/5/2/c/7/60dc442c4fbc5.png', this['copyIcon'] = 'https://wx.11babay.cn/uploads/f/fkccc1532944783/3/0/1/7/60dc4409dce39.png', ljpd4nc['init'](), this['getBoxCheckoutCode']();
  }return o5qx07['prototype']['send'] = function (wu49z, cjdnp4, dnes, epsnj_, m3itgy) {
    epsnj_ === void 0x0 && (epsnj_ = 'get');m3itgy === void 0x0 && (m3itgy = '' || null);var bqa506 = new Laya['HttpRequest']();bqa506['http']['timeout'] = 0x2710, bqa506['once'](Laya['Event']['COMPLETE'], this, cjdnp4), bqa506['once'](Laya['Event']['ERROR'], this, dnes), bqa506['send'](wu49z, m3itgy, epsnj_, 'text');
  }, o5qx07['prototype']['postSidebarApi'] = function () {
    var nsdj = ljpd4nc['sygame']['openid'],
        xqr0o7 = '&channel=' + ljpd4nc['sygame']['channel'] + '&wecha_id=' + nsdj;this['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=sidebarApi' + xqr0o7, this['completeHandler'], this['errorHandler']);
  }, o5qx07['prototype']['getBoxCheckoutCode'] = function () {
    var e2_s = Sygame['SY_CONF']['commitId'];this['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=getBoxCheckoutCode', this['getBoxCheckoutCodeRes'], this['errorHandler'], 'post', { 'commitId': e2_s });
  }, o5qx07['prototype']['getBoxCheckoutCodeRes'] = function (k$j_es) {
    var skv2$_ = JSON['parse'](k$j_es);console['log']('getBoxCheckoutCode:', skv2$_);if (skv2$_['status'] == 0x3e9) {
      var jdpc4 = skv2$_['info'];jdpc4 == 0xfa1 ? this['postSidebarApi']() : console['error']('盛也盒子\x20不显示' + skv2$_);
    } else console['error']('盛也盒子 getBoxCheckoutCodeRes 其他错误' + skv2$_);
  }, o5qx07['prototype']['completeHandler'] = function (wulf19) {
    var av65bq = JSON['parse'](wulf19);console['log'](av65bq);switch (av65bq['status']) {case 0x3e9:
        var o05aq = [];av65bq['msg']['basics_image_url'] && o05aq['push']({ 'url': av65bq['msg']['basics_image_url'], 'type': Laya['Loader']['IMAGE'] }), av65bq['msg']['public_code'] && o05aq['push']({ 'url': av65bq['msg']['public_code'], 'type': Laya['Loader']['IMAGE'] }), av65bq['msg']['vip_customer_service'] && o05aq['push']({ 'url': av65bq['msg']['vip_customer_service'], 'type': Laya['Loader']['IMAGE'] }), av65bq['msg']['vip_customer_service_not_add'] && o05aq['push']({ 'url': av65bq['msg']['vip_customer_service_not_add'], 'type': Laya['Loader']['IMAGE'] }), av65bq['msg']['game_center_image_url'] && o05aq['push']({ 'url': av65bq['msg']['game_center_image_url'], 'type': Laya['Loader']['IMAGE'] }), av65bq['msg']['vip_qrcode'] && o05aq['push']({ 'url': av65bq['msg']['vip_qrcode'], 'type': Laya['Loader']['IMAGE'] }), av65bq['msg']['getIcon'] && o05aq['push']({ 'url': this['getIcon'], 'type': Laya['Loader']['IMAGE'] }), av65bq['msg']['copyIcon'] && o05aq['push']({ 'url': this['copyIcon'], 'type': Laya['Loader']['IMAGE'] });for (var w4cu = 0x0, jdensp = av65bq['msg']['follow_gift_list']; w4cu < jdensp['length']; w4cu++) {
          var xor8mi = jdensp[w4cu];o05aq['push']({ 'url': xor8mi['url'], 'type': Laya['Loader']['IMAGE'] });
        }for (var yix8r = 0x0, yt3i = av65bq['msg']['vip_box_list']; yix8r < yt3i['length']; yix8r++) {
          var xor8mi = yt3i[yix8r];o05aq['push']({ 'url': xor8mi['url'], 'type': Laya['Loader']['IMAGE'] });
        }for (var es$ = 0x0; es$ < o05aq['length']; es$++) {
          ljpd4nc['setResMap'](o05aq[es$]['url'], ljpd4nc['getTimeStamp']()), o05aq[es$]['url'] = ljpd4nc['getResMap'](o05aq[es$]['url']);
        }Laya['loader']['load'](o05aq, Laya['Handler']['create'](this, this['initGame'])), this['data'] = av65bq['msg'];break;case 0x3ea:
        lbv$k2_['msg']('空的游戏channel');break;case 0x3eb:
        lbv$k2_['msg']('错误的游戏channel');break;case 0x3ec:
        lbv$k2_['msg']('未找到对应游戏大类');break;case 0x3ed:
        lbv$k2_['msg']('未设置侧边栏');break;}
  }, o5qx07['prototype']['errorHandler'] = function (qbav56) {}, o5qx07['prototype']['initGame'] = function () {
    var omrix = new lo5aq(this);omrix['show']();
  }, o5qx07;
}(),
    lo5aq = function () {
  function xr8om(sepn_) {
    this['page'] = 0x3, this['rolePriceData'] = {}, this['boxlist'] = [], this['donwX'] = 0x0, this['downY'] = 0x0, this['tool'] = sepn_;
  }return xr8om['prototype']['setChildMouseThroughs'] = function (v26b5a) {
    var fzu9c = v26b5a['_childs'] || [];for (var _s$jke = 0x0; _s$jke < fzu9c['length']; _s$jke++) {
      fzu9c[_s$jke] && (fzu9c[_s$jke]['mouseThrough'] = !![]);
    }
  }, xr8om['prototype']['show'] = function () {
    if (this['tool']['data']['on'] === '1') {
      this['main'] = new luwf19z['demoui']['MainUI'](), Laya['stage']['addChild'](this['main']), this['main']['mouseThrough'] = !![];var ba5q06 = this['main']['_childs'] || [];for (var wf9cz = 0x0; wf9cz < ba5q06['length']; wf9cz++) {
        ba5q06[wf9cz]['mouseThrough'] = !![];
      }this['setChildMouseThroughs'](this['main']['_childs']), this['setChildMouseThroughs'](this['main']['_childs'][0x0]), this['initIcon'](), this['initEvent'](), this['initView'](), lbv$k2_['init'](), this['main']['bg']['x'] = -0x2ee;
    }
  }, xr8om['prototype']['initView'] = function () {
    var ufz91 = this,
        rixmy8 = this['tool']['data']['follow_down_words']['replace'](/\\n/g, '\x0a');this['main']['box_1_lab_info']['text'] = rixmy8;for (var cdnp4 = 0x1; cdnp4 <= this['tool']['data']['follow_gift_list']['length']; cdnp4++) {
      var vb2k = this['tool']['data']['follow_gift_list'][cdnp4 - 0x1];this['main']['box_1_img_' + cdnp4]['skin'] = vb2k['url'], this['main']['box_1_lab_' + cdnp4]['text'] = vb2k['name'];
    }for (var cdnp4 = 0x1; cdnp4 <= this['tool']['data']['vip_box_list']['length']; cdnp4++) {
      var vb2k = this['tool']['data']['vip_box_list'][cdnp4 - 0x1];this['main']['box_2_img_' + cdnp4]['skin'] = vb2k['url'], this['main']['box_2_lab_' + cdnp4]['text'] = vb2k['name'];
    }this['main']['box_2_lab_m_1']['text'] = '方法一：单日充值' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_m_2']['text'] = '方法二：历史累计充值' + +this['tool']['data']['y'] + '元', this['main']['box_2_lab_v_1']['text'] = (this['rolePriceData']['todayPrice'] || 0x0) + '/' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_v_2']['text'] = (this['rolePriceData']['allPrice'] || 0x0) + '/' + +this['tool']['data']['y'] + '元', this['main']['box_2_btn_copy']['skin'] = this['tool']['copyIcon'], this['main']['box_2_btn_get']['skin'] = this['tool']['getIcon'], this['main']['box_2_btn_copy']['visible'] = ![], this['main']['box_2_btn_get']['on'](Laya['Event']['CLICK'], this, function () {
      if (ufz91['rolePriceData']['is_vip'] == 0x0) {
        lbv$k2_['msg']('请先获取vip资格');return;
      }ufz91['main']['box_2_lab_wx']['text'] = this['rolePriceData']['vip_wx'], ufz91['main']['box_2_btn_copy']['visible'] = !![];
    }), this['main']['box_2_btn_copy']['on'](Laya['Event']['CLICK'], this, function () {
      ufz91['copyText'](this['rolePriceData']['vip_wx']);
    }), this['main']['box_2_addclick']['on'](Laya['Event']['CLICK'], this, function () {
      if (ufz91['rolePriceData']['is_vip'] == 0x0) return;this['main']['box_help_qrcode']['skin'] = ufz91['rolePriceData']['vip_qrcode'], ufz91['main']['box_help']['visible'] = !![];
    }), this['main']['box_help_close']['on'](Laya['Event']['CLICK'], this, function () {
      ufz91['main']['box_help']['visible'] = ![];
    }), this['main']['box_help_bg']['skin'] = this['tool']['data']['vip_customer_service_not_add'], this['main']['box_help_qrcode']['skin'] = ufz91['rolePriceData']['vip_qrcode'], this['main']['box_help_qrcode']['scaleX'] = 0xa0 / this['main']['box_help_qrcode']['width'], this['main']['box_help_qrcode']['scaleY'] = 0xa0 / this['main']['box_help_qrcode']['width'], this['main']['box_3_panel']['vScrollBar']['visible'] = ![], this['main']['box_3_panel']['vScrollBarSkin'] = 'common_atlas/scrollBar.png';
  }, xr8om['prototype']['initIcon'] = function () {
    this['icon'] = new Laya['Image'](), this['icon']['skin'] = this['tool']['data']['basics_image_url'], this['icon']['x'] = 0x0, this['icon']['y'] = 0xc8, this['icon']['width'] = 0x66, this['icon']['height'] = 0x6f, this['main']['addChild'](this['icon']), this['icon']['on'](Laya['Event']['MOUSE_DOWN'], this, this['iconPress']), this['icon']['on'](Laya['Event']['MOUSE_UP'], this, this['iconUp']), this['icon']['on'](Laya['Event']['MOUSE_WHEEL'], this, this['iconMove']), this['dragRect'] = new Laya['Rectangle'](-this['icon']['width'] / 0x2, 0x0, Laya['stage']['width'], Laya['stage']['height'] - this['icon']['height'] / 0x2);
  }, xr8om['prototype']['initEvent'] = function () {
    var u9dcz = this;this['main']['btn_1']['on'](Laya['Event']['CLICK'], this, function () {
      if (u9dcz['page'] == 0x1) return;u9dcz['page1']();
    }), this['main']['btn_2']['on'](Laya['Event']['CLICK'], this, function () {
      if (u9dcz['page'] == 0x2) return;u9dcz['page2']();
    }), this['main']['btn_3']['on'](Laya['Event']['CLICK'], this, function () {
      if (u9dcz['page'] == 0x3) return;u9dcz['page3']();
    }), this['main']['btn_close']['on'](Laya['Event']['CLICK'], this, function () {
      u9dcz['main']['bg']['x'] = -0x2ee, u9dcz['icon']['visible'] = !![];
    });
  }, xr8om['prototype']['initBoard'] = function () {
    this['isInitBoard'] = !![], this['page1']();
  }, xr8om['prototype']['showBoard'] = function () {
    this['main']['bg']['x'] = 0x0, this['icon']['visible'] = ![];var ejsdnp = k$E['selectedServer']['server_id'],
        se_k$ = k$E['selectedServer']['server_name'],
        dzcu = k$E['roleId'],
        _eks2 = k$E['roleName'],
        ao0q7 = ljpd4nc['sygame']['openid'],
        d94czp = '&role_id=' + ljpd4nc['sygame']['role_id'] + '&channel=' + ljpd4nc['sygame']['channel'] + '&server_id=' + ejsdnp + '&server_name=' + se_k$ + '&wecha_id=' + ao0q7 + '&role_id=' + dzcu + '&role_name=' + _eks2;this['tool']['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=sidebarApiRoleId' + d94czp, this['rolePriceHandler']['bind'](this), this['roleError']['bind'](this));
  }, xr8om['prototype']['page1'] = function () {
    this['page'] = 0x1;!xr8om['prototype']['page1Bg'] && (xr8om['prototype']['page1Bg'] = new Laya['Image'](this['tool']['data']['public_code']), this['main']['bg']['addChildAt'](xr8om['prototype']['page1Bg'], 0x0));if (xr8om['prototype']['page1Bg']) xr8om['prototype']['page1Bg']['visible'] = !![];if (xr8om['prototype']['page2Bg']) xr8om['prototype']['page2Bg']['visible'] = ![];if (xr8om['prototype']['page3Bg']) xr8om['prototype']['page3Bg']['visible'] = ![];this['main']['box_1_show']['visible'] = !![], this['main']['box_2_show']['visible'] = ![], this['main']['box_3_show']['visible'] = ![];
  }, xr8om['prototype']['page2'] = function () {
    this['page'] = 0x2;!xr8om['prototype']['page2Bg'] && (xr8om['prototype']['page2Bg'] = new Laya['Image'](this['tool']['data']['vip_customer_service']), this['main']['bg']['addChildAt'](xr8om['prototype']['page2Bg'], 0x0));if (xr8om['prototype']['page1Bg']) xr8om['prototype']['page1Bg']['visible'] = ![];if (xr8om['prototype']['page2Bg']) xr8om['prototype']['page2Bg']['visible'] = !![];if (xr8om['prototype']['page3Bg']) xr8om['prototype']['page3Bg']['visible'] = ![];this['main']['box_1_show']['visible'] = ![], this['main']['box_2_show']['visible'] = !![], this['main']['box_3_show']['visible'] = ![];
  }, xr8om['prototype']['page3'] = function () {
    this['page'] = 0x3;!xr8om['prototype']['page3Bg'] && (xr8om['prototype']['page3Bg'] = new Laya['Image'](this['tool']['data']['game_center_image_url']), this['main']['bg']['addChildAt'](xr8om['prototype']['page3Bg'], 0x0));if (xr8om['prototype']['page1Bg']) xr8om['prototype']['page1Bg']['visible'] = ![];if (xr8om['prototype']['page2Bg']) xr8om['prototype']['page2Bg']['visible'] = ![];if (xr8om['prototype']['page3Bg']) xr8om['prototype']['page3Bg']['visible'] = !![];xr8om['prototype']['page1Bg']['visible'] = ![], this['main']['bg']['skin'] = this['tool']['data']['game_center_image_url'], this['main']['box_1_show']['visible'] = ![], this['main']['box_2_show']['visible'] = ![], this['main']['box_3_show']['visible'] = !![], this['sendBox'] || this['getBoxList'](0x0), this['sendBox'] = !![], lbq650a && lbq650a['syClickOpenBox']();
  }, xr8om['prototype']['getBoxList'] = function (enjsp_) {
    var o078r = this;lbq650a && lbq650a['syGetBoxList']({ 'page': enjsp_, 'count': 0xc })['then'](function (e_nsj) {
      var sv2$k_ = e_nsj['data'];sv2$k_['status'] == 0x3e9 ? sv2$k_['data'] && sv2$k_['data']['length'] && (o078r['boxlist'] = o078r['boxlist']['concat'](sv2$k_['data']), enjsp_++, o078r['getBoxList'](enjsp_)) : o078r['boxListHandler']();
    });
  }, xr8om['prototype']['copyText'] = function (lwu91f) {
    try {
      wx['setClipboardData']({ 'data': lwu91f, 'success': function (s2kv) {
          console['log']('复制成功:', s2kv);
        } });
    } catch (_skje) {}
  }, xr8om['prototype']['rolePriceHandler'] = function (fcwu9z) {
    this['rolePriceData'] = JSON['parse'](fcwu9z);switch (this['rolePriceData']['status']) {case 0x3e9:
        this['main']['box_2_lab_v_1']['text'] = (this['rolePriceData']['todayPrice'] || 0x0) + '/' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_v_2']['text'] = (this['rolePriceData']['allPrice'] || 0x0) + '/' + +this['tool']['data']['y'] + '元';break;case 0x3ea:
        break;case 0x3eb:
        break;}
  }, xr8om['prototype']['roleError'] = function () {}, xr8om['prototype']['boxListHandler'] = function () {
    var wl91fu = function (p4njd) {
      var or780 = u4z9['boxlist'][p4njd],
          psjn = new luwf19z['demoui']['BoxItemUI']();psjn['icon']['skin'] = or780['icon'], psjn['title']['text'] = or780['title'], psjn['x'] = 0xa0 * (p4njd % 0x3), psjn['y'] = 0xa0 * (p4njd / 0x3 ^ 0x0), u4z9['main']['box_3_panel']['addChild'](psjn);var cd4zpn = { 'appid': ljpd4nc['sygame']['appid'], 'game_id': or780['game_id'], 'jump_appid': or780['jump_appid'], 'jump_path': or780['jump_path'], 'tunnel_id': or780['tunnel_id'], 'uv': 0x0, 'wecha_id': ljpd4nc['sygame']['openid'] },
          c4zud = or780['preview_img'],
          n4dcz = or780['jump_type'],
          i3yg8 = or780['kf_session'];psjn['on'](Laya['Event']['CLICK'], u4z9, function () {
        lbq650a && lbq650a['syClickBox']({ 'game_id': or780['game_id'], 'tunnel_id': or780['tunnel_id'], 'jump_appid': or780['jump_appid'], 'jump_path': or780['jump_path'] })['then'](function (k2vb6) {
          if (n4dcz === '0') wx['navigateToMiniProgram']({ 'appId': cd4zpn['jump_appid'], 'path': cd4zpn['jump_path'], 'fail': function (sdpje) {
              if (!c4zud) return;wx['previewImage']({ 'urls': [c4zud] });
            } });else {
            if (n4dcz === '1') {
              if (!c4zud) return;wx['previewImage']({ 'urls': [c4zud] });
            } else {
              if (n4dcz === '2') {
                if (!i3yg8) return;wx['openCustomerServiceConversation']({ 'sessionFrom': i3yg8, 'showMessageCard': !![], 'sendMessageTitle': '', 'sendMessagePath': '', 'sendMessageImg': '' });
              }
            }
          }
        });
      });
    },
        u4z9 = this;for (var zcufw9 = 0x0; zcufw9 < this['boxlist']['length']; zcufw9++) {
      wl91fu(zcufw9);
    }
  }, xr8om['prototype']['boxListError'] = function () {}, xr8om['prototype']['boxClickHandler'] = function () {}, xr8om['prototype']['iconPress'] = function (spdjne) {
    this['donwX'] = spdjne['target']['x'], this['donwY'] = spdjne['target']['y'], this['icon']['startDrag'](this['dragRect']), this['isMove'] = ![], this['isPress'] = !![];
  }, xr8om['prototype']['iconMove'] = function (yxm8i) {
    this['isMove'] = !![];
  }, xr8om['prototype']['iconUp'] = function (_v2b$) {
    var jpesd = _v2b$['target']['x'],
        czfuw9 = _v2b$['target']['y'];this['icon']['stopDrag'](), jpesd == this['donwX'] && this['donwY'] == czfuw9 && (this['isInitBoard'] || this['initBoard'](), this['showBoard']()), this['isMove'] = ![], this['isPress'] = ![];
  }, xr8om;
}(),
    luwf19z;(function (bva5) {
  var d4cpnj;(function (ym8g3i) {
    var _2kv$b = function (sknj_e) {
      lzuf91w(wcf, sknj_e);function wcf() {
        return sknj_e['call'](this) || this;
      }return wcf['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), sknj_e['prototype']['createChildren']['call'](this), this['createView'](bva5['demoui']['BoxItemUI']['uiView']);
      }, wcf['uiView'] = { 'type': 'View', 'props': { 'width': 0xb4, 'height': 0xa0 }, 'child': [{ 'type': 'Image', 'props': { 'y': 0x3, 'x': 0x20, 'width': 0x73, 'var': 'icon', 'height': 0x73 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x79, 'x': -0x21, 'width': 0xb4, 'var': 'title', 'valign': 'middle', 'height': 0x22, 'fontSize': 0x16, 'color': '#441d1c', 'align': 'center' } }] }] }, wcf;
    }(laya['ui']['View']);ym8g3i['BoxItemUI'] = _2kv$b;
  })(d4cpnj = bva5['demoui'] || (bva5['demoui'] = {}));
})(luwf19z || (luwf19z = {})), function (u4cw) {
  var a5qo7;(function (g3tim) {
    var x807or = function (avqb) {
      lzuf91w(zw9fu1, avqb);function zw9fu1() {
        return avqb['call'](this) || this;
      }return zw9fu1['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), avqb['prototype']['createChildren']['call'](this), this['createView'](u4cw['demoui']['MainUI']['uiView']);
      }, zw9fu1['uiView'] = { 'type': 'View', 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x2ee, 'top': 0x0, 'right': 0x0, 'left': 0x0, 'height': 0x536, 'bottom': 0x0 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x2ee, 'height': 0x536, 'centerY': 0x0 }, 'child': [{ 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x2ee, 'var': 'bg', 'height': 0x536 }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x2ee, 'visible': ![], 'var': 'box_1_show', 'height': 0x536, 'centerY': 0x0 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x253, 'x': 0x2e, 'width': 0x1d0, 'var': 'box_1_lab_info', 'leading': 0xa, 'height': 0x97, 'fontSize': 0x18, 'color': '#a959ee' } }, { 'type': 'HBox', 'props': { 'y': 0x2ee, 'x': 0x14, 'width': 0x1fe, 'space': 0x35, 'height': 0x78, 'align': 'top' }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x58, 'var': 'box_1_img_1', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_1', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0xa, 'x': 0xa, 'width': 0x58, 'var': 'box_1_img_2', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_2', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x14, 'x': 0x14, 'width': 0x58, 'var': 'box_1_img_3', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_3', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x1e, 'x': 0x1e, 'width': 0x58, 'var': 'box_1_img_4', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_4', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }] }] }, { 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'visible': ![], 'var': 'box_2_show' }, 'child': [{ 'type': 'HBox', 'props': { 'y': 0x220, 'x': 0x18, 'width': 0x1f4, 'space': 0x2c, 'height': 0x56, 'align': 'top' }, 'child': [{ 'type': 'Image', 'props': { 'y': 2.5, 'x': 0x0, 'width': 0x58, 'var': 'box_2_img_1', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_1', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0xc, 'x': 0xa, 'width': 0x58, 'var': 'box_2_img_2', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_2', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x16, 'x': 0x14, 'width': 0x58, 'var': 'box_2_img_3', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_3', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x20, 'x': 0x1e, 'width': 0x58, 'var': 'box_2_img_4', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_4', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x2a, 'x': 0x28, 'width': 0x58, 'var': 'box_2_img_5', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_5', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }] }, { 'type': 'Box', 'props': { 'y': 0x384, 'x': 0x0, 'width': 0x221, 'height': 0x44 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x0, 'x': 0x28, 'width': 0x122, 'var': 'box_2_lab_m_1', 'text': '方法一\uFF1A单日充值1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300' } }, { 'type': 'Text', 'props': { 'y': 0x1e, 'x': 0x28, 'width': 0x122, 'var': 'box_2_lab_m_2', 'text': '方法一\uFF1A历史累计充值1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300' } }, { 'type': 'Text', 'props': { 'y': 0x0, 'x': 0x141, 'width': 0xa4, 'var': 'box_2_lab_v_1', 'text': '1000/1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300', 'align': 'right' } }, { 'type': 'Text', 'props': { 'y': 0x1e, 'x': 0x141, 'width': 0xa4, 'var': 'box_2_lab_v_2', 'text': '1000/1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300', 'align': 'right' } }] }, { 'type': 'Image', 'props': { 'y': 0x1aa, 'x': 0x159, 'width': 0x66, 'var': 'box_2_btn_get', 'stateNum': 0x1, 'height': 0x26 } }, { 'type': 'Image', 'props': { 'y': 0x1aa, 'x': 0x159, 'width': 0x66, 'var': 'box_2_btn_copy', 'stateNum': 0x1, 'height': 0x26 } }, { 'type': 'Button', 'props': { 'y': 0x1d2, 'x': 0x126, 'width': 0xc9, 'var': 'box_2_addclick', 'stateNum': 0x1, 'height': 0x1b } }, { 'type': 'Text', 'props': { 'y': 0x13c, 'x': 0x17a, 'width': 0xa3, 'var': 'box_2_lab_wx', 'height': 0x1f, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'left' } }] }, { 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'visible': ![], 'var': 'box_3_show' }, 'child': [{ 'type': 'Panel', 'props': { 'y': 0xf5, 'x': 0x10, 'width': 0x201, 'var': 'box_3_panel', 'vScrollBarSkin': '', 'height': 0x29e } }] }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0x0, 'width': 0xbb, 'var': 'btn_1', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0xba, 'width': 0xbb, 'var': 'btn_2', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0x177, 'width': 0xbb, 'var': 'btn_3', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x203, 'x': 0x22e, 'width': 0x25, 'var': 'btn_close', 'height': 0x8f } }, { 'type': 'Box', 'props': { 'width': 0x2ee, 'visible': ![], 'var': 'box_help', 'height': 0x536 }, 'child': [{ 'type': 'Sprite', 'props': { 'y': 0x0, 'x': 0x0, 'mouseThrough': ![], 'alpha': 0.7 }, 'child': [{ 'type': 'Rect', 'props': { 'width': 0x2ee, 'lineWidth': 0x1, 'height': 0x536, 'fillColor': '#000000' } }] }, { 'type': 'Image', 'props': { 'y': 0x158, 'x': 0x28, 'width': 0x1d2, 'var': 'box_help_bg', 'height': 0x203 }, 'child': [{ 'type': 'Button', 'props': { 'y': -0x1, 'x': 0x1a0, 'width': 0x33, 'var': 'box_help_close', 'height': 0x28 } }, { 'type': 'Image', 'props': { 'y': 0x3f, 'x': 0x98, 'width': 0xa0, 'var': 'box_help_qrcode', 'height': 0xa0 } }] }] }] }] }] }, zw9fu1;
    }(laya['ui']['View']);g3tim['MainUI'] = x807or;
  })(a5qo7 = u4cw['demoui'] || (u4cw['demoui'] = {}));
}(luwf19z || (luwf19z = {})), function (b6k2v$) {
  var v_2sk;(function (esjp) {
    var rimxo = function (_sejnk) {
      lzuf91w(sdpnj, _sejnk);function sdpnj() {
        return _sejnk['call'](this) || this;
      }return sdpnj['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), _sejnk['prototype']['createChildren']['call'](this), this['createView'](b6k2v$['demoui']['ToastUI']['uiView']);
      }, sdpnj['uiView'] = { 'type': 'View', 'props': { 'width': 0x2ee, 'height': 0x536 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x12c, 'height': 0x32, 'centerY': 0x0, 'centerX': 0x0 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x12c, 'height': 0x32, 'centerX': 0x0, 'alpha': 0.5 }, 'child': [{ 'type': 'Rect', 'props': { 'width': 0x12c, 'lineWidth': 0x1, 'height': 0x32, 'fillColor': '#382f2f' } }] }, { 'type': 'Text', 'props': { 'width': 0x12c, 'var': 'lab_msg', 'valign': 'middle', 'text': 'text', 'height': 0x32, 'fontSize': 0x18, 'color': '#ffffff', 'align': 'center' } }] }] }, sdpnj;
    }(laya['ui']['View']);esjp['ToastUI'] = rimxo;
  })(v_2sk = b6k2v$['demoui'] || (b6k2v$['demoui'] = {}));
}(luwf19z || (luwf19z = {}));var lbv$k2_ = function () {
  function qxo70r() {}return qxo70r['init'] = function () {
    !this['ui'] && (this['ui'] = new luwf19z['demoui']['ToastUI'](), this['ui']['visible'] = ![], Laya['stage']['addChild'](this['ui']));
  }, qxo70r['msg'] = function (v2_kb$) {
    var mrox = this;!this['ui'] && qxo70r['init'](), this['ui']['visible'] = !![], this['ui']['lab_msg']['text'] = v2_kb$, clearTimeout(this['interval']), this['interval'] = setTimeout(function () {
      mrox['ui']['visible'] = ![];
    }, 0x7d0);
  }, qxo70r;
}();window['minitool'] = lkvb62$;