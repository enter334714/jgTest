var k = wx.$f;
var fsxzwe = this && this['__extends'] || function () {
  var wdjn = function (ezwsx, mh0) {
    return wdjn = Object['setPrototypeOf'] || { '__proto__': [] } instanceof Array && function (sjndxw, th0fmq) {
      sjndxw['__proto__'] = th0fmq;
    } || function (sodc6, r3$8z7) {
      for (var bitmf in r3$8z7) if (r3$8z7['hasOwnProperty'](bitmf)) sodc6[bitmf] = r3$8z7[bitmf];
    }, wdjn(ezwsx, mh0);
  };return function (qthm0f, _qh0k5) {
    wdjn(qthm0f, _qh0k5);function tfmbvi() {
      this['constructor'] = qthm0f;
    }qthm0f['prototype'] = _qh0k5 === null ? Object['create'](_qh0k5) : (tfmbvi['prototype'] = _qh0k5['prototype'], new tfmbvi());
  };
}(),
    fq_542k = window['Sygame'],
    fmtfiv = ![],
    fivbmfu = function () {
  function q5fh0t() {}return q5fh0t['init'] = function () {
    fmtfiv ? this['sygame'] = { 'channel': '3477d2273abd484ba2a0e04ad4971b3c', 'role_id': undefined, 'openid': 'oxmOf5biumkGash-Xht9FVAlswVk', 'appid': 'wx2936121c4817bf46' } : this['sygame'] = fq_542k;
  }, q5fh0t['getTimeStamp'] = function () {
    return new Date()['getTime']();
  }, q5fh0t['setResMap'] = function (_4c62, co26j4) {
    this['resMap'][_4c62] = _4c62 + '?' + co26j4;
  }, q5fh0t['getResMap'] = function (ren8z) {
    return this['resMap'][ren8z];
  }, q5fh0t['resMap'] = {}, q5fh0t;
}(),
    fco_4 = function () {
  function b1gvu() {
    this['getIcon'] = 'https://wx.11babay.cn/uploads/f/fkccc1532944783/5/2/c/7/60dc442c4fbc5.png', this['copyIcon'] = 'https://wx.11babay.cn/uploads/f/fkccc1532944783/3/0/1/7/60dc4409dce39.png', fivbmfu['init'](), this['getBoxCheckoutCode']();
  }return b1gvu['prototype']['send'] = function (o462cj, r$3y, j26co4, wednxs, cso) {
    wednxs === void 0x0 && (wednxs = 'get');cso === void 0x0 && (cso = '' || null);var tbiv = new Laya['HttpRequest']();tbiv['http']['timeout'] = 0x2710, tbiv['once'](Laya['Event']['COMPLETE'], this, r$3y), tbiv['once'](Laya['Event']['ERROR'], this, j26co4), tbiv['send'](o462cj, cso, wednxs, 'text');
  }, b1gvu['prototype']['postSidebarApi'] = function () {
    var qkh_ = fivbmfu['sygame']['openid'],
        z8rxen = '&channel=' + fivbmfu['sygame']['channel'] + '&wecha_id=' + qkh_;this['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=sidebarApi' + z8rxen, this['completeHandler'], this['errorHandler']);
  }, b1gvu['prototype']['getBoxCheckoutCode'] = function () {
    var $ay3p = Sygame['SY_CONF']['commitId'];this['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=getBoxCheckoutCode', this['getBoxCheckoutCodeRes'], this['errorHandler'], 'post', { 'commitId': $ay3p });
  }, b1gvu['prototype']['getBoxCheckoutCodeRes'] = function (oj6dc) {
    var mbfiu = JSON['parse'](oj6dc);console['log']('getBoxCheckoutCode:', mbfiu);if (mbfiu['status'] == 0x3e9) {
      var vib1um = mbfiu['info'];vib1um == 0xfa1 ? this['postSidebarApi']() : console['error']('盛也盒子\x20不显示' + mbfiu);
    } else console['error']('盛也盒子 getBoxCheckoutCodeRes 其他错误' + mbfiu);
  }, b1gvu['prototype']['completeHandler'] = function (gvub91) {
    var y7r38$ = JSON['parse'](gvub91);console['log'](y7r38$);switch (y7r38$['status']) {case 0x3e9:
        var k_40q5 = [];y7r38$['msg']['basics_image_url'] && k_40q5['push']({ 'url': y7r38$['msg']['basics_image_url'], 'type': Laya['Loader']['IMAGE'] }), y7r38$['msg']['public_code'] && k_40q5['push']({ 'url': y7r38$['msg']['public_code'], 'type': Laya['Loader']['IMAGE'] }), y7r38$['msg']['vip_customer_service'] && k_40q5['push']({ 'url': y7r38$['msg']['vip_customer_service'], 'type': Laya['Loader']['IMAGE'] }), y7r38$['msg']['vip_customer_service_not_add'] && k_40q5['push']({ 'url': y7r38$['msg']['vip_customer_service_not_add'], 'type': Laya['Loader']['IMAGE'] }), y7r38$['msg']['game_center_image_url'] && k_40q5['push']({ 'url': y7r38$['msg']['game_center_image_url'], 'type': Laya['Loader']['IMAGE'] }), y7r38$['msg']['vip_qrcode'] && k_40q5['push']({ 'url': y7r38$['msg']['vip_qrcode'], 'type': Laya['Loader']['IMAGE'] }), y7r38$['msg']['getIcon'] && k_40q5['push']({ 'url': this['getIcon'], 'type': Laya['Loader']['IMAGE'] }), y7r38$['msg']['copyIcon'] && k_40q5['push']({ 'url': this['copyIcon'], 'type': Laya['Loader']['IMAGE'] });for (var fhtm = 0x0, fivbum = y7r38$['msg']['follow_gift_list']; fhtm < fivbum['length']; fhtm++) {
          var q5_24k = fivbum[fhtm];k_40q5['push']({ 'url': q5_24k['url'], 'type': Laya['Loader']['IMAGE'] });
        }for (var r$y73 = 0x0, _qh05 = y7r38$['msg']['vip_box_list']; r$y73 < _qh05['length']; r$y73++) {
          var q5_24k = _qh05[r$y73];k_40q5['push']({ 'url': q5_24k['url'], 'type': Laya['Loader']['IMAGE'] });
        }for (var vmi1 = 0x0; vmi1 < k_40q5['length']; vmi1++) {
          fivbmfu['setResMap'](k_40q5[vmi1]['url'], fivbmfu['getTimeStamp']()), k_40q5[vmi1]['url'] = fivbmfu['getResMap'](k_40q5[vmi1]['url']);
        }Laya['loader']['load'](k_40q5, Laya['Handler']['create'](this, this['initGame'])), this['data'] = y7r38$['msg'];break;case 0x3ea:
        fbv9iu['msg']('空的游戏channel');break;case 0x3eb:
        fbv9iu['msg']('错误的游戏channel');break;case 0x3ec:
        fbv9iu['msg']('未找到对应游戏大类');break;case 0x3ed:
        fbv9iu['msg']('未设置侧边栏');break;}
  }, b1gvu['prototype']['errorHandler'] = function (fmvti) {}, b1gvu['prototype']['initGame'] = function () {
    var _26c4 = new fdcj6o(this);_26c4['show']();
  }, b1gvu;
}(),
    fdcj6o = function () {
  function wcnds(_4o2c6) {
    this['page'] = 0x3, this['rolePriceData'] = {}, this['boxlist'] = [], this['donwX'] = 0x0, this['downY'] = 0x0, this['tool'] = _4o2c6;
  }return wcnds['prototype']['setChildMouseThroughs'] = function (xnrz) {
    var zxwsne = xnrz['_childs'] || [];for (var $yr7 = 0x0; $yr7 < zxwsne['length']; $yr7++) {
      zxwsne[$yr7] && (zxwsne[$yr7]['mouseThrough'] = !![]);
    }
  }, wcnds['prototype']['show'] = function () {
    if (this['tool']['data']['on'] === '1') {
      this['main'] = new fjsdcn['demoui']['MainUI'](), Laya['stage']['addChild'](this['main']), this['main']['mouseThrough'] = !![];var y$r3 = this['main']['_childs'] || [];for (var wedxn = 0x0; wedxn < y$r3['length']; wedxn++) {
        y$r3[wedxn]['mouseThrough'] = !![];
      }this['setChildMouseThroughs'](this['main']['_childs']), this['setChildMouseThroughs'](this['main']['_childs'][0x0]), this['initIcon'](), this['initEvent'](), this['initView'](), fbv9iu['init'](), this['main']['bg']['x'] = -0x2ee;
    }
  }, wcnds['prototype']['initView'] = function () {
    var dwjo = this,
        njdwsx = this['tool']['data']['follow_down_words']['replace'](/\\n/g, '\x0a');this['main']['box_1_lab_info']['text'] = njdwsx;for (var buvm1i = 0x1; buvm1i <= this['tool']['data']['follow_gift_list']['length']; buvm1i++) {
      var htmb = this['tool']['data']['follow_gift_list'][buvm1i - 0x1];this['main']['box_1_img_' + buvm1i]['skin'] = htmb['url'], this['main']['box_1_lab_' + buvm1i]['text'] = htmb['name'];
    }for (var buvm1i = 0x1; buvm1i <= this['tool']['data']['vip_box_list']['length']; buvm1i++) {
      var htmb = this['tool']['data']['vip_box_list'][buvm1i - 0x1];this['main']['box_2_img_' + buvm1i]['skin'] = htmb['url'], this['main']['box_2_lab_' + buvm1i]['text'] = htmb['name'];
    }this['main']['box_2_lab_m_1']['text'] = '方法一：单日充值' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_m_2']['text'] = '方法二：历史累计充值' + +this['tool']['data']['y'] + '元', this['main']['box_2_lab_v_1']['text'] = (this['rolePriceData']['todayPrice'] || 0x0) + '/' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_v_2']['text'] = (this['rolePriceData']['allPrice'] || 0x0) + '/' + +this['tool']['data']['y'] + '元', this['main']['box_2_btn_copy']['skin'] = this['tool']['copyIcon'], this['main']['box_2_btn_get']['skin'] = this['tool']['getIcon'], this['main']['box_2_btn_copy']['visible'] = ![], this['main']['box_2_btn_get']['on'](Laya['Event']['CLICK'], this, function () {
      if (dwjo['rolePriceData']['is_vip'] == 0x0) {
        fbv9iu['msg']('请先获取vip资格');return;
      }dwjo['main']['box_2_lab_wx']['text'] = this['rolePriceData']['vip_wx'], dwjo['main']['box_2_btn_copy']['visible'] = !![];
    }), this['main']['box_2_btn_copy']['on'](Laya['Event']['CLICK'], this, function () {
      dwjo['copyText'](this['rolePriceData']['vip_wx']);
    }), this['main']['box_2_addclick']['on'](Laya['Event']['CLICK'], this, function () {
      if (dwjo['rolePriceData']['is_vip'] == 0x0) return;this['main']['box_help_qrcode']['skin'] = dwjo['rolePriceData']['vip_qrcode'], dwjo['main']['box_help']['visible'] = !![];
    }), this['main']['box_help_close']['on'](Laya['Event']['CLICK'], this, function () {
      dwjo['main']['box_help']['visible'] = ![];
    }), this['main']['box_help_bg']['skin'] = this['tool']['data']['vip_customer_service_not_add'], this['main']['box_help_qrcode']['skin'] = dwjo['rolePriceData']['vip_qrcode'], this['main']['box_help_qrcode']['scaleX'] = 0xa0 / this['main']['box_help_qrcode']['width'], this['main']['box_help_qrcode']['scaleY'] = 0xa0 / this['main']['box_help_qrcode']['width'], this['main']['box_3_panel']['vScrollBar']['visible'] = ![], this['main']['box_3_panel']['vScrollBarSkin'] = 'common_atlas/scrollBar.png';
  }, wcnds['prototype']['initIcon'] = function () {
    this['icon'] = new Laya['Image'](), this['icon']['skin'] = this['tool']['data']['basics_image_url'], this['icon']['x'] = 0x0, this['icon']['y'] = 0xc8, this['icon']['width'] = 0x66, this['icon']['height'] = 0x6f, this['main']['addChild'](this['icon']), this['icon']['on'](Laya['Event']['MOUSE_DOWN'], this, this['iconPress']), this['icon']['on'](Laya['Event']['MOUSE_UP'], this, this['iconUp']), this['icon']['on'](Laya['Event']['MOUSE_WHEEL'], this, this['iconMove']), this['dragRect'] = new Laya['Rectangle'](-this['icon']['width'] / 0x2, 0x0, Laya['stage']['width'], Laya['stage']['height'] - this['icon']['height'] / 0x2);
  }, wcnds['prototype']['initEvent'] = function () {
    var cnsj = this;this['main']['btn_1']['on'](Laya['Event']['CLICK'], this, function () {
      if (cnsj['page'] == 0x1) return;cnsj['page1']();
    }), this['main']['btn_2']['on'](Laya['Event']['CLICK'], this, function () {
      if (cnsj['page'] == 0x2) return;cnsj['page2']();
    }), this['main']['btn_3']['on'](Laya['Event']['CLICK'], this, function () {
      if (cnsj['page'] == 0x3) return;cnsj['page3']();
    }), this['main']['btn_close']['on'](Laya['Event']['CLICK'], this, function () {
      cnsj['main']['bg']['x'] = -0x2ee, cnsj['icon']['visible'] = !![];
    });
  }, wcnds['prototype']['initBoard'] = function () {
    this['isInitBoard'] = !![], this['page1']();
  }, wcnds['prototype']['showBoard'] = function () {
    this['main']['bg']['x'] = 0x0, this['icon']['visible'] = ![];var ht0if = F$L6['selectedServer']['server_id'],
        we8nzx = F$L6['selectedServer']['server_name'],
        esdnx = F$L6['roleId'],
        t0ihfm = F$L6['roleName'],
        bfhtim = fivbmfu['sygame']['openid'],
        $7pya = '&role_id=' + fivbmfu['sygame']['role_id'] + '&channel=' + fivbmfu['sygame']['channel'] + '&server_id=' + ht0if + '&server_name=' + we8nzx + '&wecha_id=' + bfhtim + '&role_id=' + esdnx + '&role_name=' + t0ihfm;this['tool']['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=sidebarApiRoleId' + $7pya, this['rolePriceHandler']['bind'](this), this['roleError']['bind'](this));
  }, wcnds['prototype']['page1'] = function () {
    this['page'] = 0x1, this['main']['bg']['skin'] = this['tool']['data']['public_code'], this['main']['box_1_show']['visible'] = !![], this['main']['box_2_show']['visible'] = ![], this['main']['box_3_show']['visible'] = ![];
  }, wcnds['prototype']['page2'] = function () {
    this['page'] = 0x2, this['main']['bg']['skin'] = this['tool']['data']['vip_customer_service'], this['main']['box_1_show']['visible'] = ![], this['main']['box_2_show']['visible'] = !![], this['main']['box_3_show']['visible'] = ![];
  }, wcnds['prototype']['page3'] = function () {
    this['page'] = 0x3, this['main']['bg']['skin'] = this['tool']['data']['game_center_image_url'], this['main']['box_1_show']['visible'] = ![], this['main']['box_2_show']['visible'] = ![], this['main']['box_3_show']['visible'] = !![], this['sendBox'] || this['getBoxList'](0x0), this['sendBox'] = !![], fq_542k && fq_542k['syClickOpenBox']();
  }, wcnds['prototype']['getBoxList'] = function (qhf5t) {
    var y738 = this;fq_542k && fq_542k['syGetBoxList']({ 'page': qhf5t, 'count': 0xc })['then'](function (zxnsew) {
      var c_o = zxnsew['data'];c_o['status'] == 0x3e9 ? c_o['data'] && c_o['data']['length'] && (y738['boxlist'] = y738['boxlist']['concat'](c_o['data']), qhf5t++, y738['getBoxList'](qhf5t)) : y738['boxListHandler']();
    });
  }, wcnds['prototype']['copyText'] = function (tfmbi) {
    try {
      wx['setClipboardData']({ 'data': tfmbi, 'success': function (wcosjd) {
          console['log']('复制成功:', wcosjd);
        } });
    } catch (hft0im) {}
  }, wcnds['prototype']['rolePriceHandler'] = function ($8z7er) {
    this['rolePriceData'] = JSON['parse']($8z7er);switch (this['rolePriceData']['status']) {case 0x3e9:
        this['main']['box_2_lab_v_1']['text'] = (this['rolePriceData']['todayPrice'] || 0x0) + '/' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_v_2']['text'] = (this['rolePriceData']['allPrice'] || 0x0) + '/' + +this['tool']['data']['y'] + '元';break;case 0x3ea:
        break;case 0x3eb:
        break;}
  }, wcnds['prototype']['roleError'] = function () {}, wcnds['prototype']['boxListHandler'] = function () {
    var ubfivm = function (exwzsn) {
      var cdowjs = e8znr['boxlist'][exwzsn],
          thmbfi = new fjsdcn['demoui']['BoxItemUI']();thmbfi['icon']['skin'] = cdowjs['icon'], thmbfi['title']['text'] = cdowjs['title'], thmbfi['x'] = 0xa0 * (exwzsn % 0x3), thmbfi['y'] = 0xa0 * (exwzsn / 0x3 ^ 0x0), e8znr['main']['box_3_panel']['addChild'](thmbfi);var $7p3ay = { 'appid': fivbmfu['sygame']['appid'], 'game_id': cdowjs['game_id'], 'jump_appid': cdowjs['jump_appid'], 'jump_path': cdowjs['jump_path'], 'tunnel_id': cdowjs['tunnel_id'], 'uv': 0x0, 'wecha_id': fivbmfu['sygame']['openid'] },
          fqth05 = cdowjs['preview_img'],
          _c642o = cdowjs['jump_type'],
          er8$7z = cdowjs['kf_session'];thmbfi['on'](Laya['Event']['CLICK'], e8znr, function () {
        fq_542k && fq_542k['syClickBox']({ 'game_id': cdowjs['game_id'], 'tunnel_id': cdowjs['tunnel_id'], 'jump_appid': cdowjs['jump_appid'], 'jump_path': cdowjs['jump_path'] })['then'](function (btfmvi) {
          if (_c642o === '0') wx['navigateToMiniProgram']({ 'appId': $7p3ay['jump_appid'], 'path': $7p3ay['jump_path'], 'fail': function (qft0h5) {
              if (!fqth05) return;wx['previewImage']({ 'urls': [fqth05] });
            } });else {
            if (_c642o === '1') {
              if (!fqth05) return;wx['previewImage']({ 'urls': [fqth05] });
            } else {
              if (_c642o === '2') {
                if (!er8$7z) return;wx['openCustomerServiceConversation']({ 'sessionFrom': er8$7z, 'showMessageCard': !![], 'sendMessageTitle': '', 'sendMessagePath': '', 'sendMessageImg': '' });
              }
            }
          }
        });
      });
    },
        e8znr = this;for (var xrnz8e = 0x0; xrnz8e < this['boxlist']['length']; xrnz8e++) {
      ubfivm(xrnz8e);
    }
  }, wcnds['prototype']['boxListError'] = function () {}, wcnds['prototype']['boxClickHandler'] = function () {}, wcnds['prototype']['iconPress'] = function (enzs) {
    this['donwX'] = enzs['target']['x'], this['donwY'] = enzs['target']['y'], this['icon']['startDrag'](this['dragRect']), this['isMove'] = ![], this['isPress'] = !![];
  }, wcnds['prototype']['iconMove'] = function (jswcod) {
    this['isMove'] = !![];
  }, wcnds['prototype']['iconUp'] = function (o42jc6) {
    var ar73y = o42jc6['target']['x'],
        qf0hmt = o42jc6['target']['y'];this['icon']['stopDrag'](), ar73y == this['donwX'] && this['donwY'] == qf0hmt && (this['isInitBoard'] || this['initBoard'](), this['showBoard']()), this['isMove'] = ![], this['isPress'] = ![];
  }, wcnds;
}(),
    fjsdcn;(function (ar73y$) {
  var qtf;(function (c4o6j) {
    var dscj6o = function (mfqth0) {
      fsxzwe(nwdesx, mfqth0);function nwdesx() {
        return mfqth0['call'](this) || this;
      }return nwdesx['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), mfqth0['prototype']['createChildren']['call'](this), this['createView'](ar73y$['demoui']['BoxItemUI']['uiView']);
      }, nwdesx['uiView'] = { 'type': 'View', 'props': { 'width': 0xb4, 'height': 0xa0 }, 'child': [{ 'type': 'Image', 'props': { 'y': 0x3, 'x': 0x20, 'width': 0x73, 'var': 'icon', 'height': 0x73 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x79, 'x': -0x21, 'width': 0xb4, 'var': 'title', 'valign': 'middle', 'height': 0x22, 'fontSize': 0x16, 'color': '#441d1c', 'align': 'center' } }] }] }, nwdesx;
    }(laya['ui']['View']);c4o6j['BoxItemUI'] = dscj6o;
  })(qtf = ar73y$['demoui'] || (ar73y$['demoui'] = {}));
})(fjsdcn || (fjsdcn = {})), function (wnxe8z) {
  var _05q4;(function (ifbmu) {
    var wjsdc = function (k_4625) {
      fsxzwe(jdc, k_4625);function jdc() {
        return k_4625['call'](this) || this;
      }return jdc['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), k_4625['prototype']['createChildren']['call'](this), this['createView'](wnxe8z['demoui']['MainUI']['uiView']);
      }, jdc['uiView'] = { 'type': 'View', 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x2ee, 'top': 0x0, 'right': 0x0, 'left': 0x0, 'height': 0x536, 'bottom': 0x0 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x2ee, 'height': 0x536, 'centerY': 0x0 }, 'child': [{ 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x2ee, 'var': 'bg', 'height': 0x536 }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x2ee, 'visible': ![], 'var': 'box_1_show', 'height': 0x536, 'centerY': 0x0 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x253, 'x': 0x2e, 'width': 0x1d0, 'var': 'box_1_lab_info', 'leading': 0xa, 'height': 0x97, 'fontSize': 0x18, 'color': '#a959ee' } }, { 'type': 'HBox', 'props': { 'y': 0x2ee, 'x': 0x14, 'width': 0x1fe, 'space': 0x35, 'height': 0x78, 'align': 'top' }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x58, 'var': 'box_1_img_1', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_1', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0xa, 'x': 0xa, 'width': 0x58, 'var': 'box_1_img_2', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_2', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x14, 'x': 0x14, 'width': 0x58, 'var': 'box_1_img_3', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_3', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x1e, 'x': 0x1e, 'width': 0x58, 'var': 'box_1_img_4', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_4', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }] }] }, { 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'visible': ![], 'var': 'box_2_show' }, 'child': [{ 'type': 'HBox', 'props': { 'y': 0x220, 'x': 0x18, 'width': 0x1f4, 'space': 0x2c, 'height': 0x56, 'align': 'top' }, 'child': [{ 'type': 'Image', 'props': { 'y': 2.5, 'x': 0x0, 'width': 0x58, 'var': 'box_2_img_1', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_1', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0xc, 'x': 0xa, 'width': 0x58, 'var': 'box_2_img_2', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_2', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x16, 'x': 0x14, 'width': 0x58, 'var': 'box_2_img_3', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_3', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x20, 'x': 0x1e, 'width': 0x58, 'var': 'box_2_img_4', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_4', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x2a, 'x': 0x28, 'width': 0x58, 'var': 'box_2_img_5', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_5', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }] }, { 'type': 'Box', 'props': { 'y': 0x384, 'x': 0x0, 'width': 0x221, 'height': 0x44 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x0, 'x': 0x28, 'width': 0x122, 'var': 'box_2_lab_m_1', 'text': '方法一\uFF1A单日充值1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300' } }, { 'type': 'Text', 'props': { 'y': 0x1e, 'x': 0x28, 'width': 0x122, 'var': 'box_2_lab_m_2', 'text': '方法一\uFF1A历史累计充值1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300' } }, { 'type': 'Text', 'props': { 'y': 0x0, 'x': 0x141, 'width': 0xa4, 'var': 'box_2_lab_v_1', 'text': '1000/1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300', 'align': 'right' } }, { 'type': 'Text', 'props': { 'y': 0x1e, 'x': 0x141, 'width': 0xa4, 'var': 'box_2_lab_v_2', 'text': '1000/1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300', 'align': 'right' } }] }, { 'type': 'Image', 'props': { 'y': 0x1aa, 'x': 0x159, 'width': 0x66, 'var': 'box_2_btn_get', 'stateNum': 0x1, 'height': 0x26 } }, { 'type': 'Image', 'props': { 'y': 0x1aa, 'x': 0x159, 'width': 0x66, 'var': 'box_2_btn_copy', 'stateNum': 0x1, 'height': 0x26 } }, { 'type': 'Button', 'props': { 'y': 0x1d2, 'x': 0x126, 'width': 0xc9, 'var': 'box_2_addclick', 'stateNum': 0x1, 'height': 0x1b } }, { 'type': 'Text', 'props': { 'y': 0x13c, 'x': 0x17a, 'width': 0xa3, 'var': 'box_2_lab_wx', 'height': 0x1f, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'left' } }] }, { 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'visible': ![], 'var': 'box_3_show' }, 'child': [{ 'type': 'Panel', 'props': { 'y': 0xf5, 'x': 0x10, 'width': 0x201, 'var': 'box_3_panel', 'vScrollBarSkin': '', 'height': 0x29e } }] }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0x0, 'width': 0xbb, 'var': 'btn_1', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0xba, 'width': 0xbb, 'var': 'btn_2', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0x177, 'width': 0xbb, 'var': 'btn_3', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x203, 'x': 0x22e, 'width': 0x25, 'var': 'btn_close', 'height': 0x8f } }, { 'type': 'Box', 'props': { 'width': 0x2ee, 'visible': ![], 'var': 'box_help', 'height': 0x536 }, 'child': [{ 'type': 'Sprite', 'props': { 'y': 0x0, 'x': 0x0, 'mouseThrough': ![], 'alpha': 0.7 }, 'child': [{ 'type': 'Rect', 'props': { 'width': 0x2ee, 'lineWidth': 0x1, 'height': 0x536, 'fillColor': '#000000' } }] }, { 'type': 'Image', 'props': { 'y': 0x158, 'x': 0x28, 'width': 0x1d2, 'var': 'box_help_bg', 'height': 0x203 }, 'child': [{ 'type': 'Button', 'props': { 'y': -0x1, 'x': 0x1a0, 'width': 0x33, 'var': 'box_help_close', 'height': 0x28 } }, { 'type': 'Image', 'props': { 'y': 0x3f, 'x': 0x98, 'width': 0xa0, 'var': 'box_help_qrcode', 'height': 0xa0 } }] }] }] }] }] }, jdc;
    }(laya['ui']['View']);ifbmu['MainUI'] = wjsdc;
  })(_05q4 = wnxe8z['demoui'] || (wnxe8z['demoui'] = {}));
}(fjsdcn || (fjsdcn = {})), function (fhmt) {
  var gb19vu;(function (szen) {
    var ftq0m = function (y$83) {
      fsxzwe($r3y7a, y$83);function $r3y7a() {
        return y$83['call'](this) || this;
      }return $r3y7a['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), y$83['prototype']['createChildren']['call'](this), this['createView'](fhmt['demoui']['ToastUI']['uiView']);
      }, $r3y7a['uiView'] = { 'type': 'View', 'props': { 'width': 0x2ee, 'height': 0x536 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x12c, 'height': 0x32, 'centerY': 0x0, 'centerX': 0x0 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x12c, 'height': 0x32, 'centerX': 0x0, 'alpha': 0.5 }, 'child': [{ 'type': 'Rect', 'props': { 'width': 0x12c, 'lineWidth': 0x1, 'height': 0x32, 'fillColor': '#382f2f' } }] }, { 'type': 'Text', 'props': { 'width': 0x12c, 'var': 'lab_msg', 'valign': 'middle', 'text': 'text', 'height': 0x32, 'fontSize': 0x18, 'color': '#ffffff', 'align': 'center' } }] }] }, $r3y7a;
    }(laya['ui']['View']);szen['ToastUI'] = ftq0m;
  })(gb19vu = fhmt['demoui'] || (fhmt['demoui'] = {}));
}(fjsdcn || (fjsdcn = {}));var fbv9iu = function () {
  function bivufm() {}return bivufm['init'] = function () {
    !this['ui'] && (this['ui'] = new fjsdcn['demoui']['ToastUI'](), this['ui']['visible'] = ![], Laya['stage']['addChild'](this['ui']));
  }, bivufm['msg'] = function (hibftm) {
    var mvfbui = this;!this['ui'] && bivufm['init'](), this['ui']['visible'] = !![], this['ui']['lab_msg']['text'] = hibftm, clearTimeout(this['interval']), this['interval'] = setTimeout(function () {
      mvfbui['ui']['visible'] = ![];
    }, 0x7d0);
  }, bivufm;
}();window['minitool'] = fco_4;