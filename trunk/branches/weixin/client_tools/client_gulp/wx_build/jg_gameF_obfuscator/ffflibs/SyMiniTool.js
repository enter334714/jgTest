var k = wx.$f;
var fso6c = this && this['__extends'] || function () {
  var _42o = function (imbfv, snwjdc) {
    return _42o = Object['setPrototypeOf'] || { '__proto__': [] } instanceof Array && function (_5k2, fvtbm) {
      _5k2['__proto__'] = fvtbm;
    } || function (zr837$, ftbhim) {
      for (var _k5hq in ftbhim) if (ftbhim['hasOwnProperty'](_k5hq)) zr837$[_k5hq] = ftbhim[_k5hq];
    }, _42o(imbfv, snwjdc);
  };return function (jocs, k_624o) {
    _42o(jocs, k_624o);function c6o_42() {
      this['constructor'] = jocs;
    }jocs['prototype'] = k_624o === null ? Object['create'](k_624o) : (c6o_42['prototype'] = k_624o['prototype'], new c6o_42());
  };
}(),
    fbvitfm = window['Sygame'],
    fht0f5 = ![],
    fj46co = function () {
  function cdjos6() {}return cdjos6['init'] = function () {
    fht0f5 ? this['sygame'] = { 'channel': '3477d2273abd484ba2a0e04ad4971b3c', 'role_id': undefined, 'openid': 'oxmOf5biumkGash-Xht9FVAlswVk', 'appid': 'wx2936121c4817bf46' } : this['sygame'] = fbvitfm;
  }, cdjos6['getTimeStamp'] = function () {
    return new Date()['getTime']();
  }, cdjos6['setResMap'] = function (nwdcjs, uv91bg) {
    this['resMap'][nwdcjs] = nwdcjs + '?' + uv91bg;
  }, cdjos6['getResMap'] = function (dcnjws) {
    return this['resMap'][dcnjws];
  }, cdjos6['resMap'] = {}, cdjos6;
}(),
    fr78xez = function () {
  function pa$73y() {
    this['getIcon'] = 'https://wx.11babay.cn/uploads/f/fkccc1532944783/5/2/c/7/60dc442c4fbc5.png', this['copyIcon'] = 'https://wx.11babay.cn/uploads/f/fkccc1532944783/3/0/1/7/60dc4409dce39.png', fj46co['init'](), this['postSidebarApi']();
  }return pa$73y['prototype']['send'] = function (i0tf, mh0itf, mbithf, ufmvb, hmi0) {
    ufmvb === void 0x0 && (ufmvb = 'get');hmi0 === void 0x0 && (hmi0 = '' || null);var tihmb = new Laya['HttpRequest']();tihmb['http']['timeout'] = 0x2710, tihmb['once'](Laya['Event']['COMPLETE'], this, mh0itf), tihmb['once'](Laya['Event']['ERROR'], this, mbithf), tihmb['send'](i0tf, hmi0, ufmvb, 'text');
  }, pa$73y['prototype']['postSidebarApi'] = function () {
    this['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=sidebarApi&channel=' + fj46co['sygame']['channel'], this['completeHandler'], this['errorHandler']);
  }, pa$73y['prototype']['completeHandler'] = function (ftvibm) {
    var r87zex = JSON['parse'](ftvibm);console['log'](r87zex);switch (r87zex['status']) {case 0x3e9:
        var djwocs = [];r87zex['msg']['basics_image_url'] && djwocs['push']({ 'url': r87zex['msg']['basics_image_url'], 'type': Laya['Loader']['IMAGE'] }), r87zex['msg']['public_code'] && djwocs['push']({ 'url': r87zex['msg']['public_code'], 'type': Laya['Loader']['IMAGE'] }), r87zex['msg']['vip_customer_service'] && djwocs['push']({ 'url': r87zex['msg']['vip_customer_service'], 'type': Laya['Loader']['IMAGE'] }), r87zex['msg']['vip_customer_service_not_add'] && djwocs['push']({ 'url': r87zex['msg']['vip_customer_service_not_add'], 'type': Laya['Loader']['IMAGE'] }), r87zex['msg']['game_center_image_url'] && djwocs['push']({ 'url': r87zex['msg']['game_center_image_url'], 'type': Laya['Loader']['IMAGE'] }), r87zex['msg']['vip_qrcode'] && djwocs['push']({ 'url': r87zex['msg']['vip_qrcode'], 'type': Laya['Loader']['IMAGE'] }), r87zex['msg']['getIcon'] && djwocs['push']({ 'url': this['getIcon'], 'type': Laya['Loader']['IMAGE'] }), r87zex['msg']['copyIcon'] && djwocs['push']({ 'url': this['copyIcon'], 'type': Laya['Loader']['IMAGE'] });for (var ezrn8x = 0x0, $3ypa7 = r87zex['msg']['follow_gift_list']; ezrn8x < $3ypa7['length']; ezrn8x++) {
          var i0fthm = $3ypa7[ezrn8x];djwocs['push']({ 'url': i0fthm['url'], 'type': Laya['Loader']['IMAGE'] });
        }for (var ifbhm = 0x0, k6_4o2 = r87zex['msg']['vip_box_list']; ifbhm < k6_4o2['length']; ifbhm++) {
          var i0fthm = k6_4o2[ifbhm];djwocs['push']({ 'url': i0fthm['url'], 'type': Laya['Loader']['IMAGE'] });
        }for (var kqh0_ = 0x0; kqh0_ < djwocs['length']; kqh0_++) {
          fj46co['setResMap'](djwocs[kqh0_]['url'], fj46co['getTimeStamp']()), djwocs[kqh0_]['url'] = fj46co['getResMap'](djwocs[kqh0_]['url']);
        }Laya['loader']['load'](djwocs, Laya['Handler']['create'](this, this['initGame'])), this['data'] = r87zex['msg'];break;case 0x3ea:
        fi19bvu['msg']('空的游戏channel');break;case 0x3eb:
        fi19bvu['msg']('错误的游戏channel');break;case 0x3ec:
        fi19bvu['msg']('未找到对应游戏大类');break;case 0x3ed:
        fi19bvu['msg']('未设置侧边栏');break;}
  }, pa$73y['prototype']['errorHandler'] = function (fimvu) {}, pa$73y['prototype']['initGame'] = function () {
    var htq0k5 = new fxe7r8(this);htq0k5['show']();
  }, pa$73y;
}(),
    fxe7r8 = function () {
  function k6_4o(sjdwn) {
    this['page'] = 0x3, this['rolePriceData'] = {}, this['boxlist'] = [], this['donwX'] = 0x0, this['downY'] = 0x0, this['tool'] = sjdwn;
  }return k6_4o['prototype']['setChildMouseThroughs'] = function (ftbv) {
    var sxd = ftbv['_childs'] || [];for (var xe7zr8 = 0x0; xe7zr8 < sxd['length']; xe7zr8++) {
      sxd[xe7zr8] && (sxd[xe7zr8]['mouseThrough'] = !![]);
    }
  }, k6_4o['prototype']['show'] = function () {
    if (this['tool']['data']['on'] === '1') {
      this['main'] = new fe7rx8z['demoui']['MainUI'](), Laya['stage']['addChild'](this['main']), this['main']['mouseThrough'] = !![];var zwnse = this['main']['_childs'] || [];for (var $7z3r8 = 0x0; $7z3r8 < zwnse['length']; $7z3r8++) {
        zwnse[$7z3r8]['mouseThrough'] = !![];
      }this['setChildMouseThroughs'](this['main']['_childs']), this['setChildMouseThroughs'](this['main']['_childs'][0x0]), this['initIcon'](), this['initEvent'](), this['initView'](), fi19bvu['init']();
    }
  }, k6_4o['prototype']['initView'] = function () {
    var t0q5kh = this,
        xr8ezn = this['tool']['data']['follow_down_words']['replace'](/\\n/g, '\x0a');this['main']['box_1_lab_info']['text'] = xr8ezn;for (var q5ht0 = 0x1; q5ht0 <= this['tool']['data']['follow_gift_list']['length']; q5ht0++) {
      var ibm = this['tool']['data']['follow_gift_list'][q5ht0 - 0x1];this['main']['box_1_img_' + q5ht0]['skin'] = ibm['url'], this['main']['box_1_lab_' + q5ht0]['text'] = ibm['name'];
    }for (var q5ht0 = 0x1; q5ht0 <= this['tool']['data']['vip_box_list']['length']; q5ht0++) {
      var ibm = this['tool']['data']['vip_box_list'][q5ht0 - 0x1];this['main']['box_2_img_' + q5ht0]['skin'] = ibm['url'], this['main']['box_2_lab_' + q5ht0]['text'] = ibm['name'];
    }this['main']['box_2_lab_m_1']['text'] = '方法一：单日充值' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_m_2']['text'] = '方法二：历史累计充值' + +this['tool']['data']['y'] + '元', this['main']['box_2_lab_v_1']['text'] = (this['rolePriceData']['todayPrice'] || 0x0) + '/' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_v_2']['text'] = (this['rolePriceData']['allPrice'] || 0x0) + '/' + +this['tool']['data']['y'] + '元', this['main']['box_2_btn_copy']['skin'] = this['tool']['copyIcon'], this['main']['box_2_btn_get']['skin'] = this['tool']['getIcon'], this['main']['box_2_btn_copy']['visible'] = ![], this['main']['box_2_btn_get']['on'](Laya['Event']['CLICK'], this, function () {
      if (t0q5kh['rolePriceData']['is_vip'] == 0x0) {
        fi19bvu['msg']('请先获取vip资格');return;
      }t0q5kh['main']['box_2_lab_wx']['text'] = t0q5kh['tool']['data']['vip_wx'], t0q5kh['main']['box_2_btn_copy']['visible'] = !![];
    }), this['main']['box_2_btn_copy']['on'](Laya['Event']['CLICK'], this, function () {
      t0q5kh['copyText'](t0q5kh['tool']['data']['vip_wx']);
    }), this['main']['box_2_addclick']['on'](Laya['Event']['CLICK'], this, function () {
      if (t0q5kh['rolePriceData']['is_vip'] == 0x0) return;t0q5kh['main']['box_help']['visible'] = !![];
    }), this['main']['box_help_close']['on'](Laya['Event']['CLICK'], this, function () {
      t0q5kh['main']['box_help']['visible'] = ![];
    }), this['main']['box_help_bg']['skin'] = this['tool']['data']['vip_customer_service_not_add'], this['main']['box_help_qrcode']['skin'] = this['tool']['data']['vip_qrcode'], this['main']['box_help_qrcode']['scaleX'] = 0xa0 / this['main']['box_help_qrcode']['width'], this['main']['box_help_qrcode']['scaleY'] = 0xa0 / this['main']['box_help_qrcode']['width'], this['main']['box_3_panel']['vScrollBar']['visible'] = ![], this['main']['box_3_panel']['vScrollBarSkin'] = 'common_atlas/scrollBar.png';
  }, k6_4o['prototype']['initIcon'] = function () {
    this['icon'] = new Laya['Image'](), this['icon']['skin'] = this['tool']['data']['basics_image_url'], this['icon']['x'] = 0x0, this['icon']['y'] = 0xc8, this['icon']['width'] = 0x66, this['icon']['height'] = 0x6f, this['main']['addChild'](this['icon']), this['icon']['on'](Laya['Event']['MOUSE_DOWN'], this, this['iconPress']), this['icon']['on'](Laya['Event']['MOUSE_UP'], this, this['iconUp']), this['icon']['on'](Laya['Event']['MOUSE_WHEEL'], this, this['iconMove']), this['dragRect'] = new Laya['Rectangle'](-this['icon']['width'] / 0x2, 0x0, Laya['stage']['width'], Laya['stage']['height'] - this['icon']['height'] / 0x2);
  }, k6_4o['prototype']['initEvent'] = function () {
    var ez$87r = this;this['main']['btn_1']['on'](Laya['Event']['CLICK'], this, function () {
      if (ez$87r['page'] == 0x1) return;ez$87r['page1']();
    }), this['main']['btn_2']['on'](Laya['Event']['CLICK'], this, function () {
      if (ez$87r['page'] == 0x2) return;ez$87r['page2']();
    }), this['main']['btn_3']['on'](Laya['Event']['CLICK'], this, function () {
      if (ez$87r['page'] == 0x3) return;ez$87r['page3']();
    }), this['main']['btn_close']['on'](Laya['Event']['CLICK'], this, function () {
      ez$87r['main']['bg']['x'] = -0x2ee, ez$87r['icon']['visible'] = !![];
    });
  }, k6_4o['prototype']['initBoard'] = function () {
    this['isInitBoard'] = !![], this['page1']();
  }, k6_4o['prototype']['showBoard'] = function () {
    this['main']['bg']['x'] = 0x0, this['icon']['visible'] = ![], this['tool']['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=sidebarApiRoleId&role_id=' + fj46co['sygame']['role_id'] + '&channel=' + fj46co['sygame']['channel'], this['rolePriceHandler']['bind'](this), this['roleError']['bind'](this));
  }, k6_4o['prototype']['page1'] = function () {
    this['page'] = 0x1, this['main']['bg']['skin'] = this['tool']['data']['public_code'], this['main']['box_1_show']['visible'] = !![], this['main']['box_2_show']['visible'] = ![], this['main']['box_3_show']['visible'] = ![];
  }, k6_4o['prototype']['page2'] = function () {
    this['page'] = 0x2, this['main']['bg']['skin'] = this['tool']['data']['vip_customer_service'], this['main']['box_1_show']['visible'] = ![], this['main']['box_2_show']['visible'] = !![], this['main']['box_3_show']['visible'] = ![];
  }, k6_4o['prototype']['page3'] = function () {
    this['page'] = 0x3, this['main']['bg']['skin'] = this['tool']['data']['game_center_image_url'], this['main']['box_1_show']['visible'] = ![], this['main']['box_2_show']['visible'] = ![], this['main']['box_3_show']['visible'] = !![], this['sendBox'] || this['getBoxList'](0x0), this['sendBox'] = !![], fbvitfm && fbvitfm['syClickOpenBox']();
  }, k6_4o['prototype']['getBoxList'] = function ($83r7y) {
    var sjo = this;fbvitfm && fbvitfm['syGetBoxList']({ 'page': $83r7y, 'count': 0xc })['then'](function (k64o2) {
      var oswdcj = k64o2['data'];oswdcj['status'] == 0x3e9 ? oswdcj['data'] && oswdcj['data']['length'] && (sjo['boxlist'] = sjo['boxlist']['concat'](oswdcj['data']), $83r7y++, sjo['getBoxList']($83r7y)) : sjo['boxListHandler']();
    });
  }, k6_4o['prototype']['copyText'] = function (sdwcnj) {
    try {
      wx['setClipboardData']({ 'data': sdwcnj, 'success': function (vubg91) {
          console['log']('复制成功:', vubg91);
        } });
    } catch (h5k0t) {}
  }, k6_4o['prototype']['rolePriceHandler'] = function (k45) {
    this['rolePriceData'] = JSON['parse'](k45);switch (this['rolePriceData']['status']) {case 0x3e9:
        this['main']['box_2_lab_v_1']['text'] = (this['rolePriceData']['todayPrice'] || 0x0) + '/' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_v_2']['text'] = (this['rolePriceData']['allPrice'] || 0x0) + '/' + +this['tool']['data']['y'] + '元';break;case 0x3ea:
        break;case 0x3eb:
        break;}
  }, k6_4o['prototype']['roleError'] = function () {}, k6_4o['prototype']['boxListHandler'] = function () {
    var r3z7 = function (co24j) {
      var qkh_ = ub1v9['boxlist'][co24j],
          k426_5 = new fe7rx8z['demoui']['BoxItemUI']();k426_5['icon']['skin'] = qkh_['icon'], k426_5['title']['text'] = qkh_['title'], k426_5['x'] = 0xa0 * (co24j % 0x3), k426_5['y'] = 0xa0 * (co24j / 0x3 ^ 0x0), ub1v9['main']['box_3_panel']['addChild'](k426_5);var jcw = { 'appid': fj46co['sygame']['appid'], 'game_id': qkh_['game_id'], 'jump_appid': qkh_['jump_appid'], 'jump_path': qkh_['jump_path'], 'tunnel_id': qkh_['tunnel_id'], 'uv': 0x0, 'wecha_id': fj46co['sygame']['openid'] },
          r7z8e = qkh_['preview_img'],
          fvbitm = qkh_['jump_type'],
          zswn = qkh_['kf_session'];k426_5['on'](Laya['Event']['CLICK'], ub1v9, function () {
        fbvitfm && fbvitfm['syClickBox']({ 'game_id': qkh_['game_id'], 'tunnel_id': qkh_['tunnel_id'], 'jump_appid': qkh_['jump_appid'], 'jump_path': qkh_['jump_path'] })['then'](function (qk0_45) {
          if (fvbitm === '0') wx['navigateToMiniProgram']({ 'appId': jcw['jump_appid'], 'path': jcw['jump_path'], 'fail': function (a7yr$) {
              if (!r7z8e) return;wx['previewImage']({ 'urls': [r7z8e] });
            } });else {
            if (fvbitm === '1') {
              if (!r7z8e) return;wx['previewImage']({ 'urls': [r7z8e] });
            } else {
              if (fvbitm === '2') {
                if (!zswn) return;wx['openCustomerServiceConversation']({ 'sessionFrom': zswn, 'showMessageCard': !![], 'sendMessageTitle': '', 'sendMessagePath': '', 'sendMessageImg': '' });
              }
            }
          }
        });
      });
    },
        ub1v9 = this;for (var q_k0h = 0x0; q_k0h < this['boxlist']['length']; q_k0h++) {
      r3z7(q_k0h);
    }
  }, k6_4o['prototype']['boxListError'] = function () {}, k6_4o['prototype']['boxClickHandler'] = function () {}, k6_4o['prototype']['iconPress'] = function (mhti0) {
    this['donwX'] = mhti0['target']['x'], this['donwY'] = mhti0['target']['y'], this['icon']['startDrag'](this['dragRect']), this['isMove'] = ![], this['isPress'] = !![];
  }, k6_4o['prototype']['iconMove'] = function (vb1im) {
    this['isMove'] = !![];
  }, k6_4o['prototype']['iconUp'] = function (mfqht0) {
    var e8zwnx = mfqht0['target']['x'],
        z73$8r = mfqht0['target']['y'];this['icon']['stopDrag'](), e8zwnx == this['donwX'] && this['donwY'] == z73$8r && (this['isInitBoard'] || this['initBoard'](), this['showBoard']()), this['isMove'] = ![], this['isPress'] = ![];
  }, k6_4o;
}(),
    fe7rx8z;(function (t0hqm) {
  var fqtm0;(function (b1vimu) {
    var cnsdj = function (nxz8re) {
      fso6c(fthqm0, nxz8re);function fthqm0() {
        return nxz8re['call'](this) || this;
      }return fthqm0['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), nxz8re['prototype']['createChildren']['call'](this), this['createView'](t0hqm['demoui']['BoxItemUI']['uiView']);
      }, fthqm0['uiView'] = { 'type': 'View', 'props': { 'width': 0xb4, 'height': 0xa0 }, 'child': [{ 'type': 'Image', 'props': { 'y': 0x3, 'x': 0x20, 'width': 0x73, 'var': 'icon', 'height': 0x73 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x79, 'x': -0x21, 'width': 0xb4, 'var': 'title', 'valign': 'middle', 'height': 0x22, 'fontSize': 0x16, 'color': '#441d1c', 'align': 'center' } }] }] }, fthqm0;
    }(laya['ui']['View']);b1vimu['BoxItemUI'] = cnsdj;
  })(fqtm0 = t0hqm['demoui'] || (t0hqm['demoui'] = {}));
})(fe7rx8z || (fe7rx8z = {})), function (fqtmh0) {
  var nsdwc;(function (umvibf) {
    var mbfhit = function (xnjwds) {
      fso6c(gub91, xnjwds);function gub91() {
        return xnjwds['call'](this) || this;
      }return gub91['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), xnjwds['prototype']['createChildren']['call'](this), this['createView'](fqtmh0['demoui']['MainUI']['uiView']);
      }, gub91['uiView'] = { 'type': 'View', 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x2ee, 'top': 0x0, 'right': 0x0, 'left': 0x0, 'height': 0x536, 'bottom': 0x0 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x2ee, 'height': 0x536, 'centerY': 0x0 }, 'child': [{ 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x2ee, 'var': 'bg', 'height': 0x536 }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x2ee, 'visible': ![], 'var': 'box_1_show', 'height': 0x536, 'centerY': 0x0 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x253, 'x': 0x2e, 'width': 0x1d0, 'var': 'box_1_lab_info', 'leading': 0xa, 'height': 0x97, 'fontSize': 0x18, 'color': '#a959ee' } }, { 'type': 'HBox', 'props': { 'y': 0x2ee, 'x': 0x14, 'width': 0x1fe, 'space': 0x35, 'height': 0x78, 'align': 'top' }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x58, 'var': 'box_1_img_1', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_1', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0xa, 'x': 0xa, 'width': 0x58, 'var': 'box_1_img_2', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_2', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x14, 'x': 0x14, 'width': 0x58, 'var': 'box_1_img_3', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_3', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x1e, 'x': 0x1e, 'width': 0x58, 'var': 'box_1_img_4', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_4', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }] }] }, { 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'visible': ![], 'var': 'box_2_show' }, 'child': [{ 'type': 'HBox', 'props': { 'y': 0x220, 'x': 0x18, 'width': 0x1f4, 'space': 0x2c, 'height': 0x56, 'align': 'top' }, 'child': [{ 'type': 'Image', 'props': { 'y': 2.5, 'x': 0x0, 'width': 0x58, 'var': 'box_2_img_1', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_1', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0xc, 'x': 0xa, 'width': 0x58, 'var': 'box_2_img_2', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_2', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x16, 'x': 0x14, 'width': 0x58, 'var': 'box_2_img_3', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_3', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x20, 'x': 0x1e, 'width': 0x58, 'var': 'box_2_img_4', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_4', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x2a, 'x': 0x28, 'width': 0x58, 'var': 'box_2_img_5', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_5', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }] }, { 'type': 'Box', 'props': { 'y': 0x384, 'x': 0x0, 'width': 0x221, 'height': 0x44 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x0, 'x': 0x28, 'width': 0x122, 'var': 'box_2_lab_m_1', 'text': '方法一\uFF1A单日充值1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300' } }, { 'type': 'Text', 'props': { 'y': 0x1e, 'x': 0x28, 'width': 0x122, 'var': 'box_2_lab_m_2', 'text': '方法一\uFF1A历史累计充值1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300' } }, { 'type': 'Text', 'props': { 'y': 0x0, 'x': 0x141, 'width': 0xa4, 'var': 'box_2_lab_v_1', 'text': '1000/1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300', 'align': 'right' } }, { 'type': 'Text', 'props': { 'y': 0x1e, 'x': 0x141, 'width': 0xa4, 'var': 'box_2_lab_v_2', 'text': '1000/1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300', 'align': 'right' } }] }, { 'type': 'Image', 'props': { 'y': 0x1aa, 'x': 0x159, 'width': 0x66, 'var': 'box_2_btn_get', 'stateNum': 0x1, 'height': 0x26 } }, { 'type': 'Image', 'props': { 'y': 0x1aa, 'x': 0x159, 'width': 0x66, 'var': 'box_2_btn_copy', 'stateNum': 0x1, 'height': 0x26 } }, { 'type': 'Button', 'props': { 'y': 0x1d2, 'x': 0x126, 'width': 0xc9, 'var': 'box_2_addclick', 'stateNum': 0x1, 'height': 0x1b } }, { 'type': 'Text', 'props': { 'y': 0x13c, 'x': 0x17a, 'width': 0xa3, 'var': 'box_2_lab_wx', 'height': 0x1f, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'left' } }] }, { 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'visible': ![], 'var': 'box_3_show' }, 'child': [{ 'type': 'Panel', 'props': { 'y': 0xf5, 'x': 0x10, 'width': 0x201, 'var': 'box_3_panel', 'vScrollBarSkin': '', 'height': 0x29e } }] }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0x0, 'width': 0xbb, 'var': 'btn_1', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0xba, 'width': 0xbb, 'var': 'btn_2', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0x177, 'width': 0xbb, 'var': 'btn_3', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x203, 'x': 0x22e, 'width': 0x25, 'var': 'btn_close', 'height': 0x8f } }, { 'type': 'Box', 'props': { 'width': 0x2ee, 'visible': ![], 'var': 'box_help', 'height': 0x536 }, 'child': [{ 'type': 'Sprite', 'props': { 'y': 0x0, 'x': 0x0, 'mouseThrough': ![], 'alpha': 0.7 }, 'child': [{ 'type': 'Rect', 'props': { 'width': 0x2ee, 'lineWidth': 0x1, 'height': 0x536, 'fillColor': '#000000' } }] }, { 'type': 'Image', 'props': { 'y': 0x158, 'x': 0x28, 'width': 0x1d2, 'var': 'box_help_bg', 'height': 0x203 }, 'child': [{ 'type': 'Button', 'props': { 'y': -0x1, 'x': 0x1a0, 'width': 0x33, 'var': 'box_help_close', 'height': 0x28 } }, { 'type': 'Image', 'props': { 'y': 0x3f, 'x': 0x98, 'width': 0xa0, 'var': 'box_help_qrcode', 'height': 0xa0 } }] }] }] }] }] }, gub91;
    }(laya['ui']['View']);umvibf['MainUI'] = mbfhit;
  })(nsdwc = fqtmh0['demoui'] || (fqtmh0['demoui'] = {}));
}(fe7rx8z || (fe7rx8z = {})), function (enwdx) {
  var k_q4;(function (fbhti) {
    var enxwz = function (thfib) {
      fso6c(nwcj, thfib);function nwcj() {
        return thfib['call'](this) || this;
      }return nwcj['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), thfib['prototype']['createChildren']['call'](this), this['createView'](enwdx['demoui']['ToastUI']['uiView']);
      }, nwcj['uiView'] = { 'type': 'View', 'props': { 'width': 0x2ee, 'height': 0x536 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x12c, 'height': 0x32, 'centerY': 0x0, 'centerX': 0x0 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x12c, 'height': 0x32, 'centerX': 0x0, 'alpha': 0.5 }, 'child': [{ 'type': 'Rect', 'props': { 'width': 0x12c, 'lineWidth': 0x1, 'height': 0x32, 'fillColor': '#382f2f' } }] }, { 'type': 'Text', 'props': { 'width': 0x12c, 'var': 'lab_msg', 'valign': 'middle', 'text': 'text', 'height': 0x32, 'fontSize': 0x18, 'color': '#ffffff', 'align': 'center' } }] }] }, nwcj;
    }(laya['ui']['View']);fbhti['ToastUI'] = enxwz;
  })(k_q4 = enwdx['demoui'] || (enwdx['demoui'] = {}));
}(fe7rx8z || (fe7rx8z = {}));var fi19bvu = function () {
  function r37$8() {}return r37$8['init'] = function () {
    !this['ui'] && (this['ui'] = new fe7rx8z['demoui']['ToastUI'](), this['ui']['visible'] = ![], Laya['stage']['addChild'](this['ui']));
  }, r37$8['msg'] = function (dn) {
    var c_o426 = this;!this['ui'] && r37$8['init'](), this['ui']['visible'] = !![], this['ui']['lab_msg']['text'] = dn, clearTimeout(this['interval']), this['interval'] = setTimeout(function () {
      c_o426['ui']['visible'] = ![];
    }, 0x7d0);
  }, r37$8;
}();window['minitool'] = fr78xez;