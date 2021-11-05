var i = wx.$R;
var r_auh_16 = this && this['__extends'] || function () {
  var dpfcq = function (au1b_$, jioyx2) {
    return dpfcq = Object['setPrototypeOf'] || { '__proto__': [] } instanceof Array && function (pf5cn, c6u5h) {
      pf5cn['__proto__'] = c6u5h;
    } || function (qedfp, h5_6cn) {
      for (var _ah6 in h5_6cn) if (h5_6cn['hasOwnProperty'](_ah6)) qedfp[_ah6] = h5_6cn[_ah6];
    }, dpfcq(au1b_$, jioyx2);
  };return function (wre7mg, qdegp7) {
    dpfcq(wre7mg, qdegp7);function ua1b_() {
      this['constructor'] = wre7mg;
    }wre7mg['prototype'] = qdegp7 === null ? Object['create'](qdegp7) : (ua1b_['prototype'] = qdegp7['prototype'], new ua1b_());
  };
}(),
    r_h1b_au = window['Sygame'],
    r_pgqdef = ![],
    r_b1u_h = function () {
  function i8yoxj() {}return i8yoxj['init'] = function () {
    r_pgqdef ? this['sygame'] = { 'channel': '3477d2273abd484ba2a0e04ad4971b3c', 'role_id': undefined, 'openid': 'oxmOf5biumkGash-Xht9FVAlswVk', 'appid': 'wx2936121c4817bf46' } : this['sygame'] = r_h1b_au;
  }, i8yoxj['getTimeStamp'] = function () {
    return new Date()['getTime']();
  }, i8yoxj['setResMap'] = function (w8km7, mew7g) {
    this['resMap'][w8km7] = w8km7 + '?' + mew7g;
  }, i8yoxj['getResMap'] = function (iyjox) {
    return this['resMap'][iyjox];
  }, i8yoxj['resMap'] = {}, i8yoxj;
}(),
    r_ijoxy = function () {
  function tsvlz3() {
    this['getIcon'] = 'https://wx.11babay.cn/uploads/f/fkccc1532944783/5/2/c/7/60dc442c4fbc5.png', this['copyIcon'] = 'https://wx.11babay.cn/uploads/f/fkccc1532944783/3/0/1/7/60dc4409dce39.png', r_b1u_h['init'](), this['postSidebarApi']();
  }return tsvlz3['prototype']['send'] = function (_b$1au, _u61h5, ix2zjo, f5dn6c, l2tz) {
    f5dn6c === void 0x0 && (f5dn6c = 'get');l2tz === void 0x0 && (l2tz = '' || null);var sjzi2 = new Laya['HttpRequest']();sjzi2['http']['timeout'] = 0x2710, sjzi2['once'](Laya['Event']['COMPLETE'], this, _u61h5), sjzi2['once'](Laya['Event']['ERROR'], this, ix2zjo), sjzi2['send'](_b$1au, l2tz, f5dn6c, 'text');
  }, tsvlz3['prototype']['postSidebarApi'] = function () {
    this['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=sidebarApi&channel=' + r_b1u_h['sygame']['channel'], this['completeHandler'], this['errorHandler']);
  }, tsvlz3['prototype']['completeHandler'] = function (xyo2ij) {
    var q7emg = JSON['parse'](xyo2ij);console['log'](q7emg);switch (q7emg['status']) {case 0x3e9:
        var sv3tl = [];q7emg['msg']['basics_image_url'] && sv3tl['push']({ 'url': q7emg['msg']['basics_image_url'], 'type': Laya['Loader']['IMAGE'] }), q7emg['msg']['public_code'] && sv3tl['push']({ 'url': q7emg['msg']['public_code'], 'type': Laya['Loader']['IMAGE'] }), q7emg['msg']['vip_customer_service'] && sv3tl['push']({ 'url': q7emg['msg']['vip_customer_service'], 'type': Laya['Loader']['IMAGE'] }), q7emg['msg']['vip_customer_service_not_add'] && sv3tl['push']({ 'url': q7emg['msg']['vip_customer_service_not_add'], 'type': Laya['Loader']['IMAGE'] }), q7emg['msg']['game_center_image_url'] && sv3tl['push']({ 'url': q7emg['msg']['game_center_image_url'], 'type': Laya['Loader']['IMAGE'] }), q7emg['msg']['vip_qrcode'] && sv3tl['push']({ 'url': q7emg['msg']['vip_qrcode'], 'type': Laya['Loader']['IMAGE'] }), q7emg['msg']['getIcon'] && sv3tl['push']({ 'url': this['getIcon'], 'type': Laya['Loader']['IMAGE'] }), q7emg['msg']['copyIcon'] && sv3tl['push']({ 'url': this['copyIcon'], 'type': Laya['Loader']['IMAGE'] });for (var lzt23 = 0x0, xs32tz = q7emg['msg']['follow_gift_list']; lzt23 < xs32tz['length']; lzt23++) {
          var rqegp = xs32tz[lzt23];sv3tl['push']({ 'url': rqegp['url'], 'type': Laya['Loader']['IMAGE'] });
        }for (var uhba1 = 0x0, wr8ym = q7emg['msg']['vip_box_list']; uhba1 < wr8ym['length']; uhba1++) {
          var rqegp = wr8ym[uhba1];sv3tl['push']({ 'url': rqegp['url'], 'type': Laya['Loader']['IMAGE'] });
        }for (var dc5f6 = 0x0; dc5f6 < sv3tl['length']; dc5f6++) {
          r_b1u_h['setResMap'](sv3tl[dc5f6]['url'], r_b1u_h['getTimeStamp']()), sv3tl[dc5f6]['url'] = r_b1u_h['getResMap'](sv3tl[dc5f6]['url']);
        }Laya['loader']['load'](sv3tl, Laya['Handler']['create'](this, this['initGame'])), this['data'] = q7emg['msg'];break;case 0x3ea:
        r_yoijk['msg']('空的游戏channel');break;case 0x3eb:
        r_yoijk['msg']('错误的游戏channel');break;case 0x3ec:
        r_yoijk['msg']('未找到对应游戏大类');break;case 0x3ed:
        r_yoijk['msg']('未设置侧边栏');break;}
  }, tsvlz3['prototype']['errorHandler'] = function (tlszv3) {}, tsvlz3['prototype']['initGame'] = function () {
    var dnqpef = new r_x2iyoj(this);dnqpef['show']();
  }, tsvlz3;
}(),
    r_x2iyoj = function () {
  function jiyxo8(s2xtj) {
    this['page'] = 0x3, this['rolePriceData'] = {}, this['boxlist'] = [], this['donwX'] = 0x0, this['downY'] = 0x0, this['tool'] = s2xtj;
  }return jiyxo8['prototype']['setChildMouseThroughs'] = function (npcdfq) {
    var ox2i = npcdfq['_childs'] || [];for (var a$b1 = 0x0; a$b1 < ox2i['length']; a$b1++) {
      ox2i[a$b1] && (ox2i[a$b1]['mouseThrough'] = !![]);
    }
  }, jiyxo8['prototype']['show'] = function () {
    if (this['tool']['data']['on'] === '1') {
      this['main'] = new r_c_56h['demoui']['MainUI'](), Laya['stage']['addChild'](this['main']), this['main']['mouseThrough'] = !![];var jzxs2t = this['main']['_childs'] || [];for (var pegfq = 0x0; pegfq < jzxs2t['length']; pegfq++) {
        jzxs2t[pegfq]['mouseThrough'] = !![];
      }this['setChildMouseThroughs'](this['main']['_childs']), this['setChildMouseThroughs'](this['main']['_childs'][0x0]), this['initIcon'](), this['initEvent'](), this['initView'](), r_yoijk['init']();
    }
  }, jiyxo8['prototype']['initView'] = function () {
    var myrw8 = this,
        hau6_1 = this['tool']['data']['follow_down_words']['replace'](/\\n/g, '\x0a');this['main']['box_1_lab_info']['text'] = hau6_1;for (var h_au61 = 0x1; h_au61 <= this['tool']['data']['follow_gift_list']['length']; h_au61++) {
      var zsl23 = this['tool']['data']['follow_gift_list'][h_au61 - 0x1];this['main']['box_1_img_' + h_au61]['skin'] = zsl23['url'], this['main']['box_1_lab_' + h_au61]['text'] = zsl23['name'];
    }for (var h_au61 = 0x1; h_au61 <= this['tool']['data']['vip_box_list']['length']; h_au61++) {
      var zsl23 = this['tool']['data']['vip_box_list'][h_au61 - 0x1];this['main']['box_2_img_' + h_au61]['skin'] = zsl23['url'], this['main']['box_2_lab_' + h_au61]['text'] = zsl23['name'];
    }this['main']['box_2_lab_m_1']['text'] = '方法一：单日充值' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_m_2']['text'] = '方法二：历史累计充值' + +this['tool']['data']['y'] + '元', this['main']['box_2_lab_v_1']['text'] = (this['rolePriceData']['todayPrice'] || 0x0) + '/' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_v_2']['text'] = (this['rolePriceData']['allPrice'] || 0x0) + '/' + +this['tool']['data']['y'] + '元', this['main']['box_2_btn_copy']['skin'] = this['tool']['copyIcon'], this['main']['box_2_btn_get']['skin'] = this['tool']['getIcon'], this['main']['box_2_btn_copy']['visible'] = ![], this['main']['box_2_btn_get']['on'](Laya['Event']['CLICK'], this, function () {
      if (myrw8['rolePriceData']['is_vip'] == 0x0) {
        r_yoijk['msg']('请先获取vip资格');return;
      }myrw8['main']['box_2_lab_wx']['text'] = myrw8['tool']['data']['vip_wx'], myrw8['main']['box_2_btn_copy']['visible'] = !![];
    }), this['main']['box_2_btn_copy']['on'](Laya['Event']['CLICK'], this, function () {
      myrw8['copyText'](myrw8['tool']['data']['vip_wx']);
    }), this['main']['box_2_addclick']['on'](Laya['Event']['CLICK'], this, function () {
      if (myrw8['rolePriceData']['is_vip'] == 0x0) return;myrw8['main']['box_help']['visible'] = !![];
    }), this['main']['box_help_close']['on'](Laya['Event']['CLICK'], this, function () {
      myrw8['main']['box_help']['visible'] = ![];
    }), this['main']['box_help_bg']['skin'] = this['tool']['data']['vip_customer_service_not_add'], this['main']['box_help_qrcode']['skin'] = this['tool']['data']['vip_qrcode'], this['main']['box_help_qrcode']['scaleX'] = 0xa0 / this['main']['box_help_qrcode']['width'], this['main']['box_help_qrcode']['scaleY'] = 0xa0 / this['main']['box_help_qrcode']['width'], this['main']['box_3_panel']['vScrollBar']['visible'] = ![], this['main']['box_3_panel']['vScrollBarSkin'] = 'common_atlas/scrollBar.png';
  }, jiyxo8['prototype']['initIcon'] = function () {
    this['icon'] = new Laya['Image'](), this['icon']['skin'] = this['tool']['data']['basics_image_url'], this['icon']['x'] = 0x0, this['icon']['y'] = 0xc8, this['icon']['width'] = 0x66, this['icon']['height'] = 0x6f, this['main']['addChild'](this['icon']), this['icon']['on'](Laya['Event']['MOUSE_DOWN'], this, this['iconPress']), this['icon']['on'](Laya['Event']['MOUSE_UP'], this, this['iconUp']), this['icon']['on'](Laya['Event']['MOUSE_WHEEL'], this, this['iconMove']), this['dragRect'] = new Laya['Rectangle'](-this['icon']['width'] / 0x2, 0x0, Laya['stage']['width'], Laya['stage']['height'] - this['icon']['height'] / 0x2);
  }, jiyxo8['prototype']['initEvent'] = function () {
    var fp5d = this;this['main']['btn_1']['on'](Laya['Event']['CLICK'], this, function () {
      if (fp5d['page'] == 0x1) return;fp5d['page1']();
    }), this['main']['btn_2']['on'](Laya['Event']['CLICK'], this, function () {
      if (fp5d['page'] == 0x2) return;fp5d['page2']();
    }), this['main']['btn_3']['on'](Laya['Event']['CLICK'], this, function () {
      if (fp5d['page'] == 0x3) return;fp5d['page3']();
    }), this['main']['btn_close']['on'](Laya['Event']['CLICK'], this, function () {
      fp5d['main']['bg']['x'] = -0x2ee, fp5d['icon']['visible'] = !![];
    });
  }, jiyxo8['prototype']['initBoard'] = function () {
    this['isInitBoard'] = !![], this['page1']();
  }, jiyxo8['prototype']['showBoard'] = function () {
    this['main']['bg']['x'] = 0x0, this['icon']['visible'] = ![], this['tool']['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=sidebarApiRoleId&role_id=' + r_b1u_h['sygame']['role_id'] + '&channel=' + r_b1u_h['sygame']['channel'], this['rolePriceHandler']['bind'](this), this['roleError']['bind'](this));
  }, jiyxo8['prototype']['page1'] = function () {
    this['page'] = 0x1, this['main']['bg']['skin'] = this['tool']['data']['public_code'], this['main']['box_1_show']['visible'] = !![], this['main']['box_2_show']['visible'] = ![], this['main']['box_3_show']['visible'] = ![];
  }, jiyxo8['prototype']['page2'] = function () {
    this['page'] = 0x2, this['main']['bg']['skin'] = this['tool']['data']['vip_customer_service'], this['main']['box_1_show']['visible'] = ![], this['main']['box_2_show']['visible'] = !![], this['main']['box_3_show']['visible'] = ![];
  }, jiyxo8['prototype']['page3'] = function () {
    this['page'] = 0x3, this['main']['bg']['skin'] = this['tool']['data']['game_center_image_url'], this['main']['box_1_show']['visible'] = ![], this['main']['box_2_show']['visible'] = ![], this['main']['box_3_show']['visible'] = !![], this['sendBox'] || this['getBoxList'](0x0), this['sendBox'] = !![], r_h1b_au && r_h1b_au['syClickOpenBox']();
  }, jiyxo8['prototype']['getBoxList'] = function (eqp7r) {
    var vtszl = this;r_h1b_au && r_h1b_au['syGetBoxList']({ 'page': eqp7r, 'count': 0xc })['then'](function (t32zsl) {
      var lvtz3s = t32zsl['data'];lvtz3s['status'] == 0x3e9 ? lvtz3s['data'] && lvtz3s['data']['length'] && (vtszl['boxlist'] = vtszl['boxlist']['concat'](lvtz3s['data']), eqp7r++, vtszl['getBoxList'](eqp7r)) : vtszl['boxListHandler']();
    });
  }, jiyxo8['prototype']['copyText'] = function (oj2iz) {
    try {
      wx['setClipboardData']({ 'data': oj2iz, 'success': function (n_ch65) {
          console['log']('复制成功:', n_ch65);
        } });
    } catch (zvt3sl) {}
  }, jiyxo8['prototype']['rolePriceHandler'] = function (krm87w) {
    this['rolePriceData'] = JSON['parse'](krm87w);switch (this['rolePriceData']['status']) {case 0x3e9:
        this['main']['box_2_lab_v_1']['text'] = (this['rolePriceData']['todayPrice'] || 0x0) + '/' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_v_2']['text'] = (this['rolePriceData']['allPrice'] || 0x0) + '/' + +this['tool']['data']['y'] + '元';break;case 0x3ea:
        break;case 0x3eb:
        break;}
  }, jiyxo8['prototype']['roleError'] = function () {}, jiyxo8['prototype']['boxListHandler'] = function () {
    var gpd = function (pncq) {
      var jxzi2s = _$a1u['boxlist'][pncq],
          fn56ch = new r_c_56h['demoui']['BoxItemUI']();fn56ch['icon']['skin'] = jxzi2s['icon'], fn56ch['title']['text'] = jxzi2s['title'], fn56ch['x'] = 0xa0 * (pncq % 0x3), fn56ch['y'] = 0xa0 * (pncq / 0x3 ^ 0x0), _$a1u['main']['box_3_panel']['addChild'](fn56ch);var $ba9 = { 'appid': r_b1u_h['sygame']['appid'], 'game_id': jxzi2s['game_id'], 'jump_appid': jxzi2s['jump_appid'], 'jump_path': jxzi2s['jump_path'], 'tunnel_id': jxzi2s['tunnel_id'], 'uv': 0x0, 'wecha_id': r_b1u_h['sygame']['openid'] },
          xz2ts3 = jxzi2s['preview_img'],
          ba$u1 = jxzi2s['jump_type'],
          rmg = jxzi2s['kf_session'];fn56ch['on'](Laya['Event']['CLICK'], _$a1u, function () {
        r_h1b_au && r_h1b_au['syClickBox']({ 'game_id': jxzi2s['game_id'], 'tunnel_id': jxzi2s['tunnel_id'], 'jump_appid': jxzi2s['jump_appid'], 'jump_path': jxzi2s['jump_path'] })['then'](function (st2z3x) {
          if (ba$u1 === '0') wx['navigateToMiniProgram']({ 'appId': $ba9['jump_appid'], 'path': $ba9['jump_path'], 'fail': function (vt3s0) {
              if (!xz2ts3) return;wx['previewImage']({ 'urls': [xz2ts3] });
            } });else {
            if (ba$u1 === '1') {
              if (!xz2ts3) return;wx['previewImage']({ 'urls': [xz2ts3] });
            } else {
              if (ba$u1 === '2') {
                if (!rmg) return;wx['openCustomerServiceConversation']({ 'sessionFrom': rmg, 'showMessageCard': !![], 'sendMessageTitle': '', 'sendMessagePath': '', 'sendMessageImg': '' });
              }
            }
          }
        });
      });
    },
        _$a1u = this;for (var wrmyk = 0x0; wrmyk < this['boxlist']['length']; wrmyk++) {
      gpd(wrmyk);
    }
  }, jiyxo8['prototype']['boxListError'] = function () {}, jiyxo8['prototype']['boxClickHandler'] = function () {}, jiyxo8['prototype']['iconPress'] = function (fgpe) {
    this['donwX'] = fgpe['target']['x'], this['donwY'] = fgpe['target']['y'], this['icon']['startDrag'](this['dragRect']), this['isMove'] = ![], this['isPress'] = !![];
  }, jiyxo8['prototype']['iconMove'] = function (k8wyoi) {
    this['isMove'] = !![];
  }, jiyxo8['prototype']['iconUp'] = function (wkry8m) {
    var yomk8 = wkry8m['target']['x'],
        z3sl2 = wkry8m['target']['y'];this['icon']['stopDrag'](), yomk8 == this['donwX'] && this['donwY'] == z3sl2 && (this['isInitBoard'] || this['initBoard'](), this['showBoard']()), this['isMove'] = ![], this['isPress'] = ![];
  }, jiyxo8;
}(),
    r_c_56h;(function (mweg) {
  var ixj2s;(function (fndc65) {
    var p5dfcn = function (d6nf) {
      r_auh_16(lvz3, d6nf);function lvz3() {
        return d6nf['call'](this) || this;
      }return lvz3['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), d6nf['prototype']['createChildren']['call'](this), this['createView'](mweg['demoui']['BoxItemUI']['uiView']);
      }, lvz3['uiView'] = { 'type': 'View', 'props': { 'width': 0xb4, 'height': 0xa0 }, 'child': [{ 'type': 'Image', 'props': { 'y': 0x3, 'x': 0x20, 'width': 0x73, 'var': 'icon', 'height': 0x73 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x79, 'x': -0x21, 'width': 0xb4, 'var': 'title', 'valign': 'middle', 'height': 0x22, 'fontSize': 0x16, 'color': '#441d1c', 'align': 'center' } }] }] }, lvz3;
    }(laya['ui']['View']);fndc65['BoxItemUI'] = p5dfcn;
  })(ixj2s = mweg['demoui'] || (mweg['demoui'] = {}));
})(r_c_56h || (r_c_56h = {})), function (n6d5c) {
  var cfdq;(function (qnfd) {
    var e7pgq = function (egrw7m) {
      r_auh_16(r7mk8, egrw7m);function r7mk8() {
        return egrw7m['call'](this) || this;
      }return r7mk8['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), egrw7m['prototype']['createChildren']['call'](this), this['createView'](n6d5c['demoui']['MainUI']['uiView']);
      }, r7mk8['uiView'] = { 'type': 'View', 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x2ee, 'top': 0x0, 'right': 0x0, 'left': 0x0, 'height': 0x536, 'bottom': 0x0 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x2ee, 'height': 0x536, 'centerY': 0x0 }, 'child': [{ 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x2ee, 'var': 'bg', 'height': 0x536 }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x2ee, 'visible': ![], 'var': 'box_1_show', 'height': 0x536, 'centerY': 0x0 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x253, 'x': 0x2e, 'width': 0x1d0, 'var': 'box_1_lab_info', 'leading': 0xa, 'height': 0x97, 'fontSize': 0x18, 'color': '#a959ee' } }, { 'type': 'HBox', 'props': { 'y': 0x2ee, 'x': 0x14, 'width': 0x1fe, 'space': 0x35, 'height': 0x78, 'align': 'top' }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x58, 'var': 'box_1_img_1', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_1', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0xa, 'x': 0xa, 'width': 0x58, 'var': 'box_1_img_2', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_2', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x14, 'x': 0x14, 'width': 0x58, 'var': 'box_1_img_3', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_3', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x1e, 'x': 0x1e, 'width': 0x58, 'var': 'box_1_img_4', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_4', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }] }] }, { 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'visible': ![], 'var': 'box_2_show' }, 'child': [{ 'type': 'HBox', 'props': { 'y': 0x220, 'x': 0x18, 'width': 0x1f4, 'space': 0x2c, 'height': 0x56, 'align': 'top' }, 'child': [{ 'type': 'Image', 'props': { 'y': 2.5, 'x': 0x0, 'width': 0x58, 'var': 'box_2_img_1', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_1', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0xc, 'x': 0xa, 'width': 0x58, 'var': 'box_2_img_2', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_2', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x16, 'x': 0x14, 'width': 0x58, 'var': 'box_2_img_3', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_3', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x20, 'x': 0x1e, 'width': 0x58, 'var': 'box_2_img_4', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_4', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x2a, 'x': 0x28, 'width': 0x58, 'var': 'box_2_img_5', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_5', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }] }, { 'type': 'Box', 'props': { 'y': 0x384, 'x': 0x0, 'width': 0x221, 'height': 0x44 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x0, 'x': 0x28, 'width': 0x122, 'var': 'box_2_lab_m_1', 'text': '方法一\uFF1A单日充值1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300' } }, { 'type': 'Text', 'props': { 'y': 0x1e, 'x': 0x28, 'width': 0x122, 'var': 'box_2_lab_m_2', 'text': '方法一\uFF1A历史累计充值1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300' } }, { 'type': 'Text', 'props': { 'y': 0x0, 'x': 0x141, 'width': 0xa4, 'var': 'box_2_lab_v_1', 'text': '1000/1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300', 'align': 'right' } }, { 'type': 'Text', 'props': { 'y': 0x1e, 'x': 0x141, 'width': 0xa4, 'var': 'box_2_lab_v_2', 'text': '1000/1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300', 'align': 'right' } }] }, { 'type': 'Image', 'props': { 'y': 0x1aa, 'x': 0x159, 'width': 0x66, 'var': 'box_2_btn_get', 'stateNum': 0x1, 'height': 0x26 } }, { 'type': 'Image', 'props': { 'y': 0x1aa, 'x': 0x159, 'width': 0x66, 'var': 'box_2_btn_copy', 'stateNum': 0x1, 'height': 0x26 } }, { 'type': 'Button', 'props': { 'y': 0x1d2, 'x': 0x126, 'width': 0xc9, 'var': 'box_2_addclick', 'stateNum': 0x1, 'height': 0x1b } }, { 'type': 'Text', 'props': { 'y': 0x13c, 'x': 0x17a, 'width': 0xa3, 'var': 'box_2_lab_wx', 'height': 0x1f, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'left' } }] }, { 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'visible': ![], 'var': 'box_3_show' }, 'child': [{ 'type': 'Panel', 'props': { 'y': 0xf5, 'x': 0x10, 'width': 0x201, 'var': 'box_3_panel', 'vScrollBarSkin': '', 'height': 0x29e } }] }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0x0, 'width': 0xbb, 'var': 'btn_1', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0xba, 'width': 0xbb, 'var': 'btn_2', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0x177, 'width': 0xbb, 'var': 'btn_3', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x203, 'x': 0x22e, 'width': 0x25, 'var': 'btn_close', 'height': 0x8f } }, { 'type': 'Box', 'props': { 'width': 0x2ee, 'visible': ![], 'var': 'box_help', 'height': 0x536 }, 'child': [{ 'type': 'Sprite', 'props': { 'y': 0x0, 'x': 0x0, 'mouseThrough': ![], 'alpha': 0.7 }, 'child': [{ 'type': 'Rect', 'props': { 'width': 0x2ee, 'lineWidth': 0x1, 'height': 0x536, 'fillColor': '#000000' } }] }, { 'type': 'Image', 'props': { 'y': 0x158, 'x': 0x28, 'width': 0x1d2, 'var': 'box_help_bg', 'height': 0x203 }, 'child': [{ 'type': 'Button', 'props': { 'y': -0x1, 'x': 0x1a0, 'width': 0x33, 'var': 'box_help_close', 'height': 0x28 } }, { 'type': 'Image', 'props': { 'y': 0x3f, 'x': 0x98, 'width': 0xa0, 'var': 'box_help_qrcode', 'height': 0xa0 } }] }] }] }] }] }, r7mk8;
    }(laya['ui']['View']);qnfd['MainUI'] = e7pgq;
  })(cfdq = n6d5c['demoui'] || (n6d5c['demoui'] = {}));
}(r_c_56h || (r_c_56h = {})), function (xzijs) {
  var nhfc6;(function (s2zxij) {
    var _ba$u = function (xt2s3z) {
      r_auh_16(z2txsj, xt2s3z);function z2txsj() {
        return xt2s3z['call'](this) || this;
      }return z2txsj['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), xt2s3z['prototype']['createChildren']['call'](this), this['createView'](xzijs['demoui']['ToastUI']['uiView']);
      }, z2txsj['uiView'] = { 'type': 'View', 'props': { 'width': 0x2ee, 'height': 0x536 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x12c, 'height': 0x32, 'centerY': 0x0, 'centerX': 0x0 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x12c, 'height': 0x32, 'centerX': 0x0, 'alpha': 0.5 }, 'child': [{ 'type': 'Rect', 'props': { 'width': 0x12c, 'lineWidth': 0x1, 'height': 0x32, 'fillColor': '#382f2f' } }] }, { 'type': 'Text', 'props': { 'width': 0x12c, 'var': 'lab_msg', 'valign': 'middle', 'text': 'text', 'height': 0x32, 'fontSize': 0x18, 'color': '#ffffff', 'align': 'center' } }] }] }, z2txsj;
    }(laya['ui']['View']);s2zxij['ToastUI'] = _ba$u;
  })(nhfc6 = xzijs['demoui'] || (xzijs['demoui'] = {}));
}(r_c_56h || (r_c_56h = {}));var r_yoijk = function () {
  function t32xzs() {}return t32xzs['init'] = function () {
    !this['ui'] && (this['ui'] = new r_c_56h['demoui']['ToastUI'](), this['ui']['visible'] = ![], Laya['stage']['addChild'](this['ui']));
  }, t32xzs['msg'] = function (b94a1) {
    var fc5pn = this;!this['ui'] && t32xzs['init'](), this['ui']['visible'] = !![], this['ui']['lab_msg']['text'] = b94a1, clearTimeout(this['interval']), this['interval'] = setTimeout(function () {
      fc5pn['ui']['visible'] = ![];
    }, 0x7d0);
  }, t32xzs;
}();window['minitool'] = r_ijoxy;