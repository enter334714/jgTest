var I = wx.$R;
var r_bu_h = this && this['__extends'] || function () {
  var hn5f = function (au1_6, ji2oz) {
    return hn5f = Object['setPrototypeOf'] || { '__proto__': [] } instanceof Array && function (s3ltvz, ijxs) {
      s3ltvz['__proto__'] = ijxs;
    } || function (oykw8, pdef) {
      for (var ko8iyj in pdef) if (pdef['hasOwnProperty'](ko8iyj)) oykw8[ko8iyj] = pdef[ko8iyj];
    }, hn5f(au1_6, ji2oz);
  };return function (oijz2x, ah1u) {
    hn5f(oijz2x, ah1u);function jzio() {
      this['constructor'] = oijz2x;
    }oijz2x['prototype'] = ah1u === null ? Object['create'](ah1u) : (jzio['prototype'] = ah1u['prototype'], new jzio());
  };
}(),
    r_yo2jxi = window['Sygame'],
    r_fqegpd = ![],
    r_ts3v0l = function () {
  function dfpgq() {}return dfpgq['init'] = function () {
    r_fqegpd ? this['sygame'] = { 'channel': '3477d2273abd484ba2a0e04ad4971b3c', 'role_id': undefined, 'openid': 'oxmOf5biumkGash-Xht9FVAlswVk', 'appid': 'wx2936121c4817bf46' } : this['sygame'] = r_yo2jxi;
  }, dfpgq['getTimeStamp'] = function () {
    return new Date()['getTime']();
  }, dfpgq['setResMap'] = function (fdgeq, n6fcd) {
    this['resMap'][fdgeq] = fdgeq + '?' + n6fcd;
  }, dfpgq['getResMap'] = function (ndfpqe) {
    return this['resMap'][ndfpqe];
  }, dfpgq['resMap'] = {}, dfpgq;
}(),
    r_ki8y = function () {
  function t0l3() {
    this['getIcon'] = 'https://wx.11babay.cn/uploads/f/fkccc1532944783/5/2/c/7/60dc442c4fbc5.png', this['copyIcon'] = 'https://wx.11babay.cn/uploads/f/fkccc1532944783/3/0/1/7/60dc4409dce39.png', r_ts3v0l['init'](), this['getBoxCheckoutCode']();
  }return t0l3['prototype']['send'] = function (j2oxzi, jk8yoi, h1_5u6, m7gqr, r8kyw) {
    m7gqr === void 0x0 && (m7gqr = 'get');r8kyw === void 0x0 && (r8kyw = '' || null);var ykwm = new Laya['HttpRequest']();ykwm['http']['timeout'] = 0x2710, ykwm['once'](Laya['Event']['COMPLETE'], this, jk8yoi), ykwm['once'](Laya['Event']['ERROR'], this, h1_5u6), ykwm['send'](j2oxzi, r8kyw, m7gqr, 'text');
  }, t0l3['prototype']['postSidebarApi'] = function () {
    var ge7rqm = r_ts3v0l['sygame']['openid'],
        dp7qge = '&channel=' + r_ts3v0l['sygame']['channel'] + '&wecha_id=' + ge7rqm;this['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=sidebarApi' + dp7qge, this['completeHandler'], this['errorHandler']);
  }, t0l3['prototype']['getBoxCheckoutCode'] = function () {
    var depqf = Sygame['SY_CONF']['commitId'];this['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=getBoxCheckoutCode', this['getBoxCheckoutCodeRes'], this['errorHandler'], 'post', { 'commitId': depqf });
  }, t0l3['prototype']['getBoxCheckoutCodeRes'] = function (_$1u) {
    var cn5h6_ = JSON['parse'](_$1u);console['log']('getBoxCheckoutCode:', cn5h6_);if (cn5h6_['status'] == 0x3e9) {
      var x2jioy = cn5h6_['info'];x2jioy == 0xfa1 ? this['postSidebarApi']() : console['error']('盛也盒子\x20不显示' + cn5h6_);
    } else console['error']('盛也盒子 getBoxCheckoutCodeRes 其他错误' + cn5h6_);
  }, t0l3['prototype']['completeHandler'] = function (ryk) {
    var fc5pdn = JSON['parse'](ryk);console['log'](fc5pdn);switch (fc5pdn['status']) {case 0x3e9:
        var zjiox2 = [];fc5pdn['msg']['basics_image_url'] && zjiox2['push']({ 'url': fc5pdn['msg']['basics_image_url'], 'type': Laya['Loader']['IMAGE'] }), fc5pdn['msg']['public_code'] && zjiox2['push']({ 'url': fc5pdn['msg']['public_code'], 'type': Laya['Loader']['IMAGE'] }), fc5pdn['msg']['vip_customer_service'] && zjiox2['push']({ 'url': fc5pdn['msg']['vip_customer_service'], 'type': Laya['Loader']['IMAGE'] }), fc5pdn['msg']['vip_customer_service_not_add'] && zjiox2['push']({ 'url': fc5pdn['msg']['vip_customer_service_not_add'], 'type': Laya['Loader']['IMAGE'] }), fc5pdn['msg']['game_center_image_url'] && zjiox2['push']({ 'url': fc5pdn['msg']['game_center_image_url'], 'type': Laya['Loader']['IMAGE'] }), fc5pdn['msg']['vip_qrcode'] && zjiox2['push']({ 'url': fc5pdn['msg']['vip_qrcode'], 'type': Laya['Loader']['IMAGE'] }), fc5pdn['msg']['getIcon'] && zjiox2['push']({ 'url': this['getIcon'], 'type': Laya['Loader']['IMAGE'] }), fc5pdn['msg']['copyIcon'] && zjiox2['push']({ 'url': this['copyIcon'], 'type': Laya['Loader']['IMAGE'] });for (var dpeqn = 0x0, w8oiy = fc5pdn['msg']['follow_gift_list']; dpeqn < w8oiy['length']; dpeqn++) {
          var $_ab = w8oiy[dpeqn];zjiox2['push']({ 'url': $_ab['url'], 'type': Laya['Loader']['IMAGE'] });
        }for (var ixjsz = 0x0, rwgm = fc5pdn['msg']['vip_box_list']; ixjsz < rwgm['length']; ixjsz++) {
          var $_ab = rwgm[ixjsz];zjiox2['push']({ 'url': $_ab['url'], 'type': Laya['Loader']['IMAGE'] });
        }for (var pdqnfe = 0x0; pdqnfe < zjiox2['length']; pdqnfe++) {
          r_ts3v0l['setResMap'](zjiox2[pdqnfe]['url'], r_ts3v0l['getTimeStamp']()), zjiox2[pdqnfe]['url'] = r_ts3v0l['getResMap'](zjiox2[pdqnfe]['url']);
        }Laya['loader']['load'](zjiox2, Laya['Handler']['create'](this, this['initGame'])), this['data'] = fc5pdn['msg'];break;case 0x3ea:
        r_ijsz['msg']('空的游戏channel');break;case 0x3eb:
        r_ijsz['msg']('错误的游戏channel');break;case 0x3ec:
        r_ijsz['msg']('未找到对应游戏大类');break;case 0x3ed:
        r_ijsz['msg']('未设置侧边栏');break;}
  }, t0l3['prototype']['errorHandler'] = function (mrwy) {}, t0l3['prototype']['initGame'] = function () {
    var c5fh6n = new r_krw7gm(this);c5fh6n['show']();
  }, t0l3;
}(),
    r_krw7gm = function () {
  function v30stl(oiwy8) {
    this['page'] = 0x3, this['rolePriceData'] = {}, this['boxlist'] = [], this['donwX'] = 0x0, this['downY'] = 0x0, this['tool'] = oiwy8;
  }return v30stl['prototype']['setChildMouseThroughs'] = function (nh65c_) {
    var sjizx = nh65c_['_childs'] || [];for (var oy8j = 0x0; oy8j < sjizx['length']; oy8j++) {
      sjizx[oy8j] && (sjizx[oy8j]['mouseThrough'] = !![]);
    }
  }, v30stl['prototype']['show'] = function () {
    if (this['tool']['data']['on'] === '1') {
      this['main'] = new r_au1b9['demoui']['MainUI'](), Laya['stage']['addChild'](this['main']), this['main']['mouseThrough'] = !![];var uc5_h6 = this['main']['_childs'] || [];for (var rgp7q = 0x0; rgp7q < uc5_h6['length']; rgp7q++) {
        uc5_h6[rgp7q]['mouseThrough'] = !![];
      }this['setChildMouseThroughs'](this['main']['_childs']), this['setChildMouseThroughs'](this['main']['_childs'][0x0]), this['initIcon'](), this['initEvent'](), this['initView'](), r_ijsz['init'](), this['main']['bg']['x'] = -0x2ee;
    }
  }, v30stl['prototype']['initView'] = function () {
    var k8iw = this,
        wmkg = this['tool']['data']['follow_down_words']['replace'](/\\n/g, '\x0a');this['main']['box_1_lab_info']['text'] = wmkg;for (var b$a1u = 0x1; b$a1u <= this['tool']['data']['follow_gift_list']['length']; b$a1u++) {
      var _6h5cu = this['tool']['data']['follow_gift_list'][b$a1u - 0x1];this['main']['box_1_img_' + b$a1u]['skin'] = _6h5cu['url'], this['main']['box_1_lab_' + b$a1u]['text'] = _6h5cu['name'];
    }for (var b$a1u = 0x1; b$a1u <= this['tool']['data']['vip_box_list']['length']; b$a1u++) {
      var _6h5cu = this['tool']['data']['vip_box_list'][b$a1u - 0x1];this['main']['box_2_img_' + b$a1u]['skin'] = _6h5cu['url'], this['main']['box_2_lab_' + b$a1u]['text'] = _6h5cu['name'];
    }this['main']['box_2_lab_m_1']['text'] = '方法一：单日充值' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_m_2']['text'] = '方法二：历史累计充值' + +this['tool']['data']['y'] + '元', this['main']['box_2_lab_v_1']['text'] = (this['rolePriceData']['todayPrice'] || 0x0) + '/' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_v_2']['text'] = (this['rolePriceData']['allPrice'] || 0x0) + '/' + +this['tool']['data']['y'] + '元', this['main']['box_2_btn_copy']['skin'] = this['tool']['copyIcon'], this['main']['box_2_btn_get']['skin'] = this['tool']['getIcon'], this['main']['box_2_btn_copy']['visible'] = ![], this['main']['box_2_btn_get']['on'](Laya['Event']['CLICK'], this, function () {
      if (k8iw['rolePriceData']['is_vip'] == 0x0) {
        r_ijsz['msg']('请先获取vip资格');return;
      }k8iw['main']['box_2_lab_wx']['text'] = this['rolePriceData']['vip_wx'], k8iw['main']['box_2_btn_copy']['visible'] = !![];
    }), this['main']['box_2_btn_copy']['on'](Laya['Event']['CLICK'], this, function () {
      k8iw['copyText'](this['rolePriceData']['vip_wx']);
    }), this['main']['box_2_addclick']['on'](Laya['Event']['CLICK'], this, function () {
      if (k8iw['rolePriceData']['is_vip'] == 0x0) return;this['main']['box_help_qrcode']['skin'] = k8iw['rolePriceData']['vip_qrcode'], k8iw['main']['box_help']['visible'] = !![];
    }), this['main']['box_help_close']['on'](Laya['Event']['CLICK'], this, function () {
      k8iw['main']['box_help']['visible'] = ![];
    }), this['main']['box_help_bg']['skin'] = this['tool']['data']['vip_customer_service_not_add'], this['main']['box_help_qrcode']['skin'] = k8iw['rolePriceData']['vip_qrcode'], this['main']['box_help_qrcode']['scaleX'] = 0xa0 / this['main']['box_help_qrcode']['width'], this['main']['box_help_qrcode']['scaleY'] = 0xa0 / this['main']['box_help_qrcode']['width'], this['main']['box_3_panel']['vScrollBar']['visible'] = ![], this['main']['box_3_panel']['vScrollBarSkin'] = 'common_atlas/scrollBar.png';
  }, v30stl['prototype']['initIcon'] = function () {
    this['icon'] = new Laya['Image'](), this['icon']['skin'] = this['tool']['data']['basics_image_url'], this['icon']['x'] = 0x0, this['icon']['y'] = 0xc8, this['icon']['width'] = 0x66, this['icon']['height'] = 0x6f, this['main']['addChild'](this['icon']), this['icon']['on'](Laya['Event']['MOUSE_DOWN'], this, this['iconPress']), this['icon']['on'](Laya['Event']['MOUSE_UP'], this, this['iconUp']), this['icon']['on'](Laya['Event']['MOUSE_WHEEL'], this, this['iconMove']), this['dragRect'] = new Laya['Rectangle'](-this['icon']['width'] / 0x2, 0x0, Laya['stage']['width'], Laya['stage']['height'] - this['icon']['height'] / 0x2);
  }, v30stl['prototype']['initEvent'] = function () {
    var _6c5n = this;this['main']['btn_1']['on'](Laya['Event']['CLICK'], this, function () {
      if (_6c5n['page'] == 0x1) return;_6c5n['page1']();
    }), this['main']['btn_2']['on'](Laya['Event']['CLICK'], this, function () {
      if (_6c5n['page'] == 0x2) return;_6c5n['page2']();
    }), this['main']['btn_3']['on'](Laya['Event']['CLICK'], this, function () {
      if (_6c5n['page'] == 0x3) return;_6c5n['page3']();
    }), this['main']['btn_close']['on'](Laya['Event']['CLICK'], this, function () {
      _6c5n['main']['bg']['x'] = -0x2ee, _6c5n['icon']['visible'] = !![];
    });
  }, v30stl['prototype']['initBoard'] = function () {
    this['isInitBoard'] = !![], this['page1']();
  }, v30stl['prototype']['showBoard'] = function () {
    this['main']['bg']['x'] = 0x0, this['icon']['visible'] = ![];var b49$a = _rYE['selectedServer']['server_id'],
        j8xyoi = _rYE['selectedServer']['server_name'],
        wkm7gr = _rYE['roleId'],
        j2iozx = _rYE['roleName'],
        yo8wm = r_ts3v0l['sygame']['openid'],
        y8joik = '&role_id=' + r_ts3v0l['sygame']['role_id'] + '&channel=' + r_ts3v0l['sygame']['channel'] + '&server_id=' + b49$a + '&server_name=' + j8xyoi + '&wecha_id=' + yo8wm + '&role_id=' + wkm7gr + '&role_name=' + j2iozx;this['tool']['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=sidebarApiRoleId' + y8joik, this['rolePriceHandler']['bind'](this), this['roleError']['bind'](this));
  }, v30stl['prototype']['page1'] = function () {
    if(!v30stl.prototype.page1Bg){
      v30stl.prototype.page1Bg = new Laya.Image(this.tool.data.public_code);
      this.main.bg.addChildAt(v30stl.prototype.page1Bg,0)
  }
  if(v30stl.prototype.page1Bg) v30stl.prototype.page1Bg.visible = true; 
  if(v30stl.prototype.page2Bg) v30stl.prototype.page2Bg.visible = false; 
  if(v30stl.prototype.page3Bg) v30stl.prototype.page3Bg.visible = false;  
    this['page'] = 0x1,this['main']['box_1_show']['visible'] = !![], this['main']['box_2_show']['visible'] = ![], this['main']['box_3_show']['visible'] = ![];
  }, v30stl['prototype']['page2'] = function () {
    if(!v30stl.prototype.page2Bg){
      v30stl.prototype.page2Bg = new Laya.Image(this.tool.data.vip_customer_service);
      this.main.bg.addChildAt(v30stl.prototype.page2Bg,0)
  }
  if(v30stl.prototype.page1Bg) v30stl.prototype.page1Bg.visible = false; 
  if(v30stl.prototype.page2Bg) v30stl.prototype.page2Bg.visible = true; 
  if(v30stl.prototype.page3Bg) v30stl.prototype.page3Bg.visible = false;    
    this['page'] = 0x2, this['main']['box_1_show']['visible'] = ![], this['main']['box_2_show']['visible'] = !![], this['main']['box_3_show']['visible'] = ![];
  }, v30stl['prototype']['page3'] = function () {
    if(!v30stl.prototype.page3Bg){
      v30stl.prototype.page3Bg = new Laya.Image(this.tool.data.game_center_image_url);
      this.main.bg.addChildAt(v30stl.prototype.page3Bg,0)
  }
  if(v30stl.prototype.page1Bg) v30stl.prototype.page1Bg.visible = false; 
  if(v30stl.prototype.page2Bg) v30stl.prototype.page2Bg.visible = false; 
  if(v30stl.prototype.page3Bg) v30stl.prototype.page3Bg.visible = true;    
    this['page'] = 0x3,  this['main']['box_1_show']['visible'] = ![], this['main']['box_2_show']['visible'] = ![], this['main']['box_3_show']['visible'] = !![], this['sendBox'] || this['getBoxList'](0x0), this['sendBox'] = !![], r_yo2jxi && r_yo2jxi['syClickOpenBox']();
  }, v30stl['prototype']['getBoxList'] = function (ahu1_b) {
    var m7wkgr = this;r_yo2jxi && r_yo2jxi['syGetBoxList']({ 'page': ahu1_b, 'count': 0xc })['then'](function (s2jtx) {
      var egp7dq = s2jtx['data'];egp7dq['status'] == 0x3e9 ? egp7dq['data'] && egp7dq['data']['length'] && (m7wkgr['boxlist'] = m7wkgr['boxlist']['concat'](egp7dq['data']), ahu1_b++, m7wkgr['getBoxList'](ahu1_b)) : m7wkgr['boxListHandler']();
    });
  }, v30stl['prototype']['copyText'] = function (a1_u$) {
    try {
      wx['setClipboardData']({ 'data': a1_u$, 'success': function (w78mk) {
          console['log']('复制成功:', w78mk);
        } });
    } catch (_bu$) {}
  }, v30stl['prototype']['rolePriceHandler'] = function (yokm8) {
    this['rolePriceData'] = JSON['parse'](yokm8);switch (this['rolePriceData']['status']) {case 0x3e9:
        this['main']['box_2_lab_v_1']['text'] = (this['rolePriceData']['todayPrice'] || 0x0) + '/' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_v_2']['text'] = (this['rolePriceData']['allPrice'] || 0x0) + '/' + +this['tool']['data']['y'] + '元';break;case 0x3ea:
        break;case 0x3eb:
        break;}
  }, v30stl['prototype']['roleError'] = function () {}, v30stl['prototype']['boxListHandler'] = function () {
    var o8kyiw = function (gdqp7) {
      var feqp = $b_['boxlist'][gdqp7],
          zvl3t = new r_au1b9['demoui']['BoxItemUI']();zvl3t['icon']['skin'] = feqp['icon'], zvl3t['title']['text'] = feqp['title'], zvl3t['x'] = 0xa0 * (gdqp7 % 0x3), zvl3t['y'] = 0xa0 * (gdqp7 / 0x3 ^ 0x0), $b_['main']['box_3_panel']['addChild'](zvl3t);var xjyoi8 = { 'appid': r_ts3v0l['sygame']['appid'], 'game_id': feqp['game_id'], 'jump_appid': feqp['jump_appid'], 'jump_path': feqp['jump_path'], 'tunnel_id': feqp['tunnel_id'], 'uv': 0x0, 'wecha_id': r_ts3v0l['sygame']['openid'] },
          w8ykrm = feqp['preview_img'],
          r7mkw8 = feqp['jump_type'],
          w7ergm = feqp['kf_session'];zvl3t['on'](Laya['Event']['CLICK'], $b_, function () {
        r_yo2jxi && r_yo2jxi['syClickBox']({ 'game_id': feqp['game_id'], 'tunnel_id': feqp['tunnel_id'], 'jump_appid': feqp['jump_appid'], 'jump_path': feqp['jump_path'] })['then'](function (izoj) {
          if (r7mkw8 === '0') wx['navigateToMiniProgram']({ 'appId': xjyoi8['jump_appid'], 'path': xjyoi8['jump_path'], 'fail': function (b_1$u) {
              if (!w8ykrm) return;wx['previewImage']({ 'urls': [w8ykrm] });
            } });else {
            if (r7mkw8 === '1') {
              if (!w8ykrm) return;wx['previewImage']({ 'urls': [w8ykrm] });
            } else {
              if (r7mkw8 === '2') {
                if (!w7ergm) return;wx['openCustomerServiceConversation']({ 'sessionFrom': w7ergm, 'showMessageCard': !![], 'sendMessageTitle': '', 'sendMessagePath': '', 'sendMessageImg': '' });
              }
            }
          }
        });
      });
    },
        $b_ = this;for (var gew7mr = 0x0; gew7mr < this['boxlist']['length']; gew7mr++) {
      o8kyiw(gew7mr);
    }
  }, v30stl['prototype']['boxListError'] = function () {}, v30stl['prototype']['boxClickHandler'] = function () {}, v30stl['prototype']['iconPress'] = function (n_56h) {
    this['donwX'] = n_56h['target']['x'], this['donwY'] = n_56h['target']['y'], this['icon']['startDrag'](this['dragRect']), this['isMove'] = ![], this['isPress'] = !![];
  }, v30stl['prototype']['iconMove'] = function (epqndf) {
    this['isMove'] = !![];
  }, v30stl['prototype']['iconUp'] = function (qdpg) {
    var u1_65 = qdpg['target']['x'],
        $_ = qdpg['target']['y'];this['icon']['stopDrag'](), u1_65 == this['donwX'] && this['donwY'] == $_ && (this['isInitBoard'] || this['initBoard'](), this['showBoard']()), this['isMove'] = ![], this['isPress'] = ![];
  }, v30stl;
}(),
    r_au1b9;(function (c56h_n) {
  var h65_uc;(function (kwgr7m) {
    var u$a9b = function (k8io) {
      r_bu_h(fpcdn, k8io);function fpcdn() {
        return k8io['call'](this) || this;
      }return fpcdn['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), k8io['prototype']['createChildren']['call'](this), this['createView'](c56h_n['demoui']['BoxItemUI']['uiView']);
      }, fpcdn['uiView'] = { 'type': 'View', 'props': { 'width': 0xb4, 'height': 0xa0 }, 'child': [{ 'type': 'Image', 'props': { 'y': 0x3, 'x': 0x20, 'width': 0x73, 'var': 'icon', 'height': 0x73 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x79, 'x': -0x21, 'width': 0xb4, 'var': 'title', 'valign': 'middle', 'height': 0x22, 'fontSize': 0x16, 'color': '#441d1c', 'align': 'center' } }] }] }, fpcdn;
    }(laya['ui']['View']);kwgr7m['BoxItemUI'] = u$a9b;
  })(h65_uc = c56h_n['demoui'] || (c56h_n['demoui'] = {}));
})(r_au1b9 || (r_au1b9 = {})), function (q7d) {
  var yox2j;(function (hn_6c5) {
    var iyxj8o = function (_cu6h) {
      r_bu_h(yixo8j, _cu6h);function yixo8j() {
        return _cu6h['call'](this) || this;
      }return yixo8j['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), _cu6h['prototype']['createChildren']['call'](this), this['createView'](q7d['demoui']['MainUI']['uiView']);
      }, yixo8j['uiView'] = { 'type': 'View', 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x2ee, 'top': 0x0, 'right': 0x0, 'left': 0x0, 'height': 0x536, 'bottom': 0x0 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x2ee, 'height': 0x536, 'centerY': 0x0 }, 'child': [{ 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x2ee, 'var': 'bg', 'height': 0x536 }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x2ee, 'visible': ![], 'var': 'box_1_show', 'height': 0x536, 'centerY': 0x0 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x253, 'x': 0x2e, 'width': 0x1d0, 'var': 'box_1_lab_info', 'leading': 0xa, 'height': 0x97, 'fontSize': 0x18, 'color': '#a959ee' } }, { 'type': 'HBox', 'props': { 'y': 0x2ee, 'x': 0x14, 'width': 0x1fe, 'space': 0x35, 'height': 0x78, 'align': 'top' }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x58, 'var': 'box_1_img_1', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_1', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0xa, 'x': 0xa, 'width': 0x58, 'var': 'box_1_img_2', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_2', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x14, 'x': 0x14, 'width': 0x58, 'var': 'box_1_img_3', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_3', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x1e, 'x': 0x1e, 'width': 0x58, 'var': 'box_1_img_4', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_4', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }] }] }, { 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'visible': ![], 'var': 'box_2_show' }, 'child': [{ 'type': 'HBox', 'props': { 'y': 0x220, 'x': 0x18, 'width': 0x1f4, 'space': 0x2c, 'height': 0x56, 'align': 'top' }, 'child': [{ 'type': 'Image', 'props': { 'y': 2.5, 'x': 0x0, 'width': 0x58, 'var': 'box_2_img_1', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_1', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0xc, 'x': 0xa, 'width': 0x58, 'var': 'box_2_img_2', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_2', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x16, 'x': 0x14, 'width': 0x58, 'var': 'box_2_img_3', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_3', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x20, 'x': 0x1e, 'width': 0x58, 'var': 'box_2_img_4', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_4', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x2a, 'x': 0x28, 'width': 0x58, 'var': 'box_2_img_5', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_5', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }] }, { 'type': 'Box', 'props': { 'y': 0x384, 'x': 0x0, 'width': 0x221, 'height': 0x44 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x0, 'x': 0x28, 'width': 0x122, 'var': 'box_2_lab_m_1', 'text': '方法一\uFF1A单日充值1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300' } }, { 'type': 'Text', 'props': { 'y': 0x1e, 'x': 0x28, 'width': 0x122, 'var': 'box_2_lab_m_2', 'text': '方法一\uFF1A历史累计充值1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300' } }, { 'type': 'Text', 'props': { 'y': 0x0, 'x': 0x141, 'width': 0xa4, 'var': 'box_2_lab_v_1', 'text': '1000/1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300', 'align': 'right' } }, { 'type': 'Text', 'props': { 'y': 0x1e, 'x': 0x141, 'width': 0xa4, 'var': 'box_2_lab_v_2', 'text': '1000/1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300', 'align': 'right' } }] }, { 'type': 'Image', 'props': { 'y': 0x1aa, 'x': 0x159, 'width': 0x66, 'var': 'box_2_btn_get', 'stateNum': 0x1, 'height': 0x26 } }, { 'type': 'Image', 'props': { 'y': 0x1aa, 'x': 0x159, 'width': 0x66, 'var': 'box_2_btn_copy', 'stateNum': 0x1, 'height': 0x26 } }, { 'type': 'Button', 'props': { 'y': 0x1d2, 'x': 0x126, 'width': 0xc9, 'var': 'box_2_addclick', 'stateNum': 0x1, 'height': 0x1b } }, { 'type': 'Text', 'props': { 'y': 0x13c, 'x': 0x17a, 'width': 0xa3, 'var': 'box_2_lab_wx', 'height': 0x1f, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'left' } }] }, { 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'visible': ![], 'var': 'box_3_show' }, 'child': [{ 'type': 'Panel', 'props': { 'y': 0xf5, 'x': 0x10, 'width': 0x201, 'var': 'box_3_panel', 'vScrollBarSkin': '', 'height': 0x29e } }] }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0x0, 'width': 0xbb, 'var': 'btn_1', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0xba, 'width': 0xbb, 'var': 'btn_2', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0x177, 'width': 0xbb, 'var': 'btn_3', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x203, 'x': 0x22e, 'width': 0x25, 'var': 'btn_close', 'height': 0x8f } }, { 'type': 'Box', 'props': { 'width': 0x2ee, 'visible': ![], 'var': 'box_help', 'height': 0x536 }, 'child': [{ 'type': 'Sprite', 'props': { 'y': 0x0, 'x': 0x0, 'mouseThrough': ![], 'alpha': 0.7 }, 'child': [{ 'type': 'Rect', 'props': { 'width': 0x2ee, 'lineWidth': 0x1, 'height': 0x536, 'fillColor': '#000000' } }] }, { 'type': 'Image', 'props': { 'y': 0x158, 'x': 0x28, 'width': 0x1d2, 'var': 'box_help_bg', 'height': 0x203 }, 'child': [{ 'type': 'Button', 'props': { 'y': -0x1, 'x': 0x1a0, 'width': 0x33, 'var': 'box_help_close', 'height': 0x28 } }, { 'type': 'Image', 'props': { 'y': 0x3f, 'x': 0x98, 'width': 0xa0, 'var': 'box_help_qrcode', 'height': 0xa0 } }] }] }] }] }] }, yixo8j;
    }(laya['ui']['View']);hn_6c5['MainUI'] = iyxj8o;
  })(yox2j = q7d['demoui'] || (q7d['demoui'] = {}));
}(r_au1b9 || (r_au1b9 = {})), function (mr8kw7) {
  var qmr;(function (wk7gr) {
    var wemg7r = function (gmkwr) {
      r_bu_h(ewm7, gmkwr);function ewm7() {
        return gmkwr['call'](this) || this;
      }return ewm7['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), gmkwr['prototype']['createChildren']['call'](this), this['createView'](mr8kw7['demoui']['ToastUI']['uiView']);
      }, ewm7['uiView'] = { 'type': 'View', 'props': { 'width': 0x2ee, 'height': 0x536 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x12c, 'height': 0x32, 'centerY': 0x0, 'centerX': 0x0 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x12c, 'height': 0x32, 'centerX': 0x0, 'alpha': 0.5 }, 'child': [{ 'type': 'Rect', 'props': { 'width': 0x12c, 'lineWidth': 0x1, 'height': 0x32, 'fillColor': '#382f2f' } }] }, { 'type': 'Text', 'props': { 'width': 0x12c, 'var': 'lab_msg', 'valign': 'middle', 'text': 'text', 'height': 0x32, 'fontSize': 0x18, 'color': '#ffffff', 'align': 'center' } }] }] }, ewm7;
    }(laya['ui']['View']);wk7gr['ToastUI'] = wemg7r;
  })(qmr = mr8kw7['demoui'] || (mr8kw7['demoui'] = {}));
}(r_au1b9 || (r_au1b9 = {}));var r_ijsz = function () {
  function zxs2jt() {}return zxs2jt['init'] = function () {
    !this['ui'] && (this['ui'] = new r_au1b9['demoui']['ToastUI'](), this['ui']['visible'] = ![], Laya['stage']['addChild'](this['ui']));
  }, zxs2jt['msg'] = function (oij8x) {
    var h6c5_n = this;!this['ui'] && zxs2jt['init'](), this['ui']['visible'] = !![], this['ui']['lab_msg']['text'] = oij8x, clearTimeout(this['interval']), this['interval'] = setTimeout(function () {
      h6c5_n['ui']['visible'] = ![];
    }, 0x7d0);
  }, zxs2jt;
}();window['minitool'] = r_ki8y;