var K = wx.$S;
var sc_2 = this && this['__extends'] || function () {
  var x_c2mi = function (xnt2, dhya5$) {
    return x_c2mi = Object['setPrototypeOf'] || { '__proto__': [] } instanceof Array && function (zkvo3, ah5s) {
      zkvo3['__proto__'] = ah5s;
    } || function (sygjq, qpsyhg) {
      for (var hpsyd5 in qpsyhg) if (qpsyhg['hasOwnProperty'](hpsyd5)) sygjq[hpsyd5] = qpsyhg[hpsyd5];
    }, x_c2mi(xnt2, dhya5$);
  };return function (z90cwk, xm_i2n) {
    x_c2mi(z90cwk, xm_i2n);function e3o4() {
      this['constructor'] = z90cwk;
    }z90cwk['prototype'] = xm_i2n === null ? Object['create'](xm_i2n) : (e3o4['prototype'] = xm_i2n['prototype'], new e3o4());
  };
}(),
    sau4$e = window['Sygame'],
    shsgqpy = ![],
    syqh5ps = function () {
  function c_iw0x() {}return c_iw0x['init'] = function () {
    shsgqpy ? this['sygame'] = { 'channel': '3477d2273abd484ba2a0e04ad4971b3c', 'role_id': undefined, 'openid': 'oxmOf5biumkGash-Xht9FVAlswVk', 'appid': 'wx2936121c4817bf46' } : this['sygame'] = sau4$e;
  }, c_iw0x['getTimeStamp'] = function () {
    return new Date()['getTime']();
  }, c_iw0x['setResMap'] = function ($eau, dh5y$a) {
    this['resMap'][$eau] = $eau + '?' + dh5y$a;
  }, c_iw0x['getResMap'] = function (wzv9ok) {
    return this['resMap'][wzv9ok];
  }, c_iw0x['resMap'] = {}, c_iw0x;
}(),
    sv90wk = function () {
  function mn7t2() {
    this['getIcon'] = 'https://wx.11babay.cn/uploads/f/fkccc1532944783/5/2/c/7/60dc442c4fbc5.png', this['copyIcon'] = 'https://wx.11babay.cn/uploads/f/fkccc1532944783/3/0/1/7/60dc4409dce39.png', syqh5ps['init'](), this['getBoxCheckoutCode']();
  }return mn7t2['prototype']['send'] = function (zokr3v, vo9k3z, _xi, gqpy, s5hayd) {
    gqpy === void 0x0 && (gqpy = 'get');s5hayd === void 0x0 && (s5hayd = '' || null);var _9kw0 = new Laya['HttpRequest']();_9kw0['http']['timeout'] = 0x2710, _9kw0['once'](Laya['Event']['COMPLETE'], this, vo9k3z), _9kw0['once'](Laya['Event']['ERROR'], this, _xi), _9kw0['send'](zokr3v, s5hayd, gqpy, 'text');
  }, mn7t2['prototype']['postSidebarApi'] = function () {
    var v0zk9 = syqh5ps['sygame']['openid'],
        w0_ = '&channel=' + syqh5ps['sygame']['channel'] + '&wecha_id=' + v0zk9;this['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=sidebarApi' + w0_, this['completeHandler'], this['errorHandler']);
  }, mn7t2['prototype']['getBoxCheckoutCode'] = function () {
    var hyqs5p = Sygame['SY_CONF']['commitId'];this['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=getBoxCheckoutCode', this['getBoxCheckoutCodeRes'], this['errorHandler'], 'post', { 'commitId': hyqs5p });
  }, mn7t2['prototype']['getBoxCheckoutCodeRes'] = function (sgyqph) {
    var r3o4e = JSON['parse'](sgyqph);console['log']('getBoxCheckoutCode:', r3o4e);if (r3o4e['status'] == 0x3e9) {
      var c9k0_w = r3o4e['info'];c9k0_w == 0xfa1 ? this['postSidebarApi']() : console['error']('盛也盒子\x20不显示' + r3o4e);
    } else console['error']('盛也盒子 getBoxCheckoutCodeRes 其他错误' + r3o4e);
  }, mn7t2['prototype']['completeHandler'] = function (qgphy) {
    var r4o3u = JSON['parse'](qgphy);console['log'](r4o3u);switch (r4o3u['status']) {case 0x3e9:
        var c9zk0w = [];r4o3u['msg']['basics_image_url'] && c9zk0w['push']({ 'url': r4o3u['msg']['basics_image_url'], 'type': Laya['Loader']['IMAGE'] }), r4o3u['msg']['public_code'] && c9zk0w['push']({ 'url': r4o3u['msg']['public_code'], 'type': Laya['Loader']['IMAGE'] }), r4o3u['msg']['vip_customer_service'] && c9zk0w['push']({ 'url': r4o3u['msg']['vip_customer_service'], 'type': Laya['Loader']['IMAGE'] }), r4o3u['msg']['vip_customer_service_not_add'] && c9zk0w['push']({ 'url': r4o3u['msg']['vip_customer_service_not_add'], 'type': Laya['Loader']['IMAGE'] }), r4o3u['msg']['game_center_image_url'] && c9zk0w['push']({ 'url': r4o3u['msg']['game_center_image_url'], 'type': Laya['Loader']['IMAGE'] }), r4o3u['msg']['vip_qrcode'] && c9zk0w['push']({ 'url': r4o3u['msg']['vip_qrcode'], 'type': Laya['Loader']['IMAGE'] }), r4o3u['msg']['getIcon'] && c9zk0w['push']({ 'url': this['getIcon'], 'type': Laya['Loader']['IMAGE'] }), r4o3u['msg']['copyIcon'] && c9zk0w['push']({ 'url': this['copyIcon'], 'type': Laya['Loader']['IMAGE'] });for (var b6g8 = 0x0, eau = r4o3u['msg']['follow_gift_list']; b6g8 < eau['length']; b6g8++) {
          var qj1p = eau[b6g8];c9zk0w['push']({ 'url': qj1p['url'], 'type': Laya['Loader']['IMAGE'] });
        }for (var xn2_im = 0x0, q1jb8g = r4o3u['msg']['vip_box_list']; xn2_im < q1jb8g['length']; xn2_im++) {
          var qj1p = q1jb8g[xn2_im];c9zk0w['push']({ 'url': qj1p['url'], 'type': Laya['Loader']['IMAGE'] });
        }for (var y5$da = 0x0; y5$da < c9zk0w['length']; y5$da++) {
          syqh5ps['setResMap'](c9zk0w[y5$da]['url'], syqh5ps['getTimeStamp']()), c9zk0w[y5$da]['url'] = syqh5ps['getResMap'](c9zk0w[y5$da]['url']);
        }Laya['loader']['load'](c9zk0w, Laya['Handler']['create'](this, this['initGame'])), this['data'] = r4o3u['msg'];break;case 0x3ea:
        s$arue['msg']('空的游戏channel');break;case 0x3eb:
        s$arue['msg']('错误的游戏channel');break;case 0x3ec:
        s$arue['msg']('未找到对应游戏大类');break;case 0x3ed:
        s$arue['msg']('未设置侧边栏');break;}
  }, mn7t2['prototype']['errorHandler'] = function (o3rv) {}, mn7t2['prototype']['initGame'] = function () {
    var evor3u = new sqsgypj(this);evor3u['show']();
  }, mn7t2;
}(),
    sqsgypj = function () {
  function n2tixm(qgpjy) {
    this['page'] = 0x3, this['rolePriceData'] = {}, this['boxlist'] = [], this['donwX'] = 0x0, this['downY'] = 0x0, this['tool'] = qgpjy;
  }return n2tixm['prototype']['setChildMouseThroughs'] = function (ea5d) {
    var $ru3e4 = ea5d['_childs'] || [];for (var rveo3 = 0x0; rveo3 < $ru3e4['length']; rveo3++) {
      $ru3e4[rveo3] && ($ru3e4[rveo3]['mouseThrough'] = !![]);
    }
  }, n2tixm['prototype']['show'] = function () {
    if (this['tool']['data']['on'] === '1') {
      this['main'] = new sw90_['demoui']['MainUI'](), Laya['stage']['addChild'](this['main']), this['main']['mouseThrough'] = !![];var voz39 = this['main']['_childs'] || [];for (var de$au = 0x0; de$au < voz39['length']; de$au++) {
        voz39[de$au]['mouseThrough'] = !![];
      }this['setChildMouseThroughs'](this['main']['_childs']), this['setChildMouseThroughs'](this['main']['_childs'][0x0]), this['initIcon'](), this['initEvent'](), this['initView'](), s$arue['init'](), this['main']['bg']['x'] = -0x2ee;
    }
  }, n2tixm['prototype']['initView'] = function () {
    var yadh5$ = this,
        p5hysq = this['tool']['data']['follow_down_words']['replace'](/\\n/g, '\x0a');this['main']['box_1_lab_info']['text'] = p5hysq;for (var xcw_0 = 0x1; xcw_0 <= this['tool']['data']['follow_gift_list']['length']; xcw_0++) {
      var das5y = this['tool']['data']['follow_gift_list'][xcw_0 - 0x1];this['main']['box_1_img_' + xcw_0]['skin'] = das5y['url'], this['main']['box_1_lab_' + xcw_0]['text'] = das5y['name'];
    }for (var xcw_0 = 0x1; xcw_0 <= this['tool']['data']['vip_box_list']['length']; xcw_0++) {
      var das5y = this['tool']['data']['vip_box_list'][xcw_0 - 0x1];this['main']['box_2_img_' + xcw_0]['skin'] = das5y['url'], this['main']['box_2_lab_' + xcw_0]['text'] = das5y['name'];
    }this['main']['box_2_lab_m_1']['text'] = '方法一：单日充值' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_m_2']['text'] = '方法二：历史累计充值' + +this['tool']['data']['y'] + '元', this['main']['box_2_lab_v_1']['text'] = (this['rolePriceData']['todayPrice'] || 0x0) + '/' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_v_2']['text'] = (this['rolePriceData']['allPrice'] || 0x0) + '/' + +this['tool']['data']['y'] + '元', this['main']['box_2_btn_copy']['skin'] = this['tool']['copyIcon'], this['main']['box_2_btn_get']['skin'] = this['tool']['getIcon'], this['main']['box_2_btn_copy']['visible'] = ![], this['main']['box_2_btn_get']['on'](Laya['Event']['CLICK'], this, function () {
      if (yadh5$['rolePriceData']['is_vip'] == 0x0) {
        s$arue['msg']('请先获取vip资格');return;
      }yadh5$['main']['box_2_lab_wx']['text'] = this['rolePriceData']['vip_wx'], yadh5$['main']['box_2_btn_copy']['visible'] = !![];
    }), this['main']['box_2_btn_copy']['on'](Laya['Event']['CLICK'], this, function () {
      yadh5$['copyText'](this['rolePriceData']['vip_wx']);
    }), this['main']['box_2_addclick']['on'](Laya['Event']['CLICK'], this, function () {
      if (yadh5$['rolePriceData']['is_vip'] == 0x0) return;this['main']['box_help_qrcode']['skin'] = yadh5$['rolePriceData']['vip_qrcode'], yadh5$['main']['box_help']['visible'] = !![];
    }), this['main']['box_help_close']['on'](Laya['Event']['CLICK'], this, function () {
      yadh5$['main']['box_help']['visible'] = ![];
    }), this['main']['box_help_bg']['skin'] = this['tool']['data']['vip_customer_service_not_add'], this['main']['box_help_qrcode']['skin'] = yadh5$['rolePriceData']['vip_qrcode'], this['main']['box_help_qrcode']['scaleX'] = 0xa0 / this['main']['box_help_qrcode']['width'], this['main']['box_help_qrcode']['scaleY'] = 0xa0 / this['main']['box_help_qrcode']['width'], this['main']['box_3_panel']['vScrollBar']['visible'] = ![], this['main']['box_3_panel']['vScrollBarSkin'] = 'common_atlas/scrollBar.png';
  }, n2tixm['prototype']['initIcon'] = function () {
    this['icon'] = new Laya['Image'](), this['icon']['skin'] = this['tool']['data']['basics_image_url'], this['icon']['x'] = 0x0, this['icon']['y'] = 0xc8, this['icon']['width'] = 0x66, this['icon']['height'] = 0x6f, this['main']['addChild'](this['icon']), this['icon']['on'](Laya['Event']['MOUSE_DOWN'], this, this['iconPress']), this['icon']['on'](Laya['Event']['MOUSE_UP'], this, this['iconUp']), this['icon']['on'](Laya['Event']['MOUSE_WHEEL'], this, this['iconMove']), this['dragRect'] = new Laya['Rectangle'](-this['icon']['width'] / 0x2, 0x0, Laya['stage']['width'], Laya['stage']['height'] - this['icon']['height'] / 0x2);
  }, n2tixm['prototype']['initEvent'] = function () {
    var vzk9 = this;this['main']['btn_1']['on'](Laya['Event']['CLICK'], this, function () {
      if (vzk9['page'] == 0x1) return;vzk9['page1']();
    }), this['main']['btn_2']['on'](Laya['Event']['CLICK'], this, function () {
      if (vzk9['page'] == 0x2) return;vzk9['page2']();
    }), this['main']['btn_3']['on'](Laya['Event']['CLICK'], this, function () {
      if (vzk9['page'] == 0x3) return;vzk9['page3']();
    }), this['main']['btn_close']['on'](Laya['Event']['CLICK'], this, function () {
      vzk9['main']['bg']['x'] = -0x2ee, vzk9['icon']['visible'] = !![];
    });
  }, n2tixm['prototype']['initBoard'] = function () {
    this['isInitBoard'] = !![], this['page1']();
  }, n2tixm['prototype']['showBoard'] = function () {
    this['main']['bg']['x'] = 0x0, this['icon']['visible'] = ![];var ruv3 = s1X4['selectedServer']['server_id'],
        m2_in = s1X4['selectedServer']['server_name'],
        wz90ck = s1X4['roleId'],
        q1jspg = s1X4['roleName'],
        dyha5 = syqh5ps['sygame']['openid'],
        ureo43 = '&role_id=' + syqh5ps['sygame']['role_id'] + '&channel=' + syqh5ps['sygame']['channel'] + '&server_id=' + ruv3 + '&server_name=' + m2_in + '&wecha_id=' + dyha5 + '&role_id=' + wz90ck + '&role_name=' + q1jspg;this['tool']['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=sidebarApiRoleId' + ureo43, this['rolePriceHandler']['bind'](this), this['roleError']['bind'](this));
  }, n2tixm['prototype']['page1'] = function () {
    this['page'] = 0x1;!n2tixm['prototype']['page1Bg'] && (n2tixm['prototype']['page1Bg'] = new Laya['Image'](this['tool']['data']['public_code']), this['main']['bg']['addChildAt'](n2tixm['prototype']['page1Bg'], 0x0));if (n2tixm['prototype']['page1Bg']) n2tixm['prototype']['page1Bg']['visible'] = !![];if (n2tixm['prototype']['page2Bg']) n2tixm['prototype']['page2Bg']['visible'] = ![];if (n2tixm['prototype']['page3Bg']) n2tixm['prototype']['page3Bg']['visible'] = ![];this['main']['box_1_show']['visible'] = !![], this['main']['box_2_show']['visible'] = ![], this['main']['box_3_show']['visible'] = ![];
  }, n2tixm['prototype']['page2'] = function () {
    this['page'] = 0x2;!n2tixm['prototype']['page2Bg'] && (n2tixm['prototype']['page2Bg'] = new Laya['Image'](this['tool']['data']['vip_customer_service']), this['main']['bg']['addChildAt'](n2tixm['prototype']['page2Bg'], 0x0));if (n2tixm['prototype']['page1Bg']) n2tixm['prototype']['page1Bg']['visible'] = ![];if (n2tixm['prototype']['page2Bg']) n2tixm['prototype']['page2Bg']['visible'] = !![];if (n2tixm['prototype']['page3Bg']) n2tixm['prototype']['page3Bg']['visible'] = ![];this['main']['box_1_show']['visible'] = ![], this['main']['box_2_show']['visible'] = !![], this['main']['box_3_show']['visible'] = ![];
  }, n2tixm['prototype']['page3'] = function () {
    this['page'] = 0x3;!n2tixm['prototype']['page3Bg'] && (n2tixm['prototype']['page3Bg'] = new Laya['Image'](this['tool']['data']['game_center_image_url']), this['main']['bg']['addChildAt'](n2tixm['prototype']['page3Bg'], 0x0));if (n2tixm['prototype']['page1Bg']) n2tixm['prototype']['page1Bg']['visible'] = ![];if (n2tixm['prototype']['page2Bg']) n2tixm['prototype']['page2Bg']['visible'] = ![];if (n2tixm['prototype']['page3Bg']) n2tixm['prototype']['page3Bg']['visible'] = !![];n2tixm['prototype']['page1Bg']['visible'] = ![], this['main']['bg']['skin'] = this['tool']['data']['game_center_image_url'], this['main']['box_1_show']['visible'] = ![], this['main']['box_2_show']['visible'] = ![], this['main']['box_3_show']['visible'] = !![], this['sendBox'] || this['getBoxList'](0x0), this['sendBox'] = !![], sau4$e && sau4$e['syClickOpenBox']();
  }, n2tixm['prototype']['getBoxList'] = function (hdsa5) {
    var xn_i2m = this;sau4$e && sau4$e['syGetBoxList']({ 'page': hdsa5, 'count': 0xc })['then'](function ($ua4e) {
      var m2x_i = $ua4e['data'];m2x_i['status'] == 0x3e9 ? m2x_i['data'] && m2x_i['data']['length'] && (xn_i2m['boxlist'] = xn_i2m['boxlist']['concat'](m2x_i['data']), hdsa5++, xn_i2m['getBoxList'](hdsa5)) : xn_i2m['boxListHandler']();
    });
  }, n2tixm['prototype']['copyText'] = function (okv39z) {
    try {
      wx['setClipboardData']({ 'data': okv39z, 'success': function (y5qph) {
          console['log']('复制成功:', y5qph);
        } });
    } catch (hy5a) {}
  }, n2tixm['prototype']['rolePriceHandler'] = function (phygs) {
    this['rolePriceData'] = JSON['parse'](phygs);switch (this['rolePriceData']['status']) {case 0x3e9:
        this['main']['box_2_lab_v_1']['text'] = (this['rolePriceData']['todayPrice'] || 0x0) + '/' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_v_2']['text'] = (this['rolePriceData']['allPrice'] || 0x0) + '/' + +this['tool']['data']['y'] + '元';break;case 0x3ea:
        break;case 0x3eb:
        break;}
  }, n2tixm['prototype']['roleError'] = function () {}, n2tixm['prototype']['boxListHandler'] = function () {
    var c9_0wk = function (gsp1) {
      var kv9ozw = imnxt2['boxlist'][gsp1],
          d4eau$ = new sw90_['demoui']['BoxItemUI']();d4eau$['icon']['skin'] = kv9ozw['icon'], d4eau$['title']['text'] = kv9ozw['title'], d4eau$['x'] = 0xa0 * (gsp1 % 0x3), d4eau$['y'] = 0xa0 * (gsp1 / 0x3 ^ 0x0), imnxt2['main']['box_3_panel']['addChild'](d4eau$);var vrko3z = { 'appid': syqh5ps['sygame']['appid'], 'game_id': kv9ozw['game_id'], 'jump_appid': kv9ozw['jump_appid'], 'jump_path': kv9ozw['jump_path'], 'tunnel_id': kv9ozw['tunnel_id'], 'uv': 0x0, 'wecha_id': syqh5ps['sygame']['openid'] },
          yphd = kv9ozw['preview_img'],
          syqph5 = kv9ozw['jump_type'],
          k_wc = kv9ozw['kf_session'];d4eau$['on'](Laya['Event']['CLICK'], imnxt2, function () {
        sau4$e && sau4$e['syClickBox']({ 'game_id': kv9ozw['game_id'], 'tunnel_id': kv9ozw['tunnel_id'], 'jump_appid': kv9ozw['jump_appid'], 'jump_path': kv9ozw['jump_path'] })['then'](function (hys5) {
          if (syqph5 === '0') wx['navigateToMiniProgram']({ 'appId': vrko3z['jump_appid'], 'path': vrko3z['jump_path'], 'fail': function (i09wc) {
              if (!yphd) return;wx['previewImage']({ 'urls': [yphd] });
            } });else {
            if (syqph5 === '1') {
              if (!yphd) return;wx['previewImage']({ 'urls': [yphd] });
            } else {
              if (syqph5 === '2') {
                if (!k_wc) return;wx['openCustomerServiceConversation']({ 'sessionFrom': k_wc, 'showMessageCard': !![], 'sendMessageTitle': '', 'sendMessagePath': '', 'sendMessageImg': '' });
              }
            }
          }
        });
      });
    },
        imnxt2 = this;for (var vz0wk9 = 0x0; vz0wk9 < this['boxlist']['length']; vz0wk9++) {
      c9_0wk(vz0wk9);
    }
  }, n2tixm['prototype']['boxListError'] = function () {}, n2tixm['prototype']['boxClickHandler'] = function () {}, n2tixm['prototype']['iconPress'] = function (yda5hs) {
    this['donwX'] = yda5hs['target']['x'], this['donwY'] = yda5hs['target']['y'], this['icon']['startDrag'](this['dragRect']), this['isMove'] = ![], this['isPress'] = !![];
  }, n2tixm['prototype']['iconMove'] = function (syjpgq) {
    this['isMove'] = !![];
  }, n2tixm['prototype']['iconUp'] = function (j1gpsq) {
    var a5syh = j1gpsq['target']['x'],
        e4$au = j1gpsq['target']['y'];this['icon']['stopDrag'](), a5syh == this['donwX'] && this['donwY'] == e4$au && (this['isInitBoard'] || this['initBoard'](), this['showBoard']()), this['isMove'] = ![], this['isPress'] = ![];
  }, n2tixm;
}(),
    sw90_;(function (sygpj) {
  var $4a5dh;(function (zc0wk) {
    var r3veo = function (b1g6j) {
      sc_2(pj1q, b1g6j);function pj1q() {
        return b1g6j['call'](this) || this;
      }return pj1q['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), b1g6j['prototype']['createChildren']['call'](this), this['createView'](sygpj['demoui']['BoxItemUI']['uiView']);
      }, pj1q['uiView'] = { 'type': 'View', 'props': { 'width': 0xb4, 'height': 0xa0 }, 'child': [{ 'type': 'Image', 'props': { 'y': 0x3, 'x': 0x20, 'width': 0x73, 'var': 'icon', 'height': 0x73 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x79, 'x': -0x21, 'width': 0xb4, 'var': 'title', 'valign': 'middle', 'height': 0x22, 'fontSize': 0x16, 'color': '#441d1c', 'align': 'center' } }] }] }, pj1q;
    }(laya['ui']['View']);zc0wk['BoxItemUI'] = r3veo;
  })($4a5dh = sygpj['demoui'] || (sygpj['demoui'] = {}));
})(sw90_ || (sw90_ = {})), function (uer3vo) {
  var q8;(function (im2_cx) {
    var jgq1sp = function (qspgyj) {
      sc_2(bj68l1, qspgyj);function bj68l1() {
        return qspgyj['call'](this) || this;
      }return bj68l1['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), qspgyj['prototype']['createChildren']['call'](this), this['createView'](uer3vo['demoui']['MainUI']['uiView']);
      }, bj68l1['uiView'] = { 'type': 'View', 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x2ee, 'top': 0x0, 'right': 0x0, 'left': 0x0, 'height': 0x536, 'bottom': 0x0 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x2ee, 'height': 0x536, 'centerY': 0x0 }, 'child': [{ 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x2ee, 'var': 'bg', 'height': 0x536 }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x2ee, 'visible': ![], 'var': 'box_1_show', 'height': 0x536, 'centerY': 0x0 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x253, 'x': 0x2e, 'width': 0x1d0, 'var': 'box_1_lab_info', 'leading': 0xa, 'height': 0x97, 'fontSize': 0x18, 'color': '#a959ee' } }, { 'type': 'HBox', 'props': { 'y': 0x2ee, 'x': 0x14, 'width': 0x1fe, 'space': 0x35, 'height': 0x78, 'align': 'top' }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x58, 'var': 'box_1_img_1', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_1', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0xa, 'x': 0xa, 'width': 0x58, 'var': 'box_1_img_2', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_2', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x14, 'x': 0x14, 'width': 0x58, 'var': 'box_1_img_3', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_3', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x1e, 'x': 0x1e, 'width': 0x58, 'var': 'box_1_img_4', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_4', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }] }] }, { 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'visible': ![], 'var': 'box_2_show' }, 'child': [{ 'type': 'HBox', 'props': { 'y': 0x220, 'x': 0x18, 'width': 0x1f4, 'space': 0x2c, 'height': 0x56, 'align': 'top' }, 'child': [{ 'type': 'Image', 'props': { 'y': 2.5, 'x': 0x0, 'width': 0x58, 'var': 'box_2_img_1', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_1', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0xc, 'x': 0xa, 'width': 0x58, 'var': 'box_2_img_2', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_2', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x16, 'x': 0x14, 'width': 0x58, 'var': 'box_2_img_3', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_3', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x20, 'x': 0x1e, 'width': 0x58, 'var': 'box_2_img_4', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_4', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x2a, 'x': 0x28, 'width': 0x58, 'var': 'box_2_img_5', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_5', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }] }, { 'type': 'Box', 'props': { 'y': 0x384, 'x': 0x0, 'width': 0x221, 'height': 0x44 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x0, 'x': 0x28, 'width': 0x122, 'var': 'box_2_lab_m_1', 'text': '方法一\uFF1A单日充值1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300' } }, { 'type': 'Text', 'props': { 'y': 0x1e, 'x': 0x28, 'width': 0x122, 'var': 'box_2_lab_m_2', 'text': '方法一\uFF1A历史累计充值1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300' } }, { 'type': 'Text', 'props': { 'y': 0x0, 'x': 0x141, 'width': 0xa4, 'var': 'box_2_lab_v_1', 'text': '1000/1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300', 'align': 'right' } }, { 'type': 'Text', 'props': { 'y': 0x1e, 'x': 0x141, 'width': 0xa4, 'var': 'box_2_lab_v_2', 'text': '1000/1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300', 'align': 'right' } }] }, { 'type': 'Image', 'props': { 'y': 0x1aa, 'x': 0x159, 'width': 0x66, 'var': 'box_2_btn_get', 'stateNum': 0x1, 'height': 0x26 } }, { 'type': 'Image', 'props': { 'y': 0x1aa, 'x': 0x159, 'width': 0x66, 'var': 'box_2_btn_copy', 'stateNum': 0x1, 'height': 0x26 } }, { 'type': 'Button', 'props': { 'y': 0x1d2, 'x': 0x126, 'width': 0xc9, 'var': 'box_2_addclick', 'stateNum': 0x1, 'height': 0x1b } }, { 'type': 'Text', 'props': { 'y': 0x13c, 'x': 0x17a, 'width': 0xa3, 'var': 'box_2_lab_wx', 'height': 0x1f, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'left' } }] }, { 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'visible': ![], 'var': 'box_3_show' }, 'child': [{ 'type': 'Panel', 'props': { 'y': 0xf5, 'x': 0x10, 'width': 0x201, 'var': 'box_3_panel', 'vScrollBarSkin': '', 'height': 0x29e } }] }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0x0, 'width': 0xbb, 'var': 'btn_1', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0xba, 'width': 0xbb, 'var': 'btn_2', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0x177, 'width': 0xbb, 'var': 'btn_3', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x203, 'x': 0x22e, 'width': 0x25, 'var': 'btn_close', 'height': 0x8f } }, { 'type': 'Box', 'props': { 'width': 0x2ee, 'visible': ![], 'var': 'box_help', 'height': 0x536 }, 'child': [{ 'type': 'Sprite', 'props': { 'y': 0x0, 'x': 0x0, 'mouseThrough': ![], 'alpha': 0.7 }, 'child': [{ 'type': 'Rect', 'props': { 'width': 0x2ee, 'lineWidth': 0x1, 'height': 0x536, 'fillColor': '#000000' } }] }, { 'type': 'Image', 'props': { 'y': 0x158, 'x': 0x28, 'width': 0x1d2, 'var': 'box_help_bg', 'height': 0x203 }, 'child': [{ 'type': 'Button', 'props': { 'y': -0x1, 'x': 0x1a0, 'width': 0x33, 'var': 'box_help_close', 'height': 0x28 } }, { 'type': 'Image', 'props': { 'y': 0x3f, 'x': 0x98, 'width': 0xa0, 'var': 'box_help_qrcode', 'height': 0xa0 } }] }] }] }] }] }, bj68l1;
    }(laya['ui']['View']);im2_cx['MainUI'] = jgq1sp;
  })(q8 = uer3vo['demoui'] || (uer3vo['demoui'] = {}));
}(sw90_ || (sw90_ = {})), function (m_2ni) {
  var bj8q;(function (kvowz) {
    var d45ah = function (dsyph5) {
      sc_2(k3zro, dsyph5);function k3zro() {
        return dsyph5['call'](this) || this;
      }return k3zro['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), dsyph5['prototype']['createChildren']['call'](this), this['createView'](m_2ni['demoui']['ToastUI']['uiView']);
      }, k3zro['uiView'] = { 'type': 'View', 'props': { 'width': 0x2ee, 'height': 0x536 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x12c, 'height': 0x32, 'centerY': 0x0, 'centerX': 0x0 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x12c, 'height': 0x32, 'centerX': 0x0, 'alpha': 0.5 }, 'child': [{ 'type': 'Rect', 'props': { 'width': 0x12c, 'lineWidth': 0x1, 'height': 0x32, 'fillColor': '#382f2f' } }] }, { 'type': 'Text', 'props': { 'width': 0x12c, 'var': 'lab_msg', 'valign': 'middle', 'text': 'text', 'height': 0x32, 'fontSize': 0x18, 'color': '#ffffff', 'align': 'center' } }] }] }, k3zro;
    }(laya['ui']['View']);kvowz['ToastUI'] = d45ah;
  })(bj8q = m_2ni['demoui'] || (m_2ni['demoui'] = {}));
}(sw90_ || (sw90_ = {}));var s$arue = function () {
  function zkvr() {}return zkvr['init'] = function () {
    !this['ui'] && (this['ui'] = new sw90_['demoui']['ToastUI'](), this['ui']['visible'] = ![], Laya['stage']['addChild'](this['ui']));
  }, zkvr['msg'] = function (hpsd) {
    var j8q1b = this;!this['ui'] && zkvr['init'](), this['ui']['visible'] = !![], this['ui']['lab_msg']['text'] = hpsd, clearTimeout(this['interval']), this['interval'] = setTimeout(function () {
      j8q1b['ui']['visible'] = ![];
    }, 0x7d0);
  }, zkvr;
}();window['minitool'] = sv90wk;