var E = wx.$p;
var p_kpl4hs = this && this['__extends'] || function () {
  var $vy76 = function (tlfxpu, z0n3w5) {
    return $vy76 = Object['setPrototypeOf'] || { '__proto__': [] } instanceof Array && function (ltsh4p, ebnq89) {
      ltsh4p['__proto__'] = ebnq89;
    } || function (lxftup, j1y) {
      for (var qa8e in j1y) if (j1y['hasOwnProperty'](qa8e)) lxftup[qa8e] = j1y[qa8e];
    }, $vy76(tlfxpu, z0n3w5);
  };return function (aqdgcb, eq9b8a) {
    $vy76(aqdgcb, eq9b8a);function r7z2v0() {
      this['constructor'] = aqdgcb;
    }aqdgcb['prototype'] = eq9b8a === null ? Object['create'](eq9b8a) : (r7z2v0['prototype'] = eq9b8a['prototype'], new r7z2v0());
  };
}(),
    p_$16ivy = window['Sygame'],
    p_ze3wn5 = ![],
    p_$17vr = function () {
  function pkhs() {}return pkhs['init'] = function () {
    p_ze3wn5 ? this['sygame'] = { 'channel': '3477d2273abd484ba2a0e04ad4971b3c', 'role_id': undefined, 'openid': 'oxmOf5biumkGash-Xht9FVAlswVk', 'appid': 'wx2936121c4817bf46' } : this['sygame'] = p_$16ivy;
  }, pkhs['getTimeStamp'] = function () {
    return new Date()['getTime']();
  }, pkhs['setResMap'] = function (wn5e3, pjks4) {
    this['resMap'][wn5e3] = wn5e3 + '?' + pjks4;
  }, pkhs['getResMap'] = function (lt4upx) {
    return this['resMap'][lt4upx];
  }, pkhs['resMap'] = {}, pkhs;
}(),
    p_qbgadc = function () {
  function _ftlx() {
    this['getIcon'] = 'https://wx.11babay.cn/uploads/f/fkccc1532944783/5/2/c/7/60dc442c4fbc5.png', this['copyIcon'] = 'https://wx.11babay.cn/uploads/f/fkccc1532944783/3/0/1/7/60dc4409dce39.png', p_$17vr['init'](), this['getBoxCheckoutCode']();
  }return _ftlx['prototype']['send'] = function (y$j, bgc8q, ul_fx, tmxf, q9a8bg) {
    tmxf === void 0x0 && (tmxf = 'get');q9a8bg === void 0x0 && (q9a8bg = '' || null);var tlxu = new Laya['HttpRequest']();tlxu['http']['timeout'] = 0x2710, tlxu['once'](Laya['Event']['COMPLETE'], this, bgc8q), tlxu['once'](Laya['Event']['ERROR'], this, ul_fx), tlxu['send'](y$j, q9a8bg, tmxf, 'text');
  }, _ftlx['prototype']['postSidebarApi'] = function () {
    var ne5wz3 = p_$17vr['sygame']['openid'],
        lsth4 = '&channel=' + p_$17vr['sygame']['channel'] + '&wecha_id=' + ne5wz3;this['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=sidebarApi' + lsth4, this['completeHandler'], this['errorHandler']);
  }, _ftlx['prototype']['getBoxCheckoutCode'] = function () {
    var w305nz = Sygame['SY_CONF']['commitId'];this['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=getBoxCheckoutCode', this['getBoxCheckoutCodeRes'], this['errorHandler'], 'post', { 'commitId': w305nz });
  }, _ftlx['prototype']['getBoxCheckoutCodeRes'] = function (isyjhk) {
    var $ivy = JSON['parse'](isyjhk);console['log']('getBoxCheckoutCode:', $ivy);if ($ivy['status'] == 0x3e9) {
      var fxultp = $ivy['info'];fxultp == 0xfa1 ? this['postSidebarApi']() : console['error']('盛也盒子\x20不显示' + $ivy);
    } else console['error']('盛也盒子 getBoxCheckoutCodeRes 其他错误' + $ivy);
  }, _ftlx['prototype']['completeHandler'] = function (kh4l) {
    var r3w02z = JSON['parse'](kh4l);console['log'](r3w02z);switch (r3w02z['status']) {case 0x3e9:
        var i6jy1 = [];r3w02z['msg']['basics_image_url'] && i6jy1['push']({ 'url': r3w02z['msg']['basics_image_url'], 'type': Laya['Loader']['IMAGE'] }), r3w02z['msg']['public_code'] && i6jy1['push']({ 'url': r3w02z['msg']['public_code'], 'type': Laya['Loader']['IMAGE'] }), r3w02z['msg']['vip_customer_service'] && i6jy1['push']({ 'url': r3w02z['msg']['vip_customer_service'], 'type': Laya['Loader']['IMAGE'] }), r3w02z['msg']['vip_customer_service_not_add'] && i6jy1['push']({ 'url': r3w02z['msg']['vip_customer_service_not_add'], 'type': Laya['Loader']['IMAGE'] }), r3w02z['msg']['game_center_image_url'] && i6jy1['push']({ 'url': r3w02z['msg']['game_center_image_url'], 'type': Laya['Loader']['IMAGE'] }), r3w02z['msg']['vip_qrcode'] && i6jy1['push']({ 'url': r3w02z['msg']['vip_qrcode'], 'type': Laya['Loader']['IMAGE'] }), r3w02z['msg']['getIcon'] && i6jy1['push']({ 'url': this['getIcon'], 'type': Laya['Loader']['IMAGE'] }), r3w02z['msg']['copyIcon'] && i6jy1['push']({ 'url': this['copyIcon'], 'type': Laya['Loader']['IMAGE'] });for (var en35 = 0x0, moxf_u = r3w02z['msg']['follow_gift_list']; en35 < moxf_u['length']; en35++) {
          var aqcb8g = moxf_u[en35];i6jy1['push']({ 'url': aqcb8g['url'], 'type': Laya['Loader']['IMAGE'] });
        }for (var g8a9 = 0x0, ykh$ = r3w02z['msg']['vip_box_list']; g8a9 < ykh$['length']; g8a9++) {
          var aqcb8g = ykh$[g8a9];i6jy1['push']({ 'url': aqcb8g['url'], 'type': Laya['Loader']['IMAGE'] });
        }for (var ag8bc = 0x0; ag8bc < i6jy1['length']; ag8bc++) {
          p_$17vr['setResMap'](i6jy1[ag8bc]['url'], p_$17vr['getTimeStamp']()), i6jy1[ag8bc]['url'] = p_$17vr['getResMap'](i6jy1[ag8bc]['url']);
        }Laya['loader']['load'](i6jy1, Laya['Handler']['create'](this, this['initGame'])), this['data'] = r3w02z['msg'];break;case 0x3ea:
        p_e5znw['msg']('空的游戏channel');break;case 0x3eb:
        p_e5znw['msg']('错误的游戏channel');break;case 0x3ec:
        p_e5znw['msg']('未找到对应游戏大类');break;case 0x3ed:
        p_e5znw['msg']('未设置侧边栏');break;}
  }, _ftlx['prototype']['errorHandler'] = function (rw2) {}, _ftlx['prototype']['initGame'] = function () {
    var e589w = new p_agdqcb(this);e589w['show']();
  }, _ftlx;
}(),
    p_agdqcb = function () {
  function nq58(mxftu) {
    this['page'] = 0x3, this['rolePriceData'] = {}, this['boxlist'] = [], this['donwX'] = 0x0, this['downY'] = 0x0, this['tool'] = mxftu;
  }return nq58['prototype']['setChildMouseThroughs'] = function (up4ltx) {
    var $j16iy = up4ltx['_childs'] || [];for (var z023rw = 0x0; z023rw < $j16iy['length']; z023rw++) {
      $j16iy[z023rw] && ($j16iy[z023rw]['mouseThrough'] = !![]);
    }
  }, nq58['prototype']['show'] = function () {
    if (this['tool']['data']['on'] === '1') {
      this['main'] = new p_jyisk['demoui']['MainUI'](), Laya['stage']['addChild'](this['main']), this['main']['mouseThrough'] = !![];var oum_xf = this['main']['_childs'] || [];for (var ltfuxp = 0x0; ltfuxp < oum_xf['length']; ltfuxp++) {
        oum_xf[ltfuxp]['mouseThrough'] = !![];
      }this['setChildMouseThroughs'](this['main']['_childs']), this['setChildMouseThroughs'](this['main']['_childs'][0x0]), this['initIcon'](), this['initEvent'](), this['initView'](), p_e5znw['init']();
    }
  }, nq58['prototype']['initView'] = function () {
    var tfuxm_ = this,
        bgdacq = this['tool']['data']['follow_down_words']['replace'](/\\n/g, '\x0a');this['main']['box_1_lab_info']['text'] = bgdacq;for (var h4ptls = 0x1; h4ptls <= this['tool']['data']['follow_gift_list']['length']; h4ptls++) {
      var jik6 = this['tool']['data']['follow_gift_list'][h4ptls - 0x1];this['main']['box_1_img_' + h4ptls]['skin'] = jik6['url'], this['main']['box_1_lab_' + h4ptls]['text'] = jik6['name'];
    }for (var h4ptls = 0x1; h4ptls <= this['tool']['data']['vip_box_list']['length']; h4ptls++) {
      var jik6 = this['tool']['data']['vip_box_list'][h4ptls - 0x1];this['main']['box_2_img_' + h4ptls]['skin'] = jik6['url'], this['main']['box_2_lab_' + h4ptls]['text'] = jik6['name'];
    }this['main']['box_2_lab_m_1']['text'] = '方法一：单日充值' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_m_2']['text'] = '方法二：历史累计充值' + +this['tool']['data']['y'] + '元', this['main']['box_2_lab_v_1']['text'] = (this['rolePriceData']['todayPrice'] || 0x0) + '/' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_v_2']['text'] = (this['rolePriceData']['allPrice'] || 0x0) + '/' + +this['tool']['data']['y'] + '元', this['main']['box_2_btn_copy']['skin'] = this['tool']['copyIcon'], this['main']['box_2_btn_get']['skin'] = this['tool']['getIcon'], this['main']['box_2_btn_copy']['visible'] = ![], this['main']['box_2_btn_get']['on'](Laya['Event']['CLICK'], this, function () {
      if (tfuxm_['rolePriceData']['is_vip'] == 0x0) {
        p_e5znw['msg']('请先获取vip资格');return;
      }tfuxm_['main']['box_2_lab_wx']['text'] = this['rolePriceData']['vip_wx'], tfuxm_['main']['box_2_btn_copy']['visible'] = !![];
    }), this['main']['box_2_btn_copy']['on'](Laya['Event']['CLICK'], this, function () {
      tfuxm_['copyText'](this['rolePriceData']['vip_wx']);
    }), this['main']['box_2_addclick']['on'](Laya['Event']['CLICK'], this, function () {
      if (tfuxm_['rolePriceData']['is_vip'] == 0x0) return;this['main']['box_help_qrcode']['skin'] = tfuxm_['rolePriceData']['vip_qrcode'], tfuxm_['main']['box_help']['visible'] = !![];
    }), this['main']['box_help_close']['on'](Laya['Event']['CLICK'], this, function () {
      tfuxm_['main']['box_help']['visible'] = ![];
    }), this['main']['box_help_bg']['skin'] = this['tool']['data']['vip_customer_service_not_add'], this['main']['box_help_qrcode']['skin'] = tfuxm_['rolePriceData']['vip_qrcode'], this['main']['box_help_qrcode']['scaleX'] = 0xa0 / this['main']['box_help_qrcode']['width'], this['main']['box_help_qrcode']['scaleY'] = 0xa0 / this['main']['box_help_qrcode']['width'], this['main']['box_3_panel']['vScrollBar']['visible'] = ![], this['main']['box_3_panel']['vScrollBarSkin'] = 'common_atlas/scrollBar.png';
  }, nq58['prototype']['initIcon'] = function () {
    this['icon'] = new Laya['Image'](), this['icon']['skin'] = this['tool']['data']['basics_image_url'], this['icon']['x'] = 0x0, this['icon']['y'] = 0xc8, this['icon']['width'] = 0x66, this['icon']['height'] = 0x6f, this['main']['addChild'](this['icon']), this['icon']['on'](Laya['Event']['MOUSE_DOWN'], this, this['iconPress']), this['icon']['on'](Laya['Event']['MOUSE_UP'], this, this['iconUp']), this['icon']['on'](Laya['Event']['MOUSE_WHEEL'], this, this['iconMove']), this['dragRect'] = new Laya['Rectangle'](-this['icon']['width'] / 0x2, 0x0, Laya['stage']['width'], Laya['stage']['height'] - this['icon']['height'] / 0x2);
  }, nq58['prototype']['initEvent'] = function () {
    var bg8aqc = this;this['main']['btn_1']['on'](Laya['Event']['CLICK'], this, function () {
      if (bg8aqc['page'] == 0x1) return;bg8aqc['page1']();
    }), this['main']['btn_2']['on'](Laya['Event']['CLICK'], this, function () {
      if (bg8aqc['page'] == 0x2) return;bg8aqc['page2']();
    }), this['main']['btn_3']['on'](Laya['Event']['CLICK'], this, function () {
      if (bg8aqc['page'] == 0x3) return;bg8aqc['page3']();
    }), this['main']['btn_close']['on'](Laya['Event']['CLICK'], this, function () {
      bg8aqc['main']['bg']['x'] = -0x2ee, bg8aqc['icon']['visible'] = !![];
    });
  }, nq58['prototype']['initBoard'] = function () {
    this['isInitBoard'] = !![], this['page1']();
  }, nq58['prototype']['showBoard'] = function () {
    this['main']['bg']['x'] = 0x0, this['icon']['visible'] = ![];var _muoxf = _p$3['selectedServer']['server_id'],
        xfu = _p$3['selectedServer']['server_name'],
        ez35 = _p$3['roleId'],
        n9q8e5 = _p$3['roleName'],
        w59n = p_$17vr['sygame']['openid'],
        xfltp = '&role_id=' + p_$17vr['sygame']['role_id'] + '&channel=' + p_$17vr['sygame']['channel'] + '&server_id=' + _muoxf + '&server_name=' + xfu + '&wecha_id=' + w59n + '&role_id=' + ez35 + '&role_name=' + n9q8e5;this['tool']['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=sidebarApiRoleId' + xfltp, this['rolePriceHandler']['bind'](this), this['roleError']['bind'](this));
  }, nq58['prototype']['page1'] = function () {
    this['page'] = 0x1, this['main']['bg']['skin'] = this['tool']['data']['public_code'], this['main']['box_1_show']['visible'] = !![], this['main']['box_2_show']['visible'] = ![], this['main']['box_3_show']['visible'] = ![];
  }, nq58['prototype']['page2'] = function () {
    this['page'] = 0x2, this['main']['bg']['skin'] = this['tool']['data']['vip_customer_service'], this['main']['box_1_show']['visible'] = ![], this['main']['box_2_show']['visible'] = !![], this['main']['box_3_show']['visible'] = ![];
  }, nq58['prototype']['page3'] = function () {
    this['page'] = 0x3, this['main']['bg']['skin'] = this['tool']['data']['game_center_image_url'], this['main']['box_1_show']['visible'] = ![], this['main']['box_2_show']['visible'] = ![], this['main']['box_3_show']['visible'] = !![], this['sendBox'] || this['getBoxList'](0x0), this['sendBox'] = !![], p_$16ivy && p_$16ivy['syClickOpenBox']();
  }, nq58['prototype']['getBoxList'] = function (w3z0n5) {
    var jyhik = this;p_$16ivy && p_$16ivy['syGetBoxList']({ 'page': w3z0n5, 'count': 0xc })['then'](function (j1y$6i) {
      var i$ky6 = j1y$6i['data'];i$ky6['status'] == 0x3e9 ? i$ky6['data'] && i$ky6['data']['length'] && (jyhik['boxlist'] = jyhik['boxlist']['concat'](i$ky6['data']), w3z0n5++, jyhik['getBoxList'](w3z0n5)) : jyhik['boxListHandler']();
    });
  }, nq58['prototype']['copyText'] = function (jk4sh) {
    try {
      wx['setClipboardData']({ 'data': jk4sh, 'success': function (jkhiy$) {
          console['log']('复制成功:', jkhiy$);
        } });
    } catch (mt_x) {}
  }, nq58['prototype']['rolePriceHandler'] = function (bdaqgc) {
    this['rolePriceData'] = JSON['parse'](bdaqgc);switch (this['rolePriceData']['status']) {case 0x3e9:
        this['main']['box_2_lab_v_1']['text'] = (this['rolePriceData']['todayPrice'] || 0x0) + '/' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_v_2']['text'] = (this['rolePriceData']['allPrice'] || 0x0) + '/' + +this['tool']['data']['y'] + '元';break;case 0x3ea:
        break;case 0x3eb:
        break;}
  }, nq58['prototype']['roleError'] = function () {}, nq58['prototype']['boxListHandler'] = function () {
    var xpl4ts = function (a8e9) {
      var ltx4ps = hk['boxlist'][a8e9],
          qcgbda = new p_jyisk['demoui']['BoxItemUI']();qcgbda['icon']['skin'] = ltx4ps['icon'], qcgbda['title']['text'] = ltx4ps['title'], qcgbda['x'] = 0xa0 * (a8e9 % 0x3), qcgbda['y'] = 0xa0 * (a8e9 / 0x3 ^ 0x0), hk['main']['box_3_panel']['addChild'](qcgbda);var k$i6yj = { 'appid': p_$17vr['sygame']['appid'], 'game_id': ltx4ps['game_id'], 'jump_appid': ltx4ps['jump_appid'], 'jump_path': ltx4ps['jump_path'], 'tunnel_id': ltx4ps['tunnel_id'], 'uv': 0x0, 'wecha_id': p_$17vr['sygame']['openid'] },
          n503zw = ltx4ps['preview_img'],
          v1r72 = ltx4ps['jump_type'],
          q95ne = ltx4ps['kf_session'];qcgbda['on'](Laya['Event']['CLICK'], hk, function () {
        p_$16ivy && p_$16ivy['syClickBox']({ 'game_id': ltx4ps['game_id'], 'tunnel_id': ltx4ps['tunnel_id'], 'jump_appid': ltx4ps['jump_appid'], 'jump_path': ltx4ps['jump_path'] })['then'](function ($1v) {
          if (v1r72 === '0') wx['navigateToMiniProgram']({ 'appId': k$i6yj['jump_appid'], 'path': k$i6yj['jump_path'], 'fail': function (tlpsx) {
              if (!n503zw) return;wx['previewImage']({ 'urls': [n503zw] });
            } });else {
            if (v1r72 === '1') {
              if (!n503zw) return;wx['previewImage']({ 'urls': [n503zw] });
            } else {
              if (v1r72 === '2') {
                if (!q95ne) return;wx['openCustomerServiceConversation']({ 'sessionFrom': q95ne, 'showMessageCard': !![], 'sendMessageTitle': '', 'sendMessagePath': '', 'sendMessageImg': '' });
              }
            }
          }
        });
      });
    },
        hk = this;for (var i4hsjk = 0x0; i4hsjk < this['boxlist']['length']; i4hsjk++) {
      xpl4ts(i4hsjk);
    }
  }, nq58['prototype']['boxListError'] = function () {}, nq58['prototype']['boxClickHandler'] = function () {}, nq58['prototype']['iconPress'] = function (hlt4) {
    this['donwX'] = hlt4['target']['x'], this['donwY'] = hlt4['target']['y'], this['icon']['startDrag'](this['dragRect']), this['isMove'] = ![], this['isPress'] = !![];
  }, nq58['prototype']['iconMove'] = function (w0z32r) {
    this['isMove'] = !![];
  }, nq58['prototype']['iconUp'] = function (shp4) {
    var ijh4k = shp4['target']['x'],
        v16 = shp4['target']['y'];this['icon']['stopDrag'](), ijh4k == this['donwX'] && this['donwY'] == v16 && (this['isInitBoard'] || this['initBoard'](), this['showBoard']()), this['isMove'] = ![], this['isPress'] = ![];
  }, nq58;
}(),
    p_jyisk;(function (lpuftx) {
  var n035wz;(function (yi6jk$) {
    var yij6 = function (syihkj) {
      p_kpl4hs(tsp4l, syihkj);function tsp4l() {
        return syihkj['call'](this) || this;
      }return tsp4l['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), syihkj['prototype']['createChildren']['call'](this), this['createView'](lpuftx['demoui']['BoxItemUI']['uiView']);
      }, tsp4l['uiView'] = { 'type': 'View', 'props': { 'width': 0xb4, 'height': 0xa0 }, 'child': [{ 'type': 'Image', 'props': { 'y': 0x3, 'x': 0x20, 'width': 0x73, 'var': 'icon', 'height': 0x73 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x79, 'x': -0x21, 'width': 0xb4, 'var': 'title', 'valign': 'middle', 'height': 0x22, 'fontSize': 0x16, 'color': '#441d1c', 'align': 'center' } }] }] }, tsp4l;
    }(laya['ui']['View']);yi6jk$['BoxItemUI'] = yij6;
  })(n035wz = lpuftx['demoui'] || (lpuftx['demoui'] = {}));
})(p_jyisk || (p_jyisk = {})), function ($71r6v) {
  var skyij;(function (hs4t) {
    var jy6$ = function (ewn5) {
      p_kpl4hs(kphj4s, ewn5);function kphj4s() {
        return ewn5['call'](this) || this;
      }return kphj4s['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), ewn5['prototype']['createChildren']['call'](this), this['createView']($71r6v['demoui']['MainUI']['uiView']);
      }, kphj4s['uiView'] = { 'type': 'View', 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x2ee, 'top': 0x0, 'right': 0x0, 'left': 0x0, 'height': 0x536, 'bottom': 0x0 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x2ee, 'height': 0x536, 'centerY': 0x0 }, 'child': [{ 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x2ee, 'var': 'bg', 'height': 0x536 }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x2ee, 'visible': ![], 'var': 'box_1_show', 'height': 0x536, 'centerY': 0x0 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x253, 'x': 0x2e, 'width': 0x1d0, 'var': 'box_1_lab_info', 'leading': 0xa, 'height': 0x97, 'fontSize': 0x18, 'color': '#a959ee' } }, { 'type': 'HBox', 'props': { 'y': 0x2ee, 'x': 0x14, 'width': 0x1fe, 'space': 0x35, 'height': 0x78, 'align': 'top' }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x58, 'var': 'box_1_img_1', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_1', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0xa, 'x': 0xa, 'width': 0x58, 'var': 'box_1_img_2', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_2', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x14, 'x': 0x14, 'width': 0x58, 'var': 'box_1_img_3', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_3', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x1e, 'x': 0x1e, 'width': 0x58, 'var': 'box_1_img_4', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_4', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }] }] }, { 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'visible': ![], 'var': 'box_2_show' }, 'child': [{ 'type': 'HBox', 'props': { 'y': 0x220, 'x': 0x18, 'width': 0x1f4, 'space': 0x2c, 'height': 0x56, 'align': 'top' }, 'child': [{ 'type': 'Image', 'props': { 'y': 2.5, 'x': 0x0, 'width': 0x58, 'var': 'box_2_img_1', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_1', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0xc, 'x': 0xa, 'width': 0x58, 'var': 'box_2_img_2', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_2', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x16, 'x': 0x14, 'width': 0x58, 'var': 'box_2_img_3', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_3', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x20, 'x': 0x1e, 'width': 0x58, 'var': 'box_2_img_4', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_4', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x2a, 'x': 0x28, 'width': 0x58, 'var': 'box_2_img_5', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_5', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }] }, { 'type': 'Box', 'props': { 'y': 0x384, 'x': 0x0, 'width': 0x221, 'height': 0x44 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x0, 'x': 0x28, 'width': 0x122, 'var': 'box_2_lab_m_1', 'text': '方法一\uFF1A单日充值1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300' } }, { 'type': 'Text', 'props': { 'y': 0x1e, 'x': 0x28, 'width': 0x122, 'var': 'box_2_lab_m_2', 'text': '方法一\uFF1A历史累计充值1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300' } }, { 'type': 'Text', 'props': { 'y': 0x0, 'x': 0x141, 'width': 0xa4, 'var': 'box_2_lab_v_1', 'text': '1000/1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300', 'align': 'right' } }, { 'type': 'Text', 'props': { 'y': 0x1e, 'x': 0x141, 'width': 0xa4, 'var': 'box_2_lab_v_2', 'text': '1000/1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300', 'align': 'right' } }] }, { 'type': 'Image', 'props': { 'y': 0x1aa, 'x': 0x159, 'width': 0x66, 'var': 'box_2_btn_get', 'stateNum': 0x1, 'height': 0x26 } }, { 'type': 'Image', 'props': { 'y': 0x1aa, 'x': 0x159, 'width': 0x66, 'var': 'box_2_btn_copy', 'stateNum': 0x1, 'height': 0x26 } }, { 'type': 'Button', 'props': { 'y': 0x1d2, 'x': 0x126, 'width': 0xc9, 'var': 'box_2_addclick', 'stateNum': 0x1, 'height': 0x1b } }, { 'type': 'Text', 'props': { 'y': 0x13c, 'x': 0x17a, 'width': 0xa3, 'var': 'box_2_lab_wx', 'height': 0x1f, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'left' } }] }, { 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'visible': ![], 'var': 'box_3_show' }, 'child': [{ 'type': 'Panel', 'props': { 'y': 0xf5, 'x': 0x10, 'width': 0x201, 'var': 'box_3_panel', 'vScrollBarSkin': '', 'height': 0x29e } }] }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0x0, 'width': 0xbb, 'var': 'btn_1', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0xba, 'width': 0xbb, 'var': 'btn_2', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0x177, 'width': 0xbb, 'var': 'btn_3', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x203, 'x': 0x22e, 'width': 0x25, 'var': 'btn_close', 'height': 0x8f } }, { 'type': 'Box', 'props': { 'width': 0x2ee, 'visible': ![], 'var': 'box_help', 'height': 0x536 }, 'child': [{ 'type': 'Sprite', 'props': { 'y': 0x0, 'x': 0x0, 'mouseThrough': ![], 'alpha': 0.7 }, 'child': [{ 'type': 'Rect', 'props': { 'width': 0x2ee, 'lineWidth': 0x1, 'height': 0x536, 'fillColor': '#000000' } }] }, { 'type': 'Image', 'props': { 'y': 0x158, 'x': 0x28, 'width': 0x1d2, 'var': 'box_help_bg', 'height': 0x203 }, 'child': [{ 'type': 'Button', 'props': { 'y': -0x1, 'x': 0x1a0, 'width': 0x33, 'var': 'box_help_close', 'height': 0x28 } }, { 'type': 'Image', 'props': { 'y': 0x3f, 'x': 0x98, 'width': 0xa0, 'var': 'box_help_qrcode', 'height': 0xa0 } }] }] }] }] }] }, kphj4s;
    }(laya['ui']['View']);hs4t['MainUI'] = jy6$;
  })(skyij = $71r6v['demoui'] || ($71r6v['demoui'] = {}));
}(p_jyisk || (p_jyisk = {})), function (w9n53e) {
  var utxlp4;(function (tflpx) {
    var fom_ux = function (s4ltph) {
      p_kpl4hs(hjisk4, s4ltph);function hjisk4() {
        return s4ltph['call'](this) || this;
      }return hjisk4['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), s4ltph['prototype']['createChildren']['call'](this), this['createView'](w9n53e['demoui']['ToastUI']['uiView']);
      }, hjisk4['uiView'] = { 'type': 'View', 'props': { 'width': 0x2ee, 'height': 0x536 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x12c, 'height': 0x32, 'centerY': 0x0, 'centerX': 0x0 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x12c, 'height': 0x32, 'centerX': 0x0, 'alpha': 0.5 }, 'child': [{ 'type': 'Rect', 'props': { 'width': 0x12c, 'lineWidth': 0x1, 'height': 0x32, 'fillColor': '#382f2f' } }] }, { 'type': 'Text', 'props': { 'width': 0x12c, 'var': 'lab_msg', 'valign': 'middle', 'text': 'text', 'height': 0x32, 'fontSize': 0x18, 'color': '#ffffff', 'align': 'center' } }] }] }, hjisk4;
    }(laya['ui']['View']);tflpx['ToastUI'] = fom_ux;
  })(utxlp4 = w9n53e['demoui'] || (w9n53e['demoui'] = {}));
}(p_jyisk || (p_jyisk = {}));var p_e5znw = function () {
  function viy$61() {}return viy$61['init'] = function () {
    !this['ui'] && (this['ui'] = new p_jyisk['demoui']['ToastUI'](), this['ui']['visible'] = ![], Laya['stage']['addChild'](this['ui']));
  }, viy$61['msg'] = function (y6i$j) {
    var nbe98 = this;!this['ui'] && viy$61['init'](), this['ui']['visible'] = !![], this['ui']['lab_msg']['text'] = y6i$j, clearTimeout(this['interval']), this['interval'] = setTimeout(function () {
      nbe98['ui']['visible'] = ![];
    }, 0x7d0);
  }, viy$61;
}();window['minitool'] = p_qbgadc;