var E = wx.$p;
var p_jkhi$ = this && this['__extends'] || function () {
  var j$y61i = function (c8qagb, lu_f) {
    return j$y61i = Object['setPrototypeOf'] || { '__proto__': [] } instanceof Array && function (ulx, cqabdg) {
      ulx['__proto__'] = cqabdg;
    } || function (w3rz20, w39en5) {
      for (var v70r12 in w39en5) if (w39en5['hasOwnProperty'](v70r12)) w3rz20[v70r12] = w39en5[v70r12];
    }, j$y61i(c8qagb, lu_f);
  };return function (v7$6r1, w3502) {
    j$y61i(v7$6r1, w3502);function vr671$() {
      this['constructor'] = v7$6r1;
    }v7$6r1['prototype'] = w3502 === null ? Object['create'](w3502) : (vr671$['prototype'] = w3502['prototype'], new vr671$());
  };
}(),
    p_uf_tm = window['Sygame'],
    p_skhpl = ![],
    p_$iyv = function () {
  function k6y$ij() {}return k6y$ij['init'] = function () {
    p_skhpl ? this['sygame'] = { 'channel': '3477d2273abd484ba2a0e04ad4971b3c', 'role_id': undefined, 'openid': 'oxmOf5biumkGash-Xht9FVAlswVk', 'appid': 'wx2936121c4817bf46' } : this['sygame'] = p_uf_tm;
  }, k6y$ij['getTimeStamp'] = function () {
    return new Date()['getTime']();
  }, k6y$ij['setResMap'] = function (bqc8, xu4tp) {
    this['resMap'][bqc8] = bqc8 + '?' + xu4tp;
  }, k6y$ij['getResMap'] = function (hyjki$) {
    return this['resMap'][hyjki$];
  }, k6y$ij['resMap'] = {}, k6y$ij;
}(),
    p_jhiky$ = function () {
  function sjhp4() {
    this['getIcon'] = 'https://wx.11babay.cn/uploads/f/fkccc1532944783/5/2/c/7/60dc442c4fbc5.png', this['copyIcon'] = 'https://wx.11babay.cn/uploads/f/fkccc1532944783/3/0/1/7/60dc4409dce39.png', p_$iyv['init'](), this['postSidebarApi']();
  }return sjhp4['prototype']['send'] = function (z2370r, sph4kl, xum_fo, cdg, ij$y6k) {
    cdg === void 0x0 && (cdg = 'get');ij$y6k === void 0x0 && (ij$y6k = '' || null);var vr16 = new Laya['HttpRequest']();vr16['http']['timeout'] = 0x2710, vr16['once'](Laya['Event']['COMPLETE'], this, sph4kl), vr16['once'](Laya['Event']['ERROR'], this, xum_fo), vr16['send'](z2370r, ij$y6k, cdg, 'text');
  }, sjhp4['prototype']['postSidebarApi'] = function () {
    this['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=sidebarApi&channel=' + p_$iyv['sygame']['channel'], this['completeHandler'], this['errorHandler']);
  }, sjhp4['prototype']['completeHandler'] = function (zw30r) {
    var $1iyv6 = JSON['parse'](zw30r);console['log']($1iyv6);switch ($1iyv6['status']) {case 0x3e9:
        var l4pxts = [];$1iyv6['msg']['basics_image_url'] && l4pxts['push']({ 'url': $1iyv6['msg']['basics_image_url'], 'type': Laya['Loader']['IMAGE'] }), $1iyv6['msg']['public_code'] && l4pxts['push']({ 'url': $1iyv6['msg']['public_code'], 'type': Laya['Loader']['IMAGE'] }), $1iyv6['msg']['vip_customer_service'] && l4pxts['push']({ 'url': $1iyv6['msg']['vip_customer_service'], 'type': Laya['Loader']['IMAGE'] }), $1iyv6['msg']['vip_customer_service_not_add'] && l4pxts['push']({ 'url': $1iyv6['msg']['vip_customer_service_not_add'], 'type': Laya['Loader']['IMAGE'] }), $1iyv6['msg']['game_center_image_url'] && l4pxts['push']({ 'url': $1iyv6['msg']['game_center_image_url'], 'type': Laya['Loader']['IMAGE'] }), $1iyv6['msg']['vip_qrcode'] && l4pxts['push']({ 'url': $1iyv6['msg']['vip_qrcode'], 'type': Laya['Loader']['IMAGE'] }), $1iyv6['msg']['getIcon'] && l4pxts['push']({ 'url': this['getIcon'], 'type': Laya['Loader']['IMAGE'] }), $1iyv6['msg']['copyIcon'] && l4pxts['push']({ 'url': this['copyIcon'], 'type': Laya['Loader']['IMAGE'] });for (var uft_ = 0x0, w0z52 = $1iyv6['msg']['follow_gift_list']; uft_ < w0z52['length']; uft_++) {
          var ky$hij = w0z52[uft_];l4pxts['push']({ 'url': ky$hij['url'], 'type': Laya['Loader']['IMAGE'] });
        }for (var pshk4l = 0x0, pu4t = $1iyv6['msg']['vip_box_list']; pshk4l < pu4t['length']; pshk4l++) {
          var ky$hij = pu4t[pshk4l];l4pxts['push']({ 'url': ky$hij['url'], 'type': Laya['Loader']['IMAGE'] });
        }for (var mxou = 0x0; mxou < l4pxts['length']; mxou++) {
          p_$iyv['setResMap'](l4pxts[mxou]['url'], p_$iyv['getTimeStamp']()), l4pxts[mxou]['url'] = p_$iyv['getResMap'](l4pxts[mxou]['url']);
        }Laya['loader']['load'](l4pxts, Laya['Handler']['create'](this, this['initGame'])), this['data'] = $1iyv6['msg'];break;case 0x3ea:
        p_mftu_x['msg']('空的游戏channel');break;case 0x3eb:
        p_mftu_x['msg']('错误的游戏channel');break;case 0x3ec:
        p_mftu_x['msg']('未找到对应游戏大类');break;case 0x3ed:
        p_mftu_x['msg']('未设置侧边栏');break;}
  }, sjhp4['prototype']['errorHandler'] = function (ls4tph) {}, sjhp4['prototype']['initGame'] = function () {
    var yv1$6i = new p_wn305z(this);yv1$6i['show']();
  }, sjhp4;
}(),
    p_wn305z = function () {
  function bn8qe9(mxou_f) {
    this['page'] = 0x3, this['rolePriceData'] = {}, this['boxlist'] = [], this['donwX'] = 0x0, this['downY'] = 0x0, this['tool'] = mxou_f;
  }return bn8qe9['prototype']['setChildMouseThroughs'] = function (sjhk4p) {
    var ftxpul = sjhk4p['_childs'] || [];for (var beq9n = 0x0; beq9n < ftxpul['length']; beq9n++) {
      ftxpul[beq9n] && (ftxpul[beq9n]['mouseThrough'] = !![]);
    }
  }, bn8qe9['prototype']['show'] = function () {
    if (this['tool']['data']['on'] === '1') {
      this['main'] = new p_jhyk$i['demoui']['MainUI'](), Laya['stage']['addChild'](this['main']), this['main']['mouseThrough'] = !![];var sklhp = this['main']['_childs'] || [];for (var qcadg = 0x0; qcadg < sklhp['length']; qcadg++) {
        sklhp[qcadg]['mouseThrough'] = !![];
      }this['setChildMouseThroughs'](this['main']['_childs']), this['setChildMouseThroughs'](this['main']['_childs'][0x0]), this['initIcon'](), this['initEvent'](), this['initView'](), p_mftu_x['init']();
    }
  }, bn8qe9['prototype']['initView'] = function () {
    var tuxlpf = this,
        tlpuf = this['tool']['data']['follow_down_words']['replace'](/\\n/g, '\x0a');this['main']['box_1_lab_info']['text'] = tlpuf;for (var h4lksp = 0x1; h4lksp <= this['tool']['data']['follow_gift_list']['length']; h4lksp++) {
      var w0z2r3 = this['tool']['data']['follow_gift_list'][h4lksp - 0x1];this['main']['box_1_img_' + h4lksp]['skin'] = w0z2r3['url'], this['main']['box_1_lab_' + h4lksp]['text'] = w0z2r3['name'];
    }for (var h4lksp = 0x1; h4lksp <= this['tool']['data']['vip_box_list']['length']; h4lksp++) {
      var w0z2r3 = this['tool']['data']['vip_box_list'][h4lksp - 0x1];this['main']['box_2_img_' + h4lksp]['skin'] = w0z2r3['url'], this['main']['box_2_lab_' + h4lksp]['text'] = w0z2r3['name'];
    }this['main']['box_2_lab_m_1']['text'] = '方法一：单日充值' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_m_2']['text'] = '方法二：历史累计充值' + +this['tool']['data']['y'] + '元', this['main']['box_2_lab_v_1']['text'] = (this['rolePriceData']['todayPrice'] || 0x0) + '/' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_v_2']['text'] = (this['rolePriceData']['allPrice'] || 0x0) + '/' + +this['tool']['data']['y'] + '元', this['main']['box_2_btn_copy']['skin'] = this['tool']['copyIcon'], this['main']['box_2_btn_get']['skin'] = this['tool']['getIcon'], this['main']['box_2_btn_copy']['visible'] = ![], this['main']['box_2_btn_get']['on'](Laya['Event']['CLICK'], this, function () {
      if (tuxlpf['rolePriceData']['is_vip'] == 0x0) {
        p_mftu_x['msg']('请先获取vip资格');return;
      }tuxlpf['main']['box_2_lab_wx']['text'] = tuxlpf['tool']['data']['vip_wx'], tuxlpf['main']['box_2_btn_copy']['visible'] = !![];
    }), this['main']['box_2_btn_copy']['on'](Laya['Event']['CLICK'], this, function () {
      tuxlpf['copyText'](tuxlpf['tool']['data']['vip_wx']);
    }), this['main']['box_2_addclick']['on'](Laya['Event']['CLICK'], this, function () {
      if (tuxlpf['rolePriceData']['is_vip'] == 0x0) return;tuxlpf['main']['box_help']['visible'] = !![];
    }), this['main']['box_help_close']['on'](Laya['Event']['CLICK'], this, function () {
      tuxlpf['main']['box_help']['visible'] = ![];
    }), this['main']['box_help_bg']['skin'] = this['tool']['data']['vip_customer_service_not_add'], this['main']['box_help_qrcode']['skin'] = this['tool']['data']['vip_qrcode'], this['main']['box_help_qrcode']['scaleX'] = 0xa0 / this['main']['box_help_qrcode']['width'], this['main']['box_help_qrcode']['scaleY'] = 0xa0 / this['main']['box_help_qrcode']['width'], this['main']['box_3_panel']['vScrollBar']['visible'] = ![], this['main']['box_3_panel']['vScrollBarSkin'] = 'common_atlas/scrollBar.png';
  }, bn8qe9['prototype']['initIcon'] = function () {
    this['icon'] = new Laya['Image'](), this['icon']['skin'] = this['tool']['data']['basics_image_url'], this['icon']['x'] = 0x0, this['icon']['y'] = 0xc8, this['icon']['width'] = 0x66, this['icon']['height'] = 0x6f, this['main']['addChild'](this['icon']), this['icon']['on'](Laya['Event']['MOUSE_DOWN'], this, this['iconPress']), this['icon']['on'](Laya['Event']['MOUSE_UP'], this, this['iconUp']), this['icon']['on'](Laya['Event']['MOUSE_WHEEL'], this, this['iconMove']), this['dragRect'] = new Laya['Rectangle'](-this['icon']['width'] / 0x2, 0x0, Laya['stage']['width'], Laya['stage']['height'] - this['icon']['height'] / 0x2);
  }, bn8qe9['prototype']['initEvent'] = function () {
    var $r167v = this;this['main']['btn_1']['on'](Laya['Event']['CLICK'], this, function () {
      if ($r167v['page'] == 0x1) return;$r167v['page1']();
    }), this['main']['btn_2']['on'](Laya['Event']['CLICK'], this, function () {
      if ($r167v['page'] == 0x2) return;$r167v['page2']();
    }), this['main']['btn_3']['on'](Laya['Event']['CLICK'], this, function () {
      if ($r167v['page'] == 0x3) return;$r167v['page3']();
    }), this['main']['btn_close']['on'](Laya['Event']['CLICK'], this, function () {
      $r167v['main']['bg']['x'] = -0x2ee, $r167v['icon']['visible'] = !![];
    });
  }, bn8qe9['prototype']['initBoard'] = function () {
    this['isInitBoard'] = !![], this['page1']();
  }, bn8qe9['prototype']['showBoard'] = function () {
    this['main']['bg']['x'] = 0x0, this['icon']['visible'] = ![], this['tool']['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=sidebarApiRoleId&role_id=' + p_$iyv['sygame']['role_id'] + '&channel=' + p_$iyv['sygame']['channel'], this['rolePriceHandler']['bind'](this), this['roleError']['bind'](this));
  }, bn8qe9['prototype']['page1'] = function () {
    this['page'] = 0x1, this['main']['bg']['skin'] = this['tool']['data']['public_code'], this['main']['box_1_show']['visible'] = !![], this['main']['box_2_show']['visible'] = ![], this['main']['box_3_show']['visible'] = ![];
  }, bn8qe9['prototype']['page2'] = function () {
    this['page'] = 0x2, this['main']['bg']['skin'] = this['tool']['data']['vip_customer_service'], this['main']['box_1_show']['visible'] = ![], this['main']['box_2_show']['visible'] = !![], this['main']['box_3_show']['visible'] = ![];
  }, bn8qe9['prototype']['page3'] = function () {
    this['page'] = 0x3, this['main']['bg']['skin'] = this['tool']['data']['game_center_image_url'], this['main']['box_1_show']['visible'] = ![], this['main']['box_2_show']['visible'] = ![], this['main']['box_3_show']['visible'] = !![], this['sendBox'] || this['getBoxList'](0x0), this['sendBox'] = !![], p_uf_tm && p_uf_tm['syClickOpenBox']();
  }, bn8qe9['prototype']['getBoxList'] = function ($61rv7) {
    var i1jy = this;p_uf_tm && p_uf_tm['syGetBoxList']({ 'page': $61rv7, 'count': 0xc })['then'](function (qabc) {
      var en5wz3 = qabc['data'];en5wz3['status'] == 0x3e9 ? en5wz3['data'] && en5wz3['data']['length'] && (i1jy['boxlist'] = i1jy['boxlist']['concat'](en5wz3['data']), $61rv7++, i1jy['getBoxList']($61rv7)) : i1jy['boxListHandler']();
    });
  }, bn8qe9['prototype']['copyText'] = function (h4ptls) {
    try {
      wx['setClipboardData']({ 'data': h4ptls, 'success': function (v70z) {
          console['log']('复制成功:', v70z);
        } });
    } catch (ltpx4u) {}
  }, bn8qe9['prototype']['rolePriceHandler'] = function (_lxftu) {
    this['rolePriceData'] = JSON['parse'](_lxftu);switch (this['rolePriceData']['status']) {case 0x3e9:
        this['main']['box_2_lab_v_1']['text'] = (this['rolePriceData']['todayPrice'] || 0x0) + '/' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_v_2']['text'] = (this['rolePriceData']['allPrice'] || 0x0) + '/' + +this['tool']['data']['y'] + '元';break;case 0x3ea:
        break;case 0x3eb:
        break;}
  }, bn8qe9['prototype']['roleError'] = function () {}, bn8qe9['prototype']['boxListHandler'] = function () {
    var v$1yi = function (fplxt) {
      var n98ebq = iy$6['boxlist'][fplxt],
          ltspx = new p_jhyk$i['demoui']['BoxItemUI']();ltspx['icon']['skin'] = n98ebq['icon'], ltspx['title']['text'] = n98ebq['title'], ltspx['x'] = 0xa0 * (fplxt % 0x3), ltspx['y'] = 0xa0 * (fplxt / 0x3 ^ 0x0), iy$6['main']['box_3_panel']['addChild'](ltspx);var bqadcg = { 'appid': p_$iyv['sygame']['appid'], 'game_id': n98ebq['game_id'], 'jump_appid': n98ebq['jump_appid'], 'jump_path': n98ebq['jump_path'], 'tunnel_id': n98ebq['tunnel_id'], 'uv': 0x0, 'wecha_id': p_$iyv['sygame']['openid'] },
          ptlf = n98ebq['preview_img'],
          ikjysh = n98ebq['jump_type'],
          hkp4s = n98ebq['kf_session'];ltspx['on'](Laya['Event']['CLICK'], iy$6, function () {
        p_uf_tm && p_uf_tm['syClickBox']({ 'game_id': n98ebq['game_id'], 'tunnel_id': n98ebq['tunnel_id'], 'jump_appid': n98ebq['jump_appid'], 'jump_path': n98ebq['jump_path'] })['then'](function (upflt) {
          if (ikjysh === '0') wx['navigateToMiniProgram']({ 'appId': bqadcg['jump_appid'], 'path': bqadcg['jump_path'], 'fail': function (cbaq8) {
              if (!ptlf) return;wx['previewImage']({ 'urls': [ptlf] });
            } });else {
            if (ikjysh === '1') {
              if (!ptlf) return;wx['previewImage']({ 'urls': [ptlf] });
            } else {
              if (ikjysh === '2') {
                if (!hkp4s) return;wx['openCustomerServiceConversation']({ 'sessionFrom': hkp4s, 'showMessageCard': !![], 'sendMessageTitle': '', 'sendMessagePath': '', 'sendMessageImg': '' });
              }
            }
          }
        });
      });
    },
        iy$6 = this;for (var ew3nz = 0x0; ew3nz < this['boxlist']['length']; ew3nz++) {
      v$1yi(ew3nz);
    }
  }, bn8qe9['prototype']['boxListError'] = function () {}, bn8qe9['prototype']['boxClickHandler'] = function () {}, bn8qe9['prototype']['iconPress'] = function (g9qb) {
    this['donwX'] = g9qb['target']['x'], this['donwY'] = g9qb['target']['y'], this['icon']['startDrag'](this['dragRect']), this['isMove'] = ![], this['isPress'] = !![];
  }, bn8qe9['prototype']['iconMove'] = function (fxupl) {
    this['isMove'] = !![];
  }, bn8qe9['prototype']['iconUp'] = function (neq89b) {
    var $6kj = neq89b['target']['x'],
        jyih$k = neq89b['target']['y'];this['icon']['stopDrag'](), $6kj == this['donwX'] && this['donwY'] == jyih$k && (this['isInitBoard'] || this['initBoard'](), this['showBoard']()), this['isMove'] = ![], this['isPress'] = ![];
  }, bn8qe9;
}(),
    p_jhyk$i;(function (yijksh) {
  var b9aq8e;(function ($yij) {
    var jyi$61 = function (spl) {
      p_jkhi$(v67r12, spl);function v67r12() {
        return spl['call'](this) || this;
      }return v67r12['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), spl['prototype']['createChildren']['call'](this), this['createView'](yijksh['demoui']['BoxItemUI']['uiView']);
      }, v67r12['uiView'] = { 'type': 'View', 'props': { 'width': 0xb4, 'height': 0xa0 }, 'child': [{ 'type': 'Image', 'props': { 'y': 0x3, 'x': 0x20, 'width': 0x73, 'var': 'icon', 'height': 0x73 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x79, 'x': -0x21, 'width': 0xb4, 'var': 'title', 'valign': 'middle', 'height': 0x22, 'fontSize': 0x16, 'color': '#441d1c', 'align': 'center' } }] }] }, v67r12;
    }(laya['ui']['View']);$yij['BoxItemUI'] = jyi$61;
  })(b9aq8e = yijksh['demoui'] || (yijksh['demoui'] = {}));
})(p_jhyk$i || (p_jhyk$i = {})), function (flxtu_) {
  var ouxm_f;(function (iks) {
    var wne58 = function (w052z) {
      p_jkhi$(hjsk4, w052z);function hjsk4() {
        return w052z['call'](this) || this;
      }return hjsk4['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), w052z['prototype']['createChildren']['call'](this), this['createView'](flxtu_['demoui']['MainUI']['uiView']);
      }, hjsk4['uiView'] = { 'type': 'View', 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x2ee, 'top': 0x0, 'right': 0x0, 'left': 0x0, 'height': 0x536, 'bottom': 0x0 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x2ee, 'height': 0x536, 'centerY': 0x0 }, 'child': [{ 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x2ee, 'var': 'bg', 'height': 0x536 }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x2ee, 'visible': ![], 'var': 'box_1_show', 'height': 0x536, 'centerY': 0x0 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x253, 'x': 0x2e, 'width': 0x1d0, 'var': 'box_1_lab_info', 'leading': 0xa, 'height': 0x97, 'fontSize': 0x18, 'color': '#a959ee' } }, { 'type': 'HBox', 'props': { 'y': 0x2ee, 'x': 0x14, 'width': 0x1fe, 'space': 0x35, 'height': 0x78, 'align': 'top' }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x58, 'var': 'box_1_img_1', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_1', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0xa, 'x': 0xa, 'width': 0x58, 'var': 'box_1_img_2', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_2', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x14, 'x': 0x14, 'width': 0x58, 'var': 'box_1_img_3', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_3', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x1e, 'x': 0x1e, 'width': 0x58, 'var': 'box_1_img_4', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_4', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }] }] }, { 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'visible': ![], 'var': 'box_2_show' }, 'child': [{ 'type': 'HBox', 'props': { 'y': 0x220, 'x': 0x18, 'width': 0x1f4, 'space': 0x2c, 'height': 0x56, 'align': 'top' }, 'child': [{ 'type': 'Image', 'props': { 'y': 2.5, 'x': 0x0, 'width': 0x58, 'var': 'box_2_img_1', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_1', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0xc, 'x': 0xa, 'width': 0x58, 'var': 'box_2_img_2', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_2', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x16, 'x': 0x14, 'width': 0x58, 'var': 'box_2_img_3', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_3', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x20, 'x': 0x1e, 'width': 0x58, 'var': 'box_2_img_4', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_4', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x2a, 'x': 0x28, 'width': 0x58, 'var': 'box_2_img_5', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_5', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }] }, { 'type': 'Box', 'props': { 'y': 0x384, 'x': 0x0, 'width': 0x221, 'height': 0x44 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x0, 'x': 0x28, 'width': 0x122, 'var': 'box_2_lab_m_1', 'text': '方法一\uFF1A单日充值1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300' } }, { 'type': 'Text', 'props': { 'y': 0x1e, 'x': 0x28, 'width': 0x122, 'var': 'box_2_lab_m_2', 'text': '方法一\uFF1A历史累计充值1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300' } }, { 'type': 'Text', 'props': { 'y': 0x0, 'x': 0x141, 'width': 0xa4, 'var': 'box_2_lab_v_1', 'text': '1000/1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300', 'align': 'right' } }, { 'type': 'Text', 'props': { 'y': 0x1e, 'x': 0x141, 'width': 0xa4, 'var': 'box_2_lab_v_2', 'text': '1000/1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300', 'align': 'right' } }] }, { 'type': 'Image', 'props': { 'y': 0x1aa, 'x': 0x159, 'width': 0x66, 'var': 'box_2_btn_get', 'stateNum': 0x1, 'height': 0x26 } }, { 'type': 'Image', 'props': { 'y': 0x1aa, 'x': 0x159, 'width': 0x66, 'var': 'box_2_btn_copy', 'stateNum': 0x1, 'height': 0x26 } }, { 'type': 'Button', 'props': { 'y': 0x1d2, 'x': 0x126, 'width': 0xc9, 'var': 'box_2_addclick', 'stateNum': 0x1, 'height': 0x1b } }, { 'type': 'Text', 'props': { 'y': 0x13c, 'x': 0x17a, 'width': 0xa3, 'var': 'box_2_lab_wx', 'height': 0x1f, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'left' } }] }, { 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'visible': ![], 'var': 'box_3_show' }, 'child': [{ 'type': 'Panel', 'props': { 'y': 0xf5, 'x': 0x10, 'width': 0x201, 'var': 'box_3_panel', 'vScrollBarSkin': '', 'height': 0x29e } }] }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0x0, 'width': 0xbb, 'var': 'btn_1', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0xba, 'width': 0xbb, 'var': 'btn_2', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0x177, 'width': 0xbb, 'var': 'btn_3', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x203, 'x': 0x22e, 'width': 0x25, 'var': 'btn_close', 'height': 0x8f } }, { 'type': 'Box', 'props': { 'width': 0x2ee, 'visible': ![], 'var': 'box_help', 'height': 0x536 }, 'child': [{ 'type': 'Sprite', 'props': { 'y': 0x0, 'x': 0x0, 'mouseThrough': ![], 'alpha': 0.7 }, 'child': [{ 'type': 'Rect', 'props': { 'width': 0x2ee, 'lineWidth': 0x1, 'height': 0x536, 'fillColor': '#000000' } }] }, { 'type': 'Image', 'props': { 'y': 0x158, 'x': 0x28, 'width': 0x1d2, 'var': 'box_help_bg', 'height': 0x203 }, 'child': [{ 'type': 'Button', 'props': { 'y': -0x1, 'x': 0x1a0, 'width': 0x33, 'var': 'box_help_close', 'height': 0x28 } }, { 'type': 'Image', 'props': { 'y': 0x3f, 'x': 0x98, 'width': 0xa0, 'var': 'box_help_qrcode', 'height': 0xa0 } }] }] }] }] }] }, hjsk4;
    }(laya['ui']['View']);iks['MainUI'] = wne58;
  })(ouxm_f = flxtu_['demoui'] || (flxtu_['demoui'] = {}));
}(p_jhyk$i || (p_jhyk$i = {})), function (y$v61) {
  var wz352;(function (fuxmo) {
    var n5z03w = function (ik4s) {
      p_jkhi$(ut_lfx, ik4s);function ut_lfx() {
        return ik4s['call'](this) || this;
      }return ut_lfx['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), ik4s['prototype']['createChildren']['call'](this), this['createView'](y$v61['demoui']['ToastUI']['uiView']);
      }, ut_lfx['uiView'] = { 'type': 'View', 'props': { 'width': 0x2ee, 'height': 0x536 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x12c, 'height': 0x32, 'centerY': 0x0, 'centerX': 0x0 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x12c, 'height': 0x32, 'centerX': 0x0, 'alpha': 0.5 }, 'child': [{ 'type': 'Rect', 'props': { 'width': 0x12c, 'lineWidth': 0x1, 'height': 0x32, 'fillColor': '#382f2f' } }] }, { 'type': 'Text', 'props': { 'width': 0x12c, 'var': 'lab_msg', 'valign': 'middle', 'text': 'text', 'height': 0x32, 'fontSize': 0x18, 'color': '#ffffff', 'align': 'center' } }] }] }, ut_lfx;
    }(laya['ui']['View']);fuxmo['ToastUI'] = n5z03w;
  })(wz352 = y$v61['demoui'] || (y$v61['demoui'] = {}));
}(p_jhyk$i || (p_jhyk$i = {}));var p_mftu_x = function () {
  function l4tux() {}return l4tux['init'] = function () {
    !this['ui'] && (this['ui'] = new p_jhyk$i['demoui']['ToastUI'](), this['ui']['visible'] = ![], Laya['stage']['addChild'](this['ui']));
  }, l4tux['msg'] = function (be98nq) {
    var of_mu = this;!this['ui'] && l4tux['init'](), this['ui']['visible'] = !![], this['ui']['lab_msg']['text'] = be98nq, clearTimeout(this['interval']), this['interval'] = setTimeout(function () {
      of_mu['ui']['visible'] = ![];
    }, 0x7d0);
  }, l4tux;
}();window['minitool'] = p_jhiky$;