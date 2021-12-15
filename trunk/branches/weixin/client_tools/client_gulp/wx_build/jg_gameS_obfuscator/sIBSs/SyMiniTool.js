var K = wx.$S;
var shydsa5 = this && this['__extends'] || function () {
  var qjpsgy = function ($yahd, euo3rv) {
    return qjpsgy = Object['setPrototypeOf'] || { '__proto__': [] } instanceof Array && function (ck9z0w, bf186) {
      ck9z0w['__proto__'] = bf186;
    } || function (zwkv90, m_x2ic) {
      for (var eu$a in m_x2ic) if (m_x2ic['hasOwnProperty'](eu$a)) zwkv90[eu$a] = m_x2ic[eu$a];
    }, qjpsgy($yahd, euo3rv);
  };return function (vz93, c90_wi) {
    qjpsgy(vz93, c90_wi);function sg1pjq() {
      this['constructor'] = vz93;
    }vz93['prototype'] = c90_wi === null ? Object['create'](c90_wi) : (sg1pjq['prototype'] = c90_wi['prototype'], new sg1pjq());
  };
}(),
    scix0_ = window['Sygame'],
    sd54h$a = ![],
    sxc_2i = function () {
  function wk0vz() {}return wk0vz['init'] = function () {
    sd54h$a ? this['sygame'] = { 'channel': '3477d2273abd484ba2a0e04ad4971b3c', 'role_id': undefined, 'openid': 'oxmOf5biumkGash-Xht9FVAlswVk', 'appid': 'wx2936121c4817bf46' } : this['sygame'] = scix0_;
  }, wk0vz['getTimeStamp'] = function () {
    return new Date()['getTime']();
  }, wk0vz['setResMap'] = function (a4er$, eovr3u) {
    this['resMap'][a4er$] = a4er$ + '?' + eovr3u;
  }, wk0vz['getResMap'] = function (dah45) {
    return this['resMap'][dah45];
  }, wk0vz['resMap'] = {}, wk0vz;
}(),
    s$d5 = function () {
  function ozv93k() {
    this['getIcon'] = 'https://wx.11babay.cn/uploads/f/fkccc1532944783/5/2/c/7/60dc442c4fbc5.png', this['copyIcon'] = 'https://wx.11babay.cn/uploads/f/fkccc1532944783/3/0/1/7/60dc4409dce39.png', sxc_2i['init'](), this['getBoxCheckoutCode']();
  }return ozv93k['prototype']['send'] = function (imx_2, $5dae4, x_2icm, adh5y$, ad45$) {
    adh5y$ === void 0x0 && (adh5y$ = 'get');ad45$ === void 0x0 && (ad45$ = '' || null);var a5dhsy = new Laya['HttpRequest']();a5dhsy['http']['timeout'] = 0x2710, a5dhsy['once'](Laya['Event']['COMPLETE'], this, $5dae4), a5dhsy['once'](Laya['Event']['ERROR'], this, x_2icm), a5dhsy['send'](imx_2, ad45$, adh5y$, 'text');
  }, ozv93k['prototype']['postSidebarApi'] = function () {
    var gsj1pq = sxc_2i['sygame']['openid'],
        ntm2x = '&channel=' + sxc_2i['sygame']['channel'] + '&wecha_id=' + gsj1pq;this['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=sidebarApi' + ntm2x, this['completeHandler'], this['errorHandler']);
  }, ozv93k['prototype']['getBoxCheckoutCode'] = function () {
    var d$45a = Sygame['SY_CONF']['commitId'];this['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=getBoxCheckoutCode', this['getBoxCheckoutCodeRes'], this['errorHandler'], 'post', { 'commitId': d$45a });
  }, ozv93k['prototype']['getBoxCheckoutCodeRes'] = function (uvzro) {
    var m0xci_ = JSON['parse'](uvzro);console['log']('getBoxCheckoutCode:', m0xci_);if (m0xci_['status'] == 0x3e9) {
      var n_mi = m0xci_['info'];n_mi == 0xfa1 ? this['postSidebarApi']() : console['error']('盛也盒子\x20不显示' + m0xci_);
    } else console['error']('盛也盒子 getBoxCheckoutCodeRes 其他错误' + m0xci_);
  }, ozv93k['prototype']['completeHandler'] = function (imcx0_) {
    var sjyq = JSON['parse'](imcx0_);console['log'](sjyq);switch (sjyq['status']) {case 0x3e9:
        var uevro3 = [];sjyq['msg']['basics_image_url'] && uevro3['push']({ 'url': sjyq['msg']['basics_image_url'], 'type': Laya['Loader']['IMAGE'] }), sjyq['msg']['public_code'] && uevro3['push']({ 'url': sjyq['msg']['public_code'], 'type': Laya['Loader']['IMAGE'] }), sjyq['msg']['vip_customer_service'] && uevro3['push']({ 'url': sjyq['msg']['vip_customer_service'], 'type': Laya['Loader']['IMAGE'] }), sjyq['msg']['vip_customer_service_not_add'] && uevro3['push']({ 'url': sjyq['msg']['vip_customer_service_not_add'], 'type': Laya['Loader']['IMAGE'] }), sjyq['msg']['game_center_image_url'] && uevro3['push']({ 'url': sjyq['msg']['game_center_image_url'], 'type': Laya['Loader']['IMAGE'] }), sjyq['msg']['vip_qrcode'] && uevro3['push']({ 'url': sjyq['msg']['vip_qrcode'], 'type': Laya['Loader']['IMAGE'] }), sjyq['msg']['getIcon'] && uevro3['push']({ 'url': this['getIcon'], 'type': Laya['Loader']['IMAGE'] }), sjyq['msg']['copyIcon'] && uevro3['push']({ 'url': this['copyIcon'], 'type': Laya['Loader']['IMAGE'] });for (var re4u3o = 0x0, au4e$d = sjyq['msg']['follow_gift_list']; re4u3o < au4e$d['length']; re4u3o++) {
          var dyp = au4e$d[re4u3o];uevro3['push']({ 'url': dyp['url'], 'type': Laya['Loader']['IMAGE'] });
        }for (var a4$u = 0x0, _mxc2 = sjyq['msg']['vip_box_list']; a4$u < _mxc2['length']; a4$u++) {
          var dyp = _mxc2[a4$u];uevro3['push']({ 'url': dyp['url'], 'type': Laya['Loader']['IMAGE'] });
        }for (var bqg18j = 0x0; bqg18j < uevro3['length']; bqg18j++) {
          sxc_2i['setResMap'](uevro3[bqg18j]['url'], sxc_2i['getTimeStamp']()), uevro3[bqg18j]['url'] = sxc_2i['getResMap'](uevro3[bqg18j]['url']);
        }Laya['loader']['load'](uevro3, Laya['Handler']['create'](this, this['initGame'])), this['data'] = sjyq['msg'];break;case 0x3ea:
        sd5a$h['msg']('空的游戏channel');break;case 0x3eb:
        sd5a$h['msg']('错误的游戏channel');break;case 0x3ec:
        sd5a$h['msg']('未找到对应游戏大类');break;case 0x3ed:
        sd5a$h['msg']('未设置侧边栏');break;}
  }, ozv93k['prototype']['errorHandler'] = function (m2nt7) {}, ozv93k['prototype']['initGame'] = function () {
    var k0wzc9 = new sovwk9(this);k0wzc9['show']();
  }, ozv93k;
}(),
    sovwk9 = function () {
  function urzv3(m_ic0) {
    this['page'] = 0x3, this['rolePriceData'] = {}, this['boxlist'] = [], this['donwX'] = 0x0, this['downY'] = 0x0, this['tool'] = m_ic0;
  }return urzv3['prototype']['setChildMouseThroughs'] = function (w0_c9i) {
    var qj1p = w0_c9i['_childs'] || [];for (var pysg = 0x0; pysg < qj1p['length']; pysg++) {
      qj1p[pysg] && (qj1p[pysg]['mouseThrough'] = !![]);
    }
  }, urzv3['prototype']['show'] = function () {
    if (this['tool']['data']['on'] === '1') {
      this['main'] = new sae$ru['demoui']['MainUI'](), Laya['stage']['addChild'](this['main']), this['main']['mouseThrough'] = !![];var d4ea5$ = this['main']['_childs'] || [];for (var m_i0x = 0x0; m_i0x < d4ea5$['length']; m_i0x++) {
        d4ea5$[m_i0x]['mouseThrough'] = !![];
      }this['setChildMouseThroughs'](this['main']['_childs']), this['setChildMouseThroughs'](this['main']['_childs'][0x0]), this['initIcon'](), this['initEvent'](), this['initView'](), sd5a$h['init'](), this['main']['bg']['x'] = -0x2ee;
    }
  }, urzv3['prototype']['initView'] = function () {
    var yshad = this,
        z3kv9o = this['tool']['data']['follow_down_words']['replace'](/\\n/g, '\x0a');this['main']['box_1_lab_info']['text'] = z3kv9o;for (var e$4a = 0x1; e$4a <= this['tool']['data']['follow_gift_list']['length']; e$4a++) {
      var l1fb = this['tool']['data']['follow_gift_list'][e$4a - 0x1];this['main']['box_1_img_' + e$4a]['skin'] = l1fb['url'], this['main']['box_1_lab_' + e$4a]['text'] = l1fb['name'];
    }for (var e$4a = 0x1; e$4a <= this['tool']['data']['vip_box_list']['length']; e$4a++) {
      var l1fb = this['tool']['data']['vip_box_list'][e$4a - 0x1];this['main']['box_2_img_' + e$4a]['skin'] = l1fb['url'], this['main']['box_2_lab_' + e$4a]['text'] = l1fb['name'];
    }this['main']['box_2_lab_m_1']['text'] = '方法一：单日充值' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_m_2']['text'] = '方法二：历史累计充值' + +this['tool']['data']['y'] + '元', this['main']['box_2_lab_v_1']['text'] = (this['rolePriceData']['todayPrice'] || 0x0) + '/' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_v_2']['text'] = (this['rolePriceData']['allPrice'] || 0x0) + '/' + +this['tool']['data']['y'] + '元', this['main']['box_2_btn_copy']['skin'] = this['tool']['copyIcon'], this['main']['box_2_btn_get']['skin'] = this['tool']['getIcon'], this['main']['box_2_btn_copy']['visible'] = ![], this['main']['box_2_btn_get']['on'](Laya['Event']['CLICK'], this, function () {
      if (yshad['rolePriceData']['is_vip'] == 0x0) {
        sd5a$h['msg']('请先获取vip资格');return;
      }yshad['main']['box_2_lab_wx']['text'] = this['rolePriceData']['vip_wx'], yshad['main']['box_2_btn_copy']['visible'] = !![];
    }), this['main']['box_2_btn_copy']['on'](Laya['Event']['CLICK'], this, function () {
      yshad['copyText'](this['rolePriceData']['vip_wx']);
    }), this['main']['box_2_addclick']['on'](Laya['Event']['CLICK'], this, function () {
      if (yshad['rolePriceData']['is_vip'] == 0x0) return;this['main']['box_help_qrcode']['skin'] = yshad['rolePriceData']['vip_qrcode'], yshad['main']['box_help']['visible'] = !![];
    }), this['main']['box_help_close']['on'](Laya['Event']['CLICK'], this, function () {
      yshad['main']['box_help']['visible'] = ![];
    }), this['main']['box_help_bg']['skin'] = this['tool']['data']['vip_customer_service_not_add'], this['main']['box_help_qrcode']['skin'] = yshad['rolePriceData']['vip_qrcode'], this['main']['box_help_qrcode']['scaleX'] = 0xa0 / this['main']['box_help_qrcode']['width'], this['main']['box_help_qrcode']['scaleY'] = 0xa0 / this['main']['box_help_qrcode']['width'], this['main']['box_3_panel']['vScrollBar']['visible'] = ![], this['main']['box_3_panel']['vScrollBarSkin'] = 'common_atlas/scrollBar.png';
  }, urzv3['prototype']['initIcon'] = function () {
    this['icon'] = new Laya['Image'](), this['icon']['skin'] = this['tool']['data']['basics_image_url'], this['icon']['x'] = 0x0, this['icon']['y'] = 0xc8, this['icon']['width'] = 0x66, this['icon']['height'] = 0x6f, this['main']['addChild'](this['icon']), this['icon']['on'](Laya['Event']['MOUSE_DOWN'], this, this['iconPress']), this['icon']['on'](Laya['Event']['MOUSE_UP'], this, this['iconUp']), this['icon']['on'](Laya['Event']['MOUSE_WHEEL'], this, this['iconMove']), this['dragRect'] = new Laya['Rectangle'](-this['icon']['width'] / 0x2, 0x0, Laya['stage']['width'], Laya['stage']['height'] - this['icon']['height'] / 0x2);
  }, urzv3['prototype']['initEvent'] = function () {
    var pj1q = this;this['main']['btn_1']['on'](Laya['Event']['CLICK'], this, function () {
      if (pj1q['page'] == 0x1) return;pj1q['page1']();
    }), this['main']['btn_2']['on'](Laya['Event']['CLICK'], this, function () {
      if (pj1q['page'] == 0x2) return;pj1q['page2']();
    }), this['main']['btn_3']['on'](Laya['Event']['CLICK'], this, function () {
      if (pj1q['page'] == 0x3) return;pj1q['page3']();
    }), this['main']['btn_close']['on'](Laya['Event']['CLICK'], this, function () {
      pj1q['main']['bg']['x'] = -0x2ee, pj1q['icon']['visible'] = !![];
    });
  }, urzv3['prototype']['initBoard'] = function () {
    this['isInitBoard'] = !![], this['page1']();
  }, urzv3['prototype']['showBoard'] = function () {
    this['main']['bg']['x'] = 0x0, this['icon']['visible'] = ![];var o3rv = s1X4['selectedServer']['server_id'],
        ha4$d = s1X4['selectedServer']['server_name'],
        hgq = s1X4['roleId'],
        a54$h = s1X4['roleName'],
        gj1 = sxc_2i['sygame']['openid'],
        qgyjsp = '&role_id=' + sxc_2i['sygame']['role_id'] + '&channel=' + sxc_2i['sygame']['channel'] + '&server_id=' + o3rv + '&server_name=' + ha4$d + '&wecha_id=' + gj1 + '&role_id=' + hgq + '&role_name=' + a54$h;this['tool']['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=sidebarApiRoleId' + qgyjsp, this['rolePriceHandler']['bind'](this), this['roleError']['bind'](this));
  }, urzv3['prototype']['page1'] = function () {
    this['page'] = 0x1, this['main']['bg']['skin'] = this['tool']['data']['public_code'], this['main']['box_1_show']['visible'] = !![], this['main']['box_2_show']['visible'] = ![], this['main']['box_3_show']['visible'] = ![];
  }, urzv3['prototype']['page2'] = function () {
    this['page'] = 0x2, this['main']['bg']['skin'] = this['tool']['data']['vip_customer_service'], this['main']['box_1_show']['visible'] = ![], this['main']['box_2_show']['visible'] = !![], this['main']['box_3_show']['visible'] = ![];
  }, urzv3['prototype']['page3'] = function () {
    this['page'] = 0x3, this['main']['bg']['skin'] = this['tool']['data']['game_center_image_url'], this['main']['box_1_show']['visible'] = ![], this['main']['box_2_show']['visible'] = ![], this['main']['box_3_show']['visible'] = !![], this['sendBox'] || this['getBoxList'](0x0), this['sendBox'] = !![], scix0_ && scix0_['syClickOpenBox']();
  }, urzv3['prototype']['getBoxList'] = function (w9kz0) {
    var ouv3re = this;scix0_ && scix0_['syGetBoxList']({ 'page': w9kz0, 'count': 0xc })['then'](function (orkz) {
      var x2mn_ = orkz['data'];x2mn_['status'] == 0x3e9 ? x2mn_['data'] && x2mn_['data']['length'] && (ouv3re['boxlist'] = ouv3re['boxlist']['concat'](x2mn_['data']), w9kz0++, ouv3re['getBoxList'](w9kz0)) : ouv3re['boxListHandler']();
    });
  }, urzv3['prototype']['copyText'] = function (erv3) {
    try {
      wx['setClipboardData']({ 'data': erv3, 'success': function (vrz) {
          console['log']('复制成功:', vrz);
        } });
    } catch (uo3vz) {}
  }, urzv3['prototype']['rolePriceHandler'] = function (c0zw9) {
    this['rolePriceData'] = JSON['parse'](c0zw9);switch (this['rolePriceData']['status']) {case 0x3e9:
        this['main']['box_2_lab_v_1']['text'] = (this['rolePriceData']['todayPrice'] || 0x0) + '/' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_v_2']['text'] = (this['rolePriceData']['allPrice'] || 0x0) + '/' + +this['tool']['data']['y'] + '元';break;case 0x3ea:
        break;case 0x3eb:
        break;}
  }, urzv3['prototype']['roleError'] = function () {}, urzv3['prototype']['boxListHandler'] = function () {
    var gqjp81 = function (sjpg1) {
      var xmitn2 = d45e$a['boxlist'][sjpg1],
          vowk9z = new sae$ru['demoui']['BoxItemUI']();vowk9z['icon']['skin'] = xmitn2['icon'], vowk9z['title']['text'] = xmitn2['title'], vowk9z['x'] = 0xa0 * (sjpg1 % 0x3), vowk9z['y'] = 0xa0 * (sjpg1 / 0x3 ^ 0x0), d45e$a['main']['box_3_panel']['addChild'](vowk9z);var $5ade4 = { 'appid': sxc_2i['sygame']['appid'], 'game_id': xmitn2['game_id'], 'jump_appid': xmitn2['jump_appid'], 'jump_path': xmitn2['jump_path'], 'tunnel_id': xmitn2['tunnel_id'], 'uv': 0x0, 'wecha_id': sxc_2i['sygame']['openid'] },
          hyqpgs = xmitn2['preview_img'],
          xn72tm = xmitn2['jump_type'],
          pys5qh = xmitn2['kf_session'];vowk9z['on'](Laya['Event']['CLICK'], d45e$a, function () {
        scix0_ && scix0_['syClickBox']({ 'game_id': xmitn2['game_id'], 'tunnel_id': xmitn2['tunnel_id'], 'jump_appid': xmitn2['jump_appid'], 'jump_path': xmitn2['jump_path'] })['then'](function (xmin2_) {
          if (xn72tm === '0') wx['navigateToMiniProgram']({ 'appId': $5ade4['jump_appid'], 'path': $5ade4['jump_path'], 'fail': function (a54de) {
              if (!hyqpgs) return;wx['previewImage']({ 'urls': [hyqpgs] });
            } });else {
            if (xn72tm === '1') {
              if (!hyqpgs) return;wx['previewImage']({ 'urls': [hyqpgs] });
            } else {
              if (xn72tm === '2') {
                if (!pys5qh) return;wx['openCustomerServiceConversation']({ 'sessionFrom': pys5qh, 'showMessageCard': !![], 'sendMessageTitle': '', 'sendMessagePath': '', 'sendMessageImg': '' });
              }
            }
          }
        });
      });
    },
        d45e$a = this;for (var f8l6 = 0x0; f8l6 < this['boxlist']['length']; f8l6++) {
      gqjp81(f8l6);
    }
  }, urzv3['prototype']['boxListError'] = function () {}, urzv3['prototype']['boxClickHandler'] = function () {}, urzv3['prototype']['iconPress'] = function (r3ozv) {
    this['donwX'] = r3ozv['target']['x'], this['donwY'] = r3ozv['target']['y'], this['icon']['startDrag'](this['dragRect']), this['isMove'] = ![], this['isPress'] = !![];
  }, urzv3['prototype']['iconMove'] = function (i0_) {
    this['isMove'] = !![];
  }, urzv3['prototype']['iconUp'] = function (_mcxi2) {
    var gsqp1j = _mcxi2['target']['x'],
        m72ntx = _mcxi2['target']['y'];this['icon']['stopDrag'](), gsqp1j == this['donwX'] && this['donwY'] == m72ntx && (this['isInitBoard'] || this['initBoard'](), this['showBoard']()), this['isMove'] = ![], this['isPress'] = ![];
  }, urzv3;
}(),
    sae$ru;(function (o9kz3) {
  var gjq1s;(function (a$5yhd) {
    var e43r$ = function (_2imxn) {
      shydsa5(reo3v, _2imxn);function reo3v() {
        return _2imxn['call'](this) || this;
      }return reo3v['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), _2imxn['prototype']['createChildren']['call'](this), this['createView'](o9kz3['demoui']['BoxItemUI']['uiView']);
      }, reo3v['uiView'] = { 'type': 'View', 'props': { 'width': 0xb4, 'height': 0xa0 }, 'child': [{ 'type': 'Image', 'props': { 'y': 0x3, 'x': 0x20, 'width': 0x73, 'var': 'icon', 'height': 0x73 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x79, 'x': -0x21, 'width': 0xb4, 'var': 'title', 'valign': 'middle', 'height': 0x22, 'fontSize': 0x16, 'color': '#441d1c', 'align': 'center' } }] }] }, reo3v;
    }(laya['ui']['View']);a$5yhd['BoxItemUI'] = e43r$;
  })(gjq1s = o9kz3['demoui'] || (o9kz3['demoui'] = {}));
})(sae$ru || (sae$ru = {})), function (j61gb) {
  var kzwc09;(function (e3v) {
    var uae4r = function (ur3eo) {
      shydsa5(dp5yh, ur3eo);function dp5yh() {
        return ur3eo['call'](this) || this;
      }return dp5yh['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), ur3eo['prototype']['createChildren']['call'](this), this['createView'](j61gb['demoui']['MainUI']['uiView']);
      }, dp5yh['uiView'] = { 'type': 'View', 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x2ee, 'top': 0x0, 'right': 0x0, 'left': 0x0, 'height': 0x536, 'bottom': 0x0 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x2ee, 'height': 0x536, 'centerY': 0x0 }, 'child': [{ 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x2ee, 'var': 'bg', 'height': 0x536 }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x2ee, 'visible': ![], 'var': 'box_1_show', 'height': 0x536, 'centerY': 0x0 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x253, 'x': 0x2e, 'width': 0x1d0, 'var': 'box_1_lab_info', 'leading': 0xa, 'height': 0x97, 'fontSize': 0x18, 'color': '#a959ee' } }, { 'type': 'HBox', 'props': { 'y': 0x2ee, 'x': 0x14, 'width': 0x1fe, 'space': 0x35, 'height': 0x78, 'align': 'top' }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x58, 'var': 'box_1_img_1', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_1', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0xa, 'x': 0xa, 'width': 0x58, 'var': 'box_1_img_2', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_2', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x14, 'x': 0x14, 'width': 0x58, 'var': 'box_1_img_3', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_3', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x1e, 'x': 0x1e, 'width': 0x58, 'var': 'box_1_img_4', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_4', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }] }] }, { 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'visible': ![], 'var': 'box_2_show' }, 'child': [{ 'type': 'HBox', 'props': { 'y': 0x220, 'x': 0x18, 'width': 0x1f4, 'space': 0x2c, 'height': 0x56, 'align': 'top' }, 'child': [{ 'type': 'Image', 'props': { 'y': 2.5, 'x': 0x0, 'width': 0x58, 'var': 'box_2_img_1', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_1', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0xc, 'x': 0xa, 'width': 0x58, 'var': 'box_2_img_2', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_2', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x16, 'x': 0x14, 'width': 0x58, 'var': 'box_2_img_3', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_3', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x20, 'x': 0x1e, 'width': 0x58, 'var': 'box_2_img_4', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_4', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x2a, 'x': 0x28, 'width': 0x58, 'var': 'box_2_img_5', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_5', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }] }, { 'type': 'Box', 'props': { 'y': 0x384, 'x': 0x0, 'width': 0x221, 'height': 0x44 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x0, 'x': 0x28, 'width': 0x122, 'var': 'box_2_lab_m_1', 'text': '方法一\uFF1A单日充值1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300' } }, { 'type': 'Text', 'props': { 'y': 0x1e, 'x': 0x28, 'width': 0x122, 'var': 'box_2_lab_m_2', 'text': '方法一\uFF1A历史累计充值1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300' } }, { 'type': 'Text', 'props': { 'y': 0x0, 'x': 0x141, 'width': 0xa4, 'var': 'box_2_lab_v_1', 'text': '1000/1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300', 'align': 'right' } }, { 'type': 'Text', 'props': { 'y': 0x1e, 'x': 0x141, 'width': 0xa4, 'var': 'box_2_lab_v_2', 'text': '1000/1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300', 'align': 'right' } }] }, { 'type': 'Image', 'props': { 'y': 0x1aa, 'x': 0x159, 'width': 0x66, 'var': 'box_2_btn_get', 'stateNum': 0x1, 'height': 0x26 } }, { 'type': 'Image', 'props': { 'y': 0x1aa, 'x': 0x159, 'width': 0x66, 'var': 'box_2_btn_copy', 'stateNum': 0x1, 'height': 0x26 } }, { 'type': 'Button', 'props': { 'y': 0x1d2, 'x': 0x126, 'width': 0xc9, 'var': 'box_2_addclick', 'stateNum': 0x1, 'height': 0x1b } }, { 'type': 'Text', 'props': { 'y': 0x13c, 'x': 0x17a, 'width': 0xa3, 'var': 'box_2_lab_wx', 'height': 0x1f, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'left' } }] }, { 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'visible': ![], 'var': 'box_3_show' }, 'child': [{ 'type': 'Panel', 'props': { 'y': 0xf5, 'x': 0x10, 'width': 0x201, 'var': 'box_3_panel', 'vScrollBarSkin': '', 'height': 0x29e } }] }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0x0, 'width': 0xbb, 'var': 'btn_1', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0xba, 'width': 0xbb, 'var': 'btn_2', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0x177, 'width': 0xbb, 'var': 'btn_3', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x203, 'x': 0x22e, 'width': 0x25, 'var': 'btn_close', 'height': 0x8f } }, { 'type': 'Box', 'props': { 'width': 0x2ee, 'visible': ![], 'var': 'box_help', 'height': 0x536 }, 'child': [{ 'type': 'Sprite', 'props': { 'y': 0x0, 'x': 0x0, 'mouseThrough': ![], 'alpha': 0.7 }, 'child': [{ 'type': 'Rect', 'props': { 'width': 0x2ee, 'lineWidth': 0x1, 'height': 0x536, 'fillColor': '#000000' } }] }, { 'type': 'Image', 'props': { 'y': 0x158, 'x': 0x28, 'width': 0x1d2, 'var': 'box_help_bg', 'height': 0x203 }, 'child': [{ 'type': 'Button', 'props': { 'y': -0x1, 'x': 0x1a0, 'width': 0x33, 'var': 'box_help_close', 'height': 0x28 } }, { 'type': 'Image', 'props': { 'y': 0x3f, 'x': 0x98, 'width': 0xa0, 'var': 'box_help_qrcode', 'height': 0xa0 } }] }] }] }] }] }, dp5yh;
    }(laya['ui']['View']);e3v['MainUI'] = uae4r;
  })(kzwc09 = j61gb['demoui'] || (j61gb['demoui'] = {}));
}(sae$ru || (sae$ru = {})), function (ixm2nt) {
  var kzvw0;(function (ic90w_) {
    var rov3 = function (qgj1b) {
      shydsa5(tnx2m, qgj1b);function tnx2m() {
        return qgj1b['call'](this) || this;
      }return tnx2m['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), qgj1b['prototype']['createChildren']['call'](this), this['createView'](ixm2nt['demoui']['ToastUI']['uiView']);
      }, tnx2m['uiView'] = { 'type': 'View', 'props': { 'width': 0x2ee, 'height': 0x536 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x12c, 'height': 0x32, 'centerY': 0x0, 'centerX': 0x0 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x12c, 'height': 0x32, 'centerX': 0x0, 'alpha': 0.5 }, 'child': [{ 'type': 'Rect', 'props': { 'width': 0x12c, 'lineWidth': 0x1, 'height': 0x32, 'fillColor': '#382f2f' } }] }, { 'type': 'Text', 'props': { 'width': 0x12c, 'var': 'lab_msg', 'valign': 'middle', 'text': 'text', 'height': 0x32, 'fontSize': 0x18, 'color': '#ffffff', 'align': 'center' } }] }] }, tnx2m;
    }(laya['ui']['View']);ic90w_['ToastUI'] = rov3;
  })(kzvw0 = ixm2nt['demoui'] || (ixm2nt['demoui'] = {}));
}(sae$ru || (sae$ru = {}));var sd5a$h = function () {
  function $eu34() {}return $eu34['init'] = function () {
    !this['ui'] && (this['ui'] = new sae$ru['demoui']['ToastUI'](), this['ui']['visible'] = ![], Laya['stage']['addChild'](this['ui']));
  }, $eu34['msg'] = function (ntmxi) {
    var n_xi = this;!this['ui'] && $eu34['init'](), this['ui']['visible'] = !![], this['ui']['lab_msg']['text'] = ntmxi, clearTimeout(this['interval']), this['interval'] = setTimeout(function () {
      n_xi['ui']['visible'] = ![];
    }, 0x7d0);
  }, $eu34;
}();window['minitool'] = s$d5;