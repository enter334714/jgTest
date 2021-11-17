var k = wx.$f;
var ff0q5ht = this && this['__extends'] || function () {
  var xznew8 = function (tq0k, cj624) {
    return xznew8 = Object['setPrototypeOf'] || { '__proto__': [] } instanceof Array && function (oswdj, i19vu) {
      oswdj['__proto__'] = i19vu;
    } || function ($r3y87, m0ti) {
      for (var fqh05t in m0ti) if (m0ti['hasOwnProperty'](fqh05t)) $r3y87[fqh05t] = m0ti[fqh05t];
    }, xznew8(tq0k, cj624);
  };return function (_k2645, fthm0i) {
    xznew8(_k2645, fthm0i);function hbm() {
      this['constructor'] = _k2645;
    }_k2645['prototype'] = fthm0i === null ? Object['create'](fthm0i) : (hbm['prototype'] = fthm0i['prototype'], new hbm());
  };
}(),
    fuibm = window['Sygame'],
    ftmqh0 = ![],
    fm0hftq = function () {
  function r8ez7() {}return r8ez7['init'] = function () {
    ftmqh0 ? this['sygame'] = { 'channel': '3477d2273abd484ba2a0e04ad4971b3c', 'role_id': undefined, 'openid': 'oxmOf5biumkGash-Xht9FVAlswVk', 'appid': 'wx2936121c4817bf46' } : this['sygame'] = fuibm;
  }, r8ez7['getTimeStamp'] = function () {
    return new Date()['getTime']();
  }, r8ez7['setResMap'] = function (k4256_, g1vb9u) {
    this['resMap'][k4256_] = k4256_ + '?' + g1vb9u;
  }, r8ez7['getResMap'] = function (z$e) {
    return this['resMap'][z$e];
  }, r8ez7['resMap'] = {}, r8ez7;
}(),
    fxwsdn = function () {
  function o6k2_4() {
    this['getIcon'] = 'https://wx.11babay.cn/uploads/f/fkccc1532944783/5/2/c/7/60dc442c4fbc5.png', this['copyIcon'] = 'https://wx.11babay.cn/uploads/f/fkccc1532944783/3/0/1/7/60dc4409dce39.png', fm0hftq['init'](), this['getBoxCheckoutCode']();
  }return o6k2_4['prototype']['send'] = function (himtf, xj, k0h_q5, z7r8x, csjwdn) {
    z7r8x === void 0x0 && (z7r8x = 'get');csjwdn === void 0x0 && (csjwdn = '' || null);var ftvib = new Laya['HttpRequest']();ftvib['http']['timeout'] = 0x2710, ftvib['once'](Laya['Event']['COMPLETE'], this, xj), ftvib['once'](Laya['Event']['ERROR'], this, k0h_q5), ftvib['send'](himtf, csjwdn, z7r8x, 'text');
  }, o6k2_4['prototype']['postSidebarApi'] = function () {
    this['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=sidebarApi&channel=' + fm0hftq['sygame']['channel'], this['completeHandler'], this['errorHandler']);
  }, o6k2_4['prototype']['getBoxCheckoutCode'] = function () {
    var u1gv = Sygame['SY_CONF']['commitId'];this['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=getBoxCheckoutCode', this['getBoxCheckoutCodeRes'], this['errorHandler'], 'post', { 'commitId': u1gv });
  }, o6k2_4['prototype']['getBoxCheckoutCodeRes'] = function (coj42) {
    var q54_k = JSON['parse'](coj42);console['log']('getBoxCheckoutCode:', q54_k);if (q54_k['status'] == 0x3e9) {
      var wdnx = q54_k['info'];wdnx == 0xfa1 ? this['postSidebarApi']() : console['error']('盛也盒子\x20不显示' + q54_k);
    } else console['error']('盛也盒子 getBoxCheckoutCodeRes 其他错误' + q54_k);
  }, o6k2_4['prototype']['completeHandler'] = function (e8xnzw) {
    var q05th = JSON['parse'](e8xnzw);console['log'](q05th);switch (q05th['status']) {case 0x3e9:
        var vbg9u1 = [];q05th['msg']['basics_image_url'] && vbg9u1['push']({ 'url': q05th['msg']['basics_image_url'], 'type': Laya['Loader']['IMAGE'] }), q05th['msg']['public_code'] && vbg9u1['push']({ 'url': q05th['msg']['public_code'], 'type': Laya['Loader']['IMAGE'] }), q05th['msg']['vip_customer_service'] && vbg9u1['push']({ 'url': q05th['msg']['vip_customer_service'], 'type': Laya['Loader']['IMAGE'] }), q05th['msg']['vip_customer_service_not_add'] && vbg9u1['push']({ 'url': q05th['msg']['vip_customer_service_not_add'], 'type': Laya['Loader']['IMAGE'] }), q05th['msg']['game_center_image_url'] && vbg9u1['push']({ 'url': q05th['msg']['game_center_image_url'], 'type': Laya['Loader']['IMAGE'] }), q05th['msg']['vip_qrcode'] && vbg9u1['push']({ 'url': q05th['msg']['vip_qrcode'], 'type': Laya['Loader']['IMAGE'] }), q05th['msg']['getIcon'] && vbg9u1['push']({ 'url': this['getIcon'], 'type': Laya['Loader']['IMAGE'] }), q05th['msg']['copyIcon'] && vbg9u1['push']({ 'url': this['copyIcon'], 'type': Laya['Loader']['IMAGE'] });for (var g1v9b = 0x0, mfhq0 = q05th['msg']['follow_gift_list']; g1v9b < mfhq0['length']; g1v9b++) {
          var _4k2o = mfhq0[g1v9b];vbg9u1['push']({ 'url': _4k2o['url'], 'type': Laya['Loader']['IMAGE'] });
        }for (var d6oscj = 0x0, cwsojd = q05th['msg']['vip_box_list']; d6oscj < cwsojd['length']; d6oscj++) {
          var _4k2o = cwsojd[d6oscj];vbg9u1['push']({ 'url': _4k2o['url'], 'type': Laya['Loader']['IMAGE'] });
        }for (var cd2o = 0x0; cd2o < vbg9u1['length']; cd2o++) {
          fm0hftq['setResMap'](vbg9u1[cd2o]['url'], fm0hftq['getTimeStamp']()), vbg9u1[cd2o]['url'] = fm0hftq['getResMap'](vbg9u1[cd2o]['url']);
        }Laya['loader']['load'](vbg9u1, Laya['Handler']['create'](this, this['initGame'])), this['data'] = q05th['msg'];break;case 0x3ea:
        ftmihf0['msg']('空的游戏channel');break;case 0x3eb:
        ftmihf0['msg']('错误的游戏channel');break;case 0x3ec:
        ftmihf0['msg']('未找到对应游戏大类');break;case 0x3ed:
        ftmihf0['msg']('未设置侧边栏');break;}
  }, o6k2_4['prototype']['errorHandler'] = function (hq0tf5) {}, o6k2_4['prototype']['initGame'] = function () {
    var x87e = new f$7ray(this);x87e['show']();
  }, o6k2_4;
}(),
    f$7ray = function () {
  function r8z7(rz$78e) {
    this['page'] = 0x3, this['rolePriceData'] = {}, this['boxlist'] = [], this['donwX'] = 0x0, this['downY'] = 0x0, this['tool'] = rz$78e;
  }return r8z7['prototype']['setChildMouseThroughs'] = function (ry$8) {
    var nw8ex = ry$8['_childs'] || [];for (var mib1vu = 0x0; mib1vu < nw8ex['length']; mib1vu++) {
      nw8ex[mib1vu] && (nw8ex[mib1vu]['mouseThrough'] = !![]);
    }
  }, r8z7['prototype']['show'] = function () {
    if (this['tool']['data']['on'] === '1') {
      this['main'] = new fmftih0['demoui']['MainUI'](), Laya['stage']['addChild'](this['main']), this['main']['mouseThrough'] = !![];var exndsw = this['main']['_childs'] || [];for (var vimfub = 0x0; vimfub < exndsw['length']; vimfub++) {
        exndsw[vimfub]['mouseThrough'] = !![];
      }this['setChildMouseThroughs'](this['main']['_childs']), this['setChildMouseThroughs'](this['main']['_childs'][0x0]), this['initIcon'](), this['initEvent'](), this['initView'](), ftmihf0['init']();
    }
  }, r8z7['prototype']['initView'] = function () {
    var jdos = this,
        u1i9bv = this['tool']['data']['follow_down_words']['replace'](/\\n/g, '\x0a');this['main']['box_1_lab_info']['text'] = u1i9bv;for (var bvi1um = 0x1; bvi1um <= this['tool']['data']['follow_gift_list']['length']; bvi1um++) {
      var buvif = this['tool']['data']['follow_gift_list'][bvi1um - 0x1];this['main']['box_1_img_' + bvi1um]['skin'] = buvif['url'], this['main']['box_1_lab_' + bvi1um]['text'] = buvif['name'];
    }for (var bvi1um = 0x1; bvi1um <= this['tool']['data']['vip_box_list']['length']; bvi1um++) {
      var buvif = this['tool']['data']['vip_box_list'][bvi1um - 0x1];this['main']['box_2_img_' + bvi1um]['skin'] = buvif['url'], this['main']['box_2_lab_' + bvi1um]['text'] = buvif['name'];
    }this['main']['box_2_lab_m_1']['text'] = '方法一：单日充值' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_m_2']['text'] = '方法二：历史累计充值' + +this['tool']['data']['y'] + '元', this['main']['box_2_lab_v_1']['text'] = (this['rolePriceData']['todayPrice'] || 0x0) + '/' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_v_2']['text'] = (this['rolePriceData']['allPrice'] || 0x0) + '/' + +this['tool']['data']['y'] + '元', this['main']['box_2_btn_copy']['skin'] = this['tool']['copyIcon'], this['main']['box_2_btn_get']['skin'] = this['tool']['getIcon'], this['main']['box_2_btn_copy']['visible'] = ![], this['main']['box_2_btn_get']['on'](Laya['Event']['CLICK'], this, function () {
      if (jdos['rolePriceData']['is_vip'] == 0x0) {
        ftmihf0['msg']('请先获取vip资格');return;
      }jdos['main']['box_2_lab_wx']['text'] = jdos['tool']['data']['vip_wx'], jdos['main']['box_2_btn_copy']['visible'] = !![];
    }), this['main']['box_2_btn_copy']['on'](Laya['Event']['CLICK'], this, function () {
      jdos['copyText'](jdos['tool']['data']['vip_wx']);
    }), this['main']['box_2_addclick']['on'](Laya['Event']['CLICK'], this, function () {
      if (jdos['rolePriceData']['is_vip'] == 0x0) return;jdos['main']['box_help']['visible'] = !![];
    }), this['main']['box_help_close']['on'](Laya['Event']['CLICK'], this, function () {
      jdos['main']['box_help']['visible'] = ![];
    }), this['main']['box_help_bg']['skin'] = this['tool']['data']['vip_customer_service_not_add'], this['main']['box_help_qrcode']['skin'] = this['tool']['data']['vip_qrcode'], this['main']['box_help_qrcode']['scaleX'] = 0xa0 / this['main']['box_help_qrcode']['width'], this['main']['box_help_qrcode']['scaleY'] = 0xa0 / this['main']['box_help_qrcode']['width'], this['main']['box_3_panel']['vScrollBar']['visible'] = ![], this['main']['box_3_panel']['vScrollBarSkin'] = 'common_atlas/scrollBar.png';
  }, r8z7['prototype']['initIcon'] = function () {
    this['icon'] = new Laya['Image'](), this['icon']['skin'] = this['tool']['data']['basics_image_url'], this['icon']['x'] = 0x0, this['icon']['y'] = 0xc8, this['icon']['width'] = 0x66, this['icon']['height'] = 0x6f, this['main']['addChild'](this['icon']), this['icon']['on'](Laya['Event']['MOUSE_DOWN'], this, this['iconPress']), this['icon']['on'](Laya['Event']['MOUSE_UP'], this, this['iconUp']), this['icon']['on'](Laya['Event']['MOUSE_WHEEL'], this, this['iconMove']), this['dragRect'] = new Laya['Rectangle'](-this['icon']['width'] / 0x2, 0x0, Laya['stage']['width'], Laya['stage']['height'] - this['icon']['height'] / 0x2);
  }, r8z7['prototype']['initEvent'] = function () {
    var uv9g1b = this;this['main']['btn_1']['on'](Laya['Event']['CLICK'], this, function () {
      if (uv9g1b['page'] == 0x1) return;uv9g1b['page1']();
    }), this['main']['btn_2']['on'](Laya['Event']['CLICK'], this, function () {
      if (uv9g1b['page'] == 0x2) return;uv9g1b['page2']();
    }), this['main']['btn_3']['on'](Laya['Event']['CLICK'], this, function () {
      if (uv9g1b['page'] == 0x3) return;uv9g1b['page3']();
    }), this['main']['btn_close']['on'](Laya['Event']['CLICK'], this, function () {
      uv9g1b['main']['bg']['x'] = -0x2ee, uv9g1b['icon']['visible'] = !![];
    });
  }, r8z7['prototype']['initBoard'] = function () {
    this['isInitBoard'] = !![], this['page1']();
  }, r8z7['prototype']['showBoard'] = function () {
    this['main']['bg']['x'] = 0x0, this['icon']['visible'] = ![], this['tool']['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=sidebarApiRoleId&role_id=' + fm0hftq['sygame']['role_id'] + '&channel=' + fm0hftq['sygame']['channel'], this['rolePriceHandler']['bind'](this), this['roleError']['bind'](this));
  }, r8z7['prototype']['page1'] = function () {
    this['page'] = 0x1, this['main']['bg']['skin'] = this['tool']['data']['public_code'], this['main']['box_1_show']['visible'] = !![], this['main']['box_2_show']['visible'] = ![], this['main']['box_3_show']['visible'] = ![];
  }, r8z7['prototype']['page2'] = function () {
    this['page'] = 0x2, this['main']['bg']['skin'] = this['tool']['data']['vip_customer_service'], this['main']['box_1_show']['visible'] = ![], this['main']['box_2_show']['visible'] = !![], this['main']['box_3_show']['visible'] = ![];
  }, r8z7['prototype']['page3'] = function () {
    this['page'] = 0x3, this['main']['bg']['skin'] = this['tool']['data']['game_center_image_url'], this['main']['box_1_show']['visible'] = ![], this['main']['box_2_show']['visible'] = ![], this['main']['box_3_show']['visible'] = !![], this['sendBox'] || this['getBoxList'](0x0), this['sendBox'] = !![], fuibm && fuibm['syClickOpenBox']();
  }, r8z7['prototype']['getBoxList'] = function (cnjswd) {
    var ezw8n = this;fuibm && fuibm['syGetBoxList']({ 'page': cnjswd, 'count': 0xc })['then'](function (owcj) {
      var wcnds = owcj['data'];wcnds['status'] == 0x3e9 ? wcnds['data'] && wcnds['data']['length'] && (ezw8n['boxlist'] = ezw8n['boxlist']['concat'](wcnds['data']), cnjswd++, ezw8n['getBoxList'](cnjswd)) : ezw8n['boxListHandler']();
    });
  }, r8z7['prototype']['copyText'] = function (_kqh) {
    try {
      wx['setClipboardData']({ 'data': _kqh, 'success': function (_654k2) {
          console['log']('复制成功:', _654k2);
        } });
    } catch (o64cj2) {}
  }, r8z7['prototype']['rolePriceHandler'] = function (v9u1ib) {
    this['rolePriceData'] = JSON['parse'](v9u1ib);switch (this['rolePriceData']['status']) {case 0x3e9:
        this['main']['box_2_lab_v_1']['text'] = (this['rolePriceData']['todayPrice'] || 0x0) + '/' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_v_2']['text'] = (this['rolePriceData']['allPrice'] || 0x0) + '/' + +this['tool']['data']['y'] + '元';break;case 0x3ea:
        break;case 0x3eb:
        break;}
  }, r8z7['prototype']['roleError'] = function () {}, r8z7['prototype']['boxListHandler'] = function () {
    var f0qh5 = function (btifm) {
      var wsdjxn = u9ivb1['boxlist'][btifm],
          hbiftm = new fmftih0['demoui']['BoxItemUI']();hbiftm['icon']['skin'] = wsdjxn['icon'], hbiftm['title']['text'] = wsdjxn['title'], hbiftm['x'] = 0xa0 * (btifm % 0x3), hbiftm['y'] = 0xa0 * (btifm / 0x3 ^ 0x0), u9ivb1['main']['box_3_panel']['addChild'](hbiftm);var thq0f5 = { 'appid': fm0hftq['sygame']['appid'], 'game_id': wsdjxn['game_id'], 'jump_appid': wsdjxn['jump_appid'], 'jump_path': wsdjxn['jump_path'], 'tunnel_id': wsdjxn['tunnel_id'], 'uv': 0x0, 'wecha_id': fm0hftq['sygame']['openid'] },
          ko6 = wsdjxn['preview_img'],
          mhitbf = wsdjxn['jump_type'],
          o26k4 = wsdjxn['kf_session'];hbiftm['on'](Laya['Event']['CLICK'], u9ivb1, function () {
        fuibm && fuibm['syClickBox']({ 'game_id': wsdjxn['game_id'], 'tunnel_id': wsdjxn['tunnel_id'], 'jump_appid': wsdjxn['jump_appid'], 'jump_path': wsdjxn['jump_path'] })['then'](function (dwjosc) {
          if (mhitbf === '0') wx['navigateToMiniProgram']({ 'appId': thq0f5['jump_appid'], 'path': thq0f5['jump_path'], 'fail': function (sojc6) {
              if (!ko6) return;wx['previewImage']({ 'urls': [ko6] });
            } });else {
            if (mhitbf === '1') {
              if (!ko6) return;wx['previewImage']({ 'urls': [ko6] });
            } else {
              if (mhitbf === '2') {
                if (!o26k4) return;wx['openCustomerServiceConversation']({ 'sessionFrom': o26k4, 'showMessageCard': !![], 'sendMessageTitle': '', 'sendMessagePath': '', 'sendMessageImg': '' });
              }
            }
          }
        });
      });
    },
        u9ivb1 = this;for (var scd = 0x0; scd < this['boxlist']['length']; scd++) {
      f0qh5(scd);
    }
  }, r8z7['prototype']['boxListError'] = function () {}, r8z7['prototype']['boxClickHandler'] = function () {}, r8z7['prototype']['iconPress'] = function (mi0ht) {
    this['donwX'] = mi0ht['target']['x'], this['donwY'] = mi0ht['target']['y'], this['icon']['startDrag'](this['dragRect']), this['isMove'] = ![], this['isPress'] = !![];
  }, r8z7['prototype']['iconMove'] = function (xsezwn) {
    this['isMove'] = !![];
  }, r8z7['prototype']['iconUp'] = function (j26do) {
    var k624o_ = j26do['target']['x'],
        umi = j26do['target']['y'];this['icon']['stopDrag'](), k624o_ == this['donwX'] && this['donwY'] == umi && (this['isInitBoard'] || this['initBoard'](), this['showBoard']()), this['isMove'] = ![], this['isPress'] = ![];
  }, r8z7;
}(),
    fmftih0;(function (nz8xer) {
  var jnscwd;(function (enxws) {
    var fqh0t5 = function (p7a3$) {
      ff0q5ht(vgu19, p7a3$);function vgu19() {
        return p7a3$['call'](this) || this;
      }return vgu19['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), p7a3$['prototype']['createChildren']['call'](this), this['createView'](nz8xer['demoui']['BoxItemUI']['uiView']);
      }, vgu19['uiView'] = { 'type': 'View', 'props': { 'width': 0xb4, 'height': 0xa0 }, 'child': [{ 'type': 'Image', 'props': { 'y': 0x3, 'x': 0x20, 'width': 0x73, 'var': 'icon', 'height': 0x73 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x79, 'x': -0x21, 'width': 0xb4, 'var': 'title', 'valign': 'middle', 'height': 0x22, 'fontSize': 0x16, 'color': '#441d1c', 'align': 'center' } }] }] }, vgu19;
    }(laya['ui']['View']);enxws['BoxItemUI'] = fqh0t5;
  })(jnscwd = nz8xer['demoui'] || (nz8xer['demoui'] = {}));
})(fmftih0 || (fmftih0 = {})), function (qk05_4) {
  var yr3$7a;(function (imfvbu) {
    var zxne = function (w8exnz) {
      ff0q5ht(zren, w8exnz);function zren() {
        return w8exnz['call'](this) || this;
      }return zren['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), w8exnz['prototype']['createChildren']['call'](this), this['createView'](qk05_4['demoui']['MainUI']['uiView']);
      }, zren['uiView'] = { 'type': 'View', 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x2ee, 'top': 0x0, 'right': 0x0, 'left': 0x0, 'height': 0x536, 'bottom': 0x0 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x2ee, 'height': 0x536, 'centerY': 0x0 }, 'child': [{ 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x2ee, 'var': 'bg', 'height': 0x536 }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x2ee, 'visible': ![], 'var': 'box_1_show', 'height': 0x536, 'centerY': 0x0 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x253, 'x': 0x2e, 'width': 0x1d0, 'var': 'box_1_lab_info', 'leading': 0xa, 'height': 0x97, 'fontSize': 0x18, 'color': '#a959ee' } }, { 'type': 'HBox', 'props': { 'y': 0x2ee, 'x': 0x14, 'width': 0x1fe, 'space': 0x35, 'height': 0x78, 'align': 'top' }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x58, 'var': 'box_1_img_1', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_1', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0xa, 'x': 0xa, 'width': 0x58, 'var': 'box_1_img_2', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_2', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x14, 'x': 0x14, 'width': 0x58, 'var': 'box_1_img_3', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_3', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x1e, 'x': 0x1e, 'width': 0x58, 'var': 'box_1_img_4', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_4', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }] }] }, { 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'visible': ![], 'var': 'box_2_show' }, 'child': [{ 'type': 'HBox', 'props': { 'y': 0x220, 'x': 0x18, 'width': 0x1f4, 'space': 0x2c, 'height': 0x56, 'align': 'top' }, 'child': [{ 'type': 'Image', 'props': { 'y': 2.5, 'x': 0x0, 'width': 0x58, 'var': 'box_2_img_1', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_1', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0xc, 'x': 0xa, 'width': 0x58, 'var': 'box_2_img_2', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_2', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x16, 'x': 0x14, 'width': 0x58, 'var': 'box_2_img_3', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_3', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x20, 'x': 0x1e, 'width': 0x58, 'var': 'box_2_img_4', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_4', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x2a, 'x': 0x28, 'width': 0x58, 'var': 'box_2_img_5', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_5', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }] }, { 'type': 'Box', 'props': { 'y': 0x384, 'x': 0x0, 'width': 0x221, 'height': 0x44 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x0, 'x': 0x28, 'width': 0x122, 'var': 'box_2_lab_m_1', 'text': '方法一\uFF1A单日充值1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300' } }, { 'type': 'Text', 'props': { 'y': 0x1e, 'x': 0x28, 'width': 0x122, 'var': 'box_2_lab_m_2', 'text': '方法一\uFF1A历史累计充值1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300' } }, { 'type': 'Text', 'props': { 'y': 0x0, 'x': 0x141, 'width': 0xa4, 'var': 'box_2_lab_v_1', 'text': '1000/1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300', 'align': 'right' } }, { 'type': 'Text', 'props': { 'y': 0x1e, 'x': 0x141, 'width': 0xa4, 'var': 'box_2_lab_v_2', 'text': '1000/1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300', 'align': 'right' } }] }, { 'type': 'Image', 'props': { 'y': 0x1aa, 'x': 0x159, 'width': 0x66, 'var': 'box_2_btn_get', 'stateNum': 0x1, 'height': 0x26 } }, { 'type': 'Image', 'props': { 'y': 0x1aa, 'x': 0x159, 'width': 0x66, 'var': 'box_2_btn_copy', 'stateNum': 0x1, 'height': 0x26 } }, { 'type': 'Button', 'props': { 'y': 0x1d2, 'x': 0x126, 'width': 0xc9, 'var': 'box_2_addclick', 'stateNum': 0x1, 'height': 0x1b } }, { 'type': 'Text', 'props': { 'y': 0x13c, 'x': 0x17a, 'width': 0xa3, 'var': 'box_2_lab_wx', 'height': 0x1f, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'left' } }] }, { 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'visible': ![], 'var': 'box_3_show' }, 'child': [{ 'type': 'Panel', 'props': { 'y': 0xf5, 'x': 0x10, 'width': 0x201, 'var': 'box_3_panel', 'vScrollBarSkin': '', 'height': 0x29e } }] }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0x0, 'width': 0xbb, 'var': 'btn_1', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0xba, 'width': 0xbb, 'var': 'btn_2', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0x177, 'width': 0xbb, 'var': 'btn_3', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x203, 'x': 0x22e, 'width': 0x25, 'var': 'btn_close', 'height': 0x8f } }, { 'type': 'Box', 'props': { 'width': 0x2ee, 'visible': ![], 'var': 'box_help', 'height': 0x536 }, 'child': [{ 'type': 'Sprite', 'props': { 'y': 0x0, 'x': 0x0, 'mouseThrough': ![], 'alpha': 0.7 }, 'child': [{ 'type': 'Rect', 'props': { 'width': 0x2ee, 'lineWidth': 0x1, 'height': 0x536, 'fillColor': '#000000' } }] }, { 'type': 'Image', 'props': { 'y': 0x158, 'x': 0x28, 'width': 0x1d2, 'var': 'box_help_bg', 'height': 0x203 }, 'child': [{ 'type': 'Button', 'props': { 'y': -0x1, 'x': 0x1a0, 'width': 0x33, 'var': 'box_help_close', 'height': 0x28 } }, { 'type': 'Image', 'props': { 'y': 0x3f, 'x': 0x98, 'width': 0xa0, 'var': 'box_help_qrcode', 'height': 0xa0 } }] }] }] }] }] }, zren;
    }(laya['ui']['View']);imfvbu['MainUI'] = zxne;
  })(yr3$7a = qk05_4['demoui'] || (qk05_4['demoui'] = {}));
}(fmftih0 || (fmftih0 = {})), function (fiubm) {
  var vbfum;(function (mftvib) {
    var nesxzw = function (ze78$) {
      ff0q5ht(ubg19, ze78$);function ubg19() {
        return ze78$['call'](this) || this;
      }return ubg19['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), ze78$['prototype']['createChildren']['call'](this), this['createView'](fiubm['demoui']['ToastUI']['uiView']);
      }, ubg19['uiView'] = { 'type': 'View', 'props': { 'width': 0x2ee, 'height': 0x536 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x12c, 'height': 0x32, 'centerY': 0x0, 'centerX': 0x0 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x12c, 'height': 0x32, 'centerX': 0x0, 'alpha': 0.5 }, 'child': [{ 'type': 'Rect', 'props': { 'width': 0x12c, 'lineWidth': 0x1, 'height': 0x32, 'fillColor': '#382f2f' } }] }, { 'type': 'Text', 'props': { 'width': 0x12c, 'var': 'lab_msg', 'valign': 'middle', 'text': 'text', 'height': 0x32, 'fontSize': 0x18, 'color': '#ffffff', 'align': 'center' } }] }] }, ubg19;
    }(laya['ui']['View']);mftvib['ToastUI'] = nesxzw;
  })(vbfum = fiubm['demoui'] || (fiubm['demoui'] = {}));
}(fmftih0 || (fmftih0 = {}));var ftmihf0 = function () {
  function qh0kt5() {}return qh0kt5['init'] = function () {
    !this['ui'] && (this['ui'] = new fmftih0['demoui']['ToastUI'](), this['ui']['visible'] = ![], Laya['stage']['addChild'](this['ui']));
  }, qh0kt5['msg'] = function ($r738) {
    var q0_4k5 = this;!this['ui'] && qh0kt5['init'](), this['ui']['visible'] = !![], this['ui']['lab_msg']['text'] = $r738, clearTimeout(this['interval']), this['interval'] = setTimeout(function () {
      q0_4k5['ui']['visible'] = ![];
    }, 0x7d0);
  }, qh0kt5;
}();window['minitool'] = fxwsdn;