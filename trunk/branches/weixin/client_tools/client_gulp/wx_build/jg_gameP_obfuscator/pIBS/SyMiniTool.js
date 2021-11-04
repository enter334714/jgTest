var E = wx.$p;
var p_j1y$i = this && this['__extends'] || function () {
  var $ijky = function (lpfxut, omxf_u) {
    return $ijky = Object['setPrototypeOf'] || { '__proto__': [] } instanceof Array && function (ufptx, fuxt_) {
      ufptx['__proto__'] = fuxt_;
    } || function (nw5e8, pl4hts) {
      for (var lts4 in pl4hts) if (pl4hts['hasOwnProperty'](lts4)) nw5e8[lts4] = pl4hts[lts4];
    }, $ijky(lpfxut, omxf_u);
  };return function (utxf_m, uf_mt) {
    $ijky(utxf_m, uf_mt);function cdgabq() {
      this['constructor'] = utxf_m;
    }utxf_m['prototype'] = uf_mt === null ? Object['create'](uf_mt) : (cdgabq['prototype'] = uf_mt['prototype'], new cdgabq());
  };
}(),
    p_bag89 = window['Sygame'],
    p_qen9b = ![],
    p_u4tplx = function () {
  function vr$716() {}return vr$716['init'] = function () {
    p_qen9b ? this['sygame'] = { 'channel': '3477d2273abd484ba2a0e04ad4971b3c', 'role_id': undefined, 'openid': 'oxmOf5biumkGash-Xht9FVAlswVk', 'appid': 'wx2936121c4817bf46' } : this['sygame'] = p_bag89;
  }, vr$716['getTimeStamp'] = function () {
    return new Date()['getTime']();
  }, vr$716['setResMap'] = function (bqgac8, h4kjsp) {
    this['resMap'][bqgac8] = bqgac8 + '?' + h4kjsp;
  }, vr$716['getResMap'] = function (xtmf) {
    return this['resMap'][xtmf];
  }, vr$716['resMap'] = {}, vr$716;
}(),
    p_splth4 = function () {
  function r02zv7() {
    this['getIcon'] = 'https://wx.11babay.cn/uploads/f/fkccc1532944783/5/2/c/7/60dc442c4fbc5.png', this['copyIcon'] = 'https://wx.11babay.cn/uploads/f/fkccc1532944783/3/0/1/7/60dc4409dce39.png', p_u4tplx['init'](), this['postSidebarApi']();
  }return r02zv7['prototype']['send'] = function (cqga, jk4shi, r0zv7, r0723z, z2wr30) {
    r0723z === void 0x0 && (r0723z = 'get');z2wr30 === void 0x0 && (z2wr30 = '' || null);var $ji1y6 = new Laya['HttpRequest']();$ji1y6['http']['timeout'] = 0x2710, $ji1y6['once'](Laya['Event']['COMPLETE'], this, jk4shi), $ji1y6['once'](Laya['Event']['ERROR'], this, r0zv7), $ji1y6['send'](cqga, z2wr30, r0723z, 'text');
  }, r02zv7['prototype']['postSidebarApi'] = function () {
    this['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=sidebarApi&channel=' + p_u4tplx['sygame']['channel'], this['completeHandler'], this['errorHandler']);
  }, r02zv7['prototype']['completeHandler'] = function (s4pxt) {
    var bqe89a = JSON['parse'](s4pxt);console['log'](bqe89a);switch (bqe89a['status']) {case 0x3e9:
        var lpu4t = [];bqe89a['msg']['basics_image_url'] && lpu4t['push']({ 'url': bqe89a['msg']['basics_image_url'], 'type': Laya['Loader']['IMAGE'] }), bqe89a['msg']['public_code'] && lpu4t['push']({ 'url': bqe89a['msg']['public_code'], 'type': Laya['Loader']['IMAGE'] }), bqe89a['msg']['vip_customer_service'] && lpu4t['push']({ 'url': bqe89a['msg']['vip_customer_service'], 'type': Laya['Loader']['IMAGE'] }), bqe89a['msg']['vip_customer_service_not_add'] && lpu4t['push']({ 'url': bqe89a['msg']['vip_customer_service_not_add'], 'type': Laya['Loader']['IMAGE'] }), bqe89a['msg']['game_center_image_url'] && lpu4t['push']({ 'url': bqe89a['msg']['game_center_image_url'], 'type': Laya['Loader']['IMAGE'] }), bqe89a['msg']['vip_qrcode'] && lpu4t['push']({ 'url': bqe89a['msg']['vip_qrcode'], 'type': Laya['Loader']['IMAGE'] }), bqe89a['msg']['getIcon'] && lpu4t['push']({ 'url': this['getIcon'], 'type': Laya['Loader']['IMAGE'] }), bqe89a['msg']['copyIcon'] && lpu4t['push']({ 'url': this['copyIcon'], 'type': Laya['Loader']['IMAGE'] });for (var n35zw = 0x0, pslxt4 = bqe89a['msg']['follow_gift_list']; n35zw < pslxt4['length']; n35zw++) {
          var eaq = pslxt4[n35zw];lpu4t['push']({ 'url': eaq['url'], 'type': Laya['Loader']['IMAGE'] });
        }for (var n03z5w = 0x0, z2vr7 = bqe89a['msg']['vip_box_list']; n03z5w < z2vr7['length']; n03z5w++) {
          var eaq = z2vr7[n03z5w];lpu4t['push']({ 'url': eaq['url'], 'type': Laya['Loader']['IMAGE'] });
        }for (var ls4htp = 0x0; ls4htp < lpu4t['length']; ls4htp++) {
          p_u4tplx['setResMap'](lpu4t[ls4htp]['url'], p_u4tplx['getTimeStamp']()), lpu4t[ls4htp]['url'] = p_u4tplx['getResMap'](lpu4t[ls4htp]['url']);
        }Laya['loader']['load'](lpu4t, Laya['Handler']['create'](this, this['initGame'])), this['data'] = bqe89a['msg'];break;case 0x3ea:
        p_v61$r['msg']('空的游戏channel');break;case 0x3eb:
        p_v61$r['msg']('错误的游戏channel');break;case 0x3ec:
        p_v61$r['msg']('未找到对应游戏大类');break;case 0x3ed:
        p_v61$r['msg']('未设置侧边栏');break;}
  }, r02zv7['prototype']['errorHandler'] = function (qb9n) {}, r02zv7['prototype']['initGame'] = function () {
    var qg9b8a = new p_siyjkh(this);qg9b8a['show']();
  }, r02zv7;
}(),
    p_siyjkh = function () {
  function umfx(u_f) {
    this['page'] = 0x3, this['rolePriceData'] = {}, this['boxlist'] = [], this['donwX'] = 0x0, this['downY'] = 0x0, this['tool'] = u_f;
  }return umfx['prototype']['setChildMouseThroughs'] = function (rz7230) {
    var oum_fx = rz7230['_childs'] || [];for (var umfxo = 0x0; umfxo < oum_fx['length']; umfxo++) {
      oum_fx[umfxo] && (oum_fx[umfxo]['mouseThrough'] = !![]);
    }
  }, umfx['prototype']['show'] = function () {
    if (this['tool']['data']['on'] === '1') {
      this['main'] = new p_skp4j['demoui']['MainUI'](), Laya['stage']['addChild'](this['main']), this['main']['mouseThrough'] = !![];var mtxfu_ = this['main']['_childs'] || [];for (var cb8ga = 0x0; cb8ga < mtxfu_['length']; cb8ga++) {
        mtxfu_[cb8ga]['mouseThrough'] = !![];
      }this['setChildMouseThroughs'](this['main']['_childs']), this['setChildMouseThroughs'](this['main']['_childs'][0x0]), this['initIcon'](), this['initEvent'](), this['initView'](), p_v61$r['init']();
    }
  }, umfx['prototype']['initView'] = function () {
    var ab8eq9 = this,
        putfxl = this['tool']['data']['follow_down_words']['replace'](/\\n/g, '\x0a');this['main']['box_1_lab_info']['text'] = putfxl;for (var skhpj = 0x1; skhpj <= this['tool']['data']['follow_gift_list']['length']; skhpj++) {
      var kyij$6 = this['tool']['data']['follow_gift_list'][skhpj - 0x1];this['main']['box_1_img_' + skhpj]['skin'] = kyij$6['url'], this['main']['box_1_lab_' + skhpj]['text'] = kyij$6['name'];
    }for (var skhpj = 0x1; skhpj <= this['tool']['data']['vip_box_list']['length']; skhpj++) {
      var kyij$6 = this['tool']['data']['vip_box_list'][skhpj - 0x1];this['main']['box_2_img_' + skhpj]['skin'] = kyij$6['url'], this['main']['box_2_lab_' + skhpj]['text'] = kyij$6['name'];
    }this['main']['box_2_lab_m_1']['text'] = '方法一：单日充值' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_m_2']['text'] = '方法二：历史累计充值' + +this['tool']['data']['y'] + '元', this['main']['box_2_lab_v_1']['text'] = (this['rolePriceData']['todayPrice'] || 0x0) + '/' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_v_2']['text'] = (this['rolePriceData']['allPrice'] || 0x0) + '/' + +this['tool']['data']['y'] + '元', this['main']['box_2_btn_copy']['skin'] = this['tool']['copyIcon'], this['main']['box_2_btn_get']['skin'] = this['tool']['getIcon'], this['main']['box_2_btn_copy']['visible'] = ![], this['main']['box_2_btn_get']['on'](Laya['Event']['CLICK'], this, function () {
      if (ab8eq9['rolePriceData']['is_vip'] == 0x0) {
        p_v61$r['msg']('请先获取vip资格');return;
      }ab8eq9['main']['box_2_lab_wx']['text'] = ab8eq9['tool']['data']['vip_wx'], ab8eq9['main']['box_2_btn_copy']['visible'] = !![];
    }), this['main']['box_2_btn_copy']['on'](Laya['Event']['CLICK'], this, function () {
      ab8eq9['copyText'](ab8eq9['tool']['data']['vip_wx']);
    }), this['main']['box_2_addclick']['on'](Laya['Event']['CLICK'], this, function () {
      if (ab8eq9['rolePriceData']['is_vip'] == 0x0) return;ab8eq9['main']['box_help']['visible'] = !![];
    }), this['main']['box_help_close']['on'](Laya['Event']['CLICK'], this, function () {
      ab8eq9['main']['box_help']['visible'] = ![];
    }), this['main']['box_help_bg']['skin'] = this['tool']['data']['vip_customer_service_not_add'], this['main']['box_help_qrcode']['skin'] = this['tool']['data']['vip_qrcode'], this['main']['box_help_qrcode']['scaleX'] = 0xa0 / this['main']['box_help_qrcode']['width'], this['main']['box_help_qrcode']['scaleY'] = 0xa0 / this['main']['box_help_qrcode']['width'], this['main']['box_3_panel']['vScrollBar']['visible'] = ![], this['main']['box_3_panel']['vScrollBarSkin'] = 'common_atlas/scrollBar.png';
  }, umfx['prototype']['initIcon'] = function () {
    this['icon'] = new Laya['Image'](), this['icon']['skin'] = this['tool']['data']['basics_image_url'], this['icon']['x'] = 0x0, this['icon']['y'] = 0xc8, this['icon']['width'] = 0x66, this['icon']['height'] = 0x6f, this['main']['addChild'](this['icon']), this['icon']['on'](Laya['Event']['MOUSE_DOWN'], this, this['iconPress']), this['icon']['on'](Laya['Event']['MOUSE_UP'], this, this['iconUp']), this['icon']['on'](Laya['Event']['MOUSE_WHEEL'], this, this['iconMove']), this['dragRect'] = new Laya['Rectangle'](-this['icon']['width'] / 0x2, 0x0, Laya['stage']['width'], Laya['stage']['height'] - this['icon']['height'] / 0x2);
  }, umfx['prototype']['initEvent'] = function () {
    var fxu_tm = this;this['main']['btn_1']['on'](Laya['Event']['CLICK'], this, function () {
      if (fxu_tm['page'] == 0x1) return;fxu_tm['page1']();
    }), this['main']['btn_2']['on'](Laya['Event']['CLICK'], this, function () {
      if (fxu_tm['page'] == 0x2) return;fxu_tm['page2']();
    }), this['main']['btn_3']['on'](Laya['Event']['CLICK'], this, function () {
      if (fxu_tm['page'] == 0x3) return;fxu_tm['page3']();
    }), this['main']['btn_close']['on'](Laya['Event']['CLICK'], this, function () {
      fxu_tm['main']['bg']['x'] = -0x2ee, fxu_tm['icon']['visible'] = !![];
    });
  }, umfx['prototype']['initBoard'] = function () {
    this['isInitBoard'] = !![], this['page1']();
  }, umfx['prototype']['showBoard'] = function () {
    this['main']['bg']['x'] = 0x0, this['icon']['visible'] = ![], this['tool']['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=sidebarApiRoleId&role_id=' + p_u4tplx['sygame']['role_id'] + '&channel=' + p_u4tplx['sygame']['channel'], this['rolePriceHandler']['bind'](this), this['roleError']['bind'](this));
  }, umfx['prototype']['page1'] = function () {
    this['page'] = 0x1, this['main']['bg']['skin'] = this['tool']['data']['public_code'], this['main']['box_1_show']['visible'] = !![], this['main']['box_2_show']['visible'] = ![], this['main']['box_3_show']['visible'] = ![];
  }, umfx['prototype']['page2'] = function () {
    this['page'] = 0x2, this['main']['bg']['skin'] = this['tool']['data']['vip_customer_service'], this['main']['box_1_show']['visible'] = ![], this['main']['box_2_show']['visible'] = !![], this['main']['box_3_show']['visible'] = ![];
  }, umfx['prototype']['page3'] = function () {
    this['page'] = 0x3, this['main']['bg']['skin'] = this['tool']['data']['game_center_image_url'], this['main']['box_1_show']['visible'] = ![], this['main']['box_2_show']['visible'] = ![], this['main']['box_3_show']['visible'] = !![], this['sendBox'] || this['getBoxList'](0x0), this['sendBox'] = !![], p_bag89 && p_bag89['syClickOpenBox']();
  }, umfx['prototype']['getBoxList'] = function (ths4p) {
    var txu_fm = this;p_bag89 && p_bag89['syGetBoxList']({ 'page': ths4p, 'count': 0xc })['then'](function (y76$v1) {
      var w025z3 = y76$v1['data'];w025z3['status'] == 0x3e9 ? w025z3['data'] && w025z3['data']['length'] && (txu_fm['boxlist'] = txu_fm['boxlist']['concat'](w025z3['data']), ths4p++, txu_fm['getBoxList'](ths4p)) : txu_fm['boxListHandler']();
    });
  }, umfx['prototype']['copyText'] = function (e3n5w) {
    try {
      wx['setClipboardData']({ 'data': e3n5w, 'success': function (v1i$y6) {
          console['log']('复制成功:', v1i$y6);
        } });
    } catch (fxpu) {}
  }, umfx['prototype']['rolePriceHandler'] = function (i$yhj) {
    this['rolePriceData'] = JSON['parse'](i$yhj);switch (this['rolePriceData']['status']) {case 0x3e9:
        this['main']['box_2_lab_v_1']['text'] = (this['rolePriceData']['todayPrice'] || 0x0) + '/' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_v_2']['text'] = (this['rolePriceData']['allPrice'] || 0x0) + '/' + +this['tool']['data']['y'] + '元';break;case 0x3ea:
        break;case 0x3eb:
        break;}
  }, umfx['prototype']['roleError'] = function () {}, umfx['prototype']['boxListHandler'] = function () {
    var jpskh = function (hsik) {
      var y1vi6 = cgqbda['boxlist'][hsik],
          $6ijy1 = new p_skp4j['demoui']['BoxItemUI']();$6ijy1['icon']['skin'] = y1vi6['icon'], $6ijy1['title']['text'] = y1vi6['title'], $6ijy1['x'] = 0xa0 * (hsik % 0x3), $6ijy1['y'] = 0xa0 * (hsik / 0x3 ^ 0x0), cgqbda['main']['box_3_panel']['addChild']($6ijy1);var ne = { 'appid': p_u4tplx['sygame']['appid'], 'game_id': y1vi6['game_id'], 'jump_appid': y1vi6['jump_appid'], 'jump_path': y1vi6['jump_path'], 'tunnel_id': y1vi6['tunnel_id'], 'uv': 0x0, 'wecha_id': p_u4tplx['sygame']['openid'] },
          a8cb = y1vi6['preview_img'],
          qbn89 = y1vi6['jump_type'],
          nbq98 = y1vi6['kf_session'];$6ijy1['on'](Laya['Event']['CLICK'], cgqbda, function () {
        p_bag89 && p_bag89['syClickBox']({ 'game_id': y1vi6['game_id'], 'tunnel_id': y1vi6['tunnel_id'], 'jump_appid': y1vi6['jump_appid'], 'jump_path': y1vi6['jump_path'] })['then'](function (z027) {
          if (qbn89 === '0') wx['navigateToMiniProgram']({ 'appId': ne['jump_appid'], 'path': ne['jump_path'], 'fail': function (r710) {
              if (!a8cb) return;wx['previewImage']({ 'urls': [a8cb] });
            } });else {
            if (qbn89 === '1') {
              if (!a8cb) return;wx['previewImage']({ 'urls': [a8cb] });
            } else {
              if (qbn89 === '2') {
                if (!nbq98) return;wx['openCustomerServiceConversation']({ 'sessionFrom': nbq98, 'showMessageCard': !![], 'sendMessageTitle': '', 'sendMessagePath': '', 'sendMessageImg': '' });
              }
            }
          }
        });
      });
    },
        cgqbda = this;for (var e9nq58 = 0x0; e9nq58 < this['boxlist']['length']; e9nq58++) {
      jpskh(e9nq58);
    }
  }, umfx['prototype']['boxListError'] = function () {}, umfx['prototype']['boxClickHandler'] = function () {}, umfx['prototype']['iconPress'] = function (hlk4p) {
    this['donwX'] = hlk4p['target']['x'], this['donwY'] = hlk4p['target']['y'], this['icon']['startDrag'](this['dragRect']), this['isMove'] = ![], this['isPress'] = !![];
  }, umfx['prototype']['iconMove'] = function (h4kij) {
    this['isMove'] = !![];
  }, umfx['prototype']['iconUp'] = function (vr61) {
    var $vy1i = vr61['target']['x'],
        futpl = vr61['target']['y'];this['icon']['stopDrag'](), $vy1i == this['donwX'] && this['donwY'] == futpl && (this['isInitBoard'] || this['initBoard'](), this['showBoard']()), this['isMove'] = ![], this['isPress'] = ![];
  }, umfx;
}(),
    p_skp4j;(function (i6yj1$) {
  var cbagq;(function (xtmf_) {
    var s4hji = function (ky$i) {
      p_j1y$i(shjiky, ky$i);function shjiky() {
        return ky$i['call'](this) || this;
      }return shjiky['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), ky$i['prototype']['createChildren']['call'](this), this['createView'](i6yj1$['demoui']['BoxItemUI']['uiView']);
      }, shjiky['uiView'] = { 'type': 'View', 'props': { 'width': 0xb4, 'height': 0xa0 }, 'child': [{ 'type': 'Image', 'props': { 'y': 0x3, 'x': 0x20, 'width': 0x73, 'var': 'icon', 'height': 0x73 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x79, 'x': -0x21, 'width': 0xb4, 'var': 'title', 'valign': 'middle', 'height': 0x22, 'fontSize': 0x16, 'color': '#441d1c', 'align': 'center' } }] }] }, shjiky;
    }(laya['ui']['View']);xtmf_['BoxItemUI'] = s4hji;
  })(cbagq = i6yj1$['demoui'] || (i6yj1$['demoui'] = {}));
})(p_skp4j || (p_skp4j = {})), function (fxlput) {
  var $671yv;(function ($rv76) {
    var _tufl = function (tslxp) {
      p_j1y$i(v1y6i, tslxp);function v1y6i() {
        return tslxp['call'](this) || this;
      }return v1y6i['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), tslxp['prototype']['createChildren']['call'](this), this['createView'](fxlput['demoui']['MainUI']['uiView']);
      }, v1y6i['uiView'] = { 'type': 'View', 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x2ee, 'top': 0x0, 'right': 0x0, 'left': 0x0, 'height': 0x536, 'bottom': 0x0 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x2ee, 'height': 0x536, 'centerY': 0x0 }, 'child': [{ 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x2ee, 'var': 'bg', 'height': 0x536 }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x2ee, 'visible': ![], 'var': 'box_1_show', 'height': 0x536, 'centerY': 0x0 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x253, 'x': 0x2e, 'width': 0x1d0, 'var': 'box_1_lab_info', 'leading': 0xa, 'height': 0x97, 'fontSize': 0x18, 'color': '#a959ee' } }, { 'type': 'HBox', 'props': { 'y': 0x2ee, 'x': 0x14, 'width': 0x1fe, 'space': 0x35, 'height': 0x78, 'align': 'top' }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x58, 'var': 'box_1_img_1', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_1', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0xa, 'x': 0xa, 'width': 0x58, 'var': 'box_1_img_2', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_2', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x14, 'x': 0x14, 'width': 0x58, 'var': 'box_1_img_3', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_3', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x1e, 'x': 0x1e, 'width': 0x58, 'var': 'box_1_img_4', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_4', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }] }] }, { 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'visible': ![], 'var': 'box_2_show' }, 'child': [{ 'type': 'HBox', 'props': { 'y': 0x220, 'x': 0x18, 'width': 0x1f4, 'space': 0x2c, 'height': 0x56, 'align': 'top' }, 'child': [{ 'type': 'Image', 'props': { 'y': 2.5, 'x': 0x0, 'width': 0x58, 'var': 'box_2_img_1', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_1', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0xc, 'x': 0xa, 'width': 0x58, 'var': 'box_2_img_2', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_2', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x16, 'x': 0x14, 'width': 0x58, 'var': 'box_2_img_3', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_3', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x20, 'x': 0x1e, 'width': 0x58, 'var': 'box_2_img_4', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_4', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x2a, 'x': 0x28, 'width': 0x58, 'var': 'box_2_img_5', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_5', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }] }, { 'type': 'Box', 'props': { 'y': 0x384, 'x': 0x0, 'width': 0x221, 'height': 0x44 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x0, 'x': 0x28, 'width': 0x122, 'var': 'box_2_lab_m_1', 'text': '方法一\uFF1A单日充值1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300' } }, { 'type': 'Text', 'props': { 'y': 0x1e, 'x': 0x28, 'width': 0x122, 'var': 'box_2_lab_m_2', 'text': '方法一\uFF1A历史累计充值1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300' } }, { 'type': 'Text', 'props': { 'y': 0x0, 'x': 0x141, 'width': 0xa4, 'var': 'box_2_lab_v_1', 'text': '1000/1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300', 'align': 'right' } }, { 'type': 'Text', 'props': { 'y': 0x1e, 'x': 0x141, 'width': 0xa4, 'var': 'box_2_lab_v_2', 'text': '1000/1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300', 'align': 'right' } }] }, { 'type': 'Image', 'props': { 'y': 0x1aa, 'x': 0x159, 'width': 0x66, 'var': 'box_2_btn_get', 'stateNum': 0x1, 'height': 0x26 } }, { 'type': 'Image', 'props': { 'y': 0x1aa, 'x': 0x159, 'width': 0x66, 'var': 'box_2_btn_copy', 'stateNum': 0x1, 'height': 0x26 } }, { 'type': 'Button', 'props': { 'y': 0x1d2, 'x': 0x126, 'width': 0xc9, 'var': 'box_2_addclick', 'stateNum': 0x1, 'height': 0x1b } }, { 'type': 'Text', 'props': { 'y': 0x13c, 'x': 0x17a, 'width': 0xa3, 'var': 'box_2_lab_wx', 'height': 0x1f, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'left' } }] }, { 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'visible': ![], 'var': 'box_3_show' }, 'child': [{ 'type': 'Panel', 'props': { 'y': 0xf5, 'x': 0x10, 'width': 0x201, 'var': 'box_3_panel', 'vScrollBarSkin': '', 'height': 0x29e } }] }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0x0, 'width': 0xbb, 'var': 'btn_1', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0xba, 'width': 0xbb, 'var': 'btn_2', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0x177, 'width': 0xbb, 'var': 'btn_3', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x203, 'x': 0x22e, 'width': 0x25, 'var': 'btn_close', 'height': 0x8f } }, { 'type': 'Box', 'props': { 'width': 0x2ee, 'visible': ![], 'var': 'box_help', 'height': 0x536 }, 'child': [{ 'type': 'Sprite', 'props': { 'y': 0x0, 'x': 0x0, 'mouseThrough': ![], 'alpha': 0.7 }, 'child': [{ 'type': 'Rect', 'props': { 'width': 0x2ee, 'lineWidth': 0x1, 'height': 0x536, 'fillColor': '#000000' } }] }, { 'type': 'Image', 'props': { 'y': 0x158, 'x': 0x28, 'width': 0x1d2, 'var': 'box_help_bg', 'height': 0x203 }, 'child': [{ 'type': 'Button', 'props': { 'y': -0x1, 'x': 0x1a0, 'width': 0x33, 'var': 'box_help_close', 'height': 0x28 } }, { 'type': 'Image', 'props': { 'y': 0x3f, 'x': 0x98, 'width': 0xa0, 'var': 'box_help_qrcode', 'height': 0xa0 } }] }] }] }] }] }, v1y6i;
    }(laya['ui']['View']);$rv76['MainUI'] = _tufl;
  })($671yv = fxlput['demoui'] || (fxlput['demoui'] = {}));
}(p_skp4j || (p_skp4j = {})), function (bqa9e) {
  var eq5n89;(function (u_xl) {
    var rz072v = function (benq89) {
      p_j1y$i(aqe8b, benq89);function aqe8b() {
        return benq89['call'](this) || this;
      }return aqe8b['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), benq89['prototype']['createChildren']['call'](this), this['createView'](bqa9e['demoui']['ToastUI']['uiView']);
      }, aqe8b['uiView'] = { 'type': 'View', 'props': { 'width': 0x2ee, 'height': 0x536 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x12c, 'height': 0x32, 'centerY': 0x0, 'centerX': 0x0 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x12c, 'height': 0x32, 'centerX': 0x0, 'alpha': 0.5 }, 'child': [{ 'type': 'Rect', 'props': { 'width': 0x12c, 'lineWidth': 0x1, 'height': 0x32, 'fillColor': '#382f2f' } }] }, { 'type': 'Text', 'props': { 'width': 0x12c, 'var': 'lab_msg', 'valign': 'middle', 'text': 'text', 'height': 0x32, 'fontSize': 0x18, 'color': '#ffffff', 'align': 'center' } }] }] }, aqe8b;
    }(laya['ui']['View']);u_xl['ToastUI'] = rz072v;
  })(eq5n89 = bqa9e['demoui'] || (bqa9e['demoui'] = {}));
}(p_skp4j || (p_skp4j = {}));var p_v61$r = function () {
  function r07() {}return r07['init'] = function () {
    !this['ui'] && (this['ui'] = new p_skp4j['demoui']['ToastUI'](), this['ui']['visible'] = ![], Laya['stage']['addChild'](this['ui']));
  }, r07['msg'] = function (vy$i6) {
    var r0v172 = this;!this['ui'] && r07['init'](), this['ui']['visible'] = !![], this['ui']['lab_msg']['text'] = vy$i6, clearTimeout(this['interval']), this['interval'] = setTimeout(function () {
      r0v172['ui']['visible'] = ![];
    }, 0x7d0);
  }, r07;
}();window['minitool'] = p_splth4;