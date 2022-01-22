var k = wx.$f;
var fr8enzx = this && this['__extends'] || function () {
  var xzwen8 = function (vb91gu, xznwse) {
    return xzwen8 = Object['setPrototypeOf'] || { '__proto__': [] } instanceof Array && function (wsojcd, tfbvim) {
      wsojcd['__proto__'] = tfbvim;
    } || function (h0kt5q, jsdnxw) {
      for (var e8nrx in jsdnxw) if (jsdnxw['hasOwnProperty'](e8nrx)) h0kt5q[e8nrx] = jsdnxw[e8nrx];
    }, xzwen8(vb91gu, xznwse);
  };return function (yp$3a7, xsnw) {
    xzwen8(yp$3a7, xsnw);function _q50hk() {
      this['constructor'] = yp$3a7;
    }yp$3a7['prototype'] = xsnw === null ? Object['create'](xsnw) : (_q50hk['prototype'] = xsnw['prototype'], new _q50hk());
  };
}(),
    fcjnwsd = window['Sygame'],
    fo_k64 = ![],
    f$r83 = function () {
  function wzenx() {}return wzenx['init'] = function () {
    fo_k64 ? this['sygame'] = { 'channel': '3477d2273abd484ba2a0e04ad4971b3c', 'role_id': undefined, 'openid': 'oxmOf5biumkGash-Xht9FVAlswVk', 'appid': 'wx2936121c4817bf46' } : this['sygame'] = fcjnwsd;
  }, wzenx['getTimeStamp'] = function () {
    return new Date()['getTime']();
  }, wzenx['setResMap'] = function (r738$z, fumibv) {
    this['resMap'][r738$z] = r738$z + '?' + fumibv;
  }, wzenx['getResMap'] = function (cod) {
    return this['resMap'][cod];
  }, wzenx['resMap'] = {}, wzenx;
}(),
    fdjo6 = function () {
  function vbmtf() {
    this['getIcon'] = 'https://wx.11babay.cn/uploads/f/fkccc1532944783/5/2/c/7/60dc442c4fbc5.png', this['copyIcon'] = 'https://wx.11babay.cn/uploads/f/fkccc1532944783/3/0/1/7/60dc4409dce39.png', f$r83['init'](), this['getBoxCheckoutCode']();
  }return vbmtf['prototype']['send'] = function (vmb1ui, dsj, $er7z, zex8n, mht0fi) {
    zex8n === void 0x0 && (zex8n = 'get');mht0fi === void 0x0 && (mht0fi = '' || null);var c62j4 = new Laya['HttpRequest']();c62j4['http']['timeout'] = 0x2710, c62j4['once'](Laya['Event']['COMPLETE'], this, dsj), c62j4['once'](Laya['Event']['ERROR'], this, $er7z), c62j4['send'](vmb1ui, mht0fi, zex8n, 'text');
  }, vbmtf['prototype']['postSidebarApi'] = function () {
    var _h5k = f$r83['sygame']['openid'],
        ap7y3 = '&channel=' + f$r83['sygame']['channel'] + '&wecha_id=' + _h5k;this['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=sidebarApi' + ap7y3, this['completeHandler'], this['errorHandler']);
  }, vbmtf['prototype']['getBoxCheckoutCode'] = function () {
    var y7pa$3 = Sygame['SY_CONF']['commitId'];this['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=getBoxCheckoutCode', this['getBoxCheckoutCodeRes'], this['errorHandler'], 'post', { 'commitId': y7pa$3 });
  }, vbmtf['prototype']['getBoxCheckoutCodeRes'] = function (sjcdwn) {
    var bvmitf = JSON['parse'](sjcdwn);console['log']('getBoxCheckoutCode:', bvmitf);if (bvmitf['status'] == 0x3e9) {
      var q_k405 = bvmitf['info'];q_k405 == 0xfa1 ? this['postSidebarApi']() : console['error']('盛也盒子\x20不显示' + bvmitf);
    } else console['error']('盛也盒子 getBoxCheckoutCodeRes 其他错误' + bvmitf);
  }, vbmtf['prototype']['completeHandler'] = function (e8rxz) {
    var ok42 = JSON['parse'](e8rxz);console['log'](ok42);switch (ok42['status']) {case 0x3e9:
        var j62c4o = [];ok42['msg']['basics_image_url'] && j62c4o['push']({ 'url': ok42['msg']['basics_image_url'], 'type': Laya['Loader']['IMAGE'] }), ok42['msg']['public_code'] && j62c4o['push']({ 'url': ok42['msg']['public_code'], 'type': Laya['Loader']['IMAGE'] }), ok42['msg']['vip_customer_service'] && j62c4o['push']({ 'url': ok42['msg']['vip_customer_service'], 'type': Laya['Loader']['IMAGE'] }), ok42['msg']['vip_customer_service_not_add'] && j62c4o['push']({ 'url': ok42['msg']['vip_customer_service_not_add'], 'type': Laya['Loader']['IMAGE'] }), ok42['msg']['game_center_image_url'] && j62c4o['push']({ 'url': ok42['msg']['game_center_image_url'], 'type': Laya['Loader']['IMAGE'] }), ok42['msg']['vip_qrcode'] && j62c4o['push']({ 'url': ok42['msg']['vip_qrcode'], 'type': Laya['Loader']['IMAGE'] }), ok42['msg']['getIcon'] && j62c4o['push']({ 'url': this['getIcon'], 'type': Laya['Loader']['IMAGE'] }), ok42['msg']['copyIcon'] && j62c4o['push']({ 'url': this['copyIcon'], 'type': Laya['Loader']['IMAGE'] });for (var wdjsco = 0x0, o624jc = ok42['msg']['follow_gift_list']; wdjsco < o624jc['length']; wdjsco++) {
          var uvi1b = o624jc[wdjsco];j62c4o['push']({ 'url': uvi1b['url'], 'type': Laya['Loader']['IMAGE'] });
        }for (var _2o = 0x0, mihbf = ok42['msg']['vip_box_list']; _2o < mihbf['length']; _2o++) {
          var uvi1b = mihbf[_2o];j62c4o['push']({ 'url': uvi1b['url'], 'type': Laya['Loader']['IMAGE'] });
        }for (var csjowd = 0x0; csjowd < j62c4o['length']; csjowd++) {
          f$r83['setResMap'](j62c4o[csjowd]['url'], f$r83['getTimeStamp']()), j62c4o[csjowd]['url'] = f$r83['getResMap'](j62c4o[csjowd]['url']);
        }Laya['loader']['load'](j62c4o, Laya['Handler']['create'](this, this['initGame'])), this['data'] = ok42['msg'];break;case 0x3ea:
        fco2j6['msg']('空的游戏channel');break;case 0x3eb:
        fco2j6['msg']('错误的游戏channel');break;case 0x3ec:
        fco2j6['msg']('未找到对应游戏大类');break;case 0x3ed:
        fco2j6['msg']('未设置侧边栏');break;}
  }, vbmtf['prototype']['errorHandler'] = function (z8e$7r) {}, vbmtf['prototype']['initGame'] = function () {
    var cwds = new fxnr8ez(this);cwds['show']();
  }, vbmtf;
}(),
    fxnr8ez = function () {
  function t0hf5q(bu1gv9) {
    this['page'] = 0x3, this['rolePriceData'] = {}, this['boxlist'] = [], this['donwX'] = 0x0, this['downY'] = 0x0, this['tool'] = bu1gv9;
  }return t0hf5q['prototype']['setChildMouseThroughs'] = function (_c26o4) {
    var bifumv = _c26o4['_childs'] || [];for (var h0_qk = 0x0; h0_qk < bifumv['length']; h0_qk++) {
      bifumv[h0_qk] && (bifumv[h0_qk]['mouseThrough'] = !![]);
    }
  }, t0hf5q['prototype']['show'] = function () {
    if (this['tool']['data']['on'] === '1') {
      this['main'] = new fzer$8['demoui']['MainUI'](), Laya['stage']['addChild'](this['main']), this['main']['mouseThrough'] = !![];var ifbv = this['main']['_childs'] || [];for (var d2oj = 0x0; d2oj < ifbv['length']; d2oj++) {
        ifbv[d2oj]['mouseThrough'] = !![];
      }this['setChildMouseThroughs'](this['main']['_childs']), this['setChildMouseThroughs'](this['main']['_childs'][0x0]), this['initIcon'](), this['initEvent'](), this['initView'](), fco2j6['init'](), this['main']['bg']['x'] = -0x2ee;
    }
  }, t0hf5q['prototype']['initView'] = function () {
    var ko4_6 = this,
        ezw = this['tool']['data']['follow_down_words']['replace'](/\\n/g, '\x0a');this['main']['box_1_lab_info']['text'] = ezw;for (var _54k62 = 0x1; _54k62 <= this['tool']['data']['follow_gift_list']['length']; _54k62++) {
      var ya7$p3 = this['tool']['data']['follow_gift_list'][_54k62 - 0x1];this['main']['box_1_img_' + _54k62]['skin'] = ya7$p3['url'], this['main']['box_1_lab_' + _54k62]['text'] = ya7$p3['name'];
    }for (var _54k62 = 0x1; _54k62 <= this['tool']['data']['vip_box_list']['length']; _54k62++) {
      var ya7$p3 = this['tool']['data']['vip_box_list'][_54k62 - 0x1];this['main']['box_2_img_' + _54k62]['skin'] = ya7$p3['url'], this['main']['box_2_lab_' + _54k62]['text'] = ya7$p3['name'];
    }this['main']['box_2_lab_m_1']['text'] = '方法一：单日充值' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_m_2']['text'] = '方法二：历史累计充值' + +this['tool']['data']['y'] + '元', this['main']['box_2_lab_v_1']['text'] = (this['rolePriceData']['todayPrice'] || 0x0) + '/' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_v_2']['text'] = (this['rolePriceData']['allPrice'] || 0x0) + '/' + +this['tool']['data']['y'] + '元', this['main']['box_2_btn_copy']['skin'] = this['tool']['copyIcon'], this['main']['box_2_btn_get']['skin'] = this['tool']['getIcon'], this['main']['box_2_btn_copy']['visible'] = ![], this['main']['box_2_btn_get']['on'](Laya['Event']['CLICK'], this, function () {
      if (ko4_6['rolePriceData']['is_vip'] == 0x0) {
        fco2j6['msg']('请先获取vip资格');return;
      }ko4_6['main']['box_2_lab_wx']['text'] = this['rolePriceData']['vip_wx'], ko4_6['main']['box_2_btn_copy']['visible'] = !![];
    }), this['main']['box_2_btn_copy']['on'](Laya['Event']['CLICK'], this, function () {
      ko4_6['copyText'](this['rolePriceData']['vip_wx']);
    }), this['main']['box_2_addclick']['on'](Laya['Event']['CLICK'], this, function () {
      if (ko4_6['rolePriceData']['is_vip'] == 0x0) return;this['main']['box_help_qrcode']['skin'] = ko4_6['rolePriceData']['vip_qrcode'], ko4_6['main']['box_help']['visible'] = !![];
    }), this['main']['box_help_close']['on'](Laya['Event']['CLICK'], this, function () {
      ko4_6['main']['box_help']['visible'] = ![];
    }), this['main']['box_help_bg']['skin'] = this['tool']['data']['vip_customer_service_not_add'], this['main']['box_help_qrcode']['skin'] = ko4_6['rolePriceData']['vip_qrcode'], this['main']['box_help_qrcode']['scaleX'] = 0xa0 / this['main']['box_help_qrcode']['width'], this['main']['box_help_qrcode']['scaleY'] = 0xa0 / this['main']['box_help_qrcode']['width'], this['main']['box_3_panel']['vScrollBar']['visible'] = ![], this['main']['box_3_panel']['vScrollBarSkin'] = 'common_atlas/scrollBar.png';
  }, t0hf5q['prototype']['initIcon'] = function () {
    this['icon'] = new Laya['Image'](), this['icon']['skin'] = this['tool']['data']['basics_image_url'], this['icon']['x'] = 0x0, this['icon']['y'] = 0xc8, this['icon']['width'] = 0x66, this['icon']['height'] = 0x6f, this['main']['addChild'](this['icon']), this['icon']['on'](Laya['Event']['MOUSE_DOWN'], this, this['iconPress']), this['icon']['on'](Laya['Event']['MOUSE_UP'], this, this['iconUp']), this['icon']['on'](Laya['Event']['MOUSE_WHEEL'], this, this['iconMove']), this['dragRect'] = new Laya['Rectangle'](-this['icon']['width'] / 0x2, 0x0, Laya['stage']['width'], Laya['stage']['height'] - this['icon']['height'] / 0x2);
  }, t0hf5q['prototype']['initEvent'] = function () {
    var wcojds = this;this['main']['btn_1']['on'](Laya['Event']['CLICK'], this, function () {
      if (wcojds['page'] == 0x1) return;wcojds['page1']();
    }), this['main']['btn_2']['on'](Laya['Event']['CLICK'], this, function () {
      if (wcojds['page'] == 0x2) return;wcojds['page2']();
    }), this['main']['btn_3']['on'](Laya['Event']['CLICK'], this, function () {
      if (wcojds['page'] == 0x3) return;wcojds['page3']();
    }), this['main']['btn_close']['on'](Laya['Event']['CLICK'], this, function () {
      wcojds['main']['bg']['x'] = -0x2ee, wcojds['icon']['visible'] = !![];
    });
  }, t0hf5q['prototype']['initBoard'] = function () {
    this['isInitBoard'] = !![], this['page1']();
  }, t0hf5q['prototype']['showBoard'] = function () {
    this['main']['bg']['x'] = 0x0, this['icon']['visible'] = ![];var dsxe = F$L6['selectedServer']['server_id'],
        a3y = F$L6['selectedServer']['server_name'],
        y8r$3 = F$L6['roleId'],
        hitfmb = F$L6['roleName'],
        d26cjo = f$r83['sygame']['openid'],
        zsxwn = '&role_id=' + f$r83['sygame']['role_id'] + '&channel=' + f$r83['sygame']['channel'] + '&server_id=' + dsxe + '&server_name=' + a3y + '&wecha_id=' + d26cjo + '&role_id=' + y8r$3 + '&role_name=' + hitfmb;this['tool']['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=sidebarApiRoleId' + zsxwn, this['rolePriceHandler']['bind'](this), this['roleError']['bind'](this));
  }, t0hf5q['prototype']['page1'] = function () {
    this['page'] = 0x1;!t0hf5q['prototype']['page1Bg'] && (t0hf5q['prototype']['page1Bg'] = new Laya['Image'](this['tool']['data']['public_code']), this['main']['bg']['addChildAt'](t0hf5q['prototype']['page1Bg'], 0x0));if (t0hf5q['prototype']['page1Bg']) t0hf5q['prototype']['page1Bg']['visible'] = !![];if (t0hf5q['prototype']['page2Bg']) t0hf5q['prototype']['page2Bg']['visible'] = ![];if (t0hf5q['prototype']['page3Bg']) t0hf5q['prototype']['page3Bg']['visible'] = ![];this['main']['box_1_show']['visible'] = !![], this['main']['box_2_show']['visible'] = ![], this['main']['box_3_show']['visible'] = ![];
  }, t0hf5q['prototype']['page2'] = function () {
    this['page'] = 0x2;!t0hf5q['prototype']['page2Bg'] && (t0hf5q['prototype']['page2Bg'] = new Laya['Image'](this['tool']['data']['vip_customer_service']), this['main']['bg']['addChildAt'](t0hf5q['prototype']['page2Bg'], 0x0));if (t0hf5q['prototype']['page1Bg']) t0hf5q['prototype']['page1Bg']['visible'] = ![];if (t0hf5q['prototype']['page2Bg']) t0hf5q['prototype']['page2Bg']['visible'] = !![];if (t0hf5q['prototype']['page3Bg']) t0hf5q['prototype']['page3Bg']['visible'] = ![];this['main']['box_1_show']['visible'] = ![], this['main']['box_2_show']['visible'] = !![], this['main']['box_3_show']['visible'] = ![];
  }, t0hf5q['prototype']['page3'] = function () {
    this['page'] = 0x3;!t0hf5q['prototype']['page3Bg'] && (t0hf5q['prototype']['page3Bg'] = new Laya['Image'](this['tool']['data']['game_center_image_url']), this['main']['bg']['addChildAt'](t0hf5q['prototype']['page3Bg'], 0x0));if (t0hf5q['prototype']['page1Bg']) t0hf5q['prototype']['page1Bg']['visible'] = ![];if (t0hf5q['prototype']['page2Bg']) t0hf5q['prototype']['page2Bg']['visible'] = ![];if (t0hf5q['prototype']['page3Bg']) t0hf5q['prototype']['page3Bg']['visible'] = !![];t0hf5q['prototype']['page1Bg']['visible'] = ![], this['main']['bg']['skin'] = this['tool']['data']['game_center_image_url'], this['main']['box_1_show']['visible'] = ![], this['main']['box_2_show']['visible'] = ![], this['main']['box_3_show']['visible'] = !![], this['sendBox'] || this['getBoxList'](0x0), this['sendBox'] = !![], fcjnwsd && fcjnwsd['syClickOpenBox']();
  }, t0hf5q['prototype']['getBoxList'] = function (mhftib) {
    var ftvbim = this;fcjnwsd && fcjnwsd['syGetBoxList']({ 'page': mhftib, 'count': 0xc })['then'](function (zxnews) {
      var ubivmf = zxnews['data'];ubivmf['status'] == 0x3e9 ? ubivmf['data'] && ubivmf['data']['length'] && (ftvbim['boxlist'] = ftvbim['boxlist']['concat'](ubivmf['data']), mhftib++, ftvbim['getBoxList'](mhftib)) : ftvbim['boxListHandler']();
    });
  }, t0hf5q['prototype']['copyText'] = function (wzsex) {
    try {
      wx['setClipboardData']({ 'data': wzsex, 'success': function (fmiv) {
          console['log']('复制成功:', fmiv);
        } });
    } catch (oc6dj2) {}
  }, t0hf5q['prototype']['rolePriceHandler'] = function (xnez8w) {
    this['rolePriceData'] = JSON['parse'](xnez8w);switch (this['rolePriceData']['status']) {case 0x3e9:
        this['main']['box_2_lab_v_1']['text'] = (this['rolePriceData']['todayPrice'] || 0x0) + '/' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_v_2']['text'] = (this['rolePriceData']['allPrice'] || 0x0) + '/' + +this['tool']['data']['y'] + '元';break;case 0x3ea:
        break;case 0x3eb:
        break;}
  }, t0hf5q['prototype']['roleError'] = function () {}, t0hf5q['prototype']['boxListHandler'] = function () {
    var y37pa$ = function (xzner8) {
      var g9b1uv = x8z['boxlist'][xzner8],
          k5q4 = new fzer$8['demoui']['BoxItemUI']();k5q4['icon']['skin'] = g9b1uv['icon'], k5q4['title']['text'] = g9b1uv['title'], k5q4['x'] = 0xa0 * (xzner8 % 0x3), k5q4['y'] = 0xa0 * (xzner8 / 0x3 ^ 0x0), x8z['main']['box_3_panel']['addChild'](k5q4);var y73$r = { 'appid': f$r83['sygame']['appid'], 'game_id': g9b1uv['game_id'], 'jump_appid': g9b1uv['jump_appid'], 'jump_path': g9b1uv['jump_path'], 'tunnel_id': g9b1uv['tunnel_id'], 'uv': 0x0, 'wecha_id': f$r83['sygame']['openid'] },
          zsxne = g9b1uv['preview_img'],
          hqkt0 = g9b1uv['jump_type'],
          _5k2q4 = g9b1uv['kf_session'];k5q4['on'](Laya['Event']['CLICK'], x8z, function () {
        fcjnwsd && fcjnwsd['syClickBox']({ 'game_id': g9b1uv['game_id'], 'tunnel_id': g9b1uv['tunnel_id'], 'jump_appid': g9b1uv['jump_appid'], 'jump_path': g9b1uv['jump_path'] })['then'](function (u1ibv9) {
          if (hqkt0 === '0') wx['navigateToMiniProgram']({ 'appId': y73$r['jump_appid'], 'path': y73$r['jump_path'], 'fail': function (k246o_) {
              if (!zsxne) return;wx['previewImage']({ 'urls': [zsxne] });
            } });else {
            if (hqkt0 === '1') {
              if (!zsxne) return;wx['previewImage']({ 'urls': [zsxne] });
            } else {
              if (hqkt0 === '2') {
                if (!_5k2q4) return;wx['openCustomerServiceConversation']({ 'sessionFrom': _5k2q4, 'showMessageCard': !![], 'sendMessageTitle': '', 'sendMessagePath': '', 'sendMessageImg': '' });
              }
            }
          }
        });
      });
    },
        x8z = this;for (var a$p7 = 0x0; a$p7 < this['boxlist']['length']; a$p7++) {
      y37pa$(a$p7);
    }
  }, t0hf5q['prototype']['boxListError'] = function () {}, t0hf5q['prototype']['boxClickHandler'] = function () {}, t0hf5q['prototype']['iconPress'] = function (osj6) {
    this['donwX'] = osj6['target']['x'], this['donwY'] = osj6['target']['y'], this['icon']['startDrag'](this['dragRect']), this['isMove'] = ![], this['isPress'] = !![];
  }, t0hf5q['prototype']['iconMove'] = function (tbmfv) {
    this['isMove'] = !![];
  }, t0hf5q['prototype']['iconUp'] = function (wjns) {
    var $8r73z = wjns['target']['x'],
        b9gv1u = wjns['target']['y'];this['icon']['stopDrag'](), $8r73z == this['donwX'] && this['donwY'] == b9gv1u && (this['isInitBoard'] || this['initBoard'](), this['showBoard']()), this['isMove'] = ![], this['isPress'] = ![];
  }, t0hf5q;
}(),
    fzer$8;(function (vbtim) {
  var i91vbu;(function (odwscj) {
    var snxe = function (vu91gb) {
      fr8enzx(fmit0h, vu91gb);function fmit0h() {
        return vu91gb['call'](this) || this;
      }return fmit0h['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), vu91gb['prototype']['createChildren']['call'](this), this['createView'](vbtim['demoui']['BoxItemUI']['uiView']);
      }, fmit0h['uiView'] = { 'type': 'View', 'props': { 'width': 0xb4, 'height': 0xa0 }, 'child': [{ 'type': 'Image', 'props': { 'y': 0x3, 'x': 0x20, 'width': 0x73, 'var': 'icon', 'height': 0x73 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x79, 'x': -0x21, 'width': 0xb4, 'var': 'title', 'valign': 'middle', 'height': 0x22, 'fontSize': 0x16, 'color': '#441d1c', 'align': 'center' } }] }] }, fmit0h;
    }(laya['ui']['View']);odwscj['BoxItemUI'] = snxe;
  })(i91vbu = vbtim['demoui'] || (vbtim['demoui'] = {}));
})(fzer$8 || (fzer$8 = {})), function (dcoj26) {
  var q42k5;(function (gv19ub) {
    var o_6c42 = function (ay3$7p) {
      fr8enzx(mvbfiu, ay3$7p);function mvbfiu() {
        return ay3$7p['call'](this) || this;
      }return mvbfiu['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), ay3$7p['prototype']['createChildren']['call'](this), this['createView'](dcoj26['demoui']['MainUI']['uiView']);
      }, mvbfiu['uiView'] = { 'type': 'View', 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x2ee, 'top': 0x0, 'right': 0x0, 'left': 0x0, 'height': 0x536, 'bottom': 0x0 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x2ee, 'height': 0x536, 'centerY': 0x0 }, 'child': [{ 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x2ee, 'var': 'bg', 'height': 0x536 }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x2ee, 'visible': ![], 'var': 'box_1_show', 'height': 0x536, 'centerY': 0x0 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x253, 'x': 0x2e, 'width': 0x1d0, 'var': 'box_1_lab_info', 'leading': 0xa, 'height': 0x97, 'fontSize': 0x18, 'color': '#a959ee' } }, { 'type': 'HBox', 'props': { 'y': 0x2ee, 'x': 0x14, 'width': 0x1fe, 'space': 0x35, 'height': 0x78, 'align': 'top' }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x58, 'var': 'box_1_img_1', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_1', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0xa, 'x': 0xa, 'width': 0x58, 'var': 'box_1_img_2', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_2', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x14, 'x': 0x14, 'width': 0x58, 'var': 'box_1_img_3', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_3', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x1e, 'x': 0x1e, 'width': 0x58, 'var': 'box_1_img_4', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_4', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }] }] }, { 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'visible': ![], 'var': 'box_2_show' }, 'child': [{ 'type': 'HBox', 'props': { 'y': 0x220, 'x': 0x18, 'width': 0x1f4, 'space': 0x2c, 'height': 0x56, 'align': 'top' }, 'child': [{ 'type': 'Image', 'props': { 'y': 2.5, 'x': 0x0, 'width': 0x58, 'var': 'box_2_img_1', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_1', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0xc, 'x': 0xa, 'width': 0x58, 'var': 'box_2_img_2', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_2', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x16, 'x': 0x14, 'width': 0x58, 'var': 'box_2_img_3', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_3', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x20, 'x': 0x1e, 'width': 0x58, 'var': 'box_2_img_4', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_4', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x2a, 'x': 0x28, 'width': 0x58, 'var': 'box_2_img_5', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_5', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }] }, { 'type': 'Box', 'props': { 'y': 0x384, 'x': 0x0, 'width': 0x221, 'height': 0x44 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x0, 'x': 0x28, 'width': 0x122, 'var': 'box_2_lab_m_1', 'text': '方法一\uFF1A单日充值1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300' } }, { 'type': 'Text', 'props': { 'y': 0x1e, 'x': 0x28, 'width': 0x122, 'var': 'box_2_lab_m_2', 'text': '方法一\uFF1A历史累计充值1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300' } }, { 'type': 'Text', 'props': { 'y': 0x0, 'x': 0x141, 'width': 0xa4, 'var': 'box_2_lab_v_1', 'text': '1000/1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300', 'align': 'right' } }, { 'type': 'Text', 'props': { 'y': 0x1e, 'x': 0x141, 'width': 0xa4, 'var': 'box_2_lab_v_2', 'text': '1000/1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300', 'align': 'right' } }] }, { 'type': 'Image', 'props': { 'y': 0x1aa, 'x': 0x159, 'width': 0x66, 'var': 'box_2_btn_get', 'stateNum': 0x1, 'height': 0x26 } }, { 'type': 'Image', 'props': { 'y': 0x1aa, 'x': 0x159, 'width': 0x66, 'var': 'box_2_btn_copy', 'stateNum': 0x1, 'height': 0x26 } }, { 'type': 'Button', 'props': { 'y': 0x1d2, 'x': 0x126, 'width': 0xc9, 'var': 'box_2_addclick', 'stateNum': 0x1, 'height': 0x1b } }, { 'type': 'Text', 'props': { 'y': 0x13c, 'x': 0x17a, 'width': 0xa3, 'var': 'box_2_lab_wx', 'height': 0x1f, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'left' } }] }, { 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'visible': ![], 'var': 'box_3_show' }, 'child': [{ 'type': 'Panel', 'props': { 'y': 0xf5, 'x': 0x10, 'width': 0x201, 'var': 'box_3_panel', 'vScrollBarSkin': '', 'height': 0x29e } }] }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0x0, 'width': 0xbb, 'var': 'btn_1', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0xba, 'width': 0xbb, 'var': 'btn_2', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0x177, 'width': 0xbb, 'var': 'btn_3', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x203, 'x': 0x22e, 'width': 0x25, 'var': 'btn_close', 'height': 0x8f } }, { 'type': 'Box', 'props': { 'width': 0x2ee, 'visible': ![], 'var': 'box_help', 'height': 0x536 }, 'child': [{ 'type': 'Sprite', 'props': { 'y': 0x0, 'x': 0x0, 'mouseThrough': ![], 'alpha': 0.7 }, 'child': [{ 'type': 'Rect', 'props': { 'width': 0x2ee, 'lineWidth': 0x1, 'height': 0x536, 'fillColor': '#000000' } }] }, { 'type': 'Image', 'props': { 'y': 0x158, 'x': 0x28, 'width': 0x1d2, 'var': 'box_help_bg', 'height': 0x203 }, 'child': [{ 'type': 'Button', 'props': { 'y': -0x1, 'x': 0x1a0, 'width': 0x33, 'var': 'box_help_close', 'height': 0x28 } }, { 'type': 'Image', 'props': { 'y': 0x3f, 'x': 0x98, 'width': 0xa0, 'var': 'box_help_qrcode', 'height': 0xa0 } }] }] }] }] }] }, mvbfiu;
    }(laya['ui']['View']);gv19ub['MainUI'] = o_6c42;
  })(q42k5 = dcoj26['demoui'] || (dcoj26['demoui'] = {}));
}(fzer$8 || (fzer$8 = {})), function (mitvf) {
  var cwndj;(function (k4_52q) {
    var mbuif = function (c2jod6) {
      fr8enzx(xezrn, c2jod6);function xezrn() {
        return c2jod6['call'](this) || this;
      }return xezrn['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), c2jod6['prototype']['createChildren']['call'](this), this['createView'](mitvf['demoui']['ToastUI']['uiView']);
      }, xezrn['uiView'] = { 'type': 'View', 'props': { 'width': 0x2ee, 'height': 0x536 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x12c, 'height': 0x32, 'centerY': 0x0, 'centerX': 0x0 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x12c, 'height': 0x32, 'centerX': 0x0, 'alpha': 0.5 }, 'child': [{ 'type': 'Rect', 'props': { 'width': 0x12c, 'lineWidth': 0x1, 'height': 0x32, 'fillColor': '#382f2f' } }] }, { 'type': 'Text', 'props': { 'width': 0x12c, 'var': 'lab_msg', 'valign': 'middle', 'text': 'text', 'height': 0x32, 'fontSize': 0x18, 'color': '#ffffff', 'align': 'center' } }] }] }, xezrn;
    }(laya['ui']['View']);k4_52q['ToastUI'] = mbuif;
  })(cwndj = mitvf['demoui'] || (mitvf['demoui'] = {}));
}(fzer$8 || (fzer$8 = {}));var fco2j6 = function () {
  function f5th0() {}return f5th0['init'] = function () {
    !this['ui'] && (this['ui'] = new fzer$8['demoui']['ToastUI'](), this['ui']['visible'] = ![], Laya['stage']['addChild'](this['ui']));
  }, f5th0['msg'] = function (q0th5) {
    var zxre87 = this;!this['ui'] && f5th0['init'](), this['ui']['visible'] = !![], this['ui']['lab_msg']['text'] = q0th5, clearTimeout(this['interval']), this['interval'] = setTimeout(function () {
      zxre87['ui']['visible'] = ![];
    }, 0x7d0);
  }, f5th0;
}();window['minitool'] = fdjo6;