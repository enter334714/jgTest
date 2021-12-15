var c = wx.$o;
var o_zhcbp = this && this['__extends'] || function () {
  var rm5pt = function (fx491w, f1w9i2) {
    return rm5pt = Object['setPrototypeOf'] || { '__proto__': [] } instanceof Array && function (gb4zo, z8hpr) {
      gb4zo['__proto__'] = z8hpr;
    } || function (e_y3u, pc8zb) {
      for (var lnv_u in pc8zb) if (pc8zb['hasOwnProperty'](lnv_u)) e_y3u[lnv_u] = pc8zb[lnv_u];
    }, rm5pt(fx491w, f1w9i2);
  };return function (vl3_n, pmcr5t) {
    rm5pt(vl3_n, pmcr5t);function y$e0jk() {
      this['constructor'] = vl3_n;
    }vl3_n['prototype'] = pmcr5t === null ? Object['create'](pmcr5t) : (y$e0jk['prototype'] = pmcr5t['prototype'], new y$e0jk());
  };
}(),
    o_w21fid = window['Sygame'],
    o_aid126 = ![],
    o_z8chbp = function () {
  function _enkyu() {}return _enkyu['init'] = function () {
    o_aid126 ? this['sygame'] = { 'channel': '3477d2273abd484ba2a0e04ad4971b3c', 'role_id': undefined, 'openid': 'oxmOf5biumkGash-Xht9FVAlswVk', 'appid': 'wx2936121c4817bf46' } : this['sygame'] = o_w21fid;
  }, _enkyu['getTimeStamp'] = function () {
    return new Date()['getTime']();
  }, _enkyu['setResMap'] = function (og9bx, g9wfx) {
    this['resMap'][og9bx] = og9bx + '?' + g9wfx;
  }, _enkyu['getResMap'] = function (an3lu) {
    return this['resMap'][an3lu];
  }, _enkyu['resMap'] = {}, _enkyu;
}(),
    o_of4xg9 = function () {
  function b8czph() {
    this['getIcon'] = 'https://wx.11babay.cn/uploads/f/fkccc1532944783/5/2/c/7/60dc442c4fbc5.png', this['copyIcon'] = 'https://wx.11babay.cn/uploads/f/fkccc1532944783/3/0/1/7/60dc4409dce39.png', o_z8chbp['init'](), this['getBoxCheckoutCode']();
  }return b8czph['prototype']['send'] = function (unvy_3, lai6, _3vlun, rz8mcp, zcbo8h) {
    rz8mcp === void 0x0 && (rz8mcp = 'get');zcbo8h === void 0x0 && (zcbo8h = '' || null);var oz4b = new Laya['HttpRequest']();oz4b['http']['timeout'] = 0x2710, oz4b['once'](Laya['Event']['COMPLETE'], this, lai6), oz4b['once'](Laya['Event']['ERROR'], this, _3vlun), oz4b['send'](unvy_3, zcbo8h, rz8mcp, 'text');
  }, b8czph['prototype']['postSidebarApi'] = function () {
    var u_ye3 = o_z8chbp['sygame']['openid'],
        _0keyu = '&channel=' + o_z8chbp['sygame']['channel'] + '&wecha_id=' + u_ye3;this['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=sidebarApi' + _0keyu, this['completeHandler'], this['errorHandler']);
  }, b8czph['prototype']['getBoxCheckoutCode'] = function () {
    var czr8m = Sygame['SY_CONF']['commitId'];this['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=getBoxCheckoutCode', this['getBoxCheckoutCodeRes'], this['errorHandler'], 'post', { 'commitId': czr8m });
  }, b8czph['prototype']['getBoxCheckoutCodeRes'] = function (gfxo) {
    var lav36 = JSON['parse'](gfxo);console['log']('getBoxCheckoutCode:', lav36);if (lav36['status'] == 0x3e9) {
      var qt5rsm = lav36['info'];qt5rsm == 0xfa1 ? this['postSidebarApi']() : console['error']('盛也盒子\x20不显示' + lav36);
    } else console['error']('盛也盒子 getBoxCheckoutCodeRes 其他错误' + lav36);
  }, b8czph['prototype']['completeHandler'] = function (_ulvn3) {
    var f21wi9 = JSON['parse'](_ulvn3);console['log'](f21wi9);switch (f21wi9['status']) {case 0x3e9:
        var u3ln = [];f21wi9['msg']['basics_image_url'] && u3ln['push']({ 'url': f21wi9['msg']['basics_image_url'], 'type': Laya['Loader']['IMAGE'] }), f21wi9['msg']['public_code'] && u3ln['push']({ 'url': f21wi9['msg']['public_code'], 'type': Laya['Loader']['IMAGE'] }), f21wi9['msg']['vip_customer_service'] && u3ln['push']({ 'url': f21wi9['msg']['vip_customer_service'], 'type': Laya['Loader']['IMAGE'] }), f21wi9['msg']['vip_customer_service_not_add'] && u3ln['push']({ 'url': f21wi9['msg']['vip_customer_service_not_add'], 'type': Laya['Loader']['IMAGE'] }), f21wi9['msg']['game_center_image_url'] && u3ln['push']({ 'url': f21wi9['msg']['game_center_image_url'], 'type': Laya['Loader']['IMAGE'] }), f21wi9['msg']['vip_qrcode'] && u3ln['push']({ 'url': f21wi9['msg']['vip_qrcode'], 'type': Laya['Loader']['IMAGE'] }), f21wi9['msg']['getIcon'] && u3ln['push']({ 'url': this['getIcon'], 'type': Laya['Loader']['IMAGE'] }), f21wi9['msg']['copyIcon'] && u3ln['push']({ 'url': this['copyIcon'], 'type': Laya['Loader']['IMAGE'] });for (var qstr = 0x0, bh8oc = f21wi9['msg']['follow_gift_list']; qstr < bh8oc['length']; qstr++) {
          var i6da21 = bh8oc[qstr];u3ln['push']({ 'url': i6da21['url'], 'type': Laya['Loader']['IMAGE'] });
        }for (var gbxo49 = 0x0, lvad3 = f21wi9['msg']['vip_box_list']; gbxo49 < lvad3['length']; gbxo49++) {
          var i6da21 = lvad3[gbxo49];u3ln['push']({ 'url': i6da21['url'], 'type': Laya['Loader']['IMAGE'] });
        }for (var kenuy_ = 0x0; kenuy_ < u3ln['length']; kenuy_++) {
          o_z8chbp['setResMap'](u3ln[kenuy_]['url'], o_z8chbp['getTimeStamp']()), u3ln[kenuy_]['url'] = o_z8chbp['getResMap'](u3ln[kenuy_]['url']);
        }Laya['loader']['load'](u3ln, Laya['Handler']['create'](this, this['initGame'])), this['data'] = f21wi9['msg'];break;case 0x3ea:
        o_f4og['msg']('空的游戏channel');break;case 0x3eb:
        o_f4og['msg']('错误的游戏channel');break;case 0x3ec:
        o_f4og['msg']('未找到对应游戏大类');break;case 0x3ed:
        o_f4og['msg']('未设置侧边栏');break;}
  }, b8czph['prototype']['errorHandler'] = function (w4f9) {}, b8czph['prototype']['initGame'] = function () {
    var ifw = new o_u3va(this);ifw['show']();
  }, b8czph;
}(),
    o_u3va = function () {
  function ynk_ue(ny3v) {
    this['page'] = 0x3, this['rolePriceData'] = {}, this['boxlist'] = [], this['donwX'] = 0x0, this['downY'] = 0x0, this['tool'] = ny3v;
  }return ynk_ue['prototype']['setChildMouseThroughs'] = function (qtpr5) {
    var x9g4f = qtpr5['_childs'] || [];for (var zhcob8 = 0x0; zhcob8 < x9g4f['length']; zhcob8++) {
      x9g4f[zhcob8] && (x9g4f[zhcob8]['mouseThrough'] = !![]);
    }
  }, ynk_ue['prototype']['show'] = function () {
    if (this['tool']['data']['on'] === '1') {
      this['main'] = new o_uyke['demoui']['MainUI'](), Laya['stage']['addChild'](this['main']), this['main']['mouseThrough'] = !![];var fidw12 = this['main']['_childs'] || [];for (var vun_3 = 0x0; vun_3 < fidw12['length']; vun_3++) {
        fidw12[vun_3]['mouseThrough'] = !![];
      }this['setChildMouseThroughs'](this['main']['_childs']), this['setChildMouseThroughs'](this['main']['_childs'][0x0]), this['initIcon'](), this['initEvent'](), this['initView'](), o_f4og['init'](), this['main']['bg']['x'] = -0x2ee;
    }
  }, ynk_ue['prototype']['initView'] = function () {
    var crt = this,
        vnul_ = this['tool']['data']['follow_down_words']['replace'](/\\n/g, '\x0a');this['main']['box_1_lab_info']['text'] = vnul_;for (var qm5prt = 0x1; qm5prt <= this['tool']['data']['follow_gift_list']['length']; qm5prt++) {
      var f12iw = this['tool']['data']['follow_gift_list'][qm5prt - 0x1];this['main']['box_1_img_' + qm5prt]['skin'] = f12iw['url'], this['main']['box_1_lab_' + qm5prt]['text'] = f12iw['name'];
    }for (var qm5prt = 0x1; qm5prt <= this['tool']['data']['vip_box_list']['length']; qm5prt++) {
      var f12iw = this['tool']['data']['vip_box_list'][qm5prt - 0x1];this['main']['box_2_img_' + qm5prt]['skin'] = f12iw['url'], this['main']['box_2_lab_' + qm5prt]['text'] = f12iw['name'];
    }this['main']['box_2_lab_m_1']['text'] = '方法一：单日充值' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_m_2']['text'] = '方法二：历史累计充值' + +this['tool']['data']['y'] + '元', this['main']['box_2_lab_v_1']['text'] = (this['rolePriceData']['todayPrice'] || 0x0) + '/' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_v_2']['text'] = (this['rolePriceData']['allPrice'] || 0x0) + '/' + +this['tool']['data']['y'] + '元', this['main']['box_2_btn_copy']['skin'] = this['tool']['copyIcon'], this['main']['box_2_btn_get']['skin'] = this['tool']['getIcon'], this['main']['box_2_btn_copy']['visible'] = ![], this['main']['box_2_btn_get']['on'](Laya['Event']['CLICK'], this, function () {
      if (crt['rolePriceData']['is_vip'] == 0x0) {
        o_f4og['msg']('请先获取vip资格');return;
      }crt['main']['box_2_lab_wx']['text'] = this['rolePriceData']['vip_wx'], crt['main']['box_2_btn_copy']['visible'] = !![];
    }), this['main']['box_2_btn_copy']['on'](Laya['Event']['CLICK'], this, function () {
      crt['copyText'](this['rolePriceData']['vip_wx']);
    }), this['main']['box_2_addclick']['on'](Laya['Event']['CLICK'], this, function () {
      if (crt['rolePriceData']['is_vip'] == 0x0) return;this['main']['box_help_qrcode']['skin'] = crt['rolePriceData']['vip_qrcode'], crt['main']['box_help']['visible'] = !![];
    }), this['main']['box_help_close']['on'](Laya['Event']['CLICK'], this, function () {
      crt['main']['box_help']['visible'] = ![];
    }), this['main']['box_help_bg']['skin'] = this['tool']['data']['vip_customer_service_not_add'], this['main']['box_help_qrcode']['skin'] = crt['rolePriceData']['vip_qrcode'], this['main']['box_help_qrcode']['scaleX'] = 0xa0 / this['main']['box_help_qrcode']['width'], this['main']['box_help_qrcode']['scaleY'] = 0xa0 / this['main']['box_help_qrcode']['width'], this['main']['box_3_panel']['vScrollBar']['visible'] = ![], this['main']['box_3_panel']['vScrollBarSkin'] = 'common_atlas/scrollBar.png';
  }, ynk_ue['prototype']['initIcon'] = function () {
    this['icon'] = new Laya['Image'](), this['icon']['skin'] = this['tool']['data']['basics_image_url'], this['icon']['x'] = 0x0, this['icon']['y'] = 0xc8, this['icon']['width'] = 0x66, this['icon']['height'] = 0x6f, this['main']['addChild'](this['icon']), this['icon']['on'](Laya['Event']['MOUSE_DOWN'], this, this['iconPress']), this['icon']['on'](Laya['Event']['MOUSE_UP'], this, this['iconUp']), this['icon']['on'](Laya['Event']['MOUSE_WHEEL'], this, this['iconMove']), this['dragRect'] = new Laya['Rectangle'](-this['icon']['width'] / 0x2, 0x0, Laya['stage']['width'], Laya['stage']['height'] - this['icon']['height'] / 0x2);
  }, ynk_ue['prototype']['initEvent'] = function () {
    var d2li = this;this['main']['btn_1']['on'](Laya['Event']['CLICK'], this, function () {
      if (d2li['page'] == 0x1) return;d2li['page1']();
    }), this['main']['btn_2']['on'](Laya['Event']['CLICK'], this, function () {
      if (d2li['page'] == 0x2) return;d2li['page2']();
    }), this['main']['btn_3']['on'](Laya['Event']['CLICK'], this, function () {
      if (d2li['page'] == 0x3) return;d2li['page3']();
    }), this['main']['btn_close']['on'](Laya['Event']['CLICK'], this, function () {
      d2li['main']['bg']['x'] = -0x2ee, d2li['icon']['visible'] = !![];
    });
  }, ynk_ue['prototype']['initBoard'] = function () {
    this['isInitBoard'] = !![], this['page1']();
  }, ynk_ue['prototype']['showBoard'] = function () {
    this['main']['bg']['x'] = 0x0, this['icon']['visible'] = ![];var b8zog = _oAE['selectedServer']['server_id'],
        ku0_e = _oAE['selectedServer']['server_name'],
        hpb8zc = _oAE['roleId'],
        mrc85 = _oAE['roleName'],
        ek0_ = o_z8chbp['sygame']['openid'],
        m8p5 = '&role_id=' + o_z8chbp['sygame']['role_id'] + '&channel=' + o_z8chbp['sygame']['channel'] + '&server_id=' + b8zog + '&server_name=' + ku0_e + '&wecha_id=' + ek0_ + '&role_id=' + hpb8zc + '&role_name=' + mrc85;this['tool']['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=sidebarApiRoleId' + m8p5, this['rolePriceHandler']['bind'](this), this['roleError']['bind'](this));
  }, ynk_ue['prototype']['page1'] = function () {
    this['page'] = 0x1, this['main']['bg']['skin'] = this['tool']['data']['public_code'], this['main']['box_1_show']['visible'] = !![], this['main']['box_2_show']['visible'] = ![], this['main']['box_3_show']['visible'] = ![];
  }, ynk_ue['prototype']['page2'] = function () {
    this['page'] = 0x2, this['main']['bg']['skin'] = this['tool']['data']['vip_customer_service'], this['main']['box_1_show']['visible'] = ![], this['main']['box_2_show']['visible'] = !![], this['main']['box_3_show']['visible'] = ![];
  }, ynk_ue['prototype']['page3'] = function () {
    this['page'] = 0x3, this['main']['bg']['skin'] = this['tool']['data']['game_center_image_url'], this['main']['box_1_show']['visible'] = ![], this['main']['box_2_show']['visible'] = ![], this['main']['box_3_show']['visible'] = !![], this['sendBox'] || this['getBoxList'](0x0), this['sendBox'] = !![], o_w21fid && o_w21fid['syClickOpenBox']();
  }, ynk_ue['prototype']['getBoxList'] = function (y_kn) {
    var uekny = this;o_w21fid && o_w21fid['syGetBoxList']({ 'page': y_kn, 'count': 0xc })['then'](function (bgozh4) {
      var _3yune = bgozh4['data'];_3yune['status'] == 0x3e9 ? _3yune['data'] && _3yune['data']['length'] && (uekny['boxlist'] = uekny['boxlist']['concat'](_3yune['data']), y_kn++, uekny['getBoxList'](y_kn)) : uekny['boxListHandler']();
    });
  }, ynk_ue['prototype']['copyText'] = function (r5pcm8) {
    try {
      wx['setClipboardData']({ 'data': r5pcm8, 'success': function (vla6n3) {
          console['log']('复制成功:', vla6n3);
        } });
    } catch (hz8cbp) {}
  }, ynk_ue['prototype']['rolePriceHandler'] = function (d3vla) {
    this['rolePriceData'] = JSON['parse'](d3vla);switch (this['rolePriceData']['status']) {case 0x3e9:
        this['main']['box_2_lab_v_1']['text'] = (this['rolePriceData']['todayPrice'] || 0x0) + '/' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_v_2']['text'] = (this['rolePriceData']['allPrice'] || 0x0) + '/' + +this['tool']['data']['y'] + '元';break;case 0x3ea:
        break;case 0x3eb:
        break;}
  }, ynk_ue['prototype']['roleError'] = function () {}, ynk_ue['prototype']['boxListHandler'] = function () {
    var pmc8r = function ($k_0e) {
      var b94xo = q57mt['boxlist'][$k_0e],
          mrz8p = new o_uyke['demoui']['BoxItemUI']();mrz8p['icon']['skin'] = b94xo['icon'], mrz8p['title']['text'] = b94xo['title'], mrz8p['x'] = 0xa0 * ($k_0e % 0x3), mrz8p['y'] = 0xa0 * ($k_0e / 0x3 ^ 0x0), q57mt['main']['box_3_panel']['addChild'](mrz8p);var pzb8hc = { 'appid': o_z8chbp['sygame']['appid'], 'game_id': b94xo['game_id'], 'jump_appid': b94xo['jump_appid'], 'jump_path': b94xo['jump_path'], 'tunnel_id': b94xo['tunnel_id'], 'uv': 0x0, 'wecha_id': o_z8chbp['sygame']['openid'] },
          l3d6a = b94xo['preview_img'],
          wif1 = b94xo['jump_type'],
          z8hog = b94xo['kf_session'];mrz8p['on'](Laya['Event']['CLICK'], q57mt, function () {
        o_w21fid && o_w21fid['syClickBox']({ 'game_id': b94xo['game_id'], 'tunnel_id': b94xo['tunnel_id'], 'jump_appid': b94xo['jump_appid'], 'jump_path': b94xo['jump_path'] })['then'](function (xi19) {
          if (wif1 === '0') wx['navigateToMiniProgram']({ 'appId': pzb8hc['jump_appid'], 'path': pzb8hc['jump_path'], 'fail': function (e_kn) {
              if (!l3d6a) return;wx['previewImage']({ 'urls': [l3d6a] });
            } });else {
            if (wif1 === '1') {
              if (!l3d6a) return;wx['previewImage']({ 'urls': [l3d6a] });
            } else {
              if (wif1 === '2') {
                if (!z8hog) return;wx['openCustomerServiceConversation']({ 'sessionFrom': z8hog, 'showMessageCard': !![], 'sendMessageTitle': '', 'sendMessagePath': '', 'sendMessageImg': '' });
              }
            }
          }
        });
      });
    },
        q57mt = this;for (var tprmc5 = 0x0; tprmc5 < this['boxlist']['length']; tprmc5++) {
      pmc8r(tprmc5);
    }
  }, ynk_ue['prototype']['boxListError'] = function () {}, ynk_ue['prototype']['boxClickHandler'] = function () {}, ynk_ue['prototype']['iconPress'] = function (gozbh4) {
    this['donwX'] = gozbh4['target']['x'], this['donwY'] = gozbh4['target']['y'], this['icon']['startDrag'](this['dragRect']), this['isMove'] = ![], this['isPress'] = !![];
  }, ynk_ue['prototype']['iconMove'] = function (dl62ai) {
    this['isMove'] = !![];
  }, ynk_ue['prototype']['iconUp'] = function (ix1f9) {
    var $0_k = ix1f9['target']['x'],
        hpb8cz = ix1f9['target']['y'];this['icon']['stopDrag'](), $0_k == this['donwX'] && this['donwY'] == hpb8cz && (this['isInitBoard'] || this['initBoard'](), this['showBoard']()), this['isMove'] = ![], this['isPress'] = ![];
  }, ynk_ue;
}(),
    o_uyke;(function (tsqm5) {
  var pq5t;(function (cprzh8) {
    var $kyje0 = function (a3vdl) {
      o_zhcbp(g9o4x, a3vdl);function g9o4x() {
        return a3vdl['call'](this) || this;
      }return g9o4x['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), a3vdl['prototype']['createChildren']['call'](this), this['createView'](tsqm5['demoui']['BoxItemUI']['uiView']);
      }, g9o4x['uiView'] = { 'type': 'View', 'props': { 'width': 0xb4, 'height': 0xa0 }, 'child': [{ 'type': 'Image', 'props': { 'y': 0x3, 'x': 0x20, 'width': 0x73, 'var': 'icon', 'height': 0x73 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x79, 'x': -0x21, 'width': 0xb4, 'var': 'title', 'valign': 'middle', 'height': 0x22, 'fontSize': 0x16, 'color': '#441d1c', 'align': 'center' } }] }] }, g9o4x;
    }(laya['ui']['View']);cprzh8['BoxItemUI'] = $kyje0;
  })(pq5t = tsqm5['demoui'] || (tsqm5['demoui'] = {}));
})(o_uyke || (o_uyke = {})), function (lv62d) {
  var p8hb;(function (o4bgz) {
    var a3lvd = function (ia2dl) {
      o_zhcbp(rm5tc, ia2dl);function rm5tc() {
        return ia2dl['call'](this) || this;
      }return rm5tc['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), ia2dl['prototype']['createChildren']['call'](this), this['createView'](lv62d['demoui']['MainUI']['uiView']);
      }, rm5tc['uiView'] = { 'type': 'View', 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x2ee, 'top': 0x0, 'right': 0x0, 'left': 0x0, 'height': 0x536, 'bottom': 0x0 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x2ee, 'height': 0x536, 'centerY': 0x0 }, 'child': [{ 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x2ee, 'var': 'bg', 'height': 0x536 }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x2ee, 'visible': ![], 'var': 'box_1_show', 'height': 0x536, 'centerY': 0x0 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x253, 'x': 0x2e, 'width': 0x1d0, 'var': 'box_1_lab_info', 'leading': 0xa, 'height': 0x97, 'fontSize': 0x18, 'color': '#a959ee' } }, { 'type': 'HBox', 'props': { 'y': 0x2ee, 'x': 0x14, 'width': 0x1fe, 'space': 0x35, 'height': 0x78, 'align': 'top' }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x58, 'var': 'box_1_img_1', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_1', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0xa, 'x': 0xa, 'width': 0x58, 'var': 'box_1_img_2', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_2', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x14, 'x': 0x14, 'width': 0x58, 'var': 'box_1_img_3', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_3', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x1e, 'x': 0x1e, 'width': 0x58, 'var': 'box_1_img_4', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_4', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }] }] }, { 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'visible': ![], 'var': 'box_2_show' }, 'child': [{ 'type': 'HBox', 'props': { 'y': 0x220, 'x': 0x18, 'width': 0x1f4, 'space': 0x2c, 'height': 0x56, 'align': 'top' }, 'child': [{ 'type': 'Image', 'props': { 'y': 2.5, 'x': 0x0, 'width': 0x58, 'var': 'box_2_img_1', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_1', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0xc, 'x': 0xa, 'width': 0x58, 'var': 'box_2_img_2', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_2', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x16, 'x': 0x14, 'width': 0x58, 'var': 'box_2_img_3', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_3', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x20, 'x': 0x1e, 'width': 0x58, 'var': 'box_2_img_4', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_4', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x2a, 'x': 0x28, 'width': 0x58, 'var': 'box_2_img_5', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_5', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }] }, { 'type': 'Box', 'props': { 'y': 0x384, 'x': 0x0, 'width': 0x221, 'height': 0x44 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x0, 'x': 0x28, 'width': 0x122, 'var': 'box_2_lab_m_1', 'text': '方法一\uFF1A单日充值1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300' } }, { 'type': 'Text', 'props': { 'y': 0x1e, 'x': 0x28, 'width': 0x122, 'var': 'box_2_lab_m_2', 'text': '方法一\uFF1A历史累计充值1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300' } }, { 'type': 'Text', 'props': { 'y': 0x0, 'x': 0x141, 'width': 0xa4, 'var': 'box_2_lab_v_1', 'text': '1000/1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300', 'align': 'right' } }, { 'type': 'Text', 'props': { 'y': 0x1e, 'x': 0x141, 'width': 0xa4, 'var': 'box_2_lab_v_2', 'text': '1000/1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300', 'align': 'right' } }] }, { 'type': 'Image', 'props': { 'y': 0x1aa, 'x': 0x159, 'width': 0x66, 'var': 'box_2_btn_get', 'stateNum': 0x1, 'height': 0x26 } }, { 'type': 'Image', 'props': { 'y': 0x1aa, 'x': 0x159, 'width': 0x66, 'var': 'box_2_btn_copy', 'stateNum': 0x1, 'height': 0x26 } }, { 'type': 'Button', 'props': { 'y': 0x1d2, 'x': 0x126, 'width': 0xc9, 'var': 'box_2_addclick', 'stateNum': 0x1, 'height': 0x1b } }, { 'type': 'Text', 'props': { 'y': 0x13c, 'x': 0x17a, 'width': 0xa3, 'var': 'box_2_lab_wx', 'height': 0x1f, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'left' } }] }, { 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'visible': ![], 'var': 'box_3_show' }, 'child': [{ 'type': 'Panel', 'props': { 'y': 0xf5, 'x': 0x10, 'width': 0x201, 'var': 'box_3_panel', 'vScrollBarSkin': '', 'height': 0x29e } }] }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0x0, 'width': 0xbb, 'var': 'btn_1', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0xba, 'width': 0xbb, 'var': 'btn_2', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0x177, 'width': 0xbb, 'var': 'btn_3', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x203, 'x': 0x22e, 'width': 0x25, 'var': 'btn_close', 'height': 0x8f } }, { 'type': 'Box', 'props': { 'width': 0x2ee, 'visible': ![], 'var': 'box_help', 'height': 0x536 }, 'child': [{ 'type': 'Sprite', 'props': { 'y': 0x0, 'x': 0x0, 'mouseThrough': ![], 'alpha': 0.7 }, 'child': [{ 'type': 'Rect', 'props': { 'width': 0x2ee, 'lineWidth': 0x1, 'height': 0x536, 'fillColor': '#000000' } }] }, { 'type': 'Image', 'props': { 'y': 0x158, 'x': 0x28, 'width': 0x1d2, 'var': 'box_help_bg', 'height': 0x203 }, 'child': [{ 'type': 'Button', 'props': { 'y': -0x1, 'x': 0x1a0, 'width': 0x33, 'var': 'box_help_close', 'height': 0x28 } }, { 'type': 'Image', 'props': { 'y': 0x3f, 'x': 0x98, 'width': 0xa0, 'var': 'box_help_qrcode', 'height': 0xa0 } }] }] }] }] }] }, rm5tc;
    }(laya['ui']['View']);o4bgz['MainUI'] = a3lvd;
  })(p8hb = lv62d['demoui'] || (lv62d['demoui'] = {}));
}(o_uyke || (o_uyke = {})), function (rt5c) {
  var yek0$j;(function (nla3uv) {
    var hbozc = function (vuln_3) {
      o_zhcbp(_ynkue, vuln_3);function _ynkue() {
        return vuln_3['call'](this) || this;
      }return _ynkue['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), vuln_3['prototype']['createChildren']['call'](this), this['createView'](rt5c['demoui']['ToastUI']['uiView']);
      }, _ynkue['uiView'] = { 'type': 'View', 'props': { 'width': 0x2ee, 'height': 0x536 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x12c, 'height': 0x32, 'centerY': 0x0, 'centerX': 0x0 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x12c, 'height': 0x32, 'centerX': 0x0, 'alpha': 0.5 }, 'child': [{ 'type': 'Rect', 'props': { 'width': 0x12c, 'lineWidth': 0x1, 'height': 0x32, 'fillColor': '#382f2f' } }] }, { 'type': 'Text', 'props': { 'width': 0x12c, 'var': 'lab_msg', 'valign': 'middle', 'text': 'text', 'height': 0x32, 'fontSize': 0x18, 'color': '#ffffff', 'align': 'center' } }] }] }, _ynkue;
    }(laya['ui']['View']);nla3uv['ToastUI'] = hbozc;
  })(yek0$j = rt5c['demoui'] || (rt5c['demoui'] = {}));
}(o_uyke || (o_uyke = {}));var o_f4og = function () {
  function k0_y() {}return k0_y['init'] = function () {
    !this['ui'] && (this['ui'] = new o_uyke['demoui']['ToastUI'](), this['ui']['visible'] = ![], Laya['stage']['addChild'](this['ui']));
  }, k0_y['msg'] = function (d2wi1f) {
    var n3lav = this;!this['ui'] && k0_y['init'](), this['ui']['visible'] = !![], this['ui']['lab_msg']['text'] = d2wi1f, clearTimeout(this['interval']), this['interval'] = setTimeout(function () {
      n3lav['ui']['visible'] = ![];
    }, 0x7d0);
  }, k0_y;
}();window['minitool'] = o_of4xg9;