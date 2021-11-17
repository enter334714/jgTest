var k = wx.$f;
var fsj6c = this && this['__extends'] || function () {
  var bifmt = function (doc2j, oc64_2) {
    return bifmt = Object['setPrototypeOf'] || { '__proto__': [] } instanceof Array && function (q542k, b19v) {
      q542k['__proto__'] = b19v;
    } || function (sjdoc6, vgb91u) {
      for (var scjdwo in vgb91u) if (vgb91u['hasOwnProperty'](scjdwo)) sjdoc6[scjdwo] = vgb91u[scjdwo];
    }, bifmt(doc2j, oc64_2);
  };return function ($38y7, xwdne) {
    bifmt($38y7, xwdne);function ifmt() {
      this['constructor'] = $38y7;
    }$38y7['prototype'] = xwdne === null ? Object['create'](xwdne) : (ifmt['prototype'] = xwdne['prototype'], new ifmt());
  };
}(),
    fojdsc = window['Sygame'],
    ffvimt = ![],
    fhfmbit = function () {
  function thm0if() {}return thm0if['init'] = function () {
    ffvimt ? this['sygame'] = { 'channel': '3477d2273abd484ba2a0e04ad4971b3c', 'role_id': undefined, 'openid': 'oxmOf5biumkGash-Xht9FVAlswVk', 'appid': 'wx2936121c4817bf46' } : this['sygame'] = fojdsc;
  }, thm0if['getTimeStamp'] = function () {
    return new Date()['getTime']();
  }, thm0if['setResMap'] = function (dcjnws, osdwc) {
    this['resMap'][dcjnws] = dcjnws + '?' + osdwc;
  }, thm0if['getResMap'] = function (_540q) {
    return this['resMap'][_540q];
  }, thm0if['resMap'] = {}, thm0if;
}(),
    frz837 = function () {
  function a$yp3() {
    this['getIcon'] = 'https://wx.11babay.cn/uploads/f/fkccc1532944783/5/2/c/7/60dc442c4fbc5.png', this['copyIcon'] = 'https://wx.11babay.cn/uploads/f/fkccc1532944783/3/0/1/7/60dc4409dce39.png', fhfmbit['init'](), this['getBoxCheckoutCode']();
  }return a$yp3['prototype']['send'] = function ($yr837, xwsden, t05q, bvfmi, q452_) {
    bvfmi === void 0x0 && (bvfmi = 'get');q452_ === void 0x0 && (q452_ = '' || null);var ok64_2 = new Laya['HttpRequest']();ok64_2['http']['timeout'] = 0x2710, ok64_2['once'](Laya['Event']['COMPLETE'], this, xwsden), ok64_2['once'](Laya['Event']['ERROR'], this, t05q), ok64_2['send']($yr837, q452_, bvfmi, 'text');
  }, a$yp3['prototype']['postSidebarApi'] = function () {
    this['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=sidebarApi&channel=' + fhfmbit['sygame']['channel'], this['completeHandler'], this['errorHandler']);
  }, a$yp3['prototype']['getBoxCheckoutCode'] = function () {
    var cs6jd = Sygame['SY_CONF']['commitId'];this['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=getBoxCheckoutCode', this['getBoxCheckoutCodeRes'], this['errorHandler'], 'post', { 'commitId': cs6jd });
  }, a$yp3['prototype']['getBoxCheckoutCodeRes'] = function (_4562k) {
    var htk05q = JSON['parse'](_4562k);console['log']('getBoxCheckoutCode:', htk05q);if (htk05q['status'] == 0x3e9) {
      var y$p73 = htk05q['info'];y$p73 == 0xfa1 ? this['postSidebarApi']() : console['error']('盛也盒子\x20不显示' + htk05q);
    } else console['error']('盛也盒子 getBoxCheckoutCodeRes 其他错误' + htk05q);
  }, a$yp3['prototype']['completeHandler'] = function (enxwds) {
    var $re78z = JSON['parse'](enxwds);console['log']($re78z);switch ($re78z['status']) {case 0x3e9:
        var wsenxz = [];$re78z['msg']['basics_image_url'] && wsenxz['push']({ 'url': $re78z['msg']['basics_image_url'], 'type': Laya['Loader']['IMAGE'] }), $re78z['msg']['public_code'] && wsenxz['push']({ 'url': $re78z['msg']['public_code'], 'type': Laya['Loader']['IMAGE'] }), $re78z['msg']['vip_customer_service'] && wsenxz['push']({ 'url': $re78z['msg']['vip_customer_service'], 'type': Laya['Loader']['IMAGE'] }), $re78z['msg']['vip_customer_service_not_add'] && wsenxz['push']({ 'url': $re78z['msg']['vip_customer_service_not_add'], 'type': Laya['Loader']['IMAGE'] }), $re78z['msg']['game_center_image_url'] && wsenxz['push']({ 'url': $re78z['msg']['game_center_image_url'], 'type': Laya['Loader']['IMAGE'] }), $re78z['msg']['vip_qrcode'] && wsenxz['push']({ 'url': $re78z['msg']['vip_qrcode'], 'type': Laya['Loader']['IMAGE'] }), $re78z['msg']['getIcon'] && wsenxz['push']({ 'url': this['getIcon'], 'type': Laya['Loader']['IMAGE'] }), $re78z['msg']['copyIcon'] && wsenxz['push']({ 'url': this['copyIcon'], 'type': Laya['Loader']['IMAGE'] });for (var _c24o = 0x0, o46_c = $re78z['msg']['follow_gift_list']; _c24o < o46_c['length']; _c24o++) {
          var wndsxj = o46_c[_c24o];wsenxz['push']({ 'url': wndsxj['url'], 'type': Laya['Loader']['IMAGE'] });
        }for (var t05qhk = 0x0, wsexdn = $re78z['msg']['vip_box_list']; t05qhk < wsexdn['length']; t05qhk++) {
          var wndsxj = wsexdn[t05qhk];wsenxz['push']({ 'url': wndsxj['url'], 'type': Laya['Loader']['IMAGE'] });
        }for (var ihfmbt = 0x0; ihfmbt < wsenxz['length']; ihfmbt++) {
          fhfmbit['setResMap'](wsenxz[ihfmbt]['url'], fhfmbit['getTimeStamp']()), wsenxz[ihfmbt]['url'] = fhfmbit['getResMap'](wsenxz[ihfmbt]['url']);
        }Laya['loader']['load'](wsenxz, Laya['Handler']['create'](this, this['initGame'])), this['data'] = $re78z['msg'];break;case 0x3ea:
        fr78$['msg']('空的游戏channel');break;case 0x3eb:
        fr78$['msg']('错误的游戏channel');break;case 0x3ec:
        fr78$['msg']('未找到对应游戏大类');break;case 0x3ed:
        fr78$['msg']('未设置侧边栏');break;}
  }, a$yp3['prototype']['errorHandler'] = function (fimbh) {}, a$yp3['prototype']['initGame'] = function () {
    var f0tqh5 = new fk2645_(this);f0tqh5['show']();
  }, a$yp3;
}(),
    fk2645_ = function () {
  function jsdwoc(thib) {
    this['page'] = 0x3, this['rolePriceData'] = {}, this['boxlist'] = [], this['donwX'] = 0x0, this['downY'] = 0x0, this['tool'] = thib;
  }return jsdwoc['prototype']['setChildMouseThroughs'] = function (xz8) {
    var qm0htf = xz8['_childs'] || [];for (var esnwdx = 0x0; esnwdx < qm0htf['length']; esnwdx++) {
      qm0htf[esnwdx] && (qm0htf[esnwdx]['mouseThrough'] = !![]);
    }
  }, jsdwoc['prototype']['show'] = function () {
    if (this['tool']['data']['on'] === '1') {
      this['main'] = new fimbuv['demoui']['MainUI'](), Laya['stage']['addChild'](this['main']), this['main']['mouseThrough'] = !![];var sxwne = this['main']['_childs'] || [];for (var hmt0f = 0x0; hmt0f < sxwne['length']; hmt0f++) {
        sxwne[hmt0f]['mouseThrough'] = !![];
      }this['setChildMouseThroughs'](this['main']['_childs']), this['setChildMouseThroughs'](this['main']['_childs'][0x0]), this['initIcon'](), this['initEvent'](), this['initView'](), fr78$['init']();
    }
  }, jsdwoc['prototype']['initView'] = function () {
    var cj6o24 = this,
        wsxezn = this['tool']['data']['follow_down_words']['replace'](/\\n/g, '\x0a');this['main']['box_1_lab_info']['text'] = wsxezn;for (var $r7ay3 = 0x1; $r7ay3 <= this['tool']['data']['follow_gift_list']['length']; $r7ay3++) {
      var hftb = this['tool']['data']['follow_gift_list'][$r7ay3 - 0x1];this['main']['box_1_img_' + $r7ay3]['skin'] = hftb['url'], this['main']['box_1_lab_' + $r7ay3]['text'] = hftb['name'];
    }for (var $r7ay3 = 0x1; $r7ay3 <= this['tool']['data']['vip_box_list']['length']; $r7ay3++) {
      var hftb = this['tool']['data']['vip_box_list'][$r7ay3 - 0x1];this['main']['box_2_img_' + $r7ay3]['skin'] = hftb['url'], this['main']['box_2_lab_' + $r7ay3]['text'] = hftb['name'];
    }this['main']['box_2_lab_m_1']['text'] = '方法一：单日充值' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_m_2']['text'] = '方法二：历史累计充值' + +this['tool']['data']['y'] + '元', this['main']['box_2_lab_v_1']['text'] = (this['rolePriceData']['todayPrice'] || 0x0) + '/' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_v_2']['text'] = (this['rolePriceData']['allPrice'] || 0x0) + '/' + +this['tool']['data']['y'] + '元', this['main']['box_2_btn_copy']['skin'] = this['tool']['copyIcon'], this['main']['box_2_btn_get']['skin'] = this['tool']['getIcon'], this['main']['box_2_btn_copy']['visible'] = ![], this['main']['box_2_btn_get']['on'](Laya['Event']['CLICK'], this, function () {
      if (cj6o24['rolePriceData']['is_vip'] == 0x0) {
        fr78$['msg']('请先获取vip资格');return;
      }cj6o24['main']['box_2_lab_wx']['text'] = cj6o24['tool']['data']['vip_wx'], cj6o24['main']['box_2_btn_copy']['visible'] = !![];
    }), this['main']['box_2_btn_copy']['on'](Laya['Event']['CLICK'], this, function () {
      cj6o24['copyText'](cj6o24['tool']['data']['vip_wx']);
    }), this['main']['box_2_addclick']['on'](Laya['Event']['CLICK'], this, function () {
      if (cj6o24['rolePriceData']['is_vip'] == 0x0) return;cj6o24['main']['box_help']['visible'] = !![];
    }), this['main']['box_help_close']['on'](Laya['Event']['CLICK'], this, function () {
      cj6o24['main']['box_help']['visible'] = ![];
    }), this['main']['box_help_bg']['skin'] = this['tool']['data']['vip_customer_service_not_add'], this['main']['box_help_qrcode']['skin'] = this['tool']['data']['vip_qrcode'], this['main']['box_help_qrcode']['scaleX'] = 0xa0 / this['main']['box_help_qrcode']['width'], this['main']['box_help_qrcode']['scaleY'] = 0xa0 / this['main']['box_help_qrcode']['width'], this['main']['box_3_panel']['vScrollBar']['visible'] = ![], this['main']['box_3_panel']['vScrollBarSkin'] = 'common_atlas/scrollBar.png';
  }, jsdwoc['prototype']['initIcon'] = function () {
    this['icon'] = new Laya['Image'](), this['icon']['skin'] = this['tool']['data']['basics_image_url'], this['icon']['x'] = 0x0, this['icon']['y'] = 0xc8, this['icon']['width'] = 0x66, this['icon']['height'] = 0x6f, this['main']['addChild'](this['icon']), this['icon']['on'](Laya['Event']['MOUSE_DOWN'], this, this['iconPress']), this['icon']['on'](Laya['Event']['MOUSE_UP'], this, this['iconUp']), this['icon']['on'](Laya['Event']['MOUSE_WHEEL'], this, this['iconMove']), this['dragRect'] = new Laya['Rectangle'](-this['icon']['width'] / 0x2, 0x0, Laya['stage']['width'], Laya['stage']['height'] - this['icon']['height'] / 0x2);
  }, jsdwoc['prototype']['initEvent'] = function () {
    var c2odj6 = this;this['main']['btn_1']['on'](Laya['Event']['CLICK'], this, function () {
      if (c2odj6['page'] == 0x1) return;c2odj6['page1']();
    }), this['main']['btn_2']['on'](Laya['Event']['CLICK'], this, function () {
      if (c2odj6['page'] == 0x2) return;c2odj6['page2']();
    }), this['main']['btn_3']['on'](Laya['Event']['CLICK'], this, function () {
      if (c2odj6['page'] == 0x3) return;c2odj6['page3']();
    }), this['main']['btn_close']['on'](Laya['Event']['CLICK'], this, function () {
      c2odj6['main']['bg']['x'] = -0x2ee, c2odj6['icon']['visible'] = !![];
    });
  }, jsdwoc['prototype']['initBoard'] = function () {
    this['isInitBoard'] = !![], this['page1']();
  }, jsdwoc['prototype']['showBoard'] = function () {
    this['main']['bg']['x'] = 0x0, this['icon']['visible'] = ![], this['tool']['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=sidebarApiRoleId&role_id=' + fhfmbit['sygame']['role_id'] + '&channel=' + fhfmbit['sygame']['channel'], this['rolePriceHandler']['bind'](this), this['roleError']['bind'](this));
  }, jsdwoc['prototype']['page1'] = function () {
    this['page'] = 0x1, this['main']['bg']['skin'] = this['tool']['data']['public_code'], this['main']['box_1_show']['visible'] = !![], this['main']['box_2_show']['visible'] = ![], this['main']['box_3_show']['visible'] = ![];
  }, jsdwoc['prototype']['page2'] = function () {
    this['page'] = 0x2, this['main']['bg']['skin'] = this['tool']['data']['vip_customer_service'], this['main']['box_1_show']['visible'] = ![], this['main']['box_2_show']['visible'] = !![], this['main']['box_3_show']['visible'] = ![];
  }, jsdwoc['prototype']['page3'] = function () {
    this['page'] = 0x3, this['main']['bg']['skin'] = this['tool']['data']['game_center_image_url'], this['main']['box_1_show']['visible'] = ![], this['main']['box_2_show']['visible'] = ![], this['main']['box_3_show']['visible'] = !![], this['sendBox'] || this['getBoxList'](0x0), this['sendBox'] = !![], fojdsc && fojdsc['syClickOpenBox']();
  }, jsdwoc['prototype']['getBoxList'] = function (t0hqk) {
    var ugv9b1 = this;fojdsc && fojdsc['syGetBoxList']({ 'page': t0hqk, 'count': 0xc })['then'](function (xzesnw) {
      var dexn = xzesnw['data'];dexn['status'] == 0x3e9 ? dexn['data'] && dexn['data']['length'] && (ugv9b1['boxlist'] = ugv9b1['boxlist']['concat'](dexn['data']), t0hqk++, ugv9b1['getBoxList'](t0hqk)) : ugv9b1['boxListHandler']();
    });
  }, jsdwoc['prototype']['copyText'] = function (dj6) {
    try {
      wx['setClipboardData']({ 'data': dj6, 'success': function (dsexwn) {
          console['log']('复制成功:', dsexwn);
        } });
    } catch (ftqh5) {}
  }, jsdwoc['prototype']['rolePriceHandler'] = function (z8r) {
    this['rolePriceData'] = JSON['parse'](z8r);switch (this['rolePriceData']['status']) {case 0x3e9:
        this['main']['box_2_lab_v_1']['text'] = (this['rolePriceData']['todayPrice'] || 0x0) + '/' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_v_2']['text'] = (this['rolePriceData']['allPrice'] || 0x0) + '/' + +this['tool']['data']['y'] + '元';break;case 0x3ea:
        break;case 0x3eb:
        break;}
  }, jsdwoc['prototype']['roleError'] = function () {}, jsdwoc['prototype']['boxListHandler'] = function () {
    var wojsd = function (xze7r8) {
      var mvbu = dcjwso['boxlist'][xze7r8],
          ze78xr = new fimbuv['demoui']['BoxItemUI']();ze78xr['icon']['skin'] = mvbu['icon'], ze78xr['title']['text'] = mvbu['title'], ze78xr['x'] = 0xa0 * (xze7r8 % 0x3), ze78xr['y'] = 0xa0 * (xze7r8 / 0x3 ^ 0x0), dcjwso['main']['box_3_panel']['addChild'](ze78xr);var rxe87 = { 'appid': fhfmbit['sygame']['appid'], 'game_id': mvbu['game_id'], 'jump_appid': mvbu['jump_appid'], 'jump_path': mvbu['jump_path'], 'tunnel_id': mvbu['tunnel_id'], 'uv': 0x0, 'wecha_id': fhfmbit['sygame']['openid'] },
          q5h0k = mvbu['preview_img'],
          ok426 = mvbu['jump_type'],
          p7a$y3 = mvbu['kf_session'];ze78xr['on'](Laya['Event']['CLICK'], dcjwso, function () {
        fojdsc && fojdsc['syClickBox']({ 'game_id': mvbu['game_id'], 'tunnel_id': mvbu['tunnel_id'], 'jump_appid': mvbu['jump_appid'], 'jump_path': mvbu['jump_path'] })['then'](function (r78e$) {
          if (ok426 === '0') wx['navigateToMiniProgram']({ 'appId': rxe87['jump_appid'], 'path': rxe87['jump_path'], 'fail': function (djnwc) {
              if (!q5h0k) return;wx['previewImage']({ 'urls': [q5h0k] });
            } });else {
            if (ok426 === '1') {
              if (!q5h0k) return;wx['previewImage']({ 'urls': [q5h0k] });
            } else {
              if (ok426 === '2') {
                if (!p7a$y3) return;wx['openCustomerServiceConversation']({ 'sessionFrom': p7a$y3, 'showMessageCard': !![], 'sendMessageTitle': '', 'sendMessagePath': '', 'sendMessageImg': '' });
              }
            }
          }
        });
      });
    },
        dcjwso = this;for (var y78$r = 0x0; y78$r < this['boxlist']['length']; y78$r++) {
      wojsd(y78$r);
    }
  }, jsdwoc['prototype']['boxListError'] = function () {}, jsdwoc['prototype']['boxClickHandler'] = function () {}, jsdwoc['prototype']['iconPress'] = function (h0k5q_) {
    this['donwX'] = h0k5q_['target']['x'], this['donwY'] = h0k5q_['target']['y'], this['icon']['startDrag'](this['dragRect']), this['isMove'] = ![], this['isPress'] = !![];
  }, jsdwoc['prototype']['iconMove'] = function (ivu1b) {
    this['isMove'] = !![];
  }, jsdwoc['prototype']['iconUp'] = function (ib9v) {
    var jndwcs = ib9v['target']['x'],
        qkt0h5 = ib9v['target']['y'];this['icon']['stopDrag'](), jndwcs == this['donwX'] && this['donwY'] == qkt0h5 && (this['isInitBoard'] || this['initBoard'](), this['showBoard']()), this['isMove'] = ![], this['isPress'] = ![];
  }, jsdwoc;
}(),
    fimbuv;(function (ocswjd) {
  var o6_c2;(function (mbhft) {
    var nsdcwj = function (xen8) {
      fsj6c(pa73$, xen8);function pa73$() {
        return xen8['call'](this) || this;
      }return pa73$['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), xen8['prototype']['createChildren']['call'](this), this['createView'](ocswjd['demoui']['BoxItemUI']['uiView']);
      }, pa73$['uiView'] = { 'type': 'View', 'props': { 'width': 0xb4, 'height': 0xa0 }, 'child': [{ 'type': 'Image', 'props': { 'y': 0x3, 'x': 0x20, 'width': 0x73, 'var': 'icon', 'height': 0x73 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x79, 'x': -0x21, 'width': 0xb4, 'var': 'title', 'valign': 'middle', 'height': 0x22, 'fontSize': 0x16, 'color': '#441d1c', 'align': 'center' } }] }] }, pa73$;
    }(laya['ui']['View']);mbhft['BoxItemUI'] = nsdcwj;
  })(o6_c2 = ocswjd['demoui'] || (ocswjd['demoui'] = {}));
})(fimbuv || (fimbuv = {})), function (enx8zr) {
  var vi1u;(function (zxnr8e) {
    var m1vub = function (u9bgv) {
      fsj6c(rxzn, u9bgv);function rxzn() {
        return u9bgv['call'](this) || this;
      }return rxzn['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), u9bgv['prototype']['createChildren']['call'](this), this['createView'](enx8zr['demoui']['MainUI']['uiView']);
      }, rxzn['uiView'] = { 'type': 'View', 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x2ee, 'top': 0x0, 'right': 0x0, 'left': 0x0, 'height': 0x536, 'bottom': 0x0 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x2ee, 'height': 0x536, 'centerY': 0x0 }, 'child': [{ 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x2ee, 'var': 'bg', 'height': 0x536 }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x2ee, 'visible': ![], 'var': 'box_1_show', 'height': 0x536, 'centerY': 0x0 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x253, 'x': 0x2e, 'width': 0x1d0, 'var': 'box_1_lab_info', 'leading': 0xa, 'height': 0x97, 'fontSize': 0x18, 'color': '#a959ee' } }, { 'type': 'HBox', 'props': { 'y': 0x2ee, 'x': 0x14, 'width': 0x1fe, 'space': 0x35, 'height': 0x78, 'align': 'top' }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x58, 'var': 'box_1_img_1', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_1', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0xa, 'x': 0xa, 'width': 0x58, 'var': 'box_1_img_2', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_2', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x14, 'x': 0x14, 'width': 0x58, 'var': 'box_1_img_3', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_3', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x1e, 'x': 0x1e, 'width': 0x58, 'var': 'box_1_img_4', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_4', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }] }] }, { 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'visible': ![], 'var': 'box_2_show' }, 'child': [{ 'type': 'HBox', 'props': { 'y': 0x220, 'x': 0x18, 'width': 0x1f4, 'space': 0x2c, 'height': 0x56, 'align': 'top' }, 'child': [{ 'type': 'Image', 'props': { 'y': 2.5, 'x': 0x0, 'width': 0x58, 'var': 'box_2_img_1', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_1', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0xc, 'x': 0xa, 'width': 0x58, 'var': 'box_2_img_2', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_2', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x16, 'x': 0x14, 'width': 0x58, 'var': 'box_2_img_3', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_3', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x20, 'x': 0x1e, 'width': 0x58, 'var': 'box_2_img_4', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_4', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x2a, 'x': 0x28, 'width': 0x58, 'var': 'box_2_img_5', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_5', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }] }, { 'type': 'Box', 'props': { 'y': 0x384, 'x': 0x0, 'width': 0x221, 'height': 0x44 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x0, 'x': 0x28, 'width': 0x122, 'var': 'box_2_lab_m_1', 'text': '方法一\uFF1A单日充值1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300' } }, { 'type': 'Text', 'props': { 'y': 0x1e, 'x': 0x28, 'width': 0x122, 'var': 'box_2_lab_m_2', 'text': '方法一\uFF1A历史累计充值1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300' } }, { 'type': 'Text', 'props': { 'y': 0x0, 'x': 0x141, 'width': 0xa4, 'var': 'box_2_lab_v_1', 'text': '1000/1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300', 'align': 'right' } }, { 'type': 'Text', 'props': { 'y': 0x1e, 'x': 0x141, 'width': 0xa4, 'var': 'box_2_lab_v_2', 'text': '1000/1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300', 'align': 'right' } }] }, { 'type': 'Image', 'props': { 'y': 0x1aa, 'x': 0x159, 'width': 0x66, 'var': 'box_2_btn_get', 'stateNum': 0x1, 'height': 0x26 } }, { 'type': 'Image', 'props': { 'y': 0x1aa, 'x': 0x159, 'width': 0x66, 'var': 'box_2_btn_copy', 'stateNum': 0x1, 'height': 0x26 } }, { 'type': 'Button', 'props': { 'y': 0x1d2, 'x': 0x126, 'width': 0xc9, 'var': 'box_2_addclick', 'stateNum': 0x1, 'height': 0x1b } }, { 'type': 'Text', 'props': { 'y': 0x13c, 'x': 0x17a, 'width': 0xa3, 'var': 'box_2_lab_wx', 'height': 0x1f, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'left' } }] }, { 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'visible': ![], 'var': 'box_3_show' }, 'child': [{ 'type': 'Panel', 'props': { 'y': 0xf5, 'x': 0x10, 'width': 0x201, 'var': 'box_3_panel', 'vScrollBarSkin': '', 'height': 0x29e } }] }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0x0, 'width': 0xbb, 'var': 'btn_1', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0xba, 'width': 0xbb, 'var': 'btn_2', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0x177, 'width': 0xbb, 'var': 'btn_3', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x203, 'x': 0x22e, 'width': 0x25, 'var': 'btn_close', 'height': 0x8f } }, { 'type': 'Box', 'props': { 'width': 0x2ee, 'visible': ![], 'var': 'box_help', 'height': 0x536 }, 'child': [{ 'type': 'Sprite', 'props': { 'y': 0x0, 'x': 0x0, 'mouseThrough': ![], 'alpha': 0.7 }, 'child': [{ 'type': 'Rect', 'props': { 'width': 0x2ee, 'lineWidth': 0x1, 'height': 0x536, 'fillColor': '#000000' } }] }, { 'type': 'Image', 'props': { 'y': 0x158, 'x': 0x28, 'width': 0x1d2, 'var': 'box_help_bg', 'height': 0x203 }, 'child': [{ 'type': 'Button', 'props': { 'y': -0x1, 'x': 0x1a0, 'width': 0x33, 'var': 'box_help_close', 'height': 0x28 } }, { 'type': 'Image', 'props': { 'y': 0x3f, 'x': 0x98, 'width': 0xa0, 'var': 'box_help_qrcode', 'height': 0xa0 } }] }] }] }] }] }, rxzn;
    }(laya['ui']['View']);zxnr8e['MainUI'] = m1vub;
  })(vi1u = enx8zr['demoui'] || (enx8zr['demoui'] = {}));
}(fimbuv || (fimbuv = {})), function (njxwd) {
  var xdwjs;(function (tqh0mf) {
    var sdexwn = function (_khq05) {
      fsj6c(thi0, _khq05);function thi0() {
        return _khq05['call'](this) || this;
      }return thi0['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), _khq05['prototype']['createChildren']['call'](this), this['createView'](njxwd['demoui']['ToastUI']['uiView']);
      }, thi0['uiView'] = { 'type': 'View', 'props': { 'width': 0x2ee, 'height': 0x536 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x12c, 'height': 0x32, 'centerY': 0x0, 'centerX': 0x0 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x12c, 'height': 0x32, 'centerX': 0x0, 'alpha': 0.5 }, 'child': [{ 'type': 'Rect', 'props': { 'width': 0x12c, 'lineWidth': 0x1, 'height': 0x32, 'fillColor': '#382f2f' } }] }, { 'type': 'Text', 'props': { 'width': 0x12c, 'var': 'lab_msg', 'valign': 'middle', 'text': 'text', 'height': 0x32, 'fontSize': 0x18, 'color': '#ffffff', 'align': 'center' } }] }] }, thi0;
    }(laya['ui']['View']);tqh0mf['ToastUI'] = sdexwn;
  })(xdwjs = njxwd['demoui'] || (njxwd['demoui'] = {}));
}(fimbuv || (fimbuv = {}));var fr78$ = function () {
  function v1ib() {}return v1ib['init'] = function () {
    !this['ui'] && (this['ui'] = new fimbuv['demoui']['ToastUI'](), this['ui']['visible'] = ![], Laya['stage']['addChild'](this['ui']));
  }, v1ib['msg'] = function (_k5q2) {
    var hm0tq = this;!this['ui'] && v1ib['init'](), this['ui']['visible'] = !![], this['ui']['lab_msg']['text'] = _k5q2, clearTimeout(this['interval']), this['interval'] = setTimeout(function () {
      hm0tq['ui']['visible'] = ![];
    }, 0x7d0);
  }, v1ib;
}();window['minitool'] = frz837;