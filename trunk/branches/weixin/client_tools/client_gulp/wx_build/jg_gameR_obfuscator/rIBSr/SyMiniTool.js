var I = wx.$R;
var r_ix2joz = this && this['__extends'] || function () {
  var r7mgeq = function (hfn6c5, $b491a) {
    return r7mgeq = Object['setPrototypeOf'] || { '__proto__': [] } instanceof Array && function (ncpfd, c5_6hu) {
      ncpfd['__proto__'] = c5_6hu;
    } || function (l32tz, ch56nf) {
      for (var lt30vs in ch56nf) if (ch56nf['hasOwnProperty'](lt30vs)) l32tz[lt30vs] = ch56nf[lt30vs];
    }, r7mgeq(hfn6c5, $b491a);
  };return function (mgwk7, a_bhu1) {
    r7mgeq(mgwk7, a_bhu1);function hua1b() {
      this['constructor'] = mgwk7;
    }mgwk7['prototype'] = a_bhu1 === null ? Object['create'](a_bhu1) : (hua1b['prototype'] = a_bhu1['prototype'], new hua1b());
  };
}(),
    r_pqegd = window['Sygame'],
    r_qenf = ![],
    r_a94 = function () {
  function stlv03() {}return stlv03['init'] = function () {
    r_qenf ? this['sygame'] = { 'channel': '3477d2273abd484ba2a0e04ad4971b3c', 'role_id': undefined, 'openid': 'oxmOf5biumkGash-Xht9FVAlswVk', 'appid': 'wx2936121c4817bf46' } : this['sygame'] = r_pqegd;
  }, stlv03['getTimeStamp'] = function () {
    return new Date()['getTime']();
  }, stlv03['setResMap'] = function (me7qr, h_6u5c) {
    this['resMap'][me7qr] = me7qr + '?' + h_6u5c;
  }, stlv03['getResMap'] = function (omkwy8) {
    return this['resMap'][omkwy8];
  }, stlv03['resMap'] = {}, stlv03;
}(),
    r_hn6_5c = function () {
  function k7gwr() {
    this['getIcon'] = 'https://wx.11babay.cn/uploads/f/fkccc1532944783/5/2/c/7/60dc442c4fbc5.png', this['copyIcon'] = 'https://wx.11babay.cn/uploads/f/fkccc1532944783/3/0/1/7/60dc4409dce39.png', r_a94['init'](), this['getBoxCheckoutCode']();
  }return k7gwr['prototype']['send'] = function (mk8yw, u1$ab9, pdefg, fndpc5, gdef) {
    fndpc5 === void 0x0 && (fndpc5 = 'get');gdef === void 0x0 && (gdef = '' || null);var kjoiy = new Laya['HttpRequest']();kjoiy['http']['timeout'] = 0x2710, kjoiy['once'](Laya['Event']['COMPLETE'], this, u1$ab9), kjoiy['once'](Laya['Event']['ERROR'], this, pdefg), kjoiy['send'](mk8yw, gdef, fndpc5, 'text');
  }, k7gwr['prototype']['postSidebarApi'] = function () {
    var wmok8y = r_a94['sygame']['openid'],
        e7rmgq = '&channel=' + r_a94['sygame']['channel'] + '&wecha_id=' + wmok8y;this['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=sidebarApi' + e7rmgq, this['completeHandler'], this['errorHandler']);
  }, k7gwr['prototype']['getBoxCheckoutCode'] = function () {
    var e7gmr = Sygame['SY_CONF']['commitId'];this['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=getBoxCheckoutCode', this['getBoxCheckoutCodeRes'], this['errorHandler'], 'post', { 'commitId': e7gmr });
  }, k7gwr['prototype']['getBoxCheckoutCodeRes'] = function (lst3z) {
    var $_ba = JSON['parse'](lst3z);console['log']('getBoxCheckoutCode:', $_ba);if ($_ba['status'] == 0x3e9) {
      var abu_$1 = $_ba['info'];abu_$1 == 0xfa1 ? this['postSidebarApi']() : console['error']('盛也盒子\x20不显示' + $_ba);
    } else console['error']('盛也盒子 getBoxCheckoutCodeRes 其他错误' + $_ba);
  }, k7gwr['prototype']['completeHandler'] = function (mqr7e) {
    var fdqnep = JSON['parse'](mqr7e);console['log'](fdqnep);switch (fdqnep['status']) {case 0x3e9:
        var a_1uh = [];fdqnep['msg']['basics_image_url'] && a_1uh['push']({ 'url': fdqnep['msg']['basics_image_url'], 'type': Laya['Loader']['IMAGE'] }), fdqnep['msg']['public_code'] && a_1uh['push']({ 'url': fdqnep['msg']['public_code'], 'type': Laya['Loader']['IMAGE'] }), fdqnep['msg']['vip_customer_service'] && a_1uh['push']({ 'url': fdqnep['msg']['vip_customer_service'], 'type': Laya['Loader']['IMAGE'] }), fdqnep['msg']['vip_customer_service_not_add'] && a_1uh['push']({ 'url': fdqnep['msg']['vip_customer_service_not_add'], 'type': Laya['Loader']['IMAGE'] }), fdqnep['msg']['game_center_image_url'] && a_1uh['push']({ 'url': fdqnep['msg']['game_center_image_url'], 'type': Laya['Loader']['IMAGE'] }), fdqnep['msg']['vip_qrcode'] && a_1uh['push']({ 'url': fdqnep['msg']['vip_qrcode'], 'type': Laya['Loader']['IMAGE'] }), fdqnep['msg']['getIcon'] && a_1uh['push']({ 'url': this['getIcon'], 'type': Laya['Loader']['IMAGE'] }), fdqnep['msg']['copyIcon'] && a_1uh['push']({ 'url': this['copyIcon'], 'type': Laya['Loader']['IMAGE'] });for (var j2zxs = 0x0, h_5u16 = fdqnep['msg']['follow_gift_list']; j2zxs < h_5u16['length']; j2zxs++) {
          var t2l3sz = h_5u16[j2zxs];a_1uh['push']({ 'url': t2l3sz['url'], 'type': Laya['Loader']['IMAGE'] });
        }for (var $ua1b = 0x0, wk8 = fdqnep['msg']['vip_box_list']; $ua1b < wk8['length']; $ua1b++) {
          var t2l3sz = wk8[$ua1b];a_1uh['push']({ 'url': t2l3sz['url'], 'type': Laya['Loader']['IMAGE'] });
        }for (var ojiz2x = 0x0; ojiz2x < a_1uh['length']; ojiz2x++) {
          r_a94['setResMap'](a_1uh[ojiz2x]['url'], r_a94['getTimeStamp']()), a_1uh[ojiz2x]['url'] = r_a94['getResMap'](a_1uh[ojiz2x]['url']);
        }Laya['loader']['load'](a_1uh, Laya['Handler']['create'](this, this['initGame'])), this['data'] = fdqnep['msg'];break;case 0x3ea:
        r_hu5_6['msg']('空的游戏channel');break;case 0x3eb:
        r_hu5_6['msg']('错误的游戏channel');break;case 0x3ec:
        r_hu5_6['msg']('未找到对应游戏大类');break;case 0x3ed:
        r_hu5_6['msg']('未设置侧边栏');break;}
  }, k7gwr['prototype']['errorHandler'] = function (tvs3l) {}, k7gwr['prototype']['initGame'] = function () {
    var c6h = new r_jyk8o(this);c6h['show']();
  }, k7gwr;
}(),
    r_jyk8o = function () {
  function hu6_5c(k8oijy) {
    this['page'] = 0x3, this['rolePriceData'] = {}, this['boxlist'] = [], this['donwX'] = 0x0, this['downY'] = 0x0, this['tool'] = k8oijy;
  }return hu6_5c['prototype']['setChildMouseThroughs'] = function (epdf) {
    var yji8ok = epdf['_childs'] || [];for (var zijx = 0x0; zijx < yji8ok['length']; zijx++) {
      yji8ok[zijx] && (yji8ok[zijx]['mouseThrough'] = !![]);
    }
  }, hu6_5c['prototype']['show'] = function () {
    if (this['tool']['data']['on'] === '1') {
      this['main'] = new r_sl2['demoui']['MainUI'](), Laya['stage']['addChild'](this['main']), this['main']['mouseThrough'] = !![];var tlv0 = this['main']['_childs'] || [];for (var sxji = 0x0; sxji < tlv0['length']; sxji++) {
        tlv0[sxji]['mouseThrough'] = !![];
      }this['setChildMouseThroughs'](this['main']['_childs']), this['setChildMouseThroughs'](this['main']['_childs'][0x0]), this['initIcon'](), this['initEvent'](), this['initView'](), r_hu5_6['init']();
    }
  }, hu6_5c['prototype']['initView'] = function () {
    var xizs2 = this,
        dgqef = this['tool']['data']['follow_down_words']['replace'](/\\n/g, '\x0a');this['main']['box_1_lab_info']['text'] = dgqef;for (var jyxi8o = 0x1; jyxi8o <= this['tool']['data']['follow_gift_list']['length']; jyxi8o++) {
      var hbua = this['tool']['data']['follow_gift_list'][jyxi8o - 0x1];this['main']['box_1_img_' + jyxi8o]['skin'] = hbua['url'], this['main']['box_1_lab_' + jyxi8o]['text'] = hbua['name'];
    }for (var jyxi8o = 0x1; jyxi8o <= this['tool']['data']['vip_box_list']['length']; jyxi8o++) {
      var hbua = this['tool']['data']['vip_box_list'][jyxi8o - 0x1];this['main']['box_2_img_' + jyxi8o]['skin'] = hbua['url'], this['main']['box_2_lab_' + jyxi8o]['text'] = hbua['name'];
    }this['main']['box_2_lab_m_1']['text'] = '方法一：单日充值' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_m_2']['text'] = '方法二：历史累计充值' + +this['tool']['data']['y'] + '元', this['main']['box_2_lab_v_1']['text'] = (this['rolePriceData']['todayPrice'] || 0x0) + '/' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_v_2']['text'] = (this['rolePriceData']['allPrice'] || 0x0) + '/' + +this['tool']['data']['y'] + '元', this['main']['box_2_btn_copy']['skin'] = this['tool']['copyIcon'], this['main']['box_2_btn_get']['skin'] = this['tool']['getIcon'], this['main']['box_2_btn_copy']['visible'] = ![], this['main']['box_2_btn_get']['on'](Laya['Event']['CLICK'], this, function () {
      if (xizs2['rolePriceData']['is_vip'] == 0x0) {
        r_hu5_6['msg']('请先获取vip资格');return;
      }xizs2['main']['box_2_lab_wx']['text'] = this['rolePriceData']['vip_wx'], xizs2['main']['box_2_btn_copy']['visible'] = !![];
    }), this['main']['box_2_btn_copy']['on'](Laya['Event']['CLICK'], this, function () {
      xizs2['copyText'](this['rolePriceData']['vip_wx']);
    }), this['main']['box_2_addclick']['on'](Laya['Event']['CLICK'], this, function () {
      if (xizs2['rolePriceData']['is_vip'] == 0x0) return;this['main']['box_help_qrcode']['skin'] = xizs2['rolePriceData']['vip_qrcode'], xizs2['main']['box_help']['visible'] = !![];
    }), this['main']['box_help_close']['on'](Laya['Event']['CLICK'], this, function () {
      xizs2['main']['box_help']['visible'] = ![];
    }), this['main']['box_help_bg']['skin'] = this['tool']['data']['vip_customer_service_not_add'], this['main']['box_help_qrcode']['skin'] = xizs2['rolePriceData']['vip_qrcode'], this['main']['box_help_qrcode']['scaleX'] = 0xa0 / this['main']['box_help_qrcode']['width'], this['main']['box_help_qrcode']['scaleY'] = 0xa0 / this['main']['box_help_qrcode']['width'], this['main']['box_3_panel']['vScrollBar']['visible'] = ![], this['main']['box_3_panel']['vScrollBarSkin'] = 'common_atlas/scrollBar.png';
  }, hu6_5c['prototype']['initIcon'] = function () {
    this['icon'] = new Laya['Image'](), this['icon']['skin'] = this['tool']['data']['basics_image_url'], this['icon']['x'] = 0x0, this['icon']['y'] = 0xc8, this['icon']['width'] = 0x66, this['icon']['height'] = 0x6f, this['main']['addChild'](this['icon']), this['icon']['on'](Laya['Event']['MOUSE_DOWN'], this, this['iconPress']), this['icon']['on'](Laya['Event']['MOUSE_UP'], this, this['iconUp']), this['icon']['on'](Laya['Event']['MOUSE_WHEEL'], this, this['iconMove']), this['dragRect'] = new Laya['Rectangle'](-this['icon']['width'] / 0x2, 0x0, Laya['stage']['width'], Laya['stage']['height'] - this['icon']['height'] / 0x2);
  }, hu6_5c['prototype']['initEvent'] = function () {
    var w8koym = this;this['main']['btn_1']['on'](Laya['Event']['CLICK'], this, function () {
      if (w8koym['page'] == 0x1) return;w8koym['page1']();
    }), this['main']['btn_2']['on'](Laya['Event']['CLICK'], this, function () {
      if (w8koym['page'] == 0x2) return;w8koym['page2']();
    }), this['main']['btn_3']['on'](Laya['Event']['CLICK'], this, function () {
      if (w8koym['page'] == 0x3) return;w8koym['page3']();
    }), this['main']['btn_close']['on'](Laya['Event']['CLICK'], this, function () {
      w8koym['main']['bg']['x'] = -0x2ee, w8koym['icon']['visible'] = !![];
    });
  }, hu6_5c['prototype']['initBoard'] = function () {
    this['isInitBoard'] = !![], this['page1']();
  }, hu6_5c['prototype']['showBoard'] = function () {
    this['main']['bg']['x'] = 0x0, this['icon']['visible'] = ![];var s3vtzl = _rYE['selectedServer']['server_id'],
        gwrem7 = _rYE['selectedServer']['server_name'],
        lst0 = _rYE['roleId'],
        w8ymko = _rYE['roleName'],
        jxoyi8 = r_a94['sygame']['openid'],
        _c5 = '&role_id=' + r_a94['sygame']['role_id'] + '&channel=' + r_a94['sygame']['channel'] + '&server_id=' + s3vtzl + '&server_name=' + gwrem7 + '&wecha_id=' + jxoyi8 + '&role_id=' + lst0 + '&role_name=' + w8ymko;this['tool']['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=sidebarApiRoleId' + _c5, this['rolePriceHandler']['bind'](this), this['roleError']['bind'](this));
  }, hu6_5c['prototype']['page1'] = function () {
    this['page'] = 0x1, this['main']['bg']['skin'] = this['tool']['data']['public_code'], this['main']['box_1_show']['visible'] = !![], this['main']['box_2_show']['visible'] = ![], this['main']['box_3_show']['visible'] = ![];
  }, hu6_5c['prototype']['page2'] = function () {
    this['page'] = 0x2, this['main']['bg']['skin'] = this['tool']['data']['vip_customer_service'], this['main']['box_1_show']['visible'] = ![], this['main']['box_2_show']['visible'] = !![], this['main']['box_3_show']['visible'] = ![];
  }, hu6_5c['prototype']['page3'] = function () {
    this['page'] = 0x3, this['main']['bg']['skin'] = this['tool']['data']['game_center_image_url'], this['main']['box_1_show']['visible'] = ![], this['main']['box_2_show']['visible'] = ![], this['main']['box_3_show']['visible'] = !![], this['sendBox'] || this['getBoxList'](0x0), this['sendBox'] = !![], r_pqegd && r_pqegd['syClickOpenBox']();
  }, hu6_5c['prototype']['getBoxList'] = function (b$u19a) {
    var f5hn6 = this;r_pqegd && r_pqegd['syGetBoxList']({ 'page': b$u19a, 'count': 0xc })['then'](function (dgqf) {
      var mk7wr8 = dgqf['data'];mk7wr8['status'] == 0x3e9 ? mk7wr8['data'] && mk7wr8['data']['length'] && (f5hn6['boxlist'] = f5hn6['boxlist']['concat'](mk7wr8['data']), b$u19a++, f5hn6['getBoxList'](b$u19a)) : f5hn6['boxListHandler']();
    });
  }, hu6_5c['prototype']['copyText'] = function (h_5uc6) {
    try {
      wx['setClipboardData']({ 'data': h_5uc6, 'success': function (ztsx) {
          console['log']('复制成功:', ztsx);
        } });
    } catch (tj2zx) {}
  }, hu6_5c['prototype']['rolePriceHandler'] = function (vslz3t) {
    this['rolePriceData'] = JSON['parse'](vslz3t);switch (this['rolePriceData']['status']) {case 0x3e9:
        this['main']['box_2_lab_v_1']['text'] = (this['rolePriceData']['todayPrice'] || 0x0) + '/' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_v_2']['text'] = (this['rolePriceData']['allPrice'] || 0x0) + '/' + +this['tool']['data']['y'] + '元';break;case 0x3ea:
        break;case 0x3eb:
        break;}
  }, hu6_5c['prototype']['roleError'] = function () {}, hu6_5c['prototype']['boxListHandler'] = function () {
    var z3s2tl = function (iykw8) {
      var _cnh56 = xo2yj['boxlist'][iykw8],
          rykm = new r_sl2['demoui']['BoxItemUI']();rykm['icon']['skin'] = _cnh56['icon'], rykm['title']['text'] = _cnh56['title'], rykm['x'] = 0xa0 * (iykw8 % 0x3), rykm['y'] = 0xa0 * (iykw8 / 0x3 ^ 0x0), xo2yj['main']['box_3_panel']['addChild'](rykm);var weg7r = { 'appid': r_a94['sygame']['appid'], 'game_id': _cnh56['game_id'], 'jump_appid': _cnh56['jump_appid'], 'jump_path': _cnh56['jump_path'], 'tunnel_id': _cnh56['tunnel_id'], 'uv': 0x0, 'wecha_id': r_a94['sygame']['openid'] },
          iywk8 = _cnh56['preview_img'],
          _h516 = _cnh56['jump_type'],
          qe7mgr = _cnh56['kf_session'];rykm['on'](Laya['Event']['CLICK'], xo2yj, function () {
        r_pqegd && r_pqegd['syClickBox']({ 'game_id': _cnh56['game_id'], 'tunnel_id': _cnh56['tunnel_id'], 'jump_appid': _cnh56['jump_appid'], 'jump_path': _cnh56['jump_path'] })['then'](function (txsz23) {
          if (_h516 === '0') wx['navigateToMiniProgram']({ 'appId': weg7r['jump_appid'], 'path': weg7r['jump_path'], 'fail': function (xioj2) {
              if (!iywk8) return;wx['previewImage']({ 'urls': [iywk8] });
            } });else {
            if (_h516 === '1') {
              if (!iywk8) return;wx['previewImage']({ 'urls': [iywk8] });
            } else {
              if (_h516 === '2') {
                if (!qe7mgr) return;wx['openCustomerServiceConversation']({ 'sessionFrom': qe7mgr, 'showMessageCard': !![], 'sendMessageTitle': '', 'sendMessagePath': '', 'sendMessageImg': '' });
              }
            }
          }
        });
      });
    },
        xo2yj = this;for (var tlsv30 = 0x0; tlsv30 < this['boxlist']['length']; tlsv30++) {
      z3s2tl(tlsv30);
    }
  }, hu6_5c['prototype']['boxListError'] = function () {}, hu6_5c['prototype']['boxClickHandler'] = function () {}, hu6_5c['prototype']['iconPress'] = function (y8ijko) {
    this['donwX'] = y8ijko['target']['x'], this['donwY'] = y8ijko['target']['y'], this['icon']['startDrag'](this['dragRect']), this['isMove'] = ![], this['isPress'] = !![];
  }, hu6_5c['prototype']['iconMove'] = function (zx2jis) {
    this['isMove'] = !![];
  }, hu6_5c['prototype']['iconUp'] = function ($ub1a9) {
    var a6uh1 = $ub1a9['target']['x'],
        tl3vzs = $ub1a9['target']['y'];this['icon']['stopDrag'](), a6uh1 == this['donwX'] && this['donwY'] == tl3vzs && (this['isInitBoard'] || this['initBoard'](), this['showBoard']()), this['isMove'] = ![], this['isPress'] = ![];
  }, hu6_5c;
}(),
    r_sl2;(function (pnqde) {
  var x2joyi;(function (y2xoji) {
    var sztvl3 = function (rw7mk8) {
      r_ix2joz(c5f6nd, rw7mk8);function c5f6nd() {
        return rw7mk8['call'](this) || this;
      }return c5f6nd['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), rw7mk8['prototype']['createChildren']['call'](this), this['createView'](pnqde['demoui']['BoxItemUI']['uiView']);
      }, c5f6nd['uiView'] = { 'type': 'View', 'props': { 'width': 0xb4, 'height': 0xa0 }, 'child': [{ 'type': 'Image', 'props': { 'y': 0x3, 'x': 0x20, 'width': 0x73, 'var': 'icon', 'height': 0x73 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x79, 'x': -0x21, 'width': 0xb4, 'var': 'title', 'valign': 'middle', 'height': 0x22, 'fontSize': 0x16, 'color': '#441d1c', 'align': 'center' } }] }] }, c5f6nd;
    }(laya['ui']['View']);y2xoji['BoxItemUI'] = sztvl3;
  })(x2joyi = pnqde['demoui'] || (pnqde['demoui'] = {}));
})(r_sl2 || (r_sl2 = {})), function (s3tzvl) {
  var dnepq;(function (gew7m) {
    var ywo8km = function (six2j) {
      r_ix2joz(gqepd, six2j);function gqepd() {
        return six2j['call'](this) || this;
      }return gqepd['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), six2j['prototype']['createChildren']['call'](this), this['createView'](s3tzvl['demoui']['MainUI']['uiView']);
      }, gqepd['uiView'] = { 'type': 'View', 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x2ee, 'top': 0x0, 'right': 0x0, 'left': 0x0, 'height': 0x536, 'bottom': 0x0 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x2ee, 'height': 0x536, 'centerY': 0x0 }, 'child': [{ 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x2ee, 'var': 'bg', 'height': 0x536 }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x2ee, 'visible': ![], 'var': 'box_1_show', 'height': 0x536, 'centerY': 0x0 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x253, 'x': 0x2e, 'width': 0x1d0, 'var': 'box_1_lab_info', 'leading': 0xa, 'height': 0x97, 'fontSize': 0x18, 'color': '#a959ee' } }, { 'type': 'HBox', 'props': { 'y': 0x2ee, 'x': 0x14, 'width': 0x1fe, 'space': 0x35, 'height': 0x78, 'align': 'top' }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x58, 'var': 'box_1_img_1', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_1', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0xa, 'x': 0xa, 'width': 0x58, 'var': 'box_1_img_2', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_2', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x14, 'x': 0x14, 'width': 0x58, 'var': 'box_1_img_3', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_3', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x1e, 'x': 0x1e, 'width': 0x58, 'var': 'box_1_img_4', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_4', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }] }] }, { 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'visible': ![], 'var': 'box_2_show' }, 'child': [{ 'type': 'HBox', 'props': { 'y': 0x220, 'x': 0x18, 'width': 0x1f4, 'space': 0x2c, 'height': 0x56, 'align': 'top' }, 'child': [{ 'type': 'Image', 'props': { 'y': 2.5, 'x': 0x0, 'width': 0x58, 'var': 'box_2_img_1', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_1', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0xc, 'x': 0xa, 'width': 0x58, 'var': 'box_2_img_2', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_2', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x16, 'x': 0x14, 'width': 0x58, 'var': 'box_2_img_3', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_3', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x20, 'x': 0x1e, 'width': 0x58, 'var': 'box_2_img_4', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_4', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x2a, 'x': 0x28, 'width': 0x58, 'var': 'box_2_img_5', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_5', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }] }, { 'type': 'Box', 'props': { 'y': 0x384, 'x': 0x0, 'width': 0x221, 'height': 0x44 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x0, 'x': 0x28, 'width': 0x122, 'var': 'box_2_lab_m_1', 'text': '方法一\uFF1A单日充值1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300' } }, { 'type': 'Text', 'props': { 'y': 0x1e, 'x': 0x28, 'width': 0x122, 'var': 'box_2_lab_m_2', 'text': '方法一\uFF1A历史累计充值1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300' } }, { 'type': 'Text', 'props': { 'y': 0x0, 'x': 0x141, 'width': 0xa4, 'var': 'box_2_lab_v_1', 'text': '1000/1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300', 'align': 'right' } }, { 'type': 'Text', 'props': { 'y': 0x1e, 'x': 0x141, 'width': 0xa4, 'var': 'box_2_lab_v_2', 'text': '1000/1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300', 'align': 'right' } }] }, { 'type': 'Image', 'props': { 'y': 0x1aa, 'x': 0x159, 'width': 0x66, 'var': 'box_2_btn_get', 'stateNum': 0x1, 'height': 0x26 } }, { 'type': 'Image', 'props': { 'y': 0x1aa, 'x': 0x159, 'width': 0x66, 'var': 'box_2_btn_copy', 'stateNum': 0x1, 'height': 0x26 } }, { 'type': 'Button', 'props': { 'y': 0x1d2, 'x': 0x126, 'width': 0xc9, 'var': 'box_2_addclick', 'stateNum': 0x1, 'height': 0x1b } }, { 'type': 'Text', 'props': { 'y': 0x13c, 'x': 0x17a, 'width': 0xa3, 'var': 'box_2_lab_wx', 'height': 0x1f, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'left' } }] }, { 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'visible': ![], 'var': 'box_3_show' }, 'child': [{ 'type': 'Panel', 'props': { 'y': 0xf5, 'x': 0x10, 'width': 0x201, 'var': 'box_3_panel', 'vScrollBarSkin': '', 'height': 0x29e } }] }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0x0, 'width': 0xbb, 'var': 'btn_1', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0xba, 'width': 0xbb, 'var': 'btn_2', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0x177, 'width': 0xbb, 'var': 'btn_3', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x203, 'x': 0x22e, 'width': 0x25, 'var': 'btn_close', 'height': 0x8f } }, { 'type': 'Box', 'props': { 'width': 0x2ee, 'visible': ![], 'var': 'box_help', 'height': 0x536 }, 'child': [{ 'type': 'Sprite', 'props': { 'y': 0x0, 'x': 0x0, 'mouseThrough': ![], 'alpha': 0.7 }, 'child': [{ 'type': 'Rect', 'props': { 'width': 0x2ee, 'lineWidth': 0x1, 'height': 0x536, 'fillColor': '#000000' } }] }, { 'type': 'Image', 'props': { 'y': 0x158, 'x': 0x28, 'width': 0x1d2, 'var': 'box_help_bg', 'height': 0x203 }, 'child': [{ 'type': 'Button', 'props': { 'y': -0x1, 'x': 0x1a0, 'width': 0x33, 'var': 'box_help_close', 'height': 0x28 } }, { 'type': 'Image', 'props': { 'y': 0x3f, 'x': 0x98, 'width': 0xa0, 'var': 'box_help_qrcode', 'height': 0xa0 } }] }] }] }] }] }, gqepd;
    }(laya['ui']['View']);gew7m['MainUI'] = ywo8km;
  })(dnepq = s3tzvl['demoui'] || (s3tzvl['demoui'] = {}));
}(r_sl2 || (r_sl2 = {})), function (pdqfnc) {
  var mrwy8;(function (wk8rmy) {
    var sx23 = function (ym8wrk) {
      r_ix2joz(tlzsv3, ym8wrk);function tlzsv3() {
        return ym8wrk['call'](this) || this;
      }return tlzsv3['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), ym8wrk['prototype']['createChildren']['call'](this), this['createView'](pdqfnc['demoui']['ToastUI']['uiView']);
      }, tlzsv3['uiView'] = { 'type': 'View', 'props': { 'width': 0x2ee, 'height': 0x536 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x12c, 'height': 0x32, 'centerY': 0x0, 'centerX': 0x0 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x12c, 'height': 0x32, 'centerX': 0x0, 'alpha': 0.5 }, 'child': [{ 'type': 'Rect', 'props': { 'width': 0x12c, 'lineWidth': 0x1, 'height': 0x32, 'fillColor': '#382f2f' } }] }, { 'type': 'Text', 'props': { 'width': 0x12c, 'var': 'lab_msg', 'valign': 'middle', 'text': 'text', 'height': 0x32, 'fontSize': 0x18, 'color': '#ffffff', 'align': 'center' } }] }] }, tlzsv3;
    }(laya['ui']['View']);wk8rmy['ToastUI'] = sx23;
  })(mrwy8 = pdqfnc['demoui'] || (pdqfnc['demoui'] = {}));
}(r_sl2 || (r_sl2 = {}));var r_hu5_6 = function () {
  function g7kwmr() {}return g7kwmr['init'] = function () {
    !this['ui'] && (this['ui'] = new r_sl2['demoui']['ToastUI'](), this['ui']['visible'] = ![], Laya['stage']['addChild'](this['ui']));
  }, g7kwmr['msg'] = function (gem7qr) {
    var uh_51 = this;!this['ui'] && g7kwmr['init'](), this['ui']['visible'] = !![], this['ui']['lab_msg']['text'] = gem7qr, clearTimeout(this['interval']), this['interval'] = setTimeout(function () {
      uh_51['ui']['visible'] = ![];
    }, 0x7d0);
  }, g7kwmr;
}();window['minitool'] = r_hn6_5c;