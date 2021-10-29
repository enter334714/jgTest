var k = wx.$f;
var fzx7r8 = this && this['__extends'] || function () {
  var ht5qk0 = function (_4kq05, swex) {
    return ht5qk0 = Object['setPrototypeOf'] || { '__proto__': [] } instanceof Array && function (wsdnc, mfbivu) {
      wsdnc['__proto__'] = mfbivu;
    } || function (xn8ez, t0mqf) {
      for (var kq45_ in t0mqf) if (t0mqf['hasOwnProperty'](kq45_)) xn8ez[kq45_] = t0mqf[kq45_];
    }, ht5qk0(_4kq05, swex);
  };return function (z$r78, ya3$p7) {
    ht5qk0(z$r78, ya3$p7);function q0kt5() {
      this['constructor'] = z$r78;
    }z$r78['prototype'] = ya3$p7 === null ? Object['create'](ya3$p7) : (q0kt5['prototype'] = ya3$p7['prototype'], new q0kt5());
  };
}(),
    ftfmi0 = window['Sygame'],
    fh0q_k = ![],
    fswdoc = function () {
  function c426jo() {}return c426jo['init'] = function () {
    fh0q_k ? this['sygame'] = { 'channel': '3477d2273abd484ba2a0e04ad4971b3c', 'role_id': undefined, 'openid': 'oxmOf5biumkGash-Xht9FVAlswVk', 'appid': 'wx2936121c4817bf46' } : this['sygame'] = ftfmi0;
  }, c426jo['getTimeStamp'] = function () {
    return new Date()['getTime']();
  }, c426jo['setResMap'] = function (hmtb, $p37) {
    this['resMap'][hmtb] = hmtb + '?' + $p37;
  }, c426jo['getResMap'] = function (nwsdx) {
    return this['resMap'][nwsdx];
  }, c426jo['resMap'] = {}, c426jo;
}(),
    fvmfub = function () {
  function jsod6() {
    this['getIcon'] = 'https://wx.11babay.cn/uploads/f/fkccc1532944783/5/2/c/7/60dc442c4fbc5.png', this['copyIcon'] = 'https://wx.11babay.cn/uploads/f/fkccc1532944783/3/0/1/7/60dc4409dce39.png', fswdoc['init'](), this['postSidebarApi']();
  }return jsod6['prototype']['send'] = function (k564, erz87, t5hq0k, y8r7$, biv1m) {
    y8r7$ === void 0x0 && (y8r7$ = 'get');biv1m === void 0x0 && (biv1m = '' || null);var njdwcs = new Laya['HttpRequest']();njdwcs['http']['timeout'] = 0x2710, njdwcs['once'](Laya['Event']['COMPLETE'], this, erz87), njdwcs['once'](Laya['Event']['ERROR'], this, t5hq0k), njdwcs['send'](k564, biv1m, y8r7$, 'text');
  }, jsod6['prototype']['postSidebarApi'] = function () {
    this['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=sidebarApi&channel=' + fswdoc['sygame']['channel'], this['completeHandler'], this['errorHandler']);
  }, jsod6['prototype']['completeHandler'] = function (zwnxe) {
    var r7$3ay = JSON['parse'](zwnxe);console['log'](r7$3ay);switch (r7$3ay['status']) {case 0x3e9:
        var t5k = [];r7$3ay['msg']['basics_image_url'] && t5k['push']({ 'url': r7$3ay['msg']['basics_image_url'], 'type': Laya['Loader']['IMAGE'] }), r7$3ay['msg']['public_code'] && t5k['push']({ 'url': r7$3ay['msg']['public_code'], 'type': Laya['Loader']['IMAGE'] }), r7$3ay['msg']['vip_customer_service'] && t5k['push']({ 'url': r7$3ay['msg']['vip_customer_service'], 'type': Laya['Loader']['IMAGE'] }), r7$3ay['msg']['vip_customer_service_not_add'] && t5k['push']({ 'url': r7$3ay['msg']['vip_customer_service_not_add'], 'type': Laya['Loader']['IMAGE'] }), r7$3ay['msg']['game_center_image_url'] && t5k['push']({ 'url': r7$3ay['msg']['game_center_image_url'], 'type': Laya['Loader']['IMAGE'] }), r7$3ay['msg']['vip_qrcode'] && t5k['push']({ 'url': r7$3ay['msg']['vip_qrcode'], 'type': Laya['Loader']['IMAGE'] }), r7$3ay['msg']['getIcon'] && t5k['push']({ 'url': this['getIcon'], 'type': Laya['Loader']['IMAGE'] }), r7$3ay['msg']['copyIcon'] && t5k['push']({ 'url': this['copyIcon'], 'type': Laya['Loader']['IMAGE'] });for (var f0tqmh = 0x0, c_46 = r7$3ay['msg']['follow_gift_list']; f0tqmh < c_46['length']; f0tqmh++) {
          var h_q5 = c_46[f0tqmh];t5k['push']({ 'url': h_q5['url'], 'type': Laya['Loader']['IMAGE'] });
        }for (var scojd = 0x0, t5q0hk = r7$3ay['msg']['vip_box_list']; scojd < t5q0hk['length']; scojd++) {
          var h_q5 = t5q0hk[scojd];t5k['push']({ 'url': h_q5['url'], 'type': Laya['Loader']['IMAGE'] });
        }for (var r37$ya = 0x0; r37$ya < t5k['length']; r37$ya++) {
          fswdoc['setResMap'](t5k[r37$ya]['url'], fswdoc['getTimeStamp']()), t5k[r37$ya]['url'] = fswdoc['getResMap'](t5k[r37$ya]['url']);
        }Laya['loader']['load'](t5k, Laya['Handler']['create'](this, this['initGame'])), this['data'] = r7$3ay['msg'];break;case 0x3ea:
        fugb9['msg']('空的游戏channel');break;case 0x3eb:
        fugb9['msg']('错误的游戏channel');break;case 0x3ec:
        fugb9['msg']('未找到对应游戏大类');break;case 0x3ed:
        fugb9['msg']('未设置侧边栏');break;}
  }, jsod6['prototype']['errorHandler'] = function (g9b) {}, jsod6['prototype']['initGame'] = function () {
    var c6j42 = new fcjo2d6(this);c6j42['show']();
  }, jsod6;
}(),
    fcjo2d6 = function () {
  function ndsxjw(mq0fth) {
    this['page'] = 0x3, this['rolePriceData'] = {}, this['boxlist'] = [], this['donwX'] = 0x0, this['downY'] = 0x0, this['tool'] = mq0fth;
  }return ndsxjw['prototype']['setChildMouseThroughs'] = function (o462cj) {
    var ocdj6s = o462cj['_childs'] || [];for (var qh5_ = 0x0; qh5_ < ocdj6s['length']; qh5_++) {
      ocdj6s[qh5_] && (ocdj6s[qh5_]['mouseThrough'] = !![]);
    }
  }, ndsxjw['prototype']['show'] = function () {
    if (this['tool']['data']['on'] === '1') {
      this['main'] = new fbmvu1i['demoui']['MainUI'](), Laya['stage']['addChild'](this['main']), this['main']['mouseThrough'] = !![];var jcsdnw = this['main']['_childs'] || [];for (var $8zr37 = 0x0; $8zr37 < jcsdnw['length']; $8zr37++) {
        jcsdnw[$8zr37]['mouseThrough'] = !![];
      }this['setChildMouseThroughs'](this['main']['_childs']), this['setChildMouseThroughs'](this['main']['_childs'][0x0]), this['initIcon'](), this['initEvent'](), this['initView'](), fugb9['init']();
    }
  }, ndsxjw['prototype']['initView'] = function () {
    var imfbv = this,
        $r3ay7 = this['tool']['data']['follow_down_words']['replace'](/\\n/g, '\x0a');this['main']['box_1_lab_info']['text'] = $r3ay7;for (var nwsde = 0x1; nwsde <= this['tool']['data']['follow_gift_list']['length']; nwsde++) {
      var vub1i9 = this['tool']['data']['follow_gift_list'][nwsde - 0x1];this['main']['box_1_img_' + nwsde]['skin'] = vub1i9['url'], this['main']['box_1_lab_' + nwsde]['text'] = vub1i9['name'];
    }for (var nwsde = 0x1; nwsde <= this['tool']['data']['vip_box_list']['length']; nwsde++) {
      var vub1i9 = this['tool']['data']['vip_box_list'][nwsde - 0x1];this['main']['box_2_img_' + nwsde]['skin'] = vub1i9['url'], this['main']['box_2_lab_' + nwsde]['text'] = vub1i9['name'];
    }this['main']['box_2_lab_m_1']['text'] = '方法一：单日充值' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_m_2']['text'] = '方法二：历史累计充值' + +this['tool']['data']['y'] + '元', this['main']['box_2_lab_v_1']['text'] = (this['rolePriceData']['todayPrice'] || 0x0) + '/' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_v_2']['text'] = (this['rolePriceData']['allPrice'] || 0x0) + '/' + +this['tool']['data']['y'] + '元', this['main']['box_2_btn_copy']['skin'] = this['tool']['copyIcon'], this['main']['box_2_btn_get']['skin'] = this['tool']['getIcon'], this['main']['box_2_btn_copy']['visible'] = ![], this['main']['box_2_btn_get']['on'](Laya['Event']['CLICK'], this, function () {
      if (imfbv['rolePriceData']['is_vip'] == 0x0) {
        fugb9['msg']('请先获取vip资格');return;
      }imfbv['main']['box_2_lab_wx']['text'] = imfbv['tool']['data']['vip_wx'], imfbv['main']['box_2_btn_copy']['visible'] = !![];
    }), this['main']['box_2_btn_copy']['on'](Laya['Event']['CLICK'], this, function () {
      imfbv['copyText'](imfbv['tool']['data']['vip_wx']);
    }), this['main']['box_2_addclick']['on'](Laya['Event']['CLICK'], this, function () {
      if (imfbv['rolePriceData']['is_vip'] == 0x0) return;imfbv['main']['box_help']['visible'] = !![];
    }), this['main']['box_help_close']['on'](Laya['Event']['CLICK'], this, function () {
      imfbv['main']['box_help']['visible'] = ![];
    }), this['main']['box_help_bg']['skin'] = this['tool']['data']['vip_customer_service_not_add'], this['main']['box_help_qrcode']['skin'] = this['tool']['data']['vip_qrcode'], this['main']['box_help_qrcode']['scaleX'] = 0xa0 / this['main']['box_help_qrcode']['width'], this['main']['box_help_qrcode']['scaleY'] = 0xa0 / this['main']['box_help_qrcode']['width'], this['main']['box_3_panel']['vScrollBar']['visible'] = ![], this['main']['box_3_panel']['vScrollBarSkin'] = 'common_atlas/scrollBar.png';
  }, ndsxjw['prototype']['initIcon'] = function () {
    this['icon'] = new Laya['Image'](), this['icon']['skin'] = this['tool']['data']['basics_image_url'], this['icon']['x'] = 0x0, this['icon']['y'] = 0xc8, this['icon']['width'] = 0x66, this['icon']['height'] = 0x6f, this['main']['addChild'](this['icon']), this['icon']['on'](Laya['Event']['MOUSE_DOWN'], this, this['iconPress']), this['icon']['on'](Laya['Event']['MOUSE_UP'], this, this['iconUp']), this['icon']['on'](Laya['Event']['MOUSE_WHEEL'], this, this['iconMove']), this['dragRect'] = new Laya['Rectangle'](-this['icon']['width'] / 0x2, 0x0, Laya['stage']['width'], Laya['stage']['height'] - this['icon']['height'] / 0x2);
  }, ndsxjw['prototype']['initEvent'] = function () {
    var y3r87 = this;this['main']['btn_1']['on'](Laya['Event']['CLICK'], this, function () {
      if (y3r87['page'] == 0x1) return;y3r87['page1']();
    }), this['main']['btn_2']['on'](Laya['Event']['CLICK'], this, function () {
      if (y3r87['page'] == 0x2) return;y3r87['page2']();
    }), this['main']['btn_3']['on'](Laya['Event']['CLICK'], this, function () {
      if (y3r87['page'] == 0x3) return;y3r87['page3']();
    }), this['main']['btn_close']['on'](Laya['Event']['CLICK'], this, function () {
      y3r87['main']['bg']['x'] = -0x2ee, y3r87['icon']['visible'] = !![];
    });
  }, ndsxjw['prototype']['initBoard'] = function () {
    this['isInitBoard'] = !![], this['page1']();
  }, ndsxjw['prototype']['showBoard'] = function () {
    this['main']['bg']['x'] = 0x0, this['icon']['visible'] = ![], this['tool']['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=sidebarApiRoleId&role_id=' + fswdoc['sygame']['role_id'] + '&channel=' + fswdoc['sygame']['channel'], this['rolePriceHandler']['bind'](this), this['roleError']['bind'](this));
  }, ndsxjw['prototype']['page1'] = function () {
    this['page'] = 0x1, this['main']['bg']['skin'] = this['tool']['data']['public_code'], this['main']['box_1_show']['visible'] = !![], this['main']['box_2_show']['visible'] = ![], this['main']['box_3_show']['visible'] = ![];
  }, ndsxjw['prototype']['page2'] = function () {
    this['page'] = 0x2, this['main']['bg']['skin'] = this['tool']['data']['vip_customer_service'], this['main']['box_1_show']['visible'] = ![], this['main']['box_2_show']['visible'] = !![], this['main']['box_3_show']['visible'] = ![];
  }, ndsxjw['prototype']['page3'] = function () {
    this['page'] = 0x3, this['main']['bg']['skin'] = this['tool']['data']['game_center_image_url'], this['main']['box_1_show']['visible'] = ![], this['main']['box_2_show']['visible'] = ![], this['main']['box_3_show']['visible'] = !![], this['sendBox'] || this['getBoxList'](0x0), this['sendBox'] = !![], ftfmi0 && ftfmi0['syClickOpenBox']();
  }, ndsxjw['prototype']['getBoxList'] = function (tfhim) {
    var wcjsnd = this;ftfmi0 && ftfmi0['syGetBoxList']({ 'page': tfhim, 'count': 0xc })['then'](function (u1v9bg) {
      var dcs = u1v9bg['data'];dcs['status'] == 0x3e9 ? dcs['data'] && dcs['data']['length'] && (wcjsnd['boxlist'] = wcjsnd['boxlist']['concat'](dcs['data']), tfhim++, wcjsnd['getBoxList'](tfhim)) : wcjsnd['boxListHandler']();
    });
  }, ndsxjw['prototype']['copyText'] = function (zenx8) {
    try {
      wx['setClipboardData']({ 'data': zenx8, 'success': function (nzrxe8) {
          console['log']('复制成功:', nzrxe8);
        } });
    } catch (z38$7) {}
  }, ndsxjw['prototype']['rolePriceHandler'] = function (vmfitb) {
    this['rolePriceData'] = JSON['parse'](vmfitb);switch (this['rolePriceData']['status']) {case 0x3e9:
        this['main']['box_2_lab_v_1']['text'] = (this['rolePriceData']['todayPrice'] || 0x0) + '/' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_v_2']['text'] = (this['rolePriceData']['allPrice'] || 0x0) + '/' + +this['tool']['data']['y'] + '元';break;case 0x3ea:
        break;case 0x3eb:
        break;}
  }, ndsxjw['prototype']['roleError'] = function () {}, ndsxjw['prototype']['boxListHandler'] = function () {
    var q_h05 = function (h0itm) {
      var ay37r = ibfmu['boxlist'][h0itm],
          timbfv = new fbmvu1i['demoui']['BoxItemUI']();timbfv['icon']['skin'] = ay37r['icon'], timbfv['title']['text'] = ay37r['title'], timbfv['x'] = 0xa0 * (h0itm % 0x3), timbfv['y'] = 0xa0 * (h0itm / 0x3 ^ 0x0), ibfmu['main']['box_3_panel']['addChild'](timbfv);var e8r7xz = { 'appid': fswdoc['sygame']['appid'], 'game_id': ay37r['game_id'], 'jump_appid': ay37r['jump_appid'], 'jump_path': ay37r['jump_path'], 'tunnel_id': ay37r['tunnel_id'], 'uv': 0x0, 'wecha_id': fswdoc['sygame']['openid'] },
          q0fh5 = ay37r['preview_img'],
          btifv = ay37r['jump_type'],
          enwd = ay37r['kf_session'];timbfv['on'](Laya['Event']['CLICK'], ibfmu, function () {
        ftfmi0 && ftfmi0['syClickBox']({ 'game_id': ay37r['game_id'], 'tunnel_id': ay37r['tunnel_id'], 'jump_appid': ay37r['jump_appid'], 'jump_path': ay37r['jump_path'] })['then'](function (sxewnd) {
          if (btifv === '0') wx['navigateToMiniProgram']({ 'appId': e8r7xz['jump_appid'], 'path': e8r7xz['jump_path'], 'fail': function (v9b1gu) {
              if (!q0fh5) return;wx['previewImage']({ 'urls': [q0fh5] });
            } });else {
            if (btifv === '1') {
              if (!q0fh5) return;wx['previewImage']({ 'urls': [q0fh5] });
            } else {
              if (btifv === '2') {
                if (!enwd) return;wx['openCustomerServiceConversation']({ 'sessionFrom': enwd, 'showMessageCard': !![], 'sendMessageTitle': '', 'sendMessagePath': '', 'sendMessageImg': '' });
              }
            }
          }
        });
      });
    },
        ibfmu = this;for (var b1uv9g = 0x0; b1uv9g < this['boxlist']['length']; b1uv9g++) {
      q_h05(b1uv9g);
    }
  }, ndsxjw['prototype']['boxListError'] = function () {}, ndsxjw['prototype']['boxClickHandler'] = function () {}, ndsxjw['prototype']['iconPress'] = function (w8zn) {
    this['donwX'] = w8zn['target']['x'], this['donwY'] = w8zn['target']['y'], this['icon']['startDrag'](this['dragRect']), this['isMove'] = ![], this['isPress'] = !![];
  }, ndsxjw['prototype']['iconMove'] = function (imbuf) {
    this['isMove'] = !![];
  }, ndsxjw['prototype']['iconUp'] = function (gv91b) {
    var h5tkq = gv91b['target']['x'],
        vufim = gv91b['target']['y'];this['icon']['stopDrag'](), h5tkq == this['donwX'] && this['donwY'] == vufim && (this['isInitBoard'] || this['initBoard'](), this['showBoard']()), this['isMove'] = ![], this['isPress'] = ![];
  }, ndsxjw;
}(),
    fbmvu1i;(function (ojsc) {
  var zxern;(function ($3y8r7) {
    var viuf = function (b1iuv9) {
      fzx7r8(p7ya3$, b1iuv9);function p7ya3$() {
        return b1iuv9['call'](this) || this;
      }return p7ya3$['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), b1iuv9['prototype']['createChildren']['call'](this), this['createView'](ojsc['demoui']['BoxItemUI']['uiView']);
      }, p7ya3$['uiView'] = { 'type': 'View', 'props': { 'width': 0xb4, 'height': 0xa0 }, 'child': [{ 'type': 'Image', 'props': { 'y': 0x3, 'x': 0x20, 'width': 0x73, 'var': 'icon', 'height': 0x73 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x79, 'x': -0x21, 'width': 0xb4, 'var': 'title', 'valign': 'middle', 'height': 0x22, 'fontSize': 0x16, 'color': '#441d1c', 'align': 'center' } }] }] }, p7ya3$;
    }(laya['ui']['View']);$3y8r7['BoxItemUI'] = viuf;
  })(zxern = ojsc['demoui'] || (ojsc['demoui'] = {}));
})(fbmvu1i || (fbmvu1i = {})), function (jsnwcd) {
  var cd6o2;(function (sncjd) {
    var zeswn = function (uv9bi1) {
      fzx7r8(mfhit, uv9bi1);function mfhit() {
        return uv9bi1['call'](this) || this;
      }return mfhit['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), uv9bi1['prototype']['createChildren']['call'](this), this['createView'](jsnwcd['demoui']['MainUI']['uiView']);
      }, mfhit['uiView'] = { 'type': 'View', 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x2ee, 'top': 0x0, 'right': 0x0, 'left': 0x0, 'height': 0x536, 'bottom': 0x0 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x2ee, 'height': 0x536, 'centerY': 0x0 }, 'child': [{ 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x2ee, 'var': 'bg', 'height': 0x536 }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x2ee, 'visible': ![], 'var': 'box_1_show', 'height': 0x536, 'centerY': 0x0 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x253, 'x': 0x2e, 'width': 0x1d0, 'var': 'box_1_lab_info', 'leading': 0xa, 'height': 0x97, 'fontSize': 0x18, 'color': '#a959ee' } }, { 'type': 'HBox', 'props': { 'y': 0x2ee, 'x': 0x14, 'width': 0x1fe, 'space': 0x35, 'height': 0x78, 'align': 'top' }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x58, 'var': 'box_1_img_1', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_1', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0xa, 'x': 0xa, 'width': 0x58, 'var': 'box_1_img_2', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_2', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x14, 'x': 0x14, 'width': 0x58, 'var': 'box_1_img_3', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_3', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x1e, 'x': 0x1e, 'width': 0x58, 'var': 'box_1_img_4', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_4', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }] }] }, { 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'visible': ![], 'var': 'box_2_show' }, 'child': [{ 'type': 'HBox', 'props': { 'y': 0x220, 'x': 0x18, 'width': 0x1f4, 'space': 0x2c, 'height': 0x56, 'align': 'top' }, 'child': [{ 'type': 'Image', 'props': { 'y': 2.5, 'x': 0x0, 'width': 0x58, 'var': 'box_2_img_1', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_1', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0xc, 'x': 0xa, 'width': 0x58, 'var': 'box_2_img_2', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_2', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x16, 'x': 0x14, 'width': 0x58, 'var': 'box_2_img_3', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_3', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x20, 'x': 0x1e, 'width': 0x58, 'var': 'box_2_img_4', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_4', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x2a, 'x': 0x28, 'width': 0x58, 'var': 'box_2_img_5', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_5', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }] }, { 'type': 'Box', 'props': { 'y': 0x384, 'x': 0x0, 'width': 0x221, 'height': 0x44 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x0, 'x': 0x28, 'width': 0x122, 'var': 'box_2_lab_m_1', 'text': '方法一\uFF1A单日充值1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300' } }, { 'type': 'Text', 'props': { 'y': 0x1e, 'x': 0x28, 'width': 0x122, 'var': 'box_2_lab_m_2', 'text': '方法一\uFF1A历史累计充值1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300' } }, { 'type': 'Text', 'props': { 'y': 0x0, 'x': 0x141, 'width': 0xa4, 'var': 'box_2_lab_v_1', 'text': '1000/1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300', 'align': 'right' } }, { 'type': 'Text', 'props': { 'y': 0x1e, 'x': 0x141, 'width': 0xa4, 'var': 'box_2_lab_v_2', 'text': '1000/1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300', 'align': 'right' } }] }, { 'type': 'Image', 'props': { 'y': 0x1aa, 'x': 0x159, 'width': 0x66, 'var': 'box_2_btn_get', 'stateNum': 0x1, 'height': 0x26 } }, { 'type': 'Image', 'props': { 'y': 0x1aa, 'x': 0x159, 'width': 0x66, 'var': 'box_2_btn_copy', 'stateNum': 0x1, 'height': 0x26 } }, { 'type': 'Button', 'props': { 'y': 0x1d2, 'x': 0x126, 'width': 0xc9, 'var': 'box_2_addclick', 'stateNum': 0x1, 'height': 0x1b } }, { 'type': 'Text', 'props': { 'y': 0x13c, 'x': 0x17a, 'width': 0xa3, 'var': 'box_2_lab_wx', 'height': 0x1f, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'left' } }] }, { 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'visible': ![], 'var': 'box_3_show' }, 'child': [{ 'type': 'Panel', 'props': { 'y': 0xf5, 'x': 0x10, 'width': 0x201, 'var': 'box_3_panel', 'vScrollBarSkin': '', 'height': 0x29e } }] }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0x0, 'width': 0xbb, 'var': 'btn_1', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0xba, 'width': 0xbb, 'var': 'btn_2', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0x177, 'width': 0xbb, 'var': 'btn_3', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x203, 'x': 0x22e, 'width': 0x25, 'var': 'btn_close', 'height': 0x8f } }, { 'type': 'Box', 'props': { 'width': 0x2ee, 'visible': ![], 'var': 'box_help', 'height': 0x536 }, 'child': [{ 'type': 'Sprite', 'props': { 'y': 0x0, 'x': 0x0, 'mouseThrough': ![], 'alpha': 0.7 }, 'child': [{ 'type': 'Rect', 'props': { 'width': 0x2ee, 'lineWidth': 0x1, 'height': 0x536, 'fillColor': '#000000' } }] }, { 'type': 'Image', 'props': { 'y': 0x158, 'x': 0x28, 'width': 0x1d2, 'var': 'box_help_bg', 'height': 0x203 }, 'child': [{ 'type': 'Button', 'props': { 'y': -0x1, 'x': 0x1a0, 'width': 0x33, 'var': 'box_help_close', 'height': 0x28 } }, { 'type': 'Image', 'props': { 'y': 0x3f, 'x': 0x98, 'width': 0xa0, 'var': 'box_help_qrcode', 'height': 0xa0 } }] }] }] }] }] }, mfhit;
    }(laya['ui']['View']);sncjd['MainUI'] = zeswn;
  })(cd6o2 = jsnwcd['demoui'] || (jsnwcd['demoui'] = {}));
}(fbmvu1i || (fbmvu1i = {})), function (x8r) {
  var $r3a;(function (fivb) {
    var hi0mf = function (xnsjw) {
      fzx7r8(h5qk0t, xnsjw);function h5qk0t() {
        return xnsjw['call'](this) || this;
      }return h5qk0t['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), xnsjw['prototype']['createChildren']['call'](this), this['createView'](x8r['demoui']['ToastUI']['uiView']);
      }, h5qk0t['uiView'] = { 'type': 'View', 'props': { 'width': 0x2ee, 'height': 0x536 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x12c, 'height': 0x32, 'centerY': 0x0, 'centerX': 0x0 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x12c, 'height': 0x32, 'centerX': 0x0, 'alpha': 0.5 }, 'child': [{ 'type': 'Rect', 'props': { 'width': 0x12c, 'lineWidth': 0x1, 'height': 0x32, 'fillColor': '#382f2f' } }] }, { 'type': 'Text', 'props': { 'width': 0x12c, 'var': 'lab_msg', 'valign': 'middle', 'text': 'text', 'height': 0x32, 'fontSize': 0x18, 'color': '#ffffff', 'align': 'center' } }] }] }, h5qk0t;
    }(laya['ui']['View']);fivb['ToastUI'] = hi0mf;
  })($r3a = x8r['demoui'] || (x8r['demoui'] = {}));
}(fbmvu1i || (fbmvu1i = {}));var fugb9 = function () {
  function imtbhf() {}return imtbhf['init'] = function () {
    !this['ui'] && (this['ui'] = new fbmvu1i['demoui']['ToastUI'](), this['ui']['visible'] = ![], Laya['stage']['addChild'](this['ui']));
  }, imtbhf['msg'] = function (enws) {
    var wcojd = this;!this['ui'] && imtbhf['init'](), this['ui']['visible'] = !![], this['ui']['lab_msg']['text'] = enws, clearTimeout(this['interval']), this['interval'] = setTimeout(function () {
      wcojd['ui']['visible'] = ![];
    }, 0x7d0);
  }, imtbhf;
}();window['minitool'] = fvmfub;