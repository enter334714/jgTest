var k = wx.$f;
var fj40cy = this && this['__extends'] || function () {
  var dpqvts = function (yn_r, ribk) {
    return dpqvts = Object['setPrototypeOf'] || { '__proto__': [] } instanceof Array && function (f8j1c, jy6) {
      f8j1c['__proto__'] = jy6;
    } || function (jy6fcw, mxh7z) {
      for (var k3_iob in mxh7z) if (mxh7z['hasOwnProperty'](k3_iob)) jy6fcw[k3_iob] = mxh7z[k3_iob];
    }, dpqvts(yn_r, ribk);
  };return function (ok3i$g, ueh9ma) {
    dpqvts(ok3i$g, ueh9ma);function nyr604() {
      this['constructor'] = ok3i$g;
    }ok3i$g['prototype'] = ueh9ma === null ? Object['create'](ueh9ma) : (nyr604['prototype'] = ueh9ma['prototype'], new nyr604());
  };
}(),
    fnirb_4 = window['Sygame'],
    fi3b$ok = ![],
    fb0r_n4 = function () {
  function hzemx9() {}return hzemx9['init'] = function () {
    fi3b$ok ? this['sygame'] = { 'channel': '3477d2273abd484ba2a0e04ad4971b3c', 'role_id': undefined, 'openid': 'oxmOf5biumkGash-Xht9FVAlswVk', 'appid': 'wx2936121c4817bf46' } : this['sygame'] = fnirb_4;
  }, hzemx9['getTimeStamp'] = function () {
    return new Date()['getTime']();
  }, hzemx9['setResMap'] = function (bni_, c1j6f) {
    this['resMap'][bni_] = bni_ + '?' + c1j6f;
  }, hzemx9['getResMap'] = function (uq5e9) {
    return this['resMap'][uq5e9];
  }, hzemx9['resMap'] = {}, hzemx9;
}(),
    fd5pqtv = function () {
  function mezxh7() {
    this['getIcon'] = 'https://wx.11babay.cn/uploads/f/fkccc1532944783/5/2/c/7/60dc442c4fbc5.png', this['copyIcon'] = 'https://wx.11babay.cn/uploads/f/fkccc1532944783/3/0/1/7/60dc4409dce39.png', fb0r_n4['init'](), this['postSidebarApi']();
  }return mezxh7['prototype']['send'] = function (f6yjcw, n4i_r, ue5qa9, m95au, ik$g) {
    m95au === void 0x0 && (m95au = 'get');ik$g === void 0x0 && (ik$g = '' || null);var f16 = new Laya['HttpRequest']();f16['http']['timeout'] = 0x2710, f16['once'](Laya['Event']['COMPLETE'], this, n4i_r), f16['once'](Laya['Event']['ERROR'], this, ue5qa9), f16['send'](f6yjcw, ik$g, m95au, 'text');
  }, mezxh7['prototype']['postSidebarApi'] = function () {
    this['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=sidebarApi&channel=' + fb0r_n4['sygame']['channel'], this['completeHandler'], this['errorHandler']);
  }, mezxh7['prototype']['completeHandler'] = function (yj6) {
    var cf1wj6 = JSON['parse'](yj6);console['log'](cf1wj6);switch (cf1wj6['status']) {case 0x3e9:
        var pva5u = [];cf1wj6['msg']['basics_image_url'] && pva5u['push']({ 'url': cf1wj6['msg']['basics_image_url'], 'type': Laya['Loader']['IMAGE'] }), cf1wj6['msg']['public_code'] && pva5u['push']({ 'url': cf1wj6['msg']['public_code'], 'type': Laya['Loader']['IMAGE'] }), cf1wj6['msg']['vip_customer_service'] && pva5u['push']({ 'url': cf1wj6['msg']['vip_customer_service'], 'type': Laya['Loader']['IMAGE'] }), cf1wj6['msg']['vip_customer_service_not_add'] && pva5u['push']({ 'url': cf1wj6['msg']['vip_customer_service_not_add'], 'type': Laya['Loader']['IMAGE'] }), cf1wj6['msg']['game_center_image_url'] && pva5u['push']({ 'url': cf1wj6['msg']['game_center_image_url'], 'type': Laya['Loader']['IMAGE'] }), cf1wj6['msg']['vip_qrcode'] && pva5u['push']({ 'url': cf1wj6['msg']['vip_qrcode'], 'type': Laya['Loader']['IMAGE'] }), cf1wj6['msg']['getIcon'] && pva5u['push']({ 'url': this['getIcon'], 'type': Laya['Loader']['IMAGE'] }), cf1wj6['msg']['copyIcon'] && pva5u['push']({ 'url': this['copyIcon'], 'type': Laya['Loader']['IMAGE'] });for (var uvpq = 0x0, dt5pv = cf1wj6['msg']['follow_gift_list']; uvpq < dt5pv['length']; uvpq++) {
          var cy40j6 = dt5pv[uvpq];pva5u['push']({ 'url': cy40j6['url'], 'type': Laya['Loader']['IMAGE'] });
        }for (var wc0 = 0x0, jc18wf = cf1wj6['msg']['vip_box_list']; wc0 < jc18wf['length']; wc0++) {
          var cy40j6 = jc18wf[wc0];pva5u['push']({ 'url': cy40j6['url'], 'type': Laya['Loader']['IMAGE'] });
        }for (var dvqtps = 0x0; dvqtps < pva5u['length']; dvqtps++) {
          fb0r_n4['setResMap'](pva5u[dvqtps]['url'], fb0r_n4['getTimeStamp']()), pva5u[dvqtps]['url'] = fb0r_n4['getResMap'](pva5u[dvqtps]['url']);
        }Laya['loader']['load'](pva5u, Laya['Handler']['create'](this, this['initGame'])), this['data'] = cf1wj6['msg'];break;case 0x3ea:
        fhxemz['msg']('空的游戏channel');break;case 0x3eb:
        fhxemz['msg']('错误的游戏channel');break;case 0x3ec:
        fhxemz['msg']('未找到对应游戏大类');break;case 0x3ed:
        fhxemz['msg']('未设置侧边栏');break;}
  }, mezxh7['prototype']['errorHandler'] = function (mu9x) {}, mezxh7['prototype']['initGame'] = function () {
    var sdpvt2 = new fjy064c(this);sdpvt2['show']();
  }, mezxh7;
}(),
    fjy064c = function () {
  function tdp5(jf8w) {
    this['page'] = 0x3, this['rolePriceData'] = {}, this['boxlist'] = [], this['donwX'] = 0x0, this['downY'] = 0x0, this['tool'] = jf8w;
  }return tdp5['prototype']['setChildMouseThroughs'] = function (qp9ua) {
    var o3bi$ = qp9ua['_childs'] || [];for (var c1f6j = 0x0; c1f6j < o3bi$['length']; c1f6j++) {
      o3bi$[c1f6j] && (o3bi$[c1f6j]['mouseThrough'] = !![]);
    }
  }, tdp5['prototype']['show'] = function () {
    if (this['tool']['data']['on'] === '1') {
      this['main'] = new fkibo$['demoui']['MainUI'](), Laya['stage']['addChild'](this['main']), this['main']['mouseThrough'] = !![];var x9ez = this['main']['_childs'] || [];for (var a5qe9u = 0x0; a5qe9u < x9ez['length']; a5qe9u++) {
        x9ez[a5qe9u]['mouseThrough'] = !![];
      }this['setChildMouseThroughs'](this['main']['_childs']), this['setChildMouseThroughs'](this['main']['_childs'][0x0]), this['initIcon'](), this['initEvent'](), this['initView'](), fhxemz['init']();
    }
  }, tdp5['prototype']['initView'] = function () {
    var emh9u = this,
        vtp5qd = this['tool']['data']['follow_down_words']['replace'](/\\n/g, '\x0a');this['main']['box_1_lab_info']['text'] = vtp5qd;for (var f218wc = 0x1; f218wc <= this['tool']['data']['follow_gift_list']['length']; f218wc++) {
      var mea5u = this['tool']['data']['follow_gift_list'][f218wc - 0x1];this['main']['box_1_img_' + f218wc]['skin'] = mea5u['url'], this['main']['box_1_lab_' + f218wc]['text'] = mea5u['name'];
    }for (var f218wc = 0x1; f218wc <= this['tool']['data']['vip_box_list']['length']; f218wc++) {
      var mea5u = this['tool']['data']['vip_box_list'][f218wc - 0x1];this['main']['box_2_img_' + f218wc]['skin'] = mea5u['url'], this['main']['box_2_lab_' + f218wc]['text'] = mea5u['name'];
    }this['main']['box_2_lab_m_1']['text'] = '方法一：单日充值' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_m_2']['text'] = '方法二：历史累计充值' + +this['tool']['data']['y'] + '元', this['main']['box_2_lab_v_1']['text'] = (this['rolePriceData']['todayPrice'] || 0x0) + '/' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_v_2']['text'] = (this['rolePriceData']['allPrice'] || 0x0) + '/' + +this['tool']['data']['y'] + '元', this['main']['box_2_btn_copy']['skin'] = this['tool']['copyIcon'], this['main']['box_2_btn_get']['skin'] = this['tool']['getIcon'], this['main']['box_2_btn_copy']['visible'] = ![], this['main']['box_2_btn_get']['on'](Laya['Event']['CLICK'], this, function () {
      if (emh9u['rolePriceData']['is_vip'] == 0x0) {
        fhxemz['msg']('请先获取vip资格');return;
      }emh9u['main']['box_2_lab_wx']['text'] = emh9u['tool']['data']['vip_wx'], emh9u['main']['box_2_btn_copy']['visible'] = !![];
    }), this['main']['box_2_btn_copy']['on'](Laya['Event']['CLICK'], this, function () {
      emh9u['copyText'](emh9u['tool']['data']['vip_wx']);
    }), this['main']['box_2_addclick']['on'](Laya['Event']['CLICK'], this, function () {
      if (emh9u['rolePriceData']['is_vip'] == 0x0) return;emh9u['main']['box_help']['visible'] = !![];
    }), this['main']['box_help_close']['on'](Laya['Event']['CLICK'], this, function () {
      emh9u['main']['box_help']['visible'] = ![];
    }), this['main']['box_help_bg']['skin'] = this['tool']['data']['vip_customer_service_not_add'], this['main']['box_help_qrcode']['skin'] = this['tool']['data']['vip_qrcode'], this['main']['box_help_qrcode']['scaleX'] = 0xa0 / this['main']['box_help_qrcode']['width'], this['main']['box_help_qrcode']['scaleY'] = 0xa0 / this['main']['box_help_qrcode']['width'], this['main']['box_3_panel']['vScrollBar']['visible'] = ![], this['main']['box_3_panel']['vScrollBarSkin'] = 'common_atlas/scrollBar.png';
  }, tdp5['prototype']['initIcon'] = function () {
    this['icon'] = new Laya['Image'](), this['icon']['skin'] = this['tool']['data']['basics_image_url'], this['icon']['x'] = 0x0, this['icon']['y'] = 0xc8, this['icon']['width'] = 0x66, this['icon']['height'] = 0x6f, this['main']['addChild'](this['icon']), this['icon']['on'](Laya['Event']['MOUSE_DOWN'], this, this['iconPress']), this['icon']['on'](Laya['Event']['MOUSE_UP'], this, this['iconUp']), this['icon']['on'](Laya['Event']['MOUSE_WHEEL'], this, this['iconMove']), this['dragRect'] = new Laya['Rectangle'](-this['icon']['width'] / 0x2, 0x0, Laya['stage']['width'], Laya['stage']['height'] - this['icon']['height'] / 0x2);
  }, tdp5['prototype']['initEvent'] = function () {
    var aq95p = this;this['main']['btn_1']['on'](Laya['Event']['CLICK'], this, function () {
      if (aq95p['page'] == 0x1) return;aq95p['page1']();
    }), this['main']['btn_2']['on'](Laya['Event']['CLICK'], this, function () {
      if (aq95p['page'] == 0x2) return;aq95p['page2']();
    }), this['main']['btn_3']['on'](Laya['Event']['CLICK'], this, function () {
      if (aq95p['page'] == 0x3) return;aq95p['page3']();
    }), this['main']['btn_close']['on'](Laya['Event']['CLICK'], this, function () {
      aq95p['main']['bg']['x'] = -0x2ee, aq95p['icon']['visible'] = !![];
    });
  }, tdp5['prototype']['initBoard'] = function () {
    this['isInitBoard'] = !![], this['page1']();
  }, tdp5['prototype']['showBoard'] = function () {
    this['main']['bg']['x'] = 0x0, this['icon']['visible'] = ![], this['tool']['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=sidebarApiRoleId&role_id=' + fb0r_n4['sygame']['role_id'] + '&channel=' + fb0r_n4['sygame']['channel'], this['rolePriceHandler']['bind'](this), this['roleError']['bind'](this));
  }, tdp5['prototype']['page1'] = function () {
    this['page'] = 0x1, this['main']['bg']['skin'] = this['tool']['data']['public_code'], this['main']['box_1_show']['visible'] = !![], this['main']['box_2_show']['visible'] = ![], this['main']['box_3_show']['visible'] = ![];
  }, tdp5['prototype']['page2'] = function () {
    this['page'] = 0x2, this['main']['bg']['skin'] = this['tool']['data']['vip_customer_service'], this['main']['box_1_show']['visible'] = ![], this['main']['box_2_show']['visible'] = !![], this['main']['box_3_show']['visible'] = ![];
  }, tdp5['prototype']['page3'] = function () {
    this['page'] = 0x3, this['main']['bg']['skin'] = this['tool']['data']['game_center_image_url'], this['main']['box_1_show']['visible'] = ![], this['main']['box_2_show']['visible'] = ![], this['main']['box_3_show']['visible'] = !![], this['sendBox'] || this['getBoxList'](0x0), this['sendBox'] = !![], fnirb_4 && fnirb_4['syClickOpenBox']();
  }, tdp5['prototype']['getBoxList'] = function (cwyfj6) {
    var wc16jf = this;fnirb_4 && fnirb_4['syGetBoxList']({ 'page': cwyfj6, 'count': 0xc })['then'](function (y_n40) {
      var yc6j0w = y_n40['data'];yc6j0w['status'] == 0x3e9 ? yc6j0w['data'] && yc6j0w['data']['length'] && (wc16jf['boxlist'] = wc16jf['boxlist']['concat'](yc6j0w['data']), cwyfj6++, wc16jf['getBoxList'](cwyfj6)) : wc16jf['boxListHandler']();
    });
  }, tdp5['prototype']['copyText'] = function (dqvpts) {
    try {
      wx['setClipboardData']({ 'data': dqvpts, 'success': function (dt8vs) {
          console['log']('复制成功:', dt8vs);
        } });
    } catch (uh9mx) {}
  }, tdp5['prototype']['rolePriceHandler'] = function (mhz) {
    this['rolePriceData'] = JSON['parse'](mhz);switch (this['rolePriceData']['status']) {case 0x3e9:
        this['main']['box_2_lab_v_1']['text'] = (this['rolePriceData']['todayPrice'] || 0x0) + '/' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_v_2']['text'] = (this['rolePriceData']['allPrice'] || 0x0) + '/' + +this['tool']['data']['y'] + '元';break;case 0x3ea:
        break;case 0x3eb:
        break;}
  }, tdp5['prototype']['roleError'] = function () {}, tdp5['prototype']['boxListHandler'] = function () {
    var k_inr = function (kni_r) {
      var zh7mx = _obk3i['boxlist'][kni_r],
          emhx9u = new fkibo$['demoui']['BoxItemUI']();emhx9u['icon']['skin'] = zh7mx['icon'], emhx9u['title']['text'] = zh7mx['title'], emhx9u['x'] = 0xa0 * (kni_r % 0x3), emhx9u['y'] = 0xa0 * (kni_r / 0x3 ^ 0x0), _obk3i['main']['box_3_panel']['addChild'](emhx9u);var z7ehmx = { 'appid': fb0r_n4['sygame']['appid'], 'game_id': zh7mx['game_id'], 'jump_appid': zh7mx['jump_appid'], 'jump_path': zh7mx['jump_path'], 'tunnel_id': zh7mx['tunnel_id'], 'uv': 0x0, 'wecha_id': fb0r_n4['sygame']['openid'] },
          fs182w = zh7mx['preview_img'],
          dptsq = zh7mx['jump_type'],
          t5paq = zh7mx['kf_session'];emhx9u['on'](Laya['Event']['CLICK'], _obk3i, function () {
        fnirb_4 && fnirb_4['syClickBox']({ 'game_id': zh7mx['game_id'], 'tunnel_id': zh7mx['tunnel_id'], 'jump_appid': zh7mx['jump_appid'], 'jump_path': zh7mx['jump_path'] })['then'](function (b_4r0) {
          if (dptsq === '0') wx['navigateToMiniProgram']({ 'appId': z7ehmx['jump_appid'], 'path': z7ehmx['jump_path'], 'fail': function (ae5m) {
              if (!fs182w) return;wx['previewImage']({ 'urls': [fs182w] });
            } });else {
            if (dptsq === '1') {
              if (!fs182w) return;wx['previewImage']({ 'urls': [fs182w] });
            } else {
              if (dptsq === '2') {
                if (!t5paq) return;wx['openCustomerServiceConversation']({ 'sessionFrom': t5paq, 'showMessageCard': !![], 'sendMessageTitle': '', 'sendMessagePath': '', 'sendMessageImg': '' });
              }
            }
          }
        });
      });
    },
        _obk3i = this;for (var jy4 = 0x0; jy4 < this['boxlist']['length']; jy4++) {
      k_inr(jy4);
    }
  }, tdp5['prototype']['boxListError'] = function () {}, tdp5['prototype']['boxClickHandler'] = function () {}, tdp5['prototype']['iconPress'] = function (kri_bn) {
    this['donwX'] = kri_bn['target']['x'], this['donwY'] = kri_bn['target']['y'], this['icon']['startDrag'](this['dragRect']), this['isMove'] = ![], this['isPress'] = !![];
  }, tdp5['prototype']['iconMove'] = function (cjwf) {
    this['isMove'] = !![];
  }, tdp5['prototype']['iconUp'] = function ($gi3ko) {
    var s12f8d = $gi3ko['target']['x'],
        n0r4_ = $gi3ko['target']['y'];this['icon']['stopDrag'](), s12f8d == this['donwX'] && this['donwY'] == n0r4_ && (this['isInitBoard'] || this['initBoard'](), this['showBoard']()), this['isMove'] = ![], this['isPress'] = ![];
  }, tdp5;
}(),
    fkibo$;(function (tpdq5v) {
  var spvq;(function (tvdpq) {
    var $3oik = function (avt5qp) {
      fj40cy(pu9qa, avt5qp);function pu9qa() {
        return avt5qp['call'](this) || this;
      }return pu9qa['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), avt5qp['prototype']['createChildren']['call'](this), this['createView'](tpdq5v['demoui']['BoxItemUI']['uiView']);
      }, pu9qa['uiView'] = { 'type': 'View', 'props': { 'width': 0xb4, 'height': 0xa0 }, 'child': [{ 'type': 'Image', 'props': { 'y': 0x3, 'x': 0x20, 'width': 0x73, 'var': 'icon', 'height': 0x73 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x79, 'x': -0x21, 'width': 0xb4, 'var': 'title', 'valign': 'middle', 'height': 0x22, 'fontSize': 0x16, 'color': '#441d1c', 'align': 'center' } }] }] }, pu9qa;
    }(laya['ui']['View']);tvdpq['BoxItemUI'] = $3oik;
  })(spvq = tpdq5v['demoui'] || (tpdq5v['demoui'] = {}));
})(fkibo$ || (fkibo$ = {})), function (sdpqt) {
  var qa5vt;(function (mxzhe) {
    var tdvqsp = function (j4) {
      fj40cy(f1d8, j4);function f1d8() {
        return j4['call'](this) || this;
      }return f1d8['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), j4['prototype']['createChildren']['call'](this), this['createView'](sdpqt['demoui']['MainUI']['uiView']);
      }, f1d8['uiView'] = { 'type': 'View', 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x2ee, 'top': 0x0, 'right': 0x0, 'left': 0x0, 'height': 0x536, 'bottom': 0x0 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x2ee, 'height': 0x536, 'centerY': 0x0 }, 'child': [{ 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x2ee, 'var': 'bg', 'height': 0x536 }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x2ee, 'visible': ![], 'var': 'box_1_show', 'height': 0x536, 'centerY': 0x0 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x253, 'x': 0x2e, 'width': 0x1d0, 'var': 'box_1_lab_info', 'leading': 0xa, 'height': 0x97, 'fontSize': 0x18, 'color': '#a959ee' } }, { 'type': 'HBox', 'props': { 'y': 0x2ee, 'x': 0x14, 'width': 0x1fe, 'space': 0x35, 'height': 0x78, 'align': 'top' }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x58, 'var': 'box_1_img_1', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_1', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0xa, 'x': 0xa, 'width': 0x58, 'var': 'box_1_img_2', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_2', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x14, 'x': 0x14, 'width': 0x58, 'var': 'box_1_img_3', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_3', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x1e, 'x': 0x1e, 'width': 0x58, 'var': 'box_1_img_4', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_4', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }] }] }, { 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'visible': ![], 'var': 'box_2_show' }, 'child': [{ 'type': 'HBox', 'props': { 'y': 0x220, 'x': 0x18, 'width': 0x1f4, 'space': 0x2c, 'height': 0x56, 'align': 'top' }, 'child': [{ 'type': 'Image', 'props': { 'y': 2.5, 'x': 0x0, 'width': 0x58, 'var': 'box_2_img_1', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_1', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0xc, 'x': 0xa, 'width': 0x58, 'var': 'box_2_img_2', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_2', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x16, 'x': 0x14, 'width': 0x58, 'var': 'box_2_img_3', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_3', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x20, 'x': 0x1e, 'width': 0x58, 'var': 'box_2_img_4', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_4', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x2a, 'x': 0x28, 'width': 0x58, 'var': 'box_2_img_5', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_5', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }] }, { 'type': 'Box', 'props': { 'y': 0x384, 'x': 0x0, 'width': 0x221, 'height': 0x44 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x0, 'x': 0x28, 'width': 0x122, 'var': 'box_2_lab_m_1', 'text': '方法一\uFF1A单日充值1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300' } }, { 'type': 'Text', 'props': { 'y': 0x1e, 'x': 0x28, 'width': 0x122, 'var': 'box_2_lab_m_2', 'text': '方法一\uFF1A历史累计充值1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300' } }, { 'type': 'Text', 'props': { 'y': 0x0, 'x': 0x141, 'width': 0xa4, 'var': 'box_2_lab_v_1', 'text': '1000/1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300', 'align': 'right' } }, { 'type': 'Text', 'props': { 'y': 0x1e, 'x': 0x141, 'width': 0xa4, 'var': 'box_2_lab_v_2', 'text': '1000/1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300', 'align': 'right' } }] }, { 'type': 'Image', 'props': { 'y': 0x1aa, 'x': 0x159, 'width': 0x66, 'var': 'box_2_btn_get', 'stateNum': 0x1, 'height': 0x26 } }, { 'type': 'Image', 'props': { 'y': 0x1aa, 'x': 0x159, 'width': 0x66, 'var': 'box_2_btn_copy', 'stateNum': 0x1, 'height': 0x26 } }, { 'type': 'Button', 'props': { 'y': 0x1d2, 'x': 0x126, 'width': 0xc9, 'var': 'box_2_addclick', 'stateNum': 0x1, 'height': 0x1b } }, { 'type': 'Text', 'props': { 'y': 0x13c, 'x': 0x17a, 'width': 0xa3, 'var': 'box_2_lab_wx', 'height': 0x1f, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'left' } }] }, { 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'visible': ![], 'var': 'box_3_show' }, 'child': [{ 'type': 'Panel', 'props': { 'y': 0xf5, 'x': 0x10, 'width': 0x201, 'var': 'box_3_panel', 'vScrollBarSkin': '', 'height': 0x29e } }] }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0x0, 'width': 0xbb, 'var': 'btn_1', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0xba, 'width': 0xbb, 'var': 'btn_2', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0x177, 'width': 0xbb, 'var': 'btn_3', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x203, 'x': 0x22e, 'width': 0x25, 'var': 'btn_close', 'height': 0x8f } }, { 'type': 'Box', 'props': { 'width': 0x2ee, 'visible': ![], 'var': 'box_help', 'height': 0x536 }, 'child': [{ 'type': 'Sprite', 'props': { 'y': 0x0, 'x': 0x0, 'mouseThrough': ![], 'alpha': 0.7 }, 'child': [{ 'type': 'Rect', 'props': { 'width': 0x2ee, 'lineWidth': 0x1, 'height': 0x536, 'fillColor': '#000000' } }] }, { 'type': 'Image', 'props': { 'y': 0x158, 'x': 0x28, 'width': 0x1d2, 'var': 'box_help_bg', 'height': 0x203 }, 'child': [{ 'type': 'Button', 'props': { 'y': -0x1, 'x': 0x1a0, 'width': 0x33, 'var': 'box_help_close', 'height': 0x28 } }, { 'type': 'Image', 'props': { 'y': 0x3f, 'x': 0x98, 'width': 0xa0, 'var': 'box_help_qrcode', 'height': 0xa0 } }] }] }] }] }] }, f1d8;
    }(laya['ui']['View']);mxzhe['MainUI'] = tdvqsp;
  })(qa5vt = sdpqt['demoui'] || (sdpqt['demoui'] = {}));
}(fkibo$ || (fkibo$ = {})), function (ynj046) {
  var u9xh;(function (_bnkir) {
    var fcw82 = function (zmxeh7) {
      fj40cy(f1w6jc, zmxeh7);function f1w6jc() {
        return zmxeh7['call'](this) || this;
      }return f1w6jc['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), zmxeh7['prototype']['createChildren']['call'](this), this['createView'](ynj046['demoui']['ToastUI']['uiView']);
      }, f1w6jc['uiView'] = { 'type': 'View', 'props': { 'width': 0x2ee, 'height': 0x536 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x12c, 'height': 0x32, 'centerY': 0x0, 'centerX': 0x0 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x12c, 'height': 0x32, 'centerX': 0x0, 'alpha': 0.5 }, 'child': [{ 'type': 'Rect', 'props': { 'width': 0x12c, 'lineWidth': 0x1, 'height': 0x32, 'fillColor': '#382f2f' } }] }, { 'type': 'Text', 'props': { 'width': 0x12c, 'var': 'lab_msg', 'valign': 'middle', 'text': 'text', 'height': 0x32, 'fontSize': 0x18, 'color': '#ffffff', 'align': 'center' } }] }] }, f1w6jc;
    }(laya['ui']['View']);_bnkir['ToastUI'] = fcw82;
  })(u9xh = ynj046['demoui'] || (ynj046['demoui'] = {}));
}(fkibo$ || (fkibo$ = {}));var fhxemz = function () {
  function eumx9h() {}return eumx9h['init'] = function () {
    !this['ui'] && (this['ui'] = new fkibo$['demoui']['ToastUI'](), this['ui']['visible'] = ![], Laya['stage']['addChild'](this['ui']));
  }, eumx9h['msg'] = function (r4_inb) {
    var c2fw1 = this;!this['ui'] && eumx9h['init'](), this['ui']['visible'] = !![], this['ui']['lab_msg']['text'] = r4_inb, clearTimeout(this['interval']), this['interval'] = setTimeout(function () {
      c2fw1['ui']['visible'] = ![];
    }, 0x7d0);
  }, eumx9h;
}();window['minitool'] = fd5pqtv;