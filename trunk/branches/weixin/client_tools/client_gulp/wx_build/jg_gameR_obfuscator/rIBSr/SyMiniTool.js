var i = wx.$R;
var r_lz3svt = this && this['__extends'] || function () {
  var $a_b = function (yoj8k, u_6h51) {
    return $a_b = Object['setPrototypeOf'] || { '__proto__': [] } instanceof Array && function (hu1a_6, mg7kwr) {
      hu1a_6['__proto__'] = mg7kwr;
    } || function (u5_hc6, dqe7pg) {
      for (var jyi2x in dqe7pg) if (dqe7pg['hasOwnProperty'](jyi2x)) u5_hc6[jyi2x] = dqe7pg[jyi2x];
    }, $a_b(yoj8k, u_6h51);
  };return function (nqpfe, vtl3) {
    $a_b(nqpfe, vtl3);function eqfdpg() {
      this['constructor'] = nqpfe;
    }nqpfe['prototype'] = vtl3 === null ? Object['create'](vtl3) : (eqfdpg['prototype'] = vtl3['prototype'], new eqfdpg());
  };
}(),
    r__5u16h = window['Sygame'],
    r_hu51_ = ![],
    r_y8oki = function () {
  function u_5h6c() {}return u_5h6c['init'] = function () {
    r_hu51_ ? this['sygame'] = { 'channel': '3477d2273abd484ba2a0e04ad4971b3c', 'role_id': undefined, 'openid': 'oxmOf5biumkGash-Xht9FVAlswVk', 'appid': 'wx2936121c4817bf46' } : this['sygame'] = r__5u16h;
  }, u_5h6c['getTimeStamp'] = function () {
    return new Date()['getTime']();
  }, u_5h6c['setResMap'] = function (_1h6u5, dcf6n5) {
    this['resMap'][_1h6u5] = _1h6u5 + '?' + dcf6n5;
  }, u_5h6c['getResMap'] = function (i8xyoj) {
    return this['resMap'][i8xyoj];
  }, u_5h6c['resMap'] = {}, u_5h6c;
}(),
    r_kw7r8m = function () {
  function df56n() {
    this['getIcon'] = 'https://wx.11babay.cn/uploads/f/fkccc1532944783/5/2/c/7/60dc442c4fbc5.png', this['copyIcon'] = 'https://wx.11babay.cn/uploads/f/fkccc1532944783/3/0/1/7/60dc4409dce39.png', r_y8oki['init'](), this['postSidebarApi']();
  }return df56n['prototype']['send'] = function (_1hu56, lvz3, _h65, ykoij8, xo2ijz) {
    ykoij8 === void 0x0 && (ykoij8 = 'get');xo2ijz === void 0x0 && (xo2ijz = '' || null);var zo2jix = new Laya['HttpRequest']();zo2jix['http']['timeout'] = 0x2710, zo2jix['once'](Laya['Event']['COMPLETE'], this, lvz3), zo2jix['once'](Laya['Event']['ERROR'], this, _h65), zo2jix['send'](_1hu56, xo2ijz, ykoij8, 'text');
  }, df56n['prototype']['postSidebarApi'] = function () {
    this['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=sidebarApi&channel=' + r_y8oki['sygame']['channel'], this['completeHandler'], this['errorHandler']);
  }, df56n['prototype']['completeHandler'] = function (wkgrm) {
    var f5n6dc = JSON['parse'](wkgrm);console['log'](f5n6dc);switch (f5n6dc['status']) {case 0x3e9:
        var sz3lvt = [];f5n6dc['msg']['basics_image_url'] && sz3lvt['push']({ 'url': f5n6dc['msg']['basics_image_url'], 'type': Laya['Loader']['IMAGE'] }), f5n6dc['msg']['public_code'] && sz3lvt['push']({ 'url': f5n6dc['msg']['public_code'], 'type': Laya['Loader']['IMAGE'] }), f5n6dc['msg']['vip_customer_service'] && sz3lvt['push']({ 'url': f5n6dc['msg']['vip_customer_service'], 'type': Laya['Loader']['IMAGE'] }), f5n6dc['msg']['vip_customer_service_not_add'] && sz3lvt['push']({ 'url': f5n6dc['msg']['vip_customer_service_not_add'], 'type': Laya['Loader']['IMAGE'] }), f5n6dc['msg']['game_center_image_url'] && sz3lvt['push']({ 'url': f5n6dc['msg']['game_center_image_url'], 'type': Laya['Loader']['IMAGE'] }), f5n6dc['msg']['vip_qrcode'] && sz3lvt['push']({ 'url': f5n6dc['msg']['vip_qrcode'], 'type': Laya['Loader']['IMAGE'] }), f5n6dc['msg']['getIcon'] && sz3lvt['push']({ 'url': this['getIcon'], 'type': Laya['Loader']['IMAGE'] }), f5n6dc['msg']['copyIcon'] && sz3lvt['push']({ 'url': this['copyIcon'], 'type': Laya['Loader']['IMAGE'] });for (var szl2t = 0x0, mw7r = f5n6dc['msg']['follow_gift_list']; szl2t < mw7r['length']; szl2t++) {
          var t30s = mw7r[szl2t];sz3lvt['push']({ 'url': t30s['url'], 'type': Laya['Loader']['IMAGE'] });
        }for (var _huab = 0x0, chn_ = f5n6dc['msg']['vip_box_list']; _huab < chn_['length']; _huab++) {
          var t30s = chn_[_huab];sz3lvt['push']({ 'url': t30s['url'], 'type': Laya['Loader']['IMAGE'] });
        }for (var tzvs = 0x0; tzvs < sz3lvt['length']; tzvs++) {
          r_y8oki['setResMap'](sz3lvt[tzvs]['url'], r_y8oki['getTimeStamp']()), sz3lvt[tzvs]['url'] = r_y8oki['getResMap'](sz3lvt[tzvs]['url']);
        }Laya['loader']['load'](sz3lvt, Laya['Handler']['create'](this, this['initGame'])), this['data'] = f5n6dc['msg'];break;case 0x3ea:
        r_ky8ioj['msg']('空的游戏channel');break;case 0x3eb:
        r_ky8ioj['msg']('错误的游戏channel');break;case 0x3ec:
        r_ky8ioj['msg']('未找到对应游戏大类');break;case 0x3ed:
        r_ky8ioj['msg']('未设置侧边栏');break;}
  }, df56n['prototype']['errorHandler'] = function (pedfn) {}, df56n['prototype']['initGame'] = function () {
    var eqpg = new r_ijk8yo(this);eqpg['show']();
  }, df56n;
}(),
    r_ijk8yo = function () {
  function c5npdf(mr8k7) {
    this['page'] = 0x3, this['rolePriceData'] = {}, this['boxlist'] = [], this['donwX'] = 0x0, this['downY'] = 0x0, this['tool'] = mr8k7;
  }return c5npdf['prototype']['setChildMouseThroughs'] = function (jki8yo) {
    var io8jy = jki8yo['_childs'] || [];for (var o8kij = 0x0; o8kij < io8jy['length']; o8kij++) {
      io8jy[o8kij] && (io8jy[o8kij]['mouseThrough'] = !![]);
    }
  }, c5npdf['prototype']['show'] = function () {
    if (this['tool']['data']['on'] === '1') {
      this['main'] = new r_st23z['demoui']['MainUI'](), Laya['stage']['addChild'](this['main']), this['main']['mouseThrough'] = !![];var sxzi2j = this['main']['_childs'] || [];for (var lvzts = 0x0; lvzts < sxzi2j['length']; lvzts++) {
        sxzi2j[lvzts]['mouseThrough'] = !![];
      }this['setChildMouseThroughs'](this['main']['_childs']), this['setChildMouseThroughs'](this['main']['_childs'][0x0]), this['initIcon'](), this['initEvent'](), this['initView'](), r_ky8ioj['init']();
    }
  }, c5npdf['prototype']['initView'] = function () {
    var $91ua = this,
        wyrmk = this['tool']['data']['follow_down_words']['replace'](/\\n/g, '\x0a');this['main']['box_1_lab_info']['text'] = wyrmk;for (var npqdf = 0x1; npqdf <= this['tool']['data']['follow_gift_list']['length']; npqdf++) {
      var tv0l3 = this['tool']['data']['follow_gift_list'][npqdf - 0x1];this['main']['box_1_img_' + npqdf]['skin'] = tv0l3['url'], this['main']['box_1_lab_' + npqdf]['text'] = tv0l3['name'];
    }for (var npqdf = 0x1; npqdf <= this['tool']['data']['vip_box_list']['length']; npqdf++) {
      var tv0l3 = this['tool']['data']['vip_box_list'][npqdf - 0x1];this['main']['box_2_img_' + npqdf]['skin'] = tv0l3['url'], this['main']['box_2_lab_' + npqdf]['text'] = tv0l3['name'];
    }this['main']['box_2_lab_m_1']['text'] = '方法一：单日充值' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_m_2']['text'] = '方法二：历史累计充值' + +this['tool']['data']['y'] + '元', this['main']['box_2_lab_v_1']['text'] = (this['rolePriceData']['todayPrice'] || 0x0) + '/' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_v_2']['text'] = (this['rolePriceData']['allPrice'] || 0x0) + '/' + +this['tool']['data']['y'] + '元', this['main']['box_2_btn_copy']['skin'] = this['tool']['copyIcon'], this['main']['box_2_btn_get']['skin'] = this['tool']['getIcon'], this['main']['box_2_btn_copy']['visible'] = ![], this['main']['box_2_btn_get']['on'](Laya['Event']['CLICK'], this, function () {
      if ($91ua['rolePriceData']['is_vip'] == 0x0) {
        r_ky8ioj['msg']('请先获取vip资格');return;
      }$91ua['main']['box_2_lab_wx']['text'] = $91ua['tool']['data']['vip_wx'], $91ua['main']['box_2_btn_copy']['visible'] = !![];
    }), this['main']['box_2_btn_copy']['on'](Laya['Event']['CLICK'], this, function () {
      $91ua['copyText']($91ua['tool']['data']['vip_wx']);
    }), this['main']['box_2_addclick']['on'](Laya['Event']['CLICK'], this, function () {
      if ($91ua['rolePriceData']['is_vip'] == 0x0) return;$91ua['main']['box_help']['visible'] = !![];
    }), this['main']['box_help_close']['on'](Laya['Event']['CLICK'], this, function () {
      $91ua['main']['box_help']['visible'] = ![];
    }), this['main']['box_help_bg']['skin'] = this['tool']['data']['vip_customer_service_not_add'], this['main']['box_help_qrcode']['skin'] = this['tool']['data']['vip_qrcode'], this['main']['box_help_qrcode']['scaleX'] = 0xa0 / this['main']['box_help_qrcode']['width'], this['main']['box_help_qrcode']['scaleY'] = 0xa0 / this['main']['box_help_qrcode']['width'], this['main']['box_3_panel']['vScrollBar']['visible'] = ![], this['main']['box_3_panel']['vScrollBarSkin'] = 'common_atlas/scrollBar.png';
  }, c5npdf['prototype']['initIcon'] = function () {
    this['icon'] = new Laya['Image'](), this['icon']['skin'] = this['tool']['data']['basics_image_url'], this['icon']['x'] = 0x0, this['icon']['y'] = 0xc8, this['icon']['width'] = 0x66, this['icon']['height'] = 0x6f, this['main']['addChild'](this['icon']), this['icon']['on'](Laya['Event']['MOUSE_DOWN'], this, this['iconPress']), this['icon']['on'](Laya['Event']['MOUSE_UP'], this, this['iconUp']), this['icon']['on'](Laya['Event']['MOUSE_WHEEL'], this, this['iconMove']), this['dragRect'] = new Laya['Rectangle'](-this['icon']['width'] / 0x2, 0x0, Laya['stage']['width'], Laya['stage']['height'] - this['icon']['height'] / 0x2);
  }, c5npdf['prototype']['initEvent'] = function () {
    var s2zt3x = this;this['main']['btn_1']['on'](Laya['Event']['CLICK'], this, function () {
      if (s2zt3x['page'] == 0x1) return;s2zt3x['page1']();
    }), this['main']['btn_2']['on'](Laya['Event']['CLICK'], this, function () {
      if (s2zt3x['page'] == 0x2) return;s2zt3x['page2']();
    }), this['main']['btn_3']['on'](Laya['Event']['CLICK'], this, function () {
      if (s2zt3x['page'] == 0x3) return;s2zt3x['page3']();
    }), this['main']['btn_close']['on'](Laya['Event']['CLICK'], this, function () {
      s2zt3x['main']['bg']['x'] = -0x2ee, s2zt3x['icon']['visible'] = !![];
    });
  }, c5npdf['prototype']['initBoard'] = function () {
    this['isInitBoard'] = !![], this['page1']();
  }, c5npdf['prototype']['showBoard'] = function () {
    this['main']['bg']['x'] = 0x0, this['icon']['visible'] = ![], this['tool']['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=sidebarApiRoleId&role_id=' + r_y8oki['sygame']['role_id'] + '&channel=' + r_y8oki['sygame']['channel'], this['rolePriceHandler']['bind'](this), this['roleError']['bind'](this));
  }, c5npdf['prototype']['page1'] = function () {
    this['page'] = 0x1, this['main']['bg']['skin'] = this['tool']['data']['public_code'], this['main']['box_1_show']['visible'] = !![], this['main']['box_2_show']['visible'] = ![], this['main']['box_3_show']['visible'] = ![];
  }, c5npdf['prototype']['page2'] = function () {
    this['page'] = 0x2, this['main']['bg']['skin'] = this['tool']['data']['vip_customer_service'], this['main']['box_1_show']['visible'] = ![], this['main']['box_2_show']['visible'] = !![], this['main']['box_3_show']['visible'] = ![];
  }, c5npdf['prototype']['page3'] = function () {
    this['page'] = 0x3, this['main']['bg']['skin'] = this['tool']['data']['game_center_image_url'], this['main']['box_1_show']['visible'] = ![], this['main']['box_2_show']['visible'] = ![], this['main']['box_3_show']['visible'] = !![], this['sendBox'] || this['getBoxList'](0x0), this['sendBox'] = !![], r__5u16h && r__5u16h['syClickOpenBox']();
  }, c5npdf['prototype']['getBoxList'] = function (dqepn) {
    var kjoi = this;r__5u16h && r__5u16h['syGetBoxList']({ 'page': dqepn, 'count': 0xc })['then'](function (kmo) {
      var rym8 = kmo['data'];rym8['status'] == 0x3e9 ? rym8['data'] && rym8['data']['length'] && (kjoi['boxlist'] = kjoi['boxlist']['concat'](rym8['data']), dqepn++, kjoi['getBoxList'](dqepn)) : kjoi['boxListHandler']();
    });
  }, c5npdf['prototype']['copyText'] = function ($9ba41) {
    try {
      wx['setClipboardData']({ 'data': $9ba41, 'success': function (ndfe) {
          console['log']('复制成功:', ndfe);
        } });
    } catch (pqegdf) {}
  }, c5npdf['prototype']['rolePriceHandler'] = function (_1u6h5) {
    this['rolePriceData'] = JSON['parse'](_1u6h5);switch (this['rolePriceData']['status']) {case 0x3e9:
        this['main']['box_2_lab_v_1']['text'] = (this['rolePriceData']['todayPrice'] || 0x0) + '/' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_v_2']['text'] = (this['rolePriceData']['allPrice'] || 0x0) + '/' + +this['tool']['data']['y'] + '元';break;case 0x3ea:
        break;case 0x3eb:
        break;}
  }, c5npdf['prototype']['roleError'] = function () {}, c5npdf['prototype']['boxListHandler'] = function () {
    var ndcfp5 = function (u6h5) {
      var tvl = zj2t['boxlist'][u6h5],
          abhu1 = new r_st23z['demoui']['BoxItemUI']();abhu1['icon']['skin'] = tvl['icon'], abhu1['title']['text'] = tvl['title'], abhu1['x'] = 0xa0 * (u6h5 % 0x3), abhu1['y'] = 0xa0 * (u6h5 / 0x3 ^ 0x0), zj2t['main']['box_3_panel']['addChild'](abhu1);var oxij8y = { 'appid': r_y8oki['sygame']['appid'], 'game_id': tvl['game_id'], 'jump_appid': tvl['jump_appid'], 'jump_path': tvl['jump_path'], 'tunnel_id': tvl['tunnel_id'], 'uv': 0x0, 'wecha_id': r_y8oki['sygame']['openid'] },
          $_aub = tvl['preview_img'],
          ua$b19 = tvl['jump_type'],
          tz23s = tvl['kf_session'];abhu1['on'](Laya['Event']['CLICK'], zj2t, function () {
        r__5u16h && r__5u16h['syClickBox']({ 'game_id': tvl['game_id'], 'tunnel_id': tvl['tunnel_id'], 'jump_appid': tvl['jump_appid'], 'jump_path': tvl['jump_path'] })['then'](function (rykwm) {
          if (ua$b19 === '0') wx['navigateToMiniProgram']({ 'appId': oxij8y['jump_appid'], 'path': oxij8y['jump_path'], 'fail': function (n6c_) {
              if (!$_aub) return;wx['previewImage']({ 'urls': [$_aub] });
            } });else {
            if (ua$b19 === '1') {
              if (!$_aub) return;wx['previewImage']({ 'urls': [$_aub] });
            } else {
              if (ua$b19 === '2') {
                if (!tz23s) return;wx['openCustomerServiceConversation']({ 'sessionFrom': tz23s, 'showMessageCard': !![], 'sendMessageTitle': '', 'sendMessagePath': '', 'sendMessageImg': '' });
              }
            }
          }
        });
      });
    },
        zj2t = this;for (var pncdf5 = 0x0; pncdf5 < this['boxlist']['length']; pncdf5++) {
      ndcfp5(pncdf5);
    }
  }, c5npdf['prototype']['boxListError'] = function () {}, c5npdf['prototype']['boxClickHandler'] = function () {}, c5npdf['prototype']['iconPress'] = function (tsxzj2) {
    this['donwX'] = tsxzj2['target']['x'], this['donwY'] = tsxzj2['target']['y'], this['icon']['startDrag'](this['dragRect']), this['isMove'] = ![], this['isPress'] = !![];
  }, c5npdf['prototype']['iconMove'] = function (oixjy) {
    this['isMove'] = !![];
  }, c5npdf['prototype']['iconUp'] = function (jxsz2i) {
    var _hua = jxsz2i['target']['x'],
        fdegp = jxsz2i['target']['y'];this['icon']['stopDrag'](), _hua == this['donwX'] && this['donwY'] == fdegp && (this['isInitBoard'] || this['initBoard'](), this['showBoard']()), this['isMove'] = ![], this['isPress'] = ![];
  }, c5npdf;
}(),
    r_st23z;(function (xsz2j) {
  var k7mw8r;(function (hn_5c) {
    var $1ab9 = function (mg7rw) {
      r_lz3svt(u_abh1, mg7rw);function u_abh1() {
        return mg7rw['call'](this) || this;
      }return u_abh1['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), mg7rw['prototype']['createChildren']['call'](this), this['createView'](xsz2j['demoui']['BoxItemUI']['uiView']);
      }, u_abh1['uiView'] = { 'type': 'View', 'props': { 'width': 0xb4, 'height': 0xa0 }, 'child': [{ 'type': 'Image', 'props': { 'y': 0x3, 'x': 0x20, 'width': 0x73, 'var': 'icon', 'height': 0x73 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x79, 'x': -0x21, 'width': 0xb4, 'var': 'title', 'valign': 'middle', 'height': 0x22, 'fontSize': 0x16, 'color': '#441d1c', 'align': 'center' } }] }] }, u_abh1;
    }(laya['ui']['View']);hn_5c['BoxItemUI'] = $1ab9;
  })(k7mw8r = xsz2j['demoui'] || (xsz2j['demoui'] = {}));
})(r_st23z || (r_st23z = {})), function (b_ahu) {
  var uh_c56;(function (au_b$) {
    var _6u1ah = function (meqgr7) {
      r_lz3svt(ixz2s, meqgr7);function ixz2s() {
        return meqgr7['call'](this) || this;
      }return ixz2s['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), meqgr7['prototype']['createChildren']['call'](this), this['createView'](b_ahu['demoui']['MainUI']['uiView']);
      }, ixz2s['uiView'] = { 'type': 'View', 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x2ee, 'top': 0x0, 'right': 0x0, 'left': 0x0, 'height': 0x536, 'bottom': 0x0 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x2ee, 'height': 0x536, 'centerY': 0x0 }, 'child': [{ 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x2ee, 'var': 'bg', 'height': 0x536 }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x2ee, 'visible': ![], 'var': 'box_1_show', 'height': 0x536, 'centerY': 0x0 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x253, 'x': 0x2e, 'width': 0x1d0, 'var': 'box_1_lab_info', 'leading': 0xa, 'height': 0x97, 'fontSize': 0x18, 'color': '#a959ee' } }, { 'type': 'HBox', 'props': { 'y': 0x2ee, 'x': 0x14, 'width': 0x1fe, 'space': 0x35, 'height': 0x78, 'align': 'top' }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x58, 'var': 'box_1_img_1', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_1', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0xa, 'x': 0xa, 'width': 0x58, 'var': 'box_1_img_2', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_2', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x14, 'x': 0x14, 'width': 0x58, 'var': 'box_1_img_3', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_3', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x1e, 'x': 0x1e, 'width': 0x58, 'var': 'box_1_img_4', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_4', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }] }] }, { 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'visible': ![], 'var': 'box_2_show' }, 'child': [{ 'type': 'HBox', 'props': { 'y': 0x220, 'x': 0x18, 'width': 0x1f4, 'space': 0x2c, 'height': 0x56, 'align': 'top' }, 'child': [{ 'type': 'Image', 'props': { 'y': 2.5, 'x': 0x0, 'width': 0x58, 'var': 'box_2_img_1', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_1', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0xc, 'x': 0xa, 'width': 0x58, 'var': 'box_2_img_2', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_2', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x16, 'x': 0x14, 'width': 0x58, 'var': 'box_2_img_3', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_3', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x20, 'x': 0x1e, 'width': 0x58, 'var': 'box_2_img_4', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_4', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x2a, 'x': 0x28, 'width': 0x58, 'var': 'box_2_img_5', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_5', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }] }, { 'type': 'Box', 'props': { 'y': 0x384, 'x': 0x0, 'width': 0x221, 'height': 0x44 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x0, 'x': 0x28, 'width': 0x122, 'var': 'box_2_lab_m_1', 'text': '方法一\uFF1A单日充值1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300' } }, { 'type': 'Text', 'props': { 'y': 0x1e, 'x': 0x28, 'width': 0x122, 'var': 'box_2_lab_m_2', 'text': '方法一\uFF1A历史累计充值1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300' } }, { 'type': 'Text', 'props': { 'y': 0x0, 'x': 0x141, 'width': 0xa4, 'var': 'box_2_lab_v_1', 'text': '1000/1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300', 'align': 'right' } }, { 'type': 'Text', 'props': { 'y': 0x1e, 'x': 0x141, 'width': 0xa4, 'var': 'box_2_lab_v_2', 'text': '1000/1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300', 'align': 'right' } }] }, { 'type': 'Image', 'props': { 'y': 0x1aa, 'x': 0x159, 'width': 0x66, 'var': 'box_2_btn_get', 'stateNum': 0x1, 'height': 0x26 } }, { 'type': 'Image', 'props': { 'y': 0x1aa, 'x': 0x159, 'width': 0x66, 'var': 'box_2_btn_copy', 'stateNum': 0x1, 'height': 0x26 } }, { 'type': 'Button', 'props': { 'y': 0x1d2, 'x': 0x126, 'width': 0xc9, 'var': 'box_2_addclick', 'stateNum': 0x1, 'height': 0x1b } }, { 'type': 'Text', 'props': { 'y': 0x13c, 'x': 0x17a, 'width': 0xa3, 'var': 'box_2_lab_wx', 'height': 0x1f, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'left' } }] }, { 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'visible': ![], 'var': 'box_3_show' }, 'child': [{ 'type': 'Panel', 'props': { 'y': 0xf5, 'x': 0x10, 'width': 0x201, 'var': 'box_3_panel', 'vScrollBarSkin': '', 'height': 0x29e } }] }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0x0, 'width': 0xbb, 'var': 'btn_1', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0xba, 'width': 0xbb, 'var': 'btn_2', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0x177, 'width': 0xbb, 'var': 'btn_3', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x203, 'x': 0x22e, 'width': 0x25, 'var': 'btn_close', 'height': 0x8f } }, { 'type': 'Box', 'props': { 'width': 0x2ee, 'visible': ![], 'var': 'box_help', 'height': 0x536 }, 'child': [{ 'type': 'Sprite', 'props': { 'y': 0x0, 'x': 0x0, 'mouseThrough': ![], 'alpha': 0.7 }, 'child': [{ 'type': 'Rect', 'props': { 'width': 0x2ee, 'lineWidth': 0x1, 'height': 0x536, 'fillColor': '#000000' } }] }, { 'type': 'Image', 'props': { 'y': 0x158, 'x': 0x28, 'width': 0x1d2, 'var': 'box_help_bg', 'height': 0x203 }, 'child': [{ 'type': 'Button', 'props': { 'y': -0x1, 'x': 0x1a0, 'width': 0x33, 'var': 'box_help_close', 'height': 0x28 } }, { 'type': 'Image', 'props': { 'y': 0x3f, 'x': 0x98, 'width': 0xa0, 'var': 'box_help_qrcode', 'height': 0xa0 } }] }] }] }] }] }, ixz2s;
    }(laya['ui']['View']);au_b$['MainUI'] = _6u1ah;
  })(uh_c56 = b_ahu['demoui'] || (b_ahu['demoui'] = {}));
}(r_st23z || (r_st23z = {})), function (xyoji8) {
  var aub9$1;(function (_6uah1) {
    var gdepq = function (gpqr) {
      r_lz3svt(b_h1, gpqr);function b_h1() {
        return gpqr['call'](this) || this;
      }return b_h1['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), gpqr['prototype']['createChildren']['call'](this), this['createView'](xyoji8['demoui']['ToastUI']['uiView']);
      }, b_h1['uiView'] = { 'type': 'View', 'props': { 'width': 0x2ee, 'height': 0x536 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x12c, 'height': 0x32, 'centerY': 0x0, 'centerX': 0x0 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x12c, 'height': 0x32, 'centerX': 0x0, 'alpha': 0.5 }, 'child': [{ 'type': 'Rect', 'props': { 'width': 0x12c, 'lineWidth': 0x1, 'height': 0x32, 'fillColor': '#382f2f' } }] }, { 'type': 'Text', 'props': { 'width': 0x12c, 'var': 'lab_msg', 'valign': 'middle', 'text': 'text', 'height': 0x32, 'fontSize': 0x18, 'color': '#ffffff', 'align': 'center' } }] }] }, b_h1;
    }(laya['ui']['View']);_6uah1['ToastUI'] = gdepq;
  })(aub9$1 = xyoji8['demoui'] || (xyoji8['demoui'] = {}));
}(r_st23z || (r_st23z = {}));var r_ky8ioj = function () {
  function oj2z() {}return oj2z['init'] = function () {
    !this['ui'] && (this['ui'] = new r_st23z['demoui']['ToastUI'](), this['ui']['visible'] = ![], Laya['stage']['addChild'](this['ui']));
  }, oj2z['msg'] = function (fdcqn) {
    var nfdqc = this;!this['ui'] && oj2z['init'](), this['ui']['visible'] = !![], this['ui']['lab_msg']['text'] = fdcqn, clearTimeout(this['interval']), this['interval'] = setTimeout(function () {
      nfdqc['ui']['visible'] = ![];
    }, 0x7d0);
  }, oj2z;
}();window['minitool'] = r_kw7r8m;