var I = wx.$R;
var r_s3tzv = this && this['__extends'] || function () {
  var xio2zj = function (b_uh, fqndpe) {
    return xio2zj = Object['setPrototypeOf'] || { '__proto__': [] } instanceof Array && function (haub, $491ba) {
      haub['__proto__'] = $491ba;
    } || function ($41ab9, z2l) {
      for (var e7gm in z2l) if (z2l['hasOwnProperty'](e7gm)) $41ab9[e7gm] = z2l[e7gm];
    }, xio2zj(b_uh, fqndpe);
  };return function (n5cdf, km7) {
    xio2zj(n5cdf, km7);function qregm7() {
      this['constructor'] = n5cdf;
    }n5cdf['prototype'] = km7 === null ? Object['create'](km7) : (qregm7['prototype'] = km7['prototype'], new qregm7());
  };
}(),
    r_c6_nh5 = window['Sygame'],
    r_depgqf = ![],
    r_s03l = function () {
  function gmer7w() {}return gmer7w['init'] = function () {
    r_depgqf ? this['sygame'] = { 'channel': '3477d2273abd484ba2a0e04ad4971b3c', 'role_id': undefined, 'openid': 'oxmOf5biumkGash-Xht9FVAlswVk', 'appid': 'wx2936121c4817bf46' } : this['sygame'] = r_c6_nh5;
  }, gmer7w['getTimeStamp'] = function () {
    return new Date()['getTime']();
  }, gmer7w['setResMap'] = function (xzs2ji, fn5dpc) {
    this['resMap'][xzs2ji] = xzs2ji + '?' + fn5dpc;
  }, gmer7w['getResMap'] = function (yoij8k) {
    return this['resMap'][yoij8k];
  }, gmer7w['resMap'] = {}, gmer7w;
}(),
    r_bau = function () {
  function lt3z2() {
    this['getIcon'] = 'https://wx.11babay.cn/uploads/f/fkccc1532944783/5/2/c/7/60dc442c4fbc5.png', this['copyIcon'] = 'https://wx.11babay.cn/uploads/f/fkccc1532944783/3/0/1/7/60dc4409dce39.png', r_s03l['init'](), this['getBoxCheckoutCode']();
  }return lt3z2['prototype']['send'] = function (b_$ua, cpn, qpger7, dfpqne, rmgq7e) {
    dfpqne === void 0x0 && (dfpqne = 'get');rmgq7e === void 0x0 && (rmgq7e = '' || null);var zji2s = new Laya['HttpRequest']();zji2s['http']['timeout'] = 0x2710, zji2s['once'](Laya['Event']['COMPLETE'], this, cpn), zji2s['once'](Laya['Event']['ERROR'], this, qpger7), zji2s['send'](b_$ua, rmgq7e, dfpqne, 'text');
  }, lt3z2['prototype']['postSidebarApi'] = function () {
    var gem7q = r_s03l['sygame']['openid'],
        pndqf = '&channel=' + r_s03l['sygame']['channel'] + '&wecha_id=' + gem7q;this['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=sidebarApi' + pndqf, this['completeHandler'], this['errorHandler']);
  }, lt3z2['prototype']['getBoxCheckoutCode'] = function () {
    var s2xtz3 = Sygame['SY_CONF']['commitId'];this['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=getBoxCheckoutCode', this['getBoxCheckoutCodeRes'], this['errorHandler'], 'post', { 'commitId': s2xtz3 });
  }, lt3z2['prototype']['getBoxCheckoutCodeRes'] = function (ow8mky) {
    var krmw8 = JSON['parse'](ow8mky);console['log']('getBoxCheckoutCode:', krmw8);if (krmw8['status'] == 0x3e9) {
      var rkwgm7 = krmw8['info'];rkwgm7 == 0xfa1 ? this['postSidebarApi']() : console['error']('盛也盒子\x20不显示' + krmw8);
    } else console['error']('盛也盒子 getBoxCheckoutCodeRes 其他错误' + krmw8);
  }, lt3z2['prototype']['completeHandler'] = function (s3lv) {
    var mrgq7e = JSON['parse'](s3lv);console['log'](mrgq7e);switch (mrgq7e['status']) {case 0x3e9:
        var kg7mr = [];mrgq7e['msg']['basics_image_url'] && kg7mr['push']({ 'url': mrgq7e['msg']['basics_image_url'], 'type': Laya['Loader']['IMAGE'] }), mrgq7e['msg']['public_code'] && kg7mr['push']({ 'url': mrgq7e['msg']['public_code'], 'type': Laya['Loader']['IMAGE'] }), mrgq7e['msg']['vip_customer_service'] && kg7mr['push']({ 'url': mrgq7e['msg']['vip_customer_service'], 'type': Laya['Loader']['IMAGE'] }), mrgq7e['msg']['vip_customer_service_not_add'] && kg7mr['push']({ 'url': mrgq7e['msg']['vip_customer_service_not_add'], 'type': Laya['Loader']['IMAGE'] }), mrgq7e['msg']['game_center_image_url'] && kg7mr['push']({ 'url': mrgq7e['msg']['game_center_image_url'], 'type': Laya['Loader']['IMAGE'] }), mrgq7e['msg']['vip_qrcode'] && kg7mr['push']({ 'url': mrgq7e['msg']['vip_qrcode'], 'type': Laya['Loader']['IMAGE'] }), mrgq7e['msg']['getIcon'] && kg7mr['push']({ 'url': this['getIcon'], 'type': Laya['Loader']['IMAGE'] }), mrgq7e['msg']['copyIcon'] && kg7mr['push']({ 'url': this['copyIcon'], 'type': Laya['Loader']['IMAGE'] });for (var k8ymow = 0x0, cqd = mrgq7e['msg']['follow_gift_list']; k8ymow < cqd['length']; k8ymow++) {
          var iw8yk = cqd[k8ymow];kg7mr['push']({ 'url': iw8yk['url'], 'type': Laya['Loader']['IMAGE'] });
        }for (var z3t2xs = 0x0, depqfg = mrgq7e['msg']['vip_box_list']; z3t2xs < depqfg['length']; z3t2xs++) {
          var iw8yk = depqfg[z3t2xs];kg7mr['push']({ 'url': iw8yk['url'], 'type': Laya['Loader']['IMAGE'] });
        }for (var qpefgd = 0x0; qpefgd < kg7mr['length']; qpefgd++) {
          r_s03l['setResMap'](kg7mr[qpefgd]['url'], r_s03l['getTimeStamp']()), kg7mr[qpefgd]['url'] = r_s03l['getResMap'](kg7mr[qpefgd]['url']);
        }Laya['loader']['load'](kg7mr, Laya['Handler']['create'](this, this['initGame'])), this['data'] = mrgq7e['msg'];break;case 0x3ea:
        r_zsxtj['msg']('空的游戏channel');break;case 0x3eb:
        r_zsxtj['msg']('错误的游戏channel');break;case 0x3ec:
        r_zsxtj['msg']('未找到对应游戏大类');break;case 0x3ed:
        r_zsxtj['msg']('未设置侧边栏');break;}
  }, lt3z2['prototype']['errorHandler'] = function (egqr7) {}, lt3z2['prototype']['initGame'] = function () {
    var c5dpf = new r_k7gwmr(this);c5dpf['show']();
  }, lt3z2;
}(),
    r_k7gwmr = function () {
  function uh6_c5(b1a$94) {
    this['page'] = 0x3, this['rolePriceData'] = {}, this['boxlist'] = [], this['donwX'] = 0x0, this['downY'] = 0x0, this['tool'] = b1a$94;
  }return uh6_c5['prototype']['setChildMouseThroughs'] = function (pdnqfe) {
    var gq7ped = pdnqfe['_childs'] || [];for (var krwm78 = 0x0; krwm78 < gq7ped['length']; krwm78++) {
      gq7ped[krwm78] && (gq7ped[krwm78]['mouseThrough'] = !![]);
    }
  }, uh6_c5['prototype']['show'] = function () {
    if (this['tool']['data']['on'] === '1') {
      this['main'] = new r_y8koij['demoui']['MainUI'](), Laya['stage']['addChild'](this['main']), this['main']['mouseThrough'] = !![];var _huba1 = this['main']['_childs'] || [];for (var p5dnc = 0x0; p5dnc < _huba1['length']; p5dnc++) {
        _huba1[p5dnc]['mouseThrough'] = !![];
      }this['setChildMouseThroughs'](this['main']['_childs']), this['setChildMouseThroughs'](this['main']['_childs'][0x0]), this['initIcon'](), this['initEvent'](), this['initView'](), r_zsxtj['init'](), this['main']['bg']['x'] = -0x2ee;
    }
  }, uh6_c5['prototype']['initView'] = function () {
    var ykrwm8 = this,
        km7w = this['tool']['data']['follow_down_words']['replace'](/\\n/g, '\x0a');this['main']['box_1_lab_info']['text'] = km7w;for (var mw8ko = 0x1; mw8ko <= this['tool']['data']['follow_gift_list']['length']; mw8ko++) {
      var n6fc5d = this['tool']['data']['follow_gift_list'][mw8ko - 0x1];this['main']['box_1_img_' + mw8ko]['skin'] = n6fc5d['url'], this['main']['box_1_lab_' + mw8ko]['text'] = n6fc5d['name'];
    }for (var mw8ko = 0x1; mw8ko <= this['tool']['data']['vip_box_list']['length']; mw8ko++) {
      var n6fc5d = this['tool']['data']['vip_box_list'][mw8ko - 0x1];this['main']['box_2_img_' + mw8ko]['skin'] = n6fc5d['url'], this['main']['box_2_lab_' + mw8ko]['text'] = n6fc5d['name'];
    }this['main']['box_2_lab_m_1']['text'] = '方法一：单日充值' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_m_2']['text'] = '方法二：历史累计充值' + +this['tool']['data']['y'] + '元', this['main']['box_2_lab_v_1']['text'] = (this['rolePriceData']['todayPrice'] || 0x0) + '/' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_v_2']['text'] = (this['rolePriceData']['allPrice'] || 0x0) + '/' + +this['tool']['data']['y'] + '元', this['main']['box_2_btn_copy']['skin'] = this['tool']['copyIcon'], this['main']['box_2_btn_get']['skin'] = this['tool']['getIcon'], this['main']['box_2_btn_copy']['visible'] = ![], this['main']['box_2_btn_get']['on'](Laya['Event']['CLICK'], this, function () {
      if (ykrwm8['rolePriceData']['is_vip'] == 0x0) {
        r_zsxtj['msg']('请先获取vip资格');return;
      }ykrwm8['main']['box_2_lab_wx']['text'] = this['rolePriceData']['vip_wx'], ykrwm8['main']['box_2_btn_copy']['visible'] = !![];
    }), this['main']['box_2_btn_copy']['on'](Laya['Event']['CLICK'], this, function () {
      ykrwm8['copyText'](this['rolePriceData']['vip_wx']);
    }), this['main']['box_2_addclick']['on'](Laya['Event']['CLICK'], this, function () {
      if (ykrwm8['rolePriceData']['is_vip'] == 0x0) return;this['main']['box_help_qrcode']['skin'] = ykrwm8['rolePriceData']['vip_qrcode'], ykrwm8['main']['box_help']['visible'] = !![];
    }), this['main']['box_help_close']['on'](Laya['Event']['CLICK'], this, function () {
      ykrwm8['main']['box_help']['visible'] = ![];
    }), this['main']['box_help_bg']['skin'] = this['tool']['data']['vip_customer_service_not_add'], this['main']['box_help_qrcode']['skin'] = ykrwm8['rolePriceData']['vip_qrcode'], this['main']['box_help_qrcode']['scaleX'] = 0xa0 / this['main']['box_help_qrcode']['width'], this['main']['box_help_qrcode']['scaleY'] = 0xa0 / this['main']['box_help_qrcode']['width'], this['main']['box_3_panel']['vScrollBar']['visible'] = ![], this['main']['box_3_panel']['vScrollBarSkin'] = 'common_atlas/scrollBar.png';
  }, uh6_c5['prototype']['initIcon'] = function () {
    this['icon'] = new Laya['Image'](), this['icon']['skin'] = this['tool']['data']['basics_image_url'], this['icon']['x'] = 0x0, this['icon']['y'] = 0xc8, this['icon']['width'] = 0x66, this['icon']['height'] = 0x6f, this['main']['addChild'](this['icon']), this['icon']['on'](Laya['Event']['MOUSE_DOWN'], this, this['iconPress']), this['icon']['on'](Laya['Event']['MOUSE_UP'], this, this['iconUp']), this['icon']['on'](Laya['Event']['MOUSE_WHEEL'], this, this['iconMove']), this['dragRect'] = new Laya['Rectangle'](-this['icon']['width'] / 0x2, 0x0, Laya['stage']['width'], Laya['stage']['height'] - this['icon']['height'] / 0x2);
  }, uh6_c5['prototype']['initEvent'] = function () {
    var a4b$91 = this;this['main']['btn_1']['on'](Laya['Event']['CLICK'], this, function () {
      if (a4b$91['page'] == 0x1) return;a4b$91['page1']();
    }), this['main']['btn_2']['on'](Laya['Event']['CLICK'], this, function () {
      if (a4b$91['page'] == 0x2) return;a4b$91['page2']();
    }), this['main']['btn_3']['on'](Laya['Event']['CLICK'], this, function () {
      if (a4b$91['page'] == 0x3) return;a4b$91['page3']();
    }), this['main']['btn_close']['on'](Laya['Event']['CLICK'], this, function () {
      a4b$91['main']['bg']['x'] = -0x2ee, a4b$91['icon']['visible'] = !![];
    });
  }, uh6_c5['prototype']['initBoard'] = function () {
    this['isInitBoard'] = !![], this['page1']();
  }, uh6_c5['prototype']['showBoard'] = function () {
    this['main']['bg']['x'] = 0x0, this['icon']['visible'] = ![];var xiz2oj = _rYE['selectedServer']['server_id'],
        $1ua_ = _rYE['selectedServer']['server_name'],
        cn56f = _rYE['roleId'],
        l2z3 = _rYE['roleName'],
        qp7r = r_s03l['sygame']['openid'],
        zt2sl = '&role_id=' + r_s03l['sygame']['role_id'] + '&channel=' + r_s03l['sygame']['channel'] + '&server_id=' + xiz2oj + '&server_name=' + $1ua_ + '&wecha_id=' + qp7r + '&role_id=' + cn56f + '&role_name=' + l2z3;this['tool']['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=sidebarApiRoleId' + zt2sl, this['rolePriceHandler']['bind'](this), this['roleError']['bind'](this));
  }, uh6_c5['prototype']['page1'] = function () {
    this['page'] = 0x1, this['main']['bg']['skin'] = this['tool']['data']['public_code'], this['main']['box_1_show']['visible'] = !![], this['main']['box_2_show']['visible'] = ![], this['main']['box_3_show']['visible'] = ![];
  }, uh6_c5['prototype']['page2'] = function () {
    this['page'] = 0x2, this['main']['bg']['skin'] = this['tool']['data']['vip_customer_service'], this['main']['box_1_show']['visible'] = ![], this['main']['box_2_show']['visible'] = !![], this['main']['box_3_show']['visible'] = ![];
  }, uh6_c5['prototype']['page3'] = function () {
    this['page'] = 0x3, this['main']['bg']['skin'] = this['tool']['data']['game_center_image_url'], this['main']['box_1_show']['visible'] = ![], this['main']['box_2_show']['visible'] = ![], this['main']['box_3_show']['visible'] = !![], this['sendBox'] || this['getBoxList'](0x0), this['sendBox'] = !![], r_c6_nh5 && r_c6_nh5['syClickOpenBox']();
  }, uh6_c5['prototype']['getBoxList'] = function (pgqr) {
    var qpre = this;r_c6_nh5 && r_c6_nh5['syGetBoxList']({ 'page': pgqr, 'count': 0xc })['then'](function (izx2jo) {
      var f5c6dn = izx2jo['data'];f5c6dn['status'] == 0x3e9 ? f5c6dn['data'] && f5c6dn['data']['length'] && (qpre['boxlist'] = qpre['boxlist']['concat'](f5c6dn['data']), pgqr++, qpre['getBoxList'](pgqr)) : qpre['boxListHandler']();
    });
  }, uh6_c5['prototype']['copyText'] = function (gqre) {
    try {
      wx['setClipboardData']({ 'data': gqre, 'success': function (n_ch) {
          console['log']('复制成功:', n_ch);
        } });
    } catch (tsvz) {}
  }, uh6_c5['prototype']['rolePriceHandler'] = function (gp7er) {
    this['rolePriceData'] = JSON['parse'](gp7er);switch (this['rolePriceData']['status']) {case 0x3e9:
        this['main']['box_2_lab_v_1']['text'] = (this['rolePriceData']['todayPrice'] || 0x0) + '/' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_v_2']['text'] = (this['rolePriceData']['allPrice'] || 0x0) + '/' + +this['tool']['data']['y'] + '元';break;case 0x3ea:
        break;case 0x3eb:
        break;}
  }, uh6_c5['prototype']['roleError'] = function () {}, uh6_c5['prototype']['boxListHandler'] = function () {
    var jt2zxs = function (lz3sv) {
      var efnpq = cqdnp['boxlist'][lz3sv],
          rgwmk = new r_y8koij['demoui']['BoxItemUI']();rgwmk['icon']['skin'] = efnpq['icon'], rgwmk['title']['text'] = efnpq['title'], rgwmk['x'] = 0xa0 * (lz3sv % 0x3), rgwmk['y'] = 0xa0 * (lz3sv / 0x3 ^ 0x0), cqdnp['main']['box_3_panel']['addChild'](rgwmk);var edqp = { 'appid': r_s03l['sygame']['appid'], 'game_id': efnpq['game_id'], 'jump_appid': efnpq['jump_appid'], 'jump_path': efnpq['jump_path'], 'tunnel_id': efnpq['tunnel_id'], 'uv': 0x0, 'wecha_id': r_s03l['sygame']['openid'] },
          tsjx = efnpq['preview_img'],
          e7gmrq = efnpq['jump_type'],
          s3vztl = efnpq['kf_session'];rgwmk['on'](Laya['Event']['CLICK'], cqdnp, function () {
        r_c6_nh5 && r_c6_nh5['syClickBox']({ 'game_id': efnpq['game_id'], 'tunnel_id': efnpq['tunnel_id'], 'jump_appid': efnpq['jump_appid'], 'jump_path': efnpq['jump_path'] })['then'](function (d7pge) {
          if (e7gmrq === '0') wx['navigateToMiniProgram']({ 'appId': edqp['jump_appid'], 'path': edqp['jump_path'], 'fail': function (ykjo8) {
              if (!tsjx) return;wx['previewImage']({ 'urls': [tsjx] });
            } });else {
            if (e7gmrq === '1') {
              if (!tsjx) return;wx['previewImage']({ 'urls': [tsjx] });
            } else {
              if (e7gmrq === '2') {
                if (!s3vztl) return;wx['openCustomerServiceConversation']({ 'sessionFrom': s3vztl, 'showMessageCard': !![], 'sendMessageTitle': '', 'sendMessagePath': '', 'sendMessageImg': '' });
              }
            }
          }
        });
      });
    },
        cqdnp = this;for (var h56_1 = 0x0; h56_1 < this['boxlist']['length']; h56_1++) {
      jt2zxs(h56_1);
    }
  }, uh6_c5['prototype']['boxListError'] = function () {}, uh6_c5['prototype']['boxClickHandler'] = function () {}, uh6_c5['prototype']['iconPress'] = function (efnq) {
    this['donwX'] = efnq['target']['x'], this['donwY'] = efnq['target']['y'], this['icon']['startDrag'](this['dragRect']), this['isMove'] = ![], this['isPress'] = !![];
  }, uh6_c5['prototype']['iconMove'] = function (dnpefq) {
    this['isMove'] = !![];
  }, uh6_c5['prototype']['iconUp'] = function (eqpg) {
    var sjt2 = eqpg['target']['x'],
        krwm8 = eqpg['target']['y'];this['icon']['stopDrag'](), sjt2 == this['donwX'] && this['donwY'] == krwm8 && (this['isInitBoard'] || this['initBoard'](), this['showBoard']()), this['isMove'] = ![], this['isPress'] = ![];
  }, uh6_c5;
}(),
    r_y8koij;(function (eqndf) {
  var g7ewrm;(function (n_65c) {
    var kywmr = function (au_h61) {
      r_s3tzv(rm8yk, au_h61);function rm8yk() {
        return au_h61['call'](this) || this;
      }return rm8yk['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), au_h61['prototype']['createChildren']['call'](this), this['createView'](eqndf['demoui']['BoxItemUI']['uiView']);
      }, rm8yk['uiView'] = { 'type': 'View', 'props': { 'width': 0xb4, 'height': 0xa0 }, 'child': [{ 'type': 'Image', 'props': { 'y': 0x3, 'x': 0x20, 'width': 0x73, 'var': 'icon', 'height': 0x73 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x79, 'x': -0x21, 'width': 0xb4, 'var': 'title', 'valign': 'middle', 'height': 0x22, 'fontSize': 0x16, 'color': '#441d1c', 'align': 'center' } }] }] }, rm8yk;
    }(laya['ui']['View']);n_65c['BoxItemUI'] = kywmr;
  })(g7ewrm = eqndf['demoui'] || (eqndf['demoui'] = {}));
})(r_y8koij || (r_y8koij = {})), function (jyio) {
  var er7mwg;(function (hau1b_) {
    var p7qg = function (wry8m) {
      r_s3tzv(_h1a6, wry8m);function _h1a6() {
        return wry8m['call'](this) || this;
      }return _h1a6['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), wry8m['prototype']['createChildren']['call'](this), this['createView'](jyio['demoui']['MainUI']['uiView']);
      }, _h1a6['uiView'] = { 'type': 'View', 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x2ee, 'top': 0x0, 'right': 0x0, 'left': 0x0, 'height': 0x536, 'bottom': 0x0 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x2ee, 'height': 0x536, 'centerY': 0x0 }, 'child': [{ 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x2ee, 'var': 'bg', 'height': 0x536 }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x2ee, 'visible': ![], 'var': 'box_1_show', 'height': 0x536, 'centerY': 0x0 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x253, 'x': 0x2e, 'width': 0x1d0, 'var': 'box_1_lab_info', 'leading': 0xa, 'height': 0x97, 'fontSize': 0x18, 'color': '#a959ee' } }, { 'type': 'HBox', 'props': { 'y': 0x2ee, 'x': 0x14, 'width': 0x1fe, 'space': 0x35, 'height': 0x78, 'align': 'top' }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x58, 'var': 'box_1_img_1', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_1', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0xa, 'x': 0xa, 'width': 0x58, 'var': 'box_1_img_2', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_2', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x14, 'x': 0x14, 'width': 0x58, 'var': 'box_1_img_3', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_3', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x1e, 'x': 0x1e, 'width': 0x58, 'var': 'box_1_img_4', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_4', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }] }] }, { 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'visible': ![], 'var': 'box_2_show' }, 'child': [{ 'type': 'HBox', 'props': { 'y': 0x220, 'x': 0x18, 'width': 0x1f4, 'space': 0x2c, 'height': 0x56, 'align': 'top' }, 'child': [{ 'type': 'Image', 'props': { 'y': 2.5, 'x': 0x0, 'width': 0x58, 'var': 'box_2_img_1', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_1', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0xc, 'x': 0xa, 'width': 0x58, 'var': 'box_2_img_2', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_2', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x16, 'x': 0x14, 'width': 0x58, 'var': 'box_2_img_3', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_3', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x20, 'x': 0x1e, 'width': 0x58, 'var': 'box_2_img_4', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_4', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x2a, 'x': 0x28, 'width': 0x58, 'var': 'box_2_img_5', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_5', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }] }, { 'type': 'Box', 'props': { 'y': 0x384, 'x': 0x0, 'width': 0x221, 'height': 0x44 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x0, 'x': 0x28, 'width': 0x122, 'var': 'box_2_lab_m_1', 'text': '方法一\uFF1A单日充值1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300' } }, { 'type': 'Text', 'props': { 'y': 0x1e, 'x': 0x28, 'width': 0x122, 'var': 'box_2_lab_m_2', 'text': '方法一\uFF1A历史累计充值1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300' } }, { 'type': 'Text', 'props': { 'y': 0x0, 'x': 0x141, 'width': 0xa4, 'var': 'box_2_lab_v_1', 'text': '1000/1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300', 'align': 'right' } }, { 'type': 'Text', 'props': { 'y': 0x1e, 'x': 0x141, 'width': 0xa4, 'var': 'box_2_lab_v_2', 'text': '1000/1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300', 'align': 'right' } }] }, { 'type': 'Image', 'props': { 'y': 0x1aa, 'x': 0x159, 'width': 0x66, 'var': 'box_2_btn_get', 'stateNum': 0x1, 'height': 0x26 } }, { 'type': 'Image', 'props': { 'y': 0x1aa, 'x': 0x159, 'width': 0x66, 'var': 'box_2_btn_copy', 'stateNum': 0x1, 'height': 0x26 } }, { 'type': 'Button', 'props': { 'y': 0x1d2, 'x': 0x126, 'width': 0xc9, 'var': 'box_2_addclick', 'stateNum': 0x1, 'height': 0x1b } }, { 'type': 'Text', 'props': { 'y': 0x13c, 'x': 0x17a, 'width': 0xa3, 'var': 'box_2_lab_wx', 'height': 0x1f, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'left' } }] }, { 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'visible': ![], 'var': 'box_3_show' }, 'child': [{ 'type': 'Panel', 'props': { 'y': 0xf5, 'x': 0x10, 'width': 0x201, 'var': 'box_3_panel', 'vScrollBarSkin': '', 'height': 0x29e } }] }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0x0, 'width': 0xbb, 'var': 'btn_1', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0xba, 'width': 0xbb, 'var': 'btn_2', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0x177, 'width': 0xbb, 'var': 'btn_3', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x203, 'x': 0x22e, 'width': 0x25, 'var': 'btn_close', 'height': 0x8f } }, { 'type': 'Box', 'props': { 'width': 0x2ee, 'visible': ![], 'var': 'box_help', 'height': 0x536 }, 'child': [{ 'type': 'Sprite', 'props': { 'y': 0x0, 'x': 0x0, 'mouseThrough': ![], 'alpha': 0.7 }, 'child': [{ 'type': 'Rect', 'props': { 'width': 0x2ee, 'lineWidth': 0x1, 'height': 0x536, 'fillColor': '#000000' } }] }, { 'type': 'Image', 'props': { 'y': 0x158, 'x': 0x28, 'width': 0x1d2, 'var': 'box_help_bg', 'height': 0x203 }, 'child': [{ 'type': 'Button', 'props': { 'y': -0x1, 'x': 0x1a0, 'width': 0x33, 'var': 'box_help_close', 'height': 0x28 } }, { 'type': 'Image', 'props': { 'y': 0x3f, 'x': 0x98, 'width': 0xa0, 'var': 'box_help_qrcode', 'height': 0xa0 } }] }] }] }] }] }, _h1a6;
    }(laya['ui']['View']);hau1b_['MainUI'] = p7qg;
  })(er7mwg = jyio['demoui'] || (jyio['demoui'] = {}));
}(r_y8koij || (r_y8koij = {})), function (qdpgfe) {
  var gre7mw;(function (p7qr) {
    var q7preg = function (qdn) {
      r_s3tzv(gqf, qdn);function gqf() {
        return qdn['call'](this) || this;
      }return gqf['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), qdn['prototype']['createChildren']['call'](this), this['createView'](qdpgfe['demoui']['ToastUI']['uiView']);
      }, gqf['uiView'] = { 'type': 'View', 'props': { 'width': 0x2ee, 'height': 0x536 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x12c, 'height': 0x32, 'centerY': 0x0, 'centerX': 0x0 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x12c, 'height': 0x32, 'centerX': 0x0, 'alpha': 0.5 }, 'child': [{ 'type': 'Rect', 'props': { 'width': 0x12c, 'lineWidth': 0x1, 'height': 0x32, 'fillColor': '#382f2f' } }] }, { 'type': 'Text', 'props': { 'width': 0x12c, 'var': 'lab_msg', 'valign': 'middle', 'text': 'text', 'height': 0x32, 'fontSize': 0x18, 'color': '#ffffff', 'align': 'center' } }] }] }, gqf;
    }(laya['ui']['View']);p7qr['ToastUI'] = q7preg;
  })(gre7mw = qdpgfe['demoui'] || (qdpgfe['demoui'] = {}));
}(r_y8koij || (r_y8koij = {}));var r_zsxtj = function () {
  function ncfqp() {}return ncfqp['init'] = function () {
    !this['ui'] && (this['ui'] = new r_y8koij['demoui']['ToastUI'](), this['ui']['visible'] = ![], Laya['stage']['addChild'](this['ui']));
  }, ncfqp['msg'] = function (efdqnp) {
    var ixyjo8 = this;!this['ui'] && ncfqp['init'](), this['ui']['visible'] = !![], this['ui']['lab_msg']['text'] = efdqnp, clearTimeout(this['interval']), this['interval'] = setTimeout(function () {
      ixyjo8['ui']['visible'] = ![];
    }, 0x7d0);
  }, ncfqp;
}();window['minitool'] = r_bau;