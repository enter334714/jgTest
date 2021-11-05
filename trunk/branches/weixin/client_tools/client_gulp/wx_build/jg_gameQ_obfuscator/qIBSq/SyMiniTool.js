var g = wx.$Q;
var q_sh418 = this && this['__extends'] || function () {
  var pflx = function (glp0, algiv) {
    return pflx = Object['setPrototypeOf'] || { '__proto__': [] } instanceof Array && function (_rc, plaf2) {
      _rc['__proto__'] = plaf2;
    } || function (_$noe, flpg0) {
      for (var biv in flpg0) if (flpg0['hasOwnProperty'](biv)) _$noe[biv] = flpg0[biv];
    }, pflx(glp0, algiv);
  };return function (t$zd, vgi7ba) {
    pflx(t$zd, vgi7ba);function uh8s() {
      this['constructor'] = t$zd;
    }t$zd['prototype'] = vgi7ba === null ? Object['create'](vgi7ba) : (uh8s['prototype'] = vgi7ba['prototype'], new uh8s());
  };
}(),
    q_j8s1 = window['Sygame'],
    q_abgvi = ![],
    q_me = function () {
  function mn6oe() {}return mn6oe['init'] = function () {
    q_abgvi ? this['sygame'] = { 'channel': '3477d2273abd484ba2a0e04ad4971b3c', 'role_id': undefined, 'openid': 'oxmOf5biumkGash-Xht9FVAlswVk', 'appid': 'wx2936121c4817bf46' } : this['sygame'] = q_j8s1;
  }, mn6oe['getTimeStamp'] = function () {
    return new Date()['getTime']();
  }, mn6oe['setResMap'] = function (gvblai, $o9n) {
    this['resMap'][gvblai] = gvblai + '?' + $o9n;
  }, mn6oe['getResMap'] = function (whjsu) {
    return this['resMap'][whjsu];
  }, mn6oe['resMap'] = {}, mn6oe;
}(),
    q_no41m6 = function () {
  function d_r$ez() {
    this['getIcon'] = 'https://wx.11babay.cn/uploads/f/fkccc1532944783/5/2/c/7/60dc442c4fbc5.png', this['copyIcon'] = 'https://wx.11babay.cn/uploads/f/fkccc1532944783/3/0/1/7/60dc4409dce39.png', q_me['init'](), this['postSidebarApi']();
  }return d_r$ez['prototype']['send'] = function (hm1486, ytck5d, x530y, mo6n41, $oe9z) {
    mo6n41 === void 0x0 && (mo6n41 = 'get');$oe9z === void 0x0 && ($oe9z = '' || null);var f30xp2 = new Laya['HttpRequest']();f30xp2['http']['timeout'] = 0x2710, f30xp2['once'](Laya['Event']['COMPLETE'], this, ytck5d), f30xp2['once'](Laya['Event']['ERROR'], this, x530y), f30xp2['send'](hm1486, $oe9z, mo6n41, 'text');
  }, d_r$ez['prototype']['postSidebarApi'] = function () {
    this['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=sidebarApi&channel=' + q_me['sygame']['channel'], this['completeHandler'], this['errorHandler']);
  }, d_r$ez['prototype']['completeHandler'] = function (rdcy) {
    var no46 = JSON['parse'](rdcy);console['log'](no46);switch (no46['status']) {case 0x3e9:
        var h1j84s = [];no46['msg']['basics_image_url'] && h1j84s['push']({ 'url': no46['msg']['basics_image_url'], 'type': Laya['Loader']['IMAGE'] }), no46['msg']['public_code'] && h1j84s['push']({ 'url': no46['msg']['public_code'], 'type': Laya['Loader']['IMAGE'] }), no46['msg']['vip_customer_service'] && h1j84s['push']({ 'url': no46['msg']['vip_customer_service'], 'type': Laya['Loader']['IMAGE'] }), no46['msg']['vip_customer_service_not_add'] && h1j84s['push']({ 'url': no46['msg']['vip_customer_service_not_add'], 'type': Laya['Loader']['IMAGE'] }), no46['msg']['game_center_image_url'] && h1j84s['push']({ 'url': no46['msg']['game_center_image_url'], 'type': Laya['Loader']['IMAGE'] }), no46['msg']['vip_qrcode'] && h1j84s['push']({ 'url': no46['msg']['vip_qrcode'], 'type': Laya['Loader']['IMAGE'] }), no46['msg']['getIcon'] && h1j84s['push']({ 'url': this['getIcon'], 'type': Laya['Loader']['IMAGE'] }), no46['msg']['copyIcon'] && h1j84s['push']({ 'url': this['copyIcon'], 'type': Laya['Loader']['IMAGE'] });for (var h6 = 0x0, i7v = no46['msg']['follow_gift_list']; h6 < i7v['length']; h6++) {
          var m8jh41 = i7v[h6];h1j84s['push']({ 'url': m8jh41['url'], 'type': Laya['Loader']['IMAGE'] });
        }for (var aligb = 0x0, x53y0 = no46['msg']['vip_box_list']; aligb < x53y0['length']; aligb++) {
          var m8jh41 = x53y0[aligb];h1j84s['push']({ 'url': m8jh41['url'], 'type': Laya['Loader']['IMAGE'] });
        }for (var yk5t = 0x0; yk5t < h1j84s['length']; yk5t++) {
          q_me['setResMap'](h1j84s[yk5t]['url'], q_me['getTimeStamp']()), h1j84s[yk5t]['url'] = q_me['getResMap'](h1j84s[yk5t]['url']);
        }Laya['loader']['load'](h1j84s, Laya['Handler']['create'](this, this['initGame'])), this['data'] = no46['msg'];break;case 0x3ea:
        q_x0532f['msg']('空的游戏channel');break;case 0x3eb:
        q_x0532f['msg']('错误的游戏channel');break;case 0x3ec:
        q_x0532f['msg']('未找到对应游戏大类');break;case 0x3ed:
        q_x0532f['msg']('未设置侧边栏');break;}
  }, d_r$ez['prototype']['errorHandler'] = function (kdt5cy) {}, d_r$ez['prototype']['initGame'] = function () {
    var jh8w1 = new q_d$e_rz(this);jh8w1['show']();
  }, d_r$ez;
}(),
    q_d$e_rz = function () {
  function vab7g(em9n) {
    this['page'] = 0x3, this['rolePriceData'] = {}, this['boxlist'] = [], this['donwX'] = 0x0, this['downY'] = 0x0, this['tool'] = em9n;
  }return vab7g['prototype']['setChildMouseThroughs'] = function (tr$d) {
    var al20fp = tr$d['_childs'] || [];for (var c$d_rz = 0x0; c$d_rz < al20fp['length']; c$d_rz++) {
      al20fp[c$d_rz] && (al20fp[c$d_rz]['mouseThrough'] = !![]);
    }
  }, vab7g['prototype']['show'] = function () {
    if (this['tool']['data']['on'] === '1') {
      this['main'] = new q__zd$r['demoui']['MainUI'](), Laya['stage']['addChild'](this['main']), this['main']['mouseThrough'] = !![];var cdktr = this['main']['_childs'] || [];for (var ctrz$ = 0x0; ctrz$ < cdktr['length']; ctrz$++) {
        cdktr[ctrz$]['mouseThrough'] = !![];
      }this['setChildMouseThroughs'](this['main']['_childs']), this['setChildMouseThroughs'](this['main']['_childs'][0x0]), this['initIcon'](), this['initEvent'](), this['initView'](), q_x0532f['init']();
    }
  }, vab7g['prototype']['initView'] = function () {
    var hswj = this,
        x023 = this['tool']['data']['follow_down_words']['replace'](/\\n/g, '\x0a');this['main']['box_1_lab_info']['text'] = x023;for (var er = 0x1; er <= this['tool']['data']['follow_gift_list']['length']; er++) {
      var hsj18w = this['tool']['data']['follow_gift_list'][er - 0x1];this['main']['box_1_img_' + er]['skin'] = hsj18w['url'], this['main']['box_1_lab_' + er]['text'] = hsj18w['name'];
    }for (var er = 0x1; er <= this['tool']['data']['vip_box_list']['length']; er++) {
      var hsj18w = this['tool']['data']['vip_box_list'][er - 0x1];this['main']['box_2_img_' + er]['skin'] = hsj18w['url'], this['main']['box_2_lab_' + er]['text'] = hsj18w['name'];
    }this['main']['box_2_lab_m_1']['text'] = '方法一：单日充值' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_m_2']['text'] = '方法二：历史累计充值' + +this['tool']['data']['y'] + '元', this['main']['box_2_lab_v_1']['text'] = (this['rolePriceData']['todayPrice'] || 0x0) + '/' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_v_2']['text'] = (this['rolePriceData']['allPrice'] || 0x0) + '/' + +this['tool']['data']['y'] + '元', this['main']['box_2_btn_copy']['skin'] = this['tool']['copyIcon'], this['main']['box_2_btn_get']['skin'] = this['tool']['getIcon'], this['main']['box_2_btn_copy']['visible'] = ![], this['main']['box_2_btn_get']['on'](Laya['Event']['CLICK'], this, function () {
      if (hswj['rolePriceData']['is_vip'] == 0x0) {
        q_x0532f['msg']('请先获取vip资格');return;
      }hswj['main']['box_2_lab_wx']['text'] = hswj['tool']['data']['vip_wx'], hswj['main']['box_2_btn_copy']['visible'] = !![];
    }), this['main']['box_2_btn_copy']['on'](Laya['Event']['CLICK'], this, function () {
      hswj['copyText'](hswj['tool']['data']['vip_wx']);
    }), this['main']['box_2_addclick']['on'](Laya['Event']['CLICK'], this, function () {
      if (hswj['rolePriceData']['is_vip'] == 0x0) return;hswj['main']['box_help']['visible'] = !![];
    }), this['main']['box_help_close']['on'](Laya['Event']['CLICK'], this, function () {
      hswj['main']['box_help']['visible'] = ![];
    }), this['main']['box_help_bg']['skin'] = this['tool']['data']['vip_customer_service_not_add'], this['main']['box_help_qrcode']['skin'] = this['tool']['data']['vip_qrcode'], this['main']['box_help_qrcode']['scaleX'] = 0xa0 / this['main']['box_help_qrcode']['width'], this['main']['box_help_qrcode']['scaleY'] = 0xa0 / this['main']['box_help_qrcode']['width'], this['main']['box_3_panel']['vScrollBar']['visible'] = ![], this['main']['box_3_panel']['vScrollBarSkin'] = 'common_atlas/scrollBar.png';
  }, vab7g['prototype']['initIcon'] = function () {
    this['icon'] = new Laya['Image'](), this['icon']['skin'] = this['tool']['data']['basics_image_url'], this['icon']['x'] = 0x0, this['icon']['y'] = 0xc8, this['icon']['width'] = 0x66, this['icon']['height'] = 0x6f, this['main']['addChild'](this['icon']), this['icon']['on'](Laya['Event']['MOUSE_DOWN'], this, this['iconPress']), this['icon']['on'](Laya['Event']['MOUSE_UP'], this, this['iconUp']), this['icon']['on'](Laya['Event']['MOUSE_WHEEL'], this, this['iconMove']), this['dragRect'] = new Laya['Rectangle'](-this['icon']['width'] / 0x2, 0x0, Laya['stage']['width'], Laya['stage']['height'] - this['icon']['height'] / 0x2);
  }, vab7g['prototype']['initEvent'] = function () {
    var xl0p = this;this['main']['btn_1']['on'](Laya['Event']['CLICK'], this, function () {
      if (xl0p['page'] == 0x1) return;xl0p['page1']();
    }), this['main']['btn_2']['on'](Laya['Event']['CLICK'], this, function () {
      if (xl0p['page'] == 0x2) return;xl0p['page2']();
    }), this['main']['btn_3']['on'](Laya['Event']['CLICK'], this, function () {
      if (xl0p['page'] == 0x3) return;xl0p['page3']();
    }), this['main']['btn_close']['on'](Laya['Event']['CLICK'], this, function () {
      xl0p['main']['bg']['x'] = -0x2ee, xl0p['icon']['visible'] = !![];
    });
  }, vab7g['prototype']['initBoard'] = function () {
    this['isInitBoard'] = !![], this['page1']();
  }, vab7g['prototype']['showBoard'] = function () {
    this['main']['bg']['x'] = 0x0, this['icon']['visible'] = ![], this['tool']['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=sidebarApiRoleId&role_id=' + q_me['sygame']['role_id'] + '&channel=' + q_me['sygame']['channel'], this['rolePriceHandler']['bind'](this), this['roleError']['bind'](this));
  }, vab7g['prototype']['page1'] = function () {
    this['page'] = 0x1, this['main']['bg']['skin'] = this['tool']['data']['public_code'], this['main']['box_1_show']['visible'] = !![], this['main']['box_2_show']['visible'] = ![], this['main']['box_3_show']['visible'] = ![];
  }, vab7g['prototype']['page2'] = function () {
    this['page'] = 0x2, this['main']['bg']['skin'] = this['tool']['data']['vip_customer_service'], this['main']['box_1_show']['visible'] = ![], this['main']['box_2_show']['visible'] = !![], this['main']['box_3_show']['visible'] = ![];
  }, vab7g['prototype']['page3'] = function () {
    this['page'] = 0x3, this['main']['bg']['skin'] = this['tool']['data']['game_center_image_url'], this['main']['box_1_show']['visible'] = ![], this['main']['box_2_show']['visible'] = ![], this['main']['box_3_show']['visible'] = !![], this['sendBox'] || this['getBoxList'](0x0), this['sendBox'] = !![], q_j8s1 && q_j8s1['syClickOpenBox']();
  }, vab7g['prototype']['getBoxList'] = function (z$drct) {
    var z9$o_ = this;q_j8s1 && q_j8s1['syGetBoxList']({ 'page': z$drct, 'count': 0xc })['then'](function (vi7g) {
      var ez_$r9 = vi7g['data'];ez_$r9['status'] == 0x3e9 ? ez_$r9['data'] && ez_$r9['data']['length'] && (z9$o_['boxlist'] = z9$o_['boxlist']['concat'](ez_$r9['data']), z$drct++, z9$o_['getBoxList'](z$drct)) : z9$o_['boxListHandler']();
    });
  }, vab7g['prototype']['copyText'] = function (ztcd) {
    try {
      wx['setClipboardData']({ 'data': ztcd, 'success': function (wj1s) {
          console['log']('复制成功:', wj1s);
        } });
    } catch (_czdr) {}
  }, vab7g['prototype']['rolePriceHandler'] = function (usw8jq) {
    this['rolePriceData'] = JSON['parse'](usw8jq);switch (this['rolePriceData']['status']) {case 0x3e9:
        this['main']['box_2_lab_v_1']['text'] = (this['rolePriceData']['todayPrice'] || 0x0) + '/' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_v_2']['text'] = (this['rolePriceData']['allPrice'] || 0x0) + '/' + +this['tool']['data']['y'] + '元';break;case 0x3ea:
        break;case 0x3eb:
        break;}
  }, vab7g['prototype']['roleError'] = function () {}, vab7g['prototype']['boxListHandler'] = function () {
    var kcy35t = function (j1hs84) {
      var xf2p = ap20lf['boxlist'][j1hs84],
          gpbali = new q__zd$r['demoui']['BoxItemUI']();gpbali['icon']['skin'] = xf2p['icon'], gpbali['title']['text'] = xf2p['title'], gpbali['x'] = 0xa0 * (j1hs84 % 0x3), gpbali['y'] = 0xa0 * (j1hs84 / 0x3 ^ 0x0), ap20lf['main']['box_3_panel']['addChild'](gpbali);var la02pf = { 'appid': q_me['sygame']['appid'], 'game_id': xf2p['game_id'], 'jump_appid': xf2p['jump_appid'], 'jump_path': xf2p['jump_path'], 'tunnel_id': xf2p['tunnel_id'], 'uv': 0x0, 'wecha_id': q_me['sygame']['openid'] },
          oez = xf2p['preview_img'],
          rtcz = xf2p['jump_type'],
          blivag = xf2p['kf_session'];gpbali['on'](Laya['Event']['CLICK'], ap20lf, function () {
        q_j8s1 && q_j8s1['syClickBox']({ 'game_id': xf2p['game_id'], 'tunnel_id': xf2p['tunnel_id'], 'jump_appid': xf2p['jump_appid'], 'jump_path': xf2p['jump_path'] })['then'](function (fgalp0) {
          if (rtcz === '0') wx['navigateToMiniProgram']({ 'appId': la02pf['jump_appid'], 'path': la02pf['jump_path'], 'fail': function (shuwj) {
              if (!oez) return;wx['previewImage']({ 'urls': [oez] });
            } });else {
            if (rtcz === '1') {
              if (!oez) return;wx['previewImage']({ 'urls': [oez] });
            } else {
              if (rtcz === '2') {
                if (!blivag) return;wx['openCustomerServiceConversation']({ 'sessionFrom': blivag, 'showMessageCard': !![], 'sendMessageTitle': '', 'sendMessagePath': '', 'sendMessageImg': '' });
              }
            }
          }
        });
      });
    },
        ap20lf = this;for (var x53kty = 0x0; x53kty < this['boxlist']['length']; x53kty++) {
      kcy35t(x53kty);
    }
  }, vab7g['prototype']['boxListError'] = function () {}, vab7g['prototype']['boxClickHandler'] = function () {}, vab7g['prototype']['iconPress'] = function (xf305) {
    this['donwX'] = xf305['target']['x'], this['donwY'] = xf305['target']['y'], this['icon']['startDrag'](this['dragRect']), this['isMove'] = ![], this['isPress'] = !![];
  }, vab7g['prototype']['iconMove'] = function (x2k3) {
    this['isMove'] = !![];
  }, vab7g['prototype']['iconUp'] = function (w81hj) {
    var l0pxf2 = w81hj['target']['x'],
        hw1j8 = w81hj['target']['y'];this['icon']['stopDrag'](), l0pxf2 == this['donwX'] && this['donwY'] == hw1j8 && (this['isInitBoard'] || this['initBoard'](), this['showBoard']()), this['isMove'] = ![], this['isPress'] = ![];
  }, vab7g;
}(),
    q__zd$r;(function (albv) {
  var $o_ne9;(function (iablvg) {
    var fp2l = function (gpali) {
      q_sh418(nom, gpali);function nom() {
        return gpali['call'](this) || this;
      }return nom['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), gpali['prototype']['createChildren']['call'](this), this['createView'](albv['demoui']['BoxItemUI']['uiView']);
      }, nom['uiView'] = { 'type': 'View', 'props': { 'width': 0xb4, 'height': 0xa0 }, 'child': [{ 'type': 'Image', 'props': { 'y': 0x3, 'x': 0x20, 'width': 0x73, 'var': 'icon', 'height': 0x73 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x79, 'x': -0x21, 'width': 0xb4, 'var': 'title', 'valign': 'middle', 'height': 0x22, 'fontSize': 0x16, 'color': '#441d1c', 'align': 'center' } }] }] }, nom;
    }(laya['ui']['View']);iablvg['BoxItemUI'] = fp2l;
  })($o_ne9 = albv['demoui'] || (albv['demoui'] = {}));
})(q__zd$r || (q__zd$r = {})), function (hn46m1) {
  var ktzcdr;(function (n1hm) {
    var r$zc_ = function (_dr$c) {
      q_sh418(lfbpga, _dr$c);function lfbpga() {
        return _dr$c['call'](this) || this;
      }return lfbpga['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), _dr$c['prototype']['createChildren']['call'](this), this['createView'](hn46m1['demoui']['MainUI']['uiView']);
      }, lfbpga['uiView'] = { 'type': 'View', 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x2ee, 'top': 0x0, 'right': 0x0, 'left': 0x0, 'height': 0x536, 'bottom': 0x0 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x2ee, 'height': 0x536, 'centerY': 0x0 }, 'child': [{ 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x2ee, 'var': 'bg', 'height': 0x536 }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x2ee, 'visible': ![], 'var': 'box_1_show', 'height': 0x536, 'centerY': 0x0 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x253, 'x': 0x2e, 'width': 0x1d0, 'var': 'box_1_lab_info', 'leading': 0xa, 'height': 0x97, 'fontSize': 0x18, 'color': '#a959ee' } }, { 'type': 'HBox', 'props': { 'y': 0x2ee, 'x': 0x14, 'width': 0x1fe, 'space': 0x35, 'height': 0x78, 'align': 'top' }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x58, 'var': 'box_1_img_1', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_1', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0xa, 'x': 0xa, 'width': 0x58, 'var': 'box_1_img_2', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_2', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x14, 'x': 0x14, 'width': 0x58, 'var': 'box_1_img_3', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_3', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x1e, 'x': 0x1e, 'width': 0x58, 'var': 'box_1_img_4', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_4', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }] }] }, { 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'visible': ![], 'var': 'box_2_show' }, 'child': [{ 'type': 'HBox', 'props': { 'y': 0x220, 'x': 0x18, 'width': 0x1f4, 'space': 0x2c, 'height': 0x56, 'align': 'top' }, 'child': [{ 'type': 'Image', 'props': { 'y': 2.5, 'x': 0x0, 'width': 0x58, 'var': 'box_2_img_1', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_1', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0xc, 'x': 0xa, 'width': 0x58, 'var': 'box_2_img_2', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_2', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x16, 'x': 0x14, 'width': 0x58, 'var': 'box_2_img_3', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_3', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x20, 'x': 0x1e, 'width': 0x58, 'var': 'box_2_img_4', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_4', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x2a, 'x': 0x28, 'width': 0x58, 'var': 'box_2_img_5', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_5', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }] }, { 'type': 'Box', 'props': { 'y': 0x384, 'x': 0x0, 'width': 0x221, 'height': 0x44 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x0, 'x': 0x28, 'width': 0x122, 'var': 'box_2_lab_m_1', 'text': '方法一\uFF1A单日充值1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300' } }, { 'type': 'Text', 'props': { 'y': 0x1e, 'x': 0x28, 'width': 0x122, 'var': 'box_2_lab_m_2', 'text': '方法一\uFF1A历史累计充值1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300' } }, { 'type': 'Text', 'props': { 'y': 0x0, 'x': 0x141, 'width': 0xa4, 'var': 'box_2_lab_v_1', 'text': '1000/1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300', 'align': 'right' } }, { 'type': 'Text', 'props': { 'y': 0x1e, 'x': 0x141, 'width': 0xa4, 'var': 'box_2_lab_v_2', 'text': '1000/1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300', 'align': 'right' } }] }, { 'type': 'Image', 'props': { 'y': 0x1aa, 'x': 0x159, 'width': 0x66, 'var': 'box_2_btn_get', 'stateNum': 0x1, 'height': 0x26 } }, { 'type': 'Image', 'props': { 'y': 0x1aa, 'x': 0x159, 'width': 0x66, 'var': 'box_2_btn_copy', 'stateNum': 0x1, 'height': 0x26 } }, { 'type': 'Button', 'props': { 'y': 0x1d2, 'x': 0x126, 'width': 0xc9, 'var': 'box_2_addclick', 'stateNum': 0x1, 'height': 0x1b } }, { 'type': 'Text', 'props': { 'y': 0x13c, 'x': 0x17a, 'width': 0xa3, 'var': 'box_2_lab_wx', 'height': 0x1f, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'left' } }] }, { 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'visible': ![], 'var': 'box_3_show' }, 'child': [{ 'type': 'Panel', 'props': { 'y': 0xf5, 'x': 0x10, 'width': 0x201, 'var': 'box_3_panel', 'vScrollBarSkin': '', 'height': 0x29e } }] }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0x0, 'width': 0xbb, 'var': 'btn_1', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0xba, 'width': 0xbb, 'var': 'btn_2', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0x177, 'width': 0xbb, 'var': 'btn_3', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x203, 'x': 0x22e, 'width': 0x25, 'var': 'btn_close', 'height': 0x8f } }, { 'type': 'Box', 'props': { 'width': 0x2ee, 'visible': ![], 'var': 'box_help', 'height': 0x536 }, 'child': [{ 'type': 'Sprite', 'props': { 'y': 0x0, 'x': 0x0, 'mouseThrough': ![], 'alpha': 0.7 }, 'child': [{ 'type': 'Rect', 'props': { 'width': 0x2ee, 'lineWidth': 0x1, 'height': 0x536, 'fillColor': '#000000' } }] }, { 'type': 'Image', 'props': { 'y': 0x158, 'x': 0x28, 'width': 0x1d2, 'var': 'box_help_bg', 'height': 0x203 }, 'child': [{ 'type': 'Button', 'props': { 'y': -0x1, 'x': 0x1a0, 'width': 0x33, 'var': 'box_help_close', 'height': 0x28 } }, { 'type': 'Image', 'props': { 'y': 0x3f, 'x': 0x98, 'width': 0xa0, 'var': 'box_help_qrcode', 'height': 0xa0 } }] }] }] }] }] }, lfbpga;
    }(laya['ui']['View']);n1hm['MainUI'] = r$zc_;
  })(ktzcdr = hn46m1['demoui'] || (hn46m1['demoui'] = {}));
}(q__zd$r || (q__zd$r = {})), function (v7big) {
  var wjhsu8;(function (_$zeo) {
    var em6o9n = function (_redz) {
      q_sh418($tdrzc, _redz);function $tdrzc() {
        return _redz['call'](this) || this;
      }return $tdrzc['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), _redz['prototype']['createChildren']['call'](this), this['createView'](v7big['demoui']['ToastUI']['uiView']);
      }, $tdrzc['uiView'] = { 'type': 'View', 'props': { 'width': 0x2ee, 'height': 0x536 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x12c, 'height': 0x32, 'centerY': 0x0, 'centerX': 0x0 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x12c, 'height': 0x32, 'centerX': 0x0, 'alpha': 0.5 }, 'child': [{ 'type': 'Rect', 'props': { 'width': 0x12c, 'lineWidth': 0x1, 'height': 0x32, 'fillColor': '#382f2f' } }] }, { 'type': 'Text', 'props': { 'width': 0x12c, 'var': 'lab_msg', 'valign': 'middle', 'text': 'text', 'height': 0x32, 'fontSize': 0x18, 'color': '#ffffff', 'align': 'center' } }] }] }, $tdrzc;
    }(laya['ui']['View']);_$zeo['ToastUI'] = em6o9n;
  })(wjhsu8 = v7big['demoui'] || (v7big['demoui'] = {}));
}(q__zd$r || (q__zd$r = {}));var q_x0532f = function () {
  function faplbg() {}return faplbg['init'] = function () {
    !this['ui'] && (this['ui'] = new q__zd$r['demoui']['ToastUI'](), this['ui']['visible'] = ![], Laya['stage']['addChild'](this['ui']));
  }, faplbg['msg'] = function (tdrzk) {
    var lpfg = this;!this['ui'] && faplbg['init'](), this['ui']['visible'] = !![], this['ui']['lab_msg']['text'] = tdrzk, clearTimeout(this['interval']), this['interval'] = setTimeout(function () {
      lpfg['ui']['visible'] = ![];
    }, 0x7d0);
  }, faplbg;
}();window['minitool'] = q_no41m6;