var k = wx.$f;
var fg3usex = this && this['__extends'] || function () {
  var m25tj4 = function (co_wf, stjg2x) {
    return (m25tj4 = Object['setPrototypeOf'] || { '__proto__': [] } instanceof Array && function (owkc_, iy07d8) {
      owkc_['__proto__'] = iy07d8;
    } || function (qaw_z, g3kneu) {
      for (var s5j2t in g3kneu) g3kneu['hasOwnProperty'](s5j2t) && (qaw_z[s5j2t] = g3kneu[s5j2t]);
    })(co_wf, stjg2x);
  };return function (ofcn_k, nucke3) {
    function y8d0h() {
      this['constructor'] = ofcn_k;
    }m25tj4(ofcn_k, nucke3), ofcn_k['prototype'] = null === nucke3 ? Object['create'](nucke3) : (y8d0h['prototype'] = nucke3['prototype'], new y8d0h());
  };
}(),
    fid78y = window['Sygame'],
    fw_k = !0x1,
    fm$rv4p = function () {
  function _wckof() {}return _wckof['init'] = function () {
    this['sygame'] = fw_k ? { 'channel': '3477d2273abd484ba2a0e04ad4971b3c', 'role_id': void 0x0, 'openid': 'oxmOf5biumkGash-Xht9FVAlswVk', 'appid': 'wx2936121c4817bf46' } : fid78y;
  }, _wckof['getTimeStamp'] = function () {
    return new Date()['getTime']();
  }, _wckof['setResMap'] = function (xseg2j, s2gexj) {
    this['resMap'][xseg2j] = xseg2j + '?' + s2gexj;
  }, _wckof['getResMap'] = function (bpr$4v) {
    return this['resMap'][bpr$4v];
  }, _wckof['resMap'] = {}, _wckof;
}(),
    fn3kue = function () {
  function fnk_c() {
    this['getIcon'] = 'https://wx.11babay.cn/uploads/f/fkccc1532944783/5/2/c/7/60dc442c4fbc5.png', this['copyIcon'] = 'https://wx.11babay.cn/uploads/f/fkccc1532944783/3/0/1/7/60dc4409dce39.png', fm$rv4p['init'](), this['postSidebarApi']();
  }return fnk_c['prototype']['send'] = function (h8d0y, zocf_, wcfoz, co_n, p$rb) {
    void 0x0 === co_n && (co_n = 'get'), void 0x0 === p$rb && (p$rb = null);var vbr$p = new Laya['HttpRequest']();vbr$p['http']['timeout'] = 0x2710, vbr$p['once'](Laya['Event']['COMPLETE'], this, zocf_), vbr$p['once'](Laya['Event']['ERROR'], this, wcfoz), vbr$p['send'](h8d0y, p$rb, co_n, 'text');
  }, fnk_c['prototype']['postSidebarApi'] = function () {
    this['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=sidebarApi&channel=' + fm$rv4p['sygame']['channel'], this['completeHandler'], this['errorHandler']);
  }, fnk_c['prototype']['completeHandler'] = function (gex3s) {
    var uock3 = JSON['parse'](gex3s);switch (console['log'](uock3), uock3['status']) {case 0x3e9:
        var ou_nck = [];uock3['msg']['basics_image_url'] && ou_nck['push']({ 'url': uock3['msg']['basics_image_url'], 'type': Laya['Loader']['IMAGE'] }), uock3['msg']['public_code'] && ou_nck['push']({ 'url': uock3['msg']['public_code'], 'type': Laya['Loader']['IMAGE'] }), uock3['msg']['vip_customer_service'] && ou_nck['push']({ 'url': uock3['msg']['vip_customer_service'], 'type': Laya['Loader']['IMAGE'] }), uock3['msg']['vip_customer_service_not_add'] && ou_nck['push']({ 'url': uock3['msg']['vip_customer_service_not_add'], 'type': Laya['Loader']['IMAGE'] }), uock3['msg']['game_center_image_url'] && ou_nck['push']({ 'url': uock3['msg']['game_center_image_url'], 'type': Laya['Loader']['IMAGE'] }), uock3['msg']['vip_qrcode'] && ou_nck['push']({ 'url': uock3['msg']['vip_qrcode'], 'type': Laya['Loader']['IMAGE'] }), uock3['msg']['getIcon'] && ou_nck['push']({ 'url': this['getIcon'], 'type': Laya['Loader']['IMAGE'] }), uock3['msg']['copyIcon'] && ou_nck['push']({ 'url': this['copyIcon'], 'type': Laya['Loader']['IMAGE'] });for (var $p5v4m = 0x0, nuse = uock3['msg']['follow_gift_list']; $p5v4m < nuse['length']; $p5v4m++) {
          var _ckuno = nuse[$p5v4m];ou_nck['push']({ 'url': _ckuno['url'], 'type': Laya['Loader']['IMAGE'] });
        }for (var ocf_k = 0x0, x23egs = uock3['msg']['vip_box_list']; ocf_k < x23egs['length']; ocf_k++) {
          _ckuno = x23egs[ocf_k], ou_nck['push']({ 'url': _ckuno['url'], 'type': Laya['Loader']['IMAGE'] });
        }for (var hiyd0 = 0x0; hiyd0 < ou_nck['length']; hiyd0++) fm$rv4p['setResMap'](ou_nck[hiyd0]['url'], fm$rv4p['getTimeStamp']()), ou_nck[hiyd0]['url'] = fm$rv4p['getResMap'](ou_nck[hiyd0]['url']);Laya['loader']['load'](ou_nck, Laya['Handler']['create'](this, this['initGame'])), this['data'] = uock3['msg'];break;case 0x3ea:
        fjt25m['msg']('空的游戏channel');break;case 0x3eb:
        fjt25m['msg']('错误的游戏channel');break;case 0x3ec:
        fjt25m['msg']('未找到对应游戏大类');break;case 0x3ed:
        fjt25m['msg']('未设置侧边栏');}
  }, fnk_c['prototype']['errorHandler'] = function (k3gneu) {}, fnk_c['prototype']['initGame'] = function () {
    new ff1za(this)['show']();
  }, fnk_c;
}(),
    ff1za = function () {
  function dy9780($mvpr4) {
    this['page'] = 0x3, this['rolePriceData'] = {}, this['boxlist'] = [], this['donwX'] = 0x0, this['downY'] = 0x0, this['tool'] = $mvpr4;
  }return dy9780['prototype']['setChildMouseThroughs'] = function (gx3) {
    var nku3co = gx3['_childs'] || [];for (var _nfco = 0x0; _nfco < nku3co['length']; _nfco++) nku3co[_nfco] && (nku3co[_nfco]['mouseThrough'] = !0x0);
  }, dy9780['prototype']['show'] = function () {
    if ('1' === this['tool']['data']['on']) {
      this['main'] = new fnko3u['demoui']['MainUI'](), Laya['stage']['addChild'](this['main']), this['main']['mouseThrough'] = !0x0;var gesn3 = this['main']['_childs'] || [];for (var ocnk3 = 0x0; ocnk3 < gesn3['length']; ocnk3++) gesn3[ocnk3]['mouseThrough'] = !0x0;this['setChildMouseThroughs'](this['main']['_childs']), this['setChildMouseThroughs'](this['main']['_childs'][0x0]), this['initIcon'](), this['initEvent'](), this['initView'](), fjt25m['init']();
    }
  }, dy9780['prototype']['initView'] = function () {
    var k3eg = this,
        by79 = this['tool']['data']['follow_down_words']['replace'](/\\n/g, '\x0a');this['main']['box_1_lab_info']['text'] = by79;for (var v4p$mr = 0x1; v4p$mr <= this['tool']['data']['follow_gift_list']['length']; v4p$mr++) {
      var s2tx5j = this['tool']['data']['follow_gift_list'][v4p$mr - 0x1];this['main']['box_1_img_' + v4p$mr]['skin'] = s2tx5j['url'], this['main']['box_1_lab_' + v4p$mr]['text'] = s2tx5j['name'];
    }for (v4p$mr = 0x1; v4p$mr <= this['tool']['data']['vip_box_list']['length']; v4p$mr++) {
      s2tx5j = this['tool']['data']['vip_box_list'][v4p$mr - 0x1], (this['main']['box_2_img_' + v4p$mr]['skin'] = s2tx5j['url'], this['main']['box_2_lab_' + v4p$mr]['text'] = s2tx5j['name']);
    }this['main']['box_2_lab_m_1']['text'] = '方法一：单日充值' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_m_2']['text'] = '方法二：历史累计充值' + +this['tool']['data']['y'] + '元', this['main']['box_2_lab_v_1']['text'] = (this['rolePriceData']['todayPrice'] || 0x0) + '/' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_v_2']['text'] = (this['rolePriceData']['allPrice'] || 0x0) + '/' + +this['tool']['data']['y'] + '元', this['main']['box_2_btn_copy']['skin'] = this['tool']['copyIcon'], this['main']['box_2_btn_get']['skin'] = this['tool']['getIcon'], this['main']['box_2_btn_copy']['visible'] = !0x1, this['main']['box_2_btn_get']['on'](Laya['Event']['CLICK'], this, function () {
      0x0 != k3eg['rolePriceData']['is_vip'] ? (k3eg['main']['box_2_lab_wx']['text'] = k3eg['tool']['data']['vip_wx'], k3eg['main']['box_2_btn_copy']['visible'] = !0x0) : fjt25m['msg']('请先获取vip资格');
    }), this['main']['box_2_btn_copy']['on'](Laya['Event']['CLICK'], this, function () {
      k3eg['copyText'](k3eg['tool']['data']['vip_wx']);
    }), this['main']['box_2_addclick']['on'](Laya['Event']['CLICK'], this, function () {
      0x0 != k3eg['rolePriceData']['is_vip'] && (k3eg['main']['box_help']['visible'] = !0x0);
    }), this['main']['box_help_close']['on'](Laya['Event']['CLICK'], this, function () {
      k3eg['main']['box_help']['visible'] = !0x1;
    }), this['main']['box_help_bg']['skin'] = this['tool']['data']['vip_customer_service_not_add'], this['main']['box_help_qrcode']['skin'] = this['tool']['data']['vip_qrcode'], this['main']['box_help_qrcode']['scaleX'] = 0xa0 / this['main']['box_help_qrcode']['width'], this['main']['box_help_qrcode']['scaleY'] = 0xa0 / this['main']['box_help_qrcode']['width'], this['main']['box_3_panel']['vScrollBar']['visible'] = !0x1, this['main']['box_3_panel']['vScrollBarSkin'] = 'common_atlas/scrollBar.png';
  }, dy9780['prototype']['initIcon'] = function () {
    this['icon'] = new Laya['Image'](), this['icon']['skin'] = this['tool']['data']['basics_image_url'], this['icon']['x'] = 0x0, this['icon']['y'] = 0xc8, this['icon']['width'] = 0x66, this['icon']['height'] = 0x6f, this['main']['addChild'](this['icon']), this['icon']['on'](Laya['Event']['MOUSE_DOWN'], this, this['iconPress']), this['icon']['on'](Laya['Event']['MOUSE_UP'], this, this['iconUp']), this['icon']['on'](Laya['Event']['MOUSE_WHEEL'], this, this['iconMove']), this['dragRect'] = new Laya['Rectangle'](-this['icon']['width'] / 0x2, 0x0, Laya['stage']['width'], Laya['stage']['height'] - this['icon']['height'] / 0x2);
  }, dy9780['prototype']['initEvent'] = function () {
    var p$b4vr = this;this['main']['btn_1']['on'](Laya['Event']['CLICK'], this, function () {
      0x1 != p$b4vr['page'] && p$b4vr['page1']();
    }), this['main']['btn_2']['on'](Laya['Event']['CLICK'], this, function () {
      0x2 != p$b4vr['page'] && p$b4vr['page2']();
    }), this['main']['btn_3']['on'](Laya['Event']['CLICK'], this, function () {
      0x3 != p$b4vr['page'] && p$b4vr['page3']();
    }), this['main']['btn_close']['on'](Laya['Event']['CLICK'], this, function () {
      p$b4vr['main']['bg']['x'] = -0x2ee, p$b4vr['icon']['visible'] = !0x0;
    });
  }, dy9780['prototype']['initBoard'] = function () {
    this['isInitBoard'] = !0x0, this['page1']();
  }, dy9780['prototype']['showBoard'] = function () {
    this['main']['bg']['x'] = 0x0, this['icon']['visible'] = !0x1, this['tool']['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=sidebarApiRoleId&role_id=' + fm$rv4p['sygame']['role_id'] + '&channel=' + fm$rv4p['sygame']['channel'], this['rolePriceHandler']['bind'](this), this['roleError']['bind'](this));
  }, dy9780['prototype']['page1'] = function () {
    this['page'] = 0x1, this['main']['bg']['skin'] = this['tool']['data']['public_code'], this['main']['box_1_show']['visible'] = !0x0, this['main']['box_2_show']['visible'] = !0x1, this['main']['box_3_show']['visible'] = !0x1;
  }, dy9780['prototype']['page2'] = function () {
    this['page'] = 0x2, this['main']['bg']['skin'] = this['tool']['data']['vip_customer_service'], this['main']['box_1_show']['visible'] = !0x1, this['main']['box_2_show']['visible'] = !0x0, this['main']['box_3_show']['visible'] = !0x1;
  }, dy9780['prototype']['page3'] = function () {
    this['page'] = 0x3, this['main']['bg']['skin'] = this['tool']['data']['game_center_image_url'], this['main']['box_1_show']['visible'] = !0x1, this['main']['box_2_show']['visible'] = !0x1, this['main']['box_3_show']['visible'] = !0x0, this['sendBox'] || this['getBoxList'](0x0), this['sendBox'] = !0x0, fid78y && fid78y['syClickOpenBox']();
  }, dy9780['prototype']['getBoxList'] = function (nu3eg) {
    var t4mj5 = this;fid78y && fid78y['syGetBoxList']({ 'page': nu3eg, 'count': 0xc })['then'](function (idh8y0) {
      idh8y0 = idh8y0['data'], 0x3e9 == idh8y0['status'] ? idh8y0['data'] && idh8y0['data']['length'] && (t4mj5['boxlist'] = t4mj5['boxlist']['concat'](idh8y0['data']), nu3eg++, t4mj5['getBoxList'](nu3eg)) : t4mj5['boxListHandler']();
    });
  }, dy9780['prototype']['copyText'] = function (jtm25) {
    try {
      wx['setClipboardData']({ 'data': jtm25, 'success': function (fza1q) {
          console['log']('复制成功:', fza1q);
        } });
    } catch (s3uneg) {}
  }, dy9780['prototype']['rolePriceHandler'] = function ($j5t4) {
    this['rolePriceData'] = JSON['parse']($j5t4), 0x3e9 === this['rolePriceData']['status'] && (this['main']['box_2_lab_v_1']['text'] = (this['rolePriceData']['todayPrice'] || 0x0) + '/' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_v_2']['text'] = (this['rolePriceData']['allPrice'] || 0x0) + '/' + +this['tool']['data']['y'] + '元');
  }, dy9780['prototype']['roleError'] = function () {}, dy9780['prototype']['boxListHandler'] = function () {
    var eg3 = this;for (var qf1az = 0x0; qf1az < this['boxlist']['length']; qf1az++) !function (oknuc3) {
      var v$54mp = eg3['boxlist'][oknuc3],
          cwzof = new fnko3u['demoui']['BoxItemUI']();cwzof['icon']['skin'] = v$54mp['icon'], cwzof['title']['text'] = v$54mp['title'], cwzof['x'] = oknuc3 % 0x3 * 0xa0, cwzof['y'] = 0xa0 * (oknuc3 / 0x3 ^ 0x0), eg3['main']['box_3_panel']['addChild'](cwzof);var $v54tm = { 'appid': fm$rv4p['sygame']['appid'], 'game_id': v$54mp['game_id'], 'jump_appid': v$54mp['jump_appid'], 'jump_path': v$54mp['jump_path'], 'tunnel_id': v$54mp['tunnel_id'], 'uv': 0x0, 'wecha_id': fm$rv4p['sygame']['openid'] },
          m5t2j = v$54mp['preview_img'],
          cukno = v$54mp['jump_type'],
          afq1wz = v$54mp['kf_session'];cwzof['on'](Laya['Event']['CLICK'], eg3, function () {
        fid78y && fid78y['syClickBox']({ 'game_id': v$54mp['game_id'], 'tunnel_id': v$54mp['tunnel_id'], 'jump_appid': v$54mp['jump_appid'], 'jump_path': v$54mp['jump_path'] })['then'](function (czf_w) {
          '0' === cukno ? wx['navigateToMiniProgram']({ 'appId': $v54tm['jump_appid'], 'path': $v54tm['jump_path'], 'fail': function (fzq_aw) {
              m5t2j && wx['previewImage']({ 'urls': [m5t2j] });
            } }) : '1' === cukno ? m5t2j && wx['previewImage']({ 'urls': [m5t2j] }) : '2' === cukno && afq1wz && wx['openCustomerServiceConversation']({ 'sessionFrom': afq1wz, 'showMessageCard': !0x0, 'sendMessageTitle': '', 'sendMessagePath': '', 'sendMessageImg': '' });
        });
      });
    }(qf1az);
  }, dy9780['prototype']['boxListError'] = function () {}, dy9780['prototype']['boxClickHandler'] = function () {}, dy9780['prototype']['iconPress'] = function (vtm$45) {
    this['donwX'] = vtm$45['target']['x'], this['donwY'] = vtm$45['target']['y'], this['icon']['startDrag'](this['dragRect']), this['isMove'] = !0x1, this['isPress'] = !0x0;
  }, dy9780['prototype']['iconMove'] = function (xu3seg) {
    this['isMove'] = !0x0;
  }, dy9780['prototype']['iconUp'] = function (wfz1q) {
    var rp796 = wfz1q['target']['x'];wfz1q = wfz1q['target']['y'], (this['icon']['stopDrag'](), rp796 == this['donwX'] && this['donwY'] == wfz1q && (this['isInitBoard'] || this['initBoard'](), this['showBoard']()), this['isMove'] = !0x1, this['isPress'] = !0x1);
  }, dy9780;
}(),
    fnko3u;!function (b978r6) {
  function fowcz() {
    return b8r967['call'](this) || this;
  }var fzqwo_, b8r967;fzqwo_ = b978r6['demoui'] || (b978r6['demoui'] = {}), b8r967 = laya['ui']['View'], fg3usex(fowcz, b8r967), fowcz['prototype']['createChildren'] = function () {
    laya['ui']['View']['regComponent']('Text', laya['display']['Text']), b8r967['prototype']['createChildren']['call'](this), this['createView'](b978r6['demoui']['BoxItemUI']['uiView']);
  }, fowcz['uiView'] = { 'type': 'View', 'props': { 'width': 0xb4, 'height': 0xa0 }, 'child': [{ 'type': 'Image', 'props': { 'y': 0x3, 'x': 0x20, 'width': 0x73, 'var': 'icon', 'height': 0x73 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x79, 'x': -0x21, 'width': 0xb4, 'var': 'title', 'valign': 'middle', 'height': 0x22, 'fontSize': 0x16, 'color': '#441d1c', 'align': 'center' } }] }] }, fzqwo_['BoxItemUI'] = fowcz;
}(fnko3u = fnko3u || {}), function (r$6bpv) {
  function i8yd70() {
    return vp6r9b['call'](this) || this;
  }var gse2, vp6r9b;gse2 = r$6bpv['demoui'] || (r$6bpv['demoui'] = {}), vp6r9b = laya['ui']['View'], fg3usex(i8yd70, vp6r9b), i8yd70['prototype']['createChildren'] = function () {
    laya['ui']['View']['regComponent']('Text', laya['display']['Text']), vp6r9b['prototype']['createChildren']['call'](this), this['createView'](r$6bpv['demoui']['MainUI']['uiView']);
  }, i8yd70['uiView'] = { 'type': 'View', 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x2ee, 'top': 0x0, 'right': 0x0, 'left': 0x0, 'height': 0x536, 'bottom': 0x0 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x2ee, 'height': 0x536, 'centerY': 0x0 }, 'child': [{ 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x2ee, 'var': 'bg', 'height': 0x536 }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x2ee, 'visible': !0x1, 'var': 'box_1_show', 'height': 0x536, 'centerY': 0x0 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x253, 'x': 0x2e, 'width': 0x1d0, 'var': 'box_1_lab_info', 'leading': 0xa, 'height': 0x97, 'fontSize': 0x18, 'color': '#a959ee' } }, { 'type': 'HBox', 'props': { 'y': 0x2ee, 'x': 0x14, 'width': 0x1fe, 'space': 0x35, 'height': 0x78, 'align': 'top' }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x58, 'var': 'box_1_img_1', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_1', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0xa, 'x': 0xa, 'width': 0x58, 'var': 'box_1_img_2', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_2', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x14, 'x': 0x14, 'width': 0x58, 'var': 'box_1_img_3', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_3', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x1e, 'x': 0x1e, 'width': 0x58, 'var': 'box_1_img_4', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_4', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }] }] }, { 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'visible': !0x1, 'var': 'box_2_show' }, 'child': [{ 'type': 'HBox', 'props': { 'y': 0x220, 'x': 0x18, 'width': 0x1f4, 'space': 0x2c, 'height': 0x56, 'align': 'top' }, 'child': [{ 'type': 'Image', 'props': { 'y': 2.5, 'x': 0x0, 'width': 0x58, 'var': 'box_2_img_1', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_1', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0xc, 'x': 0xa, 'width': 0x58, 'var': 'box_2_img_2', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_2', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x16, 'x': 0x14, 'width': 0x58, 'var': 'box_2_img_3', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_3', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x20, 'x': 0x1e, 'width': 0x58, 'var': 'box_2_img_4', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_4', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x2a, 'x': 0x28, 'width': 0x58, 'var': 'box_2_img_5', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_5', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }] }, { 'type': 'Box', 'props': { 'y': 0x384, 'x': 0x0, 'width': 0x221, 'height': 0x44 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x0, 'x': 0x28, 'width': 0x122, 'var': 'box_2_lab_m_1', 'text': '方法一\uFF1A单日充值1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300' } }, { 'type': 'Text', 'props': { 'y': 0x1e, 'x': 0x28, 'width': 0x122, 'var': 'box_2_lab_m_2', 'text': '方法一\uFF1A历史累计充值1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300' } }, { 'type': 'Text', 'props': { 'y': 0x0, 'x': 0x141, 'width': 0xa4, 'var': 'box_2_lab_v_1', 'text': '1000/1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300', 'align': 'right' } }, { 'type': 'Text', 'props': { 'y': 0x1e, 'x': 0x141, 'width': 0xa4, 'var': 'box_2_lab_v_2', 'text': '1000/1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300', 'align': 'right' } }] }, { 'type': 'Image', 'props': { 'y': 0x1aa, 'x': 0x159, 'width': 0x66, 'var': 'box_2_btn_get', 'stateNum': 0x1, 'height': 0x26 } }, { 'type': 'Image', 'props': { 'y': 0x1aa, 'x': 0x159, 'width': 0x66, 'var': 'box_2_btn_copy', 'stateNum': 0x1, 'height': 0x26 } }, { 'type': 'Button', 'props': { 'y': 0x1d2, 'x': 0x126, 'width': 0xc9, 'var': 'box_2_addclick', 'stateNum': 0x1, 'height': 0x1b } }, { 'type': 'Text', 'props': { 'y': 0x13c, 'x': 0x17a, 'width': 0xa3, 'var': 'box_2_lab_wx', 'height': 0x1f, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'left' } }] }, { 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'visible': !0x1, 'var': 'box_3_show' }, 'child': [{ 'type': 'Panel', 'props': { 'y': 0xf5, 'x': 0x10, 'width': 0x201, 'var': 'box_3_panel', 'vScrollBarSkin': '', 'height': 0x29e } }] }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0x0, 'width': 0xbb, 'var': 'btn_1', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0xba, 'width': 0xbb, 'var': 'btn_2', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0x177, 'width': 0xbb, 'var': 'btn_3', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x203, 'x': 0x22e, 'width': 0x25, 'var': 'btn_close', 'height': 0x8f } }, { 'type': 'Box', 'props': { 'width': 0x2ee, 'visible': !0x1, 'var': 'box_help', 'height': 0x536 }, 'child': [{ 'type': 'Sprite', 'props': { 'y': 0x0, 'x': 0x0, 'mouseThrough': !0x1, 'alpha': 0.7 }, 'child': [{ 'type': 'Rect', 'props': { 'width': 0x2ee, 'lineWidth': 0x1, 'height': 0x536, 'fillColor': '#000000' } }] }, { 'type': 'Image', 'props': { 'y': 0x158, 'x': 0x28, 'width': 0x1d2, 'var': 'box_help_bg', 'height': 0x203 }, 'child': [{ 'type': 'Button', 'props': { 'y': -0x1, 'x': 0x1a0, 'width': 0x33, 'var': 'box_help_close', 'height': 0x28 } }, { 'type': 'Image', 'props': { 'y': 0x3f, 'x': 0x98, 'width': 0xa0, 'var': 'box_help_qrcode', 'height': 0xa0 } }] }] }] }] }] }, gse2['MainUI'] = i8yd70;
}(fnko3u = fnko3u || {}), function (t4j$m) {
  function $rv6p() {
    return _zqfwo['call'](this) || this;
  }var bp96r7, _zqfwo;bp96r7 = t4j$m['demoui'] || (t4j$m['demoui'] = {}), _zqfwo = laya['ui']['View'], fg3usex($rv6p, _zqfwo), $rv6p['prototype']['createChildren'] = function () {
    laya['ui']['View']['regComponent']('Text', laya['display']['Text']), _zqfwo['prototype']['createChildren']['call'](this), this['createView'](t4j$m['demoui']['ToastUI']['uiView']);
  }, $rv6p['uiView'] = { 'type': 'View', 'props': { 'width': 0x2ee, 'height': 0x536 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x12c, 'height': 0x32, 'centerY': 0x0, 'centerX': 0x0 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x12c, 'height': 0x32, 'centerX': 0x0, 'alpha': 0.5 }, 'child': [{ 'type': 'Rect', 'props': { 'width': 0x12c, 'lineWidth': 0x1, 'height': 0x32, 'fillColor': '#382f2f' } }] }, { 'type': 'Text', 'props': { 'width': 0x12c, 'var': 'lab_msg', 'valign': 'middle', 'text': 'text', 'height': 0x32, 'fontSize': 0x18, 'color': '#ffffff', 'align': 'center' } }] }] }, bp96r7['ToastUI'] = $rv6p;
}(fnko3u = fnko3u || {});var fjt25m = function () {
  function pr97b() {}return pr97b['init'] = function () {
    this['ui'] || (this['ui'] = new fnko3u['demoui']['ToastUI'](), this['ui']['visible'] = !0x1, Laya['stage']['addChild'](this['ui']));
  }, pr97b['msg'] = function (_wzfaq) {
    var qw1 = this;this['ui'] || pr97b['init'](), this['ui']['visible'] = !0x0, this['ui']['lab_msg']['text'] = _wzfaq, clearTimeout(this['interval']), this['interval'] = setTimeout(function () {
      qw1['ui']['visible'] = !0x1;
    }, 0x7d0);
  }, pr97b;
}();window['minitool'] = fn3kue;