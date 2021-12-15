var I = wx.$R;
var r_fch6 = this && this['__extends'] || function () {
  var $49ab = function (io2zxj, a1$4b9) {
    return $49ab = Object['setPrototypeOf'] || { '__proto__': [] } instanceof Array && function (np5, oyx) {
      np5['__proto__'] = oyx;
    } || function (lzvt, h1u56_) {
      for (var xsj2i in h1u56_) if (h1u56_['hasOwnProperty'](xsj2i)) lzvt[xsj2i] = h1u56_[xsj2i];
    }, $49ab(io2zxj, a1$4b9);
  };return function (rg7qpe, j2szx) {
    $49ab(rg7qpe, j2szx);function zts2l() {
      this['constructor'] = rg7qpe;
    }rg7qpe['prototype'] = j2szx === null ? Object['create'](j2szx) : (zts2l['prototype'] = j2szx['prototype'], new zts2l());
  };
}(),
    r__56nh = window['Sygame'],
    r_u1hab_ = ![],
    r_zst3lv = function () {
  function wky8mr() {}return wky8mr['init'] = function () {
    r_u1hab_ ? this['sygame'] = { 'channel': '3477d2273abd484ba2a0e04ad4971b3c', 'role_id': undefined, 'openid': 'oxmOf5biumkGash-Xht9FVAlswVk', 'appid': 'wx2936121c4817bf46' } : this['sygame'] = r__56nh;
  }, wky8mr['getTimeStamp'] = function () {
    return new Date()['getTime']();
  }, wky8mr['setResMap'] = function (y2jxi, txs23) {
    this['resMap'][y2jxi] = y2jxi + '?' + txs23;
  }, wky8mr['getResMap'] = function (f5cn6d) {
    return this['resMap'][f5cn6d];
  }, wky8mr['resMap'] = {}, wky8mr;
}(),
    r_wyk8m = function () {
  function dcf65() {
    this['getIcon'] = 'https://wx.11babay.cn/uploads/f/fkccc1532944783/5/2/c/7/60dc442c4fbc5.png', this['copyIcon'] = 'https://wx.11babay.cn/uploads/f/fkccc1532944783/3/0/1/7/60dc4409dce39.png', r_zst3lv['init'](), this['getBoxCheckoutCode']();
  }return dcf65['prototype']['send'] = function (qd7egp, h_aub1, e7rg, ok8ji, degqp) {
    ok8ji === void 0x0 && (ok8ji = 'get');degqp === void 0x0 && (degqp = '' || null);var uhab = new Laya['HttpRequest']();uhab['http']['timeout'] = 0x2710, uhab['once'](Laya['Event']['COMPLETE'], this, h_aub1), uhab['once'](Laya['Event']['ERROR'], this, e7rg), uhab['send'](qd7egp, degqp, ok8ji, 'text');
  }, dcf65['prototype']['postSidebarApi'] = function () {
    var f5pcn = r_zst3lv['sygame']['openid'],
        ncd5f6 = '&channel=' + r_zst3lv['sygame']['channel'] + '&wecha_id=' + f5pcn;this['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=sidebarApi' + ncd5f6, this['completeHandler'], this['errorHandler']);
  }, dcf65['prototype']['getBoxCheckoutCode'] = function () {
    var jzox2i = Sygame['SY_CONF']['commitId'];this['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=getBoxCheckoutCode', this['getBoxCheckoutCodeRes'], this['errorHandler'], 'post', { 'commitId': jzox2i });
  }, dcf65['prototype']['getBoxCheckoutCodeRes'] = function (sl23zt) {
    var ncf6d5 = JSON['parse'](sl23zt);console['log']('getBoxCheckoutCode:', ncf6d5);if (ncf6d5['status'] == 0x3e9) {
      var m7wk8r = ncf6d5['info'];m7wk8r == 0xfa1 ? this['postSidebarApi']() : console['error']('盛也盒子\x20不显示' + ncf6d5);
    } else console['error']('盛也盒子 getBoxCheckoutCodeRes 其他错误' + ncf6d5);
  }, dcf65['prototype']['completeHandler'] = function (kom8) {
    var yxij2o = JSON['parse'](kom8);console['log'](yxij2o);switch (yxij2o['status']) {case 0x3e9:
        var p7eqr = [];yxij2o['msg']['basics_image_url'] && p7eqr['push']({ 'url': yxij2o['msg']['basics_image_url'], 'type': Laya['Loader']['IMAGE'] }), yxij2o['msg']['public_code'] && p7eqr['push']({ 'url': yxij2o['msg']['public_code'], 'type': Laya['Loader']['IMAGE'] }), yxij2o['msg']['vip_customer_service'] && p7eqr['push']({ 'url': yxij2o['msg']['vip_customer_service'], 'type': Laya['Loader']['IMAGE'] }), yxij2o['msg']['vip_customer_service_not_add'] && p7eqr['push']({ 'url': yxij2o['msg']['vip_customer_service_not_add'], 'type': Laya['Loader']['IMAGE'] }), yxij2o['msg']['game_center_image_url'] && p7eqr['push']({ 'url': yxij2o['msg']['game_center_image_url'], 'type': Laya['Loader']['IMAGE'] }), yxij2o['msg']['vip_qrcode'] && p7eqr['push']({ 'url': yxij2o['msg']['vip_qrcode'], 'type': Laya['Loader']['IMAGE'] }), yxij2o['msg']['getIcon'] && p7eqr['push']({ 'url': this['getIcon'], 'type': Laya['Loader']['IMAGE'] }), yxij2o['msg']['copyIcon'] && p7eqr['push']({ 'url': this['copyIcon'], 'type': Laya['Loader']['IMAGE'] });for (var w7mgrk = 0x0, i2szx = yxij2o['msg']['follow_gift_list']; w7mgrk < i2szx['length']; w7mgrk++) {
          var l30st = i2szx[w7mgrk];p7eqr['push']({ 'url': l30st['url'], 'type': Laya['Loader']['IMAGE'] });
        }for (var cnfpd = 0x0, k8iywo = yxij2o['msg']['vip_box_list']; cnfpd < k8iywo['length']; cnfpd++) {
          var l30st = k8iywo[cnfpd];p7eqr['push']({ 'url': l30st['url'], 'type': Laya['Loader']['IMAGE'] });
        }for (var rwmy = 0x0; rwmy < p7eqr['length']; rwmy++) {
          r_zst3lv['setResMap'](p7eqr[rwmy]['url'], r_zst3lv['getTimeStamp']()), p7eqr[rwmy]['url'] = r_zst3lv['getResMap'](p7eqr[rwmy]['url']);
        }Laya['loader']['load'](p7eqr, Laya['Handler']['create'](this, this['initGame'])), this['data'] = yxij2o['msg'];break;case 0x3ea:
        r_mw7egr['msg']('空的游戏channel');break;case 0x3eb:
        r_mw7egr['msg']('错误的游戏channel');break;case 0x3ec:
        r_mw7egr['msg']('未找到对应游戏大类');break;case 0x3ed:
        r_mw7egr['msg']('未设置侧边栏');break;}
  }, dcf65['prototype']['errorHandler'] = function (omywk8) {}, dcf65['prototype']['initGame'] = function () {
    var zxt32 = new r_zix2(this);zxt32['show']();
  }, dcf65;
}(),
    r_zix2 = function () {
  function $a914(egmw) {
    this['page'] = 0x3, this['rolePriceData'] = {}, this['boxlist'] = [], this['donwX'] = 0x0, this['downY'] = 0x0, this['tool'] = egmw;
  }return $a914['prototype']['setChildMouseThroughs'] = function (qnedfp) {
    var cdfnqp = qnedfp['_childs'] || [];for (var qgfdpe = 0x0; qgfdpe < cdfnqp['length']; qgfdpe++) {
      cdfnqp[qgfdpe] && (cdfnqp[qgfdpe]['mouseThrough'] = !![]);
    }
  }, $a914['prototype']['show'] = function () {
    if (this['tool']['data']['on'] === '1') {
      this['main'] = new r_ijx2sz['demoui']['MainUI'](), Laya['stage']['addChild'](this['main']), this['main']['mouseThrough'] = !![];var qe7rg = this['main']['_childs'] || [];for (var peq7rg = 0x0; peq7rg < qe7rg['length']; peq7rg++) {
        qe7rg[peq7rg]['mouseThrough'] = !![];
      }this['setChildMouseThroughs'](this['main']['_childs']), this['setChildMouseThroughs'](this['main']['_childs'][0x0]), this['initIcon'](), this['initEvent'](), this['initView'](), r_mw7egr['init'](), this['main']['bg']['x'] = -0x2ee;
    }
  }, $a914['prototype']['initView'] = function () {
    var krg7w = this,
        _$u1 = this['tool']['data']['follow_down_words']['replace'](/\\n/g, '\x0a');this['main']['box_1_lab_info']['text'] = _$u1;for (var e7mwr = 0x1; e7mwr <= this['tool']['data']['follow_gift_list']['length']; e7mwr++) {
      var zjix = this['tool']['data']['follow_gift_list'][e7mwr - 0x1];this['main']['box_1_img_' + e7mwr]['skin'] = zjix['url'], this['main']['box_1_lab_' + e7mwr]['text'] = zjix['name'];
    }for (var e7mwr = 0x1; e7mwr <= this['tool']['data']['vip_box_list']['length']; e7mwr++) {
      var zjix = this['tool']['data']['vip_box_list'][e7mwr - 0x1];this['main']['box_2_img_' + e7mwr]['skin'] = zjix['url'], this['main']['box_2_lab_' + e7mwr]['text'] = zjix['name'];
    }this['main']['box_2_lab_m_1']['text'] = '方法一：单日充值' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_m_2']['text'] = '方法二：历史累计充值' + +this['tool']['data']['y'] + '元', this['main']['box_2_lab_v_1']['text'] = (this['rolePriceData']['todayPrice'] || 0x0) + '/' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_v_2']['text'] = (this['rolePriceData']['allPrice'] || 0x0) + '/' + +this['tool']['data']['y'] + '元', this['main']['box_2_btn_copy']['skin'] = this['tool']['copyIcon'], this['main']['box_2_btn_get']['skin'] = this['tool']['getIcon'], this['main']['box_2_btn_copy']['visible'] = ![], this['main']['box_2_btn_get']['on'](Laya['Event']['CLICK'], this, function () {
      if (krg7w['rolePriceData']['is_vip'] == 0x0) {
        r_mw7egr['msg']('请先获取vip资格');return;
      }krg7w['main']['box_2_lab_wx']['text'] = this['rolePriceData']['vip_wx'], krg7w['main']['box_2_btn_copy']['visible'] = !![];
    }), this['main']['box_2_btn_copy']['on'](Laya['Event']['CLICK'], this, function () {
      krg7w['copyText'](this['rolePriceData']['vip_wx']);
    }), this['main']['box_2_addclick']['on'](Laya['Event']['CLICK'], this, function () {
      if (krg7w['rolePriceData']['is_vip'] == 0x0) return;this['main']['box_help_qrcode']['skin'] = krg7w['rolePriceData']['vip_qrcode'], krg7w['main']['box_help']['visible'] = !![];
    }), this['main']['box_help_close']['on'](Laya['Event']['CLICK'], this, function () {
      krg7w['main']['box_help']['visible'] = ![];
    }), this['main']['box_help_bg']['skin'] = this['tool']['data']['vip_customer_service_not_add'], this['main']['box_help_qrcode']['skin'] = krg7w['rolePriceData']['vip_qrcode'], this['main']['box_help_qrcode']['scaleX'] = 0xa0 / this['main']['box_help_qrcode']['width'], this['main']['box_help_qrcode']['scaleY'] = 0xa0 / this['main']['box_help_qrcode']['width'], this['main']['box_3_panel']['vScrollBar']['visible'] = ![], this['main']['box_3_panel']['vScrollBarSkin'] = 'common_atlas/scrollBar.png';
  }, $a914['prototype']['initIcon'] = function () {
    this['icon'] = new Laya['Image'](), this['icon']['skin'] = this['tool']['data']['basics_image_url'], this['icon']['x'] = 0x0, this['icon']['y'] = 0xc8, this['icon']['width'] = 0x66, this['icon']['height'] = 0x6f, this['main']['addChild'](this['icon']), this['icon']['on'](Laya['Event']['MOUSE_DOWN'], this, this['iconPress']), this['icon']['on'](Laya['Event']['MOUSE_UP'], this, this['iconUp']), this['icon']['on'](Laya['Event']['MOUSE_WHEEL'], this, this['iconMove']), this['dragRect'] = new Laya['Rectangle'](-this['icon']['width'] / 0x2, 0x0, Laya['stage']['width'], Laya['stage']['height'] - this['icon']['height'] / 0x2);
  }, $a914['prototype']['initEvent'] = function () {
    var cpfnqd = this;this['main']['btn_1']['on'](Laya['Event']['CLICK'], this, function () {
      if (cpfnqd['page'] == 0x1) return;cpfnqd['page1']();
    }), this['main']['btn_2']['on'](Laya['Event']['CLICK'], this, function () {
      if (cpfnqd['page'] == 0x2) return;cpfnqd['page2']();
    }), this['main']['btn_3']['on'](Laya['Event']['CLICK'], this, function () {
      if (cpfnqd['page'] == 0x3) return;cpfnqd['page3']();
    }), this['main']['btn_close']['on'](Laya['Event']['CLICK'], this, function () {
      cpfnqd['main']['bg']['x'] = -0x2ee, cpfnqd['icon']['visible'] = !![];
    });
  }, $a914['prototype']['initBoard'] = function () {
    this['isInitBoard'] = !![], this['page1']();
  }, $a914['prototype']['showBoard'] = function () {
    this['main']['bg']['x'] = 0x0, this['icon']['visible'] = ![];var de = _rYE['selectedServer']['server_id'],
        jxzts = _rYE['selectedServer']['server_name'],
        np5fdc = _rYE['roleId'],
        xoijz2 = _rYE['roleName'],
        j2szix = r_zst3lv['sygame']['openid'],
        wrm7gk = '&role_id=' + r_zst3lv['sygame']['role_id'] + '&channel=' + r_zst3lv['sygame']['channel'] + '&server_id=' + de + '&server_name=' + jxzts + '&wecha_id=' + j2szix + '&role_id=' + np5fdc + '&role_name=' + xoijz2;this['tool']['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=sidebarApiRoleId' + wrm7gk, this['rolePriceHandler']['bind'](this), this['roleError']['bind'](this));
  }, $a914['prototype']['page1'] = function () {
    this['page'] = 0x1, this['main']['bg']['skin'] = this['tool']['data']['public_code'], this['main']['box_1_show']['visible'] = !![], this['main']['box_2_show']['visible'] = ![], this['main']['box_3_show']['visible'] = ![];
  }, $a914['prototype']['page2'] = function () {
    this['page'] = 0x2, this['main']['bg']['skin'] = this['tool']['data']['vip_customer_service'], this['main']['box_1_show']['visible'] = ![], this['main']['box_2_show']['visible'] = !![], this['main']['box_3_show']['visible'] = ![];
  }, $a914['prototype']['page3'] = function () {
    this['page'] = 0x3, this['main']['bg']['skin'] = this['tool']['data']['game_center_image_url'], this['main']['box_1_show']['visible'] = ![], this['main']['box_2_show']['visible'] = ![], this['main']['box_3_show']['visible'] = !![], this['sendBox'] || this['getBoxList'](0x0), this['sendBox'] = !![], r__56nh && r__56nh['syClickOpenBox']();
  }, $a914['prototype']['getBoxList'] = function (h1uab_) {
    var n6_ch5 = this;r__56nh && r__56nh['syGetBoxList']({ 'page': h1uab_, 'count': 0xc })['then'](function (z2jsix) {
      var cnfq = z2jsix['data'];cnfq['status'] == 0x3e9 ? cnfq['data'] && cnfq['data']['length'] && (n6_ch5['boxlist'] = n6_ch5['boxlist']['concat'](cnfq['data']), h1uab_++, n6_ch5['getBoxList'](h1uab_)) : n6_ch5['boxListHandler']();
    });
  }, $a914['prototype']['copyText'] = function (h65u_c) {
    try {
      wx['setClipboardData']({ 'data': h65u_c, 'success': function (ba1$u_) {
          console['log']('复制成功:', ba1$u_);
        } });
    } catch (gmqr7) {}
  }, $a914['prototype']['rolePriceHandler'] = function (b4a1$) {
    this['rolePriceData'] = JSON['parse'](b4a1$);switch (this['rolePriceData']['status']) {case 0x3e9:
        this['main']['box_2_lab_v_1']['text'] = (this['rolePriceData']['todayPrice'] || 0x0) + '/' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_v_2']['text'] = (this['rolePriceData']['allPrice'] || 0x0) + '/' + +this['tool']['data']['y'] + '元';break;case 0x3ea:
        break;case 0x3eb:
        break;}
  }, $a914['prototype']['roleError'] = function () {}, $a914['prototype']['boxListHandler'] = function () {
    var ymo8 = function (z2xjt) {
      var k8ywmr = h6uc5['boxlist'][z2xjt],
          xoz2 = new r_ijx2sz['demoui']['BoxItemUI']();xoz2['icon']['skin'] = k8ywmr['icon'], xoz2['title']['text'] = k8ywmr['title'], xoz2['x'] = 0xa0 * (z2xjt % 0x3), xoz2['y'] = 0xa0 * (z2xjt / 0x3 ^ 0x0), h6uc5['main']['box_3_panel']['addChild'](xoz2);var pgrqe = { 'appid': r_zst3lv['sygame']['appid'], 'game_id': k8ywmr['game_id'], 'jump_appid': k8ywmr['jump_appid'], 'jump_path': k8ywmr['jump_path'], 'tunnel_id': k8ywmr['tunnel_id'], 'uv': 0x0, 'wecha_id': r_zst3lv['sygame']['openid'] },
          iyojk = k8ywmr['preview_img'],
          xz3ts = k8ywmr['jump_type'],
          t2zjs = k8ywmr['kf_session'];xoz2['on'](Laya['Event']['CLICK'], h6uc5, function () {
        r__56nh && r__56nh['syClickBox']({ 'game_id': k8ywmr['game_id'], 'tunnel_id': k8ywmr['tunnel_id'], 'jump_appid': k8ywmr['jump_appid'], 'jump_path': k8ywmr['jump_path'] })['then'](function (dfcpq) {
          if (xz3ts === '0') wx['navigateToMiniProgram']({ 'appId': pgrqe['jump_appid'], 'path': pgrqe['jump_path'], 'fail': function (m7rwk) {
              if (!iyojk) return;wx['previewImage']({ 'urls': [iyojk] });
            } });else {
            if (xz3ts === '1') {
              if (!iyojk) return;wx['previewImage']({ 'urls': [iyojk] });
            } else {
              if (xz3ts === '2') {
                if (!t2zjs) return;wx['openCustomerServiceConversation']({ 'sessionFrom': t2zjs, 'showMessageCard': !![], 'sendMessageTitle': '', 'sendMessagePath': '', 'sendMessageImg': '' });
              }
            }
          }
        });
      });
    },
        h6uc5 = this;for (var svzl = 0x0; svzl < this['boxlist']['length']; svzl++) {
      ymo8(svzl);
    }
  }, $a914['prototype']['boxListError'] = function () {}, $a914['prototype']['boxClickHandler'] = function () {}, $a914['prototype']['iconPress'] = function (ahb1_) {
    this['donwX'] = ahb1_['target']['x'], this['donwY'] = ahb1_['target']['y'], this['icon']['startDrag'](this['dragRect']), this['isMove'] = ![], this['isPress'] = !![];
  }, $a914['prototype']['iconMove'] = function (ub91) {
    this['isMove'] = !![];
  }, $a914['prototype']['iconUp'] = function (u1a$9) {
    var cfpdnq = u1a$9['target']['x'],
        tsj2x = u1a$9['target']['y'];this['icon']['stopDrag'](), cfpdnq == this['donwX'] && this['donwY'] == tsj2x && (this['isInitBoard'] || this['initBoard'](), this['showBoard']()), this['isMove'] = ![], this['isPress'] = ![];
  }, $a914;
}(),
    r_ijx2sz;(function (f6n5hc) {
  var w7rm8;(function (x8yj) {
    var emrg = function (l3tvzs) {
      r_fch6(fpncq, l3tvzs);function fpncq() {
        return l3tvzs['call'](this) || this;
      }return fpncq['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), l3tvzs['prototype']['createChildren']['call'](this), this['createView'](f6n5hc['demoui']['BoxItemUI']['uiView']);
      }, fpncq['uiView'] = { 'type': 'View', 'props': { 'width': 0xb4, 'height': 0xa0 }, 'child': [{ 'type': 'Image', 'props': { 'y': 0x3, 'x': 0x20, 'width': 0x73, 'var': 'icon', 'height': 0x73 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x79, 'x': -0x21, 'width': 0xb4, 'var': 'title', 'valign': 'middle', 'height': 0x22, 'fontSize': 0x16, 'color': '#441d1c', 'align': 'center' } }] }] }, fpncq;
    }(laya['ui']['View']);x8yj['BoxItemUI'] = emrg;
  })(w7rm8 = f6n5hc['demoui'] || (f6n5hc['demoui'] = {}));
})(r_ijx2sz || (r_ijx2sz = {})), function (wrm87) {
  var nedfq;(function (sx2i) {
    var xsi2zj = function (mw8koy) {
      r_fch6(u1h_56, mw8koy);function u1h_56() {
        return mw8koy['call'](this) || this;
      }return u1h_56['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), mw8koy['prototype']['createChildren']['call'](this), this['createView'](wrm87['demoui']['MainUI']['uiView']);
      }, u1h_56['uiView'] = { 'type': 'View', 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x2ee, 'top': 0x0, 'right': 0x0, 'left': 0x0, 'height': 0x536, 'bottom': 0x0 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x2ee, 'height': 0x536, 'centerY': 0x0 }, 'child': [{ 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x2ee, 'var': 'bg', 'height': 0x536 }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x2ee, 'visible': ![], 'var': 'box_1_show', 'height': 0x536, 'centerY': 0x0 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x253, 'x': 0x2e, 'width': 0x1d0, 'var': 'box_1_lab_info', 'leading': 0xa, 'height': 0x97, 'fontSize': 0x18, 'color': '#a959ee' } }, { 'type': 'HBox', 'props': { 'y': 0x2ee, 'x': 0x14, 'width': 0x1fe, 'space': 0x35, 'height': 0x78, 'align': 'top' }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x58, 'var': 'box_1_img_1', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_1', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0xa, 'x': 0xa, 'width': 0x58, 'var': 'box_1_img_2', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_2', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x14, 'x': 0x14, 'width': 0x58, 'var': 'box_1_img_3', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_3', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x1e, 'x': 0x1e, 'width': 0x58, 'var': 'box_1_img_4', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_4', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }] }] }, { 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'visible': ![], 'var': 'box_2_show' }, 'child': [{ 'type': 'HBox', 'props': { 'y': 0x220, 'x': 0x18, 'width': 0x1f4, 'space': 0x2c, 'height': 0x56, 'align': 'top' }, 'child': [{ 'type': 'Image', 'props': { 'y': 2.5, 'x': 0x0, 'width': 0x58, 'var': 'box_2_img_1', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_1', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0xc, 'x': 0xa, 'width': 0x58, 'var': 'box_2_img_2', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_2', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x16, 'x': 0x14, 'width': 0x58, 'var': 'box_2_img_3', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_3', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x20, 'x': 0x1e, 'width': 0x58, 'var': 'box_2_img_4', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_4', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x2a, 'x': 0x28, 'width': 0x58, 'var': 'box_2_img_5', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_5', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }] }, { 'type': 'Box', 'props': { 'y': 0x384, 'x': 0x0, 'width': 0x221, 'height': 0x44 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x0, 'x': 0x28, 'width': 0x122, 'var': 'box_2_lab_m_1', 'text': '方法一\uFF1A单日充值1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300' } }, { 'type': 'Text', 'props': { 'y': 0x1e, 'x': 0x28, 'width': 0x122, 'var': 'box_2_lab_m_2', 'text': '方法一\uFF1A历史累计充值1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300' } }, { 'type': 'Text', 'props': { 'y': 0x0, 'x': 0x141, 'width': 0xa4, 'var': 'box_2_lab_v_1', 'text': '1000/1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300', 'align': 'right' } }, { 'type': 'Text', 'props': { 'y': 0x1e, 'x': 0x141, 'width': 0xa4, 'var': 'box_2_lab_v_2', 'text': '1000/1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300', 'align': 'right' } }] }, { 'type': 'Image', 'props': { 'y': 0x1aa, 'x': 0x159, 'width': 0x66, 'var': 'box_2_btn_get', 'stateNum': 0x1, 'height': 0x26 } }, { 'type': 'Image', 'props': { 'y': 0x1aa, 'x': 0x159, 'width': 0x66, 'var': 'box_2_btn_copy', 'stateNum': 0x1, 'height': 0x26 } }, { 'type': 'Button', 'props': { 'y': 0x1d2, 'x': 0x126, 'width': 0xc9, 'var': 'box_2_addclick', 'stateNum': 0x1, 'height': 0x1b } }, { 'type': 'Text', 'props': { 'y': 0x13c, 'x': 0x17a, 'width': 0xa3, 'var': 'box_2_lab_wx', 'height': 0x1f, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'left' } }] }, { 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'visible': ![], 'var': 'box_3_show' }, 'child': [{ 'type': 'Panel', 'props': { 'y': 0xf5, 'x': 0x10, 'width': 0x201, 'var': 'box_3_panel', 'vScrollBarSkin': '', 'height': 0x29e } }] }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0x0, 'width': 0xbb, 'var': 'btn_1', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0xba, 'width': 0xbb, 'var': 'btn_2', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0x177, 'width': 0xbb, 'var': 'btn_3', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x203, 'x': 0x22e, 'width': 0x25, 'var': 'btn_close', 'height': 0x8f } }, { 'type': 'Box', 'props': { 'width': 0x2ee, 'visible': ![], 'var': 'box_help', 'height': 0x536 }, 'child': [{ 'type': 'Sprite', 'props': { 'y': 0x0, 'x': 0x0, 'mouseThrough': ![], 'alpha': 0.7 }, 'child': [{ 'type': 'Rect', 'props': { 'width': 0x2ee, 'lineWidth': 0x1, 'height': 0x536, 'fillColor': '#000000' } }] }, { 'type': 'Image', 'props': { 'y': 0x158, 'x': 0x28, 'width': 0x1d2, 'var': 'box_help_bg', 'height': 0x203 }, 'child': [{ 'type': 'Button', 'props': { 'y': -0x1, 'x': 0x1a0, 'width': 0x33, 'var': 'box_help_close', 'height': 0x28 } }, { 'type': 'Image', 'props': { 'y': 0x3f, 'x': 0x98, 'width': 0xa0, 'var': 'box_help_qrcode', 'height': 0xa0 } }] }] }] }] }] }, u1h_56;
    }(laya['ui']['View']);sx2i['MainUI'] = xsi2zj;
  })(nedfq = wrm87['demoui'] || (wrm87['demoui'] = {}));
}(r_ijx2sz || (r_ijx2sz = {})), function (iyjox) {
  var a49b;(function (wokm8y) {
    var g7mwr = function (myw8k) {
      r_fch6(lzt3s2, myw8k);function lzt3s2() {
        return myw8k['call'](this) || this;
      }return lzt3s2['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), myw8k['prototype']['createChildren']['call'](this), this['createView'](iyjox['demoui']['ToastUI']['uiView']);
      }, lzt3s2['uiView'] = { 'type': 'View', 'props': { 'width': 0x2ee, 'height': 0x536 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x12c, 'height': 0x32, 'centerY': 0x0, 'centerX': 0x0 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x12c, 'height': 0x32, 'centerX': 0x0, 'alpha': 0.5 }, 'child': [{ 'type': 'Rect', 'props': { 'width': 0x12c, 'lineWidth': 0x1, 'height': 0x32, 'fillColor': '#382f2f' } }] }, { 'type': 'Text', 'props': { 'width': 0x12c, 'var': 'lab_msg', 'valign': 'middle', 'text': 'text', 'height': 0x32, 'fontSize': 0x18, 'color': '#ffffff', 'align': 'center' } }] }] }, lzt3s2;
    }(laya['ui']['View']);wokm8y['ToastUI'] = g7mwr;
  })(a49b = iyjox['demoui'] || (iyjox['demoui'] = {}));
}(r_ijx2sz || (r_ijx2sz = {}));var r_mw7egr = function () {
  function xoi2jz() {}return xoi2jz['init'] = function () {
    !this['ui'] && (this['ui'] = new r_ijx2sz['demoui']['ToastUI'](), this['ui']['visible'] = ![], Laya['stage']['addChild'](this['ui']));
  }, xoi2jz['msg'] = function (_ch5) {
    var qgmre = this;!this['ui'] && xoi2jz['init'](), this['ui']['visible'] = !![], this['ui']['lab_msg']['text'] = _ch5, clearTimeout(this['interval']), this['interval'] = setTimeout(function () {
      qgmre['ui']['visible'] = ![];
    }, 0x7d0);
  }, xoi2jz;
}();window['minitool'] = r_wyk8m;