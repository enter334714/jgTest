var E = wx.$p;
var p_j4spk = this && this['__extends'] || function () {
  var upl4tx = function (l4hpst, rz307) {
    return upl4tx = Object['setPrototypeOf'] || { '__proto__': [] } instanceof Array && function (lufx_, j$6i) {
      lufx_['__proto__'] = j$6i;
    } || function (z0wr3, jyki) {
      for (var _txulf in jyki) if (jyki['hasOwnProperty'](_txulf)) z0wr3[_txulf] = jyki[_txulf];
    }, upl4tx(l4hpst, rz307);
  };return function (hjik, v$1r7) {
    upl4tx(hjik, v$1r7);function qb8ea() {
      this['constructor'] = hjik;
    }hjik['prototype'] = v$1r7 === null ? Object['create'](v$1r7) : (qb8ea['prototype'] = v$1r7['prototype'], new qb8ea());
  };
}(),
    p_up4lxt = window['Sygame'],
    p_v7$r1 = ![],
    p_skp4lh = function () {
  function cgdaqb() {}return cgdaqb['init'] = function () {
    p_v7$r1 ? this['sygame'] = { 'channel': '3477d2273abd484ba2a0e04ad4971b3c', 'role_id': undefined, 'openid': 'oxmOf5biumkGash-Xht9FVAlswVk', 'appid': 'wx2936121c4817bf46' } : this['sygame'] = p_up4lxt;
  }, cgdaqb['getTimeStamp'] = function () {
    return new Date()['getTime']();
  }, cgdaqb['setResMap'] = function (hsk4l, e5q89) {
    this['resMap'][hsk4l] = hsk4l + '?' + e5q89;
  }, cgdaqb['getResMap'] = function (nz50) {
    return this['resMap'][nz50];
  }, cgdaqb['resMap'] = {}, cgdaqb;
}(),
    p_jihys = function () {
  function qgdbca() {
    this['getIcon'] = 'https://wx.11babay.cn/uploads/f/fkccc1532944783/5/2/c/7/60dc442c4fbc5.png', this['copyIcon'] = 'https://wx.11babay.cn/uploads/f/fkccc1532944783/3/0/1/7/60dc4409dce39.png', p_skp4lh['init'](), this['getBoxCheckoutCode']();
  }return qgdbca['prototype']['send'] = function (j4khs, tlpsh, fmtux, e859wn, $ijk6y) {
    e859wn === void 0x0 && (e859wn = 'get');$ijk6y === void 0x0 && ($ijk6y = '' || null);var spjh = new Laya['HttpRequest']();spjh['http']['timeout'] = 0x2710, spjh['once'](Laya['Event']['COMPLETE'], this, tlpsh), spjh['once'](Laya['Event']['ERROR'], this, fmtux), spjh['send'](j4khs, $ijk6y, e859wn, 'text');
  }, qgdbca['prototype']['postSidebarApi'] = function () {
    this['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=sidebarApi&channel=' + p_skp4lh['sygame']['channel'], this['completeHandler'], this['errorHandler']);
  }, qgdbca['prototype']['getBoxCheckoutCode'] = function () {
    var bgdca = Sygame['SY_CONF']['commitId'];this['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=getBoxCheckoutCode', this['getBoxCheckoutCodeRes'], this['errorHandler'], 'post', { 'commitId': bgdca });
  }, qgdbca['prototype']['getBoxCheckoutCodeRes'] = function (ba8eq9) {
    var q8e9 = JSON['parse'](ba8eq9);console['log']('getBoxCheckoutCode:', q8e9);if (q8e9['status'] == 0x3e9) {
      var b8neq = q8e9['info'];b8neq == 0xfa1 ? this['postSidebarApi']() : console['error']('盛也盒子\x20不显示' + q8e9);
    } else console['error']('盛也盒子 getBoxCheckoutCodeRes 其他错误' + q8e9);
  }, qgdbca['prototype']['completeHandler'] = function (yhjki$) {
    var r176$ = JSON['parse'](yhjki$);console['log'](r176$);switch (r176$['status']) {case 0x3e9:
        var n0w3z5 = [];r176$['msg']['basics_image_url'] && n0w3z5['push']({ 'url': r176$['msg']['basics_image_url'], 'type': Laya['Loader']['IMAGE'] }), r176$['msg']['public_code'] && n0w3z5['push']({ 'url': r176$['msg']['public_code'], 'type': Laya['Loader']['IMAGE'] }), r176$['msg']['vip_customer_service'] && n0w3z5['push']({ 'url': r176$['msg']['vip_customer_service'], 'type': Laya['Loader']['IMAGE'] }), r176$['msg']['vip_customer_service_not_add'] && n0w3z5['push']({ 'url': r176$['msg']['vip_customer_service_not_add'], 'type': Laya['Loader']['IMAGE'] }), r176$['msg']['game_center_image_url'] && n0w3z5['push']({ 'url': r176$['msg']['game_center_image_url'], 'type': Laya['Loader']['IMAGE'] }), r176$['msg']['vip_qrcode'] && n0w3z5['push']({ 'url': r176$['msg']['vip_qrcode'], 'type': Laya['Loader']['IMAGE'] }), r176$['msg']['getIcon'] && n0w3z5['push']({ 'url': this['getIcon'], 'type': Laya['Loader']['IMAGE'] }), r176$['msg']['copyIcon'] && n0w3z5['push']({ 'url': this['copyIcon'], 'type': Laya['Loader']['IMAGE'] });for (var lxtfpu = 0x0, w35nez = r176$['msg']['follow_gift_list']; lxtfpu < w35nez['length']; lxtfpu++) {
          var kih4j = w35nez[lxtfpu];n0w3z5['push']({ 'url': kih4j['url'], 'type': Laya['Loader']['IMAGE'] });
        }for (var kjy$h = 0x0, hjs4p = r176$['msg']['vip_box_list']; kjy$h < hjs4p['length']; kjy$h++) {
          var kih4j = hjs4p[kjy$h];n0w3z5['push']({ 'url': kih4j['url'], 'type': Laya['Loader']['IMAGE'] });
        }for (var rw = 0x0; rw < n0w3z5['length']; rw++) {
          p_skp4lh['setResMap'](n0w3z5[rw]['url'], p_skp4lh['getTimeStamp']()), n0w3z5[rw]['url'] = p_skp4lh['getResMap'](n0w3z5[rw]['url']);
        }Laya['loader']['load'](n0w3z5, Laya['Handler']['create'](this, this['initGame'])), this['data'] = r176$['msg'];break;case 0x3ea:
        p_v$16yi['msg']('空的游戏channel');break;case 0x3eb:
        p_v$16yi['msg']('错误的游戏channel');break;case 0x3ec:
        p_v$16yi['msg']('未找到对应游戏大类');break;case 0x3ed:
        p_v$16yi['msg']('未设置侧边栏');break;}
  }, qgdbca['prototype']['errorHandler'] = function (yi$1v6) {}, qgdbca['prototype']['initGame'] = function () {
    var qgacdb = new p_y$v(this);qgacdb['show']();
  }, qgdbca;
}(),
    p_y$v = function () {
  function aqb9(z035wn) {
    this['page'] = 0x3, this['rolePriceData'] = {}, this['boxlist'] = [], this['donwX'] = 0x0, this['downY'] = 0x0, this['tool'] = z035wn;
  }return aqb9['prototype']['setChildMouseThroughs'] = function (q9eab8) {
    var lshk4 = q9eab8['_childs'] || [];for (var khi$jy = 0x0; khi$jy < lshk4['length']; khi$jy++) {
      lshk4[khi$jy] && (lshk4[khi$jy]['mouseThrough'] = !![]);
    }
  }, aqb9['prototype']['show'] = function () {
    if (this['tool']['data']['on'] === '1') {
      this['main'] = new p_wn5e9['demoui']['MainUI'](), Laya['stage']['addChild'](this['main']), this['main']['mouseThrough'] = !![];var r612 = this['main']['_childs'] || [];for (var hiyj$ = 0x0; hiyj$ < r612['length']; hiyj$++) {
        r612[hiyj$]['mouseThrough'] = !![];
      }this['setChildMouseThroughs'](this['main']['_childs']), this['setChildMouseThroughs'](this['main']['_childs'][0x0]), this['initIcon'](), this['initEvent'](), this['initView'](), p_v$16yi['init']();
    }
  }, aqb9['prototype']['initView'] = function () {
    var $yjhk = this,
        ltf_ = this['tool']['data']['follow_down_words']['replace'](/\\n/g, '\x0a');this['main']['box_1_lab_info']['text'] = ltf_;for (var zw5302 = 0x1; zw5302 <= this['tool']['data']['follow_gift_list']['length']; zw5302++) {
      var klhs4p = this['tool']['data']['follow_gift_list'][zw5302 - 0x1];this['main']['box_1_img_' + zw5302]['skin'] = klhs4p['url'], this['main']['box_1_lab_' + zw5302]['text'] = klhs4p['name'];
    }for (var zw5302 = 0x1; zw5302 <= this['tool']['data']['vip_box_list']['length']; zw5302++) {
      var klhs4p = this['tool']['data']['vip_box_list'][zw5302 - 0x1];this['main']['box_2_img_' + zw5302]['skin'] = klhs4p['url'], this['main']['box_2_lab_' + zw5302]['text'] = klhs4p['name'];
    }this['main']['box_2_lab_m_1']['text'] = '方法一：单日充值' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_m_2']['text'] = '方法二：历史累计充值' + +this['tool']['data']['y'] + '元', this['main']['box_2_lab_v_1']['text'] = (this['rolePriceData']['todayPrice'] || 0x0) + '/' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_v_2']['text'] = (this['rolePriceData']['allPrice'] || 0x0) + '/' + +this['tool']['data']['y'] + '元', this['main']['box_2_btn_copy']['skin'] = this['tool']['copyIcon'], this['main']['box_2_btn_get']['skin'] = this['tool']['getIcon'], this['main']['box_2_btn_copy']['visible'] = ![], this['main']['box_2_btn_get']['on'](Laya['Event']['CLICK'], this, function () {
      if ($yjhk['rolePriceData']['is_vip'] == 0x0) {
        p_v$16yi['msg']('请先获取vip资格');return;
      }$yjhk['main']['box_2_lab_wx']['text'] = $yjhk['tool']['data']['vip_wx'], $yjhk['main']['box_2_btn_copy']['visible'] = !![];
    }), this['main']['box_2_btn_copy']['on'](Laya['Event']['CLICK'], this, function () {
      $yjhk['copyText']($yjhk['tool']['data']['vip_wx']);
    }), this['main']['box_2_addclick']['on'](Laya['Event']['CLICK'], this, function () {
      if ($yjhk['rolePriceData']['is_vip'] == 0x0) return;$yjhk['main']['box_help']['visible'] = !![];
    }), this['main']['box_help_close']['on'](Laya['Event']['CLICK'], this, function () {
      $yjhk['main']['box_help']['visible'] = ![];
    }), this['main']['box_help_bg']['skin'] = this['tool']['data']['vip_customer_service_not_add'], this['main']['box_help_qrcode']['skin'] = this['tool']['data']['vip_qrcode'], this['main']['box_help_qrcode']['scaleX'] = 0xa0 / this['main']['box_help_qrcode']['width'], this['main']['box_help_qrcode']['scaleY'] = 0xa0 / this['main']['box_help_qrcode']['width'], this['main']['box_3_panel']['vScrollBar']['visible'] = ![], this['main']['box_3_panel']['vScrollBarSkin'] = 'common_atlas/scrollBar.png';
  }, aqb9['prototype']['initIcon'] = function () {
    this['icon'] = new Laya['Image'](), this['icon']['skin'] = this['tool']['data']['basics_image_url'], this['icon']['x'] = 0x0, this['icon']['y'] = 0xc8, this['icon']['width'] = 0x66, this['icon']['height'] = 0x6f, this['main']['addChild'](this['icon']), this['icon']['on'](Laya['Event']['MOUSE_DOWN'], this, this['iconPress']), this['icon']['on'](Laya['Event']['MOUSE_UP'], this, this['iconUp']), this['icon']['on'](Laya['Event']['MOUSE_WHEEL'], this, this['iconMove']), this['dragRect'] = new Laya['Rectangle'](-this['icon']['width'] / 0x2, 0x0, Laya['stage']['width'], Laya['stage']['height'] - this['icon']['height'] / 0x2);
  }, aqb9['prototype']['initEvent'] = function () {
    var i4hjk = this;this['main']['btn_1']['on'](Laya['Event']['CLICK'], this, function () {
      if (i4hjk['page'] == 0x1) return;i4hjk['page1']();
    }), this['main']['btn_2']['on'](Laya['Event']['CLICK'], this, function () {
      if (i4hjk['page'] == 0x2) return;i4hjk['page2']();
    }), this['main']['btn_3']['on'](Laya['Event']['CLICK'], this, function () {
      if (i4hjk['page'] == 0x3) return;i4hjk['page3']();
    }), this['main']['btn_close']['on'](Laya['Event']['CLICK'], this, function () {
      i4hjk['main']['bg']['x'] = -0x2ee, i4hjk['icon']['visible'] = !![];
    });
  }, aqb9['prototype']['initBoard'] = function () {
    this['isInitBoard'] = !![], this['page1']();
  }, aqb9['prototype']['showBoard'] = function () {
    this['main']['bg']['x'] = 0x0, this['icon']['visible'] = ![], this['tool']['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=sidebarApiRoleId&role_id=' + p_skp4lh['sygame']['role_id'] + '&channel=' + p_skp4lh['sygame']['channel'], this['rolePriceHandler']['bind'](this), this['roleError']['bind'](this));
  }, aqb9['prototype']['page1'] = function () {
    this['page'] = 0x1, this['main']['bg']['skin'] = this['tool']['data']['public_code'], this['main']['box_1_show']['visible'] = !![], this['main']['box_2_show']['visible'] = ![], this['main']['box_3_show']['visible'] = ![];
  }, aqb9['prototype']['page2'] = function () {
    this['page'] = 0x2, this['main']['bg']['skin'] = this['tool']['data']['vip_customer_service'], this['main']['box_1_show']['visible'] = ![], this['main']['box_2_show']['visible'] = !![], this['main']['box_3_show']['visible'] = ![];
  }, aqb9['prototype']['page3'] = function () {
    this['page'] = 0x3, this['main']['bg']['skin'] = this['tool']['data']['game_center_image_url'], this['main']['box_1_show']['visible'] = ![], this['main']['box_2_show']['visible'] = ![], this['main']['box_3_show']['visible'] = !![], this['sendBox'] || this['getBoxList'](0x0), this['sendBox'] = !![], p_up4lxt && p_up4lxt['syClickOpenBox']();
  }, aqb9['prototype']['getBoxList'] = function (zn3w) {
    var lh4ksp = this;p_up4lxt && p_up4lxt['syGetBoxList']({ 'page': zn3w, 'count': 0xc })['then'](function (bdaqc) {
      var y6jk = bdaqc['data'];y6jk['status'] == 0x3e9 ? y6jk['data'] && y6jk['data']['length'] && (lh4ksp['boxlist'] = lh4ksp['boxlist']['concat'](y6jk['data']), zn3w++, lh4ksp['getBoxList'](zn3w)) : lh4ksp['boxListHandler']();
    });
  }, aqb9['prototype']['copyText'] = function (ji6) {
    try {
      wx['setClipboardData']({ 'data': ji6, 'success': function (s4tlh) {
          console['log']('复制成功:', s4tlh);
        } });
    } catch (gacb) {}
  }, aqb9['prototype']['rolePriceHandler'] = function (n8q9be) {
    this['rolePriceData'] = JSON['parse'](n8q9be);switch (this['rolePriceData']['status']) {case 0x3e9:
        this['main']['box_2_lab_v_1']['text'] = (this['rolePriceData']['todayPrice'] || 0x0) + '/' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_v_2']['text'] = (this['rolePriceData']['allPrice'] || 0x0) + '/' + +this['tool']['data']['y'] + '元';break;case 0x3ea:
        break;case 0x3eb:
        break;}
  }, aqb9['prototype']['roleError'] = function () {}, aqb9['prototype']['boxListHandler'] = function () {
    var kjyih$ = function (xlu_t) {
      var xp4l = isjkhy['boxlist'][xlu_t],
          znwe3 = new p_wn5e9['demoui']['BoxItemUI']();znwe3['icon']['skin'] = xp4l['icon'], znwe3['title']['text'] = xp4l['title'], znwe3['x'] = 0xa0 * (xlu_t % 0x3), znwe3['y'] = 0xa0 * (xlu_t / 0x3 ^ 0x0), isjkhy['main']['box_3_panel']['addChild'](znwe3);var $y6v1 = { 'appid': p_skp4lh['sygame']['appid'], 'game_id': xp4l['game_id'], 'jump_appid': xp4l['jump_appid'], 'jump_path': xp4l['jump_path'], 'tunnel_id': xp4l['tunnel_id'], 'uv': 0x0, 'wecha_id': p_skp4lh['sygame']['openid'] },
          v7$1r = xp4l['preview_img'],
          jk$i = xp4l['jump_type'],
          t4lxpu = xp4l['kf_session'];znwe3['on'](Laya['Event']['CLICK'], isjkhy, function () {
        p_up4lxt && p_up4lxt['syClickBox']({ 'game_id': xp4l['game_id'], 'tunnel_id': xp4l['tunnel_id'], 'jump_appid': xp4l['jump_appid'], 'jump_path': xp4l['jump_path'] })['then'](function (tfxm) {
          if (jk$i === '0') wx['navigateToMiniProgram']({ 'appId': $y6v1['jump_appid'], 'path': $y6v1['jump_path'], 'fail': function (tsp4h) {
              if (!v7$1r) return;wx['previewImage']({ 'urls': [v7$1r] });
            } });else {
            if (jk$i === '1') {
              if (!v7$1r) return;wx['previewImage']({ 'urls': [v7$1r] });
            } else {
              if (jk$i === '2') {
                if (!t4lxpu) return;wx['openCustomerServiceConversation']({ 'sessionFrom': t4lxpu, 'showMessageCard': !![], 'sendMessageTitle': '', 'sendMessagePath': '', 'sendMessageImg': '' });
              }
            }
          }
        });
      });
    },
        isjkhy = this;for (var ij$yk6 = 0x0; ij$yk6 < this['boxlist']['length']; ij$yk6++) {
      kjyih$(ij$yk6);
    }
  }, aqb9['prototype']['boxListError'] = function () {}, aqb9['prototype']['boxClickHandler'] = function () {}, aqb9['prototype']['iconPress'] = function (y$ji16) {
    this['donwX'] = y$ji16['target']['x'], this['donwY'] = y$ji16['target']['y'], this['icon']['startDrag'](this['dragRect']), this['isMove'] = ![], this['isPress'] = !![];
  }, aqb9['prototype']['iconMove'] = function (ksihyj) {
    this['isMove'] = !![];
  }, aqb9['prototype']['iconUp'] = function (y71v$6) {
    var k4hpj = y71v$6['target']['x'],
        ps4ht = y71v$6['target']['y'];this['icon']['stopDrag'](), k4hpj == this['donwX'] && this['donwY'] == ps4ht && (this['isInitBoard'] || this['initBoard'](), this['showBoard']()), this['isMove'] = ![], this['isPress'] = ![];
  }, aqb9;
}(),
    p_wn5e9;(function (pskhj) {
  var jkiy$h;(function (z703) {
    var q8n9e = function (aqcbd) {
      p_j4spk(n9qe5, aqcbd);function n9qe5() {
        return aqcbd['call'](this) || this;
      }return n9qe5['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), aqcbd['prototype']['createChildren']['call'](this), this['createView'](pskhj['demoui']['BoxItemUI']['uiView']);
      }, n9qe5['uiView'] = { 'type': 'View', 'props': { 'width': 0xb4, 'height': 0xa0 }, 'child': [{ 'type': 'Image', 'props': { 'y': 0x3, 'x': 0x20, 'width': 0x73, 'var': 'icon', 'height': 0x73 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x79, 'x': -0x21, 'width': 0xb4, 'var': 'title', 'valign': 'middle', 'height': 0x22, 'fontSize': 0x16, 'color': '#441d1c', 'align': 'center' } }] }] }, n9qe5;
    }(laya['ui']['View']);z703['BoxItemUI'] = q8n9e;
  })(jkiy$h = pskhj['demoui'] || (pskhj['demoui'] = {}));
})(p_wn5e9 || (p_wn5e9 = {})), function (ikhsy) {
  var nw3e;(function (hkj4) {
    var yijksh = function (i$yv6) {
      p_j4spk(lfxu, i$yv6);function lfxu() {
        return i$yv6['call'](this) || this;
      }return lfxu['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), i$yv6['prototype']['createChildren']['call'](this), this['createView'](ikhsy['demoui']['MainUI']['uiView']);
      }, lfxu['uiView'] = { 'type': 'View', 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x2ee, 'top': 0x0, 'right': 0x0, 'left': 0x0, 'height': 0x536, 'bottom': 0x0 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x2ee, 'height': 0x536, 'centerY': 0x0 }, 'child': [{ 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x2ee, 'var': 'bg', 'height': 0x536 }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x2ee, 'visible': ![], 'var': 'box_1_show', 'height': 0x536, 'centerY': 0x0 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x253, 'x': 0x2e, 'width': 0x1d0, 'var': 'box_1_lab_info', 'leading': 0xa, 'height': 0x97, 'fontSize': 0x18, 'color': '#a959ee' } }, { 'type': 'HBox', 'props': { 'y': 0x2ee, 'x': 0x14, 'width': 0x1fe, 'space': 0x35, 'height': 0x78, 'align': 'top' }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x58, 'var': 'box_1_img_1', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_1', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0xa, 'x': 0xa, 'width': 0x58, 'var': 'box_1_img_2', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_2', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x14, 'x': 0x14, 'width': 0x58, 'var': 'box_1_img_3', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_3', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x1e, 'x': 0x1e, 'width': 0x58, 'var': 'box_1_img_4', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_4', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }] }] }, { 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'visible': ![], 'var': 'box_2_show' }, 'child': [{ 'type': 'HBox', 'props': { 'y': 0x220, 'x': 0x18, 'width': 0x1f4, 'space': 0x2c, 'height': 0x56, 'align': 'top' }, 'child': [{ 'type': 'Image', 'props': { 'y': 2.5, 'x': 0x0, 'width': 0x58, 'var': 'box_2_img_1', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_1', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0xc, 'x': 0xa, 'width': 0x58, 'var': 'box_2_img_2', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_2', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x16, 'x': 0x14, 'width': 0x58, 'var': 'box_2_img_3', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_3', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x20, 'x': 0x1e, 'width': 0x58, 'var': 'box_2_img_4', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_4', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x2a, 'x': 0x28, 'width': 0x58, 'var': 'box_2_img_5', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_5', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }] }, { 'type': 'Box', 'props': { 'y': 0x384, 'x': 0x0, 'width': 0x221, 'height': 0x44 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x0, 'x': 0x28, 'width': 0x122, 'var': 'box_2_lab_m_1', 'text': '方法一\uFF1A单日充值1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300' } }, { 'type': 'Text', 'props': { 'y': 0x1e, 'x': 0x28, 'width': 0x122, 'var': 'box_2_lab_m_2', 'text': '方法一\uFF1A历史累计充值1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300' } }, { 'type': 'Text', 'props': { 'y': 0x0, 'x': 0x141, 'width': 0xa4, 'var': 'box_2_lab_v_1', 'text': '1000/1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300', 'align': 'right' } }, { 'type': 'Text', 'props': { 'y': 0x1e, 'x': 0x141, 'width': 0xa4, 'var': 'box_2_lab_v_2', 'text': '1000/1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300', 'align': 'right' } }] }, { 'type': 'Image', 'props': { 'y': 0x1aa, 'x': 0x159, 'width': 0x66, 'var': 'box_2_btn_get', 'stateNum': 0x1, 'height': 0x26 } }, { 'type': 'Image', 'props': { 'y': 0x1aa, 'x': 0x159, 'width': 0x66, 'var': 'box_2_btn_copy', 'stateNum': 0x1, 'height': 0x26 } }, { 'type': 'Button', 'props': { 'y': 0x1d2, 'x': 0x126, 'width': 0xc9, 'var': 'box_2_addclick', 'stateNum': 0x1, 'height': 0x1b } }, { 'type': 'Text', 'props': { 'y': 0x13c, 'x': 0x17a, 'width': 0xa3, 'var': 'box_2_lab_wx', 'height': 0x1f, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'left' } }] }, { 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'visible': ![], 'var': 'box_3_show' }, 'child': [{ 'type': 'Panel', 'props': { 'y': 0xf5, 'x': 0x10, 'width': 0x201, 'var': 'box_3_panel', 'vScrollBarSkin': '', 'height': 0x29e } }] }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0x0, 'width': 0xbb, 'var': 'btn_1', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0xba, 'width': 0xbb, 'var': 'btn_2', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0x177, 'width': 0xbb, 'var': 'btn_3', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x203, 'x': 0x22e, 'width': 0x25, 'var': 'btn_close', 'height': 0x8f } }, { 'type': 'Box', 'props': { 'width': 0x2ee, 'visible': ![], 'var': 'box_help', 'height': 0x536 }, 'child': [{ 'type': 'Sprite', 'props': { 'y': 0x0, 'x': 0x0, 'mouseThrough': ![], 'alpha': 0.7 }, 'child': [{ 'type': 'Rect', 'props': { 'width': 0x2ee, 'lineWidth': 0x1, 'height': 0x536, 'fillColor': '#000000' } }] }, { 'type': 'Image', 'props': { 'y': 0x158, 'x': 0x28, 'width': 0x1d2, 'var': 'box_help_bg', 'height': 0x203 }, 'child': [{ 'type': 'Button', 'props': { 'y': -0x1, 'x': 0x1a0, 'width': 0x33, 'var': 'box_help_close', 'height': 0x28 } }, { 'type': 'Image', 'props': { 'y': 0x3f, 'x': 0x98, 'width': 0xa0, 'var': 'box_help_qrcode', 'height': 0xa0 } }] }] }] }] }] }, lfxu;
    }(laya['ui']['View']);hkj4['MainUI'] = yijksh;
  })(nw3e = ikhsy['demoui'] || (ikhsy['demoui'] = {}));
}(p_wn5e9 || (p_wn5e9 = {})), function (tlxp4u) {
  var pxlt4u;(function ($6r17) {
    var ptsh4l = function (yisjhk) {
      p_j4spk(pxl4ts, yisjhk);function pxl4ts() {
        return yisjhk['call'](this) || this;
      }return pxl4ts['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), yisjhk['prototype']['createChildren']['call'](this), this['createView'](tlxp4u['demoui']['ToastUI']['uiView']);
      }, pxl4ts['uiView'] = { 'type': 'View', 'props': { 'width': 0x2ee, 'height': 0x536 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x12c, 'height': 0x32, 'centerY': 0x0, 'centerX': 0x0 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x12c, 'height': 0x32, 'centerX': 0x0, 'alpha': 0.5 }, 'child': [{ 'type': 'Rect', 'props': { 'width': 0x12c, 'lineWidth': 0x1, 'height': 0x32, 'fillColor': '#382f2f' } }] }, { 'type': 'Text', 'props': { 'width': 0x12c, 'var': 'lab_msg', 'valign': 'middle', 'text': 'text', 'height': 0x32, 'fontSize': 0x18, 'color': '#ffffff', 'align': 'center' } }] }] }, pxl4ts;
    }(laya['ui']['View']);$6r17['ToastUI'] = ptsh4l;
  })(pxlt4u = tlxp4u['demoui'] || (tlxp4u['demoui'] = {}));
}(p_wn5e9 || (p_wn5e9 = {}));var p_v$16yi = function () {
  function y6ji() {}return y6ji['init'] = function () {
    !this['ui'] && (this['ui'] = new p_wn5e9['demoui']['ToastUI'](), this['ui']['visible'] = ![], Laya['stage']['addChild'](this['ui']));
  }, y6ji['msg'] = function (nw59) {
    var _xmof = this;!this['ui'] && y6ji['init'](), this['ui']['visible'] = !![], this['ui']['lab_msg']['text'] = nw59, clearTimeout(this['interval']), this['interval'] = setTimeout(function () {
      _xmof['ui']['visible'] = ![];
    }, 0x7d0);
  }, y6ji;
}();window['minitool'] = p_jihys;