var e = wx.$F;
var lucfzw = this && this['__extends'] || function () {
  var wful1 = function (b0a5q6, b5a6vq) {
    return wful1 = Object['setPrototypeOf'] || { '__proto__': [] } instanceof Array && function (wuc94z, xo0q7r) {
      wuc94z['__proto__'] = xo0q7r;
    } || function (git3, mtgi) {
      for (var wu9cfz in mtgi) if (mtgi['hasOwnProperty'](wu9cfz)) git3[wu9cfz] = mtgi[wu9cfz];
    }, wful1(b0a5q6, b5a6vq);
  };return function (a56qv, a76) {
    wful1(a56qv, a76);function ufz9() {
      this['constructor'] = a56qv;
    }a56qv['prototype'] = a76 === null ? Object['create'](a76) : (ufz9['prototype'] = a76['prototype'], new ufz9());
  };
}(),
    lv$_2b = window['Sygame'],
    ldzp94c = ![],
    ldz94 = function () {
  function jp4nde() {}return jp4nde['init'] = function () {
    ldzp94c ? this['sygame'] = { 'channel': '3477d2273abd484ba2a0e04ad4971b3c', 'role_id': undefined, 'openid': 'oxmOf5biumkGash-Xht9FVAlswVk', 'appid': 'wx2936121c4817bf46' } : this['sygame'] = lv$_2b;
  }, jp4nde['getTimeStamp'] = function () {
    return new Date()['getTime']();
  }, jp4nde['setResMap'] = function (s$ej_, jnsek_) {
    this['resMap'][s$ej_] = s$ej_ + '?' + jnsek_;
  }, jp4nde['getResMap'] = function (i3ym8r) {
    return this['resMap'][i3ym8r];
  }, jp4nde['resMap'] = {}, jp4nde;
}(),
    lx7o5q = function () {
  function $b62av() {
    this['getIcon'] = 'https://wx.11babay.cn/uploads/f/fkccc1532944783/5/2/c/7/60dc442c4fbc5.png', this['copyIcon'] = 'https://wx.11babay.cn/uploads/f/fkccc1532944783/3/0/1/7/60dc4409dce39.png', ldz94['init'](), this['getBoxCheckoutCode']();
  }return $b62av['prototype']['send'] = function (wfuz91, p9dc, cpz, q57a6, a$vb) {
    q57a6 === void 0x0 && (q57a6 = 'get');a$vb === void 0x0 && (a$vb = '' || null);var bvaq6 = new Laya['HttpRequest']();bvaq6['http']['timeout'] = 0x2710, bvaq6['once'](Laya['Event']['COMPLETE'], this, p9dc), bvaq6['once'](Laya['Event']['ERROR'], this, cpz), bvaq6['send'](wfuz91, a$vb, q57a6, 'text');
  }, $b62av['prototype']['postSidebarApi'] = function () {
    var or8ixm = ldz94['sygame']['openid'],
        kjn_se = '&channel=' + ldz94['sygame']['channel'] + '&wecha_id=' + or8ixm;this['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=sidebarApi' + kjn_se, this['completeHandler'], this['errorHandler']);
  }, $b62av['prototype']['getBoxCheckoutCode'] = function () {
    var z4d9u = Sygame['SY_CONF']['commitId'];this['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=getBoxCheckoutCode', this['getBoxCheckoutCodeRes'], this['errorHandler'], 'post', { 'commitId': z4d9u });
  }, $b62av['prototype']['getBoxCheckoutCodeRes'] = function (zu1w9f) {
    var zuw9f1 = JSON['parse'](zu1w9f);console['log']('getBoxCheckoutCode:', zuw9f1);if (zuw9f1['status'] == 0x3e9) {
      var bav265 = zuw9f1['info'];bav265 == 0xfa1 ? this['postSidebarApi']() : console['error']('盛也盒子\x20不显示' + zuw9f1);
    } else console['error']('盛也盒子 getBoxCheckoutCodeRes 其他错误' + zuw9f1);
  }, $b62av['prototype']['completeHandler'] = function (iy83mg) {
    var u4d9z = JSON['parse'](iy83mg);console['log'](u4d9z);switch (u4d9z['status']) {case 0x3e9:
        var ymgi8 = [];u4d9z['msg']['basics_image_url'] && ymgi8['push']({ 'url': u4d9z['msg']['basics_image_url'], 'type': Laya['Loader']['IMAGE'] }), u4d9z['msg']['public_code'] && ymgi8['push']({ 'url': u4d9z['msg']['public_code'], 'type': Laya['Loader']['IMAGE'] }), u4d9z['msg']['vip_customer_service'] && ymgi8['push']({ 'url': u4d9z['msg']['vip_customer_service'], 'type': Laya['Loader']['IMAGE'] }), u4d9z['msg']['vip_customer_service_not_add'] && ymgi8['push']({ 'url': u4d9z['msg']['vip_customer_service_not_add'], 'type': Laya['Loader']['IMAGE'] }), u4d9z['msg']['game_center_image_url'] && ymgi8['push']({ 'url': u4d9z['msg']['game_center_image_url'], 'type': Laya['Loader']['IMAGE'] }), u4d9z['msg']['vip_qrcode'] && ymgi8['push']({ 'url': u4d9z['msg']['vip_qrcode'], 'type': Laya['Loader']['IMAGE'] }), u4d9z['msg']['getIcon'] && ymgi8['push']({ 'url': this['getIcon'], 'type': Laya['Loader']['IMAGE'] }), u4d9z['msg']['copyIcon'] && ymgi8['push']({ 'url': this['copyIcon'], 'type': Laya['Loader']['IMAGE'] });for (var dcuz4 = 0x0, k2es_ = u4d9z['msg']['follow_gift_list']; dcuz4 < k2es_['length']; dcuz4++) {
          var qa65 = k2es_[dcuz4];ymgi8['push']({ 'url': qa65['url'], 'type': Laya['Loader']['IMAGE'] });
        }for (var lwuf91 = 0x0, dzpc94 = u4d9z['msg']['vip_box_list']; lwuf91 < dzpc94['length']; lwuf91++) {
          var qa65 = dzpc94[lwuf91];ymgi8['push']({ 'url': qa65['url'], 'type': Laya['Loader']['IMAGE'] });
        }for (var f9wzcu = 0x0; f9wzcu < ymgi8['length']; f9wzcu++) {
          ldz94['setResMap'](ymgi8[f9wzcu]['url'], ldz94['getTimeStamp']()), ymgi8[f9wzcu]['url'] = ldz94['getResMap'](ymgi8[f9wzcu]['url']);
        }Laya['loader']['load'](ymgi8, Laya['Handler']['create'](this, this['initGame'])), this['data'] = u4d9z['msg'];break;case 0x3ea:
        lu4zcw9['msg']('空的游戏channel');break;case 0x3eb:
        lu4zcw9['msg']('错误的游戏channel');break;case 0x3ec:
        lu4zcw9['msg']('未找到对应游戏大类');break;case 0x3ed:
        lu4zcw9['msg']('未设置侧边栏');break;}
  }, $b62av['prototype']['errorHandler'] = function (d94cpz) {}, $b62av['prototype']['initGame'] = function () {
    var xq507 = new loq7rx(this);xq507['show']();
  }, $b62av;
}(),
    loq7rx = function () {
  function e_s$j(snepj_) {
    this['page'] = 0x3, this['rolePriceData'] = {}, this['boxlist'] = [], this['donwX'] = 0x0, this['downY'] = 0x0, this['tool'] = snepj_;
  }return e_s$j['prototype']['setChildMouseThroughs'] = function (nz4dcp) {
    var u9cwzf = nz4dcp['_childs'] || [];for (var xi8mro = 0x0; xi8mro < u9cwzf['length']; xi8mro++) {
      u9cwzf[xi8mro] && (u9cwzf[xi8mro]['mouseThrough'] = !![]);
    }
  }, e_s$j['prototype']['show'] = function () {
    if (this['tool']['data']['on'] === '1') {
      this['main'] = new lcf9uzw['demoui']['MainUI'](), Laya['stage']['addChild'](this['main']), this['main']['mouseThrough'] = !![];var ejdns = this['main']['_childs'] || [];for (var uf9c = 0x0; uf9c < ejdns['length']; uf9c++) {
        ejdns[uf9c]['mouseThrough'] = !![];
      }this['setChildMouseThroughs'](this['main']['_childs']), this['setChildMouseThroughs'](this['main']['_childs'][0x0]), this['initIcon'](), this['initEvent'](), this['initView'](), lu4zcw9['init'](), this['main']['bg']['x'] = -0x2ee;
    }
  }, e_s$j['prototype']['initView'] = function () {
    var epn4dj = this,
        es_kn = this['tool']['data']['follow_down_words']['replace'](/\\n/g, '\x0a');this['main']['box_1_lab_info']['text'] = es_kn;for (var dsjn = 0x1; dsjn <= this['tool']['data']['follow_gift_list']['length']; dsjn++) {
      var yx8rmi = this['tool']['data']['follow_gift_list'][dsjn - 0x1];this['main']['box_1_img_' + dsjn]['skin'] = yx8rmi['url'], this['main']['box_1_lab_' + dsjn]['text'] = yx8rmi['name'];
    }for (var dsjn = 0x1; dsjn <= this['tool']['data']['vip_box_list']['length']; dsjn++) {
      var yx8rmi = this['tool']['data']['vip_box_list'][dsjn - 0x1];this['main']['box_2_img_' + dsjn]['skin'] = yx8rmi['url'], this['main']['box_2_lab_' + dsjn]['text'] = yx8rmi['name'];
    }this['main']['box_2_lab_m_1']['text'] = '方法一：单日充值' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_m_2']['text'] = '方法二：历史累计充值' + +this['tool']['data']['y'] + '元', this['main']['box_2_lab_v_1']['text'] = (this['rolePriceData']['todayPrice'] || 0x0) + '/' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_v_2']['text'] = (this['rolePriceData']['allPrice'] || 0x0) + '/' + +this['tool']['data']['y'] + '元', this['main']['box_2_btn_copy']['skin'] = this['tool']['copyIcon'], this['main']['box_2_btn_get']['skin'] = this['tool']['getIcon'], this['main']['box_2_btn_copy']['visible'] = ![], this['main']['box_2_btn_get']['on'](Laya['Event']['CLICK'], this, function () {
      if (epn4dj['rolePriceData']['is_vip'] == 0x0) {
        lu4zcw9['msg']('请先获取vip资格');return;
      }epn4dj['main']['box_2_lab_wx']['text'] = this['rolePriceData']['vip_wx'], epn4dj['main']['box_2_btn_copy']['visible'] = !![];
    }), this['main']['box_2_btn_copy']['on'](Laya['Event']['CLICK'], this, function () {
      epn4dj['copyText'](this['rolePriceData']['vip_wx']);
    }), this['main']['box_2_addclick']['on'](Laya['Event']['CLICK'], this, function () {
      if (epn4dj['rolePriceData']['is_vip'] == 0x0) return;this['main']['box_help_qrcode']['skin'] = epn4dj['rolePriceData']['vip_qrcode'], epn4dj['main']['box_help']['visible'] = !![];
    }), this['main']['box_help_close']['on'](Laya['Event']['CLICK'], this, function () {
      epn4dj['main']['box_help']['visible'] = ![];
    }), this['main']['box_help_bg']['skin'] = this['tool']['data']['vip_customer_service_not_add'], this['main']['box_help_qrcode']['skin'] = epn4dj['rolePriceData']['vip_qrcode'], this['main']['box_help_qrcode']['scaleX'] = 0xa0 / this['main']['box_help_qrcode']['width'], this['main']['box_help_qrcode']['scaleY'] = 0xa0 / this['main']['box_help_qrcode']['width'], this['main']['box_3_panel']['vScrollBar']['visible'] = ![], this['main']['box_3_panel']['vScrollBarSkin'] = 'common_atlas/scrollBar.png';
  }, e_s$j['prototype']['initIcon'] = function () {
    this['icon'] = new Laya['Image'](), this['icon']['skin'] = this['tool']['data']['basics_image_url'], this['icon']['x'] = 0x0, this['icon']['y'] = 0xc8, this['icon']['width'] = 0x66, this['icon']['height'] = 0x6f, this['main']['addChild'](this['icon']), this['icon']['on'](Laya['Event']['MOUSE_DOWN'], this, this['iconPress']), this['icon']['on'](Laya['Event']['MOUSE_UP'], this, this['iconUp']), this['icon']['on'](Laya['Event']['MOUSE_WHEEL'], this, this['iconMove']), this['dragRect'] = new Laya['Rectangle'](-this['icon']['width'] / 0x2, 0x0, Laya['stage']['width'], Laya['stage']['height'] - this['icon']['height'] / 0x2);
  }, e_s$j['prototype']['initEvent'] = function () {
    var e2_$k = this;this['main']['btn_1']['on'](Laya['Event']['CLICK'], this, function () {
      if (e2_$k['page'] == 0x1) return;e2_$k['page1']();
    }), this['main']['btn_2']['on'](Laya['Event']['CLICK'], this, function () {
      if (e2_$k['page'] == 0x2) return;e2_$k['page2']();
    }), this['main']['btn_3']['on'](Laya['Event']['CLICK'], this, function () {
      if (e2_$k['page'] == 0x3) return;e2_$k['page3']();
    }), this['main']['btn_close']['on'](Laya['Event']['CLICK'], this, function () {
      e2_$k['main']['bg']['x'] = -0x2ee, e2_$k['icon']['visible'] = !![];
    });
  }, e_s$j['prototype']['initBoard'] = function () {
    this['isInitBoard'] = !![], this['page1']();
  }, e_s$j['prototype']['showBoard'] = function () {
    this['main']['bg']['x'] = 0x0, this['icon']['visible'] = ![];var uwz4 = k$E['selectedServer']['server_id'],
        rym = k$E['selectedServer']['server_name'],
        ab562v = k$E['roleId'],
        epjsd = k$E['roleName'],
        _2$kse = ldz94['sygame']['openid'],
        q05 = '&role_id=' + ldz94['sygame']['role_id'] + '&channel=' + ldz94['sygame']['channel'] + '&server_id=' + uwz4 + '&server_name=' + rym + '&wecha_id=' + _2$kse + '&role_id=' + ab562v + '&role_name=' + epjsd;this['tool']['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=sidebarApiRoleId' + q05, this['rolePriceHandler']['bind'](this), this['roleError']['bind'](this));
  }, e_s$j['prototype']['page1'] = function () {
    this['page'] = 0x1;!e_s$j['prototype']['page1Bg'] && (e_s$j['prototype']['page1Bg'] = new Laya['Image'](this['tool']['data']['public_code']), this['main']['bg']['addChildAt'](e_s$j['prototype']['page1Bg'], 0x0));if (e_s$j['prototype']['page1Bg']) e_s$j['prototype']['page1Bg']['visible'] = !![];if (e_s$j['prototype']['page2Bg']) e_s$j['prototype']['page2Bg']['visible'] = ![];if (e_s$j['prototype']['page3Bg']) e_s$j['prototype']['page3Bg']['visible'] = ![];this['main']['box_1_show']['visible'] = !![], this['main']['box_2_show']['visible'] = ![], this['main']['box_3_show']['visible'] = ![];
  }, e_s$j['prototype']['page2'] = function () {
    this['page'] = 0x2;!e_s$j['prototype']['page2Bg'] && (e_s$j['prototype']['page2Bg'] = new Laya['Image'](this['tool']['data']['vip_customer_service']), this['main']['bg']['addChildAt'](e_s$j['prototype']['page2Bg'], 0x0));if (e_s$j['prototype']['page1Bg']) e_s$j['prototype']['page1Bg']['visible'] = ![];if (e_s$j['prototype']['page2Bg']) e_s$j['prototype']['page2Bg']['visible'] = !![];if (e_s$j['prototype']['page3Bg']) e_s$j['prototype']['page3Bg']['visible'] = ![];this['main']['box_1_show']['visible'] = ![], this['main']['box_2_show']['visible'] = !![], this['main']['box_3_show']['visible'] = ![];
  }, e_s$j['prototype']['page3'] = function () {
    this['page'] = 0x3;!e_s$j['prototype']['page3Bg'] && (e_s$j['prototype']['page3Bg'] = new Laya['Image'](this['tool']['data']['game_center_image_url']), this['main']['bg']['addChildAt'](e_s$j['prototype']['page3Bg'], 0x0));if (e_s$j['prototype']['page1Bg']) e_s$j['prototype']['page1Bg']['visible'] = ![];if (e_s$j['prototype']['page2Bg']) e_s$j['prototype']['page2Bg']['visible'] = ![];if (e_s$j['prototype']['page3Bg']) e_s$j['prototype']['page3Bg']['visible'] = !![];e_s$j['prototype']['page1Bg']['visible'] = ![], this['main']['bg']['skin'] = this['tool']['data']['game_center_image_url'], this['main']['box_1_show']['visible'] = ![], this['main']['box_2_show']['visible'] = ![], this['main']['box_3_show']['visible'] = !![], this['sendBox'] || this['getBoxList'](0x0), this['sendBox'] = !![], lv$_2b && lv$_2b['syClickOpenBox']();
  }, e_s$j['prototype']['getBoxList'] = function (s_njek) {
    var cdnz4p = this;lv$_2b && lv$_2b['syGetBoxList']({ 'page': s_njek, 'count': 0xc })['then'](function (ksjne) {
      var k_je$ = ksjne['data'];k_je$['status'] == 0x3e9 ? k_je$['data'] && k_je$['data']['length'] && (cdnz4p['boxlist'] = cdnz4p['boxlist']['concat'](k_je$['data']), s_njek++, cdnz4p['getBoxList'](s_njek)) : cdnz4p['boxListHandler']();
    });
  }, e_s$j['prototype']['copyText'] = function (zf1wu) {
    try {
      wx['setClipboardData']({ 'data': zf1wu, 'success': function (cn4dzp) {
          console['log']('复制成功:', cn4dzp);
        } });
    } catch (giymt) {}
  }, e_s$j['prototype']['rolePriceHandler'] = function (q0a65b) {
    this['rolePriceData'] = JSON['parse'](q0a65b);switch (this['rolePriceData']['status']) {case 0x3e9:
        this['main']['box_2_lab_v_1']['text'] = (this['rolePriceData']['todayPrice'] || 0x0) + '/' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_v_2']['text'] = (this['rolePriceData']['allPrice'] || 0x0) + '/' + +this['tool']['data']['y'] + '元';break;case 0x3ea:
        break;case 0x3eb:
        break;}
  }, e_s$j['prototype']['roleError'] = function () {}, e_s$j['prototype']['boxListHandler'] = function () {
    var qabv5 = function (kb$_) {
      var jden4p = i8m3['boxlist'][kb$_],
          lfw9u1 = new lcf9uzw['demoui']['BoxItemUI']();lfw9u1['icon']['skin'] = jden4p['icon'], lfw9u1['title']['text'] = jden4p['title'], lfw9u1['x'] = 0xa0 * (kb$_ % 0x3), lfw9u1['y'] = 0xa0 * (kb$_ / 0x3 ^ 0x0), i8m3['main']['box_3_panel']['addChild'](lfw9u1);var yi8mxr = { 'appid': ldz94['sygame']['appid'], 'game_id': jden4p['game_id'], 'jump_appid': jden4p['jump_appid'], 'jump_path': jden4p['jump_path'], 'tunnel_id': jden4p['tunnel_id'], 'uv': 0x0, 'wecha_id': ldz94['sygame']['openid'] },
          dc4npz = jden4p['preview_img'],
          k_2$vb = jden4p['jump_type'],
          p4czn = jden4p['kf_session'];lfw9u1['on'](Laya['Event']['CLICK'], i8m3, function () {
        lv$_2b && lv$_2b['syClickBox']({ 'game_id': jden4p['game_id'], 'tunnel_id': jden4p['tunnel_id'], 'jump_appid': jden4p['jump_appid'], 'jump_path': jden4p['jump_path'] })['then'](function (k_v2$) {
          if (k_2$vb === '0') wx['navigateToMiniProgram']({ 'appId': yi8mxr['jump_appid'], 'path': yi8mxr['jump_path'], 'fail': function (oxim8r) {
              if (!dc4npz) return;wx['previewImage']({ 'urls': [dc4npz] });
            } });else {
            if (k_2$vb === '1') {
              if (!dc4npz) return;wx['previewImage']({ 'urls': [dc4npz] });
            } else {
              if (k_2$vb === '2') {
                if (!p4czn) return;wx['openCustomerServiceConversation']({ 'sessionFrom': p4czn, 'showMessageCard': !![], 'sendMessageTitle': '', 'sendMessagePath': '', 'sendMessageImg': '' });
              }
            }
          }
        });
      });
    },
        i8m3 = this;for (var end4p = 0x0; end4p < this['boxlist']['length']; end4p++) {
      qabv5(end4p);
    }
  }, e_s$j['prototype']['boxListError'] = function () {}, e_s$j['prototype']['boxClickHandler'] = function () {}, e_s$j['prototype']['iconPress'] = function ($2esk) {
    this['donwX'] = $2esk['target']['x'], this['donwY'] = $2esk['target']['y'], this['icon']['startDrag'](this['dragRect']), this['isMove'] = ![], this['isPress'] = !![];
  }, e_s$j['prototype']['iconMove'] = function (yri8mx) {
    this['isMove'] = !![];
  }, e_s$j['prototype']['iconUp'] = function (o5xq70) {
    var pejsd = o5xq70['target']['x'],
        xr87o0 = o5xq70['target']['y'];this['icon']['stopDrag'](), pejsd == this['donwX'] && this['donwY'] == xr87o0 && (this['isInitBoard'] || this['initBoard'](), this['showBoard']()), this['isMove'] = ![], this['isPress'] = ![];
  }, e_s$j;
}(),
    lcf9uzw;(function (qo57x0) {
  var it3g;(function (skj_ne) {
    var _pns = function (bkv) {
      lucfzw(x7oq05, bkv);function x7oq05() {
        return bkv['call'](this) || this;
      }return x7oq05['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), bkv['prototype']['createChildren']['call'](this), this['createView'](qo57x0['demoui']['BoxItemUI']['uiView']);
      }, x7oq05['uiView'] = { 'type': 'View', 'props': { 'width': 0xb4, 'height': 0xa0 }, 'child': [{ 'type': 'Image', 'props': { 'y': 0x3, 'x': 0x20, 'width': 0x73, 'var': 'icon', 'height': 0x73 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x79, 'x': -0x21, 'width': 0xb4, 'var': 'title', 'valign': 'middle', 'height': 0x22, 'fontSize': 0x16, 'color': '#441d1c', 'align': 'center' } }] }] }, x7oq05;
    }(laya['ui']['View']);skj_ne['BoxItemUI'] = _pns;
  })(it3g = qo57x0['demoui'] || (qo57x0['demoui'] = {}));
})(lcf9uzw || (lcf9uzw = {})), function (wlu1f) {
  var pdn4zc;(function (_2$vs) {
    var w4c9z = function (w4zcu) {
      lucfzw(z4duc9, w4zcu);function z4duc9() {
        return w4zcu['call'](this) || this;
      }return z4duc9['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), w4zcu['prototype']['createChildren']['call'](this), this['createView'](wlu1f['demoui']['MainUI']['uiView']);
      }, z4duc9['uiView'] = { 'type': 'View', 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x2ee, 'top': 0x0, 'right': 0x0, 'left': 0x0, 'height': 0x536, 'bottom': 0x0 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x2ee, 'height': 0x536, 'centerY': 0x0 }, 'child': [{ 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x2ee, 'var': 'bg', 'height': 0x536 }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x2ee, 'visible': ![], 'var': 'box_1_show', 'height': 0x536, 'centerY': 0x0 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x253, 'x': 0x2e, 'width': 0x1d0, 'var': 'box_1_lab_info', 'leading': 0xa, 'height': 0x97, 'fontSize': 0x18, 'color': '#a959ee' } }, { 'type': 'HBox', 'props': { 'y': 0x2ee, 'x': 0x14, 'width': 0x1fe, 'space': 0x35, 'height': 0x78, 'align': 'top' }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x58, 'var': 'box_1_img_1', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_1', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0xa, 'x': 0xa, 'width': 0x58, 'var': 'box_1_img_2', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_2', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x14, 'x': 0x14, 'width': 0x58, 'var': 'box_1_img_3', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_3', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x1e, 'x': 0x1e, 'width': 0x58, 'var': 'box_1_img_4', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_4', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }] }] }, { 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'visible': ![], 'var': 'box_2_show' }, 'child': [{ 'type': 'HBox', 'props': { 'y': 0x220, 'x': 0x18, 'width': 0x1f4, 'space': 0x2c, 'height': 0x56, 'align': 'top' }, 'child': [{ 'type': 'Image', 'props': { 'y': 2.5, 'x': 0x0, 'width': 0x58, 'var': 'box_2_img_1', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_1', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0xc, 'x': 0xa, 'width': 0x58, 'var': 'box_2_img_2', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_2', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x16, 'x': 0x14, 'width': 0x58, 'var': 'box_2_img_3', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_3', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x20, 'x': 0x1e, 'width': 0x58, 'var': 'box_2_img_4', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_4', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x2a, 'x': 0x28, 'width': 0x58, 'var': 'box_2_img_5', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_5', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }] }, { 'type': 'Box', 'props': { 'y': 0x384, 'x': 0x0, 'width': 0x221, 'height': 0x44 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x0, 'x': 0x28, 'width': 0x122, 'var': 'box_2_lab_m_1', 'text': '方法一\uFF1A单日充值1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300' } }, { 'type': 'Text', 'props': { 'y': 0x1e, 'x': 0x28, 'width': 0x122, 'var': 'box_2_lab_m_2', 'text': '方法一\uFF1A历史累计充值1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300' } }, { 'type': 'Text', 'props': { 'y': 0x0, 'x': 0x141, 'width': 0xa4, 'var': 'box_2_lab_v_1', 'text': '1000/1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300', 'align': 'right' } }, { 'type': 'Text', 'props': { 'y': 0x1e, 'x': 0x141, 'width': 0xa4, 'var': 'box_2_lab_v_2', 'text': '1000/1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300', 'align': 'right' } }] }, { 'type': 'Image', 'props': { 'y': 0x1aa, 'x': 0x159, 'width': 0x66, 'var': 'box_2_btn_get', 'stateNum': 0x1, 'height': 0x26 } }, { 'type': 'Image', 'props': { 'y': 0x1aa, 'x': 0x159, 'width': 0x66, 'var': 'box_2_btn_copy', 'stateNum': 0x1, 'height': 0x26 } }, { 'type': 'Button', 'props': { 'y': 0x1d2, 'x': 0x126, 'width': 0xc9, 'var': 'box_2_addclick', 'stateNum': 0x1, 'height': 0x1b } }, { 'type': 'Text', 'props': { 'y': 0x13c, 'x': 0x17a, 'width': 0xa3, 'var': 'box_2_lab_wx', 'height': 0x1f, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'left' } }] }, { 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'visible': ![], 'var': 'box_3_show' }, 'child': [{ 'type': 'Panel', 'props': { 'y': 0xf5, 'x': 0x10, 'width': 0x201, 'var': 'box_3_panel', 'vScrollBarSkin': '', 'height': 0x29e } }] }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0x0, 'width': 0xbb, 'var': 'btn_1', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0xba, 'width': 0xbb, 'var': 'btn_2', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0x177, 'width': 0xbb, 'var': 'btn_3', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x203, 'x': 0x22e, 'width': 0x25, 'var': 'btn_close', 'height': 0x8f } }, { 'type': 'Box', 'props': { 'width': 0x2ee, 'visible': ![], 'var': 'box_help', 'height': 0x536 }, 'child': [{ 'type': 'Sprite', 'props': { 'y': 0x0, 'x': 0x0, 'mouseThrough': ![], 'alpha': 0.7 }, 'child': [{ 'type': 'Rect', 'props': { 'width': 0x2ee, 'lineWidth': 0x1, 'height': 0x536, 'fillColor': '#000000' } }] }, { 'type': 'Image', 'props': { 'y': 0x158, 'x': 0x28, 'width': 0x1d2, 'var': 'box_help_bg', 'height': 0x203 }, 'child': [{ 'type': 'Button', 'props': { 'y': -0x1, 'x': 0x1a0, 'width': 0x33, 'var': 'box_help_close', 'height': 0x28 } }, { 'type': 'Image', 'props': { 'y': 0x3f, 'x': 0x98, 'width': 0xa0, 'var': 'box_help_qrcode', 'height': 0xa0 } }] }] }] }] }] }, z4duc9;
    }(laya['ui']['View']);_2$vs['MainUI'] = w4c9z;
  })(pdn4zc = wlu1f['demoui'] || (wlu1f['demoui'] = {}));
}(lcf9uzw || (lcf9uzw = {})), function (edjnp4) {
  var b26v;(function (dsepj) {
    var fw19uz = function (s2ek_) {
      lucfzw(npd, s2ek_);function npd() {
        return s2ek_['call'](this) || this;
      }return npd['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), s2ek_['prototype']['createChildren']['call'](this), this['createView'](edjnp4['demoui']['ToastUI']['uiView']);
      }, npd['uiView'] = { 'type': 'View', 'props': { 'width': 0x2ee, 'height': 0x536 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x12c, 'height': 0x32, 'centerY': 0x0, 'centerX': 0x0 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x12c, 'height': 0x32, 'centerX': 0x0, 'alpha': 0.5 }, 'child': [{ 'type': 'Rect', 'props': { 'width': 0x12c, 'lineWidth': 0x1, 'height': 0x32, 'fillColor': '#382f2f' } }] }, { 'type': 'Text', 'props': { 'width': 0x12c, 'var': 'lab_msg', 'valign': 'middle', 'text': 'text', 'height': 0x32, 'fontSize': 0x18, 'color': '#ffffff', 'align': 'center' } }] }] }, npd;
    }(laya['ui']['View']);dsepj['ToastUI'] = fw19uz;
  })(b26v = edjnp4['demoui'] || (edjnp4['demoui'] = {}));
}(lcf9uzw || (lcf9uzw = {}));var lu4zcw9 = function () {
  function s2_vk() {}return s2_vk['init'] = function () {
    !this['ui'] && (this['ui'] = new lcf9uzw['demoui']['ToastUI'](), this['ui']['visible'] = ![], Laya['stage']['addChild'](this['ui']));
  }, s2_vk['msg'] = function (nspedj) {
    var u9lf1w = this;!this['ui'] && s2_vk['init'](), this['ui']['visible'] = !![], this['ui']['lab_msg']['text'] = nspedj, clearTimeout(this['interval']), this['interval'] = setTimeout(function () {
      u9lf1w['ui']['visible'] = ![];
    }, 0x7d0);
  }, s2_vk;
}();window['minitool'] = lx7o5q;