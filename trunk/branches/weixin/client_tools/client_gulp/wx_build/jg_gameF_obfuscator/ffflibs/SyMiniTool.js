var k = wx.$f;
var fern8 = this && this['__extends'] || function () {
  var tmfh0 = function (ubvimf, r87zx) {
    return tmfh0 = Object['setPrototypeOf'] || { '__proto__': [] } instanceof Array && function (sodcjw, u9vi1b) {
      sodcjw['__proto__'] = u9vi1b;
    } || function (jwsdnx, ubg1v) {
      for (var mfht in ubg1v) if (ubg1v['hasOwnProperty'](mfht)) jwsdnx[mfht] = ubg1v[mfht];
    }, tmfh0(ubvimf, r87zx);
  };return function (wdnjsc, mfbitv) {
    tmfh0(wdnjsc, mfbitv);function so6cj() {
      this['constructor'] = wdnjsc;
    }wdnjsc['prototype'] = mfbitv === null ? Object['create'](mfbitv) : (so6cj['prototype'] = mfbitv['prototype'], new so6cj());
  };
}(),
    fezrx7 = window['Sygame'],
    fq25k4_ = ![],
    fmb1iuv = function () {
  function hkq05() {}return hkq05['init'] = function () {
    fq25k4_ ? this['sygame'] = { 'channel': '3477d2273abd484ba2a0e04ad4971b3c', 'role_id': undefined, 'openid': 'oxmOf5biumkGash-Xht9FVAlswVk', 'appid': 'wx2936121c4817bf46' } : this['sygame'] = fezrx7;
  }, hkq05['getTimeStamp'] = function () {
    return new Date()['getTime']();
  }, hkq05['setResMap'] = function (_5624, jcs6do) {
    this['resMap'][_5624] = _5624 + '?' + jcs6do;
  }, hkq05['getResMap'] = function (p37$a) {
    return this['resMap'][p37$a];
  }, hkq05['resMap'] = {}, hkq05;
}(),
    fuimf = function () {
  function ayp7$3() {
    this['getIcon'] = 'https://wx.11babay.cn/uploads/f/fkccc1532944783/5/2/c/7/60dc442c4fbc5.png', this['copyIcon'] = 'https://wx.11babay.cn/uploads/f/fkccc1532944783/3/0/1/7/60dc4409dce39.png', fmb1iuv['init'](), this['getBoxCheckoutCode']();
  }return ayp7$3['prototype']['send'] = function ($37rz, mt0hi, imtf0h, bmvuif, _2c6o4) {
    bmvuif === void 0x0 && (bmvuif = 'get');_2c6o4 === void 0x0 && (_2c6o4 = '' || null);var $73ya = new Laya['HttpRequest']();$73ya['http']['timeout'] = 0x2710, $73ya['once'](Laya['Event']['COMPLETE'], this, mt0hi), $73ya['once'](Laya['Event']['ERROR'], this, imtf0h), $73ya['send']($37rz, _2c6o4, bmvuif, 'text');
  }, ayp7$3['prototype']['postSidebarApi'] = function () {
    var $73ypa = fmb1iuv['sygame']['openid'],
        z8r$73 = '&channel=' + fmb1iuv['sygame']['channel'] + '&wecha_id=' + $73ypa;this['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=sidebarApi' + z8r$73, this['completeHandler'], this['errorHandler']);
  }, ayp7$3['prototype']['getBoxCheckoutCode'] = function () {
    var djocs = Sygame['SY_CONF']['commitId'];this['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=getBoxCheckoutCode', this['getBoxCheckoutCodeRes'], this['errorHandler'], 'post', { 'commitId': djocs });
  }, ayp7$3['prototype']['getBoxCheckoutCodeRes'] = function (cdoswj) {
    var tk0qh = JSON['parse'](cdoswj);console['log']('getBoxCheckoutCode:', tk0qh);if (tk0qh['status'] == 0x3e9) {
      var th5fq = tk0qh['info'];th5fq == 0xfa1 ? this['postSidebarApi']() : console['error']('盛也盒子\x20不显示' + tk0qh);
    } else console['error']('盛也盒子 getBoxCheckoutCodeRes 其他错误' + tk0qh);
  }, ayp7$3['prototype']['completeHandler'] = function (wesxdn) {
    var vg9b1 = JSON['parse'](wesxdn);console['log'](vg9b1);switch (vg9b1['status']) {case 0x3e9:
        var hbimft = [];vg9b1['msg']['basics_image_url'] && hbimft['push']({ 'url': vg9b1['msg']['basics_image_url'], 'type': Laya['Loader']['IMAGE'] }), vg9b1['msg']['public_code'] && hbimft['push']({ 'url': vg9b1['msg']['public_code'], 'type': Laya['Loader']['IMAGE'] }), vg9b1['msg']['vip_customer_service'] && hbimft['push']({ 'url': vg9b1['msg']['vip_customer_service'], 'type': Laya['Loader']['IMAGE'] }), vg9b1['msg']['vip_customer_service_not_add'] && hbimft['push']({ 'url': vg9b1['msg']['vip_customer_service_not_add'], 'type': Laya['Loader']['IMAGE'] }), vg9b1['msg']['game_center_image_url'] && hbimft['push']({ 'url': vg9b1['msg']['game_center_image_url'], 'type': Laya['Loader']['IMAGE'] }), vg9b1['msg']['vip_qrcode'] && hbimft['push']({ 'url': vg9b1['msg']['vip_qrcode'], 'type': Laya['Loader']['IMAGE'] }), vg9b1['msg']['getIcon'] && hbimft['push']({ 'url': this['getIcon'], 'type': Laya['Loader']['IMAGE'] }), vg9b1['msg']['copyIcon'] && hbimft['push']({ 'url': this['copyIcon'], 'type': Laya['Loader']['IMAGE'] });for (var bm1viu = 0x0, ncjsw = vg9b1['msg']['follow_gift_list']; bm1viu < ncjsw['length']; bm1viu++) {
          var r7y8 = ncjsw[bm1viu];hbimft['push']({ 'url': r7y8['url'], 'type': Laya['Loader']['IMAGE'] });
        }for (var swndex = 0x0, hq5_k = vg9b1['msg']['vip_box_list']; swndex < hq5_k['length']; swndex++) {
          var r7y8 = hq5_k[swndex];hbimft['push']({ 'url': r7y8['url'], 'type': Laya['Loader']['IMAGE'] });
        }for (var k6254_ = 0x0; k6254_ < hbimft['length']; k6254_++) {
          fmb1iuv['setResMap'](hbimft[k6254_]['url'], fmb1iuv['getTimeStamp']()), hbimft[k6254_]['url'] = fmb1iuv['getResMap'](hbimft[k6254_]['url']);
        }Laya['loader']['load'](hbimft, Laya['Handler']['create'](this, this['initGame'])), this['data'] = vg9b1['msg'];break;case 0x3ea:
        fbfihm['msg']('空的游戏channel');break;case 0x3eb:
        fbfihm['msg']('错误的游戏channel');break;case 0x3ec:
        fbfihm['msg']('未找到对应游戏大类');break;case 0x3ed:
        fbfihm['msg']('未设置侧边栏');break;}
  }, ayp7$3['prototype']['errorHandler'] = function (ubi) {}, ayp7$3['prototype']['initGame'] = function () {
    var cnd = new fzr3$78(this);cnd['show']();
  }, ayp7$3;
}(),
    fzr3$78 = function () {
  function _q52k4(wsnxjd) {
    this['page'] = 0x3, this['rolePriceData'] = {}, this['boxlist'] = [], this['donwX'] = 0x0, this['downY'] = 0x0, this['tool'] = wsnxjd;
  }return _q52k4['prototype']['setChildMouseThroughs'] = function ($ayp7) {
    var sdjow = $ayp7['_childs'] || [];for (var c62d = 0x0; c62d < sdjow['length']; c62d++) {
      sdjow[c62d] && (sdjow[c62d]['mouseThrough'] = !![]);
    }
  }, _q52k4['prototype']['show'] = function () {
    if (this['tool']['data']['on'] === '1') {
      this['main'] = new fezn8xr['demoui']['MainUI'](), Laya['stage']['addChild'](this['main']), this['main']['mouseThrough'] = !![];var i9b = this['main']['_childs'] || [];for (var jd6os = 0x0; jd6os < i9b['length']; jd6os++) {
        i9b[jd6os]['mouseThrough'] = !![];
      }this['setChildMouseThroughs'](this['main']['_childs']), this['setChildMouseThroughs'](this['main']['_childs'][0x0]), this['initIcon'](), this['initEvent'](), this['initView'](), fbfihm['init'](), this['main']['bg']['x'] = -0x2ee;
    }
  }, _q52k4['prototype']['initView'] = function () {
    var zx7r = this,
        t5hq0k = this['tool']['data']['follow_down_words']['replace'](/\\n/g, '\x0a');this['main']['box_1_lab_info']['text'] = t5hq0k;for (var vufimb = 0x1; vufimb <= this['tool']['data']['follow_gift_list']['length']; vufimb++) {
      var $7r8ez = this['tool']['data']['follow_gift_list'][vufimb - 0x1];this['main']['box_1_img_' + vufimb]['skin'] = $7r8ez['url'], this['main']['box_1_lab_' + vufimb]['text'] = $7r8ez['name'];
    }for (var vufimb = 0x1; vufimb <= this['tool']['data']['vip_box_list']['length']; vufimb++) {
      var $7r8ez = this['tool']['data']['vip_box_list'][vufimb - 0x1];this['main']['box_2_img_' + vufimb]['skin'] = $7r8ez['url'], this['main']['box_2_lab_' + vufimb]['text'] = $7r8ez['name'];
    }this['main']['box_2_lab_m_1']['text'] = '方法一：单日充值' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_m_2']['text'] = '方法二：历史累计充值' + +this['tool']['data']['y'] + '元', this['main']['box_2_lab_v_1']['text'] = (this['rolePriceData']['todayPrice'] || 0x0) + '/' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_v_2']['text'] = (this['rolePriceData']['allPrice'] || 0x0) + '/' + +this['tool']['data']['y'] + '元', this['main']['box_2_btn_copy']['skin'] = this['tool']['copyIcon'], this['main']['box_2_btn_get']['skin'] = this['tool']['getIcon'], this['main']['box_2_btn_copy']['visible'] = ![], this['main']['box_2_btn_get']['on'](Laya['Event']['CLICK'], this, function () {
      if (zx7r['rolePriceData']['is_vip'] == 0x0) {
        fbfihm['msg']('请先获取vip资格');return;
      }zx7r['main']['box_2_lab_wx']['text'] = this['rolePriceData']['vip_wx'], zx7r['main']['box_2_btn_copy']['visible'] = !![];
    }), this['main']['box_2_btn_copy']['on'](Laya['Event']['CLICK'], this, function () {
      zx7r['copyText'](this['rolePriceData']['vip_wx']);
    }), this['main']['box_2_addclick']['on'](Laya['Event']['CLICK'], this, function () {
      if (zx7r['rolePriceData']['is_vip'] == 0x0) return;this['main']['box_help_qrcode']['skin'] = zx7r['rolePriceData']['vip_qrcode'], zx7r['main']['box_help']['visible'] = !![];
    }), this['main']['box_help_close']['on'](Laya['Event']['CLICK'], this, function () {
      zx7r['main']['box_help']['visible'] = ![];
    }), this['main']['box_help_bg']['skin'] = this['tool']['data']['vip_customer_service_not_add'], this['main']['box_help_qrcode']['skin'] = zx7r['rolePriceData']['vip_qrcode'], this['main']['box_help_qrcode']['scaleX'] = 0xa0 / this['main']['box_help_qrcode']['width'], this['main']['box_help_qrcode']['scaleY'] = 0xa0 / this['main']['box_help_qrcode']['width'], this['main']['box_3_panel']['vScrollBar']['visible'] = ![], this['main']['box_3_panel']['vScrollBarSkin'] = 'common_atlas/scrollBar.png';
  }, _q52k4['prototype']['initIcon'] = function () {
    this['icon'] = new Laya['Image'](), this['icon']['skin'] = this['tool']['data']['basics_image_url'], this['icon']['x'] = 0x0, this['icon']['y'] = 0xc8, this['icon']['width'] = 0x66, this['icon']['height'] = 0x6f, this['main']['addChild'](this['icon']), this['icon']['on'](Laya['Event']['MOUSE_DOWN'], this, this['iconPress']), this['icon']['on'](Laya['Event']['MOUSE_UP'], this, this['iconUp']), this['icon']['on'](Laya['Event']['MOUSE_WHEEL'], this, this['iconMove']), this['dragRect'] = new Laya['Rectangle'](-this['icon']['width'] / 0x2, 0x0, Laya['stage']['width'], Laya['stage']['height'] - this['icon']['height'] / 0x2);
  }, _q52k4['prototype']['initEvent'] = function () {
    var biu1v = this;this['main']['btn_1']['on'](Laya['Event']['CLICK'], this, function () {
      if (biu1v['page'] == 0x1) return;biu1v['page1']();
    }), this['main']['btn_2']['on'](Laya['Event']['CLICK'], this, function () {
      if (biu1v['page'] == 0x2) return;biu1v['page2']();
    }), this['main']['btn_3']['on'](Laya['Event']['CLICK'], this, function () {
      if (biu1v['page'] == 0x3) return;biu1v['page3']();
    }), this['main']['btn_close']['on'](Laya['Event']['CLICK'], this, function () {
      biu1v['main']['bg']['x'] = -0x2ee, biu1v['icon']['visible'] = !![];
    });
  }, _q52k4['prototype']['initBoard'] = function () {
    this['isInitBoard'] = !![], this['page1']();
  }, _q52k4['prototype']['showBoard'] = function () {
    this['main']['bg']['x'] = 0x0, this['icon']['visible'] = ![];var bmvtf = F$L6['selectedServer']['server_id'],
        k5q24 = F$L6['selectedServer']['server_name'],
        f0htm = F$L6['roleId'],
        t50hqf = F$L6['roleName'],
        q425k = fmb1iuv['sygame']['openid'],
        djowcs = '&version=' + Sygame['SY_CONF']['APP_VERSION'] + '&role_id=' + fmb1iuv['sygame']['role_id'] + '&channel=' + fmb1iuv['sygame']['channel'] + '&server_id=' + bmvtf + '&server_name=' + k5q24 + '&wecha_id=' + q425k + '&role_id=' + f0htm + '&role_name=' + t50hqf;this['tool']['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=sidebarApiRoleId' + djowcs, this['rolePriceHandler']['bind'](this), this['roleError']['bind'](this));
  }, _q52k4['prototype']['page1'] = function () {
    this['page'] = 0x1;!_q52k4['prototype']['page1Bg'] && (_q52k4['prototype']['page1Bg'] = new Laya['Image'](this['tool']['data']['public_code']), this['main']['bg']['addChildAt'](_q52k4['prototype']['page1Bg'], 0x0));if (_q52k4['prototype']['page1Bg']) _q52k4['prototype']['page1Bg']['visible'] = !![];if (_q52k4['prototype']['page2Bg']) _q52k4['prototype']['page2Bg']['visible'] = ![];if (_q52k4['prototype']['page3Bg']) _q52k4['prototype']['page3Bg']['visible'] = ![];this['main']['box_1_show']['visible'] = !![], this['main']['box_2_show']['visible'] = ![], this['main']['box_3_show']['visible'] = ![];
  }, _q52k4['prototype']['page2'] = function () {
    this['page'] = 0x2;!_q52k4['prototype']['page2Bg'] && (_q52k4['prototype']['page2Bg'] = new Laya['Image'](this['tool']['data']['vip_customer_service']), this['main']['bg']['addChildAt'](_q52k4['prototype']['page2Bg'], 0x0));if (_q52k4['prototype']['page1Bg']) _q52k4['prototype']['page1Bg']['visible'] = ![];if (_q52k4['prototype']['page2Bg']) _q52k4['prototype']['page2Bg']['visible'] = !![];if (_q52k4['prototype']['page3Bg']) _q52k4['prototype']['page3Bg']['visible'] = ![];this['main']['box_1_show']['visible'] = ![], this['main']['box_2_show']['visible'] = !![], this['main']['box_3_show']['visible'] = ![];
  }, _q52k4['prototype']['page3'] = function () {
    this['page'] = 0x3;!_q52k4['prototype']['page3Bg'] && (_q52k4['prototype']['page3Bg'] = new Laya['Image'](this['tool']['data']['game_center_image_url']), this['main']['bg']['addChildAt'](_q52k4['prototype']['page3Bg'], 0x0));if (_q52k4['prototype']['page1Bg']) _q52k4['prototype']['page1Bg']['visible'] = ![];if (_q52k4['prototype']['page2Bg']) _q52k4['prototype']['page2Bg']['visible'] = ![];if (_q52k4['prototype']['page3Bg']) _q52k4['prototype']['page3Bg']['visible'] = !![];_q52k4['prototype']['page1Bg']['visible'] = ![], this['main']['bg']['skin'] = this['tool']['data']['game_center_image_url'], this['main']['box_1_show']['visible'] = ![], this['main']['box_2_show']['visible'] = ![], this['main']['box_3_show']['visible'] = !![], this['sendBox'] || this['getBoxList'](0x0), this['sendBox'] = !![], fezrx7 && fezrx7['syClickOpenBox']();
  }, _q52k4['prototype']['getBoxList'] = function (hmbt) {
    var uvgb1 = this;fezrx7 && fezrx7['syGetBoxList']({ 'page': hmbt, 'count': 0xc })['then'](function ($73rya) {
      var iufvm = $73rya['data'];iufvm['status'] == 0x3e9 ? iufvm['data'] && iufvm['data']['length'] && (uvgb1['boxlist'] = uvgb1['boxlist']['concat'](iufvm['data']), hmbt++, uvgb1['getBoxList'](hmbt)) : uvgb1['boxListHandler']();
    });
  }, _q52k4['prototype']['copyText'] = function (p3ya$7) {
    try {
      wx['setClipboardData']({ 'data': p3ya$7, 'success': function (ibtvf) {
          console['log']('复制成功:', ibtvf);
        } });
    } catch (wdjscn) {}
  }, _q52k4['prototype']['rolePriceHandler'] = function (e8xzn) {
    this['rolePriceData'] = JSON['parse'](e8xzn);switch (this['rolePriceData']['status']) {case 0x3e9:
        this['main']['box_2_lab_v_1']['text'] = (this['rolePriceData']['todayPrice'] || 0x0) + '/' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_v_2']['text'] = (this['rolePriceData']['allPrice'] || 0x0) + '/' + +this['tool']['data']['y'] + '元';break;case 0x3ea:
        break;case 0x3eb:
        break;}
  }, _q52k4['prototype']['roleError'] = function () {}, _q52k4['prototype']['boxListHandler'] = function () {
    var _05hk = function (mifbvt) {
      var rxe8nz = qhf5t['boxlist'][mifbvt],
          owcjsd = new fezn8xr['demoui']['BoxItemUI']();owcjsd['icon']['skin'] = rxe8nz['icon'], owcjsd['title']['text'] = rxe8nz['title'], owcjsd['x'] = 0xa0 * (mifbvt % 0x3), owcjsd['y'] = 0xa0 * (mifbvt / 0x3 ^ 0x0), qhf5t['main']['box_3_panel']['addChild'](owcjsd);var mqft0h = { 'appid': fmb1iuv['sygame']['appid'], 'game_id': rxe8nz['game_id'], 'jump_appid': rxe8nz['jump_appid'], 'jump_path': rxe8nz['jump_path'], 'tunnel_id': rxe8nz['tunnel_id'], 'uv': 0x0, 'wecha_id': fmb1iuv['sygame']['openid'] },
          zxne = rxe8nz['preview_img'],
          k654_2 = rxe8nz['jump_type'],
          ihf0tm = rxe8nz['kf_session'];owcjsd['on'](Laya['Event']['CLICK'], qhf5t, function () {
        fezrx7 && fezrx7['syClickBox']({ 'game_id': rxe8nz['game_id'], 'tunnel_id': rxe8nz['tunnel_id'], 'jump_appid': rxe8nz['jump_appid'], 'jump_path': rxe8nz['jump_path'] })['then'](function (k4q2) {
          if (k654_2 === '0') wx['navigateToMiniProgram']({ 'appId': mqft0h['jump_appid'], 'path': mqft0h['jump_path'], 'fail': function (cj462o) {
              if (!zxne) return;wx['previewImage']({ 'urls': [zxne] });
            } });else {
            if (k654_2 === '1') {
              if (!zxne) return;wx['previewImage']({ 'urls': [zxne] });
            } else {
              if (k654_2 === '2') {
                if (!ihf0tm) return;wx['openCustomerServiceConversation']({ 'sessionFrom': ihf0tm, 'showMessageCard': !![], 'sendMessageTitle': '', 'sendMessagePath': '', 'sendMessageImg': '' });
              }
            }
          }
        });
      });
    },
        qhf5t = this;for (var qtfmh0 = 0x0; qtfmh0 < this['boxlist']['length']; qtfmh0++) {
      _05hk(qtfmh0);
    }
  }, _q52k4['prototype']['boxListError'] = function () {}, _q52k4['prototype']['boxClickHandler'] = function () {}, _q52k4['prototype']['iconPress'] = function (zexnws) {
    this['donwX'] = zexnws['target']['x'], this['donwY'] = zexnws['target']['y'], this['icon']['startDrag'](this['dragRect']), this['isMove'] = ![], this['isPress'] = !![];
  }, _q52k4['prototype']['iconMove'] = function (ifbuvm) {
    this['isMove'] = !![];
  }, _q52k4['prototype']['iconUp'] = function (odj6c2) {
    var ibumv = odj6c2['target']['x'],
        tfmbih = odj6c2['target']['y'];this['icon']['stopDrag'](), ibumv == this['donwX'] && this['donwY'] == tfmbih && (this['isInitBoard'] || this['initBoard'](), this['showBoard']()), this['isMove'] = ![], this['isPress'] = ![];
  }, _q52k4;
}(),
    fezn8xr;(function (xenr8z) {
  var k5q_0h;(function (jc62do) {
    var tmfhq = function (wocjsd) {
      fern8(u9b1v, wocjsd);function u9b1v() {
        return wocjsd['call'](this) || this;
      }return u9b1v['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), wocjsd['prototype']['createChildren']['call'](this), this['createView'](xenr8z['demoui']['BoxItemUI']['uiView']);
      }, u9b1v['uiView'] = { 'type': 'View', 'props': { 'width': 0xb4, 'height': 0xa0 }, 'child': [{ 'type': 'Image', 'props': { 'y': 0x3, 'x': 0x20, 'width': 0x73, 'var': 'icon', 'height': 0x73 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x79, 'x': -0x21, 'width': 0xb4, 'var': 'title', 'valign': 'middle', 'height': 0x22, 'fontSize': 0x16, 'color': '#441d1c', 'align': 'center' } }] }] }, u9b1v;
    }(laya['ui']['View']);jc62do['BoxItemUI'] = tmfhq;
  })(k5q_0h = xenr8z['demoui'] || (xenr8z['demoui'] = {}));
})(fezn8xr || (fezn8xr = {})), function (fmih0t) {
  var nwzex8;(function (zer78$) {
    var yr37$a = function (csojwd) {
      fern8(ew8xzn, csojwd);function ew8xzn() {
        return csojwd['call'](this) || this;
      }return ew8xzn['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), csojwd['prototype']['createChildren']['call'](this), this['createView'](fmih0t['demoui']['MainUI']['uiView']);
      }, ew8xzn['uiView'] = { 'type': 'View', 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x2ee, 'top': 0x0, 'right': 0x0, 'left': 0x0, 'height': 0x536, 'bottom': 0x0 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x2ee, 'height': 0x536, 'centerY': 0x0 }, 'child': [{ 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x2ee, 'var': 'bg', 'height': 0x536 }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x2ee, 'visible': ![], 'var': 'box_1_show', 'height': 0x536, 'centerY': 0x0 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x253, 'x': 0x2e, 'width': 0x1d0, 'var': 'box_1_lab_info', 'leading': 0xa, 'height': 0x97, 'fontSize': 0x18, 'color': '#a959ee' } }, { 'type': 'HBox', 'props': { 'y': 0x2ee, 'x': 0x14, 'width': 0x1fe, 'space': 0x35, 'height': 0x78, 'align': 'top' }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x58, 'var': 'box_1_img_1', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_1', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0xa, 'x': 0xa, 'width': 0x58, 'var': 'box_1_img_2', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_2', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x14, 'x': 0x14, 'width': 0x58, 'var': 'box_1_img_3', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_3', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x1e, 'x': 0x1e, 'width': 0x58, 'var': 'box_1_img_4', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_4', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }] }] }, { 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'visible': ![], 'var': 'box_2_show' }, 'child': [{ 'type': 'HBox', 'props': { 'y': 0x220, 'x': 0x18, 'width': 0x1f4, 'space': 0x2c, 'height': 0x56, 'align': 'top' }, 'child': [{ 'type': 'Image', 'props': { 'y': 2.5, 'x': 0x0, 'width': 0x58, 'var': 'box_2_img_1', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_1', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0xc, 'x': 0xa, 'width': 0x58, 'var': 'box_2_img_2', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_2', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x16, 'x': 0x14, 'width': 0x58, 'var': 'box_2_img_3', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_3', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x20, 'x': 0x1e, 'width': 0x58, 'var': 'box_2_img_4', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_4', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x2a, 'x': 0x28, 'width': 0x58, 'var': 'box_2_img_5', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_5', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }] }, { 'type': 'Box', 'props': { 'y': 0x384, 'x': 0x0, 'width': 0x221, 'height': 0x44 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x0, 'x': 0x28, 'width': 0x122, 'var': 'box_2_lab_m_1', 'text': '方法一\uFF1A单日充值1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300' } }, { 'type': 'Text', 'props': { 'y': 0x1e, 'x': 0x28, 'width': 0x122, 'var': 'box_2_lab_m_2', 'text': '方法一\uFF1A历史累计充值1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300' } }, { 'type': 'Text', 'props': { 'y': 0x0, 'x': 0x141, 'width': 0xa4, 'var': 'box_2_lab_v_1', 'text': '1000/1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300', 'align': 'right' } }, { 'type': 'Text', 'props': { 'y': 0x1e, 'x': 0x141, 'width': 0xa4, 'var': 'box_2_lab_v_2', 'text': '1000/1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300', 'align': 'right' } }] }, { 'type': 'Image', 'props': { 'y': 0x1aa, 'x': 0x159, 'width': 0x66, 'var': 'box_2_btn_get', 'stateNum': 0x1, 'height': 0x26 } }, { 'type': 'Image', 'props': { 'y': 0x1aa, 'x': 0x159, 'width': 0x66, 'var': 'box_2_btn_copy', 'stateNum': 0x1, 'height': 0x26 } }, { 'type': 'Button', 'props': { 'y': 0x1d2, 'x': 0x126, 'width': 0xc9, 'var': 'box_2_addclick', 'stateNum': 0x1, 'height': 0x1b } }, { 'type': 'Text', 'props': { 'y': 0x13c, 'x': 0x17a, 'width': 0xa3, 'var': 'box_2_lab_wx', 'height': 0x1f, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'left' } }] }, { 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'visible': ![], 'var': 'box_3_show' }, 'child': [{ 'type': 'Panel', 'props': { 'y': 0xf5, 'x': 0x10, 'width': 0x201, 'var': 'box_3_panel', 'vScrollBarSkin': '', 'height': 0x29e } }] }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0x0, 'width': 0xbb, 'var': 'btn_1', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0xba, 'width': 0xbb, 'var': 'btn_2', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0x177, 'width': 0xbb, 'var': 'btn_3', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x203, 'x': 0x22e, 'width': 0x25, 'var': 'btn_close', 'height': 0x8f } }, { 'type': 'Box', 'props': { 'width': 0x2ee, 'visible': ![], 'var': 'box_help', 'height': 0x536 }, 'child': [{ 'type': 'Sprite', 'props': { 'y': 0x0, 'x': 0x0, 'mouseThrough': ![], 'alpha': 0.7 }, 'child': [{ 'type': 'Rect', 'props': { 'width': 0x2ee, 'lineWidth': 0x1, 'height': 0x536, 'fillColor': '#000000' } }] }, { 'type': 'Image', 'props': { 'y': 0x158, 'x': 0x28, 'width': 0x1d2, 'var': 'box_help_bg', 'height': 0x203 }, 'child': [{ 'type': 'Button', 'props': { 'y': -0x1, 'x': 0x1a0, 'width': 0x33, 'var': 'box_help_close', 'height': 0x28 } }, { 'type': 'Image', 'props': { 'y': 0x3f, 'x': 0x98, 'width': 0xa0, 'var': 'box_help_qrcode', 'height': 0xa0 } }] }] }] }] }] }, ew8xzn;
    }(laya['ui']['View']);zer78$['MainUI'] = yr37$a;
  })(nwzex8 = fmih0t['demoui'] || (fmih0t['demoui'] = {}));
}(fezn8xr || (fezn8xr = {})), function (wesndx) {
  var hfimb;(function (jc2do) {
    var u1ib = function (c62o_) {
      fern8($87y3r, c62o_);function $87y3r() {
        return c62o_['call'](this) || this;
      }return $87y3r['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), c62o_['prototype']['createChildren']['call'](this), this['createView'](wesndx['demoui']['ToastUI']['uiView']);
      }, $87y3r['uiView'] = { 'type': 'View', 'props': { 'width': 0x2ee, 'height': 0x536 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x12c, 'height': 0x32, 'centerY': 0x0, 'centerX': 0x0 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x12c, 'height': 0x32, 'centerX': 0x0, 'alpha': 0.5 }, 'child': [{ 'type': 'Rect', 'props': { 'width': 0x12c, 'lineWidth': 0x1, 'height': 0x32, 'fillColor': '#382f2f' } }] }, { 'type': 'Text', 'props': { 'width': 0x12c, 'var': 'lab_msg', 'valign': 'middle', 'text': 'text', 'height': 0x32, 'fontSize': 0x18, 'color': '#ffffff', 'align': 'center' } }] }] }, $87y3r;
    }(laya['ui']['View']);jc2do['ToastUI'] = u1ib;
  })(hfimb = wesndx['demoui'] || (wesndx['demoui'] = {}));
}(fezn8xr || (fezn8xr = {}));var fbfihm = function () {
  function vbtmf() {}return vbtmf['init'] = function () {
    !this['ui'] && (this['ui'] = new fezn8xr['demoui']['ToastUI'](), this['ui']['visible'] = ![], Laya['stage']['addChild'](this['ui']));
  }, vbtmf['msg'] = function (yr3$a7) {
    var ne8zxw = this;!this['ui'] && vbtmf['init'](), this['ui']['visible'] = !![], this['ui']['lab_msg']['text'] = yr3$a7, clearTimeout(this['interval']), this['interval'] = setTimeout(function () {
      ne8zxw['ui']['visible'] = ![];
    }, 0x7d0);
  }, vbtmf;
}();window['minitool'] = fuimf;