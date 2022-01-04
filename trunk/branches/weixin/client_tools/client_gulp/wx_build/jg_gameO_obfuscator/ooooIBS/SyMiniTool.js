var c = wx.$o;
var o_adil = this && this['__extends'] || function () {
  var zogb8 = function (k_y$e0, $0eky) {
    return zogb8 = Object['setPrototypeOf'] || { '__proto__': [] } instanceof Array && function (smq57t, uye) {
      smq57t['__proto__'] = uye;
    } || function (n_lu3v, l6vn) {
      for (var t57qms in l6vn) if (l6vn['hasOwnProperty'](t57qms)) n_lu3v[t57qms] = l6vn[t57qms];
    }, zogb8(k_y$e0, $0eky);
  };return function (uyk_e0, ke0y_u) {
    zogb8(uyk_e0, ke0y_u);function coh8z() {
      this['constructor'] = uyk_e0;
    }uyk_e0['prototype'] = ke0y_u === null ? Object['create'](ke0y_u) : (coh8z['prototype'] = ke0y_u['prototype'], new coh8z());
  };
}(),
    o_qmtr5p = window['Sygame'],
    o_u3vn = ![],
    o_ai6d = function () {
  function tcpm() {}return tcpm['init'] = function () {
    o_u3vn ? this['sygame'] = { 'channel': '3477d2273abd484ba2a0e04ad4971b3c', 'role_id': undefined, 'openid': 'oxmOf5biumkGash-Xht9FVAlswVk', 'appid': 'wx2936121c4817bf46' } : this['sygame'] = o_qmtr5p;
  }, tcpm['getTimeStamp'] = function () {
    return new Date()['getTime']();
  }, tcpm['setResMap'] = function (qmt75, lid) {
    this['resMap'][qmt75] = qmt75 + '?' + lid;
  }, tcpm['getResMap'] = function (g4f9o) {
    return this['resMap'][g4f9o];
  }, tcpm['resMap'] = {}, tcpm;
}(),
    o_xb9o = function () {
  function bzchp() {
    this['getIcon'] = 'https://wx.11babay.cn/uploads/f/fkccc1532944783/5/2/c/7/60dc442c4fbc5.png', this['copyIcon'] = 'https://wx.11babay.cn/uploads/f/fkccc1532944783/3/0/1/7/60dc4409dce39.png', o_ai6d['init'](), this['getBoxCheckoutCode']();
  }return bzchp['prototype']['send'] = function (ul3nva, i1w26, i16w, w9f14x, og8z) {
    w9f14x === void 0x0 && (w9f14x = 'get');og8z === void 0x0 && (og8z = '' || null);var anl3v = new Laya['HttpRequest']();anl3v['http']['timeout'] = 0x2710, anl3v['once'](Laya['Event']['COMPLETE'], this, i1w26), anl3v['once'](Laya['Event']['ERROR'], this, i16w), anl3v['send'](ul3nva, og8z, w9f14x, 'text');
  }, bzchp['prototype']['postSidebarApi'] = function () {
    var d3vl = o_ai6d['sygame']['openid'],
        ho8gz = '&channel=' + o_ai6d['sygame']['channel'] + '&wecha_id=' + d3vl;this['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=sidebarApi' + ho8gz, this['completeHandler'], this['errorHandler']);
  }, bzchp['prototype']['getBoxCheckoutCode'] = function () {
    var zcrp8h = Sygame['SY_CONF']['commitId'];this['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=getBoxCheckoutCode', this['getBoxCheckoutCodeRes'], this['errorHandler'], 'post', { 'commitId': zcrp8h });
  }, bzchp['prototype']['getBoxCheckoutCodeRes'] = function (mrtcp) {
    var mpcz = JSON['parse'](mrtcp);console['log']('getBoxCheckoutCode:', mpcz);if (mpcz['status'] == 0x3e9) {
      var h8zcpb = mpcz['info'];h8zcpb == 0xfa1 ? this['postSidebarApi']() : console['error']('盛也盒子\x20不显示' + mpcz);
    } else console['error']('盛也盒子 getBoxCheckoutCodeRes 其他错误' + mpcz);
  }, bzchp['prototype']['completeHandler'] = function (id1w62) {
    var bhz8o = JSON['parse'](id1w62);console['log'](bhz8o);switch (bhz8o['status']) {case 0x3e9:
        var s5qrm = [];bhz8o['msg']['basics_image_url'] && s5qrm['push']({ 'url': bhz8o['msg']['basics_image_url'], 'type': Laya['Loader']['IMAGE'] }), bhz8o['msg']['public_code'] && s5qrm['push']({ 'url': bhz8o['msg']['public_code'], 'type': Laya['Loader']['IMAGE'] }), bhz8o['msg']['vip_customer_service'] && s5qrm['push']({ 'url': bhz8o['msg']['vip_customer_service'], 'type': Laya['Loader']['IMAGE'] }), bhz8o['msg']['vip_customer_service_not_add'] && s5qrm['push']({ 'url': bhz8o['msg']['vip_customer_service_not_add'], 'type': Laya['Loader']['IMAGE'] }), bhz8o['msg']['game_center_image_url'] && s5qrm['push']({ 'url': bhz8o['msg']['game_center_image_url'], 'type': Laya['Loader']['IMAGE'] }), bhz8o['msg']['vip_qrcode'] && s5qrm['push']({ 'url': bhz8o['msg']['vip_qrcode'], 'type': Laya['Loader']['IMAGE'] }), bhz8o['msg']['getIcon'] && s5qrm['push']({ 'url': this['getIcon'], 'type': Laya['Loader']['IMAGE'] }), bhz8o['msg']['copyIcon'] && s5qrm['push']({ 'url': this['copyIcon'], 'type': Laya['Loader']['IMAGE'] });for (var la26v = 0x0, mcrp5 = bhz8o['msg']['follow_gift_list']; la26v < mcrp5['length']; la26v++) {
          var cpm5tr = mcrp5[la26v];s5qrm['push']({ 'url': cpm5tr['url'], 'type': Laya['Loader']['IMAGE'] });
        }for (var bx94go = 0x0, iwfx19 = bhz8o['msg']['vip_box_list']; bx94go < iwfx19['length']; bx94go++) {
          var cpm5tr = iwfx19[bx94go];s5qrm['push']({ 'url': cpm5tr['url'], 'type': Laya['Loader']['IMAGE'] });
        }for (var x4w = 0x0; x4w < s5qrm['length']; x4w++) {
          o_ai6d['setResMap'](s5qrm[x4w]['url'], o_ai6d['getTimeStamp']()), s5qrm[x4w]['url'] = o_ai6d['getResMap'](s5qrm[x4w]['url']);
        }Laya['loader']['load'](s5qrm, Laya['Handler']['create'](this, this['initGame'])), this['data'] = bhz8o['msg'];break;case 0x3ea:
        o_xf49w1['msg']('空的游戏channel');break;case 0x3eb:
        o_xf49w1['msg']('错误的游戏channel');break;case 0x3ec:
        o_xf49w1['msg']('未找到对应游戏大类');break;case 0x3ed:
        o_xf49w1['msg']('未设置侧边栏');break;}
  }, bzchp['prototype']['errorHandler'] = function (_knuye) {}, bzchp['prototype']['initGame'] = function () {
    var na63vl = new o_stqr(this);na63vl['show']();
  }, bzchp;
}(),
    o_stqr = function () {
  function vnl36(i2d16) {
    this['page'] = 0x3, this['rolePriceData'] = {}, this['boxlist'] = [], this['donwX'] = 0x0, this['downY'] = 0x0, this['tool'] = i2d16;
  }return vnl36['prototype']['setChildMouseThroughs'] = function (l3v6an) {
    var xog9f4 = l3v6an['_childs'] || [];for (var c8zphb = 0x0; c8zphb < xog9f4['length']; c8zphb++) {
      xog9f4[c8zphb] && (xog9f4[c8zphb]['mouseThrough'] = !![]);
    }
  }, vnl36['prototype']['show'] = function () {
    if (this['tool']['data']['on'] === '1') {
      this['main'] = new o_tmrs5['demoui']['MainUI'](), Laya['stage']['addChild'](this['main']), this['main']['mouseThrough'] = !![];var l63dv = this['main']['_childs'] || [];for (var i62al = 0x0; i62al < l63dv['length']; i62al++) {
        l63dv[i62al]['mouseThrough'] = !![];
      }this['setChildMouseThroughs'](this['main']['_childs']), this['setChildMouseThroughs'](this['main']['_childs'][0x0]), this['initIcon'](), this['initEvent'](), this['initView'](), o_xf49w1['init'](), this['main']['bg']['x'] = -0x2ee;
    }
  }, vnl36['prototype']['initView'] = function () {
    var v_ln3 = this,
        d2wi = this['tool']['data']['follow_down_words']['replace'](/\\n/g, '\x0a');this['main']['box_1_lab_info']['text'] = d2wi;for (var _ulv = 0x1; _ulv <= this['tool']['data']['follow_gift_list']['length']; _ulv++) {
      var vyn3_u = this['tool']['data']['follow_gift_list'][_ulv - 0x1];this['main']['box_1_img_' + _ulv]['skin'] = vyn3_u['url'], this['main']['box_1_lab_' + _ulv]['text'] = vyn3_u['name'];
    }for (var _ulv = 0x1; _ulv <= this['tool']['data']['vip_box_list']['length']; _ulv++) {
      var vyn3_u = this['tool']['data']['vip_box_list'][_ulv - 0x1];this['main']['box_2_img_' + _ulv]['skin'] = vyn3_u['url'], this['main']['box_2_lab_' + _ulv]['text'] = vyn3_u['name'];
    }this['main']['box_2_lab_m_1']['text'] = '方法一：单日充值' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_m_2']['text'] = '方法二：历史累计充值' + +this['tool']['data']['y'] + '元', this['main']['box_2_lab_v_1']['text'] = (this['rolePriceData']['todayPrice'] || 0x0) + '/' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_v_2']['text'] = (this['rolePriceData']['allPrice'] || 0x0) + '/' + +this['tool']['data']['y'] + '元', this['main']['box_2_btn_copy']['skin'] = this['tool']['copyIcon'], this['main']['box_2_btn_get']['skin'] = this['tool']['getIcon'], this['main']['box_2_btn_copy']['visible'] = ![], this['main']['box_2_btn_get']['on'](Laya['Event']['CLICK'], this, function () {
      if (v_ln3['rolePriceData']['is_vip'] == 0x0) {
        o_xf49w1['msg']('请先获取vip资格');return;
      }v_ln3['main']['box_2_lab_wx']['text'] = this['rolePriceData']['vip_wx'], v_ln3['main']['box_2_btn_copy']['visible'] = !![];
    }), this['main']['box_2_btn_copy']['on'](Laya['Event']['CLICK'], this, function () {
      v_ln3['copyText'](this['rolePriceData']['vip_wx']);
    }), this['main']['box_2_addclick']['on'](Laya['Event']['CLICK'], this, function () {
      if (v_ln3['rolePriceData']['is_vip'] == 0x0) return;this['main']['box_help_qrcode']['skin'] = v_ln3['rolePriceData']['vip_qrcode'], v_ln3['main']['box_help']['visible'] = !![];
    }), this['main']['box_help_close']['on'](Laya['Event']['CLICK'], this, function () {
      v_ln3['main']['box_help']['visible'] = ![];
    }), this['main']['box_help_bg']['skin'] = this['tool']['data']['vip_customer_service_not_add'], this['main']['box_help_qrcode']['skin'] = v_ln3['rolePriceData']['vip_qrcode'], this['main']['box_help_qrcode']['scaleX'] = 0xa0 / this['main']['box_help_qrcode']['width'], this['main']['box_help_qrcode']['scaleY'] = 0xa0 / this['main']['box_help_qrcode']['width'], this['main']['box_3_panel']['vScrollBar']['visible'] = ![], this['main']['box_3_panel']['vScrollBarSkin'] = 'common_atlas/scrollBar.png';
  }, vnl36['prototype']['initIcon'] = function () {
    this['icon'] = new Laya['Image'](), this['icon']['skin'] = this['tool']['data']['basics_image_url'], this['icon']['x'] = 0x0, this['icon']['y'] = 0xc8, this['icon']['width'] = 0x66, this['icon']['height'] = 0x6f, this['main']['addChild'](this['icon']), this['icon']['on'](Laya['Event']['MOUSE_DOWN'], this, this['iconPress']), this['icon']['on'](Laya['Event']['MOUSE_UP'], this, this['iconUp']), this['icon']['on'](Laya['Event']['MOUSE_WHEEL'], this, this['iconMove']), this['dragRect'] = new Laya['Rectangle'](-this['icon']['width'] / 0x2, 0x0, Laya['stage']['width'], Laya['stage']['height'] - this['icon']['height'] / 0x2);
  }, vnl36['prototype']['initEvent'] = function () {
    var q5ptm = this;this['main']['btn_1']['on'](Laya['Event']['CLICK'], this, function () {
      if (q5ptm['page'] == 0x1) return;q5ptm['page1']();
    }), this['main']['btn_2']['on'](Laya['Event']['CLICK'], this, function () {
      if (q5ptm['page'] == 0x2) return;q5ptm['page2']();
    }), this['main']['btn_3']['on'](Laya['Event']['CLICK'], this, function () {
      if (q5ptm['page'] == 0x3) return;q5ptm['page3']();
    }), this['main']['btn_close']['on'](Laya['Event']['CLICK'], this, function () {
      q5ptm['main']['bg']['x'] = -0x2ee, q5ptm['icon']['visible'] = !![];
    });
  }, vnl36['prototype']['initBoard'] = function () {
    this['isInitBoard'] = !![], this['page1']();
  }, vnl36['prototype']['showBoard'] = function () {
    this['main']['bg']['x'] = 0x0, this['icon']['visible'] = ![];var wfi12d = _oAE['selectedServer']['server_id'],
        i21ad = _oAE['selectedServer']['server_name'],
        hzob4 = _oAE['roleId'],
        la2di6 = _oAE['roleName'],
        tp5mc = o_ai6d['sygame']['openid'],
        kne_ = '&role_id=' + o_ai6d['sygame']['role_id'] + '&channel=' + o_ai6d['sygame']['channel'] + '&server_id=' + wfi12d + '&server_name=' + i21ad + '&wecha_id=' + tp5mc + '&role_id=' + hzob4 + '&role_name=' + la2di6;this['tool']['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=sidebarApiRoleId' + kne_, this['rolePriceHandler']['bind'](this), this['roleError']['bind'](this));
  }, vnl36['prototype']['page1'] = function () {
    if(!vnl36.prototype.page1Bg){
      vnl36.prototype.page1Bg = new Laya.Image(this.tool.data.public_code);
      this.main.bg.addChildAt(vnl36.prototype.page1Bg,0)
  }
  if(vnl36.prototype.page1Bg) vnl36.prototype.page1Bg.visible = true; 
  if(vnl36.prototype.page2Bg) vnl36.prototype.page2Bg.visible = false; 
  if(vnl36.prototype.page3Bg) vnl36.prototype.page3Bg.visible = false;       
    this['page'] = 0x1,  this['main']['box_1_show']['visible'] = !![], this['main']['box_2_show']['visible'] = ![], this['main']['box_3_show']['visible'] = ![];
  }, vnl36['prototype']['page2'] = function () {
    if(!vnl36.prototype.page2Bg){
      vnl36.prototype.page2Bg = new Laya.Image(this.tool.data.vip_customer_service);
      this.main.bg.addChildAt(vnl36.prototype.page2Bg,0)
  }
  if(vnl36.prototype.page1Bg) vnl36.prototype.page1Bg.visible = false; 
  if(vnl36.prototype.page2Bg) vnl36.prototype.page2Bg.visible = true; 
  if(vnl36.prototype.page3Bg) vnl36.prototype.page3Bg.visible = false;    
    this['page'] = 0x2, this['main']['box_1_show']['visible'] = ![], this['main']['box_2_show']['visible'] = !![], this['main']['box_3_show']['visible'] = ![];
  }, vnl36['prototype']['page3'] = function () {
    if(!vnl36.prototype.page3Bg){
      vnl36.prototype.page3Bg = new Laya.Image(this.tool.data.game_center_image_url);
      this.main.bg.addChildAt(vnl36.prototype.page3Bg,0)
  }
  if(vnl36.prototype.page1Bg) vnl36.prototype.page1Bg.visible = false; 
  if(vnl36.prototype.page2Bg) vnl36.prototype.page2Bg.visible = false; 
  if(vnl36.prototype.page3Bg) vnl36.prototype.page3Bg.visible = true;    
    this['page'] = 0x3, this['main']['box_1_show']['visible'] = ![], this['main']['box_2_show']['visible'] = ![], this['main']['box_3_show']['visible'] = !![], this['sendBox'] || this['getBoxList'](0x0), this['sendBox'] = !![], o_qmtr5p && o_qmtr5p['syClickOpenBox']();
  }, vnl36['prototype']['getBoxList'] = function (wfx9g) {
    var hx4bg = this;o_qmtr5p && o_qmtr5p['syGetBoxList']({ 'page': wfx9g, 'count': 0xc })['then'](function (og4x9b) {
      var ozb8ch = og4x9b['data'];ozb8ch['status'] == 0x3e9 ? ozb8ch['data'] && ozb8ch['data']['length'] && (hx4bg['boxlist'] = hx4bg['boxlist']['concat'](ozb8ch['data']), wfx9g++, hx4bg['getBoxList'](wfx9g)) : hx4bg['boxListHandler']();
    });
  }, vnl36['prototype']['copyText'] = function (f94gox) {
    try {
      wx['setClipboardData']({ 'data': f94gox, 'success': function (u3_lnv) {
          console['log']('复制成功:', u3_lnv);
        } });
    } catch (bhzp8c) {}
  }, vnl36['prototype']['rolePriceHandler'] = function (va36d) {
    this['rolePriceData'] = JSON['parse'](va36d);switch (this['rolePriceData']['status']) {case 0x3e9:
        this['main']['box_2_lab_v_1']['text'] = (this['rolePriceData']['todayPrice'] || 0x0) + '/' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_v_2']['text'] = (this['rolePriceData']['allPrice'] || 0x0) + '/' + +this['tool']['data']['y'] + '元';break;case 0x3ea:
        break;case 0x3eb:
        break;}
  }, vnl36['prototype']['roleError'] = function () {}, vnl36['prototype']['boxListHandler'] = function () {
    var l6vad = function (fi21wd) {
      var o8ghbz = vnu3al['boxlist'][fi21wd],
          $je0k = new o_tmrs5['demoui']['BoxItemUI']();$je0k['icon']['skin'] = o8ghbz['icon'], $je0k['title']['text'] = o8ghbz['title'], $je0k['x'] = 0xa0 * (fi21wd % 0x3), $je0k['y'] = 0xa0 * (fi21wd / 0x3 ^ 0x0), vnu3al['main']['box_3_panel']['addChild']($je0k);var vla63d = { 'appid': o_ai6d['sygame']['appid'], 'game_id': o8ghbz['game_id'], 'jump_appid': o8ghbz['jump_appid'], 'jump_path': o8ghbz['jump_path'], 'tunnel_id': o8ghbz['tunnel_id'], 'uv': 0x0, 'wecha_id': o_ai6d['sygame']['openid'] },
          qmt5pr = o8ghbz['preview_img'],
          g4w9f = o8ghbz['jump_type'],
          _u3yv = o8ghbz['kf_session'];$je0k['on'](Laya['Event']['CLICK'], vnu3al, function () {
        o_qmtr5p && o_qmtr5p['syClickBox']({ 'game_id': o8ghbz['game_id'], 'tunnel_id': o8ghbz['tunnel_id'], 'jump_appid': o8ghbz['jump_appid'], 'jump_path': o8ghbz['jump_path'] })['then'](function (b8zog) {
          if (g4w9f === '0') wx['navigateToMiniProgram']({ 'appId': vla63d['jump_appid'], 'path': vla63d['jump_path'], 'fail': function (_l3nu) {
              if (!qmt5pr) return;wx['previewImage']({ 'urls': [qmt5pr] });
            } });else {
            if (g4w9f === '1') {
              if (!qmt5pr) return;wx['previewImage']({ 'urls': [qmt5pr] });
            } else {
              if (g4w9f === '2') {
                if (!_u3yv) return;wx['openCustomerServiceConversation']({ 'sessionFrom': _u3yv, 'showMessageCard': !![], 'sendMessageTitle': '', 'sendMessagePath': '', 'sendMessageImg': '' });
              }
            }
          }
        });
      });
    },
        vnu3al = this;for (var n_uvl3 = 0x0; n_uvl3 < this['boxlist']['length']; n_uvl3++) {
      l6vad(n_uvl3);
    }
  }, vnl36['prototype']['boxListError'] = function () {}, vnl36['prototype']['boxClickHandler'] = function () {}, vnl36['prototype']['iconPress'] = function (prz8hc) {
    this['donwX'] = prz8hc['target']['x'], this['donwY'] = prz8hc['target']['y'], this['icon']['startDrag'](this['dragRect']), this['isMove'] = ![], this['isPress'] = !![];
  }, vnl36['prototype']['iconMove'] = function (mpq5rt) {
    this['isMove'] = !![];
  }, vnl36['prototype']['iconUp'] = function (v6ld3a) {
    var bzco = v6ld3a['target']['x'],
        d1i = v6ld3a['target']['y'];this['icon']['stopDrag'](), bzco == this['donwX'] && this['donwY'] == d1i && (this['isInitBoard'] || this['initBoard'](), this['showBoard']()), this['isMove'] = ![], this['isPress'] = ![];
  }, vnl36;
}(),
    o_tmrs5;(function (d3la) {
  var lavd2;(function (ixf19w) {
    var og9xf = function (hz8gb) {
      o_adil(dal62i, hz8gb);function dal62i() {
        return hz8gb['call'](this) || this;
      }return dal62i['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), hz8gb['prototype']['createChildren']['call'](this), this['createView'](d3la['demoui']['BoxItemUI']['uiView']);
      }, dal62i['uiView'] = { 'type': 'View', 'props': { 'width': 0xb4, 'height': 0xa0 }, 'child': [{ 'type': 'Image', 'props': { 'y': 0x3, 'x': 0x20, 'width': 0x73, 'var': 'icon', 'height': 0x73 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x79, 'x': -0x21, 'width': 0xb4, 'var': 'title', 'valign': 'middle', 'height': 0x22, 'fontSize': 0x16, 'color': '#441d1c', 'align': 'center' } }] }] }, dal62i;
    }(laya['ui']['View']);ixf19w['BoxItemUI'] = og9xf;
  })(lavd2 = d3la['demoui'] || (d3la['demoui'] = {}));
})(o_tmrs5 || (o_tmrs5 = {})), function (yuke_0) {
  var s75qm;(function (cpt5rm) {
    var zhp8 = function (pmc85r) {
      o_adil(xbg9o, pmc85r);function xbg9o() {
        return pmc85r['call'](this) || this;
      }return xbg9o['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), pmc85r['prototype']['createChildren']['call'](this), this['createView'](yuke_0['demoui']['MainUI']['uiView']);
      }, xbg9o['uiView'] = { 'type': 'View', 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x2ee, 'top': 0x0, 'right': 0x0, 'left': 0x0, 'height': 0x536, 'bottom': 0x0 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x2ee, 'height': 0x536, 'centerY': 0x0 }, 'child': [{ 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x2ee, 'var': 'bg', 'height': 0x536 }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x2ee, 'visible': ![], 'var': 'box_1_show', 'height': 0x536, 'centerY': 0x0 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x253, 'x': 0x2e, 'width': 0x1d0, 'var': 'box_1_lab_info', 'leading': 0xa, 'height': 0x97, 'fontSize': 0x18, 'color': '#a959ee' } }, { 'type': 'HBox', 'props': { 'y': 0x2ee, 'x': 0x14, 'width': 0x1fe, 'space': 0x35, 'height': 0x78, 'align': 'top' }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x58, 'var': 'box_1_img_1', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_1', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0xa, 'x': 0xa, 'width': 0x58, 'var': 'box_1_img_2', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_2', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x14, 'x': 0x14, 'width': 0x58, 'var': 'box_1_img_3', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_3', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x1e, 'x': 0x1e, 'width': 0x58, 'var': 'box_1_img_4', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_4', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }] }] }, { 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'visible': ![], 'var': 'box_2_show' }, 'child': [{ 'type': 'HBox', 'props': { 'y': 0x220, 'x': 0x18, 'width': 0x1f4, 'space': 0x2c, 'height': 0x56, 'align': 'top' }, 'child': [{ 'type': 'Image', 'props': { 'y': 2.5, 'x': 0x0, 'width': 0x58, 'var': 'box_2_img_1', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_1', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0xc, 'x': 0xa, 'width': 0x58, 'var': 'box_2_img_2', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_2', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x16, 'x': 0x14, 'width': 0x58, 'var': 'box_2_img_3', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_3', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x20, 'x': 0x1e, 'width': 0x58, 'var': 'box_2_img_4', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_4', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x2a, 'x': 0x28, 'width': 0x58, 'var': 'box_2_img_5', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_5', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }] }, { 'type': 'Box', 'props': { 'y': 0x384, 'x': 0x0, 'width': 0x221, 'height': 0x44 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x0, 'x': 0x28, 'width': 0x122, 'var': 'box_2_lab_m_1', 'text': '方法一\uFF1A单日充值1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300' } }, { 'type': 'Text', 'props': { 'y': 0x1e, 'x': 0x28, 'width': 0x122, 'var': 'box_2_lab_m_2', 'text': '方法一\uFF1A历史累计充值1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300' } }, { 'type': 'Text', 'props': { 'y': 0x0, 'x': 0x141, 'width': 0xa4, 'var': 'box_2_lab_v_1', 'text': '1000/1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300', 'align': 'right' } }, { 'type': 'Text', 'props': { 'y': 0x1e, 'x': 0x141, 'width': 0xa4, 'var': 'box_2_lab_v_2', 'text': '1000/1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300', 'align': 'right' } }] }, { 'type': 'Image', 'props': { 'y': 0x1aa, 'x': 0x159, 'width': 0x66, 'var': 'box_2_btn_get', 'stateNum': 0x1, 'height': 0x26 } }, { 'type': 'Image', 'props': { 'y': 0x1aa, 'x': 0x159, 'width': 0x66, 'var': 'box_2_btn_copy', 'stateNum': 0x1, 'height': 0x26 } }, { 'type': 'Button', 'props': { 'y': 0x1d2, 'x': 0x126, 'width': 0xc9, 'var': 'box_2_addclick', 'stateNum': 0x1, 'height': 0x1b } }, { 'type': 'Text', 'props': { 'y': 0x13c, 'x': 0x17a, 'width': 0xa3, 'var': 'box_2_lab_wx', 'height': 0x1f, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'left' } }] }, { 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'visible': ![], 'var': 'box_3_show' }, 'child': [{ 'type': 'Panel', 'props': { 'y': 0xf5, 'x': 0x10, 'width': 0x201, 'var': 'box_3_panel', 'vScrollBarSkin': '', 'height': 0x29e } }] }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0x0, 'width': 0xbb, 'var': 'btn_1', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0xba, 'width': 0xbb, 'var': 'btn_2', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0x177, 'width': 0xbb, 'var': 'btn_3', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x203, 'x': 0x22e, 'width': 0x25, 'var': 'btn_close', 'height': 0x8f } }, { 'type': 'Box', 'props': { 'width': 0x2ee, 'visible': ![], 'var': 'box_help', 'height': 0x536 }, 'child': [{ 'type': 'Sprite', 'props': { 'y': 0x0, 'x': 0x0, 'mouseThrough': ![], 'alpha': 0.7 }, 'child': [{ 'type': 'Rect', 'props': { 'width': 0x2ee, 'lineWidth': 0x1, 'height': 0x536, 'fillColor': '#000000' } }] }, { 'type': 'Image', 'props': { 'y': 0x158, 'x': 0x28, 'width': 0x1d2, 'var': 'box_help_bg', 'height': 0x203 }, 'child': [{ 'type': 'Button', 'props': { 'y': -0x1, 'x': 0x1a0, 'width': 0x33, 'var': 'box_help_close', 'height': 0x28 } }, { 'type': 'Image', 'props': { 'y': 0x3f, 'x': 0x98, 'width': 0xa0, 'var': 'box_help_qrcode', 'height': 0xa0 } }] }] }] }] }] }, xbg9o;
    }(laya['ui']['View']);cpt5rm['MainUI'] = zhp8;
  })(s75qm = yuke_0['demoui'] || (yuke_0['demoui'] = {}));
}(o_tmrs5 || (o_tmrs5 = {})), function (va3d6l) {
  var _n3yv;(function (mrsq5) {
    var unv3y = function (h8crpz) {
      o_adil(bhzgo4, h8crpz);function bhzgo4() {
        return h8crpz['call'](this) || this;
      }return bhzgo4['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), h8crpz['prototype']['createChildren']['call'](this), this['createView'](va3d6l['demoui']['ToastUI']['uiView']);
      }, bhzgo4['uiView'] = { 'type': 'View', 'props': { 'width': 0x2ee, 'height': 0x536 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x12c, 'height': 0x32, 'centerY': 0x0, 'centerX': 0x0 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x12c, 'height': 0x32, 'centerX': 0x0, 'alpha': 0.5 }, 'child': [{ 'type': 'Rect', 'props': { 'width': 0x12c, 'lineWidth': 0x1, 'height': 0x32, 'fillColor': '#382f2f' } }] }, { 'type': 'Text', 'props': { 'width': 0x12c, 'var': 'lab_msg', 'valign': 'middle', 'text': 'text', 'height': 0x32, 'fontSize': 0x18, 'color': '#ffffff', 'align': 'center' } }] }] }, bhzgo4;
    }(laya['ui']['View']);mrsq5['ToastUI'] = unv3y;
  })(_n3yv = va3d6l['demoui'] || (va3d6l['demoui'] = {}));
}(o_tmrs5 || (o_tmrs5 = {}));var o_xf49w1 = function () {
  function rphc() {}return rphc['init'] = function () {
    !this['ui'] && (this['ui'] = new o_tmrs5['demoui']['ToastUI'](), this['ui']['visible'] = ![], Laya['stage']['addChild'](this['ui']));
  }, rphc['msg'] = function (q75mst) {
    var wf49x1 = this;!this['ui'] && rphc['init'](), this['ui']['visible'] = !![], this['ui']['lab_msg']['text'] = q75mst, clearTimeout(this['interval']), this['interval'] = setTimeout(function () {
      wf49x1['ui']['visible'] = ![];
    }, 0x7d0);
  }, rphc;
}();window['minitool'] = o_xb9o;