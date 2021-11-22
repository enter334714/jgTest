var I = wx.$R;
var r_hbau = this && this['__extends'] || function () {
  var lzvt3 = function (s0tvl3, stxjz) {
    return lzvt3 = Object['setPrototypeOf'] || { '__proto__': [] } instanceof Array && function (lts3v0, l3vts) {
      lts3v0['__proto__'] = l3vts;
    } || function (_5hu61, ab9u1) {
      for (var uh_a16 in ab9u1) if (ab9u1['hasOwnProperty'](uh_a16)) _5hu61[uh_a16] = ab9u1[uh_a16];
    }, lzvt3(s0tvl3, stxjz);
  };return function (kwi8y, fpedgq) {
    lzvt3(kwi8y, fpedgq);function dgfqpe() {
      this['constructor'] = kwi8y;
    }kwi8y['prototype'] = fpedgq === null ? Object['create'](fpedgq) : (dgfqpe['prototype'] = fpedgq['prototype'], new dgfqpe());
  };
}(),
    r_pqfdg = window['Sygame'],
    r_dcqnpf = ![],
    r_h_65c = function () {
  function kr7mwg() {}return kr7mwg['init'] = function () {
    r_dcqnpf ? this['sygame'] = { 'channel': '3477d2273abd484ba2a0e04ad4971b3c', 'role_id': undefined, 'openid': 'oxmOf5biumkGash-Xht9FVAlswVk', 'appid': 'wx2936121c4817bf46' } : this['sygame'] = r_pqfdg;
  }, kr7mwg['getTimeStamp'] = function () {
    return new Date()['getTime']();
  }, kr7mwg['setResMap'] = function (xstz23, yikw) {
    this['resMap'][xstz23] = xstz23 + '?' + yikw;
  }, kr7mwg['getResMap'] = function (xoy8j) {
    return this['resMap'][xoy8j];
  }, kr7mwg['resMap'] = {}, kr7mwg;
}(),
    r_edgq7p = function () {
  function i8kwo() {
    this['getIcon'] = 'https://wx.11babay.cn/uploads/f/fkccc1532944783/5/2/c/7/60dc442c4fbc5.png', this['copyIcon'] = 'https://wx.11babay.cn/uploads/f/fkccc1532944783/3/0/1/7/60dc4409dce39.png', r_h_65c['init'](), this['getBoxCheckoutCode']();
  }return i8kwo['prototype']['send'] = function (rgwme7, hnfc56, q7egp, yj8ok, ixoj2z) {
    yj8ok === void 0x0 && (yj8ok = 'get');ixoj2z === void 0x0 && (ixoj2z = '' || null);var iy2xoj = new Laya['HttpRequest']();iy2xoj['http']['timeout'] = 0x2710, iy2xoj['once'](Laya['Event']['COMPLETE'], this, hnfc56), iy2xoj['once'](Laya['Event']['ERROR'], this, q7egp), iy2xoj['send'](rgwme7, ixoj2z, yj8ok, 'text');
  }, i8kwo['prototype']['postSidebarApi'] = function () {
    var y2i = r_h_65c['sygame']['openid'],
        r78km = '&channel=' + r_h_65c['sygame']['channel'] + '&wecha_id=' + y2i;this['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=sidebarApi' + r78km, this['completeHandler'], this['errorHandler']);
  }, i8kwo['prototype']['getBoxCheckoutCode'] = function () {
    var jox2z = Sygame['SY_CONF']['commitId'];this['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=getBoxCheckoutCode', this['getBoxCheckoutCodeRes'], this['errorHandler'], 'post', { 'commitId': jox2z });
  }, i8kwo['prototype']['getBoxCheckoutCodeRes'] = function (_h1u6a) {
    var ub_$1 = JSON['parse'](_h1u6a);console['log']('getBoxCheckoutCode:', ub_$1);if (ub_$1['status'] == 0x3e9) {
      var u15_6 = ub_$1['info'];u15_6 == 0xfa1 ? this['postSidebarApi']() : console['error']('盛也盒子\x20不显示' + ub_$1);
    } else console['error']('盛也盒子 getBoxCheckoutCodeRes 其他错误' + ub_$1);
  }, i8kwo['prototype']['completeHandler'] = function (nc_65h) {
    var zs32tl = JSON['parse'](nc_65h);console['log'](zs32tl);switch (zs32tl['status']) {case 0x3e9:
        var mrw7ge = [];zs32tl['msg']['basics_image_url'] && mrw7ge['push']({ 'url': zs32tl['msg']['basics_image_url'], 'type': Laya['Loader']['IMAGE'] }), zs32tl['msg']['public_code'] && mrw7ge['push']({ 'url': zs32tl['msg']['public_code'], 'type': Laya['Loader']['IMAGE'] }), zs32tl['msg']['vip_customer_service'] && mrw7ge['push']({ 'url': zs32tl['msg']['vip_customer_service'], 'type': Laya['Loader']['IMAGE'] }), zs32tl['msg']['vip_customer_service_not_add'] && mrw7ge['push']({ 'url': zs32tl['msg']['vip_customer_service_not_add'], 'type': Laya['Loader']['IMAGE'] }), zs32tl['msg']['game_center_image_url'] && mrw7ge['push']({ 'url': zs32tl['msg']['game_center_image_url'], 'type': Laya['Loader']['IMAGE'] }), zs32tl['msg']['vip_qrcode'] && mrw7ge['push']({ 'url': zs32tl['msg']['vip_qrcode'], 'type': Laya['Loader']['IMAGE'] }), zs32tl['msg']['getIcon'] && mrw7ge['push']({ 'url': this['getIcon'], 'type': Laya['Loader']['IMAGE'] }), zs32tl['msg']['copyIcon'] && mrw7ge['push']({ 'url': this['copyIcon'], 'type': Laya['Loader']['IMAGE'] });for (var v3t0s = 0x0, ednfq = zs32tl['msg']['follow_gift_list']; v3t0s < ednfq['length']; v3t0s++) {
          var rm7eg = ednfq[v3t0s];mrw7ge['push']({ 'url': rm7eg['url'], 'type': Laya['Loader']['IMAGE'] });
        }for (var tlzvs = 0x0, h6cu5 = zs32tl['msg']['vip_box_list']; tlzvs < h6cu5['length']; tlzvs++) {
          var rm7eg = h6cu5[tlzvs];mrw7ge['push']({ 'url': rm7eg['url'], 'type': Laya['Loader']['IMAGE'] });
        }for (var fcdp5 = 0x0; fcdp5 < mrw7ge['length']; fcdp5++) {
          r_h_65c['setResMap'](mrw7ge[fcdp5]['url'], r_h_65c['getTimeStamp']()), mrw7ge[fcdp5]['url'] = r_h_65c['getResMap'](mrw7ge[fcdp5]['url']);
        }Laya['loader']['load'](mrw7ge, Laya['Handler']['create'](this, this['initGame'])), this['data'] = zs32tl['msg'];break;case 0x3ea:
        r_fpgqe['msg']('空的游戏channel');break;case 0x3eb:
        r_fpgqe['msg']('错误的游戏channel');break;case 0x3ec:
        r_fpgqe['msg']('未找到对应游戏大类');break;case 0x3ed:
        r_fpgqe['msg']('未设置侧边栏');break;}
  }, i8kwo['prototype']['errorHandler'] = function (pqdfnc) {}, i8kwo['prototype']['initGame'] = function () {
    var st3zx2 = new r_lz23ts(this);st3zx2['show']();
  }, i8kwo;
}(),
    r_lz23ts = function () {
  function _h1uba(w87mkr) {
    this['page'] = 0x3, this['rolePriceData'] = {}, this['boxlist'] = [], this['donwX'] = 0x0, this['downY'] = 0x0, this['tool'] = w87mkr;
  }return _h1uba['prototype']['setChildMouseThroughs'] = function (dqfcpn) {
    var joizx2 = dqfcpn['_childs'] || [];for (var i8yxj = 0x0; i8yxj < joizx2['length']; i8yxj++) {
      joizx2[i8yxj] && (joizx2[i8yxj]['mouseThrough'] = !![]);
    }
  }, _h1uba['prototype']['show'] = function () {
    if (this['tool']['data']['on'] === '1') {
      this['main'] = new r_dfnq['demoui']['MainUI'](), Laya['stage']['addChild'](this['main']), this['main']['mouseThrough'] = !![];var oykm8 = this['main']['_childs'] || [];for (var zj2i = 0x0; zj2i < oykm8['length']; zj2i++) {
        oykm8[zj2i]['mouseThrough'] = !![];
      }this['setChildMouseThroughs'](this['main']['_childs']), this['setChildMouseThroughs'](this['main']['_childs'][0x0]), this['initIcon'](), this['initEvent'](), this['initView'](), r_fpgqe['init']();
    }
  }, _h1uba['prototype']['initView'] = function () {
    var yx8o = this,
        dn6c5 = this['tool']['data']['follow_down_words']['replace'](/\\n/g, '\x0a');this['main']['box_1_lab_info']['text'] = dn6c5;for (var ab9$14 = 0x1; ab9$14 <= this['tool']['data']['follow_gift_list']['length']; ab9$14++) {
      var ki8o = this['tool']['data']['follow_gift_list'][ab9$14 - 0x1];this['main']['box_1_img_' + ab9$14]['skin'] = ki8o['url'], this['main']['box_1_lab_' + ab9$14]['text'] = ki8o['name'];
    }for (var ab9$14 = 0x1; ab9$14 <= this['tool']['data']['vip_box_list']['length']; ab9$14++) {
      var ki8o = this['tool']['data']['vip_box_list'][ab9$14 - 0x1];this['main']['box_2_img_' + ab9$14]['skin'] = ki8o['url'], this['main']['box_2_lab_' + ab9$14]['text'] = ki8o['name'];
    }this['main']['box_2_lab_m_1']['text'] = '方法一：单日充值' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_m_2']['text'] = '方法二：历史累计充值' + +this['tool']['data']['y'] + '元', this['main']['box_2_lab_v_1']['text'] = (this['rolePriceData']['todayPrice'] || 0x0) + '/' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_v_2']['text'] = (this['rolePriceData']['allPrice'] || 0x0) + '/' + +this['tool']['data']['y'] + '元', this['main']['box_2_btn_copy']['skin'] = this['tool']['copyIcon'], this['main']['box_2_btn_get']['skin'] = this['tool']['getIcon'], this['main']['box_2_btn_copy']['visible'] = ![], this['main']['box_2_btn_get']['on'](Laya['Event']['CLICK'], this, function () {
      if (yx8o['rolePriceData']['is_vip'] == 0x0) {
        r_fpgqe['msg']('请先获取vip资格');return;
      }yx8o['main']['box_2_lab_wx']['text'] = this['rolePriceData']['vip_wx'], yx8o['main']['box_2_btn_copy']['visible'] = !![];
    }), this['main']['box_2_btn_copy']['on'](Laya['Event']['CLICK'], this, function () {
      yx8o['copyText'](this['rolePriceData']['vip_wx']);
    }), this['main']['box_2_addclick']['on'](Laya['Event']['CLICK'], this, function () {
      if (yx8o['rolePriceData']['is_vip'] == 0x0) return;this['main']['box_help_qrcode']['skin'] = yx8o['rolePriceData']['vip_qrcode'], yx8o['main']['box_help']['visible'] = !![];
    }), this['main']['box_help_close']['on'](Laya['Event']['CLICK'], this, function () {
      yx8o['main']['box_help']['visible'] = ![];
    }), this['main']['box_help_bg']['skin'] = this['tool']['data']['vip_customer_service_not_add'], this['main']['box_help_qrcode']['skin'] = yx8o['rolePriceData']['vip_qrcode'], this['main']['box_help_qrcode']['scaleX'] = 0xa0 / this['main']['box_help_qrcode']['width'], this['main']['box_help_qrcode']['scaleY'] = 0xa0 / this['main']['box_help_qrcode']['width'], this['main']['box_3_panel']['vScrollBar']['visible'] = ![], this['main']['box_3_panel']['vScrollBarSkin'] = 'common_atlas/scrollBar.png';
  }, _h1uba['prototype']['initIcon'] = function () {
    this['icon'] = new Laya['Image'](), this['icon']['skin'] = this['tool']['data']['basics_image_url'], this['icon']['x'] = 0x0, this['icon']['y'] = 0xc8, this['icon']['width'] = 0x66, this['icon']['height'] = 0x6f, this['main']['addChild'](this['icon']), this['icon']['on'](Laya['Event']['MOUSE_DOWN'], this, this['iconPress']), this['icon']['on'](Laya['Event']['MOUSE_UP'], this, this['iconUp']), this['icon']['on'](Laya['Event']['MOUSE_WHEEL'], this, this['iconMove']), this['dragRect'] = new Laya['Rectangle'](-this['icon']['width'] / 0x2, 0x0, Laya['stage']['width'], Laya['stage']['height'] - this['icon']['height'] / 0x2);
  }, _h1uba['prototype']['initEvent'] = function () {
    var eprq7g = this;this['main']['btn_1']['on'](Laya['Event']['CLICK'], this, function () {
      if (eprq7g['page'] == 0x1) return;eprq7g['page1']();
    }), this['main']['btn_2']['on'](Laya['Event']['CLICK'], this, function () {
      if (eprq7g['page'] == 0x2) return;eprq7g['page2']();
    }), this['main']['btn_3']['on'](Laya['Event']['CLICK'], this, function () {
      if (eprq7g['page'] == 0x3) return;eprq7g['page3']();
    }), this['main']['btn_close']['on'](Laya['Event']['CLICK'], this, function () {
      eprq7g['main']['bg']['x'] = -0x2ee, eprq7g['icon']['visible'] = !![];
    });
  }, _h1uba['prototype']['initBoard'] = function () {
    this['isInitBoard'] = !![], this['page1']();
  }, _h1uba['prototype']['showBoard'] = function () {
    this['main']['bg']['x'] = 0x0, this['icon']['visible'] = ![];var b1a9$u = _rYE['selectedServer']['server_id'],
        a1h_ = _rYE['selectedServer']['server_name'],
        zlt2s3 = _rYE['roleId'],
        cdfq = _rYE['roleName'],
        nh_c65 = r_h_65c['sygame']['openid'],
        a_hu1 = '&role_id=' + r_h_65c['sygame']['role_id'] + '&channel=' + r_h_65c['sygame']['channel'] + '&server_id=' + b1a9$u + '&server_name=' + a1h_ + '&wecha_id=' + nh_c65 + '&role_id=' + zlt2s3 + '&role_name=' + cdfq;this['tool']['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=sidebarApiRoleId' + a_hu1, this['rolePriceHandler']['bind'](this), this['roleError']['bind'](this));
  }, _h1uba['prototype']['page1'] = function () {
    this['page'] = 0x1, this['main']['bg']['skin'] = this['tool']['data']['public_code'], this['main']['box_1_show']['visible'] = !![], this['main']['box_2_show']['visible'] = ![], this['main']['box_3_show']['visible'] = ![];
  }, _h1uba['prototype']['page2'] = function () {
    this['page'] = 0x2, this['main']['bg']['skin'] = this['tool']['data']['vip_customer_service'], this['main']['box_1_show']['visible'] = ![], this['main']['box_2_show']['visible'] = !![], this['main']['box_3_show']['visible'] = ![];
  }, _h1uba['prototype']['page3'] = function () {
    this['page'] = 0x3, this['main']['bg']['skin'] = this['tool']['data']['game_center_image_url'], this['main']['box_1_show']['visible'] = ![], this['main']['box_2_show']['visible'] = ![], this['main']['box_3_show']['visible'] = !![], this['sendBox'] || this['getBoxList'](0x0), this['sendBox'] = !![], r_pqfdg && r_pqfdg['syClickOpenBox']();
  }, _h1uba['prototype']['getBoxList'] = function (r8ykm) {
    var eg7rp = this;r_pqfdg && r_pqfdg['syGetBoxList']({ 'page': r8ykm, 'count': 0xc })['then'](function (_h65u1) {
      var qegrm7 = _h65u1['data'];qegrm7['status'] == 0x3e9 ? qegrm7['data'] && qegrm7['data']['length'] && (eg7rp['boxlist'] = eg7rp['boxlist']['concat'](qegrm7['data']), r8ykm++, eg7rp['getBoxList'](r8ykm)) : eg7rp['boxListHandler']();
    });
  }, _h1uba['prototype']['copyText'] = function (xijoy2) {
    try {
      wx['setClipboardData']({ 'data': xijoy2, 'success': function (stx23z) {
          console['log']('复制成功:', stx23z);
        } });
    } catch (qfdn) {}
  }, _h1uba['prototype']['rolePriceHandler'] = function (fnp5c) {
    this['rolePriceData'] = JSON['parse'](fnp5c);switch (this['rolePriceData']['status']) {case 0x3e9:
        this['main']['box_2_lab_v_1']['text'] = (this['rolePriceData']['todayPrice'] || 0x0) + '/' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_v_2']['text'] = (this['rolePriceData']['allPrice'] || 0x0) + '/' + +this['tool']['data']['y'] + '元';break;case 0x3ea:
        break;case 0x3eb:
        break;}
  }, _h1uba['prototype']['roleError'] = function () {}, _h1uba['prototype']['boxListHandler'] = function () {
    var h6n5c = function (stzl23) {
      var hc_6n5 = kw7gmr['boxlist'][stzl23],
          xjo2iz = new r_dfnq['demoui']['BoxItemUI']();xjo2iz['icon']['skin'] = hc_6n5['icon'], xjo2iz['title']['text'] = hc_6n5['title'], xjo2iz['x'] = 0xa0 * (stzl23 % 0x3), xjo2iz['y'] = 0xa0 * (stzl23 / 0x3 ^ 0x0), kw7gmr['main']['box_3_panel']['addChild'](xjo2iz);var cd5fn6 = { 'appid': r_h_65c['sygame']['appid'], 'game_id': hc_6n5['game_id'], 'jump_appid': hc_6n5['jump_appid'], 'jump_path': hc_6n5['jump_path'], 'tunnel_id': hc_6n5['tunnel_id'], 'uv': 0x0, 'wecha_id': r_h_65c['sygame']['openid'] },
          dp5nf = hc_6n5['preview_img'],
          pgqd7 = hc_6n5['jump_type'],
          l2zt3s = hc_6n5['kf_session'];xjo2iz['on'](Laya['Event']['CLICK'], kw7gmr, function () {
        r_pqfdg && r_pqfdg['syClickBox']({ 'game_id': hc_6n5['game_id'], 'tunnel_id': hc_6n5['tunnel_id'], 'jump_appid': hc_6n5['jump_appid'], 'jump_path': hc_6n5['jump_path'] })['then'](function (c6_) {
          if (pgqd7 === '0') wx['navigateToMiniProgram']({ 'appId': cd5fn6['jump_appid'], 'path': cd5fn6['jump_path'], 'fail': function (ykow8i) {
              if (!dp5nf) return;wx['previewImage']({ 'urls': [dp5nf] });
            } });else {
            if (pgqd7 === '1') {
              if (!dp5nf) return;wx['previewImage']({ 'urls': [dp5nf] });
            } else {
              if (pgqd7 === '2') {
                if (!l2zt3s) return;wx['openCustomerServiceConversation']({ 'sessionFrom': l2zt3s, 'showMessageCard': !![], 'sendMessageTitle': '', 'sendMessagePath': '', 'sendMessageImg': '' });
              }
            }
          }
        });
      });
    },
        kw7gmr = this;for (var qfe = 0x0; qfe < this['boxlist']['length']; qfe++) {
      h6n5c(qfe);
    }
  }, _h1uba['prototype']['boxListError'] = function () {}, _h1uba['prototype']['boxClickHandler'] = function () {}, _h1uba['prototype']['iconPress'] = function (zx) {
    this['donwX'] = zx['target']['x'], this['donwY'] = zx['target']['y'], this['icon']['startDrag'](this['dragRect']), this['isMove'] = ![], this['isPress'] = !![];
  }, _h1uba['prototype']['iconMove'] = function (sixjz) {
    this['isMove'] = !![];
  }, _h1uba['prototype']['iconUp'] = function (rw8m7k) {
    var xst3z2 = rw8m7k['target']['x'],
        feqpdg = rw8m7k['target']['y'];this['icon']['stopDrag'](), xst3z2 == this['donwX'] && this['donwY'] == feqpdg && (this['isInitBoard'] || this['initBoard'](), this['showBoard']()), this['isMove'] = ![], this['isPress'] = ![];
  }, _h1uba;
}(),
    r_dfnq;(function (iy8kwo) {
  var u1a9$b;(function (jz2stx) {
    var qemg7 = function (xs3z2t) {
      r_hbau(zj2tx, xs3z2t);function zj2tx() {
        return xs3z2t['call'](this) || this;
      }return zj2tx['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), xs3z2t['prototype']['createChildren']['call'](this), this['createView'](iy8kwo['demoui']['BoxItemUI']['uiView']);
      }, zj2tx['uiView'] = { 'type': 'View', 'props': { 'width': 0xb4, 'height': 0xa0 }, 'child': [{ 'type': 'Image', 'props': { 'y': 0x3, 'x': 0x20, 'width': 0x73, 'var': 'icon', 'height': 0x73 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x79, 'x': -0x21, 'width': 0xb4, 'var': 'title', 'valign': 'middle', 'height': 0x22, 'fontSize': 0x16, 'color': '#441d1c', 'align': 'center' } }] }] }, zj2tx;
    }(laya['ui']['View']);jz2stx['BoxItemUI'] = qemg7;
  })(u1a9$b = iy8kwo['demoui'] || (iy8kwo['demoui'] = {}));
})(r_dfnq || (r_dfnq = {})), function (ki8jyo) {
  var h6u15_;(function (o2jizx) {
    var fepqnd = function (yij8o) {
      r_hbau(mwyo8, yij8o);function mwyo8() {
        return yij8o['call'](this) || this;
      }return mwyo8['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), yij8o['prototype']['createChildren']['call'](this), this['createView'](ki8jyo['demoui']['MainUI']['uiView']);
      }, mwyo8['uiView'] = { 'type': 'View', 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x2ee, 'top': 0x0, 'right': 0x0, 'left': 0x0, 'height': 0x536, 'bottom': 0x0 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x2ee, 'height': 0x536, 'centerY': 0x0 }, 'child': [{ 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x2ee, 'var': 'bg', 'height': 0x536 }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x2ee, 'visible': ![], 'var': 'box_1_show', 'height': 0x536, 'centerY': 0x0 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x253, 'x': 0x2e, 'width': 0x1d0, 'var': 'box_1_lab_info', 'leading': 0xa, 'height': 0x97, 'fontSize': 0x18, 'color': '#a959ee' } }, { 'type': 'HBox', 'props': { 'y': 0x2ee, 'x': 0x14, 'width': 0x1fe, 'space': 0x35, 'height': 0x78, 'align': 'top' }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x58, 'var': 'box_1_img_1', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_1', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0xa, 'x': 0xa, 'width': 0x58, 'var': 'box_1_img_2', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_2', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x14, 'x': 0x14, 'width': 0x58, 'var': 'box_1_img_3', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_3', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x1e, 'x': 0x1e, 'width': 0x58, 'var': 'box_1_img_4', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_4', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }] }] }, { 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'visible': ![], 'var': 'box_2_show' }, 'child': [{ 'type': 'HBox', 'props': { 'y': 0x220, 'x': 0x18, 'width': 0x1f4, 'space': 0x2c, 'height': 0x56, 'align': 'top' }, 'child': [{ 'type': 'Image', 'props': { 'y': 2.5, 'x': 0x0, 'width': 0x58, 'var': 'box_2_img_1', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_1', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0xc, 'x': 0xa, 'width': 0x58, 'var': 'box_2_img_2', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_2', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x16, 'x': 0x14, 'width': 0x58, 'var': 'box_2_img_3', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_3', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x20, 'x': 0x1e, 'width': 0x58, 'var': 'box_2_img_4', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_4', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x2a, 'x': 0x28, 'width': 0x58, 'var': 'box_2_img_5', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_5', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }] }, { 'type': 'Box', 'props': { 'y': 0x384, 'x': 0x0, 'width': 0x221, 'height': 0x44 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x0, 'x': 0x28, 'width': 0x122, 'var': 'box_2_lab_m_1', 'text': '方法一\uFF1A单日充值1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300' } }, { 'type': 'Text', 'props': { 'y': 0x1e, 'x': 0x28, 'width': 0x122, 'var': 'box_2_lab_m_2', 'text': '方法一\uFF1A历史累计充值1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300' } }, { 'type': 'Text', 'props': { 'y': 0x0, 'x': 0x141, 'width': 0xa4, 'var': 'box_2_lab_v_1', 'text': '1000/1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300', 'align': 'right' } }, { 'type': 'Text', 'props': { 'y': 0x1e, 'x': 0x141, 'width': 0xa4, 'var': 'box_2_lab_v_2', 'text': '1000/1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300', 'align': 'right' } }] }, { 'type': 'Image', 'props': { 'y': 0x1aa, 'x': 0x159, 'width': 0x66, 'var': 'box_2_btn_get', 'stateNum': 0x1, 'height': 0x26 } }, { 'type': 'Image', 'props': { 'y': 0x1aa, 'x': 0x159, 'width': 0x66, 'var': 'box_2_btn_copy', 'stateNum': 0x1, 'height': 0x26 } }, { 'type': 'Button', 'props': { 'y': 0x1d2, 'x': 0x126, 'width': 0xc9, 'var': 'box_2_addclick', 'stateNum': 0x1, 'height': 0x1b } }, { 'type': 'Text', 'props': { 'y': 0x13c, 'x': 0x17a, 'width': 0xa3, 'var': 'box_2_lab_wx', 'height': 0x1f, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'left' } }] }, { 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'visible': ![], 'var': 'box_3_show' }, 'child': [{ 'type': 'Panel', 'props': { 'y': 0xf5, 'x': 0x10, 'width': 0x201, 'var': 'box_3_panel', 'vScrollBarSkin': '', 'height': 0x29e } }] }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0x0, 'width': 0xbb, 'var': 'btn_1', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0xba, 'width': 0xbb, 'var': 'btn_2', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0x177, 'width': 0xbb, 'var': 'btn_3', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x203, 'x': 0x22e, 'width': 0x25, 'var': 'btn_close', 'height': 0x8f } }, { 'type': 'Box', 'props': { 'width': 0x2ee, 'visible': ![], 'var': 'box_help', 'height': 0x536 }, 'child': [{ 'type': 'Sprite', 'props': { 'y': 0x0, 'x': 0x0, 'mouseThrough': ![], 'alpha': 0.7 }, 'child': [{ 'type': 'Rect', 'props': { 'width': 0x2ee, 'lineWidth': 0x1, 'height': 0x536, 'fillColor': '#000000' } }] }, { 'type': 'Image', 'props': { 'y': 0x158, 'x': 0x28, 'width': 0x1d2, 'var': 'box_help_bg', 'height': 0x203 }, 'child': [{ 'type': 'Button', 'props': { 'y': -0x1, 'x': 0x1a0, 'width': 0x33, 'var': 'box_help_close', 'height': 0x28 } }, { 'type': 'Image', 'props': { 'y': 0x3f, 'x': 0x98, 'width': 0xa0, 'var': 'box_help_qrcode', 'height': 0xa0 } }] }] }] }] }] }, mwyo8;
    }(laya['ui']['View']);o2jizx['MainUI'] = fepqnd;
  })(h6u15_ = ki8jyo['demoui'] || (ki8jyo['demoui'] = {}));
}(r_dfnq || (r_dfnq = {})), function (gpqed) {
  var stzl3v;(function (npfedq) {
    var k8r7w = function (zixjo2) {
      r_hbau(ha_1u6, zixjo2);function ha_1u6() {
        return zixjo2['call'](this) || this;
      }return ha_1u6['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), zixjo2['prototype']['createChildren']['call'](this), this['createView'](gpqed['demoui']['ToastUI']['uiView']);
      }, ha_1u6['uiView'] = { 'type': 'View', 'props': { 'width': 0x2ee, 'height': 0x536 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x12c, 'height': 0x32, 'centerY': 0x0, 'centerX': 0x0 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x12c, 'height': 0x32, 'centerX': 0x0, 'alpha': 0.5 }, 'child': [{ 'type': 'Rect', 'props': { 'width': 0x12c, 'lineWidth': 0x1, 'height': 0x32, 'fillColor': '#382f2f' } }] }, { 'type': 'Text', 'props': { 'width': 0x12c, 'var': 'lab_msg', 'valign': 'middle', 'text': 'text', 'height': 0x32, 'fontSize': 0x18, 'color': '#ffffff', 'align': 'center' } }] }] }, ha_1u6;
    }(laya['ui']['View']);npfedq['ToastUI'] = k8r7w;
  })(stzl3v = gpqed['demoui'] || (gpqed['demoui'] = {}));
}(r_dfnq || (r_dfnq = {}));var r_fpgqe = function () {
  function wmk7r() {}return wmk7r['init'] = function () {
    !this['ui'] && (this['ui'] = new r_dfnq['demoui']['ToastUI'](), this['ui']['visible'] = ![], Laya['stage']['addChild'](this['ui']));
  }, wmk7r['msg'] = function (uab_h1) {
    var ztj2s = this;!this['ui'] && wmk7r['init'](), this['ui']['visible'] = !![], this['ui']['lab_msg']['text'] = uab_h1, clearTimeout(this['interval']), this['interval'] = setTimeout(function () {
      ztj2s['ui']['visible'] = ![];
    }, 0x7d0);
  }, wmk7r;
}();window['minitool'] = r_edgq7p;