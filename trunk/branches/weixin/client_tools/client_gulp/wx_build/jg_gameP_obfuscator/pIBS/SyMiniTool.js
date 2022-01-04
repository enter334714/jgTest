var E = wx.$p;
var p_lftx = this && this['__extends'] || function () {
  var vy76$ = function (htls4, iykj) {
    return vy76$ = Object['setPrototypeOf'] || { '__proto__': [] } instanceof Array && function (u_xfom, ftul_x) {
      u_xfom['__proto__'] = ftul_x;
    } || function (nw85e, lpfux) {
      for (var hlp4t in lpfux) if (lpfux['hasOwnProperty'](hlp4t)) nw85e[hlp4t] = lpfux[hlp4t];
    }, vy76$(htls4, iykj);
  };return function (shlp4k, rz23w) {
    vy76$(shlp4k, rz23w);function futx_l() {
      this['constructor'] = shlp4k;
    }shlp4k['prototype'] = rz23w === null ? Object['create'](rz23w) : (futx_l['prototype'] = rz23w['prototype'], new futx_l());
  };
}(),
    p_r21v67 = window['Sygame'],
    p_n3w9 = ![],
    p_jh$kyi = function () {
  function $6jiky() {}return $6jiky['init'] = function () {
    p_n3w9 ? this['sygame'] = { 'channel': '3477d2273abd484ba2a0e04ad4971b3c', 'role_id': undefined, 'openid': 'oxmOf5biumkGash-Xht9FVAlswVk', 'appid': 'wx2936121c4817bf46' } : this['sygame'] = p_r21v67;
  }, $6jiky['getTimeStamp'] = function () {
    return new Date()['getTime']();
  }, $6jiky['setResMap'] = function (lxfpu, n5we93) {
    this['resMap'][lxfpu] = lxfpu + '?' + n5we93;
  }, $6jiky['getResMap'] = function (h4jps) {
    return this['resMap'][h4jps];
  }, $6jiky['resMap'] = {}, $6jiky;
}(),
    p_eq8b9n = function () {
  function e35wn() {
    this['getIcon'] = 'https://wx.11babay.cn/uploads/f/fkccc1532944783/5/2/c/7/60dc442c4fbc5.png', this['copyIcon'] = 'https://wx.11babay.cn/uploads/f/fkccc1532944783/3/0/1/7/60dc4409dce39.png', p_jh$kyi['init'](), this['getBoxCheckoutCode']();
  }return e35wn['prototype']['send'] = function (hjkyi$, upxlft, e98bqa, kyi, $khij) {
    kyi === void 0x0 && (kyi = 'get');$khij === void 0x0 && ($khij = '' || null);var ijksy = new Laya['HttpRequest']();ijksy['http']['timeout'] = 0x2710, ijksy['once'](Laya['Event']['COMPLETE'], this, upxlft), ijksy['once'](Laya['Event']['ERROR'], this, e98bqa), ijksy['send'](hjkyi$, $khij, kyi, 'text');
  }, e35wn['prototype']['postSidebarApi'] = function () {
    var xsl4t = p_jh$kyi['sygame']['openid'],
        _mtu = '&channel=' + p_jh$kyi['sygame']['channel'] + '&wecha_id=' + xsl4t;this['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=sidebarApi' + _mtu, this['completeHandler'], this['errorHandler']);
  }, e35wn['prototype']['getBoxCheckoutCode'] = function () {
    var lhpk4s = Sygame['SY_CONF']['commitId'];this['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=getBoxCheckoutCode', this['getBoxCheckoutCodeRes'], this['errorHandler'], 'post', { 'commitId': lhpk4s });
  }, e35wn['prototype']['getBoxCheckoutCodeRes'] = function ($ijy1) {
    var _mfuxo = JSON['parse']($ijy1);console['log']('getBoxCheckoutCode:', _mfuxo);if (_mfuxo['status'] == 0x3e9) {
      var ez = _mfuxo['info'];ez == 0xfa1 ? this['postSidebarApi']() : console['error']('盛也盒子\x20不显示' + _mfuxo);
    } else console['error']('盛也盒子 getBoxCheckoutCodeRes 其他错误' + _mfuxo);
  }, e35wn['prototype']['completeHandler'] = function (rv2170) {
    var e5n3w = JSON['parse'](rv2170);console['log'](e5n3w);switch (e5n3w['status']) {case 0x3e9:
        var ne39w5 = [];e5n3w['msg']['basics_image_url'] && ne39w5['push']({ 'url': e5n3w['msg']['basics_image_url'], 'type': Laya['Loader']['IMAGE'] }), e5n3w['msg']['public_code'] && ne39w5['push']({ 'url': e5n3w['msg']['public_code'], 'type': Laya['Loader']['IMAGE'] }), e5n3w['msg']['vip_customer_service'] && ne39w5['push']({ 'url': e5n3w['msg']['vip_customer_service'], 'type': Laya['Loader']['IMAGE'] }), e5n3w['msg']['vip_customer_service_not_add'] && ne39w5['push']({ 'url': e5n3w['msg']['vip_customer_service_not_add'], 'type': Laya['Loader']['IMAGE'] }), e5n3w['msg']['game_center_image_url'] && ne39w5['push']({ 'url': e5n3w['msg']['game_center_image_url'], 'type': Laya['Loader']['IMAGE'] }), e5n3w['msg']['vip_qrcode'] && ne39w5['push']({ 'url': e5n3w['msg']['vip_qrcode'], 'type': Laya['Loader']['IMAGE'] }), e5n3w['msg']['getIcon'] && ne39w5['push']({ 'url': this['getIcon'], 'type': Laya['Loader']['IMAGE'] }), e5n3w['msg']['copyIcon'] && ne39w5['push']({ 'url': this['copyIcon'], 'type': Laya['Loader']['IMAGE'] });for (var kh4jsp = 0x0, lxs4p = e5n3w['msg']['follow_gift_list']; kh4jsp < lxs4p['length']; kh4jsp++) {
          var wz0 = lxs4p[kh4jsp];ne39w5['push']({ 'url': wz0['url'], 'type': Laya['Loader']['IMAGE'] });
        }for (var dqc = 0x0, jiksy = e5n3w['msg']['vip_box_list']; dqc < jiksy['length']; dqc++) {
          var wz0 = jiksy[dqc];ne39w5['push']({ 'url': wz0['url'], 'type': Laya['Loader']['IMAGE'] });
        }for (var ew35 = 0x0; ew35 < ne39w5['length']; ew35++) {
          p_jh$kyi['setResMap'](ne39w5[ew35]['url'], p_jh$kyi['getTimeStamp']()), ne39w5[ew35]['url'] = p_jh$kyi['getResMap'](ne39w5[ew35]['url']);
        }Laya['loader']['load'](ne39w5, Laya['Handler']['create'](this, this['initGame'])), this['data'] = e5n3w['msg'];break;case 0x3ea:
        p_hkp4js['msg']('空的游戏channel');break;case 0x3eb:
        p_hkp4js['msg']('错误的游戏channel');break;case 0x3ec:
        p_hkp4js['msg']('未找到对应游戏大类');break;case 0x3ed:
        p_hkp4js['msg']('未设置侧边栏');break;}
  }, e35wn['prototype']['errorHandler'] = function (zr320w) {}, e35wn['prototype']['initGame'] = function () {
    var i1j$6 = new p_$hyij(this);i1j$6['show']();
  }, e35wn;
}(),
    p_$hyij = function () {
  function pt4sxl(v612) {
    this['page'] = 0x3, this['rolePriceData'] = {}, this['boxlist'] = [], this['donwX'] = 0x0, this['downY'] = 0x0, this['tool'] = v612;
  }return pt4sxl['prototype']['setChildMouseThroughs'] = function ($i6jk) {
    var iv$6 = $i6jk['_childs'] || [];for (var hsj4i = 0x0; hsj4i < iv$6['length']; hsj4i++) {
      iv$6[hsj4i] && (iv$6[hsj4i]['mouseThrough'] = !![]);
    }
  }, pt4sxl['prototype']['show'] = function () {
    if (this['tool']['data']['on'] === '1') {
      this['main'] = new p_cdbq['demoui']['MainUI'](), Laya['stage']['addChild'](this['main']), this['main']['mouseThrough'] = !![];var kshl4 = this['main']['_childs'] || [];for (var sjhyk = 0x0; sjhyk < kshl4['length']; sjhyk++) {
        kshl4[sjhyk]['mouseThrough'] = !![];
      }this['setChildMouseThroughs'](this['main']['_childs']), this['setChildMouseThroughs'](this['main']['_childs'][0x0]), this['initIcon'](), this['initEvent'](), this['initView'](), p_hkp4js['init'](), this['main']['bg']['x'] = -0x2ee;
    }
  }, pt4sxl['prototype']['initView'] = function () {
    var psxtl4 = this,
        kh4lp = this['tool']['data']['follow_down_words']['replace'](/\\n/g, '\x0a');this['main']['box_1_lab_info']['text'] = kh4lp;for (var $6y1 = 0x1; $6y1 <= this['tool']['data']['follow_gift_list']['length']; $6y1++) {
      var jk$y6i = this['tool']['data']['follow_gift_list'][$6y1 - 0x1];this['main']['box_1_img_' + $6y1]['skin'] = jk$y6i['url'], this['main']['box_1_lab_' + $6y1]['text'] = jk$y6i['name'];
    }for (var $6y1 = 0x1; $6y1 <= this['tool']['data']['vip_box_list']['length']; $6y1++) {
      var jk$y6i = this['tool']['data']['vip_box_list'][$6y1 - 0x1];this['main']['box_2_img_' + $6y1]['skin'] = jk$y6i['url'], this['main']['box_2_lab_' + $6y1]['text'] = jk$y6i['name'];
    }this['main']['box_2_lab_m_1']['text'] = '方法一：单日充值' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_m_2']['text'] = '方法二：历史累计充值' + +this['tool']['data']['y'] + '元', this['main']['box_2_lab_v_1']['text'] = (this['rolePriceData']['todayPrice'] || 0x0) + '/' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_v_2']['text'] = (this['rolePriceData']['allPrice'] || 0x0) + '/' + +this['tool']['data']['y'] + '元', this['main']['box_2_btn_copy']['skin'] = this['tool']['copyIcon'], this['main']['box_2_btn_get']['skin'] = this['tool']['getIcon'], this['main']['box_2_btn_copy']['visible'] = ![], this['main']['box_2_btn_get']['on'](Laya['Event']['CLICK'], this, function () {
      if (psxtl4['rolePriceData']['is_vip'] == 0x0) {
        p_hkp4js['msg']('请先获取vip资格');return;
      }psxtl4['main']['box_2_lab_wx']['text'] = this['rolePriceData']['vip_wx'], psxtl4['main']['box_2_btn_copy']['visible'] = !![];
    }), this['main']['box_2_btn_copy']['on'](Laya['Event']['CLICK'], this, function () {
      psxtl4['copyText'](this['rolePriceData']['vip_wx']);
    }), this['main']['box_2_addclick']['on'](Laya['Event']['CLICK'], this, function () {
      if (psxtl4['rolePriceData']['is_vip'] == 0x0) return;this['main']['box_help_qrcode']['skin'] = psxtl4['rolePriceData']['vip_qrcode'], psxtl4['main']['box_help']['visible'] = !![];
    }), this['main']['box_help_close']['on'](Laya['Event']['CLICK'], this, function () {
      psxtl4['main']['box_help']['visible'] = ![];
    }), this['main']['box_help_bg']['skin'] = this['tool']['data']['vip_customer_service_not_add'], this['main']['box_help_qrcode']['skin'] = psxtl4['rolePriceData']['vip_qrcode'], this['main']['box_help_qrcode']['scaleX'] = 0xa0 / this['main']['box_help_qrcode']['width'], this['main']['box_help_qrcode']['scaleY'] = 0xa0 / this['main']['box_help_qrcode']['width'], this['main']['box_3_panel']['vScrollBar']['visible'] = ![], this['main']['box_3_panel']['vScrollBarSkin'] = 'common_atlas/scrollBar.png';
  }, pt4sxl['prototype']['initIcon'] = function () {
    this['icon'] = new Laya['Image'](), this['icon']['skin'] = this['tool']['data']['basics_image_url'], this['icon']['x'] = 0x0, this['icon']['y'] = 0xc8, this['icon']['width'] = 0x66, this['icon']['height'] = 0x6f, this['main']['addChild'](this['icon']), this['icon']['on'](Laya['Event']['MOUSE_DOWN'], this, this['iconPress']), this['icon']['on'](Laya['Event']['MOUSE_UP'], this, this['iconUp']), this['icon']['on'](Laya['Event']['MOUSE_WHEEL'], this, this['iconMove']), this['dragRect'] = new Laya['Rectangle'](-this['icon']['width'] / 0x2, 0x0, Laya['stage']['width'], Laya['stage']['height'] - this['icon']['height'] / 0x2);
  }, pt4sxl['prototype']['initEvent'] = function () {
    var jishyk = this;this['main']['btn_1']['on'](Laya['Event']['CLICK'], this, function () {
      if (jishyk['page'] == 0x1) return;jishyk['page1']();
    }), this['main']['btn_2']['on'](Laya['Event']['CLICK'], this, function () {
      if (jishyk['page'] == 0x2) return;jishyk['page2']();
    }), this['main']['btn_3']['on'](Laya['Event']['CLICK'], this, function () {
      if (jishyk['page'] == 0x3) return;jishyk['page3']();
    }), this['main']['btn_close']['on'](Laya['Event']['CLICK'], this, function () {
      jishyk['main']['bg']['x'] = -0x2ee, jishyk['icon']['visible'] = !![];
    });
  }, pt4sxl['prototype']['initBoard'] = function () {
    this['isInitBoard'] = !![], this['page1']();
  }, pt4sxl['prototype']['showBoard'] = function () {
    this['main']['bg']['x'] = 0x0, this['icon']['visible'] = ![];var q8en9b = _p$3['selectedServer']['server_id'],
        r7$1 = _p$3['selectedServer']['server_name'],
        _ltuxf = _p$3['roleId'],
        yji6$1 = _p$3['roleName'],
        rz3027 = p_jh$kyi['sygame']['openid'],
        umx_tf = '&role_id=' + p_jh$kyi['sygame']['role_id'] + '&channel=' + p_jh$kyi['sygame']['channel'] + '&server_id=' + q8en9b + '&server_name=' + r7$1 + '&wecha_id=' + rz3027 + '&role_id=' + _ltuxf + '&role_name=' + yji6$1;this['tool']['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=sidebarApiRoleId' + umx_tf, this['rolePriceHandler']['bind'](this), this['roleError']['bind'](this));
  }, pt4sxl['prototype']['page1'] = function () {
    if(!pt4sxl.prototype.page1Bg){
      pt4sxl.prototype.page1Bg = new Laya.Image(this.tool.data.public_code);
      this.main.bg.addChildAt(pt4sxl.prototype.page1Bg,0)
  }
  if(pt4sxl.prototype.page1Bg) pt4sxl.prototype.page1Bg.visible = true; 
  if(pt4sxl.prototype.page2Bg) pt4sxl.prototype.page2Bg.visible = false; 
  if(pt4sxl.prototype.page3Bg) pt4sxl.prototype.page3Bg.visible = false;       
    this['page'] = 0x1, this['main']['box_1_show']['visible'] = !![], this['main']['box_2_show']['visible'] = ![], this['main']['box_3_show']['visible'] = ![];
  }, pt4sxl['prototype']['page2'] = function () {
    if(!pt4sxl.prototype.page2Bg){
      pt4sxl.prototype.page2Bg = new Laya.Image(this.tool.data.vip_customer_service);
      this.main.bg.addChildAt(pt4sxl.prototype.page2Bg,0)
  }
  if(pt4sxl.prototype.page1Bg) pt4sxl.prototype.page1Bg.visible = false; 
  if(pt4sxl.prototype.page2Bg) pt4sxl.prototype.page2Bg.visible = true; 
  if(pt4sxl.prototype.page3Bg) pt4sxl.prototype.page3Bg.visible = false;    
    this['page'] = 0x2,  this['main']['box_1_show']['visible'] = ![], this['main']['box_2_show']['visible'] = !![], this['main']['box_3_show']['visible'] = ![];
  }, pt4sxl['prototype']['page3'] = function () {
    if(!pt4sxl.prototype.page3Bg){
      pt4sxl.prototype.page3Bg = new Laya.Image(this.tool.data.game_center_image_url);
      this.main.bg.addChildAt(pt4sxl.prototype.page3Bg,0)
  }
  if(pt4sxl.prototype.page1Bg) pt4sxl.prototype.page1Bg.visible = false; 
  if(pt4sxl.prototype.page2Bg) pt4sxl.prototype.page2Bg.visible = false; 
  if(pt4sxl.prototype.page3Bg) pt4sxl.prototype.page3Bg.visible = true;
    this['page'] = 0x3, this['main']['box_1_show']['visible'] = ![], this['main']['box_2_show']['visible'] = ![], this['main']['box_3_show']['visible'] = !![], this['sendBox'] || this['getBoxList'](0x0), this['sendBox'] = !![], p_r21v67 && p_r21v67['syClickOpenBox']();
  }, pt4sxl['prototype']['getBoxList'] = function (sjpk4) {
    var kij6y = this;p_r21v67 && p_r21v67['syGetBoxList']({ 'page': sjpk4, 'count': 0xc })['then'](function ($v6y) {
      var ba9g = $v6y['data'];ba9g['status'] == 0x3e9 ? ba9g['data'] && ba9g['data']['length'] && (kij6y['boxlist'] = kij6y['boxlist']['concat'](ba9g['data']), sjpk4++, kij6y['getBoxList'](sjpk4)) : kij6y['boxListHandler']();
    });
  }, pt4sxl['prototype']['copyText'] = function (hkspl4) {
    try {
      wx['setClipboardData']({ 'data': hkspl4, 'success': function (pxltf) {
          console['log']('复制成功:', pxltf);
        } });
    } catch (gcba8q) {}
  }, pt4sxl['prototype']['rolePriceHandler'] = function ($1v7y6) {
    this['rolePriceData'] = JSON['parse']($1v7y6);switch (this['rolePriceData']['status']) {case 0x3e9:
        this['main']['box_2_lab_v_1']['text'] = (this['rolePriceData']['todayPrice'] || 0x0) + '/' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_v_2']['text'] = (this['rolePriceData']['allPrice'] || 0x0) + '/' + +this['tool']['data']['y'] + '元';break;case 0x3ea:
        break;case 0x3eb:
        break;}
  }, pt4sxl['prototype']['roleError'] = function () {}, pt4sxl['prototype']['boxListHandler'] = function () {
    var en3z5 = function (jiy6k) {
      var shjyik = $1y6v['boxlist'][jiy6k],
          z3w025 = new p_cdbq['demoui']['BoxItemUI']();z3w025['icon']['skin'] = shjyik['icon'], z3w025['title']['text'] = shjyik['title'], z3w025['x'] = 0xa0 * (jiy6k % 0x3), z3w025['y'] = 0xa0 * (jiy6k / 0x3 ^ 0x0), $1y6v['main']['box_3_panel']['addChild'](z3w025);var xf_tl = { 'appid': p_jh$kyi['sygame']['appid'], 'game_id': shjyik['game_id'], 'jump_appid': shjyik['jump_appid'], 'jump_path': shjyik['jump_path'], 'tunnel_id': shjyik['tunnel_id'], 'uv': 0x0, 'wecha_id': p_jh$kyi['sygame']['openid'] },
          cqg8ba = shjyik['preview_img'],
          vrz = shjyik['jump_type'],
          mtx_u = shjyik['kf_session'];z3w025['on'](Laya['Event']['CLICK'], $1y6v, function () {
        p_r21v67 && p_r21v67['syClickBox']({ 'game_id': shjyik['game_id'], 'tunnel_id': shjyik['tunnel_id'], 'jump_appid': shjyik['jump_appid'], 'jump_path': shjyik['jump_path'] })['then'](function (l4t) {
          if (vrz === '0') wx['navigateToMiniProgram']({ 'appId': xf_tl['jump_appid'], 'path': xf_tl['jump_path'], 'fail': function (fl_utx) {
              if (!cqg8ba) return;wx['previewImage']({ 'urls': [cqg8ba] });
            } });else {
            if (vrz === '1') {
              if (!cqg8ba) return;wx['previewImage']({ 'urls': [cqg8ba] });
            } else {
              if (vrz === '2') {
                if (!mtx_u) return;wx['openCustomerServiceConversation']({ 'sessionFrom': mtx_u, 'showMessageCard': !![], 'sendMessageTitle': '', 'sendMessagePath': '', 'sendMessageImg': '' });
              }
            }
          }
        });
      });
    },
        $1y6v = this;for (var flput = 0x0; flput < this['boxlist']['length']; flput++) {
      en3z5(flput);
    }
  }, pt4sxl['prototype']['boxListError'] = function () {}, pt4sxl['prototype']['boxClickHandler'] = function () {}, pt4sxl['prototype']['iconPress'] = function (bne89q) {
    this['donwX'] = bne89q['target']['x'], this['donwY'] = bne89q['target']['y'], this['icon']['startDrag'](this['dragRect']), this['isMove'] = ![], this['isPress'] = !![];
  }, pt4sxl['prototype']['iconMove'] = function (y$7v16) {
    this['isMove'] = !![];
  }, pt4sxl['prototype']['iconUp'] = function (_xtfl) {
    var abq9e = _xtfl['target']['x'],
        m_fo = _xtfl['target']['y'];this['icon']['stopDrag'](), abq9e == this['donwX'] && this['donwY'] == m_fo && (this['isInitBoard'] || this['initBoard'](), this['showBoard']()), this['isMove'] = ![], this['isPress'] = ![];
  }, pt4sxl;
}(),
    p_cdbq;(function (rv671) {
  var _fux;(function (q8n59e) {
    var omuf_ = function (tsx4p) {
      p_lftx(tplf, tsx4p);function tplf() {
        return tsx4p['call'](this) || this;
      }return tplf['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), tsx4p['prototype']['createChildren']['call'](this), this['createView'](rv671['demoui']['BoxItemUI']['uiView']);
      }, tplf['uiView'] = { 'type': 'View', 'props': { 'width': 0xb4, 'height': 0xa0 }, 'child': [{ 'type': 'Image', 'props': { 'y': 0x3, 'x': 0x20, 'width': 0x73, 'var': 'icon', 'height': 0x73 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x79, 'x': -0x21, 'width': 0xb4, 'var': 'title', 'valign': 'middle', 'height': 0x22, 'fontSize': 0x16, 'color': '#441d1c', 'align': 'center' } }] }] }, tplf;
    }(laya['ui']['View']);q8n59e['BoxItemUI'] = omuf_;
  })(_fux = rv671['demoui'] || (rv671['demoui'] = {}));
})(p_cdbq || (p_cdbq = {})), function (j6kiy$) {
  var syjhik;(function (sl4hp) {
    var w5e3zn = function (jyhki$) {
      p_lftx(yvi, jyhki$);function yvi() {
        return jyhki$['call'](this) || this;
      }return yvi['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), jyhki$['prototype']['createChildren']['call'](this), this['createView'](j6kiy$['demoui']['MainUI']['uiView']);
      }, yvi['uiView'] = { 'type': 'View', 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x2ee, 'top': 0x0, 'right': 0x0, 'left': 0x0, 'height': 0x536, 'bottom': 0x0 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x2ee, 'height': 0x536, 'centerY': 0x0 }, 'child': [{ 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x2ee, 'var': 'bg', 'height': 0x536 }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x2ee, 'visible': ![], 'var': 'box_1_show', 'height': 0x536, 'centerY': 0x0 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x253, 'x': 0x2e, 'width': 0x1d0, 'var': 'box_1_lab_info', 'leading': 0xa, 'height': 0x97, 'fontSize': 0x18, 'color': '#a959ee' } }, { 'type': 'HBox', 'props': { 'y': 0x2ee, 'x': 0x14, 'width': 0x1fe, 'space': 0x35, 'height': 0x78, 'align': 'top' }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x58, 'var': 'box_1_img_1', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_1', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0xa, 'x': 0xa, 'width': 0x58, 'var': 'box_1_img_2', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_2', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x14, 'x': 0x14, 'width': 0x58, 'var': 'box_1_img_3', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_3', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x1e, 'x': 0x1e, 'width': 0x58, 'var': 'box_1_img_4', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_4', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }] }] }, { 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'visible': ![], 'var': 'box_2_show' }, 'child': [{ 'type': 'HBox', 'props': { 'y': 0x220, 'x': 0x18, 'width': 0x1f4, 'space': 0x2c, 'height': 0x56, 'align': 'top' }, 'child': [{ 'type': 'Image', 'props': { 'y': 2.5, 'x': 0x0, 'width': 0x58, 'var': 'box_2_img_1', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_1', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0xc, 'x': 0xa, 'width': 0x58, 'var': 'box_2_img_2', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_2', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x16, 'x': 0x14, 'width': 0x58, 'var': 'box_2_img_3', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_3', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x20, 'x': 0x1e, 'width': 0x58, 'var': 'box_2_img_4', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_4', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x2a, 'x': 0x28, 'width': 0x58, 'var': 'box_2_img_5', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_5', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }] }, { 'type': 'Box', 'props': { 'y': 0x384, 'x': 0x0, 'width': 0x221, 'height': 0x44 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x0, 'x': 0x28, 'width': 0x122, 'var': 'box_2_lab_m_1', 'text': '方法一\uFF1A单日充值1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300' } }, { 'type': 'Text', 'props': { 'y': 0x1e, 'x': 0x28, 'width': 0x122, 'var': 'box_2_lab_m_2', 'text': '方法一\uFF1A历史累计充值1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300' } }, { 'type': 'Text', 'props': { 'y': 0x0, 'x': 0x141, 'width': 0xa4, 'var': 'box_2_lab_v_1', 'text': '1000/1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300', 'align': 'right' } }, { 'type': 'Text', 'props': { 'y': 0x1e, 'x': 0x141, 'width': 0xa4, 'var': 'box_2_lab_v_2', 'text': '1000/1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300', 'align': 'right' } }] }, { 'type': 'Image', 'props': { 'y': 0x1aa, 'x': 0x159, 'width': 0x66, 'var': 'box_2_btn_get', 'stateNum': 0x1, 'height': 0x26 } }, { 'type': 'Image', 'props': { 'y': 0x1aa, 'x': 0x159, 'width': 0x66, 'var': 'box_2_btn_copy', 'stateNum': 0x1, 'height': 0x26 } }, { 'type': 'Button', 'props': { 'y': 0x1d2, 'x': 0x126, 'width': 0xc9, 'var': 'box_2_addclick', 'stateNum': 0x1, 'height': 0x1b } }, { 'type': 'Text', 'props': { 'y': 0x13c, 'x': 0x17a, 'width': 0xa3, 'var': 'box_2_lab_wx', 'height': 0x1f, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'left' } }] }, { 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'visible': ![], 'var': 'box_3_show' }, 'child': [{ 'type': 'Panel', 'props': { 'y': 0xf5, 'x': 0x10, 'width': 0x201, 'var': 'box_3_panel', 'vScrollBarSkin': '', 'height': 0x29e } }] }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0x0, 'width': 0xbb, 'var': 'btn_1', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0xba, 'width': 0xbb, 'var': 'btn_2', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0x177, 'width': 0xbb, 'var': 'btn_3', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x203, 'x': 0x22e, 'width': 0x25, 'var': 'btn_close', 'height': 0x8f } }, { 'type': 'Box', 'props': { 'width': 0x2ee, 'visible': ![], 'var': 'box_help', 'height': 0x536 }, 'child': [{ 'type': 'Sprite', 'props': { 'y': 0x0, 'x': 0x0, 'mouseThrough': ![], 'alpha': 0.7 }, 'child': [{ 'type': 'Rect', 'props': { 'width': 0x2ee, 'lineWidth': 0x1, 'height': 0x536, 'fillColor': '#000000' } }] }, { 'type': 'Image', 'props': { 'y': 0x158, 'x': 0x28, 'width': 0x1d2, 'var': 'box_help_bg', 'height': 0x203 }, 'child': [{ 'type': 'Button', 'props': { 'y': -0x1, 'x': 0x1a0, 'width': 0x33, 'var': 'box_help_close', 'height': 0x28 } }, { 'type': 'Image', 'props': { 'y': 0x3f, 'x': 0x98, 'width': 0xa0, 'var': 'box_help_qrcode', 'height': 0xa0 } }] }] }] }] }] }, yvi;
    }(laya['ui']['View']);sl4hp['MainUI'] = w5e3zn;
  })(syjhik = j6kiy$['demoui'] || (j6kiy$['demoui'] = {}));
}(p_cdbq || (p_cdbq = {})), function (ea8q9) {
  var qcdbga;(function (n9be8) {
    var hsikyj = function (nz3w) {
      p_lftx(slthp4, nz3w);function slthp4() {
        return nz3w['call'](this) || this;
      }return slthp4['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), nz3w['prototype']['createChildren']['call'](this), this['createView'](ea8q9['demoui']['ToastUI']['uiView']);
      }, slthp4['uiView'] = { 'type': 'View', 'props': { 'width': 0x2ee, 'height': 0x536 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x12c, 'height': 0x32, 'centerY': 0x0, 'centerX': 0x0 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x12c, 'height': 0x32, 'centerX': 0x0, 'alpha': 0.5 }, 'child': [{ 'type': 'Rect', 'props': { 'width': 0x12c, 'lineWidth': 0x1, 'height': 0x32, 'fillColor': '#382f2f' } }] }, { 'type': 'Text', 'props': { 'width': 0x12c, 'var': 'lab_msg', 'valign': 'middle', 'text': 'text', 'height': 0x32, 'fontSize': 0x18, 'color': '#ffffff', 'align': 'center' } }] }] }, slthp4;
    }(laya['ui']['View']);n9be8['ToastUI'] = hsikyj;
  })(qcdbga = ea8q9['demoui'] || (ea8q9['demoui'] = {}));
}(p_cdbq || (p_cdbq = {}));var p_hkp4js = function () {
  function tx4pul() {}return tx4pul['init'] = function () {
    !this['ui'] && (this['ui'] = new p_cdbq['demoui']['ToastUI'](), this['ui']['visible'] = ![], Laya['stage']['addChild'](this['ui']));
  }, tx4pul['msg'] = function (yjskhi) {
    var psxlt4 = this;!this['ui'] && tx4pul['init'](), this['ui']['visible'] = !![], this['ui']['lab_msg']['text'] = yjskhi, clearTimeout(this['interval']), this['interval'] = setTimeout(function () {
      psxlt4['ui']['visible'] = ![];
    }, 0x7d0);
  }, tx4pul;
}();window['minitool'] = p_eq8b9n;