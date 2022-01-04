var k = wx.$f;
var f_0q45k = this && this['__extends'] || function () {
  var re78z = function (jwdcso, csnd) {
    return re78z = Object['setPrototypeOf'] || { '__proto__': [] } instanceof Array && function (i1vbmu, q_0h5k) {
      i1vbmu['__proto__'] = q_0h5k;
    } || function (kq04_, jwocds) {
      for (var qt0h in jwocds) if (jwocds['hasOwnProperty'](qt0h)) kq04_[qt0h] = jwocds[qt0h];
    }, re78z(jwdcso, csnd);
  };return function (nesxz, qh0kt5) {
    re78z(nesxz, qh0kt5);function bvtmi() {
      this['constructor'] = nesxz;
    }nesxz['prototype'] = qh0kt5 === null ? Object['create'](qh0kt5) : (bvtmi['prototype'] = qh0kt5['prototype'], new bvtmi());
  };
}(),
    fbumfvi = window['Sygame'],
    fc2d6 = ![],
    ffbhimt = function () {
  function btimhf() {}return btimhf['init'] = function () {
    fc2d6 ? this['sygame'] = { 'channel': '3477d2273abd484ba2a0e04ad4971b3c', 'role_id': undefined, 'openid': 'oxmOf5biumkGash-Xht9FVAlswVk', 'appid': 'wx2936121c4817bf46' } : this['sygame'] = fbumfvi;
  }, btimhf['getTimeStamp'] = function () {
    return new Date()['getTime']();
  }, btimhf['setResMap'] = function (snxedw, mthi0) {
    this['resMap'][snxedw] = snxedw + '?' + mthi0;
  }, btimhf['getResMap'] = function ($87zr3) {
    return this['resMap'][$87zr3];
  }, btimhf['resMap'] = {}, btimhf;
}(),
    f$783ry = function () {
  function mfvtb() {
    this['getIcon'] = 'https://wx.11babay.cn/uploads/f/fkccc1532944783/5/2/c/7/60dc442c4fbc5.png', this['copyIcon'] = 'https://wx.11babay.cn/uploads/f/fkccc1532944783/3/0/1/7/60dc4409dce39.png', ffbhimt['init'](), this['getBoxCheckoutCode']();
  }return mfvtb['prototype']['send'] = function (mv1iu, iv1m, exzwns, _khq0, ocj6sd) {
    _khq0 === void 0x0 && (_khq0 = 'get');ocj6sd === void 0x0 && (ocj6sd = '' || null);var gv9u = new Laya['HttpRequest']();gv9u['http']['timeout'] = 0x2710, gv9u['once'](Laya['Event']['COMPLETE'], this, iv1m), gv9u['once'](Laya['Event']['ERROR'], this, exzwns), gv9u['send'](mv1iu, ocj6sd, _khq0, 'text');
  }, mfvtb['prototype']['postSidebarApi'] = function () {
    var k6o_2 = ffbhimt['sygame']['openid'],
        jc6o24 = '&channel=' + ffbhimt['sygame']['channel'] + '&wecha_id=' + k6o_2;this['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=sidebarApi' + jc6o24, this['completeHandler'], this['errorHandler']);
  }, mfvtb['prototype']['getBoxCheckoutCode'] = function () {
    var xnswe = Sygame['SY_CONF']['commitId'];this['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=getBoxCheckoutCode', this['getBoxCheckoutCodeRes'], this['errorHandler'], 'post', { 'commitId': xnswe });
  }, mfvtb['prototype']['getBoxCheckoutCodeRes'] = function (b91vi) {
    var sjdxw = JSON['parse'](b91vi);console['log']('getBoxCheckoutCode:', sjdxw);if (sjdxw['status'] == 0x3e9) {
      var xez8wn = sjdxw['info'];xez8wn == 0xfa1 ? this['postSidebarApi']() : console['error']('盛也盒子\x20不显示' + sjdxw);
    } else console['error']('盛也盒子 getBoxCheckoutCodeRes 其他错误' + sjdxw);
  }, mfvtb['prototype']['completeHandler'] = function (ft0hq) {
    var k_256 = JSON['parse'](ft0hq);console['log'](k_256);switch (k_256['status']) {case 0x3e9:
        var xerz87 = [];k_256['msg']['basics_image_url'] && xerz87['push']({ 'url': k_256['msg']['basics_image_url'], 'type': Laya['Loader']['IMAGE'] }), k_256['msg']['public_code'] && xerz87['push']({ 'url': k_256['msg']['public_code'], 'type': Laya['Loader']['IMAGE'] }), k_256['msg']['vip_customer_service'] && xerz87['push']({ 'url': k_256['msg']['vip_customer_service'], 'type': Laya['Loader']['IMAGE'] }), k_256['msg']['vip_customer_service_not_add'] && xerz87['push']({ 'url': k_256['msg']['vip_customer_service_not_add'], 'type': Laya['Loader']['IMAGE'] }), k_256['msg']['game_center_image_url'] && xerz87['push']({ 'url': k_256['msg']['game_center_image_url'], 'type': Laya['Loader']['IMAGE'] }), k_256['msg']['vip_qrcode'] && xerz87['push']({ 'url': k_256['msg']['vip_qrcode'], 'type': Laya['Loader']['IMAGE'] }), k_256['msg']['getIcon'] && xerz87['push']({ 'url': this['getIcon'], 'type': Laya['Loader']['IMAGE'] }), k_256['msg']['copyIcon'] && xerz87['push']({ 'url': this['copyIcon'], 'type': Laya['Loader']['IMAGE'] });for (var exzsnw = 0x0, _542k = k_256['msg']['follow_gift_list']; exzsnw < _542k['length']; exzsnw++) {
          var hq05tf = _542k[exzsnw];xerz87['push']({ 'url': hq05tf['url'], 'type': Laya['Loader']['IMAGE'] });
        }for (var ren = 0x0, zx8ner = k_256['msg']['vip_box_list']; ren < zx8ner['length']; ren++) {
          var hq05tf = zx8ner[ren];xerz87['push']({ 'url': hq05tf['url'], 'type': Laya['Loader']['IMAGE'] });
        }for (var t50hf = 0x0; t50hf < xerz87['length']; t50hf++) {
          ffbhimt['setResMap'](xerz87[t50hf]['url'], ffbhimt['getTimeStamp']()), xerz87[t50hf]['url'] = ffbhimt['getResMap'](xerz87[t50hf]['url']);
        }Laya['loader']['load'](xerz87, Laya['Handler']['create'](this, this['initGame'])), this['data'] = k_256['msg'];break;case 0x3ea:
        ffvbimu['msg']('空的游戏channel');break;case 0x3eb:
        ffvbimu['msg']('错误的游戏channel');break;case 0x3ec:
        ffvbimu['msg']('未找到对应游戏大类');break;case 0x3ed:
        ffvbimu['msg']('未设置侧边栏');break;}
  }, mfvtb['prototype']['errorHandler'] = function (j6dc) {}, mfvtb['prototype']['initGame'] = function () {
    var y7a3$r = new frx78(this);y7a3$r['show']();
  }, mfvtb;
}(),
    frx78 = function () {
  function xzsn(swnxde) {
    this['page'] = 0x3, this['rolePriceData'] = {}, this['boxlist'] = [], this['donwX'] = 0x0, this['downY'] = 0x0, this['tool'] = swnxde;
  }return xzsn['prototype']['setChildMouseThroughs'] = function (hfm) {
    var sdwex = hfm['_childs'] || [];for (var $78r = 0x0; $78r < sdwex['length']; $78r++) {
      sdwex[$78r] && (sdwex[$78r]['mouseThrough'] = !![]);
    }
  }, xzsn['prototype']['show'] = function () {
    if (this['tool']['data']['on'] === '1') {
      this['main'] = new fhtkq0['demoui']['MainUI'](), Laya['stage']['addChild'](this['main']), this['main']['mouseThrough'] = !![];var enzw = this['main']['_childs'] || [];for (var nwsx = 0x0; nwsx < enzw['length']; nwsx++) {
        enzw[nwsx]['mouseThrough'] = !![];
      }this['setChildMouseThroughs'](this['main']['_childs']), this['setChildMouseThroughs'](this['main']['_childs'][0x0]), this['initIcon'](), this['initEvent'](), this['initView'](), ffvbimu['init'](), this['main']['bg']['x'] = -0x2ee;
    }
  }, xzsn['prototype']['initView'] = function () {
    var ftbih = this,
        c_64o = this['tool']['data']['follow_down_words']['replace'](/\\n/g, '\x0a');this['main']['box_1_lab_info']['text'] = c_64o;for (var $a3p7y = 0x1; $a3p7y <= this['tool']['data']['follow_gift_list']['length']; $a3p7y++) {
      var ibfth = this['tool']['data']['follow_gift_list'][$a3p7y - 0x1];this['main']['box_1_img_' + $a3p7y]['skin'] = ibfth['url'], this['main']['box_1_lab_' + $a3p7y]['text'] = ibfth['name'];
    }for (var $a3p7y = 0x1; $a3p7y <= this['tool']['data']['vip_box_list']['length']; $a3p7y++) {
      var ibfth = this['tool']['data']['vip_box_list'][$a3p7y - 0x1];this['main']['box_2_img_' + $a3p7y]['skin'] = ibfth['url'], this['main']['box_2_lab_' + $a3p7y]['text'] = ibfth['name'];
    }this['main']['box_2_lab_m_1']['text'] = '方法一：单日充值' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_m_2']['text'] = '方法二：历史累计充值' + +this['tool']['data']['y'] + '元', this['main']['box_2_lab_v_1']['text'] = (this['rolePriceData']['todayPrice'] || 0x0) + '/' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_v_2']['text'] = (this['rolePriceData']['allPrice'] || 0x0) + '/' + +this['tool']['data']['y'] + '元', this['main']['box_2_btn_copy']['skin'] = this['tool']['copyIcon'], this['main']['box_2_btn_get']['skin'] = this['tool']['getIcon'], this['main']['box_2_btn_copy']['visible'] = ![], this['main']['box_2_btn_get']['on'](Laya['Event']['CLICK'], this, function () {
      if (ftbih['rolePriceData']['is_vip'] == 0x0) {
        ffvbimu['msg']('请先获取vip资格');return;
      }ftbih['main']['box_2_lab_wx']['text'] = this['rolePriceData']['vip_wx'], ftbih['main']['box_2_btn_copy']['visible'] = !![];
    }), this['main']['box_2_btn_copy']['on'](Laya['Event']['CLICK'], this, function () {
      ftbih['copyText'](this['rolePriceData']['vip_wx']);
    }), this['main']['box_2_addclick']['on'](Laya['Event']['CLICK'], this, function () {
      if (ftbih['rolePriceData']['is_vip'] == 0x0) return;this['main']['box_help_qrcode']['skin'] = ftbih['rolePriceData']['vip_qrcode'], ftbih['main']['box_help']['visible'] = !![];
    }), this['main']['box_help_close']['on'](Laya['Event']['CLICK'], this, function () {
      ftbih['main']['box_help']['visible'] = ![];
    }), this['main']['box_help_bg']['skin'] = this['tool']['data']['vip_customer_service_not_add'], this['main']['box_help_qrcode']['skin'] = ftbih['rolePriceData']['vip_qrcode'], this['main']['box_help_qrcode']['scaleX'] = 0xa0 / this['main']['box_help_qrcode']['width'], this['main']['box_help_qrcode']['scaleY'] = 0xa0 / this['main']['box_help_qrcode']['width'], this['main']['box_3_panel']['vScrollBar']['visible'] = ![], this['main']['box_3_panel']['vScrollBarSkin'] = 'common_atlas/scrollBar.png';
  }, xzsn['prototype']['initIcon'] = function () {
    this['icon'] = new Laya['Image'](), this['icon']['skin'] = this['tool']['data']['basics_image_url'], this['icon']['x'] = 0x0, this['icon']['y'] = 0xc8, this['icon']['width'] = 0x66, this['icon']['height'] = 0x6f, this['main']['addChild'](this['icon']), this['icon']['on'](Laya['Event']['MOUSE_DOWN'], this, this['iconPress']), this['icon']['on'](Laya['Event']['MOUSE_UP'], this, this['iconUp']), this['icon']['on'](Laya['Event']['MOUSE_WHEEL'], this, this['iconMove']), this['dragRect'] = new Laya['Rectangle'](-this['icon']['width'] / 0x2, 0x0, Laya['stage']['width'], Laya['stage']['height'] - this['icon']['height'] / 0x2);
  }, xzsn['prototype']['initEvent'] = function () {
    var z87e$ = this;this['main']['btn_1']['on'](Laya['Event']['CLICK'], this, function () {
      if (z87e$['page'] == 0x1) return;z87e$['page1']();
    }), this['main']['btn_2']['on'](Laya['Event']['CLICK'], this, function () {
      if (z87e$['page'] == 0x2) return;z87e$['page2']();
    }), this['main']['btn_3']['on'](Laya['Event']['CLICK'], this, function () {
      if (z87e$['page'] == 0x3) return;z87e$['page3']();
    }), this['main']['btn_close']['on'](Laya['Event']['CLICK'], this, function () {
      z87e$['main']['bg']['x'] = -0x2ee, z87e$['icon']['visible'] = !![];
    });
  }, xzsn['prototype']['initBoard'] = function () {
    this['isInitBoard'] = !![], this['page1']();
  }, xzsn['prototype']['showBoard'] = function () {
    this['main']['bg']['x'] = 0x0, this['icon']['visible'] = ![];var tf0imh = F$L6['selectedServer']['server_id'],
        tfimh0 = F$L6['selectedServer']['server_name'],
        $yp7a3 = F$L6['roleId'],
        fthi0 = F$L6['roleName'],
        t5hq = ffbhimt['sygame']['openid'],
        a$3r = '&role_id=' + ffbhimt['sygame']['role_id'] + '&channel=' + ffbhimt['sygame']['channel'] + '&server_id=' + tf0imh + '&server_name=' + tfimh0 + '&wecha_id=' + t5hq + '&role_id=' + $yp7a3 + '&role_name=' + fthi0;this['tool']['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=sidebarApiRoleId' + a$3r, this['rolePriceHandler']['bind'](this), this['roleError']['bind'](this));
  }, xzsn['prototype']['page1'] = function () {

    if(!xzsn.prototype.page1Bg){
      xzsn.prototype.page1Bg = new Laya.Image(this.tool.data.public_code);
      this.main.bg.addChildAt(xzsn.prototype.page1Bg,0)
  }
  if(xzsn.prototype.page1Bg) xzsn.prototype.page1Bg.visible = true; 
  if(xzsn.prototype.page2Bg) xzsn.prototype.page2Bg.visible = false; 
  if(xzsn.prototype.page3Bg) xzsn.prototype.page3Bg.visible = false;  

    this['page'] = 0x1, this['main']['box_1_show']['visible'] = !![], this['main']['box_2_show']['visible'] = ![], this['main']['box_3_show']['visible'] = ![];
  }, xzsn['prototype']['page2'] = function () {
    if(!xzsn.prototype.page2Bg){
      xzsn.prototype.page2Bg = new Laya.Image(this.tool.data.vip_customer_service);
      this.main.bg.addChildAt(xzsn.prototype.page2Bg,0)
  }
  if(xzsn.prototype.page1Bg) xzsn.prototype.page1Bg.visible = false; 
  if(xzsn.prototype.page2Bg) xzsn.prototype.page2Bg.visible = true; 
  if(xzsn.prototype.page3Bg) xzsn.prototype.page3Bg.visible = false;    
    this['page'] = 0x2, this['main']['box_1_show']['visible'] = ![], this['main']['box_2_show']['visible'] = !![], this['main']['box_3_show']['visible'] = ![];
  }, xzsn['prototype']['page3'] = function () {
    if(!xzsn.prototype.page3Bg){
      xzsn.prototype.page3Bg = new Laya.Image(this.tool.data.game_center_image_url);
      this.main.bg.addChildAt(xzsn.prototype.page3Bg,0)
  }
  if(xzsn.prototype.page1Bg) xzsn.prototype.page1Bg.visible = false; 
  if(xzsn.prototype.page2Bg) xzsn.prototype.page2Bg.visible = false; 
  if(xzsn.prototype.page3Bg) xzsn.prototype.page3Bg.visible = true;    
    this['page'] = 0x3, this['main']['box_1_show']['visible'] = ![], this['main']['box_2_show']['visible'] = ![], this['main']['box_3_show']['visible'] = !![], this['sendBox'] || this['getBoxList'](0x0), this['sendBox'] = !![], fbumfvi && fbumfvi['syClickOpenBox']();
  }, xzsn['prototype']['getBoxList'] = function (djcswn) {
    var fi0ht = this;fbumfvi && fbumfvi['syGetBoxList']({ 'page': djcswn, 'count': 0xc })['then'](function (o6c24j) {
      var k0q5h_ = o6c24j['data'];k0q5h_['status'] == 0x3e9 ? k0q5h_['data'] && k0q5h_['data']['length'] && (fi0ht['boxlist'] = fi0ht['boxlist']['concat'](k0q5h_['data']), djcswn++, fi0ht['getBoxList'](djcswn)) : fi0ht['boxListHandler']();
    });
  }, xzsn['prototype']['copyText'] = function (r78y3) {
    try {
      wx['setClipboardData']({ 'data': r78y3, 'success': function (ze78r$) {
          console['log']('复制成功:', ze78r$);
        } });
    } catch (fbium) {}
  }, xzsn['prototype']['rolePriceHandler'] = function (cjo462) {
    this['rolePriceData'] = JSON['parse'](cjo462);switch (this['rolePriceData']['status']) {case 0x3e9:
        this['main']['box_2_lab_v_1']['text'] = (this['rolePriceData']['todayPrice'] || 0x0) + '/' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_v_2']['text'] = (this['rolePriceData']['allPrice'] || 0x0) + '/' + +this['tool']['data']['y'] + '元';break;case 0x3ea:
        break;case 0x3eb:
        break;}
  }, xzsn['prototype']['roleError'] = function () {}, xzsn['prototype']['boxListHandler'] = function () {
    var y8r7$ = function (r8nxez) {
      var $ayp37 = hqfm0t['boxlist'][r8nxez],
          ry873$ = new fhtkq0['demoui']['BoxItemUI']();ry873$['icon']['skin'] = $ayp37['icon'], ry873$['title']['text'] = $ayp37['title'], ry873$['x'] = 0xa0 * (r8nxez % 0x3), ry873$['y'] = 0xa0 * (r8nxez / 0x3 ^ 0x0), hqfm0t['main']['box_3_panel']['addChild'](ry873$);var vu19g = { 'appid': ffbhimt['sygame']['appid'], 'game_id': $ayp37['game_id'], 'jump_appid': $ayp37['jump_appid'], 'jump_path': $ayp37['jump_path'], 'tunnel_id': $ayp37['tunnel_id'], 'uv': 0x0, 'wecha_id': ffbhimt['sygame']['openid'] },
          jc6sdo = $ayp37['preview_img'],
          qkh0t = $ayp37['jump_type'],
          wdxse = $ayp37['kf_session'];ry873$['on'](Laya['Event']['CLICK'], hqfm0t, function () {
        fbumfvi && fbumfvi['syClickBox']({ 'game_id': $ayp37['game_id'], 'tunnel_id': $ayp37['tunnel_id'], 'jump_appid': $ayp37['jump_appid'], 'jump_path': $ayp37['jump_path'] })['then'](function (wsnjxd) {
          if (qkh0t === '0') wx['navigateToMiniProgram']({ 'appId': vu19g['jump_appid'], 'path': vu19g['jump_path'], 'fail': function (o_246c) {
              if (!jc6sdo) return;wx['previewImage']({ 'urls': [jc6sdo] });
            } });else {
            if (qkh0t === '1') {
              if (!jc6sdo) return;wx['previewImage']({ 'urls': [jc6sdo] });
            } else {
              if (qkh0t === '2') {
                if (!wdxse) return;wx['openCustomerServiceConversation']({ 'sessionFrom': wdxse, 'showMessageCard': !![], 'sendMessageTitle': '', 'sendMessagePath': '', 'sendMessageImg': '' });
              }
            }
          }
        });
      });
    },
        hqfm0t = this;for (var wjnsx = 0x0; wjnsx < this['boxlist']['length']; wjnsx++) {
      y8r7$(wjnsx);
    }
  }, xzsn['prototype']['boxListError'] = function () {}, xzsn['prototype']['boxClickHandler'] = function () {}, xzsn['prototype']['iconPress'] = function (ay3r7) {
    this['donwX'] = ay3r7['target']['x'], this['donwY'] = ay3r7['target']['y'], this['icon']['startDrag'](this['dragRect']), this['isMove'] = ![], this['isPress'] = !![];
  }, xzsn['prototype']['iconMove'] = function (o6dc2) {
    this['isMove'] = !![];
  }, xzsn['prototype']['iconUp'] = function (r$837) {
    var rya$7 = r$837['target']['x'],
        dswjoc = r$837['target']['y'];this['icon']['stopDrag'](), rya$7 == this['donwX'] && this['donwY'] == dswjoc && (this['isInitBoard'] || this['initBoard'](), this['showBoard']()), this['isMove'] = ![], this['isPress'] = ![];
  }, xzsn;
}(),
    fhtkq0;(function (bv1) {
  var zn8;(function (uvimb1) {
    var x8ern = function ($8rze) {
      f_0q45k(q045k_, $8rze);function q045k_() {
        return $8rze['call'](this) || this;
      }return q045k_['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), $8rze['prototype']['createChildren']['call'](this), this['createView'](bv1['demoui']['BoxItemUI']['uiView']);
      }, q045k_['uiView'] = { 'type': 'View', 'props': { 'width': 0xb4, 'height': 0xa0 }, 'child': [{ 'type': 'Image', 'props': { 'y': 0x3, 'x': 0x20, 'width': 0x73, 'var': 'icon', 'height': 0x73 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x79, 'x': -0x21, 'width': 0xb4, 'var': 'title', 'valign': 'middle', 'height': 0x22, 'fontSize': 0x16, 'color': '#441d1c', 'align': 'center' } }] }] }, q045k_;
    }(laya['ui']['View']);uvimb1['BoxItemUI'] = x8ern;
  })(zn8 = bv1['demoui'] || (bv1['demoui'] = {}));
})(fhtkq0 || (fhtkq0 = {})), function (rzx8n) {
  var dswoj;(function (_oc264) {
    var _6k25 = function (_k54q2) {
      f_0q45k(ojscd6, _k54q2);function ojscd6() {
        return _k54q2['call'](this) || this;
      }return ojscd6['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), _k54q2['prototype']['createChildren']['call'](this), this['createView'](rzx8n['demoui']['MainUI']['uiView']);
      }, ojscd6['uiView'] = { 'type': 'View', 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x2ee, 'top': 0x0, 'right': 0x0, 'left': 0x0, 'height': 0x536, 'bottom': 0x0 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x2ee, 'height': 0x536, 'centerY': 0x0 }, 'child': [{ 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x2ee, 'var': 'bg', 'height': 0x536 }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x2ee, 'visible': ![], 'var': 'box_1_show', 'height': 0x536, 'centerY': 0x0 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x253, 'x': 0x2e, 'width': 0x1d0, 'var': 'box_1_lab_info', 'leading': 0xa, 'height': 0x97, 'fontSize': 0x18, 'color': '#a959ee' } }, { 'type': 'HBox', 'props': { 'y': 0x2ee, 'x': 0x14, 'width': 0x1fe, 'space': 0x35, 'height': 0x78, 'align': 'top' }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x58, 'var': 'box_1_img_1', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_1', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0xa, 'x': 0xa, 'width': 0x58, 'var': 'box_1_img_2', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_2', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x14, 'x': 0x14, 'width': 0x58, 'var': 'box_1_img_3', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_3', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x1e, 'x': 0x1e, 'width': 0x58, 'var': 'box_1_img_4', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_4', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }] }] }, { 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'visible': ![], 'var': 'box_2_show' }, 'child': [{ 'type': 'HBox', 'props': { 'y': 0x220, 'x': 0x18, 'width': 0x1f4, 'space': 0x2c, 'height': 0x56, 'align': 'top' }, 'child': [{ 'type': 'Image', 'props': { 'y': 2.5, 'x': 0x0, 'width': 0x58, 'var': 'box_2_img_1', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_1', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0xc, 'x': 0xa, 'width': 0x58, 'var': 'box_2_img_2', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_2', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x16, 'x': 0x14, 'width': 0x58, 'var': 'box_2_img_3', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_3', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x20, 'x': 0x1e, 'width': 0x58, 'var': 'box_2_img_4', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_4', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x2a, 'x': 0x28, 'width': 0x58, 'var': 'box_2_img_5', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_5', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }] }, { 'type': 'Box', 'props': { 'y': 0x384, 'x': 0x0, 'width': 0x221, 'height': 0x44 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x0, 'x': 0x28, 'width': 0x122, 'var': 'box_2_lab_m_1', 'text': '方法一\uFF1A单日充值1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300' } }, { 'type': 'Text', 'props': { 'y': 0x1e, 'x': 0x28, 'width': 0x122, 'var': 'box_2_lab_m_2', 'text': '方法一\uFF1A历史累计充值1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300' } }, { 'type': 'Text', 'props': { 'y': 0x0, 'x': 0x141, 'width': 0xa4, 'var': 'box_2_lab_v_1', 'text': '1000/1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300', 'align': 'right' } }, { 'type': 'Text', 'props': { 'y': 0x1e, 'x': 0x141, 'width': 0xa4, 'var': 'box_2_lab_v_2', 'text': '1000/1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300', 'align': 'right' } }] }, { 'type': 'Image', 'props': { 'y': 0x1aa, 'x': 0x159, 'width': 0x66, 'var': 'box_2_btn_get', 'stateNum': 0x1, 'height': 0x26 } }, { 'type': 'Image', 'props': { 'y': 0x1aa, 'x': 0x159, 'width': 0x66, 'var': 'box_2_btn_copy', 'stateNum': 0x1, 'height': 0x26 } }, { 'type': 'Button', 'props': { 'y': 0x1d2, 'x': 0x126, 'width': 0xc9, 'var': 'box_2_addclick', 'stateNum': 0x1, 'height': 0x1b } }, { 'type': 'Text', 'props': { 'y': 0x13c, 'x': 0x17a, 'width': 0xa3, 'var': 'box_2_lab_wx', 'height': 0x1f, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'left' } }] }, { 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'visible': ![], 'var': 'box_3_show' }, 'child': [{ 'type': 'Panel', 'props': { 'y': 0xf5, 'x': 0x10, 'width': 0x201, 'var': 'box_3_panel', 'vScrollBarSkin': '', 'height': 0x29e } }] }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0x0, 'width': 0xbb, 'var': 'btn_1', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0xba, 'width': 0xbb, 'var': 'btn_2', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0x177, 'width': 0xbb, 'var': 'btn_3', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x203, 'x': 0x22e, 'width': 0x25, 'var': 'btn_close', 'height': 0x8f } }, { 'type': 'Box', 'props': { 'width': 0x2ee, 'visible': ![], 'var': 'box_help', 'height': 0x536 }, 'child': [{ 'type': 'Sprite', 'props': { 'y': 0x0, 'x': 0x0, 'mouseThrough': ![], 'alpha': 0.7 }, 'child': [{ 'type': 'Rect', 'props': { 'width': 0x2ee, 'lineWidth': 0x1, 'height': 0x536, 'fillColor': '#000000' } }] }, { 'type': 'Image', 'props': { 'y': 0x158, 'x': 0x28, 'width': 0x1d2, 'var': 'box_help_bg', 'height': 0x203 }, 'child': [{ 'type': 'Button', 'props': { 'y': -0x1, 'x': 0x1a0, 'width': 0x33, 'var': 'box_help_close', 'height': 0x28 } }, { 'type': 'Image', 'props': { 'y': 0x3f, 'x': 0x98, 'width': 0xa0, 'var': 'box_help_qrcode', 'height': 0xa0 } }] }] }] }] }] }, ojscd6;
    }(laya['ui']['View']);_oc264['MainUI'] = _6k25;
  })(dswoj = rzx8n['demoui'] || (rzx8n['demoui'] = {}));
}(fhtkq0 || (fhtkq0 = {})), function (tifbv) {
  var xzns;(function ($r37y) {
    var jo2c = function (tqhf0) {
      f_0q45k(nzsw, tqhf0);function nzsw() {
        return tqhf0['call'](this) || this;
      }return nzsw['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), tqhf0['prototype']['createChildren']['call'](this), this['createView'](tifbv['demoui']['ToastUI']['uiView']);
      }, nzsw['uiView'] = { 'type': 'View', 'props': { 'width': 0x2ee, 'height': 0x536 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x12c, 'height': 0x32, 'centerY': 0x0, 'centerX': 0x0 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x12c, 'height': 0x32, 'centerX': 0x0, 'alpha': 0.5 }, 'child': [{ 'type': 'Rect', 'props': { 'width': 0x12c, 'lineWidth': 0x1, 'height': 0x32, 'fillColor': '#382f2f' } }] }, { 'type': 'Text', 'props': { 'width': 0x12c, 'var': 'lab_msg', 'valign': 'middle', 'text': 'text', 'height': 0x32, 'fontSize': 0x18, 'color': '#ffffff', 'align': 'center' } }] }] }, nzsw;
    }(laya['ui']['View']);$r37y['ToastUI'] = jo2c;
  })(xzns = tifbv['demoui'] || (tifbv['demoui'] = {}));
}(fhtkq0 || (fhtkq0 = {}));var ffvbimu = function () {
  function zxren8() {}return zxren8['init'] = function () {
    !this['ui'] && (this['ui'] = new fhtkq0['demoui']['ToastUI'](), this['ui']['visible'] = ![], Laya['stage']['addChild'](this['ui']));
  }, zxren8['msg'] = function (buv91g) {
    var p37y$ = this;!this['ui'] && zxren8['init'](), this['ui']['visible'] = !![], this['ui']['lab_msg']['text'] = buv91g, clearTimeout(this['interval']), this['interval'] = setTimeout(function () {
      p37y$['ui']['visible'] = ![];
    }, 0x7d0);
  }, zxren8;
}();window['minitool'] = f$783ry;