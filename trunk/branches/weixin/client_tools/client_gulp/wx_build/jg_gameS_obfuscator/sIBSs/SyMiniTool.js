var K = wx.$S;
var sh5qsp = this && this['__extends'] || function () {
  var czk90 = function (ashd5, wi_9c0) {
    return czk90 = Object['setPrototypeOf'] || { '__proto__': [] } instanceof Array && function (u3eor, ds5hpy) {
      u3eor['__proto__'] = ds5hpy;
    } || function (c_09w, e$a4r) {
      for (var rzok in e$a4r) if (e$a4r['hasOwnProperty'](rzok)) c_09w[rzok] = e$a4r[rzok];
    }, czk90(ashd5, wi_9c0);
  };return function (kczw9, vozr3u) {
    czk90(kczw9, vozr3u);function zk3vo9() {
      this['constructor'] = kczw9;
    }kczw9['prototype'] = vozr3u === null ? Object['create'](vozr3u) : (zk3vo9['prototype'] = vozr3u['prototype'], new zk3vo9());
  };
}(),
    sxicm = window['Sygame'],
    sw9_ck0 = ![],
    sov9k3z = function () {
  function vzr3k() {}return vzr3k['init'] = function () {
    sw9_ck0 ? this['sygame'] = { 'channel': '3477d2273abd484ba2a0e04ad4971b3c', 'role_id': undefined, 'openid': 'oxmOf5biumkGash-Xht9FVAlswVk', 'appid': 'wx2936121c4817bf46' } : this['sygame'] = sxicm;
  }, vzr3k['getTimeStamp'] = function () {
    return new Date()['getTime']();
  }, vzr3k['setResMap'] = function (xc0_im, v90kw) {
    this['resMap'][xc0_im] = xc0_im + '?' + v90kw;
  }, vzr3k['getResMap'] = function (qgyhsp) {
    return this['resMap'][qgyhsp];
  }, vzr3k['resMap'] = {}, vzr3k;
}(),
    sqshgyp = function () {
  function _0kc9() {
    this['getIcon'] = 'https://wx.11babay.cn/uploads/f/fkccc1532944783/5/2/c/7/60dc442c4fbc5.png', this['copyIcon'] = 'https://wx.11babay.cn/uploads/f/fkccc1532944783/3/0/1/7/60dc4409dce39.png', sov9k3z['init'](), this['postSidebarApi']();
  }return _0kc9['prototype']['send'] = function (kzw9v, imx_0c, b8jq1, e4d5$a, nt2mx) {
    e4d5$a === void 0x0 && (e4d5$a = 'get');nt2mx === void 0x0 && (nt2mx = '' || null);var i2mn_ = new Laya['HttpRequest']();i2mn_['http']['timeout'] = 0x2710, i2mn_['once'](Laya['Event']['COMPLETE'], this, imx_0c), i2mn_['once'](Laya['Event']['ERROR'], this, b8jq1), i2mn_['send'](kzw9v, nt2mx, e4d5$a, 'text');
  }, _0kc9['prototype']['postSidebarApi'] = function () {
    this['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=sidebarApi&channel=' + sov9k3z['sygame']['channel'], this['completeHandler'], this['errorHandler']);
  }, _0kc9['prototype']['completeHandler'] = function (psqyh5) {
    var k0cw_9 = JSON['parse'](psqyh5);console['log'](k0cw_9);switch (k0cw_9['status']) {case 0x3e9:
        var i9_w = [];k0cw_9['msg']['basics_image_url'] && i9_w['push']({ 'url': k0cw_9['msg']['basics_image_url'], 'type': Laya['Loader']['IMAGE'] }), k0cw_9['msg']['public_code'] && i9_w['push']({ 'url': k0cw_9['msg']['public_code'], 'type': Laya['Loader']['IMAGE'] }), k0cw_9['msg']['vip_customer_service'] && i9_w['push']({ 'url': k0cw_9['msg']['vip_customer_service'], 'type': Laya['Loader']['IMAGE'] }), k0cw_9['msg']['vip_customer_service_not_add'] && i9_w['push']({ 'url': k0cw_9['msg']['vip_customer_service_not_add'], 'type': Laya['Loader']['IMAGE'] }), k0cw_9['msg']['game_center_image_url'] && i9_w['push']({ 'url': k0cw_9['msg']['game_center_image_url'], 'type': Laya['Loader']['IMAGE'] }), k0cw_9['msg']['vip_qrcode'] && i9_w['push']({ 'url': k0cw_9['msg']['vip_qrcode'], 'type': Laya['Loader']['IMAGE'] }), k0cw_9['msg']['getIcon'] && i9_w['push']({ 'url': this['getIcon'], 'type': Laya['Loader']['IMAGE'] }), k0cw_9['msg']['copyIcon'] && i9_w['push']({ 'url': this['copyIcon'], 'type': Laya['Loader']['IMAGE'] });for (var yjgpq = 0x0, f168b = k0cw_9['msg']['follow_gift_list']; yjgpq < f168b['length']; yjgpq++) {
          var jq1ps = f168b[yjgpq];i9_w['push']({ 'url': jq1ps['url'], 'type': Laya['Loader']['IMAGE'] });
        }for (var da$5e = 0x0, ysghq = k0cw_9['msg']['vip_box_list']; da$5e < ysghq['length']; da$5e++) {
          var jq1ps = ysghq[da$5e];i9_w['push']({ 'url': jq1ps['url'], 'type': Laya['Loader']['IMAGE'] });
        }for (var mtxin = 0x0; mtxin < i9_w['length']; mtxin++) {
          sov9k3z['setResMap'](i9_w[mtxin]['url'], sov9k3z['getTimeStamp']()), i9_w[mtxin]['url'] = sov9k3z['getResMap'](i9_w[mtxin]['url']);
        }Laya['loader']['load'](i9_w, Laya['Handler']['create'](this, this['initGame'])), this['data'] = k0cw_9['msg'];break;case 0x3ea:
        sd5a4$h['msg']('空的游戏channel');break;case 0x3eb:
        sd5a4$h['msg']('错误的游戏channel');break;case 0x3ec:
        sd5a4$h['msg']('未找到对应游戏大类');break;case 0x3ed:
        sd5a4$h['msg']('未设置侧边栏');break;}
  }, _0kc9['prototype']['errorHandler'] = function (jgb8q1) {}, _0kc9['prototype']['initGame'] = function () {
    var r$u4e = new szvo9kw(this);r$u4e['show']();
  }, _0kc9;
}(),
    szvo9kw = function () {
  function hspyd(shyq5p) {
    this['page'] = 0x3, this['rolePriceData'] = {}, this['boxlist'] = [], this['donwX'] = 0x0, this['downY'] = 0x0, this['tool'] = shyq5p;
  }return hspyd['prototype']['setChildMouseThroughs'] = function (kw0c_) {
    var nxm_2i = kw0c_['_childs'] || [];for (var uver3 = 0x0; uver3 < nxm_2i['length']; uver3++) {
      nxm_2i[uver3] && (nxm_2i[uver3]['mouseThrough'] = !![]);
    }
  }, hspyd['prototype']['show'] = function () {
    if (this['tool']['data']['on'] === '1') {
      this['main'] = new sx2_ic['demoui']['MainUI'](), Laya['stage']['addChild'](this['main']), this['main']['mouseThrough'] = !![];var jb6g8 = this['main']['_childs'] || [];for (var d5ah4$ = 0x0; d5ah4$ < jb6g8['length']; d5ah4$++) {
        jb6g8[d5ah4$]['mouseThrough'] = !![];
      }this['setChildMouseThroughs'](this['main']['_childs']), this['setChildMouseThroughs'](this['main']['_childs'][0x0]), this['initIcon'](), this['initEvent'](), this['initView'](), sd5a4$h['init']();
    }
  }, hspyd['prototype']['initView'] = function () {
    var d5psy = this,
        k_9wc = this['tool']['data']['follow_down_words']['replace'](/\\n/g, '\x0a');this['main']['box_1_lab_info']['text'] = k_9wc;for (var o3re4u = 0x1; o3re4u <= this['tool']['data']['follow_gift_list']['length']; o3re4u++) {
      var m2xc = this['tool']['data']['follow_gift_list'][o3re4u - 0x1];this['main']['box_1_img_' + o3re4u]['skin'] = m2xc['url'], this['main']['box_1_lab_' + o3re4u]['text'] = m2xc['name'];
    }for (var o3re4u = 0x1; o3re4u <= this['tool']['data']['vip_box_list']['length']; o3re4u++) {
      var m2xc = this['tool']['data']['vip_box_list'][o3re4u - 0x1];this['main']['box_2_img_' + o3re4u]['skin'] = m2xc['url'], this['main']['box_2_lab_' + o3re4u]['text'] = m2xc['name'];
    }this['main']['box_2_lab_m_1']['text'] = '方法一：单日充值' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_m_2']['text'] = '方法二：历史累计充值' + +this['tool']['data']['y'] + '元', this['main']['box_2_lab_v_1']['text'] = (this['rolePriceData']['todayPrice'] || 0x0) + '/' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_v_2']['text'] = (this['rolePriceData']['allPrice'] || 0x0) + '/' + +this['tool']['data']['y'] + '元', this['main']['box_2_btn_copy']['skin'] = this['tool']['copyIcon'], this['main']['box_2_btn_get']['skin'] = this['tool']['getIcon'], this['main']['box_2_btn_copy']['visible'] = ![], this['main']['box_2_btn_get']['on'](Laya['Event']['CLICK'], this, function () {
      if (d5psy['rolePriceData']['is_vip'] == 0x0) {
        sd5a4$h['msg']('请先获取vip资格');return;
      }d5psy['main']['box_2_lab_wx']['text'] = d5psy['tool']['data']['vip_wx'], d5psy['main']['box_2_btn_copy']['visible'] = !![];
    }), this['main']['box_2_btn_copy']['on'](Laya['Event']['CLICK'], this, function () {
      d5psy['copyText'](d5psy['tool']['data']['vip_wx']);
    }), this['main']['box_2_addclick']['on'](Laya['Event']['CLICK'], this, function () {
      if (d5psy['rolePriceData']['is_vip'] == 0x0) return;d5psy['main']['box_help']['visible'] = !![];
    }), this['main']['box_help_close']['on'](Laya['Event']['CLICK'], this, function () {
      d5psy['main']['box_help']['visible'] = ![];
    }), this['main']['box_help_bg']['skin'] = this['tool']['data']['vip_customer_service_not_add'], this['main']['box_help_qrcode']['skin'] = this['tool']['data']['vip_qrcode'], this['main']['box_help_qrcode']['scaleX'] = 0xa0 / this['main']['box_help_qrcode']['width'], this['main']['box_help_qrcode']['scaleY'] = 0xa0 / this['main']['box_help_qrcode']['width'], this['main']['box_3_panel']['vScrollBar']['visible'] = ![], this['main']['box_3_panel']['vScrollBarSkin'] = 'common_atlas/scrollBar.png';
  }, hspyd['prototype']['initIcon'] = function () {
    this['icon'] = new Laya['Image'](), this['icon']['skin'] = this['tool']['data']['basics_image_url'], this['icon']['x'] = 0x0, this['icon']['y'] = 0xc8, this['icon']['width'] = 0x66, this['icon']['height'] = 0x6f, this['main']['addChild'](this['icon']), this['icon']['on'](Laya['Event']['MOUSE_DOWN'], this, this['iconPress']), this['icon']['on'](Laya['Event']['MOUSE_UP'], this, this['iconUp']), this['icon']['on'](Laya['Event']['MOUSE_WHEEL'], this, this['iconMove']), this['dragRect'] = new Laya['Rectangle'](-this['icon']['width'] / 0x2, 0x0, Laya['stage']['width'], Laya['stage']['height'] - this['icon']['height'] / 0x2);
  }, hspyd['prototype']['initEvent'] = function () {
    var xmnt7 = this;this['main']['btn_1']['on'](Laya['Event']['CLICK'], this, function () {
      if (xmnt7['page'] == 0x1) return;xmnt7['page1']();
    }), this['main']['btn_2']['on'](Laya['Event']['CLICK'], this, function () {
      if (xmnt7['page'] == 0x2) return;xmnt7['page2']();
    }), this['main']['btn_3']['on'](Laya['Event']['CLICK'], this, function () {
      if (xmnt7['page'] == 0x3) return;xmnt7['page3']();
    }), this['main']['btn_close']['on'](Laya['Event']['CLICK'], this, function () {
      xmnt7['main']['bg']['x'] = -0x2ee, xmnt7['icon']['visible'] = !![];
    });
  }, hspyd['prototype']['initBoard'] = function () {
    this['isInitBoard'] = !![], this['page1']();
  }, hspyd['prototype']['showBoard'] = function () {
    this['main']['bg']['x'] = 0x0, this['icon']['visible'] = ![], this['tool']['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=sidebarApiRoleId&role_id=' + sov9k3z['sygame']['role_id'] + '&channel=' + sov9k3z['sygame']['channel'], this['rolePriceHandler']['bind'](this), this['roleError']['bind'](this));
  }, hspyd['prototype']['page1'] = function () {
    this['page'] = 0x1, this['main']['bg']['skin'] = this['tool']['data']['public_code'], this['main']['box_1_show']['visible'] = !![], this['main']['box_2_show']['visible'] = ![], this['main']['box_3_show']['visible'] = ![];
  }, hspyd['prototype']['page2'] = function () {
    this['page'] = 0x2, this['main']['bg']['skin'] = this['tool']['data']['vip_customer_service'], this['main']['box_1_show']['visible'] = ![], this['main']['box_2_show']['visible'] = !![], this['main']['box_3_show']['visible'] = ![];
  }, hspyd['prototype']['page3'] = function () {
    this['page'] = 0x3, this['main']['bg']['skin'] = this['tool']['data']['game_center_image_url'], this['main']['box_1_show']['visible'] = ![], this['main']['box_2_show']['visible'] = ![], this['main']['box_3_show']['visible'] = !![], this['sendBox'] || this['getBoxList'](0x0), this['sendBox'] = !![], sxicm && sxicm['syClickOpenBox']();
  }, hspyd['prototype']['getBoxList'] = function (jlb86) {
    var krvo = this;sxicm && sxicm['syGetBoxList']({ 'page': jlb86, 'count': 0xc })['then'](function (uer43) {
      var hsp5dy = uer43['data'];hsp5dy['status'] == 0x3e9 ? hsp5dy['data'] && hsp5dy['data']['length'] && (krvo['boxlist'] = krvo['boxlist']['concat'](hsp5dy['data']), jlb86++, krvo['getBoxList'](jlb86)) : krvo['boxListHandler']();
    });
  }, hspyd['prototype']['copyText'] = function (bj16l) {
    try {
      wx['setClipboardData']({ 'data': bj16l, 'success': function (xi0_cm) {
          console['log']('复制成功:', xi0_cm);
        } });
    } catch (qyp5sh) {}
  }, hspyd['prototype']['rolePriceHandler'] = function (d5ashy) {
    this['rolePriceData'] = JSON['parse'](d5ashy);switch (this['rolePriceData']['status']) {case 0x3e9:
        this['main']['box_2_lab_v_1']['text'] = (this['rolePriceData']['todayPrice'] || 0x0) + '/' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_v_2']['text'] = (this['rolePriceData']['allPrice'] || 0x0) + '/' + +this['tool']['data']['y'] + '元';break;case 0x3ea:
        break;case 0x3eb:
        break;}
  }, hspyd['prototype']['roleError'] = function () {}, hspyd['prototype']['boxListHandler'] = function () {
    var kc90w_ = function (k0w9zv) {
      var sydp = jg86['boxlist'][k0w9zv],
          wkz90v = new sx2_ic['demoui']['BoxItemUI']();wkz90v['icon']['skin'] = sydp['icon'], wkz90v['title']['text'] = sydp['title'], wkz90v['x'] = 0xa0 * (k0w9zv % 0x3), wkz90v['y'] = 0xa0 * (k0w9zv / 0x3 ^ 0x0), jg86['main']['box_3_panel']['addChild'](wkz90v);var lf8 = { 'appid': sov9k3z['sygame']['appid'], 'game_id': sydp['game_id'], 'jump_appid': sydp['jump_appid'], 'jump_path': sydp['jump_path'], 'tunnel_id': sydp['tunnel_id'], 'uv': 0x0, 'wecha_id': sov9k3z['sygame']['openid'] },
          mc = sydp['preview_img'],
          spjq1g = sydp['jump_type'],
          xmti2n = sydp['kf_session'];wkz90v['on'](Laya['Event']['CLICK'], jg86, function () {
        sxicm && sxicm['syClickBox']({ 'game_id': sydp['game_id'], 'tunnel_id': sydp['tunnel_id'], 'jump_appid': sydp['jump_appid'], 'jump_path': sydp['jump_path'] })['then'](function ($4re3u) {
          if (spjq1g === '0') wx['navigateToMiniProgram']({ 'appId': lf8['jump_appid'], 'path': lf8['jump_path'], 'fail': function (kvwz9) {
              if (!mc) return;wx['previewImage']({ 'urls': [mc] });
            } });else {
            if (spjq1g === '1') {
              if (!mc) return;wx['previewImage']({ 'urls': [mc] });
            } else {
              if (spjq1g === '2') {
                if (!xmti2n) return;wx['openCustomerServiceConversation']({ 'sessionFrom': xmti2n, 'showMessageCard': !![], 'sendMessageTitle': '', 'sendMessagePath': '', 'sendMessageImg': '' });
              }
            }
          }
        });
      });
    },
        jg86 = this;for (var b8jg16 = 0x0; b8jg16 < this['boxlist']['length']; b8jg16++) {
      kc90w_(b8jg16);
    }
  }, hspyd['prototype']['boxListError'] = function () {}, hspyd['prototype']['boxClickHandler'] = function () {}, hspyd['prototype']['iconPress'] = function (gq18p) {
    this['donwX'] = gq18p['target']['x'], this['donwY'] = gq18p['target']['y'], this['icon']['startDrag'](this['dragRect']), this['isMove'] = ![], this['isPress'] = !![];
  }, hspyd['prototype']['iconMove'] = function (dh5$ay) {
    this['isMove'] = !![];
  }, hspyd['prototype']['iconUp'] = function (vw0z9k) {
    var u4rae$ = vw0z9k['target']['x'],
        hd5yps = vw0z9k['target']['y'];this['icon']['stopDrag'](), u4rae$ == this['donwX'] && this['donwY'] == hd5yps && (this['isInitBoard'] || this['initBoard'](), this['showBoard']()), this['isMove'] = ![], this['isPress'] = ![];
  }, hspyd;
}(),
    sx2_ic;(function (vk9wz) {
  var r3e4o;(function (xi2mc_) {
    var j86b1 = function (b16gj) {
      sh5qsp(zkov9, b16gj);function zkov9() {
        return b16gj['call'](this) || this;
      }return zkov9['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), b16gj['prototype']['createChildren']['call'](this), this['createView'](vk9wz['demoui']['BoxItemUI']['uiView']);
      }, zkov9['uiView'] = { 'type': 'View', 'props': { 'width': 0xb4, 'height': 0xa0 }, 'child': [{ 'type': 'Image', 'props': { 'y': 0x3, 'x': 0x20, 'width': 0x73, 'var': 'icon', 'height': 0x73 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x79, 'x': -0x21, 'width': 0xb4, 'var': 'title', 'valign': 'middle', 'height': 0x22, 'fontSize': 0x16, 'color': '#441d1c', 'align': 'center' } }] }] }, zkov9;
    }(laya['ui']['View']);xi2mc_['BoxItemUI'] = j86b1;
  })(r3e4o = vk9wz['demoui'] || (vk9wz['demoui'] = {}));
})(sx2_ic || (sx2_ic = {})), function (kv0z9) {
  var ysadh5;(function (x7mn2) {
    var dah5y = function ($a4eu) {
      sh5qsp(gpys, $a4eu);function gpys() {
        return $a4eu['call'](this) || this;
      }return gpys['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), $a4eu['prototype']['createChildren']['call'](this), this['createView'](kv0z9['demoui']['MainUI']['uiView']);
      }, gpys['uiView'] = { 'type': 'View', 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x2ee, 'top': 0x0, 'right': 0x0, 'left': 0x0, 'height': 0x536, 'bottom': 0x0 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x2ee, 'height': 0x536, 'centerY': 0x0 }, 'child': [{ 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x2ee, 'var': 'bg', 'height': 0x536 }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x2ee, 'visible': ![], 'var': 'box_1_show', 'height': 0x536, 'centerY': 0x0 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x253, 'x': 0x2e, 'width': 0x1d0, 'var': 'box_1_lab_info', 'leading': 0xa, 'height': 0x97, 'fontSize': 0x18, 'color': '#a959ee' } }, { 'type': 'HBox', 'props': { 'y': 0x2ee, 'x': 0x14, 'width': 0x1fe, 'space': 0x35, 'height': 0x78, 'align': 'top' }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x58, 'var': 'box_1_img_1', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_1', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0xa, 'x': 0xa, 'width': 0x58, 'var': 'box_1_img_2', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_2', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x14, 'x': 0x14, 'width': 0x58, 'var': 'box_1_img_3', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_3', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x1e, 'x': 0x1e, 'width': 0x58, 'var': 'box_1_img_4', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_4', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }] }] }, { 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'visible': ![], 'var': 'box_2_show' }, 'child': [{ 'type': 'HBox', 'props': { 'y': 0x220, 'x': 0x18, 'width': 0x1f4, 'space': 0x2c, 'height': 0x56, 'align': 'top' }, 'child': [{ 'type': 'Image', 'props': { 'y': 2.5, 'x': 0x0, 'width': 0x58, 'var': 'box_2_img_1', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_1', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0xc, 'x': 0xa, 'width': 0x58, 'var': 'box_2_img_2', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_2', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x16, 'x': 0x14, 'width': 0x58, 'var': 'box_2_img_3', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_3', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x20, 'x': 0x1e, 'width': 0x58, 'var': 'box_2_img_4', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_4', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x2a, 'x': 0x28, 'width': 0x58, 'var': 'box_2_img_5', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_5', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }] }, { 'type': 'Box', 'props': { 'y': 0x384, 'x': 0x0, 'width': 0x221, 'height': 0x44 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x0, 'x': 0x28, 'width': 0x122, 'var': 'box_2_lab_m_1', 'text': '方法一\uFF1A单日充值1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300' } }, { 'type': 'Text', 'props': { 'y': 0x1e, 'x': 0x28, 'width': 0x122, 'var': 'box_2_lab_m_2', 'text': '方法一\uFF1A历史累计充值1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300' } }, { 'type': 'Text', 'props': { 'y': 0x0, 'x': 0x141, 'width': 0xa4, 'var': 'box_2_lab_v_1', 'text': '1000/1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300', 'align': 'right' } }, { 'type': 'Text', 'props': { 'y': 0x1e, 'x': 0x141, 'width': 0xa4, 'var': 'box_2_lab_v_2', 'text': '1000/1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300', 'align': 'right' } }] }, { 'type': 'Image', 'props': { 'y': 0x1aa, 'x': 0x159, 'width': 0x66, 'var': 'box_2_btn_get', 'stateNum': 0x1, 'height': 0x26 } }, { 'type': 'Image', 'props': { 'y': 0x1aa, 'x': 0x159, 'width': 0x66, 'var': 'box_2_btn_copy', 'stateNum': 0x1, 'height': 0x26 } }, { 'type': 'Button', 'props': { 'y': 0x1d2, 'x': 0x126, 'width': 0xc9, 'var': 'box_2_addclick', 'stateNum': 0x1, 'height': 0x1b } }, { 'type': 'Text', 'props': { 'y': 0x13c, 'x': 0x17a, 'width': 0xa3, 'var': 'box_2_lab_wx', 'height': 0x1f, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'left' } }] }, { 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'visible': ![], 'var': 'box_3_show' }, 'child': [{ 'type': 'Panel', 'props': { 'y': 0xf5, 'x': 0x10, 'width': 0x201, 'var': 'box_3_panel', 'vScrollBarSkin': '', 'height': 0x29e } }] }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0x0, 'width': 0xbb, 'var': 'btn_1', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0xba, 'width': 0xbb, 'var': 'btn_2', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0x177, 'width': 0xbb, 'var': 'btn_3', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x203, 'x': 0x22e, 'width': 0x25, 'var': 'btn_close', 'height': 0x8f } }, { 'type': 'Box', 'props': { 'width': 0x2ee, 'visible': ![], 'var': 'box_help', 'height': 0x536 }, 'child': [{ 'type': 'Sprite', 'props': { 'y': 0x0, 'x': 0x0, 'mouseThrough': ![], 'alpha': 0.7 }, 'child': [{ 'type': 'Rect', 'props': { 'width': 0x2ee, 'lineWidth': 0x1, 'height': 0x536, 'fillColor': '#000000' } }] }, { 'type': 'Image', 'props': { 'y': 0x158, 'x': 0x28, 'width': 0x1d2, 'var': 'box_help_bg', 'height': 0x203 }, 'child': [{ 'type': 'Button', 'props': { 'y': -0x1, 'x': 0x1a0, 'width': 0x33, 'var': 'box_help_close', 'height': 0x28 } }, { 'type': 'Image', 'props': { 'y': 0x3f, 'x': 0x98, 'width': 0xa0, 'var': 'box_help_qrcode', 'height': 0xa0 } }] }] }] }] }] }, gpys;
    }(laya['ui']['View']);x7mn2['MainUI'] = dah5y;
  })(ysadh5 = kv0z9['demoui'] || (kv0z9['demoui'] = {}));
}(sx2_ic || (sx2_ic = {})), function (sgqpj) {
  var _09kcw;(function (x2tmn7) {
    var mt7n2 = function (im2nx_) {
      sh5qsp(hsgqp, im2nx_);function hsgqp() {
        return im2nx_['call'](this) || this;
      }return hsgqp['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), im2nx_['prototype']['createChildren']['call'](this), this['createView'](sgqpj['demoui']['ToastUI']['uiView']);
      }, hsgqp['uiView'] = { 'type': 'View', 'props': { 'width': 0x2ee, 'height': 0x536 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x12c, 'height': 0x32, 'centerY': 0x0, 'centerX': 0x0 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x12c, 'height': 0x32, 'centerX': 0x0, 'alpha': 0.5 }, 'child': [{ 'type': 'Rect', 'props': { 'width': 0x12c, 'lineWidth': 0x1, 'height': 0x32, 'fillColor': '#382f2f' } }] }, { 'type': 'Text', 'props': { 'width': 0x12c, 'var': 'lab_msg', 'valign': 'middle', 'text': 'text', 'height': 0x32, 'fontSize': 0x18, 'color': '#ffffff', 'align': 'center' } }] }] }, hsgqp;
    }(laya['ui']['View']);x2tmn7['ToastUI'] = mt7n2;
  })(_09kcw = sgqpj['demoui'] || (sgqpj['demoui'] = {}));
}(sx2_ic || (sx2_ic = {}));var sd5a4$h = function () {
  function l8b6f1() {}return l8b6f1['init'] = function () {
    !this['ui'] && (this['ui'] = new sx2_ic['demoui']['ToastUI'](), this['ui']['visible'] = ![], Laya['stage']['addChild'](this['ui']));
  }, l8b6f1['msg'] = function (yh5s) {
    var b81l6 = this;!this['ui'] && l8b6f1['init'](), this['ui']['visible'] = !![], this['ui']['lab_msg']['text'] = yh5s, clearTimeout(this['interval']), this['interval'] = setTimeout(function () {
      b81l6['ui']['visible'] = ![];
    }, 0x7d0);
  }, l8b6f1;
}();window['minitool'] = sqshgyp;