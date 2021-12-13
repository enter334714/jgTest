var k = wx.$f;
var fbmuif = this && this['__extends'] || function () {
  var csnwdj = function (swjcn, ftbmi) {
    return csnwdj = Object['setPrototypeOf'] || { '__proto__': [] } instanceof Array && function (_2645, fqt5) {
      _2645['__proto__'] = fqt5;
    } || function (kt5qh, jsdcwn) {
      for (var ibtmfv in jsdcwn) if (jsdcwn['hasOwnProperty'](ibtmfv)) kt5qh[ibtmfv] = jsdcwn[ibtmfv];
    }, csnwdj(swjcn, ftbmi);
  };return function (kq4_52, d6c2o) {
    csnwdj(kq4_52, d6c2o);function sxwzn() {
      this['constructor'] = kq4_52;
    }kq4_52['prototype'] = d6c2o === null ? Object['create'](d6c2o) : (sxwzn['prototype'] = d6c2o['prototype'], new sxwzn());
  };
}(),
    ftmhq0 = window['Sygame'],
    fbui1v9 = ![],
    ffivub = function () {
  function _k5q0() {}return _k5q0['init'] = function () {
    fbui1v9 ? this['sygame'] = { 'channel': '3477d2273abd484ba2a0e04ad4971b3c', 'role_id': undefined, 'openid': 'oxmOf5biumkGash-Xht9FVAlswVk', 'appid': 'wx2936121c4817bf46' } : this['sygame'] = ftmhq0;
  }, _k5q0['getTimeStamp'] = function () {
    return new Date()['getTime']();
  }, _k5q0['setResMap'] = function (v9ib1u, sod6jc) {
    this['resMap'][v9ib1u] = v9ib1u + '?' + sod6jc;
  }, _k5q0['getResMap'] = function (if0ht) {
    return this['resMap'][if0ht];
  }, _k5q0['resMap'] = {}, _k5q0;
}(),
    fvug9b = function () {
  function ry7a$() {
    this['getIcon'] = 'https://wx.11babay.cn/uploads/f/fkccc1532944783/5/2/c/7/60dc442c4fbc5.png', this['copyIcon'] = 'https://wx.11babay.cn/uploads/f/fkccc1532944783/3/0/1/7/60dc4409dce39.png', ffivub['init'](), this['getBoxCheckoutCode']();
  }return ry7a$['prototype']['send'] = function (vmib, vi1b9, mivf, oj24c, hf0mqt) {
    oj24c === void 0x0 && (oj24c = 'get');hf0mqt === void 0x0 && (hf0mqt = '' || null);var vifmbu = new Laya['HttpRequest']();vifmbu['http']['timeout'] = 0x2710, vifmbu['once'](Laya['Event']['COMPLETE'], this, vi1b9), vifmbu['once'](Laya['Event']['ERROR'], this, mivf), vifmbu['send'](vmib, hf0mqt, oj24c, 'text');
  }, ry7a$['prototype']['postSidebarApi'] = function () {
    var sjdocw = ffivub['sygame']['openid'],
        fqt5h = '&channel=' + ffivub['sygame']['channel'] + '&wecha_id=' + sjdocw;this['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=sidebarApi' + fqt5h, this['completeHandler'], this['errorHandler']);
  }, ry7a$['prototype']['getBoxCheckoutCode'] = function () {
    var wszxn = Sygame['SY_CONF']['commitId'];this['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=getBoxCheckoutCode', this['getBoxCheckoutCodeRes'], this['errorHandler'], 'post', { 'commitId': wszxn });
  }, ry7a$['prototype']['getBoxCheckoutCodeRes'] = function (c4j2) {
    var _qk540 = JSON['parse'](c4j2);console['log']('getBoxCheckoutCode:', _qk540);if (_qk540['status'] == 0x3e9) {
      var zenr8 = _qk540['info'];zenr8 == 0xfa1 ? this['postSidebarApi']() : console['error']('盛也盒子\x20不显示' + _qk540);
    } else console['error']('盛也盒子 getBoxCheckoutCodeRes 其他错误' + _qk540);
  }, ry7a$['prototype']['completeHandler'] = function (_k40) {
    var qtmhf = JSON['parse'](_k40);console['log'](qtmhf);switch (qtmhf['status']) {case 0x3e9:
        var d2cj6o = [];qtmhf['msg']['basics_image_url'] && d2cj6o['push']({ 'url': qtmhf['msg']['basics_image_url'], 'type': Laya['Loader']['IMAGE'] }), qtmhf['msg']['public_code'] && d2cj6o['push']({ 'url': qtmhf['msg']['public_code'], 'type': Laya['Loader']['IMAGE'] }), qtmhf['msg']['vip_customer_service'] && d2cj6o['push']({ 'url': qtmhf['msg']['vip_customer_service'], 'type': Laya['Loader']['IMAGE'] }), qtmhf['msg']['vip_customer_service_not_add'] && d2cj6o['push']({ 'url': qtmhf['msg']['vip_customer_service_not_add'], 'type': Laya['Loader']['IMAGE'] }), qtmhf['msg']['game_center_image_url'] && d2cj6o['push']({ 'url': qtmhf['msg']['game_center_image_url'], 'type': Laya['Loader']['IMAGE'] }), qtmhf['msg']['vip_qrcode'] && d2cj6o['push']({ 'url': qtmhf['msg']['vip_qrcode'], 'type': Laya['Loader']['IMAGE'] }), qtmhf['msg']['getIcon'] && d2cj6o['push']({ 'url': this['getIcon'], 'type': Laya['Loader']['IMAGE'] }), qtmhf['msg']['copyIcon'] && d2cj6o['push']({ 'url': this['copyIcon'], 'type': Laya['Loader']['IMAGE'] });for (var wcndsj = 0x0, xewsd = qtmhf['msg']['follow_gift_list']; wcndsj < xewsd['length']; wcndsj++) {
          var fqt5h0 = xewsd[wcndsj];d2cj6o['push']({ 'url': fqt5h0['url'], 'type': Laya['Loader']['IMAGE'] });
        }for (var e8nzxr = 0x0, h05t = qtmhf['msg']['vip_box_list']; e8nzxr < h05t['length']; e8nzxr++) {
          var fqt5h0 = h05t[e8nzxr];d2cj6o['push']({ 'url': fqt5h0['url'], 'type': Laya['Loader']['IMAGE'] });
        }for (var mht0fi = 0x0; mht0fi < d2cj6o['length']; mht0fi++) {
          ffivub['setResMap'](d2cj6o[mht0fi]['url'], ffivub['getTimeStamp']()), d2cj6o[mht0fi]['url'] = ffivub['getResMap'](d2cj6o[mht0fi]['url']);
        }Laya['loader']['load'](d2cj6o, Laya['Handler']['create'](this, this['initGame'])), this['data'] = qtmhf['msg'];break;case 0x3ea:
        fqhk_50['msg']('空的游戏channel');break;case 0x3eb:
        fqhk_50['msg']('错误的游戏channel');break;case 0x3ec:
        fqhk_50['msg']('未找到对应游戏大类');break;case 0x3ed:
        fqhk_50['msg']('未设置侧边栏');break;}
  }, ry7a$['prototype']['errorHandler'] = function (ewnxz) {}, ry7a$['prototype']['initGame'] = function () {
    var csodj6 = new f$re7(this);csodj6['show']();
  }, ry7a$;
}(),
    f$re7 = function () {
  function ibv91u(qm0fth) {
    this['page'] = 0x3, this['rolePriceData'] = {}, this['boxlist'] = [], this['donwX'] = 0x0, this['downY'] = 0x0, this['tool'] = qm0fth;
  }return ibv91u['prototype']['setChildMouseThroughs'] = function ($87) {
    var $y3ap7 = $87['_childs'] || [];for (var $p7ya = 0x0; $p7ya < $y3ap7['length']; $p7ya++) {
      $y3ap7[$p7ya] && ($y3ap7[$p7ya]['mouseThrough'] = !![]);
    }
  }, ibv91u['prototype']['show'] = function () {
    if (this['tool']['data']['on'] === '1') {
      this['main'] = new ffbimt['demoui']['MainUI'](), Laya['stage']['addChild'](this['main']), this['main']['mouseThrough'] = !![];var tvbimf = this['main']['_childs'] || [];for (var xsewzn = 0x0; xsewzn < tvbimf['length']; xsewzn++) {
        tvbimf[xsewzn]['mouseThrough'] = !![];
      }this['setChildMouseThroughs'](this['main']['_childs']), this['setChildMouseThroughs'](this['main']['_childs'][0x0]), this['initIcon'](), this['initEvent'](), this['initView'](), fqhk_50['init'](), this['main']['bg']['x'] = -0x2ee;
    }
  }, ibv91u['prototype']['initView'] = function () {
    var mbvfit = this,
        wnxezs = this['tool']['data']['follow_down_words']['replace'](/\\n/g, '\x0a');this['main']['box_1_lab_info']['text'] = wnxezs;for (var biu91v = 0x1; biu91v <= this['tool']['data']['follow_gift_list']['length']; biu91v++) {
      var umb = this['tool']['data']['follow_gift_list'][biu91v - 0x1];this['main']['box_1_img_' + biu91v]['skin'] = umb['url'], this['main']['box_1_lab_' + biu91v]['text'] = umb['name'];
    }for (var biu91v = 0x1; biu91v <= this['tool']['data']['vip_box_list']['length']; biu91v++) {
      var umb = this['tool']['data']['vip_box_list'][biu91v - 0x1];this['main']['box_2_img_' + biu91v]['skin'] = umb['url'], this['main']['box_2_lab_' + biu91v]['text'] = umb['name'];
    }this['main']['box_2_lab_m_1']['text'] = '方法一：单日充值' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_m_2']['text'] = '方法二：历史累计充值' + +this['tool']['data']['y'] + '元', this['main']['box_2_lab_v_1']['text'] = (this['rolePriceData']['todayPrice'] || 0x0) + '/' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_v_2']['text'] = (this['rolePriceData']['allPrice'] || 0x0) + '/' + +this['tool']['data']['y'] + '元', this['main']['box_2_btn_copy']['skin'] = this['tool']['copyIcon'], this['main']['box_2_btn_get']['skin'] = this['tool']['getIcon'], this['main']['box_2_btn_copy']['visible'] = ![], this['main']['box_2_btn_get']['on'](Laya['Event']['CLICK'], this, function () {
      if (mbvfit['rolePriceData']['is_vip'] == 0x0) {
        fqhk_50['msg']('请先获取vip资格');return;
      }mbvfit['main']['box_2_lab_wx']['text'] = this['rolePriceData']['vip_wx'], mbvfit['main']['box_2_btn_copy']['visible'] = !![];
    }), this['main']['box_2_btn_copy']['on'](Laya['Event']['CLICK'], this, function () {
      mbvfit['copyText'](this['rolePriceData']['vip_wx']);
    }), this['main']['box_2_addclick']['on'](Laya['Event']['CLICK'], this, function () {
      if (mbvfit['rolePriceData']['is_vip'] == 0x0) return;this['main']['box_help_qrcode']['skin'] = mbvfit['rolePriceData']['vip_qrcode'], mbvfit['main']['box_help']['visible'] = !![];
    }), this['main']['box_help_close']['on'](Laya['Event']['CLICK'], this, function () {
      mbvfit['main']['box_help']['visible'] = ![];
    }), this['main']['box_help_bg']['skin'] = this['tool']['data']['vip_customer_service_not_add'], this['main']['box_help_qrcode']['skin'] = mbvfit['rolePriceData']['vip_qrcode'], this['main']['box_help_qrcode']['scaleX'] = 0xa0 / this['main']['box_help_qrcode']['width'], this['main']['box_help_qrcode']['scaleY'] = 0xa0 / this['main']['box_help_qrcode']['width'], this['main']['box_3_panel']['vScrollBar']['visible'] = ![], this['main']['box_3_panel']['vScrollBarSkin'] = 'common_atlas/scrollBar.png';
  }, ibv91u['prototype']['initIcon'] = function () {
    this['icon'] = new Laya['Image'](), this['icon']['skin'] = this['tool']['data']['basics_image_url'], this['icon']['x'] = 0x0, this['icon']['y'] = 0xc8, this['icon']['width'] = 0x66, this['icon']['height'] = 0x6f, this['main']['addChild'](this['icon']), this['icon']['on'](Laya['Event']['MOUSE_DOWN'], this, this['iconPress']), this['icon']['on'](Laya['Event']['MOUSE_UP'], this, this['iconUp']), this['icon']['on'](Laya['Event']['MOUSE_WHEEL'], this, this['iconMove']), this['dragRect'] = new Laya['Rectangle'](-this['icon']['width'] / 0x2, 0x0, Laya['stage']['width'], Laya['stage']['height'] - this['icon']['height'] / 0x2);
  }, ibv91u['prototype']['initEvent'] = function () {
    var $ry783 = this;this['main']['btn_1']['on'](Laya['Event']['CLICK'], this, function () {
      if ($ry783['page'] == 0x1) return;$ry783['page1']();
    }), this['main']['btn_2']['on'](Laya['Event']['CLICK'], this, function () {
      if ($ry783['page'] == 0x2) return;$ry783['page2']();
    }), this['main']['btn_3']['on'](Laya['Event']['CLICK'], this, function () {
      if ($ry783['page'] == 0x3) return;$ry783['page3']();
    }), this['main']['btn_close']['on'](Laya['Event']['CLICK'], this, function () {
      $ry783['main']['bg']['x'] = -0x2ee, $ry783['icon']['visible'] = !![];
    });
  }, ibv91u['prototype']['initBoard'] = function () {
    this['isInitBoard'] = !![], this['page1']();
  }, ibv91u['prototype']['showBoard'] = function () {
    this['main']['bg']['x'] = 0x0, this['icon']['visible'] = ![];var r8nex = F$L6['selectedServer']['server_id'],
        _4kq52 = F$L6['selectedServer']['server_name'],
        $83z = F$L6['roleId'],
        swenxz = F$L6['roleName'],
        q0hk = ffivub['sygame']['openid'],
        cojd26 = '&role_id=' + ffivub['sygame']['role_id'] + '&channel=' + ffivub['sygame']['channel'] + '&server_id=' + r8nex + '&server_name=' + _4kq52 + '&wecha_id=' + q0hk + '&role_id=' + $83z + '&role_name=' + swenxz;this['tool']['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=sidebarApiRoleId' + cojd26, this['rolePriceHandler']['bind'](this), this['roleError']['bind'](this));
  }, ibv91u['prototype']['page1'] = function () {
    this['page'] = 0x1, this['main']['bg']['skin'] = this['tool']['data']['public_code'], this['main']['box_1_show']['visible'] = !![], this['main']['box_2_show']['visible'] = ![], this['main']['box_3_show']['visible'] = ![];
  }, ibv91u['prototype']['page2'] = function () {
    this['page'] = 0x2, this['main']['bg']['skin'] = this['tool']['data']['vip_customer_service'], this['main']['box_1_show']['visible'] = ![], this['main']['box_2_show']['visible'] = !![], this['main']['box_3_show']['visible'] = ![];
  }, ibv91u['prototype']['page3'] = function () {
    this['page'] = 0x3, this['main']['bg']['skin'] = this['tool']['data']['game_center_image_url'], this['main']['box_1_show']['visible'] = ![], this['main']['box_2_show']['visible'] = ![], this['main']['box_3_show']['visible'] = !![], this['sendBox'] || this['getBoxList'](0x0), this['sendBox'] = !![], ftmhq0 && ftmhq0['syClickOpenBox']();
  }, ibv91u['prototype']['getBoxList'] = function (vibu91) {
    var tbfhi = this;ftmhq0 && ftmhq0['syGetBoxList']({ 'page': vibu91, 'count': 0xc })['then'](function (_426c) {
      var dnscj = _426c['data'];dnscj['status'] == 0x3e9 ? dnscj['data'] && dnscj['data']['length'] && (tbfhi['boxlist'] = tbfhi['boxlist']['concat'](dnscj['data']), vibu91++, tbfhi['getBoxList'](vibu91)) : tbfhi['boxListHandler']();
    });
  }, ibv91u['prototype']['copyText'] = function (osj6c) {
    try {
      wx['setClipboardData']({ 'data': osj6c, 'success': function (ft5q) {
          console['log']('复制成功:', ft5q);
        } });
    } catch (j642co) {}
  }, ibv91u['prototype']['rolePriceHandler'] = function (rnxz8e) {
    this['rolePriceData'] = JSON['parse'](rnxz8e);switch (this['rolePriceData']['status']) {case 0x3e9:
        this['main']['box_2_lab_v_1']['text'] = (this['rolePriceData']['todayPrice'] || 0x0) + '/' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_v_2']['text'] = (this['rolePriceData']['allPrice'] || 0x0) + '/' + +this['tool']['data']['y'] + '元';break;case 0x3ea:
        break;case 0x3eb:
        break;}
  }, ibv91u['prototype']['roleError'] = function () {}, ibv91u['prototype']['boxListHandler'] = function () {
    var im0tfh = function (_450kq) {
      var wes = _25['boxlist'][_450kq],
          rnez = new ffbimt['demoui']['BoxItemUI']();rnez['icon']['skin'] = wes['icon'], rnez['title']['text'] = wes['title'], rnez['x'] = 0xa0 * (_450kq % 0x3), rnez['y'] = 0xa0 * (_450kq / 0x3 ^ 0x0), _25['main']['box_3_panel']['addChild'](rnez);var cnjs = { 'appid': ffivub['sygame']['appid'], 'game_id': wes['game_id'], 'jump_appid': wes['jump_appid'], 'jump_path': wes['jump_path'], 'tunnel_id': wes['tunnel_id'], 'uv': 0x0, 'wecha_id': ffivub['sygame']['openid'] },
          k_42o = wes['preview_img'],
          dsc6jo = wes['jump_type'],
          z$8r37 = wes['kf_session'];rnez['on'](Laya['Event']['CLICK'], _25, function () {
        ftmhq0 && ftmhq0['syClickBox']({ 'game_id': wes['game_id'], 'tunnel_id': wes['tunnel_id'], 'jump_appid': wes['jump_appid'], 'jump_path': wes['jump_path'] })['then'](function (ze$7r) {
          if (dsc6jo === '0') wx['navigateToMiniProgram']({ 'appId': cnjs['jump_appid'], 'path': cnjs['jump_path'], 'fail': function (mhbif) {
              if (!k_42o) return;wx['previewImage']({ 'urls': [k_42o] });
            } });else {
            if (dsc6jo === '1') {
              if (!k_42o) return;wx['previewImage']({ 'urls': [k_42o] });
            } else {
              if (dsc6jo === '2') {
                if (!z$8r37) return;wx['openCustomerServiceConversation']({ 'sessionFrom': z$8r37, 'showMessageCard': !![], 'sendMessageTitle': '', 'sendMessagePath': '', 'sendMessageImg': '' });
              }
            }
          }
        });
      });
    },
        _25 = this;for (var v1umbi = 0x0; v1umbi < this['boxlist']['length']; v1umbi++) {
      im0tfh(v1umbi);
    }
  }, ibv91u['prototype']['boxListError'] = function () {}, ibv91u['prototype']['boxClickHandler'] = function () {}, ibv91u['prototype']['iconPress'] = function (cdosj) {
    this['donwX'] = cdosj['target']['x'], this['donwY'] = cdosj['target']['y'], this['icon']['startDrag'](this['dragRect']), this['isMove'] = ![], this['isPress'] = !![];
  }, ibv91u['prototype']['iconMove'] = function (ivbum1) {
    this['isMove'] = !![];
  }, ibv91u['prototype']['iconUp'] = function (q452) {
    var snex = q452['target']['x'],
        do6jc = q452['target']['y'];this['icon']['stopDrag'](), snex == this['donwX'] && this['donwY'] == do6jc && (this['isInitBoard'] || this['initBoard'](), this['showBoard']()), this['isMove'] = ![], this['isPress'] = ![];
  }, ibv91u;
}(),
    ffbimt;(function (hbi) {
  var q50ft;(function (enx8zw) {
    var b9i1u = function (wjodsc) {
      fbmuif(jdwsn, wjodsc);function jdwsn() {
        return wjodsc['call'](this) || this;
      }return jdwsn['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), wjodsc['prototype']['createChildren']['call'](this), this['createView'](hbi['demoui']['BoxItemUI']['uiView']);
      }, jdwsn['uiView'] = { 'type': 'View', 'props': { 'width': 0xb4, 'height': 0xa0 }, 'child': [{ 'type': 'Image', 'props': { 'y': 0x3, 'x': 0x20, 'width': 0x73, 'var': 'icon', 'height': 0x73 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x79, 'x': -0x21, 'width': 0xb4, 'var': 'title', 'valign': 'middle', 'height': 0x22, 'fontSize': 0x16, 'color': '#441d1c', 'align': 'center' } }] }] }, jdwsn;
    }(laya['ui']['View']);enx8zw['BoxItemUI'] = b9i1u;
  })(q50ft = hbi['demoui'] || (hbi['demoui'] = {}));
})(ffbimt || (ffbimt = {})), function (nwdxs) {
  var sndjc;(function (thf5q) {
    var k05htq = function (gb1v9u) {
      fbmuif(mthbf, gb1v9u);function mthbf() {
        return gb1v9u['call'](this) || this;
      }return mthbf['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), gb1v9u['prototype']['createChildren']['call'](this), this['createView'](nwdxs['demoui']['MainUI']['uiView']);
      }, mthbf['uiView'] = { 'type': 'View', 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x2ee, 'top': 0x0, 'right': 0x0, 'left': 0x0, 'height': 0x536, 'bottom': 0x0 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x2ee, 'height': 0x536, 'centerY': 0x0 }, 'child': [{ 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x2ee, 'var': 'bg', 'height': 0x536 }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x2ee, 'visible': ![], 'var': 'box_1_show', 'height': 0x536, 'centerY': 0x0 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x253, 'x': 0x2e, 'width': 0x1d0, 'var': 'box_1_lab_info', 'leading': 0xa, 'height': 0x97, 'fontSize': 0x18, 'color': '#a959ee' } }, { 'type': 'HBox', 'props': { 'y': 0x2ee, 'x': 0x14, 'width': 0x1fe, 'space': 0x35, 'height': 0x78, 'align': 'top' }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x58, 'var': 'box_1_img_1', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_1', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0xa, 'x': 0xa, 'width': 0x58, 'var': 'box_1_img_2', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_2', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x14, 'x': 0x14, 'width': 0x58, 'var': 'box_1_img_3', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_3', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x1e, 'x': 0x1e, 'width': 0x58, 'var': 'box_1_img_4', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_4', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }] }] }, { 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'visible': ![], 'var': 'box_2_show' }, 'child': [{ 'type': 'HBox', 'props': { 'y': 0x220, 'x': 0x18, 'width': 0x1f4, 'space': 0x2c, 'height': 0x56, 'align': 'top' }, 'child': [{ 'type': 'Image', 'props': { 'y': 2.5, 'x': 0x0, 'width': 0x58, 'var': 'box_2_img_1', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_1', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0xc, 'x': 0xa, 'width': 0x58, 'var': 'box_2_img_2', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_2', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x16, 'x': 0x14, 'width': 0x58, 'var': 'box_2_img_3', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_3', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x20, 'x': 0x1e, 'width': 0x58, 'var': 'box_2_img_4', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_4', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x2a, 'x': 0x28, 'width': 0x58, 'var': 'box_2_img_5', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_5', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }] }, { 'type': 'Box', 'props': { 'y': 0x384, 'x': 0x0, 'width': 0x221, 'height': 0x44 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x0, 'x': 0x28, 'width': 0x122, 'var': 'box_2_lab_m_1', 'text': '方法一\uFF1A单日充值1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300' } }, { 'type': 'Text', 'props': { 'y': 0x1e, 'x': 0x28, 'width': 0x122, 'var': 'box_2_lab_m_2', 'text': '方法一\uFF1A历史累计充值1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300' } }, { 'type': 'Text', 'props': { 'y': 0x0, 'x': 0x141, 'width': 0xa4, 'var': 'box_2_lab_v_1', 'text': '1000/1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300', 'align': 'right' } }, { 'type': 'Text', 'props': { 'y': 0x1e, 'x': 0x141, 'width': 0xa4, 'var': 'box_2_lab_v_2', 'text': '1000/1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300', 'align': 'right' } }] }, { 'type': 'Image', 'props': { 'y': 0x1aa, 'x': 0x159, 'width': 0x66, 'var': 'box_2_btn_get', 'stateNum': 0x1, 'height': 0x26 } }, { 'type': 'Image', 'props': { 'y': 0x1aa, 'x': 0x159, 'width': 0x66, 'var': 'box_2_btn_copy', 'stateNum': 0x1, 'height': 0x26 } }, { 'type': 'Button', 'props': { 'y': 0x1d2, 'x': 0x126, 'width': 0xc9, 'var': 'box_2_addclick', 'stateNum': 0x1, 'height': 0x1b } }, { 'type': 'Text', 'props': { 'y': 0x13c, 'x': 0x17a, 'width': 0xa3, 'var': 'box_2_lab_wx', 'height': 0x1f, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'left' } }] }, { 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'visible': ![], 'var': 'box_3_show' }, 'child': [{ 'type': 'Panel', 'props': { 'y': 0xf5, 'x': 0x10, 'width': 0x201, 'var': 'box_3_panel', 'vScrollBarSkin': '', 'height': 0x29e } }] }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0x0, 'width': 0xbb, 'var': 'btn_1', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0xba, 'width': 0xbb, 'var': 'btn_2', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0x177, 'width': 0xbb, 'var': 'btn_3', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x203, 'x': 0x22e, 'width': 0x25, 'var': 'btn_close', 'height': 0x8f } }, { 'type': 'Box', 'props': { 'width': 0x2ee, 'visible': ![], 'var': 'box_help', 'height': 0x536 }, 'child': [{ 'type': 'Sprite', 'props': { 'y': 0x0, 'x': 0x0, 'mouseThrough': ![], 'alpha': 0.7 }, 'child': [{ 'type': 'Rect', 'props': { 'width': 0x2ee, 'lineWidth': 0x1, 'height': 0x536, 'fillColor': '#000000' } }] }, { 'type': 'Image', 'props': { 'y': 0x158, 'x': 0x28, 'width': 0x1d2, 'var': 'box_help_bg', 'height': 0x203 }, 'child': [{ 'type': 'Button', 'props': { 'y': -0x1, 'x': 0x1a0, 'width': 0x33, 'var': 'box_help_close', 'height': 0x28 } }, { 'type': 'Image', 'props': { 'y': 0x3f, 'x': 0x98, 'width': 0xa0, 'var': 'box_help_qrcode', 'height': 0xa0 } }] }] }] }] }] }, mthbf;
    }(laya['ui']['View']);thf5q['MainUI'] = k05htq;
  })(sndjc = nwdxs['demoui'] || (nwdxs['demoui'] = {}));
}(ffbimt || (ffbimt = {})), function (f0mhit) {
  var _c26o;(function (vug1b9) {
    var k462_o = function (vifm) {
      fbmuif(r8e7xz, vifm);function r8e7xz() {
        return vifm['call'](this) || this;
      }return r8e7xz['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), vifm['prototype']['createChildren']['call'](this), this['createView'](f0mhit['demoui']['ToastUI']['uiView']);
      }, r8e7xz['uiView'] = { 'type': 'View', 'props': { 'width': 0x2ee, 'height': 0x536 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x12c, 'height': 0x32, 'centerY': 0x0, 'centerX': 0x0 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x12c, 'height': 0x32, 'centerX': 0x0, 'alpha': 0.5 }, 'child': [{ 'type': 'Rect', 'props': { 'width': 0x12c, 'lineWidth': 0x1, 'height': 0x32, 'fillColor': '#382f2f' } }] }, { 'type': 'Text', 'props': { 'width': 0x12c, 'var': 'lab_msg', 'valign': 'middle', 'text': 'text', 'height': 0x32, 'fontSize': 0x18, 'color': '#ffffff', 'align': 'center' } }] }] }, r8e7xz;
    }(laya['ui']['View']);vug1b9['ToastUI'] = k462_o;
  })(_c26o = f0mhit['demoui'] || (f0mhit['demoui'] = {}));
}(ffbimt || (ffbimt = {}));var fqhk_50 = function () {
  function ok24_6() {}return ok24_6['init'] = function () {
    !this['ui'] && (this['ui'] = new ffbimt['demoui']['ToastUI'](), this['ui']['visible'] = ![], Laya['stage']['addChild'](this['ui']));
  }, ok24_6['msg'] = function (dxwsen) {
    var fvumib = this;!this['ui'] && ok24_6['init'](), this['ui']['visible'] = !![], this['ui']['lab_msg']['text'] = dxwsen, clearTimeout(this['interval']), this['interval'] = setTimeout(function () {
      fvumib['ui']['visible'] = ![];
    }, 0x7d0);
  }, ok24_6;
}();window['minitool'] = fvug9b;