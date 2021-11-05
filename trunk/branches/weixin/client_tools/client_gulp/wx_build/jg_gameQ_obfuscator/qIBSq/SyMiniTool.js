var g = wx.$Q;
var q_swjuh8 = this && this['__extends'] || function () {
  var pflbga = function (no146, gav) {
    return pflbga = Object['setPrototypeOf'] || { '__proto__': [] } instanceof Array && function (dzcrk, j8hm41) {
      dzcrk['__proto__'] = j8hm41;
    } || function (ydctrk, hjw1s8) {
      for (var tyk3 in hjw1s8) if (hjw1s8['hasOwnProperty'](tyk3)) ydctrk[tyk3] = hjw1s8[tyk3];
    }, pflbga(no146, gav);
  };return function (tdzcrk, ck5yt3) {
    pflbga(tdzcrk, ck5yt3);function uqs8() {
      this['constructor'] = tdzcrk;
    }tdzcrk['prototype'] = ck5yt3 === null ? Object['create'](ck5yt3) : (uqs8['prototype'] = ck5yt3['prototype'], new uqs8());
  };
}(),
    q_tcdyr = window['Sygame'],
    q_gvib7a = ![],
    q_cdz = function () {
  function plibga() {}return plibga['init'] = function () {
    q_gvib7a ? this['sygame'] = { 'channel': '3477d2273abd484ba2a0e04ad4971b3c', 'role_id': undefined, 'openid': 'oxmOf5biumkGash-Xht9FVAlswVk', 'appid': 'wx2936121c4817bf46' } : this['sygame'] = q_tcdyr;
  }, plibga['getTimeStamp'] = function () {
    return new Date()['getTime']();
  }, plibga['setResMap'] = function (rdc$, c$dtz) {
    this['resMap'][rdc$] = rdc$ + '?' + c$dtz;
  }, plibga['getResMap'] = function (bagiv7) {
    return this['resMap'][bagiv7];
  }, plibga['resMap'] = {}, plibga;
}(),
    q_lf20 = function () {
  function pabl() {
    this['getIcon'] = 'https://wx.11babay.cn/uploads/f/fkccc1532944783/5/2/c/7/60dc442c4fbc5.png', this['copyIcon'] = 'https://wx.11babay.cn/uploads/f/fkccc1532944783/3/0/1/7/60dc4409dce39.png', q_cdz['init'](), this['postSidebarApi']();
  }return pabl['prototype']['send'] = function (uq8wj, _$oen9, _eo69n, u8qs, qjwus8) {
    u8qs === void 0x0 && (u8qs = 'get');qjwus8 === void 0x0 && (qjwus8 = '' || null);var zd_rc$ = new Laya['HttpRequest']();zd_rc$['http']['timeout'] = 0x2710, zd_rc$['once'](Laya['Event']['COMPLETE'], this, _$oen9), zd_rc$['once'](Laya['Event']['ERROR'], this, _eo69n), zd_rc$['send'](uq8wj, qjwus8, u8qs, 'text');
  }, pabl['prototype']['postSidebarApi'] = function () {
    this['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=sidebarApi&channel=' + q_cdz['sygame']['channel'], this['completeHandler'], this['errorHandler']);
  }, pabl['prototype']['completeHandler'] = function (tkyrcd) {
    var h1m64n = JSON['parse'](tkyrcd);console['log'](h1m64n);switch (h1m64n['status']) {case 0x3e9:
        var iplbg = [];h1m64n['msg']['basics_image_url'] && iplbg['push']({ 'url': h1m64n['msg']['basics_image_url'], 'type': Laya['Loader']['IMAGE'] }), h1m64n['msg']['public_code'] && iplbg['push']({ 'url': h1m64n['msg']['public_code'], 'type': Laya['Loader']['IMAGE'] }), h1m64n['msg']['vip_customer_service'] && iplbg['push']({ 'url': h1m64n['msg']['vip_customer_service'], 'type': Laya['Loader']['IMAGE'] }), h1m64n['msg']['vip_customer_service_not_add'] && iplbg['push']({ 'url': h1m64n['msg']['vip_customer_service_not_add'], 'type': Laya['Loader']['IMAGE'] }), h1m64n['msg']['game_center_image_url'] && iplbg['push']({ 'url': h1m64n['msg']['game_center_image_url'], 'type': Laya['Loader']['IMAGE'] }), h1m64n['msg']['vip_qrcode'] && iplbg['push']({ 'url': h1m64n['msg']['vip_qrcode'], 'type': Laya['Loader']['IMAGE'] }), h1m64n['msg']['getIcon'] && iplbg['push']({ 'url': this['getIcon'], 'type': Laya['Loader']['IMAGE'] }), h1m64n['msg']['copyIcon'] && iplbg['push']({ 'url': this['copyIcon'], 'type': Laya['Loader']['IMAGE'] });for (var fp02a = 0x0, uwh8js = h1m64n['msg']['follow_gift_list']; fp02a < uwh8js['length']; fp02a++) {
          var re_z9$ = uwh8js[fp02a];iplbg['push']({ 'url': re_z9$['url'], 'type': Laya['Loader']['IMAGE'] });
        }for (var oe_9z = 0x0, cdk = h1m64n['msg']['vip_box_list']; oe_9z < cdk['length']; oe_9z++) {
          var re_z9$ = cdk[oe_9z];iplbg['push']({ 'url': re_z9$['url'], 'type': Laya['Loader']['IMAGE'] });
        }for (var p3x2f0 = 0x0; p3x2f0 < iplbg['length']; p3x2f0++) {
          q_cdz['setResMap'](iplbg[p3x2f0]['url'], q_cdz['getTimeStamp']()), iplbg[p3x2f0]['url'] = q_cdz['getResMap'](iplbg[p3x2f0]['url']);
        }Laya['loader']['load'](iplbg, Laya['Handler']['create'](this, this['initGame'])), this['data'] = h1m64n['msg'];break;case 0x3ea:
        q_pl02f['msg']('空的游戏channel');break;case 0x3eb:
        q_pl02f['msg']('错误的游戏channel');break;case 0x3ec:
        q_pl02f['msg']('未找到对应游戏大类');break;case 0x3ed:
        q_pl02f['msg']('未设置侧边栏');break;}
  }, pabl['prototype']['errorHandler'] = function (rcktdz) {}, pabl['prototype']['initGame'] = function () {
    var y5k3xt = new q_igvla(this);y5k3xt['show']();
  }, pabl;
}(),
    q_igvla = function () {
  function jw81hs(l0afp2) {
    this['page'] = 0x3, this['rolePriceData'] = {}, this['boxlist'] = [], this['donwX'] = 0x0, this['downY'] = 0x0, this['tool'] = l0afp2;
  }return jw81hs['prototype']['setChildMouseThroughs'] = function (mn46h) {
    var ws1h8 = mn46h['_childs'] || [];for (var $rzc = 0x0; $rzc < ws1h8['length']; $rzc++) {
      ws1h8[$rzc] && (ws1h8[$rzc]['mouseThrough'] = !![]);
    }
  }, jw81hs['prototype']['show'] = function () {
    if (this['tool']['data']['on'] === '1') {
      this['main'] = new q_ju8qw['demoui']['MainUI'](), Laya['stage']['addChild'](this['main']), this['main']['mouseThrough'] = !![];var k5td = this['main']['_childs'] || [];for (var x305y = 0x0; x305y < k5td['length']; x305y++) {
        k5td[x305y]['mouseThrough'] = !![];
      }this['setChildMouseThroughs'](this['main']['_childs']), this['setChildMouseThroughs'](this['main']['_childs'][0x0]), this['initIcon'](), this['initEvent'](), this['initView'](), q_pl02f['init']();
    }
  }, jw81hs['prototype']['initView'] = function () {
    var zr_9$ = this,
        yk52 = this['tool']['data']['follow_down_words']['replace'](/\\n/g, '\x0a');this['main']['box_1_lab_info']['text'] = yk52;for (var $ez_o = 0x1; $ez_o <= this['tool']['data']['follow_gift_list']['length']; $ez_o++) {
      var fl0apg = this['tool']['data']['follow_gift_list'][$ez_o - 0x1];this['main']['box_1_img_' + $ez_o]['skin'] = fl0apg['url'], this['main']['box_1_lab_' + $ez_o]['text'] = fl0apg['name'];
    }for (var $ez_o = 0x1; $ez_o <= this['tool']['data']['vip_box_list']['length']; $ez_o++) {
      var fl0apg = this['tool']['data']['vip_box_list'][$ez_o - 0x1];this['main']['box_2_img_' + $ez_o]['skin'] = fl0apg['url'], this['main']['box_2_lab_' + $ez_o]['text'] = fl0apg['name'];
    }this['main']['box_2_lab_m_1']['text'] = '方法一：单日充值' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_m_2']['text'] = '方法二：历史累计充值' + +this['tool']['data']['y'] + '元', this['main']['box_2_lab_v_1']['text'] = (this['rolePriceData']['todayPrice'] || 0x0) + '/' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_v_2']['text'] = (this['rolePriceData']['allPrice'] || 0x0) + '/' + +this['tool']['data']['y'] + '元', this['main']['box_2_btn_copy']['skin'] = this['tool']['copyIcon'], this['main']['box_2_btn_get']['skin'] = this['tool']['getIcon'], this['main']['box_2_btn_copy']['visible'] = ![], this['main']['box_2_btn_get']['on'](Laya['Event']['CLICK'], this, function () {
      if (zr_9$['rolePriceData']['is_vip'] == 0x0) {
        q_pl02f['msg']('请先获取vip资格');return;
      }zr_9$['main']['box_2_lab_wx']['text'] = zr_9$['tool']['data']['vip_wx'], zr_9$['main']['box_2_btn_copy']['visible'] = !![];
    }), this['main']['box_2_btn_copy']['on'](Laya['Event']['CLICK'], this, function () {
      zr_9$['copyText'](zr_9$['tool']['data']['vip_wx']);
    }), this['main']['box_2_addclick']['on'](Laya['Event']['CLICK'], this, function () {
      if (zr_9$['rolePriceData']['is_vip'] == 0x0) return;zr_9$['main']['box_help']['visible'] = !![];
    }), this['main']['box_help_close']['on'](Laya['Event']['CLICK'], this, function () {
      zr_9$['main']['box_help']['visible'] = ![];
    }), this['main']['box_help_bg']['skin'] = this['tool']['data']['vip_customer_service_not_add'], this['main']['box_help_qrcode']['skin'] = this['tool']['data']['vip_qrcode'], this['main']['box_help_qrcode']['scaleX'] = 0xa0 / this['main']['box_help_qrcode']['width'], this['main']['box_help_qrcode']['scaleY'] = 0xa0 / this['main']['box_help_qrcode']['width'], this['main']['box_3_panel']['vScrollBar']['visible'] = ![], this['main']['box_3_panel']['vScrollBarSkin'] = 'common_atlas/scrollBar.png';
  }, jw81hs['prototype']['initIcon'] = function () {
    this['icon'] = new Laya['Image'](), this['icon']['skin'] = this['tool']['data']['basics_image_url'], this['icon']['x'] = 0x0, this['icon']['y'] = 0xc8, this['icon']['width'] = 0x66, this['icon']['height'] = 0x6f, this['main']['addChild'](this['icon']), this['icon']['on'](Laya['Event']['MOUSE_DOWN'], this, this['iconPress']), this['icon']['on'](Laya['Event']['MOUSE_UP'], this, this['iconUp']), this['icon']['on'](Laya['Event']['MOUSE_WHEEL'], this, this['iconMove']), this['dragRect'] = new Laya['Rectangle'](-this['icon']['width'] / 0x2, 0x0, Laya['stage']['width'], Laya['stage']['height'] - this['icon']['height'] / 0x2);
  }, jw81hs['prototype']['initEvent'] = function () {
    var drz$ = this;this['main']['btn_1']['on'](Laya['Event']['CLICK'], this, function () {
      if (drz$['page'] == 0x1) return;drz$['page1']();
    }), this['main']['btn_2']['on'](Laya['Event']['CLICK'], this, function () {
      if (drz$['page'] == 0x2) return;drz$['page2']();
    }), this['main']['btn_3']['on'](Laya['Event']['CLICK'], this, function () {
      if (drz$['page'] == 0x3) return;drz$['page3']();
    }), this['main']['btn_close']['on'](Laya['Event']['CLICK'], this, function () {
      drz$['main']['bg']['x'] = -0x2ee, drz$['icon']['visible'] = !![];
    });
  }, jw81hs['prototype']['initBoard'] = function () {
    this['isInitBoard'] = !![], this['page1']();
  }, jw81hs['prototype']['showBoard'] = function () {
    this['main']['bg']['x'] = 0x0, this['icon']['visible'] = ![], this['tool']['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=sidebarApiRoleId&role_id=' + q_cdz['sygame']['role_id'] + '&channel=' + q_cdz['sygame']['channel'], this['rolePriceHandler']['bind'](this), this['roleError']['bind'](this));
  }, jw81hs['prototype']['page1'] = function () {
    this['page'] = 0x1, this['main']['bg']['skin'] = this['tool']['data']['public_code'], this['main']['box_1_show']['visible'] = !![], this['main']['box_2_show']['visible'] = ![], this['main']['box_3_show']['visible'] = ![];
  }, jw81hs['prototype']['page2'] = function () {
    this['page'] = 0x2, this['main']['bg']['skin'] = this['tool']['data']['vip_customer_service'], this['main']['box_1_show']['visible'] = ![], this['main']['box_2_show']['visible'] = !![], this['main']['box_3_show']['visible'] = ![];
  }, jw81hs['prototype']['page3'] = function () {
    this['page'] = 0x3, this['main']['bg']['skin'] = this['tool']['data']['game_center_image_url'], this['main']['box_1_show']['visible'] = ![], this['main']['box_2_show']['visible'] = ![], this['main']['box_3_show']['visible'] = !![], this['sendBox'] || this['getBoxList'](0x0), this['sendBox'] = !![], q_tcdyr && q_tcdyr['syClickOpenBox']();
  }, jw81hs['prototype']['getBoxList'] = function (jsw1) {
    var h841 = this;q_tcdyr && q_tcdyr['syGetBoxList']({ 'page': jsw1, 'count': 0xc })['then'](function (lpabf) {
      var r9ze_ = lpabf['data'];r9ze_['status'] == 0x3e9 ? r9ze_['data'] && r9ze_['data']['length'] && (h841['boxlist'] = h841['boxlist']['concat'](r9ze_['data']), jsw1++, h841['getBoxList'](jsw1)) : h841['boxListHandler']();
    });
  }, jw81hs['prototype']['copyText'] = function (enm6o) {
    try {
      wx['setClipboardData']({ 'data': enm6o, 'success': function (tk53yx) {
          console['log']('复制成功:', tk53yx);
        } });
    } catch (y3k5t) {}
  }, jw81hs['prototype']['rolePriceHandler'] = function (fgpba) {
    this['rolePriceData'] = JSON['parse'](fgpba);switch (this['rolePriceData']['status']) {case 0x3e9:
        this['main']['box_2_lab_v_1']['text'] = (this['rolePriceData']['todayPrice'] || 0x0) + '/' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_v_2']['text'] = (this['rolePriceData']['allPrice'] || 0x0) + '/' + +this['tool']['data']['y'] + '元';break;case 0x3ea:
        break;case 0x3eb:
        break;}
  }, jw81hs['prototype']['roleError'] = function () {}, jw81hs['prototype']['boxListHandler'] = function () {
    var x52f03 = function (_zre9) {
      var bgalf = $re_9z['boxlist'][_zre9],
          jh14s = new q_ju8qw['demoui']['BoxItemUI']();jh14s['icon']['skin'] = bgalf['icon'], jh14s['title']['text'] = bgalf['title'], jh14s['x'] = 0xa0 * (_zre9 % 0x3), jh14s['y'] = 0xa0 * (_zre9 / 0x3 ^ 0x0), $re_9z['main']['box_3_panel']['addChild'](jh14s);var om6n49 = { 'appid': q_cdz['sygame']['appid'], 'game_id': bgalf['game_id'], 'jump_appid': bgalf['jump_appid'], 'jump_path': bgalf['jump_path'], 'tunnel_id': bgalf['tunnel_id'], 'uv': 0x0, 'wecha_id': q_cdz['sygame']['openid'] },
          vg7aib = bgalf['preview_img'],
          zr9_e$ = bgalf['jump_type'],
          bg7vai = bgalf['kf_session'];jh14s['on'](Laya['Event']['CLICK'], $re_9z, function () {
        q_tcdyr && q_tcdyr['syClickBox']({ 'game_id': bgalf['game_id'], 'tunnel_id': bgalf['tunnel_id'], 'jump_appid': bgalf['jump_appid'], 'jump_path': bgalf['jump_path'] })['then'](function (cdty5) {
          if (zr9_e$ === '0') wx['navigateToMiniProgram']({ 'appId': om6n49['jump_appid'], 'path': om6n49['jump_path'], 'fail': function (re_zd$) {
              if (!vg7aib) return;wx['previewImage']({ 'urls': [vg7aib] });
            } });else {
            if (zr9_e$ === '1') {
              if (!vg7aib) return;wx['previewImage']({ 'urls': [vg7aib] });
            } else {
              if (zr9_e$ === '2') {
                if (!bg7vai) return;wx['openCustomerServiceConversation']({ 'sessionFrom': bg7vai, 'showMessageCard': !![], 'sendMessageTitle': '', 'sendMessagePath': '', 'sendMessageImg': '' });
              }
            }
          }
        });
      });
    },
        $re_9z = this;for (var rd_zc = 0x0; rd_zc < this['boxlist']['length']; rd_zc++) {
      x52f03(rd_zc);
    }
  }, jw81hs['prototype']['boxListError'] = function () {}, jw81hs['prototype']['boxClickHandler'] = function () {}, jw81hs['prototype']['iconPress'] = function (ilgabv) {
    this['donwX'] = ilgabv['target']['x'], this['donwY'] = ilgabv['target']['y'], this['icon']['startDrag'](this['dragRect']), this['isMove'] = ![], this['isPress'] = !![];
  }, jw81hs['prototype']['iconMove'] = function (qswju) {
    this['isMove'] = !![];
  }, jw81hs['prototype']['iconUp'] = function (xf20lp) {
    var a0plf2 = xf20lp['target']['x'],
        af20l = xf20lp['target']['y'];this['icon']['stopDrag'](), a0plf2 == this['donwX'] && this['donwY'] == af20l && (this['isInitBoard'] || this['initBoard'](), this['showBoard']()), this['isMove'] = ![], this['isPress'] = ![];
  }, jw81hs;
}(),
    q_ju8qw;(function (o$z9e) {
  var lfbgap;(function (d$e_z) {
    var j8shw = function (dtyk5) {
      q_swjuh8(h4, dtyk5);function h4() {
        return dtyk5['call'](this) || this;
      }return h4['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), dtyk5['prototype']['createChildren']['call'](this), this['createView'](o$z9e['demoui']['BoxItemUI']['uiView']);
      }, h4['uiView'] = { 'type': 'View', 'props': { 'width': 0xb4, 'height': 0xa0 }, 'child': [{ 'type': 'Image', 'props': { 'y': 0x3, 'x': 0x20, 'width': 0x73, 'var': 'icon', 'height': 0x73 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x79, 'x': -0x21, 'width': 0xb4, 'var': 'title', 'valign': 'middle', 'height': 0x22, 'fontSize': 0x16, 'color': '#441d1c', 'align': 'center' } }] }] }, h4;
    }(laya['ui']['View']);d$e_z['BoxItemUI'] = j8shw;
  })(lfbgap = o$z9e['demoui'] || (o$z9e['demoui'] = {}));
})(q_ju8qw || (q_ju8qw = {})), function (_$z9oe) {
  var juqs;(function (ligvba) {
    var hw81sj = function (_9n$e) {
      q_swjuh8(qwujs8, _9n$e);function qwujs8() {
        return _9n$e['call'](this) || this;
      }return qwujs8['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), _9n$e['prototype']['createChildren']['call'](this), this['createView'](_$z9oe['demoui']['MainUI']['uiView']);
      }, qwujs8['uiView'] = { 'type': 'View', 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x2ee, 'top': 0x0, 'right': 0x0, 'left': 0x0, 'height': 0x536, 'bottom': 0x0 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x2ee, 'height': 0x536, 'centerY': 0x0 }, 'child': [{ 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x2ee, 'var': 'bg', 'height': 0x536 }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x2ee, 'visible': ![], 'var': 'box_1_show', 'height': 0x536, 'centerY': 0x0 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x253, 'x': 0x2e, 'width': 0x1d0, 'var': 'box_1_lab_info', 'leading': 0xa, 'height': 0x97, 'fontSize': 0x18, 'color': '#a959ee' } }, { 'type': 'HBox', 'props': { 'y': 0x2ee, 'x': 0x14, 'width': 0x1fe, 'space': 0x35, 'height': 0x78, 'align': 'top' }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x58, 'var': 'box_1_img_1', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_1', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0xa, 'x': 0xa, 'width': 0x58, 'var': 'box_1_img_2', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_2', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x14, 'x': 0x14, 'width': 0x58, 'var': 'box_1_img_3', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_3', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x1e, 'x': 0x1e, 'width': 0x58, 'var': 'box_1_img_4', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_4', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }] }] }, { 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'visible': ![], 'var': 'box_2_show' }, 'child': [{ 'type': 'HBox', 'props': { 'y': 0x220, 'x': 0x18, 'width': 0x1f4, 'space': 0x2c, 'height': 0x56, 'align': 'top' }, 'child': [{ 'type': 'Image', 'props': { 'y': 2.5, 'x': 0x0, 'width': 0x58, 'var': 'box_2_img_1', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_1', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0xc, 'x': 0xa, 'width': 0x58, 'var': 'box_2_img_2', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_2', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x16, 'x': 0x14, 'width': 0x58, 'var': 'box_2_img_3', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_3', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x20, 'x': 0x1e, 'width': 0x58, 'var': 'box_2_img_4', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_4', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x2a, 'x': 0x28, 'width': 0x58, 'var': 'box_2_img_5', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_5', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }] }, { 'type': 'Box', 'props': { 'y': 0x384, 'x': 0x0, 'width': 0x221, 'height': 0x44 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x0, 'x': 0x28, 'width': 0x122, 'var': 'box_2_lab_m_1', 'text': '方法一\uFF1A单日充值1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300' } }, { 'type': 'Text', 'props': { 'y': 0x1e, 'x': 0x28, 'width': 0x122, 'var': 'box_2_lab_m_2', 'text': '方法一\uFF1A历史累计充值1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300' } }, { 'type': 'Text', 'props': { 'y': 0x0, 'x': 0x141, 'width': 0xa4, 'var': 'box_2_lab_v_1', 'text': '1000/1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300', 'align': 'right' } }, { 'type': 'Text', 'props': { 'y': 0x1e, 'x': 0x141, 'width': 0xa4, 'var': 'box_2_lab_v_2', 'text': '1000/1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300', 'align': 'right' } }] }, { 'type': 'Image', 'props': { 'y': 0x1aa, 'x': 0x159, 'width': 0x66, 'var': 'box_2_btn_get', 'stateNum': 0x1, 'height': 0x26 } }, { 'type': 'Image', 'props': { 'y': 0x1aa, 'x': 0x159, 'width': 0x66, 'var': 'box_2_btn_copy', 'stateNum': 0x1, 'height': 0x26 } }, { 'type': 'Button', 'props': { 'y': 0x1d2, 'x': 0x126, 'width': 0xc9, 'var': 'box_2_addclick', 'stateNum': 0x1, 'height': 0x1b } }, { 'type': 'Text', 'props': { 'y': 0x13c, 'x': 0x17a, 'width': 0xa3, 'var': 'box_2_lab_wx', 'height': 0x1f, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'left' } }] }, { 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'visible': ![], 'var': 'box_3_show' }, 'child': [{ 'type': 'Panel', 'props': { 'y': 0xf5, 'x': 0x10, 'width': 0x201, 'var': 'box_3_panel', 'vScrollBarSkin': '', 'height': 0x29e } }] }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0x0, 'width': 0xbb, 'var': 'btn_1', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0xba, 'width': 0xbb, 'var': 'btn_2', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0x177, 'width': 0xbb, 'var': 'btn_3', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x203, 'x': 0x22e, 'width': 0x25, 'var': 'btn_close', 'height': 0x8f } }, { 'type': 'Box', 'props': { 'width': 0x2ee, 'visible': ![], 'var': 'box_help', 'height': 0x536 }, 'child': [{ 'type': 'Sprite', 'props': { 'y': 0x0, 'x': 0x0, 'mouseThrough': ![], 'alpha': 0.7 }, 'child': [{ 'type': 'Rect', 'props': { 'width': 0x2ee, 'lineWidth': 0x1, 'height': 0x536, 'fillColor': '#000000' } }] }, { 'type': 'Image', 'props': { 'y': 0x158, 'x': 0x28, 'width': 0x1d2, 'var': 'box_help_bg', 'height': 0x203 }, 'child': [{ 'type': 'Button', 'props': { 'y': -0x1, 'x': 0x1a0, 'width': 0x33, 'var': 'box_help_close', 'height': 0x28 } }, { 'type': 'Image', 'props': { 'y': 0x3f, 'x': 0x98, 'width': 0xa0, 'var': 'box_help_qrcode', 'height': 0xa0 } }] }] }] }] }] }, qwujs8;
    }(laya['ui']['View']);ligvba['MainUI'] = hw81sj;
  })(juqs = _$z9oe['demoui'] || (_$z9oe['demoui'] = {}));
}(q_ju8qw || (q_ju8qw = {})), function ($9on_e) {
  var uh8jw;(function (n$9e_) {
    var _ze$9r = function (fgla) {
      q_swjuh8(l0fp2a, fgla);function l0fp2a() {
        return fgla['call'](this) || this;
      }return l0fp2a['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), fgla['prototype']['createChildren']['call'](this), this['createView']($9on_e['demoui']['ToastUI']['uiView']);
      }, l0fp2a['uiView'] = { 'type': 'View', 'props': { 'width': 0x2ee, 'height': 0x536 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x12c, 'height': 0x32, 'centerY': 0x0, 'centerX': 0x0 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x12c, 'height': 0x32, 'centerX': 0x0, 'alpha': 0.5 }, 'child': [{ 'type': 'Rect', 'props': { 'width': 0x12c, 'lineWidth': 0x1, 'height': 0x32, 'fillColor': '#382f2f' } }] }, { 'type': 'Text', 'props': { 'width': 0x12c, 'var': 'lab_msg', 'valign': 'middle', 'text': 'text', 'height': 0x32, 'fontSize': 0x18, 'color': '#ffffff', 'align': 'center' } }] }] }, l0fp2a;
    }(laya['ui']['View']);n$9e_['ToastUI'] = _ze$9r;
  })(uh8jw = $9on_e['demoui'] || ($9on_e['demoui'] = {}));
}(q_ju8qw || (q_ju8qw = {}));var q_pl02f = function () {
  function zed$_r() {}return zed$_r['init'] = function () {
    !this['ui'] && (this['ui'] = new q_ju8qw['demoui']['ToastUI'](), this['ui']['visible'] = ![], Laya['stage']['addChild'](this['ui']));
  }, zed$_r['msg'] = function (lp02af) {
    var en9_$ = this;!this['ui'] && zed$_r['init'](), this['ui']['visible'] = !![], this['ui']['lab_msg']['text'] = lp02af, clearTimeout(this['interval']), this['interval'] = setTimeout(function () {
      en9_$['ui']['visible'] = ![];
    }, 0x7d0);
  }, zed$_r;
}();window['minitool'] = q_lf20;