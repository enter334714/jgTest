var k = wx.$f;
var fybmv5e = this && this['__extends'] || function () {
  var o06ag8 = function (zyd5eb, d5ybze) {
    return (o06ag8 = Object['setPrototypeOf'] || { '__proto__': [] } instanceof Array && function (us_nx, q3hpi) {
      us_nx['__proto__'] = q3hpi;
    } || function (qftr, tfhq3i) {
      for (var g0r6a in tfhq3i) tfhq3i['hasOwnProperty'](g0r6a) && (qftr[g0r6a] = tfhq3i[g0r6a]);
    })(zyd5eb, d5ybze);
  };return function (qpf3hi, aj0go) {
    function _xns() {
      this['constructor'] = qpf3hi;
    }o06ag8(qpf3hi, aj0go), qpf3hi['prototype'] = null === aj0go ? Object['create'](aj0go) : (_xns['prototype'] = aj0go['prototype'], new _xns());
  };
}(),
    fby5emv = window['Sygame'],
    f_n19ks = !0x1,
    fn9sk_1 = function () {
  function mcye() {}return mcye['init'] = function () {
    this['sygame'] = f_n19ks ? { 'channel': '3477d2273abd484ba2a0e04ad4971b3c', 'role_id': void 0x0, 'openid': 'oxmOf5biumkGash-Xht9FVAlswVk', 'appid': 'wx2936121c4817bf46' } : fby5emv;
  }, mcye['getTimeStamp'] = function () {
    return new Date()['getTime']();
  }, mcye['setResMap'] = function (k891nj, ko81jg) {
    this['resMap'][k891nj] = k891nj + '?' + ko81jg;
  }, mcye['getResMap'] = function (ihpq3) {
    return this['resMap'][ihpq3];
  }, mcye['resMap'] = {}, mcye;
}(),
    fmebv5 = function () {
  function jsnk() {
    this['getIcon'] = 'https://wx.11babay.cn/uploads/f/fkccc1532944783/5/2/c/7/60dc442c4fbc5.png', this['copyIcon'] = 'https://wx.11babay.cn/uploads/f/fkccc1532944783/3/0/1/7/60dc4409dce39.png', fn9sk_1['init'](), this['postSidebarApi']();
  }return jsnk['prototype']['send'] = function (dwzub, hqrft3, r36$, js91kn, rat36) {
    void 0x0 === js91kn && (js91kn = 'get'), void 0x0 === rat36 && (rat36 = null);var zd5b2y = new Laya['HttpRequest']();zd5b2y['http']['timeout'] = 0x2710, zd5b2y['once'](Laya['Event']['COMPLETE'], this, hqrft3), zd5b2y['once'](Laya['Event']['ERROR'], this, r36$), zd5b2y['send'](dwzub, rat36, js91kn, 'text');
  }, jsnk['prototype']['postSidebarApi'] = function () {
    this['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=sidebarApi&channel=' + fn9sk_1['sygame']['channel'], this['completeHandler'], this['errorHandler']);
  }, jsnk['prototype']['completeHandler'] = function (byzem5) {
    var em5bzy = JSON['parse'](byzem5);switch (console['log'](em5bzy), em5bzy['status']) {case 0x3e9:
        var kn91s_ = [];em5bzy['msg']['basics_image_url'] && kn91s_['push']({ 'url': em5bzy['msg']['basics_image_url'], 'type': Laya['Loader']['IMAGE'] }), em5bzy['msg']['public_code'] && kn91s_['push']({ 'url': em5bzy['msg']['public_code'], 'type': Laya['Loader']['IMAGE'] }), em5bzy['msg']['vip_customer_service'] && kn91s_['push']({ 'url': em5bzy['msg']['vip_customer_service'], 'type': Laya['Loader']['IMAGE'] }), em5bzy['msg']['vip_customer_service_not_add'] && kn91s_['push']({ 'url': em5bzy['msg']['vip_customer_service_not_add'], 'type': Laya['Loader']['IMAGE'] }), em5bzy['msg']['game_center_image_url'] && kn91s_['push']({ 'url': em5bzy['msg']['game_center_image_url'], 'type': Laya['Loader']['IMAGE'] }), em5bzy['msg']['vip_qrcode'] && kn91s_['push']({ 'url': em5bzy['msg']['vip_qrcode'], 'type': Laya['Loader']['IMAGE'] }), em5bzy['msg']['getIcon'] && kn91s_['push']({ 'url': this['getIcon'], 'type': Laya['Loader']['IMAGE'] }), em5bzy['msg']['copyIcon'] && kn91s_['push']({ 'url': this['copyIcon'], 'type': Laya['Loader']['IMAGE'] });for (var oag$06 = 0x0, g6o$a0 = em5bzy['msg']['follow_gift_list']; oag$06 < g6o$a0['length']; oag$06++) {
          var cvy7e = g6o$a0[oag$06];kn91s_['push']({ 'url': cvy7e['url'], 'type': Laya['Loader']['IMAGE'] });
        }for (var myv7 = 0x0, t$hrf3 = em5bzy['msg']['vip_box_list']; myv7 < t$hrf3['length']; myv7++) {
          cvy7e = t$hrf3[myv7], kn91s_['push']({ 'url': cvy7e['url'], 'type': Laya['Loader']['IMAGE'] });
        }for (var nx_1 = 0x0; nx_1 < kn91s_['length']; nx_1++) fn9sk_1['setResMap'](kn91s_[nx_1]['url'], fn9sk_1['getTimeStamp']()), kn91s_[nx_1]['url'] = fn9sk_1['getResMap'](kn91s_[nx_1]['url']);Laya['loader']['load'](kn91s_, Laya['Handler']['create'](this, this['initGame'])), this['data'] = em5bzy['msg'];break;case 0x3ea:
        foj8ag['msg']('空的游戏channel');break;case 0x3eb:
        foj8ag['msg']('错误的游戏channel');break;case 0x3ec:
        foj8ag['msg']('未找到对应游戏大类');break;case 0x3ed:
        foj8ag['msg']('未设置侧边栏');}
  }, jsnk['prototype']['errorHandler'] = function (n_19) {}, jsnk['prototype']['initGame'] = function () {
    new fz5mbye(this)['show']();
  }, jsnk;
}(),
    fz5mbye = function () {
  function vceym7(qi4f) {
    this['page'] = 0x3, this['rolePriceData'] = {}, this['boxlist'] = [], this['tool'] = qi4f;
  }return vceym7['prototype']['setChildMouseThroughs'] = function (k81jo9) {
    var gao$06 = k81jo9['_childs'] || [];for (var iqh4 = 0x0; iqh4 < gao$06['length']; iqh4++) gao$06[iqh4] && (gao$06[iqh4]['mouseThrough'] = !0x0);
  }, vceym7['prototype']['show'] = function () {
    if ('1' === this['tool']['data']['on']) {
      this['main'] = new fzy5b2d['demoui']['MainUI'](), Laya['stage']['addChild'](this['main']), this['main']['mouseThrough'] = !0x0;var mv5yec = this['main']['_childs'] || [];for (var f3t = 0x0; f3t < mv5yec['length']; f3t++) mv5yec[f3t]['mouseThrough'] = !0x0;this['setChildMouseThroughs'](this['main']['_childs']), this['setChildMouseThroughs'](this['main']['_childs'][0x0]), this['initIcon'](), this['initEvent'](), this['initView'](), foj8ag['init']();
    }
  }, vceym7['prototype']['initView'] = function () {
    var vcy5me = this,
        xs9w_n = this['tool']['data']['follow_down_words']['replace'](/\\n/g, '\x0a');this['main']['box_1_lab_info']['text'] = xs9w_n;for (var d2b5u = 0x1; d2b5u <= this['tool']['data']['follow_gift_list']['length']; d2b5u++) {
      var th36 = this['tool']['data']['follow_gift_list'][d2b5u - 0x1];this['main']['box_1_img_' + d2b5u]['skin'] = th36['url'], this['main']['box_1_lab_' + d2b5u]['text'] = th36['name'];
    }for (d2b5u = 0x1; d2b5u <= this['tool']['data']['vip_box_list']['length']; d2b5u++) {
      th36 = this['tool']['data']['vip_box_list'][d2b5u - 0x1], (this['main']['box_2_img_' + d2b5u]['skin'] = th36['url'], this['main']['box_2_lab_' + d2b5u]['text'] = th36['name']);
    }this['main']['box_2_lab_m_1']['text'] = '方法一：单日充值' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_m_2']['text'] = '方法二：历史累计充值' + +this['tool']['data']['y'] + '元', this['main']['box_2_lab_v_1']['text'] = (this['rolePriceData']['todayPrice'] || 0x0) + '/' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_v_2']['text'] = (this['rolePriceData']['allPrice'] || 0x0) + '/' + +this['tool']['data']['y'] + '元', this['main']['box_2_btn_copy']['skin'] = this['tool']['copyIcon'], this['main']['box_2_btn_get']['skin'] = this['tool']['getIcon'], this['main']['box_2_btn_copy']['visible'] = !0x1, this['main']['box_2_btn_get']['on'](Laya['Event']['CLICK'], this, function () {
      0x0 != vcy5me['rolePriceData']['is_vip'] ? (vcy5me['main']['box_2_lab_wx']['text'] = vcy5me['tool']['data']['vip_wx'], vcy5me['main']['box_2_btn_copy']['visible'] = !0x0) : foj8ag['msg']('请先获取vip资格');
    }), this['main']['box_2_btn_copy']['on'](Laya['Event']['CLICK'], this, function () {
      vcy5me['copyText'](vcy5me['tool']['data']['vip_wx']);
    }), this['main']['box_2_addclick']['on'](Laya['Event']['CLICK'], this, function () {
      0x0 != vcy5me['rolePriceData']['is_vip'] && (vcy5me['main']['box_help']['visible'] = !0x0);
    }), this['main']['box_help_close']['on'](Laya['Event']['CLICK'], this, function () {
      vcy5me['main']['box_help']['visible'] = !0x1;
    }), this['main']['box_help_bg']['skin'] = this['tool']['data']['vip_customer_service_not_add'], this['main']['box_help_qrcode']['skin'] = this['tool']['data']['vip_qrcode'], this['main']['box_help_qrcode']['scaleX'] = 0xa0 / this['main']['box_help_qrcode']['width'], this['main']['box_help_qrcode']['scaleY'] = 0xa0 / this['main']['box_help_qrcode']['width'], this['main']['box_3_panel']['vScrollBar']['visible'] = !0x1, this['main']['box_3_panel']['vScrollBarSkin'] = 'common_atlas/scrollBar.png';
  }, vceym7['prototype']['initIcon'] = function () {
    this['icon'] = new Laya['Image'](), this['icon']['skin'] = this['tool']['data']['basics_image_url'], this['icon']['x'] = 0x0, this['icon']['y'] = 0xc8, this['icon']['width'] = 0x66, this['icon']['height'] = 0x6f, this['main']['addChild'](this['icon']), this['icon']['on'](Laya['Event']['MOUSE_DOWN'], this, this['iconPress']), this['icon']['on'](Laya['Event']['MOUSE_UP'], this, this['iconUp']), this['icon']['on'](Laya['Event']['MOUSE_MOVE'], this, this['iconMove']), this['dragRect'] = new Laya['Rectangle'](-this['icon']['width'] / 0x2, 0x0, Laya['stage']['width'], Laya['stage']['height'] - this['icon']['height'] / 0x2);
  }, vceym7['prototype']['initEvent'] = function () {
    var myz = this;this['main']['btn_1']['on'](Laya['Event']['CLICK'], this, function () {
      0x1 != myz['page'] && myz['page1']();
    }), this['main']['btn_2']['on'](Laya['Event']['CLICK'], this, function () {
      0x2 != myz['page'] && myz['page2']();
    }), this['main']['btn_3']['on'](Laya['Event']['CLICK'], this, function () {
      0x3 != myz['page'] && myz['page3']();
    }), this['main']['btn_close']['on'](Laya['Event']['CLICK'], this, function () {
      myz['main']['bg']['x'] = -0x2ee, myz['icon']['visible'] = !0x0;
    });
  }, vceym7['prototype']['initBoard'] = function () {
    this['isInitBoard'] = !0x0, this['page1']();
  }, vceym7['prototype']['showBoard'] = function () {
    this['main']['bg']['x'] = 0x0, this['icon']['visible'] = !0x1, this['tool']['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=sidebarApiRoleId&role_id=' + fn9sk_1['sygame']['role_id'] + '&channel=' + fn9sk_1['sygame']['channel'], this['rolePriceHandler']['bind'](this), this['roleError']['bind'](this));
  }, vceym7['prototype']['page1'] = function () {
    this['page'] = 0x1, this['main']['bg']['skin'] = this['tool']['data']['public_code'], this['main']['box_1_show']['visible'] = !0x0, this['main']['box_2_show']['visible'] = !0x1, this['main']['box_3_show']['visible'] = !0x1;
  }, vceym7['prototype']['page2'] = function () {
    this['page'] = 0x2, this['main']['bg']['skin'] = this['tool']['data']['vip_customer_service'], this['main']['box_1_show']['visible'] = !0x1, this['main']['box_2_show']['visible'] = !0x0, this['main']['box_3_show']['visible'] = !0x1;
  }, vceym7['prototype']['page3'] = function () {
    this['page'] = 0x3, this['main']['bg']['skin'] = this['tool']['data']['game_center_image_url'], this['main']['box_1_show']['visible'] = !0x1, this['main']['box_2_show']['visible'] = !0x1, this['main']['box_3_show']['visible'] = !0x0, this['sendBox'] || this['getBoxList'](0x0), this['sendBox'] = !0x0, fby5emv && fby5emv['syClickOpenBox']();
  }, vceym7['prototype']['getBoxList'] = function (ymbze) {
    var $rht = this;fby5emv && fby5emv['syGetBoxList']({ 'page': ymbze, 'count': 0xc })['then'](function (tf$r3h) {
      tf$r3h = tf$r3h['data'], 0x3e9 == tf$r3h['status'] ? tf$r3h['data'] && tf$r3h['data']['length'] && ($rht['boxlist'] = $rht['boxlist']['concat'](tf$r3h['data']), ymbze++, $rht['getBoxList'](ymbze)) : $rht['boxListHandler']();
    });
  }, vceym7['prototype']['copyText'] = function (y5bem) {
    try {
      wx['setClipboardData']({ 'data': y5bem, 'success': function (dy52b) {
          console['log']('复制成功:', dy52b);
        } });
    } catch (iqfht) {}
  }, vceym7['prototype']['rolePriceHandler'] = function (yev7mc) {
    this['rolePriceData'] = JSON['parse'](yev7mc), 0x3e9 === this['rolePriceData']['status'] && (this['main']['box_2_lab_v_1']['text'] = (this['rolePriceData']['todayPrice'] || 0x0) + '/' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_v_2']['text'] = (this['rolePriceData']['allPrice'] || 0x0) + '/' + +this['tool']['data']['y'] + '元');
  }, vceym7['prototype']['roleError'] = function () {}, vceym7['prototype']['boxListHandler'] = function () {
    var _9ks = this;for (var a6t$ = 0x0; a6t$ < this['boxlist']['length']; a6t$++) !function (v5cy) {
      var bm5yev = _9ks['boxlist'][v5cy],
          cvym = new fzy5b2d['demoui']['BoxItemUI']();cvym['icon']['skin'] = bm5yev['icon'], cvym['title']['text'] = bm5yev['title'], cvym['x'] = v5cy % 0x3 * 0xa0, cvym['y'] = 0xa0 * (v5cy / 0x3 ^ 0x0), _9ks['main']['box_3_panel']['addChild'](cvym);var zd2b5 = { 'appid': fn9sk_1['sygame']['appid'], 'game_id': bm5yev['game_id'], 'jump_appid': bm5yev['jump_appid'], 'jump_path': bm5yev['jump_path'], 'tunnel_id': bm5yev['tunnel_id'], 'uv': 0x0, 'wecha_id': fn9sk_1['sygame']['openid'] },
          zdwux2 = bm5yev['preview_img'],
          f3trh = bm5yev['jump_type'],
          $tfhr3 = bm5yev['kf_session'];cvym['on'](Laya['Event']['CLICK'], _9ks, function () {
        fby5emv && fby5emv['syClickBox']({ 'game_id': bm5yev['game_id'], 'tunnel_id': bm5yev['tunnel_id'], 'jump_appid': bm5yev['jump_appid'], 'jump_path': bm5yev['jump_path'] })['then'](function (hif4p) {
          '0' === f3trh ? wx['navigateToMiniProgram']({ 'appId': zd2b5['jump_appid'], 'path': zd2b5['jump_path'], 'fail': function (db2y5z) {
              zdwux2 && wx['previewImage']({ 'urls': [zdwux2] });
            } }) : '1' === f3trh ? zdwux2 && wx['previewImage']({ 'urls': [zdwux2] }) : '2' === f3trh && $tfhr3 && wx['openCustomerServiceConversation']({ 'sessionFrom': $tfhr3, 'showMessageCard': !0x0, 'sendMessageTitle': '', 'sendMessagePath': '', 'sendMessageImg': '' });
        });
      });
    }(a6t$);
  }, vceym7['prototype'].downx = 0,vceym7['prototype'].downy = 0,vceym7['prototype']['boxListError'] = function () {}, vceym7['prototype']['boxClickHandler'] = function () {}, vceym7['prototype']['iconPress'] = function (mve5cy) {
    this.downx = mve5cy.target.x;
    this.downy = mve5cy.target.y;
    this['icon']['startDrag'](this['dragRect']), this['isMove'] = !0x1, this['isPress'] = !0x0;
  }, vceym7['prototype']['iconMove'] = function (e) {
    this['isMove'] = !0x0;
  }, vceym7['prototype']['iconUp'] = function (e) {
    var targetx = e.target.x;
    var targety = e.target.y;
    
    this['icon']['stopDrag'](), targetx == this.downx && targety == this.downy && (this['isInitBoard'] || this['initBoard'](), this['showBoard']()), this['isMove'] = !0x1, this['isPress'] = !0x1;
  }, vceym7;
}(),
    fzy5b2d;!function (mzyeb) {
  function kn819j() {
    return sn9w_['call'](this) || this;
  }var $rth3f, sn9w_;$rth3f = mzyeb['demoui'] || (mzyeb['demoui'] = {}), sn9w_ = laya['ui']['View'], fybmv5e(kn819j, sn9w_), kn819j['prototype']['createChildren'] = function () {
    laya['ui']['View']['regComponent']('Text', laya['display']['Text']), sn9w_['prototype']['createChildren']['call'](this), this['createView'](mzyeb['demoui']['BoxItemUI']['uiView']);
  }, kn819j['uiView'] = { 'type': 'View', 'props': { 'width': 0xb4, 'height': 0xa0 }, 'child': [{ 'type': 'Image', 'props': { 'y': 0x3, 'x': 0x20, 'width': 0x73, 'var': 'icon', 'height': 0x73 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x79, 'x': -0x21, 'width': 0xb4, 'var': 'title', 'valign': 'middle', 'height': 0x22, 'fontSize': 0x16, 'color': '#441d1c', 'align': 'center' } }] }] }, $rth3f['BoxItemUI'] = kn819j;
}(fzy5b2d = fzy5b2d || {}), function (rt$f3) {
  function dyb() {
    return ifhpq['call'](this) || this;
  }var hf3tqr, ifhpq;hf3tqr = rt$f3['demoui'] || (rt$f3['demoui'] = {}), ifhpq = laya['ui']['View'], fybmv5e(dyb, ifhpq), dyb['prototype']['createChildren'] = function () {
    laya['ui']['View']['regComponent']('Text', laya['display']['Text']), ifhpq['prototype']['createChildren']['call'](this), this['createView'](rt$f3['demoui']['MainUI']['uiView']);
  }, dyb['uiView'] = { 'type': 'View', 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x2ee, 'top': 0x0, 'right': 0x0, 'left': 0x0, 'height': 0x536, 'bottom': 0x0 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x2ee, 'height': 0x536, 'centerY': 0x0 }, 'child': [{ 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x2ee, 'var': 'bg', 'height': 0x536 }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x2ee, 'visible': !0x1, 'var': 'box_1_show', 'height': 0x536, 'centerY': 0x0 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x253, 'x': 0x2e, 'width': 0x1d0, 'var': 'box_1_lab_info', 'leading': 0xa, 'height': 0x97, 'fontSize': 0x18, 'color': '#a959ee' } }, { 'type': 'HBox', 'props': { 'y': 0x2ee, 'x': 0x14, 'width': 0x1fe, 'space': 0x35, 'height': 0x78, 'align': 'top' }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x58, 'var': 'box_1_img_1', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_1', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0xa, 'x': 0xa, 'width': 0x58, 'var': 'box_1_img_2', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_2', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x14, 'x': 0x14, 'width': 0x58, 'var': 'box_1_img_3', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_3', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x1e, 'x': 0x1e, 'width': 0x58, 'var': 'box_1_img_4', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_4', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }] }] }, { 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'visible': !0x1, 'var': 'box_2_show' }, 'child': [{ 'type': 'HBox', 'props': { 'y': 0x220, 'x': 0x18, 'width': 0x1f4, 'space': 0x2c, 'height': 0x56, 'align': 'top' }, 'child': [{ 'type': 'Image', 'props': { 'y': 2.5, 'x': 0x0, 'width': 0x58, 'var': 'box_2_img_1', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_1', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0xc, 'x': 0xa, 'width': 0x58, 'var': 'box_2_img_2', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_2', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x16, 'x': 0x14, 'width': 0x58, 'var': 'box_2_img_3', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_3', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x20, 'x': 0x1e, 'width': 0x58, 'var': 'box_2_img_4', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_4', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x2a, 'x': 0x28, 'width': 0x58, 'var': 'box_2_img_5', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_5', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }] }, { 'type': 'Box', 'props': { 'y': 0x384, 'x': 0x0, 'width': 0x221, 'height': 0x44 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x0, 'x': 0x28, 'width': 0x122, 'var': 'box_2_lab_m_1', 'text': '方法一\uFF1A单日充值1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300' } }, { 'type': 'Text', 'props': { 'y': 0x1e, 'x': 0x28, 'width': 0x122, 'var': 'box_2_lab_m_2', 'text': '方法一\uFF1A历史累计充值1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300' } }, { 'type': 'Text', 'props': { 'y': 0x0, 'x': 0x141, 'width': 0xa4, 'var': 'box_2_lab_v_1', 'text': '1000/1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300', 'align': 'right' } }, { 'type': 'Text', 'props': { 'y': 0x1e, 'x': 0x141, 'width': 0xa4, 'var': 'box_2_lab_v_2', 'text': '1000/1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300', 'align': 'right' } }] }, { 'type': 'Image', 'props': { 'y': 0x1aa, 'x': 0x159, 'width': 0x66, 'var': 'box_2_btn_get', 'stateNum': 0x1, 'height': 0x26 } }, { 'type': 'Image', 'props': { 'y': 0x1aa, 'x': 0x159, 'width': 0x66, 'var': 'box_2_btn_copy', 'stateNum': 0x1, 'height': 0x26 } }, { 'type': 'Button', 'props': { 'y': 0x1d2, 'x': 0x126, 'width': 0xc9, 'var': 'box_2_addclick', 'stateNum': 0x1, 'height': 0x1b } }, { 'type': 'Text', 'props': { 'y': 0x13c, 'x': 0x17a, 'width': 0xa3, 'var': 'box_2_lab_wx', 'height': 0x1f, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'left' } }] }, { 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'visible': !0x1, 'var': 'box_3_show' }, 'child': [{ 'type': 'Panel', 'props': { 'y': 0xf5, 'x': 0x10, 'width': 0x201, 'var': 'box_3_panel', 'vScrollBarSkin': '', 'height': 0x29e } }] }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0x0, 'width': 0xbb, 'var': 'btn_1', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0xba, 'width': 0xbb, 'var': 'btn_2', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0x177, 'width': 0xbb, 'var': 'btn_3', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x203, 'x': 0x22e, 'width': 0x25, 'var': 'btn_close', 'height': 0x8f } }, { 'type': 'Box', 'props': { 'width': 0x2ee, 'visible': !0x1, 'var': 'box_help', 'height': 0x536 }, 'child': [{ 'type': 'Sprite', 'props': { 'y': 0x0, 'x': 0x0, 'mouseThrough': !0x1, 'alpha': 0.7 }, 'child': [{ 'type': 'Rect', 'props': { 'width': 0x2ee, 'lineWidth': 0x1, 'height': 0x536, 'fillColor': '#000000' } }] }, { 'type': 'Image', 'props': { 'y': 0x158, 'x': 0x28, 'width': 0x1d2, 'var': 'box_help_bg', 'height': 0x203 }, 'child': [{ 'type': 'Button', 'props': { 'y': -0x1, 'x': 0x1a0, 'width': 0x33, 'var': 'box_help_close', 'height': 0x28 } }, { 'type': 'Image', 'props': { 'y': 0x3f, 'x': 0x98, 'width': 0xa0, 'var': 'box_help_qrcode', 'height': 0xa0 } }] }] }] }] }] }, hf3tqr['MainUI'] = dyb;
}(fzy5b2d = fzy5b2d || {}), function (tqrh3f) {
  function nk1js9() {
    return s_x9nw['call'](this) || this;
  }var meyb, s_x9nw;meyb = tqrh3f['demoui'] || (tqrh3f['demoui'] = {}), s_x9nw = laya['ui']['View'], fybmv5e(nk1js9, s_x9nw), nk1js9['prototype']['createChildren'] = function () {
    laya['ui']['View']['regComponent']('Text', laya['display']['Text']), s_x9nw['prototype']['createChildren']['call'](this), this['createView'](tqrh3f['demoui']['ToastUI']['uiView']);
  }, nk1js9['uiView'] = { 'type': 'View', 'props': { 'width': 0x2ee, 'height': 0x536 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x12c, 'height': 0x32, 'centerY': 0x0, 'centerX': 0x0 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x12c, 'height': 0x32, 'centerX': 0x0, 'alpha': 0.5 }, 'child': [{ 'type': 'Rect', 'props': { 'width': 0x12c, 'lineWidth': 0x1, 'height': 0x32, 'fillColor': '#382f2f' } }] }, { 'type': 'Text', 'props': { 'width': 0x12c, 'var': 'lab_msg', 'valign': 'middle', 'text': 'text', 'height': 0x32, 'fontSize': 0x18, 'color': '#ffffff', 'align': 'center' } }] }] }, meyb['ToastUI'] = nk1js9;
}(fzy5b2d = fzy5b2d || {});var foj8ag = function () {
  function rt36$h() {}return rt36$h['init'] = function () {
    this['ui'] || (this['ui'] = new fzy5b2d['demoui']['ToastUI'](), this['ui']['visible'] = !0x1, Laya['stage']['addChild'](this['ui']));
  }, rt36$h['msg'] = function (db2w) {
    var ymveb = this;this['ui'] || rt36$h['init'](), this['ui']['visible'] = !0x0, this['ui']['lab_msg']['text'] = db2w, clearTimeout(this['interval']), this['interval'] = setTimeout(function () {
      ymveb['ui']['visible'] = !0x1;
    }, 0x7d0);
  }, rt36$h;
}();window['minitool'] = fmebv5;