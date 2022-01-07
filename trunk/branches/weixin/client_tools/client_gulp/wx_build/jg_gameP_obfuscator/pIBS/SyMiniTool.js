var E = wx.$p;
var p_k4hspj = this && this['__extends'] || function () {
  var cgda = function ($jyk6, agcqb) {
    return cgda = Object['setPrototypeOf'] || { '__proto__': [] } instanceof Array && function (vi61y, zr0372) {
      vi61y['__proto__'] = zr0372;
    } || function (v61y, kyjhi) {
      for (var h$kiy in kyjhi) if (kyjhi['hasOwnProperty'](h$kiy)) v61y[h$kiy] = kyjhi[h$kiy];
    }, cgda($jyk6, agcqb);
  };return function (r671v, vr7z2) {
    cgda(r671v, vr7z2);function v$716y() {
      this['constructor'] = r671v;
    }r671v['prototype'] = vr7z2 === null ? Object['create'](vr7z2) : (v$716y['prototype'] = vr7z2['prototype'], new v$716y());
  };
}(),
    p_i$hkj = window['Sygame'],
    p_rv7$ = ![],
    p_gcdbq = function () {
  function r6v7$1() {}return r6v7$1['init'] = function () {
    p_rv7$ ? this['sygame'] = { 'channel': '3477d2273abd484ba2a0e04ad4971b3c', 'role_id': undefined, 'openid': 'oxmOf5biumkGash-Xht9FVAlswVk', 'appid': 'wx2936121c4817bf46' } : this['sygame'] = p_i$hkj;
  }, r6v7$1['getTimeStamp'] = function () {
    return new Date()['getTime']();
  }, r6v7$1['setResMap'] = function (n3w9, y$61v7) {
    this['resMap'][n3w9] = n3w9 + '?' + y$61v7;
  }, r6v7$1['getResMap'] = function (khspl4) {
    return this['resMap'][khspl4];
  }, r6v7$1['resMap'] = {}, r6v7$1;
}(),
    p_gbcq = function () {
  function enq985() {
    this['getIcon'] = 'https://wx.11babay.cn/uploads/f/fkccc1532944783/5/2/c/7/60dc442c4fbc5.png', this['copyIcon'] = 'https://wx.11babay.cn/uploads/f/fkccc1532944783/3/0/1/7/60dc4409dce39.png', p_gcdbq['init'](), this['getBoxCheckoutCode']();
  }return enq985['prototype']['send'] = function (ba9qe8, foumx_, luf_xt, shlpt4, lths) {
    shlpt4 === void 0x0 && (shlpt4 = 'get');lths === void 0x0 && (lths = '' || null);var fxutl_ = new Laya['HttpRequest']();fxutl_['http']['timeout'] = 0x2710, fxutl_['once'](Laya['Event']['COMPLETE'], this, foumx_), fxutl_['once'](Laya['Event']['ERROR'], this, luf_xt), fxutl_['send'](ba9qe8, lths, shlpt4, 'text');
  }, enq985['prototype']['postSidebarApi'] = function () {
    var fox_ = p_gcdbq['sygame']['openid'],
        bqacg8 = '&channel=' + p_gcdbq['sygame']['channel'] + '&wecha_id=' + fox_;this['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=sidebarApi' + bqacg8, this['completeHandler'], this['errorHandler']);
  }, enq985['prototype']['getBoxCheckoutCode'] = function () {
    var cgqdb = Sygame['SY_CONF']['commitId'];this['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=getBoxCheckoutCode', this['getBoxCheckoutCodeRes'], this['errorHandler'], 'post', { 'commitId': cgqdb });
  }, enq985['prototype']['getBoxCheckoutCodeRes'] = function (h4jik) {
    var gqab98 = JSON['parse'](h4jik);console['log']('getBoxCheckoutCode:', gqab98);if (gqab98['status'] == 0x3e9) {
      var hpk = gqab98['info'];hpk == 0xfa1 ? this['postSidebarApi']() : console['error']('盛也盒子\x20不显示' + gqab98);
    } else console['error']('盛也盒子 getBoxCheckoutCodeRes 其他错误' + gqab98);
  }, enq985['prototype']['completeHandler'] = function (znw05) {
    var i$ykj = JSON['parse'](znw05);console['log'](i$ykj);switch (i$ykj['status']) {case 0x3e9:
        var new89 = [];i$ykj['msg']['basics_image_url'] && new89['push']({ 'url': i$ykj['msg']['basics_image_url'], 'type': Laya['Loader']['IMAGE'] }), i$ykj['msg']['public_code'] && new89['push']({ 'url': i$ykj['msg']['public_code'], 'type': Laya['Loader']['IMAGE'] }), i$ykj['msg']['vip_customer_service'] && new89['push']({ 'url': i$ykj['msg']['vip_customer_service'], 'type': Laya['Loader']['IMAGE'] }), i$ykj['msg']['vip_customer_service_not_add'] && new89['push']({ 'url': i$ykj['msg']['vip_customer_service_not_add'], 'type': Laya['Loader']['IMAGE'] }), i$ykj['msg']['game_center_image_url'] && new89['push']({ 'url': i$ykj['msg']['game_center_image_url'], 'type': Laya['Loader']['IMAGE'] }), i$ykj['msg']['vip_qrcode'] && new89['push']({ 'url': i$ykj['msg']['vip_qrcode'], 'type': Laya['Loader']['IMAGE'] }), i$ykj['msg']['getIcon'] && new89['push']({ 'url': this['getIcon'], 'type': Laya['Loader']['IMAGE'] }), i$ykj['msg']['copyIcon'] && new89['push']({ 'url': this['copyIcon'], 'type': Laya['Loader']['IMAGE'] });for (var w0 = 0x0, zw53e = i$ykj['msg']['follow_gift_list']; w0 < zw53e['length']; w0++) {
          var q8bcga = zw53e[w0];new89['push']({ 'url': q8bcga['url'], 'type': Laya['Loader']['IMAGE'] });
        }for (var $kj6i = 0x0, hyski = i$ykj['msg']['vip_box_list']; $kj6i < hyski['length']; $kj6i++) {
          var q8bcga = hyski[$kj6i];new89['push']({ 'url': q8bcga['url'], 'type': Laya['Loader']['IMAGE'] });
        }for (var k$jyih = 0x0; k$jyih < new89['length']; k$jyih++) {
          p_gcdbq['setResMap'](new89[k$jyih]['url'], p_gcdbq['getTimeStamp']()), new89[k$jyih]['url'] = p_gcdbq['getResMap'](new89[k$jyih]['url']);
        }Laya['loader']['load'](new89, Laya['Handler']['create'](this, this['initGame'])), this['data'] = i$ykj['msg'];break;case 0x3ea:
        p_yiv6$['msg']('空的游戏channel');break;case 0x3eb:
        p_yiv6$['msg']('错误的游戏channel');break;case 0x3ec:
        p_yiv6$['msg']('未找到对应游戏大类');break;case 0x3ed:
        p_yiv6$['msg']('未设置侧边栏');break;}
  }, enq985['prototype']['errorHandler'] = function (h4skl) {}, enq985['prototype']['initGame'] = function () {
    var fxu_ = new p_r$76v(this);fxu_['show']();
  }, enq985;
}(),
    p_r$76v = function () {
  function e89nw5(qn8e95) {
    this['page'] = 0x3, this['rolePriceData'] = {}, this['boxlist'] = [], this['donwX'] = 0x0, this['downY'] = 0x0, this['tool'] = qn8e95;
  }return e89nw5['prototype']['setChildMouseThroughs'] = function (jh4) {
    var nb8qe = jh4['_childs'] || [];for (var pts4lh = 0x0; pts4lh < nb8qe['length']; pts4lh++) {
      nb8qe[pts4lh] && (nb8qe[pts4lh]['mouseThrough'] = !![]);
    }
  }, e89nw5['prototype']['show'] = function () {
    if (this['tool']['data']['on'] === '1') {
      this['main'] = new p_psj4k['demoui']['MainUI'](), Laya['stage']['addChild'](this['main']), this['main']['mouseThrough'] = !![];var v207rz = this['main']['_childs'] || [];for (var y1v6$ = 0x0; y1v6$ < v207rz['length']; y1v6$++) {
        v207rz[y1v6$]['mouseThrough'] = !![];
      }this['setChildMouseThroughs'](this['main']['_childs']), this['setChildMouseThroughs'](this['main']['_childs'][0x0]), this['initIcon'](), this['initEvent'](), this['initView'](), p_yiv6$['init'](), this['main']['bg']['x'] = -0x2ee;
    }
  }, e89nw5['prototype']['initView'] = function () {
    var tlfxpu = this,
        ben98q = this['tool']['data']['follow_down_words']['replace'](/\\n/g, '\x0a');this['main']['box_1_lab_info']['text'] = ben98q;for (var $jhy = 0x1; $jhy <= this['tool']['data']['follow_gift_list']['length']; $jhy++) {
      var lhpts = this['tool']['data']['follow_gift_list'][$jhy - 0x1];this['main']['box_1_img_' + $jhy]['skin'] = lhpts['url'], this['main']['box_1_lab_' + $jhy]['text'] = lhpts['name'];
    }for (var $jhy = 0x1; $jhy <= this['tool']['data']['vip_box_list']['length']; $jhy++) {
      var lhpts = this['tool']['data']['vip_box_list'][$jhy - 0x1];this['main']['box_2_img_' + $jhy]['skin'] = lhpts['url'], this['main']['box_2_lab_' + $jhy]['text'] = lhpts['name'];
    }this['main']['box_2_lab_m_1']['text'] = '方法一：单日充值' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_m_2']['text'] = '方法二：历史累计充值' + +this['tool']['data']['y'] + '元', this['main']['box_2_lab_v_1']['text'] = (this['rolePriceData']['todayPrice'] || 0x0) + '/' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_v_2']['text'] = (this['rolePriceData']['allPrice'] || 0x0) + '/' + +this['tool']['data']['y'] + '元', this['main']['box_2_btn_copy']['skin'] = this['tool']['copyIcon'], this['main']['box_2_btn_get']['skin'] = this['tool']['getIcon'], this['main']['box_2_btn_copy']['visible'] = ![], this['main']['box_2_btn_get']['on'](Laya['Event']['CLICK'], this, function () {
      if (tlfxpu['rolePriceData']['is_vip'] == 0x0) {
        p_yiv6$['msg']('请先获取vip资格');return;
      }tlfxpu['main']['box_2_lab_wx']['text'] = this['rolePriceData']['vip_wx'], tlfxpu['main']['box_2_btn_copy']['visible'] = !![];
    }), this['main']['box_2_btn_copy']['on'](Laya['Event']['CLICK'], this, function () {
      tlfxpu['copyText'](this['rolePriceData']['vip_wx']);
    }), this['main']['box_2_addclick']['on'](Laya['Event']['CLICK'], this, function () {
      if (tlfxpu['rolePriceData']['is_vip'] == 0x0) return;this['main']['box_help_qrcode']['skin'] = tlfxpu['rolePriceData']['vip_qrcode'], tlfxpu['main']['box_help']['visible'] = !![];
    }), this['main']['box_help_close']['on'](Laya['Event']['CLICK'], this, function () {
      tlfxpu['main']['box_help']['visible'] = ![];
    }), this['main']['box_help_bg']['skin'] = this['tool']['data']['vip_customer_service_not_add'], this['main']['box_help_qrcode']['skin'] = tlfxpu['rolePriceData']['vip_qrcode'], this['main']['box_help_qrcode']['scaleX'] = 0xa0 / this['main']['box_help_qrcode']['width'], this['main']['box_help_qrcode']['scaleY'] = 0xa0 / this['main']['box_help_qrcode']['width'], this['main']['box_3_panel']['vScrollBar']['visible'] = ![], this['main']['box_3_panel']['vScrollBarSkin'] = 'common_atlas/scrollBar.png';
  }, e89nw5['prototype']['initIcon'] = function () {
    this['icon'] = new Laya['Image'](), this['icon']['skin'] = this['tool']['data']['basics_image_url'], this['icon']['x'] = 0x0, this['icon']['y'] = 0xc8, this['icon']['width'] = 0x66, this['icon']['height'] = 0x6f, this['main']['addChild'](this['icon']), this['icon']['on'](Laya['Event']['MOUSE_DOWN'], this, this['iconPress']), this['icon']['on'](Laya['Event']['MOUSE_UP'], this, this['iconUp']), this['icon']['on'](Laya['Event']['MOUSE_WHEEL'], this, this['iconMove']), this['dragRect'] = new Laya['Rectangle'](-this['icon']['width'] / 0x2, 0x0, Laya['stage']['width'], Laya['stage']['height'] - this['icon']['height'] / 0x2);
  }, e89nw5['prototype']['initEvent'] = function () {
    var lfutpx = this;this['main']['btn_1']['on'](Laya['Event']['CLICK'], this, function () {
      if (lfutpx['page'] == 0x1) return;lfutpx['page1']();
    }), this['main']['btn_2']['on'](Laya['Event']['CLICK'], this, function () {
      if (lfutpx['page'] == 0x2) return;lfutpx['page2']();
    }), this['main']['btn_3']['on'](Laya['Event']['CLICK'], this, function () {
      if (lfutpx['page'] == 0x3) return;lfutpx['page3']();
    }), this['main']['btn_close']['on'](Laya['Event']['CLICK'], this, function () {
      lfutpx['main']['bg']['x'] = -0x2ee, lfutpx['icon']['visible'] = !![];
    });
  }, e89nw5['prototype']['initBoard'] = function () {
    this['isInitBoard'] = !![], this['page1']();
  }, e89nw5['prototype']['showBoard'] = function () {
    this['main']['bg']['x'] = 0x0, this['icon']['visible'] = ![];var abdq = _p$3['selectedServer']['server_id'],
        y$671 = _p$3['selectedServer']['server_name'],
        hikjys = _p$3['roleId'],
        p4xls = _p$3['roleName'],
        dgaqcb = p_gcdbq['sygame']['openid'],
        z50w2 = '&role_id=' + p_gcdbq['sygame']['role_id'] + '&channel=' + p_gcdbq['sygame']['channel'] + '&server_id=' + abdq + '&server_name=' + y$671 + '&wecha_id=' + dgaqcb + '&role_id=' + hikjys + '&role_name=' + p4xls;this['tool']['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=sidebarApiRoleId' + z50w2, this['rolePriceHandler']['bind'](this), this['roleError']['bind'](this));
  }, e89nw5['prototype']['page1'] = function () {
    this['page'] = 0x1;!e89nw5['prototype']['page1Bg'] && (e89nw5['prototype']['page1Bg'] = new Laya['Image'](this['tool']['data']['public_code']), this['main']['bg']['addChildAt'](e89nw5['prototype']['page1Bg'], 0x0));if (e89nw5['prototype']['page1Bg']) e89nw5['prototype']['page1Bg']['visible'] = !![];if (e89nw5['prototype']['page2Bg']) e89nw5['prototype']['page2Bg']['visible'] = ![];if (e89nw5['prototype']['page3Bg']) e89nw5['prototype']['page3Bg']['visible'] = ![];this['main']['box_1_show']['visible'] = !![], this['main']['box_2_show']['visible'] = ![], this['main']['box_3_show']['visible'] = ![];
  }, e89nw5['prototype']['page2'] = function () {
    this['page'] = 0x2;!e89nw5['prototype']['page2Bg'] && (e89nw5['prototype']['page2Bg'] = new Laya['Image'](this['tool']['data']['vip_customer_service']), this['main']['bg']['addChildAt'](e89nw5['prototype']['page2Bg'], 0x0));if (e89nw5['prototype']['page1Bg']) e89nw5['prototype']['page1Bg']['visible'] = ![];if (e89nw5['prototype']['page2Bg']) e89nw5['prototype']['page2Bg']['visible'] = !![];if (e89nw5['prototype']['page3Bg']) e89nw5['prototype']['page3Bg']['visible'] = ![];this['main']['box_1_show']['visible'] = ![], this['main']['box_2_show']['visible'] = !![], this['main']['box_3_show']['visible'] = ![];
  }, e89nw5['prototype']['page3'] = function () {
    this['page'] = 0x3;!e89nw5['prototype']['page3Bg'] && (e89nw5['prototype']['page3Bg'] = new Laya['Image'](this['tool']['data']['game_center_image_url']), this['main']['bg']['addChildAt'](e89nw5['prototype']['page3Bg'], 0x0));if (e89nw5['prototype']['page1Bg']) e89nw5['prototype']['page1Bg']['visible'] = ![];if (e89nw5['prototype']['page2Bg']) e89nw5['prototype']['page2Bg']['visible'] = ![];if (e89nw5['prototype']['page3Bg']) e89nw5['prototype']['page3Bg']['visible'] = !![];e89nw5['prototype']['page1Bg']['visible'] = ![], this['main']['bg']['skin'] = this['tool']['data']['game_center_image_url'], this['main']['box_1_show']['visible'] = ![], this['main']['box_2_show']['visible'] = ![], this['main']['box_3_show']['visible'] = !![], this['sendBox'] || this['getBoxList'](0x0), this['sendBox'] = !![], p_i$hkj && p_i$hkj['syClickOpenBox']();
  }, e89nw5['prototype']['getBoxList'] = function (h$ykij) {
    var xl_ut = this;p_i$hkj && p_i$hkj['syGetBoxList']({ 'page': h$ykij, 'count': 0xc })['then'](function (cgbdq) {
      var iys = cgbdq['data'];iys['status'] == 0x3e9 ? iys['data'] && iys['data']['length'] && (xl_ut['boxlist'] = xl_ut['boxlist']['concat'](iys['data']), h$ykij++, xl_ut['getBoxList'](h$ykij)) : xl_ut['boxListHandler']();
    });
  }, e89nw5['prototype']['copyText'] = function (eq85n9) {
    try {
      wx['setClipboardData']({ 'data': eq85n9, 'success': function (w2rz0) {
          console['log']('复制成功:', w2rz0);
        } });
    } catch (xlt4u) {}
  }, e89nw5['prototype']['rolePriceHandler'] = function (bgcdqa) {
    this['rolePriceData'] = JSON['parse'](bgcdqa);switch (this['rolePriceData']['status']) {case 0x3e9:
        this['main']['box_2_lab_v_1']['text'] = (this['rolePriceData']['todayPrice'] || 0x0) + '/' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_v_2']['text'] = (this['rolePriceData']['allPrice'] || 0x0) + '/' + +this['tool']['data']['y'] + '元';break;case 0x3ea:
        break;case 0x3eb:
        break;}
  }, e89nw5['prototype']['roleError'] = function () {}, e89nw5['prototype']['boxListHandler'] = function () {
    var ltp4sx = function (h4kjis) {
      var vzr7 = zn0w53['boxlist'][h4kjis],
          lptu4 = new p_psj4k['demoui']['BoxItemUI']();lptu4['icon']['skin'] = vzr7['icon'], lptu4['title']['text'] = vzr7['title'], lptu4['x'] = 0xa0 * (h4kjis % 0x3), lptu4['y'] = 0xa0 * (h4kjis / 0x3 ^ 0x0), zn0w53['main']['box_3_panel']['addChild'](lptu4);var lk = { 'appid': p_gcdbq['sygame']['appid'], 'game_id': vzr7['game_id'], 'jump_appid': vzr7['jump_appid'], 'jump_path': vzr7['jump_path'], 'tunnel_id': vzr7['tunnel_id'], 'uv': 0x0, 'wecha_id': p_gcdbq['sygame']['openid'] },
          ab89eq = vzr7['preview_img'],
          a8bc = vzr7['jump_type'],
          i$kh = vzr7['kf_session'];lptu4['on'](Laya['Event']['CLICK'], zn0w53, function () {
        p_i$hkj && p_i$hkj['syClickBox']({ 'game_id': vzr7['game_id'], 'tunnel_id': vzr7['tunnel_id'], 'jump_appid': vzr7['jump_appid'], 'jump_path': vzr7['jump_path'] })['then'](function (w30nz) {
          if (a8bc === '0') wx['navigateToMiniProgram']({ 'appId': lk['jump_appid'], 'path': lk['jump_path'], 'fail': function ($yhi) {
              if (!ab89eq) return;wx['previewImage']({ 'urls': [ab89eq] });
            } });else {
            if (a8bc === '1') {
              if (!ab89eq) return;wx['previewImage']({ 'urls': [ab89eq] });
            } else {
              if (a8bc === '2') {
                if (!i$kh) return;wx['openCustomerServiceConversation']({ 'sessionFrom': i$kh, 'showMessageCard': !![], 'sendMessageTitle': '', 'sendMessagePath': '', 'sendMessageImg': '' });
              }
            }
          }
        });
      });
    },
        zn0w53 = this;for (var $1vy67 = 0x0; $1vy67 < this['boxlist']['length']; $1vy67++) {
      ltp4sx($1vy67);
    }
  }, e89nw5['prototype']['boxListError'] = function () {}, e89nw5['prototype']['boxClickHandler'] = function () {}, e89nw5['prototype']['iconPress'] = function ($v7y16) {
    this['donwX'] = $v7y16['target']['x'], this['donwY'] = $v7y16['target']['y'], this['icon']['startDrag'](this['dragRect']), this['isMove'] = ![], this['isPress'] = !![];
  }, e89nw5['prototype']['iconMove'] = function (px4t) {
    this['isMove'] = !![];
  }, e89nw5['prototype']['iconUp'] = function (sphtl) {
    var iy61$v = sphtl['target']['x'],
        x4t = sphtl['target']['y'];this['icon']['stopDrag'](), iy61$v == this['donwX'] && this['donwY'] == x4t && (this['isInitBoard'] || this['initBoard'](), this['showBoard']()), this['isMove'] = ![], this['isPress'] = ![];
  }, e89nw5;
}(),
    p_psj4k;(function (l4stpx) {
  var wz2r03;(function (ykji$) {
    var utxl = function (r30z2) {
      p_k4hspj(jkshp, r30z2);function jkshp() {
        return r30z2['call'](this) || this;
      }return jkshp['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), r30z2['prototype']['createChildren']['call'](this), this['createView'](l4stpx['demoui']['BoxItemUI']['uiView']);
      }, jkshp['uiView'] = { 'type': 'View', 'props': { 'width': 0xb4, 'height': 0xa0 }, 'child': [{ 'type': 'Image', 'props': { 'y': 0x3, 'x': 0x20, 'width': 0x73, 'var': 'icon', 'height': 0x73 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x79, 'x': -0x21, 'width': 0xb4, 'var': 'title', 'valign': 'middle', 'height': 0x22, 'fontSize': 0x16, 'color': '#441d1c', 'align': 'center' } }] }] }, jkshp;
    }(laya['ui']['View']);ykji$['BoxItemUI'] = utxl;
  })(wz2r03 = l4stpx['demoui'] || (l4stpx['demoui'] = {}));
})(p_psj4k || (p_psj4k = {})), function (l4upx) {
  var e8nw;(function (gqdbac) {
    var sh4jp = function (uf_xl) {
      p_k4hspj(b9e8qn, uf_xl);function b9e8qn() {
        return uf_xl['call'](this) || this;
      }return b9e8qn['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), uf_xl['prototype']['createChildren']['call'](this), this['createView'](l4upx['demoui']['MainUI']['uiView']);
      }, b9e8qn['uiView'] = { 'type': 'View', 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x2ee, 'top': 0x0, 'right': 0x0, 'left': 0x0, 'height': 0x536, 'bottom': 0x0 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x2ee, 'height': 0x536, 'centerY': 0x0 }, 'child': [{ 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x2ee, 'var': 'bg', 'height': 0x536 }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x2ee, 'visible': ![], 'var': 'box_1_show', 'height': 0x536, 'centerY': 0x0 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x253, 'x': 0x2e, 'width': 0x1d0, 'var': 'box_1_lab_info', 'leading': 0xa, 'height': 0x97, 'fontSize': 0x18, 'color': '#a959ee' } }, { 'type': 'HBox', 'props': { 'y': 0x2ee, 'x': 0x14, 'width': 0x1fe, 'space': 0x35, 'height': 0x78, 'align': 'top' }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x58, 'var': 'box_1_img_1', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_1', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0xa, 'x': 0xa, 'width': 0x58, 'var': 'box_1_img_2', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_2', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x14, 'x': 0x14, 'width': 0x58, 'var': 'box_1_img_3', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_3', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x1e, 'x': 0x1e, 'width': 0x58, 'var': 'box_1_img_4', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_4', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }] }] }, { 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'visible': ![], 'var': 'box_2_show' }, 'child': [{ 'type': 'HBox', 'props': { 'y': 0x220, 'x': 0x18, 'width': 0x1f4, 'space': 0x2c, 'height': 0x56, 'align': 'top' }, 'child': [{ 'type': 'Image', 'props': { 'y': 2.5, 'x': 0x0, 'width': 0x58, 'var': 'box_2_img_1', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_1', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0xc, 'x': 0xa, 'width': 0x58, 'var': 'box_2_img_2', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_2', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x16, 'x': 0x14, 'width': 0x58, 'var': 'box_2_img_3', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_3', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x20, 'x': 0x1e, 'width': 0x58, 'var': 'box_2_img_4', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_4', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x2a, 'x': 0x28, 'width': 0x58, 'var': 'box_2_img_5', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_5', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }] }, { 'type': 'Box', 'props': { 'y': 0x384, 'x': 0x0, 'width': 0x221, 'height': 0x44 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x0, 'x': 0x28, 'width': 0x122, 'var': 'box_2_lab_m_1', 'text': '方法一\uFF1A单日充值1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300' } }, { 'type': 'Text', 'props': { 'y': 0x1e, 'x': 0x28, 'width': 0x122, 'var': 'box_2_lab_m_2', 'text': '方法一\uFF1A历史累计充值1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300' } }, { 'type': 'Text', 'props': { 'y': 0x0, 'x': 0x141, 'width': 0xa4, 'var': 'box_2_lab_v_1', 'text': '1000/1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300', 'align': 'right' } }, { 'type': 'Text', 'props': { 'y': 0x1e, 'x': 0x141, 'width': 0xa4, 'var': 'box_2_lab_v_2', 'text': '1000/1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300', 'align': 'right' } }] }, { 'type': 'Image', 'props': { 'y': 0x1aa, 'x': 0x159, 'width': 0x66, 'var': 'box_2_btn_get', 'stateNum': 0x1, 'height': 0x26 } }, { 'type': 'Image', 'props': { 'y': 0x1aa, 'x': 0x159, 'width': 0x66, 'var': 'box_2_btn_copy', 'stateNum': 0x1, 'height': 0x26 } }, { 'type': 'Button', 'props': { 'y': 0x1d2, 'x': 0x126, 'width': 0xc9, 'var': 'box_2_addclick', 'stateNum': 0x1, 'height': 0x1b } }, { 'type': 'Text', 'props': { 'y': 0x13c, 'x': 0x17a, 'width': 0xa3, 'var': 'box_2_lab_wx', 'height': 0x1f, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'left' } }] }, { 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'visible': ![], 'var': 'box_3_show' }, 'child': [{ 'type': 'Panel', 'props': { 'y': 0xf5, 'x': 0x10, 'width': 0x201, 'var': 'box_3_panel', 'vScrollBarSkin': '', 'height': 0x29e } }] }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0x0, 'width': 0xbb, 'var': 'btn_1', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0xba, 'width': 0xbb, 'var': 'btn_2', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0x177, 'width': 0xbb, 'var': 'btn_3', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x203, 'x': 0x22e, 'width': 0x25, 'var': 'btn_close', 'height': 0x8f } }, { 'type': 'Box', 'props': { 'width': 0x2ee, 'visible': ![], 'var': 'box_help', 'height': 0x536 }, 'child': [{ 'type': 'Sprite', 'props': { 'y': 0x0, 'x': 0x0, 'mouseThrough': ![], 'alpha': 0.7 }, 'child': [{ 'type': 'Rect', 'props': { 'width': 0x2ee, 'lineWidth': 0x1, 'height': 0x536, 'fillColor': '#000000' } }] }, { 'type': 'Image', 'props': { 'y': 0x158, 'x': 0x28, 'width': 0x1d2, 'var': 'box_help_bg', 'height': 0x203 }, 'child': [{ 'type': 'Button', 'props': { 'y': -0x1, 'x': 0x1a0, 'width': 0x33, 'var': 'box_help_close', 'height': 0x28 } }, { 'type': 'Image', 'props': { 'y': 0x3f, 'x': 0x98, 'width': 0xa0, 'var': 'box_help_qrcode', 'height': 0xa0 } }] }] }] }] }] }, b9e8qn;
    }(laya['ui']['View']);gqdbac['MainUI'] = sh4jp;
  })(e8nw = l4upx['demoui'] || (l4upx['demoui'] = {}));
}(p_psj4k || (p_psj4k = {})), function (y61$j) {
  var wn85e;(function (kh4l) {
    var $71r6v = function (qcbda) {
      p_k4hspj(b9eqn8, qcbda);function b9eqn8() {
        return qcbda['call'](this) || this;
      }return b9eqn8['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), qcbda['prototype']['createChildren']['call'](this), this['createView'](y61$j['demoui']['ToastUI']['uiView']);
      }, b9eqn8['uiView'] = { 'type': 'View', 'props': { 'width': 0x2ee, 'height': 0x536 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x12c, 'height': 0x32, 'centerY': 0x0, 'centerX': 0x0 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x12c, 'height': 0x32, 'centerX': 0x0, 'alpha': 0.5 }, 'child': [{ 'type': 'Rect', 'props': { 'width': 0x12c, 'lineWidth': 0x1, 'height': 0x32, 'fillColor': '#382f2f' } }] }, { 'type': 'Text', 'props': { 'width': 0x12c, 'var': 'lab_msg', 'valign': 'middle', 'text': 'text', 'height': 0x32, 'fontSize': 0x18, 'color': '#ffffff', 'align': 'center' } }] }] }, b9eqn8;
    }(laya['ui']['View']);kh4l['ToastUI'] = $71r6v;
  })(wn85e = y61$j['demoui'] || (y61$j['demoui'] = {}));
}(p_psj4k || (p_psj4k = {}));var p_yiv6$ = function () {
  function z5nw() {}return z5nw['init'] = function () {
    !this['ui'] && (this['ui'] = new p_psj4k['demoui']['ToastUI'](), this['ui']['visible'] = ![], Laya['stage']['addChild'](this['ui']));
  }, z5nw['msg'] = function (w58n9e) {
    var upfxlt = this;!this['ui'] && z5nw['init'](), this['ui']['visible'] = !![], this['ui']['lab_msg']['text'] = w58n9e, clearTimeout(this['interval']), this['interval'] = setTimeout(function () {
      upfxlt['ui']['visible'] = ![];
    }, 0x7d0);
  }, z5nw;
}();window['minitool'] = p_gbcq;