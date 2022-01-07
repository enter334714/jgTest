var I = wx.$R;
var r_c_5u = this && this['__extends'] || function () {
  var h1u_ab = function (ix8ojy, ah1) {
    return h1u_ab = Object['setPrototypeOf'] || { '__proto__': [] } instanceof Array && function (p7qd, o8mk) {
      p7qd['__proto__'] = o8mk;
    } || function (abu$, xi2sjz) {
      for (var zjs2 in xi2sjz) if (xi2sjz['hasOwnProperty'](zjs2)) abu$[zjs2] = xi2sjz[zjs2];
    }, h1u_ab(ix8ojy, ah1);
  };return function (t32lzs, wm8yok) {
    h1u_ab(t32lzs, wm8yok);function grwem7() {
      this['constructor'] = t32lzs;
    }t32lzs['prototype'] = wm8yok === null ? Object['create'](wm8yok) : (grwem7['prototype'] = wm8yok['prototype'], new grwem7());
  };
}(),
    r_cnqdpf = window['Sygame'],
    r_vl3zs = ![],
    r_nefdp = function () {
  function rg7meq() {}return rg7meq['init'] = function () {
    r_vl3zs ? this['sygame'] = { 'channel': '3477d2273abd484ba2a0e04ad4971b3c', 'role_id': undefined, 'openid': 'oxmOf5biumkGash-Xht9FVAlswVk', 'appid': 'wx2936121c4817bf46' } : this['sygame'] = r_cnqdpf;
  }, rg7meq['getTimeStamp'] = function () {
    return new Date()['getTime']();
  }, rg7meq['setResMap'] = function (nd65, lsvtz) {
    this['resMap'][nd65] = nd65 + '?' + lsvtz;
  }, rg7meq['getResMap'] = function (qdgfe) {
    return this['resMap'][qdgfe];
  }, rg7meq['resMap'] = {}, rg7meq;
}(),
    r_a$1_ub = function () {
  function c5h6() {
    this['getIcon'] = 'https://wx.11babay.cn/uploads/f/fkccc1532944783/5/2/c/7/60dc442c4fbc5.png', this['copyIcon'] = 'https://wx.11babay.cn/uploads/f/fkccc1532944783/3/0/1/7/60dc4409dce39.png', r_nefdp['init'](), this['getBoxCheckoutCode']();
  }return c5h6['prototype']['send'] = function (eqgm7, x8iyo, ba_u1, jzi2xs, gmw7rk) {
    jzi2xs === void 0x0 && (jzi2xs = 'get');gmw7rk === void 0x0 && (gmw7rk = '' || null);var ok8ymw = new Laya['HttpRequest']();ok8ymw['http']['timeout'] = 0x2710, ok8ymw['once'](Laya['Event']['COMPLETE'], this, x8iyo), ok8ymw['once'](Laya['Event']['ERROR'], this, ba_u1), ok8ymw['send'](eqgm7, gmw7rk, jzi2xs, 'text');
  }, c5h6['prototype']['postSidebarApi'] = function () {
    var a194b = r_nefdp['sygame']['openid'],
        koiyj8 = '&channel=' + r_nefdp['sygame']['channel'] + '&wecha_id=' + a194b;this['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=sidebarApi' + koiyj8, this['completeHandler'], this['errorHandler']);
  }, c5h6['prototype']['getBoxCheckoutCode'] = function () {
    var kyioj = Sygame['SY_CONF']['commitId'];this['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=getBoxCheckoutCode', this['getBoxCheckoutCodeRes'], this['errorHandler'], 'post', { 'commitId': kyioj });
  }, c5h6['prototype']['getBoxCheckoutCodeRes'] = function (f5h) {
    var u6_ch5 = JSON['parse'](f5h);console['log']('getBoxCheckoutCode:', u6_ch5);if (u6_ch5['status'] == 0x3e9) {
      var gfdeqp = u6_ch5['info'];gfdeqp == 0xfa1 ? this['postSidebarApi']() : console['error']('盛也盒子\x20不显示' + u6_ch5);
    } else console['error']('盛也盒子 getBoxCheckoutCodeRes 其他错误' + u6_ch5);
  }, c5h6['prototype']['completeHandler'] = function (oym8wk) {
    var a$_ub = JSON['parse'](oym8wk);console['log'](a$_ub);switch (a$_ub['status']) {case 0x3e9:
        var g7edpq = [];a$_ub['msg']['basics_image_url'] && g7edpq['push']({ 'url': a$_ub['msg']['basics_image_url'], 'type': Laya['Loader']['IMAGE'] }), a$_ub['msg']['public_code'] && g7edpq['push']({ 'url': a$_ub['msg']['public_code'], 'type': Laya['Loader']['IMAGE'] }), a$_ub['msg']['vip_customer_service'] && g7edpq['push']({ 'url': a$_ub['msg']['vip_customer_service'], 'type': Laya['Loader']['IMAGE'] }), a$_ub['msg']['vip_customer_service_not_add'] && g7edpq['push']({ 'url': a$_ub['msg']['vip_customer_service_not_add'], 'type': Laya['Loader']['IMAGE'] }), a$_ub['msg']['game_center_image_url'] && g7edpq['push']({ 'url': a$_ub['msg']['game_center_image_url'], 'type': Laya['Loader']['IMAGE'] }), a$_ub['msg']['vip_qrcode'] && g7edpq['push']({ 'url': a$_ub['msg']['vip_qrcode'], 'type': Laya['Loader']['IMAGE'] }), a$_ub['msg']['getIcon'] && g7edpq['push']({ 'url': this['getIcon'], 'type': Laya['Loader']['IMAGE'] }), a$_ub['msg']['copyIcon'] && g7edpq['push']({ 'url': this['copyIcon'], 'type': Laya['Loader']['IMAGE'] });for (var pnqfed = 0x0, huc5_6 = a$_ub['msg']['follow_gift_list']; pnqfed < huc5_6['length']; pnqfed++) {
          var fgdqpe = huc5_6[pnqfed];g7edpq['push']({ 'url': fgdqpe['url'], 'type': Laya['Loader']['IMAGE'] });
        }for (var u56_ = 0x0, wyo8k = a$_ub['msg']['vip_box_list']; u56_ < wyo8k['length']; u56_++) {
          var fgdqpe = wyo8k[u56_];g7edpq['push']({ 'url': fgdqpe['url'], 'type': Laya['Loader']['IMAGE'] });
        }for (var $b1a_ = 0x0; $b1a_ < g7edpq['length']; $b1a_++) {
          r_nefdp['setResMap'](g7edpq[$b1a_]['url'], r_nefdp['getTimeStamp']()), g7edpq[$b1a_]['url'] = r_nefdp['getResMap'](g7edpq[$b1a_]['url']);
        }Laya['loader']['load'](g7edpq, Laya['Handler']['create'](this, this['initGame'])), this['data'] = a$_ub['msg'];break;case 0x3ea:
        r_wioy8k['msg']('空的游戏channel');break;case 0x3eb:
        r_wioy8k['msg']('错误的游戏channel');break;case 0x3ec:
        r_wioy8k['msg']('未找到对应游戏大类');break;case 0x3ed:
        r_wioy8k['msg']('未设置侧边栏');break;}
  }, c5h6['prototype']['errorHandler'] = function (fpeg) {}, c5h6['prototype']['initGame'] = function () {
    var xojy = new r__u56ch(this);xojy['show']();
  }, c5h6;
}(),
    r__u56ch = function () {
  function xjyio(jx2is) {
    this['page'] = 0x3, this['rolePriceData'] = {}, this['boxlist'] = [], this['donwX'] = 0x0, this['downY'] = 0x0, this['tool'] = jx2is;
  }return xjyio['prototype']['setChildMouseThroughs'] = function (fh6c5) {
    var g7qpr = fh6c5['_childs'] || [];for (var jxtz2s = 0x0; jxtz2s < g7qpr['length']; jxtz2s++) {
      g7qpr[jxtz2s] && (g7qpr[jxtz2s]['mouseThrough'] = !![]);
    }
  }, xjyio['prototype']['show'] = function () {
    if (this['tool']['data']['on'] === '1') {
      this['main'] = new r_gqfpe['demoui']['MainUI'](), Laya['stage']['addChild'](this['main']), this['main']['mouseThrough'] = !![];var fpdgq = this['main']['_childs'] || [];for (var p7rqge = 0x0; p7rqge < fpdgq['length']; p7rqge++) {
        fpdgq[p7rqge]['mouseThrough'] = !![];
      }this['setChildMouseThroughs'](this['main']['_childs']), this['setChildMouseThroughs'](this['main']['_childs'][0x0]), this['initIcon'](), this['initEvent'](), this['initView'](), r_wioy8k['init'](), this['main']['bg']['x'] = -0x2ee;
    }
  }, xjyio['prototype']['initView'] = function () {
    var gw7rem = this,
        h6u51 = this['tool']['data']['follow_down_words']['replace'](/\\n/g, '\x0a');this['main']['box_1_lab_info']['text'] = h6u51;for (var sl23tz = 0x1; sl23tz <= this['tool']['data']['follow_gift_list']['length']; sl23tz++) {
      var ymwo = this['tool']['data']['follow_gift_list'][sl23tz - 0x1];this['main']['box_1_img_' + sl23tz]['skin'] = ymwo['url'], this['main']['box_1_lab_' + sl23tz]['text'] = ymwo['name'];
    }for (var sl23tz = 0x1; sl23tz <= this['tool']['data']['vip_box_list']['length']; sl23tz++) {
      var ymwo = this['tool']['data']['vip_box_list'][sl23tz - 0x1];this['main']['box_2_img_' + sl23tz]['skin'] = ymwo['url'], this['main']['box_2_lab_' + sl23tz]['text'] = ymwo['name'];
    }this['main']['box_2_lab_m_1']['text'] = '方法一：单日充值' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_m_2']['text'] = '方法二：历史累计充值' + +this['tool']['data']['y'] + '元', this['main']['box_2_lab_v_1']['text'] = (this['rolePriceData']['todayPrice'] || 0x0) + '/' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_v_2']['text'] = (this['rolePriceData']['allPrice'] || 0x0) + '/' + +this['tool']['data']['y'] + '元', this['main']['box_2_btn_copy']['skin'] = this['tool']['copyIcon'], this['main']['box_2_btn_get']['skin'] = this['tool']['getIcon'], this['main']['box_2_btn_copy']['visible'] = ![], this['main']['box_2_btn_get']['on'](Laya['Event']['CLICK'], this, function () {
      if (gw7rem['rolePriceData']['is_vip'] == 0x0) {
        r_wioy8k['msg']('请先获取vip资格');return;
      }gw7rem['main']['box_2_lab_wx']['text'] = this['rolePriceData']['vip_wx'], gw7rem['main']['box_2_btn_copy']['visible'] = !![];
    }), this['main']['box_2_btn_copy']['on'](Laya['Event']['CLICK'], this, function () {
      gw7rem['copyText'](this['rolePriceData']['vip_wx']);
    }), this['main']['box_2_addclick']['on'](Laya['Event']['CLICK'], this, function () {
      if (gw7rem['rolePriceData']['is_vip'] == 0x0) return;this['main']['box_help_qrcode']['skin'] = gw7rem['rolePriceData']['vip_qrcode'], gw7rem['main']['box_help']['visible'] = !![];
    }), this['main']['box_help_close']['on'](Laya['Event']['CLICK'], this, function () {
      gw7rem['main']['box_help']['visible'] = ![];
    }), this['main']['box_help_bg']['skin'] = this['tool']['data']['vip_customer_service_not_add'], this['main']['box_help_qrcode']['skin'] = gw7rem['rolePriceData']['vip_qrcode'], this['main']['box_help_qrcode']['scaleX'] = 0xa0 / this['main']['box_help_qrcode']['width'], this['main']['box_help_qrcode']['scaleY'] = 0xa0 / this['main']['box_help_qrcode']['width'], this['main']['box_3_panel']['vScrollBar']['visible'] = ![], this['main']['box_3_panel']['vScrollBarSkin'] = 'common_atlas/scrollBar.png';
  }, xjyio['prototype']['initIcon'] = function () {
    this['icon'] = new Laya['Image'](), this['icon']['skin'] = this['tool']['data']['basics_image_url'], this['icon']['x'] = 0x0, this['icon']['y'] = 0xc8, this['icon']['width'] = 0x66, this['icon']['height'] = 0x6f, this['main']['addChild'](this['icon']), this['icon']['on'](Laya['Event']['MOUSE_DOWN'], this, this['iconPress']), this['icon']['on'](Laya['Event']['MOUSE_UP'], this, this['iconUp']), this['icon']['on'](Laya['Event']['MOUSE_WHEEL'], this, this['iconMove']), this['dragRect'] = new Laya['Rectangle'](-this['icon']['width'] / 0x2, 0x0, Laya['stage']['width'], Laya['stage']['height'] - this['icon']['height'] / 0x2);
  }, xjyio['prototype']['initEvent'] = function () {
    var gqdep7 = this;this['main']['btn_1']['on'](Laya['Event']['CLICK'], this, function () {
      if (gqdep7['page'] == 0x1) return;gqdep7['page1']();
    }), this['main']['btn_2']['on'](Laya['Event']['CLICK'], this, function () {
      if (gqdep7['page'] == 0x2) return;gqdep7['page2']();
    }), this['main']['btn_3']['on'](Laya['Event']['CLICK'], this, function () {
      if (gqdep7['page'] == 0x3) return;gqdep7['page3']();
    }), this['main']['btn_close']['on'](Laya['Event']['CLICK'], this, function () {
      gqdep7['main']['bg']['x'] = -0x2ee, gqdep7['icon']['visible'] = !![];
    });
  }, xjyio['prototype']['initBoard'] = function () {
    this['isInitBoard'] = !![], this['page1']();
  }, xjyio['prototype']['showBoard'] = function () {
    this['main']['bg']['x'] = 0x0, this['icon']['visible'] = ![];var rw8ym = _rYE['selectedServer']['server_id'],
        _h56 = _rYE['selectedServer']['server_name'],
        w7rge = _rYE['roleId'],
        dpfc5n = _rYE['roleName'],
        fd5pnc = r_nefdp['sygame']['openid'],
        sxjzi = '&role_id=' + r_nefdp['sygame']['role_id'] + '&channel=' + r_nefdp['sygame']['channel'] + '&server_id=' + rw8ym + '&server_name=' + _h56 + '&wecha_id=' + fd5pnc + '&role_id=' + w7rge + '&role_name=' + dpfc5n;this['tool']['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=sidebarApiRoleId' + sxjzi, this['rolePriceHandler']['bind'](this), this['roleError']['bind'](this));
  }, xjyio['prototype']['page1'] = function () {
    this['page'] = 0x1;!xjyio['prototype']['page1Bg'] && (xjyio['prototype']['page1Bg'] = new Laya['Image'](this['tool']['data']['public_code']), this['main']['bg']['addChildAt'](xjyio['prototype']['page1Bg'], 0x0));if (xjyio['prototype']['page1Bg']) xjyio['prototype']['page1Bg']['visible'] = !![];if (xjyio['prototype']['page2Bg']) xjyio['prototype']['page2Bg']['visible'] = ![];if (xjyio['prototype']['page3Bg']) xjyio['prototype']['page3Bg']['visible'] = ![];this['main']['box_1_show']['visible'] = !![], this['main']['box_2_show']['visible'] = ![], this['main']['box_3_show']['visible'] = ![];
  }, xjyio['prototype']['page2'] = function () {
    this['page'] = 0x2;!xjyio['prototype']['page2Bg'] && (xjyio['prototype']['page2Bg'] = new Laya['Image'](this['tool']['data']['vip_customer_service']), this['main']['bg']['addChildAt'](xjyio['prototype']['page2Bg'], 0x0));if (xjyio['prototype']['page1Bg']) xjyio['prototype']['page1Bg']['visible'] = ![];if (xjyio['prototype']['page2Bg']) xjyio['prototype']['page2Bg']['visible'] = !![];if (xjyio['prototype']['page3Bg']) xjyio['prototype']['page3Bg']['visible'] = ![];this['main']['box_1_show']['visible'] = ![], this['main']['box_2_show']['visible'] = !![], this['main']['box_3_show']['visible'] = ![];
  }, xjyio['prototype']['page3'] = function () {
    this['page'] = 0x3;!xjyio['prototype']['page3Bg'] && (xjyio['prototype']['page3Bg'] = new Laya['Image'](this['tool']['data']['game_center_image_url']), this['main']['bg']['addChildAt'](xjyio['prototype']['page3Bg'], 0x0));if (xjyio['prototype']['page1Bg']) xjyio['prototype']['page1Bg']['visible'] = ![];if (xjyio['prototype']['page2Bg']) xjyio['prototype']['page2Bg']['visible'] = ![];if (xjyio['prototype']['page3Bg']) xjyio['prototype']['page3Bg']['visible'] = !![];xjyio['prototype']['page1Bg']['visible'] = ![], this['main']['bg']['skin'] = this['tool']['data']['game_center_image_url'], this['main']['box_1_show']['visible'] = ![], this['main']['box_2_show']['visible'] = ![], this['main']['box_3_show']['visible'] = !![], this['sendBox'] || this['getBoxList'](0x0), this['sendBox'] = !![], r_cnqdpf && r_cnqdpf['syClickOpenBox']();
  }, xjyio['prototype']['getBoxList'] = function (dnc5) {
    var ltvzs3 = this;r_cnqdpf && r_cnqdpf['syGetBoxList']({ 'page': dnc5, 'count': 0xc })['then'](function (c_u5h6) {
      var jox8i = c_u5h6['data'];jox8i['status'] == 0x3e9 ? jox8i['data'] && jox8i['data']['length'] && (ltvzs3['boxlist'] = ltvzs3['boxlist']['concat'](jox8i['data']), dnc5++, ltvzs3['getBoxList'](dnc5)) : ltvzs3['boxListHandler']();
    });
  }, xjyio['prototype']['copyText'] = function ($4ab91) {
    try {
      wx['setClipboardData']({ 'data': $4ab91, 'success': function (_cnh5) {
          console['log']('复制成功:', _cnh5);
        } });
    } catch (ioyjx) {}
  }, xjyio['prototype']['rolePriceHandler'] = function (zts3) {
    this['rolePriceData'] = JSON['parse'](zts3);switch (this['rolePriceData']['status']) {case 0x3e9:
        this['main']['box_2_lab_v_1']['text'] = (this['rolePriceData']['todayPrice'] || 0x0) + '/' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_v_2']['text'] = (this['rolePriceData']['allPrice'] || 0x0) + '/' + +this['tool']['data']['y'] + '元';break;case 0x3ea:
        break;case 0x3eb:
        break;}
  }, xjyio['prototype']['roleError'] = function () {}, xjyio['prototype']['boxListHandler'] = function () {
    var joiz2x = function (krwmg7) {
      var mg7qe = u_1h56['boxlist'][krwmg7],
          ba914 = new r_gqfpe['demoui']['BoxItemUI']();ba914['icon']['skin'] = mg7qe['icon'], ba914['title']['text'] = mg7qe['title'], ba914['x'] = 0xa0 * (krwmg7 % 0x3), ba914['y'] = 0xa0 * (krwmg7 / 0x3 ^ 0x0), u_1h56['main']['box_3_panel']['addChild'](ba914);var ermqg = { 'appid': r_nefdp['sygame']['appid'], 'game_id': mg7qe['game_id'], 'jump_appid': mg7qe['jump_appid'], 'jump_path': mg7qe['jump_path'], 'tunnel_id': mg7qe['tunnel_id'], 'uv': 0x0, 'wecha_id': r_nefdp['sygame']['openid'] },
          oy8m = mg7qe['preview_img'],
          ergq7m = mg7qe['jump_type'],
          kmwy8r = mg7qe['kf_session'];ba914['on'](Laya['Event']['CLICK'], u_1h56, function () {
        r_cnqdpf && r_cnqdpf['syClickBox']({ 'game_id': mg7qe['game_id'], 'tunnel_id': mg7qe['tunnel_id'], 'jump_appid': mg7qe['jump_appid'], 'jump_path': mg7qe['jump_path'] })['then'](function (okiwy) {
          if (ergq7m === '0') wx['navigateToMiniProgram']({ 'appId': ermqg['jump_appid'], 'path': ermqg['jump_path'], 'fail': function (vtzsl) {
              if (!oy8m) return;wx['previewImage']({ 'urls': [oy8m] });
            } });else {
            if (ergq7m === '1') {
              if (!oy8m) return;wx['previewImage']({ 'urls': [oy8m] });
            } else {
              if (ergq7m === '2') {
                if (!kmwy8r) return;wx['openCustomerServiceConversation']({ 'sessionFrom': kmwy8r, 'showMessageCard': !![], 'sendMessageTitle': '', 'sendMessagePath': '', 'sendMessageImg': '' });
              }
            }
          }
        });
      });
    },
        u_1h56 = this;for (var we7mrg = 0x0; we7mrg < this['boxlist']['length']; we7mrg++) {
      joiz2x(we7mrg);
    }
  }, xjyio['prototype']['boxListError'] = function () {}, xjyio['prototype']['boxClickHandler'] = function () {}, xjyio['prototype']['iconPress'] = function (dnef) {
    this['donwX'] = dnef['target']['x'], this['donwY'] = dnef['target']['y'], this['icon']['startDrag'](this['dragRect']), this['isMove'] = ![], this['isPress'] = !![];
  }, xjyio['prototype']['iconMove'] = function (cndfp) {
    this['isMove'] = !![];
  }, xjyio['prototype']['iconUp'] = function (qmerg) {
    var mgerw = qmerg['target']['x'],
        zst23 = qmerg['target']['y'];this['icon']['stopDrag'](), mgerw == this['donwX'] && this['donwY'] == zst23 && (this['isInitBoard'] || this['initBoard'](), this['showBoard']()), this['isMove'] = ![], this['isPress'] = ![];
  }, xjyio;
}(),
    r_gqfpe;(function (au_6h) {
  var st3l;(function (u_a$1) {
    var hu1_ab = function (jio8x) {
      r_c_5u(yj8iko, jio8x);function yj8iko() {
        return jio8x['call'](this) || this;
      }return yj8iko['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), jio8x['prototype']['createChildren']['call'](this), this['createView'](au_6h['demoui']['BoxItemUI']['uiView']);
      }, yj8iko['uiView'] = { 'type': 'View', 'props': { 'width': 0xb4, 'height': 0xa0 }, 'child': [{ 'type': 'Image', 'props': { 'y': 0x3, 'x': 0x20, 'width': 0x73, 'var': 'icon', 'height': 0x73 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x79, 'x': -0x21, 'width': 0xb4, 'var': 'title', 'valign': 'middle', 'height': 0x22, 'fontSize': 0x16, 'color': '#441d1c', 'align': 'center' } }] }] }, yj8iko;
    }(laya['ui']['View']);u_a$1['BoxItemUI'] = hu1_ab;
  })(st3l = au_6h['demoui'] || (au_6h['demoui'] = {}));
})(r_gqfpe || (r_gqfpe = {})), function (kwyoi) {
  var fpnqcd;(function (q7mger) {
    var nfc5h = function (a9$1ub) {
      r_c_5u(u_c56h, a9$1ub);function u_c56h() {
        return a9$1ub['call'](this) || this;
      }return u_c56h['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), a9$1ub['prototype']['createChildren']['call'](this), this['createView'](kwyoi['demoui']['MainUI']['uiView']);
      }, u_c56h['uiView'] = { 'type': 'View', 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x2ee, 'top': 0x0, 'right': 0x0, 'left': 0x0, 'height': 0x536, 'bottom': 0x0 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x2ee, 'height': 0x536, 'centerY': 0x0 }, 'child': [{ 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x2ee, 'var': 'bg', 'height': 0x536 }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x2ee, 'visible': ![], 'var': 'box_1_show', 'height': 0x536, 'centerY': 0x0 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x253, 'x': 0x2e, 'width': 0x1d0, 'var': 'box_1_lab_info', 'leading': 0xa, 'height': 0x97, 'fontSize': 0x18, 'color': '#a959ee' } }, { 'type': 'HBox', 'props': { 'y': 0x2ee, 'x': 0x14, 'width': 0x1fe, 'space': 0x35, 'height': 0x78, 'align': 'top' }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x58, 'var': 'box_1_img_1', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_1', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0xa, 'x': 0xa, 'width': 0x58, 'var': 'box_1_img_2', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_2', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x14, 'x': 0x14, 'width': 0x58, 'var': 'box_1_img_3', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_3', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x1e, 'x': 0x1e, 'width': 0x58, 'var': 'box_1_img_4', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_4', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }] }] }, { 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'visible': ![], 'var': 'box_2_show' }, 'child': [{ 'type': 'HBox', 'props': { 'y': 0x220, 'x': 0x18, 'width': 0x1f4, 'space': 0x2c, 'height': 0x56, 'align': 'top' }, 'child': [{ 'type': 'Image', 'props': { 'y': 2.5, 'x': 0x0, 'width': 0x58, 'var': 'box_2_img_1', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_1', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0xc, 'x': 0xa, 'width': 0x58, 'var': 'box_2_img_2', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_2', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x16, 'x': 0x14, 'width': 0x58, 'var': 'box_2_img_3', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_3', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x20, 'x': 0x1e, 'width': 0x58, 'var': 'box_2_img_4', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_4', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x2a, 'x': 0x28, 'width': 0x58, 'var': 'box_2_img_5', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_5', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }] }, { 'type': 'Box', 'props': { 'y': 0x384, 'x': 0x0, 'width': 0x221, 'height': 0x44 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x0, 'x': 0x28, 'width': 0x122, 'var': 'box_2_lab_m_1', 'text': '方法一\uFF1A单日充值1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300' } }, { 'type': 'Text', 'props': { 'y': 0x1e, 'x': 0x28, 'width': 0x122, 'var': 'box_2_lab_m_2', 'text': '方法一\uFF1A历史累计充值1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300' } }, { 'type': 'Text', 'props': { 'y': 0x0, 'x': 0x141, 'width': 0xa4, 'var': 'box_2_lab_v_1', 'text': '1000/1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300', 'align': 'right' } }, { 'type': 'Text', 'props': { 'y': 0x1e, 'x': 0x141, 'width': 0xa4, 'var': 'box_2_lab_v_2', 'text': '1000/1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300', 'align': 'right' } }] }, { 'type': 'Image', 'props': { 'y': 0x1aa, 'x': 0x159, 'width': 0x66, 'var': 'box_2_btn_get', 'stateNum': 0x1, 'height': 0x26 } }, { 'type': 'Image', 'props': { 'y': 0x1aa, 'x': 0x159, 'width': 0x66, 'var': 'box_2_btn_copy', 'stateNum': 0x1, 'height': 0x26 } }, { 'type': 'Button', 'props': { 'y': 0x1d2, 'x': 0x126, 'width': 0xc9, 'var': 'box_2_addclick', 'stateNum': 0x1, 'height': 0x1b } }, { 'type': 'Text', 'props': { 'y': 0x13c, 'x': 0x17a, 'width': 0xa3, 'var': 'box_2_lab_wx', 'height': 0x1f, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'left' } }] }, { 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'visible': ![], 'var': 'box_3_show' }, 'child': [{ 'type': 'Panel', 'props': { 'y': 0xf5, 'x': 0x10, 'width': 0x201, 'var': 'box_3_panel', 'vScrollBarSkin': '', 'height': 0x29e } }] }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0x0, 'width': 0xbb, 'var': 'btn_1', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0xba, 'width': 0xbb, 'var': 'btn_2', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0x177, 'width': 0xbb, 'var': 'btn_3', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x203, 'x': 0x22e, 'width': 0x25, 'var': 'btn_close', 'height': 0x8f } }, { 'type': 'Box', 'props': { 'width': 0x2ee, 'visible': ![], 'var': 'box_help', 'height': 0x536 }, 'child': [{ 'type': 'Sprite', 'props': { 'y': 0x0, 'x': 0x0, 'mouseThrough': ![], 'alpha': 0.7 }, 'child': [{ 'type': 'Rect', 'props': { 'width': 0x2ee, 'lineWidth': 0x1, 'height': 0x536, 'fillColor': '#000000' } }] }, { 'type': 'Image', 'props': { 'y': 0x158, 'x': 0x28, 'width': 0x1d2, 'var': 'box_help_bg', 'height': 0x203 }, 'child': [{ 'type': 'Button', 'props': { 'y': -0x1, 'x': 0x1a0, 'width': 0x33, 'var': 'box_help_close', 'height': 0x28 } }, { 'type': 'Image', 'props': { 'y': 0x3f, 'x': 0x98, 'width': 0xa0, 'var': 'box_help_qrcode', 'height': 0xa0 } }] }] }] }] }] }, u_c56h;
    }(laya['ui']['View']);q7mger['MainUI'] = nfc5h;
  })(fpnqcd = kwyoi['demoui'] || (kwyoi['demoui'] = {}));
}(r_gqfpe || (r_gqfpe = {})), function (xo8) {
  var iz2jox;(function (k8r7m) {
    var _1uah = function (l0sv3t) {
      r_c_5u(pdcfn5, l0sv3t);function pdcfn5() {
        return l0sv3t['call'](this) || this;
      }return pdcfn5['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), l0sv3t['prototype']['createChildren']['call'](this), this['createView'](xo8['demoui']['ToastUI']['uiView']);
      }, pdcfn5['uiView'] = { 'type': 'View', 'props': { 'width': 0x2ee, 'height': 0x536 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x12c, 'height': 0x32, 'centerY': 0x0, 'centerX': 0x0 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x12c, 'height': 0x32, 'centerX': 0x0, 'alpha': 0.5 }, 'child': [{ 'type': 'Rect', 'props': { 'width': 0x12c, 'lineWidth': 0x1, 'height': 0x32, 'fillColor': '#382f2f' } }] }, { 'type': 'Text', 'props': { 'width': 0x12c, 'var': 'lab_msg', 'valign': 'middle', 'text': 'text', 'height': 0x32, 'fontSize': 0x18, 'color': '#ffffff', 'align': 'center' } }] }] }, pdcfn5;
    }(laya['ui']['View']);k8r7m['ToastUI'] = _1uah;
  })(iz2jox = xo8['demoui'] || (xo8['demoui'] = {}));
}(r_gqfpe || (r_gqfpe = {}));var r_wioy8k = function () {
  function s3lztv() {}return s3lztv['init'] = function () {
    !this['ui'] && (this['ui'] = new r_gqfpe['demoui']['ToastUI'](), this['ui']['visible'] = ![], Laya['stage']['addChild'](this['ui']));
  }, s3lztv['msg'] = function (erp) {
    var bu1_a = this;!this['ui'] && s3lztv['init'](), this['ui']['visible'] = !![], this['ui']['lab_msg']['text'] = erp, clearTimeout(this['interval']), this['interval'] = setTimeout(function () {
      bu1_a['ui']['visible'] = ![];
    }, 0x7d0);
  }, s3lztv;
}();window['minitool'] = r_a$1_ub;