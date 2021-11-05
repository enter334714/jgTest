var k = wx.$f;
var fhmft0 = this && this['__extends'] || function () {
  var enzxw = function (nswdxe, fmq0t) {
    return enzxw = Object['setPrototypeOf'] || { '__proto__': [] } instanceof Array && function (dcj62, ne8x) {
      dcj62['__proto__'] = ne8x;
    } || function (fmtbv, thmq0) {
      for (var e7rxz8 in thmq0) if (thmq0['hasOwnProperty'](e7rxz8)) fmtbv[e7rxz8] = thmq0[e7rxz8];
    }, enzxw(nswdxe, fmq0t);
  };return function (r$8z3, b19iv) {
    enzxw(r$8z3, b19iv);function vb9g1() {
      this['constructor'] = r$8z3;
    }r$8z3['prototype'] = b19iv === null ? Object['create'](b19iv) : (vb9g1['prototype'] = b19iv['prototype'], new vb9g1());
  };
}(),
    fodswcj = window['Sygame'],
    fmbiv1u = ![],
    fsjcd = function () {
  function zensw() {}return zensw['init'] = function () {
    fmbiv1u ? this['sygame'] = { 'channel': '3477d2273abd484ba2a0e04ad4971b3c', 'role_id': undefined, 'openid': 'oxmOf5biumkGash-Xht9FVAlswVk', 'appid': 'wx2936121c4817bf46' } : this['sygame'] = fodswcj;
  }, zensw['getTimeStamp'] = function () {
    return new Date()['getTime']();
  }, zensw['setResMap'] = function (q05hf, v1i9ub) {
    this['resMap'][q05hf] = q05hf + '?' + v1i9ub;
  }, zensw['getResMap'] = function (wjsdcn) {
    return this['resMap'][wjsdcn];
  }, zensw['resMap'] = {}, zensw;
}(),
    fvibu91 = function () {
  function k_hq() {
    this['getIcon'] = 'https://wx.11babay.cn/uploads/f/fkccc1532944783/5/2/c/7/60dc442c4fbc5.png', this['copyIcon'] = 'https://wx.11babay.cn/uploads/f/fkccc1532944783/3/0/1/7/60dc4409dce39.png', fsjcd['init'](), this['postSidebarApi']();
  }return k_hq['prototype']['send'] = function (_254kq, thqm0f, zr$73, ex7rz, _62oc) {
    ex7rz === void 0x0 && (ex7rz = 'get');_62oc === void 0x0 && (_62oc = '' || null);var nexzsw = new Laya['HttpRequest']();nexzsw['http']['timeout'] = 0x2710, nexzsw['once'](Laya['Event']['COMPLETE'], this, thqm0f), nexzsw['once'](Laya['Event']['ERROR'], this, zr$73), nexzsw['send'](_254kq, _62oc, ex7rz, 'text');
  }, k_hq['prototype']['postSidebarApi'] = function () {
    this['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=sidebarApi&channel=' + fsjcd['sygame']['channel'], this['completeHandler'], this['errorHandler']);
  }, k_hq['prototype']['completeHandler'] = function (iv1b9) {
    var jd6c2 = JSON['parse'](iv1b9);console['log'](jd6c2);switch (jd6c2['status']) {case 0x3e9:
        var c42j = [];jd6c2['msg']['basics_image_url'] && c42j['push']({ 'url': jd6c2['msg']['basics_image_url'], 'type': Laya['Loader']['IMAGE'] }), jd6c2['msg']['public_code'] && c42j['push']({ 'url': jd6c2['msg']['public_code'], 'type': Laya['Loader']['IMAGE'] }), jd6c2['msg']['vip_customer_service'] && c42j['push']({ 'url': jd6c2['msg']['vip_customer_service'], 'type': Laya['Loader']['IMAGE'] }), jd6c2['msg']['vip_customer_service_not_add'] && c42j['push']({ 'url': jd6c2['msg']['vip_customer_service_not_add'], 'type': Laya['Loader']['IMAGE'] }), jd6c2['msg']['game_center_image_url'] && c42j['push']({ 'url': jd6c2['msg']['game_center_image_url'], 'type': Laya['Loader']['IMAGE'] }), jd6c2['msg']['vip_qrcode'] && c42j['push']({ 'url': jd6c2['msg']['vip_qrcode'], 'type': Laya['Loader']['IMAGE'] }), jd6c2['msg']['getIcon'] && c42j['push']({ 'url': this['getIcon'], 'type': Laya['Loader']['IMAGE'] }), jd6c2['msg']['copyIcon'] && c42j['push']({ 'url': this['copyIcon'], 'type': Laya['Loader']['IMAGE'] });for (var j26c4 = 0x0, csodj6 = jd6c2['msg']['follow_gift_list']; j26c4 < csodj6['length']; j26c4++) {
          var r3$78 = csodj6[j26c4];c42j['push']({ 'url': r3$78['url'], 'type': Laya['Loader']['IMAGE'] });
        }for (var uv91i = 0x0, r3$y8 = jd6c2['msg']['vip_box_list']; uv91i < r3$y8['length']; uv91i++) {
          var r3$78 = r3$y8[uv91i];c42j['push']({ 'url': r3$78['url'], 'type': Laya['Loader']['IMAGE'] });
        }for (var jdcwso = 0x0; jdcwso < c42j['length']; jdcwso++) {
          fsjcd['setResMap'](c42j[jdcwso]['url'], fsjcd['getTimeStamp']()), c42j[jdcwso]['url'] = fsjcd['getResMap'](c42j[jdcwso]['url']);
        }Laya['loader']['load'](c42j, Laya['Handler']['create'](this, this['initGame'])), this['data'] = jd6c2['msg'];break;case 0x3ea:
        fvbmt['msg']('空的游戏channel');break;case 0x3eb:
        fvbmt['msg']('错误的游戏channel');break;case 0x3ec:
        fvbmt['msg']('未找到对应游戏大类');break;case 0x3ed:
        fvbmt['msg']('未设置侧边栏');break;}
  }, k_hq['prototype']['errorHandler'] = function (y$7ar3) {}, k_hq['prototype']['initGame'] = function () {
    var k6_2 = new ffm0(this);k6_2['show']();
  }, k_hq;
}(),
    ffm0 = function () {
  function q5k0th(sdxw) {
    this['page'] = 0x3, this['rolePriceData'] = {}, this['boxlist'] = [], this['donwX'] = 0x0, this['downY'] = 0x0, this['tool'] = sdxw;
  }return q5k0th['prototype']['setChildMouseThroughs'] = function (njsxd) {
    var ojd2 = njsxd['_childs'] || [];for (var wosjdc = 0x0; wosjdc < ojd2['length']; wosjdc++) {
      ojd2[wosjdc] && (ojd2[wosjdc]['mouseThrough'] = !![]);
    }
  }, q5k0th['prototype']['show'] = function () {
    if (this['tool']['data']['on'] === '1') {
      this['main'] = new fjwndc['demoui']['MainUI'](), Laya['stage']['addChild'](this['main']), this['main']['mouseThrough'] = !![];var y3a$p = this['main']['_childs'] || [];for (var kq405 = 0x0; kq405 < y3a$p['length']; kq405++) {
        y3a$p[kq405]['mouseThrough'] = !![];
      }this['setChildMouseThroughs'](this['main']['_childs']), this['setChildMouseThroughs'](this['main']['_childs'][0x0]), this['initIcon'](), this['initEvent'](), this['initView'](), fvbmt['init']();
    }
  }, q5k0th['prototype']['initView'] = function () {
    var b1ug9v = this,
        mth0f = this['tool']['data']['follow_down_words']['replace'](/\\n/g, '\x0a');this['main']['box_1_lab_info']['text'] = mth0f;for (var _0khq5 = 0x1; _0khq5 <= this['tool']['data']['follow_gift_list']['length']; _0khq5++) {
      var ithbfm = this['tool']['data']['follow_gift_list'][_0khq5 - 0x1];this['main']['box_1_img_' + _0khq5]['skin'] = ithbfm['url'], this['main']['box_1_lab_' + _0khq5]['text'] = ithbfm['name'];
    }for (var _0khq5 = 0x1; _0khq5 <= this['tool']['data']['vip_box_list']['length']; _0khq5++) {
      var ithbfm = this['tool']['data']['vip_box_list'][_0khq5 - 0x1];this['main']['box_2_img_' + _0khq5]['skin'] = ithbfm['url'], this['main']['box_2_lab_' + _0khq5]['text'] = ithbfm['name'];
    }this['main']['box_2_lab_m_1']['text'] = '方法一：单日充值' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_m_2']['text'] = '方法二：历史累计充值' + +this['tool']['data']['y'] + '元', this['main']['box_2_lab_v_1']['text'] = (this['rolePriceData']['todayPrice'] || 0x0) + '/' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_v_2']['text'] = (this['rolePriceData']['allPrice'] || 0x0) + '/' + +this['tool']['data']['y'] + '元', this['main']['box_2_btn_copy']['skin'] = this['tool']['copyIcon'], this['main']['box_2_btn_get']['skin'] = this['tool']['getIcon'], this['main']['box_2_btn_copy']['visible'] = ![], this['main']['box_2_btn_get']['on'](Laya['Event']['CLICK'], this, function () {
      if (b1ug9v['rolePriceData']['is_vip'] == 0x0) {
        fvbmt['msg']('请先获取vip资格');return;
      }b1ug9v['main']['box_2_lab_wx']['text'] = b1ug9v['tool']['data']['vip_wx'], b1ug9v['main']['box_2_btn_copy']['visible'] = !![];
    }), this['main']['box_2_btn_copy']['on'](Laya['Event']['CLICK'], this, function () {
      b1ug9v['copyText'](b1ug9v['tool']['data']['vip_wx']);
    }), this['main']['box_2_addclick']['on'](Laya['Event']['CLICK'], this, function () {
      if (b1ug9v['rolePriceData']['is_vip'] == 0x0) return;b1ug9v['main']['box_help']['visible'] = !![];
    }), this['main']['box_help_close']['on'](Laya['Event']['CLICK'], this, function () {
      b1ug9v['main']['box_help']['visible'] = ![];
    }), this['main']['box_help_bg']['skin'] = this['tool']['data']['vip_customer_service_not_add'], this['main']['box_help_qrcode']['skin'] = this['tool']['data']['vip_qrcode'], this['main']['box_help_qrcode']['scaleX'] = 0xa0 / this['main']['box_help_qrcode']['width'], this['main']['box_help_qrcode']['scaleY'] = 0xa0 / this['main']['box_help_qrcode']['width'], this['main']['box_3_panel']['vScrollBar']['visible'] = ![], this['main']['box_3_panel']['vScrollBarSkin'] = 'common_atlas/scrollBar.png';
  }, q5k0th['prototype']['initIcon'] = function () {
    this['icon'] = new Laya['Image'](), this['icon']['skin'] = this['tool']['data']['basics_image_url'], this['icon']['x'] = 0x0, this['icon']['y'] = 0xc8, this['icon']['width'] = 0x66, this['icon']['height'] = 0x6f, this['main']['addChild'](this['icon']), this['icon']['on'](Laya['Event']['MOUSE_DOWN'], this, this['iconPress']), this['icon']['on'](Laya['Event']['MOUSE_UP'], this, this['iconUp']), this['icon']['on'](Laya['Event']['MOUSE_WHEEL'], this, this['iconMove']), this['dragRect'] = new Laya['Rectangle'](-this['icon']['width'] / 0x2, 0x0, Laya['stage']['width'], Laya['stage']['height'] - this['icon']['height'] / 0x2);
  }, q5k0th['prototype']['initEvent'] = function () {
    var nwdsxe = this;this['main']['btn_1']['on'](Laya['Event']['CLICK'], this, function () {
      if (nwdsxe['page'] == 0x1) return;nwdsxe['page1']();
    }), this['main']['btn_2']['on'](Laya['Event']['CLICK'], this, function () {
      if (nwdsxe['page'] == 0x2) return;nwdsxe['page2']();
    }), this['main']['btn_3']['on'](Laya['Event']['CLICK'], this, function () {
      if (nwdsxe['page'] == 0x3) return;nwdsxe['page3']();
    }), this['main']['btn_close']['on'](Laya['Event']['CLICK'], this, function () {
      nwdsxe['main']['bg']['x'] = -0x2ee, nwdsxe['icon']['visible'] = !![];
    });
  }, q5k0th['prototype']['initBoard'] = function () {
    this['isInitBoard'] = !![], this['page1']();
  }, q5k0th['prototype']['showBoard'] = function () {
    this['main']['bg']['x'] = 0x0, this['icon']['visible'] = ![], this['tool']['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=sidebarApiRoleId&role_id=' + fsjcd['sygame']['role_id'] + '&channel=' + fsjcd['sygame']['channel'], this['rolePriceHandler']['bind'](this), this['roleError']['bind'](this));
  }, q5k0th['prototype']['page1'] = function () {
    this['page'] = 0x1, this['main']['bg']['skin'] = this['tool']['data']['public_code'], this['main']['box_1_show']['visible'] = !![], this['main']['box_2_show']['visible'] = ![], this['main']['box_3_show']['visible'] = ![];
  }, q5k0th['prototype']['page2'] = function () {
    this['page'] = 0x2, this['main']['bg']['skin'] = this['tool']['data']['vip_customer_service'], this['main']['box_1_show']['visible'] = ![], this['main']['box_2_show']['visible'] = !![], this['main']['box_3_show']['visible'] = ![];
  }, q5k0th['prototype']['page3'] = function () {
    this['page'] = 0x3, this['main']['bg']['skin'] = this['tool']['data']['game_center_image_url'], this['main']['box_1_show']['visible'] = ![], this['main']['box_2_show']['visible'] = ![], this['main']['box_3_show']['visible'] = !![], this['sendBox'] || this['getBoxList'](0x0), this['sendBox'] = !![], fodswcj && fodswcj['syClickOpenBox']();
  }, q5k0th['prototype']['getBoxList'] = function (k2_64) {
    var $37zr8 = this;fodswcj && fodswcj['syGetBoxList']({ 'page': k2_64, 'count': 0xc })['then'](function (eswdxn) {
      var xnwsz = eswdxn['data'];xnwsz['status'] == 0x3e9 ? xnwsz['data'] && xnwsz['data']['length'] && ($37zr8['boxlist'] = $37zr8['boxlist']['concat'](xnwsz['data']), k2_64++, $37zr8['getBoxList'](k2_64)) : $37zr8['boxListHandler']();
    });
  }, q5k0th['prototype']['copyText'] = function (owsdcj) {
    try {
      wx['setClipboardData']({ 'data': owsdcj, 'success': function ($r3z) {
          console['log']('复制成功:', $r3z);
        } });
    } catch (kqt0) {}
  }, q5k0th['prototype']['rolePriceHandler'] = function (buim) {
    this['rolePriceData'] = JSON['parse'](buim);switch (this['rolePriceData']['status']) {case 0x3e9:
        this['main']['box_2_lab_v_1']['text'] = (this['rolePriceData']['todayPrice'] || 0x0) + '/' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_v_2']['text'] = (this['rolePriceData']['allPrice'] || 0x0) + '/' + +this['tool']['data']['y'] + '元';break;case 0x3ea:
        break;case 0x3eb:
        break;}
  }, q5k0th['prototype']['roleError'] = function () {}, q5k0th['prototype']['boxListHandler'] = function () {
    var vftm = function (im0fht) {
      var fm0htq = y7ap$3['boxlist'][im0fht],
          djnwcs = new fjwndc['demoui']['BoxItemUI']();djnwcs['icon']['skin'] = fm0htq['icon'], djnwcs['title']['text'] = fm0htq['title'], djnwcs['x'] = 0xa0 * (im0fht % 0x3), djnwcs['y'] = 0xa0 * (im0fht / 0x3 ^ 0x0), y7ap$3['main']['box_3_panel']['addChild'](djnwcs);var k_05hq = { 'appid': fsjcd['sygame']['appid'], 'game_id': fm0htq['game_id'], 'jump_appid': fm0htq['jump_appid'], 'jump_path': fm0htq['jump_path'], 'tunnel_id': fm0htq['tunnel_id'], 'uv': 0x0, 'wecha_id': fsjcd['sygame']['openid'] },
          tm0qfh = fm0htq['preview_img'],
          imubv1 = fm0htq['jump_type'],
          bmhf = fm0htq['kf_session'];djnwcs['on'](Laya['Event']['CLICK'], y7ap$3, function () {
        fodswcj && fodswcj['syClickBox']({ 'game_id': fm0htq['game_id'], 'tunnel_id': fm0htq['tunnel_id'], 'jump_appid': fm0htq['jump_appid'], 'jump_path': fm0htq['jump_path'] })['then'](function (k2q4_) {
          if (imubv1 === '0') wx['navigateToMiniProgram']({ 'appId': k_05hq['jump_appid'], 'path': k_05hq['jump_path'], 'fail': function (r78xze) {
              if (!tm0qfh) return;wx['previewImage']({ 'urls': [tm0qfh] });
            } });else {
            if (imubv1 === '1') {
              if (!tm0qfh) return;wx['previewImage']({ 'urls': [tm0qfh] });
            } else {
              if (imubv1 === '2') {
                if (!bmhf) return;wx['openCustomerServiceConversation']({ 'sessionFrom': bmhf, 'showMessageCard': !![], 'sendMessageTitle': '', 'sendMessagePath': '', 'sendMessageImg': '' });
              }
            }
          }
        });
      });
    },
        y7ap$3 = this;for (var mf0q = 0x0; mf0q < this['boxlist']['length']; mf0q++) {
      vftm(mf0q);
    }
  }, q5k0th['prototype']['boxListError'] = function () {}, q5k0th['prototype']['boxClickHandler'] = function () {}, q5k0th['prototype']['iconPress'] = function (jcwdso) {
    this['donwX'] = jcwdso['target']['x'], this['donwY'] = jcwdso['target']['y'], this['icon']['startDrag'](this['dragRect']), this['isMove'] = ![], this['isPress'] = !![];
  }, q5k0th['prototype']['iconMove'] = function (cosjd) {
    this['isMove'] = !![];
  }, q5k0th['prototype']['iconUp'] = function (v9b1u) {
    var zen8rx = v9b1u['target']['x'],
        fib = v9b1u['target']['y'];this['icon']['stopDrag'](), zen8rx == this['donwX'] && this['donwY'] == fib && (this['isInitBoard'] || this['initBoard'](), this['showBoard']()), this['isMove'] = ![], this['isPress'] = ![];
  }, q5k0th;
}(),
    fjwndc;(function (wex8nz) {
  var f05htq;(function (mfhi0t) {
    var i1uvb9 = function (himt0) {
      fhmft0(h5k_, himt0);function h5k_() {
        return himt0['call'](this) || this;
      }return h5k_['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), himt0['prototype']['createChildren']['call'](this), this['createView'](wex8nz['demoui']['BoxItemUI']['uiView']);
      }, h5k_['uiView'] = { 'type': 'View', 'props': { 'width': 0xb4, 'height': 0xa0 }, 'child': [{ 'type': 'Image', 'props': { 'y': 0x3, 'x': 0x20, 'width': 0x73, 'var': 'icon', 'height': 0x73 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x79, 'x': -0x21, 'width': 0xb4, 'var': 'title', 'valign': 'middle', 'height': 0x22, 'fontSize': 0x16, 'color': '#441d1c', 'align': 'center' } }] }] }, h5k_;
    }(laya['ui']['View']);mfhi0t['BoxItemUI'] = i1uvb9;
  })(f05htq = wex8nz['demoui'] || (wex8nz['demoui'] = {}));
})(fjwndc || (fjwndc = {})), function (qt5k) {
  var bvimtf;(function (z78$3r) {
    var h5qk = function (b19ug) {
      fhmft0(tqhk5, b19ug);function tqhk5() {
        return b19ug['call'](this) || this;
      }return tqhk5['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), b19ug['prototype']['createChildren']['call'](this), this['createView'](qt5k['demoui']['MainUI']['uiView']);
      }, tqhk5['uiView'] = { 'type': 'View', 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x2ee, 'top': 0x0, 'right': 0x0, 'left': 0x0, 'height': 0x536, 'bottom': 0x0 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x2ee, 'height': 0x536, 'centerY': 0x0 }, 'child': [{ 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x2ee, 'var': 'bg', 'height': 0x536 }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x2ee, 'visible': ![], 'var': 'box_1_show', 'height': 0x536, 'centerY': 0x0 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x253, 'x': 0x2e, 'width': 0x1d0, 'var': 'box_1_lab_info', 'leading': 0xa, 'height': 0x97, 'fontSize': 0x18, 'color': '#a959ee' } }, { 'type': 'HBox', 'props': { 'y': 0x2ee, 'x': 0x14, 'width': 0x1fe, 'space': 0x35, 'height': 0x78, 'align': 'top' }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x58, 'var': 'box_1_img_1', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_1', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0xa, 'x': 0xa, 'width': 0x58, 'var': 'box_1_img_2', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_2', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x14, 'x': 0x14, 'width': 0x58, 'var': 'box_1_img_3', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_3', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x1e, 'x': 0x1e, 'width': 0x58, 'var': 'box_1_img_4', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_4', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }] }] }, { 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'visible': ![], 'var': 'box_2_show' }, 'child': [{ 'type': 'HBox', 'props': { 'y': 0x220, 'x': 0x18, 'width': 0x1f4, 'space': 0x2c, 'height': 0x56, 'align': 'top' }, 'child': [{ 'type': 'Image', 'props': { 'y': 2.5, 'x': 0x0, 'width': 0x58, 'var': 'box_2_img_1', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_1', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0xc, 'x': 0xa, 'width': 0x58, 'var': 'box_2_img_2', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_2', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x16, 'x': 0x14, 'width': 0x58, 'var': 'box_2_img_3', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_3', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x20, 'x': 0x1e, 'width': 0x58, 'var': 'box_2_img_4', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_4', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x2a, 'x': 0x28, 'width': 0x58, 'var': 'box_2_img_5', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_5', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }] }, { 'type': 'Box', 'props': { 'y': 0x384, 'x': 0x0, 'width': 0x221, 'height': 0x44 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x0, 'x': 0x28, 'width': 0x122, 'var': 'box_2_lab_m_1', 'text': '方法一\uFF1A单日充值1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300' } }, { 'type': 'Text', 'props': { 'y': 0x1e, 'x': 0x28, 'width': 0x122, 'var': 'box_2_lab_m_2', 'text': '方法一\uFF1A历史累计充值1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300' } }, { 'type': 'Text', 'props': { 'y': 0x0, 'x': 0x141, 'width': 0xa4, 'var': 'box_2_lab_v_1', 'text': '1000/1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300', 'align': 'right' } }, { 'type': 'Text', 'props': { 'y': 0x1e, 'x': 0x141, 'width': 0xa4, 'var': 'box_2_lab_v_2', 'text': '1000/1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300', 'align': 'right' } }] }, { 'type': 'Image', 'props': { 'y': 0x1aa, 'x': 0x159, 'width': 0x66, 'var': 'box_2_btn_get', 'stateNum': 0x1, 'height': 0x26 } }, { 'type': 'Image', 'props': { 'y': 0x1aa, 'x': 0x159, 'width': 0x66, 'var': 'box_2_btn_copy', 'stateNum': 0x1, 'height': 0x26 } }, { 'type': 'Button', 'props': { 'y': 0x1d2, 'x': 0x126, 'width': 0xc9, 'var': 'box_2_addclick', 'stateNum': 0x1, 'height': 0x1b } }, { 'type': 'Text', 'props': { 'y': 0x13c, 'x': 0x17a, 'width': 0xa3, 'var': 'box_2_lab_wx', 'height': 0x1f, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'left' } }] }, { 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'visible': ![], 'var': 'box_3_show' }, 'child': [{ 'type': 'Panel', 'props': { 'y': 0xf5, 'x': 0x10, 'width': 0x201, 'var': 'box_3_panel', 'vScrollBarSkin': '', 'height': 0x29e } }] }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0x0, 'width': 0xbb, 'var': 'btn_1', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0xba, 'width': 0xbb, 'var': 'btn_2', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0x177, 'width': 0xbb, 'var': 'btn_3', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x203, 'x': 0x22e, 'width': 0x25, 'var': 'btn_close', 'height': 0x8f } }, { 'type': 'Box', 'props': { 'width': 0x2ee, 'visible': ![], 'var': 'box_help', 'height': 0x536 }, 'child': [{ 'type': 'Sprite', 'props': { 'y': 0x0, 'x': 0x0, 'mouseThrough': ![], 'alpha': 0.7 }, 'child': [{ 'type': 'Rect', 'props': { 'width': 0x2ee, 'lineWidth': 0x1, 'height': 0x536, 'fillColor': '#000000' } }] }, { 'type': 'Image', 'props': { 'y': 0x158, 'x': 0x28, 'width': 0x1d2, 'var': 'box_help_bg', 'height': 0x203 }, 'child': [{ 'type': 'Button', 'props': { 'y': -0x1, 'x': 0x1a0, 'width': 0x33, 'var': 'box_help_close', 'height': 0x28 } }, { 'type': 'Image', 'props': { 'y': 0x3f, 'x': 0x98, 'width': 0xa0, 'var': 'box_help_qrcode', 'height': 0xa0 } }] }] }] }] }] }, tqhk5;
    }(laya['ui']['View']);z78$3r['MainUI'] = h5qk;
  })(bvimtf = qt5k['demoui'] || (qt5k['demoui'] = {}));
}(fjwndc || (fjwndc = {})), function (nscd) {
  var umivb1;(function (z8$r3) {
    var sdcojw = function (oj46c2) {
      fhmft0(q0fmth, oj46c2);function q0fmth() {
        return oj46c2['call'](this) || this;
      }return q0fmth['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), oj46c2['prototype']['createChildren']['call'](this), this['createView'](nscd['demoui']['ToastUI']['uiView']);
      }, q0fmth['uiView'] = { 'type': 'View', 'props': { 'width': 0x2ee, 'height': 0x536 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x12c, 'height': 0x32, 'centerY': 0x0, 'centerX': 0x0 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x12c, 'height': 0x32, 'centerX': 0x0, 'alpha': 0.5 }, 'child': [{ 'type': 'Rect', 'props': { 'width': 0x12c, 'lineWidth': 0x1, 'height': 0x32, 'fillColor': '#382f2f' } }] }, { 'type': 'Text', 'props': { 'width': 0x12c, 'var': 'lab_msg', 'valign': 'middle', 'text': 'text', 'height': 0x32, 'fontSize': 0x18, 'color': '#ffffff', 'align': 'center' } }] }] }, q0fmth;
    }(laya['ui']['View']);z8$r3['ToastUI'] = sdcojw;
  })(umivb1 = nscd['demoui'] || (nscd['demoui'] = {}));
}(fjwndc || (fjwndc = {}));var fvbmt = function () {
  function x7rz() {}return x7rz['init'] = function () {
    !this['ui'] && (this['ui'] = new fjwndc['demoui']['ToastUI'](), this['ui']['visible'] = ![], Laya['stage']['addChild'](this['ui']));
  }, x7rz['msg'] = function (hf0q) {
    var i0htmf = this;!this['ui'] && x7rz['init'](), this['ui']['visible'] = !![], this['ui']['lab_msg']['text'] = hf0q, clearTimeout(this['interval']), this['interval'] = setTimeout(function () {
      i0htmf['ui']['visible'] = ![];
    }, 0x7d0);
  }, x7rz;
}();window['minitool'] = fvibu91;