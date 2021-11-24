var k = wx.$f;
var fmiht = this && this['__extends'] || function () {
  var ndwsjc = function (wcdjn, vimtbf) {
    return ndwsjc = Object['setPrototypeOf'] || { '__proto__': [] } instanceof Array && function (r7y8$3, xnzesw) {
      r7y8$3['__proto__'] = xnzesw;
    } || function ($7z8r3, wndsex) {
      for (var ojcwds in wndsex) if (wndsex['hasOwnProperty'](ojcwds)) $7z8r3[ojcwds] = wndsex[ojcwds];
    }, ndwsjc(wcdjn, vimtbf);
  };return function (co46_2, $7yr83) {
    ndwsjc(co46_2, $7yr83);function jsdwc() {
      this['constructor'] = co46_2;
    }co46_2['prototype'] = $7yr83 === null ? Object['create']($7yr83) : (jsdwc['prototype'] = $7yr83['prototype'], new jsdwc());
  };
}(),
    fvu1gb = window['Sygame'],
    fimtvb = ![],
    fbiuv = function () {
  function exrnz() {}return exrnz['init'] = function () {
    fimtvb ? this['sygame'] = { 'channel': '3477d2273abd484ba2a0e04ad4971b3c', 'role_id': undefined, 'openid': 'oxmOf5biumkGash-Xht9FVAlswVk', 'appid': 'wx2936121c4817bf46' } : this['sygame'] = fvu1gb;
  }, exrnz['getTimeStamp'] = function () {
    return new Date()['getTime']();
  }, exrnz['setResMap'] = function (wnsxez, er8) {
    this['resMap'][wnsxez] = wnsxez + '?' + er8;
  }, exrnz['getResMap'] = function (mvbu1) {
    return this['resMap'][mvbu1];
  }, exrnz['resMap'] = {}, exrnz;
}(),
    fjcdo26 = function () {
  function mvb() {
    this['getIcon'] = 'https://wx.11babay.cn/uploads/f/fkccc1532944783/5/2/c/7/60dc442c4fbc5.png', this['copyIcon'] = 'https://wx.11babay.cn/uploads/f/fkccc1532944783/3/0/1/7/60dc4409dce39.png', fbiuv['init'](), this['getBoxCheckoutCode']();
  }return mvb['prototype']['send'] = function (docwjs, xwjnds, x8ne, v19ui, k462o) {
    v19ui === void 0x0 && (v19ui = 'get');k462o === void 0x0 && (k462o = '' || null);var c4j62 = new Laya['HttpRequest']();c4j62['http']['timeout'] = 0x2710, c4j62['once'](Laya['Event']['COMPLETE'], this, xwjnds), c4j62['once'](Laya['Event']['ERROR'], this, x8ne), c4j62['send'](docwjs, k462o, v19ui, 'text');
  }, mvb['prototype']['postSidebarApi'] = function () {
    var e$r78 = fbiuv['sygame']['openid'],
        bhfm = '&channel=' + fbiuv['sygame']['channel'] + '&wecha_id=' + e$r78;this['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=sidebarApi' + bhfm, this['completeHandler'], this['errorHandler']);
  }, mvb['prototype']['getBoxCheckoutCode'] = function () {
    var xswnjd = Sygame['SY_CONF']['commitId'];this['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=getBoxCheckoutCode', this['getBoxCheckoutCodeRes'], this['errorHandler'], 'post', { 'commitId': xswnjd });
  }, mvb['prototype']['getBoxCheckoutCodeRes'] = function ($3pay7) {
    var ib19v = JSON['parse']($3pay7);console['log']('getBoxCheckoutCode:', ib19v);if (ib19v['status'] == 0x3e9) {
      var _4k5 = ib19v['info'];_4k5 == 0xfa1 ? this['postSidebarApi']() : console['error']('盛也盒子\x20不显示' + ib19v);
    } else console['error']('盛也盒子 getBoxCheckoutCodeRes 其他错误' + ib19v);
  }, mvb['prototype']['completeHandler'] = function (do6j2c) {
    var t5q0kh = JSON['parse'](do6j2c);console['log'](t5q0kh);switch (t5q0kh['status']) {case 0x3e9:
        var dcs6oj = [];t5q0kh['msg']['basics_image_url'] && dcs6oj['push']({ 'url': t5q0kh['msg']['basics_image_url'], 'type': Laya['Loader']['IMAGE'] }), t5q0kh['msg']['public_code'] && dcs6oj['push']({ 'url': t5q0kh['msg']['public_code'], 'type': Laya['Loader']['IMAGE'] }), t5q0kh['msg']['vip_customer_service'] && dcs6oj['push']({ 'url': t5q0kh['msg']['vip_customer_service'], 'type': Laya['Loader']['IMAGE'] }), t5q0kh['msg']['vip_customer_service_not_add'] && dcs6oj['push']({ 'url': t5q0kh['msg']['vip_customer_service_not_add'], 'type': Laya['Loader']['IMAGE'] }), t5q0kh['msg']['game_center_image_url'] && dcs6oj['push']({ 'url': t5q0kh['msg']['game_center_image_url'], 'type': Laya['Loader']['IMAGE'] }), t5q0kh['msg']['vip_qrcode'] && dcs6oj['push']({ 'url': t5q0kh['msg']['vip_qrcode'], 'type': Laya['Loader']['IMAGE'] }), t5q0kh['msg']['getIcon'] && dcs6oj['push']({ 'url': this['getIcon'], 'type': Laya['Loader']['IMAGE'] }), t5q0kh['msg']['copyIcon'] && dcs6oj['push']({ 'url': this['copyIcon'], 'type': Laya['Loader']['IMAGE'] });for (var bfi = 0x0, o2jcd6 = t5q0kh['msg']['follow_gift_list']; bfi < o2jcd6['length']; bfi++) {
          var yr37 = o2jcd6[bfi];dcs6oj['push']({ 'url': yr37['url'], 'type': Laya['Loader']['IMAGE'] });
        }for (var wcndj = 0x0, exw8zn = t5q0kh['msg']['vip_box_list']; wcndj < exw8zn['length']; wcndj++) {
          var yr37 = exw8zn[wcndj];dcs6oj['push']({ 'url': yr37['url'], 'type': Laya['Loader']['IMAGE'] });
        }for (var f0ith = 0x0; f0ith < dcs6oj['length']; f0ith++) {
          fbiuv['setResMap'](dcs6oj[f0ith]['url'], fbiuv['getTimeStamp']()), dcs6oj[f0ith]['url'] = fbiuv['getResMap'](dcs6oj[f0ith]['url']);
        }Laya['loader']['load'](dcs6oj, Laya['Handler']['create'](this, this['initGame'])), this['data'] = t5q0kh['msg'];break;case 0x3ea:
        fer8z['msg']('空的游戏channel');break;case 0x3eb:
        fer8z['msg']('错误的游戏channel');break;case 0x3ec:
        fer8z['msg']('未找到对应游戏大类');break;case 0x3ed:
        fer8z['msg']('未设置侧边栏');break;}
  }, mvb['prototype']['errorHandler'] = function (vimub) {}, mvb['prototype']['initGame'] = function () {
    var f0ih = new fk40q_(this);f0ih['show']();
  }, mvb;
}(),
    fk40q_ = function () {
  function sxew(iftbmh) {
    this['page'] = 0x3, this['rolePriceData'] = {}, this['boxlist'] = [], this['donwX'] = 0x0, this['downY'] = 0x0, this['tool'] = iftbmh;
  }return sxew['prototype']['setChildMouseThroughs'] = function (ar7y) {
    var _qk50 = ar7y['_childs'] || [];for (var jso6d = 0x0; jso6d < _qk50['length']; jso6d++) {
      _qk50[jso6d] && (_qk50[jso6d]['mouseThrough'] = !![]);
    }
  }, sxew['prototype']['show'] = function () {
    if (this['tool']['data']['on'] === '1') {
      this['main'] = new fi0thm['demoui']['MainUI'](), Laya['stage']['addChild'](this['main']), this['main']['mouseThrough'] = !![];var _2k4 = this['main']['_childs'] || [];for (var b9iv1 = 0x0; b9iv1 < _2k4['length']; b9iv1++) {
        _2k4[b9iv1]['mouseThrough'] = !![];
      }this['setChildMouseThroughs'](this['main']['_childs']), this['setChildMouseThroughs'](this['main']['_childs'][0x0]), this['initIcon'](), this['initEvent'](), this['initView'](), fer8z['init']();
    }
  }, sxew['prototype']['initView'] = function () {
    var dnjsx = this,
        nswdx = this['tool']['data']['follow_down_words']['replace'](/\\n/g, '\x0a');this['main']['box_1_lab_info']['text'] = nswdx;for (var tbfvm = 0x1; tbfvm <= this['tool']['data']['follow_gift_list']['length']; tbfvm++) {
      var kh_50q = this['tool']['data']['follow_gift_list'][tbfvm - 0x1];this['main']['box_1_img_' + tbfvm]['skin'] = kh_50q['url'], this['main']['box_1_lab_' + tbfvm]['text'] = kh_50q['name'];
    }for (var tbfvm = 0x1; tbfvm <= this['tool']['data']['vip_box_list']['length']; tbfvm++) {
      var kh_50q = this['tool']['data']['vip_box_list'][tbfvm - 0x1];this['main']['box_2_img_' + tbfvm]['skin'] = kh_50q['url'], this['main']['box_2_lab_' + tbfvm]['text'] = kh_50q['name'];
    }this['main']['box_2_lab_m_1']['text'] = '方法一：单日充值' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_m_2']['text'] = '方法二：历史累计充值' + +this['tool']['data']['y'] + '元', this['main']['box_2_lab_v_1']['text'] = (this['rolePriceData']['todayPrice'] || 0x0) + '/' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_v_2']['text'] = (this['rolePriceData']['allPrice'] || 0x0) + '/' + +this['tool']['data']['y'] + '元', this['main']['box_2_btn_copy']['skin'] = this['tool']['copyIcon'], this['main']['box_2_btn_get']['skin'] = this['tool']['getIcon'], this['main']['box_2_btn_copy']['visible'] = ![], this['main']['box_2_btn_get']['on'](Laya['Event']['CLICK'], this, function () {
      if (dnjsx['rolePriceData']['is_vip'] == 0x0) {
        fer8z['msg']('请先获取vip资格');return;
      }dnjsx['main']['box_2_lab_wx']['text'] = this['rolePriceData']['vip_wx'], dnjsx['main']['box_2_btn_copy']['visible'] = !![];
    }), this['main']['box_2_btn_copy']['on'](Laya['Event']['CLICK'], this, function () {
      dnjsx['copyText'](this['rolePriceData']['vip_wx']);
    }), this['main']['box_2_addclick']['on'](Laya['Event']['CLICK'], this, function () {
      if (dnjsx['rolePriceData']['is_vip'] == 0x0) return;this['main']['box_help_qrcode']['skin'] = dnjsx['rolePriceData']['vip_qrcode'], dnjsx['main']['box_help']['visible'] = !![];
    }), this['main']['box_help_close']['on'](Laya['Event']['CLICK'], this, function () {
      dnjsx['main']['box_help']['visible'] = ![];
    }), this['main']['box_help_bg']['skin'] = this['tool']['data']['vip_customer_service_not_add'], this['main']['box_help_qrcode']['skin'] = dnjsx['rolePriceData']['vip_qrcode'], this['main']['box_help_qrcode']['scaleX'] = 0xa0 / this['main']['box_help_qrcode']['width'], this['main']['box_help_qrcode']['scaleY'] = 0xa0 / this['main']['box_help_qrcode']['width'], this['main']['box_3_panel']['vScrollBar']['visible'] = ![], this['main']['box_3_panel']['vScrollBarSkin'] = 'common_atlas/scrollBar.png';
  }, sxew['prototype']['initIcon'] = function () {
    this['icon'] = new Laya['Image'](), this['icon']['skin'] = this['tool']['data']['basics_image_url'], this['icon']['x'] = 0x0, this['icon']['y'] = 0xc8, this['icon']['width'] = 0x66, this['icon']['height'] = 0x6f, this['main']['addChild'](this['icon']), this['icon']['on'](Laya['Event']['MOUSE_DOWN'], this, this['iconPress']), this['icon']['on'](Laya['Event']['MOUSE_UP'], this, this['iconUp']), this['icon']['on'](Laya['Event']['MOUSE_WHEEL'], this, this['iconMove']), this['dragRect'] = new Laya['Rectangle'](-this['icon']['width'] / 0x2, 0x0, Laya['stage']['width'], Laya['stage']['height'] - this['icon']['height'] / 0x2);
  }, sxew['prototype']['initEvent'] = function () {
    var cnswj = this;this['main']['btn_1']['on'](Laya['Event']['CLICK'], this, function () {
      if (cnswj['page'] == 0x1) return;cnswj['page1']();
    }), this['main']['btn_2']['on'](Laya['Event']['CLICK'], this, function () {
      if (cnswj['page'] == 0x2) return;cnswj['page2']();
    }), this['main']['btn_3']['on'](Laya['Event']['CLICK'], this, function () {
      if (cnswj['page'] == 0x3) return;cnswj['page3']();
    }), this['main']['btn_close']['on'](Laya['Event']['CLICK'], this, function () {
      cnswj['main']['bg']['x'] = -0x2ee, cnswj['icon']['visible'] = !![];
    });
  }, sxew['prototype']['initBoard'] = function () {
    this['isInitBoard'] = !![], this['page1']();
  }, sxew['prototype']['showBoard'] = function () {
    this['main']['bg']['x'] = 0x0, this['icon']['visible'] = ![];var j624o = F$L6['selectedServer']['server_id'],
        bfitmh = F$L6['selectedServer']['server_name'],
        ew8xnz = F$L6['roleId'],
        tbhfi = F$L6['roleName'],
        e7rz = fbiuv['sygame']['openid'],
        qhk05t = '&role_id=' + fbiuv['sygame']['role_id'] + '&channel=' + fbiuv['sygame']['channel'] + '&server_id=' + j624o + '&server_name=' + bfitmh + '&wecha_id=' + e7rz + '&role_id=' + ew8xnz + '&role_name=' + tbhfi;this['tool']['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=sidebarApiRoleId' + qhk05t, this['rolePriceHandler']['bind'](this), this['roleError']['bind'](this));
  }, sxew['prototype']['page1'] = function () {
    this['page'] = 0x1, this['main']['bg']['skin'] = this['tool']['data']['public_code'], this['main']['box_1_show']['visible'] = !![], this['main']['box_2_show']['visible'] = ![], this['main']['box_3_show']['visible'] = ![];
  }, sxew['prototype']['page2'] = function () {
    this['page'] = 0x2, this['main']['bg']['skin'] = this['tool']['data']['vip_customer_service'], this['main']['box_1_show']['visible'] = ![], this['main']['box_2_show']['visible'] = !![], this['main']['box_3_show']['visible'] = ![];
  }, sxew['prototype']['page3'] = function () {
    this['page'] = 0x3, this['main']['bg']['skin'] = this['tool']['data']['game_center_image_url'], this['main']['box_1_show']['visible'] = ![], this['main']['box_2_show']['visible'] = ![], this['main']['box_3_show']['visible'] = !![], this['sendBox'] || this['getBoxList'](0x0), this['sendBox'] = !![], fvu1gb && fvu1gb['syClickOpenBox']();
  }, sxew['prototype']['getBoxList'] = function (uvfb) {
    var ibmthf = this;fvu1gb && fvu1gb['syGetBoxList']({ 'page': uvfb, 'count': 0xc })['then'](function (mh0i) {
      var cj26d = mh0i['data'];cj26d['status'] == 0x3e9 ? cj26d['data'] && cj26d['data']['length'] && (ibmthf['boxlist'] = ibmthf['boxlist']['concat'](cj26d['data']), uvfb++, ibmthf['getBoxList'](uvfb)) : ibmthf['boxListHandler']();
    });
  }, sxew['prototype']['copyText'] = function (dxen) {
    try {
      wx['setClipboardData']({ 'data': dxen, 'success': function (r$e8z7) {
          console['log']('复制成功:', r$e8z7);
        } });
    } catch (swnz) {}
  }, sxew['prototype']['rolePriceHandler'] = function (djwsoc) {
    this['rolePriceData'] = JSON['parse'](djwsoc);switch (this['rolePriceData']['status']) {case 0x3e9:
        this['main']['box_2_lab_v_1']['text'] = (this['rolePriceData']['todayPrice'] || 0x0) + '/' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_v_2']['text'] = (this['rolePriceData']['allPrice'] || 0x0) + '/' + +this['tool']['data']['y'] + '元';break;case 0x3ea:
        break;case 0x3eb:
        break;}
  }, sxew['prototype']['roleError'] = function () {}, sxew['prototype']['boxListHandler'] = function () {
    var vfbui = function (m1buv) {
      var ay$p3 = k5hq_['boxlist'][m1buv],
          $3p7ya = new fi0thm['demoui']['BoxItemUI']();$3p7ya['icon']['skin'] = ay$p3['icon'], $3p7ya['title']['text'] = ay$p3['title'], $3p7ya['x'] = 0xa0 * (m1buv % 0x3), $3p7ya['y'] = 0xa0 * (m1buv / 0x3 ^ 0x0), k5hq_['main']['box_3_panel']['addChild']($3p7ya);var cnjwsd = { 'appid': fbiuv['sygame']['appid'], 'game_id': ay$p3['game_id'], 'jump_appid': ay$p3['jump_appid'], 'jump_path': ay$p3['jump_path'], 'tunnel_id': ay$p3['tunnel_id'], 'uv': 0x0, 'wecha_id': fbiuv['sygame']['openid'] },
          doj6sc = ay$p3['preview_img'],
          hmqtf = ay$p3['jump_type'],
          r7zxe = ay$p3['kf_session'];$3p7ya['on'](Laya['Event']['CLICK'], k5hq_, function () {
        fvu1gb && fvu1gb['syClickBox']({ 'game_id': ay$p3['game_id'], 'tunnel_id': ay$p3['tunnel_id'], 'jump_appid': ay$p3['jump_appid'], 'jump_path': ay$p3['jump_path'] })['then'](function (nxdsj) {
          if (hmqtf === '0') wx['navigateToMiniProgram']({ 'appId': cnjwsd['jump_appid'], 'path': cnjwsd['jump_path'], 'fail': function ($py37) {
              if (!doj6sc) return;wx['previewImage']({ 'urls': [doj6sc] });
            } });else {
            if (hmqtf === '1') {
              if (!doj6sc) return;wx['previewImage']({ 'urls': [doj6sc] });
            } else {
              if (hmqtf === '2') {
                if (!r7zxe) return;wx['openCustomerServiceConversation']({ 'sessionFrom': r7zxe, 'showMessageCard': !![], 'sendMessageTitle': '', 'sendMessagePath': '', 'sendMessageImg': '' });
              }
            }
          }
        });
      });
    },
        k5hq_ = this;for (var cd26jo = 0x0; cd26jo < this['boxlist']['length']; cd26jo++) {
      vfbui(cd26jo);
    }
  }, sxew['prototype']['boxListError'] = function () {}, sxew['prototype']['boxClickHandler'] = function () {}, sxew['prototype']['iconPress'] = function (swdex) {
    this['donwX'] = swdex['target']['x'], this['donwY'] = swdex['target']['y'], this['icon']['startDrag'](this['dragRect']), this['isMove'] = ![], this['isPress'] = !![];
  }, sxew['prototype']['iconMove'] = function (iubmv1) {
    this['isMove'] = !![];
  }, sxew['prototype']['iconUp'] = function (nre8xz) {
    var zx87re = nre8xz['target']['x'],
        nexws = nre8xz['target']['y'];this['icon']['stopDrag'](), zx87re == this['donwX'] && this['donwY'] == nexws && (this['isInitBoard'] || this['initBoard'](), this['showBoard']()), this['isMove'] = ![], this['isPress'] = ![];
  }, sxew;
}(),
    fi0thm;(function (k_2564) {
  var csndw;(function (_0k45) {
    var zwex = function (jswocd) {
      fmiht(hk05_q, jswocd);function hk05_q() {
        return jswocd['call'](this) || this;
      }return hk05_q['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), jswocd['prototype']['createChildren']['call'](this), this['createView'](k_2564['demoui']['BoxItemUI']['uiView']);
      }, hk05_q['uiView'] = { 'type': 'View', 'props': { 'width': 0xb4, 'height': 0xa0 }, 'child': [{ 'type': 'Image', 'props': { 'y': 0x3, 'x': 0x20, 'width': 0x73, 'var': 'icon', 'height': 0x73 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x79, 'x': -0x21, 'width': 0xb4, 'var': 'title', 'valign': 'middle', 'height': 0x22, 'fontSize': 0x16, 'color': '#441d1c', 'align': 'center' } }] }] }, hk05_q;
    }(laya['ui']['View']);_0k45['BoxItemUI'] = zwex;
  })(csndw = k_2564['demoui'] || (k_2564['demoui'] = {}));
})(fi0thm || (fi0thm = {})), function (o2_64c) {
  var t0mih;(function (n8ex) {
    var vifmbu = function (uvi19) {
      fmiht(yr73a, uvi19);function yr73a() {
        return uvi19['call'](this) || this;
      }return yr73a['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), uvi19['prototype']['createChildren']['call'](this), this['createView'](o2_64c['demoui']['MainUI']['uiView']);
      }, yr73a['uiView'] = { 'type': 'View', 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x2ee, 'top': 0x0, 'right': 0x0, 'left': 0x0, 'height': 0x536, 'bottom': 0x0 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x2ee, 'height': 0x536, 'centerY': 0x0 }, 'child': [{ 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x2ee, 'var': 'bg', 'height': 0x536 }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x2ee, 'visible': ![], 'var': 'box_1_show', 'height': 0x536, 'centerY': 0x0 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x253, 'x': 0x2e, 'width': 0x1d0, 'var': 'box_1_lab_info', 'leading': 0xa, 'height': 0x97, 'fontSize': 0x18, 'color': '#a959ee' } }, { 'type': 'HBox', 'props': { 'y': 0x2ee, 'x': 0x14, 'width': 0x1fe, 'space': 0x35, 'height': 0x78, 'align': 'top' }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x58, 'var': 'box_1_img_1', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_1', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0xa, 'x': 0xa, 'width': 0x58, 'var': 'box_1_img_2', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_2', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x14, 'x': 0x14, 'width': 0x58, 'var': 'box_1_img_3', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_3', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x1e, 'x': 0x1e, 'width': 0x58, 'var': 'box_1_img_4', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_4', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }] }] }, { 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'visible': ![], 'var': 'box_2_show' }, 'child': [{ 'type': 'HBox', 'props': { 'y': 0x220, 'x': 0x18, 'width': 0x1f4, 'space': 0x2c, 'height': 0x56, 'align': 'top' }, 'child': [{ 'type': 'Image', 'props': { 'y': 2.5, 'x': 0x0, 'width': 0x58, 'var': 'box_2_img_1', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_1', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0xc, 'x': 0xa, 'width': 0x58, 'var': 'box_2_img_2', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_2', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x16, 'x': 0x14, 'width': 0x58, 'var': 'box_2_img_3', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_3', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x20, 'x': 0x1e, 'width': 0x58, 'var': 'box_2_img_4', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_4', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x2a, 'x': 0x28, 'width': 0x58, 'var': 'box_2_img_5', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_5', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }] }, { 'type': 'Box', 'props': { 'y': 0x384, 'x': 0x0, 'width': 0x221, 'height': 0x44 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x0, 'x': 0x28, 'width': 0x122, 'var': 'box_2_lab_m_1', 'text': '方法一\uFF1A单日充值1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300' } }, { 'type': 'Text', 'props': { 'y': 0x1e, 'x': 0x28, 'width': 0x122, 'var': 'box_2_lab_m_2', 'text': '方法一\uFF1A历史累计充值1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300' } }, { 'type': 'Text', 'props': { 'y': 0x0, 'x': 0x141, 'width': 0xa4, 'var': 'box_2_lab_v_1', 'text': '1000/1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300', 'align': 'right' } }, { 'type': 'Text', 'props': { 'y': 0x1e, 'x': 0x141, 'width': 0xa4, 'var': 'box_2_lab_v_2', 'text': '1000/1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300', 'align': 'right' } }] }, { 'type': 'Image', 'props': { 'y': 0x1aa, 'x': 0x159, 'width': 0x66, 'var': 'box_2_btn_get', 'stateNum': 0x1, 'height': 0x26 } }, { 'type': 'Image', 'props': { 'y': 0x1aa, 'x': 0x159, 'width': 0x66, 'var': 'box_2_btn_copy', 'stateNum': 0x1, 'height': 0x26 } }, { 'type': 'Button', 'props': { 'y': 0x1d2, 'x': 0x126, 'width': 0xc9, 'var': 'box_2_addclick', 'stateNum': 0x1, 'height': 0x1b } }, { 'type': 'Text', 'props': { 'y': 0x13c, 'x': 0x17a, 'width': 0xa3, 'var': 'box_2_lab_wx', 'height': 0x1f, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'left' } }] }, { 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'visible': ![], 'var': 'box_3_show' }, 'child': [{ 'type': 'Panel', 'props': { 'y': 0xf5, 'x': 0x10, 'width': 0x201, 'var': 'box_3_panel', 'vScrollBarSkin': '', 'height': 0x29e } }] }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0x0, 'width': 0xbb, 'var': 'btn_1', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0xba, 'width': 0xbb, 'var': 'btn_2', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0x177, 'width': 0xbb, 'var': 'btn_3', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x203, 'x': 0x22e, 'width': 0x25, 'var': 'btn_close', 'height': 0x8f } }, { 'type': 'Box', 'props': { 'width': 0x2ee, 'visible': ![], 'var': 'box_help', 'height': 0x536 }, 'child': [{ 'type': 'Sprite', 'props': { 'y': 0x0, 'x': 0x0, 'mouseThrough': ![], 'alpha': 0.7 }, 'child': [{ 'type': 'Rect', 'props': { 'width': 0x2ee, 'lineWidth': 0x1, 'height': 0x536, 'fillColor': '#000000' } }] }, { 'type': 'Image', 'props': { 'y': 0x158, 'x': 0x28, 'width': 0x1d2, 'var': 'box_help_bg', 'height': 0x203 }, 'child': [{ 'type': 'Button', 'props': { 'y': -0x1, 'x': 0x1a0, 'width': 0x33, 'var': 'box_help_close', 'height': 0x28 } }, { 'type': 'Image', 'props': { 'y': 0x3f, 'x': 0x98, 'width': 0xa0, 'var': 'box_help_qrcode', 'height': 0xa0 } }] }] }] }] }] }, yr73a;
    }(laya['ui']['View']);n8ex['MainUI'] = vifmbu;
  })(t0mih = o2_64c['demoui'] || (o2_64c['demoui'] = {}));
}(fi0thm || (fi0thm = {})), function (ufvmib) {
  var nwd;(function (e7rx) {
    var kq54 = function (xdjw) {
      fmiht(ufmb, xdjw);function ufmb() {
        return xdjw['call'](this) || this;
      }return ufmb['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), xdjw['prototype']['createChildren']['call'](this), this['createView'](ufvmib['demoui']['ToastUI']['uiView']);
      }, ufmb['uiView'] = { 'type': 'View', 'props': { 'width': 0x2ee, 'height': 0x536 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x12c, 'height': 0x32, 'centerY': 0x0, 'centerX': 0x0 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x12c, 'height': 0x32, 'centerX': 0x0, 'alpha': 0.5 }, 'child': [{ 'type': 'Rect', 'props': { 'width': 0x12c, 'lineWidth': 0x1, 'height': 0x32, 'fillColor': '#382f2f' } }] }, { 'type': 'Text', 'props': { 'width': 0x12c, 'var': 'lab_msg', 'valign': 'middle', 'text': 'text', 'height': 0x32, 'fontSize': 0x18, 'color': '#ffffff', 'align': 'center' } }] }] }, ufmb;
    }(laya['ui']['View']);e7rx['ToastUI'] = kq54;
  })(nwd = ufvmib['demoui'] || (ufvmib['demoui'] = {}));
}(fi0thm || (fi0thm = {}));var fer8z = function () {
  function dnjs() {}return dnjs['init'] = function () {
    !this['ui'] && (this['ui'] = new fi0thm['demoui']['ToastUI'](), this['ui']['visible'] = ![], Laya['stage']['addChild'](this['ui']));
  }, dnjs['msg'] = function (_6o4k2) {
    var ftq = this;!this['ui'] && dnjs['init'](), this['ui']['visible'] = !![], this['ui']['lab_msg']['text'] = _6o4k2, clearTimeout(this['interval']), this['interval'] = setTimeout(function () {
      ftq['ui']['visible'] = ![];
    }, 0x7d0);
  }, dnjs;
}();window['minitool'] = fjcdo26;