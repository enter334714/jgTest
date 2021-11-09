var k = wx.$f;
var fbifvm = this && this['__extends'] || function () {
  var k5h = function (e8$zr7, wncjsd) {
    return k5h = Object['setPrototypeOf'] || { '__proto__': [] } instanceof Array && function (xnswze, hk5q0_) {
      xnswze['__proto__'] = hk5q0_;
    } || function (z7r3$, v1b9iu) {
      for (var hf50t in v1b9iu) if (v1b9iu['hasOwnProperty'](hf50t)) z7r3$[hf50t] = v1b9iu[hf50t];
    }, k5h(e8$zr7, wncjsd);
  };return function (o2k64_, k_40q) {
    k5h(o2k64_, k_40q);function yp$37() {
      this['constructor'] = o2k64_;
    }o2k64_['prototype'] = k_40q === null ? Object['create'](k_40q) : (yp$37['prototype'] = k_40q['prototype'], new yp$37());
  };
}(),
    fs6djco = window['Sygame'],
    fs6jcd = ![],
    fos6djc = function () {
  function erz7x8() {}return erz7x8['init'] = function () {
    fs6jcd ? this['sygame'] = { 'channel': '3477d2273abd484ba2a0e04ad4971b3c', 'role_id': undefined, 'openid': 'oxmOf5biumkGash-Xht9FVAlswVk', 'appid': 'wx2936121c4817bf46' } : this['sygame'] = fs6djco;
  }, erz7x8['getTimeStamp'] = function () {
    return new Date()['getTime']();
  }, erz7x8['setResMap'] = function (_k2q4, fmq0ht) {
    this['resMap'][_k2q4] = _k2q4 + '?' + fmq0ht;
  }, erz7x8['getResMap'] = function (k4o6_) {
    return this['resMap'][k4o6_];
  }, erz7x8['resMap'] = {}, erz7x8;
}(),
    fdcj6os = function () {
  function jxswn() {
    this['getIcon'] = 'https://wx.11babay.cn/uploads/f/fkccc1532944783/5/2/c/7/60dc442c4fbc5.png', this['copyIcon'] = 'https://wx.11babay.cn/uploads/f/fkccc1532944783/3/0/1/7/60dc4409dce39.png', fos6djc['init'](), this['postSidebarApi']();
  }return jxswn['prototype']['send'] = function (sdco6j, hkt50q, sojcdw, f0imh, bimtv) {
    f0imh === void 0x0 && (f0imh = 'get');bimtv === void 0x0 && (bimtv = '' || null);var h_5q = new Laya['HttpRequest']();h_5q['http']['timeout'] = 0x2710, h_5q['once'](Laya['Event']['COMPLETE'], this, hkt50q), h_5q['once'](Laya['Event']['ERROR'], this, sojcdw), h_5q['send'](sdco6j, bimtv, f0imh, 'text');
  }, jxswn['prototype']['postSidebarApi'] = function () {
    this['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=sidebarApi&channel=' + fos6djc['sygame']['channel'], this['completeHandler'], this['errorHandler']);
  }, jxswn['prototype']['completeHandler'] = function (q_5k40) {
    var tfh0im = JSON['parse'](q_5k40);console['log'](tfh0im);switch (tfh0im['status']) {case 0x3e9:
        var k2 = [];tfh0im['msg']['basics_image_url'] && k2['push']({ 'url': tfh0im['msg']['basics_image_url'], 'type': Laya['Loader']['IMAGE'] }), tfh0im['msg']['public_code'] && k2['push']({ 'url': tfh0im['msg']['public_code'], 'type': Laya['Loader']['IMAGE'] }), tfh0im['msg']['vip_customer_service'] && k2['push']({ 'url': tfh0im['msg']['vip_customer_service'], 'type': Laya['Loader']['IMAGE'] }), tfh0im['msg']['vip_customer_service_not_add'] && k2['push']({ 'url': tfh0im['msg']['vip_customer_service_not_add'], 'type': Laya['Loader']['IMAGE'] }), tfh0im['msg']['game_center_image_url'] && k2['push']({ 'url': tfh0im['msg']['game_center_image_url'], 'type': Laya['Loader']['IMAGE'] }), tfh0im['msg']['vip_qrcode'] && k2['push']({ 'url': tfh0im['msg']['vip_qrcode'], 'type': Laya['Loader']['IMAGE'] }), tfh0im['msg']['getIcon'] && k2['push']({ 'url': this['getIcon'], 'type': Laya['Loader']['IMAGE'] }), tfh0im['msg']['copyIcon'] && k2['push']({ 'url': this['copyIcon'], 'type': Laya['Loader']['IMAGE'] });for (var v19biu = 0x0, $7rz8e = tfh0im['msg']['follow_gift_list']; v19biu < $7rz8e['length']; v19biu++) {
          var t0kh5q = $7rz8e[v19biu];k2['push']({ 'url': t0kh5q['url'], 'type': Laya['Loader']['IMAGE'] });
        }for (var dsnc = 0x0, q50h_k = tfh0im['msg']['vip_box_list']; dsnc < q50h_k['length']; dsnc++) {
          var t0kh5q = q50h_k[dsnc];k2['push']({ 'url': t0kh5q['url'], 'type': Laya['Loader']['IMAGE'] });
        }for (var ez8r7 = 0x0; ez8r7 < k2['length']; ez8r7++) {
          fos6djc['setResMap'](k2[ez8r7]['url'], fos6djc['getTimeStamp']()), k2[ez8r7]['url'] = fos6djc['getResMap'](k2[ez8r7]['url']);
        }Laya['loader']['load'](k2, Laya['Handler']['create'](this, this['initGame'])), this['data'] = tfh0im['msg'];break;case 0x3ea:
        fvfbit['msg']('空的游戏channel');break;case 0x3eb:
        fvfbit['msg']('错误的游戏channel');break;case 0x3ec:
        fvfbit['msg']('未找到对应游戏大类');break;case 0x3ed:
        fvfbit['msg']('未设置侧边栏');break;}
  }, jxswn['prototype']['errorHandler'] = function (qk_4) {}, jxswn['prototype']['initGame'] = function () {
    var q_540 = new fscojwd(this);q_540['show']();
  }, jxswn;
}(),
    fscojwd = function () {
  function xrn8z(u1mi) {
    this['page'] = 0x3, this['rolePriceData'] = {}, this['boxlist'] = [], this['donwX'] = 0x0, this['downY'] = 0x0, this['tool'] = u1mi;
  }return xrn8z['prototype']['setChildMouseThroughs'] = function (fhtibm) {
    var ub1 = fhtibm['_childs'] || [];for (var rexzn8 = 0x0; rexzn8 < ub1['length']; rexzn8++) {
      ub1[rexzn8] && (ub1[rexzn8]['mouseThrough'] = !![]);
    }
  }, xrn8z['prototype']['show'] = function () {
    if (this['tool']['data']['on'] === '1') {
      this['main'] = new fhqmtf['demoui']['MainUI'](), Laya['stage']['addChild'](this['main']), this['main']['mouseThrough'] = !![];var scwjdo = this['main']['_childs'] || [];for (var fbmvu = 0x0; fbmvu < scwjdo['length']; fbmvu++) {
        scwjdo[fbmvu]['mouseThrough'] = !![];
      }this['setChildMouseThroughs'](this['main']['_childs']), this['setChildMouseThroughs'](this['main']['_childs'][0x0]), this['initIcon'](), this['initEvent'](), this['initView'](), fvfbit['init']();
    }
  }, xrn8z['prototype']['initView'] = function () {
    var j2co64 = this,
        k54q2 = this['tool']['data']['follow_down_words']['replace'](/\\n/g, '\x0a');this['main']['box_1_lab_info']['text'] = k54q2;for (var _2k654 = 0x1; _2k654 <= this['tool']['data']['follow_gift_list']['length']; _2k654++) {
      var mbvu = this['tool']['data']['follow_gift_list'][_2k654 - 0x1];this['main']['box_1_img_' + _2k654]['skin'] = mbvu['url'], this['main']['box_1_lab_' + _2k654]['text'] = mbvu['name'];
    }for (var _2k654 = 0x1; _2k654 <= this['tool']['data']['vip_box_list']['length']; _2k654++) {
      var mbvu = this['tool']['data']['vip_box_list'][_2k654 - 0x1];this['main']['box_2_img_' + _2k654]['skin'] = mbvu['url'], this['main']['box_2_lab_' + _2k654]['text'] = mbvu['name'];
    }this['main']['box_2_lab_m_1']['text'] = '方法一：单日充值' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_m_2']['text'] = '方法二：历史累计充值' + +this['tool']['data']['y'] + '元', this['main']['box_2_lab_v_1']['text'] = (this['rolePriceData']['todayPrice'] || 0x0) + '/' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_v_2']['text'] = (this['rolePriceData']['allPrice'] || 0x0) + '/' + +this['tool']['data']['y'] + '元', this['main']['box_2_btn_copy']['skin'] = this['tool']['copyIcon'], this['main']['box_2_btn_get']['skin'] = this['tool']['getIcon'], this['main']['box_2_btn_copy']['visible'] = ![], this['main']['box_2_btn_get']['on'](Laya['Event']['CLICK'], this, function () {
      if (j2co64['rolePriceData']['is_vip'] == 0x0) {
        fvfbit['msg']('请先获取vip资格');return;
      }j2co64['main']['box_2_lab_wx']['text'] = j2co64['tool']['data']['vip_wx'], j2co64['main']['box_2_btn_copy']['visible'] = !![];
    }), this['main']['box_2_btn_copy']['on'](Laya['Event']['CLICK'], this, function () {
      j2co64['copyText'](j2co64['tool']['data']['vip_wx']);
    }), this['main']['box_2_addclick']['on'](Laya['Event']['CLICK'], this, function () {
      if (j2co64['rolePriceData']['is_vip'] == 0x0) return;j2co64['main']['box_help']['visible'] = !![];
    }), this['main']['box_help_close']['on'](Laya['Event']['CLICK'], this, function () {
      j2co64['main']['box_help']['visible'] = ![];
    }), this['main']['box_help_bg']['skin'] = this['tool']['data']['vip_customer_service_not_add'], this['main']['box_help_qrcode']['skin'] = this['tool']['data']['vip_qrcode'], this['main']['box_help_qrcode']['scaleX'] = 0xa0 / this['main']['box_help_qrcode']['width'], this['main']['box_help_qrcode']['scaleY'] = 0xa0 / this['main']['box_help_qrcode']['width'], this['main']['box_3_panel']['vScrollBar']['visible'] = ![], this['main']['box_3_panel']['vScrollBarSkin'] = 'common_atlas/scrollBar.png';
  }, xrn8z['prototype']['initIcon'] = function () {
    this['icon'] = new Laya['Image'](), this['icon']['skin'] = this['tool']['data']['basics_image_url'], this['icon']['x'] = 0x0, this['icon']['y'] = 0xc8, this['icon']['width'] = 0x66, this['icon']['height'] = 0x6f, this['main']['addChild'](this['icon']), this['icon']['on'](Laya['Event']['MOUSE_DOWN'], this, this['iconPress']), this['icon']['on'](Laya['Event']['MOUSE_UP'], this, this['iconUp']), this['icon']['on'](Laya['Event']['MOUSE_WHEEL'], this, this['iconMove']), this['dragRect'] = new Laya['Rectangle'](-this['icon']['width'] / 0x2, 0x0, Laya['stage']['width'], Laya['stage']['height'] - this['icon']['height'] / 0x2);
  }, xrn8z['prototype']['initEvent'] = function () {
    var r7ez$ = this;this['main']['btn_1']['on'](Laya['Event']['CLICK'], this, function () {
      if (r7ez$['page'] == 0x1) return;r7ez$['page1']();
    }), this['main']['btn_2']['on'](Laya['Event']['CLICK'], this, function () {
      if (r7ez$['page'] == 0x2) return;r7ez$['page2']();
    }), this['main']['btn_3']['on'](Laya['Event']['CLICK'], this, function () {
      if (r7ez$['page'] == 0x3) return;r7ez$['page3']();
    }), this['main']['btn_close']['on'](Laya['Event']['CLICK'], this, function () {
      r7ez$['main']['bg']['x'] = -0x2ee, r7ez$['icon']['visible'] = !![];
    });
  }, xrn8z['prototype']['initBoard'] = function () {
    this['isInitBoard'] = !![], this['page1']();
  }, xrn8z['prototype']['showBoard'] = function () {
    this['main']['bg']['x'] = 0x0, this['icon']['visible'] = ![], this['tool']['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=sidebarApiRoleId&role_id=' + fos6djc['sygame']['role_id'] + '&channel=' + fos6djc['sygame']['channel'], this['rolePriceHandler']['bind'](this), this['roleError']['bind'](this));
  }, xrn8z['prototype']['page1'] = function () {
    this['page'] = 0x1, this['main']['bg']['skin'] = this['tool']['data']['public_code'], this['main']['box_1_show']['visible'] = !![], this['main']['box_2_show']['visible'] = ![], this['main']['box_3_show']['visible'] = ![];
  }, xrn8z['prototype']['page2'] = function () {
    this['page'] = 0x2, this['main']['bg']['skin'] = this['tool']['data']['vip_customer_service'], this['main']['box_1_show']['visible'] = ![], this['main']['box_2_show']['visible'] = !![], this['main']['box_3_show']['visible'] = ![];
  }, xrn8z['prototype']['page3'] = function () {
    this['page'] = 0x3, this['main']['bg']['skin'] = this['tool']['data']['game_center_image_url'], this['main']['box_1_show']['visible'] = ![], this['main']['box_2_show']['visible'] = ![], this['main']['box_3_show']['visible'] = !![], this['sendBox'] || this['getBoxList'](0x0), this['sendBox'] = !![], fs6djco && fs6djco['syClickOpenBox']();
  }, xrn8z['prototype']['getBoxList'] = function (_k45) {
    var _h50kq = this;fs6djco && fs6djco['syGetBoxList']({ 'page': _k45, 'count': 0xc })['then'](function (wjns) {
      var o4j2c = wjns['data'];o4j2c['status'] == 0x3e9 ? o4j2c['data'] && o4j2c['data']['length'] && (_h50kq['boxlist'] = _h50kq['boxlist']['concat'](o4j2c['data']), _k45++, _h50kq['getBoxList'](_k45)) : _h50kq['boxListHandler']();
    });
  }, xrn8z['prototype']['copyText'] = function (odj2) {
    try {
      wx['setClipboardData']({ 'data': odj2, 'success': function (ubv1m) {
          console['log']('复制成功:', ubv1m);
        } });
    } catch (bg1v) {}
  }, xrn8z['prototype']['rolePriceHandler'] = function (ft0h5q) {
    this['rolePriceData'] = JSON['parse'](ft0h5q);switch (this['rolePriceData']['status']) {case 0x3e9:
        this['main']['box_2_lab_v_1']['text'] = (this['rolePriceData']['todayPrice'] || 0x0) + '/' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_v_2']['text'] = (this['rolePriceData']['allPrice'] || 0x0) + '/' + +this['tool']['data']['y'] + '元';break;case 0x3ea:
        break;case 0x3eb:
        break;}
  }, xrn8z['prototype']['roleError'] = function () {}, xrn8z['prototype']['boxListHandler'] = function () {
    var o_24 = function (wdcosj) {
      var erz7x = q5tf['boxlist'][wdcosj],
          q0mhtf = new fhqmtf['demoui']['BoxItemUI']();q0mhtf['icon']['skin'] = erz7x['icon'], q0mhtf['title']['text'] = erz7x['title'], q0mhtf['x'] = 0xa0 * (wdcosj % 0x3), q0mhtf['y'] = 0xa0 * (wdcosj / 0x3 ^ 0x0), q5tf['main']['box_3_panel']['addChild'](q0mhtf);var btmhi = { 'appid': fos6djc['sygame']['appid'], 'game_id': erz7x['game_id'], 'jump_appid': erz7x['jump_appid'], 'jump_path': erz7x['jump_path'], 'tunnel_id': erz7x['tunnel_id'], 'uv': 0x0, 'wecha_id': fos6djc['sygame']['openid'] },
          bifmu = erz7x['preview_img'],
          y8r7$3 = erz7x['jump_type'],
          swjdnc = erz7x['kf_session'];q0mhtf['on'](Laya['Event']['CLICK'], q5tf, function () {
        fs6djco && fs6djco['syClickBox']({ 'game_id': erz7x['game_id'], 'tunnel_id': erz7x['tunnel_id'], 'jump_appid': erz7x['jump_appid'], 'jump_path': erz7x['jump_path'] })['then'](function (d2cj6o) {
          if (y8r7$3 === '0') wx['navigateToMiniProgram']({ 'appId': btmhi['jump_appid'], 'path': btmhi['jump_path'], 'fail': function (a3yr$7) {
              if (!bifmu) return;wx['previewImage']({ 'urls': [bifmu] });
            } });else {
            if (y8r7$3 === '1') {
              if (!bifmu) return;wx['previewImage']({ 'urls': [bifmu] });
            } else {
              if (y8r7$3 === '2') {
                if (!swjdnc) return;wx['openCustomerServiceConversation']({ 'sessionFrom': swjdnc, 'showMessageCard': !![], 'sendMessageTitle': '', 'sendMessagePath': '', 'sendMessageImg': '' });
              }
            }
          }
        });
      });
    },
        q5tf = this;for (var fmq0th = 0x0; fmq0th < this['boxlist']['length']; fmq0th++) {
      o_24(fmq0th);
    }
  }, xrn8z['prototype']['boxListError'] = function () {}, xrn8z['prototype']['boxClickHandler'] = function () {}, xrn8z['prototype']['iconPress'] = function (s6cdjo) {
    this['donwX'] = s6cdjo['target']['x'], this['donwY'] = s6cdjo['target']['y'], this['icon']['startDrag'](this['dragRect']), this['isMove'] = ![], this['isPress'] = !![];
  }, xrn8z['prototype']['iconMove'] = function (i0hfmt) {
    this['isMove'] = !![];
  }, xrn8z['prototype']['iconUp'] = function (iub91) {
    var zer8xn = iub91['target']['x'],
        $7r3y = iub91['target']['y'];this['icon']['stopDrag'](), zer8xn == this['donwX'] && this['donwY'] == $7r3y && (this['isInitBoard'] || this['initBoard'](), this['showBoard']()), this['isMove'] = ![], this['isPress'] = ![];
  }, xrn8z;
}(),
    fhqmtf;(function (wnexs) {
  var oj2c6d;(function (bmfvit) {
    var wnszxe = function (sxzwn) {
      fbifvm(zr7e8, sxzwn);function zr7e8() {
        return sxzwn['call'](this) || this;
      }return zr7e8['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), sxzwn['prototype']['createChildren']['call'](this), this['createView'](wnexs['demoui']['BoxItemUI']['uiView']);
      }, zr7e8['uiView'] = { 'type': 'View', 'props': { 'width': 0xb4, 'height': 0xa0 }, 'child': [{ 'type': 'Image', 'props': { 'y': 0x3, 'x': 0x20, 'width': 0x73, 'var': 'icon', 'height': 0x73 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x79, 'x': -0x21, 'width': 0xb4, 'var': 'title', 'valign': 'middle', 'height': 0x22, 'fontSize': 0x16, 'color': '#441d1c', 'align': 'center' } }] }] }, zr7e8;
    }(laya['ui']['View']);bmfvit['BoxItemUI'] = wnszxe;
  })(oj2c6d = wnexs['demoui'] || (wnexs['demoui'] = {}));
})(fhqmtf || (fhqmtf = {})), function (bu9g1v) {
  var cdjos6;(function (odcwsj) {
    var wexszn = function (d6oc2j) {
      fbifvm(dwes, d6oc2j);function dwes() {
        return d6oc2j['call'](this) || this;
      }return dwes['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), d6oc2j['prototype']['createChildren']['call'](this), this['createView'](bu9g1v['demoui']['MainUI']['uiView']);
      }, dwes['uiView'] = { 'type': 'View', 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x2ee, 'top': 0x0, 'right': 0x0, 'left': 0x0, 'height': 0x536, 'bottom': 0x0 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x2ee, 'height': 0x536, 'centerY': 0x0 }, 'child': [{ 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x2ee, 'var': 'bg', 'height': 0x536 }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x2ee, 'visible': ![], 'var': 'box_1_show', 'height': 0x536, 'centerY': 0x0 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x253, 'x': 0x2e, 'width': 0x1d0, 'var': 'box_1_lab_info', 'leading': 0xa, 'height': 0x97, 'fontSize': 0x18, 'color': '#a959ee' } }, { 'type': 'HBox', 'props': { 'y': 0x2ee, 'x': 0x14, 'width': 0x1fe, 'space': 0x35, 'height': 0x78, 'align': 'top' }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x58, 'var': 'box_1_img_1', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_1', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0xa, 'x': 0xa, 'width': 0x58, 'var': 'box_1_img_2', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_2', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x14, 'x': 0x14, 'width': 0x58, 'var': 'box_1_img_3', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_3', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x1e, 'x': 0x1e, 'width': 0x58, 'var': 'box_1_img_4', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_4', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }] }] }, { 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'visible': ![], 'var': 'box_2_show' }, 'child': [{ 'type': 'HBox', 'props': { 'y': 0x220, 'x': 0x18, 'width': 0x1f4, 'space': 0x2c, 'height': 0x56, 'align': 'top' }, 'child': [{ 'type': 'Image', 'props': { 'y': 2.5, 'x': 0x0, 'width': 0x58, 'var': 'box_2_img_1', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_1', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0xc, 'x': 0xa, 'width': 0x58, 'var': 'box_2_img_2', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_2', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x16, 'x': 0x14, 'width': 0x58, 'var': 'box_2_img_3', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_3', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x20, 'x': 0x1e, 'width': 0x58, 'var': 'box_2_img_4', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_4', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x2a, 'x': 0x28, 'width': 0x58, 'var': 'box_2_img_5', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_5', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }] }, { 'type': 'Box', 'props': { 'y': 0x384, 'x': 0x0, 'width': 0x221, 'height': 0x44 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x0, 'x': 0x28, 'width': 0x122, 'var': 'box_2_lab_m_1', 'text': '方法一\uFF1A单日充值1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300' } }, { 'type': 'Text', 'props': { 'y': 0x1e, 'x': 0x28, 'width': 0x122, 'var': 'box_2_lab_m_2', 'text': '方法一\uFF1A历史累计充值1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300' } }, { 'type': 'Text', 'props': { 'y': 0x0, 'x': 0x141, 'width': 0xa4, 'var': 'box_2_lab_v_1', 'text': '1000/1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300', 'align': 'right' } }, { 'type': 'Text', 'props': { 'y': 0x1e, 'x': 0x141, 'width': 0xa4, 'var': 'box_2_lab_v_2', 'text': '1000/1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300', 'align': 'right' } }] }, { 'type': 'Image', 'props': { 'y': 0x1aa, 'x': 0x159, 'width': 0x66, 'var': 'box_2_btn_get', 'stateNum': 0x1, 'height': 0x26 } }, { 'type': 'Image', 'props': { 'y': 0x1aa, 'x': 0x159, 'width': 0x66, 'var': 'box_2_btn_copy', 'stateNum': 0x1, 'height': 0x26 } }, { 'type': 'Button', 'props': { 'y': 0x1d2, 'x': 0x126, 'width': 0xc9, 'var': 'box_2_addclick', 'stateNum': 0x1, 'height': 0x1b } }, { 'type': 'Text', 'props': { 'y': 0x13c, 'x': 0x17a, 'width': 0xa3, 'var': 'box_2_lab_wx', 'height': 0x1f, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'left' } }] }, { 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'visible': ![], 'var': 'box_3_show' }, 'child': [{ 'type': 'Panel', 'props': { 'y': 0xf5, 'x': 0x10, 'width': 0x201, 'var': 'box_3_panel', 'vScrollBarSkin': '', 'height': 0x29e } }] }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0x0, 'width': 0xbb, 'var': 'btn_1', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0xba, 'width': 0xbb, 'var': 'btn_2', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0x177, 'width': 0xbb, 'var': 'btn_3', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x203, 'x': 0x22e, 'width': 0x25, 'var': 'btn_close', 'height': 0x8f } }, { 'type': 'Box', 'props': { 'width': 0x2ee, 'visible': ![], 'var': 'box_help', 'height': 0x536 }, 'child': [{ 'type': 'Sprite', 'props': { 'y': 0x0, 'x': 0x0, 'mouseThrough': ![], 'alpha': 0.7 }, 'child': [{ 'type': 'Rect', 'props': { 'width': 0x2ee, 'lineWidth': 0x1, 'height': 0x536, 'fillColor': '#000000' } }] }, { 'type': 'Image', 'props': { 'y': 0x158, 'x': 0x28, 'width': 0x1d2, 'var': 'box_help_bg', 'height': 0x203 }, 'child': [{ 'type': 'Button', 'props': { 'y': -0x1, 'x': 0x1a0, 'width': 0x33, 'var': 'box_help_close', 'height': 0x28 } }, { 'type': 'Image', 'props': { 'y': 0x3f, 'x': 0x98, 'width': 0xa0, 'var': 'box_help_qrcode', 'height': 0xa0 } }] }] }] }] }] }, dwes;
    }(laya['ui']['View']);odcwsj['MainUI'] = wexszn;
  })(cdjos6 = bu9g1v['demoui'] || (bu9g1v['demoui'] = {}));
}(fhqmtf || (fhqmtf = {})), function (nwexzs) {
  var xszewn;(function (c64j2o) {
    var jcwdn = function (hft0m) {
      fbifvm(tfqmh, hft0m);function tfqmh() {
        return hft0m['call'](this) || this;
      }return tfqmh['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), hft0m['prototype']['createChildren']['call'](this), this['createView'](nwexzs['demoui']['ToastUI']['uiView']);
      }, tfqmh['uiView'] = { 'type': 'View', 'props': { 'width': 0x2ee, 'height': 0x536 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x12c, 'height': 0x32, 'centerY': 0x0, 'centerX': 0x0 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x12c, 'height': 0x32, 'centerX': 0x0, 'alpha': 0.5 }, 'child': [{ 'type': 'Rect', 'props': { 'width': 0x12c, 'lineWidth': 0x1, 'height': 0x32, 'fillColor': '#382f2f' } }] }, { 'type': 'Text', 'props': { 'width': 0x12c, 'var': 'lab_msg', 'valign': 'middle', 'text': 'text', 'height': 0x32, 'fontSize': 0x18, 'color': '#ffffff', 'align': 'center' } }] }] }, tfqmh;
    }(laya['ui']['View']);c64j2o['ToastUI'] = jcwdn;
  })(xszewn = nwexzs['demoui'] || (nwexzs['demoui'] = {}));
}(fhqmtf || (fhqmtf = {}));var fvfbit = function () {
  function h_50q() {}return h_50q['init'] = function () {
    !this['ui'] && (this['ui'] = new fhqmtf['demoui']['ToastUI'](), this['ui']['visible'] = ![], Laya['stage']['addChild'](this['ui']));
  }, h_50q['msg'] = function (des) {
    var xz87e = this;!this['ui'] && h_50q['init'](), this['ui']['visible'] = !![], this['ui']['lab_msg']['text'] = des, clearTimeout(this['interval']), this['interval'] = setTimeout(function () {
      xz87e['ui']['visible'] = ![];
    }, 0x7d0);
  }, h_50q;
}();window['minitool'] = fdcj6os;