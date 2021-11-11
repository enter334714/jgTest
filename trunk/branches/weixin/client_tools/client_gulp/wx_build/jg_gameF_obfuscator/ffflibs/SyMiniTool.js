var k = wx.$f;
var ferz7 = this && this['__extends'] || function () {
  var c642j = function (mhtbfi, enr8zx) {
    return c642j = Object['setPrototypeOf'] || { '__proto__': [] } instanceof Array && function (q40_, y37r$) {
      q40_['__proto__'] = y37r$;
    } || function (qft0h5, bfmhit) {
      for (var tihf in bfmhit) if (bfmhit['hasOwnProperty'](tihf)) qft0h5[tihf] = bfmhit[tihf];
    }, c642j(mhtbfi, enr8zx);
  };return function (cjndws, hk0q) {
    c642j(cjndws, hk0q);function cdswoj() {
      this['constructor'] = cjndws;
    }cjndws['prototype'] = hk0q === null ? Object['create'](hk0q) : (cdswoj['prototype'] = hk0q['prototype'], new cdswoj());
  };
}(),
    ftq0kh = window['Sygame'],
    far73 = ![],
    foc_6 = function () {
  function t0h5fq() {}return t0h5fq['init'] = function () {
    far73 ? this['sygame'] = { 'channel': '3477d2273abd484ba2a0e04ad4971b3c', 'role_id': undefined, 'openid': 'oxmOf5biumkGash-Xht9FVAlswVk', 'appid': 'wx2936121c4817bf46' } : this['sygame'] = ftq0kh;
  }, t0h5fq['getTimeStamp'] = function () {
    return new Date()['getTime']();
  }, t0h5fq['setResMap'] = function (zsxwn, swdcj) {
    this['resMap'][zsxwn] = zsxwn + '?' + swdcj;
  }, t0h5fq['getResMap'] = function (qf0) {
    return this['resMap'][qf0];
  }, t0h5fq['resMap'] = {}, t0h5fq;
}(),
    fivtbmf = function () {
  function viu9b1() {
    this['getIcon'] = 'https://wx.11babay.cn/uploads/f/fkccc1532944783/5/2/c/7/60dc442c4fbc5.png', this['copyIcon'] = 'https://wx.11babay.cn/uploads/f/fkccc1532944783/3/0/1/7/60dc4409dce39.png', foc_6['init'](), this['postSidebarApi']();
  }return viu9b1['prototype']['send'] = function (cd2j, f5q0, co24_6, ubfvim, b1u9) {
    ubfvim === void 0x0 && (ubfvim = 'get');b1u9 === void 0x0 && (b1u9 = '' || null);var vfuimb = new Laya['HttpRequest']();vfuimb['http']['timeout'] = 0x2710, vfuimb['once'](Laya['Event']['COMPLETE'], this, f5q0), vfuimb['once'](Laya['Event']['ERROR'], this, co24_6), vfuimb['send'](cd2j, b1u9, ubfvim, 'text');
  }, viu9b1['prototype']['postSidebarApi'] = function () {
    this['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=sidebarApi&channel=' + foc_6['sygame']['channel'], this['completeHandler'], this['errorHandler']);
  }, viu9b1['prototype']['completeHandler'] = function (eznw) {
    var _kq2 = JSON['parse'](eznw);console['log'](_kq2);switch (_kq2['status']) {case 0x3e9:
        var ivbmu = [];_kq2['msg']['basics_image_url'] && ivbmu['push']({ 'url': _kq2['msg']['basics_image_url'], 'type': Laya['Loader']['IMAGE'] }), _kq2['msg']['public_code'] && ivbmu['push']({ 'url': _kq2['msg']['public_code'], 'type': Laya['Loader']['IMAGE'] }), _kq2['msg']['vip_customer_service'] && ivbmu['push']({ 'url': _kq2['msg']['vip_customer_service'], 'type': Laya['Loader']['IMAGE'] }), _kq2['msg']['vip_customer_service_not_add'] && ivbmu['push']({ 'url': _kq2['msg']['vip_customer_service_not_add'], 'type': Laya['Loader']['IMAGE'] }), _kq2['msg']['game_center_image_url'] && ivbmu['push']({ 'url': _kq2['msg']['game_center_image_url'], 'type': Laya['Loader']['IMAGE'] }), _kq2['msg']['vip_qrcode'] && ivbmu['push']({ 'url': _kq2['msg']['vip_qrcode'], 'type': Laya['Loader']['IMAGE'] }), _kq2['msg']['getIcon'] && ivbmu['push']({ 'url': this['getIcon'], 'type': Laya['Loader']['IMAGE'] }), _kq2['msg']['copyIcon'] && ivbmu['push']({ 'url': this['copyIcon'], 'type': Laya['Loader']['IMAGE'] });for (var z7r$3 = 0x0, btmi = _kq2['msg']['follow_gift_list']; z7r$3 < btmi['length']; z7r$3++) {
          var tvimbf = btmi[z7r$3];ivbmu['push']({ 'url': tvimbf['url'], 'type': Laya['Loader']['IMAGE'] });
        }for (var c6 = 0x0, cwndjs = _kq2['msg']['vip_box_list']; c6 < cwndjs['length']; c6++) {
          var tvimbf = cwndjs[c6];ivbmu['push']({ 'url': tvimbf['url'], 'type': Laya['Loader']['IMAGE'] });
        }for (var xzwn8e = 0x0; xzwn8e < ivbmu['length']; xzwn8e++) {
          foc_6['setResMap'](ivbmu[xzwn8e]['url'], foc_6['getTimeStamp']()), ivbmu[xzwn8e]['url'] = foc_6['getResMap'](ivbmu[xzwn8e]['url']);
        }Laya['loader']['load'](ivbmu, Laya['Handler']['create'](this, this['initGame'])), this['data'] = _kq2['msg'];break;case 0x3ea:
        fnwcdj['msg']('空的游戏channel');break;case 0x3eb:
        fnwcdj['msg']('错误的游戏channel');break;case 0x3ec:
        fnwcdj['msg']('未找到对应游戏大类');break;case 0x3ed:
        fnwcdj['msg']('未设置侧边栏');break;}
  }, viu9b1['prototype']['errorHandler'] = function (qk524) {}, viu9b1['prototype']['initGame'] = function () {
    var njwsc = new fm1uvbi(this);njwsc['show']();
  }, viu9b1;
}(),
    fm1uvbi = function () {
  function ze7r8x(o64k) {
    this['page'] = 0x3, this['rolePriceData'] = {}, this['boxlist'] = [], this['donwX'] = 0x0, this['downY'] = 0x0, this['tool'] = o64k;
  }return ze7r8x['prototype']['setChildMouseThroughs'] = function (sdowjc) {
    var sdwne = sdowjc['_childs'] || [];for (var wsnxe = 0x0; wsnxe < sdwne['length']; wsnxe++) {
      sdwne[wsnxe] && (sdwne[wsnxe]['mouseThrough'] = !![]);
    }
  }, ze7r8x['prototype']['show'] = function () {
    if (this['tool']['data']['on'] === '1') {
      this['main'] = new feswdnx['demoui']['MainUI'](), Laya['stage']['addChild'](this['main']), this['main']['mouseThrough'] = !![];var sxzwe = this['main']['_childs'] || [];for (var ib = 0x0; ib < sxzwe['length']; ib++) {
        sxzwe[ib]['mouseThrough'] = !![];
      }this['setChildMouseThroughs'](this['main']['_childs']), this['setChildMouseThroughs'](this['main']['_childs'][0x0]), this['initIcon'](), this['initEvent'](), this['initView'](), fnwcdj['init']();
    }
  }, ze7r8x['prototype']['initView'] = function () {
    var z738$r = this,
        j6ds = this['tool']['data']['follow_down_words']['replace'](/\\n/g, '\x0a');this['main']['box_1_lab_info']['text'] = j6ds;for (var xewn8z = 0x1; xewn8z <= this['tool']['data']['follow_gift_list']['length']; xewn8z++) {
      var _o24c6 = this['tool']['data']['follow_gift_list'][xewn8z - 0x1];this['main']['box_1_img_' + xewn8z]['skin'] = _o24c6['url'], this['main']['box_1_lab_' + xewn8z]['text'] = _o24c6['name'];
    }for (var xewn8z = 0x1; xewn8z <= this['tool']['data']['vip_box_list']['length']; xewn8z++) {
      var _o24c6 = this['tool']['data']['vip_box_list'][xewn8z - 0x1];this['main']['box_2_img_' + xewn8z]['skin'] = _o24c6['url'], this['main']['box_2_lab_' + xewn8z]['text'] = _o24c6['name'];
    }this['main']['box_2_lab_m_1']['text'] = '方法一：单日充值' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_m_2']['text'] = '方法二：历史累计充值' + +this['tool']['data']['y'] + '元', this['main']['box_2_lab_v_1']['text'] = (this['rolePriceData']['todayPrice'] || 0x0) + '/' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_v_2']['text'] = (this['rolePriceData']['allPrice'] || 0x0) + '/' + +this['tool']['data']['y'] + '元', this['main']['box_2_btn_copy']['skin'] = this['tool']['copyIcon'], this['main']['box_2_btn_get']['skin'] = this['tool']['getIcon'], this['main']['box_2_btn_copy']['visible'] = ![], this['main']['box_2_btn_get']['on'](Laya['Event']['CLICK'], this, function () {
      if (z738$r['rolePriceData']['is_vip'] == 0x0) {
        fnwcdj['msg']('请先获取vip资格');return;
      }z738$r['main']['box_2_lab_wx']['text'] = z738$r['tool']['data']['vip_wx'], z738$r['main']['box_2_btn_copy']['visible'] = !![];
    }), this['main']['box_2_btn_copy']['on'](Laya['Event']['CLICK'], this, function () {
      z738$r['copyText'](z738$r['tool']['data']['vip_wx']);
    }), this['main']['box_2_addclick']['on'](Laya['Event']['CLICK'], this, function () {
      if (z738$r['rolePriceData']['is_vip'] == 0x0) return;z738$r['main']['box_help']['visible'] = !![];
    }), this['main']['box_help_close']['on'](Laya['Event']['CLICK'], this, function () {
      z738$r['main']['box_help']['visible'] = ![];
    }), this['main']['box_help_bg']['skin'] = this['tool']['data']['vip_customer_service_not_add'], this['main']['box_help_qrcode']['skin'] = this['tool']['data']['vip_qrcode'], this['main']['box_help_qrcode']['scaleX'] = 0xa0 / this['main']['box_help_qrcode']['width'], this['main']['box_help_qrcode']['scaleY'] = 0xa0 / this['main']['box_help_qrcode']['width'], this['main']['box_3_panel']['vScrollBar']['visible'] = ![], this['main']['box_3_panel']['vScrollBarSkin'] = 'common_atlas/scrollBar.png';
  }, ze7r8x['prototype']['initIcon'] = function () {
    this['icon'] = new Laya['Image'](), this['icon']['skin'] = this['tool']['data']['basics_image_url'], this['icon']['x'] = 0x0, this['icon']['y'] = 0xc8, this['icon']['width'] = 0x66, this['icon']['height'] = 0x6f, this['main']['addChild'](this['icon']), this['icon']['on'](Laya['Event']['MOUSE_DOWN'], this, this['iconPress']), this['icon']['on'](Laya['Event']['MOUSE_UP'], this, this['iconUp']), this['icon']['on'](Laya['Event']['MOUSE_WHEEL'], this, this['iconMove']), this['dragRect'] = new Laya['Rectangle'](-this['icon']['width'] / 0x2, 0x0, Laya['stage']['width'], Laya['stage']['height'] - this['icon']['height'] / 0x2);
  }, ze7r8x['prototype']['initEvent'] = function () {
    var ifhtmb = this;this['main']['btn_1']['on'](Laya['Event']['CLICK'], this, function () {
      if (ifhtmb['page'] == 0x1) return;ifhtmb['page1']();
    }), this['main']['btn_2']['on'](Laya['Event']['CLICK'], this, function () {
      if (ifhtmb['page'] == 0x2) return;ifhtmb['page2']();
    }), this['main']['btn_3']['on'](Laya['Event']['CLICK'], this, function () {
      if (ifhtmb['page'] == 0x3) return;ifhtmb['page3']();
    }), this['main']['btn_close']['on'](Laya['Event']['CLICK'], this, function () {
      ifhtmb['main']['bg']['x'] = -0x2ee, ifhtmb['icon']['visible'] = !![];
    });
  }, ze7r8x['prototype']['initBoard'] = function () {
    this['isInitBoard'] = !![], this['page1']();
  }, ze7r8x['prototype']['showBoard'] = function () {
    this['main']['bg']['x'] = 0x0, this['icon']['visible'] = ![], this['tool']['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=sidebarApiRoleId&role_id=' + foc_6['sygame']['role_id'] + '&channel=' + foc_6['sygame']['channel'], this['rolePriceHandler']['bind'](this), this['roleError']['bind'](this));
  }, ze7r8x['prototype']['page1'] = function () {
    this['page'] = 0x1, this['main']['bg']['skin'] = this['tool']['data']['public_code'], this['main']['box_1_show']['visible'] = !![], this['main']['box_2_show']['visible'] = ![], this['main']['box_3_show']['visible'] = ![];
  }, ze7r8x['prototype']['page2'] = function () {
    this['page'] = 0x2, this['main']['bg']['skin'] = this['tool']['data']['vip_customer_service'], this['main']['box_1_show']['visible'] = ![], this['main']['box_2_show']['visible'] = !![], this['main']['box_3_show']['visible'] = ![];
  }, ze7r8x['prototype']['page3'] = function () {
    this['page'] = 0x3, this['main']['bg']['skin'] = this['tool']['data']['game_center_image_url'], this['main']['box_1_show']['visible'] = ![], this['main']['box_2_show']['visible'] = ![], this['main']['box_3_show']['visible'] = !![], this['sendBox'] || this['getBoxList'](0x0), this['sendBox'] = !![], ftq0kh && ftq0kh['syClickOpenBox']();
  }, ze7r8x['prototype']['getBoxList'] = function (wsdnex) {
    var ugbv1 = this;ftq0kh && ftq0kh['syGetBoxList']({ 'page': wsdnex, 'count': 0xc })['then'](function (ko) {
      var d6cosj = ko['data'];d6cosj['status'] == 0x3e9 ? d6cosj['data'] && d6cosj['data']['length'] && (ugbv1['boxlist'] = ugbv1['boxlist']['concat'](d6cosj['data']), wsdnex++, ugbv1['getBoxList'](wsdnex)) : ugbv1['boxListHandler']();
    });
  }, ze7r8x['prototype']['copyText'] = function (z8xnr) {
    try {
      wx['setClipboardData']({ 'data': z8xnr, 'success': function (sodj6) {
          console['log']('复制成功:', sodj6);
        } });
    } catch (mhftq0) {}
  }, ze7r8x['prototype']['rolePriceHandler'] = function (vb1g9u) {
    this['rolePriceData'] = JSON['parse'](vb1g9u);switch (this['rolePriceData']['status']) {case 0x3e9:
        this['main']['box_2_lab_v_1']['text'] = (this['rolePriceData']['todayPrice'] || 0x0) + '/' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_v_2']['text'] = (this['rolePriceData']['allPrice'] || 0x0) + '/' + +this['tool']['data']['y'] + '元';break;case 0x3ea:
        break;case 0x3eb:
        break;}
  }, ze7r8x['prototype']['roleError'] = function () {}, ze7r8x['prototype']['boxListHandler'] = function () {
    var o4j62 = function (hbfm) {
      var timbv = h_q0['boxlist'][hbfm],
          exnr8 = new feswdnx['demoui']['BoxItemUI']();exnr8['icon']['skin'] = timbv['icon'], exnr8['title']['text'] = timbv['title'], exnr8['x'] = 0xa0 * (hbfm % 0x3), exnr8['y'] = 0xa0 * (hbfm / 0x3 ^ 0x0), h_q0['main']['box_3_panel']['addChild'](exnr8);var z8nrex = { 'appid': foc_6['sygame']['appid'], 'game_id': timbv['game_id'], 'jump_appid': timbv['jump_appid'], 'jump_path': timbv['jump_path'], 'tunnel_id': timbv['tunnel_id'], 'uv': 0x0, 'wecha_id': foc_6['sygame']['openid'] },
          ubfvmi = timbv['preview_img'],
          nexrz8 = timbv['jump_type'],
          exnds = timbv['kf_session'];exnr8['on'](Laya['Event']['CLICK'], h_q0, function () {
        ftq0kh && ftq0kh['syClickBox']({ 'game_id': timbv['game_id'], 'tunnel_id': timbv['tunnel_id'], 'jump_appid': timbv['jump_appid'], 'jump_path': timbv['jump_path'] })['then'](function (cods) {
          if (nexrz8 === '0') wx['navigateToMiniProgram']({ 'appId': z8nrex['jump_appid'], 'path': z8nrex['jump_path'], 'fail': function (iumfb) {
              if (!ubfvmi) return;wx['previewImage']({ 'urls': [ubfvmi] });
            } });else {
            if (nexrz8 === '1') {
              if (!ubfvmi) return;wx['previewImage']({ 'urls': [ubfvmi] });
            } else {
              if (nexrz8 === '2') {
                if (!exnds) return;wx['openCustomerServiceConversation']({ 'sessionFrom': exnds, 'showMessageCard': !![], 'sendMessageTitle': '', 'sendMessagePath': '', 'sendMessageImg': '' });
              }
            }
          }
        });
      });
    },
        h_q0 = this;for (var dsncwj = 0x0; dsncwj < this['boxlist']['length']; dsncwj++) {
      o4j62(dsncwj);
    }
  }, ze7r8x['prototype']['boxListError'] = function () {}, ze7r8x['prototype']['boxClickHandler'] = function () {}, ze7r8x['prototype']['iconPress'] = function (qht5) {
    this['donwX'] = qht5['target']['x'], this['donwY'] = qht5['target']['y'], this['icon']['startDrag'](this['dragRect']), this['isMove'] = ![], this['isPress'] = !![];
  }, ze7r8x['prototype']['iconMove'] = function (doj2c6) {
    this['isMove'] = !![];
  }, ze7r8x['prototype']['iconUp'] = function (ibtm) {
    var u1ivb = ibtm['target']['x'],
        ojd6 = ibtm['target']['y'];this['icon']['stopDrag'](), u1ivb == this['donwX'] && this['donwY'] == ojd6 && (this['isInitBoard'] || this['initBoard'](), this['showBoard']()), this['isMove'] = ![], this['isPress'] = ![];
  }, ze7r8x;
}(),
    feswdnx;(function (a7py$) {
  var mtibv;(function (e$z8r7) {
    var e8zn = function (re$87) {
      ferz7(q5tfh0, re$87);function q5tfh0() {
        return re$87['call'](this) || this;
      }return q5tfh0['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), re$87['prototype']['createChildren']['call'](this), this['createView'](a7py$['demoui']['BoxItemUI']['uiView']);
      }, q5tfh0['uiView'] = { 'type': 'View', 'props': { 'width': 0xb4, 'height': 0xa0 }, 'child': [{ 'type': 'Image', 'props': { 'y': 0x3, 'x': 0x20, 'width': 0x73, 'var': 'icon', 'height': 0x73 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x79, 'x': -0x21, 'width': 0xb4, 'var': 'title', 'valign': 'middle', 'height': 0x22, 'fontSize': 0x16, 'color': '#441d1c', 'align': 'center' } }] }] }, q5tfh0;
    }(laya['ui']['View']);e$z8r7['BoxItemUI'] = e8zn;
  })(mtibv = a7py$['demoui'] || (a7py$['demoui'] = {}));
})(feswdnx || (feswdnx = {})), function (zx7er) {
  var _42co;(function (ifvmub) {
    var dexw = function (xnew) {
      ferz7(bvu9i, xnew);function bvu9i() {
        return xnew['call'](this) || this;
      }return bvu9i['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), xnew['prototype']['createChildren']['call'](this), this['createView'](zx7er['demoui']['MainUI']['uiView']);
      }, bvu9i['uiView'] = { 'type': 'View', 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x2ee, 'top': 0x0, 'right': 0x0, 'left': 0x0, 'height': 0x536, 'bottom': 0x0 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x2ee, 'height': 0x536, 'centerY': 0x0 }, 'child': [{ 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x2ee, 'var': 'bg', 'height': 0x536 }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x2ee, 'visible': ![], 'var': 'box_1_show', 'height': 0x536, 'centerY': 0x0 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x253, 'x': 0x2e, 'width': 0x1d0, 'var': 'box_1_lab_info', 'leading': 0xa, 'height': 0x97, 'fontSize': 0x18, 'color': '#a959ee' } }, { 'type': 'HBox', 'props': { 'y': 0x2ee, 'x': 0x14, 'width': 0x1fe, 'space': 0x35, 'height': 0x78, 'align': 'top' }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x58, 'var': 'box_1_img_1', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_1', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0xa, 'x': 0xa, 'width': 0x58, 'var': 'box_1_img_2', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_2', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x14, 'x': 0x14, 'width': 0x58, 'var': 'box_1_img_3', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_3', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x1e, 'x': 0x1e, 'width': 0x58, 'var': 'box_1_img_4', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_4', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }] }] }, { 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'visible': ![], 'var': 'box_2_show' }, 'child': [{ 'type': 'HBox', 'props': { 'y': 0x220, 'x': 0x18, 'width': 0x1f4, 'space': 0x2c, 'height': 0x56, 'align': 'top' }, 'child': [{ 'type': 'Image', 'props': { 'y': 2.5, 'x': 0x0, 'width': 0x58, 'var': 'box_2_img_1', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_1', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0xc, 'x': 0xa, 'width': 0x58, 'var': 'box_2_img_2', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_2', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x16, 'x': 0x14, 'width': 0x58, 'var': 'box_2_img_3', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_3', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x20, 'x': 0x1e, 'width': 0x58, 'var': 'box_2_img_4', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_4', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x2a, 'x': 0x28, 'width': 0x58, 'var': 'box_2_img_5', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_5', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }] }, { 'type': 'Box', 'props': { 'y': 0x384, 'x': 0x0, 'width': 0x221, 'height': 0x44 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x0, 'x': 0x28, 'width': 0x122, 'var': 'box_2_lab_m_1', 'text': '方法一\uFF1A单日充值1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300' } }, { 'type': 'Text', 'props': { 'y': 0x1e, 'x': 0x28, 'width': 0x122, 'var': 'box_2_lab_m_2', 'text': '方法一\uFF1A历史累计充值1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300' } }, { 'type': 'Text', 'props': { 'y': 0x0, 'x': 0x141, 'width': 0xa4, 'var': 'box_2_lab_v_1', 'text': '1000/1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300', 'align': 'right' } }, { 'type': 'Text', 'props': { 'y': 0x1e, 'x': 0x141, 'width': 0xa4, 'var': 'box_2_lab_v_2', 'text': '1000/1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300', 'align': 'right' } }] }, { 'type': 'Image', 'props': { 'y': 0x1aa, 'x': 0x159, 'width': 0x66, 'var': 'box_2_btn_get', 'stateNum': 0x1, 'height': 0x26 } }, { 'type': 'Image', 'props': { 'y': 0x1aa, 'x': 0x159, 'width': 0x66, 'var': 'box_2_btn_copy', 'stateNum': 0x1, 'height': 0x26 } }, { 'type': 'Button', 'props': { 'y': 0x1d2, 'x': 0x126, 'width': 0xc9, 'var': 'box_2_addclick', 'stateNum': 0x1, 'height': 0x1b } }, { 'type': 'Text', 'props': { 'y': 0x13c, 'x': 0x17a, 'width': 0xa3, 'var': 'box_2_lab_wx', 'height': 0x1f, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'left' } }] }, { 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'visible': ![], 'var': 'box_3_show' }, 'child': [{ 'type': 'Panel', 'props': { 'y': 0xf5, 'x': 0x10, 'width': 0x201, 'var': 'box_3_panel', 'vScrollBarSkin': '', 'height': 0x29e } }] }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0x0, 'width': 0xbb, 'var': 'btn_1', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0xba, 'width': 0xbb, 'var': 'btn_2', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0x177, 'width': 0xbb, 'var': 'btn_3', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x203, 'x': 0x22e, 'width': 0x25, 'var': 'btn_close', 'height': 0x8f } }, { 'type': 'Box', 'props': { 'width': 0x2ee, 'visible': ![], 'var': 'box_help', 'height': 0x536 }, 'child': [{ 'type': 'Sprite', 'props': { 'y': 0x0, 'x': 0x0, 'mouseThrough': ![], 'alpha': 0.7 }, 'child': [{ 'type': 'Rect', 'props': { 'width': 0x2ee, 'lineWidth': 0x1, 'height': 0x536, 'fillColor': '#000000' } }] }, { 'type': 'Image', 'props': { 'y': 0x158, 'x': 0x28, 'width': 0x1d2, 'var': 'box_help_bg', 'height': 0x203 }, 'child': [{ 'type': 'Button', 'props': { 'y': -0x1, 'x': 0x1a0, 'width': 0x33, 'var': 'box_help_close', 'height': 0x28 } }, { 'type': 'Image', 'props': { 'y': 0x3f, 'x': 0x98, 'width': 0xa0, 'var': 'box_help_qrcode', 'height': 0xa0 } }] }] }] }] }] }, bvu9i;
    }(laya['ui']['View']);ifvmub['MainUI'] = dexw;
  })(_42co = zx7er['demoui'] || (zx7er['demoui'] = {}));
}(feswdnx || (feswdnx = {})), function (fbti) {
  var xsnz;(function (hfqm) {
    var sjnx = function (miu1vb) {
      ferz7(htm0i, miu1vb);function htm0i() {
        return miu1vb['call'](this) || this;
      }return htm0i['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), miu1vb['prototype']['createChildren']['call'](this), this['createView'](fbti['demoui']['ToastUI']['uiView']);
      }, htm0i['uiView'] = { 'type': 'View', 'props': { 'width': 0x2ee, 'height': 0x536 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x12c, 'height': 0x32, 'centerY': 0x0, 'centerX': 0x0 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x12c, 'height': 0x32, 'centerX': 0x0, 'alpha': 0.5 }, 'child': [{ 'type': 'Rect', 'props': { 'width': 0x12c, 'lineWidth': 0x1, 'height': 0x32, 'fillColor': '#382f2f' } }] }, { 'type': 'Text', 'props': { 'width': 0x12c, 'var': 'lab_msg', 'valign': 'middle', 'text': 'text', 'height': 0x32, 'fontSize': 0x18, 'color': '#ffffff', 'align': 'center' } }] }] }, htm0i;
    }(laya['ui']['View']);hfqm['ToastUI'] = sjnx;
  })(xsnz = fbti['demoui'] || (fbti['demoui'] = {}));
}(feswdnx || (feswdnx = {}));var fnwcdj = function () {
  function $3ya7p() {}return $3ya7p['init'] = function () {
    !this['ui'] && (this['ui'] = new feswdnx['demoui']['ToastUI'](), this['ui']['visible'] = ![], Laya['stage']['addChild'](this['ui']));
  }, $3ya7p['msg'] = function (xjsdnw) {
    var o6j42 = this;!this['ui'] && $3ya7p['init'](), this['ui']['visible'] = !![], this['ui']['lab_msg']['text'] = xjsdnw, clearTimeout(this['interval']), this['interval'] = setTimeout(function () {
      o6j42['ui']['visible'] = ![];
    }, 0x7d0);
  }, $3ya7p;
}();window['minitool'] = fivtbmf;