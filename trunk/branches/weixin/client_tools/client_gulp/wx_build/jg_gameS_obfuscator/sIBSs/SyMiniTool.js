var K = wx.$S;
var spsjqgy = this && this['__extends'] || function () {
  var shy5a = function (v9ok3, ead54$) {
    return shy5a = Object['setPrototypeOf'] || { '__proto__': [] } instanceof Array && function (kzwc0, m_xi2) {
      kzwc0['__proto__'] = m_xi2;
    } || function (v3zo9, dy5sp) {
      for (var vkwo9 in dy5sp) if (dy5sp['hasOwnProperty'](vkwo9)) v3zo9[vkwo9] = dy5sp[vkwo9];
    }, shy5a(v9ok3, ead54$);
  };return function (w0c9kz, kovzr) {
    shy5a(w0c9kz, kovzr);function o3rvkz() {
      this['constructor'] = w0c9kz;
    }w0c9kz['prototype'] = kovzr === null ? Object['create'](kovzr) : (o3rvkz['prototype'] = kovzr['prototype'], new o3rvkz());
  };
}(),
    sv3uz = window['Sygame'],
    skcwz90 = ![],
    swc_i90 = function () {
  function _mcix2() {}return _mcix2['init'] = function () {
    skcwz90 ? this['sygame'] = { 'channel': '3477d2273abd484ba2a0e04ad4971b3c', 'role_id': undefined, 'openid': 'oxmOf5biumkGash-Xht9FVAlswVk', 'appid': 'wx2936121c4817bf46' } : this['sygame'] = sv3uz;
  }, _mcix2['getTimeStamp'] = function () {
    return new Date()['getTime']();
  }, _mcix2['setResMap'] = function (m2xitn, t2xn7) {
    this['resMap'][m2xitn] = m2xitn + '?' + t2xn7;
  }, _mcix2['getResMap'] = function (wz09kc) {
    return this['resMap'][wz09kc];
  }, _mcix2['resMap'] = {}, _mcix2;
}(),
    sqpgyj = function () {
  function l1f86b() {
    this['getIcon'] = 'https://wx.11babay.cn/uploads/f/fkccc1532944783/5/2/c/7/60dc442c4fbc5.png', this['copyIcon'] = 'https://wx.11babay.cn/uploads/f/fkccc1532944783/3/0/1/7/60dc4409dce39.png', swc_i90['init'](), this['getBoxCheckoutCode']();
  }return l1f86b['prototype']['send'] = function (xin_2m, _x2min, ad$e4, _wc0i, s1jgqp) {
    _wc0i === void 0x0 && (_wc0i = 'get');s1jgqp === void 0x0 && (s1jgqp = '' || null);var k9v0z = new Laya['HttpRequest']();k9v0z['http']['timeout'] = 0x2710, k9v0z['once'](Laya['Event']['COMPLETE'], this, _x2min), k9v0z['once'](Laya['Event']['ERROR'], this, ad$e4), k9v0z['send'](xin_2m, s1jgqp, _wc0i, 'text');
  }, l1f86b['prototype']['postSidebarApi'] = function () {
    var eau4$d = swc_i90['sygame']['openid'],
        ra$ue4 = '&channel=' + swc_i90['sygame']['channel'] + '&wecha_id=' + eau4$d;this['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=sidebarApi' + ra$ue4, this['completeHandler'], this['errorHandler']);
  }, l1f86b['prototype']['getBoxCheckoutCode'] = function () {
    var v3okrz = Sygame['SY_CONF']['commitId'];this['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=getBoxCheckoutCode', this['getBoxCheckoutCodeRes'], this['errorHandler'], 'post', { 'commitId': v3okrz });
  }, l1f86b['prototype']['getBoxCheckoutCodeRes'] = function (e$d54a) {
    var z9kwov = JSON['parse'](e$d54a);console['log']('getBoxCheckoutCode:', z9kwov);if (z9kwov['status'] == 0x3e9) {
      var u$34er = z9kwov['info'];u$34er == 0xfa1 ? this['postSidebarApi']() : console['error']('盛也盒子\x20不显示' + z9kwov);
    } else console['error']('盛也盒子 getBoxCheckoutCodeRes 其他错误' + z9kwov);
  }, l1f86b['prototype']['completeHandler'] = function (zko3v) {
    var w_90kc = JSON['parse'](zko3v);console['log'](w_90kc);switch (w_90kc['status']) {case 0x3e9:
        var _wc0k9 = [];w_90kc['msg']['basics_image_url'] && _wc0k9['push']({ 'url': w_90kc['msg']['basics_image_url'], 'type': Laya['Loader']['IMAGE'] }), w_90kc['msg']['public_code'] && _wc0k9['push']({ 'url': w_90kc['msg']['public_code'], 'type': Laya['Loader']['IMAGE'] }), w_90kc['msg']['vip_customer_service'] && _wc0k9['push']({ 'url': w_90kc['msg']['vip_customer_service'], 'type': Laya['Loader']['IMAGE'] }), w_90kc['msg']['vip_customer_service_not_add'] && _wc0k9['push']({ 'url': w_90kc['msg']['vip_customer_service_not_add'], 'type': Laya['Loader']['IMAGE'] }), w_90kc['msg']['game_center_image_url'] && _wc0k9['push']({ 'url': w_90kc['msg']['game_center_image_url'], 'type': Laya['Loader']['IMAGE'] }), w_90kc['msg']['vip_qrcode'] && _wc0k9['push']({ 'url': w_90kc['msg']['vip_qrcode'], 'type': Laya['Loader']['IMAGE'] }), w_90kc['msg']['getIcon'] && _wc0k9['push']({ 'url': this['getIcon'], 'type': Laya['Loader']['IMAGE'] }), w_90kc['msg']['copyIcon'] && _wc0k9['push']({ 'url': this['copyIcon'], 'type': Laya['Loader']['IMAGE'] });for (var k9vwz = 0x0, e4$rau = w_90kc['msg']['follow_gift_list']; k9vwz < e4$rau['length']; k9vwz++) {
          var ade$ = e4$rau[k9vwz];_wc0k9['push']({ 'url': ade$['url'], 'type': Laya['Loader']['IMAGE'] });
        }for (var v0zw = 0x0, rv3eou = w_90kc['msg']['vip_box_list']; v0zw < rv3eou['length']; v0zw++) {
          var ade$ = rv3eou[v0zw];_wc0k9['push']({ 'url': ade$['url'], 'type': Laya['Loader']['IMAGE'] });
        }for (var vr3oz = 0x0; vr3oz < _wc0k9['length']; vr3oz++) {
          swc_i90['setResMap'](_wc0k9[vr3oz]['url'], swc_i90['getTimeStamp']()), _wc0k9[vr3oz]['url'] = swc_i90['getResMap'](_wc0k9[vr3oz]['url']);
        }Laya['loader']['load'](_wc0k9, Laya['Handler']['create'](this, this['initGame'])), this['data'] = w_90kc['msg'];break;case 0x3ea:
        s_kc09['msg']('空的游戏channel');break;case 0x3eb:
        s_kc09['msg']('错误的游戏channel');break;case 0x3ec:
        s_kc09['msg']('未找到对应游戏大类');break;case 0x3ed:
        s_kc09['msg']('未设置侧边栏');break;}
  }, l1f86b['prototype']['errorHandler'] = function (w0k9z) {}, l1f86b['prototype']['initGame'] = function () {
    var d4u$ae = new sjqbg81(this);d4u$ae['show']();
  }, l1f86b;
}(),
    sjqbg81 = function () {
  function sygjp(da54h) {
    this['page'] = 0x3, this['rolePriceData'] = {}, this['boxlist'] = [], this['donwX'] = 0x0, this['downY'] = 0x0, this['tool'] = da54h;
  }return sygjp['prototype']['setChildMouseThroughs'] = function (euvo) {
    var $ha4d = euvo['_childs'] || [];for (var pqsyh = 0x0; pqsyh < $ha4d['length']; pqsyh++) {
      $ha4d[pqsyh] && ($ha4d[pqsyh]['mouseThrough'] = !![]);
    }
  }, sygjp['prototype']['show'] = function () {
    if (this['tool']['data']['on'] === '1') {
      this['main'] = new swcz09k['demoui']['MainUI'](), Laya['stage']['addChild'](this['main']), this['main']['mouseThrough'] = !![];var a4e$ru = this['main']['_childs'] || [];for (var w_9c = 0x0; w_9c < a4e$ru['length']; w_9c++) {
        a4e$ru[w_9c]['mouseThrough'] = !![];
      }this['setChildMouseThroughs'](this['main']['_childs']), this['setChildMouseThroughs'](this['main']['_childs'][0x0]), this['initIcon'](), this['initEvent'](), this['initView'](), s_kc09['init'](), this['main']['bg']['x'] = -0x2ee;
    }
  }, sygjp['prototype']['initView'] = function () {
    var ou3erv = this,
        ah54$d = this['tool']['data']['follow_down_words']['replace'](/\\n/g, '\x0a');this['main']['box_1_lab_info']['text'] = ah54$d;for (var d5hsyp = 0x1; d5hsyp <= this['tool']['data']['follow_gift_list']['length']; d5hsyp++) {
      var rzvu3 = this['tool']['data']['follow_gift_list'][d5hsyp - 0x1];this['main']['box_1_img_' + d5hsyp]['skin'] = rzvu3['url'], this['main']['box_1_lab_' + d5hsyp]['text'] = rzvu3['name'];
    }for (var d5hsyp = 0x1; d5hsyp <= this['tool']['data']['vip_box_list']['length']; d5hsyp++) {
      var rzvu3 = this['tool']['data']['vip_box_list'][d5hsyp - 0x1];this['main']['box_2_img_' + d5hsyp]['skin'] = rzvu3['url'], this['main']['box_2_lab_' + d5hsyp]['text'] = rzvu3['name'];
    }this['main']['box_2_lab_m_1']['text'] = '方法一：单日充值' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_m_2']['text'] = '方法二：历史累计充值' + +this['tool']['data']['y'] + '元', this['main']['box_2_lab_v_1']['text'] = (this['rolePriceData']['todayPrice'] || 0x0) + '/' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_v_2']['text'] = (this['rolePriceData']['allPrice'] || 0x0) + '/' + +this['tool']['data']['y'] + '元', this['main']['box_2_btn_copy']['skin'] = this['tool']['copyIcon'], this['main']['box_2_btn_get']['skin'] = this['tool']['getIcon'], this['main']['box_2_btn_copy']['visible'] = ![], this['main']['box_2_btn_get']['on'](Laya['Event']['CLICK'], this, function () {
      if (ou3erv['rolePriceData']['is_vip'] == 0x0) {
        s_kc09['msg']('请先获取vip资格');return;
      }ou3erv['main']['box_2_lab_wx']['text'] = this['rolePriceData']['vip_wx'], ou3erv['main']['box_2_btn_copy']['visible'] = !![];
    }), this['main']['box_2_btn_copy']['on'](Laya['Event']['CLICK'], this, function () {
      ou3erv['copyText'](this['rolePriceData']['vip_wx']);
    }), this['main']['box_2_addclick']['on'](Laya['Event']['CLICK'], this, function () {
      if (ou3erv['rolePriceData']['is_vip'] == 0x0) return;this['main']['box_help_qrcode']['skin'] = ou3erv['rolePriceData']['vip_qrcode'], ou3erv['main']['box_help']['visible'] = !![];
    }), this['main']['box_help_close']['on'](Laya['Event']['CLICK'], this, function () {
      ou3erv['main']['box_help']['visible'] = ![];
    }), this['main']['box_help_bg']['skin'] = this['tool']['data']['vip_customer_service_not_add'], this['main']['box_help_qrcode']['skin'] = ou3erv['rolePriceData']['vip_qrcode'], this['main']['box_help_qrcode']['scaleX'] = 0xa0 / this['main']['box_help_qrcode']['width'], this['main']['box_help_qrcode']['scaleY'] = 0xa0 / this['main']['box_help_qrcode']['width'], this['main']['box_3_panel']['vScrollBar']['visible'] = ![], this['main']['box_3_panel']['vScrollBarSkin'] = 'common_atlas/scrollBar.png';
  }, sygjp['prototype']['initIcon'] = function () {
    this['icon'] = new Laya['Image'](), this['icon']['skin'] = this['tool']['data']['basics_image_url'], this['icon']['x'] = 0x0, this['icon']['y'] = 0xc8, this['icon']['width'] = 0x66, this['icon']['height'] = 0x6f, this['main']['addChild'](this['icon']), this['icon']['on'](Laya['Event']['MOUSE_DOWN'], this, this['iconPress']), this['icon']['on'](Laya['Event']['MOUSE_UP'], this, this['iconUp']), this['icon']['on'](Laya['Event']['MOUSE_WHEEL'], this, this['iconMove']), this['dragRect'] = new Laya['Rectangle'](-this['icon']['width'] / 0x2, 0x0, Laya['stage']['width'], Laya['stage']['height'] - this['icon']['height'] / 0x2);
  }, sygjp['prototype']['initEvent'] = function () {
    var sph5y = this;this['main']['btn_1']['on'](Laya['Event']['CLICK'], this, function () {
      if (sph5y['page'] == 0x1) return;sph5y['page1']();
    }), this['main']['btn_2']['on'](Laya['Event']['CLICK'], this, function () {
      if (sph5y['page'] == 0x2) return;sph5y['page2']();
    }), this['main']['btn_3']['on'](Laya['Event']['CLICK'], this, function () {
      if (sph5y['page'] == 0x3) return;sph5y['page3']();
    }), this['main']['btn_close']['on'](Laya['Event']['CLICK'], this, function () {
      sph5y['main']['bg']['x'] = -0x2ee, sph5y['icon']['visible'] = !![];
    });
  }, sygjp['prototype']['initBoard'] = function () {
    this['isInitBoard'] = !![], this['page1']();
  }, sygjp['prototype']['showBoard'] = function () {
    this['main']['bg']['x'] = 0x0, this['icon']['visible'] = ![];var ghyqp = s1X4['selectedServer']['server_id'],
        vroe3u = s1X4['selectedServer']['server_name'],
        o3e4r = s1X4['roleId'],
        dayhs = s1X4['roleName'],
        hdsy5p = swc_i90['sygame']['openid'],
        zc90wk = '&role_id=' + swc_i90['sygame']['role_id'] + '&channel=' + swc_i90['sygame']['channel'] + '&server_id=' + ghyqp + '&server_name=' + vroe3u + '&wecha_id=' + hdsy5p + '&role_id=' + o3e4r + '&role_name=' + dayhs;this['tool']['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=sidebarApiRoleId' + zc90wk, this['rolePriceHandler']['bind'](this), this['roleError']['bind'](this));
  }, sygjp['prototype']['page1'] = function () {
    this['page'] = 0x1, this['main']['bg']['skin'] = this['tool']['data']['public_code'], this['main']['box_1_show']['visible'] = !![], this['main']['box_2_show']['visible'] = ![], this['main']['box_3_show']['visible'] = ![];
  }, sygjp['prototype']['page2'] = function () {
    this['page'] = 0x2, this['main']['bg']['skin'] = this['tool']['data']['vip_customer_service'], this['main']['box_1_show']['visible'] = ![], this['main']['box_2_show']['visible'] = !![], this['main']['box_3_show']['visible'] = ![];
  }, sygjp['prototype']['page3'] = function () {
    this['page'] = 0x3, this['main']['bg']['skin'] = this['tool']['data']['game_center_image_url'], this['main']['box_1_show']['visible'] = ![], this['main']['box_2_show']['visible'] = ![], this['main']['box_3_show']['visible'] = !![], this['sendBox'] || this['getBoxList'](0x0), this['sendBox'] = !![], sv3uz && sv3uz['syClickOpenBox']();
  }, sygjp['prototype']['getBoxList'] = function (_c0xm) {
    var say5dh = this;sv3uz && sv3uz['syGetBoxList']({ 'page': _c0xm, 'count': 0xc })['then'](function (ueo4r3) {
      var qygjp = ueo4r3['data'];qygjp['status'] == 0x3e9 ? qygjp['data'] && qygjp['data']['length'] && (say5dh['boxlist'] = say5dh['boxlist']['concat'](qygjp['data']), _c0xm++, say5dh['getBoxList'](_c0xm)) : say5dh['boxListHandler']();
    });
  }, sygjp['prototype']['copyText'] = function (e4u$r3) {
    try {
      wx['setClipboardData']({ 'data': e4u$r3, 'success': function (qjg1) {
          console['log']('复制成功:', qjg1);
        } });
    } catch (q5yshp) {}
  }, sygjp['prototype']['rolePriceHandler'] = function (gyspj) {
    this['rolePriceData'] = JSON['parse'](gyspj);switch (this['rolePriceData']['status']) {case 0x3e9:
        this['main']['box_2_lab_v_1']['text'] = (this['rolePriceData']['todayPrice'] || 0x0) + '/' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_v_2']['text'] = (this['rolePriceData']['allPrice'] || 0x0) + '/' + +this['tool']['data']['y'] + '元';break;case 0x3ea:
        break;case 0x3eb:
        break;}
  }, sygjp['prototype']['roleError'] = function () {}, sygjp['prototype']['boxListHandler'] = function () {
    var l1b68f = function (hy5spq) {
      var $d5e = m72nxt['boxlist'][hy5spq],
          u4r$a = new swcz09k['demoui']['BoxItemUI']();u4r$a['icon']['skin'] = $d5e['icon'], u4r$a['title']['text'] = $d5e['title'], u4r$a['x'] = 0xa0 * (hy5spq % 0x3), u4r$a['y'] = 0xa0 * (hy5spq / 0x3 ^ 0x0), m72nxt['main']['box_3_panel']['addChild'](u4r$a);var u4$ad = { 'appid': swc_i90['sygame']['appid'], 'game_id': $d5e['game_id'], 'jump_appid': $d5e['jump_appid'], 'jump_path': $d5e['jump_path'], 'tunnel_id': $d5e['tunnel_id'], 'uv': 0x0, 'wecha_id': swc_i90['sygame']['openid'] },
          zko93v = $d5e['preview_img'],
          $a5dy = $d5e['jump_type'],
          vowzk = $d5e['kf_session'];u4r$a['on'](Laya['Event']['CLICK'], m72nxt, function () {
        sv3uz && sv3uz['syClickBox']({ 'game_id': $d5e['game_id'], 'tunnel_id': $d5e['tunnel_id'], 'jump_appid': $d5e['jump_appid'], 'jump_path': $d5e['jump_path'] })['then'](function (gphsq) {
          if ($a5dy === '0') wx['navigateToMiniProgram']({ 'appId': u4$ad['jump_appid'], 'path': u4$ad['jump_path'], 'fail': function (kv3or) {
              if (!zko93v) return;wx['previewImage']({ 'urls': [zko93v] });
            } });else {
            if ($a5dy === '1') {
              if (!zko93v) return;wx['previewImage']({ 'urls': [zko93v] });
            } else {
              if ($a5dy === '2') {
                if (!vowzk) return;wx['openCustomerServiceConversation']({ 'sessionFrom': vowzk, 'showMessageCard': !![], 'sendMessageTitle': '', 'sendMessagePath': '', 'sendMessageImg': '' });
              }
            }
          }
        });
      });
    },
        m72nxt = this;for (var r4eou3 = 0x0; r4eou3 < this['boxlist']['length']; r4eou3++) {
      l1b68f(r4eou3);
    }
  }, sygjp['prototype']['boxListError'] = function () {}, sygjp['prototype']['boxClickHandler'] = function () {}, sygjp['prototype']['iconPress'] = function (vu3ero) {
    this['donwX'] = vu3ero['target']['x'], this['donwY'] = vu3ero['target']['y'], this['icon']['startDrag'](this['dragRect']), this['isMove'] = ![], this['isPress'] = !![];
  }, sygjp['prototype']['iconMove'] = function (vok3z9) {
    this['isMove'] = !![];
  }, sygjp['prototype']['iconUp'] = function (rzvk3) {
    var bl816j = rzvk3['target']['x'],
        yphsqg = rzvk3['target']['y'];this['icon']['stopDrag'](), bl816j == this['donwX'] && this['donwY'] == yphsqg && (this['isInitBoard'] || this['initBoard'](), this['showBoard']()), this['isMove'] = ![], this['isPress'] = ![];
  }, sygjp;
}(),
    swcz09k;(function (dysh5p) {
  var ueo;(function (uad4$) {
    var cx2_im = function (_mi0c) {
      spsjqgy(m0x_c, _mi0c);function m0x_c() {
        return _mi0c['call'](this) || this;
      }return m0x_c['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), _mi0c['prototype']['createChildren']['call'](this), this['createView'](dysh5p['demoui']['BoxItemUI']['uiView']);
      }, m0x_c['uiView'] = { 'type': 'View', 'props': { 'width': 0xb4, 'height': 0xa0 }, 'child': [{ 'type': 'Image', 'props': { 'y': 0x3, 'x': 0x20, 'width': 0x73, 'var': 'icon', 'height': 0x73 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x79, 'x': -0x21, 'width': 0xb4, 'var': 'title', 'valign': 'middle', 'height': 0x22, 'fontSize': 0x16, 'color': '#441d1c', 'align': 'center' } }] }] }, m0x_c;
    }(laya['ui']['View']);uad4$['BoxItemUI'] = cx2_im;
  })(ueo = dysh5p['demoui'] || (dysh5p['demoui'] = {}));
})(swcz09k || (swcz09k = {})), function (x2ni) {
  var $h5;(function (lb68j) {
    var wkz09v = function (dy5ha) {
      spsjqgy(qgsjy, dy5ha);function qgsjy() {
        return dy5ha['call'](this) || this;
      }return qgsjy['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), dy5ha['prototype']['createChildren']['call'](this), this['createView'](x2ni['demoui']['MainUI']['uiView']);
      }, qgsjy['uiView'] = { 'type': 'View', 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x2ee, 'top': 0x0, 'right': 0x0, 'left': 0x0, 'height': 0x536, 'bottom': 0x0 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x2ee, 'height': 0x536, 'centerY': 0x0 }, 'child': [{ 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x2ee, 'var': 'bg', 'height': 0x536 }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x2ee, 'visible': ![], 'var': 'box_1_show', 'height': 0x536, 'centerY': 0x0 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x253, 'x': 0x2e, 'width': 0x1d0, 'var': 'box_1_lab_info', 'leading': 0xa, 'height': 0x97, 'fontSize': 0x18, 'color': '#a959ee' } }, { 'type': 'HBox', 'props': { 'y': 0x2ee, 'x': 0x14, 'width': 0x1fe, 'space': 0x35, 'height': 0x78, 'align': 'top' }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x58, 'var': 'box_1_img_1', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_1', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0xa, 'x': 0xa, 'width': 0x58, 'var': 'box_1_img_2', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_2', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x14, 'x': 0x14, 'width': 0x58, 'var': 'box_1_img_3', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_3', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x1e, 'x': 0x1e, 'width': 0x58, 'var': 'box_1_img_4', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_4', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }] }] }, { 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'visible': ![], 'var': 'box_2_show' }, 'child': [{ 'type': 'HBox', 'props': { 'y': 0x220, 'x': 0x18, 'width': 0x1f4, 'space': 0x2c, 'height': 0x56, 'align': 'top' }, 'child': [{ 'type': 'Image', 'props': { 'y': 2.5, 'x': 0x0, 'width': 0x58, 'var': 'box_2_img_1', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_1', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0xc, 'x': 0xa, 'width': 0x58, 'var': 'box_2_img_2', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_2', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x16, 'x': 0x14, 'width': 0x58, 'var': 'box_2_img_3', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_3', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x20, 'x': 0x1e, 'width': 0x58, 'var': 'box_2_img_4', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_4', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x2a, 'x': 0x28, 'width': 0x58, 'var': 'box_2_img_5', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_5', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }] }, { 'type': 'Box', 'props': { 'y': 0x384, 'x': 0x0, 'width': 0x221, 'height': 0x44 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x0, 'x': 0x28, 'width': 0x122, 'var': 'box_2_lab_m_1', 'text': '方法一\uFF1A单日充值1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300' } }, { 'type': 'Text', 'props': { 'y': 0x1e, 'x': 0x28, 'width': 0x122, 'var': 'box_2_lab_m_2', 'text': '方法一\uFF1A历史累计充值1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300' } }, { 'type': 'Text', 'props': { 'y': 0x0, 'x': 0x141, 'width': 0xa4, 'var': 'box_2_lab_v_1', 'text': '1000/1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300', 'align': 'right' } }, { 'type': 'Text', 'props': { 'y': 0x1e, 'x': 0x141, 'width': 0xa4, 'var': 'box_2_lab_v_2', 'text': '1000/1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300', 'align': 'right' } }] }, { 'type': 'Image', 'props': { 'y': 0x1aa, 'x': 0x159, 'width': 0x66, 'var': 'box_2_btn_get', 'stateNum': 0x1, 'height': 0x26 } }, { 'type': 'Image', 'props': { 'y': 0x1aa, 'x': 0x159, 'width': 0x66, 'var': 'box_2_btn_copy', 'stateNum': 0x1, 'height': 0x26 } }, { 'type': 'Button', 'props': { 'y': 0x1d2, 'x': 0x126, 'width': 0xc9, 'var': 'box_2_addclick', 'stateNum': 0x1, 'height': 0x1b } }, { 'type': 'Text', 'props': { 'y': 0x13c, 'x': 0x17a, 'width': 0xa3, 'var': 'box_2_lab_wx', 'height': 0x1f, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'left' } }] }, { 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'visible': ![], 'var': 'box_3_show' }, 'child': [{ 'type': 'Panel', 'props': { 'y': 0xf5, 'x': 0x10, 'width': 0x201, 'var': 'box_3_panel', 'vScrollBarSkin': '', 'height': 0x29e } }] }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0x0, 'width': 0xbb, 'var': 'btn_1', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0xba, 'width': 0xbb, 'var': 'btn_2', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0x177, 'width': 0xbb, 'var': 'btn_3', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x203, 'x': 0x22e, 'width': 0x25, 'var': 'btn_close', 'height': 0x8f } }, { 'type': 'Box', 'props': { 'width': 0x2ee, 'visible': ![], 'var': 'box_help', 'height': 0x536 }, 'child': [{ 'type': 'Sprite', 'props': { 'y': 0x0, 'x': 0x0, 'mouseThrough': ![], 'alpha': 0.7 }, 'child': [{ 'type': 'Rect', 'props': { 'width': 0x2ee, 'lineWidth': 0x1, 'height': 0x536, 'fillColor': '#000000' } }] }, { 'type': 'Image', 'props': { 'y': 0x158, 'x': 0x28, 'width': 0x1d2, 'var': 'box_help_bg', 'height': 0x203 }, 'child': [{ 'type': 'Button', 'props': { 'y': -0x1, 'x': 0x1a0, 'width': 0x33, 'var': 'box_help_close', 'height': 0x28 } }, { 'type': 'Image', 'props': { 'y': 0x3f, 'x': 0x98, 'width': 0xa0, 'var': 'box_help_qrcode', 'height': 0xa0 } }] }] }] }] }] }, qgsjy;
    }(laya['ui']['View']);lb68j['MainUI'] = wkz09v;
  })($h5 = x2ni['demoui'] || (x2ni['demoui'] = {}));
}(swcz09k || (swcz09k = {})), function (hqsg) {
  var w9zk0;(function (ad$h5) {
    var qs1p = function (cw_k) {
      spsjqgy(euo3vr, cw_k);function euo3vr() {
        return cw_k['call'](this) || this;
      }return euo3vr['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), cw_k['prototype']['createChildren']['call'](this), this['createView'](hqsg['demoui']['ToastUI']['uiView']);
      }, euo3vr['uiView'] = { 'type': 'View', 'props': { 'width': 0x2ee, 'height': 0x536 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x12c, 'height': 0x32, 'centerY': 0x0, 'centerX': 0x0 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x12c, 'height': 0x32, 'centerX': 0x0, 'alpha': 0.5 }, 'child': [{ 'type': 'Rect', 'props': { 'width': 0x12c, 'lineWidth': 0x1, 'height': 0x32, 'fillColor': '#382f2f' } }] }, { 'type': 'Text', 'props': { 'width': 0x12c, 'var': 'lab_msg', 'valign': 'middle', 'text': 'text', 'height': 0x32, 'fontSize': 0x18, 'color': '#ffffff', 'align': 'center' } }] }] }, euo3vr;
    }(laya['ui']['View']);ad$h5['ToastUI'] = qs1p;
  })(w9zk0 = hqsg['demoui'] || (hqsg['demoui'] = {}));
}(swcz09k || (swcz09k = {}));var s_kc09 = function () {
  function _9wk() {}return _9wk['init'] = function () {
    !this['ui'] && (this['ui'] = new swcz09k['demoui']['ToastUI'](), this['ui']['visible'] = ![], Laya['stage']['addChild'](this['ui']));
  }, _9wk['msg'] = function (gjs1p) {
    var phgqs = this;!this['ui'] && _9wk['init'](), this['ui']['visible'] = !![], this['ui']['lab_msg']['text'] = gjs1p, clearTimeout(this['interval']), this['interval'] = setTimeout(function () {
      phgqs['ui']['visible'] = ![];
    }, 0x7d0);
  }, _9wk;
}();window['minitool'] = sqpgyj;