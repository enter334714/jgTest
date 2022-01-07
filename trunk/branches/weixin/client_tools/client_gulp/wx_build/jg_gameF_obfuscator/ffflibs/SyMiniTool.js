var k = wx.$f;
var fiu1mvb = this && this['__extends'] || function () {
  var c4_6o = function (ubvmi1, bmiufv) {
    return c4_6o = Object['setPrototypeOf'] || { '__proto__': [] } instanceof Array && function (ncwds, b1vm) {
      ncwds['__proto__'] = b1vm;
    } || function (fh0im, exrzn) {
      for (var sj6dc in exrzn) if (exrzn['hasOwnProperty'](sj6dc)) fh0im[sj6dc] = exrzn[sj6dc];
    }, c4_6o(ubvmi1, bmiufv);
  };return function ($p3ay, rez7x8) {
    c4_6o($p3ay, rez7x8);function v91gb() {
      this['constructor'] = $p3ay;
    }$p3ay['prototype'] = rez7x8 === null ? Object['create'](rez7x8) : (v91gb['prototype'] = rez7x8['prototype'], new v91gb());
  };
}(),
    fd6j2co = window['Sygame'],
    fz7$3r8 = ![],
    fnex8r = function () {
  function _q24k() {}return _q24k['init'] = function () {
    fz7$3r8 ? this['sygame'] = { 'channel': '3477d2273abd484ba2a0e04ad4971b3c', 'role_id': undefined, 'openid': 'oxmOf5biumkGash-Xht9FVAlswVk', 'appid': 'wx2936121c4817bf46' } : this['sygame'] = fd6j2co;
  }, _q24k['getTimeStamp'] = function () {
    return new Date()['getTime']();
  }, _q24k['setResMap'] = function (ocj2, j462co) {
    this['resMap'][ocj2] = ocj2 + '?' + j462co;
  }, _q24k['getResMap'] = function (djs6c) {
    return this['resMap'][djs6c];
  }, _q24k['resMap'] = {}, _q24k;
}(),
    f_kqh5 = function () {
  function wndse() {
    this['getIcon'] = 'https://wx.11babay.cn/uploads/f/fkccc1532944783/5/2/c/7/60dc442c4fbc5.png', this['copyIcon'] = 'https://wx.11babay.cn/uploads/f/fkccc1532944783/3/0/1/7/60dc4409dce39.png', fnex8r['init'](), this['getBoxCheckoutCode']();
  }return wndse['prototype']['send'] = function (mfbtvi, _4qk0, c246_, dos6c, _6k42o) {
    dos6c === void 0x0 && (dos6c = 'get');_6k42o === void 0x0 && (_6k42o = '' || null);var vi1umb = new Laya['HttpRequest']();vi1umb['http']['timeout'] = 0x2710, vi1umb['once'](Laya['Event']['COMPLETE'], this, _4qk0), vi1umb['once'](Laya['Event']['ERROR'], this, c246_), vi1umb['send'](mfbtvi, _6k42o, dos6c, 'text');
  }, wndse['prototype']['postSidebarApi'] = function () {
    var $z78r = fnex8r['sygame']['openid'],
        ewsnxz = '&channel=' + fnex8r['sygame']['channel'] + '&wecha_id=' + $z78r;this['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=sidebarApi' + ewsnxz, this['completeHandler'], this['errorHandler']);
  }, wndse['prototype']['getBoxCheckoutCode'] = function () {
    var qh0fm = Sygame['SY_CONF']['commitId'];this['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=getBoxCheckoutCode', this['getBoxCheckoutCodeRes'], this['errorHandler'], 'post', { 'commitId': qh0fm });
  }, wndse['prototype']['getBoxCheckoutCodeRes'] = function (cndsw) {
    var h5q_k0 = JSON['parse'](cndsw);console['log']('getBoxCheckoutCode:', h5q_k0);if (h5q_k0['status'] == 0x3e9) {
      var q0thf = h5q_k0['info'];q0thf == 0xfa1 ? this['postSidebarApi']() : console['error']('盛也盒子\x20不显示' + h5q_k0);
    } else console['error']('盛也盒子 getBoxCheckoutCodeRes 其他错误' + h5q_k0);
  }, wndse['prototype']['completeHandler'] = function (p73ya$) {
    var eznwsx = JSON['parse'](p73ya$);console['log'](eznwsx);switch (eznwsx['status']) {case 0x3e9:
        var jnwcd = [];eznwsx['msg']['basics_image_url'] && jnwcd['push']({ 'url': eznwsx['msg']['basics_image_url'], 'type': Laya['Loader']['IMAGE'] }), eznwsx['msg']['public_code'] && jnwcd['push']({ 'url': eznwsx['msg']['public_code'], 'type': Laya['Loader']['IMAGE'] }), eznwsx['msg']['vip_customer_service'] && jnwcd['push']({ 'url': eznwsx['msg']['vip_customer_service'], 'type': Laya['Loader']['IMAGE'] }), eznwsx['msg']['vip_customer_service_not_add'] && jnwcd['push']({ 'url': eznwsx['msg']['vip_customer_service_not_add'], 'type': Laya['Loader']['IMAGE'] }), eznwsx['msg']['game_center_image_url'] && jnwcd['push']({ 'url': eznwsx['msg']['game_center_image_url'], 'type': Laya['Loader']['IMAGE'] }), eznwsx['msg']['vip_qrcode'] && jnwcd['push']({ 'url': eznwsx['msg']['vip_qrcode'], 'type': Laya['Loader']['IMAGE'] }), eznwsx['msg']['getIcon'] && jnwcd['push']({ 'url': this['getIcon'], 'type': Laya['Loader']['IMAGE'] }), eznwsx['msg']['copyIcon'] && jnwcd['push']({ 'url': this['copyIcon'], 'type': Laya['Loader']['IMAGE'] });for (var xnezr = 0x0, dxw = eznwsx['msg']['follow_gift_list']; xnezr < dxw['length']; xnezr++) {
          var tqh0f5 = dxw[xnezr];jnwcd['push']({ 'url': tqh0f5['url'], 'type': Laya['Loader']['IMAGE'] });
        }for (var njsc = 0x0, k425q_ = eznwsx['msg']['vip_box_list']; njsc < k425q_['length']; njsc++) {
          var tqh0f5 = k425q_[njsc];jnwcd['push']({ 'url': tqh0f5['url'], 'type': Laya['Loader']['IMAGE'] });
        }for (var $78ry = 0x0; $78ry < jnwcd['length']; $78ry++) {
          fnex8r['setResMap'](jnwcd[$78ry]['url'], fnex8r['getTimeStamp']()), jnwcd[$78ry]['url'] = fnex8r['getResMap'](jnwcd[$78ry]['url']);
        }Laya['loader']['load'](jnwcd, Laya['Handler']['create'](this, this['initGame'])), this['data'] = eznwsx['msg'];break;case 0x3ea:
        fsezxnw['msg']('空的游戏channel');break;case 0x3eb:
        fsezxnw['msg']('错误的游戏channel');break;case 0x3ec:
        fsezxnw['msg']('未找到对应游戏大类');break;case 0x3ed:
        fsezxnw['msg']('未设置侧边栏');break;}
  }, wndse['prototype']['errorHandler'] = function (kq5th0) {}, wndse['prototype']['initGame'] = function () {
    var x8erz = new f$yp37a(this);x8erz['show']();
  }, wndse;
}(),
    f$yp37a = function () {
  function bui1m(khq5t0) {
    this['page'] = 0x3, this['rolePriceData'] = {}, this['boxlist'] = [], this['donwX'] = 0x0, this['downY'] = 0x0, this['tool'] = khq5t0;
  }return bui1m['prototype']['setChildMouseThroughs'] = function (dwsnxe) {
    var bifmvu = dwsnxe['_childs'] || [];for (var j2odc = 0x0; j2odc < bifmvu['length']; j2odc++) {
      bifmvu[j2odc] && (bifmvu[j2odc]['mouseThrough'] = !![]);
    }
  }, bui1m['prototype']['show'] = function () {
    if (this['tool']['data']['on'] === '1') {
      this['main'] = new f_o26c4['demoui']['MainUI'](), Laya['stage']['addChild'](this['main']), this['main']['mouseThrough'] = !![];var z8xew = this['main']['_childs'] || [];for (var $a3y7 = 0x0; $a3y7 < z8xew['length']; $a3y7++) {
        z8xew[$a3y7]['mouseThrough'] = !![];
      }this['setChildMouseThroughs'](this['main']['_childs']), this['setChildMouseThroughs'](this['main']['_childs'][0x0]), this['initIcon'](), this['initEvent'](), this['initView'](), fsezxnw['init'](), this['main']['bg']['x'] = -0x2ee;
    }
  }, bui1m['prototype']['initView'] = function () {
    var cosdj6 = this,
        dsxnwe = this['tool']['data']['follow_down_words']['replace'](/\\n/g, '\x0a');this['main']['box_1_lab_info']['text'] = dsxnwe;for (var _2q = 0x1; _2q <= this['tool']['data']['follow_gift_list']['length']; _2q++) {
      var e8zx7 = this['tool']['data']['follow_gift_list'][_2q - 0x1];this['main']['box_1_img_' + _2q]['skin'] = e8zx7['url'], this['main']['box_1_lab_' + _2q]['text'] = e8zx7['name'];
    }for (var _2q = 0x1; _2q <= this['tool']['data']['vip_box_list']['length']; _2q++) {
      var e8zx7 = this['tool']['data']['vip_box_list'][_2q - 0x1];this['main']['box_2_img_' + _2q]['skin'] = e8zx7['url'], this['main']['box_2_lab_' + _2q]['text'] = e8zx7['name'];
    }this['main']['box_2_lab_m_1']['text'] = '方法一：单日充值' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_m_2']['text'] = '方法二：历史累计充值' + +this['tool']['data']['y'] + '元', this['main']['box_2_lab_v_1']['text'] = (this['rolePriceData']['todayPrice'] || 0x0) + '/' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_v_2']['text'] = (this['rolePriceData']['allPrice'] || 0x0) + '/' + +this['tool']['data']['y'] + '元', this['main']['box_2_btn_copy']['skin'] = this['tool']['copyIcon'], this['main']['box_2_btn_get']['skin'] = this['tool']['getIcon'], this['main']['box_2_btn_copy']['visible'] = ![], this['main']['box_2_btn_get']['on'](Laya['Event']['CLICK'], this, function () {
      if (cosdj6['rolePriceData']['is_vip'] == 0x0) {
        fsezxnw['msg']('请先获取vip资格');return;
      }cosdj6['main']['box_2_lab_wx']['text'] = this['rolePriceData']['vip_wx'], cosdj6['main']['box_2_btn_copy']['visible'] = !![];
    }), this['main']['box_2_btn_copy']['on'](Laya['Event']['CLICK'], this, function () {
      cosdj6['copyText'](this['rolePriceData']['vip_wx']);
    }), this['main']['box_2_addclick']['on'](Laya['Event']['CLICK'], this, function () {
      if (cosdj6['rolePriceData']['is_vip'] == 0x0) return;this['main']['box_help_qrcode']['skin'] = cosdj6['rolePriceData']['vip_qrcode'], cosdj6['main']['box_help']['visible'] = !![];
    }), this['main']['box_help_close']['on'](Laya['Event']['CLICK'], this, function () {
      cosdj6['main']['box_help']['visible'] = ![];
    }), this['main']['box_help_bg']['skin'] = this['tool']['data']['vip_customer_service_not_add'], this['main']['box_help_qrcode']['skin'] = cosdj6['rolePriceData']['vip_qrcode'], this['main']['box_help_qrcode']['scaleX'] = 0xa0 / this['main']['box_help_qrcode']['width'], this['main']['box_help_qrcode']['scaleY'] = 0xa0 / this['main']['box_help_qrcode']['width'], this['main']['box_3_panel']['vScrollBar']['visible'] = ![], this['main']['box_3_panel']['vScrollBarSkin'] = 'common_atlas/scrollBar.png';
  }, bui1m['prototype']['initIcon'] = function () {
    this['icon'] = new Laya['Image'](), this['icon']['skin'] = this['tool']['data']['basics_image_url'], this['icon']['x'] = 0x0, this['icon']['y'] = 0xc8, this['icon']['width'] = 0x66, this['icon']['height'] = 0x6f, this['main']['addChild'](this['icon']), this['icon']['on'](Laya['Event']['MOUSE_DOWN'], this, this['iconPress']), this['icon']['on'](Laya['Event']['MOUSE_UP'], this, this['iconUp']), this['icon']['on'](Laya['Event']['MOUSE_WHEEL'], this, this['iconMove']), this['dragRect'] = new Laya['Rectangle'](-this['icon']['width'] / 0x2, 0x0, Laya['stage']['width'], Laya['stage']['height'] - this['icon']['height'] / 0x2);
  }, bui1m['prototype']['initEvent'] = function () {
    var xwzs = this;this['main']['btn_1']['on'](Laya['Event']['CLICK'], this, function () {
      if (xwzs['page'] == 0x1) return;xwzs['page1']();
    }), this['main']['btn_2']['on'](Laya['Event']['CLICK'], this, function () {
      if (xwzs['page'] == 0x2) return;xwzs['page2']();
    }), this['main']['btn_3']['on'](Laya['Event']['CLICK'], this, function () {
      if (xwzs['page'] == 0x3) return;xwzs['page3']();
    }), this['main']['btn_close']['on'](Laya['Event']['CLICK'], this, function () {
      xwzs['main']['bg']['x'] = -0x2ee, xwzs['icon']['visible'] = !![];
    });
  }, bui1m['prototype']['initBoard'] = function () {
    this['isInitBoard'] = !![], this['page1']();
  }, bui1m['prototype']['showBoard'] = function () {
    this['main']['bg']['x'] = 0x0, this['icon']['visible'] = ![];var cdsjw = F$L6['selectedServer']['server_id'],
        csjn = F$L6['selectedServer']['server_name'],
        k5h0q = F$L6['roleId'],
        fmhi0t = F$L6['roleName'],
        b9gv1 = fnex8r['sygame']['openid'],
        hmqf = '&role_id=' + fnex8r['sygame']['role_id'] + '&channel=' + fnex8r['sygame']['channel'] + '&server_id=' + cdsjw + '&server_name=' + csjn + '&wecha_id=' + b9gv1 + '&role_id=' + k5h0q + '&role_name=' + fmhi0t;this['tool']['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=sidebarApiRoleId' + hmqf, this['rolePriceHandler']['bind'](this), this['roleError']['bind'](this));
  }, bui1m['prototype']['page1'] = function () {
    this['page'] = 0x1;!bui1m['prototype']['page1Bg'] && (bui1m['prototype']['page1Bg'] = new Laya['Image'](this['tool']['data']['public_code']), this['main']['bg']['addChildAt'](bui1m['prototype']['page1Bg'], 0x0));if (bui1m['prototype']['page1Bg']) bui1m['prototype']['page1Bg']['visible'] = !![];if (bui1m['prototype']['page2Bg']) bui1m['prototype']['page2Bg']['visible'] = ![];if (bui1m['prototype']['page3Bg']) bui1m['prototype']['page3Bg']['visible'] = ![];this['main']['box_1_show']['visible'] = !![], this['main']['box_2_show']['visible'] = ![], this['main']['box_3_show']['visible'] = ![];
  }, bui1m['prototype']['page2'] = function () {
    this['page'] = 0x2;!bui1m['prototype']['page2Bg'] && (bui1m['prototype']['page2Bg'] = new Laya['Image'](this['tool']['data']['vip_customer_service']), this['main']['bg']['addChildAt'](bui1m['prototype']['page2Bg'], 0x0));if (bui1m['prototype']['page1Bg']) bui1m['prototype']['page1Bg']['visible'] = ![];if (bui1m['prototype']['page2Bg']) bui1m['prototype']['page2Bg']['visible'] = !![];if (bui1m['prototype']['page3Bg']) bui1m['prototype']['page3Bg']['visible'] = ![];this['main']['box_1_show']['visible'] = ![], this['main']['box_2_show']['visible'] = !![], this['main']['box_3_show']['visible'] = ![];
  }, bui1m['prototype']['page3'] = function () {
    this['page'] = 0x3;!bui1m['prototype']['page3Bg'] && (bui1m['prototype']['page3Bg'] = new Laya['Image'](this['tool']['data']['game_center_image_url']), this['main']['bg']['addChildAt'](bui1m['prototype']['page3Bg'], 0x0));if (bui1m['prototype']['page1Bg']) bui1m['prototype']['page1Bg']['visible'] = ![];if (bui1m['prototype']['page2Bg']) bui1m['prototype']['page2Bg']['visible'] = ![];if (bui1m['prototype']['page3Bg']) bui1m['prototype']['page3Bg']['visible'] = !![];bui1m['prototype']['page1Bg']['visible'] = ![], this['main']['bg']['skin'] = this['tool']['data']['game_center_image_url'], this['main']['box_1_show']['visible'] = ![], this['main']['box_2_show']['visible'] = ![], this['main']['box_3_show']['visible'] = !![], this['sendBox'] || this['getBoxList'](0x0), this['sendBox'] = !![], fd6j2co && fd6j2co['syClickOpenBox']();
  }, bui1m['prototype']['getBoxList'] = function (m0fh) {
    var fmvib = this;fd6j2co && fd6j2co['syGetBoxList']({ 'page': m0fh, 'count': 0xc })['then'](function (nexwzs) {
      var nzsx = nexwzs['data'];nzsx['status'] == 0x3e9 ? nzsx['data'] && nzsx['data']['length'] && (fmvib['boxlist'] = fmvib['boxlist']['concat'](nzsx['data']), m0fh++, fmvib['getBoxList'](m0fh)) : fmvib['boxListHandler']();
    });
  }, bui1m['prototype']['copyText'] = function (f0ihm) {
    try {
      wx['setClipboardData']({ 'data': f0ihm, 'success': function (zxswn) {
          console['log']('复制成功:', zxswn);
        } });
    } catch (k_hq5) {}
  }, bui1m['prototype']['rolePriceHandler'] = function (i0ftmh) {
    this['rolePriceData'] = JSON['parse'](i0ftmh);switch (this['rolePriceData']['status']) {case 0x3e9:
        this['main']['box_2_lab_v_1']['text'] = (this['rolePriceData']['todayPrice'] || 0x0) + '/' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_v_2']['text'] = (this['rolePriceData']['allPrice'] || 0x0) + '/' + +this['tool']['data']['y'] + '元';break;case 0x3ea:
        break;case 0x3eb:
        break;}
  }, bui1m['prototype']['roleError'] = function () {}, bui1m['prototype']['boxListHandler'] = function () {
    var h0f5qt = function (kh_5) {
      var itfm0h = a$y3r['boxlist'][kh_5],
          ti = new f_o26c4['demoui']['BoxItemUI']();ti['icon']['skin'] = itfm0h['icon'], ti['title']['text'] = itfm0h['title'], ti['x'] = 0xa0 * (kh_5 % 0x3), ti['y'] = 0xa0 * (kh_5 / 0x3 ^ 0x0), a$y3r['main']['box_3_panel']['addChild'](ti);var cj6od = { 'appid': fnex8r['sygame']['appid'], 'game_id': itfm0h['game_id'], 'jump_appid': itfm0h['jump_appid'], 'jump_path': itfm0h['jump_path'], 'tunnel_id': itfm0h['tunnel_id'], 'uv': 0x0, 'wecha_id': fnex8r['sygame']['openid'] },
          mbvuif = itfm0h['preview_img'],
          hq_k = itfm0h['jump_type'],
          fvmi = itfm0h['kf_session'];ti['on'](Laya['Event']['CLICK'], a$y3r, function () {
        fd6j2co && fd6j2co['syClickBox']({ 'game_id': itfm0h['game_id'], 'tunnel_id': itfm0h['tunnel_id'], 'jump_appid': itfm0h['jump_appid'], 'jump_path': itfm0h['jump_path'] })['then'](function (z8xer7) {
          if (hq_k === '0') wx['navigateToMiniProgram']({ 'appId': cj6od['jump_appid'], 'path': cj6od['jump_path'], 'fail': function (wcdjn) {
              if (!mbvuif) return;wx['previewImage']({ 'urls': [mbvuif] });
            } });else {
            if (hq_k === '1') {
              if (!mbvuif) return;wx['previewImage']({ 'urls': [mbvuif] });
            } else {
              if (hq_k === '2') {
                if (!fvmi) return;wx['openCustomerServiceConversation']({ 'sessionFrom': fvmi, 'showMessageCard': !![], 'sendMessageTitle': '', 'sendMessagePath': '', 'sendMessageImg': '' });
              }
            }
          }
        });
      });
    },
        a$y3r = this;for (var tbvm = 0x0; tbvm < this['boxlist']['length']; tbvm++) {
      h0f5qt(tbvm);
    }
  }, bui1m['prototype']['boxListError'] = function () {}, bui1m['prototype']['boxClickHandler'] = function () {}, bui1m['prototype']['iconPress'] = function (er7$) {
    this['donwX'] = er7$['target']['x'], this['donwY'] = er7$['target']['y'], this['icon']['startDrag'](this['dragRect']), this['isMove'] = ![], this['isPress'] = !![];
  }, bui1m['prototype']['iconMove'] = function (_k62) {
    this['isMove'] = !![];
  }, bui1m['prototype']['iconUp'] = function (vfub) {
    var tfbvi = vfub['target']['x'],
        dscj6o = vfub['target']['y'];this['icon']['stopDrag'](), tfbvi == this['donwX'] && this['donwY'] == dscj6o && (this['isInitBoard'] || this['initBoard'](), this['showBoard']()), this['isMove'] = ![], this['isPress'] = ![];
  }, bui1m;
}(),
    f_o26c4;(function (ay3$7) {
  var qhft05;(function (ez7r8$) {
    var ifmth = function (nxesz) {
      fiu1mvb(ry$7, nxesz);function ry$7() {
        return nxesz['call'](this) || this;
      }return ry$7['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), nxesz['prototype']['createChildren']['call'](this), this['createView'](ay3$7['demoui']['BoxItemUI']['uiView']);
      }, ry$7['uiView'] = { 'type': 'View', 'props': { 'width': 0xb4, 'height': 0xa0 }, 'child': [{ 'type': 'Image', 'props': { 'y': 0x3, 'x': 0x20, 'width': 0x73, 'var': 'icon', 'height': 0x73 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x79, 'x': -0x21, 'width': 0xb4, 'var': 'title', 'valign': 'middle', 'height': 0x22, 'fontSize': 0x16, 'color': '#441d1c', 'align': 'center' } }] }] }, ry$7;
    }(laya['ui']['View']);ez7r8$['BoxItemUI'] = ifmth;
  })(qhft05 = ay3$7['demoui'] || (ay3$7['demoui'] = {}));
})(f_o26c4 || (f_o26c4 = {})), function (uiv1b) {
  var ui91v;(function (mvuifb) {
    var sojd6c = function (x8ezwn) {
      fiu1mvb(ifmu, x8ezwn);function ifmu() {
        return x8ezwn['call'](this) || this;
      }return ifmu['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), x8ezwn['prototype']['createChildren']['call'](this), this['createView'](uiv1b['demoui']['MainUI']['uiView']);
      }, ifmu['uiView'] = { 'type': 'View', 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x2ee, 'top': 0x0, 'right': 0x0, 'left': 0x0, 'height': 0x536, 'bottom': 0x0 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x2ee, 'height': 0x536, 'centerY': 0x0 }, 'child': [{ 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x2ee, 'var': 'bg', 'height': 0x536 }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x2ee, 'visible': ![], 'var': 'box_1_show', 'height': 0x536, 'centerY': 0x0 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x253, 'x': 0x2e, 'width': 0x1d0, 'var': 'box_1_lab_info', 'leading': 0xa, 'height': 0x97, 'fontSize': 0x18, 'color': '#a959ee' } }, { 'type': 'HBox', 'props': { 'y': 0x2ee, 'x': 0x14, 'width': 0x1fe, 'space': 0x35, 'height': 0x78, 'align': 'top' }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x58, 'var': 'box_1_img_1', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_1', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0xa, 'x': 0xa, 'width': 0x58, 'var': 'box_1_img_2', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_2', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x14, 'x': 0x14, 'width': 0x58, 'var': 'box_1_img_3', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_3', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x1e, 'x': 0x1e, 'width': 0x58, 'var': 'box_1_img_4', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_4', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }] }] }, { 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'visible': ![], 'var': 'box_2_show' }, 'child': [{ 'type': 'HBox', 'props': { 'y': 0x220, 'x': 0x18, 'width': 0x1f4, 'space': 0x2c, 'height': 0x56, 'align': 'top' }, 'child': [{ 'type': 'Image', 'props': { 'y': 2.5, 'x': 0x0, 'width': 0x58, 'var': 'box_2_img_1', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_1', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0xc, 'x': 0xa, 'width': 0x58, 'var': 'box_2_img_2', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_2', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x16, 'x': 0x14, 'width': 0x58, 'var': 'box_2_img_3', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_3', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x20, 'x': 0x1e, 'width': 0x58, 'var': 'box_2_img_4', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_4', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x2a, 'x': 0x28, 'width': 0x58, 'var': 'box_2_img_5', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_5', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }] }, { 'type': 'Box', 'props': { 'y': 0x384, 'x': 0x0, 'width': 0x221, 'height': 0x44 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x0, 'x': 0x28, 'width': 0x122, 'var': 'box_2_lab_m_1', 'text': '方法一\uFF1A单日充值1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300' } }, { 'type': 'Text', 'props': { 'y': 0x1e, 'x': 0x28, 'width': 0x122, 'var': 'box_2_lab_m_2', 'text': '方法一\uFF1A历史累计充值1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300' } }, { 'type': 'Text', 'props': { 'y': 0x0, 'x': 0x141, 'width': 0xa4, 'var': 'box_2_lab_v_1', 'text': '1000/1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300', 'align': 'right' } }, { 'type': 'Text', 'props': { 'y': 0x1e, 'x': 0x141, 'width': 0xa4, 'var': 'box_2_lab_v_2', 'text': '1000/1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300', 'align': 'right' } }] }, { 'type': 'Image', 'props': { 'y': 0x1aa, 'x': 0x159, 'width': 0x66, 'var': 'box_2_btn_get', 'stateNum': 0x1, 'height': 0x26 } }, { 'type': 'Image', 'props': { 'y': 0x1aa, 'x': 0x159, 'width': 0x66, 'var': 'box_2_btn_copy', 'stateNum': 0x1, 'height': 0x26 } }, { 'type': 'Button', 'props': { 'y': 0x1d2, 'x': 0x126, 'width': 0xc9, 'var': 'box_2_addclick', 'stateNum': 0x1, 'height': 0x1b } }, { 'type': 'Text', 'props': { 'y': 0x13c, 'x': 0x17a, 'width': 0xa3, 'var': 'box_2_lab_wx', 'height': 0x1f, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'left' } }] }, { 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'visible': ![], 'var': 'box_3_show' }, 'child': [{ 'type': 'Panel', 'props': { 'y': 0xf5, 'x': 0x10, 'width': 0x201, 'var': 'box_3_panel', 'vScrollBarSkin': '', 'height': 0x29e } }] }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0x0, 'width': 0xbb, 'var': 'btn_1', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0xba, 'width': 0xbb, 'var': 'btn_2', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0x177, 'width': 0xbb, 'var': 'btn_3', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x203, 'x': 0x22e, 'width': 0x25, 'var': 'btn_close', 'height': 0x8f } }, { 'type': 'Box', 'props': { 'width': 0x2ee, 'visible': ![], 'var': 'box_help', 'height': 0x536 }, 'child': [{ 'type': 'Sprite', 'props': { 'y': 0x0, 'x': 0x0, 'mouseThrough': ![], 'alpha': 0.7 }, 'child': [{ 'type': 'Rect', 'props': { 'width': 0x2ee, 'lineWidth': 0x1, 'height': 0x536, 'fillColor': '#000000' } }] }, { 'type': 'Image', 'props': { 'y': 0x158, 'x': 0x28, 'width': 0x1d2, 'var': 'box_help_bg', 'height': 0x203 }, 'child': [{ 'type': 'Button', 'props': { 'y': -0x1, 'x': 0x1a0, 'width': 0x33, 'var': 'box_help_close', 'height': 0x28 } }, { 'type': 'Image', 'props': { 'y': 0x3f, 'x': 0x98, 'width': 0xa0, 'var': 'box_help_qrcode', 'height': 0xa0 } }] }] }] }] }] }, ifmu;
    }(laya['ui']['View']);mvuifb['MainUI'] = sojd6c;
  })(ui91v = uiv1b['demoui'] || (uiv1b['demoui'] = {}));
}(f_o26c4 || (f_o26c4 = {})), function (osdjc6) {
  var ftbmi;(function (sjnwd) {
    var rxez78 = function (csowjd) {
      fiu1mvb(wdsenx, csowjd);function wdsenx() {
        return csowjd['call'](this) || this;
      }return wdsenx['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), csowjd['prototype']['createChildren']['call'](this), this['createView'](osdjc6['demoui']['ToastUI']['uiView']);
      }, wdsenx['uiView'] = { 'type': 'View', 'props': { 'width': 0x2ee, 'height': 0x536 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x12c, 'height': 0x32, 'centerY': 0x0, 'centerX': 0x0 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x12c, 'height': 0x32, 'centerX': 0x0, 'alpha': 0.5 }, 'child': [{ 'type': 'Rect', 'props': { 'width': 0x12c, 'lineWidth': 0x1, 'height': 0x32, 'fillColor': '#382f2f' } }] }, { 'type': 'Text', 'props': { 'width': 0x12c, 'var': 'lab_msg', 'valign': 'middle', 'text': 'text', 'height': 0x32, 'fontSize': 0x18, 'color': '#ffffff', 'align': 'center' } }] }] }, wdsenx;
    }(laya['ui']['View']);sjnwd['ToastUI'] = rxez78;
  })(ftbmi = osdjc6['demoui'] || (osdjc6['demoui'] = {}));
}(f_o26c4 || (f_o26c4 = {}));var fsezxnw = function () {
  function nsd() {}return nsd['init'] = function () {
    !this['ui'] && (this['ui'] = new f_o26c4['demoui']['ToastUI'](), this['ui']['visible'] = ![], Laya['stage']['addChild'](this['ui']));
  }, nsd['msg'] = function (u9gb) {
    var imfbvt = this;!this['ui'] && nsd['init'](), this['ui']['visible'] = !![], this['ui']['lab_msg']['text'] = u9gb, clearTimeout(this['interval']), this['interval'] = setTimeout(function () {
      imfbvt['ui']['visible'] = ![];
    }, 0x7d0);
  }, nsd;
}();window['minitool'] = f_kqh5;